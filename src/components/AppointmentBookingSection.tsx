import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Phone,
  UserCheck,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  ArrowLeft,
  RefreshCw,
  QrCode,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  getCurrentISTParts,
  normalizeDateString,
  computeLocalAvailabilityForDate,
  fetchApiJson,
  createDomainBookingAndPayment,
  confirmDomainBookingPayment,
  releaseDomainPendingBooking,
} from '../lib/domainBookingEngine';

type AppointmentTypeId = 'phone_consultation' | 'in_person_consultation';

interface AppointmentTypeConfig {
  id: AppointmentTypeId;
  code: string;
  nameEn: string;
  nameHi: string;
  price: number;
  currency: string;
  durationMinutes: number;
  meetingMethodEn: string;
  meetingMethodHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

interface SlotItem {
  slotNumber: number;
  start_time: string;
  end_time: string;
  available: boolean;
  status: 'available' | 'reserved' | 'booked' | 'blocked' | 'passed';
}

interface ActiveBooking {
  id: string;
  booking_reference: string;
  access_token: string;
  customer_name: string;
  appointment_type: AppointmentTypeId;
  appointment_price: number;
  appointment_date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  duration_minutes: number;
  appointment_status: 'Pending Payment' | 'Confirmed' | 'Completed' | 'Cancelled' | 'Expired';
  payment_status: 'Pending' | 'Paid' | 'Failed' | 'Expired' | 'Refunded';
  payment_reference?: string;
  reservation_expires_at: string;
}

interface ActivePayment {
  id: string;
  upi_id?: string;
  provider_qr_id: string;
  provider_order_id: string | null;
  amount: number;
  currency: string;
  payment_method: string;
  payment_status: string;
  qr_image_data_url: string;
  qr_upi_string: string | null;
  gateway_mode: 'razorpay_qr_api' | 'razorpay_order_fallback' | 'razorpay_test_sandbox';
  expires_at: string;
  razorpay_key_id: string | null;
}

interface AppointmentBookingSectionProps {
  onOpenAdminDashboard?: () => void;
}

const DEFAULT_APPOINTMENT_TYPES: AppointmentTypeConfig[] = [
  {
    id: 'phone_consultation',
    code: 'APPOINTMENT 01',
    nameEn: 'Private Phone Consultation',
    nameHi: 'निजी फ़ोन परामर्श',
    price: 5100,
    currency: 'INR',
    durationMinutes: 60,
    meetingMethodEn: 'Phone call',
    meetingMethodHi: 'फ़ोन कॉल',
    descriptionEn:
      'Direct one-on-one phone consultation with Ram Ashok Kumar for anomaly analysis, spiritual diagnostics, or field case guidance. Ram will contact you on your provided number at the confirmed appointment time.',
    descriptionHi:
      'असाधारण घटनाओं के विश्लेषण, आध्यात्मिक परामर्श या क्षेत्रीय मार्गदर्शन हेतु राम अशोक कुमार के साथ सीधा व्यक्तिगत फ़ोन संवाद। निर्धारित समय पर राम जी आपके दिए गए नंबर पर संपर्क करेंगे।',
  },
  {
    id: 'in_person_consultation',
    code: 'APPOINTMENT 02',
    nameEn: 'In-Person Consultation',
    nameHi: 'प्रत्यक्ष व्यक्तिगत परामर्श',
    price: 11000,
    currency: 'INR',
    durationMinutes: 60,
    meetingMethodEn: 'Physical meeting',
    meetingMethodHi: 'प्रत्यक्ष भेंट',
    descriptionEn:
      'Private, confidential in-person consultation with Ram Ashok Kumar. The exact meeting chamber location will be confirmed individually after your booking is verified.',
    descriptionHi:
      'राम अशोक कुमार के साथ गोपनीय प्रत्यक्ष व्यक्तिगत परामर्श। आपकी बुकिंग और भुगतान सत्यापित होने के पश्चात् भेंट का सटीक स्थान व्यक्तिगत रूप से साझा किया जाएगा।',
  },
];

function getTodayISTFallback(): string {
  return getCurrentISTParts().dateStr;
}

function getDefaultBookingDateIST(): string {
  return getCurrentISTParts().defaultBookingDateStr;
}

export default function AppointmentBookingSection({
  onOpenAdminDashboard,
}: AppointmentBookingSectionProps) {
  const { t } = useLanguage();

  // Configuration from backend or domain defaults
  const [appointmentTypes, setAppointmentTypes] =
    useState<AppointmentTypeConfig[]>(DEFAULT_APPOINTMENT_TYPES);
  const [minDate, setMinDate] = useState<string>(getTodayISTFallback());
  const [maxDate, setMaxDate] = useState<string>('');
  const [blockedDates, setBlockedDates] = useState<string[]>([]);

  // Flow step: 'select' -> 'form' -> 'payment' -> 'confirmed' | 'expired'
  const [step, setStep] = useState<'select' | 'form' | 'payment' | 'confirmed' | 'expired'>('select');
  const [selectedTypeId, setSelectedTypeId] = useState<AppointmentTypeId | null>(null);

  // Booking form fields
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>(getDefaultBookingDateIST());
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [consultationReason, setConsultationReason] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Availability state (initialized immediately with IST slots so custom domains never show empty slots)
  const [slots, setSlots] = useState<SlotItem[]>(
    () => computeLocalAvailabilityForDate(getDefaultBookingDateIST()).slots
  );
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [dateBlockedReason, setDateBlockedReason] = useState<string | null>(null);

  // Submission & Payment states
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBooking, setActiveBooking] = useState<ActiveBooking | null>(null);
  const [activePayment, setActivePayment] = useState<ActivePayment | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(600);
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [simulatingWebhook, setSimulatingWebhook] = useState(false);
  const [utrInput, setUtrInput] = useState('');

  const sectionTopRef = useRef<HTMLDivElement | null>(null);

  const selectedTypeObj =
    appointmentTypes.find((item) => item.id === selectedTypeId) || appointmentTypes[0];

