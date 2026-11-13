export const BOOKING_TERMS_VERSION = 'v2026.11.1';

export const MANDATORY_CONSENT_CHECKBOX_LABEL =
  'I have read and understood the Terms and Conditions of booking. I understand that Ram Ashok Kumar will contact me after 3 days and within 1 month of successful payment to coordinate my consultation date and time. I understand that payment does not reserve an immediate appointment.';

export const MANDATORY_CONSENT_VALIDATION_MESSAGE =
  'Please read and accept the Booking Terms & Conditions before proceeding to payment.';

export interface BookingTermClause {
  number: number;
  title: string;
  body: string;
}

export function getBookingTermsClauses(configuredRefundPolicy?: string): BookingTermClause[] {
  const customRefundText = (configuredRefundPolicy || '').trim();
  const refundClauseBody = customRefundText
    ? customRefundText
    : 'Applicable cancellation and refund terms are governed by the official policy configured by the office of Ram Ashok Kumar. Please contact the correspondence desk prior to payment if you require clarification on cancellation terms.';

  return [
    {
      number: 1,
      title: 'Payment Confirmation',
      body: 'Your consultation booking will be considered confirmed once the payment has been successfully received and verified.',
    },
    {
      number: 2,
      title: 'Scheduling Period',
      body: 'After successful payment, Ram Ashok Kumar or his representative will contact you to coordinate your consultation schedule. This contact will take place no earlier than 3 days and no later than 1 month after the payment date.',
    },
    {
      number: 3,
      title: 'No Immediate Appointment',
      body: 'Payment does not mean that an immediate appointment or a specific date and time has been reserved. The actual consultation schedule will be mutually coordinated after payment.',
    },
    {
      number: 4,
      title: 'Phone Consultation',
      body: 'Private phone consultations last 30 minutes. The consultation will be coordinated within the available window of 4:00 PM to 7:00 PM IST.',
    },
    {
      number: 5,
      title: 'In-Person Consultation',
      body: 'Face-to-face consultations are available exclusively in Delhi. Ram Ashok Kumar will personally communicate the mutually agreed meeting date, time and location.',
    },
    {
      number: 6,
      title: 'Customer Availability',
      body: 'Customers are responsible for providing accurate contact information and remaining reachable for scheduling communication.',
    },
    {
      number: 7,
      title: 'Communication',
      body: 'Customers should monitor their registered phone number and email address for scheduling communication and booking updates.',
    },
    {
      number: 8,
      title: 'Scheduling Cooperation',
      body: 'Customers must cooperate in mutually deciding a suitable consultation date and time within the stated scheduling period.',
    },
    {
      number: 9,
      title: 'Payment and Refund Policy',
      body: refundClauseBody,
    },
    {
      number: 10,
      title: 'Acceptance',
      body: 'By checking the consent box, customers acknowledge that they have read and understood these booking terms before making payment.',
    },
  ];
}

export function buildTermsTextSnapshot(configuredRefundPolicy?: string): string {
  const clauses = getBookingTermsClauses(configuredRefundPolicy);
  const numberedLines = clauses.map((c) => `${c.number}. ${c.title}: ${c.body}`).join('\n');
  return [
    `Booking Terms & Conditions (${BOOKING_TERMS_VERSION})`,
    numberedLines,
    `Consent Declaration: "${MANDATORY_CONSENT_CHECKBOX_LABEL}"`,
  ].join('\n\n');
}

export function formatISTTimestamp(date: Date = new Date()): string {
  try {
    const formatted = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date);
    return `${formatted} IST (Asia/Kolkata)`;
  } catch {
    return `${date.toISOString()} (Asia/Kolkata)`;
  }
}
