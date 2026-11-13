import express, { Request, Response, NextFunction } from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import QRCode from 'qrcode';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { initializeApp as initAdminApp, getApps as getAdminApps } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';

dotenv.config();

const firebaseConfigPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
const firebaseConfig = fs.existsSync(firebaseConfigPath)
  ? JSON.parse(fs.readFileSync(firebaseConfigPath, 'utf8'))
  : { projectId: 'gen-lang-client-0140931567', apiKey: '' };

// Initialize Firebase Admin for server-side ID token verification
if (!getAdminApps().length) {
  initAdminApp({
    projectId: firebaseConfig.projectId,
  });
}
const adminAuth = getAdminAuth();

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export type AppointmentType = 'phone_consultation' | 'in_person_consultation';
export type AppointmentStatus =
  | 'Pending Payment'
  | 'Confirmed'
  | 'Completed'
  | 'Cancelled'
  | 'Expired';
export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Expired' | 'Refunded';

export interface BookingHistoryEvent {
  timestamp: string;
  action: string;
  actor: 'system' | 'customer' | 'admin' | 'webhook';
  details: string;
}

export interface AppointmentRecord {
  id: string;
  booking_reference: string;
  access_token: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  appointment_type: AppointmentType;
  appointment_price: number;
  appointment_date: string; // YYYY-MM-DD
  start_time: string; // e.g. "12:00 PM"
  end_time: string; // e.g. "1:00 PM"
  timezone: string; // "Asia/Kolkata"
  consultation_reason: string;
  additional_message: string;
  appointment_status: AppointmentStatus;
  payment_status: PaymentStatus;
  payment_reference: string;
  reservation_expires_at: string; // ISO string (10 minutes from creation)
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  cancelled_at: string | null;
  admin_notes: string;
  reminder_24h_sent?: boolean;
  reminder_1h_sent?: boolean;
  history: BookingHistoryEvent[];
}

export interface PaymentRecord {
  id: string;
  appointment_id: string;
  booking_reference: string;
  provider: 'razorpay';
  provider_payment_id: string;
  provider_qr_id: string;
  provider_order_id?: string;
  qr_image_data_url: string;
  qr_upi_string?: string;
  gateway_mode: 'razorpay_qr_api' | 'razorpay_order_fallback' | 'razorpay_test_sandbox';
  amount: number; // INR
  currency: 'INR';
  payment_method: 'UPI';
  payment_status: PaymentStatus;
  paid_at: string | null;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

export interface AvailabilityRecord {
  id: string;
  date: string; // YYYY-MM-DD
  start_time: string; // "12:00 PM" or "FULL_DAY"
  end_time: string; // "1:00 PM" or "FULL_DAY"
  is_available: boolean;
  block_reason: string;
  created_at: string;
  updated_at: string;
}

export interface AdminSettingsRecord {
  id: string;
  administrator_email: string;
  business_timezone: string;
  booking_advance_days: number;
  phone_consultation_price: number;
  in_person_consultation_price: number;
  appointment_duration: number;
  operating_start_time: string; // "12:00"
  operating_end_time: string; // "21:00"
  operating_days: number[]; // [0,1,2,3,4,5,6] (Sun-Sat)
  email_notifications_enabled: boolean;
  reminders_enabled: boolean;
  updated_at: string;
}

export interface EmailNotificationLog {
  id: string;
  appointment_id: string;
  booking_reference: string;
  recipient: string;
  type:
    | 'customer_confirmation'
    | 'admin_notification'
    | 'reminder_24h'
    | 'reminder_1h'
    | 'cancellation'
    | 'payment_expired';
  subject: string;
  status: 'sent' | 'logged_unconfigured' | 'failed';
  created_at: string;
  error?: string;
}

interface DatabaseSchema {
  appointments: AppointmentRecord[];
  payments: PaymentRecord[];
  availability: AvailabilityRecord[];
  admin_settings: AdminSettingsRecord;
  email_logs: EmailNotificationLog[];
  processed_webhook_ids: string[];
}

// ============================================================================
// STANDARD SCHEDULE TIME SLOTS (12:00 PM to 9:00 PM IST, 60-minute slots)
// ============================================================================

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

const RESERVATION_DURATION_MS = 10 * 60 * 1000; // 10 minutes

// ============================================================================
// PERSISTENT TRANSACTIONAL STORAGE WITH CONCURRENCY MUTEX
// ============================================================================

const DATA_DIR = path.resolve(process.cwd(), '.data');
const DB_FILE_PATH = path.join(DATA_DIR, 'appointments-db.json');

function getDefaultDatabase(): DatabaseSchema {
  return {
    appointments: [],
    payments: [],
    availability: [],
    admin_settings: {
      id: 'default',
      administrator_email: process.env.ADMINISTRATOR_EMAIL || 'ramashokkumar@gmail.com',
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
      updated_at: new Date().toISOString(),
    },
    email_logs: [],
    processed_webhook_ids: [],
  };
}

function loadDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE_PATH)) {
      const initial = getDefaultDatabase();
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE_PATH, 'utf8');
    const parsed = JSON.parse(raw) as Partial<DatabaseSchema>;
    const defaults = getDefaultDatabase();
    return {
      appointments: Array.isArray(parsed.appointments) ? parsed.appointments : [],
      payments: Array.isArray(parsed.payments) ? parsed.payments : [],
      availability: Array.isArray(parsed.availability) ? parsed.availability : [],
      admin_settings: { ...defaults.admin_settings, ...(parsed.admin_settings || {}) },
      email_logs: Array.isArray(parsed.email_logs) ? parsed.email_logs : [],
      processed_webhook_ids: Array.isArray(parsed.processed_webhook_ids)
        ? parsed.processed_webhook_ids
        : [],
    };
  } catch (err) {
    console.error('Error reading appointments database, initializing fresh store:', err);
    return getDefaultDatabase();
  }
}

function saveDatabase(db: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempPath = `${DB_FILE_PATH}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(db, null, 2), 'utf8');
    fs.renameSync(tempPath, DB_FILE_PATH);
  } catch (err) {
    console.error('Failed to persist appointments database:', err);
  }
}

// Mutex queue to guarantee strict serial execution of slot reservations & webhook updates
let lockChain: Promise<unknown> = Promise.resolve();

function withBookingLock<T>(task: (db: DatabaseSchema) => Promise<T> | T): Promise<T> {
  const next = lockChain.then(async () => {
    const db = loadDatabase();
    const result = await task(db);
    saveDatabase(db);
    return result;
  });
  lockChain = next.catch(() => {});
  return next;
}

// ============================================================================
// IST (Asia/Kolkata) DATE & TIME HELPERS
// ============================================================================

function getCurrentISTParts(): { dateStr: string; hour24: number; minute: number } {
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
  const year = parts.find((p) => p.type === 'year')?.value || '2026';
  const month = parts.find((p) => p.type === 'month')?.value || '01';
  const day = parts.find((p) => p.type === 'day')?.value || '01';
  const hourRaw = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
  const hour24 = hourRaw === 24 ? 0 : hourRaw;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

  return {
    dateStr: `${year}-${month}-${day}`,
    hour24,
    minute,
  };
}

function getSlotTimestampIST(dateStr: string, startTimeLabel: string): number {
  const slot = STANDARD_TIME_SLOTS.find((s) => s.start_time === startTimeLabel);
  const hour = slot ? String(slot.startHour24).padStart(2, '0') : '12';
  return new Date(`${dateStr}T${hour}:00:00+05:30`).getTime();
}

// ============================================================================
// AUTOMATIC EXPIRY OF PENDING BOOKINGS (expire-pending-bookings)
// ============================================================================

function expirePendingBookingsSync(db: DatabaseSchema): number {
  const nowMs = Date.now();
  const nowIso = new Date(nowMs).toISOString();
  let expiredCount = 0;

  for (const apt of db.appointments) {
    if (apt.appointment_status === 'Pending Payment') {
      const expiresMs = new Date(apt.reservation_expires_at).getTime();
      if (nowMs >= expiresMs) {
        apt.appointment_status = 'Expired';
        if (apt.payment_status === 'Pending') {
          apt.payment_status = 'Expired';
        }
        apt.updated_at = nowIso;
        apt.history.push({
          timestamp: nowIso,
          action: 'Reservation Expired',
          actor: 'system',
          details: '10-minute payment reservation window elapsed without verified payment. Slot released.',
        });
        expiredCount++;

        // Expire linked pending payments
        for (const pay of db.payments) {
          if (pay.appointment_id === apt.id && pay.payment_status === 'Pending') {
            pay.payment_status = 'Expired';
            pay.updated_at = nowIso;
          }
        }

        // Dispatch expiry notification asynchronously
        dispatchEmailNotification(db, apt, 'payment_expired').catch(() => {});
      }
    }
  }

  return expiredCount;
}

// ============================================================================
// TRANSACTIONAL EMAIL SERVICE (SMTP & RESEND SUPPORT)
// ============================================================================

function isEmailProviderConfigured(): { configured: boolean; provider: string } {
  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== '') {
    return { configured: true, provider: 'Resend HTTP API' };
  }
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_HOST.trim() !== ''
  ) {
    return { configured: true, provider: `SMTP (${process.env.SMTP_HOST})` };
  }
  return { configured: false, provider: 'Unconfigured (Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS)' };
}

async function sendRawEmail(to: string, subject: string, html: string): Promise<void> {
  const fromAddress =
    process.env.SMTP_FROM || 'Ram Ashok Kumar Consultations <no-reply@ramashokkumar.com>';

  if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== '') {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [to],
        subject,
        html,
      }),
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Resend API error: ${errText}`);
    }
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: parseInt(process.env.SMTP_PORT || '587', 10) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: fromAddress,
      to,
      subject,
      html,
    });
    return;
  }

  throw new Error('EMAIL_PROVIDER_NOT_CONFIGURED');
}

