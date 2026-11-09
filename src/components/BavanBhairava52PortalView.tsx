import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  BAVAN_BHAIRAVAS_LIST,
  BAVAN_BHAIRAVA_COLLECTIVE_PRAYER,
  THREE_BHAIRAVA_SYSTEMS_COMPARISON,
  PRIMARY_RESEARCH_REFERENCES,
  Bhairava52Item
} from '../data/bavanBhairava52Data';
import { Sparkles, Shield, Search, Copy, Check, BookOpen, AlertTriangle, Layers, MapPin } from 'lucide-react';

export const BavanBhairava52PortalView: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedMantra, setCopiedMantra] = useState<string | null>(null);
  const [copiedCollective, setCopiedCollective] = useState(false);
  const isEn = t('en', 'hi') === 'en';

  const filteredBhairavas = BAVAN_BHAIRAVAS_LIST.filter((b: Bhairava52Item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      b.nameEn.toLowerCase().includes(term) ||
      b.nameHi.includes(term) ||
      b.peethaEn.toLowerCase().includes(term) ||
      b.peethaHi.includes(term) ||
      b.goddessEn.toLowerCase().includes(term) ||
      b.goddessHi.includes(term) ||
      b.locationEn.toLowerCase().includes(term) ||
      b.locationHi.includes(term) ||
      b.bodyPartEn.toLowerCase().includes(term) ||
      b.bodyPartHi.includes(term) ||
      String(b.index) === term.replace(/^0+/, '')
    );
  });

  const handleCopy = (mantra: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(mantra).catch(() => {});
    }
    setCopiedMantra(id);
    setTimeout(() => setCopiedMantra(null), 2000);
  };

  const handleCopyCollective = () => {
    const text = `${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.titleHi}\n${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.primaryBeejaMantra}\n${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.samarpanaMantra}\n${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.samarpanaPhonetic}\n"${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.meaningEn}"`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedCollective(true);
    setTimeout(() => setCopiedCollective(false), 2000);
  };

  return (
    <div className="mt-7 space-y-8">
      {/* 1. Dedicated Header Banner */}
      <div className="rounded-2xl border-2 border-[#D3AD55]/60 bg-gradient-to-br from-[#1E1109] via-[#2A170C] to-[#170E08] p-6 sm:p-8 text-[#F4E8D1] shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#5A3922]/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#D3AD55] text-[#1A1008] font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
              BHAIRAV · भैरव
            </span>
            <span className="px-2.5 py-1 rounded border border-[#D3AD55]/40 bg-[#160D08] font-mono text-[9px] uppercase tracking-wider text-[#D3AD55]">
              amazingbharat.com · Shiva, Tantra art, Mantras
            </span>
          </div>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#E0B86C]">
            {t('52 SHAKTI PEETHA GUARDIANS', '५२ शक्तिपीठ रक्षक भैरव')}
          </span>
        </div>

        <div>
          <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFDF80] tracking-wide">
            ॥ श्री बावन भैरव संग्रह ॥
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-[#F4E8D1] font-semibold mt-1">
            52 BHAIRAVAS – THE GUARDIANS OF THE 52 SHAKTI PEETHAS
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-[15px] font-serif text-[#D6C4A5] leading-relaxed italic">
            {t(
              '“I am interpreting 52 Bhairavas as the guardian manifestations of Lord Shiva associated with the traditional 52 Shakti Peethas, rather than the separate 64 Bhairava system.”',
              '“बावन भैरवों को ६४ भैरव प्रणाली से पृथक् करते हुए पारंपरिक ५२ शक्तिपीठों के रक्षक शिव-स्वरूपों के रूप में प्रतिष्ठापित किया गया है।”'
            )}
          </p>
        </div>

        {/* 4 Pillars of Understanding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-[#190E08]/80 border border-[#5A3922]/50 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D3AD55] font-mono text-[10px] uppercase font-bold">
              <Shield className="w-3.5 h-3.5 text-[#D3AD55]" />
              <span>{t('1. Fierce Protector', '१. उग्र रक्षक स्वरूप')}</span>
            </div>
            <p className="text-xs font-serif text-[#CDBCA2]">
              {t(
                'Bhairava is the fierce, protective, and fear-dispelling manifestation of Lord Shiva.',
                'भैरव भगवान् शिव के अत्यंत उग्र, तेजस्वी और रक्षाकारी विग्रह हैं।'
              )}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#190E08]/80 border border-[#5A3922]/50 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D3AD55] font-mono text-[10px] uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
              <span>{t('2. Inseparable Pair', '२. शक्ति एवं शिव')}</span>
            </div>
            <p className="text-xs font-serif text-[#CDBCA2]">
              {t(
                'The Goddess represents Shakti, while Bhairava represents Shiva as protector of the seat.',
                'देवी शक्ति का प्रतिनिधित्व करती हैं और भैरव पीठ के रक्षक के रूप में शिव हैं।'
              )}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#190E08]/80 border border-[#5A3922]/50 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D3AD55] font-mono text-[10px] uppercase font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#D3AD55]" />
              <span>{t('3. Kashi Kotwal', '३. काशी के कोतवाल')}</span>
            </div>
            <p className="text-xs font-serif text-[#CDBCA2]">
              {t(
                'Kaal Bhairava is especially revered as the supreme guardian magistrate of Kashi.',
                'काशी के सर्वोच्च रक्षक एवं दण्डनायक के रूप में काल भैरव पूजित हैं।'
              )}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#190E08]/80 border border-[#5A3922]/50 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D3AD55] font-mono text-[10px] uppercase font-bold">
              <BookOpen className="w-3.5 h-3.5 text-[#D3AD55]" />
              <span>{t('4. 51 or 52 Peethas', '४. ५१ अथवा ५२ पीठ')}</span>
            </div>
            <p className="text-xs font-serif text-[#CDBCA2]">
              {t(
                'Circulated lists contain 51 or 52 Peethas depending on textual tradition and recension.',
                'शास्त्रीय परम्परा और पाठ-भेद के अनुसार ५१ अथवा ५२ पीठ माने जाते हैं।'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Collective 52 Bhairava Prayer (Samarpaṇa Mantra) */}
      <div className="rounded-2xl border-2 border-[#D3AD55] bg-gradient-to-r from-[#2B150A] via-[#1B0E06] to-[#2B150A] p-6 sm:p-7 text-[#F5E8CE] shadow-xl text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180C06] border border-[#D3AD55]/60 font-mono text-[9.5px] uppercase tracking-[0.2em] text-[#D3AD55] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#D3AD55]" />
          <span>{t('Section 3 · Collective 52 Bhairava Prayer', 'भाग ३ · सामूहिक श्री बावन भैरव समर्पण मंत्र')}</span>
        </div>

        <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] tracking-wide">
          {BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.titleHi}
        </div>

        <div className="space-y-1.5 py-1">
          <div className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#FFDF80]">
            {BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.primaryBeejaMantra}
          </div>
          <div className="font-mono text-xs sm:text-sm text-[#E0B86C]">
            {BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.primaryBeejaPhonetic}
          </div>
          <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] pt-1">
            {BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.samarpanaMantra}
          </div>
          <div className="font-mono text-sm sm:text-base text-[#FFE599] font-semibold">
            {BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.samarpanaPhonetic}
          </div>
          <p className="font-serif text-sm sm:text-base text-[#D4C3A3] italic pt-1 max-w-2xl mx-auto">
            {t(
              `"${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.meaningEn}"`,
              `"${BAVAN_BHAIRAVA_COLLECTIVE_PRAYER.meaningHi}"`
            )}
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleCopyCollective}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3D1E0E] hover:bg-[#522914] border border-[#D3AD55] text-[#FFDF80] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
          >
            {copiedCollective ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{t('Copied to Clipboard!', 'मन्त्र कॉपी हो गया!')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D3AD55]" />
                <span>{t('Copy Collective Samarpaṇa Prayer', 'सामूहिक समर्पण मन्त्र कॉपी करें')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Do Not Confuse These Three Systems */}
      <div className="rounded-xl border-2 border-[#5A3922]/50 bg-[#E8DAC2] p-5 sm:p-6 text-[#24170E] space-y-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#5A3922]/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded bg-[#2B1F17] text-[#D3AD55]">
              <Layers className="w-4 h-4" />
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#17100C]">
              {t('5. Do Not Confuse These Three Systems', '५. तीन भैरव प्रणालियों में भेद: इन्हें परस्पर मिश्रित न करें')}
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[9px] uppercase tracking-wider font-bold">
            {t('CRUCIAL TEXTUAL DISTINCTION', 'अनिवार्य शास्त्रीय भेद')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {THREE_BHAIRAVA_SYSTEMS_COMPARISON.map((sys, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#5A3922]/35 bg-[#F4E8D1] space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-[#5A3922]/20 pb-2">
                  <span className="font-serif text-base font-bold text-[#17100C]">
                    {t(sys.systemNameEn, sys.systemNameHi)}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[10px] font-bold">
                    {sys.count} {t('Forms', 'स्वरूप')}
                  </span>
                </div>
                <div className="pt-2 text-xs font-serif text-[#4A3222] leading-relaxed">
                  <strong>{t('Role:', 'भूमिका:')}</strong> {t(sys.canonicalRoleEn, sys.canonicalRoleHi)}
                </div>
                <div className="pt-1.5 text-xs font-mono text-[#5A3922] leading-relaxed">
                  <strong>{t('Members:', 'स्वरूप:')}</strong> {t(sys.membersEn, sys.membersHi)}
                </div>
              </div>
              <div className="pt-2 border-t border-[#5A3922]/20 text-[11px] font-serif text-[#6B4B32] italic">
                {t(sys.primaryTextsEn, sys.primaryTextsHi)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Complete List: 52 Bhairava Names and Devotional Mantras Directory */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8C6239] font-bold">
                {t('SECTION 2 · CANONICAL CATALOGUE', 'भाग २ · संपूर्ण शास्त्रीय नामावली')}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[9px] font-bold">
                01–52
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#17100C] mt-0.5">
              {t(
                'Complete List: 52 Bhairava Names and Devotional Mantras',
                'संपूर्ण नामावली: ५२ भैरव नाम एवं भक्ति नाम-मन्त्र'
              )}
            </h3>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8C6239] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('Search 52 Bhairavas or Peethas...', 'भैरव, शक्तिपीठ अथवा स्थान खोजें...')}
              className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-[#EFE0C6] border border-[#5A3922]/40 text-xs font-serif text-[#17100C] placeholder-[#8C6239] focus:outline-none focus:border-[#2B1F17] focus:ring-1 focus:ring-[#2B1F17]"
            />
          </div>
        </div>

        {/* Mantra Notice Box */}
        <div className="p-3.5 rounded-lg bg-[#EAE0CD] border-l-4 border-[#D3AD55] text-xs font-serif text-[#3D2B1F] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#D3AD55] shrink-0 mt-0.5" />
          <div>
            <strong>{t('Mantra Transparency Notice:', 'मन्त्र पारदर्शिता सूचना:')}</strong>{' '}
            {t(
              'The following is a devotional reference list. The mantras are simple name-based salutations formed for each Bhairava, not claimed to be independently attested Tantric Mula Mantras.',
              'यह एक भक्ति संदर्भ सूची है। ये मन्त्र प्रत्येक भैरव के नाम पर आधारित सरल भक्ति-प्रणाम मन्त्र हैं, जिन्हें स्वतंत्र शास्त्रीय तांत्रिक मूल मन्त्र होने का दावा नहीं किया गया है।'
            )}
          </div>
        </div>

        {/* Grid of 52 Bhairavas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredBhairavas.map((b: Bhairava52Item) => {
            const isCopied = copiedMantra === b.id;
            return (
              <div
                key={b.id}
                className="rounded-xl border border-[#5A3922]/35 bg-[#F6EDE0] p-4 flex flex-col justify-between hover:border-[#D3AD55] hover:shadow-md transition-all space-y-3"
              >
                <div>
                  {/* Top Bar: Index & Name */}
                  <div className="flex items-start justify-between gap-2 border-b border-[#5A3922]/20 pb-2">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C6239] font-bold">
                        #{String(b.index).padStart(2, '0')}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#17100C] leading-snug">
                        {b.nameHi} · {b.nameEn}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#2B1F17] text-[#D3AD55] font-mono text-[9px] font-semibold shrink-0">
                      {t(b.peethaEn, b.peethaHi)}
                    </span>
                  </div>

                  {/* Devotional Mantra Card */}
                  <div className="mt-2.5 p-2.5 rounded-lg bg-[#24150D] text-[#F5E8CE] border border-[#D3AD55]/40 space-y-1 relative group">
                    <div className="flex items-center justify-between text-[8.5px] font-mono uppercase tracking-wider text-[#D3AD55]">
                      <span>{t('Devotional Mantra', 'भक्ति-प्रणाम मन्त्र')}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(b.devotionalMantra, b.id)}
                        className="hover:text-[#FFDF80] transition-colors p-0.5 cursor-pointer"
                        title={t('Copy Mantra', 'मन्त्र कॉपी करें')}
                      >
                        {isCopied ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                    <div className="font-serif text-sm sm:text-[14.5px] font-bold text-[#FFDF80]">
                      {b.devotionalMantra}
                    </div>
                    <div className="font-mono text-[10.5px] text-[#D6C4A5] truncate">
                      {b.devotionalMantraPhonetic}
                    </div>
                  </div>

                  {/* Peetha & Anatomical Relic Details */}
                  <div className="mt-2.5 space-y-1 text-xs font-serif text-[#3D2B1F]">
                    <div>
                      <strong className="text-[#17100C]">{t('Presiding Devi:', 'अधिष्ठात्री देवी:')}</strong>{' '}
                      {t(b.goddessEn, b.goddessHi)}
                    </div>
                    <div>
                      <strong className="text-[#17100C]">{t('Sacred Limb:', 'सती का अंग:')}</strong>{' '}
                      {t(b.bodyPartEn, b.bodyPartHi)}
                    </div>
                    <div className="text-[11.5px] font-mono text-[#5A3922] flex items-center gap-1 pt-0.5">
                      <MapPin className="w-3 h-3 text-[#8C6239] shrink-0" />
                      <span className="truncate">{t(b.locationEn, b.locationHi)}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="pt-2 border-t border-[#5A3922]/15 flex items-center justify-between text-[10px] font-mono text-[#7A5B42]">
                  <span>{t(`Peetha Guardian #${b.index}`, `पीठ रक्षक #${b.index}`)}</span>
                  <span className="text-[#8C6239]">amazingbharat.com</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBhairavas.length === 0 && (
          <div className="p-8 text-center rounded-xl bg-[#EFE0C6] border border-[#5A3922]/30 text-sm font-serif text-[#5A3922]">
            {t(
              `No Bhairavas matched the query "${searchTerm}". Try searching by English or Devanagari name.`,
              `खोज परिणाम शून्य हैं। कृपया देवनागरी अथवा अंग्रेजी नाम से पुनः प्रयास करें।`
            )}
          </div>
        )}
      </div>

      {/* 5. Sources & Bibliography Section */}
      <div className="rounded-xl border border-[#5A3922]/30 bg-[#EFE0C6]/80 p-5 space-y-3">
        <div className="flex items-center gap-2 border-b border-[#5A3922]/25 pb-2">
          <BookOpen className="w-4 h-4 text-[#8C6239]" />
          <h4 className="font-serif text-base font-bold text-[#17100C]">
            {t('4. Important Source Articles and References', '४. प्रमुख शास्त्रीय स्रोत एवं संदर्भ ग्रन्थ')}
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRIMARY_RESEARCH_REFERENCES.map((ref, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-[#F7EFE4] border border-[#5A3922]/20 space-y-1"
            >
              <div className="font-serif text-xs font-bold text-[#17100C]">
                {ref.title}
              </div>
              <div className="font-mono text-[10px] text-[#8C6239]">
                {ref.source}
              </div>
              <div className="text-[11px] font-serif text-[#5A3922] italic">
                {ref.topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
