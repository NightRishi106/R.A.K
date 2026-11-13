export interface WhatsAppCardPayload {
  booking_reference: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  appointment_type: 'phone_consultation' | 'in_person_consultation';
  appointment_price: number;
  duration_minutes: number;
  payment_status: string;
  payment_reference: string;
  upi_id?: string;
  consultation_reason: string;
  additional_message?: string;
  confirmed_at?: string;
}

export const RAM_ASHOK_KUMAR_WHATSAPP = '919150990786';

/**
 * Normalizes any Indian or international phone string into digits for wa.me links.
 */
export function normalizeWhatsAppDigits(rawPhone: string): string {
  const digits = String(rawPhone || '').replace(/\D/g, '');
  if (!digits) return RAM_ASHOK_KUMAR_WHATSAPP;
  if (digits.length === 10) {
    return `91${digits}`;
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return `91${digits.slice(1)}`;
  }
  return digits;
}

/**
 * Builds the structured WhatsApp "Payment Done & Full Information Card" text message
 * for either Ram Ashok Kumar or the Customer.
 */
export function buildWhatsAppCardMessage(
  payload: WhatsAppCardPayload,
  recipient: 'admin' | 'customer'
): string {
  const typeLabel =
    payload.appointment_type === 'phone_consultation'
      ? 'Private Phone Consultation (30 Minutes)'
      : 'In-Person Consultation (60 Minutes)';
  const meetingMethod =
    payload.appointment_type === 'phone_consultation' ? 'Phone Call' : 'Physical Meeting';
  const upiId = payload.upi_id || 'ramashokkumar@oksbi';
  const utrRef = payload.payment_reference || 'VERIFIED-UPI';

  const headerLine =
    recipient === 'admin'
      ? `✅ *NEW PAYMENT DONE & CONSULTATION CARD*\n*RAM ASHOK KUMAR — CONSULTATION REGISTRY*`
      : `✅ *PAYMENT DONE & CONSULTATION CONFIRMED*\n*RAM ASHOK KUMAR — OFFICIAL RECEIPT CARD*`;

  const lines = [
    headerLine,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🔖 *Booking Reference:* ${payload.booking_reference}`,
    `💳 *Payment Status:* PAID & VERIFIED ✓`,
    `💰 *Amount Paid:* ₹${payload.appointment_price.toLocaleString('en-IN')} INR`,
    `🏦 *Merchant UPI ID:* ${upiId}`,
    `🧾 *UPI / Payment Ref:* ${utrRef}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `📋 *CONSULTATION DETAILS*`,
    `• *Type:* ${typeLabel}`,
    `• *Duration:* ${payload.duration_minutes} Minutes`,
    `• *Mode:* ${meetingMethod}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *CUSTOMER FULL INFORMATION*`,
    `• *Full Name:* ${payload.customer_name}`,
    `• *Phone / WhatsApp:* ${payload.customer_phone}`,
    `• *Email:* ${payload.customer_email}`,
    `• *Address:* ${payload.customer_address}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `📝 *CONSULTATION PURPOSE / CASE SUMMARY*`,
    `${payload.consultation_reason}`,
  ];

  if (payload.additional_message && payload.additional_message.trim()) {
    lines.push(
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `💬 *ADDITIONAL MESSAGE*\n${payload.additional_message.trim()}`
    );
  }

  lines.push(
    `━━━━━━━━━━━━━━━━━━━━━━`,
    recipient === 'admin'
      ? `📲 *Sent via Ram Ashok Kumar Consultation Portal*`
      : `🙏 *Thank you, ${payload.customer_name}. Your consultation with Ram Ashok Kumar is confirmed.*`
  );

  return lines.join('\n');
}

export function buildRamWhatsAppCardUrl(payload: WhatsAppCardPayload): string {
  const text = buildWhatsAppCardMessage(payload, 'admin');
  return `https://wa.me/${RAM_ASHOK_KUMAR_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function buildCustomerWhatsAppCardUrl(payload: WhatsAppCardPayload): string {
  const phoneDigits = normalizeWhatsAppDigits(payload.customer_phone);
  const text = buildWhatsAppCardMessage(payload, 'customer');
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines = 4
): string[] {
  const words = String(text || '—')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
      if (lines.length >= maxLines - 1) {
        break;
      }
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }
  return lines.length > 0 ? lines : ['—'];
}

/**
 * Generates a high-resolution visual PNG "Payment Done & Consultation Card"
 * suitable for downloading and sharing on WhatsApp.
 */
