import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Grid, Compass, Cpu } from 'lucide-react';
import {
  ASHTA_BHAIRAVA_PROFILES,
  ASHTA_MATRIKA_PROFILES,
  COSMIC_STARFIELD,
  getMatrixIntersection
} from '../data/ashtaResearchData';
import { useLanguage } from '../context/LanguageContext';

interface Matrix64ChapterProps {
  initialRowIndex?: number;
  initialColIndex?: number;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
  onSelectBhairavaProfile?: (bhairavaIdx: number) => void;
  onSelectMatrikaProfile?: (matrikaIdx: number) => void;
}

export default function Matrix64Chapter({
  initialRowIndex,
  initialColIndex,
  onPrevChapter,
  onNextChapter,
  onSelectBhairavaProfile,
  onSelectMatrikaProfile
}: Matrix64ChapterProps) {
  const { lang, t } = useLanguage();
  const [selectedRow, setSelectedRow] = useState<number>(
    typeof initialRowIndex === 'number' && initialRowIndex >= 0 && initialRowIndex < 8
      ? initialRowIndex
      : 0
  );
  const [selectedCol, setSelectedCol] = useState<number>(
    typeof initialColIndex === 'number' && initialColIndex >= 0 && initialColIndex < 8
      ? initialColIndex
      : 0
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof initialRowIndex === 'number' && initialRowIndex >= 0 && initialRowIndex < 8) {
      setSelectedRow(initialRowIndex);
    }
    if (typeof initialColIndex === 'number' && initialColIndex >= 0 && initialColIndex < 8) {
      setSelectedCol(initialColIndex);
    }
  }, [initialRowIndex, initialColIndex]);

  const activeIntersection = getMatrixIntersection(selectedRow, selectedCol);
  const activeBhairava = activeIntersection.bhairava;
  const activeMatrika = activeIntersection.matrika;

  const handleCellKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSelectedCol((c + 1) % 8);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelectedCol((c - 1 + 8) % 8);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedRow((r + 1) % 8);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedRow((r - 1 + 8) % 8);
    }
  };

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-[#526078]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-[#F3F2F1]"
      style={{
        background:
          'linear-gradient(180deg, #030D32 0%, #061436 38%, #0C1C3E 64%, #1A1423 84%, #2B120C 100%)'
      }}
    >
      {/* Midnight-Blue Cosmic Starfield */}
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

      {/* Ambient Dual-Color Radial Glow Reflecting Selected Bhairava × Matrika */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 35% 45%, ${activeBhairava.accentColor}16 0%, transparent 55%), radial-gradient(circle at 75% 45%, ${activeMatrika.accentColor}16 0%, transparent 55%)`
        }}
      />

      <div className="relative z-10 px-4 sm:px-7 md:px-10 py-6 md:py-7">
        {/* Main Heading (Single-Language) */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#070A16]/80 border border-[#FFBF38]/35 mb-2">
            <Grid className="w-3 h-3 text-[#FFBF38]" />
            <span className="font-mono text-[9.5px] tracking-[0.22em] text-[#F7D57A] uppercase">
              {t('INTERPRETIVE FRAMEWORK · COMBINATORIAL ARCHIVE', 'व्याख्यात्मक ढाँचा · संयोजनात्मक अभिलेखागार')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 sm:w-12 bg-[#FFBF38]/40" />
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-serif font-bold tracking-[0.08em] text-[#FFBF38]">
              {t('64 YOGINI', '64 योगिनी')}
            </h3>
            <span className="h-[1px] w-6 sm:w-12 bg-[#FFBF38]/40" />
          </div>

          <p className="mt-1 font-mono text-[10.5px] sm:text-xs tracking-[0.22em] text-[#F3F2F1] font-semibold uppercase">
            {t('8 BHAIRAVAS × 8 MATRIKAS = 64 MATRIKAS', '8 भैरव × 8 मातृका = 64 मातृका')}
          </p>

          <p className="mt-1 text-xs sm:text-[13px] font-serif italic text-[#A6AFBF]">
            {t(
              'An interactive map of the eight-by-eight research model',
              'आठ-गुणा-आठ शोध मॉडल का एक संवादात्मक मानचित्र'
            )}
          </p>
        </div>

        {/* Mobile Quick Row & Column Selector (Visible on small screens so users can pick any 8x8 pair without horizontal scrolling) */}
        <div className="md:hidden mt-4 p-3 rounded-lg bg-[#070A16]/85 border border-[#526078]/45 space-y-2.5">
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#FFBF38] mb-1.5">
              {t('1. Select Bhairava Row (1–8):', '1. भैरव पंक्ति चुनें (1–8):')}
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {ASHTA_BHAIRAVA_PROFILES.map((b, rIdx) => {
                const active = rIdx === selectedRow;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedRow(rIdx)}
                    className={`min-h-[34px] px-1.5 py-1 rounded text-[10px] font-serif truncate border transition cursor-pointer ${
                      active ? 'bg-[#102344] font-bold text-white' : 'bg-[#030D32]/70 text-[#A6AFBF]'
                    }`}
                    style={{ borderColor: active ? b.accentColor : `${b.accentColor}40` }}
                  >
                    {b.index}. {t(b.shortTranslit, b.shortHindi)}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#F7D57A] mb-1.5">
              {t('2. Select Matrika Column (1–8):', '2. मातृका स्तंभ चुनें (1–8):')}
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {ASHTA_MATRIKA_PROFILES.map((m, cIdx) => {
                const active = cIdx === selectedCol;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedCol(cIdx)}
                    className={`min-h-[34px] px-1.5 py-1 rounded text-[10px] font-serif truncate border transition cursor-pointer ${
                      active ? 'bg-[#102344] font-bold text-white' : 'bg-[#030D32]/70 text-[#A6AFBF]'
                    }`}
                    style={{ borderColor: active ? m.accentColor : `${m.accentColor}40` }}
                  >
                    {t(m.englishName, m.hindiName)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Grid: 8×8 Matrix (Left 7 cols) + MatrixIntersectionPanel (Right 5 cols) */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 xl:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: The 8 × 8 Interactive Matrix */}
          <div className="xl:col-span-7 w-full overflow-x-auto pb-2">
            <div className="min-w-[520px] sm:min-w-[540px] bg-[#070A16]/75 border border-[#526078]/40 rounded-lg p-2.5 sm:p-4 relative">
              {/* Column Headers: The Eight Matrikas (1..8) */}
              <div className="grid grid-cols-[118px_repeat(8,minmax(0,1fr))] sm:grid-cols-[132px_repeat(8,minmax(0,1fr))] gap-1.5 items-end mb-2">
                <div className="px-1.5 py-1 text-left">
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.18em] text-[#A6AFBF]">
                    {t('ROW: BHAIRAVA ↓', 'पंक्ति: भैरव ↓')}
                  </span>
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.18em] text-[#FFBF38]">
                    {t('COL: MATRIKA →', 'स्तंभ: मातृका →')}
                  </span>
                </div>

                {ASHTA_MATRIKA_PROFILES.map((matrika, colIdx) => {
                  const isColSelected = colIdx === selectedCol;
                  return (
                    <button
                      key={matrika.id}
                      type="button"
                      onClick={() => setSelectedCol(colIdx)}
                      title={t(
                        `${matrika.englishName} — ${matrika.conceptualTitle}`,
                        `${matrika.hindiName} — ${matrika.conceptualTitleHi}`
                      )}
                      className={`flex flex-col items-center justify-end p-1.5 rounded border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                        isColSelected
                          ? 'bg-[#102344]/90 shadow-[0_0_12px_rgba(255,255,255,0.12)]'
                          : 'bg-[#070A16]/60 hover:bg-[#102344]/40'
                      }`}
                      style={{
                        borderColor: isColSelected ? matrika.accentColor : `${matrika.accentColor}40`
                      }}
                    >
                      <span
                        className="font-mono text-[8px] font-bold tracking-wider"
                        style={{ color: matrika.accentColor }}
                      >
                        {matrika.binaryCode}
                      </span>
                      <span className="font-serif text-[10px] font-bold text-[#F3F2F1] truncate max-w-full mt-0.5">
                        {t(matrika.englishName, matrika.hindiName)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Eight Horizontal Bands: 8 Bhairava Rows × 8 Matrika Columns = 64 Cells */}
              <div
                className="space-y-1.5"
                role="grid"
                aria-label={t('64 Matrix of 8 Bhairavas by 8 Matrikas', '8 भैरव × 8 मातृका का 64 आव्यूह')}
              >
                {ASHTA_BHAIRAVA_PROFILES.map((bhairava, rowIdx) => {
                  const isRowSelected = rowIdx === selectedRow;

                  return (
                    <div
                      key={bhairava.id}
                      role="row"
                      className={`relative grid grid-cols-[132px_repeat(8,minmax(0,1fr))] gap-1.5 items-center rounded-md p-1 transition-all duration-300 ${
                        isRowSelected ? 'bg-[#102344]/55' : 'bg-transparent'
                      }`}
                      style={{
                        boxShadow: isRowSelected
                          ? `inset 0 0 18px ${bhairava.accentColor}22`
                          : 'none'
                      }}
                    >
                      {/* Row Label: Bhairava */}
                      <button
                        type="button"
                        onClick={() => setSelectedRow(rowIdx)}
                        className={`flex items-center justify-between gap-1.5 px-2 py-1.5 rounded border text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                          isRowSelected ? 'bg-[#070A16]' : 'bg-[#070A16]/70 hover:bg-[#070A16]'
                        }`}
                        style={{
                          borderColor: isRowSelected
                            ? bhairava.accentColor
                            : `${bhairava.accentColor}45`
                        }}
                      >
                        <div className="min-w-0">
                          <span
                            className="block font-serif text-[11px] font-bold truncate"
                            style={{ color: bhairava.accentColor }}
                          >
                            {bhairava.index}. {t(bhairava.shortTranslit, bhairava.shortHindi)}
                          </span>
                          <span className="block font-mono text-[8px] text-[#A6AFBF] truncate">
                            {t(bhairava.directionFull, bhairava.directionFullHi)}
                          </span>
                        </div>
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: bhairava.accentColor }}
                        />
                      </button>

                      {/* 8 Cells in this Bhairava Row */}
                      {ASHTA_MATRIKA_PROFILES.map((matrika, colIdx) => {
                        const isSelected = rowIdx === selectedRow && colIdx === selectedCol;
                        const isSameRowOrCol = rowIdx === selectedRow || colIdx === selectedCol;
                        const isDiagonal = rowIdx === colIdx;
                        const cellCode = `${rowIdx + 1}×${colIdx + 1}`;
                        const fullId = `BM-0${rowIdx + 1}-0${colIdx + 1}`;
                        const staggerDelay = shouldReduceMotion
                          ? 0
                          : (rowIdx * 8 + colIdx) * 0.006;

                        return (
                          <motion.button
                            key={fullId}
                            type="button"
                            role="gridcell"
                            aria-selected={isSelected}
                            aria-label={t(
                              `Matrika ${fullId}: ${bhairava.englishName} and ${matrika.englishName}`,
                              `मातृका ${fullId}: ${bhairava.hindiName} और ${matrika.hindiName}`
                            )}
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
                            animate={{
                              opacity: 1,
                              scale: isSelected ? 1.06 : 1
                            }}
                            transition={{ duration: 0.22, delay: staggerDelay }}
                            onClick={() => {
                              setSelectedRow(rowIdx);
                              setSelectedCol(colIdx);
                            }}
                            onKeyDown={e => handleCellKeyDown(e, rowIdx, colIdx)}
                            className={`relative h-10 rounded flex flex-col items-center justify-center border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                              isSelected
                                ? 'z-20 shadow-[0_0_16px_rgba(255,191,56,0.45)]'
                                : isSameRowOrCol
                                  ? 'opacity-95'
                                  : 'opacity-70 hover:opacity-100'
                            }`}
                            style={{
                              background: isSelected
                                ? `linear-gradient(135deg, ${bhairava.accentColor}45 0%, ${matrika.accentColor}45 100%)`
                                : isSameRowOrCol
                                  ? `linear-gradient(135deg, ${bhairava.accentColor}1E 0%, ${matrika.accentColor}1E 100%)`
                                  : '#070A16',
                              borderColor: isSelected
                                ? '#FFBF38'
                                : isDiagonal
                                  ? `${bhairava.accentColor}88`
                                  : isSameRowOrCol
                                    ? `${matrika.accentColor}66`
                                    : '#52607845',
                              borderWidth: isSelected ? '1.5px' : '1px'
                            }}
                          >
                            {/* Top-left row color dot & top-right col color dot */}
                            <div className="flex items-center gap-1">
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: bhairava.accentColor }}
                              />
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: matrika.accentColor }}
                              />
                            </div>

                            <span
                              className={`font-mono text-[8.5px] mt-0.5 tracking-tighter ${
                                isSelected
                                  ? 'text-[#F3F2F1] font-bold'
                                  : isDiagonal
                                    ? 'text-[#F7D57A] font-semibold'
                                    : 'text-[#A6AFBF]'
                              }`}
                            >
                              {cellCode}
                            </span>

                            {/* Crosshair connection indicator on active cell */}
                            {isSelected && (
                              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FFBF38]" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Matrix Summary Note */}
            <div className="mt-3 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#FFBF38] uppercase font-semibold">
                {t('8 BHAIRAVAS · 8 MATRIKAS · 64 MATRIKAS', '8 भैरव · 8 मातृका · 64 मातृका')}
              </span>
              <span className="font-mono text-[9.5px] text-[#A6AFBF]/85">
                {t(
                  'Diagonal cells (1×1 … 8×8) mark canonical directional consort pairings.',
                  'विकर्ण कोष्ठक (1×1 … 8×8) प्रामाणिक दिशात्मक भैरव-मातृका युग्मों को दर्शाते हैं।'
                )}
              </span>
            </div>
            <p className="mt-1 px-1 text-[11px] font-serif italic text-[#A6AFBF]/80">
              {t(
                'The matrix is an interpretive framework for organizing comparative research. Individual associations require source-based verification.',
                'यह आव्यूह तुलनात्मक शोध को व्यवस्थित करने के लिए एक व्याख्यात्मक ढाँचा है। व्यक्तिगत संबंधों के लिए मूल-स्रोत आधारित सत्यापन आवश्यक है।'
              )}
            </p>
          </div>

          {/* Right Column: MatrixIntersectionPanel (5 cols on xl) */}
          <div className="xl:col-span-5 w-full">
            <motion.div
              key={`${activeIntersection.id}-${lang}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
              className="rounded-xl bg-[#070A16]/90 border border-[#526078]/50 p-4 sm:p-5 shadow-xl"
            >
              {/* Identifier & Evidence Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#526078]/30">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/50 font-mono text-xs font-bold text-[#FFBF38] tracking-wider">
                    {activeIntersection.id}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#A6AFBF]">
                    {t(`CELL [${selectedRow + 1}, ${selectedCol + 1}]`, `कोष्ठक [${selectedRow + 1}, ${selectedCol + 1}]`)}
                  </span>
                </div>

                <span
                  className={`px-2 py-0.5 rounded font-mono text-[8.5px] uppercase tracking-[0.14em] border ${
                    activeIntersection.isCanonicalConsortPair
                      ? 'border-[#FFBF38]/60 bg-[#FFBF38]/15 text-[#F7D57A]'
                      : 'border-[#526078]/60 bg-[#102344]/50 text-[#A6AFBF]'
                  }`}
                >
                  {activeIntersection.isCanonicalConsortPair
                    ? t('PRIMARY DIRECTIONAL PAIR', 'प्राथमिक दिशात्मक युग्म')
                    : t('EXPLORATORY MATRIKA', 'अन्वेषणात्मक मातृका')}
                </span>
              </div>

              {/* Visual Connection Diagram Between Row (Bhairava) & Column (Matrika) */}
              <div className="mt-3.5 p-3 rounded-lg bg-[#030D32]/80 border border-[#526078]/35">
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#A6AFBF] mb-2">
                  {t('MATRIKA', 'मातृका')}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 items-center">
                  {/* Bhairava Node */}
                  <div
                    className="p-2.5 rounded border bg-[#070A16]/90"
                    style={{ borderColor: `${activeBhairava.accentColor}66` }}
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A6AFBF]">
                      <span>{t(`ROW ${activeBhairava.index}/8`, `पंक्ति ${activeBhairava.index}/8`)}</span>
                      <span>{t(activeBhairava.directionCode, activeBhairava.directionCodeHi)}</span>
                    </div>
                    <p
                      className="font-serif text-base font-bold mt-0.5"
                      style={{ color: activeBhairava.accentColor }}
                    >
                      {t(activeBhairava.englishName, activeBhairava.hindiName)}
                    </p>
                    <p className="font-mono text-[9px] text-[#A6AFBF] mt-0.5">
                      {t(activeBhairava.planet, activeBhairava.planetHi)} · {activeBhairava.toneHz}
                    </p>
                  </div>

                  {/* Connecting Cross-Vector Symbol */}
                  <div className="flex sm:flex-col items-center justify-center py-1">
                    <span className="w-6 h-[1px] sm:w-[1px] sm:h-4 bg-[#FFBF38]/50" />
                    <span className="mx-1.5 my-0.5 px-1.5 py-0.5 rounded-full bg-[#FFBF38]/20 border border-[#FFBF38]/50 font-mono text-[10px] font-bold text-[#FFBF38]">
                      ×
                    </span>
                    <span className="w-6 h-[1px] sm:w-[1px] sm:h-4 bg-[#FFBF38]/50" />
                  </div>

                  {/* Matrika Node */}
                  <div
                    className="p-2.5 rounded border bg-[#070A16]/90"
                    style={{ borderColor: `${activeMatrika.accentColor}66` }}
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A6AFBF]">
                      <span>{t(activeMatrika.rowLabel, activeMatrika.rowLabelHi)}</span>
                      <span>{t(`CODE ${activeMatrika.binaryCode}`, `कोड ${activeMatrika.binaryCode}`)}</span>
                    </div>
                    <p
                      className="font-serif text-base font-bold mt-0.5"
                      style={{ color: activeMatrika.accentColor }}
                    >
                      {t(activeMatrika.englishName, activeMatrika.hindiName)}
                    </p>
                    <p className="font-mono text-[9px] text-[#A6AFBF] mt-0.5">
                      {t(activeMatrika.conceptualTitle, activeMatrika.conceptualTitleHi)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Relationship Exploration & Research Question */}
              <div className="mt-3.5 space-y-3">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFBF38]">
                    {t('RELATIONSHIP BEING EXPLORED', 'अन्वेषित संबंध')}
                  </span>
                  <p className="mt-1 text-xs sm:text-[13px] font-serif text-[#F3F2F1]/90 leading-relaxed">
                    {t(activeIntersection.relationshipSummary, activeIntersection.relationshipSummaryHi)}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#102344]/35 border-l-2 border-[#FFBF38]">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#F7D57A]">
                    {t('RESEARCH QUESTION', 'शोध प्रश्न')}
                  </span>
                  <p className="mt-1 text-xs sm:text-[13px] font-serif italic text-[#F3F2F1] leading-relaxed">
                    {t(activeIntersection.researchQuestion, activeIntersection.researchQuestionHi)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded bg-[#030D32]/70 border border-[#526078]/35">
                    <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#A6AFBF]">
                      {t('BHAIRAVA VECTOR', 'भैरव सदिश')}
                    </span>
                    <span className="mt-0.5 block font-serif text-xs text-[#F3F2F1]">
                      {t(
                        `${activeBhairava.directionFull} · Vahana: ${activeBhairava.vahana}`,
                        `${activeBhairava.directionFullHi} · वाहन: ${activeBhairava.vahanaHi}`
                      )}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#030D32]/70 border border-[#526078]/35">
                    <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#A6AFBF]">
                      {t('MATRIKA SYSTEM', 'मातृका प्रणाली')}
                    </span>
                    <span className="mt-0.5 block font-serif text-xs text-[#F3F2F1]">
                      {t(
                        `${activeMatrika.tattva} · Kshetra: ${activeMatrika.kshetra}`,
                        `${activeMatrika.tattvaHi} · क्षेत्र: ${activeMatrika.kshetraHi}`
                      )}
                    </span>
                  </div>
                </div>

                {/* Evidence Status Box */}
                <div className="p-2.5 rounded bg-[#070A16] border border-[#526078]/40">
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.18em] text-[#A6AFBF]">
                    {t('EVIDENCE STATUS', 'साक्ष्य की स्थिति')}
                  </span>
                  <p className="mt-0.5 font-mono text-[10px] text-[#F7D57A]">
                    {t(activeIntersection.evidenceStatus, activeIntersection.evidenceStatusHi)}
                  </p>
                </div>

                {/* Deep-Link Actions to Inspect Individual Bhairava or Matrika Profile */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {onSelectBhairavaProfile && (
                    <button
                      type="button"
                      onClick={() => onSelectBhairavaProfile(selectedRow)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#070A16] border text-[10.5px] font-mono transition-colors cursor-pointer hover:bg-[#102344]/60"
                      style={{
                        borderColor: `${activeBhairava.accentColor}80`,
                        color: activeBhairava.accentColor
                      }}
                    >
                      <Compass className="w-3 h-3" />
                      {t(`Inspect ${activeBhairava.shortTranslit}`, `${activeBhairava.shortHindi} का निरीक्षण करें`)}
                    </button>
                  )}
                  {onSelectMatrikaProfile && (
                    <button
                      type="button"
                      onClick={() => onSelectMatrikaProfile(selectedCol)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#070A16] border text-[10.5px] font-mono transition-colors cursor-pointer hover:bg-[#102344]/60"
                      style={{
                        borderColor: `${activeMatrika.accentColor}80`,
                        color: activeMatrika.accentColor
                      }}
                    >
                      <Cpu className="w-3 h-3" />
                      {t(
                        `Inspect ${activeMatrika.englishName} (${activeMatrika.binaryCode})`,
                        `${activeMatrika.hindiName} (${activeMatrika.binaryCode}) का निरीक्षण करें`
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Chapter Footer Navigation */}
        <div className="mt-5 pt-3.5 border-t border-[#526078]/35 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onPrevChapter && (
              <button
                type="button"
                onClick={onPrevChapter}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#070A16]/85 border border-[#526078]/60 text-xs font-mono text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                {t('Prev: Bhairav Investigation Codex', 'पीछे: भैरव अन्वेषण संहिता')}
              </button>
            )}
            {onNextChapter && (
              <button
                type="button"
                onClick={onNextChapter}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/60 text-xs font-mono text-[#FFBF38] hover:bg-[#FFBF38]/25 transition-colors cursor-pointer"
              >
                {t('Next: The Eight Matrikas', 'आगे: अष्ट मातृका')}
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <span className="font-mono text-[9.5px] tracking-[0.16em] text-[#A6AFBF]/80 uppercase">
            {t('Forthcoming Book · A Path Within · Ram Ashok Kumar', 'आगामी पुस्तक · अ पाथ विदिन · राम अशोक कुमार')}
          </span>
        </div>
      </div>
    </div>
  );
}
