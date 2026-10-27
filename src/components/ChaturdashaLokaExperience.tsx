import React, { useState, useMemo } from 'react';
import {
  FOURTEEN_LOKAS,
  THREE_IMPORTANT_DISTINCTIONS,
  LokaRecord,
  LokaCategory
} from '../data/lokaCosmologyData';
import { useLanguage } from '../context/LanguageContext';

interface ChaturdashaLokaExperienceProps {
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
}

type FilterMode = 'all' | LokaCategory;

export const ChaturdashaLokaExperience: React.FC<ChaturdashaLokaExperienceProps> = ({
  onPrevChapter,
  onNextChapter
}) => {
  const { t } = useLanguage();
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);

  const selectedLoka: LokaRecord = useMemo(() => {
    return FOURTEEN_LOKAS.find((l) => l.number === selectedNumber) || FOURTEEN_LOKAS[0];
  }, [selectedNumber]);

  const filteredLokas = useMemo(() => {
    if (filterMode === 'all') return FOURTEEN_LOKAS;
    return FOURTEEN_LOKAS.filter((l) => l.category === filterMode);
  }, [filterMode]);

  const handleSelectLoka = (num: number, scrollToDossierOnMobile = false) => {
    setSelectedNumber(num);
    if (scrollToDossierOnMobile && typeof window !== 'undefined' && window.innerWidth < 1024) {
      const dossierEl = document.getElementById('loka-detail-dossier');
      if (dossierEl) {
        dossierEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrevLoka = () => {
    setSelectedNumber((prev) => (prev <= 1 ? 14 : prev - 1));
  };

  const handleNextLoka = () => {
    setSelectedNumber((prev) => (prev >= 14 ? 1 : prev + 1));
  };

  const isUrdhva = selectedLoka.category === 'urdhva';

  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-amber-500/25 bg-[#07060d]/95 backdrop-blur-xl shadow-[0_25px_90px_rgba(0,0,0,0.85)] overflow-hidden text-stone-100">
      {/* Subtle sacred background grid and radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 15%, rgba(245, 158, 11, 0.16), transparent 45%),
            radial-gradient(circle at 82% 80%, rgba(20, 184, 166, 0.14), transparent 50%),
            linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 44px 44px, 44px 44px'
        }}
      />

      {/* Top Architectural Header */}
      <div className="relative z-10 border-b border-amber-500/20 px-4 py-5 sm:px-6 sm:py-7 md:px-10 md:py-9 bg-gradient-to-b from-amber-950/20 via-[#090812]/90 to-transparent">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 py-1 rounded-sm bg-amber-500/15 border border-amber-400/35 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-300">
              {t('CHAPTER VII · PURANIC COSMOGRAPHY', 'अध्याय VII · पौराणिक ब्रह्माण्ड विज्ञान')}
            </span>
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.16em] sm:tracking-[0.2em] text-stone-400 uppercase">
              {t('14 LOKAS · 7 URDHVA + 7 ADHO (PATALA)', '14 लोक · 7 ऊर्ध्व + 7 अधो (पाताल)')}
            </span>
          </div>

          {/* Filter controls */}
          <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap items-center gap-1.5 bg-[#0d0c18] p-1.5 rounded-lg border border-amber-500/20 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`min-h-[38px] sm:min-h-0 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all cursor-pointer text-center ${
                filterMode === 'all'
                  ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {t('All 14 Lokas', 'सभी 14 लोक')}
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode('urdhva');
                if (selectedNumber > 7) setSelectedNumber(1);
              }}
              className={`min-h-[38px] sm:min-h-0 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all cursor-pointer text-center ${
                filterMode === 'urdhva'
                  ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {t('7 Urdhva Lokas (Higher)', '7 ऊर्ध्व लोक (उच्च)')}
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode('adho');
                if (selectedNumber <= 7) setSelectedNumber(8);
              }}
              className={`min-h-[38px] sm:min-h-0 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all cursor-pointer text-center ${
                filterMode === 'adho'
                  ? 'bg-teal-500/25 text-teal-200 border border-teal-400/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {t('7 Adho Lokas / Patala (Lower)', '7 अधो लोक / पाताल (निम्न)')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-end">
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 leading-tight">
              {t(
                'The 14 Lokas in Hindu Cosmology',
                'हिन्दू ब्रह्माण्ड विज्ञान में १४ लोक (चतुर्दश भुवन)'
              )}
            </h3>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed">
              {t(
                'In Hindu cosmology, the universe is traditionally described through 14 Lokas (worlds or realms): seven higher realms (Urdhva Lokas) and seven lower realms (Adho Lokas), the latter commonly called the Patala realms. These worlds appear in Hindu scriptures, particularly the Puranas, although their descriptions and interpretations vary across texts and traditions. They represent different cosmic environments, inhabitants, and levels of existence.',
                'हिन्दू ब्रह्माण्ड विज्ञान में ब्रह्माण्ड का पारंपरिक वर्णन १४ लोकों (भुवनों या आयामों) के माध्यम से किया गया है: सात उच्च लोक (ऊर्ध्व लोक) और सात निम्न लोक (अधो लोक), जिन्हें सामान्यतः पाताल या सप्त-तल कहा जाता है। ये लोक हिन्दू शास्त्रों—विशेषकर पुराणों—में वर्णित हैं; यद्यपि विभिन्न ग्रंथों और परंपराओं में इनके विवरण एवं व्याख्याएँ भिन्न मिलती हैं। ये विभिन्न ब्रह्माण्डीय वातावरणों, निवासियों और अस्तित्व के स्तरों का प्रतिनिधित्व करते हैं।'
              )}
            </p>
          </div>

          {/* Cosmological Summary Metrics */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25">
              <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300/90">
                {t('Urdhva Lokas (1 – 7)', 'ऊर्ध्व लोक (1 – 7)')}
              </div>
              <div className="text-base font-serif font-semibold text-amber-100 mt-1">
                {t('Seven Upper Worlds', 'सात उच्च लोक')}
              </div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {t(
                  'From Satya Loka (Brahma Loka) down to Bhur Loka (Earth) — planes of truth, tapas, rishis, devas, and embodied karma.',
                  'सत्य लोक (ब्रह्म लोक) से भूर्लोक (पृथ्वी) तक — सत्य, तप, ऋषियों, देवताओं और सदेह कर्म के आयाम।'
                )}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/25">
              <div className="text-[11px] font-mono uppercase tracking-widest text-teal-300/90">
                {t('Adho Lokas (8 – 14)', 'अधो लोक / पाताल (8 – 14)')}
              </div>
              <div className="text-base font-serif font-semibold text-teal-100 mt-1">
                {t('Seven Lower Worlds (Patala)', 'सात निम्न लोक (पाताल / बिल-स्वर्ग)')}
              </div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {t(
                  'Beneath Bhuloka — Atala to Patala: realms of asuras, nagas, King Mahabali, Maya Danava, and subterranean splendor (distinct from Naraka).',
                  'भूर्लोक के नीचे — अतल से पाताल तक: असुरों, नागों, राजा महाबली, मय दानव और अद्भुत भूमिगत वैभव के लोक (नरक से भिन्न)।'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Studio: Left Hierarchy + Center Cosmic Axis + Right Deep Dossier */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-amber-500/20">
        {/* LEFT COLUMN (5 cols): Complete Hierarchy at a Glance + Interactive Cosmic Axis */}
        <div
          id="loka-hierarchy-list"
          className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-amber-500/20 bg-[#08070f]/90 p-4 sm:p-5 md:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-amber-400/90 block">
                  {t('INTERACTIVE COSMIC HIERARCHY', 'इंटरैक्टिव ब्रह्माण्डीय अनुक्रम')}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                  {t('The Complete Hierarchy at a Glance', 'सम्पूर्ण पदानुक्रम — एक दृष्टि में')}
                </h4>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-amber-300/90 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded">
                {t('Tap any Loka to inspect', 'विवरण हेतु किसी भी लोक को चुनें')}
              </span>
            </div>

            {/* Interactive SVG Meru-Brahmanda Axis + 14 Tier Selector */}
            <div className="space-y-1.5 mt-3">
              {/* Higher Realms Banner */}
              {(filterMode === 'all' || filterMode === 'urdhva') && (
                <div className="flex items-center justify-between px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/25 mb-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-amber-300">
                    {t('HIGHER REALMS · URDHVA LOKAS (1–7)', 'उच्च लोक · ऊर्ध्व लोक (1–7)')}
                  </span>
                  <span className="text-[10px] font-mono text-amber-200/75 shrink-0">
                    {t('Satya → Bhur', 'सत्य → भूः')}
                  </span>
                </div>
              )}

              {filteredLokas.map((loka) => {
                const isSelected = loka.number === selectedNumber;
                const isHovered = loka.number === hoveredNumber;
                const isEarth = loka.number === 7;
                const isUpper = loka.category === 'urdhva';

                return (
                  <React.Fragment key={loka.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectLoka(loka.number, true)}
                      onMouseEnter={() => setHoveredNumber(loka.number)}
                      onMouseLeave={() => setHoveredNumber(null)}
                      className={`w-full text-left rounded-lg px-3 sm:px-3.5 py-2.5 min-h-[52px] transition-all duration-200 flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer border ${
                        isSelected
                          ? isUpper
                            ? 'bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent border-amber-400/70 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                            : 'bg-gradient-to-r from-teal-500/25 via-teal-500/15 to-transparent border-teal-400/70 shadow-[0_0_25px_rgba(20,184,166,0.2)]'
                          : isHovered
                          ? 'bg-white/[0.05] border-amber-500/35'
                          : 'bg-white/[0.02] border-white/10 hover:border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 border"
                          style={{
                            borderColor: isSelected ? loka.accentColor : 'rgba(255,255,255,0.15)',
                            backgroundColor: isSelected ? `${loka.accentColor}28` : 'rgba(0,0,0,0.4)',
                            color: isSelected ? '#ffffff' : loka.accentColor
                          }}
                        >
                          {loka.number}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-serif font-semibold text-sm truncate ${
                                isSelected ? 'text-white' : 'text-stone-200'
                              }`}
                            >
                              {t(loka.nameEn, loka.nameHi)}
                            </span>
                            {isEarth && (
                              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                {t('Earth Pivot', 'पृथ्वी धुरी')}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-stone-400 truncate">
                            {t(loka.glanceTagEn, loka.glanceTagHi)}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block text-[10px] font-mono text-stone-400 max-w-[140px] truncate">
                          {t(loka.rulerEn.split('(')[0], loka.rulerHi.split('(')[0])}
                        </span>
                        <span
                          className={`text-xs font-mono transition-transform ${
                            isSelected ? 'translate-x-0.5 text-amber-300' : 'text-stone-500'
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </button>

                    {/* Divider right after 7. Bhur Loka */}
                    {isEarth && filterMode === 'all' && (
                      <div className="my-3 py-2 px-3 rounded-lg bg-gradient-to-r from-emerald-950/50 via-amber-950/40 to-teal-950/50 border border-emerald-400/30 text-center">
                        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-300 font-semibold">
                          {t(
                            '◆ Earth separates the upper and lower sequences ◆',
                            '◆ पृथ्वी उच्च (ऊर्ध्व) और निम्न (अधो) लोकों के अनुक्रम को विभाजित करती है ◆'
                          )}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-teal-300/90 mt-1">
                          {t(
                            'LOWER REALMS · ADHO LOKAS / PATALA (8–14)',
                            'निम्न लोक · अधो लोक / पाताल (8–14)'
                          )}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Note at bottom of hierarchy */}
          <div className="mt-5 pt-4 border-t border-amber-500/15 text-xs text-stone-400 font-mono leading-relaxed">
            {t(
              'Note: Simplified representation of the traditional Puranic hierarchy; not a modern astronomical map.',
              'टिप्पणी: यह पारंपरिक पौराणिक पदानुक्रम का सरलीकृत निरूपण है; यह कोई आधुनिक खगोलीय मानचित्र नहीं है।'
            )}
          </div>
        </div>

        {/* RIGHT COLUMN (7 cols): Deep Interactive Dossier of Selected Loka */}
        <div
          id="loka-detail-dossier"
          className="lg:col-span-7 p-4 sm:p-6 md:p-9 bg-[#0a0914]/95 flex flex-col justify-between scroll-mt-20"
        >
          <div>
            {/* Mobile Quick Jump Back to 14-Loka List */}
            <div className="lg:hidden mb-3 flex items-center justify-between gap-2 pb-2.5 border-b border-amber-500/15">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-amber-300/90">
                {t(`Active Dossier · Loka ${selectedLoka.number}/14`, `सक्रिय विवरण · लोक ${selectedLoka.number}/14`)}
              </span>
              <button
                type="button"
                onClick={() => {
                  const listEl = document.getElementById('loka-hierarchy-list');
                  if (listEl) {
                    listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-2.5 py-1 rounded border border-amber-500/35 bg-amber-500/10 text-[10px] font-mono text-amber-200 cursor-pointer"
              >
                ↑ {t('All 14 Lokas List', 'सभी 14 लोक सूची')}
              </button>
            </div>

            {/* Top Dossier Navigation Bar */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-amber-500/20">
              <div className="flex items-start sm:items-center gap-3">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl flex flex-col items-center justify-center font-mono border shadow-inner"
                  style={{
                    borderColor: selectedLoka.accentColor,
                    backgroundColor: `${selectedLoka.accentColor}20`
                  }}
                >
                  <span className="text-[8.5px] sm:text-[9px] uppercase tracking-widest text-stone-300">
                    {t('LOKA', 'लोक')}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white leading-none">
                    {selectedLoka.number}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span
                      className={`text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.2em] px-2 sm:px-2.5 py-0.5 rounded border ${
                        isUrdhva
                          ? 'bg-amber-500/15 text-amber-300 border-amber-400/35'
                          : 'bg-teal-500/15 text-teal-300 border-teal-400/35'
                      }`}
                    >
                      {t(selectedLoka.categoryLabelEn, selectedLoka.categoryLabelHi)}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                      {t(selectedLoka.altNameEn, selectedLoka.altNameHi)}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mt-1 leading-snug">
                    {selectedLoka.number}. {t(selectedLoka.nameEn, selectedLoka.nameHi)}
                  </h4>
                </div>
              </div>

              {/* Prev / Next Loka step buttons */}
              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0">
                <button
                  type="button"
                  onClick={handlePrevLoka}
                  className="min-h-[38px] flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono text-amber-200 transition cursor-pointer text-center"
                >
                  ← {t('Prev Loka', 'पिछला लोक')}
                </button>
                <span className="text-xs font-mono text-stone-400 px-1.5 shrink-0">
                  {selectedLoka.number} / 14
                </span>
                <button
                  type="button"
                  onClick={handleNextLoka}
                  className="min-h-[38px] flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono text-amber-200 transition cursor-pointer text-center"
                >
                  {t('Next Loka', 'अगला लोक')} →
                </button>
              </div>
            </div>

            {/* Subtitle & Visual Cosmic Emblem */}
            <div className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-center bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent p-3.5 sm:p-4 rounded-xl border border-white/10">
              <div className="md:col-span-8">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-amber-300">
                  {t('COSMIC DESIGNATION', 'ब्रह्माण्डीय संज्ञा')}
                </div>
                <div className="text-base sm:text-lg font-serif font-semibold text-amber-100 mt-0.5">
                  {t(selectedLoka.subtitleEn, selectedLoka.subtitleHi)}
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mt-2">
                  {t(selectedLoka.summaryEn, selectedLoka.summaryHi)}
                </p>
              </div>

              {/* Dynamic SVG Mandala / Stratum Diagram for Selected Loka */}
              <div className="md:col-span-4 flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 180 140"
                  className="w-full max-w-[160px] sm:max-w-[180px] h-auto overflow-visible"
                  aria-label={t(selectedLoka.nameEn, selectedLoka.nameHi)}
                >
                  <defs>
                    <radialGradient id="lokaGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={selectedLoka.accentColor} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={selectedLoka.accentColor} stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="90" cy="70" r="60" fill="url(#lokaGlow)" />
                  {/* 14-step vertical cosmic axis indicator */}
                  {FOURTEEN_LOKAS.map((item, idx) => {
                    const y = 10 + idx * 8.8;
                    const active = item.number === selectedLoka.number;
                    const width = active ? 110 : 48 - Math.abs(7 - item.number) * 3;
                    return (
                      <g
                        key={item.id}
                        onClick={() => handleSelectLoka(item.number)}
                        className="cursor-pointer"
                      >
                        <line
                          x1={90 - width / 2}
                          y1={y}
                          x2={90 + width / 2}
                          y2={y}
                          stroke={active ? item.accentColor : 'rgba(212,175,55,0.32)'}
                          strokeWidth={active ? 3.2 : 1.2}
                        />
                        {active && (
                          <>
                            <circle
                              cx={90 - width / 2 - 6}
                              cy={y}
                              r={3}
                              fill={item.accentColor}
                            />
                            <circle
                              cx={90 + width / 2 + 6}
                              cy={y}
                              r={3}
                              fill={item.accentColor}
                            />
                          </>
                        )}
                      </g>
                    );
                  })}
                  <line
                    x1="90"
                    y1="6"
                    x2="90"
                    y2="132"
                    stroke="rgba(245,158,11,0.3)"
                    strokeDasharray="2 2"
                  />
                </svg>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-1">
                  {t(
                    `Stratum ${selectedLoka.number} of 14 on Meru Axis`,
                    `मेरु अक्ष पर 14 में से स्तर ${selectedLoka.number}`
                  )}
                </span>
              </div>
            </div>

            {/* Key Governance Grid: Who Rules / Controls It & Who Inhabits It */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mt-4 sm:mt-5">
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                <div className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-amber-300 flex items-center justify-between">
                  <span>
                    {t('WHO CONTROLS / PRESIDES OVER IT', 'अधिपति / नियंत्रक सत्ता')}
                  </span>
                  <span className="text-amber-400">◈</span>
                </div>
                <div className="text-sm sm:text-base font-serif font-bold text-white mt-1.5 leading-snug">
                  {t(selectedLoka.rulerEn, selectedLoka.rulerHi)}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-teal-950/20 border border-teal-500/30">
                <div className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-teal-300 flex items-center justify-between">
                  <span>
                    {t('INHABITANTS & BEINGS', 'निवासी एवं सत्ताएँ')}
                  </span>
                  <span className="text-teal-400">◈</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-stone-100 mt-1.5 leading-snug">
                  {t(selectedLoka.inhabitantsEn, selectedLoka.inhabitantsHi)}
                </div>
              </div>
            </div>

            {/* Detailed Environment & Architecture */}
            <div className="mt-4 sm:mt-5 p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-amber-300 mb-2">
                {t(
                  'DETAILED COSMIC ENVIRONMENT & PURANIC DESCRIPTION',
                  'विस्तृत ब्रह्माण्डीय वातावरण एवं पौराणिक विवरण'
                )}
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {t(selectedLoka.detailedEnvironmentEn, selectedLoka.detailedEnvironmentHi)}
              </p>

              {/* Bullet points of What Is There in Detail */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-teal-300 mb-2.5">
                  {t(
                    'WHAT IS THERE IN DETAIL — KEY FEATURES, REALMS & PHENOMENA',
                    'यहाँ विस्तार से क्या-क्या स्थित है — प्रमुख विशेषताएँ एवं रहस्य'
                  )}
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {(t(selectedLoka.nameEn, selectedLoka.nameHi) === selectedLoka.nameEn
                    ? selectedLoka.whatIsThereBulletsEn
                    : selectedLoka.whatIsThereBulletsHi
                  ).map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-stone-200 leading-relaxed bg-black/35 border border-white/10 rounded-lg p-3 flex items-start gap-2.5"
                    >
                      <span
                        className="font-mono font-bold text-xs shrink-0 mt-0.5"
                        style={{ color: selectedLoka.accentColor }}
                      >
                        0{idx + 1}.
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subtle-Body Chakra/Tala Correspondence & Scriptural Citations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mt-4">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-amber-300/90">
                  {t(
                    'SUBTLE-BODY (CHAKRA / TALA) & VYAHRITI MAPPING',
                    'सूक्ष्म-शरीर (चक्र / तल) एवं व्याहृति संबंध'
                  )}
                </div>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {t(selectedLoka.subtleBodyMappingEn, selectedLoka.subtleBodyMappingHi)}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-teal-300/90">
                  {t('PRIMARY SCRIPTURAL SOURCES', 'प्रमुख शास्त्रीय स्रोत')}
                </div>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {t(selectedLoka.scripturalSourcesEn, selectedLoka.scripturalSourcesHi)}
                </p>
              </div>
            </div>
          </div>

          {/* Quick 1-14 Number Bar */}
          <div className="mt-5 sm:mt-6 pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
              {t('Direct Loka Jump:', 'सीधे लोक चुनें:')}
            </span>
            <div className="grid grid-cols-7 sm:flex sm:flex-wrap gap-1.5">
              {FOURTEEN_LOKAS.map((l) => (
                <button
                  key={l.number}
                  type="button"
                  onClick={() => handleSelectLoka(l.number)}
                  className={`h-9 sm:w-8 sm:h-8 rounded text-xs font-mono font-semibold transition cursor-pointer border flex items-center justify-center ${
                    l.number === selectedNumber
                      ? 'bg-amber-500 text-black border-amber-300 font-bold'
                      : l.category === 'urdhva'
                      ? 'bg-amber-950/30 text-amber-200/80 border-amber-500/25 hover:border-amber-400'
                      : 'bg-teal-950/30 text-teal-200/80 border-teal-500/25 hover:border-teal-400'
                  }`}
                  title={t(l.nameEn, l.nameHi)}
                >
                  {l.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Three Important Distinctions & Central Cosmological Idea */}
      <div className="relative z-10 p-4 sm:p-6 md:p-10 bg-gradient-to-b from-[#08070f] to-[#050509]">
        <div className="max-w-3xl mb-5 sm:mb-6">
          <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.22em] sm:tracking-[0.25em] text-amber-400">
            {t('CRITICAL SCRIPTURAL CLARIFICATIONS', 'महत्त्वपूर्ण शास्त्रीय स्पष्टीकरण')}
          </span>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
            {t('Three Important Distinctions', 'तीन महत्त्वपूर्ण शास्त्रीय भेद')}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {THREE_IMPORTANT_DISTINCTIONS.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-amber-500/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
                  <span>{t(`DISTINCTION 0${idx + 1}`, `भेद 0${idx + 1}`)}</span>
                  <span>◆</span>
                </div>
                <h5 className="text-sm sm:text-base font-serif font-bold text-amber-100 leading-snug">
                  {t(item.titleEn, item.titleHi)}
                </h5>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-2.5">
                  {t(item.bodyEn, item.bodyHi)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Synthesis Box */}
        <div className="mt-6 sm:mt-7 p-4 sm:p-5 md:p-6 rounded-xl bg-gradient-to-r from-amber-950/30 via-[#0d0b18] to-teal-950/30 border border-amber-400/30">
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.22em] text-amber-300 mb-1.5">
            {t('CENTRAL COSMOLOGICAL SYNTHESIS', 'केन्द्रीय ब्रह्माण्डीय सिद्धांत')}
          </div>
          <p className="text-xs sm:text-sm md:text-base text-stone-200 leading-relaxed font-serif">
            {t(
              'The central idea is that the fourteen Lokas form a traditional map of cosmic existence, spanning the earthly world, celestial realms, spiritual planes, and extraordinary subterranean kingdoms. Their meaning can be interpreted cosmologically, symbolically, or spiritually, depending on the Hindu tradition.',
              'केन्द्रीय विचार यह है कि ये चौदह लोक (चतुर्दश भुवन) ब्रह्माण्डीय अस्तित्व का एक पारंपरिक मानचित्र प्रस्तुत करते हैं—जिसमें पृथ्वी लोक, दिव्य स्वर्गीय लोक, उच्च आध्यात्मिक आयाम और अद्भुत भूमिगत राज्य समाहित हैं। विभिन्न हिन्दू परंपराओं के अनुसार इनका अर्थ ब्रह्माण्डीय, प्रतीकात्मक अथवा आध्यात्मिक (योगिक) स्तर पर समझा जाता है।'
            )}
          </p>
        </div>

        {/* Chapter Footer Navigation */}
        <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="text-xs font-mono text-stone-400 text-center sm:text-left">
            {t(
              'Research Philosophy · Chapter VII · Compiled by Ram Ashok Kumar',
              'शोध दर्शन · अध्याय VII · राम अशोक कुमार द्वारा संकलित'
            )}
          </div>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
            {onPrevChapter && (
              <button
                type="button"
                onClick={onPrevChapter}
                className="min-h-[42px] px-4 py-2 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono uppercase tracking-wider text-amber-200 transition cursor-pointer text-center"
              >
                ← {t('Prev: VI · Shri Meru', 'पिछला: VI · श्री मेरु')}
              </button>
            )}
            {onNextChapter && (
              <button
                type="button"
                onClick={onNextChapter}
                className="min-h-[42px] px-4 py-2 rounded-lg border border-amber-400/40 bg-amber-500/20 hover:bg-amber-500/30 text-xs font-mono uppercase tracking-wider text-amber-100 transition cursor-pointer text-center"
              >
                {t('Return to Chapter I', 'अध्याय I पर लौटें')} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
