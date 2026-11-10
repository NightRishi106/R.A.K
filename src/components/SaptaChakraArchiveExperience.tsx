import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  RotateCw,
  Info,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Eye
} from 'lucide-react';
import {
  CHAKRA_STUDIO_PANELS,
  SEVEN_CHAKRA_PROFILES,
  SAPTA_CHAKRA_ARCHIVE_ARTICLES,
  IndividualChakraProfile,
  ChakraArchiveArticle
} from '../data/saptaChakraArchiveData';

interface SaptaChakraArchiveExperienceProps {
  lang?: 'en' | 'hi';
}

interface BodyChakraHotspot {
  id: string;
  order: number;
  xPercent: number;
  yPercent: number;
  nameEn: string;
  nameSanskrit: string;
  commonNameEn: string;
  commonNameHi: string;
  bijaDevanagari: string;
  bijaIAST: string;
  elementEn: string;
  elementHi: string;
  petals: number;
  imageChakraColor: string;
  glowRgba: string;
}

const BODY_CHAKRA_HOTSPOTS: BodyChakraHotspot[] = [
  {
    id: 'sahasrara',
    order: 7,
    xPercent: 35.5,
    yPercent: 12.2,
    nameEn: 'Sahasrāra',
    nameSanskrit: 'सहस्रार',
    commonNameEn: 'Crown Chakra · Thousand-Petalled Lotus',
    commonNameHi: 'सहस्रार महापद्म · ब्रह्मरन्ध्र',
    bijaDevanagari: 'ॐ',
    bijaIAST: 'Para-Bindu / Oṃ',
    elementEn: 'Tattvātīta (Transcendent Consciousness)',
    elementHi: 'तत्त्वातीत परब्रह्म',
    petals: 1000,
    imageChakraColor: '#E879F9',
    glowRgba: 'rgba(232, 121, 249, 0.75)'
  },
  {
    id: 'ajna',
    order: 6,
    xPercent: 35.5,
    yPercent: 22.8,
    nameEn: 'Ājñā',
    nameSanskrit: 'आज्ञा चक्र',
    commonNameEn: 'Third-Eye Chakra · Command & Inner Perception',
    commonNameHi: 'भ्रूमध्य · अन्तःप्रज्ञा केंद्र',
    bijaDevanagari: 'ॐ',
    bijaIAST: 'Oṃ',
    elementEn: 'Manas (Subtle Mind)',
    elementHi: 'मनस् तत्त्व',
    petals: 2,
    imageChakraColor: '#818CF8',
    glowRgba: 'rgba(129, 140, 248, 0.78)'
  },
  {
    id: 'vishuddha',
    order: 5,
    xPercent: 35.5,
    yPercent: 36.6,
    nameEn: 'Viśuddha',
    nameSanskrit: 'विशुद्ध चक्र',
    commonNameEn: 'Throat Chakra · Pure Space & Sacred Speech',
    commonNameHi: 'कण्ठ पद्म · आकाश तत्त्व',
    bijaDevanagari: 'हं',
    bijaIAST: 'Haṃ',
    elementEn: 'Ākāśa (Space / Ether)',
    elementHi: 'आकाश तत्त्व',
    petals: 16,
    imageChakraColor: '#38BDF8',
    glowRgba: 'rgba(56, 189, 248, 0.8)'
  },
  {
    id: 'anahata',
    order: 4,
    xPercent: 35.5,
    yPercent: 46.8,
    nameEn: 'Anāhata',
    nameSanskrit: 'अनाहत चक्र',
    commonNameEn: 'Heart Chakra · Unstruck Sound Lotus',
    commonNameHi: 'हृदय पद्म · वायु तत्त्व एवं अनाहत नाद',
    bijaDevanagari: 'यं',
    bijaIAST: 'Yaṃ',
    elementEn: 'Vāyu (Air)',
    elementHi: 'वायु तत्त्व',
    petals: 12,
    imageChakraColor: '#4ADE80',
    glowRgba: 'rgba(74, 222, 128, 0.8)'
  },
  {
    id: 'manipura',
    order: 3,
    xPercent: 35.5,
    yPercent: 57.5,
    nameEn: 'Maṇipūra',
    nameSanskrit: 'मणिपूर चक्र',
    commonNameEn: 'Solar Plexus / Navel Chakra · City of Jewels',
    commonNameHi: 'नाभि पद्म · अग्नि तत्त्व',
    bijaDevanagari: 'रं',
    bijaIAST: 'Raṃ',
    elementEn: 'Agni (Fire)',
    elementHi: 'अग्नि तत्त्व',
    petals: 10,
    imageChakraColor: '#FACC15',
    glowRgba: 'rgba(250, 204, 21, 0.82)'
  },
  {
    id: 'svadhishthana',
    order: 2,
    xPercent: 35.5,
    yPercent: 66.8,
    nameEn: 'Svādhiṣṭhāna',
    nameSanskrit: 'स्वाधिष्ठान चक्र',
    commonNameEn: 'Sacral Chakra · Abode of Vital Energy',
    commonNameHi: 'स्वाधिष्ठान पद्म · जल तत्त्व',
    bijaDevanagari: 'वं',
    bijaIAST: 'Vaṃ',
    elementEn: 'Āpas (Water)',
    elementHi: 'जल तत्त्व',
    petals: 6,
    imageChakraColor: '#FB923C',
    glowRgba: 'rgba(251, 146, 60, 0.82)'
  },
  {
    id: 'muladhara',
    order: 1,
    xPercent: 35.5,
    yPercent: 75.5,
    nameEn: 'Mūlādhāra',
    nameSanskrit: 'मूलाधार चक्र',
    commonNameEn: 'Root Chakra · Foundational Support & Earth',
    commonNameHi: 'आधार पद्म · पृथ्वी तत्त्व एवं कुण्डलिनी मूल',
    bijaDevanagari: 'लं',
    bijaIAST: 'Laṃ',
    elementEn: 'Pṛthvī (Earth)',
    elementHi: 'पृथ्वी तत्त्व',
    petals: 4,
    imageChakraColor: '#F87171',
    glowRgba: 'rgba(248, 113, 113, 0.85)'
  }
];

/**
 * Interactive Chakra-in-Body Visualizer using the cleaned cosmic meditating body image
 * (with right-hand side texts removed). Clicking any chakra on the body triggers
 * concentric ripple waves and displays the chakra's name in the exact color of the chakra in the image.
 */
