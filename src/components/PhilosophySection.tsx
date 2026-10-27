import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Radio,
  Zap,
  Thermometer,
  Droplet,
  Layers,
  Eye,
  ArrowLeft,
  ArrowRight,
  Compass,
  BookOpen,
  Flame,
  Sparkles,
  Shield,
  Sun,
  Activity,
  Mountain,
  FileText
} from 'lucide-react';
import AshtaBhairavaExperience from './AshtaBhairavaExperience';
import Matrix64Chapter from './Matrix64Chapter';
import MatrikaExperience from './MatrikaExperience';
import ShriMeruExperience from './ShriMeruExperience';
import { ChaturdashaLokaExperience } from './ChaturdashaLokaExperience';
import { useLanguage } from '../context/LanguageContext';
import {
  RESEARCH_CATEGORY_PORTALS,
  getPortalBySlug,
  getPortalByChapterIndex,
  getArticleBySlugs
} from '../data/researchPortalData';
import {
  CircularMandalaNavigation,
  CategoryLandingPageView,
  ArticleMonographPageView
} from './ResearchMandalaPortal';

interface MethodologyNode {
  id: string;
  name: string;
  nameHi: string;
  sanskritTerm: string;
  shortDesc: string;
  fullPrinciple: string;
  fullPrincipleHi: string;
  sanskritVerse: string;
  translation: string;
  translationHi: string;
  scientificConcept: string;
  scientificConceptHi: string;
  activeCase: string;
  activeCaseHi: string;
  icon: React.ComponentType<any>;
  angle: number;
}

interface BhairavCodexEntry {
  id: string;
  codexId: string;
  selectorLabel: string;
  selectorLabelHi: string;
  nodeShortLabel: string;
  nodeShortLabelHi: string;
  category: string;
  categoryHi: string;
  evidenceStatus: string;
  evidenceStatusHi: string;
  title: string;
  titleHi: string;
  interpretiveFrame: string;
  interpretiveFrameHi: string;
  investigationPrinciple: string;
  investigationPrincipleHi: string;
  researchMethod: string;
  researchMethodHi: string;
  sourceRegister: string;
  sourceRegisterHi: string;
  caseStudyPrompt: string;
  caseStudyPromptHi: string;
  importantDistinction: string;
  importantDistinctionHi: string;
  icon: React.ComponentType<any>;
  angle: number;
}

const EMPIRICAL_NODES: MethodologyNode[] = [
  {
    id: 'node-acoustic',
    name: 'Acoustic Resonance',
    nameHi: 'ध्वनि अनुनाद',
    sanskritTerm: 'Nada-Shastra',
    shortDesc: 'Acoustic standing waves and elliptical sound amplification in temple sanctums.',
    fullPrinciple: 'Ancient Indian temples were often carved in ellipsoidal or dome shapes using high-quartz granite blocks. When speakers chant deep pitch notes in the center, the vaults mirror frequencies between 110Hz and 130Hz—the exact frequency of a deep male baritone. This creates a powerful acoustic feedback loop, making the space hum as if alive and triggering profound psychological state shifts in subjects.',
    fullPrincipleHi: 'प्राचीन भारतीय मंदिरों के गर्भगृह प्रायः उच्च-क्वार्ट्ज ग्रेनाइट शिलाओं से दीर्घवृत्ताकार या गुंबद के आकार में निर्मित किए जाते थे। जब केंद्र में गहरे स्वर में मंत्रोच्चार किया जाता है, तो छत 110Hz से 130Hz के बीच की आवृत्तियों को परावर्तित करती है। इससे एक शक्तिशाली ध्वनि-अनुनाद चक्र उत्पन्न होता है, जिससे संपूर्ण कक्ष स्पंदित होने लगता है और साधक की चेतना में गहरा मनोवैज्ञानिक परिवर्तन आता है।',
    sanskritVerse: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति॥',
    translation: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone."',
    translationHi: '"ध्वनि से ही अंतरिक्ष व्याप्त है। मंद्र (गंभीर) स्वर शिलाओं में गहन प्रतिध्वनि उत्पन्न करता है।"',
    scientificConcept: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
    scientificConceptHi: 'स्थायी तरंग ध्वनि-विज्ञान एवं दीर्घवृत्तीय नाभीय प्रवर्धन',
    activeCase: 'The Musical Pillars of Vittala, Hampi',
    activeCaseHi: 'विट्ठल मंदिर के संगीतमय स्तंभ, हम्पी',
    icon: Radio,
    angle: 0
  },
  {
    id: 'node-geomagnetic',
    name: 'Geomagnetic Friction',
    nameHi: 'भू-चुंबकीय घर्षण',
    sanskritTerm: 'Bhu-Marma',
    shortDesc: 'Subterranean fault line friction inducing high electromagnetic fluxes.',
    fullPrinciple: 'Tectonic friction points and groundwater faults can emit continuous, micro-frequency electromagnetic currents. When a structure sits directly atop a geomagnetic joint (Marma), the intense magnetic field changes affect human temporal lobes, occasionally triggering mild visual shadows in peripheral vision, dizziness, and intense lucid dreaming.',
    fullPrincipleHi: 'विवर्तनिक घर्षण बिंदु और भूमिगत जल-भ्रंश निरंतर सूक्ष्म-आवृत्ति वाली विद्युत-चुंबकीय धाराएँ उत्सर्जित कर सकते हैं। जब कोई संरचना सीधे किसी भू-चुंबकीय संधि (मर्म) के ऊपर स्थित होती है, तो तीव्र चुंबकीय परिवर्तन मानव मस्तिष्क के टेम्पोरल लोब को प्रभावित करते हैं, जिससे परिधीय दृष्टि में छायाओं का आभास और गहन स्वप्न-अनुभूतियाँ हो सकती हैं।',
    sanskritVerse: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते॥',
    translation: '"Where the core joints of the earth are knit, there an invisible current of force is generated."',
    translationHi: '"जहाँ पृथ्वी के मर्म-स्थल जुड़ते हैं, वहाँ शक्ति की एक अदृश्य धारा उत्पन्न होती है।"',
    scientificConcept: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
    scientificConceptHi: 'वाष्प-प्रसार चुंबकीय विक्षेपण एवं टेम्पोरल लोब उत्तेजना',
    activeCase: 'The Natural Fields of Kuldhara Village',
    activeCaseHi: 'कुलधरा ग्राम के प्राकृतिक चुंबकीय क्षेत्र',
    icon: Zap,
    angle: 72
  },
  {
    id: 'node-thermal',
    name: 'Thermodynamic Inversion',
    nameHi: 'ऊष्मागतिकीय व्युत्क्रमण',
    sanskritTerm: 'Ushna-Saman',
    shortDesc: 'Cold-spot formations caused by gaseous seeps and masonry thermal gaps.',
    fullPrinciple: 'Alleged "cold spots" are analyzed through strict thermodynamics. In places built with dry-stone, mortar-less masonry, small cracks seeping deep subterranean radon or compressed carbon dioxide gases create sudden, physical local cooling. Ambient moisture condenses instantly, creating draft currents and visible mist pockets that mimic apparitions.',
    fullPrincipleHi: 'कथित "शीत स्थलों" (कोल्ड स्पॉट्स) का विश्लेषण सख्त ऊष्मागतिकी के माध्यम से किया जाता है। बिना गारे की सूखी शिलाओं से बनी संरचनाओं में, भूमिगत रेडॉन या संपीड़ित कार्बन डाइऑक्साइड गैसों के रिसाव से अचानक स्थानीय शीतलन पैदा होता है। परिवेश की नमी तुरंत संघनित होकर धुंध का रूप ले लेती है, जो किसी छाया या आकृति जैसा भ्रम उत्पन्न करती है।',
    sanskritVerse: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं॥',
    translation: '"The localized chill of the stones is produced slowly by the upward movement of deep air."',
    translationHi: '"गंभीर भूमिगत वायु के ऊर्ध्वगामी प्रवाह से शिलाओं में धीरे-धीरे शीतलता उत्पन्न होती है।"',
    scientificConcept: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
    scientificConceptHi: 'रुद्धोष्म गैस विस्तार एवं विभेदक संरचनात्मक ऊष्मा धारिता',
    activeCase: 'The Gateway cold-spots of Bhangarh Fort',
    activeCaseHi: 'भानगढ़ किले के प्रवेश-द्वार के शीत-स्थल',
    icon: Thermometer,
    angle: 144
  },
  {
    id: 'node-chemistry',
    name: 'Environmental Chemistry',
    nameHi: 'पर्यावरणीय रसायन',
    sanskritTerm: 'Rasa-Vijnana',
    shortDesc: 'Ionization currents and trace heavy minerals in groundwater faultlines.',
    fullPrinciple: 'Natural mineral faultlines, heavy metal deposits (such as iron oxide, magnetite, or radioactive thorium-rich monazite) dissolve into local subterranean aquifers. Chronic ingestion or close proximity to these highly ionized water sources leads to distinct physiological changes, including high cell replication rates, altered hormone production, and mild perceptual distortion.',
    fullPrincipleHi: 'प्राकृतिक खनिज भ्रंश और भारी धातु भंडार (जैसे आयरन ऑक्साइड, मैग्नेटाइट, या थोरियम-युक्त मोनाजाइट) स्थानीय भूमिगत जलभृतों में घुल जाते हैं। इन अत्यधिक आयनित जल स्रोतों के दीर्घकालिक संपर्क या सेवन से विशिष्ट शारीरिक परिवर्तन होते हैं, जिनमें कोशिका विभाजन दर में वृद्धि और संवेदी बोध में बदलाव शामिल हैं।',
    sanskritVerse: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति॥',
    translation: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life."',
    translationHi: '"जल में घुले हुए पृथ्वी के रस जीवन-प्रक्रिया के प्रवाह पर गहरा प्रभाव डालते हैं।"',
    scientificConcept: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
    scientificConceptHi: 'जलभृत द्रव्यमान स्पेक्ट्रोस्कोपी एवं पृष्ठभूमि आयनकारी विकिरण',
    activeCase: 'The Thorium Aquifers of Kodinhi',
    activeCaseHi: 'कोडिन्ही के थोरियम जलभृत',
    icon: Droplet,
    angle: 216
  },
  {
    id: 'node-structural',
    name: 'Architectural Waveguides',
    nameHi: 'वास्तु तरंग-पथक',
    sanskritTerm: 'Vastu-Mandala',
    shortDesc: 'The geometry of stone layouts focusing low-frequency environmental waves.',
    fullPrinciple: 'Pyramidal, concentric, and square-within-square temple layouts function similarly to modern radio waveguides. By aligning heavy granite structures to cardinal coordinates, these layouts trap and focus low-frequency ambient environmental waves (such as wind friction or microseisms), turning the building itself into a passive energetic resonator.',
    fullPrincipleHi: 'पिरामिडनुमा, संकेंद्रित और वर्ग-के-भीतर-वर्ग वाले मंदिर विन्यास आधुनिक रेडियो वेवगाइड की भांति कार्य करते हैं। भारी ग्रेनाइट संरचनाओं को मुख्य दिशाओं के अनुरूप संरेखित करने से ये विन्यास निम्न-आवृत्ति वाली पर्यावरणीय तरंगों (जैसे वायु घर्षण या सूक्ष्म-भूकंपीय कंपन) को केंद्रित करते हैं, जिससे संपूर्ण भवन एक निष्क्रिय ऊर्जा अनुनादक बन जाता है।',
    sanskritVerse: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति॥',
    translation: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine."',
    translationHi: '"पवित्र मण्डल की रेखाएँ वायु-तरंगों को आकर्षित करती हैं। मंदिर स्वयं एक महायन्त्र बन जाता है।"',
    scientificConcept: 'Concentric Dielectric Waveguides & Environmental RF Traps',
    scientificConceptHi: 'संकेंद्रित परावैद्युत तरंग-पथक एवं पर्यावरणीय आरएफ ट्रैप',
    activeCase: 'The Ellipsoidal Sanctums of Western Ghats',
    activeCaseHi: 'पश्चिमी घाट के दीर्घवृत्ताकार गर्भगृह',
    icon: Layers,
    angle: 288
  }
];

