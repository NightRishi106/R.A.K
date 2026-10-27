import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Compass, Sparkles, Grid } from 'lucide-react';
import {
  ASHTA_BHAIRAVA_PROFILES,
  AshtaBhairavaProfile
} from '../data/ashtaResearchData';
import { useLanguage } from '../context/LanguageContext';

export { ASHTA_BHAIRAVA_PROFILES };
export type { AshtaBhairavaProfile };

const COMPASS_DIRECTIONS: Array<{
  code: 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
  codeHi: string;
  angle: number;
}> = [
  { code: 'N', codeHi: 'उ', angle: 270 },
  { code: 'NE', codeHi: 'ई', angle: 315 },
  { code: 'E', codeHi: 'पू', angle: 0 },
  { code: 'SE', codeHi: 'आ', angle: 45 },
  { code: 'S', codeHi: 'द', angle: 90 },
  { code: 'SW', codeHi: 'नै', angle: 135 },
  { code: 'W', codeHi: 'प', angle: 180 },
  { code: 'NW', codeHi: 'वा', angle: 225 }
];

// Deterministic starfield coordinates for crisp rendering
const STARFIELD = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  cx: ((i * 73 + 19) % 96) + 2,
  cy: ((i * 41 + 11) % 68) + 2,
  r: i % 5 === 0 ? 1.3 : i % 2 === 0 ? 0.9 : 0.6,
  opacity: i % 4 === 0 ? 0.65 : i % 3 === 0 ? 0.4 : 0.22
}));

function buildSineWavePath(cycles: number, phaseOffset = 0, amplitude = 11): string {
  const width = 360;
  const midY = 20;
  const steps = 90;
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * width;
    const envelope = Math.sin(t * Math.PI);
    const y =
      midY +
      Math.sin(t * cycles * Math.PI * 2 + phaseOffset) * amplitude * Math.pow(envelope, 0.55);
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return points.join(' ');
}

interface AshtaBhairavaExperienceProps {
  initialProfileIndex?: number;
  onNextChapter?: () => void;
}

