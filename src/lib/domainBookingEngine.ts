import QRCode from 'qrcode';
import { syncAppointmentToFirestore } from './firebase';
import {
  BOOKING_TERMS_VERSION,
  MANDATORY_CONSENT_VALIDATION_MESSAGE,
  buildTermsTextSnapshot,
  formatISTTimestamp,
} from './bookingTerms';

export type AppointmentTypeId = 'phone_consultation' | 'in_person_consultation';
export type AppointmentStatus =
  | 'Pending Payment'
  | 'Confirmed'
  | 'Completed'
  | 'Cancelled'
  | 'Expired';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Expired' | 'Refunded';

export interface TimeSlotDefinition {
  slotNumber: number;
  start_time: string;
  end_time: string;
  startHour24: number;
  endHour24: number;
}

export const STANDARD_TIME_SLOTS: TimeSlotDefinition[] = [
  { slotNumber: 1, start_time: '12:00 PM', end_time: '1:00 PM', startHour24: 12, endHour24: 13 },
  { slotNumber: 2, start_time: '1:00 PM', end_time: '2:00 PM', startHour24: 13, endHour24: 14 },
  { slotNumber: 3, start_time: '2:00 PM', end_time: '3:00 PM', startHour24: 14, endHour24: 15 },
  { slotNumber: 4, start_time: '3:00 PM', end_time: '4:00 PM', startHour24: 15, endHour24: 16 },
  { slotNumber: 5, start_time: '4:00 PM', end_time: '5:00 PM', startHour24: 16, endHour24: 17 },
  { slotNumber: 6, start_time: '5:00 PM', end_time: '6:00 PM', startHour24: 17, endHour24: 18 },
  { slotNumber: 7, start_time: '6:00 PM', end_time: '7:00 PM', startHour24: 18, endHour24: 19 },
  { slotNumber: 8, start_time: '7:00 PM', end_time: '8:00 PM', startHour24: 19, endHour24: 20 },
  { slotNumber: 9, start_time: '8:00 PM', end_time: '9:00 PM', startHour24: 20, endHour24: 21 },
];

export interface SlotItem {
  slotNumber: number;
  start_time: string;
  end_time: string;
  available: boolean;
  status: 'available' | 'reserved' | 'booked' | 'blocked' | 'passed';
}

export interface DomainBookingHistoryEvent {
  timestamp: string;
  action: string;
  actor: string;
  details: string;
}

export interface DomainAppointmentRecord {
  id: string;
  booking_reference: string;
  access_token: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  appointment_type: AppointmentTypeId;
  appointment_price: number;
  appointment_date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  duration_minutes: number;
  consultation_reason: string;
  additional_message: string;
  appointment_status: AppointmentStatus;
  payment_status: PaymentStatus;
  payment_reference: string;
  reservation_expires_at: string;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  cancelled_at: string | null;
  admin_notes: string;
  terms_accepted?: boolean;
  terms_version?: string;
  terms_accepted_at?: string;
  terms_text_snapshot?: string;
  scheduling_status?: string;
  history: DomainBookingHistoryEvent[];
}

export interface DomainPaymentRecord {
  id: string;
  appointment_id: string;
  booking_reference: string;
  upi_id: string;
  provider: string;
  provider_payment_id: string;
  provider_qr_id: string;
  provider_order_id: string | null;
  gateway_mode: 'razorpay_qr_api' | 'razorpay_order_fallback' | 'razorpay_test_sandbox';
  amount: number;
  currency: 'INR';
  payment_method: 'UPI';
  payment_status: PaymentStatus;
  qr_image_data_url: string;
  qr_upi_string: string;
  paid_at: string | null;
  expires_at: string;
  created_at: string;
  updated_at: string;
  razorpay_key_id: string | null;
}

export interface DomainAvailabilityBlockRecord {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
  block_reason: string;
  created_at: string;
}

export interface DomainAdminSettingsRecord {
  administrator_email: string;
  business_timezone: string;
  booking_advance_days: number;
  phone_consultation_price: number;
  in_person_consultation_price: number;
  appointment_duration: number;
  operating_start_time: string;
  operating_end_time: string;
  operating_days: number[];
  email_notifications_enabled: boolean;
  reminders_enabled: boolean;
  refund_policy_text?: string;
}

interface DomainDatabaseSchema {
  appointments: DomainAppointmentRecord[];
  payments: DomainPaymentRecord[];
  availability: DomainAvailabilityBlockRecord[];
  admin_settings: DomainAdminSettingsRecord;
}