const BHAIRAV_CODEX_ENTRIES: BhairavCodexEntry[] = [
  {
    id: 'bhairav-asitanga',
    codexId: 'BH-001',
    selectorLabel: '1. Asitanga Bhairava',
    selectorLabelHi: '1. असितांग भैरव',
    nodeShortLabel: 'Asitanga',
    nodeShortLabelHi: 'असितांग',
    category: 'ASHTA BHAIRAVA · EAST',
    categoryHi: 'अष्ट भैरव · पूर्व दिशा',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    evidenceStatusHi: 'प्रतिमाशास्त्रीय एवं ग्रंथीय अभिलेख',
    title: 'ASITANGA BHAIRAVA',
    titleHi: 'असितांग भैरव',
    interpretiveFrame:
      '“Representing creative articulation and the eastern directional threshold, Asitanga Bhairava anchors the first octant of the Ashta Bhairava mandala in Shaiva Agamic cosmology.”',
    interpretiveFrameHi:
      '“सृजनात्मक अभिव्यक्ति और पूर्वी दिशा के द्वार का प्रतिनिधित्व करते हुए, असितांग भैरव शैव आगम ब्रह्माण्ड-विज्ञान में अष्ट भैरव मण्डल के प्रथम अष्टांश को स्थापित करते हैं।”',
    investigationPrinciple:
      'Examine documented representations of Asitanga Bhairava across Kashi and South Indian Shaiva temple programs. Associated in traditional compendia with the Brahmi Matrika, a swan (hamsa) vahana, and golden-white iconography bearing japa-mala, kamandalu, khadga, and trishula. Compare regional shrine alignments in Varanasi (Vriddhakaleshwar / Kashi Vishwanath perimeter) with Agamic directional prescriptions.',
    investigationPrincipleHi:
      'काशी और दक्षिण भारतीय शैव मंदिर परंपराओं में असितांग भैरव के प्रलेखित स्वरूपों का परीक्षण करें। पारंपरिक ग्रंथों में इन्हें ब्राह्मी मातृका, हंस वाहन और जपमाला, कमण्डलु, खड्ग तथा त्रिशूल धारण करने वाले स्वर्णिम-श्वेत स्वरूप से जोड़ा गया है। वाराणसी (वृद्धकालेश्वर / काशी विश्वनाथ परिधि) में स्थित मंदिर के स्थान का आगम शास्त्र के दिशा-निर्देशों से तुलनात्मक अध्ययन करें।',
    researchMethod: 'Comparative iconography · Sacred-geographical triangulation',
    researchMethodHi: 'तुलनात्मक प्रतिमाशास्त्र · पवित्र-भौगोलिक त्रिकोणीयन',
    sourceRegister: 'Shaiva Agamas · Kashi Khanda · Archaeological shrine surveys',
    sourceRegisterHi: 'शैव आगम · काशी खण्ड · पुरातात्विक मंदिर सर्वेक्षण',
    caseStudyPrompt:
      'Investigate the directional placement and iconographic attributes of Asitanga Bhairava shrines in Varanasi in relation to classical Ashta Bhairava lists.',
    caseStudyPromptHi:
      'शास्त्रीय अष्ट भैरव सूचियों के संदर्भ में वाराणसी स्थित असितांग भैरव मंदिर की दिशात्मक स्थिति और प्रतिमाशास्त्रीय विशेषताओं का अन्वेषण करें।',
    importantDistinction:
      'Regional lists occasionally vary in secondary attributes; verify specific shrine provenance and inscriptional records before equating local folk narratives with canonical Agamic descriptions.',
    importantDistinctionHi:
      'क्षेत्रीय सूचियों में कभी-कभी गौण आयुधों में भिन्नता मिलती है; स्थानीय लोककथाओं को प्रामाणिक आगम विवरणों के समतुल्य मानने से पूर्व मंदिर के शिलालेखों और ऐतिहासिक स्रोतों का सत्यापन करें।',
    icon: Sun,
    angle: -90
  },
  {
    id: 'bhairav-ruru',
    codexId: 'BH-002',
    selectorLabel: '2. Ruru Bhairava',
    selectorLabelHi: '2. रुरु भैरव',
    nodeShortLabel: 'Ruru',
    nodeShortLabelHi: 'रुरु',
    category: 'ASHTA BHAIRAVA · SOUTHEAST',
    categoryHi: 'अष्ट भैरव · आग्नेय (दक्षिण-पूर्व)',
    evidenceStatus: 'SCHOLARLY INTERPRETATION',
    evidenceStatusHi: 'शास्त्रीय एवं शोधपरक व्याख्या',
    title: 'RURU BHAIRAVA',
    titleHi: 'रुरु भैरव',
    interpretiveFrame:
      '“Positioned at the southeastern vector, Ruru Bhairava embodies austere discipline, instructional authority, and the mastery of vital currents across Shaiva visual traditions.”',
    interpretiveFrameHi:
      '“आग्नेय (दक्षिण-पूर्व) दिशा में स्थित रुरु भैरव शैव दृश्य परंपराओं में कठोर अनुशासन, गुरु-सत्ता और प्राण-धाराओं पर नियंत्रण के प्रतीक हैं।”',
    investigationPrinciple:
      'Document sculptural and textual depictions of Ruru Bhairava, traditionally paired with Maheshvari and mounted upon an ox (vrishabha). Analyze the recurring motifs of akshamala, ankusha, vina/lute or pustaka, and kapala in medieval Chola and Deccan bronzes, alongside the living pilgrimage circuit linking the Ruru Bhairava shrine near Hanuman Ghat in Kashi.',
    investigationPrincipleHi:
      'माहेश्वरी शक्ति के साथ युग्मित और वृषभ वाहन पर आरूढ़ रुरु भैरव के मूर्तिकला और ग्रंथीय विवरणों का प्रलेखन करें। मध्यकालीन चोल एवं दक्कन की कांस्य प्रतिमाओं में अक्षमाला, अंकुश, वीणा/पुस्तक और कपाल के प्रतीकों के साथ-साथ काशी में हनुमान घाट के समीप स्थित रुरु भैरव मंदिर की जीवंत तीर्थयात्रा परंपरा का विश्लेषण करें।',
    researchMethod: 'Bronzes & stone relief analysis · Pilgrimage route mapping',
    researchMethodHi: 'कांस्य एवं प्रस्तर शिल्प विश्लेषण · तीर्थयात्रा मार्ग मानचित्रण',
    sourceRegister: 'Museum bronze catalogues · Sthala Puranas · Field documentation',
    sourceRegisterHi: 'संग्रहालय कांस्य सूचीपत्र · स्थल पुराण · क्षेत्रीय प्रलेखन',
    caseStudyPrompt:
      'Compare South Indian bronze depictions of Ruru Bhairava with the living ritual geography of the Ruru Bhairava shrine in Varanasi.',
    caseStudyPromptHi:
      'रुरु भैरव की दक्षिण भारतीय कांस्य प्रतिमाओं की वाराणसी स्थित रुरु भैरव मंदिर के जीवंत अनुष्ठानिक भूगोल से तुलना करें।',
    importantDistinction:
      'Distinguish between the narrative myth of the demon Ruru in Purana literature and the technical Agamic classification of Ruru as one of the eight directional Bhairavas.',
    importantDistinctionHi:
      'पुराण साहित्य में वर्णित रुरु दैत्य की कथा और आगम शास्त्र में आठ दिशात्मक भैरवों में से एक के रूप में रुरु भैरव के तकनीकी वर्गीकरण के बीच स्पष्ट अंतर रखें।',
    icon: Shield,
    angle: -45
  },
  {
    id: 'bhairav-chanda',
    codexId: 'BH-003',
    selectorLabel: '3. Chanda Bhairava',
    selectorLabelHi: '3. चण्ड भैरव',
    nodeShortLabel: 'Chanda',
    nodeShortLabelHi: 'चण्ड',
    category: 'ASHTA BHAIRAVA · SOUTH',
    categoryHi: 'अष्ट भैरव · दक्षिण दिशा',
    evidenceStatus: 'CULTURAL & TEXTUAL TRADITION',
    evidenceStatusHi: 'सांस्कृतिक एवं ग्रंथीय परंपरा',
    title: 'CHANDA BHAIRAVA',
    titleHi: 'चण्ड भैरव',
    interpretiveFrame:
      '“Guarding the southern threshold, Chanda Bhairava signifies fierce kinetic momentum, solar intensity, and the cutting away of stagnation at the boundary of sacred precincts.”',
    interpretiveFrameHi:
      '“दक्षिणी द्वार की रक्षा करने वाले चण्ड भैरव तीव्र गतिज ऊर्जा, सौर प्रचण्डता और पवित्र परिसरों की सीमा पर जड़ता के उच्छेदन का प्रतिनिधित्व करते हैं।”',
    investigationPrinciple:
      'Investigate the pairing of Chanda Bhairava with Kaumari and the peacock (mayura) vahana in classical Ashta Bhairava schemas. Examine weapons and attributes—agni (fire), shakti (spear), gada, and kunda—and document the spatial relationship between the Chanda Bhairava shrine (Durga Kund sector, Varanasi) and surrounding Shakta-Shaiva sacred topography.',
    investigationPrincipleHi:
      'शास्त्रीय अष्ट भैरव व्यवस्था में कौमारी शक्ति और मयूर वाहन के साथ चण्ड भैरव के युग्म का अन्वेषण करें। अग्नि, शक्ति (भाला), गदा और कुण्ड जैसे आयुधों का परीक्षण करें तथा वाराणसी के दुर्गाकुण्ड क्षेत्र में स्थित चण्ड भैरव मंदिर और आसपास के शाक्त-शैव पवित्र भूगोल के स्थानिक संबंधों का प्रलेखन करें।',
    researchMethod: 'Spatial-topographical survey · Comparative textual study',
    researchMethodHi: 'स्थानिक-स्थलाकृतिक सर्वेक्षण · तुलनात्मक ग्रंथ अध्ययन',
    sourceRegister: 'Tantrasara · Kashi pilgrimage manuals · Heritage site records',
    sourceRegisterHi: 'तंत्रसार · काशी यात्रा पद्धति · धरोहर स्थल अभिलेख',
    caseStudyPrompt:
      'Examine how Chanda Bhairava functions as a southern directional guardian within shared Shaiva-Shakta temple complexes.',
    caseStudyPromptHi:
      'परीक्षण करें कि साझा शैव-शाक्त मंदिर परिसरों में चण्ड भैरव दक्षिणी दिशा के रक्षक के रूप में किस प्रकार कार्य करते हैं।',
    importantDistinction:
      'Do not conflate fierce protective iconography with malevolence; in Agamic texts, Chanda denotes concentrated transformative force rather than disorder.',
    importantDistinctionHi:
      'उग्र रक्षक प्रतिमाशास्त्र को अमंगलकारी न समझें; आगम ग्रंथों में चण्ड का अर्थ अव्यवस्था नहीं, अपितु एकाग्र रूपांतरणकारी शक्ति है।',
    icon: Flame,
    angle: 0
  },
  {
    id: 'bhairav-krodha',
    codexId: 'BH-004',
    selectorLabel: '4. Krodha Bhairava',
    selectorLabelHi: '4. क्रोध भैरव',
    nodeShortLabel: 'Krodha',
    nodeShortLabelHi: 'क्रोध',
    category: 'ASHTA BHAIRAVA · SOUTHWEST',
    categoryHi: 'अष्ट भैरव · नैऋत्य (दक्षिण-पश्चिम)',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    evidenceStatusHi: 'प्रतिमाशास्त्रीय एवं ग्रंथीय अभिलेख',
    title: 'KRODHA BHAIRAVA',
    titleHi: 'क्रोध भैरव',
    interpretiveFrame:
      '“Aligned with the southwestern octant, Krodha Bhairava represents sovereign wrath directed against existential delusion and structural decay.”',
    interpretiveFrameHi:
      '“नैऋत्य (दक्षिण-पश्चिम) अष्टांश में स्थित क्रोध भैरव अस्तित्वगत मोह और संरचनात्मक क्षय के विरुद्ध निर्देशित संप्रभु मन्यु का प्रतिनिधित्व करते हैं।”',
    investigationPrinciple:
      'Study Krodha Bhairava’s association with the Vaishnavi Matrika and the eagle (garuda) vahana across Tantric manuals and temple reliefs. Document the symbolic pairing of shankha, chakra, gada, and kapala—illustrating the synthesis of Shaiva and Vaishnava iconographic vocabularies within the Ashta Bhairava system.',
    investigationPrincipleHi:
      'तांत्रिक ग्रंथों और मंदिर शिल्पों में वैष्णवी मातृका तथा गरुड़ वाहन के साथ क्रोध भैरव के संबंध का अध्ययन करें। शंख, चक्र, गदा और कपाल के प्रतीकात्मक संयोजन का प्रलेखन करें, जो अष्ट भैरव प्रणाली के भीतर शैव और वैष्णव प्रतिमाशास्त्रीय शब्दावली के समन्वय को दर्शाता है।',
    researchMethod: 'Syncretic iconography · Primary-source philology',
    researchMethodHi: 'समन्वयात्मक प्रतिमाशास्त्र · मूल-स्रोत भाषाविज्ञान',
    sourceRegister: 'Agamic compendia · Temple architectural surveys · Art history archives',
    sourceRegisterHi: 'आगम संकलन · मंदिर वास्तु सर्वेक्षण · कला इतिहास अभिलेखागार',
    caseStudyPrompt:
      'Analyze the presence of Vaishnava-associated emblems (shankha, chakra, garuda) within the canonical iconography of Krodha Bhairava.',
    caseStudyPromptHi:
      'क्रोध भैरव के प्रामाणिक प्रतिमाशास्त्र में वैष्णव-संबद्ध प्रतीकों (शंख, चक्र, गरुड़) की उपस्थिति का विश्लेषण करें।',
    importantDistinction:
      'Maintain a clear distinction between psychological anger and the technical Tantric category of Krodha-deities as protective, boundary-maintaining manifestations.',
    importantDistinctionHi:
      'सामान्य मनोवैज्ञानिक क्रोध और सीमा-रक्षक स्वरूपों के रूप में क्रोध-देवताओं की तकनीकी तांत्रिक श्रेणी के बीच स्पष्ट अंतर बनाए रखें।',
    icon: Zap,
    angle: 45
  },
  {
    id: 'bhairav-unmatta',
    codexId: 'BH-005',
    selectorLabel: '5. Unmatta Bhairava',
    selectorLabelHi: '5. उन्मत्त भैरव',
    nodeShortLabel: 'Unmatta',
    nodeShortLabelHi: 'उन्मत्त',
    category: 'ASHTA BHAIRAVA · WEST',
    categoryHi: 'अष्ट भैरव · पश्चिम दिशा',
    evidenceStatus: 'CULTURAL TRADITION',
    evidenceStatusHi: 'सांस्कृतिक एवं क्षेत्रीय परंपरा',
    title: 'UNMATTA BHAIRAVA',
    titleHi: 'उन्मत्त भैरव',
    interpretiveFrame:
      '“Occupying the western vector, Unmatta Bhairava embodies ecstatic transcendence beyond conventional dualities and ordinary cognitive constraints.”',
    interpretiveFrameHi:
      '“पश्चिमी दिशा में अधिष्ठित उन्मत्त भैरव पारंपरिक द्वैत और साधारण संज्ञानात्मक सीमाओं से परे भावातीत उन्मेष के प्रतीक हैं।”',
    investigationPrinciple:
      'Examine textual and ethnographic accounts of Unmatta Bhairava, paired with Varahi and associated with the horse (ashva) vahana. Investigate the placement of the Unmatta Bhairava shrine along the Panchakroshi pilgrimage route (Deura, Varanasi) and compare prescribed attributes—khadga, khetaka, parigha, and bhindipala—with surviving sculptural examples.',
    investigationPrincipleHi:
      'वाराही शक्ति और अश्व वाहन से युक्त उन्मत्त भैरव के ग्रंथीय एवं नृवंशविज्ञान संबंधी विवरणों का परीक्षण करें। पंचक्रोशी यात्रा मार्ग (देउरा, वाराणसी) पर स्थित उन्मत्त भैरव मंदिर की स्थिति की जाँच करें और खड्ग, खेटक, परिघ तथा भिन्दिपाल जैसे निर्धारित आयुधों की उपलब्ध मूर्तियों से तुलना करें।',
    researchMethod: 'Ethnographic contextualization · Pilgrimage cartography',
    researchMethodHi: 'नृवंशविज्ञान संदर्भ-अध्ययन · तीर्थयात्रा मानचित्रण',
    sourceRegister: 'Panchakroshi Yatra records · Regional field studies · Iconographic texts',
    sourceRegisterHi: 'पंचक्रोशी यात्रा अभिलेख · क्षेत्रीय अध्ययन · प्रतिमाशास्त्रीय ग्रंथ',
    caseStudyPrompt:
      'Trace the role of Unmatta Bhairava along the outer Panchakroshi sacred boundary of Kashi and its relationship to liminal consciousness in Shaiva thought.',
    caseStudyPromptHi:
      'काशी की बाहरी पंचक्रोशी पवित्र सीमा पर उन्मत्त भैरव की भूमिका और शैव चिंतन में सीमांत चेतना के साथ उनके संबंध का अन्वेषण करें।',
    importantDistinction:
      'In Sanskrit philosophical literature, “Unmatta” denotes ecstatic non-ordinary awareness rather than clinical pathology; interpret textual passages within their proper soteriological context.',
    importantDistinctionHi:
      'संस्कृत दार्शनिक साहित्य में “उन्मत्त” का अर्थ किसी मानसिक विकार से नहीं, बल्कि लोकोत्तर आध्यात्मिक भाव-दशा से है; ग्रंथों के अंशों की व्याख्या उनके उचित मोक्षपरक संदर्भ में करें।',
    icon: Sparkles,
    angle: 90
  },
  {
    id: 'bhairav-kapala',
    codexId: 'BH-006',
    selectorLabel: '6. Kapala Bhairava',
    selectorLabelHi: '6. कपाल भैरव',
    nodeShortLabel: 'Kapala',
    nodeShortLabelHi: 'कपाल',
    category: 'ASHTA BHAIRAVA · NORTHWEST',
    categoryHi: 'अष्ट भैरव · वायव्य (उत्तर-पश्चिम)',
    evidenceStatus: 'PRIMARY SOURCE & ARCHIVAL STUDY',
    evidenceStatusHi: 'मूल स्रोत एवं अभिलेखीय अध्ययन',
    title: 'KAPALA BHAIRAVA',
    titleHi: 'कपाल भैरव',
    interpretiveFrame:
      '“At the northwestern threshold, Kapala Bhairava foregrounds the skull-bowl emblem—recalling the transient vessel of mortality and the origin myth of Brahma-kapala.”',
    interpretiveFrameHi:
      '“वायव्य (उत्तर-पश्चिम) द्वार पर स्थित कपाल भैरव कपाल-पात्र के प्रतीक को प्रमुखता देते हैं—जो नश्वर शरीर के क्षणभंगुर पात्र और ब्रह्म-कपाल की पौराणिक कथा का स्मरण कराता है।”',
    investigationPrinciple:
      'Investigate the historical and textual links between Kapala Bhairava (paired with Indrani, elephant/gaja vahana) and ascetic Kapalika lineages documented in medieval Sanskrit literature and inscriptions. Examine the attributes of vajra, pasha, khadga, and kapala, and survey the Lat Bhairav / Kapala Mochan sacred tank precinct in Varanasi.',
    investigationPrincipleHi:
      'मध्यकालीन संस्कृत साहित्य और शिलालेखों में प्रलेखित कापालिक साधक परंपराओं तथा कपाल भैरव (इन्द्राणी शक्ति और गज वाहन से युक्त) के बीच ऐतिहासिक एवं ग्रंथीय संबंधों का अन्वेषण करें। वज्र, पाश, खड्ग और कपाल जैसे आयुधों का परीक्षण करें तथा वाराणसी में लाट भैरव / कपाल मोचन पवित्र कुण्ड परिसर का सर्वेक्षण करें।',
    researchMethod: 'Epigraphic & historical analysis · Sacred hydrology survey',
    researchMethodHi: 'पुरालेखीय एवं ऐतिहासिक विश्लेषण · पवित्र जल-संरचना सर्वेक्षण',
    sourceRegister: 'Purana texts · Epigraphia Indica · Varanasi heritage documentation',
    sourceRegisterHi: 'पुराण ग्रंथ · एपिग्राफिया इंडिका · वाराणसी धरोहर प्रलेखन',
    caseStudyPrompt:
      'Examine the architectural and historical relationship between the Kapala Mochan Teerth and the Kapala Bhairava tradition in Kashi.',
    caseStudyPromptHi:
      'काशी में कपाल मोचन तीर्थ और कपाल भैरव परंपरा के बीच स्थापत्य एवं ऐतिहासिक संबंध का परीक्षण करें।',
    importantDistinction:
      'Separate polemical depictions of Kapalika ascetics in medieval plays from verifiable epigraphic and textual sources produced within Shaiva traditions.',
    importantDistinctionHi:
      'मध्यकालीन नाटकों में कापालिक साधकों के अतिरंजित चित्रण को शैव परंपराओं के भीतर रचित प्रामाणिक शिलालेखों और ग्रंथीय स्रोतों से अलग रखकर देखें।',
    icon: BookOpen,
    angle: 135
  },
  {
    id: 'bhairav-bhishana',
    codexId: 'BH-007',
    selectorLabel: '7. Bhishana Bhairava',
    selectorLabelHi: '7. भीषण भैरव',
    nodeShortLabel: 'Bhishana',
    nodeShortLabelHi: 'भीषण',
    category: 'ASHTA BHAIRAVA · NORTH',
    categoryHi: 'अष्ट भैरव · उत्तर दिशा',
    evidenceStatus: 'SCHOLARLY INTERPRETATION',
    evidenceStatusHi: 'शास्त्रीय एवं शोधपरक व्याख्या',
    title: 'BHISHANA BHAIRAVA',
    titleHi: 'भीषण भैरव',
    interpretiveFrame:
      '“Guarding the northern vector, Bhishana Bhairava confronts dread itself, standing at the threshold where awe and dissolution intersect.”',
    interpretiveFrameHi:
      '“उत्तरी दिशा की रक्षा करते हुए भीषण भैरव स्वयं भय का अतिक्रमण करते हैं और उस दहलीज पर खड़े होते हैं जहाँ विस्मय और लय का मिलन होता है।”',
    investigationPrinciple:
      'Document the iconography of Bhishana Bhairava, paired in Tantric classifications with Chamunda and associated with the preta (corpse/spirit) or lion vehicle. Analyze the symbolic function of khadga, shula, kapala, and musala (pestle), and study the Bhishana Bhairava shrine (Bhoot Bhairav / Kashipura sector) within the urban mandala of Varanasi.',
    investigationPrincipleHi:
      'तांत्रिक वर्गीकरणों में चामुण्डा शक्ति तथा प्रेत या सिंह वाहन से संबद्ध भीषण भैरव के प्रतिमाशास्त्र का प्रलेखन करें। खड्ग, शूल, कपाल और मुसल के प्रतीकात्मक कार्य का विश्लेषण करें तथा वाराणसी के नगरीय मण्डल में भीषण भैरव मंदिर (भूत भैरव / काशीपुरा क्षेत्र) का अध्ययन करें।',
    researchMethod: 'Symbolic & ritual analysis · Urban sacred-space mapping',
    researchMethodHi: 'प्रतीकात्मक एवं अनुष्ठानिक विश्लेषण · नगरीय पवित्र-स्थान मानचित्रण',
    sourceRegister: 'Shakta-Shaiva Tantras · Urban anthropology studies · Shrine registries',
    sourceRegisterHi: 'शाक्त-शैव तंत्र · नगरीय नृवंशविज्ञान अध्ययन · मंदिर पंजीयन अभिलेख',
    caseStudyPrompt:
      'Investigate how northern-sector Bhairava shrines in Varanasi mediate concepts of fear, protection, and threshold guardianship.',
    caseStudyPromptHi:
      'अन्वेषण करें कि वाराणसी के उत्तरी क्षेत्र के भैरव मंदिर भय, संरक्षण और सीमा-रक्षा की अवधारणाओं को किस प्रकार संयोजित करते हैं।',
    importantDistinction:
      'Approach cremation-ground and fierce imagery through documented theological frameworks rather than sensationalized occult tropes.',
    importantDistinctionHi:
      'श्मशान और उग्र प्रतीकों का अध्ययन सनसनीखेज कल्पनाओं के बजाय प्रलेखित दार्शनिक एवं आगम ढाँचों के माध्यम से करें।',
    icon: Compass,
    angle: 180
  },
  {
    id: 'bhairav-samhara',
    codexId: 'BH-008',
    selectorLabel: '8. Samhara Bhairava',
    selectorLabelHi: '8. संहार भैरव',
    nodeShortLabel: 'Samhara',
    nodeShortLabelHi: 'संहार',
    category: 'ASHTA BHAIRAVA · NORTHEAST',
    categoryHi: 'अष्ट भैरव · ईशान (उत्तर-पूर्व)',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    evidenceStatusHi: 'प्रतिमाशास्त्रीय एवं ग्रंथीय अभिलेख',
    title: 'SAMHARA BHAIRAVA',
    titleHi: 'संहार भैरव',
    interpretiveFrame:
      '“Completing the eightfold cycle in the auspicious northeast (Ishanya), Samhara Bhairava governs cosmic reabsorption—dissolving exhausted forms back into undivided consciousness.”',
    interpretiveFrameHi:
      '“पवित्र ईशान (उत्तर-पूर्व) कोण में अष्ट-चक्र को पूर्ण करते हुए संहार भैरव ब्रह्माण्डीय पुनर्समावेशन का संचालन करते हैं—जो क्षीण रूपों को पुनः अखंड चेतना में विलीन कर देते हैं।”',
    investigationPrinciple:
      'Examine the ten-armed or multi-armed depictions of Samhara Bhairava paired with Chandika and the lion (simha) vahana. Analyze how “Samhara” (reabsorption/dissolution) functions as the culminating phase of the five cosmic acts (Pancha-kritya) in Kashmir Shaiva and Siddhanta philosophy, rather than mere destruction.',
    investigationPrincipleHi:
      'चण्डिका शक्ति और सिंह वाहन के साथ युग्मित संहार भैरव के दशभुज या बहुभुज स्वरूपों का परीक्षण करें। विश्लेषण करें कि कश्मीर शैव दर्शन और शैव सिद्धांत में “संहार” केवल विनाश नहीं, बल्कि पंच-कृत्यों के अंतिम चरण (पुनर्समावेशन/लय) के रूप में किस प्रकार कार्य करता है।',
    researchMethod: 'Comparative philosophy · Iconographic taxonomy',
    researchMethodHi: 'तुलनात्मक दर्शन · प्रतिमाशास्त्रीय वर्गीकरण',
    sourceRegister: 'Kashmir Shaiva treatises · Agamic manuals · Temple sculpture archives',
    sourceRegisterHi: 'कश्मीर शैव ग्रंथ · आगम पद्धतियाँ · मंदिर मूर्तिकला अभिलेखागार',
    caseStudyPrompt:
      'Trace the philosophical meaning of Samhara in Shaiva cosmology and its visual translation in the eighth node of the Ashta Bhairava mandala.',
    caseStudyPromptHi:
      'शैव ब्रह्माण्ड-विज्ञान में संहार के दार्शनिक अर्थ और अष्ट भैरव मण्डल के आठवें बिंदु में उसके दृश्य रूपांतरण का अन्वेषण करें।',
    importantDistinction:
      'In Sanskrit cosmology, Samhara is cyclic withdrawal prior to renewal, distinct from linear apocalyptic destruction.',
    importantDistinctionHi:
      'संस्कृत ब्रह्माण्ड-विज्ञान में संहार नवसृजन से पूर्व का चक्रीय प्रत्याहार है, जो रेखीय प्रलयंकारी विनाश से पूर्णतः भिन्न है।',
    icon: Mountain,
    angle: 225
  }
];

