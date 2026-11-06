import React, { useState, useMemo, useEffect } from 'react';
import {
  DASHA_DIKPALAS,
  UNIVERSAL_DIKPALA_NAMASKARA,
  DikpalaRecord
} from '../data/dashaDikpalaData';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Shield, Sparkles, Copy, Check, Volume2, ArrowRight, ArrowLeft } from 'lucide-react';

interface DashaDikpalaExperienceProps {
  initialDirectionIndex?: number;
  onPrevChapter?: () => void;
  onNextChapter?: () => void;
}

type FilterMode = 'all' | 'cardinal-intercardinal' | 'vertical';

export const DashaDikpalaExperience: React.FC<DashaDikpalaExperienceProps> = ({
  initialDirectionIndex,
  onPrevChapter,
  onNextChapter
}) => {
  const { t } = useLanguage();
  const [selectedNumber, setSelectedNumber] = useState<number>(
    typeof initialDirectionIndex === 'number' && initialDirectionIndex >= 0 && initialDirectionIndex < 10
      ? initialDirectionIndex + 1
      : 1
  );
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [hoveredNumber, setHoveredNumber] = useState<number | null>(null);
  const [copiedMantra, setCopiedMantra] = useState<boolean>(false);
  const [isPlayingChant, setIsPlayingChant] = useState<boolean>(false);

  useEffect(() => {
    if (typeof initialDirectionIndex === 'number' && initialDirectionIndex >= 0 && initialDirectionIndex < 10) {
      setSelectedNumber(initialDirectionIndex + 1);
      setFilterMode('all');
    }
  }, [initialDirectionIndex]);

  const selectedDikpala: DikpalaRecord = useMemo(() => {
    return DASHA_DIKPALAS.find((d) => d.number === selectedNumber) || DASHA_DIKPALAS[0];
  }, [selectedNumber]);

  const filteredDikpalas = useMemo(() => {
    if (filterMode === 'all') return DASHA_DIKPALAS;
    if (filterMode === 'cardinal-intercardinal') {
      return DASHA_DIKPALAS.filter((d) => d.directionType === 'cardinal' || d.directionType === 'intercardinal');
    }
    return DASHA_DIKPALAS.filter((d) => d.directionType === 'vertical');
  }, [filterMode]);

  const handleSelectDikpala = (num: number, scrollToDossierOnMobile = false) => {
    setSelectedNumber(num);
    setCopiedMantra(false);
    if (scrollToDossierOnMobile && typeof window !== 'undefined' && window.innerWidth < 1024) {
      const dossierEl = document.getElementById('dikpala-detail-dossier');
      if (dossierEl) {
        dossierEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrev = () => {
    setSelectedNumber((prev) => (prev <= 1 ? 10 : prev - 1));
    setCopiedMantra(false);
  };

  const handleNext = () => {
    setSelectedNumber((prev) => (prev >= 10 ? 1 : prev + 1));
    setCopiedMantra(false);
  };

  const handleCopyMantra = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(selectedDikpala.bijaMantra).catch(() => {});
    }
    setCopiedMantra(true);
    setTimeout(() => setCopiedMantra(false), 2000);
  };

  const handleToggleChant = () => {
    setIsPlayingChant(true);
    setTimeout(() => setIsPlayingChant(false), 2400);
  };

  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-amber-500/25 bg-[#07060d]/95 backdrop-blur-xl shadow-[0_25px_90px_rgba(0,0,0,0.85)] overflow-hidden text-stone-100">
      {/* Subtle sacred background grid & radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 15%, rgba(245, 158, 11, 0.16), transparent 45%),
            radial-gradient(circle at 82% 80%, rgba(56, 189, 248, 0.14), transparent 50%),
            linear-gradient(to right, rgba(212, 175, 55, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 44px 44px, 44px 44px'
        }}
      />

      {/* Top Architectural Header */}
      <div className="relative z-10 border-b border-amber-500/20 px-4 py-5 sm:px-6 sm:py-7 md:px-10 md:py-8 bg-gradient-to-b from-amber-950/20 via-[#090812]/90 to-transparent">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 py-1 rounded-sm bg-amber-500/15 border border-amber-400/35 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300">
              {t('GATEWAY VIII · DAŚA DIKPĀLA APPARATUS', 'द्वार VIII · दशदिक्पाल संवादात्मक अध्ययन कक्ष')}
            </span>
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.16em] text-stone-400 uppercase">
              {t('10 GUARDIANS · 8 HORIZON DIRECTIONS + 2 VERTICAL AXES', '१० दिक्पाल · ८ क्षितिज दिशाएँ + २ ऊर्ध्व व अधः अक्ष')}
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
              {t('All 10 Guardians', 'सभी १० दिक्पाल')}
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode('cardinal-intercardinal');
                if (selectedNumber > 8) setSelectedNumber(1);
              }}
              className={`min-h-[38px] sm:min-h-0 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all cursor-pointer text-center ${
                filterMode === 'cardinal-intercardinal'
                  ? 'bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {t('8 Horizon Directions (Aṣṭa)', '८ क्षितिज दिशाएँ (अष्टदिक्पाल)')}
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode('vertical');
                if (selectedNumber <= 8) setSelectedNumber(9);
              }}
              className={`min-h-[38px] sm:min-h-0 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all cursor-pointer text-center ${
                filterMode === 'vertical'
                  ? 'bg-sky-500/25 text-sky-200 border border-sky-400/40 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {t('2 Vertical (Zenith & Nadir)', '२ ऊर्ध्व व अधः दिशाएँ (ब्रह्मा व विष्णु)')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-end">
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 leading-tight">
              {t(
                'दशदिक्पाल – The Ten Divine Guardians of the Universe',
                'दशदिक्पाल — ब्रह्माण्ड के दस दिशा-रक्षक देवता'
              )}
            </h3>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed font-serif">
              {t(
                'In Vedic, Āgamic, and Vāstu cosmology, the ten Dikpālas (दश दिक्पालाः) are the consecrated guardians stationed at the eight compass horizons plus the vertical cosmic axes (Zenith and Nadir). Each guardian governs a spatial vector through their divine weapon, sacred vāhana, presiding Goddess (Śakti), and vibrational bīja mantra, maintaining cosmic equilibrium, ethical order, and sacred boundary defense.',
                'वैदिक, आगमिक एवं वास्तु ब्रह्माण्ड-विज्ञान में दस दिक्पाल (दश दिक्पालाः) आठ क्षितिज दिशाओं तथा दो ऊर्ध्वाधर ब्रह्माण्डीय अक्षों (ऊर्ध्व आकाश व अधः पाताल) के अधिष्ठाता देवता हैं। प्रत्येक दिक्पाल अपने दिव्य अस्त्र, वाहन, सहचरी शक्ति और बीज-मन्त्र के माध्यम से अपने दिशात्मक क्षेत्र का संरक्षण करते हैं तथा ब्रह्माण्डीय संतुलन, धर्म-व्यवस्था और पवित्र परिसर की रक्षा करते हैं।'
              )}
            </p>
          </div>

          {/* Universal Salutation Plaque */}
          <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#1E130B]/90 to-amber-950/30 border border-amber-500/40 text-center shadow-lg">
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-amber-300/80 block">
              {t('UNIVERSAL DIKPĀLA NAMASKĀRA', 'सार्वभौमिक दशदिक्पाल नमस्कार')}
            </span>
            <div className="mt-1 font-serif text-lg sm:text-xl font-bold text-[#F5E8CE] tracking-wide">
              {UNIVERSAL_DIKPALA_NAMASKARA.sanskrit}
            </div>
            <div className="mt-0.5 font-mono text-xs text-amber-400 italic">
              {UNIVERSAL_DIKPALA_NAMASKARA.translit}
            </div>
            <p className="mt-1 text-[11px] font-serif text-stone-300/85">
              {t(UNIVERSAL_DIKPALA_NAMASKARA.meaningEn, UNIVERSAL_DIKPALA_NAMASKARA.meaningHi)}
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Studio Grid: Left 10-Point Hierarchy & Compass + Right Deep Dossier */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-amber-500/20">
        {/* LEFT COLUMN (5 cols): Interactive 10-Directional Roster & Compass */}
        <div
          id="dikpala-hierarchy-list"
          className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-amber-500/20 bg-[#08070f]/90 p-4 sm:p-5 md:p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-amber-400/90 block">
                  {t('TEN-DIRECTIONAL SPATIAL VECTORS', 'दश-दिशात्मक अंतरिक्षीय सदिश')}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                  {t('The 10 Dikpālas at a Glance', 'दश दिक्पाल — एक दृष्टि में')}
                </h4>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-amber-300/90 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded">
                {t('Tap to inspect guardian', 'दिक्पाल विवरण हेतु चयन करें')}
              </span>
            </div>

            {/* List of 10 Dikpalas */}
            <div className="space-y-1.5 mt-3">
              {filteredDikpalas.map((dikpala) => {
                const isSelected = dikpala.number === selectedNumber;
                const isHovered = dikpala.number === hoveredNumber;
                const isVertical = dikpala.directionType === 'vertical';

                return (
                  <button
                    key={dikpala.id}
                    type="button"
                    onClick={() => handleSelectDikpala(dikpala.number, true)}
                    onMouseEnter={() => setHoveredNumber(dikpala.number)}
                    onMouseLeave={() => setHoveredNumber(null)}
                    className={`w-full text-left rounded-lg px-3 sm:px-3.5 py-2.5 min-h-[50px] transition-all duration-200 flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer border ${
                      isSelected
                        ? isVertical
                          ? 'bg-gradient-to-r from-sky-500/25 via-sky-500/15 to-transparent border-sky-400/70 shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                          : 'bg-gradient-to-r from-amber-500/25 via-amber-500/15 to-transparent border-amber-400/70 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                        : isHovered
                        ? 'bg-white/[0.05] border-amber-500/35'
                        : 'bg-white/[0.02] border-white/10 hover:border-amber-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 border"
                        style={{
                          borderColor: isSelected ? dikpala.accentColor : 'rgba(255,255,255,0.15)',
                          backgroundColor: isSelected ? `${dikpala.accentColor}28` : 'rgba(0,0,0,0.4)',
                          color: isSelected ? '#ffffff' : dikpala.accentColor
                        }}
                      >
                        {dikpala.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-serif font-semibold text-sm truncate ${
                              isSelected ? 'text-white' : 'text-stone-200'
                            }`}
                          >
                            {t(dikpala.nameEn, dikpala.nameHi)}
                          </span>
                          <span
                            className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border"
                            style={{
                              borderColor: `${dikpala.accentColor}55`,
                              color: dikpala.accentColor,
                              backgroundColor: `${dikpala.accentColor}15`
                            }}
                          >
                            {t(dikpala.directionEn.split(' (')[0], dikpala.directionHi.split(' (')[0])}
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-400 truncate">
                          {t(`Goddess: ${dikpala.goddessEn.split(' /')[0]} · Vāhana: ${dikpala.vehicleEn.split(' (')[0]}`, `शक्ति: ${dikpala.goddessHi.split(' /')[0]} · वाहन: ${dikpala.vehicleHi.split(' (')[0]}`)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs font-bold" style={{ color: dikpala.accentColor }}>
                        {dikpala.bijaMantra.split(' ')[1] || 'ॐ'}
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
                );
              })}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-5 pt-4 border-t border-amber-500/15 text-xs text-stone-400 font-mono leading-relaxed">
            {t(
              'Direction • Deity • Goddess • Mantra • Weapon • Vehicle • Divine Domain',
              'दिशा • देवता • शक्ति (देवी) • मूल-मंत्र • अस्त्र • वाहन • दिव्य अधिकार-क्षेत्र'
            )}
          </div>
        </div>

        {/* RIGHT COLUMN (7 cols): Deep Interactive Dossier of Selected Dikpala */}
        <div
          id="dikpala-detail-dossier"
          className="lg:col-span-7 p-4 sm:p-6 md:p-8 bg-[#0a0914]/95 flex flex-col justify-between scroll-mt-20"
        >
          <div>
            {/* Top Dossier Navigation Bar */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-3 sm:gap-4 pb-5 border-b border-amber-500/20">
              <div className="flex items-start sm:items-center gap-3">
                <div
                  className="w-12 h-12 shrink-0 rounded-xl flex flex-col items-center justify-center font-mono border shadow-inner"
                  style={{
                    borderColor: selectedDikpala.accentColor,
                    backgroundColor: `${selectedDikpala.accentColor}20`
                  }}
                >
                  <span className="text-[8.5px] uppercase tracking-widest text-stone-300">
                    DIK
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white leading-none">
                    {selectedDikpala.number}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span
                      className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.18em] px-2.5 py-0.5 rounded border"
                      style={{
                        borderColor: `${selectedDikpala.accentColor}66`,
                        color: selectedDikpala.accentColor,
                        backgroundColor: `${selectedDikpala.accentColor}18`
                      }}
                    >
                      {t(selectedDikpala.directionEn, selectedDikpala.directionHi)}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                      {selectedDikpala.sanskritName}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mt-1 leading-snug">
                    {selectedDikpala.number}. {t(selectedDikpala.nameEn, selectedDikpala.nameHi)}
                  </h4>
                </div>
              </div>

              {/* Prev / Next step buttons */}
              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="min-h-[38px] flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono text-amber-200 transition cursor-pointer text-center"
                >
                  ← {t('Prev', 'पिछला')}
                </button>
                <span className="text-xs font-mono text-stone-400 px-1.5 shrink-0">
                  {selectedDikpala.number} / 10
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[38px] flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-xs font-mono text-amber-200 transition cursor-pointer text-center"
                >
                  {t('Next', 'अगला')} →
                </button>
              </div>
            </div>

            {/* Sacred Bīja Mantra Chanting Plate */}
            <div className="mt-5 p-4 sm:p-5 rounded-xl border border-amber-500/35 bg-[#17100B]/95 shadow-md space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/25 pb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{t('CONSECRATED BĪJA MANTRA (दशदिक्पाल मन्त्र)', 'दशदिक्पाल प्रतिष्ठित बीज-मन्त्र')}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleToggleChant}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                      isPlayingChant
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                        : 'bg-amber-500/15 border border-amber-500/35 text-amber-300 hover:bg-amber-500/25'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingChant ? t('Chanting...', 'जप जारी...') : t('Chant Mantra', 'मंत्र उच्चारण')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyMantra}
                    className="px-2.5 py-1 rounded bg-stone-900 border border-stone-700 hover:border-amber-500/50 text-[10px] font-mono text-stone-300 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedMantra ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">{t('Copied!', 'कॉपी हुआ!')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{t('Copy', 'कॉपी')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="text-center py-2">
                <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-amber-200 tracking-wide">
                  {selectedDikpala.bijaMantra}
                </div>
                <div className="text-xs sm:text-sm font-mono text-amber-400/90 tracking-widest mt-1">
                  {selectedDikpala.mantraTranslit}
                </div>
                {selectedDikpala.mantraNoteEn && (
                  <p className="text-[11px] font-serif text-stone-400 italic mt-1.5">
                    {t(selectedDikpala.mantraNoteEn, selectedDikpala.mantraNoteHi || '')}
                  </p>
                )}
              </div>
            </div>

            {/* 4-Card Attributes Matrix: Goddess, Vehicle, Weapon, Domain */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1: Goddess / Consort */}
              <div className="p-3.5 rounded-xl bg-[#140E0A]/90 border border-amber-500/25">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300/80 block">
                  {t('DIVINE GODDESS / ŚAKTI', 'सहचरी शक्ति / देवी')}
                </span>
                <div className="font-serif text-base font-bold text-white mt-1">
                  {t(selectedDikpala.goddessEn, selectedDikpala.goddessHi)}
                </div>
                <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                  {t(
                    `Presiding feminine energy manifesting divine protection in the ${selectedDikpala.directionEn}.`,
                    `${selectedDikpala.directionHi} में दिव्य शक्ति एवं संरक्षण प्रदान करने वाली अधिष्ठात्री देवी।`
                  )}
                </p>
              </div>

              {/* Card 2: Vehicle / Vahana */}
              <div className="p-3.5 rounded-xl bg-[#140E0A]/90 border border-amber-500/25">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300/80 block">
                  {t('SACRED VEHICLE (VĀHANA)', 'पवित्र वाहन')}
                </span>
                <div className="font-serif text-base font-bold text-white mt-1">
                  {t(selectedDikpala.vehicleEn, selectedDikpala.vehicleHi)}
                </div>
                <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                  {t(
                    'Symbolic biological mount anchoring the physical momentum of this quarter.',
                    'इस दिशा के गतिज एवं तात्त्विक बल को वहन करने वाला विशिष्ट वाहन।'
                  )}
                </p>
              </div>

              {/* Card 3: Sacred Weapon */}
              <div className="p-3.5 rounded-xl bg-[#140E0A]/90 border border-amber-500/25">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300/80 block">
                  {t('CONSECRATED WEAPON (ĀYUDHA)', 'दिव्य अस्त्र / आयुध')}
                </span>
                <div className="font-serif text-base font-bold text-white mt-1">
                  {t(selectedDikpala.weaponEn, selectedDikpala.weaponHi)}
                </div>
                <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                  {t(
                    'Instrument of sovereign boundary defense and cutting of negative forces.',
                    'सीमा-रक्षा एवं नकारात्मक शक्तियों के संहार हेतु समर्पित अस्त्र।'
                  )}
                </p>
              </div>

              {/* Card 4: Divine Domain */}
              <div className="p-3.5 rounded-xl bg-[#140E0A]/90 border border-amber-500/25">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-300/80 block">
                  {t('DIVINE DOMAIN & SOVEREIGNTY', 'दिव्य अधिकार-क्षेत्र')}
                </span>
                <div className="font-serif text-base font-bold text-white mt-1">
                  {t(selectedDikpala.domainEn, selectedDikpala.domainHi)}
                </div>
                <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                  {t(
                    `Cosmic functions and life processes sustained by ${selectedDikpala.nameEn}.`,
                    `${t(selectedDikpala.nameEn, selectedDikpala.nameHi)} द्वारा संचालित प्राकृतिक एवं आध्यात्मिक कार्य।`
                  )}
                </p>
              </div>
            </div>

            {/* Deep Cosmological & Vāstu Analysis */}
            <div className="mt-5 p-4 sm:p-5 rounded-xl bg-[#130C08]/90 border border-[#5A3922]/60 space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-amber-400 font-bold block">
                {t('PHILOSOPHICAL, THEOLOGICAL & VĀSTU EXEGESIS', 'दार्शनिक, शास्त्रीय एवं वास्तु-विधान विश्लेषण')}
              </span>
              <p className="font-serif text-sm sm:text-[14.5px] text-stone-200 leading-relaxed">
                {t(selectedDikpala.detailedAnalysisEn, selectedDikpala.detailedAnalysisHi)}
              </p>
              <div className="pt-2 border-t border-[#5A3922]/40 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-400">
                <span>
                  {t('Cosmic Element:', 'ब्रह्माण्डीय तत्त्व:')}{' '}
                  <strong className="text-amber-300">{t(selectedDikpala.elementEn, selectedDikpala.elementHi)}</strong>
                </span>
                <span>
                  {t('Scriptural Base:', 'शास्त्रीय स्रोत:')}{' '}
                  <strong className="text-stone-300">{t(selectedDikpala.scripturalContextEn, selectedDikpala.scripturalContextHi)}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Step Guide */}
          <div className="mt-6 pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
              {t(`Active Vector: ${selectedDikpala.number} of 10 (${selectedDikpala.directionEn})`, `सक्रिय दिशा: ${selectedDikpala.number} / १० (${selectedDikpala.directionHi})`)}
            </span>
            <div className="flex items-center gap-1.5">
              {DASHA_DIKPALAS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => handleSelectDikpala(d.number)}
                  className={`w-6 h-6 rounded-md font-mono text-[10px] transition-all cursor-pointer ${
                    d.number === selectedNumber
                      ? 'bg-amber-400 text-stone-950 font-bold scale-110 shadow-sm'
                      : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {d.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashaDikpalaExperience;