function getAppointmentTypeDisplay(type: AppointmentType): string {
  return type === 'phone_consultation'
    ? 'Private Phone Consultation (60 Minutes)'
    : 'In-Person Consultation (60 Minutes)';
}

function getMeetingMethodInstructions(type: AppointmentType): string {
  return type === 'phone_consultation'
    ? 'You will receive your consultation call at the scheduled appointment time on the phone number provided.'
    : 'Your meeting location will be confirmed individually before your scheduled appointment.';
}

async function dispatchEmailNotification(
  db: DatabaseSchema,
  apt: AppointmentRecord,
  type: EmailNotificationLog['type']
): Promise<void> {
  if (!db.admin_settings.email_notifications_enabled) return;

  const typeLabel = getAppointmentTypeDisplay(apt.appointment_type);
  const instructions = getMeetingMethodInstructions(apt.appointment_type);
  const adminEmail = db.admin_settings.administrator_email || 'ramashokkumar@gmail.com';

  let recipient = apt.customer_email;
  let subject = '';
  let html = '';

  if (type === 'customer_confirmation') {
    recipient = apt.customer_email;
    subject = `Booking Confirmed: ${apt.booking_reference} — Ram Ashok Kumar Consultation`;
    html = `
      <div style="font-family: Georgia, serif; background:#140f0c; color:#e6d7c3; padding:32px; border:1px solid #8a6d3b;">
        <h2 style="color:#d4af37; margin-top:0;">Your appointment has been successfully booked.</h2>
        <p>Namaste <strong>${apt.customer_name}</strong>,</p>
        <p>Your payment has been received and your appointment with <strong>Ram Ashok Kumar</strong> is confirmed. Please keep your booking reference number for future communication.</p>
        <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:14px;">
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Booking Reference:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;"><strong>${apt.booking_reference}</strong></td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Appointment Type:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${typeLabel}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Date:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.appointment_date}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Time (IST):</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.start_time} – ${apt.end_time} (Asia/Kolkata)</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Duration:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">60 Minutes</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Amount Paid:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">₹${apt.appointment_price.toLocaleString('en-IN')} INR</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Payment Status:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.payment_status} (${apt.payment_reference})</td></tr>
        </table>
        <p style="background:#1f1712; padding:14px; border-left:3px solid #d4af37;"><strong>Meeting Instructions:</strong> ${instructions}</p>
        <p style="font-size:12px; color:#a89882;">Correspondence Desk: ${adminEmail}</p>
      </div>
    `;
  } else if (type === 'admin_notification') {
    recipient = adminEmail;
    subject = `[New Confirmed Consultation] ${apt.booking_reference} — ${apt.customer_name}`;
    html = `
      <div style="font-family: Georgia, serif; background:#140f0c; color:#e6d7c3; padding:32px; border:1px solid #8a6d3b;">
        <h2 style="color:#d4af37; margin-top:0;">New Verified Consultation Booking</h2>
        <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:14px;">
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Booking Reference:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;"><strong>${apt.booking_reference}</strong></td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Customer Name:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.customer_name}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Email:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.customer_email}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Phone Number:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.customer_phone}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Address:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.customer_address}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Appointment Type:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${typeLabel}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Date & Time:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.appointment_date} | ${apt.start_time} – ${apt.end_time} IST</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Payment Amount:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">₹${apt.appointment_price.toLocaleString('en-IN')} INR (${apt.payment_status})</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Payment Reference:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.payment_reference}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Consultation Reason:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.consultation_reason}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #3a2e25; color:#bfa36f;">Additional Message:</td><td style="padding:8px; border-bottom:1px solid #3a2e25;">${apt.additional_message || '—'}</td></tr>
        </table>
      </div>
    `;
  } else if (type === 'reminder_24h' || type === 'reminder_1h') {
    const windowText = type === 'reminder_24h' ? '24 Hours' : '1 Hour';
    recipient = apt.customer_email;
    subject = `Upcoming Consultation Reminder (${windowText}): ${apt.booking_reference}`;
    html = `
      <div style="font-family: Georgia, serif; background:#140f0c; color:#e6d7c3; padding:32px; border:1px solid #8a6d3b;">
        <h2 style="color:#d4af37; margin-top:0;">Consultation Reminder (${windowText})</h2>
        <p>Namaste <strong>${apt.customer_name}</strong>,</p>
        <p>This is an automated reminder for your scheduled consultation with <strong>Ram Ashok Kumar</strong> (${apt.booking_reference}) on <strong>${apt.appointment_date}</strong> at <strong>${apt.start_time} – ${apt.end_time} IST</strong>.</p>
        <p>${instructions}</p>
      </div>
    `;
  } else if (type === 'cancellation') {
    recipient = apt.customer_email;
    subject = `Appointment Cancelled: ${apt.booking_reference} — Ram Ashok Kumar Consultation`;
    html = `
      <div style="font-family: Georgia, serif; background:#140f0c; color:#e6d7c3; padding:32px; border:1px solid #8a6d3b;">
        <h2 style="color:#d4af37; margin-top:0;">Appointment Cancellation Notice</h2>
        <p>Namaste <strong>${apt.customer_name}</strong>,</p>
        <p>Your appointment (Reference: <strong>${apt.booking_reference}</strong>) scheduled for <strong>${apt.appointment_date} (${apt.start_time} – ${apt.end_time} IST)</strong> has been marked as cancelled.</p>
        <p>For rescheduling or payment inquiries, please contact ${adminEmail} with your booking reference.</p>
      </div>
    `;
  } else if (type === 'payment_expired') {
    recipient = apt.customer_email;
    subject = `Reservation Expired: ${apt.booking_reference} — Ram Ashok Kumar Consultation`;
    html = `
      <div style="font-family: Georgia, serif; background:#140f0c; color:#e6d7c3; padding:32px; border:1px solid #8a6d3b;">
        <h2 style="color:#d4af37; margin-top:0;">Payment Reservation Expired</h2>
        <p>Namaste <strong>${apt.customer_name}</strong>,</p>
        <p>Your 10-minute slot reservation (${apt.booking_reference}) for ${apt.appointment_date} at ${apt.start_time} IST expired before a verified UPI payment was received. The time slot has been released.</p>
        <p>You may return to the website at any time to book a new available time slot.</p>
      </div>
    `;
  }

  const logEntry: EmailNotificationLog = {
    id: `eml_${crypto.randomBytes(6).toString('hex')}`,
    appointment_id: apt.id,
    booking_reference: apt.booking_reference,
    recipient,
    type,
    subject,
    status: 'logged_unconfigured',
    created_at: new Date().toISOString(),
  };

  try {
    await sendRawEmail(recipient, subject, html);
    logEntry.status = 'sent';
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg === 'EMAIL_PROVIDER_NOT_CONFIGURED') {
      logEntry.status = 'logged_unconfigured';
    } else {
      logEntry.status = 'failed';
      logEntry.error = msg;
    }
  }

  db.email_logs.unshift(logEntry);
  if (db.email_logs.length > 250) {
    db.email_logs.length = 250;
  }
}

// ============================================================================
// SIMPLE RATE LIMITER FOR PUBLIC BOOKING & PAYMENT ENDPOINTS
// ============================================================================

const ipRateMap = new Map<string, { count: number; resetAt: number }>();

function rateLimitMiddleware(maxRequests: number, windowMs: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      'local';
    const now = Date.now();
    const record = ipRateMap.get(ip);

    if (!record || now > record.resetAt) {
      ipRateMap.set(ip, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        error: 'Too many requests. Please wait a moment before trying again.',
      });
    }

    record.count += 1;
    return next();
  };
}

// ============================================================================
// ADMIN AUTHENTICATION MIDDLEWARE
// ============================================================================

export interface AdminAuthenticatedRequest extends Request {
  adminUser?: {
    uid: string;
    email: string;
  };
}

const AUTHORIZED_ADMIN_EMAILS = new Set([
  'eklavyas10@gmail.com',
  'ramashokkumar@gmail.com',
  ...(process.env.ADMINISTRATOR_EMAIL ? [process.env.ADMINISTRATOR_EMAIL.toLowerCase().trim()] : []),
]);

async function verifyAdminRequest(
  req: AdminAuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized: Administrator sign-in required.',
    });
  }

  const token = authHeader.slice('Bearer '.length).trim();

  try {
    // 1. Try Firebase Admin verifyIdToken
    const decoded = await adminAuth.verifyIdToken(token);
    const email = (decoded.email || '').toLowerCase().trim();
    const db = loadDatabase();
    const configuredAdminEmail = db.admin_settings.administrator_email.toLowerCase().trim();

    if (
      !decoded.email_verified ||
      (!AUTHORIZED_ADMIN_EMAILS.has(email) && email !== configuredAdminEmail)
    ) {
      return res.status(403).json({
        error: `Access denied: ${email || 'Account'} is not an authorized administrator.`,
      });
    }

    req.adminUser = { uid: decoded.uid, email };
    return next();
  } catch {
    // 2. Fallback verification via Firebase Auth REST lookup using project Web API Key
    try {
      const lookupRes = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseConfig.apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken: token }),
        }
      );

      if (!lookupRes.ok) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired admin session.' });
      }

      const data = (await lookupRes.json()) as {
        users?: Array<{ localId: string; email: string; emailVerified: boolean }>;
      };
      const user = data.users?.[0];
      if (!user || !user.emailVerified) {
        return res.status(401).json({ error: 'Unauthorized: Unverified administrator account.' });
      }

      const email = user.email.toLowerCase().trim();
      const db = loadDatabase();
      const configuredAdminEmail = db.admin_settings.administrator_email.toLowerCase().trim();

      if (!AUTHORIZED_ADMIN_EMAILS.has(email) && email !== configuredAdminEmail) {
        return res.status(403).json({
          error: `Access denied: ${email} is not an authorized administrator.`,
        });
      }

      req.adminUser = { uid: user.localId, email };
      return next();
    } catch (innerErr) {
      console.error('Admin token verification failed:', innerErr);
      return res.status(401).json({ error: 'Unauthorized: Failed to verify administrator token.' });
    }
  }
}

