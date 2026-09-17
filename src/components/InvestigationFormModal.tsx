import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, Send, Languages, Printer } from 'lucide-react';

interface InvestigationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestigationFormModal({ isOpen, onClose }: InvestigationFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const t = {
    society: "Indian Paranormal Society × ParanormalMechanism",
    title: lang === 'en' ? "Paranormal Investigation\nRequest Form" : "पैरानॉर्मल जाँच\nअनुरोध फॉर्म",
    submittedTitle: lang === 'en' ? "Request Submitted" : "अनुरोध सबमिट किया गया",
    submittedDesc: lang === 'en' ? "Your investigation request has been securely logged with the Paranormal Mechanism team. We will review your dossier and contact you shortly." : "आपका जाँच अनुरोध पैरानॉर्मल मैकेनिज्म टीम के पास सुरक्षित रूप से दर्ज कर लिया गया है। हम आपकी फाइल की समीक्षा करेंगे और जल्द ही आपसे संपर्क करेंगे।",
    sec1Title: lang === 'en' ? "Applicant Details" : "आवेदक की जानकारी",
    fullName: lang === 'en' ? "Full Name" : "पूरा नाम",
    age: lang === 'en' ? "Age" : "आयु",
    gender: lang === 'en' ? "Gender" : "लिंग",
    mobile: lang === 'en' ? "Mobile / WhatsApp" : "मोबाइल / व्हाट्सऐप",
    email: lang === 'en' ? "Email" : "ई-मेल",
    relationship: lang === 'en' ? "Your Relationship to the Location" : "इस स्थान से आपका संबंध",
    relOptions: lang === 'en' 
      ? ['Owner', 'Resident', 'Family Member', 'Witness', 'Other'] 
      : ['मालिक', 'निवासी', 'परिवार का सदस्य', 'प्रत्यक्षदर्शी', 'अन्य'],
    sec2Title: lang === 'en' ? "Location Details" : "स्थान की जानकारी",
    city: lang === 'en' ? "City" : "शहर",
    state: lang === 'en' ? "State" : "राज्य",
    area: lang === 'en' ? "Area / Locality" : "क्षेत्र / मोहल्ला",
    locType: lang === 'en' ? "Location Type" : "स्थान का प्रकार",
    typeOptions: lang === 'en' 
      ? ['House', 'Apartment', 'Hotel', 'Workplace', 'Historical Site', 'Religious Place', 'Outdoor Location', 'Other']
      : ['घर', 'अपार्टमेंट', 'होटल', 'कार्यस्थल', 'ऐतिहासिक स्थल', 'धार्मिक स्थल', 'बाहरी स्थान', 'अन्य'],
    address: lang === 'en' ? "Exact Address / Location Details" : "पूरा पता / स्थान की जानकारी",
    permission: lang === 'en' ? "Do you have permission/authority for our team to investigate this location?" : "क्या आपके पास इस स्थान पर जाँच की अनुमति / अधिकार है?",
    yes: lang === 'en' ? "Yes" : "हाँ",
    no: lang === 'en' ? "No" : "नहीं",
    sec3Title: lang === 'en' ? "Reported Incident" : "कथित घटना की जानकारी",
    firstOccur: lang === 'en' ? "When did the activity first occur?" : "घटना पहली बार कब हुई?",
    howOften: lang === 'en' ? "How often does it occur?" : "यह कितनी बार होती है?",
    oftenOptions: lang === 'en'
      ? ['Once', 'Occasionally', 'Frequently', 'Daily', 'Unknown']
      : ['एक बार', 'कभी-कभी', 'अक्सर', 'प्रतिदिन', 'जानकारी नहीं'],
    timeOccur: lang === 'en' ? "Usually occurs:" : "आमतौर पर कब होती है?",
    timeOptions: lang === 'en'
      ? ['Morning', 'Afternoon', 'Evening', 'Night', 'Unknown']
      : ['सुबह', 'दोपहर', 'शाम', 'रात', 'जानकारी नहीं'],
    descIncident: lang === 'en' ? "Briefly describe what happened / what you experienced:" : "संक्षेप में बताएं कि क्या हुआ / आपने क्या अनुभव किया:",
    evidence: lang === 'en' ? "Are photos, videos, audio, CCTV or other evidence available?" : "क्या फोटो, वीडियो, ऑडियो, CCTV या अन्य साक्ष्य उपलब्ध हैं?",
    sec4Title: lang === 'en' ? "Recording & Interview Consent" : "रिकॉर्डिंग एवं इंटरव्यू की सहमति",
    recConsent1: lang === 'en' 
      ? "May Indian Paranormal Society / ParanormalMechanism photograph or video-record the location during the investigation?"
      : "क्या Indian Paranormal Society / ParanormalMechanism की टीम जाँच के दौरान स्थान की फोटो या वीडियो रिकॉर्ड कर सकती है?",
    recConsent2: lang === 'en'
      ? "May our team record your interview / statement?"
      : "क्या हमारी टीम आपका इंटरव्यू / बयान रिकॉर्ड कर सकती है?",
    recConsent3: lang === 'en'
      ? "May family members / witnesses be interviewed and recorded?"
      : "क्या परिवार के सदस्यों / प्रत्यक्षदर्शियों का इंटरव्यू और रिकॉर्डिंग की जा सकती है?",
    recConsent3Options: lang === 'en'
      ? ['Yes', 'No', 'Only with their individual consent']
      : ['हाँ', 'नहीं', 'केवल उनकी व्यक्तिगत सहमति से'],
    sec5Title: lang === 'en' ? "Identity & Social Media Consent" : "पहचान एवं सोशल मीडिया की सहमति",
    idName: lang === 'en' ? "May your real name be disclosed?" : "क्या आपका वास्तविक नाम सार्वजनिक किया जा सकता है?",
    idNameOpt: lang === 'en' ? ['Yes', 'No', 'First Name Only'] : ['हाँ', 'नहीं', 'केवल पहला नाम'],
    idFace: lang === 'en' ? "May your face appear in published content?" : "क्या आपका चेहरा प्रकाशित सामग्री में दिखाया जा सकता है?",
    idFaceOpt: lang === 'en' ? ['Yes', 'No', 'Blur My Face'] : ['हाँ', 'नहीं', 'चेहरा धुंधला किया जाए'],
    idVoice: lang === 'en' ? "May your voice be used?" : "क्या आपकी आवाज का उपयोग किया जा सकता है?",
    idVoiceOpt: lang === 'en' ? ['Yes', 'No', 'Alter My Voice'] : ['हाँ', 'नहीं', 'आवाज बदली जाए'],
    idCity: lang === 'en' ? "May the City be identified publicly?" : "क्या शहर का नाम सार्वजनिक किया जा सकता है?",
    idAddressOpt: lang === 'en' ? "May the exact location/address be identified publicly?" : "क्या सटीक स्थान / पता सार्वजनिक किया जा सकता है?",
    idSocial: lang === 'en' ? "May investigation footage/photos/interviews be used on social media?" : "क्या जाँच के वीडियो / फोटो / इंटरव्यू सोशल मीडिया पर प्रकाशित किए जा सकते हैं?",
    platforms: lang === 'en' ? "Platforms:" : "प्लेटफॉर्म:",
    platOptions: lang === 'en' 
      ? ['Instagram', 'YouTube', 'Facebook', 'Website', 'Other']
      : ['Instagram', 'YouTube', 'Facebook', 'Website', 'अन्य'],
    sec6Title: lang === 'en' ? "Declaration & Consent" : "घोषणा एवं सहमति",
    declaration: lang === 'en'
      ? "I confirm that the information provided above is true to the best of my knowledge. I understand that the investigation may identify ordinary, environmental, structural, technological or other explanations for reported events. I understand that investigation and social-media publication are separate permissions and that other participants may require their own consent."
      : "मैं पुष्टि करता/करती हूँ कि ऊपर दी गई जानकारी मेरे सर्वोत्तम ज्ञान के अनुसार सत्य है। मैं समझता/समझती हूँ कि जाँच के दौरान बताई गई घटनाओं के लिए सामान्य, पर्यावरणीय, संरचनात्मक, तकनीकी या अन्य स्पष्टीकरण मिल सकते हैं। मैं समझता/समझती हूँ कि जाँच और सोशल मीडिया प्रकाशन अलग-अलग अनुमतियाँ हैं और अन्य प्रतिभागियों को अपनी सहमति की आवश्यकता हो सकती है।",
    appName: lang === 'en' ? "Applicant Name" : "आवेदक का नाम",
    signature: lang === 'en' ? "Signature / Digital Consent" : "हस्ताक्षर / डिजिटल सहमति",
    date: lang === 'en' ? "Date" : "दिनांक",
    submitBtn: lang === 'en' ? "Submit Investigation Request" : "जाँच अनुरोध सबमिट करें",
    printBtn: lang === 'en' ? "Print Form" : "फॉर्म प्रिंट करें",
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF5E9] text-ancient-dark rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-bronze-dark/30 paper-grain vintage-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="print-hide absolute top-4 right-4 p-2 text-ancient-dark/50 hover:text-red-800 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center p-12">
              <ShieldAlert className="w-16 h-16 text-gold-warm mb-4" />
              <h3 className="font-serif text-2xl text-amber-950 font-bold mb-2">{t.submittedTitle}</h3>
              <p className="text-ancient-dark/70 font-sans">
                {t.submittedDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-10 font-vintage relative">
              
              {/* Form Header */}
              <div className="text-center border-b-2 border-amber-900/20 pb-8 relative">
                
                {/* Language Toggle Button - placed to the left of the top span using absolute positioning for exact placement or flex layout */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-3 relative">
                  <button
                    type="button"
                    onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                    className="print-hide md:absolute left-0 top-0 flex items-center gap-2 px-3 py-1.5 bg-amber-900/10 hover:bg-amber-900/20 text-amber-950 rounded text-xs font-mono font-bold uppercase transition-colors border border-amber-900/20"
                  >
                    <Languages className="w-4 h-4" />
                    {lang === 'en' ? 'Hindi' : 'English'}
                  </button>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-amber-900/60 uppercase block">
                    {t.society}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-amber-950 font-bold tracking-wide uppercase whitespace-pre-line">
                  {t.title}
                </h2>
              </div>

              {/* 1. APPLICANT DETAILS */}
              <section className="space-y-6">
                <h3 className="font-serif text-lg text-amber-900 font-bold border-b border-amber-900/10 pb-2 flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">1</span>
                  {t.sec1Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.fullName}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.age}</label>
                    <input type="number" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.gender}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.mobile}</label>
                    <input type="tel" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.email}</label>
                    <input type="email" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.relationship}</label>
                    <div className="flex flex-wrap gap-4">
                      {t.relOptions.map(rel => (
                        <label key={rel} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="relationship" value={rel} className="accent-amber-900" required />
                          <span className="text-sm">{rel}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. LOCATION DETAILS */}
              <section className="space-y-6">
                <h3 className="font-serif text-lg text-amber-900 font-bold border-b border-amber-900/10 pb-2 flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">2</span>
                  {t.sec2Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.city}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.state}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.area}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.locType}</label>
                    <div className="flex flex-wrap gap-4">
                      {t.typeOptions.map(type => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="locationType" value={type} className="accent-amber-900" required />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.address}</label>
                    <textarea rows={3} required className="bg-[#f2e6cf] border border-amber-900/30 p-2 focus:outline-none focus:border-amber-900 rounded resize-none" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2 bg-amber-900/5 p-4 rounded border border-amber-900/10">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.permission}</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="permission" value="Yes" className="accent-amber-900" required /><span className="text-sm font-bold">{t.yes}</span></label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="permission" value="No" className="accent-amber-900" required /><span className="text-sm font-bold">{t.no}</span></label>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. REPORTED INCIDENT */}
              <section className="space-y-6">
                <h3 className="font-serif text-lg text-amber-900 font-bold border-b border-amber-900/10 pb-2 flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">3</span>
                  {t.sec3Title}
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.firstOccur}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.howOften}</label>
                    <div className="flex flex-wrap gap-4">
                      {t.oftenOptions.map(freq => (
                        <label key={freq} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="frequency" value={freq} className="accent-amber-900" required />
                          <span className="text-sm">{freq}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.timeOccur}</label>
                    <div className="flex flex-wrap gap-4">
                      {t.timeOptions.map(time => (
                        <label key={time} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="timeOfDay" value={time} className="accent-amber-900" required />
                          <span className="text-sm">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.descIncident}</label>
                    <textarea rows={5} required className="bg-[#f2e6cf] border border-amber-900/30 p-2 focus:outline-none focus:border-amber-900 rounded resize-none" />
                  </div>
                  <div className="flex flex-col gap-2 bg-amber-900/5 p-4 rounded border border-amber-900/10">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.evidence}</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="evidence" value="Yes" className="accent-amber-900" required /><span className="text-sm">{t.yes}</span></label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="evidence" value="No" className="accent-amber-900" required /><span className="text-sm">{t.no}</span></label>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. RECORDING & INTERVIEW CONSENT */}
              <section className="space-y-6">
                <h3 className="font-serif text-lg text-amber-900 font-bold border-b border-amber-900/10 pb-2 flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">4</span>
                  {t.sec4Title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-amber-900/5 pb-2">
                    <label className="text-sm font-semibold text-amber-950">{t.recConsent1}</label>
                    <div className="flex gap-4 shrink-0">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="consentRec" value="Yes" className="accent-amber-900" required /><span className="text-sm">{t.yes}</span></label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="consentRec" value="No" className="accent-amber-900" required /><span className="text-sm">{t.no}</span></label>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-amber-900/5 pb-2">
                    <label className="text-sm font-semibold text-amber-950">{t.recConsent2}</label>
                    <div className="flex gap-4 shrink-0">
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="consentInt" value="Yes" className="accent-amber-900" required /><span className="text-sm">{t.yes}</span></label>
                      <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="consentInt" value="No" className="accent-amber-900" required /><span className="text-sm">{t.no}</span></label>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-amber-900/5 pb-2">
                    <label className="text-sm font-semibold text-amber-950">{t.recConsent3}</label>
                    <div className="flex gap-4 shrink-0 flex-wrap">
                      {t.recConsent3Options.map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="consentFam" value={opt} className="accent-amber-900" required />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. IDENTITY & SOCIAL MEDIA CONSENT */}
              <section className="space-y-6">
                <h3 className="font-serif text-lg text-amber-900 font-bold border-b border-amber-900/10 pb-2 flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">5</span>
                  {t.sec5Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { label: t.idName, name: 'idName', options: t.idNameOpt },
                    { label: t.idFace, name: 'idFace', options: t.idFaceOpt },
                    { label: t.idVoice, name: 'idVoice', options: t.idVoiceOpt },
                    { label: t.idCity, name: 'idCity', options: [t.yes, t.no] },
                    { label: t.idAddressOpt, name: 'idAddress', options: [t.yes, t.no] },
                    { label: t.idSocial, name: 'idSocial', options: [t.yes, t.no] },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-2 border-b border-amber-900/5 pb-2">
                      <label className="text-sm font-semibold text-amber-950">{field.label}</label>
                      <div className="flex gap-4 flex-wrap">
                        {field.options.map(opt => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name={field.name} value={opt} className="accent-amber-900" required />
                            <span className="text-sm">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 md:col-span-2 pt-2">
                    <label className="text-sm font-semibold text-amber-950">{t.platforms}</label>
                    <div className="flex gap-4 flex-wrap">
                      {t.platOptions.map(plat => (
                        <label key={plat} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="platforms" value={plat} className="accent-amber-900 rounded-sm" />
                          <span className="text-sm">{plat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. DECLARATION & CONSENT */}
              <section className="space-y-6 pt-6 border-t-2 border-amber-900/20">
                <h3 className="font-serif text-lg text-amber-900 font-bold flex items-center gap-2">
                  <span className="bg-amber-900 text-[#FAF5E9] px-2 py-0.5 rounded-sm text-sm">6</span>
                  {t.sec6Title}
                </h3>
                
                <p className="text-sm leading-relaxed text-amber-950/80 italic">
                  {t.declaration}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.appName}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.signature}</label>
                    <input type="text" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900 font-serif italic text-lg text-amber-950" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs font-bold uppercase text-amber-900/70">{t.date}</label>
                    <input type="date" required className="bg-[#f2e6cf] border-b border-amber-900/30 p-2 focus:outline-none focus:border-amber-900" />
                  </div>
                </div>
              </section>

              {/* "For Investigation Team Use" - Decorative only */}
              <div className="mt-12 p-6 border-2 border-dashed border-red-900/30 bg-red-900/5 rounded select-none opacity-60">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-red-900 mb-4 text-center">FOR INVESTIGATION TEAM USE ONLY</h4>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-red-900/70">
                  <div>Case ID: _________________</div>
                  <div>Date Received: _______________</div>
                  <div className="col-span-2">Assigned Investigator: _________________________________</div>
                  <div className="col-span-2">Status: [ ] Pending  [ ] Under Review  [ ] Approved  [ ] Declined</div>
                  <div className="col-span-2">Internal Notes: _________________________________________________</div>
                </div>
              </div>

              {/* Submit Action */}
              <div className="print-hide pt-8 flex flex-col md:flex-row justify-center gap-4 sticky bottom-0 bg-[#FAF5E9] pb-4 border-t border-amber-900/10 mt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-amber-950 text-[#FAF5E9] hover:bg-amber-900 rounded font-serif text-sm font-bold tracking-widest uppercase transition-all shadow-lg flex items-center gap-3 w-full md:w-auto justify-center"
                >
                  <Send className="w-5 h-5" />
                  {t.submitBtn}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-8 py-4 bg-[#f2e6cf] text-amber-950 hover:bg-[#ebdcb7] border border-amber-900/20 rounded font-serif text-sm font-bold tracking-widest uppercase transition-all shadow flex items-center gap-3 w-full md:w-auto justify-center"
                >
                  <Printer className="w-5 h-5" />
                  {t.printBtn}
                </button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
