import React from 'react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <>
      {/* Cinematic Full Screen Hero Section */}
      <section className="relative w-full min-h-[100svh] md:min-h-0 lg:min-h-screen pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8 md:pb-12 px-2 sm:px-4 flex flex-col justify-start md:justify-center items-center overflow-hidden paper-grain bg-[#1a1512] bg-[linear-gradient(rgba(15,10,7,0.5),rgba(15,10,7,0.5)),url('/assets/aistudio/golden_bg_6f21ddff.png'),linear-gradient(rgba(15,10,7,0.5),rgba(15,10,7,0.5)),url('/assets/aistudio/ram_background_copy_4fbc3e6e.png')] bg-cover bg-center bg-no-repeat">
        {/* Portrait Image placed between center and right side of section (reduced by 15%) */}
        <img
          src="/assets/aistudio/image_179e2dc4.png"
          alt="Ram Ashok Kumar"
          className="absolute left-1/2 md:left-[75%] bottom-0 -translate-x-1/2 translate-y-[24%] md:translate-y-[27%] h-[66%] md:h-[68%] w-auto max-w-none object-contain object-bottom pointer-events-none z-20"
        />

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
            
            {/* Top Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex absolute top-[8%] sm:top-[12%] md:top-[18%] flex-col items-center justify-center text-center max-w-[85%] sm:max-w-md md:max-w-lg z-10"
            >
              <p className="font-serif text-[7.5px] sm:text-xs md:text-base lg:text-lg text-gold-faded/90 leading-snug sm:leading-relaxed font-semibold">
                "शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुं<br/>
                न चेदेवं देवो न खलु कुशलः स्पन्दितुमपि।"
              </p>
              <p className="mt-0.5 sm:mt-1.5 md:mt-2 font-sans text-[6px] sm:text-[10px] md:text-sm text-ancient-beige/70 uppercase tracking-widest">
                आदि शंकराचार्य द्वारा रचित सौन्दर्य लहरी
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
                className="text-[1.1rem] sm:text-[1.8rem] md:text-[3rem] lg:text-[3.6rem] font-serif tracking-[0.08em] text-gold-warm font-bold leading-tight z-10"
              >
                RAM ASHOK KUMAR
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-1 sm:mt-3 md:mt-4 text-[7px] sm:text-xs md:text-sm lg:text-base font-sans font-medium tracking-[0.3em] sm:tracking-[0.4em] text-ancient-beige/85 uppercase z-10"
              >
                WHERE TANTRA MEETS SCIENCE
              </motion.h2>

              {/* Custom Ornate Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="w-24 sm:w-36 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-faded/60 to-transparent mt-2 sm:mt-4 md:mt-6 mb-1 sm:mb-2 z-10 mx-auto"
              />
            </div>

            {/* Bottom Sanskrit Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex absolute bottom-[8%] sm:bottom-[12%] md:bottom-[18%] flex-col items-center justify-center text-center max-w-[85%] sm:max-w-md md:max-w-lg z-10"
            >
              <p className="font-serif text-[7.5px] sm:text-xs md:text-base lg:text-lg text-gold-faded/90 leading-snug sm:leading-relaxed font-semibold">
                यदेवेह तदमुत्र यदमुत्र तदन्विह।<br/>
                मृत्योः स मृत्युमाप्नोति य इह नानेव पश्यति ॥
              </p>
              <p className="mt-0.5 sm:mt-1.5 md:mt-2 font-sans text-[6px] sm:text-[10px] md:text-sm text-ancient-beige/70 uppercase tracking-widest text-right w-full pr-4 sm:pr-8 md:pr-12">
                कठोपनिषद्
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
            "To investigate anomalies not as curses or mystical interventions, but as geological fractures, subterranean magnetic friction, and ancient structural acoustics waiting to be mapped."
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
              Explore Case Files
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