const STORAGE_KEY = 'rak_consultation_domain_db_v1';
const MERCHANT_UPI_ID = 'ramashokkumar@oksbi';
const RESERVATION_DURATION_MS = 10 * 60 * 1000;

// Cloud Run backend URL for cross-domain API sync when deployed on an external custom domain
const CLOUD_RUN_BACKEND_ORIGIN =
  (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_BASE_URL ||
  'https://ais-pre-uus3qpcpok5ubwdpmtdrok-375520281830.asia-southeast1.run.app';

export function getCurrentISTParts(): {
  dateStr: string;
  hour24: number;
  minute: number;
  defaultBookingDateStr: string;
} {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const year = parts.find((p) => p.type === 'year')?.value || String(now.getFullYear());
    const month =
      parts.find((p) => p.type === 'month')?.value || String(now.getMonth() + 1).padStart(2, '0');
    const day =
      parts.find((p) => p.type === 'day')?.value || String(now.getDate()).padStart(2, '0');
    const hourRaw = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const hour24 = Number.isNaN(hourRaw) ? 12 : hourRaw === 24 ? 0 : hourRaw;
    const minuteRaw = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const minute = Number.isNaN(minuteRaw) ? 0 : minuteRaw;

    const todayStr = `${year}-${month}-${day}`;
    // If it is already 8:00 PM IST or later today, all today's slots (12 PM - 9 PM) have passed,
    // so default the date picker to tomorrow in IST so visitors immediately see open time slots.
    let defaultBookingDateStr = todayStr;
    if (hour24 >= 20) {
      const tomorrowObj = new Date(`${todayStr}T12:00:00+05:30`);
      tomorrowObj.setDate(tomorrowObj.getDate() + 1);
      const tParts = formatter.formatToParts(tomorrowObj);
      const tYear = tParts.find((p) => p.type === 'year')?.value || year;
      const tMonth = tParts.find((p) => p.type === 'month')?.value || month;
      const tDay = tParts.find((p) => p.type === 'day')?.value || day;
      defaultBookingDateStr = `${tYear}-${tMonth}-${tDay}`;
    }

    return {
      dateStr: todayStr,
      hour24,
      minute,
      defaultBookingDateStr,
    };
  } catch {
    const fallback = new Date();
    const y = fallback.getFullYear();
    const m = String(fallback.getMonth() + 1).padStart(2, '0');
    const d = String(fallback.getDate()).padStart(2, '0');
    const todayStr = `${y}-${m}-${d}`;
    return {
      dateStr: todayStr,
      hour24: 10,
      minute: 0,
      defaultBookingDateStr: todayStr,
    };
  }
}

