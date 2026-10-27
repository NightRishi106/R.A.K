import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scroll, Eye } from 'lucide-react';
import { getLibraryItems } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function LibrarySection() {
  const { lang, t } = useLanguage();
  const items = getLibraryItems(lang);
  const [selectedBookId, setSelectedBookId] = useState<string>('lib-shivasutra');
  const [zoomText, setZoomText] = useState(false);

  const selectedBook = items.find(item => item.id === selectedBookId) || items[0];

  return (
    <section id="library" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%202.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Heavy Vignette */}
      <div className="absolute inset-0 vignette-heavy pointer-events-none" />

      {/* Sanskrit manuscript watermark overlay (Sanskrit preserved untouched) */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-5 text-gold-faded font-serif leading-loose tracking-widest text-[9px] pointer-events-none select-none writing-mode-vertical hidden xl:block">
        शिल्पशास्त्रमहोदधिः।
        वेदाङ्ग ज्योतिषाध्यायः।
        रसविद्यारहस्यं गुरुप्रसादात्।
        मण्डलं वर्तुलाकारं भवेत्।
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">
              {t('The Archivist’s Desk', 'पुरालेखपाल की मेज')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            {t('THE RESEARCH LIBRARY', 'शोध पुस्तकालय')}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-ancient-beige/65 font-vintage italic leading-relaxed">
            {t(
              '"We compile ancient scripts and field surveys side-by-side. Click on a volume in the bookshelf to pull it onto the study desk."',
              '"हम प्राचीन पांडुलिपियों और क्षेत्रीय सर्वेक्षणों का साथ-साथ संकलन करते हैं। अध्ययन मेज पर खोलने के लिए बुकशेल्फ़ में किसी ग्रंथ पर क्लिक करें।"'
            )}
          </p>
        </div>

        {/* Library layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bookshelf Column (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            
            {/* Visual Bookshelf Box */}
            <div className="p-6 bg-[#211812] rounded-lg border-2 border-[#120e0c] shadow-[0_20px_45px_rgba(0,0,0,0.8)] relative flex flex-col h-full min-h-[400px]">
              {/* Back wood wall */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Shelf Top Label */}
                <div className="border-b border-gold-faded/25 pb-3 mb-6 text-center">
                  <span className="font-serif text-[11px] text-gold-warm tracking-[0.2em] font-semibold uppercase block">
                    {t('Restricted Manuscripts Shelf', 'दुर्लभ पांडुलिपि कक्ष')}
                  </span>
                  <span className="font-mono text-[7px] text-ancient-beige/40 tracking-wider block mt-1 uppercase">
                    {t('Varanasi Collection — Class III', 'वाराणसी संग्रह — श्रेणी III')}
                  </span>
                </div>

                {/* Vertical Book Spines on the Shelf */}
                <div className="flex items-end justify-center h-64 sm:h-80 border-b-[14px] border-[#34241a] px-2 md:px-4 relative mt-auto pb-0 overflow-hidden no-scrollbar">
                  {/* Shelf Shadow */}
                  <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
                  
                  {/* Uploaded Books Image & Pixel-Aligned Interactive Spine Hitboxes */}
                  <div className="relative h-[104%] max-w-full w-auto inline-flex items-end justify-center select-none">
                    <img 
                      src="/Books.png" 
                      alt={t('Ancient Books', 'प्राचीन ग्रंथ')} 
                      className="max-h-full w-auto max-w-full object-contain block pointer-events-none"
                      style={{
                        clipPath: 'inset(1.8% 7.1% 2.8% 7.1%)'
                      }}
                    />
                    
                    {/* Interactive overlay aligned exactly to the 6 cropped book spines */}
                    <div 
                      className="absolute flex z-20"
                      style={{
                        top: '1.8%',
                        bottom: '2.8%',
                        left: '7.1%',
                        right: '7.1%'
                      }}
                    >
                      {items.map((book, idx) => {
                        const spineWidths = ['15.5%', '14%', '14%', '16.5%', '21%', '19%'];
                        const isSelected = selectedBookId === book.id;
                        return (
                          <button
                            key={book.id}
                            type="button"
                            onClick={() => {
                              setSelectedBookId(book.id);
                              const cardEl = document.getElementById('library-book-card');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            style={{ width: spineWidths[idx] || '16.66%' }}
                            className={`h-full relative cursor-pointer transition-all duration-200 group focus:outline-none ${
                              isSelected
                                ? 'bg-gold-warm/15 ring-2 ring-inset ring-gold-warm shadow-[inset_0_0_15px_rgba(212,175,55,0.35)]'
                                : 'hover:bg-gold-warm/10 hover:ring-1 hover:ring-inset hover:ring-gold-warm/60'
                            }`}
                            title={book.title}
                            aria-label={`${t('Open', 'खोलें')} ${book.title}`}
                          >
                            {/* Top active indicator tab */}
                            <span
                              className={`absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-200 ${
                                isSelected
                                  ? 'bg-gold-warm scale-100 shadow-[0_0_8px_rgba(212,175,55,0.9)]'
                                  : 'bg-gold-warm/0 group-hover:bg-gold-warm/70 scale-75'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Wooden Shelf Base Plaque */}
                <div className="h-4 w-full bg-[#1b120c] rounded-b flex items-center justify-center">
                  <div className="h-1.5 w-12 bg-gold-faded/20 rounded-full" />
                </div>

              </div>

            </div>

          </div>

          {/* Studying Desk Column (8 cols on lg) */}
          <div id="library-book-card" className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedBook.id}-${lang}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 md:p-8 bg-[#f5ebd7] text-ancient-dark rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-bronze-light/50 font-sans h-full flex flex-col justify-between paper-grain"
              >
                {/* Antique Desk Items overlay indicators */}
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  {/* Magnifying Glass Toggle */}
                  <button
                    onClick={() => setZoomText(!zoomText)}
                    className={`p-1.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      zoomText
                        ? 'bg-[#3a2e24] border-gold-faded text-[#f5ebd7] shadow-inner'
                        : 'bg-transparent border-[#3a2e24]/20 text-[#3a2e24] hover:bg-[#3a2e24]/10'
                    }`}
                    title={t('Toggle Magnifying Glass Lens', 'आवर्धक लेंस चालू/बंद करें')}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-[8px] tracking-widest text-[#544338]/60 uppercase">
                    {t('Desk Mode', 'अध्ययन मोड')}
                  </span>
                </div>

                <div>
                  {/* Category, Origin & Condition Header */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-[#3a2e24]/15 pb-4 mb-4 pr-24 sm:pr-28">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#3a2e24]/10 rounded font-mono text-[9px] uppercase tracking-wider text-[#2c221a] font-semibold">
                      <Scroll className="w-3 h-3" />
                      {selectedBook.category}
                    </span>
                    <span className="font-sans text-[11px] text-[#544338]">
                      {t('Origin:', 'मूल स्थान:')} <strong className="font-semibold">{selectedBook.origin}</strong>
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#3a2e24]/40" />
                    <span className="font-mono text-[10px] text-[#544338]/80 uppercase">
                      {t('AGE:', 'काल:')} {selectedBook.estimatedAge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2c221a] leading-tight">
                      {selectedBook.title}
                    </h3>
                    <p className="font-sans text-[13px] font-light text-[#413926] mt-2.5 leading-relaxed">
                      {selectedBook.summary}
                    </p>
                  </div>

                  {/* Elegant Parchment Excerpt Panel */}
                  <div className="relative mt-6 p-6 bg-[#ebdcb7] border border-dashed border-[#a38c5f]/40 rounded-lg shadow-inner overflow-hidden">
                    {/* Coffee Stain Splatter */}
                    <div className="absolute top-4 left-4 w-12 h-8 rounded-full bg-[#836d40]/5 blur-md" />

                    <span className="font-mono text-[8.5px] text-[#7a6042] tracking-[0.25em] block mb-2 uppercase font-bold">
                      {t('TRANSLATED SCROLL EXCERPT:', 'अनूदित पांडुलिपि अंश:')}
                    </span>

                    {/* Dynamic font sizing if "Magnifying glass" is active */}
                    <p className={`font-vintage italic leading-relaxed text-[#1a110a] transition-all duration-300 ${
                      zoomText ? 'text-lg md:text-xl font-medium tracking-wide text-[#2e1d12]' : 'text-[14.5px]'
                    }`}>
                      {selectedBook.translatedExcerpt}
                    </p>

                    {zoomText && (
                      <span className="absolute bottom-2 right-4 text-[7px] font-mono tracking-widest text-amber-900/40 uppercase font-bold">
                        {t('🔍 Viewing through magnifying lens (1.5x)', '🔍 आवर्धक लेंस के माध्यम से दृश्य (1.5x)')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer specs */}
                <div className="mt-8 pt-4 border-t border-[#3a2e24]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#544338]">
                  <div>
                    <span className="block font-mono text-[8.5px] tracking-wider uppercase text-[#7a6042] font-semibold">
                      {t('Languages / Scripts:', 'भाषाएँ / लिपियाँ:')}
                    </span>
                    <span className="font-semibold text-[#2c221a] mt-0.5 inline-block">
                      {selectedBook.languages.join(' , ')}
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[8.5px] tracking-wider uppercase text-[#7a6042] font-semibold">
                      {t('Physical Condition:', 'भौतिक स्थिति:')}
                    </span>
                    <span className="text-[#2c221a] mt-0.5 inline-block">
                      {selectedBook.condition}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
