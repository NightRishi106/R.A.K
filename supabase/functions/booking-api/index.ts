/**
 * Supabase Edge Function Reference — Appointment Booking & Razorpay UPI Webhook Handler
 * Mirrors the active Express backend routes in /server.ts (`create-booking`, `create-payment`,
 * `payment-webhook`, `booking-status`, `expire-pending-bookings`, `admin-management`).
 */

export const EDGE_FUNCTION_ENDPOINTS = [
  'create-booking',
  'create-payment',
  'payment-webhook',
  'booking-status',
  'expire-pending-bookings',
  'admin-management',
] as const;