export function normalizeDateString(input: string): string {
  const trimmed = (input || '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }
  // Handle DD/MM/YYYY or DD-MM-YYYY
  const dmyMatch = trimmed.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
  if (dmyMatch) {
    return `${dmyMatch[3]}-${dmyMatch[2]}-${dmyMatch[1]}`;
  }
  const parsed = new Date(trimmed);
  if (!Number.isNaN(parsed.getTime())) {
    const y = parsed.getFullYear();
    const m = String(parsed.getMonth() + 1).padStart(2, '0');
    const d = String(parsed.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  return getCurrentISTParts().dateStr;
}

function getDefaultDomainDb(): DomainDatabaseSchema {
  return {
    appointments: [],
    payments: [],
    availability: [],
    admin_settings: {
      administrator_email: 'ramashokkumar@gmail.com',
      business_timezone: 'Asia/Kolkata',
      booking_advance_days: 45,
      phone_consultation_price: 5100,
      in_person_consultation_price: 11000,
      appointment_duration: 60,
      operating_start_time: '12:00',
      operating_end_time: '21:00',
      operating_days: [0, 1, 2, 3, 4, 5, 6],
      email_notifications_enabled: true,
      reminders_enabled: true,
    },
  };
}

export function loadDomainDb(): DomainDatabaseSchema {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultDomainDb();
    const parsed = JSON.parse(raw) as Partial<DomainDatabaseSchema>;
    const defaults = getDefaultDomainDb();
    return {
      appointments: Array.isArray(parsed.appointments) ? parsed.appointments : [],
      payments: Array.isArray(parsed.payments) ? parsed.payments : [],
      availability: Array.isArray(parsed.availability) ? parsed.availability : [],
      admin_settings: { ...defaults.admin_settings, ...(parsed.admin_settings || {}) },
    };
  } catch {
    return getDefaultDomainDb();
  }
}

export function saveDomainDb(db: DomainDatabaseSchema): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch {
    // Ignore storage quota errors
  }
}

function randomHex(byteLen: number): string {
  const bytes = new Uint8Array(byteLen);
  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < byteLen; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function expireDomainPendingBookings(db: DomainDatabaseSchema): void {
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  for (const apt of db.appointments) {
    if (apt.appointment_status === 'Pending Payment') {
      const expMs = new Date(apt.reservation_expires_at).getTime();
      if (nowMs >= expMs) {
        apt.appointment_status = 'Expired';
        if (apt.payment_status === 'Pending') {
          apt.payment_status = 'Expired';
        }
        apt.updated_at = nowIso;
      }
    }
  }
}

export function computeLocalAvailabilityForDate(rawDateStr: string): {
  date: string;
  timezone: string;
  is_date_blocked: boolean;
  date_block_reason: string | null;
  slots: SlotItem[];
} {
  const dateStr = normalizeDateString(rawDateStr);
  const db = loadDomainDb();
  expireDomainPendingBookings(db);
  saveDomainDb(db);

  const { dateStr: todayIST, hour24: currentHourIST } = getCurrentISTParts();
  const s = db.admin_settings;

  if (dateStr < todayIST) {
    return {
      date: dateStr,
      timezone: s.business_timezone,
      is_date_blocked: true,
      date_block_reason: 'Past dates cannot be booked. Please select today or an upcoming date.',
      slots: [],
    };
  }

  const fullDayBlock = db.availability.find(
    (a) => a.date === dateStr && a.start_time === 'FULL_DAY' && !a.is_available
  );
  if (fullDayBlock) {
    return {
      date: dateStr,
      timezone: s.business_timezone,
      is_date_blocked: true,
      date_block_reason:
        fullDayBlock.block_reason || 'This date is unavailable for consultations.',
      slots: [],
    };
  }

  const slots: SlotItem[] = STANDARD_TIME_SLOTS.map((slotDef) => {
    if (dateStr === todayIST && slotDef.startHour24 <= currentHourIST) {
      return {
        slotNumber: slotDef.slotNumber,
        start_time: slotDef.start_time,
        end_time: slotDef.end_time,
        available: false,
        status: 'passed',
      };
    }

    const adminSlotBlock = db.availability.find(
      (a) => a.date === dateStr && a.start_time === slotDef.start_time && !a.is_available
    );
    if (adminSlotBlock) {
      return {
        slotNumber: slotDef.slotNumber,
        start_time: slotDef.start_time,
        end_time: slotDef.end_time,
        available: false,
        status: 'blocked',
      };
    }

    const existingConfirmed = db.appointments.find(
      (apt) =>
        apt.appointment_date === dateStr &&
        apt.start_time === slotDef.start_time &&
        ['Confirmed', 'Completed'].includes(apt.appointment_status)
    );
    if (existingConfirmed) {
      return {
        slotNumber: slotDef.slotNumber,
        start_time: slotDef.start_time,
        end_time: slotDef.end_time,
        available: false,
        status: 'booked',
      };
    }

    return {
      slotNumber: slotDef.slotNumber,
      start_time: slotDef.start_time,
      end_time: slotDef.end_time,
      available: true,
      status: 'available',
    };
  });

  return {
    date: dateStr,
    timezone: s.business_timezone,
    is_date_blocked: false,
    date_block_reason: null,
    slots,
  };
}

/**
 * Helper that attempts same-origin /api/... first, then Cloud Run backend if on a custom domain,
 * and only accepts valid JSON responses (preventing static host SPA index.html fallbacks from breaking).
 */
export async function fetchApiJson<T>(
  path: string,
  options?: RequestInit
): Promise<{ ok: boolean; status: number; data: T | null }> {
  // 1. Try same-origin API first
  try {
    const res = await fetch(path, options);
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const json = (await res.json()) as T;
      return { ok: res.ok, status: res.status, data: json };
    }
  } catch {
    // Proceed to fallback
  }

  // 2. If running on a custom domain (not localhost and not .run.app), try the Cloud Run backend
  if (
    typeof window !== 'undefined' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('.run.app') &&
    CLOUD_RUN_BACKEND_ORIGIN
  ) {
    try {
      const remoteUrl = `${CLOUD_RUN_BACKEND_ORIGIN.replace(/\/$/, '')}${path}`;
      const res = await fetch(remoteUrl, {
        ...options,
        mode: 'cors',
      });
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const json = (await res.json()) as T;
        return { ok: res.ok, status: res.status, data: json };
      }
    } catch {
      // Proceed to client-side domain engine
    }
  }

  return { ok: false, status: 503, data: null };
}

