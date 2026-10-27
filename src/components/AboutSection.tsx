import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%201.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />

      <div className="w-full max-w-[95vw] 2xl:max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait & Plaque (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Antique Framed Photo of Ram Ashok Kumar */}
            <div className="relative p-4 bg-ancient-dark/60 backdrop-blur-sm border border-bronze-light/30 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.8)] max-w-sm w-full">
              {/* Copper corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-faded/60" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-faded/60" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-faded/60" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-faded/60" />

              {/* Photo Canvas */}
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-transparent border border-bronze-dark/60">
                <img
                  src="/PORTRAIT.jpeg"
                  alt={t('Ram Ashok Kumar Portrait', 'राम अशोक कुमार का चित्र')}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Plaque Bracket Below Photo */}
              <div className="mt-5 px-4 py-3 bg-[#2a211b] border-t border-b border-gold-faded/30 text-center rounded relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gold-faded/40" />
                <div className="absolute inset-y-0 right-0 w-[3px] bg-gold-faded/40" />
                <h3 className="font-serif text-[13px] tracking-[0.2em] text-gold-warm font-semibold">
                  {t('RAM ASHOK KUMAR', 'राम अशोक कुमार')}
                </h3>
                <p className="font-mono text-[9px] tracking-widest text-ancient-beige/60 uppercase mt-1">
                  {t('Geophysicist & Chief Investigator', 'भू-भौतिकीविद् एवं मुख्य अन्वेषक')}
                </p>
                <div className="flex justify-center items-center gap-1.5 mt-2">
                  <span className="h-1 w-1 rounded-full bg-gold-faded" />
                  <span className="font-sans text-[8px] tracking-widest text-ancient-beige/40 uppercase">
                    {t('Banaras Hindu University (BHU)', 'काशी हिन्दू विश्वविद्यालय (BHU)')}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gold-faded" />
                </div>
              </div>
            </div>

            {/* Field Notebook Page Overlay styled block underneath */}
            <div className="mt-8 max-w-sm w-full p-6 bg-ancient-beige text-ancient-dark rounded border border-bronze-dark/30 shadow-md rotate-[-1deg] font-vintage">
              <span className="font-mono text-[9px] text-[#544338] tracking-widest block mb-1">
                {t('FIELD NOTEBOOK EXCERPT:', 'क्षेत्रीय नोटबुक अंश:')}
              </span>
              <p className="text-[13px] leading-relaxed italic text-[#2c221a]">
                {t(
                  '"Science does not retreat in the face of mystery. It is our duty as scholars to carry the magnetometer and the seismometer into the dark corners of the Earth, not to hunt ghosts, but to listen to the speech of the soil."',
                  '"रहस्य के सामने विज्ञान पीछे नहीं हटता। विद्वानों के रूप में यह हमारा कर्तव्य है कि हम पृथ्वी के अंधेरे कोनों में मैग्नेटोमीटर और सीस्मोमीटर लेकर जाएं—भूतों का शिकार करने के लिए नहीं, बल्कि मिट्टी की वाणी सुनने के लिए।"'
                )}
              </p>
              <div className="mt-4 flex justify-between items-center text-[11px] font-sans font-medium text-[#544338] tracking-wide">
                <span>{t('— Varanasi, Oct 1999', '— वाराणसी, अक्टूबर 1999')}</span>
                <span className="font-vintage text-base font-bold select-none text-[#2c221a]">
                  {t('R. A. Kumar', 'आर. ए. कुमार')}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Biography & Details (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col justify-center bg-ancient-dark/60 backdrop-blur-sm border border-bronze-light/30 rounded-lg p-6 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-gold-faded" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">
                {t('The Investigator', 'अन्वेषक')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
              {t('Indian Paranormal Investigator & Practitioner of Tantra', 'भारतीय परामनोवैज्ञानिक अन्वेषक एवं तंत्र साधक')}
            </h2>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-gold-faded/30 to-transparent my-6" />

            {/* Biography block */}
            <div className="space-y-8 text-sm text-ancient-beige/85 leading-relaxed font-sans font-light">
              <p className="text-base">
                <strong className="font-medium text-gold-warm">
                  {t('Ram Ashok Kumar', 'राम अशोक कुमार')}
                </strong>{' '}
                {t(
                  '(often referred to as Ram Ashok Ji) is an Indian paranormal investigator and practitioner of Tantra with over 25 years of experience exploring supernatural phenomena.',
                  '(जिन्हें प्रायः राम अशोक जी कहा जाता है) एक भारतीय परामनोवैज्ञानिक अन्वेषक और तंत्र साधक हैं, जिन्हें अलौकिक एवं रहस्यमयी घटनाओं के अन्वेषण में 25 वर्षों से अधिक का अनुभव प्राप्त है।'
                )}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span>{' '}
                    {t('Overview & Background', 'संक्षिप्त परिचय एवं पृष्ठभूमि')}
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Experience:', 'अनुभव:')}</strong>{' '}
                      {t(
                        'Over 25 years in active field investigation, having handled over 1,000 cases of alleged hauntings, possessions, and unexplained occurrences.',
                        'सक्रिय क्षेत्रीय अन्वेषण में 25 से अधिक वर्षों का अनुभव, जिसमें कथित प्रेतबाधा, आवेश और अनसुलझी घटनाओं के 1,000 से अधिक मामलों की जाँच शामिल है।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Primary Region:', 'प्रमुख कार्यक्षेत्र:')}</strong>{' '}
                      {t(
                        'Primarily active across Delhi NCR, investigating abandoned sites, historical havelis, crematoriums, and private residential cases.',
                        'मुख्य रूप से दिल्ली-एनसीआर क्षेत्र में सक्रिय; परित्यक्त स्थलों, ऐतिहासिक हवेलियों, श्मशान घाटों और निजी आवासीय मामलों का अन्वेषण।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Digital Presence:', 'डिजिटल उपस्थिति:')}</strong>{' '}
                      {t(
                        'Content creator and founder behind the YouTube channel @paranormalmechanism, where he breaks down paranormal cases, entity behaviors, and field investigations.',
                        'यूट्यूब चैनल @paranormalmechanism के संस्थापक और निर्माता, जहाँ वे परामनोवैज्ञानिक मामलों, सूक्ष्म सत्ताओं के व्यवहार और क्षेत्रीय अनुसंधानों का विश्लेषण प्रस्तुत करते हैं।'
                      )}
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span>{' '}
                    {t('Investigative Philosophy', 'अन्वेषण दर्शन')}
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Science & Spiritual Practice:', 'विज्ञान एवं आध्यात्मिक साधना:')}</strong>{' '}
                      {t(
                        'Combines electronic paranormal detection equipment (video analysis, EMF, temperature tracking) with traditional Indian spiritual and Tantric techniques to evaluate claim evidence.',
                        'दावों और साक्ष्यों के मूल्यांकन के लिए इलेक्ट्रॉनिक जांच उपकरणों (वीडियो विश्लेषण, ईएमएफ, तापमान ट्रैकिंग) को पारंपरिक भारतीय आध्यात्मिक और तांत्रिक विधियों के साथ जोड़ते हैं।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Focus on Evidence:', 'साक्ष्य पर केंद्रित दृष्टिकोण:')}</strong>{' '}
                      {t(
                        'Emphasizes analyzing physical evidence, video captures, and psychological/environmental factors rather than relying on sensationalized horror narratives.',
                        'सनसनीखेज डरावनी कहानियों पर निर्भर रहने के बजाय भौतिक साक्ष्य, वीडियो रिकॉर्डिंग तथा मनोवैज्ञानिक एवं पर्यावरणीय कारकों के विश्लेषण पर बल देते हैं।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">{t('Study of Entities:', 'सूक्ष्म सत्ताओं का अध्ययन:')}</strong>{' '}
                      {t(
                        'Discusses entity classifications in traditional contexts—including Munjya (Rakt Pishach), Jinn, poltergeist activity, and house curses.',
                        'पारंपरिक संदर्भों में विभिन्न सत्ताओं के वर्गीकरण—जैसे मुंज्या (रक्त पिशाच), जिन्न, पोल्टरगाइस्ट गतिविधि और गृह-दोष—पर गहन शोध करते हैं।'
                      )}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-bronze-dark/50 to-transparent my-6" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span>{' '}
                    {t('Notable Cases', 'उल्लेखनीय प्रकरण')}
                  </h3>
                  <ul className="space-y-3 list-disc pl-5 marker:text-gold-faded">
                    <li>
                      <strong className="text-gold-faded font-medium">
                        {t('The Haunted Teddy Bear Case (Bengaluru/Noida):', 'हॉन्टेड टेडी बियर प्रकरण (बेंगलुरु/नोएडा):')}
                      </strong>{' '}
                      {t(
                        'One of his frequently cited cases involving reported poltergeist phenomena, electronic disruptions, and movement tied to an object.',
                        'उनके सबसे चर्चित मामलों में से एक, जिसमें किसी वस्तु से जुड़ी पोल्टरगाइस्ट घटनाओं, इलेक्ट्रॉनिक व्यवधानों और असामान्य गति का अध्ययन किया गया।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">
                        {t('Burari Deaths Perspective:', 'बुराड़ी प्रकरण का विश्लेषण:')}
                      </strong>{' '}
                      {t(
                        'Analysis of the infamous Burari family incident from both psychological and occult/paranormal angles.',
                        'बहुचर्चित बुराड़ी परिवार की घटना का मनोवैज्ञानिक और गूढ़/तांत्रिक दोनों दृष्टिकोणों से गहन विश्लेषण।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">
                        {t('Karol Bagh Crematorium Encounter:', 'करोल बाग श्मशान घाट अन्वेषण:')}
                      </strong>{' '}
                      {t(
                        "Field investigations conducted during night hours in Delhi's crematoriums and abandoned structures.",
                        'दिल्ली के श्मशान घाटों और परित्यक्त संरचनाओं में रात्रि के समय किए गए प्रत्यक्ष क्षेत्रीय अनुसंधान।'
                      )}
                    </li>
                    <li>
                      <strong className="text-gold-faded font-medium">
                        {t('Goa & NCR Haunted Sites:', 'गोवा एवं एनसीआर के रहस्यमयी स्थल:')}
                      </strong>{' '}
                      {t(
                        'Reviews and field reports on well-known haunted locations across India, including abandoned hotels in Goa and sites in Noida/Delhi.',
                        'गोवा के परित्यक्त होटलों और नोएडा/दिल्ली के स्थलों सहित भारत के प्रसिद्ध रहस्यमयी स्थानों पर क्षेत्रीय रिपोर्ट और समीक्षाएं।'
                      )}
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4 bg-black/20 p-5 rounded border border-bronze-dark/30">
                  <h3 className="font-serif text-gold-warm text-lg mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span>{' '}
                    {t('Media & Podcast Appearances', 'मीडिया एवं पॉडकास्ट संवाद')}
                  </h3>
                  <p className="text-sm text-ancient-beige/70 mb-4">
                    {t(
                      'Ram Ashok Kumar has been featured on several popular Hindi podcasts and supernatural shows, including:',
                      'राम अशोक कुमार कई लोकप्रिय हिंदी पॉडकास्ट और रहस्यमयी कार्यक्रमों में आमंत्रित किए जा चुके हैं, जिनमें प्रमुख हैं:'
                    )}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">{t('Rahasya Unfolded', 'रहस्य अनफोल्डेड')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">{t('Beyond Mic Show (with Siddharth Chopra)', 'बियॉन्ड माइक शो (सिद्धार्थ चोपड़ा के साथ)')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">{t('The Young Podcast (with Vikas)', 'द यंग पॉडकास्ट (विकास के साथ)')}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">{t('Deep Verma Podcast', 'दीप वर्मा पॉडकास्ट')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