export function generatePaymentCardDataUrl(payload: WhatsAppCardPayload): string {
  if (typeof document === 'undefined') return '';

  const canvas = document.createElement('canvas');
  const width = 1080;
  const height = 1360;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // 1. Deep Obsidian & Parchment Background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#16100c');
  bgGrad.addColorStop(0.5, '#1d1510');
  bgGrad.addColorStop(1, '#120d0a');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Double Gold Archival Borders
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(52, 52, width - 104, height - 104);

  // 3. Header Section
  ctx.fillStyle = '#bfa36f';
  ctx.font = '600 22px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('OFFICIAL CONSULTATION & PAYMENT RECEIPT CARD', width / 2, 118);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 48px Georgia, serif';
  ctx.fillText('RAM ASHOK KUMAR', width / 2, 178);

  // 4. Verified Payment Badge Pill
  const badgeWidth = 460;
  const badgeHeight = 64;
  const badgeX = (width - badgeWidth) / 2;
  const badgeY = 212;
  ctx.fillStyle = 'rgba(16, 185, 129, 0.16)';
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 32);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 26px monospace';
  ctx.fillText('✓ UPI PAYMENT DONE & VERIFIED', width / 2, badgeY + 41);

  // 5. Amount & Reference Highlight Box
  const boxX = 88;
  const boxWidth = width - 176;
  ctx.fillStyle = '#120d0a';
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(boxX, 310, boxWidth, 175, 16);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'left';
  ctx.fillStyle = '#bfa36f';
  ctx.font = '22px monospace';
  ctx.fillText('BOOKING REFERENCE', boxX + 36, 362);
  ctx.fillStyle = '#f5ebd6';
  ctx.font = 'bold 34px monospace';
  ctx.fillText(payload.booking_reference, boxX + 36, 408);

  ctx.fillStyle = '#bfa36f';
  ctx.font = '20px monospace';
  ctx.fillText(
    `UPI ID: ${payload.upi_id || 'ramashokkumar@oksbi'}   |   REF: ${payload.payment_reference || 'VERIFIED'}`,
    boxX + 36,
    458
  );

  ctx.textAlign = 'right';
  ctx.fillStyle = '#bfa36f';
  ctx.font = '22px monospace';
  ctx.fillText('AMOUNT PAID', boxX + boxWidth - 36, 362);
  ctx.fillStyle = '#34d399';
  ctx.font = 'bold 44px Georgia, serif';
  ctx.fillText(
    `₹${payload.appointment_price.toLocaleString('en-IN')} INR`,
    boxX + boxWidth - 36,
    414
  );

  // 6. Structured Details Rows
  const drawRow = (label: string, value: string, y: number, highlight = false) => {
    ctx.textAlign = 'left';
    ctx.fillStyle = '#bfa36f';
    ctx.font = '24px monospace';
    ctx.fillText(label, boxX + 12, y);

    ctx.textAlign = 'right';
    ctx.fillStyle = highlight ? '#d4af37' : '#f5ebd6';
    ctx.font = highlight ? 'bold 26px Georgia, serif' : '25px Georgia, serif';
    const truncated = value.length > 44 ? `${value.slice(0, 41)}...` : value;
    ctx.fillText(truncated, boxX + boxWidth - 12, y);

    ctx.strokeStyle = 'rgba(191, 163, 111, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(boxX + 12, y + 20);
    ctx.lineTo(boxX + boxWidth - 12, y + 20);
    ctx.stroke();
  };

  const typeLabel =
    payload.appointment_type === 'phone_consultation'
      ? 'Private Phone Consultation'
      : 'In-Person Consultation';
  const modeLabel =
    payload.appointment_type === 'phone_consultation'
      ? 'Phone Call (30 Minutes)'
      : 'Physical Meeting (60 Minutes)';

  let currentY = 550;
  drawRow('APPOINTMENT TYPE', typeLabel, currentY, true);
  currentY += 68;
  drawRow('SESSION DURATION & MODE', modeLabel, currentY);
  currentY += 68;
  drawRow('CUSTOMER FULL NAME', payload.customer_name || '—', currentY, true);
  currentY += 68;
  drawRow('PHONE / WHATSAPP NO.', payload.customer_phone || '—', currentY);
  currentY += 68;
  drawRow('EMAIL ADDRESS', payload.customer_email || '—', currentY);
  currentY += 68;
  drawRow('CUSTOMER ADDRESS', payload.customer_address || '—', currentY);

  // 7. Consultation Reason Box
  currentY += 56;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 23px monospace';
  ctx.fillText('CONSULTATION PURPOSE / CASE SUMMARY:', boxX + 12, currentY);

  ctx.fillStyle = '#120d0a';
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(boxX, currentY + 20, boxWidth, 210, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#e6d7c3';
  ctx.font = '24px Georgia, serif';
  const reasonText = payload.additional_message
    ? `${payload.consultation_reason} — Note: ${payload.additional_message}`
    : payload.consultation_reason;
  const wrappedReason = wrapCanvasText(ctx, reasonText, boxWidth - 56, 4);
  wrappedReason.forEach((line, idx) => {
    ctx.fillText(line, boxX + 28, currentY + 70 + idx * 40);
  });

  // 8. Footer Seal
  ctx.textAlign = 'center';
  ctx.fillStyle = '#bfa36f';
  ctx.font = '20px monospace';
  ctx.fillText(
    'WhatsApp Desk: +91 91509 90786   •   Verified Digital Receipt Card',
    width / 2,
    height - 78
  );

  return canvas.toDataURL('image/png');
}
