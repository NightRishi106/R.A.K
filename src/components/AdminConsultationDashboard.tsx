import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  Shield,
  LogOut,
  Search,
  RefreshCw,
  CheckCircle2,
  XCircle,
  CalendarOff,
  Settings,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock,
  IndianRupee,
  AlertTriangle,
  Lock,
  Trash2,
  Plus,
  Save,
  Eye,
} from 'lucide-react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, googleAuthProvider, syncAppointmentToFirestore } from '../lib/firebase';

interface BookingHistoryEvent {
  timestamp: string;
  action: string;
  actor: string;
  details: string;
}

interface AdminAppointmentRecord {
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
  reservation_expires_at: string;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  cancelled_at: string | null;
  admin_notes: string;
  history: BookingHistoryEvent[];
}

interface AdminPaymentRecord {
  id: string;
  appointment_id: string;
  booking_reference: string;
  provider: string;
  provider_payment_id: string;
  provider_qr_id: string;
  gateway_mode: string;
  amount: number;
  currency: string;
  payment_method: string;
  payment_status: string;
  paid_at: string | null;
  created_at: string;
}

interface AvailabilityBlockRecord {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
  block_reason: string;
  created_at: string;
}

interface AdminSettingsRecord {
  administrator_email: string;
  business_timezone: string;
  booking_advance_days: number;
  phone_consultation_price: number;
  in_person_consultation_price: number;
  appointment_duration: number;
  operating_start_time: string;
  operating_end_time: string;
  email_notifications_enabled: boolean;
  reminders_enabled: boolean;
}

interface EmailLogItem {
  id: string;
  booking_reference: string;
  recipient: string;
  type: string;
  subject: string;
  status: string;
  created_at: string;
  error?: string;
}

interface DashboardPayload {
  today_ist: string;
  summary: {
    total_bookings: number;
    confirmed_appointments: number;
    pending_payments: number;
    completed_appointments: number;
    total_revenue: number;
    upcoming_appointments: number;
  };
  appointments: AdminAppointmentRecord[];
  payments: AdminPaymentRecord[];
  availability: AvailabilityBlockRecord[];
  admin_settings: AdminSettingsRecord;
  email_logs: EmailLogItem[];
  integration_status: {
    razorpay_api_configured: boolean;
    razorpay_webhook_secret_configured: boolean;
    email_provider_configured: boolean;
    email_provider_name: string;
    webhook_url: string;
  };
}

type FilterType =
  | 'all'
  | 'today'
  | 'upcoming'
  | 'pending_payment'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'expired';

const SLOT_OPTIONS = [
  'FULL_DAY',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
];

