import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MatrikaVisualizationType } from '../data/ashtaResearchData';
import { useLanguage } from '../context/LanguageContext';

interface VisualizationProps {
  type: MatrikaVisualizationType;
  accentColor: string;
}

/**
 * 000 — BRAHMANI: The Genesis Compiler
 */
export function GenesisSpiral({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const spiralArms = [0, 120, 240];
  const orbitalParticles = Array.from({ length: 18 }, (_, i) => {
    const ring = (i % 3) + 1;
    const radius = ring * 26 + (i % 2) * 8;
    const angle = (i * 20 * Math.PI) / 180;
    return {
      id: i,
      cx: 150 + Math.cos(angle) * radius,
      cy: 130 + Math.sin(angle) * radius,
      r: i % 4 === 0 ? 2.6 : 1.7,
      delay: (i * 0.18) % 2.4
    };
  });

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 260"
        className="w-full h-full max-w-[320px] overflow-visible"
        role="img"
        aria-label={t('Genesis spiral particle visualization for Brahmani', 'ब्रह्माणी के लिए उत्पत्ति सर्पिल कण दृश्य')}
      >
        <defs>
          <radialGradient id="brahmaniOriginGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.7" />
            <stop offset="45%" stopColor={accentColor} stopOpacity="0.18" />
            <stop offset="100%" stopColor="#030D32" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="150"
          cy="130"
          r="92"
          fill="url(#brahmaniOriginGlow)"
          animate={
            shouldReduceMotion
              ? { opacity: 0.85, scale: 1 }
              : { opacity: [0.55, 0.95, 0.55], scale: [0.92, 1.06, 0.92] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ transformOrigin: '150px 130px' }}
        />

        {[28, 54, 80, 102].map((radius, idx) => (
          <circle
            key={radius}
            cx="150"
            cy="130"
            r={radius}
            fill="none"
            stroke={accentColor}
            strokeWidth={idx === 1 ? '0.9' : '0.6'}
            strokeDasharray={idx % 2 === 0 ? '3 4' : 'none'}
            opacity={0.22 + idx * 0.06}
          />
        ))}

        <g
          className={shouldReduceMotion ? '' : 'origin-[150px_130px] animate-[spin_28s_linear_infinite]'}
          style={{ transformOrigin: '150px 130px' }}
        >
          {spiralArms.map(offsetDeg => {
            const points: string[] = [];
            for (let tStep = 0; tStep <= 40; tStep++) {
              const progress = tStep / 40;
              const angle = ((offsetDeg + progress * 260) * Math.PI) / 180;
              const r = 6 + progress * 94;
              const x = 150 + Math.cos(angle) * r;
              const y = 130 + Math.sin(angle) * r;
              points.push(`${tStep === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
            }
            return (
              <path
                key={offsetDeg}
                d={points.join(' ')}
                fill="none"
                stroke={accentColor}
                strokeWidth="1.2"
                strokeDasharray="2 3"
                opacity="0.55"
              />
            );
          })}

          {orbitalParticles.map(p => (
            <motion.circle
              key={p.id}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={accentColor}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.85 }
                  : { opacity: [0.3, 1, 0.3], scale: [0.85, 1.25, 0.85] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 2.8, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }
              }
            />
          ))}
        </g>

        <g
          className={
            shouldReduceMotion ? '' : 'origin-[150px_130px] animate-[spin_16s_linear_infinite_reverse]'
          }
          style={{ transformOrigin: '150px 130px' }}
        >
          <circle
            cx="150"
            cy="130"
            r="16"
            fill="none"
            stroke="#F3F2F1"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            opacity="0.7"
          />
        </g>

        <circle cx="150" cy="130" r="9" fill={accentColor} opacity="0.3" />
        <circle cx="150" cy="130" r="4.5" fill="#F3F2F1" stroke={accentColor} strokeWidth="1.5" />

        <text
          x="150"
          y="248"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.6"
          opacity="0.9"
        >
          {t('ORIGIN STATE: ∅ → ORGANIZED EMERGENCE', 'उत्पत्ति अवस्था: ∅ → सुव्यवस्थित उद्भव')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 001 — MAHESHWARI: The Standing Wave
 */
export function StandingWaveGraph({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let frameId: number;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      setPhase(elapsed * 2.6);
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldReduceMotion]);

  const xStart = 28;
  const xEnd = 272;
  const width = xEnd - xStart;
  const midY = 122;
  const amp = 48 * Math.cos(shouldReduceMotion ? 0.35 : phase);
  const oppAmp = -amp * 0.65;

  const buildStandingPath = (currentAmp: number) => {
    const pts: string[] = [];
    const steps = 72;
    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      const x = xStart + ratio * width;
      const y = midY + Math.sin(ratio * 3 * Math.PI) * currentAmp;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const envUpper = buildStandingPath(48);
  const envLower = buildStandingPath(-48);
  const activeWave = buildStandingPath(amp);
  const secondaryWave = buildStandingPath(oppAmp);

  const nodePositions = [0, 1 / 3, 2 / 3, 1].map(r => xStart + r * width);

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[330px] overflow-visible"
        role="img"
        aria-label={t('Standing wave harmonic visualization with fixed nodes for Maheshwari', 'माहेश्वरी के लिए स्थिर निस्पंद बिंदुओं वाला अप्रगामी तरंग दृश्य')}
      >
        <defs>
          <filter id="violetWaveGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          x1={xStart}
          y1={midY}
          x2={xEnd}
          y2={midY}
          stroke="#526078"
          strokeWidth="0.8"
          strokeDasharray="3 3"
          opacity="0.55"
        />

        <path
          d={envUpper}
          fill="none"
          stroke={accentColor}
          strokeWidth="0.9"
          strokeDasharray="3 4"
          opacity="0.32"
        />
        <path
          d={envLower}
          fill="none"
          stroke={accentColor}
          strokeWidth="0.9"
          strokeDasharray="3 4"
          opacity="0.32"
        />

        <path
          d={secondaryWave}
          fill="none"
          stroke={accentColor}
          strokeWidth="1.2"
          opacity="0.42"
        />

        <path
          d={activeWave}
          fill="none"
          stroke={accentColor}
          strokeWidth="2.4"
          filter="url(#violetWaveGlow)"
        />

        {nodePositions.map((nx, idx) => (
          <g key={idx}>
            <circle cx={nx} cy={midY} r="6.5" fill={accentColor} opacity="0.22" />
            <circle
              cx={nx}
              cy={midY}
              r="3.4"
              fill="#F3F2F1"
              stroke={accentColor}
              strokeWidth="1.5"
            />
            <text
              x={nx}
              y={midY + 18}
              textAnchor="middle"
              fill="#A6AFBF"
              fontSize="7.5"
              fontFamily="monospace"
            >
              {idx === 0 || idx === 3 ? t('FIXED', 'स्थिर') : `N${idx}`}
            </text>
          </g>
        ))}

        <text
          x="150"
          y="236"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          {t('RESONANT ORBIT · 4 FIXED NODAL POINTS', 'अनुनादी कक्षा · 4 स्थिर निस्पंद बिंदु')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 010 — KAUMARI: The Ignition Thrust
 */
export function IgnitionGraph({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const risingParticles = [
    { id: 1, x: 138, delay: 0, dur: 2.2 },
    { id: 2, x: 150, delay: 0.4, dur: 1.9 },
    { id: 3, x: 162, delay: 0.8, dur: 2.4 },
    { id: 4, x: 144, delay: 1.2, dur: 2.0 },
    { id: 5, x: 156, delay: 1.5, dur: 2.1 },
    { id: 6, x: 132, delay: 0.6, dur: 2.5 },
    { id: 7, x: 168, delay: 1.0, dur: 2.3 }
  ];

  const baselineSpikePath =
    'M 34 192 L 95 192 L 112 192 L 122 185 L 130 198 L 138 172 L 145 204 L 150 138 L 155 202 L 162 176 L 170 196 L 178 188 L 188 192 L 266 192';

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[320px] overflow-visible"
        role="img"
        aria-label={t('Vertical ignition thrust visualization for Kaumari', 'कौमारी के लिए ऊर्ध्व प्रज्वलन आवेग दृश्य')}
      >
        <defs>
          <radialGradient id="kaumariThrustGlow" cx="50%" cy="72%" r="55%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.65" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.16" />
            <stop offset="100%" stopColor="#030D32" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="kaumariConeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.55" />
            <stop offset="65%" stopColor={accentColor} stopOpacity="0.14" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="150" cy="165" r="95" fill="url(#kaumariThrustGlow)" />

        <motion.polygon
          points="150,192 106,42 194,42"
          fill="url(#kaumariConeGrad)"
          animate={
            shouldReduceMotion
              ? { opacity: 0.75 }
              : { opacity: [0.45, 0.88, 0.45], scaleX: [0.94, 1.05, 0.94] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ transformOrigin: '150px 192px' }}
        />

        <motion.line
          x1="150"
          y1="192"
          x2="150"
          y2="30"
          stroke="#F3F2F1"
          strokeWidth="2.8"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${accentColor})` }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.95 }
              : { opacity: [0.65, 1, 0.65], strokeWidth: [2.2, 3.4, 2.2] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 2.0, repeat: Infinity, ease: 'easeInOut' }
          }
        />

        {risingParticles.map(p => (
          <motion.circle
            key={p.id}
            cx={p.x}
            cy={185}
            r="2.2"
            fill="#F7D57A"
            animate={
              shouldReduceMotion
                ? { cy: 95, opacity: 0.7 }
                : { cy: [188, 42], opacity: [0, 1, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeOut' }
            }
          />
        ))}

        <line
          x1="26"
          y1="192"
          x2="274"
          y2="192"
          stroke="#526078"
          strokeWidth="0.75"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        <motion.path
          d={baselineSpikePath}
          fill="none"
          stroke={accentColor}
          strokeWidth="1.8"
          animate={
            shouldReduceMotion ? { opacity: 0.9 } : { opacity: [0.65, 1, 0.65] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
          }
        />

        <circle cx="150" cy="192" r="9" fill={accentColor} opacity="0.35" />
        <circle cx="150" cy="192" r="4.5" fill="#F3F2F1" stroke={accentColor} strokeWidth="1.5" />

        <text
          x="150"
          y="236"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          {t('DIRECTED IMPULSE · Δp INITIATION VECTOR', 'निर्देशित आवेग · Δp प्रारंभन सदिश')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 011 — VAISHNAVI: The Homeostat
 */
export function HomeostatGraph({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const x0 = 34;
  const x1 = 272;
  const width = x1 - x0;
  const setpointY = 128;

  const pts: string[] = [];
  const steps = 80;
  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    const x = x0 + ratio * width;
    const envelope = Math.exp(-3.6 * ratio);
    const oscillation = Math.cos(ratio * 4.2 * Math.PI);
    const y = setpointY - envelope * oscillation * 64;
    pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const pidPath = pts.join(' ');

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[330px] overflow-visible"
        role="img"
        aria-label={t('PID negative-feedback control system convergence graph for Vaishnavi', 'वैष्णवी के लिए पीआईडी ऋणात्मक-प्रतिपुष्टि संतुलन ग्राफ़')}
      >
        <rect
          x="34"
          y="42"
          width="238"
          height="160"
          rx="4"
          fill="#070A16"
          fillOpacity="0.65"
          stroke="#526078"
          strokeWidth="0.9"
          opacity="0.65"
        />

        {[74, 101, 155, 182].map(gy => (
          <line
            key={gy}
            x1="34"
            y1={gy}
            x2="272"
            y2={gy}
            stroke="#526078"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            opacity="0.28"
          />
        ))}

        <line
          x1="34"
          y1={setpointY}
          x2="272"
          y2={setpointY}
          stroke="#A855F7"
          strokeWidth="1.3"
          strokeDasharray="5 3"
          opacity="0.85"
        />
        <text
          x="42"
          y={setpointY - 6}
          fill="#C084FC"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1"
        >
          {t('SETPOINT (TARGET EQUILIBRIUM)', 'लक्ष्य बिंदु (साम्यावस्था)')}
        </text>

        <motion.path
          d={pidPath}
          fill="none"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 6px ${accentColor}80)` }}
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0.15 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: [0.15, 1, 1], opacity: [0.75, 1, 0.85] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }
          }
        />

        <text
          x="52"
          y="62"
          fill={accentColor}
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1"
        >
          {t('RESPONSE u(t) · OVERSHOOT → DAMPING', 'प्रतिक्रिया u(t) · दोलन → अवमंदन')}
        </text>

        <motion.circle
          cx="264"
          cy={setpointY}
          r="6.5"
          fill={accentColor}
          animate={
            shouldReduceMotion
              ? { opacity: 0.4 }
              : { opacity: [0.15, 0.65, 0.15], scale: [0.85, 1.3, 0.85] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <circle cx="264" cy={setpointY} r="3" fill="#F3F2F1" stroke={accentColor} strokeWidth="1.2" />

        <text
          x="150"
          y="232"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.4"
        >
          {t('NEGATIVE FEEDBACK LOOP · e(t) → 0', 'ऋणात्मक प्रतिपुष्टि चक्र · e(t) → 0')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 100 — VARAHI: The Tectonic Uplift
 */
export function TectonicMesh({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [upliftFactor, setUpliftFactor] = useState(0.85);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let frameId: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const factor = 0.68 + 0.32 * Math.sin(elapsed * 1.6);
      setUpliftFactor(factor);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [shouldReduceMotion]);

  const gridSize = 9;
  const projectPoint = (gx: number, gy: number) => {
    const nx = (gx / (gridSize - 1)) * 2 - 1;
    const ny = (gy / (gridSize - 1)) * 2 - 1;
    const distSq = nx * nx + ny * ny;
    const elevation = Math.exp(-distSq * 2.4) * 52 * upliftFactor;

    const isoX = 150 + (nx - ny) * 62;
    const isoY = 148 + (nx + ny) * 28 - elevation;
    return { x: isoX, y: isoY, elevation };
  };

  const rows: string[] = [];
  const cols: string[] = [];
  const peakNodes: Array<{ x: number; y: number; elevation: number }> = [];

  for (let r = 0; r < gridSize; r++) {
    const rowPts: string[] = [];
    for (let c = 0; c < gridSize; c++) {
      const pt = projectPoint(c, r);
      rowPts.push(`${c === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`);
      if (r >= 2 && r <= 6 && c >= 2 && c <= 6) {
        peakNodes.push(pt);
      }
    }
    rows.push(rowPts.join(' '));
  }

  for (let c = 0; c < gridSize; c++) {
    const colPts: string[] = [];
    for (let r = 0; r < gridSize; r++) {
      const pt = projectPoint(c, r);
      colPts.push(`${r === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`);
    }
    cols.push(colPts.join(' '));
  }

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[330px] overflow-visible"
        role="img"
        aria-label={t('Three-dimensional tectonic surface mesh uplift visualization for Varahi', 'वाराही के लिए त्रि-आयामी भू-उत्थान जाल दृश्य')}
      >
        <defs>
          <radialGradient id="varahiCentralGlow" cx="50%" cy="48%" r="48%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.55" />
            <stop offset="60%" stopColor={accentColor} stopOpacity="0.12" />
            <stop offset="100%" stopColor="#030D32" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="150" cy="128" r="88" fill="url(#varahiCentralGlow)" />

        {rows.map((d, idx) => (
          <path
            key={`row-${idx}`}
            d={d}
            fill="none"
            stroke={idx >= 3 && idx <= 5 ? '#FDE047' : accentColor}
            strokeWidth={idx === 4 ? '1.5' : '0.9'}
            opacity={idx >= 2 && idx <= 6 ? 0.85 : 0.42}
          />
        ))}

        {cols.map((d, idx) => (
          <path
            key={`col-${idx}`}
            d={d}
            fill="none"
            stroke={idx >= 3 && idx <= 5 ? '#FDE047' : accentColor}
            strokeWidth={idx === 4 ? '1.5' : '0.9'}
            opacity={idx >= 2 && idx <= 6 ? 0.85 : 0.42}
          />
        ))}

        {peakNodes.map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={pt.elevation > 32 ? 2.2 : 1.3}
            fill={pt.elevation > 32 ? '#FEF08A' : accentColor}
            opacity="0.9"
          />
        ))}

        <text
          x="150"
          y="236"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          {t('SUBMERGED PLANE → TECTONIC EMERGENCE', 'जलमग्न तल → भू-उत्थान उद्भव')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 101 — INDRANI: The Lightning Bus
 */
export function LightningWaveGraph({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let frameId: number;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      setPhase(elapsed * 2.8);
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldReduceMotion]);

  const x0 = 28;
  const x1 = 272;
  const width = x1 - x0;
  const skyY = 54;
  const groundY = 182;
  const midY = (skyY + groundY) / 2;

  const buildSignalWave = (phaseShift: number, amp: number, freq: number) => {
    const pts: string[] = [];
    const steps = 76;
    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      const x = x0 + ratio * width;
      const y = midY + Math.sin(ratio * freq * Math.PI * 2 + phase + phaseShift) * amp;
      pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(' ');
  };

  const waveA = buildSignalWave(0, 32, 2.5);
  const waveB = buildSignalWave(Math.PI * 0.65, 22, 2.5);

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[330px] overflow-visible"
        role="img"
        aria-label={t('Dual electrical signal waveform between Sky Ionosphere and Ground Earth at 7.83 Hz for Indrani', 'इन्द्राणी के लिए आकाश-आयनमंडल और पृथ्वी के बीच 7.83 Hz विद्युत तरंग दृश्य')}
      >
        <line
          x1={x0}
          y1={skyY}
          x2={x1}
          y2={skyY}
          stroke={accentColor}
          strokeWidth="1.2"
          opacity="0.75"
        />
        <text
          x={x0}
          y={skyY - 8}
          fill={accentColor}
          fontSize="8.5"
          fontFamily="monospace"
          letterSpacing="1.4"
        >
          {t('SKY · IONOSPHERE (+)', 'आकाश · आयनमंडल (+)')}
        </text>

        <line
          x1={x0}
          y1={groundY}
          x2={x1}
          y2={groundY}
          stroke="#526078"
          strokeWidth="1.2"
          opacity="0.85"
        />
        <text
          x={x0}
          y={groundY + 14}
          fill="#A6AFBF"
          fontSize="8.5"
          fontFamily="monospace"
          letterSpacing="1.4"
        >
          {t('GROUND · EARTH (0V)', 'भूमि · पृथ्वी (0V)')}
        </text>

        {[88, 150, 212].map((lx, idx) => (
          <motion.line
            key={lx}
            x1={lx}
            y1={skyY}
            x2={lx}
            y2={groundY}
            stroke="#E0F2FE"
            strokeWidth="1.1"
            strokeDasharray="3 4"
            animate={
              shouldReduceMotion
                ? { opacity: 0.35 }
                : { opacity: [0.1, 0.75, 0.1] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 1.9, delay: idx * 0.55, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        ))}

        <path
          d={waveB}
          fill="none"
          stroke="#7DD3FC"
          strokeWidth="1.3"
          strokeDasharray="4 2"
          opacity="0.55"
        />

        <path
          d={waveA}
          fill="none"
          stroke={accentColor}
          strokeWidth="2.3"
          style={{ filter: `drop-shadow(0 0 6px ${accentColor}90)` }}
        />

        <rect
          x="68"
          y="208"
          width="164"
          height="24"
          rx="12"
          fill="#070A16"
          stroke={accentColor}
          strokeWidth="0.9"
          opacity="0.9"
        />
        <text
          x="150"
          y="224"
          textAnchor="middle"
          fill={accentColor}
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          {t('f₀ = 7.83 Hz · CAVITY BUS', 'f₀ = 7.83 Hz · अनुनाद पथ')}
        </text>
      </svg>
    </div>
  );
}

/**
 * 110 — CHAMUNDA: The Garbage Collector
 */
export function GarbageCollectorGrid({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [cycleStep, setCycleStep] = useState(3);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCycleStep(prev => (prev + 1) % 6);
    }, 950);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const cells = Array.from({ length: 24 }, (_, idx) => {
    const col = idx % 6;
    const row = Math.floor(idx / 6);
    const phaseVal = (idx * 7 + cycleStep * 5) % 10;
    const isReclaimed = phaseVal < 3 + (cycleStep % 3);
    const isCollecting = phaseVal === 3 + (cycleStep % 3);
    return {
      idx,
      col,
      row,
      isReclaimed,
      isCollecting
    };
  });

  const reclaimedCount = cells.filter(c => c.isReclaimed).length;
  const simulatedPercent = Math.round((reclaimedCount / cells.length) * 100);

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[320px] overflow-visible"
        role="img"
        aria-label={t('Memory reclamation and particle garbage collection visualization for Chamunda', 'चामुण्डा के लिए स्मृति पुनर्चक्रण और कण विघटन दृश्य')}
      >
        <rect
          x="52"
          y="28"
          width="196"
          height="132"
          rx="6"
          fill="#070A16"
          fillOpacity="0.7"
          stroke="#365314"
          strokeWidth="1"
        />

        {cells.map(cell => {
          const x = 68 + cell.col * 28;
          const y = 40 + cell.row * 28;
          const targetY = cell.isCollecting ? 156 : y;
          const fill = cell.isCollecting
            ? '#EAB308'
            : cell.isReclaimed
              ? accentColor
              : '#365314';
          const opacity = cell.isReclaimed ? 0.92 : cell.isCollecting ? 0.85 : 0.25;

          return (
            <motion.rect
              key={cell.idx}
              x={x}
              y={shouldReduceMotion ? y : targetY}
              width="18"
              height="18"
              rx="2.5"
              fill={fill}
              opacity={opacity}
              stroke={cell.isReclaimed ? '#ECFCCB' : 'none'}
              strokeWidth={cell.isReclaimed ? '0.6' : '0'}
              animate={
                shouldReduceMotion
                  ? { opacity }
                  : {
                      y: targetY,
                      opacity,
                      scale: cell.isCollecting ? 0.72 : 1
                    }
              }
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          );
        })}

        <rect
          x="52"
          y="170"
          width="196"
          height="16"
          rx="3"
          fill="#1A2E05"
          stroke={accentColor}
          strokeWidth="0.8"
          opacity="0.85"
        />
        <text
          x="150"
          y="181"
          textAnchor="middle"
          fill="#ECFCCB"
          fontSize="7.5"
          fontFamily="monospace"
          letterSpacing="1.4"
        >
          {t(`RECLAMATION BUFFER · GC CYCLE ${cycleStep + 1}/6`, `पुनर्चक्रण बफर · चक्र ${cycleStep + 1}/6`)}
        </text>

        <rect
          x="52"
          y="198"
          width="196"
          height="8"
          rx="4"
          fill="#070A16"
          stroke="#365314"
          strokeWidth="0.8"
        />
        <motion.rect
          x="52"
          y="198"
          height="8"
          rx="4"
          fill={accentColor}
          animate={{ width: `${(simulatedPercent / 100) * 196}px` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        <text
          x="150"
          y="226"
          textAnchor="middle"
          fill={accentColor}
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
          letterSpacing="1.4"
        >
          {t(
            `RECLAIMED BLOCKS: ${simulatedPercent}% (${reclaimedCount}/24 CELLS)`,
            `पुनर्प्राप्त खंड: ${simulatedPercent}% (${reclaimedCount}/24 कोष्ठक)`
          )}
        </text>
      </svg>
    </div>
  );
}

/**
 * 111 — MAHALAKSHMI: The Solid-State Render
 */
export function SolidStateRender({ accentColor }: { accentColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const ovalParticles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const r = 82;
    return {
      id: i,
      cx: 150 + Math.cos(angle) * r,
      cy: 124 + Math.sin(angle) * r,
      rot: i * 30 + 90
    };
  });

  const hexTriangleUp = [0, 120, 240]
    .map(deg => {
      const rad = ((deg - 90) * Math.PI) / 180;
      return `${(150 + Math.cos(rad) * 62).toFixed(1)},${(124 + Math.sin(rad) * 62).toFixed(1)}`;
    })
    .join(' ');

  const hexTriangleDown = [60, 180, 300]
    .map(deg => {
      const rad = ((deg - 90) * Math.PI) / 180;
      return `${(150 + Math.cos(rad) * 62).toFixed(1)},${(124 + Math.sin(rad) * 62).toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="relative w-full h-60 sm:h-64 flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 300 250"
        className="w-full h-full max-w-[320px] overflow-visible"
        role="img"
        aria-label={t('Golden geometric convergence and stabilization visualization for Mahalakshmi', 'महालक्ष्मी के लिए स्वर्णिम ज्यामितीय अभिसरण और स्थिरीकरण दृश्य')}
      >
        <defs>
          <radialGradient id="mahalakshmiAmberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.75" />
            <stop offset="48%" stopColor="#F59E0B" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#030D32" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="150" cy="124" r="98" fill="url(#mahalakshmiAmberGlow)" />

        {[94, 82, 62, 40].map((r, i) => (
          <circle
            key={r}
            cx="150"
            cy="124"
            r={r}
            fill="none"
            stroke={accentColor}
            strokeWidth={i === 2 ? '1.1' : '0.65'}
            strokeDasharray={i === 0 ? '3 3' : 'none'}
            opacity={0.3 + i * 0.14}
          />
        ))}

        {Array.from({ length: 12 }, (_, i) => {
          const rad = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={150 + Math.cos(rad) * 24}
              y1={124 + Math.sin(rad) * 24}
              x2={150 + Math.cos(rad) * 94}
              y2={124 + Math.sin(rad) * 94}
              stroke={accentColor}
              strokeWidth="0.5"
              opacity="0.28"
            />
          );
        })}

        <g
          className={
            shouldReduceMotion ? '' : 'origin-[150px_124px] animate-[spin_48s_linear_infinite]'
          }
          style={{ transformOrigin: '150px 124px' }}
        >
          <polygon
            points={hexTriangleUp}
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            opacity="0.88"
          />
          <polygon
            points={hexTriangleDown}
            fill="none"
            stroke="#FEF08A"
            strokeWidth="1.5"
            opacity="0.88"
          />
        </g>

        <g
          className={
            shouldReduceMotion
              ? ''
              : 'origin-[150px_124px] animate-[spin_32s_linear_infinite_reverse]'
          }
          style={{ transformOrigin: '150px 124px' }}
        >
          {ovalParticles.map(p => (
            <ellipse
              key={p.id}
              cx={p.cx}
              cy={p.cy}
              rx="4.2"
              ry="2"
              transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
              fill="#FEF08A"
              stroke={accentColor}
              strokeWidth="0.7"
              opacity="0.9"
            />
          ))}
        </g>

        <motion.circle
          cx="150"
          cy="124"
          r="20"
          fill={accentColor}
          opacity="0.9"
          animate={
            shouldReduceMotion
              ? { scale: 1 }
              : { scale: [0.94, 1.05, 0.94], opacity: [0.82, 1, 0.82] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ transformOrigin: '150px 124px' }}
        />
        <circle
          cx="150"
          cy="124"
          r="9"
          fill="#FEF9C3"
          stroke="#F59E0B"
          strokeWidth="1.2"
        />

        <text
          x="150"
          y="238"
          textAnchor="middle"
          fill={accentColor}
          fontSize="9.5"
          fontFamily="monospace"
          letterSpacing="1.5"
        >
          {t('COHERENT LATTICE · SOLID-STATE LOCK', 'सुसंगत जालक · पूर्ण स्थिर अवस्था')}
        </text>
      </svg>
    </div>
  );
}

export default function MatrikaVisualization({ type, accentColor }: VisualizationProps) {
  switch (type) {
    case 'genesis-spiral':
      return <GenesisSpiral accentColor={accentColor} />;
    case 'standing-wave':
      return <StandingWaveGraph accentColor={accentColor} />;
    case 'ignition-thrust':
      return <IgnitionGraph accentColor={accentColor} />;
    case 'homeostat-pid':
      return <HomeostatGraph accentColor={accentColor} />;
    case 'tectonic-mesh':
      return <TectonicMesh accentColor={accentColor} />;
    case 'lightning-bus':
      return <LightningWaveGraph accentColor={accentColor} />;
    case 'garbage-collector':
      return <GarbageCollectorGrid accentColor={accentColor} />;
    case 'solid-state-render':
      return <SolidStateRender accentColor={accentColor} />;
    default:
      return <GenesisSpiral accentColor={accentColor} />;
  }
}

export function MatrikaMiniSparkline({ type, accentColor }: VisualizationProps) {
  return (
    <svg
      viewBox="0 0 88 28"
      className="w-20 sm:w-24 h-7 shrink-0 overflow-visible"
      aria-hidden="true"
    >
      {type === 'genesis-spiral' && (
        <g>
          <circle
            cx="44"
            cy="14"
            r="10"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <circle cx="44" cy="14" r="5.5" fill="none" stroke={accentColor} strokeWidth="1.2" />
          <circle cx="44" cy="14" r="2.2" fill="#F3F2F1" />
        </g>
      )}
      {type === 'standing-wave' && (
        <g>
          <path
            d="M 6 14 Q 18 2, 31 14 T 56 14 T 82 14"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.6"
          />
          <path
            d="M 6 14 Q 18 26, 31 14 T 56 14 T 82 14"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="2 2"
            opacity="0.55"
          />
          {[6, 31, 56, 82].map(nx => (
            <circle key={nx} cx={nx} cy="14" r="1.8" fill="#F3F2F1" />
          ))}
        </g>
      )}
      {type === 'ignition-thrust' && (
        <path
          d="M 6 22 L 32 22 L 38 18 L 41 24 L 44 4 L 47 24 L 50 18 L 56 22 L 82 22"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      )}
      {type === 'homeostat-pid' && (
        <g>
          <line
            x1="6"
            y1="15"
            x2="82"
            y2="15"
            stroke="#526078"
            strokeWidth="0.9"
            strokeDasharray="2 2"
          />
          <path
            d="M 6 4 C 18 27, 28 6, 40 19 C 50 11, 60 17, 82 15"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.7"
          />
        </g>
      )}
      {type === 'tectonic-mesh' && (
        <g>
          <path
            d="M 8 22 Q 44 2, 80 22"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.7"
          />
          <path
            d="M 16 24 Q 44 9, 72 24"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            opacity="0.65"
          />
          <line x1="8" y1="22" x2="80" y2="22" stroke="#526078" strokeWidth="0.8" />
        </g>
      )}
      {type === 'lightning-bus' && (
        <g>
          <line x1="6" y1="4" x2="82" y2="4" stroke={accentColor} strokeWidth="0.8" opacity="0.6" />
          <line x1="6" y1="24" x2="82" y2="24" stroke="#526078" strokeWidth="0.8" opacity="0.6" />
          <path
            d="M 6 14 C 18 4, 30 24, 44 14 C 58 4, 70 24, 82 14"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.6"
          />
        </g>
      )}
      {type === 'garbage-collector' && (
        <g>
          {[14, 26, 38, 50, 62, 74].map((x, idx) => (
            <rect
              key={x}
              x={x}
              y={idx % 2 === 0 ? 6 : 13}
              width="7"
              height="7"
              rx="1.5"
              fill={accentColor}
              opacity={idx % 3 === 0 ? 0.45 : 0.9}
            />
          ))}
        </g>
      )}
      {type === 'solid-state-render' && (
        <g>
          <circle
            cx="44"
            cy="14"
            r="10"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.2"
          />
          <polygon
            points="44,5 52,19 36,19"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
          />
          <polygon
            points="44,23 52,9 36,9"
            fill="none"
            stroke="#FEF08A"
            strokeWidth="1"
          />
          <circle cx="44" cy="14" r="2.8" fill={accentColor} />
        </g>
      )}
    </svg>
  );
}
