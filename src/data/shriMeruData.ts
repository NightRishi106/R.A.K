export type ShriMeruSequenceId =
  | 'opening'
  | 'enclosures'
  | 'triangles'
  | 'bhupura'
  | 'matrikas'
  | 'closing';

export interface ShriMeruSequenceMeta {
  id: ShriMeruSequenceId;
  indexLabel: string;
  indexLabelHi: string;
  hindiTitle: string;
  englishTitle: string;
  timeRange: string;
  startSec: number;
  endSec: number;
}

export const SHRI_MERU_SEQUENCES: ShriMeruSequenceMeta[] = [
  {
    id: 'opening',
    indexLabel: 'SEQ 01',
    indexLabelHi: 'अनुक्रम 01',
    hindiTitle: 'श्री मेरु चक्र · तीन स्तर',
    englishTitle: 'Mahameru & Three Levels',
    timeRange: '00:00–00:09',
    startSec: 0,
    endSec: 9
  },
  {
    id: 'enclosures',
    indexLabel: 'SEQ 02',
    indexLabelHi: 'अनुक्रम 02',
    hindiTitle: 'नव आवरण (1–9)',
    englishTitle: 'Nine Enclosures (1–9)',
    timeRange: '00:10–00:33',
    startSec: 10,
    endSec: 33
  },
  {
    id: 'triangles',
    indexLabel: 'SEQ 03',
    indexLabelHi: 'अनुक्रम 03',
    hindiTitle: '४४ त्रिकोण',
    englishTitle: '44 Triangles Formula',
    timeRange: '00:34–00:43',
    startSec: 34,
    endSec: 43
  },
  {
    id: 'bhupura',
    indexLabel: 'SEQ 04',
    indexLabelHi: 'अनुक्रम 04',
    hindiTitle: 'भूपुर द्वार',
    englishTitle: 'Bhūpura Close-Up',
    timeRange: '00:44–00:49',
    startSec: 44,
    endSec: 49
  },
  {
    id: 'matrikas',
    indexLabel: 'SEQ 05',
    indexLabelHi: 'अनुक्रम 05',
    hindiTitle: 'अष्ट मातृका (1–8)',
    englishTitle: 'Eight Bhūpura Mothers',
    timeRange: '00:50–01:29',
    startSec: 50,
    endSec: 89
  },
  {
    id: 'closing',
    indexLabel: 'SEQ 06',
    indexLabelHi: 'अनुक्रम 06',
    hindiTitle: 'अभिषेक व अनुष्ठान',
    englishTitle: 'Worship Layout & Closing',
    timeRange: '01:30–01:41',
    startSec: 90,
    endSec: 102
  }
];

export interface AvaranaEnclosure {
  number: number; // 1 to 9
  indexLabel: string; // आवरण 1 / 9
  indexLabelEn: string; // Enclosure 1 / 9
  hindiName: string;
  englishName: string;
  transliteration: string;
  geometrySummary: string;
  geometrySummaryHi: string;
  subtitleLine: string;
  subtitleLineHi: string;
  timeCue: string;
  startSec: number;
  endSec: number;
  ringKey:
    | 'bhupura'
    | 'lotus16'
    | 'lotus8'
    | 'tri14'
    | 'tri10outer'
    | 'tri10inner'
    | 'tri8'
    | 'tri1'
    | 'bindu';
  architecturalNote: string;
  architecturalNoteHi: string;
  yoginiGroup: string;
  yoginiGroupHi: string;
}

