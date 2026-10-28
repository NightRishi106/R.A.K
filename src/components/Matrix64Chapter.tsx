import React, { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Grid, Compass, Cpu, Search, Sparkles, Flame } from 'lucide-react';
import {
  ASHTA_BHAIRAVA_PROFILES,
  ASHTA_MATRIKA_PROFILES,
  COSMIC_STARFIELD,
  SIXTY_FOUR_YOGINI_BHAIRAVA_DYADS,
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
  const [activeOctadFilter, setActiveOctadFilter] = useState<number>(0); // 0 = All 64, 1..8 = Octad 1..8
  const [searchQuery, setSearchQuery] = useState<string>('');
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
  const activeDyad = activeIntersection.dyad;

  const selectByPairNumber = (pairNum: number) => {
    const normalized = ((pairNum - 1 + 64) % 64);
    setSelectedRow(Math.floor(normalized / 8));
    setSelectedCol(normalized % 8);
  };

  const filteredDyads = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SIXTY_FOUR_YOGINI_BHAIRAVA_DYADS.filter(d => {
      if (activeOctadFilter !== 0 && d.octadIndex !== activeOctadFilter) {
        return false;
      }
      if (!q) return true;
      return (
        d.dyadLabelEn.toLowerCase().includes(q) ||
        d.dyadLabelHi.toLowerCase().includes(q) ||
        d.cellId.toLowerCase().includes(q) ||
        String(d.index) === q ||
        `#${String(d.index).padStart(2, '0')}` === q
      );
    });
  }, [activeOctadFilter, searchQuery]);

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
        {/* Main Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#070A16]/80 border border-[#FFBF38]/35 mb-2">
            <Grid className="w-3 h-3 text-[#FFBF38]" />
            <span className="font-mono text-[9.5px] tracking-[0.22em] text-[#F7D57A] uppercase">
              {t('CHATUSHASHTI MANDALA · 64 SACRED CONSORT DYADS', 'चतुःषष्टि मण्डल · 64 योगिनी–भैरव युग्म संहिता')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 sm:w-12 bg-[#FFBF38]/40" />
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-serif font-bold tracking-[0.08em] text-[#FFBF38]">
              {t('64 YOGINI – 64 BHAIRAVA', '64 योगिनी – 64 भैरव')}
            </h3>
            <span className="h-[1px] w-6 sm:w-12 bg-[#FFBF38]/40" />
          </div>

          <p className="mt-1 font-mono text-[10.5px] sm:text-xs tracking-[0.22em] text-[#F3F2F1] font-semibold uppercase">
            {t(
              '8 BHAIRAVAS × 8 MATRIKAS = 64 YOGINI – BHAIRAVA DYADS',
              '8 भैरव × 8 मातृका = 64 योगिनी – भैरव युग्म'
            )}
          </p>

          <p className="mt-1 text-xs sm:text-[13px] font-serif italic text-[#A6AFBF]">
            {t(
              'Interactive 8×8 mandala of all 64 Yoginīs paired with their 64 Bhairava consorts',
              'सभी 64 योगिनियों और उनके 64 भैरव युग्मों का संवादात्मक 8×8 शोध मण्डल'
            )}
          </p>
        </div>

        {/* Mobile Quick Row & Column Selector */}
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
            <div className="min-w-[560px] sm:min-w-[600px] bg-[#070A16]/75 border border-[#526078]/40 rounded-lg p-2.5 sm:p-4 relative">
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

              {/* Eight Horizontal Bands: 8 Bhairava Rows × 8 Matrika Columns = 64 Yogini-Bhairava Cells */}
              <div
                className="space-y-1.5"
                role="grid"
                aria-label={t('64 Matrix of 64 Yoginis and 64 Bhairavas', '64 योगिनी एवं 64 भैरव का 8×8 आव्यूह')}
              >
                {ASHTA_BHAIRAVA_PROFILES.map((bhairava, rowIdx) => {
                  const isRowSelected = rowIdx === selectedRow;

                  return (
                    <div
                      key={bhairava.id}
                      role="row"
                      className={`relative grid grid-cols-[118px_repeat(8,minmax(0,1fr))] sm:grid-cols-[132px_repeat(8,minmax(0,1fr))] gap-1.5 items-center rounded-md p-1 transition-all duration-300 ${
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
                        const pairIdx = rowIdx * 8 + colIdx;
                        const cellDyad = SIXTY_FOUR_YOGINI_BHAIRAVA_DYADS[pairIdx];
                        const pairNumberStr = `#${String(cellDyad.index).padStart(2, '0')}`;
                        const fullId = cellDyad.cellId;
                        const staggerDelay = shouldReduceMotion
                          ? 0
                          : pairIdx * 0.005;

                        return (
                          <motion.button
                            key={fullId}
                            type="button"
                            role="gridcell"
                            aria-selected={isSelected}
                            title={`${pairNumberStr} (${fullId}): ${t(cellDyad.dyadLabelEn, cellDyad.dyadLabelHi)}`}
                            aria-label={t(
                              `${pairNumberStr} ${cellDyad.dyadLabelEn} (${fullId})`,
                              `${pairNumberStr} ${cellDyad.dyadLabelHi} (${fullId})`
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
                            className={`relative h-[50px] px-1 py-1 rounded flex flex-col items-center justify-between border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF38] ${
                              isSelected
                                ? 'z-20 shadow-[0_0_16px_rgba(255,191,56,0.45)]'
                                : isSameRowOrCol
                                  ? 'opacity-95'
                                  : 'opacity-80 hover:opacity-100'
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
                            {/* Top bar: Pair Number (#01..#64) & Color Dots */}
                            <div className="w-full flex items-center justify-between px-0.5">
                              <span
                                className={`font-mono text-[7.5px] leading-none ${
                                  isSelected
                                    ? 'text-[#FFBF38] font-bold'
                                    : isDiagonal
                                      ? 'text-[#F7D57A]'
                                      : 'text-[#A6AFBF]/80'
                                }`}
                              >
                                {pairNumberStr}
                              </span>
                              <div className="flex items-center gap-0.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: bhairava.accentColor }}
                                />
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: matrika.accentColor }}
                                />
                              </div>
                            </div>

                            {/* Middle: Yogini Name */}
                            <span
                              className={`w-full text-center font-serif text-[8.5px] leading-tight truncate ${
                                isSelected ? 'text-white font-bold' : 'text-[#F3F2F1]'
                              }`}
                            >
                              {t(cellDyad.yoginiName, cellDyad.yoginiNameHi)}
                            </span>

                            {/* Bottom: Bhairava Consort Name */}
                            <span className="w-full text-center font-mono text-[7px] leading-tight text-[#F7D57A]/85 truncate">
                              {t(cellDyad.bhairavaConsortName, cellDyad.bhairavaConsortNameHi)}
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
                {t(
                  '64 YOGINIS · 64 BHAIRAVAS · 8 × 8 MANDALA',
                  '64 योगिनी · 64 भैरव · 8 × 8 मण्डल'
                )}
              </span>
              <span className="font-mono text-[9.5px] text-[#A6AFBF]/85">
                {t(
                  'Click any cell (#01–#64) to inspect its Yoginī–Bhairava dyad and vector synthesis.',
                  'किसी भी कोष्ठक (#01–#64) पर क्लिक करके उसका योगिनी–भैरव युग्म और सदिश विश्लेषण देखें।'
                )}
              </span>
            </div>
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
              {/* Identifier, Pair Counter & Prev/Next Pair Stepper */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#526078]/30">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#FFBF38]/15 border border-[#FFBF38]/50 font-mono text-xs font-bold text-[#FFBF38] tracking-wider">
                    #{String(activeDyad.index).padStart(2, '0')} · {activeIntersection.id}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#A6AFBF]">
                    {t(`CELL [${selectedRow + 1}, ${selectedCol + 1}]`, `कोष्ठक [${selectedRow + 1}, ${selectedCol + 1}]`)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => selectByPairNumber(activeDyad.index - 1)}
                    title={t('Previous Yoginī–Bhairava Pair', 'पिछला योगिनी–भैरव युग्म')}
                    className="p-1 rounded bg-[#102344]/70 border border-[#526078]/50 text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[9px] text-[#F7D57A] px-1.5">
                    {activeDyad.index} / 64
                  </span>
                  <button
                    type="button"
                    onClick={() => selectByPairNumber(activeDyad.index + 1)}
                    title={t('Next Yoginī–Bhairava Pair', 'अगला योगिनी–भैरव युग्म')}
                    className="p-1 rounded bg-[#102344]/70 border border-[#526078]/50 text-[#F3F2F1] hover:border-[#FFBF38] hover:text-[#FFBF38] transition cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* FEATURED SACRED CONSORT DYAD CARD (YOGINI – BHAIRAVA) */}
              <div
                className="mt-3.5 p-3.5 rounded-xl border relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,191,56,0.13) 0%, rgba(16,35,68,0.85) 50%, rgba(244,63,94,0.12) 100%)',
                  borderColor: 'rgba(255,191,56,0.55)'
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFBF38] font-semibold">
                    <Sparkles className="w-3 h-3 text-[#FFBF38]" />
                    {t(
                      `SACRED YOGINI – BHAIRAVA DYAD #${String(activeDyad.index).padStart(2, '0')}`,
                      `पवित्र योगिनी – भैरव युग्म #${String(activeDyad.index).padStart(2, '0')}`
                    )}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#070A16]/80 border border-[#FFBF38]/35 font-mono text-[8px] uppercase tracking-wider text-[#F7D57A]">
                    {t(`OCTAD ${activeDyad.octadIndex}`, `अष्टक ${activeDyad.octadIndex}`)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2.5 items-center">
                  {/* Yogini Box */}
                  <div className="p-2.5 rounded-lg bg-[#070A16]/90 border border-[#FFBF38]/40">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-[#F7D57A]">
                      {t(`YOGINI (${activeDyad.index} OF 64)`, `योगिनी (${activeDyad.index} / 64)`)}
                    </span>
                    <p className="font-serif text-base sm:text-[17px] font-bold text-[#FFBF38] mt-0.5 leading-snug">
                      {t(activeDyad.yoginiFull, activeDyad.yoginiFullHi)}
                    </p>
                    <span className="block font-mono text-[8.5px] text-[#A6AFBF] mt-0.5">
                      {t(activeDyad.yoginiFullHi, activeDyad.yoginiFull)}
                    </span>
                  </div>

                  {/* Dyad Union Connector */}
                  <div className="flex sm:flex-col items-center justify-center">
                    <span className="px-2 py-1 rounded-full bg-[#FFBF38]/20 border border-[#FFBF38]/60 font-mono text-[10px] font-bold text-[#FFBF38]">
                      –
                    </span>
                  </div>

                  {/* Bhairava Consort Box */}
                  <div className="p-2.5 rounded-lg bg-[#070A16]/90 border border-[#F97316]/45">
                    <span className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[#FDBA74]">
                      <Flame className="w-2.5 h-2.5 text-[#F97316]" />
                      {t(`BHAIRAVA (${activeDyad.index} OF 64)`, `भैरव (${activeDyad.index} / 64)`)}
                    </span>
                    <p className="font-serif text-base sm:text-[17px] font-bold text-[#FDBA74] mt-0.5 leading-snug">
                      {t(activeDyad.bhairavaConsortFull, activeDyad.bhairavaConsortFullHi)}
                    </p>
                    <span className="block font-mono text-[8.5px] text-[#A6AFBF] mt-0.5">
                      {t(activeDyad.bhairavaConsortFullHi, activeDyad.bhairavaConsortFull)}
                    </span>
                  </div>
                </div>

                {/* Canonical Line */}
                <div className="mt-2.5 pt-2 border-t border-[#FFBF38]/25 text-center">
                  <p className="font-serif text-xs sm:text-[13px] font-semibold text-[#F3F2F1] tracking-wide">
                    {t(activeDyad.dyadLabelEn, activeDyad.dyadLabelHi)}
                  </p>
                </div>
              </div>

              {/* Visual Connection Diagram Between Row (Ashta Bhairava) & Column (Ashta Matrika) */}
              <div className="mt-3.5 p-3 rounded-lg bg-[#030D32]/80 border border-[#526078]/35">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A6AFBF]">
                    {t('8 × 8 MATRIX COORDINATE AXES', '8 × 8 आव्यूह अक्ष निर्देशांक')}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-mono text-[8px] uppercase tracking-[0.12em] border ${
                      activeIntersection.isCanonicalConsortPair
                        ? 'border-[#FFBF38]/60 bg-[#FFBF38]/15 text-[#F7D57A]'
                        : 'border-[#526078]/60 bg-[#102344]/50 text-[#A6AFBF]'
                    }`}
                  >
                    {activeIntersection.isCanonicalConsortPair
                      ? t('DIAGONAL OCTANT', 'विकर्ण अष्टांश')
                      : t('CROSS-VECTOR', 'क्रॉस-वेक्टर')}
                  </span>
                </div>

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
                      className="font-serif text-sm font-bold mt-0.5"
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
                      className="font-serif text-sm font-bold mt-0.5"
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
                    {t('DYAD & VECTOR SYNTHESIS', 'युग्म एवं सदिश संश्लेषण')}
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

        {/* =====================================================================
            COMPLETE 64 YOGINI – 64 BHAIRAVA SACRED ROSTER (1 TO 64)
           ===================================================================== */}
        <div className="mt-7 pt-6 border-t border-[#526078]/40">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#FFBF38]">
                <Sparkles className="w-3 h-3" />
                {t(
                  'COMPLETE CANONICAL CONCORDANCE · 64 YOGINI – 64 BHAIRAVA',
                  'संपूर्ण प्रामाणिक अनुक्रमणिका · 64 योगिनी – 64 भैरव'
                )}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-[#F3F2F1] mt-0.5">
                {t(
                  'The 64 Yoginī – Bhairava Sacred Dyads (01 to 64)',
                  'चतुःषष्टि (64) योगिनी – भैरव पवित्र युग्म सूची (01 से 64)'
                )}
              </h4>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-[#A6AFBF] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('Search Yoginī or Bhairava (1–64)...', 'योगिनी या भैरव खोजें (1–64)...')}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#070A16]/90 border border-[#526078]/60 text-xs text-[#F3F2F1] placeholder-[#A6AFBF]/60 focus:outline-none focus:border-[#FFBF38]"
              />
            </div>
          </div>

          {/* Octad Filter Tabs (All 64 + 8 Octads of 8 Pairs) */}
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            <button
              type="button"
              onClick={() => setActiveOctadFilter(0)}
              className={`px-2.5 py-1 rounded-md font-mono text-[9.5px] uppercase tracking-wider border transition cursor-pointer ${
                activeOctadFilter === 0
                  ? 'bg-[#FFBF38]/20 border-[#FFBF38] text-[#FFBF38] font-bold'
                  : 'bg-[#070A16]/75 border-[#526078]/45 text-[#A6AFBF] hover:text-[#F3F2F1]'
              }`}
            >
              {t('All 64 Dyads', 'सभी 64 युग्म')}
            </button>
            {ASHTA_BHAIRAVA_PROFILES.map((bh, rIdx) => {
              const octadNum = rIdx + 1;
              const startNum = rIdx * 8 + 1;
              const endNum = startNum + 7;
              const isOctadActive = activeOctadFilter === octadNum;
              return (
                <button
                  key={bh.id}
                  type="button"
                  onClick={() => setActiveOctadFilter(octadNum)}
                  className={`px-2.5 py-1 rounded-md font-mono text-[9.5px] uppercase tracking-wider border transition cursor-pointer ${
                    isOctadActive
                      ? 'bg-[#102344] text-white font-bold'
                      : 'bg-[#070A16]/75 text-[#A6AFBF] hover:text-[#F3F2F1]'
                  }`}
                  style={{
                    borderColor: isOctadActive ? bh.accentColor : `${bh.accentColor}40`
                  }}
                >
                  {t(
                    `Octad ${octadNum} (${startNum}–${endNum}) · ${bh.shortTranslit}`,
                    `अष्टक ${octadNum} (${startNum}–${endNum}) · ${bh.shortHindi}`
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid of 64 Yogini - Bhairava Dyad Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {filteredDyads.map(dyad => {
              const isCurrent = dyad.rowIdx === selectedRow && dyad.colIdx === selectedCol;
              const rowBhairava = ASHTA_BHAIRAVA_PROFILES[dyad.rowIdx];
              const colMatrika = ASHTA_MATRIKA_PROFILES[dyad.colIdx];
              return (
                <button
                  key={dyad.cellId}
                  type="button"
                  onClick={() => {
                    setSelectedRow(dyad.rowIdx);
                    setSelectedCol(dyad.colIdx);
                  }}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#102344]/95 shadow-[0_0_18px_rgba(255,191,56,0.3)]'
                      : 'bg-[#070A16]/80 hover:bg-[#102344]/50'
                  }`}
                  style={{
                    borderColor: isCurrent ? '#FFBF38' : `${rowBhairava.accentColor}40`
                  }}
                >
                  <div>
                    {/* Top Row: #01..#64 Badge + Matrix Coordinate */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`px-1.5 py-0.5 rounded font-mono text-[9px] font-bold ${
                          isCurrent
                            ? 'bg-[#FFBF38] text-[#030D32]'
                            : 'bg-[#102344] text-[#FFBF38] border border-[#FFBF38]/35'
                        }`}
                      >
                        #{String(dyad.index).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[8.5px] text-[#A6AFBF]">
                        {dyad.cellId} · {t(rowBhairava.shortTranslit, rowBhairava.shortHindi)} ×{' '}
                        {t(colMatrika.englishName, colMatrika.hindiName)}
                      </span>
                    </div>

                    {/* Yogini */}
                    <p className="font-serif text-[13px] font-bold text-[#FFBF38] leading-snug">
                      {t(dyad.yoginiFull, dyad.yoginiFullHi)}
                    </p>

                    {/* Divider & Bhairava Consort */}
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="font-mono text-[10px] text-[#A6AFBF]">–</span>
                      <p className="font-serif text-[12.5px] font-semibold text-[#FDBA74] leading-snug">
                        {t(dyad.bhairavaConsortFull, dyad.bhairavaConsortFullHi)}
                      </p>
                    </div>
                  </div>

                  {/* Secondary Bilingual Subtitle */}
                  <div className="mt-2 pt-1.5 border-t border-[#526078]/25 flex items-center justify-between">
                    <span className="font-serif text-[10px] text-[#A6AFBF]/85 truncate">
                      {t(dyad.dyadLabelHi, dyad.dyadLabelEn)}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: rowBhairava.accentColor }}
                    />
                  </div>
                </button>
              );
            })}
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

