export interface AshtaBhairavaProfile {
  id: string;
  index: number;
  hindiName: string;
  englishName: string;
  shortTranslit: string;
  directionFull: string;
  directionCode: 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | 'N' | 'NE';
  compassAngle: number;
  accentColor: string;
  controlsLine: string;
  description: string;
  shakti: string;
  vahana: string;
  planet: string;
  toneHz: string;
  waveformLabel: string;
  waveCycles: number;
  sourceReference: string;
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
  binaryCode: string; // 000 .. 111
  bits: [number, number, number];
  hindiName: string;
  englishName: string;
  conceptualTitle: string;
  accentColor: string;
  secondaryColor: string;
  conceptualFormula: string;
  symbolicAnnotation?: string;
  description: string;
  clarifyingNote: string;
  tattva: string;
  gland: string;
  hormone: string;
  kshetra: string;
  visualizationType: MatrikaVisualizationType;
  evidenceBadge: string;
  sourceNote: string;
}

export interface MatrixIntersectionData {
  id: string; // BM-01-01 .. BM-08-08
  rowIndex: number;
  colIndex: number;
  bhairava: AshtaBhairavaProfile;
  matrika: AshtaMatrikaProfile;
  isCanonicalConsortPair: boolean;
  relationshipSummary: string;
  researchQuestion: string;
  evidenceStatus: string;
}

export const ASHTA_BHAIRAVA_PROFILES: AshtaBhairavaProfile[] = [
  {
    id: 'bh-01-asitanga',
    index: 1,
    hindiName: 'असितांग भैरव',
    englishName: 'Asitanga Bhairava',
    shortTranslit: 'Asitanga',
    directionFull: 'East',
    directionCode: 'E',
    compassAngle: 0,
    accentColor: '#FFBF38',
    controlsLine: 'Controls: Creativity · Knowledge · Wisdom · Expansion',
    description: 'Opens the cycle: creation and knowledge, facing the rising sun.',
    shakti: 'Brahmi',
    vahana: 'Swan',
    planet: 'Jupiter · Guru',
    toneHz: '≈ 183.6 Hz',
    waveformLabel: '≈ 183.6 Hz · Jupiter · Guru',
    waveCycles: 4.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-02-ruru',
    index: 2,
    hindiName: 'रुरु भैरव',
    englishName: 'Ruru Bhairava',
    shortTranslit: 'Ruru',
    directionFull: 'South-East',
    directionCode: 'SE',
    compassAngle: 45,
    accentColor: '#9CCBFF',
    controlsLine: 'Controls: Teaching · Refinement · Prosperity · Arts',
    description: 'Refines what is created; the guru principle.',
    shakti: 'Maheshwari',
    vahana: 'Bull',
    planet: 'Venus · Shukra',
    toneHz: '≈ 221.2 Hz',
    waveformLabel: '≈ 221.2 Hz · Venus · Shukra',
    waveCycles: 5.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-03-chanda',
    index: 3,
    hindiName: 'चण्ड भैरव',
    englishName: 'Chanda Bhairava',
    shortTranslit: 'Chanda',
    directionFull: 'South',
    directionCode: 'S',
    compassAngle: 90,
    accentColor: '#FF4638',
    controlsLine: 'Controls: Energy · Courage · Victory over opponents',
    description: 'Supplies force and protection to drive action.',
    shakti: 'Kaumari',
    vahana: 'Peacock',
    planet: 'Mars · Mangal',
    toneHz: '≈ 144.7 Hz',
    waveformLabel: '≈ 144.7 Hz · Mars · Mangal',
    waveCycles: 3.5,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-04-krodha',
    index: 4,
    hindiName: 'क्रोध भैरव',
    englishName: 'Krodha Bhairava',
    shortTranslit: 'Krodha',
    directionFull: 'South-West',
    directionCode: 'SW',
    compassAngle: 135,
    accentColor: '#8271FF',
    controlsLine: 'Controls: Disciplined action · Removing obstacles · Karma',
    description: 'Channels anger into disciplined, karmic correction.',
    shakti: 'Vaishnavi',
    vahana: 'Garuda',
    planet: 'Saturn · Shani',
    toneHz: '≈ 147.9 Hz',
    waveformLabel: '≈ 147.9 Hz · Saturn · Shani',
    waveCycles: 3.8,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-05-unmatta',
    index: 5,
    hindiName: 'उन्मत्त भैरव',
    englishName: 'Unmatta Bhairava',
    shortTranslit: 'Unmatta',
    directionFull: 'West',
    directionCode: 'W',
    compassAngle: 180,
    accentColor: '#18C69A',
    controlsLine: 'Controls: Control of ego · Intellect · Speech',
    description: "Dissolves the ego's false certainty: divine madness beyond logic.",
    shakti: 'Varahi',
    vahana: 'Horse',
    planet: 'Mercury · Budha',
    toneHz: '≈ 141.3 Hz',
    waveformLabel: '≈ 141.3 Hz · Mercury · Budha',
    waveCycles: 3.4,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-06-kapala',
    index: 6,
    hindiName: 'कपाल भैरव',
    englishName: 'Kapala Bhairava',
    shortTranslit: 'Kapala',
    directionFull: 'North-West',
    directionCode: 'NW',
    compassAngle: 225,
    accentColor: '#38D9FF',
    controlsLine: 'Controls: Mind · Emotions · Ending fruitless actions',
    description: 'Releases mental stagnation and ends fruitless cycles of action.',
    shakti: 'Indrani',
    vahana: 'Elephant',
    planet: 'Moon · Chandra',
    toneHz: '≈ 210.4 Hz',
    waveformLabel: '≈ 210.4 Hz · Moon · Chandra',
    waveCycles: 5.2,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-07-bhishana',
    index: 7,
    hindiName: 'भीषण भैरव',
    englishName: 'Bhishana Bhairava',
    shortTranslit: 'Bhishana',
    directionFull: 'North',
    directionCode: 'N',
    compassAngle: 270,
    accentColor: '#FF8C24',
    controlsLine: 'Controls: Removing fear · Negativity · Hidden forces',
    description: 'Confronts dread and clears unseen obstructions at the northern threshold.',
    shakti: 'Chamunda',
    vahana: 'Preta · Spirit',
    planet: 'Rahu · Shadow Node',
    toneHz: '≈ 126.2 Hz',
    waveformLabel: '≈ 126.2 Hz · Solar / Nodal Threshold',
    waveCycles: 3.1,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  },
  {
    id: 'bh-08-samhara',
    index: 8,
    hindiName: 'संहार भैरव',
    englishName: 'Samhara Bhairava',
    shortTranslit: 'Samhara',
    directionFull: 'North-East',
    directionCode: 'NE',
    compassAngle: 315,
    accentColor: '#4D8DFF',
    controlsLine: 'Controls: Dissolution · Ending karma · Liberation',
    description: 'Completes the eightfold cycle: dissolves exhausted karma into liberation.',
    shakti: 'Chandika',
    vahana: 'Lion',
    planet: 'Ketu · Liberation Axis',
    toneHz: '≈ 136.1 Hz',
    waveformLabel: '≈ 136.1 Hz · Ketu · Sadhana Axis',
    waveCycles: 3.3,
    sourceReference:
      'Rudrayamala Tantra · Kashi & Tamil temple traditions · Tone: Cousto, Cosmic Octave (1978)'
  }
];