export const NINE_AVARANAS: AvaranaEnclosure[] = [
  {
    number: 1,
    indexLabel: 'आवरण 1 / 9',
    indexLabelEn: 'Enclosure 1 / 9',
    hindiName: 'त्रैलोक्यमोहन चक्र',
    englishName: 'Trailokya Mohana Chakra',
    transliteration: 'Trailokya Mohana',
    geometrySummary: 'Bhūpura · Three walls & four gates',
    geometrySummaryHi: 'भूपुर · तीन दीवारें एवं चार द्वार',
    subtitleLine: 'Trailokya Mohana · Bhūpura',
    subtitleLineHi: 'त्रैलोक्यमोहन · भूपुर प्राचीर',
    timeCue: '00:13–00:15',
    startSec: 13,
    endSec: 15,
    ringKey: 'bhupura',
    architecturalNote:
      'The outer square sanctuary (Bhūpura) with three concentric perimeter walls and four cardinal portals separating the outer field from the inner geometric mandala.',
    architecturalNoteHi:
      'तीन संकेंद्रित दीवारों और चार दिशात्मक द्वारों वाला बाहरी वर्गाकार प्राचीर (भूपुर), जो बाह्य जगत को आन्तरिक ज्यामितीय मण्डल से पृथक करता है।',
    yoginiGroup: '28 Prakaṭa Yoginīs (10 Siddhis · 8 Mātr̥kās · 10 Mudrā Śaktis)',
    yoginiGroupHi: '28 प्रकट योगिनियाँ (10 सिद्धियाँ · 8 मातृकाएँ · 10 मुद्रा शक्तियाँ)'
  },
  {
    number: 2,
    indexLabel: 'आवरण 2 / 9',
    indexLabelEn: 'Enclosure 2 / 9',
    hindiName: 'सर्वाशापरिपूरक चक्र',
    englishName: 'Sarva Āśā Paripūraka Chakra',
    transliteration: 'Sarva Āśā Paripūraka',
    geometrySummary: '16 petals',
    geometrySummaryHi: '16 कमल दल',
    subtitleLine: 'Sarva Āśā Paripūraka · 16 petals',
    subtitleLineHi: 'सर्वाशापरिपूरक · 16 कमल दल',
    timeCue: '00:15–00:17',
    startSec: 15,
    endSec: 17,
    ringKey: 'lotus16',
    architecturalNote:
      'The outer sixteen-petal lotus ring symbolizing the fulfillment of directional aspirations and the sixteen kalās of perceptual completeness.',
    architecturalNoteHi:
      'बाहरी सोलह-पंखुड़ियों वाला कमल वलय, जो समस्त दिशात्मक आकांक्षाओं की पूर्ति और बोध की सोलह कलाओं का प्रतीक है।',
    yoginiGroup: '16 Guptatara / Ākarṣaṇī Śaktis',
    yoginiGroupHi: '16 गुप्ततर / आर्षणी शक्तियाँ'
  },
  {
    number: 3,
    indexLabel: 'आवरण 3 / 9',
    indexLabelEn: 'Enclosure 3 / 9',
    hindiName: 'सर्वसंक्षोभण चक्र',
    englishName: 'Sarva Saṅkṣobhaṇa Chakra',
    transliteration: 'Sarva Saṅkṣobhaṇa',
    geometrySummary: '8 petals',
    geometrySummaryHi: '8 कमल दल',
    subtitleLine: 'Sarva Saṅkṣobhaṇa · 8 petals',
    subtitleLineHi: 'सर्वसंक्षोभण · 8 कमल दल',
    timeCue: '00:17–00:20',
    startSec: 17,
    endSec: 20,
    ringKey: 'lotus8',
    architecturalNote:
      'The inner eight-petal lotus ring forming the transition between the floral perimeter rings and the interlocking triangular yantra matrix.',
    architecturalNoteHi:
      'आन्तरिक आठ-पंखुड़ियों वाला कमल वलय, जो बाहरी कमल घेरों और अंतर्गथित त्रिकोणीय यन्त्र संरचना के बीच सेतु का कार्य करता है।',
    yoginiGroup: '8 Anaṅga Kusumādi Śaktis',
    yoginiGroupHi: '8 अनंग कुसुमादि शक्तियाँ'
  },
  {
    number: 4,
    indexLabel: 'आवरण 4 / 9',
    indexLabelEn: 'Enclosure 4 / 9',
    hindiName: 'सर्वसौभाग्यदायक चक्र',
    englishName: 'Sarva Saubhāgya Dāyaka Chakra',
    transliteration: 'Sarva Saubhāgya Dāyaka',
    geometrySummary: '14 triangles',
    geometrySummaryHi: '14 त्रिकोण',
    subtitleLine: 'Sarva Saubhāgya Dāyaka · 14 triangles',
    subtitleLineHi: 'सर्वसौभाग्यदायक · 14 त्रिकोण',
    timeCue: '00:20–00:22',
    startSec: 20,
    endSec: 22,
    ringKey: 'tri14',
    architecturalNote:
      'The outermost ring of fourteen interlocking triangles (Caturdaśāra) generated by the matrika of the nine primary Śiva and Śakti triangles.',
    architecturalNoteHi:
      'नौ मूल शिव और शक्ति त्रिकोणों के संगम से निर्मित चौदह अंतर्गथित त्रिकोणों (चतुर्दशार) का सबसे बाहरी वलय।',
    yoginiGroup: '14 Sampradāya Yoginīs',
    yoginiGroupHi: '14 सम्प्रदाय योगिनियाँ'
  },
  {
    number: 5,
    indexLabel: 'आवरण 5 / 9',
    indexLabelEn: 'Enclosure 5 / 9',
    hindiName: 'सर्वार्थसाधक चक्र',
    englishName: 'Sarvārtha Sādhaka Chakra',
    transliteration: 'Sarvārtha Sādhaka',
    geometrySummary: '10 outer triangles',
    geometrySummaryHi: '10 बाहरी त्रिकोण',
    subtitleLine: 'Sarvārtha Sādhaka · 10 outer triangles',
    subtitleLineHi: 'सर्वार्थसाधक · 10 बाहरी त्रिकोण',
    timeCue: '00:22–00:24',
    startSec: 22,
    endSec: 24,
    ringKey: 'tri10outer',
    architecturalNote:
      'The outer ten-triangle ring (Bahirdaśāra), converging closer toward the center through tighter angular matrikas.',
    architecturalNoteHi:
      'बाहरी दस-त्रिकोण वलय (बहिर्दशार), जो सूक्ष्म कोणीय संगमों के माध्यम से केंद्र की ओर अभिसरित होता है।',
    yoginiGroup: '10 Kulottīrṇa Yoginīs',
    yoginiGroupHi: '10 कुलोत्तीर्ण योगिनियाँ'
  },
  {
    number: 6,
    indexLabel: 'आवरण 6 / 9',
    indexLabelEn: 'Enclosure 6 / 9',
    hindiName: 'सर्वरक्षाकर चक्र',
    englishName: 'Sarva Rakṣākara Chakra',
    transliteration: 'Sarva Rakṣākara',
    geometrySummary: '10 inner triangles',
    geometrySummaryHi: '10 आन्तरिक त्रिकोण',
    subtitleLine: 'Sarva Rakṣākara · 10 inner triangles',
    subtitleLineHi: 'सर्वरक्षाकर · 10 आन्तरिक त्रिकोण',
    timeCue: '00:24–00:26',
    startSec: 24,
    endSec: 26,
    ringKey: 'tri10inner',
    architecturalNote:
      'The inner ten-triangle ring (Antardaśāra), forming a protective geometric lattice around the inner octagon.',
    architecturalNoteHi:
      'आन्तरिक दस-त्रिकोण वलय (अन्तर्दशार), जो भीतरी अष्टकोण के चारों ओर एक रक्षात्मक ज्यामितीय जाल का निर्माण करता है।',
    yoginiGroup: '10 Nigarbha Yoginīs',
    yoginiGroupHi: '10 निगर्भ योगिनियाँ'
  },
  {
    number: 7,
    indexLabel: 'आवरण 7 / 9',
    indexLabelEn: 'Enclosure 7 / 9',
    hindiName: 'सर्वरोगहर चक्र',
    englishName: 'Sarva Rogahara Chakra',
    transliteration: 'Sarva Rogahara',
    geometrySummary: '8 triangles',
    geometrySummaryHi: '8 त्रिकोण',
    subtitleLine: 'Sarva Rogahara · 8 triangles',
    subtitleLineHi: 'सर्वरोगहर · 8 त्रिकोण',
    timeCue: '00:26–00:28',
    startSec: 26,
    endSec: 28,
    ringKey: 'tri8',
    architecturalNote:
      'The ring of eight compact triangles (Aṣṭakoṇa) immediately surrounding the central primary triangle, traditionally associated with dissolving inner affliction.',
    architecturalNoteHi:
      'केन्द्रीय मूल त्रिकोण को घेरे हुए आठ सघन त्रिकोणों (अष्टकोण) का वलय, जो आन्तरिक क्लेशों और विकारों के निवारण से सम्बद्ध है।',
    yoginiGroup: '8 Rahasya Yoginīs (Vaśinī Vāgdevatās)',
    yoginiGroupHi: '8 रहस्य योगिनियाँ (वशिनी आदि वाग्देवताएँ)'
  },
  {
    number: 8,
    indexLabel: 'आवरण 8 / 9',
    indexLabelEn: 'Enclosure 8 / 9',
    hindiName: 'सर्वसिद्धिप्रद चक्र',
    englishName: 'Sarva Siddhiprada Chakra',
    transliteration: 'Sarva Siddhiprada',
    geometrySummary: '1 central triangle',
    geometrySummaryHi: '1 केन्द्रीय त्रिकोण',
    subtitleLine: 'Sarva Siddhiprada · 1 central triangle',
    subtitleLineHi: 'सर्वसिद्धिप्रद · 1 केन्द्रीय त्रिकोण',
    timeCue: '00:28–00:30',
    startSec: 28,
    endSec: 30,
    ringKey: 'tri1',
    architecturalNote:
      'The innermost primary triangle (Trikoṇa) enclosing the central Bindu, representing the triad of knower, knowing, and known.',
    architecturalNoteHi:
      'केन्द्रीय बिन्दु को घेरे हुए सबसे भीतरी मूल त्रिकोण, जो ज्ञाता, ज्ञान और ज्ञेय की त्रिपुटी का प्रतिनिधित्व करता है।',
    yoginiGroup: '3 Atirahasya Śaktis (Kāmeśvarī, Vajreśvarī, Bhagamālinī)',
    yoginiGroupHi: '3 अतिरहस्य शक्तियाँ (कामेश्वरी, वज्रेश्वरी, भगमालिनी)'
  },
  {
    number: 9,
    indexLabel: 'आवरण 9 / 9',
    indexLabelEn: 'Enclosure 9 / 9',
    hindiName: 'सर्वानन्दमय चक्र',
    englishName: 'Sarvānandamaya Chakra',
    transliteration: 'Sarvānandamaya',
    geometrySummary: 'Bindu',
    geometrySummaryHi: 'बिन्दु',
    subtitleLine: 'Sarvānandamaya · Bindu',
    subtitleLineHi: 'सर्वानन्दमय · केन्द्रीय बिन्दु',
    timeCue: '00:31–00:33',
    startSec: 31,
    endSec: 33,
    ringKey: 'bindu',
    architecturalNote:
      'The dimensionless central focal point (Bindu) of undivided consciousness where all outer geometric enclosures converge into unity.',
    architecturalNoteHi:
      'अविभाजित चेतना का आयामहीन केन्द्रीय बिन्दु, जहाँ समस्त बाहरी ज्यामितीय आवरण पूर्ण एकत्व में समाहित हो जाते हैं।',
    yoginiGroup: 'Parāparātirahasya · Mahātripurasundarī',
    yoginiGroupHi: 'परापरातिरहस्य · महात्रिपुरसुन्दरी'
  }
];

