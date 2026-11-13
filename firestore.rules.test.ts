/**
 * Firestore Security Rules Verification Suite (Dirty Dozen Payloads)
 * Verifies that all 12 adversarial payloads in security_spec.md return PERMISSION_DENIED.
 */

export interface SecurityTestCase {
  id: string;
  description: string;
  actor: { uid: string; email: string; email_verified: boolean } | null;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  payload?: Record<string, unknown>;
  expectedResult: 'PERMISSION_DENIED' | 'ALLOWED';
}

export const DIRTY_DOZEN_TEST_CASES: SecurityTestCase[] = [
  {
    id: 'PAYLOAD_01',
    description: 'Unauthenticated PII scraping on /appointments list',
    actor: null,
    operation: 'list',
    path: '/appointments',
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_02',
    description: 'Non-admin authenticated user reading customer appointment PII',
    actor: { uid: 'visitor_1', email: 'visitor@example.com', email_verified: true },
    operation: 'get',
    path: '/appointments/apt_1001',
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_03',
    description: 'Email spoofing attack with unverified admin email',
    actor: { uid: 'spoof_admin', email: 'eklavyas10@gmail.com', email_verified: false },
    operation: 'get',
    path: '/admin_settings/default',
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_04',
    description: 'Self-assigned admin privilege escalation',
    actor: { uid: 'attacker_1', email: 'attacker@example.com', email_verified: true },
    operation: 'create',
    path: '/admins/attacker_1',
    payload: { uid: 'attacker_1', email: 'attacker@example.com', createdAt: 'SERVER_TIME' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_05',
    description: 'Price manipulation on appointment creation',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'create',
    path: '/appointments/apt_bad_price',
    payload: {
      booking_reference: 'RAK-2026-0001',
      customer_name: 'Test Visitor',
      customer_email: 'test@example.com',
      customer_phone: '+919876543210',
      customer_address: 'Varanasi, UP',
      appointment_type: 'in_person_consultation',
      appointment_price: 1,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_06',
    description: 'Shadow field injection on appointment update',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'update',
    path: '/appointments/apt_1001',
    payload: { isBypassed: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_07',
    description: 'Resource poisoning via invalid document ID characters',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'create',
    path: '/availability/bad id$!',
    payload: {},
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_08',
    description: 'Orphaned payment record creation for non-existent appointment',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'create',
    path: '/payments/pay_orphan',
    payload: {
      appointment_id: 'non_existent_apt',
      provider: 'razorpay',
      provider_payment_id: '',
      provider_qr_id: 'qr_123',
      amount: 5100,
      currency: 'INR',
      payment_method: 'UPI',
      payment_status: 'Pending',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_09',
    description: 'Immutable createdAt field tampering on update',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'update',
    path: '/appointments/apt_1001',
    payload: { createdAt: '2099-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_10',
    description: 'Forged client timestamp on admin_settings update',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'update',
    path: '/admin_settings/default',
    payload: { updatedAt: '2000-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_11',
    description: 'Invalid currency and negative amount in payment record',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'create',
    path: '/payments/pay_bad_curr',
    payload: { currency: 'USD', amount: -500 },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'PAYLOAD_12',
    description: 'Value poisoning on appointment_status enum',
    actor: { uid: 'admin_1', email: 'eklavyas10@gmail.com', email_verified: true },
    operation: 'update',
    path: '/appointments/apt_1001',
    payload: { appointment_status: 'HackedStatus' },
    expectedResult: 'PERMISSION_DENIED',
  },
];
