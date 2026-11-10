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
  ASHTA_BHAIRAVA_SAMARPANA_MANTRA,
  ASHTA_MATRIKA_PROFILES,
  getMatrixIntersection
} from '../data/ashtaResearchData';
import {
  SPECIAL_CIRCULAR_SEALS,
  AGHORA_SUBPART_SEALS,
  ARTICLE_COMPARISON_TABLES,
  SpecialCircularSeal
} from '../data/sacredSealsDeepData';
import { BavanBhairava52PortalView } from './BavanBhairava52PortalView';
import { SaptaChakraArchiveExperience } from './SaptaChakraArchiveExperience';
import { DasaMahavidyaInteractiveStudio } from './DasaMahavidyaInteractiveStudio';
import { SpecializedSealInteractiveStudio } from './SpecializedSealInteractiveStudios';
import {
  TITHI_NITYA_DEVI_MOON_SEQUENCE,
  TITHI_NITYA_MASTER_MANDALA_IMAGE
} from '../data/tithiYakshiniVetalaData';

const PORTAL_ICONS: React.ComponentType<any>[] = [
  Radio,      // I · CAGS Field Archive
  Compass,    // II · Ashta Bhairava
  Shield,     // III · Bhairav Investigation Codex
  Grid,       // IV · 64 Yogini (8 × 8)
  Sparkles,   // V · Eight Matrikas
  Layers,     // VI · Shri Meru Chakra
  Mountain,   // VII · The 14 Lokas
  Compass     // VIII · Daśa Dikpāla (10 Directional Guardians)
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

      {motifType === 'chakra7' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.9">
          {/* Central Suṣumṇā Axis + Iḍā & Piṅgalā Serpentine Nāḍīs + 7 Chakra Nodes */}
          <line x1="60" y1="20" x2="60" y2="100" strokeWidth="1.4" />
          <path
            d="M 60 94 C 42 82, 78 70, 60 58 C 42 46, 78 34, 60 24"
            stroke="#38BDF8"
            strokeWidth="1"
            opacity="0.85"
          />
          <path
            d="M 60 94 C 78 82, 42 70, 60 58 C 78 46, 42 34, 60 24"
            stroke="#F59E0B"
            strokeWidth="1"
            opacity="0.85"
          />
          {[
            { y: 24, c: '#C084FC', r: 3.4 },
            { y: 35, c: '#6366F1', r: 2.8 },
            { y: 47, c: '#38BDF8', r: 2.8 },
            { y: 59, c: '#22C55E', r: 3.1 },
            { y: 71, c: '#EAB308', r: 2.8 },
            { y: 83, c: '#F97316', r: 2.8 },
            { y: 95, c: '#EF4444', r: 3.4 }
          ].map((node, idx) => (
            <circle
              key={idx}
              cx="60"
              cy={node.y}
              r={node.r}
              fill={node.c}
              stroke="#120B07"
              strokeWidth="0.7"
            />
          ))}
        </g>
      )}

      {motifType === 'tithinitya' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.9">
          {/* Inverted Kāmakalā Triangle + 15 Lunar Phase Dots + Central Full Moon Bindu */}
          <polygon points="30,36 90,36 60,92" stroke="#F43F5E" strokeWidth="1.4" />
          <circle cx="60" cy="56" r="14" fill="#FEF08A" fillOpacity="0.22" stroke="#FDE047" strokeWidth="1.2" />
          <circle cx="60" cy="56" r="3.2" fill="#F43F5E" />
          {Array.from({ length: 15 }).map((_, i) => {
            const a = ((i * 360) / 15 - 90) * (Math.PI / 180);
            return (
              <circle
                key={i}
                cx={60 + Math.cos(a) * 34}
                cy={60 + Math.sin(a) * 34}
                r="1.9"
                fill={i % 2 === 0 ? '#FDE047' : accentColor}
              />
            );
          })}
        </g>
      )}

      {motifType === 'yakshini36' && (
        <g stroke={accentColor} fill="none" strokeWidth="1" opacity="0.9">
          {/* 36-Node Uddāmeśvara-Kubera Treasury Ring + Octagram */}
          <rect x="38" y="38" width="44" height="44" />
          <rect x="38" y="38" width="44" height="44" transform="rotate(45 60 60)" />
          <circle cx="60" cy="60" r="16" stroke="#FDE047" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = ((i * 360) / 12) * (Math.PI / 180);
            return (
              <circle
                key={i}
                cx={60 + Math.cos(a) * 33}
                cy={60 + Math.sin(a) * 33}
                r="2"
                fill="#10B981"
              />
            );
          })}
          <circle cx="60" cy="60" r="3.5" fill="#FDE047" />
        </g>
      )}

      {motifType === 'vetala3' && (
        <g stroke={accentColor} fill="none" strokeWidth="1.1" opacity="0.9">
          {/* Concentric Three Guṇas Rings: Sāttvika (16), Rājasika (11), Tāmasika */}
          <circle cx="60" cy="60" r="34" stroke="#38BDF8" strokeDasharray="3 2" />
          <circle cx="60" cy="60" r="24" stroke="#F59E0B" />
          <circle cx="60" cy="60" r="14" stroke="#EF4444" />
          <polygon points="60,26 89,77 31,77" stroke="#38BDF8" strokeWidth="0.9" opacity="0.7" />
          <circle cx="60" cy="60" r="3.5" fill="#EF4444" />
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

      {chapterIndex === 7 && (
        <g stroke={accentColor} fill="none" strokeWidth="1.05" opacity="0.85">
          {/* Gateway VIII: Daśa Dikpāla 10 Directional Rays & Cosmic Axis */}
          <circle cx="60" cy="60" r="28" />
          <circle cx="60" cy="60" r="16" strokeDasharray="2 2" />
          {/* 8 Horizontal Compass Directions */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a) * 8}
                y1={60 + Math.sin(a) * 8}
                x2={60 + Math.cos(a) * 34}
                y2={60 + Math.sin(a) * 34}
              />
            );
          })}
          {/* Vertical Zenith / Nadir axis */}
          <line x1="60" y1="18" x2="60" y2="102" strokeWidth="1.4" />
          <polygon points="60,14 63,20 57,20" fill={accentColor} />
          <polygon points="60,106 63,100 57,100" fill={accentColor} />
          <circle cx="60" cy="60" r="3.5" fill={accentColor} />
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

      {/* Section Header: The Eight Sacred Gateways */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/35 bg-[#23160E]/90 mb-2.5">
          <Compass className="w-3.5 h-3.5 text-[#D3AD55]" />
          <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] text-[#D3AD55]">
            {t(
              'AṢṬA-DVĀRA · EIGHT SACRED GATEWAYS OF KNOWLEDGE',
              'अष्ट ज्ञान-द्वार · ८ पवित्र शोध द्वार'
            )}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#F2E5C9] tracking-wide">
          {t(
            'The Eight Sacred Gateways — Engraved Portal Seals',
            'अष्ट ज्ञान-द्वार — ८ समर्पित वृत्ताकार शोध-द्वार'
          )}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-[#C8B69E]/80 font-serif max-w-2xl mx-auto leading-relaxed">
          {t(
            'Select any of the eight Sacred Gateway boxes below to open its dedicated Category Landing Page, subcategory traditions, source-conscious monographs, and interactive research studio.',
            'किसी भी ज्ञान-द्वार बॉक्स पर क्लिक करके उसका समर्पित श्रेणी पृष्ठ, उप-परंपराएँ, मूल-स्रोत शोध-लेख एवं संवादात्मक अध्ययन कक्ष खोलें।'
          )}
        </p>
      </div>

      {/* The 8 Sacred Gateways Grid — Box Cards with Engraved Circular Seals */}
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
              'Click any engraved circular seal below to open its full standalone monograph page — including Jaya & Vijaya, Aghora Sampradāya, Samaya & 8 Prahars, Bhairavagaṇa, Kālīkula–Śrīkula, Daśa Mahāvidyā, Navadurgā, Bāvan Bhairava (52), Sapta Chakra, Tithi Nityā Devī (16 Moon Phases), 36 Yakṣiṇīs (Uddāmeśvara Tantra), and Vetāla (Three Guṇas).',
              'जय–विजय, अघोर सम्प्रदाय, समय और अष्ट प्रहर, भैरवगण, कालीकुल–श्रीकुल, दशमहाविद्या, नवदुर्गा, बावन भैरव (५२), सप्त चक्र, तिथि नित्या देवी (१६ चन्द्र-कलाएँ), ३६ यक्षिणियाँ (उद्दामेश्वर तंत्र) तथा बेतालों की त्रिविध प्रकृति के विस्तृत स्वतंत्र शोध-पृष्ठ खोलने हेतु किसी भी वृत्ताकार मुद्रा पर क्लिक करें।'
            )}
          </p>
        </div>

        {/* Responsive Circular Medallion Grid: 2 cols mobile/tablet (12 seals = 6 full rows), 3 cols desktop (12 seals = 4 full rows) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 px-1 sm:px-2">
          {SPECIAL_CIRCULAR_SEALS.map((seal) => {
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
                className="group relative rounded-2xl border border-[#5A3922]/75 bg-gradient-to-b from-[#22150D]/95 via-[#160D08]/95 to-[#0E0805]/95 p-3.5 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-[#D3AD55] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(211,173,85,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55]"
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
                        {seal.subParts.map(sub => {
                          const subImages =
                            sub.id === 'seal-kalikula-archive-part1'
                              ? [
                                  '/assets/aistudio/image_6cc0fa29.png',
                                  '/assets/aistudio/image_f4181c35.png',
                                ]
                              : sub.id === 'seal-srikula-archive-part2'
                              ? [
                                  '/assets/aistudio/image_a583fd6e.png',
                                  '/assets/aistudio/image_5dc6cc78.png',
                                ]
                              : [];
                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={e => {
                                e.stopPropagation();
                                onOpenArticle(sub.categorySlug, sub.articleSlug);
                              }}
                              className="w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg border border-[#5A3922]/75 bg-[#21130B] hover:border-[#D3AD55] hover:bg-[#2E1B10] transition-all cursor-pointer text-left"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {subImages.length > 0 && (
                                  <div className="flex items-center -space-x-1.5 shrink-0">
                                    {subImages.map((imgSrc, idx) => (
                                      <img
                                        key={imgSrc}
                                        src={imgSrc}
                                        alt={sub.shortTitleEn}
                                        loading="lazy"
                                        className={`w-8 h-8 rounded-md object-cover border border-[#D3AD55]/60 shadow-sm ${
                                          idx === 1 ? 'ring-1 ring-[#1B100A]' : ''
                                        }`}
                                      />
                                    ))}
                                  </div>
                                )}
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
                              </div>
                              <ArrowRight
                                className="w-3 h-3 shrink-0"
                                style={{ color: sub.accentColor }}
                              />
                            </button>
                          );
                        })}
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

          {/* ॥ श्री अष्टभैरवाय नमः ॥ Dossier Header & Samarpana Mantra Banner */}
          {portal.slug === 'ashta-bhairava' && (
            <div className="rounded-xl border-2 border-[#D3AD55]/55 bg-gradient-to-r from-[#28150B] via-[#1B0E07] to-[#28150B] p-4 sm:p-5 text-center space-y-2.5 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/45 bg-[#140904]">
                <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#D3AD55] font-bold">
                  ॥ श्री अष्टभैरवाय नमः ॥ · Eight Manifestations & Guardians of Lord Shiva
                </span>
              </div>
              <div className="font-serif text-xs sm:text-sm text-[#F5E8CE]/90 tracking-wider font-medium">
                {t(
                  'DEITY • EIGHT DIRECTIONAL GUARDIANS • SACRED ROOT NAME MANTRA',
                  'देवता • अष्ट दिशा-रक्षक स्वरूप • मूल नाम मंत्र'
                )}
              </div>
              <div className="pt-2.5 border-t border-[#5A3922]/60 flex flex-col items-center justify-center gap-1">
                <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#E06D53] font-bold">
                  {t('AṢṬA BHAIRAVA SAMARPAṆA MANTRA · UNIVERSAL DEDICATION', '॥ अष्टभैरव समर्पण मंत्र ॥ · सार्वभौमिक समर्पण')}
                </span>
                <div className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#FFD700] tracking-wide">
                  {ASHTA_BHAIRAVA_SAMARPANA_MANTRA.sanskrit}
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#E0B86C] font-semibold">
                  {ASHTA_BHAIRAVA_SAMARPANA_MANTRA.phonetic}
                </div>
                <div className="font-serif text-xs text-[#C8B69E] italic">
                  {t(
                    ASHTA_BHAIRAVA_SAMARPANA_MANTRA.meaningEn,
                    ASHTA_BHAIRAVA_SAMARPANA_MANTRA.meaningHi
                  )}
                </div>
              </div>
            </div>
          )}

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

                  {/* Ashta Bhairava Mūla Nāma Mantra Snippet */}
                  {(() => {
                    const matchedBh = ASHTA_BHAIRAVA_PROFILES.find(
                      p => p.englishName.toLowerCase().replace(/\s+/g, '-') === article.slug
                    );
                    if (!matchedBh) return null;
                    return (
                      <div className="my-2.5 p-2 rounded-lg bg-[#140C08] border border-[#D3AD55]/40 space-y-0.5">
                        <div className="flex items-center justify-between text-[8.5px] font-mono text-[#D3AD55] uppercase tracking-wider">
                          <span className="font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-[#D3AD55]" />
                            {t('Mūla Nāma Mantra', 'मूल नाम मंत्र')}
                          </span>
                          <span className="text-[#C8B69E]/70 font-serif text-[9px]">॥ मूल मंत्र ॥</span>
                        </div>
                        <div className="font-serif text-xs sm:text-sm font-bold text-[#FFDF80]">
                          {matchedBh.mulaMantra.sanskrit}
                        </div>
                        <div className="font-mono text-[10.5px] text-[#E0B86C]/90">
                          {matchedBh.mulaMantra.phonetic}
                        </div>
                      </div>
                    );
                  })()}

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
}

// Helper to format section text into natural scholarly article paragraphs
interface ArticleParagraph {
  leadLabel?: string;
  body: string;
}

function parseArticleParagraphs(rawBody: string): ArticleParagraph[] {
  if (!rawBody) return [];

  // Split by line breaks or top-level inline numbered section markers like (1), (2), (१), (२)
  // Keep sub-clauses like (a), (b), (क), (ख) inline within their paragraph
  const rawChunks = rawBody
    .split(/\n+|(?=(?:\(\d+\)|\([०-९]+\))\s+)/gu)
    .map(c => c.trim())
    .filter(Boolean);

  const paragraphs: ArticleParagraph[] = [];

  for (const chunk of rawChunks) {
    const withoutMarker = chunk.replace(/^(?:\(\d+\)|\([०-९]+\))\s*/u, '').trim();
    if (!withoutMarker) continue;

    const leadMatch = withoutMarker.match(/^([^:：—–]{2,65}?)\s*(?::|：)\s+(.+)$/su);
    if (leadMatch) {
      paragraphs.push({
        leadLabel: leadMatch[1].trim(),
        body: leadMatch[2].trim()
      });
    } else {
      paragraphs.push({
        body: withoutMarker
      });
    }
  }

  return paragraphs;
}

