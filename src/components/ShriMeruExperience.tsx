import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Layers,
  Eye
} from 'lucide-react';
import {
  SHRI_MERU_SEQUENCES,
  NINE_AVARANAS,
  TRIANGLE_FORMULA_STEPS,
  BHUPURA_MATRIKA_PROFILES,
  type ShriMeruSequenceId
} from '../data/shriMeruData';
import { useLanguage } from '../context/LanguageContext';

interface ShriMeruExperienceProps {
  initialAvaranaIndex?: number;
  initialMatrikaIndex?: number;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
  onOpenMatrix?: () => void;
  onOpenCyberneticMatrika?: (matrikaIdx: number) => void;
}

/** Format seconds (0..102) as MM:SS */
function formatTimestamp(sec: number): string {
  const clamped = Math.max(0, Math.min(102, Math.floor(sec)));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** Generate radially arranged lotus petal SVG paths around (500, 500) */
function buildLotusPetals(count: number, innerR: number, outerR: number, halfAngleSpreadDeg: number) {
  const petals: { d: string; tipX: number; tipY: number; angleDeg: number }[] = [];
  const cx = 500;
  const cy = 500;
  for (let i = 0; i < count; i++) {
    const centerDeg = (i * 360) / count - 90;
    const leftDeg = centerDeg - halfAngleSpreadDeg;
    const rightDeg = centerDeg + halfAngleSpreadDeg;
    const midShoulderR = innerR + (outerR - innerR) * 0.62;

    const toRad = (d: number) => (d * Math.PI) / 180;
    const x1 = cx + Math.cos(toRad(leftDeg)) * innerR;
    const y1 = cy + Math.sin(toRad(leftDeg)) * innerR;
    const x2 = cx + Math.cos(toRad(rightDeg)) * innerR;
    const y2 = cy + Math.sin(toRad(rightDeg)) * innerR;

    const cx1 = cx + Math.cos(toRad(centerDeg - halfAngleSpreadDeg * 0.92)) * midShoulderR;
    const cy1 = cy + Math.sin(toRad(centerDeg - halfAngleSpreadDeg * 0.92)) * midShoulderR;
    const cx2 = cx + Math.cos(toRad(centerDeg + halfAngleSpreadDeg * 0.92)) * midShoulderR;
    const cy2 = cy + Math.sin(toRad(centerDeg + halfAngleSpreadDeg * 0.92)) * midShoulderR;

    const tipX = cx + Math.cos(toRad(centerDeg)) * outerR;
    const tipY = cy + Math.sin(toRad(centerDeg)) * outerR;

    const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx1.toFixed(1)} ${cy1.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${cx2.toFixed(1)} ${cy2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
    petals.push({ d, tipX, tipY, angleDeg: centerDeg });
  }
  return petals;
}

/** Generate radial ring of triangles around (500, 500) */
function buildTriangleRing(count: number, innerR: number, outerR: number, phaseOffsetDeg = 0) {
  const cx = 500;
  const cy = 500;
  const stepDeg = 360 / count;
  const halfBaseDeg = stepDeg * 0.46;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const polygons: string[] = [];

  for (let i = 0; i < count; i++) {
    const tipDeg = i * stepDeg - 90 + phaseOffsetDeg;
    const b1Deg = tipDeg - halfBaseDeg;
    const b2Deg = tipDeg + halfBaseDeg;

    const tx = cx + Math.cos(toRad(tipDeg)) * outerR;
    const ty = cy + Math.sin(toRad(tipDeg)) * outerR;
    const x1 = cx + Math.cos(toRad(b1Deg)) * innerR;
    const y1 = cy + Math.sin(toRad(b1Deg)) * innerR;
    const x2 = cx + Math.cos(toRad(b2Deg)) * innerR;
    const y2 = cy + Math.sin(toRad(b2Deg)) * innerR;

    polygons.push(`${x1.toFixed(1)},${y1.toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`);
  }
  return polygons;
}

/**
 * Outer three-walled Bhupura path with four cardinal T-shaped architectural gates
 * Centered at (500, 500).
 */
function buildBhupuraPath(halfSize: number, neckHalfWidth: number, neckLen: number, gateHalfWidth: number, gateDepth: number) {
  const cx = 500;
  const cy = 500;
  const L = cx - halfSize;
  const R = cx + halfSize;
  const T = cy - halfSize;
  const B = cy + halfSize;

  return [
    `M ${L} ${T}`,
    `L ${cx - neckHalfWidth} ${T}`,
    `L ${cx - neckHalfWidth} ${T - neckLen}`,
    `L ${cx - gateHalfWidth} ${T - neckLen}`,
    `L ${cx - gateHalfWidth} ${T - neckLen - gateDepth}`,
    `L ${cx + gateHalfWidth} ${T - neckLen - gateDepth}`,
    `L ${cx + gateHalfWidth} ${T - neckLen}`,
    `L ${cx + neckHalfWidth} ${T - neckLen}`,
    `L ${cx + neckHalfWidth} ${T}`,
    `L ${R} ${T}`,
    `L ${R} ${cy - neckHalfWidth}`,
    `L ${R + neckLen} ${cy - neckHalfWidth}`,
    `L ${R + neckLen} ${cy - gateHalfWidth}`,
    `L ${R + neckLen + gateDepth} ${cy - gateHalfWidth}`,
    `L ${R + neckLen + gateDepth} ${cy + gateHalfWidth}`,
    `L ${R + neckLen} ${cy + gateHalfWidth}`,
    `L ${R + neckLen} ${cy + neckHalfWidth}`,
    `L ${R} ${cy + neckHalfWidth}`,
    `L ${R} ${B}`,
    `L ${cx + neckHalfWidth} ${B}`,
    `L ${cx + neckHalfWidth} ${B + neckLen}`,
    `L ${cx + gateHalfWidth} ${B + neckLen}`,
    `L ${cx + gateHalfWidth} ${B + neckLen + gateDepth}`,
    `L ${cx - gateHalfWidth} ${B + neckLen + gateDepth}`,
    `L ${cx - gateHalfWidth} ${B + neckLen}`,
    `L ${cx - neckHalfWidth} ${B + neckLen}`,
    `L ${cx - neckHalfWidth} ${B}`,
    `L ${L} ${B}`,
    `L ${L} ${cy + neckHalfWidth}`,
    `L ${L - neckLen} ${cy + neckHalfWidth}`,
    `L ${L - neckLen} ${cy + gateHalfWidth}`,
    `L ${L - neckLen - gateDepth} ${cy + gateHalfWidth}`,
    `L ${L - neckLen - gateDepth} ${cy - gateHalfWidth}`,
    `L ${L - neckLen} ${cy - gateHalfWidth}`,
    `L ${L - neckLen} ${cy - neckHalfWidth}`,
    `L ${L} ${cy - neckHalfWidth}`,
    'Z'
  ].join(' ');
}

export default function ShriMeruExperience({
  initialAvaranaIndex,
  initialMatrikaIndex,
  onPrevChapter,
  onNextChapter,
  onOpenMatrix,
  onOpenCyberneticMatrika
}: ShriMeruExperienceProps) {
  const { lang, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [activeSequence, setActiveSequence] = useState<ShriMeruSequenceId>(
    typeof initialAvaranaIndex === 'number' && initialAvaranaIndex >= 0 && initialAvaranaIndex < 9
      ? 'enclosures'
      : 'opening'
  );
  const [openingStep, setOpeningStep] = useState<0 | 1>(1);
  const [activeAvaranaIdx, setActiveAvaranaIdx] = useState<number>(
    typeof initialAvaranaIndex === 'number' && initialAvaranaIndex >= 0 && initialAvaranaIndex < 9
      ? initialAvaranaIndex
      : 0
  );
  const [activeTriangleStepIdx, setActiveTriangleStepIdx] = useState<number>(5);
  const [bhupuraStep, setBhupuraStep] = useState<0 | 1>(0);
  const [activeMatrikaIdx, setActiveMatrikaIdx] = useState<number>(initialMatrikaIndex ?? 0);
  const [closingStep, setClosingStep] = useState<0 | 1>(0);
  const [resonatedMatrikaIdx, setResonatedMatrikaIdx] = useState<number | null>(null);

  const [cameraMode, setCameraMode] = useState<'auto' | 'full'>('auto');
  const [isPlayingTimeline, setIsPlayingTimeline] = useState<boolean>(false);
  const [timelineSec, setTimelineSec] = useState<number>(0);

  useEffect(() => {
    if (typeof initialAvaranaIndex === 'number' && initialAvaranaIndex >= 0 && initialAvaranaIndex < 9) {
      setActiveAvaranaIdx(initialAvaranaIndex);
      setActiveSequence('enclosures');
      setTimelineSec(NINE_AVARANAS[initialAvaranaIndex]?.startSec ?? 13);
    }
  }, [initialAvaranaIndex]);

  const applyTimelineSecond = (sec: number) => {
    setTimelineSec(sec);
    if (sec <= 9) {
      setActiveSequence('opening');
      setOpeningStep(sec < 3 ? 0 : 1);
    } else if (sec <= 33) {
      setActiveSequence('enclosures');
      const matchedIdx = NINE_AVARANAS.findIndex(a => sec >= a.startSec && sec <= a.endSec);
      if (matchedIdx !== -1) {
        setActiveAvaranaIdx(matchedIdx);
      } else if (sec < 13) {
        setActiveAvaranaIdx(0);
      } else {
        setActiveAvaranaIdx(8);
      }
    } else if (sec <= 43) {
      setActiveSequence('triangles');
      const stepOffset = Math.min(5, Math.max(0, Math.floor(((sec - 34) / 9) * 6)));
      setActiveTriangleStepIdx(stepOffset);
    } else if (sec <= 49) {
      setActiveSequence('bhupura');
      setBhupuraStep(sec < 47 ? 0 : 1);
    } else if (sec <= 89) {
      setActiveSequence('matrikas');
      const matchedMatrika = BHUPURA_MATRIKA_PROFILES.findIndex(
        m => sec >= m.startSec && sec <= m.endSec
      );
      if (matchedMatrika !== -1) {
        setActiveMatrikaIdx(matchedMatrika);
      } else if (sec < 54) {
        setActiveMatrikaIdx(0);
      }
    } else {
      setActiveSequence('closing');
      setClosingStep(sec < 96 ? 0 : 1);
    }
  };

  useEffect(() => {
    if (!isPlayingTimeline) return;
    const interval = window.setInterval(() => {
      setTimelineSec(prev => {
        if (prev >= 102) {
          setIsPlayingTimeline(false);
          return 102;
        }
        const next = prev + 1;
        applyTimelineSecond(next);
        return next;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [isPlayingTimeline]);

  const bhupuraOuterPath = useMemo(() => buildBhupuraPath(365, 44, 34, 78, 28), []);
  const bhupuraMidPath = useMemo(() => buildBhupuraPath(350, 34, 34, 68, 16), []);
  const bhupuraInnerPath = useMemo(() => buildBhupuraPath(335, 24, 34, 58, 6), []);

  const lotus16Petals = useMemo(() => buildLotusPetals(16, 250, 312, 10.5), []);
  const lotus8Petals = useMemo(() => buildLotusPetals(8, 198, 246, 20.5), []);

  const ring14Triangles = useMemo(() => buildTriangleRing(14, 152, 192, 0), []);
  const ring10OuterTriangles = useMemo(() => buildTriangleRing(10, 114, 150, 18), []);
  const ring10InnerTriangles = useMemo(() => buildTriangleRing(10, 80, 112, 0), []);
  const ring8Triangles = useMemo(() => buildTriangleRing(8, 50, 78, 22.5), []);

  const activeRings = useMemo(() => {
    if (activeSequence === 'opening') {
      return {
        bhupura: true,
        lotus16: true,
        lotus8: true,
        tri14: true,
        tri10outer: true,
        tri10inner: true,
        tri8: true,
        tri1: true,
        bindu: true
      };
    }
    if (activeSequence === 'enclosures') {
      const currentRingKey = NINE_AVARANAS[activeAvaranaIdx].ringKey;
      return {
        bhupura: currentRingKey === 'bhupura',
        lotus16: currentRingKey === 'lotus16',
        lotus8: currentRingKey === 'lotus8',
        tri14: currentRingKey === 'tri14',
        tri10outer: currentRingKey === 'tri10outer',
        tri10inner: currentRingKey === 'tri10inner',
        tri8: currentRingKey === 'tri8',
        tri1: currentRingKey === 'tri1',
        bindu: currentRingKey === 'bindu'
      };
    }
    if (activeSequence === 'triangles') {
      const step = TRIANGLE_FORMULA_STEPS[activeTriangleStepIdx];
      return {
        bhupura: false,
        lotus16: false,
        lotus8: false,
        tri14: step.activeRingKeys.includes('tri14'),
        tri10outer: step.activeRingKeys.includes('tri10outer'),
        tri10inner: step.activeRingKeys.includes('tri10inner'),
        tri8: step.activeRingKeys.includes('tri8'),
        tri1: step.activeRingKeys.includes('tri1'),
        bindu: step.activeRingKeys.includes('bindu')
      };
    }
    if (activeSequence === 'bhupura' || activeSequence === 'matrikas') {
      return {
        bhupura: true,
        lotus16: false,
        lotus8: false,
        tri14: false,
        tri10outer: false,
        tri10inner: false,
        tri8: false,
        tri1: false,
        bindu: true
      };
    }
    return {
      bhupura: true,
      lotus16: true,
      lotus8: true,
      tri14: true,
      tri10outer: true,
      tri10inner: true,
      tri8: true,
      tri1: true,
      bindu: true
    };
  }, [activeSequence, activeAvaranaIdx, activeTriangleStepIdx]);

  const cameraTransform = useMemo(() => {
    if (cameraMode === 'full' || shouldReduceMotion) {
      return { scale: 1, x: 0, y: 0 };
    }
    if (activeSequence === 'bhupura') {
      return { scale: 1.78, x: 0, y: -225 };
    }
    if (activeSequence === 'matrikas') {
      const matrika = BHUPURA_MATRIKA_PROFILES[activeMatrikaIdx];
      return {
        scale: matrika.cameraTransform.scale,
        x: matrika.cameraTransform.translateX,
        y: matrika.cameraTransform.translateY
      };
    }
    return { scale: 1, x: 0, y: 0 };
  }, [activeSequence, activeMatrikaIdx, cameraMode, shouldReduceMotion]);

  const currentAvarana = NINE_AVARANAS[activeAvaranaIdx];
  const currentTriangleStep = TRIANGLE_FORMULA_STEPS[activeTriangleStepIdx];
  const currentMatrika = BHUPURA_MATRIKA_PROFILES[activeMatrikaIdx];

  const handleStepPrev = () => {
    setIsPlayingTimeline(false);
    if (activeSequence === 'opening') {
      if (openingStep === 1) {
        setOpeningStep(0);
        setTimelineSec(1);
      } else if (onPrevChapter) {
        onPrevChapter();
      }
      return;
    }
    if (activeSequence === 'enclosures') {
      if (activeAvaranaIdx > 0) {
        const nextIdx = activeAvaranaIdx - 1;
        setActiveAvaranaIdx(nextIdx);
        setTimelineSec(NINE_AVARANAS[nextIdx].startSec);
      } else {
        setActiveSequence('opening');
        setOpeningStep(1);
        setTimelineSec(5);
      }
      return;
    }
    if (activeSequence === 'triangles') {
      if (activeTriangleStepIdx > 0) {
        setActiveTriangleStepIdx(prev => prev - 1);
      } else {
        setActiveSequence('enclosures');
        setActiveAvaranaIdx(8);
        setTimelineSec(31);
      }
      return;
    }
    if (activeSequence === 'bhupura') {
      if (bhupuraStep === 1) {
        setBhupuraStep(0);
        setTimelineSec(45);
      } else {
        setActiveSequence('triangles');
        setActiveTriangleStepIdx(5);
        setTimelineSec(41);
      }
      return;
    }
    if (activeSequence === 'matrikas') {
      if (activeMatrikaIdx > 0) {
        const nextIdx = activeMatrikaIdx - 1;
        setActiveMatrikaIdx(nextIdx);
        setTimelineSec(BHUPURA_MATRIKA_PROFILES[nextIdx].startSec);
      } else {
        setActiveSequence('bhupura');
        setBhupuraStep(1);
        setTimelineSec(48);
      }
      return;
    }
    if (activeSequence === 'closing') {
      if (closingStep === 1) {
        setClosingStep(0);
        setTimelineSec(92);
      } else {
        setActiveSequence('matrikas');
        setActiveMatrikaIdx(7);
        setTimelineSec(86);
      }
    }
  };

  const handleStepNext = () => {
    setIsPlayingTimeline(false);
    if (activeSequence === 'opening') {
      if (openingStep === 0) {
        setOpeningStep(1);
        setTimelineSec(5);
      } else {
        setActiveSequence('enclosures');
        setActiveAvaranaIdx(0);
        setTimelineSec(13);
      }
      return;
    }
    if (activeSequence === 'enclosures') {
      if (activeAvaranaIdx < 8) {
        const nextIdx = activeAvaranaIdx + 1;
        setActiveAvaranaIdx(nextIdx);
        setTimelineSec(NINE_AVARANAS[nextIdx].startSec);
      } else {
        setActiveSequence('triangles');
        setActiveTriangleStepIdx(0);
        setTimelineSec(35);
      }
      return;
    }
    if (activeSequence === 'triangles') {
      if (activeTriangleStepIdx < 5) {
        setActiveTriangleStepIdx(prev => prev + 1);
      } else {
        setActiveSequence('bhupura');
        setBhupuraStep(0);
        setTimelineSec(45);
      }
      return;
    }
    if (activeSequence === 'bhupura') {
      if (bhupuraStep === 0) {
        setBhupuraStep(1);
        setTimelineSec(48);
      } else {
        setActiveSequence('matrikas');
        setActiveMatrikaIdx(0);
        setTimelineSec(54);
      }
      return;
    }
    if (activeSequence === 'matrikas') {
      if (activeMatrikaIdx < 7) {
        const nextIdx = activeMatrikaIdx + 1;
        setActiveMatrikaIdx(nextIdx);
        setTimelineSec(BHUPURA_MATRIKA_PROFILES[nextIdx].startSec);
      } else {
        setActiveSequence('closing');
        setClosingStep(0);
        setTimelineSec(92);
      }
      return;
    }
    if (activeSequence === 'closing') {
      if (closingStep === 0) {
        setClosingStep(1);
        setTimelineSec(97);
      } else if (onNextChapter) {
        onNextChapter();
      }
    }
  };

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-[#C99B48]/35 text-[#F0EAE0] shadow-[0_24px_64px_rgba(0,0,0,0.92)]"
      style={{
        background:
          'radial-gradient(circle at 50% 44%, rgba(122, 52, 14, 0.34) 0%, rgba(45, 20, 8, 0.22) 38%, rgba(8, 5, 3, 0.96) 78%), #080503'
      }}
    >
      {/* Subtle Ambient Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60" aria-hidden="true">
        {[
          { left: '12%', top: '18%', size: 2 },
          { left: '24%', top: '74%', size: 2.5 },
          { left: '38%', top: '14%', size: 1.5 },
          { left: '66%', top: '22%', size: 2 },
          { left: '82%', top: '34%', size: 2.5 },
          { left: '76%', top: '78%', size: 1.5 },
          { left: '18%', top: '48%', size: 2 },
          { left: '88%', top: '62%', size: 2 },
          { left: '52%', top: '12%', size: 1.5 },
          { left: '46%', top: '86%', size: 2 }
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#F0C66C]/45"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              boxShadow: '0 0 8px rgba(240,198,108,0.5)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        {/* Top Header Bar: Title, Sequence Tabs & 102-Second Film Timeline Controller */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-[#C99B48]/25">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.26em] uppercase text-[#C99B48]">
                {t('A PATH WITHIN · SHRI MERU CHAKRA & ASHTA MATRIKA', 'अ पाथ विदिन · श्री मेरु चक्र एवं अष्ट मातृका')}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-[0.16em] bg-[#321708]/80 text-[#F0C66C] border border-[#C99B48]/35">
                {t('ONE YANTRA · 9 ENCLOSURES · 8 MATRIKAS', 'एक यन्त्र · 9 आवरण · 8 मातृकाएँ')}
              </span>
            </div>
            <h3 className="mt-1 text-xl sm:text-2xl md:text-3xl font-serif font-semibold tracking-wide text-[#F0C66C]">
              {t(
                'Śrī Meru Chakra & The Eight Mothers of the Bhūpura',
                'श्री मेरु चक्र एवं भूपुर की अष्ट मातृकाएँ'
              )}
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-[#D0C3AD] mt-0.5">
              {t(
                'One continuous geometric journey from the three-walled Bhūpura gates through the 9 Āvaraṇas and 44 triangles to the central Bindu.',
                'तीन प्राचीरों वाले भूपुर द्वारों से होते हुए 9 आवरणों और 44 त्रिकोणों के माध्यम से केंद्रीय बिन्दु तक की एक सतत ज्यामितीय यात्रा।'
              )}
            </p>
          </div>

          {/* 102-Second Synchronized Video Journey Scrubber */}
          <div className="flex flex-wrap items-center gap-2.5 bg-[#1A0D06]/90 border border-[#C99B48]/35 rounded-lg px-3 py-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (timelineSec >= 102) {
                  applyTimelineSecond(0);
                }
                setIsPlayingTimeline(prev => !prev);
              }}
              aria-label={
                isPlayingTimeline
                  ? t('Pause synchronized journey', 'यात्रा रोकें')
                  : t('Play 102s synchronized journey', '102 सेकंड की यात्रा चलाएँ')
              }
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#6A2B0B]/80 hover:bg-[#E8792D]/30 border border-[#F0C66C]/50 text-[#F0C66C] text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              {isPlayingTimeline ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlayingTimeline ? t('Pause', 'रोकें') : t('Play Journey', 'यात्रा चलाएँ')}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsPlayingTimeline(false);
                applyTimelineSecond(0);
              }}
              aria-label={t('Reset journey to 00:00', '00:00 पर रीसेट करें')}
              className="p-1.5 rounded bg-[#080503]/70 border border-[#866334]/50 text-[#D0C3AD] hover:text-[#F0C66C] hover:border-[#F0C66C]/50 transition-colors cursor-pointer"
              title={t('Reset to 00:00', '00:00 पर रीसेट करें')}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={102}
                value={timelineSec}
                onChange={e => {
                  setIsPlayingTimeline(false);
                  applyTimelineSecond(Number(e.target.value));
                }}
                aria-label={t('Timeline scrubber (00:00 to 01:42)', 'समय-रेखा नियंत्रक (00:00 से 01:42)')}
                className="w-24 sm:w-32 accent-[#E8792D] cursor-pointer h-1.5 bg-[#321708] rounded-lg"
              />
              <span className="font-mono text-[10px] text-[#F5DEAB] tabular-nums">
                {formatTimestamp(timelineSec)} / 01:42
              </span>
            </div>
          </div>
        </div>

        {/* Six Sequence Navigation Tabs (Single-Language) */}
        <div
          className="mt-3.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5"
          role="tablist"
          aria-label={t('Shri Meru Chakra 6 Sequences', 'श्री मेरु चक्र के 6 अनुक्रम')}
        >
          {SHRI_MERU_SEQUENCES.map(seq => {
            const isSelected = activeSequence === seq.id;
            return (
              <button
                key={seq.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setIsPlayingTimeline(false);
                  setActiveSequence(seq.id);
                  setTimelineSec(seq.startSec);
                }}
                className={`px-2.5 py-2 rounded border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0C66C] ${
                  isSelected
                    ? 'bg-[#321708]/95 border-[#F0C66C] shadow-[0_0_16px_rgba(240,198,108,0.22)]'
                    : 'bg-[#1A0D06]/70 border-[#866334]/40 hover:border-[#C99B48]/70 hover:bg-[#321708]/50'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#E8792D] font-semibold">
                    {t(seq.indexLabel, seq.indexLabelHi)}
                  </span>
                  <span className="font-mono text-[8.5px] text-[#D0C3AD]/70 tabular-nums">
                    {seq.timeRange}
                  </span>
                </div>
                <div className="mt-0.5 font-serif text-xs sm:text-[13px] font-semibold text-[#F0C66C] truncate">
                  {t(seq.englishTitle, seq.hindiTitle)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Two-Column Sacred Architecture Stage: Left/Center Yantra Canvas + Right Synchronized Text & Controls */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left / Center Column (6 cols on lg): The Single Reusable Animated SVG Shri Meru Chakra */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[520px] aspect-square rounded-xl border border-[#C99B48]/35 bg-[#080503]/90 overflow-hidden shadow-[inset_0_0_60px_rgba(106,43,11,0.38)] flex items-center justify-center">
              {/* Top-left Status Badge inside Yantra Viewport */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded bg-[#080503]/85 border border-[#C99B48]/40">
                <span className="w-2 h-2 rounded-full bg-[#E8792D] animate-pulse" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#F5DEAB]">
                  {activeSequence === 'opening' && t('ŚRĪ MERU CHAKRA · MAHAMERU', 'श्री मेरु चक्र · महामेरु')}
                  {activeSequence === 'enclosures' &&
                    t(
                      `${currentAvarana.indexLabelEn} · ${currentAvarana.transliteration}`,
                      `${currentAvarana.indexLabel} · ${currentAvarana.hindiName}`
                    )}
                  {activeSequence === 'triangles' &&
                    t(
                      `44 TRIANGLES · ${currentTriangleStep.formulaDisplay}`,
                      `४४ त्रिकोण · ${currentTriangleStep.formulaDisplay}`
                    )}
                  {activeSequence === 'bhupura' && t('BHŪPURA GATE CLOSE-UP', 'भूपुर द्वार निकट-दृश्य')}
                  {activeSequence === 'matrikas' &&
                    t(
                      `${currentMatrika.indexHeaderEn} · ${currentMatrika.transliteration}`,
                      `${currentMatrika.indexHeaderHi} · ${currentMatrika.hindiName}`
                    )}
                  {activeSequence === 'closing' &&
                    (closingStep === 0
                      ? t('PANCHAMRITA ABHISHEKA · 8 GATES', 'पञ्चामृत अभिषेक · 8 द्वार')
                      : t('A RITUAL OF FOCUS · A PATH WITHIN', 'एकाग्रता अनुष्ठान · अ पाथ विदिन'))}
                </span>
              </div>

              {/* Top-right Camera Framing Toggle */}
              {(activeSequence === 'bhupura' || activeSequence === 'matrikas') && (
                <button
                  type="button"
                  onClick={() => setCameraMode(prev => (prev === 'auto' ? 'full' : 'auto'))}
                  className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A0D06]/90 border border-[#C99B48]/50 text-[9.5px] font-mono uppercase tracking-wider text-[#F0C66C] hover:border-[#F0C66C] transition-colors cursor-pointer"
                >
                  {cameraMode === 'auto' ? (
                    <>
                      <Minimize2 className="w-3 h-3" />
                      {t('Full Yantra', 'संपूर्ण यन्त्र')}
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3 h-3" />
                      {t('Gate Close-Up', 'द्वार निकट-दृश्य')}
                    </>
                  )}
                </button>
              )}

              {/* Animated Camera Group Wrapping the Single Sacred SVG Yantra */}
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{
                  scale: cameraTransform.scale,
                  x: cameraTransform.x,
                  y: cameraTransform.y
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.75,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <svg
                  viewBox="0 0 1000 1000"
                  className="w-full h-full select-none"
                  role="img"
                  aria-label={t(
                    'Interactive Shri Meru Chakra Yantra with Nine Enclosures, 44 Triangles, and Eight Bhupura Matrika Gates',
                    'नौ आवरणों, 44 त्रिकोणों और आठ भूपुर मातृका द्वारों के साथ संवादात्मक श्री मेरु चक्र यन्त्र'
                  )}
                >
                  <defs>
                    <radialGradient id="meruCoreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E8792D" stopOpacity="0.45" />
                      <stop offset="45%" stopColor="#6A2B0B" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#080503" stopOpacity="0" />
                    </radialGradient>
                    <filter id="goldGlow" x="-25%" y="-25%" width="150%" height="150%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <circle cx="500" cy="500" r="440" fill="url(#meruCoreGlow)" />

                  <g stroke="#866334" strokeWidth="0.7" strokeDasharray="3 6" opacity="0.35">
                    <line x1="500" y1="60" x2="500" y2="940" />
                    <line x1="60" y1="500" x2="940" y2="500" />
                    <line x1="160" y1="160" x2="840" y2="840" />
                    <line x1="840" y1="160" x2="160" y2="840" />
                  </g>

                  {/* AVARANA 1: BHUPURA */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(0);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.bhupura ? 1 : 0.32}
                  >
                    <path
                      d={bhupuraOuterPath}
                      fill="#1A0D06"
                      fillOpacity="0.55"
                      stroke={activeRings.bhupura ? '#F0C66C' : '#866334'}
                      strokeWidth={activeRings.bhupura ? '3.2' : '1.8'}
                      filter={activeRings.bhupura ? 'url(#goldGlow)' : undefined}
                    />
                    <path
                      d={bhupuraMidPath}
                      fill="none"
                      stroke={
                        activeSequence === 'matrikas' || activeSequence === 'bhupura'
                          ? '#E8792D'
                          : activeRings.bhupura
                            ? '#C99B48'
                            : '#866334'
                      }
                      strokeWidth={activeSequence === 'matrikas' ? '2.8' : '2'}
                    />
                    <path
                      d={bhupuraInnerPath}
                      fill="#080503"
                      fillOpacity="0.45"
                      stroke={activeRings.bhupura ? '#C99B48' : '#866334'}
                      strokeWidth="1.8"
                    />
                  </g>

                  {/* TRIVALAYA */}
                  <g opacity={activeRings.bhupura || activeRings.lotus16 ? 0.85 : 0.35}>
                    <circle cx="500" cy="500" r="326" fill="none" stroke="#C99B48" strokeWidth="1.6" />
                    <circle cx="500" cy="500" r="319" fill="none" stroke="#866334" strokeWidth="1.1" />
                    <circle cx="500" cy="500" r="313" fill="#1A0D06" fillOpacity="0.6" stroke="#C99B48" strokeWidth="1.5" />
                  </g>

                  {/* AVARANA 2: 16-PETAL LOTUS */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(1);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.lotus16 ? 1 : 0.28}
                  >
                    {lotus16Petals.map((petal, idx) => (
                      <path
                        key={`p16-${idx}`}
                        d={petal.d}
                        fill={activeRings.lotus16 ? '#6A2B0B' : '#321708'}
                        fillOpacity={activeRings.lotus16 ? '0.82' : '0.45'}
                        stroke={activeRings.lotus16 ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.lotus16 ? '2.2' : '1.3'}
                      />
                    ))}
                    <circle
                      cx="500"
                      cy="500"
                      r="250"
                      fill="none"
                      stroke={activeRings.lotus16 ? '#F0C66C' : '#C99B48'}
                      strokeWidth="1.8"
                    />
                  </g>

                  {/* AVARANA 3: 8-PETAL LOTUS */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(2);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.lotus8 ? 1 : 0.28}
                  >
                    {lotus8Petals.map((petal, idx) => (
                      <path
                        key={`p8-${idx}`}
                        d={petal.d}
                        fill={activeRings.lotus8 ? '#6A2B0B' : '#321708'}
                        fillOpacity={activeRings.lotus8 ? '0.88' : '0.5'}
                        stroke={activeRings.lotus8 ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.lotus8 ? '2.4' : '1.4'}
                      />
                    ))}
                    <circle
                      cx="500"
                      cy="500"
                      r="196"
                      fill="#120905"
                      stroke={activeRings.lotus8 ? '#F0C66C' : '#C99B48'}
                      strokeWidth="2"
                    />
                  </g>

                  {/* NINE PRIMARY INTERLOCKING TRIANGLES */}
                  <g
                    stroke="#C99B48"
                    strokeWidth="1.1"
                    fill="none"
                    opacity={
                      activeSequence === 'opening' || activeSequence === 'triangles' || activeSequence === 'closing'
                        ? 0.45
                        : 0.2
                    }
                  >
                    <polygon points="500,308 666,618 334,618" />
                    <polygon points="500,342 642,592 358,592" />
                    <polygon points="500,382 612,562 388,562" />
                    <polygon points="500,424 576,534 424,534" />
                    <polygon points="500,692 334,382 666,382" />
                    <polygon points="500,656 358,408 642,408" />
                    <polygon points="500,618 386,436 614,436" />
                    <polygon points="500,578 416,462 584,462" />
                    <polygon points="500,544 452,476 548,476" />
                  </g>

                  {/* AVARANA 4: 14 TRIANGLES */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(3);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(0);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.tri14 ? 1 : 0.24}
                  >
                    {ring14Triangles.map((pts, idx) => (
                      <polygon
                        key={`tri14-${idx}`}
                        points={pts}
                        fill={activeRings.tri14 ? '#6A2B0B' : '#321708'}
                        fillOpacity={activeRings.tri14 ? '0.88' : '0.45'}
                        stroke={activeRings.tri14 ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.tri14 ? '2.2' : '1.2'}
                      />
                    ))}
                    <circle cx="500" cy="500" r="152" fill="none" stroke="#C99B48" strokeWidth="1.2" />
                  </g>

                  {/* AVARANA 5: 10 OUTER TRIANGLES */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(4);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(1);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.tri10outer ? 1 : 0.24}
                  >
                    {ring10OuterTriangles.map((pts, idx) => (
                      <polygon
                        key={`tri10o-${idx}`}
                        points={pts}
                        fill={activeRings.tri10outer ? '#7B310D' : '#321708'}
                        fillOpacity={activeRings.tri10outer ? '0.9' : '0.45'}
                        stroke={activeRings.tri10outer ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.tri10outer ? '2.2' : '1.2'}
                      />
                    ))}
                    <circle cx="500" cy="500" r="114" fill="none" stroke="#C99B48" strokeWidth="1.2" />
                  </g>

                  {/* AVARANA 6: 10 INNER TRIANGLES */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(5);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(2);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.tri10inner ? 1 : 0.24}
                  >
                    {ring10InnerTriangles.map((pts, idx) => (
                      <polygon
                        key={`tri10i-${idx}`}
                        points={pts}
                        fill={activeRings.tri10inner ? '#8C380F' : '#321708'}
                        fillOpacity={activeRings.tri10inner ? '0.92' : '0.45'}
                        stroke={activeRings.tri10inner ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.tri10inner ? '2.2' : '1.2'}
                      />
                    ))}
                    <circle cx="500" cy="500" r="80" fill="none" stroke="#C99B48" strokeWidth="1.2" />
                  </g>

                  {/* AVARANA 7: 8 TRIANGLES */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(6);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(3);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.tri8 ? 1 : 0.24}
                  >
                    {ring8Triangles.map((pts, idx) => (
                      <polygon
                        key={`tri8-${idx}`}
                        points={pts}
                        fill={activeRings.tri8 ? '#9E3E10' : '#321708'}
                        fillOpacity={activeRings.tri8 ? '0.92' : '0.45'}
                        stroke={activeRings.tri8 ? '#F0C66C' : '#C99B48'}
                        strokeWidth={activeRings.tri8 ? '2.2' : '1.2'}
                      />
                    ))}
                    <circle cx="500" cy="500" r="50" fill="#140904" stroke="#C99B48" strokeWidth="1.2" />
                  </g>

                  {/* AVARANA 8: 1 CENTRAL TRIANGLE */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(7);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(4);
                    }}
                    className="cursor-pointer transition-opacity duration-500"
                    opacity={activeRings.tri1 ? 1 : 0.28}
                  >
                    <polygon
                      points="500,542 462,476 538,476"
                      fill={activeRings.tri1 ? '#B84A14' : '#321708'}
                      fillOpacity={activeRings.tri1 ? '0.95' : '0.55'}
                      stroke={activeRings.tri1 ? '#F0C66C' : '#C99B48'}
                      strokeWidth={activeRings.tri1 ? '2.8' : '1.6'}
                      filter={activeRings.tri1 ? 'url(#goldGlow)' : undefined}
                    />
                  </g>

                  {/* AVARANA 9: BINDU */}
                  <g
                    onClick={() => {
                      if (activeSequence === 'enclosures') setActiveAvaranaIdx(8);
                      if (activeSequence === 'triangles') setActiveTriangleStepIdx(5);
                    }}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="500"
                      cy="500"
                      r={activeRings.bindu ? '16' : '10'}
                      fill="#E8792D"
                      fillOpacity={activeRings.bindu ? '0.35' : '0.15'}
                    />
                    <circle
                      cx="500"
                      cy="500"
                      r={activeRings.bindu ? '7.5' : '5'}
                      fill="#E8792D"
                      stroke="#F0C66C"
                      strokeWidth="2"
                      filter="url(#goldGlow)"
                    />
                  </g>

                  {/* BHUPURA CLOSE-UP CALLOUT LABELS (Sequence D) */}
                  {activeSequence === 'bhupura' && (
                    <g>
                      <rect
                        x="412"
                        y="818"
                        width="176"
                        height="118"
                        rx="6"
                        fill="none"
                        stroke="#E8792D"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                      />
                      <circle
                        cx="500"
                        cy="848"
                        r="11"
                        fill="#E8792D"
                        stroke="#F0C66C"
                        strokeWidth="2.5"
                        filter="url(#goldGlow)"
                      />
                    </g>
                  )}

                  {/* EIGHT MATRIKA DIRECTIONAL MARKERS ON THE BHUPURA */}
                  {BHUPURA_MATRIKA_PROFILES.map((matrika, idx) => {
                    const isFocusedMatrika =
                      (activeSequence === 'matrikas' && activeMatrikaIdx === idx) ||
                      (activeSequence === 'closing' && resonatedMatrikaIdx === idx);
                    const showMarker =
                      activeSequence === 'matrikas' || activeSequence === 'closing';

                    if (!showMarker) return null;

                    let labelDx = 0;
                    let labelDy = 0;
                    let anchor: 'middle' | 'start' | 'end' = 'middle';
                    if (matrika.labelPlacement === 'bottom') {
                      labelDy = 46;
                      anchor = 'middle';
                    } else if (matrika.labelPlacement === 'top') {
                      labelDy = -36;
                      anchor = 'middle';
                    } else if (matrika.labelPlacement === 'left') {
                      labelDx = -38;
                      labelDy = 5;
                      anchor = 'end';
                    } else if (matrika.labelPlacement === 'right') {
                      labelDx = 38;
                      labelDy = 5;
                      anchor = 'start';
                    } else if (matrika.labelPlacement === 'bottom-left') {
                      labelDx = -24;
                      labelDy = 36;
                      anchor = 'end';
                    } else if (matrika.labelPlacement === 'top-left') {
                      labelDx = -24;
                      labelDy = -24;
                      anchor = 'end';
                    } else if (matrika.labelPlacement === 'top-right') {
                      labelDx = 24;
                      labelDy = -24;
                      anchor = 'start';
                    } else if (matrika.labelPlacement === 'bottom-right') {
                      labelDx = 24;
                      labelDy = 36;
                      anchor = 'start';
                    }

                    return (
                      <g
                        key={matrika.number}
                        role="button"
                        tabIndex={0}
                        aria-label={t(
                          `${matrika.indexHeaderEn} — ${matrika.transliteration}`,
                          `${matrika.indexHeaderHi} — ${matrika.hindiName}`
                        )}
                        onClick={() => {
                          setIsPlayingTimeline(false);
                          if (activeSequence === 'closing') {
                            setResonatedMatrikaIdx(idx);
                          } else {
                            setActiveMatrikaIdx(idx);
                            setActiveSequence('matrikas');
                          }
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveMatrikaIdx(idx);
                            setActiveSequence('matrikas');
                          }
                        }}
                        className="cursor-pointer"
                        opacity={
                          activeSequence === 'closing'
                            ? resonatedMatrikaIdx === null || isFocusedMatrika
                              ? 1
                              : 0.55
                            : isFocusedMatrika
                              ? 1
                              : 0.42
                        }
                      >
                        {isFocusedMatrika && (
                          <circle
                            cx={matrika.markerX}
                            cy={matrika.markerY}
                            r="30"
                            fill="#E8792D"
                            fillOpacity="0.24"
                            stroke="#F0C66C"
                            strokeWidth="2"
                          />
                        )}

                        <circle
                          cx={matrika.markerX}
                          cy={matrika.markerY}
                          r={isFocusedMatrika ? '19' : '15'}
                          fill={isFocusedMatrika ? '#E8792D' : '#1A0D06'}
                          stroke={isFocusedMatrika ? '#F0C66C' : '#C99B48'}
                          strokeWidth={isFocusedMatrika ? '2.8' : '1.8'}
                          filter={isFocusedMatrika ? 'url(#goldGlow)' : undefined}
                        />

                        <text
                          x={matrika.markerX}
                          y={matrika.markerY + 5}
                          textAnchor="middle"
                          fill={isFocusedMatrika ? '#080503' : '#F0C66C'}
                          fontSize={isFocusedMatrika ? '15' : '13'}
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {matrika.number}
                        </text>

                        <text
                          x={matrika.markerX + labelDx}
                          y={matrika.markerY + labelDy}
                          textAnchor={anchor}
                          fill={isFocusedMatrika ? '#F0C66C' : '#F5DEAB'}
                          fontSize="15"
                          fontFamily="serif"
                          fontWeight="bold"
                        >
                          {t(
                            `${matrika.number} ${matrika.englishDirection} · ${matrika.transliteration}`,
                            `${matrika.number} ${matrika.hindiDirection} · ${matrika.hindiName}`
                          )}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </motion.div>

              {/* Bottom Caption Overlay Inside Yantra Frame */}
              <div className="absolute bottom-2.5 inset-x-3 z-20 flex items-center justify-between px-3 py-1.5 rounded bg-[#080503]/85 border border-[#C99B48]/30 text-[10px] font-mono text-[#D0C3AD]">
                <span>
                  {activeSequence === 'enclosures'
                    ? t(
                        `CLICK ANY RING OR BUTTON · ${currentAvarana.indexLabelEn}`,
                        `किसी भी वलय या बटन पर क्लिक करें · ${currentAvarana.indexLabel}`
                      )
                    : activeSequence === 'matrikas'
                      ? t(
                          `GATE ${currentMatrika.indexFraction} · ${currentMatrika.englishDirection.toUpperCase()}`,
                          `द्वार ${currentMatrika.indexFraction} · ${currentMatrika.hindiDirection}`
                        )
                      : t('SACRED GEOMETRY · ŚRĪ MERU CHAKRA', 'पवित्र ज्यामिति · श्री मेरु चक्र')}
                </span>
                <span className="text-[#F0C66C]">
                  {activeSequence === 'triangles'
                    ? t(
                        `${currentTriangleStep.cumulativeTotal} / 44 UNITS`,
                        `${currentTriangleStep.cumulativeTotal} / 44 इकाइयाँ`
                      )
                    : t('9 ĀVARAṆAS · 8 MĀTR̥KĀS', '9 आवरण · 8 मातृकाएँ')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols on lg): Synchronized Sequence Narrative, Single-Language Typography & Interactive Sub-Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {/* SEQUENCE A: OPENING & THREE LEVELS */}
              {activeSequence === 'opening' && (
                <motion.div
                  key={`seq-opening-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8792D]">
                      {t('SEQUENCE 01 · 00:00–00:09 · OPENING', 'अनुक्रम 01 · 00:00–00:09 · प्रस्तावना')}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setOpeningStep(0)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          openingStep === 0
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('00:00 · Śrī Meru Chakra', '00:00 · श्री मेरु चक्र')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpeningStep(1)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          openingStep === 1
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('00:03 · Three Levels', '00:03 · तीन स्तर')}
                      </button>
                    </div>
                  </div>

                  {openingStep === 0 ? (
                    <div className="py-5 text-center sm:text-left">
                      <h4 className="text-3xl sm:text-4xl font-serif font-bold text-[#F0C66C] tracking-wide">
                        {t('Śrī Meru Chakra — Mahameru', 'श्री मेरु चक्र — महामेरु')}
                      </h4>
                      <p className="mt-4 text-sm sm:text-[15px] font-serif text-[#F0EAE0]/90 leading-relaxed">
                        {t(
                          'The supreme geometric mandala of the Śrīvidyā tradition—constructed from an outer three-walled square sanctuary (Bhūpura), concentric sixteen-petal and eight-petal lotus rings, and nine interlocking triangles generating forty-three peripheral and central triangles around the dimensionless Bindu.',
                          'श्रीविद्या परंपरा का सर्वोच्च ज्यामितीय मण्डल—जो तीन प्राचीरों वाले वर्गाकार भूपुर, सोलह-दल एवं अष्ट-दल कमल वलयों, तथा नौ परस्पर प्रतिच्छेदी त्रिकोणों से निर्मित है, जो आयामहीन बिन्दु के चारों ओर तैंतालीस परिधीय एवं केंद्रीय त्रिकोणों की रचना करते हैं।'
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="py-4">
                      <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C] tracking-wide">
                        {t('One yantra — a symbol at three levels', 'एक यन्त्र · तीन स्तर')}
                      </h4>

                      {/* Three Levels Cards (Single-Language) */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-lg bg-[#080503]/80 border border-[#F0C66C]/50">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8792D]">
                            {t('LEVEL 01 · MICRO', 'स्तर 01 · सूक्ष्म')}
                          </span>
                          <div className="mt-1 font-serif text-lg font-bold text-[#F0C66C]">
                            {t('Atoms', 'अणु')}
                          </div>
                          <p className="mt-1 text-xs font-serif text-[#D0C3AD] leading-relaxed">
                            {t(
                              'Vibrational symmetry, nodal harmonic fields, and central nucleus-to-orbit ratios.',
                              'कंपनात्मक सममिति, निस्पंद अनुनादी क्षेत्र और केंद्रीय नाभिक-से-कक्षा का अनुपात।'
                            )}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#080503]/80 border border-[#C99B48]/40">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8792D]">
                            {t('LEVEL 02 · SOMATIC', 'स्तर 02 · देह')}
                          </span>
                          <div className="mt-1 font-serif text-lg font-bold text-[#F5DEAB]">
                            {t('Body', 'शरीर')}
                          </div>
                          <p className="mt-1 text-xs font-serif text-[#D0C3AD] leading-relaxed">
                            {t(
                              'Each geometric ring of the yantra mirrors an inner subtle center (chakra) and mental threshold.',
                              'यन्त्र का प्रत्येक ज्यामितीय वलय शरीर के भीतर एक सूक्ष्म चक्र और मानसिक दहलीज का दर्पण है।'
                            )}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#080503]/80 border border-[#C99B48]/40">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8792D]">
                            {t('LEVEL 03 · COSMIC', 'स्तर 03 · ब्रह्माण्डीय')}
                          </span>
                          <div className="mt-1 font-serif text-lg font-bold text-[#F5DEAB]">
                            {t('Cosmos', 'चेतना')}
                          </div>
                          <p className="mt-1 text-xs font-serif text-[#D0C3AD] leading-relaxed">
                            {t(
                              'From multiplicity at the outer perimeter to unified awareness at the central Bindu.',
                              'बाहरी परिधि की बहुलता से केंद्रीय बिन्दु की एकीकृत चेतना की ओर यात्रा।'
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-[#C99B48]/20 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#D0C3AD]/80">
                      {t('NEXT: Nine Enclosures (Outside to Inside)', 'आगे: नव आवरण (बाहर से भीतर की ओर)')}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSequence('enclosures');
                        setActiveAvaranaIdx(0);
                        setTimelineSec(13);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#E8792D]/20 border border-[#F0C66C]/60 text-xs font-mono text-[#F0C66C] hover:bg-[#E8792D]/35 transition-colors cursor-pointer"
                    >
                      {t('Enter Nine Enclosures', 'नव आवरण में प्रवेश करें')}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SEQUENCE B: NINE ENCLOSURES */}
              {activeSequence === 'enclosures' && (
                <motion.div
                  key={`seq-enclosures-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8792D]">
                        {t('NINE ENCLOSURES — OUTSIDE TO INSIDE', 'नव आवरण — बाहर से भीतर की ओर')}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-[#321708] border border-[#F0C66C]/45 font-mono text-xs text-[#F0C66C]">
                      {t(currentAvarana.indexLabelEn, currentAvarana.indexLabel)} ({currentAvarana.timeCue})
                    </span>
                  </div>

                  {/* Active Enclosure Primary Typography (Single-Language) */}
                  <div className="mt-4 p-4 rounded-lg bg-[#080503]/85 border border-[#F0C66C]/40">
                    <div className="font-mono text-xs tracking-[0.2em] text-[#E8792D] uppercase">
                      {t(currentAvarana.indexLabelEn, currentAvarana.indexLabel)}
                    </div>
                    <h4 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C]">
                      {t(currentAvarana.transliteration, currentAvarana.hindiName)}
                    </h4>
                    <p className="mt-1 text-base sm:text-lg font-serif italic text-[#F5DEAB]">
                      {t(currentAvarana.subtitleLine, currentAvarana.subtitleLineHi)}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm font-serif text-[#D0C3AD] leading-relaxed">
                      {t(currentAvarana.architecturalNote, currentAvarana.architecturalNoteHi)}
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-[#866334]/30 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#F5DEAB]/85">
                      <span>
                        {t('PRESIDING GROUP:', 'अधिष्ठात्री समूह:')}{' '}
                        {t(currentAvarana.yoginiGroup, currentAvarana.yoginiGroupHi)}
                      </span>
                      <span>
                        {t('GEOMETRY:', 'ज्यामिति:')}{' '}
                        {t(currentAvarana.geometrySummary, currentAvarana.geometrySummaryHi)}
                      </span>
                    </div>
                  </div>

                  {/* Interactive 9-Enclosure Selector Grid (1/9 to 9/9) */}
                  <div className="mt-4">
                    <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D0C3AD] mb-2">
                      {t('SELECT ENCLOSURE (OUTSIDE → BINDU):', 'आवरण चुनें (बाहर → बिन्दु):')}
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5">
                      {NINE_AVARANAS.map((av, idx) => {
                        const isSelected = activeAvaranaIdx === idx;
                        return (
                          <button
                            key={av.number}
                            type="button"
                            onClick={() => {
                              setIsPlayingTimeline(false);
                              setActiveAvaranaIdx(idx);
                              setTimelineSec(av.startSec);
                            }}
                            className={`px-2.5 py-2 rounded border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#6A2B0B]/85 border-[#F0C66C] text-[#F0C66C] shadow-[0_0_12px_rgba(240,198,108,0.25)]'
                                : 'bg-[#080503]/70 border-[#866334]/40 text-[#D0C3AD] hover:border-[#C99B48]'
                            }`}
                          >
                            <div className="font-mono text-[9px] text-[#E8792D] font-semibold">
                              {t(av.indexLabelEn, av.indexLabel)}
                            </div>
                            <div className="font-serif text-xs font-semibold text-[#F0EAE0] truncate">
                              {t(av.englishName, av.hindiName.replace(' चक्र', ''))}
                            </div>
                            <div className="font-mono text-[8.5px] text-[#D0C3AD]/80 truncate">
                              {t(av.geometrySummary, av.geometrySummaryHi)}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SEQUENCE C: FORTY-FOUR TRIANGLES */}
              {activeSequence === 'triangles' && (
                <motion.div
                  key={`seq-triangles-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8792D]">
                      {t('SEQUENCE 03 · 00:34–00:43 · TRIANGLE ACCUMULATION', 'अनुक्रम 03 · 00:34–00:43 · त्रिकोण संकलन')}
                    </span>
                    <span className="font-mono text-xs text-[#F0C66C]">
                      {t('TOTAL:', 'कुल:')} {currentTriangleStep.cumulativeTotal} / 44
                    </span>
                  </div>

                  <div className="mt-4 text-center sm:text-left">
                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C]">
                      {t('44 Triangles', '४४ त्रिकोण')}
                    </h4>

                    {/* Animated Additive Formula Box (Single-Language) */}
                    <div className="mt-3 p-4 rounded-lg bg-[#080503]/90 border border-[#F0C66C]/50 text-center">
                      <div className="font-mono text-lg sm:text-2xl font-bold tracking-wider text-[#F5DEAB]">
                        {currentTriangleStep.formulaDisplay}
                      </div>
                      <div className="mt-1 font-serif text-sm text-[#F0C66C]">
                        {t(currentTriangleStep.englishLabel, currentTriangleStep.hindiLabel)}
                      </div>
                    </div>

                    {/* Interactive Additive Formula Step Buttons */}
                    <div className="mt-3.5 grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                      {TRIANGLE_FORMULA_STEPS.map((st, idx) => (
                        <button
                          key={st.stepIndex}
                          type="button"
                          onClick={() => {
                            setIsPlayingTimeline(false);
                            setActiveTriangleStepIdx(idx);
                          }}
                          className={`py-2 px-1.5 rounded border font-mono text-[10px] text-center transition-all cursor-pointer ${
                            activeTriangleStepIdx === idx
                              ? 'bg-[#6A2B0B] border-[#F0C66C] text-[#F0C66C] font-bold'
                              : 'bg-[#080503]/70 border-[#866334]/40 text-[#D0C3AD] hover:border-[#C99B48]'
                          }`}
                        >
                          {idx === 0 ? '14' : idx === 5 ? '= 44' : `+${st.addedCount}`}
                        </button>
                      ))}
                    </div>

                    {/* Body Reflection Statement (Single-Language) */}
                    <div className="mt-4 p-4 rounded-lg bg-[#321708]/60 border-l-2 border-[#E8792D]">
                      <p className="text-base sm:text-lg font-serif font-semibold text-[#F0EAE0]">
                        {t(
                          'Each ring of the yantra mirrors a chakra in the body',
                          'हर वलय शरीर के एक चक्र का दर्पण है'
                        )}
                      </p>
                    </div>

                    {/* Editorial / Textual Verification Note */}
                    <p className="mt-3 text-[11px] font-serif text-[#D0C3AD]/80 leading-relaxed">
                      <strong className="text-[#F5DEAB] font-mono uppercase text-[9.5px] tracking-wider">
                        {t('Archival Note: ', 'अभिलेखीय टिप्पणी: ')}
                      </strong>
                      {t(
                        'Classical Śrīvidyā treatises enumerate 43 triangles formed by the 9 primary intersecting Śiva–Śakti triangles (14 + 10 + 10 + 8 + 1 = 43) plus the central Bindu (+ 1 = 44 focal units), presented visually as 14 + 10 + 10 + 8 + 1 + 1 = 44.',
                        'शास्त्रीय श्रीविद्या ग्रंथों में 9 प्राथमिक प्रतिच्छेदी शिव-शक्ति त्रिकोणों से निर्मित 43 त्रिकोणों (14 + 10 + 10 + 8 + 1 = 43) तथा केंद्रीय बिन्दु (+ 1 = 44 इकाइयाँ) की गणना की गई है, जिसे दृश्य रूप में 14 + 10 + 10 + 8 + 1 + 1 = 44 के रूप में प्रस्तुत किया गया है।'
                      )}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* SEQUENCE D: BHUPURA CLOSE-UP */}
              {activeSequence === 'bhupura' && (
                <motion.div
                  key={`seq-bhupura-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8792D]">
                      {t('SEQUENCE 04 · 00:44–00:49 · ARCHITECTURAL THRESHOLD', 'अनुक्रम 04 · 00:44–00:49 · स्थापत्य दहलीज')}
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => setBhupuraStep(0)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          bhupuraStep === 0
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('00:44 · Bhūpura', '00:44 · भूपुर')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setBhupuraStep(1)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          bhupuraStep === 1
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('00:47 · Outer Wall', '00:47 · बाहरी दीवार')}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C]">
                      {t('Bhūpura', 'भूपुर')}
                    </h4>
                    <p className="mt-1 text-base sm:text-lg font-serif italic text-[#F5DEAB]">
                      {t('Three walls · four gates · 28 Prakaṭa Yoginīs', 'तीन प्राचीर · चार द्वार · 28 प्रकट योगिनियाँ')}
                    </p>

                    <div className="mt-4 space-y-2.5">
                      <div
                        onClick={() => setBhupuraStep(1)}
                        className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                          bhupuraStep === 1
                            ? 'bg-[#321708]/90 border-[#F0C66C]'
                            : 'bg-[#080503]/80 border-[#C99B48]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-base font-bold text-[#F0C66C]">
                            {t('1. Outer Wall', '1. बाहरी दीवार')}
                          </span>
                          <span className="font-mono text-xs text-[#E8792D]">
                            {t('10 Siddhis', '10 सिद्धियाँ')}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-serif text-[#D0C3AD]">
                          {t(
                            'Aṇimā, Laghimā, Mahimā, Īśitva, Vaśitva, Prākāmya, Bhukti, Icchā, Prāpti, Sarvakāma — the ten attainment powers stationed along the outer perimeter.',
                            'अणिमा, लघिमा, महिमा, ईशित्व, वशित्व, प्राकाम्य, भुक्ति, इच्छा, प्राप्ति, सर्वकाम — बाहरी परिधि पर प्रतिष्ठित दस सिद्धियाँ।'
                          )}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#321708]/95 border border-[#E8792D]">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-base font-bold text-[#F0C66C]">
                            {t('2. Middle Wall (The 8 Gates)', '2. मध्य दीवार (8 द्वार)')}
                          </span>
                          <span className="font-mono text-xs text-[#F0C66C]">
                            {t('8 Ashta Matrikas', '8 अष्ट मातृकाएँ')}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-serif text-[#F0EAE0]">
                          {t(
                            "Brāhmī, Māheśvarī, Kaumārī, Vaiṣṇavī, Vārāhī, Māhendrī, Cāmuṇḍā, and Mahālakṣmī — guardians of the yantra's gates and the eight knots of the mind.",
                            'ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, माहेन्द्री, चामुण्डा और महालक्ष्मी — यन्त्र के द्वारपाल और मन की आठ ग्रन्थियाँ।'
                          )}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#080503]/80 border border-[#C99B48]/40">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-base font-bold text-[#F5DEAB]">
                            {t('3. Inner Wall', '3. भीतरी दीवार')}
                          </span>
                          <span className="font-mono text-xs text-[#D0C3AD]">
                            {t('10 Mudrā Śaktis', '10 मुद्रा शक्तियाँ')}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-serif text-[#D0C3AD]">
                          {t(
                            'Together the three walls house 10 + 8 + 10 = 28 Prakaṭa Yoginīs of the first enclosure (Trailokya Mohana Chakra).',
                            'तीनों प्राचीर मिलकर प्रथम आवरण (त्रैलोक्य मोहन चक्र) की 10 + 8 + 10 = 28 प्रकट योगिनियों का निवास हैं।'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SEQUENCE E: EIGHT MATRIKA PROFILES */}
              {activeSequence === 'matrikas' && (
                <motion.div
                  key={`seq-matrika-${currentMatrika.number}-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  {/* Section Intro Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8792D]">
                        {t('THE EIGHT MOTHERS OF THE BHUPURA', 'भूपुर की अष्ट मातृकाएँ')}
                      </span>
                      <p className="text-[11px] font-serif text-[#D0C3AD]">
                        {t(
                          "Guardians of the yantra's gates & eight knots of the mind",
                          'यन्त्र के द्वारपाल · और मन की आठ ग्रन्थियाँ'
                        )}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#6A2B0B] border border-[#F0C66C]/60 font-mono text-xs font-bold text-[#F0C66C]">
                      {t(currentMatrika.indexHeaderEn, currentMatrika.indexHeaderHi)}
                    </span>
                  </div>

                  {/* Active Matrika Profile Card (Single-Language) */}
                  <div className="mt-4 p-4 sm:p-5 rounded-lg bg-[#080503]/90 border border-[#F0C66C]/45">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.18em] text-[#E8792D]">
                        {t(currentMatrika.indexHeaderEn, currentMatrika.indexHeaderHi)}
                      </span>
                      <span className="font-mono text-[10px] text-[#D0C3AD]/75">
                        {currentMatrika.timeRange}
                      </span>
                    </div>

                    {/* Large Gold Name (Single-Language) */}
                    <h4 className="mt-1.5 text-3xl sm:text-4xl font-serif font-bold text-[#F0C66C] tracking-wide">
                      {t(currentMatrika.transliteration, currentMatrika.hindiName)}
                    </h4>

                    {/* Italic Descriptor Line */}
                    <p className="mt-1 text-sm sm:text-base font-serif italic text-[#D0C3AD]">
                      {t(currentMatrika.descriptorLine, currentMatrika.descriptorLineHi)}
                    </p>

                    {/* Interpretive Statement (Single-Language) */}
                    <div className="mt-3.5 pt-3 border-t border-[#866334]/30">
                      <p className="text-base sm:text-lg font-serif font-medium text-[#F0EAE0]">
                        {t(currentMatrika.englishStatement, currentMatrika.hindiStatement)}
                      </p>
                    </div>

                    {/* Nivarana (Obstacle Removed - Single-Language) */}
                    <div className="mt-3.5 p-3 rounded bg-[#321708]/75 border-l-2 border-[#E8792D]">
                      <p className="text-sm sm:text-[15px] font-serif font-semibold text-[#F5DEAB]">
                        {t(currentMatrika.nivaranaEnglish, currentMatrika.nivaranaHindi)}
                      </p>
                    </div>
                  </div>

                  {/* Direct 1/8 to 8/8 Bhupura Matrika Selector Buttons */}
                  <div className="mt-4">
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5">
                      {BHUPURA_MATRIKA_PROFILES.map((m, idx) => {
                        const isSelected = activeMatrikaIdx === idx;
                        return (
                          <button
                            key={m.number}
                            type="button"
                            onClick={() => {
                              setIsPlayingTimeline(false);
                              setActiveMatrikaIdx(idx);
                              setTimelineSec(m.startSec);
                            }}
                            className={`px-2 py-1.5 rounded border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#6A2B0B] border-[#F0C66C] text-[#F0C66C] shadow-[0_0_10px_rgba(240,198,108,0.25)]'
                                : 'bg-[#080503]/70 border-[#866334]/40 text-[#D0C3AD] hover:border-[#C99B48]'
                            }`}
                          >
                            <div className="font-mono text-[8.5px] text-[#E8792D] font-bold">
                              {m.indexFraction} · {t(m.englishDirection, m.hindiDirection)}
                            </div>
                            <div className="font-serif text-xs font-semibold text-[#F0EAE0] truncate">
                              {t(m.transliteration, m.hindiName)}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Cross-reference links to 3-Bit Cybernetic Profile & 64 Yogini */}
                  {(onOpenCyberneticMatrika || onOpenMatrix) && (
                    <div className="mt-3.5 pt-3 border-t border-[#C99B48]/20 flex flex-wrap items-center justify-between gap-2">
                      {onOpenCyberneticMatrika && (
                        <button
                          type="button"
                          onClick={() => onOpenCyberneticMatrika(currentMatrika.matrixRowIndex)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#F5DEAB] hover:text-[#F0C66C] underline decoration-dotted cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#E8792D]" />
                          {t(
                            `Inspect ${currentMatrika.transliteration} in 3-Bit Symbolic Profile View`,
                            `3-बिट प्रतीकात्मक प्रोफ़ाइल दृश्य में ${currentMatrika.hindiName} का निरीक्षण करें`
                          )}
                        </button>
                      )}
                      {onOpenMatrix && (
                        <button
                          type="button"
                          onClick={onOpenMatrix}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D0C3AD] hover:text-[#F0C66C] cursor-pointer"
                        >
                          <Layers className="w-3.5 h-3.5 text-[#C99B48]" />
                          {t('64 Yogini', '64 योगिनी')}
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* SEQUENCE F: WORSHIP LAYOUT & CLOSING */}
              {activeSequence === 'closing' && (
                <motion.div
                  key={`seq-closing-${lang}`}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#1A0D06]/90 border border-[#C99B48]/45 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#C99B48]/25">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8792D]">
                      {t('SEQUENCE 06 · 01:30–01:41 · RITUAL INTEGRITY & CLOSING', 'अनुक्रम 06 · 01:30–01:41 · अनुष्ठानिक पूर्णता एवं समापन')}
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => setClosingStep(0)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          closingStep === 0
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('Panchamrita Abhisheka', 'पञ्चामृत अभिषेक')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setClosingStep(1)}
                        className={`px-2 py-0.5 rounded text-[9.5px] font-mono cursor-pointer ${
                          closingStep === 1
                            ? 'bg-[#E8792D]/25 border border-[#F0C66C] text-[#F0C66C]'
                            : 'bg-[#080503]/60 border border-[#866334]/40 text-[#D0C3AD]'
                        }`}
                      >
                        {t('Ritual of Focus', 'एकाग्रता अनुष्ठान')}
                      </button>
                    </div>
                  </div>

                  {closingStep === 0 ? (
                    <div className="mt-4">
                      <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C]">
                        {t('Worshipped with Panchamrita — before entering the inner rings', 'पञ्चामृत अभिषेक')}
                      </h4>

                      <div className="mt-3.5 p-4 rounded-lg bg-[#080503]/85 border border-[#F0C66C]/40">
                        <p className="text-base sm:text-lg font-serif text-[#F0EAE0]">
                          {t(
                            'Without honoring the eight Matrikas, the journey into the Shri Yantra is incomplete',
                            'आठ मातृकाओं की वन्दना के बिना श्री यन्त्र की यात्रा अधूरी है'
                          )}
                        </p>
                      </div>

                      <div className="mt-3.5">
                        <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#F5DEAB] mb-2">
                          {t('ALL 8 BHŪPURA GATES (CLICK ANY MARKER TO INSPECT):', 'सभी 8 भूपुर द्वार (निरीक्षण के लिए किसी भी द्वार पर क्लिक करें):')}
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                          {BHUPURA_MATRIKA_PROFILES.map((m, idx) => (
                            <button
                              key={m.number}
                              type="button"
                              onClick={() => {
                                setActiveMatrikaIdx(idx);
                                setActiveSequence('matrikas');
                              }}
                              className="p-2 rounded bg-[#080503]/75 border border-[#C99B48]/40 hover:border-[#F0C66C] text-left transition-colors cursor-pointer"
                            >
                              <div className="font-mono text-[9px] text-[#E8792D]">
                                {m.number} · {t(m.englishDirection, m.hindiDirection)}
                              </div>
                              <div className="font-serif text-xs font-bold text-[#F0C66C]">
                                {t(m.transliteration, m.hindiName)}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <div className="text-center p-4 rounded-lg bg-[#080503]/90 border border-[#F0C66C]/45">
                        <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#F0C66C]">
                          {t('A Ritual of Focus', 'एकाग्रता अनुष्ठान')}
                        </h4>

                        <div className="my-3 h-px w-24 mx-auto bg-[#C99B48]/45" />

                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D0C3AD]">
                          {t('From the forthcoming book', 'आगामी पुस्तक से')}
                        </p>
                        <p className="mt-1 text-xl sm:text-2xl font-serif font-bold text-[#F5DEAB]">
                          {t('A Path Within', 'अ पाथ विदिन')}
                        </p>
                      </div>

                      {/* Interactive Resonance Prompt (Single-Language) */}
                      <div className="mt-4 p-4 rounded-lg bg-[#321708]/65 border border-[#C99B48]/40">
                        <div className="text-center">
                          <p className="text-base sm:text-lg font-serif font-semibold text-[#F0EAE0]">
                            {t('Which Matrika resonated with you?', 'कौन सी मातृका ने आपको छुआ?')}
                          </p>
                          <p className="mt-1 font-mono text-[10px] text-[#F5DEAB]">
                            {t('Choose from 1–8 and begin the journey within', '1–8 में से चुनें · और भीतर की यात्रा शुरू करें')}
                          </p>
                        </div>

                        <div className="mt-3 grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                          {BHUPURA_MATRIKA_PROFILES.map((m, idx) => {
                            const isChosen = resonatedMatrikaIdx === idx;
                            return (
                              <button
                                key={m.number}
                                type="button"
                                onClick={() => setResonatedMatrikaIdx(idx)}
                                className={`py-2 px-1 rounded border text-center transition-all cursor-pointer ${
                                  isChosen
                                    ? 'bg-[#E8792D] border-[#F0C66C] text-[#080503] font-bold shadow-[0_0_12px_rgba(232,121,45,0.45)]'
                                    : 'bg-[#080503]/80 border-[#C99B48]/40 text-[#F0C66C] hover:border-[#F0C66C]'
                                }`}
                              >
                                <div className="font-mono text-xs font-bold">{m.number}</div>
                                <div
                                  className={`font-serif text-[10px] truncate ${
                                    isChosen ? 'text-[#080503]' : 'text-[#D0C3AD]'
                                  }`}
                                >
                                  {t(m.transliteration, m.hindiName)}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {resonatedMatrikaIdx !== null && (
                          <div className="mt-3 p-3 rounded bg-[#080503]/90 border border-[#F0C66C]/50 text-center">
                            <div className="font-serif text-base font-bold text-[#F0C66C]">
                              {t(
                                `${BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].indexHeaderEn} · ${BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].transliteration}`,
                                `${BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].indexHeaderHi} · ${BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].hindiName}`
                              )}
                            </div>
                            <p className="mt-1 text-xs font-serif text-[#F0EAE0]">
                              “
                              {t(
                                BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].englishStatement,
                                BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].hindiStatement
                              )}
                              ”
                            </p>
                            <p className="mt-1 text-[11px] font-mono text-[#E8792D]">
                              {t(
                                BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].nivaranaEnglish,
                                BHUPURA_MATRIKA_PROFILES[resonatedMatrikaIdx].nivaranaHindi
                              )}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Step Navigation Bar */}
            <div className="mt-4 pt-3 border-t border-[#C99B48]/25 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleStepPrev}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1A0D06] border border-[#C99B48]/50 text-xs font-mono text-[#F0EAE0] hover:border-[#F0C66C] hover:text-[#F0C66C] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  {t('Prev Step', 'पिछला चरण')}
                </button>
                <button
                  type="button"
                  onClick={handleStepNext}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#6A2B0B]/85 border border-[#F0C66C]/70 text-xs font-mono text-[#F0C66C] hover:bg-[#E8792D]/35 transition-colors cursor-pointer"
                >
                  {t('Next Step', 'अगला चरण')}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-right">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#D0C3AD]/80">
                  {t('FORTHCOMING BOOK · A PATH WITHIN · RAM ASHOK KUMAR', 'आगामी पुस्तक · अ पाथ विदिन · राम अशोक कुमार')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
