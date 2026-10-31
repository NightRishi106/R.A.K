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
    titleEn: 'Kālīkula & Śrīkula — Complete Research Synthesis (Parts I–IV)',
    titleHi: 'कालीकुल एवं श्रीकुल — संपूर्ण शोध संश्लेषण (भाग I से IV)',
    subtitleEn: 'Sanskrit: कालीकुल एवं श्रीकुल · Part I: Kālīkula (The Family, Lineage, or Tradition of Kālī) · Part II: Śrīkula (The Family, Lineage, or Tradition of Śrī / Śrīvidyā) · Part III: Comparative Analysis · Part IV: Archival Structure & Bibliography',
    subtitleHi: 'संस्कृत: कालीकुल एवं श्रीकुल · भाग I: कालीकुल (काली का कुल, वंश या परम्परा) · भाग II: श्रीकुल (श्री / त्रिपुरसुन्दरी एवं श्रीविद्या की परम्परा) · भाग III: तुलनात्मक अध्ययन · भाग IV: अभिलेखीय संरचना एवं संदर्भ-सूची',
    sanskritEpigraph: '॥ कालीकुलं च श्रीकुलं च द्वौ प्रवाहौ महापथौ। चित्-शक्ति-साम्य-रूपायै महादेव्यै नमो नमः ॥',
    epigraphTranslationEn: '"Kālīkula (the family, lineage, or tradition of Kālī) and Śrīkula (the family, lineage, or tradition of Śrī) stand as two interconnected Śākta Tantric streams contemplating the Goddess across time, dissolution, manifestation, sovereignty, and consciousness."',
    epigraphTranslationHi: '"कालीकुल (काली का कुल या परम्परा) और श्रीकुल (श्री का कुल या परम्परा) शाक्त तन्त्र की दो परस्पर संबद्ध महाधाराएँ हैं, जो काल, लय, सृष्टि-अभिव्यक्ति, संप्रभुता और चेतना के धरातल पर भगवती पराशक्ति का साक्षात्कार कराती हैं।"',
    evidenceBadgeEn: 'RESEARCH SYNTHESIS · PRIMARY TEXTS, SCHOLARLY INTERPRETATION & LINEAGE CONTEXT',
    evidenceBadgeHi: 'शोध संश्लेषण · प्राथमिक ग्रंथीय साक्ष्य, अकादमिक व्याख्या एवं परम्परा संदर्भ',
    accentColor: '#EC4899',
    summaryEn:
      'Editorial Synthesis: This page serves as a comprehensive four-part research synthesis distinguishing primary textual evidence from scholarly interpretation and contemporary practitioner explanations. Part I examines Kālīkula (कालीकुल — the family, lineage, or tradition of Kālī) across Bengal, eastern India, and the Kashmirian Krama current. Part II examines Śrīkula (श्रीकुल — the family, lineage, or tradition of Śrī), centered on Tripurasundarī (Lalitā, Rājarājeśvarī, Ṣoḍaśī), the Śrīcakra, and Śrīvidyā across South India and Kashmir. Part III compares Kālīkula and Śrīkula across eight analytical dimensions while demonstrating why they are not simple binary opposites. Part IV establishes the two dedicated research collections (Kālīkula Archive and Śrīkula Archive), their 8-point archival content structure, and peer-reviewed bibliography (Wenta 2021; Brooks 1992; Golovkova 2019; Karasiński 2025).',
    summaryHi:
      'संपादकीय शोध संश्लेषण: यह पृष्ठ प्राथमिक ग्रंथीय साक्ष्य, अकादमिक व्याख्या और समकालीन साधक-विवरणों के बीच स्पष्ट अंतर रखते हुए चार भागों में प्रस्तुत एक संपूर्ण शोध संश्लेषण (Research Synthesis) है। भाग I में कालीकुल (काली का परिवार, वंश या परम्परा) का बंगाल, पूर्वी भारत और कश्मीर की क्रम परम्परा के संदर्भ में विश्लेषण है। भाग II में श्रीकुल (श्री का परिवार, वंश या परम्परा) का त्रिपुरसुन्दरी (ललिता, राजराजेश्वरी, षोडशी), श्रीचक्र और श्रीविद्या के संदर्भ में दक्षिण भारत एवं कश्मीर के ऐतिहासिक परिप्रेक्ष्य में अध्ययन है। भाग III में आठ प्रमुख आयामों के आधार पर कालीकुल और श्रीकुल की तुलना करते हुए यह स्पष्ट किया गया है कि वे परस्पर निरपेक्ष विरोधी नहीं हैं। भाग IV में दोनों पृथक् शोध संग्रहों (कालीकुल अभिलेखागार और श्रीकुल अभिलेखागार) की ८-स्तरीय संरचना तथा प्रमुख अकादमिक संदर्भ-सूची (वेंटा २०२१; ब्रुक्स १९९२; गोलोवकोवा २०१९; करासिंस्की २०२५) दी गई है।',
    sections: [
      {
        headingEn: 'Part I (1 & 2) — Kālīkula: Definition, Religious Significance & Philosophical Foundations',
        headingHi: 'भाग I (१ एवं २) — कालीकुल: परिभाषा, धार्मिक महत्त्व एवं दार्शनिक आधार',
        bodyEn:
          'Sanskrit: कालीकुल · Transliteration: Kālīkula · Literal meaning: The family, lineage, or tradition of Kālī.\n1. Definition and religious significance: Kālīkula is a name used for Śākta Tantric traditions centered on Kālī and related forms of the Goddess. The term combines Kālī, the Goddess, with kula, meaning family, lineage, group, or, in certain Tantric philosophical contexts, a larger interconnected whole.\nBroad family of traditions: Kālīkula is not one universally standardized organization with a single scripture, ritual system, or theology. It is better understood as a broad family of related traditions whose teachings developed across different regions and historical periods. Some are strongly associated with Bengal and eastern India; others belong to the medieval Tantric traditions of Kashmir, particularly the Krama current.\nBeyond destroying evil: In these traditions, Kālī is not merely a goddess who destroys evil. Depending on the text and lineage, she can represent supreme consciousness, the power of time, the dynamic nature of existence, the dissolution of the universe, or the reality beyond ordinary distinctions. Her iconography, mythology, mantra traditions, and philosophical interpretations provide different ways of understanding the relationship between consciousness, creation, time, transformation, and liberation.\n2.1 Śakti as supreme reality: Śakti means power, capacity, or divine energy. In Śākta traditions, Śakti is not simply an instrument belonging to a separate male deity. She may be understood as the ultimate reality itself—the power through which existence manifests, continues, and returns to its source. In some nondual Tantric systems, Śiva and Śakti are inseparable aspects of reality: Śiva represents consciousness, while Śakti represents its dynamic, self-expressive power. This distinction is a philosophical framework, not necessarily a claim that the two are separate entities. Kālīkula traditions vary in how they formulate this relationship—some emphasize Kālī as the supreme Goddess beyond all categories; others explain her through more elaborate systems of manifestation, cognition, and dissolution.\n2.2 Kālī and time: The Sanskrit word kāla is associated with time and, in certain contexts, death. In the Kashmirian Krama tradition, the Goddess is associated with cycles of manifestation, experience, and dissolution. A particularly important doctrine concerns the twelve Kālīs, whose sequence is interpreted in later philosophical texts as the unfolding and reabsorption of consciousness. In this philosophical setting, what arises, is experienced, and disappears is understood in relation to the dynamic activity of consciousness itself.\n2.3 Creation and dissolution: Kālī’s destructive imagery is often interpreted through the larger cycle of existence: (1) Manifestation — reality appears in differentiated forms; (2) Experience — beings encounter and participate in the world; (3) Transformation — forms change and cease to remain as they were; (4) Dissolution — distinctions and manifested forms return to their source. These stages are a useful interpretive framework, not a single four-stage doctrine shared by every Kālīkula lineage.\n2.4 Liberation and recognition: Some nondual Śākta and Śaiva traditions understand liberation as a transformation in how reality is recognized and experienced, seeking more than temporary supernatural benefits. In the Kashmirian Krama tradition, the sequence of the Goddess is interpreted as the unfolding and reabsorption of awareness, aiming at realizing the nature of consciousness rather than remaining confined to ordinary, limited perception. This philosophical interpretation should not be automatically attributed to every Bengali Kālī worship tradition or every lineage that uses the name Kālīkula.',
        bodyHi:
          'संस्कृत: कालीकुल · लिप्यंतरण: Kālīkula · शाब्दिक अर्थ: काली का परिवार, वंश, परम्परा या कुल।\n१. परिभाषा एवं धार्मिक महत्त्व: कालीकुल नाम का प्रयोग काली और देवी के संबंधित स्वरूपों पर केंद्रित शाक्त तांत्रिक परम्पराओं के लिए किया जाता है। यह शब्द "काली" (देवी) और "कुल" (परिवार, वंश, समूह अथवा तांत्रिक दर्शन में परस्पर संबद्ध समग्रता) के संयोग से बना है।\nसंबंधित परम्पराओं का व्यापक परिवार: कालीकुल कोई एक सर्वत्र मानकीकृत संगठन नहीं है जिसका केवल एक ही शास्त्र, एक ही पूजा-पद्धति या एक ही धर्मशास्त्र हो। इसे विभिन्न क्षेत्रों और ऐतिहासिक कालखंडों में विकसित हुई संबंधित परम्पराओं के एक व्यापक परिवार के रूप में समझना अधिक उपयुक्त है। इनमें से कुछ बंगाल और पूर्वी भारत से गहराई से जुड़ी हैं, जबकि अन्य कश्मीर की मध्यकालीन तांत्रिक परम्पराओं, विशेषतः "क्रम" (Krama) धारा से संबद्ध हैं।\nदुष्ट-दलन से परे दार्शनिक अर्थ: इन परम्पराओं में काली केवल दुष्टों का संहार करने वाली देवी मात्र नहीं हैं। ग्रन्थ और परम्परा के अनुसार वे सर्वोच्च चेतना, काल की शक्ति, अस्तित्व की गतिशील प्रकृति, ब्रह्माण्ड के लय, अथवा साधारण भेदों से परे के परम यथार्थ का प्रतिनिधित्व करती हैं।\n२.१ परम यथार्थ के रूप में शक्ति (Śakti as supreme reality): शक्ति का अर्थ सामर्थ्य या दिव्य ऊर्जा है। शाक्त परम्पराओं में शक्ति किसी पृथक् पुरुष देवता का मात्र उपकरण नहीं हैं; वे स्वयं परम यथार्थ हैं—वह शक्ति जिसके द्वारा अस्तित्व प्रकट होता है, बना रहता है और अपने मूल स्रोत में लौटता है। कुछ अद्वैत तांत्रिक प्रणालियों में शिव (चेतना) और शक्ति (उसकी गतिशील स्व-अभिव्यक्ति) यथार्थ के अविभाज्य पहलू हैं।\n२.२ काली और काल (Kālī and time): संस्कृत शब्द "काल" समय और मृत्यु से संबद्ध है। कश्मीर की क्रम परम्परा में देवी को सृष्टि के उन्मेष, अनुभव और विलय के चक्रों से जोड़ा गया है। इसमें "द्वादश काली" (बारह कालियों) का सिद्धांत विशेष महत्त्वपूर्ण है, जिनके अनुक्रम की व्याख्या परवर्ती दार्शनिक ग्रन्थों में चेतना के प्रकटन और पुनः समावेशन के रूप में की गई है।\n२.३ सृष्टि एवं लय (Creation and dissolution): काली के संहारक प्रतीकों को अस्तित्व के वृहत्तर चक्र के माध्यम से समझा जाता है: (१) उन्मेष / अभिव्यक्ति (Manifestation) — यथार्थ का विभेदित रूपों में प्रकट होना; (२) अनुभव (Experience) — जीवों का जगत में सहभागी होना; (३) रूपांतरण (Transformation) — रूपों का परिवर्तन; तथा (४) लय / विलय (Dissolution) — भेदों और प्रकट रूपों का अपने मूल स्रोत में लौट जाना। ये चार चरण एक उपयोगी व्याख्यात्मक रूपरेखा हैं, न कि प्रत्येक कालीकुल शाखा का एकसमान नियम।\n२.४ मुक्ति एवं प्रत्यभिज्ञा (Liberation and recognition): अद्वैत शाक्त और शैव परम्पराओं में मुक्ति को यथार्थ की पहचान (प्रत्यभिज्ञा) और अनुभव के रूपांतरण के रूप में समझा जाता है। कश्मीर क्रम दर्शन में देवी के अनुक्रम को सीमित बोध से ऊपर उठकर चेतना के वास्तविक स्वरूप के साक्षात्कार से जोड़ा गया है; किंतु इस विशिष्ट दार्शनिक व्याख्या को बिना प्रमाण के प्रत्येक बंगाली काली-उपासना परम्परा पर स्वतः आरोपित नहीं किया जाना चाहिए।'
      },
      {
        headingEn: 'Part I (3, 4, 5 & 6) — Kālīkula: Iconography, Wider Traditions, Textual Sources & Methodological Safeguards',
        headingHi: 'भाग I (३, ४, ५ एवं ६) — कालीकुल: प्रतिमाशास्त्र, प्रमुख परम्पराएँ, ग्रंथीय स्रोत एवं शोध सावधानियाँ',
        bodyEn:
          '3. Kālī — iconography and symbolism:\n(a) Dark or black complexion — Kālī is frequently depicted with a dark complexion; devotional and theological interpretations associate this darkness with the boundless, the unmanifest, or a reality that cannot be contained by ordinary categories, though interpretations differ between texts and communities.\n(b) Garland of heads and other fierce attributes — These features belong to particular iconographic forms of Kālī and can be interpreted in relation to mortality, the destruction of ego, the transience of embodied existence, and the severing of limiting attachments.\n(c) Kālī standing upon Śiva — Interpreted through the relationship between consciousness and dynamic power, while popular devotional narratives also connect it with Kālī’s cessation of destructive activity upon recognizing Śiva beneath her feet.\n(d) Cremation-ground imagery — Certain forms of Kālī are associated with cremation grounds and other liminal settings that confront practitioners and observers with impermanence, death, social boundaries, and the limits of ordinary identity.\nResearch note on iconography: Iconographic descriptions should distinguish what is visibly represented from interpretations attributed to particular scriptures, commentaries, or living traditions; a symbol may carry several meanings rather than one universal explanation.\n4. Important traditions within the wider Kālī-centered landscape: Kālīkula should not be treated as a fixed list of subsects. Key research areas include (1) Bengali Śākta traditions (diverse devotional, philosophical, and Tantric approaches with regional variations); (2) Kashmirian Krama (a nondual Śākta-Śaiva current in which Kālī and her sequences are central to theories of consciousness and dissolution); (3) Mahāvidyā traditions (where Kālī is one of the ten Mahāvidyās); and (4) Kaula traditions (emphasizing lineage, initiation, ritual, and kula).\n5. Textual sources and historical research: A serious Kālīkula archive distinguishes primary sources, scholarly interpretations, and modern devotional explanations: (1) Kālīkulakramasadbhāva — A Tantric text associated with the Kālī-centered Krama textual tradition; (2) Jayadrathayāmala — A major Tantric textual source relevant to the historical study of Bhairava and Kālī-centered traditions; (3) Devīpañcaśataka — Examined in modern scholarship on the development of the twelve Kālīs; (4) Tantrāloka — Abhinavagupta’s major philosophical and ritual work systematizing Krama and related Tantric doctrines; and (5) Modern scholarship — Aleksandra Wenta’s peer-reviewed study examining the historical development of the twelve Kālīs from earlier Kula/Kaula contexts to later philosophical formulations.\n6. What Kālīkula should not be reduced to: (1) Kālīkula is not synonymous with black magic; (2) Kālī worship is not necessarily transgressive or associated with cremation-ground practices; (3) Every Kālī-centered tradition does not follow the same ritual system; (4) The twelve Kālīs of Kashmirian Krama should not be confused with the ten Mahāvidyās; and (5) Claims about supernatural powers or ritual effects should be presented as religious beliefs or textual claims, not as scientifically established facts.',
        bodyHi:
          '३. काली — प्रतिमाशास्त्र एवं प्रतीकार्थ:\n(क) श्यामल या कृष्ण वर्ण — काली को प्रायः गहरे श्यामल या कृष्ण वर्ण में चित्रित किया जाता है; भक्ति और धर्मशास्त्रीय व्याख्याएँ इसे असीम, अव्यक्त या साधारण श्रेणियों से परे के यथार्थ से जोड़ती हैं।\n(ख) मुण्डमाला एवं अन्य उग्र लक्षण — ये लक्षण नश्वरता, अहंकार के विनाश, देहधारी जीवन की क्षणभंगुरता और सीमित आसक्तियों के उच्छेदन के संदर्भ में व्याख्यायित होते हैं।\n(ग) शिव के ऊपर खड़ी काली — इसे चेतना (शिव) और गतिशील शक्ति (शक्ति) के संबंध के रूप में तथा भक्ति-आख्यानों में अपने चरणों के नीचे शिव को पहचानकर संहारक वेग रोकने के प्रसंग से जोड़ा जाता है।\n(घ) श्मशान-भूमि के प्रतीक — काली के कुछ स्वरूप श्मशान और सीमांत स्थलों से जुड़े हैं, जो अनित्यता, मृत्यु, सामाजिक सीमाओं और साधारण पहचान की सीमाओं का साक्षात्कार कराते हैं।\nप्रतिमाशास्त्रीय शोध टिप्पणी: दृश्य रूप और विशिष्ट शास्त्रों/भाष्यों की व्याख्याओं में स्पष्ट अंतर रखा जाना चाहिए; एक प्रतीक के कई अर्थ हो सकते हैं।\n४. व्यापक काली-केंद्रित परिदृश्य की प्रमुख परम्पराएँ: कालीकुल को उप-संप्रदायों की निश्चित सूची नहीं मानना चाहिए। प्रमुख शोध-क्षेत्र हैं—(१) बंगाली शाक्त परम्पराएँ; (२) कश्मीरी क्रम परम्परा (जहाँ काली और उनका अनुक्रम चेतना व लय के केंद्र में हैं); (३) महाविद्या परम्पराएँ (दस महाविद्याओं में काली का स्थान); तथा (४) कौल परम्पराएँ (वंश, दीक्षा, अनुष्ठान और कुल-तत्त्व)।\n५. ग्रंथीय स्रोत एवं ऐतिहासिक शोध: (१) कालीकुलक्रमसद्भाव — काली-केंद्रित क्रम परम्परा से संबद्ध तांत्रिक ग्रन्थ; (२) जयद्रथयामल — भैरव और काली-केंद्रित परम्पराओं के ऐतिहासिक अध्ययन का प्रमुख यामल स्रोत; (३) देवीपञ्चशतक — द्वादश काली के विकास पर आधुनिक शोध में परीक्षित ग्रन्थ; (४) तन्त्रालोक — अभिनवगुप्त की प्रमुख दार्शनिक एवं आनुष्ठानिक कृति; तथा (५) आधुनिक अकादमिक शोध — अलेक्ज़ांद्रा वेंटा (Aleksandra Wenta) का समीक्षित अध्ययन।\n६. कालीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए: (१) कालीकुल काले जादू (अभिचार) का पर्याय नहीं है; (२) काली की प्रत्येक उपासना वाममार्गी या श्मशान-साधना पर आधारित नहीं होती; (३) सभी काली-केंद्रित परम्पराएँ एक ही पूजा-पद्धति का पालन नहीं करतीं; (४) कश्मीरी क्रम की "द्वादश काली" को "दशमहाविद्या" के साथ भ्रमित नहीं करना चाहिए; तथा (५) अलौकिक सिद्धियों या अनुष्ठान-प्रभावों के दावों को धार्मिक विश्वास या ग्रंथीय कथन के रूप में प्रस्तुत किया जाना चाहिए, न कि वैज्ञानिक रूप से सिद्ध तथ्य के रूप में।'
      },
      {
        headingEn: 'Part II (1, 2 & 3) — Śrīkula: Definition, Tripurasundarī & Philosophical Foundations',
        headingHi: 'भाग II (१, २ एवं ३) — श्रीकुल: परिभाषा, त्रिपुरसुन्दरी एवं दार्शनिक आधार',
        bodyEn:
          'Sanskrit: श्रीकुल · Transliteration: Śrīkula · Literal meaning: The family, lineage, or tradition of Śrī.\n1. Definition and religious significance: Śrīkula is a name used for Śākta Tantric traditions centered on Śrī, especially the Goddess Tripurasundarī, also known as Lalitā and Rājarājeśvarī. Its best-known associated tradition is Śrīvidyā, whose name is commonly translated as “auspicious knowledge” or “sacred wisdom.” In Śrīvidyā, the Goddess is worshipped through interconnected forms that include her anthropomorphic image, her mantra, and the Śrīcakra or Śrīyantra; these form an integrated theological and ritual system. Śrīkula traditions have had a particularly significant history in South India, while also developing through exchanges with Kashmirian Śaiva and Śākta philosophical traditions. As with Kālīkula, Śrīkula is not a single uniform organization, but a family of related Goddess-centered traditions.\n2. Tripurasundarī — the central Goddess: Commonly translated as “the Beauty of the Three Cities” or “the Beauty of the Three Worlds,” she is also known as: (1) Lalitā — the graceful or playful Goddess; (2) Rājarājeśvarī — the sovereign of sovereigns; (3) Ṣoḍaśī — a name associated with her sixteenfold aspect in particular traditions; and (4) Tripurā — emphasizing her connection with the threefold structure of reality. In Śrīvidyā, Tripurasundarī is understood as a supreme manifestation of Śakti rather than merely one deity among many. Her royal imagery communicates sovereignty, while her beauty and benevolent appearance express the harmonious, creative, and auspicious dimensions of the Goddess—manifesting as both the source of the cosmos and an accessible object of devotion.\n3.1 The unity of consciousness and manifestation: Many Śrīvidyā traditions draw on nondual Śaiva philosophical frameworks in which consciousness and its power of manifestation are inseparable. The manifested world is understood as an expression of her power, while her ultimate nature exceeds any particular form or manifestation; some teachers emphasize nondual metaphysics while others integrate Śākta worship with Vedāntic interpretations.\n3.2 The threefold nature of Tripurā: Depending on the text and lineage, threefold correspondences include: (1) The three worlds; (2) The knower, the act of knowing, and the known; (3) Creation, preservation, and dissolution; and (4) Waking, dreaming, and deep sleep. An archive should identify the particular text or commentary that establishes each correspondence rather than presenting every triad as canonical Śrīvidyā doctrine.\n3.3 Beauty, auspiciousness, and sovereignty: In this theological setting, beauty is not merely a superficial quality; it expresses the intelligibility, harmony, and creative fullness of manifestation. The Goddess is sovereign over the cosmos while remaining its inner power and source—one reason Śrīvidyā is not adequately described as simply the “gentle” counterpart to Kālī worship, as its theology is sophisticated and its ritual traditions include both contemplative and complex esoteric elements.',
        bodyHi:
          'संस्कृत: श्रीकुल · लिप्यंतरण: Śrīkula · शाब्दिक अर्थ: श्री का परिवार, वंश, परम्परा या कुल।\n१. परिभाषा एवं धार्मिक महत्त्व: श्रीकुल नाम का प्रयोग "श्री" विशेषतः भगवती त्रिपुरसुन्दरी (जिन्हें ललिता और राजराजेश्वरी भी कहा जाता है) पर केंद्रित शाक्त तांत्रिक परम्पराओं के लिए किया जाता है। इससे संबद्ध सर्वाधिक प्रसिद्ध परम्परा "श्रीविद्या" है, जिसका अर्थ "मंगलमयी विद्या" या "पवित्र प्रज्ञा" है। श्रीविद्या में देवी की उपासना उनके साकार विग्रह, उनके मन्त्र और श्रीचक्र (श्रीयन्त्र) के अंतर्संबंधित रूपों में होती है—ये तीनों मिलकर एक एकीकृत धर्मशास्त्रीय और आनुष्ठानिक प्रणाली बनाते हैं। दक्षिण भारत में श्रीकुल परम्पराओं का विशेष ऐतिहासिक विकास हुआ तथा कश्मीर की शैव और शाक्त दार्शनिक परम्पराओं के साथ भी इनका गहरा आदान-प्रदान रहा।\n२. केंद्रीय देवी — त्रिपुरसुन्दरी: "त्रिपुरसुन्दरी" नाम का अनुवाद "तीनों पुरों (लोकों) की सुन्दरी" के रूप में किया जाता है। उन्हें इन प्रमुख नामों से भी जाना जाता है: (१) ललिता — ललित या लीलामयी देवी; (२) राजराजेश्वरी — सम्राटों की भी अधीश्वरी; (३) षोडशी — विशिष्ट परम्पराओं में उनके षोडश-कलात्मक स्वरूप से संबद्ध नाम; तथा (४) त्रिपुरा — यथार्थ की त्रिविध संरचना से उनके संबंध को दर्शाने वाला नाम। उनका राजसी स्वरूप संप्रभुता को और सौम्य सौन्दर्य सृष्टि के सामंजस्यपूर्ण व मंगलमय आयाम को प्रकट करता है।\n३.१ चेतना और अभिव्यक्ति की एकता: अनेक श्रीविद्या परम्पराएँ अद्वैत शैव दार्शनिक ढाँचे को अपनाती हैं जिसमें चेतना और उसकी अभिव्यक्ति-शक्ति अविभाज्य हैं। प्रकट जगत देवी की शक्ति की ही अभिव्यक्ति है, यद्यपि उनका परम स्वरूप किसी भी सीमित रूप से परे है।\n३.२ त्रिपुरा का त्रिविध स्वरूप: ग्रन्थ और परम्परा के अनुसार "त्रिपुरा" की व्याख्या विविध त्रिक-संरचनाओं से की जाती है: (१) तीन लोक; (२) प्रमाता (ज्ञाता), प्रमाण (ज्ञान-प्रक्रिया) और प्रमेय (ज्ञेय); (३) सृष्टि, स्थिति और संहार; तथा (४) जाग्रत, स्वप्न और सुषुप्ति। अभिलेखागार में प्रत्येक त्रयी के विशिष्ट ग्रंथ या भाष्य का उल्लेख किया जाना चाहिए।\n३.३ सौन्दर्य, मांगल्य एवं संप्रभुता: इस धर्मशास्त्रीय दृष्टि में सौन्दर्य केवल बाह्य गुण नहीं है, अपितु यह सृष्टि की बोधगम्यता, सामरस्य और रचनात्मक पूर्णता की अभिव्यक्ति है। इसीलिए श्रीविद्या को केवल काली-उपासना का "सौम्य" प्रतिपक्ष कहना पर्याप्त नहीं है; इसका तत्त्वज्ञान अत्यंत गहन है और इसमें ध्यानात्मक तथा गूढ़ आनुष्ठानिक दोनों तत्त्व समाहित हैं।'
      },
      {
        headingEn: 'Part II (4, 5, 6, 7 & 8) — Śrīkula: The Śrīcakra, Mantra, Ritual & Jīvanmukti, Textual Sources & Safeguards',
        headingHi: 'भाग II (४, ५, ६, ७ एवं ८) — श्रीकुल: श्रीचक्र ज्यामिति, मन्त्र, जीवनमुक्ति, मूल ग्रंथ एवं शोध सावधानियाँ',
        bodyEn:
          '4. The Śrīcakra — geometry as a theological system: The Śrīcakra (Śrīyantra) is a complex sacred diagram made from interlocking triangles, surrounding geometric enclosures, lotus forms, and a central point known as the bindu.\nPrincipal components of the Śrīcakra: (a) The Bindu — The central point associated with unity, the concentrated presence of the Goddess, and the source from which multiplicity emerges; (b) The Interlocking Triangles — Composed of nine principal interlocking triangles, conventionally counted as five downward-pointing and four upward-pointing triangles, generating the complex network of smaller triangles; (c) Lotus Enclosures and the Outer Boundary — The surrounding lotus circles and square enclosure associated with differentiated powers, protective boundaries, and the organized relationship between the central deity and the cosmos; and (d) The Nine Enclosures (Āvaraṇas) — Associated with groups of deities, powers, and stages of contemplative or ritual engagement; their names and deity arrangements must be taken from specific authoritative ritual manuals rather than simplified diagrams.\n5. Mantra and the subtle form of the Goddess: In Śrīvidyā theology, a mantra is not simply a verbal description of the Goddess; it is understood as a subtle form through which her power and presence are encountered. The Śrīvidyā mantra traditions include the well-known Pañcadaśī (fifteenfold) and Ṣoḍaśī (sixteenfold) systems. A public research archive should explain the history, terminology, theological role, and textual context of mantra while distinguishing academic discussion from restricted lineage-specific initiatory instructions.\n6. Ritual, meditation, and liberation (Jīvanmukti): Śrīvidyā practices include external worship, mantra recitation, yantra worship, visualization, meditation, and philosophical contemplation. Modern scholarship (e.g., Anna A. Golovkova) has traced the development of Śrīvidyā from early ritual systems toward later philosophical interpretations that place greater emphasis on liberation during one’s lifetime (jīvanmukti).\n7. Textual sources and historical research: Starting points for a Śrīvidyā research collection include: (1) Vāmakeśvarīmata — An important early text associated with the development of the Tripurasundarī cult; (2) Yoginīhṛdaya — A major Śrīvidyā text exploring the theological and ritual significance of the Śrīcakra, mantra, and the Goddess; (3) Nityāṣoḍaśikārṇava — A foundational text associated with the Nityā tradition and broader Śrīvidyā history; (4) Paraśurāma Kalpasūtra — A ritual source associated with Śrīvidyā practice in particular traditions; and (5) Lalitā Sahasranāma — A widely revered hymn of a thousand names of Lalitā. These texts belong to different literary genres and historical contexts and should not be assumed to have identical authority in every lineage.\n8. What Śrīkula should not be reduced to: (1) Śrīkula is not merely a tradition of geometric diagrams; (2) The Śrīcakra is not just decorative sacred geometry, as it has a specific theological and ritual context; (3) Śrīvidyā is not exclusively a public devotional tradition, nor is it uniformly secretive; (4) All Śrīvidyā lineages do not share identical ritual procedures or philosophical interpretations; and (5) Tripurasundarī should not be reduced to a symbol of physical beauty or worldly prosperity alone.',
        bodyHi:
          '४. श्रीचक्र — एक धर्मशास्त्रीय प्रणाली के रूप में ज्यामिति: श्रीचक्र (श्रीयन्त्र) अंतर्ग्रथित त्रिकोणों, संकेंद्रित ज्यामितीय आवरणों, कमल-दलों और केंद्रीय बिन्दु से निर्मित एक पवित्र आरेख है।\nश्रीचक्र के प्रमुख घटक: (क) बिन्दु (The Bindu) — केंद्रीय बिन्दु जो एकत्व, देवी की घनीभूत उपस्थिति और बहुलता के उद्गम से संबद्ध है; (ख) अंतर्ग्रथित त्रिकोण (The Interlocking Triangles) — नौ मुख्य त्रिकोण (५ अधोमुखी और ४ ऊर्ध्वमुखी) जो छोटे त्रिकोणों के जटिल जाल का निर्माण करते हैं; (ग) कमल-वृत्त एवं बाहरी भूपुर — विभेदित शक्तियों, सुरक्षात्मक सीमाओं और केंद्रीय देवता व ब्रह्माण्ड के सुव्यवस्थित संबंध के प्रतीक; तथा (घ) नौ आवरण (Nine Āvaraṇas) — श्रीचक्र का वर्णन नौ आवरणों के माध्यम से होता है जो विशिष्ट देवता-समूहों और साधना के सोपानों से जुड़े हैं।\n५. मन्त्र एवं देवी का सूक्ष्म स्वरूप: श्रीविद्या धर्मशास्त्र में मन्त्र केवल देवी का शाब्दिक वर्णन नहीं है, अपितु वह सूक्ष्म स्वरूप है जिसके माध्यम से उनकी शक्ति और उपस्थिति का साक्षात्कार होता है। इसमें पञ्चदशी (१५-अक्षरी) और षोडशी (१६-अक्षरी) मन्त्र-प्रणालियाँ सुप्रसिद्ध हैं। एक सार्वजनिक शोध अभिलेखागार को दीक्षा-गम्य गोपनीय निर्देशों का प्रकाशन किए बिना मन्त्र के इतिहास, शब्दावली और ग्रंथीय संदर्भ की अकादमिक व्याख्या करनी चाहिए।\n६. अनुष्ठान, ध्यान एवं जीवनमुक्ति: श्रीविद्या में बाह्य पूजा, मन्त्र-जप, यन्त्र-अर्चन, ध्यान और दार्शनिक चिंतन शामिल हैं। आधुनिक शोध (जैसे अन्ना ए. गोलोवकोवा) ने प्रारंभिक आनुष्ठानिक प्रणालियों से परवर्ती दार्शनिक व्याख्याओं की ओर विकास को रेखांकित किया है, जहाँ "जीवनमुक्ति" पर विशेष बल दिया गया है।\n७. ग्रंथीय स्रोत एवं ऐतिहासिक शोध: (१) वामकेश्वरीमत — त्रिपुरसुन्दरी उपासना के विकास से संबद्ध प्रमुख प्रारंभिक ग्रन्थ; (२) योगिनीहृदय — श्रीचक्र, मन्त्र और देवी के धर्मशास्त्रीय व आनुष्ठानिक महत्त्व का विवेचन करने वाला मुख्य ग्रन्थ; (३) नित्याषोडशिकार्णव — नित्या परम्परा और श्रीविद्या के व्यापक इतिहास का आधारभूत ग्रन्थ; (४) परशुराम कल्पसूत्र — श्रीविद्या अनुष्ठान पद्धति का प्रमुख कल्पसूत्र; तथा (५) ललिता सहस्रनाम — ललिता के एक हजार नामों का सुप्रसिद्ध स्तोत्र।\n८. श्रीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए: (१) श्रीकुल केवल ज्यामितीय आकृतियों की परम्परा मात्र नहीं है; (२) श्रीचक्र केवल सजावटी पवित्र ज्यामिति नहीं है, इसका विशिष्ट धर्मशास्त्रीय और आनुष्ठानिक संदर्भ है; (३) श्रीविद्या न तो केवल सार्वजनिक भक्ति तक सीमित है और न ही सर्वत्र एकसमान रूप से गोपनीय है; (४) सभी श्रीविद्या परम्पराओं की पूजा-विधि या दार्शनिक व्याख्या एकसमान नहीं है; तथा (५) त्रिपुरसुन्दरी को केवल भौतिक सौन्दर्य या लौकिक समृद्धि के प्रतीक मात्र में सीमित नहीं किया जाना चाहिए।'
      },
      {
        headingEn: 'Part III — Comparing Kālīkula and Śrīkula: Are They Opposites?',
        headingHi: 'भाग III — कालीकुल और श्रीकुल की तुलना: क्या वे परस्पर विरोधी हैं?',
        bodyEn:
          'Are they opposites? Not in any absolute sense.\nBeyond the fierce vs. gentle binary: A common modern simplification portrays Kālīkula as fierce, dark, and destructive, while Śrīkula is portrayed as gentle, bright, and creative. The imagery can reflect real differences between particular forms of the Goddess, but the division becomes misleading when treated as a universal philosophical rule.\nContemplative depth and esoteric rigor in both streams: Kālī-centered traditions can be deeply contemplative and concerned with ultimate reality. Conversely, Śrīvidyā traditions can involve complex esoteric ritual, rigorous discipline, and sophisticated metaphysics.\nShared Śākta framework and interconnected history: The two streams share a wider Śākta framework in which the Goddess is central to understanding reality, ritual, and spiritual transformation. Their histories are interconnected, and their boundaries do not always correspond to a neat division between separate, mutually exclusive systems (see Part I Table 01 above for the 8-dimension comparative matrix).',
        bodyHi:
          'क्या वे परस्पर विरोधी हैं? किसी भी निरपेक्ष अर्थ में नहीं।\nउग्र बनाम सौम्य के सरल द्विभाजन से परे: एक सामान्य आधुनिक सरलीकरण कालीकुल को उग्र, अंधकारमय और संहारक तथा श्रीकुल को सौम्य, उज्ज्वल और सृजनात्मक के रूप में चित्रित करता है। यह दृश्य अंतर देवी के विशिष्ट रूपों की भिन्नता को तो दर्शा सकता है, किंतु जब इसे एक सार्वभौमिक दार्शनिक नियम मान लिया जाता है तब यह भ्रामक हो जाता है।\nदोनों धाराओं में दार्शनिक गहनता और आनुष्ठानिक अनुशासन: काली-केंद्रित परम्पराएँ अत्यंत चिंतनशील और परम यथार्थ के साक्षात्कार पर केंद्रित हो सकती हैं; दूसरी ओर, श्रीविद्या परम्पराओं में जटिल गूढ़ अनुष्ठान, कठोर अनुशासन और सूक्ष्म तत्त्वमीमांसा समाहित रहती है।\nसाझा शाक्त ढाँचा एवं अंतर्संबंधित इतिहास: दोनों ही धाराएँ एक व्यापक शाक्त ढाँचे को साझा करती हैं जिसमें यथार्थ, अनुष्ठान और आध्यात्मिक रूपांतरण को समझने के केंद्र में स्वयं देवी हैं। उनके इतिहास परस्पर जुड़े हुए हैं और उनकी सीमाएँ सदैव दो परस्पर अनन्य प्रणालियों के कठोर विभाजन से मेल नहीं खातीं (आठ आयामों की तुलनात्मक सारणी ऊपर भाग I की तालिका ०१ में दी गई है)।'
      },
      {
        headingEn: 'Part IV — Archival Presentation Structure, Dual Research Collections & Selected Bibliography',
        headingHi: 'भाग IV — अभिलेखीय प्रस्तुति संरचना, दो पृथक् शोध संग्रह एवं चयनित संदर्भ-सूची',
        bodyEn:
          'Dual Research Collection Architecture: Each tradition is given its own dedicated landing archive alongside this comparative synthesis: (1) Kālīkula Archive — The Goddess of Time, Transformation, and Dissolution (an index of Kālī-centered traditions, philosophical systems, iconography, textual sources, regional histories, and documented ritual contexts); and (2) Śrīkula Archive — The Goddess of Sovereignty, Manifestation, and Sacred Knowledge (an index of Śrīvidyā, Tripurasundarī, Śrīcakra traditions, mantra theology, historical texts, ritual systems, and philosophical commentaries).\nEight-Part Content Structure for Each Archive:\n1. Overview — definition, historical context, terminology, and principal concepts.\n2. Philosophy and theology — doctrines, interpretations, and conceptual frameworks.\n3. Deities and iconography — forms of the Goddess, attributes, symbols, and documented variations.\n4. Texts and manuscripts — primary sources, translations, commentaries, and bibliographic records.\n5. Ritual and practice — historically documented practices, with distinctions between public descriptions and lineage-specific instructions.\n6. Regional histories and lineages — geographical development, transmission, and variations between traditions.\n7. Comparative research — relationships with other Śākta, Śaiva, and Tantric traditions.\n8. References and evidence — citations, provenance, scholarly publications, and unresolved questions.\nSelected Bibliography for the Archive:\n1. Aleksandra Wenta — “From the Sequence of the Sun-Goddess to Time-Consumption”, Journal of Indian Philosophy, 2021: A peer-reviewed study of the twelve Kālīs, the Krama tradition, and the development of their philosophical interpretation.\n2. Douglas Renfrew Brooks — Auspicious Wisdom: The Texts and Traditions of Śrīvidyā Śākta Tantrism in South India, State University of New York Press, 1992: A major scholarly study of Śrīvidyā texts, ritual traditions, theology, and historical development.\n3. Anna A. Golovkova — “From Worldly Powers to Jīvanmukti”, The Journal of Hindu Studies, 2019: Examines changing understandings of ritual, liberation, and spiritual attainment in early Tripurasundarī traditions.\n4. Maciej Karasiński — “Śrī Vidyā”, Oxford Bibliographies in Hinduism, published 2025: A scholarly overview of Śrīvidyā’s history, terminology, texts, and changing ritual contexts.\nEditorial Recommendation: Label each page as a research synthesis and distinguish primary textual evidence from scholarly interpretation and contemporary practitioner explanations. For a website dedicated to serious Tantric research, that distinction makes the archive substantially more useful and credible than a collection of descriptions alone.',
        bodyHi:
          'दो पृथक् शोध संग्रहों की संरचना: इस तुलनात्मक संश्लेषण के साथ-साथ दोनों परम्पराओं के लिए स्वतंत्र शोध-पृष्ठ स्थापित किए गए हैं: (१) कालीकुल अभिलेखागार (Kālīkula Archive) — काल, रूपांतरण और लय की देवी (काली-केंद्रित परम्पराओं, दार्शनिक प्रणालियों, प्रतिमाशास्त्र, ग्रंथीय स्रोतों, क्षेत्रीय इतिहास और प्रमाणित आनुष्ठानिक संदर्भों की अनुक्रमणिका); तथा (२) श्रीकुल अभिलेखागार (Śrīkula Archive) — संप्रभुता, अभिव्यक्ति और पवित्र ज्ञान की देवी (श्रीविद्या, त्रिपुरसुन्दरी, श्रीचक्र परम्पराओं, मन्त्र-धर्मशास्त्र, ऐतिहासिक ग्रन्थों, पूजा-पद्धतियों और दार्शनिक भाष्यों की अनुक्रमणिका)।\nप्रत्येक अभिलेखागार के लिए ८-स्तरीय विषय-संरचना:\n१. अवलोकन (Overview) — परिभाषा, ऐतिहासिक संदर्भ, शब्दावली एवं प्रमुख अवधारणाएँ।\n२. दर्शन एवं धर्मशास्त्र (Philosophy and theology) — सिद्धांत, व्याख्याएँ एवं वैचारिक ढाँचे।\n३. देवता एवं प्रतिमाशास्त्र (Deities and iconography) — देवी के स्वरूप, आयुध, प्रतीक एवं प्रमाणित क्षेत्रीय भिन्नताएँ।\n४. ग्रन्थ एवं पाण्डुलिपियाँ (Texts and manuscripts) — प्राथमिक स्रोत, अनुवाद, भाष्य एवं ग्रंथ-विवरण।\n५. अनुष्ठान एवं साधना (Ritual and practice) — ऐतिहासिक रूप से प्रलेखित अभ्यास, सार्वजनिक विवरण और दीक्षा-आधारित निर्देशों के स्पष्ट भेद सहित।\n६. क्षेत्रीय इतिहास एवं परम्पराएँ (Regional histories and lineages) — भौगोलिक विकास, संप्रेषण और विभिन्न आम्नायों की विशेषताएँ।\n७. तुलनात्मक शोध (Comparative research) — अन्य शाक्त, शैव और तांत्रिक परम्पराओं के साथ अंतर्संबंध।\n८. संदर्भ एवं साक्ष्य (References and evidence) — उद्धरण, स्रोत-प्रामाणिकता, अकादमिक प्रकाशन एवं अनसुलझे प्रश्न।\nचयनित अकादमिक संदर्भ-सूची (Selected Bibliography):\n१. अलेक्ज़ांद्रा वेंटा (Aleksandra Wenta) — “From the Sequence of the Sun-Goddess to Time-Consumption”, Journal of Indian Philosophy, २०२१: द्वादश काली, क्रम परम्परा और उनकी दार्शनिक व्याख्या के विकास का समीक्षित अध्ययन।\n२. डगलस रेनफ्रू ब्रुक्स (Douglas Renfrew Brooks) — Auspicious Wisdom: The Texts and Traditions of Śrīvidyā Śākta Tantrism in South India, SUNY Press, १९९२: दक्षिण भारत में श्रीविद्या ग्रन्थों, अनुष्ठान परम्पराओं और धर्मशास्त्र का प्रमुख अध्ययन।\n३. अन्ना ए. गोलोवकोवा (Anna A. Golovkova) — “From Worldly Powers to Jīvanmukti”, The Journal of Hindu Studies, २०१९: प्रारंभिक त्रिपुरसुन्दरी परम्पराओं में अनुष्ठान और जीवनमुक्ति की अवधारणा के विकास का अध्ययन।\n४. माचिये करासिंस्की (Maciej Karasiński) — “Śrī Vidyā”, Oxford Bibliographies in Hinduism, २०२५: श्रीविद्या के इतिहास, शब्दावली, ग्रन्थों और आनुष्ठानिक संदर्भों का अकादमिक सर्वेक्षण।\nसंपादकीय अनुशंसा: प्रत्येक पृष्ठ को "शोध संश्लेषण" (Research Synthesis) के रूप में चिह्नित किया गया है तथा प्राथमिक ग्रंथीय साक्ष्य, अकादमिक व्याख्या और समकालीन साधक-विवरणों के बीच स्पष्ट अंतर रखा गया है।'
      }
    ],
    keyFindingsEn: [
      'Kālīkula ("family/lineage of Kālī") spans Bengali/eastern Indian Śākta traditions and the Kashmirian Krama current (Twelve Kālīs), focusing on Śakti as supreme reality, time (kāla), manifestation–dissolution cycles, and nondual recognition.',
      'Śrīkula ("family/lineage of Śrī") centers on Tripurasundarī (Lalitā, Rājarājeśvarī, Ṣoḍaśī) and Śrīvidyā across South India and Kashmir, integrating anthropomorphic form, Pañcadaśī/Ṣoḍaśī mantra, and the nine-enclosure Śrīcakra.',
      'Kālīkula and Śrīkula are not absolute binary opposites: Kālī-centered traditions include deep nondual contemplation, while Śrīvidyā encompasses complex esoteric ritual and metaphysics oriented toward jīvanmukti.',
      'Primary texts (Kālīkulakramasadbhāva, Jayadrathayāmala, Devīpañcaśataka, Tantrāloka; Vāmakeśvarīmata, Yoginīhṛdaya, Nityāṣoḍaśikārṇava, Paraśurāma Kalpasūtra, Lalitā Sahasranāma) are clearly distinguished from peer-reviewed scholarship (Wenta 2021; Brooks 1992; Golovkova 2019; Karasiński 2025).'
    ],
    keyFindingsHi: [
      'कालीकुल ("काली का कुल/परम्परा") में बंगाली/पूर्वी भारतीय शाक्त धाराएँ और कश्मीर की क्रम परम्परा (द्वादश काली) शामिल हैं, जो परम यथार्थ के रूप में शक्ति, काल, सृष्टि-लय चक्र और अद्वैत प्रत्यभिज्ञा पर केंद्रित हैं।',
      'श्रीकुल ("श्री का कुल/परम्परा") त्रिपुरसुन्दरी (ललिता, राजराजेश्वरी, षोडशी) और श्रीविद्या पर केंद्रित है, जो देवी विग्रह, पञ्चदशी/षोडशी मन्त्र और नव-आवरण श्रीचक्र को एक एकीकृत प्रणाली में जोड़ता है।',
      'कालीकुल और श्रीकुल निरपेक्ष विरोधी नहीं हैं: काली-परम्पराओं में गहन अद्वैत चिंतन है और श्रीविद्या में गूढ़ आनुष्ठानिक अनुशासन तथा जीवनमुक्ति-केंद्रित तत्त्वमीमांसा है।',
      'मूल संस्कृत ग्रन्थों (कालीकुलक्रमसद्भाव, जयद्रथयामल, देवीपञ्चशतक, तन्त्रालोक; वामकेश्वरीमत, योगिनीहृदय, नित्याषोडशिकार्णव, परशुराम कल्पसूत्र, ललिता सहस्रनाम) और आधुनिक अकादमिक शोध (वेंटा २०२१; ब्रुक्स १९९२; गोलोवकोवा २०१९; करासिंस्की २०२५) के बीच स्पष्ट अंतर रखा गया है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & Literal Meaning', labelHi: 'संस्कृत एवं शाब्दिक अर्थ', valueEn: 'कालीकुल (Kālīkula: Family/Lineage of Kālī) · श्रीकुल (Śrīkula: Family/Lineage of Śrī)', valueHi: 'कालीकुल (काली का कुल/परम्परा) · श्रीकुल (श्री का कुल/परम्परा)' },
      { labelEn: 'Editorial Classification', labelHi: 'संपादकीय वर्गीकरण', valueEn: 'Research Synthesis (Primary Texts · Scholarly Interpretation · Living Practice)', valueHi: 'शोध संश्लेषण (मूल ग्रन्थ · अकादमिक व्याख्या · साधना परम्परा)' },
      { labelEn: 'Primary Kālīkula Texts', labelHi: 'प्रमुख कालीकुल ग्रन्थ', valueEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka', valueHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक' },
      { labelEn: 'Primary Śrīkula Texts', labelHi: 'प्रमुख श्रीकुल ग्रन्थ', valueEn: 'Vāmakeśvarīmata · Yoginīhṛdaya · Nityāṣoḍaśikārṇava · Paraśurāma Kalpasūtra · Lalitā Sahasranāma', valueHi: 'वामकेश्वरीमत · योगिनीहृदय · नित्याषोडशिकार्णव · परशुराम कल्पसूत्र · ललिता सहस्रनाम' }
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
    titleEn: 'Part I — Kālīkula Archive: The Goddess of Time, Transformation, and Dissolution',
    titleHi: 'भाग I — कालीकुल अभिलेखागार: काल, रूपांतरण और लय की देवी',
    subtitleEn: 'Sanskrit: कालीकुल · Transliteration: Kālīkula · Literal meaning: The family, lineage, or tradition of Kālī — Definition, Philosophical Foundations, Iconography, Wider Traditions, Textual Sources & Methodological Distinctions',
    subtitleHi: 'संस्कृत: कालीकुल · लिप्यंतरण: Kālīkula · शाब्दिक अर्थ: काली का परिवार, वंश या परम्परा — परिभाषा, दार्शनिक आधार, प्रतिमाशास्त्र, प्रमुख धाराएँ, ग्रंथीय स्रोत एवं शोध सावधानियाँ',
    sanskritEpigraph: '॥ कालीकुलक्रमसद्भावः · कालं कलयते या तु सा काली परमा कला ॥',
    epigraphTranslationEn: '"Kālīkula Archive — An index of Kālī-centered traditions, philosophical systems, iconography, textual sources, regional histories, and documented ritual contexts."',
    epigraphTranslationHi: '"कालीकुल अभिलेखागार — काली-केंद्रित परम्पराओं, दार्शनिक प्रणालियों, प्रतिमाशास्त्र, ग्रंथीय स्रोतों, क्षेत्रीय इतिहास और प्रलेखित आनुष्ठानिक संदर्भों का शोध संश्लेषण।"',
    evidenceBadgeEn: 'PART I · KĀLĪKULA RESEARCH SYNTHESIS & ARCHIVE',
    evidenceBadgeHi: 'भाग I · कालीकुल शोध संश्लेषण एवं अभिलेखागार',
    accentColor: '#F43F5E',
    summaryEn:
      'Kālīkula (Sanskrit: कालीकुल — "The family, lineage, or tradition of Kālī") is a name used for Śākta Tantric traditions centered on Kālī and related forms of the Goddess. Rather than one universally standardized organization with a single scripture, ritual system, or theology, Kālīkula is a broad family of related traditions whose teachings developed across different regions and historical periods—some strongly associated with Bengal and eastern India, and others belonging to the medieval Tantric traditions of Kashmir, particularly the Krama current. In these traditions, Kālī can represent supreme consciousness, the power of time, the dynamic nature of existence, the dissolution of the universe, or the reality beyond ordinary distinctions.',
    summaryHi:
      'कालीकुल (संस्कृत: कालीकुल — "काली का परिवार, वंश या परम्परा") काली और उनसे संबंधित देवी-स्वरूपों पर केंद्रित शाक्त तांत्रिक परम्पराओं का नाम है। यह किसी एक शास्त्र, एक पूजा-पद्धति या एक धर्मशास्त्र वाला मानकीकृत संगठन नहीं है, अपितु विभिन्न क्षेत्रों और ऐतिहासिक कालखंडों में विकसित संबंधित परम्पराओं का एक व्यापक परिवार है—जिनमें से कुछ बंगाल और पूर्वी भारत से गहराई से जुड़ी हैं और अन्य कश्मीर की मध्यकालीन तांत्रिक परम्पराओं, विशेषतः "क्रम" धारा से संबद्ध हैं। इन परम्पराओं में काली सर्वोच्च चेतना, काल की शक्ति, अस्तित्व की गतिशील प्रकृति, ब्रह्माण्ड के लय और सामान्य भेदों से परे के परम यथार्थ का प्रतिनिधित्व करती हैं।',
    sections: [
      {
        headingEn: '1. Definition and Religious Significance',
        headingHi: '1. परिभाषा एवं धार्मिक महत्त्व (Definition and Religious Significance)',
        bodyEn:
          'Etymology of Kālīkula: Kālīkula is a name used for Śākta Tantric traditions centered on Kālī and related forms of the Goddess. The term combines Kālī, the Goddess, with kula, meaning family, lineage, group, or, in certain Tantric philosophical contexts, a larger interconnected whole.\nA broad family of related traditions: Kālīkula is not one universally standardized organization with a single scripture, ritual system, or theology. It is better understood as a broad family of related traditions whose teachings developed across different regions and historical periods. Some are strongly associated with Bengal and eastern India; others belong to the medieval Tantric traditions of Kashmir, particularly the Krama current.\nSupreme consciousness and the power of time: In these traditions, Kālī is not merely a goddess who destroys evil. Depending on the text and lineage, she can represent supreme consciousness, the power of time, the dynamic nature of existence, the dissolution of the universe, or the reality beyond ordinary distinctions.\nMultidimensional significance: The significance of Kālī therefore extends beyond her visual imagery. Her iconography, mythology, mantra traditions, and philosophical interpretations provide different ways of understanding the relationship between consciousness, creation, time, transformation, and liberation.',
        bodyHi:
          'कालीकुल की व्युत्पत्ति: कालीकुल नाम का प्रयोग काली और देवी के संबंधित स्वरूपों पर केंद्रित शाक्त तांत्रिक परम्पराओं के लिए किया जाता है। यह शब्द "काली" (देवी) और "कुल" (परिवार, वंश, समूह अथवा विशिष्ट तांत्रिक दार्शनिक संदर्भों में एक वृहत्तर अंतर्संबंधित समग्रता) के मेल से बना है।\nसंबंधित परम्पराओं का व्यापक परिवार: कालीकुल कोई एक सर्वत्र मानकीकृत संगठन नहीं है जिसका एक ही शास्त्र, एक ही अनुष्ठान-पद्धति या एक ही धर्मशास्त्र हो। इसे विभिन्न क्षेत्रों और ऐतिहासिक कालों में विकसित संबंधित परम्पराओं के एक व्यापक परिवार के रूप में समझा जाना चाहिए—जिनमें कुछ बंगाल और पूर्वी भारत से जुड़ी हैं तथा अन्य कश्मीर की मध्यकालीन तांत्रिक परम्पराओं, विशेषतः क्रम (Krama) धारा से संबद्ध हैं।\nसर्वोच्च चेतना एवं काल की शक्ति: इन परम्पराओं में काली केवल दुष्टों का विनाश करने वाली देवी मात्र नहीं हैं। ग्रन्थ और परम्परा के अनुसार वे सर्वोच्च चेतना, काल की शक्ति, अस्तित्व की गतिशील प्रकृति, ब्रह्माण्ड के विलय, अथवा साधारण भेदों से परे के परम यथार्थ का प्रतिनिधित्व करती हैं।\nबहुआयामी महत्त्व: इसलिए काली का महत्त्व केवल उनकी दृश्य प्रतिमा तक सीमित नहीं है। उनका प्रतिमाशास्त्र, पौराणिक आख्यान, मन्त्र-परम्पराएँ और दार्शनिक व्याख्याएँ चेतना, सृष्टि, काल, रूपांतरण और मुक्ति के अंतर्संबंध को समझने के विविध मार्ग प्रदान करती हैं।'
      },
      {
        headingEn: '2. The Philosophical Foundations of Kālīkula (2.1 to 2.4)',
        headingHi: '2. कालीकुल के दार्शनिक आधार (२.१ से २.४)',
        bodyEn:
          '2.1 Śakti as supreme reality: Śakti means power, capacity, or divine energy. In Śākta traditions, Śakti is not simply an instrument belonging to a separate male deity. She may be understood as the ultimate reality itself—the power through which existence manifests, continues, and returns to its source. In some nondual Tantric systems, Śiva and Śakti are inseparable aspects of reality: Śiva represents consciousness, while Śakti represents its dynamic, self-expressive power. This distinction is a philosophical framework, not necessarily a claim that the two are separate entities. Kālīkula traditions vary in how they formulate this relationship: some emphasize Kālī as the supreme Goddess beyond all categories; others explain her through more elaborate systems of manifestation, cognition, and dissolution.\n2.2 Kālī and time: The Sanskrit word kāla is associated with time and, in certain contexts, death. Kālī’s relationship with time is therefore a central theme in many interpretations of her name and mythology. In the Kashmirian Krama tradition, the Goddess is associated with cycles of manifestation, experience, and dissolution. A particularly important doctrine concerns the twelve Kālīs, whose sequence is interpreted in later philosophical texts as the unfolding and reabsorption of consciousness. This is more specific than simply describing Kālī as a destroyer: in this philosophical setting, what arises, is experienced, and disappears is understood in relation to the dynamic activity of consciousness itself.\n2.3 Creation and dissolution: Kālī’s destructive imagery is often interpreted through the larger cycle of existence: (1) Manifestation — reality appears in differentiated forms; (2) Experience — beings encounter and participate in the world; (3) Transformation — forms change and cease to remain as they were; (4) Dissolution — distinctions and manifested forms return to their source. These stages are a useful interpretive framework, not a single four-stage doctrine shared by every Kālīkula lineage; particular Tantric texts employ their own technical classifications.\n2.4 Liberation and recognition: Some nondual Śākta and Śaiva traditions understand liberation as a transformation in how reality is recognized and experienced. The practitioner seeks more than temporary supernatural benefits or favorable circumstances. In the Kashmirian Krama tradition, the sequence of the Goddess can be interpreted as the unfolding and reabsorption of awareness, where the aim is associated with realizing the nature of consciousness rather than remaining confined to ordinary, limited perception. This philosophical interpretation should not be automatically attributed to every Bengali Kālī worship tradition or every lineage that uses the name Kālīkula.',
        bodyHi:
          '२.१ परम यथार्थ के रूप में शक्ति (Śakti as supreme reality): शक्ति का अर्थ सामर्थ्य, क्षमता या दिव्य ऊर्जा है। शाक्त परम्पराओं में शक्ति किसी पृथक् पुरुष देवता का मात्र उपकरण नहीं हैं; वे स्वयं परम यथार्थ हैं—वह शक्ति जिसके द्वारा अस्तित्व प्रकट होता है, बना रहता है और अपने मूल स्रोत में लौटता है। कुछ अद्वैत तांत्रिक प्रणालियों में शिव और शक्ति यथार्थ के अविभाज्य पहलू हैं—शिव चेतना का और शक्ति उसकी गतिशील, स्व-अभिव्यंजक सामर्थ्य का प्रतिनिधित्व करती हैं। कालीकुल परम्पराओं में इस संबंध को विविध प्रकार से व्यक्त किया गया है: कुछ काली को समस्त श्रेणियों से परे सर्वोच्च देवी मानती हैं, तो अन्य उन्हें उन्मेष, संवेदन और विलय की विस्तृत प्रणालियों के माध्यम से समझाती हैं।\n२.२ काली और काल (Kālī and time): संस्कृत शब्द "काल" समय और मृत्यु से संबद्ध है। कश्मीर की क्रम परम्परा में देवी को अभिव्यक्ति, अनुभव और लय के चक्रों से जोड़ा गया है। इसमें "द्वादश काली" (बारह कालियों) का सिद्धांत विशेष महत्त्वपूर्ण है, जिनके अनुक्रम की व्याख्या परवर्ती दार्शनिक ग्रन्थों में चेतना के प्रकटन और पुनः समावेशन के रूप में की गई है। यहाँ जो कुछ भी उत्पन्न होता है, अनुभव किया जाता है और विलीन होता है, उसे स्वयं चेतना की गतिशील क्रिया के संदर्भ में समझा जाता है।\n२.३ सृष्टि और लय (Creation and dissolution): काली के संहारक प्रतीकों की व्याख्या अस्तित्व के वृहत्तर चक्र के माध्यम से की जाती है: (१) अभिव्यक्ति (Manifestation) — यथार्थ का विभेदित रूपों में प्रकट होना; (२) अनुभव (Experience) — जीवों का संसार से साक्षात्कार और सहभागिता; (३) रूपांतरण (Transformation) — रूपों का बदलना; तथा (४) लय (Dissolution) — भेदों और प्रकट रूपों का अपने मूल स्रोत में लौट जाना। ये चार चरण एक उपयोगी व्याख्यात्मक रूपरेखा हैं, न कि हर कालीकुल शाखा का एक ही निश्चित नियम।\n२.४ मुक्ति और प्रत्यभिज्ञा (Liberation and recognition): अद्वैत शाक्त और शैव परम्पराओं में मुक्ति को यथार्थ की पहचान और अनुभव के रूपांतरण के रूप में देखा जाता है, जहाँ साधक केवल अस्थायी चमत्कारिक लाभों से ऊपर उठता है। कश्मीरी क्रम परम्परा में देवी के अनुक्रम का उद्देश्य साधारण, सीमित बोध में बँधे रहने के बजाय चेतना के वास्तविक स्वरूप का साक्षात्कार करना है; किंतु इस दार्शनिक व्याख्या को स्वतः प्रत्येक बंगाली काली-उपासना परम्परा पर लागू नहीं माना जाना चाहिए।'
      },
      {
        headingEn: '3. Kālī: Iconography and Symbolism',
        headingHi: '3. काली: प्रतिमाशास्त्र एवं प्रतीकार्थ (Iconography and Symbolism)',
        bodyEn:
          'Dark or black complexion: Kālī is frequently depicted with a dark complexion. Devotional and theological interpretations associate this darkness with the boundless, the unmanifest, or a reality that cannot be contained by ordinary categories. Interpretations differ between texts and communities.\nGarland of heads and other fierce attributes: These features belong to particular iconographic forms of Kālī. They can be interpreted in relation to mortality, the destruction of ego, the transience of embodied existence, and the severing of limiting attachments. Specific meanings depend on the relevant textual and ritual context.\nKālī standing upon Śiva: In a widely recognized image, Kālī stands upon the reclining Śiva. The image is interpreted in different ways, including through the relationship between consciousness and dynamic power. Popular devotional narratives also connect it with Kālī’s cessation of destructive activity upon recognizing Śiva beneath her feet.\nCremation-ground imagery: Certain forms of Kālī are associated with cremation grounds and other liminal settings. These places confront practitioners and observers with impermanence, death, social boundaries, and the limits of ordinary identity. Their meanings differ across devotional, ritual, and philosophical traditions.\nResearch note: Iconographic descriptions should distinguish what is visibly represented from interpretations attributed to particular scriptures, commentaries, or living traditions. A symbol may carry several meanings rather than one universal explanation.',
        bodyHi:
          'श्यामल या कृष्ण वर्ण (Dark or black complexion): काली को प्रायः श्यामल या कृष्ण वर्ण में चित्रित किया जाता है। भक्तिमूलक और धर्मशास्त्रीय व्याख्याएँ इस श्यामता/अंधकार को असीम, अव्यक्त अथवा सामान्य श्रेणियों में न बँधने वाले परम यथार्थ से जोड़ती हैं। विभिन्न ग्रन्थों और समुदायों में इसकी व्याख्याएँ भिन्न हो सकती हैं।\nमुण्डमाला एवं अन्य उग्र लक्षण (Garland of heads and other fierce attributes): ये लक्षण काली के विशिष्ट प्रतिमा-रूपों से जुड़े हैं। इनकी व्याख्या नश्वरता, अहंकार के विनाश, देहधारी अस्तित्व की क्षणभंगुरता और सीमित करने वाली आसक्तियों के उच्छेदन के संबंध में की जाती है। विशिष्ट अर्थ संबंधित ग्रंथीय और आनुष्ठानिक संदर्भ पर निर्भर करते हैं।\nशिव के ऊपर खड़ी काली (Kālī standing upon Śiva): एक सुप्रसिद्ध प्रतिमा में काली लेटे हुए शिव के ऊपर खड़ी हैं। इस छवि की व्याख्या चेतना और गतिशील शक्ति के संबंध सहित विविध रूपों में की जाती है। लोकप्रिय भक्ति-आख्यान इसे अपने चरणों के नीचे शिव को पहचानने पर काली द्वारा संहारक गति को शांत करने से भी जोड़ते हैं।\nश्मशान-भूमि के प्रतीक (Cremation-ground imagery): काली के कुछ स्वरूप श्मशान और अन्य सीमांत स्थलों से संबद्ध हैं। ये स्थान साधकों और द्रष्टाओं को अनित्यता, मृत्यु, सामाजिक सीमाओं और साधारण पहचान की परिधि के आमने-सामने लाते हैं।\nशोध टिप्पणी (Research note): प्रतिमाशास्त्रीय विवरणों में यह स्पष्ट अंतर होना चाहिए कि दृश्य रूप में क्या दर्शाया गया है और विशिष्ट शास्त्रों, भाष्यों या जीवंत परम्पराओं में उसकी क्या व्याख्या की गई है।'
      },
      {
        headingEn: '4. Important Traditions Within the Wider Kālī-Centered Landscape',
        headingHi: '4. व्यापक काली-केंद्रित परिदृश्य की प्रमुख परम्पराएँ',
        bodyEn:
          'Non-sectarian research framework: Kālīkula should not be treated as a fixed list of subsects. The following are useful research areas, but they are not all interchangeable or necessarily separate branches of one formal organization.\nBengali Śākta traditions: Diverse devotional, philosophical, and Tantric approaches to Kālī and the Goddess, with important regional and historical variations.\nKashmirian Krama: A nondual Śākta-Śaiva current in which Kālī and her sequences are central to theories of consciousness and dissolution.\nMahāvidyā traditions: Kālī is one of the ten Mahāvidyās, a group of Goddess forms interpreted differently across Tantric texts and lineages.\nKaula traditions: Tantric traditions emphasizing lineage, initiation, ritual, and the relationship between the individual and the larger reality designated by kula. Some overlap with Kālī-centered worship.\nArchival significance of the Krama tradition: The Krama tradition is especially important for a research archive because its texts and philosophical commentaries document a sophisticated interpretation of Kālī beyond the more familiar popular iconography.',
        bodyHi:
          'शोध-दृष्टि: कालीकुल को उप-संप्रदायों की किसी एक निश्चित सूची के रूप में नहीं देखा जाना चाहिए। निम्नलिखित क्षेत्र शोध के लिए उपयोगी हैं, किंतु वे सभी एक-दूसरे के पर्याय या किसी एक ही औपचारिक संगठन की शाखाएँ नहीं हैं।\nबंगाली शाक्त परम्पराएँ (Bengali Śākta traditions): काली और देवी के प्रति विविध भक्तिमूलक, दार्शनिक और तांत्रिक दृष्टिकोण, जिनमें महत्त्वपूर्ण क्षेत्रीय और ऐतिहासिक भिन्नताएँ हैं।\nकश्मीरी क्रम परम्परा (Kashmirian Krama): एक अद्वैत शाक्त-शैव धारा जिसमें काली और उनके अनुक्रम (द्वादश काली) चेतना और लय के सिद्धांतों के केंद्र में हैं।\nमहाविद्या परम्पराएँ (Mahāvidyā traditions): काली दस महाविद्याओं में से एक हैं, जिनकी व्याख्या तांत्रिक ग्रन्थों और परम्पराओं में भिन्न-भिन्न प्रकार से होती है।\nकौल परम्पराएँ (Kaula traditions): वंश, दीक्षा, अनुष्ठान तथा व्यक्ति और "कुल" द्वारा निर्दिष्ट वृहत्तर यथार्थ के संबंध पर बल देने वाली तांत्रिक परम्पराएँ, जिनका काली-केंद्रित उपासना से गहरा जुड़ाव है।\nशोध अभिलेखागार के लिए क्रम परम्परा का महत्त्व: क्रम परम्परा एक शोध अभिलेखागार के लिए विशेष रूप से महत्त्वपूर्ण है क्योंकि इसके ग्रन्थ और दार्शनिक भाष्य लोकप्रिय प्रतिमाशास्त्र से परे काली की अत्यंत परिष्कृत दार्शनिक व्याख्या का प्रलेखन करते हैं।'
      },
      {
        headingEn: '5. Textual Sources and Historical Research',
        headingHi: '5. ग्रंथीय स्रोत एवं ऐतिहासिक शोध (Textual Sources and Historical Research)',
        bodyEn:
          'Distinguishing tiers of evidence: A serious Kālīkula archive should distinguish primary sources, scholarly interpretations, and modern devotional explanations.\nKālīkulakramasadbhāva: A Tantric text associated with the Kālī-centered Krama textual tradition.\nJayadrathayāmala: A major Tantric textual source relevant to the historical study of the Bhairava and Kālī-centered traditions.\nDevīpañcaśataka: A source examined in modern scholarship on the development of the twelve Kālīs.\nTantrāloka: Abhinavagupta’s major philosophical and ritual work, important for the later systematization of Krama and related Tantric doctrines.\nModern scholarship: Aleksandra Wenta’s peer-reviewed study (“From the Sequence of the Sun-Goddess to Time-Consumption”, Journal of Indian Philosophy, 2021) examines the historical development of the twelve Kālīs and the transformation of their interpretation from earlier Kula/Kaula contexts to later philosophical formulations.\nContextual caution: These works differ in scope and historical setting. They should not all be described as manuals for the same contemporary practice.',
        bodyHi:
          'साक्ष्यों के स्तरों में भेद: एक गंभीर कालीकुल अभिलेखागार को प्राथमिक स्रोतों, अकादमिक व्याख्याओं और आधुनिक भक्तिमूलक विवरणों के बीच स्पष्ट अंतर रखना चाहिए।\nकालीकुलक्रमसद्भाव (Kālīkulakramasadbhāva): काली-केंद्रित क्रम ग्रंथ-परम्परा से संबद्ध एक प्रमुख तांत्रिक ग्रन्थ।\nजयद्रथयामल (Jayadrathayāmala): भैरव और काली-केंद्रित परम्पराओं के ऐतिहासिक अध्ययन के लिए अत्यंत महत्त्वपूर्ण तांत्रिक यामल स्रोत।\nदेवीपञ्चशतक (Devīpañcaśataka): द्वादश काली के विकास पर आधुनिक अकादमिक शोध में परीक्षित एक प्रमुख मूल स्रोत।\nतन्त्रालोक (Tantrāloka): अभिनवगुप्त की प्रमुख दार्शनिक और आनुष्ठानिक कृति, जो क्रम और संबंधित तांत्रिक सिद्धांतों के परवर्ती व्यवस्थितीकरण के लिए अत्यंत महत्त्वपूर्ण है।\nआधुनिक अकादमिक शोध (Modern scholarship): अलेक्ज़ांद्रा वेंटा (Aleksandra Wenta, २०२१) का समीक्षित अध्ययन द्वादश काली के ऐतिहासिक विकास और प्रारंभिक कुल/कौल संदर्भों से परवर्ती दार्शनिक सूत्रों में उनके रूपांतरण का विश्लेषण करता है।\nऐतिहासिक सावधानी: ये कृतियाँ अपने विषय-क्षेत्र और ऐतिहासिक परिवेश में भिन्न हैं; इन सभी को एक ही समकालीन साधना की पूजा-पुस्तिकाओं के रूप में वर्णित नहीं किया जाना चाहिए।'
      },
      {
        headingEn: '6. What Kālīkula Should Not Be Reduced To & Archival Content Structure',
        headingHi: '6. कालीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए एवं अभिलेखीय संरचना',
        bodyEn:
          'Avoiding oversimplifications: A credible research presentation should avoid several oversimplifications:\n1. Not black magic: Kālīkula is not synonymous with black magic.\n2. Not uniformly transgressive: Kālī worship is not necessarily transgressive or associated with cremation-ground practices.\n3. Ritual diversity: Every Kālī-centered tradition does not follow the same ritual system.\n4. Twelve Kālīs vs. Ten Mahāvidyās: The twelve Kālīs of Kashmirian Krama should not be confused with the ten Mahāvidyās.\n5. Scientific vs. religious claims: Claims about supernatural powers or ritual effects should be presented as religious beliefs or textual claims, not as scientifically established facts.\nWhy these distinctions matter: Kālī’s popular image is only one part of a much wider religious and philosophical history.\nKālīkula Archive Eightfold Content Structure: (1) Overview — definition, historical context, terminology, and principal concepts; (2) Philosophy and theology — doctrines, interpretations, and conceptual frameworks; (3) Deities and iconography — forms of the Goddess, attributes, symbols, and documented variations; (4) Texts and manuscripts — primary sources, translations, commentaries, and bibliographic records; (5) Ritual and practice — historically documented practices, distinguishing public descriptions from lineage-specific instructions; (6) Regional histories and lineages — geographical development, transmission, and variations across Bengal, eastern India, and Kashmir; (7) Comparative research — relationships with Śrīkula, Śaiva, and Tantric traditions; and (8) References and evidence — citations, provenance, scholarly publications, and unresolved questions.',
        bodyHi:
          'अति-सरलीकरण से बचाव: एक विश्वसनीय शोध प्रस्तुति को निम्नलिखित सरलीकरणों से बचना चाहिए:\n१. काला जादू नहीं: कालीकुल काले जादू (अभिचार) का पर्याय नहीं है।\n२. सर्वत्र वाममार्गी या श्मशान-साधना नहीं: काली की उपासना अनिवार्य रूप से सीमांत या श्मशान-साधना से ही जुड़ी नहीं होती।\n३. आनुष्ठानिक विविधता: प्रत्येक काली-केंद्रित परम्परा एक ही अनुष्ठान-प्रणाली का पालन नहीं करती।\n४. द्वादश काली बनाम दशमहाविद्या: कश्मीरी क्रम परम्परा की "बारह कालियों" (द्वादश काली) को "दस महाविद्याओं" के साथ भ्रमित नहीं किया जाना चाहिए।\n५. धार्मिक विश्वास बनाम वैज्ञानिक तथ्य: अलौकिक शक्तियों या आनुष्ठानिक प्रभावों संबंधी दावों को धार्मिक विश्वास या ग्रंथीय कथन के रूप में प्रस्तुत किया जाना चाहिए, न कि वैज्ञानिक रूप से स्थापित तथ्य के रूप में।\nकालीकुल अभिलेखागार की ८-स्तरीय संरचना: (१) अवलोकन (Overview); (२) दर्शन एवं धर्मशास्त्र (Philosophy and theology); (३) देवता एवं प्रतिमाशास्त्र (Deities and iconography); (४) ग्रन्थ एवं पाण्डुलिपियाँ (Texts and manuscripts); (५) अनुष्ठान एवं अभ्यास (Ritual and practice); (६) क्षेत्रीय इतिहास एवं परम्पराएँ (Regional histories and lineages); (७) तुलनात्मक शोध (Comparative research); तथा (८) संदर्भ एवं साक्ष्य (References and evidence)।'
      }
    ],
    keyFindingsEn: [
      'Literal meaning of Kālīkula (कालीकुल): The family, lineage, or tradition of Kālī — encompassing diverse regional streams across Bengal, eastern India, and the medieval Kashmirian Krama current.',
      'Philosophical core: Examines Śakti as supreme reality, Kālī’s relationship with kāla (time), the Twelve Kālīs of Kashmirian Krama as the unfolding and reabsorption of consciousness, and liberation as transformative recognition.',
      'Primary source register: Kālīkulakramasadbhāva, Jayadrathayāmala, Devīpañcaśataka, and Abhinavagupta’s Tantrāloka, alongside peer-reviewed scholarship such as Aleksandra Wenta (2021).',
      'Methodological safeguard: Kālīkula is not synonymous with black magic, nor should the Twelve Kālīs of Krama be conflated with the Ten Mahāvidyās.'
    ],
    keyFindingsHi: [
      'कालीकुल का शाब्दिक अर्थ: काली का परिवार, वंश या परम्परा — जिसमें बंगाल व पूर्वी भारत की शाक्त धाराओं से लेकर कश्मीर की मध्यकालीन क्रम (Krama) परम्परा तक विविध धाराएँ समाहित हैं।',
      'दार्शनिक केंद्र: परम यथार्थ के रूप में शक्ति, काल (समय) के साथ काली का संबंध, चेतना के उन्मेष और लय के रूप में कश्मीर क्रम की द्वादश काली तथा प्रत्यभिज्ञा-मूलक मुक्ति।',
      'प्रमुख ग्रंथीय स्रोत: कालीकुलक्रमसद्भाव, जयद्रथयामल, देवीपञ्चशतक और अभिनवगुप्त का तन्त्रालोक, तथा अलेक्ज़ांद्रा वेंटा (२०२१) का समीक्षित अकादमिक शोध।',
      'पद्धतिगत सावधानी: कालीकुल काले जादू का पर्याय नहीं है, और कश्मीरी क्रम की द्वादश काली को दशमहाविद्या के साथ भ्रमित नहीं किया जाना चाहिए।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & Transliteration', labelHi: 'संस्कृत एवं लिप्यंतरण', valueEn: 'कालीकुल · Kālīkula', valueHi: 'कालीकुल · Kālīkula' },
      { labelEn: 'Literal Meaning', labelHi: 'शाब्दिक अर्थ', valueEn: 'The family, lineage, or tradition of Kālī', valueHi: 'काली का परिवार, वंश या परम्परा' },
      { labelEn: 'Primary Textual Sources', labelHi: 'मूल ग्रंथीय स्रोत', valueEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka', valueHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक' },
      { labelEn: 'Key Modern Scholarship', labelHi: 'प्रमुख आधुनिक शोध', valueEn: 'Aleksandra Wenta, Journal of Indian Philosophy (2021)', valueHi: 'अलेक्ज़ांद्रा वेंटा, Journal of Indian Philosophy (२०२१)' }
    ],
    primarySourcesEn: 'Kālīkulakramasadbhāva · Jayadrathayāmala · Devīpañcaśataka · Tantrāloka (Abhinavagupta) · Aleksandra Wenta (2021)',
    primarySourcesHi: 'कालीकुलक्रमसद्भाव · जयद्रथयामल · देवीपञ्चशतक · तन्त्रालोक (अभिनवगुप्त) · अलेक्ज़ांद्रा वेंटा (२०२१)',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'srikula-archive-tradition',
    categorySlug: 'eight-matrikas',
    code: 'SKT-01B',
    titleEn: 'Part II — Śrīkula Archive: The Goddess of Sovereignty, Manifestation, and Sacred Knowledge',
    titleHi: 'भाग II — श्रीकुल अभिलेखागार: संप्रभुता, अभिव्यक्ति और पवित्र ज्ञान की देवी',
    subtitleEn: 'Sanskrit: श्रीकुल · Transliteration: Śrīkula · Literal meaning: The family, lineage, or tradition of Śrī — Śrīvidyā, Tripurasundarī, Philosophy, Śrīcakra Geometry, Mantra, Jīvanmukti & Textual Sources',
    subtitleHi: 'संस्कृत: श्रीकुल · लिप्यंतरण: Śrīkula · शाब्दिक अर्थ: श्री का परिवार, वंश या परम्परा — श्रीविद्या, त्रिपुरसुन्दरी, दार्शनिक आधार, श्रीचक्र ज्यामिति, मन्त्र, जीवनमुक्ति एवं ग्रंथीय स्रोत',
    sanskritEpigraph: '॥ श्रीविद्या राजराजेश्वरी महात्रिपुरसुन्दरी · श्रीचक्र-नव-आवरण-रूपायै नमः ॥',
    epigraphTranslationEn: '"Śrīkula Archive — An index of Śrīvidyā, Tripurasundarī, Śrīcakra traditions, mantra theology, historical texts, ritual systems, and philosophical commentaries."',
    epigraphTranslationHi: '"श्रीकुल अभिलेखागार — श्रीविद्या, त्रिपुरसुन्दरी, श्रीचक्र परम्पराओं, मन्त्र-धर्मशास्त्र, ऐतिहासिक ग्रन्थों, अनुष्ठान प्रणालियों और दार्शनिक भाष्यों का शोध संश्लेषण।"',
    evidenceBadgeEn: 'PART II · ŚRĪKULA & ŚRĪVIDYĀ RESEARCH SYNTHESIS & ARCHIVE',
    evidenceBadgeHi: 'भाग II · श्रीकुल एवं श्रीविद्या शोध संश्लेषण एवं अभिलेखागार',
    accentColor: '#EC4899',
    summaryEn:
      'Śrīkula (Sanskrit: श्रीकुल — "The family, lineage, or tradition of Śrī") is a name used for Śākta Tantric traditions centered on Śrī, especially the Goddess Tripurasundarī, also known as Lalitā, Rājarājeśvarī, Ṣoḍaśī, and Tripurā. Its best-known associated tradition is Śrīvidyā ("auspicious knowledge" or "sacred wisdom"), in which the Goddess is worshipped through an integrated theological and ritual system uniting her anthropomorphic image, her mantra (Pañcadaśī / Ṣoḍaśī), and the nine-enclosure Śrīcakra (Śrīyantra). With a particularly significant history in South India and deep philosophical exchanges with Kashmir, Śrīkula encompasses external worship, internalized meditation, nondual metaphysics, and the pursuit of liberation during one’s lifetime (jīvanmukti).',
    summaryHi:
      'श्रीकुल (संस्कृत: श्रीकुल — "श्री का परिवार, वंश या परम्परा") "श्री" विशेषतः भगवती त्रिपुरसुन्दरी (जिन्हें ललिता, राजराजेश्वरी, षोडशी और त्रिपुरा भी कहा जाता है) पर केंद्रित शाक्त तांत्रिक परम्पराओं का नाम है। इससे जुड़ी सर्वाधिक प्रसिद्ध परम्परा "श्रीविद्या" ("मंगलमयी विद्या" या "पवित्र प्रज्ञा") है, जिसमें देवी की उपासना उनके साकार विग्रह, मन्त्र (पञ्चदशी / षोडशी) और नव-आवरण श्रीचक्र (श्रीयन्त्र) की एकीकृत धर्मशास्त्रीय और आनुष्ठानिक प्रणाली के माध्यम से की जाती है। दक्षिण भारत में सुदृढ़ ऐतिहासिक विकास और कश्मीर की शैव-शाक्त दार्शनिक परम्पराओं के साथ गहरे संवाद से युक्त श्रीकुल में बाह्य पूजा, अंतर्मुखी ध्यान, अद्वैत तत्त्वमीमांसा और "जीवनमुक्ति" का चिंतन समाहित है।',
    sections: [
      {
        headingEn: '1. Definition and Religious Significance',
        headingHi: '1. परिभाषा एवं धार्मिक महत्त्व (Definition and Religious Significance)',
        bodyEn:
          'Śrīkula and Śrīvidyā: Śrīkula is a name used for Śākta Tantric traditions centered on Śrī, especially the Goddess Tripurasundarī, also known as Lalitā and Rājarājeśvarī. Its best-known associated tradition is Śrīvidyā, whose name is commonly translated as “auspicious knowledge” or “sacred wisdom.”\nIntegrated triad of image, mantra, and Śrīcakra: In Śrīvidyā, the Goddess is worshipped through interconnected forms that include her anthropomorphic image, her mantra, and the Śrīcakra or Śrīyantra. These are not simply three unrelated objects; they form an integrated theological and ritual system.\nHistorical geography across South India and Kashmir: Śrīkula traditions have had a particularly significant history in South India, while also developing through exchanges with Kashmirian Śaiva and Śākta philosophical traditions. Their history includes different forms of ritual practice, textual interpretation, temple worship, meditation, and devotional observance.\nA family of related traditions: As with Kālīkula, Śrīkula is not a single uniform organization. The term is most useful when discussing a family of related Goddess-centered traditions, especially the Śrīvidyā current.',
        bodyHi:
          'श्रीकुल एवं श्रीविद्या: श्रीकुल नाम का प्रयोग "श्री", विशेषतः भगवती त्रिपुरसुन्दरी (जिन्हें ललिता और राजराजेश्वरी भी कहा जाता है) पर केंद्रित शाक्त तांत्रिक परम्पराओं के लिए किया जाता है। इससे संबद्ध सर्वाधिक प्रसिद्ध परम्परा "श्रीविद्या" है, जिसका सामान्य अर्थ "मंगलमयी विद्या" या "पवित्र प्रज्ञा" है।\nविग्रह, मन्त्र और श्रीचक्र की एकीकृत प्रणाली: श्रीविद्या में देवी की उपासना उनके मानवीय (साकार) विग्रह, उनके मन्त्र और श्रीचक्र या श्रीयन्त्र के परस्पर संबद्ध रूपों के माध्यम से की जाती है। ये केवल तीन अलग-अलग वस्तुएँ नहीं हैं, अपितु एक एकीकृत धर्मशास्त्रीय और आनुष्ठानिक प्रणाली का निर्माण करते हैं।\nदक्षिण भारत एवं कश्मीर में ऐतिहासिक विकास: दक्षिण भारत में श्रीकुल परम्पराओं का विशेष रूप से महत्त्वपूर्ण इतिहास रहा है, साथ ही कश्मीर की शैव और शाक्त दार्शनिक परम्पराओं के साथ आदान-प्रदान के माध्यम से भी इनका विकास हुआ है।\nसंबंधित परम्पराओं का परिवार: कालीकुल की भाँति श्रीकुल भी कोई एक एकसमान संगठन नहीं है; यह शब्द संबंधित देवी-केंद्रित परम्पराओं के परिवार, विशेषतः श्रीविद्या धारा की चर्चा के लिए सर्वाधिक उपयोगी है।'
      },
      {
        headingEn: '2. Tripurasundarī: The Central Goddess',
        headingHi: '2. त्रिपुरसुन्दरी: केंद्रीय देवी (Tripurasundarī: The Central Goddess)',
        bodyEn:
          'Meaning of Tripurasundarī: The name Tripurasundarī is commonly translated as “the Beauty of the Three Cities” or “the Beauty of the Three Worlds,” depending on the interpretive context.\nPrincipal names and aspects: She is also known by names such as: (1) Lalitā — the graceful or playful Goddess; (2) Rājarājeśvarī — the sovereign of sovereigns; (3) Ṣoḍaśī — a name associated with her sixteenfold aspect in particular traditions; and (4) Tripurā — a related name emphasizing her connection with the threefold structure of reality.\nSupreme manifestation of Śakti: The precise theological relationships among these names vary across texts and lineages. In Śrīvidyā, Tripurasundarī is understood as a supreme manifestation of Śakti rather than merely one deity among many.\nSovereignty, beauty, and transcendence: Her royal imagery communicates sovereignty, while her beauty and benevolent appearance express the harmonious, creative, and auspicious dimensions of the Goddess. These qualities are not necessarily opposed to her transcendence: in Śrīvidyā theology, the supreme reality can manifest as both the source of the cosmos and an accessible object of devotion.',
        bodyHi:
          'त्रिपुरसुन्दरी नाम का अर्थ: व्याख्यात्मक संदर्भ के अनुसार "त्रिपुरसुन्दरी" नाम का अनुवाद सामान्यतः "तीनों पुरों की सुन्दरी" या "तीनों लोकों की सुन्दरी" के रूप में किया जाता है।\nप्रमुख नाम एवं आयाम: उन्हें इन नामों से भी जाना जाता है: (१) ललिता — ललित, अनुग्रहपूर्ण या लीलामयी देवी; (२) राजराजेश्वरी — राजाओं के भी राजा की अधीश्वरी (सर्वोच्च साम्राज्ञी); (३) षोडशी — विशिष्ट परम्पराओं में उनके सोलह कलाओं वाले स्वरूप से संबद्ध नाम; तथा (४) त्रिपुरा — यथार्थ की त्रिविध संरचना के साथ उनके संबंध को रेखांकित करने वाला नाम।\nशक्ति की सर्वोच्च अभिव्यक्ति: विभिन्न ग्रन्थों और आम्नायों में इन नामों के सूक्ष्म धर्मशास्त्रीय संबंधों में विविधता मिलती है। श्रीविद्या में त्रिपुरसुन्दरी को अनेक देवताओं में से मात्र एक देवी के बजाय पराशक्ति की सर्वोच्च अभिव्यक्ति के रूप में समझा जाता है।\nसंप्रभुता, सौन्दर्य एवं लोकातीत स्वरूप: उनका राजसी रूप संप्रभुता को संप्रेषित करता है, जबकि उनका सौन्दर्य और सौम्य स्वरूप देवी के सामंजस्यपूर्ण, सृजनात्मक और मंगलमय आयामों को व्यक्त करता है। श्रीविद्या धर्मशास्त्र में परम यथार्थ ब्रह्माण्ड के मूल स्रोत और भक्ति के सुलभ आलंबन—दोनों रूपों में प्रकट हो सकता है।'
      },
      {
        headingEn: '3. The Philosophical Foundations of Śrīkula (3.1 to 3.3)',
        headingHi: '3. श्रीकुल के दार्शनिक आधार (३.१ से ३.३)',
        bodyEn:
          '3.1 The unity of consciousness and manifestation: Many Śrīvidyā traditions draw on nondual Śaiva philosophical frameworks in which consciousness and its power of manifestation are inseparable. The universe is not always treated as something entirely separate from the Goddess; rather, the manifested world can be understood as an expression of her power, while her ultimate nature exceeds any particular form or manifestation. The precise philosophical explanation differs among teachers and textual traditions: some emphasize nondual metaphysics, while others integrate Śākta worship with Vedāntic interpretations.\n3.2 The threefold nature of Tripurā: The name Tripurā invites interpretation through threefold structures, which are prominent in Indian philosophical and Tantric systems. Depending on the text and lineage, these may include: (1) The three worlds; (2) The knower, the act of knowing, and the known; (3) Creation, preservation, and dissolution; and (4) Waking, dreaming, and deep sleep. These are examples of interpretive correspondences, not a single universally fixed list of meanings. An archive should identify the particular text or commentary that establishes each correspondence rather than presenting every triad as canonical Śrīvidyā doctrine.\n3.3 Beauty, auspiciousness, and sovereignty: Tripurasundarī’s iconography frequently emphasizes beauty, radiance, royal authority, and auspiciousness. In this theological setting, beauty is not merely a superficial quality; it can express the intelligibility, harmony, and creative fullness of manifestation. The Goddess is portrayed as sovereign over the cosmos while remaining its inner power and source. This is one reason Śrīvidyā is not adequately described as simply the “gentle” counterpart to Kālī worship: its theology is sophisticated, and its ritual traditions include both contemplative and more complex esoteric elements.',
        bodyHi:
          '३.१ चेतना और अभिव्यक्ति की एकता (The unity of consciousness and manifestation): अनेक श्रीविद्या परम्पराएँ अद्वैत शैव दार्शनिक ढाँचे से जुड़ती हैं जहाँ चेतना और उसकी अभिव्यक्ति-शक्ति अविभाज्य हैं। ब्रह्माण्ड को देवी से पूर्णतः पृथक् वस्तु के रूप में नहीं देखा जाता; प्रत्युत प्रकट जगत को उनकी शक्ति की अभिव्यक्ति माना जाता है, जबकि उनका परम स्वरूप किसी भी विशेष रूप से परे है। कुछ आचार्य अद्वैत तत्त्वमीमांसा पर बल देते हैं, जबकि अन्य शाक्त उपासना को वेदान्तिक व्याख्याओं के साथ समन्वित करते हैं।\n३.२ त्रिपुरा का त्रिविध स्वरूप (The threefold nature of Tripurā): "त्रिपुरा" नाम भारतीय दर्शन और तन्त्र में प्रमुख त्रिविध संरचनाओं के माध्यम से व्याख्या को आमंत्रित करता है। ग्रन्थ और परम्परा के अनुसार इनमें शामिल हैं: (१) तीन लोक; (२) ज्ञाता (प्रमाता), ज्ञान-प्रक्रिया (प्रमाण) और ज्ञेय (प्रमेय); (३) सृष्टि, स्थिति और लय; तथा (४) जाग्रत, स्वप्न और सुषुप्ति। एक शोध अभिलेखागार को प्रत्येक त्रयी को सार्वभौमिक सिद्धांत मानने के बजाय उस विशिष्ट ग्रन्थ या भाष्य की पहचान करनी चाहिए जो उस सह-संबंध को स्थापित करता है।\n३.३ सौन्दर्य, मांगल्य एवं संप्रभुता (Beauty, auspiciousness, and sovereignty): त्रिपुरसुन्दरी के प्रतिमाशास्त्र में सौन्दर्य, तेज, राजकीय अधिकार और मांगल्य पर विशेष बल है। यहाँ सौन्दर्य कोई बाह्य या सतही गुण नहीं है; यह सृष्टि की बोधगम्यता, सामरस्य और रचनात्मक पूर्णता को व्यक्त करता है। यही कारण है कि श्रीविद्या को केवल काली-उपासना का "सौम्य" रूप कह देना पर्याप्त नहीं है; इसका धर्मशास्त्र अत्यंत परिष्कृत है और इसमें ध्यानात्मक व गूढ़ आनुष्ठानिक दोनों आयाम शामिल हैं।'
      },
      {
        headingEn: '4. The Śrīcakra: Geometry as a Theological System',
        headingHi: '4. श्रीचक्र: एक धर्मशास्त्रीय प्रणाली के रूप में ज्यामिति',
        bodyEn:
          'Defining symbol of Śrīvidyā: The Śrīcakra, also called the Śrīyantra, is one of the defining symbols of Śrīvidyā. It is a complex sacred diagram made from interlocking triangles, surrounding geometric enclosures, lotus forms, and a central point known as the bindu. Its details and ritual interpretation are elaborated in specific Śrīvidyā texts and traditions.\nThe Bindu: The central point is associated with unity, the concentrated presence of the Goddess, and the source from which multiplicity emerges. Its exact interpretation depends on the relevant doctrinal and ritual framework.\nThe Interlocking Triangles: The central triangular structure is traditionally composed of nine principal interlocking triangles, conventionally counted as five downward-pointing and four upward-pointing triangles. Together they generate the complex network of smaller triangles associated with the diagram.\nLotus Enclosures and the Outer Boundary: The surrounding lotus circles and square enclosure form part of the Śrīcakra’s layered structure. Their arrangement is associated with differentiated powers, protective boundaries, and the organized relationship between the central deity and the surrounding cosmos.\nThe Nine Enclosures (Āvaraṇas): The Śrīcakra is commonly described through nine enclosures, called āvaraṇas. Śrīvidyā ritual and textual traditions associate these enclosures with groups of deities, powers, and stages of contemplative or ritual engagement. The ninefold structure is important, but the names, deity arrangements, and interpretive details should be taken from a specific authoritative ritual manual or textual tradition; a simplified diagram should not be mistaken for a complete ritual prescription.',
        bodyHi:
          'श्रीविद्या का प्रमुख प्रतीक: श्रीचक्र, जिसे श्रीयन्त्र भी कहा जाता है, श्रीविद्या के सर्वाधिक महत्त्वपूर्ण प्रतीकों में से एक है। यह अंतर्ग्रथित त्रिकोणों, संकेंद्रित ज्यामितीय आवरणों, कमल-आकृतियों और "बिन्दु" नामक केंद्रीय बिंदु से निर्मित एक जटिल पवित्र आरेख है।\nकेन्द्रीय बिन्दु (The Bindu): केंद्रीय बिन्दु एकत्व, देवी की घनीभूत उपस्थिति और उस मूल स्रोत से संबद्ध है जहाँ से बहुलता का आविर्भाव होता है।\nअंतर्ग्रथित त्रिकोण (The Interlocking Triangles): केंद्रीय त्रिकोणीय संरचना पारंपरिक रूप से नौ मुख्य अंतर्ग्रथित त्रिकोणों से बनी है, जिन्हें ५ अधोमुखी और ४ ऊर्ध्वमुखी त्रिकोणों के रूप में गिना जाता है। ये मिलकर छोटे त्रिकोणों के जटिल जाल का निर्माण करते हैं।\nकमल-आवरण एवं बाहरी सीमा (Lotus Enclosures and the Outer Boundary): चारों ओर के कमल-वृत्त और वर्गाकार भूपुर श्रीचक्र की स्तरीय संरचना के अंग हैं, जो विभेदित शक्तियों, रक्षक सीमाओं और केंद्रीय देवता व ब्रह्माण्ड के सुव्यवस्थित संबंध से जुड़े हैं।\nनौ आवरण (The Nine Enclosures / Āvaraṇas): श्रीचक्र का वर्णन सामान्यतः नौ आवरणों के माध्यम से किया जाता है। श्रीविद्या के आनुष्ठानिक और ग्रंथीय स्रोत इन आवरणों को विशिष्ट देवता-समूहों, शक्तियों और ध्यान/पूजा के सोपानों से जोड़ते हैं। इनके नाम, देवता-विन्यास और विवरण किसी प्रामाणिक कल्पसूत्र या मूल ग्रन्थ से लिए जाने चाहिए; किसी सरलीकृत चित्र को संपूर्ण पूजा-विधान नहीं मान लेना चाहिए।'
      },
      {
        headingEn: '5. Mantra & Subtle Form · 6. Ritual, Meditation, and Liberation (Jīvanmukti)',
        headingHi: '5. मन्त्र एवं देवी का सूक्ष्म स्वरूप · 6. अनुष्ठान, ध्यान एवं जीवनमुक्ति',
        bodyEn:
          '5. Mantra and the subtle form of the Goddess: Mantra is central to Śrīvidyā. In its theological framework, a mantra is not simply a verbal description of the Goddess; it is understood as a form through which her power and presence are encountered.\nPañcadaśī and Ṣoḍaśī systems: The Śrīvidyā mantra traditions include the well-known Pañcadaśī and Ṣoḍaśī systems, referring to fifteenfold and sixteenfold mantra structures respectively, though their exact forms and interpretations vary across lineages.\nAcademic discussion vs. initiatory transmission: A distinction is necessary between discussing these systems academically and publishing restricted mantra instructions. Some forms of Śrīvidyā mantra practice are transmitted through initiation, and details differ among lineages. For a public research archive, it is appropriate to explain the history, terminology, theological role, and textual context of mantra without presenting every lineage-specific practice as universally available.\n6. Ritual, meditation, and liberation: Śrīvidyā has developed a range of practices that can include external worship, mantra recitation, yantra worship, visualization, meditation, and philosophical contemplation. Some ritual systems emphasize the performance of prescribed external rites; others give particular importance to internalized worship and the realization of the Goddess within consciousness.\nHistorical shift toward Jīvanmukti: Modern scholarship (notably Anna A. Golovkova, 2019) has traced the development of Śrīvidyā from early ritual systems toward later philosophical interpretations that place greater emphasis on liberation during one’s lifetime, known as jīvanmukti. This is a historical development documented in particular textual traditions, not a claim that every Śrīvidyā lineage follows an identical path. Śrīvidyā therefore encompasses more than ritual prosperity or worldly benefits; its textual traditions address knowledge, the nature of reality, devotion, and spiritual liberation.',
        bodyHi:
          '५. मन्त्र एवं देवी का सूक्ष्म स्वरूप: श्रीविद्या में मन्त्र का केंद्रीय स्थान है। इसके धर्मशास्त्रीय ढाँचे में मन्त्र केवल देवी का शाब्दिक वर्णन नहीं है, अपितु वह स्वरूप है जिसके माध्यम से उनकी शक्ति और उपस्थिति का साक्षात्कार किया जाता है।\nपञ्चदशी एवं षोडशी प्रणालियाँ: श्रीविद्या मन्त्र-परम्पराओं में सुप्रसिद्ध पञ्चदशी (१५-अक्षरी/खंडीय) और षोडशी (१६-अक्षरी/खंडीय) प्रणालियाँ शामिल हैं, यद्यपि विभिन्न आम्नायों में इनके स्वरूप और व्याख्याओं में भिन्नता मिलती है।\nअकादमिक चर्चा बनाम दीक्षा-परम्परा: इन प्रणालियों की अकादमिक चर्चा करने और दीक्षा-गम्य प्रतिबंधित मन्त्र-निर्देशों को प्रकाशित करने के बीच अंतर रखना आवश्यक है। सार्वजनिक शोध अभिलेखागार के लिए यह उपयुक्त है कि वह प्रत्येक परम्परा-विशिष्ट साधना को सर्वसुलभ बताए बिना मन्त्र के इतिहास, शब्दावली, धर्मशास्त्रीय भूमिका और ग्रंथीय संदर्भ को स्पष्ट करे।\n६. अनुष्ठान, ध्यान एवं मुक्ति (Ritual, meditation, and liberation): श्रीविद्या में बाह्य पूजा, मन्त्र-जप, यन्त्र-अर्चन, ध्यान, भावना और दार्शनिक चिंतन की विस्तृत शृंखला विकसित हुई है। कुछ प्रणालियाँ निर्धारित बाह्य अनुष्ठानों के संपादन पर बल देती हैं, जबकि अन्य अंतर्मुखी पूजा (अंतर्याग) और चेतना के भीतर देवी के साक्षात्कार को विशेष महत्त्व देती हैं।\nजीवनमुक्ति की ओर ऐतिहासिक विकास: आधुनिक अकादमिक शोध (विशेषतः अन्ना ए. गोलोवकोवा, २०१९) ने प्रारंभिक आनुष्ठानिक प्रणालियों से परवर्ती दार्शनिक व्याख्याओं की ओर श्रीविद्या के विकास को रेखांकित किया है, जहाँ इसी जीवन में मुक्ति ("जीवनमुक्ति") पर अधिक बल दिया गया है। इस प्रकार श्रीविद्या केवल लौकिक समृद्धि तक सीमित नहीं है, अपितु ज्ञान, यथार्थ के स्वरूप, भक्ति और आध्यात्मिक मुक्ति का विवेचन करती है।'
      },
      {
        headingEn: '7. Textual Sources and Historical Research · 8. What Śrīkula Should Not Be Reduced To',
        headingHi: '7. ग्रंथीय स्रोत एवं ऐतिहासिक शोध · 8. श्रीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए',
        bodyEn:
          '7. Textual sources and historical research: Foundational sources for a Śrīvidyā research collection include:\n(1) Vāmakeśvarīmata — An important early text associated with the development of the Tripurasundarī cult.\n(2) Yoginīhṛdaya — A major Śrīvidyā text that explores the theological and ritual significance of the Śrīcakra, mantra, and the Goddess.\n(3) Nityāṣoḍaśikārṇava — A foundational text associated with the Nityā tradition and the broader textual history of Śrīvidyā.\n(4) Paraśurāma Kalpasūtra — A ritual source associated with Śrīvidyā practice in particular traditions.\n(5) Lalitā Sahasranāma — A widely revered hymn of a thousand names of Lalitā, important to devotional and theological presentations of the Goddess.\nGenre and lineage context: These texts belong to different literary genres and historical contexts. They should not be treated as identical sources or assumed to have the same authority in every lineage.\n8. What Śrīkula should not be reduced to:\n(1) Not merely geometric diagrams: Śrīkula is not merely a tradition of geometric diagrams.\n(2) Theological context of the Śrīcakra: The Śrīcakra is not just decorative sacred geometry; it has a specific theological and ritual context.\n(3) Public and initiatory dimensions: Śrīvidyā is not exclusively a public devotional tradition, nor is it uniformly secretive.\n(4) Lineage diversity: All Śrīvidyā lineages do not share identical ritual procedures or philosophical interpretations.\n(5) Beyond physical beauty or prosperity alone: Tripurasundarī should not be reduced to a symbol of physical beauty or worldly prosperity alone. A scholarly archive should preserve the relationship between iconography, ritual, philosophy, historical texts, and living practice.\nŚrīkula Archive Eightfold Content Structure: (1) Overview; (2) Philosophy and theology; (3) Deities and iconography; (4) Texts and manuscripts; (5) Ritual and practice; (6) Regional histories and lineages; (7) Comparative research; and (8) References and evidence (including Brooks 1992; Golovkova 2019; Karasiński 2025).',
        bodyHi:
          '७. ग्रंथीय स्रोत एवं ऐतिहासिक शोध: श्रीविद्या शोध संग्रह के लिए आधारभूत ग्रन्थ निम्नलिखित हैं:\n(१) वामकेश्वरीमत (Vāmakeśvarīmata) — त्रिपुरसुन्दरी उपासना के विकास से संबद्ध एक महत्त्वपूर्ण प्रारंभिक ग्रन्थ।\n(२) योगिनीहृदय (Yoginīhṛdaya) — एक प्रमुख श्रीविद्या ग्रन्थ जो श्रीचक्र, मन्त्र और देवी के धर्मशास्त्रीय एवं आनुष्ठानिक महत्त्व का गहन अन्वेषण करता है।\n(३) नित्याषोडशिकार्णव (Nityāṣoḍaśikārṇava) — नित्या परम्परा और श्रीविद्या के व्यापक ग्रंथीय इतिहास से संबद्ध आधारभूत तन्त्र।\n(४) परशुराम कल्पसूत्र (Paraśurāma Kalpasūtra) — विशिष्ट परम्पराओं में श्रीविद्या अनुष्ठान-पद्धति का प्रमुख कल्पसूत्र।\n(५) ललिता सहस्रनाम (Lalitā Sahasranāma) — ललिता के एक हजार नामों का अत्यंत समादृत स्तोत्र, जो देवी की भक्तिमूलक और धर्मशास्त्रीय प्रस्तुति के लिए महत्त्वपूर्ण है।\nसाहित्यिक विधा एवं प्रामाणिकता: ये ग्रन्थ विभिन्न साहित्यिक विधाओं और ऐतिहासिक संदर्भों से संबंधित हैं; इन्हें एकसमान स्रोत नहीं माना जाना चाहिए।\n८. श्रीकुल को किन सरलीकरणों में सीमित नहीं किया जाना चाहिए:\n(१) मात्र ज्यामितीय आकृतियाँ नहीं: श्रीकुल केवल ज्यामितीय आरेखों की परम्परा मात्र नहीं है।\n(२) श्रीचक्र का धर्मशास्त्रीय संदर्भ: श्रीचक्र केवल सजावटी पवित्र ज्यामिति नहीं है; इसका एक विशिष्ट धर्मशास्त्रीय और आनुष्ठानिक संदर्भ है।\n(३) सार्वजनिक एवं दीक्षा-गम्य आयाम: श्रीविद्या न तो केवल सार्वजनिक भक्ति परम्परा है और न ही सर्वत्र एकसमान रूप से गोपनीय है।\n(४) आम्नाय एवं परम्परा विविधता: सभी श्रीविद्या परम्पराएँ एकसमान पूजा-विधि या दार्शनिक व्याख्या साझा नहीं करतीं।\n(५) केवल भौतिक सौन्दर्य या समृद्धि तक सीमित नहीं: त्रिपुरसुन्दरी को मात्र भौतिक सौन्दर्य या सांसारिक समृद्धि के प्रतीक में सीमित नहीं किया जाना चाहिए। एक अकादमिक अभिलेखागार को प्रतिमाशास्त्र, अनुष्ठान, दर्शन, ऐतिहासिक ग्रन्थों और जीवंत साधना के अंतर्संबंध को सुरक्षित रखना चाहिए।'
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