export interface TriangleFormulaStep {
  stepIndex: number;
  formulaDisplay: string;
  addedCount: number;
  cumulativeTotal: number;
  hindiLabel: string;
  englishLabel: string;
  activeRingKeys: Array<'tri14' | 'tri10outer' | 'tri10inner' | 'tri8' | 'tri1' | 'bindu'>;
}

export const TRIANGLE_FORMULA_STEPS: TriangleFormulaStep[] = [
  {
    stepIndex: 0,
    formulaDisplay: '14',
    addedCount: 14,
    cumulativeTotal: 14,
    hindiLabel: 'चतुर्दशार · 14 बाहरी त्रिकोण',
    englishLabel: '14 Outer Triangles (Sarva Saubhāgya Dāyaka)',
    activeRingKeys: ['tri14']
  },
  {
    stepIndex: 1,
    formulaDisplay: '14 + 10',
    addedCount: 10,
    cumulativeTotal: 24,
    hindiLabel: 'बहिर्दशार · +10 बाह्य त्रिकोण',
    englishLabel: '+ 10 Outer Dashara Triangles (Sarvārtha Sādhaka)',
    activeRingKeys: ['tri14', 'tri10outer']
  },
  {
    stepIndex: 2,
    formulaDisplay: '14 + 10 + 10',
    addedCount: 10,
    cumulativeTotal: 34,
    hindiLabel: 'अन्तर्दशार · +10 आन्तरिक त्रिकोण',
    englishLabel: '+ 10 Inner Dashara Triangles (Sarva Rakṣākara)',
    activeRingKeys: ['tri14', 'tri10outer', 'tri10inner']
  },
  {
    stepIndex: 3,
    formulaDisplay: '14 + 10 + 10 + 8',
    addedCount: 8,
    cumulativeTotal: 42,
    hindiLabel: 'अष्टकोण · +8 त्रिकोण',
    englishLabel: '+ 8 Octagonal Ring Triangles (Sarva Rogahara)',
    activeRingKeys: ['tri14', 'tri10outer', 'tri10inner', 'tri8']
  },
  {
    stepIndex: 4,
    formulaDisplay: '14 + 10 + 10 + 8 + 1',
    addedCount: 1,
    cumulativeTotal: 43,
    hindiLabel: 'त्रिकोण · +1 केन्द्रीय त्रिकोण',
    englishLabel: '+ 1 Central Primary Triangle (Sarva Siddhiprada)',
    activeRingKeys: ['tri14', 'tri10outer', 'tri10inner', 'tri8', 'tri1']
  },
  {
    stepIndex: 5,
    formulaDisplay: '14 + 10 + 10 + 8 + 1 + 1 = 44',
    addedCount: 1,
    cumulativeTotal: 44,
    hindiLabel: 'बिन्दु व अक्ष · पूर्ण ४४ त्रिकोण संरचना',
    englishLabel: '+ 1 Apex / Bindu Focal Unit = 44 Total Units',
    activeRingKeys: ['tri14', 'tri10outer', 'tri10inner', 'tri8', 'tri1', 'bindu']
  }
];