const KAAL_BHAIRAV_CORE_ENTRY: BhairavCodexEntry = {
  id: 'bhairav-kaal',
  codexId: 'BH-CORE',
  selectorLabel: 'Kaal Bhairava (Supreme Core)',
  selectorLabelHi: 'काल भैरव (केंद्रीय धुरी)',
  nodeShortLabel: 'Kaal Bhairava',
  nodeShortLabelHi: 'काल भैरव',
  category: 'ADHIPATI · SUPREME SOVEREIGN CORE',
  categoryHi: 'अधिपति · सर्वोच्च केंद्रीय धुरी',
  evidenceStatus: 'PRIMARY SOURCE & LIVING TRADITION',
  evidenceStatusHi: 'मूल स्रोत एवं जीवंत परंपरा',
  title: 'KAAL BHAIRAVA — THE SOVEREIGN AXIS',
  titleHi: 'काल भैरव — सर्वोच्च केंद्रीय धुरी',
  interpretiveFrame:
    '“At the center of the eightfold directional mandala stands Kaal Bhairava—Sovereign of Time (Kala), Kotwal (Chief Magistrate) of Kashi, and the axis from which the Ashta Bhairavas emanate.”',
  interpretiveFrameHi:
    '“अष्ट-दिशात्मक मण्डल के केंद्र में काल भैरव विराजमान हैं—जो काल के अधिपति, काशी के कोतवाल और वह केंद्रीय धुरी हैं जिनसे आठों भैरवों का प्राकट्य होता है।”',
  investigationPrinciple:
    'Investigate Kaal Bhairava as the central unifying principle of the Bhairava tradition. In Purana, Agama, and the living religious civic order of Varanasi, Kaal Bhairava governs temporal finitude, karmic accountability, and sacred jurisdiction. Examine the historical continuity of the Kaal Bhairav Mandir in Varanasi, the shvan (dog) vahana, and how the eight directional Bhairavas form a protective geometric perimeter around this central axis.',
  investigationPrincipleHi:
    'भैरव परंपरा के केंद्रीय एकीकृत सिद्धांत के रूप में काल भैरव का अन्वेषण करें। पुराण, आगम और वाराणसी की जीवंत धार्मिक व्यवस्था में काल भैरव समय की सीमा, कर्म-फल और पवित्र क्षेत्राधिकार का संचालन करते हैं। वाराणसी के काल भैरव मंदिर की ऐतिहासिक निरंतरता, श्वान वाहन और इस केंद्रीय धुरी के चारों ओर आठ दिशात्मक भैरवों के सुरक्षात्मक ज्यामितीय घेरे का अध्ययन करें।',
  researchMethod: 'Multidisciplinary synthesis · Textual, iconographic & ethnographic study',
  researchMethodHi: 'बहु-विषयक संश्लेषण · ग्रंथीय, प्रतिमाशास्त्रीय एवं नृवंशविज्ञान अध्ययन',
  sourceRegister: 'Shiva Purana · Kashi Khanda · Archaeological & ethnographic records',
  sourceRegisterHi: 'शिव पुराण · काशी खण्ड · पुरातात्विक एवं क्षेत्रीय अभिलेख',
  caseStudyPrompt:
    'Examine how Kaal Bhairava functions simultaneously as a metaphysical personification of Time (Mahakala/Kala) and as the civic-religious guardian (Kotwal) of Varanasi.',
  caseStudyPromptHi:
    'परीक्षण करें कि काल भैरव किस प्रकार एक साथ महाकाल/काल के आध्यात्मिक स्वरूप और वाराणसी के नगर-रक्षक (कोतवाल) के रूप में प्रतिष्ठित हैं।',
  importantDistinction:
    'Treat Kaal Bhairava as the central sovereign archetype unifying the eight directional manifestations, documenting both classical Sanskrit sources and living community traditions.',
  importantDistinctionHi:
    'शास्त्रीय संस्कृत स्रोतों और जीवंत सामुदायिक परंपराओं दोनों का प्रलेखन करते हुए काल भैरव को आठों दिशात्मक स्वरूपों को एकीकृत करने वाली केंद्रीय संप्रभु धुरी के रूप में समझें।',
  icon: Activity,
  angle: 0
};

