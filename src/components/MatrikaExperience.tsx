import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Cpu, Layers } from 'lucide-react';
import {
  ASHTA_MATRIKA_PROFILES,
  COSMIC_STARFIELD
} from '../data/ashtaResearchData';
import MatrikaVisualization, { MatrikaMiniSparkline } from './MatrikaVisualizations';

interface MatrikaExperienceProps {
  initialProfileIndex?: number;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
  onOpenMatrix?: () => void;
}

export default function MatrikaExperience({
  initialProfileIndex = 0,
  onPrevChapter,
  onNextChapter,
  onOpenMatrix
}: MatrikaExperienceProps) {
  const [activeIndex, setActiveIndex] = useState<number>(initialProfileIndex);
  const [isSummaryView, setIsSummaryView] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setActiveIndex(initialProfileIndex);
    setIsSummaryView(false);
  }, [initialProfileIndex]);

  const activeProfile =
    ASHTA_MATRIKA_PROFILES[activeIndex] || ASHTA_MATRIKA_PROFILES[0];
  const currentAccent = isSummaryView ? '#FACC15' : activeProfile.accentColor;

  const handleSelectProfile = (idx: number) => {
    setIsSummaryView(false);
    setActiveIndex(idx);
  };

  const handlePrevStep = () => {
    if (isSummaryView) {
      setIsSummaryView(false);
      setActiveIndex(7);
    } else if (activeIndex === 0) {
      if (onPrevChapter) {
        onPrevChapter();
      } else {
        setIsSummaryView(true);
      }
    } else {
      setActiveIndex(prev => prev - 1);
    }
  };

  const handleNextStep = () => {
    if (isSummaryView) {
      if (onNextChapter) {
        onNextChapter();
      } else {
        setIsSummaryView(false);
        setActiveIndex(0);
      }
    } else if (activeIndex === 7) {
      setIsSummaryView(true);
    } else {
      setActiveIndex(prev => prev + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 55) {
      if (deltaX < 0) {
        handleNextStep();
      } else {
        handlePrevStep();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full rounded-xl overflow-hidden border border-[#526078]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-[#F3F2F1]"
      style={{
        background:
          'linear-gradient(180deg, #030D32 0%, #061539 36%, #0D1E42 62%, #1C1326 82%, #2E1209 100%)'
      }}
    >
      {/* Midnight-Blue Astronomical Starfield */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {COSMIC_STARFIELD.map(star => (
          <circle
            key={star.id}
            cx={star.cx}
            cy={star.cy}
            r={star.r * 0.18}
            fill="#F3F2F1"
            opacity={star.opacity}
          />
        ))}
      </svg>

      {/* Dynamic Ambient Radial Illumination */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 38% 45%, ${currentAccent}1E 0%, ${currentAccent}08 38%, transparent 70%)`
        }}
      />

      <div className="relative z-10 px-4 sm:px-7 md:px-10 py-6 md:py-7">
        {/* 5.1 Main Heading: अष्ट मातृका · THE EIGHT MATRIKAS */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5">
            <span className="h-[1px] w-6 sm:w-10 bg-[#FFBF38]/40" />
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold tracking-wide text-[#FFBF38]">
              अष्ट मातृका <span className="text-[#F7D57A]/80 font-normal mx-1">·</span> THE EIGHT MATRIKAS
            </h3>
            <span className="h-[1px] w-6 sm:w-10 bg-[#FFBF38]/40" />
          </div>

          <p className="mt-1 font-mono text-[10px] sm:text-[11px] tracking-[0.26em] text-[#A6AFBF] uppercase">
            {isSummaryView
              ? 'मातृका · SUMMARY · EIGHT ARCHETYPAL PROFILES'
              : `Eight archetypal profiles · Eight visual systems · ${activeProfile.rowLabel} (${activeProfile.binaryCode})`}
          </p>

          {/* Eight Profile Selector Dots + Summary Toggle */}
          <div
            className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Eight Matrika profiles and summary index"
          >
            {ASHTA_MATRIKA_PROFILES.map((profile, idx) => {
              const isActive = !isSummaryView && idx === activeIndex;
              return (
                <button
                  key={profile.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${profile.rowLabel} (${profile.binaryCode}): ${profile.englishName} — ${profile.conceptualTitle}`}
                  onClick={() => handleSelectProfile(idx)}
                  className={`px-2 py-0.5 rounded-full font-mono text-[9px] tracking-wider border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                    isActive
                      ? 'font-bold text-[#070A16]'
                      : 'bg-[#070A16]/70 text-[#A6AFBF] hover:text-[#F3F2F1]'
                  }`}
                  style={{
                    backgroundColor: isActive ? profile.accentColor : undefined,
                    borderColor: isActive ? profile.accentColor : `${profile.accentColor}45`,
                    boxShadow: isActive ? `0 0 12px ${profile.accentColor}75` : 'none'
                  }}
                >
                  {profile.binaryCode}
                </button>
              );
            })}

            <span className="mx-1 text-[#526078] text-xs select-none">|</span>

            <button
              type="button"
              role="tab"
              aria-selected={isSummaryView}
              onClick={() => setIsSummaryView(true)}
              className={`px-2.5 py-0.5 rounded-full font-mono text-[9.5px] uppercase tracking-[0.16em] border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                isSummaryView
                  ? 'border-[#FFBF38] bg-[#FFBF38]/20 text-[#FFBF38] font-semibold shadow-[0_0_12px_rgba(255,191,56,0.3)]'
                  : 'border-[#526078]/60 bg-[#070A16]/60 text-[#A6AFBF] hover:border-[#F7D57A]/60 hover:text-[#F7D57A]'
              }`}
            >
              मातृका · SUMMARY
            </button>
          </div>
        </div>

        {/* Main View Area: Individual Matrika Profile (000..111) vs Eight-Row Matrika Summary */}
        <AnimatePresence mode="wait">
          {!isSummaryView ? (
            <motion.div
              key={activeProfile.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -14 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
              className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column (5 cols on lg): Technical Identifier + 3-Node Binary Indicator + Animated Scientific Visualization */}
              <div className="lg:col-span-5 flex flex-col items-center justify-between bg-[#070A16]/75 border border-[#526078]/40 rounded-xl p-4 sm:p-5">
                {/* Top Technical Row Identifier, Binary Code & Three-Node Progression Indicator */}
                <div className="w-full flex items-center justify-between gap-2 pb-2.5 border-b border-[#526078]/30">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded font-mono text-[10px] font-bold tracking-widest bg-[#030D32] border"
                      style={{
                        color: activeProfile.accentColor,
                        borderColor: `${activeProfile.accentColor}66`
                      }}
                    >
                      {activeProfile.rowLabel}
                    </span>
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#F3F2F1]">
                      CODE {activeProfile.binaryCode}
                    </span>
                  </div>

                  {/* Three-Node Binary Bit Progression Indicator */}
                  <div
                    className="flex items-center gap-1.5"
                    aria-label={`Binary bit state ${activeProfile.binaryCode}`}
                  >
                    {activeProfile.bits.map((bit, bIdx) => (
                      <span
                        key={bIdx}
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono text-[8px] font-bold border transition-all duration-300"
                        style={{
                          backgroundColor: bit === 1 ? activeProfile.accentColor : '#070A16',
                          borderColor:
                            bit === 1 ? activeProfile.accentColor : '#526078',
                          color: bit === 1 ? '#070A16' : '#A6AFBF',
                          boxShadow:
                            bit === 1 ? `0 0 8px ${activeProfile.accentColor}90` : 'none'
                        }}
                      >
                        {bit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conceptual Formula Header */}
                <div className="w-full mt-2.5 flex flex-wrap items-center justify-between gap-1 px-1">
                  <code
                    className="font-mono text-xs sm:text-[13px] font-semibold tracking-wider"
                    style={{ color: activeProfile.accentColor }}
                  >
                    {activeProfile.conceptualFormula}
                  </code>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] px-1.5 py-0.5 rounded bg-[#102344]/60 text-[#A6AFBF]">
                    SYMBOLIC EXPRESSION
                  </span>
                </div>

                {/* Animated Scientific-Style Visualization */}
                <div className="w-full my-1">
                  <MatrikaVisualization
                    type={activeProfile.visualizationType}
                    accentColor={activeProfile.accentColor}
                  />
                </div>

                {/* Evidence Status Pill at Bottom of Visualization Card */}
                <div className="w-full pt-2 border-t border-[#526078]/25 flex items-center justify-between text-[8.5px] font-mono text-[#A6AFBF] uppercase tracking-[0.15em]">
                  <span>{activeProfile.evidenceBadge}</span>
                  <span>PROFILE {activeProfile.rowIndex + 1}/8</span>
                </div>
              </div>

              {/* Right Column (7 cols on lg): Hindi Name, English Conceptual Title, Description, 4 Metadata Cards & Footer */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#070A16]/75 border border-[#526078]/45 mb-2">
                    <Cpu className="w-3 h-3" style={{ color: activeProfile.accentColor }} />
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {activeProfile.rowLabel} · BINARY {activeProfile.binaryCode} · {activeProfile.englishName.toUpperCase()}
                    </span>
                  </div>

                  {/* Hindi Name & English Name */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 justify-center lg:justify-start">
                    <h4
                      className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide leading-tight"
                      style={{ color: activeProfile.accentColor }}
                    >
                      {activeProfile.hindiName}
                    </h4>
                    <span className="text-sm sm:text-base font-mono uppercase tracking-[0.18em] text-[#A6AFBF]">
                      {activeProfile.englishName}
                    </span>
                  </div>

                  {/* Conceptual Title */}
                  <p className="mt-1 text-lg sm:text-xl font-serif font-semibold text-[#F3F2F1] tracking-wide">
                    {activeProfile.conceptualTitle}
                  </p>

                  {/* One-Sentence Creative Description */}
                  <p
                    className="mt-2.5 text-sm sm:text-base font-mono font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
                    style={{ color: activeProfile.accentColor }}
                  >
                    “{activeProfile.description}”
                  </p>

                  {/* Methodological / Scientific Clarifying Note */}
                  <p className="mt-2 text-xs sm:text-[13px] font-serif text-[#A6AFBF] leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {activeProfile.clarifyingNote}
                  </p>

                  {/* Source / Reference Note */}
                  <p className="mt-1.5 text-[10.5px] font-mono text-[#A6AFBF]/80">
                    {activeProfile.sourceNote}
                  </p>
                </div>

                {/* Four Metadata Cards (2×2 Grid): TATTVA, GLAND, HORMONE, KSHETRA */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      TATTVA
                    </span>
                    <span
                      className="mt-1 block font-serif text-sm sm:text-base font-bold"
                      style={{ color: activeProfile.accentColor }}
                    >
                      {activeProfile.tattva}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                        GLAND
                      </span>
                      <span className="font-mono text-[7.5px] uppercase tracking-wider text-[#A6AFBF]/65">
                        SYMBOLIC MAP
                      </span>
                    </div>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {activeProfile.gland}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                        HORMONE
                      </span>
                      <span className="font-mono text-[7.5px] uppercase tracking-wider text-[#A6AFBF]/65">
                        SYMBOLIC MAP
                      </span>
                    </div>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {activeProfile.hormone}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      KSHETRA
                    </span>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {activeProfile.kshetra}
                    </span>
                  </div>
                </div>

                {/* Profile Step Controls & Attribution Footer */}
                <div className="mt-4 pt-3 border-t border-[#526078]/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      aria-label="Previous Matrika profile"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#070A16]/80 border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      {activeIndex === 0 && onPrevChapter ? '64 Matrix' : 'Prev'}
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      aria-label="Next Matrika profile"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#070A16]/80 border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      {activeIndex === 7 ? 'मातृका · Summary' : 'Next'}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {onOpenMatrix && (
                      <button
                        type="button"
                        onClick={onOpenMatrix}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#102344]/50 border border-[#526078]/50 text-[11px] font-mono text-[#A6AFBF] hover:text-[#FFBF38] hover:border-[#FFBF38]/50 transition-colors cursor-pointer"
                      >
                        <Layers className="w-3 h-3" />
                        64 Matrix
                      </button>
                    )}

                    {onNextChapter && (
                      <button
                        type="button"
                        onClick={onNextChapter}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/50 text-[11px] font-mono text-[#FFBF38] hover:bg-[#FFBF38]/25 transition-colors cursor-pointer"
                      >
                        श्री मेरु चक्र · Shri Meru
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-[#A6AFBF]/80 uppercase">
                    आगामी पुस्तक · A Path Within · Rakesh Sharma
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* SECTION 14: EIGHT MATRIKA SUMMARY SCREEN */
            <motion.div
              key="ashta-matrika-summary"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="mt-4"
            >
              {/* 14.1 Summary Heading */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#070A16]/90 border border-[#FFBF38]/45 mb-4 text-center">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#FFBF38]/15 border border-[#FFBF38]/40 mb-1.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFBF38]">
                    मातृका · SUMMARY · SYMBOLIC RESEARCH INDEX
                  </span>
                </div>
                <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#F3F2F1]">
                  Your body runs on 8 Mātr̥kās. Here's the code.
                </h4>
                <p className="mt-1 text-[11px] sm:text-xs font-mono text-[#A6AFBF]">
                  Creative cybernetic-endocrine metaphor from A Path Within (symbolic interpretive model; click any row to inspect its animated profile).
                </p>
              </div>

              {/* 14.2 Eight Clickable Horizontal Summary Rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {ASHTA_MATRIKA_PROFILES.map((profile, idx) => (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => handleSelectProfile(idx)}
                    className="group flex items-center justify-between gap-3 p-3 rounded-lg bg-[#070A16]/85 border hover:bg-[#102344]/60 transition-all duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38]"
                    style={{ borderColor: `${profile.accentColor}55` }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Binary Code & Row Badge */}
                      <div
                        className="px-2.5 py-1.5 rounded bg-[#030D32] border text-center shrink-0"
                        style={{ borderColor: `${profile.accentColor}66` }}
                      >
                        <span
                          className="block font-mono text-xs font-bold tracking-widest"
                          style={{ color: profile.accentColor }}
                        >
                          {profile.binaryCode}
                        </span>
                        <span className="block font-mono text-[8px] text-[#A6AFBF] uppercase">
                          {profile.rowLabel}
                        </span>
                      </div>

                      {/* Hindi Name, Conceptual Title & Metadata */}
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="font-serif text-base sm:text-lg font-bold truncate"
                            style={{ color: profile.accentColor }}
                          >
                            {profile.hindiName}
                          </span>
                          <span className="font-mono text-[10px] text-[#A6AFBF] uppercase">
                            {profile.englishName}
                          </span>
                        </div>
                        <p className="font-serif text-xs sm:text-sm font-medium text-[#F3F2F1] truncate">
                          {profile.conceptualTitle}
                        </p>
                        <p className="font-mono text-[9.5px] text-[#A6AFBF] truncate mt-0.5">
                          {profile.tattva} · {profile.gland} · {profile.kshetra}
                        </p>
                      </div>
                    </div>

                    {/* Representative Miniature Graph / Sparkline */}
                    <div className="flex items-center gap-2 shrink-0">
                      <MatrikaMiniSparkline
                        type={profile.visualizationType}
                        accentColor={profile.accentColor}
                      />
                      <ChevronRight
                        className="w-4 h-4 text-[#A6AFBF] group-hover:translate-x-0.5 transition-transform"
                        style={{ color: profile.accentColor }}
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* 14.3 Summary Footer */}
              <div className="mt-4 pt-3.5 border-t border-[#526078]/35 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectProfile(0)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/60 text-xs font-mono text-[#FFBF38] hover:bg-[#FFBF38]/25 transition-colors cursor-pointer"
                  >
                    Explore Row 000: Brahmani
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  {onOpenMatrix && (
                    <button
                      type="button"
                      onClick={onOpenMatrix}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#070A16] border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Return to 64 Matrix
                    </button>
                  )}
                  {onNextChapter && (
                    <button
                      type="button"
                      onClick={onNextChapter}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFBF38]/20 border border-[#FFBF38] text-xs font-mono text-[#FFBF38] hover:bg-[#FFBF38]/30 transition-colors cursor-pointer"
                    >
                      Next Chapter: श्री मेरु चक्र · Shri Meru
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="text-center sm:text-right">
                  <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#FFBF38] uppercase">
                    8 Matrikas · 8 Bhairavas = 64 Yoginis
                  </p>
                  <p className="font-mono text-[9.5px] tracking-[0.14em] text-[#A6AFBF]/85 mt-0.5">
                    आगामी पुस्तक · A Path Within · Rakesh Sharma
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
