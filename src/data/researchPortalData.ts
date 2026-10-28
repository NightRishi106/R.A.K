import {
   ASHTA_BHAIRAVA_PROFILES,
  ASHTA_MATRIKA_PROFILES,
  getMatrixIntersection
} from './ashtaResearchData';
import { NINE_AVARANAS } from './shriMeruData';
import { FOURTEEN_LOKAS } from './lokaCosmologyData';
import { DEEP_SACRED_SEAL_ARTICLES } from './sacredSealsDeepData';

export interface ResearchArticleSection {
  headingEn: string;
  headingHi: string;
  bodyEn: string;
  bodyHi: string;
}

export interface ResearchArticle {
  slug: string;
  categorySlug: string;
  code: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  sanskritEpigraph: string;
  epigraphTranslationEn: string;
  epigraphTranslationHi: string;
  evidenceBadgeEn: string;
  evidenceBadgeHi: string;
  accentColor: string;
  summaryEn: string;
  summaryHi: string;
  sections: ResearchArticleSection[];
  keyFindingsEn: string[];
  keyFindingsHi: string[];
  metadata: {
    labelEn: string;
    labelHi: string;
    valueEn: string;
    valueHi: string;
  }[];
  primarySourcesEn: string;
  primarySourcesHi: string;
  authorEn: string;
  authorHi: string;
  interactiveIndex?: number;
}

export interface ResearchSubcategory {
  id: string;
  sanskritName: string;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  keyTopicsEn: string[];
  keyTopicsHi: string[];
  sourceClassificationEn: string;
  sourceClassificationHi: string;
  articleSlug?: string;
  crossGatewaySlug?: string;
}

export interface ResearchCrossLink {
  targetCategorySlug: string;
  targetArticleSlug?: string;
  gatewayRoman: string;
  labelEn: string;
  labelHi: string;
  relationNoteEn: string;
  relationNoteHi: string;
}

export interface ResearchCategoryPortal {
  chapterIndex: number; // 0 to 6
  slug: string;
  aliasSlugs?: string[];
  roman: string;
  gatewayBadgeEn?: string;
  gatewayBadgeHi?: string;
  shortTitleEn: string;
  shortTitleHi: string;
  titleEn: string;
  titleHi: string;
  sanskritSeal: string;
  subtitleEn: string;
  subtitleHi: string;
  epigraphEn: string;
  epigraphHi: string;
  overviewEn: string;
  overviewHi: string;
  editorialFramingEn?: string;
  editorialFramingHi?: string;
  methodologyEn: string;
  methodologyHi: string;
  accentColor: string;
  secondaryColor: string;
  mandalaAngle: number; // degrees around the 7-portal mandala circle
  domainTagEn: string;
  domainTagHi: string;
  sourceRegisterEn: string;
  sourceRegisterHi: string;
  subcategories?: ResearchSubcategory[];
  crossLinks?: ResearchCrossLink[];
  articles: ResearchArticle[];
}