export const ASHTA_MATRIKA_PROFILES: AshtaMatrikaProfile[] = [
  {
    id: 'matrika-00-brahmani',
    rowIndex: 0,
    rowLabel: 'ROW 0',
    binaryCode: '000',
    bits: [0, 0, 0],
    hindiName: 'ब्राह्मणी',
    englishName: 'Brahmani',
    conceptualTitle: 'The Genesis Compiler',
    accentColor: '#00E5FF',
    secondaryColor: '#0A4D68',
    conceptualFormula: 'M₀ = ∅ at (Creation)',
    symbolicAnnotation: 'SYMBOLIC GENESIS EXPRESSION',
    description: 'The WRITE command — creates new data from the void.',
    clarifyingNote:
      'Symbolic design metaphor illustrating emergence from an initial state; not a physical or biological equation.',
    tattva: 'JALA · जल',
    gland: 'Hypothalamus',
    hormone: 'GnRH',
    kshetra: 'Pushkar',
    visualizationType: 'genesis-spiral',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Traditional Matrika lists (Markandeya Purana / Agamic compendia) · Conceptual cybernetic & endocrine mapping from A Path Within'
  },
  {
    id: 'matrika-01-maheshwari',
    rowIndex: 1,
    rowLabel: 'ROW 1',
    binaryCode: '001',
    bits: [0, 0, 1],
    hindiName: 'माहेश्वरी',
    englishName: 'Maheshwari',
    conceptualTitle: 'The Standing Wave',
    accentColor: '#A855F7',
    secondaryColor: '#4C1D95',
    conceptualFormula: 'M₁ = hω(ā + ½)',
    symbolicAnnotation: 'HARMONIC RESONANCE NOTATION',
    description: 'Traps the creation pulse into stable, resonant orbits.',
    clarifyingNote:
      'Symbolic standing-wave representation; harmonic notation is an artistic visual label rather than a derived biological equation.',
    tattva: 'ĀKĀSA · आकाश',
    gland: 'Pineal',
    hormone: 'Melatonin / DMT',
    kshetra: 'Chidambaram',
    visualizationType: 'standing-wave',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Traditional Matrika lists (Shaiva & Shakta Agamas) · Conceptual resonance mapping from A Path Within'
  },
  {
    id: 'matrika-02-kaumari',
    rowIndex: 2,
    rowLabel: 'ROW 2',
    binaryCode: '010',
    bits: [0, 1, 0],
    hindiName: 'कौमारी',
    englishName: 'Kaumari',
    conceptualTitle: 'The Ignition Thrust',
    accentColor: '#FF5722',
    secondaryColor: '#7C2D12',
    conceptualFormula: 'M₂ — IGNITION / INITIATION',
    symbolicAnnotation: 'M₂ = ṗ = −iħ ∂/∂x (Symbolic Reference)',
    description: 'Pure directed force — the rocket, the neuron, the first kick.',
    clarifyingNote:
      'Creative analogy for directed initiation and momentum; not a claim of physical or neuronal force generation.',
    tattva: 'AGNI · अग्नि',
    gland: 'Adrenal Medulla',
    hormone: 'Norepinephrine',
    kshetra: 'Palani',
    visualizationType: 'ignition-thrust',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Traditional Matrika lists · Conceptual kinetic & sympathetic-activation metaphor from A Path Within'
  },
  {
    id: 'matrika-03-vaishnavi',
    rowIndex: 3,
    rowLabel: 'ROW 3',
    binaryCode: '011',
    bits: [0, 1, 1],
    hindiName: 'वैष्णवी',
    englishName: 'Vaishnavi',
    conceptualTitle: 'The Homeostat',
    accentColor: '#FF4D8D',
    secondaryColor: '#831843',
    conceptualFormula: 'M₃ — PID CONTROLLER',
    symbolicAnnotation: 'NEGATIVE FEEDBACK CONVERGENCE',
    description: 'Negative feedback — keeps the whole system in balance.',
    clarifyingNote:
      'Illustrative control-system metaphor for systemic equilibrium; gland and neurotransmitter pairings represent symbolic project mappings.',
    tattva: 'VĀYU · वायु',
    gland: 'Thyroid',
    hormone: 'Serotonin',
    kshetra: 'Tirupati',
    visualizationType: 'homeostat-pid',
    evidenceBadge: 'SYMBOLIC MODEL · INTERPRETIVE FRAMEWORK',
    sourceNote:
      'Traditional Matrika lists · Conceptual homeostasis & control-loop model from A Path Within'
  },
  {
    id: 'matrika-04-varahi',
    rowIndex: 4,
    rowLabel: 'ROW 4',
    binaryCode: '100',
    bits: [1, 0, 0],
    hindiName: 'वाराही',
    englishName: 'Varahi',
    conceptualTitle: 'The Tectonic Uplift',
    accentColor: '#F59E0B',
    secondaryColor: '#78350F',
    conceptualFormula: 'M₄ — STRUCTURAL UPLIFT',
    symbolicAnnotation: 'M₄ :: ∇²φ = 4πGρ (Symbolic Reference)',
    description: "Gravity's operator — she raised this land out of the sea.",
    clarifyingNote:
      'Poetic metaphor evoking Puranic earth-uplift iconography; not a geological or endocrinological claim.',
    tattva: 'PṚTHVĪ · पृथ्वी',
    gland: 'Adrenal Cortex',
    hormone: 'Cortisol',
    kshetra: 'Kamakhya',
    visualizationType: 'tectonic-mesh',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Traditional Matrika & Varahi tantric compendia · Conceptual structural-uplift model from A Path Within'
  },
  {
    id: 'matrika-05-indrani',
    rowIndex: 5,
    rowLabel: 'ROW 5',
    binaryCode: '101',
    bits: [1, 0, 1],
    hindiName: 'इन्द्राणी',
    englishName: 'Indrani',
    conceptualTitle: 'The Lightning Bus',
    accentColor: '#38BDF8',
    secondaryColor: '#0C4A6E',
    conceptualFormula: 'M₅ — ELECTRICAL SIGNAL / TRANSMISSION',
    symbolicAnnotation: '7.83 Hz · SCHUMANN RESONANCE REFERENCE',
    description: "Maxwell's discharge — bridges sky and ground at 7.83 Hz.",
    clarifyingNote:
      '7.83 Hz references the fundamental Schumann resonance; the visualization is an illustrative signal metaphor, not a live atmospheric or physiological measurement.',
    tattva: 'VIDYUT · विद्युत',
    gland: 'Pancreas',
    hormone: 'Glutamate',
    kshetra: 'Tiruchendur',
    visualizationType: 'lightning-bus',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Traditional Matrika lists (Aindri / Indrani) · Conceptual bio-electrical transmission metaphor from A Path Within'
  },
  {
    id: 'matrika-06-chamunda',
    rowIndex: 6,
    rowLabel: 'ROW 6',
    binaryCode: '110',
    bits: [1, 1, 0],
    hindiName: 'चामुण्डा',
    englishName: 'Chamunda',
    conceptualTitle: 'The Garbage Collector',
    accentColor: '#84CC16',
    secondaryColor: '#365314',
    conceptualFormula: 'M₆ — RECYCLING / ANNIHILATION',
    symbolicAnnotation: 'SYMBOLIC DISSOLUTION & RECLAMATION',
    description: 'Apoptosis and decay — recycles dead code. Creation without her is cancer.',
    clarifyingNote:
      'Symbolic dissolution — removing what no longer serves the system. Metaphorical software and cellular analogy; not a clinical claim.',
    tattva: 'DECOMP EARTH',
    gland: 'Thymus',
    hormone: 'GABA',
    kshetra: 'Chamundi Hill',
    visualizationType: 'garbage-collector',
    evidenceBadge: 'SYMBOLIC MODEL · INTERPRETIVE FRAMEWORK',
    sourceNote:
      'Traditional Matrika lists (Devi Mahatmya / Agamas) · Conceptual entropy & reclamation metaphor from A Path Within'
  },
  {
    id: 'matrika-07-mahalakshmi',
    rowIndex: 7,
    rowLabel: 'ROW 7',
    binaryCode: '111',
    bits: [1, 1, 1],
    hindiName: 'महालक्ष्मी',
    englishName: 'Mahalakshmi',
    conceptualTitle: 'The Solid-State Render',
    accentColor: '#FACC15',
    secondaryColor: '#713F12',
    conceptualFormula: 'M₇ — PROJECTION / STABILIZATION',
    symbolicAnnotation: 'COHERENT GEOMETRIC CONVERGENCE',
    description: 'Collapses all upstream chaos into stable, golden matter.',
    clarifyingNote:
      'Poetic visualization of geometric stabilization; original radial design inspired by traditional mandala symmetry.',
    tattva: 'SUVARNA · सुवर्ण',
    gland: 'Gonads',
    hormone: 'Oxytocin',
    kshetra: 'Padmanabhaswamy',
    visualizationType: 'solid-state-render',
    evidenceBadge: 'SYMBOLIC MODEL · ILLUSTRATIVE VISUALIZATION',
    sourceNote:
      'Eightfold Matrika lists · Conceptual stabilization & synthesis model from A Path Within'
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
    : `Exploratory cross-vector intersection linking ${bhairava.englishName} (${bhairava.directionFull} · ${bhairava.planet}) with ${matrika.englishName} (${matrika.rowLabel} · ${matrika.binaryCode} · ${matrika.conceptualTitle}).`;

  const researchQuestion = isCanonicalConsortPair
    ? `How do Shaiva-Shakta Agamic texts and temple mandalas articulate the direct directional pairing of ${bhairava.englishName} (${bhairava.directionFull}) and ${matrika.englishName} (${matrika.kshetra} / ${matrika.tattva})?`
    : `How might the intersection of ${bhairava.englishName}'s directional domain (${bhairava.directionFull}) and ${matrika.englishName}'s archetypal function (${matrika.conceptualTitle}) be interpreted within comparative tantric or iconographic traditions?`;

  const evidenceStatus = isCanonicalConsortPair
    ? 'Traditional directional pairing (Agamic & temple compendia) · Interpretive synthesis requires primary-source verification'
    : 'Research framework — source verification required';

  return {
    id,
    rowIndex: rowIdx,
    colIndex: colIdx,
    bhairava,
    matrika,
    isCanonicalConsortPair,
    relationshipSummary,
    researchQuestion,
    evidenceStatus
  };
}