export default function AshtaBhairavaExperience({
  initialProfileIndex = 0,
  onNextChapter
}: AshtaBhairavaExperienceProps = {}) {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(initialProfileIndex);
  const [isSummaryView, setIsSummaryView] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setActiveIndex(initialProfileIndex);
    setIsSummaryView(false);
  }, [initialProfileIndex]);

  const activeProfile = ASHTA_BHAIRAVA_PROFILES[activeIndex] || ASHTA_BHAIRAVA_PROFILES[0];
  const currentAccent = isSummaryView ? '#FFBF38' : activeProfile.accentColor;

  const handleSelectProfile = (idx: number) => {
    setIsSummaryView(false);
    setActiveIndex(idx);
  };

  const handlePrevStep = () => {
    if (isSummaryView) {
      setIsSummaryView(false);
      setActiveIndex(7);
    } else if (activeIndex === 0) {
      setIsSummaryView(true);
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

  const primaryWavePath = buildSineWavePath(activeProfile.waveCycles, 0, 11);
  const secondaryWavePath = buildSineWavePath(activeProfile.waveCycles, Math.PI / 2.5, 6);

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-[#526078]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-[#F3F2F1]"
      style={{
        background:
          'linear-gradient(180deg, #030D32 0%, #07183C 34%, #102344 56%, #251416 76%, #381306 90%, #4B1605 100%)'
      }}
    >
      {/* Subtle Astronomical Starfield SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {STARFIELD.map(star => (
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

      {/* Central Celestial Glow Determined by Active Profile */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 42%, ${currentAccent}1F 0%, ${currentAccent}08 35%, transparent 70%)`
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-7 md:px-10 py-6 md:py-7">
        {/* Top Header: Single-Language Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5">
            <span className="h-[1px] w-6 sm:w-10 bg-[#FFBF38]/40" />
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold tracking-wide text-[#FFBF38]">
              {t('ASHTA BHAIRAVA', 'अष्ट भैरव')}
            </h3>
            <span className="h-[1px] w-6 sm:w-10 bg-[#FFBF38]/40" />
          </div>

          <p className="mt-1 font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-[#A6AFBF] uppercase">
            {isSummaryView
              ? t('THE EIGHT BHAIRAVAS · MANDALA SUMMARY', 'अष्ट भैरव · मण्डल सारांश')
              : t(
                  `THE EIGHT BHAIRAVAS · ${activeProfile.index}/8`,
                  `अष्ट भैरव · ${activeProfile.index}/8`
                )}
          </p>

          {/* Eight Circular Progress Indicators + Summary Toggle */}
          <div
            className="mt-2.5 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label={t('Eight Bhairava profiles and mandala summary', 'अष्ट भैरव प्रोफ़ाइल और मण्डल सारांश')}
          >
            {ASHTA_BHAIRAVA_PROFILES.map((profile, idx) => {
              const isActive = !isSummaryView && idx === activeIndex;
              return (
                <button
                  key={profile.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={t(
                    `${profile.index}/8 ${profile.englishName} (${profile.directionFull})`,
                    `${profile.index}/8 ${profile.hindiName} (${profile.directionFullHi})`
                  )}
                  onClick={() => handleSelectProfile(idx)}
                  className="group p-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] rounded-full"
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '20px' : '7px',
                      height: '7px',
                      backgroundColor: isActive ? profile.accentColor : '#526078',
                      boxShadow: isActive ? `0 0 10px ${profile.accentColor}90` : 'none',
                      opacity: isActive ? 1 : 0.65
                    }}
                  />
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
              {t('Mandala Summary', 'मण्डल सारांश')}
            </button>
          </div>

          {/* Thematic Controls Descriptor */}
          <p
            className="mt-2 text-xs sm:text-[13px] font-mono tracking-wide text-center max-w-2xl transition-colors duration-300"
            style={{ color: currentAccent }}
          >
            {isSummaryView
              ? t(
                  'Center: Kaal Bhairava (Sovereign of Time) · Eight Directional Guardians of the Cosmic Mandala',
                  'केंद्र: काल भैरव (काल के अधिपति) · ब्रह्माण्डीय मण्डल के आठ दिशा-रक्षक'
                )
              : t(activeProfile.controlsLine, activeProfile.controlsLineHi)}
          </p>
        </div>

        {/* Main View Area: Individual Profile (1/8 - 8/8) vs Eight-Form Mandala Summary */}
        <AnimatePresence mode="wait">
          {!isSummaryView ? (
            <motion.div
              key={`${activeProfile.id}-${lang}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column (5 cols on lg): Central Directional Compass + Animated Waveform */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                {/* Directional Compass SVG */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                  <svg
                    viewBox="0 0 280 280"
                    className="w-full h-full overflow-visible animate-[spin_60s_linear_infinite]"
                    role="img"
                    aria-label={t(
                      `Directional compass clock highlighting ${activeProfile.directionFull} for ${activeProfile.englishName}`,
                      `${activeProfile.hindiName} के लिए ${activeProfile.directionFullHi} दिशा को दर्शाने वाली दिशात्मक घड़ी`
                    )}
                  >
                    <defs>
                      <radialGradient id="centerGoldGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFBF38" stopOpacity="0.65" />
                        <stop offset="60%" stopColor={activeProfile.accentColor} stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#07183C" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Subtle Central Radial Glow */}
                    <circle cx="140" cy="140" r="88" fill="url(#centerGoldGlow)" />

                    {/* Outer Clock Bezel & 60 Clock Tick Marks */}
                    <g
                      className=" origin-[140px_140px] animate-[spin_45s_linear_infinite]"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      <circle
                        cx="140"
                        cy="140"
                        r="102"
                        fill="none"
                        stroke="#526078"
                        strokeWidth="1"
                        opacity="0.55"
                      />
                      {Array.from({ length: 60 }, (_, i) => {
                        const deg = i * 6;
                        const rad = (deg * Math.PI) / 180;
                        const isMajor = i % 5 === 0;
                        const rInner = isMajor ? 95 : 98.5;
                        const rOuter = 102;
                        return (
                          <line
                            key={`tick-${i}`}
                            x1={140 + Math.cos(rad) * rInner}
                            y1={140 + Math.sin(rad) * rInner}
                            x2={140 + Math.cos(rad) * rOuter}
                            y2={140 + Math.sin(rad) * rOuter}
                            stroke={isMajor ? '#FFBF38' : '#526078'}
                            strokeWidth={isMajor ? '1.1' : '0.6'}
                            opacity={isMajor ? '0.65' : '0.35'}
                          />
                        );
                      })}
                    </g>

                    {/* Middle Dashed Clock Ring (Minute-style clockwise rotation) */}
                    <g
                      className="origin-[140px_140px] animate-[spin_24s_linear_infinite]"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      <circle
                        cx="140"
                        cy="140"
                        r="70"
                        fill="none"
                        stroke="#526078"
                        strokeWidth="0.9"
                        strokeDasharray="4 4"
                        opacity="0.55"
                      />
                    </g>

                    {/* Inner Clock Ring (Fast clockwise rotation) */}
                    <g
                      className="origin-[140px_140px] animate-[spin_12s_linear_infinite]"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      <circle
                        cx="140"
                        cy="140"
                        r="34"
                        fill="none"
                        stroke="#FFBF38"
                        strokeWidth="0.7"
                        strokeDasharray="6 3"
                        opacity="0.45"
                      />
                    </g>

                    {/* Eight Radial Lines & Interactive Direction Markers Rotating Clockwise */}
                    <g
                      className="origin-[140px_140px] animate-[spin_30s_linear_infinite]"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      {COMPASS_DIRECTIONS.map(dir => {
                        const rad = (dir.angle * Math.PI) / 180;
                        const xOuter = 140 + Math.cos(rad) * 102;
                        const yOuter = 140 + Math.sin(rad) * 102;
                        const xLabel = 140 + Math.cos(rad) * 122;
                        const yLabel = 140 + Math.sin(rad) * 122;
                        const matchingProfileIdx = ASHTA_BHAIRAVA_PROFILES.findIndex(
                          p => p.directionCode === dir.code
                        );
                        const isActiveDir = dir.code === activeProfile.directionCode;

                        return (
                          <g
                            key={dir.code}
                            onClick={() => {
                              if (matchingProfileIdx !== -1) {
                                handleSelectProfile(matchingProfileIdx);
                              }
                            }}
                            className="cursor-pointer"
                          >
                            {/* Radial Line */}
                            <line
                              x1="140"
                              y1="140"
                              x2={xOuter}
                              y2={yOuter}
                              stroke={isActiveDir ? activeProfile.accentColor : '#526078'}
                              strokeWidth={isActiveDir ? '2.2' : '0.8'}
                              opacity={isActiveDir ? '1' : '0.4'}
                            />

                            {/* Marker Node on Ring */}
                            {isActiveDir && (
                              <circle
                                cx={xOuter}
                                cy={yOuter}
                                r="9"
                                fill={activeProfile.accentColor}
                                opacity="0.25"
                              />
                            )}
                            <circle
                              cx={xOuter}
                              cy={yOuter}
                              r={isActiveDir ? '5' : '2.8'}
                              fill={isActiveDir ? activeProfile.accentColor : '#526078'}
                              stroke={isActiveDir ? '#F3F2F1' : 'none'}
                              strokeWidth={isActiveDir ? '1' : '0'}
                            />

                            {/* Direction Code Label */}
                            <text
                              x={xLabel}
                              y={yLabel}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill={isActiveDir ? activeProfile.accentColor : '#A6AFBF'}
                              fontSize={isActiveDir ? '11' : '9.5'}
                              fontWeight={isActiveDir ? '700' : '500'}
                              fontFamily="monospace"
                              opacity={isActiveDir ? '1' : '0.65'}
                            >
                              {t(dir.code, dir.codeHi)}
                            </text>
                          </g>
                        );
                      })}
                    </g>

                    {/* Sweeping Clock Hands */}
                    <g
                      className="origin-[140px_140px] animate-[spin_10s_linear_infinite] pointer-events-none"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      <line
                        x1="140"
                        y1="140"
                        x2="140"
                        y2="52"
                        stroke={activeProfile.accentColor}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                      <circle
                        cx="140"
                        cy="52"
                        r="2.2"
                        fill={activeProfile.accentColor}
                      />
                    </g>

                    <g
                      className="origin-[140px_140px] animate-[spin_60s_linear_infinite] pointer-events-none"
                      style={{ transformOrigin: '140px 140px' }}
                    >
                      <line
                        x1="140"
                        y1="140"
                        x2="198"
                        y2="140"
                        stroke="#FFBF38"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        opacity="0.75"
                      />
                    </g>

                    {/* Central Luminous Golden Node */}
                    <circle cx="140" cy="140" r="9" fill="#FFBF38" opacity="0.25" />
                    <circle
                      cx="140"
                      cy="140"
                      r="4.5"
                      fill="#FFBF38"
                      stroke="#F7D57A"
                      strokeWidth="1.2"
                    />
                  </svg>

                  {/* Non-overlapping Active Direction Callout Pill (Single-Language) */}
                  <div
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#070A16]/90 border text-center whitespace-nowrap shadow-md"
                    style={{ borderColor: `${activeProfile.accentColor}66` }}
                  >
                    <span
                      className="text-xs font-serif font-bold mr-1.5"
                      style={{ color: activeProfile.accentColor }}
                    >
                      {t(activeProfile.englishName, activeProfile.hindiName)}
                    </span>
                    <span className="text-[10px] font-mono text-[#A6AFBF] uppercase tracking-wider">
                      {t(activeProfile.directionCode, activeProfile.directionCodeHi)}
                    </span>
                  </div>
                </div>

                {/* Animated Sinusoidal Waveform Section */}
                <div className="w-full max-w-xs sm:max-w-sm mt-2 flex flex-col items-center">
                  <div className="w-full h-10 flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 360 40"
                      className="w-full h-full overflow-visible"
                      aria-label={t(
                        `Visual waveform representation for ${activeProfile.waveformLabel}`,
                        `${activeProfile.waveformLabelHi} का तरंग रूप`
                      )}
                    >
                      {/* Faint baseline */}
                      <line
                        x1="0"
                        y1="20"
                        x2="360"
                        y2="20"
                        stroke="#526078"
                        strokeWidth="0.5"
                        strokeDasharray="2 3"
                        opacity="0.4"
                      />
                      {/* Secondary harmonic wave */}
                      <path
                        d={secondaryWavePath}
                        fill="none"
                        stroke={activeProfile.accentColor}
                        strokeWidth="1"
                        opacity="0.35"
                      />
                      {/* Primary luminous sinusoidal wave */}
                      <motion.path
                        d={primaryWavePath}
                        fill="none"
                        stroke={activeProfile.accentColor}
                        strokeWidth="2"
                        style={{
                          filter: `drop-shadow(0 0 6px ${activeProfile.accentColor}80)`
                        }}
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { opacity: [0.78, 1, 0.78], scaleY: [0.92, 1.06, 0.92] }
                        }
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                        }
                      />
                    </svg>
                  </div>
                  <span className="font-mono text-[10.5px] tracking-[0.18em] text-[#F7D57A] uppercase">
                    {t(activeProfile.waveformLabel, activeProfile.waveformLabelHi)}
                  </span>
                </div>
              </div>

              {/* Right Column (7 cols on lg): Profile Identity, Metadata Cards & Source Note */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Title, Direction Subtitle & Description (Single-Language) */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#070A16]/70 border border-[#526078]/40 mb-2">
                    <Compass className="w-3 h-3" style={{ color: activeProfile.accentColor }} />
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {t(
                        `PROFILE ${activeProfile.index}/8 · DIRECTION: ${activeProfile.directionFull.toUpperCase()}`,
                        `प्रोफ़ाइल ${activeProfile.index}/8 · दिशा: ${activeProfile.directionFullHi}`
                      )}
                    </span>
                  </div>

                  <h4
                    className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide leading-tight"
                    style={{ color: activeProfile.accentColor }}
                  >
                    {t(activeProfile.englishName, activeProfile.hindiName)}
                  </h4>

                  <p className="mt-1 text-base sm:text-lg font-serif font-medium text-[#F3F2F1] tracking-wide">
                    {t(
                      `Direction: ${activeProfile.directionFull}`,
                      `दिशा: ${activeProfile.directionFullHi}`
                    )}
                  </p>

                  <p className="mt-2 text-sm sm:text-[15px] text-[#F3F2F1]/90 font-serif leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {t(activeProfile.description, activeProfile.descriptionHi)}
                  </p>

                  {/* Source-Reference Line */}
                  <p className="mt-2 text-[11px] font-mono text-[#A6AFBF]/85 leading-snug">
                    {t(activeProfile.sourceReference, activeProfile.sourceReferenceHi)}
                  </p>
                </div>

                {/* Four Metadata Cards in 2-Column Grid */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {t('SHAKTI', 'शक्ति')}
                    </span>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {t(activeProfile.shakti, activeProfile.shaktiHi)}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {t('VAHANA', 'वाहन')}
                    </span>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {t(activeProfile.vahana, activeProfile.vahanaHi)}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {t('PLANET', 'ग्रह')}
                    </span>
                    <span className="mt-1 block font-serif text-sm sm:text-base font-semibold text-[#F3F2F1]">
                      {t(activeProfile.planet, activeProfile.planetHi)}
                    </span>
                  </div>

                  <div
                    className="p-3 sm:p-3.5 rounded-lg bg-[#070A16]/85 border transition-colors duration-300"
                    style={{ borderColor: `${activeProfile.accentColor}4D` }}
                  >
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                      {t('TONE (COSMIC OCTAVE)', 'स्वर (ब्रह्माण्डीय सप्तक)')}
                    </span>
                    <span
                      className="mt-1 block font-mono text-sm sm:text-base font-semibold"
                      style={{ color: activeProfile.accentColor }}
                    >
                      {activeProfile.toneHz}
                    </span>
                  </div>
                </div>

                {/* Profile Step Controls & Attribution Footer */}
                <div className="mt-4 pt-3 border-t border-[#526078]/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      aria-label={t('Previous Bhairava profile', 'पिछला भैरव प्रोफ़ाइल')}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#070A16]/80 border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      {t('Prev', 'पीछे')}
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      aria-label={t('Next Bhairava profile', 'अगला भैरव प्रोफ़ाइल')}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#070A16]/80 border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      {activeIndex === 7
                        ? t('Summary Mandala', 'मण्डल सारांश')
                        : t('Next', 'आगे')}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {onNextChapter && (
                      <button
                        type="button"
                        onClick={onNextChapter}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-[#102344]/55 border border-[#FFBF38]/45 text-[11px] font-mono text-[#FFBF38] hover:bg-[#FFBF38]/20 transition-colors cursor-pointer"
                      >
                        <Grid className="w-3 h-3" />
                        {t('Next Chapter: Bhairav Codex', 'अगला अध्याय: भैरव संहिता')}
                      </button>
                    )}
                  </div>

                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-[#A6AFBF]/75 uppercase">
                    {t(
                      'ASHTA BHAIRAVA ARCHIVE · TRADITIONAL & INTERPRETIVE MAPPING',
                      'अष्ट भैरव अभिलेखागार · पारंपरिक एवं व्याख्यात्मक मानचित्रण'
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* EIGHT-FORM SUMMARY SCREEN WITH KAAL BHAIRAV AT THE CENTER */
            <motion.div
              key={`ashta-bhairava-summary-${lang}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column (5 cols on lg): Complete 8-Direction Mandala with Kaal Bhairav at Center */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-68 h-68 sm:w-76 sm:h-76 flex items-center justify-center">
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full overflow-visible animate-[spin_60s_linear_infinite]"
                    role="img"
                    aria-label={t(
                      'Complete Ashta Bhairava directional mandala clock with Kaal Bhairava at the center',
                      'केंद्र में काल भैरव के साथ संपूर्ण अष्ट भैरव दिशात्मक मण्डल घड़ी'
                    )}
                  >
                    {/* Outer Clock Bezel & 60 Clock Ticks */}
                    <g
                      className="origin-[150px_150px] animate-[spin_45s_linear_infinite]"
                      style={{ transformOrigin: '150px 150px' }}
                    >
                      <circle
                        cx="150"
                        cy="150"
                        r="114"
                        fill="none"
                        stroke="#FFBF38"
                        strokeWidth="0.9"
                        opacity="0.45"
                      />
                      {Array.from({ length: 60 }, (_, i) => {
                        const deg = i * 6;
                        const rad = (deg * Math.PI) / 180;
                        const isMajor = i % 5 === 0;
                        const rInner = isMajor ? 107 : 110.5;
                        const rOuter = 114;
                        return (
                          <line
                            key={`summary-tick-${i}`}
                            x1={150 + Math.cos(rad) * rInner}
                            y1={150 + Math.sin(rad) * rInner}
                            x2={150 + Math.cos(rad) * rOuter}
                            y2={150 + Math.sin(rad) * rOuter}
                            stroke={isMajor ? '#FFBF38' : '#526078'}
                            strokeWidth={isMajor ? '1.1' : '0.6'}
                            opacity={isMajor ? '0.65' : '0.35'}
                          />
                        );
                      })}
                    </g>

                    {/* Inner Dashed Clock Ring */}
                    <g
                      className="origin-[150px_150px] animate-[spin_24s_linear_infinite]"
                      style={{ transformOrigin: '150px 150px' }}
                    >
                      <circle
                        cx="150"
                        cy="150"
                        r="82"
                        fill="none"
                        stroke="#526078"
                        strokeWidth="0.9"
                        strokeDasharray="4 4"
                        opacity="0.55"
                      />
                    </g>

                    {/* Eight Directional Spokes & Nodes Rotating Clockwise */}
                    <g
                      className="origin-[150px_150px] animate-[spin_30s_linear_infinite]"
                      style={{ transformOrigin: '150px 150px' }}
                    >
                      {ASHTA_BHAIRAVA_PROFILES.map((profile, idx) => {
                        const rad = (profile.compassAngle * Math.PI) / 180;
                        const xInner = 150 + Math.cos(rad) * 38;
                        const yInner = 150 + Math.sin(rad) * 38;
                        const xOuter = 150 + Math.cos(rad) * 114;
                        const yOuter = 150 + Math.sin(rad) * 114;
                        const xText = 150 + Math.cos(rad) * 136;
                        const yText = 150 + Math.sin(rad) * 136;

                        return (
                          <g
                            key={profile.id}
                            onClick={() => handleSelectProfile(idx)}
                            className="cursor-pointer"
                          >
                            <line
                              x1={xInner}
                              y1={yInner}
                              x2={xOuter}
                              y2={yOuter}
                              stroke={profile.accentColor}
                              strokeWidth="1.6"
                              opacity="0.85"
                            />
                            <circle
                              cx={xOuter}
                              cy={yOuter}
                              r="5.5"
                              fill={profile.accentColor}
                              stroke="#070A16"
                              strokeWidth="1.2"
                            />
                            <text
                              x={xText}
                              y={yText}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              fill={profile.accentColor}
                              fontSize="8.5"
                              fontWeight="700"
                              fontFamily="monospace"
                            >
                              {t(
                                `${profile.directionCode} · ${profile.shortTranslit}`,
                                `${profile.directionCodeHi} · ${profile.shortHindi}`
                              )}
                            </text>
                          </g>
                        );
                      })}
                    </g>

                    {/* Sweeping Clock Hand */}
                    <g
                      className="origin-[150px_150px] animate-[spin_12s_linear_infinite] pointer-events-none"
                      style={{ transformOrigin: '150px 150px' }}
                    >
                      <line
                        x1="150"
                        y1="150"
                        x2="150"
                        y2="46"
                        stroke="#FFBF38"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                      <circle cx="150" cy="46" r="2.4" fill="#FFBF38" />
                    </g>
                  </svg>

                  {/* Central Kaal Bhairav Sovereign Medallion (Single-Language) */}
                  <div className="absolute w-24 h-24 rounded-full bg-[#070A16] border-2 border-[#FFBF38] shadow-[0_0_25px_rgba(255,191,56,0.35)] flex flex-col items-center justify-center text-center px-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFBF38] mb-0.5" />
                    <span className="font-serif text-xs font-bold text-[#FFBF38] leading-tight">
                      {t('Kaal Bhairava', 'काल भैरव')}
                    </span>
                    <span className="font-mono text-[6.5px] text-[#A6AFBF] uppercase tracking-widest mt-1">
                      {t('CENTER AXIS', 'केंद्रीय धुरी')}
                    </span>
                  </div>
                </div>

                <p className="mt-2 font-mono text-[10px] text-[#F7D57A] tracking-[0.16em] uppercase text-center">
                  {t(
                    'Click any directional node or card to inspect its profile',
                    'प्रोफ़ाइल देखने के लिए किसी भी दिशात्मक बिंदु या कार्ड पर क्लिक करें'
                  )}
                </p>
              </div>

              {/* Right Column (7 cols on lg): Eight-Form Summary Grid + Kaal Bhairav Center Note */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="p-3.5 rounded-lg bg-[#070A16]/90 border border-[#FFBF38]/50 mb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#FFBF38]">
                        {t(
                          'SOVEREIGN CENTER · BEYOND THE EIGHT DIRECTIONS',
                          'सर्वोच्च केंद्र · आठों दिशाओं से परे'
                        )}
                      </span>
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-[#F3F2F1] mt-0.5">
                        {t(
                          'Kaal Bhairava — Supreme Axis of Time',
                          'काल भैरव — काल की सर्वोच्च केंद्रीय धुरी'
                        )}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/40 text-[#FFBF38]">
                      {t('KOTWAL OF KASHI', 'काशी के कोतवाल')}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-[13px] font-serif text-[#A6AFBF] leading-relaxed">
                    {t(
                      'All eight directional Bhairavas emanate from and guard the perimeter around Kaal Bhairava at the center—governor of time (Kala), dissolution, and liberation.',
                      'आठों दिशात्मक भैरव केंद्र में स्थित काल भैरव से ही प्रकट होते हैं और उनके चारों ओर की परिधि की रक्षा करते हैं—जो काल, लय और मुक्ति के अधिपति हैं।'
                    )}
                  </p>
                </div>

                {/* 8-Form Interactive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ASHTA_BHAIRAVA_PROFILES.map((profile, idx) => (
                    <button
                      key={profile.id}
                      type="button"
                      onClick={() => handleSelectProfile(idx)}
                      className="p-2.5 rounded-lg bg-[#070A16]/80 border text-left transition-all duration-200 hover:bg-[#102344]/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38]"
                      style={{ borderColor: `${profile.accentColor}55` }}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#070A16]"
                          style={{ color: profile.accentColor }}
                        >
                          {t(profile.directionCode, profile.directionCodeHi)}
                        </span>
                        <span className="font-mono text-[8.5px] text-[#A6AFBF]">
                          {profile.toneHz}
                        </span>
                      </div>
                      <p
                        className="mt-1.5 font-serif text-sm font-bold truncate"
                        style={{ color: profile.accentColor }}
                      >
                        {t(profile.shortTranslit, profile.hindiName)}
                      </p>
                      <p className="font-sans text-[11px] font-medium text-[#F3F2F1] truncate">
                        {t(profile.directionFull, profile.directionFullHi)}
                      </p>
                      <p className="mt-0.5 font-mono text-[9px] text-[#A6AFBF] truncate">
                        {t(
                          `${profile.shakti} · ${profile.vahana}`,
                          `${profile.shaktiHi} · ${profile.vahanaHi}`
                        )}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Footer Navigation */}
                <div className="mt-3 pt-2.5 border-t border-[#526078]/30 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSelectProfile(0)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#070A16] border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
                    >
                      {t('Explore 1/8: Asitanga Bhairava', 'देखें 1/8: असितांग भैरव')}
                    </button>
                    {onNextChapter && (
                      <button
                        type="button"
                        onClick={onNextChapter}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/60 text-xs font-mono text-[#FFBF38] hover:bg-[#FFBF38]/25 transition-colors cursor-pointer"
                      >
                        {t(
                          'Next Chapter: Bhairav Investigation Codex',
                          'अगला अध्याय: भैरव अन्वेषण संहिता'
                        )}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.15em] text-[#A6AFBF]/75 uppercase">
                    {t(
                      'Rudrayamala Tantra · Kashi & Tamil Temple Traditions',
                      'रुद्रयामल तंत्र · काशी एवं तमिल मंदिर परंपराएँ'
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
