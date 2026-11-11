import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Compass, Shield, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  VISHNU_DASHAVATARA_ENTRIES,
  VishnuDashavataraEntry
} from '../data/vishnuDashavataraData';

interface VishnuDashavataraExperienceProps {
  initialAvatarIndex?: number;
  onOpenArticle?: (categorySlug: string, articleSlug: string) => void;
}

export const VishnuDashavataraExperience: React.FC<VishnuDashavataraExperienceProps> = ({
  initialAvatarIndex = 0,
  onOpenArticle
}) => {
  const { lang, t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number>(initialAvatarIndex);
  const [yugaFilter, setYugaFilter] = useState<'all' | 'mula' | 'satya' | 'treta' | 'dvapara' | 'kali'>('all');
  const [viewMode, setViewMode] = useState<'wheel-studio' | 'all-11-plates' | 'yuga-evolution'>('wheel-studio');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (typeof initialAvatarIndex === 'number' && initialAvatarIndex >= 0 && initialAvatarIndex <= 10) {
      setSelectedIndex(initialAvatarIndex);
    }
  }, [initialAvatarIndex]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setSelectedIndex(prev => (prev + 1) % VISHNU_DASHAVATARA_ENTRIES.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeEntry: VishnuDashavataraEntry =
    VISHNU_DASHAVATARA_ENTRIES[selectedIndex] || VISHNU_DASHAVATARA_ENTRIES[0];

  const filteredEntries =
    yugaFilter === 'all'
      ? VISHNU_DASHAVATARA_ENTRIES
      : VISHNU_DASHAVATARA_ENTRIES.filter(e => e.yugaGroup === yugaFilter);

  return (
    <div className="rounded-2xl border-2 border-[#38BDF8]/50 bg-gradient-to-b from-[#081524] via-[#06101C] to-[#040A12] text-[#F5E8CE] p-4 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.9)] space-y-6">
      {/* Top Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#38BDF8]/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#38BDF8] mb-1">
            <Compass className="w-4 h-4 text-[#FDE047]" />
            <span>
              {t(
                'GATEWAY IX · VAIṢṆAVA PĀÑCARĀTRA & DAŚĀVATĀRA INTERACTIVE STUDIO',
                'ज्ञान-द्वार IX · भगवान् श्री विष्णु एवं दशावतार संवादात्मक अध्ययन कक्ष'
              )}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
            {t(
              '॥ श्री महाविष्णु एवं दशावतार ॥ — Bhagavān Śrī Viṣṇu & His 10 Cosmic Avatāras',
              '॥ श्री महाविष्णु एवं दशावतार ॥ — क्षीरसागरशायी नारायण एवं १० दिव्य अवतार (१. मत्स्य से १०. कल्कि)'
            )}
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#BAE6FD]/85 mt-1 max-w-3xl">
            {t(
              'Explore Supreme Śeṣaśāyī Mahāviṣṇu (00) and the canonical sequence of the Ten Avatāras across Satya, Tretā, Dvāpara, and Kali Yugas: 1. Matsya, 2. Kūrma, 3. Varāha, 4. Narasiṃha, 5. Vāmana, 6. Paraśurāma, 7. Śrī Rāma, 8. Śrī Kṛṣṇa, 9. Buddha, and 10. Kalki.',
              'मूल क्षीरसागरशायी भगवान् श्री महाविष्णु (००) तथा चारों युगों (सत्य, त्रेता, द्वापर, कलि) के क्रमानुसार दस अवतारों—१. मत्स्य, २. कूर्म, ३. वराह, ४. नृसिंह, ५. वामन, ६. परशुराम, ७. श्री राम, ८. श्री कृष्ण, ९. बुद्ध और १०. कल्कि—का सचित्र दर्शन एवं शास्त्रीय अध्ययन करें।'
            )}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode('wheel-studio')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'wheel-studio'
                ? 'bg-[#0284C7] text-white border-[#FDE047]'
                : 'bg-[#0B1E33] text-[#7DD3FC] border-[#38BDF8]/40 hover:border-[#FDE047]'
            }`}
          >
            {t('1. Sudarśana Wheel Studio', '१. सुदर्शन चक्र एवं अवतार कक्ष')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all-11-plates')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'all-11-plates'
                ? 'bg-[#0284C7] text-white border-[#FDE047]'
                : 'bg-[#0B1E33] text-[#7DD3FC] border-[#38BDF8]/40 hover:border-[#FDE047]'
            }`}
          >
            {t('2. All 11 Archival Plates', '२. सभी ११ मूल चित्र फलक')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('yuga-evolution')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
              viewMode === 'yuga-evolution'
                ? 'bg-[#0284C7] text-white border-[#FDE047]'
                : 'bg-[#0B1E33] text-[#7DD3FC] border-[#38BDF8]/40 hover:border-[#FDE047]'
            }`}
          >
            {t('3. Four-Yuga & Evolution Matrix', '३. चतुर्युग एवं चेतना-विकास क्रम')}
          </button>
        </div>
      </div>

      {/* Yuga Filter Bar + 11-Node Quick Selector Strip */}
      <div className="rounded-xl border border-[#38BDF8]/35 bg-[#050E1A]/95 p-4 space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Yuga Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', labelEn: 'All 11 Forms (00–10)', labelHi: 'सभी ११ स्वरूप (००–१०)' },
              { id: 'mula', labelEn: '00 · Mūla Viṣṇu', labelHi: '०० · मूल श्री महाविष्णु' },
              { id: 'satya', labelEn: 'Satya Yuga (01–04)', labelHi: 'सत्ययुग (०१–०४)' },
              { id: 'treta', labelEn: 'Tretā Yuga (05–07)', labelHi: 'त्रेतायुग (०५–०७)' },
              { id: 'dvapara', labelEn: 'Dvāpara (08 · Śrī Kṛṣṇa)', labelHi: 'द्वापरयुग (०८ · श्री कृष्ण)' },
              { id: 'kali', labelEn: 'Kali Yuga (09–10)', labelHi: 'कलियुग (०९–१०)' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  const nextFilter = tab.id as typeof yugaFilter;
                  setYugaFilter(nextFilter);
                  if (nextFilter !== 'all') {
                    const firstMatch = VISHNU_DASHAVATARA_ENTRIES.find(e => e.yugaGroup === nextFilter);
                    if (firstMatch) setSelectedIndex(firstMatch.index);
                  }
                }}
                className={`px-2.5 py-1 rounded-md font-mono text-[9.5px] uppercase tracking-wider font-bold border transition-all cursor-pointer ${
                  yugaFilter === tab.id
                    ? 'bg-[#38BDF8] text-[#040A12] border-white'
                    : 'bg-[#0B1D30] text-[#93C5FD] border-[#38BDF8]/30 hover:border-[#38BDF8]'
                }`}
              >
                {t(tab.labelEn, tab.labelHi)}
              </button>
            ))}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(p => !p)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer shadow"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>
                {isPlaying
                  ? t('Pause Cycle', 'रोकें')
                  : t('Auto-Cycle (00 → 10)', 'दशावतार चक्र चलाएँ')}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setSelectedIndex(0);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0B1E33] hover:bg-[#122B47] border border-[#38BDF8]/40 text-[#7DD3FC] font-mono text-[10px] uppercase tracking-wider cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('00 · Mūla Viṣṇu', '०० · मूल विष्णु')}</span>
            </button>
          </div>
        </div>

        {/* 11 Thumbnail Selector Cards (00 Mahāviṣṇu + 01 to 10 Avatāras) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2 pt-1">
          {VISHNU_DASHAVATARA_ENTRIES.map(item => {
            const isSelected = item.index === selectedIndex;
            const isDimmed = yugaFilter !== 'all' && item.yugaGroup !== yugaFilter;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedIndex(item.index);
                }}
                className={`p-1.5 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F2942] border-[#FDE047] shadow-[0_0_16px_rgba(253,224,71,0.35)] scale-[1.03]'
                    : isDimmed
                    ? 'bg-[#071320] border-white/5 opacity-45 hover:opacity-90'
                    : 'bg-[#091829] border-white/15 hover:border-[#38BDF8]'
                }`}
              >
                <div className="w-full h-14 rounded-lg overflow-hidden bg-[#EBDDC5] border border-[#D3AD55]/40 flex items-center justify-center">
                  <img
                    src={item.imagePath}
                    alt={t(item.shortNameEn, item.shortNameHi)}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span
                  className="font-mono text-[8.5px] font-bold mt-1"
                  style={{ color: isSelected ? '#FDE047' : item.accentColor }}
                >
                  {item.index === 0 ? '00 · MŪLA' : `AVT ${String(item.index).padStart(2, '0')}`}
                </span>
                <span className="font-serif text-[10px] font-semibold text-white truncate w-full leading-tight">
                  {t(item.shortNameEn.replace(/^\d+\.\s*/, ''), item.shortNameHi.replace(/^[०-९]+\.\s*/, ''))}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
          VIEW MODE 1: INTERACTIVE SUDARŚANA WHEEL + PORTRAIT + DOSSIER
         ==================================================================== */}
      {viewMode === 'wheel-studio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Archival Parchment Portrait Plate */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-[#D3AD55]/65 bg-[#07111D] overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-[#0C1D31] border-b border-[#D3AD55]/35 flex items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
                  {activeEntry.code} · {t(activeEntry.yugaEn, activeEntry.yugaHi)}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                  {t(activeEntry.nameEn, activeEntry.nameHi)}
                </h4>
              </div>
              <span
                className="px-2.5 py-1 rounded font-mono text-[10px] font-bold uppercase border shrink-0"
                style={{
                  color: activeEntry.accentColor,
                  borderColor: `${activeEntry.accentColor}66`,
                  backgroundColor: `${activeEntry.accentColor}15`
                }}
              >
                {activeEntry.index === 0
                  ? t('AVATĀRĪ SOURCE', 'मूल अवतारी')
                  : t(`AVATAR #${activeEntry.index}`, `अवतार क्र. ${activeEntry.index}`)}
              </span>
            </div>

            {/* Parchment Artwork Frame */}
            <div className="p-3.5 bg-[#120D09] flex items-center justify-center">
              <img
                src={activeEntry.imagePath}
                alt={t(activeEntry.nameEn, activeEntry.nameHi)}
                className="w-full max-h-[520px] object-contain rounded-xl border-2 border-[#D3AD55]/50 bg-[#E8D8BE] shadow-xl"
              />
            </div>

            {/* Bottom Caption Strip */}
            <div className="p-4 bg-[#0A1829] border-t border-[#D3AD55]/30 space-y-2">
              <div className="font-serif text-xs sm:text-sm font-bold text-[#FDE047] text-center">
                {activeEntry.sanskritTitle}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
                <span className="font-mono text-[10px] text-[#7DD3FC]">
                  {t('SACRED LOCUS:', 'पवित्र क्षेत्र:')} {t(activeEntry.sacredLocusEn, activeEntry.sacredLocusHi)}
                </span>
                {onOpenArticle && (
                  <button
                    type="button"
                    onClick={() => onOpenArticle('vishnu-dashavatara-codex', activeEntry.slug)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white font-mono text-[9.5px] uppercase tracking-wider font-bold cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>{t('Open Monograph →', 'विस्तृत लेख खोलें →')}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Sudarśana Cakra Wheel SVG + Scholarly Dossier */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top Card: Interactive Sudarśana Cakra Daśāvatāra Mandala SVG */}
            <div className="rounded-2xl border border-[#38BDF8]/35 bg-[#071423] p-4 sm:p-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-7 flex flex-col items-center">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#7DD3FC] mb-1">
                    {t(
                      'SUDARŚANA DAŚĀVATĀRA CAKRA (CLICK ANY PETAL 00–10)',
                      'सुदर्शन दशावतार मण्डल (किसी भी दल ००–१० पर क्लिक करें)'
                    )}
                  </span>
                  <svg viewBox="0 0 420 420" className="w-full max-w-[350px] h-auto">
                    <defs>
                      <radialGradient id="vishnuKshiraGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="65%" stopColor="#FDE047" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Outer Sudarśana Flame-Spoke Ring */}
                    <circle
                      cx="210"
                      cy="210"
                      r="192"
                      fill="url(#vishnuKshiraGlow)"
                      stroke="#D3AD55"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      opacity="0.75"
                    />
                    <circle
                      cx="210"
                      cy="210"
                      r="150"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1.2"
                      opacity="0.5"
                    />
                    <circle
                      cx="210"
                      cy="210"
                      r="86"
                      fill="none"
                      stroke="#FDE047"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      opacity="0.5"
                    />

                    {/* 10 Radial Spokes & Avatar Nodes (Indices 1..10 Clockwise from Top) */}
                    {VISHNU_DASHAVATARA_ENTRIES.filter(e => e.index >= 1).map(av => {
                      const angleDeg = -90 + (av.index - 1) * 36;
                      const rad = (angleDeg * Math.PI) / 180;
                      const x = 210 + Math.cos(rad) * 150;
                      const y = 210 + Math.sin(rad) * 150;
                      const isSelected = selectedIndex === av.index;

                      return (
                        <g
                          key={av.id}
                          onClick={() => {
                            setIsPlaying(false);
                            setSelectedIndex(av.index);
                          }}
                          className="cursor-pointer"
                        >
                          <line
                            x1="210"
                            y1="210"
                            x2={x}
                            y2={y}
                            stroke={isSelected ? '#FDE047' : av.accentColor}
                            strokeWidth={isSelected ? '2.6' : '1.1'}
                            opacity={isSelected ? '0.95' : '0.45'}
                          />
                          {isSelected && (
                            <circle
                              cx={x}
                              cy={y}
                              r="29"
                              fill="none"
                              stroke="#FDE047"
                              strokeWidth="2"
                              strokeDasharray="3 2"
                            />
                          )}
                          <circle
                            cx={x}
                            cy={y}
                            r={isSelected ? 24 : 20}
                            fill={isSelected ? '#102C47' : '#081524'}
                            stroke={isSelected ? '#FDE047' : av.accentColor}
                            strokeWidth={isSelected ? '2.5' : '1.8'}
                          />
                          <text
                            x={x}
                            y={y - 3}
                            textAnchor="middle"
                            fill="#FDE047"
                            fontSize="8.5"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            {String(av.index).padStart(2, '0')}
                          </text>
                          <text
                            x={x}
                            y={y + 8}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="8"
                            fontFamily="serif"
                            fontWeight="bold"
                          >
                            {lang === 'hi'
                              ? av.shortNameHi.replace(/^[०-९]+\.\s*/, '')
                              : av.shortNameEn.replace(/^\d+\.\s*/, '')}
                          </text>
                        </g>
                      );
                    })}

                    {/* Center Hub: 00 Bhagavān Śrī Mahāviṣṇu (Śeṣaśāyī Nārāyaṇa) */}
                    <g
                      onClick={() => {
                        setIsPlaying(false);
                        setSelectedIndex(0);
                      }}
                      className="cursor-pointer"
                    >
                      <circle
                        cx="210"
                        cy="210"
                        r={selectedIndex === 0 ? 52 : 47}
                        fill="#0E2944"
                        stroke={selectedIndex === 0 ? '#FDE047' : '#38BDF8'}
                        strokeWidth={selectedIndex === 0 ? '3.5' : '2.2'}
                      />
                      {/* Vaiṣṇava Ūrdhvapuṇḍra Tilaka inside Center Hub */}
                      <path
                        d="M 203 184 L 203 198 Q 210 203 217 198 L 217 184"
                        fill="none"
                        stroke="#FDE047"
                        strokeWidth="2"
                      />
                      <line x1="210" y1="186" x2="210" y2="199" stroke="#EF4444" strokeWidth="2" />
                      <text
                        x="210"
                        y="214"
                        textAnchor="middle"
                        fill="#FDE047"
                        fontSize="10"
                        fontFamily="serif"
                        fontWeight="bold"
                      >
                        ॥ श्री महाविष्णु ॥
                      </text>
                      <text
                        x="210"
                        y="227"
                        textAnchor="middle"
                        fill="#BAE6FD"
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        00 · ŚEṢAŚĀYĪ
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Right of Wheel: Yuga Distribution & Evolutionary Axis Summary */}
                <div className="md:col-span-5 space-y-3 rounded-xl border border-[#D3AD55]/35 bg-[#050E19] p-3.5">
                  <div className="border-b border-white/10 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDE047] font-bold block">
                      {t('CATURYUGA AVATĀRA DISTRIBUTION', 'चतुर्युग अवतार विभाजन')}
                    </span>
                    <p className="font-serif text-xs text-[#BAE6FD]/90 mt-0.5">
                      {t(
                        '4 in Satya · 3 in Tretā · 1 in Dvāpara (8th Śrī Kṛṣṇa) · 2 in Kali Yuga',
                        'सत्ययुग में ४ · त्रेतायुग में ३ · द्वापर में १ (८वें श्री कृष्ण) · कलियुग में २'
                      )}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs font-serif">
                    <div className="p-2 rounded bg-[#0A192B] border border-[#0EA5E9]/35">
                      <span className="font-mono text-[9px] text-[#38BDF8] font-bold uppercase block">
                        {t('EVOLUTIONARY STAGE:', 'चेतना एवं सृष्टि-विकास सोपान:')}
                      </span>
                      <span className="text-white font-semibold">
                        {t(activeEntry.evolutionaryStageEn, activeEntry.evolutionaryStageHi)}
                      </span>
                    </div>

                    <div className="p-2 rounded bg-[#0A192B] border border-[#F59E0B]/35">
                      <span className="font-mono text-[9px] text-[#FDE047] font-bold uppercase block">
                        {t('CONSORT / COMPANIONS:', 'संबंधित शक्ति एवं सहचर:')}
                      </span>
                      <span className="text-[#F5E8CE]/90">
                        {t(activeEntry.consortOrCompanionEn, activeEntry.consortOrCompanionHi)}
                      </span>
                    </div>

                    <div className="p-2 rounded bg-[#0A192B] border border-[#10B981]/35">
                      <span className="font-mono text-[9px] text-[#34D399] font-bold uppercase block">
                        {t('DHARMIC RESOLUTION:', 'धर्म-संस्थापन कार्य:')}
                      </span>
                      <span className="text-[#F5E8CE]/90">
                        {t(activeEntry.vanquishedAdharmaEn, activeEntry.vanquishedAdharmaHi)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Consecrated Mantra, Jayadeva Gītagovinda Śloka & Purāṇic Theology */}
            <div className="rounded-2xl border border-[#D3AD55]/45 bg-[#071320] p-5 space-y-4">
              {/* Consecrated Mantra & Daśāvatāra Stotra Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#0C2138] via-[#122D4B] to-[#0C2138] border border-[#FDE047]/45 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[9.5px] font-mono uppercase tracking-wider text-[#FDE047]">
                  <span className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
                    {t('MŪLA MANTRA & JAYADEVA DAŚĀVATĀRA STOTRA', 'मूल मंत्र एवं जयदेव कृत दशावतार स्तोत्र')}
                  </span>
                  <span className="text-[#7DD3FC]">{activeEntry.mulaMantraEn}</span>
                </div>
                <div className="font-serif text-base sm:text-lg font-bold text-[#FEF08A]">
                  {activeEntry.mulaMantraHi}
                </div>
                <blockquote className="pt-1.5 border-t border-white/10 font-serif text-xs sm:text-sm text-white/95 italic leading-relaxed">
                  {activeEntry.jayadevaSlokaHi}
                </blockquote>
                <p className="font-serif text-xs text-[#BAE6FD]/90 leading-relaxed">
                  {activeEntry.jayadevaSlokaEn}
                </p>
              </div>

              {/* Iconography & Theology Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-[#050D17] border border-white/10 space-y-1.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#38BDF8] font-bold block">
                    {t('ARCHIVAL PLATE ICONOGRAPHY & EMBLEMS', 'प्रतिमाशास्त्रीय स्वरूप एवं आयुध')}
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-[#F5E8CE]/95 leading-relaxed">
                    {t(activeEntry.iconographyEn, activeEntry.iconographyHi)}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050D17] border border-white/10 space-y-1.5">
                  <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#FDE047] font-bold block">
                    {t('PURĀṆIC THEOLOGY & AVATĀRA PURPOSE', 'पौराणिक तत्त्वज्ञान एवं अवतार रहस्य')}
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-[#F5E8CE]/95 leading-relaxed">
                    {t(activeEntry.theologyAndPurposeEn, activeEntry.theologyAndPurposeHi)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          VIEW MODE 2: ALL 11 CONSECRATED ARCHIVAL PLATES (00 VIṢṆU + 01–10 AVATĀRAS)
         ==================================================================== */}
      {viewMode === 'all-11-plates' && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#38BDF8]/30 pb-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FDE047] font-bold block">
                {t(
                  'COMPLETE 11-PLATE ARCHIVAL DOSSIER (00 MAHĀVIṢṆU + 10 AVATĀRAS)',
                  'भगवान् श्री महाविष्णु (००) एवं दशावतार (०१–१०) की सम्पूर्ण ११-फलक चित्र-दीर्घा'
                )}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                {t(
                  'Click Any Archival Plate to Inspect in the Sudarśana Studio or Open Its Monograph',
                  'किसी भी चित्र फलक पर क्लिक करके उसे सुदर्शन सिम्युलेटर या स्वतंत्र शोध-प्रबंध में खोलें'
                )}
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredEntries.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedIndex(item.index);
                  setViewMode('wheel-studio');
                }}
                className="group rounded-xl border border-[#D3AD55]/45 bg-[#071320] hover:border-[#FDE047] overflow-hidden flex flex-col justify-between transition-all cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="px-3.5 py-2.5 bg-[#0C1E33] border-b border-[#D3AD55]/30 flex items-center justify-between gap-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#FDE047] font-bold block">
                        {item.code}
                      </span>
                      <span className="font-serif text-sm font-bold text-white">
                        {t(item.nameEn, item.nameHi)}
                      </span>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded font-mono text-[8.5px] font-bold uppercase border shrink-0"
                      style={{
                        color: item.accentColor,
                        borderColor: `${item.accentColor}66`,
                        backgroundColor: `${item.accentColor}15`
                      }}
                    >
                      {item.index === 0 ? 'MŪLA' : `#${String(item.index).padStart(2, '0')}`}
                    </span>
                  </div>

                  <div className="p-3 bg-[#120D09] flex items-center justify-center">
                    <img
                      src={item.imagePath}
                      alt={t(item.nameEn, item.nameHi)}
                      loading="lazy"
                      className="w-full h-80 object-contain rounded border border-[#D3AD55]/45 bg-[#E8D8BE] group-hover:scale-[1.02] transition-transform"
                    />
                  </div>

                  <div className="p-3.5 space-y-2">
                    <div className="font-mono text-[10px] text-[#38BDF8] font-bold">
                      {t(item.yugaEn, item.yugaHi)} · {t(item.evolutionaryStageEn, item.evolutionaryStageHi)}
                    </div>
                    <div className="p-2 rounded bg-[#040B13] border border-[#D3AD55]/30 font-serif text-xs text-[#FEF08A]">
                      {item.mulaMantraHi}
                    </div>
                    <p className="font-serif text-xs text-[#F5E8CE]/90 line-clamp-3 leading-relaxed">
                      {t(item.iconographyEn, item.iconographyHi)}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-2.5 bg-[#0A1829] border-t border-white/10 flex items-center justify-between font-mono text-[9px] text-[#FDE047] uppercase">
                  <span>{t('Inspect in Studio →', 'सिम्युलेटर में देखें →')}</span>
                  {onOpenArticle && (
                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        onOpenArticle('vishnu-dashavatara-codex', item.slug);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0284C7] text-white hover:bg-[#0369A1] cursor-pointer"
                    >
                      <span>{t('Monograph', 'शोध-लेख')}</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          VIEW MODE 3: FOUR-YUGA & EVOLUTIONARY COSMOLOGY MATRIX
         ==================================================================== */}
      {viewMode === 'yuga-evolution' && (
        <div className="space-y-4">
          <div className="rounded-xl border border-[#D3AD55]/45 bg-[#071320] p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 border-b border-[#38BDF8]/30 pb-2.5">
              <Shield className="w-4 h-4 text-[#FDE047]" />
              <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                {t(
                  'Cosmic Evolution & Four-Yuga Concordance (From Aquatic Life in Satya Yuga to Kalki in Kali Yuga)',
                  'चतुर्युग एवं चेतना-विकास समन्वय (सत्ययुग के जलीय मत्स्य से कलियुग के कल्कि अवतार तक)'
                )}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  yugaTitleEn: '1. Satya Yuga (Kṛta Yuga · 4 Avatāras)',
                  yugaTitleHi: '१. सत्ययुग (कृतयुग · ४ अवतार)',
                  color: '#10B981',
                  items: VISHNU_DASHAVATARA_ENTRIES.filter(e => e.yugaGroup === 'satya')
                },
                {
                  yugaTitleEn: '2. Tretā Yuga (3 Avatāras)',
                  yugaTitleHi: '२. त्रेतायुग (३ अवतार)',
                  color: '#F59E0B',
                  items: VISHNU_DASHAVATARA_ENTRIES.filter(e => e.yugaGroup === 'treta')
                },
                {
                  yugaTitleEn: '3. Dvāpara Yuga (8th Avatar · Pūrṇāvatāra)',
                  yugaTitleHi: '३. द्वापरयुग (८वें अवतार · पूर्णावतार श्री कृष्ण)',
                  color: '#3B82F6',
                  items: VISHNU_DASHAVATARA_ENTRIES.filter(e => e.yugaGroup === 'dvapara')
                },
                {
                  yugaTitleEn: '4. Kali Yuga (9th Buddha & 10th Kalki)',
                  yugaTitleHi: '४. कलियुग (९वें बुद्ध एवं १०वें कल्कि)',
                  color: '#A855F7',
                  items: VISHNU_DASHAVATARA_ENTRIES.filter(e => e.yugaGroup === 'kali')
                }
              ].map((block, bIdx) => (
                <div
                  key={bIdx}
                  className="rounded-xl border p-3.5 bg-[#050E1A] space-y-2.5"
                  style={{ borderColor: `${block.color}66` }}
                >
                  <h5 className="font-serif text-sm sm:text-base font-bold" style={{ color: block.color }}>
                    {t(block.yugaTitleEn, block.yugaTitleHi)}
                  </h5>
                  <div className="space-y-2">
                    {block.items.map(av => (
                      <button
                        key={av.id}
                        type="button"
                        onClick={() => {
                          setSelectedIndex(av.index);
                          setViewMode('wheel-studio');
                        }}
                        className="w-full p-2.5 rounded-lg border border-white/10 bg-[#0A192B] hover:border-[#FDE047] text-left flex items-center gap-2.5 transition-all cursor-pointer"
                      >
                        <img
                          src={av.imagePath}
                          alt={t(av.shortNameEn, av.shortNameHi)}
                          className="w-11 h-11 rounded object-cover object-top bg-[#E8D8BE] border border-[#D3AD55]/50 shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="font-serif text-xs font-bold text-white block truncate">
                            {t(av.nameEn, av.nameHi)}
                          </span>
                          <span className="font-serif text-[11px] text-[#BAE6FD]/85 block line-clamp-2">
                            {t(av.evolutionaryStageEn, av.evolutionaryStageHi)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VishnuDashavataraExperience;

