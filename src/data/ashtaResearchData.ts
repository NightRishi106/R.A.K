export interface AshtaBhairavaProfile {
  id: string;
  index: number;
  hindiName: string;
  englishName: string;
  shortTranslit: string;
  shortHindi: string;
  directionFull: string;
  directionFullHi: string;
  directionCode: 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N' | 'NE';
  directionCodeHi: string;
  compassAngle: number;
  accentColor: string;
  controlsLine: string;
  controlsLineHi: string;
  description: string;
  descriptionHi: string;
  shakti: string;
  shaktiHi: string;
  vahana: string;
  vahanaHi: string;
  planet: string;
  planetHi: string;
  toneHz: string;
  waveformLabel: string;
  waveformLabelHi: string;
  waveCycles: number;
  sourceReference: string;
  sourceReferenceHi: string;
}

export type MatrikaVisualizationType =
  | 'genesis-spiral'
  | 'standing-wave'
  | 'ignition-thrust'
  | 'homeostat-pid'
  | 'tectonic-mesh'
  | 'lightning-bus'
  | 'garbage-collector'
  | 'solid-state-render';

export interface AshtaMatrikaProfile {
  id: string;
  rowIndex: number; // 0..7
  rowLabel: string; // ROW 0 .. ROW 7
  rowLabelHi: string; // पंक्ति 0 .. पंक्ति 7
  binaryCode: string; // 000 .. 111
  bits: [number, number, number];
  hindiName: string;
  englishName: string;
  conceptualTitle: string;
  conceptualTitleHi: string;
  accentColor: string;
  secondaryColor: string;
  conceptualFormula: string;
  conceptualFormulaHi: string;
  symbolicAnnotation?: string;
  description: string;
  descriptionHi: string;
  clarifyingNote: string;
  clarifyingNoteHi: string;
  tattva: string;
  tattvaHi: string;
  gland: string;
  glandHi: string;
  hormone: string;
  hormoneHi: string;
  kshetra: string;
  kshetraHi: string;
  visualizationType: MatrikaVisualizationType;
  evidenceBadge: string;
  evidenceBadgeHi: string;
  sourceNote: string;
  sourceNoteHi: string;
}

export interface MatrixIntersectionData {
  id: string; // BM-01-01 .. BM-08-08
  rowIndex: number;
  colIndex: number;
  bhairava: AshtaBhairavaProfile;
  matrika: AshtaMatrikaProfile;
  isCanonicalConsortPair: boolean;
  relationshipSummary: string;
  relationshipSummaryHi: string;
  researchQuestion: string;
  researchQuestionHi: string;
  evidenceStatus: string;
  evidenceStatusHi: string;
}