export const ArticleMonographPageView: React.FC<ArticleMonographPageViewProps> = ({
  portal,
  article,
  openedFromOverview = false,
  onBackToCategory,
  onBackToOverview,
  onOpenArticle,
  onLaunchStudioAtNode
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
          {onLaunchStudioAtNode && typeof article.interactiveIndex === 'number' && (
            <button
              type="button"
              onClick={() => onLaunchStudioAtNode(portal.chapterIndex, article.interactiveIndex)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D3AD55]/60 bg-[#26170F] hover:bg-[#362014] text-[#E8D4A8] font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
              <span>{t('Unit Interactive Studio', 'इकाई संवादात्मक कक्ष')}</span>
            </button>
          )}
          <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded border border-[#D3AD55]/40 bg-[#23160E] text-[#D3AD55]">
            {article.code} · {unitLabel}
          </span>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* SEAL 06: DASA MAHAVIDYA — 10 MAHAVIDYAS INTERACTIVE SACRED GEOMETRY STUDIO PLACED ABOVE THE SELECTED ARTICLE COMPONENT */}
      {article.slug === 'dasa-mahavidya-ten-wisdom-goddesses' && (
        <div className="mb-8">
          <DasaMahavidyaInteractiveStudio lang={t('en', 'hi') === 'hi' ? 'hi' : 'en'} />
        </div>
      )}

      {/* SEAL 09: THE SEVEN CHAKRAS — COMPLETE TANTRIC & YOGIC RESEARCH ARCHIVE (सप्त चक्र) PLACED ABOVE THE SELECTED ARTICLE COMPONENT */}
      {article.slug === 'sapta-chakra-complete-research-archive' && (
        <div className="mb-8">
          <SaptaChakraArchiveExperience lang={t('en', 'hi') === 'hi' ? 'hi' : 'en'} />
        </div>
      )}

      {/* LIVE INTERACTIVE STUDIOS FOR SPECIALIZED CIRCULAR SEAL UNITS (SEALS 01, 02, 03, 04, 05, 07, 08) */}
      <SpecializedSealInteractiveStudio
        articleSlug={article.slug}
        lang={t('en', 'hi') === 'hi' ? 'hi' : 'en'}
      />

      {article.slug === 'shakti-pithas-sacred-geography' ||
      article.slug === 'bavan-bhairava-chhappan-kalua-concordance' ? (
        <BavanBhairava52PortalView />
      ) : (
      /* Main Archival Monograph Folio */
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

        {/* Dedicated Ashta Bhairava Mūla Nāma Mantra & Samarpaṇa Inscription */}
        {(() => {
          const matchedBh = ASHTA_BHAIRAVA_PROFILES.find(
            p => p.englishName.toLowerCase().replace(/\s+/g, '-') === article.slug || p.id === article.slug
          );
          if (!matchedBh) return null;
          return (
            <div className="mt-6 rounded-xl border-2 border-[#B68A32]/60 bg-gradient-to-r from-[#28150B] via-[#1B0E07] to-[#28150B] p-5 sm:p-6 text-center space-y-3.5 shadow-lg text-[#F5E8CE]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5A3922]/60 pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3AD55] font-bold">
                  {t(
                    `AṢṬA BHAIRAVA ${matchedBh.index} OF 08 · ${matchedBh.directionFull.toUpperCase()} OCTANT`,
                    `अष्ट भैरव ०${matchedBh.index} / ०८ · ${matchedBh.directionFullHi} दिशा`
                  )}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#2C1810] border border-[#D3AD55]/40 font-mono text-[9px] uppercase tracking-wider text-[#D3AD55]">
                  {t(`Consort: ${matchedBh.shakti} · Mount: ${matchedBh.vahana}`, `शक्ति: ${matchedBh.shaktiHi} · वाहन: ${matchedBh.vahanaHi}`)}
                </span>
              </div>

              {/* Individual Mūla Nāma Mantra Container */}
              <div className="p-3.5 rounded-lg bg-gradient-to-r from-[#170E09] via-[#2A150B] to-[#170E09] border border-[#D3AD55]/50 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-[#D3AD55]">
                  <span className="font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
                    {t('Mūla Nāma Mantra', 'मूल नाम मंत्र')}
                  </span>
                  <span className="text-[#C8B69E]/75 font-serif text-[10px]">॥ मूल नाम मंत्र ॥</span>
                </div>
                <div className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#FFDF80] tracking-wide">
                  {matchedBh.mulaMantra.sanskrit}
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#E0B86C] font-semibold">
                  {matchedBh.mulaMantra.phonetic}
                </div>
              </div>

              {/* Universal Dedication Samarpaṇa Banner */}
              <div className="pt-2 border-t border-[#5A3922]/60 flex flex-col items-center justify-center gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E06D53] font-bold">
                  {t('AṢṬA BHAIRAVA SAMARPAṆA MANTRA · UNIVERSAL DEDICATION', '॥ अष्टभैरव समर्पण मंत्र ॥ · सार्वभौमिक समर्पण')}
                </span>
                <div className="font-serif text-base sm:text-lg font-bold text-[#FFD700] tracking-wide">
                  {ASHTA_BHAIRAVA_SAMARPANA_MANTRA.sanskrit}
                </div>
                <div className="font-mono text-xs text-[#E0B86C] font-medium">
                  {ASHTA_BHAIRAVA_SAMARPANA_MANTRA.phonetic}
                </div>
                <div className="font-serif text-xs text-[#C8B69E] italic">
                  {t(
                    ASHTA_BHAIRAVA_SAMARPANA_MANTRA.meaningEn,
                    ASHTA_BHAIRAVA_SAMARPANA_MANTRA.meaningHi
                  )}
                </div>
              </div>

              {/* Quick Jump Strip Across all 8 Bhairavas */}
              <div className="pt-2 border-t border-[#5A3922]/40 flex flex-wrap justify-center gap-1.5">
                {ASHTA_BHAIRAVA_PROFILES.map((bh) => {
                  const bhSlug = bh.englishName.toLowerCase().replace(/\s+/g, '-');
                  const isCurrent = bhSlug === article.slug;
                  return (
                    <button
                      key={bh.id}
                      type="button"
                      disabled={isCurrent}
                      onClick={() => onOpenArticle('ashta-bhairava', bhSlug)}
                      className={`px-2.5 py-1 rounded font-mono text-[9.5px] transition-colors inline-flex items-center gap-1 cursor-pointer ${
                        isCurrent
                          ? 'bg-[#3A2418] border border-[#D3AD55] text-[#FFDF80] font-bold'
                          : 'bg-[#180E09] hover:bg-[#2C1810] border border-[#5A3922]/60 text-[#C8B69E]'
                      }`}
                    >
                      <span className="text-[#D3AD55]">0{bh.index}.</span>
                      <span>{t(bh.shortTranslit, bh.shortHindi)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}

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
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  article.slug === 'kalikula-archive-tradition'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                      {t('PART I · KĀLĪKULA ARCHIVE', 'भाग I · कालीकुल अभिलेखागार')}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <img
                        src="/assets/aistudio/image_6cc0fa29.png"
                        alt="Dakṣiṇā Kālī"
                        loading="lazy"
                        className="w-7 h-7 rounded object-cover border border-[#D3AD55]/60"
                      />
                      <img
                        src="/assets/aistudio/image_f4181c35.png"
                        alt="Śmaśāna Kālī"
                        loading="lazy"
                        className="w-7 h-7 rounded object-cover border border-[#D3AD55]/60"
                      />
                    </div>
                  </div>
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
                </div>
              </button>

              <button
                type="button"
                onClick={() => onOpenArticle('eight-matrikas', 'srikula-archive-tradition')}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  article.slug === 'srikula-archive-tradition'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                      {t('PART II · ŚRĪKULA ARCHIVE', 'भाग II · श्रीकुल अभिलेखागार')}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      <img
                        src="/assets/aistudio/image_a583fd6e.png"
                        alt="Śrī Lalitā Tripurasundarī"
                        loading="lazy"
                        className="w-7 h-7 rounded object-cover border border-[#D3AD55]/60"
                      />
                      <img
                        src="/assets/aistudio/image_5dc6cc78.png"
                        alt="Śrīcakra"
                        loading="lazy"
                        className="w-7 h-7 rounded object-cover border border-[#D3AD55]/60"
                      />
                    </div>
                  </div>
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
                </div>
              </button>

              <button
                type="button"
                onClick={() => onOpenArticle('eight-matrikas', 'kalikula-srikula-streams')}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  article.slug === 'kalikula-srikula-streams'
                    ? 'border-[#2B1F17] bg-[#2B1F17] text-[#F2E6D2] shadow-md'
                    : 'border-[#5A3922]/35 bg-[#F2E6D2] text-[#17100C] hover:border-[#2B1F17]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] font-bold block opacity-85">
                      {t('PARTS I–IV · COMPLETE SYNTHESIS', 'भाग I–IV · संपूर्ण शोध संश्लेषण')}
                    </span>
                    <div className="flex items-center -space-x-1 shrink-0">
                      <img
                        src="/assets/aistudio/image_6cc0fa29.png"
                        alt="Dakṣiṇā Kālī"
                        loading="lazy"
                        className="w-6 h-6 rounded object-cover border border-[#D3AD55]/60"
                      />
                      <img
                        src="/assets/aistudio/image_f4181c35.png"
                        alt="Śmaśāna Kālī"
                        loading="lazy"
                        className="w-6 h-6 rounded object-cover border border-[#D3AD55]/60"
                      />
                      <img
                        src="/assets/aistudio/image_a583fd6e.png"
                        alt="Lalitā Tripurasundarī"
                        loading="lazy"
                        className="w-6 h-6 rounded object-cover border border-[#D3AD55]/60"
                      />
                      <img
                        src="/assets/aistudio/image_5dc6cc78.png"
                        alt="Śrīcakra"
                        loading="lazy"
                        className="w-6 h-6 rounded object-cover border border-[#D3AD55]/60"
                      />
                    </div>
                  </div>
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
                </div>
              </button>
            </div>

            <p className="text-xs font-serif text-[#3D2B1F] italic leading-relaxed border-t border-[#5A3922]/20 pt-2.5">
              {t(
                'Editorial Recommendation: Each page is labeled as a research synthesis and distinguishes primary textual evidence from scholarly interpretation and contemporary practitioner explanations.',
                'संपादकीय अनुशंसा: प्रत्येक पृष्ठ को "शोध संश्लेषण" (Research Synthesis) के रूप में प्रस्तुत किया गया है और इसमें प्राथमिक ग्रंथीय साक्ष्य, अकादमिक व्याख्या तथा समकालीन साधक-विवरणों के बीच स्पष्ट अंतर रखा गया है।'
              )}
            </p>

            {/* ====================================================================
                STRUCTURED ARCHIVAL ICONOGRAPHIC & YANTRIC PLATES (KĀLĪKULA & ŚRĪKULA)
               ==================================================================== */}
            <div className="pt-4 border-t-2 border-[#2B1F17]/30 space-y-6">
              {/* PART I: KĀLĪKULA VISUAL PLATES */}
              {(article.slug === 'kalikula-archive-tradition' ||
                article.slug === 'kalikula-srikula-streams') && (
                <div className="rounded-xl border-2 border-[#3A281B] bg-[#1E140E] p-4 sm:p-5 text-[#F2E6D2] shadow-md space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#5A3922]/60">
                    <div>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#E06D53] font-bold block">
                        {t(
                          'PART I VISUAL DOSSIER · KĀLĪKULA ICONOGRAPHIC PLATES',
                          'भाग I दृश्य अभिलेख · कालीकुल प्रतिमाशास्त्रीय फलक'
                        )}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE] mt-0.5">
                        {t(
                          'Kālīkula Stream (कालीकुल) — Dakṣiṇā Kālī & Śmaśāna Kālī Iconography',
                          'कालीकुल धारा — दक्षिणा काली एवं श्मशान काली प्रतिमा-विज्ञान'
                        )}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded border border-[#E06D53]/50 bg-[#2C1810] text-[#E06D53] font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                      {t('2 ARCHIVAL PLATES · FIG. KĀLĪ 01–02', '२ अभिलेखीय फलक · चित्र काली ०१–०२')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {/* KĀLĪKULA PLATE I */}
                    <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                            {t('PLATE I · FIG. KĀLĪ-01', 'फलक I · चित्र काली-०१')}
                          </span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]">
                            {t('Kalighat / Bengal Śākta School', 'कालीघाट / बंगाल शाक्त शैली')}
                          </span>
                        </div>
                        <div className="p-3 bg-[#140C08] flex items-center justify-center">
                          <img
                            src="/assets/aistudio/image_6cc0fa29.png"
                            alt={t(
                              'Dakṣiṇā Kālī standing on Śiva with Mātṛkā-inscribed garland',
                              'मातृका-अंकित मुण्डमाला धारण किए शिव पर आरूढ़ दक्षिणा काली'
                            )}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#F2E6D2]/5"
                          />
                        </div>
                        <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5E8CE]">
                            {t(
                              'Dakṣiṇā Kālī with Mātṛkā-Varṇamālā — The Bestower of Liberation',
                              'मातृका-वर्णमाला युक्त दक्षिणा काली — मोक्ष एवं अभय प्रदायिनी'
                            )}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              t('Khaḍga (Sword of Gnosis)', 'खड्ग (ज्ञान-असि)'),
                              t('Mātṛkā Garland (50 Syllables)', 'मातृका-वर्णमाला'),
                              t('Abhaya & Varada Mudrā', 'अभय एवं वरद मुद्रा'),
                              t('Supine Śiva & Vāhanas (Crow & Jackal)', 'शवरूप शिव, काक एवं शृगाल'),
                            ].map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>
                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(
                              'Traditional Kalighat-style iconographic plate depicting four-armed Dakṣiṇā Kālī standing upon supine Śiva. Her garland is inscribed with Sanskrit Mātṛkā syllables, signifying the dissolution of speech and conceptual thought into primordial Consciousness, while her right hands grant fearlessness (abhaya) and boons (varada) and her left hands hold the sacrificial sword (khaḍga) and severed ego-head.',
                              'पारंपरिक कालीघाट शैली का यह चित्र चतुर्भुजा दक्षिणा काली को शवरूप शिव के वक्ष पर आरूढ़ दर्शाता है। उनकी माला पर संस्कृत मातृका अक्षर अंकित हैं, जो वाक् और वैचारिक प्रपंच के आद्या चेतना में लय के प्रतीक हैं; उनके दाएँ हाथ अभय और वरद मुद्रा में हैं तथा बाएँ हाथों में ज्ञान-खड्ग और अहंकार का कटा मस्तक है।'
                            )}
                          </p>
                        </figcaption>
                      </div>
                    </figure>

                    {/* KĀLĪKULA PLATE II */}
                    <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#E06D53] font-bold">
                            {t('PLATE II · FIG. KĀLĪ-02', 'फलक II · चित्र काली-०२')}
                          </span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]">
                            {t('Mahāśmaśāna Ugra-Rūpa', 'महाश्मशान उग्र-रूप')}
                          </span>
                        </div>
                        <div className="p-3 bg-[#140C08] flex items-center justify-center">
                          <img
                            src="/assets/aistudio/image_f4181c35.png"
                            alt={t(
                              'Śmaśāna Kālī in the nocturnal cremation ground with funeral pyres',
                              'रात्रिकालीन महाश्मशान में चिताग्नि के मध्य स्थित श्मशान काली'
                            )}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                          />
                        </div>
                        <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5E8CE]">
                            {t(
                              'Śmaśāna Kālī in the Mahāśmaśāna — Sovereign of Cosmic Dissolution (Saṃhāra)',
                              'महाश्मशान स्थित श्मशान काली — महाप्रलय एवं संहार-क्रम की अधिष्ठात्री'
                            )}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              t('Blazing Citā (Funeral Pyres)', 'प्रज्वलित चिताग्नि'),
                              t('Triśūla & Khaḍga', 'त्रिशूल एवं खड्ग'),
                              t('Muṇḍamālā (Garland of Skulls)', 'मुण्डमाला'),
                              t('Transcendence of Fear (Bhaya-Nāśinī)', 'भय एवं द्वैत का अतिक्रमण'),
                            ].map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#E06D53]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>
                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(
                              'Fierce cremation-ground manifestation of Kālī surrounded by blazing funeral pyres (citā), skulls, and nocturnal stillness. Wielding the trident (triśūla), blood-stained sword (khaḍga), and severed head while standing upon ash-smeared Śiva, this form embodies the Kālīkula ontology of radical non-duality—where the cremation ground represents the final burning away of karmic conditioning (vāsanā) and dualistic impurity.',
                              'प्रज्वलित चिताओं, कपालों और रात्रि की निस्तब्धता से घिरे महाश्मशान में काली का उग्र स्वरूप। भस्म-लिप्त शिव पर आरूढ़, त्रिशूल, खड्ग और कटे मस्तक को धारण करने वाला यह रूप कालीकुल के अद्वैत दर्शन को प्रकट करता है—जहाँ श्मशान समस्त संस्कारों (वासनाओं) और द्वैत-जनित अशुद्धियों के पूर्ण दहन की भूमि है।'
                            )}
                          </p>
                        </figcaption>
                      </div>
                    </figure>
                  </div>

                  {/* HISTORICAL CURRENTS & MANUSCRIPT FOLIOS: KĀLĪKRAMA / KRAMA & KAULA TRADITIONS */}
                  <div className="pt-4 border-t border-[#5A3922]/60 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D3AD55] font-bold block">
                          {t(
                            'KĀLĪKULA HISTORICAL CURRENTS & MANUSCRIPT WITNESSES',
                            'कालीकुल की ऐतिहासिक धाराएँ एवं पांडुलिपि साक्ष्य'
                          )}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5E8CE] mt-0.5">
                          {t(
                            'Kālīkrama & Krama · Kaula Traditions (Plates III & IV)',
                            'कालीक्रम एवं क्रम · कौल परम्पराएँ (फलक III एवं IV)'
                          )}
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded border border-[#D3AD55]/45 bg-[#170E09] text-[#D3AD55] font-mono text-[8.5px] font-bold uppercase tracking-[0.15em]">
                        {t('MANUSCRIPT PLATES · FIG. KĀLĪ 03–04', 'पांडुलिपि फलक · चित्र काली ०३–०४')}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {/* KĀLĪKRAMA AND KRAMA (PLATE III) */}
                      <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                              {t('PLATE III · FIG. KĀLĪ-03 · KĀLĪKRAMA & KRAMA', 'फलक III · चित्र काली-०३ · कालीक्रम एवं क्रम')}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-[#2C1810] border border-[#E06D53]/40 font-mono text-[8px] uppercase tracking-wider text-[#E06D53]">
                              Paperity
                            </span>
                          </div>
                          <div className="p-3 bg-[#140C08] flex items-center justify-center">
                            <img
                              src="/assets/aistudio/image_798564a5.png"
                              alt={t(
                                'Birch-bark (Bhūrjapatra) Tantric manuscript folio associated with Kālīkrama and Krama traditions',
                                'कालीक्रम एवं क्रम परम्परा से संबद्ध भूर्जपत्र तांत्रिक पांडुलिपि पृष्ठ'
                              )}
                              loading="lazy"
                              className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                            />
                          </div>
                          <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                            <h5 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE]">
                              {t('Kālīkrama and Krama', 'कालीक्रम एवं क्रम (Kālīkrama and Krama)')}
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                t('Unfolding & Reabsorption of Consciousness', 'चेतना का उन्मेष एवं संहार/प्रत्याहार'),
                                t('Doctrine of the Twelve Kālīs (Dvādaśa-Kālī)', 'द्वादश काली सिद्धांत (१२ काली-चक्र)'),
                                t('Bhūrjapatra Śāradā Codex Witness', 'भूर्जपत्र शारदा पांडुलिपि साक्ष्य'),
                              ].map((attr, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                                >
                                  {attr}
                                </span>
                              ))}
                            </div>
                            <p className="font-serif text-xs sm:text-[13.5px] text-[#F5E8CE] leading-relaxed font-medium">
                              {t(
                                'Important historical currents in which sequences of Goddess forms are associated with the unfolding and reabsorption of consciousness. The doctrine of the twelve Kālīs is especially significant here.',
                                'महत्त्वपूर्ण ऐतिहासिक धाराएँ जिनमें देवी के स्वरूपों के अनुक्रम (क्रम) को चेतना के प्रकटीकरण (सृष्टि/उन्मेष) और पुनर्समावेश (संहार/लय) के साथ जोड़ा जाता है। यहाँ द्वादश काली (बारह कालियाँ) का सिद्धांत विशेष रूप से महत्त्वपूर्ण है।'
                              )}
                            </p>
                          </figcaption>
                        </div>
                      </figure>

                      {/* KAULA TRADITIONS (PLATE IV) */}
                      <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#E06D53] font-bold">
                              {t('PLATE IV · FIG. KĀLĪ-04 · KAULA TRADITIONS', 'फलक IV · चित्र काली-०४ · कौल परम्पराएँ')}
                            </span>
                            <span className="font-mono text-[8px] uppercase tracking-wider text-[#C8B69E]">
                              {t('Tāḍapatra Palm-Leaf Folio', 'ताड़पत्र पांडुलिपि पट्ट')}
                            </span>
                          </div>
                          <div className="p-3 bg-[#140C08] flex items-center justify-center">
                            <img
                              src="/assets/aistudio/image_1458a924.png"
                              alt={t(
                                'Palm-leaf (Tāḍapatra) Tantric manuscript folio associated with Kaula lineage and mantra transmission',
                                'कौल परम्परा, कुल-शिक्षा एवं मन्त्र-दीक्षा से संबद्ध ताड़पत्र पांडुलिपि'
                              )}
                              loading="lazy"
                              className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                            />
                          </div>
                          <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                            <h5 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE]">
                              {t('Kaula traditions', 'कौल परम्पराएँ (Kaula Traditions)')}
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {[
                                t('Lineage, Initiation (Dīkṣā) & Ritual', 'परम्परा (अन्वय), दीक्षा एवं अनुष्ठान'),
                                t('Teachings about Kula', 'कुल-तत्त्व का शिक्षण'),
                                t('Kaula ≠ Kālīkula (Distinct Taxonomies)', 'कौल एवं कालीकुल पर्यायवाची नहीं हैं'),
                              ].map((attr, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#E06D53]"
                                >
                                  {attr}
                                </span>
                              ))}
                            </div>
                            <p className="font-serif text-xs sm:text-[13.5px] text-[#F5E8CE] leading-relaxed font-medium">
                              {t(
                                'A wider family of Tantric traditions involving lineage, initiation, ritual, and teachings about kula. Certain Kālī-centered systems belong to this wider historical context, but Kaula and Kālīkula are not interchangeable terms.',
                                'तांत्रिक परम्पराओं का एक व्यापक परिवार जिसमें वंश-परम्परा, दीक्षा, अनुष्ठान और कुल (kula) से संबंधित शिक्षाएँ समाहित हैं। कुछ काली-केंद्रित प्रणालियाँ इस व्यापक ऐतिहासिक संदर्भ से जुड़ी हैं, किंतु कौल और कालीकुल परस्पर पर्यायवाची शब्द नहीं हैं।'
                              )}
                            </p>
                          </figcaption>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              )}

              {/* PART II: ŚRĪKULA VISUAL & YANTRIC PLATES */}
              {(article.slug === 'srikula-archive-tradition' ||
                article.slug === 'kalikula-srikula-streams') && (
                <div className="rounded-xl border-2 border-[#3A281B] bg-[#1E140E] p-4 sm:p-5 text-[#F2E6D2] shadow-md space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#5A3922]/60">
                    <div>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#D3AD55] font-bold block">
                        {t(
                          'PART II VISUAL DOSSIER · ŚRĪKULA ICONOGRAPHIC & YANTRIC PLATES',
                          'भाग II दृश्य अभिलेख · श्रीकुल प्रतिमाशास्त्रीय एवं यान्त्रिक फलक'
                        )}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE] mt-0.5">
                        {t(
                          'Śrīkula Stream (श्रीकुल) — Śrī Lalitā Tripurasundarī & The Śrīcakra Maṇḍala',
                          'श्रीकुल धारा — श्री ललिता त्रिपुरसुन्दरी एवं श्रीचक्र नव-आवरण मण्डल'
                        )}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded border border-[#D3AD55]/50 bg-[#2C1810] text-[#D3AD55] font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                      {t('2 ARCHIVAL PLATES · FIG. ŚRĪ 01–02', '२ अभिलेखीय फलक · चित्र श्री ०१–०२')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {/* ŚRĪKULA PLATE I */}
                    <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                            {t('PLATE I · FIG. ŚRĪ-01', 'फलक I · चित्र श्री-०१')}
                          </span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]">
                            {t('Śrīvidyā Rājarājeśvarī Darśana', 'श्रीविद्या राजराजेश्वरी दर्शन')}
                          </span>
                        </div>
                        <div className="p-3 bg-[#140C08] flex items-center justify-center">
                          <img
                            src="/assets/aistudio/image_a583fd6e.png"
                            alt={t(
                              'Śrī Lalitā Tripurasundarī enthroned with sugarcane bow, flowery arrows, noose, goad, and Śrīcakra at her feet',
                              'इक्षुकोदण्ड, पंचबाण, पाश और अंकुश धारण किए सिंहासनारूढ़ श्री ललिता त्रिपुरसुन्दरी तथा चरणों में श्रीचक्र'
                            )}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                          />
                        </div>
                        <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5E8CE]">
                            {t(
                              'Śrī Lalitā Tripurasundarī (Rājarājeśvarī) — Sovereign Empress of the Three Worlds',
                              'श्री ललिता त्रिपुरसुन्दरी (राजराजेश्वरी) — त्रिभुवन की साम्राज्ञी एवं सौन्दर्य-रस स्वरूपिणी'
                            )}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              t('Ikṣukodaṇḍa (Sugarcane Bow · Mind)', 'इक्षुकोदण्ड (मन रूपी धनुष)'),
                              t('Pañcabāṇa (5 Flowery Arrows · Tanmātras)', 'पंचबाण (पंच तन्मात्राएँ)'),
                              t('Pāśa (Noose · Rāga) & Aṅkuśa (Goad · Krodha)', 'पाश (राग) एवं अंकुश (क्रोध-नियंत्रण)'),
                              t('Siṃhāsana & Foot-Venerated Śrīcakra', 'सिंहासन एवं चरण-पूजित श्रीचक्र'),
                            ].map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>
                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(
                              'Enthroned in regal splendor upon the lion-throne (siṃhāsana) and red lotus, Lalitā Tripurasundarī holds her four canonical emblems as codified in the Lalitā Sahasranāma ("Rāgasvarūpa-pāśāḍhyā Krodhākārāṅkuśojjvalā, Mano-rūpekṣukodaṇḍā Pañcatanmātra-sāyakā"): the noose of attachment, the goad of discriminating restraint, the sugarcane bow of the mind, and the five flowery arrows of sensory objects, with the golden Śrīcakra enshrined at her lotus feet.',
                              'सिंह-सिंहासन और रक्त-कमल पर राजसी वैभव में विराजमान श्री ललिता त्रिपुरसुन्दरी ललिता-सहस्रनाम के प्रसिद्ध श्लोक ("रागस्वरूपपाशाढ्या क्रोधाकाराङ्कुशोज्ज्वला, मनोरूपेक्षुकोदण्डा पञ्चतन्मात्रसायका") के अनुसार अपने चार आयुध—पाश, अंकुश, इक्षु-धनुष और पंच पुष्प-बाण—धारण करती हैं, तथा उनके चरण-कमलों के सम्मुख स्वर्णमय श्रीचक्र प्रतिष्ठित है।'
                            )}
                          </p>
                        </figcaption>
                      </div>
                    </figure>

                    {/* ŚRĪKULA PLATE II */}
                    <figure className="rounded-lg border border-[#5A3922]/80 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="px-3.5 py-2 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                            {t('PLATE II · FIG. ŚRĪ-02', 'फलक II · चित्र श्री-०२')}
                          </span>
                          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]">
                            {t('Navāvaraṇa Yantra Architecture', 'नव-आवरण यन्त्र स्थापत्य')}
                          </span>
                        </div>
                        <div className="p-3 bg-[#140C08] flex items-center justify-center">
                          <img
                            src="/assets/aistudio/image_5dc6cc78.png"
                            alt={t(
                              'Traditional ornate Śrīcakra (Śrīyantra) showing nine interlocking triangles, lotus rings, and four-gated Bhūpura',
                              'नव-योनि त्रिकोण, अष्टदल व षोडशदल कमल तथा चतुर्द्वार भूपुर से युक्त पारंपरिक अलंकृत श्रीचक्र (श्रीयन्त्र)'
                            )}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                          />
                        </div>
                        <figcaption className="p-3.5 sm:p-4 space-y-2.5">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#F5E8CE]">
                            {t(
                              'The Śrīcakra (Śrīyantra) — Geometric Cosmogram of the Nine Enclosures (Navāvaraṇa)',
                              'श्रीचक्र (श्रीयन्त्र) — शिव-शक्ति सामरस्य एवं नव-आवरण का ज्यामितीय ब्रह्माण्ड-मण्डल'
                            )}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              t('Sarvānandamaya Bindu (Center)', 'सर्वानन्दमय बिन्दु'),
                              t('9 Interlocking Triangles (43 Koṇas)', '९ अंतर्ग्रथित त्रिकोण (४३ कोण)'),
                              t('Aṣṭadala & Ṣoḍaśadala Padma (8 & 16 Petals)', 'अष्टदल एवं षोडशदल पद्म'),
                              t('Caturdvāra Bhūpura (4-Gated Earth-Square)', 'चतुर्द्वार भूपुर (त्रैलोक्यमोहन चक्र)'),
                            ].map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>
                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(
                              'Ornate liturgical Śrīcakra plate mapping the non-dual union (sāmarasya) of Śiva and Śakti. Four upward-pointing Śiva triangles (vahni) and five downward-pointing Śakti triangles (śakti) interpenetrate around the central Bindu to generate forty-three triangles across five inner cakras, encircled by the eight-petaled and sixteen-petaled lotuses, three concentric rings (mekhalā), and the four-gated Bhūpura.',
                              'शिव और शक्ति के अद्वैत सामरस्य को प्रदर्शित करने वाला पारंपरिक अलंकृत श्रीचक्र फलक। इसमें चार ऊर्ध्वमुखी शिव-त्रिकोण और पाँच अधोमुखी शक्ति-त्रिकोण केन्द्रीय बिन्दु के चारों ओर परस्पर संयुक्त होकर ४३ त्रिकोणों की सृष्टि करते हैं, जो अष्टदल व षोडशदल कमल, तीन वृत्त-मेखलाओं तथा चार द्वारों वाले भूपुर से आवृत हैं।'
                            )}
                          </p>
                        </figcaption>
                      </div>
                    </figure>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ====================================================================
            10 MAHĀVIDYĀS — SEQUENTIAL ONE-BY-ONE ICONOGRAPHIC DOSSIER (01–10)
           ==================================================================== */}
        {article.slug === 'dasa-mahavidya-ten-wisdom-goddesses' && (() => {
          const mahavidyaPlates = [
            {
              num: '01',
              nameEn: '1. Kālī (काली · Dakṣiṇā Kālī)',
              nameHi: '१. काली (दक्षिणा काली · कालिका)',
              titleEn: 'The Power of Time, Dissolution & Primordial Consciousness',
              titleHi: 'महाकाल की संहार-शक्ति, रूपांतरण एवं आद्या चित्-शक्ति',
              kulaEn: 'Kālīkula Sovereign · 1st Mahāvidyā',
              kulaHi: 'कालीकुल अधिष्ठात्री · प्रथम महाविद्या',
              bija: 'क्रीं (Krīṃ)',
              mulaMantra: {
                sanskrit: 'ॐ कालीकायै नमः॥',
                phonetic: 'Om Kalikayai Namah'
              },
              img: '/assets/aistudio/image_6cc0fa29.png',
              altImg: '/assets/aistudio/mahavidya_01_kali.jpg',
              attributesEn: [
                'Khaḍga (Sword of Gnosis)',
                'Severed Ego-Head & Muṇḍamālā',
                'Abhaya & Varada Mudrā',
                'Standing upon Supine Śiva (Śava-Śiva)',
              ],
              attributesHi: [
                'ज्ञान-खड्ग (असि)',
                'अहंकार का छिन्न मस्तक एवं मुण्डमाला',
                'अभय एवं वरद मुद्रा',
                'शवरूप शिव के वक्ष पर आरूढ़',
              ],
              descEn:
                'First of the Ten Mahāvidyās: four-armed Dakṣiṇā Kālī standing upon supine Śiva in the cremation ground, wearing the garland inscribed with Sanskrit Mātṛkā syllables and flanked by crow and jackal—embodying kāla (devouring time) and liberating non-dual consciousness.',
              descHi:
                'दशमहाविद्या में प्रथम: श्मशान में शवरूप शिव के वक्ष पर आरूढ़ चतुर्भुजा दक्षिणा काली, जिनकी मुण्डमाला पर मातृका अक्षर अंकित हैं और समीप काक व शृगाल स्थित हैं—जो महाकाल और मोक्षदायिनी परा-चेतना की साक्षात् मूर्ति हैं।',
            },
            {
              num: '02',
              nameEn: '2. Tārā (तारा · Ugratārā)',
              nameHi: '२. तारा (उग्रतारा · नीलसरस्वती)',
              titleEn: 'The Saviouress Who Carries Across the Ocean of Existence',
              titleHi: 'भव-सागर से पार ले जाने वाली तारिणी एवं परा-वाक् शक्ति',
              kulaEn: 'Kālīkula Nexus · 2nd Mahāvidyā',
              kulaHi: 'कालीकुल की द्वितीय महाविद्या · तारिणी शक्ति',
              bija: 'ह्रीं स्त्रीं हुं फट् (Hrīṃ Strīṃ Huṃ Phaṭ)',
              mulaMantra: {
                sanskrit: 'ॐ तारायै नमः॥',
                phonetic: 'Om Tarayai Namah'
              },
              img: '/assets/aistudio/mahavidya_02_tara.jpg',
              attributesEn: [
                'Kartrī (Sacrificial Shears)',
                'Khaḍga (Sword) & Kapāla (Skull-Cup)',
                'Nīlotpala (Blue/Pink Lotus)',
                'Standing on Śiva Amidst Blazing Citā (Pyre)',
              ],
              attributesHi: [
                'कर्तरी (कैंची — मोह-च्छेदिनी)',
                'खड्ग एवं कपाल-पात्र',
                'नीलोत्पल (कमल)',
                'प्रज्वलित चिताग्नि में शिव पर आरूढ़',
              ],
              descEn:
                'Second Mahāvidyā: fierce dark-blue Ugratārā standing upon supine Śiva within the cremation ground, wielding the sacrificial shears (kartrī) that sever the knots of ignorance, sword (khaḍga), skull-cup (kapāla), and lotus (padma).',
              descHi:
                'द्वितीय महाविद्या: श्मशान में शवरूप शिव पर आरूढ़ नीलवर्णा उग्रतारा, जो अज्ञान-ग्रंथि को काटने वाली कर्तरी (कैंची), खड्ग, कपाल और कमल धारण करती हैं तथा साधक को संकट व भव-बन्धन से पार ले जाती हैं।',
            },
            {
              num: '03',
              nameEn: '3. Tripurasundarī / Ṣoḍaśī (त्रिपुरसुन्दरी · षोडशी)',
              nameHi: '३. त्रिपुरसुन्दरी (षोडशी · ललिता राजराजेश्वरी)',
              titleEn: 'Sovereign Beauty of the Three Worlds & Empress of Śrīvidyā',
              titleHi: 'तीनों लोकों की परम सुन्दरी एवं श्रीविद्या साम्राज्ञी',
              kulaEn: 'Śrīkula Sovereign · 3rd Mahāvidyā',
              kulaHi: 'श्रीकुल अधिष्ठात्री · तृतीय महाविद्या',
              bija: 'श्रीं ह्रीं क्लीं ऐं सौः (Śrīṃ Hrīṃ Klīṃ Aiṃ Sauḥ)',
              mulaMantra: {
                sanskrit: 'ॐ त्रिपुरसुन्दर्यै नमः॥',
                phonetic: 'Om Tripura Sundaryai Namah'
              },
              img: '/assets/aistudio/image_a583fd6e.png',
              attributesEn: [
                'Ikṣukodaṇḍa (Sugarcane Bow · Mind)',
                'Pañcabāṇa (Five Flowery Arrows · Tanmātras)',
                'Pāśa (Noose) & Aṅkuśa (Goad)',
                'Siṃhāsana & Foot-Venerated Śrīcakra',
              ],
              attributesHi: [
                'इक्षुकोदण्ड (मन रूपी गन्ने का धनुष)',
                'पंचबाण (पाँच तन्मात्राओं के पुष्प-बाण)',
                'पाश (राग) एवं अंकुश (द्वेष-नियंत्रण)',
                'सिंह-सिंहासन एवं चरण-पूजित श्रीचक्र',
              ],
              descEn:
                'Third Mahāvidyā: Lalitā Tripurasundarī (Ṣoḍaśī) enthroned in radiant crimson-gold splendor, holding the sugarcane bow, five flowery arrows, noose, and goad, with the nine-enclosure Śrīcakra venerated at her lotus feet.',
              descHi:
                'तृतीय महाविद्या: अरुण-स्वर्ण आभा में सिंहासनारूढ़ श्री ललिता त्रिपुरसुन्दरी (षोडशी), जो इक्षु-धनुष, पंच पुष्प-बाण, पाश और अंकुश धारण करती हैं तथा जिनके चरण-कमलों में नव-आवरण श्रीचक्र प्रतिष्ठित है।',
            },
            {
              num: '04',
              nameEn: '4. Bhuvaneśvarī (भुवनेश्वरी)',
              nameHi: '४. भुवनेश्वरी (सर्वलोक-महेश्वरी)',
              titleEn: 'Cosmic Queen of Space & Matrix of the Fourteen Worlds',
              titleHi: 'ब्रह्माण्डीय आकाश-तत्त्व एवं चौदह भुवनों की अधीश्वरी',
              kulaEn: 'Cosmic Mahākāśa · 4th Mahāvidyā',
              kulaHi: 'महाकाश-स्वरूपिणी · चतुर्थ महाविद्या',
              bija: 'ह्रीं (Hrīṃ — Māyā-Bīja)',
              mulaMantra: {
                sanskrit: 'ॐ भुवनेश्वर्यै नमः॥',
                phonetic: 'Om Bhuvaneshvaryai Namah'
              },
              img: '/assets/aistudio/mahavidya_04_bhuvaneshvari.jpg',
              attributesEn: [
                'Pāśa (Noose of Cosmic Cohesion)',
                'Aṅkuśa (Goad) & Padma (Lotus)',
                'Abhaya & Varada Mudrā',
                'Crowned with the Crescent Moon & Cosmos',
              ],
              attributesHi: [
                'पाश (सृष्टि-संयोजन सूत्र)',
                'अंकुश एवं पद्म',
                'अभय एवं वरद मुद्रा',
                'चन्द्र-मुकुट एवं ब्रह्माण्ड-मण्डल सिंहासन',
              ],
              descEn:
                'Fourth Mahāvidyā: Bhuvaneśvarī, Sovereign Empress of the Worlds, whose body is the expansive cosmic space (ākāśa) in which all planets, stars, and beings arise, holding noose and goad while bestowing fearlessness (abhaya) and boons (varada).',
              descHi:
                'चतुर्थ महाविद्या: भुवनों की स्वामिनी भुवनेश्वरी, जिनका स्वरूप वह अनंत चिदाकाश है जिसमें समस्त लोक, नक्षत्र और प्राणी उदित होते हैं; वे पाश-अंकुश तथा अभय-वरद मुद्रा से जगत् का धारण और पोषण करती हैं।',
            },
            {
              num: '05',
              nameEn: '5. Tripurā Bhairavī (त्रिपुरभैरवी · भैरवी)',
              nameHi: '५. त्रिपुरभैरवी (भैरवी · कौलेश्वरी)',
              titleEn: 'Fierce Radiance of Tapas, Kuṇḍalinī Fire & Sacred Speech',
              titleHi: 'तप, कुण्डलिनी-अग्नि एवं प्रचण्ड तेज की अधिष्ठात्री',
              kulaEn: 'Tapas & Kuṇḍalinī Agni · 5th Mahāvidyā',
              kulaHi: 'तपः-तेज एवं कुण्डलिनी शक्ति · पंचम महाविद्या',
              bija: 'हसैँ हसकरीं हसैँ (Hasaiṃ Hasakarīṃ Hasaiṃ)',
              mulaMantra: {
                sanskrit: 'ॐ भैरव्यै नमः॥',
                phonetic: 'Om Bhairavyai Namah'
              },
              img: '/assets/aistudio/mahavidya_05_bhairavi.jpg',
              attributesEn: [
                'Japa-Mālā (Rosary of Mantric Letters)',
                'Pustaka / Vidyā (Sacred Book) & Triśūla',
                'Abhaya & Varada Mudrā',
                'Crimson Garments & Muṇḍamālā on Lotus',
              ],
              attributesHi: [
                'अक्षमाला (जपमाला)',
                'विद्या-पुस्तक एवं त्रिशूल/अग्नि',
                'अभय एवं वरद मुद्रा',
                'रक्त-वस्त्र, मुण्डमाला एवं पद्मासन',
              ],
              descEn:
                'Fifth Mahāvidyā: crimson-robed Tripurā Bhairavī radiant as a thousand rising suns, wearing a garland of skulls and holding the rosary (akṣamālā) and sacred book (pustaka) while raising her hands in blessing—embodying fierce ascetic tapas and awakened Kuṇḍalinī.',
              descHi:
                'पंचम महाविद्या: सहस्र उदित सूर्यों के समान रक्त-आभा वाली त्रिपुरभैरवी, जो पद्म पर स्थित होकर अक्षमाला, पुस्तक तथा अभय-वरद मुद्रा धारण करती हैं—वे साधना के प्रचण्ड तप और जाग्रत कुण्डलिनी-अग्नि का स्वरूप हैं।',
            },
            {
              num: '06',
              nameEn: '6. Chhinnamastā (छिन्नमस्ता · प्रचण्डचण्डिका)',
              nameHi: '६. छिन्नमस्ता (प्रचण्डचण्डिका · वज्रवैरोचनीया)',
              titleEn: 'The Self-Decapitated Goddess of Sacrificial Prāṇa & Non-Dual Gnosis',
              titleHi: 'स्व-शीर्षच्छेदिनी देवी — प्राण-यज्ञ, सुषुम्ना-जागरण एवं अद्वैत बोध',
              kulaEn: 'Vajra-Prāṇa Sacrifice · 6th Mahāvidyā',
              kulaHi: 'प्राण-यज्ञ एवं वज्र-योग · षष्ठ महाविद्या',
              bija: 'श्रीं ह्रीं क्लीं ऐं वज्रवैरोचनीये हुं हुं फट् स्वाहा',
              mulaMantra: {
                sanskrit: 'ॐ छिन्नमस्तायै नमः॥',
                phonetic: 'Om Chhinnamastayai Namah'
              },
              img: '/assets/aistudio/mahavidya_06_chhinnamasta.jpg',
              attributesEn: [
                'Self-Severed Head Held in Left Hand',
                'Three Blood Streams (Iḍā, Piṅgalā, Suṣumnā)',
                'Attendants Dākinī & Varṇinī',
                'Standing on Kāma & Rati Atop Inverted Triangle Lotus',
              ],
              attributesHi: [
                'वाम हस्त में स्वयं का छिन्न मस्तक',
                'तीन रक्त-धाराएँ (इड़ा, पिंगला, सुषुम्ना)',
                'डाकिनी एवं वर्णिनी सहचरियाँ',
                'अधोमुख त्रिकोण-पद्म पर काम-रति के ऊपर स्थित',
              ],
              descEn:
                'Sixth Mahāvidyā (Kangra school miniature, c. 1800): crimson Chhinnamastā standing upon Kāma and Rati inside an inverted triangle on a cosmic lotus, holding her own severed head as three streams of blood nourish Dākinī, Varṇinī, and her own mouth.',
              descHi:
                'षष्ठ महाविद्या (काँगड़ा शैली लघुचित्र, लगभग १८०० ई.): पद्म और त्रिकोण पर काम-रति के ऊपर खड़ी रक्तवर्णा छिन्नमस्ता, जिनके कण्ठ से निकलती तीन रक्त-धाराएँ डाकिनी, वर्णिनी और स्वयं उनके छिन्न मस्तक का पोषण करती हैं।',
            },
            {
              num: '07',
              nameEn: '7. Dhūmāvatī (धूमावती)',
              nameHi: '७. धूमावती (ज्येष्ठा · धूम्र-स्वरूपिणी)',
              titleEn: 'The Smoky Widow Goddess of Void, Detachment & Ultimate Renunciation',
              titleHi: 'धूम्र-रूपा विधवा देवी — महाशून्य, वैराग्य एवं परम असंगता',
              kulaEn: 'Mahāpralaya Smoke · 7th Mahāvidyā',
              kulaHi: 'महाप्रलय-धूम्र एवं परम वैराग्य · सप्तम महाविद्या',
              bija: 'धूं धूं धूमावती ठः ठः (Dhūṃ Dhūṃ Dhūmāvatī Ṭhaḥ Ṭhaḥ)',
              mulaMantra: {
                sanskrit: 'ॐ धूमावत्यै नमः॥',
                phonetic: 'Om Dhumavatyai Namah'
              },
              img: '/assets/aistudio/mahavidya_07_dhumavati.jpg',
              attributesEn: [
                'Śūrpa (Winnowing Basket of Viveka)',
                'Kāka-Ratha (Chariot Drawn by Black Crows)',
                'White Widow Garments & Unbound Grey Hair',
                'Cremation Ground Pyres & Skulls',
              ],
              attributesHi: [
                'शूर्प (सूप — सार-असार विवेक का प्रतीक)',
                'काक-रथ (दो काले कौवों द्वारा खींचा जाने वाला रथ)',
                'श्वेत विधवा वस्त्र एवं मुक्त धूसर केश',
                'श्मशान-भूमि की चिताएँ एवं कपाल',
              ],
              descEn:
                'Seventh Mahāvidyā (Metropolitan Museum of Art archival print, c. 1875–80): elderly widow Goddess Dhūmāvatī standing in a chariot drawn by two black crows across a cremation ground, holding a winnowing basket (śūrpa)—revealing the sacred amidst deprivation and cosmic dissolution.',
              descHi:
                'सप्तम महाविद्या (मेट्रोपॉलिटन म्यूज़ियम ऑफ आर्ट अभिलेख, लगभग १८७५–८० ई.): श्मशान में दो कौवों द्वारा चालित रथ पर आरूढ़ वृद्धा विधवा रूप धूमावती, जिनके हाथ में शूर्प (सूप) है—जो सांसारिक भ्रम को फटक कर परम वैराग्य प्रदान करती हैं।',
            },
            {
              num: '08',
              nameEn: '8. Bagalāmukhī (बगलामुखी · पीताम्बरा)',
              nameHi: '८. बगलामुखी (पीताम्बरा · स्तम्भन-शक्ति)',
              titleEn: 'Golden-Robed Sovereign of Stambhana (Immobilization of Hostile Speech)',
              titleHi: 'पीताम्बरा स्तम्भन-शक्ति — शत्रु-वाक् एवं द्वैत-प्रपंच को स्तम्भित करने वाली',
              kulaEn: 'Stambhana Vidyā · 8th Mahāvidyā',
              kulaHi: 'स्तम्भन-विद्या अधिष्ठात्री · अष्टम महाविद्या',
              bija: 'ह्लीं (Hlīṃ)',
              mulaMantra: {
                sanskrit: 'ॐ बगलामुख्यै नमः॥',
                phonetic: 'Om Bagalamukhyai Namah'
              },
              img: '/assets/aistudio/mahavidya_08_bagalamukhi.jpg',
              attributesEn: [
                'Seizing the Adversary’s Tongue (Jihvā-Grahaṇa)',
                'Raised Golden Club (Mudgara)',
                'Pītāmbara (Turmeric-Yellow Garments & Throne)',
                'Stambhana of Hostile Speech & Restless Mind',
              ],
              attributesHi: [
                'वाम हस्त से असुर की जिह्वा का ग्रहण',
                'दक्षिण हस्त में उत्थापित स्वर्ण-मुद्गर',
                'पीताम्बर (पीत वस्त्र, पीत आभूषण एवं स्वर्ण सिंहासन)',
                'मिथ्या वाणी एवं चंचल मन का पूर्ण स्तम्भन',
              ],
              descEn:
                'Eighth Mahāvidyā: golden-robed Bagalāmukhī (Pītāmbarā) seated on her throne, seizing the tongue of the demon Madana with her left hand while raising her club (mudgara) in her right—arresting hostile speech, falsehood, and dualistic agitation.',
              descHi:
                'अष्टम महाविद्या: स्वर्ण सिंहासन पर आसीन पीतवस्त्रा बगलामुखी (पीताम्बरा), जो बाएँ हाथ से दैत्य की जिह्वा पकड़कर दाएँ हाथ में मुद्गर उठाए हुए हैं—वे शत्रुतापूर्ण वाणी, असत्य और मन के विक्षेप को तत्क्षण स्तम्भित करती हैं।',
            },
            {
              num: '09',
              nameEn: '9. Mātaṅgī (मातङ्गी · राजमातङ्गी)',
              nameHi: '९. मातङ्गी (राजमातङ्गी · उच्छिष्टचाण्डालिनी)',
              titleEn: 'Tantric Goddess of Sacred Speech (Vāk), Music, Art & Transgressive Wisdom',
              titleHi: 'तांत्रिक वाक्-देवी — संगीत, कला, विद्या एवं सीमातीत ज्ञान की अधिष्ठात्री',
              kulaEn: 'Tantric Vāk & Sangīta · 9th Mahāvidyā',
              kulaHi: 'परा-वाक् एवं संगीत-कला · नवम महाविद्या',
              bija: 'ऐं ह्रीं श्रीं नमो भगवति उच्छिष्टचाण्डालि श्रीमातङ्गेश्वरि सर्वजनवशङ्करि स्वाहा',
              mulaMantra: {
                sanskrit: 'ॐ मातङ्ग्यै नमः॥',
                phonetic: 'Om Matangyai Namah'
              },
              img: '/assets/aistudio/mahavidya_09_matangi.jpg',
              attributesEn: [
                'Emerald/Dark Complexion & Crimson-Gold Robes',
                'Vīṇā / Khaḍga, Pāśa, Aṅkuśa & Gadā',
                'Śuka (Green Parrot of Prophetic Speech)',
                'Transcendence of Conventional Purity Norms',
              ],
              attributesHi: [
                'श्यामल/मरकत-हरित आभा एवं रक्त वस्त्र',
                'वीणा / खड्ग, पाश, अंकुश एवं गदा',
                'शुक (तोता — परा-वाणी का प्रतीक)',
                'सामाजिक व बाह्य शुद्धता-अशुद्धता से परे ज्ञान',
              ],
              descEn:
                'Ninth Mahāvidyā: Mātaṅgī, the Tantric Sarasvatī of articulated speech (vaikharī vāk), music, and forbidden wisdom, enthroned in crimson robes with royal ornaments, wielding sword, noose, goad, and club (and in her Rājamātaṅgī aspect playing the vīṇā beside a parrot).',
              descHi:
                'नवम महाविद्या: वाणी, संगीत और गुह्य विद्या की तांत्रिक अधिष्ठात्री मातङ्गी, जो राजसी सिंहासन पर रक्त वस्त्र व मुकुट धारण कर विराजमान हैं तथा वाक्-सिद्धि, कला और सामाजिक सीमाओं से परे परा-प्रज्ञा प्रदान करती हैं।',
            },
            {
              num: '10',
              nameEn: '10. Kamalā / Kamalātmikā (कमला · कमलात्मिका)',
              nameHi: '१०. कमला (कमलात्मिका · तांत्रिक महालक्ष्मी)',
              titleEn: 'The Lotus Goddess of Auspiciousness, Abundance & Sovereign Grace',
              titleHi: 'पद्म-वासिनी महाविद्या — ऐश्वर्य, सौभाग्य, गज-अभिषेक एवं आध्यात्मिक पूर्णता',
              kulaEn: 'Śrī-Sampadā & Grace · 10th Mahāvidyā',
              kulaHi: 'श्री-सम्पदा एवं पूर्णत्व · दशम महाविद्या',
              bija: 'ऐं ह्रीं श्रीं क्लीं हसौः जगत्प्रसूत्यै नमः',
              mulaMantra: {
                sanskrit: 'ॐ कमलायै नमः॥',
                phonetic: 'Om Kamalayai Namah'
              },
              img: '/assets/aistudio/mahavidya_10_kamala.jpg',
              attributesEn: [
                'Seated on a Blooming Cosmic Lotus (Padmāsana)',
                'Bathed by White Elephants (Gaja-Abhiṣeka)',
                'Holding Twin Lotuses (Kamala-Yugma)',
                'Abhaya & Varada Mudrā',
              ],
              attributesHi: [
                'प्रफुल्लित सहस्रदल कमल पर आसीन',
                'श्वेत गजों द्वारा स्वर्ण-कलश से जलाभिषेक',
                'कमल-युग्म धारण किए हुए',
                'अभय एवं वरद मुद्रा',
              ],
              descEn:
                'Tenth Mahāvidyā (Kalighat school painting, 19th c.): golden-complexioned Kamalātmikā seated upon a full-blown lotus as flanking white elephants pour lustral water (abhiṣeka) from golden pitchers over her—completing the tenfold mandala in auspiciousness and material-spiritual harmony.',
              descHi:
                'दशम महाविद्या (कालीघाट चित्रकला, १९वीं शताब्दी): प्रफुल्लित कमल पर आसीन स्वर्णवर्णा कमलात्मिका, जिनका दोनों ओर स्थित श्वेत गज कलशों से अभिषेक कर रहे हैं—वे दशमहाविद्या मण्डल को परम मांगल्य और आध्यात्मिक-भौतिक ऐश्वर्य से पूर्ण करती हैं।',
            },
          ];

          return (
            <div className="mt-7 pt-5 border-t-2 border-[#3A281B]/30 space-y-5">
              <div className="rounded-xl border-2 border-[#3A281B] bg-[#1E140E] p-4 sm:p-6 text-[#F2E6D2] shadow-md space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-[#5A3922]/60">
                  <div>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#E06D53] font-bold block">
                      {t(
                        'COMPLETE 10 MAHĀVIDYĀS VISUAL ARCHIVE · ONE BY ONE (01–10)',
                        'संपूर्ण दशमहाविद्या दृश्य अभिलेखागार · क्रमानुसार एक-एक महाविद्या (०१–१०)'
                      )}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5E8CE] mt-0.5">
                      {t(
                        'The Ten Mahāvidyās (दशमहाविद्या) — Sequential Iconographic & Theological Plates',
                        'दशमहाविद्या — १ से १० तक प्रत्येक महाविद्या का क्रमबद्ध प्रतिमाशास्त्रीय एवं दार्शनिक दर्शन'
                      )}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded border border-[#D3AD55]/50 bg-[#2C1810] text-[#D3AD55] font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                    {t('10 PLATES · KĀLĪ TO KAMALĀ', '१० फलक · काली से कमला तक')}
                  </span>
                </div>

                {/* ॥ दशमहाविद्या ॥ Dossier Header & Samarpana Mantra Banner */}
                <div className="rounded-xl border-2 border-[#D3AD55]/55 bg-gradient-to-r from-[#28150B] via-[#1B0E07] to-[#28150B] p-4 sm:p-5 text-center space-y-2.5 shadow-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/45 bg-[#140904]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#D3AD55] font-bold">
                      ॥ दशमहाविद्या ॥ · The Ten Great Wisdom Goddesses
                    </span>
                  </div>
                  <div className="font-serif text-xs sm:text-sm text-[#F5E8CE]/90 tracking-wider font-medium">
                    {t(
                      'DEITY • MANIFESTATION FORM • SACRED ROOT NAME MANTRA',
                      'देवी • स्वरूप • मूल नाम मंत्र'
                    )}
                  </div>
                  <div className="pt-2.5 border-t border-[#5A3922]/60 flex flex-col items-center justify-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#E06D53] font-bold">
                      {t('SAMARPAṆA MANTRA · UNIVERSAL DEDICATION', 'समर्पण मंत्र · सार्वभौमिक समर्पण')}
                    </span>
                    <div className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#FFD700] tracking-wide">
                      ॥ ॐ दशमहाविद्याभ्यो नमः ॥
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-[#E0B86C] font-semibold">
                      Om Dashamahavidyabhyo Namah
                    </div>
                    <div className="font-serif text-xs text-[#C8B69E] italic">
                      {t(
                        'Salutations to the Ten Great Wisdom Goddesses.',
                        'दशों महान् ज्ञान-स्वरूपिणी भगवती महाविद्याओं को हमारा सादर नमन।'
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Jump Strip 01 to 10 */}
                <div className="flex flex-wrap gap-1.5">
                  {mahavidyaPlates.map((mp) => (
                    <a
                      key={mp.num}
                      href={`#mahavidya-plate-${mp.num}`}
                      className="px-2.5 py-1 rounded bg-[#261810] hover:bg-[#3A2418] border border-[#5A3922]/70 text-[#F5E8CE] font-mono text-[9.5px] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-[#D3AD55] font-bold">{mp.num}.</span>
                      <span>{t(mp.nameEn.replace(/^\d+\.\s*/, '').split(' (')[0], mp.nameHi.replace(/^[०-९]+\.\s*/, '').split(' (')[0])}</span>
                    </a>
                  ))}
                </div>

                {/* 10 Mahāvidyās Grid — Ordered 01 to 10 One by One */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {mahavidyaPlates.map((mp) => (
                    <figure
                      key={mp.num}
                      id={`mahavidya-plate-${mp.num}`}
                      className="rounded-xl border border-[#5A3922]/85 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm scroll-mt-20"
                    >
                      <div>
                        <div className="px-3.5 py-2.5 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                            {t(`MAHĀVIDYĀ ${mp.num} OF 10`, `महाविद्या ${mp.num} / १०`)}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#2C1810] border border-[#E06D53]/40 font-mono text-[8.5px] uppercase tracking-wider text-[#E06D53]">
                            {t(mp.kulaEn, mp.kulaHi)}
                          </span>
                        </div>

                        <div className="p-3.5 bg-[#140C08] flex items-center justify-center">
                          <img
                            src={mp.img}
                            alt={t(mp.nameEn, mp.nameHi)}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                          />
                        </div>

                        <figcaption className="p-4 space-y-2.5">
                          <div>
                            <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE]">
                              {t(mp.nameEn, mp.nameHi)}
                            </h4>
                            <p className="font-serif text-xs text-[#D3AD55] italic mt-0.5">
                              {t(mp.titleEn, mp.titleHi)}
                            </p>
                          </div>

                          {/* Mūla Nāma Mantra Container */}
                          <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#1A0E08] via-[#2A150B] to-[#1A0E08] border border-[#D3AD55]/45 shadow-sm space-y-1">
                            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-[#D3AD55]">
                              <span className="font-bold flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#D3AD55]" />
                                {t('Mūla Nāma Mantra', 'मूल नाम मंत्र')}
                              </span>
                              <span className="text-[#C8B69E]/70 font-serif text-[10px]">॥ मूल नाम मंत्र ॥</span>
                            </div>
                            <div className="font-serif text-sm sm:text-base font-bold text-[#FFDF80] tracking-wide">
                              {mp.mulaMantra.sanskrit}
                            </div>
                            <div className="font-mono text-xs text-[#E0B86C]/90">
                              {mp.mulaMantra.phonetic}
                            </div>
                          </div>

                          <div className="px-2.5 py-1 rounded bg-[#170E09]/90 border border-[#5A3922]/60 flex items-center justify-between gap-2">
                            <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#C8B69E]">
                              {t('Bīja Formula', 'बीज सूत्र')}
                            </span>
                            <span className="font-serif text-xs text-[#F5E8CE] font-semibold">
                              {mp.bija}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {(isEn ? mp.attributesEn : mp.attributesHi).map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>

                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(mp.descEn, mp.descHi)}
                          </p>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ====================================================================
            9 NAVADURGĀ — SEQUENTIAL ONE-BY-ONE ICONOGRAPHIC DOSSIER (01–09)
           ==================================================================== */}
        {article.slug === 'navadurga-nine-forms' && (() => {
          const navadurgaPlates = [
            {
              num: '01',
              nameEn: '1. Śailaputrī (शैलपुत्री · Daughter of the Mountain)',
              nameHi: '१. शैलपुत्री (पर्वतराज हिमालय की पुत्री · हैमवती)',
              titleEn: 'First Form of Navadurgā — Grounding, Stability & Primordial Manifestation',
              titleHi: 'नवदुर्गा का प्रथम स्वरूप — स्थिरता, दृढ़ संकल्प एवं आद्या प्राकट्य',
              dayBadgeEn: 'Day 01 · Pratipadā',
              dayBadgeHi: 'प्रथम दिवस · प्रतिपदा',
              mulaMantra: {
                sanskrit: 'ॐ देवी शैलपुत्र्यै नमः॥',
                phonetic: 'Om Devi Shailaputryai Namah'
              },
              dhyana: 'वन्दे वाञ्छितलाभाय चन्द्रार्धकृतशेखराम्। वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्॥',
              img: '/assets/aistudio/image_99dd74af.png',
              attributesEn: [
                'Vāhana: White Bull (Vṛṣabha / Nandī)',
                'Right Hand: White Lotus (Padma)',
                'Left Hand: Trident (Triśūla)',
                'Crown: Crescent Moon (Candrārdha-śekharā)',
              ],
              attributesHi: [
                'वाहन: श्वेत वृषभ (नन्दी)',
                'दक्षिण हस्त: श्वेत कमल (पद्म)',
                'वाम हस्त: त्रिशूल (शूलधरा)',
                'मुकुट: अर्धचन्द्र-शेखरा',
              ],
              descEn:
                'First of the nine Durgās in the Devī Kavaca sequence (prathamaṃ śailaputrī ca): reborn as the daughter of Himālaya after her earlier life as Satī, she rides the white bull Nandī, holding a white lotus in her right hand and a trident in her left—symbolizing spiritual grounding, unwavering resolve, and the foundation of Navarātri sādhana.',
              descHi:
                'देवी कवच के अनुसार प्रथम नवदुर्गा ("प्रथमं शैलपुत्री च"): पर्वतराज हिमालय की पुत्री रूप में अवतरित भगवती पार्वती, जो श्वेत वृषभ (नन्दी) पर आरूढ़ होकर दाएँ हाथ में श्वेत कमल और बाएँ हाथ में त्रिशूल धारण करती हैं—यह स्वरूप साधना की आधारशिला, स्थिरता और अटूट संकल्प का प्रतीक है।',
            },
            {
              num: '02',
              nameEn: '2. Brahmacāriṇī (ब्रह्मचारिणी · The Ascetic Goddess)',
              nameHi: '२. ब्रह्मचारिणी (तपस्विनी एवं ब्रह्मचर्य-निष्ठ स्वरूप)',
              titleEn: 'Second Form of Navadurgā — Severe Tapasyā, Self-Restraint & Single-Minded Devotion',
              titleHi: 'नवदुर्गा का द्वितीय स्वरूप — कठोर तपस्या, संयम एवं एकनिष्ठ साधना',
              dayBadgeEn: 'Day 02 · Dvitīyā',
              dayBadgeHi: 'द्वितीय दिवस · द्वितीया',
              mulaMantra: {
                sanskrit: 'ॐ देवी ब्रह्मचारिण्यै नमः॥',
                phonetic: 'Om Devi Brahmacharinyai Namah'
              },
              dhyana: 'दधाना करपद्माभ्यामक्षमालाकमण्डलू। देवी प्रसीदतु मयि ब्रह्मचारिण्यनुत्तमा॥',
              img: '/assets/aistudio/image_9f03925e.png',
              attributesEn: [
                'Barefoot Forest Ascetic in Pure White',
                'Right Hand: Japamālā (Akṣamālā Rosary)',
                'Left Hand: Kamaṇḍalu (Ascetic Water-Pot)',
                'No Weapons — Pure Tapo-Śakti',
              ],
              attributesHi: [
                'श्वेत वस्त्रधारिणी नंगे पाँव वन-तपस्विनी',
                'दक्षिण हस्त: अक्षमाला (जपमाला)',
                'वाम हस्त: कमण्डलु (जल-पात्र)',
                'अस्त्र-रहित — शुद्ध तपोबल स्वरूप',
              ],
              descEn:
                'Second of the Navadurgā (dvitīyaṃ brahmacāriṇī): Pārvatī undertaking severe forest austerity (tapas) to attain Śiva, walking barefoot in spotless white garments while holding a rosary (akṣamālā) in her right hand and a water pot (kamaṇḍalu) in her left—representing how initial intention matures into sustained spiritual discipline.',
              descHi:
                'द्वितीय नवदुर्गा ("द्वितीयं ब्रह्मचारिणी"): भगवान् शिव की प्राप्ति हेतु वन में कठोर तपस्या करने वाली भगवती पार्वती का तपस्विनी रूप—जो श्वेत वस्त्र धारण कर नंगे पाँव चलते हुए दाएँ हाथ में अक्षमाला (जपमाला) और बाएँ हाथ में कमण्डलु धारण करती हैं तथा अदम्य धैर्य व स्वाध्याय की प्रतीक हैं।',
            },
            {
              num: '03',
              nameEn: '3. Candraghaṇṭā (चन्द्रघण्टा · Bell-Shaped Crescent Crown)',
              nameHi: '३. चन्द्रघण्टा (मस्तक पर घण्टे के आकार के अर्धचन्द्र वाली देवी)',
              titleEn: 'Third Form of Navadurgā — Martial Readiness, Sacred Sound (Nāda) & Protection',
              titleHi: 'नवदुर्गा का तृतीय स्वरूप — शौर्य, घण्टा-नाद से आसुरी शक्तियों का दमन एवं रक्षण',
              dayBadgeEn: 'Day 03 · Tṛtīyā',
              dayBadgeHi: 'तृतीय दिवस · तृतीया',
              mulaMantra: {
                sanskrit: 'ॐ देवी चन्द्रघण्टायै नमः॥',
                phonetic: 'Om Devi Chandraghantayai Namah'
              },
              dhyana: 'पिण्डजप्रवरारूढा चण्डकोपास्त्रकैर्युता। प्रसादं तनुते मह्यं चन्द्रघण्टेति विश्रुता॥',
              img: '/assets/aistudio/image_a632b449.png',
              attributesEn: [
                'Vāhana: Tiger (Śārdūla / Vyāghra)',
                'Multi-Armed Golden Warrior Form',
                'Gadā (Mace), Bow, Arrow, Lotus, Kamaṇḍalu & Rosary',
                'Bell-Crescent Crown Driving Away Hostile Forces',
              ],
              attributesHi: [
                'वाहन: बाघ (व्याघ्र / शार्दूल)',
                'स्वर्णिम आभा वाली बहुभुजी योद्धा देवी',
                'गदा, धनुष, बाण, कमल, कमण्डलु, कलश एवं अक्षमाला',
                'घण्टा-नाद से नकारात्मक शक्तियों का विनाश',
              ],
              descEn:
                'Third of the Navadurgā (tṛtīyaṃ candraghaṇṭeti): mounted on a tiger in radiant golden-saffron attire with multiple arms bearing mace (gadā), bow, arrow, lotus, rosary, and water pots—marking the transition from quiet asceticism (Brahmacāriṇī) into active, vigilant protection whose bell-sound (ghaṇṭā-nāda) dispels demonic forces.',
              descHi:
                'तृतीय नवदुर्गा ("तृतीयं चन्द्रघण्टेति"): व्याघ्र पर आरूढ़, स्वर्णिम-केसरिया आभा से युक्त बहुभुजी योद्धा स्वरूप—जो गदा, धनुष, बाण, कमल, कलश, कमण्डलु और जपमाला धारण करती हैं तथा शांत तपस्या से सक्रिय धर्म-रक्षा की ओर संक्रमण को दर्शाती हैं।',
            },
            {
              num: '04',
              nameEn: '4. Kūṣmāṇḍā (कूष्माण्डा · Progenitrix of the Cosmic Egg)',
              nameHi: '४. कूष्माण्डा (मंद मुस्कान से ब्रह्माण्ड की सृष्टि करने वाली आद्या शक्ति)',
              titleEn: 'Fourth Form of Navadurgā — Solar Radiance, Prāṇic Warmth (Ūṣmā) & Brahmāṇḍa Creation',
              titleHi: 'नवदुर्गा का चतुर्थ स्वरूप — सौर प्रभामण्डल, प्राण-ऊष्मा एवं ब्रह्माण्ड-सृजन',
              dayBadgeEn: 'Day 04 · Caturthī',
              dayBadgeHi: 'चतुर्थ दिवस · चतुर्थी',
              mulaMantra: {
                sanskrit: 'ॐ देवी कूष्माण्डायै नमः॥',
                phonetic: 'Om Devi Kushmandayai Namah'
              },
              dhyana: 'सुरासम्पूर्णकलशं रुधिराप्लुतमेव च। दधाना हस्तपद्माभ्यां कूष्माण्डा शुभदास्तु मे॥',
              img: '/assets/aistudio/image_214d9252.png',
              attributesEn: [
                'Vāhana: Tiger / Lion',
                'Manifesting the Luminous Cosmic Egg (Brahmāṇḍa)',
                'Triśūla, Lotus & Amṛta-Kalaśa (Pot of Nectar)',
                'Dwelling Within the Innermost Core of Sūrya-Maṇḍala',
              ],
              attributesHi: [
                'वाहन: बाघ / सिंह',
                'तेजोमय ब्रह्माण्ड-गोलक (अण्ड) का प्राकट्य',
                'त्रिशूल, कमल एवं अमृत-कलश',
                'सूर्य-मण्डल के अंतर्तम तेज में निवास करने वाली शक्ति',
              ],
              descEn:
                'Fourth of the Navadurgā (kūṣmāṇḍeti caturthakam): seated upon her tiger mount with a gentle smile that illuminates the spherical cosmic egg (Brahmāṇḍa) floating above her hand, while holding the trident, lotus, and nectar vessel—celebrating the Goddess as the solar source of cosmic warmth (ūṣmā) and universal creation.',
              descHi:
                'चतुर्थ नवदुर्गा ("कूष्माण्डेति चतुर्थकम्"): व्याघ्र पर आरूढ़, अपनी मंद मुस्कान और संकल्प से तेजोमय ब्रह्माण्ड (अण्ड) को प्रकट करने वाली देवी, जो त्रिशूल, कमल और अमृत-कलश धारण करती हैं तथा सृष्टि की प्राण-ऊष्मा व सौर तेज की मूल स्रोत हैं।',
            },
            {
              num: '05',
              nameEn: '5. Skandamātā (स्कन्दमाता · Mother of Skanda / Kārttikeya)',
              nameHi: '५. स्कन्दमाता (देवसेनापति भगवान् स्कन्द/कार्तिकेय की जननी)',
              titleEn: 'Fifth Form of Navadurgā — Maternal Grace, Nurturing Wisdom & Divine Protection',
              titleHi: 'नवदुर्गा का पञ्चम स्वरूप — वात्सल्यमयी मातृत्व, ज्ञान एवं धर्म-रक्षा',
              dayBadgeEn: 'Day 05 · Pañcamī',
              dayBadgeHi: 'पञ्चम दिवस · पंचमी',
              mulaMantra: {
                sanskrit: 'ॐ देवी स्कन्दमातायै नमः॥',
                phonetic: 'Om Devi Skandamatayai Namah'
              },
              dhyana: 'सिंहासनगता नित्यं पद्माञ्चितकरद्वया। शुभदास्तु सदा देवी स्कन्दमाता यशस्विनी॥',
              img: '/assets/aistudio/image_ec77b51b.png',
              attributesEn: [
                'Vāhana: Mighty Lion (Siṃhavāhinī)',
                'Child Skanda (Kārttikeya) Seated on Her Lap',
                'Holding Śakti Spear & Pink Lotus (Padma)',
                'Union of Maternal Affection & Martial Sovereignty',
              ],
              attributesHi: [
                'वाहन: सिंह (सिंहवाहिनी)',
                'गोद में बालक स्कन्द (कुमार कार्तिकेय) विराजमान',
                'शक्ति-भाल (वेल) एवं पद्म धारिणी',
                'मातृ-वात्सल्य एवं देवसेना के तेज का संगम',
              ],
              descEn:
                'Fifth of the Navadurgā (pañcamaṃ skandamāteti): seated royally upon a lion with young Skanda (Kārttikeya, commander of the celestial hosts who vanquished Tārakāsura) cradled in her lap while wielding the spear and lotus—revealing that the supreme Goddess acts simultaneously as tender Mother and sovereign protector of cosmic order.',
              descHi:
                'पञ्चम नवदुर्गा ("पञ्चमं स्कन्दमातेति"): सिंह पर विराजमान भगवती का वात्सल्यमयी मातृ-स्वरूप, जिनकी गोद में देवसेनापति बालक स्कन्द (कार्तिकेय) आसीन हैं और हाथों में शक्ति-भाला व कमल सुशोभित हैं—यह स्वरूप मातृत्व की करुणा और धर्म-रक्षा के तेज का अद्भुत समन्वय है।',
            },
            {
              num: '06',
              nameEn: '6. Kātyāyanī (कात्यायनी · Manifested in Sage Kātyāyana’s Hermitage)',
              nameHi: '६. कात्यायनी (महर्षि कात्यायन के आश्रम में देव-तेज से प्रकट योद्धा स्वरूप)',
              titleEn: 'Sixth Form of Navadurgā — Fierce Defender of Dharma & Slayer of Mahiṣāsura',
              titleHi: 'नवदुर्गा का षष्ठ स्वरूप — महिषासुरमर्दिनी, धर्म-रक्षिका एवं अमोघ योद्धा शक्ति',
              dayBadgeEn: 'Day 06 · Ṣaṣṭhī',
              dayBadgeHi: 'षष्ठ दिवस · षष्ठी',
              mulaMantra: {
                sanskrit: 'ॐ देवी कात्यायन्यै नमः॥',
                phonetic: 'Om Devi Katyayanyai Namah'
              },
              dhyana: 'चन्द्रहासोज्वलकरा शार्दूलवरवाहना। कात्यायनी शुभं दद्याद्देवी दानवघातिनी॥',
              img: '/assets/aistudio/image_b10c7bff.png',
              attributesEn: [
                'Vāhana: Regal Lion (Śārdūlavaravāhanā)',
                'Candrahāsa (Gleaming Curved Sword)',
                'Triśūla (Trident), Spear & Lotus',
                'Vedic (Taittirīya Āraṇyaka) & Purāṇic Warrior Sovereign',
              ],
              attributesHi: [
                'वाहन: सिंह (शार्दूलवरवाहना)',
                'चन्द्रहास (उज्ज्वल खड्ग)',
                'त्रिशूल, भाला एवं कमल पुष्प',
                'दानवघातिनी एवं धर्म-संस्थापिका योद्धा देवी',
              ],
              descEn:
                'Sixth of the Navadurgā (ṣaṣṭhaṃ kātyāyanīti ca): born from the combined effulgence (tejas) of the gods in the hermitage of Sage Kātyāyana to destroy Mahiṣāsura, she rides a lion and wields the gleaming curved sword (Candrahāsa), trident, spear, and lotus—embodying righteous courage and the decisive removal of obstacles.',
              descHi:
                'षष्ठ नवदुर्गा ("षष्ठं कात्यायनीति च"): महर्षि कात्यायन के आश्रम में देवताओं के सम्मिलित तेज से महिषासुर के वध हेतु प्रकट हुईं सिंहवाहिनी योद्धा देवी—जो उज्ज्वल चन्द्रहास खड्ग, त्रिशूल, भाला और कमल धारण करती हैं तथा साहस, विजय और बाधा-निवारण की अधिष्ठात्री हैं।',
            },
            {
              num: '07',
              nameEn: '7. Kālarātrī (कालरात्रि · शुभंकरी · The Fierce Night of Time)',
              nameHi: '७. कालरात्रि (शुभंकरी · महाकाल-रात्रि एवं भय-विनाशिनी उग्र स्वरूप)',
              titleEn: 'Seventh Form of Navadurgā — Destroyer of Fear, Darkness & Demonic Forces',
              titleHi: 'नवदुर्गा का सप्तम स्वरूप — अंधकार, भय और आसुरी शक्तियों का संहार करने वाली शुभंकरी',
              dayBadgeEn: 'Day 07 · Mahāsaptamī',
              dayBadgeHi: 'सप्तम दिवस · महासप्तमी',
              mulaMantra: {
                sanskrit: 'ॐ देवी कालरात्र्यै नमः॥',
                phonetic: 'Om Devi Kalaratryai Namah'
              },
              dhyana: 'एकवेणी जपाकर्णपूरा नग्ना खरास्थिता। लम्बोष्ठी कर्णिकाकर्णी तैलाभ्यक्तशरीरिणी॥',
              img: '/assets/aistudio/image_996e55e6.png',
              attributesEn: [
                'Vāhana: Donkey (Gardabha / Khara-sthitā)',
                'Dark Night Complexion & Unbound Hair Amidst Lightning',
                'Curved Scimitar (Khaḍga), Iron Cleaver (Vajra/Kāṇṭā) & Triśūla',
                'Śubhaṅkarī — Terrifying to Evil, Auspicious to Devotees',
              ],
              attributesHi: [
                'वाहन: गर्दभ (खरास्थिता)',
                'गहन रात्रि-समान श्याम वर्ण, बिखरे केश एवं विद्युत-प्रभा',
                'वक्र खड्ग, लौह-अस्त्र एवं त्रिशूल धारिणी',
                'शुभंकरी — दुष्टों के लिए भयंकर, भक्तों के लिए परम कल्याणकारी',
              ],
              descEn:
                'Seventh of the Navadurgā (saptamaṃ kālarātrīti): the fiercest form in the Navarātri cycle, dark as the night of cosmic dissolution with unbound locks and lightning-flung storm clouds, mounted upon a donkey (gardabha) and wielding a curved scimitar, iron weapon, and trident—confronting terror and darkness directly while blessing devotees as Śubhaṅkarī ("Doer of Good").',
              descHi:
                'सप्तम नवदुर्गा ("सप्तमं कालरात्रीति"): नवदुर्गा चक्र का सर्वाधिक उग्र स्वरूप—प्रलय-रात्रि के समान गहन श्याम वर्ण, बिखरे केश और कड़कती बिजली के मध्य गर्दभ (गधे) पर आरूढ़ होकर खड्ग, लौह-अस्त्र व त्रिशूल धारण करने वाली देवी, जो अंधकार और भय का नाश कर भक्तों का कल्याण करने के कारण "शुभंकरी" कहलाती हैं।',
            },
            {
              num: '08',
              nameEn: '8. Mahāgaurī (महागौरी · श्वेताम्बरधरा · The Great Radiant One)',
              nameHi: '८. महागौरी (श्वेताम्बरधरा · हिम और शंख के समान उज्ज्वल एवं प्रशांत स्वरूप)',
              titleEn: 'Eighth Form of Navadurgā — Purity, Luminous Grace & Post-Austerity Renewal',
              titleHi: 'नवदुर्गा का अष्टम स्वरूप — पवित्रता, निर्मल आभा, प्रशांति एवं अमोघ कृपा',
              dayBadgeEn: 'Day 08 · Mahāṣṭamī',
              dayBadgeHi: 'अष्टम दिवस · महाष्टमी',
              mulaMantra: {
                sanskrit: 'ॐ देवी महागौर्यै नमः॥',
                phonetic: 'Om Devi Mahagauryai Namah'
              },
              dhyana: 'श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोददा॥',
              img: '/assets/aistudio/image_6bffd444.png',
              attributesEn: [
                'Vāhana: Luminous White Bull (Śveta Vṛṣabha)',
                'Pure White Garments (Śvetāmbaradharā) & Serene Aura',
                'Triśūla, White Lotus, Japamālā & Abhaya Mudrā',
                'Complementary Counterpart to Fierce Kālarātrī (Day 7)',
              ],
              attributesHi: [
                'वाहन: श्वेत वृषभ (बैल)',
                'श्वेत वस्त्रधारिणी (श्वेताम्बरधरा) एवं परम शांत आभा',
                'त्रिशूल, श्वेत कमल, जपमाला एवं अभय मुद्रा',
                'सप्तमी की उग्र कालरात्रि के पश्चात् अष्टमी की निर्मल ज्योति',
              ],
              descEn:
                'Eighth of the Navadurgā (mahāgaurīti cāṣṭamam): bathed in the celestial waters of Gaṅgā by Śiva after her long forest tapasyā, she shines with a snow-white complexion and pure white garments upon a white bull, holding trident, white lotus, rosary, and abhaya-mudrā—forming a serene, purifying contrast immediately following the dark storm of Kālarātrī.',
              descHi:
                'अष्टम नवदुर्गा ("महागौरीति चाष्टमम्"): कठोर तपस्या के पश्चात् भगवान् शिव द्वारा गंगाजल से अभिषिक्त किए जाने पर शंख, चन्द्र और कुन्द पुष्प के समान उज्ज्वल गौर वर्ण धारण करने वाली देवी—जो श्वेत वृषभ पर आरूढ़ होकर त्रिशूल, श्वेत कमल, जपमाला और अभय मुद्रा धारण करती हैं तथा कालरात्रि के उग्र तेज के बाद परम शांति व पवित्रता स्थापित करती हैं।',
            },
            {
              num: '09',
              nameEn: '9. Siddhidātrī (सिद्धिदात्री · Bestower of the Eight Siddhis)',
              nameHi: '९. सिद्धिदात्री (अष्ट-सिद्धियों एवं साधना की पूर्णता को प्रदान करने वाली देवी)',
              titleEn: 'Ninth Form of Navadurgā — Spiritual Fulfillment, Aṣṭa-Siddhi & Sovereign Completion',
              titleHi: 'नवदुर्गा का नवम स्वरूप — अष्ट-सिद्धि दात्री, साधना की पूर्णता एवं परम साक्षात्कार',
              dayBadgeEn: 'Day 09 · Mahānavamī',
              dayBadgeHi: 'नवम दिवस · महानवमी',
              mulaMantra: {
                sanskrit: 'ॐ देवी सिद्धिदात्र्यै नमः॥',
                phonetic: 'Om Devi Siddhidatryai Namah'
              },
              dhyana: 'सिद्धगन्धर्वयक्षाद्यैरसुरैरमरैरपि। सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी॥',
              img: '/assets/aistudio/image_96818680.png',
              attributesEn: [
                'Seated on a Full-Bloomed White Lotus (Padmāsanā)',
                'Four Emblematic Arms: Cakra (Discus) & Gadā (Mace)',
                'Śaṅkha (Conch) & Padma (Lotus)',
                'Bestower of Aṣṭa-Siddhis & Culmination of Navarātri',
              ],
              attributesHi: [
                'आसन: पूर्ण विकसित श्वेत कमल (पद्मासना)',
                'चतुर्भुजा स्वरूप: चक्र एवं गदा',
                'शंख एवं कमल पुष्प',
                'अणिमादि अष्ट-सिद्धियों एवं नवरात्रि साधना की पूर्णता की दात्री',
              ],
              descEn:
                'Ninth and culminating form of the Navadurgā (navamaṃ siddhidātrī ca): seated in serene majesty upon a blooming white lotus in a forest lake, holding the discus (cakra), mace (gadā), conch (śaṅkha), and lotus (padma)—venerated by siddhas, gandharvas, yakṣas, gods, and sages as the bestower of the eight classical perfections (aṣṭa-siddhis) and the fulfillment of the nine-night liturgical journey.',
              descHi:
                'नवम एवं अंतिम नवदुर्गा ("नवमं सिद्धिदात्री च"): शांत सरोवर में पूर्ण विकसित श्वेत कमल पर विराजमान चतुर्भुजा देवी, जो अपने चार हाथों में चक्र, गदा, शंख और कमल धारण करती हैं—सिद्ध, गन्धर्व, यक्ष, देव और ऋषियों द्वारा सेवित यह स्वरूप अणिमादि अष्ट-सिद्धियों तथा नवरात्रि की नौ-दिवसीय आध्यात्मिक यात्रा की पूर्णता का प्रतीक है।',
            },
          ];

          return (
            <div className="mt-7 pt-5 border-t border-[#3A281B]/30 space-y-5">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#1E130D] border-2 border-[#D3AD55]/60 text-[#F5E8CE] space-y-5 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5A3922]/70 pb-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D3AD55] font-bold block">
                      {t(
                        'SACRED ICONOGRAPHIC ARCHIVE · 9 NAVADURGĀ ONE BY ONE (01–09)',
                        'पवित्र प्रतिमाशास्त्रीय अभिलेखागार · ९ नवदुर्गा क्रमशः एक-एक कर (०१–०९)'
                      )}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#F5E8CE] mt-0.5">
                      {t(
                        'The Nine Forms of Durgā (नवदुर्गा — 1. Śailaputrī to 9. Siddhidātrī) — With Contextual Theology & Iconography',
                        'नवदुर्गा के नौ स्वरूप (१. शैलपुत्री से ९. सिद्धिदात्री) — शास्त्रीय संदर्भ एवं प्रतिमाशास्त्र सहित'
                      )}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded border border-[#D3AD55]/50 bg-[#2C1810] text-[#D3AD55] font-mono text-[9px] font-bold uppercase tracking-[0.16em]">
                    {t('9 PLATES · ŚAILAPUTRĪ TO SIDDHIDĀTRĪ', '९ फलक · शैलपुत्री से सिद्धिदात्री तक')}
                  </span>
                </div>

                {/* ॥ श्री नवदुर्गाभ्यो नमः ॥ Dossier Header & Samarpana Mantra Banner */}
                <div className="rounded-xl border-2 border-[#D3AD55]/55 bg-gradient-to-r from-[#28150B] via-[#1B0E07] to-[#28150B] p-4 sm:p-5 text-center space-y-2.5 shadow-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3AD55]/45 bg-[#140904]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#D3AD55] font-bold">
                      ॥ श्री नवदुर्गाभ्यो नमः ॥ · Nine Divine Manifestations of Maa Durga
                    </span>
                  </div>
                  <div className="font-serif text-xs sm:text-sm text-[#F5E8CE]/90 tracking-wider font-medium">
                    {t(
                      'DEITY • MANIFESTATION FORM • SACRED ROOT NAME MANTRA',
                      'देवी • स्वरूप • मूल नाम मंत्र'
                    )}
                  </div>
                  <div className="pt-2.5 border-t border-[#5A3922]/60 flex flex-col items-center justify-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#E06D53] font-bold">
                      {t('NAVADURGĀ SAMARPAṆA MANTRA · UNIVERSAL INVOCATION', '॥ नवदुर्गा समर्पण मंत्र ॥ · सार्वभौमिक समर्पण')}
                    </span>
                    <div className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#FFD700] tracking-wide">
                      ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-[#E0B86C] font-semibold">
                      Om Aim Hreem Kleem Chamundayai Vichche
                    </div>
                    <div className="font-serif text-xs text-[#C8B69E] italic">
                      {t(
                        'A widely used Navadurga and Chamunda invocation.',
                        'व्यापक रूप से प्रयुक्त नवदुर्गा एवं चामुण्डा समर्पण मंत्र।'
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Jump Strip 01 to 09 */}
                <div className="flex flex-wrap gap-1.5">
                  {navadurgaPlates.map((np) => (
                    <a
                      key={np.num}
                      href={`#navadurga-plate-${np.num}`}
                      className="px-2.5 py-1 rounded bg-[#261810] hover:bg-[#3A2418] border border-[#5A3922]/70 text-[#F5E8CE] font-mono text-[9.5px] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-[#D3AD55] font-bold">{np.num}.</span>
                      <span>
                        {t(
                          np.nameEn.replace(/^\d+\.\s*/, '').split(' (')[0],
                          np.nameHi.replace(/^[०-९]+\.\s*/, '').split(' (')[0]
                        )}
                      </span>
                    </a>
                  ))}
                </div>

                {/* 9 Navadurgā Grid — Ordered 01 to 09 One by One */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {navadurgaPlates.map((np, npIdx) => (
                    <figure
                      key={np.num}
                      id={`navadurga-plate-${np.num}`}
                      className="rounded-xl border border-[#5A3922]/85 bg-[#261810] overflow-hidden flex flex-col justify-between shadow-sm scroll-mt-20"
                    >
                      <div>
                        <div className="px-3.5 py-2.5 bg-[#170E09] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                            {t(`NAVADURGĀ ${np.num} OF 09`, `नवदुर्गा ${np.num} / ०९`)}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#2C1810] border border-[#E06D53]/40 font-mono text-[8.5px] uppercase tracking-wider text-[#E06D53]">
                            {t(np.dayBadgeEn, np.dayBadgeHi)}
                          </span>
                        </div>

                        <div className="p-3 bg-[#140C08] flex items-center justify-center">
                          <img
                            src={np.img}
                            alt={t(np.nameEn, np.nameHi)}
                            loading="lazy"
                            className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                          />
                        </div>

                        <figcaption className="p-4 space-y-2.5">
                          <div>
                            <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5E8CE]">
                              {t(np.nameEn, np.nameHi)}
                            </h4>
                            <p className="font-serif text-xs text-[#D3AD55] italic mt-0.5">
                              {t(np.titleEn, np.titleHi)}
                            </p>
                          </div>

                          {/* Mūla Nāma Mantra Container */}
                          <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#1A0E08] via-[#2A150B] to-[#1A0E08] border border-[#D3AD55]/45 shadow-sm space-y-1">
                            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-[#D3AD55]">
                              <span className="font-bold flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#D3AD55]" />
                                {t('Mūla Nāma Mantra', 'मूल नाम मंत्र')}
                              </span>
                              <span className="text-[#C8B69E]/70 font-serif text-[10px]">॥ मूल नाम मंत्र ॥</span>
                            </div>
                            <div className="font-serif text-sm sm:text-base font-bold text-[#FFDF80] tracking-wide">
                              {np.mulaMantra.sanskrit}
                            </div>
                            <div className="font-mono text-xs text-[#E0B86C]/90">
                              {np.mulaMantra.phonetic}
                            </div>
                          </div>

                          <div className="px-2.5 py-1.5 rounded bg-[#170E09]/90 border border-[#5A3922]/60 space-y-0.5">
                            <span className="block font-mono text-[8px] uppercase tracking-wider text-[#C8B69E]">
                              {t('Classical Dhyāna Verse', 'शास्त्रीय ध्यान-मन्त्र')}
                            </span>
                            <span className="block font-serif text-[11.5px] text-[#F5E8CE] leading-snug">
                              {np.dhyana}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {(isEn ? np.attributesEn : np.attributesHi).map((attr, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-[#170E09] border border-[#5A3922]/70 font-mono text-[8.5px] text-[#D3AD55]"
                              >
                                {attr}
                              </span>
                            ))}
                          </div>

                          <p className="font-serif text-xs sm:text-[13px] text-[#E2D3BC] leading-relaxed">
                            {t(np.descEn, np.descHi)}
                          </p>

                          <div className="pt-1">
                            <a
                              href={`#navadurga-section-${npIdx + 1}`}
                              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#D3AD55] hover:text-[#F5E8CE] transition-colors"
                            >
                              <span>
                                {t(
                                  `Read Full Profile (Section ${26 + npIdx}) →`,
                                  `पूर्ण शास्त्रीय विवरण पढ़ें (अनुभाग ${26 + npIdx}) →`
                                )}
                              </span>
                            </a>
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* ====================================================================
            TITHI NITYĀ DEVĪ (SEAL 10): 17-PLATE MOON-PHASE ARCHIVE GALLERY
            Ordered from No Moon / 1st Crescent (1. Kāmeśvarī) to Full Moon (16. Mahānityā)
           ==================================================================== */}
        {article.slug === 'tithi-nitya-devi-shodasha-archive' && (
          <div className="mt-7 pt-5 border-t border-[#3A281B]/30 space-y-6">
            {/* Master Triangle Mandala Plate */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#1A060B] border-2 border-[#D3AD55]/65 text-[#F5E8CE] space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D3AD55]/35 pb-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDE047] font-bold block">
                    {t(
                      'PLATE 00 · MASTER KĀMAKALĀ TRIANGLE MANDALA (॥ तिथि नित्या देवि ॥)',
                      'फलक ०० · मूल काम-कला त्रिकोण मण्डल (॥ तिथि नित्या देवि ॥)'
                    )}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mt-0.5">
                    {t(
                      'The 15 Tithi Nityās Along the Three Sides of the Triangle & 16th Mahānityā Before the Full Moon',
                      'त्रिकोण की तीनों भुजाओं पर १५ तिथि नित्याएँ एवं केंद्र में पूर्ण चन्द्रमा के सम्मुख १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी'
                    )}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded bg-[#2B0912] border border-[#F43F5E]/50 font-mono text-[9.5px] text-[#FDA4AF] font-bold uppercase">
                  {t('17 Consecrated Plates · Moon-Phase Order', '१७ मूल चित्र · अमावस्या से पूर्णिमा क्रम')}
                </span>
              </div>

              <div className="p-3 bg-[#0B0204] rounded-xl border border-[#D3AD55]/35 flex justify-center">
                <img
                  src={TITHI_NITYA_MASTER_MANDALA_IMAGE}
                  alt="Tithi Nitya Devi Master Triangle Chart"
                  className="w-full max-w-3xl max-h-[680px] object-contain rounded-lg"
                />
              </div>

              {/* 16 Individual Tithi Nitya Plates Ordered Moon-Phase Wise (01 Pratipada -> 16 Purnima) */}
              <div className="pt-4 border-t border-[#D3AD55]/30 space-y-4">
                <div className="text-center max-w-2xl mx-auto">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FDE047] font-bold block">
                    {t(
                      'MOON-PHASE WISE PROGRESSION: NO MOON THRESHOLD → 1ST WAXING CRESCENT (01) → HALF MOON (08) → FULL MOON (16)',
                      'चन्द्र-कला क्रमानुसार दर्शन: अमावस्या/प्रतिपदा (०१) → अष्टमी अर्धचन्द्र (०८) → पूर्णिमा महानित्या (१६)'
                    )}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                    {t(
                      'All 16 Tithi Nityā Devīs in Ascending Lunar Illumination Order (01 to 16)',
                      'अमावस्या से पूर्णिमा तक बढ़ती हुई चन्द्र-कलाओं के क्रम में १६ तिथि नित्या देवियाँ (०१ से १६)'
                    )}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex >= 1).map(nitya => (
                    <figure
                      key={nitya.id}
                      className="rounded-xl border border-[#D3AD55]/55 bg-[#21080F] overflow-hidden flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="px-3.5 py-2.5 bg-[#130408] border-b border-[#D3AD55]/35 flex items-center justify-between gap-2">
                          <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDE047] font-bold">
                            {nitya.code}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#2D0A13] border border-[#F43F5E]/45 font-mono text-[9px] text-[#FDA4AF] font-bold">
                            {nitya.illuminationPercent}% {t('Moon', 'चन्द्र-कला')}
                          </span>
                        </div>

                        <div className="p-3 bg-[#090204] flex items-center justify-center">
                          <img
                            src={nitya.imagePath}
                            alt={t(nitya.nameEn, nitya.nameHi)}
                            loading="lazy"
                            className="w-full h-80 object-contain rounded border border-[#D3AD55]/30"
                          />
                        </div>

                        <figcaption className="p-4 space-y-2.5">
                          <div>
                            <div className="font-serif text-lg font-bold text-[#FDE047]">
                              {nitya.sanskritTitle} · {t(nitya.nameEn, nitya.nameHi)}
                            </div>
                            <div className="font-mono text-[10px] text-[#FDA4AF] mt-0.5">
                              {t(nitya.moonPhaseStageEn, nitya.moonPhaseStageHi)}
                            </div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-[#120407] border border-[#FDE047]/40 space-y-0.5">
                            <div className="flex items-center justify-between font-mono text-[8.5px] uppercase text-[#FDE047]">
                              <span>{t('Mūla Mantra', 'मूल मंत्र')}</span>
                              <span>{nitya.panchadashiSyllableHi}</span>
                            </div>
                            <div className="font-serif text-xs sm:text-sm font-bold text-[#FEF08A]">
                              {nitya.mulaMantraHi}
                            </div>
                          </div>

                          <p className="font-serif text-xs text-[#F5E8CE]/90 leading-relaxed">
                            <strong className="text-[#FDE047]">{t('Iconography:', 'प्रतिमाशास्त्र:')}</strong>{' '}
                            {t(nitya.iconographyEn, nitya.iconographyHi)}
                          </p>

                          <p className="font-serif text-xs text-[#FECDD3]/85 leading-relaxed">
                            <strong className="text-[#FDA4AF]">{t('Significance:', 'तत्त्वज्ञान:')}</strong>{' '}
                            {t(nitya.significanceEn, nitya.significanceHi)}
                          </p>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            TOP MAIN TABLES (Rendered at the top of the monograph)
           ==================================================================== */}
        {customTables.length > 0 && (
          <div className="mt-7 pt-5 border-t border-[#3A281B]/25 space-y-6">
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
                      {t(`TABLE 0${tIdx + 1}`, `तालिका ०${tIdx + 1}`)}
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
          </div>
        )}

        {/* ====================================================================
            SCHOLARLY ARTICLE FORMAT (Executive Abstract, Sections & Findings)
           ==================================================================== */}
        {/* Executive Research Abstract */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#E6D6BC]/70 border border-[#5A3922]/25">
          <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#5A3922] font-bold mb-1.5">
            {t('EXECUTIVE RESEARCH ABSTRACT', 'कार्यकारी शोध सारांश')}
          </span>
          <p className="text-sm sm:text-base md:text-[16.5px] font-serif text-[#241912] leading-relaxed">
            {t(article.summaryEn, article.summaryHi)}
          </p>
        </div>

        {/* Deep-Dive Scholarly Article Sections */}
        <div className="mt-7 space-y-6">
          {article.sections.map((sec, idx) => {
            const paragraphs = parseArticleParagraphs(t(sec.bodyEn, sec.bodyHi));

            // Map inline Mahāvidyā images one-by-one when rendering Part II (A/B/C/D) sections of dasa-mahavidya-ten-wisdom-goddesses
            const sectionMahavidyaImages: Record<number, { num: string; img: string; labelEn: string; labelHi: string }[]> =
              article.slug === 'dasa-mahavidya-ten-wisdom-goddesses'
                ? {
                    2: [
                      { num: '01', img: '/assets/aistudio/image_6cc0fa29.png', labelEn: '1. Kālī (दक्षिणा काली)', labelHi: '१. काली (दक्षिणा काली)' },
                      { num: '02', img: '/assets/aistudio/mahavidya_02_tara.jpg', labelEn: '2. Tārā (उग्रतारा)', labelHi: '२. तारा (उग्रतारा)' },
                    ],
                    3: [
                      { num: '03', img: '/assets/aistudio/image_a583fd6e.png', labelEn: '3. Tripurasundarī / Ṣoḍaśī (त्रिपुरसुन्दरी)', labelHi: '३. त्रिपुरसुन्दरी / षोडशी' },
                      { num: '04', img: '/assets/aistudio/mahavidya_04_bhuvaneshvari.jpg', labelEn: '4. Bhuvaneśvarī (भुवनेश्वरी)', labelHi: '४. भुवनेश्वरी' },
                      { num: '05', img: '/assets/aistudio/mahavidya_05_bhairavi.jpg', labelEn: '5. Tripurā Bhairavī (त्रिपुरभैरवी)', labelHi: '५. त्रिपुरभैरवी' },
                    ],
                    4: [
                      { num: '06', img: '/assets/aistudio/mahavidya_06_chhinnamasta.jpg', labelEn: '6. Chhinnamastā (छिन्नमस्ता)', labelHi: '६. छिन्नमस्ता' },
                      { num: '07', img: '/assets/aistudio/mahavidya_07_dhumavati.jpg', labelEn: '7. Dhūmāvatī (धूमावती)', labelHi: '७. धूमावती' },
                      { num: '08', img: '/assets/aistudio/mahavidya_08_bagalamukhi.jpg', labelEn: '8. Bagalāmukhī (बगलामुखी)', labelHi: '८. बगलामुखी' },
                    ],
                    5: [
                      { num: '09', img: '/assets/aistudio/mahavidya_09_matangi.jpg', labelEn: '9. Mātaṅgī (मातङ्गी)', labelHi: '९. मातङ्गी' },
                      { num: '10', img: '/assets/aistudio/mahavidya_10_kamala.jpg', labelEn: '10. Kamalā / Kamalātmikā (कमला)', labelHi: '१०. कमला (कमलात्मिका)' },
                    ],
                  }
                : {};

            // Map each of the 9 Navadurgā images directly to its dedicated profile section (Part VIII: Sections 26–34, indices 1–9)
            const sectionNavadurgaImageMap: Record<
              number,
              {
                num: string;
                img: string;
                labelEn: string;
                labelHi: string;
                dayEn: string;
                dayHi: string;
                vahanaEn: string;
                vahanaHi: string;
                dhyana: string;
              }
            > =
              article.slug === 'navadurga-nine-forms'
                ? {
                    1: {
                      num: '01',
                      img: '/assets/aistudio/image_99dd74af.png',
                      labelEn: '1. Śailaputrī (शैलपुत्री)',
                      labelHi: '१. शैलपुत्री (पर्वतराज हिमालय की पुत्री)',
                      dayEn: '1st Night of Navarātri (Pratipadā)',
                      dayHi: 'नवरात्रि प्रथम रात्रि (प्रतिपदा)',
                      vahanaEn: 'White Bull (Vṛṣabha) · Triśūla & White Lotus',
                      vahanaHi: 'वाहन: श्वेत वृषभ · त्रिशूल एवं श्वेत पद्म',
                      dhyana: 'वृषारूढां शूलधरां शैलपुत्रीं यशस्विनीम्',
                    },
                    2: {
                      num: '02',
                      img: '/assets/aistudio/image_9f03925e.png',
                      labelEn: '2. Brahmacāriṇī (ब्रह्मचारिणी)',
                      labelHi: '२. ब्रह्मचारिणी (तपस्विनी स्वरूप)',
                      dayEn: '2nd Night of Navarātri (Dvitīyā)',
                      dayHi: 'नवरात्रि द्वितीय रात्रि (द्वितीया)',
                      vahanaEn: 'Walking Barefoot in White · Akṣamālā & Kamaṇḍalu',
                      vahanaHi: 'नंगे पाँव श्वेत-वस्त्रा तपस्विनी · अक्षमाला एवं कमण्डलु',
                      dhyana: 'दधाना करपद्माभ्यामक्षमालाकमण्डलू',
                    },
                    3: {
                      num: '03',
                      img: '/assets/aistudio/image_a632b449.png',
                      labelEn: '3. Candraghaṇṭā (चन्द्रघण्टा)',
                      labelHi: '३. चन्द्रघण्टा (घण्टा-आकार अर्धचन्द्र धारिणी)',
                      dayEn: '3rd Night of Navarātri (Tṛtīyā)',
                      dayHi: 'नवरात्रि तृतीय रात्रि (तृतीया)',
                      vahanaEn: 'Tiger Mount · Gadā, Bow, Arrow, Lotus, Kamaṇḍalu & Rosary',
                      vahanaHi: 'वाहन: बाघ · गदा, धनुष, बाण, कमल, कमण्डलु एवं माला',
                      dhyana: 'पिण्डजप्रवरारूढा चण्डकोपास्त्रकैर्युता',
                    },
                    4: {
                      num: '04',
                      img: '/assets/aistudio/image_214d9252.png',
                      labelEn: '4. Kūṣmāṇḍā (कूष्माण्डा)',
                      labelHi: '४. कूष्माण्डा (ब्रह्माण्ड-सर्जिका शक्ति)',
                      dayEn: '4th Night of Navarātri (Caturthī)',
                      dayHi: 'नवरात्रि चतुर्थ रात्रि (चतुर्थी)',
                      vahanaEn: 'Tiger Mount · Manifesting Brahmāṇḍa, Triśūla, Lotus & Kalaśa',
                      vahanaHi: 'वाहन: बाघ · ब्रह्माण्ड-गोलक, त्रिशूल, कमल एवं अमृत-कलश',
                      dhyana: 'सुरासम्पूर्णकलशं रुधिराप्लुतमेव च',
                    },
                    5: {
                      num: '05',
                      img: '/assets/aistudio/image_ec77b51b.png',
                      labelEn: '5. Skandamātā (स्कन्दमाता)',
                      labelHi: '५. स्कन्दमाता (कुमार कार्तिकेय की जननी)',
                      dayEn: '5th Night of Navarātri (Pañcamī)',
                      dayHi: 'नवरात्रि पञ्चम रात्रि (पंचमी)',
                      vahanaEn: 'Lion Mount · Child Skanda on Lap, Spear & Lotus',
                      vahanaHi: 'वाहन: सिंह · गोद में बालक स्कन्द, शक्ति-भाला एवं कमल',
                      dhyana: 'सिंहासनगता नित्यं पद्माञ्चितकरद्वया',
                    },
                    6: {
                      num: '06',
                      img: '/assets/aistudio/image_b10c7bff.png',
                      labelEn: '6. Kātyāyanī (कात्यायनी)',
                      labelHi: '६. कात्यायनी (दानवघातिनी योद्धा स्वरूप)',
                      dayEn: '6th Night of Navarātri (Ṣaṣṭhī)',
                      dayHi: 'नवरात्रि षष्ठ रात्रि (षष्ठी)',
                      vahanaEn: 'Lion Mount · Candrahāsa Sword, Triśūla, Spear & Lotus',
                      vahanaHi: 'वाहन: सिंह · चन्द्रहास खड्ग, त्रिशूल, भाला एवं कमल',
                      dhyana: 'चन्द्रहासोज्वलकरा शार्दूलवरवाहना',
                    },
                    7: {
                      num: '07',
                      img: '/assets/aistudio/image_996e55e6.png',
                      labelEn: '7. Kālarātrī (कालरात्रि · शुभंकरी)',
                      labelHi: '७. कालरात्रि (शुभंकरी · उग्र रात्रि-शक्ति)',
                      dayEn: '7th Night of Navarātri (Mahāsaptamī)',
                      dayHi: 'नवरात्रि सप्तम रात्रि (महासप्तमी)',
                      vahanaEn: 'Donkey Mount (Gardabha) · Scimitar, Iron Weapon & Triśūla',
                      vahanaHi: 'वाहन: गर्दभ · वक्र खड्ग, लौह-अस्त्र एवं त्रिशूल',
                      dhyana: 'एकवेणी जपाकर्णपूरा नग्ना खरास्थिता',
                    },
                    8: {
                      num: '08',
                      img: '/assets/aistudio/image_6bffd444.png',
                      labelEn: '8. Mahāgaurī (महागौरी)',
                      labelHi: '८. महागौरी (श्वेताम्बरधरा गौर-स्वरूप)',
                      dayEn: '8th Night of Navarātri (Mahāṣṭamī)',
                      dayHi: 'नवरात्रि अष्टम रात्रि (महाष्टमी)',
                      vahanaEn: 'White Bull (Vṛṣabha) · Triśūla, White Lotus, Rosary & Abhaya',
                      vahanaHi: 'वाहन: श्वेत वृषभ · त्रिशूल, श्वेत कमल, जपमाला एवं अभय मुद्रा',
                      dhyana: 'श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः',
                    },
                    9: {
                      num: '09',
                      img: '/assets/aistudio/image_96818680.png',
                      labelEn: '9. Siddhidātrī (सिद्धिदात्री)',
                      labelHi: '९. सिद्धिदात्री (अष्ट-सिद्धि दात्री)',
                      dayEn: '9th Night of Navarātri (Mahānavamī)',
                      dayHi: 'नवरात्रि नवम रात्रि (महानवमी)',
                      vahanaEn: 'White Lotus Seat (Padmāsanā) · Cakra, Gadā, Śaṅkha & Padma',
                      vahanaHi: 'आसन: श्वेत कमल · चक्र, गदा, शंख एवं पद्म',
                      dhyana: 'सेव्यमाना सदा भूयात् सिद्धिदा सिद्धिदायिनी',
                    },
                  }
                : {};

            const inlinePlatesForSection = sectionMahavidyaImages[idx];
            const matchedNavadurgaSectionPlate = sectionNavadurgaImageMap[idx];

            return (
              <div
                key={idx}
                id={matchedNavadurgaSectionPlate ? `navadurga-section-${idx}` : undefined}
                className="p-5 sm:p-6 rounded-xl bg-[#E8D8BE]/60 border border-[#5A3922]/25 space-y-4 scroll-mt-20"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-[#17100C] font-bold border-b border-[#5A3922]/20 pb-2.5">
                  {t(sec.headingEn, sec.headingHi)}
                </h2>

                {matchedNavadurgaSectionPlate ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start pt-1">
                    {/* Left Column: Contextual Iconographic Plate for this specific Durga */}
                    <div className="lg:col-span-5 xl:col-span-4 rounded-xl overflow-hidden border-2 border-[#5A3922]/75 bg-[#1E130D] shadow-md lg:sticky lg:top-24">
                      <div className="px-3.5 py-2 bg-[#140C08] border-b border-[#5A3922]/60 flex items-center justify-between gap-2">
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D3AD55] font-bold">
                          {t(`NAVADURGĀ ${matchedNavadurgaSectionPlate.num} / 09`, `नवदुर्गा ${matchedNavadurgaSectionPlate.num} / ०९`)}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#2C1810] border border-[#E06D53]/40 font-mono text-[8.5px] text-[#E06D53]">
                          {t(matchedNavadurgaSectionPlate.dayEn, matchedNavadurgaSectionPlate.dayHi)}
                        </span>
                      </div>
                      <div className="p-3 bg-[#140C08] flex items-center justify-center">
                        <img
                          src={matchedNavadurgaSectionPlate.img}
                          alt={t(matchedNavadurgaSectionPlate.labelEn, matchedNavadurgaSectionPlate.labelHi)}
                          loading="lazy"
                          className="w-full h-72 sm:h-80 object-contain rounded border border-[#5A3922]/50 bg-[#140C08]"
                        />
                      </div>
                      <div className="p-3.5 space-y-2 bg-[#23160F] border-t border-[#5A3922]/60">
                        <div className="font-serif text-base font-bold text-[#F5E8CE]">
                          {t(matchedNavadurgaSectionPlate.labelEn, matchedNavadurgaSectionPlate.labelHi)}
                        </div>
                        <div className="text-xs font-serif text-[#D3AD55]">
                          {t(matchedNavadurgaSectionPlate.vahanaEn, matchedNavadurgaSectionPlate.vahanaHi)}
                        </div>
                        <div className="px-2.5 py-1.5 rounded bg-[#140C08] border border-[#5A3922]/50 font-serif text-xs text-[#E2D3BC] italic">
                          “{matchedNavadurgaSectionPlate.dhyana}”
                        </div>
                      </div>
                    </div>

                    {/* Right Column: All 5 Contextual Subsections (Core Attributes, Mythology, Iconography, Significance, Research Topics) */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-3.5">
                      {paragraphs.map((para, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3.5 sm:p-4 rounded-xl bg-[#EFE0C6]/90 border border-[#5A3922]/25"
                        >
                          <p className="text-sm sm:text-[15.5px] font-serif text-[#261B13] leading-relaxed">
                            {para.leadLabel && (
                              <strong className="font-bold text-[#17100C]">
                                {para.leadLabel}:{' '}
                              </strong>
                            )}
                            <span>{para.body}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {paragraphs.map((para, pIdx) => {
                      const matchedPlate = inlinePlatesForSection?.[pIdx];
                      if (matchedPlate) {
                        return (
                          <div
                            key={pIdx}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start p-3.5 sm:p-4 rounded-xl bg-[#EFE0C6]/90 border border-[#5A3922]/30"
                          >
                            <div className="lg:col-span-4 rounded-lg overflow-hidden border border-[#5A3922]/60 bg-[#170E09]">
                              <div className="px-3 py-1.5 bg-[#2B1F17] border-b border-[#5A3922]/50 flex items-center justify-between">
                                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#D3AD55] font-bold">
                                  {t(`MAHĀVIDYĀ ${matchedPlate.num}`, `महाविद्या ${matchedPlate.num}`)}
                                </span>
                                <span className="font-serif text-xs text-[#F5E8CE] font-semibold">
                                  {t(matchedPlate.labelEn, matchedPlate.labelHi)}
                                </span>
                              </div>
                              <div className="p-2.5 flex items-center justify-center bg-[#140C08]">
                                <img
                                  src={matchedPlate.img}
                                  alt={t(matchedPlate.labelEn, matchedPlate.labelHi)}
                                  loading="lazy"
                                  className="w-full h-56 sm:h-64 object-contain rounded"
                                />
                              </div>
                            </div>
                            <div className="lg:col-span-8 flex flex-col justify-center">
                              <p className="text-sm sm:text-[15.5px] font-serif text-[#261B13] leading-relaxed">
                                {para.leadLabel && (
                                  <strong className="font-bold text-[#17100C]">
                                    {para.leadLabel}:{' '}
                                  </strong>
                                )}
                                <span>{para.body}</span>
                              </p>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-[15.5px] font-serif text-[#261B13] leading-relaxed"
                        >
                          {para.leadLabel && (
                            <strong className="font-bold text-[#17100C]">
                              {para.leadLabel}:{' '}
                            </strong>
                          )}
                          <span>{para.body}</span>
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Empirical & Scriptural Findings + Archival Metadata (Original 2-Column Article Cards) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/75 border border-[#5A3922]/25">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5A3922] font-bold mb-3">
              {t('KEY EMPIRICAL & SCRIPTURAL FINDINGS', 'प्रमुख प्रायोगिक एवं शास्त्रीय निष्कर्ष')}
            </h3>
            <ul className="space-y-2.5">
              {keyFindingsList.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-serif text-[#1E140E] leading-relaxed"
                >
                  <Check className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#E8D8BE]/75 border border-[#5A3922]/25">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5A3922] font-bold mb-3">
              {t('ARCHIVAL TECHNICAL PARAMETERS', 'अभिलेखीय तकनीकी मापदंड')}
            </h3>
            <dl className="space-y-2.5 divide-y divide-[#5A3922]/15">
              {article.metadata.map((m, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-2' : ''}>
                  <dt className="font-mono text-[9.5px] uppercase tracking-wider text-[#5A3922]">
                    {t(m.labelEn, m.labelHi)}
                  </dt>
                  <dd className="font-serif text-xs sm:text-sm text-[#17100C] font-semibold mt-0.5">
                    {t(m.valueEn, m.valueHi)}
                  </dd>
                </div>
              ))}
            </dl>
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
      )}
      </div>
    </div>
  );
};