interface ResearchRouteState {
  mode: 'overview' | 'category' | 'article';
  categorySlug?: string;
  articleSlug?: string;
}

function parseResearchUrl(pathname: string): ResearchRouteState {
  const clean = pathname.replace(/\/+$/, '');
  const articleMatch = /^\/research\/([^/]+)\/([^/]+)$/i.exec(clean);
  if (articleMatch) {
    return {
      mode: 'article',
      categorySlug: decodeURIComponent(articleMatch[1].toLowerCase()),
      articleSlug: decodeURIComponent(articleMatch[2].toLowerCase())
    };
  }
  const categoryMatch = /^\/research\/([^/]+)$/i.exec(clean);
  if (categoryMatch) {
    return {
      mode: 'category',
      categorySlug: decodeURIComponent(categoryMatch[1].toLowerCase())
    };
  }
  return { mode: 'overview' };
}

const EMPIRICAL_NODE_TO_ARTICLE_SLUG: Record<string, string> = {
  'node-acoustic': 'acoustic-resonance',
  'node-geomagnetic': 'geomagnetic-friction',
  'node-thermal': 'thermodynamic-inversion',
  'node-chemistry': 'environmental-chemistry',
  'node-structural': 'architectural-waveguides'
};

const BHAIRAV_ID_TO_ARTICLE_SLUG: Record<string, string> = {
  'bhairav-kaal': 'kaal-bhairava-sovereign-core',
  'bhairav-asitanga': 'codex-asitanga',
  'bhairav-ruru': 'codex-ruru',
  'bhairav-chanda': 'codex-chanda',
  'bhairav-krodha': 'codex-krodha',
  'bhairav-unmatta': 'codex-unmatta',
  'bhairav-kapala': 'codex-kapala',
  'bhairav-bhishana': 'codex-bhishana',
  'bhairav-samhara': 'codex-samhara'
};

