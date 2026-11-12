import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Pause, RotateCcw, Search, Moon, Sun, Shield, Flame, Compass, Eye } from 'lucide-react';
import {
  TITHI_NITYA_DEVI_MOON_SEQUENCE,
  TITHI_NITYA_MASTER_MANDALA_IMAGE,
  YAKSHINI_36_INTRO_HI,
  YAKSHINI_36_LIST,
  VETALA_THREE_GUNAS_OVERVIEW,
  VETALA_PROFILES_LIST,
  VETALA_52_TYPES_LIST
} from '../data/tithiYakshiniVetalaData';

// ============================================================================
// HELPER SVG: SCIENTIFIC LUNAR PHASE RENDERER (0% NO MOON TO 100% FULL MOON)
// ============================================================================
const LunarPhaseDiskSvg: React.FC<{
  illuminationPercent: number;
  size?: number;
  accentColor?: string;
  isWaning?: boolean;
}> = ({ illuminationPercent, size = 64, accentColor = '#FDE047', isWaning = false }) => {
  const r = 42;
  const cx = 50;
  const cy = 50;
  const clamped = Math.max(0, Math.min(100, illuminationPercent));
  const f = clamped / 100; // 0 = No Moon, 0.5 = Half Moon, 1 = Full Moon

  // Terminator horizontal radius rx varies from r at f=0 to 0 at f=0.5 to r at f=1
  const rx = Math.abs(1 - 2 * f) * r;
  const sweepTerminator = f < 0.5 ? 0 : 1;

  // For waxing (right side illuminated):
  // Outer arc from top (50, 8) to bottom (50, 92) along right limb (sweep=1)
  // Terminator arc from bottom (50, 92) back to top (50, 8) with rx
  const litPathWaxing =
    clamped <= 1
      ? ''
      : clamped >= 99
      ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r} Z`
      : `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${rx} ${r} 0 0 ${sweepTerminator} ${cx} ${cy - r} Z`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="shrink-0 drop-shadow-[0_0_12px_rgba(253,224,71,0.28)]"
      style={{ transform: isWaning ? 'scaleX(-1)' : undefined }}
    >
      <circle cx={cx} cy={cy} r={r + 3} fill="none" stroke={accentColor} strokeWidth="1.2" opacity="0.45" />
      {/* Dark lunar disk base */}
      <circle cx={cx} cy={cy} r={r} fill="#0B0F17" stroke="#334155" strokeWidth="1" />
      {/* Subtle lunar maria craters on dark side */}
      <circle cx="36" cy="38" r="7" fill="#1E293B" opacity="0.45" />
      <circle cx="62" cy="44" r="9" fill="#1E293B" opacity="0.45" />
      <circle cx="45" cy="64" r="8" fill="#1E293B" opacity="0.45" />
      {/* Illuminated lunar portion */}
      {litPathWaxing && (
        <path d={litPathWaxing} fill="#FEF9C3" opacity="0.95" />
      )}
      {/* Subtle lunar texture on lit side */}
      {clamped > 5 && (
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.7" />
      )}
    </svg>
  );
};

// ============================================================================
// 1. SEAL 10 STUDIO: TITHI NITYĀ DEVĪ — MOON PHASE WISE (NO MOON TO FULL MOON)
// ============================================================================
export const TithiNityaDeviMoonStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedTithiIdx, setSelectedTithiIdx] = useState<number>(1); // Start on 1. Kameshwari (1st Crescent) or 0 (No Moon)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'moon-stage' | 'master-mandala' | 'all-16-gallery'>('moon-stage');

  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setSelectedTithiIdx(prev => (prev + 1) % TITHI_NITYA_DEVI_MOON_SEQUENCE.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeEntry =
    TITHI_NITYA_DEVI_MOON_SEQUENCE[selectedTithiIdx] || TITHI_NITYA_DEVI_MOON_SEQUENCE[1];

  // Coordinates of the 16 nodes on the inverted Kamakala Triangle SVG (420x390)
  // Right side ascending (1..5), Top horizontal bar right-to-left (6..10), Left side descending (11..15), Center Full Moon (16)
  const getTriangleNodeCoords = (tithiIndex: number): { x: number; y: number } => {
    if (tithiIndex === 0 || tithiIndex === 16) return { x: 210, y: 185 };
    // Bottom apex is (210, 340), Top-Right is (365, 85), Top-Left is (55, 85)
    if (tithiIndex >= 1 && tithiIndex <= 5) {
      // Right side from bottom-right (230, 325) up to top-right (365, 110)
      const frac = (tithiIndex - 1) / 4;
      return {
        x: 235 + frac * 130,
        y: 325 - frac * 205
      };
    }
    if (tithiIndex >= 6 && tithiIndex <= 10) {
      // Top horizontal bar from right (345, 72) to left (75, 72)
      const frac = (tithiIndex - 6) / 4;
      return {
        x: 345 - frac * 270,
        y: 72
      };
    }
    // Left side descending from (55, 120) down to bottom-left (185, 325)
    const frac = (tithiIndex - 11) / 4;
    return {
      x: 55 + frac * 130,
      y: 120 + frac * 205
    };
  };

  return (
    <div className="rounded-2xl border-2 border-[#F43F5E]/50 bg-gradient-to-b from-[#1A070B] via-[#120508] to-[#0B0305] text-[#F5E8CE] p-4 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)] space-y-6">
      {/* Studio Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#F43F5E]/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F43F5E]/15 border border-[#F43F5E]/40 mb-1.5">
            <Moon className="w-3.5 h-3.5 text-[#FDA4AF]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDA4AF] font-bold">
              {t(
                'SEAL 10 · ŚRĪVIDYĀ LUNAR KALĀ STUDIO (NO MOON TO FULL MOON)',
                'मुद्रिका १० · श्रीविद्या चन्द्र-कला अध्ययन कक्ष (अमावस्या से पूर्णिमा)'
              )}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
            {t(
              '॥ तिथि नित्या देवी ॥ — The 16 Tithi Nityā Goddesses by Moon Phase (No Moon → Full Moon)',
              '॥ तिथि नित्या देवी ॥ — अमावस्या से पूर्णिमा तक चन्द्र-कला क्रमानुसार १६ तिथि नित्या शक्तियाँ'
            )}
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#FECDD3]/85 mt-1 max-w-3xl">
            {t(
              'Scrub or step through the complete lunar cycle from No Moon (0% Amāvāsyā) and 1st Waxing Crescent (1. Kāmeśvarī) through Half Moon (8. Tvaritā) to Full Moon (15. Citrā & 16. Mahānityā Śrī Lalitā Tripurasundarī).',
              'अमावस्या (०% शून्य कला) और प्रतिपदा की प्रथम चन्द्र-कोर (१. कामेश्वरी) से लेकर अष्टमी अर्धचन्द्र (८. त्वरिता) और पूर्णिमा के पूर्ण चन्द्रमा (१५. चित्रा एवं १६. महानित्या श्री ललिता त्रिपुरसुन्दरी) तक प्रत्येक तिथि नित्या का दर्शन करें।'
            )}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('moon-stage')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'moon-stage'
                ? 'bg-[#F43F5E] text-white border-[#FDA4AF]'
                : 'bg-[#280A11] text-[#FDA4AF] border-[#F43F5E]/40 hover:border-[#FDA4AF]'
            }`}
          >
            {t('1. Moon-Phase Simulator', '१. चन्द्र-कला सिम्युलेटर')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('master-mandala')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'master-mandala'
                ? 'bg-[#F43F5E] text-white border-[#FDA4AF]'
                : 'bg-[#280A11] text-[#FDA4AF] border-[#F43F5E]/40 hover:border-[#FDA4AF]'
            }`}
          >
            {t('2. Master Triangle Chart', '२. मूल त्रिकोण मण्डल चित्र')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all-16-gallery')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'all-16-gallery'
                ? 'bg-[#F43F5E] text-white border-[#FDA4AF]'
                : 'bg-[#280A11] text-[#FDA4AF] border-[#F43F5E]/40 hover:border-[#FDA4AF]'
            }`}
          >
            {t('3. All 16 Moon-Phase Cards', '३. सभी १६ तिथि-नित्या फलक')}
          </button>
        </div>
      </div>

      {/* ====================================================================
          INTERACTIVE MOON-PHASE PROGRESSION BAR (NO MOON 0% -> FULL MOON 100%)
         ==================================================================== */}
      <div className="rounded-xl border border-[#F43F5E]/35 bg-[#140408]/95 p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDA4AF] font-bold">
              {t('MOON PHASE PROGRESSION (NO MOON → FULL MOON):', 'चन्द्र-कला विकास क्रम (अमावस्या → पूर्णिमा):')}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-[#F43F5E]/20 border border-[#F43F5E]/50 font-mono text-xs text-[#FDE047] font-bold">
              {activeEntry.code} · {activeEntry.illuminationPercent}% {t('Illuminated', 'चन्द्र-आलोक')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(p => !p)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F43F5E] hover:bg-[#E11D48] text-white font-mono text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer shadow"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? t('Pause Cycle', 'रोकें') : t('Auto-Wax Moon (0→16)', 'चन्द्र-कला चलाएँ')}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setSelectedTithiIdx(0);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#280A11] hover:bg-[#3B0F19] border border-[#F43F5E]/40 text-[#FDA4AF] font-mono text-[10px] uppercase tracking-wider cursor-pointer"
              title={t('Reset to No Moon (Amāvāsyā)', 'अमावस्या से पुनः आरंभ करें')}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('No Moon (0%)', 'अमावस्या (०%)')}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setSelectedTithiIdx(16);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#280A11] hover:bg-[#3B0F19] border border-[#FDE047]/50 text-[#FDE047] font-mono text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{t('Full Moon (100%)', 'पूर्णिमा (१००%)')}</span>
            </button>
          </div>
        </div>

        {/* Continuous Range Slider */}
        <div className="space-y-1.5">
          <input
            type="range"
            min={0}
            max={16}
            step={1}
            value={selectedTithiIdx}
            aria-label={t('Select Lunar Tithi Phase from 0 (No Moon) to 16 (Full Moon Mahānityā)', 'अमावस्या (0) से पूर्णिमा महानित्या (16) तक चन्द्र-कला चुनें')}
            onChange={e => {
              setIsPlaying(false);
              setSelectedTithiIdx(Number(e.target.value));
            }}
            className="w-full accent-[#F43F5E] cursor-pointer h-2 rounded-lg bg-[#2D0B13]"
          />
          <div className="flex justify-between font-mono text-[9px] text-[#FDA4AF]/80 uppercase tracking-wider">
            <span>🌑 {t('0: No Moon (Amāvāsyā)', '०: अमावस्या (शून्य कला)')}</span>
            <span>🌒 {t('1: Pratipadā (Kāmeśvarī)', '१: प्रतिपदा (कामेश्वरी)')}</span>
            <span>🌓 {t('8: Aṣṭamī Half Moon (Tvaritā)', '८: अष्टमी अर्धचन्द्र (त्वरिता)')}</span>
            <span>🌕 {t('16: Full Moon (Mahānityā Lalitā)', '१६: पूर्णिमा (महानित्या ललिता)')}</span>
          </div>
        </div>

        {/* 17 Interactive Moon-Phase Medallion Strip (0 to 16) */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-17 gap-1.5 pt-1">
          {TITHI_NITYA_DEVI_MOON_SEQUENCE.map((item, idx) => {
            const isSelected = idx === selectedTithiIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedTithiIdx(idx);
                }}
                className={`p-1.5 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#3D0D18] border-[#FDE047] shadow-[0_0_16px_rgba(253,224,71,0.35)] scale-105'
                    : 'bg-[#1C060B] border-white/10 hover:border-[#F43F5E]/60 opacity-85 hover:opacity-100'
                }`}
              >
                <LunarPhaseDiskSvg
                  illuminationPercent={item.illuminationPercent}
                  size={28}
                  accentColor={isSelected ? '#FDE047' : '#FDA4AF'}
                />
                <span className="font-mono text-[8.5px] font-bold text-[#FDE047] mt-1">
                  {idx === 0 ? '00' : idx === 16 ? '16★' : String(idx).padStart(2, '0')}
                </span>
                <span className="font-serif text-[9.5px] text-white truncate w-full leading-tight">
                  {idx === 0
                    ? t('No Moon', 'अमावस्या')
                    : idx === 16
                    ? t('Mahānityā', 'महानित्या')
                    : t(item.nameEn.replace(/^\d+\.\s*/, '').split(' ')[0], item.nameHi.replace(/^[०-९]+\.\s*/, '').split(' ')[0])}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
          VIEW MODE 1: INTERACTIVE MOON-PHASE STAGE + TRIANGLE MANDALA + PORTRAIT
         ==================================================================== */}
      {viewMode === 'moon-stage' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Consecrated Portrait Card with Dual Lunar Orbs */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-[#D3AD55]/60 bg-[#120407] overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-[#1F070D] border-b border-[#D3AD55]/35 flex items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
                  {activeEntry.code}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {activeEntry.sanskritTitle} · {t(activeEntry.nameEn, activeEntry.nameHi)}
                </h4>
              </div>
              <div className="flex items-center gap-1.5">
                <LunarPhaseDiskSvg
                  illuminationPercent={activeEntry.illuminationPercent}
                  size={38}
                  accentColor="#FDE047"
                />
              </div>
            </div>

            <div className="p-3 bg-[#090204] flex items-center justify-center relative">
              <img
                src={activeEntry.imagePath}
                alt={t(activeEntry.nameEn, activeEntry.nameHi)}
                className="w-full max-h-[470px] object-contain rounded-xl border border-[#D3AD55]/35 shadow-lg"
              />
            </div>

            <div className="p-4 bg-[#18060A] border-t border-[#D3AD55]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDA4AF] block">
                  {t('MOON PHASE STAGE', 'चन्द्र-कला अवस्था')}
                </span>
                <span className="font-serif font-semibold text-[#FDE047]">
                  {t(activeEntry.moonPhaseStageEn, activeEntry.moonPhaseStageHi)}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDA4AF] block">
                  {t('PAÑCADAŚĪ / ṢOḌAŚĪ BĪJA', 'पञ्चदशी / षोडशी अक्षर')}
                </span>
                <span className="font-serif font-bold text-base text-white">
                  {t(activeEntry.panchadashiSyllableEn, activeEntry.panchadashiSyllableHi)}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Kāmakalā Triangle SVG + Detailed Dossier */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top Card: Interactive Kāmakalā Triangle & Dual Lunar Phase Dials */}
            <div className="rounded-2xl border border-[#F43F5E]/35 bg-[#160509] p-4 sm:p-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Interactive Kāmakalā Triangle SVG */}
                <div className="md:col-span-7 flex flex-col items-center">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#FDA4AF] mb-1">
                    {t('CLICK ANY NODE ON THE KĀMAKALĀ TRIANGLE', 'त्रिकोण के किसी भी बिन्दु पर क्लिक करें')}
                  </span>
                  <svg viewBox="0 0 420 380" className="w-full max-w-[350px] h-auto">
                    <defs>
                      <radialGradient id="fullMoonCenterGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.45" />
                        <stop offset="65%" stopColor="#F43F5E" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Outer Sacred Circle */}
                    <circle cx="210" cy="195" r="175" fill="url(#fullMoonCenterGlow)" stroke="#F43F5E" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" />

                    {/* Inverted Red Kamakala Triangle */}
                    <polygon
                      points="45,90 375,90 210,345"
                      fill="rgba(225,29,72,0.12)"
                      stroke="#EF4444"
                      strokeWidth="3"
                    />
                    <polygon
                      points="60,100 360,100 210,328"
                      fill="none"
                      stroke="#FDE047"
                      strokeWidth="0.9"
                      strokeDasharray="3 3"
                      opacity="0.65"
                    />

                    {/* Side Labels (3 Kutas) */}
                    <text x="210" y="42" textAnchor="middle" fill="#FDE047" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                      {t('TOP: KĀMARĀJA KŪṬA (06–10)', 'ऊपरी भुजा: कामराज कूट (०६–१०)')}
                    </text>
                    <text x="330" y="245" textAnchor="middle" fill="#FDA4AF" fontSize="8.5" fontFamily="monospace" transform="rotate(-56 330 245)">
                      {t('VĀGBHAVA (01–05)', 'वाग्भव कूट (०१–०५)')}
                    </text>
                    <text x="90" y="245" textAnchor="middle" fill="#FDA4AF" fontSize="8.5" fontFamily="monospace" transform="rotate(56 90 245)">
                      {t('ŚAKTI KŪṬA (11–15)', 'शक्ति कूट (११–१५)')}
                    </text>

                    {/* Central Full Moon Bindu (16th Mahanitya) */}
                    <g
                      onClick={() => {
                        setIsPlaying(false);
                        setSelectedTithiIdx(16);
                      }}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="210"
                        cy="185"
                        r={selectedTithiIdx === 16 ? 40 : 35}
                        fill="#FEF9C3"
                        stroke={selectedTithiIdx === 16 ? '#F43F5E' : '#D3AD55'}
                        strokeWidth={selectedTithiIdx === 16 ? '3.5' : '2'}
                        opacity="0.95"
                      />
                      <circle cx="210" cy="185" r="5" fill="#DC2626" />
                      <text x="210" y="175" textAnchor="middle" fill="#7F1D1D" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                        16 · PŪRṆIMĀ
                      </text>
                      <text x="210" y="202" textAnchor="middle" fill="#991B1B" fontSize="9.5" fontFamily="serif" fontWeight="bold">
                        ॥ महानित्या ॥
                      </text>
                    </g>

                    {/* 15 Perimeter Tithi Nitya Nodes */}
                    {TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex >= 1 && d.tithiIndex <= 15).map(node => {
                      const pos = getTriangleNodeCoords(node.tithiIndex);
                      const isActive = selectedTithiIdx === node.tithiIndex;
                      return (
                        <g
                          key={node.id}
                          onClick={() => {
                            setIsPlaying(false);
                            setSelectedTithiIdx(node.tithiIndex);
                          }}
                          className="cursor-pointer"
                        >
                          {isActive && (
                            <circle
                              cx={pos.x}
                              cy={pos.y}
                              r="19"
                              fill="none"
                              stroke="#FDE047"
                              strokeWidth="2"
                              strokeDasharray="2 2"
                            />
                          )}
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={isActive ? 14 : 11}
                            fill={isActive ? '#FDE047' : '#2A0810'}
                            stroke={isActive ? '#FFFFFF' : '#F43F5E'}
                            strokeWidth="1.8"
                          />
                          <text
                            x={pos.x}
                            y={pos.y + 3.5}
                            textAnchor="middle"
                            fill={isActive ? '#140408' : '#FDE047'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            {String(node.tithiIndex).padStart(2, '0')}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Dual Lunar Orbs Explanation (Waxing Sukla vs Waning Krsna) */}
                <div className="md:col-span-5 space-y-3 rounded-xl border border-[#D3AD55]/30 bg-[#110306] p-3.5">
                  <div className="text-center border-b border-white/10 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDE047] font-bold block">
                      {t('DUAL LUNAR SPHERES ON CARD', 'चित्र के दोनों कोनों के चन्द्र-बिम्ब')}
                    </span>
                    <span className="font-serif text-xs text-[#FECDD3]/90">
                      {t(activeEntry.tithiNameEn, activeEntry.tithiNameHi)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-[#1B060B] border border-white/10 flex flex-col items-center">
                      <LunarPhaseDiskSvg
                        illuminationPercent={activeEntry.illuminationPercent}
                        size={48}
                        accentColor="#FDE047"
                        isWaning={false}
                      />
                      <span className="font-mono text-[8.5px] uppercase text-[#FDE047] mt-1.5 font-bold">
                        {t('Śukla Pakṣa', 'शुक्ल पक्ष (वर्धमान)')}
                      </span>
                      <span className="font-serif text-[10px] text-[#F5E8CE]/80">
                        {t('No Moon → Full', 'अमावस्या → पूर्णिमा')}
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#1B060B] border border-white/10 flex flex-col items-center">
                      <LunarPhaseDiskSvg
                        illuminationPercent={activeEntry.illuminationPercent}
                        size={48}
                        accentColor="#38BDF8"
                        isWaning={true}
                      />
                      <span className="font-mono text-[8.5px] uppercase text-[#38BDF8] mt-1.5 font-bold">
                        {t('Kṛṣṇa Pakṣa', 'कृष्ण पक्ष (ह्रासमान)')}
                      </span>
                      <span className="font-serif text-[10px] text-[#F5E8CE]/80">
                        {t('Full → No Moon', 'पूर्णिमा → अमावस्या')}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-serif text-[#F5E8CE]/85 leading-relaxed pt-1 border-t border-white/10">
                    <strong className="text-[#FDE047]">{t('Triangle Position:', 'त्रिकोण स्थान:')}</strong>{' '}
                    {t(activeEntry.triangleZoneEn, activeEntry.triangleZoneHi)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Mantra, Iconography & Theological Significance */}
            <div className="rounded-2xl border border-[#D3AD55]/45 bg-[#1A070C] p-5 space-y-4">
              {/* Specific Lunar Tithi Mapping Banner */}
              {activeEntry.tithiMappingEn && (
                <div className="p-3.5 rounded-xl bg-[#2B0812] border-2 border-[#FDE047]/65 space-y-1 shadow-md">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#FDE047] font-bold block">
                    {t(
                      'SPECIFIC LUNAR TITHI MAPPING (1ST–15TH NITYĀ DEVĪ):',
                      'चन्द्र-तिथि से नित्या देवी का विशिष्ट संबंध (१ली–१५वीं तिथि):'
                    )}
                  </span>
                  <div className="font-serif text-sm sm:text-base font-bold text-white">
                    {t(activeEntry.tithiMappingEn, activeEntry.tithiMappingHi || activeEntry.tithiMappingEn)}
                  </div>
                </div>
              )}

              {/* Consecrated Mantra Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#280911] via-[#380C18] to-[#280911] border border-[#FDE047]/45 space-y-1">
                <div className="flex items-center justify-between text-[9.5px] font-mono uppercase tracking-wider text-[#FDE047]">
                  <span className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
                    {t('CONSECRATED NITYĀ MŪLA MANTRA', 'तिथि नित्या मूल मंत्र एवं पञ्चदशी अक्षर')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[#FDA4AF]">
                    {activeEntry.panchadashiKuta}
                  </span>
                </div>
                <div className="font-serif text-base sm:text-lg font-bold text-[#FEF08A] tracking-wide">
                  {activeEntry.mulaMantraHi}
                </div>
                <div className="font-mono text-xs text-[#FECDD3]/90">
                  {activeEntry.mulaMantraEn}
                </div>
              </div>

              {/* Iconographic Attributes & Theological Meaning */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-[#120407] border border-white/10 space-y-1.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDA4AF] font-bold block">
                    {t(`ICONOGRAPHY (${activeEntry.armsCount} ARMS)`, `प्रतिमाशास्त्र (${activeEntry.armsCount} भुजाएँ एवं आयुध)`)}
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-[#F5E8CE]/90 leading-relaxed">
                    {t(activeEntry.iconographyEn, activeEntry.iconographyHi)}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#120407] border border-white/10 space-y-1.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDE047] font-bold block">
                    {t('ŚRĪVIDYĀ LUNAR KALĀ SIGNIFICANCE', 'श्रीविद्या चन्द्र-कला तत्त्वज्ञान')}
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-[#F5E8CE]/90 leading-relaxed">
                    {t(activeEntry.significanceEn, activeEntry.significanceHi)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          DEDICATED 15-NITYĀ LUNAR TITHI MAPPING CONCORDANCE STRIP
         ==================================================================== */}
      <div className="rounded-2xl border border-[#D3AD55]/45 bg-[#140408]/95 p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F43F5E]/30 pb-2.5">
          <div>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
              {t(
                'CANONICAL 15 LUNAR TITHI MAPPING (CLICK ANY TITHI TO INSPECT)',
                'पन्द्रह तिथि नित्या देवियों का चन्द्र-तिथियों से विशिष्ट संबंध (किसी भी तिथि पर क्लिक करें)'
              )}
            </span>
            <h4 className="font-serif text-base sm:text-lg font-bold text-white">
              {t(
                'The Specific Mapping of the Fifteen Nitya Devis to the Lunar Tithis (1st Tithi to 15th Tithi)',
                '१ली तिथि (कामेश्वरी) से १५वीं तिथि (चित्रा) तक १५ नित्या देवियों का विशिष्ट स्वरूप'
              )}
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex >= 1 && d.tithiIndex <= 15).map(d => {
            const isSelected = d.tithiIndex === selectedTithiIdx;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedTithiIdx(d.tithiIndex);
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                  isSelected
                    ? 'bg-[#350B15] border-[#FDE047] shadow-md'
                    : 'bg-[#1B060B]/90 border-white/10 hover:border-[#F43F5E]/60'
                }`}
              >
                <LunarPhaseDiskSvg
                  illuminationPercent={d.illuminationPercent}
                  size={28}
                  accentColor={isSelected ? '#FDE047' : '#FDA4AF'}
                />
                <div className="min-w-0">
                  <div className="font-serif text-xs sm:text-[13px] font-bold text-[#FEF08A] leading-snug">
                    {t(d.tithiMappingEn || d.nameEn, d.tithiMappingHi || d.nameHi)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
          VIEW MODE 2: MASTER TRIANGLE MANDALA CHART (॥ तिथि नित्या देवि ॥)
         ==================================================================== */}
      {viewMode === 'master-mandala' && (
        <div className="rounded-2xl border-2 border-[#D3AD55]/60 bg-[#120407] p-4 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3AD55]/30 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
                {t('MASTER KĀMAKALĀ TRIANGLE MANDALA PLATE', 'मूल काम-कला त्रिकोण मण्डल फलक')}
              </span>
              <h4 className="font-serif text-xl font-bold text-white">
                {t(
                  '॥ तिथि नित्या देवि ॥ — The 15 Tithi Nityās Around the Triangle & 16th Mahānityā at the Full-Moon Center',
                  '॥ तिथि नित्या देवि ॥ — त्रिकोण की तीनों भुजाओं पर १५ तिथि नित्याएँ एवं मध्य पूर्ण-चन्द्र में १६वीं महानित्या'
                )}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('all-16-gallery')}
              className="px-3 py-1.5 rounded-lg bg-[#F43F5E] text-white font-mono text-[10px] uppercase tracking-wider font-bold cursor-pointer"
            >
              {t('View All 16 Individual Portraits →', 'सभी १६ देवियों के स्वतंत्र चित्र देखें →')}
            </button>
          </div>

          <div className="flex justify-center bg-[#080203] p-3 rounded-xl border border-[#D3AD55]/30">
            <img
              src={TITHI_NITYA_MASTER_MANDALA_IMAGE}
              alt="Tithi Nitya Devi Master Triangle Mandala"
              className="w-full max-w-3xl max-h-[760px] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ====================================================================
          VIEW MODE 3: ALL 16 TITHI NITYĀ DEVĪ PORTRAITS IN MOON-PHASE ORDER
         ==================================================================== */}
      {viewMode === 'all-16-gallery' && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F43F5E]/30 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
                {t('COMPLETE MOON-PHASE GALLERY (01 PRATIPADĀ TO 16 PŪRṆIMĀ)', 'अमावस्या/प्रतिपदा (०१) से पूर्णिमा (१६) तक क्रमानुसार सम्पूर्ण चित्र-दीर्घा')}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                {t(
                  'All 16 Tithi Nityā Devīs Ordered by Waxing Lunar Phase (From 1st Sliver to Full Moon)',
                  'चन्द्र-कला क्रमानुसार १६ तिथि नित्या देवियाँ (प्रथम चन्द्र-कोर से पूर्ण चन्द्रमा तक)'
                )}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex >= 1).map(item => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedTithiIdx(item.tithiIndex);
                  setViewMode('moon-stage');
                }}
                className="group rounded-xl border border-[#D3AD55]/45 bg-[#160509] hover:border-[#FDE047] overflow-hidden flex flex-col justify-between transition-all cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="px-3.5 py-2.5 bg-[#22070E] border-b border-[#D3AD55]/30 flex items-center justify-between gap-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDE047] font-bold block">
                        {item.code}
                      </span>
                      <span className="font-serif text-sm font-bold text-white">
                        {item.sanskritTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] text-[#FDA4AF] font-bold">
                        {item.illuminationPercent}%
                      </span>
                      <LunarPhaseDiskSvg
                        illuminationPercent={item.illuminationPercent}
                        size={28}
                        accentColor="#FDE047"
                      />
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#090204] flex items-center justify-center">
                    <img
                      src={item.imagePath}
                      alt={t(item.nameEn, item.nameHi)}
                      loading="lazy"
                      className="w-full h-72 object-contain rounded border border-white/10 group-hover:scale-[1.02] transition-transform"
                    />
                  </div>

                  <div className="p-3.5 space-y-2">
                    <div className="font-serif text-base font-bold text-[#FDE047]">
                      {t(item.nameEn, item.nameHi)}
                    </div>
                    {item.tithiMappingEn && (
                      <div className="p-2 rounded bg-[#280810] border border-[#FDE047]/45 font-serif text-xs font-semibold text-white">
                        {t(item.tithiMappingEn, item.tithiMappingHi || item.tithiMappingEn)}
                      </div>
                    )}
                    <div className="font-mono text-[10px] text-[#FDA4AF]">
                      {t(item.moonPhaseStageEn, item.moonPhaseStageHi)}
                    </div>
                    <div className="p-2 rounded bg-[#0E0306] border border-[#D3AD55]/30 font-serif text-xs text-[#FEF08A]">
                      {item.mulaMantraHi}
                    </div>
                    <p className="font-serif text-xs text-[#F5E8CE]/85 line-clamp-3 leading-relaxed">
                      {t(item.iconographyEn, item.iconographyHi)}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-2 bg-[#1F070D] border-t border-white/10 flex items-center justify-between font-mono text-[9px] text-[#FDE047] uppercase">
                  <span>{t('Syllable:', 'बीजाक्षर:')} {item.panchadashiSyllableHi}</span>
                  <span>{t('Inspect in Simulator →', 'सिम्युलेटर में देखें →')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. SEAL 11 STUDIO: 36 YAKṢIṆĪS (36 यक्षिणियाँ — UDDĀMEŚVARA & TANTRARĀJA TANTRA)
// ============================================================================
export const Yakshini36MandalaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'wish-wealth' | 'alchemy-Rasayana' | 'astral-occult' | 'attraction-siddhi'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);
  const activeYakshini = YAKSHINI_36_LIST[selectedIndex] || YAKSHINI_36_LIST[0];

  const filteredList = YAKSHINI_36_LIST.filter(item => {
    const matchesCat = categoryFilter === 'all' || item.categoryGroup === categoryFilter;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCat;
    return (
      matchesCat &&
      (item.nameHi.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.mantraHi.toLowerCase().includes(q) ||
        item.siddhiAndBoonsHi.toLowerCase().includes(q) ||
        item.siddhiAndBoonsEn.toLowerCase().includes(q) ||
        String(item.index) === q)
    );
  });

  return (
    <div className="rounded-2xl border-2 border-[#10B981]/50 bg-gradient-to-b from-[#061A14] via-[#04120E] to-[#020B08] text-[#F5E8CE] p-4 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)] space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#10B981]/30">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#34D399] font-bold block">
            {YAKSHINI_36_INTRO_HI.headerBadge}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mt-0.5">
            {t(
              '36 Yakṣiṇīs (36 यक्षिणियाँ): Uddāmeśvara Tantra & Tantrarāja Tantra Interactive Studio',
              '36 यक्षिणियाँ (उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र) — संवादात्मक मंत्र एवं साधना मण्डल'
            )}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 font-mono text-[10px] text-[#34D399] uppercase tracking-wider font-bold">
          {t('36 Yakṣiṇīs · Complete Verbatim Codex', '३६ यक्षिणियाँ · संपूर्ण मूल पाठ एवं मंत्र')}
        </span>
      </div>

      {/* Introductory Scriptural Box (Uddameshwara & Tantraraja Tantra) */}
      <div className="rounded-xl border border-[#10B981]/35 bg-[#072219]/85 p-4 sm:p-5 space-y-2.5">
        {YAKSHINI_36_INTRO_HI.paragraphs.map((p, i) => (
          <p key={i} className="font-serif text-xs sm:text-sm text-[#ECFDF5]/90 leading-relaxed">
            {p}
          </p>
        ))}
        <div className="pt-2 border-t border-[#10B981]/30 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#34D399] font-bold">
            {t('TANTRARĀJA TANTRA ALTERNATIVE MANTRA FORMULA:', 'तंत्रराज तंत्र से वैकल्पिक मंत्र सूत्र:')}
          </span>
          <span className="px-3 py-1 rounded bg-[#03110C] border border-[#FDE047]/45 font-serif text-sm sm:text-base font-bold text-[#FDE047]">
            {YAKSHINI_36_INTRO_HI.tantrarajaFormulaHi}
          </span>
        </div>
      </div>

      {/* Interactive 36-Node Wheel + Selected Yakshini Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: 36-Spoke Uddameshwara-Kubera Mandala SVG */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[370px] aspect-square rounded-2xl border border-[#10B981]/35 bg-[#030F0B] p-3 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <radialGradient id="yakshiniEmeraldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#020B08" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="185" fill="url(#yakshiniEmeraldGlow)" stroke="#10B981" strokeWidth="1" opacity="0.4" />
              <circle cx="200" cy="200" r="152" fill="none" stroke="#34D399" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.5" />
              <circle cx="200" cy="200" r="95" fill="none" stroke="#FDE047" strokeWidth="0.8" opacity="0.4" />

              {/* Octagram of Kubera's Treasury */}
              <rect x="132" y="132" width="136" height="136" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.45" />
              <rect x="132" y="132" width="136" height="136" fill="none" stroke="#FDE047" strokeWidth="1" opacity="0.45" transform="rotate(45 200 200)" />

              {/* 36 Yakshini Nodes Around the Outer Ring */}
              {YAKSHINI_36_LIST.map((item, idx) => {
                const angle = ((idx * 360) / 36 - 90) * (Math.PI / 180);
                const r = 152;
                const x = 200 + Math.cos(angle) * r;
                const y = 200 + Math.sin(angle) * r;
                const isSelected = idx === selectedIndex;
                return (
                  <g
                    key={item.index}
                    onClick={() => setSelectedIndex(idx)}
                    className="cursor-pointer"
                  >
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={isSelected ? '#FDE047' : '#10B981'}
                      strokeWidth={isSelected ? '1.8' : '0.45'}
                      opacity={isSelected ? '0.9' : '0.28'}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 11.5 : 8}
                      fill={isSelected ? '#FDE047' : '#06281E'}
                      stroke={isSelected ? '#FFFFFF' : '#34D399'}
                      strokeWidth={isSelected ? '2' : '1'}
                    />
                    <text
                      x={x}
                      y={y + 3}
                      textAnchor="middle"
                      fill={isSelected ? '#020B08' : '#A7F3D0'}
                      fontSize={isSelected ? '8.5' : '7'}
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {item.index}
                    </text>
                  </g>
                );
              })}

              {/* Center Bindu: Shiva Uddameshwara & Kubera */}
              <circle cx="200" cy="200" r="46" fill="#052E22" stroke="#FDE047" strokeWidth="2" />
              <text x="200" y="192" textAnchor="middle" fill="#FDE047" fontSize="11" fontFamily="serif" fontWeight="bold">
                उद्दामेश्वर
              </text>
              <text x="200" y="207" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="serif">
                ३६ यक्षिणियाँ
              </text>
              <text x="200" y="220" textAnchor="middle" fill="#6EE7B7" fontSize="8" fontFamily="monospace">
                #{String(activeYakshini.index).padStart(2, '0')} / 36
              </text>
            </svg>
          </div>
        </div>

        {/* Right: Active Yakshini Complete Dossier */}
        <div className="lg:col-span-7 rounded-2xl border-2 border-[#10B981]/50 bg-[#072118] p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#10B981]/30 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#34D399] font-bold block">
                {t(`YAKṢIṆĪ #${String(activeYakshini.index).padStart(2, '0')} OF 36`, `यक्षिणी क्र. (${activeYakshini.index}) / ३६`)}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                ({activeYakshini.index}) {activeYakshini.nameHi} · {activeYakshini.nameEn}
              </h4>
            </div>
            <span className="px-3 py-1 rounded-lg bg-[#03120D] border border-[#FDE047]/50 font-mono text-xs text-[#FDE047] font-bold">
              {t('Japa:', 'जप संख्या:')} {activeYakshini.japaCount}
            </span>
          </div>

          {/* Verbatim Hindi Paragraph from User Request */}
          <div className="p-4 rounded-xl bg-[#04150F] border border-[#10B981]/40 space-y-2">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#6EE7B7] font-bold block">
              {t('COMPLETE SCRIPTURAL ENTRY (मूल उद्दामेश्वर तंत्र विवरण):', 'मूल पाठ विवरण (उद्दामेश्वर तंत्र):')}
            </span>
            <p className="font-serif text-sm sm:text-base text-white leading-relaxed">
              {activeYakshini.fullTextHi}
            </p>
            {lang === 'en' && (
              <p className="font-serif text-xs sm:text-sm text-[#A7F3D0]/90 leading-relaxed pt-1 border-t border-white/10">
                {activeYakshini.fullTextEn}
              </p>
            )}
          </div>

          {/* Mantra Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#092C20] via-[#0D3B2B] to-[#092C20] border border-[#FDE047]/50 space-y-1.5">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDE047] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
              {t('CONSECRATED MANTRA (मंत्र):', 'मूल यक्षिणी मंत्र:')}
            </span>
            <div className="font-serif text-base sm:text-xl font-bold text-[#FEF08A]">
              {activeYakshini.mantraHi}
            </div>
            <div className="font-mono text-xs text-[#A7F3D0]">
              {activeYakshini.mantraEn}
            </div>
          </div>

          {/* Ritual Locus & Bestowed Siddhi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl bg-[#04150F] border border-white/10">
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#34D399] font-bold block mb-1">
                {t('RITUAL LOCUS & OFFERINGS (साधना स्थल एवं सामग्री)', 'साधना विधि, स्थल एवं हविष्य')}
              </span>
              <p className="font-serif text-xs sm:text-sm text-[#ECFDF5]/90 leading-relaxed">
                {t(activeYakshini.locusAndMaterialsEn, activeYakshini.locusAndMaterialsHi)}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#04150F] border border-white/10">
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDE047] font-bold block mb-1">
                {t('BESTOWED SIDDHI & BOONS (प्राप्त सिद्धि एवं फल)', 'प्राप्त सिद्धि एवं फल')}
              </span>
              <p className="font-serif text-xs sm:text-sm text-[#FEF08A]/95 leading-relaxed">
                {t(activeYakshini.siddhiAndBoonsEn, activeYakshini.siddhiAndBoonsHi)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar for All 36 Yakshinis */}
      <div className="pt-4 border-t border-[#10B981]/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', labelEn: 'All 36 Yakṣiṇīs', labelHi: 'सभी ३६ यक्षिणियाँ' },
              { id: 'wish-wealth', labelEn: 'Wealth & Wishes', labelHi: 'मनोकामना एवं स्वर्ण-धन' },
              { id: 'alchemy-Rasayana', labelEn: 'Rasāyana & Añjana Salve', labelHi: 'रसायन, औषधि एवं अंजन सिद्धि' },
              { id: 'astral-occult', labelEn: 'Khaḍga, Pādukā & Astral', labelHi: 'खड्ग, पादुका एवं पाताल सिद्धि' },
              { id: 'attraction-siddhi', labelEn: 'Enchantment & Beauty', labelHi: 'सम्मोहन एवं सौंदर्य' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCategoryFilter(tab.id as typeof categoryFilter)}
                className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
                  categoryFilter === tab.id
                    ? 'bg-[#10B981] text-[#020B08] border-[#6EE7B7]'
                    : 'bg-[#072118] text-[#A7F3D0] border-[#10B981]/35 hover:border-[#6EE7B7]'
                }`}
              >
                {t(tab.labelEn, tab.labelHi)}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#34D399] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('Search 1–36 by name, mantra, siddhi...', 'नाम, मंत्र या सिद्धि से खोजें (1–36)...')}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#04150F] border border-[#10B981]/40 text-xs text-white placeholder-[#6EE7B7]/50 focus:outline-none focus:border-[#FDE047]"
            />
          </div>
        </div>

        {/* Complete 36 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[620px] overflow-y-auto pr-1">
          {filteredList.map(item => {
            const isSelected = item.index - 1 === selectedIndex;
            return (
              <div
                key={item.index}
                onClick={() => setSelectedIndex(item.index - 1)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                  isSelected
                    ? 'bg-[#0B3527] border-[#FDE047] shadow-lg'
                    : 'bg-[#061C15] border-[#10B981]/30 hover:border-[#34D399]'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-base font-bold text-[#FDE047]">
                      ({item.index}) {item.nameHi}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/40 font-mono text-[9px] text-[#6EE7B7]">
                      {item.japaCount}
                    </span>
                  </div>
                  <p className="font-serif text-xs text-white/95 leading-relaxed">
                    {item.fullTextHi}
                  </p>
                </div>
                <div className="p-2 rounded bg-[#03110C] border border-[#FDE047]/30 font-serif text-xs text-[#FEF08A]">
                  {item.mantraHi}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. SEAL 12 STUDIO: VETĀLA (बेतालों की त्रिविध प्रकृति — SĀTTVIKA, RĀJASIKA, TĀMASIKA)
// ============================================================================
export const VetalaTriGunaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedGuna, setSelectedGuna] = useState<'all' | 'sattvic' | 'rajasic' | 'tamasic'>('all');
  const [selectedVetalaId, setSelectedVetalaId] = useState<string>('gagana-vetal');

  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  const activeVetala =
    VETALA_PROFILES_LIST.find(v => v.id === selectedVetalaId) || VETALA_PROFILES_LIST[0];

  const filteredProfiles =
    selectedGuna === 'all'
      ? VETALA_PROFILES_LIST
      : VETALA_PROFILES_LIST.filter(v => v.gunaCategory === selectedGuna);

  return (
    <div className="rounded-2xl border-2 border-[#38BDF8]/50 bg-gradient-to-b from-[#07131E] via-[#050C14] to-[#03070C] text-[#F5E8CE] p-4 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)] space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#38BDF8]/30">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38BDF8] font-bold block">
            {t(
              'SEAL 12 LIVE INTERACTIVE STUDIO · TRI-GUṆA VETĀLA TAXONOMY',
              'मुद्रिका १२ संवादात्मक अध्ययन कक्ष · बेतालों की त्रिविध प्रकृति'
            )}
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mt-0.5">
            {t(
              'बेतालों की त्रिविध प्रकृति (The Three Guṇas of Betals): Sāttvika (16), Rājasika (11) & Tāmasika',
              'बेतालों की त्रिविध प्रकृति: १. सात्विक बेताल (16 प्रकार) · २. राजसिक बेताल (11 प्रकार) · ३. तामसिक बेताल'
            )}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider font-bold">
          {t('16 Sāttvika · 11 Rājasika · Tāmasika', '१६ सात्विक · ११ राजसिक · तामसिक')}
        </span>
      </div>

      {/* Three Gunas Overview Cards (1. Sattvic 16, 2. Rajasic 11, 3. Tamasic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {VETALA_THREE_GUNAS_OVERVIEW.map(g => {
          const isSelected = selectedGuna === g.guna;
          return (
            <div
              key={g.id}
              onClick={() => {
                setSelectedGuna(isSelected ? 'all' : g.guna);
                const firstOfGuna = VETALA_PROFILES_LIST.find(v => v.gunaCategory === g.guna);
                if (firstOfGuna) setSelectedVetalaId(firstOfGuna.id);
              }}
              className={`rounded-xl border-2 p-4 transition-all cursor-pointer space-y-2.5 ${
                isSelected
                  ? 'bg-[#0E2235] border-[#FDE047] shadow-lg'
                  : 'bg-[#081523]/90 border-white/15 hover:border-white/35'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-serif text-base sm:text-lg font-bold" style={{ color: g.accentColor }}>
                  {g.titleHi}
                </h4>
                <span
                  className="px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase border"
                  style={{
                    color: g.accentColor,
                    borderColor: `${g.accentColor}66`,
                    backgroundColor: `${g.accentColor}15`
                  }}
                >
                  {t(g.countBadgeEn, g.countBadgeHi)}
                </span>
              </div>
              <p className="font-serif text-xs sm:text-[13px] text-white/95 leading-relaxed">
                <strong className="text-[#FDE047]">• विशेषता:</strong> {g.characteristicsHi}
              </p>
              <p className="font-serif text-xs sm:text-[13px] text-[#E2E8F0]/90 leading-relaxed">
                <strong className="text-[#38BDF8]">• भूमिका:</strong> {g.roleHi}
              </p>
              <p className="font-serif text-xs italic text-[#FDE68A]/95 pt-1 border-t border-white/10">
                <strong className="text-[#FDE047] not-italic">• उदाहरण / संदर्भ:</strong> {g.exampleHi}
              </p>
              {lang === 'en' && (
                <p className="font-serif text-[11px] text-[#94A3B8] leading-relaxed pt-1 border-t border-white/10">
                  {g.titleEn}: {g.characteristicsEn} {g.roleEn}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Tri-Guna Concentric Mandala SVG + Active Vetala Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Concentric Tri-Guna Vetala Mandala SVG */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[370px] aspect-square rounded-2xl border border-[#38BDF8]/35 bg-[#040A12] p-3 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Outer Ring: Sattvika (5 nodes at r=155) */}
              <circle cx="200" cy="200" r="155" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
              {/* Middle Ring: Rajasic (5 nodes at r=112) */}
              <circle cx="200" cy="200" r="112" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
              {/* Inner Ring: Tamasic (5 nodes at r=68) */}
              <circle cx="200" cy="200" r="68" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />

              {VETALA_PROFILES_LIST.map((v, idx) => {
                const groupIdx = idx % 5;
                const radius =
                  v.gunaCategory === 'sattvic' ? 155 : v.gunaCategory === 'rajasic' ? 112 : 68;
                const angleOffset =
                  v.gunaCategory === 'sattvic' ? -90 : v.gunaCategory === 'rajasic' ? -54 : -18;
                const angle = ((groupIdx * 360) / 5 + angleOffset) * (Math.PI / 180);
                const x = 200 + Math.cos(angle) * radius;
                const y = 200 + Math.sin(angle) * radius;
                const isSelected = v.id === activeVetala.id;

                return (
                  <g
                    key={v.id}
                    onClick={() => setSelectedVetalaId(v.id)}
                    className="cursor-pointer"
                  >
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={v.accentColor}
                      strokeWidth={isSelected ? '2' : '0.6'}
                      opacity={isSelected ? '0.9' : '0.3'}
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 16 : 12}
                      fill={isSelected ? v.accentColor : '#081422'}
                      stroke={isSelected ? '#FFFFFF' : v.accentColor}
                      strokeWidth="2"
                    />
                    <text
                      x={x}
                      y={y + 3.5}
                      textAnchor="middle"
                      fill={isSelected ? '#040A12' : '#FFFFFF'}
                      fontSize="8"
                      fontFamily="serif"
                      fontWeight="bold"
                    >
                      {v.nameHi.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Center Hub */}
              <circle cx="200" cy="200" r="30" fill="#0B192C" stroke="#FDE047" strokeWidth="1.8" />
              <text x="200" y="197" textAnchor="middle" fill="#FDE047" fontSize="10" fontFamily="serif" fontWeight="bold">
                त्रिगुण
              </text>
              <text x="200" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="serif">
                बेताल
              </text>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2 font-mono text-[9.5px]">
            <span className="text-[#38BDF8]">● सात्विक (बाह्य चक्र)</span>
            <span className="text-[#F59E0B]">● राजसिक (मध्य चक्र)</span>
            <span className="text-[#EF4444]">● तामसिक (आंतरिक चक्र)</span>
          </div>
        </div>

        {/* Right: Active Vetala Profile & All 15 Selector Pills */}
        <div className="lg:col-span-7 space-y-4">
          {/* Guna Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', labelHi: 'सभी १५ प्रमुख बेताल', labelEn: 'All 15 Principal Vetālas' },
              { id: 'sattvic', labelHi: 'सात्विक बेताल (5)', labelEn: 'Sāttvika Vetālas (5)' },
              { id: 'rajasic', labelHi: 'राजसिक बेताल (5)', labelEn: 'Rājasika Vetālas (5)' },
              { id: 'tamasic', labelHi: 'तामसिक बेताल (5)', labelEn: 'Tāmasika Vetālas (5)' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedGuna(tab.id as typeof selectedGuna)}
                className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
                  selectedGuna === tab.id
                    ? 'bg-[#38BDF8] text-[#03070C] border-white'
                    : 'bg-[#091828] text-[#94A3B8] border-white/15 hover:border-[#38BDF8]'
                }`}
              >
                {t(tab.labelEn, tab.labelHi)}
              </button>
            ))}
          </div>

          {/* Interactive Vetala Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {filteredProfiles.map(v => {
              const isSelected = v.id === activeVetala.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVetalaId(v.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#102740] border-[#FDE047] text-white shadow-md'
                      : 'bg-[#081523] border-white/10 text-[#CBD5E1] hover:border-white/30'
                  }`}
                >
                  <span
                    className="font-mono text-[9px] uppercase font-bold block"
                    style={{ color: v.accentColor }}
                  >
                    {t(v.gunaLabelEn, v.gunaLabelHi)}
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold block truncate mt-0.5">
                    {v.nameHi}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Vetala Detailed Card */}
          <div
            className="rounded-2xl border-2 p-5 space-y-3 bg-[#081726]"
            style={{ borderColor: `${activeVetala.accentColor}88` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase"
                style={{
                  backgroundColor: `${activeVetala.accentColor}25`,
                  color: activeVetala.accentColor
                }}
              >
                {t(activeVetala.gunaLabelEn, activeVetala.gunaLabelHi)}
              </span>
              <span className="font-mono text-xs text-[#FDE047]">
                {t(activeVetala.elementOrDomainEn, activeVetala.elementOrDomainHi)}
              </span>
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {activeVetala.nameHi}
            </h4>

            <p className="font-serif text-sm sm:text-base text-[#F1F5F9] leading-relaxed">
              {activeVetala.descriptionHi}
            </p>
            {lang === 'en' && (
              <p className="font-serif text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-2 border-t border-white/10">
                {activeVetala.descriptionEn}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Dedicated Panel: तामसिक बेतालों की पूजा पद्धति और विशेषताएं */}
      <div className="rounded-xl border border-[#EF4444]/45 bg-[#1C080B]/90 p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2 border-b border-[#EF4444]/30 pb-2">
          <Flame className="w-4 h-4 text-[#EF4444]" />
          <h4 className="font-serif text-base sm:text-lg font-bold text-[#FCA5A5]">
            {t(
              'तामसिक बेतालों की पूजा पद्धति और विशेषताएं (Ritual Protocol & Characteristics of Tāmasika Vetālas)',
              'तामसिक बेतालों की पूजा पद्धति और विशेषताएं'
            )}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm font-serif">
          <div className="p-3.5 rounded-lg bg-[#120406] border border-[#EF4444]/30 space-y-1">
            <strong className="text-[#FDE047] block">1. भोग और नैवेद्य:</strong>
            <p className="text-[#FEE2E2]/90 leading-relaxed">
              सात्विक और राजसिक बेतालों के विपरीत, तामसिक बेतालों की तृप्ति के लिए मदिरा (शराब), बकरे या मुर्गे की बलि (प्राचीन काल में प्रचलित), और श्मशान की भस्म चढ़ाई जाती है।
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-[#120406] border border-[#EF4444]/30 space-y-1">
            <strong className="text-[#FDE047] block">2. साधना का समय:</strong>
            <p className="text-[#FEE2E2]/90 leading-relaxed">
              इनकी साधना केवल कृष्ण पक्ष की अमावस्या, काली चौदह (नरक चतुर्दशी), या ग्रहण की रात को मध्यरात्रि (कालरात्रि) के समय की जाती है।
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-[#120406] border border-[#EF4444]/30 space-y-1">
            <strong className="text-[#FDE047] block">3. साधना स्थल:</strong>
            <p className="text-[#FEE2E2]/90 leading-relaxed">
              इसके लिए केवल घोर श्मशान घाट, लाशों के पास, या भयंकर तांत्रिक पीठ ही उपयुक्त माने जाते हैं।
            </p>
          </div>
        </div>
      </div>

      {/* Last Part: Complete List of 52 Types of Vetāla (बावन बेताल) */}
      <div className="rounded-xl border border-[#38BDF8]/45 bg-[#06121E]/95 p-4 sm:p-5 space-y-4">
        <div className="border-b border-[#38BDF8]/30 pb-3 space-y-1">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#38BDF8] font-bold block">
            {t('BĀVAN BETĀLA · COMPLETE 52 TYPES ROSTER (01–52)', 'बावन बेताल · ५२ प्रकार के बेतालों की सूची (०१–५२)')}
          </span>
          <p className="font-serif text-sm sm:text-base text-[#FDE047] font-semibold leading-relaxed">
            {t(
              'According to Tantric tradition, Vetālas have 52 distinct types (तंत्र परम्परा के अनुसार बेताल के कुल 52 प्रकार होते हैं):',
              'तंत्र परम्परा के अनुसार बेताल के कुल 52 प्रकार होते हैं:'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {VETALA_52_TYPES_LIST.map((item) => (
            <div
              key={item.index}
              className="px-3 py-2 rounded-lg bg-[#09192A] border border-[#38BDF8]/25 hover:border-[#FDE047]/65 transition-colors flex items-center gap-2.5"
            >
              <span className="shrink-0 w-6 h-6 rounded bg-[#0E263F] border border-[#38BDF8]/40 font-mono text-[10px] font-bold text-[#38BDF8] flex items-center justify-center">
                {String(item.index).padStart(2, '0')}
              </span>
              <span className="font-serif text-xs sm:text-[13px] text-[#F5E8CE] font-medium leading-snug">
                {item.combined}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

