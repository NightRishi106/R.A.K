import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%202.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Heavy vignette for ambient reading lighting */}
      <div className="absolute inset-0 vignette-heavy pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">Institute Courier</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            CORRESPONDENCE DESK
          </h2>
          <p className="mt-4 text-lg md:text-xl text-ancient-beige/65 font-vintage italic leading-relaxed">
            "Address your findings, geological concerns, or text queries directly to the Varanasi main chamber. We read every dispatch."
          </p>
        </div>

        {/* Direct Clickable Mail Link */}
        <div className="flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ramashokkumar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-5 bg-[#211915]/90 hover:bg-[#2c211b] border-2 border-gold-faded/30 hover:border-gold-warm rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
          >
            <Mail className="w-5 h-5 text-gold-warm group-hover:scale-110 transition-transform" />
            <span className="font-serif text-base md:text-lg text-gold-warm tracking-wider">
              mail: <span className="underline underline-offset-4 decoration-gold-faded/50 group-hover:decoration-gold-warm">ramashokkumar@gmail.com</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