export interface BhupuraMatrikaProfile {
  number: number; // 1 to 8
  indexFraction: string; // 1/8
  hindiDirection: string;
  englishDirection: string;
  indexHeader: string; // 1/8 · पूर्व · East
  indexHeaderEn: string; // 1/8 · East
  indexHeaderHi: string; // 1/8 · पूर्व
  hindiName: string;
  transliteration: string;
  descriptorLine: string;
  descriptorLineHi: string;
  hindiStatement: string;
  englishStatement: string;
  nivaranaHindi: string;
  nivaranaEnglish: string;
  timeRange: string;
  startSec: number;
  endSec: number;
  /** SVG coordinates on the 1000x1000 canvas for the marker on the Bhupura middle wall */
  markerX: number;
  markerY: number;
  /** Label offset direction for Sequence F overview */
  labelPlacement: 'bottom' | 'left' | 'top' | 'right' | 'bottom-left' | 'top-left' | 'top-right' | 'bottom-right';
  /** Active wall segment highlight identifier */
  wallPosition: 'bottom' | 'left' | 'top' | 'right' | 'bottom-left' | 'top-left' | 'top-right' | 'bottom-right';
  /** Camera pan target (in SVG viewBox / transform space) for close-up inspection */
  cameraTransform: {
    scale: number;
    translateX: number;
    translateY: number;
  };
  /** Corresponding index in the 8x8 Matrix / MatrikaExperience (0-7) */
  matrixRowIndex: number;
}