export const ASHTA_BHAIRAVA_PROFILES: AshtaBhairavaProfile[] = [
  {
    id: 'bh-01-asitanga',
    index: 1,
    hindiName: 'असितांग भैरव',
    englishName: 'Asitanga Bhairava',
    shortTranslit: 'Asitanga',
    shortHindi: 'असितांग',
    directionFull: 'East',
    directionFullHi: 'पूर्व',
    directionCode: 'E',
    directionCodeHi: 'पू',
    compassAngle: 0,
    accentColor: '#FFBF38',
    controlsLine: 'Controls: Creativity · Knowledge · Wisdom · Expansion',
    controlsLineHi: 'नियंत्रण: सृजनशीलता · ज्ञान · प्रज्ञा · विस्तार',
    description: 'Opens the cycle: creation and knowledge, facing the rising sun.',
    descriptionHi: 'चक्र का आरम्भ: सृजन और ज्ञान के अधिष्ठाता, उगते सूर्य की ओर अभिमुख।',
    shakti: 'Brahmi',
    shaktiHi: 'ब्राह्मी',
    vahana: 'Swan',
    vahanaHi: 'हंस',
    planet: 'Jupiter',
    planetHi: 'बृहस्पति · गुरु',
    toneHz: '≈ 183.6 Hz',
    waveformLabel: '≈ 183.6 Hz · Jupiter',
    waveformLabelHi: '≈ 183.6 Hz · बृहस्पति · गुरु',
    waveCycles: 4.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-02-ruru',
    index: 2,
    hindiName: 'रुरु भैरव',
    englishName: 'Ruru Bhairava',
    shortTranslit: 'Ruru',
    shortHindi: 'रुरु',
    directionFull: 'South-East',
    directionFullHi: 'आग्नेय (दक्षिण-पूर्व)',
    directionCode: 'SE',
    directionCodeHi: 'आग्नेय',
    compassAngle: 45,
    accentColor: '#9CCBFF',
    controlsLine: 'Controls: Teaching · Refinement · Prosperity · Arts',
    controlsLineHi: 'नियंत्रण: शिक्षण · परिष्कार · समृद्धि · कलाएँ',
    description: 'Refines what is created; the guru principle.',
    descriptionHi: 'सृजित तत्व का परिष्कार करते हैं; गुरु तत्त्व के प्रतीक।',
    shakti: 'Maheshwari',
    shaktiHi: 'माहेश्वरी',
    vahana: 'Bull',
    vahanaHi: 'वृषभ (बैल)',
    planet: 'Venus',
    planetHi: 'शुक्र',
    toneHz: '≈ 221.2 Hz',
    waveformLabel: '≈ 221.2 Hz · Venus',
    waveformLabelHi: '≈ 221.2 Hz · शुक्र',
    waveCycles: 5.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-03-chanda',
    index: 3,
    hindiName: 'चण्ड भैरव',
    englishName: 'Chanda Bhairava',
    shortTranslit: 'Chanda',
    shortHindi: 'चण्ड',
    directionFull: 'South',
    directionFullHi: 'दक्षिण',
    directionCode: 'S',
    directionCodeHi: 'द',
    compassAngle: 90,
    accentColor: '#FF4638',
    controlsLine: 'Controls: Energy · Courage · Victory over opponents',
    controlsLineHi: 'नियंत्रण: ऊर्जा · साहस · विरोधियों पर विजय',
    description: 'Supplies force and protection to drive action.',
    descriptionHi: 'कर्म को गति देने के लिए प्रचण्ड शक्ति और सुरक्षा प्रदान करते हैं।',
    shakti: 'Kaumari',
    shaktiHi: 'कौमारी',
    vahana: 'Peacock',
    vahanaHi: 'मयूर (मोर)',
    planet: 'Mars',
    planetHi: 'मंगल',
    toneHz: '≈ 144.7 Hz',
    waveformLabel: '≈ 144.7 Hz · Mars',
    waveformLabelHi: '≈ 144.7 Hz · मंगल',
    waveCycles: 3.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-04-krodha',
    index: 4,
    hindiName: 'क्रोध भैरव',
    englishName: 'Krodha Bhairava',
    shortTranslit: 'Krodha',
    shortHindi: 'क्रोध',
    directionFull: 'South-West',
    directionFullHi: 'नैऋत्य (दक्षिण-पश्चिम)',
    directionCode: 'SW',
    directionCodeHi: 'नैऋत्य',
    compassAngle: 135,
    accentColor: '#8271FF',
    controlsLine: 'Controls: Disciplined action · Removing obstacles · Karma',
    controlsLineHi: 'नियंत्रण: अनुशासित कर्म · बाधा निवारण · कर्म सुधार',
    description: 'Channels anger into disciplined, karmic correction.',
    descriptionHi: 'क्रोध को अनुशासित और कार्मिक सुधार की शक्ति में रूपांतरित करते हैं।',
    shakti: 'Vaishnavi',
    shaktiHi: 'वैष्णवी',
    vahana: 'Garuda',
    vahanaHi: 'गरुड़',
    planet: 'Saturn',
    planetHi: 'शनि',
    toneHz: '≈ 147.9 Hz',
    waveformLabel: '≈ 147.9 Hz · Saturn',
    waveformLabelHi: '≈ 147.9 Hz · शनि',
    waveCycles: 3.8,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-05-unmatta',
    index: 5,
    hindiName: 'उन्मत्त भैरव',
    englishName: 'Unmatta Bhairava',
    shortTranslit: 'Unmatta',
    shortHindi: 'उन्मत्त',
    directionFull: 'West',
    directionFullHi: 'पश्चिम',
    directionCode: 'W',
    directionCodeHi: 'प',
    compassAngle: 180,
    accentColor: '#18C69A',
    controlsLine: 'Controls: Control of ego · Intellect · Speech',
    controlsLineHi: 'नियंत्रण: अहंकार का दमन · बुद्धि · वाणी संयम',
    description: "Dissolves the ego's false certainty: divine madness beyond logic.",
    descriptionHi: 'अहंकार के मिथ्या दंभ को भंग करते हैं: साधारण तर्क से परे दिव्य भाव-उन्माद।',
    shakti: 'Varahi',
    shaktiHi: 'वाराही',
    vahana: 'Horse',
    vahanaHi: 'अश्व (घोड़ा)',
    planet: 'Mercury',
    planetHi: 'बुध',
    toneHz: '≈ 141.3 Hz',
    waveformLabel: '≈ 141.3 Hz · Mercury',
    waveformLabelHi: '≈ 141.3 Hz · बुध',
    waveCycles: 3.4,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-06-kapala',
    index: 6,
    hindiName: 'कपाल भैरव',
    englishName: 'Kapala Bhairava',
    shortTranslit: 'Kapala',
    shortHindi: 'कपाल',
    directionFull: 'North-West',
    directionFullHi: 'वायव्य (उत्तर-पश्चिम)',
    directionCode: 'NW',
    directionCodeHi: 'वायव्य',
    compassAngle: 225,
    accentColor: '#38D9FF',
    controlsLine: 'Controls: Mind · Emotions · Ending fruitless actions',
    controlsLineHi: 'नियंत्रण: मन · भावनाएँ · निष्फल कर्मों का अंत',
    description: 'Releases mental stagnation and ends fruitless cycles of action.',
    descriptionHi: 'मानसिक जड़ता को मुक्त करते हैं और निष्फल कर्म-चक्रों का अंत करते हैं।',
    shakti: 'Indrani',
    shaktiHi: 'इन्द्राणी',
    vahana: 'Elephant',
    vahanaHi: 'गज (हाथी)',
    planet: 'Moon',
    planetHi: 'चन्द्र',
    toneHz: '≈ 210.4 Hz',
    waveformLabel: '≈ 210.4 Hz · Moon',
    waveformLabelHi: '≈ 210.4 Hz · चन्द्र',
    waveCycles: 5.2,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-07-bhishana',
    index: 7,
    hindiName: 'भीषण भैरव',
    englishName: 'Bhishana Bhairava',
    shortTranslit: 'Bhishana',
    shortHindi: 'भीषण',
    directionFull: 'North',
    directionFullHi: 'उत्तर',
    directionCode: 'N',
    directionCodeHi: 'उ',
    compassAngle: 270,
    accentColor: '#FF8C24',
    controlsLine: 'Controls: Removing fear · Negativity · Hidden forces',
    controlsLineHi: 'नियंत्रण: भय निवारण · नकारात्मकता का नाश · अदृश्य शक्तियाँ',
    description: 'Confronts dread and clears unseen obstructions at the northern threshold.',
    descriptionHi: 'उत्तरी द्वार पर भय का सामना करते हैं और अदृश्य बाधाओं को दूर करते हैं।',
    shakti: 'Chamunda',
    shaktiHi: 'चामुण्डा',
    vahana: 'Spirit (Preta)',
    vahanaHi: 'प्रेत',
    planet: 'Rahu (Shadow Node)',
    planetHi: 'राहु · छाया ग्रह',
    toneHz: '≈ 126.2 Hz',
    waveformLabel: '≈ 126.2 Hz · Solar / Nodal Threshold',
    waveformLabelHi: '≈ 126.2 Hz · सौर / राहु अक्ष',
    waveCycles: 3.1,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  },
  {
    id: 'bh-08-samhara',
    index: 8,
    hindiName: 'संहार भैरव',
    englishName: 'Samhara Bhairava',
    shortTranslit: 'Samhara',
    shortHindi: 'संहार',
    directionFull: 'North-East',
    directionFullHi: 'ईशान (उत्तर-पूर्व)',
    directionCode: 'NE',
    directionCodeHi: 'ईशान',
    compassAngle: 315,
    accentColor: '#4D8DFF',
    controlsLine: 'Controls: Dissolution · Ending karma · Liberation',
    controlsLineHi: 'नियंत्रण: लय (संहार) · कर्म समाप्ति · मोक्ष',
    description: 'Completes the eightfold cycle: dissolves exhausted karma into liberation.',
    descriptionHi: 'अष्ट-चक्र को पूर्ण करते हैं: क्षीण हो चुके कर्मों को मोक्ष में विलीन करते हैं।',
    shakti: 'Chandika',
    shaktiHi: 'चण्डिका',
    vahana: 'Lion',
    vahanaHi: 'सिंह',
    planet: 'Ketu (Liberation Axis)',
    planetHi: 'केतु · मोक्ष अक्ष',
    toneHz: '≈ 136.1 Hz',
    waveformLabel: '≈ 136.1 Hz · Ketu · Sadhana Axis',
    waveformLabelHi: '≈ 136.1 Hz · केतु · साधना अक्ष',
    waveCycles: 3.3,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)',
    sourceReferenceHi:
      'रुद्रयामल तन्त्र · काशी एवं तमिल मंदिर परम्पराएँ · स्वर: हंस कूस्तो, कॉस्मिक ऑक्टेव (1978)'
  }
];

