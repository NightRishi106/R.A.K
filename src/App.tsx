import React, { useState } from 'react';
import { Compass, Shield, Map, Landmark, Clock, Coffee, BookOpen, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular components import
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import InvestigationsSection from './components/InvestigationsSection';
import LibrarySection from './components/LibrarySection';
import MythRealitySection from './components/MythRealitySection';
import EquipmentSection from './components/EquipmentSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import VisualDivider from './components/VisualDivider';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0d0c] text-ancient-beige font-sans selection:bg-gold-warm selection:text-ancient-dark overflow-x-hidden vintage-scrollbar">
      
      {/* Sticky Antique Navigation Ledger */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#110e0d]/30 backdrop-blur-sm border-b border-bronze-dark/40 shadow-lg px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left side: branding */}
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col text-left">
            <span className="font-serif text-[12.5px] font-bold tracking-[0.25em] text-gold-warm leading-none uppercase">
              RAM ASHOK KUMAR
            </span>
          </div>
        </div>

        {/* Right side: quick links resembling a library index */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-widest uppercase">
          <a href="#" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            About
          </a>
          <a href="#philosophy" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Research
          </a>
          <a href="#archives" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Investigations
          </a>
          <a href="#library" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Library
          </a>
          <a href="#equipment" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Instruments
          </a>
          <a href="#timeline" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Chronology
          </a>
          <a href="#contact" className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
            Contacts
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
              Home
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              About
            </a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Research
            </a>
            <a href="#archives" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Investigations
            </a>
            <a href="#library" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Library
            </a>
            <a href="#equipment" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Instruments
            </a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Chronology
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-ancient-beige/70 hover:text-gold-warm transition-colors duration-300">
              Contacts
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content sections with thematic transitions */}
      <main className="relative">
        
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

        {/* Section 8: Correspondence desk letter */}
        <ContactSection />

      </main>

      {/* Grand Scholarly Footer */}
      <footer className="bg-[#0b0807] border-t border-bronze-dark/50 py-16 px-4 md:px-8 text-center relative overflow-hidden paper-grain">
        {/* Subtle decorative background outline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Logo Crest */}
          <div className="w-12 h-12 rounded-full border border-gold-faded/50 flex items-center justify-center text-gold-warm mb-6 bg-ancient-dark shadow-md">
            <Landmark className="w-5 h-5" strokeWidth={1.5} />
          </div>

          <p className="font-serif text-lg md:text-xl font-semibold text-gold-warm tracking-widest uppercase">
            CENTER FOR ANOMALOUS GEOLOGICAL STUDIES
          </p>
          <p className="font-mono text-xs tracking-[0.3em] text-ancient-beige/70 uppercase mt-2">
            Official Research Register & Repository — Varanasi, India
          </p>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold-faded/50 to-transparent my-8" />

          {/* Licenses & Notices */}
          <p className="text-lg md:text-xl font-vintage italic text-ancient-beige/90 max-w-4xl leading-relaxed">
            "All anomalies listed within these dockets have been recorded via calibrated dual-coil seismometers, barometric infrasound monitors, and spectral bolometers. No metaphysical validation is implied."
          </p>

          {/* Quick Info Grid */}
          <div className="flex flex-row justify-center items-center gap-16 md:gap-24 w-full max-w-4xl mt-10 pt-10 border-t border-bronze-dark/40 text-center font-mono text-[10px] md:text-xs text-ancient-beige/70 uppercase tracking-wider">
            <div>
              <span className="block text-gold-faded/90 font-semibold mb-2">Directorate</span>
              <span>Ram Ashok Kumar</span>
            </div>
            <div>
              <span className="block text-gold-faded/90 font-semibold mb-2">Affiliation</span>
              <span>Society of Psychical Research</span>
            </div>
          </div>

          <p className="font-sans text-xs text-ancient-beige/60 mt-14 leading-none">
            © 2026 Ram Ashok Kumar. All rights reserved. Under geological and archaeological treaty archives.
          </p>
          <p className="font-sans text-xs text-ancient-beige/60 mt-4 leading-none">
            Made by <a href="https://www.instagram.com/archon.10/" target="_blank" rel="noopener noreferrer" className="text-gold-faded hover:text-gold-warm transition-colors underline decoration-gold-faded/30 underline-offset-2">archon</a>
          </p>
        </div>
      </footer>

    </div>
  );
}

