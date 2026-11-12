import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HERO_SACRED_FRIEZE_IMAGES = [
  {
    src: '/assets/aistudio/image_5efa64aa.png',
    altEn: 'Śakti Gaṇapati Temple Stone Carving',
    altHi: 'शक्ति गणपति पाषाण शिल्प'
  },
  {
    src: '/assets/aistudio/image_8940494d.png',
    altEn: 'Śaiva Siddha Tapasvī Before Sacred Dhūnī',
    altHi: 'पवित्र धूनी के समक्ष शैव सिद्ध तपस्वी'
  },
  {
    src: '/assets/aistudio/image_5c8a73bb.png',
    altEn: 'Siddha Yogi in Midnight Meditation',
    altHi: 'निशीथ ध्यान में लीन सिद्ध योगी'
  },
  {
    src: '/assets/aistudio/image_edacf615.png',
    altEn: 'Avadhūta Master with Triśūla and Four Sacred Dogs',
    altHi: 'त्रिशूल एवं चार श्वानों सहित अवधूत सिद्ध गुरु'
  },
  {
    src: '/assets/aistudio/image_a627280b.png',
    altEn: 'Jagadguru Ādi Śaṅkarācārya and the Four Āmnāya Pīṭhas',
    altHi: 'जगद्गुरु आदि शंकराचार्य एवं चतुराम्नाय पीठ'
  },
  {
    src: '/assets/aistudio/image_e99e5e30.png',
    altEn: 'Lord Dattātreya Under the Audumbara Tree',
    altHi: 'औदुम्बर वृक्ष के नीचे भगवान् दत्तात्रेय'
  },
  {
    src: '/assets/aistudio/image_bcb123e7.png',
    altEn: 'Fierce Four-Armed Mahākāla Bhairava',
    altHi: 'चतुर्भुज उग्र महाकाल भैरव'
  },
  {
    src: '/assets/aistudio/image_b1c40c57.png',
    altEn: 'Nāga-Crowned Goddess on Serpent Throne',
    altHi: 'नाग-छत्र शोभित भगवती'
  },
  {
    src: '/assets/aistudio/image_8109c6a9.png',
    altEn: 'Flame-Crowned Kāpālika Bhairava on Skull Throne',
    altHi: 'ज्वाला-मुकुटधारी कापालिक भैरव'
  },
  {
    src: '/assets/aistudio/image_1ea643eb.png',
    altEn: 'Consecrated Sindūra Meru, Triśūla, Rudrākṣa & Dīpa',
    altHi: 'सिन्दूर मेरु, त्रिशूल, रुद्राक्ष एवं दीप अर्चन'
  }
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [previewImage, setPreviewImage] = useState<(typeof HERO_SACRED_FRIEZE_IMAGES)[number] | null>(null);

  return (
    <>
      {/* Cinematic Full Screen Hero Section */}
      <section className="relative w-full min-h-[100svh] md:min-h-0 lg:min-h-screen pt-16 sm:pt-20 md:pt-22 pb-4 sm:pb-8 md:pb-12 px-2 sm:px-4 flex flex-col justify-start md:justify-center items-center overflow-hidden paper-grain bg-[#1a1512] bg-[linear-gradient(rgba(15,10,7,0.5),rgba(15,10,7,0.5)),url('/assets/aistudio/golden_bg_6f21ddff.png'),linear-gradient(rgba(15,10,7,0.5),rgba(15,10,7,0.5)),url('/assets/aistudio/ram_background_copy_4fbc3e6e.png')] bg-cover bg-center bg-no-repeat">
        {/* Portrait Image placed between center and right side of section (reduced by 15%) */}
        <img
          src="/assets/aistudio/image_179e2dc4.png"
          alt={t('Ram Ashok Kumar', 'राम अशोक कुमार')}
          className="absolute left-1/2 md:left-[75%] bottom-0 -translate-x-1/2 translate-y-[24%] md:translate-y-[27%] h-[66%] md:h-[68%] w-auto max-w-none object-contain object-bottom pointer-events-none z-20"
        />

        {/* Horizontal Moving Sacred Frieze Directly Above the Video */}
        <div
          aria-label={t('Sacred Lineage & Iconographic Frieze', 'पवित्र सिद्ध-परंपरा एवं विग्रह पट्टिका')}
          className="relative w-full max-w-6xl mx-auto mb-2 sm:mb-2.5 md:mb-3 rounded-lg md:rounded-xl border border-bronze-dark/45 bg-[#110e0d]/85 backdrop-blur-sm shadow-[0_12px_32px_rgba(0,0,0,0.75)] overflow-hidden z-10"
        >
          {/* Top & Bottom Subtle Gold Hairlines */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-faded/45 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold-faded/35 to-transparent z-20" />

          {/* Left & Right Feathered Edge Vignette Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-14 md:w-20 bg-gradient-to-r from-[#110e0d] via-[#110e0d]/75 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-14 md:w-20 bg-gradient-to-l from-[#110e0d] via-[#110e0d]/75 to-transparent z-20" />

          {/* Seamless Infinite Horizontal Track (2x duplicated for continuous loop) */}
          <div className="py-1.5 sm:py-2">
            <div className="animate-sacred-frieze gap-2 sm:gap-2.5 md:gap-3 px-1.5">
              {[...HERO_SACRED_FRIEZE_IMAGES, ...HERO_SACRED_FRIEZE_IMAGES].map((item, idx) => (
                <button
                  key={`${item.src}-${idx}`}
                  type="button"
                  onClick={() => setPreviewImage(item)}
                  title={t(item.altEn, item.altHi)}
                  className="group relative shrink-0 h-16 sm:h-20 md:h-24 lg:h-28 aspect-[4/5] rounded-md overflow-hidden border border-gold-faded/25 hover:border-gold-warm/85 bg-[#0c0908] shadow-[0_4px_14px_rgba(0,0,0,0.7)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-warm"
                >
                  <img
                    src={item.src}
                    alt={t(item.altEn, item.altHi)}
                    loading="eager"
                    className="w-full h-full object-cover object-top brightness-95 contrast-105 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle antique vignette overlay on each miniature plate */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-warm/15 bg-gradient-to-t from-black/55 via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full h-auto aspect-[16/9] max-w-6xl mx-auto rounded-lg md:rounded-xl border border-bronze-dark/30 shadow-2xl flex flex-col justify-center items-center text-center overflow-hidden bg-[#110e0d]">
          {/* Cinematic Background Video */}
          <video
            src="/WEB.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/90 pointer-events-none z-1" />

          {/* Floating Dust Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
            {[...Array(15)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const left = Math.random() * 100;
              const delay = Math.random() * 10;
              const duration = Math.random() * 10 + 10;
              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-gold-warm/30 dust-particle"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}%`,
                    bottom: '-20px',
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              );
            })}
          </div>

          {/* Central Hero Block */}
          <div className="z-10 w-full h-full max-w-4xl px-2 sm:px-4 flex flex-col items-center justify-center relative">
            
            {/* Top Sanskrit Quote (Sanskrit verse preserved untouched; Hindi attribution translated) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex absolute top-[8%] sm:top-[12%] md:top-[18%] flex-col items-center justify-center text-center max-w-[85%] sm:max-w-md md:max-w-lg z-10"
            >
              <p className="font-serif text-[7.5px] sm:text-xs md:text-base lg:text-lg text-gold-faded/95 leading-snug sm:leading-relaxed font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_5px_rgba(0,0,0,0.85),0_0_10px_rgba(0,0,0,0.75),0_0_18px_rgba(0,0,0,0.65)]">
                "शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं<br/>
                न चेदेवं देवो न खलु कुशलः स्पन्दितुमपि।"
              </p>
              <p className="mt-0.5 sm:mt-1.5 md:mt-2 font-sans text-[6px] sm:text-[10px] md:text-sm text-ancient-beige/80 uppercase tracking-widest drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.85),0_0_8px_rgba(0,0,0,0.75),0_0_14px_rgba(0,0,0,0.65)]">
                {t('Soundarya Lahari — Composed by Adi Shankaracharya', 'आदि शंकराचार्य द्वारा रचित सौन्दर्य लहरी')}
              </p>
            </motion.div>

            {/* Title Group with Wheel */}
            <div className="relative flex flex-col items-center justify-center w-full z-10">
              {/* Ancient Logo Symbol (Moved behind text) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11rem] h-[11rem] sm:w-[20rem] sm:h-[20rem] md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] flex items-center justify-center text-gold-faded pointer-events-none z-[-1]"
              >
                {/* Ornate Circular Border */}
                <svg className="absolute inset-0 m-auto w-1/2 h-1/2 animate-[spin_120s_linear_infinite] opacity-50" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="97" stroke="currentColor" strokeWidth="2.125" fill="none" />
                  <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="0.85" fill="none" />
                  <circle cx="100" cy="100" r="77" stroke="currentColor" strokeWidth="0.85" fill="none" />
                  <circle cx="100" cy="100" r="73" stroke="currentColor" strokeWidth="2.125" fill="none" />
                  
                  <g stroke="currentColor" fill="none">
                    {[...Array(72)].map((_, i) => {
                      const isEven = i % 2 === 0;
                      const rOut = 93;
                      const rIn = 77;
                      const aB = i * 5 * Math.PI / 180;
                      const aA = (i + 1) * 5 * Math.PI / 180;
                      const aC = (i + 2) * 5 * Math.PI / 180;
                      const rB = isEven ? rOut : rIn;
                      const rA = isEven ? rIn : rOut;
                      const rC = isEven ? rOut : rIn;
                      
                      const B = { x: 100 + rB * Math.sin(aB), y: 100 - rB * Math.cos(aB) };
                      const A = { x: 100 + rA * Math.sin(aA), y: 100 - rA * Math.cos(aA) };
                      const C = { x: 100 + rC * Math.sin(aC), y: 100 - rC * Math.cos(aC) };
                      
                      return (
                        <g key={i}>
                          <line x1={B.x} y1={B.y} x2={A.x} y2={A.y} strokeWidth="1.275" />
                          {[0.2, 0.4, 0.6, 0.8].map(s => (
                            <line
                              key={s}
                              x1={(1 - s) * C.x + s * A.x}
                              y1={(1 - s) * C.y + s * A.y}
                              x2={(1 - s) * C.x + s * B.x}
                              y2={(1 - s) * C.y + s * B.y}
                              strokeWidth="0.6375"
                            />
                          ))}
                        </g>
                      );
                    })}
                  </g>
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[1.1rem] sm:text-[1.8rem] md:text-[3rem] lg:text-[3.6rem] font-serif tracking-[0.08em] text-gold-warm font-bold leading-tight z-10 drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)] [text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_0_8px_rgba(0,0,0,0.85),0_0_16px_rgba(0,0,0,0.75),0_0_28px_rgba(0,0,0,0.65)]"
              >
                {t('RAM ASHOK KUMAR', 'राम अशोक कुमार')}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-1 sm:mt-3 md:mt-4 text-[7px] sm:text-xs md:text-sm lg:text-base font-sans font-medium tracking-[0.3em] sm:tracking-[0.4em] text-ancient-beige/85 uppercase z-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] [text-shadow:0_1px_3px_rgba(0,0,0,0.95),0_0_6px_rgba(0,0,0,0.85),0_0_12px_rgba(0,0,0,0.75),0_0_20px_rgba(0,0,0,0.65)]"
              >
                {t('WHERE TANTRA MEETS SCIENCE', 'जहाँ तंत्र और विज्ञान का संगम होता है')}
              </motion.h2>

              {/* Custom Ornate Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="w-24 sm:w-36 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-faded/60 to-transparent mt-2 sm:mt-4 md:mt-6 mb-1 sm:mb-2 z-10 mx-auto"
              />
            </div>

            {/* Bottom Sanskrit Quote (Sanskrit verse preserved untouched) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex absolute bottom-[8%] sm:bottom-[12%] md:bottom-[18%] flex-col items-center justify-center text-center max-w-[85%] sm:max-w-md md:max-w-lg z-10"
            >
              <p className="font-serif text-[7.5px] sm:text-xs md:text-base lg:text-lg text-gold-faded/95 leading-snug sm:leading-relaxed font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_5px_rgba(0,0,0,0.85),0_0_10px_rgba(0,0,0,0.75),0_0_18px_rgba(0,0,0,0.65)]">
                यदेवेह तदमुत्र यदमुत्र तदन्विह।<br/>
                मृत्योः स मृत्युमाप्नोति य इह नानेव पश्यति ॥
              </p>
              <p className="mt-0.5 sm:mt-1.5 md:mt-2 font-sans text-[6px] sm:text-[10px] md:text-sm text-ancient-beige/80 uppercase tracking-widest text-right w-full pr-4 sm:pr-8 md:pr-12 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.85),0_0_8px_rgba(0,0,0,0.75),0_0_14px_rgba(0,0,0,0.65)]">
                {t('Katha Upanishad', 'कठोपनिषद्')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Section: Scrollable Description / Actions (Part of Website) */}
      <section className="relative w-full flex flex-col items-center text-center px-4 py-24 paper-grain bg-[#1a1512] border-b border-bronze-dark/40">
        <div className="z-10 max-w-4xl w-full flex flex-col items-center justify-center">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-ancient-beige/90 font-vintage italic leading-relaxed max-w-3xl px-4 drop-shadow-md"
          >
            {t(
              '"To investigate anomalies not as curses or mystical interventions, but as geological fractures, subterranean magnetic friction, and ancient structural acoustics waiting to be mapped."',
              '"विसंगतियों की जाँच अभिशाप या रहस्यमयी हस्तक्षेप के रूप में नहीं, बल्कि भूगर्भीय दरारों, भूमिगत चुंबकीय घर्षण और प्राचीन संरचनात्मक ध्वनि-विज्ञान के रूप में करना जिनका मानचित्रण किया जाना अभी शेष है।"'
            )}
          </motion.p>

          {/* Call to Scroll Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-4"
          >
            <a
              href="#archives"
              className="group relative px-6 py-3 overflow-hidden rounded bg-bronze-dark/40 border border-gold-faded/40 hover:border-gold-warm transition-all duration-300 text-xs tracking-[0.2em] font-sans font-medium text-gold-warm uppercase"
            >
              <span className="absolute inset-0 bg-gold-warm/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {t('Explore Case Files', 'केस फ़ाइलें देखें')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal for Inspecting Any Frieze Artwork */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-[160] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-xl border border-gold-warm/60 bg-[#120d0a] p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.95)]"
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label={t('Close preview', 'पूर्वावलोकन बंद करें')}
                className="absolute top-5 right-5 z-10 p-1.5 rounded-full bg-black/75 border border-gold-faded/50 text-gold-warm hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={previewImage.src}
                alt={t(previewImage.altEn, previewImage.altHi)}
                className="w-full max-h-[75vh] object-contain rounded-lg border border-bronze-dark/50 bg-[#0b0806]"
              />
              <p className="mt-2.5 text-center font-serif text-xs sm:text-sm text-gold-faded tracking-wider">
                {t(previewImage.altEn, previewImage.altHi)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