interface AdminConsultationDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminConsultationDashboard({
  isOpen,
  onClose,
}: AdminConsultationDashboardProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const [dashboard, setDashboard] = useState<DashboardPayload | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<
    'appointments' | 'availability' | 'payments' | 'settings'
  >('appointments');
  const [statusFilter, setStatusFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Appointment for Details Drawer
  const [selectedAppointment, setSelectedAppointment] = useState<AdminAppointmentRecord | null>(
    null
  );
  const [notesDraft, setNotesDraft] = useState('');
  const [actionNoteDraft, setActionNoteDraft] = useState('');
  const [actionBusy, setActionBusy] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  // Availability Block Form
  const [blockDate, setBlockDate] = useState('');
  const [blockSlot, setBlockSlot] = useState('FULL_DAY');
  const [blockReason, setBlockReason] = useState('');
  const [blockBusy, setBlockBusy] = useState(false);

  // Settings Form
  const [settingsForm, setSettingsForm] = useState<AdminSettingsRecord | null>(null);
  const [settingsBusy, setSettingsBusy] = useState(false);
  const [settingsSavedMsg, setSettingsSavedMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });
    return () => unsub();
  }, []);

  const fetchDashboard = useCallback(async () => {
    if (!currentUser) return;
    setLoadingData(true);
    setApiError(null);
    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch('/api/admin/dashboard', {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setApiError(data.error || 'Unauthorized or failed to load dashboard.');
        setDashboard(null);
      } else {
        setDashboard(data);
        if (data.admin_settings && !settingsForm) {
          setSettingsForm(data.admin_settings);
        }
        if (data.today_ist && !blockDate) {
          setBlockDate(data.today_ist);
        }
        // Keep selectedAppointment updated if open
        if (selectedAppointment) {
          const refreshed = (data.appointments || []).find(
            (a: AdminAppointmentRecord) => a.id === selectedAppointment.id
          );
          if (refreshed) {
            setSelectedAppointment(refreshed);
          }
        }
      }
    } catch {
      setApiError('Network error while communicating with administrator API.');
    } finally {
      setLoadingData(false);
    }
  }, [currentUser, selectedAppointment, settingsForm, blockDate]);

  useEffect(() => {
    if (isOpen && currentUser) {
      fetchDashboard();
    }
  }, [isOpen, currentUser, fetchDashboard]);

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Google Sign-In failed.');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setDashboard(null);
    setSelectedAppointment(null);
  };

  const handleOpenAppointmentDetails = (apt: AdminAppointmentRecord) => {
    setSelectedAppointment(apt);
    setNotesDraft(apt.admin_notes || '');
    setActionNoteDraft('');
    setActionFeedback(null);
  };

  const handleUpdateStatus = async (targetStatus: 'Completed' | 'Cancelled') => {
    if (!currentUser || !selectedAppointment || actionBusy) return;
    setActionBusy(true);
    setActionFeedback(null);
    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch(`/api/admin/appointments/${selectedAppointment.id}/status`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointment_status: targetStatus,
          note: actionNoteDraft.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setActionFeedback(data.error || 'Failed to update status.');
      } else {
        setSelectedAppointment(data.appointment);
        setActionNoteDraft('');
        setActionFeedback(`Appointment status updated to ${targetStatus}.`);
        syncAppointmentToFirestore(data.appointment).catch(() => {});
        fetchDashboard();
      }
    } catch {
      setActionFeedback('Network error while updating appointment status.');
    } finally {
      setActionBusy(false);
    }
  };

  const handleSaveAdminNotes = async () => {
    if (!currentUser || !selectedAppointment || actionBusy) return;
    setActionBusy(true);
    setActionFeedback(null);
    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch(`/api/admin/appointments/${selectedAppointment.id}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          admin_notes: notesDraft,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setActionFeedback(data.error || 'Failed to save notes.');
      } else {
        setSelectedAppointment(data.appointment);
        setActionFeedback('Administrative notes saved.');
        syncAppointmentToFirestore(data.appointment).catch(() => {});
        fetchDashboard();
      }
    } catch {
      setActionFeedback('Network error while saving notes.');
    } finally {
      setActionBusy(false);
    }
  };

  const handleCreateBlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !blockDate || blockBusy) return;
    setBlockBusy(true);
    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch('/api/admin/availability/block', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: blockDate,
          start_time: blockSlot,
          block_reason: blockReason.trim() || 'Blocked by Administrator',
        }),
      });
      if (res.ok) {
        setBlockReason('');
        fetchDashboard();
      }
    } finally {
      setBlockBusy(false);
    }
  };

  const handleRemoveBlock = async (blockId: string) => {
    if (!currentUser) return;
    const idToken = await currentUser.getIdToken();
    await fetch(`/api/admin/availability/${blockId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    fetchDashboard();
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !settingsForm || settingsBusy) return;
    setSettingsBusy(true);
    setSettingsSavedMsg(null);
    try {
      const idToken = await currentUser.getIdToken();
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${idToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingsForm),
      });
      const data = await res.json();
      if (res.ok && data.admin_settings) {
        setSettingsForm(data.admin_settings);
        setSettingsSavedMsg('Settings updated.');
        fetchDashboard();
      } else {
        setSettingsSavedMsg(data.error || 'Failed to update settings.');
      }
    } finally {
      setSettingsBusy(false);
    }
  };

  if (!isOpen) return null;

  const filteredAppointments = (dashboard?.appointments || []).filter((apt) => {
    // 1. Status / Date filter
    const todayIst = dashboard?.today_ist || '';
    if (statusFilter === 'today' && apt.appointment_date !== todayIst) return false;
    if (
      statusFilter === 'upcoming' &&
      !(apt.appointment_status === 'Confirmed' && apt.appointment_date >= todayIst)
    ) {
      return false;
    }
    if (statusFilter === 'pending_payment' && apt.appointment_status !== 'Pending Payment')
      return false;
    if (statusFilter === 'confirmed' && apt.appointment_status !== 'Confirmed') return false;
    if (statusFilter === 'completed' && apt.appointment_status !== 'Completed') return false;
    if (statusFilter === 'cancelled' && apt.appointment_status !== 'Cancelled') return false;
    if (statusFilter === 'expired' && apt.appointment_status !== 'Expired') return false;

    // 2. Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchName = apt.customer_name.toLowerCase().includes(q);
      const matchPhone = apt.customer_phone.toLowerCase().includes(q);
      const matchEmail = apt.customer_email.toLowerCase().includes(q);
      const matchRef = apt.booking_reference.toLowerCase().includes(q);
      if (!matchName && !matchPhone && !matchEmail && !matchRef) return false;
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-[200] bg-[#0b0806]/95 backdrop-blur-md overflow-y-auto text-ancient-beige font-sans">
      <div className="min-h-screen max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
        {/* Top Bar Contract: Brand Wordmark — Contextual Nav Tabs — Primary Action */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-bronze-dark/60">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gold-warm shrink-0" />
            <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-gold-warm uppercase whitespace-nowrap">
              Ram Ashok Kumar · Consultation Admin
            </span>
          </div>

          {currentUser && dashboard && (
            <nav className="flex items-center gap-2 sm:gap-4">
              {(
                [
                  { id: 'appointments', label: 'Appointments' },
                  { id: 'availability', label: 'Blocked Dates & Slots' },
                  { id: 'payments', label: 'Payments & Logs' },
                  { id: 'settings', label: 'Settings & Setup' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gold-warm text-[#140f0c] font-bold'
                      : 'text-ancient-beige/75 hover:text-gold-warm'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {currentUser && (
              <button
                type="button"
                onClick={handleSignOut}
                className="px-3 py-1.5 rounded border border-bronze-dark/70 hover:border-gold-faded text-xs font-mono text-ancient-beige/80 hover:text-gold-warm inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded bg-[#1f1814] border border-gold-faded/40 hover:border-gold-warm text-xs font-mono text-gold-warm inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <X className="w-4 h-4" />
              Exit to Website
            </button>
          </div>
        </header>

        {/* Authentication Gate */}
        {authLoading ? (
          <div className="flex-1 flex items-center justify-center py-20">
            <RefreshCw className="w-6 h-6 text-gold-warm animate-spin" />
          </div>
        ) : !currentUser ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <div className="max-w-md w-full rounded-xl bg-[#18120e] border border-gold-faded/40 p-8 text-center shadow-2xl">
              <Lock className="w-10 h-10 text-gold-warm mx-auto mb-4" />
              <h2 className="text-2xl font-serif text-gold-warm font-semibold">
                Administrator Sign-In Required
              </h2>
              <p className="mt-2 text-sm text-ancient-beige/75 leading-relaxed">
                This dashboard is restricted to the authorized administrator of Ram Ashok Kumar
                Consultations. Sign in with your verified Google account to continue.
              </p>
              {authError && (
                <div className="mt-4 p-3 rounded bg-red-950/70 border border-red-500/50 text-xs text-red-200">
                  {authError}
                </div>
              )}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="mt-6 w-full py-3.5 px-6 rounded-lg bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-sm uppercase tracking-wider cursor-pointer transition-all"
              >
                Sign In with Google
              </button>
            </div>
          </div>
        ) : apiError ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <div className="max-w-lg w-full rounded-xl bg-[#18120e] border border-red-500/50 p-8 text-center">
              <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gold-warm font-semibold">
                Administrator Access Restricted
              </h3>
              <p className="mt-2 text-sm text-red-200">{apiError}</p>
              <p className="mt-2 text-xs text-ancient-beige/60 font-mono">
                Signed in as: {currentUser.email}
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="px-5 py-2.5 rounded bg-gold-warm text-[#140f0c] font-mono text-xs font-bold uppercase cursor-pointer"
                >
                  Switch Account
                </button>
              </div>
            </div>
          </div>
        ) : !dashboard ? (
          <div className="flex-1 flex items-center justify-center py-20">
            <RefreshCw className="w-6 h-6 text-gold-warm animate-spin" />
          </div>
        ) : (
          <div className="space-y-8 pb-16">
            {/* 6 Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-lg bg-[#18120e] border border-bronze-dark/60">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ancient-beige/60">
                  Total Bookings
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-ancient-beige tabular-nums">
                  {dashboard.summary.total_bookings}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#18120e] border border-emerald-600/40">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-emerald-300/80">
                  Confirmed
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-emerald-400 tabular-nums">
                  {dashboard.summary.confirmed_appointments}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#18120e] border border-amber-600/40">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-amber-300/80">
                  Pending Payment
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-amber-400 tabular-nums">
                  {dashboard.summary.pending_payments}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#18120e] border border-bronze-dark/60">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ancient-beige/60">
                  Completed
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-gold-warm tabular-nums">
                  {dashboard.summary.completed_appointments}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#18120e] border border-gold-faded/50">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-gold-faded">
                  Total Revenue
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-gold-warm tabular-nums">
                  ₹{dashboard.summary.total_revenue.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-[#18120e] border border-bronze-dark/60">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-ancient-beige/60">
                  Upcoming
                </span>
                <span className="mt-1 block font-serif text-2xl font-bold text-ancient-beige tabular-nums">
                  {dashboard.summary.upcoming_appointments}
                </span>
              </div>
            </div>

            {/* ============================================================ */}
            {/* TAB 1: APPOINTMENTS MANAGEMENT                               */}
            {/* ============================================================ */}
            {activeTab === 'appointments' && (
              <div className="space-y-5">
                {/* Filter Bar & Search Input */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#18120e] p-4 rounded-lg border border-bronze-dark/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {(
                      [
                        { id: 'all', label: 'All' },
                        { id: 'today', label: 'Today' },
                        { id: 'upcoming', label: 'Upcoming' },
                        { id: 'pending_payment', label: 'Pending Payment' },
                        { id: 'confirmed', label: 'Confirmed' },
                        { id: 'completed', label: 'Completed' },
                        { id: 'cancelled', label: 'Cancelled' },
                        { id: 'expired', label: 'Expired' },
                      ] as const
                    ).map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setStatusFilter(f.id)}
                        className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                          statusFilter === f.id
                            ? 'bg-gold-warm text-[#140f0c] font-bold'
                            : 'bg-[#120d0a] text-ancient-beige/75 hover:text-gold-warm border border-bronze-dark/40'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:w-72">
                      <Search className="w-4 h-4 text-ancient-beige/45 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search name, phone, email, ID..."
                        className="w-full pl-9 pr-3 py-1.5 rounded bg-[#120d0a] border border-bronze-dark/70 focus:border-gold-warm focus:outline-none text-xs text-ancient-beige"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={fetchDashboard}
                      className="p-2 rounded bg-[#120d0a] border border-bronze-dark/70 hover:border-gold-warm text-gold-warm cursor-pointer"
                      title="Refresh Appointments"
                    >
                      <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Appointments Table */}
                <div className="rounded-lg bg-[#18120e] border border-bronze-dark/60 overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-bronze-dark/60 font-mono text-[11px] uppercase tracking-wider text-gold-faded bg-[#120d0a]">
                        <th className="py-3 px-4">Booking ID</th>
                        <th className="py-3 px-4">Customer</th>
                        <th className="py-3 px-4">Type</th>
                        <th className="py-3 px-4">Date & Time (IST)</th>
                        <th className="py-3 px-4">Contact</th>
                        <th className="py-3 px-4 text-right">Amount</th>
                        <th className="py-3 px-4">Payment</th>
                        <th className="py-3 px-4">Appointment Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-bronze-dark/35">
                      {filteredAppointments.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="py-12 text-center text-ancient-beige/55">
                            No appointments match the selected filter.
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((apt) => (
                          <tr
                            key={apt.id}
                            onClick={() => handleOpenAppointmentDetails(apt)}
                            className="hover:bg-[#221a14] transition-colors cursor-pointer"
                          >
                            <td className="py-3 px-4 font-mono font-semibold text-gold-warm whitespace-nowrap">
                              {apt.booking_reference}
                            </td>
                            <td className="py-3 px-4 font-medium text-ancient-beige">
                              {apt.customer_name}
                            </td>
                            <td className="py-3 px-4 text-ancient-beige/85 whitespace-nowrap">
                              {apt.appointment_type === 'phone_consultation'
                                ? 'Phone Call'
                                : 'In-Person'}
                            </td>
                            <td className="py-3 px-4 font-mono tabular-nums text-ancient-beige/90 whitespace-nowrap">
                              {apt.appointment_date} · {apt.start_time}
                            </td>
                            <td className="py-3 px-4 font-mono text-xs text-ancient-beige/75">
                              <div>{apt.customer_phone}</div>
                              <div className="text-ancient-beige/50 truncate max-w-[160px]">
                                {apt.customer_email}
                              </div>
                            </td>
                            <td className="py-3 px-4 font-mono font-semibold text-right tabular-nums whitespace-nowrap">
                              ₹{apt.appointment_price.toLocaleString('en-IN')}
                            </td>
                            <td className="py-3 px-4 font-mono text-xs whitespace-nowrap">
                              <span
                                className={
                                  apt.payment_status === 'Paid'
                                    ? 'text-emerald-400 font-semibold'
                                    : apt.payment_status === 'Pending'
                                      ? 'text-amber-300'
                                      : 'text-ancient-beige/50'
                                }
                              >
                                {apt.payment_status}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs whitespace-nowrap">
                              <span
                                className={
                                  apt.appointment_status === 'Confirmed'
                                    ? 'text-emerald-400 font-semibold'
                                    : apt.appointment_status === 'Completed'
                                      ? 'text-gold-warm font-semibold'
                                      : apt.appointment_status === 'Pending Payment'
                                        ? 'text-amber-300'
                                        : apt.appointment_status === 'Cancelled'
                                          ? 'text-red-400'
                                          : 'text-ancient-beige/45'
                                }
                              >
                                {apt.appointment_status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right whitespace-nowrap">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenAppointmentDetails(apt);
                                }}
                                className="px-2.5 py-1 rounded border border-gold-faded/40 hover:border-gold-warm text-xs font-mono text-gold-warm inline-flex items-center gap-1 cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 2: BLOCKED DATES & TIME SLOTS                            */}
            {/* ============================================================ */}
            {activeTab === 'availability' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <form
                  onSubmit={handleCreateBlock}
                  className="lg:col-span-5 rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6 space-y-4"
                >
                  <h3 className="text-lg font-serif text-gold-warm font-semibold flex items-center gap-2">
                    <CalendarOff className="w-5 h-5" />
                    Block Unavailable Date or Slot
                  </h3>
                  <p className="text-xs text-ancient-beige/70 leading-relaxed">
                    Prevent visitors from booking a specific 60-minute slot or block an entire date.
                  </p>

                  <div>
                    <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                      Date (YYYY-MM-DD)
                    </label>
                    <input
                      type="date"
                      required
                      min={dashboard.today_ist}
                      value={blockDate}
                      onChange={(e) => setBlockDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm font-mono text-ancient-beige tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                      Scope (Full Date or Specific Time Slot)
                    </label>
                    <select
                      value={blockSlot}
                      onChange={(e) => setBlockSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm font-mono text-ancient-beige"
                    >
                      {SLOT_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s === 'FULL_DAY' ? 'Entire Date (All 9 Slots)' : `${s} (60-Min Slot)`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                      Block Reason
                    </label>
                    <input
                      type="text"
                      value={blockReason}
                      onChange={(e) => setBlockReason(e.target.value)}
                      placeholder="e.g., Field Investigation in Varanasi"
                      className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm text-ancient-beige"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={blockBusy}
                    className="w-full py-3 rounded bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    {blockBusy ? 'Saving Block...' : 'Block Selected Availability'}
                  </button>
                </form>

                <div className="lg:col-span-7 rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6">
                  <h3 className="text-lg font-serif text-gold-warm font-semibold mb-4">
                    Active Blocked Dates & Slots ({dashboard.availability.length})
                  </h3>

                  {dashboard.availability.length === 0 ? (
                    <p className="text-sm text-ancient-beige/60 py-8 text-center">
                      No dates or time slots are currently blocked. All standard slots (12:00 PM –
                      9:00 PM IST) are open.
                    </p>
                  ) : (
                    <div className="divide-y divide-bronze-dark/40">
                      {dashboard.availability.map((item) => (
                        <div
                          key={item.id}
                          className="py-3 flex items-center justify-between gap-4 text-sm"
                        >
                          <div>
                            <span className="font-mono font-bold text-gold-warm tabular-nums">
                              {item.date}
                            </span>
                            <span className="mx-2 text-ancient-beige/40">·</span>
                            <span className="font-mono text-xs text-amber-300">
                              {item.start_time === 'FULL_DAY'
                                ? 'FULL DAY BLOCKED'
                                : `${item.start_time} – ${item.end_time}`}
                            </span>
                            {item.block_reason && (
                              <p className="text-xs text-ancient-beige/65 mt-0.5">
                                {item.block_reason}
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveBlock(item.id)}
                            className="px-3 py-1.5 rounded border border-red-500/40 hover:bg-red-950/50 text-xs font-mono text-red-300 inline-flex items-center gap-1 cursor-pointer shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Unblock
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 3: PAYMENTS LEDGER & EMAIL LOGS                          */}
            {/* ============================================================ */}
            {activeTab === 'payments' && (
              <div className="space-y-8">
                <div className="rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6">
                  <h3 className="text-lg font-serif text-gold-warm font-semibold mb-4">
                    UPI QR Payment Records ({dashboard.payments.length})
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-bronze-dark/60 font-mono text-[11px] uppercase text-gold-faded">
                          <th className="py-2.5 px-3">Booking Ref</th>
                          <th className="py-2.5 px-3">QR / Order ID</th>
                          <th className="py-2.5 px-3">Razorpay Payment ID</th>
                          <th className="py-2.5 px-3 text-right">Amount</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3">Paid At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-bronze-dark/30 font-mono text-xs">
                        {dashboard.payments.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="py-8 text-center text-ancient-beige/55">
                              No payment sessions generated yet.
                            </td>
                          </tr>
                        ) : (
                          dashboard.payments.map((p) => (
                            <tr key={p.id}>
                              <td className="py-2.5 px-3 text-gold-warm font-semibold">
                                {p.booking_reference}
                              </td>
                              <td className="py-2.5 px-3 text-ancient-beige/80">
                                {p.provider_qr_id}
                              </td>
                              <td className="py-2.5 px-3 text-ancient-beige/80">
                                {p.provider_payment_id || '—'}
                              </td>
                              <td className="py-2.5 px-3 text-right tabular-nums">
                                ₹{p.amount.toLocaleString('en-IN')} {p.currency}
                              </td>
                              <td className="py-2.5 px-3">
                                <span
                                  className={
                                    p.payment_status === 'Paid'
                                      ? 'text-emerald-400 font-bold'
                                      : 'text-amber-300'
                                  }
                                >
                                  {p.payment_status}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-ancient-beige/65 tabular-nums">
                                {p.paid_at ? new Date(p.paid_at).toLocaleString() : '—'}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6">
                  <h3 className="text-lg font-serif text-gold-warm font-semibold mb-4">
                    Transactional Email Notification Logs ({dashboard.email_logs.length})
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-bronze-dark/60 font-mono text-[11px] uppercase text-gold-faded">
                          <th className="py-2.5 px-3">Timestamp</th>
                          <th className="py-2.5 px-3">Booking Ref</th>
                          <th className="py-2.5 px-3">Type</th>
                          <th className="py-2.5 px-3">Recipient</th>
                          <th className="py-2.5 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-bronze-dark/30 font-mono">
                        {dashboard.email_logs.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-ancient-beige/55">
                              No email notifications triggered yet.
                            </td>
                          </tr>
                        ) : (
                          dashboard.email_logs.map((log) => (
                            <tr key={log.id}>
                              <td className="py-2.5 px-3 text-ancient-beige/65 tabular-nums">
                                {new Date(log.created_at).toLocaleString()}
                              </td>
                              <td className="py-2.5 px-3 text-gold-warm">
                                {log.booking_reference}
                              </td>
                              <td className="py-2.5 px-3 text-ancient-beige/80">{log.type}</td>
                              <td className="py-2.5 px-3 text-ancient-beige/80">{log.recipient}</td>
                              <td className="py-2.5 px-3">
                                <span
                                  className={
                                    log.status === 'sent'
                                      ? 'text-emerald-400'
                                      : log.status === 'logged_unconfigured'
                                        ? 'text-amber-300'
                                        : 'text-red-400'
                                  }
                                >
                                  {log.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* TAB 4: ADMIN SETTINGS & INTEGRATION CHECKLIST                */}
            {/* ============================================================ */}
            {activeTab === 'settings' && settingsForm && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <form
                  onSubmit={handleSaveSettings}
                  className="lg:col-span-7 rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6 space-y-5"
                >
                  <h3 className="text-lg font-serif text-gold-warm font-semibold flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Consultation Pricing & Scheduling Configuration
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                        Administrator Notification Email
                      </label>
                      <input
                        type="email"
                        required
                        value={settingsForm.administrator_email}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            administrator_email: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm text-ancient-beige"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                        Advance Booking Limit (Days)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={365}
                        required
                        value={settingsForm.booking_advance_days}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            booking_advance_days: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm font-mono text-ancient-beige tabular-nums"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                        Phone Consultation Price (INR)
                      </label>
                      <input
                        type="number"
                        min={100}
                        required
                        value={settingsForm.phone_consultation_price}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            phone_consultation_price: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm font-mono text-ancient-beige tabular-nums"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase text-ancient-beige/80 mb-1.5">
                        In-Person Consultation Price (INR)
                      </label>
                      <input
                        type="number"
                        min={100}
                        required
                        value={settingsForm.in_person_consultation_price}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            in_person_consultation_price: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded bg-[#120d0a] border border-bronze-dark/70 text-sm font-mono text-ancient-beige tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs text-ancient-beige cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.email_notifications_enabled}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            email_notifications_enabled: e.target.checked,
                          })
                        }
                        className="accent-[#d4af37]"
                      />
                      Enable Automatic Confirmation & Admin Emails
                    </label>

                    <label className="flex items-center gap-2 text-xs text-ancient-beige cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.reminders_enabled}
                        onChange={(e) =>
                          setSettingsForm({
                            ...settingsForm,
                            reminders_enabled: e.target.checked,
                          })
                        }
                        className="accent-[#d4af37]"
                      />
                      Enable 24h & 1h Appointment Reminders
                    </label>
                  </div>

                  {settingsSavedMsg && (
                    <p className="text-xs font-mono text-emerald-400">{settingsSavedMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={settingsBusy}
                    className="px-6 py-3 rounded bg-gold-warm hover:bg-[#e5c247] text-[#140f0c] font-serif font-bold text-xs uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {settingsBusy ? 'Saving...' : 'Save Configuration'}
                  </button>
                </form>

                {/* External Integration & Webhook Setup Status */}
                <div className="lg:col-span-5 rounded-lg bg-[#18120e] border border-bronze-dark/60 p-6 space-y-4">
                  <h3 className="text-lg font-serif text-gold-warm font-semibold">
                    Payment & Email Integration Checklist
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50 flex items-center justify-between">
                      <span>Razorpay API Keys (`RAZORPAY_KEY_ID` / `SECRET`)</span>
                      <span
                        className={`font-mono font-bold ${
                          dashboard.integration_status.razorpay_api_configured
                            ? 'text-emerald-400'
                            : 'text-amber-300'
                        }`}
                      >
                        {dashboard.integration_status.razorpay_api_configured
                          ? 'CONFIGURED'
                          : 'SANDBOX MODE'}
                      </span>
                    </div>

                    <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50 flex items-center justify-between">
                      <span>Razorpay Webhook Secret (`RAZORPAY_WEBHOOK_SECRET`)</span>
                      <span
                        className={`font-mono font-bold ${
                          dashboard.integration_status.razorpay_webhook_secret_configured
                            ? 'text-emerald-400'
                            : 'text-amber-300'
                        }`}
                      >
                        {dashboard.integration_status.razorpay_webhook_secret_configured
                          ? 'CONFIGURED'
                          : 'PENDING SECRET'}
                      </span>
                    </div>

                    <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50">
                      <span className="block text-ancient-beige/65 mb-1">
                        Transactional Email Provider:
                      </span>
                      <span className="font-mono text-gold-warm">
                        {dashboard.integration_status.email_provider_name}
                      </span>
                    </div>

                    <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50">
                      <span className="block text-ancient-beige/65 mb-1">
                        Razorpay Webhook Endpoint URL:
                      </span>
                      <code className="block font-mono text-[11px] text-gold-warm break-all">
                        {window.location.origin}/api/webhooks/razorpay
                      </code>
                      <span className="block text-[11px] text-ancient-beige/55 mt-1">
                        Subscribe to events: <code>qr_code.credited</code>,{' '}
                        <code>payment.captured</code>, <code>order.paid</code>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ================================================================== */}
      {/* APPOINTMENT DETAILS DRAWER / MODAL                                 */}
      {/* ================================================================== */}
      {selectedAppointment && (
        <div
          onClick={() => setSelectedAppointment(null)}
          className="fixed inset-0 z-[220] bg-black/80 backdrop-blur-sm flex items-center justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-full bg-[#16110d] border-l border-gold-faded/40 p-6 sm:p-8 overflow-y-auto space-y-6"
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-bronze-dark/60">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-gold-faded">
                  Booking Record · {selectedAppointment.booking_reference}
                </span>
                <h3 className="text-2xl font-serif text-gold-warm font-bold mt-1">
                  {selectedAppointment.customer_name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="p-2 rounded border border-bronze-dark/60 text-ancient-beige hover:text-gold-warm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50">
                <span className="block font-mono text-[10px] uppercase text-ancient-beige/55">
                  Appointment Status
                </span>
                <span className="font-mono text-sm font-bold text-gold-warm">
                  {selectedAppointment.appointment_status}
                </span>
              </div>
              <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50">
                <span className="block font-mono text-[10px] uppercase text-ancient-beige/55">
                  Payment Status
                </span>
                <span
                  className={`font-mono text-sm font-bold ${
                    selectedAppointment.payment_status === 'Paid'
                      ? 'text-emerald-400'
                      : 'text-amber-300'
                  }`}
                >
                  {selectedAppointment.payment_status}
                </span>
              </div>
              <div className="p-3 rounded bg-[#120d0a] border border-bronze-dark/50">
                <span className="block font-mono text-[10px] uppercase text-ancient-beige/55">
                  Amount
                </span>
                <span className="font-mono text-sm font-bold text-ancient-beige tabular-nums">
                  ₹{selectedAppointment.appointment_price.toLocaleString('en-IN')} INR
                </span>
              </div>
            </div>

            {/* Customer & Schedule Details */}
            <div className="p-4 rounded-lg bg-[#120d0a] border border-bronze-dark/50 space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-warm shrink-0" />
                <span className="font-mono">{selectedAppointment.customer_phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-warm shrink-0" />
                <span className="font-mono break-all">{selectedAppointment.customer_email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-warm shrink-0 mt-0.5" />
                <span>{selectedAppointment.customer_address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-warm shrink-0" />
                <span className="font-mono tabular-nums">
                  {selectedAppointment.appointment_date} · {selectedAppointment.start_time} –{' '}
                  {selectedAppointment.end_time} ({selectedAppointment.timezone})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IndianRupee className="w-4 h-4 text-gold-warm shrink-0" />
                <span className="font-mono text-xs">
                  Payment Reference: {selectedAppointment.payment_reference || 'None'}
                </span>
              </div>
            </div>

            {/* Consultation Reason */}
            <div className="p-4 rounded-lg bg-[#120d0a] border border-bronze-dark/50 space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-faded flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Reason for Consultation
              </h4>
              <p className="text-sm text-ancient-beige/90 whitespace-pre-wrap leading-relaxed">
                {selectedAppointment.consultation_reason}
              </p>
              {selectedAppointment.additional_message && (
                <div className="pt-2 mt-2 border-t border-bronze-dark/40">
                  <span className="block font-mono text-[10px] uppercase text-ancient-beige/55">
                    Additional Message:
                  </span>
                  <p className="text-xs text-ancient-beige/80 mt-0.5 whitespace-pre-wrap">
                    {selectedAppointment.additional_message}
                  </p>
                </div>
              )}
            </div>

            {/* Administrator Status Actions */}
            <div className="p-4 rounded-lg bg-[#120d0a] border border-bronze-dark/50 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-faded">
                Administrator Actions
              </h4>
              <input
                type="text"
                value={actionNoteDraft}
                onChange={(e) => setActionNoteDraft(e.target.value)}
                placeholder="Optional reason or completion note..."
                className="w-full px-3 py-2 rounded bg-[#18120e] border border-bronze-dark/60 text-xs text-ancient-beige"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={
                    actionBusy ||
                    selectedAppointment.appointment_status !== 'Confirmed' ||
                    selectedAppointment.payment_status !== 'Paid'
                  }
                  onClick={() => handleUpdateStatus('Completed')}
                  className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-mono text-xs uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Mark as Completed
                </button>

                <button
                  type="button"
                  disabled={actionBusy || selectedAppointment.appointment_status === 'Cancelled'}
                  onClick={() => handleUpdateStatus('Cancelled')}
                  className="px-4 py-2 rounded bg-red-900/70 hover:bg-red-800 disabled:opacity-40 border border-red-500/50 text-red-100 font-mono text-xs uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <XCircle className="w-4 h-4" />
                  Cancel Appointment
                </button>
              </div>
              <p className="text-[11px] text-ancient-beige/55">
                Note: Unpaid appointments cannot be manually marked as Paid or Confirmed without a
                verified Razorpay payment record.
              </p>
              {actionFeedback && (
                <p className="text-xs font-mono text-gold-warm">{actionFeedback}</p>
              )}
            </div>

            {/* Internal Administrative Notes */}
            <div className="p-4 rounded-lg bg-[#120d0a] border border-bronze-dark/50 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-faded">
                Internal Administrative Notes
              </h4>
              <textarea
                rows={3}
                value={notesDraft}
                onChange={(e) => setNotesDraft(e.target.value)}
                placeholder="Private case observations or follow-up details (never visible to public visitors)..."
                className="w-full px-3 py-2 rounded bg-[#18120e] border border-bronze-dark/60 text-xs text-ancient-beige leading-relaxed"
              />
              <button
                type="button"
                disabled={actionBusy}
                onClick={handleSaveAdminNotes}
                className="px-4 py-2 rounded bg-gold-warm text-[#140f0c] font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Save Notes
              </button>
            </div>

            {/* Audit History */}
            <div className="p-4 rounded-lg bg-[#120d0a] border border-bronze-dark/50 space-y-2.5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-faded">
                Booking Audit Trail
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {(selectedAppointment.history || []).map((ev, idx) => (
                  <div
                    key={idx}
                    className="text-xs border-b border-bronze-dark/30 pb-2 last:border-none"
                  >
                    <div className="flex justify-between font-mono text-[11px] text-gold-faded">
                      <span>{ev.action}</span>
                      <span className="tabular-nums">
                        {new Date(ev.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-ancient-beige/75 mt-0.5">{ev.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