const InteractiveBodyChakraImage: React.FC<{
  selectedChakraId: string;
  onSelectChakra: (chakraId: string) => void;
  lang?: 'en' | 'hi';
  showNadiOverlay?: boolean;
  showIda?: boolean;
  showPingala?: boolean;
  showSushumna?: boolean;
  showGranthis?: boolean;
}> = ({
  selectedChakraId,
  onSelectChakra,
  lang = 'en',
  showNadiOverlay = false,
  showIda = true,
  showPingala = true,
  showSushumna = true,
  showGranthis = false
}) => {
  const [rippleBurstCounter, setRippleBurstCounter] = useState<number>(1);
  const [lastClickedId, setLastClickedId] = useState<string>(selectedChakraId);
  const [showAllLabels, setShowAllLabels] = useState<boolean>(false);

  const activeHotspot =
    BODY_CHAKRA_HOTSPOTS.find((h) => h.id === selectedChakraId) || BODY_CHAKRA_HOTSPOTS[6];

  const handleChakraClick = (id: string) => {
    setLastClickedId(id);
    setRippleBurstCounter((c) => c + 1);
    onSelectChakra(id);
  };

  return (
    <div className="space-y-3">
      {/* Keyframe style for multi-ring ripple bursts */}
      <style>{`
        @keyframes chakraRippleExpand {
          0% {
            transform: translate(-50%, -50%) scale(0.45);
            opacity: 0.95;
          }
          70% {
            opacity: 0.45;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.9);
            opacity: 0;
          }
        }
        @keyframes chakraContinuousRipple {
          0% {
            transform: translate(-50%, -50%) scale(0.85);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.35);
            opacity: 0;
          }
        }
      `}</style>

      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <span className="text-[11px] font-mono text-[#FDE68A]/90 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
          {lang === 'hi'
            ? 'शरीर में किसी भी चक्र पर क्लिक करें (तरंग एवं नाम देखने हेतु)'
            : 'Click any chakra on the body for ripple effect & colored name'}
        </span>
        <button
          type="button"
          onClick={() => setShowAllLabels((v) => !v)}
          className={`px-2.5 py-1 rounded-lg text-[10.5px] font-mono border transition flex items-center gap-1 cursor-pointer ${
            showAllLabels
              ? 'border-[#D3AD55] bg-[#D3AD55]/20 text-[#FDE68A]'
              : 'border-white/15 bg-white/5 text-white/75 hover:border-white/30'
          }`}
        >
          <Eye className="w-3 h-3" />
          {showAllLabels
            ? lang === 'hi'
              ? 'केवल चयनित नाम दिखाएँ'
              : 'Show Clicked Only'
            : lang === 'hi'
            ? 'सभी ७ नाम दिखाएँ'
            : 'Show All 7 Names'}
        </button>
      </div>

      {/* Main Interactive Body Container */}
      <div className="relative w-full max-w-[460px] mx-auto rounded-2xl overflow-hidden border border-[#D3AD55]/40 bg-[#050816] shadow-[0_0_40px_rgba(0,0,0,0.85)] select-none">
        <img
          src="/chakra_body_clean.jpg"
          alt="Seven Chakras in the Meditating Subtle Body"
          referrerPolicy="no-referrer"
          className="w-full h-auto block pointer-events-none"
        />

        {/* Optional Subtle Nāḍī & Granthi SVG Overlay for Panel 09 */}
        {showNadiOverlay && (
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {showSushumna && (
              <line
                x1="35.5"
                y1="12.2"
                x2="35.5"
                y2="75.5"
                stroke="#FEF08A"
                strokeWidth="0.45"
                strokeOpacity="0.85"
              />
            )}
            {showIda && (
              <path
                d="M 35.5 75.5 C 24 69, 47 62, 35.5 57.5 C 24 51, 47 42, 35.5 36.6 C 25 30, 30 25, 35.5 22.8"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="0.45"
                strokeDasharray="1.2 0.8"
              />
            )}
            {showPingala && (
              <path
                d="M 35.5 75.5 C 47 69, 24 62, 35.5 57.5 C 47 51, 24 42, 35.5 36.6 C 46 30, 41 25, 35.5 22.8"
                fill="none"
                stroke="#FDBA74"
                strokeWidth="0.45"
                strokeDasharray="1.2 0.8"
              />
            )}
            {showGranthis && (
              <g>
                <circle cx="35.5" cy="75.5" r="3.4" fill="none" stroke="#EF4444" strokeWidth="0.35" strokeDasharray="0.8 0.8" />
                <circle cx="35.5" cy="46.8" r="3.4" fill="none" stroke="#4ADE80" strokeWidth="0.35" strokeDasharray="0.8 0.8" />
                <circle cx="35.5" cy="22.8" r="3.4" fill="none" stroke="#818CF8" strokeWidth="0.35" strokeDasharray="0.8 0.8" />
              </g>
            )}
          </svg>
        )}

        {/* Interactive Chakra Nodes, Ripple Waves & Right-Side Colored Name Callouts */}
        {BODY_CHAKRA_HOTSPOTS.map((node) => {
          const isSelected = selectedChakraId === node.id;
          const isVisibleLabel = showAllLabels || isSelected;

          return (
            <React.Fragment key={node.id}>
              {/* Clickable Chakra Orb on Body */}
              <button
                type="button"
                onClick={() => handleChakraClick(node.id)}
                aria-label={`${node.nameEn} (${node.nameSanskrit}) - ${node.commonNameEn}`}
                style={{
                  left: `${node.xPercent}%`,
                  top: `${node.yPercent}%`
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none z-20"
              >
                {/* Continuous Ambient Ripple when Selected */}
                {isSelected && (
                  <>
                    <span
                      className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full pointer-events-none"
                      style={{
                        border: `2px solid ${node.imageChakraColor}`,
                        boxShadow: `0 0 18px ${node.glowRgba}`,
                        animation: 'chakraContinuousRipple 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                    <span
                      className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full pointer-events-none"
                      style={{
                        border: `1.5px solid ${node.imageChakraColor}`,
                        animation: 'chakraContinuousRipple 2s cubic-bezier(0, 0, 0.2, 1) 0.7s infinite'
                      }}
                    />
                  </>
                )}

                {/* Fresh Multi-Ring Click Burst Ripple Effect */}
                {isSelected && lastClickedId === node.id && (
                  <span
                    key={`burst-${node.id}-${rippleBurstCounter}`}
                    className="absolute inset-0 pointer-events-none"
                  >
                    <span
                      className="absolute left-1/2 top-1/2 w-11 h-11 rounded-full"
                      style={{
                        border: `2.5px solid ${node.imageChakraColor}`,
                        backgroundColor: `${node.imageChakraColor}28`,
                        boxShadow: `0 0 24px ${node.glowRgba}`,
                        animation: 'chakraRippleExpand 1.05s ease-out forwards'
                      }}
                    />
                    <span
                      className="absolute left-1/2 top-1/2 w-11 h-11 rounded-full"
                      style={{
                        border: `2px solid ${node.imageChakraColor}`,
                        animation: 'chakraRippleExpand 1.35s ease-out 0.14s forwards'
                      }}
                    />
                    <span
                      className="absolute left-1/2 top-1/2 w-11 h-11 rounded-full"
                      style={{
                        border: `1.5px solid #FFFFFF`,
                        animation: 'chakraRippleExpand 1.6s ease-out 0.28s forwards'
                      }}
                    />
                  </span>
                )}

                {/* Subtle Hover Ring */}
                <span
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{
                    border: isSelected
                      ? `2px solid ${node.imageChakraColor}`
                      : `1px solid ${node.imageChakraColor}66`,
                    boxShadow: isSelected
                      ? `0 0 18px ${node.glowRgba}, inset 0 0 10px ${node.glowRgba}`
                      : 'none'
                  }}
                />
              </button>

              {/* Right-Side Animated Pointer Line & Colored Chakra Name Callout */}
              {isVisibleLabel && (
                <div
                  onClick={() => handleChakraClick(node.id)}
                  style={{
                    top: `${node.yPercent}%`,
                    left: `${node.xPercent + 4.5}%`,
                    right: '2.5%'
                  }}
                  className="absolute -translate-y-1/2 flex items-center gap-2 z-10 cursor-pointer group"
                >
                  {/* Glowing Pointer Line & Dot */}
                  <div className="flex items-center shrink-0">
                    <div
                      className="w-6 sm:w-11 h-[1.5px] transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${node.imageChakraColor}, ${node.imageChakraColor}CC)`,
                        boxShadow: `0 0 8px ${node.glowRgba}`
                      }}
                    />
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        backgroundColor: node.imageChakraColor,
                        boxShadow: `0 0 10px ${node.imageChakraColor}`
                      }}
                    />
                  </div>

                  {/* Chakra Name Card with Text in Exact Chakra Color */}
                  <div
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl backdrop-blur-md transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#050818]/90 scale-[1.02]'
                        : 'bg-[#050818]/75 opacity-90 hover:opacity-100'
                    }`}
                    style={{
                      border: `1px solid ${node.imageChakraColor}${isSelected ? 'AA' : '55'}`,
                      boxShadow: isSelected ? `0 4px 20px ${node.glowRgba}` : 'none'
                    }}
                  >
                    <div
                      className="font-serif font-bold text-xs sm:text-sm md:text-[15px] leading-tight tracking-wide"
                      style={{
                        color: node.imageChakraColor,
                        textShadow: `0 0 12px ${node.glowRgba}`
                      }}
                    >
                      {node.nameEn} · {node.nameSanskrit}
                    </div>
                    <div
                      className="text-[9.5px] sm:text-[10.5px] font-medium leading-snug mt-0.5"
                      style={{
                        color: node.imageChakraColor,
                        opacity: 0.9
                      }}
                    >
                      {lang === 'hi' ? node.commonNameHi : node.commonNameEn}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Clicked Chakra Banner Below Image (Text Colored in the Chakra's Image Color) */}
      <div
        className="rounded-xl p-3.5 bg-[#090D1E]/95 border transition-all duration-300 flex flex-wrap items-center justify-between gap-2"
        style={{
          borderColor: `${activeHotspot.imageChakraColor}88`,
          boxShadow: `0 0 22px ${activeHotspot.glowRgba.replace('0.8', '0.2')}`
        }}
      >
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">
            {lang === 'hi' ? 'चयनित चक्र (सक्रिय तरंग)' : 'ACTIVE CLICKED CHAKRA IN BODY'} · 0{activeHotspot.order}
          </div>
          <div
            className="text-base sm:text-lg font-serif font-bold mt-0.5"
            style={{
              color: activeHotspot.imageChakraColor,
              textShadow: `0 0 14px ${activeHotspot.glowRgba}`
            }}
          >
            {activeHotspot.nameEn} ({activeHotspot.nameSanskrit}) —{' '}
            {lang === 'hi' ? activeHotspot.commonNameHi : activeHotspot.commonNameEn}
          </div>
        </div>
        <div
          className="px-3 py-1 rounded-lg font-serif font-bold text-xs border"
          style={{
            color: activeHotspot.imageChakraColor,
            borderColor: `${activeHotspot.imageChakraColor}66`,
            backgroundColor: `${activeHotspot.imageChakraColor}18`
          }}
        >
          Bīja: {activeHotspot.bijaDevanagari} ({activeHotspot.bijaIAST}) · {activeHotspot.petals} Petals
        </div>
      </div>
    </div>
  );
};

/**
 * Precision Sacred SVG Renderer for an Individual Chakra Lotus & Yantra
 */
const InteractiveChakraLotusSVG: React.FC<{
  profile: IndividualChakraProfile;
  rotateLotus: boolean;
  showPetals: boolean;
  showSanskritLetters: boolean;
  animateElement: boolean;
  useClassicalPalette: boolean;
}> = ({
  profile,
  rotateLotus,
  showPetals,
  showSanskritLetters,
  animateElement,
  useClassicalPalette
}) => {
  const petalCount = profile.petalCount === 1000 ? 24 : profile.petalCount;
  const primaryColor = useClassicalPalette ? profile.secondaryHex : profile.accentHex;
  const petalStroke = profile.accentHex;

  const petals = useMemo(() => {
    const items = [];
    for (let i = 0; i < petalCount; i++) {
      const angleDeg = (i * 360) / petalCount - 90;
      const angleRad = (angleDeg * Math.PI) / 180;
      const letter =
        profile.petalCount === 1000
          ? ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ट', 'त', 'प', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'क्ष'][i % 24]
          : profile.petalLettersDevanagari[i] || '';
      const labelRadius = profile.petalCount === 2 ? 102 : profile.petalCount >= 16 ? 114 : 106;
      const lx = 160 + labelRadius * Math.cos(angleRad);
      const ly = 160 + labelRadius * Math.sin(angleRad);
      items.push({ index: i, angleDeg, lx, ly, letter });
    }
    return items;
  }, [petalCount, profile]);

  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full max-w-[330px] h-auto mx-auto select-none drop-shadow-[0_0_25px_rgba(211,173,85,0.18)]"
      role="img"
      aria-label={`${profile.nameEn} (${profile.nameSanskrit}) Sacred Lotus Diagram`}
    >
      <defs>
        <radialGradient id={`glow-${profile.id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={profile.accentHex} stopOpacity="0.38" />
          <stop offset="65%" stopColor={primaryColor} stopOpacity="0.12" />
          <stop offset="100%" stopColor="#09070B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Ambient Halo */}
      <circle
        cx="160"
        cy="160"
        r="148"
        fill={`url(#glow-${profile.id})`}
        className={animateElement ? 'animate-pulse' : ''}
      />
      <circle
        cx="160"
        cy="160"
        r="144"
        fill="none"
        stroke={profile.accentHex}
        strokeOpacity="0.28"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Sahasrāra multi-ring thousand-petal aura */}
      {profile.petalCount === 1000 && showPetals && (
        <g className={rotateLotus ? 'origin-center animate-[spin_50s_linear_infinite_reverse]' : ''}>
          {Array.from({ length: 36 }).map((_, idx) => {
            const a = (idx * 360) / 36;
            return (
              <ellipse
                key={`outer-sahasrara-${idx}`}
                cx="160"
                cy="34"
                rx="7"
                ry="22"
                transform={`rotate(${a} 160 160)`}
                fill={profile.accentHex}
                fillOpacity="0.14"
                stroke={profile.secondaryHex}
                strokeOpacity="0.45"
                strokeWidth="0.8"
              />
            );
          })}
        </g>
      )}

      {/* Main Lotus Petals Ring */}
      {showPetals && (
        <g
          style={{ transformOrigin: '160px 160px' }}
          className={rotateLotus ? 'animate-[spin_36s_linear_infinite]' : ''}
        >
          {petals.map((p) => {
            const isTwoPetal = profile.petalCount === 2;
            const petalPath = isTwoPetal
              ? 'M 160 88 C 205 42, 205 18, 160 28 C 115 18, 115 42, 160 88 Z'
              : profile.petalCount <= 6
              ? 'M 160 85 C 188 55, 182 26, 160 24 C 138 26, 132 55, 160 85 Z'
              : 'M 160 85 C 174 55, 172 30, 160 26 C 148 30, 146 55, 160 85 Z';

            return (
              <g key={p.index} transform={`rotate(${p.angleDeg + 90} 160 160)`}>
                <path
                  d={petalPath}
                  fill={petalStroke}
                  fillOpacity="0.22"
                  stroke={petalStroke}
                  strokeWidth="1.5"
                />
                <path
                  d={petalPath}
                  fill="none"
                  stroke="#FDE68A"
                  strokeOpacity="0.35"
                  strokeWidth="0.6"
                  transform="scale(0.92) translate(13.8, 13.8)"
                />
              </g>
            );
          })}
        </g>
      )}

      {/* Sanskrit Mātṛkā Letters on Petals */}
      {showPetals && showSanskritLetters && (
        <g>
          {petals.map((p) => (
            <text
              key={`letter-${p.index}`}
              x={p.lx}
              y={p.ly}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#FEF3C7"
              fontSize={profile.petalCount >= 16 ? '9.5' : '11.5'}
              fontWeight="700"
              className="font-serif"
            >
              {p.letter.replace(' (अनुस्वार)', '').replace(' (विसर्ग)', '')}
            </text>
          ))}
        </g>
      )}

      {/* Pericarp (Karṇikā) Circle */}
      <circle
        cx="160"
        cy="160"
        r="76"
        fill="#0D0914"
        stroke="#D3AD55"
        strokeWidth="1.8"
      />
      <circle
        cx="160"
        cy="160"
        r="71"
        fill="none"
        stroke={profile.accentHex}
        strokeOpacity="0.5"
        strokeWidth="0.9"
      />

      {/* Inner Elemental Yantra Geometry */}
      <g className={animateElement ? 'transition-transform duration-700' : ''}>
        {profile.yantraShapeType === 'square' && (
          <g>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
              <line
                key={ang}
                x1="160"
                y1="92"
                x2="160"
                y2="104"
                stroke="#EAB308"
                strokeWidth="2.2"
                transform={`rotate(${ang} 160 160)`}
              />
            ))}
            <rect
              x="114"
              y="114"
              width="92"
              height="92"
              fill="#EAB308"
              fillOpacity="0.18"
              stroke="#EAB308"
              strokeWidth="2.2"
            />
            <polygon
              points="160,196 128,136 192,136"
              fill="#EF4444"
              fillOpacity="0.22"
              stroke="#EF4444"
              strokeWidth="1.6"
            />
          </g>
        )}

        {profile.yantraShapeType === 'crescent' && (
          <g>
            <circle
              cx="160"
              cy="160"
              r="56"
              fill="#38BDF8"
              fillOpacity="0.12"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <path
              d="M 116 145 A 48 48 0 1 0 204 145 A 38 36 0 1 1 116 145 Z"
              fill="#F8FAFC"
              fillOpacity="0.32"
              stroke="#F8FAFC"
              strokeWidth="2"
            />
          </g>
        )}

        {profile.yantraShapeType === 'triangle' && (
          <g>
            <polygon
              points="160,210 112,126 208,126"
              fill="#EF4444"
              fillOpacity="0.25"
              stroke="#EF4444"
              strokeWidth="2.2"
            />
            <line x1="160" y1="126" x2="160" y2="115" stroke="#EAB308" strokeWidth="2" />
            <line x1="152" y1="115" x2="168" y2="115" stroke="#EAB308" strokeWidth="2" />
          </g>
        )}

        {profile.yantraShapeType === 'hexagram' && (
          <g>
            <polygon
              points="160,104 112,188 208,188"
              fill="#94A3B8"
              fillOpacity="0.18"
              stroke="#4ADE80"
              strokeWidth="1.8"
            />
            <polygon
              points="160,216 112,132 208,132"
              fill="#94A3B8"
              fillOpacity="0.18"
              stroke="#4ADE80"
              strokeWidth="1.8"
            />
            <polygon
              points="160,185 138,145 182,145"
              fill="none"
              stroke="#FACC15"
              strokeWidth="1.2"
            />
          </g>
        )}

        {profile.yantraShapeType === 'circle' && (
          <g>
            <polygon
              points="160,206 116,130 204,130"
              fill="none"
              stroke="#38BDF8"
              strokeOpacity="0.55"
              strokeWidth="1.3"
            />
            <circle
              cx="160"
              cy="160"
              r="42"
              fill="#F8FAFC"
              fillOpacity="0.22"
              stroke="#F8FAFC"
              strokeWidth="2.2"
            />
          </g>
        )}

        {profile.yantraShapeType === 'two-petal-linga' && (
          <g>
            <polygon
              points="160,206 116,128 204,128"
              fill="#6366F1"
              fillOpacity="0.22"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            <rect
              x="151"
              y="136"
              width="18"
              height="34"
              rx="9"
              fill="#F8FAFC"
              fillOpacity="0.35"
              stroke="#F8FAFC"
              strokeWidth="1.4"
            />
          </g>
        )}

        {profile.yantraShapeType === 'thousand-lotus' && (
          <g>
            <circle
              cx="160"
              cy="160"
              r="52"
              fill="#FAF5FF"
              fillOpacity="0.18"
              stroke="#E9D5FF"
              strokeWidth="1.8"
            />
            <polygon
              points="160,118 122,184 198,184"
              fill="#C084FC"
              fillOpacity="0.22"
              stroke="#FDE047"
              strokeWidth="1.8"
            />
            <circle cx="160" cy="142" r="4" fill="#FDE047" />
          </g>
        )}
      </g>

      {/* Central Seed Syllable (Bīja Mantra) */}
      <text
        x="160"
        y="162"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#FFFFFF"
        fontSize={profile.id === 'sahasrara' ? '26' : '32'}
        fontWeight="700"
        className="font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
      >
        {profile.id === 'sahasrara' ? 'ॐ' : profile.bijaMantraDevanagari}
      </text>
      <text
        x="160"
        y="188"
        textAnchor="middle"
        fill="#FDE68A"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {profile.id === 'sahasrara' ? 'PARA-BINDU' : profile.bijaMantraIAST.toUpperCase()}
      </text>
    </svg>
  );
};

export const SaptaChakraArchiveExperience: React.FC<SaptaChakraArchiveExperienceProps> = ({
  lang = 'en'
}) => {
  // Active Studio Panel ('panel-intro' ... 'panel-kundalini-studio')
  const [activeStudioPanelId, setActiveStudioPanelId] = useState<string>('panel-muladhara');

  // Interactive SVG toggles
  const [rotateLotus, setRotateLotus] = useState<boolean>(true);
  const [showPetals, setShowPetals] = useState<boolean>(true);
  const [showSanskritLetters, setShowSanskritLetters] = useState<boolean>(true);
  const [animateElement, setAnimateElement] = useState<boolean>(true);
  const [useClassicalPalette, setUseClassicalPalette] = useState<boolean>(false);

  // Panel 09 Kuṇḍalinī Studio toggles
  const [showIda, setShowIda] = useState<boolean>(true);
  const [showPingala, setShowPingala] = useState<boolean>(true);
  const [showSushumna, setShowSushumna] = useState<boolean>(true);
  const [showGranthis, setShowGranthis] = useState<boolean>(true);

  // Active full research article reader slug
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('chakra-vidya-subtle-energy-centres');
  const [articleCategoryFilter, setArticleCategoryFilter] = useState<'all' | 'part1-intro' | 'part2-seven-chakras' | 'part3-thematic'>('all');

  const activePanel = useMemo(
    () => CHAKRA_STUDIO_PANELS.find((p) => p.id === activeStudioPanelId) || CHAKRA_STUDIO_PANELS[1],
    [activeStudioPanelId]
  );

  const activeChakraProfile = useMemo(() => {
    const targetId = activePanel.chakraId || 'muladhara';
    return SEVEN_CHAKRA_PROFILES.find((c) => c.id === targetId) || SEVEN_CHAKRA_PROFILES[0];
  }, [activePanel]);

  const activeArticle: ChakraArchiveArticle = useMemo(
    () =>
      SAPTA_CHAKRA_ARCHIVE_ARTICLES.find((a) => a.slug === selectedArticleSlug) ||
      SAPTA_CHAKRA_ARCHIVE_ARTICLES[0],
    [selectedArticleSlug]
  );

  const filteredArticles = useMemo(() => {
    if (articleCategoryFilter === 'all') return SAPTA_CHAKRA_ARCHIVE_ARTICLES;
    return SAPTA_CHAKRA_ARCHIVE_ARTICLES.filter((a) => a.partCategory === articleCategoryFilter);
  }, [articleCategoryFilter]);

  const handleSelectChakraFromDiagram = (chakraId: string) => {
    const matchingPanel = CHAKRA_STUDIO_PANELS.find((p) => p.chakraId === chakraId);
    if (matchingPanel) {
      setActiveStudioPanelId(matchingPanel.id);
    }
  };

  const handleOpenArticleAndScroll = (slug: string) => {
    setSelectedArticleSlug(slug);
    const readerEl = document.getElementById('sapta-chakra-scholarly-reader');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToStudio = () => {
    const studioEl = document.getElementById('sapta-chakra-interactive-studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-10 text-[#F5EFE6]">
      {/* =====================================================================
          1. DEDICATED ARCHIVE BANNER & SCHOLARLY DISCLAIMER
         ===================================================================== */}
      <div className="rounded-3xl border border-[#D3AD55]/35 bg-gradient-to-br from-[#140E20] via-[#0D0915] to-[#1A1026] p-6 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.75)] relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md border border-[#D3AD55]/40 bg-[#D3AD55]/10 text-[#FDE68A] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            SEAL 09 · SAPTA-CAKRA TANTRIC & YOGIC RESEARCH ARCHIVE
          </span>
          <span className="text-xs font-mono text-[#D3AD55]/80">
            Ṣaṭ-Cakra-Nirūpaṇa (1577 CE) · Śiva Saṃhitā · Yoga Upaniṣads
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-2">
          The Seven Chakras — <span className="text-[#FDE68A]">सप्त चक्र (चक्र विद्या एवं कुण्डलिनी विज्ञान)</span>
        </h2>
        <p className="text-sm sm:text-base text-[#E2D9C8]/90 leading-relaxed max-w-4xl mb-6">
          {lang === 'hi'
            ? 'हिन्दू योग, शैव-शाक्त आगम, नाथ परम्परा और पूर्णानन्द यति कृत "षट्चक्रनिरूपण" (१५७७ ई.) पर आधारित सप्त-चक्रों, ५० मातृका अक्षरों, पंचमहाभूतों, इड़ा-पिंगला-सुषुम्णा नाड़ियों और कुण्डलिनी शक्ति का सम्पूर्ण डिजिटल शोध-अभिलेखागार।'
            : 'A comprehensive scholarly and visual archive exploring the subtle energy centres (Ṣaṭ-Cakra & Sahasrāra), the 50 Sanskrit Mātṛkā petal phonemes, the Five Mahābhūtas, the Three Principal Nāḍīs (Iḍā, Piṅgalā, Suṣumṇā), and Kuṇḍalinī Śakti through primary Sanskrit sources and comparative historiography.'}
        </p>

        {/* Quick Archive Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55]">Subtle Centres</div>
            <div className="text-lg font-serif font-bold text-white mt-0.5">6 Chakras + Sahasrāra</div>
            <div className="text-xs text-white/60">Mūlādhāra to Crown Lotus</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55]">Mātṛkā Petals</div>
            <div className="text-lg font-serif font-bold text-white mt-0.5">50 Letters (अ – क्ष)</div>
            <div className="text-xs text-white/60">4+6+10+12+16+2 = 50 · ×20 = 1000</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55]">Interactive Studio</div>
            <div className="text-lg font-serif font-bold text-white mt-0.5">9 Exploration Panels</div>
            <div className="text-xs text-white/60">Body Ripple Map, Lotuses & Nāḍīs</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55]">Research Archive</div>
            <div className="text-lg font-serif font-bold text-white mt-0.5">15 Full Monographs</div>
            <div className="text-xs text-white/60">Intro + 7 Chakras + 7 Thematic</div>
          </div>
        </div>

        {/* Scholarly & Educational Non-Medical Disclaimer */}
        <div className="rounded-xl border border-amber-400/30 bg-amber-950/25 px-4 py-3 flex items-start gap-3 text-xs text-amber-100/90">
          <Info className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-amber-200">Scholarly & Educational Archive Notice: </strong>
            This section presents traditional spiritual, philosophical, and historical knowledge of the chakra system from Hindu Yogic and Tantric texts alongside clearly distinguished modern psychological interpretations for educational and research purposes; it is not medical or clinical advice.
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. PART 4 — THE INTERACTIVE CHAKRA STUDIO (9 EXACT PANELS)
         ===================================================================== */}
      <section
        id="sapta-chakra-interactive-studio"
        className="rounded-3xl border border-[#D3AD55]/40 bg-[#0B0812] p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D3AD55] mb-1">
              INTERACTIVE RESEARCH LABORATORY · चक्र अन्वेषण केंद्र
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              THE CHAKRA STUDIO <span className="text-[#FDE68A] font-normal text-xl sm:text-2xl">— चक्र अन्वेषण केंद्र</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setRotateLotus((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition flex items-center gap-1.5 cursor-pointer ${
                rotateLotus
                  ? 'border-[#D3AD55] bg-[#D3AD55]/20 text-[#FDE68A]'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              Rotate Lotus
            </button>
            <button
              type="button"
              onClick={() => setShowSanskritLetters((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition cursor-pointer ${
                showSanskritLetters
                  ? 'border-[#D3AD55] bg-[#D3AD55]/20 text-[#FDE68A]'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              अ-क्ष Letters
            </button>
            <button
              type="button"
              onClick={() => setShowPetals((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition cursor-pointer ${
                showPetals
                  ? 'border-[#D3AD55] bg-[#D3AD55]/20 text-[#FDE68A]'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              Show Petals
            </button>
            <button
              type="button"
              onClick={() => setAnimateElement((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition cursor-pointer ${
                animateElement
                  ? 'border-[#D3AD55] bg-[#D3AD55]/20 text-[#FDE68A]'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              Element Glow
            </button>
            <button
              type="button"
              onClick={() => setUseClassicalPalette((v) => !v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition cursor-pointer ${
                useClassicalPalette
                  ? 'border-emerald-400/60 bg-emerald-950/40 text-emerald-200'
                  : 'border-white/15 bg-white/5 text-white/70'
              }`}
            >
              {useClassicalPalette ? 'Classical Textual Hue' : 'Modern Spectrum Hue'}
            </button>
          </div>
        </div>

        {/* 9-Panel Navigation Bar (Exact Numbering 01 to 09) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2.5 my-6">
          {CHAKRA_STUDIO_PANELS.map((panel) => {
            const isActive = panel.id === activeStudioPanelId;
            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => setActiveStudioPanelId(panel.id)}
                className={`text-left rounded-xl p-3 border transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#D3AD55] bg-gradient-to-b from-[#D3AD55]/25 to-[#D3AD55]/5 shadow-[0_0_20px_rgba(211,173,85,0.25)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: `${panel.accentColor}25`,
                      color: panel.accentColor
                    }}
                  >
                    {panel.panelNumber}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FDE68A]" />}
                </div>
                <div className="font-serif font-bold text-sm text-white leading-snug truncate">
                  {panel.titleEn}
                </div>
                <div className="text-[11px] text-[#FDE68A]/80 truncate">{panel.titleHi}</div>
                <div className="text-[10px] text-white/60 mt-1 line-clamp-1">{panel.subtitleEn}</div>
              </button>
            );
          })}
        </div>

        {/* PANEL 01: INTRODUCTION — SUBTLE BODY & CHAKRA SYSTEM */}
        {activePanel.id === 'panel-intro' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#120D1D] p-4 sm:p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                PANEL 01 · INTERACTIVE CHAKRA-IN-BODY MAP (CLICK ANY CHAKRA)
              </div>
              <InteractiveBodyChakraImage
                selectedChakraId={activeChakraProfile.id}
                onSelectChakra={handleSelectChakraFromDiagram}
                lang={lang}
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="rounded-2xl border border-[#D3AD55]/30 bg-[#151022] p-6">
                <div className="text-xs font-mono text-[#FDE68A] uppercase tracking-widest mb-1">
                  01 · INTRODUCTION · SUBTLE BODY & CHAKRA SYSTEM
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-3">
                  Architecture of the Sūkṣma Śarīra (सूक्ष्म शरीर एवं षट्चक्र-सहस्रार)
                </h4>
                <p className="text-sm text-[#E2D9C8]/90 leading-relaxed mb-4">
                  In Hindu Yogic and Tantric traditions, the human being possesses three bodies: the gross anatomical body (<em>Sthūla Śarīra</em>), the subtle vital-mental body (<em>Sūkṣma Śarīra</em>), and the causal seed body (<em>Kāraṇa Śarīra</em>). The chakras reside within the <strong>Sūkṣma Śarīra</strong> along the central axial channel (<strong>Suṣumṇā Nāḍī</strong>).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3.5">
                    <div className="font-bold text-[#FDE68A] mb-1">Six Chakras + Sahasrāra (6 + 1)</div>
                    <p className="text-white/75 leading-relaxed">
                      Pūrṇānanda’s <em>Ṣaṭ-Cakra-Nirūpaṇa</em> (1577 CE) describes six conditioned lotuses (Mūlādhāra to Ājñā) governed by the 5 elements and Manas, crowned by the transcendent 7th centre, <strong>Sahasrāra</strong>.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-3.5">
                    <div className="font-bold text-[#FDE68A] mb-1">50 Sanskrit Mātṛkā Letters</div>
                    <p className="text-white/75 leading-relaxed">
                      The petal counts of the six lotuses—<strong>4 + 6 + 10 + 12 + 16 + 2 = 50</strong>—house the 50 Sanskrit phonemes from <em>A (अ)</em> to <em>Kṣa (क्ष)</em>. Sahasrāra multiplies them 20× (= 1,000).
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenArticleAndScroll('chakra-vidya-subtle-energy-centres')}
                    className="px-4 py-2 rounded-xl bg-[#D3AD55] text-black font-semibold text-xs flex items-center gap-2 hover:bg-[#e5c168] transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Introductory Monograph: Chakra Vidya
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStudioPanelId('panel-muladhara')}
                    className="px-4 py-2 rounded-xl border border-[#D3AD55]/50 text-[#FDE68A] text-xs font-semibold hover:bg-[#D3AD55]/10 transition cursor-pointer"
                  >
                    Explore Panel 02: Mūlādhāra →
                  </button>
                </div>
              </div>

              {/* Quick 7-Chakra Summary Table inside Panel 01 */}
              <div className="rounded-2xl border border-white/10 bg-[#120D1D] p-4 overflow-x-auto">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-3">
                  CLASSICAL CONCORDANCE OF THE SEVEN CENTRES
                </div>
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/15 text-[#FDE68A]">
                      <th className="py-2 pr-2">Panel</th>
                      <th className="py-2 pr-2">Chakra (Sanskrit)</th>
                      <th className="py-2 pr-2">Petals</th>
                      <th className="py-2 pr-2">Element</th>
                      <th className="py-2 pr-2">Bīja</th>
                      <th className="py-2">Deity & Śakti</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/85">
                    {SEVEN_CHAKRA_PROFILES.map((c) => (
                      <tr
                        key={c.id}
                        onClick={() => handleSelectChakraFromDiagram(c.id)}
                        className="hover:bg-white/5 cursor-pointer transition"
                      >
                        <td className="py-2 pr-2 font-mono text-[#D3AD55]">{c.studioPanelNumber}</td>
                        <td className="py-2 pr-2 font-semibold" style={{ color: c.accentHex }}>
                          {c.nameEn} <span className="text-white/75">({c.nameSanskrit})</span>
                        </td>
                        <td className="py-2 pr-2 font-mono">{c.petalCount}</td>
                        <td className="py-2 pr-2">{c.elementEn.split('—')[0]}</td>
                        <td className="py-2 pr-2 font-serif text-sm text-[#FDE68A]">
                          {c.id === 'sahasrara' ? 'ॐ / विसर्ग' : `${c.bijaMantraDevanagari} (${c.bijaMantraIAST})`}
                        </td>
                        <td className="py-2 text-white/70">
                          {c.presidingDeityEn.split('(')[0].trim()} · {c.shaktiGoddessEn.split('(')[0].trim()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* PANELS 02 TO 08: INDIVIDUAL CHAKRA INTERACTIVE WORKSTATIONS */}
        {activePanel.chakraId && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Left Column: Interactive Lotus SVG + Interactive Chakra-in-Body Map */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl border border-white/15 bg-[#120D1D] p-5 relative">
                <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-2">
                  <span>PANEL {activePanel.panelNumber} · LOTUS MANDALA</span>
                  <span style={{ color: activeChakraProfile.accentHex }}>
                    {activeChakraProfile.petalCountDisplay}
                  </span>
                </div>

                <InteractiveChakraLotusSVG
                  profile={activeChakraProfile}
                  rotateLotus={rotateLotus}
                  showPetals={showPetals}
                  showSanskritLetters={showSanskritLetters}
                  animateElement={animateElement}
                  useClassicalPalette={useClassicalPalette}
                />

                {/* Petal Letters Strip */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55] mb-1.5">
                    Sanskrit Petal Letters (मातृका अक्षर — {activeChakraProfile.petalCount} Petals)
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeChakraProfile.petalLettersDevanagari.map((ltr, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/15 text-xs font-serif text-[#FDE68A]"
                      >
                        {ltr}{' '}
                        <span className="text-[10px] text-white/60 font-mono">
                          ({activeChakraProfile.petalLettersIAST[idx]})
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Body Chakra Placement Map */}
              <div className="rounded-2xl border border-white/10 bg-[#120D1D] p-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                  CHAKRA IN BODY PLACEMENT (CLICK ANY CHAKRA FOR RIPPLE & NAME)
                </div>
                <InteractiveBodyChakraImage
                  selectedChakraId={activeChakraProfile.id}
                  onSelectChakra={handleSelectChakraFromDiagram}
                  lang={lang}
                />
              </div>
            </div>

            {/* Right Column: Complete 16-Attribute Scholarly Profile of the Selected Chakra */}
            <div className="lg:col-span-7 space-y-5">
              <div className="rounded-2xl border border-[#D3AD55]/35 bg-[#151022] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase"
                    style={{
                      backgroundColor: `${activeChakraProfile.accentHex}25`,
                      color: activeChakraProfile.accentHex
                    }}
                  >
                    PANEL {activePanel.panelNumber} · CHAKRA 0{activeChakraProfile.order}
                  </span>
                  <span className="text-xs font-mono text-white/70">
                    {activeChakraProfile.commonEnglishDesignation}
                  </span>
                </div>

                <h4
                  className="text-2xl sm:text-3xl font-serif font-bold"
                  style={{ color: activeChakraProfile.accentHex }}
                >
                  {activeChakraProfile.nameEn}{' '}
                  <span className="text-[#FDE68A]">({activeChakraProfile.nameSanskrit})</span>
                </h4>
                <div className="text-xs font-mono text-white/65 mt-1 mb-4">
                  IAST: {activeChakraProfile.transliteration} · {activeChakraProfile.commonHindiDesignation}
                </div>

                <p className="text-sm text-[#E2D9C8]/90 leading-relaxed mb-4">
                  {lang === 'hi' ? activeChakraProfile.etymologyHi : activeChakraProfile.etymologyEn}
                </p>

                {/* Primary Technical Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Subtle Location (स्थान)</div>
                    <div className="font-semibold text-white mt-0.5">
                      {lang === 'hi' ? activeChakraProfile.subtleLocationHi : activeChakraProfile.subtleLocationEn}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Element (तत्त्व) & Yantra</div>
                    <div className="font-semibold text-white mt-0.5">
                      {activeChakraProfile.elementEn} ({activeChakraProfile.elementHi})
                    </div>
                    <div className="text-white/65 mt-0.5">{activeChakraProfile.yantraGeometryEn}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Bīja Mantra & Vehicle (वाहन)</div>
                    <div className="font-serif text-base font-bold text-[#FDE68A] mt-0.5">
                      {activeChakraProfile.bijaMantraDevanagari} ({activeChakraProfile.bijaMantraIAST})
                    </div>
                    <div className="text-white/70 mt-0.5">{activeChakraProfile.bijaVehicleAnimalEn}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Presiding Deity & Yoginī Śakti</div>
                    <div className="font-semibold text-white mt-0.5">{activeChakraProfile.presidingDeityEn}</div>
                    <div className="text-[#FDE68A]/90 mt-0.5">{activeChakraProfile.shaktiGoddessEn}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Classical vs. Modern Colour</div>
                    <div className="text-white/90 mt-0.5">
                      <strong>Classical:</strong> {activeChakraProfile.petalColorTraditionalEn}
                    </div>
                    <div className="text-white/65 mt-0.5">
                      <strong>Modern Spectrum:</strong> {activeChakraProfile.modernRainbowColorEn}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="text-[10px] font-mono uppercase text-[#D3AD55]">Liṅga, Granthi & Prāṇa-Vāyu</div>
                    <div className="text-white/90 mt-0.5">{activeChakraProfile.lingaAndTriangleEn}</div>
                    <div className="text-white/65 mt-0.5">
                      {activeChakraProfile.granthiEn} · {activeChakraProfile.pranaVayuEn}
                    </div>
                  </div>
                </div>

                {/* Traditional Spiritual Role vs. Modern Psychological Interpretation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/15 p-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-1">
                      Traditional Tantric & Yogic Role
                    </div>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {lang === 'hi' ? activeChakraProfile.traditionalRoleHi : activeChakraProfile.traditionalRoleEn}
                    </p>
                    <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-amber-200/90">
                      <strong>Fruit of Dhyāna:</strong> {activeChakraProfile.traditionalSpiritualFruitEn}
                    </div>
                  </div>

                  <div className="rounded-xl border border-sky-500/30 bg-sky-950/15 p-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-sky-300 mb-1">
                      Modern Psychological Interpretation (Distinguished)
                    </div>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {lang === 'hi'
                        ? activeChakraProfile.modernPsychologicalInterpretationHi
                        : activeChakraProfile.modernPsychologicalInterpretationEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {activeChakraProfile.modernThemesListEn.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-sky-500/15 border border-sky-400/30 text-[10px] text-sky-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button: Open Full Chakra Research Article */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-white/65 font-mono">
                    Citations: {activeChakraProfile.primaryTextCitations.join(' · ')}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenArticleAndScroll(activeChakraProfile.articleSlug)}
                    className="px-4 py-2.5 rounded-xl bg-[#D3AD55] text-black font-semibold text-xs flex items-center gap-2 hover:bg-[#e4bf67] transition shadow-lg cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Open Full Chakra Research Article
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 09: KUṆḌALINĪ STUDIO — NĀḌĪS, GRANTHIS & SUBTLE BODY */}
        {activePanel.id === 'panel-kundalini-studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-5 rounded-2xl border border-amber-500/35 bg-[#120D1D] p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FDE68A] mb-3">
                PANEL 09 · INTERACTIVE NĀḌĪ, GRANTHI & KUṆḌALINĪ BODY SIMULATOR
              </div>

              {/* Interactive Layer Toggles for Panel 09 */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setShowIda((v) => !v)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                    showIda
                      ? 'border-sky-400 bg-sky-950/50 text-sky-200'
                      : 'border-white/15 bg-white/5 text-white/50'
                  }`}
                >
                  Iḍā (Lunar Left)
                </button>
                <button
                  type="button"
                  onClick={() => setShowPingala((v) => !v)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                    showPingala
                      ? 'border-orange-400 bg-orange-950/50 text-orange-200'
                      : 'border-white/15 bg-white/5 text-white/50'
                  }`}
                >
                  Piṅgalā (Solar Right)
                </button>
                <button
                  type="button"
                  onClick={() => setShowSushumna((v) => !v)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                    showSushumna
                      ? 'border-yellow-400 bg-yellow-950/50 text-yellow-200'
                      : 'border-white/15 bg-white/5 text-white/50'
                  }`}
                >
                  Suṣumṇā (Central)
                </button>
                <button
                  type="button"
                  onClick={() => setShowGranthis((v) => !v)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono border cursor-pointer ${
                    showGranthis
                      ? 'border-rose-400 bg-rose-950/50 text-rose-200'
                      : 'border-white/15 bg-white/5 text-white/50'
                  }`}
                >
                  3 Granthis (Knots)
                </button>
              </div>

              <InteractiveBodyChakraImage
                selectedChakraId={activeChakraProfile.id}
                onSelectChakra={handleSelectChakraFromDiagram}
                lang={lang}
                showNadiOverlay={true}
                showIda={showIda}
                showPingala={showPingala}
                showSushumna={showSushumna}
                showGranthis={showGranthis}
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border border-[#D3AD55]/35 bg-[#151022] p-6">
                <div className="text-xs font-mono text-[#FDE68A] uppercase tracking-widest mb-1">
                  09 · KUṆḌALINĪ STUDIO · NĀḌĪS, GRANTHIS & PRĀṆA-VĀYUS
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-3">
                  The Three Principal Nāḍīs, Three Granthis & Kuṇḍalinī Ascent (कुण्डलिनी एवं नाड़ी-त्रय विज्ञान)
                </h4>
                <p className="text-sm text-[#E2D9C8]/90 leading-relaxed mb-4">
                  In <em>Ṣaṭ-Cakra-Nirūpaṇa</em> (vv. 1–3, 50–53) and <em>Haṭha Yoga Pradīpikā</em> (Ch. 3–4), the central spinal axis (<em>Merudaṇḍa</em>) houses the subtle <strong>Suṣumṇā Nāḍī</strong>, within which lie the luminous <strong>Vajrā</strong>, the nectarine <strong>Citriṇī</strong>, and the innermost <strong>Brahma-nāḍī</strong>. Coiled 3½ times around the Svayambhū Liṅga at Mūlādhāra, <strong>Kuṇḍalinī Śakti</strong> awakens when Prāṇa and Apāna unite, piercing the six lotuses and three psychic knots (<em>Granthis</em>) to unite with Paramaśiva in Sahasrāra.
                </p>

                {/* Three Nadis Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
                  <div className="rounded-xl border border-sky-400/30 bg-sky-950/20 p-3.5">
                    <div className="font-bold text-sky-300">1. Iḍā Nāḍī (इड़ा — वाम)</div>
                    <div className="text-white/80 mt-1">
                      Lunar (Candra), cooling, white, feminine river Gaṅgā. Starts on the left of Mūlādhāra and ends at the left nostril.
                    </div>
                  </div>
                  <div className="rounded-xl border border-orange-400/30 bg-orange-950/20 p-3.5">
                    <div className="font-bold text-orange-300">2. Piṅgalā Nāḍī (पिंगला — दक्षिण)</div>
                    <div className="text-white/80 mt-1">
                      Solar (Sūrya), heating, red-tawny, masculine river Yamunā. Starts on the right of Mūlādhāra and ends at the right nostril.
                    </div>
                  </div>
                  <div className="rounded-xl border border-yellow-400/30 bg-yellow-950/20 p-3.5">
                    <div className="font-bold text-yellow-300">3. Suṣumṇā Nāḍī (सुषुम्णा — मध्य)</div>
                    <div className="text-white/80 mt-1">
                      Central axial channel (Sarasvatī), uniting Agni, Soma, and Sūrya. Encloses Vajrā, Citriṇī, and Brahma-nāḍī.
                    </div>
                  </div>
                </div>

                {/* Three Granthis Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="font-bold text-rose-300">Brahma Granthi (ब्रह्म ग्रन्थि)</div>
                    <div className="text-white/75 mt-1">
                      Located at Mūlādhāra/Svādhiṣṭhāna. Binds consciousness to physical survival, bodily identification, and tamasic inertia.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="font-bold text-emerald-300">Viṣṇu Granthi (विष्णु ग्रन्थि)</div>
                    <div className="text-white/75 mt-1">
                      Located at Anāhata (Heart). Binds consciousness to emotional attachment, relational possession, and rajasic preservation.
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/35 p-3.5">
                    <div className="font-bold text-indigo-300">Rudra Granthi (रुद्र ग्रन्थि)</div>
                    <div className="text-white/75 mt-1">
                      Located at Ājñā (Eyebrow centre). Binds consciousness to subtle intellectual ego, siddhis, and dualistic vision.
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenArticleAndScroll('kundalini-yoga-subtle-anatomy')}
                    className="px-4 py-2 rounded-xl bg-[#D3AD55] text-black font-semibold text-xs flex items-center gap-2 hover:bg-[#e5c168] transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Open Kuṇḍalinī Yoga Research Monograph
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenArticleAndScroll('lotus-petals-and-sanskrit-letters')}
                    className="px-4 py-2 rounded-xl border border-[#D3AD55]/50 text-[#FDE68A] text-xs font-semibold hover:bg-[#D3AD55]/10 transition cursor-pointer"
                  >
                    Read 50 Mātṛkā Letters Study →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =====================================================================
          3. PART 5 — INTERACTIVE CHAKRA-IN-BODY PLATE & 50 SANSKRIT LETTERS
         ===================================================================== */}
      <section className="rounded-3xl border border-white/15 bg-[#100B1A] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D3AD55]">
              VISUAL & INTERACTIVE CARTOGRAPHY · सचित्र चक्र-मानचित्र एवं मातृका-चक्र
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Interactive Chakra-in-Body Plate & The 50 Sanskrit Mātṛkā Petal Matrix
            </h3>
          </div>
          <span className="text-xs font-mono text-white/60">
            4 + 6 + 10 + 12 + 16 + 2 = 50 Phonemes · × 20 = 1,000 Sahasrāra
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Chakra-in-Body Plate (Right-hand side texts removed, click for ripple & colored name) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#D3AD55]/35 bg-black/50 p-4">
            <InteractiveBodyChakraImage
              selectedChakraId={activeChakraProfile.id}
              onSelectChakra={handleSelectChakraFromDiagram}
              lang={lang}
            />
          </div>

          {/* Complete 50 Mātṛkā Letters & 5 Mahābhūtas Concordance Chart */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FDE68A]">
              COMPLETE DISTRIBUTION OF THE 50 SANSKRIT LETTERS (अ TO क्ष) & 5 ELEMENTS
            </div>
            {SEVEN_CHAKRA_PROFILES.slice()
              .reverse()
              .map((c) => {
                const hotspot = BODY_CHAKRA_HOTSPOTS.find((h) => h.id === c.id);
                const chakraColor = hotspot ? hotspot.imageChakraColor : c.accentHex;
                const isSelected = activeChakraProfile.id === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => {
                      handleSelectChakraFromDiagram(c.id);
                    }}
                    className={`rounded-xl border p-3.5 transition cursor-pointer ${
                      isSelected
                        ? 'bg-white/[0.08] shadow-lg'
                        : 'border-white/10 bg-white/[0.03] hover:border-[#D3AD55]/50'
                    }`}
                    style={
                      isSelected
                        ? { borderColor: chakraColor, boxShadow: `0 0 20px ${chakraColor}33` }
                        : undefined
                    }
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center font-serif font-bold text-sm text-white"
                          style={{
                            backgroundColor: `${chakraColor}33`,
                            border: `1px solid ${chakraColor}`
                          }}
                        >
                          {c.id === 'sahasrara' ? 'ॐ' : c.bijaMantraDevanagari}
                        </span>
                        <div>
                          <div
                            className="text-sm font-serif font-bold"
                            style={{ color: chakraColor }}
                          >
                            0{c.order}. {c.nameEn} ({c.nameSanskrit})
                          </div>
                          <div className="text-[11px] text-white/65">
                            {c.petalCountDisplay} · {c.elementEn} · Yantra: {c.yantraGeometryEn.split('(')[0]}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#D3AD55]">
                        Deva: {c.presidingDeityEn.split('(')[0].trim()} & {c.shaktiGoddessEn.split(' ')[0]}
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/5 text-xs font-serif text-[#FDE68A]/90">
                      <span className="text-white/55 font-sans text-[11px] mr-1.5">Petals:</span>
                      {c.petalLettersDevanagari.join(' · ')}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. COMPLETE 15-ARTICLE SCHOLARLY RESEARCH ARCHIVE & READER
         ===================================================================== */}
      <section id="sapta-chakra-scholarly-reader" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D3AD55]">
              SCHOLARLY MONOGRAPH LIBRARY · १५ शोध-प्रबंध संग्रह
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Complete Seven-Chakra Research Archive (Parts I, II & III)
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All 15 Articles' },
              { id: 'part1-intro', label: 'Part I · Chakra Vidya (1)' },
              { id: 'part2-seven-chakras', label: 'Part II · 7 Chakras (7)' },
              { id: 'part3-thematic', label: 'Part III · Thematic Monographs (7)' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setArticleCategoryFilter(tab.id as typeof articleCategoryFilter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition cursor-pointer ${
                  articleCategoryFilter === tab.id
                    ? 'border-[#D3AD55] bg-[#D3AD55] text-black font-bold'
                    : 'border-white/15 bg-white/5 text-white/75 hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Article Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredArticles.map((art) => {
            const isSelected = art.slug === activeArticle.slug;
            return (
              <button
                key={art.id}
                type="button"
                onClick={() => setSelectedArticleSlug(art.slug)}
                className={`text-left rounded-2xl p-4 border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#D3AD55] bg-gradient-to-br from-[#D3AD55]/20 to-[#140E22] shadow-[0_0_25px_rgba(211,173,85,0.2)]'
                    : 'border-white/10 bg-[#110C1B] hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase"
                      style={{
                        backgroundColor: `${art.accentColor}25`,
                        color: art.accentColor
                      }}
                    >
                      {art.articleNumber}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#FDE68A] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Active
                      </span>
                    )}
                  </div>
                  <div className="font-serif font-bold text-base text-white leading-snug">
                    {art.titleEn}
                  </div>
                  <div className="text-xs text-[#FDE68A]/85 mt-0.5">{art.titleSanskrit}</div>
                  <p className="text-xs text-white/60 mt-2 line-clamp-2">{art.subtitleEn}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#D3AD55]">
                  <span>Read Full 16-Point Monograph</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* =================================================================
            FULL 16-POINT ARTICLE READER VIEW
           ================================================================= */}
        <div className="rounded-3xl border border-[#D3AD55]/45 bg-gradient-to-b from-[#140E22] to-[#0B0812] p-6 sm:p-10 space-y-8 shadow-2xl">
          {/* Top Navigation Bar inside Article Reader */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <span
              className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase"
              style={{
                backgroundColor: `${activeArticle.accentColor}25`,
                color: activeArticle.accentColor
              }}
            >
              {activeArticle.articleNumber}
            </span>
            <button
              type="button"
              onClick={scrollToStudio}
              className="px-3.5 py-1.5 rounded-xl border border-[#D3AD55]/50 bg-[#D3AD55]/10 text-[#FDE68A] text-xs font-mono flex items-center gap-1.5 hover:bg-[#D3AD55]/20 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Chakra Studio (चक्र अन्वेषण केंद्र)
            </button>
          </div>

          {/* 1, 2, 3. English Title, Sanskrit Title & Transliteration */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {activeArticle.titleEn}
            </h2>
            <div className="text-xl sm:text-2xl font-serif text-[#FDE68A] mt-1.5">
              {activeArticle.titleSanskrit}
            </div>
            <div className="text-xs sm:text-sm font-mono text-white/60 mt-1">
              Transliteration (IAST): {activeArticle.transliteration}
            </div>
            <div className="text-sm text-[#D3AD55] mt-2">
              {lang === 'hi' ? activeArticle.subtitleHi : activeArticle.subtitleEn}
            </div>
          </div>

          {/* 4, 5, 6. Introductory Overview, Historical Background & Traditional Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                04 · Introductory Overview (प्रस्तावना)
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                {lang === 'hi' ? activeArticle.introductoryOverviewHi : activeArticle.introductoryOverviewEn}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                05 · Historical & Textual Background (ऐतिहासिक पृष्ठभूमि)
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                {lang === 'hi' ? activeArticle.historicalBackgroundHi : activeArticle.historicalBackgroundEn}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                06 · Traditional Explanation (शास्त्रीय व्याख्या)
              </div>
              <p className="text-sm text-white/85 leading-relaxed whitespace-pre-line">
                {lang === 'hi' ? activeArticle.traditionalExplanationHi : activeArticle.traditionalExplanationEn}
              </p>
            </div>
          </div>

          {/* 7, 8, 9. Sanskrit Terminology, Iconography & Symbolism, Interactive Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-3">
                  07 · Sanskrit Terminology & Lexicon (संस्कृत पारिभाषिक शब्दावली)
                </div>
                <div className="space-y-3">
                  {activeArticle.sanskritTerminology.map((term, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="font-serif font-bold text-[#FDE68A] text-sm">
                        {term.termDevanagari}{' '}
                        <span className="font-mono text-xs text-white/65">({term.termIAST})</span>
                      </div>
                      <p className="text-xs text-white/80 mt-1">
                        {lang === 'hi' ? term.definitionHi : term.definitionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55] mb-2">
                  08 · Iconography & Sacred Symbolism (ध्यान-स्वरूप एवं प्रतीक-विज्ञान)
                </div>
                <p className="text-sm text-white/85 leading-relaxed">
                  {lang === 'hi' ? activeArticle.iconographyAndSymbolismHi : activeArticle.iconographyAndSymbolismEn}
                </p>
              </div>
            </div>

            {/* 9. Embedded Interactive Diagram for this Article */}
            <div className="lg:col-span-5 rounded-2xl border border-[#D3AD55]/30 bg-[#100B1A] p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FDE68A] mb-3">
                09 · Interactive Sacred Geometry & Subtle Body Map
              </div>
              {activeArticle.chakraProfileId ? (
                <InteractiveChakraLotusSVG
                  profile={
                    SEVEN_CHAKRA_PROFILES.find((c) => c.id === activeArticle.chakraProfileId) ||
                    SEVEN_CHAKRA_PROFILES[0]
                  }
                  rotateLotus={rotateLotus}
                  showPetals={true}
                  showSanskritLetters={true}
                  animateElement={true}
                  useClassicalPalette={useClassicalPalette}
                />
              ) : (
                <InteractiveBodyChakraImage
                  selectedChakraId={activeChakraProfile.id}
                  onSelectChakra={handleSelectChakraFromDiagram}
                  lang={lang}
                />
              )}
            </div>
          </div>

          {/* 10. Detailed Subject Sections */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55]">
              10 · Detailed Scholarly Exposition (विस्तृत शास्त्रीय विवेचन)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeArticle.detailedSections.map((sec, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                  <h4 className="font-serif font-bold text-lg text-[#FDE68A] mb-2">
                    {lang === 'hi' ? sec.headingHi : sec.headingEn}
                  </h4>
                  <p className="text-sm text-white/85 leading-relaxed whitespace-pre-line">
                    {lang === 'hi' ? sec.bodyHi : sec.bodyEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 11, 12, 13. Related Concepts, Traditional vs Modern, Important Distinctions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                12 · Traditional vs. Modern Interpretations (शास्त्रीय बनाम आधुनिक दृष्टि)
              </div>
              <div className="text-xs space-y-2 text-white/85">
                <div>
                  <strong className="text-[#FDE68A]">Classical Sanskrit Sources: </strong>
                  {activeArticle.traditionalVsModernEn.traditionalView}
                </div>
                <div>
                  <strong className="text-sky-300">Modern Popular Adaptation: </strong>
                  {activeArticle.traditionalVsModernEn.modernView}
                </div>
                <div className="pt-2 border-t border-white/10 text-emerald-200">
                  <strong>Scholarly Clarification: </strong>
                  {activeArticle.traditionalVsModernEn.scholarlyClarification}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-amber-500/30 bg-amber-950/15 p-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-300">
                13 · Important Distinctions & Misconceptions (महत्त्वपूर्ण शास्त्रीय स्पष्टीकरण)
              </div>
              <ul className="space-y-2 text-xs text-white/85">
                {(lang === 'hi'
                  ? activeArticle.distinctionsAndMisconceptionsHi
                  : activeArticle.distinctionsAndMisconceptionsEn
                ).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase text-[#D3AD55] mb-1.5">
                  11 · Related Concepts (संबद्ध सिद्धान्त)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(lang === 'hi' ? activeArticle.relatedConceptsHi : activeArticle.relatedConceptsEn).map(
                    (rc, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md border border-white/15 bg-white/5 text-[11px] text-white/80"
                      >
                        {rc}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 14, 15, 16. References, Related Articles & Back to Studio */}
          <div className="pt-4 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D3AD55]">
                14 · Primary Textual References & Further Reading
              </div>
              <div className="text-xs text-white/75">
                {activeArticle.referencesAndReading.join(' · ')}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {activeArticle.relatedArticleSlugs.map((relSlug) => {
                const relArt = SAPTA_CHAKRA_ARCHIVE_ARTICLES.find((a) => a.slug === relSlug);
                if (!relArt) return null;
                return (
                  <button
                    key={relSlug}
                    type="button"
                    onClick={() => handleOpenArticleAndScroll(relSlug)}
                    className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:border-[#D3AD55] text-xs text-[#FDE68A] transition cursor-pointer"
                  >
                    → {relArt.titleEn.split('—')[0].trim()}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={scrollToStudio}
                className="px-4 py-2 rounded-xl bg-[#D3AD55] text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-[#e5c168] transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Chakra Studio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaptaChakraArchiveExperience;
