-- =============================================================================
-- RAM ASHOK KUMAR — APPOINTMENT BOOKING, UPI PAYMENT & CONSULTATION SYSTEM
-- PostgreSQL Schema, Concurrency Locking, & Row-Level Security (RLS) Migration
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. ADMIN SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.admin_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  administrator_email TEXT NOT NULL DEFAULT 'ramashokkumar@gmail.com',
  business_timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  booking_advance_days INTEGER NOT NULL DEFAULT 45 CHECK (booking_advance_days BETWEEN 1 AND 365),
  phone_consultation_price INTEGER NOT NULL DEFAULT 5100 CHECK (phone_consultation_price > 0),
  in_person_consultation_price INTEGER NOT NULL DEFAULT 11000 CHECK (in_person_consultation_price > 0),
  appointment_duration INTEGER NOT NULL DEFAULT 60 CHECK (appointment_duration BETWEEN 15 AND 240),
  operating_start_time TEXT NOT NULL DEFAULT '12:00',
  operating_end_time TEXT NOT NULL DEFAULT '21:00',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO public.admin_settings (
  administrator_email,
  business_timezone,
  booking_advance_days,
  phone_consultation_price,
  in_person_consultation_price,
  appointment_duration,
  operating_start_time,
  operating_end_time
)
SELECT
  'ramashokkumar@gmail.com',
  'Asia/Kolkata',
  45,
  5100,
  11000,
  60,
  '12:00',
  '21:00'
WHERE NOT EXISTS (SELECT 1 FROM public.admin_settings);

-- 2. AVAILABILITY TABLE (Blocked Dates & Blocked Time Slots)
CREATE TABLE IF NOT EXISTS public.availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  start_time TEXT NOT NULL, -- e.g. '12:00 PM' or 'FULL_DAY'
  end_time TEXT NOT NULL,   -- e.g. '1:00 PM' or 'FULL_DAY'
  is_available BOOLEAN NOT NULL DEFAULT FALSE,
  block_reason TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_availability_date_slot UNIQUE (date, start_time)
);

-- 3. APPOINTMENTS TABLE
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_reference TEXT NOT NULL UNIQUE,
  access_token TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  appointment_type TEXT NOT NULL CHECK (appointment_type IN ('phone_consultation', 'in_person_consultation')),
  appointment_price INTEGER NOT NULL CHECK (appointment_price IN (5100, 11000)),
  appointment_date DATE NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  consultation_reason TEXT NOT NULL,
  additional_message TEXT NOT NULL DEFAULT '',
  appointment_status TEXT NOT NULL DEFAULT 'Pending Payment'
    CHECK (appointment_status IN ('Pending Payment', 'Confirmed', 'Completed', 'Cancelled', 'Expired')),
  payment_status TEXT NOT NULL DEFAULT 'Pending'
    CHECK (payment_status IN ('Pending', 'Paid', 'Failed', 'Expired', 'Refunded')),
  payment_reference TEXT NOT NULL DEFAULT '',
  reservation_expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  admin_notes TEXT NOT NULL DEFAULT ''
);

-- Partial unique index preventing simultaneous active bookings on the same date + slot
CREATE UNIQUE INDEX IF NOT EXISTS idx_unique_active_slot_booking
  ON public.appointments (appointment_date, start_time)
  WHERE appointment_status IN ('Pending Payment', 'Confirmed', 'Completed');

-- 4. PAYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID NOT NULL REFERENCES public.appointments(id) ON DELETE RESTRICT,
  provider TEXT NOT NULL DEFAULT 'razorpay',
  provider_payment_id TEXT NOT NULL DEFAULT '',
  provider_qr_id TEXT NOT NULL UNIQUE,
  amount INTEGER NOT NULL CHECK (amount IN (5100, 11000)),
  currency TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),
  payment_method TEXT NOT NULL DEFAULT 'UPI',
  payment_status TEXT NOT NULL DEFAULT 'Pending'
    CHECK (payment_status IN ('Pending', 'Paid', 'Failed', 'Expired', 'Refunded')),
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================================================
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Deny all direct anon/public reads and writes. All public booking/payment operations
-- execute strictly through server-side service_role functions.
CREATE POLICY "Admin read admin_settings"
  ON public.admin_settings FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'));

CREATE POLICY "Admin update admin_settings"
  ON public.admin_settings FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'))
  WITH CHECK (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'));

CREATE POLICY "Admin manage availability"
  ON public.availability FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'))
  WITH CHECK (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'));

CREATE POLICY "Admin view and manage appointments"
  ON public.appointments FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'))
  WITH CHECK (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'));

CREATE POLICY "Admin view payments"
  ON public.payments FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' IN ('eklavyas10@gmail.com', 'ramashokkumar@gmail.com'));
