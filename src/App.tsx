import React, { useState, useEffect, useRef } from 'react';
import { Landmark, Menu, X, Languages, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Modular components import
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import InvestigationsSection from './components/InvestigationsSection';
import LibrarySection from './components/LibrarySection';
import MythRealitySection from './components/MythRealitySection';
import EquipmentSection from './components/EquipmentSection';
import TimelineSection from './components/TimelineSection';
import AppointmentBookingSection from './components/AppointmentBookingSection';
import AdminConsultationDashboard from './components/AdminConsultationDashboard';
import ContactSection from './components/ContactSection';
import VisualDivider from './components/VisualDivider';
import TransparentLineScrollbar from './components/TransparentLineScrollbar';

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState(
    () => typeof window !== 'undefined' && window.location.hash === '#admin'
  );
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.muted = false;

    const tryPlay = () => {
      if (!audioRef.current || userMutedRef.current) return;
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay until first user gesture
      });
    };

    tryPlay();

    const handleFirstInteraction = () => {
      if (!audioRef.current || userMutedRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;
    const nextMuted = !isMuted;
    userMutedRef.current = nextMuted;
    setIsMuted(nextMuted);

    if (audio) {
      audio.muted = nextMuted;
      if (!nextMuted && audio.paused) {
        audio.play().catch(() => {});
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1512] text-ancient-beige font-sans selection:bg-gold-warm selection:text-ancient-dark overflow-x-hidden vintage-scrollbar">
      <audio
        ref={audioRef}
        src="/assets/aistudio/Bhootnath_astakham_623209da.mp3"
        loop
        autoPlay
        preload="auto"
      />
      <TransparentLineScrollbar variant="window" />
      
      {/* Sticky Antique Navigation Ledger */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#110e0d]/30 backdrop-blur-sm border-b border-bronze-dark/40 shadow-lg px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left side: branding */}
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col text-left">
            <span className="font-serif text-[12.5px] font-bold tracking-[0.25em] text-gold-warm leading-none uppercase">
              {t('RAM ASHOK KUMAR', 'राम अशोक कुमार')}
            </span>
          </div>
        </div>

        {/* Right side: quick links resembling a library index */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-widest uppercase">
          <a href="#" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Home', 'मुख्य पृष्ठ')}
          </a>
          <a href="#about" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('About', 'परिचय')}
          </a>
          <a href="#philosophy" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Research', 'शोध दर्शन')}
          </a>
          <a href="#archives" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Investigations', 'अन्वेषण')}
          </a>
          <a href="#library" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Library', 'पुस्तकालय')}
          </a>
          <a href="#equipment" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Instruments', 'उपकरण')}
          </a>
          <a href="#timeline" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Chronology', 'कालक्रम')}
          </a>
          <a href="#book-consultation" className="text-gold-warm hover:text-[#e5c247] font-semibold transition-colors duration-300">
            {t('Consultation', 'परामर्श')}
          </a>
          <a href="#contact" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            {t('Contacts', 'संपर्क')}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gold-faded hover:text-gold-warm transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-[68px] left-0 w-full z-40 bg-[#110e0d]/95 backdrop-blur-md border-b border-bronze-dark/40 shadow-lg px-6 py-4 flex flex-col gap-4 font-mono text-sm tracking-widest uppercase overflow-hidden"
          >
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Home', 'मुख्य पृष्ठ')}
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('About', 'परिचय')}
            </a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Research', 'शोध दर्शन')}
            </a>
            <a href="#archives" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Investigations', 'अन्वेषण')}
            </a>
            <a href="#library" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Library', 'पुस्तकालय')}
            </a>
            <a href="#equipment" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Instruments', 'उपकरण')}
            </a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Chronology', 'कालक्रम')}
            </a>
            <a href="#book-consultation" onClick={() => setMobileMenuOpen(false)} className="text-gold-warm hover:text-[#e5c247] font-semibold transition-colors duration-300">
              {t('Book Consultation', 'परामर्श बुक करें')}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              {t('Contacts', 'संपर्क')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content sections with thematic transitions */}
      <main className="relative w-full min-h-screen bg-[#1a1512]">
        
        {/* Section 0: Hero & Entry */}
        <HeroSection />

        {/* Divider 1 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 1: About / Profile */}
        <AboutSection />

        {/* Divider 2 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 2: Research Philosophy / Methodology */}
        <PhilosophySection />

        {/* Divider 3 */}
        <VisualDivider variant="manuscript-scroll" />

        {/* Section 3: Featured Investigations Drawer Filing Cabinet */}
        <InvestigationsSection />

        {/* Divider 4 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 4: Research Library / Bookshelves */}
        <LibrarySection />

        {/* Divider 5 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 5: Myth vs Reality Open Ledger */}
        <MythRealitySection />

        {/* Divider 6 */}
        <VisualDivider variant="manuscript-scroll" />

        {/* Section 6: Scientific Equipment Bench testing */}
        <EquipmentSection />

        {/* Divider 7 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 7: Chronicle Timeline of Years */}
        <TimelineSection />

        {/* Divider 8 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 8: Private Consultation Appointment Booking & UPI QR System (Directly Above Mailbox/Contact Section) */}
        <AppointmentBookingSection onOpenAdminDashboard={() => setAdminDashboardOpen(true)} />

        {/* Divider 9 */}
        <VisualDivider variant="manuscript-scroll" />

        {/* Section 9: Correspondence desk letter */}
        <ContactSection />

      </main>

      {/* Secure Administrator Consultation Dashboard Modal */}
      <AdminConsultationDashboard
        isOpen={adminDashboardOpen}
        onClose={() => setAdminDashboardOpen(false)}
      />

      {/* Grand Scholarly Footer */}
      <footer className="bg-[#0b0807] border-t border-bronze-dark/50 pt-14 pb-24 sm:py-16 px-4 md:px-8 text-center relative overflow-hidden paper-grain">
        {/* Subtle decorative background outline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Logo Crest */}
          <div className="w-12 h-12 rounded-full border border-gold-faded/50 flex items-center justify-center text-gold-warm mb-6 bg-ancient-dark shadow-md">
            <Landmark className="w-5 h-5" strokeWidth={1.5} />
          </div>

          <p className="font-serif text-base sm:text-lg md:text-xl font-semibold text-gold-warm tracking-widest uppercase">
            {t('CENTER FOR ANOMALOUS STUDIES', 'असाधारण अध्ययन केंद्र')}
          </p>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-ancient-beige/70 uppercase mt-2">
            {t('Official Research Register & Repository — Varanasi, India', 'आधिकारिक शोध रजिस्टर एवं संग्रह — वाराणसी, भारत')}
          </p>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold-faded/50 to-transparent my-6 sm:my-8" />

          {/* Licenses & Notices */}
          <p className="text-base sm:text-lg md:text-xl font-vintage italic text-ancient-beige/90 max-w-4xl leading-relaxed px-2">
            {t(
              '"All anomalies listed within these dockets have been recorded via calibrated dual-coil seismometers, barometric infrasound monitors, and spectral bolometers. No metaphysical validation is implied."',
              '"इन दस्तावेजों में सूचीबद्ध सभी विसंगतियाँ अंशांकित दोहरे-कुंडल भूकंपमापी, बैरोमीटरिक इन्फ्रासाउंड मॉनिटर और स्पेक्ट्रल बोलोमीटर के माध्यम से दर्ज की गई हैं। इसमें किसी आध्यात्मिक प्रमाणीकरण का दावा नहीं किया गया है।"'
            )}
          </p>

          {/* Quick Info Grid */}
          <div className="flex flex-col xs:flex-row justify-center items-center gap-6 sm:gap-16 md:gap-24 w-full max-w-4xl mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-bronze-dark/40 text-center font-mono text-[10px] md:text-xs text-ancient-beige/70 uppercase tracking-wider">
            <div>
              <span className="block text-gold-faded/90 font-semibold mb-1.5 sm:mb-2">
                {t('Directorate', 'निदेशालय')}
              </span>
              <span>{t('Ram Ashok Kumar', 'राम अशोक कुमार')}</span>
            </div>
            <div>
              <span className="block text-gold-faded/90 font-semibold mb-1.5 sm:mb-2">
                {t('Affiliation', 'संबद्धता')}
              </span>
              <span>{t('Society of Psychical Research', 'सोसाइटी ऑफ साइकिकल रिसर्च')}</span>
            </div>
          </div>

          <p className="font-sans text-[11px] sm:text-xs text-ancient-beige/60 mt-10 sm:mt-14 leading-relaxed">
            {t(
              '© 2026 Ram Ashok Kumar. All rights reserved. Under geological and archaeological treaty archives.',
              '© 2026 राम अशोक कुमार। सर्वाधिकार सुरक्षित। भूगर्भीय और पुरातात्विक संधि अभिलेखागार के अधीन।'
            )}
          </p>
          <p className="font-sans text-xs text-ancient-beige/60 mt-4 leading-none">
            {t('Made by ', 'निर्माता: ')}
            <a href="https://www.instagram.com/archon.10/" target="_blank" rel="noopener noreferrer" className="text-gold-faded hover:text-gold-warm transition-colors underline decoration-gold-faded/30 underline-offset-2">archon</a>
          </p>
        </div>
      </footer>

      {/* Sticky Bottom-Right Background Music Mute / Unmute Button (Above Language Button) */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        title={isMuted ? t('Unmute Music', 'संगीत चालू करें') : t('Mute Music', 'संगीत बंद करें')}
        className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-[140] flex items-center justify-center p-2.5 sm:p-3 rounded-lg bg-[#140f0c]/95 hover:bg-[#221913] border-2 border-gold-warm/80 hover:border-gold-warm text-gold-warm shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_15px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all duration-300 cursor-pointer group active:scale-95"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gold-warm transition-transform duration-300 group-hover:scale-110" />
        ) : (
          <Volume2 className="w-5 h-5 text-gold-warm transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>

      {/* Sticky Bottom-Right Language Switcher Button (English <-> Hindi only, Sanskrit untouched) */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={lang === 'en' ? 'Switch website language to Hindi' : 'Switch website language to English'}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[140] flex items-center gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-[#140f0c]/95 hover:bg-[#221913] border-2 border-gold-warm/80 hover:border-gold-warm text-gold-warm shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_15px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all duration-300 cursor-pointer group active:scale-95"
      >
        <Languages className="w-4 h-4 text-gold-warm group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-serif text-xs sm:text-sm font-bold tracking-wider">
          {lang === 'en' ? 'हिन्दी' : 'ENGLISH'}
        </span>
      </button>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