// ============================================================================
// PORTAL I: CAGS FIELD ARCHIVE (5 Empirical Monographs)
// ============================================================================
const CAGS_FIELD_ARTICLES: ResearchArticle[] = [
  {
    slug: 'acoustic-resonance',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-01',
    titleEn: 'Acoustic Resonance in Ellipsoidal Sanctums',
    titleHi: 'दीर्घवृत्ताकार गर्भगृहों में ध्वनि अनुनाद (नाद-शास्त्र)',
    subtitleEn: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification in High-Quartz Granite Architecture',
    subtitleHi: 'उच्च-क्वार्ट्ज ग्रेनाइट वास्तुकला में स्थायी तरंग ध्वनि-विज्ञान एवं नाभीय प्रवर्धन',
    sanskritEpigraph: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति॥',
    epigraphTranslationEn: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone."',
    epigraphTranslationHi: '"ध्वनि से ही अंतरिक्ष व्याप्त है। मंद्र (गंभीर) स्वर शिलाओं में गहन प्रतिध्वनि उत्पन्न करता है।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD MEASUREMENT · ACOUSTICS',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · ध्वनि-विज्ञान',
    accentColor: '#D4AF37',
    summaryEn:
      'Ancient Indian temple sanctums (garbhagriha) were engineered using high-quartz granite blocks arranged in paraboloid or ellipsoidal vaults. Acoustic sweeps conducted by Ram Ashok Kumar demonstrate sharp standing-wave peaks between 110 Hz and 130 Hz.',
    summaryHi:
      'प्राचीन भारतीय मंदिरों के गर्भगृह उच्च-क्वार्ट्ज ग्रेनाइट शिलाओं से दीर्घवृत्ताकार या परवलयिक छतों के रूप में निर्मित किए गए थे। राम अशोक कुमार द्वारा किए गए ध्वनि-मापन 110 Hz से 130 Hz के बीच तीव्र स्थायी-तरंग अनुनाद दर्शाते हैं।',
    sections: [
      {
        headingEn: '1. Architectural Lithic Acoustics & Standing Wave Formation',
        headingHi: '1. प्रस्तर वास्तुकला ध्वनि-विज्ञान एवं स्थायी तरंग निर्माण',
        bodyEn:
          'When a baritone vocalisation or conch-shell (shankha) fundamental tone is emitted at the focal point of an enclosed granite garbhagriha, the high density and low acoustic absorption coefficient of dressed granite reflect over 96% of incident sound energy. This generates phase-locked standing waves between 110 Hz and 130 Hz, enveloping the listener in a tactile acoustic field.',
        bodyHi:
          'जब बंद ग्रेनाइट गर्भगृह के नाभीय बिंदु पर गंभीर मंत्रोच्चार या शंख-ध्वनि की जाती है, तो तराशे गए ग्रेनाइट का उच्च घनत्व और न्यून ध्वनि-अवशोषण गुणांक 96% से अधिक ध्वनि ऊर्जा को परावर्तित कर देता है। इससे 110 Hz से 130 Hz के बीच कला-संबद्ध स्थायी तरंगें उत्पन्न होती हैं जो साधक को स्पर्शनीय ध्वनि-क्षेत्र से घेर लेती हैं।'
      },
      {
        headingEn: '2. Neuro-Perceptual & Autonomic Entrainment',
        headingHi: '2. तंत्रिका-संवेदी एवं स्वायत्त तंत्रिका समन्वय',
        bodyEn:
          'Controlled EEG and acoustic field logging indicate that sustained exposure to 110–114 Hz standing resonances shifts cortical activity toward alpha-theta border rhythms while reducing prefrontal verbal chatter. What folklore describes as the stone sanctum "speaking" or vibrating with unseen presence is an intentional masterpiece of Nada-Shastra acoustic engineering.',
        bodyHi:
          'नियंत्रित ईईजी (EEG) और क्षेत्रीय ध्वनि अभिलेख दर्शाते हैं कि 110–114 Hz के निरंतर अनुनाद के संपर्क में आने से मस्तिष्क की गतिविधि अल्फा-थीटा तरंगों की ओर अग्रसर होती है। जिसे लोक-मान्यता में पत्थरों का "जीवंत होकर बोलना" कहा जाता है, वह वस्तुतः नाद-शास्त्र की सचेत ध्वनि-अभियांत्रिकी है।'
      },
      {
        headingEn: '3. Benchmark Field Verification: Vittala Complex, Hampi',
        headingHi: '3. क्षेत्रीय सत्यापन: विट्ठल मंदिर परिसर, हम्पी',
        bodyEn:
          'At the Vittala temple mandapa in Hampi, colonnette clusters carved from monolithic resonant granite (Svara-stambha) exhibit distinct modal frequencies corresponding to traditional raga intervals. Ultrasonic pulse velocity testing confirms deliberate hollowing and tapering ratios designed to tune each stone column.',
        bodyHi:
          'हम्पी के विट्ठल मंदिर मंडप में एकाश्म ग्रेनाइट से निर्मित स्वर-स्तंभों के समूह पारंपरिक राग अंतरालों के अनुरूप स्पष्ट आवृत्तियाँ उत्पन्न करते हैं। अल्ट्रासोनिक पल्स वेलोसिटी परीक्षण प्रत्येक स्तंभ को स्वरबद्ध करने के लिए किए गए सटीक अनुपातों की पुष्टि करता है।'
      }
    ],
    keyFindingsEn: [
      'Reverberation time (RT60) inside sealed granite sanctums reaches 4.2–6.8 seconds at 112 Hz.',
      'Quartz-rich granite exhibits micro-piezoelectric coupling under sustained high-decibel low-frequency resonance.',
      'Ellipsoidal ceiling curvature focuses acoustic pressure directly onto the central ritual pedestal (pitha).'
    ],
    keyFindingsHi: [
      'बंद ग्रेनाइट गर्भगृहों के भीतर 112 Hz पर प्रतिध्वनि काल (RT60) 4.2 से 6.8 सेकंड तक पहुँच जाता है।',
      'क्वार्ट्ज-समृद्ध ग्रेनाइट निरंतर निम्न-आवृत्ति अनुनाद के अंतर्गत सूक्ष्म-पीजोइलेक्ट्रिक प्रभाव प्रदर्शित करता है।',
      'दीर्घवृत्ताकार छत की वक्रता ध्वनि-दाब को सीधे केंद्रीय पीठ पर केंद्रित करती है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Nada-Shastra (नाद-शास्त्र)', valueHi: 'नाद-शास्त्र' },
      { labelEn: 'Target Frequency Band', labelHi: 'लक्षित आवृत्ति बैंड', valueEn: '110 Hz – 130 Hz (Fundamental)', valueHi: '110 Hz – 130 Hz (मूल आवृत्ति)' },
      { labelEn: 'Benchmark Site', labelHi: 'संदर्भ स्थल', valueEn: 'Musical Pillars of Vittala, Hampi', valueHi: 'विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Mayamata · Manasara Shilpa Shastra · CAGS Acoustic Field Ledger Vol. IV',
    primarySourcesHi: 'मयमतम् · मानसार शिल्प शास्त्र · क्षेत्रीय ध्वनि अभिलेख खण्ड IV',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 0
  },
  {
    slug: 'geomagnetic-friction',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-02',
    titleEn: 'Geomagnetic Friction & Subterranean Fault Marma',
    titleHi: 'भू-चुंबकीय घर्षण एवं भूमिगत भ्रंश मर्म (भू-मर्म)',
    subtitleEn: 'Tectonic Micro-Currents, Vapor-Diffusion Deflection & Temporal Lobe Sensitivity',
    subtitleHi: 'विवर्तनिक सूक्ष्म-धाराएँ, चुंबकीय विक्षेपण एवं टेम्पोरल लोब संवेदनशीलता',
    sanskritEpigraph: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते॥',
    epigraphTranslationEn: '"Where the core joints of the earth are knit, there an invisible current of force is generated."',
    epigraphTranslationHi: '"जहाँ पृथ्वी के मर्म-स्थल जुड़ते हैं, वहाँ शक्ति की एक अदृश्य धारा उत्पन्न होती है।"',
    evidenceBadgeEn: 'MAGNETOMETRY SURVEY · GEOPHYSICS',
    evidenceBadgeHi: 'चुंबकत्व मापन सर्वेक्षण · भू-भौतिकी',
    accentColor: '#E5A93C',
    summaryEn:
      'Tectonic shear zones and subterranean aquifer intersections generate localized geomagnetic anomalies (Bhu-Marma). Fluxgate magnetometer surveys by Ram Ashok Kumar map how ancient shrines and deserted settlements sit directly atop high-gradient magnetic joints.',
    summaryHi:
      'विवर्तनिक घर्षण क्षेत्र और भूमिगत जल-भ्रंश स्थानीय भू-चुंबकीय विसंगतियाँ (भू-मर्म) उत्पन्न करते हैं। राम अशोक कुमार द्वारा किए गए फ्लक्सगेट मैग्नेटोमीटर सर्वेक्षण दर्शाते हैं कि प्राचीन तीर्थ और परित्यक्त बस्तियाँ उच्च-प्रवणता वाले चुंबकीय संधि-स्थलों पर स्थित हैं।',
    sections: [
      {
        headingEn: '1. Tectonic Piezomagnetism & Streaming Potentials',
        headingHi: '1. विवर्तनिक पीजोमैग्नेटिज्म एवं प्रवाही विभव',
        bodyEn:
          'When saline groundwater flows under pressure through fractured quartz-bearing strata along geological fault lines, electrokinetic streaming potentials produce fluctuating ultra-low-frequency (ULF, 0.1–15 Hz) electromagnetic fields at the surface. Ancient Vastu soil-testing protocols identified these active nodes as Bhu-Marma points.',
        bodyHi:
          'जब खनिज-युक्त भूमिगत जल भूवैज्ञानिक भ्रंश रेखाओं के साथ क्वार्ट्ज-युक्त चट्टानों से दबाव में बहता है, तो इलेक्ट्रोकाइनेटिक विभव सतह पर अति-निम्न-आवृत्ति (ULF, 0.1–15 Hz) वाले चुंबकीय क्षेत्र उत्पन्न करते हैं। प्राचीन वास्तु भूमि-परीक्षण विधियों में इन सक्रिय बिंदुओं को भू-मर्म के रूप में पहचाना गया था।'
      },
      {
        headingEn: '2. Neurobiological Response to High-Gradient Fluxes',
        headingHi: '2. उच्च-प्रवणता चुंबकीय प्रवाह के प्रति तंत्रिका-जैविक प्रतिक्रिया',
        bodyEn:
          'In susceptible individuals, steep spatial gradients exceeding 150–300 nanoTesla per meter across sleeping or meditation quarters can induce vestibular disorientation, peripheral shadow pareidolia, and heightened hypnagogic imagery—phenomena frequently cataloged in regional haunting folklore.',
        bodyHi:
          'संवेदनशील व्यक्तियों में, शयन या ध्यान कक्षों में प्रति मीटर 150–300 नैनोटेस्ला से अधिक की तीव्र चुंबकीय प्रवणता संतुलन-भ्रम, परिधीय दृष्टि में छाया-आभास और गहन स्वप्न-चित्र उत्पन्न कर सकती है—जिन्हें अक्सर क्षेत्रीय लोककथाओं में प्रेत-बाधा मान लिया जाता है।'
      },
      {
        headingEn: '3. Field Benchmark: The Fault Line of Kuldhara Village',
        headingHi: '3. क्षेत्रीय केस अध्ययन: कुलधरा ग्राम की भ्रंश रेखा',
        bodyEn:
          'Multi-night proton magnetometer grids across the abandoned Paliwal Brahmin settlement of Kuldhara (Jaisalmer basin) revealed a sharp subterranean palaeochannel fault where nocturnal thermal contraction triggers measurable micro-magnetic spikes at dusk and pre-dawn.',
        bodyHi:
          'जैसलमेर बेसिन के परित्यक्त कुलधरा ग्राम में किए गए बहु-रात्रि प्रोटॉन मैग्नेटोमीटर सर्वेक्षणों ने एक भूमिगत प्राचीन जल-भ्रंश का खुलासा किया, जहाँ रात्रि के तापीय संकुचन से गोधूलि और ब्रह्म-मुहूर्त के समय मापनीय सूक्ष्म-चुंबकीय स्पंदन उत्पन्न होते हैं।'
      }
    ],
    keyFindingsEn: [
      'Subterranean palaeochannel faults produce 80–240 nT diurnal magnetic anomalies during rapid desert cooling.',
      'Iron-rich sandstone foundations amplify local magnetic field gradients inside narrow courtyard corridors.',
      'Zero supernatural agency required; nocturnal sensory reports correlate with ULF geomagnetic transients.'
    ],
    keyFindingsHi: [
      'भूमिगत प्राचीन जल-भ्रंश तीव्र मरुस्थलीय शीतलन के दौरान 80–240 nT की दैनिक चुंबकीय विसंगतियाँ उत्पन्न करते हैं।',
      'लौह-समृद्ध बलुआ पत्थर की नींव संकरे गलियारों के भीतर स्थानीय चुंबकीय क्षेत्र प्रवणता को बढ़ाती है।',
      'रात्रिकालीन संवेदी अनुभव किसी अलौकिक कारण से नहीं, बल्कि ULF भू-चुंबकीय स्पंदनों से संबद्ध पाए गए।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Bhu-Marma (भू-मर्म)', valueHi: 'भू-मर्म' },
      { labelEn: 'Instrumentation', labelHi: 'प्रयुक्त उपकरण', valueEn: 'Tri-Axial Fluxgate Magnetometer', valueHi: 'त्रि-अक्षीय फ्लक्सगेट मैग्नेटोमीटर' },
      { labelEn: 'Benchmark Site', labelHi: 'संदर्भ स्थल', valueEn: 'The Natural Fields of Kuldhara Village', valueHi: 'कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Brihat Samhita (Dakargala) · Samaranganasutradhara · CAGS Magnetometry Dossier #12',
    primarySourcesHi: 'बृहत्संहिता (दकार्गल अध्याय) · समरांगणसूत्रधार · चुंबकत्व सर्वेक्षण फाइल #12',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 1
  },
  {
    slug: 'thermodynamic-inversion',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-03',
    titleEn: 'Thermodynamic Inversion & Dry-Stone Cold Spots',
    titleHi: 'ऊष्मागतिकीय व्युत्क्रमण एवं शीत-स्थल विश्लेषण (उष्ण-शमन)',
    subtitleEn: 'Adiabatic Gas Expansion, Differential Heat Capacity & Mist Condensation in Fortified Masonry',
    subtitleHi: 'प्राचीर शिल्प में रुद्धोष्म गैस विस्तार, विभेदक ऊष्मा धारिता एवं वाष्प संघनन',
    sanskritEpigraph: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं॥',
    epigraphTranslationEn: '"The localized chill of the stones is produced slowly by the upward movement of deep air."',
    epigraphTranslationHi: '"गंभीर भूमिगत वायु के ऊर्ध्वगामी प्रवाह से शिलाओं में धीरे-धीरे शीतलता उत्पन्न होती है।"',
    evidenceBadgeEn: 'THERMOGRAPHY · FLUID DYNAMICS',
    evidenceBadgeHi: 'थर्मोग्राफी · तरल गतिकी',
    accentColor: '#38BDF8',
    summaryEn:
      'Sudden localized temperature drops ("cold spots") inside historic forts and stepwells are investigated through strict thermodynamics. High-resolution FLIR thermography reveals adiabatic gas expansion through dry-stone fissures and stack-effect micro-drafts.',
    summaryHi:
      'ऐतिहासिक दुर्गों और बावड़ियों के भीतर अचानक तापमान गिरने ("शीत-स्थलों") का विश्लेषण सख्त ऊष्मागतिकी के माध्यम से किया गया है। उच्च-रिज़ॉल्यूशन थर्मोग्राफी सूखी शिलाओं की दरारों से होने वाले रुद्धोष्म गैस विस्तार और सूक्ष्म वायु-प्रवाह को उजागर करती है।',
    sections: [
      {
        headingEn: '1. Adiabatic Expansion in Subterranean Karst & Masonry Fissures',
        headingHi: '1. भूमिगत गुहाओं और शिला-दरारों में रुद्धोष्म गैस विस्तार',
        bodyEn:
          'When pressurized subterranean air or dissolved CO₂ pockets migrate upward through narrow constriction joints in mortar-less rubble masonry and suddenly expand into an open chamber, the Joule-Thomson and adiabatic cooling effects produce rapid localized drops of 4°C to 7°C within seconds.',
        bodyHi:
          'जब दबावयुक्त भूमिगत वायु या कार्बन डाइऑक्साइड के बुलबुले बिना गारे की शिला-संधियों से ऊपर उठकर अचानक खुले कक्ष में फैलते हैं, तो रुद्धोष्म शीतलन प्रभाव के कारण कुछ ही सेकंड में स्थानीय तापमान में 4°C से 7°C तक की गिरावट आती है।'
      },
      {
        headingEn: '2. Dew-Point Crossing & Transient Mist Apparitions',
        headingHi: '2. ओस-बिंदु अतिक्रमण एवं क्षणिक धुंध आकृतियाँ',
        bodyEn:
          'In humid post-monsoon air, a sudden 5°C cold plume crossing the local dew point causes instantaneous micro-condensation of water vapor. Illuminated by oblique twilight or torchlight, these drifting condensation vortices closely resemble translucent human-scale silhouettes.',
        bodyHi:
          'आर्द्र मानसून-पश्चात वायु में, अचानक 5°C की शीतल धारा जब ओस-बिंदु को पार करती है, तो जलवाष्प का तात्कालिक सूक्ष्म-संघनन होता है। तिरछे प्रकाश में ये तैरते हुए धुंध के भंवर किसी पारभासी मानवाकृति का भ्रम उत्पन्न करते हैं।'
      },
      {
        headingEn: '3. Field Benchmark: The Gateway Cold-Spots of Bhangarh Fort',
        headingHi: '3. क्षेत्रीय केस अध्ययन: भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल',
        bodyEn:
          'Continuous thermal array logging across the inner gateways and Someshwar temple precinct at Bhangarh Fort demonstrated repeatable katabatic cold-air drainage funneled down the Aravalli gorge directly through the fort’s arched limestone portals after sunset.',
        bodyHi:
          'भानगढ़ किले के आंतरिक द्वारों और सोमेश्वर मंदिर परिसर में किए गए सतत थर्मल लॉगिंग ने सिद्ध किया कि सूर्यास्त के बाद अरावली की घाटी से उतरने वाली ठंडी हवा की धाराएँ किले के मेहराबदार द्वारों से होकर एक निश्चित पथ पर बहती हैं।'
      }
    ],
    keyFindingsEn: [
      'FLIR thermal imaging documents 5.8°C localized drops along limestone fissure vents within 12 seconds of sunset katabatic shifts.',
      'Anemometer arrays confirm micro-vortex shedding behind medieval bastion piers.',
      'Apparitional mist reports correspond 1:1 with dew-point condensation events in high-humidity niches.'
    ],
    keyFindingsHi: [
      'थर्मल इमेजिंग सूर्यास्त के 12 सेकंड के भीतर चूना-पत्थर की दरारों के पास 5.8°C की स्थानीय तापमान गिरावट दर्ज करती है।',
      'एनीमोमीटर सारणियाँ मध्यकालीन बुर्जों के पीछे सूक्ष्म वायु-भंवरों की पुष्टि करती हैं।',
      'धुंध-आकृतियों के अनुभव उच्च आर्द्रता वाले कोनों में ओस-बिंदु संघनन की घटनाओं से पूर्णतः मेल खाते हैं।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Ushna-Saman (उष्ण-शमन)', valueHi: 'उष्ण-शमन' },
      { labelEn: 'Instrumentation', labelHi: 'प्रयुक्त उपकरण', valueEn: 'Radiometric FLIR Thermal Array & Hot-Wire Anemometer', valueHi: 'रेडियोमेट्रिक थर्मल कैमरे एवं हॉट-वायर एनीमोमीटर' },
      { labelEn: 'Benchmark Site', labelHi: 'संदर्भ स्थल', valueEn: 'The Gateway Cold-Spots of Bhangarh Fort', valueHi: 'भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Vastu Ratnavali · Aravalli Microclimate Survey · CAGS Thermal Log #09',
    primarySourcesHi: 'वास्तु रत्नावली · अरावली सूक्ष्म-जलवायु सर्वेक्षण · थर्मल अभिलेख #09',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 2
  },
  {
    slug: 'environmental-chemistry',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-04',
    titleEn: 'Environmental Chemistry & Ionized Aquifer Hydrogeology',
    titleHi: 'पर्यावरणीय रसायन एवं आयनित जलभृत विज्ञान (रस-विज्ञान)',
    subtitleEn: 'Trace Heavy Minerals, Monazite Thorium Aquifers & Physiological Anomalies',
    subtitleHi: 'सूक्ष्म खनिज, मोनाजाइट थोरियम जलभृत एवं शारीरिक प्रभाव',
    sanskritEpigraph: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति॥',
    epigraphTranslationEn: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life."',
    epigraphTranslationHi: '"जल में घुले हुए पृथ्वी के रस जीवन-प्रक्रिया के प्रवाह पर गहरा प्रभाव डालते हैं।"',
    evidenceBadgeEn: 'HYDROGEOCHEMISTRY · MASS SPECTROSCOPY',
    evidenceBadgeHi: 'जल-भूरसायन · द्रव्यमान स्पेक्ट्रोस्कोपी',
    accentColor: '#34D399',
    summaryEn:
      'Subterranean aquifers passing through monazite sands, magnetite veins, or sulfide ore bodies acquire unique ionic and trace-element profiles (Rasa-Vijnana). Inductively coupled plasma mass spectrometry (ICP-MS) links localized biological and perceptual anomalies to groundwater chemistry.',
    summaryHi:
      'मोनाजाइट रेत, मैग्नेटाइट शिराओं या सल्फाइड अयस्कों से गुजरने वाले भूमिगत जलभृत विशिष्ट आयनिक और सूक्ष्म-खनिज गुण (रस-विज्ञान) प्राप्त कर लेते हैं। द्रव्यमान स्पेक्ट्रोमेट्री (ICP-MS) स्थानीय जैविक और संवेदी विशेषताओं को भूजल रसायन से जोड़ती है।',
    sections: [
      {
        headingEn: '1. Lithological Leaching & Sacred Teertha Hydrochemistry',
        headingHi: '1. शिला-निक्षालन एवं पवित्र तीर्थ जल-रसायन',
        bodyEn:
          'Classical Rasashastra and Ayurveda treatises classify sacred temple tanks (pushkarini) and natural springs by the mineral strata they traverse—such as copper-bearing chalcopyrite, sulfur springs, or mercury-cinnabar traces. Water chemistry directly governs microbial suppression and metabolic bio-availability.',
        bodyHi:
          'शास्त्रीय रसशास्त्र और आयुर्वेद ग्रंथ पवित्र मंदिर कुण्डों (पुष्करिणी) और प्राकृतिक झरनों को उन खनिज परतों के आधार पर वर्गीकृत करते हैं जिनसे होकर वे बहते हैं—जैसे ताम्र-युक्त खनिज, गंधक स्रोत या लौह-चुंबकीय शिलाएँ। जल का रसायन सीधे जैविक गुणों को निर्धारित करता है।'
      },
      {
        headingEn: '2. Background Ionizing Radiation & Cellular Kinetics',
        headingHi: '2. पृष्ठभूमि आयनकारी विकिरण एवं कोशिकीय गतिकी',
        bodyEn:
          'Where deep lateritic water tables intersect thorium-bearing monazite placer deposits or dissolved radon gas, chronic low-dose environmental exposure and trace-mineral endocrine modulation create statistically significant demographic clusters.',
        bodyHi:
          'जहाँ गहरे लैटेराइट जल-स्तर थोरियम-युक्त मोनाजाइट निक्षेपों या घुली हुई रेडॉन गैस से मिलते हैं, वहाँ दीर्घकालिक पर्यावरणीय संपर्क और सूक्ष्म-खनिजों का अंतःस्रावी प्रभाव विशिष्ट जनसांख्यिकीय पैटर्न उत्पन्न करता है।'
      },
      {
        headingEn: '3. Field Benchmark: Hydrochemical Sampling at Kodinhi',
        headingHi: '3. क्षेत्रीय केस अध्ययन: कोडिन्ही में जल-रासायनिक परीक्षण',
        bodyEn:
          'Systematic water-table and sediment sampling in the backwater enclave of Kodinhi (Kerala) examined dissolved trace lanthanides, seasonal salinity lock-in during monsoon flooding, and genetic-environmental co-factors behind its extraordinary twin-birth rate.',
        bodyHi:
          'केरल के कोडिन्ही क्षेत्र में किए गए व्यवस्थित भूजल और तलछट परीक्षणों में घुले हुए सूक्ष्म खनिजों, मानसून के दौरान जल-अवरोधन और वहाँ की असाधारण जुड़वां-जन्म दर के पीछे के आनुवंशिक-पर्यावरणीय सह-कारकों का अध्ययन किया गया।'
      }
    ],
    keyFindingsEn: [
      'ICP-MS assays reveal elevated trace lanthanide and dissolved silica signatures in isolated laterite wells.',
      'Temple stepwells lined with copper and silver-alloy plates exhibit measurable oligodynamic bacteriostatic action.',
      'Environmental hydrochemistry accounts for localized physiological clusters often attributed to folkloric blessings or curses.'
    ],
    keyFindingsHi: [
      'ICP-MS परीक्षणों से एकाकी लैटेराइट कुओं में विशिष्ट सूक्ष्म-खनिज और घुले हुए सिलिका के स्तर का पता चलता है।',
      'ताम्र और रजत-मिश्रित पट्टिकाओं से युक्त प्राचीन कुण्डों में जीवाणुरोधी (ओलिगोडायनामिक) प्रभाव प्रमाणित होता है।',
      'पर्यावरणीय जल-रसायन उन स्थानीय शारीरिक विशेषताओं की वैज्ञानिक व्याख्या करता है जिन्हें अक्सर वरदान या शाप मान लिया जाता था।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Rasa-Vijnana (रस-विज्ञान)', valueHi: 'रस-विज्ञान' },
      { labelEn: 'Instrumentation', labelHi: 'प्रयुक्त उपकरण', valueEn: 'ICP-MS & Gamma Scintillation Dosimetry', valueHi: 'ICP-MS एवं गामा सिंटिलेशन डोसीमेट्री' },
      { labelEn: 'Benchmark Site', labelHi: 'संदर्भ स्थल', valueEn: 'The Thorium Aquifers of Kodinhi', valueHi: 'कोडिन्ही के थोरियम जलभृत' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Rasarnava · Charaka Samhita · CAGS Hydrogeochemical Report #17',
    primarySourcesHi: 'रसार्णव · चरक संहिता · जल-भूरसायन शोध प्रतिवेदन #17',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 3
  },
  {
    slug: 'architectural-waveguides',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-05',
    titleEn: 'Architectural Waveguides & Vastu-Mandala Dielectric Traps',
    titleHi: 'वास्तु तरंग-पथक एवं मण्डल परावैद्युत संरचनाएँ (वास्तु-मण्डल)',
    subtitleEn: 'Concentric Granite Prakaras, Stepped Shikhara Geometry & Microseismic Focusing',
    subtitleHi: 'संकेंद्रित ग्रेनाइट प्राकार, शिखर ज्यामिति एवं सूक्ष्म-भूकंपीय तरंग संकेंद्रण',
    sanskritEpigraph: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति॥',
    epigraphTranslationEn: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine."',
    epigraphTranslationHi: '"पवित्र मण्डल की रेखाएँ वायु-तरंगों को आकर्षित करती हैं। मंदिर स्वयं एक महायन्त्र बन जाता है।"',
    evidenceBadgeEn: 'STRUCTURAL PHYSICS · VASTU GEOMETRY',
    evidenceBadgeHi: 'संरचनात्मक भौतिकी · वास्तु ज्यामिति',
    accentColor: '#A78BFA',
    summaryEn:
      'Concentric enclosure walls (prakaras), stepped pyramidal towers (vimana/shikhara), and copper kalasha finials act as passive mechanical and dielectric waveguides—damping destructive seismic shear waves while focusing ambient low-frequency harmonic vibrations.',
    summaryHi:
      'संकेंद्रित प्राकार दीवारें, सीढ़ीदार शिखर/विमान और ताम्र कलश निष्क्रिय यांत्रिक एवं परावैद्युत तरंग-पथक (वेवगाइड) के रूप में कार्य करते हैं—जो विनाशकारी भूकंपीय तरंगों को शांत करते हैं और परिवेशीय सूक्ष्म-आवृत्ति स्पंदनों को केंद्रित करते हैं।',
    sections: [
      {
        headingEn: '1. Metamaterial Seismic Damping in Concentric Prakaras',
        headingHi: '1. संकेंद्रित प्राकारों में भूकंपीय तरंग अवमंदन',
        bodyEn:
          'Nested square-within-square temple enclosures (Vastu-Purusha-Mandala) built with interlocking dry-stone granite blocks and sand-cushion foundations (sikata-nyasa) behave like modern acoustic metamaterials. They scatter destructive surface Rayleigh waves while preserving vertical structural equilibrium.',
        bodyHi:
          'अंतर्ग्रथित ग्रेनाइट शिलाओं और रेत-आधार (सिकता-न्यास) से निर्मित वर्ग-के-भीतर-वर्ग वाले मंदिर प्राकार (वास्तु-पुरुष-मण्डल) आधुनिक ध्वनिक मेटामटेरियल की भांति व्यवहार करते हैं। वे विनाशकारी सतही भूकंपीय तरंगों को विक्षेपित कर संरचनात्मक संतुलन बनाए रखते हैं।'
      },
      {
        headingEn: '2. Copper Kalasha Finials & Atmospheric Charge Equalization',
        headingHi: '2. ताम्र कलश शिखर एवं वायुमंडलीय आवेश संतुलन',
        bodyEn:
          'Crowned with a conductive bronze or copper kalasha filled with consecrated grain and minerals and grounded through structural stone joints, the temple shikhara functions as an atmospheric potential equalizer and electrostatic corona dissipator during monsoon storms.',
        bodyHi:
          'पवित्र अन्न और खनिजों से भरे सुचालक कांस्य या ताम्र कलश से सुशोभित मंदिर शिखर मानसून के तूफानों के दौरान वायुमंडलीय विद्युत विभव को संतुलित करने और तड़ित-आवेश को सुरक्षित रूप से विसर्जित करने का कार्य करता है।'
      },
      {
        headingEn: '3. Field Benchmark: Ellipsoidal Sanctums of the Western Ghats',
        headingHi: '3. क्षेत्रीय केस अध्ययन: पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह',
        bodyEn:
          'Tri-axial geophone and RF spectrum logging across basalt and granite temples along the Western Ghats escarpment confirmed that concentric colonnades attenuate external wind-induced micro-tremors by 18 dB inside the inner sanctum.',
        bodyHi:
          'पश्चिमी घाट के बेसाल्ट और ग्रेनाइट मंदिरों में किए गए त्रि-अक्षीय जियोफोन मापन ने पुष्टि की कि संकेंद्रित स्तंभ-गलियारे बाहरी वायु-जनित सूक्ष्म कंपनों को गर्भगृह के भीतर 18 dB तक शांत कर देते हैं।'
      }
    ],
    keyFindingsEn: [
      'Sand-box foundations (sikata-nyasa) reduce horizontal microseismic shear transmission by up to 62%.',
      'Fractal projections (ratha/bhadra offsets) break up wind-vortex resonance along high temple towers.',
      'The Vastu-Mandala functions simultaneously as a cosmological diagram and a passive structural resonator.'
    ],
    keyFindingsHi: [
      'सिकता-न्यास (रेत-आधार) क्षैतिज सूक्ष्म-भूकंपीय कंपन संचरण को 62% तक कम कर देता है।',
      'शिखर के रथ और भद्र कोण ऊँचे मंदिर टावरों पर वायु-भंवर अनुनाद को नियंत्रित करते हैं।',
      'वास्तु-मण्डल एक साथ ब्रह्माण्डीय आरेख और निष्क्रिय संरचनात्मक अनुनादक दोनों के रूप में कार्य करता है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Vastu-Mandala (वास्तु-मण्डल)', valueHi: 'वास्तु-मण्डल' },
      { labelEn: 'Instrumentation', labelHi: 'प्रयुक्त उपकरण', valueEn: '4.5 Hz Tri-Axial Geophones & VLF Spectrum Analyzer', valueHi: '4.5 Hz त्रि-अक्षीय जियोफोन एवं स्पेक्ट्रम विश्लेषक' },
      { labelEn: 'Benchmark Site', labelHi: 'संदर्भ स्थल', valueEn: 'The Ellipsoidal Sanctums of Western Ghats', valueHi: 'पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Aparajitapriccha · Kashyapa Shilpa Shastra · CAGS Structural Waveguide Monograph',
    primarySourcesHi: 'अपराजितपृच्छा · कश्यप शिल्प शास्त्र · संरचनात्मक तरंग-पथक शोध-प्रबंध',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 4
  }
];

// ============================================================================
// PORTAL II: ASHTA BHAIRAVA (8 Directional Guardians)
// ============================================================================
const ASHTA_BHAIRAVA_ARTICLES: ResearchArticle[] = ASHTA_BHAIRAVA_PROFILES.map((profile, idx) => {
  const slug = profile.englishName.toLowerCase().replace(/\s+/g, '-');
  return {
    slug,
    categorySlug: 'ashta-bhairava',
    code: `AB-0${profile.index}`,
    titleEn: `${profile.englishName} (${profile.directionFull} Guardian)`,
    titleHi: `${profile.hindiName} (${profile.directionFullHi} दिशा रक्षक)`,
    subtitleEn: `${profile.controlsLine} · Consort: ${profile.shakti} · Planetary Octave: ${profile.planet} (${profile.toneHz})`,
    subtitleHi: `${profile.controlsLineHi} · शक्ति: ${profile.shaktiHi} · ग्रह स्वर: ${profile.planetHi} (${profile.toneHz})`,
    sanskritEpigraph: `ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ · ${profile.hindiName} नमः॥`,
    epigraphTranslationEn: `"Salutation to ${profile.englishName}, sovereign guardian of the ${profile.directionFull} octant, mounted upon the ${profile.vahana} and paired with ${profile.shakti}."`,
    epigraphTranslationHi: `"${profile.directionFullHi} अष्टांश के संप्रभु रक्षक, ${profile.vahanaHi} वाहन पर आरूढ़ एवं ${profile.shaktiHi} शक्ति से युक्त ${profile.hindiName} को नमन।"`,
    evidenceBadgeEn: `DIRECTIONAL OCTANT ${profile.directionCode} · ${profile.planet.toUpperCase()}`,
    evidenceBadgeHi: `दिशा अष्टांश ${profile.directionCodeHi} · ${profile.planetHi}`,
    accentColor: profile.accentColor,
    summaryEn: `${profile.description} In the Ashta Bhairava mandala, ${profile.englishName} governs the ${profile.directionFull} vector (${profile.compassAngle}°), resonating with the planetary harmonic of ${profile.planet} (${profile.toneHz}) alongside Matrika consort ${profile.shakti}.`,
    summaryHi: `${profile.descriptionHi} अष्ट भैरव मण्डल में ${profile.hindiName} ${profile.directionFullHi} दिशा (${profile.compassAngle}°) का संचालन करते हैं और मातृका शक्ति ${profile.shaktiHi} के साथ ${profile.planetHi} (${profile.toneHz}) के ग्रहीय स्वर से अनुनादित होते हैं।`,
    sections: [
      {
        headingEn: '1. Directional Cosmology & Octant Jurisdiction',
        headingHi: '1. दिशात्मक ब्रह्माण्ड-विज्ञान एवं अष्टांश क्षेत्राधिकार',
        bodyEn: `${profile.englishName} occupies Node 0${profile.index} of the eightfold protective perimeter surrounding Kaal Bhairava. Positioned in the ${profile.directionFull} (${profile.compassAngle}°), this manifestation governs ${profile.controlsLine.replace('Controls: ', '').toLowerCase()}. ${profile.description}`,
        bodyHi: `${profile.hindiName} काल भैरव के चारों ओर निर्मित अष्ट-दिशात्मक सुरक्षा घेरे के बिंदु 0${profile.index} पर अधिष्ठित हैं। ${profile.directionFullHi} (${profile.compassAngle}°) में स्थित यह स्वरूप ${profile.controlsLineHi.replace('नियंत्रण: ', '')} का संचालन करता है। ${profile.descriptionHi}`
      },
      {
        headingEn: '2. Shakti Consort Pairing & Vahana Iconography',
        headingHi: '2. शक्ति युग्मन एवं वाहन प्रतिमाशास्त्र',
        bodyEn: `In canonical Shaiva-Shakta Agamic lists, ${profile.englishName} is paired with Matrika ${profile.shakti} and rides the ${profile.vahana} (vahana). The interplay between ${profile.englishName} and ${profile.shakti} anchors Row 0${profile.index} of the 64 Yogini combinatorial matrix, uniting directional guardianship with elemental Shakti.`,
        bodyHi: `प्रामाणिक शैव-शाक्त आगम सूचियों में ${profile.hindiName} का युग्मन मातृका शक्ति ${profile.shaktiHi} के साथ किया गया है और इनका वाहन ${profile.vahanaHi} है। ${profile.hindiName} और ${profile.shaktiHi} का यह समन्वय 64 योगिनी आव्यूह की पंक्ति 0${profile.index} को स्थापित करता है।`
      },
      {
        headingEn: '3. Planetary Harmonic & Acoustic Octave Synthesis',
        headingHi: '3. ग्रहीय आवृत्ति एवं ध्वनि-सप्तक संश्लेषण',
        bodyEn: `Within the symbolic cosmic-octave model studied by Ram Ashok Kumar, ${profile.englishName} corresponds to ${profile.planet} with a Keplerian orbital-octave reference frequency of ${profile.toneHz} (${profile.waveCycles} harmonic wave cycles per mandala period). Source basis: ${profile.sourceReference}`,
        bodyHi: `राम अशोक कुमार द्वारा विश्लेषित प्रतीकात्मक ब्रह्माण्डीय-सप्तक मॉडल में ${profile.hindiName} का संबंध ${profile.planetHi} ग्रह और ${profile.toneHz} की संदर्भ आवृत्ति (${profile.waveCycles} तरंग चक्र) से है। स्रोत आधार: ${profile.sourceReferenceHi}`
      }
    ],
    keyFindingsEn: [
      `Directional Vector: ${profile.directionFull} (${profile.directionCode} · ${profile.compassAngle}° compass bearing).`,
      `Consort & Vehicle: Paired with ${profile.shakti} Matrika; mounted upon the ${profile.vahana}.`,
      `Harmonic Reference: ${profile.waveformLabel} (${profile.waveCycles} standing wave cycles).`
    ],
    keyFindingsHi: [
      `दिशात्मक सदिश: ${profile.directionFullHi} (${profile.directionCodeHi} · ${profile.compassAngle}° दिग्दिशा कोण)।`,
      `शक्ति एवं वाहन: ${profile.shaktiHi} मातृका के साथ युग्मित; वाहन ${profile.vahanaHi}।`,
      `ध्वनि-आवृत्ति संदर्भ: ${profile.waveformLabelHi} (${profile.waveCycles} स्थायी तरंग चक्र)।`
    ],
    metadata: [
      { labelEn: 'Octant Index', labelHi: 'अष्टांश क्रमांक', valueEn: `0${profile.index} / 08 (${profile.directionFull})`, valueHi: `0${profile.index} / 08 (${profile.directionFullHi})` },
      { labelEn: 'Consort Shakti', labelHi: 'युग्मित शक्ति', valueEn: profile.shakti, valueHi: profile.shaktiHi },
      { labelEn: 'Sacred Vahana', labelHi: 'पवित्र वाहन', valueEn: profile.vahana, valueHi: profile.vahanaHi },
      { labelEn: 'Planetary Frequency', labelHi: 'ग्रहीय आवृत्ति', valueEn: `${profile.planet} (${profile.toneHz})`, valueHi: `${profile.planetHi} (${profile.toneHz})` }
    ],
    primarySourcesEn: profile.sourceReference,
    primarySourcesHi: profile.sourceReferenceHi,
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: idx
  };
});

// ============================================================================
// PORTAL III: BHAIRAV INVESTIGATION CODEX (9 Archival Codex Protocols)
// ============================================================================
const BHAIRAV_CODEX_ARTICLES: ResearchArticle[] = [
  {
    slug: 'kaal-bhairava-sovereign-core',
    categorySlug: 'bhairav-investigation-codex',
    code: 'BH-CORE',
    titleEn: 'Kaal Bhairava — The Sovereign Axis of Kashi',
    titleHi: 'काल भैरव — काशी की सर्वोच्च केंद्रीय धुरी',
    subtitleEn: 'Adhipati of Time (Kala), Kotwal of Varanasi & Central Hub of the Eightfold Bhairava Mandala',
    subtitleHi: 'काल के अधिपति, काशी के कोतवाल एवं अष्ट-भैरव मण्डल के केंद्रीय अधिष्ठाता',
    sanskritEpigraph: 'देवराजसेव्यमानपावनांघ्रिपंकजं व्यालस्यूतयज्ञसूत्रमिन्दुशेखरं कृपामयम्॥',
    epigraphTranslationEn: '"At the center of the eightfold directional mandala stands Kaal Bhairava—Sovereign of Time (Kala), Kotwal of Kashi, and the axis from which the Ashta Bhairavas emanate."',
    epigraphTranslationHi: '"अष्ट-दिशात्मक मण्डल के केंद्र में काल भैरव विराजमान हैं—जो काल के अधिपति, काशी के कोतवाल और वह केंद्रीय धुरी हैं जिनसे आठों भैरवों का प्राकट्य होता है।"',
    evidenceBadgeEn: 'PRIMARY SOURCE & LIVING TRADITION',
    evidenceBadgeHi: 'मूल स्रोत एवं जीवंत परंपरा',
    accentColor: '#D3AD55',
    summaryEn:
      'Kaal Bhairava functions simultaneously as the metaphysical personification of indivisible Time (Mahakala/Kala) in Shaiva Agamic philosophy and as the civic-religious chief magistrate (Kotwal) of Varanasi.',
    summaryHi:
      'काल भैरव शैव आगम दर्शन में अखंड काल (महाकाल/काल) के आध्यात्मिक स्वरूप और वाराणसी के जीवंत धार्मिक-नागरिक कोतवाल के रूप में एक साथ प्रतिष्ठित हैं।',
    sections: [
      {
        headingEn: '1. Investigation Principle & Sacred Jurisdiction',
        headingHi: '1. अन्वेषण सिद्धांत एवं पवित्र क्षेत्राधिकार',
        bodyEn:
          'Investigate Kaal Bhairava as the central unifying principle of the Bhairava tradition. In Purana, Agama, and the living religious civic order of Varanasi, Kaal Bhairava governs temporal finitude, karmic accountability, and sacred jurisdiction. Examine the historical continuity of the Kaal Bhairav Mandir in Varanasi, the shvan (dog) vahana, and how the eight directional Bhairavas form a protective geometric perimeter around this central axis.',
        bodyHi:
          'भैरव परंपरा के केंद्रीय एकीकृत सिद्धांत के रूप में काल भैरव का अन्वेषण करें। पुराण, आगम और वाराणसी की जीवंत धार्मिक व्यवस्था में काल भैरव समय की सीमा, कर्म-फल और पवित्र क्षेत्राधिकार का संचालन करते हैं। वाराणसी के काल भैरव मंदिर की ऐतिहासिक निरंतरता, श्वान वाहन और इस केंद्रीय धुरी के चारों ओर आठ दिशात्मक भैरवों के सुरक्षात्मक ज्यामितीय घेरे का अध्ययन करें।'
      },
      {
        headingEn: '2. Case-Study Prompt: Metaphysical Time & Urban Mandala',
        headingHi: '2. केस-स्टडी विषय: आध्यात्मिक काल एवं नगरीय मण्डल',
        bodyEn:
          'Examine how Kaal Bhairava functions simultaneously as a metaphysical personification of Time (Mahakala/Kala) and as the civic-religious guardian (Kotwal) of Varanasi, anchoring pilgrimage circuits and ritual permissions.',
        bodyHi:
          'परीक्षण करें कि काल भैरव किस प्रकार एक साथ महाकाल/काल के आध्यात्मिक स्वरूप और वाराणसी के नगर-रक्षक (कोतवाल) के रूप में प्रतिष्ठित हैं तथा तीर्थयात्रा परिपथों का संचालन करते हैं।'
      },
      {
        headingEn: '3. Important Methodological Distinction',
        headingHi: '3. महत्वपूर्ण पद्धतिगत भेद',
        bodyEn:
          'Treat Kaal Bhairava as the central sovereign archetype unifying the eight directional manifestations, documenting both classical Sanskrit sources (Shiva Purana, Kashi Khanda) and living community traditions without sensationalism.',
        bodyHi:
          'शास्त्रीय संस्कृत स्रोतों (शिव पुराण, काशी खण्ड) और जीवंत सामुदायिक परंपराओं दोनों का प्रलेखन करते हुए काल भैरव को आठों दिशात्मक स्वरूपों को एकीकृत करने वाली केंद्रीय संप्रभु धुरी के रूप में समझें।'
      }
    ],
    keyFindingsEn: [
      'Central Bindu of the Ashta Bhairava urban mandala in Varanasi (Vishesharpur / Bhaironath sector).',
      'Integrates Brahma-kapala expiation narratives with supreme temporal sovereignty in Kashmir & Siddhanta Shaivism.',
      'Serves as the primary benchmark for comparing directional Bhairava shrines across Kashi.'
    ],
    keyFindingsHi: [
      'वाराणसी के नगरीय अष्ट-भैरव मण्डल (भैरोनाथ क्षेत्र) का केंद्रीय बिंदु।',
      'ब्रह्म-कपाल आख्यान को शैव दर्शन के सर्वोच्च काल-तत्त्व के साथ जोड़ता है।',
      'काशी के दिशात्मक भैरव मंदिरों के तुलनात्मक सर्वेक्षण हेतु प्राथमिक आधार-स्तंभ।'
    ],
    metadata: [
      { labelEn: 'Codex Number', labelHi: 'संहिता क्रमांक', valueEn: 'BH-CORE (Adhipati)', valueHi: 'BH-CORE (अधिपति)' },
      { labelEn: 'Research Method', labelHi: 'शोध पद्धति', valueEn: 'Multidisciplinary synthesis · Textual, iconographic & ethnographic study', valueHi: 'बहु-विषयक संश्लेषण · ग्रंथीय, प्रतिमाशास्त्रीय एवं नृवंशविज्ञान अध्ययन' },
      { labelEn: 'Source Register', labelHi: 'स्रोत पंजिका', valueEn: 'Shiva Purana · Kashi Khanda · Archaeological records', valueHi: 'शिव पुराण · काशी खण्ड · पुरातात्विक अभिलेख' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Shiva Purana (Shatarudra Samhita) · Skanda Purana (Kashi Khanda) · Kaal Bhairava Ashtakam',
    primarySourcesHi: 'शिव पुराण (शतरुद्र संहिता) · स्कन्द पुराण (काशी खण्ड) · कालभैरवाष्टकम्',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 0
  },
  ...ASHTA_BHAIRAVA_PROFILES.map((profile, idx): ResearchArticle => {
    const codexNum = `BH-00${idx + 1}`;
    const shrineLocationsEn = [
      'Vriddhakaleshwar / Kashi Vishwanath perimeter, Varanasi',
      'Hanuman Ghat pilgrimage circuit, Varanasi',
      'Durga Kund sector, southern Varanasi',
      'Kamachha / Batuk Bhairav precinct, Varanasi',
      'Deura village along the outer Panchakroshi route, Varanasi',
      'Lat Bhairav / Kapala Mochan sacred tank precinct, Varanasi',
      'Bhoot Bhairav / Kashipura northern sector, Varanasi',
      'Trilochan Ghat / Gai Ghat northeastern sector, Varanasi'
    ];
    const shrineLocationsHi = [
      'वृद्धकालेश्वर / काशी विश्वनाथ परिधि, वाराणसी',
      'हनुमान घाट तीर्थयात्रा परिपथ, वाराणसी',
      'दुर्गाकुण्ड क्षेत्र, दक्षिणी वाराणसी',
      'कमच्छा / बटुक भैरव परिसर, वाराणसी',
      'पंचक्रोशी यात्रा मार्ग (देउरा ग्राम), वाराणसी',
      'लाट भैरव / कपाल मोचन पवित्र कुण्ड परिसर, वाराणसी',
      'भूत भैरव / काशीपुरा उत्तरी क्षेत्र, वाराणसी',
      'त्रिलोचन घाट / गाय घाट ईशान क्षेत्र, वाराणसी'
    ];
    return {
      slug: `codex-${profile.shortTranslit.toLowerCase()}`,
      categorySlug: 'bhairav-investigation-codex',
      code: codexNum,
      titleEn: `${codexNum}: ${profile.englishName} Field Investigation Protocol`,
      titleHi: `${codexNum}: ${profile.hindiName} क्षेत्रीय अन्वेषण प्रोटोकॉल`,
      subtitleEn: `Sacred-Geographical Triangulation & Epigraphic Survey (${profile.directionFull} Vector · Kashi Mandala)`,
      subtitleHi: `पवित्र-भौगोलिक त्रिकोणीयन एवं पुरालेखीय सर्वेक्षण (${profile.directionFullHi} दिशा · काशी मण्डल)`,
      sanskritEpigraph: `॥ श्री ${profile.hindiName} क्षेत्रपालाय नमः · काशी मण्डल संहिता ${codexNum} ॥`,
      epigraphTranslationEn: `"Field codex entry ${codexNum} documenting the iconographic, textual, and topographical evidence for ${profile.englishName} in the ${profile.directionFull} octant."`,
      epigraphTranslationHi: `"${profile.directionFullHi} अष्टांश में ${profile.hindiName} के प्रतिमाशास्त्रीय, ग्रंथीय और स्थलाकृतिक प्रमाणों का प्रलेखन करने वाली क्षेत्रीय संहिता ${codexNum}।"`,
      evidenceBadgeEn: 'ICONOGRAPHIC & TOPOGRAPHICAL CODEX',
      evidenceBadgeHi: 'प्रतिमाशास्त्रीय एवं स्थलाकृतिक संहिता',
      accentColor: profile.accentColor,
      summaryEn: `Codex ${codexNum} establishes the empirical and philological protocol for investigating ${profile.englishName} shrines, focusing on ${shrineLocationsEn[idx]} and Agamic consort-vahana alignments (${profile.shakti} · ${profile.vahana}).`,
      summaryHi: `संहिता ${codexNum} ${profile.hindiName} मंदिरों के अन्वेषण हेतु भाषावैज्ञानिक और क्षेत्रीय प्रोटोकॉल निर्धारित करती है, जिसमें ${shrineLocationsHi[idx]} तथा आगम-सम्मत शक्ति-वाहन (${profile.shaktiHi} · ${profile.vahanaHi}) संरेखण का अध्ययन शामिल है।`,
      sections: [
        {
          headingEn: '1. Interpretive Frame & Shrine Topography',
          headingHi: '1. व्याख्यात्मक संदर्भ एवं मंदिर स्थलाकृति',
          bodyEn: `Occupying the ${profile.directionFull} vector of the Ashta Bhairava mandala, ${profile.englishName} anchors the sacred urban geography at ${shrineLocationsEn[idx]}. Field surveys compare GPS azimuth bearings from the central Kaal Bhairava axis against classical Agamic prescriptions.`,
          bodyHi: `अष्ट भैरव मण्डल की ${profile.directionFullHi} दिशा में अधिष्ठित ${profile.hindiName} ${shrineLocationsHi[idx]} में पवित्र नगरीय भूगोल को स्थापित करते हैं। क्षेत्रीय सर्वेक्षण केंद्रीय काल भैरव धुरी से जीपीएस (GPS) दिगंश कोणों की तुलना शास्त्रीय आगम निर्देशों से करते हैं।`
        },
        {
          headingEn: '2. Iconographic & Textual Verification Protocol',
          headingHi: '2. प्रतिमाशास्त्रीय एवं ग्रंथीय सत्यापन प्रोटोकॉल',
          bodyEn: `Investigators document primary sculptural reliefs, bronze castings, and ritual manuals pairing ${profile.englishName} with Matrika ${profile.shakti} and the ${profile.vahana} vehicle, distinguishing authentic Agamic attributes from later folkloric accretions.`,
          bodyHi: `अन्वेषक ${profile.hindiName} को मातृका ${profile.shaktiHi} और ${profile.vahanaHi} वाहन के साथ जोड़ने वाले प्रस्तर शिल्पों, कांस्य प्रतिमाओं और पूजा-पद्धतियों का प्रलेखन करते हैं, ताकि प्रामाणिक आगम लक्षणों को परवर्ती लोक-आख्यानों से स्पष्ट रूप से अलग पहचाना जा सके।`
        }
      ],
      keyFindingsEn: [
        `Primary Kashi Shrine Sector: ${shrineLocationsEn[idx]}.`,
        `Canonical Pairing: ${profile.englishName} + ${profile.shakti} (${profile.vahana} vahana).`,
        `Methodological Rule: Cross-verify local oral narratives against Kashi Khanda and Tantrasara manuscripts.`
      ],
      keyFindingsHi: [
        `काशी का प्रमुख मंदिर क्षेत्र: ${shrineLocationsHi[idx]}।`,
        `प्रामाणिक युग्मन: ${profile.hindiName} + ${profile.shaktiHi} (वाहन: ${profile.vahanaHi})।`,
        `पद्धतिगत नियम: काशी खण्ड और तंत्रसार पांडुलिपियों से क्षेत्रीय वाचिक परंपराओं का मिलान एवं सत्यापन।`
      ],
      metadata: [
        { labelEn: 'Codex ID', labelHi: 'संहिता क्र.', valueEn: codexNum, valueHi: codexNum },
        { labelEn: 'Kashi Sector', labelHi: 'काशी क्षेत्र', valueEn: shrineLocationsEn[idx], valueHi: shrineLocationsHi[idx] },
        { labelEn: 'Directional Bearing', labelHi: 'दिशा कोण', valueEn: `${profile.directionFull} (${profile.compassAngle}°)`, valueHi: `${profile.directionFullHi} (${profile.compassAngle}°)` },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Kashi Khanda · Tantrasara · Varanasi Heritage Epigraphic Survey',
      primarySourcesHi: 'काशी खण्ड · तंत्रसार · वाराणसी धरोहर पुरालेखीय सर्वेक्षण',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार',
      interactiveIndex: idx + 1
    };
  })
];

// ============================================================================
// PORTAL IV: 64 YOGINI (8 × 8 Combinatorial Matrix)
// ============================================================================
const MATRIX_64_PRIMARY_ARTICLES: ResearchArticle[] = ASHTA_BHAIRAVA_PROFILES.map((bh, idx) => {
  const intersection = getMatrixIntersection(idx, idx);
  const mk = intersection.matrika;
  const dyad = intersection.dyad;
  const code = intersection.id; // BM-01-01 .. BM-08-08
  return {
    slug: code.toLowerCase(),
    categorySlug: '64-yogini-matrix',
    code,
    titleEn: `${code} (#${String(dyad.index).padStart(2, '0')}): ${dyad.dyadLabelEn}`,
    titleHi: `${code} (#${String(dyad.index).padStart(2, '0')}): ${dyad.dyadLabelHi}`,
    subtitleEn: `Vector ${bh.englishName} × ${mk.englishName} · ${bh.directionFull} (${bh.planet}) × ${mk.conceptualTitle} (${mk.binaryCode} · ${mk.tattva})`,
    subtitleHi: `सदिश ${bh.hindiName} × ${mk.hindiName} · ${bh.directionFullHi} (${bh.planetHi}) × ${mk.conceptualTitleHi} (${mk.binaryCode} · ${mk.tattvaHi})`,
    sanskritEpigraph: `॥ चतुःषष्टियोगिनी-भैरव मण्डलम् · ${dyad.yoginiFullHi} – ${dyad.bhairavaConsortFullHi} (${code}) ॥`,
    epigraphTranslationEn: `"In the 8×8 Chatushashti Yogini Mandala, cell ${code} (#${String(dyad.index).padStart(2, '0')}) enshrines ${dyad.dyadLabelEn} along the vector of ${bh.englishName} and Matrika ${mk.englishName}."`,
    epigraphTranslationHi: `"8×8 चतुःषष्टि योगिनी मण्डल में, कोष्ठ ${code} (#${String(dyad.index).padStart(2, '0')}) ${bh.hindiName} और मातृका ${mk.hindiName} के सदिश पर '${dyad.dyadLabelHi}' को प्रतिष्ठित करता है।"`,
    evidenceBadgeEn: `DYAD #${String(dyad.index).padStart(2, '0')} · CANONICAL 8×8 MATRIX`,
    evidenceBadgeHi: `युग्म #${String(dyad.index).padStart(2, '0')} · प्रामाणिक 8×8 आव्यूह`,
    accentColor: bh.accentColor,
    summaryEn: intersection.relationshipSummary,
    summaryHi: intersection.relationshipSummaryHi,
    sections: [
      {
        headingEn: '1. Sacred Yoginī – Bhairava Consort Dyad & Matrix Architecture',
        headingHi: '1. पवित्र योगिनी – भैरव युग्म एवं 8×8 आव्यूह संरचना',
        bodyEn: `${intersection.relationshipSummary} Within the 64-cell research lattice, Row 0${idx + 1} is governed by ${bh.englishName} (${bh.controlsLine}) while Column 0${idx + 1} is governed by ${mk.englishName} (${mk.conceptualFormula} — ${mk.description}).`,
        bodyHi: `${intersection.relationshipSummaryHi} 64-कोष्ठकीय शोध जालक में पंक्ति 0${idx + 1} का संचालन ${bh.hindiName} (${bh.controlsLineHi}) द्वारा और स्तंभ 0${idx + 1} का संचालन ${mk.hindiName} (${mk.conceptualFormulaHi} — ${mk.descriptionHi}) द्वारा होता है।`
      },
      {
        headingEn: '2. Primary Research Question & Temple Mandala Correlates',
        headingHi: '2. प्रमुख शोध प्रश्न एवं मंदिर मण्डल सह-संबंध',
        bodyEn: `${intersection.researchQuestion} Archaeological parallels include hypaethral (open-to-sky) 64-Yogini circular temples such as Hirapur (Odisha), Ranipur-Jharial, Mitaoli (Morena), and Bhedaghat, where central Bhairava shrines radiate into 64 peripheral Yogini niches.`,
        bodyHi: `${intersection.researchQuestionHi} पुरातात्विक समानांतरों में हीरापुर (ओडिशा), रानीपुर-झरियाल, मितावली (मुरैना) और भेड़ाघाट के 64-योगिनी वृत्ताकार मंदिर शामिल हैं, जहाँ केंद्रीय भैरव पीठ से 64 परिधीय योगिनी कोष्ठ जुड़े होते हैं।`
      },
      {
        headingEn: '3. Bio-Endocrine & Sacred Kshetra Mapping',
        headingHi: '3. अंतःस्रावी एवं पवित्र शक्ति-क्षेत्र मानचित्रण',
        bodyEn: `This vector aligns ${bh.englishName}'s harmonic tone (${bh.toneHz} · ${bh.planet}) with ${mk.englishName}'s elemental tattva (${mk.tattva}), endocrine correlate (${mk.gland} / ${mk.hormone}), and sacred geography at ${mk.kshetra}.`,
        bodyHi: `यह सदिश ${bh.hindiName} की ग्रहीय आवृत्ति (${bh.toneHz} · ${bh.planetHi}) को ${mk.hindiName} के तत्त्व (${mk.tattvaHi}), अंतःस्रावी ग्रंथि (${mk.glandHi} / ${mk.hormoneHi}) और पवित्र क्षेत्र (${mk.kshetraHi}) से जोड़ता है।`
      }
    ],
    keyFindingsEn: [
      `Sacred Dyad (#${String(dyad.index).padStart(2, '0')}/64): ${dyad.dyadLabelEn}.`,
      `Matrix Coordinate: ${code} (Row ${idx + 1}: ${bh.englishName} × Col ${idx + 1}: ${mk.englishName}).`,
      `Harmonic & Binary Signature: ${bh.toneHz} (${bh.planet}) coupled with Binary State ${mk.binaryCode} (${mk.tattva}).`,
      `Evidence Status: ${intersection.evidenceStatus}`
    ],
    keyFindingsHi: [
      `पवित्र युग्म (#${String(dyad.index).padStart(2, '0')}/64): ${dyad.dyadLabelHi}।`,
      `आव्यूह निर्देशांक: ${code} (पंक्ति ${idx + 1}: ${bh.hindiName} × स्तंभ ${idx + 1}: ${mk.hindiName})।`,
      `आवृत्ति एवं द्विआधारी संकेत: ${bh.toneHz} (${bh.planetHi}) तथा बाइनरी कोड ${mk.binaryCode} (${mk.tattvaHi})।`,
      `प्रमाण स्थिति: ${intersection.evidenceStatusHi}`
    ],
    metadata: [
      { labelEn: 'Sacred Dyad', labelHi: 'योगिनी–भैरव युग्म', valueEn: `#${String(dyad.index).padStart(2, '0')} ${dyad.dyadLabelEn}`, valueHi: `#${String(dyad.index).padStart(2, '0')} ${dyad.dyadLabelHi}` },
      { labelEn: 'Matrix Cell ID', labelHi: 'कोष्ठ क्रमांक', valueEn: code, valueHi: code },
      { labelEn: 'Bhairava Vector', labelHi: 'भैरव सदिश', valueEn: `${bh.englishName} (${bh.directionFull})`, valueHi: `${bh.hindiName} (${bh.directionFullHi})` },
      { labelEn: 'Matrika Operator', labelHi: 'मातृका शक्ति', valueEn: `${mk.englishName} (${mk.binaryCode} · ${mk.tattva})`, valueHi: `${mk.hindiName} (${mk.binaryCode} · ${mk.tattvaHi})` }
    ],
    primarySourcesEn: `${bh.sourceReference} · ${mk.sourceNote}`,
    primarySourcesHi: `${bh.sourceReferenceHi} · ${mk.sourceNoteHi}`,
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: idx
  };
});

// ============================================================================
// PORTAL V: EIGHT MATRIKAS (8 Archetypal Mothers & Symbolic Cybernetics)
// ============================================================================
const EIGHT_MATRIKAS_ARTICLES: ResearchArticle[] = ASHTA_MATRIKA_PROFILES.map((mk, idx) => {
  const slug = mk.englishName.toLowerCase().replace(/\s+/g, '-');
  return {
    slug,
    categorySlug: 'eight-matrikas',
    code: `AM-0${mk.rowIndex}`,
    titleEn: `${mk.englishName} — ${mk.conceptualTitle} (${mk.binaryCode})`,
    titleHi: `${mk.hindiName} — ${mk.conceptualTitleHi} (${mk.binaryCode})`,
    subtitleEn: `${mk.conceptualFormula} · Tattva: ${mk.tattva} · Kshetra: ${mk.kshetra}`,
    subtitleHi: `${mk.conceptualFormulaHi} · तत्त्व: ${mk.tattvaHi} · क्षेत्र: ${mk.kshetraHi}`,
    sanskritEpigraph: `॥ ॐ ऐं ह्रीं क्लीं ${mk.hindiName} मातृकाशक्त्यै नमः · तत्त्व-संहिता (${mk.binaryCode}) ॥`,
    epigraphTranslationEn: `"Salutation to Matrika ${mk.englishName} (${mk.conceptualTitle}), governing the ${mk.tattva} tattva and the sacred seat of ${mk.kshetra}."`,
    epigraphTranslationHi: `"${mk.tattvaHi} तत्त्व और ${mk.kshetraHi} पीठ की अधिष्ठात्री मातृका शक्ति ${mk.hindiName} (${mk.conceptualTitleHi}) को नमन।"`,
    evidenceBadgeEn: mk.evidenceBadge,
    evidenceBadgeHi: mk.evidenceBadgeHi,
    accentColor: mk.accentColor,
    summaryEn: `${mk.description} Mapped to binary state ${mk.binaryCode} (${mk.rowLabel}), ${mk.englishName} represents ${mk.conceptualFormula} across elemental (${mk.tattva}), physiological (${mk.gland} · ${mk.hormone}), and sacred-geographical (${mk.kshetra}) dimensions.`,
    summaryHi: `${mk.descriptionHi} बाइनरी अवस्था ${mk.binaryCode} (${mk.rowLabelHi}) से संबद्ध ${mk.hindiName} तात्त्विक (${mk.tattvaHi}), अंतःस्रावी (${mk.glandHi} · ${mk.hormoneHi}) और पवित्र-भौगोलिक (${mk.kshetraHi}) आयामों में ${mk.conceptualFormulaHi} का प्रतिनिधित्व करती हैं।`,
    sections: [
      {
        headingEn: '1. Archetypal Function & Symbolic Cybernetic Model',
        headingHi: '1. आद्यप्ररूपी कार्य एवं प्रतीकात्मक साइबरनेटिक मॉडल',
        bodyEn: `${mk.englishName} (${mk.rowLabel}, Binary ${mk.binaryCode}) embodies ${mk.conceptualTitle}: ${mk.description} ${mk.clarifyingNote}`,
        bodyHi: `${mk.hindiName} (${mk.rowLabelHi}, बाइनरी कोड ${mk.binaryCode}) ${mk.conceptualTitleHi} का स्वरूप हैं: ${mk.descriptionHi} ${mk.clarifyingNoteHi}`
      },
      {
        headingEn: '2. Elemental Tattva & Neuro-Endocrine Correlates',
        headingHi: '2. तात्त्विक आधार एवं अंतःस्रावी सह-संबंध',
        bodyEn: `Within the octuple systemic mapping, ${mk.englishName} is associated with the ${mk.tattva} tattva, the ${mk.gland} gland, and the neuro-chemical messenger ${mk.hormone}. This provides a structured comparative lens linking Shakta-Tantric subtle-body theory with systems homeodynamics.`,
        bodyHi: `अष्ट-स्तरीय प्रणाली मानचित्रण में ${mk.hindiName} का संबंध ${mk.tattvaHi} तत्त्व, ${mk.glandHi} और ${mk.hormoneHi} हार्मोन/न्यूरोट्रांसमीटर से दर्शाया गया है, जो शाक्त-तांत्रिक सूक्ष्म-शरीर सिद्धांत और आधुनिक प्रणाली-संतुलन के बीच एक तुलनात्मक दृष्टि प्रदान करता है।`
      },
      {
        headingEn: '3. Sacred Kshetra & Textual Provenance',
        headingHi: '3. पवित्र शक्ति-क्षेत्र एवं ग्रंथीय स्रोत',
        bodyEn: `Geographically anchored at ${mk.kshetra}, ${mk.englishName} is venerated in the Devi Mahatmya (Markandeya Purana), Varaha Purana, and Agamic temple mandalas as one of the eight foundational Shaktis. Source register: ${mk.sourceNote}`,
        bodyHi: `भौगोलिक रूप से ${mk.kshetraHi} से संबद्ध ${mk.hindiName} की उपासना देवी माहात्म्य (मार्कण्डेय पुराण), वराह पुराण और आगम मंदिर मण्डलों में आठ मूल मातृका शक्तियों में से एक के रूप में की जाती है। स्रोत आधार: ${mk.sourceNoteHi}`
      }
    ],
    keyFindingsEn: [
      `Systemic Operator: ${mk.conceptualFormula} (${mk.conceptualTitle}).`,
      `Elemental & Endocrine Mapping: ${mk.tattva} · ${mk.gland} (${mk.hormone}).`,
      `Sacred Kshetra Seat: ${mk.kshetra}.`
    ],
    keyFindingsHi: [
      `प्रणालीगत सूत्र: ${mk.conceptualFormulaHi} (${mk.conceptualTitleHi})।`,
      `तत्त्व एवं अंतःस्रावी मानचित्रण: ${mk.tattvaHi} · ${mk.glandHi} (${mk.hormoneHi})।`,
      `पवित्र शक्ति-क्षेत्र: ${mk.kshetraHi}।`
    ],
    metadata: [
      { labelEn: 'Binary State', labelHi: 'बाइनरी अवस्था', valueEn: `${mk.binaryCode} (${mk.rowLabel})`, valueHi: `${mk.binaryCode} (${mk.rowLabelHi})` },
      { labelEn: 'Elemental Tattva', labelHi: 'मूल तत्त्व', valueEn: mk.tattva, valueHi: mk.tattvaHi },
      { labelEn: 'Endocrine Correlate', labelHi: 'अंतःस्रावी ग्रंथि', valueEn: `${mk.gland} · ${mk.hormone}`, valueHi: `${mk.glandHi} · ${mk.hormoneHi}` },
      { labelEn: 'Sacred Kshetra', labelHi: 'शक्ति-क्षेत्र', valueEn: mk.kshetra, valueHi: mk.kshetraHi }
    ],
    primarySourcesEn: mk.sourceNote,
    primarySourcesHi: mk.sourceNoteHi,
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: idx
  };
});

// ============================================================================
// PORTAL VI: SHRI MERU CHAKRA (9 Avarana Enclosures)
// ============================================================================
const SHRI_MERU_ARTICLES: ResearchArticle[] = NINE_AVARANAS.map((av, idx) => {
  const slug = `avarana-0${av.number}-${av.transliteration.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return {
    slug,
    categorySlug: 'shri-meru-chakra',
    code: `AV-0${av.number}`,
    titleEn: `Avarana ${av.number}: ${av.englishName}`,
    titleHi: `आवरण ${av.number}: ${av.hindiName}`,
    subtitleEn: `${av.geometrySummary} — ${av.subtitleLine}`,
    subtitleHi: `${av.geometrySummaryHi} — ${av.subtitleLineHi}`,
    sanskritEpigraph: `॥ श्रीचक्र नव-आवरण संहिता · ${av.hindiName} (${av.indexLabel}) ॥`,
    epigraphTranslationEn: `"Enclosure ${av.number} of 9 in the Shri Meru Yantra: ${av.englishName} (${av.geometrySummary}), presided over by the ${av.yoginiGroup} Yoginis."`,
    epigraphTranslationHi: `"श्री मेरु यन्त्र के 9 आवरणों में आवरण ${av.number}: ${av.hindiName} (${av.geometrySummaryHi}), जिसकी अधिष्ठात्री ${av.yoginiGroupHi} योगिनियाँ हैं।"`,
    evidenceBadgeEn: `SHRICakra ENCLOSURE 0${av.number} / 09`,
    evidenceBadgeHi: `श्रीचक्र आवरण 0${av.number} / 09`,
    accentColor: '#D4AF37',
    summaryEn: `${av.architecturalNote} Governed by the ${av.yoginiGroup} Yogini classification, ${av.englishName} represents ${av.subtitleLine.toLowerCase()} along the concentric ascent toward the central Bindu.`,
    summaryHi: `${av.architecturalNoteHi} ${av.yoginiGroupHi} योगिनी समूह द्वारा अधिष्ठित ${av.hindiName} केंद्रीय बिन्दु की ओर संकेंद्रित आरोहण में '${av.subtitleLineHi}' का प्रतिनिधित्व करता है।`,
    sections: [
      {
        headingEn: '1. Sacred Geometry & Structural Ring Topology',
        headingHi: '1. पवित्र ज्यामिति एवं संरचनात्मक वलय विन्यास',
        bodyEn: `Enclosure ${av.number} (${av.englishName}) is constructed geometrically as ${av.geometrySummary}. ${av.architecturalNote} In 3D Mahameru architecture, this layer forms step ${av.number} of the vertical ascent from the earthly Bhupura perimeter to the supreme Bindu pinnacle.`,
        bodyHi: `आवरण ${av.number} (${av.hindiName}) की ज्यामितीय संरचना '${av.geometrySummaryHi}' के रूप में निर्मित है। ${av.architecturalNoteHi} त्रि-आयामी महामेरु वास्तुकला में यह स्तर बाहरी भूपुर से सर्वोच्च बिन्दु शिखर तक के ऊर्ध्वाधर आरोहण का सोपान ${av.number} है।`
      },
      {
        headingEn: '2. Presiding Yogini Group & Contemplative Semantics',
        headingHi: '2. अधिष्ठात्री योगिनी समूह एवं ध्यानात्मक अर्थ',
        bodyEn: `In Sri Vidya Navavarana Puja (as codified in the Nityashodashikarnava and Vamakeshvara Tantra), this enclosure is governed by the ${av.yoginiGroup} Yoginis. Its soteriological function is summarized as: "${av.subtitleLine}."`,
        bodyHi: `श्रीविद्या नवावरण पूजा (नित्याषोडशिकार्णव और वामकेश्वर तंत्र के अनुसार) में इस आवरण की अधिष्ठात्री ${av.yoginiGroupHi} योगिनियाँ हैं। इसका आध्यात्मिक उद्देश्य '${av.subtitleLineHi}' के रूप में वर्णित है।`
      }
    ],
    keyFindingsEn: [
      `Geometric Form: ${av.geometrySummary} (Ring Key: ${av.ringKey}).`,
      `Yogini Classification: ${av.yoginiGroup} (${av.yoginiGroupHi}).`,
      `Contemplative Function: ${av.subtitleLine}.`
    ],
    keyFindingsHi: [
      `ज्यामितीय स्वरूप: ${av.geometrySummaryHi}।`,
      `योगिनी वर्गीकरण: ${av.yoginiGroupHi} (${av.yoginiGroup})।`,
      `ध्यानात्मक उद्देश्य: ${av.subtitleLineHi}।`
    ],
    metadata: [
      { labelEn: 'Avarana Index', labelHi: 'आवरण क्रमांक', valueEn: av.indexLabelEn, valueHi: av.indexLabel },
      { labelEn: 'Geometric Structure', labelHi: 'ज्यामितीय संरचना', valueEn: av.geometrySummary, valueHi: av.geometrySummaryHi },
      { labelEn: 'Yogini Class', labelHi: 'योगिनी वर्ग', valueEn: av.yoginiGroup, valueHi: av.yoginiGroupHi },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Vamakeshvara Tantra · Saundarya Lahari · Bhavanopanishad',
    primarySourcesHi: 'वामकेश्वर तंत्र · सौन्दर्य लहरी · भावनोपनिषद्',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: idx
  };
});

// ============================================================================
// PORTAL VII: THE 14 LOKAS IN HINDU COSMOLOGY (14 Loka Monographs)
// ============================================================================
const FOURTEEN_LOKA_ARTICLES: ResearchArticle[] = FOURTEEN_LOKAS.map((loka, idx) => {
  const slug = loka.shortNameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const code = `LK-${String(loka.number).padStart(2, '0')}`;
  return {
    slug,
    categorySlug: 'the-14-lokas',
    code,
    titleEn: `${loka.number}. ${loka.nameEn} — ${loka.subtitleEn}`,
    titleHi: `${loka.number}. ${loka.nameHi} — ${loka.subtitleHi}`,
    subtitleEn: `${loka.divisionLabelEn} · Sovereign / Presence: ${loka.rulerEn}`,
    subtitleHi: `${loka.divisionLabelHi} · अधिपति / उपस्थिति: ${loka.rulerHi}`,
    sanskritEpigraph: `॥ चतुर्दश भुवनानि · ${loka.sanskritEpithet} (${code}) ॥`,
    epigraphTranslationEn: `"${loka.nameEn} (${loka.subtitleEn}): ${loka.summaryEn}"`,
    epigraphTranslationHi: `"${loka.nameHi} (${loka.subtitleHi}): ${loka.summaryHi}"`,
    evidenceBadgeEn: loka.divisionLabelEn,
    evidenceBadgeHi: loka.divisionLabelHi,
    accentColor: loka.accentColor,
    summaryEn: loka.summaryEn,
    summaryHi: loka.summaryHi,
    sections: [
      {
        headingEn: '1. Cosmological Position & Realm Overview',
        headingHi: '1. ब्रह्माण्डीय स्थिति एवं लोक परिचय',
        bodyEn: `${loka.summaryEn} ${loka.detailedEnvironmentEn}`,
        bodyHi: `${loka.summaryHi} ${loka.detailedEnvironmentHi}`
      },
      {
        headingEn: '2. Sovereign Rulers, Inhabitants & Phenomenology',
        headingHi: '2. अधिपति, निवासी एवं लोक का स्वरूप',
        bodyEn: `Presided over by ${loka.rulerEn}, this plane is inhabited by ${loka.inhabitantsEn}. ${loka.whatIsThereBulletsEn.join(' ')}`,
        bodyHi: `${loka.rulerHi} द्वारा अधिष्ठित इस लोक में ${loka.inhabitantsHi} का निवास है। ${loka.whatIsThereBulletsHi.join(' ')}`
      },
      {
        headingEn: '3. Subtle-Body (Adhyatmika) & Scriptural Correspondences',
        headingHi: '3. आध्यात्मिक (सूक्ष्म-शरीर) एवं शास्त्रीय सह-संबंध',
        bodyEn: `In yogic and tantric subtle-body cosmology, ${loka.shortNameEn} corresponds to ${loka.subtleBodyMappingEn}. Primary textual descriptions appear across ${loka.scripturalSourcesEn}.`,
        bodyHi: `यौगिक और तांत्रिक सूक्ष्म-शरीर विज्ञान में ${loka.shortNameHi} का संबंध '${loka.subtleBodyMappingHi}' से है। इसके प्रमुख शास्त्रीय विवरण '${loka.scripturalSourcesHi}' में प्राप्त होते हैं।`
      }
    ],
    keyFindingsEn: loka.whatIsThereBulletsEn,
    keyFindingsHi: loka.whatIsThereBulletsHi,
    metadata: [
      { labelEn: 'Cosmic Stratum', labelHi: 'ब्रह्माण्डीय स्तर', valueEn: `Loka ${loka.number} of 14 (${loka.glanceTagEn})`, valueHi: `14 लोकों में ${loka.number}वाँ (${loka.glanceTagHi})` },
      { labelEn: 'Presiding Ruler', labelHi: 'अधिपति', valueEn: loka.rulerEn, valueHi: loka.rulerHi },
      { labelEn: 'Subtle-Body Mapping', labelHi: 'सूक्ष्म-शरीर केंद्र', valueEn: loka.subtleBodyMappingEn, valueHi: loka.subtleBodyMappingHi },
      { labelEn: 'Scriptural Sources', labelHi: 'शास्त्रीय स्रोत', valueEn: loka.scripturalSourcesEn, valueHi: loka.scripturalSourcesHi }
    ],
    primarySourcesEn: loka.scripturalSourcesEn,
    primarySourcesHi: loka.scripturalSourcesHi,
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: idx
  };
});

// ============================================================================
// EXPANDED SACRED GATEWAY MONOGRAPHS (SHAKTA, SHAIVA, VAISHNAVA & AGAMIC ARCHIVE)
// ============================================================================
const SHAKTI_TATTVA_CORE_ARTICLES: ResearchArticle[] = [
  {
    slug: 'kalikula-srikula-streams',
    categorySlug: 'eight-matrikas',
    code: 'SKT-01',
    titleEn: 'Kālīkula & Śrīkula — The Two Great Streams of Śākta Tantra',
    titleHi: 'कालीकुल एवं श्रीकुल — शाक्त तन्त्र की दो महाधाराएँ',
    subtitleEn: 'Comparative Theology, Liturgical Geography & Textual Lineages of the Northern/Eastern and Southern Śākta Transmissions',
    subtitleHi: 'उत्तरी-पूर्वी एवं दक्षिणी शाक्त आम्नायों का तुलनात्मक तत्त्वज्ञान, अनुष्ठान भूगोल एवं ग्रंथीय परम्परा',
    sanskritEpigraph: '॥ कालीकुलं च श्रीकुलं च द्वौ प्रवाहौ महापथौ। चित्-शक्ति-साम्य-रूपायै महादेव्यै नमो नमः ॥',
    epigraphTranslationEn: '"Kālīkula and Śrīkula stand as the two great Complementary Streams of the Supreme Goddess, who is the unity of Consciousness (Cit) and Power (Śakti)."',
    epigraphTranslationHi: '"कालीकुल और श्रीकुल पराशक्ति की दो पूरक महाधाराएँ हैं, जो चित् और शक्ति के अद्वैत सामरस्य का साक्षात्कार कराती हैं।"',
    evidenceBadgeEn: 'PRIMARY SCRIPTURAL & LINEAGE RECORD · ŚĀKTA TANTRA',
    evidenceBadgeHi: 'मूल शास्त्रीय एवं आम्नाय अभिलेख · शाक्त तन्त्र',
    accentColor: '#EC4899',
    summaryEn:
      'Classical Śākta Tantra is historically and liturgically organized around two primary families (kula): Kālīkula (predominant in Bengal, Assam, Mithila, Odisha, and Kashmir, centered on Kālī, Tārā, and epistemological transcendence) and Śrīkula (predominant in South India, Kashmir, and Varanasi, centered on Lalitā Tripurasundarī, the Śrīcakra, and aesthetic-cosmological harmony).',
    summaryHi:
      'शास्त्रीय शाक्त तन्त्र ऐतिहासिक और आनुष्ठानिक रूप से दो प्रमुख कुलों में विभाजित है: कालीकुल (बंगाल, असम, मिथिला, ओडिशा और कश्मीर में प्रमुख; काली, तारा तथा तीव्र ज्ञान-वैराग्य पर केंद्रित) और श्रीकुल (दक्षिण भारत, कश्मीर और काशी में प्रमुख; ललिता त्रिपुरसुन्दरी, श्रीचक्र और सौन्दर्य-सामरस्य पर केंद्रित)।',
    sections: [
      {
        headingEn: '1. Kālīkula (कालीकुल): Epistemological Rupture & Transcendence of Time',
        headingHi: '1. कालीकुल: काल-अतिक्रमण एवं प्रज्ञा-चक्र विधान',
        bodyEn:
          'In Kālīkula texts—ranging from the early Krama systems of Kashmir (Mahārthamañjarī, Tantrāloka Ch. 4) to eastern Kaula compendia (Bṛhannīla Tantra, Kālīkulārṇava, Tantrasāra of Kṛṣṇānanda Āgamavāgīśa)—Kālī is venerated as Kālasaṅkarṣiṇī, the supreme power of consciousness that devours linear time and dualistic constriction. The Kālīkula path emphasizes direct confrontation with finitude (mṛtyu/kāla) and non-dual realization.',
        bodyHi:
          'कश्मीर की क्रम प्रणाली (महार्थमञ्जरी, तन्त्रालोक) से लेकर पूर्वी भारत के बृहन्नील तन्त्र, कालीकुलार्णव और कृष्णानन्द आगमवागीश के तन्त्रसार तक—कालीकुल में भगवती काली की उपासना कालसंकर्षिणी के रूप में की जाती है, जो द्वैत और काल की सीमाओं का संहार कर अद्वैत बोध प्रदान करती हैं।'
      },
      {
        headingEn: '2. Śrīkula (श्रीकुल): Śrīvidyā, Aesthetic Non-Dualism & the Śrīcakra',
        headingHi: '2. श्रीकुल: श्रीविद्या, सौन्दर्य-अद्वैत एवं श्रीचक्र उपासना',
        bodyEn:
          'Anchored in the Vāmakeśvara Tantra (Nityāṣoḍaśikārṇava), Yoginīhṛdaya, Lalitā Sahasranāma (Brahmāṇḍa Purāṇa), and Paraśurāma Kalpasūtra, Śrīkula contemplates the Divine Feminine as Lalitā Mahātripurasundarī. Rather than rejecting phenomenal manifestation, Śrīkula maps the universe as the auspicious self-reflection (vimarśa) of Śiva-Śakti across the nine enclosures of the Śrī Meru Chakra.',
        bodyHi:
          'वामकेश्वर तन्त्र (नित्याषोडशिकार्णव), योगिनीहृदय, ललिता सहस्रनाम (ब्रह्माण्ड पुराण) और परशुराम कल्पसूत्र पर आधारित श्रीकुल में पराशक्ति की उपासना ललिता महात्रिपुरसुन्दरी के रूप में होती है। यह धारा दृश्य जगत को त्यागने के स्थान पर उसे श्रीचक्र के नौ आवरणों में शिव-शक्ति के चिन्मय विमर्श के रूप में देखती है।'
      },
      {
        headingEn: '3. Methodological Note: Avoiding Rigid Binary Oversimplification',
        headingHi: '3. शोध-पद्धति टिप्पणी: अति-सरलीकरण से बचाव एवं आगम समन्वय',
        bodyEn:
          'Historical manuscript scholarship demonstrates that Kālīkula and Śrīkula were never hermetically sealed rivals. Texts such as the Todala Tantra, Muṇḍamālā Tantra, and Sarvollāsa Tantra synthesize both families within the overarching Daśa Mahāvidyā framework and the Āmnāya (directional transmission) mandala.',
        bodyHi:
          'पाण्डुलिपि अध्ययन सिद्ध करते हैं कि कालीकुल और श्रीकुल परस्पर विरोधी नहीं, अपितु पूरक आम्नाय हैं। तोडल तन्त्र, मुण्डमाला तन्त्र और सर्वोल्लास तन्त्र जैसे ग्रन्थ दशमहाविद्या और षड्-आम्नाय व्यवस्था के अंतर्गत दोनों धाराओं का समन्वय प्रस्तुत करते हैं।'
      }
    ],
    keyFindingsEn: [
      'Kālīkula centers on Kālī, Tārā, and Chinnamastā; primary regions include Bengal, Kamakhya (Assam), Mithila, and Kashmir Krama.',
      'Śrīkula centers on Tripurasundarī (Ṣoḍaśī), Bhuvaneśvarī, and Mātaṅgī; codified in Vāmakeśvara Tantra and Yoginīhṛdaya.',
      'Both lineages share the foundational Aṣṭa Mātṛkā and Catuḥṣaṣṭi Yoginī mandala structures.'
    ],
    keyFindingsHi: [
      'कालीकुल में काली, तारा और छिन्नमस्ता की प्रधानता है; इसके प्रमुख केंद्र बंगाल, कामाख्या (असम), मिथिला और कश्मीर क्रम परम्परा हैं।',
      'श्रीकुल में त्रिपुरसुन्दरी (षोडशी), भुवनेश्वरी और मातंगी की प्रधानता है; इसके मूल ग्रन्थ वामकेश्वर तन्त्र और योगिनीहृदय हैं।',
      'दोनों ही धाराएँ अष्ट मातृका और चतुःषष्टि योगिनी के मण्डल विधान को साझा करती हैं।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Kālīkula & Śrīkula (कालीकुल · श्रीकुल)', valueHi: 'कालीकुल एवं श्रीकुल' },
      { labelEn: 'Evidence Category', labelHi: 'प्रमाण श्रेणी', valueEn: 'Primary Tantric Compendia & Manuscript Lineages', valueHi: 'मूल तांत्रिक संहिताएँ एवं पाण्डुलिपि परम्परा' },
      { labelEn: 'Core Texts', labelHi: 'प्रमुख ग्रन्थ', valueEn: 'Nityāṣoḍaśikārṇava · Yoginīhṛdaya · Tantrasāra · Mahārthamañjarī', valueHi: 'नित्याषोडशिकार्णव · योगिनीहृदय · तन्त्रसार · महार्थमञ्जरी' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Vāmakeśvara Tantra · Yoginīhṛdaya · Tantrasāra (Kṛṣṇānanda Āgamavāgīśa) · Mahārthamañjarī',
    primarySourcesHi: 'वामकेश्वर तन्त्र · योगिनीहृदय · तन्त्रसार (कृष्णानन्द आगमवागीश) · महार्थमञ्जरी',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'dasa-mahavidya-ten-wisdom-goddesses',
    categorySlug: 'eight-matrikas',
    code: 'SKT-02',
    titleEn: 'The Ten Mahāvidyās — Complete Research Archive (दशमहाविद्या · Daśa Mahāvidyā)',
    titleHi: 'दशमहाविद्या (Daśa Mahāvidyā) — संपूर्ण शोध अभिलेखागार: शाक्त तन्त्र, देवी तत्त्वज्ञान, प्रतिमाशास्त्र, अनुष्ठान इतिहास एवं दर्शन',
    subtitleEn: 'Sanskrit: दशमहाविद्या · IAST: Daśa Mahāvidyā · Subject: Śākta Tantra, Goddess Theology, Iconography, Ritual History, and Philosophy (Kālī, Tārā, Tripurasundarī, Bhuvaneśvarī, Bhairavī, Chhinnamastā, Dhūmāvatī, Bagalāmukhī, Mātaṅgī & Kamalā)',
    subtitleHi: 'संस्कृत: दशमहाविद्या · विषय: शाक्त तन्त्र, देवी धर्मशास्त्र, प्रतिमाशास्त्र, अनुष्ठान इतिहास एवं दर्शन (काली, तारा, त्रिपुरसुन्दरी, भुवनेश्वरी, त्रिपुरभैरवी, छिन्नमस्ता, धूमावती, बगलामुखी, मातङ्गी एवं कमला)',
    sanskritEpigraph: '॥ काली तारा महाविद्या षोडशी भुवनेश्वरी। भैरवी छिन्नमस्ता च विद्या धूमावती तथा। बगला सिद्धविद्या च मातङ्गी कमलात्मिका ॥',
    epigraphTranslationEn: '"Kālī, Tārā, the Great Wisdom Ṣoḍaśī (Tripurasundarī), Bhuvaneśvarī, Bhairavī, Chhinnamastā, the wisdom Dhūmāvatī, the perfected wisdom Bagalā (Bagalāmukhī), Mātaṅgī, and Kamalātmikā (Kamalā)—these are the Ten Mahāvidyās."',
    epigraphTranslationHi: '"काली, तारा, महाविद्या षोडशी (त्रिपुरसुन्दरी), भुवनेश्वरी, भैरवी, छिन्नमस्ता, विद्या धूमावती, सिद्धविद्या बगला (बगलामुखी), मातङ्गी और कमलात्मिका (कमला)—ये दस महाविद्याएँ हैं।"',
    evidenceBadgeEn: 'COMPLETE ŚĀKTA RESEARCH ARCHIVE · KINSLEY · SHIN · TODALA & MUṆḌAMĀLĀ TANTRA',
    evidenceBadgeHi: 'संपूर्ण शाक्त शोध अभिलेखागार · किन्सले · जे-युन शिन · तोडल एवं मुण्डमाला तन्त्र',
    accentColor: '#F43F5E',
    summaryEn:
      'The Daśa Mahāvidyās, or Ten Great Wisdom Goddesses, form a distinctive group of ten Goddess manifestations in Śākta religious traditions, bringing together strikingly different forms of the Divine Feminine: fierce, beautiful, sovereign, ascetic, maternal, unsettling, and auspicious. Conventionally named Kālī, Tārā, Tripurasundarī, Bhuvaneśvarī, Bhairavī, Chhinnamastā, Dhūmāvatī, Bagalāmukhī, Mātaṅgī, and Kamalā (though order and membership vary among sources), they are not simply ten unrelated deities collected into one list; many Śākta traditions understand them as manifestations of one supreme Goddess, while modern scholarship (e.g., David Kinsley’s Tantric Visions of the Divine Feminine: The Ten Mahavidyas and Jae-Eun Shin’s Change, Continuity and Complexity) examines how the group synthesizes Kālīkula, Śrīkula, Yoginī traditions, and Śaiva-Śākta Tantra.',
    summaryHi:
      'दशमहाविद्या (दस महान् ज्ञान-स्वरूप देवियाँ) शाक्त धार्मिक परंपराओं में पराशक्ति के दस विशिष्ट स्वरूपों का एक अद्वितीय समूह हैं, जो दिव्य स्त्री-शक्ति के उग्र, सौम्य, राजसी, तपस्वी, मातृवत्, विस्मयकारी और मंगलमय आयामों को एक साथ पिरोता है। इनके पारंपरिक नाम हैं—काली, तारा, त्रिपुरसुन्दरी, भुवनेश्वरी, त्रिपुरभैरवी, छिन्नमस्ता, धूमावती, बगलामुखी, मातङ्गी और कमला (यद्यपि विभिन्न स्रोतों में इनका क्रम भिन्न मिलता है)। ये केवल दस असंबद्ध देवियों की सूची नहीं हैं; अनेक शाक्त परंपराएँ इन्हें एक ही सर्वोच्च पराशक्ति की अभिव्यक्तियाँ मानती हैं, और आधुनिक अकादमिक शोध (जैसे डेविड किन्सले की पुस्तक Tantric Visions of the Divine Feminine: The Ten Mahavidyas तथा जे-युन शिन का शोध) इनका अध्ययन कालीकुल, श्रीकुल, योगिनी परंपरा तथा शैव-शाक्त तन्त्र के ऐतिहासिक संश्लेषण के रूप में करता है।',
    sections: [
      {
        headingEn: '1. Meaning of the Term Mahāvidyā & The Ten Mahāvidyās at a Glance',
        headingHi: '1. "महाविद्या" शब्द का अर्थ एवं दसों महाविद्याओं का संक्षिप्त परिचय',
        bodyEn:
          'The Sanskrit compound Mahāvidyā consists of two elements: Mahā (महा)—meaning great, vast, exalted, or supreme—and Vidyā (विद्या)—meaning knowledge, learning, insight, or a form of sacred knowledge (and in Tantric contexts, a Goddess or the female mantra-deity associated with her). Thus Mahāvidyā translates as "Great Wisdom" or "Great Knowledge," and Daśa Mahāvidyā refers to the Ten Great Wisdom Goddesses. In Tantric literature, a vidyā is not merely an abstract philosophical concept, but divine knowledge embodied in a Goddess and expressed through a specific mantra and ritual tradition. At a glance, their recurring associations are: (1) Kālī (कालī · Kālikā — The Power of Time): associated with time, death, transformation, and the dissolution of limiting identities, frequently presented as the preeminent Goddess of the group; (2) Tārā (तारा — The Saviouress): associated with protection, deliverance, speech, and carrying beings across danger (historically studied in relation to, yet distinguished from, Buddhist Tārā); (3) Tripurasundarī (त्रिपुरसुन्दरी · Ṣoḍaśī · Lalitā — The Beauty of the Three Worlds): associated with beauty, sovereignty, auspiciousness, and the harmonious manifestation of consciousness, central to Śrīvidyā; (4) Bhuvaneśvarī (भुवनेश्वरी — The Queen of the Worlds): associated with the cosmos as the spatial domain in which manifestation unfolds; (5) Tripurā Bhairavī (त्रिपुरभैरवी — The Fierce Radiance): associated with fierce divine power, discipline, intensity, and transformative energy; (6) Chhinnamastā (छिन्नमस्ता — The Self-Decapitated Goddess): associated with self-sacrifice, the circulation of life-force, life and death, and the paradox of selfhood; (7) Dhūmāvatī (धूमावती — The Smoky Goddess): associated with smoke, absence, deprivation, old age, widowhood, and realities excluded by conventional prosperity; (8) Bagalāmukhī (बगलामुखी · Bagalā — The Power of Arresting): associated with arresting or immobilizing hostile forces, particularly speech and action; (9) Mātaṅgī (मातङ्गी — The Goddess of Speech and Art): associated with speech, music, learning, artistic expression, and knowledge challenging social boundaries; and (10) Kamalā (कमला · Kamalātmikā — The Lotus Goddess): associated with prosperity, fertility, auspiciousness, beauty, and abundance, closely identified with Lakṣmī. These descriptions summarize recurring associations rather than fixed definitions applicable to every text or lineage.',
        bodyHi:
          'संस्कृत समस्तपद "महाविद्या" दो तत्त्वों से निर्मित है: "महा" (महान्, विराट्, उत्कृष्ट या सर्वोच्च) और "विद्या" (ज्ञान, प्रज्ञा, बोध अथवा तांत्रिक संदर्भ में स्वयं देवी और उनका मन्त्र-स्वरूप)। इस प्रकार महाविद्या का अर्थ है "महान् प्रज्ञा" या "सर्वोच्च ज्ञान", और दशमहाविद्या का तात्पर्य दस महान् ज्ञान-देवियों से है। तांत्रिक साहित्य में "विद्या" केवल एक अमूर्त दार्शनिक विचार नहीं है, अपितु देवी के रूप में साकार दिव्य ज्ञान है जो विशिष्ट मन्त्र और साधना-परंपरा के माध्यम से अभिव्यक्त होता है। एक दृष्टि में दसों महाविद्याओं के प्रमुख लक्षण इस प्रकार हैं: (१) काली (कालिका — काल की शक्ति): काल, मृत्यु, रूपांतरण और सीमित पहचानों के लय से संबद्ध, जिन्हें प्रायः इस समूह में प्रमुख स्थान दिया जाता है; (२) तारा (तारिणी): रक्षा, उद्धार, वाणी और संकट से पार ले जाने वाली शक्ति (जिनके हिन्दू तांत्रिक स्वरूपों का बौद्ध तारा परंपराओं के साथ ऐतिहासिक संबंध होते हुए भी दोनों की स्वतंत्र पहचान रखना आवश्यक है); (३) त्रिपुरसुन्दरी (षोडशी · ललिता — तीनों लोकों का सौन्दर्य): सौन्दर्य, संप्रभुता, मांगल्य और चेतना के सामंजस्यपूर्ण विकास से संबद्ध तथा श्रीविद्या की अधिष्ठात्री; (४) भुवनेश्वरी (भुवनों की स्वामिनी): उस ब्रह्माण्डीय आकाश या क्षेत्र से संबद्ध जिसमें सृष्टि का विस्तार होता है; (५) त्रिपुरभैरवी (उग्र तेज): प्रचण्ड दिव्य शक्ति, अनुशासन, तप और रूपांतरणकारी ऊर्जा का स्वरूप; (६) छिन्नमस्ता (स्व-शीर्षच्छेदिनी देवी): आत्म-त्याग, प्राण-शक्ति के संचरण, जीवन-मृत्यु के संबंध और अहं के विरोधाभास की प्रतीक; (७) धूमावती (धूम्र-रूपा देवी): धुएँ, अभाव, वंचना, वृद्धावस्था और वैधव्य से संबद्ध—जो पारंपरिक समृद्धि की सीमाओं से परे की वास्तविकताओं को दर्शाती हैं; (८) बगलामुखी (बगला — स्तम्भन की शक्ति): शत्रुतापूर्ण शक्तियों, विशेषतः वाणी और आक्रामक गति को स्तम्भित (स्थिर) करने वाली शक्ति; (९) मातङ्गी (वाणी और कला की देवी): भाषा, संगीत, विद्या, कलात्मक अभिव्यक्ति और सामाजिक सीमाओं को चुनौती देने वाले ज्ञान से संबद्ध; तथा (१०) कमला (कमलात्मिका — पद्म-देवी): समृद्धि, उर्वरता, मांगल्य, सौन्दर्य और प्रचुरता से संबद्ध, जिनका लक्ष्मी से प्रगाढ़ तादात्म्य है।'
      },
      {
        headingEn: '2. Part I — Origins & Historical Development: Emergence, Śākta Tantra, Kālīkula–Śrīkula & The Satī Narrative',
        headingHi: '2. भाग I — उत्पत्ति एवं ऐतिहासिक विकास: समूह का गठन, शाक्त तन्त्र, कालीकुल-श्रीकुल समन्वय एवं सती आख्यान',
        bodyEn:
          'The Mahāvidyās are best studied as a historically developing group of Goddess traditions rather than a list whose entire history derives from a single original text or event. Kālī, Tārā, Tripurasundarī, and other members developed in distinct regional and religious settings before and during the consolidation of the tenfold grouping. A rigorous historical account separates three distinct questions: (1) When does an individual Goddess first appear in surviving textual or material evidence? (2) When do sources begin treating several of these Goddesses as a connected group? (3) When does the now-familiar list of ten become standardized in specific textual and devotional traditions? Because available evidence does not give the same date for all three questions, scholarship combines textual history, manuscript research, iconography, temple practices, and regional studies. Within Śākta Tantra—which places the Goddess and her Śakti at the center of mantra, visualization, initiation, sacred diagrams, and philosophy—David Kinsley notes that bringing together royal/auspicious forms and fierce/socially marginal forms challenges conventional assumptions about purity, beauty, social respectability, and the nature of the sacred. Crucially, the Mahāvidyā framework bridges two major Śākta currents: Kālīkula (Kālī-centered traditions with deep roots in eastern India) and Śrīkula (traditions centered on Tripurasundarī and Śrīvidyā with a major presence in South India), with recent scholarship in the Journal of Hindu Studies highlighting how Tārā occupies a pivotal position between Kālī and Tripurasundarī. In traditional mythology (notably the Mahābhāgavata Purāṇa), when Satī resolves to attend her father Dakṣa’s sacrifice despite Śiva’s objections and Śiva attempts to stop her departure, Satī manifests the ten Mahāvidyās in the ten directions, demonstrating the Goddess’s independence, sovereignty, and unity across diverse forms. Methodological qualification: This is a theological narrative rather than a historically verifiable origin report, and while ten (Daśa Mahāvidyā) is the standard grouping, Tantric texts occasionally preserve variant lists, numbers, and sequences.',
        bodyHi:
          'महाविद्याओं का अध्ययन किसी एक ही मूल ग्रंथ या घटना से उत्पन्न सूची के बजाय ऐतिहासिक रूप से विकसित हुई देवी-परंपराओं के समूह के रूप में किया जाना चाहिए। काली, तारा, त्रिपुरसुन्दरी और अन्य देवियों का विकास दस के समूह में संगठित होने से पूर्व और उसके दौरान भिन्न-भिन्न क्षेत्रीय व धार्मिक परिवेशों में हुआ। एक सावधानीपूर्ण ऐतिहासिक विश्लेषण तीन प्रश्नों को अलग रखता है: (१) किसी विशिष्ट देवी का प्राचीनतम ग्रंथीय या पुरातात्विक साक्ष्य कब मिलता है? (२) विभिन्न स्रोत इनमें से कई देवियों को एक संबद्ध समूह के रूप में कब देखना शुरू करते हैं? (३) दस महाविद्याओं की वर्तमान परिचित सूची विशेष ग्रन्थों और भक्ति परंपराओं में कब मानकीकृत होती है? इन तीनों प्रश्नों के उत्तर एक ही कालखंड में नहीं मिलते। शाक्त तन्त्र—जो देवी और उनकी शक्ति को मन्त्र, ध्यान, दीक्षा, यन्त्र और दर्शन के केंद्र में रखता है—में डेविड किन्सले बताते हैं कि राजसी व सौम्य स्वरूपों के साथ उग्र, श्मशान-वासिनी या सामाजिक हाशिये से जुड़ी देवियों का एक साथ आना पवित्रता, सौन्दर्य और सामाजिक प्रतिष्ठा की रूढ़ धारणाओं को चुनौती देता है। यह समूह दो अत्यंत प्रभावशाली शाक्त धाराओं—कालीकुल (पूर्वी भारत में विशेष रूप से प्रमुख काली-केंद्रित परंपरा) और श्रीकुल (दक्षिण भारत में विशेष रूप से प्रमुख त्रिपुरसुन्दरी एवं श्रीविद्या परंपरा)—को एक साझा धर्मशास्त्रीय ढाँचे में जोड़ता है, जिसमें जर्नल ऑफ हिन्दू स्टडीज़ के हालिया शोध ने काली और त्रिपुरसुन्दरी के मध्य तारा की विशिष्ट भूमिका को रेखांकित किया है। पौराणिक आख्यान (विशेषतः महाभागवत पुराण) में, जब सती शिव की असहमति के बावजूद अपने पिता दक्ष के यज्ञ में जाने का निश्चय करती हैं और शिव उन्हें रोकने का प्रयास करते हैं, तब सती दसों दिशाओं में दस महाविद्याओं को प्रकट करती हैं—जो देवी की स्वतंत्रता, संप्रभुता और विविध रूपों में एकत्व को दर्शाता है। ऐतिहासिक स्पष्टीकरण: यह एक धार्मिक-दार्शनिक आख्यान है, न कि समूह की उत्पत्ति का ऐतिहासिक कालानुक्रमिक अभिलेख; और यद्यपि "दशमहाविद्या" (१० की संख्या) सर्वाधिक मान्य है, तथापि कुछ तांत्रिक ग्रन्थों में सदस्यों की संख्या और क्रम में भिन्नता भी मिलती है।'
      },
      {
        headingEn: '3. Part II (A) — Detailed Profiles of Mahāvidyās 1 & 2: Kālī (कालī) and Tārā (तारा)',
        headingHi: '3. भाग II (क) — महाविद्या १ एवं २ का विस्तृत अध्ययन: काली (कालिका) एवं तारा',
        bodyEn:
          '1. KĀLĪ (कालī · Kālikā): (Identity & Theology): Frequently placed first in contemporary Mahāvidyā lists, Kālī’s name is connected with kāla (time); she is widely associated with mortality, transformation, fierce compassion, and the dissolution of manifested forms. In Kālī-centered Śākta theology she is the supreme manifestation of the Goddess, and in nondual traditions she is the dynamic power through which consciousness manifests and withdraws the universe—coexisting with maternal devotion, protection, and liberation. (Iconography): Common representations include a dark or black complexion, disheveled hair, a fierce expression, a garland of severed heads or skulls, a girdle of severed arms in some forms, weapons including a sword/cleaver and a severed head, and a posture standing upon Śiva (though not every image contains all features, and meanings depend on the specific form and textual source). (Mythology & Research Topics): Appearing in battles against demonic forces where Śiva intervenes to halt her overwhelming momentum—and interpreted philosophically as dynamic Śakti upon quiescent Śiva—major research topics include Kālī in the Devī Māhātmya, Kālīkula Tantras, the Twelve Kālīs of the Kashmirian Krama tradition, Bengal iconography, and modern Kālī Pūjā.\n\n2. TĀRĀ (तारा): (Identity & Theology): Associated with the Sanskrit root tṛ- (crossing, carrying across, delivering), Tārā in Hindu Śākta contexts is a protective, saving form of the Goddess. While sharing a name and important historical links with Buddhist Tārā traditions, the two should not be collapsed into a single identity; recent scholarship in the Journal of Hindu Studies examines how Tārā was incorporated into the Mahāvidyā group across Hindu and Buddhist contexts. (Iconography): Some Hindu Tantric depictions are fierce and closely resemble Kālī—featuring blue or dark coloration, a fierce facial expression, weapons or ritual implements (such as shears/kartarī, sword, skull-cup, and lotus), and cremation-ground imagery—while other forms appear maternal and protective. (Philosophical Themes & Research Topics): Representing deliverance from physical danger, suffering, or spiritual bondage, as well as the liberating power of sacred sound and speech, key research topics include comparing Hindu and Buddhist Tārā, Tārā’s place in the Mahāvidyā group, regional temple traditions (such as Tarapith), and textual histories of Tārā worship.',
        bodyHi:
          '१. काली (Kālī · कालिका): (स्वरूप एवं धर्मशास्त्र): दशमहाविद्या की समकालीन सूचियों में प्रायः प्रथम स्थान पर परिगणित काली का नाम "काल" (समय) से संबद्ध है। वे नश्वरता, रूपांतरण, उग्र करुणा और प्रकट रूपों के लय से जुड़ी हैं। काली-केंद्रित शाक्त धर्मशास्त्र में उन्हें सर्वोच्च पराशक्ति माना जाता है, जहाँ उग्र स्वरूप के साथ-साथ मातृवत् भक्ति, संरक्षण और मोक्ष का वचन सह-अस्तित्व में रहता है। (प्रतिमाशास्त्र): प्रमुख लक्षणों में श्यामल या कृष्ण वर्ण, बिखरे (मुक्त) केश, उग्र मुखमुद्रा, मुण्डमाला, कटे हाथों की मेखला, खड्ग व कटा मस्तक तथा शिव के ऊपर खड़ी मुद्रा शामिल हैं (प्रत्येक प्रतिमा में सभी लक्षण अनिवार्य नहीं हैं और उनका अर्थ विशिष्ट रूप व ग्रंथीय स्रोत पर निर्भर करता है)। (मिथक एवं प्रमुख शोध विषय): आसुरी शक्तियों से युद्ध और शिव द्वारा उनके प्रचण्ड वेग को शांत करने के आख्यानों तथा शिव-शक्ति के दार्शनिक संबंध के साथ, प्रमुख शोध विषयों में देवी माहात्म्य में काली, कालीकुल तन्त्र, कश्मीर क्रम परंपरा की द्वादश काली, बंगाल की प्रतिमा-परंपरा और आधुनिक काली पूजा शामिल हैं।\n\n२. तारा (Tārā): (स्वरूप एवं धर्मशास्त्र): "तारा" नाम संस्कृत की तृ धातु (पार कराना, तारना या उद्धार करना) से संबद्ध है। हिन्दू शाक्त संदर्भों में वे संकट से रक्षा करने वाली तारिणी शक्ति हैं। बौद्ध धर्म की तारा परंपराओं के साथ उनका गहरा ऐतिहासिक संबंध है, किंतु दोनों को एक ही पहचान में मिलाया नहीं जाना चाहिए; जर्नल ऑफ हिन्दू स्टडीज़ के शोध में हिन्दू और बौद्ध संदर्भों के बीच महाविद्या समूह में तारा के समावेशन का सूक्ष्म अध्ययन किया गया है। (प्रतिमाशास्त्र): हिन्दू तन्त्र में तारा के कुछ स्वरूप उग्र और काली के सदृश हैं—नील या गहरा वर्ण, उग्र भाव, शस्त्र व अनुष्ठान उपकरण (जैसे कर्तरी, खड्ग, कपाल, पद्म) तथा श्मशान-भूमि के प्रतीक—जबकि कुछ रूप सौम्य व मातृवत् रक्षिका के हैं। (दार्शनिक विषय एवं शोध क्षेत्र): संकट से उद्धार, भव-सागर से पार जाने और परा-वाणी की मुक्तिदायी शक्ति के साथ, प्रमुख शोध विषयों में हिन्दू व बौद्ध तारा की समानताएँ व भिन्नताएँ, महाविद्या समूह में तारा का स्थान, क्षेत्रीय मंदिर परंपराएँ और तारा उपासना का ग्रंथीय इतिहास शामिल हैं।'
      },
      {
        headingEn: '4. Part II (B) — Detailed Profiles of Mahāvidyās 3, 4 & 5: Tripurasundarī, Bhuvaneśvarī & Tripurā Bhairavī',
        headingHi: '4. भाग II (ख) — महाविद्या ३, ४ एवं ५ का विस्तृत अध्ययन: त्रिपुरसुन्दरी, भुवनेश्वरी एवं त्रिपुरभैरवी',
        bodyEn:
          '3. TRIPURASUNDARĪ (त्रिपुरसुन्दरी · Lalitā · Rājarājeśvarī · Ṣoḍaśī): (Identity & Theology): Central Goddess of Śrīvidyā, her name translates as "Beauty of the Three Worlds" or "Beauty of the Three Cities." In Śrīvidyā theology, she is the supreme Goddess through whom the universe manifests, expressing royal sovereignty, auspiciousness, and the harmony of divine power. (Iconography & Attributes): She appears youthful and radiant in red garments, wearing a jeweled crown and royal ornaments, seated on a lotus or throne with four arms holding a sugarcane bow, five arrows, noose (pāśa), and goad (aṅkuśa)—attributes variously interpreted across commentaries in relation to desire (icchā), perception, the mind (manas), and cognitive faculties. (The Śrīcakra & Research Topics): Closely united with the Śrīcakra (nine interlocking enclosures linking sacred geometry, mantra, and visualization), major research topics include Śrīvidyā history in South India and Kashmir, the meaning of Ṣoḍaśī, the Lalitā Sahasranāma, and theological commentaries on the Śrīcakra.\n\n4. BHUVANEŚVARĪ (भुवनेश्वरी): (Identity & Theology): Meaning "Queen" or "Sovereign of the Worlds," Bhuvaneśvarī represents the Goddess in relation to the cosmos and the vast spatial domain in which existence unfolds; the worlds are not merely objects over which she rules, but expressions of her own power (Śakti). (Iconography & Comparative Role): Depicted as a regal, radiant Goddess with elaborate ornaments holding a noose and goad while making gestures of reassurance (abhaya) and blessing (varada). Where Kālī is frequently associated with time (kāla) and dissolution, Bhuvaneśvarī illuminates the expansive domain of space and manifestation—a helpful comparative framework rather than a rigid separation of cosmic functions.\n\n5. TRIPURĀ BHAIRAVĪ (त्रिपुरभैरवी): (Identity & Theology): Related by name to Bhairava (formidable forms of Śiva), Bhairavī represents an intense, concentrated, and transformative manifestation of Śakti associated with discipline, tapas (austerity), and the force required to confront ignorance and ordinary limitations. (Iconography & Relationship to Bhairava): Depicted with red or fiery coloration, a crown, elaborate ornaments, multiple arms bearing weapons or ritual implements (such as rosary and book), and a fierce or radiant expression. While her name and imagery invite comparison with Śaiva-Śākta Bhairava traditions, not every form of Bhairavī is merely a passive consort of a single Bhairava; her role varies across texts, ritual contexts, and theological systems.',
        bodyHi:
          '३. त्रिपुरसुन्दरी (Tripurasundarī · ललिता · राजराजेश्वरी · षोडशी): (स्वरूप एवं धर्मशास्त्र): श्रीविद्या परम्परा की केंद्रीय आराध्या त्रिपुरसुन्दरी के नाम का अर्थ है "तीनों लोकों (अथवा तीन पुरों) की परम सुन्दरी"। श्रीविद्या दर्शन में वे सर्वोच्च पराशक्ति हैं जिनके माध्यम से ब्रह्माण्ड अभिव्यक्त होता है; उनका राजसी और सौम्य स्वरूप संप्रभुता, मांगल्य और दिव्य सामरस्य का प्रतीक है। (प्रतिमाशास्त्र एवं आयुध): तरुण, अरुण-कांति से युक्त, रक्त वस्त्र, रत्नमुकुट एवं आभूषण धारण किए पद्म या सिंहासन पर आसीन चतुर्भुज रूप में वे धनुष, बाण, पाश और अंकुश धारण करती हैं—जिनकी व्याख्या विभिन्न भाष्यों में मन, इन्द्रिय-बोध और इच्छा-ज्ञान-क्रिया शक्ति के रूप में की गई है। (श्रीचक्र संबंध एवं शोध विषय): श्रीचक्र (पवित्र ज्यामिति, मन्त्र और ध्यान का एकीकृत यन्त्र) से घनिष्ठ रूप से संबद्ध होने के कारण, प्रमुख शोध विषयों में दक्षिण भारत और कश्मीर में श्रीविद्या का इतिहास, "षोडशी" नाम का रहस्य, ललिता सहस्रनाम और श्रीचक्र का दार्शनिक अध्ययन शामिल हैं।\n\n४. भुवनेश्वरी (Bhuvaneśvarī): (स्वरूप एवं धर्मशास्त्र): "भुवनों (लोकों) की अधीश्वरी" के रूप में भुवनेश्वरी ब्रह्माण्ड के उस विराट् विस्तार और आकाश-तत्त्व का प्रतिनिधित्व करती हैं जिसमें सृष्टि का उन्मेष होता है; लोक केवल उनके शासन के विषय नहीं हैं, अपितु उनकी अपनी शक्ति की ही अभिव्यक्ति हैं। (प्रतिमाशास्त्र एवं तुलनात्मक भूमिका): उज्ज्वल राजकीय आभा और अलंकारों से युक्त वे पाश और अंकुश के साथ अभय और वरद मुद्रा धारण करती हैं। जहाँ काली को प्रायः काल और संहार से जोड़ा जाता है, वहीं भुवनेश्वरी को सृष्टि के व्यापक अवकाश (Space) के रूप में देखा जाता है।\n\n५. त्रिपुरभैरवी (Tripurā Bhairavī): (स्वरूप एवं धर्मशास्त्र): शिव के उग्र रूप "भैरव" से संबद्ध नाम वाली भैरवी शक्ति के प्रचण्ड, एकाग्र और रूपांतरणकारी आयाम को दर्शाती हैं, जो तप, अनुशासन और अज्ञान व आसक्ति की सीमाओं को भंग करने वाले तेज से युक्त हैं। (प्रतिमाशास्त्र एवं भैरव से संबंध): रक्त या अग्निवर्ण आभा, मुकुट, आभूषण और बहुभुजाओं में शस्त्र या जपमाला-पुस्तक धारण करने वाली भैरवी का संबंध शैव-शाक्त भैरव परंपराओं से तुलनात्मक अध्ययन का विषय है, किंतु भैरवी का प्रत्येक रूप केवल किसी एक भैरव की पत्नी-मात्र नहीं है, बल्कि विभिन्न तन्त्रों में उनका स्वतंत्र सर्वोच्च स्थान है।'
      },
      {
        headingEn: '5. Part II (C) — Detailed Profiles of Mahāvidyās 6, 7 & 8: Chhinnamastā, Dhūmāvatī & Bagalāmukhī',
        headingHi: '5. भाग II (ग) — महाविद्या ६, ७ एवं ८ का विस्तृत अध्ययन: छिन्नमस्ता, धूमावती एवं बगलामुखी',
        bodyEn:
          '6. CHHINNAMASTĀ (छिन्नमस्ता): (Identity & Theological Problem): Among the most visually startling Mahāvidyās, the self-decapitated Goddess brings together life, death, self-sacrifice, nourishment, and the circulation of vital power—posing the profound theological question of how the Divine Feminine simultaneously embodies self-sacrifice, destruction, nourishment, and sovereign power. (Iconography & Interpretive Themes): She stands holding her own severed head while three streams of blood spurting from her neck nourish her severed head and two flanking attendant figures (Dākinī and Varṇinī), often standing above a copulating couple (Kāma and Rati). Recurring interpretive themes include extreme self-sacrifice, vital nourishment, the refusal to separate life-sustaining and destructive dimensions of existence, and the paradox of selfhood and consciousness—distinguishing classical Tantric sources from modern psychological readings.\n\n7. DHŪMĀVATĪ (धूमावती): (Identity & Theological Significance): Connected with dhūma (smoke), Dhūmāvatī is unique in emphasizing old age, widowhood, poverty, hunger, isolation, and the absence of conventional auspiciousness—challenging religious aesthetics that restrict divine presence to youthful beauty, fertility, or material prosperity. (Iconography & Research Questions): Depicted as an elderly woman with disheveled hair, worn clothing, a winnowing basket (śūrpa), and a crow or crow-bannered chariot. Her imagery asks: What is sacred when conventional signs of prosperity disappear? Modern scholarship also traces historical shifts in Dhūmāvatī’s reception, ritual functions, and mythology across time.\n\n8. BAGALĀMUKHĪ (बगलामुखी · Bagalā): (Identity & Theological Significance): Associated with the power to arrest, restrain, immobilize, or silence (stambhana), Bagalāmukhī is famously portrayed controlling an adversary’s tongue—interrupting hostile speech and harmful action. (Iconography & Ritual Context): Depicted with yellow or golden coloration, yellow garments and ornaments, seated on a throne, grasping an adversary’s tongue while raising a club or weapon. While popular practice associates her with protection in disputes and against hostility, a scholarly archive presents such claims as traditional religious beliefs rather than independently verified guarantees, distinguishing early textual descriptions from later devotional practices.',
        bodyHi:
          '६. छिन्नमस्ता (Chhinnamastā): (स्वरूप एवं धर्मशास्त्रीय प्रश्न): सर्वाधिक विस्मयकारी प्रतिमा-विधान वाली स्व-शीर्षच्छेदिनी छिन्नमस्ता जीवन, मृत्यु, आत्म-त्याग, पोषण और प्राण-शक्ति के संचरण को एक साथ दर्शाती हैं—जो यह गहन प्रश्न खड़ा करता है कि देवी एक ही समय में आत्म-बलिदान, संहार, पोषण और संप्रभु सत्ता का प्रतिनिधित्व कैसे करती हैं। (प्रतिमाशास्त्र एवं व्याख्यात्मक विषय): वे अपना कटा हुआ मस्तक हाथ में लिए खड़ी हैं और उनके कण्ठ से निकलती तीन रक्त-धाराएँ उनके अपने मस्तक तथा दो सहचरियों (डाकिनी और वर्णिनी) का पोषण करती हैं; कई चित्रणों में उनके चरणों के नीचे काम-रति का युग्म होता है। इसके प्रमुख विषयों में आत्म-उत्सर्ग, प्राण-पोषण, जीवन और मृत्यु की अविभाज्यता तथा अहं व चेतना का विरोधाभास शामिल हैं (जहाँ मूल तांत्रिक स्रोतों को आधुनिक मनोवैज्ञानिक व्याख्याओं से अलग रखना आवश्यक है)।\n\n७. धूमावती (Dhūmāvatī): (स्वरूप एवं दार्शनिक महत्त्व): "धूम" (धुएँ) से संबद्ध धूमावती महाविद्या समूह में अत्यंत विलक्षण हैं क्योंकि उनका स्वरूप वृद्धावस्था, वैधव्य, दरिद्रता, क्षुधा, एकाकीपन और पारंपरिक मांगल्य के अभाव को दर्शाता है—जो इस धारणा को चुनौती देता है कि दिव्य उपस्थिति केवल यौवन, सौन्दर्य या भौतिक समृद्धि में ही हो सकती है। (प्रतिमाशास्त्र एवं शोध प्रश्न): बिखरे केश, जीर्ण वस्त्र, शूर्प (सूप) और कौवे (काक) के प्रतीक से युक्त वृद्धा के रूप में चित्रित धूमावती यह दार्शनिक प्रश्न उठाती हैं: जब लौकिक समृद्धि के सभी चिह्न मिट जाते हैं, तब पवित्र क्या है? आधुनिक शोध समय के साथ धूमावती की उपासना और उनके प्रति दृष्टिकोण में आए परिवर्तनों का भी अध्ययन करता है।\n\n८. बगलामुखी (Bagalāmukhī · बगला): (स्वरूप एवं स्तम्भन तत्त्व): रोकने, स्थिर करने, गतिहीन करने या मौन कर देने (स्तम्भन) की शक्ति से संबद्ध बगलामुखी की प्रतिमा में उन्हें विरोधी की जिह्वा पकड़कर नियंत्रित करते हुए दिखाया जाता है, जो आक्रामक वाणी और शत्रुतापूर्ण क्रिया के अवरोध का प्रतीक है। (प्रतिमाशास्त्र एवं अनुष्ठान संदर्भ): पीत (पीला/स्वर्ण) वर्ण, पीले वस्त्र एवं आभूषण, सिंहासन पर आसीन और हाथ में मुद्गर उठाए विरोधी की जिह्वा को नियंत्रित करने का दृश्य प्रमुख है। लोक-परंपरा में उन्हें विवादों और शत्रुता से रक्षा करने वाली देवी माना जाता है, जिसे अकादमिक अभिलेखागार में पारंपरिक धार्मिक आस्था और ग्रंथीय कथन के रूप में प्रस्तुत किया जाता है।'
      },
      {
        headingEn: '6. Part II (D) — Detailed Profiles of Mahāvidyās 9 & 10: Mātaṅgī (मातङ्गी) and Kamalā (कमला)',
        headingHi: '6. भाग II (घ) — महाविद्या ९ एवं १० का विस्तृत अध्ययन: मातङ्गी एवं कमला',
        bodyEn:
          '9. MĀTAṄGĪ (मातङ्गी): (Identity & Theological Significance): Associated with speech, music, learning, artistic expression, and knowledge, Mātaṅgī shares clear affinities with Sarasvatī yet possesses a distinct Tantric identity within the Mahāvidyā group. Several Mātaṅgī traditions engage directly with questions of ritual purity, social boundaries, and forms of knowledge marginalized by conventional social hierarchies. (Iconography, Speech & Social Context): Commonly depicted with a dark, emerald-greenish, or richly colored complexion, royal ornaments, a throne, a youthful appearance, and a vīṇā (lute) or multiple arms bearing symbolic attributes (such as a parrot). Her connection to speech spans spoken communication, musical creation, sacred mantra (vāk), and the relationship between knowledge and social authority. Ritual associations challenging conventional purity norms should always be cited to specific texts rather than generalized across all Mātaṅgī worship.\n\n10. KAMALĀ (कमला · Kamalātmikā): (Identity & Theological Significance): Most closely identified with Lakṣmī, Kamalā’s name derives from kamala (the lotus) and embodies prosperity, abundance, fertility, auspiciousness, beauty, and well-being. Her presence demonstrates that the ten Mahāvidyās are not restricted to fierce or unsettling forms, but encompass flourishing and material-spiritual harmony. (Iconography & Relationship with Lakṣmī): Depicted with a golden complexion, seated on a lotus, holding lotuses in her hands while elephants pour lustral water (abhiṣeka) over her, wearing royal ornaments with a serene expression. Her inclusion illustrates how the Mahāvidyā framework integrates established Goddess identities into a Tantric system and refutes any simplistic binary dividing the group into purely "fierce" versus purely "benevolent" deities.',
        bodyHi:
          '९. मातङ्गी (Mātaṅgī): (स्वरूप एवं धर्मशास्त्रीय महत्त्व): वाणी, संगीत, विद्या, कलात्मक अभिव्यक्ति और ज्ञान से संबद्ध मातङ्गी के कई लक्षण सरस्वती के समान हैं, तथापि महाविद्या समूह में उनका अपना विशिष्ट तांत्रिक व्यक्तित्व है। मातङ्गी से जुड़ी कुछ परंपराएँ शुद्धता-अशुद्धता, सामाजिक सीमाओं और समाज के हाशिये पर रखे गए ज्ञान के प्रश्नों से भी संवाद करती हैं। (प्रतिमाशास्त्र, वाक्-तत्त्व एवं सामाजिक संदर्भ): श्यामल या मरकत-हरित वर्ण, राजसी आभूषण, सिंहासन, तरुण आकृति और वीणा (अथवा तोते व अन्य प्रतीकों से युक्त बहुभुज रूप) उनके प्रमुख लक्षण हैं। वाणी के साथ उनका संबंध लौकिक भाषा, संगीत-सृजन, मन्त्र-वाक् और ज्ञान व सामाजिक अधिकार के अंतर्संबंध को दर्शाता है।\n\n१०. कमला (Kamalā · कमलात्मिका): (स्वरूप एवं धर्मशास्त्रीय महत्त्व): लक्ष्मी के साथ सर्वाधिक घनिष्ठ रूप से पहचानी जाने वाली कमला का नाम "कमल" (पद्म) से जुड़ा है और वे समृद्धि, प्रचुरता, उर्वरता, मांगल्य, सौन्दर्य और कल्याण की अधिष्ठात्री हैं। महाविद्या समूह में उनकी उपस्थिति सिद्ध करती है कि यह दश-मण्डल केवल उग्र या विस्मयकारी रूपों तक सीमित नहीं है, अपितु जीवन के उत्कर्ष और पोषण को भी समाहित करता है। (प्रतिमाशास्त्र एवं लक्ष्मी से संबंध): स्वर्ण आभा, पद्मासन, हाथों में कमल और गजों द्वारा जलाभिषेक (गजलक्ष्मी/कमला रूप) तथा शांत राजसी मुद्रा उनके प्रमुख लक्षण हैं। उनका समावेशन यह दिखाता है कि दशमहाविद्या को केवल "उग्र" बनाम "सौम्य" के सरलीकृत द्वन्द्व में नहीं बाँटा जा सकता।'
      },
      {
        headingEn: '7. Part III — Comparative Philosophy & Symbolism: Divine Unity, Fierce vs. Auspicious Forms & The Three Levels of Śakti',
        headingHi: '7. भाग III — तुलनात्मक दर्शन एवं प्रतीक-विधान: पराशक्ति का एकत्व, उग्र-सौम्य समन्वय एवं चर्चा के तीन स्तर',
        bodyEn:
          'A central philosophical question is whether the Mahāvidyās are ten independent deities or ten manifestations of a single supreme Goddess. Most Śākta accounts emphasize their ultimate unity—distinct in appearance, myth, and ritual identity, yet expressions of one supreme Śakti—though texts differ on whether Kālī, Tripurasundarī, or a broader conception of Mahādevī occupies the center (see the structured Comparative Table below for all ten themes and research questions). Similarly, while distinguishing "fierce" (ugra) and "auspicious/beautiful" (saumya) forms serves as a helpful initial guide, it is not an absolute division: Kālī is fierce in iconography yet worshipped as a loving mother; Tripurasundarī is radiantly beautiful yet belongs to a demanding Tantric discipline; Mātaṅgī combines artistic elegance with socially unconventional themes; and Kamalā embodies prosperity without being reducible to material wealth alone. In analyzing Śakti ("power, capacity, or divine energy" through which the cosmos appears), this archive strictly distinguishes three levels of discussion that interact but are not interchangeable: (1) Mythological: narratives about the Goddesses and their relationships; (2) Iconographic: visual forms, postures, attributes, and symbols; and (3) Philosophical: doctrinal explanations of reality, consciousness, and liberation.',
        bodyHi:
          'एक केंद्रीय दार्शनिक प्रश्न यह है कि क्या दशमहाविद्याएँ दस स्वतंत्र देवियाँ हैं या एक ही सर्वोच्च पराशक्ति की दस अभिव्यक्तियाँ। अधिकांश शाक्त ग्रन्थ उनके तात्त्विक एकत्व पर बल देते हैं—यद्यपि रूप, मिथक और पूजा-पद्धति में वे भिन्न हैं, तथापि वे एक ही सर्वोच्च शक्ति की अभिव्यक्तियाँ हैं (कुछ परंपराएँ काली को केंद्र में रखती हैं, तो कुछ त्रिपुरसुन्दरी या महादेवी को; दसों देवियों के केंद्रीय विषय और शोध-प्रश्नों के लिए नीचे दी गई तुलनात्मक तालिका देखें)। इसी प्रकार, "उग्र" और "सौम्य/मंगलमय" रूपों का भेद प्रारंभिक परिचय के लिए उपयोगी होते हुए भी पूर्णतः कठोर विभाजन नहीं है: काली प्रतिमा में उग्र होते हुए भी करुणामयी माँ के रूप में पूजित हैं; त्रिपुरसुन्दरी परम सौम्य दिखते हुए भी गहन तांत्रिक साधना से संबद्ध हैं; मातङ्गी ललित कलाओं के साथ सामाजिक सीमाओं के अतिक्रमण को जोड़ती हैं; और कमला केवल भौतिक धन तक सीमित न रहकर आध्यात्मिक ऐश्वर्य को भी दर्शाती हैं। "शक्ति" (दिव्य सामर्थ्य या चेतना की सृजन-ऊर्जा) के अध्ययन में यह अभिलेखागार चर्चा के तीन स्तरों में स्पष्ट अंतर रखता है: (१) पौराणिक/मिथकीय स्तर (कथाएँ और संबंध), (२) प्रतिमाशास्त्रीय स्तर (दृश्य रूप, मुद्राएँ, आयुध और प्रतीक), और (३) दार्शनिक स्तर (चेतना, जगत और मोक्ष से संबंधित सिद्धांत)।'
      },
      {
        headingEn: '8. Part IV & Part V — Textual Sources, Iconography as Historical Evidence, Ritual Tiers, Mantra–Yantra & Ethical Context',
        headingHi: '8. भाग IV एवं भाग V — शास्त्रीय स्रोत, ऐतिहासिक साक्ष्य के रूप में प्रतिमाशास्त्र, उपासना के स्तर, मन्त्र-यन्त्र एवं नैतिक संदर्भ',
        bodyEn:
          'The Mahāvidyās do not derive from a single uniform canon; their study requires cross-referencing modern academic studies—(1) David Kinsley’s Tantric Visions of the Divine Feminine: The Ten Mahavidyas (UC Press, 1997), (2) Jae-Eun Shin’s Change, Continuity and Complexity: The Mahavidyas in East Indian Sakta Traditions (Routledge), and (3) recent Journal of Hindu Studies scholarship on Tārā—with primary scriptural traditions: (4) the Devī Māhātmya (Mārkaṇḍeya Purāṇa) as foundational Goddess theology background, (5) the Mahābhāgavata Purāṇa for the Satī narrative, and (6) Tantric compendia including the Muṇḍamālā Tantra, Toḍala Tantra, Śaktisaṅgama Tantra, and Śāktapramoda. For every claim, archival practice records the text/author, edition/translator, chapter/verse, whether it is primary, commentary, or modern scholarship, and whether sources disagree. In treating iconography as historical evidence, each entry documents: (1) deity name and form, (2) object location/provenance, (3) approximate date and medium, (4) visible attributes, gestures, posture, and attendants, (5) interpretive textual/scholarly source, and (6) identification uncertainties (while never labeling AI-generated or modern illustrations as ancient artifacts). Regarding living worship, practices vary widely across lineages; the archive distinguishes four registers: (a) Public devotional practice (temples, festivals, hymns), (b) Textual ritual traditions (scriptural manuals), (c) Initiatory traditions (requiring a qualified teacher/dīkṣā), and (d) Contemporary interpretations. Mantra (sacred sonic formula) and yantra (ritual geometric diagram) vary by Goddess and lineage—no single yantra or mantra procedure is universal, and initiatory mantras are documented by source rather than presented for unrestricted popular use. Finally, the archive rejects sensationalized accounts of secrecy or transgressive ritual as representative of all Mahāvidyā worship, identifying supernatural claims as religious beliefs or textual assertions rather than independently verified facts.',
        bodyHi:
          'महाविद्याओं का इतिहास किसी एक एकल धर्मग्रंथ से नहीं निकलता; इसके प्रामाणिक अध्ययन में आधुनिक अकादमिक शोध—(१) डेविड किन्सले की पुस्तक Tantric Visions of the Divine Feminine: The Ten Mahavidyas (१९९७), (२) जे-युन शिन की पुस्तक Change, Continuity and Complexity: The Mahavidyas in East Indian Sakta Traditions (Routledge), और (३) तारा पर जर्नल ऑफ हिन्दू स्टडीज़ के शोध-पत्र—के साथ मूल शास्त्रीय स्रोतों—(४) देवी माहात्म्य (मार्कण्डेय पुराण), (५) महाभागवत पुराण, तथा (६) मुण्डमाला तन्त्र, तोडल तन्त्र, शक्तिसंगम तन्त्र और शाक्तप्रमोद—का समन्वित अध्ययन आवश्यक है। प्रत्येक प्रमुख तथ्य के लिए ग्रन्थ/लेखक का नाम, संस्करण/अनुवादक, अध्याय/श्लोक संख्या, प्राथमिक स्रोत बनाम आधुनिक शोध का भेद और विभिन्न स्रोतों के मतभेद दर्ज किए जाते हैं। ऐतिहासिक साक्ष्य के रूप में प्रतिमाओं का प्रलेखन करते समय ६ बिंदु आवश्यक हैं: (१) देवी का नाम व रूप, (२) प्राप्ति-स्थान व संग्रहालय/मंदिर संदर्भ, (३) अनुमानित काल व माध्यम, (४) दृश्य आयुध, मुद्रा व सहचर, (५) व्याख्या का ग्रंथीय आधार, और (६) पहचान की अनिश्चितताएँ (तथा आधुनिक या AI-जनित चित्रों को प्राचीन मूर्ति या पाण्डुलिपि से स्पष्टतः अलग रखना)। उपासना और जीवंत परंपराओं के संदर्भ में यह अभिलेखागार चार स्तरों में अंतर करता है: (क) सार्वजनिक भक्ति अभ्यास (मंदिर पूजा, पर्व, स्तोत्र), (ख) ग्रंथीय अनुष्ठान परंपराएँ, (ग) दीक्षा-आधारित (गुरु-गम्य) परंपराएँ, और (घ) समकालीन व्याख्याएँ। मन्त्र (पवित्र ध्वनि-सूत्र) और यन्त्र (ज्यामितीय आरेख) प्रत्येक महाविद्या और आम्नाय में भिन्न होते हैं। अंततः, यह अभिलेखागार तांत्रिक परंपराओं के सनसनीखेज चित्रण से बचते हुए चमत्कारिक दावों को स्वतंत्र वैज्ञानिक तथ्य के बजाय धार्मिक आस्था या ग्रंथीय कथन के रूप में स्पष्टतः चिह्नित करता है।'
      },
      {
        headingEn: '9. Part VI — The 10-Point Mahāvidyā Research Template, 7 Archive Categories & Final Research Notes',
        headingHi: '9. भाग VI — १०-सूत्रीय महाविद्या शोध-प्रारूप, ७ अभिलेखागार श्रेणियाँ एवं अंतिम शोध निष्कर्ष',
        bodyEn:
          'To navigate the collection systematically while preserving each Goddess’s distinct identity, this archive applies a standardized 10-Point Research Template to every Mahāvidyā: (01) Overview and terminology (Sanskrit name, transliteration, alternative names, definition), (02) Historical development (earliest evidence, regional history, changes over time), (03) Mythology and narratives (major stories, textual versions, theological interpretations), (04) Iconography (posture, color, attributes, attendants, documented variants), (05) Philosophy and symbolism (conceptual themes supported by specific sources), (06) Scriptures and manuscripts (primary texts, editions, translations, commentaries, citations), (07) Worship and ritual history (public practices and lineage-specific ritual contexts), (08) Temples and regional traditions (documented sites, historical connections, contemporary worship), (09) Comparative studies (connections with other Mahāvidyās and related traditions), and (10) Bibliography and evidence (source list, provenance, uncertainties, further reading). Across the wider portal, research is organized into 7 hierarchy categories: (1) The Ten Goddesses, (2) Origins and Historical Development, (3) Philosophy and Theology, (4) Iconography and Sacred Art, (5) Scriptures and Manuscripts, (6) Worship and Living Traditions, and (7) Comparative Research. Final Research Notes: Keep visible that (a) membership and order of the ten vary in some sources, (b) the tenfold group developed historically rather than appearing fully formed in the earliest texts of each Goddess, (c) each Goddess has an individual history extending beyond the group, (d) unity is explained differently across traditions, and (e) modern symbolic interpretations must be distinguished from historical scriptural evidence.',
        bodyHi:
          'प्रत्येक महाविद्या की विशिष्ट पहचान को सुरक्षित रखते हुए व्यवस्थित अध्ययन के लिए यह अभिलेखागार सभी दस देवियों पर १०-सूत्रीय मानक शोध-प्रारूप लागू करता है: (०१) परिचय एवं शब्दावली, (०२) ऐतिहासिक विकास, (०३) मिथक एवं आख्यान, (०४) प्रतिमाशास्त्र, (०५) दर्शन एवं प्रतीक-विधान, (०६) शास्त्र एवं पाण्डुलिपियाँ, (०७) उपासना एवं अनुष्ठान इतिहास, (०८) मंदिर एवं क्षेत्रीय परंपराएँ, (०९) तुलनात्मक अध्ययन, तथा (१०) संदर्भ-सूची एवं साक्ष्य समीक्षा। संपूर्ण महाविद्या अभिलेखागार को ७ मुख्य श्रेणियों में व्यवस्थित किया गया है: (१) दस देवियाँ (व्यक्तिगत प्रोफ़ाइल), (२) उत्पत्ति एवं ऐतिहासिक विकास, (३) दर्शन एवं धर्मशास्त्र, (४) प्रतिमाशास्त्र एवं पवित्र कला, (५) शास्त्र एवं पाण्डुलिपियाँ, (६) उपासना एवं जीवंत परंपराएँ, और (७) तुलनात्मक शोध। अंतिम शोध निष्कर्ष: एक विश्वसनीय अभिलेखागार के लिए ये भेद सदैव स्पष्ट रहने चाहिए—(क) दस की पारंपरिक सूची सर्वमान्य होते हुए भी कुछ स्रोतों में नाम और क्रम बदलते हैं, (ख) यह दश-समूह ऐतिहासिक रूप से विकसित हुआ है, (ग) प्रत्येक देवी का अपना स्वतंत्र इतिहास भी है, (घ) उनके एकत्व की व्याख्या विभिन्न परंपराओं में भिन्न प्रकार से की गई है, और (ङ) आधुनिक प्रतीकात्मक व्याख्याओं को ऐतिहासिक व ग्रंथीय प्रमाणों से पृथक चिह्नित किया जाना चाहिए।'
      }
    ],
    keyFindingsEn: [
      'Mahāvidyā (Mahā + Vidyā, "Great Wisdom") denotes divine liberating knowledge embodied in ten distinct Goddess manifestations—ranging from fierce and unsettling to royal, maternal, and auspicious.',
      'Historical synthesis bridges Kālīkula (eastern India) and Śrīkula / Śrīvidyā (South India & Kashmir), with Tārā occupying a pivotal historical nexus across Hindu and Buddhist traditions.',
      'Preserves detailed profiles of all 10 Mahāvidyās (Kālī, Tārā, Tripurasundarī, Bhuvaneśvarī, Tripurā Bhairavī, Chhinnamastā, Dhūmāvatī, Bagalāmukhī, Mātaṅgī, Kamalā) across mythological, iconographic, and philosophical levels.',
      'Applies a rigorous 6-point iconographic evidence protocol and a 10-point research framework grounded in David Kinsley, Jae-Eun Shin, Mahābhāgavata Purāṇa, Muṇḍamālā Tantra, Toḍala Tantra, Śaktisaṅgama Tantra, and Śāktapramoda.'
    ],
    keyFindingsHi: [
      'महाविद्या (महा + विद्या = "महान् ज्ञान/प्रज्ञा") पराशक्ति के उन दस विशिष्ट स्वरूपों का समूह है जो उग्र, सौम्य, राजसी, तपस्वी, विस्मयकारी और मंगलमय आयामों को एक साथ प्रस्तुत करते हैं।',
      'यह समूह ऐतिहासिक रूप से कालीकुल (पूर्वी भारत) और श्रीकुल/श्रीविद्या (दक्षिण भारत एवं कश्मीर) की धाराओं को एक साझा धर्मशास्त्रीय ढाँचे में जोड़ता है।',
      'दसों महाविद्याओं (काली, तारा, त्रिपुरसुन्दरी, भुवनेश्वरी, त्रिपुरभैरवी, छिन्नमस्ता, धूमावती, बगलामुखी, मातङ्गी, कमला) का स्वरूप, प्रतिमाशास्त्र, दार्शनिक विषय और शोध-प्रश्न विस्तार से प्रलेखित हैं।',
      'डेविड किन्सले, जे-युन शिन, महाभागवत पुराण, मुण्डमाला तन्त्र, तोडल तन्त्र, शक्तिसंगम तन्त्र और शाक्तप्रमोद के आधार पर १०-सूत्रीय मानक शोध-प्रारूप और साक्ष्य-प्रोटोकॉल स्थापित किया गया है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & IAST', labelHi: 'संस्कृत एवं IAST', valueEn: 'दशमहाविद्या · Daśa Mahāvidyā ("Ten Great Wisdom Goddesses")', valueHi: 'दशमहाविद्या · Daśa Mahāvidyā (दस महान् ज्ञान-देवियाँ)' },
      { labelEn: 'The Ten Goddesses', labelHi: 'दस महाविद्याएँ', valueEn: 'Kālī · Tārā · Tripurasundarī · Bhuvaneśvarī · Bhairavī · Chhinnamastā · Dhūmāvatī · Bagalāmukhī · Mātaṅgī · Kamalā', valueHi: 'काली · तारा · त्रिपुरसुन्दरी · भुवनेश्वरी · भैरवी · छिन्नमस्ता · धूमावती · बगलामुखी · मातङ्गी · कमला' },
      { labelEn: 'Primary Tantric & Purāṇic Texts', labelHi: 'प्रमुख तांत्रिक एवं पौराणिक स्रोत', valueEn: 'Muṇḍamālā Tantra · Toḍala Tantra · Śaktisaṅgama Tantra · Śāktapramoda · Mahābhāgavata Purāṇa · Devī Māhātmya', valueHi: 'मुण्डमाला तन्त्र · तोडल तन्त्र · शक्तिसंगम तन्त्र · शाक्तप्रमोद · महाभागवत पुराण · देवी माहात्म्य' },
      { labelEn: 'Key Academic Scholarship', labelHi: 'प्रमुख अकादमिक शोध संदर्भ', valueEn: 'David Kinsley (1997) · Jae-Eun Shin (2018) · Journal of Hindu Studies (Oxford Academic)', valueHi: 'David Kinsley (1997) · Jae-Eun Shin (2018) · Journal of Hindu Studies (Oxford Academic)' }
    ],
    primarySourcesEn: 'David Kinsley, Tantric Visions of the Divine Feminine: The Ten Mahavidyas (UC Press, 1997) · Jae-Eun Shin, Change, Continuity and Complexity: The Mahavidyas in East Indian Sakta Traditions (Routledge) · Muṇḍamālā Tantra · Toḍala Tantra · Śaktisaṅgama Tantra · Śāktapramoda · Mahābhāgavata Purāṇa · Devī Māhātmya · Journal of Hindu Studies (Oxford Academic)',
    primarySourcesHi: 'David Kinsley (Tantric Visions of the Divine Feminine: The Ten Mahavidyas) · Jae-Eun Shin (Change, Continuity and Complexity) · मुण्डमाला तन्त्र · तोडल तन्त्र · शक्तिसंगम तन्त्र · शाक्तप्रमोद · महाभागवत पुराण · देवी माहात्म्य · Journal of Hindu Studies',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'navadurga-nine-forms',
    categorySlug: 'eight-matrikas',
    code: 'SKT-03',
    titleEn: 'Navadurgā — The Nine Manifestations of Durgā in Purāṇic & Āgamic Tradition',
    titleHi: 'नवदुर्गा — पौराणिक एवं आगम परम्परा में भगवती दुर्गा के नौ स्वरूप',
    subtitleEn: 'Śailaputrī, Brahmacāriṇī, Candraghaṇṭā, Kūṣmāṇḍā, Skandamātā, Kātyāyanī, Kālarātri, Mahāgaurī & Siddhidātrī',
    subtitleHi: 'शैलपुत्री, ब्रह्मचारिणी, चन्द्रघण्टा, कूष्माण्डा, स्कन्दमाता, कात्यायनी, कालरात्रि, महागौरी एवं सिद्धिदात्री',
    sanskritEpigraph: '॥ प्रथमं शैलपुत्री च द्वितीयं ब्रह्मचारिणी। तृतीयं चन्द्रघण्टेति कूष्माण्डेति चतुर्थकम् ॥',
    epigraphTranslationEn: '"First is Śailaputrī, second Brahmacāriṇī, third Candraghaṇṭā, fourth Kūṣmāṇḍā, fifth Skandamātā, sixth Kātyāyanī, seventh Kālarātri, eighth Mahāgaurī, and ninth Siddhidātrī."',
    epigraphTranslationHi: '"प्रथम शैलपुत्री, द्वितीय ब्रह्मचारिणी, तृतीय चन्द्रघण्टा, चतुर्थ कूष्माण्डा, पंचम स्कन्दमाता, षष्ठ कात्यायनी, सप्तम कालरात्रि, अष्टम महागौरी और नवम सिद्धिदात्री हैं।"',
    evidenceBadgeEn: 'DEVI KAVACHA & PURĀṆIC LITURGY · NAVARĀTRI CYCLE',
    evidenceBadgeHi: 'देवी कवच एवं पौराणिक अनुष्ठान · नवरात्रि चक्र',
    accentColor: '#F59E0B',
    summaryEn:
      'Celebrated in the Devī Kavaca (an anga of the Devī Māhātmya / Mārkaṇḍeya Purāṇa corpus) and Skanda Purāṇa, the Navadurgā cycle charts a nine-stage ontological and contemplative progression—from earthly grounding as Śailaputrī ("Daughter of the Mountain") through fierce nocturnal purification (Kālarātri) to supreme bestowal of perfection (Siddhidātrī).',
    summaryHi:
      'दुर्गा सप्तशती के देवी कवच और स्कन्द पुराण में वर्णित नवदुर्गा चक्र साधना के नौ क्रमिक सोपानों को दर्शाता है—पृथ्वी तत्त्व से जुड़ी शैलपुत्री से आरंभ होकर कालरात्रि के तेजस्वी शोधन से गुजरते हुए सिद्धिदात्री के पूर्णत्व तक की यात्रा।',
    sections: [
      {
        headingEn: '1. The Ninefold Progression of Devī Kavaca',
        headingHi: '1. देवी कवच का नव-सोपान क्रम',
        bodyEn:
          'Unlike the battlefield-specificNavadurgā lists in certain South Indian Āgamas (such as Rudra-Caṇḍā, Pracaṇḍā, Caṇḍogrā, Caṇḍanāyikā, Caṇḍā, Caṇḍavatī, Caṇḍarūpā, Aticaṇḍikā, and Ugracaṇḍā in Agni Purāṇa Ch. 50), the pan-Indian Navarātri liturgical sequence follows the Devī Kavaca: Śailaputrī, Brahmacāriṇī, Candraghaṇṭā, Kūṣmāṇḍā, Skandamātā, Kātyāyanī, Kālarātri, Mahāgaurī, and Siddhidātrī.',
        bodyHi:
          'अग्नि पुराण (अध्याय ५०) में वर्णित युद्ध-मण्डल की नवदुर्गाओं (रुद्रचण्डा, प्रचण्डा, चण्डोग्रा आदि) के अतिरिक्त, अखिल भारतीय नवरात्रि उपासना में देवी कवच के नौ स्वरूपों—शैलपुत्री से सिद्धिदात्री—की आराधना की जाती है। काशी खण्ड में इन नौ दुर्गाओं के वाराणसी स्थित नौ स्वतंत्र मंदिरों की यात्रा का भी विधान है।'
      },
      {
        headingEn: '2. Relationship Between Navadurgā and Aṣṭa Mātṛkā',
        headingHi: '2. नवदुर्गा एवं अष्ट मातृका का पारस्परिक संबंध',
        bodyEn:
          'In the Devī Māhātmya (Chapters 8–10), the Aṣṭa Mātṛkās emanate directly from the body of Durgā (Ambikā/Caṇḍikā) and the devas to defeat Raktabīja, before re-merging into her singular form (“ahaṃ vibhūtyā bahubhir iha rūpair yadāsthitā”, DM 10.5). In Newar and Kāśī ritual geography, the eight Mātṛkās guard the eight directional perimeters while Navadurgā integrates the eight directions with the ninth central axis.',
        bodyHi:
          'देवी माहात्म्य (अध्याय ८-१०) में रक्तबीज के संहार हेतु अष्ट मातृकाएँ चण्डिका और देवों के तेज से प्रकट होती हैं और अंततः पुनः देवी के एकत्व में समाहित हो जाती हैं ("एकैवाहं जगत्यत्र द्वितीया का ममापरा")। अष्ट मातृकाएँ आठ दिशाओं की रक्षिका हैं और नवम केंद्र के साथ मिलकर नवदुर्गा मण्डल को पूर्ण करती हैं।'
      }
    ],
    keyFindingsEn: [
      'Two distinct textual registers exist: the Devī Kavaca ninefold contemplative sequence and the Agni Purāṇa Caṇḍā-group mandala.',
      'Kāśī Khaṇḍa maps nine living Navadurgā shrines across the sacred urban landscape of Varanasi.',
      'Integrates seamlessly with the 8 directional Mātṛkās plus the 9th central sovereign bindu (8 + 1 = 9).'
    ],
    keyFindingsHi: [
      'शास्त्रीय परंपरा में दो सूचियाँ मिलती हैं: देवी कवच की शैलपुत्री-आदि नवदुर्गा और अग्नि पुराण का उग्रचण्डा-आदि नवदुर्गा मण्डल।',
      'काशी खण्ड में वाराणसी के भीतर नौ जीवंत नवदुर्गा मंदिरों की परिक्रमा का प्राचीन विधान सुरक्षित है।',
      'अष्ट मातृकाओं की आठ दिशाएँ और नवम केंद्रीय बिंदु मिलकर (८ + १ = ९) पूर्ण मण्डल की रचना करते हैं।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Navadurgā (नवदुर्गा)', valueHi: 'नवदुर्गा' },
      { labelEn: 'Primary Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Devī Kavaca · Mārkaṇḍeya Purāṇa · Agni Purāṇa Ch. 50 · Kāśī Khaṇḍa', valueHi: 'देवी कवच · मार्कण्डेय पुराण · अग्नि पुराण · काशी खण्ड' },
      { labelEn: 'Liturgical Cycle', labelHi: 'आनुष्ठानिक चक्र', valueEn: 'Śāradīya & Vāsantika Navarātri (9 Nights)', valueHi: 'शारदीय एवं वासंतिक नवरात्रि' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Devī Māhātmya (Mārkaṇḍeya Purāṇa) · Devī Kavaca · Agni Purāṇa · Skanda Purāṇa (Kāśī Khaṇḍa)',
    primarySourcesHi: 'देवी माहात्म्य (मार्कण्डेय पुराण) · देवी कवच · अग्नि पुराण · स्कन्द पुराण (काशी खण्ड)',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'shakti-pithas-sacred-geography',
    categorySlug: 'eight-matrikas',
    code: 'SKT-04',
    titleEn: 'Śakti Pīṭhas — Sacred Geography, Catuṣpīṭha & the 51 Embodied Seats of the Goddess',
    titleHi: 'शक्तिपीठ — भगवती का पवित्र भूगोल, चतुष्पीठ एवं ५१ पीठों का मानचित्रण',
    subtitleEn: 'From the Early Tantric Four Pīṭhas (Oḍḍiyāna, Jālandhara, Pūrṇagiri, Kāmarūpa) to the Pīṭhanirṇaya 51-Shrine Network',
    subtitleHi: 'प्राचीन चतुष्पीठ (ओड्डियान, जालन्धर, पूर्णगिरि, कामरूप) से पीठनिर्णय के ५१ शक्तिपीठों और भैरव-युग्मों तक',
    sanskritEpigraph: '॥ ओड्डियानं प्रथमं पीठं द्वितीयं जालन्धरं तथा। तृतीयं पूर्णगिरिं वन्दे कामरूपं चतुर्थकम् ॥',
    epigraphTranslationEn: '"First is the seat of Oḍḍiyāna, second Jālandhara, third I bow to Pūrṇagiri, and fourth is Kāmarūpa—the four primordial Tantric Pīṭhas."',
    epigraphTranslationHi: '"प्रथम पीठ ओड्डियान, द्वितीय जालन्धर, तृतीय पूर्णगिरि और चतुर्थ कामरूप—ये आगम परम्परा के चार आदि पीठ हैं।"',
    evidenceBadgeEn: 'SACRED GEOGRAPHY · TEXTUAL & EPIGRAPHIC ARCHIVE',
    evidenceBadgeHi: 'पवित्र भूगोल · ग्रंथीय एवं पुरातात्विक अभिलेख',
    accentColor: '#10B981',
    summaryEn:
      'Traces the historical evolution of the Śakti Pīṭha network across the Indian subcontinent—from the earliest fourfold Tantric mandala (Catuṣpīṭha in Hevajra Tantra, Kubjikāmata, and Yoginīhṛdaya) to the 18, 51, and 108 Pīṭha catalogues of the Pīṭhanirṇaya (Mahāpīṭhanirūpaṇa), Devī Bhāgavata Purāṇa, and Kālikā Purāṇa, where every Goddess seat is paired with a guardian Bhairava.',
    summaryHi:
      'भारतीय उपमहाद्वीप में शक्तिपीठ नेटवर्क के ऐतिहासिक विकास का अध्ययन—कुब्जिकामत और योगिनीहृदय के प्राचीन "चतुष्पीठ" (४ आदि पीठ) से लेकर कालिका पुराण, देवी भागवत और पीठनिर्णय (महापीठनिरूपण) के १८, ५१ और १०८ शक्तिपीठों तक, जहाँ प्रत्येक शक्ति के साथ एक रक्षक भैरव प्रतिष्ठित हैं।',
    sections: [
      {
        headingEn: '1. The Primordial Four Pīṭhas (Catuṣpīṭha) in Early Kaula & Āgamic Literature',
        headingHi: '1. प्रारंभिक कौल एवं आगम साहित्य में आदि चतुष्पीठ',
        bodyEn:
          'Long before the later Purāṇic standardization of 51 Pīṭhas, early Śākta-Śaiva Tantras (such as the Kubjikāmata Tantra, Kaulajñānanirṇaya, and Yoginīhṛdaya) mapped four supreme directional seats (Catuṣpīṭha): Kāmarūpa (Assam), Pūrṇagiri (Western India/Maharashtra or Uttarakhand variants), Oḍḍiyāna (Swat Valley), and Jālandhara (Punjab/Himachal). These four seats were simultaneously geographical pilgrimage centers and subtle-body cakra stations inside the practitioner.',
        bodyHi:
          '५१ शक्तिपीठों की परवर्ती पौराणिक सूची से शताब्दियों पूर्व, प्रारंभिक शाक्त-शैव तन्त्रों (कुब्जिकामत तन्त्र, कौलज्ञाननिर्णय और योगिनीहृदय) में चार आदि पीठों (चतुष्पीठ) का वर्णन मिलता है: कामरूप, पूर्णगिरि, ओड्डियान और जालन्धर। ये चारों पीठ बाह्य भौगोलिक तीर्थ होने के साथ-साथ साधक के सूक्ष्म शरीर के आंतरिक चक्र-केंद्र भी माने गए हैं।'
      },
      {
        headingEn: '2. Dakṣa-Yajña Narrative, Mātṛkā-Varṇamālā & the 51 Pīṭhas',
        headingHi: '2. दक्ष-यज्ञ आख्यान, मातृका वर्णमाला एवं ५१ शक्तिपीठ',
        bodyEn:
          'In the Kālikā Purāṇa (Ch. 18), Devī Bhāgavata Purāṇa (7.30), and Kṛṣṇānanda’s Pīṭhanirṇaya (Mahāpīṭhanirūpaṇa), the terrestrial landmass of Bhārata is sanctified as the living body of Satī. The 51 Pīṭhas correspond to the 51 Sanskrit letters (Mātṛkā Varṇamālā from "A" to "Kṣa"), and at every Pīṭha, the Śakti (e.g., Kāmākhyā, Viśālākṣī, Kālīghāṭ, Jvālāmukhī, हिङ्गलाज) is inseparably accompanied by a Bhairava guardian (e.g., Umānanda, Kāla Bhairava, Nakuleśa, Unmatta Bhairava).',
        bodyHi:
          'कालिका पुराण, देवी भागवत और पीठनिर्णय (महापीठनिरूपण) में संपूर्ण उपमहाद्वीप को भगवती सती के जीवंत विग्रह के रूप में देखा गया है। ५१ शक्तिपीठ संस्कृत वर्णमाला के ५१ मातृका अक्षरों (अ से क्ष तक) के प्रतीक हैं, और प्रत्येक पीठ पर भगवती शक्ति के साथ एक भैरव रक्षक (जैसे कामाख्या में उमानन्द, काशी में विशालाक्षी के साथ कालभैरव) अनिवार्य रूप से विराजमान हैं।'
      }
    ],
    keyFindingsEn: [
      'Early Tantric layer: 4 Pīṭhas (Catuṣpīṭha) in Kubjikāmata & Yoginīhṛdaya; 18 Mahāpīṭhas in Aṣṭādaśa Śaktipīṭha Stotra.',
      'Classical Śākta synthesis: 51 Pīṭhas in Pīṭhanirṇaya corresponding to the 50/51 Mātṛkā Sanskrit phonemes; 108 Pīṭhas in Devī Bhāgavata (7.30).',
      'Every Śakti Pīṭha requires dual worship of the presiding Devī (Śakti) and her paired Kṣetrapāla Bhairava.'
    ],
    keyFindingsHi: [
      'प्रारंभिक तांत्रिक स्तर: कुब्जिकामत और योगिनीहृदय में ४ आदि पीठ (चतुष्पीठ); अष्टादश शक्तिपीठ स्तोत्र में १८ महापीठ।',
      'शास्त्रीय संश्लेषण: पीठनिर्णय में संस्कृत वर्णमाला के अक्षरों के अनुरूप ५१ पीठ; देवी भागवत (७.३०) में १०८ पीठों की नामावली।',
      'प्रत्येक शक्तिपीठ का विधान अधूरा माना जाता है जब तक वहाँ अधिष्ठात्री देवी के साथ उनके युग्मित भैरव का दर्शन न किया जाए।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Term', labelHi: 'संस्कृत संज्ञा', valueEn: 'Śakti Pīṭha & Catuṣpīṭha (शक्तिपीठ · चतुष्पीठ)', valueHi: 'शक्तिपीठ एवं चतुष्पीठ' },
      { labelEn: 'Primary Textual Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Kubjikāmata Tantra · Kālikā Purāṇa · Devī Bhāgavata · Pīṭhanirṇaya', valueHi: 'कुब्जिकामत तन्त्र · कालिका पुराण · देवी भागवत · पीठनिर्णय' },
      { labelEn: 'Linguistic Homology', labelHi: 'भाषावैज्ञानिक समरूपता', valueEn: '51 Pīṭhas = 51 Mātṛkā Letters (A–Kṣa)', valueHi: '५१ पीठ = ५१ मातृका अक्षर (अ–क्ष)' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Kubjikāmata Tantra · Kālikā Purāṇa (Ch. 18) · Devī Bhāgavata Purāṇa (7.30) · Pīṭhanirṇaya',
    primarySourcesHi: 'कुब्जिकामत तन्त्र · कालिका पुराण (अध्याय १८) · देवी भागवत पुराण (७.३०) · पीठनिर्णय',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  }
];

const ADDITIONAL_GATEWAY_ARTICLES: Record<string, ResearchArticle[]> = {
  'cags-field-archive': [
    {
      slug: 'agama-nigama-shastra-pramana',
      categorySlug: 'cags-field-archive',
      code: 'CAGS-06',
      titleEn: 'Veda, Āgama, Tantra & Purāṇa — Scriptural Pramāṇa & Source Taxonomy',
      titleHi: 'वेद, आगम, तन्त्र एवं पुराण — शास्त्रीय प्रमाण एवं स्रोत वर्गीकरण',
      subtitleEn: 'Methodological Framework for Distinguishing Śruti, Smṛti, Purāṇa, Śaiva-Śākta-Vaiṣṇava Āgamas, Epigraphy & Field Data',
      subtitleHi: 'श्रुति, स्मृति, पुराण, शैव-शाक्त-वैष्णव आगम, शिलालेख एवं क्षेत्रीय मापन के मध्य प्रामाणिक भेद की शोध-पद्धति',
      sanskritEpigraph: '॥ आगतं शिववक्त्रेभ्यो गतं च गिरिजाश्रुतौ। मतं च वासुदेवस्य तस्मादागम उच्यते ॥',
      epigraphTranslationEn: '"Proceeding from the mouth of Śiva, received by the ear of Girijā (Pārvatī), and approved by Vāsudeva—therefore it is called Āgama."',
      epigraphTranslationHi: '"शिव के मुख से निस्सृत, गिरिजा (पार्वती) द्वारा श्रुत और वासुदेव द्वारा अनुमोदित होने के कारण इसे आगम कहा जाता है।"',
      evidenceBadgeEn: 'PHILOLOGICAL METHODOLOGY · PRAMĀṆA TAXONOMY',
      evidenceBadgeHi: 'भाषावैज्ञानिक शोध-पद्धति · प्रमाण वर्गीकरण',
      accentColor: '#D4AF37',
      summaryEn:
        'Establishes the rigorous editorial and philological standards of the Seven Sacred Gateways archive: separating primary Sanskrit scriptural sources (Vedas, Upaniṣads, Purāṇas, Śaiva Āgamas, Śākta Tantras, Vaiṣṇava Saṃhitās) from archaeological epigraphy, living oral lineages, and contemporary symbolic or instrumentation models.',
      summaryHi:
        'सप्त ज्ञान-द्वार अभिलेखागार के कठोर संपादकीय मानदंडों को स्थापित करता है: मूल संस्कृत ग्रन्थों (वेद, उपनिषद्, पुराण, शैव आगम, शाक्त तन्त्र, वैष्णव संहिता) को पुरातात्विक शिलालेखों, जीवंत लोक-परंपराओं और आधुनिक प्रतीकात्मक/वैज्ञानिक मॉडलों से स्पष्ट रूप से पृथक एवं चिह्नित करना।',
      sections: [
        {
          headingEn: '1. Nigama (Vaidika) and Āgama (Tantric) Streams of Knowledge',
          headingHi: '1. निगम (वैदिक) और आगम (तांत्रिक) ज्ञान-प्रवाह',
          bodyEn:
            'In classical Indian intellectual history (as articulated by Kullūka Bhaṭṭa on Manusmṛti 2.1: "vaidikī tāntrikī caiva dvividhā कीर्तिता श्रुतिः"), revelation is examined across two great streams: Nigama (the four Vedas, Brāhmaṇas, Āraṇyakas, and Upaniṣads) and Āgama (the ritual, cosmological, and yogic manuals of Śaiva, Śākta, and Vaiṣṇava traditions, alongside Śilpa and Vāstu treatises).',
          bodyHi:
            'भारतीय बौद्धिक इतिहास में (मनुस्मृति २.१ पर कुल्लूक भट्ट की टीका: "वैदिकी तान्त्रिकी चैव द्विविधा कीर्तिता श्रुतिः") ज्ञान की दो प्रमुख धाराएँ हैं: निगम (चारों वेद, ब्राह्मण, आरण्यक और उपनिषद्) तथा आगम (शैव, शाक्त और वैष्णव परंपराओं के अनुष्ठान, यन्त्र, मण्डल एवं वास्तु-शिल्प ग्रन्थ)।'
        },
        {
          headingEn: '2. Four-Tier Evidence Classification Used Across This Archive',
          headingHi: '2. इस अभिलेखागार में प्रयुक्त चतुर्स्तरीय प्रमाण वर्गीकरण',
          bodyEn:
            'Every research gateway and monograph in this archive explicitly distinguishes: (A) Primary Scriptural Sources (Śāstra/Āgama/Purāṇa with text and chapter citations), (B) Archaeological, Epigraphic & Architectural Records (inscriptions, temple geometry, bronze iconography), (C) Living Regional & Liturgical Traditions (Kāśī pilgrimage circuits, Kāmākhyā and Newar lineages), and (D) Contemporary Analytical & Empirical Models (acoustic RT60 measurements, magnetometer surveys, and symbolic cybernetic state-spaces).',
          bodyHi:
            'इस अभिलेखागार का प्रत्येक लेख चार स्तरों को स्पष्ट रूप से चिह्नित करता है: (क) मूल शास्त्रीय स्रोत (अध्याय एवं ग्रन्थ संदर्भ सहित), (ख) पुरातात्विक एवं स्थापत्य साक्ष्य (शिलालेख, मंदिर ज्यामिति, कांस्य प्रतिमाएँ), (ग) जीवंत क्षेत्रीय अनुष्ठान परम्पराएँ, और (घ) आधुनिक आनुभविक मापन एवं प्रतीकात्मक विश्लेषण मॉडल।'
        }
      ],
      keyFindingsEn: [
        'Editorial categories (such as the Seven Sacred Gateways) are heuristic research structures, never conflated with a single ancient scriptural list.',
        'Sanskrit terms are presented with accurate Devanagari and IAST transliteration alongside bilingual English and Hindi commentary.',
        'Symbolic or scientific analogies (e.g., acoustic standing waves or binary 3-bit operators) are clearly labeled as modern interpretive lenses.'
      ],
      keyFindingsHi: [
        'सप्त ज्ञान-द्वार एक आधुनिक शोध-संपादकीय संरचना है, जिसे किसी एक प्राचीन शास्त्र की रूढ़ सूची के रूप में प्रस्तुत नहीं किया जाता।',
        'सभी संस्कृत संज्ञाएँ प्रामाणिक देवनागरी और लिप्यंतरण (IAST) के साथ द्विभाषी रूप में दी गई हैं।',
        'आधुनिक वैज्ञानिक मापन और प्रतीकात्मक मॉडलों को प्राचीन श्लोकों से स्पष्ट रूप से पृथक चिह्नित किया गया है।'
      ],
      metadata: [
        { labelEn: 'Archive Standard', labelHi: 'अभिलेखीय मानक', valueEn: 'Four-Tier Source & Evidence Register', valueHi: 'चतुर्स्तरीय स्रोत एवं प्रमाण पंजिका' },
        { labelEn: 'Primary Canons', labelHi: 'प्रमुख शास्त्र वर्ग', valueEn: 'Nigama (Veda/Upaniṣad) · Āgama (Śaiva/Śākta/Vaiṣṇava) · Purāṇa · Śilpa', valueHi: 'निगम (वेद/उपनिषद्) · आगम · पुराण · शिल्प-वास्तु' },
        { labelEn: 'Editorial Principle', labelHi: 'संपादकीय सिद्धांत', valueEn: 'Source-Conscious Philology & Empirical Measurement', valueHi: 'स्रोत-सचेत भाषाविज्ञान एवं आनुभविक मापन' },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Piṅgalāmata · Kulārṇava Tantra · Manusmṛti Bhāṣya (Kullūka Bhaṭṭa) · Mayamata',
      primarySourcesHi: 'पिङ्गलामत · कुलार्णव तन्त्र · मनुस्मृति भाष्य (कुल्लूक भट्ट) · मयमतम्',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार'
    },
    {
      slug: 'vaishnava-pancharatra-avatara-tattva',
      categorySlug: 'cags-field-archive',
      code: 'CAGS-07',
      titleEn: 'Vaiṣṇava Traditions: Pāñcarātra Āgama, Catur-Vyūha & Daśāvatāra Cosmology',
      titleHi: 'वैष्णव परम्परा: पाञ्चरात्र आगम, चतुर्व्यूह एवं दशावतार ब्रह्माण्ड-विज्ञान',
      subtitleEn: 'Nārāyaṇa-Viṣṇu Theology, Lakṣmī Tantra, Vaikhānasa Temple Liturgy & the Fourfold Vyūha Emanation',
      subtitleHi: 'नारायण-विष्णु तत्त्वज्ञान, लक्ष्मी तन्त्र, वैखानस मंदिर विधान एवं वासुदेव-संकर्षण-प्रद्युम्न-अनिरुद्ध चतुर्व्यूह',
      sanskritEpigraph: '॥ परो नारायणो देवस्तस्माज्जाश्चतुर्मुखः। वासुदेवः सङ्कर्षणः प्रद्युम्नश्चानिरुद्धकः ॥',
      epigraphTranslationEn: '"Supreme is Deva Nārāyaṇa; through the fourfold Vyūha emanation—Vāsudeva, Saṅkarṣaṇa, Pradyumna, and Aniruddha—the cosmos is sustained and ordered."',
      epigraphTranslationHi: '"भगवान् नारायण परम तत्त्व हैं; वासुदेव, संकर्षण, प्रद्युम्न और अनिरुद्ध—इस चतुर्व्यूह के माध्यम से सृष्टि का सृजन, पालन और नियमन होता है।"',
      evidenceBadgeEn: 'VAIṢṆAVA ĀGAMA · PĀÑCARĀTRA & PURĀṆIC CORPUS',
      evidenceBadgeHi: 'वैष्णव आगम · पाञ्चरात्र एवं पौराणिक संहिता',
      accentColor: '#38BDF8',
      summaryEn:
        'Examines the Āgamic and Purāṇic architecture of Vaiṣṇava traditions: the Pāñcarātra Saṃhitās (Jayākhya, Sāttvata, Pauṣkara, Ahirbudhnya Saṃhitā, and Lakṣmī Tantra), the Vaikhānasa temple corpus, the Catur-Vyūha cosmological emanation model, and the classical Daśāvatāra / Caturviṃśati (24) Avatāra taxonomies.',
      summaryHi:
        'वैष्णव परंपरा के आगम और पौराणिक स्थापत्य का गहन अध्ययन: पाञ्चरात्र संहिताएँ (जयाख्य, सात्त्वत, पौष्कर, अहिर्बुध्न्य संहिता एवं लक्ष्मी तन्त्र), वैखानस आगम, चतुर्व्यूह सृष्टि-सिद्धांत और दशावतार तथा चतुर्विंशति (२४) अवतारों का शास्त्रीय वर्गीकरण।',
      sections: [
        {
          headingEn: '1. Pāñcarātra Āgama & The Five Modes of Divine Manifestation',
          headingHi: '1. पाञ्चरात्र आगम एवं भगवान् के पाँच स्वरूप (पर, व्यूह, विभव, अन्तर्यामी, अर्चा)',
          bodyEn:
            'In the Pāñcarātra Āgama corpus—celebrated in the Mahābhārata (Nārāyaṇīya Parvan) and systematized by Yāmunācārya, Rāmānuja, and Vedānta Deśika—the Divine manifests across five ontological levels: (1) Para (transcendent Vāsudeva-Nārāyaṇa in Vaikuṇṭha), (2) Vyūha (the fourfold cosmic operators: Vāsudeva, Saṅkarṣaṇa, Pradyumna, and Aniruddha governing jñāna, bala, aiśvarya, vīrya, śakti, and tejas), (3) Vibhava (the Avatāra descents including the classical Daśāvatāra), (4) Antaryāmin (the indwelling witness in the heart), and (5) Arcā (the consecrated temple icon).',
          bodyHi:
            'पाञ्चरात्र आगम संहिताओं (सात्त्वत, जयाख्य, पौष्कर और अहिर्बुध्न्य संहिता) में परब्रह्म के पाँच अभिव्यक्ति-स्तर (पञ्च-प्रकार) वर्णित हैं: (१) पर (वैकुण्ठ-स्थ परम रूप), (२) व्यूह (वासुदेव, संकर्षण, प्रद्युम्न और अनिरुद्ध—षड्गुणों के संचालक), (३) विभव (मत्स्य, कूर्म, वराह, नृसिंह आदि अवतार), (४) अन्तर्यामी (हृदय-स्थित साक्षी), और (५) अर्चा (मंदिर में प्रतिष्ठित विग्रह)।'
        },
        {
          headingEn: '2. Lakṣmī Tantra & Vaiṣṇava-Śākta Intersections',
          headingHi: '2. लक्ष्मी तन्त्र एवं वैष्णव-शाक्त समन्वय',
          bodyEn:
            'The Lakṣmī Tantra and Ahirbudhnya Saṃhitā demonstrate profound structural dialogue between Pāñcarātra Vaiṣṇavism and Śākta-Śaiva Tantric cosmology: Lakṣmī (Śrī) is expounded as the dynamic Kriyā-śakti and Sudarśana as the cosmic will (Icchā-śakti) of Nārāyaṇa, while Vaiṣṇavī and Vārāhī occupy key positions within the Aṣṭa Mātṛkā mandala.',
          bodyHi:
            'लक्ष्मी तन्त्र और अहिर्बुध्न्य संहिता पाञ्चरात्र वैष्णव दर्शन और तांत्रिक ब्रह्माण्ड-विज्ञान के गहन संवाद को दर्शाते हैं, जहाँ महालक्ष्मी (श्री) नारायण की क्रिया-शक्ति और सुदर्शन चक्र इच्छा-शक्ति के रूप में वर्णित हैं, तथा वैष्णवी और वाराही अष्ट-मातृका मण्डल के प्रमुख स्तंभ हैं।'
        }
      ],
      keyFindingsEn: [
        'Three jewel-texts (Ratnatraya) of Pāñcarātra: Sāttvata, Pauṣkara, and Jayākhya Saṃhitās.',
        'Daśāvatāra (Matsya, Kūrma, Varāha, Narasiṃha, Vāmana, Paraśurāma, Rāma, Kṛṣṇa/Balarāma, Buddha, Kalki) coexists with the 24 Vibhava-Avatāra list in the Bhāgavata Purāṇa.',
        'Arcā-avatāra theology governs temple consecration (prāṇa-pratiṣṭhā) and Vāstu-maṇḍala geometry in Vaikhānasa and Pāñcarātra shrines.'
      ],
      keyFindingsHi: [
        'पाञ्चरात्र आगम के "रत्नत्रय" ग्रन्थ: सात्त्वत संहिता, पौष्कर संहिता और जयाख्य संहिता।',
        'दशावतार के साथ-साथ श्रीमद्भागवत पुराण में २४ विभव-अवतारों का विस्तृत शास्त्रीय वर्णन प्राप्त होता है।',
        'वैखानस और पाञ्चरात्र आगम मंदिर स्थापत्य, वास्तु-मण्डल और अर्चा-विग्रह की प्राण-प्रतिष्ठा के मूल आधार हैं।'
      ],
      metadata: [
        { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Pāñcarātra, Vaikhānasa & Avatāra Tattva', valueHi: 'पाञ्चरात्र, वैखानस एवं अवतार तत्त्व' },
        { labelEn: 'Core Texts', labelHi: 'मूल ग्रन्थ', valueEn: 'Ahirbudhnya Saṃhitā · Lakṣmī Tantra · Jayākhya Saṃhitā · Bhāgavata Purāṇa', valueHi: 'अहिर्बुध्न्य संहिता · लक्ष्मी तन्त्र · जयाख्य संहिता · भागवत पुराण' },
        { labelEn: 'Six Divine Qualities', labelHi: 'षड्-भगवद्गुण', valueEn: 'Jñāna, Bala, Aiśvarya, Vīrya, Śakti, Tejas', valueHi: 'ज्ञान, बल, ऐश्वर्य, वीर्य, शक्ति, तेजस्' },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Ahirbudhnya Saṃhitā · Lakṣmī Tantra · Sāttvata Saṃhitā · Bhāgavata Purāṇa · Viṣṇu Purāṇa',
      primarySourcesHi: 'अहिर्बुध्न्य संहिता · लक्ष्मी तन्त्र · सात्त्वत संहिता · श्रीमद्भागवत पुराण · विष्णु पुराण',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार'
    }
  ],
  'ashta-bhairava': [
    {
      slug: 'trika-shaiva-agama-cosmology',
      categorySlug: 'ashta-bhairava',
      code: 'AB-09',
      titleEn: 'Śiva Tattva: Rudra-Śiva, the 28 Śaiva Āgamas & Kashmir Trika Philosophy',
      titleHi: 'शिव तत्त्व: रुद्र-शिव, २८ शैव आगम एवं कश्मीर त्रिक प्रत्यभिज्ञा दर्शन',
      subtitleEn: 'From Vedic Rudra and the Śvetāśvatara Upaniṣad to Śaiva Siddhānta, Svacchanda Tantra & Abhinavagupta’s Tantrāloka',
      subtitleHi: 'वैदिक रुद्र एवं श्वेताश्वतर उपनिषद् से शैव सिद्धान्त, स्वच्छन्द तन्त्र और अभिनवगुप्त के तन्त्रालोक तक',
      sanskritEpigraph: '॥ चितिः स्वतन्त्रा विश्वसिद्धिहेतुः। शिवः शक्त्या युक्तो यदि भवति शक्तः प्रभवितुम् ॥',
      epigraphTranslationEn: '"Autonomous Consciousness (Citi) is the cause of the manifestation of the universe (Pratyabhijñāhṛdayam 1). United with Śakti, Śiva possesses the power to create."',
      epigraphTranslationHi: '"स्वतंत्र चिति (चेतना) ही विश्व की सिद्धि का कारण है (प्रत्यभिज्ञाहृदयम् १)। शक्ति से युक्त होकर ही शिव सृजन में समर्थ होते हैं।"',
      evidenceBadgeEn: 'PRIMARY ŚAIVA ĀGAMA & TRIKA CORPUS',
      evidenceBadgeHi: 'मूल शैव आगम एवं त्रिक दर्शन संहिता',
      accentColor: '#FFBF38',
      summaryEn:
        'Synthesizes the textual and philosophical architecture of the Śaiva tradition—tracing the continuity and divergence between dualist/pluralist Śaiva Siddhānta (28 Mūlāgamas), the Bhairava Tantras (Svacchanda Tantra, Netra Tantra, Vijñānabhairava), and non-dual Kashmir Trika-Pratyabhijñā philosophy (Vasugupta, Utpaladeva, Abhinavagupta, Kṣemarāja).',
      summaryHi:
        'शैव परंपरा के ग्रंथीय और दार्शनिक स्थापत्य का संश्लेषण—२८ मूल शैव आगमों (शैव सिद्धान्त), भैरव तन्त्रों (स्वच्छन्द तन्त्र, नेत्र तन्त्र, विज्ञानभैरव) और अद्वैत कश्मीर शैव/त्रिक दर्शन (वसुगुप्त, उत्पलदेव, अभिनवगुप्त, क्षेमराज) के अंतर्संबंधों का विश्लेषण।',
      sections: [
        {
          headingEn: '1. The Five Streams (Pañcasrotas) & 28 Siddhānta Āgamas vs. 64 Bhairava Āgamas',
          headingHi: '1. पञ्चस्रोतस्: २८ शैव सिद्धान्त आगम एवं ६४ भैरव आगम',
          bodyEn:
            'Classical Śaiva taxonomy classifies scriptural revelation as emerging from the five faces of Sadāśiva (Īśāna, Tatpuruṣa, Aghora, Vāmadeva, Sadyojāta). The 28 Śaiva Siddhānta Āgamas (beginning with Kāmika, Yogaja, Cintya, Kāraṇa, Ajita) govern temple architecture, liṅga consecration, and caryā-kriyā-yoga-jñāna, whereas the 64 Bhairava Tantras (grouped into 8 octads in the Śrīkaṇṭhīyasaṃhitā) explore non-dual interiorized yoga and the Aṣṭa Bhairava mandala.',
          bodyHi:
            'शास्त्रीय शैव वर्गीकरण के अनुसार सदाशिव के पाँच मुखों (ईशान, तत्पुरुष, अघोर, वामदेव, सद्योजात) से आगमों का प्राकट्य हुआ। २८ शैव सिद्धान्त आगम (कामिक, योगज, चिन्त्य, कारण, अजित आदि) मंदिर वास्तु, लिंग-प्रतिष्ठा और चर्या-क्रिया-योग-ज्ञान का विधान करते हैं, जबकि ६४ भैरव आगम (श्रीकण्ठीयसंहिता के अष्टक) अद्वैत योग और अष्ट-भैरव मण्डल का प्रतिपादन करते हैं।'
        },
        {
          headingEn: '2. The 36 Tattvas & Pañca-kṛtya (Five Cosmic Acts)',
          headingHi: '2. ३६ तत्त्व एवं पञ्च-कृत्य (सृष्टि, स्थिति, संहार, तिरोधान, अनुग्रह)',
          bodyEn:
            'Expanding the 25 tattvas of Sāṃkhya by adding 11 higher Śaiva tattvas (Māyā, the five Kañcukas, Śuddhavidyā, Īśvara, Sadāśiva, Śakti, and Śiva), Śaiva ontology maps how supreme Prakāśa-Vimarśa enacts the five continuous cosmic acts: Sṛṣṭi (emanation), Sthiti (maintenance), Saṃhāra (reabsorption), Tirodhāna (veiling/self-concealment), and Anugraha (liberating grace).',
          bodyHi:
            'सांख्य के २५ तत्त्वों से ऊपर ११ उच्च शैव तत्त्वों (माया, पञ्च-कञ्चुक, शुद्धविद्या, ईश्वर, सदाशिव, शक्ति और शिव) को जोड़कर शैव दर्शन ३६ तत्त्वों की व्यवस्था देता है, जिसमें परम शिव-शक्ति निरंतर पञ्च-कृत्य—सृष्टि, स्थिति, संहार, तिरोधान और अनुग्रह—का संचालन करते हैं।'
        }
      ],
      keyFindingsEn: [
        '28 Siddhānta Āgamas (10 Śivabheda + 18 Rudrabheda) form the liturgical spine of South Indian and Himalayan Śaiva temple architecture.',
        '64 Bhairava Tantras (including Svacchanda, Mālinīvijayottara, and Vijñānabhairava) anchor the non-dual Trika and Kaula traditions.',
        'The 36-Tattva hierarchy bridges transcendent consciousness (Śiva-Śakti) with embodied matter (Pṛthivī).'
      ],
      keyFindingsHi: [
        '२८ शैव सिद्धान्त आगम (१० शिवभेद + १८ रुद्रभेद) मंदिर स्थापत्य और पूजा विधान के मूल आधार हैं।',
        '६४ भैरव तन्त्र (स्वच्छन्द तन्त्र, मालिनीविजयोत्तर और विज्ञानभैरव सहित) अद्वैत त्रिक और कौल परंपरा के आधारस्तंभ हैं।',
        '३६ तत्त्वों का सोपान परम शिव-शक्ति से लेकर पृथ्वी तत्त्व तक चेतना के अवतरण और प्रत्याभिज्ञा को स्पष्ट करता है।'
      ],
      metadata: [
        { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Śaiva Siddhānta, Bhairava Āgama & Trika', valueHi: 'शैव सिद्धान्त, भैरव आगम एवं त्रिक दर्शन' },
        { labelEn: 'Ontological Hierarchy', labelHi: 'तात्त्विक सोपान', valueEn: '36 Tattvas (Śiva to Pṛthivī) · Pañca-kṛtya', valueHi: '३६ तत्त्व (शिव से पृथ्वी पर्यन्त) · पञ्च-कृत्य' },
        { labelEn: 'Primary Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Kāmikāgama · Svacchanda Tantra · Tantrāloka · Pratyabhijñāhṛdayam', valueHi: 'कामिकागम · स्वच्छन्द तन्त्र · तन्त्रालोक · प्रत्यभिज्ञाहृदयम्' },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Kāmikāgama · Svacchanda Tantra · Vijñānabhairava · Tantrāloka (Abhinavagupta) · Pratyabhijñāhṛdayam (Kṣemarāja)',
      primarySourcesHi: 'कामिकागम · स्वच्छन्द तन्त्र · विज्ञानभैरव · तन्त्रालोक (अभिनवगुप्त) · प्रत्यभिज्ञाहृदयम् (क्षेमराज)',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार'
    }
  ],
  '64-yogini-matrix': [
    {
      slug: 'hypaethral-chausath-yogini-temples',
      categorySlug: '64-yogini-matrix',
      code: 'YM-09',
      titleEn: 'Catuḥṣaṣṭi Yoginī — Hypaethral Circular Temples of Hirapur, Bhedaghat, Mitauli & Ranipur-Jharial',
      titleHi: 'चतुःषष्टि योगिनी — हीरापुर, भेड़ाघाट, मितावली एवं रानीपुर-झरियाल के वृत्ताकार मंदिर',
      subtitleEn: 'Archaeological Architecture, Open-to-Sky (Ākāśa) Lithic Mandalas & Kaula Textual Correspondences (9th–12th Century CE)',
      subtitleHi: '९वीं से १२वीं शताब्दी के आकाश-उन्मुख वृत्ताकार योगिनी मंदिरों का स्थापत्य, पुरातत्व एवं कौल ग्रंथीय सह-संबंध',
      sanskritEpigraph: '॥ अष्टमातृकाप्रसूताश्चतुःषष्टियोगिनीगणाः। चक्रमध्ये स्थितो देवो भैरवः सर्वनायकः ॥',
      epigraphTranslationEn: '"Emanating from the Eight Mātṛkās are the hosts of Sixty-Four Yoginīs; in the center of their circular wheel stands Deva Bhairava, Sovereign of All."',
      epigraphTranslationHi: '"अष्ट मातृकाओं से प्रकट हुईं चौंसठ योगिनियों के समूह वृत्ताकार चक्र में स्थित हैं, और उस चक्र के केंद्र में सर्वनायक भैरव विराजमान हैं।"',
      evidenceBadgeEn: 'ARCHAEOLOGICAL & ARCHITECTURAL SURVEY · 9TH–12TH C. CE',
      evidenceBadgeHi: 'पुरातात्विक एवं स्थापत्य सर्वेक्षण · ९वीं–१२वीं शताब्दी',
      accentColor: '#F59E0B',
      summaryEn:
        'An architectural and epigraphic study of India’s surviving hypaethral (open-to-the-sky, circular) Chausath Yogini temples—including Hirapur and Ranipur-Jharial in Odisha, and Bhedaghat, Mitauli (Ekattarso Mahadeva), Khajuraho, and Dudhai in Central India—comparing their 64 perimeter shrines and central Śiva-Bhairava pavilions with the Kaulajñānanirṇaya, Agni Purāṇa, and Śrīmatottara Tantra.',
      summaryHi:
        'भारत के जीवित खुले आकाश वाले (हाइपेथ्रल/वृत्ताकार) चौंसठ योगिनी मंदिरों—हीरापुर और रानीपुर-झरियाल (ओडिशा) तथा भेड़ाघाट, मितावली, खजुराहो और दुधई (मध्य भारत)—का पुरातात्विक एवं स्थापत्य अध्ययन, जो उनकी ६४ परिधि-आलाओं और केंद्रीय भैरव-मंडप की कौलज्ञाननिर्णय और अग्नि पुराण से तुलना करता है।',
      sections: [
        {
          headingEn: '1. Hypaethral (Open-to-Sky) Circular Geometry & Central Bhairava Axis',
          headingHi: '1. आकाश-उन्मुख वृत्ताकार स्थापत्य एवं केंद्रीय भैरव मण्डप',
          bodyEn:
            'Unlike standard nāgara or drāviḍa roofed sanctums, Chausath Yogini temples (9th–12th century CE, patronized under Somavaṃśī, Bhauma-Kara, Candella, and Kacchapaghāta dynasties) are constructed as roofless circular enclosures (cakra) with 64 inward-facing perimeter niches surrounding an open central pavilion dedicated to Śiva/Bhairava (such as the Ekapāda Bhairava / Caṇḍīśa shrine at Hirapur and Ranipur-Jharial).',
          bodyHi:
            'सामान्य शिखर-युक्त मंदिरों से भिन्न, ९वीं से १२वीं शताब्दी के मध्य निर्मित चौंसठ योगिनी मंदिर छत-विहीन वृत्ताकार प्राचीर (चक्र) के रूप में निर्मित हैं, जिनकी आंतरिक दीवार में ६४ देवकुलिकाएँ केंद्र की ओर उन्मुख होती हैं और केंद्र में शिव/भैरव (जैसे हीरापुर और रानीपुर-झरियाल में एकपाद भैरव/नटराज) का खुला मण्डप स्थित होता है।'
        },
        {
          headingEn: '2. Inscriptional Name Lists vs. Agni Purāṇa & Skanda Purāṇa Taxonomies',
          headingHi: '2. अभिलेखीय नामावली बनाम अग्नि पुराण एवं काशी खण्ड की सूचियाँ',
          bodyEn:
            'At Bhedaghat (Jabalpur), pedestal inscriptions preserve 81 Yoginī-Mātṛkā names carved in 10th-century Devanagari/Nagari script, while Hirapur preserves 64 exquisitely carved chlorite-stone Yoginīs with distinct vāhanas, plus 9 Kātyāyanīs and 4 Bhairavas on the outer facade. This demonstrates that regional temple architects adapted the canonical 8 × 8 (64) and 9 × 9 (81) mandala grids to local royal and Kaula lineages.',
          bodyHi:
            'भेड़ाघाट (जबलपुर) में पाद-पीठों पर १०वीं शताब्दी के अभिलेखों में ८१ योगिनी-मातृका नाम उत्कीर्ण हैं, जबकि हीरापुर (भुवनेश्वर) में क्लोराइट पत्थर की ६४ अत्यंत सूक्ष्म योगिनी प्रतिमाएँ अपने विशिष्ट वाहनों के साथ सुरक्षित हैं। यह सिद्ध करता है कि स्थापत्यकारों ने ८×८ (६४) और ९×९ (८१) के वास्तु-चक्रों को आगम विधान के अनुसार साकार किया था।'
        }
      ],
      keyFindingsEn: [
        'Surviving circular 64-Yogini sanctuaries: Hirapur (Odisha), Ranipur-Jharial (Odisha), Mitauli (Morena, MP), Bhedaghat (Jabalpur, MP — 81 niches), and rectangular Khajuraho.',
        'Spatial architecture directly materializes the 8 Mātṛkās × 8 Yoginī-flocks (64) surrounding the central Bhairava bindu.',
        'Open-to-sky (ākāśa-mukha) design aligns nocturnal liturgy with lunar tithis and stellar nakṣatra transits.'
      ],
      keyFindingsHi: [
        'प्रमुख जीवित चौंसठ योगिनी मंदिर: हीरापुर और रानीपुर-झरियाल (ओडिशा), मितावली और भेड़ाघाट (मध्य प्रदेश) तथा खजुराहो।',
        'मंदिर की वृत्ताकार संरचना सीधे तौर पर केंद्रीय भैरव बिन्दु के चारों ओर ८ मातृका × ८ अष्टक = ६४ योगिनी चक्र को पत्थर में साकार करती है।',
        'छत-विहीन (आकाश-उन्मुख) स्थापत्य रात्रिकालीन तिथि और नक्षत्र संरेखण के लिए निर्मित किया गया था।'
      ],
      metadata: [
        { labelEn: 'Sanskrit Term', labelHi: 'संस्कृत संज्ञा', valueEn: 'Catuḥṣaṣṭi Yoginī Cakra (चतुःषष्टि योगिनी चक्र)', valueHi: 'चतुःषष्टि योगिनी चक्र' },
        { labelEn: 'Key Archaeological Sites', labelHi: 'प्रमुख पुरातात्विक स्थल', valueEn: 'Hirapur · Bhedaghat · Mitauli · Ranipur-Jharial · Khajuraho', valueHi: 'हीरापुर · भेड़ाघाट · मितावली · रानीपुर-झरियाल · खजुराहो' },
        { labelEn: 'Primary Textual Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Kaulajñānanirṇaya · Śrīmatottara Tantra · Agni Purāṇa Ch. 52', valueHi: 'कौलज्ञाननिर्णय · श्रीमतोत्तर तन्त्र · अग्नि पुराण (अध्याय ५२)' },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Kaulajñānanirṇaya (Matsyendranātha) · Agni Purāṇa (Ch. 52 & 146) · Skanda Purāṇa (Kāśī Khaṇḍa Ch. 45) · ASI Epigraphia Indica',
      primarySourcesHi: 'कौलज्ञाननिर्णय (मत्स्येन्द्रनाथ) · अग्नि पुराण (अध्याय ५२ एवं १४६) · स्कन्द पुराण (काशी खण्ड ४५) · भारतीय पुरातत्व सर्वेक्षण अभिलेख',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार'
    }
  ],
  'shri-meru-chakra': [
    {
      slug: 'matrika-varnamala-shat-chakra',
      categorySlug: 'shri-meru-chakra',
      code: 'AV-10',
      titleEn: 'Mantra, Yantra & Ṣaṭ-Cakra — Mātṛkā Varṇamālā, Bīja Phonemics & Subtle Anatomy',
      titleHi: 'मन्त्र, यन्त्र एवं षट्चक्र — मातृका वर्णमाला, बीज-मन्त्र एवं सूक्ष्म-शरीर विज्ञान',
      subtitleEn: 'How the 50/51 Sanskrit Phonemes (A–Kṣa) Inscribe the Petals of the Six Yogic Cakras and the Enclosures of the Śrī Meru Yantra',
      subtitleHi: 'संस्कृत वर्णमाला के ५०/५१ मातृका अक्षरों (अ–क्ष) का षट्चक्र दलों और श्रीमेरु यन्त्र के आवरणों में न्यास विधान',
      sanskritEpigraph: '॥ अकारादिक्षकारान्ता मातृका वर्णरूपिणी। षट्चक्रदलसंस्थाना श्रीयन्त्रे समवस्थिता ॥',
      epigraphTranslationEn: '"From the syllable A to Kṣa, the Divine Mother abides in the form of the Mātṛkā phonemes—distributed across the petals of the six cakras and enthroned within the Śrī Yantra."',
      epigraphTranslationHi: '"अकार से क्षकार पर्यन्त वर्ण-रूपिणी मातृका शक्ति षट्चक्र के कमलों के दलों में और श्रीयन्त्र के आवरणों में सम्यक् रूप से अधिष्ठित हैं।"',
      evidenceBadgeEn: 'MANTRA-ŚĀSTRA & SUBTLE ANATOMY · ṢAṬ-CAKRA-NIRŪPAṆA',
      evidenceBadgeHi: 'मन्त्र-शास्त्र एवं सूक्ष्म-शरीर विज्ञान · षट्चक्रनिरूपण',
      accentColor: '#FBBF24',
      summaryEn:
        'Examines the structural unity of Mantra (sonic vibration), Yantra (geometric diagram), and Tantra (subtle-body nyāsa) in the Śāradā Tilaka, Prapañcasāra Tantra, Yoginīhṛdaya, and Pūrṇānanda’s Ṣaṭ-cakra-nirūpaṇa—showing how the 50 Sanskrit Mātṛkā letters are systematically distributed across the 4, 6, 10, 12, 16, and 2 petals of the six cakras (4 + 6 + 10 + 12 + 16 + 2 = 50).',
      summaryHi:
        'शारदातिलक, प्रपञ्चसार तन्त्र, योगिनीहृदय और पूर्णानन्द कृत षट्चक्रनिरूपण के आधार पर मन्त्र (ध्वनि), यन्त्र (ज्यामिति) और सूक्ष्म-शरीर (षट्चक्र) की एकता का विश्लेषण—जहाँ संस्कृत के ५० मातृका अक्षर मूलाधार से आज्ञा चक्र के दलों (४ + ६ + १० + १२ + १६ + २ = ५०) में सटीक गणितीय क्रम से विन्यस्त हैं।',
      sections: [
        {
          headingEn: '1. Exact Mathematical Partition of the 50 Mātṛkā Letters Across the Six Cakras',
          headingHi: '1. षट्चक्र के ५० कमल-दलों में ५० मातृका अक्षरों का गणितीय विभाजन',
          bodyEn:
            'In classical Tantric subtle anatomy (Kubjikāmata, Śāradā Tilaka, and Ṣaṭ-cakra-nirūpaṇa), the 50 Sanskrit phonemes are not arbitrary labels; their exact count determines the petal geometry of the six vertical lotus centers along the Suṣumṇā axis: Viśuddha (16 petals = 16 vowels from a to aḥ), Anāhata (12 petals = consonants ka to ṭha), Maṇipūra (10 petals = ḍa to pha), Svādhiṣṭhāna (6 petals = ba to la), Mūlādhāra (4 petals = va, śa, ṣa, sa), and Ājñā (2 petals = ha and kṣa). The sum is exactly 16 + 12 + 10 + 6 + 4 + 2 = 50, multiplied twentyfold in the 1,000-petaled Sahasrāra.',
          bodyHi:
            'शास्त्रीय तांत्रिक सूक्ष्म-शरीर विज्ञान (शारदातिलक और षट्चक्रनिरूपण) में षट्चक्र के कमलों की पंखुड़ियों की संख्या संस्कृत के ५० वर्णों के सटीक विभाजन पर आधारित है: विशुद्ध चक्र (१६ दल = अ से अः तक १६ स्वर), अनाहत (१२ दल = क से ठ), मणिपूर (१० दल = ड से फ), स्वाधिष्ठान (६ दल = ब से ल), मूलाधार (४ दल = व, श, ष, स), और आज्ञा चक्र (२ दल = ह और क्ष)। इनका कुल योग १६ + १२ + १० + ६ + ४ + २ = ५० होता है।'
        },
        {
          headingEn: '2. Saṅketa-Traya: Mantra-Saṅketa, Cakra-Saṅketa & Pūjā-Saṅketa in Yoginīhṛdaya',
          headingHi: '2. योगिनीहृदय का संकेत-त्रय: चक्र-संकेत, मन्त्र-संकेत एवं पूजा-संकेत',
          bodyEn:
            'The Yoginīhṛdaya (with Amṛtānanda’s Dīpikā commentary) establishes that the Śrī Meru Yantra, the fifteen-syllable Pañcadaśī / sixteen-syllable Ṣoḍaśī Vidyā, and the human subtle body are three isomorphic projections (Saṅketa-traya) of a single reality. The eight Mātṛkās (A-varga, Ka-varga, Ca-varga, Ṭa-varga, Ta-varga, Pa-varga, Ya-varga, Śa-varga) simultaneously govern the eight consonant classes of Sanskrit grammar and the eight portals of the Bhūpura.',
          bodyHi:
            'योगिनीहृदय (अमृतानन्द की दीपिका टीका सहित) प्रतिपादित करता है कि श्रीचक्र (चक्र-संकेत), पञ्चदशी/षोडशी महामन्त्र (मन्त्र-संकेत) और साधक की देह-भावना (पूजा-संकेत) एक ही परम सत्य के तीन समरूप आयाम हैं। अष्ट मातृकाएँ (अ-वर्ग, क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग, य-वर्ग, श-वर्ग) एक साथ संस्कृत व्याकरण के आठ वर्गों और भूपुर के आठ द्वारों का अधिष्ठान करती हैं।'
        }
      ],
      keyFindingsEn: [
        'Exact 50-petal identity: 16 (Viśuddha) + 12 (Anāhata) + 10 (Maṇipūra) + 6 (Svādhiṣṭhāna) + 4 (Mūlādhāra) + 2 (Ājñā) = 50 Mātṛkā syllables.',
        'Eight consonant classes (A-varga through Śa-varga) map directly to the Eight Mātṛkās (Brāhmī through Mahālakṣmī).',
        'Bhāvanopaniṣad and Yoginīhṛdaya unify external Śrī Meru geometry with internal subtle-body contemplation.'
      ],
      keyFindingsHi: [
        '५० दलों का सटीक गणित: १६ (विशुद्ध) + १२ (अनाहत) + १० (मणिपूर) + ६ (स्वाधिष्ठान) + ४ (मूलाधार) + २ (आज्ञा) = ५० मातृका अक्षर।',
        'संस्कृत वर्णमाला के आठ वर्ग (अ-वर्ग से श-वर्ग) सीधे अष्ट मातृकाओं (ब्राह्मी से महालक्ष्मी) से संबद्ध हैं।',
        'भावनोपनिषद् और योगिनीहृदय बाह्य श्रीमेरु ज्यामिति और आंतरिक षट्चक्र ध्यान को एक सूत्र में पिरोते हैं।'
      ],
      metadata: [
        { labelEn: 'Sanskrit Classification', labelHi: 'संस्कृत वर्गीकरण', valueEn: 'Mātṛkā-Nyāsa, Yantra-Vidhāna & Ṣaṭ-Cakra', valueHi: 'मातृका-न्यास, यन्त्र-विधान एवं षट्चक्र' },
        { labelEn: 'Phonemic Partition', labelHi: 'वर्ण-विभाजन', valueEn: '16 + 12 + 10 + 6 + 4 + 2 = 50 Petals', valueHi: '१६ + १२ + १० + ६ + ४ + २ = ५० कमल-दल' },
        { labelEn: 'Primary Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Yoginīhṛdaya · Śāradā Tilaka · Ṣaṭ-cakra-nirūpaṇa · Bhāvanopaniषद्', valueHi: 'योगिनीहृदय · शारदातिलक · षट्चक्रनिरूपण · भावनोपनिषद्' },
        { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
      ],
      primarySourcesEn: 'Yoginīhṛdaya · Śāradā Tilaka (Lakṣmaṇadeśika) · Ṣaṭ-cakra-nirūpaṇa (Pūrṇānanda) · Bhāvanopaniṣad',
      primarySourcesHi: 'योगिनीहृदय · शारदातिलक (लक्ष्मणदेशिक) · षट्चक्रनिरूपण (पूर्णानन्द) · भावनोपनिषद्',
      authorEn: 'Ram Ashok Kumar',
      authorHi: 'राम अशोक कुमार'
    }
  ]
};

// ============================================================================
// ALL 7 SACRED GATEWAYS OF KNOWLEDGE (RESEARCH CATEGORY PORTALS)
// ============================================================================
export const RESEARCH_CATEGORY_PORTALS: ResearchCategoryPortal[] = [
  {
    chapterIndex: 0,
    slug: 'cags-field-archive',
    aliasSlugs: ['shastra-agama-field-science', 'agama-shastra-pramana', 'vaishnava-traditions'],
    roman: 'I',
    gatewayBadgeEn: 'SACRED GATEWAY I · ŚĀSTRA, ĀGAMA & FIELD SCIENCE',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार I · आगम-शास्त्र एवं क्षेत्र-विज्ञान',
    shortTitleEn: 'CAGS Field Archive',
    shortTitleHi: 'क्षेत्रीय शोध अभिलेखागार',
    titleEn: 'I · Śāstra, Āgama & CAGS Empirical Field Archive',
    titleHi: 'I · आगम-शास्त्र एवं आनुभविक क्षेत्रीय शोध अभिलेखागार',
    sanskritSeal: 'निगम-आगम प्रमाण · नाद · भू-मर्म · वास्तु-यन्त्र',
    subtitleEn: 'Scriptural Pramāṇa Taxonomy, Vaiṣṇava Pāñcarātra, Lithic Acoustics, Geomagnetic Faults & Temple Vāstu',
    subtitleHi: 'शास्त्रीय प्रमाण वर्गीकरण, वैष्णव पाञ्चरात्र, प्रस्तर ध्वनि-विज्ञान, भू-चुंबकीय भ्रंश एवं वास्तु-मण्डल',
    epigraphEn: '“We do not debunk. We do not mythologize. We measure — distinguishing scriptural pramāṇa, epigraphic history, and empirical physics.”',
    epigraphHi: '“हम न तो अंध-खण्डन करते हैं और न ही मिथकीकरण। हम शास्त्रीय प्रमाण, पुरातात्विक इतिहास और भौतिक मापन का सटीक परीक्षण करते हैं।”',
    overviewEn:
      'Gateway I unites the foundational empirical archive of Ram Ashok Kumar (CAGS)—acoustic standing-wave sweeps, fluxgate magnetometry, FLIR thermography, and ICP-MS hydrogeochemistry—with rigorous Sanskrit philological taxonomy across Veda (Nigama), Āgama/Tantra, Purāṇa, Śilpa-Vāstu, and Vaiṣṇava Pāñcarātra / Avatāra traditions.',
    overviewHi:
      'प्रथम ज्ञान-द्वार राम अशोक कुमार (CAGS) के आनुभविक क्षेत्रीय मापन (ध्वनि-अनुनाद, चुंबकत्व सर्वेक्षण, थर्मोग्राफी और जल-भूरसायन) को वेद (निगम), आगम/तन्त्र, पुराण, वास्तु-शिल्प तथा वैष्णव पाञ्चरात्र एवं दशावतार परंपरा के प्रामाणिक ग्रंथीय अध्ययन के साथ जोड़ता है।',
    editorialFramingEn:
      'Editorial Note: The Seven Sacred Gateways are an editorial research architecture created for this archive to organize Indic philosophical, cosmological, and empirical studies—not a canonical sevenfold list prescribed by a single ancient scripture. Within this gateway, primary Sanskrit texts (Mayamata, Bṛhat Saṃhitā, Pāñcarātra Saṃhitās) are explicitly distinguished from modern physical instrumentation.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: सप्त ज्ञान-द्वार इस डिजिटल अभिलेखागार के सुव्यवस्थित अध्ययन हेतु निर्मित एक संपादकीय शोध-संरचना है, न कि किसी एक प्राचीन शास्त्र द्वारा निर्धारित रूढ़ सप्त-सूची। यहाँ मूल संस्कृत ग्रन्थों (मयमतम्, बृहत्संहिता, पाञ्चरात्र संहिता) और आधुनिक वैज्ञानिक यंत्र-मापन के मध्य स्पष्ट भेद रखा गया है।',
    methodologyEn: 'Four-tier source philology · Tri-axial magnetometry · Acoustic RT60 standing-wave analysis · FLIR thermography · ICP-MS hydrogeochemistry',
    methodologyHi: 'चतुर्स्तरीय स्रोत भाषाविज्ञान · त्रि-अक्षीय चुंबकत्व मापन · स्थायी-तरंग ध्वनि विश्लेषण · रेडियोमेट्रिक थर्मोग्राफी · ICP-MS जल-रसायन परीक्षण',
    accentColor: '#D4AF37',
    secondaryColor: '#5A3922',
    mandalaAngle: -90,
    domainTagEn: 'ŚĀSTRA & EMPIRICAL ARCHIVE',
    domainTagHi: 'शास्त्र एवं आनुभविक विज्ञान',
    sourceRegisterEn: 'Mayamata · Bṛhat Saṃhitā · Rasārṇava · Ahirbudhnya Saṃhitā · CAGS Field Logs',
    sourceRegisterHi: 'मयमतम् · बृहत्संहिता · रसार्णव · अहिर्बुध्न्य संहिता · क्षेत्रीय शोध अभिलेख',
    subcategories: [
      {
        id: 'sub-nada-shastra',
        sanskritName: 'नाद-शास्त्र · Nāda-Śāstra',
        titleEn: 'Lithic Acoustics & Sanctum Resonance',
        titleHi: 'प्रस्तर ध्वनि-विज्ञान एवं गर्भगृह अनुनाद',
        summaryEn: 'Standing-wave amplification (110–130 Hz) and musical pillar modal tuning in granite temple architecture.',
        summaryHi: 'ग्रेनाइट मंदिर गर्भगृहों में ११०–१३० हर्ट्ज स्थायी-तरंग प्रवर्धन और संगीतमय स्तंभों का ध्वनि-विज्ञान।',
        keyTopicsEn: ['110–130 Hz Garbhagṛha Resonance', 'Svara-Stambha Musical Pillars', 'RT60 Reverberation Mapping'],
        keyTopicsHi: ['११०–१३० Hz गर्भगृह अनुनाद', 'स्वर-स्तंभ (हम्पी)', 'RT60 प्रतिध्वनि मापन'],
        sourceClassificationEn: 'Empirical Acoustics & Śilpa-Śāstra',
        sourceClassificationHi: 'आनुभविक ध्वनि-मापन एवं शिल्प-शास्त्र',
        articleSlug: 'acoustic-resonance'
      },
      {
        id: 'sub-bhu-marma',
        sanskritName: 'भू-मर्म एवं वास्तु · Bhū-Marma & Vāstu-Maṇḍala',
        titleEn: 'Geomagnetic Faults, Thermodynamics & Vāstu Waveguides',
        titleHi: 'भू-चुंबकीय भ्रंश, ऊष्मागतिकी एवं वास्तु तरंग-पथक',
        summaryEn: 'Magnetometer, FLIR thermal, and hydrogeochemical surveys of sacred kṣetras, forts, and concentric prākāras.',
        summaryHi: 'पवित्र क्षेत्रों, दुर्गों और संकेंद्रित प्राकारों का मैग्नेटोमीटर, थर्मोग्राफी और जल-रासायनिक सर्वेक्षण।',
        keyTopicsEn: ['Bhū-Marma Tectonic Flux', 'Adiabatic Cold-Spot Physics', 'Sikata-Nyāsa Seismic Damping'],
        keyTopicsHi: ['भू-मर्म विवर्तनिक प्रवाह', 'रुद्धोष्म शीत-स्थल भौतिकी', 'सिकता-न्यास भूकंपीय संतुलन'],
        sourceClassificationEn: 'Geophysics, Vāstu-Śāstra & Hydrochemistry',
        sourceClassificationHi: 'भू-भौतिकी, वास्तु-शास्त्र एवं जल-रसायन',
        articleSlug: 'geomagnetic-friction'
      },
      {
        id: 'sub-agama-pramana',
        sanskritName: 'निगम-आगम प्रमाण · Nigama & Āgama Pramāṇa',
        titleEn: 'Veda, Āgama, Tantra & Purāṇa Source Taxonomy',
        titleHi: 'वेद, आगम, तन्त्र एवं पुराण स्रोत वर्गीकरण',
        summaryEn: 'Philological framework distinguishing Śruti, Smṛti, Purāṇa, Āgama, epigraphy, and modern analytical models.',
        summaryHi: 'श्रुति, स्मृति, पुराण, आगम, शिलालेख और आधुनिक विश्लेषणात्मक मॉडलों के मध्य प्रामाणिक वर्गीकरण।',
        keyTopicsEn: ['Nigama vs. Āgama Streams', '4-Tier Evidence Register', 'Manuscript & Epigraphic Citation'],
        keyTopicsHi: ['निगम एवं आगम धाराएँ', 'चतुर्स्तरीय प्रमाण पंजिका', 'पाण्डुलिपि एवं शिलालेख संदर्भ'],
        sourceClassificationEn: 'Primary Sanskrit Philology & Methodology',
        sourceClassificationHi: 'मूल संस्कृत भाषाविज्ञान एवं शोध-पद्धति',
        articleSlug: 'agama-nigama-shastra-pramana'
      },
      {
        id: 'sub-vaishnava-tattva',
        sanskritName: 'पाञ्चरात्र एवं दशावतार · Pāñcarātra & Avatāra Tattva',
        titleEn: 'Vaiṣṇava Traditions: Pāñcarātra, Catur-Vyūha & Daśāvatāra',
        titleHi: 'वैष्णव परम्परा: पाञ्चरात्र आगम, चतुर्व्यूह एवं दशावतार',
        summaryEn: 'Five modes of divine manifestation (Para, Vyūha, Vibhava, Antaryāmin, Arcā), Lakṣmī Tantra, and temple consecration.',
        summaryHi: 'पर, व्यूह, विभव (दशावतार), अन्तर्यामी और अर्चा के पाँच स्तर तथा लक्ष्मी तन्त्र एवं वैखानस आगम।',
        keyTopicsEn: ['Catur-Vyūha Emanation', 'Daśāvatāra & 24 Vibhavas', 'Lakṣmī Tantra & Sudarśana'],
        keyTopicsHi: ['चतुर्व्यूह सिद्धांत', 'दशावतार एवं २४ विभव', 'लक्ष्मी तन्त्र एवं सुदर्शन तत्त्व'],
        sourceClassificationEn: 'Vaiṣṇava Āgama (Pāñcarātra & Vaikhānasa) & Purāṇa',
        sourceClassificationHi: 'वैष्णव आगम (पाञ्चरात्र एवं वैखानस) तथा पुराण',
        articleSlug: 'vaishnava-pancharatra-avatara-tattva'
      },
      {
        id: 'sub-jaya-vijaya-vaikuntha',
        sanskritName: 'जय–विजय (वैकुण्ठ द्वारपाल) · Jaya & Vijaya',
        titleEn: 'Jaya and Vijaya — The Divine Gatekeepers of Vaikuṇṭha & Three Earthly Births',
        titleHi: 'जय और विजय — वैकुण्ठ के दिव्य द्वारपाल, सनकादि शाप एवं तीन जन्मों की कथा',
        summaryEn: 'The Śrīmad-Bhāgavatam account of Viṣṇu’s dvārapālas, the four Kumāras’ curse, their three births across Satya, Tretā, and Dvāpara Yugas, and their theological distinction from the Śaiva Bhairavagaṇa.',
        summaryHi: 'श्रीमद्भागवत पुराण में वर्णित वैकुण्ठ द्वारपाल जय–विजय, सनकादि कुमारों का शाप, तीन युगों के तीन जन्म (हिरण्याक्ष–हिरण्यकशिपु, रावण–कुम्भकर्ण, शिशुपाल–दन्तवक्र) तथा भैरवगण से उनका शास्त्रीय भेद।',
        keyTopicsEn: ['4 Stages of the Kumāras’ Curse (SB 3.15–16)', '3 Earthly Births Across 3 Yugas', 'Vaiṣṇava Dvārapālas vs. Bhairavagaṇa'],
        keyTopicsHi: ['सनकादि शाप के ४ चरण (भागवत ३.१५–१६)', 'तीन युगों में तीन असुर-जन्म', 'वैष्णव द्वारपाल बनाम शैव भैरवगण भेद'],
        sourceClassificationEn: 'Śrīmad-Bhāgavatam (Cantos 3, 7 & 10) · Vaiṣṇava Theology',
        sourceClassificationHi: 'श्रीमद्भागवत महापुराण (स्कन्ध ३, ७ एवं १०) · वैष्णव तत्त्वज्ञान',
        articleSlug: 'jaya-vijaya-vaikuntha-dvarapalas'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'shri-meru-chakra',
        gatewayRoman: 'VI',
        labelEn: 'Gateway VI · Mantra, Yantra & Śrī Meru Geometry',
        labelHi: 'द्वार VI · मन्त्र, यन्त्र एवं श्रीमेरु ज्यामिति',
        relationNoteEn: 'Compare Vāstu-Purusha-Maṇḍala temple architecture with the nine concentric enclosures of the Śrī Meru Chakra.',
        relationNoteHi: 'वास्तु-पुरुष-मण्डल स्थापत्य की श्रीमेरु चक्र के नौ संकेंद्रित आवरणों से तुलना करें।'
      },
      {
        targetCategorySlug: 'ashta-bhairava',
        targetArticleSlug: 'bhairavagana-taxonomy-kshetrapalas',
        gatewayRoman: 'II',
        labelEn: 'Gateway II · Bhairavagaṇa vs. Vaiṣṇava Dvārapālas (Jaya–Vijaya)',
        labelHi: 'द्वार II · शैव भैरवगण बनाम वैष्णव द्वारपाल (जय–विजय)',
        relationNoteEn: 'Compare the Vaiṣṇava gatekeepers of Vaikuṇṭha (Jaya and Vijaya) with the Śaiva-Śākta Bhairavagaṇa and Kṣetrapālas without conflating their distinct traditions.',
        relationNoteHi: 'वैकुण्ठ के वैष्णव द्वारपालों (जय–विजय) और शैव-शाक्त भैरवगण एवं क्षेत्रपालों का तुलनात्मक अध्ययन करें।'
      },
      {
        targetCategorySlug: 'eight-matrikas',
        gatewayRoman: 'V',
        labelEn: 'Gateway V · Śakti Tattva & Aṣṭa Mātṛkā',
        labelHi: 'द्वार V · शक्ति तत्त्व एवं अष्ट मातृका',
        relationNoteEn: 'Explore how Vaiṣṇavī, Vārāhī, and Mahālakṣmī bridge Pāñcarātra Vaiṣṇava theology with Śākta Mātṛkā mandalas.',
        relationNoteHi: 'देखें कि वैष्णवी, वाराही और महालक्ष्मी किस प्रकार वैष्णव और शाक्त मण्डलों को जोड़ती हैं।'
      },
      {
        targetCategorySlug: 'the-14-lokas',
        gatewayRoman: 'VII',
        labelEn: 'Gateway VII · The 14 Lokas & Samaya / Aṣṭa Prahar',
        labelHi: 'द्वार VII · चतुर्दश लोक एवं समय / अष्ट प्रहर',
        relationNoteEn: 'Connect terrestrial sacred geography (Bhūloka) with the vertical 14-Loka Puranic cosmography and 8-Prahar sacred timekeeping.',
        relationNoteHi: 'पृथ्वी के पवित्र भूगोल (भूर्लोक) को चतुर्दश लोक और अष्ट प्रहर कालगणना से जोड़ें।'
      }
    ],
    articles: [
      ...CAGS_FIELD_ARTICLES,
      ...ADDITIONAL_GATEWAY_ARTICLES['cags-field-archive'],
      ...DEEP_SACRED_SEAL_ARTICLES.filter(a => a.categorySlug === 'cags-field-archive')
    ]
  },
  {
    chapterIndex: 1,
    slug: 'ashta-bhairava',
    aliasSlugs: ['shiva-bhairava-tattva', 'shaiva-traditions'],
    roman: 'II',
    gatewayBadgeEn: 'SACRED GATEWAY II · ŚIVA & AṢṬA BHAIRAVA TATTVA',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार II · शिव एवं अष्ट-भैरव तत्त्व',
    shortTitleEn: 'Ashta Bhairava',
    shortTitleHi: 'अष्ट भैरव',
    titleEn: 'II · Śiva Tattva & The Eight Directional Bhairavas',
    titleHi: 'II · शिव तत्त्व एवं अष्ट-भैरव दिग्मण्डल',
    sanskritSeal: 'शिव-भैरव तत्त्व · अष्टभैरव दिग्बन्धन मण्डलम्',
    subtitleEn: 'Eight Directional Guardians, 28 Śaiva Āgamas, Kashmir Trika Philosophy, Śakti Consorts & Planetary Octaves',
    subtitleHi: 'आठ दिशात्मक भैरव, २८ शैव आगम, कश्मीर त्रिक दर्शन, मातृका शक्तियाँ एवं ग्रहीय सप्तक',
    epigraphEn: '“Eight directional forms, eight planetary frequencies, and the central axis of Kaal Bhairava — mapped across Śaiva Āgama, sacred space, and cosmic octave.”',
    epigraphHi: '“आठ दिशात्मक स्वरूप, आठ ग्रहीय आवृत्तियाँ और काल भैरव की केंद्रीय धुरी — शैव आगम, पवित्र स्थान और ब्रह्माण्डीय सप्तक में मानचित्रित।”',
    overviewEn:
      'Gateway II examines the Śaiva and Bhairava traditions: the eight directional manifestations of Bhairava (Asitāṅga, Ruru, Caṇḍa, Krodha, Unmatta, Kapāla, Bhīṣaṇa, and Saṃhāra), their pairing with the Aṣṭa Mātṛkās, the 28 Śaiva Siddhānta Āgamas and 64 Bhairava Tantras, the 36 Tattvas, and non-dual Kashmir Trika philosophy.',
    overviewHi:
      'द्वितीय ज्ञान-द्वार शैव और भैरव परंपराओं का विस्तृत अध्ययन प्रस्तुत करता है: भैरव के आठ दिशात्मक स्वरूप (असितांग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाल, भीषण और संहार), अष्ट मातृकाओं के साथ उनका युग्मन, २८ शैव आगम, ६४ भैरव तन्त्र, ३६ तत्त्व और कश्मीर त्रिक दर्शन।',
    editorialFramingEn:
      'Editorial Note: Classical Śaiva Āgamic and Purāṇic sources (Śiva Purāṇa, Kāśī Khaṇḍa, Svacchanda Tantra, Tantrāloka) are presented alongside clearly labeled contemporary harmonic octave models (Keplerian orbital frequencies), ensuring scriptural iconography and modern symbolic synthesis remain distinct.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: शास्त्रीय शैव आगम और पौराणिक स्रोतों (शिव पुराण, काशी खण्ड, स्वच्छन्द तन्त्र, तन्त्रालोक) को आधुनिक प्रतीकात्मक ग्रहीय-आवृत्ति मॉडल से स्पष्ट रूप से पृथक रखते हुए प्रस्तुत किया गया है।',
    methodologyEn: 'Śaiva Āgamic philology · Directional azimuth mapping · Consort & vāhana iconographic taxonomy · Harmonic octave modeling',
    methodologyHi: 'शैव आगम भाषाविज्ञान · दिग्दिशा कोण मानचित्रण · शक्ति एवं वाहन प्रतिमाशास्त्र · ग्रहीय सप्तक आवृत्ति मॉडलिंग',
    accentColor: '#FFBF38',
    secondaryColor: '#6B3410',
    mandalaAngle: -38.57,
    domainTagEn: 'ŚAIVA & BHAIRAVA COSMOLOGY',
    domainTagHi: 'शैव एवं भैरव ब्रह्माण्ड-विज्ञान',
    sourceRegisterEn: 'Śiva Purāṇa · Svacchanda Tantra · Tantrāloka · Kāśī Khaṇḍa · Rudrayāmala',
    sourceRegisterHi: 'शिव पुराण · स्वच्छन्द तन्त्र · तन्त्रालोक · काशी खण्ड · रुद्रयामल तन्त्र',
    subcategories: [
      {
        id: 'sub-ashta-bhairava-octants',
        sanskritName: 'अष्ट-भैरव दिग्मण्डल · Aṣṭa Bhairava Mandala',
        titleEn: 'The Eight Directional Guardians (Asitāṅga to Saṃhāra)',
        titleHi: 'आठ दिशात्मक भैरव रक्षक (असितांग से संहार तक)',
        summaryEn: 'Cardinal and intercardinal octants governed by the eight Bhairavas, paired with the eight Mātṛkās and specific vāhanas.',
        summaryHi: 'आठों दिशाओं के अधिपति अष्ट भैरव, अष्ट मातृकाओं के साथ उनका युग्मन और विशिष्ट वाहन प्रतिमाशास्त्र।',
        keyTopicsEn: ['Asitāṅga (E) & Ruru (SE)', 'Caṇḍa (S) & Krodha (SW)', 'Unmatta (W), Kapāla (NW), Bhīṣaṇa (N), Saṃhāra (NE)'],
        keyTopicsHi: ['असितांग (पूर्व) एवं रुरु (आग्नेय)', 'चण्ड (दक्षिण) एवं क्रोध (नैऋत्य)', 'उन्मत्त (पश्चिम), कपाल (वायव्य), भीषण (उत्तर), संहार (ईशान)'],
        sourceClassificationEn: 'Primary Śaiva-Śākta Āgama & Purāṇa',
        sourceClassificationHi: 'मूल शैव-शाक्त आगम एवं पुराण',
        articleSlug: 'asitanga-bhairava'
      },
      {
        id: 'sub-trika-shaiva-siddhanta',
        sanskritName: 'शैव आगम एवं त्रिक दर्शन · Śaiva Āgama & Trika',
        titleEn: '28 Śaiva Āgamas, 64 Bhairava Tantras & Kashmir Trika Philosophy',
        titleHi: '२८ शैव आगम, ६४ भैरव तन्त्र एवं कश्मीर त्रिक दर्शन',
        summaryEn: 'The 36 Tattvas, Pañca-kṛtya (five cosmic acts), Śaiva Siddhānta ritual order, and Abhinavagupta’s non-dual Pratyabhijñā.',
        summaryHi: '३६ तत्त्व, पञ्च-कृत्य, शैव सिद्धान्त के २८ आगम और अभिनवगुप्त का अद्वैत प्रत्यभिज्ञा दर्शन।',
        keyTopicsEn: ['28 Mūlāgamas & 64 Bhairava Tantras', '36 Tattvas (Śiva to Pṛthivī)', 'Prakāśa-Vimarśa & Pañca-kṛtya'],
        keyTopicsHi: ['२८ मूलागम एवं ६४ भैरव तन्त्र', '३६ तत्त्व सोपान', 'प्रकाश-विमर्श एवं पञ्च-कृत्य'],
        sourceClassificationEn: 'Primary Philosophical & Āgamic Corpus',
        sourceClassificationHi: 'मूल दार्शनिक एवं आगम संहिता',
        articleSlug: 'trika-shaiva-agama-cosmology'
      },
      {
        id: 'sub-bhairava-planetary-harmonics',
        sanskritName: 'ग्रहीय सप्तक समन्वय · Planetary Octave Synthesis',
        titleEn: 'Symbolic Planetary Frequencies & Directional Standing Waves',
        titleHi: 'प्रतीकात्मक ग्रहीय आवृत्तियाँ एवं दिशात्मक तरंग चक्र',
        summaryEn: 'Contemporary comparative mapping linking the eight directional Bhairavas with planetary octave frequencies (126.22 Hz – 221.23 Hz).',
        summaryHi: 'आठ दिशात्मक भैरवों को ग्रहीय कक्षीय सप्तक आवृत्तियों (१२६.२२ Hz – २२१.२३ Hz) से जोड़ने वाला तुलनात्मक मॉडल।',
        keyTopicsEn: ['Keplerian Orbital Octaves', 'Standing-Wave Cycle Geometry', 'Central Kaal Bhairava Axis'],
        keyTopicsHi: ['ग्रहीय कक्षीय सप्तक', 'स्थायी-तरंग चक्र ज्यामिति', 'केंद्रीय काल भैरव अक्ष'],
        sourceClassificationEn: 'Contemporary Symbolic & Acoustic Model',
        sourceClassificationHi: 'आधुनिक प्रतीकात्मक एवं ध्वनि मॉडल',
        articleSlug: 'samhara-bhairava'
      },
      {
        id: 'sub-bhairavagana-taxonomy',
        sanskritName: 'भैरवगण एवं क्षेत्रपाल · Bhairavagaṇa & Kṣetrapālas',
        titleEn: 'Bhairavagaṇa — Aṣṭa Bhairava, 64 Bhairavas, Kṣetrapālas & Retinue Taxonomy',
        titleHi: 'भैरवगण — अष्ट भैरव, ६४ भैरव वर्गीकरण, क्षेत्रपाल एवं गण-तत्त्व',
        summaryEn: 'Comprehensive study of Bhairava and gaṇa, 8×8 Bhairava groupings, Vaṭuka & Svacchanda Bhairava, and distinctions from Pramathagaṇas, Yoginīs, and Vaiṣṇava Dvārapālas.',
        summaryHi: 'भैरव और गण का अर्थ, अष्ट भैरव, ६४ भैरव (८×८ समूह), बटुक व स्वच्छन्द भैरव तथा प्रमथगण, क्षेत्रपाल, योगिनी व वैष्णव द्वारपालों से उनका भेद।',
        keyTopicsEn: ['Aṣṭa Bhairava & 8×8 (64) Groupings', 'Kāla, Vaṭuka & Svacchanda Bhairava', 'Bhairavagaṇa vs. Jaya–Vijaya Distinction'],
        keyTopicsHi: ['अष्ट भैरव एवं ८×८ (६४) भैरव वर्ग', 'काल, बटुक एवं स्वच्छन्द भैरव', 'भैरवगण बनाम जय–विजय का स्पष्ट भेद'],
        sourceClassificationEn: 'Śiva Purāṇa, Svacchanda Tantra & Tantrāloka',
        sourceClassificationHi: 'शिव पुराण, स्वच्छन्द तन्त्र एवं तन्त्रालोक',
        articleSlug: 'bhairavagana-taxonomy-kshetrapalas'
      },
      {
        id: 'sub-aghora-sampradaya',
        sanskritName: 'अघोर सम्प्रदाय · Aghora Sampradāya (Parent Tradition)',
        titleEn: 'Aghora Sampradāya — Etymology, 6 Core Points & Two Sub-Parts (Ghora & Kāpālika)',
        titleHi: 'अघोर सम्प्रदाय — व्युत्पत्ति, ६ मुख्य बिंदु एवं २ उप-भाग (घोर ११ भेद व कापालिक ५ भेद)',
        summaryEn: 'Distinguishes Aghora (fivefold Śiva face & non-dual state), Aghorī, Pāśupata, medieval Kāpālika, and modern Varanasi Krīṃ Kuṇḍa lineages, and houses Sub-Part I (Ghora 11/12 Bhedas) and Sub-Part II (Kāpālika 5 Bhedas).',
        summaryHi: 'अघोर, अघोरी, पाशुपत, मध्यकालीन कापालिक और वाराणसी की बाबा कीनाराम (क्रीं कुण्ड) परंपरा का अध्ययन तथा इसके दो उप-भाग (उप-भाग I: घोर ११/१२ भेद व उप-भाग II: कापालिक ५ भेद)।',
        keyTopicsEn: ['6 Core Points of Aghora Dossier', 'Sub-Part I: Ghora 11/12 Bhedas', 'Sub-Part II: Kāpālika 5 Bhedas'],
        keyTopicsHi: ['अघोर सम्प्रदाय के ६ मुख्य बिंदु', 'उप-भाग I: घोर सम्प्रदाय ११/१२ भेद', 'उप-भाग II: कापालिक सम्प्रदाय ५ भेद'],
        sourceClassificationEn: 'Brahmayāmala, Siddhayogeśvarīmata & Academic Ethnography',
        sourceClassificationHi: 'ब्रह्मयामल, सिद्धयोगेश्वरीमत एवं अकादमिक इतिहास',
        articleSlug: 'aghora-sampradaya-history-theology'
      },
      {
        id: 'sub-ghora-11-bhedas',
        sanskritName: 'अघोर उप-भाग I · घोर सम्प्रदाय के ११ (१२) भेद',
        titleEn: 'Sub-Part I of Aghora Sampradāya: Ghora Sampradāya 11 (12) Bhedas [Verification Pending]',
        titleHi: 'अघोर सम्प्रदाय का उप-भाग I: घोर सम्प्रदाय के ११ (१२) भेद [स्रोत पुष्टि लंबित]',
        summaryEn: 'Sub-Part I under Aghora Sampradāya: Lexical and methodological examination of Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora, Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora, and Siddha.',
        summaryHi: 'अघोर सम्प्रदाय के अंतर्गत उप-भाग I: रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर, घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर और सिद्ध—इन १२ नामों का शब्दार्थ और समीक्षा।',
        keyTopicsEn: ['Sub-Part I of Aghora Sampradāya', 'Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora', 'Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora, Siddha'],
        keyTopicsHi: ['अघोर सम्प्रदाय का उप-भाग I', 'रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर', 'घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर, सिद्ध'],
        sourceClassificationEn: 'Aghora Sub-Part I · Source Verification Pending',
        sourceClassificationHi: 'अघोर उप-भाग I · मूल स्रोत की पुष्टि लंबित',
        articleSlug: 'ghora-sampradaya-11-bhedas-study'
      },
      {
        id: 'sub-kapalika-5-bhedas',
        sanskritName: 'अघोर उप-भाग II · कापालिक सम्प्रदाय एवं ५ भेद',
        titleEn: 'Sub-Part II of Aghora Sampradāya: Kāpālika Somāsiddhānta, 12 Gurus & 5 Bhedas (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali)',
        titleHi: 'अघोर सम्प्रदाय का उप-भाग II: कापालिक सोमसिद्धान्त, १२ गुरु एवं ५ भेद (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली)',
        summaryEn: 'Sub-Part II under Aghora Sampradāya: Examines medieval Kāpālika history, Somāsiddhānta, the 12 Gurus of Sarvatantra, and lexical analysis of the five reported Bhedas (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali).',
        summaryHi: 'अघोर सम्प्रदाय के अंतर्गत उप-भाग II: सोमसिद्धान्त, सर्वतन्त्र के १२ कापालिक गुरु तथा ५ बताए गए भेदों (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली) का प्रामाणिक विश्लेषण।',
        keyTopicsEn: ['Sub-Part II of Aghora Sampradāya', '12 Kāpālika Gurus (Ādinātha to Vikarāla)', '5 Reported Bhedas: Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali'],
        keyTopicsHi: ['अघोर सम्प्रदाय का उप-भाग II', 'सर्वतन्त्र के १२ कापालिक गुरु', '५ बताए गए भेद: इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली'],
        sourceClassificationEn: 'Aghora Sub-Part II · Source Verification Pending',
        sourceClassificationHi: 'अघोर उप-भाग II · स्रोत समीक्षा लंबित',
        articleSlug: 'kapalika-sampradaya-5-bhedas-somasiddhanta'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'bhairav-investigation-codex',
        gatewayRoman: 'III',
        labelEn: 'Gateway III · Kāla Bhairava & Kāśī Field Codex',
        labelHi: 'द्वार III · काल-भैरव एवं काशी अन्वेषण संहिता',
        relationNoteEn: 'Inspect the living Kāśī shrine locations, bronze reliefs, and field protocols for Kaal Bhairava and the eight Bhairavas.',
        relationNoteHi: 'काशी के जीवंत भैरव मंदिरों, कांस्य प्रतिमाओं और क्षेत्रीय अन्वेषण प्रोटोकॉल का अध्ययन करें।'
      },
      {
        targetCategorySlug: 'cags-field-archive',
        targetArticleSlug: 'jaya-vijaya-vaikuntha-dvarapalas',
        gatewayRoman: 'I',
        labelEn: 'Gateway I · Jaya and Vijaya (Vaiṣṇava Dvārapālas vs. Bhairavagaṇa)',
        labelHi: 'द्वार I · जय और विजय (वैष्णव द्वारपाल बनाम शैव भैरवगण)',
        relationNoteEn: 'See why Jaya and Vijaya belong to Vaiṣṇava Vaikuṇṭha theology rather than the Śaiva Bhairavagaṇa.',
        relationNoteHi: 'देखें कि जय और विजय शैव भैरवगण के नहीं अपितु वैकुण्ठ की वैष्णव द्वारपाल परंपरा के अंग क्यों हैं।'
      },
      {
        targetCategorySlug: '64-yogini-matrix',
        gatewayRoman: 'IV',
        labelEn: 'Gateway IV · 64 Yoginī (8 Bhairavas × 8 Mātṛkās Matrix)',
        labelHi: 'द्वार IV · ६४ योगिनी (८ भैरव × ८ मातृका आव्यूह)',
        relationNoteEn: 'See how the 8 Bhairavas form Rows 01–08 of the 64-cell Bhairava-Mātṛkā combinatorial matrix.',
        relationNoteHi: 'देखें कि किस प्रकार अष्ट भैरव ६४-कोष्ठ भैरव-मातृका आव्यूह की ८ पंक्तियों का निर्माण करते हैं।'
      },
      {
        targetCategorySlug: 'eight-matrikas',
        gatewayRoman: 'V',
        labelEn: 'Gateway V · Śakti Tattva & Aṣṭa Mātṛkā Consorts',
        labelHi: 'द्वार V · शक्ति तत्त्व एवं अष्ट मातृका युग्म',
        relationNoteEn: 'Explore the eight Mātṛkā consorts (Brāhmī to Mahālakṣmī) paired with each directional Bhairava.',
        relationNoteHi: 'प्रत्येक दिशात्मक भैरव के साथ युग्मित अष्ट मातृका शक्तियों (ब्राह्मी से महालक्ष्मी) का अध्ययन करें।'
      }
    ],
    articles: [
      ...ASHTA_BHAIRAVA_ARTICLES,
      ...ADDITIONAL_GATEWAY_ARTICLES['ashta-bhairava'],
      ...DEEP_SACRED_SEAL_ARTICLES.filter(a => a.categorySlug === 'ashta-bhairava')
    ]
  },
  {
    chapterIndex: 2,
    slug: 'bhairav-investigation-codex',
    aliasSlugs: ['kaal-bhairava-kashi-codex', 'kashi-kshetra-codex'],
    roman: 'III',
    gatewayBadgeEn: 'SACRED GATEWAY III · KĀLA BHAIRAVA & KĀŚĪ CODEX',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार III · काल-भैरव एवं काशी संहिता',
    shortTitleEn: 'Bhairav Investigation Codex',
    shortTitleHi: 'भैरव अन्वेषण संहिता',
    titleEn: 'III · Kāla Bhairava & Kāśī Kṣetra Investigation Codex',
    titleHi: 'III · काल-भैरव एवं काशी-क्षेत्र अन्वेषण संहिता',
    sanskritSeal: 'कालभैरव काशी कोतवाल · अष्टभैरव क्षेत्र-संहिता',
    subtitleEn: 'Kaal Bhairava Sovereign Core, Kāśī Khaṇḍa Sacred Cartography, Epigraphic Records & Living Shrine Protocols',
    subtitleHi: 'काल भैरव सर्वोच्च केंद्र, काशी खण्ड पवित्र मानचित्रण, शिलालेखीय साक्ष्य एवं जीवंत मंदिर प्रोटोकॉल',
    epigraphEn: '“We do not approach Bhairav through fear alone. We investigate the traditions, symbols, histories, and evidence through which Bhairav is understood.”',
    epigraphHi: '“हम केवल भय के माध्यम से भैरव के निकट नहीं जाते। हम उन परंपराओं, प्रतीकों, इतिहासों और प्रमाणों का अन्वेषण करते हैं जिनके माध्यम से भैरव तत्त्व को समझा जाता है।”',
    overviewEn:
      'Gateway III houses the structured archival field protocols (BH-CORE and BH-001 through BH-008) authored by Ram Ashok Kumar for investigating Kāla Bhairava as Sovereign of Time (Kāla) and Kotwāl of Varanasi, documenting living pilgrimage circuits, Chola and Deccan bronzes, epigraphic records, and rigorous methodological distinctions.',
    overviewHi:
      'तृतीय ज्ञान-द्वार में काल के अधिपति और काशी के कोतवाल काल भैरव तथा अष्ट भैरवों के जीवंत तीर्थ-भूगोल, शिलालेखों, चोल एवं दक्कन की कांस्य प्रतिमाओं और प्रामाणिक आगम प्रतीकों के अध्ययन हेतु राम अशोक कुमार द्वारा संकलित क्षेत्रीय अन्वेषण संहिता (BH-CORE तथा BH-001 से BH-008) समाहित है।',
    editorialFramingEn:
      'Editorial Note: Each codex entry explicitly separates (1) Primary Sanskrit textual descriptions in the Skanda Purāṇa (Kāśī Khaṇḍa) and Śaiva Āgamas, (2) Museum bronze and stone relief records, and (3) Living community shrine traditions in Varanasi, avoiding sensationalized folklore.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: प्रत्येक संहिता प्रविष्टि (१) स्कन्द पुराण (काशी खण्ड) और शैव आगमों के मूल विवरण, (२) संग्रहालय कांस्य एवं प्रस्तर शिल्प साक्ष्य, और (३) वाराणसी की जीवंत मंदिर परंपरा को लोक-भ्रम या सनसनीखेज कथाओं से पूर्णतः पृथक रखती है।',
    methodologyEn: 'Primary-source Sanskrit philology · Sacred urban cartography · Epigraphic & bronze comparative survey',
    methodologyHi: 'मूल-स्रोत संस्कृत भाषाविज्ञान · पवित्र नगरीय मानचित्रण · शिलालेख एवं कांस्य शिल्प सर्वेक्षण',
    accentColor: '#D3AD55',
    secondaryColor: '#4A2C18',
    mandalaAngle: 12.86,
    domainTagEn: 'KĀŚĪ KṢETRA FIELD CODEX',
    domainTagHi: 'काशी-क्षेत्र अभिलेखीय संहिता',
    sourceRegisterEn: 'Skanda Purāṇa (Kāśī Khaṇḍa) · Śiva Purāṇa · Epigraphia Indica · Pañcakrośī Yātrā Registries',
    sourceRegisterHi: 'स्कन्द पुराण (काशी खण्ड) · शिव पुराण · एपिग्राफिया इंडिका · पंचक्रोशी यात्रा पंजिका',
    subcategories: [
      {
        id: 'sub-kaal-bhairava-adhipati',
        sanskritName: 'काल-भैरव अधिपति · Kāla Bhairava Sovereign Core',
        titleEn: 'Kaal Bhairava — Metaphysics of Time (Kāla) & Kotwāl of Kāśī',
        titleHi: 'काल भैरव — काल का आध्यात्मिक तत्त्व एवं काशी के कोतवाल',
        summaryEn: 'The central sovereign axis unifying metaphysical Time (Mahākāla) with civic-religious jurisdiction in Varanasi.',
        summaryHi: 'महाकाल/काल के दार्शनिक तत्त्व और वाराणसी के धार्मिक-नागरिक क्षेत्राधिकार को एकीकृत करने वाली केंद्रीय धुरी।',
        keyTopicsEn: ['Adhipati of the 8 Bhairavas', 'Kāśī Kotwāl Tradition', 'Śvāna (Dog) Vāhana Symbolism'],
        keyTopicsHi: ['अष्ट भैरवों के अधिपति', 'काशी कोतवाल परम्परा', 'श्वान वाहन का आगम प्रतीक'],
        sourceClassificationEn: 'Primary Purāṇic Source & Living Kāśī Tradition',
        sourceClassificationHi: 'मूल पौराणिक स्रोत एवं जीवंत काशी परम्परा',
        articleSlug: 'kaal-bhairava-sovereign-core'
      },
      {
        id: 'sub-kashi-shrine-topography',
        sanskritName: 'काशी अष्ट-भैरव तीर्थ-भूगोल · Kāśī Shrine Cartography',
        titleEn: 'Sacred Urban Cartography of the Eight Bhairava Shrines in Varanasi',
        titleHi: 'वाराणसी के आठ भैरव मंदिरों का पवित्र नगरीय मानचित्रण',
        summaryEn: 'Field protocols mapping Vriddhakaleshwar, Hanuman Ghat, Durga Kund, Kamachha, Deura, Lat Bhairav, Bhoot Bhairav, and Gai Ghat.',
        summaryHi: 'वृद्धकालेश्वर, हनुमान घाट, दुर्गा कुण्ड, कमच्छा, देउरा, लाट भैरव, भूत भैरव और गाय घाट के भैरव पीठों का क्षेत्रीय प्रलेखन।',
        keyTopicsEn: ['Kāśī Khaṇḍa Pilgrimage Circuits', 'Lat Bhairav Pillar History', 'Directional Perimeter Alignment'],
        keyTopicsHi: ['काशी खण्ड यात्रा परिपथ', 'लाट भैरव स्तंभ इतिहास', 'दिशात्मक रक्षा-चक्र संरेखण'],
        sourceClassificationEn: 'Sacred Geography, Epigraphy & Ethnography',
        sourceClassificationHi: 'पवित्र भूगोल, शिलालेख एवं नृवंशविज्ञान',
        articleSlug: 'codex-kapala'
      },
      {
        id: 'sub-bronze-iconography',
        sanskritName: 'प्रतिमा-लक्षण एवं शिल्प · Iconographic & Bronze Taxonomy',
        titleEn: 'Comparative Iconography: Āyudhas, Mudrās & Regional Sculptural Programs',
        titleHi: 'तुलनात्मक प्रतिमाशास्त्र: आयुध, मुद्रा एवं क्षेत्रीय शिल्प परम्परा',
        summaryEn: 'Methodological criteria for analyzing triśūla, ḍamaru, kapāla, khaḍga, and pāśa attributes across medieval stone and bronze reliefs.',
        summaryHi: 'मध्यकालीन प्रस्तर और कांस्य प्रतिमाओं में त्रिशूल, डमरू, कपाल, खड्ग और पाश जैसे आयुधों के परीक्षण की शास्त्रीय पद्धति।',
        keyTopicsEn: ['Chola & Deccan Bronze Reliefs', 'Pancha-kritya & Samhāra Semantics', 'Distinguishing Āgama from Folklore'],
        keyTopicsHi: ['चोल एवं दक्कन कांस्य शिल्प', 'पञ्च-कृत्य एवं संहार का अर्थ', 'आगम विधान एवं लोककथा में भेद'],
        sourceClassificationEn: 'Art History, Museum Archives & Āgama',
        sourceClassificationHi: 'कला इतिहास, संग्रहालय अभिलेख एवं आगम',
        articleSlug: 'codex-samhara'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'ashta-bhairava',
        gatewayRoman: 'II',
        labelEn: 'Gateway II · Śiva Tattva & Ashta Bhairava Mandala',
        labelHi: 'द्वार II · शिव तत्त्व एवं अष्ट-भैरव मण्डल',
        relationNoteEn: 'Compare the Kāśī field codex entries with the directional compass azimuths and planetary octave profiles.',
        relationNoteHi: 'काशी अन्वेषण संहिता की दिशात्मक कम्पास कोणों और ग्रहीय आवृत्ति प्रोफ़ाइल से तुलना करें।'
      },
      {
        targetCategorySlug: 'eight-matrikas',
        targetArticleSlug: 'shakti-pithas-sacred-geography',
        gatewayRoman: 'V',
        labelEn: 'Gateway V · Śakti Pīṭhas & Guardian Bhairava Pairings',
        labelHi: 'द्वार V · शक्तिपीठ एवं रक्षक भैरव युग्मन',
        relationNoteEn: 'See how every Śakti Pīṭha across the subcontinent is paired with a presiding Kṣetrapāla Bhairava.',
        relationNoteHi: 'देखें कि किस प्रकार प्रत्येक शक्तिपीठ पर अधिष्ठात्री देवी के साथ एक क्षेत्रपाल भैरव युग्मित हैं।'
      }
    ],
    articles: BHAIRAV_CODEX_ARTICLES
  },
  {
    chapterIndex: 3,
    slug: '64-yogini-matrix',
    aliasSlugs: ['catuhshashti-yogini', 'yogini-mandala-combinatorics'],
    roman: 'IV',
    gatewayBadgeEn: 'SACRED GATEWAY IV · CATUḤṢAṢṬI YOGINĪ & 8×8 MATRIX',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार IV · चतुःषष्टि योगिनी एवं ८×८ जालक',
    shortTitleEn: '64 Yogini (8 × 8)',
    shortTitleHi: '64 योगिनी (8 × 8)',
    titleEn: 'IV · Catuḥṣaṣṭi Yoginī — 8 Bhairavas × 8 Mātṛkās Matrix',
    titleHi: 'IV · चतुःषष्टि योगिनी — ८ भैरव × ८ मातृका आव्यूह',
    sanskritSeal: 'चतुःषष्टियोगिनी भैरव-मातृका जालकम्',
    subtitleEn: '64 Combinatorial Bhairava-Mātṛkā Vectors, Kaula Transmission & Hypaethral Circular Yoginī Temples',
    subtitleHi: 'आठ दिशात्मक भैरव और आठ तात्त्विक मातृकाओं के ६४ संयोजनात्मक सदिश एवं चौंसठ योगिनी वृत्ताकार मंदिर स्थापत्य',
    epigraphEn: '“Eight Bhairavas and eight Matrikas across 64 combinatorial vectors — uniting Kaula mandala geometry with hypaethral temple architecture.”',
    epigraphHi: '“64 संयोजनात्मक सदिशों में आठ भैरव और आठ मातृकाएँ — कौल मण्डल ज्यामिति और वृत्ताकार योगिनी मंदिर स्थापत्य का समन्वय।”',
    overviewEn:
      'Gateway IV documents how the eight Mātṛkās multiply into sixty-four Yoginīs (8 × 8 = 64) in Tantric and Āgamic cosmology. It maps all 64 combinatorial intersections (BM-01-01 to BM-08-08), distinguishing the 8 canonical diagonal consort pairings from the 56 exploratory cross-vectors, alongside archaeological surveys of India’s hypaethral Chausath Yogini temples (Hirapur, Bhedaghat, Mitauli, Ranipur-Jharial).',
    overviewHi:
      'चतुर्थ ज्ञान-द्वार तांत्रिक और आगम ब्रह्माण्ड-विज्ञान में अष्ट मातृकाओं से ६४ योगिनियों (८ × ८ = ६४) के विस्तार का प्रलेखन करता है। यह सभी ६४ संयोजनात्मक बिंदुओं (BM-01-01 से BM-08-08) के साथ-साथ हीरापुर, भेड़ाघाट, मितावली और रानीपुर-झरियाल के वृत्ताकार चौंसठ योगिनी मंदिरों का पुरातात्विक विश्लेषण प्रस्तुत करता है।',
    editorialFramingEn:
      'Editorial Note: The 8×8 derivation (8 Mātṛkā families × 8 Yoginī attendants = 64) is rooted in primary Sanskrit sources (Agni Purāṇa Ch. 52 & 146, Skanda Purāṇa Kāśī Khaṇḍa Ch. 45, Kaulajñānanirṇaya). Within the interactive 64-cell grid, the 8 diagonal cells represent canonical Āgamic consort pairs, while the remaining 56 cross-cells are clearly labeled as structured comparative research vectors.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: अष्ट मातृकाओं से ८×८ = ६४ योगिनियों की उत्पत्ति अग्नि पुराण (अध्याय ५२ एवं १४६), काशी खण्ड (अध्याय ४५) और कौलज्ञाननिर्णय में वर्णित है। ६४-कोष्ठ आव्यूह में ८ विकर्ण कोष्ठ प्रामाणिक आगम युग्म हैं, जबकि शेष ५६ कोष्ठ तुलनात्मक शोध सदिश के रूप में स्पष्ट चिह्नित हैं।',
    methodologyEn: 'Combinatorial matrix modeling · Hypaethral 64-Yogini temple architecture comparison · Agamic dyadic analysis',
    methodologyHi: 'संयोजनात्मक आव्यूह मॉडलिंग · 64-योगिनी वृत्ताकार मंदिर स्थापत्य तुलना · आगम युग्म विश्लेषण',
    accentColor: '#F59E0B',
    secondaryColor: '#581C87',
    mandalaAngle: 64.29,
    domainTagEn: '64-YOGINĪ COMBINATORICS',
    domainTagHi: 'चतुःषष्टि-योगिनी जालक विज्ञान',
    sourceRegisterEn: 'Kaulajñānanirṇaya · Agni Purāṇa (Ch. 52 & 146) · Kāśī Khaṇḍa (Ch. 45) · Hirapur & Bhedaghat Temple Surveys',
    sourceRegisterHi: 'कौलज्ञाननिर्णय · अग्नि पुराण (५२ एवं १४६) · काशी खण्ड (४५) · हीरापुर एवं भेड़ाघाट मंदिर सर्वेक्षण',
    subcategories: [
      {
        id: 'sub-8x8-matrix-grid',
        sanskritName: 'अष्टक-अष्टक जालक · 8 × 8 Bhairava-Mātṛkā Grid',
        titleEn: '64 Addressable Vectors (BM-01-01 to BM-08-08)',
        titleHi: '६४ संयोजनात्मक कोष्ठ (BM-01-01 से BM-08-08 तक)',
        summaryEn: 'Interactive 8×8 matrix intersecting the 8 directional Bhairavas (Rows) with the 8 elemental Mātṛkās (Columns).',
        summaryHi: 'आठ दिशात्मक भैरवों (पंक्तियाँ) और आठ तात्त्विक मातृकाओं (स्तंभ) के ६४ अंतर्संबंधों का संवादात्मक आव्यूह।',
        keyTopicsEn: ['8 Canonical Diagonal Consorts', '56 Exploratory Cross-Vectors', 'Dedicated URL for Every Cell'],
        keyTopicsHi: ['८ प्रामाणिक विकर्ण युग्म', '५६ तुलनात्मक क्रॉस-वेक्टर', 'प्रत्येक कोष्ठ का स्वतंत्र शोध पृष्ठ'],
        sourceClassificationEn: 'Āgamic Dyadic Taxonomy & Combinatorial Model',
        sourceClassificationHi: 'आगम युग्म वर्गीकरण एवं संयोजनात्मक मॉडल',
        articleSlug: 'octant-01-asitanga-matrix'
      },
      {
        id: 'sub-hypaethral-temples',
        sanskritName: 'चौंसठ योगिनी मंदिर स्थापत्य · Hypaethral Yoginī Temples',
        titleEn: 'Open-to-Sky Circular Sanctuaries (Hirapur, Bhedaghat, Mitauli, Ranipur-Jharial)',
        titleHi: 'आकाश-उन्मुख वृत्ताकार चौंसठ योगिनी मंदिर (हीरापुर, भेड़ाघाट, मितावली, रानीपुर-झरियाल)',
        summaryEn: 'Archaeological study of 9th–12th century circular stone mandalas with 64 perimeter niches and central Bhairava pavilions.',
        summaryHi: '६४ परिधि-आलाओं और केंद्रीय भैरव मण्डप वाले ९वीं–१२वीं शताब्दी के वृत्ताकार प्रस्तर मंदिरों का पुरातात्विक अध्ययन।',
        keyTopicsEn: ['Hirapur 64 Chlorite Sculptures', 'Bhedaghat 81 Inscribed Pedestals', 'Mitauli & Ranipur-Jharial Geometry'],
        keyTopicsHi: ['हीरापुर की ६४ प्रतिमाएँ', 'भेड़ाघाट के ८१ अभिलेखीय पीठ', 'मितावली एवं रानीपुर-झरियाल स्थापत्य'],
        sourceClassificationEn: 'Archaeological Survey & Epigraphic Record',
        sourceClassificationHi: 'पुरातात्विक सर्वेक्षण एवं शिलालेखीय साक्ष्य',
        articleSlug: 'hypaethral-chausath-yogini-temples'
      },
      {
        id: 'sub-kaula-yogini-texts',
        sanskritName: 'योगिनी कौल संहिता · Kaula & Purāṇic Yoginī Lists',
        titleEn: 'Kaulajñānanirṇaya, Śrīmatottara & Agni Purāṇa Taxonomies',
        titleHi: 'कौलज्ञाननिर्णय, श्रीमतोत्तर तन्त्र एवं अग्नि पुराण की योगिनी नामावली',
        summaryEn: 'Textual transmission of the 64 Yoginīs across Matsyendranātha’s Yoginī Kaula, Purāṇic lists, and Cakra-pūjā manuals.',
        summaryHi: 'मत्स्येन्द्रनाथ की योगिनी कौल परंपरा, अग्नि पुराण और काशी खण्ड में प्राप्त ६४ योगिनियों की नामावलियों का तुलनात्मक अध्ययन।',
        keyTopicsEn: ['Mātṛkā-born (Mātṛjā) Yoginīs', 'Kṣetraja Geographic Yoginīs', '64 Yoginī-Bhairava Cakra'],
        keyTopicsHi: ['मातृजा योगिनी अष्टक', 'क्षेत्रजा भौगोलिक योगिनियाँ', '६४ योगिनी-भैरव चक्र विधान'],
        sourceClassificationEn: 'Primary Kaula & Purāṇic Manuscripts',
        sourceClassificationHi: 'मूल कौल एवं पौराणिक पाण्डुलिपियाँ',
        articleSlug: 'octant-08-samhara-matrix'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'ashta-bhairava',
        gatewayRoman: 'II',
        labelEn: 'Gateway II · Ashta Bhairava (Matrix Rows 01–08)',
        labelHi: 'द्वार II · अष्ट भैरव (आव्यूह पंक्तियाँ ०१–०८)',
        relationNoteEn: 'Inspect the 8 directional Bhairavas that govern the eight horizontal rows of the 64-Yoginī matrix.',
        relationNoteHi: '६४-योगिनी आव्यूह की आठ क्षैतिज पंक्तियों का संचालन करने वाले अष्ट भैरवों का अध्ययन करें।'
      },
      {
        targetCategorySlug: 'eight-matrikas',
        gatewayRoman: 'V',
        labelEn: 'Gateway V · Śakti Tattva & Eight Mātṛkās (Matrix Columns 01–08)',
        labelHi: 'द्वार V · शक्ति तत्त्व एवं अष्ट मातृका (आव्यूह स्तंभ ०१–०८)',
        relationNoteEn: 'Inspect the 8 Mātṛkā Mother-Powers from which the 8 octads of 64 Yoginīs emanate.',
        relationNoteHi: 'उन आठ मातृका शक्तियों का अध्ययन करें जिनसे ६४ योगिनियों के आठ अष्टक प्रकट होते हैं।'
      },
      {
        targetCategorySlug: 'shri-meru-chakra',
        gatewayRoman: 'VI',
        labelEn: 'Gateway VI · Śrī Meru Chakra & Yoginī Enclosures',
        labelHi: 'द्वार VI · श्रीमेरु चक्र एवं आवरण योगिनी समूह',
        relationNoteEn: 'Compare the 64 Koṭi Yoginīs of the 2nd Śrīcakra enclosure with the 8×8 Bhairava-Mātṛkā matrix.',
        relationNoteHi: 'श्रीचक्र के द्वितीय आवरण की चतुःषष्टि कोटि योगिनियों की ८×८ आव्यूह से तुलना करें।'
      }
    ],
    articles: [...MATRIX_64_PRIMARY_ARTICLES, ...ADDITIONAL_GATEWAY_ARTICLES['64-yogini-matrix']]
  },
  {
    chapterIndex: 4,
    slug: 'eight-matrikas',
    aliasSlugs: ['shakti-tattva', 'divine-feminine', 'ashta-matrika'],
    roman: 'V',
    gatewayBadgeEn: 'SACRED GATEWAY V · ŚAKTI TATTVA — THE DIVINE FEMININE',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार V · शक्ति तत्त्व — पराशक्ति एवं मातृका परम्परा',
    shortTitleEn: 'Śakti Tattva & Matrikas',
    shortTitleHi: 'शक्ति तत्त्व एवं अष्ट मातृका',
    titleEn: 'V · Śakti Tattva — The Divine Feminine & Eight Mātṛkās',
    titleHi: 'V · शक्ति तत्त्व — पराशक्ति, कुल-परम्परा एवं अष्ट मातृका',
    sanskritSeal: 'शक्ति तत्त्व · कालीकुल · श्रीकुल · दशमहाविद्या · अष्टमातृका',
    subtitleEn: 'Kālīkula, Śrīkula, Daśa Mahāvidyā, Aṣṭa Mātṛkā, Catuḥṣaṣṭi Yoginī, Navadurgā & Śakti Pīṭhas',
    subtitleHi: 'कालीकुल, श्रीकुल, दशमहाविद्या, अष्ट मातृका, चतुःषष्टि योगिनी, नवदुर्गा एवं ५१ शक्तिपीठ',
    epigraphEn: '“Exploring Śākta traditions, goddess theology, and primary religious literature — from Kālīkula, Śrīkula, and the Ten Mahāvidyās to the Eight Mātṛkās, Navadurgā, and the Śakti Pīṭhas.”',
    epigraphHi: '“शाक्त परम्परा, देवी तत्त्वज्ञान और मूल आगम-पुराण साहित्य का अन्वेषण — कालीकुल, श्रीकुल और दशमहाविद्या से लेकर अष्ट मातृका, नवदुर्गा और शक्तिपीठों तक।”',
    overviewEn:
      'Gateway V is the comprehensive Śakti Tattva (शक्ति तत्त्व — The Divine Feminine) research archive. It integrates the seven primary pillars of Śākta studies—Kālīkula, Śrīkula, Daśa Mahāvidyā, Aṣṭa Mātṛkā (Brāhmī, Māheśvarī, Kaumārī, Vaiṣṇavī, Vārāhī, Indrāṇī, Cāmuṇḍā, and Mahālakṣmī), Catuḥṣaṣṭi Yoginī, Navadurgā, and the Śakti Pīṭhas—alongside interactive elemental, sacred-geographical, and symbolic cybernetic (3-bit 000–111) visualizations.',
    overviewHi:
      'पंचम ज्ञान-द्वार "शक्ति तत्त्व" (पराशक्ति एवं शाक्त परम्परा) का विस्तृत शोध अभिलेखागार है। इसमें शाक्त अध्ययन के सातों प्रमुख स्तंभ—कालीकुल, श्रीकुल, दशमहाविद्या, अष्ट मातृका (ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, इन्द्राणी, चामुण्डा और महालक्ष्मी), चतुःषष्टि योगिनी, नवदुर्गा और शक्तिपीठ—तथा संवादात्मक तात्त्विक एवं प्रतीकात्मक साइबरनेटिक (000–111) दृश्य प्रणालियाँ समाहित हैं।',
    editorialFramingEn:
      'Editorial Note: Classical Śākta texts (Devī Māhātmya, Devī Bhāgavata, Kālikā Purāṇa, Vāmakeśvara Tantra, Todala Tantra, Pīṭhanirṇaya) are presented with full philological rigor. In the Aṣṭa Mātṛkā studio, the binary 3-bit state-space (000–111) and neuro-endocrine correlates are explicitly framed as contemporary comparative systems models alongside classical Purāṇic iconography.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: मूल शाक्त ग्रन्थों (देवी माहात्म्य, देवी भागवत, कालिका पुराण, वामकेश्वर तन्त्र, तोडल तन्त्र, पीठनिर्णय) का प्रामाणिक विवरण दिया गया है। अष्ट मातृका अध्ययन कक्ष में बाइनरी ३-बिट संकेतक (000–111) और अंतःस्रावी सह-संबंधों को शास्त्रीय प्रतिमाशास्त्र के साथ एक आधुनिक तुलनात्मक प्रणाली मॉडल के रूप में स्पष्ट चिह्नित किया गया है।',
    methodologyEn: 'Śākta textual philology · Kālīkula & Śrīkula comparative lineage study · Sacred Pīṭha cartography · Symbolic cybernetic state-space mapping',
    methodologyHi: 'शाक्त ग्रंथ भाषाविज्ञान · कालीकुल एवं श्रीकुल आम्नाय अध्ययन · शक्तिपीठ मानचित्रण · प्रतीकात्मक साइबरनेटिक अवस्था-मानचित्रण',
    accentColor: '#EC4899',
    secondaryColor: '#4C1D95',
    mandalaAngle: 115.71,
    domainTagEn: 'ŚAKTI TATTVA & MĀTṚKĀ ARCHIVE',
    domainTagHi: 'शक्ति तत्त्व एवं मातृका विज्ञान',
    sourceRegisterEn: 'Devī Māhātmya · Vāmakeśvara Tantra · Todala Tantra · Kālikā Purāṇa · Devī Bhāgavata · Pīṭhanirṇaya',
    sourceRegisterHi: 'देवी माहात्म्य · वामकेश्वर तन्त्र · तोडल तन्त्र · कालिका पुराण · देवी भागवत · पीठनिर्णय',
    subcategories: [
      {
        id: 'sub-kalikula',
        sanskritName: 'कालीकुल · Kālīkula',
        titleEn: 'Kālīkula — The Northern & Eastern Stream of Radical Transcendence',
        titleHi: 'कालीकुल — काल-अतिक्रमण एवं अद्वैत प्रज्ञा की पूर्वी-उत्तरी धारा',
        summaryEn: 'Centered on Kālī, Tārā, and Kālasaṅkarṣiṇī across Kashmir Krama, Bengal, Assam (Kāmākhyā), and Mithila.',
        summaryHi: 'कश्मीर क्रम दर्शन, बंगाल, कामरूप (असम) और मिथिला में काली, तारा एवं कालसंकर्षिणी पर केंद्रित शाक्त आम्नाय।',
        keyTopicsEn: ['Kashmir Krama & Mahārthamañjarī', 'Bṛhannīla Tantra & Tantrasāra', 'Kālī as Kālasaṅkarṣiṇī'],
        keyTopicsHi: ['कश्मीर क्रम एवं महार्थमञ्जरी', 'बृहन्नील तन्त्र एवं तन्त्रसार', 'कालसंकर्षिणी भगवती काली'],
        sourceClassificationEn: 'Primary Kālīkula Tantras & Krama Literature',
        sourceClassificationHi: 'मूल कालीकुल तन्त्र एवं क्रम साहित्य',
        articleSlug: 'kalikula-srikula-streams'
      },
      {
        id: 'sub-srikula',
        sanskritName: 'श्रीकुल · Śrīkula',
        titleEn: 'Śrīkula — Śrīvidyā, Lalitā Tripurasundarī & Aesthetic Non-Dualism',
        titleHi: 'श्रीकुल — श्रीविद्या, ललिता त्रिपुरसुन्दरी एवं सौन्दर्य-अद्वैत',
        summaryEn: 'Centered on Lalitā Mahātripurasundarī, the Pañcadaśī/Ṣoḍaśī mantra, and the nine enclosures of the Śrīcakra.',
        summaryHi: 'ललिता महात्रिपुरसुन्दरी, पञ्चदशी/षोडशी महामन्त्र और श्रीचक्र के नवावरण पर केंद्रित दक्षिणाम्नाय परम्परा।',
        keyTopicsEn: ['Vāmakeśvara Tantra & Yoginīhṛdaya', 'Lalitā Sahasranāma & Saundarya Laharī', 'Kaula vs. Samaya Approaches'],
        keyTopicsHi: ['वामकेश्वर तन्त्र एवं योगिनीहृदय', 'ललिता सहस्रनाम एवं सौन्दर्य लहरी', 'कौल एवं समय मत समन्वय'],
        sourceClassificationEn: 'Primary Śrīvidyā Āgamas & Purāṇas',
        sourceClassificationHi: 'मूल श्रीविद्या आगम एवं पुराण',
        articleSlug: 'kalikula-srikula-streams'
      },
      {
        id: 'sub-dasa-mahavidya',
        sanskritName: 'दशमहाविद्या · Daśa Mahāvidyā',
        titleEn: 'Daśa Mahāvidyā — The Ten Cosmic Wisdom Goddesses',
        titleHi: 'दशमहाविद्या — दस महाविद्याओं का तत्त्वज्ञान',
        summaryEn: 'Kālī, Tārā, Tripurasundarī, Bhuvaneśvarī, Bhairavī, Chinnamastā, Dhūmāvatī, Bagalāmukhī, Mātaṅgī, and Kamalā.',
        summaryHi: 'काली, तारा, षोडशी, भुवनेश्वरी, भैरवी, छिन्नमस्ता, धूमावती, बगलामुखी, मातंगी और कमला का पूर्ण दश-मण्डल।',
        keyTopicsEn: ['Ugra & Saumya Wisdom Forms', 'Todala Tantra Bhairava Pairings', 'Kāmākhyā Ten-Shrine Complex'],
        keyTopicsHi: ['उग्र एवं सौम्य प्रज्ञा स्वरूप', 'तोडल तन्त्र भैरव युग्मन', 'कामाख्या के दस महाविद्या मंदिर'],
        sourceClassificationEn: 'Todala Tantra, Muṇḍamālā Tantra & Śākta Upapurāṇas',
        sourceClassificationHi: 'तोडल तन्त्र, मुण्डमाला तन्त्र एवं शाक्त उपपुराण',
        articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses'
      },
      {
        id: 'sub-ashta-matrika',
        sanskritName: 'अष्ट मातृका · Aṣṭa Mātṛkā',
        titleEn: 'Aṣṭa Mātṛkā — The Eight Mother-Powers of the Cosmos & Syllable Classes',
        titleHi: 'अष्ट मातृका — ब्राह्म्यादि आठ मातृका शक्तियाँ एवं वर्ण-वर्ग',
        summaryEn: 'Brāhmī, Māheśvarī, Kaumārī, Vaiṣṇavī, Vārāhī, Indrāṇī, Cāmuṇḍā, and Mahālakṣmī across Purāṇa, phoneme classes, and 3-bit operators.',
        summaryHi: 'ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, इन्द्राणी, चामुण्डा और महालक्ष्मी का शास्त्रीय, वर्णमाला एवं साइबरनेटिक अध्ययन।',
        keyTopicsEn: ['Devī Māhātmya Ch. 8 Origin', '8 Sanskrit Consonant Classes (A–Śa varga)', 'Binary 3-Bit Operators (000–111)'],
        keyTopicsHi: ['देवी माहात्म्य अध्याय ८ प्राकट्य', 'संस्कृत वर्णमाला के ८ वर्ग', 'बाइनरी ३-बिट संकेतक (000–111)'],
        sourceClassificationEn: 'Devī Māhātmya, Varāha Purāṇa & Symbolic Systems Model',
        sourceClassificationHi: 'देवी माहात्म्य, वराह पुराण एवं प्रतीकात्मक प्रणाली मॉडल',
        articleSlug: 'brahmi'
      },
      {
        id: 'sub-catuhshashti-yogini-link',
        sanskritName: 'चतुःषष्टि योगिनी · Catuḥṣaṣṭi Yoginī',
        titleEn: 'Catuḥṣaṣṭi Yoginī — The 64 Yoginī Emanations (8 × 8 = 64)',
        titleHi: 'चतुःषष्टि योगिनी — अष्ट मातृकाओं से प्रकट ६४ योगिनी शक्तियाँ',
        summaryEn: 'Each of the 8 Mātṛkās projects 8 Yoginī attendants, forming the 64-vector mandala explored in full in Gateway IV.',
        summaryHi: 'प्रत्येक मातृका से ८-८ योगिनियों का प्राकट्य होकर ६४ योगिनी चक्र बनता है, जिसका पूर्ण ८×८ आव्यूह द्वार IV में स्थित है।',
        keyTopicsEn: ['8 Mātṛkās × 8 Attendants = 64', 'Hypaethral Circular Sanctuaries', 'Direct Link to Gateway IV Matrix'],
        keyTopicsHi: ['८ मातृका × ८ शक्तियाँ = ६४', 'वृत्ताकार चौंसठ योगिनी मंदिर', 'द्वार IV के ८×८ आव्यूह से सीधा सूत्र'],
        sourceClassificationEn: 'Kaula Tantras, Agni Purāṇa & Temple Archaeology',
        sourceClassificationHi: 'कौल तन्त्र, अग्नि पुराण एवं मंदिर पुरातत्व',
        crossGatewaySlug: '64-yogini-matrix'
      },
      {
        id: 'sub-navadurga',
        sanskritName: 'नवदुर्गा · Navadurgā',
        titleEn: 'Navadurgā — The Ninefold Liturgical & Protective Mandala of Durgā',
        titleHi: 'नवदुर्गा — शैलपुत्री से सिद्धिदात्री पर्यन्त देवी के नौ स्वरूप',
        summaryEn: 'Śailaputrī, Brahmacāriṇī, Candraghaṇṭā, Kūṣmāṇḍā, Skandamātā, Kātyāyanī, Kālarātri, Mahāgaurī, and Siddhidātrī.',
        summaryHi: 'शैलपुत्री, ब्रह्मचारिणी, चन्द्रघण्टा, कूष्माण्डा, स्कन्दमाता, कात्यायनी, कालरात्रि, महागौरी एवं सिद्धिदात्री का नवरात्रि चक्र।',
        keyTopicsEn: ['Devī Kavaca Ninefold Sequence', 'Agni Purāṇa Ugracaṇḍā Mandala', 'Kāśī Nine-Shrine Pilgrimage'],
        keyTopicsHi: ['देवी कवच का नव-सोपान क्रम', 'अग्नि पुराण का उग्रचण्डा मण्डल', 'काशी की नवदुर्गा यात्रा'],
        sourceClassificationEn: 'Devī Kavaca, Mārkaṇḍeya Purāṇa & Kāśī Khaṇḍa',
        sourceClassificationHi: 'देवी कवच, मार्कण्डेय पुराण एवं काशी खण्ड',
        articleSlug: 'navadurga-nine-forms'
      },
      {
        id: 'sub-shakti-pithas',
        sanskritName: 'शक्तिपीठ · Śakti Pīṭhas',
        titleEn: 'Śakti Pīṭhas — Catuṣpīṭha & the 51 Sacred Seats of the Goddess',
        titleHi: 'शक्तिपीठ — आदि चतुष्पीठ एवं ५१ शक्तिपीठों का पवित्र भूगोल',
        summaryEn: 'Sacred geography linking the four primordial Tantric Pīṭhas and the 51 Purāṇic seats with the 51 Sanskrit Mātṛkā letters and guardian Bhairavas.',
        summaryHi: 'चार आदि तांत्रिक पीठों (कामरूप, पूर्णगिरि, ओड्डियान, जालन्धर) और ५१ पौराणिक शक्तिपीठों का ५१ मातृका अक्षरों एवं भैरवों के साथ मानचित्रण।',
        keyTopicsEn: ['Catuṣpīṭha (4 Primordial Seats)', '51 Pīṭhas = 51 Mātṛkā Letters', 'Śakti-Bhairava Consort Geography'],
        keyTopicsHi: ['आदि चतुष्पीठ परम्परा', '५१ पीठ = ५१ मातृका अक्षर', 'शक्ति-भैरव युग्म भूगोल'],
        sourceClassificationEn: 'Kubjikāmata, Kālikā Purāṇa, Devī Bhāgavata & Pīṭhanirṇaya',
        sourceClassificationHi: 'कुब्जिकामत, कालिका पुराण, देवी भागवत एवं पीठनिर्णय',
        articleSlug: 'shakti-pithas-sacred-geography'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: '64-yogini-matrix',
        gatewayRoman: 'IV',
        labelEn: 'Gateway IV · Catuḥṣaṣṭi Yoginī (8 Bhairavas × 8 Mātṛkās Matrix)',
        labelHi: 'द्वार IV · चतुःषष्टि योगिनी (८ भैरव × ८ मातृका आव्यूह)',
        relationNoteEn: 'Open the full 64-cell interactive matrix generated by the Eight Mātṛkās and Eight Bhairavas.',
        relationNoteHi: 'अष्ट मातृकाओं और अष्ट भैरवों के संयोग से निर्मित संपूर्ण ६४-कोष्ठ संवादात्मक आव्यूह खोलें।'
      },
      {
        targetCategorySlug: 'shri-meru-chakra',
        gatewayRoman: 'VI',
        labelEn: 'Gateway VI · Śrī Meru Chakra (Śrīkula Navāvaraṇa Geometry)',
        labelHi: 'द्वार VI · श्रीमेरु चक्र (श्रीकुल नवावरण ज्यामिति)',
        relationNoteEn: 'See how the Eight Mātṛkās guard the outer Trailokyamohana Bhūpura of the Śrī Meru Yantra.',
        relationNoteHi: 'देखें कि किस प्रकार अष्ट मातृकाएँ श्रीमेरु यन्त्र के बाहरी त्रैलोक्यमोहन भूपुर के द्वारों की रक्षा करती हैं।'
      },
      {
        targetCategorySlug: 'ashta-bhairava',
        gatewayRoman: 'II',
        labelEn: 'Gateway II · Śiva & Aṣṭa Bhairava Consort Pairings',
        labelHi: 'द्वार II · शिव एवं अष्ट-भैरव युग्म विधान',
        relationNoteEn: 'Examine the eight directional Bhairavas paired with each of the Eight Mātṛkās.',
        relationNoteHi: 'प्रत्येक मातृका शक्ति के साथ युग्मित आठ दिशात्मक भैरवों का अध्ययन करें।'
      }
    ],
    articles: [...SHAKTI_TATTVA_CORE_ARTICLES, ...EIGHT_MATRIKAS_ARTICLES]
  },
  {
    chapterIndex: 5,
    slug: 'shri-meru-chakra',
    aliasSlugs: ['mantra-yantra-tantra', 'sri-vidya-meru'],
    roman: 'VI',
    gatewayBadgeEn: 'SACRED GATEWAY VI · MANTRA, YANTRA & ŚRĪ MERU CHAKRA',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार VI · मन्त्र, यन्त्र एवं श्री-मेरु-चक्र',
    shortTitleEn: 'Shri Meru Chakra',
    shortTitleHi: 'श्री मेरु चक्र',
    titleEn: 'VI · Mantra, Yantra & Śrī Meru Chakra (Nine Āvaraṇas)',
    titleHi: 'VI · मन्त्र-यन्त्र विज्ञान एवं श्री मेरु चक्र (नव आवरण)',
    sanskritSeal: 'श्रीयन्त्र नवावरण · चतुश्चत्वारिंशत् त्रिकोणम् · षट्चक्रम्',
    subtitleEn: 'Nine Concentric Enclosures, 44 Interlocking Triangles, Bhūpura Mātṛkā Guardians, Mātṛkā Varṇamālā & Ṣaṭ-Cakra Subtle Anatomy',
    subtitleHi: 'नौ संकेंद्रित आवरण, ४४ अंतर्ग्रथित त्रिकोण, भूपुर मातृका द्वारपाल, मातृका वर्णमाला एवं षट्चक्र सूक्ष्म-शरीर विज्ञान',
    epigraphEn: '“One Yantra, Nine Enclosures, Forty-Four Triangles, and the Eight Mothers of the Bhūpura — a continuous geometric and mantric journey inward to the Bindu.”',
    epigraphHi: '“एक यन्त्र, नौ आवरण, चौवालीस त्रिकोण और भूपुर की अष्ट मातृकाएँ — बाहरी द्वार से केंद्रीय बिन्दु की ओर एक सतत ज्यामितीय एवं मान्त्रिक यात्रा।”',
    overviewEn:
      'Gateway VI documents the sacred geometry and mantric science of the Śrī Yantra in its three-dimensional Mahāmeru projection. It details all nine Āvaraṇa enclosures—from the outer Trailokyamohana Bhūpura square guarded by the Aṣṭa Mātṛkās inward through the 16-petal and 8-petal lotuses and the nine interlocking Śiva-Śakti triangles (forming 43/44 triangles) to the Sarvānandamaya Bindu—alongside Mātṛkā Varṇamālā phonemics and Ṣaṭ-Cakra subtle anatomy.',
    overviewHi:
      'षष्ठ ज्ञान-द्वार त्रि-आयामी महामेरु प्रक्षेपण में श्रीयन्त्र की पवित्र ज्यामिति और मन्त्र-शास्त्र का प्रलेखन करता है। इसमें अष्ट मातृकाओं द्वारा रक्षित बाहरी त्रैलोक्यमोहन भूपुर से लेकर १६-दल व ८-दल कमल तथा ४३/४४ अंतर्ग्रथित त्रिकोणों से होते हुए केंद्रीय सर्वानन्दमय बिन्दु तक सभी नौ आवरणों के साथ-साथ मातृका वर्णमाला और षट्चक्र सूक्ष्म-शरीर विज्ञान का विवरण है।',
    editorialFramingEn:
      'Editorial Note: Primary Śrīvidyā texts (Vāmakeśvara Tantra / Nityāṣoḍaśikārṇava, Yoginīhṛdaya, Bhāvanopaniṣad, Saundarya Laharī) are presented alongside interactive 2D/3D algorithmic geometry so readers can inspect both the liturgical Navāvaraṇa krama and its exact mathematical construction.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: मूल श्रीविद्या ग्रन्थों (वामकेश्वर तन्त्र, योगिनीहृदय, भावनोपनिषद्, सौन्दर्य लहरी) के शास्त्रीय नवावरण विधान को संवादात्मक त्रि-आयामी ज्यामितीय मॉडल के साथ प्रस्तुत किया गया है।',
    methodologyEn: 'Algorithmic Śrī Yantra construction · 3D Mahāmeru elevation modeling · Navāvaraṇa & Ṣaṭ-Cakra textual analysis',
    methodologyHi: 'श्रीयन्त्र ज्यामितीय निर्माण · त्रि-आयामी महामेरु उन्नयन मॉडलिंग · नवावरण एवं षट्चक्र शास्त्रीय विश्लेषण',
    accentColor: '#FBBF24',
    secondaryColor: '#78350F',
    mandalaAngle: 167.14,
    domainTagEn: 'YANTRA, MANTRA & CAKRA SCIENCE',
    domainTagHi: 'यन्त्र, मन्त्र एवं चक्र विज्ञान',
    sourceRegisterEn: 'Vāmakeśvara Tantra · Yoginīhṛdaya · Saundarya Laharī · Bhāvanopaniṣad · Ṣaṭ-cakra-nirūpaṇa',
    sourceRegisterHi: 'वामकेश्वर तन्त्र · योगिनीहृदय · सौन्दर्य लहरी · भावनोपनिषद् · षट्चक्रनिरूपण',
    subcategories: [
      {
        id: 'sub-navavarana-geometry',
        sanskritName: 'नवावरण एवं महामेरु · Nine Āvaraṇas & Mahāmeru',
        titleEn: 'The Nine Concentric Enclosures (Trailokyamohana to Sarvānandamaya Bindu)',
        titleHi: 'नौ संकेंद्रित आवरण (त्रैलोक्यमोहन चक्र से सर्वानन्दमय बिन्दु तक)',
        summaryEn: 'Step-by-step architectural and contemplative progression across all 9 Āvaraṇas, 44 triangles, and presiding Yoginī classes.',
        summaryHi: 'सभी ९ आवरणों, ४४ त्रिकोणों और अधिष्ठात्री योगिनी समूहों (प्रकटा, गुप्ता, सम्प्रदाय, कुलकौली आदि) का क्रमिक विवरण।',
        keyTopicsEn: ['Bhūpura & 8 Mātṛkā Portals', '16-Petal & 8-Petal Lotuses', '4 Śiva + 5 Śakti Triangles = 43/44 Triangles'],
        keyTopicsHi: ['भूपुर एवं अष्ट मातृका द्वार', '१६-दल एवं ८-दल पद्म', '४ श्रीकण्ठ + ५ शिवयुवती = ४३/४४ त्रिकोण'],
        sourceClassificationEn: 'Primary Śrīvidyā Āgama & Geometric Topology',
        sourceClassificationHi: 'मूल श्रीविद्या आगम एवं ज्यामितीय संरचना',
        articleSlug: 'avarana-01-trailokya-mohana-chakra'
      },
      {
        id: 'sub-matrika-varnamala-chakras',
        sanskritName: 'मातृका वर्णमाला एवं षट्चक्र · Varṇamālā & Ṣaṭ-Cakra',
        titleEn: '50 Sanskrit Mātṛkā Phonemes & the Six Subtle-Body Cakras',
        titleHi: '५० मातृका अक्षर एवं षट्चक्र के कमल-दलों का गणितीय विधान',
        summaryEn: 'How the 50 Sanskrit letters (a–kṣa) partition across the 4, 6, 10, 12, 16, and 2 petals of the six yogic cakras and the Śrīcakra.',
        summaryHi: 'संस्कृत के ५० अक्षरों का मूलाधार (४), स्वाधिष्ठान (६), मणिपूर (१०), अनाहत (१२), विशुद्ध (१६) और आज्ञा (२) चक्र में न्यास।',
        keyTopicsEn: ['16+12+10+6+4+2 = 50 Petals', 'Saṅketa-Traya (Cakra, Mantra, Pūjā)', 'Bhāvanopaniṣad Body-Yantra Identity'],
        keyTopicsHi: ['१६+१२+१०+६+४+२ = ५० दल', 'योगिनीहृदय का संकेत-त्रय', 'भावनोपनिषद् का देह-श्रीयन्त्र ऐक्य'],
        sourceClassificationEn: 'Mantra-Śāstra & Tantric Subtle Anatomy',
        sourceClassificationHi: 'मन्त्र-शास्त्र एवं तांत्रिक सूक्ष्म-शरीर विज्ञान',
        articleSlug: 'matrika-varnamala-shat-chakra'
      },
      {
        id: 'sub-bindu-trikona',
        sanskritName: 'सर्वसिद्धिप्रद एवं सर्वानन्दमय · Trikoṇa & Bindu Pinnacle',
        titleEn: 'The Innermost Triangle (Kāmakalā) & Supreme Bindu',
        titleHi: 'अंतर्तम त्रिकोण (कामकला) एवं सर्वोच्च सर्वानन्दमय बिन्दु',
        summaryEn: 'Kāmeśvarī, Vajreśvarī, and Bhagamālinī at the 8th Āvaraṇa triangle surrounding the non-dual Śiva-Śakti Bindu (9th Āvaraṇa).',
        summaryHi: 'अष्टम आवरण के त्रिकोण में कामेश्वरी, वज्रेश्वरी और भगमालिनी तथा नवम आवरण के अद्वैत बिन्दु का तत्त्वज्ञान।',
        keyTopicsEn: ['Kāmeśvarī, Vajreśvarī, Bhagamālinī', '4 Pīṭhas (Kāmarūpa, Pūrṇagiri, Jālandhara, Oḍḍiyāna)', 'Sarvānandamaya Bindu'],
        keyTopicsHi: ['कामेश्वरी, वज्रेश्वरी एवं भगमालिनी', 'अंतर्तम त्रिकोण में चतुष्पीठ न्यास', 'सर्वानन्दमय बिन्दु चक्र'],
        sourceClassificationEn: 'Nityāṣoḍaśikārṇava & Yoginīhṛdaya',
        sourceClassificationHi: 'नित्याषोडशिकार्णव एवं योगिनीहृदय',
        articleSlug: 'avarana-09-sarvanandamaya-chakra'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'eight-matrikas',
        gatewayRoman: 'V',
        labelEn: 'Gateway V · Śakti Tattva, Śrīkula & Eight Mātṛkās',
        labelHi: 'द्वार V · शक्ति तत्त्व, श्रीकुल एवं अष्ट मातृका',
        relationNoteEn: 'Examine the Śrīkula theological lineage and the Eight Mātṛkās stationed at the outer Bhūpura of the Śrī Meru Chakra.',
        relationNoteHi: 'श्रीकुल आम्नाय और श्रीमेरु के बाहरी भूपुर पर अधिष्ठित अष्ट मातृकाओं का अध्ययन करें।'
      },
      {
        targetCategorySlug: 'the-14-lokas',
        gatewayRoman: 'VII',
        labelEn: 'Gateway VII · Mount Meru & The 14 Cosmic Realms',
        labelHi: 'द्वार VII · सुमेरु अक्ष एवं चतुर्दश लोक',
        relationNoteEn: 'Compare the microcosmic 3D Mahāmeru Yantra with the macrocosmic Mount Meru axis of the 14 Lokas.',
        relationNoteHi: 'सूक्ष्म-ब्रह्माण्डीय त्रि-आयामी महामेरु यन्त्र की चतुर्दश लोक के सुमेरु अक्ष से तुलना करें।'
      }
    ],
    articles: [...SHRI_MERU_ARTICLES, ...ADDITIONAL_GATEWAY_ARTICLES['shri-meru-chakra']]
  },
  {
    chapterIndex: 6,
    slug: 'the-14-lokas',
    aliasSlugs: ['caturdasha-loka-cosmology', 'hindu-cosmology-14-lokas'],
    roman: 'VII',
    gatewayBadgeEn: 'SACRED GATEWAY VII · BRAHMĀṆḌA & THE 14 LOKAS',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार VII · ब्रह्माण्ड एवं चतुर्दश लोक',
    shortTitleEn: 'The 14 Lokas',
    shortTitleHi: 'चतुर्दश लोक (14 लोक)',
    titleEn: 'VII · The 14 Lokas in Hindu Cosmology (Caturdaśa Bhuvana)',
    titleHi: 'VII · हिन्दू ब्रह्माण्ड विज्ञान में चतुर्दश लोक (14 लोक)',
    sanskritSeal: 'ऊर्ध्व सप्तलोक · अधो सप्तपाताल ब्रह्माण्डम्',
    subtitleEn: 'Seven Higher Realms (Ūrdhva Lokas) & Seven Subterranean Realms (Adho Lokas / Pātāla / Bila-Svarga)',
    subtitleHi: 'सात उच्च लोक (ऊर्ध्व लोक) एवं सात अधो लोक (पाताल / बिल-स्वर्ग)',
    epigraphEn: '“Fourteen Lokas across the vertical axis of the Brahmanda — seven higher realms (Urdhva Lokas) and seven subterranean kingdoms (Adho Lokas / Patala) pivoted around Bhuloka.”',
    epigraphHi: '“ब्रह्माण्ड के ऊर्ध्वाधर अक्ष पर चौदह लोक — भूर्लोक (पृथ्वी) की धुरी से विभाजित सात उच्च लोक (ऊर्ध्व लोक) और सात भूमिगत लोक (अधो लोक / पाताल)।”',
    overviewEn:
      'Gateway VII explores the 14 Lokas (worlds or planes of existence) in Hindu cosmology: seven higher realms (Ūrdhva Lokas — Satya, Tapa, Jana, Mahar, Svar, Bhuvar, Bhūr) and seven lower subterranean realms (Adho Lokas / Pātāla — Atala, Vitala, Sutala, Talātala, Mahātala, Rasātala, Pātāla), documenting their Puranic descriptions, inhabitants, subtle-body cakra homologies, and the crucial distinction between the opulent Bila-Svarga (Pātāla) realms and the punitive realms of Naraka.',
    overviewHi:
      'सप्तम ज्ञान-द्वार हिन्दू ब्रह्माण्ड-विज्ञान के १४ लोकों का समग्र अध्ययन प्रस्तुत करता है: सात उच्च लोक (ऊर्ध्व लोक — सत्य, तप, जन, महर्, स्वर्, भुवर्, भूर्) और सात अधो लोक (पाताल / बिल-स्वर्ग — अतल, वितल, सुतल, तलातल, महातल, रसातल, पाताल), जिनमें प्रत्येक लोक का पौराणिक स्वरूप, निवासी, सूक्ष्म-शरीर चक्र समरूपता और पाताल व नरक के बीच का शास्त्रीय अंतर स्पष्ट किया गया है।',
    editorialFramingEn:
      'Editorial Note: Descriptions of the 14 Lokas vary across Vedic, Purāṇic (Viṣṇu Purāṇa Book 2, Bhāgavata Purāṇa Canto 5, Padma Purāṇa), and Yogic (Vyāsa Bhāṣya on Yoga Sūtra 3.26) sources. Notably, Purāṇic texts describe the seven Pātālas as Bila-Svarga ("subterranean heavens") filled with architectural splendor and jewel-light—explicitly distinct from the Naraka realms located beneath Pātāla near the Garbhodaka ocean.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: १४ लोकों का वर्णन विष्णु पुराण (द्वितीय अंश), श्रीमद्भागवत पुराण (पंचम स्कन्ध) और पातञ्जल योगसूत्र के व्यासभाष्य (३.२६) में मिलता है। पुराणों में सातों पातालों को "बिल-स्वर्ग" (दिव्य भूमिगत लोक) कहा गया है, जो दण्ड-स्वरूप "नरक" लोकों से पूर्णतः भिन्न हैं।',
    methodologyEn: 'Comparative Puranic cosmography · Subtle-body (Chakra/Vyahriti) homology · Vertical Meru axis mapping',
    methodologyHi: 'तुलनात्मक पौराणिक ब्रह्माण्ड-विज्ञान · सूक्ष्म-शरीर (चक्र/व्याहृति) समरूपता · सुमेरु अक्ष मानचित्रण',
    accentColor: '#38BDF8',
    secondaryColor: '#1E3A8A',
    mandalaAngle: 218.57,
    domainTagEn: 'PURĀṆIC COSMOGRAPHY',
    domainTagHi: 'पौराणिक ब्रह्माण्ड-विज्ञान',
    sourceRegisterEn: 'Bhāgavata Purāṇa (Canto 5) · Viṣṇu Purāṇa (Book 2) · Vyāsa Bhāṣya on Yoga Sūtras (3.26)',
    sourceRegisterHi: 'श्रीमद्भागवत पुराण (पंचम स्कन्ध) · विष्णु पुराण (द्वितीय अंश) · योगसूत्र व्यासभाष्य (३.२६)',
    subcategories: [
      {
        id: 'sub-urdhva-lokas',
        sanskritName: 'ऊर्ध्व सप्तलोक · Seven Upper Worlds (Ūrdhva Lokas)',
        titleEn: 'Satya, Tapa, Jana, Mahar, Svar, Bhuvar & Bhūr Loka',
        titleHi: 'सत्य, तप, जन, महर्, स्वर्, भुवर् एवं भूर्लोक (ऊर्ध्व सप्तलोक)',
        summaryEn: 'The seven ascending planes invoked in the Mahāvyāhṛtis—from earthly Bhūloka through celestial Svarga to Brahma’s Satyaloka.',
        summaryHi: 'गायत्री महाव्याहृतियों में आहूत सात ऊर्ध्व लोक—पृथ्वी (भूर्लोक) से लेकर इन्द्र के स्वर्ग और ब्रह्मलोक (सत्यलोक) तक।',
        keyTopicsEn: ['Satyaloka, Tapaloka, Janaloka (Acala)', 'Maharloka Transitional Stratum', 'Svarloka, Bhuvarloka & Bhūloka (Karmabhūmi)'],
        keyTopicsHi: ['सत्यलोक, तपोलोक एवं जनलोक', 'महर्लोक (प्रलय-संधि लोक)', 'स्वर्लोक, भुवर्लोक एवं कर्मभूमि भूर्लोक'],
        sourceClassificationEn: 'Viṣṇu Purāṇa, Bhāgavata Purāṇa & Taittirīya Āraṇyaka',
        sourceClassificationHi: 'विष्णु पुराण, भागवत पुराण एवं तैत्तिरीय आरण्यक',
        articleSlug: 'satya-loka'
      },
      {
        id: 'sub-adho-lokas-patala',
        sanskritName: 'अधो सप्तपाताल (बिल-स्वर्ग) · Seven Lower Worlds (Adho Lokas)',
        titleEn: 'Atala, Vitala, Sutala, Talātala, Mahātala, Rasātala & Pātāla',
        titleHi: 'अतल, वितल, सुतल, तलातल, महातल, रसातल एवं पाताल (बिल-स्वर्ग)',
        summaryEn: 'The seven subterranean realms beneath Bhūloka inhabited by Daityas, Dānavas, and Nāgas—including King Bali in Sutala, Maya Dānava in Talātala, and Vāsuki in Pātāla.',
        summaryHi: 'भूर्लोक के नीचे स्थित सात भव्य भूमिगत लोक—सुतल में राजा बलि और वामन, तलातल में मय दानव और हाटकेश्वर शिव, तथा पाताल में वासुकि और नागों का निवास।',
        keyTopicsEn: ['Sutala (Rājā Bali & Vāmana Guardian)', 'Talātala (Maya Dānava) & Vitala (Hāṭakeśvara Śiva)', 'Pātāla (Vāsuki, Nāgaloka & Saṅkarṣaṇa/Ananta)'],
        keyTopicsHi: ['सुतल (राजा बलि एवं भगवान् वामन)', 'तलातल (मय दानव) एवं वितल (हाटकेश्वर शिव)', 'पाताल (वासुकि, नागलोक एवं भगवान् अनन्त/संकर्षण)'],
        sourceClassificationEn: 'Bhāgavata Purāṇa (5.24) & Viṣṇu Purāṇa (2.5)',
        sourceClassificationHi: 'श्रीमद्भागवत पुराण (५.२४) एवं विष्णु पुराण (२.५)',
        articleSlug: 'sutala-loka'
      },
      {
        id: 'sub-patala-vs-naraka',
        sanskritName: 'पाताल बनाम नरक भेद · Pātāla vs. Naraka Distinction',
        titleEn: 'Clarifying Cosmography: Why the Seven Pātālas Are Not "Seven Hells"',
        titleHi: 'शास्त्रीय स्पष्टीकरण: सप्त-पाताल "नरक" क्यों नहीं हैं?',
        summaryEn: 'Purāṇic literature explicitly describes the seven Adho Lokas as Bila-Svarga (subterranean paradises of architectural splendor), whereas the 28 Narakas lie below Pātāla for temporary karmic rectification.',
        summaryHi: 'पुराणों में सप्त-पातालों को दिव्य ऐश्वर्य से युक्त "बिल-स्वर्ग" कहा गया है, जबकि दण्ड-स्वरूप २८ नरक लोक पाताल से भी नीचे गर्भोदक सागर के समीप स्थित हैं।',
        keyTopicsEn: ['Bila-Svarga Jewel-Lit Architecture', '28 Narakas Beneath Pātāla (Bhāgavata 5.26)', 'Ananta-Śeṣa Below the Seventh Stratum'],
        keyTopicsHi: ['मणि-प्रकाशित बिल-स्वर्ग स्थापत्य', 'पाताल के नीचे स्थित २८ नरक (भागवत ५.२६)', 'सप्तम पाताल के नीचे भगवान् अनन्त-शेष'],
        sourceClassificationEn: 'Comparative Purāṇic Philology',
        sourceClassificationHi: 'तुलनात्मक पौराणिक भाषाविज्ञान',
        articleSlug: 'patala-loka'
      },
      {
        id: 'sub-samaya-ashta-prahar',
        sanskritName: 'समय एवं अष्ट प्रहर (काल-गणना) · Samaya & Aṣṭa Prahara',
        titleEn: 'Samaya and the Eight Prahars (Aṣṭa Prahara) — Traditional Indian Timekeeping',
        titleHi: 'समय और उसके आठ पहर (अष्ट प्रहर) — भारतीय कालगणना एवं राग-समय का विस्तृत अध्ययन',
        summaryEn: 'Complete study of the 8 Prahars of a 24-hour Ahorātra (Prātaḥkāla, Pūrvāhṇa, Madhyāhna, Aparāhṇa, Sandhyākāla, Prathama Rātri, Ardharātri, Aṣṭama Prahara), solar vs. clock reckoning, Rāga-Samaya, and Muhūrta vs. Brahma-muhūrta.',
        summaryHi: '२४ घंटे के अहोरात्र के ८ प्रहरों (प्रातःकाल, पूर्वाह्न, मध्याह्न, अपराह्न, संध्याकाल, रात्रि का प्रथम भाग, अर्धरात्रि, अष्टम प्रहर), सूर्य-आधारित गणना, राग-समय सिद्धांत तथा प्रहर, याम, मुहूर्त (४८ मिनट) व ब्रह्ममुहूर्त के अंतर का विस्तृत अध्ययन।',
        keyTopicsEn: ['8 Prahars (6 AM Illustrative Clock vs. Solar Reckoning)', 'Prahar, Yāma, Muhūrta (48m), Sandhyā & Brahma-muhūrta', 'Hindustani Rāga-Samaya (Time-Theory of Rāgas)'],
        keyTopicsHi: ['अष्ट प्रहर (३-३ घंटे की मानक घड़ी बनाम सूर्योदय-आधारित गणना)', 'प्रहर, याम, मुहूर्त (४८ मिनट), संध्या व ब्रह्ममुहूर्त में अंतर', 'हिंदुस्तानी शास्त्रीय संगीत का राग-समय सिद्धांत'],
        sourceClassificationEn: 'Jyotiṣa, Purāṇic Kāla-Vidyā & Musicological Scholarship',
        sourceClassificationHi: 'ज्योतिष, पौराणिक काल-विद्या एवं संगीत-शास्त्र',
        articleSlug: 'samaya-ashta-prahar-timekeeping'
      }
    ],
    crossLinks: [
      {
        targetCategorySlug: 'shri-meru-chakra',
        gatewayRoman: 'VI',
        labelEn: 'Gateway VI · Śrī Meru Chakra & Subtle-Body Cakras',
        labelHi: 'द्वार VI · श्रीमेरु चक्र एवं षट्चक्र समरूपता',
        relationNoteEn: 'Compare the 7 upper Lokas and 7 lower Talas with the vertical subtle-body cakra axis and Mahāmeru geometry.',
        relationNoteHi: '७ ऊर्ध्व लोकों और ७ अधो तलों की सूक्ष्म-शरीर के चक्र-अक्ष और महामेरु ज्यामिति से तुलना करें।'
      },
      {
        targetCategorySlug: 'cags-field-archive',
        targetArticleSlug: 'jaya-vijaya-vaikuntha-dvarapalas',
        gatewayRoman: 'I',
        labelEn: 'Gateway I · Jaya and Vijaya (Vaikuṇṭha Dvārapālas & Yuga Cycles)',
        labelHi: 'द्वार I · जय और विजय (वैकुण्ठ द्वारपाल एवं युग-चक्र)',
        relationNoteEn: 'See how Jaya and Vijaya’s three earthly births unfold across Satya, Tretā, and Dvāpara Yugas.',
        relationNoteHi: 'देखें कि जय और विजय के तीन जन्म सत्य, त्रेता और द्वापर युग के काल-चक्र में किस प्रकार घटित होते हैं।'
      },
      {
        targetCategorySlug: 'cags-field-archive',
        targetArticleSlug: 'vaishnava-pancharatra-avatara-tattva',
        gatewayRoman: 'I',
        labelEn: 'Gateway I · Vaiṣṇava Cosmology (Vāmana in Sutala & Saṅkarṣaṇa Below Pātāla)',
        labelHi: 'द्वार I · वैष्णव ब्रह्माण्ड-विज्ञान (सुतल में वामन एवं पाताल के नीचे संकर्षण)',
        relationNoteEn: 'Explore the Pāñcarātra and Purāṇic theology of Vāmana, Varāha, and Ananta-Saṅkarṣaṇa across the cosmic strata.',
        relationNoteHi: 'सुतल में वामन और पाताल के नीचे अनन्त-संकर्षण के वैष्णव आगम एवं पौराणिक तत्त्वज्ञान का अध्ययन करें।'
      }
    ],
    articles: [
      ...FOURTEEN_LOKA_ARTICLES,
      ...DEEP_SACRED_SEAL_ARTICLES.filter(a => a.categorySlug === 'the-14-lokas')
    ]
  }
];

export function getPortalBySlug(slug: string): ResearchCategoryPortal | undefined {
  const normalized = slug.trim().toLowerCase();
  return RESEARCH_CATEGORY_PORTALS.find(
    p => p.slug === normalized || (p.aliasSlugs && p.aliasSlugs.includes(normalized))
  );
}

export function getPortalByChapterIndex(index: number): ResearchCategoryPortal {
  return RESEARCH_CATEGORY_PORTALS[index] || RESEARCH_CATEGORY_PORTALS[0];
}

export function getArticleBySlugs(
  categorySlug: string,
  articleSlug: string
): { portal: ResearchCategoryPortal; article: ResearchArticle } | undefined {
  const portal = getPortalBySlug(categorySlug);
  if (!portal) return undefined;

  const existing = portal.articles.find(a => a.slug === articleSlug);
  if (existing) {
    return { portal, article: existing };
  }

  // Fallback search across all portals if an article slug was opened under an alias or cross-gateway link
  for (const p of RESEARCH_CATEGORY_PORTALS) {
    const found = p.articles.find(a => a.slug === articleSlug);
    if (found) {
      return { portal: p, article: found };
    }
  }

  // Dynamic support for any of the 64 Yogini matrix cells: bm-01-01 .. bm-08-08
  if (portal.slug === '64-yogini-matrix') {
    const match = /^bm-0([1-8])-0([1-8])$/i.exec(articleSlug);
    if (match) {
      const rIdx = parseInt(match[1], 10) - 1;
      const cIdx = parseInt(match[2], 10) - 1;
      const cell = getMatrixIntersection(rIdx, cIdx);
      const bh = cell.bhairava;
      const mk = cell.matrika;
      const dyad = cell.dyad;
      const dynamicArticle: ResearchArticle = {
        slug: cell.id.toLowerCase(),
        categorySlug: '64-yogini-matrix',
        code: cell.id,
        titleEn: `${cell.id} (#${String(dyad.index).padStart(2, '0')}): ${dyad.dyadLabelEn}`,
        titleHi: `${cell.id} (#${String(dyad.index).padStart(2, '0')}): ${dyad.dyadLabelHi}`,
        subtitleEn: `Row ${rIdx + 1} (${bh.englishName} · ${bh.directionFull}) × Col ${cIdx + 1} (${mk.englishName} · ${mk.binaryCode})`,
        subtitleHi: `पंक्ति ${rIdx + 1} (${bh.hindiName} · ${bh.directionFullHi}) × स्तंभ ${cIdx + 1} (${mk.hindiName} · ${mk.binaryCode})`,
        sanskritEpigraph: `॥ चतुःषष्टियोगिनी संहिता · ${dyad.yoginiFullHi} – ${dyad.bhairavaConsortFullHi} (${cell.id}) ॥`,
        epigraphTranslationEn: `"Matrix node ${cell.id} (#${String(dyad.index).padStart(2, '0')}) enshrining ${dyad.dyadLabelEn} at the intersection of ${bh.englishName} and Matrika ${mk.englishName}."`,
        epigraphTranslationHi: `"आव्यूह बिंदु ${cell.id} (#${String(dyad.index).padStart(2, '0')}) जो ${bh.hindiName} और मातृका ${mk.hindiName} के संगम पर '${dyad.dyadLabelHi}' को प्रतिष्ठित करता है।"`,
        evidenceBadgeEn: `DYAD #${String(dyad.index).padStart(2, '0')} · ${
          cell.isCanonicalConsortPair ? 'CANONICAL DIAGONAL PAIRING' : 'CROSS-VECTOR MATRIKA NODE'
        }`,
        evidenceBadgeHi: `युग्म #${String(dyad.index).padStart(2, '0')} · ${
          cell.isCanonicalConsortPair ? 'प्रामाणिक विकर्ण युग्म' : 'क्रॉस-वेक्टर मातृका बिंदु'
        }`,
        accentColor: bh.accentColor,
        summaryEn: cell.relationshipSummary,
        summaryHi: cell.relationshipSummaryHi,
        sections: [
          {
            headingEn: '1. Sacred Yoginī – Bhairava Consort Dyad & Vector Relationship',
            headingHi: '1. पवित्र योगिनी – भैरव युग्म एवं संयोजनात्मक सदिश संबंध',
            bodyEn: cell.relationshipSummary,
            bodyHi: cell.relationshipSummaryHi
          },
          {
            headingEn: '2. Research Question & Iconographic Synthesis',
            headingHi: '2. शोध प्रश्न एवं प्रतिमाशास्त्रीय संश्लेषण',
            bodyEn: cell.researchQuestion,
            bodyHi: cell.researchQuestionHi
          },
          {
            headingEn: '3. Elemental, Harmonic & Kshetra Parameters',
            headingHi: '3. तात्त्विक, आवृत्ति एवं शक्ति-क्षेत्र मापदंड',
            bodyEn: `Combines ${bh.englishName}'s directional sovereignty (${bh.directionFull}, ${bh.toneHz} · ${bh.planet}, vahana: ${bh.vahana}) with ${mk.englishName}'s operational domain (${mk.conceptualFormula}, tattva: ${mk.tattva}, kshetra: ${mk.kshetra}).`,
            bodyHi: `${bh.hindiName} के दिशात्मक क्षेत्र (${bh.directionFullHi}, ${bh.toneHz} · ${bh.planetHi}, वाहन: ${bh.vahanaHi}) को ${mk.hindiName} के कार्य-क्षेत्र (${mk.conceptualFormulaHi}, तत्त्व: ${mk.tattvaHi}, क्षेत्र: ${mk.kshetraHi}) के साथ जोड़ता है।`
          }
        ],
        keyFindingsEn: [
          `Sacred Dyad (#${String(dyad.index).padStart(2, '0')}/64): ${dyad.dyadLabelEn}.`,
          `Coordinate: ${cell.id} (Row ${rIdx + 1}, Column ${cIdx + 1}).`,
          `Evidence Classification: ${cell.evidenceStatus}`,
          `Harmonic & Binary Pairing: ${bh.toneHz} × Binary ${mk.binaryCode}.`
        ],
        keyFindingsHi: [
          `पवित्र युग्म (#${String(dyad.index).padStart(2, '0')}/64): ${dyad.dyadLabelHi}।`,
          `निर्देशांक: ${cell.id} (पंक्ति ${rIdx + 1}, स्तंभ ${cIdx + 1})।`,
          `प्रमाण वर्गीकरण: ${cell.evidenceStatusHi}`,
          `आवृत्ति एवं बाइनरी युग्मन: ${bh.toneHz} × बाइनरी ${mk.binaryCode}।`
        ],
        metadata: [
          { labelEn: 'Sacred Dyad', labelHi: 'योगिनी–भैरव युग्म', valueEn: `#${String(dyad.index).padStart(2, '0')} ${dyad.dyadLabelEn}`, valueHi: `#${String(dyad.index).padStart(2, '0')} ${dyad.dyadLabelHi}` },
          { labelEn: 'Cell ID', labelHi: 'कोष्ठ क्र.', valueEn: cell.id, valueHi: cell.id },
          { labelEn: 'Bhairava Row', labelHi: 'भैरव पंक्ति', valueEn: bh.englishName, valueHi: bh.hindiName },
          { labelEn: 'Matrika Column', labelHi: 'मातृका स्तंभ', valueEn: mk.englishName, valueHi: mk.hindiName }
        ],
        primarySourcesEn: `${bh.sourceReference} · ${mk.sourceNote}`,
        primarySourcesHi: `${bh.sourceReferenceHi} · ${mk.sourceNoteHi}`,
        authorEn: 'Ram Ashok Kumar',
        authorHi: 'राम अशोक कुमार',
        interactiveIndex: rIdx
      };
      return { portal, article: dynamicArticle };
    }
  }

  return undefined;
}