  // Fetch initial configuration from backend (with automatic domain fallback)
  useEffect(() => {
    let mounted = true;
    fetchApiJson<{
      appointment_types?: AppointmentTypeConfig[];
      min_date?: string;
      max_date?: string;
      blocked_dates?: string[];
    }>('/api/booking-config')
      .then(({ ok, data }) => {
        if (!mounted || !ok || !data) return;
        if (Array.isArray(data.appointment_types) && data.appointment_types.length === 2) {
          setAppointmentTypes(data.appointment_types);
        }
        if (data.min_date) {
          setMinDate(data.min_date);
          setSelectedDate((prev) => (prev < data.min_date! ? data.min_date! : prev));
        }
        if (data.max_date) setMaxDate(data.max_date);
        if (Array.isArray(data.blocked_dates)) setBlockedDates(data.blocked_dates);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  // Compute & fetch slot availability whenever selectedDate changes
  const fetchAvailability = useCallback(async (rawDateToQuery: string) => {
    const dateToQuery = normalizeDateString(rawDateToQuery || getDefaultBookingDateIST());
    // 1. Immediately populate slots using deterministic IST domain engine so slots never fail to appear
    const localResult = computeLocalAvailabilityForDate(dateToQuery);
    setSlots(localResult.slots);
    setDateBlockedReason(localResult.is_date_blocked ? localResult.date_block_reason : null);

    setLoadingSlots(true);
    try {
      const { ok, data } = await fetchApiJson<{
        is_date_blocked?: boolean;
        date_block_reason?: string | null;
        slots?: SlotItem[];
      }>(`/api/availability?date=${encodeURIComponent(dateToQuery)}`);

      if (ok && data && Array.isArray(data.slots)) {
        // Merge any confirmed bookings from local domain storage with backend availability
        const mergedSlots: SlotItem[] = (data.slots.length > 0 ? data.slots : localResult.slots).map(
          (serverSlot) => {
            const localSlot = localResult.slots.find(
              (ls) => ls.start_time === serverSlot.start_time
            );
            if (localSlot && !localSlot.available && serverSlot.available) {
              return localSlot;
            }
            return serverSlot;
          }
        );
        setSlots(mergedSlots);
        setDateBlockedReason(data.is_date_blocked ? data.date_block_reason || null : null);
        setSelectedSlot((current) => {
          const matching = mergedSlots.find((s) => s.start_time === current && s.available);
          return matching ? current : '';
        });
      } else {
        // Running on static/custom domain without backend API: keep localResult slots active
        setSlots(localResult.slots);
        setDateBlockedReason(localResult.is_date_blocked ? localResult.date_block_reason : null);
        setSelectedSlot((current) => {
          const matching = localResult.slots.find((s) => s.start_time === current && s.available);
          return matching ? current : '';
        });
      }
    } catch {
      // Never clear slots on network error; preserve local IST slots
      setSlots(localResult.slots);
      setDateBlockedReason(localResult.is_date_blocked ? localResult.date_block_reason : null);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [step, selectedDate, fetchAvailability]);

  // Countdown timer for 10-minute payment reservation
  useEffect(() => {
    if (step !== 'payment' || !activeBooking) return;

    const updateTimer = () => {
      const expiresMs = new Date(activeBooking.reservation_expires_at).getTime();
      const diffSec = Math.max(0, Math.floor((expiresMs - Date.now()) / 1000));
      setRemainingSeconds(diffSec);
      if (diffSec <= 0) {
        setStep('expired');
      }
    };

    updateTimer();
    const timerId = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(timerId);
  }, [step, activeBooking]);

  // Automatic payment & booking status polling while on payment screen
  useEffect(() => {
    if (step !== 'payment' || !activeBooking) return;

    let cancelled = false;

    const pollStatus = async () => {
      try {
        const { ok, data } = await fetchApiJson<{ booking?: ActiveBooking }>(
          `/api/bookings/${encodeURIComponent(activeBooking.booking_reference)}/status`,
          {
            headers: {
              'x-booking-token': activeBooking.access_token,
            },
          }
        );
        if (!ok || !data || cancelled) return;
        const b = data.booking;
        if (!b || cancelled) return;

        if (b.appointment_status === 'Confirmed' && b.payment_status === 'Paid') {
          setActiveBooking((prev) =>
            prev
              ? {
                  ...prev,
                  appointment_status: 'Confirmed',
                  payment_status: 'Paid',
                  payment_reference: b.payment_reference,
                }
              : prev
          );
          setStep('confirmed');
        } else if (b.appointment_status === 'Expired' || b.payment_status === 'Expired') {
          setStep('expired');
        }
      } catch {
        // Ignore transient network errors during poll
      }
    };

    const pollInterval = window.setInterval(pollStatus, 2500);
    return () => {
      cancelled = true;
      window.clearInterval(pollInterval);
    };
  }, [step, activeBooking]);

  const handleSelectAppointmentType = (typeId: AppointmentTypeId) => {
    setSelectedTypeId(typeId);
    setFormError(null);
    setStep('form');
    setTimeout(() => {
      sectionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const validateBookingForm = (): string | null => {
    if (!selectedTypeId) {
      return t('Please select an appointment type.', 'कृपया परामर्श का प्रकार चुनें।');
    }
    if (customerName.trim().length < 2) {
      return t('Please enter your full name.', 'कृपया अपना पूरा नाम दर्ज करें।');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(customerEmail.trim())) {
      return t('Please enter a valid email address.', 'कृपया एक मान्य ईमेल पता दर्ज करें।');
    }
    const cleanedPhone = customerPhone.replace(/[\s\-()]/g, '');
    const isValidIndianOrIntl =
      /^(\+91|91|0)?[6-9]\d{9}$/.test(cleanedPhone) || /^\+?[1-9]\d{6,14}$/.test(cleanedPhone);
    if (!isValidIndianOrIntl) {
      return t(
        'Please enter a valid 10-digit Indian phone number (or international number with country code).',
        'कृपया एक मान्य १०-अंकीय भारतीय फ़ोन नंबर (या देश कोड सहित अंतर्राष्ट्रीय नंबर) दर्ज करें।'
      );
    }
    if (customerAddress.trim().length < 5) {
      return t('Please enter your complete address.', 'कृपया अपना पूरा पता दर्ज करें।');
    }
    if (!selectedDate || selectedDate < minDate) {
      return t('Please select a valid upcoming appointment date.', 'कृपया एक मान्य आगामी तिथि चुनें।');
    }
    if (blockedDates.includes(selectedDate)) {
      return t(
        'The selected date is unavailable. Please choose another date.',
        'चयनित तिथि उपलब्ध नहीं है। कृपया अन्य तिथि चुनें।'
      );
    }
    if (!selectedSlot) {
      return t('Please select an available 60-minute time slot.', 'कृपया एक उपलब्ध समय स्लॉट चुनें।');
    }
    if (consultationReason.trim().length < 10) {
      return t(
        'Please explain the reason for your consultation (minimum 10 characters).',
        'कृपया अपने परामर्श का कारण स्पष्ट करें (न्यूनतम १० अक्षर)।'
      );
    }
    if (!termsAccepted) {
      return t(
        'Please accept the booking terms and conditions to proceed.',
        'आगे बढ़ने के लिए कृपया बुकिंग नियम एवं शर्तें स्वीकार करें।'
      );
    }
    return null;
  };

  const handleCreateBookingAndQr = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationError = validateBookingForm();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      // 1. Attempt server-side booking & QR creation first
      const createRes = await fetchApiJson<{ booking?: ActiveBooking; error?: string }>(
        '/api/bookings/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            appointment_type: selectedTypeId,
            customer_name: customerName.trim(),
            customer_email: customerEmail.trim(),
            customer_phone: customerPhone.trim(),
            customer_address: customerAddress.trim(),
            appointment_date: normalizeDateString(selectedDate),
            start_time: selectedSlot,
            consultation_reason: consultationReason.trim(),
            additional_message: additionalMessage.trim(),
            terms_accepted: termsAccepted,
          }),
        }
      );

      if (createRes.ok && createRes.data?.booking) {
        const booking: ActiveBooking = createRes.data.booking;
        const payRes = await fetchApiJson<{ payment?: ActivePayment; error?: string }>(
          '/api/payments/create',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              booking_reference: booking.booking_reference,
              access_token: booking.access_token,
            }),
          }
        );

        if (payRes.ok && payRes.data?.payment) {
          setActiveBooking(booking);
          setActivePayment(payRes.data.payment);
          setStep('payment');
          setTimeout(() => {
            sectionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 60);
          return;
        }
      } else if (createRes.status >= 400 && createRes.status < 500 && createRes.data?.error) {
        setFormError(createRes.data.error);
        fetchAvailability(selectedDate);
        return;
      }

      // 2. Domain Mode Fallback: Execute booking & dynamic UPI QR generation (ramashokkumar@oksbi) directly in browser
      const domainResult = await createDomainBookingAndPayment({
        appointment_type: selectedTypeId!,
        customer_name: customerName.trim(),
        customer_email: customerEmail.trim(),
        customer_phone: customerPhone.trim(),
        customer_address: customerAddress.trim(),
        appointment_date: normalizeDateString(selectedDate),
        start_time: selectedSlot,
        consultation_reason: consultationReason.trim(),
        additional_message: additionalMessage.trim(),
      });

      setActiveBooking(domainResult.booking);
      setActivePayment(domainResult.payment);
      setStep('payment');
      setTimeout(() => {
        sectionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } catch (err: unknown) {
      setFormError(
        err instanceof Error
          ? err.message
          : t(
              'Could not process your booking request. Please try again.',
              'बुकिंग प्रक्रिया पूर्ण नहीं हो सकी। कृपया पुनः प्रयास करें।'
            )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Trigger payment verification (works with both backend webhook & custom domain mode)
  const handleTriggerSandboxWebhook = async () => {
    if (!activeBooking || simulatingWebhook) return;
    setSimulatingWebhook(true);
    try {
      const { ok } = await fetchApiJson('/api/test-mode/trigger-razorpay-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          booking_reference: activeBooking.booking_reference,
          access_token: activeBooking.access_token,
        }),
      });

      if (!ok) {
        const confirmed = confirmDomainBookingPayment(
          activeBooking.booking_reference,
          utrInput.trim() || undefined
        );
        if (confirmed) {
          setActiveBooking({
            ...activeBooking,
            appointment_status: 'Confirmed',
            payment_status: 'Paid',
            payment_reference: confirmed.payment_reference,
          });
          setStep('confirmed');
        }
      }
    } catch {
      const confirmed = confirmDomainBookingPayment(
        activeBooking.booking_reference,
        utrInput.trim() || undefined
      );
      if (confirmed) {
        setActiveBooking({
          ...activeBooking,
          appointment_status: 'Confirmed',
          payment_status: 'Paid',
          payment_reference: confirmed.payment_reference,
        });
        setStep('confirmed');
      }
    } finally {
      setSimulatingWebhook(false);
    }
  };

  const handleCancelPendingAndEdit = async () => {
    if (activeBooking && activeBooking.appointment_status === 'Pending Payment') {
      releaseDomainPendingBooking(activeBooking.booking_reference);
      fetchApiJson(`/api/bookings/${encodeURIComponent(activeBooking.booking_reference)}/release`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_token: activeBooking.access_token,
        }),
      }).catch(() => {});
    }
    setActiveBooking(null);
    setActivePayment(null);
    setFormError(null);
    setStep('form');
    fetchAvailability(selectedDate);
  };

  const handleResetToStart = () => {
    if (activeBooking && activeBooking.appointment_status === 'Pending Payment') {
      releaseDomainPendingBooking(activeBooking.booking_reference);
      fetchApiJson(`/api/bookings/${encodeURIComponent(activeBooking.booking_reference)}/release`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_token: activeBooking.access_token,
        }),
      }).catch(() => {});
    }
    setStep('select');
    setActiveBooking(null);
    setActivePayment(null);
    setSelectedSlot('');
    setConsultationReason('');
    setAdditionalMessage('');
    setTermsAccepted(false);
    setFormError(null);
  };

  const handleCopyBookingRef = () => {
    if (!activeBooking) return;
    navigator.clipboard.writeText(activeBooking.booking_reference).catch(() => {});
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleCopyPaymentRef = () => {
    if (!activePayment) return;
    const textToCopy = activePayment.upi_id || 'ramashokkumar@oksbi';
    navigator.clipboard.writeText(textToCopy).catch(() => {});
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const formatCountdown = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <section
      id="book-consultation"
      ref={sectionTopRef}
      className="relative py-20 md:py-28 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40 bg-[#16110e] paper-grain"
    >
      {/* Subtle atmospheric dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-gold-faded/60" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.28em] text-gold-faded uppercase">
              {t('Direct Consultation Registry', 'प्रत्यक्ष परामर्श पंजीकरण')}
            </span>
            <span className="h-[1px] w-8 bg-gold-faded/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold-warm tracking-wide font-medium">
            {t('Book a Private Consultation', 'निजी परामर्श बुक करें')}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-ancient-beige/80 font-vintage italic leading-relaxed">
            {t(
              'Schedule a private consultation with Ram Ashok Kumar.',
              'राम अशोक कुमार के साथ एक निजी परामर्श निर्धारित करें।'
            )}
          </p>

          {/* Subtle operational schedule metadata line */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-ancient-beige/65">
            <span>{t('Monday – Sunday', 'सोमवार – रविवार')}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">12:00 PM – 9:00 PM IST (Asia/Kolkata)</span>
            <span aria-hidden="true">·</span>
            <span>{t('60-Minute Private Session', '६०-मिनट का निजी सत्र')}</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* STEP 1: APPOINTMENT TYPE SELECTION CARDS                         */}
        {/* ================================================================ */}
        <AnimatePresence mode="wait">
          {step === 'select' && (
            <motion.div
              key="step-select"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch"
            >
              {appointmentTypes.map((item) => {
                const isPhone = item.id === 'phone_consultation';
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between rounded-xl bg-[#1f1814]/90 border border-gold-faded/35 hover:border-gold-warm/80 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-200"
                  >
                    <div>
                      {/* Top Kicker & Icon */}
                      <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-bronze-dark/50">
                        <span className="font-mono text-xs tracking-[0.2em] text-gold-faded uppercase">
                          {item.code}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ancient-beige/75">
                          {isPhone ? (
                            <Phone className="w-3.5 h-3.5 text-gold-warm" />
                          ) : (
                            <UserCheck className="w-3.5 h-3.5 text-gold-warm" />
                          )}
                          {t(item.meetingMethodEn, item.meetingMethodHi)}
                        </span>
                      </div>

                      {/* Title & Price */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-serif text-gold-warm font-semibold tracking-wide">
                          {t(item.nameEn, item.nameHi)}
                        </h3>
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-2xl sm:text-3xl font-serif font-bold text-ancient-beige tabular-nums">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                          <span className="ml-1.5 font-mono text-xs text-gold-faded uppercase">
                            INR
                          </span>
                        </div>
                      </div>

                      {/* Key Attributes Metadata Row */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gold-faded/90 mb-5">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="tabular-nums">{item.durationMinutes}</span>{' '}
                          {t('Minutes', 'मिनट')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {t('Meeting Method:', 'माध्यम:')}{' '}
                          <strong className="text-ancient-beige">
                            {t(item.meetingMethodEn, item.meetingMethodHi)}
                          </strong>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-ancient-beige/85 leading-relaxed mb-6">
                        {t(item.descriptionEn, item.descriptionHi)}
                      </p>

                      {/* Important Protocol Notice */}
                      <div className="p-4 rounded-lg bg-[#140f0c]/90 border border-bronze-dark/50 text-xs sm:text-sm text-ancient-beige/75 leading-relaxed mb-8">
                        {isPhone ? (
                          <p>
                            <strong className="text-gold-warm font-medium">
                              {t('Consultation Protocol:', 'परामर्श प्रक्रिया:')}
                            </strong>{' '}
                            {t(
                              'Please provide an active phone number. Ram Ashok Kumar will call you directly at your confirmed appointment slot.',
                              'कृपया अपना सक्रिय फ़ोन नंबर प्रदान करें। राम अशोक कुमार निर्धारित समय स्लॉट पर सीधे आपको कॉल करेंगे।'
                            )}
                          </p>
                        ) : (
                          <p>
                            <strong className="text-gold-warm font-medium">
                              {t('Location Confidentiality:', 'स्थान गोपनीयता:')}
                            </strong>{' '}
                            {t(
                              'For security and privacy, the physical meeting location is confirmed individually after verified booking.',
                              'सुरक्षा एवं गोपनीयता के दृष्टिगत, बुकिंग सत्यापित होने के पश्चात् प्रत्यक्ष भेंट का स्थान व्यक्तिगत रूप से साझा किया जाएगा।'
                            )}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectAppointmentType(item.id)}
                      className="w-full py-3.5 px-6 rounded-lg bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-150 cursor-pointer shadow-[0_8px_24px_rgba(212,175,55,0.25)] active:scale-[0.99]"
                    >
                      {t('Select Appointment', 'परामर्श चुनें')} — ₹
                      {item.price.toLocaleString('en-IN')} INR
                    </button>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* ================================================================ */}
          {/* STEP 2: STRUCTURED BOOKING FORM & LIVE SLOT SELECTION            */}
          {/* ================================================================ */}
          {step === 'form' && (
            <motion.div
              key="step-form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-[#1f1814]/95 border border-gold-faded/40 p-5 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
            >
              {/* Form Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-bronze-dark/60">
                <div>
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-faded hover:text-gold-warm transition-colors cursor-pointer mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t('Change Consultation Type', 'परामर्श प्रकार बदलें')}
                  </button>
                  <h3 className="text-2xl sm:text-3xl font-serif text-gold-warm font-semibold">
                    {t(selectedTypeObj.nameEn, selectedTypeObj.nameHi)}
                  </h3>
                </div>

                {/* Selected Appointment Summary Box */}
                <div className="px-4 py-3 rounded-lg bg-[#140f0c] border border-gold-faded/30 flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-ancient-beige/60">
                      {t('Payable Consultation Fee', 'देय परामर्श शुल्क')}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-gold-warm tabular-nums">
                      ₹{selectedTypeObj.price.toLocaleString('en-IN')} INR
                    </span>
                  </div>
                  <div className="h-8 w-[1px] bg-bronze-dark/60" />
                  <div className="text-right font-mono text-xs text-ancient-beige/80">
                    <span className="block tabular-nums">
                      {selectedTypeObj.durationMinutes} {t('Mins', 'मिनट')}
                    </span>
                    <span className="text-gold-faded">
                      {t(selectedTypeObj.meetingMethodEn, selectedTypeObj.meetingMethodHi)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Switch Appointment Type Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {appointmentTypes.map((typeItem) => {
                  const isActive = typeItem.id === selectedTypeId;
                  return (
                    <button
                      key={typeItem.id}
                      type="button"
                      onClick={() => setSelectedTypeId(typeItem.id)}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-[#2b211b] border-gold-warm text-gold-warm'
                          : 'bg-[#140f0c]/70 border-bronze-dark/40 text-ancient-beige/70 hover:border-gold-faded/40'
                      }`}
                    >
                      <span className="font-serif text-sm sm:text-base font-medium">
                        {t(typeItem.nameEn, typeItem.nameHi)}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold tabular-nums">
                        ₹{typeItem.price.toLocaleString('en-IN')} INR
                      </span>
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleCreateBookingAndQr} className="space-y-8" noValidate>
                {/* Part A: Personal Information */}
                <div>
                  <h4 className="font-serif text-lg text-gold-warm mb-4 pb-2 border-b border-bronze-dark/40">
                    {t('01. Personal & Contact Details', '०१. व्यक्तिगत एवं संपर्क विवरण')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-full-name"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Full Name', 'पूरा नाम')} <span className="text-gold-warm">*</span>
                      </label>
                      <input
                        id="booking-full-name"
                        type="text"
                        required
                        maxLength={120}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={t('Enter your full name', 'अपना पूरा नाम लिखें')}
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Email Address', 'ईमेल पता')} <span className="text-gold-warm">*</span>
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        maxLength={254}
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Phone Number (WhatsApp / Call)', 'फ़ोन नंबर (कॉल / व्हाट्सएप)')}{' '}
                        <span className="text-gold-warm">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        maxLength={24}
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm tabular-nums"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-type-readonly"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Selected Appointment Type', 'चयनित परामर्श प्रकार')}
                      </label>
                      <input
                        id="booking-type-readonly"
                        type="text"
                        readOnly
                        value={`${t(selectedTypeObj.nameEn, selectedTypeObj.nameHi)} — ₹${selectedTypeObj.price.toLocaleString('en-IN')} INR (${selectedTypeObj.durationMinutes} mins)`}
                        className="w-full px-4 py-3 rounded-lg bg-[#18120e] border border-gold-faded/30 text-gold-warm font-medium text-sm cursor-not-allowed"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="booking-address"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Full Address (City, State, Pin Code)', 'पूरा पता (शहर, राज्य, पिन कोड)')}{' '}
                        <span className="text-gold-warm">*</span>
                      </label>
                      <input
                        id="booking-address"
                        type="text"
                        required
                        maxLength={600}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder={t(
                          'House/Street, Locality, City, State, PIN Code',
                          'मकान/गली, क्षेत्र, शहर, राज्य, पिन कोड'
                        )}
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Part B: Date & Time Slot Scheduling */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-bronze-dark/40">
                    <h4 className="font-serif text-lg text-gold-warm">
                      {t(
                        '02. Select Appointment Date & Time Slot (IST)',
                        '०२. परामर्श तिथि एवं समय स्लॉट चुनें (IST)'
                      )}
                    </h4>
                    <span className="font-mono text-xs text-ancient-beige/65">
                      {t('Timezone: Asia/Kolkata (12:00 PM – 9:00 PM)', 'समय क्षेत्र: भारतीय मानक समय')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Date Picker Column */}
                    <div className="lg:col-span-4">
                      <label
                        htmlFor="booking-date"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-gold-warm" />
                        {t('Preferred Date', 'पसंदीदा तिथि')} <span className="text-gold-warm">*</span>
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        min={minDate}
                        max={maxDate || undefined}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige font-mono text-sm tabular-nums"
                      />
                      <p className="mt-2 text-xs text-ancient-beige/60 leading-relaxed">
                        {t(
                          'Select any open date. Each confirmed booking or active payment holds a slot exclusively.',
                          'कोई भी उपलब्ध तिथि चुनें। प्रत्येक स्लॉट में केवल एक ही परामर्श निर्धारित होता है।'
                        )}
                      </p>
                    </div>

                    {/* Time Slots Grid Column */}
                    <div className="lg:col-span-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-ancient-beige/85">
                          <Clock className="w-3.5 h-3.5 inline mr-1.5 text-gold-warm" />
                          {t('Available 60-Minute Slots', 'उपलब्ध ६०-मिनट के समय स्लॉट')}{' '}
                          <span className="text-gold-warm">*</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => fetchAvailability(selectedDate)}
                          className="inline-flex items-center gap-1 text-xs font-mono text-gold-faded hover:text-gold-warm cursor-pointer"
                        >
                          <RefreshCw className={`w-3 h-3 ${loadingSlots ? 'animate-spin' : ''}`} />
                          {t('Refresh', 'ताज़ा करें')}
                        </button>
                      </div>

                      {dateBlockedReason ? (
                        <div className="p-5 rounded-lg bg-[#140f0c] border border-amber-700/50 text-amber-200 text-sm flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                          <div>
                            <p className="font-medium">{dateBlockedReason}</p>
                            <p className="text-xs text-ancient-beige/65 mt-1">
                              {t(
                                'Please choose another date above to view available time slots.',
                                'उपलब्ध समय स्लॉट देखने के लिए कृपया ऊपर कोई अन्य तिथि चुनें।'
                              )}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          {slots.length > 0 && slots.every((s) => s.status === 'passed') && (
                            <div className="mb-3 p-3.5 rounded-lg bg-amber-950/40 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-200">
                              <span>
                                {t(
                                  "Today's consultation hours (12:00 PM – 9:00 PM IST) have concluded.",
                                  'आज के परामर्श समय (दोपहर १२:०० – रात्रि ९:०० IST) समाप्त हो चुके हैं।'
                                )}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  const nextDate = getDefaultBookingDateIST();
                                  if (nextDate > selectedDate) {
                                    setSelectedDate(nextDate);
                                  } else {
                                    const d = new Date(`${selectedDate}T12:00:00+05:30`);
                                    d.setDate(d.getDate() + 1);
                                    setSelectedDate(d.toISOString().slice(0, 10));
                                  }
                                }}
                                className="px-3 py-1.5 rounded bg-gold-warm text-[#140f0c] font-mono font-bold uppercase tracking-wider cursor-pointer shrink-0"
                              >
                                {t('View Tomorrow Slots →', 'कल के स्लॉट देखें →')}
                              </button>
                            </div>
                          )}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {slots.map((slot) => {
                              const isSelected = selectedSlot === slot.start_time;
                              const isAvailable = slot.available;

                              let statusLabel = t('Available', 'उपलब्ध');
                              if (slot.status === 'booked') statusLabel = t('Booked', 'बुक हो चुका');
                              if (slot.status === 'reserved') statusLabel = t('Reserved', 'आरक्षित');
                              if (slot.status === 'blocked') statusLabel = t('Unavailable', 'अनुपलब्ध');
                              if (slot.status === 'passed') statusLabel = t('Passed', 'समय समाप्त');

                              return (
                                <button
                                  key={slot.slotNumber}
                                  type="button"
                                  disabled={!isAvailable}
                                  onClick={() => setSelectedSlot(slot.start_time)}
                                  className={`px-3 py-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                                    !isAvailable
                                      ? 'bg-[#110d0a]/60 border-bronze-dark/25 text-ancient-beige/35 cursor-not-allowed'
                                      : isSelected
                                        ? 'bg-gold-warm/20 border-gold-warm text-gold-warm shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-pointer'
                                        : 'bg-[#120d0a] border-bronze-dark/60 hover:border-gold-faded text-ancient-beige cursor-pointer'
                                  }`}
                                >
                                  <span className="font-mono text-xs sm:text-[13px] font-semibold tabular-nums whitespace-nowrap">
                                    {slot.start_time} – {slot.end_time}
                                  </span>
                                  <span
                                    className={`text-[10px] font-mono uppercase tracking-wider mt-1 ${
                                      !isAvailable
                                        ? 'text-ancient-beige/35'
                                        : isSelected
                                          ? 'text-gold-warm font-semibold'
                                          : 'text-emerald-400/90'
                                    }`}
                                  >
                                    {isSelected ? t('Selected ✓', 'चयनित ✓') : statusLabel}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Part C: Consultation Reason & Additional Message */}
                <div>
                  <h4 className="font-serif text-lg text-gold-warm mb-4 pb-2 border-b border-bronze-dark/40">
                    {t('03. Case Summary & Consultation Purpose', '०३. परामर्श का कारण एवं विवरण')}
                  </h4>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="booking-reason"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Reason for Consultation', 'परामर्श का मुख्य कारण')}{' '}
                        <span className="text-gold-warm">*</span>
                      </label>
                      <textarea
                        id="booking-reason"
                        rows={4}
                        required
                        maxLength={2500}
                        value={consultationReason}
                        onChange={(e) => setConsultationReason(e.target.value)}
                        placeholder={t(
                          'Describe the nature of your inquiry, anomalous occurrence, spiritual question, or case details...',
                          'अपनी जिज्ञासा, असाधारण घटना, आध्यात्मिक प्रश्न या मामले का संक्षिप्त विवरण लिखें...'
                        )}
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm leading-relaxed"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-additional"
                        className="block font-mono text-xs uppercase tracking-wider text-ancient-beige/85 mb-2"
                      >
                        {t('Additional Message (Optional)', 'अतिरिक्त संदेश (वैकल्पिक)')}
                      </label>
                      <textarea
                        id="booking-additional"
                        rows={2}
                        maxLength={2000}
                        value={additionalMessage}
                        onChange={(e) => setAdditionalMessage(e.target.value)}
                        placeholder={t(
                          'Any supplementary context, preferred language, or prior reference...',
                          'कोई अतिरिक्त जानकारी या पूर्व संदर्भ...'
                        )}
                        className="w-full px-4 py-3 rounded-lg bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-ancient-beige text-sm leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Part D: Terms & Consent */}
                <div className="p-4 sm:p-5 rounded-lg bg-[#140f0c] border border-bronze-dark/60">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[#d4af37] rounded cursor-pointer shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-ancient-beige/85 leading-relaxed">
                      <strong className="text-gold-warm">
                        {t('I accept the Booking Terms & Conditions:', 'मैं बुकिंग नियम एवं शर्तें स्वीकार करता/करती हूँ:')}
                      </strong>{' '}
                      {t(
                        'I understand that my selected 60-minute slot is held for 10 minutes pending verified UPI payment, that appointments are confirmed strictly upon server-verified payment of the exact fee, and that for in-person consultations the meeting location will be communicated individually after confirmation.',
                        'मैं समझता/समझती हूँ कि चयनित ६०-मिनट का स्लॉट UPI भुगतान हेतु १० मिनट के लिए आरक्षित रहेगा, भुगतान सत्यापित होने पर ही परामर्श की पुष्टि होगी, तथा प्रत्यक्ष परामर्श हेतु भेंट का स्थान पुष्टि के पश्चात् व्यक्तिगत रूप से साझा किया जाएगा।'
                      )}
                    </span>
                  </label>
                </div>

                {/* Error Announcement */}
                {formError && (
                  <div
                    role="alert"
                    className="p-4 rounded-lg bg-red-950/70 border border-red-600/60 text-red-200 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-ancient-beige/65">
                    <ShieldCheck className="w-4 h-4 text-gold-warm shrink-0" />
                    <span>
                      {t(
                        'Dynamic Single-Use Razorpay UPI QR · 10-Minute Slot Lock',
                        'एकल-उपयोग Razorpay UPI QR · १०-मिनट स्लॉट आरक्षण'
                      )}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gold-warm hover:bg-[#e5c247] disabled:opacity-60 text-[#140f0c] font-serif font-bold text-sm sm:text-base tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_10px_28px_rgba(212,175,55,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('Reserving Slot & Generating QR...', 'स्लॉट आरक्षित एवं QR उत्पन्न हो रहा है...')}
                      </>
                    ) : (
                      <>
                        <QrCode className="w-5 h-5" />
                        {t('Proceed to UPI QR Payment', 'UPI QR भुगतान हेतु आगे बढ़ें')} (₹
                        {selectedTypeObj.price.toLocaleString('en-IN')})
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ================================================================ */}
          {/* STEP 3: DYNAMIC UPI QR CODE PAYMENT SCREEN                       */}
          {/* ================================================================ */}
          {step === 'payment' && activeBooking && activePayment && (
            <motion.div
              key="step-payment"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-[#1f1814]/95 border border-gold-warm/50 p-5 sm:p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.95)] max-w-4xl mx-auto"
            >
              {/* Top Reservation Countdown Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-bronze-dark/60">
                <div>
                  <button
                    type="button"
                    onClick={handleCancelPendingAndEdit}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-faded hover:text-gold-warm transition-colors cursor-pointer mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    {t('Change Time Slot / Edit Details', 'समय स्लॉट बदलें / विवरण संपादित करें')}
                  </button>
                  <span className="font-mono text-xs uppercase tracking-widest text-gold-faded block">
                    {t('Booking Reference', 'बुकिंग संदर्भ संख्या')}:{' '}
                    <strong className="text-ancient-beige">{activeBooking.booking_reference}</strong>
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-gold-warm font-semibold mt-1">
                    {t('Complete Your UPI Payment', 'अपना UPI भुगतान पूर्ण करें')}
                  </h3>
                </div>

                <div className="px-4 py-2.5 rounded-lg bg-[#140f0c] border border-gold-faded/40 flex items-center gap-2.5 self-start sm:self-auto">
                  <Clock className="w-4 h-4 text-gold-warm shrink-0" />
                  <span className="font-mono text-xs text-ancient-beige/80">
                    {t('QR Valid For:', 'QR वैधता समय:')}{' '}
                    <strong className="text-gold-warm text-sm tabular-nums">
                      {formatCountdown(remainingSeconds)}
                    </strong>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Column: Booking & Payment Summary */}
                <div className="md:col-span-6 space-y-5">
                  <div className="p-5 rounded-lg bg-[#140f0c] border border-bronze-dark/60 space-y-3.5 text-sm">
                    <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                      <span className="text-ancient-beige/65">
                        {t('Appointment Type', 'परामर्श प्रकार')}
                      </span>
                      <span className="font-serif font-semibold text-gold-warm text-right">
                        {activeBooking.appointment_type === 'phone_consultation'
                          ? t('Private Phone Consultation', 'निजी फ़ोन परामर्श')
                          : t('In-Person Consultation', 'प्रत्यक्ष व्यक्तिगत परामर्श')}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                      <span className="text-ancient-beige/65">
                        {t('Customer Name', 'ग्राहक का नाम')}
                      </span>
                      <span className="font-medium text-ancient-beige text-right">
                        {activeBooking.customer_name}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                      <span className="text-ancient-beige/65">
                        {t('Selected Date', 'चयनित तिथि')}
                      </span>
                      <span className="font-mono text-ancient-beige tabular-nums">
                        {activeBooking.appointment_date}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                      <span className="text-ancient-beige/65">
                        {t('Selected Time (IST)', 'चयनित समय (IST)')}
                      </span>
                      <span className="font-mono text-ancient-beige tabular-nums">
                        {activeBooking.start_time} – {activeBooking.end_time}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                      <span className="text-ancient-beige/65">
                        {t('Appointment Duration', 'परामर्श अवधि')}
                      </span>
                      <span className="font-mono text-ancient-beige tabular-nums">
                        {activeBooking.duration_minutes} {t('Minutes', 'मिनट')}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-gold-faded">
                        {t('Exact Payable Amount', 'कुल देय राशि')}
                      </span>
                      <span className="font-serif text-2xl font-bold text-gold-warm tabular-nums">
                        ₹{activePayment.amount.toLocaleString('en-IN')} INR
                      </span>
                    </div>
                  </div>

                  {/* Waiting Status Indicator */}
                  <div className="p-4 rounded-lg bg-[#140f0c]/90 border border-gold-faded/35 flex items-center gap-3.5">
                    <Loader2 className="w-5 h-5 text-gold-warm animate-spin shrink-0" />
                    <div>
                      <p className="font-serif text-sm sm:text-base font-medium text-gold-warm">
                        Waiting for payment confirmation...
                      </p>
                      <p className="text-xs text-ancient-beige/65 mt-0.5">
                        Payment Status:{' '}
                        <span className="font-mono uppercase text-amber-300">
                          {activeBooking.payment_status}
                        </span>{' '}
                        · Ref: <span className="font-mono">{activePayment.provider_qr_id}</span>
                      </p>
                    </div>
                  </div>

                  {/* Mobile / UPI ID Copy Control */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyPaymentRef}
                      className="px-3.5 py-2 rounded border border-gold-faded/40 hover:border-gold-warm text-xs font-mono text-ancient-beige hover:text-gold-warm transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedUpi ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          {t('Copied UPI ID: ramashokkumar@oksbi', 'UPI ID कॉपी हो गया: ramashokkumar@oksbi')}
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          {t('Copy UPI ID: ramashokkumar@oksbi', 'UPI ID कॉपी करें: ramashokkumar@oksbi')}
                        </>
                      )}
                    </button>

                    {activePayment.qr_upi_string && (
                      <a
                        href={activePayment.qr_upi_string}
                        className="px-3.5 py-2 rounded bg-gold-warm/15 border border-gold-warm/60 text-xs font-mono text-gold-warm hover:bg-gold-warm/25 transition-colors"
                      >
                        {t('Open UPI App', 'UPI ऐप खोलें')}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Dynamic Single-Use QR Code */}
                <div className="md:col-span-6 flex flex-col items-center text-center">
                  <p className="text-sm sm:text-base text-ancient-beige/90 font-medium mb-4 max-w-md">
                    Scan the QR code using your preferred UPI application to complete your
                    appointment payment.
                  </p>

                  <div className="p-4 rounded-xl bg-[#f7f1e5] border-4 border-gold-warm shadow-[0_16px_40px_rgba(0,0,0,0.85)] inline-block">
                    <img
                      src={activePayment.qr_image_data_url}
                      alt={`UPI QR Code for ${activeBooking.booking_reference}`}
                      referrerPolicy="no-referrer"
                      className="w-56 h-56 sm:w-64 sm:h-64 object-contain block"
                    />
                    <div className="mt-2 pt-2 border-t border-[#d5c7ae] flex items-center justify-between gap-3 text-[11px] font-mono text-[#2c221a]">
                      <span className="font-semibold">
                        {activePayment.upi_id || 'ramashokkumar@oksbi'}
                      </span>
                      <span className="font-bold tabular-nums">
                        ₹{activePayment.amount.toLocaleString('en-IN')} INR
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-ancient-beige/75 max-w-md leading-relaxed">
                    Your appointment will be confirmed automatically once your payment has been
                    successfully verified.
                  </p>

                  {/* UPI Payment Confirmation & Verification Box */}
                  {activePayment.gateway_mode === 'razorpay_test_sandbox' && (
                    <div className="mt-6 w-full p-4 rounded-lg bg-[#140f0c] border border-gold-faded/40 text-left space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-gold-warm">
                          {t('UPI Payment Verification', 'UPI भुगतान सत्यापन')}
                        </span>
                        <span className="font-mono text-[10px] text-ancient-beige/60">
                          ramashokkumar@oksbi
                        </span>
                      </div>
                      <p className="text-xs text-ancient-beige/75 leading-relaxed">
                        {t(
                          'After scanning and paying the exact amount via your UPI app, enter your 12-digit UPI UTR / Reference No. (optional in test mode) and click below to confirm your appointment:',
                          'अपने UPI ऐप से भुगतान करने के पश्चात् अपना १२-अंकीय UPI संदर्भ क्रमांक (UTR) दर्ज करें और बुकिंग पुष्ट करने हेतु नीचे क्लिक करें:'
                        )}
                      </p>
                      <input
                        type="text"
                        maxLength={40}
                        value={utrInput}
                        onChange={(e) => setUtrInput(e.target.value)}
                        placeholder={t(
                          'UPI UTR / Transaction Ref No. (e.g. 431819204512)',
                          'UPI UTR / लेनदेन संदर्भ संख्या'
                        )}
                        className="w-full px-3 py-2 rounded bg-[#1f1814] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-xs font-mono text-ancient-beige"
                      />
                      <button
                        type="button"
                        disabled={simulatingWebhook}
                        onClick={handleTriggerSandboxWebhook}
                        className="w-full py-2.5 px-4 rounded bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        {simulatingWebhook ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            {t('Verifying UPI Payment...', 'भुगतान सत्यापित हो रहा है...')}
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            {t('Verify UPI Payment & Confirm Booking', 'UPI भुगतान सत्यापित करें एवं बुकिंग पक्की करें')} (₹
                            {activePayment.amount.toLocaleString('en-IN')})
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ================================================================ */}
          {/* STEP 4: VERIFIED BOOKING CONFIRMATION SCREEN                     */}
          {/* ================================================================ */}
          {step === 'confirmed' && activeBooking && (
            <motion.div
              key="step-confirmed"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl bg-[#1f1814]/95 border-2 border-emerald-500/60 p-6 sm:p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.95)] max-w-3xl mx-auto text-center"
            >
              {/* Prominent Green Tick Animation */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-6 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.35)]"
              >
                <CheckCircle2 className="w-11 h-11" strokeWidth={2.2} />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold-warm font-bold">
                Your appointment has been successfully booked.
              </h3>

              <p className="mt-3 text-sm sm:text-base text-ancient-beige/85 max-w-xl mx-auto leading-relaxed">
                Your payment has been received and your appointment is confirmed. Please keep your
                booking reference number for future communication.
              </p>

              {/* Booking Reference Highlight Box */}
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#140f0c] border border-gold-warm/60">
                <span className="font-mono text-xs uppercase tracking-widest text-ancient-beige/70">
                  {t('Booking Reference:', 'बुकिंग संदर्भ:')}
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-gold-warm tracking-wider">
                  {activeBooking.booking_reference}
                </span>
                <button
                  type="button"
                  onClick={handleCopyBookingRef}
                  className="p-1.5 rounded hover:bg-white/5 text-gold-faded hover:text-gold-warm transition-colors cursor-pointer"
                  title={t('Copy Reference', 'संदर्भ कॉपी करें')}
                >
                  {copiedRef ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Confirmed Appointment Details Table */}
              <div className="mt-8 p-5 sm:p-6 rounded-lg bg-[#140f0c] border border-bronze-dark/60 text-left space-y-3 text-sm max-w-xl mx-auto">
                <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                  <span className="text-ancient-beige/65">
                    {t('Appointment Type', 'परामर्श प्रकार')}
                  </span>
                  <span className="font-serif font-semibold text-gold-warm text-right">
                    {activeBooking.appointment_type === 'phone_consultation'
                      ? 'Private Phone Consultation'
                      : 'In-Person Consultation'}
                  </span>
                </div>

                <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                  <span className="text-ancient-beige/65">
                    {t('Date & Time (IST)', 'तिथि एवं समय (IST)')}
                  </span>
                  <span className="font-mono text-ancient-beige tabular-nums text-right">
                    {activeBooking.appointment_date} · {activeBooking.start_time} –{' '}
                    {activeBooking.end_time}
                  </span>
                </div>

                <div className="flex justify-between gap-4 py-1.5 border-b border-bronze-dark/35">
                  <span className="text-ancient-beige/65">{t('Amount Paid', 'भुगतान की गई राशि')}</span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">
                    ₹{activeBooking.appointment_price.toLocaleString('en-IN')} INR (Verified)
                  </span>
                </div>

                <div className="flex justify-between gap-4 py-1.5">
                  <span className="text-ancient-beige/65">
                    {t('Meeting Method', 'परामर्श माध्यम')}
                  </span>
                  <span className="font-medium text-ancient-beige">
                    {activeBooking.appointment_type === 'phone_consultation'
                      ? 'Phone call'
                      : 'Physical meeting'}
                  </span>
                </div>
              </div>

              {/* Specific Meeting Instructions */}
              <div className="mt-6 p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/40 max-w-xl mx-auto text-sm text-emerald-200 leading-relaxed">
                {activeBooking.appointment_type === 'phone_consultation'
                  ? 'You will receive your consultation call at the scheduled appointment time.'
                  : 'Your meeting location will be confirmed individually before your scheduled appointment.'}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleResetToStart}
                  className="px-8 py-3.5 rounded-lg bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t('Return to Main Website', 'मुख्य वेबसाइट पर लौटें')}
                </button>
              </div>
            </motion.div>
          )}

          {/* ================================================================ */}
          {/* STEP 5: RESERVATION EXPIRED STATE                                */}
          {/* ================================================================ */}
          {step === 'expired' && (
            <motion.div
              key="step-expired"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl bg-[#1f1814]/95 border border-amber-600/50 p-6 sm:p-10 max-w-2xl mx-auto text-center"
            >
              <AlertCircle className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-gold-warm font-semibold">
                {t('Payment Reservation Window Expired', 'भुगतान आरक्षण समय समाप्त हो गया')}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ancient-beige/80 leading-relaxed">
                {t(
                  'The 10-minute reservation for your selected slot has expired without a verified payment, and the time slot has been released. Please select an available slot to generate a new UPI QR code.',
                  'चयनित समय स्लॉट के लिए १०-मिनट की आरक्षण अवधि बिना सत्यापित भुगतान के समाप्त हो गई है और स्लॉट मुक्त कर दिया गया है। नया UPI QR कोड प्राप्त करने के लिए कृपया पुनः स्लॉट चुनें।'
                )}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setStep('form');
                    fetchAvailability(selectedDate);
                  }}
                  className="px-6 py-3 rounded-lg bg-gold-warm text-[#140f0c] font-serif font-bold text-sm uppercase tracking-wider cursor-pointer"
                >
                  {t('Select Another Time Slot', 'अन्य समय स्लॉट चुनें')}
                </button>
                <button
                  type="button"
                  onClick={handleResetToStart}
                  className="px-6 py-3 rounded-lg border border-gold-faded/40 text-ancient-beige text-sm font-mono uppercase tracking-wider cursor-pointer"
                >
                  {t('Back to Consultation Types', 'वापस जाएं')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discrete Administrator Portal Access Link */}
        {onOpenAdminDashboard && (
          <div className="mt-10 pt-6 border-t border-bronze-dark/30 flex justify-end">
            <button
              type="button"
              onClick={onOpenAdminDashboard}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-ancient-beige/45 hover:text-gold-warm transition-colors cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              {t('Administrator Consultation Desk', 'प्रशासक परामर्श पटल')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