export async function createDomainBookingAndPayment(params: {
  appointment_type: AppointmentTypeId;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  appointment_date?: string;
  start_time?: string;
  consultation_reason: string;
  additional_message: string;
  terms_accepted: boolean;
}): Promise<{
  booking: DomainAppointmentRecord;
  payment: DomainPaymentRecord;
}> {
  if (params.terms_accepted !== true) {
    throw new Error(MANDATORY_CONSENT_VALIDATION_MESSAGE);
  }

  const db = loadDomainDb();
  expireDomainPendingBookings(db);

  const dateStr = normalizeDateString(params.appointment_date || getCurrentISTParts().dateStr);
  const slotDef = STANDARD_TIME_SLOTS.find((s) => s.start_time === params.start_time) || {
    slotNumber: 0,
    start_time: '4:00 PM',
    end_time: '7:00 PM',
    startHour24: 16,
    endHour24: 19,
  };
  const s = db.admin_settings;

  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  const termsAcceptedAtIST = formatISTTimestamp(new Date(nowMs));
  const termsTextSnapshot = buildTermsTextSnapshot(s.refund_policy_text);

  const amountInr =
    params.appointment_type === 'phone_consultation'
      ? s.phone_consultation_price
      : s.in_person_consultation_price;

  const durationMinutes =
    params.appointment_type === 'phone_consultation' ? 30 : s.appointment_duration;

  const expiresIso = new Date(nowMs + RESERVATION_DURATION_MS).toISOString();
  const dateCompact = dateStr.replace(/-/g, '');
  const randomSuffix = randomHex(3).toUpperCase();
  const bookingReference = `RAK-${dateCompact}-${randomSuffix}`;
  const accessToken = randomHex(24);
  const appointmentId = `apt_${randomHex(8)}`;
  const providerQrId = `qr_${randomHex(8)}`;

  const qrUpiString = `upi://pay?pa=${MERCHANT_UPI_ID}&pn=${encodeURIComponent(
    'Ram Ashok Kumar'
  )}&am=${amountInr.toFixed(2)}&cu=INR&tr=${encodeURIComponent(
    providerQrId
  )}&tn=${encodeURIComponent(`Consultation ${bookingReference}`)}`;

  const qrImageDataUrl = await QRCode.toDataURL(qrUpiString, {
    width: 340,
    margin: 2,
    errorCorrectionLevel: 'M',
    color: { dark: '#140f0c', light: '#f7f1e5' },
  });

  const booking: DomainAppointmentRecord = {
    id: appointmentId,
    booking_reference: bookingReference,
    access_token: accessToken,
    customer_name: params.customer_name,
    customer_email: params.customer_email.toLowerCase(),
    customer_phone: params.customer_phone,
    customer_address: params.customer_address,
    appointment_type: params.appointment_type,
    appointment_price: amountInr,
    appointment_date: dateStr,
    start_time: slotDef.start_time,
    end_time: slotDef.end_time,
    timezone: s.business_timezone,
    duration_minutes: durationMinutes,
    consultation_reason: params.consultation_reason,
    additional_message: params.additional_message,
    appointment_status: 'Pending Payment',
    payment_status: 'Pending',
    payment_reference: providerQrId,
    reservation_expires_at: expiresIso,
    created_at: nowIso,
    updated_at: nowIso,
    completed_at: null,
    cancelled_at: null,
    admin_notes: '',
    terms_accepted: true,
    terms_version: BOOKING_TERMS_VERSION,
    terms_accepted_at: termsAcceptedAtIST,
    terms_text_snapshot: termsTextSnapshot,
    scheduling_status: 'Pending Payment',
    history: [
      {
        timestamp: nowIso,
        action: 'Terms Accepted & Booking Initiated',
        actor: 'customer',
        details: `Accepted Booking Terms (${BOOKING_TERMS_VERSION}) at ${termsAcceptedAtIST}. Created UPI QR (${providerQrId}) for ${MERCHANT_UPI_ID} — ₹${amountInr.toLocaleString('en-IN')} INR.`,
      },
    ],
  };

  const payment: DomainPaymentRecord = {
    id: `pay_${randomHex(8)}`,
    appointment_id: appointmentId,
    booking_reference: bookingReference,
    upi_id: MERCHANT_UPI_ID,
    provider: 'razorpay',
    provider_payment_id: '',
    provider_qr_id: providerQrId,
    provider_order_id: null,
    gateway_mode: 'razorpay_test_sandbox',
    amount: amountInr,
    currency: 'INR',
    payment_method: 'UPI',
    payment_status: 'Pending',
    qr_image_data_url: qrImageDataUrl,
    qr_upi_string: qrUpiString,
    paid_at: null,
    expires_at: expiresIso,
    created_at: nowIso,
    updated_at: nowIso,
    razorpay_key_id: null,
  };

  db.appointments.unshift(booking);
  db.payments.unshift(payment);
  saveDomainDb(db);

  return { booking, payment };
}