export const BHUPURA_MATRIKA_PROFILES: BhupuraMatrikaProfile[] = [
  {
    number: 1,
    indexFraction: '1/8',
    hindiDirection: 'पूर्व',
    englishDirection: 'East',
    indexHeader: '1/8 · पूर्व · East',
    indexHeaderEn: '1/8 · East',
    indexHeaderHi: '1/8 · पूर्व',
    hindiName: 'ब्राह्मी',
    transliteration: 'Brāhmī',
    descriptorLine: 'Brāhmī · Creation · Golden · four-faced',
    descriptorLineHi: 'ब्राह्मी · सृजन · स्वर्णिम आभा · चतुर्मुखी',
    hindiStatement: 'हर शुरुआत के पीछे की ऊर्जा',
    englishStatement: 'The energy behind every beginning',
    nivaranaHindi: 'निवारण: काम · इच्छा और अस्थिरता',
    nivaranaEnglish: 'Removes: lust, restless desire',
    timeRange: '00:54–00:58',
    startSec: 54,
    endSec: 58,
    markerX: 500,
    markerY: 848,
    labelPlacement: 'bottom',
    wallPosition: 'bottom',
    cameraTransform: { scale: 1.72, translateX: 0, translateY: -220 },
    matrixRowIndex: 0
  },
  {
    number: 2,
    indexFraction: '2/8',
    hindiDirection: 'दक्षिण',
    englishDirection: 'South',
    indexHeader: '2/8 · दक्षिण · South',
    indexHeaderEn: '2/8 · South',
    indexHeaderHi: '2/8 · दक्षिण',
    hindiName: 'माहेश्वरी',
    transliteration: 'Māheśvarī',
    descriptorLine: 'Māheśvarī · Destruction of illusion · White · three-eyed · bull',
    descriptorLineHi: 'माहेश्वरी · भ्रम का नाश · श्वेत वर्ण · त्रिनेत्रा · वृषभ वाहन',
    hindiStatement: 'भ्रम का नाश करने वाली शक्ति',
    englishStatement: 'The power that destroys illusion',
    nivaranaHindi: 'निवारण: क्रोध · विनाशकारी अग्नि',
    nivaranaEnglish: 'Removes: anger, destructive fire',
    timeRange: '00:58–01:02',
    startSec: 58,
    endSec: 62,
    markerX: 152,
    markerY: 500,
    labelPlacement: 'left',
    wallPosition: 'left',
    cameraTransform: { scale: 1.72, translateX: 220, translateY: 0 },
    matrixRowIndex: 1
  },
  {
    number: 3,
    indexFraction: '3/8',
    hindiDirection: 'पश्चिम',
    englishDirection: 'West',
    indexHeader: '3/8 · पश्चिम · West',
    indexHeaderEn: '3/8 · West',
    indexHeaderHi: '3/8 · पश्चिम',
    hindiName: 'कौमारी',
    transliteration: 'Kaumārī',
    descriptorLine: 'Kaumārī · Youthful valor · Red · peacock · spear',
    descriptorLineHi: 'कौमारी · शौर्य एवं संकल्प · रक्त वर्ण · मयूर वाहन · शक्ति शस्त्र',
    hindiStatement: 'साहस और संकल्प की ज्वाला',
    englishStatement: 'The flame of courage and resolve',
    nivaranaHindi: 'निवारण: लोभ · अतृप्त लालसा',
    nivaranaEnglish: 'Removes: greed, insatiable craving',
    timeRange: '01:03–01:07',
    startSec: 63,
    endSec: 67,
    markerX: 500,
    markerY: 152,
    labelPlacement: 'top',
    wallPosition: 'top',
    cameraTransform: { scale: 1.72, translateX: 0, translateY: 220 },
    matrixRowIndex: 2
  },
  {
    number: 4,
    indexFraction: '4/8',
    hindiDirection: 'उत्तर',
    englishDirection: 'North',
    indexHeader: '4/8 · उत्तर · North',
    indexHeaderEn: '4/8 · North',
    indexHeaderHi: '4/8 · उत्तर',
    hindiName: 'वैष्णवी',
    transliteration: 'Vaiṣṇavī',
    descriptorLine: 'Vaiṣṇavī · Sustenance · Dark blue · Garuda · chakra',
    descriptorLineHi: 'वैष्णवी · पालन एवं संतुलन · श्याम-नील वर्ण · गरुड़ वाहन · चक्र',
    hindiStatement: 'धारण और संतुलन की शक्ति',
    englishStatement: 'The power of sustenance and balance',
    nivaranaHindi: 'निवारण: मोह · अंधा लगाव',
    nivaranaEnglish: 'Removes: delusion, blind attachment',
    timeRange: '01:07–01:11',
    startSec: 67,
    endSec: 71,
    markerX: 848,
    markerY: 500,
    labelPlacement: 'right',
    wallPosition: 'right',
    cameraTransform: { scale: 1.72, translateX: -220, translateY: 0 },
    matrixRowIndex: 3
  },
  {
    number: 5,
    indexFraction: '5/8',
    hindiDirection: 'आग्नेय',
    englishDirection: 'Southeast',
    indexHeader: '5/8 · आग्नेय · Southeast',
    indexHeaderEn: '5/8 · Southeast',
    indexHeaderHi: '5/8 · आग्नेय',
    hindiName: 'वाराही',
    transliteration: 'Vārāhī',
    descriptorLine: 'Vārāhī · Fearless earth force · Dark · boar-faced · staff',
    descriptorLineHi: 'वाराही · निर्भय भू-शक्ति · श्याम वर्ण · वराह-मुखी · दण्ड धारिणी',
    hindiStatement: 'धरती से उठती निर्भय शक्ति',
    englishStatement: 'Fearless strength rising from the earth',
    nivaranaHindi: 'निवारण: मद · अहंकार और दंभ',
    nivaranaEnglish: 'Removes: pride, arrogance',
    timeRange: '01:12–01:16',
    startSec: 72,
    endSec: 76,
    markerX: 168,
    markerY: 832,
    labelPlacement: 'bottom-left',
    wallPosition: 'bottom-left',
    cameraTransform: { scale: 1.72, translateX: 200, translateY: -200 },
    matrixRowIndex: 4
  },
  {
    number: 6,
    indexFraction: '6/8',
    hindiDirection: 'नैऋत्य',
    englishDirection: 'Southwest',
    indexHeader: '6/8 · नैऋत्य · Southwest',
    indexHeaderEn: '6/8 · Southwest',
    indexHeaderHi: '6/8 · नैऋत्य',
    hindiName: 'माहेन्द्री',
    transliteration: 'Māhendrī',
    descriptorLine: 'Māhendrī · Royal sovereignty · Golden · elephant · vajra',
    descriptorLineHi: 'माहेन्द्री · राजसी ऐश्वर्य · स्वर्णिम आभा · गज वाहन · वज्र धारिणी',
    hindiStatement: 'इन्द्रियों पर राजसी अधिकार',
    englishStatement: 'Sovereign mastery over the senses',
    nivaranaHindi: 'निवारण: मात्सर्य · ईर्ष्या और जलन',
    nivaranaEnglish: 'Removes: jealousy, envy',
    timeRange: '01:16–01:20',
    startSec: 76,
    endSec: 80,
    markerX: 168,
    markerY: 168,
    labelPlacement: 'top-left',
    wallPosition: 'top-left',
    cameraTransform: { scale: 1.72, translateX: 200, translateY: 200 },
    matrixRowIndex: 5
  },
  {
    number: 7,
    indexFraction: '7/8',
    hindiDirection: 'वायव्य',
    englishDirection: 'Northwest',
    indexHeader: '7/8 · वायव्य · Northwest',
    indexHeaderEn: '7/8 · Northwest',
    indexHeaderHi: '7/8 · वायव्य',
    hindiName: 'चामुण्डा',
    transliteration: 'Cāmuṇḍā',
    descriptorLine: 'Cāmuṇḍā · Fierce liberation · Black · skeletal · owl',
    descriptorLineHi: 'चामुण्डा · प्रचण्ड मुक्ति शक्ति · कृष्ण वर्ण · कंकाल रूप · उलूक वाहन',
    hindiStatement: 'अहंकार और भय का संहार',
    englishStatement: 'Annihilation of ego and fear',
    nivaranaHindi: 'निवारण: पैशुन्य · निन्दा और द्वेष',
    nivaranaEnglish: 'Removes: malice, slander, ill-will',
    timeRange: '01:21–01:25',
    startSec: 81,
    endSec: 85,
    markerX: 832,
    markerY: 168,
    labelPlacement: 'top-right',
    wallPosition: 'top-right',
    cameraTransform: { scale: 1.72, translateX: -200, translateY: 200 },
    matrixRowIndex: 6
  },
  {
    number: 8,
    indexFraction: '8/8',
    hindiDirection: 'ईशान',
    englishDirection: 'Northeast',
    indexHeader: '8/8 · ईशान · Northeast',
    indexHeaderEn: '8/8 · Northeast',
    indexHeaderHi: '8/8 · ईशान',
    hindiName: 'महालक्ष्मी',
    transliteration: 'Mahālakṣmī',
    descriptorLine: 'Mahālakṣmī · Complete grace · Golden · lotus',
    descriptorLineHi: 'महालक्ष्मी · पूर्ण अनुग्रह · स्वर्णिम आभा · पद्मासना',
    hindiStatement: 'अन्तिम द्वार · पूर्ण अनुग्रह',
    englishStatement: 'The final gate — complete grace',
    nivaranaHindi: 'निवारण: असूया · गुणों में दोष देखना',
    nivaranaEnglish: 'Removes: fault-finding, resentment of the good',
    timeRange: '01:25–01:29',
    startSec: 85,
    endSec: 89,
    markerX: 832,
    markerY: 832,
    labelPlacement: 'bottom-right',
    wallPosition: 'bottom-right',
    cameraTransform: { scale: 1.72, translateX: -200, translateY: -200 },
    matrixRowIndex: 7
  }
];
