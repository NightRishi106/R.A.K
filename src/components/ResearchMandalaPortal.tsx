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
import {
  ASHTA_BHAIRAVA_PROFILES,
  ASHTA_MATRIKA_PROFILES,
  getMatrixIntersection
} from '../data/ashtaResearchData';
import {
  SPECIAL_CIRCULAR_SEALS,
  AGHORA_SUBPART_SEALS,
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

const GatewaySealMotif: React.FC<{
  chapterIndex: number;
  accentColor: string;
}> = ({ chapterIndex, accentColor }) => {
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

      {chapterIndex === 0 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* Gateway I: Vastu Mandala Square + Standing-Wave Acoustic Rings */}
          <rect x="33" y="33" width="54" height="54" rx="2" />
          <circle cx="60" cy="60" r="24" />
          <circle cx="60" cy="60" r="14" strokeDasharray="2 2" />
          <line x1="26" y1="60" x2="94" y2="60" />
          <line x1="60" y1="26" x2="60" y2="94" />
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 1 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* Gateway II: Ashta Bhairava 8-Pointed Directional Compass Star */}
          <rect x="36" y="36" width="48" height="48" />
          <rect
            x="36"
            y="36"
            width="48"
            height="48"
            transform="rotate(45 60 60)"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a) * 10}
                y1={60 + Math.sin(a) * 10}
                x2={60 + Math.cos(a) * 34}
                y2={60 + Math.sin(a) * 34}
              />
            );
          })}
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 2 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Gateway III: Kaal Bhairava Kashi Shield & Sovereign Axis */}
          <polygon points="60,24 91,42 91,78 60,96 29,78 29,42" />
          <circle cx="60" cy="60" r="22" />
          <line x1="60" y1="24" x2="60" y2="96" strokeWidth="1.3" />
          <path d="M 47 40 C 47 53, 73 53, 73 40" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 3 && (
        <g stroke={accentColor} fill="none" strokeWidth="1" opacity="0.85">
          {/* Gateway IV: 64 Yogini Hypaethral Temple Ring + 8x8 Lattice */}
          <circle cx="60" cy="60" r="32" />
          <circle cx="60" cy="60" r="22" />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * Math.PI) / 8;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a) * 22}
                y1={60 + Math.sin(a) * 22}
                x2={60 + Math.cos(a) * 32}
                y2={60 + Math.sin(a) * 32}
              />
            );
          })}
          <rect x="46" y="46" width="28" height="28" />
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 4 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.85">
          {/* Gateway V: Shakti Tattva & 8-Petal Matrika Lotus */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a1 = ((i * 360) / 8) * (Math.PI / 180);
            const aMid = (((i + 0.5) * 360) / 8) * (Math.PI / 180);
            const a2 = (((i + 1) * 360) / 8) * (Math.PI / 180);
            const rIn = 14;
            const rOut = 34;
            return (
              <path
                key={i}
                d={`M ${60 + Math.cos(a1) * rIn} ${60 + Math.sin(a1) * rIn} Q ${
                  60 + Math.cos(aMid) * rOut
                } ${60 + Math.sin(aMid) * rOut} ${60 + Math.cos(a2) * rIn} ${
                  60 + Math.sin(a2) * rIn
                }`}
              />
            );
          })}
          <polygon points="60,82 80,46 40,46" />
          <circle cx="60" cy="60" r="3" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 5 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* Gateway VI: Shri Meru Chakra Interlocking Triangles & Bindu */}
          <rect x="31" y="31" width="58" height="58" />
          <polygon points="60,26 89,77 31,77" />
          <polygon points="60,94 89,43 31,43" />
          <polygon points="60,36 80,71 40,71" />
          <polygon points="60,84 80,49 40,49" />
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
        </g>
      )}

      {chapterIndex === 6 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* Gateway VII: 14 Lokas Vertical Cosmic Axis (7 Upper + 7 Lower Strata) */}
          <ellipse cx="60" cy="60" rx="22" ry="34" />
          <line x1="60" y1="22" x2="60" y2="98" strokeWidth="1.2" />
          {[-24, -16, -8, 0, 8, 16, 24].map((offset, idx) => (
            <line
              key={idx}
              x1={60 - (20 - Math.abs(offset) * 0.45)}
              y1={60 + offset}
              x2={60 + (20 - Math.abs(offset) * 0.45)}
              y2={60 + offset}
            />
          ))}
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
      {/* Ambient Radial Glow Behind Gateways */}
      <div
        className="pointer-events-none absolute inset-x-0 top-6 mx-auto w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full blur-3xl opacity-15"
        style={{
          background: `radial-gradient(circle, ${focusedPortal.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Section Header: The Seven Sacred Gateways */}
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
            'The Seven Sacred Gateways — Engraved Portal Seals',
            'सप्त ज्ञान-द्वार — ७ समर्पित वृत्ताकार शोध-द्वार'
          )}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#C8B69E]/80 font-serif max-w-2xl mx-auto leading-relaxed">
          {t(
            'Select any of the seven Sacred Gateway boxes below to open its dedicated Category Landing Page, subcategory traditions, source-conscious monographs, and interactive research studio.',
            'किसी भी ज्ञान-द्वार बॉक्स पर क्लिक करके उसका समर्पित श्रेणी पृष्ठ, उप-परंपराएँ, मूल-स्रोत शोध-लेख एवं संवादात्मक अध्ययन कक्ष खोलें।'
          )}
        </p>
      </div>

      {/* The 7 Sacred Gateways Grid — Box Cards with Engraved Circular Seals */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-1 sm:px-2">
          {RESEARCH_CATEGORY_PORTALS.map((portal, idx) => {
            const isSelected = idx === activeChapterIndex;
            const centerLabel = (portal.sanskritSeal || '').split('·')[0].trim();

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
                className={`group relative rounded-2xl border bg-gradient-to-b from-[#22150D]/95 via-[#160D08]/95 to-[#0E0805]/95 p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D3AD55] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(211,173,85,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] ${
                  isSelected
                    ? 'border-[#D3AD55] shadow-[0_0_26px_rgba(211,173,85,0.25)]'
                    : 'border-[#5A3922]/75'
                }`}
              >
                {/* Top Gateway Roman Badge & Article Count */}
                <div className="w-full flex items-center justify-between gap-1 mb-2.5">
                  <span
                    className="font-mono text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${portal.accentColor}66`,
                      color: portal.accentColor,
                      backgroundColor: `${portal.accentColor}15`
                    }}
                  >
                    {t('GATEWAY', 'द्वार')} {portal.roman}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[8.5px] uppercase tracking-wider text-[#C8B69E]/75">
                    {portal.articles.length} {t('Articles', 'लेख')}
                  </span>
                </div>

                {/* Circular Engraved Sacred Seal Medallion */}
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2E1B11] via-[#190F0A] to-[#0D0704] border-2 flex items-center justify-center shadow-[0_0_24px_rgba(0,0,0,0.75)] group-hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${portal.accentColor}99` }}
                >
                  <GatewaySealMotif
                    chapterIndex={idx}
                    accentColor={portal.accentColor}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className="px-1.5 py-0.5 rounded bg-[#120B07]/90 border font-serif text-[9px] sm:text-[10px] font-semibold tracking-wide text-[#F5E8CE] shadow"
                      style={{ borderColor: `${portal.accentColor}66` }}
                    >
                      {centerLabel}
                    </span>
                  </div>
                </div>

                {/* Sanskrit Subtitle Underneath Circle */}
                <span className="mt-3 font-serif text-[11px] sm:text-xs text-[#D3AD55] font-medium line-clamp-1">
                  {portal.sanskritSeal}
                </span>

                {/* Main Title */}
                <h5 className="mt-1 font-serif text-sm sm:text-base font-semibold text-[#F5E8CE] group-hover:text-[#D3AD55] transition-colors leading-snug">
                  {t(portal.shortTitleEn, portal.shortTitleHi)}
                </h5>

                {/* Short Descriptor */}
                <p className="mt-1 text-[11px] sm:text-xs font-serif text-[#C8B69E]/85 leading-relaxed line-clamp-2">
                  {t(portal.subtitleEn, portal.subtitleHi)}
                </p>

                {/* Domain Tag & Open Action Pill */}
                <div className="mt-3 pt-2.5 border-t border-[#5A3922]/45 w-full flex items-center justify-between gap-1">
                  <span className="font-mono text-[7.5px] sm:text-[8px] uppercase tracking-wider text-[#C8B69E]/75 truncate">
                    {t(portal.domainTagEn, portal.domainTagHi)}
                  </span>
                  <span
                    className="shrink-0 inline-flex items-center gap-1 font-mono text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider"
                    style={{ color: portal.accentColor }}
                  >
                    <span>{t('Open Gateway', 'खोलें')}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
          DEDICATED CIRCULAR ENGRAVED TOPIC SEALS (विशेष शोध मुद्रिकाएँ)
          Jaya–Vijaya · Aghora Sampradāya (with its 2 Sub-Parts: Ghora 11/12 Bhedas & Kāpālika 5 Bhedas) ·
          Samaya & 8 Prahars · Bhairavagaṇa · Kālīkula–Śrīkula · Mahāvidyā–Navadurgā
          ==================================================================== */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#5A3922]/55 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/40 bg-[#23160E]/90 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-[#D3AD55]">
              {t(
                'DEDICATED CIRCULAR ENGRAVED RESEARCH SEALS',
                'समर्पित वृत्ताकार शोध मुद्राएँ (प्रत्यक्ष प्रवेश)'
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
              'Click any engraved circular seal below to open its full standalone monograph page — covering Jaya & Vijaya, Aghora Sampradāya (including its two sub-parts: Ghora Sampradāya 11/12 Bhedas & Kāpālika Sampradāya 5 Bhedas), Samaya & the 8 Prahars, Bhairavagaṇa, Kālīkula–Śrīkula, and Daśa Mahāvidyā & Navadurgā.',
              'जय–विजय, अघोर सम्प्रदाय (इसके २ उप-भागों—घोर सम्प्रदाय ११/१२ भेद तथा कापालिक सम्प्रदाय ५ भेद—सहित), समय और अष्ट प्रहर (८ पहर), भैरवगण, कालीकुल–श्रीकुल तथा दशमहाविद्या–नवदुर्गा के विस्तृत स्वतंत्र शोध-पृष्ठ खोलने हेतु किसी भी वृत्ताकार मुद्रा पर क्लिक करें।'
            )}
          </p>
        </div>

        {/* Responsive Circular Medallion Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-1 sm:px-2">
          {SPECIAL_CIRCULAR_SEALS.map(seal => {
            const linkedPortal = RESEARCH_CATEGORY_PORTALS.find(
              p => p.slug === seal.categorySlug
            );
            const gatewayRoman = linkedPortal ? linkedPortal.roman : 'I';
            const centerLabel = (seal.sanskritSeal || '').split('·')[0].trim();

            return (
              <div
                key={seal.id}
                role="button"
                tabIndex={0}
                onClick={() => onOpenArticle(seal.categorySlug, seal.articleSlug)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenArticle(seal.categorySlug, seal.articleSlug);
                  }
                }}
                aria-label={t(
                  `${seal.sealNumber}: ${seal.shortTitleEn} — Open Detailed Research Monograph`,
                  `${seal.sealNumber}: ${seal.shortTitleHi} — विस्तृत शोध-प्रबंध खोलें`
                )}
                className="group relative rounded-2xl border border-[#5A3922]/75 bg-gradient-to-b from-[#22150D]/95 via-[#160D08]/95 to-[#0E0805]/95 p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-[#D3AD55] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(211,173,85,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55]"
              >
                <div className="w-full flex flex-col items-center">
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

                  {/* Nested Sub-Parts / Separate Research Collections */}
                  {seal.subParts && seal.subParts.length > 0 && (
                    <div
                      className="mt-3 w-full rounded-xl border bg-[#150C07]/95 p-2.5 text-left space-y-1.5"
                      style={{ borderColor: `${seal.accentColor}66` }}
                    >
                      <div className="flex items-center justify-between gap-1 border-b border-[#5A3922]/50 pb-1">
                        <span
                          className="font-mono text-[8px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: seal.accentColor }}
                        >
                          {seal.id === 'seal-kalikula-srikula'
                            ? t('SEPARATE RESEARCH COLLECTIONS (PART I & II)', 'पृथक् शोध संग्रह (भाग I: कालीकुल एवं भाग II: श्रीकुल)')
                            : t('SUB-PARTS OF AGHORA SAMPRADĀYA', 'अघोर सम्प्रदाय के २ उप-भाग')}
                        </span>
                        <span className="font-mono text-[7.5px] text-[#C8B69E]/75">
                          {seal.subParts.length} {t('Archives', 'संग्रह')}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 pt-0.5">
                        {seal.subParts.map(sub => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              onOpenArticle(sub.categorySlug, sub.articleSlug);
                            }}
                            className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg border border-[#5A3922]/75 bg-[#21130B] hover:border-[#D3AD55] hover:bg-[#2E1B10] transition-all cursor-pointer text-left"
                          >
                            <div className="min-w-0">
                              <span
                                className="block font-mono text-[7.5px] font-bold uppercase tracking-wider"
                                style={{ color: sub.accentColor }}
                              >
                                {sub.sealNumber} · {sub.sanskritSeal.split('·')[0].trim()}
                              </span>
                              <span className="block font-serif text-[11px] font-semibold text-[#F5E8CE] truncate">
                                {t(sub.shortTitleEn, sub.shortTitleHi)}
                              </span>
                            </div>
                            <ArrowRight
                              className="w-3 h-3 shrink-0"
                              style={{ color: sub.accentColor }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

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
              </div>
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
      {/* Top Unit Page Back Navigation Bar inside the Unit Page Content Area */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D3AD55]/45 bg-[#1A100A]/95 px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.65)]">
        <button
          type="button"
          onClick={onBackToOverview}
          aria-label={t('Back to outer page with all research units', 'सभी शोध इकाइयों वाले मुख्य पृष्ठ पर वापस जाएँ')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-[#D3AD55] bg-[#26170F] hover:bg-[#382116] text-[#D3AD55] font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_16px_rgba(211,173,85,0.22)] active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>
            {t('Back to All Research Units', 'सभी शोध इकाइयों (मुख्य पृष्ठ) पर वापस जाएँ')}
          </span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className="px-3 py-1 rounded-full font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold border"
            style={{
              borderColor: `${portal.accentColor}66`,
              color: portal.accentColor,
              backgroundColor: `${portal.accentColor}15`
            }}
          >
            {t(`UNIT ${portal.roman} · ${portal.shortTitleEn}`, `इकाई ${portal.roman} · ${portal.shortTitleHi}`)}
          </span>
        </div>
      </div>

      {/* SECTION A: LIVE INTERACTIVE RESEARCH STUDIO AT THE VERY TOP OF ALL GATEWAY CONTENTS */}
      {children && (
        <div className="rounded-2xl border border-[#D3AD55]/45 bg-[#120B07]/95 p-4 sm:p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.75)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5A3922]/50 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
                {t('INTERACTIVE RESEARCH APPARATUS', 'संवादात्मक शोध यंत्र एवं मानचित्रण')}
              </span>
              <h4 className="text-xl sm:text-2xl font-serif text-[#F5E8CE] mt-0.5">
                {t(
                  `${portal.shortTitleEn} — Live Interactive Studio`,
                  `${portal.shortTitleHi} — संवादात्मक अध्ययन कक्ष`
                )}
              </h4>
            </div>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] px-2.5 py-1 rounded border border-[#D3AD55]/40 bg-[#23160E] text-[#D3AD55]">
              {t(`GATEWAY ${portal.roman} · LIVE STUDIO`, `द्वार ${portal.roman} · संवादात्मक कक्ष`)}
            </span>
          </div>
          {children}
        </div>
      )}

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
              {t('Interactive Studio + Traditions + Articles', 'संवादात्मक कक्ष + परम्पराएँ + शोध-लेख')}
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
              {t('Interactive Studio Only', 'केवल संवादात्मक अध्ययन कक्ष')}
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
          </div>
        </div>
      </div>

      {/* SECTION B1: COLLECTION OF INDIVIDUAL RESEARCH ARTICLES (MONOGRAPH ARTICLES) */}
      {portal.slug !== 'cags-field-archive' && (activeTab === 'both' || activeTab === 'articles') && (
        <div className="pt-6 border-t border-[#5A3922]/50 space-y-5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {ASHTA_MATRIKA_PROFILES.map((mk, cIdx) => {
                  const cell = getMatrixIntersection(selectedMatrixBhairavaRow, cIdx);
                  const cellCode = cell.id;
                  const cellSlug = cellCode.toLowerCase();
                  const bh = cell.bhairava;
                  const dyad = cell.dyad;
                  return (
                    <button
                      key={cellCode}
                      type="button"
                      onClick={() => onOpenArticle('64-yogini-matrix', cellSlug)}
                      className="p-3 rounded-lg border border-[#5A3922]/60 bg-[#1C110B] hover:border-[#D3AD55] hover:bg-[#2B1910] text-left transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[9.5px] text-[#D3AD55] font-bold">
                          #{String(dyad.index).padStart(2, '0')} · {cellCode}
                        </span>
                        <span className="font-mono text-[8px] text-[#877665]">
                          {t(bh.shortTranslit, bh.shortHindi)} × {t(mk.englishName, mk.hindiName)}
                        </span>
                      </div>
                      <span className="block font-serif text-xs sm:text-[13px] font-bold text-[#F5E8CE] group-hover:text-[#D3AD55] mt-1">
                        {t(dyad.dyadLabelEn, dyad.dyadLabelHi)}
                      </span>
                      <span className="block font-mono text-[8px] text-[#877665] mt-1">
                        {t('Open Dyad Monograph →', 'युग्म शोध-लेख खोलें →')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* SECTION B2: SUBCATEGORIES & CORE TRADITIONS WITHIN THIS SACRED GATEWAY */}
      {(activeTab === 'both' || activeTab === 'articles') &&
        portal.subcategories &&
        portal.subcategories.length > 0 && (
          <div className="pt-6 border-t border-[#5A3922]/50 space-y-4">
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
                    ) : null}
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
// DEDICATED INDIVIDUAL ARTICLE PAGE VIEW (/research/:categorySlug/:articleSlug)
// ============================================================================
interface ArticleMonographPageViewProps {
  portal: ResearchCategoryPortal;
  article: ResearchArticle;
  openedFromOverview?: boolean;
  onBackToCategory: (categorySlug: string) => void;
  onBackToOverview: () => void;
  onOpenArticle: (categorySlug: string, articleSlug: string) => void;
  onLaunchStudioAtNode?: (chapterIndex: number, interactiveIndex?: number) => void;
  children?: React.ReactNode;
}

// Helper to transform any prose passage or numbered list into structured sub-points across all unit articles
interface StructuredSubPoint {
  code: string;
  label?: string;
  text: string;
}

const LEADING_MARKER_REGEX =
  /^(?:\(\d+\)|\([a-zA-Z]\)|\([क-ह]\)|\([०-९]+\)|\[\d+\]|\d+(?:\.\d+)*[.)]|\d+\s+[.)]|[०-९]+(?:\.[०-९]+)*[.)]|•|-|–)\s*/u;

function stripLeadingMarker(input: string): string {
  let str = input.trim();
  while (LEADING_MARKER_REGEX.test(str)) {
    str = str.replace(LEADING_MARKER_REGEX, '').trim();
  }
  return str;
}

function parseStructuredSubPoints(rawBody: string): StructuredSubPoint[] {
  if (!rawBody) return [];

  // 1. Split by line breaks first and remove empty lines
  const rawLines = rawBody
    .split(/\n+/)
    .map(l => l.trim())
    .filter(Boolean);

  // 2. Further split lines that contain inline numbered markers like (1), (2), (क), (ख)
  const expandedSegments: string[] = [];
  for (const rawLine of rawLines) {
    // Strip leading serial number (e.g. "1.", "2.1", "१.", "(a)") BEFORE any splitting so "1." never becomes an empty segment
    const lineWithoutLeadNum = stripLeadingMarker(rawLine).replace(
      /^([^:：]{2,65}):\s*\(([^)]+)\):\s*/u,
      '$1 ($2): '
    );
    if (!lineWithoutLeadNum) continue;

    const inlineNumberSplit = lineWithoutLeadNum
      .split(/(?=(?:\(\d+\)|\([क-ह]\)|\([०-९]+\)|\[\d+\])\s+)/gu)
      .map(s => stripLeadingMarker(s))
      .filter(Boolean);

    for (const seg of inlineNumberSplit) {
      // If segment is a long passage (> 160 chars), break into structured sentence points on English '.' or Devanagari '।'
      // Avoid splitting after numbers (1., २.), single-letter initials (A.), or common abbreviations (Ch., cf., e.g., i.e., vs.)
      if (seg.length > 160) {
        const sentenceParts = seg
          .split(
            /(?<!\b\d)(?<!\b[०-९])(?<!\b[A-Z])(?<!\b(?:Ch|cf|vs|Dr|Mr|St|No|Pt|Sec|Vol))(?<=[.।!?])\s+(?=[A-Z\u0900-\u097F("“'])/gu
          )
          .map(s => stripLeadingMarker(s))
          .filter(Boolean);
        if (sentenceParts.length > 1) {
          expandedSegments.push(...sentenceParts);
        } else {
          expandedSegments.push(seg);
        }
      } else {
        expandedSegments.push(seg);
      }
    }
  }

  // 3. Clean, filter out any empty/punctuation-only fragments, and assign contiguous sequential s.no codes
  const validItems: { label?: string; text: string }[] = [];

  for (const seg of expandedSegments) {
    const cleaned = stripLeadingMarker(seg)
      .replace(/^[-–—•:：.\s]+/u, '')
      .trim();

    // Skip if empty or contains no letters/digits
    if (!cleaned || !/[\p{L}\p{N}]/u.test(cleaned)) {
      continue;
    }

    // Check if there is a structured lead label before ':' or '—' or '–'
    const colonMatch = cleaned.match(/^([^:：—–]{2,70}?)\s*(?::|：|—|–)\s+(.+)$/u);
    if (colonMatch) {
      const rawLabel = stripLeadingMarker(colonMatch[1])
        .replace(/^\(([^)]+)\)$/u, '$1')
        .trim();
      const bodyText = colonMatch[2].trim();
      if (bodyText && /[\p{L}\p{N}]/u.test(bodyText)) {
        validItems.push({
          label: rawLabel || undefined,
          text: bodyText,
        });
        continue;
      }
    }

    validItems.push({
      text: cleaned.replace(/[:：]$/u, '').trim(),
    });
  }

  return validItems.map((item, idx) => ({
    code: `${String(idx + 1).padStart(2, '0')}`,
    label: item.label,
    text: item.text,
  }));
}

export const ArticleMonographPageView: React.FC<ArticleMonographPageViewProps> = ({
  portal,
  article,
  openedFromOverview = false,
  onBackToCategory,
  onBackToOverview,
  onOpenArticle,
  onLaunchStudioAtNode,
  children
}) => {
  const { t } = useLanguage();
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentIdx = portal.articles.findIndex(a => a.slug === article.slug);
  const isStandaloneSealArticle =
    openedFromOverview || (currentIdx === -1 && !/^bm-0[1-8]-0[1-8]$/i.test(article.slug));

  const handleExitMonograph = () => {
    if (isStandaloneSealArticle) {
      onBackToOverview();
    } else {
      onBackToCategory(portal.slug);
    }
  };

  const exitLabel = isStandaloneSealArticle
    ? t('Exit Monograph · Back to All Research Units', 'शोध-प्रबंध बंद करें · सभी शोध इकाइयों (मुख्य पृष्ठ) पर वापस जाएँ')
    : t(
        `Exit Monograph · Back to ${portal.shortTitleEn} Page`,
        `शोध-प्रबंध बंद करें · ${portal.shortTitleHi} पृष्ठ पर वापस जाएँ`
      );

  const unitLabel = isStandaloneSealArticle
    ? t(article.evidenceBadgeEn, article.evidenceBadgeHi)
    : t(portal.shortTitleEn, portal.shortTitleHi);

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

  const hasDedicatedInteractiveStudio =
    !isStandaloneSealArticle &&
    Boolean(children) &&
    typeof article.interactiveIndex === 'number';

  const isEn = t('en', 'hi') === 'en';
  const customTables = ARTICLE_COMPARISON_TABLES[article.slug] || [];
  const keyFindingsList = isEn ? article.keyFindingsEn : article.keyFindingsHi;

  return (
    <div className="w-full space-y-8">
      {/* Top Monograph Exit Bar — Returns Directly to the Unit Page (or Outer Page for Standalone Seals) */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#D3AD55]/45 bg-[#1A100A]/95 px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.65)]">
        <button
          type="button"
          onClick={handleExitMonograph}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-[#D3AD55] bg-[#26170F] hover:bg-[#382116] text-[#D3AD55] font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_16px_rgba(211,173,85,0.22)] active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>{exitLabel}</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded border border-[#D3AD55]/40 bg-[#23160E] text-[#D3AD55]">
            {article.code} · {unitLabel}
          </span>
        </div>
      </div>

      {/* Live Interactive Studio Placed at the Very Top ONLY for Units With Their Own Interactive Studio */}
      {hasDedicatedInteractiveStudio && (
        <div className="rounded-2xl border border-[#D3AD55]/45 bg-[#120B07]/95 p-4 sm:p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.75)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#5A3922]/50 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
                {t('INTERACTIVE RESEARCH APPARATUS', 'संवादात्मक शोध यंत्र एवं मानचित्रण')}
              </span>
              <h2 className="text-lg sm:text-2xl font-serif text-[#F5E8CE] mt-0.5">
                {t(
                  `${portal.shortTitleEn} — Live Interactive Studio`,
                  `${portal.shortTitleHi} — संवादात्मक अध्ययन कक्ष`
                )}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] px-2.5 py-1 rounded border border-[#D3AD55]/45 bg-[#23160E] text-[#D3AD55]">
                {article.code} · {t(article.titleEn, article.titleHi)}
              </span>
            </div>
          </div>
          {children}
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto space-y-6">
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
            {isStandaloneSealArticle
              ? `${t('STANDALONE ARCHIVAL UNIT', 'स्वतंत्र शोध इकाई')} · ${article.code}`
              : `${t('PORTAL', 'द्वार')} ${portal.roman} · ${t(portal.shortTitleEn, portal.shortTitleHi)}`}
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

        {/* Kālīkula & Śrīkula Dedicated Research Collection Switcher & Editorial Synthesis Banner */}
        {(article.slug === 'kalikula-srikula-streams' ||
          article.slug === 'kalikula-archive-tradition' ||
          article.slug === 'srikula-archive-tradition') && (
          <div className="mt-6 p-4 sm:p-5 rounded-xl border-2 border-[#2B1F17]/40 bg-[#E6D4B6] space-y-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#5A3922]/25">
              <div>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#5A3922] font-bold block">
                  {t(
                    'PART IV ARCHIVAL ARCHITECTURE · DEDICATED RESEARCH COLLECTIONS',
                    'भाग IV अभिलेखीय संरचना · समर्पित शोध संग्रह (पृथक् पृष्ठ)'
                  )}
                </span>
                <h2 className="text-base sm:text-lg font-serif text-[#17100C] font-bold mt-0.5">
                  {t(
                    'Kālīkula Archive (Part I) · Śrīkula Archive (Part II) · Comparative Synthesis (Parts I–IV)',
                    'कालीकुल अभिलेखागार (भाग I) · श्रीकुल अभिलेखागार (भाग II) · तुलनात्मक संश्लेषण (भाग I–IV)'
                  )}
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[9px] font-bold uppercase tracking-[0.18em]">
                {t('RESEARCH SYNTHESIS', 'शोध संश्लेषण')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => onOpenArticle('eight-matrikas', 'kalikula-archive-tradition')}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  article.slug === 'kalikula-archive-tradition'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                  {t('PART I · KĀLĪKULA ARCHIVE', 'भाग I · कालीकुल अभिलेखागार')}
                </span>
                <span className="font-serif text-sm sm:text-base font-bold block mt-0.5">
                  {t(
                    'The Goddess of Time, Transformation & Dissolution',
                    'काल, रूपांतरण और लय की देवी (कालीकुल)'
                  )}
                </span>
                <span className="font-serif text-xs block mt-1 opacity-85 leading-snug">
                  {t(
                    'An index of Kālī-centered traditions, philosophical systems, iconography, textual sources, regional histories & ritual contexts.',
                    'काली-केंद्रित परम्पराओं, दार्शनिक प्रणालियों, प्रतिमाशास्त्र, ग्रंथीय स्रोतों और क्षेत्रीय इतिहास की अनुक्रमणिका।'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenArticle('eight-matrikas', 'srikula-archive-tradition')}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  article.slug === 'srikula-archive-tradition'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                  {t('PART II · ŚRĪKULA ARCHIVE', 'भाग II · श्रीकुल अभिलेखागार')}
                </span>
                <span className="font-serif text-sm sm:text-base font-bold block mt-0.5">
                  {t(
                    'The Goddess of Sovereignty, Manifestation & Sacred Knowledge',
                    'संप्रभुता, अभिव्यक्ति और पवित्र ज्ञान की देवी (श्रीकुल)'
                  )}
                </span>
                <span className="font-serif text-xs block mt-1 opacity-85 leading-snug">
                  {t(
                    'An index of Śrīvidyā, Tripurasundarī, Śrīcakra traditions, mantra theology, historical texts, ritual systems & commentaries.',
                    'श्रीविद्या, त्रिपुरसुन्दरी, श्रीचक्र परम्पराओं, मन्त्र-धर्मशास्त्र, ऐतिहासिक ग्रन्थों और भाष्यों की अनुक्रमणिका।'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenArticle('eight-matrikas', 'kalikula-srikula-streams')}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  article.slug === 'kalikula-srikula-streams'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                  {t('PARTS I–IV · COMPLETE SYNTHESIS', 'भाग I–IV · संपूर्ण शोध संश्लेषण')}
                </span>
                <span className="font-serif text-sm sm:text-base font-bold block mt-0.5">
                  {t(
                    'Kālīkula & Śrīkula — Unified Comparative Synthesis',
                    'कालीकुल एवं श्रीकुल — एकीकृत तुलनात्मक संश्लेषण'
                  )}
                </span>
                <span className="font-serif text-xs block mt-1 opacity-85 leading-snug">
                  {t(
                    'All four parts together: Part I (Kālīkula), Part II (Śrīkula), Part III (8-Dimension Comparison) & Part IV (Bibliography).',
                    'चारों भाग एक साथ: भाग I (कालीकुल), भाग II (श्रीकुल), भाग III (तुलनात्मक अध्ययन) एवं भाग IV (संदर्भ-सूची)।'
                  )}
                </span>
              </button>
            </div>

            <p className="text-xs font-serif text-[#3D2B1F] italic leading-relaxed border-t border-[#5A3922]/20 pt-2.5">
              {t(
                'Editorial Recommendation: Each page is labeled as a research synthesis and distinguishes primary textual evidence from scholarly interpretation and contemporary practitioner explanations.',
                'संपादकीय अनुशंसा: प्रत्येक पृष्ठ को "शोध संश्लेषण" (Research Synthesis) के रूप में प्रस्तुत किया गया है और इसमें प्राथमिक ग्रंथीय साक्ष्य, अकादमिक व्याख्या तथा समकालीन साधक-विवरणों के बीच स्पष्ट अंतर रखा गया है।'
              )}
            </p>
          </div>
        )}

        {/* ====================================================================
            PART I (TOP): STRUCTURED ARCHIVAL TABLES & PARAMETER MATRICES
            Placed ABOVE the article sections across all units' articles
           ==================================================================== */}
        <div className="mt-7 pt-5 border-t-2 border-[#3A281B]/25 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5A3922] font-bold block">
                {t('PART I · STRUCTURED ARCHIVAL TABLES & LEDGERS', 'भाग १ · संरचित अभिलेखीय तालिकाएँ एवं मापदंड')}
              </span>
              <h2 className="text-lg sm:text-xl font-serif text-[#17100C] font-bold mt-0.5">
                {t(
                  'Comparative Reference Matrices & Technical Parameters',
                  'तुलनात्मक संदर्भ तालिकाएँ एवं तकनीकी शोध मापदंड'
                )}
              </h2>
            </div>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] px-2.5 py-1 rounded bg-[#2B1F17] text-[#D3AD55]">
              {customTables.length + 2} {t('STRUCTURED TABLES', 'संरचित तालिकाएँ')}
            </span>
          </div>

          {/* 1A. Custom Comparison Tables (if defined for this article slug) */}
          {customTables.map((tbl, tIdx) => {
            const headers = isEn ? tbl.headersEn : tbl.headersHi;
            const rows = isEn ? tbl.rowsEn : tbl.rowsHi;
            return (
              <div
                key={tIdx}
                className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/85 border border-[#5A3922]/30 space-y-2.5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-serif text-[#17100C] font-bold">
                    {t(tbl.titleEn, tbl.titleHi)}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55]">
                    {t(`TABLE 0${tIdx + 1} · COMPARATIVE MATRIX`, `तालिका ०${tIdx + 1} · तुलनात्मक सारणी`)}
                  </span>
                </div>
                {tbl.captionEn && (
                  <p className="text-xs sm:text-sm font-serif italic text-[#4A3425]">
                    {t(tbl.captionEn, tbl.captionHi || tbl.captionEn)}
                  </p>
                )}
                <div className="overflow-x-auto rounded-lg border border-[#5A3922]/35 shadow-sm">
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

          {/* 1B. Universal Archival Technical Parameters & Classification Table (Present in ALL Units' Articles) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/85 border border-[#5A3922]/30 space-y-2.5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-serif text-[#17100C] font-bold">
                {t(
                  'Archival Technical Parameters & Classification Ledger',
                  'अभिलेखीय तकनीकी मापदंड एवं वर्गीकरण तालिका'
                )}
              </h3>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55]">
                {t('TECHNICAL PARAMETER TABLE', 'तकनीकी मापदंड सारणी')}
              </span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#5A3922]/35 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-[#2B1F17] text-[#F2E6D2]">
                    <th className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40 w-24">
                      {t('CODE', 'क्रमांक')}
                    </th>
                    <th className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40 w-1/3">
                      {t('ARCHIVAL PARAMETER / DIMENSION', 'अभिलेखीय मापदंड / आयाम')}
                    </th>
                    <th className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40">
                      {t('RECORDED SPECIFICATION & CORRELATE', 'अभिलेखित विवरण एवं संदर्भ')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5A3922]/20 bg-[#EFE0C6]">
                  {article.metadata.map((m, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-[#EFE0C6]' : 'bg-[#E6D4B6]/80'}
                    >
                      <td className="py-2.5 px-3.5 font-mono text-[11px] font-bold text-[#5A3922] align-top">
                        PRM-0{idx + 1}
                      </td>
                      <td className="py-2.5 px-3.5 text-xs sm:text-[13.5px] font-serif font-bold text-[#17100C] align-top">
                        {t(m.labelEn, m.labelHi)}
                      </td>
                      <td className="py-2.5 px-3.5 text-xs sm:text-[13.5px] font-serif text-[#2B1F17] align-top">
                        {t(m.valueEn, m.valueHi)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 1C. Universal Key Empirical & Scriptural Findings Table (Present in ALL Units' Articles) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/85 border border-[#5A3922]/30 space-y-2.5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-serif text-[#17100C] font-bold">
                {t(
                  'Key Research Findings & Verified Propositions Table',
                  'प्रमुख शोध निष्कर्ष एवं प्रमाणित प्रतिपादन तालिका'
                )}
              </h3>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55]">
                {t('KEY FINDINGS LEDGER', 'प्रमुख निष्कर्ष सारणी')}
              </span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#5A3922]/35 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-[#2B1F17] text-[#F2E6D2]">
                    <th className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40 w-24">
                      {t('INDEX', 'सूचकांक')}
                    </th>
                    <th className="py-2.5 px-3.5 font-mono text-[10px] uppercase tracking-[0.15em] border-b border-[#5A3922]/40">
                      {t('VERIFIED EMPIRICAL / TEXTUAL FINDING', 'प्रमाणित प्रायोगिक एवं शास्त्रीय निष्कर्ष')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5A3922]/20 bg-[#EFE0C6]">
                  {keyFindingsList.map((item, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-[#EFE0C6]' : 'bg-[#E6D4B6]/80'}
                    >
                      <td className="py-2.5 px-3.5 font-mono text-[11px] font-bold text-[#5A3922] align-top">
                        FND-0{i + 1}
                      </td>
                      <td className="py-2.5 px-3.5 text-xs sm:text-[13.5px] font-serif text-[#17100C] leading-relaxed align-top">
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ====================================================================
            PART II (BELOW TABLES): STRUCTURED SUB-POINT ARTICLE ANALYSIS
            Renders Executive Synthesis & All Sections in Structured Sub-Points
           ==================================================================== */}
        <div className="mt-8 pt-6 border-t-2 border-[#3A281B]/25 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5A3922] font-bold block">
                {t('PART II · STRUCTURED MONOGRAPH ANALYSIS & SUB-POINTS', 'भाग २ · संरचित शोध-प्रबंध विश्लेषण एवं उप-बिंदु')}
              </span>
              <h2 className="text-lg sm:text-xl font-serif text-[#17100C] font-bold mt-0.5">
                {t(
                  'Analytical Breakdown by Structured Sub-Points',
                  'संरचित उप-बिंदुओं के माध्यम से विस्तृत शास्त्रीय एवं वैज्ञानिक विश्लेषण'
                )}
              </h2>
            </div>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] px-2.5 py-1 rounded bg-[#2B1F17] text-[#D3AD55]">
              {article.sections.length} {t('STRUCTURED SECTIONS', 'संरचित अनुभाग')}
            </span>
          </div>

          {/* Executive Research Abstract broken into structured sub-points */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#E6D6BC]/85 border border-[#5A3922]/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#5A3922]/20">
              <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#5A3922] font-bold">
                {t('00 · EXECUTIVE RESEARCH ABSTRACT (CORE THESIS POINTS)', '०० · कार्यकारी शोध सारांश (मुख्य सिद्धांत बिंदु)')}
              </h3>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5A3922]">
                {article.code} · {t('ABSTRACT', 'सारांश')}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {parseStructuredSubPoints(t(article.summaryEn, article.summaryHi)).map(
                (pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#F2E6D2]/90 border border-[#5A3922]/20"
                  >
                    <span className="px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[10px] font-bold shrink-0 mt-0.5">
                      {pt.code}
                    </span>
                    <div className="text-sm sm:text-[15px] font-serif text-[#241912] leading-relaxed">
                      {pt.label && (
                        <strong className="text-[#17100C] font-bold mr-1.5">
                          {pt.label}:
                        </strong>
                      )}
                      <span>{pt.text}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Deep-Dive Scholarly Sections Rendered in Structured Sub-Point Cards */}
          <div className="space-y-5">
            {article.sections.map((sec, idx) => {
              const rawSectionBody = t(sec.bodyEn, sec.bodyHi);
              const subPoints = parseStructuredSubPoints(rawSectionBody);

              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/75 border border-[#5A3922]/30 space-y-3.5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#5A3922]/25">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[10px] font-bold uppercase tracking-[0.16em]">
                        {t(`SEC 0${idx + 1}`, `खंड ०${idx + 1}`)}
                      </span>
                      <h3 className="text-base sm:text-xl font-serif text-[#17100C] font-bold">
                        {t(sec.headingEn, sec.headingHi)}
                      </h3>
                    </div>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#5A3922] bg-[#EFE0C6] px-2.5 py-0.5 rounded border border-[#5A3922]/25">
                      {subPoints.length} {t('Sub-Points', 'उप-बिंदु')}
                    </span>
                  </div>

                  {/* Structured Sub-Points List */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {subPoints.map((sp, spIdx) => (
                      <div
                        key={spIdx}
                        className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#F5EAD8] border border-[#5A3922]/20 hover:border-[#B68A32]/60 transition-colors"
                      >
                        <span className="px-2 py-0.5 rounded bg-[#3A2618] text-[#D3AD55] font-mono text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}.{sp.code}
                        </span>
                        <div className="text-xs sm:text-[15px] font-serif text-[#261B13] leading-relaxed flex-1">
                          {sp.label && (
                            <span className="inline-block font-bold text-[#17100C] bg-[#E5D3B3] px-2 py-0.2 rounded border border-[#5A3922]/25 mr-2 mb-1 text-xs sm:text-[13.5px]">
                              {sp.label}
                            </span>
                          )}
                          <span>{sp.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary Scriptural & Field Sources Footer + Exit Monograph Button */}
        <div className="mt-6 pt-4 border-t border-[#3A281B]/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#5A3922]">
              {t('PRIMARY SOURCES & ARCHIVAL CITATION', 'मूल स्रोत एवं अभिलेखीय संदर्भ')}
            </span>
            <p className="font-serif text-xs sm:text-sm text-[#241912] font-medium mt-0.5">
              {t(article.primarySourcesEn, article.primarySourcesHi)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onLaunchStudioAtNode && typeof article.interactiveIndex === 'number' && (
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

            <button
              type="button"
              onClick={handleExitMonograph}
              className="px-4 py-2 rounded-lg border border-[#2B1F17] bg-[#2B1F17] hover:bg-[#3D2B1F] text-[#D3AD55] font-mono text-[10px] font-bold uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{exitLabel}</span>
            </button>
          </div>
        </div>
      </article>
      </div>
    </div>
  );
};
