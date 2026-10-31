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
    titleEn: 'I. Acoustic Resonance (Nada-Shastra)',
    titleHi: 'I. ध्वनि अनुनाद (नाद-शास्त्र)',
    subtitleEn: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
    subtitleHi: 'स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन',
    sanskritEpigraph: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति।',
    epigraphTranslationEn: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone."',
    epigraphTranslationHi: '"ध्वनि से ही अंतरिक्ष व्याप्त है। मंद्र (गंभीर) स्वर शिलाओं में गहन प्रतिध्वनि उत्पन्न करता है।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD TERM · NADA-SHASTRA',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · नाद-शास्त्र',
    accentColor: '#D4AF37',
    summaryEn: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
    summaryHi: 'स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन',
    sections: [
      {
        headingEn: 'Empirical Field Term',
        headingHi: 'आनुभविक क्षेत्रीय पारिभाषिक शब्द',
        bodyEn: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
        bodyHi: 'स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन'
      },
      {
        headingEn: 'Investigation Principle',
        headingHi: 'अन्वेषण सिद्धांत',
        bodyEn:
          'Ancient architectural marvels, particularly those designed for ritualistic chanting and spiritual convergence, were frequently constructed using high-quartz granite blocks shaped into ellipsoidal or dome configurations. When vocalists or practitioners project deep-pitch resonant tones near the geometric focal center of these structures, the vaulted ceilings and dense mineral walls mirror frequencies typically ranging between 110 Hz and 130 Hz.\n\nThis specific frequency band matches the fundamental vocal resonance of a mature human male baritone. When sustained, it creates a powerful acoustic feedback loop. The physical structure itself begins to vibrate and hum, turning the chamber into an organic amplifier. Neurologically, prolonged exposure to standing waves in this frequency range can induce auditory distortions, cranial pressure, and profound psychological state shifts in subjects, frequently misinterpreted as ghostly whispering or otherworldly presence.',
        bodyHi:
          'अनुष्ठानिक मंत्रोच्चार और आध्यात्मिक एकाग्रता के लिए निर्मित प्राचीन स्थापत्य संरचनाएँ प्रायः उच्च-क्वार्ट्ज ग्रेनाइट शिलाओं से दीर्घवृत्ताकार या गुंबद के आकार में बनाई जाती थीं। जब साधक इन संरचनाओं के ज्यामितीय नाभीय केंद्र के समीप गहरे स्वर में ध्वनि प्रक्षेपित करते हैं, तो गुंबददार छतें और सघन खनिज दीवारें 110 Hz से 130 Hz के बीच की आवृत्तियों को परावर्तित करती हैं।\n\nयह विशिष्ट आवृत्ति बैंड एक परिपक्व मानव बैरिटोन स्वर की मूल अनुनाद आवृत्ति से मेल खाता है। निरंतर उच्चारण करने पर यह एक शक्तिशाली ध्वनि-पुनर्निवेश (फीडबैक) चक्र बनाता है। संपूर्ण भौतिक संरचना स्वयं स्पंदित और गुंजायमान होने लगती है, जिससे कक्ष एक जैविक प्रवर्धक में बदल जाता है। तंत्रिका-विज्ञान की दृष्टि से, इस आवृत्ति परिसर में स्थायी तरंगों के दीर्घकालिक संपर्क से श्रवण संबंधी परिवर्तन, कपाल दाब और गहन मनोवैज्ञानिक अवस्था परिवर्तन हो सकते हैं, जिन्हें प्रायः अलौकिक उपस्थिति या फुसफुसाहट समझ लिया जाता है।'
      },
      {
        headingEn: 'Benchmark Case Log',
        headingHi: 'संदर्भ केस अभिलेख',
        bodyEn:
          'The Musical Pillars of Vittala, Hampi: Composed of resonant stone clusters that produce distinct musical notes when struck, interacting with surrounding vaulted stone mandapas to create sustained acoustic envelopes.',
        bodyHi:
          'विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी: अनुनादी प्रस्तर समूहों से निर्मित जो आघात करने पर स्पष्ट संगीत स्वर उत्पन्न करते हैं और आसपास के प्रस्तर मण्डपों के साथ मिलकर दीर्घकालिक ध्वनि-आवरण बनाते हैं।'
      }
    ],
    keyFindingsEn: [
      'Empirical Field Term: Standing Wave Acoustics & Ellipsoidal Focal Amplification',
      'Fundamental baritone vocal resonance band: 110 Hz – 130 Hz',
      'Benchmark Case Log: The Musical Pillars of Vittala, Hampi'
    ],
    keyFindingsHi: [
      'आनुभविक क्षेत्रीय पारिभाषिक शब्द: स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन',
      'मूल अनुनाद आवृत्ति बैंड: 110 Hz – 130 Hz',
      'संदर्भ केस अभिलेख: विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी'
    ],
    metadata: [
      { labelEn: 'Subunit', labelHi: 'उप-इकाई', valueEn: 'I. Acoustic Resonance (Nada-Shastra)', valueHi: 'I. ध्वनि अनुनाद (नाद-शास्त्र)' },
      { labelEn: 'Empirical Field Term', labelHi: 'आनुभविक क्षेत्रीय शब्द', valueEn: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification', valueHi: 'स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन' },
      { labelEn: 'Benchmark Case Log', labelHi: 'संदर्भ केस अभिलेख', valueEn: 'The Musical Pillars of Vittala, Hampi', valueHi: 'विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Nada-Shastra · Musical Pillars of Vittala, Hampi · CAGS Acoustic Field Ledger',
    primarySourcesHi: 'नाद-शास्त्र · विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी · क्षेत्रीय ध्वनि अभिलेख',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 0
  },
  {
    slug: 'geomagnetic-friction',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-02',
    titleEn: 'II. Geomagnetic Friction (Bhu-Marma)',
    titleHi: 'II. भू-चुंबकीय घर्षण (भू-मर्म)',
    subtitleEn: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
    subtitleHi: 'वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना',
    sanskritEpigraph: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते।',
    epigraphTranslationEn: '"Where the core joints of the earth are knit, there an invisible current of force is generated."',
    epigraphTranslationHi: '"जहाँ पृथ्वी के मर्म-स्थल जुड़ते हैं, वहाँ शक्ति की एक अदृश्य धारा उत्पन्न होती है।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD TERM · BHU-MARMA',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · भू-मर्म',
    accentColor: '#E5A93C',
    summaryEn: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
    summaryHi: 'वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना',
    sections: [
      {
        headingEn: 'Empirical Field Term',
        headingHi: 'आनुभविक क्षेत्रीय पारिभाषिक शब्द',
        bodyEn: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
        bodyHi: 'वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना'
      },
      {
        headingEn: 'Investigation Principle',
        headingHi: 'अन्वेषण सिद्धांत',
        bodyEn:
          'Tectonic fault lines, subterranean shear zones, and shifting groundwater aquifers generate continuous, micro-frequency electromagnetic currents via friction and piezoelectric quartz compression. When a historical structure or settlement is established directly atop these high-stress geomagnetic intersections (Marma), the localized electromagnetic fluctuations directly interact with human biology.\n\nSpecifically, fluctuating magnetic fields can stimulate the temporal lobes of the human brain. This neurological disruption is well-documented in neuro-theology; it can trigger mild visual anomalies in peripheral vision, sudden bouts of unexplained dizziness, feelings of dread, and vivid, lucid dream states. Generations inhabiting these zones historically attributed these neurological sensations to phantom visitations.',
        bodyHi:
          'विवर्तनिक भ्रंश रेखाएँ, भूमिगत अपरूपण क्षेत्र और गतिशील भूजल स्तर घर्षण तथा पीजोइलेक्ट्रिक क्वार्ट्ज संपीड़न के माध्यम से निरंतर सूक्ष्म-आवृत्ति वाली विद्युत-चुंबकीय धाराएँ उत्पन्न करते हैं। जब कोई ऐतिहासिक संरचना या बस्ती सीधे इन उच्च-तनाव वाले भू-चुंबकीय संधि-स्थलों (मर्म) के ऊपर स्थापित होती है, तो स्थानीय विद्युत-चुंबकीय उतार-चढ़ाव सीधे मानव जीवविज्ञान को प्रभावित करते हैं।\n\nविशेष रूप से, परिवर्तित होते चुंबकीय क्षेत्र मानव मस्तिष्क के टेम्पोरल लोब को उत्तेजित कर सकते हैं। यह तंत्रिका-संबंधी प्रभाव परिधीय दृष्टि में सूक्ष्म दृश्य विसंगतियाँ, अचानक चक्कर आना, अकारण भय की अनुभूति और अत्यंत स्पष्ट स्वप्न-अवस्थाओं को जन्म दे सकता है। इन क्षेत्रों में निवास करने वाली पीढ़ियों ने ऐतिहासिक रूप से इन तंत्रिका-संवेदनाओं को प्रेत-दर्शन से जोड़ा।'
      },
      {
        headingEn: 'Benchmark Case Log',
        headingHi: 'संदर्भ केस अभिलेख',
        bodyEn:
          'The Natural Fields of Kuldhara Village: An abandoned settlement situated across active micro-fault lines exhibiting distinct ambient magnetic anomalies and localized cognitive disturbance fields.',
        bodyHi:
          'कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र: सक्रिय सूक्ष्म-भ्रंश रेखाओं पर स्थित एक परित्यक्त बस्ती जो स्पष्ट परिवेशीय चुंबकीय विसंगतियाँ और स्थानीय संज्ञानात्मक संवेदन क्षेत्र प्रदर्शित करती है।'
      }
    ],
    keyFindingsEn: [
      'Empirical Field Term: Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
      'Piezoelectric quartz compression & tectonic fault micro-frequency currents at Marma intersections',
      'Benchmark Case Log: The Natural Fields of Kuldhara Village'
    ],
    keyFindingsHi: [
      'आनुभविक क्षेत्रीय पारिभाषिक शब्द: वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना',
      'भू-मर्म संधि-स्थलों पर पीजोइलेक्ट्रिक क्वार्ट्ज संपीड़न एवं सूक्ष्म-आवृत्ति विद्युत-चुंबकीय धाराएँ',
      'संदर्भ केस अभिलेख: कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र'
    ],
    metadata: [
      { labelEn: 'Subunit', labelHi: 'उप-इकाई', valueEn: 'II. Geomagnetic Friction (Bhu-Marma)', valueHi: 'II. भू-चुंबकीय घर्षण (भू-मर्म)' },
      { labelEn: 'Empirical Field Term', labelHi: 'आनुभविक क्षेत्रीय शब्द', valueEn: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation', valueHi: 'वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना' },
      { labelEn: 'Benchmark Case Log', labelHi: 'संदर्भ केस अभिलेख', valueEn: 'The Natural Fields of Kuldhara Village', valueHi: 'कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Bhu-Marma · The Natural Fields of Kuldhara Village · CAGS Magnetometry Dossier',
    primarySourcesHi: 'भू-मर्म · कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र · चुंबकत्व सर्वेक्षण फाइल',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 1
  },
  {
    slug: 'thermodynamic-inversion',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-03',
    titleEn: 'III. Thermodynamic Inversion (Ushna-Saman)',
    titleHi: 'III. ऊष्मागतिकीय व्युत्क्रमण (उष्ण-शमन)',
    subtitleEn: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
    subtitleHi: 'रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता',
    sanskritEpigraph: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं।',
    epigraphTranslationEn: '"The localized chill of the stones is produced slowly by the upward movement of deep air."',
    epigraphTranslationHi: '"गंभीर भूमिगत वायु के ऊर्ध्वगामी प्रवाह से शिलाओं में धीरे-धीरे शीतलता उत्पन्न होती है।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD TERM · USHNA-SAMAN',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · उष्ण-शमन',
    accentColor: '#38BDF8',
    summaryEn: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
    summaryHi: 'रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता',
    sections: [
      {
        headingEn: 'Empirical Field Term',
        headingHi: 'आनुभविक क्षेत्रीय पारिभाषिक शब्द',
        bodyEn: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
        bodyHi: 'रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता'
      },
      {
        headingEn: 'Investigation Principle',
        headingHi: 'अन्वेषण सिद्धांत',
        bodyEn:
          'The classic paranormal trope of the sudden "cold spot" can be rigorously evaluated through thermodynamics. In historical structures utilizing dry-stone or mortar-less masonry, hairline cracks and subterranean fissures often act as conduits for deep-earth gases, including compressed carbon dioxide or low-temperature radon seeping from tectonic cavities.\n\nAs these gases expand adiabatically through narrow structural vents, they induce localized physical cooling. Simultaneously, ambient atmospheric moisture condenses instantly upon contact with the chilled stone interface. This generates invisible draft currents and microscopic mist pockets that drift through corridors, mimicking the visual profile of ephemeral apparitions or wandering cold spirits.',
        bodyHi:
          'अचानक अनुभव होने वाले "शीत-स्थल" (कोल्ड स्पॉट) की पारंपरिक मान्यता का ऊष्मागतिकी के माध्यम से सटीक मूल्यांकन किया जा सकता है। बिना गारे की सूखी शिलाओं से निर्मित ऐतिहासिक संरचनाओं में, सूक्ष्म दरारें और भूमिगत विदर प्रायः संपीड़ित कार्बन डाइऑक्साइड या निम्न-तापमान रेडॉन जैसी भूगर्भीय गैसों के लिए वाहक का कार्य करते हैं।\n\nजब ये गैसें संकरे संरचनात्मक छिद्रों से रुद्धोष्म (एडियाबेटिक) रूप से फैलती हैं, तो वे तत्काल स्थानीय भौतिक शीतलन उत्पन्न करती हैं। साथ ही, वातावरण की नमी ठंडी शिलाओं के संपर्क में आते ही तुरंत संघनित हो जाती है। इससे अदृश्य वायु-प्रवाह और सूक्ष्म धुंध के पुंज बनते हैं जो गलियारों में तैरते हुए किसी छाया या भटकती आत्मा जैसा दृश्य आभास कराते हैं।'
      },
      {
        headingEn: 'Benchmark Case Log',
        headingHi: 'संदर्भ केस अभिलेख',
        bodyEn:
          'The Gateway Cold-Spots of Bhangarh Fort: Deep bastion chambers featuring marked temperature differentials uncorrelated with external weather patterns, driven by subterranean structural drafts and high-density stone heat capacities.',
        bodyHi:
          'भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल: गहरे बुर्ज कक्ष जो बाहरी मौसम से स्वतंत्र स्पष्ट तापमान अंतर प्रदर्शित करते हैं, जो भूमिगत संरचनात्मक वायु-प्रवाह और उच्च-घनत्व वाली शिलाओं की ऊष्मा धारिता से संचालित होते हैं।'
      }
    ],
    keyFindingsEn: [
      'Empirical Field Term: Adiabatic Gas Expansion & Differential Structural Heat Capacity',
      'Adiabatic expansion of deep-earth gases & instant moisture condensation across chilled stone interfaces',
      'Benchmark Case Log: The Gateway Cold-Spots of Bhangarh Fort'
    ],
    keyFindingsHi: [
      'आनुभविक क्षेत्रीय पारिभाषिक शब्द: रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता',
      'भूगर्भीय गैसों का रुद्धोष्म विस्तार एवं शीतल शिलाओं पर तात्कालिक नमी संघनन',
      'संदर्भ केस अभिलेख: भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल'
    ],
    metadata: [
      { labelEn: 'Subunit', labelHi: 'उप-इकाई', valueEn: 'III. Thermodynamic Inversion (Ushna-Saman)', valueHi: 'III. ऊष्मागतिकीय व्युत्क्रमण (उष्ण-शमन)' },
      { labelEn: 'Empirical Field Term', labelHi: 'आनुभविक क्षेत्रीय शब्द', valueEn: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity', valueHi: 'रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता' },
      { labelEn: 'Benchmark Case Log', labelHi: 'संदर्भ केस अभिलेख', valueEn: 'The Gateway Cold-Spots of Bhangarh Fort', valueHi: 'भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Ushna-Saman · The Gateway Cold-Spots of Bhangarh Fort · CAGS Thermal Log',
    primarySourcesHi: 'उष्ण-शमन · भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल · थर्मल अभिलेख',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 2
  },
  {
    slug: 'environmental-chemistry',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-04',
    titleEn: 'IV. Environmental Chemistry (Rasa-Vijnana)',
    titleHi: 'IV. पर्यावरणीय रसायन (रस-विज्ञान)',
    subtitleEn: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
    subtitleHi: 'जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण',
    sanskritEpigraph: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति।',
    epigraphTranslationEn: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life."',
    epigraphTranslationHi: '"जल में घुले हुए पृथ्वी के रस जीवन-प्रक्रिया के प्रवाह पर गहरा प्रभाव डालते हैं।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD TERM · RASA-VIJNANA',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · रस-विज्ञान',
    accentColor: '#34D399',
    summaryEn: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
    summaryHi: 'जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण',
    sections: [
      {
        headingEn: 'Empirical Field Term',
        headingHi: 'आनुभविक क्षेत्रीय पारिभाषिक शब्द',
        bodyEn: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
        bodyHi: 'जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण'
      },
      {
        headingEn: 'Investigation Principle',
        headingHi: 'अन्वेषण सिद्धांत',
        bodyEn:
          'Geological strata rich in heavy metal deposits—such as iron oxide, magnetite, or radioactive thorium-bearing monazite sands—leach complex chemical signatures into local subterranean water tables. Populations inhabiting these micro-regions consume or live in close proximity to these highly ionized water sources over generations.\n\nChronic exposure to background ionizing radiation and heavy metal ions alters physiological baseline metrics, including cellular replication rates, endocrine hormone balance, and neural synaptic conductivity. These biochemical shifts frequently manifest as heightened sensory sensitivity, localized health clustering, and subtle perceptual distortions that reinforce local folklore regarding cursed waters or haunted lands.',
        bodyHi:
          'भारी धातु निक्षेपों—जैसे आयरन ऑक्साइड, मैग्नेटाइट, या रेडियोधर्मी थोरियम-युक्त मोनाजाइट रेत—से समृद्ध भूवैज्ञानिक स्तर स्थानीय भूमिगत जलभृतों में जटिल रासायनिक तत्वों का निक्षालन करते हैं। इन सूक्ष्म-क्षेत्रों में निवास करने वाली जनसंख्या पीढ़ियों तक इन अत्यधिक आयनित जल स्रोतों के संपर्क में रहती है।\n\nपृष्ठभूमि आयनकारी विकिरण और भारी धातु आयनों के दीर्घकालिक संपर्क से कोशिका विभाजन दर, अंतःस्रावी हार्मोन संतुलन और तंत्रिका चालकता जैसे शारीरिक मापदंड प्रभावित होते हैं। ये जैव-रासायनिक परिवर्तन प्रायः तीव्र संवेदी संवेदनशीलता और सूक्ष्म बोधात्मक परिवर्तनों के रूप में प्रकट होते हैं, जो शापित जल या प्रेतबाधित भूमि से जुड़ी लोक-मान्यताओं को सुदृढ़ करते हैं।'
      },
      {
        headingEn: 'Benchmark Case Log',
        headingHi: 'संदर्भ केस अभिलेख',
        bodyEn:
          'The Thorium Aquifers of Kodinhi: Regions with anomalous background geochemical profiles demonstrating unique physiological interaction markers among local inhabitants.',
        bodyHi:
          'कोडिन्ही के थोरियम जलभृत: असामान्य भू-रासायनिक पृष्ठभूमि वाले क्षेत्र जो स्थानीय निवासियों में विशिष्ट शारीरिक प्रभाव संकेतक प्रदर्शित करते हैं।'
      }
    ],
    keyFindingsEn: [
      'Empirical Field Term: Aquifer Mass Spectroscopy & Background Ionizing Radiation',
      'Heavy metal & thorium-bearing monazite leaching into subterranean water tables',
      'Benchmark Case Log: The Thorium Aquifers of Kodinhi'
    ],
    keyFindingsHi: [
      'आनुभविक क्षेत्रीय पारिभाषिक शब्द: जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण',
      'भूमिगत जलभृतों में भारी धातु एवं थोरियम-युक्त मोनाजाइट निक्षालन का प्रभाव',
      'संदर्भ केस अभिलेख: कोडिन्ही के थोरियम जलभृत'
    ],
    metadata: [
      { labelEn: 'Subunit', labelHi: 'उप-इकाई', valueEn: 'IV. Environmental Chemistry (Rasa-Vijnana)', valueHi: 'IV. पर्यावरणीय रसायन (रस-विज्ञान)' },
      { labelEn: 'Empirical Field Term', labelHi: 'आनुभविक क्षेत्रीय शब्द', valueEn: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation', valueHi: 'जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण' },
      { labelEn: 'Benchmark Case Log', labelHi: 'संदर्भ केस अभिलेख', valueEn: 'The Thorium Aquifers of Kodinhi', valueHi: 'कोडिन्ही के थोरियम जलभृत' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Rasa-Vijnana · The Thorium Aquifers of Kodinhi · CAGS Hydrogeochemical Report',
    primarySourcesHi: 'रस-विज्ञान · कोडिन्ही के थोरियम जलभृत · जल-भूरसायन शोध प्रतिवेदन',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार',
    interactiveIndex: 3
  },
  {
    slug: 'architectural-waveguides',
    categorySlug: 'cags-field-archive',
    code: 'CAGS-05',
    titleEn: 'V. Architectural Waveguides (Vastu-Mandala)',
    titleHi: 'V. वास्तु तरंग-पथक (वास्तु-मण्डल)',
    subtitleEn: 'Concentric Dielectric Waveguides & Environmental RF Traps',
    subtitleHi: 'संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप',
    sanskritEpigraph: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति।',
    epigraphTranslationEn: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine."',
    epigraphTranslationHi: '"पवित्र मण्डल की रेखाएँ वायु-तरंगों को आकर्षित करती हैं। मंदिर स्वयं एक महायन्त्र बन जाता है।"',
    evidenceBadgeEn: 'EMPIRICAL FIELD TERM · VASTU-MANDALA',
    evidenceBadgeHi: 'आनुभविक क्षेत्रीय मापन · वास्तु-मण्डल',
    accentColor: '#A78BFA',
    summaryEn: 'Concentric Dielectric Waveguides & Environmental RF Traps',
    summaryHi: 'संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप',
    sections: [
      {
        headingEn: 'Empirical Field Term',
        headingHi: 'आनुभविक क्षेत्रीय पारिभाषिक शब्द',
        bodyEn: 'Concentric Dielectric Waveguides & Environmental RF Traps',
        bodyHi: 'संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप'
      },
      {
        headingEn: 'Investigation Principle',
        headingHi: 'अन्वेषण सिद्धांत',
        bodyEn:
          'Ancient master builders utilized precise geometric frameworks—such as pyramidal profiles, concentric squares, and interlocking mandala grids—to lay out sacred structures. From a physical perspective, these architectural geometries function analogously to modern radio frequency waveguides and acoustic horn structures.\n\nBy aligning dense granite and sandstone monoliths to cardinal magnetic coordinates, these layouts passively capture, trap, and focus low-frequency environmental waves, including wind shear friction, atmospheric pressure fluctuations, and microseisms. The building transforms into a passive energetic resonator, concentrating ambient kinetic energy into specific sanctum nodes within the structure.',
        bodyHi:
          'प्राचीन वास्तुकारों ने पवित्र संरचनाओं के निर्माण हेतु पिरामिडनुमा रूपरेखा, संकेंद्रित वर्ग और अंतर्ग्रथित मण्डल जालक जैसे सटीक ज्यामितीय ढाँचों का उपयोग किया। भौतिक विज्ञान की दृष्टि से, ये वास्तु-ज्यामितियाँ आधुनिक रेडियो आवृत्ति वेवगाइड और ध्वनि हॉर्न संरचनाओं के समान कार्य करती हैं।\n\nसघन ग्रेनाइट और बलुआ पत्थर के एकाश्मों को मुख्य चुंबकीय दिशाओं के अनुरूप संरेखित करने से, ये विन्यास वायु-अपरूपण घर्षण, वायुमंडलीय दाब परिवर्तनों और सूक्ष्म-भूकंपीय तरंगों जैसी निम्न-आवृत्ति की पर्यावरणीय तरंगों को निष्क्रिय रूप से पकड़ते और केंद्रित करते हैं। इस प्रकार संपूर्ण भवन एक निष्क्रिय ऊर्जा अनुनादक में परिवर्तित होकर परिवेशीय गतिज ऊर्जा को गर्भगृह के विशिष्ट बिंदुओं में केंद्रित कर देता है।'
      },
      {
        headingEn: 'Benchmark Case Log',
        headingHi: 'संदर्भ केस अभिलेख',
        bodyEn:
          'The Ellipsoidal Sanctums of Western Ghats: Temple complexes whose core sanctum geometries demonstrate clear resonance trapping characteristics for regional microseismic and atmospheric waves.',
        bodyHi:
          'पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह: ऐसे मंदिर परिसर जिनकी मूल गर्भगृह ज्यामिति क्षेत्रीय सूक्ष्म-भूकंपीय और वायुमंडलीय तरंगों को केंद्रित करने की स्पष्ट विशेषता दर्शाती है।'
      }
    ],
    keyFindingsEn: [
      'Empirical Field Term: Concentric Dielectric Waveguides & Environmental RF Traps',
      'Cardinal-aligned granite & sandstone mandala layouts focus low-frequency environmental waves',
      'Benchmark Case Log: The Ellipsoidal Sanctums of Western Ghats'
    ],
    keyFindingsHi: [
      'आनुभविक क्षेत्रीय पारिभाषिक शब्द: संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप',
      'मुख्य चुंबकीय दिशाओं में संरेखित ग्रेनाइट मण्डल विन्यास द्वारा निम्न-आवृत्ति पर्यावरणीय तरंग संकेंद्रण',
      'संदर्भ केस अभिलेख: पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह'
    ],
    metadata: [
      { labelEn: 'Subunit', labelHi: 'उप-इकाई', valueEn: 'V. Architectural Waveguides (Vastu-Mandala)', valueHi: 'V. वास्तु तरंग-पथक (वास्तु-मण्डल)' },
      { labelEn: 'Empirical Field Term', labelHi: 'आनुभविक क्षेत्रीय शब्द', valueEn: 'Concentric Dielectric Waveguides & Environmental RF Traps', valueHi: 'संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप' },
      { labelEn: 'Benchmark Case Log', labelHi: 'संदर्भ केस अभिलेख', valueEn: 'The Ellipsoidal Sanctums of Western Ghats', valueHi: 'पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Vastu-Mandala · The Ellipsoidal Sanctums of Western Ghats · CAGS Structural Waveguide Monograph',
    primarySourcesHi: 'वास्तु-मण्डल · पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह · संरचनात्मक तरंग-पथक शोध-प्रबंध',
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
  const isUpper = loka.division === 'urdhva';
  const isEarthPivot = loka.number === 7;

  const cosmologicalDistinctionEn = isEarthPivot
    ? 'Earth (Bhūloka, Realm 7) separates the upper and lower sequences: realms 1–6 sit above Bhūloka as celestial and meditative planes, realm 7 is the physical human world of moral action (karma-bhūmi), and realms 8–14 extend downward beneath it as the seven subterranean Talas.'
    : isUpper
    ? 'Cosmological Distinction — Svarga vs. Final Liberation: In Hindu cosmology, Svar Loka (Svarga, Realm 5) is a temporary reward for righteous merit (puṇya), after which souls return to rebirth. Final liberation (mokṣa) transcends the cycle of worlds or proceeds via gradual liberation (krama-mukti) through Mahar, Jana, Tapa, and Satya Loka.'
    : 'Cosmological Distinction — Pātāla (Sapta-Tala) vs. Naraka: The seven lower realms (Atala through Pātāla, Realms 8–14) are not synonymous with Naraka (hell). Whereas Naraka is the post-mortem zone of moral correction beneath Pātāla, the seven Talas (often called bila-svarga) are opulent subterranean worlds filled with palaces, jewels, Nāgas, Dānavas, and subtle illusions.';

  const cosmologicalDistinctionHi = isEarthPivot
    ? 'पृथ्वी (भूलोक, ७वाँ लोक) ऊर्ध्व और अधो लोकों की शृंखला को विभाजित करती है: लोक १–६ भूलोक के ऊपर दिव्य व ध्यानात्मक लोक हैं, ७वाँ लोक स्वयं मानव कर्मभूमि है, और लोक ८–१४ इसके नीचे विस्तृत सप्त-तल हैं।'
    : isUpper
    ? 'शास्त्रीय भेद — स्वर्ग बनाम मोक्ष: हिन्दू ब्रह्माण्ड विज्ञान में स्वर्लोक (स्वर्ग, ५वाँ लोक) पुण्यकर्मों का अस्थायी फल है, जिसके क्षीण होने पर पुनर्जन्म होता है। अंतिम मुक्ति (मोक्ष) लोक-चक्र से परे है अथवा महर्, जन, तपो और सत्यलोक की क्रम-मुक्ति से संबद्ध है।'
    : 'शास्त्रीय भेद — पाताल (सप्त-तल) बनाम नरक: नीचे के सात लोक (अतल से पाताल तक, लोक ८–१४) नरक के पर्याय नहीं हैं। नरक अधर्म के दण्ड और शुद्धि का क्षेत्र है, जबकि सात अधोलोक ("बिल-स्वर्ग") भव्य महलों, मणियों, नागों, दानवों और मायावी ऐश्वर्य से भरे समृद्ध भूमिगत लोक हैं।';

  return {
    slug,
    categorySlug: 'the-14-lokas',
    code,
    titleEn: `${loka.number}. ${loka.nameEn} — ${loka.subtitleEn}`,
    titleHi: `${loka.number}. ${loka.nameHi} — ${loka.subtitleHi}`,
    subtitleEn: `${loka.divisionLabelEn} · Sovereign / Presence: ${loka.rulerEn}`,
    subtitleHi: `${loka.divisionLabelHi} · अधिपति / उपस्थिति: ${loka.rulerHi}`,
    sanskritEpigraph: `॥ चतुर्दश भुवनानि · ${loka.sanskritEpithet} (${code}) ॥`,
    epigraphTranslationEn: `"${loka.nameEn} (${loka.subtitleEn}) — Stratum ${loka.number} of 14 (${loka.glanceTagEn}), presided over by ${loka.rulerEn}."`,
    epigraphTranslationHi: `"${loka.nameHi} (${loka.subtitleHi}) — १४ लोकों में ${loka.number}वाँ स्तर (${loka.glanceTagHi}), अधिपति: ${loka.rulerHi}।"`,
    evidenceBadgeEn: loka.divisionLabelEn,
    evidenceBadgeHi: loka.divisionLabelHi,
    accentColor: loka.accentColor,
    summaryEn: loka.summaryEn,
    summaryHi: loka.summaryHi,
    sections: [
      {
        headingEn: '1. Cosmological Architecture & Realm Environment',
        headingHi: '1. ब्रह्माण्डीय स्थापत्य एवं लोक का परिवेश',
        bodyEn: `Realm Position (Stratum ${loka.number} of 14 — ${loka.divisionLabelEn}): ${loka.detailedEnvironmentEn}\nHierarchy Context: ${cosmologicalDistinctionEn}`,
        bodyHi: `ब्रह्माण्डीय स्थिति (१४ लोकों में ${loka.number}वाँ स्तर — ${loka.divisionLabelHi}): ${loka.detailedEnvironmentHi}\nपदानुक्रम संदर्भ: ${cosmologicalDistinctionHi}`
      },
      {
        headingEn: '2. Sovereign Rulers & Inhabitant Classes',
        headingHi: '2. अधिपति एवं निवासी वर्ग',
        bodyEn: `Presiding Authority: ${loka.rulerEn}.\nInhabitant Classes: ${loka.inhabitantsEn}.\nExperiential Register: ${loka.glanceTagEn}.`,
        bodyHi: `अधिष्ठाता / शासक: ${loka.rulerHi}।\nनिवासी वर्ग: ${loka.inhabitantsHi}।\nअनुभवात्मक लक्षण: ${loka.glanceTagHi}।`
      },
      {
        headingEn: '3. Subtle-Body (Adhyatmika) & Scriptural Correspondences',
        headingHi: '3. आध्यात्मिक (सूक्ष्म-शरीर) एवं शास्त्रीय सह-संबंध',
        bodyEn: `Subtle-Body Mapping: In yogic, Upaniṣadic, and Tantric subtle-body cosmology, ${loka.shortNameEn} corresponds to ${loka.subtleBodyMappingEn}.\nScriptural Register: Primary descriptions appear across ${loka.scripturalSourcesEn}. While the Purāṇas describe these realms with vivid cosmological detail, rulers, and inhabitants, Upaniṣadic and Vedāntic traditions also interpret them as gradations of consciousness and subtle states of existence.`,
        bodyHi: `सूक्ष्म-शरीर केंद्र: यौगिक, औपनिषदिक और तांत्रिक सूक्ष्म-शरीर विज्ञान में ${loka.shortNameHi} का संबंध '${loka.subtleBodyMappingHi}' से है।\nशास्त्रीय स्रोत: इसके प्रमुख विवरण '${loka.scripturalSourcesHi}' में प्राप्त होते हैं। जहाँ पुराण इन लोकों का वर्णन सजीव शासकों और निवासियों के साथ करते हैं, वहीं उपनिषद् और वेदान्त इन्हें चेतना के स्तरों और सूक्ष्म अस्तित्व की अवस्थाओं के रूप में भी व्याख्यायित करते हैं।`
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
    titleEn: 'Kālīkula & Śrīkula — Comparative Synthesis, Shared Śākta Framework & Dual-Archive Methodology',
    titleHi: 'कालीकुल एवं श्रीकुल — तुलनात्मक शोध संश्लेषण, साझा शाक्त ढाँचा एवं द्वि-अभिलेखागार पद्धति',
    subtitleEn: 'Sanskrit: कालीकुल एवं श्रीकुल · Comparative Analysis Across Eight Core Dimensions · Beyond the Fierce-vs.-Gentle Binary · Dual-Collection Architecture & Peer-Reviewed Bibliography',
    subtitleHi: 'संस्कृत: कालीकुल एवं श्रीकुल · आठ प्रमुख आयामों में तुलनात्मक अध्ययन · उग्र बनाम सौम्य के सरलीकरण से परे · द्वि-संग्रह संरचना एवं समीक्षित संदर्भ-सूची',
    sanskritEpigraph: '॥ कालीकुलं च श्रीकुलं च द्वौ प्रवाहौ महापथौ। चित्-शक्ति-साम्य-रूपायै महादेव्यै नमो नमः ॥',
    epigraphTranslationEn: '"Kālīkula (the family, lineage, or tradition of Kālī) and Śrīkula (the family, lineage, or tradition of Śrī) stand as two interconnected Śākta Tantric streams contemplating the Goddess across time, dissolution, manifestation, sovereignty, and consciousness."',
    epigraphTranslationHi: '"कालीकुल (काली का कुल या परम्परा) और श्रीकुल (श्री का कुल या परम्परा) शाक्त तन्त्र की दो परस्पर संबद्ध महाधाराएँ हैं, जो काल, लय, सृष्टि-अभिव्यक्ति, संप्रभुता और चेतना के धरातल पर भगवती पराशक्ति का साक्षात्कार कराती हैं।"',
    evidenceBadgeEn: 'COMPARATIVE RESEARCH SYNTHESIS · PARTS III & IV · PRIMARY TEXTS & SCHOLARSHIP',
    evidenceBadgeHi: 'तुलनात्मक शोध संश्लेषण · भाग III एवं IV · मूल ग्रन्थ एवं अकादमिक शोध',
    accentColor: '#EC4899',
    summaryEn:
      'Kālīkula (कालीकुल — the family, lineage, or tradition of Kālī) and Śrīkula (श्रीकुल — the family, lineage, or tradition of Śrī / Tripurasundarī) represent two major historical families of Śākta Tantra. Rather than repeating the individual doctrinal dossiers housed in the dedicated Kālīkula Archive (SKT-01A) and Śrīkula Archive (SKT-01B), this comparative synthesis examines how the two streams relate across eight core dimensions, why they are not simple binary opposites, and how primary Sanskrit sources are methodologically distinguished from peer-reviewed scholarship (Wenta 2021; Brooks 1992; Golovkova 2019; Karasiński 2025) and living lineage explanations.',
    summaryHi:
      'कालीकुल (काली का परिवार, वंश या परम्परा) और श्रीकुल (श्री / त्रिपुरसुन्दरी का परिवार, वंश या परम्परा) शाक्त तन्त्र की दो प्रमुख ऐतिहासिक महाधाराएँ हैं। पृथक् कालीकुल अभिलेखागार (SKT-01A) और श्रीकुल अभिलेखागार (SKT-01B) की सामग्री की पुनरावृत्ति किए बिना, यह तुलनात्मक शोध संश्लेषण आठ मुख्य आयामों पर दोनों धाराओं के अंतर्संबंध का विश्लेषण करता है, यह स्पष्ट करता है कि वे परस्पर निरपेक्ष विरोधी क्यों नहीं हैं, तथा मूल संस्कृत ग्रन्थों को आधुनिक समीक्षित शोध (वेंटा २०२१; ब्रुक्स १९९२; गोलोवकोवा २०१९; करासिंस्की २०२५) से पृथक् रखने की शोध-पद्धति प्रस्तुत करता है।',
    sections: [
      {
        headingEn: '1. Comparing Kālīkula and Śrīkula: Are They Opposites?',
        headingHi: '1. कालीकुल और श्रीकुल की तुलना: क्या वे परस्पर विरोधी हैं?',
        bodyEn:
          'Not opposites in any absolute sense: While the 8-dimension comparative table above contrasts their primary deities, geographical centers, and ritual symbols, Kālīkula and Śrīkula are not mutually exclusive binary opposites.\nBeyond the fierce-vs.-gentle simplification: A common modern simplification portrays Kālīkula exclusively as fierce, dark, and destructive, while portraying Śrīkula exclusively as gentle, bright, and creative. Although iconographic imagery reflects real differences between particular forms of the Goddess, treating this contrast as a universal philosophical rule is historically inaccurate.\nContemplative metaphysics in Kālīkula: Kālī-centered traditions—especially the Kashmirian Krama current—are deeply contemplative and concerned with nondual awareness, epistemology, and the nature of ultimate reality.\nEsoteric rigor in Śrīkula: Conversely, Śrīvidyā traditions involve complex esoteric ritual, rigorous initiatory discipline, subtle mantra theology, and sophisticated nondual metaphysics.\nShared Śākta framework: Both streams share an overarching Śākta framework in which Śakti is central to understanding reality, cosmological manifestation, ritual efficacy, and spiritual transformation. Their textual and regional histories intersect across eastern India, Kashmir, Nepal, and South India.',
        bodyHi:
          'किसी भी निरपेक्ष अर्थ में विरोधी नहीं: यद्यपि ऊपर दी गई ८-आयामी तुलनात्मक सारणी दोनों धाराओं की केंद्रीय देवियों, ऐतिहासिक भूगोल और आनुष्ठानिक प्रतीकों की विशिष्टता दर्शाती है, तथापि कालीकुल और श्रीकुल परस्पर अनन्य विरोधी नहीं हैं।\nउग्र बनाम सौम्य के सरलीकरण से परे: एक सामान्य आधुनिक सरलीकरण कालीकुल को केवल उग्र, अंधकारमय और संहारक तथा श्रीकुल को केवल सौम्य, उज्ज्वल और सृजनात्मक मान लेता है। प्रतिमाशास्त्रीय स्तर पर यह अंतर देवी के विशिष्ट रूपों को दर्शाता है, किंतु इसे एक सार्वभौमिक दार्शनिक नियम मान लेना ऐतिहासिक रूप से भ्रामक है।\nकालीकुल में चिंतनशील तत्त्वमीमांसा: काली-केंद्रित परम्पराएँ—विशेषतः कश्मीर की क्रम धारा—अत्यंत चिंतनशील हैं और अद्वैत बोध, ज्ञानमीमांसा तथा परम यथार्थ के साक्षात्कार पर केंद्रित हैं।\nश्रीकुल में गूढ़ आनुष्ठानिक अनुशासन: दूसरी ओर, श्रीविद्या परम्पराओं में जटिल गूढ़ अनुष्ठान, कठोर दीक्षा-अनुशासन, सूक्ष्म मन्त्र-विज्ञान और परिष्कृत अद्वैत दर्शन समाहित है।\nसाझा शाक्त ढाँचा: दोनों धाराएँ एक व्यापक शाक्त ढाँचे को साझा करती हैं जिसमें यथार्थ, सृष्टि-प्रक्रिया, अनुष्ठान और आध्यात्मिक रूपांतरण के केंद्र में स्वयं पराशक्ति हैं।'
      },
      {
        headingEn: '2. Dual-Collection Architecture & Eight-Part Archival Rubric',
        headingHi: '2. द्वि-संग्रह अभिलेखागार संरचना एवं अष्ट-स्तरीय शोध प्रतिमान',
        bodyEn:
          'Dedicated Two-Archive Organization: To prevent doctrinal conflation and textual repetition, the research portal organizes Śākta stream studies into two specialized collections alongside this comparative synthesis:\n(a) Kālīkula Archive (Unit SKT-01A) — The Goddess of Time, Transformation, and Dissolution: An index of Kālī-centered traditions, philosophical systems (Śakti, kāla, Twelve Kālīs, kālagrāsa), iconography, Kālīgaṇa terminological analysis, textual sources, and regional histories across Bengal, eastern India, and Kashmir.\n(b) Śrīkula Archive (Unit SKT-01B) — The Goddess of Sovereignty, Manifestation, and Sacred Knowledge: An index of Śrīvidyā, Tripurasundarī (Lalitā, Rājarājeśvarī, Ṣoḍaśī), nine-enclosure Śrīcakra geometry, Pañcadaśī/Ṣoḍaśī mantra theology, historical texts, and jīvanmukti commentaries across South India and Kashmir.\nEight-Part Content Structure Applied Across Both Archives:\n1. Overview — definition, historical context, terminology, and principal concepts.\n2. Philosophy and theology — doctrines, interpretations, and conceptual frameworks.\n3. Deities and iconography — forms of the Goddess, attributes, symbols, and documented variations.\n4. Texts and manuscripts — primary sources, translations, commentaries, and bibliographic records.\n5. Ritual and practice — historically documented practices, distinguishing public descriptions from lineage-specific initiatory instructions.\n6. Regional histories and lineages — geographical development, transmission, and variations between traditions.\n7. Comparative research — relationships with other Śākta, Śaiva, and Tantric traditions.\n8. References and evidence — citations, provenance, peer-reviewed publications, and open philological questions.',
        bodyHi:
          'दो समर्पित शोध अभिलेखागार: सैद्धांतिक मिश्रण और सामग्री की पुनरावृत्ति को रोकने के लिए इस तुलनात्मक संश्लेषण के साथ दो स्वतंत्र शोध संग्रह स्थापित किए गए हैं:\n(क) कालीकुल अभिलेखागार (इकाई SKT-01A) — काल, रूपांतरण और लय की देवी: काली-केंद्रित परम्पराओं, दार्शनिक प्रणालियों (शक्ति, काल, द्वादश काली, कालग्रास), प्रतिमाशास्त्र, "कालीगण" शब्दावली-विश्लेषण, मूल ग्रन्थों और बंगाल/पूर्वी भारत व कश्मीर के क्षेत्रीय इतिहास का स्वतंत्र संग्रह।\n(ख) श्रीकुल अभिलेखागार (इकाई SKT-01B) — संप्रभुता, अभिव्यक्ति और पवित्र ज्ञान की देवी: श्रीविद्या, त्रिपुरसुन्दरी (ललिता, राजराजेश्वरी, षोडशी), नव-आवरण श्रीचक्र ज्यामिति, पञ्चदशी/षोडशी मन्त्र-तत्त्व, मूल ग्रन्थों और जीवनमुक्ति-केंद्रित भाष्यों का स्वतंत्र संग्रह।\nदोनों अभिलेखागारों की ८-स्तरीय मानक विषय-संरचना:\n१. अवलोकन (Overview) — परिभाषा, ऐतिहासिक संदर्भ, शब्दावली एवं प्रमुख अवधारणाएँ।\n२. दर्शन एवं धर्मशास्त्र (Philosophy and theology) — सिद्धांत, व्याख्याएँ एवं वैचारिक ढाँचे।\n३. देवता एवं प्रतिमाशास्त्र (Deities and iconography) — देवी के स्वरूप, आयुध, प्रतीक एवं प्रमाणित क्षेत्रीय भिन्नताएँ।\n४. ग्रन्थ एवं पाण्डुलिपियाँ (Texts and manuscripts) — प्राथमिक स्रोत, अनुवाद, भाष्य एवं ग्रंथ-विवरण।\n५. अनुष्ठान एवं साधना (Ritual and practice) — सार्वजनिक विवरण और दीक्षा-गम्य निर्देशों के स्पष्ट भेद सहित ऐतिहासिक अभ्यास।\n६. क्षेत्रीय इतिहास एवं परम्पराएँ (Regional histories and lineages) — भौगोलिक विकास और आम्नायगत विशेषताएँ।\n७. तुलनात्मक शोध (Comparative research) — अन्य शाक्त, शैव और तांत्रिक परम्पराओं के साथ अंतर्संबंध।\n८. संदर्भ एवं साक्ष्य (References and evidence) — उद्धरण, स्रोत-प्रामाणिकता एवं समीक्षित अकादमिक प्रकाशन।'
      },
      {
        headingEn: '3. Evidentiary Standards: Primary Texts, Scholarly Interpretation & Living Lineage Context',
        headingHi: '3. साक्ष्य-मानक: मूल संस्कृत ग्रन्थ, अकादमिक व्याख्या एवं जीवंत साधना परम्परा',
        bodyEn:
          'Threefold Evidentiary Separation: Every monograph in this collection distinguishes three distinct layers of evidence:\n(1) Primary Textual Evidence — Sanskrit Tantras, Yāmalas, Kalpasūtras, and medieval philosophical commentaries (such as the Kālīkulakramasadbhāva, Jayadrathayāmala, Devīpañcaśataka, and Tantrāloka for Kālīkula; and the Vāmakeśvarīmata, Yoginīhṛdaya, Nityāṣoḍaśikārṇava, Paraśurāma Kalpasūtra, and Lalitā Sahasranāma for Śrīkula).\n(2) Peer-Reviewed Historical & Philological Scholarship — Modern critical studies tracing how doctrines evolved across centuries (detailed in the Part IV Bibliography table above: Wenta 2021 on the Twelve Kālīs and kālagrāsa; Brooks 1992 on South Indian Śrīvidyā; Golovkova 2019 on the shift from worldly powers to jīvanmukti; and Karasiński 2025 on Śrīvidyā textual history).\n(3) Contemporary Practitioner & Devotional Explanations — Living oral interpretations, regional devotional narratives, and initiatory frameworks, respected in their religious context without being conflated with universal textual rules.',
        bodyHi:
          'साक्ष्यों के तीन स्तरों का पृथक्करण: इस संग्रह का प्रत्येक शोध-निबंध साक्ष्य के तीन स्तरों में स्पष्ट भेद रखता है:\n(१) प्राथमिक ग्रंथीय साक्ष्य — मूल संस्कृत तन्त्र, यामल, कल्पसूत्र और मध्यकालीन दार्शनिक भाष्य (कालीकुल हेतु कालीकुलक्रमसद्भाव, जयद्रथयामल, देवीपञ्चशतक व तन्त्रालोक; तथा श्रीकुल हेतु वामकेश्वरीमत, योगिनीहृदय, नित्याषोडशिकार्णव, परशुराम कल्पसूत्र व ललिता सहस्रनाम)।\n(२) समीक्षित ऐतिहासिक एवं भाषाशास्त्रीय शोध — आधुनिक अकादमिक अध्ययन जो शताब्दियों में सिद्धांतों के ऐतिहासिक विकास को रेखांकित करते हैं (ऊपर भाग IV की संदर्भ-सारणी में सूचीबद्ध: द्वादश काली व कालग्रास पर वेंटा २०२१; दक्षिण भारतीय श्रीविद्या पर ब्रुक्स १९९२; जीवनमुक्ति के विकास पर गोलोवकोवा २०१९; तथा श्रीविद्या ग्रंथ-इतिहास पर करासिंस्की २०२५)।\n(३) समकालीन साधक एवं भक्तिमूलक व्याख्याएँ — जीवंत मौखिक परम्पराएँ, क्षेत्रीय भक्ति-आख्यान और दीक्षा-आधारित दृष्टियाँ, जिन्हें सार्वभौमिक ग्रंथीय नियम बनाए बिना उनके धार्मिक संदर्भ में प्रलेखित किया गया है।'
      }
    ],
    keyFindingsEn: [
      'Kālīkula ("family/lineage of Kālī") and Śrīkula ("family/lineage of Śrī") are broad, internally diverse families of Śākta traditions rather than two rigid, mutually exclusive organizations.',
      'They are not simple fierce-vs.-gentle opposites: Kālī-centered Krama traditions feature subtle nondual epistemology, while Śrīvidyā encompasses rigorous esoteric ritual and metaphysics.',
      'The portal separates comparative synthesis (SKT-01) from the dedicated Kālīkula & Kālīgaṇa Archive (SKT-01A) and the Śrīkula & Śrīvidyā Archive (SKT-01B) so no sections or tables are duplicated.',
      'All entries strictly distinguish primary Sanskrit scriptures from peer-reviewed scholarship (Wenta 2021; Brooks 1992; Golovkova 2019; Karasiński 2025) and contemporary practitioner accounts.'
    ],
    keyFindingsHi: [
      'कालीकुल ("काली का कुल/परम्परा") और श्रीकुल ("श्री का कुल/परम्परा") दो कठोर या परस्पर अनन्य संगठनों के बजाय आंतरिक रूप से विविध और अंतर्संबंधित शाक्त महाधाराएँ हैं।',
      'वे केवल "उग्र बनाम सौम्य" के सरल विरोधी नहीं हैं: काली-केंद्रित क्रम परम्परा में सूक्ष्म अद्वैत ज्ञानमीमांसा है और श्रीविद्या में कठोर गूढ़ अनुष्ठान एवं तत्त्वमीमांसा निहित है।',
      'पुनरावृत्ति रोकने के लिए तुलनात्मक संश्लेषण (SKT-01), कालीकुल एवं कालीगण अभिलेखागार (SKT-01A) तथा श्रीकुल एवं श्रीविद्या अभिलेखागार (SKT-01B) को स्वतंत्र रूप से संयोजित किया गया है।',
      'प्रत्येक प्रविष्टि मूल संस्कृत शास्त्रों, समीक्षित अकादमिक शोध (वेंटा २०२१; ब्रुक्स १९९२; गोलोवकोवा २०१९; करासिंस्की २०२५) और समकालीन साधक-विवरणों में स्पष्ट भेद रखती है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & Literal Meaning', labelHi: 'संस्कृत एवं शाब्दिक अर्थ', valueEn: 'कालीकुल (Kālīkula: Family/Lineage of Kālī) · श्रीकुल (Śrīkula: Family/Lineage of Śrī)', valueHi: 'कालीकुल (काली का कुल/परम्परा) · श्रीकुल (श्री का कुल/परम्परा)' },
      { labelEn: 'Archive Scope', labelHi: 'अभिलेखीय परिधि', valueEn: 'Parts III & IV — 8-Dimension Comparison, Dual-Archive Architecture & Bibliography', valueHi: 'भाग III एवं IV — ८-आयामी तुलना, द्वि-अभिलेखागार संरचना एवं संदर्भ-सूची' },
      { labelEn: 'Companion Sub-Archives', labelHi: 'संबद्ध उप-अभिलेखागार', valueEn: 'SKT-01A (Part I: Kālīkula & Kālīgaṇa) · SKT-01B (Part II: Śrīkula & Śrīvidyā)', valueHi: 'SKT-01A (भाग I: कालीकुल एवं कालीगण) · SKT-01B (भाग II: श्रीकुल एवं श्रीविद्या)' },
      { labelEn: 'Peer-Reviewed Bibliography', labelHi: 'प्रमुख अकादमिक संदर्भ', valueEn: 'Wenta (2021) · Brooks (1992) · Golovkova (2019) · Karasiński (2025)', valueHi: 'वेंटा (२०२१) · ब्रुक्स (१९९२) · गोलोवकोवा (२०१९) · करासिंस्की (२०२५)' }
    ],
    primarySourcesEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka · Vāmakeśvarīmata · Yoginīhṛdaya · Nityāṣoḍaśikārṇava · Paraśurāma Kalpasūtra · Lalitā Sahasranāma · Wenta (2021) · Brooks (1992) · Golovkova (2019) · Karasiński (2025)',
    primarySourcesHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक · वामकेश्वरीमत · योगिनीहृदय · नित्याषोडशिकार्णव · परशुराम कल्पसूत्र · ललिता सहस्रनाम · वेंटा (२०२१) · ब्रुक्स (१९९२) · गोलोवकोवा (२०१९) · करासिंस्की (२०२५)',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'kalikula-archive-tradition',
    categorySlug: 'eight-matrikas',
    code: 'SKT-01A',
    titleEn: 'Part I — Kālīkula & Kālīgaṇa Archive: The Goddess of Time, Transformation, and Dissolution',
    titleHi: 'भाग I — कालीकुल एवं कालीगण अभिलेखागार: काल, रूपांतरण और लय की देवी',
    subtitleEn: 'Sanskrit: कालीकुल (Kālīkula) & कालीगण (Kālīgaṇa) · Definition, Philosophical Foundations, Iconographic Methodology, The Twelve Kālīs (Bhānavīkrama to Kālagrāsa), Textual Sources & Safeguards',
    subtitleHi: 'संस्कृत: कालीकुल एवं कालीगण · परिभाषा, दार्शनिक आधार, प्रतिमाशास्त्रीय पद्धति, द्वादश काली (भानवीक्रम से कालग्रास), मूल ग्रन्थ एवं शोध सावधानियाँ',
    sanskritEpigraph: '॥ कालीकुलक्रमसद्भावः · कालं कलयते या तु सा काली परमा कला ॥',
    epigraphTranslationEn: '"Kālīkula Archive — An index of Kālī-centered traditions, philosophical systems, iconography, Kālīgaṇa & Twelve Kālīs terminology, textual sources, regional histories, and documented ritual contexts."',
    epigraphTranslationHi: '"कालीकुल अभिलेखागार — काली-केंद्रित परम्पराओं, दार्शनिक प्रणालियों, प्रतिमाशास्त्र, कालीगण एवं द्वादश काली शब्दावली, ग्रंथीय स्रोतों और क्षेत्रीय इतिहास का शोध संश्लेषण।"',
    evidenceBadgeEn: 'PART I · KĀLĪKULA, KRAMA & KĀLĪGAṆA RESEARCH ARCHIVE',
    evidenceBadgeHi: 'भाग I · कालीकुल, क्रम एवं कालीगण शोध अभिलेखागार',
    accentColor: '#F43F5E',
    summaryEn:
      'Kālīkula (Sanskrit: कालीकुल — "The family, lineage, or tradition of Kālī") designates the broad family of Śākta Tantric traditions centered on Kālī across Bengal, eastern India, and the medieval Kashmirian Krama current. Alongside the top tables detailing wider Kālī-centered streams, iconographic elements, and the Kālīgaṇa (कालीगण) terminological matrix, this monograph examines Kālīkula’s philosophical foundations (Śakti, kāla, creation-dissolution, and nondual recognition), the evolution of the Twelve Kālīs from the sequence of the Sun-Goddess (bhānavīkrama) to time-consumption (kālagrāsa), primary Sanskrit sources, and methodological safeguards.',
    summaryHi:
      'कालीकुल (संस्कृत: कालीकुल — "काली का परिवार, वंश या परम्परा") बंगाल, पूर्वी भारत और मध्यकालीन कश्मीर की क्रम धारा में विकसित काली-केंद्रित शाक्त तांत्रिक परम्पराओं के व्यापक परिवार को निर्दिष्ट करता है। ऊपर दी गई प्रमुख परम्पराओं, प्रतिमाशास्त्रीय तत्त्वों और "कालीगण" पारिभाषिक सारणी के साथ, यह शोध-निबंध कालीकुल के दार्शनिक आधारों (शक्ति, काल, सृष्टि-लय और प्रत्यभिज्ञा), "भानवीक्रम" से "कालग्रास" तक द्वादश काली के विकास, मूल संस्कृत स्रोतों और पद्धतिगत सावधानियों का विश्लेषण करता है।',
    sections: [
      {
        headingEn: '1. Definition and Religious Significance',
        headingHi: '1. परिभाषा एवं धार्मिक महत्त्व (Definition and Religious Significance)',
        bodyEn:
          'Etymology of Kālīkula: Kālīkula is a name used for Śākta Tantric traditions centered on Kālī and related forms of the Goddess. The term combines Kālī, the Goddess, with kula, meaning family, lineage, group, or, in certain Tantric philosophical contexts, a larger interconnected whole.\nA broad family of related traditions: Kālīkula is not one universally standardized organization with a single scripture, ritual system, or theology. It is better understood as a broad family of related traditions whose teachings developed across different regions and historical periods—some strongly associated with Bengal and eastern India, and others belonging to the medieval Tantric traditions of Kashmir, particularly the Krama current (summarized in Table 01 above).\nSupreme consciousness and the power of time: In these traditions, Kālī is not merely a goddess who destroys evil. Depending on the text and lineage, she can represent supreme consciousness, the power of time, the dynamic nature of existence, the dissolution of the universe, or the reality beyond ordinary distinctions.\nMultidimensional significance: The significance of Kālī therefore extends beyond her visual imagery. Her iconography, mythology, mantra traditions, and philosophical interpretations provide different ways of understanding the relationship between consciousness, creation, time, transformation, and liberation.',
        bodyHi:
          'कालीकुल की व्युत्पत्ति: कालीकुल नाम का प्रयोग काली और देवी के संबंधित स्वरूपों पर केंद्रित शाक्त तांत्रिक परम्पराओं के लिए किया जाता है। यह शब्द "काली" (देवी) और "कुल" (परिवार, वंश, समूह अथवा विशिष्ट तांत्रिक दार्शनिक संदर्भों में एक वृहत्तर अंतर्संबंधित समग्रता) के मेल से बना है।\nसंबंधित परम्पराओं का व्यापक परिवार: कालीकुल कोई एक सर्वत्र मानकीकृत संगठन नहीं है जिसका एक ही शास्त्र, एक ही अनुष्ठान-पद्धति या एक ही धर्मशास्त्र हो। इसे विभिन्न क्षेत्रों और ऐतिहासिक कालों में विकसित संबंधित परम्पराओं के एक व्यापक परिवार के रूप में समझा जाना चाहिए—जिनमें कुछ बंगाल और पूर्वी भारत से जुड़ी हैं तथा अन्य कश्मीर की मध्यकालीन तांत्रिक परम्पराओं, विशेषतः क्रम (Krama) धारा से संबद्ध हैं (देखें ऊपर तालिका ०१)।\nसर्वोच्च चेतना एवं काल की शक्ति: इन परम्पराओं में काली केवल दुष्टों का विनाश करने वाली देवी मात्र नहीं हैं। ग्रन्थ और परम्परा के अनुसार वे सर्वोच्च चेतना, काल की शक्ति, अस्तित्व की गतिशील प्रकृति, ब्रह्माण्ड के विलय, अथवा साधारण भेदों से परे के परम यथार्थ का प्रतिनिधित्व करती हैं।\nबहुआयामी महत्त्व: इसलिए काली का महत्त्व केवल उनकी दृश्य प्रतिमा तक सीमित नहीं है। उनका प्रतिमाशास्त्र, पौराणिक आख्यान, मन्त्र-परम्पराएँ और दार्शनिक व्याख्याएँ चेतना, सृष्टि, काल, रूपांतरण और मुक्ति के अंतर्संबंध को समझने के विविध मार्ग प्रदान करती हैं।'
      },
      {
        headingEn: '2. The Philosophical Foundations of Kālīkula (2.1 to 2.4)',
        headingHi: '2. कालीकुल के दार्शनिक आधार (२.१ से २.४)',
        bodyEn:
          '2.1 Śakti as supreme reality: Śakti means power, capacity, or divine energy. In Śākta traditions, Śakti is not simply an instrument belonging to a separate male deity. She may be understood as the ultimate reality itself—the power through which existence manifests, continues, and returns to its source. In some nondual Tantric systems, Śiva and Śakti are inseparable aspects of reality: Śiva represents consciousness, while Śakti represents its dynamic, self-expressive power. This distinction is a philosophical framework, not necessarily a claim that the two are separate entities. Kālīkula traditions vary in how they formulate this relationship: some emphasize Kālī as the supreme Goddess beyond all categories; others explain her through more elaborate systems of manifestation, cognition, and dissolution.\n2.2 Kālī and time: The Sanskrit word kāla is associated with time and, in certain contexts, death. Kālī’s relationship with time is therefore a central theme in many interpretations of her name and mythology. In the Kashmirian Krama tradition, the Goddess is associated with cycles of manifestation, experience, and dissolution. A particularly important doctrine concerns the twelve Kālīs, whose sequence is interpreted in later philosophical texts as the unfolding and reabsorption of consciousness. In this philosophical setting, what arises, is experienced, and disappears is understood in relation to the dynamic activity of consciousness itself.\n2.3 Creation and dissolution: Kālī’s destructive imagery is often interpreted through the larger cycle of existence: (1) Manifestation — reality appears in differentiated forms; (2) Experience — beings encounter and participate in the world; (3) Transformation — forms change and cease to remain as they were; (4) Dissolution — distinctions and manifested forms return to their source. These stages are a useful interpretive framework, not a single four-stage doctrine shared by every Kālīkula lineage; particular Tantric texts employ their own technical classifications.\n2.4 Liberation and recognition: Some nondual Śākta and Śaiva traditions understand liberation as a transformation in how reality is recognized and experienced. The practitioner seeks more than temporary supernatural benefits or favorable circumstances. In the Kashmirian Krama tradition, the sequence of the Goddess can be interpreted as the unfolding and reabsorption of awareness, where the aim is associated with realizing the nature of consciousness rather than remaining confined to ordinary, limited perception. This philosophical interpretation should not be automatically attributed to every Bengali Kālī worship tradition or every lineage that uses the name Kālīkula.',
        bodyHi:
          '२.१ परम यथार्थ के रूप में शक्ति (Śakti as supreme reality): शक्ति का अर्थ सामर्थ्य, क्षमता या दिव्य ऊर्जा है। शाक्त परम्पराओं में शक्ति किसी पृथक् पुरुष देवता का मात्र उपकरण नहीं हैं; वे स्वयं परम यथार्थ हैं—वह शक्ति जिसके द्वारा अस्तित्व प्रकट होता है, बना रहता है और अपने मूल स्रोत में लौटता है। कुछ अद्वैत तांत्रिक प्रणालियों में शिव और शक्ति यथार्थ के अविभाज्य पहलू हैं—शिव चेतना का और शक्ति उसकी गतिशील, स्व-अभिव्यंजक सामर्थ्य का प्रतिनिधित्व करती हैं। कालीकुल परम्पराओं में इस संबंध को विविध प्रकार से व्यक्त किया गया है: कुछ काली को समस्त श्रेणियों से परे सर्वोच्च देवी मानती हैं, तो अन्य उन्हें उन्मेष, संवेदन और विलय की विस्तृत प्रणालियों के माध्यम से समझाती हैं।\n२.२ काली और काल (Kālī and time): संस्कृत शब्द "काल" समय और मृत्यु से संबद्ध है। कश्मीर की क्रम परम्परा में देवी को अभिव्यक्ति, अनुभव और लय के चक्रों से जोड़ा गया है। इसमें "द्वादश काली" (बारह कालियों) का सिद्धांत विशेष महत्त्वपूर्ण है, जिनके अनुक्रम की व्याख्या परवर्ती दार्शनिक ग्रन्थों में चेतना के प्रकटन और पुनः समावेशन के रूप में की गई है। यहाँ जो कुछ भी उत्पन्न होता है, अनुभव किया जाता है और विलीन होता है, उसे स्वयं चेतना की गतिशील क्रिया के संदर्भ में समझा जाता है।\n२.३ सृष्टि और लय (Creation and dissolution): काली के संहारक प्रतीकों की व्याख्या अस्तित्व के वृहत्तर चक्र के माध्यम से की जाती है: (१) अभिव्यक्ति (Manifestation) — यथार्थ का विभेदित रूपों में प्रकट होना; (२) अनुभव (Experience) — जीवों का संसार से साक्षात्कार और सहभागिता; (३) रूपांतरण (Transformation) — रूपों का बदलना; तथा (४) लय (Dissolution) — भेदों और प्रकट रूपों का अपने मूल स्रोत में लौट जाना। ये चार चरण एक उपयोगी व्याख्यात्मक रूपरेखा हैं, न कि हर कालीकुल शाखा का एक ही निश्चित नियम।\n२.४ मुक्ति और प्रत्यभिज्ञा (Liberation and recognition): अद्वैत शाक्त और शैव परम्पराओं में मुक्ति को यथार्थ की पहचान और अनुभव के रूपांतरण के रूप में देखा जाता है, जहाँ साधक केवल अस्थायी चमत्कारिक लाभों से ऊपर उठता है। कश्मीरी क्रम परम्परा में देवी के अनुक्रम का उद्देश्य साधारण, सीमित बोध में बँधे रहने के बजाय चेतना के वास्तविक स्वरूप का साक्षात्कार करना है; किंतु इस दार्शनिक व्याख्या को स्वतः प्रत्येक बंगाली काली-उपासना परम्परा पर लागू नहीं माना जाना चाहिए।'
      },
      {
        headingEn: '3. Iconographic Methodology & Primary Textual Sources',
        headingHi: '3. प्रतिमाशास्त्रीय शोध-पद्धति एवं मूल ग्रंथीय स्रोत',
        bodyEn:
          'Iconographic Interpretive Methodology (see Table 02 above for specific visual attributes): Iconographic descriptions of Kālī—such as her dark complexion, garland of heads, posture standing upon reclining Śiva, and cremation-ground environment—must distinguish what is visibly represented from the theological interpretations attributed to particular scriptures, commentaries, or living communities. A single iconographic motif may carry multiple valid meanings across devotional, ritual, and nondual philosophical registers rather than one universal explanation.\nArchival Importance of the Krama Current: Among the wider Kālī-centered traditions (Table 01), the Kashmirian Krama current is especially significant for textual research because its scriptures and commentaries preserve a systematic philosophical exegesis of Kālī beyond popular devotional iconography.\nPrimary Sanskrit Textual Corpus:\n(1) Kālīkulakramasadbhāva — A foundational Tantric scripture belonging to the Kālī-centered Krama textual tradition.\n(2) Jayadrathayāmala — A monumental Bhairava-Tantra / Yāmala source crucial for the historical study of fierce Goddess cults and Kālī-centered ritual and yoginī traditions.\n(3) Devīpañcaśataka — A key scriptural source examined in modern philological scholarship on the early formation of the twelve Kālīs.\n(4) Tantrāloka — Abhinavagupta’s encyclopedic philosophical and ritual synthesis, central to the nondual systematization of Krama and Trika doctrines.\nContextual Caution: These texts belong to distinct historical strata and genres; they should not be conflated as manuals for a single uniform contemporary ritual practice.',
        bodyHi:
          'प्रतिमाशास्त्रीय शोध-पद्धति (विशिष्ट दृश्य लक्षणों हेतु ऊपर तालिका ०२ देखें): काली के प्रतिमाशास्त्रीय लक्षणों—जैसे श्यामल वर्ण, मुण्डमाला, शवासनस्थ शिव पर आरूढ़ मुद्रा और श्मशान-परिवेश—का अध्ययन करते समय दृश्य रूप और विशिष्ट शास्त्रों, भाष्यों या साधक-समुदायों की व्याख्याओं के बीच स्पष्ट अंतर रखना आवश्यक है। एक ही प्रतीक भक्ति, अनुष्ठान और अद्वैत दर्शन के स्तर पर एकाधिक प्रामाणिक अर्थ धारण कर सकता है।\nक्रम धारा का अभिलेखीय महत्त्व: व्यापक काली-केंद्रित परिदृश्य (तालिका ०१) में कश्मीर की क्रम परम्परा विशेष रूप से महत्त्वपूर्ण है क्योंकि इसके मूल ग्रन्थ और दार्शनिक भाष्य लोकप्रिय प्रतिमाशास्त्र से परे काली की अत्यंत परिष्कृत दार्शनिक व्याख्या प्रस्तुत करते हैं।\nप्रमुख मूल संस्कृत ग्रन्थ:\n(१) कालीकुलक्रमसद्भाव (Kālīkulakramasadbhāva) — काली-केंद्रित क्रम ग्रंथ-परम्परा से संबद्ध आधारभूत तांत्रिक शास्त्र।\n(२) जयद्रथयामल (Jayadrathayāmala) — भैरव और काली-केंद्रित योगिनी व क्रम परम्पराओं के ऐतिहासिक अध्ययन का वृहद् यामल स्रोत।\n(३) देवीपञ्चशतक (Devīpañcaśataka) — द्वादश काली के प्रारंभिक विकास के अध्ययन हेतु अत्यंत महत्त्वपूर्ण मूल ग्रन्थ।\n(४) तन्त्रालोक (Tantrāloka) — अभिनवगुप्त की विश्वकोशीय दार्शनिक और आनुष्ठानिक कृति, जो क्रम और त्रिक सिद्धांतों के अद्वैत व्यवस्थितीकरण का आधार है।\nऐतिहासिक सावधानी: ये कृतियाँ भिन्न ऐतिहासिक कालखंडों और विधाओं से संबद्ध हैं; इन्हें किसी एक ही समकालीन साधना की एकसमान पूजा-पुस्तिका नहीं माना जाना चाहिए।'
      },
      {
        headingEn: '4. Kālīgaṇa (कालीगण) & The Twelve Kālīs: Terminological Inquiry, Bhānavīkrama & Time-Consumption (Kālagrāsa)',
        headingHi: '4. कालीगण (Kālīgaṇa) एवं द्वादश काली: पारिभाषिक अन्वेषण, भानवीक्रम एवं कालग्रास दर्शन',
        bodyEn:
          'Lexical Analysis of Kālīgaṇa (कालीगण): The Sanskrit compound Kālīgaṇa combines Kālī (काली, the Goddess) with gaṇa (गण — group, class, troop, retinue, assembly, or series). Literally, Kālīgaṇa means "the group, troop, retinue, or series of Kālīs" or "the retinue associated with Kālī." As detailed in Table 03 above, Kālīgaṇa is a grammatically natural descriptive compound for a collective of Kālī manifestations or attendant powers (such as yoginīs, mātṛkās, or fierce śaktis), whereas the established academic and scriptural designations for the wider Tantric streams are Kālīkula, Kālīkrama (or Mahānaya), and Kaula.\nThree Contexts Where Collective Kālī Groupings Appear:\n(1) The Twelve Kālīs (Dvādaśa Kālī) of the Kālīkrama Tradition — In medieval Kashmirian Krama texts, Kālī is contemplated not merely as a single iconographic deity, but as a dynamic twelvefold wheel or sequence of Kālīs representing the unfolding, cognitive engagement, and reabsorption of consciousness.\n(2) From the Sequence of the Sun-Goddess (Bhānavīkrama) to Time-Consumption (Kālagrāsa) — As demonstrated in Aleksandra Wenta’s peer-reviewed study (“From the Sequence of the Sun-Goddess to Time-Consumption: The Twelve Kālīs in the Krama Tradition of Kashmir and Their Kula/Kaula Background”, Journal of Indian Philosophy, 2021), the grouping of Twelve Kālīs developed from earlier Kula/Kaula textual contexts centered on the bhānavīkrama ("sequence of the Sun-Goddess") in works such as the Devīpañcaśataka, Kālīkulakramasadbhāva, and Jayadrathayāmala. In later Kashmirian nondual exegesis—especially in Abhinavagupta’s Tantrāloka and Kṣemarāja’s commentaries—this twelvefold group was philosophically reinterpreted through the doctrine of kālagrāsa ("time-consumption"), wherein supreme consciousness devours segmented temporal sequence and reveals timeless nondual awareness.\n(3) Retinues (Gaṇas) in Śākta-Śaiva Ritual & Folk Registers — In broader Tantric mandala architectures and regional Indian religious vocabularies, gaṇa denotes organized retinues of yoginīs, mātṛkās, bhairavas, or directional guardians surrounding the central Goddess.',
        bodyHi:
          'कालीगण (Kālīgaṇa) का भाषाशास्त्रीय विश्लेषण: संस्कृत सामासिक पद "कालीगण" दो शब्दों से निर्मित है—काली (देवी) + गण (समूह, वर्ग, दल, परिचारिका-मण्डल, सभा या अनुक्रम)। शाब्दिक रूप से "कालीगण" का अर्थ "काली के स्वरूपों का समूह/अनुक्रम" अथवा "काली से संबद्ध परिचारिका-गण" है। जैसा कि ऊपर तालिका ०३ में स्पष्ट किया गया है, "कालीगण" देवी-समूहों या योगिनी-परिचारिकाओं के लिए एक व्याकरणसम्मत वर्णनात्मक पद है, जबकि प्रमुख तांत्रिक संप्रदायों और धाराओं के प्रमाणित शास्त्रीय नाम "कालीकुल", "कालीक्रम" (महानय) और "कौल" हैं।\nकाली-समूहों और गणों के तीन प्रमुख ऐतिहासिक संदर्भ:\n(१) कालीक्रम परम्परा की द्वादश काली (बारह कालियाँ) — मध्यकालीन कश्मीर की क्रम परम्परा में काली की उपासना केवल एक एकल प्रतिमा के रूप में नहीं, अपितु बारह कालियों के गतिशील चक्र या अनुक्रम के रूप में की जाती है, जो चेतना के उन्मेष, संवेदन और पुनः समावेशन का प्रतिनिधित्व करता है।\n(२) "भानवीक्रम" (सूर्य-देवी के अनुक्रम) से "कालग्रास" (काल-भक्षण) तक का विकास — अलेक्ज़ांद्रा वेंटा के समीक्षित शोध (Journal of Indian Philosophy, २०२१) के अनुसार, द्वादश काली का यह समूह प्रारंभिक कुल/कौल ग्रन्थों (जैसे देवीपञ्चशतक, कालीकुलक्रमसद्भाव और जयद्रथयामल) में वर्णित "भानवीक्रम" (सूर्य-देवी के अनुक्रम) की पृष्ठभूमि से विकसित हुआ। परवर्ती कश्मीरी अद्वैत भाष्यों—विशेषतः अभिनवगुप्त के तन्त्रालोक और क्षेमराज की व्याख्याओं—में इस बारह-स्तरीय समूह की व्याख्या "कालग्रास" (चेतना द्वारा खंडित काल-क्रम के भक्षण/समावेशन) के उच्च दार्शनिक सिद्धांत के रूप में की गई।\n(३) शाक्त-शैव मण्डलों एवं क्षेत्रीय परम्पराओं में "गण" — व्यापक तांत्रिक मण्डल-विधानों और क्षेत्रीय परम्पराओं में केंद्रीय देवी के चारों ओर स्थित योगिनियों, मातृकाओं और भैरवों के सुव्यवस्थित आवरण या परिचारक-दल को "गण" कहा जाता है।'
      },
      {
        headingEn: '5. Methodological Safeguards: What Kālīkula & Kālīgaṇa Should Not Be Reduced To',
        headingHi: '5. पद्धतिगत सावधानियाँ: कालीकुल एवं कालीगण को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए',
        bodyEn:
          'Core Safeguards for Kālīkula Research:\n1. Not black magic: Kālīkula is a philosophical, devotional, and ritual family of Śākta Tantra, not a synonym for black magic or sorcery (abhicāra).\n2. Not uniformly transgressive: Kālī worship is not necessarily transgressive or restricted to cremation-ground practices.\n3. Ritual diversity across regions: Every Kālī-centered tradition does not follow the same ritual manual or liturgical system.\n4. Twelve Kālīs vs. Ten Mahāvidyās: The Twelve Kālīs (Dvādaśa Kālī) of Kashmirian Krama must not be confused with the Ten Mahāvidyās (Daśa Mahāvidyā, covered in Unit SKT-02).\n5. Religious claims vs. empirical claims: Scriptural statements regarding supernatural powers (siddhis) or ritual effects are documented as religious and textual doctrines rather than laboratory claims.\nSource-Verification Safeguards for Kālīgaṇa:\n6. Manuscript verification before canonization: Because Kālīgaṇa functions as a descriptive Sanskrit compound ("group/retinue of Kālīs") rather than a universally standardized sect name, no fixed list of deities, mantras, or regional rites should be assigned to the heading "Kālīgaṇa" without citing the exact Sanskrit manuscript, Tantra, or regional archive where the term occurs.',
        bodyHi:
          'कालीकुल शोध के लिए मूलभूत सावधानियाँ:\n१. काला जादू नहीं: कालीकुल शाक्त तन्त्र की एक दार्शनिक, भक्तिमूलक और आनुष्ठानिक महाधारा है, वह काले जादू या अभिचार का पर्याय नहीं है।\n२. सर्वत्र वाममार्गी या श्मशान-साधना नहीं: काली की उपासना अनिवार्य रूप से सीमांत या श्मशान-साधना तक सीमित नहीं होती।\n३. क्षेत्रीय एवं आनुष्ठानिक विविधता: प्रत्येक काली-केंद्रित परम्परा एक ही पूजा-पद्धति का पालन नहीं करती।\n४. द्वादश काली बनाम दशमहाविद्या: कश्मीरी क्रम परम्परा की "बारह कालियों" (द्वादश काली) को "दस महाविद्याओं" (दशमहाविद्या, इकाई SKT-02) के साथ भ्रमित नहीं किया जाना चाहिए।\n५. ग्रंथीय कथन बनाम वैज्ञानिक दावे: अलौकिक सिद्धियों या अनुष्ठान-प्रभावों के उल्लेखों को ग्रंथीय और धार्मिक मान्यताओं के रूप में प्रस्तुत किया जाता है।\nकालीगण (Kālīgaṇa) संबंधी स्रोत-सत्यापन सावधानी:\n६. पाण्डुलिपि-सत्यापन की अनिवार्यता: चूँकि "कालीगण" किसी सर्वमान्य स्वतंत्र संप्रदाय-नाम के बजाय एक वर्णनात्मक संस्कृत सामासिक पद ("काली-स्वरूपों या परिचारिकाओं का समूह") है, इसलिए किसी विशिष्ट मूल ग्रन्थ या पाण्डुलिपि के प्रत्यक्ष प्रमाण के बिना इसके अंतर्गत मनमानी देवता-सूची या मन्त्र-विधान का आरोपण नहीं किया जाना चाहिए।'
      }
    ],
    keyFindingsEn: [
      'Kālīkula (कालीकुल, "family/lineage of Kālī") encompasses diverse regional traditions across Bengal, eastern India, and the medieval Kashmirian Krama current.',
      'Philosophical core: Examines Śakti as supreme reality, Kālī’s relationship with kāla (time), the fourfold cycle of manifestation–experience–transformation–dissolution, and liberation as nondual recognition.',
      'Kālīgaṇa (कालीगण) & Twelve Kālīs Dossier: Distinguishes the compound Kālīgaṇa ("group/retinue of Kālīs") from attested school names (Kālīkula, Kālīkrama) and traces the Twelve Kālīs from the sequence of the Sun-Goddess (bhānavīkrama) to time-consumption (kālagrāsa) per Wenta (2021) and Abhinavagupta’s Tantrāloka.',
      'Methodological safeguard: Separates visible iconography from lineage exegesis, distinguishes the Twelve Kālīs of Krama from the Ten Mahāvidyās, and requires primary source verification for specific gaṇa lists.'
    ],
    keyFindingsHi: [
      'कालीकुल ("काली का परिवार, वंश या परम्परा") में बंगाल व पूर्वी भारत की शाक्त धाराओं से लेकर मध्यकालीन कश्मीर की क्रम (Krama) परम्परा तक विविध धाराएँ समाहित हैं।',
      'दार्शनिक केंद्र: परम यथार्थ के रूप में शक्ति, काल के साथ काली का संबंध, अभिव्यक्ति-अनुभव-रूपांतरण-लय का चतुर्विध चक्र और प्रत्यभिज्ञा-मूलक मुक्ति।',
      'कालीगण एवं द्वादश काली शोध: "कालीगण" (काली का समूह/परिचारिका-गण) और प्रमाणित संप्रदाय-नामों (कालीकुल, कालीक्रम) में स्पष्ट भेद करता है तथा वेंटा (२०२१) व तन्त्रालोक के आधार पर "भानवीक्रम" से "कालग्रास" तक द्वादश काली के विकास को स्पष्ट करता है।',
      'पद्धतिगत सावधानी: दृश्य प्रतिमा और भाष्यगत अर्थ में अंतर रखता है तथा कश्मीरी क्रम की द्वादश काली को दशमहाविद्या से पृथक् रखता है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Terms', labelHi: 'संस्कृत शब्दावली', valueEn: 'कालीकुल (Kālīkula) · कालीक्रम (Kālīkrama) · कालीगण (Kālīgaṇa)', valueHi: 'कालीकुल · कालीक्रम · कालीगण' },
      { labelEn: 'Literal Meanings', labelHi: 'शाब्दिक अर्थ', valueEn: 'Family/lineage of Kālī · Sequence of Kālī · Group/retinue of Kālīs', valueHi: 'काली का कुल/परम्परा · काली का अनुक्रम · काली के रूपों का समूह/गण' },
      { labelEn: 'Primary Textual Sources', labelHi: 'मूल ग्रंथीय स्रोत', valueEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka', valueHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक' },
      { labelEn: 'Key Modern Scholarship', labelHi: 'प्रमुख आधुनिक शोध', valueEn: 'Aleksandra Wenta, Journal of Indian Philosophy (2021)', valueHi: 'अलेक्ज़ांद्रा वेंटा, Journal of Indian Philosophy (२०२१)' }
    ],
    primarySourcesEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka (Abhinavagupta) · Kṣemarāja Commentaries · Aleksandra Wenta (2021)',
    primarySourcesHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक (अभिनवगुप्त) · क्षेमराज भाष्य · अलेक्ज़ांद्रा वेंटा (२०२१)',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'srikula-archive-tradition',
    categorySlug: 'eight-matrikas',
    code: 'SKT-01B',
    titleEn: 'Part II — Śrīkula Archive: The Goddess of Sovereignty, Manifestation, and Sacred Knowledge',
    titleHi: 'भाग II — श्रीकुल अभिलेखागार: संप्रभुता, अभिव्यक्ति और पवित्र ज्ञान की देवी',
    subtitleEn: 'Sanskrit: श्रीकुल · Transliteration: Śrīkula · Literal meaning: The family, lineage, or tradition of Śrī — Śrīvidyā, Tripurasundarī, Philosophy, Śrīcakra Theology, Mantra, Jīvanmukti & Textual Sources',
    subtitleHi: 'संस्कृत: श्रीकुल · लिप्यंतरण: Śrīkula · शाब्दिक अर्थ: श्री का परिवार, वंश या परम्परा — श्रीविद्या, त्रिपुरसुन्दरी, दार्शनिक आधार, श्रीचक्र धर्मशास्त्र, मन्त्र, जीवनमुक्ति एवं ग्रंथीय स्रोत',
    sanskritEpigraph: '॥ श्रीविद्या राजराजेश्वरी महात्रिपुरसुन्दरी · श्रीचक्र-नव-आवरण-रूपायै नमः ॥',
    epigraphTranslationEn: '"Śrīkula Archive — An index of Śrīvidyā, Tripurasundarī, Śrīcakra traditions, mantra theology, historical texts, ritual systems, and philosophical commentaries."',
    epigraphTranslationHi: '"श्रीकुल अभिलेखागार — श्रीविद्या, त्रिपुरसुन्दरी, श्रीचक्र परम्पराओं, मन्त्र-धर्मशास्त्र, ऐतिहासिक ग्रन्थों, अनुष्ठान प्रणालियों और दार्शनिक भाष्यों का शोध संश्लेषण।"',
    evidenceBadgeEn: 'PART II · ŚRĪKULA & ŚRĪVIDYĀ RESEARCH SYNTHESIS & ARCHIVE',
    evidenceBadgeHi: 'भाग II · श्रीकुल एवं श्रीविद्या शोध संश्लेषण एवं अभिलेखागार',
    accentColor: '#EC4899',
    summaryEn:
      'Śrīkula (Sanskrit: श्रीकुल — "The family, lineage, or tradition of Śrī") is a name used for Śākta Tantric traditions centered on Śrī, especially the Goddess Tripurasundarī, also known as Lalitā, Rājarājeśvarī, Ṣoḍaśī, and Tripurā. Its best-known associated tradition is Śrīvidyā ("auspicious knowledge" or "sacred wisdom"), in which the Goddess is worshipped through an integrated theological and ritual system uniting her anthropomorphic image, her mantra (Pañcadaśī / Ṣoḍaśī), and the nine-enclosure Śrīcakra (detailed in the top structural table). With a particularly significant history in South India and deep philosophical exchanges with Kashmir, Śrīkula encompasses external worship, internalized meditation, nondual metaphysics, and the pursuit of liberation during one’s lifetime (jīvanmukti).',
    summaryHi:
      'श्रीकुल (संस्कृत: श्रीकुल — "श्री का परिवार, वंश या परम्परा") "श्री" विशेषतः भगवती त्रिपुरसुन्दरी (जिन्हें ललिता, राजराजेश्वरी, षोडशी और त्रिपुरा भी कहा जाता है) पर केंद्रित शाक्त तांत्रिक परम्पराओं का नाम है। इससे जुड़ी सर्वाधिक प्रसिद्ध परम्परा "श्रीविद्या" ("मंगलमयी विद्या" या "पवित्र प्रज्ञा") है, जिसमें देवी की उपासना उनके साकार विग्रह, मन्त्र (पञ्चदशी / षोडशी) और नव-आवरण श्रीचक्र (जिसकी ज्यामितीय संरचना ऊपर तालिका में दी गई है) की एकीकृत धर्मशास्त्रीय और आनुष्ठानिक प्रणाली के माध्यम से की जाती है। दक्षिण भारत में सुदृढ़ ऐतिहासिक विकास और कश्मीर की शैव-शाक्त दार्शनिक परम्पराओं के साथ गहरे संवाद से युक्त श्रीकुल में बाह्य पूजा, अंतर्मुखी ध्यान, अद्वैत तत्त्वमीमांसा और "जीवनमुक्ति" का चिंतन समाहित है।',
    sections: [
      {
        headingEn: '1. Definition & Religious Significance · 2. Tripurasundarī: The Central Goddess',
        headingHi: '1. परिभाषा एवं धार्मिक महत्त्व · 2. त्रिपुरसुन्दरी: केंद्रीय देवी',
        bodyEn:
          '1. Śrīkula and Śrīvidyā: Śrīkula designates Śākta Tantric traditions centered on Śrī, especially the Goddess Tripurasundarī, whose best-known associated tradition is Śrīvidyā ("auspicious knowledge" or "sacred wisdom"). In Śrīvidyā, the Goddess is worshipped through three interconnected forms: her anthropomorphic image, her subtle sonic mantra, and the geometric Śrīcakra (Śrīyantra). Rather than three separate objects, these form a single integrated theological and ritual system. Historically, Śrīkula developed with particular vigor in South India while engaging in deep philosophical exchange with Kashmirian Śaiva and Śākta nondualism.\n2. Tripurasundarī ("The Beauty of the Three Cities / Three Worlds"): In Śrīvidyā, Tripurasundarī is understood as a supreme manifestation of Śakti rather than merely one deity among many. Her principal names highlight distinct theological dimensions:\n(a) Lalitā — the graceful or playful Goddess whose cosmic activity unfolds effortlessly.\n(b) Rājarājeśvarī — the sovereign of sovereigns, whose royal attributes communicate supreme cosmic authority.\n(c) Ṣoḍaśī — the sixteenfold Goddess associated with completeness and the sixteenth lunar digit beyond waxing and waning.\n(d) Tripurā — emphasizing her relationship with the threefold structures of reality. In Śrīvidyā theology, her royal beauty and auspiciousness are not opposed to transcendence: supreme reality manifests simultaneously as the transcendent source of the cosmos and an accessible object of devotion.',
        bodyHi:
          '१. श्रीकुल एवं श्रीविद्या: श्रीकुल "श्री", विशेषतः भगवती त्रिपुरसुन्दरी पर केंद्रित शाक्त तांत्रिक परम्पराओं को निर्दिष्ट करता है, जिनकी सर्वाधिक प्रसिद्ध धारा "श्रीविद्या" ("मंगलमयी विद्या" या "पवित्र प्रज्ञा") है। श्रीविद्या में देवी की उपासना तीन परस्पर संबद्ध रूपों—उनके साकार विग्रह, सूक्ष्म नाद-मन्त्र और ज्यामितीय श्रीचक्र (श्रीयन्त्र)—के माध्यम से की जाती है। ये तीन अलग-अलग वस्तुएँ नहीं, अपितु एक एकीकृत धर्मशास्त्रीय और आनुष्ठानिक प्रणाली हैं। दक्षिण भारत में इसका सुदृढ़ ऐतिहासिक विकास हुआ तथा कश्मीर की अद्वैत शैव-शाक्त परम्पराओं के साथ इसका गहरा आदान-प्रदान रहा।\n२. त्रिपुरसुन्दरी ("तीनों पुरों / तीनों लोकों की सुन्दरी"): श्रीविद्या में त्रिपुरसुन्दरी को अनेक देवताओं में से मात्र एक देवी के बजाय पराशक्ति की सर्वोच्च अभिव्यक्ति के रूप में समझा जाता है। उनके प्रमुख नाम विशिष्ट धर्मशास्त्रीय आयामों को प्रकट करते हैं:\n(क) ललिता — ललित, अनुग्रहपूर्ण या लीलामयी देवी जिनकी सृष्टि-लीला सहज रूप से प्रवाहित होती है।\n(ख) राजराजेश्वरी — सम्राटों की भी अधीश्वरी, जिनका राजसी स्वरूप सर्वोच्च ब्रह्माण्डीय संप्रभुता को दर्शाता है।\n(ग) षोडशी — सोलह कलाओं और देश-काल की पन्द्रह कलाओं से परे सोलहवीं पूर्ण कला से संबद्ध स्वरूप।\n(घ) त्रिपुरा — यथार्थ की त्रिविध संरचनाओं के साथ उनके संबंध को रेखांकित करने वाला नाम। श्रीविद्या धर्मशास्त्र में उनका सौन्दर्य और मांगल्य लोकातीत स्वरूप के विरोधी नहीं हैं; परम यथार्थ ब्रह्माण्ड के मूल स्रोत और भक्ति के सुलभ आलंबन—दोनों रूपों में प्रकट होता है।'
      },
      {
        headingEn: '3. The Philosophical Foundations of Śrīkula (3.1 to 3.3)',
        headingHi: '3. श्रीकुल के दार्शनिक आधार (३.१ से ३.३)',
        bodyEn:
          '3.1 The unity of consciousness and manifestation: Many Śrīvidyā traditions draw on nondual Śaiva philosophical frameworks in which consciousness and its power of manifestation are inseparable. The universe is not always treated as something entirely separate from the Goddess; rather, the manifested world can be understood as an expression of her power, while her ultimate nature exceeds any particular form or manifestation. The precise philosophical explanation differs among teachers and textual traditions: some emphasize nondual metaphysics, while others integrate Śākta worship with Vedāntic interpretations.\n3.2 The threefold nature of Tripurā: The name Tripurā invites interpretation through threefold structures prominent in Indian philosophical and Tantric systems. Depending on the text and lineage, these correspondences include: (1) The three worlds; (2) The knower (pramātṛ), the act of knowing (pramāṇa), and the known (prameya); (3) Creation, preservation, and dissolution; and (4) Waking, dreaming, and deep sleep. Because these triads are interpretive correspondences rather than a single universally fixed list, each correspondence must be read in light of the specific text or commentary that establishes it.\n3.3 Beauty, auspiciousness, and sovereignty: Tripurasundarī’s iconography emphasizes beauty, radiance, royal authority, and auspiciousness. In this theological setting, beauty is not merely a superficial quality; it expresses the intelligibility, harmony, and creative fullness of manifestation. The Goddess is sovereign over the cosmos while remaining its inner power and source—one reason Śrīvidyā cannot be reduced to a merely "gentle" counterpart to Kālī worship.',
        bodyHi:
          '३.१ चेतना और अभिव्यक्ति की एकता (The unity of consciousness and manifestation): अनेक श्रीविद्या परम्पराएँ अद्वैत शैव दार्शनिक ढाँचे से जुड़ती हैं जहाँ चेतना और उसकी अभिव्यक्ति-शक्ति अविभाज्य हैं। ब्रह्माण्ड को देवी से पूर्णतः पृथक् वस्तु के रूप में नहीं देखा जाता; प्रत्युत प्रकट जगत को उनकी शक्ति की अभिव्यक्ति माना जाता है, जबकि उनका परम स्वरूप किसी भी विशेष रूप से परे है। कुछ आचार्य अद्वैत तत्त्वमीमांसा पर बल देते हैं, जबकि अन्य शाक्त उपासना को वेदान्तिक व्याख्याओं के साथ समन्वित करते हैं।\n३.२ त्रिपुरा का त्रिविध स्वरूप (The threefold nature of Tripurā): "त्रिपुरा" नाम भारतीय दर्शन और तन्त्र में प्रमुख त्रिविध संरचनाओं के माध्यम से व्याख्या को आमंत्रित करता है। ग्रन्थ और परम्परा के अनुसार इनमें शामिल हैं: (१) तीन लोक; (२) ज्ञाता (प्रमाता), ज्ञान-प्रक्रिया (प्रमाण) और ज्ञेय (प्रमेय); (३) सृष्टि, स्थिति और लय; तथा (४) जाग्रत, स्वप्न और सुषुप्ति। प्रत्येक त्रयी को किसी विशिष्ट ग्रन्थ या भाष्य के संदर्भ में ही समझा जाना चाहिए।\n३.३ सौन्दर्य, मांगल्य एवं संप्रभुता (Beauty, auspiciousness, and sovereignty): त्रिपुरसुन्दरी के प्रतिमाशास्त्र में सौन्दर्य, तेज, राजकीय अधिकार और मांगल्य पर विशेष बल है। यहाँ सौन्दर्य कोई बाह्य या सतही गुण नहीं है; यह सृष्टि की बोधगम्यता, सामरस्य और रचनात्मक पूर्णता को व्यक्त करता है। यही कारण है कि श्रीविद्या को केवल काली-उपासना का "सौम्य" रूप कह देना पर्याप्त नहीं है।'
      },
      {
        headingEn: '4. Theological Context of the Śrīcakra · 5. Mantra (Pañcadaśī & Ṣoḍaśī) · 6. Ritual, Meditation & Jīvanmukti',
        headingHi: '4. श्रीचक्र का धर्मशास्त्रीय संदर्भ · 5. मन्त्र (पञ्चदशी एवं षोडशी) · 6. अनुष्ठान, ध्यान एवं जीवनमुक्ति',
        bodyEn:
          '4. Theological and Ritual Context of the Śrīcakra (see Table 01 above for the Bindu, 9 Interlocking Triangles, Lotus Enclosures, and 9 Āvaraṇas): In Śrīvidyā exegesis, the nine enclosures (navāvaraṇa) map the progressive unfolding of the cosmos from the undivided central point (bindu) to the outer square boundary (bhūpura) and, in contemplative return, the reintegration of differentiated powers back into supreme awareness. Because specific deity placements and liturgical sequences vary across manuals, a simplified geometric drawing must never be mistaken for a complete ritual prescription.\n5. Mantra and the Subtle Form of the Goddess: In Śrīvidyā theology, a mantra is not merely a verbal description of the Goddess; it is the subtle sonic form (vācaka-śakti) through which her presence is directly encountered. The tradition is especially known for the Pañcadaśī (fifteen-syllable / three-kūṭa) and Ṣoḍaśī (sixteen-syllable) mantra systems. A public research archive explains the historical development, tripartite structure, and theological role of these mantra systems while respecting the boundary between academic philology and lineage-specific initiatory transmission (dīkṣā).\n6. Ritual, Meditation, and Liberation in Life (Jīvanmukti): Śrīvidyā encompasses external liturgy (bahiryāga), yantra worship (navāvaraṇa-pūjā), mantra recitation, visualization, and internalized contemplation (antaryāga). As shown in Anna A. Golovkova’s scholarship (“From Worldly Powers to Jīvanmukti”, 2019), the early Tripurasundarī textual corpus underwent a decisive philosophical transformation: earlier ritual frameworks emphasizing royal sovereignty and ritual efficacy were reinterpreted by medieval commentators toward nondual self-recognition and liberation during one’s lifetime (jīvanmukti).',
        bodyHi:
          '४. श्रीचक्र का धर्मशास्त्रीय एवं आनुष्ठानिक संदर्भ (बिन्दु, ९ त्रिकोण, कमल-दल एवं ९ आवरणों के विवरण हेतु ऊपर तालिका ०१ देखें): श्रीविद्या भाष्यों में श्रीचक्र के नौ आवरण (नवावरण) अविभाजित केंद्रीय बिन्दु से बाहरी भूपुर तक ब्रह्माण्ड के क्रमिक उन्मेष और साधना के अंतर्मुखी क्रम में विभेदित शक्तियों के पुनः परम चेतना में समावेशन का मानचित्र प्रस्तुत करते हैं। चूँकि विभिन्न कल्पसूत्रों में आवरण-देवताओं के विन्यास में सूक्ष्म अंतर मिलता है, इसलिए किसी सरलीकृत ज्यामितीय चित्र को संपूर्ण पूजा-विधान नहीं माना जाना चाहिए।\n५. मन्त्र एवं देवी का सूक्ष्म स्वरूप: श्रीविद्या धर्मशास्त्र में मन्त्र केवल देवी का शाब्दिक वर्णन नहीं है, अपितु वह सूक्ष्म नाद-स्वरूप है जिसके माध्यम से उनकी शक्ति और उपस्थिति का साक्षात्कार होता है। इसमें पञ्चदशी (१५-अक्षरी / त्रि-कूट) और षोडशी (१६-अक्षरी) मन्त्र-प्रणालियाँ प्रमुख हैं। सार्वजनिक शोध अभिलेखागार दीक्षा-गम्य गोपनीय निर्देशों की मर्यादा रखते हुए इन प्रणालियों के इतिहास, शब्दावली और दार्शनिक संदर्भ को स्पष्ट करता है।\n६. अनुष्ठान, ध्यान एवं जीवनमुक्ति (Jīvanmukti): श्रीविद्या में बाह्य पूजा (बहिर्याग), नवावरण अर्चन, मन्त्र-जप, भावना और अंतर्मुखी ध्यान (अंतर्याग) का समन्वय है। अन्ना ए. गोलोवकोवा (२०१९) के शोध के अनुसार, प्रारंभिक त्रिपुरसुन्दरी ग्रन्थों में जहाँ आनुष्ठानिक सामर्थ्य और ऐश्वर्य पर बल था, वहीं परवर्ती मध्यकालीन भाष्यकारों ने इसे अद्वैत आत्म-प्रत्यभिज्ञा और इसी जीवन में मुक्ति ("जीवनमुक्ति") की ओर दार्शनिक रूप से विकसित किया।'
      },
      {
        headingEn: '7. Primary Textual Sources · 8. Methodological Safeguards: What Śrīkula Should Not Be Reduced To',
        headingHi: '7. मूल ग्रंथीय स्रोत · 8. पद्धतिगत सावधानियाँ: श्रीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए',
        bodyEn:
          '7. Foundational Textual Sources for the Śrīvidyā Archive:\n(1) Vāmakeśvarīmata — An important early scripture central to the historical formation of the Tripurasundarī cult and Śrīcakra ritual.\n(2) Yoginīhṛdaya — A major philosophical and ritual Śrīvidyā Tantra (forming the latter part of the Nityāṣoḍaśikārṇava / Vāmakeśvarīmata tradition) that explores the threefold correspondence of cakra-saṅketa, mantra-saṅketa, and pūjā-saṅketa.\n(3) Nityāṣoḍaśikārṇava — A foundational Tantra associated with the sixteen Nityā goddesses and the early textual history of Śrīvidyā.\n(4) Paraśurāma Kalpasūtra — A concise, authoritative ritual manual (kalpasūtra) codifying Śrīvidyā liturgical procedure in specific lineages.\n(5) Lalitā Sahasranāma — The revered hymn of a thousand names of Lalitā from the Brahmāṇḍa Purāṇa, bridging Tantric theology, mantra symbolism, and devotional liturgy.\nGenre Caution: Because these works belong to distinct genres (early Tantras, philosophical commentaries, Kalpasūtras, and Purāṇic hymns), they should not be treated as a single homogeneous textbook.\n8. What Śrīkula Should Not Be Reduced To:\n(1) Not merely geometric diagrams: Śrīkula is a living theological and contemplative tradition, not a collection of abstract geometric figures.\n(2) Theological context of the Śrīcakra: The Śrīcakra is not decorative sacred geometry; its meaning is inseparable from mantra, āvaraṇa deities, and nondual cosmology.\n(3) Public and initiatory registers: Śrīvidyā is neither exclusively public devotionalism nor uniformly secretive; it spans public stotra recitation and esoteric dīkṣā lineages.\n(4) Lineage diversity: Different regional transmissions (across Tamil Nadu, Kerala, Karnataka, Andhra, Kashmir, and Varanasi) preserve distinct liturgical and philosophical emphases.\n(5) Beyond physical beauty or worldly wealth: Tripurasundarī is not a mere emblem of worldly luxury; her sovereignty and beauty express the fullness of supreme consciousness (cit-śakti).',
        bodyHi:
          '७. श्रीविद्या शोध संग्रह के आधारभूत मूल ग्रन्थ:\n(१) वामकेश्वरीमत (Vāmakeśvarīmata) — त्रिपुरसुन्दरी उपासना और श्रीचक्र विधान के ऐतिहासिक विकास से संबद्ध अत्यंत महत्त्वपूर्ण प्रारंभिक ग्रन्थ।\n(२) योगिनीहृदय (Yoginīhṛdaya) — एक प्रमुख दार्शनिक एवं आनुष्ठानिक श्रीविद्या तन्त्र जो चक्र-संकेत, मन्त्र-संकेत और पूजा-संकेत के त्रिविध रहस्य का गहन विवेचन करता है।\n(३) नित्याषोडशिकार्णव (Nityāṣoḍaśikārṇava) — सोलह नित्या देवियों और श्रीविद्या के प्रारंभिक ग्रंथीय इतिहास से संबद्ध आधारभूत आगम।\n(४) परशुराम कल्पसूत्र (Paraśurāma Kalpasūtra) — विशिष्ट परम्पराओं में श्रीविद्या की आनुष्ठानिक पद्धति को सूत्रबद्ध करने वाला प्रामाणिक कल्पसूत्र।\n(५) ललिता सहस्रनाम (Lalitā Sahasranāma) — ब्रह्माण्ड पुराण के अंतर्गत ललिता के एक हजार नामों का समादृत स्तोत्र, जो तांत्रिक धर्मशास्त्र, मन्त्र-प्रतीक और भक्ति को जोड़ता है।\n८. श्रीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए:\n(१) मात्र ज्यामितीय आकृतियाँ नहीं: श्रीकुल एक जीवंत धर्मशास्त्रीय और ध्यानात्मक परम्परा है, केवल ज्यामितीय आरेखों का संग्रह नहीं।\n(२) श्रीचक्र का धर्मशास्त्रीय संदर्भ: श्रीचक्र केवल सजावटी ज्यामिति नहीं है; इसका अर्थ मन्त्र, आवरण-देवताओं और अद्वैत दर्शन से अभिन्न है।\n(३) सार्वजनिक एवं दीक्षा-गम्य आयाम: श्रीविद्या न तो केवल सार्वजनिक भक्ति मात्र है और न ही सर्वत्र एकसमान रूप से गोपनीय; इसमें स्तोत्र-पाठ से लेकर गूढ़ दीक्षा-परम्पराएँ तक शामिल हैं।\n(४) आम्नाय एवं क्षेत्रीय विविधता: दक्षिण भारत, कश्मीर और काशी की विभिन्न परम्पराओं में पूजा-पद्धति और दार्शनिक व्याख्या की अपनी विशिष्टताएँ हैं।\n(५) केवल भौतिक सौन्दर्य या समृद्धि तक सीमित नहीं: त्रिपुरसुन्दरी को मात्र सांसारिक ऐश्वर्य के प्रतीक में सीमित नहीं किया जाना चाहिए; उनका सौन्दर्य परम चित्-शक्ति की पूर्णता का बोधक है।'
      }
    ],
    keyFindingsEn: [
      'Literal meaning of Śrīkula (श्रीकुल): The family, lineage, or tradition of Śrī — centered on Tripurasundarī (Lalitā, Rājarājeśvarī, Ṣoḍaśī, Tripurā) and the Śrīvidyā ("auspicious knowledge") tradition.',
      'Integrated ritual-theological triad: Unites the Goddess’s anthropomorphic form, subtle mantra (Pañcadaśī and Ṣoḍaśī systems), and the nine-enclosure (navāvaraṇa) Śrīcakra.',
      'Primary source register: Vāmakeśvarīmata, Yoginīhṛdaya, Nityāṣoḍaśikārṇava, Paraśurāma Kalpasūtra, and Lalitā Sahasranāma, studied alongside Brooks (1992), Golovkova (2019), and Karasiński (2025).',
      'Methodological safeguard: Neither the Śrīcakra nor Tripurasundarī should be reduced to decorative geometry or mere worldly prosperity; texts document a sophisticated nondual theology and movement toward jīvanmukti.'
    ],
    keyFindingsHi: [
      'श्रीकुल का शाब्दिक अर्थ: श्री का परिवार, वंश या परम्परा — जो त्रिपुरसुन्दरी (ललिता, राजराजेश्वरी, षोडशी, त्रिपुरा) और श्रीविद्या ("मंगलमयी प्रज्ञा") पर केंद्रित है।',
      'एकीकृत धर्मशास्त्रीय त्रयी: देवी के साकार विग्रह, सूक्ष्म मन्त्र (पञ्चदशी एवं षोडशी) और नौ आवरणों वाले श्रीचक्र (श्रीयन्त्र) का समन्वय।',
      'प्रमुख ग्रंथीय स्रोत: वामकेश्वरीमत, योगिनीहृदय, नित्याषोडशिकार्णव, परशुराम कल्पसूत्र और ललिता सहस्रनाम, तथा ब्रुक्स (१९९२), गोलोवकोवा (२०१९) और करासिंस्की (२०२५) के अकादमिक शोध।',
      'पद्धतिगत सावधानी: श्रीचक्र को केवल सजावटी ज्यामिति या त्रिपुरसुन्दरी को केवल भौतिक समृद्धि का प्रतीक नहीं माना जाना चाहिए; इसमें गहन अद्वैत दर्शन और जीवनमुक्ति की साधना निहित है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & Transliteration', labelHi: 'संस्कृत एवं लिप्यंतरण', valueEn: 'श्रीकुल · Śrīkula (Śrīvidyā)', valueHi: 'श्रीकुल · Śrīkula (श्रीविद्या)' },
      { labelEn: 'Literal Meaning', labelHi: 'शाब्दिक अर्थ', valueEn: 'The family, lineage, or tradition of Śrī', valueHi: 'श्री का परिवार, वंश या परम्परा' },
      { labelEn: 'Primary Textual Sources', labelHi: 'मूल ग्रंथीय स्रोत', valueEn: 'Vāmakeśvarīmata · Yoginīhṛdaya · Nityāṣoḍaśikārṇava · Paraśurāma Kalpasūtra · Lalitā Sahasranāma', valueHi: 'वामकेश्वरीमत · योगिनीहृदय · नित्याषोडशिकार्णव · परशुराम कल्पसूत्र · ललिता सहस्रनाम' },
      { labelEn: 'Key Modern Scholarship', labelHi: 'प्रमुख आधुनिक शोध', valueEn: 'Douglas Renfrew Brooks (1992) · Anna A. Golovkova (2019) · Maciej Karasiński (2025)', valueHi: 'डगलस रेनफ्रू ब्रुक्स (१९९२) · अन्ना ए. गोलोवकोवा (२०१९) · माचिये करासिंस्की (२०२५)' }
    ],
    primarySourcesEn: 'Vāmakeśvarīmata · Yoginīhṛdaya · Nityāṣoḍaśikārṇava · Paraśurāma Kalpasūtra · Lalitā Sahasranāma · Brooks (1992) · Golovkova (2019) · Karasiński (2025)',
    primarySourcesHi: 'वामकेश्वरीमत · योगिनीहृदय · नित्याषोडशिकार्णव · परशुराम कल्पसूत्र · ललिता सहस्रनाम · ब्रुक्स (१९९२) · गोलोवकोवा (२०१९) · करासिंस्की (२०२५)',
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
    titleEn: 'Navadurgā — The Nine Forms in Navarātri, Detailed Profiles (26–34) & Wider Goddess Tradition',
    titleHi: 'नवदुर्गा (Navadurgā) — नवरात्रि के नौ स्वरूप, विस्तृत परिचय (२६–३४) एवं व्यापक देवी परम्परा',
    subtitleEn: 'Sanskrit: नवदुर्गा · Transliteration: Navadurgā · The Nine Forms in Navarātri (Devī Kavaca), Part VIII Detailed Profiles (Śailaputrī to Siddhidātrī), Part IX Comparative Studies & Part X Textual Sources',
    subtitleHi: 'संस्कृत: नवदुर्गा · लिप्यंतरण: Navadurgā · देवी कवच में वर्णित नौ स्वरूप, भाग VIII (शैलपुत्री से सिद्धिदात्री का विस्तृत विश्लेषण), भाग IX (महाविद्या व क्षेत्रीय विविधता) एवं भाग X (शास्त्रीय स्रोत)',
    sanskritEpigraph: '॥ प्रथमं शैलपुत्री च द्वितीयं ब्रह्मचारिणी। तृतीयं चन्द्रघण्टेति कूष्माण्डेति चतुर्थकम् ॥ पञ्चमं स्कन्दमातेति षष्ठं कात्यायनीति च। सप्तमं कालरात्रीति महागौरीति चाष्टमम् ॥ नवमं सिद्धिदात्री च नवदुर्गाः प्रकीर्तिताः ॥',
    epigraphTranslationEn: '"First is Śailaputrī, second Brahmacāriṇī, third Candraghaṇṭā, fourth Kūṣmāṇḍā, fifth Skandamātā, sixth Kātyāyanī, seventh Kālarātrī, eighth Mahāgaurī, and ninth Siddhidātrī—thus the nine Durgās are proclaimed." (Devī Kavaca)',
    epigraphTranslationHi: '"प्रथम शैलपुत्री, द्वितीय ब्रह्मचारिणी, तृतीय चन्द्रघण्टा, चतुर्थ कूष्माण्डा, पञ्चम स्कन्दमाता, षष्ठ कात्यायनी, सप्तम कालरात्रि, अष्टम महागौरी और नवम सिद्धिदात्री—ये नवदुर्गा कही गई हैं।" (देवी कवच)',
    evidenceBadgeEn: 'DEVI KAVACA & PURĀṆIC ARCHIVE · PARTS VIII–X COMPLETE DOSSIER',
    evidenceBadgeHi: 'देवी कवच एवं पौराणिक अभिलेखागार · भाग VIII–X पूर्ण शोध-प्रबंध',
    accentColor: '#F59E0B',
    summaryEn:
      'The Navadurgā are commonly worshipped in sequence over the nine nights of Navarātri. The familiar order—beginning with Śailaputrī and concluding with Siddhidātrī—is documented in the Devī Kavaca, a protective hymn traditionally associated with the Devī Māhātmya. While the popular practice of assigning one Goddess to each day is widespread, precise observances, colors, offerings, and local narratives vary by region and community, and textual history also preserves other ninefold Durgā groupings in works such as the Śiva Purāṇa and temple iconography.',
    summaryHi:
      'नवरात्रि की नौ रात्रियों में नवदुर्गा की क्रमिक उपासना की जाती है। शैलपुत्री से आरंभ होकर सिद्धिदात्री पर पूर्ण होने वाला यह प्रसिद्ध क्रम "देवी कवच" (जो पारंपरिक रूप से देवी माहात्म्य / दुर्गा सप्तशती से संबद्ध रक्षा-स्तोत्र है) में प्रलेखित है। प्रतिदिन एक देवी की आराधना की परंपरा अत्यंत व्यापक है, यद्यपि इसके विशिष्ट नियम, रंग, नैवेद्य और स्थानीय कथाएँ क्षेत्र व समुदाय के अनुसार भिन्न होती हैं तथा शिव पुराण और मंदिर प्रतिमाशास्त्र में नौ दुर्गाओं की अन्य वैकल्पिक सूचियाँ भी मिलती हैं।',
    sections: [
      {
        headingEn: '25. The Nine Forms in Navarātri & An Important Distinction: Navadurgā Is Not the Only Ninefold Grouping',
        headingHi: '25. नवरात्रि के नौ स्वरूप एवं एक महत्त्वपूर्ण शास्त्रीय भेद: नवदुर्गा की अन्य सूचियाँ',
        bodyEn:
          '(1) The Nine Forms in Navarātri: The Navadurgā are commonly worshipped in sequence over the nine nights of Navarātri. The familiar order is documented in the Devī Kavaca, a protective hymn traditionally associated with the Devī Māhātmya (see Table 1 above for the complete day-by-day sequence from Day 1 Śailaputrī to Day 9 Siddhidātrī). The popular practice of assigning one Goddess to each day is widespread, but the precise observances, colors, offerings, and local narratives vary by region and community. (2) An Important Distinction — Navadurgā Is Not the Only Ninefold Grouping: For a serious Tantric archive, this distinction deserves its own research note. The familiar Navadurgā list begins with Śailaputrī and ends with Siddhidātrī. However, some textual and ritual traditions use other lists of nine forms of Durgā. Scholarly discussions of major Hindu Goddesses, for example, document a different ninefold group in connection with the Śiva Purāṇa, Agni Purāṇa, and temple iconography. (3) Two Categories to Distinguish: Accordingly, this archive distinguishes between (a) Navadurgā of Navarātri—the nine familiar forms worshipped in the sequence from Śailaputrī to Siddhidātrī; and (b) Other Ninefold Durgā Groupings—alternative lists documented in particular scriptures, temple traditions, or ritual systems. The name Navadurgā should not automatically be assumed to refer to the same list in every historical source.',
        bodyHi:
          '(१) नवरात्रि में नौ स्वरूप: नवरात्रि की नौ रात्रियों में नवदुर्गा की क्रमिक पूजा की जाती है। यह परिचित क्रम "देवी कवच" में प्रलेखित है (प्रथम दिवस शैलपुत्री से नवम दिवस सिद्धिदात्री तक का पूर्ण विवरण ऊपर तालिका १ में दिया गया है)। (२) एक महत्त्वपूर्ण शास्त्रीय भेद: एक गंभीर तांत्रिक अभिलेखागार के लिए यह अंतर अत्यंत महत्त्वपूर्ण है। प्रसिद्ध नवदुर्गा सूची शैलपुत्री से प्रारंभ होकर सिद्धिदात्री पर समाप्त होती है, किंतु कुछ ग्रंथीय और आनुष्ठानिक परम्पराओं में दुर्गा के नौ रूपों की अन्य सूचियाँ भी मिलती हैं—उदाहरणार्थ शिव पुराण, अग्नि पुराण और मंदिर प्रतिमाशास्त्र में वर्णित नवदुर्गा समूह। (३) दो स्पष्ट श्रेणियाँ: अतः इस वेबसाइट पर (क) "नवरात्रि की नवदुर्गा" (शैलपुत्री से सिद्धिदात्री तक के नौ प्रसिद्ध रूप) और (ख) "अन्य नव-दुर्गा समूह" (विशेष शास्त्रों, मंदिर परम्पराओं या तांत्रिक पद्धतियों में वर्णित वैकल्पिक सूचियाँ) के बीच स्पष्ट भेद रखा गया है।'
      },
      {
        headingEn: 'Part VIII (26) · Śailaputrī — शैलपुत्री (First Day of Navarātri)',
        headingHi: 'भाग VIII (२६) · शैलपुत्री — Śailaputrī (नवरात्रि का प्रथम दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: Daughter of the Mountain · Navarātri day: First day · Associated deity: Pārvatī in her mountain-born form · Traditional mount: Bull, usually Nandī. (2) Identity and Mythology: Śailaputrī is the first of the nine Durgās in the familiar Navarātri sequence. Her name combines śaila, meaning mountain, and putrī, meaning daughter. In Hindu mythology, she is identified with Pārvatī, the daughter of Himālaya, the mountain deity. Her identity is also connected with the story of Satī, who is reborn as Pārvatī after her earlier life ends. Her position at the beginning of Navarātri connects her with themes of beginnings, grounding, and the origin of the Goddess’s earthly manifestation. (3) Iconography: Śailaputrī is commonly depicted with two arms, riding a bull, holding a trident in one hand and a lotus in the other, and wearing a crescent moon on her forehead. (4) Religious Significance: In devotional interpretations, she is associated with stability, determination, and the foundation of spiritual practice. Some modern explanations also connect her with the first stage of spiritual discipline, though such interpretations should be presented as interpretive themes rather than universal scriptural curriculum. (5) Research Topics: (a) Textual references to Śailaputrī in the Devī Kavaca and Purāṇic literature; (b) The mythological relationship between Satī, Pārvatī, and Śailaputrī; (c) Regional temple traditions associated with Śailaputrī (including Kāśī); (d) Iconographic variations in paintings and sculptures; (e) Comparison with other mountain-associated forms of the Goddess (such as Haimavatī and Girijā).',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: पर्वत की पुत्री (शैल + पुत्री) · नवरात्रि दिवस: प्रथम दिवस · संबद्ध स्वरूप: पर्वतराज हिमालय की पुत्री रूप में पार्वती · पारंपरिक वाहन: वृषभ (नन्दी)। (२) स्वरूप एवं पौराणिक कथा: प्रसिद्ध नवरात्रि क्रम में शैलपुत्री प्रथम दुर्गा हैं। हिन्दू पुराणों में वे पर्वतराज हिमालय की पुत्री पार्वती हैं, जिनका पूर्वजन्म दक्ष-पुत्री सती के रूप में हुआ था। नवरात्रि के आरंभ में उनका स्थान आध्यात्मिक शुरुआत, आधार और पृथ्वी पर देवी के प्राकट्य का प्रतीक है। (३) प्रतिमाशास्त्र: शैलपुत्री को प्रायः द्विभुजा रूप में वृषभ पर आरूढ़, एक हाथ में त्रिशूल और दूसरे में कमल धारण किए तथा मस्तक पर अर्धचन्द्र सुशोभित किए हुए दर्शाया जाता है। (४) धार्मिक महत्त्व: भक्ति परम्परा में वे स्थिरता, दृढ़ संकल्प और साधना की आधारशिला से जुड़ी हैं। (५) शोध विषय: (क) देवी कवच एवं पुराणों में शैलपुत्री के संदर्भ; (ख) सती, पार्वती और शैलपुत्री का पौराणिक संबंध; (ग) शैलपुत्री के क्षेत्रीय मंदिर (विशेषतः वाराणसी); (घ) चित्रकला और मूर्तिकला में प्रतिमाशास्त्रीय विविधताएँ; (ङ) गिरिजा और हैमवती जैसे अन्य पर्वत-संबद्ध देवी रूपों से तुलना।'
      },
      {
        headingEn: 'Part VIII (27) · Brahmacāriṇī — ब्रह्मचारिणी (Second Day of Navarātri)',
        headingHi: 'भाग VIII (२७) · ब्रह्मचारिणी — Brahmacāriṇī (नवरात्रि का द्वितीय दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: The Goddess who practices brahmacarya (ascetic discipline, spiritual study, and devotion to the highest reality) · Navarātri day: Second day · Traditional attributes: Rosary (akṣamālā) and water pot (kamaṇḍalu). (2) Identity and Mythology: Brahmacāriṇī represents Pārvatī in her ascetic form, undertaking severe penance (tapas) in order to attain Śiva. Her story emphasizes discipline, devotion, and endurance across long periods of austerity in the wilderness. (3) Iconography: Unlike many martial forms of Durgā, Brahmacāriṇī is usually depicted walking or standing, dressed simply in white, holding a rosary (akṣamālā) in her right hand and a water pot (kamaṇḍalu) in her left hand rather than weapons. (4) Religious Significance: She is associated with perseverance, self-restraint, spiritual discipline, and single-minded commitment. In the sequence of Navarātri, she represents the stage in which initial grounding and intention (Śailaputrī) become sustained spiritual practice (tapasyā). (5) Research Topics: (a) Purāṇic and poetic accounts of Pārvatī’s asceticism (such as the Śiva Purāṇa and Kālidāsa’s Kumārasambhava); (b) The meaning of brahmacarya in Goddess traditions; (c) Iconography of the rosary (akṣamālā) and water pot (kamaṇḍalu); (d) Devotional practices on the second day of Navarātri; (e) Comparison between ascetic and martial forms of Durgā.',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: ब्रह्मचर्य (तपस्या, स्वाध्याय और परम तत्त्व में निष्ठा) का आचरण करने वाली देवी · नवरात्रि दिवस: द्वितीय दिवस · पारंपरिक प्रतीक: अक्षमाला (जपमाला) एवं कमण्डलु। (२) स्वरूप एवं पौराणिक कथा: ब्रह्मचारिणी भगवती पार्वती के उस तपस्विनी रूप को दर्शाती हैं जिन्होंने भगवान् शिव को प्राप्त करने के लिए कठोर तपस्या (तप) की थी। उनकी कथा अनुशासन, भक्ति और धैर्य पर बल देती है। (३) प्रतिमाशास्त्र: दुर्गा के युद्ध-सज्जित रूपों से भिन्न, ब्रह्मचारिणी को प्रायः श्वेत वस्त्र धारण किए, नंगे पाँव चलते या खड़े हुए, अस्त्र-शस्त्र के स्थान पर दाएँ हाथ में अक्षमाला और बाएँ हाथ में कमण्डलु लिए दर्शाया जाता है। (४) धार्मिक महत्त्व: वे धैर्य, आत्म-संयम, आध्यात्मिक अनुशासन और एकनिष्ठ संकल्प की प्रतीक हैं। नवरात्रि के क्रम में वे उस अवस्था को दर्शाती हैं जहाँ प्रारंभिक संकल्प (शैलपुत्री) निरंतर साधना में परिणत होता है। (५) शोध विषय: (क) शिव पुराण और कुमारसम्भवम् में पार्वती की तपस्या का वर्णन; (ख) शाक्त परम्परा में ब्रह्मचर्य का अर्थ; (ग) अक्षमाला और कमण्डलु का प्रतिमाशास्त्र; (घ) नवरात्रि के दूसरे दिन की उपासना; (ङ) देवी के तपस्विनी और योद्धा रूपों की तुलना।'
      },
      {
        headingEn: 'Part VIII (28) · Candraghaṇṭā — चन्द्रघण्टा (Third Day of Navarātri)',
        headingHi: 'भाग VIII (२८) · चन्द्रघण्टा — Candraghaṇṭā (नवरात्रि का तृतीय दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: The Goddess whose crescent moon resembles a bell · Navarātri day: Third day · Traditional mount: Tiger or lion. (2) Identity and Iconography: Candraghaṇṭā is a warrior form of the Goddess. Her name refers to the crescent moon (candra) shaped like a bell (ghaṇṭā) worn on her forehead. She is commonly depicted with multiple (often ten) arms, holding weapons such as trident, mace, sword, bow, arrow, and lotus, along with protective and blessing gestures, while riding a tiger or lion. (3) Mythological and Theological Significance: Candraghaṇṭā represents courage, readiness for battle, and the protection of devotees. The sound of her bell is traditionally said to drive away hostile and demonic forces. In the Navarātri sequence, she marks a transition from quiet asceticism (Brahmacāriṇī) to active protective power. (4) Research Topics: (a) Meaning and origin of the candraghaṇṭā motif; (b) Iconography of the multi-armed warrior Goddess; (c) Symbolism of the bell and sacred sound (nāda) in Hindu ritual and mythology; (d) Regional traditions of worship on the third day of Navarātri; (e) Relationship between Candraghaṇṭā and other martial forms of Durgā.',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: जिनके मस्तक पर घण्टे के आकार का अर्धचन्द्र सुशोभित है · नवरात्रि दिवस: तृतीय दिवस · पारंपरिक वाहन: बाघ या सिंह। (२) स्वरूप एवं प्रतिमाशास्त्र: चन्द्रघण्टा भगवती का योद्धा स्वरूप हैं। उनका नाम मस्तक पर स्थित घण्टे के समान अर्धचन्द्र से जुड़ा है। उन्हें प्रायः दशभुजा रूप में बाघ या सिंह पर आरूढ़, विभिन्न अस्त्र-शस्त्रों, कमल और अभय-वरद मुद्राओं से युक्त दर्शाया जाता है। (३) पौराणिक एवं दार्शनिक महत्त्व: चन्द्रघण्टा साहस, युद्ध के लिए तत्परता और भक्तों की रक्षा का प्रतिनिधित्व करती हैं। मान्यता है कि उनके घण्टे की प्रचण्ड ध्वनि से आसुरी और नकारात्मक शक्तियाँ नष्ट हो जाती हैं। नवरात्रि क्रम में वे शांत तपस्या (ब्रह्मचारिणी) से सक्रिय रक्षक शक्ति की ओर संक्रमण को दर्शाती हैं। (४) शोध विषय: (क) चन्द्रघण्टा प्रतीक का मूल और अर्थ; (ख) बहुभुजी योद्धा देवी का प्रतिमाशास्त्र; (ग) हिन्दू अनुष्ठान और मिथक में घण्टा-ध्वनि (नाद) का प्रतीक; (घ) तृतीय दिवस की क्षेत्रीय पूजा परम्पराएँ; (ङ) दुर्गा के अन्य सामरिक रूपों से चन्द्रघण्टा का संबंध।'
      },
      {
        headingEn: 'Part VIII (29) · Kūṣmāṇḍā — कूष्माण्डा (Fourth Day of Navarātri)',
        headingHi: 'भाग VIII (२९) · कूष्माण्डा — Kūṣmāṇḍā (नवरात्रि का चतुर्थ दिवस)',
        bodyEn:
          '(1) Core Attributes: Navarātri day: Fourth day · Traditional mount: Lion · Common association: Creative radiance and cosmic manifestation. (2) Identity and Mythology: Kūṣmāṇḍā is widely associated in devotional literature with the creation or illumination of the universe through her gentle smile. In popular explanations, her name is interpreted through components referring to cosmic warmth, vitality (ūṣmā), and the cosmic egg (aṇḍa / brahmāṇḍa). She is also described as dwelling within the innermost radiance of the sun. (3) Iconography: She is commonly depicted with eight arms (aṣṭabhujā), riding a lion, holding weapons (bow, arrow, discus, mace), a lotus, a rosary, and vessels of nectar or plenitude, and surrounded by a bright, solar aura. (4) Philosophical Interpretation: Kūṣmāṇḍā highlights the creative and sustaining dimensions of Goddess theology. A scholarly archive should note both the popular devotional etymologies of her name and the broader context of Hindu cosmological thought. (5) Research Topics: (a) Etymological interpretations of the name Kūṣmāṇḍā; (b) Solar and cosmic symbolism in her iconography; (c) Eight-armed representations in devotional art; (d) Ritual offerings (such as kūṣmāṇḍa / ash gourd in regional traditions) and prayers associated with the fourth day of Navarātri; (e) Comparison between Goddess-centered creation narratives and other Hindu cosmologies.',
        bodyHi:
          '(१) मुख्य परिचय: नवरात्रि दिवस: चतुर्थ दिवस · पारंपरिक वाहन: सिंह · मुख्य संबंध: सृजनात्मक तेज और ब्रह्माण्डीय प्राकट्य। (२) स्वरूप एवं पौराणिक कथा: भक्ति साहित्य में कूष्माण्डा को अपनी मंद मुस्कान से ब्रह्माण्ड की सृष्टि और प्रकाश उत्पन्न करने वाली देवी माना जाता है। लोकप्रिय व्युत्पत्ति में उनके नाम को सूक्ष्म ताप/प्राण-ऊर्जा (ऊष्मा) और ब्रह्माण्डीय अण्ड (ब्रह्माण्ड) से जोड़ा जाता है तथा उन्हें सूर्य-मण्डल के भीतर निवास करने वाली तेजस्वी शक्ति कहा गया है। (३) प्रतिमाशास्त्र: उन्हें प्रायः अष्टभुजा देवी के रूप में सिंह पर आरूढ़, कमण्डलु, धनुष, बाण, कमल, अमृत-कलश, चक्र, गदा और जपमाला धारण किए हुए सूर्य-समान प्रभामण्डल के साथ चित्रित किया जाता है। (४) दार्शनिक व्याख्या: कूष्माण्डा देवी-तत्त्वज्ञान के सृजनात्मक और पोषणकारी आयाम को उजागर करती हैं। एक अकादमिक अभिलेखागार में उनके नाम की भक्तिपरक व्याख्याओं और व्यापक हिन्दू सृष्टि-दर्शन दोनों का संतुलित उल्लेख होना चाहिए। (५) शोध विषय: (क) कूष्माण्डा नाम की व्युत्पत्ति-परक व्याख्याएँ; (ख) सौर और ब्रह्माण्डीय प्रतीक-विधान; (ग) अष्टभुजा प्रतिमाशास्त्र; (घ) चतुर्थ दिवस की पूजा और क्षेत्रीय परम्पराएँ; (ङ) शाक्त सृष्टि-कथाओं और अन्य पौराणिक सृष्टि-वर्णनों की तुलना।'
      },
      {
        headingEn: 'Part VIII (30) · Skandamātā — स्कन्दमाता (Fifth Day of Navarātri)',
        headingHi: 'भाग VIII (३०) · स्कन्दमाता — Skandamātā (नवरात्रि का पञ्चम दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: Mother of Skanda · Navarātri day: Fifth day · Associated child deity: Skanda (Kārttikeya / Kumāra / Murugan). (2) Identity and Mythology: Skandamātā is the maternal form of the Goddess associated with Skanda (also known as Kārttikeya), the commander of the divine army who defeated the demon Tārakāsura. Through this identity, she connects motherhood with divine protection and cosmic order. (3) Iconography: She is commonly shown seated on a lotus (padmāsanā) or riding a lion, with four arms, holding the child Skanda (often depicted with six faces, ṣaṇmukha) in her lap while holding lotus flowers and displaying blessing gestures. (4) Religious Significance: Skandamātā emphasizes motherhood, nurturing, protection, and auspiciousness. Her presence in the Navarātri sequence shows that the Goddess is understood not only as an ascetic or warrior, but also as a nurturing mother whose wisdom and power act through her divine child. (5) Research Topics: (a) Mythology of Skanda/Kārttikeya and Pārvatī in Purāṇic sources; (b) Maternal imagery in Śākta devotion; (c) Iconography of Skandamātā with the child Skanda; (d) Worship practices on the fifth day of Navarātri; (e) Comparison with other mother-Goddess traditions in South Asia (including Mātṛkā iconography).',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: भगवान् स्कन्द (कार्तिकेय) की माता · नवरात्रि दिवस: पञ्चम दिवस · संबद्ध बाल-देवता: स्कन्द (कार्तिकेय / कुमार / मुरुगन)। (२) स्वरूप एवं पौराणिक कथा: स्कन्दमाता भगवती का वात्सल्यमयी मातृ-स्वरूप हैं, जो देवसेनापति भगवान् स्कन्द (जिन्होंने तारकासुर का वध किया) की जननी हैं। इस स्वरूप में मातृत्व का कोमल भाव और धर्म-रक्षा का शौर्य एक साथ जुड़े हैं। (३) प्रतिमाशास्त्र: उन्हें प्रायः चतुर्भुजा रूप में कमल के आसन पर विराजमान (पद्मासना) या सिंह पर आरूढ़ दर्शाया जाता है; उनकी गोद में बालक षडानन स्कन्द बैठे होते हैं और अन्य हाथों में कमल पुष्प तथा वरद/अभय मुद्रा होती है। (४) धार्मिक महत्त्व: स्कन्दमाता मातृत्व, पोषण, संरक्षण और मांगल्य का प्रतीक हैं। नवरात्रि क्रम में उनकी उपस्थिति दिखाती है कि देवी केवल तपस्विनी या योद्धा ही नहीं, अपितु स्नेहमयी जगज्जननी भी हैं। (५) शोध विषय: (क) पुराणों में स्कन्द/कार्तिकेय और पार्वती की कथाएँ; (ख) शाक्त भक्ति में मातृ-भाव; (ग) बालक स्कन्द के साथ स्कन्दमाता का प्रतिमाशास्त्र; (घ) नवरात्रि के पाँचवें दिन की उपासना; (ङ) दक्षिण एशिया की अन्य मातृ-देवी परम्पराओं से तुलना।'
      },
      {
        headingEn: 'Part VIII (31) · Kātyāyanī — कात्यायनी (Sixth Day of Navarātri)',
        headingHi: 'भाग VIII (३१) · कात्यायनी — Kātyāyanī (नवरात्रि का षष्ठ दिवस)',
        bodyEn:
          '(1) Core Attributes: Navarātri day: Sixth day · Traditional mount: Lion · Central themes: Warrior power and protection. (2) Identity and Mythology: Kātyāyanī is a prominent warrior form of the Goddess. In Purāṇic narratives, she is associated with the sage Kātyāyana, in whose hermitage the Goddess manifested from the combined brilliance (tejas) of the gods to defeat Mahiṣāsura and demonic forces. The name Kātyāyanī also appears in early Vedic liturgy (Taittirīya Āraṇyaka 10.1.7) and in other Hindu contexts, including stories connected with the gopīs of Vraja in the Bhāgavata Purāṇa (10.22); these distinct textual contexts should be distinguished by source. (3) Iconography: She is typically shown riding a lion, with four or more arms holding a sword and lotus, displaying abhaya and varada mudrās, and projecting a formidable, protective presence. (4) Religious Significance: Kātyāyanī represents the Goddess as a decisive defender of cosmic order. In devotional practice, she is associated with courage, righteous action, and the removal of obstacles. (5) Research Topics: (a) Stories connecting the Goddess with the sage Kātyāyana; (b) Relationship between Kātyāyanī and Mahiṣāsuramardinī; (c) References to Kātyāyanī in Purāṇic, Vedic (Taittirīya Āraṇyaka), and Vaiṣṇava (Bhāgavata Purāṇa) texts; (d) Iconography of lion-mounted warrior Goddesses; (e) Regional temples and festivals dedicated to Kātyāyanī.',
        bodyHi:
          '(१) मुख्य परिचय: नवरात्रि दिवस: षष्ठ दिवस · पारंपरिक वाहन: सिंह · मुख्य भाव: योद्धा शक्ति, धर्म-रक्षा और आसुरी शक्तियों का विनाश। (२) स्वरूप एवं पौराणिक कथा: कात्यायनी भगवती का प्रमुख योद्धा स्वरूप हैं। पौराणिक आख्यानों के अनुसार महर्षि कात्यायन की तपस्या से प्रसन्न होकर और महिषासुर के वध हेतु देवताओं के सम्मिलित तेज से वे कात्यायन आश्रम में प्रकट हुईं। "कात्यायनी" नाम वैदिक साहित्य (तैत्तिरीय आरण्यक १०.१.७) और भागवत महापुराण (१०.२२ में ब्रज की गोपियों के कात्यायनी-व्रत) में भी आता है—शोध में इन विभिन्न ग्रंथीय संदर्भों को उनके स्रोत के अनुसार स्पष्ट रखा जाना चाहिए। (३) प्रतिमाशास्त्र: उन्हें सिंह पर आरूढ़, चतुर्भुजा रूप में खड्ग और कमल धारण किए तथा अभय व वरद मुद्रा से युक्त ओजस्वी रक्षिका के रूप में दर्शाया जाता है। (४) धार्मिक महत्त्व: कात्यायनी धर्म और ब्रह्माण्डीय व्यवस्था की निर्णायक रक्षिका हैं तथा साहस और बाधा-निवारण से संबद्ध हैं। (५) शोध विषय: (क) महर्षि कात्यायन और देवी के प्राकट्य की कथाएँ; (ख) कात्यायनी और महिषासुरमर्दिनी का संबंध; (ग) तैत्तिरीय आरण्यक, शाक्त पुराण और भागवत पुराण में कात्यायनी के संदर्भ; (घ) सिंहवाहिनी योद्धा देवियों का प्रतिमाशास्त्र; (ङ) कात्यायनी के प्रमुख क्षेत्रीय मंदिर और उत्सव।'
      },
      {
        headingEn: 'Part VIII (32) · Kālarātrī — कालरात्रि (Seventh Day of Navarātri)',
        headingHi: 'भाग VIII (३२) · कालरात्रि — Kālarātrī (नवरात्रि का सप्तम दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: The Dark Night or Night of Time · Navarātri day: Seventh day · Traditional mount: Donkey (gardabha). (2) Identity and Mythology: Kālarātrī is the fiercest of the nine forms in the standard Navadurgā sequence. Her name combines kāla (time, death, or darkness) and rātri (night), and she is associated with the destruction of fear, ignorance, and demonic forces. (3) Iconography: She is often depicted with a dark complexion, unbound disheveled hair, a necklace gleaming like lightning, and a formidable expression, riding a donkey (gardabha) and holding an iron hook/cleaver and torch alongside protective gestures (abhaya and varada). Her imagery contrasts sharply with the serene, luminous form of Mahāgaurī on the following day. (4) Religious Significance: Despite her terrifying appearance, Kālarātrī is understood by devotees as protective and auspicious—hence her traditional title Śubhaṅkarī ("Doer of Good"). She represents the aspect of the Goddess that confronts danger, darkness, and fear directly. For a Tantric research archive, Kālarātrī is an important point of connection with broader Śākta themes of night, time, dissolution, and fierce protection, though she should not be confused without explanation with the Twelve Kālīs of the Kashmirian Krama tradition or independent Kālīkula lineages. (5) Research Topics: (a) Meaning of kālarātrī in Purāṇic and Tantric literature (including Devī Māhātmya 1.75); (b) Iconography of the donkey mount and fierce attributes; (c) Comparison between Kālarātrī and Kālī; (d) Theological significance of terrifying protective forms (Śubhaṅkarī); (e) Worship of Kālarātrī on the seventh night (Saptamī) of Navarātri.',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: महाकाल की रात्रि या गहन अंधकारमयी रात्रि · नवरात्रि दिवस: सप्तम दिवस · पारंपरिक वाहन: गर्दभ (गधा)। (२) स्वरूप एवं पौराणिक कथा: मानक नवदुर्गा क्रम में कालरात्रि सबसे उग्र स्वरूप हैं। उनका नाम "काल" (समय, मृत्यु या कृष्ण वर्ण) और "रात्रि" से मिलकर बना है तथा वे भय, अज्ञान और आसुरी शक्तियों के विनाश से संबद्ध हैं। (३) प्रतिमाशास्त्र: उन्हें घने अंधकार के समान कृष्ण वर्ण, बिखरे हुए केश, विद्युत के समान चमकती माला और उग्र मुद्रा के साथ गर्दभ पर आरूढ़ तथा लोहे का काँटा/खड्ग, वज्र और अभय-वरद मुद्रा धारण किए दर्शाया जाता है। उनका यह रूप अगले दिन पूजित शांत और गौरवर्णा महागौरी के साथ गहरा पूरक कंट्रास्ट बनाता है। (४) धार्मिक एवं तांत्रिक महत्त्व: बाह्य रूप से भयानक दिखने पर भी भक्तों के लिए वे परम कल्याणकारी हैं, इसलिए उन्हें "शुभंकरी" कहा जाता है। तांत्रिक शोध की दृष्टि से कालरात्रि रात्रि, काल और प्रलय की शक्ति से जुड़ी हैं, किंतु उन्हें बिना स्पष्ट प्रमाण के कश्मीरी क्रम परम्परा की "द्वादश काली" के साथ मिलाया नहीं जाना चाहिए। (५) शोध विषय: (क) पुराणों और देवी माहात्म्य (१.७५) में कालरात्रि का अर्थ; (ख) गर्दभ वाहन और उग्र प्रतीकों का प्रतिमाशास्त्र; (ग) कालरात्रि और काली की तुलना; (घ) उग्र रक्षक रूपों (शुभंकरी) का धर्मशास्त्र; (ङ) सप्तमी रात्रि की पूजा विधि।'
      },
      {
        headingEn: 'Part VIII (33) · Mahāgaurī — महागौरी (Eighth Day of Navarātri)',
        headingHi: 'भाग VIII (३३) · महागौरी — Mahāgaurī (नवरात्रि का अष्टम दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: The Great Radiant or Fair One · Navarātri day: Eighth day (Mahāṣṭamī) · Traditional mount: Bull (vṛṣabha). (2) Identity and Mythology: Mahāgaurī is associated with purity, serenity, radiance, and auspiciousness. Her name combines mahā (great) and gaurī (bright, fair, or radiant). In mythological accounts, her story is often linked to Pārvatī’s intense austerity and her subsequent restoration to a luminous, purified form when bathed in the waters of the celestial Gaṅgā by Śiva. (3) Iconography: She is commonly depicted with a bright white complexion and white or pale clothing (śvetāmbaradharā), a calm expression, holding a trident (triśūla) and small drum (ḍamaru) while displaying blessing and fearless gestures, and riding a white bull. (4) Religious Significance: Positioned immediately after Kālarātrī, Mahāgaurī creates a striking contrast within the Navarātri sequence: the seventh night confronts fear and darkness, while the eighth night emphasizes peace, purity, auspiciousness, and grace. (5) Research Topics: (a) Mythological accounts of Gaurī and Mahāgaurī in the Śiva and Skanda Purāṇas; (b) Symbolism of light, purity, and white garments in Goddess iconography; (c) The pairing of Kālarātrī (Day 7) and Mahāgaurī (Day 8) in the Navarātri sequence; (d) Worship practices on Mahāṣṭamī (the eighth day of Navarātri); (e) Comparison with Śailaputrī, who also rides a bull and holds a trident.',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: परम उज्ज्वल, गौर एवं तेजोमयी देवी (महा + गौरी) · नवरात्रि दिवस: अष्टम दिवस (महाष्टमी) · पारंपरिक वाहन: श्वेत वृषभ। (२) स्वरूप एवं पौराणिक कथा: महागौरी पवित्रता, प्रशांति, आभा और मांगल्य से जुड़ी हैं। पौराणिक कथाओं में उनका संबंध पार्वती की कठोर तपस्या और तत्पश्चात् भगवान् शिव द्वारा गंगाजल से अभिषेक किए जाने पर पुनः प्राप्त दिव्य गौर-कांति से जोड़ा जाता है। (३) प्रतिमाशास्त्र: उन्हें श्वेत वर्ण एवं श्वेत वस्त्रों (श्वेताम्बरधरा) से युक्त, शांत मुखमण्डल वाली, चतुर्भुजा रूप में त्रिशूल, डमरू तथा अभय-वरद मुद्रा धारण किए श्वेत वृषभ पर आरूढ़ दर्शाया जाता है। (४) धार्मिक महत्त्व: कालरात्रि के तुरंत बाद आने वाली महागौरी नवरात्रि के क्रम में एक अद्भुत आध्यात्मिक संतुलन प्रस्तुत करती हैं—जहाँ सप्तमी रात्रि भय और अंधकार का संहार करती है, वहीं अष्टमी शांति, निर्मलता, मांगल्य और कृपा को स्थापित करती है। (५) शोध विषय: (क) पुराणों में गौरी और महागौरी की कथाएँ; (ख) देवी प्रतिमाशास्त्र में श्वेत वर्ण और पवित्रता का प्रतीक; (ग) नवरात्रि क्रम में कालरात्रि (सप्तमी) और महागौरी (अष्टमी) का युग्म; (घ) महाष्टमी की पूजा एवं कन्या-पूजन परम्परा; (ङ) वृषभवाहिनी शैलपुत्री के साथ महागौरी की तुलना।'
      },
      {
        headingEn: 'Part VIII (34) · Siddhidātrī — सिद्धिदात्री (Ninth Day of Navarātri)',
        headingHi: 'भाग VIII (३४) · सिद्धिदात्री — Siddhidātrī (नवरात्रि का नवम दिवस)',
        bodyEn:
          '(1) Core Attributes: Meaning: Bestower of siddhis (accomplishments and spiritual perfections) · Navarātri day: Ninth day (Mahānavamī) · Traditional mount: Lotus or lion. (2) Identity and Mythology: Siddhidātrī is the ninth and final Goddess in the standard Navadurgā sequence. Her name combines siddhi (accomplishment, perfection, or spiritual attainment) and dātrī (giver or bestower). In devotional narratives, she is associated with the granting of the eight classical perfections (aṣṭa-siddhis) to gods, sages, and devotees, and with the completion of the nine-day spiritual journey. (3) Iconography: She is commonly shown seated on a lotus or riding a lion, with four arms holding a conch (śaṅkha), discus (cakra), mace (gadā), and lotus (padma), surrounded by gods, sages, siddhas, gandharvas, and celestial beings. (4) Religious Significance: As the culminating figure of the Navadurgā sequence, Siddhidātrī represents fulfillment, accomplishment, and the completion of the cycle of worship. In a scholarly archive, it is useful to note that the word siddhi can refer both to extraordinary spiritual powers (such as aṇimā, mahimā, laghimā, etc.) and, more broadly, to spiritual success and realization; siddhi is not automatically identical to mokṣa (final liberation) in every philosophical system. (5) Research Topics: (a) Meaning of siddhi in Hindu, Yogic, and Tantric traditions; (b) Iconography of Siddhidātrī and her four emblems (conch, discus, mace, lotus); (c) Narratives connecting Siddhidātrī with Śiva (Ardhanārīśvara) and the other deities; (d) Ritual practices on Mahānavamī, the ninth day of Navarātri; (e) Relationship between siddhi and liberation (mokṣa) in Śākta philosophy.',
        bodyHi:
          '(१) मुख्य परिचय: अर्थ: सिद्धियों (आध्यात्मिक पूर्णता और अलौकिक क्षमताओं) को प्रदान करने वाली देवी · नवरात्रि दिवस: नवम दिवस (महानवमी) · पारंपरिक आसन/वाहन: कमल या सिंह। (२) स्वरूप एवं पौराणिक कथा: मानक नवदुर्गा क्रम में सिद्धिदात्री नवम और अंतिम देवी हैं। उनका नाम "सिद्धि" (पूर्णता, सफलता या यौगिक उपलब्धि) और "दात्री" (देने वाली) से बना है। पौराणिक और भक्ति आख्यानों में उन्हें देवताओं, ऋषियों और साधकों को अष्ट-सिद्धियाँ प्रदान करने वाली तथा नौ दिनों की आध्यात्मिक यात्रा को पूर्णता देने वाली माना गया है। (३) प्रतिमाशास्त्र: उन्हें कमल पर विराजमान या सिंह पर आरूढ़, चतुर्भुजा रूप में शंख, चक्र, गदा और पद्म धारण किए तथा सिद्ध, गन्धर्व, यक्ष, देव और असुरों द्वारा सेवित दर्शाया जाता है। (४) धार्मिक एवं दार्शनिक महत्त्व: नवदुर्गा चक्र के शिखर के रूप में सिद्धिदात्री साधना की पूर्णता का प्रतीक हैं। अकादमिक दृष्टि से यह उल्लेखनीय है कि "सिद्धि" शब्द योग-तांत्रिक शक्तियों (अणिमा, महिमा आदि) और आध्यात्मिक सफलता दोनों के लिए प्रयुक्त होता है, यद्यपि दार्शनिक शास्त्रों में सिद्धि और मोक्ष के बीच सूक्ष्म भेद भी किया जाता है। (५) शोध विषय: (क) हिन्दू, योग और तांत्रिक परम्पराओं में सिद्धि की अवधारणा; (ख) सिद्धिदात्री का प्रतिमाशास्त्र; (ग) शिव (अर्धनारीश्वर प्रसंग) और अन्य देवताओं से सिद्धिदात्री का संबंध; (घ) महानवमी के अनुष्ठान; (ङ) शाक्त दर्शन में सिद्धि और मोक्ष का संबंध।'
      },
      {
        headingEn: 'Part IX (35–37) · The Navadurgā and the Wider Goddess Tradition: Mahāvidyās, Devī Māhātmya & Regional Variations',
        headingHi: 'भाग IX (३५–३७) · नवदुर्गा एवं व्यापक देवी परम्परा: महाविद्या तुलना, देवी माहात्म्य एवं क्षेत्रीय विविधताएँ',
        bodyEn:
          '(35) Navadurgā and the Mahāvidyās — What Is the Difference?: As summarized in Table 2 above, the Navadurgā and the Daśa Mahāvidyās are two distinct groupings within the wider Śākta tradition. The Navadurgā comprise nine forms of Durgā worshipped sequentially across the nine nights of Navarātri (from Śailaputrī to Siddhidātrī), with a strong emphasis on devotional liturgy, Purāṇic mythology, and seasonal festivals. The Daśa Mahāvidyās comprise ten Wisdom Goddesses (from Kālī to Kamalā), historically centered in Śākta Tantric theology, esoteric mantra-yantra systems, and philosophical traditions bridging Kālīkula and Śrīkula. (36) Navadurgā and the Devī Māhātmya: The Devī Māhātmya (also called the Durgā Saptaśatī or Caṇḍī Pāṭha, forming part of the Mārkaṇḍeya Purāṇa) is one of the most important scriptures in the history of Durgā worship and is widely recited during Navarātri. However, the familiar list of the nine Navadurgās from Śailaputrī to Siddhidātrī comes specifically from the Devī Kavaca, a protective hymn traditionally recited as an auxiliary limb (aṅga) alongside the Devī Māhātmya. Distinguishing the main text of the Devī Māhātmya from the Devī Kavaca is essential for accurate textual citation. (37) Regional Variations in Navadurgā Worship: Although the nine-day sequence is widely known, Navarātri and Durgā worship take different forms across regions: (a) Northern India: Sequential day-by-day worship of the nine Navadurgās, kalaśa-sthāपनā, recitation of the Durgā Saptaśatī and Devī Kavaca, and kanyā-pūjā on Aṣṭamī/Navamī; (b) Western India: Devotional worship centered on the consecrated clay lamp-pot (Garbo), communal Garba and Dandiya Raas traditions honoring the Goddess across nine nights; (c) Eastern India: Śāradīya Durgā Pūjā (in Bengal, Assam, Odisha, Mithila, and Bihar) focusing especially on the concluding days (Ṣaṣṭhī through Vijayādaśamī), celebrating Durgā’s victory over Mahiṣāsura alongside the Navapatrikā (nine plants) rite; (d) Southern India: Tiered ritual displays (Golu / Bommala Koluvu), three-day triadic worship of Durgā, Lakṣmī, and Sarasvatī, Ayudha Pūjā, Vidyārambham, and local temple traditions preserving alternative ninefold Durgā groupings.',
        bodyHi:
          '(३५) नवदुर्गा और दशमहाविद्या में अंतर: जैसा कि ऊपर तालिका २ में दर्शाया गया है, नवदुर्गा में भगवती दुर्गा के नौ स्वरूप (शैलपुत्री से सिद्धिदात्री) हैं जो मुख्यतः नवरात्रि की नौ रात्रियों, पौराणिक कथाओं और भक्ति-उपासना से संबद्ध हैं; इसके विपरीत दशमहाविद्या में दस ज्ञान-देवियाँ (काली से कमला) हैं जिनका ऐतिहासिक विकास शाक्त तांत्रिक तत्त्वज्ञान, मन्त्र-यन्त्र साधना और कालीकुल-श्रीकुल परम्पराओं में हुआ है। (३६) नवदुर्गा और देवी माहात्म्य: मार्कण्डेय पुराण का अंश "देवी माहात्म्य" (दुर्गा सप्तशती या चण्डी पाठ) दुर्गा उपासना का आधारभूत शास्त्र है जिसका नवरात्रि में व्यापक पाठ होता है; किंतु शैलपुत्री से सिद्धिदात्री तक के नौ नामों की प्रसिद्ध क्रमिक सूची विशेष रूप से "देवी कवच" (जो दुर्गा सप्तशती पाठ के एक अंग रूप में पढ़ा जाने वाला रक्षा-स्तोत्र है) में आती है। प्रामाणिक संदर्भ के लिए मूल देवी माहात्म्य और देवी कवच का यह अंतर स्पष्ट रखना आवश्यक है। (३७) नवदुर्गा उपासना में क्षेत्रीय विविधताएँ: (क) उत्तर भारत: नवरात्रि के नौ दिनों में शैलपुत्री से सिद्धिदात्री तक की प्रतिदिन क्रमिक पूजा, कलश-स्थापना, दुर्गा सप्तशती पाठ और अष्टमी/नवमी पर कन्या-पूजन; (ख) पश्चिम भारत: गर्भ-दीप (गरबो) की स्थापना तथा नौ रात्रियों में गरबा और डांडिया रास के माध्यम से अम्बा/जगदम्बा की आराधना; (ग) पूर्वी भारत: शारदीय दुर्गा पूजा (बंगाल, असम, ओडिशा, मिथिला, बिहार) में विशेष रूप से षष्ठी से विजयादशमी तक महिषासुरमर्दिनी दुर्गा की पूजा और नवपत्रिका विधान; (घ) दक्षिण भारत: गोलू / बोम्मला कोलुवु की झाँकी, दुर्गा-लक्ष्मी-सरस्वती की त्रिदिवसीय आराधना, आयुध पूजा, विद्यारम्भम् तथा क्षेत्रीय मंदिरों के नवदुर्गा समूह।'
      },
      {
        headingEn: 'Part X · Textual Sources, Further Reading & Three-Level Archival Structure',
        headingHi: 'भाग X · प्रमुख शास्त्रीय स्रोत, संदर्भ ग्रन्थ एवं त्रि-स्तरीय अभिलेखीय संरचना',
        bodyEn:
          '(1) The Devī Kavaca: The primary liturgical hymn associated with the Devī Māhātmya tradition that documents the familiar sequence of the nine Durgās from Śailaputrī to Siddhidātrī. (2) The Devī Māhātmya (Mārkaṇḍeya Purāṇa): One of the foundational scriptures of Śākta Hinduism, essential for understanding the theology, martial narratives, and liturgical prestige of Durgā. (3) The Śiva Purāṇa (alongside the Agni and Skanda Purāṇas): Important both for the mythological background of Pārvatī (Satī, mountain birth as Śailaputrī, asceticism as Brahmacāriṇī, restoration as Gaurī, and motherhood of Skanda) and for documenting alternative ninefold Durgā lists and the nine Navadurgā shrines of Kāśī. (4) Scholarly Studies of Hindu Goddesses: Academic works examining how Purāṇic narratives, temple iconography, and regional festival traditions interact across South Asia. (5) Three-Level Archival Structure for This Section: (Level 1 — Navadurgā Overview): Introduction to the nine forms in Navarātri, the Devī Kavaca sequence, and the distinction between the Navarātri ninefold list and other scriptural ninefold Durgā groupings; (Level 2 — Nine Individual Goddess Profiles): Detailed profiles for Sections 26–34 (Śailaputrī, Brahmacāriṇī, Candraghaṇṭā, Kūṣmāṇḍā, Skandamātā, Kātyāyanī, Kālarātrī, Mahāgaurī, and Siddhidātrī), each structured with core attributes, identity & mythology, iconography, religious significance, and research topics; (Level 3 — Research & Source Archive): Comparative study with the Daśa Mahāvidyās (Section 35), textual relationship to the Devī Māhātmya and Devī Kavaca (Section 36), regional worship variations across Northern, Western, Eastern, and Southern India (Section 37), and the primary source bibliography.',
        bodyHi:
          '(१) देवी कवच (Devī Kavaca): देवी माहात्म्य परम्परा से संबद्ध प्रमुख रक्षा-स्तोत्र, जिसमें शैलपुत्री से सिद्धिदात्री तक नवदुर्गा का प्रसिद्ध क्रम निबद्ध है। (२) देवी माहात्म्य (मार्कण्डेय पुराण): शाक्त धर्म का आधारभूत ग्रन्थ, जो भगवती दुर्गा के तत्त्वज्ञान और आख्यानों को समझने के लिए अनिवार्य है। (३) शिव पुराण (तथा अग्नि व स्कन्द पुराण): पार्वती के पौराणिक आख्यानों (सती, शैलपुत्री, ब्रह्मचारिणी की तपस्या, महागौरी और स्कन्दमाता) के साथ-साथ नवदुर्गा की वैकल्पिक शास्त्रीय सूचियों और काशी के नौ नवदुर्गा मंदिरों के अध्ययन हेतु महत्त्वपूर्ण। (४) हिन्दू देवियों पर अकादमिक शोध ग्रन्थ: पौराणिक साहित्य, मंदिर प्रतिमाशास्त्र और क्षेत्रीय उत्सव परम्पराओं के ऐतिहासिक अध्ययन। (५) इस अनुभाग की त्रि-स्तरीय संरचना: (स्तर १ — नवदुर्गा समग्र परिचय): नवरात्रि का नव-चक्र, देवी कवच का क्रम और अन्य नवदुर्गा सूचियों से भेद; (स्तर २ — नौ देवियों के व्यक्तिगत शोध-प्रोफ़ाइल): अनुभाग २६ से ३४ तक शैलपुत्री से सिद्धिदात्री का विस्तृत विश्लेषण (अर्थ, दिवस, वाहन, मिथक, प्रतिमाशास्त्र, धार्मिक महत्त्व और ५-५ शोध विषय); (स्तर ३ — तुलनात्मक एवं स्रोत अभिलेखागार): दशमहाविद्या से तुलना (३५), देवी माहात्म्य और देवी कवच का संबंध (३६), भारत के चारों क्षेत्रों में उपासना की विविधता (३७) और प्राथमिक शास्त्रीय स्रोत।'
      }
    ],
    keyFindingsEn: [
      'The familiar ninefold sequence from Śailaputrī (Day 1) to Siddhidātrī (Day 9) is canonically documented in the Devī Kavaca, an auxiliary protective hymn associated with the Devī Māhātmya.',
      'Section 25 establishes a crucial archival distinction between the Navadurgā of Navarātri (Śailaputrī to Siddhidātrī) and other ninefold Durgā lists recorded in the Śiva Purāṇa, Agni Purāṇa, and temple traditions.',
      'Part VIII (Sections 26–34) provides complete profiles for all nine Durgās, while Parts IX–X compare the Navadurgā with the Daśa Mahāvidyās and map regional practices across Northern, Western, Eastern, and Southern India.'
    ],
    keyFindingsHi: [
      'शैलपुत्री (प्रथम दिवस) से सिद्धिदात्री (नवम दिवस) तक नवदुर्गा का प्रसिद्ध क्रम दुर्गा सप्तशती से संबद्ध "देवी कवच" में प्रलेखित है।',
      'अनुभाग २५ "नवरात्रि की नवदुर्गा" और शिव पुराण, अग्नि पुराण तथा मंदिर परम्पराओं में वर्णित "अन्य नव-दुर्गा समूहों" के बीच महत्त्वपूर्ण शास्त्रीय भेद स्थापित करता है।',
      'भाग VIII (अनुभाग २६–३४) में नौ देवियों के संपूर्ण प्रोफ़ाइल तथा भाग IX–X में दशमहाविद्या से तुलना, क्षेत्रीय पूजा-विविधता और प्राथमिक शास्त्रीय स्रोत प्रस्तुत किए गए हैं।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Term & Transliteration', labelHi: 'संस्कृत नाम एवं लिप्यंतरण', valueEn: 'नवदुर्गा · Navadurgā (Nine Forms of Durgā)', valueHi: 'नवदुर्गा · Navadurgā (दुर्गा के नौ स्वरूप)' },
      { labelEn: 'Primary Sequence Source', labelHi: 'क्रम का मूल शास्त्रीय स्रोत', valueEn: 'Devī Kavaca (associated with Devī Māhātmya / Mārkaṇḍeya Purāṇa)', valueHi: 'देवी कवच (देवी माहात्म्य / दुर्गा सप्तशती से संबद्ध)' },
      { labelEn: 'Alternative Lists & Mythology', labelHi: 'अन्य सूचियाँ एवं पौराणिक स्रोत', valueEn: 'Śiva Purāṇa · Agni Purāṇa · Skanda Purāṇa (Kāśī Khaṇḍa)', valueHi: 'शिव पुराण · अग्नि पुराण · स्कन्द पुराण (काशी खण्ड)' },
      { labelEn: 'Archival Structure', labelHi: 'अभिलेखीय संरचना', valueEn: 'Level 1: Overview (Sec. 25) · Level 2: 9 Profiles (Sec. 26–34) · Level 3: Comparative & Sources (Sec. 35–37 & Part X)', valueHi: 'स्तर १: परिचय (२५) · स्तर २: ९ देवी प्रोफ़ाइल (२६–३४) · स्तर ३: तुलनात्मक अध्ययन एवं स्रोत (३५–३७ व भाग X)' }
    ],
    primarySourcesEn: 'Devī Kavaca · Devī Māhātmya (Mārkaṇḍeya Purāṇa) · Śiva Purāṇa · Skanda Purāṇa (Kāśī Khaṇḍa) · Agni Purāṇa · Taittirīya Āraṇyaka · Bhāgavata Purāṇa',
    primarySourcesHi: 'देवी कवच · देवी माहात्म्य (मार्कण्डेय पुराण) · शिव पुराण · स्कन्द पुराण (काशी खण्ड) · अग्नि पुराण · तैत्तिरीय आरण्यक · भागवत महापुराण',
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
    },
    {
      slug: 'bavan-bhairava-chhappan-kalua-concordance',
      categorySlug: '64-yogini-matrix',
      code: 'YM-10',
      titleEn: '52 Bhairavas (बावन भैरव) & 56 Kalua (छप्पन कलुआ) — Regional Devotional Concordance in the 64 Yoginī Tradition',
      titleHi: '52 भैरव (बावन भैरव) एवं 56 कलुआ (छप्पन कलुआ) — चौंसठ योगिनी परम्परा में क्षेत्रीय एवं लोक-तांत्रिक अनुक्रमणिका',
      subtitleEn: 'Complete 52 Bhairava Roster (Asitāṅga to Ekadaṃśa Bhairava) & Critical Archival Description of Chhappan Kalua in North Indian Esoteric Traditions',
      subtitleHi: 'असितांग से एकदंश भैरव पर्यन्त ५२ भैरवों की संपूर्ण सूची तथा उत्तर भारतीय लोक-तांत्रिक परम्परा में “छप्पन कलुआ” का प्रामाणिक शोध-विवरण',
      sanskritEpigraph: '॥ बावन भैरव चौंसठ योगिनी छप्पन कलुआ — क्षेत्रीय मंत्र एवं नाथ-शाक्त लोक-परम्परा ॥',
      epigraphTranslationEn: '"Fifty-Two Bhairavas (Bāvan Bhairav), Sixty-Four Yoginīs (Chausath Yoginī), and Fifty-Six Kalua (Chhappan Kalua) — the triadic protective invocation of North Indian regional mantra and devotional traditions."',
      epigraphTranslationHi: '"बावन भैरव (५२ भैरव), चौंसठ योगिनी (६४ योगिनी) और छप्पन कलुआ (५६ कलुआ) — उत्तर भारतीय क्षेत्रीय मंत्र एवं लोक-तांत्रिक उपासना में प्रयुक्त रक्षात्मक त्रयी।"',
      evidenceBadgeEn: '52 BHAIRAVA ROSTER · 56 KALUA ARCHIVAL NOTE (ATTESTED GROUP / UNVERIFIED ROSTER)',
      evidenceBadgeHi: '५२ भैरव नामावली · ५६ कलुआ अभिलेखीय समीक्षा (समूह प्रमाणित / विस्तृत सूची असत्यापित)',
      accentColor: '#F59E0B',
      summaryEn:
        'Alongside the canonical 64 Yoginī – 64 Bhairava mandala, regional Śākta, Nātha, and North Indian devotional traditions frequently invoke the 52 Bhairavas (Bāvan Bhairav) and the 56 Kalua (Chhappan Kalua)—most notably in formulas such as “bāvan Bhairav, chausath Yoginī, chhappan Kalua”. This monograph documents the complete numbered roster of all 52 Bhairavas (1. Asitāṅga Bhairava to 52. Ekadaṃśa Bhairava) alongside a rigorous, source-conscious archival analysis of the 56 Kalua (छप्पन कलुआ).',
      summaryHi:
        'शास्त्रीय ६४ योगिनी – ६४ भैरव मण्डल के साथ-साथ उत्तर भारतीय शाक्त, नाथ और क्षेत्रीय भक्ति परम्पराओं में “बावन भैरव (५२ भैरव)” और “छप्पन कलुआ (५६ कलुआ)” का विशेष उल्लेख मिलता है—विशेषतः “बावन भैरव, चौंसठ योगिनी, छप्पन कलुआ” जैसे सामूहिक मंत्र-सूत्रों में। यह शोध-प्रबंध १. असितांग भैरव से ५२. एकदंश भैरव तक सभी ५२ भैरवों की संपूर्ण सूची के साथ-साथ “५६ कलुआ (छप्पन कलुआ)” का तथ्यपरक एवं स्रोत-सचेत अभिलेखीय विवरण प्रस्तुत करता है।',
      sections: [
        {
          headingEn: '1. Complete Roster of the 52 Bhairavas (बावन भैरव — Bāvan Bhairava: 01 to 52)',
          headingHi: '1. बावन भैरव (52 भैरव) की संपूर्ण नामावली (01 से 52)',
          bodyEn:
            'In Śākta Pīṭha traditions and North Indian esoteric liturgies associated with the 64 Yoginīs, the Fifty-Two Bhairavas (Bāvan Bhairava) are enumerated as follows:\n\n' +
            '1. असितांग भैरव (Asitāṅga Bhairava) · 2. महाकाल भैरव (Mahākāla Bhairava) · 3. त्रिलोचन भैरव (Trilocana Bhairava) · 4. काल भैरव (Kāla Bhairava) · 5. त्रिपुर भैरव (Tripura Bhairava) · 6. क्रोध भैरव (Krodha Bhairava) · 7. तांडव भैरव (Tāṇḍava Bhairava) · 8. यम भैरव (Yama Bhairava) · 9. नीलकंठ भैरव (Nīlakaṇṭha Bhairava) · 10. श्मशान भैरव (Śmaśāna Bhairava) · 11. चंड भैरव (Caṇḍa Bhairava) · 12. धूम्रलोचन भैरव (Dhūmralocana Bhairava) · 13. वीर भैरव (Vīra Bhairava) · 14. रुद्र भैरव (Rudra Bhairava) · 15. क्षेत्रपाल भैरव (Kṣetrapāla Bhairava) · 16. लोकनाथ भैरव (Lokanātha Bhairava) · 17. पापभंजन भैरव (Pāpabhañjana Bhairava) · 18. महाभैरव (Mahābhairava) · 19. वत्सनाभ भैरव (Vatsanābha Bhairava) · 20. चित्रभानु भैरव (Citrabhānu Bhairava) · 21. भीषण भैरव (Bhīṣaṇa Bhairava) · 22. संहार भैरव (Saṃhāra Bhairava) · 23. क्रोधनाथ भैरव (Krodhanātha Bhairava) · 24. कालाग्नि भैरव (Kālāgni Bhairava) · 25. त्र्यम्बक भैरव (Tryambaka Bhairava) · 26. सर्प भैरव (Sarpa Bhairava) · 27. प्रचंड भैरव (Pracaṇḍa Bhairava) · 28. वरुण भैरव (Varuṇa Bhairava) · 29. गवाक्ष भैरव (Gavākṣa Bhairava) · 30. कामरूप भैरव (Kāmarūpa Bhairava) · 31. चक्र भैरव (Cakra Bhairava) · 32. विद्याराज भैरव (Vidyārāja Bhairava) · 33. पद्म भैरव (Padma Bhairava) · 34. विष्णु भैरव (Viṣṇu Bhairava) · 35. मुण्डपाल भैरव (Muṇḍapāla Bhairava) · 36. शव भैरव (Śava Bhairava) · 37. भूतनाथ भैरव (Bhūtanātha Bhairava) · 38. पिंड भैरव (Piṇḍa Bhairava) · 39. योगिनी भैरव (Yoginī Bhairava) · 40. जटा भैरव (Jaṭā Bhairava) · 41. कंकाल भैरव (Kaṅkāla Bhairava) · 42. धूम्र भैरव (Dhūmra Bhairava) · 43. त्रिनेत्र भैरव (Trinetra Bhairava) · 44. त्रिशूलपाणि भैरव (Triśūlapāṇi Bhairava) · 45. खड्गपाणि भैरव (Khaḍgapāṇi Bhairava) · 46. अज भैरव (Aja Bhairava) · 47. इंद्राचूर भैरव (Indrācūra Bhairava) · 48. इंद्रा मूर्ति भैरव (Indrāmūrti Bhairava) · 49. कुस्मांड भैरव (Kuṣmāṇḍa Bhairava) · 50. विमुक्ता भैरव (Vimuktā Bhairava) · 51. लिपिटक भैरव (Lipiṭaka Bhairava) · 52. एकदंश भैरव (Ekadaṃśa Bhairava).',
          bodyHi:
            'चौंसठ योगिनी परम्परा से संबद्ध शाक्त एवं उत्तर भारतीय उपासना पद्धतियों में बावन भैरव (52 भैरव) की क्रमबद्ध नामावली इस प्रकार है:\n\n' +
            '1. असितांग भैरव · 2. महाकाल भैरव · 3. त्रिलोचन भैरव · 4. काल भैरव · 5. त्रिपुर भैरव · 6. क्रोध भैरव · 7. तांडव भैरव · 8. यम भैरव · 9. नीलकंठ भैरव · 10. श्मशान भैरव · 11. चंड भैरव · 12. धूम्रलोचन भैरव · 13. वीर भैरव · 14. रुद्र भैरव · 15. क्षेत्रपाल भैरव · 16. लोकनाथ भैरव · 17. पापभंजन भैरव · 18. महाभैरव · 19. वत्सनाभ भैरव · 20. चित्रभानु भैरव · 21. भीषण भैरव · 22. संहार भैरव · 23. क्रोधनाथ भैरव · 24. कालाग्नि भैरव · 25. त्र्यम्बक भैरव · 26. सर्प भैरव · 27. प्रचंड भैरव · 28. वरुण भैरव · 29. गवाक्ष भैरव · 30. कामरूप भैरव · 31. चक्र भैरव · 32. विद्याराज भैरव · 33. पद्म भैरव · 34. विष्णु भैरव · 35. मुण्डपाल भैरव · 36. शव भैरव · 37. भूतनाथ भैरव · 38. पिंड भैरव · 39. योगिनी भैरव · 40. जटा भैरव · 41. कंकाल भैरव · 42. धूम्र भैरव · 43. त्रिनेत्र भैरव · 44. त्रिशूलपाणि भैरव · 45. खड्गपाणि भैरव · 46. अज भैरव · 47. इंद्राचूर भैरव · 48. इंद्रा मूर्ति भैरव · 49. कुस्मांड भैरव · 50. विमुक्ता भैरव · 51. लिपिटक भैरव · 52. एकदंश भैरव।'
        },
        {
          headingEn: '2. 56 Kalua (छप्पन कलुआ) — Description & Critical Source Evaluation',
          headingHi: '2. 56 कलुआ (छप्पन कलुआ) — विवरण एवं स्रोत समीक्षा',
          bodyEn:
            'The term “56 Kalua” (छप्पन कलुआ) appears in regional folk-religious accounts associated with North Indian devotional and esoteric traditions. In some accounts, the Kalua are described as a group of spiritual beings or powers connected with figures such as Guru Gorakhnath, Guga Jaharveer (Gugga), and Baba Kalua Paun.\n\n' +
            'However, the precise meaning of Kalua, the identity of all 56 figures, and their relationship to Bhairava differ or remain unclear in the sources available. It would therefore be inaccurate to present one definitive origin story or doctrinal description as universally accepted.',
          bodyHi:
            '“56 कलुआ” (छप्पन कलुआ) पद उत्तर भारतीय भक्ति एवं गूढ़ लोक-धार्मिक परम्पराओं के क्षेत्रीय विवरणों में प्राप्त होता है। कुछ आख्यानों में कलुआ को गुरु गोरखनाथ, गोगा जाहरवीर (गुग्गा) और बाबा कलुआ पौन जैसी विभूतियों से जुड़ी आध्यात्मिक शक्तियों या गणों के समूह के रूप में वर्णित किया गया है।\n\n' +
            'तथापि, उपलब्ध स्रोतों में “कलुआ” का सटीक अर्थ, सभी ५६ स्वरूपों की व्यक्तिगत पहचान और भैरव के साथ उनका संबंध भिन्न-भिन्न है अथवा अस्पष्ट बना हुआ है। अतः किसी एक उत्पत्ति-कथा या सैद्धांतिक विवरण को सर्वमान्य शास्त्रीय मत के रूप में प्रस्तुत करना ऐतिहासिक रूप से उचित नहीं होगा।'
        },
        {
          headingEn: '3. Meaning Within Regional Devotional Traditions & Archival Classification',
          headingHi: '3. क्षेत्रीय भक्ति परम्पराओं में अर्थ एवं अभिलेखीय वर्गीकरण',
          bodyEn:
            'The phrase often appears alongside Bāvan Bhairav (52 Bhairavas), Chausath Yoginī (64 Yoginīs) / Caurāsī Yoginī (84 Yoginīs in some oral formulations), and other supernatural or protective powers in regional mantra and devotional material. For example, a published version of a Sarbhang Gayatri mantra uses the phrase “bāvan Bhairav, chausath Yoginī, chhappan Kalua” together (Shree Sarkar Jogi et al.). This supports the existence of the phrase in certain devotional contexts, but it does not establish the identities, individual powers, or origins of all 56 Kalua.\n\n' +
            'Archival Definition — Chhappan Kalua (छप्पन कलुआ): A group of 56 figures or powers referenced in certain North Indian folk-Tantric and devotional traditions. They appear in some oral and mantra traditions alongside the 52 Bhairavas and Yoginī groups. Their individual names, attributes, and relationship to Bhairava require verification from a specific lineage or textual source.\n\n' +
            'Research Status: The group reference is attested; the complete roster and detailed classification remain unverified.',
          bodyHi:
            'क्षेत्रीय मंत्रों और भक्ति साहित्य में यह वाक्यांश प्रायः “बावन भैरव” (५२ भैरव), “चौंसठ योगिनी” (६४ योगिनी) अथवा कुछ मौखिक परम्पराओं में “चौरासी योगिनी” (८४ योगिनी) और अन्य रक्षक शक्तियों के साथ आता है। उदाहरणार्थ, सरभंग गायत्री मंत्र के एक प्रकाशित पाठ में “बावन भैरव, चौंसठ योगिनी, छप्पन कलुआ” वाक्यांश एक साथ प्रयुक्त हुआ है। यह विशिष्ट भक्ति संदर्भों में इस पद के अस्तित्व को प्रमाणित करता है, किन्तु इससे सभी ५६ कलुआओं की व्यक्तिगत पहचान, शक्तियाँ या उत्पत्ति स्थापित नहीं होती।\n\n' +
            'अभिलेखीय परिभाषा — छप्पन कलुआ (Chhappan Kalua): उत्तर भारतीय लोक-तांत्रिक और भक्ति परम्पराओं में उल्लिखित ५६ शक्तियों या स्वरूपों का एक समूह। ये कुछ मौखिक और मंत्र परम्पराओं में ५२ भैरवों और योगिनी समूहों के साथ प्रकट होते हैं। उनके व्यक्तिगत नाम, गुण और भैरव के साथ संबंध किसी विशिष्ट आम्नाय/परम्परा या मूल ग्रंथ से सत्यापन की अपेक्षा रखते हैं।\n\n' +
            'शोध स्थिति (Research Status): समूह का संदर्भ प्रमाणित है; संपूर्ण नामावली और विस्तृत वर्गीकरण असत्यापित (unverified) हैं।'
        }
      ],
      keyFindingsEn: [
        'Complete 52 Bhairava (Bāvan Bhairav) roster documented from 1. Asitāṅga Bhairava to 52. Ekadaṃśa Bhairava.',
        'In regional mantra literature (such as the Sarbhang Gayatri mantra), the triad “bāvan Bhairav, chausath Yoginī, chhappan Kalua” is invoked together.',
        'Chhappan Kalua (छप्पन कलुआ) is attested as a collective group of 56 figures/powers in North Indian folk-Tantric traditions (linked with Guru Gorakhnath, Guga Jaharveer, and Baba Kalua Paun), while their individual 56 names and doctrinal classification remain unverified.'
      ],
      keyFindingsHi: [
        '१. असितांग भैरव से ५२. एकदंश भैरव तक सभी बावन भैरव (52 भैरव) की संपूर्ण क्रमबद्ध नामावली प्रलेखित।',
        'क्षेत्रीय मंत्र साहित्य (जैसे सरभंग गायत्री मंत्र) में “बावन भैरव, चौंसठ योगिनी, छप्पन कलुआ” का सामूहिक आह्वान प्राप्त होता है।',
        'छप्पन कलुआ (56 Kalua) समूह का उल्लेख प्रमाणित है (गुरु गोरखनाथ, गोगा जाहरवीर और बाबा कलुआ पौन के लोक-संदर्भों सहित), जबकि उनकी संपूर्ण व्यक्तिगत नामावली और विस्तृत वर्गीकरण असत्यापित हैं।'
      ],
      metadata: [
        { labelEn: '52 Bhairava Group', labelHi: 'बावन भैरव समूह', valueEn: 'Bāvan Bhairava (01. Asitāṅga to 52. Ekadaṃśa Bhairava)', valueHi: 'बावन भैरव (०१. असितांग से ५२. एकदंश भैरव)' },
        { labelEn: '56 Kalua Group', labelHi: 'छप्पन कलुआ समूह', valueEn: 'Chhappan Kalua (छप्पन कलुआ — North Indian Folk-Tantric Tradition)', valueHi: 'छप्पन कलुआ (उत्तर भारतीय लोक-तांत्रिक एवं नाथ-भक्ति परम्परा)' },
        { labelEn: 'Attested Mantra Formula', labelHi: 'प्रमाणित मंत्र सूत्र', valueEn: '“bāvan Bhairav, chausath Yoginī, chhappan Kalua” (Sarbhang Gayatri)', valueHi: '“बावन भैरव, चौंसठ योगिनी, छप्पन कलुआ” (सरभंग गायत्री संदर्भ)' },
        { labelEn: 'Research Status (56 Kalua)', labelHi: 'शोध स्थिति (56 कलुआ)', valueEn: 'Group reference attested; complete roster & classification unverified', valueHi: 'समूह संदर्भ प्रमाणित; संपूर्ण सूची एवं वर्गीकरण असत्यापित' }
      ],
      primarySourcesEn: 'Regional Śākta-Nātha Liturgical Lists · Sarbhang Gayatri Mantra (Shree Sarkar Jogi) · North Indian Folk-Tantric Oral Archives',
      primarySourcesHi: 'क्षेत्रीय शाक्त-नाथ उपासना सूचियाँ · सरभंग गायत्री मंत्र (श्री सरकार जोगी) · उत्तर भारतीय लोक-तांत्रिक अभिलेख',
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
        sanskritName: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति।',
        titleEn: 'I. Acoustic Resonance (Nada-Shastra)',
        titleHi: 'I. Acoustic Resonance (Nada-Shastra) · नाद-शास्त्र',
        summaryEn: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone." — Empirical Field Term: Standing Wave Acoustics & Ellipsoidal Focal Amplification.',
        summaryHi: '"शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति।" — Standing Wave Acoustics & Ellipsoidal Focal Amplification (110 Hz – 130 Hz).',
        keyTopicsEn: [
          'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
          '110 Hz and 130 Hz Baritone Vocal Resonance',
          'Benchmark: The Musical Pillars of Vittala, Hampi'
        ],
        keyTopicsHi: [
          'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
          '110 Hz – 130 Hz अनुनाद आवृत्ति',
          'Benchmark: The Musical Pillars of Vittala, Hampi'
        ],
        sourceClassificationEn: 'SUBUNIT I · NADA-SHASTRA',
        sourceClassificationHi: 'उप-इकाई I · नाद-शास्त्र',
        articleSlug: 'acoustic-resonance'
      },
      {
        id: 'sub-bhu-marma',
        sanskritName: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते।',
        titleEn: 'II. Geomagnetic Friction (Bhu-Marma)',
        titleHi: 'II. Geomagnetic Friction (Bhu-Marma) · भू-मर्म',
        summaryEn: '"Where the core joints of the earth are knit, there an invisible current of force is generated." — Empirical Field Term: Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation.',
        summaryHi: '"यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते।" — Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation.',
        keyTopicsEn: [
          'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
          'Piezoelectric Quartz Compression & Tectonic Faults',
          'Benchmark: The Natural Fields of Kuldhara Village'
        ],
        keyTopicsHi: [
          'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
          'भू-चुंबकीय विचलन एवं टेम्पोरल लोब प्रभाव',
          'Benchmark: The Natural Fields of Kuldhara Village'
        ],
        sourceClassificationEn: 'SUBUNIT II · BHU-MARMA',
        sourceClassificationHi: 'उप-इकाई II · भू-मर्म',
        articleSlug: 'geomagnetic-friction'
      },
      {
        id: 'sub-ushna-saman',
        sanskritName: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं।',
        titleEn: 'III. Thermodynamic Inversion (Ushna-Saman)',
        titleHi: 'III. Thermodynamic Inversion (Ushna-Saman) · उष्ण-शमन',
        summaryEn: '"The localized chill of the stones is produced slowly by the upward movement of deep air." — Empirical Field Term: Adiabatic Gas Expansion & Differential Structural Heat Capacity.',
        summaryHi: '"शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं।" — Adiabatic Gas Expansion & Differential Structural Heat Capacity.',
        keyTopicsEn: [
          'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
          'Subterranean Stepwell (Baoli) Micro-Currents',
          'Benchmark: The Gateway Cold-Spots of Bhangarh Fort'
        ],
        keyTopicsHi: [
          'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
          'भूमिगत बावली वायु-प्रवाह एवं रुद्धोष्म शीतलन',
          'Benchmark: The Gateway Cold-Spots of Bhangarh Fort'
        ],
        sourceClassificationEn: 'SUBUNIT III · USHNA-SAMAN',
        sourceClassificationHi: 'उप-इकाई III · उष्ण-शमन',
        articleSlug: 'thermodynamic-inversion'
      },
      {
        id: 'sub-rasa-vijnana',
        sanskritName: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति।',
        titleEn: 'IV. Environmental Chemistry (Rasa-Vijnana)',
        titleHi: 'IV. Environmental Chemistry (Rasa-Vijnana) · रस-विज्ञान',
        summaryEn: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life." — Empirical Field Term: Aquifer Mass Spectroscopy & Background Ionizing Radiation.',
        summaryHi: '"पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति।" — Aquifer Mass Spectroscopy & Background Ionizing Radiation.',
        keyTopicsEn: [
          'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
          'Dissolved Silicates, Monazite Sands & Trace Isotopes',
          'Benchmark: The Thorium Aquifers of Kodinhi'
        ],
        keyTopicsHi: [
          'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
          'जल-भूरसायन एवं मोनाजाइट थोरियम निक्षेप',
          'Benchmark: The Thorium Aquifers of Kodinhi'
        ],
        sourceClassificationEn: 'SUBUNIT IV · RASA-VIJNANA',
        sourceClassificationHi: 'उप-इकाई IV · रस-विज्ञान',
        articleSlug: 'environmental-chemistry'
      },
      {
        id: 'sub-vastu-mandala',
        sanskritName: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति।',
        titleEn: 'V. Architectural Waveguides (Vastu-Mandala)',
        titleHi: 'V. Architectural Waveguides (Vastu-Mandala) · वास्तु-मण्डल',
        summaryEn: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine." — Empirical Field Term: Concentric Dielectric Waveguides & Environmental RF Traps.',
        summaryHi: '"मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति।" — Concentric Dielectric Waveguides & Environmental RF Traps.',
        keyTopicsEn: [
          'Concentric Dielectric Waveguides & Environmental RF Traps',
          'Prakara Walls, Sikata-Nyasa & Kalasha Copper Finials',
          'Benchmark: The Ellipsoidal Sanctums of Western Ghats'
        ],
        keyTopicsHi: [
          'Concentric Dielectric Waveguides & Environmental RF Traps',
          'प्राकार भित्ति, सिकता-न्यास एवं कलश चालकता',
          'Benchmark: The Ellipsoidal Sanctums of Western Ghats'
        ],
        sourceClassificationEn: 'SUBUNIT V · VASTU-MANDALA',
        sourceClassificationHi: 'उप-इकाई V · वास्तु-मण्डल',
        articleSlug: 'architectural-waveguides'
      }
    ],
    crossLinks: [],
    articles: [...CAGS_FIELD_ARTICLES]
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
      }
    ],
    crossLinks: [],
    articles: [
      ...ASHTA_BHAIRAVA_ARTICLES,
      ...ADDITIONAL_GATEWAY_ARTICLES['ashta-bhairava']
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
        articleSlug: 'bm-08-08'
      },
      {
        id: 'sub-52-bhairava-56-kalua',
        sanskritName: 'बावन भैरव एवं छप्पन कलुआ · 52 Bhairavas & 56 Kalua',
        titleEn: '52 Bhairavas (Bāvan Bhairav) & 56 Kalua (Chhappan Kalua) — Devotional & Folk-Tantric Concordance',
        titleHi: '52 भैरव (बावन भैरव) एवं 56 कलुआ (छप्पन कलुआ) — क्षेत्रीय एवं लोक-तांत्रिक अनुक्रमणिका',
        summaryEn: 'Complete numbered roster of the 52 Bhairavas (1. Asitāṅga to 52. Ekadaṃśa Bhairava) alongside the archival description and research status of Chhappan Kalua (56 Kalua).',
        summaryHi: 'असितांग भैरव से एकदंश भैरव पर्यन्त ५२ भैरवों की संपूर्ण सूची तथा उत्तर भारतीय लोक-तांत्रिक परम्परा में “छप्पन कलुआ” का प्रामाणिक शोध-विवरण।',
        keyTopicsEn: ['52 Bhairavas Complete Roster (1–52)', 'Chhappan Kalua (छप्पन कलुआ) Description', 'Sarbhang Gayatri Triad Formula'],
        keyTopicsHi: ['५२ भैरव संपूर्ण नामावली (१–५२)', 'छप्पन कलुआ (56 Kalua) शोध विवरण', '“बावन भैरव, चौंसठ योगिनी, छप्पन कलुआ”'],
        sourceClassificationEn: 'Regional Śākta-Nātha & Folk-Tantric Archive',
        sourceClassificationHi: 'क्षेत्रीय शाक्त-नाथ एवं लोक-तांत्रिक अभिलेख',
        articleSlug: 'bavan-bhairava-chhappan-kalua-concordance'
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
    aliasSlugs: ['ashta-matrika', 'matrika-mandala'],
    roman: 'V',
    gatewayBadgeEn: 'SACRED GATEWAY V · AṢṬA MĀTṚKĀ — THE EIGHT MOTHER-POWERS',
    gatewayBadgeHi: 'पवित्र ज्ञान-द्वार V · अष्ट मातृका — आठ मातृ-शक्तियाँ एवं वर्ण-चक्र',
    shortTitleEn: 'Eight Matrikas',
    shortTitleHi: 'अष्ट मातृका',
    titleEn: 'V · The Eight Mātṛkās (Aṣṭa Mātṛkā — अष्ट मातृका)',
    titleHi: 'V · अष्ट मातृका — ब्राह्म्यादि आठ मातृ-शक्तियाँ एवं वर्ण-विज्ञान',
    sanskritSeal: 'ब्राह्मी · माहेश्वरी · कौमारी · वैष्णवी · वाराही · इन्द्राणी · चामुण्डा · महालक्ष्मी',
    subtitleEn: 'Brāhmī, Māheśvarī, Kaumārī, Vaiṣṇavī, Vārāhī, Indrāṇī, Cāmuṇḍā & Mahālakṣmī — Purāṇic Iconography, Sanskrit Varga Phonemics & 3-Bit Cybernetic State-Space (000–111)',
    subtitleHi: 'ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, इन्द्राणी, चामुण्डा एवं महालक्ष्मी — पौराणिक प्रतिमाशास्त्र, संस्कृत वर्ण-वर्ग एवं ३-बिट (000–111) साइबरनेटिक प्रणाली',
    epigraphEn: '“Know the Mātṛkā as the subtle Mother of all mantras and cosmos — arrayed in eightfold sovereignty across the phoneme classes and the battleground of consciousness.”',
    epigraphHi: '“मातृका को समस्त मन्त्रों और विश्व की सूक्ष्म जननी जानो — जो वर्णमाला के आठ वर्गों और चेतना के समरांगण में अष्ट-शक्तियों के रूप में अधिष्ठित हैं।”',
    overviewEn:
      'Gateway V is dedicated exclusively to the Eight Mātṛkās (Aṣṭa Mātṛkā): Brāhmī, Māheśvarī, Kaumārī, Vaiṣṇavī, Vārāhī, Indrāṇī, Cāmuṇḍā, and Mahālakṣmī. Matching the Live Interactive Studio 1-to-1, this unit documents their emergence in the Devī Māhātmya (Ch. 8), their presidency over the eight Sanskrit phoneme classes (A-varga to Śa-varga), their role as Bhūpura guardians, and their comparative 3-bit cybernetic state-space (000–111) and neuro-endocrine mapping.',
    overviewHi:
      'पंचम ज्ञान-द्वार पूर्णतः अष्ट मातृकाओं (ब्राह्मी, माहेश्वरी, कौमारी, वैष्णवी, वाराही, इन्द्राणी, चामुण्डा और महालक्ष्मी) को समर्पित है। संवादात्मक अध्ययन कक्ष (Interactive Studio) के अनुरूप, इस इकाई में देवी माहात्म्य (अध्याय ८) में उनके प्राकट्य, संस्कृत वर्णमाला के आठ वर्गों (अ-वर्ग से श-वर्ग) पर उनके अधिपतित्व, भूपुर द्वारपाल भूमिका तथा ३-बिट बाइनरी संकेतक (000–111) व अंतःस्रावी सह-संबंधों का प्रलेखन है।',
    editorialFramingEn:
      'Editorial Note: Classical Purāṇic and Āgamic accounts of the Eight Mātṛkās (Devī Māhātmya Ch. 8, Varāha Purāṇa, Matsya Purāṇa, Tantrāloka) are presented alongside the 3-bit binary state-space (000–111) and neuro-endocrine correlates in the Aṣṭa Mātṛkā Interactive Studio.',
    editorialFramingHi:
      'संपादकीय टिप्पणी: अष्ट मातृकाओं के शास्त्रीय पौराणिक एवं आगम विवरणों (देवी माहात्म्य अध्याय ८, वराह पुराण, मत्स्य पुराण, तन्त्रालोक) को संवादात्मक अध्ययन कक्ष के ३-बिट बाइनरी संकेतक (000–111) और अंतःस्रावी सह-संबंध मॉडल के साथ प्रस्तुत किया गया है।',
    methodologyEn: 'Devī Māhātmya textual philology · Sanskrit Mātṛkā phoneme-class (Varga) analysis · Symbolic 3-bit cybernetic state-space mapping',
    methodologyHi: 'देवी माहात्म्य भाषाविज्ञान · संस्कृत मातृका वर्ण-वर्ग विश्लेषण · प्रतीकात्मक ३-बिट साइबरनेटिक अवस्था-मानचित्रण',
    accentColor: '#EC4899',
    secondaryColor: '#4C1D95',
    mandalaAngle: 115.71,
    domainTagEn: 'AṢṬA MĀTṚKĀ ARCHIVE',
    domainTagHi: 'अष्ट मातृका विज्ञान',
    sourceRegisterEn: 'Devī Māhātmya (Ch. 8) · Varāha Purāṇa · Matsya Purāṇa · Mālinīvijayottara Tantra · Tantrāloka',
    sourceRegisterHi: 'देवी माहात्म्य (अध्याय ८) · वराह पुराण · मत्स्य पुराण · मालिनीविजयोत्तर तन्त्र · तन्त्रालोक',
    subcategories: [
      {
        id: 'sub-matrika-puranic-combat',
        sanskritName: 'रक्तबीज-संहार एवं अष्ट-मातृका · Purāṇic Emergence',
        titleEn: 'Devī Māhātmya Emergence & Raktabīja Battleground Iconography',
        titleHi: 'देवी माहात्म्य में प्राकट्य एवं रक्तबीज समरांगण प्रतिमाशास्त्र',
        summaryEn: 'How the śaktis of Brahmā, Śiva, Skanda, Viṣṇu, Varāha, Indra, and Devī emerged with distinct weapons and vāhanas to absorb Raktabīja’s proliferating blood-clones.',
        summaryHi: 'ब्रह्मा, शिव, स्कन्द, विष्णु, वराह, इन्द्र और देवी की शक्तियों का अपने विशिष्ट आयुधों व वाहनों सहित प्राकट्य और रक्तबीज के रक्त-बिन्दुओं का शोषण।',
        keyTopicsEn: ['Devī Māhātmya Chapter 8', 'Vāhanas & Āyudhas of the 8 Mothers', 'Varāha Purāṇa Psychological Allegory'],
        keyTopicsHi: ['देवी माहात्म्य अध्याय ८', 'अष्ट मातृकाओं के वाहन एवं आयुध', 'वराह पुराण का मनोवैज्ञानिक रूपक'],
        sourceClassificationEn: 'Mārkaṇḍeya Purāṇa (Devī Māhātmya) & Varāha Purāṇa',
        sourceClassificationHi: 'मार्कण्डेय पुराण (देवी माहात्म्य) एवं वराह पुराण',
        articleSlug: 'brahmi'
      },
      {
        id: 'sub-matrika-varna-varga',
        sanskritName: 'अष्ट-वर्ग वर्णमाला · Sanskrit Phoneme Classes',
        titleEn: 'Mātṛkā Varṇamālā — Presidency Over the Eight Sanskrit Phoneme Classes',
        titleHi: 'मातृका वर्णमाला — संस्कृत के आठ वर्ण-वर्गों पर अधिपतित्व',
        summaryEn: 'Mapping the Eight Mātṛkās onto the eight articulation groups (A-varga vowels, Ka-varga gutturals, Ca-varga palatals, Ṭa-varga cerebrals, Ta-varga dentals, Pa-varga labials, Ya-varga semivowels, Śa-varga sibilants).',
        summaryHi: 'संस्कृत वर्णमाला के आठ उच्चारण वर्गों (अ-वर्ग, क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग, य-वर्ग, श-वर्ग) पर ब्राह्म्यादि अष्ट मातृकाओं का अधिष्ठान।',
        keyTopicsEn: ['8 Phoneme Classes (A-varga to Śa-varga)', 'Mālinīvijayottara & Tantrāloka Nyāsa', 'Trailokyamohana Bhūpura Guardianship'],
        keyTopicsHi: ['८ वर्ण-वर्ग (अ-वर्ग से श-वर्ग)', 'मालिनीविजयोत्तर एवं तन्त्रालोक न्यास', 'त्रैलोक्यमोहन भूपुर द्वारपाल'],
        sourceClassificationEn: 'Mālinīvijayottara Tantra, Tantrāloka & Yoginīhṛdaya',
        sourceClassificationHi: 'मालिनीविजयोत्तर तन्त्र, तन्त्रालोक एवं योगिनीहृदय',
        articleSlug: 'maheshvari'
      },
      {
        id: 'sub-matrika-cybernetic-state',
        sanskritName: 'त्र्यंगीय अवस्था-मॉडल · 3-Bit State-Space (000–111)',
        titleEn: '3-Bit Binary Operators (000–111) & Neuro-Endocrine Systems Model',
        titleHi: '३-बिट बाइनरी संकेतक (000–111) एवं तंत्रिका-अंतःस्रावी प्रणाली मॉडल',
        summaryEn: 'Comparative systems mapping of the Eight Mātṛkās from [0,0,0] Brāhmī (Creation/Initiation) to [1,1,1] Mahālakṣmī (Sovereign Synthesis) across the 8×8 = 64 Yoginī matrix columns.',
        summaryHi: '[0,0,0] ब्राह्मी (सृजन/प्रारंभ) से [1,1,1] महालक्ष्मी (पूर्ण संश्लेषण) तक अष्ट मातृकाओं का ३-बिट बाइनरी और ८×८ = ६४ योगिनी स्तंभों के साथ तुलनात्मक विश्लेषण।',
        keyTopicsEn: ['Binary State-Space [000] to [111]', 'Neuro-Endocrine & Plexus Correlates', '8 Columns of the 64-Yoginī Matrix'],
        keyTopicsHi: ['बाइनरी अवस्था-मानचित्र [000] से [111]', 'अंतःस्रावी ग्रंथि एवं चक्र सह-संबंध', '६४-योगिनी आव्यूह के ८ मातृका स्तंभ'],
        sourceClassificationEn: 'Contemporary Comparative Systems & Cybernetic Model',
        sourceClassificationHi: 'समकालीन तुलनात्मक प्रणाली एवं साइबरनेटिक मॉडल',
        articleSlug: 'chamunda'
      }
    ],
    crossLinks: [],
    articles: [...EIGHT_MATRIKAS_ARTICLES]
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
    crossLinks: [],
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
      }
    ],
    crossLinks: [],
    articles: [...FOURTEEN_LOKA_ARTICLES]
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

  // Support standalone Sacred Seal articles & archival monographs opened from the outer index
  const standaloneFound =
    DEEP_SACRED_SEAL_ARTICLES.find(a => a.slug === articleSlug) ||
    SHAKTI_TATTVA_CORE_ARTICLES.find(a => a.slug === articleSlug) ||
    Object.values(ADDITIONAL_GATEWAY_ARTICLES)
      .flat()
      .find(a => a.slug === articleSlug);
  if (standaloneFound) {
    return { portal, article: standaloneFound };
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

