import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Compass,
  BookOpen,
  Sparkles,
  Layers,
  Radio,
  Shield,
  Mountain,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Check,
  Share2,
  FileText,
  Grid,
  Eye
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  RESEARCH_CATEGORY_PORTALS,
  ResearchCategoryPortal,
  ResearchArticle
} from '../data/researchPortalData';
import { ASHTA_BHAIRAVA_PROFILES, ASHTA_MATRIKA_PROFILES } from '../data/ashtaResearchData';
import {
  SPECIAL_CIRCULAR_SEALS,
  ARTICLE_COMPARISON_TABLES,
  SpecialCircularSeal
} from '../data/sacredSealsDeepData';

const PORTAL_ICONS: React.ComponentType<any>[] = [
  Radio,      // I · CAGS Field Archive
  Compass,    // II · Ashta Bhairava
  Shield,     // III · Bhairav Investigation Codex
  Grid,       // IV · 64 Yogini (8 × 8)
  Sparkles,   // V · Eight Matrikas
  Layers,     // VI · Shri Meru Chakra
  Mountain    // VII · The 14 Lokas
];

const SealGeometricMotif: React.FC<{
  motifType: SpecialCircularSeal['motifType'];
  accentColor: string;
}> = ({ motifType, accentColor }) => {
  return (
    <svg
      className="w-full h-full pointer-events-none"
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      {/* Outer engraved rim */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke={accentColor}
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.55"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke={accentColor}
        strokeWidth="0.9"
        opacity="0.4"
      />
      <circle
        cx="60"
        cy="60"
        r="38"
        fill="none"
        stroke="#8C6239"
        strokeWidth="0.7"
        strokeDasharray="1.5 2.5"
        opacity="0.55"
      />

      {motifType === 'vaishnava' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Twin Vaikuntha pillars + Sudarshana/Lotus */}
          <rect x="33" y="34" width="7" height="52" rx="1.5" />
          <rect x="80" y="34" width="7" height="52" rx="1.5" />
          <path d="M 30 34 L 60 20 L 90 34" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="14" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a) * 6}
                y1={60 + Math.sin(a) * 6}
                x2={60 + Math.cos(a) * 14}
                y2={60 + Math.sin(a) * 14}
              />
            );
          })}
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}

      {motifType === 'aghora' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Sacred Krim Kunda Hexagon / Shatkona + Trident */}
          <polygon points="60,26 89,76 31,76" />
          <polygon points="60,94 89,44 31,44" />
          <line x1="60" y1="24" x2="60" y2="96" strokeWidth="1.2" />
          <path d="M 49 38 C 49 50, 71 50, 71 38" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {motifType === 'ghora11' && (
        <g stroke={accentColor} fill="none" strokeWidth="1" opacity="0.85">
          {/* 12-Spoke Wheel for the 11/12 Ghora Bhedas */}
          <circle cx="60" cy="60" r="26" />
          <circle cx="60" cy="60" r="12" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            return (
              <g key={i}>
                <line
                  x1={60 + Math.cos(a) * 12}
                  y1={60 + Math.sin(a) * 12}
                  x2={60 + Math.cos(a) * 34}
                  y2={60 + Math.sin(a) * 34}
                />
                <circle
                  cx={60 + Math.cos(a) * 34}
                  cy={60 + Math.sin(a) * 34}
                  r="1.8"
                  fill={accentColor}
                />
              </g>
            );
          })}
        </g>
      )}

      {motifType === 'kapalika5' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Pentagon (5 Bhedas) + Soma Crescent + Kapala Bowl */}
          <polygon points="60,25 93,49 80,88 40,88 27,49" />
          <path d="M 44 56 A 16 16 0 0 0 76 56 Z" />
          <path d="M 48 42 A 14 14 0 0 0 72 42" strokeWidth="1.4" />
          <circle cx="60" cy="36" r="2.5" fill={accentColor} />
        </g>
      )}

      {motifType === 'prahar8' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* 8-Dial Solar-Lunar Time Wheel (Ashta Prahara) */}
          <circle cx="60" cy="60" r="30" />
          <circle cx="60" cy="60" r="16" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4 - Math.PI / 2;
            return (
              <g key={i}>
                <line
                  x1={60 + Math.cos(a) * 8}
                  y1={60 + Math.sin(a) * 8}
                  x2={60 + Math.cos(a) * 35}
                  y2={60 + Math.sin(a) * 35}
                />
                <circle
                  cx={60 + Math.cos(a) * 30}
                  cy={60 + Math.sin(a) * 30}
                  r="2.2"
                  fill={i < 4 ? accentColor : '#120B07'}
                  stroke={accentColor}
                />
              </g>
            );
          })}
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {motifType === 'bhairavagana' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Ashta-Bhairava Octagram Shield */}
          <rect x="36" y="36" width="48" height="48" />
          <rect
            x="36"
            y="36"
            width="48"
            height="48"
            transform="rotate(45 60 60)"
          />
          <circle cx="60" cy="60" r="11" />
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}

      {motifType === 'shakta' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Interlocking Kalikula & Srikula Yantra Triangles + Lotus */}
          <polygon points="60,26 90,78 30,78" />
          <polygon points="60,94 90,42 30,42" />
          <circle cx="60" cy="60" r="15" />
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {motifType === 'mahavidya' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* 10-Pointed Dasa Mahavidya Radial Star + 9-Pointed Inner Ring */}
          {Array.from({ length: 10 }).map((_, i) => {
            const a1 = (i * 2 * Math.PI) / 10 - Math.PI / 2;
            const a2 = (((i + 3) % 10) * 2 * Math.PI) / 10 - Math.PI / 2;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a1) * 33}
                y1={60 + Math.sin(a1) * 33}
                x2={60 + Math.cos(a2) * 33}
                y2={60 + Math.sin(a2) * 33}
              />
            );
          })}
          <circle cx="60" cy="60" r="12" />
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}
    </svg>
  );
};

interface CircularMandalaNavProps {
  activeChapterIndex: number;
  activeRouteMode: 'overview' | 'category' | 'article';
  onSelectChapterPreview: (chapterIndex: number) => void;
  onOpenCategoryPortal: (categorySlug: string) => void;
  onOpenArticle: (categorySlug: string, articleSlug: string) => void;
}