export const ASHTA_MATRIKA_PROFILES: AshtaMatrikaProfile[] = [
  {
    id: 'matrika-00-brahmani',
    rowIndex: 0,
    rowLabel: 'ROW 0',
    rowLabelHi: 'पंक्ति 0',
    binaryCode: '000',
    bits: [0, 0, 0],
    hindiName: 'ब्राह्मणी',
    englishName: 'Brahmani',
    conceptualTitle: 'The Genesis Compiler',
    conceptualTitleHi: 'सृजन संकलक',
    accentColor: '#00E5FF',
    secondaryColor: '#0A4D68',
    conceptualFormula: 'M₀ = ∅ at (Creation)',
    conceptualFormulaHi: 'M₀ = ∅ (सृजन अवस्था)',
    symbolicAnnotation: 'SYMBOLIC GENESIS EXPRESSION',
    description: 'The WRITE command — creates new data from the void.',
    descriptionHi: 'प्रारंभिक सृजन आदेश — शून्य से नवीन चेतना और सूचना का निर्माण।',
    clarifyingNote:
      'Symbolic design metaphor illustrating emergence from an initial state; not a physical or biological equation.',
    clarifyingNoteHi:
      'प्रारंभिक अवस्था से सृष्टि के उद्भव को दर्शाने वाला प्रतीकात्मक रूपक; यह कोई भौतिक या जैविक समीकरण नहीं है।',
    tattva: 'WATER',
    tattvaHi: 'जल',
    gland: 'Hypothalamus',
    glandHi: 'हाइपोथैलेमस (अधश्चेतक)',
    hormone: 'GnRH',
    hormoneHi: 'जीएनआरएच (GnRH)',
    kshetra: 'Pushkar',
    kshetraHi: 'पुष्कर',
    visualizationType: 'genesis-spiral',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Traditional Matrika lists (Markandeya Purana / Agamic compendia) · Conceptual cybernetic & endocrine mapping from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ (मार्कण्डेय पुराण / आगम ग्रंथ) · "अ पाथ विदिन" से वैचारिक साइबरनेटिक और अंतःस्रावी मानचित्रण'
  },
  {
    id: 'matrika-01-maheshwari',
    rowIndex: 1,
    rowLabel: 'ROW 1',
    rowLabelHi: 'पंक्ति 1',
    binaryCode: '001',
    bits: [0, 0, 1],
    hindiName: 'माहेश्वरी',
    englishName: 'Maheshwari',
    conceptualTitle: 'The Standing Wave',
    conceptualTitleHi: 'अप्रगामी तरंग',
    accentColor: '#A855F7',
    secondaryColor: '#4C1D95',
    conceptualFormula: 'M₁ = hω(ā + ½)',
    conceptualFormulaHi: 'M₁ = hω(ā + ½) (अनुनाद)',
    symbolicAnnotation: 'HARMONIC RESONANCE NOTATION',
    description: 'Traps the creation pulse into stable, resonant orbits.',
    descriptionHi: 'सृजन के स्पंदन को स्थिर, अनुनादी कक्षाओं में स्थापित करती हैं।',
    clarifyingNote:
      'Symbolic standing-wave representation; harmonic notation is an artistic visual label rather than a derived biological equation.',
    clarifyingNoteHi:
      'प्रतीकात्मक अप्रगामी-तरंग निरूपण; यह संनादी संकेतन एक कलात्मक दृश्य लेबल है, न कि कोई व्युत्पन्न जैविक समीकरण।',
    tattva: 'ETHER',
    tattvaHi: 'आकाश',
    gland: 'Pineal',
    glandHi: 'पीनियल ग्रंथि (आज्ञा चक्र केंद्र)',
    hormone: 'Melatonin / DMT',
    hormoneHi: 'मेलाटोनिन / डीएमटी',
    kshetra: 'Chidambaram',
    kshetraHi: 'चिदम्बरम',
    visualizationType: 'standing-wave',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Traditional Matrika lists (Shaiva & Shakta Agamas) · Conceptual resonance mapping from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ (शैव एवं शाक्त आगम) · "अ पाथ विदिन" से वैचारिक अनुनाद मानचित्रण'
  },
  {
    id: 'matrika-02-kaumari',
    rowIndex: 2,
    rowLabel: 'ROW 2',
    rowLabelHi: 'पंक्ति 2',
    binaryCode: '010',
    bits: [0, 1, 0],
    hindiName: 'कौमारी',
    englishName: 'Kaumari',
    conceptualTitle: 'The Ignition Thrust',
    conceptualTitleHi: 'प्रज्वलन वेग',
    accentColor: '#FF5722',
    secondaryColor: '#7C2D12',
    conceptualFormula: 'M₂ — IGNITION / INITIATION',
    conceptualFormulaHi: 'M₂ — प्रज्वलन / आरम्भ',
    symbolicAnnotation: 'M₂ = ṗ = −iħ ∂/∂x (Symbolic Reference)',
    description: 'Pure directed force — the rocket, the neuron, the first kick.',
    descriptionHi: 'शुद्ध निर्देशित बल — प्रथम आवेग, स्नायु स्पंदन और गति का आरम्भ।',
    clarifyingNote:
      'Creative analogy for directed initiation and momentum; not a claim of physical or neuronal force generation.',
    clarifyingNoteHi:
      'निर्देशित आरम्भ और गति के लिए रचनात्मक उपमा; यह भौतिक या न्यूरोनल बल उत्पादन का दावा नहीं है।',
    tattva: 'FIRE',
    tattvaHi: 'अग्नि',
    gland: 'Adrenal Medulla',
    glandHi: 'एड्रेनल मेडुला (अधिवृक्क मध्यांश)',
    hormone: 'Norepinephrine',
    hormoneHi: 'नॉरएपिनेफ्रिन',
    kshetra: 'Palani',
    kshetraHi: 'पलनी',
    visualizationType: 'ignition-thrust',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Traditional Matrika lists · Conceptual kinetic & sympathetic-activation metaphor from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ · "अ पाथ विदिन" से वैचारिक गतिज एवं सक्रियण रूपक'
  },
  {
    id: 'matrika-03-vaishnavi',
    rowIndex: 3,
    rowLabel: 'ROW 3',
    rowLabelHi: 'पंक्ति 3',
    binaryCode: '011',
    bits: [0, 1, 1],
    hindiName: 'वैष्णवी',
    englishName: 'Vaishnavi',
    conceptualTitle: 'The Homeostat',
    conceptualTitleHi: 'संतुलन नियामक',
    accentColor: '#FF4D8D',
    secondaryColor: '#831843',
    conceptualFormula: 'M₃ — PID CONTROLLER',
    conceptualFormulaHi: 'M₃ — संतुलन नियंत्रक (PID)',
    symbolicAnnotation: 'NEGATIVE FEEDBACK CONVERGENCE',
    description: 'Negative feedback — keeps the whole system in balance.',
    descriptionHi: 'ऋणात्मक फीडबैक — संपूर्ण प्रणाली को स्थिर और संतुलित रखती हैं।',
    clarifyingNote:
      'Illustrative control-system metaphor for systemic equilibrium; gland and neurotransmitter pairings represent symbolic project mappings.',
    clarifyingNoteHi:
      'प्रणालीगत संतुलन के लिए नियंत्रण-प्रणाली रूपक; ग्रंथि और न्यूरोट्रांसमीटर युग्मन प्रतीकात्मक शोध मानचित्रण हैं।',
    tattva: 'AIR',
    tattvaHi: 'वायु',
    gland: 'Thyroid',
    glandHi: 'थायरॉयड ग्रंथि (अवटु ग्रंथि)',
    hormone: 'Serotonin',
    hormoneHi: 'सेरोटोनिन',
    kshetra: 'Tirupati',
    kshetraHi: 'तिरुपति',
    visualizationType: 'homeostat-pid',
    evidenceBadge: 'SYMBOLIC MODEL · INTERPRETIVE FRAMEWORK',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · व्याख्यात्मक ढाँचा',
    sourceNote:
      'Traditional Matrika lists · Conceptual homeostasis & control-loop model from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ · "अ पाथ विदिन" से वैचारिक समस्थिति एवं नियंत्रण-चक्र मॉडल'
  },
  {
    id: 'matrika-04-varahi',
    rowIndex: 4,
    rowLabel: 'ROW 4',
    rowLabelHi: 'पंक्ति 4',
    binaryCode: '100',
    bits: [1, 0, 0],
    hindiName: 'वाराही',
    englishName: 'Varahi',
    conceptualTitle: 'The Tectonic Uplift',
    conceptualTitleHi: 'भू-उत्थापन शक्ति',
    accentColor: '#F59E0B',
    secondaryColor: '#78350F',
    conceptualFormula: 'M₄ — STRUCTURAL UPLIFT',
    conceptualFormulaHi: 'M₄ — संरचनात्मक उत्थापन',
    symbolicAnnotation: 'M₄ :: ∇²φ = 4πGρ (Symbolic Reference)',
    description: "Gravity's operator — she raised this land out of the sea.",
    descriptionHi: 'गुरुत्व की संचालिका — जिन्होंने जलमग्न धरा को सागर से ऊपर उठाया।',
    clarifyingNote:
      'Poetic metaphor evoking Puranic earth-uplift iconography; not a geological or endocrinological claim.',
    clarifyingNoteHi:
      'पौराणिक भू-उद्धार प्रतिमाविज्ञान को जागृत करने वाला काव्यात्मक रूपक; यह कोई भूवैज्ञानिक दावा नहीं है।',
    tattva: 'EARTH',
    tattvaHi: 'पृथ्वी',
    gland: 'Adrenal Cortex',
    glandHi: 'एड्रेनल कॉर्टेक्स (अधिवृक्क वल्कुट)',
    hormone: 'Cortisol',
    hormoneHi: 'कॉर्टिसोल',
    kshetra: 'Kamakhya',
    kshetraHi: 'कामाख्या',
    visualizationType: 'tectonic-mesh',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Traditional Matrika & Varahi tantric compendia · Conceptual structural-uplift model from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका एवं वाराही तांत्रिक संग्रह · "अ पाथ विदिन" से वैचारिक संरचनात्मक-उत्थापन मॉडल'
  },
  {
    id: 'matrika-05-indrani',
    rowIndex: 5,
    rowLabel: 'ROW 5',
    rowLabelHi: 'पंक्ति 5',
    binaryCode: '101',
    bits: [1, 0, 1],
    hindiName: 'इन्द्राणी',
    englishName: 'Indrani',
    conceptualTitle: 'The Lightning Bus',
    conceptualTitleHi: 'विद्युत संचरण पथ',
    accentColor: '#38BDF8',
    secondaryColor: '#0C4A6E',
    conceptualFormula: 'M₅ — ELECTRICAL SIGNAL / TRANSMISSION',
    conceptualFormulaHi: 'M₅ — विद्युत संकेत / संचरण',
    symbolicAnnotation: '7.83 Hz · SCHUMANN RESONANCE REFERENCE',
    description: "Maxwell's discharge — bridges sky and ground at 7.83 Hz.",
    descriptionHi: 'विद्युत-चुंबकीय विसर्जन — 7.83 Hz पर आकाश और पृथ्वी के मध्य सेतु।',
    clarifyingNote:
      '7.83 Hz references the fundamental Schumann resonance; the visualization is an illustrative signal metaphor, not a live atmospheric or physiological measurement.',
    clarifyingNoteHi:
      '7.83 Hz मूलभूत शुमान अनुनाद को संदर्भित करता है; यह दृश्य एक संकेतात्मक रूपक है, न कि लाइव वायुमंडलीय माप।',
    tattva: 'LIGHTNING',
    tattvaHi: 'विद्युत',
    gland: 'Pancreas',
    glandHi: 'अग्न्याशय (पैंक्रियास)',
    hormone: 'Glutamate',
    hormoneHi: 'ग्लूटामेट',
    kshetra: 'Tiruchendur',
    kshetraHi: 'तिरुचेन्दूर',
    visualizationType: 'lightning-bus',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Traditional Matrika lists (Aindri / Indrani) · Conceptual bio-electrical transmission metaphor from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ (ऐन्द्री / इन्द्राणी) · "अ पाथ विदिन" से वैचारिक जैव-विद्युत संचरण रूपक'
  },
  {
    id: 'matrika-06-chamunda',
    rowIndex: 6,
    rowLabel: 'ROW 6',
    rowLabelHi: 'पंक्ति 6',
    binaryCode: '110',
    bits: [1, 1, 0],
    hindiName: 'चामुण्डा',
    englishName: 'Chamunda',
    conceptualTitle: 'The Garbage Collector',
    conceptualTitleHi: 'क्षय एवं पुनर्चक्रण शक्ति',
    accentColor: '#84CC16',
    secondaryColor: '#365314',
    conceptualFormula: 'M₆ — RECYCLING / ANNIHILATION',
    conceptualFormulaHi: 'M₆ — पुनर्चक्रण / संहार',
    symbolicAnnotation: 'SYMBOLIC DISSOLUTION & RECLAMATION',
    description: 'Apoptosis and decay — recycles dead code. Creation without her is cancer.',
    descriptionHi: 'कोशिकीय क्षय और शुद्धि — मृत संरचनाओं का पुनर्चक्रण करती हैं ताकि सृष्टि स्वस्थ रहे।',
    clarifyingNote:
      'Symbolic dissolution — removing what no longer serves the system. Metaphorical software and cellular analogy; not a clinical claim.',
    clarifyingNoteHi:
      'प्रतीकात्मक विलय — जो प्रणाली के लिए उपयोगी नहीं रहा उसे हटाना। यह एक रूपकात्मक उपमा है, चिकित्सीय दावा नहीं।',
    tattva: 'DECOMPOSING EARTH',
    tattvaHi: 'अपघटित पृथ्वी',
    gland: 'Thymus',
    glandHi: 'थाइमस ग्रंथि',
    hormone: 'GABA',
    hormoneHi: 'गाबा (GABA)',
    kshetra: 'Chamundi Hill',
    kshetraHi: 'चामुण्डी पहाड़ी (मैसूर)',
    visualizationType: 'garbage-collector',
    evidenceBadge: 'SYMBOLIC MODEL · INTERPRETIVE FRAMEWORK',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · व्याख्यात्मक ढाँचा',
    sourceNote:
      'Traditional Matrika lists (Devi Mahatmya / Agamas) · Conceptual entropy & reclamation metaphor from A Path Within',
    sourceNoteHi:
      'पारंपरिक मातृका सूचियाँ (देवी माहात्म्य / आगम) · "अ पाथ विदिन" से वैचारिक पुनर्चक्रण रूपक'
  },
  {
    id: 'matrika-07-mahalakshmi',
    rowIndex: 7,
    rowLabel: 'ROW 7',
    rowLabelHi: 'पंक्ति 7',
    binaryCode: '111',
    bits: [1, 1, 1],
    hindiName: 'महालक्ष्मी',
    englishName: 'Mahalakshmi',
    conceptualTitle: 'The Solid-State Render',
    conceptualTitleHi: 'पूर्ण स्वर्ण स्थिरीकरण',
    accentColor: '#FACC15',
    secondaryColor: '#713F12',
    conceptualFormula: 'M₇ — PROJECTION / STABILIZATION',
    conceptualFormulaHi: 'M₇ — प्रक्षेपण / स्थिरीकरण',
    symbolicAnnotation: 'COHERENT GEOMETRIC CONVERGENCE',
    description: 'Collapses all upstream chaos into stable, golden matter.',
    descriptionHi: 'समस्त पूर्ववर्ती हलचल को स्थिर, स्वर्णिम सामंजस्य में स्थापित करती हैं।',
    clarifyingNote:
      'Poetic visualization of geometric stabilization; original radial design inspired by traditional mandala symmetry.',
    clarifyingNoteHi:
      'ज्यामितीय स्थिरीकरण का काव्यात्मक दृश्य; पारंपरिक मण्डल सममिति से प्रेरित मौलिक अरीय संरचना।',
    tattva: 'GOLD',
    tattvaHi: 'सुवर्ण',
    gland: 'Gonads',
    glandHi: 'जनन ग्रंथियाँ',
    hormone: 'Oxytocin',
    hormoneHi: 'ऑक्सीटोसिन',
    kshetra: 'Padmanabhaswamy',
    kshetraHi: 'पद्मनाभस्वामी क्षेत्र',
    visualizationType: 'solid-state-render',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    evidenceBadgeHi: 'प्रतीकात्मक मॉडल · दृश्यात्मक निरूपण',
    sourceNote:
      'Eightfold Matrika lists · Conceptual stabilization & synthesis model from A Path Within',
    sourceNoteHi:
      'अष्ट-मातृका सूचियाँ · "अ पाथ विदिन" से वैचारिक स्थिरीकरण एवं संश्लेषण मॉडल'
  }
];

