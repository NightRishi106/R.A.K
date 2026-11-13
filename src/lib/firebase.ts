import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDocFromServer,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: boolean | string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

testConnection();

/**
 * Syncs an appointment record to Firestore when an authenticated admin is logged in.
 * Enforces exact schema and volumetric constraints from firebase-blueprint.json.
 */
export async function syncAppointmentToFirestore(appointment: {
  id: string;
  booking_reference: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  appointment_type: 'phone_consultation' | 'in_person_consultation';
  appointment_price: number;
  appointment_date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  consultation_reason: string;
  additional_message: string;
  appointment_status: 'Pending Payment' | 'Confirmed' | 'Completed' | 'Cancelled' | 'Expired';
  payment_status: 'Pending' | 'Paid' | 'Failed' | 'Expired' | 'Refunded';
  payment_reference: string;
  admin_notes: string;
}) {
  if (!auth.currentUser || !auth.currentUser.emailVerified) return;
  const path = `appointments/${appointment.id}`;
  try {
    await setDoc(doc(db, 'appointments', appointment.id), {
      booking_reference: appointment.booking_reference.slice(0, 40),
      customer_name: appointment.customer_name.slice(0, 120),
      customer_email: appointment.customer_email.slice(0, 254),
      customer_phone: appointment.customer_phone.slice(0, 24),
      customer_address: appointment.customer_address.slice(0, 600),
      appointment_type: appointment.appointment_type,
      appointment_price: appointment.appointment_price,
      appointment_date: appointment.appointment_date.slice(0, 10),
      start_time: appointment.start_time.slice(0, 20),
      end_time: appointment.end_time.slice(0, 20),
      timezone: appointment.timezone.slice(0, 64),
      consultation_reason: appointment.consultation_reason.slice(0, 2500),
      additional_message: (appointment.additional_message || '').slice(0, 2000),
      appointment_status: appointment.appointment_status,
      payment_status: appointment.payment_status,
      payment_reference: (appointment.payment_reference || '').slice(0, 128),
      admin_notes: (appointment.admin_notes || '').slice(0, 4000),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Missing or insufficient permissions')) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }
}