export default function PhilosophySection() {
  const { lang, t } = useLanguage();
  // 0 = Empirical Field Methodology, 1 = Ashta Bhairava, 2 = Bhairav Investigation Codex, 3 = 64 Yogini, 4 = The Eight Matrikas, 5 = Shri Meru Chakra & Ashta Matrika, 6 = The 14 Lokas in Hindu Cosmology
  const TOTAL_CHAPTERS = 7;

  const [routeState, setRouteState] = useState<ResearchRouteState>(() =>
    typeof window !== 'undefined' ? parseResearchUrl(window.location.pathname) : { mode: 'overview' }
  );

  const [viewState, setViewState] = useState<{ index: number; direction: number }>(() => {
    if (typeof window !== 'undefined') {
      const initialRoute = parseResearchUrl(window.location.pathname);
      if (initialRoute.categorySlug) {
        const portal = getPortalBySlug(initialRoute.categorySlug);
        if (portal) {
          return { index: portal.chapterIndex, direction: 1 };
        }
      }
    }
    return { index: 0, direction: 1 };
  });

  const [selectedEmpiricalId, setSelectedEmpiricalId] = useState('node-acoustic');
  const [selectedBhairavId, setSelectedBhairavId] = useState('bhairav-asitanga');
  const [focusedBhairavaProfileIdx, setFocusedBhairavaProfileIdx] = useState<number>(0);
  const [focusedMatrikaProfileIdx, setFocusedMatrikaProfileIdx] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();
  const researchPageScrollRef = useRef<HTMLDivElement | null>(null);

  const scrollResearchIntoView = useCallback(() => {
    const el = document.getElementById('philosophy');
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }, [shouldReduceMotion]);

  const scrollDedicatedPageToTop = useCallback(() => {
    if (researchPageScrollRef.current) {
      researchPageScrollRef.current.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  }, [shouldReduceMotion]);

  // Lock background page scroll while the dedicated Research page is open
  useEffect(() => {
    if (routeState.mode !== 'overview') {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        scrollDedicatedPageToTop();
      }, 20);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [routeState.mode, routeState.categorySlug, routeState.articleSlug, scrollDedicatedPageToTop]);

  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseResearchUrl(window.location.pathname);
      setRouteState(parsed);
      if (parsed.categorySlug) {
        const portal = getPortalBySlug(parsed.categorySlug);
        if (portal) {
          setViewState(prev => ({
            index: portal.chapterIndex,
            direction: portal.chapterIndex >= prev.index ? 1 : -1
          }));
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenCategoryPortal = useCallback(
    (categorySlug: string) => {
      const portal = getPortalBySlug(categorySlug);
      if (portal) {
        setViewState(prev => ({
          index: portal.chapterIndex,
          direction: portal.chapterIndex >= prev.index ? 1 : -1
        }));
      }
      const nextPath = `/research/${categorySlug}`;
      if (window.location.pathname !== nextPath) {
        window.history.pushState({ researchRoute: nextPath }, '', nextPath);
      }
      setRouteState({ mode: 'category', categorySlug });
      scrollDedicatedPageToTop();
    },
    [scrollDedicatedPageToTop]
  );

  const handleOpenArticle = useCallback(
    (categorySlug: string, articleSlug: string) => {
      const portal = getPortalBySlug(categorySlug);
      if (portal) {
        setViewState(prev => ({
          index: portal.chapterIndex,
          direction: portal.chapterIndex >= prev.index ? 1 : -1
        }));
      }
      const nextPath = `/research/${categorySlug}/${articleSlug}`;
      if (window.location.pathname !== nextPath) {
        window.history.pushState({ researchRoute: nextPath }, '', nextPath);
      }
      setRouteState({ mode: 'article', categorySlug, articleSlug });
      scrollDedicatedPageToTop();
    },
    [scrollDedicatedPageToTop]
  );

  const handleReturnToOverview = useCallback(
    (targetChapterIndex?: number) => {
      if (typeof targetChapterIndex === 'number') {
        setViewState(prev => ({
          index: targetChapterIndex,
          direction: targetChapterIndex >= prev.index ? 1 : -1
        }));
      }
      if (window.location.pathname !== '/') {
        window.history.pushState({ researchRoute: '/' }, '', '/');
      }
      setRouteState({ mode: 'overview' });
      setTimeout(() => {
        scrollResearchIntoView();
      }, 40);
    },
    [scrollResearchIntoView]
  );

  // Back arrow handler: goes back to the previous part (Article -> Category Page, Category Page -> Main Page)
  const handleStepBack = useCallback(() => {
    if (routeState.mode === 'article' && routeState.categorySlug) {
      handleOpenCategoryPortal(routeState.categorySlug);
    } else {
      handleReturnToOverview();
    }
  }, [routeState.mode, routeState.categorySlug, handleOpenCategoryPortal, handleReturnToOverview]);

  const isAshtaExhibitView = viewState.index === 1;
  const isBhairavView = viewState.index === 2;
  const isMatrix64View = viewState.index === 3;
  const isMatrikaView = viewState.index === 4;
  const isShriMeruView = viewState.index === 5;
  const isLokaView = viewState.index === 6;

  const activePortal = getPortalByChapterIndex(viewState.index);

  const selectedEmpiricalNode =
    EMPIRICAL_NODES.find(n => n.id === selectedEmpiricalId) || EMPIRICAL_NODES[0];
  const selectedBhairavEntry =
    selectedBhairavId === KAAL_BHAIRAV_CORE_ENTRY.id
      ? KAAL_BHAIRAV_CORE_ENTRY
      : BHAIRAV_CODEX_ENTRIES.find(e => e.id === selectedBhairavId) || BHAIRAV_CODEX_ENTRIES[0];

  const goToChapter = (targetIndex: number) => {
    setViewState(prev => ({
      index: targetIndex,
      direction: targetIndex >= prev.index ? 1 : -1
    }));
    if (routeState.mode !== 'overview') {
      const targetPortal = getPortalByChapterIndex(targetIndex);
      const nextPath = `/research/${targetPortal.slug}`;
      if (window.location.pathname !== nextPath) {
        window.history.pushState({ researchRoute: nextPath }, '', nextPath);
      }
      setRouteState({ mode: 'category', categorySlug: targetPortal.slug });
      scrollDedicatedPageToTop();
    }
  };

  const handlePrevView = () => {
    const nextIdx = (viewState.index - 1 + TOTAL_CHAPTERS) % TOTAL_CHAPTERS;
    setViewState({
      index: nextIdx,
      direction: -1
    });
    if (routeState.mode === 'category') {
      const nextPortal = getPortalByChapterIndex(nextIdx);
      handleOpenCategoryPortal(nextPortal.slug);
    }
  };

  const handleNextView = () => {
    const nextIdx = (viewState.index + 1) % TOTAL_CHAPTERS;
    setViewState({
      index: nextIdx,
      direction: 1
    });
    if (routeState.mode === 'category') {
      const nextPortal = getPortalByChapterIndex(nextIdx);
      handleOpenCategoryPortal(nextPortal.slug);
    }
  };

  const handleLaunchStudioAtNode = (chapterIndex: number, interactiveIndex?: number) => {
    if (chapterIndex === 0 && typeof interactiveIndex === 'number') {
      const node = EMPIRICAL_NODES[interactiveIndex];
      if (node) setSelectedEmpiricalId(node.id);
    } else if (chapterIndex === 1 && typeof interactiveIndex === 'number') {
      setFocusedBhairavaProfileIdx(interactiveIndex);
    } else if (chapterIndex === 2 && typeof interactiveIndex === 'number') {
      if (interactiveIndex === 0) {
        setSelectedBhairavId(KAAL_BHAIRAV_CORE_ENTRY.id);
      } else {
        const entry = BHAIRAV_CODEX_ENTRIES[interactiveIndex - 1];
        if (entry) setSelectedBhairavId(entry.id);
      }
    } else if ((chapterIndex === 4 || chapterIndex === 5) && typeof interactiveIndex === 'number') {
      setFocusedMatrikaProfileIdx(interactiveIndex);
    }
    const targetPortal = getPortalByChapterIndex(chapterIndex);
    handleOpenCategoryPortal(targetPortal.slug);
  };

  const slideVariants = {
    enter: (direction: number) =>
      shouldReduceMotion
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: direction > 0 ? 90 : -90 },
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) =>
      shouldReduceMotion
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: direction > 0 ? -90 : 90 }
  };

  return (
    <section
      id="philosophy"
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-10 lg:px-14 overflow-hidden border-b border-bronze-dark/40 bg-[#17100C]"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/BACKGROUND%202.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Background grain and vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />

      {/* Faint blueprint / geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(rgba(197,168,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-[1480px] w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-1 sm:px-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">
              {t('THE SCIENCE OF MYTH', 'मिथक का विज्ञान')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            {t('RESEARCH PHILOSOPHY', 'शोध दर्शन')}
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={`quote-view-${viewState.index}-${lang}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-ancient-beige/70 font-vintage italic leading-relaxed"
            >
              {isAshtaExhibitView
                ? t(
                    '“Eight directional forms, eight planetary frequencies, and the central axis of Kaal Bhairava — mapped across sacred space and cosmic octave.”',
                    '“आठ दिशात्मक स्वरूप, आठ ग्रहीय आवृत्तियाँ और काल भैरव की केंद्रीय धुरी — पवित्र स्थान और ब्रह्माण्डीय सप्तक में मानचित्रित।”'
                  )
                : isMatrix64View
                  ? t(
                      '“Eight Bhairavas and eight Matrikas across 64 combinatorial vectors — an interactive comparative research matrix.”',
                      '“64 संयोजनात्मक सदिशों में आठ भैरव और आठ मातृकाएँ — एक संवादात्मक तुलनात्मक शोध आव्यूह।”'
                    )
                  : isMatrikaView
                    ? t(
                        '“Eight archetypal Matrika profiles and eight animated visual systems — exploring symbolic cybernetic, elemental, and sacred-geographical mappings.”',
                        '“आठ आद्यप्ररूपी मातृका प्रोफ़ाइल और आठ गतिशील दृश्य प्रणालियाँ — प्रतीकात्मक साइबरनेटिक, तात्त्विक और पवित्र-भौगोलिक मानचित्रण का अन्वेषण।”'
                      )
                    : isShriMeruView
                      ? t(
                          '“One Yantra, Nine Enclosures, Forty-Four Triangles, and the Eight Mothers of the Bhūpura — a continuous geometric journey inward to the Bindu.”',
                          '“एक यन्त्र, नौ आवरण, चौवालीस त्रिकोण और भूपुर की अष्ट मातृकाएँ — बाहरी द्वार से केंद्रीय बिन्दु की ओर एक सतत ज्यामितीय यात्रा।”'
                        )
                      : isLokaView
                        ? t(
                            '“Fourteen Lokas across the vertical axis of the Brahmanda — seven higher realms (Urdhva Lokas) and seven subterranean kingdoms (Adho Lokas / Patala) pivoted around Bhuloka.”',
                            '“ब्रह्माण्ड के ऊर्ध्वाधर अक्ष पर चौदह लोक — भूर्लोक (पृथ्वी) की धुरी से विभाजित सात उच्च लोक (ऊर्ध्व लोक) और सात भूमिगत लोक (अधो लोक / पाताल)।”'
                          )
                        : isBhairavView
                          ? t(
                              '“We do not approach Bhairav through fear alone. We investigate the traditions, symbols, histories, and evidence through which Bhairav is understood.”',
                              '“हम केवल भय के माध्यम से भैरव के निकट नहीं जाते। हम उन परंपराओं, प्रतीकों, इतिहासों और प्रमाणों का अन्वेषण करते हैं जिनके माध्यम से भैरव तत्त्व को समझा जाता है।”'
                            )
                          : t(
                              '"We do not debunk. We do not mythologize. We measure."',
                              '"हम न तो अंध-खण्डन करते हैं और न ही मिथकीकरण। हम मापन और परीक्षण करते हैं।"'
                            )}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Main Page Research Philosophy Content: ONLY the Circular Mandala Portals Section */}
        <CircularMandalaNavigation
          activeChapterIndex={viewState.index}
          activeRouteMode="overview"
          onSelectChapterPreview={goToChapter}
          onOpenCategoryPortal={handleOpenCategoryPortal}
          onOpenArticle={handleOpenArticle}
        />

        {/* Whole New Standalone Page Dedicated Exclusively to the Research Section (Opened Portals & Articles) */}
        {/* Rendered via createPortal directly into document.body so it escapes section#philosophy's z-10 stacking context and completely covers the homepage hero man image (z-20) and all other sections */}
        {routeState.mode !== 'overview' &&
          typeof document !== 'undefined' &&
          createPortal(
            <div
              ref={researchPageScrollRef}
              role="region"
              aria-label={t('Dedicated Research Philosophy Page', 'समर्पित शोध दर्शन पृष्ठ')}
              className="fixed inset-0 z-[80] isolate overflow-y-auto overflow-x-hidden bg-[#17100C] text-[#F5E8CE]"
            >
            {/* Standalone Research Page Background Texture */}
            <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: "url('/BACKGROUND%202.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="fixed inset-0 z-0 vignette-ambient pointer-events-none" />
            <div className="fixed inset-0 z-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(rgba(197,168,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Sticky Top Bar with Prominent Back Arrow to Return to the Previous Part */}
            <header className="sticky top-0 z-50 bg-[#110B07]/95 backdrop-blur-md border-b border-[#D3AD55]/35 px-3 sm:px-6 md:px-10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="max-w-[1480px] mx-auto flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleStepBack}
                    aria-label={
                      routeState.mode === 'article'
                        ? t('Back to previous category page', 'पिछले श्रेणी पृष्ठ पर वापस जाएँ')
                        : t('Back to main page Research Philosophy', 'मुख्य पृष्ठ शोध दर्शन पर वापस जाएँ')
                    }
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-[#D3AD55] bg-[#26170F] hover:bg-[#382116] text-[#D3AD55] font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_18px_rgba(211,173,85,0.25)] active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                    <span>
                      {routeState.mode === 'article'
                        ? t(
                            `Back to ${(getPortalBySlug(routeState.categorySlug || '') || activePortal).shortTitleEn}`,
                            `${(getPortalBySlug(routeState.categorySlug || '') || activePortal).shortTitleHi} पर वापस जाएँ`
                          )
                        : t('Back to Main Page', 'मुख्य पृष्ठ पर वापस जाएँ')}
                    </span>
                  </button>

                  {routeState.mode === 'article' && (
                    <button
                      type="button"
                      onClick={() => handleReturnToOverview()}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#5A3922] bg-[#17100C] hover:border-[#D3AD55]/70 text-[#C8B69E] hover:text-[#F5E8CE] font-mono text-[10px] uppercase tracking-[0.14em] transition-all cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#D3AD55]" />
                      <span>{t('Main Page Mandala', 'मुख्य पृष्ठ मण्डल')}</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] text-[#D3AD55] px-2.5 py-1 rounded border border-[#D3AD55]/35 bg-[#1D120B]">
                    {t('RESEARCH PHILOSOPHY ARCHIVE', 'शोध दर्शन अभिलेखागार')}
                  </span>
                </div>
              </div>
            </header>

            {/* Standalone Research Page Main Content Area */}
            <div className="relative z-10 max-w-[1480px] w-full mx-auto px-3 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-12 pb-24">
              {/* Dedicated Individual Article Monograph View (when URL is /research/:categorySlug/:articleSlug) */}
              {routeState.mode === 'article' &&
                routeState.categorySlug &&
                routeState.articleSlug && (() => {
                  const resolved = getArticleBySlugs(
                    routeState.categorySlug,
                    routeState.articleSlug
                  );
                  if (!resolved) {
                    return (
                      <div className="mb-10 pb-8">
                        <CategoryLandingPageView
                          portal={getPortalBySlug(routeState.categorySlug) || activePortal}
                          onBackToOverview={() => handleReturnToOverview()}
                          onSelectCategoryPortal={handleOpenCategoryPortal}
                          onOpenArticle={handleOpenArticle}
                        />
                      </div>
                    );
                  }
                  return (
                    <div className="mb-10 pb-8">
                      <ArticleMonographPageView
                        portal={resolved.portal}
                        article={resolved.article}
                        onBackToCategory={handleOpenCategoryPortal}
                        onBackToOverview={() => handleReturnToOverview()}
                        onOpenArticle={handleOpenArticle}
                        onLaunchStudioAtNode={handleLaunchStudioAtNode}
                      />
                    </div>
                  );
                })()}

              {/* Dedicated Category Portal Landing Page View (when URL is /research/:categorySlug) */}
              {routeState.mode === 'category' && routeState.categorySlug && (
                <div className="mb-10 pb-8">
                  <CategoryLandingPageView
                    portal={getPortalBySlug(routeState.categorySlug) || activePortal}
                    onBackToOverview={() => handleReturnToOverview()}
                    onSelectCategoryPortal={handleOpenCategoryPortal}
                    onOpenArticle={handleOpenArticle}
                  >
              {/* Mobile & Tablet Chapter Switcher Bar */}
              <div className="lg:hidden mb-4 flex items-center justify-between gap-2 bg-[#110c09]/90 border border-[#5A3922]/70 rounded-lg p-2">
                <button
                  type="button"
                  onClick={handlePrevView}
                  aria-label={t('Previous research philosophy view', 'पिछला शोध दर्शन दृश्य')}
                  className="min-h-[40px] px-3 py-1.5 rounded border border-[#5A3922] bg-[#17100C] text-[#D3AD55] flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t('Prev', 'पिछला')}</span>
                </button>

                <div className="text-center px-1 min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#D3AD55] font-semibold truncate">
                    {t(`Chapter ${viewState.index + 1} of ${TOTAL_CHAPTERS}`, `अध्याय ${viewState.index + 1} / ${TOTAL_CHAPTERS}`)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleNextView}
                  aria-label={t('Next research philosophy view', 'अगला शोध दर्शन दृश्य')}
                  className="min-h-[40px] px-3 py-1.5 rounded border border-[#5A3922] bg-[#17100C] text-[#D3AD55] flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider cursor-pointer active:scale-95"
                >
                  <span>{t('Next', 'अगला')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Main Wrapper with Left/Right Arrows Beside the Shifting Div on Desktop */}
              <div className="relative flex items-center justify-between gap-0 lg:gap-4">
          {/* Left Arrow Beside the Div (Desktop lg+) */}
          <button
            type="button"
            onClick={handlePrevView}
            aria-label={t('Previous research philosophy view', 'पिछला शोध दर्शन दृश्य')}
            className="hidden lg:flex shrink-0 w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-[#5A3922] bg-[#17100C]/90 text-[#D3AD55] items-center justify-center transition-all duration-300 motion-reduce:transition-none hover:border-[#D3AD55] hover:bg-[#D3AD55]/10 hover:shadow-[0_0_15px_rgba(211,173,85,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] cursor-pointer z-30 group"
          >
            <ArrowLeft
              className="w-5 h-5 text-[#D3AD55]/85 group-hover:text-[#D3AD55] group-hover:-translate-x-0.5 transition-all duration-300"
              strokeWidth={1.75}
            />
          </button>

          {/* Horizontally Shifting Div Container */}
          <div className="w-full max-w-[1360px] mx-auto overflow-hidden">
            <AnimatePresence mode="wait" custom={viewState.direction}>
              {viewState.index === 0 ? (
                /* VIEW 1: ORIGINAL EMPIRICAL RESEARCH PHILOSOPHY */
                <motion.div
                  key="view-empirical"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Left Side: Circular Interactive Diagram (4 cols on lg) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-80 h-80 scale-[0.82] xs:scale-[0.9] sm:scale-100 flex items-center justify-center">
                      {/* Outer Circular Ring */}
                      <div className="absolute inset-0 rounded-full border border-bronze-light/20 border-dashed" />
                      <div className="absolute inset-4 rounded-full border border-gold-faded/10" />

                      {/* Spinning Sanskrit Script Ring (Sanskrit preserved untouched) */}
                      <svg
                        className="absolute inset-6 w-[252px] h-[252px] text-gold-faded/10 animate-[spin_180s_linear_infinite] motion-reduce:animate-none"
                        viewBox="0 0 100 100"
                      >
                        <path
                          id="circlePath-empirical"
                          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                          fill="none"
                        />
                        <text fontFamily="serif" fontSize="6.5" fill="currentColor" letterSpacing="2">
                          <textPath href="#circlePath-empirical">
                            ऋग् वेद यजुर्वेद सामवेद अथर्ववेद वास्तु शास्त्र शिल्प रहस्य रसार्णव मण्डलम् ॥
                          </textPath>
                        </text>
                      </svg>

                      {/* Connecting Bronze Lines (SVGs radiating from core) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                        {EMPIRICAL_NODES.map(node => {
                          const rad = (node.angle * Math.PI) / 180;
                          const x2 = 100 + Math.cos(rad) * 72;
                          const y2 = 100 + Math.sin(rad) * 72;
                          const isSelected = node.id === selectedEmpiricalNode.id;
                          return (
                            <g key={node.id}>
                              <line
                                x1="100"
                                y1="100"
                                x2={x2}
                                y2={y2}
                                stroke={isSelected ? '#d4af37' : '#3a2e24'}
                                strokeWidth={isSelected ? '1.75' : '0.75'}
                                strokeDasharray={isSelected ? 'none' : '2 2'}
                                className="transition-all duration-300 motion-reduce:transition-none"
                              />
                              {isSelected && (
                                <circle
                                  cx={x2}
                                  cy={y2}
                                  r="3"
                                  fill="#d4af37"
                                  className="animate-ping motion-reduce:animate-none"
                                />
                              )}
                            </g>
                          );
                        })}
                      </svg>

                      {/* Central Core Circle (Gold Medallion) */}
                      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#2a1d15] to-[#0f0a07] border border-gold-warm/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.15)] z-20">
                        <span className="font-serif text-[10px] text-gold-warm tracking-widest font-bold">
                          CAGS
                        </span>
                        <span className="text-[7px] font-mono text-gold-faded/60 uppercase">
                          {t('Varanasi', 'वाराणसी')}
                        </span>
                      </div>

                      {/* Clickable Peripheral Nodes */}
                      {EMPIRICAL_NODES.map(node => {
                        const rad = (node.angle * Math.PI) / 180;
                        const x = 160 + Math.cos(rad) * 110 - 24;
                        const y = 160 + Math.sin(rad) * 110 - 24;
                        const IconComponent = node.icon;
                        const isSelected = node.id === selectedEmpiricalNode.id;

                        return (
                          <button
                            key={node.id}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={t(node.name, node.nameHi)}
                            onClick={() => {
                              setSelectedEmpiricalId(node.id);
                              const cardEl = document.getElementById('philosophy-manuscript-card');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            style={{ left: `${x}px`, top: `${y}px` }}
                            className={`absolute w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 motion-reduce:transition-none z-30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1512] ${
                              isSelected
                                ? 'bg-gold-warm/20 border-2 border-gold-warm text-gold-warm shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-110'
                                : 'bg-[#1a1512] border border-bronze-dark text-ancient-beige/50 hover:border-gold-faded/50 hover:text-gold-faded'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="text-[6.5px] font-mono tracking-wider uppercase mt-1 text-center w-full truncate px-1">
                              {node.sanskritTerm.split('-')[0]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 justify-center max-w-sm">
                      {EMPIRICAL_NODES.map(node => {
                        const isSelected = node.id === selectedEmpiricalNode.id;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => {
                              setSelectedEmpiricalId(node.id);
                              const cardEl = document.getElementById('philosophy-manuscript-card');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1512] ${
                              isSelected
                                ? 'bg-gold-warm/15 border-gold-warm text-gold-warm font-semibold'
                                : 'bg-ancient-charcoal/30 border-bronze-dark/40 text-ancient-beige/50 hover:border-gold-faded/30 hover:text-gold-faded'
                            }`}
                          >
                            {t(node.name, node.nameHi)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Side: Ancient Manuscript Sheet (8 cols on lg) */}
                  <div id="philosophy-manuscript-card" className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${selectedEmpiricalNode.id}-${lang}`}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                        className="relative p-6 md:px-9 md:py-7 rounded bg-ancient-beige text-[#1c1613] shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-bronze-light/40 overflow-hidden font-vintage paper-grain"
                      >
                        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-[#bfa15f]/15 pointer-events-none" />
                        <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full border border-dashed border-[#bfa15f]/15 pointer-events-none" />

                        <div className="flex flex-wrap justify-between items-center gap-2 border-b border-[#3a2e24]/20 pb-3.5 mb-4">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#544338]">
                              {t('METHODOLOGY CODEX IX', 'कार्यप्रणाली संहिता IX')}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif text-[#2a1f18] mt-1">
                              {t(selectedEmpiricalNode.name, selectedEmpiricalNode.nameHi)}
                            </h3>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] font-mono tracking-widest font-bold bg-[#3a2e24]/10 px-2.5 py-1 rounded text-[#2a1f18] uppercase">
                              {selectedEmpiricalNode.sanskritTerm}
                            </span>
                          </div>
                        </div>

                        {/* Sanskrit verse preserved untouched; translation switches between English and Hindi */}
                        <div className="p-4 bg-[#ede2d4] border-l-4 border-gold-faded rounded-r mb-5 shadow-inner italic">
                          <p className="text-base sm:text-lg text-[#2a1f18] tracking-wide text-center font-serif leading-relaxed mb-1.5">
                            {selectedEmpiricalNode.sanskritVerse}
                          </p>
                          <p className="text-[12px] text-[#544338] text-center font-sans tracking-wide">
                            {t(selectedEmpiricalNode.translation, selectedEmpiricalNode.translationHi)}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-serif text-[12px] uppercase tracking-wider text-[#544338] font-bold">
                              {t('Investigation Principle:', 'अन्वेषण सिद्धांत:')}
                            </h4>
                            <p className="text-[14px] leading-relaxed text-[#2c221a] mt-1">
                              {t(selectedEmpiricalNode.fullPrinciple, selectedEmpiricalNode.fullPrincipleHi)}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3a2e24]/15">
                            <div>
                              <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">
                                {t('Empirical Field Term:', 'आनुभविक क्षेत्रीय पारिभाषिक शब्द:')}
                              </h5>
                              <p className="font-sans text-[12px] font-medium text-[#2c221a] mt-0.5">
                                {t(selectedEmpiricalNode.scientificConcept, selectedEmpiricalNode.scientificConceptHi)}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">
                                {t('Benchmark Case Log:', 'संदर्भ केस अभिलेख:')}
                              </h5>
                              <span className="inline-flex items-center gap-1 font-sans text-[12px] font-semibold text-amber-900 mt-0.5 underline decoration-dotted">
                                <Eye className="w-3.5 h-3.5" />
                                {t(selectedEmpiricalNode.activeCase, selectedEmpiricalNode.activeCaseHi)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-between items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#544338]/60 uppercase tracking-widest pt-3.5 border-t border-[#3a2e24]/10">
                          <span>{t('Center for Anomalous Studies', 'असाधारण अध्ययन केंद्र')}</span>
                          <div className="flex flex-wrap items-center gap-2">
                            <span>{t('Codex No:', 'संहिता क्र.:')} {selectedEmpiricalNode.id.replace('node-', 'CAGS-0')}</span>
                            <button
                              type="button"
                              onClick={() =>
                                handleOpenArticle(
                                  'cags-field-archive',
                                  EMPIRICAL_NODE_TO_ARTICLE_SLUG[selectedEmpiricalNode.id] || 'acoustic-resonance'
                                )
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#2a1f18] text-[#D3AD55] hover:bg-[#3d2d22] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span>{t('Open Full Article Page →', 'संपूर्ण शोध-लेख खोलें →')}</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              ) : viewState.index === 1 ? (
                /* VIEW 2: ASHTA BHAIRAVA — THE EIGHT DIRECTIONS, EIGHT FORMS, EIGHT RESEARCH PROFILES */
                <motion.div
                  key="view-ashta-bhairava-exhibit"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <AshtaBhairavaExperience
                    initialProfileIndex={focusedBhairavaProfileIdx}
                    onNextChapter={() => goToChapter(2)}
                  />
                </motion.div>
              ) : viewState.index === 3 ? (
                /* VIEW 4: CHAPTER A — THE 64 YOGINI (8 BHAIRAVAS × 8 MATRIKAS = 64 MATRIKAS) */
                <motion.div
                  key="view-matrix-64"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <Matrix64Chapter
                    onPrevChapter={() => goToChapter(2)}
                    onNextChapter={() => goToChapter(4)}
                    onSelectBhairavaProfile={idx => {
                      setFocusedBhairavaProfileIdx(idx);
                      goToChapter(1);
                    }}
                    onSelectMatrikaProfile={idx => {
                      setFocusedMatrikaProfileIdx(idx);
                      goToChapter(4);
                    }}
                  />
                </motion.div>
              ) : viewState.index === 4 ? (
                /* VIEW 5: CHAPTER B — THE EIGHT MATRIKAS (8 ANIMATED PROFILES + SUMMARY) */
                <motion.div
                  key="view-eight-matrikas"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <MatrikaExperience
                    initialProfileIndex={focusedMatrikaProfileIdx}
                    onPrevChapter={() => goToChapter(3)}
                    onNextChapter={() => goToChapter(5)}
                    onOpenMatrix={() => goToChapter(3)}
                  />
                </motion.div>
              ) : viewState.index === 5 ? (
                /* VIEW 6: SHRI MERU CHAKRA, NINE ENCLOSURES & ASHTA MATRIKA */
                <motion.div
                  key="view-shri-meru-chakra"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <ShriMeruExperience
                    initialMatrikaIndex={focusedMatrikaProfileIdx}
                    onPrevChapter={() => goToChapter(4)}
                    onNextChapter={() => goToChapter(6)}
                    onOpenMatrix={() => goToChapter(3)}
                    onOpenCyberneticMatrika={idx => {
                      setFocusedMatrikaProfileIdx(idx);
                      goToChapter(4);
                    }}
                  />
                </motion.div>
              ) : viewState.index === 6 ? (
                /* VIEW 7: CHAPTER VII — THE 14 LOKAS IN HINDU COSMOLOGY */
                <motion.div
                  key="view-chaturdasha-loka"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <ChaturdashaLokaExperience
                    onPrevChapter={() => goToChapter(5)}
                    onNextChapter={() => goToChapter(0)}
                  />
                </motion.div>
              ) : (
                /* VIEW 3: BHAIRAV RESEARCH PHILOSOPHY — ASHTA BHAIRAVA & KAAL BHAIRAVA CODEX */
                <motion.div
                  key="view-bhairav"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Left Column: Bhairav Research Mapping Interface (4 cols on lg) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-80 h-80 scale-[0.82] xs:scale-[0.9] sm:scale-100 flex items-center justify-center">
                      {/* Concentric Rings & Faint Radial Construction Grid */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 320 320"
                        aria-hidden="true"
                      >
                        <circle
                          cx="160"
                          cy="160"
                          r="154"
                          fill="none"
                          stroke="#5A3922"
                          strokeWidth="0.75"
                          strokeDasharray="3 4"
                          opacity="0.55"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="138"
                          fill="none"
                          stroke="#B68A32"
                          strokeWidth="0.5"
                          opacity="0.22"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="116"
                          fill="none"
                          stroke="#5A3922"
                          strokeWidth="0.75"
                          opacity="0.45"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="68"
                          fill="none"
                          stroke="#B68A32"
                          strokeWidth="0.5"
                          strokeDasharray="2 3"
                          opacity="0.3"
                        />

                        {/* Outer ring index ticks & radial connectors for the 8 Bhairavas */}
                        {BHAIRAV_CODEX_ENTRIES.map((entry, idx) => {
                          const rad = (entry.angle * Math.PI) / 180;
                          const x1 = 160 + Math.cos(rad) * 40;
                          const y1 = 160 + Math.sin(rad) * 40;
                          const x2 = 160 + Math.cos(rad) * 116;
                          const y2 = 160 + Math.sin(rad) * 116;
                          const isSelected =
                            entry.id === selectedBhairavEntry.id ||
                            selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id;

                          return (
                            <g key={entry.id}>
                              <line
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={isSelected ? '#D3AD55' : '#5A3922'}
                                strokeWidth={entry.id === selectedBhairavEntry.id ? '1.75' : '0.85'}
                                strokeDasharray={isSelected ? 'none' : '2 3'}
                                className="transition-all duration-300 motion-reduce:transition-none"
                              />
                              {entry.id === selectedBhairavEntry.id && (
                                <circle
                                  cx={x2}
                                  cy={y2}
                                  r="28"
                                  fill="none"
                                  stroke="#D3AD55"
                                  strokeWidth="0.75"
                                  opacity="0.5"
                                />
                              )}
                              <text
                                x={160 + Math.cos(rad) * 147}
                                y={160 + Math.sin(rad) * 147}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill={entry.id === selectedBhairavEntry.id ? '#D3AD55' : '#877665'}
                                fontSize="6.5"
                                fontFamily="monospace"
                                letterSpacing="0.5"
                                opacity={entry.id === selectedBhairavEntry.id ? '0.95' : '0.45'}
                              >
                                0{idx + 1}
                              </text>
                            </g>
                          );
                        })}
                      </svg>

                      {/* Central Node: KAAL BHAIRAVA */}
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id}
                        aria-label={t('Kaal Bhairava — Supreme Core', 'काल भैरव — सर्वोच्च केंद्र')}
                        onClick={() => {
                          setSelectedBhairavId(KAAL_BHAIRAV_CORE_ENTRY.id);
                          const cardEl = document.getElementById('bhairav-codex-panel');
                          if (cardEl && window.innerWidth < 1024) {
                            cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          }
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedBhairavId(KAAL_BHAIRAV_CORE_ENTRY.id);
                          }
                        }}
                        className={`absolute w-[82px] h-[82px] rounded-full bg-gradient-to-br from-[#28180F] to-[#17100C] flex flex-col items-center justify-center z-20 px-1.5 text-center cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] ${
                          selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id
                            ? 'border-2 border-[#D3AD55] shadow-[0_0_28px_rgba(211,173,85,0.4)] scale-105'
                            : 'border border-[#D3AD55]/65 shadow-[0_0_22px_rgba(211,173,85,0.18)] hover:border-[#D3AD55]'
                        }`}
                      >
                        <span className="font-serif text-[9.5px] leading-tight text-[#D3AD55] tracking-[0.12em] font-bold uppercase">
                          {t('Kaal Bhairava', 'काल भैरव')}
                        </span>
                        <span className="text-[6px] font-mono text-[#E6D7BD]/70 tracking-[0.1em] uppercase mt-1">
                          {t('SUPREME CORE', 'सर्वोच्च केंद्र')}
                        </span>
                      </div>

                      {/* Eight Connected Peripheral Bhairava Buttons */}
                      {BHAIRAV_CODEX_ENTRIES.map(entry => {
                        const rad = (entry.angle * Math.PI) / 180;
                        const x = 160 + Math.cos(rad) * 116 - 25;
                        const y = 160 + Math.sin(rad) * 116 - 25;
                        const IconComponent = entry.icon;
                        const isSelected = entry.id === selectedBhairavEntry.id;

                        return (
                          <button
                            key={entry.id}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={t(entry.selectorLabel, entry.selectorLabelHi)}
                            onClick={() => {
                              setSelectedBhairavId(entry.id);
                              const cardEl = document.getElementById('bhairav-codex-panel');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            style={{ left: `${x}px`, top: `${y}px` }}
                            className={`absolute w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center transition-all duration-300 motion-reduce:transition-none z-30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] ${
                              isSelected
                                ? 'bg-[#382116] border-2 border-[#D3AD55] text-[#D3AD55] shadow-[0_0_16px_rgba(211,173,85,0.32)] scale-110'
                                : 'bg-[#17100C] border border-[#5A3922] text-[#E6D7BD]/65 hover:border-[#B68A32] hover:text-[#D3AD55]'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" strokeWidth={1.75} />
                            <span className="text-[6px] font-mono tracking-wider uppercase mt-0.5 text-center w-full truncate px-1">
                              {t(entry.nodeShortLabel, entry.nodeShortLabelHi)}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Contextual Diagram Caption */}
                    <div className="mt-2.5 text-center">
                      <span className="font-mono text-[9px] tracking-[0.22em] text-[#877665] uppercase">
                        {t('ACTIVE NODE:', 'सक्रिय बिंदु:')} {selectedBhairavEntry.codexId} · {t(selectedBhairavEntry.title, selectedBhairavEntry.titleHi)}
                      </span>
                    </div>

                    {/* Eight Compact Ashta Bhairava Selector Buttons */}
                    <div
                      className="mt-3.5 flex flex-wrap gap-1.5 justify-center max-w-md"
                      role="group"
                      aria-label={t('Ashta Bhairava topic selectors', 'अष्ट भैरव विषय चयनकर्ता')}
                    >
                      {BHAIRAV_CODEX_ENTRIES.map(entry => {
                        const isSelected = entry.id === selectedBhairavEntry.id;
                        return (
                          <button
                            key={entry.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => {
                              setSelectedBhairavId(entry.id);
                              const cardEl = document.getElementById('bhairav-codex-panel');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            className={`px-2.5 py-1 rounded-[3px] text-[9.5px] font-mono uppercase tracking-[0.1em] border transition-all duration-300 motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-1 focus-visible:ring-offset-[#17100C] ${
                              isSelected
                                ? 'bg-[#382116]/90 border-[#D3AD55] text-[#D3AD55] font-semibold shadow-[0_0_10px_rgba(211,173,85,0.15)]'
                                : 'bg-[#28180F]/60 border-[#5A3922]/70 text-[#E6D7BD]/65 hover:border-[#B68A32] hover:bg-[#382116]/50 hover:text-[#D3AD55]'
                            }`}
                          >
                            {t(entry.selectorLabel, entry.selectorLabelHi)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: The Active Research Codex (8 cols on lg) */}
                  <div id="bhairav-codex-panel" className="lg:col-span-8 w-full">
                    <AnimatePresence mode="wait">
                      <motion.article
                        key={`${selectedBhairavEntry.id}-${lang}`}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
                        className="relative w-full p-5 sm:p-6 md:px-9 md:py-6 rounded-[4px] bg-[#F0E5D1] text-[#30241D] shadow-[0_14px_34px_rgba(0,0,0,0.65)] border border-[#B68A32]/35 overflow-hidden paper-grain"
                      >
                        {/* Codex Header */}
                        <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[#30241D]/15 pb-3 mb-3.5">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5A3922]">
                                {t('METHODOLOGY CODEX', 'शोध संहिता')} / {selectedBhairavEntry.codexId}
                              </span>
                              <span className="text-[9px] font-mono uppercase tracking-[0.14em] px-2 py-0.5 rounded-[2px] border border-[#5A3922]/25 text-[#5A3922] bg-[#E6D7BD]/70">
                                {t(selectedBhairavEntry.evidenceStatus, selectedBhairavEntry.evidenceStatusHi)}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif text-[#17100C] mt-1 tracking-wide font-semibold">
                              {t(selectedBhairavEntry.title, selectedBhairavEntry.titleHi)}
                            </h3>
                          </div>
                          <div className="text-right">
                            <span className="inline-block text-[10px] font-mono tracking-[0.18em] font-semibold bg-[#E6D7BD] border border-[#5A3922]/20 px-2.5 py-1 rounded-[2px] text-[#30241D] uppercase">
                              {t(selectedBhairavEntry.category, selectedBhairavEntry.categoryHi)}
                            </span>
                          </div>
                        </div>

                        {/* Featured Passage: Interpretive Frame */}
                        <div className="p-3 sm:px-4 sm:py-3 bg-[#E6D7BD]/75 border-l-[3px] border-[#B68A32] rounded-r-[2px] mb-3.5">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#5A3922] mb-1">
                            {t('INTERPRETIVE FRAME', 'व्याख्यात्मक संदर्भ')}
                          </span>
                          <p className="text-sm sm:text-[15px] text-[#30241D] font-serif italic leading-snug">
                            {t(selectedBhairavEntry.interpretiveFrame, selectedBhairavEntry.interpretiveFrameHi)}
                          </p>
                        </div>

                        {/* Investigation Principle */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A3922] font-semibold">
                              {t('INVESTIGATION PRINCIPLE', 'अन्वेषण सिद्धांत')}
                            </h4>
                            <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#30241D] font-serif mt-1">
                              {t(selectedBhairavEntry.investigationPrinciple, selectedBhairavEntry.investigationPrincipleHi)}
                            </p>
                          </div>

                          {/* Case-Study Prompt & Important Methodological Distinction */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                            <div className="p-2.5 sm:p-3 rounded-[2px] bg-[#E6D7BD]/55 border border-[#5A3922]/15">
                              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#5A3922] font-semibold">
                                {t('CASE-STUDY PROMPT', 'केस-स्टडी विषय')}
                              </span>
                              <p className="text-[12px] sm:text-[12.5px] leading-snug text-[#30241D] font-serif mt-1">
                                {t(selectedBhairavEntry.caseStudyPrompt, selectedBhairavEntry.caseStudyPromptHi)}
                              </p>
                            </div>
                            <div className="p-2.5 sm:p-3 rounded-[2px] bg-[#E6D7BD]/40 border border-[#5A3922]/15">
                              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#5A3922] font-semibold">
                                {t('IMPORTANT DISTINCTION', 'महत्वपूर्ण पद्धतिगत भेद')}
                              </span>
                              <p className="text-[12px] sm:text-[12.5px] leading-snug text-[#30241D]/90 font-serif mt-1">
                                {t(selectedBhairavEntry.importantDistinction, selectedBhairavEntry.importantDistinctionHi)}
                              </p>
                            </div>
                          </div>

                          {/* Evidence and Methodology Metadata */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#30241D]/15">
                            <div>
                              <h5 className="font-mono text-[9px] tracking-[0.2em] text-[#5A3922] uppercase">
                                {t('RESEARCH METHOD', 'शोध पद्धति')}
                              </h5>
                              <p className="font-serif text-[12.5px] sm:text-[13px] font-medium text-[#17100C] mt-0.5">
                                {t(selectedBhairavEntry.researchMethod, selectedBhairavEntry.researchMethodHi)}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-mono text-[9px] tracking-[0.2em] text-[#5A3922] uppercase">
                                {t('SOURCE REGISTER', 'स्रोत पंजिका')}
                              </h5>
                              <p className="font-serif text-[12.5px] sm:text-[13px] font-medium text-[#17100C] mt-0.5">
                                {t(selectedBhairavEntry.sourceRegister, selectedBhairavEntry.sourceRegisterHi)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Document Footer */}
                        <div className="mt-4 flex flex-wrap justify-between items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#5A3922]/80 uppercase tracking-[0.2em] pt-3 border-t border-[#30241D]/15">
                          <span>{t('BHAIRAV RESEARCH ARCHIVE', 'भैरव शोध अभिलेखागार')}</span>
                          <div className="flex flex-wrap items-center gap-2">
                            <span>{t('CODEX NO:', 'संहिता क्र.:')} {selectedBhairavEntry.codexId}</span>
                            <button
                              type="button"
                              onClick={() =>
                                handleOpenArticle(
                                  'bhairav-investigation-codex',
                                  BHAIRAV_ID_TO_ARTICLE_SLUG[selectedBhairavEntry.id] || 'kaal-bhairava-sovereign-core'
                                )
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#28180F] text-[#D3AD55] hover:bg-[#382116] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span>{t('Open Full Codex Article →', 'संपूर्ण संहिता लेख खोलें →')}</span>
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Arrow Beside the Div (Desktop lg+) */}
          <button
            type="button"
            onClick={handleNextView}
            aria-label={t('Next research philosophy view', 'अगला शोध दर्शन दृश्य')}
            className="hidden lg:flex shrink-0 w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-[#5A3922] bg-[#17100C]/90 text-[#D3AD55] items-center justify-center transition-all duration-300 motion-reduce:transition-none hover:border-[#D3AD55] hover:bg-[#D3AD55]/10 hover:shadow-[0_0_15px_rgba(211,173,85,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] cursor-pointer z-30 group"
          >
            <ArrowRight
              className="w-5 h-5 text-[#D3AD55]/85 group-hover:text-[#D3AD55] group-hover:translate-x-0.5 transition-all duration-300"
              strokeWidth={1.75}
            />
          </button>
        </div>
            </CategoryLandingPageView>
          </div>
        )}

              {/* Bottom Back-Navigation Bar inside the Dedicated Research Page */}
              <div className="mt-8 pt-6 border-t border-[#5A3922]/60 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleStepBack}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D3AD55]/75 bg-[#23160E] hover:bg-[#382116] text-[#D3AD55] font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-[0_0_16px_rgba(211,173,85,0.2)]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    {routeState.mode === 'article'
                      ? t(
                          `Back to ${(getPortalBySlug(routeState.categorySlug || '') || activePortal).shortTitleEn}`,
                          `${(getPortalBySlug(routeState.categorySlug || '') || activePortal).shortTitleHi} पर वापस जाएँ`
                        )
                      : t('Back to Main Page (Research Mandala)', 'मुख्य पृष्ठ (शोध मण्डल) पर वापस जाएँ')}
                  </span>
                </button>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#877665]">
                  {t('CAGS · Dedicated Research Philosophy Portal', 'सीएजीएस · समर्पित शोध दर्शन पोर्टल')}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