// ============================================================================
// INPUT SANITIZATION & VALIDATION HELPERS
// ============================================================================

function sanitizeText(input: unknown, maxLength: number): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  if (email.length < 5 || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Supports Indian 10-digit mobile numbers (with optional +91/91/0) and international E.164 numbers (7 to 15 digits)
  if (/^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^\+?[1-9]\d{6,14}$/.test(cleaned)) return true;
  return false;
}

function normalizeIncomingDate(raw: string): string {
  const trimmed = (raw || '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  const dmy = trimmed.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
  if (dmy) return `${dmy[3]}-${dmy[2]}-${dmy[1]}`;
  return trimmed;
}

function isValidDateString(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const d = new Date(`${dateStr}T00:00:00+05:30`);
  return !Number.isNaN(d.getTime());
}

// ============================================================================
// CORE CONFIRMATION HELPER (USED BY VERIFIED WEBHOOK / VERIFIED API)
// ============================================================================

async function confirmVerifiedAppointmentPayment(
  db: DatabaseSchema,
  apt: AppointmentRecord,
  payment: PaymentRecord,
  providerPaymentId: string,
  actor: 'webhook' | 'system'
): Promise<{ alreadyConfirmed: boolean }> {
  if (apt.appointment_status === 'Confirmed' && apt.payment_status === 'Paid') {
    return { alreadyConfirmed: true };
  }

  const nowIso = new Date().toISOString();
  payment.payment_status = 'Paid';
  payment.provider_payment_id = providerPaymentId;
  payment.paid_at = nowIso;
  payment.updated_at = nowIso;

  apt.payment_status = 'Paid';
  apt.appointment_status = 'Confirmed';
  apt.payment_reference = providerPaymentId;
  apt.updated_at = nowIso;
  apt.history.push({
    timestamp: nowIso,
    action: 'Payment Verified & Appointment Confirmed',
    actor,
    details: `Verified Razorpay UPI payment (${providerPaymentId}) of ₹${apt.appointment_price.toLocaleString('en-IN')} INR.`,
  });

  // Trigger Customer & Administrator transactional email notifications
  await Promise.allSettled([
    dispatchEmailNotification(db, apt, 'customer_confirmation'),
    dispatchEmailNotification(db, apt, 'admin_notification'),
  ]);

  return { alreadyConfirmed: false };
}

// ============================================================================
// EXPRESS APPLICATION & ROUTES
// ============================================================================

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Enable CORS so custom domains can communicate with all /api/* endpoints seamlessly
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, x-booking-token, x-razorpay-signature, x-razorpay-event-id, x-sandbox-test-webhook'
    );
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
    return next();
  });

  // --------------------------------------------------------------------------
  // 1. RAZORPAY WEBHOOK ENDPOINT (Raw body required for HMAC-SHA256 verification)
  // --------------------------------------------------------------------------
  app.post(
    '/api/webhooks/razorpay',
    express.raw({ type: 'application/json' }),
    async (req: Request, res: Response) => {
      try {
        const signature = req.headers['x-razorpay-signature'];
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '';
        const isSandboxHeader = req.headers['x-sandbox-test-webhook'] === 'true';
        const isLiveCredentialsSet = Boolean(
          process.env.RAZORPAY_KEY_ID &&
            process.env.RAZORPAY_KEY_SECRET &&
            process.env.RAZORPAY_WEBHOOK_SECRET
        );

        const rawBodyBuffer = Buffer.isBuffer(req.body)
          ? req.body
          : Buffer.from(typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {}));

        // Verify signature using raw request body
        const secretToUse =
          webhookSecret ||
          (!isLiveCredentialsSet && isSandboxHeader ? 'sandbox_test_webhook_secret_rak' : '');

        if (!secretToUse || typeof signature !== 'string' || !signature) {
          return res.status(400).json({
            error: 'Missing webhook signature or RAZORPAY_WEBHOOK_SECRET not configured.',
          });
        }

        const expectedSignature = crypto
          .createHmac('sha256', secretToUse)
          .update(rawBodyBuffer)
          .digest('hex');

        const sigBuf = Buffer.from(signature, 'utf8');
        const expBuf = Buffer.from(expectedSignature, 'utf8');
        if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
          return res.status(400).json({
            error: 'Invalid Razorpay webhook signature.',
          });
        }

        const eventPayload = JSON.parse(rawBodyBuffer.toString('utf8'));
        const eventId =
          (req.headers['x-razorpay-event-id'] as string) ||
          eventPayload.id ||
          `evt_${crypto.createHash('sha256').update(rawBodyBuffer).digest('hex').slice(0, 24)}`;

        const eventType: string = eventPayload.event || '';
        const paymentEntity = eventPayload?.payload?.payment?.entity;
        const qrEntity = eventPayload?.payload?.qr_code?.entity;

        if (!paymentEntity) {
          return res.status(200).json({ status: 'ignored_no_payment_entity' });
        }

        const result = await withBookingLock(async (db) => {
          // Idempotency check by webhook event ID
          if (db.processed_webhook_ids.includes(eventId)) {
            return { status: 200, body: { status: 'already_processed_event' } };
          }

          const paymentStatus: string = paymentEntity.status;
          const captured: boolean = Boolean(
            paymentEntity.captured || paymentStatus === 'captured'
          );
          const method: string = (paymentEntity.method || '').toLowerCase();
          const amountPaise: number = Number(paymentEntity.amount || 0);
          const currency: string = paymentEntity.currency || '';
          const providerPaymentId: string = paymentEntity.id || '';
          const qrIdFromPayload: string =
            qrEntity?.id || paymentEntity.notes?.qr_id || paymentEntity.acquirer_data?.rrn || '';
          const bookingRefFromNotes: string =
            paymentEntity.notes?.booking_reference || qrEntity?.notes?.booking_reference || '';
          const appointmentIdFromNotes: string =
            paymentEntity.notes?.appointment_id || qrEntity?.notes?.appointment_id || '';
          const orderIdFromPayload: string = paymentEntity.order_id || '';

          // Find matching payment & appointment record
          const payment = db.payments.find(
            (p) =>
              (qrIdFromPayload && p.provider_qr_id === qrIdFromPayload) ||
              (orderIdFromPayload && p.provider_order_id === orderIdFromPayload) ||
              (bookingRefFromNotes && p.booking_reference === bookingRefFromNotes) ||
              (appointmentIdFromNotes && p.appointment_id === appointmentIdFromNotes)
          );

          if (!payment) {
            return {
              status: 404,
              body: { error: 'No matching payment record found for webhook reference.' },
            };
          }

          const apt = db.appointments.find((a) => a.id === payment.appointment_id);
          if (!apt) {
            return {
              status: 404,
              body: { error: 'Associated appointment record not found.' },
            };
          }

          // Idempotency check if already confirmed
          if (apt.appointment_status === 'Confirmed' && apt.payment_status === 'Paid') {
            db.processed_webhook_ids.push(eventId);
            return { status: 200, body: { status: 'already_confirmed' } };
          }

          // Verify event type & captured status
          if (
            !captured ||
            paymentStatus !== 'captured' ||
            !['qr_code.credited', 'payment.captured', 'order.paid', 'payment_link.paid'].includes(
              eventType
            )
          ) {
            return {
              status: 400,
              body: { error: 'Payment is not in captured state.' },
            };
          }

          // Verify payment method is UPI
          if (method && method !== 'upi') {
            return {
              status: 400,
              body: { error: `Invalid payment method: ${method}. Expected UPI.` },
            };
          }

          // Verify currency
          if (currency !== 'INR') {
            return {
              status: 400,
              body: { error: `Invalid currency: ${currency}. Expected INR.` },
            };
          }

          // Verify exact amount in paise matches server-determined appointment price
          const expectedPaise = apt.appointment_price * 100;
          if (amountPaise !== expectedPaise) {
            apt.history.push({
              timestamp: new Date().toISOString(),
              action: 'Payment Amount Mismatch Rejected',
              actor: 'webhook',
              details: `Received ${amountPaise} paise, expected ${expectedPaise} paise. Appointment NOT confirmed.`,
            });
            return {
              status: 400,
              body: {
                error: `Payment amount mismatch: received ${amountPaise} paise, expected ${expectedPaise} paise.`,
              },
            };
          }

          await confirmVerifiedAppointmentPayment(db, apt, payment, providerPaymentId, 'webhook');
          db.processed_webhook_ids.push(eventId);

          return {
            status: 200,
            body: {
              status: 'confirmed',
              booking_reference: apt.booking_reference,
              payment_id: providerPaymentId,
            },
          };
        });

        return res.status(result.status).json(result.body);
      } catch (err) {
        console.error('Error processing Razorpay webhook:', err);
        return res.status(500).json({ error: 'Webhook processing error.' });
      }
    }
  );

  // Standard JSON body parser for all other API routes
  app.use(express.json({ limit: '256kb' }));

  // --------------------------------------------------------------------------
  // 2. PUBLIC CONFIGURATION & LIVE SLOT AVAILABILITY
  // --------------------------------------------------------------------------
  app.get('/api/booking-config', async (_req: Request, res: Response) => {
    try {
      const data = await withBookingLock((db) => {
        expirePendingBookingsSync(db);
        const s = db.admin_settings;
        const { dateStr: todayIST } = getCurrentISTParts();
        const maxDateObj = new Date(`${todayIST}T00:00:00+05:30`);
        maxDateObj.setDate(maxDateObj.getDate() + s.booking_advance_days);
        const maxDateIST = maxDateObj.toISOString().slice(0, 10);

        const blockedDates = db.availability
          .filter((a) => a.start_time === 'FULL_DAY' && !a.is_available)
          .map((a) => a.date);

        const isRazorpayLiveOrTestConfigured = Boolean(
          process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
        );

        return {
          appointment_types: [
            {
              id: 'phone_consultation' as const,
              code: 'APPOINTMENT 01',
              nameEn: 'Private Phone Consultation',
              nameHi: 'निजी फ़ोन परामर्श',
              price: s.phone_consultation_price,
              currency: 'INR',
              durationMinutes: s.appointment_duration,
              meetingMethodEn: 'Phone call',
              meetingMethodHi: 'फ़ोन कॉल',
              descriptionEn:
                'Direct one-on-one phone consultation with Ram Ashok Kumar for anomaly analysis, spiritual diagnostics, or field case guidance. Ram will contact you on your provided number at the confirmed appointment time.',
              descriptionHi:
                'असाधारण घटनाओं के विश्लेषण, आध्यात्मिक परामर्श या क्षेत्रीय मार्गदर्शन हेतु राम अशोक कुमार के साथ सीधा व्यक्तिगत फ़ोन संवाद। निर्धारित समय पर राम जी आपके दिए गए नंबर पर संपर्क करेंगे।',
            },
            {
              id: 'in_person_consultation' as const,
              code: 'APPOINTMENT 02',
              nameEn: 'In-Person Consultation',
              nameHi: 'प्रत्यक्ष व्यक्तिगत परामर्श',
              price: s.in_person_consultation_price,
              currency: 'INR',
              durationMinutes: s.appointment_duration,
              meetingMethodEn: 'Physical meeting',
              meetingMethodHi: 'प्रत्यक्ष भेंट',
              descriptionEn:
                'Private, confidential in-person consultation with Ram Ashok Kumar. The exact meeting chamber location will be confirmed individually after your booking is verified.',
              descriptionHi:
                'राम अशोक कुमार के साथ गोपनीय प्रत्यक्ष व्यक्तिगत परामर्श। आपकी बुकिंग और भुगतान सत्यापित होने के पश्चात् भेंट का सटीक स्थान व्यक्तिगत रूप से साझा किया जाएगा।',
            },
          ],
          timezone: s.business_timezone,
          min_date: todayIST,
          max_date: maxDateIST,
          booking_advance_days: s.booking_advance_days,
          operating_days: s.operating_days,
          blocked_dates: blockedDates,
          razorpay_configured: isRazorpayLiveOrTestConfigured,
          razorpay_key_id: process.env.RAZORPAY_KEY_ID || null,
        };
      });

      return res.json(data);
    } catch (err) {
      console.error('Error fetching booking config:', err);
      return res.status(500).json({ error: 'Unable to load booking configuration.' });
    }
  });

  app.get('/api/availability', async (req: Request, res: Response) => {
    try {
      const dateStr = normalizeIncomingDate(sanitizeText(req.query.date, 20));
      if (!isValidDateString(dateStr)) {
        return res.status(400).json({ error: 'Invalid date format. Expected YYYY-MM-DD.' });
      }

      const availabilityResult = await withBookingLock((db) => {
        expirePendingBookingsSync(db);

        const { dateStr: todayIST, hour24: currentHourIST } = getCurrentISTParts();
        const s = db.admin_settings;

        // Check past date
        if (dateStr < todayIST) {
          return {
            date: dateStr,
            timezone: s.business_timezone,
            is_date_blocked: true,
            date_block_reason: 'Past dates cannot be booked.',
            slots: [],
          };
        }

        // Check advance booking window
        const maxDateObj = new Date(`${todayIST}T00:00:00+05:30`);
        maxDateObj.setDate(maxDateObj.getDate() + s.booking_advance_days);
        const maxDateIST = maxDateObj.toISOString().slice(0, 10);
        if (dateStr > maxDateIST) {
          return {
            date: dateStr,
            timezone: s.business_timezone,
            is_date_blocked: true,
            date_block_reason: `Bookings are open up to ${s.booking_advance_days} days in advance.`,
            slots: [],
          };
        }

        // Check full-day admin block
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

        // Compute status of each of the 9 time slots
        const slots = STANDARD_TIME_SLOTS.map((slotDef) => {
          // 1. Check if slot already passed today in IST
          if (dateStr === todayIST && slotDef.startHour24 <= currentHourIST) {
            return {
              slotNumber: slotDef.slotNumber,
              start_time: slotDef.start_time,
              end_time: slotDef.end_time,
              available: false,
              status: 'passed' as const,
            };
          }

          // 2. Check if admin blocked this specific slot
          const adminSlotBlock = db.availability.find(
            (a) => a.date === dateStr && a.start_time === slotDef.start_time && !a.is_available
          );
          if (adminSlotBlock) {
            return {
              slotNumber: slotDef.slotNumber,
              start_time: slotDef.start_time,
              end_time: slotDef.end_time,
              available: false,
              status: 'blocked' as const,
            };
          }

          // 3. Check if a confirmed or completed booking holds this slot
          // (Unpaid "Pending Payment" drafts do not lock out the slot on the form before payment is verified)
          const existingConfirmedBooking = db.appointments.find(
            (apt) =>
              apt.appointment_date === dateStr &&
              apt.start_time === slotDef.start_time &&
              ['Confirmed', 'Completed'].includes(apt.appointment_status)
          );

          if (existingConfirmedBooking) {
            return {
              slotNumber: slotDef.slotNumber,
              start_time: slotDef.start_time,
              end_time: slotDef.end_time,
              available: false,
              status: 'booked' as const,
            };
          }

          return {
            slotNumber: slotDef.slotNumber,
            start_time: slotDef.start_time,
            end_time: slotDef.end_time,
            available: true,
            status: 'available' as const,
          };
        });

        return {
          date: dateStr,
          timezone: s.business_timezone,
          is_date_blocked: false,
          date_block_reason: null,
          slots,
        };
      });

      return res.json(availabilityResult);
    } catch (err) {
      console.error('Error checking availability:', err);
      return res.status(500).json({ error: 'Unable to fetch slot availability.' });
    }
  });

  // --------------------------------------------------------------------------
  // 3. CREATE BOOKING & RESERVE SLOT (create-booking)
  // --------------------------------------------------------------------------
  app.post(
    '/api/bookings/create',
    rateLimitMiddleware(15, 60 * 1000),
    async (req: Request, res: Response) => {
      try {
        const appointmentTypeRaw = sanitizeText(req.body?.appointment_type, 40);
        const customerName = sanitizeText(req.body?.customer_name, 120);
        const customerEmail = sanitizeText(req.body?.customer_email, 254).toLowerCase();
        const customerPhone = sanitizeText(req.body?.customer_phone, 24);
        const customerAddress = sanitizeText(req.body?.customer_address, 600);
        const appointmentDate = sanitizeText(req.body?.appointment_date, 10);
        const startTime = sanitizeText(req.body?.start_time, 20);
        const consultationReason = sanitizeText(req.body?.consultation_reason, 2500);
        const additionalMessage = sanitizeText(req.body?.additional_message, 2000);
        const termsAccepted = Boolean(req.body?.terms_accepted);

        // Validate appointment type
        if (
          appointmentTypeRaw !== 'phone_consultation' &&
          appointmentTypeRaw !== 'in_person_consultation'
        ) {
          return res.status(400).json({ error: 'Please select a valid consultation type.' });
        }
        const appointmentType: AppointmentType = appointmentTypeRaw;

        // Validate mandatory fields
        if (customerName.length < 2) {
          return res
            .status(400)
            .json({ error: 'Please enter your full name (minimum 2 characters).' });
        }
        if (!isValidEmail(customerEmail)) {
          return res.status(400).json({ error: 'Please enter a valid email address.' });
        }
        if (!isValidPhone(customerPhone)) {
          return res.status(400).json({
            error: 'Please enter a valid 10-digit Indian mobile number or international phone number.',
          });
        }
        if (customerAddress.length < 5) {
          return res
            .status(400)
            .json({ error: 'Please enter your full residential or correspondence address.' });
        }
        if (!isValidDateString(appointmentDate)) {
          return res.status(400).json({ error: 'Please select a valid appointment date.' });
        }

        const matchedSlot = STANDARD_TIME_SLOTS.find((s) => s.start_time === startTime);
        if (!matchedSlot) {
          return res.status(400).json({ error: 'Please select a valid 60-minute time slot.' });
        }

        if (consultationReason.length < 10) {
          return res.status(400).json({
            error:
              'Please provide the reason for your consultation (at least 10 characters) so Ram Ashok Kumar can prepare.',
          });
        }

        if (!termsAccepted) {
          return res.status(400).json({
            error: 'You must accept the booking terms and conditions to proceed.',
          });
        }

        // Concurrency-safe check & slot reservation inside mutex lock
        const creationResult = await withBookingLock((db) => {
          expirePendingBookingsSync(db);

          const { dateStr: todayIST, hour24: currentHourIST } = getCurrentISTParts();
          const s = db.admin_settings;

          if (appointmentDate < todayIST) {
            return {
              status: 400,
              body: { error: 'Cannot book an appointment on a past date.' },
            };
          }

          const maxDateObj = new Date(`${todayIST}T00:00:00+05:30`);
          maxDateObj.setDate(maxDateObj.getDate() + s.booking_advance_days);
          const maxDateIST = maxDateObj.toISOString().slice(0, 10);
          if (appointmentDate > maxDateIST) {
            return {
              status: 400,
              body: {
                error: `Appointments can only be scheduled up to ${s.booking_advance_days} days in advance.`,
              },
            };
          }

          if (appointmentDate === todayIST && matchedSlot.startHour24 <= currentHourIST) {
            return {
              status: 400,
              body: {
                error: 'The selected time slot for today has already passed. Please choose a later slot.',
              },
            };
          }

          // Check date or slot block
          const isBlocked = db.availability.some(
            (a) =>
              a.date === appointmentDate &&
              (a.start_time === 'FULL_DAY' || a.start_time === matchedSlot.start_time) &&
              !a.is_available
          );
          if (isBlocked) {
            return {
              status: 409,
              body: {
                error: 'This date or time slot is blocked by the administrator. Please select another slot.',
              },
            };
          }

          // Check if slot is already confirmed or completed (paid)
          const confirmedBooking = db.appointments.find(
            (apt) =>
              apt.appointment_date === appointmentDate &&
              apt.start_time === matchedSlot.start_time &&
              ['Confirmed', 'Completed'].includes(apt.appointment_status)
          );

          if (confirmedBooking) {
            return {
              status: 409,
              body: {
                error:
                  'This time slot has already been booked and confirmed. Please select a different slot.',
              },
            };
          }

          // If there are any prior unpaid "Pending Payment" drafts for this slot, supersede/expire them
          // so an unpaid test or abandoned QR screen never blocks a new booking attempt.
          const nowMs = Date.now();
          const nowIso = new Date(nowMs).toISOString();
          for (const apt of db.appointments) {
            if (
              apt.appointment_date === appointmentDate &&
              apt.start_time === matchedSlot.start_time &&
              apt.appointment_status === 'Pending Payment' &&
              apt.payment_status !== 'Paid'
            ) {
              apt.appointment_status = 'Expired';
              apt.payment_status = 'Expired';
              apt.updated_at = nowIso;
              apt.history.push({
                timestamp: nowIso,
                action: 'Unpaid Draft Superseded',
                actor: 'system',
                details: 'Superseded by a new booking session before payment was completed.',
              });
              for (const pay of db.payments) {
                if (pay.appointment_id === apt.id && pay.payment_status === 'Pending') {
                  pay.payment_status = 'Expired';
                  pay.updated_at = nowIso;
                }
              }
            }
          }

          // Determine exact payable price server-side
          const serverPrice =
            appointmentType === 'phone_consultation'
              ? s.phone_consultation_price
              : s.in_person_consultation_price;

          // If frontend passed an explicit expected_price that differs, reject manipulation
          if (
            req.body?.expected_price !== undefined &&
            Number(req.body.expected_price) !== serverPrice
          ) {
            return {
              status: 400,
              body: {
                error: 'Price mismatch detected. Payable amount is strictly determined by the server.',
              },
            };
          }

          const expiresIso = new Date(nowMs + RESERVATION_DURATION_MS).toISOString();

          const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
          const dateCompact = appointmentDate.replace(/-/g, '');
          const bookingReference = `RAK-${dateCompact}-${randomSuffix}`;
          const accessToken = crypto.randomBytes(24).toString('hex');
          const appointmentId = `apt_${crypto.randomBytes(8).toString('hex')}`;

          const newAppointment: AppointmentRecord = {
            id: appointmentId,
            booking_reference: bookingReference,
            access_token: accessToken,
            customer_name: customerName,
            customer_email: customerEmail,
            customer_phone: customerPhone,
            customer_address: customerAddress,
            appointment_type: appointmentType,
            appointment_price: serverPrice,
            appointment_date: appointmentDate,
            start_time: matchedSlot.start_time,
            end_time: matchedSlot.end_time,
            timezone: s.business_timezone,
            consultation_reason: consultationReason,
            additional_message: additionalMessage,
            appointment_status: 'Pending Payment',
            payment_status: 'Pending',
            payment_reference: '',
            reservation_expires_at: expiresIso,
            created_at: nowIso,
            updated_at: nowIso,
            completed_at: null,
            cancelled_at: null,
            admin_notes: '',
            history: [
              {
                timestamp: nowIso,
                action: 'Booking Initiated (Pending Payment)',
                actor: 'customer',
                details: `Initiated booking for ${appointmentDate} (${matchedSlot.start_time} – ${matchedSlot.end_time} IST) for ₹${serverPrice.toLocaleString('en-IN')} INR. QR payment window active for 10 minutes.`,
              },
            ],
          };

          db.appointments.unshift(newAppointment);

          return {
            status: 201,
            body: {
              booking: {
                id: newAppointment.id,
                booking_reference: newAppointment.booking_reference,
                access_token: newAppointment.access_token,
                customer_name: newAppointment.customer_name,
                appointment_type: newAppointment.appointment_type,
                appointment_price: newAppointment.appointment_price,
                appointment_date: newAppointment.appointment_date,
                start_time: newAppointment.start_time,
                end_time: newAppointment.end_time,
                timezone: newAppointment.timezone,
                duration_minutes: s.appointment_duration,
                appointment_status: newAppointment.appointment_status,
                payment_status: newAppointment.payment_status,
                reservation_expires_at: newAppointment.reservation_expires_at,
              },
            },
          };
        });

        return res.status(creationResult.status).json(creationResult.body);
      } catch (err) {
        console.error('Error creating booking:', err);
        return res.status(500).json({ error: 'Unable to create booking reservation.' });
      }
    }
  );

  // --------------------------------------------------------------------------
  // 4. CREATE DYNAMIC RAZORPAY UPI QR PAYMENT SESSION (create-payment)
  // --------------------------------------------------------------------------
  app.post(
    '/api/payments/create',
    rateLimitMiddleware(20, 60 * 1000),
    async (req: Request, res: Response) => {
      try {
        const bookingReference = sanitizeText(req.body?.booking_reference, 40);
        const accessToken = sanitizeText(req.body?.access_token, 64);

        if (!bookingReference || !accessToken) {
          return res.status(400).json({ error: 'Missing booking reference or access token.' });
        }

        const paymentResult = await withBookingLock(async (db) => {
          expirePendingBookingsSync(db);

          const apt = db.appointments.find(
            (a) => a.booking_reference === bookingReference && a.access_token === accessToken
          );

          if (!apt) {
            return { status: 404, body: { error: 'Booking record not found or unauthorized.' } };
          }

          if (apt.appointment_status === 'Expired') {
            return {
              status: 410,
              body: {
                error:
                  'Your 10-minute slot reservation has expired. Please select a slot again to generate a fresh QR code.',
              },
            };
          }

          if (apt.appointment_status !== 'Pending Payment') {
            return {
              status: 400,
              body: {
                error: `Payment cannot be created for a booking with status "${apt.appointment_status}".`,
              },
            };
          }

          const merchantUpiId = 'ramashokkumar@oksbi';

          // Return existing active pending payment QR if already created for this booking
          const existingPayment = db.payments.find(
            (p) => p.appointment_id === apt.id && p.payment_status === 'Pending'
          );
          if (existingPayment) {
            if (
              !existingPayment.qr_upi_string ||
              !existingPayment.qr_upi_string.includes(merchantUpiId)
            ) {
              const updatedUpiUri = `upi://pay?pa=${merchantUpiId}&pn=${encodeURIComponent(
                'Ram Ashok Kumar'
              )}&am=${existingPayment.amount.toFixed(2)}&cu=INR&tr=${encodeURIComponent(
                existingPayment.provider_qr_id
              )}&tn=${encodeURIComponent(`Consultation ${apt.booking_reference}`)}`;
              existingPayment.qr_upi_string = updatedUpiUri;
              existingPayment.qr_image_data_url = await QRCode.toDataURL(updatedUpiUri, {
                width: 340,
                margin: 2,
                errorCorrectionLevel: 'M',
                color: { dark: '#140f0c', light: '#f7f1e5' },
              });
            }
            return {
              status: 200,
              body: {
                payment: {
                  id: existingPayment.id,
                  upi_id: merchantUpiId,
                  provider_qr_id: existingPayment.provider_qr_id,
                  provider_order_id: existingPayment.provider_order_id || null,
                  amount: existingPayment.amount,
                  currency: existingPayment.currency,
                  payment_method: existingPayment.payment_method,
                  payment_status: existingPayment.payment_status,
                  qr_image_data_url: existingPayment.qr_image_data_url,
                  qr_upi_string: existingPayment.qr_upi_string || null,
                  gateway_mode: existingPayment.gateway_mode,
                  expires_at: existingPayment.expires_at,
                  razorpay_key_id: process.env.RAZORPAY_KEY_ID || null,
                },
              },
            };
          }

          const amountInr = apt.appointment_price; // Server-determined price (5100 or 11000)
          const amountPaise = amountInr * 100;
          const closeByUnix = Math.max(
            Math.floor(Date.now() / 1000) + 180,
            Math.floor(new Date(apt.reservation_expires_at).getTime() / 1000)
          );

          const rzpKeyId = (process.env.RAZORPAY_KEY_ID || '').trim();
          const rzpKeySecret = (process.env.RAZORPAY_KEY_SECRET || '').trim();

          let providerQrId = `qr_${crypto.randomBytes(8).toString('hex')}`;
          let providerOrderId: string | undefined;
          let gatewayMode: PaymentRecord['gateway_mode'] = 'razorpay_test_sandbox';

          if (rzpKeyId && rzpKeySecret) {
            const authHeader = `Basic ${Buffer.from(`${rzpKeyId}:${rzpKeySecret}`).toString('base64')}`;

            // Attempt 1: Razorpay Dynamic Single-Use UPI QR Code API
            const qrApiRes = await fetch('https://api.razorpay.com/v1/payments/qr_codes', {
              method: 'POST',
              headers: {
                Authorization: authHeader,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                type: 'upi_qr',
                name: 'Ram Ashok Kumar Consultation',
                usage: 'single_use',
                fixed_amount: true,
                payment_amount: amountPaise,
                description: `${getAppointmentTypeDisplay(apt.appointment_type)} — ${apt.booking_reference}`,
                close_by: closeByUnix,
                notes: {
                  booking_reference: apt.booking_reference,
                  appointment_id: apt.id,
                  appointment_type: apt.appointment_type,
                  upi_id: merchantUpiId,
                },
              }),
            });

            if (qrApiRes.ok) {
              const qrJson = (await qrApiRes.json()) as {
                id: string;
              };
              providerQrId = qrJson.id;
              gatewayMode = 'razorpay_qr_api';
            } else {
              // Attempt 2: Razorpay Orders API Fallback
              const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
                method: 'POST',
                headers: {
                  Authorization: authHeader,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  amount: amountPaise,
                  currency: 'INR',
                  receipt: apt.booking_reference,
                  notes: {
                    booking_reference: apt.booking_reference,
                    appointment_id: apt.id,
                    appointment_type: apt.appointment_type,
                    upi_id: merchantUpiId,
                  },
                }),
              });

              if (orderRes.ok) {
                const orderJson = (await orderRes.json()) as { id: string };
                providerOrderId = orderJson.id;
                providerQrId = `qr_ord_${orderJson.id}`;
                gatewayMode = 'razorpay_order_fallback';
              }
            }
          }

          // Always generate the dynamic UPI QR code on the base of UPI ID "ramashokkumar@oksbi"
          // with the exact server-side payable amount, INR currency, and unique booking reference
          const qrUpiString = `upi://pay?pa=${merchantUpiId}&pn=${encodeURIComponent(
            'Ram Ashok Kumar'
          )}&am=${amountInr.toFixed(2)}&cu=INR&tr=${encodeURIComponent(
            providerQrId
          )}&tn=${encodeURIComponent(`Consultation ${apt.booking_reference}`)}`;

          const qrImageDataUrl = await QRCode.toDataURL(qrUpiString, {
            width: 340,
            margin: 2,
            errorCorrectionLevel: 'M',
            color: { dark: '#140f0c', light: '#f7f1e5' },
          });

          const nowIso = new Date().toISOString();
          const paymentRecord: PaymentRecord = {
            id: `pay_${crypto.randomBytes(8).toString('hex')}`,
            appointment_id: apt.id,
            booking_reference: apt.booking_reference,
            provider: 'razorpay',
            provider_payment_id: '',
            provider_qr_id: providerQrId,
            provider_order_id: providerOrderId,
            qr_image_data_url: qrImageDataUrl,
            qr_upi_string: qrUpiString,
            gateway_mode: gatewayMode,
            amount: amountInr,
            currency: 'INR',
            payment_method: 'UPI',
            payment_status: 'Pending',
            paid_at: null,
            expires_at: apt.reservation_expires_at,
            created_at: nowIso,
            updated_at: nowIso,
          };

          db.payments.unshift(paymentRecord);
          apt.payment_reference = providerQrId;
          apt.updated_at = nowIso;
          apt.history.push({
            timestamp: nowIso,
            action: 'Dynamic UPI QR Generated',
            actor: 'system',
            details: `Created single-use UPI QR (${providerQrId}) for UPI ID ${merchantUpiId} — ₹${amountInr.toLocaleString('en-IN')} INR.`,
          });

          return {
            status: 201,
            body: {
              payment: {
                id: paymentRecord.id,
                upi_id: merchantUpiId,
                provider_qr_id: paymentRecord.provider_qr_id,
                provider_order_id: paymentRecord.provider_order_id || null,
                amount: paymentRecord.amount,
                currency: paymentRecord.currency,
                payment_method: paymentRecord.payment_method,
                payment_status: paymentRecord.payment_status,
                qr_image_data_url: paymentRecord.qr_image_data_url,
                qr_upi_string: paymentRecord.qr_upi_string || null,
                gateway_mode: paymentRecord.gateway_mode,
                expires_at: paymentRecord.expires_at,
                razorpay_key_id: process.env.RAZORPAY_KEY_ID || null,
              },
            },
          };
        });

        return res.status(paymentResult.status).json(paymentResult.body);
      } catch (err) {
        console.error('Error creating payment QR:', err);
        return res.status(500).json({ error: 'Failed to initialize UPI QR payment session.' });
      }
    }
  );

  // --------------------------------------------------------------------------
  // 5. INDEPENDENT SERVER-SIDE RAZORPAY PAYMENT VERIFICATION (Checkout / API Poll)
  // --------------------------------------------------------------------------
  app.post('/api/payments/verify', async (req: Request, res: Response) => {
    try {
      const bookingReference = sanitizeText(req.body?.booking_reference, 40);
      const accessToken = sanitizeText(req.body?.access_token, 64);
      const razorpayPaymentId = sanitizeText(req.body?.razorpay_payment_id, 128);
      const razorpayOrderId = sanitizeText(req.body?.razorpay_order_id, 128);
      const razorpaySignature = sanitizeText(req.body?.razorpay_signature, 256);

      if (!bookingReference || !accessToken || !razorpayPaymentId) {
        return res.status(400).json({ error: 'Missing required payment verification fields.' });
      }

      const rzpKeyId = (process.env.RAZORPAY_KEY_ID || '').trim();
      const rzpKeySecret = (process.env.RAZORPAY_KEY_SECRET || '').trim();
      if (!rzpKeyId || !rzpKeySecret) {
        return res.status(400).json({
          error: 'Live Razorpay API credentials are required for direct order signature verification.',
        });
      }

      // 1. Verify HMAC-SHA256 signature if order_id + signature provided
      if (razorpayOrderId && razorpaySignature) {
        const expectedSig = crypto
          .createHmac('sha256', rzpKeySecret)
          .update(`${razorpayOrderId}|${razorpayPaymentId}`)
          .digest('hex');
        if (expectedSig !== razorpaySignature) {
          return res.status(400).json({ error: 'Invalid Razorpay payment signature.' });
        }
      }

      // 2. Independently query Razorpay Payments API to verify captured status & exact amount
      const authHeader = `Basic ${Buffer.from(`${rzpKeyId}:${rzpKeySecret}`).toString('base64')}`;
      const payApiRes = await fetch(`https://api.razorpay.com/v1/payments/${razorpayPaymentId}`, {
        headers: { Authorization: authHeader },
      });

      if (!payApiRes.ok) {
        return res.status(400).json({ error: 'Could not verify payment with Razorpay API.' });
      }

      const payEntity = (await payApiRes.json()) as {
        id: string;
        status: string;
        captured: boolean;
        amount: number;
        currency: string;
        method: string;
      };

      const verifyResult = await withBookingLock(async (db) => {
        const apt = db.appointments.find(
          (a) => a.booking_reference === bookingReference && a.access_token === accessToken
        );
        if (!apt) {
          return { status: 404, body: { error: 'Booking not found.' } };
        }
        const payment = db.payments.find((p) => p.appointment_id === apt.id);
        if (!payment) {
          return { status: 404, body: { error: 'Payment record not found.' } };
        }

        if (payEntity.status !== 'captured' || !payEntity.captured) {
          return { status: 400, body: { error: 'Payment has not been captured yet.' } };
        }
        if (payEntity.currency !== 'INR' || payEntity.amount !== apt.appointment_price * 100) {
          return { status: 400, body: { error: 'Verified payment amount or currency mismatch.' } };
        }

        await confirmVerifiedAppointmentPayment(db, apt, payment, payEntity.id, 'system');
        return {
          status: 200,
          body: {
            status: 'confirmed',
            booking_reference: apt.booking_reference,
          },
        };
      });

      return res.status(verifyResult.status).json(verifyResult.body);
    } catch (err) {
      console.error('Error verifying payment:', err);
      return res.status(500).json({ error: 'Server payment verification failed.' });
    }
  });

  // --------------------------------------------------------------------------
  // 6. SANDBOX / TEST MODE SIGNED WEBHOOK DISPATCHER
  //    (Only enabled when live RAZORPAY_KEY_SECRET is not set, allowing complete
  //    end-to-end testing of the real HMAC-SHA256 webhook pipeline as required by Phase 6)
  // --------------------------------------------------------------------------
  app.post('/api/test-mode/trigger-razorpay-webhook', async (req: Request, res: Response) => {
    try {
      const isLiveConfigured = Boolean(
        process.env.RAZORPAY_KEY_ID &&
          process.env.RAZORPAY_KEY_SECRET &&
          process.env.RAZORPAY_WEBHOOK_SECRET
      );
      if (isLiveConfigured) {
        return res.status(403).json({
          error: 'Sandbox webhook simulator is disabled when live Razorpay credentials are active.',
        });
      }

      const bookingReference = sanitizeText(req.body?.booking_reference, 40);
      const accessToken = sanitizeText(req.body?.access_token, 64);

      const lookup = await withBookingLock((db) => {
        const apt = db.appointments.find(
          (a) => a.booking_reference === bookingReference && a.access_token === accessToken
        );
        if (!apt) return null;
        const pay = db.payments.find(
          (p) => p.appointment_id === apt.id && p.payment_status === 'Pending'
        );
        if (!pay) return null;
        return { apt, pay };
      });

      if (!lookup) {
        return res.status(404).json({ error: 'Active pending booking/payment not found.' });
      }

      const simulatedWebhookPayload = {
        entity: 'event',
        account_id: 'acc_razorpay_sandbox',
        event: 'qr_code.credited',
        contains: ['payment', 'qr_code'],
        id: `evt_test_${crypto.randomBytes(8).toString('hex')}`,
        payload: {
          payment: {
            entity: {
              id: `pay_rzp_${crypto.randomBytes(7).toString('hex')}`,
              entity: 'payment',
              amount: lookup.apt.appointment_price * 100,
              currency: 'INR',
              status: 'captured',
              captured: true,
              method: 'upi',
              vpa: 'customer@okaxis',
              notes: {
                booking_reference: lookup.apt.booking_reference,
                appointment_id: lookup.apt.id,
                qr_id: lookup.pay.provider_qr_id,
              },
              created_at: Math.floor(Date.now() / 1000),
            },
          },
          qr_code: {
            entity: {
              id: lookup.pay.provider_qr_id,
              entity: 'qr_code',
              payment_amount: lookup.apt.appointment_price * 100,
              status: 'closed',
              close_reason: 'paid',
              notes: {
                booking_reference: lookup.apt.booking_reference,
                appointment_id: lookup.apt.id,
              },
            },
          },
        },
      };

      const rawString = JSON.stringify(simulatedWebhookPayload);
      const testSecret = process.env.RAZORPAY_WEBHOOK_SECRET || 'sandbox_test_webhook_secret_rak';
      const signature = crypto.createHmac('sha256', testSecret).update(rawString).digest('hex');

      const webhookResponse = await fetch(`http://127.0.0.1:${PORT}/api/webhooks/razorpay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-razorpay-signature': signature,
          'x-razorpay-event-id': simulatedWebhookPayload.id,
          'x-sandbox-test-webhook': 'true',
        },
        body: rawString,
      });

      const responseData = await webhookResponse.json();
      return res.status(webhookResponse.status).json(responseData);
    } catch (err) {
      console.error('Sandbox webhook trigger failed:', err);
      return res.status(500).json({ error: 'Failed to dispatch test webhook.' });
    }
  });

  // --------------------------------------------------------------------------
  // 7. BOOKING STATUS POLLING ENDPOINT (booking-status)
  // --------------------------------------------------------------------------
  app.get('/api/bookings/:reference/status', async (req: Request, res: Response) => {
    try {
      const bookingReference = sanitizeText(req.params.reference, 40);
      const accessToken = sanitizeText(
        (req.headers['x-booking-token'] as string) || (req.query.token as string),
        64
      );

      if (!bookingReference || !accessToken) {
        return res.status(401).json({ error: 'Booking access token required.' });
      }

      const statusPayload = await withBookingLock(async (db) => {
        expirePendingBookingsSync(db);

        const apt = db.appointments.find(
          (a) => a.booking_reference === bookingReference && a.access_token === accessToken
        );

        if (!apt) {
          return { status: 404, body: { error: 'Booking not found or invalid access token.' } };
        }

        const payment = db.payments.find((p) => p.appointment_id === apt.id);

        // If Razorpay QR Code API is live and payment is still pending, poll Razorpay QR payments API directly
        const rzpKeyId = (process.env.RAZORPAY_KEY_ID || '').trim();
        const rzpKeySecret = (process.env.RAZORPAY_KEY_SECRET || '').trim();

        if (
          apt.appointment_status === 'Pending Payment' &&
          payment &&
          payment.gateway_mode === 'razorpay_qr_api' &&
          rzpKeyId &&
          rzpKeySecret
        ) {
          try {
            const authHeader = `Basic ${Buffer.from(`${rzpKeyId}:${rzpKeySecret}`).toString('base64')}`;
            const qrPaymentsRes = await fetch(
              `https://api.razorpay.com/v1/payments/qr_codes/${payment.provider_qr_id}/payments`,
              { headers: { Authorization: authHeader } }
            );
            if (qrPaymentsRes.ok) {
              const qrPaymentsJson = (await qrPaymentsRes.json()) as {
                items?: Array<{
                  id: string;
                  status: string;
                  captured: boolean;
                  amount: number;
                  currency: string;
                  method: string;
                }>;
              };
              const capturedPayment = (qrPaymentsJson.items || []).find(
                (item) =>
                  (item.status === 'captured' || item.captured) &&
                  item.currency === 'INR' &&
                  item.amount === apt.appointment_price * 100
              );
              if (capturedPayment) {
                await confirmVerifiedAppointmentPayment(
                  db,
                  apt,
                  payment,
                  capturedPayment.id,
                  'system'
                );
              }
            }
          } catch {
            // Ignore transient polling error; webhook remains primary
          }
        }

        const meetingMethod =
          apt.appointment_type === 'phone_consultation' ? 'Phone call' : 'Physical meeting';

        return {
          status: 200,
          body: {
            booking: {
              booking_reference: apt.booking_reference,
              customer_name: apt.customer_name,
              appointment_type: apt.appointment_type,
              appointment_type_label: getAppointmentTypeDisplay(apt.appointment_type),
              appointment_price: apt.appointment_price,
              appointment_date: apt.appointment_date,
              start_time: apt.start_time,
              end_time: apt.end_time,
              timezone: apt.timezone,
              duration_minutes: db.admin_settings.appointment_duration,
              meeting_method: meetingMethod,
              appointment_status: apt.appointment_status,
              payment_status: apt.payment_status,
              payment_reference: apt.payment_reference,
              reservation_expires_at: apt.reservation_expires_at,
            },
          },
        };
      });

      return res.status(statusPayload.status).json(statusPayload.body);
    } catch (err) {
      console.error('Error checking booking status:', err);
      return res.status(500).json({ error: 'Unable to retrieve booking status.' });
    }
  });

  // --------------------------------------------------------------------------
  // 8. EXPIRE & RELEASE PENDING BOOKINGS ENDPOINTS
  // --------------------------------------------------------------------------
  app.post('/api/bookings/expire-pending', async (_req: Request, res: Response) => {
    try {
      const expiredCount = await withBookingLock((db) => expirePendingBookingsSync(db));
      return res.json({ expired_count: expiredCount });
    } catch (err) {
      console.error('Error expiring pending bookings:', err);
      return res.status(500).json({ error: 'Failed to expire pending bookings.' });
    }
  });

  app.post('/api/bookings/:reference/release', async (req: Request, res: Response) => {
    try {
      const bookingReference = sanitizeText(req.params.reference, 40);
      const accessToken = sanitizeText(
        req.body?.access_token || (req.headers['x-booking-token'] as string),
        64
      );

      if (!bookingReference || !accessToken) {
        return res.status(400).json({ error: 'Booking reference and access token required.' });
      }

      const result = await withBookingLock((db) => {
        const apt = db.appointments.find(
          (a) => a.booking_reference === bookingReference && a.access_token === accessToken
        );
        if (!apt) {
          return { status: 404, body: { error: 'Booking not found.' } };
        }
        if (apt.appointment_status === 'Pending Payment' && apt.payment_status !== 'Paid') {
          const nowIso = new Date().toISOString();
          apt.appointment_status = 'Cancelled';
          apt.payment_status = 'Expired';
          apt.cancelled_at = nowIso;
          apt.updated_at = nowIso;
          apt.history.push({
            timestamp: nowIso,
            action: 'Unpaid Draft Released by Customer',
            actor: 'customer',
            details: 'Customer returned to edit details / change slot before completing payment.',
          });
          for (const pay of db.payments) {
            if (pay.appointment_id === apt.id && pay.payment_status === 'Pending') {
              pay.payment_status = 'Expired';
              pay.updated_at = nowIso;
            }
          }
        }
        return { status: 200, body: { released: true, booking_reference: apt.booking_reference } };
      });

      return res.status(result.status).json(result.body);
    } catch (err) {
      console.error('Error releasing pending booking:', err);
      return res.status(500).json({ error: 'Failed to release unpaid reservation.' });
    }
  });

  // --------------------------------------------------------------------------
  // 9. ADMINISTRATOR MANAGEMENT ENDPOINTS (admin-management)
  // --------------------------------------------------------------------------
  app.get(
    '/api/admin/dashboard',
    verifyAdminRequest,
    async (req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const dashboardData = await withBookingLock((db) => {
          expirePendingBookingsSync(db);

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
            .filter((a) => a.payment_status === 'Paid')
            .reduce((sum, a) => sum + a.appointment_price, 0);
          const upcomingAppointments = db.appointments.filter(
            (a) => a.appointment_status === 'Confirmed' && a.appointment_date >= todayIST
          ).length;

          const emailConfig = isEmailProviderConfigured();
          const razorpayConfigured = Boolean(
            process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
          );
          const webhookConfigured = Boolean(process.env.RAZORPAY_WEBHOOK_SECRET);

          return {
            admin_user: req.adminUser,
            today_ist: todayIST,
            summary: {
              total_bookings: totalBookings,
              confirmed_appointments: confirmedAppointments,
              pending_payments: pendingPayments,
              completed_appointments: completedAppointments,
              total_revenue: totalRevenue,
              upcoming_appointments: upcomingAppointments,
            },
            appointments: db.appointments.map(({ access_token: _omit, ...rest }) => rest),
            payments: db.payments.map(({ qr_image_data_url: _omitQr, ...rest }) => rest),
            availability: db.availability,
            admin_settings: db.admin_settings,
            email_logs: db.email_logs.slice(0, 50),
            integration_status: {
              razorpay_api_configured: razorpayConfigured,
              razorpay_webhook_secret_configured: webhookConfigured,
              email_provider_configured: emailConfig.configured,
              email_provider_name: emailConfig.provider,
              webhook_url: `${process.env.APP_URL || ''}/api/webhooks/razorpay`,
            },
          };
        });

        return res.json(dashboardData);
      } catch (err) {
        console.error('Error loading admin dashboard:', err);
        return res.status(500).json({ error: 'Failed to load administrator dashboard.' });
      }
    }
  );

  // Update appointment status (Completed / Cancelled) — Never allow unpaid -> Confirmed/Paid
  app.post(
    '/api/admin/appointments/:id/status',
    verifyAdminRequest,
    async (req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const appointmentId = sanitizeText(req.params.id, 64);
        const targetStatus = sanitizeText(req.body?.appointment_status, 40) as AppointmentStatus;
        const reasonNote = sanitizeText(req.body?.note, 1000);

        if (!['Completed', 'Cancelled'].includes(targetStatus)) {
          return res.status(400).json({
            error:
              'Administrators may only mark confirmed appointments as Completed or Cancel appointments. Bookings cannot be manually marked as Paid/Confirmed without a verified Razorpay payment record.',
          });
        }

        const updateResult = await withBookingLock(async (db) => {
          const apt = db.appointments.find((a) => a.id === appointmentId);
          if (!apt) {
            return { status: 404, body: { error: 'Appointment not found.' } };
          }

          if (targetStatus === 'Completed') {
            if (apt.payment_status !== 'Paid' || apt.appointment_status !== 'Confirmed') {
              return {
                status: 400,
                body: {
                  error:
                    'Only Confirmed appointments with a verified Paid status can be marked as Completed.',
                },
              };
            }
            const nowIso = new Date().toISOString();
            apt.appointment_status = 'Completed';
            apt.completed_at = nowIso;
            apt.updated_at = nowIso;
            apt.history.push({
              timestamp: nowIso,
              action: 'Marked as Completed',
              actor: 'admin',
              details: reasonNote
                ? `Consultation completed by ${req.adminUser?.email}. Note: ${reasonNote}`
                : `Consultation marked as completed by ${req.adminUser?.email}.`,
            });
          } else if (targetStatus === 'Cancelled') {
            if (apt.appointment_status === 'Cancelled') {
              return { status: 400, body: { error: 'Appointment is already cancelled.' } };
            }
            const nowIso = new Date().toISOString();
            const previousStatus = apt.appointment_status;
            apt.appointment_status = 'Cancelled';
            apt.cancelled_at = nowIso;
            apt.updated_at = nowIso;
            // Preserve payment_status history as required by Section 8
            apt.history.push({
              timestamp: nowIso,
              action: 'Appointment Cancelled',
              actor: 'admin',
              details: `Cancelled from status "${previousStatus}" by ${req.adminUser?.email}. Payment status preserved as "${apt.payment_status}". ${reasonNote ? `Reason: ${reasonNote}` : ''}`.trim(),
            });

            await dispatchEmailNotification(db, apt, 'cancellation');
          }

          const { access_token: _omit, ...sanitizedApt } = apt;
          return { status: 200, body: { appointment: sanitizedApt } };
        });

        return res.status(updateResult.status).json(updateResult.body);
      } catch (err) {
        console.error('Error updating appointment status:', err);
        return res.status(500).json({ error: 'Failed to update appointment status.' });
      }
    }
  );

  // Update internal administrative notes on an appointment
  app.post(
    '/api/admin/appointments/:id/notes',
    verifyAdminRequest,
    async (req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const appointmentId = sanitizeText(req.params.id, 64);
        const adminNotes = sanitizeText(req.body?.admin_notes, 4000);

        const result = await withBookingLock((db) => {
          const apt = db.appointments.find((a) => a.id === appointmentId);
          if (!apt) {
            return { status: 404, body: { error: 'Appointment not found.' } };
          }

          const nowIso = new Date().toISOString();
          apt.admin_notes = adminNotes;
          apt.updated_at = nowIso;
          apt.history.push({
            timestamp: nowIso,
            action: 'Admin Notes Updated',
            actor: 'admin',
            details: `Internal notes updated by ${req.adminUser?.email}.`,
          });

          const { access_token: _omit, ...sanitizedApt } = apt;
          return { status: 200, body: { appointment: sanitizedApt } };
        });

        return res.status(result.status).json(result.body);
      } catch (err) {
        console.error('Error updating admin notes:', err);
        return res.status(500).json({ error: 'Failed to save administrative notes.' });
      }
    }
  );

  // Block a date or specific time slot
  app.post(
    '/api/admin/availability/block',
    verifyAdminRequest,
    async (req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const dateStr = sanitizeText(req.body?.date, 10);
        const startTime = sanitizeText(req.body?.start_time, 20) || 'FULL_DAY';
        const blockReason = sanitizeText(req.body?.block_reason, 500) || 'Administrator blocked';

        if (!isValidDateString(dateStr)) {
          return res.status(400).json({ error: 'Invalid date format (YYYY-MM-DD).' });
        }

        let endTime = 'FULL_DAY';
        if (startTime !== 'FULL_DAY') {
          const slot = STANDARD_TIME_SLOTS.find((s) => s.start_time === startTime);
          if (!slot) {
            return res.status(400).json({ error: 'Invalid time slot selected.' });
          }
          endTime = slot.end_time;
        }

        const blockResult = await withBookingLock((db) => {
          const existing = db.availability.find(
            (a) => a.date === dateStr && a.start_time === startTime
          );
          const nowIso = new Date().toISOString();

          if (existing) {
            existing.is_available = false;
            existing.block_reason = blockReason;
            existing.updated_at = nowIso;
            return { status: 200, body: { availability: existing } };
          }

          const record: AvailabilityRecord = {
            id: `avl_${crypto.randomBytes(6).toString('hex')}`,
            date: dateStr,
            start_time: startTime,
            end_time: endTime,
            is_available: false,
            block_reason: blockReason,
            created_at: nowIso,
            updated_at: nowIso,
          };

          db.availability.unshift(record);
          return { status: 201, body: { availability: record } };
        });

        return res.status(blockResult.status).json(blockResult.body);
      } catch (err) {
        console.error('Error blocking availability:', err);
        return res.status(500).json({ error: 'Failed to block date/slot.' });
      }
    }
  );

  // Unblock / remove availability restriction
  app.delete(
    '/api/admin/availability/:id',
    verifyAdminRequest,
    async (_req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const blockId = sanitizeText(_req.params.id, 64);
        const removeResult = await withBookingLock((db) => {
          const idx = db.availability.findIndex((a) => a.id === blockId);
          if (idx === -1) {
            return { status: 404, body: { error: 'Availability rule not found.' } };
          }
          db.availability.splice(idx, 1);
          return { status: 200, body: { deleted_id: blockId } };
        });

        return res.status(removeResult.status).json(removeResult.body);
      } catch (err) {
        console.error('Error removing availability block:', err);
        return res.status(500).json({ error: 'Failed to unblock date/slot.' });
      }
    }
  );

  // Update configurable administrator settings
  app.put(
    '/api/admin/settings',
    verifyAdminRequest,
    async (req: AdminAuthenticatedRequest, res: Response) => {
      try {
        const adminEmail = sanitizeText(req.body?.administrator_email, 254).toLowerCase();
        const advanceDays = Number(req.body?.booking_advance_days);
        const phonePrice = Number(req.body?.phone_consultation_price);
        const inPersonPrice = Number(req.body?.in_person_consultation_price);
        const duration = Number(req.body?.appointment_duration);
        const emailEnabled = Boolean(req.body?.email_notifications_enabled);
        const remindersEnabled = Boolean(req.body?.reminders_enabled);

        if (adminEmail && !isValidEmail(adminEmail)) {
          return res.status(400).json({ error: 'Please provide a valid administrator email.' });
        }
        if (Number.isNaN(advanceDays) || advanceDays < 1 || advanceDays > 365) {
          return res
            .status(400)
            .json({ error: 'Advance booking limit must be between 1 and 365 days.' });
        }
        if (Number.isNaN(phonePrice) || phonePrice < 100 || phonePrice > 500000) {
          return res.status(400).json({ error: 'Invalid phone consultation price.' });
        }
        if (Number.isNaN(inPersonPrice) || inPersonPrice < 100 || inPersonPrice > 500000) {
          return res.status(400).json({ error: 'Invalid in-person consultation price.' });
        }

        const updatedSettings = await withBookingLock((db) => {
          const s = db.admin_settings;
          if (adminEmail) s.administrator_email = adminEmail;
          s.booking_advance_days = Math.round(advanceDays);
          s.phone_consultation_price = Math.round(phonePrice);
          s.in_person_consultation_price = Math.round(inPersonPrice);
          if (!Number.isNaN(duration) && duration >= 15 && duration <= 240) {
            s.appointment_duration = Math.round(duration);
          }
          s.email_notifications_enabled = emailEnabled;
          s.reminders_enabled = remindersEnabled;
          s.updated_at = new Date().toISOString();
          return s;
        });

        return res.json({ admin_settings: updatedSettings });
      } catch (err) {
        console.error('Error updating admin settings:', err);
        return res.status(500).json({ error: 'Failed to update administrator settings.' });
      }
    }
  );

  // --------------------------------------------------------------------------
  // BACKGROUND SCHEDULER: EXPIRE PENDING BOOKINGS & SEND 24H / 1H REMINDERS
  // --------------------------------------------------------------------------
  setInterval(() => {
    withBookingLock(async (db) => {
      expirePendingBookingsSync(db);

      if (!db.admin_settings.reminders_enabled) return;
      const nowMs = Date.now();

      for (const apt of db.appointments) {
        if (apt.appointment_status !== 'Confirmed') continue;
        const slotStartMs = getSlotTimestampIST(apt.appointment_date, apt.start_time);
        const diffHours = (slotStartMs - nowMs) / (1000 * 60 * 60);

        if (diffHours > 1 && diffHours <= 24 && !apt.reminder_24h_sent) {
          apt.reminder_24h_sent = true;
          await dispatchEmailNotification(db, apt, 'reminder_24h');
        } else if (diffHours > 0 && diffHours <= 1 && !apt.reminder_1h_sent) {
          apt.reminder_1h_sent = true;
          await dispatchEmailNotification(db, apt, 'reminder_1h');
        }
      }
    }).catch(() => {});
  }, 15000);

  // --------------------------------------------------------------------------
  // VITE DEV MIDDLEWARE OR PRODUCTION STATIC ASSETS
  // --------------------------------------------------------------------------
  const distPath = path.resolve(process.cwd(), 'dist');
  const isProd = process.env.NODE_ENV === 'production' && fs.existsSync(distPath);

  if (isProd) {
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ram Ashok Kumar Full-Stack Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