export const CircularMandalaNavigation: React.FC<CircularMandalaNavProps> = ({
  activeChapterIndex,
  activeRouteMode,
  onSelectChapterPreview,
  onOpenCategoryPortal,
  onOpenArticle
}) => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const focusedIndex = hoveredIndex !== null ? hoveredIndex : activeChapterIndex;
  const focusedPortal =
    RESEARCH_CATEGORY_PORTALS[focusedIndex] || RESEARCH_CATEGORY_PORTALS[0];

  return (
    <div
      id="research-mandala-portals"
      className={
        activeRouteMode === 'overview'
          ? 'mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#5A3922]/40 relative'
          : 'mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#5A3922]/50 relative'
      }
    >
      {/* Ambient Radial Glow Behind Mandala */}
      <div
        className="pointer-events-none absolute inset-x-0 top-6 mx-auto w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full blur-3xl opacity-15"
        style={{
          background: `radial-gradient(circle, ${focusedPortal.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Mandala Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/35 bg-[#23160E]/90 mb-2.5">
          <Compass className="w-3.5 h-3.5 text-[#D3AD55]" />
          <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
            {t(
              'SAPTA-DVĀRA · SEVEN SACRED GATEWAYS OF KNOWLEDGE',
              'सप्त ज्ञान-द्वार · ७ पवित्र शोध द्वार'
            )}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F2E5C9] tracking-wide">
          {t(
            'The Seven Sacred Gateways — Mandala Portal Navigation',
            'सप्त ज्ञान-द्वार — पवित्र मण्डल शोध नेविगेशन'
          )}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#C8B69E]/80 font-serif max-w-2xl mx-auto leading-relaxed">
          {t(
            'Select any of the seven circular gateways around the mandala circumference to open its dedicated Category Landing Page, subcategory traditions, source-conscious monographs, and interactive research studio.',
            'किसी भी वृत्ताकार ज्ञान-द्वार को चुनकर उसका समर्पित श्रेणी पृष्ठ, उप-परंपराएँ, मूल-स्रोत शोध-लेख एवं संवादात्मक अध्ययन कक्ष खोलें।'
          )}
        </p>
      </div>

      {/* Main Grid: Left/Center Circular Mandala Wheel + Right Active Portal Gateway Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
        {/* Left 7 Cols: Interactive 7-Portal Circular Mandala Diagram */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-[308px] h-[308px] xs:w-[340px] xs:h-[340px] sm:w-[410px] sm:h-[410px] flex items-center justify-center select-none">
            {/* Sacred Geometric SVG Mandala Base */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 420 420"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="mandalaCoreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B2416" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#1A110B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#120B07" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              {/* Outer Bhupura & Concentric Mandala Rings */}
              <circle
                cx="210"
                cy="210"
                r="202"
                fill="none"
                stroke="#5A3922"
                strokeWidth="1"
                strokeDasharray="3 5"
                opacity="0.65"
              />
              <circle
                cx="210"
                cy="210"
                r="188"
                fill="none"
                stroke="#D3AD55"
                strokeWidth="0.7"
                opacity="0.28"
              />
              <circle
                cx="210"
                cy="210"
                r="146"
                fill="none"
                stroke="#D3AD55"
                strokeWidth="1.1"
                opacity="0.4"
              />
              <circle
                cx="210"
                cy="210"
                r="102"
                fill="url(#mandalaCoreGrad)"
                stroke="#8C6239"
                strokeWidth="0.8"
                strokeDasharray="2 3"
                opacity="0.55"
              />
              <circle
                cx="210"
                cy="210"
                r="66"
                fill="none"
                stroke="#D3AD55"
                strokeWidth="0.75"
                opacity="0.35"
              />

              {/* 14-Petal Subtle Lotus Geometry around Central Hub */}
              {Array.from({ length: 14 }).map((_, i) => {
                const a1 = ((i * 360) / 14) * (Math.PI / 180);
                const aMid = (((i + 0.5) * 360) / 14) * (Math.PI / 180);
                const a2 = (((i + 1) * 360) / 14) * (Math.PI / 180);
                const rInner = 66;
                const rOuter = 98;
                const x1 = 210 + Math.cos(a1) * rInner;
                const y1 = 210 + Math.sin(a1) * rInner;
                const xm = 210 + Math.cos(aMid) * rOuter;
                const ym = 210 + Math.sin(aMid) * rOuter;
                const x2 = 210 + Math.cos(a2) * rInner;
                const y2 = 210 + Math.sin(a2) * rInner;
                return (
                  <path
                    key={`petal-${i}`}
                    d={`M ${x1} ${y1} Q ${xm} ${ym} ${x2} ${y2}`}
                    fill="none"
                    stroke="#D3AD55"
                    strokeWidth="0.65"
                    opacity="0.24"
                  />
                );
              })}

              {/* Sacred Heptagram (7-Pointed Geometric Star Web Connecting Portals) */}
              {RESEARCH_CATEGORY_PORTALS.map((portal, idx) => {
                const nextPortal =
                  RESEARCH_CATEGORY_PORTALS[(idx + 2) % RESEARCH_CATEGORY_PORTALS.length];
                const adjPortal =
                  RESEARCH_CATEGORY_PORTALS[(idx + 1) % RESEARCH_CATEGORY_PORTALS.length];
                const r = 146;
                const rad1 = (portal.mandalaAngle * Math.PI) / 180;
                const rad2 = (nextPortal.mandalaAngle * Math.PI) / 180;
                const radAdj = (adjPortal.mandalaAngle * Math.PI) / 180;

                const x1 = 210 + Math.cos(rad1) * r;
                const y1 = 210 + Math.sin(rad1) * r;
                const x2 = 210 + Math.cos(rad2) * r;
                const y2 = 210 + Math.sin(rad2) * r;
                const xAdj = 210 + Math.cos(radAdj) * r;
                const yAdj = 210 + Math.sin(radAdj) * r;

                const isHighlighted =
                  idx === focusedIndex ||
                  (idx + 2) % RESEARCH_CATEGORY_PORTALS.length === focusedIndex;

                return (
                  <g key={`chord-${portal.slug}`}>
                    {/* Heptagram star chord */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isHighlighted ? focusedPortal.accentColor : '#5A3922'}
                      strokeWidth={isHighlighted ? '1.1' : '0.6'}
                      opacity={isHighlighted ? '0.45' : '0.22'}
                    />
                    {/* Heptagon perimeter chord */}
                    <line
                      x1={x1}
                      y1={y1}
                      x2={xAdj}
                      y2={yAdj}
                      stroke="#8C6239"
                      strokeWidth="0.6"
                      strokeDasharray="2 3"
                      opacity="0.3"
                    />
                  </g>
                );
              })}

              {/* Radial Spokes from Central Bindu to each of the 7 Circular Portals */}
              {RESEARCH_CATEGORY_PORTALS.map((portal, idx) => {
                const rad = (portal.mandalaAngle * Math.PI) / 180;
                const x1 = 210 + Math.cos(rad) * 56;
                const y1 = 210 + Math.sin(rad) * 56;
                const x2 = 210 + Math.cos(rad) * 146;
                const y2 = 210 + Math.sin(rad) * 146;
                const isSelected = idx === activeChapterIndex;
                const isFocused = idx === focusedIndex;

                return (
                  <g key={`spoke-${portal.slug}`}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isFocused ? portal.accentColor : '#5A3922'}
                      strokeWidth={isSelected || isFocused ? '2' : '0.9'}
                      strokeDasharray={isSelected || isFocused ? 'none' : '3 3'}
                    />
                    {(isSelected || isFocused) && (
                      <circle
                        cx={x2}
                        cy={y2}
                        r="38"
                        fill="none"
                        stroke={portal.accentColor}
                        strokeWidth="1"
                        opacity="0.55"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Slowly Rotating Sanskrit Ring Inscription (Preserved in Sanskrit) */}
            <svg
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] text-[#D3AD55]/18 animate-[spin_160s_linear_infinite] motion-reduce:animate-none pointer-events-none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                id="researchMandalaSanskritPath"
                d="M 100, 100 m -84, 0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0"
                fill="none"
              />
              <text fontFamily="serif" fontSize="5.4" fill="currentColor" letterSpacing="1.8">
                <textPath href="#researchMandalaSanskritPath">
                  ॥ नाद-शास्त्र · अष्ट-भैरव · काल-भैरव संहिता · चतुःषष्टि-योगिनी · शक्ति-तत्त्व अष्ट-मातृका · श्री-मेरु-चक्र · चतुर्दश-लोक मण्डलम् ॥
                </textPath>
              </text>
            </svg>

            {/* Central Mandala Bindu Hub */}
            <button
              type="button"
              onClick={() => onOpenCategoryPortal(focusedPortal.slug)}
              aria-label={t(
                `Open ${focusedPortal.shortTitleEn} Portal Landing Page`,
                `${focusedPortal.shortTitleHi} श्रेणी पृष्ठ खोलें`
              )}
              className="relative z-20 w-[108px] h-[108px] sm:w-[122px] sm:h-[122px] rounded-full bg-gradient-to-br from-[#2B1910] via-[#190F0A] to-[#0E0805] border-2 border-[#D3AD55]/75 shadow-[0_0_32px_rgba(211,173,85,0.28)] flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#D3AD55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55]"
            >
              <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#D3AD55]/80">
                {t('GATEWAY', 'ज्ञान-द्वार')} {focusedPortal.roman}
              </span>
              <span className="font-serif text-[11px] sm:text-[12.5px] font-bold text-[#F5E8CE] leading-tight mt-0.5 line-clamp-2 px-1">
                {t(focusedPortal.shortTitleEn, focusedPortal.shortTitleHi)}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D3AD55]/15 border border-[#D3AD55]/40 font-mono text-[7.5px] sm:text-[8px] uppercase tracking-[0.14em] text-[#D3AD55]">
                <span>{t('Enter Gateway', 'द्वार खोलें')}</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </button>

            {/* The 7 Circular Category Portal Medallions around the Mandala */}
            {RESEARCH_CATEGORY_PORTALS.map((portal, idx) => {
              const IconComponent = PORTAL_ICONS[idx] || Compass;
              const rad = (portal.mandalaAngle * Math.PI) / 180;
              // Percentage positioning so it scales cleanly across 308px, 340px, and 410px containers
              const radiusPct = 35.5; // 35.5% from center (50%)
              const leftPct = 50 + Math.cos(rad) * radiusPct;
              const topPct = 50 + Math.sin(rad) * radiusPct;

              const isSelected = idx === activeChapterIndex;
              const isHovered = idx === hoveredIndex;

              return (
                <button
                  key={portal.slug}
                  type="button"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  onClick={() => {
                    onSelectChapterPreview(idx);
                    onOpenCategoryPortal(portal.slug);
                  }}
                  aria-label={t(
                    `Gateway ${portal.roman}: ${portal.shortTitleEn} — Open Category Landing Page`,
                    `द्वार ${portal.roman}: ${portal.shortTitleHi} — समर्पित श्रेणी पृष्ठ खोलें`
                  )}
                  aria-current={isSelected ? 'true' : undefined}
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: 'translate(-50%, -50%)',
                    borderColor: isSelected || isHovered ? portal.accentColor : '#5A3922'
                  }}
                  className={`absolute z-30 w-[64px] h-[64px] xs:w-[70px] xs:h-[70px] sm:w-[82px] sm:h-[82px] rounded-full flex flex-col items-center justify-center p-1 text-center transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#3D2314] to-[#1B100A] border-2 shadow-[0_0_24px_rgba(211,173,85,0.45)] scale-110'
                      : 'bg-gradient-to-br from-[#23150D]/95 to-[#120B07]/95 border hover:scale-105 hover:shadow-[0_0_18px_rgba(211,173,85,0.28)]'
                  }`}
                >
                  {/* Roman Numeral Pill */}
                  <span
                    className="font-mono text-[8px] sm:text-[9px] font-bold tracking-[0.16em] uppercase leading-none"
                    style={{ color: isSelected || isHovered ? portal.accentColor : '#C8B69E' }}
                  >
                    {portal.roman}
                  </span>

                  {/* Sacred Icon */}
                  <IconComponent
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 my-0.5 transition-transform duration-300"
                    style={{ color: isSelected || isHovered ? portal.accentColor : '#D3AD55' }}
                    strokeWidth={1.75}
                  />

                  {/* Short Label */}
                  <span className="font-serif text-[8px] xs:text-[8.5px] sm:text-[9.5px] leading-tight text-[#F2E5C9] font-medium line-clamp-2 px-0.5">
                    {t(portal.shortTitleEn, portal.shortTitleHi)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Caption Under Circular Mandala */}
          <div className="mt-3 text-center">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#877665]">
              {t(
                'CLICK ANY CIRCULAR GATEWAY TO OPEN ITS DEDICATED ARCHIVE PAGE',
                'समर्पित शोध पृष्ठ खोलने हेतु किसी भी वृत्ताकार ज्ञान-द्वार पर क्लिक करें'
              )}
            </span>
          </div>
        </div>

        {/* Right 5 Cols: Active Portal Inspector & Quick-Launch Gateway Card */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={focusedPortal.slug}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-[#D3AD55]/40 bg-gradient-to-b from-[#23160E]/95 to-[#140C08]/95 p-5 sm:p-6 shadow-[0_14px_38px_rgba(0,0,0,0.65)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#5A3922]/50">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: `${focusedPortal.accentColor}66`,
                    color: focusedPortal.accentColor,
                    backgroundColor: `${focusedPortal.accentColor}14`
                  }}
                >
                  {t(
                    focusedPortal.gatewayBadgeEn || `GATEWAY ${focusedPortal.roman} · ${focusedPortal.domainTagEn}`,
                    focusedPortal.gatewayBadgeHi || `द्वार ${focusedPortal.roman} · ${focusedPortal.domainTagHi}`
                  )}
                </span>
                <span className="font-mono text-[10px] text-[#C8B69E]/75 tracking-[0.15em] uppercase">
                  {focusedPortal.articles.length}{' '}
                  {t('Monographs', 'शोध-लेख')}
                </span>
              </div>

              <h4 className="mt-3.5 text-xl sm:text-2xl font-serif text-[#F5E8CE] font-semibold tracking-wide">
                {t(focusedPortal.titleEn, focusedPortal.titleHi)}
              </h4>

              <p className="mt-1 font-serif text-xs sm:text-sm text-[#D3AD55]/90">
                {focusedPortal.sanskritSeal}
              </p>

              <p className="mt-2.5 text-xs sm:text-[13.5px] text-[#E6D7BD]/85 font-serif leading-relaxed">
                {t(focusedPortal.overviewEn, focusedPortal.overviewHi)}
              </p>

              {/* Subcategory Tradition Tags Preview */}
              {focusedPortal.subcategories && focusedPortal.subcategories.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[#5A3922]/40">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#877665] mb-2">
                    {t('INCLUDED SUBCATEGORIES & TRADITIONS:', 'समाहित उप-श्रेणियाँ एवं परम्पराएँ:')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {focusedPortal.subcategories.map(sub => (
                      <span
                        key={sub.id}
                        className="px-2 py-0.5 rounded bg-[#180F0A] border border-[#5A3922]/65 font-serif text-[11px] text-[#E6D7BD]/90"
                      >
                        {sub.sanskritName}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dual Action Buttons: Open Dedicated Category Landing Page OR Preview Interactive Studio */}
              <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenCategoryPortal(focusedPortal.slug)}
                  className="flex-1 min-h-[42px] px-4 py-2.5 rounded-lg bg-[#D3AD55] hover:bg-[#e3be64] text-[#17100C] font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(211,173,85,0.3)] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>
                    {t('Open Sacred Gateway Page', 'समर्पित ज्ञान-द्वार पृष्ठ खोलें')}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectChapterPreview(focusedPortal.chapterIndex);
                    onOpenCategoryPortal(focusedPortal.slug);
                  }}
                  className="min-h-[42px] px-3.5 py-2.5 rounded-lg border border-[#D3AD55]/50 bg-[#17100C]/90 hover:bg-[#382116]/70 text-[#E6D7BD] font-mono text-[10px] uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D3AD55]" />
                  <span>{t('Interactive Studio', 'संवादात्मक अध्ययन कक्ष')}</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ====================================================================
          DEDICATED CIRCULAR ENGRAVED TOPIC SEALS (8 SACRED SEALS OF DEPTH)
          Jaya–Vijaya · Aghora · Ghora 11/12 Bhedas · Kāpālika 5 Bhedas ·
          Samaya & 8 Prahars · Bhairavagaṇa · Kālīkula–Śrīkula · Mahāvidyā–Navadurgā
          ==================================================================== */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#5A3922]/55 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/40 bg-[#23160E]/90 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-[#D3AD55]">
              {t(
                'AṢṬA-MUDRĀ · EIGHT DEDICATED CIRCULAR ENGRAVED RESEARCH SEALS',
                'अष्ट-मुद्रा · ८ समर्पित वृत्ताकार शोध मुद्राएँ (प्रत्यक्ष प्रवेश)'
              )}
            </span>
          </div>
          <h4 className="text-lg sm:text-2xl font-serif text-[#F5E8CE] tracking-wide">
            {t(
              'Specialized Circular Seals — Deep-Dive Monographs & Bheda Classifications',
              'विशेष वृत्ताकार शोध-मुद्राएँ — गहन अध्ययन एवं भेद-वर्गीकरण'
            )}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-[#C8B69E]/80 font-serif max-w-2xl mx-auto leading-relaxed">
            {t(
              'Click any engraved circular seal below to open its full standalone monograph page — covering Jaya & Vijaya, Aghora Sampradāya, Ghora Sampradāya’s 11 (12) Bhedas, Kāpālika Somāsiddhānta & 5 Bhedas, Samaya & the 8 Prahars, Bhairavagaṇa, Kālīkula–Śrīkula, and Daśa Mahāvidyā & Navadurgā.',
              'जय–विजय, अघोर सम्प्रदाय, घोर सम्प्रदाय के ११ (१२) भेद, कापालिक सोमसिद्धान्त एवं ५ भेद, समय और अष्ट प्रहर (८ पहर), भैरवगण, कालीकुल–श्रीकुल तथा दशमहाविद्या–नवदुर्गा के विस्तृत स्वतंत्र शोध-पृष्ठ खोलने हेतु किसी भी वृत्ताकार मुद्रा पर क्लिक करें।'
            )}
          </p>
        </div>

        {/* Responsive Circular Medallion Grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-1 sm:px-2">
          {SPECIAL_CIRCULAR_SEALS.map(seal => {
            const linkedPortal = RESEARCH_CATEGORY_PORTALS.find(
              p => p.slug === seal.categorySlug
            );
            const gatewayRoman = linkedPortal ? linkedPortal.roman : 'I';
            const centerLabel = (seal.sanskritSeal || '').split('·')[0].trim();

            return (
              <button
                key={seal.id}
                type="button"
                onClick={() => onOpenArticle(seal.categorySlug, seal.articleSlug)}
                aria-label={t(
                  `${seal.sealNumber}: ${seal.shortTitleEn} — Open Detailed Research Monograph`,
                  `${seal.sealNumber}: ${seal.shortTitleHi} — विस्तृत शोध-प्रबंध खोलें`
                )}
                className="group relative rounded-2xl border border-[#5A3922]/75 bg-gradient-to-b from-[#22150D]/95 via-[#160D08]/95 to-[#0E0805]/95 p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D3AD55] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(211,173,85,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55]"
              >
                {/* Top Seal Number & Gateway Badge */}
                <div className="w-full flex items-center justify-between gap-1 mb-2.5">
                  <span
                    className="font-mono text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${seal.accentColor}66`,
                      color: seal.accentColor,
                      backgroundColor: `${seal.accentColor}15`
                    }}
                  >
                    {seal.sealNumber}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[8.5px] uppercase tracking-wider text-[#C8B69E]/70">
                    {t('GW', 'द्वार')} {gatewayRoman}
                  </span>
                </div>

                {/* Circular Engraved Sacred Seal Medallion */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2E1B11] via-[#190F0A] to-[#0D0704] border-2 flex items-center justify-center shadow-[0_0_24px_rgba(0,0,0,0.75)] group-hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${seal.accentColor}99` }}
                >
                  <SealGeometricMotif
                    motifType={seal.motifType}
                    accentColor={seal.accentColor}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className="px-1.5 py-0.5 rounded bg-[#120B07]/90 border font-serif text-[9px] sm:text-[10px] font-semibold tracking-wide text-[#F5E8CE] shadow"
                      style={{ borderColor: `${seal.accentColor}66` }}
                    >
                      {centerLabel}
                    </span>
                  </div>
                </div>

                {/* Sanskrit Subtitle Underneath Circle */}
                <span className="mt-3 font-serif text-[11px] sm:text-xs text-[#D3AD55] font-medium line-clamp-1">
                  {seal.sanskritSeal}
                </span>

                {/* Main Title */}
                <h5 className="mt-1 font-serif text-sm sm:text-base font-semibold text-[#F5E8CE] group-hover:text-[#D3AD55] transition-colors leading-snug">
                  {t(seal.shortTitleEn, seal.shortTitleHi)}
                </h5>

                {/* Short Descriptor */}
                <p className="mt-1 text-[11px] sm:text-xs font-serif text-[#C8B69E]/85 leading-relaxed line-clamp-2">
                  {t(seal.subtitleEn, seal.subtitleHi)}
                </p>

                {/* Evidence / Verification Status Pill */}
                <div className="mt-3 pt-2.5 border-t border-[#5A3922]/45 w-full flex items-center justify-between gap-1">
                  <span className="font-mono text-[7.5px] sm:text-[8px] uppercase tracking-wider text-[#C8B69E]/75 truncate">
                    {t(seal.domainBadgeEn, seal.domainBadgeHi)}
                  </span>
                  <span
                    className="shrink-0 inline-flex items-center gap-1 font-mono text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider"
                    style={{ color: seal.accentColor }}
                  >
                    <span>{t('Open Seal', 'खोलें')}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// DEDICATED CATEGORY LANDING PAGE VIEW (/research/:categorySlug)
// ============================================================================
interface CategoryLandingPageViewProps {
  portal: ResearchCategoryPortal;
  onBackToOverview: () => void;
  onSelectCategoryPortal: (categorySlug: string) => void;
  onOpenArticle: (categorySlug: string, articleSlug: string) => void;
  children?: React.ReactNode; // Interactive Research Studio for this Category
}

export const CategoryLandingPageView: React.FC<CategoryLandingPageViewProps> = ({
  portal,
  onBackToOverview,
  onSelectCategoryPortal,
  onOpenArticle,
  children
}) => {
  const { t } = useLanguage();
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'articles' | 'studio' | 'both'>('both');
  const [selectedMatrixBhairavaRow, setSelectedMatrixBhairavaRow] = useState<number>(0);
  const [articleSearchQuery, setArticleSearchQuery] = useState<string>('');

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/research/${portal.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const filteredArticles = portal.articles.filter(article => {
    const q = articleSearchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      article.titleEn.toLowerCase().includes(q) ||
      article.titleHi.toLowerCase().includes(q) ||
      article.subtitleEn.toLowerCase().includes(q) ||
      article.subtitleHi.toLowerCase().includes(q) ||
      article.code.toLowerCase().includes(q) ||
      article.summaryEn.toLowerCase().includes(q) ||
      article.primarySourcesEn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full space-y-8">
      {/* Top Archival Navigation & URL Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-5 rounded-xl bg-[#110C09]/95 border border-[#5A3922]/70 shadow-lg">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onBackToOverview}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#D3AD55]/65 bg-[#23160E] hover:bg-[#382116] text-[#D3AD55] font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_15px_rgba(211,173,85,0.18)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('Back to Main Page', 'मुख्य पृष्ठ पर वापस जाएँ')}</span>
          </button>

          <span className="text-[#5A3922] font-mono text-xs">/</span>

          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#F2E5C9] font-semibold">
            {t(portal.titleEn, portal.titleHi)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="hidden sm:inline-block font-mono text-[10px] px-2.5 py-1 rounded bg-[#1A120D] border border-[#5A3922]/50 text-[#C8B69E]/80">
            /research/{portal.slug}
          </span>
          <button
            type="button"
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#5A3922]/70 bg-[#17100C] hover:border-[#D3AD55] text-[#C8B69E] hover:text-[#D3AD55] font-mono text-[9.5px] uppercase tracking-wider transition-all cursor-pointer"
          >
            {copiedUrl ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">{t('Copied Link', 'लिंक कॉपी हुआ')}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3 h-3" />
                <span>{t('Copy Gateway URL', 'द्वार लिंक')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Compact 7 Circular Gateways Switcher Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {RESEARCH_CATEGORY_PORTALS.map((p, idx) => {
          const IconComp = PORTAL_ICONS[idx] || Compass;
          const isCurrent = p.slug === portal.slug;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => {
                setArticleSearchQuery('');
                onSelectCategoryPortal(p.slug);
              }}
              className={`shrink-0 flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full border transition-all cursor-pointer ${
                isCurrent
                  ? 'border-[#D3AD55] bg-[#382116] text-[#F5E8CE] shadow-[0_0_12px_rgba(211,173,85,0.25)]'
                  : 'border-[#5A3922]/50 bg-[#140D09]/85 text-[#C8B69E]/75 hover:border-[#D3AD55]/50 hover:text-[#F5E8CE]'
              }`}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border"
                style={{
                  borderColor: isCurrent ? p.accentColor : '#5A3922',
                  color: isCurrent ? p.accentColor : '#D3AD55'
                }}
              >
                <IconComp className="w-3 h-3" />
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.14em]">
                {p.roman} · {t(p.shortTitleEn, p.shortTitleHi)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Landing Page Hero Banner */}
      <div className="relative rounded-2xl border border-[#D3AD55]/45 bg-gradient-to-br from-[#26170F] via-[#180F0A] to-[#110A07] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.75)] overflow-hidden">
        <div
          className="pointer-events-none absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: portal.accentColor }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span
                className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] font-semibold border"
                style={{
                  borderColor: `${portal.accentColor}66`,
                  color: portal.accentColor,
                  backgroundColor: `${portal.accentColor}15`
                }}
              >
                {t(
                  portal.gatewayBadgeEn || `SACRED GATEWAY ${portal.roman} · ${portal.domainTagEn}`,
                  portal.gatewayBadgeHi || `पवित्र द्वार ${portal.roman} · ${portal.domainTagHi}`
                )}
              </span>
              <span className="font-serif text-xs sm:text-sm text-[#D3AD55]/90 px-2.5 py-0.5 rounded bg-[#110C09]/80 border border-[#5A3922]/60">
                {portal.sanskritSeal}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F5E8CE] font-semibold tracking-wide">
              {t(portal.titleEn, portal.titleHi)}
            </h3>

            <p className="mt-1.5 text-sm sm:text-base text-[#D3AD55] font-serif">
              {t(portal.subtitleEn, portal.subtitleHi)}
            </p>

            <blockquote className="mt-4 p-3.5 sm:p-4 rounded-r-lg border-l-4 border-[#D3AD55] bg-[#110C09]/70 font-serif italic text-xs sm:text-sm text-[#E6D7BD]/90">
              {t(portal.epigraphEn, portal.epigraphHi)}
            </blockquote>

            <p className="mt-4 text-sm sm:text-[15px] text-[#E6D7BD]/85 font-serif leading-relaxed">
              {t(portal.overviewEn, portal.overviewHi)}
            </p>

            {/* Source-Conscious Editorial Framing Note */}
            {portal.editorialFramingEn && (
              <div className="mt-4 p-3.5 rounded-lg border border-[#D3AD55]/30 bg-[#150D08]/90 text-xs font-serif text-[#C8B69E]/90 leading-relaxed">
                {t(portal.editorialFramingEn, portal.editorialFramingHi || portal.editorialFramingEn)}
              </div>
            )}
          </div>

          {/* Right Archival Metadata Box */}
          <div className="lg:w-80 shrink-0 rounded-xl border border-[#5A3922]/70 bg-[#120B07]/90 p-4 space-y-3">
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#877665]">
                {t('PRINCIPAL INVESTIGATOR', 'प्रमुख अन्वेषक')}
              </span>
              <span className="font-serif text-sm text-[#F5E8CE] font-semibold">
                {t('Ram Ashok Kumar', 'राम अशोक कुमार')}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#877665]">
                {t('METHODOLOGICAL PROTOCOL', 'शोध कार्यप्रणाली')}
              </span>
              <span className="font-serif text-xs text-[#E6D7BD]/85 leading-snug block mt-0.5">
                {t(portal.methodologyEn, portal.methodologyHi)}
              </span>
            </div>
            <div>
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#877665]">
                {t('PRIMARY SOURCE REGISTER', 'मूल स्रोत पंजिका')}
              </span>
              <span className="font-serif text-xs text-[#D3AD55]/90 leading-snug block mt-0.5">
                {t(portal.sourceRegisterEn, portal.sourceRegisterHi)}
              </span>
            </div>
            <div className="pt-2 border-t border-[#5A3922]/40 flex items-center justify-between font-mono text-[10px] text-[#C8B69E]">
              <span>{t('COLLECTION SIZE:', 'संग्रह आकार:')}</span>
              <span className="text-[#D3AD55] font-bold">
                {portal.slug === '64-yogini-matrix'
                  ? t(`${portal.articles.length} Monographs + 64 Matrix Nodes`, `${portal.articles.length} लेख + 64 कोष्ठ`)
                  : `${portal.articles.length} ${t('Articles', 'शोध-लेख')}`}
              </span>
            </div>
          </div>
        </div>

        {/* Display Mode Filter Bar */}
        <div className="mt-6 pt-4 border-t border-[#5A3922]/50 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8B69E]/80">
            {t('GATEWAY VIEW MODE:', 'ज्ञान-द्वार दृश्य मोड:')}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'both'
                  ? 'border-[#D3AD55] bg-[#382116] text-[#F5E8CE]'
                  : 'border-[#5A3922]/50 bg-[#140D09] text-[#877665] hover:text-[#E6D7BD]'
              }`}
            >
              {t('Traditions + Articles + Interactive Studio', 'परम्पराएँ + शोध-लेख + संवादात्मक कक्ष')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('articles')}
              className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'articles'
                  ? 'border-[#D3AD55] bg-[#382116] text-[#F5E8CE]'
                  : 'border-[#5A3922]/50 bg-[#140D09] text-[#877665] hover:text-[#E6D7BD]'
              }`}
            >
              {t(`Monograph Articles (${portal.articles.length})`, `शोध-लेख संग्रह (${portal.articles.length})`)}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('studio')}
              className={`px-3 py-1.5 rounded font-mono text-[10px] uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === 'studio'
                  ? 'border-[#D3AD55] bg-[#382116] text-[#F5E8CE]'
                  : 'border-[#5A3922]/50 bg-[#140D09] text-[#877665] hover:text-[#E6D7BD]'
              }`}
            >
              {t('Interactive Apparatus Only', 'केवल संवादात्मक यंत्र')}
            </button>
          </div>
        </div>
      </div>

      {/* SECTION A1: SUBCATEGORIES & CORE TRADITIONS WITHIN THIS SACRED GATEWAY */}
      {(activeTab === 'both' || activeTab === 'articles') &&
        portal.subcategories &&
        portal.subcategories.length > 0 && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5A3922]/50 pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
                  {t('GATEWAY SUBCATEGORIES & TRADITIONS', 'ज्ञान-द्वार की उप-श्रेणियाँ एवं प्रमुख धाराएँ')}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-[#F5E8CE] mt-0.5">
                  {t(
                    `Core Domains & Subcategories in ${portal.shortTitleEn}`,
                    `${portal.shortTitleHi} के प्रमुख विषय एवं उप-परम्पराएँ`
                  )}
                </h4>
              </div>
              <span className="font-mono text-[10px] text-[#C8B69E]/75 uppercase tracking-widest">
                {portal.subcategories.length} {t('Subcategories', 'उप-श्रेणियाँ')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portal.subcategories.map(sub => (
                <div
                  key={sub.id}
                  className="rounded-xl border border-[#5A3922]/80 bg-gradient-to-b from-[#1E120B]/95 to-[#120A06]/95 p-5 flex flex-col justify-between hover:border-[#D3AD55]/70 transition-all shadow-md"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-serif text-xs sm:text-sm font-semibold text-[#D3AD55] px-2.5 py-0.5 rounded bg-[#2A1910] border border-[#D3AD55]/35">
                        {sub.sanskritName}
                      </span>
                      <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]/70">
                        {t(sub.sourceClassificationEn, sub.sourceClassificationHi)}
                      </span>
                    </div>

                    <h5 className="text-base sm:text-lg font-serif text-[#F5E8CE] font-semibold leading-snug mt-2">
                      {t(sub.titleEn, sub.titleHi)}
                    </h5>

                    <p className="mt-2 text-xs sm:text-[13px] font-serif text-[#E6D7BD]/85 leading-relaxed">
                      {t(sub.summaryEn, sub.summaryHi)}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {(t('en', 'hi') === 'en' ? sub.keyTopicsEn : sub.keyTopicsHi).map(
                        (topic, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#160D08] border border-[#5A3922]/50 font-mono text-[9px] text-[#C8B69E]"
                          >
                            {topic}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#5A3922]/40 flex items-center justify-end">
                    {sub.articleSlug ? (
                      <button
                        type="button"
                        onClick={() => onOpenArticle(portal.slug, sub.articleSlug!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#382116] hover:bg-[#D3AD55] text-[#D3AD55] hover:text-[#17100C] font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>{t('Explore Monograph', 'शोध-लेख खोलें')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : sub.crossGatewaySlug ? (
                      <button
                        type="button"
                        onClick={() => onSelectCategoryPortal(sub.crossGatewaySlug!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D3AD55]/60 bg-[#23160E] hover:bg-[#D3AD55] text-[#D3AD55] hover:text-[#17100C] font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
                      >
                        <Compass className="w-3 h-3" />
                        <span>{t('Open Linked Gateway', 'संबद्ध ज्ञान-द्वार खोलें')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      {/* SECTION A2: COLLECTION OF INDIVIDUAL RESEARCH ARTICLES */}
      {(activeTab === 'both' || activeTab === 'articles') && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#5A3922]/50 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
                {t('ARCHIVAL MONOGRAPH INDEX', 'अभिलेखीय शोध-प्रबंध अनुक्रमणिका')}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif text-[#F5E8CE] mt-0.5">
                {t(
                  `Individual Research Articles in ${portal.shortTitleEn}`,
                  `${portal.shortTitleHi} के व्यक्तिगत शोध-लेख`
                )}
              </h4>
            </div>

            {/* Search Filter Input for Gateway Articles */}
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="search"
                value={articleSearchQuery}
                onChange={e => setArticleSearchQuery(e.target.value)}
                placeholder={t('Filter articles or sources...', 'लेख या स्रोत खोजें...')}
                aria-label={t('Filter articles in this gateway', 'इस ज्ञान-द्वार में लेख खोजें')}
                className="px-3 py-1.5 rounded-lg bg-[#140C08] border border-[#5A3922] focus:border-[#D3AD55] focus:outline-none text-xs font-serif text-[#F5E8CE] placeholder-[#877665] w-56 sm:w-64"
              />
              <span className="font-mono text-[10px] text-[#C8B69E]/75 uppercase tracking-widest">
                {filteredArticles.length} / {portal.articles.length}{' '}
                {t('Articles', 'शोध-लेख')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredArticles.map(article => (
              <article
                key={article.slug}
                className="rounded-xl border border-[#5A3922]/75 bg-gradient-to-b from-[#21140C]/95 to-[#130B07]/95 p-5 flex flex-col justify-between hover:border-[#D3AD55]/80 transition-all duration-300 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded border"
                      style={{
                        borderColor: `${article.accentColor}66`,
                        color: article.accentColor,
                        backgroundColor: `${article.accentColor}15`
                      }}
                    >
                      {article.code}
                    </span>
                    <span className="font-mono text-[9px] text-[#877665] truncate max-w-[180px]">
                      /research/{portal.slug}/{article.slug}
                    </span>
                  </div>

                  <h5 className="text-lg font-serif text-[#F5E8CE] group-hover:text-[#D3AD55] transition-colors font-semibold leading-snug">
                    {t(article.titleEn, article.titleHi)}
                  </h5>

                  <p className="mt-1 text-xs font-serif text-[#D3AD55]/85 line-clamp-2">
                    {t(article.subtitleEn, article.subtitleHi)}
                  </p>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#E6D7BD]/80 font-serif leading-relaxed line-clamp-3">
                    {t(article.summaryEn, article.summaryHi)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#5A3922]/40 flex items-center justify-between gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8B69E]/65 truncate">
                    {t(article.evidenceBadgeEn, article.evidenceBadgeHi)}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenArticle(portal.slug, article.slug)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#382116] hover:bg-[#D3AD55] text-[#D3AD55] hover:text-[#17100C] font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>{t('Read Article', 'लेख पढ़ें')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Special 64-Cell Addressable Directory for Portal IV (64 Yogini 8×8 Matrix) */}
          {portal.slug === '64-yogini-matrix' && (
            <div className="mt-6 rounded-xl border border-[#D3AD55]/35 bg-[#150D08]/95 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#D3AD55]">
                    {t('COMPLETE 64-CELL MONOGRAPH DIRECTORY (BM-01-01 TO BM-08-08)', 'संपूर्ण 64-कोष्ठ शोध-लेख निर्देशिका (BM-01-01 से BM-08-08)')}
                  </span>
                  <h5 className="text-base sm:text-lg font-serif text-[#F5E8CE] mt-0.5">
                    {t(
                      'Open Individual Article Page for Any 8 × 8 Bhairava-Matrika Vector',
                      'किसी भी 8 × 8 भैरव-मातृका सदिश का व्यक्तिगत शोध-लेख पृष्ठ खोलें'
                    )}
                  </h5>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ASHTA_BHAIRAVA_PROFILES.map((bh, rIdx) => (
                    <button
                      key={bh.id}
                      type="button"
                      onClick={() => setSelectedMatrixBhairavaRow(rIdx)}
                      className={`px-2.5 py-1 rounded font-mono text-[9.5px] uppercase tracking-wider border transition-all cursor-pointer ${
                        selectedMatrixBhairavaRow === rIdx
                          ? 'border-[#D3AD55] bg-[#382116] text-[#D3AD55]'
                          : 'border-[#5A3922]/50 bg-[#120B07] text-[#C8B69E]/75 hover:text-[#F5E8CE]'
                      }`}
                    >
                      R0{rIdx + 1}: {t(bh.shortTranslit, bh.shortHindi)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {ASHTA_MATRIKA_PROFILES.map((mk, cIdx) => {
                  const rNum = String(selectedMatrixBhairavaRow + 1).padStart(2, '0');
                  const cNum = String(cIdx + 1).padStart(2, '0');
                  const cellCode = `BM-${rNum}-${cNum}`;
                  const cellSlug = cellCode.toLowerCase();
                  const bh = ASHTA_BHAIRAVA_PROFILES[selectedMatrixBhairavaRow];
                  return (
                    <button
                      key={cellCode}
                      type="button"
                      onClick={() => onOpenArticle('64-yogini-matrix', cellSlug)}
                      className="p-2.5 rounded-lg border border-[#5A3922]/60 bg-[#1C110B] hover:border-[#D3AD55] hover:bg-[#2B1910] text-left transition-all cursor-pointer group"
                    >
                      <span className="block font-mono text-[9px] text-[#D3AD55] font-bold">
                        {cellCode}
                      </span>
                      <span className="block font-serif text-xs text-[#F5E8CE] group-hover:text-[#D3AD55] mt-0.5 truncate">
                        {t(bh.shortTranslit, bh.shortHindi)} × {t(mk.englishName, mk.hindiName)}
                      </span>
                      <span className="block font-mono text-[8px] text-[#877665] mt-1">
                        {t('Open URL →', 'पृष्ठ खोलें →')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* SECTION B: EMBEDDED INTERACTIVE RESEARCH STUDIO FOR THIS PORTAL */}
      {(activeTab === 'both' || activeTab === 'studio') && children && (
        <div className="pt-6 border-t border-[#5A3922]/50 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
                {t('INTERACTIVE RESEARCH APPARATUS', 'संवादात्मक शोध यंत्र एवं मानचित्रण')}
              </span>
              <h4 className="text-lg sm:text-xl font-serif text-[#F5E8CE]">
                {t(
                  `${portal.shortTitleEn} — Live Interactive Studio`,
                  `${portal.shortTitleHi} — संवादात्मक अध्ययन कक्ष`
                )}
              </h4>
            </div>
          </div>
          {children}
        </div>
      )}

      {/* SECTION C: CROSS-GATEWAY RESEARCH CONNECTIONS (अंतर-द्वार शोध सूत्र) */}
      {portal.crossLinks && portal.crossLinks.length > 0 && (
        <div className="pt-6 border-t border-[#5A3922]/50 space-y-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
              {t('CROSS-GATEWAY RESEARCH CONNECTIONS', 'अंतर-द्वार शोध सूत्र एवं अंतर्संबंध')}
            </span>
            <h4 className="text-lg sm:text-xl font-serif text-[#F5E8CE] mt-0.5">
              {t(
                'Related Sacred Gateways & Interlocking Traditions',
                'संबद्ध पवित्र ज्ञान-द्वार एवं पूरक परम्पराएँ'
              )}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portal.crossLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (link.targetArticleSlug) {
                    onOpenArticle(link.targetCategorySlug, link.targetArticleSlug);
                  } else {
                    onSelectCategoryPortal(link.targetCategorySlug);
                  }
                }}
                className="p-4 rounded-xl border border-[#5A3922]/75 bg-[#170F0A]/95 hover:border-[#D3AD55] hover:bg-[#23160E] text-left transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-[#2B1910] text-[#D3AD55] border border-[#D3AD55]/35">
                    {t('GATEWAY', 'ज्ञान-द्वार')} {link.gatewayRoman}
                  </span>
                  <h5 className="mt-2 font-serif text-base text-[#F5E8CE] group-hover:text-[#D3AD55] font-semibold">
                    {t(link.labelEn, link.labelHi)}
                  </h5>
                  <p className="mt-1.5 text-xs font-serif text-[#C8B69E]/85 leading-relaxed">
                    {t(link.relationNoteEn, link.relationNoteHi)}
                  </p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[9.5px] uppercase tracking-wider text-[#D3AD55]">
                  <span>{t('Traverse Gateway', 'इस द्वार में प्रवेश करें')}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// DEDICATED INDIVIDUAL ARTICLE PAGE VIEW (/research/:categorySlug/:articleSlug)
// ============================================================================
interface ArticleMonographPageViewProps {
  portal: ResearchCategoryPortal;
  article: ResearchArticle;
  onBackToCategory: (categorySlug: string) => void;
  onBackToOverview: () => void;
  onOpenArticle: (categorySlug: string, articleSlug: string) => void;
  onLaunchStudioAtNode?: (chapterIndex: number, interactiveIndex?: number) => void;
}

export const ArticleMonographPageView: React.FC<ArticleMonographPageViewProps> = ({
  portal,
  article,
  onBackToCategory,
  onBackToOverview,
  onOpenArticle,
  onLaunchStudioAtNode
}) => {
  const { t } = useLanguage();
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentIdx = portal.articles.findIndex(a => a.slug === article.slug);
  const prevArticle =
    currentIdx > 0 ? portal.articles[currentIdx - 1] : null;
  const nextArticle =
    currentIdx >= 0 && currentIdx < portal.articles.length - 1
      ? portal.articles[currentIdx + 1]
      : null;

  const handleCopyPermalink = () => {
    const url = `${window.location.origin}/research/${portal.slug}/${article.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Breadcrumb & URL Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:px-5 rounded-xl bg-[#110C09]/95 border border-[#5A3922]/70 shadow-lg">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onBackToCategory(portal.slug)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#D3AD55]/65 bg-[#23160E] hover:bg-[#382116] text-[#D3AD55] font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_15px_rgba(211,173,85,0.18)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t(`Back to ${portal.shortTitleEn}`, `${portal.shortTitleHi} पर वापस जाएँ`)}</span>
          </button>
          <span className="text-[#5A3922] font-mono text-xs">/</span>
          <button
            type="button"
            onClick={onBackToOverview}
            className="px-2.5 py-1.5 rounded border border-[#5A3922] bg-[#1A110B] hover:border-[#D3AD55] text-[#C8B69E] hover:text-[#D3AD55] font-mono text-[9.5px] uppercase tracking-wider transition-all cursor-pointer"
          >
            {t('Main Page', 'मुख्य पृष्ठ')}
          </button>
          <span className="text-[#5A3922] font-mono text-xs">/</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F5E8CE] font-semibold">
            {article.code}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block font-mono text-[9.5px] px-2.5 py-1 rounded bg-[#1A120D] border border-[#5A3922]/50 text-[#C8B69E]/80">
            /research/{portal.slug}/{article.slug}
          </span>
          <button
            type="button"
            onClick={handleCopyPermalink}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#5A3922]/70 bg-[#17100C] hover:border-[#D3AD55] text-[#C8B69E] hover:text-[#D3AD55] font-mono text-[9.5px] uppercase tracking-wider transition-all cursor-pointer"
          >
            {copiedUrl ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">{t('Copied', 'कॉपी हुआ')}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3 h-3" />
                <span>{t('Permalink', 'स्थायी लिंक')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Archival Monograph Folio */}
      <article className="rounded-2xl border border-[#B68A32]/45 bg-[#F2E6D2] text-[#2B1F17] p-6 sm:p-8 md:p-11 shadow-[0_24px_60px_rgba(0,0,0,0.8)] paper-grain">
        {/* Header Metadata Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#3A281B]/20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
              {article.code}
            </span>
            <span className="px-2.5 py-1 rounded border border-[#5A3922]/35 bg-[#E5D4B7] text-[#4A3322] font-mono text-[9.5px] uppercase tracking-[0.15em] font-semibold">
              {t(article.evidenceBadgeEn, article.evidenceBadgeHi)}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5A3922]">
            {t('PORTAL', 'द्वार')} {portal.roman} · {t(portal.shortTitleEn, portal.shortTitleHi)}
          </span>
        </div>

        {/* Monograph Title & Subtitle */}
        <h1 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-serif text-[#17100C] font-bold tracking-wide leading-tight">
          {t(article.titleEn, article.titleHi)}
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg font-serif text-[#5A3922] font-medium">
          {t(article.subtitleEn, article.subtitleHi)}
        </p>

        {/* Author & Source Attribution Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 py-2.5 px-3.5 rounded bg-[#E6D6BC]/80 border border-[#5A3922]/20 text-xs font-mono text-[#3D2B1F]">
          <span>
            {t('INVESTIGATOR:', 'अन्वेषक:')} <strong>{t(article.authorEn, article.authorHi)}</strong>
          </span>
          <span>
            {t('ARCHIVE:', 'अभिलेखागार:')} CAGS · {article.code}
          </span>
        </div>

        {/* Preserved Sanskrit Epigraph Box */}
        <div className="mt-6 p-4 sm:p-5 rounded-r-lg border-l-4 border-[#B68A32] bg-[#E5D5BC] shadow-inner">
          <p className="text-base sm:text-lg font-serif text-[#17100C] text-center tracking-wide leading-relaxed">
            {article.sanskritEpigraph}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm font-serif italic text-[#4A3425] text-center">
            {t(article.epigraphTranslationEn, article.epigraphTranslationHi)}
          </p>
        </div>

        {/* Executive Abstract */}
        <div className="mt-6">
          <h2 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#5A3922] font-bold">
            {t('EXECUTIVE RESEARCH ABSTRACT', 'शोध सारांश')}
          </h2>
          <p className="mt-1.5 text-sm sm:text-base md:text-[16.5px] font-serif text-[#241912] leading-relaxed">
            {t(article.summaryEn, article.summaryHi)}
          </p>
        </div>

        {/* Deep-Dive Scholarly Sections */}
        <div className="mt-7 space-y-6">
          {article.sections.map((sec, idx) => (
            <div key={idx} className="pt-5 border-t border-[#3A281B]/15">
              <h3 className="text-lg sm:text-xl font-serif text-[#17100C] font-semibold">
                {t(sec.headingEn, sec.headingHi)}
              </h3>
              <p className="mt-2 text-sm sm:text-[15.5px] font-serif text-[#2D2018] leading-relaxed">
                {t(sec.bodyEn, sec.bodyHi)}
              </p>
            </div>
          ))}
        </div>

        {/* Structured Archival Comparison Tables (Jaya-Vijaya, Ghora 11/12 Bhedas, Kapalika 5 Bhedas, 8 Prahars, Muhurta/Sandhya) */}
        {ARTICLE_COMPARISON_TABLES[article.slug] &&
          ARTICLE_COMPARISON_TABLES[article.slug].map((tbl, tIdx) => {
            const isEn = t('en', 'hi') === 'en';
            const headers = isEn ? tbl.headersEn : tbl.headersHi;
            const rows = isEn ? tbl.rowsEn : tbl.rowsHi;
            return (
              <div
                key={tIdx}
                className="mt-7 pt-5 border-t border-[#3A281B]/20 space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-serif text-[#17100C] font-bold">
                    {t(tbl.titleEn, tbl.titleHi)}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55]">
                    {t('STRUCTURED ARCHIVAL LEDGER', 'संरचित तुलनात्मक तालिका')}
                  </span>
                </div>
                {tbl.captionEn && (
                  <p className="text-xs sm:text-sm font-serif italic text-[#4A3425]">
                    {t(tbl.captionEn, tbl.captionHi || tbl.captionEn)}
                  </p>
                )}
                <div className="overflow-x-auto rounded-xl border border-[#5A3922]/35 shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[540px]">
                    <thead>
                      <tr className="bg-[#2B1F17] text-[#F2E6D2]">
                        {headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#5A3922]/20 bg-[#EFE0C6]">
                      {rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={
                            rIdx % 2 === 0 ? 'bg-[#EFE0C6]' : 'bg-[#E6D4B6]/80'
                          }
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-2.5 px-3.5 text-xs sm:text-[13.5px] font-serif leading-relaxed align-top ${
                                cIdx === 0
                                  ? 'font-bold text-[#17100C]'
                                  : 'text-[#2B1F17]'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

        {/* Key Empirical & Textual Findings */}
        <div className="mt-7 p-5 rounded-xl bg-[#E6D6BC]/90 border border-[#5A3922]/25">
          <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#5A3922] font-bold mb-3">
            {t('KEY RESEARCH FINDINGS & PARAMETERS', 'प्रमुख शोध निष्कर्ष एवं मापदंड')}
          </h3>
          <ul className="space-y-2">
            {(t('en', 'hi') === 'en' ? article.keyFindingsEn : article.keyFindingsHi).map(
              (item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-serif text-[#241912] leading-relaxed"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#B68A32] shrink-0" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Metadata Ledger Grid */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-[#3A281B]/20">
          {article.metadata.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded bg-[#E6D6BC]/65 border border-[#5A3922]/15"
            >
              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#5A3922]">
                {t(m.labelEn, m.labelHi)}
              </span>
              <span className="font-serif text-xs sm:text-sm font-semibold text-[#17100C] mt-0.5 block">
                {t(m.valueEn, m.valueHi)}
              </span>
            </div>
          ))}
        </div>

        {/* Primary Scriptural & Field Sources Footer */}
        <div className="mt-6 pt-4 border-t border-[#3A281B]/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#5A3922]">
              {t('PRIMARY SOURCES & ARCHIVAL CITATION', 'मूल स्रोत एवं अभिलेखीय संदर्भ')}
            </span>
            <p className="font-serif text-xs sm:text-sm text-[#241912] font-medium mt-0.5">
              {t(article.primarySourcesEn, article.primarySourcesHi)}
            </p>
          </div>

          {onLaunchStudioAtNode && (
            <button
              type="button"
              onClick={() =>
                onLaunchStudioAtNode(portal.chapterIndex, article.interactiveIndex)
              }
              className="px-4 py-2 rounded-lg bg-[#2B1F17] hover:bg-[#3D2B1F] text-[#D3AD55] font-mono text-[10px] uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>
                {t('Inspect in Interactive Studio', 'संवादात्मक यंत्र में देखें')}
              </span>
            </button>
          )}
        </div>
      </article>

      {/* Previous / Next Article & Back to Category Footer Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {prevArticle ? (
          <button
            type="button"
            onClick={() => onOpenArticle(portal.slug, prevArticle.slug)}
            className="p-4 rounded-xl border border-[#5A3922]/70 bg-[#17100C]/90 hover:border-[#D3AD55] text-left transition-all cursor-pointer group"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#877665] flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              {t('Previous Article', 'पिछला शोध-लेख')} ({prevArticle.code})
            </span>
            <span className="block font-serif text-sm text-[#F5E8CE] group-hover:text-[#D3AD55] mt-1 truncate">
              {t(prevArticle.titleEn, prevArticle.titleHi)}
            </span>
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={() => onBackToCategory(portal.slug)}
          className="p-4 rounded-xl border border-[#D3AD55]/45 bg-[#23160E]/90 hover:bg-[#382116] text-center transition-all cursor-pointer flex flex-col items-center justify-center"
        >
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D3AD55]">
            {t('Category Portal Index', 'श्रेणी पोर्टल अनुक्रमणिका')}
          </span>
          <span className="font-serif text-xs text-[#F5E8CE] mt-0.5">
            {t(portal.shortTitleEn, portal.shortTitleHi)} ({portal.articles.length})
          </span>
        </button>

        {nextArticle ? (
          <button
            type="button"
            onClick={() => onOpenArticle(portal.slug, nextArticle.slug)}
            className="p-4 rounded-xl border border-[#5A3922]/70 bg-[#17100C]/90 hover:border-[#D3AD55] text-right transition-all cursor-pointer group"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#877665] flex items-center justify-end gap-1">
              {t('Next Article', 'अगला शोध-लेख')} ({nextArticle.code})
              <ArrowRight className="w-3 h-3" />
            </span>
            <span className="block font-serif text-sm text-[#F5E8CE] group-hover:text-[#D3AD55] mt-1 truncate">
              {t(nextArticle.titleEn, nextArticle.titleHi)}
            </span>
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