// Deterministic starfield shared across cosmic research chapters
export const COSMIC_STARFIELD = Array.from({ length: 56 }, (_, i) => ({
  id: i,
  cx: ((i * 73 + 19) % 96) + 2,
  cy: ((i * 41 + 11) % 76) + 2,
  r: i % 5 === 0 ? 1.25 : i % 2 === 0 ? 0.85 : 0.55,
  opacity: i % 4 === 0 ? 0.65 : i % 3 === 0 ? 0.38 : 0.2
}));

export function getMatrixIntersection(
  rowIdx: number,
  colIdx: number
): MatrixIntersectionData {
  const bhairava = ASHTA_BHAIRAVA_PROFILES[rowIdx] || ASHTA_BHAIRAVA_PROFILES[0];
  const matrika = ASHTA_MATRIKA_PROFILES[colIdx] || ASHTA_MATRIKA_PROFILES[0];
  const rowNum = String(rowIdx + 1).padStart(2, '0');
  const colNum = String(colIdx + 1).padStart(2, '0');
  const id = `BM-${rowNum}-${colNum}`;
  const isCanonicalConsortPair = rowIdx === colIdx;

  const relationshipSummary = isCanonicalConsortPair
    ? `Primary diagonal pairing in the 8×8 schema: ${bhairava.englishName} (${bhairava.directionFull} guardian, traditionally paired with ${bhairava.shakti}) intersects with ${matrika.englishName} (${matrika.conceptualTitle}, ${matrika.tattva}).`
    : `Exploratory cross-vector matrika linking ${bhairava.englishName} (${bhairava.directionFull} · ${bhairava.planet}) with ${matrika.englishName} (${matrika.rowLabel} · ${matrika.binaryCode} · ${matrika.conceptualTitle}).`;

  const relationshipSummaryHi = isCanonicalConsortPair
    ? `8×8 संरचना में प्राथमिक विकर्ण युग्म: ${bhairava.hindiName} (${bhairava.directionFullHi} के रक्षक, पारंपरिक रूप से ${bhairava.shaktiHi} के साथ युग्मित) का संगम ${matrika.hindiName} (${matrika.conceptualTitleHi}, ${matrika.tattvaHi} तत्त्व) से होता है।`
    : `अन्वेषणात्मक क्रॉस-वेक्टर मातृका जो ${bhairava.hindiName} (${bhairava.directionFullHi} · ${bhairava.planetHi}) को ${matrika.hindiName} (${matrika.rowLabelHi} · कोड ${matrika.binaryCode} · ${matrika.conceptualTitleHi}) से जोड़ती है।`;

  const researchQuestion = isCanonicalConsortPair
    ? `How do Shaiva-Shakta Agamic texts and temple mandalas articulate the direct directional pairing of ${bhairava.englishName} (${bhairava.directionFull}) and ${matrika.englishName} (${matrika.kshetra} / ${matrika.tattva})?`
    : `How might the matrika of ${bhairava.englishName}'s directional domain (${bhairava.directionFull}) and ${matrika.englishName}'s archetypal function (${matrika.conceptualTitle}) be interpreted within comparative tantric or iconographic traditions?`;

  const researchQuestionHi = isCanonicalConsortPair
    ? `शैव-शाक्त आगम ग्रंथ और मंदिर मण्डल ${bhairava.hindiName} (${bhairava.directionFullHi}) और ${matrika.hindiName} (${matrika.kshetraHi} / ${matrika.tattvaHi} तत्त्व) के प्रत्यक्ष दिशात्मक युग्मन को किस प्रकार व्यक्त करते हैं?`
    : `तुलनात्मक तांत्रिक या प्रतिमाशास्त्रीय परम्पराओं में ${bhairava.hindiName} के दिशात्मक क्षेत्र (${bhairava.directionFullHi}) और ${matrika.hindiName} के आद्यप्ररूप कार्य (${matrika.conceptualTitleHi}) के संगम की व्याख्या कैसे की जा सकती है?`;

  const evidenceStatus = isCanonicalConsortPair
    ? 'Traditional directional pairing (Agamic & temple compendia) · Interpretive synthesis requires primary-source verification'
    : 'Research framework — source verification required';

  const evidenceStatusHi = isCanonicalConsortPair
    ? 'पारंपरिक दिशात्मक युग्म (आगम एवं मंदिर संग्रह) · व्याख्यात्मक संश्लेषण हेतु मूल-स्रोत सत्यापन आवश्यक'
    : 'शोध रूपरेखा — मूल-स्रोत सत्यापन आवश्यक';

  return {
    id,
    rowIndex: rowIdx,
    colIndex: colIdx,
    bhairava,
    matrika,
    isCanonicalConsortPair,
    relationshipSummary,
    relationshipSummaryHi,
    researchQuestion,
    researchQuestionHi,
    evidenceStatus,
    evidenceStatusHi
  };
}
