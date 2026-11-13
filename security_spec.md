# Security Specification — Ram Ashok Kumar Appointment & Payment System

## 1. Data Invariants

1. **Zero Public PII Access**: Public visitors (`request.auth == null`) and non-admin authenticated users must never read, list, create, update, or delete documents in `/appointments/{appointmentId}`, `/payments/{paymentId}`, `/admin_settings/{settingId}`, `/availability/{slotId}`, or `/admins/{adminUid}` directly via Firestore client SDKs. All public visitor booking and payment status operations flow through the hardened Express backend API (`/api/*`) with token-scoped authorization.
2. **Verified Admin Identity**: Administrative privileges (`isAdmin()`) require `request.auth != null`, `request.auth.token.email_verified == true`, and either a verified bootstrapped administrator email (`eklavyas10@gmail.com` or `ramashokkumar@gmail.com`) or an existing `/admins/$(request.auth.uid)` document.
3. **Price & Payment Integrity**: `appointment_price` must strictly equal `5100` (for `phone_consultation`) or `11000` (for `in_person_consultation`). An administrator cannot mark an appointment's `payment_status` as `'Paid'` without a valid `payment_reference`.
4. **Strict Key & Size Enforcement**: Every entity write (`create` and `update`) is validated by a dedicated `isValid[Entity]()` helper enforcing exact allowed keys (`hasAll` + `hasOnly`), bounded string lengths (`.size()`), regex ID validation (`isValidId()`), immutable `createdAt`, and server timestamp integrity (`request.time`).
5. **Relational Consistency**: Every `/payments/{paymentId}` document must reference an existing `/appointments/$(incoming().appointment_id)` document via `exists()`.

---

## 2. The "Dirty Dozen" Adversarial Payloads

1. **Payload 01 — Unauthenticated PII Scraping (`appointments` list)**
   - Actor: `auth = null`
   - Operation: `list /appointments`
   - Expected: `PERMISSION_DENIED`
2. **Payload 02 — Non-Admin Authenticated PII Read (`appointments` get)**
   - Actor: `auth = { uid: 'visitor_1', token: { email: 'visitor@example.com', email_verified: true } }`
   - Operation: `get /appointments/apt_1001`
   - Expected: `PERMISSION_DENIED`
3. **Payload 03 — Unverified Admin Email Spoof Attack**
   - Actor: `auth = { uid: 'spoof_admin', token: { email: 'eklavyas10@gmail.com', email_verified: false } }`
   - Operation: `get /admin_settings/default`
   - Expected: `PERMISSION_DENIED`
4. **Payload 04 — Self-Assigned Admin Escalation**
   - Actor: `auth = { uid: 'attacker_1', token: { email: 'attacker@example.com', email_verified: true } }`
   - Operation: `create /admins/attacker_1` with `{ uid: 'attacker_1', email: 'attacker@example.com', createdAt: request.time }`
   - Expected: `PERMISSION_DENIED`
5. **Payload 05 — Price Manipulation Attack on Appointment Creation**
   - Actor: Verified Admin
   - Operation: `create /appointments/apt_bad_price` with `appointment_type: 'in_person_consultation'` and `appointment_price: 1` (instead of `11000`)
   - Expected: `PERMISSION_DENIED`
6. **Payload 06 — Shadow Field Injection on Appointment Update**
   - Actor: Verified Admin
   - Operation: `update /appointments/apt_1001` adding unauthorized field `{ isBypassed: true }`
   - Expected: `PERMISSION_DENIED`
7. **Payload 07 — Resource Poisoning (Oversized ID / String Overflow)**
   - Actor: Verified Admin
   - Operation: `create /availability/ slot_with_spaces_and_bad_chars$`
   - Expected: `PERMISSION_DENIED`
8. **Payload 08 — Orphaned Payment Record Creation**
   - Actor: Verified Admin
   - Operation: `create /payments/pay_orphan` referencing non-existent `appointment_id: 'non_existent_apt'`
   - Expected: `PERMISSION_DENIED`
9. **Payload 09 — Immutable `createdAt` Tampering on Update**
   - Actor: Verified Admin
   - Operation: `update /appointments/apt_1001` modifying `createdAt` to a new timestamp
   - Expected: `PERMISSION_DENIED`
10. **Payload 10 — Forged Client Timestamp (`updatedAt != request.time`)**
    - Actor: Verified Admin
    - Operation: `update /admin_settings/default` with a past/future `updatedAt` timestamp
    - Expected: `PERMISSION_DENIED`
11. **Payload 11 — Invalid Currency or Negative Amount in Payment Record**
    - Actor: Verified Admin
    - Operation: `create /payments/pay_bad_curr` with `currency: 'USD'`, `amount: -500`
    - Expected: `PERMISSION_DENIED`
12. **Payload 12 — Value Poisoning on Appointment Status**
    - Actor: Verified Admin
    - Operation: `update /appointments/apt_1001` setting `appointment_status: 'HackedStatus'`
    - Expected: `PERMISSION_DENIED`