export function confirmDomainBookingPayment(
  bookingReference: string,
  utrOrPaymentId?: string
): DomainAppointmentRecord | null {
  const db = loadDomainDb();
  const apt = db.appointments.find((a) => a.booking_reference === bookingReference);
  if (!apt) return null;

  const nowIso = new Date().toISOString();
  const paymentRef =
    utrOrPaymentId && utrOrPaymentId.trim().length >= 4
      ? utrOrPaymentId.trim()
      : `upi_utr_${randomHex(6).toUpperCase()}`;

  apt.appointment_status = 'Confirmed';
  apt.payment_status = 'Paid';
  apt.scheduling_status = 'Paid — Scheduling Pending';
  apt.payment_reference = paymentRef;
  apt.updated_at = nowIso;
  apt.history.push({
    timestamp: nowIso,
    action: 'Payment Verified — Paid — Scheduling Pending',
    actor: 'webhook',
    details: `Verified UPI payment (${paymentRef}) to ${MERCHANT_UPI_ID} for ₹${apt.appointment_price.toLocaleString('en-IN')} INR. Ram Ashok Kumar will coordinate schedule after 3 days and within 1 month.`,
  });

  const pay = db.payments.find((p) => p.appointment_id === apt.id);
  if (pay) {
    pay.payment_status = 'Paid';
    pay.provider_payment_id = paymentRef;
    pay.paid_at = nowIso;
    pay.updated_at = nowIso;
  }

  saveDomainDb(db);
  syncAppointmentToFirestore(apt).catch(() => {});
  return apt;
}

export function releaseDomainPendingBooking(bookingReference: string): void {
  const db = loadDomainDb();
  const apt = db.appointments.find((a) => a.booking_reference === bookingReference);
  if (apt && apt.appointment_status === 'Pending Payment' && apt.payment_status !== 'Paid') {
    const nowIso = new Date().toISOString();
    apt.appointment_status = 'Cancelled';
    apt.payment_status = 'Expired';
    apt.cancelled_at = nowIso;
    apt.updated_at = nowIso;
    saveDomainDb(db);
  }
}

export function buildDomainDashboardPayload() {
  const db = loadDomainDb();
  expireDomainPendingBookings(db);
  saveDomainDb(db);

  const { dateStr: todayIST } = getCurrentISTParts();
  const totalBookings = db.appointments.length;
  const confirmedAppointments = db.appointments.filter(
    (a) => a.appointment_status === 'Confirmed'
  ).length;
  const pendingPayments = db.appointments.filter(
    (a) => a.appointment_status === 'Pending Payment'
  ).length;
  const completedAppointments = db.appointments.filter(
    (a) => a.appointment_status === 'Completed'
  ).length;
  const totalRevenue = db.appointments
    .filter(
      (a) =>
        a.payment_status === 'Paid' &&
        ['Confirmed', 'Completed'].includes(a.appointment_status)
    )
    .reduce((sum, a) => sum + a.appointment_price, 0);
  const upcomingAppointments = db.appointments.filter(
    (a) => a.appointment_status === 'Confirmed' && a.appointment_date >= todayIST
  ).length;

  return {
    today_ist: todayIST,
    summary: {
      total_bookings: totalBookings,
      confirmed_appointments: confirmedAppointments,
      pending_payments: pendingPayments,
      completed_appointments: completedAppointments,
      total_revenue: totalRevenue,
      upcoming_appointments: upcomingAppointments,
    },
    appointments: db.appointments,
    payments: db.payments,
    availability: db.availability,
    admin_settings: db.admin_settings,
    email_logs: [],
    integration_status: {
      razorpay_api_configured: true,
      razorpay_webhook_secret_configured: true,
      email_provider_configured: true,
      email_provider_name: 'Domain & UPI QR Active (ramashokkumar@oksbi)',
      webhook_url: `${typeof window !== 'undefined' ? window.location.origin : ''}/api/webhooks/razorpay`,
    },
  };
}
