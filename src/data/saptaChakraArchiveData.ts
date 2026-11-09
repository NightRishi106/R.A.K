/**
 * THE SEVEN CHAKRAS — COMPLETE TANTRIC & YOGIC RESEARCH ARCHIVE
 * सप्त चक्र · चक्र विद्या एवं कुण्डलिनी-नाड़ी विज्ञान
 *
 * Primary Textual Basis:
 * - Pūrṇānanda Yati, Śrītattvacintāmaṇi Ch. 6: Ṣaṭ-Cakra-Nirūpaṇa (1577 CE)
 * - Kālīcaraṇa’s Sanskrit commentary on Ṣaṭ-Cakra-Nirūpaṇa
 * - Pādukā-Pañcaka (with Kālīcaraṇa’s commentary)
 * - Śiva Saṃhitā (Ch. 2 & Ch. 5), Gorakṣaśataka, Haṭha Yoga Pradīpikā (Ch. 3–4)
 * - Yoga Upaniṣads: Yoga-Kuṇḍalinī, Darśana, Śāṇḍilya, Cūḍāmaṇi, Triśikhibrāhmaṇa
 * - Kubjikāmata Tantra, Śāradā Tilaka Tantra, Netra Tantra
 * - Academic Studies: Sir John Woodroffe (Arthur Avalon, The Serpent Power, 1919),
 *   David Gordon White (The Alchemical Body), Gavin Flood (The Tantric Body),
 *   James Mallinson & Mark Singleton (Roots of Yoga), Kurt Leland (Rainbow Body).
 */

export interface ChakraStudioPanelNav {
  panelNumber: string;
  id: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  accentColor: string;
  chakraId?: string;
}

export interface IndividualChakraProfile {
  id: string;
  articleSlug: string;
  order: number;
  studioPanelNumber: string;
  nameEn: string;
  nameSanskrit: string;
  transliteration: string;
  commonEnglishDesignation: string;
  commonHindiDesignation: string;
  etymologyEn: string;
  etymologyHi: string;
  subtleLocationEn: string;
  subtleLocationHi: string;
  vertebralReferenceEn: string;
  petalCount: number;
  petalCountDisplay: string;
  petalColorTraditionalEn: string;
  petalColorTraditionalHi: string;
  modernRainbowColorEn: string;
  accentHex: string;
  secondaryHex: string;
  petalLettersDevanagari: string[];
  petalLettersIAST: string[];
  elementSanskrit: string;
  elementEn: string;
  elementHi: string;
  elementColorTraditionalEn: string;
  bijaMantraDevanagari: string;
  bijaMantraIAST: string;
  bijaCarrierDeityEn: string;
  bijaVehicleAnimalEn: string;
  bijaVehicleAnimalHi: string;
  yantraGeometryEn: string;
  yantraGeometryHi: string;
  yantraShapeType: 'square' | 'crescent' | 'triangle' | 'hexagram' | 'circle' | 'two-petal-linga' | 'thousand-lotus';
  presidingDeityEn: string;
  presidingDeityHi: string;
  shaktiGoddessEn: string;
  shaktiGoddessHi: string;
  lingaAndTriangleEn: string;
  lingaAndTriangleHi: string;
  granthiEn: string;
  granthiHi: string;
  tanmatraAndIndriyaEn: string;
  pranaVayuEn: string;
  lokaAssociationEn: string;
  traditionalRoleEn: string;
  traditionalRoleHi: string;
  kundaliniSignificanceEn: string;
  kundaliniSignificanceHi: string;
  traditionalSpiritualFruitEn: string;
  traditionalSpiritualFruitHi: string;
  modernPsychologicalInterpretationEn: string;
  modernPsychologicalInterpretationHi: string;
  modernThemesListEn: string[];
  traditionalMeditationReferenceEn: string;
  traditionalMeditationReferenceHi: string;
  importantDistinctionsEn: string[];
  primaryTextCitations: string[];
}

export interface ChakraArchiveArticle {
  id: string;
  slug: string;
  articleNumber: string;
  partCategory: 'part1-intro' | 'part2-seven-chakras' | 'part3-thematic';
  titleEn: string;
  titleSanskrit: string;
  transliteration: string;
  subtitleEn: string;
  subtitleHi: string;
  accentColor: string;
  chakraProfileId?: string;
  introductoryOverviewEn: string;
  introductoryOverviewHi: string;
  historicalBackgroundEn: string;
  historicalBackgroundHi: string;
  traditionalExplanationEn: string;
  traditionalExplanationHi: string;
  sanskritTerminology: { termDevanagari: string; termIAST: string; definitionEn: string; definitionHi: string }[];
  iconographyAndSymbolismEn: string;
  iconographyAndSymbolismHi: string;
  diagramType: 'full-subtle-body' | 'chakra-single' | 'three-nadis' | 'kundalini-granthis' | 'five-mahabhutas' | 'fifty-letters-lotus' | 'traditions-comparison' | 'traditional-vs-modern';
  detailedSections: {
    headingEn: string;
    headingHi: string;
    bodyEn: string;
    bodyHi: string;
  }[];
  relatedConceptsEn: string[];
  relatedConceptsHi: string[];
  traditionalVsModernEn: {
    traditionalView: string;
    modernView: string;
    scholarlyClarification: string;
  };
  distinctionsAndMisconceptionsEn: string[];
  distinctionsAndMisconceptionsHi: string[];
  referencesAndReading: string[];
  relatedArticleSlugs: string[];
}

export const CHAKRA_STUDIO_PANELS: ChakraStudioPanelNav[] = [
  {
    panelNumber: '01',
    id: 'panel-intro',
    titleEn: 'Introduction',
    titleHi: 'परिचय',
    subtitleEn: 'Subtle body & chakra system',
    subtitleHi: 'सूक्ष्म शरीर एवं चक्र तंत्र',
    accentColor: '#D3AD55'
  },
  {
    panelNumber: '02',
    id: 'panel-muladhara',
    titleEn: 'Mūlādhāra',
    titleHi: 'मूलाधार',
    subtitleEn: 'Root · Earth',
    subtitleHi: 'मूल · पृथ्वी तत्त्व',
    accentColor: '#EF4444',
    chakraId: 'muladhara'
  },
  {
    panelNumber: '03',
    id: 'panel-svadhishthana',
    titleEn: 'Svādhiṣṭhāna',
    titleHi: 'स्वाधिष्ठान',
    subtitleEn: 'Water',
    subtitleHi: 'जल तत्त्व',
    accentColor: '#F97316',
    chakraId: 'svadhishthana'
  },
  {
    panelNumber: '04',
    id: 'panel-manipura',
    titleEn: 'Maṇipūra',
    titleHi: 'मणिपूर',
    subtitleEn: 'Fire',
    subtitleHi: 'अग्नि तत्त्व',
    accentColor: '#EAB308',
    chakraId: 'manipura'
  },
  {
    panelNumber: '05',
    id: 'panel-anahata',
    titleEn: 'Anāhata',
    titleHi: 'अनाहत',
    subtitleEn: 'Air',
    subtitleHi: 'वायु तत्त्व',
    accentColor: '#22C55E',
    chakraId: 'anahata'
  },
  {
    panelNumber: '06',
    id: 'panel-vishuddha',
    titleEn: 'Viśuddha',
    titleHi: 'विशुद्ध',
    subtitleEn: 'Space',
    subtitleHi: 'आकाश तत्त्व',
    accentColor: '#38BDF8',
    chakraId: 'vishuddha'
  },
  {
    panelNumber: '07',
    id: 'panel-ajna',
    titleEn: 'Ājñā',
    titleHi: 'आज्ञा',
    subtitleEn: 'Inner perception',
    subtitleHi: 'अन्तःप्रज्ञा एवं मनस्',
    accentColor: '#6366F1',
    chakraId: 'ajna'
  },
  {
    panelNumber: '08',
    id: 'panel-sahasrara',
    titleEn: 'Sahasrāra',
    titleHi: 'सहस्रार',
    subtitleEn: 'Crown lotus',
    subtitleHi: 'सहस्रदल पद्म',
    accentColor: '#C084FC',
    chakraId: 'sahasrara'
  },
  {
    panelNumber: '09',
    id: 'panel-kundalini-studio',
    titleEn: 'Kuṇḍalinī Studio',
    titleHi: 'कुण्डलिनी केंद्र',
    subtitleEn: 'Nāḍīs & subtle body',
    subtitleHi: 'नाड़ी एवं सूक्ष्म शरीर',
    accentColor: '#F59E0B'
  }
];

export const SEVEN_CHAKRA_PROFILES: IndividualChakraProfile[] = [
  {
    id: 'muladhara',
    articleSlug: 'chakra-01-muladhara-root-centre',
    order: 1,
    studioPanelNumber: '02',
    nameEn: 'Mūlādhāra Chakra',
    nameSanskrit: 'मूलाधार चक्र',
    transliteration: 'Mūlādhāra Cakra',
    commonEnglishDesignation: 'Root Support Centre (Root Chakra)',
    commonHindiDesignation: 'आधार पद्म / मूलाधार चक्र',
    etymologyEn:
      'Derived from Sanskrit mūla (मूल, "root, origin, foundation") + ādhāra (आधार, "support, substratum, receptacle"). In Pūrṇānanda’s Ṣaṭ-Cakra-Nirūpaṇa (vv. 4–13), it is the foundational lotus attached to the mouth of the Suṣumṇā channel where Kuṇḍalinī rests.',
    etymologyHi:
      'संस्कृत "मूल" (जड़, आदि कारण) और "आधार" (अधिष्ठान, आश्रय) के संयोग से बना है। पूर्णानन्द कृत षट्चक्रनिरूपण (श्लोक ४–१३) में यह सुषुम्णा के मुख से संलग्न आधारभूत कमल है जहाँ कुण्डलिनी शक्ति विश्राम करती हैं।',
    subtleLocationEn:
      'At the base of the Suṣumṇā column, midway between the root of the reproductive organ and the anus (perineum / yoni-sthāna), below the Kanda.',
    subtleLocationHi:
      'सुषुम्णा के मूल में, गुदा और जननेन्द्रिय के मध्य (सिवनी / योनि-स्थान) में स्थित।',
    vertebralReferenceEn: 'Coccygeal / Sacral base along the subtle Merudaṇḍa axis',
    petalCount: 4,
    petalCountDisplay: '4 Petals (चतुर्दल कमल)',
    petalColorTraditionalEn: 'Deep crimson red (Śoṇa / सिन्दूर-रक्त वर्ण) in Ṣaṭ-Cakra-Nirūpaṇa; letters in shining gold.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार गहरा लाल (शोण/जपाकुसुम सदृश); दलों पर स्वर्णिम अक्षर।',
    modernRainbowColorEn: 'Red (adopted in post-1920s Western rainbow chakra charts)',
    accentHex: '#EF4444',
    secondaryHex: '#EAB308',
    petalLettersDevanagari: ['वं', 'शं', 'षं', 'सं'],
    petalLettersIAST: ['vaṃ', 'śaṃ', 'ṣaṃ', 'saṃ'],
    elementSanskrit: 'पृथ्वी (Pṛthvī / Dharā)',
    elementEn: 'Pṛthvī — Earth Element',
    elementHi: 'पृथ्वी तत्त्व (धरा मण्डल)',
    elementColorTraditionalEn: 'Shining yellow (Pīta-varṇa) square enclosed by eight golden spears (śūla).',
    bijaMantraDevanagari: 'लं',
    bijaMantraIAST: 'Laṃ',
    bijaCarrierDeityEn: 'Indra (four-armed, yellow hue, holding vajra) seated upon the elephant Airāvata',
    bijaVehicleAnimalEn: 'Airāvata — The Seven-Trunked White Elephant (representing stability and the strength of the Earth tattva)',
    bijaVehicleAnimalHi: 'ऐरावत गज (सप्त-शुण्ड युक्त श्वेत हाथी — पृथ्वी तत्त्व की दृढ़ता का प्रतीक)',
    yantraGeometryEn: 'Yellow Square (Caturaśra Dharā-Maṇḍala) flanked by 8 spears, containing the crimson Kāmarūpa Triangle (Traipura Trikoṇa) at its centre.',
    yantraGeometryHi: 'अष्ट-शूलों से परिवृत पीत वर्ण का चतुष्कोण (पृथ्वी मण्डल), जिसके मध्य में कामरूप त्रिकोण स्थित है।',
    yantraShapeType: 'square',
    presidingDeityEn: 'Caturmukha Bāla-Brahmā (Four-faced child Brahmā,holding staff, gourd, rosary, and abhaya mudrā)',
    presidingDeityHi: 'चतुर्मुख बाल-ब्रह्मा (दण्ड, कमण्डलु, अक्षमाला एवं अभय मुद्रा धारी)',
    shaktiGoddessEn: 'Ḍākinī Śakti (four-armed, radiant crimson, guardian of the Tvak/skin dhātu)',
    shaktiGoddessHi: 'डाकिनी शक्ति (चतुर्भुजा, रक्तवर्णा, त्वक्-धातु की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Svayambhū Liṅga (dark as molten gold/emerald leaf, facing downward) inside the Kāmarūpa Triangle.',
    lingaAndTriangleHi: 'कामरूप त्रिकोण के भीतर स्थित "स्वयम्भू लिंग", जिस पर कुण्डलिनी साढ़े तीन वलय में लिपटी हैं।',
    granthiEn: 'Brahma Granthi (Knot of Brahmā — binds consciousness to physical survival, name, and form)',
    granthiHi: 'ब्रह्म ग्रन्थि (स्थूल देह-भाव एवं भौतिक आसक्ति की प्रथम ग्रन्थि)',
    tanmatraAndIndriyaEn: 'Gandha (Smell) · Ghrāṇa (Nose) & Pāyu (Excretion)',
    pranaVayuEn: 'Apāna Vāyu (downward and grounding vital current)',
    lokaAssociationEn: 'Bhūrloka (Physical / Terrestrial Plane)',
    traditionalRoleEn:
      'Serves as the root-anchor of the subtle body where the three principal nāḍīs (Iḍā, Piṅgalā, Suṣumṇā) originate and where Kuṇḍalinī Śakti sleeps coiled 3½ times around the Svayambhū Liṅga, closing the Brahmadvāra (doorway to Brahman).',
    traditionalRoleHi:
      'सूक्ष्म शरीर का मूल आधार जहाँ से इड़ा, पिंगला और सुषुम्णा नाड़ियाँ निकलती हैं तथा जहाँ कुण्डलिनी शक्ति स्वयम्भू लिंग को साढ़े तीन वलय में लपेटकर ब्रह्मद्वार को आच्छादित किए रहती हैं।',
    kundaliniSignificanceEn:
      'Kuṇḍalinī is described in Ṣaṭ-Cakra-Nirūpaṇa (vv. 10–11) as fine as the stalk of a young lotus fibre (bisa-tantu-tanīyasī), shining like ten million lightning flashes, humming like a swarm of love-intoxicated bees, and maintaining the breathing life of all creatures.',
    kundaliniSignificanceHi:
      'षट्चक्रनिरूपण (श्लोक १०–११) में कुण्डलिनी को कमल-नाल के सूक्ष्म तंतु के समान पतली, कोटि विद्युत् के समान तेजस्वी, मधुप-गुंजार के समान अव्यक्त नाद करने वाली तथा समस्त जीवों के श्वास-प्रश्वास की जननी कहा गया है।',
    traditionalSpiritualFruitEn:
      'According to Ṣaṭ-Cakra-Nirūpaṇa (v. 13), sustained dhyāna on Mūlādhāra makes the practitioner a lord of speech (vāk-pati), free from sickness, cheerful in mind, and possessed of poetic and scriptural mastery.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक १३) के अनुसार मूलाधार के ध्यान से साधक वाक्पति (वाणी का स्वामी), रोगमुक्त, नित्य प्रसन्नचित्त और काव्य एवं शास्त्र-ज्ञान में प्रवीण होता है।',
    modernPsychologicalInterpretationEn:
      'In 20th-century Western transpersonal psychology (starting with C.G. Jung’s 1932 Kundalini seminars and Anodea Judith’s somatic models), Mūlādhāra is interpreted as the psychological foundation of basic trust, physical safety, financial/shelter security, and somatic grounding.',
    modernPsychologicalInterpretationHi:
      '२०वीं शताब्दी के आधुनिक मनोवैज्ञानिक मॉडलों में मूलाधार को शारीरिक सुरक्षा, आत्म-स्थिरता, बुनियादी विश्वास और जमीनी जुड़ाव (ग्राउंडिंग) के केंद्र के रूप में व्याख्यायित किया जाता है।',
    modernThemesListEn: ['Physical grounding & stability', 'Survival & existential security', 'Somatic presence', 'Foundational resilience'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 4–13; Śiva Saṃhitā 5.56–64; Yoga-Kuṇḍalinī Upaniṣad Ch. 1 (Mūla-bandha and Apāna-Prāṇa union).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक ४–१३); शिव संहिता (५.५६–६४); योगकुण्डलिनी उपनिषद् अध्याय १ (मूलबन्ध एवं प्राण-अपान संयोग)।',
    importantDistinctionsEn: [
      'Traditional texts describe the Earth square inside Mūlādhāra as yellow (Pīta) and the 4 petals as crimson—whereas modern charts paint the entire chakra uniformly red.',
      'Mūlādhāra is a subtle-body meditative locus (ādhāra), not the anatomical coccygeal nerve plexus or adrenal gland.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 4–13',
      'Śiva Saṃhitā, Chapter 5, Verses 56–64',
      'Gorakṣaśataka, Verses 14–19'
    ]
  },
  {
    id: 'svadhishthana',
    articleSlug: 'chakra-02-svadhishthana-water-centre',
    order: 2,
    studioPanelNumber: '03',
    nameEn: 'Svādhiṣṭhāna Chakra',
    nameSanskrit: 'स्वाधिष्ठान चक्र',
    transliteration: 'Svādhiṣṭhāna Cakra',
    commonEnglishDesignation: 'One’s Own Abode (Sacral / Pelvic Chakra)',
    commonHindiDesignation: 'स्वाधिष्ठान पद्म (जल-तत्त्व केंद्र)',
    etymologyEn:
      'From Sanskrit sva (स्व, "one’s own, the Self/Śakti") + adhiṣṭhāna (अधिष्ठान, "standing place, seat, abode"). Literally "the Self’s own seat" or the original abode of vital Prāṇa/Śakti.',
    etymologyHi:
      'संस्कृत "स्व" (निज आत्मा / शक्ति) और "अधिष्ठान" (निवास स्थान / आश्रय) से निर्मित, जिसका अर्थ है—प्राण या शक्ति का स्व-अधिष्ठान।',
    subtleLocationEn:
      'Within the Suṣumṇā column at the root of the generative organ (liṅga-mūla / pelvic region), above Mūlādhāra and below the navel.',
    subtleLocationHi:
      'सुषुम्णा के भीतर जननेन्द्रिय के मूल (लिंग-मूल / पेडू क्षेत्र) में, मूलाधार के ऊपर और नाभि के नीचे।',
    vertebralReferenceEn: 'Sacral / Hypogastric axis along the subtle Merudaṇḍa',
    petalCount: 6,
    petalCountDisplay: '6 Petals (षड्दल कमल)',
    petalColorTraditionalEn: 'Vermilion / bright sindūra red (सिन्दूर-अरुण वर्ण) petals; letters shining like lightning.',
    petalColorTraditionalHi: 'सिन्दूर के समान उज्ज्वल अरुण-रक्त वर्ण के ६ दल; दलों पर विद्युत्-सदृश अक्षर।',
    modernRainbowColorEn: 'Orange (in modern Western 20th-century colour-healing systems)',
    accentHex: '#F97316',
    secondaryHex: '#38BDF8',
    petalLettersDevanagari: ['बं', 'भं', 'मं', 'यं', 'रं', 'लं'],
    petalLettersIAST: ['baṃ', 'bhaṃ', 'maṃ', 'yaṃ', 'raṃ', 'laṃ'],
    elementSanskrit: 'आपस् / जल (Āpas / Jala)',
    elementEn: 'Āpas / Jala — Water Element',
    elementHi: 'जल तत्त्व (अम्बु-मण्डल)',
    elementColorTraditionalEn: 'Luminous white (Śukla-varṇa) crescent moon shaped like a half-moon (Ardha-candra) of water.',
    bijaMantraDevanagari: 'वं',
    bijaMantraIAST: 'Vaṃ',
    bijaCarrierDeityEn: 'Varuṇa (Lord of Waters, white as the autumn moon, holding the noose/pāśa)',
    bijaVehicleAnimalEn: 'Makara — Mythic Aquatic Sea-Monster / Crocodile (white, vehicle of Varuṇa and the Water बीज Vaṃ)',
    bijaVehicleAnimalHi: 'मकर (श्वेत वर्ण का जलीय मकर — वरुण एवं जल-बीज "वं" का वाहन)',
    yantraGeometryEn: 'White Crescent Moon (Ardha-candra Ambhoja-Maṇḍala) within the pericarp of the six-petalled vermilion lotus.',
    yantraGeometryHi: 'षड्दल सिन्दूरी कमल की कर्णिका के भीतर श्वेत अर्धचन्द्राकार जल-मण्डल।',
    yantraShapeType: 'crescent',
    presidingDeityEn: 'Mahāviṣṇu (Youthful, luminous blue, clad in yellow raiments, four-armed holding conch, discus, mace, lotus)',
    presidingDeityHi: 'चतुर्भुज भगवान् विष्णु (नीलवर्ण, पीताम्बरधारी, शंख-चक्र-गदा-पद्म युक्त)',
    shaktiGoddessEn: 'Rākiṇī Śakti (blue-lotus hued, four-armed holding trident, lotus, drum, and axe; presiding over Rakta/blood dhātu)',
    shaktiGoddessHi: 'राकिनी शक्ति (नीलकमल आभा युक्त, चतुर्भुजा, रक्त-धातु की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Primordial Water-Seat (Ambhoja-Maṇḍala) supporting the lunar current.',
    lingaAndTriangleHi: 'श्वेत वरुण-मण्डल एवं अर्धचन्द्राकार जल-तत्त्व।',
    granthiEn: 'Upper threshold of Brahma Granthi influence',
    granthiHi: 'ब्रह्म ग्रन्थि के ऊपरी प्रभाव-क्षेत्र से संबद्ध',
    tanmatraAndIndriyaEn: 'Rasa (Taste) · Rasanā (Tongue) & Upastha (Procreation/Genitals)',
    pranaVayuEn: 'Vyāna / Apāna coordination (fluid circulation)',
    lokaAssociationEn: 'Bhuvarloka (Intermediate Vital Plane)',
    traditionalRoleEn:
      'Governs the subtle Water element (Āpas) within the microcosm, regulating liquidity, lunar soma-rasa, and the dissolution of the six inner enemies (ṣaḍ-ripu: kāma, krodha, lobha, moha, mada, mātsarya).',
    traditionalRoleHi:
      'सूक्ष्म शरीर में जल-तत्त्व (आपस्) का संचालन करता है तथा काम, क्रोध, लोभ, मोह, मद और मात्सर्य रूपी षड्रिपुओं के शोधन का केंद्र है।',
    kundaliniSignificanceEn:
      'When Kuṇḍalinī ascends from Mūlādhāra through Svādhiṣṭhāna, the practitioner transcends animalistic instinct and egoic delusion (ahaṅkāra-moha).',
    kundaliniSignificanceHi:
      'जब कुण्डलिनी मूलाधार से उठकर स्वाधिष्ठान का भेदन करती है, तब साधक पाशविक वृत्तियों और अज्ञान-जनित मोह से ऊपर उठता है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (v. 18) states that one who meditates upon Svādhiṣṭhāna becomes free from all six inner enemies (kāma, etc.), conquers fear of water and darkness, and composesnectar-like prose and verse.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक १८) के अनुसार स्वाधिष्ठान के ध्यान से साधक काम-क्रोधादि छह शत्रुओं पर विजय पाता है, मोह के अंधकार से मुक्त होता है और उसकी वाणी में अमृतमय प्रवाह आता है।',
    modernPsychologicalInterpretationEn:
      'Modern Western interpretations associate Svādhiṣṭhāna with emotional fluidity, creative expression, sensuality, pleasure, and interpersonal adaptability.',
    modernPsychologicalInterpretationHi:
      'आधुनिक मनोवैज्ञानिक व्याख्याओं में स्वाधिष्ठान को भावनात्मक प्रवाह, सृजनात्मकता, कलात्मक अभिव्यक्ति और संवेदनात्मक संतुलन से जोड़ा जाता है।',
    modernThemesListEn: ['Emotional fluidity & adaptability', 'Creative & artistic impulse', 'Healthy desire & pleasure', 'Relational flow'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 14–18; Śiva Saṃhitā 5.65–68; Gorakṣaśataka (meditation on the pelvic water-mandala).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक १४–१८); शिव संहिता (५.६५–६८); गोरक्षशतक।',
    importantDistinctionsEn: [
      'In Sanskrit Tantric texts, Svādhiṣṭhāna’s inner water mandala is pure white (crescent moon) and its petals are vermilion—not the solid orange of modern charts.',
      'Classical texts emphasize conquering kāma (lust) and moha (delusion) at this centre, whereas modern wellness literature often frames it primarily around indulging or boosting sensuality.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 14–18',
      'Śiva Saṃhitā, Chapter 5, Verses 65–68'
    ]
  },
  {
    id: 'manipura',
    articleSlug: 'chakra-03-manipura-fire-centre',
    order: 3,
    studioPanelNumber: '04',
    nameEn: 'Maṇipūra Chakra',
    nameSanskrit: 'मणिपूर चक्र',
    transliteration: 'Maṇipūra Cakra (also Nābhi Padma)',
    commonEnglishDesignation: 'City of Jewels (Navel / Solar Plexus Chakra)',
    commonHindiDesignation: 'मणिपूर पद्म / नाभि चक्र',
    etymologyEn:
      'From Sanskrit maṇi (मणि, "lustrous gem, jewel") + pūra (पूर, "city, fullness, abundance"). Ṣaṭ-Cakra-Nirūpaṇa (v. 21) explains that because it shines like a lustrous gem with the fiery radiance of Rudra and Agni, it is called Maṇipūra.',
    etymologyHi:
      'संस्कृत "मणि" (तेजस्वी रत्न) और "पूर" (नगरी या परिपूर्णता) से बना है। अग्नि और रुद्र के तेज से मणि के समान दमकने के कारण इसे मणिपूर (अथवा नाभि-पद्म) कहा गया है।',
    subtleLocationEn:
      'Within the Suṣumṇā column at the root of the navel region (nābhi-mūla).',
    subtleLocationHi:
      'सुषुम्णा के भीतर नाभि-मूल (नाभि-मण्डल) में स्थित।',
    vertebralReferenceEn: 'Lumbar / Solar Plexus axis behind the navel',
    petalCount: 10,
    petalCountDisplay: '10 Petals (दशदल कमल)',
    petalColorTraditionalEn: 'Dark rain-cloud blue / smoky purple (जलद-श्याम / मेघवर्ण) petals; letters of blue-black hue.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार सघन वर्षा-मेघ (जलद-वर्ण / नील-धूम्र) के समान १० दल।',
    modernRainbowColorEn: 'Yellow / Golden (derived from the fiery glow of the inner Agni element in modern charts)',
    accentHex: '#EAB308',
    secondaryHex: '#EF4444',
    petalLettersDevanagari: ['डं', 'ढं', 'णं', 'तं', 'थं', 'दं', 'धं', 'नं', 'पं', 'फं'],
    petalLettersIAST: ['ḍaṃ', 'ḍhaṃ', 'ṇaṃ', 'taṃ', 'thaṃ', 'daṃ', 'dhaṃ', 'naṃ', 'paṃ', 'phaṃ'],
    elementSanskrit: 'अग्नि / तेजस् (Agni / Tejas)',
    elementEn: 'Agni / Tejas — Fire Element',
    elementHi: 'अग्नि / तेजस् तत्त्व (वह्नि-मण्डल)',
    elementColorTraditionalEn: 'Blazing red (Aruna / Rising-sun red) downward-pointing triangle with three Svastika (T-shaped) projections.',
    bijaMantraDevanagari: 'रं',
    bijaMantraIAST: 'Raṃ',
    bijaCarrierDeityEn: 'Agni / Vahni (four-armed, radiant red, holding rosary and śakti-spear)',
    bijaVehicleAnimalEn: 'Meṣa — The Fierce Ram (mount of Agni, symbolizing dynamic digestive and transformative fire)',
    bijaVehicleAnimalHi: 'मेष (मेंढा — अग्नि देव एवं "रं" बीज का वाहन, तेज और क्रियाशीलता का प्रतीक)',
    yantraGeometryEn: 'Red Inverted Triangle of Fire (Vahni-Maṇḍala Trikoṇa) adorned with three Svastika marks on its outer sides.',
    yantraGeometryHi: 'तीनों भुजाओं पर तीन स्वस्तिक चिह्नों से युक्त अरुण-रक्त वर्ण का त्रिकोण (अग्नि-मण्डल)।',
    yantraShapeType: 'triangle',
    presidingDeityEn: 'Vṛddha Rudra (Three-eyed, vermilion red smeared with white ashes, seated on a bull, granting boons and dispelling fear)',
    presidingDeityHi: 'वृद्ध रुद्र (सिन्दूर-वर्ण, भस्म-विभूषित, त्रिनेत्र, वरद एवं अभय मुद्रा धारी)',
    shaktiGoddessEn: 'Lākinī Śakti (four-armed, dark/radiant, holding thunderbolt, śakti, and abhaya/varada; presiding over Māṃsa/flesh dhātu)',
    shaktiGoddessHi: 'लाकिनी शक्ति (चतुर्भुजा, वज्र व शक्ति धारिणी, मांस-धातु की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Central Agni-Trikoṇa housing the solar digestive and prāṇic fire (Vaiśvānara / Jāṭharāgni).',
    lingaAndTriangleHi: 'जठराग्नि एवं वैश्वानर तेज का केंद्रीय अग्नि-त्रिकोण।',
    granthiEn: 'Lower approach to Viṣṇu Granthi',
    granthiHi: 'विष्णु ग्रन्थि की निचली सीमा से संबद्ध',
    tanmatraAndIndriyaEn: 'Rūpa (Sight/Form) · Cakṣu (Eyes) & Pāda (Feet/Locomotion)',
    pranaVayuEn: 'Samāna Vāyu (assimilating, balancing, and digestive vital current at the navel)',
    lokaAssociationEn: 'Svarloka (Celestial / Luminosity Plane)',
    traditionalRoleEn:
      'Acts as the solar furnace of the subtle body where Samāna Vāyu fans the digestive and alchemical fire (Jāṭharāgni). In Haṭha Yoga, the solar flames at the navel consume the lunar nectar (soma) dripping from the palate unless reversed through Viparītakaraṇī or Khecarī Mudrā.',
    traditionalRoleHi:
      'सूक्ष्म शरीर का सौर-अग्नि केंद्र जहाँ समान वायु जठराग्नि को प्रदीप्त रखती है। हठयोग के अनुसार नाभि-स्थित यही सूर्य-मण्डल तालु के चन्द्र-मण्डल से झरने वाले सोमामृत का पान करता है।',
    kundaliniSignificanceEn:
      'When Kuṇḍalinī pierces Maṇipūra, she ascends from the realm of water and instinct into the luminous solar fire, transmuting gross vitality into spiritual tapas.',
    kundaliniSignificanceHi:
      'जब कुण्डलिनी मणिपूर चक्र में प्रवेश करती है, तब साधक की प्राण-ऊर्जा तपस्या और आध्यात्मिक तेजस् में रूपांतरित हो जाती है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (v. 21) declares that meditating on Maṇipūra grants the power both to create and to dissolve (saṃhāra-pālana-kṣama), freedom from disease, mastery over speech, and entry into the inner sanctum of wisdom.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक २१) के अनुसार मणिपूर के ध्यान से साधक संहार और पालन में समर्थ होता है, रोग-शोक से मुक्त होता है और उसके मुखकमल में सरस्वती का निवास होता है।',
    modernPsychologicalInterpretationEn:
      'In modern psychological models, Maṇipūra is linked with personal agency, willpower, self-esteem, discipline, autonomy, and purposeful action.',
    modernPsychologicalInterpretationHi:
      'आधुनिक मनोवैज्ञानिक व्याख्याओं में मणिपूर को इच्छाशक्ति, आत्मविश्वास, अनुशासन, नेतृत्व और कर्मठता के केंद्र के रूप में देखा जाता है।',
    modernThemesListEn: ['Willpower & self-discipline', 'Personal agency & confidence', 'Digestive & metabolic vitality', 'Courageous action'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 19–21; Śiva Saṃhitā 5.69–72; Haṭha Yoga Pradīpikā 3.77 (Sūrya-Candra alchemy at the navel).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक १९–२१); शिव संहिता (५.६९–७२); हठयोगप्रदीपिका (३.७७)।',
    importantDistinctionsEn: [
      'In Pūrṇānanda’s text, the 10 petals of Maṇipūra are dark rain-cloud blue (जलद-वर्ण) and the inner Fire triangle is red—whereas modern charts colour the whole lotus bright yellow.',
      'Traditional texts place Maṇipūra directly at the navel root (nābhi-mūla), while some modern authors shift it upward to the epigastric solar plexus.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 19–21',
      'Śiva Saṃhitā, Chapter 5, Verses 69–72'
    ]
  },
  {
    id: 'anahata',
    articleSlug: 'chakra-04-anahata-heart-centre',
    order: 4,
    studioPanelNumber: '05',
    nameEn: 'Anāhata Chakra',
    nameSanskrit: 'अनाहत चक्र',
    transliteration: 'Anāhata Cakra (Hṛdaya Padma)',
    commonEnglishDesignation: 'Unstruck Sound Lotus (Heart Chakra)',
    commonHindiDesignation: 'अनाहत पद्म / हृदय चक्र',
    etymologyEn:
      'From Sanskrit an-āhata (अन् + आहत, "unstruck, unbeaten"). Refers to the primordial cosmic sound (Anāhata Nāda / Śabda-Brahman) that vibrates spontaneously without the collision of two physical objects, heard by yogīs in the silence of the heart.',
    etymologyHi:
      'संस्कृत "अन्" (बिना) + "आहत" (आघात/टकराव) से निर्मित। इसका अर्थ है—"बिना किसी बाहरी आघात के स्वतः गूँजने वाला अनाहत नाद" (शब्दब्रह्म), जिसे योगी हृदय-गुहा में सुनते हैं।',
    subtleLocationEn:
      'Within the Suṣumṇā column in the region of the heart (hṛdaya-sthāna). Below it shines a smaller eight-petalled red lotus housing the wish-fulfilling Kalpavṛkṣa tree and the Haṃsa (Jīvātman).',
    subtleLocationHi:
      'सुषुम्णा के भीतर हृदय-प्रदेश में स्थित। इसके ठीक नीचे अष्टदल लाल कमल (आनन्दकन्द) में कल्पवृक्ष और जीवात्मा रूपी हंस का निवास वर्णित है।',
    vertebralReferenceEn: 'Thoracic / Cardiac axis along the central column',
    petalCount: 12,
    petalCountDisplay: '12 Petals (द्वादशदल कमल)',
    petalColorTraditionalEn: 'Deep vermilion / bandhūka-flower red (बन्धूक-पुष्प सदृश रक्त वर्ण) petals; letters in vermilion.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार दुपहरिया (बन्धूक) फूल के समान सिन्दूरी-लाल १२ दल।',
    modernRainbowColorEn: 'Green (or Pink; standardized in 20th-century Theosophical and New Age rainbow charts)',
    accentHex: '#22C55E',
    secondaryHex: '#F43F5E',
    petalLettersDevanagari: ['कं', 'खं', 'गं', 'घं', 'ङं', 'चं', 'छं', 'जं', 'झं', 'ञं', 'टं', 'ठं'],
    petalLettersIAST: ['kaṃ', 'khaṃ', 'gaṃ', 'ghaṃ', 'ṅaṃ', 'caṃ', 'chaṃ', 'jaṃ', 'jhaṃ', 'ñaṃ', 'ṭaṃ', 'ṭhaṃ'],
    elementSanskrit: 'वायु (Vāyu / Marut)',
    elementEn: 'Vāyu — Air / Wind Element',
    elementHi: 'वायु तत्त्व (मरुत्-मण्डल)',
    elementColorTraditionalEn: 'Smoky grey / dark smoke-hued (Dhūmra-varṇa) six-pointed star (Ṣaṭkoṇa).',
    bijaMantraDevanagari: 'यं',
    bijaMantraIAST: 'Yaṃ',
    bijaCarrierDeityEn: 'Vāyu / Pavana (four-armed, smoky-hued, holding the goad/aṅkuśa)',
    bijaVehicleAnimalEn: 'Kṛṣṇasāra Mṛga — The Swift Black Antelope (symbolizing the fleetness of the Wind element and mind)',
    bijaVehicleAnimalHi: 'कृष्णसार मृग (काला हिरण — वायु की तीव्र गति एवं स्फूर्ति का प्रतीक)',
    yantraGeometryEn: 'Smoky Six-Pointed Star / Intersecting Triangles (Ṣaṭkoṇa Vāyu-Maṇḍala — upward Śiva triangle united with downward Śakti triangle).',
    yantraGeometryHi: 'धूम्र वर्ण का षट्कोण (वायु-मण्डल — ऊर्ध्वमुख शिव-त्रिकोण एवं अधोमुख शक्ति-त्रिकोण का संयोग)।',
    yantraShapeType: 'hexagram',
    presidingDeityEn: 'Īśāna Rudra (Youthful, camphor-white, three-eyed, two-armed granting boons and fearlessness)',
    presidingDeityHi: 'ईशान रुद्र (कर्पूर-गौर, त्रिनेत्र, वरद एवं अभय मुद्रा धारी)',
    shaktiGoddessEn: 'Kākinī Śakti (golden-yellow, four-armed holding noose, skull, varada and abhaya; presiding over Medas/fat dhātu)',
    shaktiGoddessHi: 'काकिनी शक्ति (पीत-स्वर्णिम आभा, चतुर्भुजा पाश-कपाल-वर-अभय धारिणी, मेद-धातु की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Bāṇa Liṅga (shining like gold, with a crescent moon and half-matrā on its head) inside a luminous triangle.',
    lingaAndTriangleHi: 'त्रिकोण के मध्य स्थित स्वर्ण-सदृश "बाण लिंग" (जिसके शीर्ष पर अर्धचन्द्र व बिन्दु शोभायमान हैं) तथा लक्ष्मी-सदृश त्रिकोण।',
    granthiEn: 'Viṣṇu Granthi (Knot of Viṣṇu — governs emotional attachment, preservation, and relational identification)',
    granthiHi: 'विष्णु ग्रन्थि (भावात्मक ममत्व एवं रक्षण-वृत्ति की मध्य ग्रन्थि)',
    tanmatraAndIndriyaEn: 'Sparśa (Touch) · Tvak (Skin) & Pāṇi (Hands/Grasping)',
    pranaVayuEn: 'Prāṇa Vāyu (inward-moving vital breath seated in the heart)',
    lokaAssociationEn: 'Maharloka (Harmonic / Balance Plane)',
    traditionalRoleEn:
      'Bridges the lower three elemental centres with the higher three subtle centres. It is the seat of Prāṇa Vāyu, the Bāṇa Liṅga, the unstruck sound (Anāhata Nāda), and the sub-lotus Ānandakanda where the devotee meditates on their Iṣṭa-devatā upon a jewelled altar beneath the Kalpavṛkṣa.',
    traditionalRoleHi:
      'नीचे के तीन भौतिक चक्रों और ऊपर के तीन आध्यात्मिक चक्रों के मध्य सेतु का कार्य करता है। यह प्राण-वायु, बाण-लिंग, अनाहत नाद तथा इष्टदेव के ध्यान (आनन्दकन्द कल्पवृक्ष) का सर्वोच्च केंद्र है।',
    kundaliniSignificanceEn:
      'At Anāhata, Kuṇḍalinī unties the Viṣṇu Granthi, awakening the spontaneous perception of the unstruck inner sound (Nāda-anusandhāna) that guides the yogī toward Ājñā and Sahasrāra.',
    kundaliniSignificanceHi:
      'अनाहत चक्र में कुण्डलिनी विष्णु-ग्रन्थि का भेदन करती है, जिससे साधक को स्वतःस्फूर्त "अनाहत नाद" सुनाई देने लगता है जो नाद-अनुसंधान द्वारा समाधि की ओर ले जाता है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (vv. 26–27) states that one who meditates on the Heart Lotus becomes dearer than the dearest to Lakṣmī and wisdom, senses controlled, capable of entering another’s body (para-kāya-praveśa), and devoted to righteous deeds.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक २६–२७) के अनुसार हृदय-पद्म के ध्यान से साधक जितेन्द्रिय, ज्ञानवान्, परकाय-प्रवेश में समर्थ तथा प्राणिमात्र के प्रति करुणावान् होता है।',
    modernPsychologicalInterpretationEn:
      'In modern psychology and contemplative studies, Anāhata is universally associated with unconditional love, empathy, forgiveness, grief-healing, and heart-centered connection.',
    modernPsychologicalInterpretationHi:
      'आधुनिक मनोविज्ञान में अनाहत चक्र को निस्वार्थ प्रेम, करुणा, सहानुभूति, क्षमाशीलता और भावात्मक सामंजस्य से जोड़ा जाता है।',
    modernThemesListEn: ['Compassion & empathy', 'Unconditional love & forgiveness', 'Emotional equilibrium', 'Heart-breath coherence'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 22–27; Śiva Saṃhitā 5.82–89; Haṭha Yoga Pradīpikā 4.65–102 (Nādānusandhāna at the Heart).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक २२–२७); शिव संहिता (५.८२–८९); हठयोगप्रदीपिका अध्याय ४ (नादानुसंधान)।',
    importantDistinctionsEn: [
      'Traditional texts describe Anāhata’s 12 petals as vermilion red (bandhūka flower) and its inner Air hexagram as smoky grey (dhūmra)—whereas modern rainbow systems colour it green.',
      'The classical name Anāhata refers specifically to the "unstruck sound" (Nāda) of Shabda-Brahman, not merely romantic or interpersonal emotion.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 22–27',
      'Śiva Saṃhitā, Chapter 5, Verses 82–89',
      'Haṭha Yoga Pradīpikā, Chapter 4, Verses 65–102'
    ]
  },
  {
    id: 'vishuddha',
    articleSlug: 'chakra-05-vishuddha-space-centre',
    order: 5,
    studioPanelNumber: '06',
    nameEn: 'Viśuddha Chakra',
    nameSanskrit: 'विशुद्ध चक्र',
    transliteration: 'Viśuddha Cakra (Kaṇṭha Padma)',
    commonEnglishDesignation: 'Pure / All-Purifying Lotus (Throat Chakra)',
    commonHindiDesignation: 'विशुद्ध पद्म / कण्ठ चक्र',
    etymologyEn:
      'From Sanskrit vi-śuddha (वि + शुद्ध, "completely pure, spotless, thoroughly purified"). Called Viśuddha because through the ether element and the lunar nectar (amṛta) at the throat, the Jīva attains crystal-clear purity free from corporeal impurity.',
    etymologyHi:
      'संस्कृत "वि" (विशेष/पूर्ण) + "शुद्ध" (निर्मल/पवित्र) से निर्मित। आकाश-तत्त्व और चन्द्र-अमृत के संस्पर्श से जीव को पूर्णतः निर्मल करने के कारण इसे "विशुद्ध चक्र" कहा जाता है।',
    subtleLocationEn:
      'Within the Suṣumṇā column at the base of the throat (kaṇṭha-mūla / pharyngeal region). Above it near the palate lies the secret Lalanā / Tālu Chakra.',
    subtleLocationHi:
      'सुषुम्णा के भीतर कण्ठ-मूल में स्थित। इसके ऊपर तालु-मूल में गुप्त ललना (कला) चक्र स्थित है जहाँ से सोमामृत झरता है।',
    vertebralReferenceEn: 'Cervical / Pharyngeal axis at the throat',
    petalCount: 16,
    petalCountDisplay: '16 Petals (षोडशदल कमल)',
    petalColorTraditionalEn: 'Smoky purple / dusty violet (धूम्रावभास — smoky hue) petals; 16 vowels shining in crimson inside.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार धूम्र-बैंगनी (धूम्रावभास) वर्ण के १६ दल, जिन पर १६ लाल स्वर अंकित हैं।',
    modernRainbowColorEn: 'Sky Blue / Turquoise (in modern 7-chakra rainbow charts)',
    accentHex: '#38BDF8',
    secondaryHex: '#E2E8F0',
    petalLettersDevanagari: ['अं', 'आं', 'इं', 'ईं', 'उं', 'ऊं', 'ऋं', 'ॠं', 'ऌं', 'ॡं', 'एं', 'ऐं', 'ओं', 'औं', 'अं (अनुस्वार)', 'अः (विसर्ग)'],
    petalLettersIAST: ['aṃ', 'āṃ', 'iṃ', 'īṃ', 'uṃ', 'ūṃ', 'ṛṃ', 'ṝṃ', 'ḷṃ', 'ḹṃ', 'eṃ', 'aiṃ', 'oṃ', 'auṃ', 'aṃ', 'aḥ'],
    elementSanskrit: 'आकाश / व्योम (Ākāśa / Vyoma)',
    elementEn: 'Ākāśa — Space / Ether Element',
    elementHi: 'आकाश / व्योम तत्त्व (नभो-मण्डल)',
    elementColorTraditionalEn: 'Pure full-moon white (Pūrṇacandra-śubhra) circular mandala representing Ether.',
    bijaMantraDevanagari: 'हं',
    bijaMantraIAST: 'Haṃ',
    bijaCarrierDeityEn: 'Ambara / Ākāśa-deva (white, four-armed holding noose and goad)',
    bijaVehicleAnimalEn: 'Śukla Gaja — The Snow-White Elephant (carrying both the Haṃ bīja and Sadāśiva)',
    bijaVehicleAnimalHi: 'श्वेत गज (हिम के समान उज्ज्वल हाथी — आकाश-बीज "हं" एवं सदाशिव का वाहन)',
    yantraGeometryEn: 'Full-Moon White Circle (Vṛtta Nabho-Maṇḍala — circular Space mandala) inside the pericarp.',
    yantraGeometryHi: 'षोडशदल कमल की कर्णिका के भीतर पूर्णचन्द्र के समान श्वेत वृत्ताकार आकाश-मण्डल।',
    yantraShapeType: 'circle',
    presidingDeityEn: 'Sadāśiva in Ardhanārīśvara form (Half snow-white Śiva, half golden-yellow Gaurī; five-faced, ten-armed, clad in tiger skin)',
    presidingDeityHi: 'अर्धनारीश्वर सदाशिव (अर्ध भाग हिम-श्वेत शिव व अर्ध भाग स्वर्ण-गौरी; पञ्चमुख एवं दशभुज)',
    shaktiGoddessEn: 'Śākinī Śakti (pure white light, four-armed holding bow, arrow, noose, and goad; presiding over Asthi/bone dhātu)',
    shaktiGoddessHi: 'शाकिनी शक्ति (ज्योतिः-स्वरूप श्वेत वर्णा, चतुर्भुजा धनुष-बाण-पाश-अंकुश धारिणी, अस्थि-धातु की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Circular Etheric gateway (Nabho-Maṇḍala) where the lunar nectar of immortality (amṛta) is tasted.',
    lingaAndTriangleHi: 'चन्द्र-मण्डल एवं आकाश-तत्त्व का केंद्र जहाँ खेचरी मुद्रा द्वारा अमृत-पान किया जाता है।',
    granthiEn: 'Gateway to the upper cranial axis',
    granthiHi: 'ऊर्ध्व कपाल-अक्ष का प्रवेश-द्वार',
    tanmatraAndIndriyaEn: 'Śabda (Sound) · Śrotra (Ears) & Vāk (Speech/Vocal cords)',
    pranaVayuEn: 'Udāna Vāyu (upward-moving breath governing speech, expression, and spiritual ascent)',
    lokaAssociationEn: 'Janaloka (Creative Wisdom Plane)',
    traditionalRoleEn:
      'Houses all 16 Sanskrit vowels (Svara-mātṛkā) on its 16 petals and the pure Space element (Ākāśa) at its centre. It is the seat of Udāna Vāyu, sacred speech (Vāk), and the threshold where the yogī preserves the cooling lunar soma from falling into the solar fire of the navel.',
    traditionalRoleHi:
      'अपने १६ दलों पर संस्कृत के १६ स्वरों (अ से अः) को धारण करता है। यह उदान वायु, परा-पश्यन्ती-मध्यमा-वैखरी वाणी और अमृतमय आकाश-तत्त्व का केंद्र है।',
    kundaliniSignificanceEn:
      'As Kuṇḍalinī enters Viśuddha, all five gross elements (Earth, Water, Fire, Air, Ether) are dissolved into pure space (Bhūta-śuddhi), and the practitioner’s speech becomes Mantra-siddha.',
    kundaliniSignificanceHi:
      'कुण्डलिनी के विशुद्ध चक्र में पहुँचने पर पृथ्वी से आकाश पर्यन्त पंचमहाभूतों की पूर्ण "भूत-शुद्धि" संपन्न होती है और साधक को वाक्-सिद्धि प्राप्त होती है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (v. 31) proclaims that one who fixes their mind on Viśuddha becomes a great sage (jñānī), eloquent in the four Vedas, peaceful in mind, long-lived, and a knower of past, present, and future (trikāla-darśī).',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक ३१) के अनुसार विशुद्ध चक्र के ध्यान से साधक चारों वेदों के रहस्य का ज्ञाता, त्रिकालदर्शी, शांतचित्त, दीर्घायु और महाज्ञानी बनता है।',
    modernPsychologicalInterpretationEn:
      'In modern psychological models, Viśuddha represents authentic self-expression, truthful communication, active listening, and creative voice.',
    modernPsychologicalInterpretationHi:
      'आधुनिक मनोवैज्ञानिक प्रणालियों में विशुद्ध चक्र को सत्यनिष्ठ संवाद, आत्म-अभिव्यक्ति, श्रवण-कौशल और रचनात्मक वाणी से जोड़ा जाता है।',
    modernThemesListEn: ['Authentic voice & truthful speech', 'Deep listening & resonance', 'Creative vocal & literary expression', 'Inner spaciousness'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 28–31; Śiva Saṃhitā 5.90–95; Haṭha Yoga Pradīpikā 3.32–53 (Khecarī Mudrā and Jālandhara Bandha).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक २८–३१); शिव संहिता (५.९०–९५); हठयोगप्रदीपिका (जालन्धर बन्ध एवं खेचरी मुद्रा)।',
    importantDistinctionsEn: [
      'Traditional texts describe Viśuddha’s 16 petals as smoky purple (धूम्रावभास) and its inner Ether circle as full-moon white—whereas modern charts use bright sky-blue.',
      'The 16 petals specifically hold the 16 Sanskrit vowels (Svaras), making Viśuddha the primary matrix of vocalized sound in Mantra-śāstra.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 28–31',
      'Śiva Saṃhitā, Chapter 5, Verses 90–95'
    ]
  },
  {
    id: 'ajna',
    articleSlug: 'chakra-06-ajna-command-centre',
    order: 6,
    studioPanelNumber: '07',
    nameEn: 'Ājñā Chakra',
    nameSanskrit: 'आज्ञा चक्र',
    transliteration: 'Ājñā Cakra (Bhrūmadhya Padma)',
    commonEnglishDesignation: 'Command & Inner Perception Centre (Third-Eye Chakra)',
    commonHindiDesignation: 'आज्ञा पद्म / भ्रूमध्य केंद्र (त्रिवेणी संगम)',
    etymologyEn:
      'From Sanskrit ājñā (आज्ञा, "command, authority, supreme order, direct perception"). Called Ājñā because here the disciple receives the direct inner command (ājñā) of the Guru (Paramaśiva) and exercises sovereign command over the mind and senses.',
    etymologyHi:
      'संस्कृत "आज्ञा" (आदेश, शासन, प्रत्यक्ष प्रज्ञा) से निर्मित। यहाँ साधक को परमगुरु (परमशिव) की आंतरिक आज्ञा प्राप्त होती है तथा मन और इन्द्रियों पर पूर्ण शासन स्थापित होता है।',
    subtleLocationEn:
      'Between the eyebrows (bhrū-madhya). It is the sacred Mukta-Triveṇī where the three principal nāḍīs—Iḍā (Ganges), Piṅgalā (Yamunā), and Suṣumṇā (Sarasvatī)—converge before ascending toward Sahasrāra.',
    subtleLocationHi:
      'दोनों भौंहों के मध्य (भ्रूमध्य) में स्थित। यह "मुक्त-त्रिवेणी" संगम है जहाँ इड़ा (गंगा), पिंगला (यमुना) और सुषुम्णा (सरस्वती) तीनों नाड़ियाँ मिलती हैं।',
    vertebralReferenceEn: 'Cavernous / Inter-ocular axis between the eyebrows (Bhrūmadhya)',
    petalCount: 2,
    petalCountDisplay: '2 Petals (द्विदल कमल)',
    petalColorTraditionalEn: 'Pure moon-white (चन्द्र-शुभ्र / श्वेत वर्ण) petals shining like autumn moonlight.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार शरद पूर्णिमा के चन्द्रमा के समान निर्मल श्वेत २ दल।',
    modernRainbowColorEn: 'Indigo / Deep Royal Blue (in modern Western rainbow systems)',
    accentHex: '#6366F1',
    secondaryHex: '#F8FAFC',
    petalLettersDevanagari: ['हं', 'क्षं'],
    petalLettersIAST: ['haṃ', 'kṣaṃ'],
    elementSanskrit: 'मनस् / सूक्ष्म तत्त्व (Manas Tattva — Beyond the 5 Gross Elements)',
    elementEn: 'Manas (Subtle Mind / Antaḥkaraṇa — transcends the 5 Mahābhūtas)',
    elementHi: 'मनस् तत्त्व (पंचमहाभूतों से परे सूक्ष्म अन्तःकरण)',
    elementColorTraditionalEn: 'Luminous snow-white / crystalline radiance.',
    bijaMantraDevanagari: 'ॐ',
    bijaMantraIAST: 'Oṃ (Praṇava)',
    bijaCarrierDeityEn: 'Paramaśiva / Prakāśa-Vimarśa in the form of Praṇava (Oṃ)',
    bijaVehicleAnimalEn: 'Nāda and Bindu (No animal mount — transcends elemental vehicles; crowned by Ardhacandra, Bindu, and Nāda)',
    bijaVehicleAnimalHi: 'नाद एवं बिन्दु (पशु-वाहन से परे — अर्धचन्द्र, बिन्दु एवं नाद रूपी प्रणव कलाएँ)',
    yantraGeometryEn: 'Two-Petalled White Lotus enclosing a downward-pointing Yonī Triangle and the crystalline Itara Liṅga, surmounted by Oṃ, Ardhacandra, Bindu, and Nāda.',
    yantraGeometryHi: 'श्वेत द्विदल कमल के मध्य अधोमुख त्रिकोण एवं स्फटिक-सदृश "इतर लिंग", जिसके ऊपर प्रणव (ॐ), अर्धचन्द्र, बिन्दु और नाद स्थित हैं।',
    yantraShapeType: 'two-petal-linga',
    presidingDeityEn: 'Paramaśiva / Siddha-Kālī & Ardhanārīśvara in the form of Hākinī-Śiva',
    presidingDeityHi: 'परमशिव (अर्धनारीश्वर एवं प्रणव-स्वरूप गुरु-तत्त्व)',
    shaktiGoddessEn: 'Hākinī Śakti (white, six-faced, six-armed holding book/vidyā, skull, drum, rosary, varada, abhaya; presiding over Majjā/marrow dhātu and Manas)',
    shaktiGoddessHi: 'हाकिनी शक्ति (श्वेतवर्णा, षडानना, षड्भुजा—पुस्तक, कपाल, डमरू, अक्षमाला, वर व अभय मुद्रा धारिणी; मज्जा-धातु एवं मन की अधिष्ठात्री)',
    lingaAndTriangleEn: 'Itara Liṅga (shining like a streak of lightning inside the triangle; "itara" means "other than the gross", accessed through mental mastery).',
    lingaAndTriangleHi: 'त्रिकोण के भीतर विद्युत्-रेखा के समान चमकता हुआ "इतर लिंग" एवं प्रणव-ज्योति।',
    granthiEn: 'Rudra Granthi (Knot of Rudra — final knot of subtle individuality, psychic siddhis, and dualistic perception)',
    granthiHi: 'रुद्र ग्रन्थि (सूक्ष्म अहंकार, सिद्धियों के मोह और द्वैत-बोध की तृतीय एवं अंतिम ग्रन्थि)',
    tanmatraAndIndriyaEn: 'Manas, Buddhi, Ahaṅkāra & Citta (The Subtle Inner Instrument / Antaḥkaraṇa)',
    pranaVayuEn: 'Unified Prāṇa in Suṣumṇā (convergence of Iḍā and Piṅgalā)',
    lokaAssociationEn: 'Tapoloka (Ascetic / Direct Intuitive Illumination Plane)',
    traditionalRoleEn:
      'The sixth and highest of the "Six Chakras" (Ṣaṭ-Cakra). Here the two petals bearing Haṃ (Śiva) and Kṣaṃ (Śakti) complete the 50 Sanskrit letters (4 + 6 + 10 + 12 + 16 + 2 = 50). It is the seat of the Praṇava (Oṃ), the subtle mind (Manas), and the Rudra Granthi.',
    traditionalRoleHi:
      '"षट्चक्र" की श्रृंखला का छठा और सर्वोच्च चक्र। इसके दो दलों पर अंकित "हं" और "क्षं" के साथ संस्कृत वर्णमाला के ५० मातृका अक्षर (४ + ६ + १० + १२ + १६ + २ = ५०) पूर्ण होते हैं। यह प्रणव (ॐ), सूक्ष्म मन और रुद्र-ग्रन्थि का केंद्र है।',
    kundaliniSignificanceEn:
      'When Kuṇḍalinī pierces the Rudra Granthi at Ājñā, duality between knower and known dissolves into Savikalpa Samādhi, and the path opens through Kāraṇa-rūpā, Nāda, and Bindu toward the thousand-petalled Sahasrāra.',
    kundaliniSignificanceHi:
      'आज्ञा चक्र में रुद्र-ग्रन्थि का भेदन होने पर इड़ा और पिंगला का द्वैत समाप्त हो जाता है और कुण्डलिनी सुषुम्णा के सर्वोच्च पथ से सहस्रार की ओर अग्रसर होती है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (vv. 34–38) states that meditating on Ājñā makes one an Advaita-vādī (realizer of non-duality), grants the fruits of all five lower lotuses simultaneously, and enables the yogī at the time of death to merge their prāṇa into the Supreme Puruṣa.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक ३४–३८) के अनुसार आज्ञा चक्र के ध्यान से साधक अद्वैत-तत्त्व का साक्षात्कार करता है, नीचे के पाँचों पद्मों के फल स्वतः प्राप्त कर लेता है और अंतकाल में प्रणव में लय होकर परम पुरुष को प्राप्त करता है।',
    modernPsychologicalInterpretationEn:
      'In modern interpretations, Ājñā is framed around intuition, insight, mental clarity, visualization, concentration, and discernment (viveka).',
    modernPsychologicalInterpretationHi:
      'आधुनिक व्याख्याओं में आज्ञा चक्र को अंतर्ज्ञान (इंट्यूशन), एकाग्रता, विवेक-बुद्धि, दूरदृष्टि और मानसिक स्पष्टता का केंद्र माना जाता है।',
    modernThemesListEn: ['Direct insight & intuition', 'One-pointed concentration (Dhāraṇā)', 'Discernment (Viveka)', 'Integration of dualities'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 32–39; Bhagavad Gītā 8.10 (fixing prāṇa between the eyebrows); Haṭha Yoga Pradīpikā 4.36 (Śāmbhavī Mudrā).',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक ३२–३९); श्रीमद्भगवद्गीता (८.१० — भ्रुवोर्मध्ये प्राणमावेश्य); हठयोगप्रदीपिका (शाम्भवी मुद्रा)।',
    importantDistinctionsEn: [
      'In Ṣaṭ-Cakra-Nirūpaṇa, Ājñā is snow-white (शुभ्र), not dark indigo.',
      'Both Haṃ (हं) and Kṣaṃ (क्षं) are the two petal letters of Ājñā, while Oṃ (ॐ) is the central bīja mantra in its pericarp.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 32–39',
      'Bhagavad Gītā, Chapter 8, Verse 10',
      'Śiva Saṃhitā, Chapter 5, Verses 96–113'
    ]
  },
  {
    id: 'sahasrara',
    articleSlug: 'chakra-07-sahasrara-thousand-petalled-lotus',
    order: 7,
    studioPanelNumber: '08',
    nameEn: 'Sahasrāra',
    nameSanskrit: 'सहस्रार (सहस्रदल पद्म)',
    transliteration: 'Sahasrāra Padma',
    commonEnglishDesignation: 'Thousand-Petalled Crown Lotus (Crown Centre)',
    commonHindiDesignation: 'सहस्रार पद्म / ब्रह्मरन्ध्र महापद्म',
    etymologyEn:
      'From Sanskrit sahasra (सहस्र, "thousand, infinite") + ara (अर, "spoke of a wheel, petal"). Literally "the thousand-spoked or thousand-petalled lotus" situated above all six chakras at the crown (Brahmarandhra).',
    etymologyHi:
      'संस्कृत "सहस्र" (एक हजार / अनंत) + "अर" (चक्र की तीलियाँ / दल) से बना है। यह षट्चक्रों से ऊपर ब्रह्मरन्ध्र में स्थित सहस्रदल महापद्म है।',
    subtleLocationEn:
      'At or just above the crown of the head (Brahmarandhra / Kapāla-kuhara), hanging downward like a canopy over the Suṣumṇā column above Mt. Kailāsa / Mahā-śaṅkhinī.',
    subtleLocationHi:
      'मस्तक के शिखर (ब्रह्मरन्ध्र / कपाल-कुहर) में अधोमुख छत्र के समान अवस्थित, षट्चक्रों की सीमा से परे।',
    vertebralReferenceEn: 'Cranial Crown / Fontanelle (Brahmarandhra) above the central axis',
    petalCount: 1000,
    petalCountDisplay: '1,000 Petals (सहस्रदल — 50 Letters × 20)',
    petalColorTraditionalEn: 'Luminous snow-white (शुभ्र / तरुण-रवि-कोटि-तुल्य) tinged with rosy dawn-light; all 50 Sanskrit letters repeated 20 times in radiant light.',
    petalColorTraditionalHi: 'षट्चक्रनिरूपण के अनुसार पूर्णिमा के चन्द्रमा के समान परम शुभ्र (अरुण आभा से युक्त), जिस पर अ से क्ष तक ५० अक्षर २० आवृत्तियों (५० × २० = १०००) में विराजमान हैं।',
    modernRainbowColorEn: 'Violet / Crown White-Gold (in modern 7-chakra charts)',
    accentHex: '#C084FC',
    secondaryHex: '#FDE047',
    petalLettersDevanagari: ['अ से क्ष पर्यन्त ५० मातृका अक्षर × २० आवृत्तियाँ = १,००० दल'],
    petalLettersIAST: ['All 50 Sanskrit phonemes (A to Kṣa) repeated 20 times in 20 concentric rings = 1,000 petals'],
    elementSanskrit: 'तत्त्वातीत (Tattvātīta — Beyond all 36 Tattvas & Elements)',
    elementEn: 'Tattvātīta — Transcendent Consciousness (Beyond all cosmic elements and mind)',
    elementHi: 'तत्त्वातीत परब्रह्म / परम संवित् (समस्त ३६ तत्त्वों एवं प्रकृति से परे)',
    elementColorTraditionalEn: 'Effulgence of ten million suns and cool moons combined (Koṭi-sūrya-candrābha).',
    bijaMantraDevanagari: 'विसर्ग / निस्तब्ध प्रणव (अमा-कला एवं निर्वाण-कला)',
    bijaMantraIAST: 'Para-Bindu / Silence beyond Oṃ (Parā-Vāk)',
    bijaCarrierDeityEn: 'Paramaśiva (Antarātman / Supreme Non-Dual Consciousness)',
    bijaVehicleAnimalEn: 'Haṃsa (The Supreme Swan of Parama-Haṃsa Consciousness residing at the Guru-pādukā)',
    bijaVehicleAnimalHi: 'परमहंस (हंस-पीठ एवं श्रीगुरु-पादुका)',
    yantraGeometryEn: 'Thousand-Petalled Downward-Facing Lotus enclosing the Full Moon Mandala, the A-Ka-Tha Triangle, the 16th digit of the Moon (Amā-kalā), the 17th digit (Nirvāṇa-kalā), Nirvāṇa-Śakti, and the Supreme Void (Para-Bindu / Śūnya-deśa).',
    yantraGeometryHi: 'अधोमुख सहस्रदल कमल के भीतर पूर्ण चन्द्रमण्डल, अ-क-थ त्रिकोण, षोडशी "अमा-कला", सप्तदशी "निर्वाण-कला", निर्वाण-शक्ति एवं "परबिन्दु" (परमशिव)।',
    yantraShapeType: 'thousand-lotus',
    presidingDeityEn: 'Paramaśiva (Para-Brahman / Supreme Unconditioned Consciousness)',
    presidingDeityHi: 'परमशिव (सच्चिदानन्द परब्रह्म / गुरु-पादुका तत्त्व)',
    shaktiGoddessEn: 'Mahā-Kuṇḍalinī / Nirvāṇa-Śakti (in eternal non-dual Samarasa union with Paramaśiva)',
    shaktiGoddessHi: 'महाकुण्डलिनी / निर्वाण-शक्ति (परमशिव के साथ अद्वैत समरस मिलन में स्थित)',
    lingaAndTriangleEn: 'Para-Bindu & Guru-Pādukā inside the A-Ka-Tha Trikoṇa (explored in the companion text Pādukā-Pañcaka).',
    lingaAndTriangleHi: 'अ-क-थ त्रिकोण के भीतर स्थित "परबिन्दु" एवं "श्रीगुरु-पादुका" (पादुकापञ्चक ग्रंथ का मुख्य विषय)।',
    granthiEn: 'Beyond all three Granthis (Complete untying of Brahma, Viṣṇu, and Rudra knots)',
    granthiHi: 'तीनों ग्रन्थियों (ब्रह्म, विष्णु, रुद्र) से पूर्णतः मुक्त तुरीयातीत अवस्था',
    tanmatraAndIndriyaEn: 'Pure Non-Dual Witness Consciousness (Cit / Samvit — beyond senses and mind)',
    pranaVayuEn: 'Cessation of dualistic breath into Kevala-Kumbhaka / Unmanī-avasthā',
    lokaAssociationEn: 'Satyaloka (Plane of Absolute Truth & Liberation)',
    traditionalRoleEn:
      'In Pūrṇānanda’s Ṣaṭ-Cakra-Nirūpaṇa (vv. 40–49), Sahasrāra is strictly distinguished from the "Six Chakras" (Mūlādhāra to Ājñā): the six chakras belong to the manifest subtle hierarchy, whereas Sahasrāra is the supreme abode of Paramaśiva where Kuṇḍalinī culminates her ascent and merges in non-dual bliss (Samarasya), raining down a stream of immortal nectar (Sudhā-dhārā) that rejuvenates the entire subtle body.',
    traditionalRoleHi:
      'पूर्णानन्द के षट्चक्रनिरूपण (श्लोक ४०–४९) में सहस्रार को "षट्चक्र" (मूलाधार से आज्ञा तक के ६ चक्रों) से उच्चतर और पृथक् रखा गया है। यह परमशिव का सर्वोच्च धाम है जहाँ कुण्डलिनी का परमशिव से अद्वैत मिलन (सामरस्य) होता है और वहाँ से झरने वाली अमृत-धारा संपूर्ण सूक्ष्म शरीर को तृप्त करती है।',
    kundaliniSignificanceEn:
      'As described in Ṣaṭ-Cakra-Nirūpaṇa (vv. 50–53), Kuṇḍalinī ascends from Mūlādhāra through all six chakras, unites with Paramaśiva in Sahasrāra producing the supreme nectar of bliss (Lākṣā-rasa hue), and then returns along the Suṣumṇā path to Mūlādhāra after bathing every lotus in divine consciousness.',
    kundaliniSignificanceHi:
      'षट्चक्रनिरूपण (श्लोक ५०–५३) के अनुसार कुण्डलिनी षट्चक्रों का भेदन कर सहस्रार में परमशिव से मिलती है, और उस शिव-शक्ति मिलन से उत्पन्न लाक्षा-रस सदृश परमामृत से समस्त चक्रों को सींचती हुई पुनः मूलाधार में लौटती है।',
    traditionalSpiritualFruitEn:
      'Ṣaṭ-Cakra-Nirūpaṇa (vv. 44–49) declares that the yogī who realizes Sahasrāra is liberated from the cycle of rebirth (saṃsāra-bandha), attains Jīvanmukti (liberation while living), and abides in supreme non-dual awareness.',
    traditionalSpiritualFruitHi:
      'षट्चक्रनिरूपण (श्लोक ४४–४९) के अनुसार सहस्रार का साक्षात्कार करने वाला योगी जन्म-मरण के बन्धन से सदा के लिए मुक्त होकर "जीवन्मुक्ति" और परम अद्वैत आनंद को प्राप्त करता है।',
    modernPsychologicalInterpretationEn:
      'In modern transpersonal psychology, Sahasrāra is interpreted as peak unity consciousness, self-transcendence, existential meaning, and cosmic connectedness.',
    modernPsychologicalInterpretationHi:
      'आधुनिक ट्रांसपर्सनल मनोविज्ञान में सहस्रार को अद्वैत चेतना, आत्म-अतिक्रमण (ट्रांसेंडेंस) और वैश्विक एकत्व के अनुभव के रूप में देखा जाता है।',
    modernThemesListEn: ['Non-dual unity consciousness', 'Spiritual liberation (Mokṣa)', 'Transcendence of ego', 'Luminous silence'],
    traditionalMeditationReferenceEn:
      'Ṣaṭ-Cakra-Nirūpaṇa vv. 40–55; Pādukā-Pañcaka vv. 1–7 (Guru-Dhyāna inside Sahasrāra); Śiva Saṃhitā 5.114–131.',
    traditionalMeditationReferenceHi:
      'षट्चक्रनिरूपण (श्लोक ४०–५५); पादुकापञ्चक (श्लोक १–७); शिव संहिता (५.११४–१३१)।',
    importantDistinctionsEn: [
      'In Ṣaṭ-Cakra-Nirūpaṇa ("Description of the Six Chakras"), there are six chakras (Mūlādhāra to Ājñā) plus Sahasrāra as the transcendent thousand-petalled lotus above them. The popular phrase "Seven Chakras" combines the six chakras and Sahasrāra into one numerical list.',
      'Sahasrāra has no single elemental bīja or animal mount because it transcends all cosmic tattvas.'
    ],
    primaryTextCitations: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 40–55',
      'Pādukā-Pañcaka, Verses 1–7 (with Kālīcaraṇa’s Ṭīkā)',
      'Śiva Saṃhitā, Chapter 5, Verses 114–131'
    ]
  }
];

function buildIndividualChakraArticle(profile: IndividualChakraProfile): ChakraArchiveArticle {
  const numStr = String(profile.order).padStart(2, '0');
  return {
    id: `article-${profile.id}`,
    slug: profile.articleSlug,
    articleNumber: `CHAKRA ${numStr}`,
    partCategory: 'part2-seven-chakras',
    titleEn: `${numStr}. ${profile.nameEn} — ${profile.commonEnglishDesignation}`,
    titleSanskrit: profile.nameSanskrit,
    transliteration: profile.transliteration,
    subtitleEn: `${profile.petalCountDisplay} · ${profile.elementEn} · Bīja: ${profile.bijaMantraDevanagari} (${profile.bijaMantraIAST})`,
    subtitleHi: `${profile.commonHindiDesignation} · ${profile.elementHi} · बीज: ${profile.bijaMantraDevanagari}`,
    accentColor: profile.accentHex,
    chakraProfileId: profile.id,
    introductoryOverviewEn: `${profile.nameEn} (${profile.nameSanskrit}) is the ${profile.order === 7 ? 'supreme crown lotus crowning the six subtle centres' : `#${profile.order} subtle centre along the central Suṣumṇā axis`}. Situated ${profile.subtleLocationEn.toLowerCase()}, it is visualized as a lotus of ${profile.petalCountDisplay} inscribed with the Sanskrit mātṛkā syllables (${profile.petalLettersDevanagari.join(', ')}) and presiding over ${profile.elementEn}.`,
    introductoryOverviewHi: `${profile.nameSanskrit} (${profile.commonHindiDesignation}) सुषुम्णा अक्ष पर स्थित ${profile.order === 7 ? 'षट्चक्रों से परे सर्वोच्च सहस्रदल महापद्म' : `क्रम संख्या ${profile.order} का प्रमुख आध्यात्मिक केंद्र`} है। ${profile.subtleLocationHi} इसकी कर्णिका में ${profile.elementHi} तथा बीज मंत्र "${profile.bijaMantraDevanagari}" का निवास है।`,
    historicalBackgroundEn: `In the classical Śākta-Tantric codification of Pūrṇānanda Yati’s Ṣaṭ-Cakra-Nirūpaṇa (1577 CE, Chapter 6 of Śrītattvacintāmaṇi) and the fifth chapter of the Śiva Saṃhitā, ${profile.nameEn} is mapped as a visionary mandala used in antaryāga (inner ritual worship), bhūta-śuddhi (purification of the elements), and Kuṇḍalinī-yoga.`,
    historicalBackgroundHi: `पूर्णानन्द यति विरचित "श्रीतत्त्वचिन्तामणि" के षष्ठ पटल "षट्चक्रनिरूपण" (१५७७ ई.) तथा "शिव संहिता" के पंचम पटल में ${profile.nameSanskrit} का विस्तृत ध्यान-मण्डल वर्णित है, जिसका उपयोग अन्तर्याग, भूत-शुद्धि और कुण्डलिनी-उत्थान में किया जाता है।`,
    traditionalExplanationEn: `${profile.traditionalRoleEn} ${profile.kundaliniSignificanceEn}`,
    traditionalExplanationHi: `${profile.traditionalRoleHi} ${profile.kundaliniSignificanceHi}`,
    sanskritTerminology: [
      {
        termDevanagari: profile.nameSanskrit,
        termIAST: profile.transliteration,
        definitionEn: profile.etymologyEn,
        definitionHi: profile.etymologyHi
      },
      {
        termDevanagari: profile.bijaMantraDevanagari,
        termIAST: profile.bijaMantraIAST,
        definitionEn: `Primary elemental/tattvic seed syllable (Bīja) enthroned upon ${profile.bijaVehicleAnimalEn}.`,
        definitionHi: `प्रमुख तत्त्व-बीज मंत्र जिसका वाहन ${profile.bijaVehicleAnimalHi} है।`
      },
      {
        termDevanagari: profile.shaktiGoddessEn.split(' ')[0],
        termIAST: profile.shaktiGoddessEn,
        definitionEn: `Presiding Yoginī-Śakti of ${profile.nameEn} governing the subtle bodily dhātu and inner door.`,
        definitionHi: `${profile.nameSanskrit} की अधिष्ठात्री योगिनी शक्ति: ${profile.shaktiGoddessHi}।`
      }
    ],
    iconographyAndSymbolismEn: `Traditional Dhyāna Iconography: ${profile.petalColorTraditionalEn} Within the pericarp shines the ${profile.yantraGeometryEn} Presiding Deity: ${profile.presidingDeityEn}. Presiding Śakti: ${profile.shaktiGoddessEn}. Inner Liṅga/Seat: ${profile.lingaAndTriangleEn}`,
    iconographyAndSymbolismHi: `पारम्परिक ध्यान-स्वरूप: ${profile.petalColorTraditionalHi} कर्णिका के मध्य: ${profile.yantraGeometryHi} अधिष्ठाता देव: ${profile.presidingDeityHi}। अधिष्ठात्री शक्ति: ${profile.shaktiGoddessHi}। आंतरिक शिव-प्रतीक: ${profile.lingaAndTriangleHi}`,
    diagramType: 'chakra-single',
    detailedSections: [
      {
        headingEn: '1. Etymology, Subtle Location & Lotus Structure',
        headingHi: '१. व्युत्पत्ति, सूक्ष्म स्थान एवं कमल-संरचना',
        bodyEn: `${profile.etymologyEn}\n\nSubtle Location: ${profile.subtleLocationEn} (${profile.vertebralReferenceEn}).\n\nPetals & Mātṛkā Letters: ${profile.petalCountDisplay} bearing the Sanskrit syllables ${profile.petalLettersDevanagari.join(' · ')} (${profile.petalLettersIAST.join(', ')}). Traditional petal hue: ${profile.petalColorTraditionalEn}`,
        bodyHi: `${profile.etymologyHi}\n\nसूक्ष्म स्थान: ${profile.subtleLocationHi}\n\nदल एवं मातृका अक्षर: ${profile.petalCountDisplay} जिन पर "${profile.petalLettersDevanagari.join(' · ')}" अक्षर अंकित हैं। पारम्परिक वर्ण: ${profile.petalColorTraditionalHi}`
      },
      {
        headingEn: '2. Element (Tattva), Bīja Mantra, Yantra & Vehicle (Vāhana)',
        headingHi: '२. तत्त्व, बीज मंत्र, यंत्र-ज्यामिति एवं वाहन',
        bodyEn: `Element: ${profile.elementEn} (${profile.elementSanskrit}).\n\nGeometric Mandala: ${profile.yantraGeometryEn}\n\nSeed Syllable (Bīja): ${profile.bijaMantraDevanagari} (${profile.bijaMantraIAST}), carried by ${profile.bijaCarrierDeityEn} mounted upon ${profile.bijaVehicleAnimalEn}.\n\nSensory & Prāṇic Correspondences: ${profile.tanmatraAndIndriyaEn}; governed by ${profile.pranaVayuEn}; cosmic plane: ${profile.lokaAssociationEn}.`,
        bodyHi: `तत्त्व: ${profile.elementHi}\n\nयंत्र-मण्डल: ${profile.yantraGeometryHi}\n\nबीज मंत्र: "${profile.bijaMantraDevanagari}" (${profile.bijaMantraIAST}) — वाहन: ${profile.bijaVehicleAnimalHi}।\n\nतन्मात्रा एवं प्राण-वायु: ${profile.tanmatraAndIndriyaEn}; प्राण: ${profile.pranaVayuEn}; लोक: ${profile.lokaAssociationEn}।`
      },
      {
        headingEn: '3. Presiding Deity, Yoginī Śakti, Liṅga & Granthi',
        headingHi: '३. अधिष्ठाता देव, योगिनी शक्ति, बाण/स्वयम्भू लिंग एवं ग्रन्थि',
        bodyEn: `Presiding Deva: ${profile.presidingDeityEn}.\n\nPresiding Yoginī-Śakti: ${profile.shaktiGoddessEn}.\n\nInner Triangle & Liṅga: ${profile.lingaAndTriangleEn}\n\nGranthi (Psychic Knot): ${profile.granthiEn}.`,
        bodyHi: `अधिष्ठाता देव: ${profile.presidingDeityHi}।\n\nअधिष्ठात्री शक्ति: ${profile.shaktiGoddessHi}।\n\nत्रिकोण एवं लिंग: ${profile.lingaAndTriangleHi}\n\nग्रन्थि-सम्बन्ध: ${profile.granthiHi}।`
      },
      {
        headingEn: '4. Role in Kuṇḍalinī Ascent & Traditional Fruits of Meditation',
        headingHi: '४. कुण्डलिनी-आरोहण में भूमिका एवं ध्यान-फल',
        bodyEn: `${profile.kundaliniSignificanceEn}\n\nTraditional Phala-śruti (Fruit of Meditation): ${profile.traditionalSpiritualFruitEn}\n\nPrimary Scriptural References: ${profile.traditionalMeditationReferenceEn}`,
        bodyHi: `${profile.kundaliniSignificanceHi}\n\nपारम्परिक ध्यान-फल (फलश्रुति): ${profile.traditionalSpiritualFruitHi}\n\nप्रमुख शास्त्रीय संदर्भ: ${profile.traditionalMeditationReferenceHi}`
      }
    ],
    relatedConceptsEn: [
      profile.elementEn,
      `Bīja ${profile.bijaMantraDevanagari} (${profile.bijaMantraIAST})`,
      profile.shaktiGoddessEn.split(' ')[0],
      profile.granthiEn.split('(')[0].trim(),
      profile.pranaVayuEn.split('(')[0].trim()
    ],
    relatedConceptsHi: [
      profile.elementHi,
      `बीज मंत्र ${profile.bijaMantraDevanagari}`,
      profile.shaktiGoddessHi.split(' ')[0],
      profile.granthiHi.split('(')[0].trim()
    ],
    traditionalVsModernEn: {
      traditionalView: `${profile.petalColorTraditionalEn} Element mandala: ${profile.elementColorTraditionalEn} Focuses on mantra-mātṛkā nyāsa, deity visualization (${profile.presidingDeityEn.split('(')[0].trim()} & ${profile.shaktiGoddessEn.split('(')[0].trim()}), bhūta-śuddhi, and Kuṇḍalinī piercing the lotus.`,
      modernView: `Assigned the uniform rainbow spectrum colour "${profile.modernRainbowColorEn}" in post-1920s Western chakra systems. ${profile.modernPsychologicalInterpretationEn}`,
      scholarlyClarification: `Classical Sanskrit texts treat ${profile.nameEn} as a complex multi-coloured prescriptive mandala (different colours for petals, element yantra, and deities) rather than a single-colour aura or physical endocrine gland.`
    },
    distinctionsAndMisconceptionsEn: profile.importantDistinctionsEn,
    distinctionsAndMisconceptionsHi: [
      `शास्त्रीय ग्रंथों में ${profile.nameSanskrit} के दलों का रंग और आंतरिक तत्त्व-मण्डल का रंग भिन्न-भिन्न निर्दिष्ट है, न कि आधुनिक चार्टों जैसा एकरंगी इन्द्रधनुषी रंग।`,
      `यह सूक्ष्म शरीर (सूक्ष्म प्राणमय/मनोमय कोष) का ध्यान-केंद्र है, कोई स्थूल शारीरिक स्नायु-जाल (nerve plexus) मात्र नहीं।`
    ],
    referencesAndReading: profile.primaryTextCitations,
    relatedArticleSlugs: [
      'chakra-vidya-subtle-energy-centres',
      'sat-cakra-nirupana-textual-study',
      'five-mahabhutas-and-chakras',
      'lotus-petals-and-sanskrit-letters'
    ]
  };
}

export const SAPTA_CHAKRA_ARCHIVE_ARTICLES: ChakraArchiveArticle[] = [
  // ============================================================================
  // PART 1 — INTRODUCTORY MONOGRAPH
  // ============================================================================
  {
    id: 'article-part1-chakra-vidya',
    slug: 'chakra-vidya-subtle-energy-centres',
    articleNumber: 'PART I · INTRODUCTORY MONOGRAPH',
    partCategory: 'part1-intro',
    titleEn: 'Chakra Vidya — The Science of the Subtle Energy Centres',
    titleSanskrit: 'चक्र विद्या — सूक्ष्म शरीर एवं सप्त-चक्र विज्ञान',
    transliteration: 'Cakra Vidyā — Sūkṣma-Śarīra & Sapta-Cakra Vijñāna',
    subtitleEn: 'Foundational Architecture of the Subtle Body, Three Principal Nāḍīs, Kuṇḍalinī Śakti & the Six-Plus-One Lotus Hierarchy',
    subtitleHi: 'सूक्ष्म शरीर, इड़ा-पिंगला-सुषुम्णा नाड़ी-त्रय, कुण्डलिनी शक्ति एवं षट्चक्र-सहस्रार की शास्त्रीय संरचना',
    accentColor: '#D3AD55',
    introductoryOverviewEn:
      'In the Hindu Yogic, Śaiva, and Śākta Tantric traditions, a cakra (चक्र, literally "wheel, circle, disc") or padma (पद्म, "lotus") is a focal nexus of conscious vital energy (prāṇa-śakti) and mantric sound (mātṛkā) arrayed along the central axial channel (Suṣumṇā Nāḍī) of the subtle body (Sūkṣma Śarīra). Far from being gross anatomical organs, chakras are contemplative mandalas through which cosmic principles (tattvas) are interiorized and re-integrated into non-dual consciousness.',
    introductoryOverviewHi:
      'हिन्दू योग, शैव और शाक्त तांत्रिक परम्पराओं में "चक्र" अथवा "पद्म" (कमल) सूक्ष्म शरीर के केंद्रीय अक्ष—सुषुम्णा नाड़ी—में पिरोए हुए प्राण-शक्ति और मातृका-मंत्रों के चेतन केंद्र हैं। ये स्थूल शरीर के भौतिक अंग नहीं हैं, अपितु अंतर्याग, भूत-शुद्धि और कुण्डलिनी-योग में प्रयुक्त होने वाले सूक्ष्म ध्यान-मण्डल हैं।',
    historicalBackgroundEn:
      'Early Upaniṣadic texts (Chāndogya 8.6.6, Kaṭha 6.16, Praśna 3.6) speak of the heart center with 101 subtle channels (nāḍīs), one of which rises upward to the crown. By the 8th–11th centuries CE, Kaula and Śaiva Āgamic scriptures such as the Kubjikāmata Tantra, Netra Tantra, and Mālinīvijayottara Tantra developed complex interior lotus hierarchies (ranging from 5 to 12+ centres). In 1577 CE, the Bengali Śākta master Pūrṇānanda Yati composed the Ṣaṭ-Cakra-Nirūpaṇa ("Investigation of the Six Chakras", Chapter 6 of his Śrītattvacintāmaṇi), codifying the six axial lotuses (Mūlādhāra to Ājñā) crowned by the thousand-petalled Sahasrāra. Translated by Sir John Woodroffe (Arthur Avalon) in The Serpent Power (1919), Pūrṇānanda’s text became the global foundation for the modern Seven-Chakra model.',
    historicalBackgroundHi:
      'प्रारम्भिक उपनिषदों (छान्दोग्य ८.६.६, कठ ६.१६, प्रश्न ३.६) में हृदय-केंद्र और उससे निकलने वाली १०१ सूक्ष्म नाड़ियों का उल्लेख मिलता है जिनमें से एक मूर्धा (ब्रह्मरन्ध्र) की ओर जाती है। ८वीं से ११वीं शताब्दी के मध्य कौल और शैव आगमों (कुब्जिकामत तंत्र, नेत्र तंत्र, मालिनीविजयोत्तर तंत्र) में ५ से १२ चक्रों की प्रणालियाँ विकसित हुईं। १५७७ ई. में बंगाल के महान शाक्त आचार्य पूर्णानन्द यति ने अपने ग्रंथ "श्रीतत्त्वचिन्तामणि" के छठे पटल "षट्चक्रनिरूपण" में मूलाधार से आज्ञा तक के ६ चक्रों और उनके ऊपर सहस्रार महापद्म का अत्यंत सुव्यवस्थित निरूपण किया। १९१९ ई. में आर्थर एवलॉन (सर जॉन वुडरॉफ) की पुस्तक "द सर्पेंट पावर" के माध्यम से यही प्रणाली विश्वभर में "सप्त-चक्र" के रूप में प्रसिद्ध हुई।',
    traditionalExplanationEn:
      'Traditional Tantric physiology views the human microcosm (piṇḍāṇḍa) as an exact homology of the macrocosm (brahmāṇḍa). The 36 Tattvas of creation condense downward from pure Śiva-Śakti at the crown into the five gross elements (Ākāśa at the throat, Vāyu at the heart, Agni at the navel, Āpas at the pelvis, and Pṛthvī at the root). Through Yoga and Tantra, the practitioner reverses this involution: awakening Kuṇḍalinī Śakti at Mūlādhāra and guiding her upward through Suṣumṇā to dissolve each lower element into the higher (Laya-krama / Bhūta-śuddhi) until she unites with Paramaśiva in Sahasrāra.',
    traditionalExplanationHi:
      'तांत्रिक दर्शन के अनुसार "यथा पिण्डे तथा ब्रह्माण्डे"—मानव का सूक्ष्म शरीर संपूर्ण ब्रह्माण्ड की प्रतिकृति है। सृष्टि-क्रम में सहस्रार स्थित शिव-शक्ति से अवरोहण करते हुए आकाश (विशुद्ध), वायु (अनाहत), अग्नि (मणिपूर), जल (स्वाधिष्ठान) और पृथ्वी (मूलाधार) तत्त्व घनीभूत होते हैं। लय-योग और भूत-शुद्धि की प्रक्रिया में साधक मूलाधार में सुप्त कुण्डलिनी को जाग्रत कर सुषुम्णा मार्ग से ऊपर ले जाता है, जिससे स्थूल तत्त्व क्रमशः सूक्ष्म तत्त्वों में लय होते हुए सहस्रार में परमशिव के साथ एकरस हो जाते हैं।',
    sanskritTerminology: [
      {
        termDevanagari: 'चक्र / पद्म',
        termIAST: 'Cakra / Padma',
        definitionEn: 'Wheel, disc, or lotus; a subtle center of prāṇa, tattva, and mātṛkā sound along the Suṣumṇā channel.',
        definitionHi: 'सुषुम्णा नाड़ी के भीतर स्थित प्राण, तत्त्व और मातृका-वर्णों का सूक्ष्म कमल या भँवर।'
      },
      {
        termDevanagari: 'सूक्ष्म शरीर',
        termIAST: 'Sūkṣma Śarīra (Liṅga Śarīra)',
        definitionEn: 'The subtle body composed of the vital, mental, and intellective sheaths (Prāṇamaya, Manomaya, Vijñānamaya Kośas).',
        definitionHi: 'प्राणमय, मनोमय और विज्ञानमय कोषों से निर्मित सूक्ष्म देह, जिसमें नाड़ियाँ और चक्र अवस्थित हैं।'
      },
      {
        termDevanagari: 'नाड़ी',
        termIAST: 'Nāḍī',
        definitionEn: 'From root nad ("to flow, vibrate"); subtle conduits of prāṇa and consciousness (traditionally 72,000 in number).',
        definitionHi: 'प्राण और चेतना का प्रवाह करने वाली सूक्ष्म वाहिकाएँ (शास्त्रीय गणना में ७२,००० नाड़ियाँ)।'
      },
      {
        termDevanagari: 'सुषुम्णा',
        termIAST: 'Suṣumṇā Nāḍī',
        definitionEn: 'The central axial channel running from Mūlādhāra to Brahmarandhra, enclosing Vajrā, Citriṇī, and Brahma-nāḍī.',
        definitionHi: 'मूलाधार से ब्रह्मरन्ध्र तक जाने वाली केंद्रीय मुख्य नाड़ी, जिसके भीतर वज्रा, चित्रिणी और ब्रह्मनाड़ी स्थित हैं।'
      },
      {
        termDevanagari: 'कुण्डलिनी शक्ति',
        termIAST: 'Kuṇḍalinī Śakti',
        definitionEn: '"The Coiled One"; primordial cosmic Cit-Śakti resting coiled 3½ times around the Svayambhū Liṅga in Mūlādhāra.',
        definitionHi: 'मूलाधार में स्वयम्भू लिंग के चारों ओर साढ़े तीन वलय में कुण्डलित आद्या चित्-शक्ति।'
      },
      {
        termDevanagari: 'ग्रन्थि',
        termIAST: 'Granthi',
        definitionEn: 'Three subtle psychic knots—Brahma Granthi, Viṣṇu Granthi, and Rudra Granthi—that must be pierced along Suṣumṇā.',
        definitionHi: 'सुषुम्णा मार्ग की तीन सूक्ष्म गाँठें—ब्रह्म ग्रन्थि, विष्णु ग्रन्थि और रुद्र ग्रन्थि।'
      }
    ],
    iconographyAndSymbolismEn:
      'In classical Tantric manuscript art (from Nepal, Bengal, Rajasthan, and Mysore), the subtle body is depicted with the central Merudaṇḍa column containing concentric lotuses. Each lotus features a specific number of petals inscribed with Sanskrit letters, a geometric elemental mandala (Yellow Square for Earth, White Crescent for Water, Red Triangle for Fire, Smoky Hexagram for Air, White Circle for Ether), a seed syllable (Laṃ, Vaṃ, Raṃ, Yaṃ, Haṃ, Oṃ) riding an animal mount, a presiding Deva, and a guardian Yoginī-Śakti (Ḍākinī to Hākinī).',
    iconographyAndSymbolismHi:
      'पारम्परिक तांत्रिक पाण्डुलिपियों (नेपाल, बंगाल, राजस्थान एवं मैसूर चित्रशैली) में मेरुदण्ड के भीतर क्रमशः खिले हुए कमलों का चित्रण मिलता है। प्रत्येक कमल में निश्चित संख्या में दल, उन पर अंकित संस्कृत मातृका अक्षर, कर्णिका में पंचतत्त्वों के ज्यामितीय मण्डल (चतुष्कोण, अर्धचन्द्र, त्रिकोण, षट्कोण, वृत्त), पशु-वाहन पर आरूढ़ बीज-मंत्र तथा अधिष्ठाता देव व योगिनी-शक्ति (डाकिनी से हाकिनी तक) चित्रित होते हैं।',
    diagramType: 'full-subtle-body',
    detailedSections: [
      {
        headingEn: '1. Meaning of Chakra: Padma, Ādhāra, Granthi & Kendra',
        headingHi: '१. चक्र का अर्थ: पद्म, आधार, ग्रन्थि एवं केंद्र',
        bodyEn:
          'In Sanskrit, cakra (चक्र) derives from the verbal root kṛ / car meaning a wheel that turns, a sovereign realm (cakravartin), a circular ritual diagram, or a vortex of energy. In योगिक and तांत्रिक literature, four distinct technical terms appear:\n• Cakra (चक्र): Emphasizes the wheel-like radiation of prāṇa and the circular arrangement of deities around a central hub.\n• Padma / Kamala (पद्म / कमल): Emphasizes the organic lotus metaphor—roots in the subtle channel, buds that open and turn upward (ūrdhva-mukha) when pierced by Kuṇḍalinī.\n• Ādhāra (आधार): Used in Nātha Haṭha-yoga texts (e.g., Gorakṣaśataka lists 16 Ādhāras) for vital support-points where awareness and prāṇa are fixed.\n• Granthi (ग्रन्थि): The three knots (Brahma, Viṣṇu, Rudra) where māyā and dualistic identification bind the subtle body.',
        bodyHi:
          'संस्कृत में "चक्र" शब्द का अर्थ पहिया, भँवर, मण्डल अथवा शक्ति-व्यूह है। योग और तंत्र शास्त्र में इसके लिए चार प्रमुख पारिभाषिक शब्द प्रयुक्त होते हैं:\n• चक्र: नाड़ियों के संगम और प्राण-ऊर्जा के घूर्णनशील मण्डल का द्योतक।\n• पद्म / कमल: कुण्डलिनी के स्पर्श से अधोमुख से ऊर्ध्वमुख होकर खिलने वाले चेतना-कमल का प्रतीक।\n• आधार: नाथ-योग ग्रंथों (यथा गोरक्षशतक के १६ आधार) में वर्णित ध्यान एवं प्राण-धारणा के आधार-बिन्दु।\n• ग्रन्थि: सुषुम्णा पथ में अज्ञान और आसक्ति की तीन सूक्ष्म गाँठें (ब्रह्म, विष्णु एवं रुद्र ग्रन्थि)।'
      },
      {
        headingEn: '2. Historical Background: From Upaniṣads & Tantra to Ṣaṭ-Cakra-Nirūpaṇa',
        headingHi: '२. ऐतिहासिक विकास: उपनिषद् एवं आगम से षट्चक्रनिरूपण तक',
        bodyEn:
          'The history of the chakra system spans over two millennia of Indian contemplative literature:\n1. Vedic & Early Upaniṣadic Seeds (c. 800–300 BCE): The Atharvaveda (10.2.31–32) describes the divine stronghold of eight wheels and nine doors; the Chāndogya and Kaṭha Upaniṣads describe the 101 nāḍīs of the heart and the central channel rising to the crown.\n2. Early Śaiva & Śākta Tantras (7th–11th c. CE): The Netra Tantra (Ch. 7) describes a 6-chakra subtle body; the Kubjikāmata Tantra (Ch. 11–16) details the Saṃvartā mandala and the six Yoginīs (Ḍākinī, Rākiṇī, Lākinī, Kākinī, Śākinī, Hākinī) presiding over the bodily dhātus.\n3. Nātha & Haṭha Yoga Synthesis (11th–15th c. CE): Gorakṣanātha’s tradition integrated Śākta Kuṇḍalinī-yoga with haṭha-yogic bandhas, mudrās, and kumbhaka.\n4. Pūrṇānanda’s Ṣaṭ-Cakra-Nirūpaṇa (1577 CE): Composed in Bengal, this 55-verse masterpiece standardized the 6 chakras + Sahasrāra model.\n5. Modern Transmission (1919–Present): Sir John Woodroffe’s The Serpent Power (1919) introduced Pūrṇānanda’s Sanskrit text and Kālīcaraṇa’s commentary to global scholarship, while C.W. Leadbeater (The Chakras, 1927) and C.G. Jung (1932) created Westernized colour and psychological adaptations.',
        bodyHi:
          'चक्र-विज्ञान का ऐतिहासिक विकास भारतीय साधना-साहित्य के दो सहस्र वर्षों में फैला है:\n१. वैदिक एवं औपनिषदिक बीज: अथर्ववेद (१०.२.३१) में "अष्टचक्रा नवद्वारा देवानां पूरयोध्या" का उल्लेख है; छान्दोग्य व कठोपनिषद् में हृदय की १०१ नाड़ियों और मूर्धन्य सुषुम्णा का वर्णन है।\n२. प्राचीन शैव एवं शाक्त आगम (७वीं–११वीं शती): नेत्र तंत्र और कुब्जिकामत तंत्र में ६ चक्रों तथा ६ धातु-योगिनियों (डाकिनी, राकिनी, लाकिनी, काकिनी, शाकिनी, हाकिनी) का विस्तृत निरूपण हुआ।\n३. नाथ एवं हठयोग समन्वय (११वीं–१५वीं शती): गोरक्षनाथ परम्परा ने मुद्रा, बन्ध और कुम्भक को कुण्डलिनी-जागरण से जोड़ा।\n४. पूर्णानन्द कृत षट्चक्रनिरूपण (१५७७ ई.): ५५ श्लोकों की इस कृति ने षट्चक्र एवं सहस्रार के मानक स्वरूप को प्रतिष्ठित किया।\n५. आधुनिक प्रसार (१९१९ से वर्तमान): आर्थर एवलॉन के "द सर्पेंट पावर" (१९१९) ने मूल संस्कृत भाष्य को विश्व के समक्ष रखा।'
      },
      {
        headingEn: '3. The Subtle Body Framework (Sūkṣma Śarīra & Three Bodies)',
        headingHi: '३. सूक्ष्म शरीर की संरचना (त्रय-शरीर एवं पंचकोष)',
        bodyEn:
          'Classical Vedānta and Tantra distinguish three interpenetrating bodies (Śarīra-traya):\n• Sthūla Śarīra (Gross Physical Body): Composed of the five compounded physical elements (Annamaya Kośa); anatomical nerves and glands belong here.\n• Sūkṣma Śarīra (Subtle Body): Composed of the Prāṇamaya (vital breath & nāḍīs), Manomaya (mind & perceptual faculties), and Vijñānamaya (discriminative intellect) sheaths. All Nāḍīs, Chakras, Granthis, and Prāṇa-vāyus reside in the Sūkṣma Śarīra.\n• Kāraṇa Śarīra (Causal Body): The seed-state of latent impressions (Ānandamaya Kośa), transcended when Kuṇḍalinī merges into Para-Bindu at Sahasrāra.',
        bodyHi:
          'वेदान्त और तंत्र में मानव अस्तित्व के तीन शरीर (शरीर-त्रय) बताए गए हैं:\n• स्थूल शरीर (अन्नमय कोष): पंचमहाभूतों से निर्मित भौतिक देह; शारीरिक नसें और ग्रंथियाँ इसी के अंतर्गत आती हैं।\n• सूक्ष्म शरीर (प्राणमय, मनोमय एवं विज्ञानमय कोष): समस्त ७२,००० नाड़ियाँ, दश प्राण-वायु, षट्चक्र और तीनों ग्रन्थियाँ इसी सूक्ष्म शरीर में विद्यमान हैं।\n• कारण शरीर (आनन्दमय कोष): संस्कारों की बीज-अवस्था, जिसका अतिक्रमण सहस्रार में कुण्डलिनी और परमशिव के मिलन से होता है।'
      },
      {
        headingEn: '4. The Three Principal Nāḍīs: Iḍā, Piṅgalā & Suṣumṇā',
        headingHi: '४. तीन प्रमुख नाड़ियाँ: इड़ा, पिंगला एवं सुषुम्णा',
        bodyEn:
          'Among the 72,000 subtle channels radiating from the Kanda, three axial channels are paramount:\n• Iḍā Nāḍī (इड़ा — Left / Lunar / Candra / Gaṅgā): Originates on the left of Mūlādhāra, spirals upward in alternating polarity around the central axis, and terminates at the left nostril. Pale white in colour, cooling, feminine, and nectar-bearing (soma-rūpiṇī).\n• Piṅgalā Nāḍī (पिंगला — Right / Solar / Sūrya / Yamunā): Originates on the right of Mūlādhāra, spirals opposite to Iḍā, and terminates at the right nostril. Fiery red/tawny in colour, heating, masculine, and dynamic (agni-sūrya-rūpiṇī).\n• Suṣumṇā Nāḍī (सुषुम्णा — Central / Agni-Soma-Sūrya / Sarasvatī): Runs straight through the centre of the Merudaṇḍa from Mūlādhāra to Brahmarandhra. Inside Suṣumṇā lies the luminous Vajrā Nāḍī; inside Vajrā lies the nectarine Citriṇī Nāḍī; and at the innermost core of Citriṇī runs the microscopic Brahma-Nāḍī (Brahmarandhra passageway) upon which the six lotuses are strung like gems on a thread. The meeting of Iḍā, Piṅgalā, and Suṣumṇā at Mūlādhāra is called Yukta-Triveṇī ("Bound Confluence"), and their final convergence at Ājñā is called Mukta-Triveṇī ("Liberating Confluence").',
        bodyHi:
          'कन्द-मूल से निकलने वाली ७२,००० नाड़ियों में तीन नाड़ियाँ सर्वोपरि हैं:\n• इड़ा नाड़ी (वाम / चन्द्र / गंगा): मूलाधार के वाम भाग से निकलकर मेरुदण्ड के चारों ओर सर्पिल गति से चढ़ती हुई बाएँ नथुने तक जाती है। यह शीतल, श्वेत वर्ण और सोम-स्वरूपा है।\n• पिंगला नाड़ी (दक्षिण / सूर्य / यमुना): मूलाधार के दाएँ भाग से निकलकर दाएँ नथुने तक जाती है। यह उष्ण, रक्त-पिंगल वर्ण और सूर्य-स्वरूपा है।\n• सुषुम्णा नाड़ी (मध्य / सरस्वती): मूलाधार से ब्रह्मरन्ध्र तक मेरुदण्ड के मध्य में सीधी जाती है। सुषुम्णा के भीतर "वज्रा नाड़ी", वज्रा के भीतर "चित्रिणी नाड़ी" और चित्रिणी के अंतरतम में "ब्रह्मनाड़ी" है, जिसमें षट्चक्र माला के मणियों की भाँति पिरोए हुए हैं। मूलाधार में इन तीनों का संगम "युक्त-त्रिवेणी" और आज्ञा चक्र (भ्रूमध्य) में इनका संगम "मुक्त-त्रिवेणी" कहलाता है।'
      },
      {
        headingEn: '5. Kuṇḍalinī Śakti & the Three Granthis',
        headingHi: '५. कुण्डलिनी शक्ति एवं तीन ग्रन्थियाँ (ब्रह्म, विष्णु, रुद्र)',
        bodyEn:
          'Kuṇḍalinī is the microcosmic presence of Mahā-Śakti (Parā-Saṃvit). In the ordinary waking state, she sleeps in Mūlādhāra coiled three and a half times (representing the three guṇas—Sattva, Rajas, Tamas—or the three syllables of Oṃ—A, U, M—plus the half-mātrā Ardha-candra) around the Svayambhū Liṅga, covering the mouth of the Brahmadvāra with her face.\n\nWhen awakened through Guru-kṛpā, Prāṇāyāma, Bandhas, and Mantra-dhyāna, she enters the Brahma-nāḍī and pierces three major psychic knots (Granthis):\n1. Brahma Granthi (Mūlādhāra / Svādhiṣṭhāna region): Unties attachment to physical survival, material possessions, and bodily restlessness (Rajas-Tamas).\n2. Viṣṇu Granthi (Anāhata / Heart region): Unties emotional bondage, possessive attachment, and egoic preservation.\n3. Rudra Granthi (Ājñā / Eyebrow centre): Unties subtle intellectual pride, attachment to yogic siddhis, and dualistic subject-object perception.',
        bodyHi:
          'कुण्डलिनी शक्ति परब्रह्म परमात्मा की परा-चित्-शक्ति है जो व्यष्टि (जीवात्मा) में मूलाधार स्थित स्वयम्भू लिंग को साढ़े तीन वलय (सत्त्व, रज, तम अथवा अ-उ-म और अर्धमात्रा के प्रतीक) में लपेटकर ब्रह्मद्वार को अपने मुख से ढके रहती है।\n\nगुरु-कृपा, प्राणायाम, बन्ध-त्रय और मंत्र-ध्यान से जाग्रत होकर जब कुण्डलिनी ब्रह्मनाड़ी में प्रवेश करती है, तब वह मार्ग की तीन प्रमुख ग्रन्थियों का भेदन (ग्रन्थि-भेदन) करती है:\n१. ब्रह्म ग्रन्थि (मूलाधार क्षेत्र): देहाध्यास और भौतिक इन्द्रिय-आसक्ति की गाँठ।\n२. विष्णु ग्रन्थि (अनाहत क्षेत्र): भावात्मक ममत्व और अहंकारी रक्षण-वृत्ति की गाँठ।\n३. रुद्र ग्रन्थि (आज्ञा चक्र क्षेत्र): सूक्ष्म अस्मिता, सिद्धियों के मोह और द्वैत-भाव की अंतिम गाँठ।'
      },
      {
        headingEn: '6. Understanding the Seven-Chakra Model (Six Chakras + Sahasrāra)',
        headingHi: '६. सप्त-चक्र मॉडल का शास्त्रीय रहस्य (षट्चक्र + सहस्रार)',
        bodyEn:
          'A vital point of scholarly clarity: Pūrṇānanda’s classic treatise is titled Ṣaṭ-Cakra-Nirūpaṇa—"Investigation of the Six Chakras." In strict Tantric taxonomy, there are SIX chakras along the conditioned axis: (1) Mūlādhāra, (2) Svādhiṣṭhāna, (3) Maṇipūra, (4) Anāhata, (5) Viśuddha, and (6) Ājñā. The seventh centre, Sahasrāra (the Thousand-Petalled Lotus at the crown), is classified as Tattvātīta (beyond the cosmic categories)—not merely a seventh wheel on the same level, but the transcendent goal where all six wheels are consummated. In modern pedagogy, these six lotuses plus Sahasrāra are collectively referred to as "The Seven Chakras (सप्त चक्र)".',
        bodyHi:
          'शास्त्रीय दृष्टि से यह समझना अत्यंत आवश्यक है कि पूर्णानन्द के मूल ग्रंथ का नाम "षट्चक्रनिरूपण" (छह चक्रों का निरूपण) है। तांत्रिक वर्गीकरण में प्रकृति और तत्त्वों की सीमा के भीतर ६ चक्र हैं—(१) मूलाधार, (२) स्वाधिष्ठान, (३) मणिपूर, (४) अनाहत, (५) विशुद्ध और (६) आज्ञा। सातवाँ केंद्र "सहस्रार" इन छहों चक्रों से ऊपर "तत्त्वातीत" (प्रकृति से परे) परमशिव का धाम है। आधुनिक अध्ययन की सुविधा के लिए इन ६ चक्रों और ७वें सहस्रार को मिलाकर "सप्त चक्र" कहा जाता है।'
      }
    ],
    relatedConceptsEn: [
      'Sūkṣma Śarīra (Subtle Body)',
      'Iḍā, Piṅgalā & Suṣumṇā',
      'Kuṇḍalinī Śakti',
      'Brahma, Viṣṇu & Rudra Granthis',
      'Ṣaṭ-Cakra-Nirūpaṇa (1577 CE)',
      'Bhūta-Śuddhi (Elemental Purification)'
    ],
    relatedConceptsHi: [
      'सूक्ष्म शरीर एवं पंचकोष',
      'इड़ा, पिंगला एवं सुषुम्णा',
      'कुण्डलिनी शक्ति एवं ग्रन्थि-त्रय',
      'षट्चक्रनिरूपण (१५७७ ई.)',
      'भूत-शुद्धि एवं लय-योग'
    ],
    traditionalVsModernEn: {
      traditionalView:
        'Chakras are prescriptive meditative mandalas along the central channel of the subtle body, used for nyāsa (installing Sanskrit letters), bhūta-śuddhi (dissolving the five elements), and Kuṇḍalinī ascent toward non-dual liberation (Mokṣa).',
      modernView:
        'Often presented in post-1927 Western literature as seven rainbow-coloured aura wheels mapped to physical endocrine glands and everyday psychological self-help themes.',
      scholarlyClarification:
        'While modern psychological adaptations offer accessible metaphors for somatic self-reflection, historical Indology distinguishes them clearly from the Sanskrit Āgamic and Haṭha-yogic subtle body.'
    },
    distinctionsAndMisconceptionsEn: [
      'Chakras are subtle-body centres of prāṇa and consciousness (Sūkṣma Śarīra), not gross anatomical organs dissectible in a cadaver.',
      'Traditional Sanskrit texts do NOT assign the modern 7-colour Newton rainbow spectrum to the chakras; instead, each chakra has distinct traditional colours for its petals, inner element mandala, and deities.',
      'Traditional scriptures contain multiple valid chakra enumerations (5, 6, 7, 9, 12, or 16+ centres depending on the lineage and sadhana purpose).'
    ],
    distinctionsAndMisconceptionsHi: [
      'चक्र सूक्ष्म शरीर (प्राणमय एवं मनोमय कोष) के चेतना-केंद्र हैं, स्थूल शरीर के चीर-फाड़ में दिखने वाले भौतिक अंग नहीं।',
      'प्राचीन संस्कृत ग्रंथों में आधुनिक इन्द्रधनुषी (VIBGYOR) रंग-प्रणाली नहीं है; अपितु प्रत्येक चक्र के दलों, तत्त्व-यंत्र और देवताओं के विशिष्ट शास्त्रीय रंग वर्णित हैं।',
      'विभिन्न तांत्रिक और योग परम्पराओं में साधना के उद्देश्य के अनुसार ५, ६, ७, ९ या १२ चक्रों का वर्णन मिलता है।'
    ],
    referencesAndReading: [
      'Pūrṇānanda Yati, Śrītattvacintāmaṇi Ch. 6: Ṣaṭ-Cakra-Nirūpaṇa (1577 CE) with Kālīcaraṇa’s commentary',
      'Sir John Woodroffe (Arthur Avalon), The Serpent Power (1919)',
      'Śiva Saṃhitā, Chapter 5 (trans. James Mallinson, 2007)',
      'Gavin Flood, The Tantric Body: The Secret Tradition of Hindu Religion (2006)',
      'James Mallinson & Mark Singleton, Roots of Yoga (Penguin Classics, 2017)'
    ],
    relatedArticleSlugs: [
      'chakra-01-muladhara-root-centre',
      'sat-cakra-nirupana-textual-study',
      'kundalini-yoga-subtle-anatomy',
      'traditional-vs-modern-chakra-interpretations'
    ]
  },

  // ============================================================================
  // PART 2 — SEVEN INDIVIDUAL CHAKRA ARTICLES (01 to 07)
  // ============================================================================
  ...SEVEN_CHAKRA_PROFILES.map(buildIndividualChakraArticle),

  // ============================================================================
  // PART 3 — SEVEN ADDITIONAL THEMATIC RESEARCH ARTICLES
  // ============================================================================
  {
    id: 'article-part3-sat-cakra-nirupana',
    slug: 'sat-cakra-nirupana-textual-study',
    articleNumber: 'RESEARCH MONOGRAPH 01',
    partCategory: 'part3-thematic',
    titleEn: 'Ṣaṭ-Cakra-Nirūpaṇa — Textual Architecture of Pūrṇānanda’s 1577 CE Treatise',
    titleSanskrit: 'षट्चक्रनिरूपण — पूर्णानन्द यति कृत प्रामाणिक शाक्त ग्रंथ का अध्ययन',
    transliteration: 'Ṣaṭ-Cakra-Nirūpaṇa (Śrītattvacintāmaṇi, Paṭala 6)',
    subtitleEn: 'Philological & Structural Analysis of the 55-Verse Sanskrit Text, Kālīcaraṇa’s Commentary & Arthur Avalon’s The Serpent Power',
    subtitleHi: '१५७७ ई. में रचित ५५ श्लोकों के मूल संस्कृत ग्रंथ, कालीचरण की टीका एवं "द सर्पेंट पावर" का तुलनात्मक अध्ययन',
    accentColor: '#F59E0B',
    introductoryOverviewEn:
      'Composed in 1577 CE (Śaka 1499) by the Gauḍīya (Bengali) Śākta initiate Pūrṇānanda Yati (Paramahaṃsa Parivrājakācārya), the Ṣaṭ-Cakra-Nirūpaṇa forms the sixth chapter (paṭala) of his monumental encyclopedic Tantra digest, the Śrītattvacintāmaṇi. Virtually every modern representation of the seven chakras—their names, petal counts, Sanskrit letters, elemental yantras, seed syllables, and deities—derives directly from these 55 Sanskrit verses.',
    introductoryOverviewHi:
      '१५७७ ई. (शक संवत् १४९९) में बंगाल के महान शाक्त संन्यासी परमहंस परिव्राजकाचार्य पूर्णानन्द यति द्वारा रचित "षट्चक्रनिरूपण" उनके विशाल तांत्रिक ग्रंथ "श्रीतत्त्वचिन्तामणि" का छठा पटल है। आधुनिक विश्व में सप्त-चक्रों के नाम, दलों की संख्या, मातृका अक्षर, तत्त्व-मण्डल, बीज मंत्र और अधिष्ठाता देवी-देवताओं का जो मानक स्वरूप प्रचलित है, उसका मूल स्रोत यही ५५ श्लोकों की संस्कृत रचना है।',
    historicalBackgroundEn:
      'Pūrṇānanda hailed from Katihali in Mymensingh (historic Bengal) and was a disciple of Brahmānanda in the Śrīvidyā and Kālīkula lineages. In the 18th century, the Sanskrit commentator Kālīcaraṇa composed a lucid sub-commentary (ṭīkā) on both the Ṣaṭ-Cakra-Nirūpaṇa and the seven-verse hymn Pādukā-Pañcaka. In 1913, Sir John Woodroffe (writing as Arthur Avalon) published the critical Sanskrit edition in Tantrik Texts Vol. II, followed in 1919 by his celebrated English translation and exposition, The Serpent Power.',
    historicalBackgroundHi:
      'आचार्य पूर्णानन्द पूर्व बंगाल (मैमनसिंह) के निवासी तथा ब्रह्मानन्द के शिष्य थे। १८वीं शताब्दी में विद्वान टीकाकार कालीचरण ने "षट्चक्रनिरूपण" और "पादुकापञ्चक" पर अत्यंत विस्तृत संस्कृत टीका लिखी। १९१३ ई. में सर जॉन वुडरॉफ (आर्थर एवलॉन) ने इसका मूल संस्कृत संस्करण प्रकाशित किया और १९१९ ई. में "द सर्पेंट पावर" (The Serpent Power) के रूप में इसका अंग्रेजी अनुवाद प्रकाशित कर इसे वैश्विक विद्वत्-जगत् तक पहुँचाया।',
    traditionalExplanationEn:
      'The text is structured as a progressive contemplative ascent (āroha-krama) from the base of the spine to the crown:\n• Verses 1–3: Invocation and anatomy of Merudaṇḍa, Iḍā, Piṅgalā, Suṣumṇā, Vajrā, Citriṇī, and Brahma-nāḍī.\n• Verses 4–13: Mūlādhāra Chakra (4 petals), Dharā-maṇḍala, Brahmā, Ḍākinī, Svayambhū Liṅga, and Kuṇḍalinī Śakti.\n• Verses 14–18: Svādhiṣṭhāna Chakra (6 petals), Ambhoja-maṇḍala, Viṣṇu, and Rākiṇī.\n• Verses 19–21: Maṇipūra Chakra (10 petals), Vahni-maṇḍala, Rudra, and Lākinī.\n• Verses 22–27: Anāhata Chakra (12 petals), Vāyu-maṇḍala, Īśāna, Kākinī, Bāṇa Liṅga, and the 8-petalled Ānandakanda lotus below the heart.\n• Verses 28–31: Viśuddha Chakra (16 petals), Nabho-maṇḍala, Ardhanārīśvara Sadāśiva, and Śākinī.\n• Verses 32–39: Ājñā Chakra (2 petals), Hākinī, Itara Liṅga, Praṇava, and higher sub-centres above Ājñā (Manas, Soma, Kāraṇa-rūpā).\n• Verses 40–49: Sahasrāra Padma (1,000 petals), Amā-kalā, Nirvāṇa-kalā, Nirvāṇa-Śakti, and Paramaśiva.\n• Verses 50–55: Awakening of Kuṇḍalinī, piercing of the six lotuses (Ṣaṭ-cakra-bheda), union with Paramaśiva, and the shower of ambrosial nectar (Sudhā-dhārā).',
    traditionalExplanationHi:
      'इस ग्रंथ के ५५ श्लोकों का संरचनात्मक विभाजन इस प्रकार है:\n• श्लोक १–३: मंगलाचरण तथा मेरुदण्ड, इड़ा, पिंगला, सुषुम्णा, वज्रा, चित्रिणी और ब्रह्मनाड़ी का स्वरूप।\n• श्लोक ४–१३: मूलाधार चक्र (४ दल), पृथ्वी-मण्डल, ब्रह्मा, डाकिनी, स्वयम्भू लिंग एवं कुण्डलिनी का ध्यान।\n• श्लोक १४–१८: स्वाधिष्ठान चक्र (६ दल), जल-मण्डल, विष्णु एवं राकिनी।\n• श्लोक १९–२१: मणिपूर चक्र (१० दल), अग्नि-मण्डल, रुद्र एवं लाकिनी।\n• श्लोक २२–२७: अनाहत चक्र (१२ दल), वायु-मण्डल, ईशान, काकिनी, बाण लिंग एवं हृदय के नीचे स्थित अष्टदल आनन्दकन्द कमल।\n• श्लोक २८–३१: विशुद्ध चक्र (१६ दल), आकाश-मण्डल, अर्धनारीश्वर सदाशिव एवं शाकिनी।\n• श्लोक ३२–३९: आज्ञा चक्र (२ दल), हाकिनी, इतर लिंग, प्रणव तथा कारण-रूपा कलाएँ।\n• श्लोक ४०–४९: सहस्रार महापद्म (१००० दल), अमा-कला, निर्वाण-कला एवं परमशिव।\n• श्लोक ५०–५५: कुण्डलिनी जागरण, षट्चक्र-भेदन, शिव-शक्ति सामरस्य और अमृत-वर्षा।',
    sanskritTerminology: [
      {
        termDevanagari: 'षट्चक्र-भेदन',
        termIAST: 'Ṣaṭ-Cakra-Bhedana',
        definitionEn: 'The yogic piercing of the six lotuses by awakened Kuṇḍalinī ascending through the Brahma-nāḍī.',
        definitionHi: 'जाग्रत कुण्डलिनी द्वारा ब्रह्मनाड़ी के भीतर स्थित छहों कमलों का क्रमशः भेदन और प्रस्फुटन।'
      },
      {
        termDevanagari: 'चित्रिणी नाड़ी',
        termIAST: 'Citriṇī Nāḍī',
        definitionEn: 'The innermost luminous filament inside Suṣumṇā and Vajrā, fine as a spider’s thread, on which the lotuses are strung.',
        definitionHi: 'सुषुम्णा और वज्रा के भीतर मकड़ी के तंतु के समान सूक्ष्म एवं तेजोमय नाड़ी जिस पर षट्चक्र पिरोए हैं।'
      }
    ],
    iconographyAndSymbolismEn:
      'Pūrṇānanda writes in rich Sanskrit kāvya metres (predominantly Sragdharā and Śārdūlavikrīḍita), painting each chakra as a multi-layered architectural temple containing floral petals, geometric yantras, anthropomorphic deities with specific mudrās and weapons, and sonic seed-syllables.',
    iconographyAndSymbolismHi:
      'पूर्णानन्द ने स्रग्धरा और शार्दूलविक्रीडित जैसे भव्य संस्कृत छंदों में प्रत्येक चक्र का ऐसा सजीव चित्रण किया है मानो वह कोई बहुस्तरीय तांत्रिक मंदिर हो जिसमें दल, यंत्र, देवता, आयुध, मुद्राएँ और बीज-मंत्र एक साथ गुँथे हों।',
    diagramType: 'full-subtle-body',
    detailedSections: [
      {
        headingEn: '1. Why "Six Chakras" (Ṣaṭ-Cakra) Instead of Seven?',
        headingHi: '१. "सप्तचक्र" के स्थान पर "षट्चक्र" नाम क्यों?',
        bodyEn:
          'In Pūrṇānanda’s metaphysical architecture, the six lotuses from Mūlādhāra to Ājñā belong to the realm of Prakṛti and the cosmic Tattvas (the five Mahābhūtas plus Manas). Sahasrāra is not counted as a "chakra" because it is the unconditioned seat of Paramaśiva above the cosmos. Furthermore, Pūrṇānanda also describes minor lotuses—such as the 8-petalled Ānandakanda below Anāhata and the Soma/Manas lotuses between Ājñā and Sahasrāra—showing that the six-chakra list is a curated ritual sequence rather than an exhaustive anatomical inventory.',
        bodyHi:
          'पूर्णानन्द के तत्वज्ञान में मूलाधार से आज्ञा तक के छह कमल "प्रकृति" और "तत्त्वों" (पंचमहाभूत + मनस्) के क्षेत्र में आते हैं। सहस्रार को चक्रों की गिनती से ऊपर रखा गया है क्योंकि वह प्रकृति से परे "तत्त्वातीत" परमशिव का धाम है। इसके अतिरिक्त ग्रंथ में अनाहत के नीचे ८ दल वाले आनन्दकन्द कमल तथा आज्ञा के ऊपर मनस् और सोम कमलों का भी उल्लेख है।'
      },
      {
        headingEn: '2. Role of Arthur Avalon’s The Serpent Power (1919)',
        headingHi: '२. आर्थर एवलॉन कृत "द सर्पेंट पावर" (१९१९) का ऐतिहासिक योगदान',
        bodyEn:
          'Prior to 1919, Western Orientalists largely dismissed Tantra as superstition. Sir John Woodroffe (High Court Judge in Calcutta, collaborating closely with Bengali pandit Atal Bihari Ghose) published the Sanskrit text of Ṣaṭ-Cakra-Nirūpaṇa with nine commentaries, demonstrating its rigorous philosophical grounding in Śākta Advaita and Mantra-śāstra. Every subsequent Western work on chakras—from C.W. Leadbeater (1927) and C.G. Jung (1932) to modern yoga manuals—relied on Woodroffe’s translation.',
        bodyHi:
          '१९१९ से पूर्व पश्चिमी विद्वानों में तंत्र के प्रति अनेक भ्रांतियाँ थीं। कलकत्ता उच्च न्यायालय के न्यायाधीश सर जॉन वुडरॉफ ने पंडित अटल बिहारी घोष के सहयोग से मूल संस्कृत पाठ और नौ प्राचीन टीकाओं का संपादन कर यह सिद्ध किया कि चक्र-विज्ञान अद्वैत शाक्त दर्शन और मंत्र-शास्त्र पर आधारित एक अत्यंत गूढ़ वैज्ञानिक प्रणाली है।'
      }
    ],
    relatedConceptsEn: ['Pūrṇānanda Yati', 'Śrītattvacintāmaṇi', 'Kālīcaraṇa', 'Pādukā-Pañcaka', 'Arthur Avalon (Sir John Woodroffe)'],
    relatedConceptsHi: ['पूर्णानन्द यति', 'श्रीतत्त्वचिन्तामणि', 'कालीचरण टीका', 'पादुकापञ्चक', 'आर्थर एवलॉन'],
    traditionalVsModernEn: {
      traditionalView: 'A liturgical manual for Śākta initiates performing internal Kuṇḍalinī-layayoga and Śrīvidyā/Kālīkula dhyāna.',
      modernView: 'Frequently cited second-hand in popular books without awareness of its 1577 CE Bengali Śākta context.',
      scholarlyClarification: 'Reading Ṣaṭ-Cakra-Nirūpaṇa directly restores the authentic colours, Sanskrit letters, and theological depth often lost in modern summaries.'
    },
    distinctionsAndMisconceptionsEn: [
      'Ṣaṭ-Cakra-Nirūpaṇa is not an ancient Vedic text; it is a 1577 CE synthesis of earlier Kaula, Śākta, and Haṭha-yogic scriptures.',
      'It is always studied alongside its companion 7-verse text, Pādukā-Pañcaka, which focuses on the Guru’s footprints inside Sahasrāra.'
    ],
    distinctionsAndMisconceptionsHi: [
      'षट्चक्रनिरूपण १५७७ ई. में रचित पूर्ववर्ती आगमों का प्रामाणिक सार-ग्रंथ है।',
      'इसका अध्ययन सदैव इसके पूरक ग्रंथ "पादुकापञ्चक" (सहस्रार स्थित गुरु-पादुका ध्यान) के साथ किया जाता है।'
    ],
    referencesAndReading: [
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa (ed. Taranatha Vidyaratna, Tantrik Texts Vol. II, 1913)',
      'Arthur Avalon (Sir John Woodroffe), The Serpent Power (7th ed., Ganesh & Co., Madras)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'chakra-systems-across-traditions']
  },
  {
    id: 'article-part3-traditions-comparison',
    slug: 'chakra-systems-across-traditions',
    articleNumber: 'RESEARCH MONOGRAPH 02',
    partCategory: 'part3-thematic',
    titleEn: 'Chakra Systems Across Traditions — Śaiva, Śākta, Nātha, Haṭha Yoga & Vajrayāna',
    titleSanskrit: 'विविध साधना परम्पराओं में चक्र-भेद (शैव, शाक्त, नाथ एवं वज्रयान)',
    transliteration: 'Vividha-Sampradāyeṣu Cakra-Bhedaḥ',
    subtitleEn: 'Comparative Study of 5, 6, 7, 9, 12 & 16+ Subtle-Body Models Across Classical Indian & Tibetan Traditions',
    subtitleHi: 'शैव आगम, शाक्त कौल, नाथ योग, योग-उपनिषद् एवं बौद्ध वज्रयान में चक्रों की विविध संख्याओं (५, ६, ७, ९, १२, १६) का तुलनात्मक विश्लेषण',
    accentColor: '#38BDF8',
    introductoryOverviewEn:
      'One of the most important findings of modern Tantric scholarship is that there is no single monolithic "chakra system" in pre-modern India. Rather, different lineages—Kashmir Śaivism, Kaula Śāktism, Nātha Haṭha Yoga, Pañcarātra Vaiṣṇavism, and Buddhist Vajrayāna—mapped the subtle body with 4, 5, 6, 7, 9, 12, or 16+ centres depending on the specific meditative ritual being performed.',
    introductoryOverviewHi:
      'आधुनिक तांत्रिक शोध का एक अत्यंत महत्त्वपूर्ण निष्कर्ष यह है कि प्राचीन भारत में चक्रों की केवल एक ही संख्या नहीं थी। कश्मीर शैव दर्शन, शाक्त कौल आगम, नाथ हठयोग, योग-उपनिषद् और बौद्ध वज्रयान में साधना की पद्धति के अनुसार ४, ५, ६, ७, ९, १२ अथवा १६ आधारों का वर्णन मिलता है।',
    historicalBackgroundEn:
      'As documented by scholars such as Gavin Flood (The Tantric Body), David Gordon White (The Alchemical Body), and James Mallinson (Roots of Yoga), subtle-body maps are prescriptive rather than merely descriptive: a text prescribes a specific number of lotuses along the central axis to match the number of elements (5), mantra-syllables, or cosmic worlds (lokas) used in that school’s visualization.',
    historicalBackgroundHi:
      'विद्वानों (गैविन फ्लड, डेविड गॉर्डन व्हाइट, जेम्स मैलिन्सन) के अनुसार तांत्रिक ग्रंथों के चक्र-मानचित्र साधना-सापेक्ष हैं—अर्थात् जिस सम्प्रदाय में पंचतत्त्वों की शुद्धि मुख्य है वहाँ ५ चक्र, जहाँ षडध्व या ६ योगिनियों का न्यास है वहाँ ६ चक्र, और जहाँ नाद-साधना मुख्य है वहाँ ९ या १२ चक्र बताए गए हैं।',
    traditionalExplanationEn:
      'Comparative Overview of Major Lineages:\n1. Śākta / Kaula 6+1 System (Kubjikāmata Tantra, Ṣaṭ-Cakra-Nirūpaṇa, Śiva Saṃhitā): 6 chakras (Mūlādhāra to Ājñā) + Sahasrāra, presided over by the 6 Yoginīs (Ḍākinī to Hākinī).\n2. Kashmir Śaiva / Netra Tantra & Trika System: Focuses on Dvādaśānta (the locus 12 finger-breadths above the crown), along with Kanda, Nābhi, Hṛdaya, Kaṇṭha, and Bhrūmadhya.\n3. Nātha Siddha 9-Chakra & 16-Ādhāra System (Siddha-Siddhānta-Paddhati & Gorakṣaśataka): Describes 9 chakras (Brahma, Svādhiṣṭhāna, Nābhi, Hṛdaya, Kaṇṭha, Tālu, Bhrū, Nirvāṇa, Ākāśa) alongside 16 Ādhāras, 3 Lakṣyas, and 5 Vyomas.\n4. Yoga Upaniṣads (Yoga-Kuṇḍalinī, Darśana, Śāṇḍilya, योगचूडामणि): Harmonize the 6-chakra system with Vedāntic non-dualism and Haṭha-yogic prāṇāyāma.\n5. Buddhist Vajrayāna (Hevajra & Cakrasaṃvara Tantras): Maps 4 or 5 primary wheels (Nirmāṇa-cakra at navel, Dharma-cakra at heart, Sambhoga-cakra at throat, Mahāsukha-cakra at crown) with channels Lalanā, Rasanā, and Avadhūtī.',
    traditionalExplanationHi:
      'प्रमुख परम्पराओं का तुलनात्मक विवरण:\n१. शाक्त / कौल ६+१ प्रणाली (कुब्जिकामत तंत्र, षट्चक्रनिरूपण, शिव संहिता): मूलाधार से आज्ञा तक ६ चक्र + सहस्रार, जिनमें डाकिनी से हाकिनी तक ६ योगिनियों का निवास है।\n२. कश्मीर शैव / नेत्र तंत्र प्रणाली: हृदय, कण्ठ, तालु, भ्रूमध्य और मस्तक से १२ अंगुल ऊपर स्थित "द्वादशान्त" पर विशेष बल।\n३. नाथ सिद्ध ९-चक्र एवं १६-आधार प्रणाली (सिद्धसिद्धान्तपद्धति एवं गोरक्षशतक): ९ चक्र (ब्रह्म, स्वाधिष्ठान, नाभि, हृदय, कण्ठ, तालु, भ्रू, निर्वाण, आकाश) तथा १६ आधार, ३ लक्ष्य और ५ व्योम।\n४. योग उपनिषद् (योगचूडामणि, योगकुण्डलिनी, दर्शन उपनिषद्): वेदान्त और षट्चक्र-योग का समन्वय।\n५. बौद्ध वज्रयान (हेवज्र एवं चक्रसंवर तंत्र): ४ प्रमुख चक्र—निर्माण-चक्र (नाभि), धर्म-चक्र (हृदय), संभोग-चक्र (कण्ठ) और महासुख-चक्र (उष्णीष/मस्तक); तथा ललना, रसना और अवधूती नाड़ियाँ।',
    sanskritTerminology: [
      {
        termDevanagari: 'षोड्श आधार',
        termIAST: 'Ṣoḍaśa Ādhāra',
        definitionEn: 'Sixteen vital support points from the big toes to the crown taught in Nātha Haṭha Yoga (Gorakṣaśataka).',
        definitionHi: 'नाथ हठयोग (गोरक्षशतक) में वर्णित पादांगुष्ठ से ब्रह्मरन्ध्र तक के १६ प्राण-आधार।'
      },
      {
        termDevanagari: 'द्वादशान्त',
        termIAST: 'Dvādaśānta',
        definitionEn: 'In Kashmir Śaivism, the transcendent point twelve finger-widths (aṅgulas) above the crown of the head.',
        definitionHi: 'कश्मीर शैव आगम में मस्तक के शिखर से बारह अंगुल ऊपर स्थित परमशिव-बिन्दु।'
      }
    ],
    iconographyAndSymbolismEn:
      'While the Śākta 6+1 system emphasizes the 50 Sanskrit letters across 4, 6, 10, 12, 16, and 2 petals, the Nātha 9-chakra system emphasizes internal cosmic spaces (vyoma) and the palate lotus (Tālu/Lalanā chakra) where lunar ambrosia is collected.',
    iconographyAndSymbolismHi:
      'जहाँ शाक्त षट्चक्र प्रणाली में ५० संस्कृत अक्षरों (४, ६, १०, १२, १६, २ दल) का न्यास प्रधान है, वहीं नाथ परम्परा की नव-चक्र प्रणाली में तालु-चक्र (ललना चक्र) और पंच-व्योम के ध्यान को विशेष महत्त्व दिया गया है।',
    diagramType: 'traditions-comparison',
    detailedSections: [
      {
        headingEn: '1. The 9-Chakra System of Siddha-Siddhānta-Paddhati',
        headingHi: '१. सिद्धसिद्धान्तपद्धति की नव-चक्र (९ चक्र) प्रणाली',
        bodyEn:
          'Attributed to Gorakṣanātha, the Siddha-Siddhānta-Paddhati (Ch. 2) enumerates nine chakras along the central axis: (1) Brahma-cakra at the base, (2) Svādhiṣṭhāna, (3) Nābhi-cakra, (4) Hṛdaya-cakra, (5) Kaṇṭha-cakra, (6) Tālu-cakra (at the uvula/palate), (7) Bhrū-cakra (eyebrows), (8) Nirvāṇa-cakra (Brahmarandhra), and (9) Ākāśa-cakra (above the crown). This highlights the crucial role of Tālu-cakra in Khecarī Mudrā.',
        bodyHi:
          'गोरक्षनाथ कृत "सिद्धसिद्धान्तपद्धति" (द्वितीय उपदेश) में ९ चक्र गिनाए गए हैं: (१) ब्रह्मचक्र, (२) स्वाधिष्ठान, (३) नाभिचक्र, (४) हृदयचक्र, (५) कण्ठचक्र, (६) तालुचक्र (घण्टिका मूल), (७) भ्रूचक्र, (८) निर्वाणचक्र (ब्रह्मरन्ध्र), और (९) आकाशचक्र (मस्तक से ऊपर)।'
      },
      {
        headingEn: '2. Why the 6+1 System Became Universal',
        headingHi: '२. ६+१ (सप्त-चक्र) प्रणाली के सर्वमान्य होने का कारण',
        bodyEn:
          'The 6+1 system of Kubjikāmata, Śāradā-Tilaka, Śiva Saṃhitā, and Ṣaṭ-Cakra-Nirūpaṇa achieved pan-Indian dominance because of its mathematical and philosophical symmetry: the lower five chakras map one-to-one onto the five Mahābhūtas (Earth, Water, Fire, Air, Space), the sixth maps onto Manas (Mind), and the petal counts (4 + 6 + 10 + 12 + 16 + 2) total exactly 50—the complete Sanskrit Mātṛkā alphabet.',
        bodyHi:
          'षट्चक्र + सहस्रार (६+१) प्रणाली के सर्वमान्य होने का मुख्य कारण इसका अद्भुत दार्शनिक और गणितीय सामंजस्य है: नीचे के ५ चक्र सीधे पंचमहाभूतों (पृथ्वी, जल, अग्नि, वायु, आकाश) से जुड़ते हैं, छठा चक्र "मनस्" से जुड़ता है, और इनके दलों का योग (४ + ६ + १० + १२ + १६ + २ = ५०) संस्कृत वर्णमाला के ५० मातृका अक्षरों के पूर्णतः बराबर होता है।'
      }
    ],
    relatedConceptsEn: ['Ṣoḍaśa Ādhāra', 'Navacakra', 'Dvādaśānta', 'Tālu / Lalanā Chakra', 'Vajrayāna Four Wheels'],
    relatedConceptsHi: ['षोडश आधार', 'नवचक्र', 'द्वादशान्त', 'तालु / ललना चक्र', 'वज्रयान चतुश्चक्र'],
    traditionalVsModernEn: {
      traditionalView: 'Plurality of valid subtle-body maps (5, 6, 7, 9, 12 centres) tailored to specific liturgical and yogic lineages.',
      modernView: 'Assumes there has only ever been a single fixed 7-chakra system.',
      scholarlyClarification: 'Recognizing multiple classical systems enriches our understanding of how Tantric masters used subtle anatomy as functional contemplative cartography.'
    },
    distinctionsAndMisconceptionsEn: [
      'Finding a 5-chakra or 9-chakra list in a Sanskrit manuscript is not an "error"—it reflects a distinct Āgamic or Nātha lineage.',
      'Buddhist Vajrayāna works predominantly with 4 or 5 centres because its system models the Trikāya (three bodies of a Buddha).'
    ],
    distinctionsAndMisconceptionsHi: [
      'संस्कृत ग्रंथों में ५, ६, ७ या ९ चक्रों का मिलना विरोधाभास नहीं, अपितु विभिन्न साधना-परम्पराओं (शैव, शाक्त, नाथ) की विशिष्टता है।',
      'बौद्ध तंत्र में बुद्ध के त्रिकाय (निर्माणकाय, संभोगकाय, धर्मकाय) के अनुरूप ४ प्रमुख चक्र माने गए हैं।'
    ],
    referencesAndReading: [
      'Gorakṣanātha, Siddha-Siddhānta-Paddhati, Chapter 2',
      'Kubjikāmata Tantra, Chapters 11–16 (ed. T. Goudriaan & J.A. Schoterman, 1988)',
      'Kurt Leland, Rainbow Body: A History of the Western Chakra System from Blavatsky to Brennan (2016)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'sat-cakra-nirupana-textual-study']
  },
  {
    id: 'article-part3-kundalini-yoga',
    slug: 'kundalini-yoga-subtle-anatomy',
    articleNumber: 'RESEARCH MONOGRAPH 03',
    partCategory: 'part3-thematic',
    titleEn: 'Kuṇḍalinī Yoga — Nāḍīs, Prāṇa-Vāyus, Bandhas, Mudrās & Granthi-Bhedana',
    titleSanskrit: 'कुण्डलिनी योग — नाड़ी-शोधन, प्राण-वायु, बन्ध-मुद्रा एवं ग्रन्थि-भेदन',
    transliteration: 'Kuṇḍalinī-Yogaḥ — Nāḍī-Prāṇa-Bandha-Mudrā-Vijñānam',
    subtitleEn: 'Classical Haṭha-Yogic & Tantric Mechanics of Awakening Kuṇḍalinī Through Suṣumṇā',
    subtitleHi: 'हठयोगप्रदीपिका, शिव संहिता एवं योगकुण्डलिनी उपनिषद् के अनुसार कुण्डलिनी-जागरण एवं सुषुम्णा-प्रवेश का शास्त्रीय विज्ञान',
    accentColor: '#EF4444',
    introductoryOverviewEn:
      'In classical Haṭha Yoga and Śākta Tantra, every practice—āsana, nāḍī-śodhana, prāṇāyāma, mudrā, bandha, and mantra-japa—has a single overarching purpose: purifying the subtle channels, arresting the restless oscillation of breath between Iḍā and Piṅgalā, and awakening Kuṇḍalinī Śakti so that prāṇa and mind enter the central channel of Suṣumṇā (Haṭha Yoga Pradīpikā 3.1–5).',
    introductoryOverviewHi:
      'शास्त्रीय हठयोग और शाक्त तंत्र में आसन, नाड़ी-शोधन, प्राणायाम, मुद्रा, बन्ध और मंत्र-जाप का एक ही सर्वोच्च उद्देश्य बताया गया है—इड़ा और पिंगला में भटकने वाले प्राण को सम करके सुषुम्णा का द्वार खोलना और मूलाधार में सुप्त कुण्डलिनी शक्ति को जाग्रत कर सहस्रार में परमशिव से मिलाना (हठयोगप्रदीपिका ३.१–५)।',
    historicalBackgroundEn:
      'Synthesized across texts such as the Gorakṣaśataka (13th c.), Śiva Saṃhitā (14th–15th c.), Svātmārāma’s Haṭha Yoga Pradīpikā (15th c.), Gheraṇḍa Saṃhitā (17th c.), and the Yoga-Kuṇḍalinī Upaniṣad, Kuṇḍalinī Yoga unites the energetic mechanics of prāṇa and apāna with the sonic mechanics of Nāda-anusandhāna.',
    historicalBackgroundHi:
      'गोरक्षशतक, शिव संहिता, स्वात्माराम कृत हठयोगप्रदीपिका (१५वीं शती), घेरण्ड संहिता और योगकुण्डलिनी उपनिषद् में प्राण-अपान के संयोग तथा बन्ध-मुद्राओं द्वारा कुण्डलिनी-उत्थान की संपूर्ण विधि लिपिबद्ध है।',
    traditionalExplanationEn:
      'In ordinary life, Prāṇa Vāyu moves upward in the chest while Apāna Vāyu moves downward in the pelvis, and breath alternates between the lunar left nostril (Iḍā) and solar right nostril (Piṅgalā). Through Mūla Bandha (root lock), Uḍḍīyāna Bandha (abdominal upward lock), and Jālandhara Bandha (throat lock) combined with Kumbhaka (breath retention), Apāna is drawn upward and Prāṇa is forced downward to meet at the navel furnace (Maṇipūra). This alchemical union generates subtle heat (tapas) that warms Mūlādhāra, awakening Kuṇḍalinī to hiss like a serpent touched by a staff and enter the Brahmadvāra of Suṣumṇā.',
    traditionalExplanationHi:
      'सामान्य अवस्था में प्राण-वायु ऊपर (हृदय/कण्ठ) की ओर और अपान-वायु नीचे (मूलाधार) की ओर गति करती है। मूलबन्ध, उड्डीयान बन्ध और जालन्धर बन्ध (महाबन्ध) तथा कुम्भक के अभ्यास से साधक अपान को ऊपर खींचता है और प्राण को नीचे दबाकर नाभि-मण्डल की अग्नि के साथ संयुक्त करता है। प्राण और अपान के इस संयोग से उत्पन्न तांत्रिक ऊष्मा (तप) से मूलाधार की कुण्डलिनी जाग्रत होकर ब्रह्मद्वार का भेदन करती हुई सुषुम्णा में प्रवेश करती है।',
    sanskritTerminology: [
      {
        termDevanagari: 'ब्रह्मद्वार',
        termIAST: 'Brahmadvāra',
        definitionEn: 'The subtle entrance to the central channel (Suṣumṇā / Citriṇī) at Mūlādhāra, guarded by sleeping Kuṇḍalinī.',
        definitionHi: 'मूलाधार में सुषुम्णा (ब्रह्मनाड़ी) का सूक्ष्म प्रवेश-द्वार, जिसे सुप्त कुण्डलिनी अपने मुख से ढके रहती है।'
      },
      {
        termDevanagari: 'बंध-त्रय',
        termIAST: 'Bandha-Traya',
        definitionEn: 'The triad of locks—Mūla Bandha (perineal), Uḍḍīyāna Bandha (abdominal), and Jālandhara Bandha (cervical)—sealing prāṇa in Suṣumṇā.',
        definitionHi: 'मूलबन्ध, उड्डीयान बन्ध और जालन्धर बन्ध—ये तीनों मिलकर प्राण को सुषुम्णा में स्थिर करते हैं।'
      },
      {
        termDevanagari: 'दश प्राण-वायु',
        termIAST: 'Daśa Prāṇa-Vāyu',
        definitionEn: 'Five major vital winds (Prāṇa, Apāna, Samāna, Udāna, Vyāna) and five minor winds (Nāga, Kūrma, Kṛkara, Devadatta, Dhanañjaya).',
        definitionHi: '५ मुख्य प्राण (प्राण, अपान, समान, उदान, व्यान) एवं ५ उपप्राण (नाग, कूर्म, कृकर, देवदत्त, धनञ्जय)।'
      }
    ],
    iconographyAndSymbolismEn:
      'Haṭha Yoga Pradīpikā (3.1) compares Kuṇḍalinī to Ananta-Śeṣa: just as the cosmic serpent supports the entire universe with its mountains and forests, so Kuṇḍalinī is the foundational support (ādhāra) of all yoga tantras.',
    iconographyAndSymbolismHi:
      'हठयोगप्रदीपिका (३.१) में कहा गया है—"यथा हि भुजगेन्द्रस्य भृता पृथ्वी वनाचला। तथा कुण्डलिनी नाम्ना सर्वयोगतन्त्राश्रिता॥" अर्थात् जैसे शेषनाग पर्वतों व वनों सहित संपूर्ण पृथ्वी को धारण करते हैं, वैसे ही कुण्डलिनी समस्त योग-तंत्रों का आधार है।',
    diagramType: 'kundalini-granthis',
    detailedSections: [
      {
        headingEn: '1. The Five Major Prāṇa-Vāyus & Their Chakra Seats',
        headingHi: '१. पंच-प्राण एवं उनके चक्र-स्थान',
        bodyEn:
          '• Prāṇa Vāyu: Seated in Anāhata (Heart); governs inhalation and inward vital reception.\n• Apāna Vāyu: Seated in Mūlādhāra / Svādhiṣṭhāna (Pelvis); governs grounding and elimination.\n• Samāna Vāyu: Seated in Maṇipūra (Navel); balances Prāṇa and Apāna and fuels digestive fire.\n• Udāna Vāyu: Seated in Viśuddha (Throat); governs vocal expression and upward ascent at liberation.\n• Vyāna Vāyu: Pervades the entire subtle body through all 72,000 nāḍīs.',
        bodyHi:
          '• प्राण वायु: अनाहत (हृदय) में स्थित; श्वास-ग्रहण का संचालक।\n• अपान वायु: मूलाधार एवं स्वाधिष्ठान में स्थित; अधोगति व उत्सर्जन का संचालक।\n• समान वायु: मणिपूर (नाभि) में स्थित; प्राण-अपान का संतुलन एवं जठराग्नि का पोषक।\n• उदान वायु: विशुद्ध (कण्ठ) में स्थित; वाणी एवं ऊर्ध्वगमन का संचालक।\n• व्यान वायु: समस्त ७२,००० नाड़ियों में व्याप्त।'
      },
      {
        headingEn: '2. Traditional Caution: Qualified Guidance & Preparation',
        headingHi: '२. शास्त्रीय सावधानी: अधिकारी-भेद एवं गुरु-मार्गदर्शन',
        bodyEn:
          'All classical texts (Haṭha Yoga Pradīpikā, Śiva Saṃhitā, Yoga-Kuṇḍalinī Upaniṣad) emphasize that advanced kumbhaka, bandha, and Kuṇḍalinī practices require ethical foundation (yama-niyama), purification of the nāḍīs (nāḍī-śuddhi), balanced diet (mitāhāra), and direct instruction from an experienced lineage teacher (Guru).',
        bodyHi:
          'हठयोगप्रदीपिका, शिव संहिता और योगकुण्डलिनी उपनिषद् स्पष्ट निर्देश देते हैं कि कुम्भक, बन्ध और कुण्डलिनी-जागरण की उच्च साधनाओं के लिए यम-नियम का पालन, मिताहार, नाड़ी-शुद्धि और अनुभवी गुरु का प्रत्यक्ष मार्गदर्शन अनिवार्य है।'
      }
    ],
    relatedConceptsEn: ['Mūla Bandha', 'Uḍḍīyāna Bandha', 'Jālandhara Bandha', 'Khecarī Mudrā', 'Kevala Kumbhaka', 'Nāḍī-Śodhana'],
    relatedConceptsHi: ['मूलबन्ध', 'उड्डीयान बन्ध', 'जालन्धर बन्ध', 'खेचरी मुद्रा', 'केवल कुम्भक', 'नाड़ी-शोधन'],
    traditionalVsModernEn: {
      traditionalView: 'Systematic lifelong discipline integrating ethical purification, nāḍī-śodhana, bandhas, mudrās, and guru-guided samādhi.',
      modernView: 'Sometimes marketed in contemporary workshops as an instant cathartic experience or quick energetic fix.',
      scholarlyClarification: 'Classical Sanskrit sources stress gradual purification of the subtle channels (Nāḍī-śuddhi) before attempting forceful prāṇic retention.'
    },
    distinctionsAndMisconceptionsEn: [
      'Kuṇḍalinī is not a physical electrical current in the spinal cord; it is conscious Śakti (Cit-Śakti) operating in the subtle body.',
      'In classical yoga, the goal of Kuṇḍalinī ascent is non-dual liberation (Samādhi / Mokṣa), not chasing psychic phenomena.'
    ],
    distinctionsAndMisconceptionsHi: [
      'कुण्डलिनी रीढ़ की हड्डी का कोई भौतिक विद्युत-प्रवाह नहीं, अपितु सूक्ष्म शरीर में क्रियाशील परा-चित्-शक्ति है।',
      'शास्त्रीय योग में कुण्डलिनी-जागरण का लक्ष्य अद्वैत समाधि और मोक्ष है, न कि केवल चमत्कारिक सिद्धियों का प्रदर्शन।'
    ],
    referencesAndReading: [
      'Svātmārāma, Haṭha Yoga Pradīpikā, Chapters 2–4',
      'Yoga-Kuṇḍalinī Upaniṣad, Chapters 1–3',
      'Gorakṣaśataka (ed. & trans. James Mallinson)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'chakras-mantra-and-meditation']
  },
  {
    id: 'article-part3-five-mahabhutas',
    slug: 'five-mahabhutas-and-chakras',
    articleNumber: 'RESEARCH MONOGRAPH 04',
    partCategory: 'part3-thematic',
    titleEn: 'The Five Mahābhūtas and the Chakras — Elemental Tattvas & Bhūta-Śuddhi',
    titleSanskrit: 'पंचमहाभूत एवं चक्र-विज्ञान — तत्त्व-लम्-वम्-रम्-यम्-हम् एवं भूत-शुद्धि',
    transliteration: 'Pañca-Mahābhūta-Cakra-Sambandhaḥ & Bhūta-Śuddhiḥ',
    subtitleEn: 'How Earth, Water, Fire, Air, Space & Mind Map onto the Six Chakras in Sāṃkhya & Tantric Cosmology',
    subtitleHi: 'पृथ्वी, जल, अग्नि, वायु, आकाश एवं मनस् का षट्चक्रों के साथ तात्त्विक संबंध तथा तांत्रिक "भूत-शुद्धि" की प्रक्रिया',
    accentColor: '#22C55E',
    introductoryOverviewEn:
      'The lower five chakras of the classical system form a precise vertical ladder of the five great cosmic elements (Pañca-Mahābhūtas) arranged from grossest to subtlest: Earth (Pṛthvī) at Mūlādhāra, Water (Āpas) at Svādhiṣṭhāna, Fire (Agni) at Maṇipūra, Air (Vāyu) at Anāhata, and Space/Ether (Ākāśa) at Viśuddha, followed by the subtle Mind (Manas) at Ājñā and Pure Consciousness (Cit) at Sahasrāra.',
    introductoryOverviewHi:
      'शास्त्रीय षट्चक्र प्रणाली के प्रथम पाँच चक्र सृष्टि के पंचमहाभूतों का स्थूल से सूक्ष्म की ओर एक सटीक ऊर्ध्वगामी सोपान निर्मित करते हैं: मूलाधार में पृथ्वी (लं), स्वाधिष्ठान में जल (वं), मणिपूर में अग्नि (रं), अनाहत में वायु (यं), और विशुद्ध में आकाश (हं)—जिसके ऊपर आज्ञा चक्र में मनस् (ॐ) और सहस्रार में तत्त्वातीत चित्-शक्ति स्थित है।',
    historicalBackgroundEn:
      'Rooted in the Taittirīya Upaniṣad (2.1: "From Ātman arose Ākāśa; from Ākāśa, Vāyu; from Vāyu, Agni; from Agni, Āpas; from Āpas, Pṛthvī") and Sāṃkhya-Tantra cosmology, this elemental hierarchy forms the basis of Bhūta-śuddhi—the daily Tantric ritual in which the practitioner meditatively dissolves each element into its subtler source before worshipping the deity.',
    historicalBackgroundHi:
      'तैत्तिरीय उपनिषद् (२.१—"तस्माद्वा एतस्मादात्मन आकाशः संभूतः। आकाशाद्वायुः। वायोरग्निः। अग्नेरापः। अद्भ्यः पृथिवी॥") और सांख्य-तंत्र दर्शन पर आधारित यह पंचतत्त्व-क्रम तांत्रिक साधना के "भूत-शुद्धि" विधान का मूल आधार है।',
    traditionalExplanationEn:
      'Complete Elemental Concordance across the Chakras:\n1. Mūlādhāra — Pṛthvī (Earth): Yellow Square (Caturaśra) · Bīja Laṃ (लं) · Tanmātra: Gandha (Smell) · Mount: Airāvata Elephant.\n2. Svādhiṣṭhāna — Āpas (Water): White Crescent Moon (Ardha-candra) · Bīja Vaṃ (वं) · Tanmātra: Rasa (Taste) · Mount: Makara.\n3. Maṇipūra — Agni (Fire): Red Inverted Triangle (Trikoṇa) · Bīja Raṃ (रं) · Tanmātra: Rūpa (Form/Sight) · Mount: Ram (Meṣa).\n4. Anāhata — Vāyu (Air): Smoky Six-Pointed Star (Ṣaṭkoṇa) · Bīja Yaṃ (यं) · Tanmātra: Sparśa (Touch) · Mount: Black Antelope.\n5. Viśuddha — Ākāśa (Space): Full-Moon White Circle (Vṛtta) · Bīja Haṃ (हं) · Tanmātra: Śabda (Sound) · Mount: White Elephant.\n6. Ājñā — Manas (Subtle Mind): Crystalline Liṅga in Triangle · Bīja Oṃ (ॐ) · Transcends the 5 gross elements.\n7. Sahasrāra — Tattvātīta (Pure Consciousness): Beyond all 36 Tattvas.',
    traditionalExplanationHi:
      'षट्चक्र एवं पंचमहाभूतों का संपूर्ण समन्वय:\n१. मूलाधार — पृथ्वी तत्त्व: पीत चतुष्कोण · बीज "लं" · तन्मात्रा: गन्ध · वाहन: ऐरावत गज।\n२. स्वाधिष्ठान — जल तत्त्व: श्वेत अर्धचन्द्र · बीज "वं" · तन्मात्रा: रस · वाहन: मकर।\n३. मणिपूर — अग्नि तत्त्व: रक्त त्रिकोण · बीज "रं" · तन्मात्रा: रूप · वाहन: मेष।\n४. अनाहत — वायु तत्त्व: धूम्र षट्कोण · बीज "यं" · तन्मात्रा: स्पर्श · वाहन: कृष्णसार मृग।\n५. विशुद्ध — आकाश तत्त्व: श्वेत वृत्त · बीज "हं" · तन्मात्रा: शब्द · वाहन: श्वेत गज।\n६. आज्ञा — मनस् तत्त्व: प्रणव "ॐ" · पंचमहाभूतों से परे सूक्ष्म अन्तःकरण।\n७. सहस्रार — तत्त्वातीत परब्रह्म: समस्त ३६ तत्त्वों का लय-स्थान।',
    sanskritTerminology: [
      {
        termDevanagari: 'भूत-शुद्धि',
        termIAST: 'Bhūta-Śuddhi',
        definitionEn: 'Purification of the five elements by dissolving Earth into Water, Water into Fire, Fire into Air, Air into Space, and Space into Mind/Consciousness.',
        definitionHi: 'पृथ्वी को जल में, जल को अग्नि में, अग्नि को वायु में, वायु को आकाश में और आकाश को मन/चैतन्य में लय कर सूक्ष्म देह का शोधन करना।'
      },
      {
        termDevanagari: 'तन्मात्रा',
        termIAST: 'Tanmātra',
        definitionEn: 'The five subtle sensory potentials—Smell (Gandha), Taste (Rasa), Form (Rūpa), Touch (Sparśa), and Sound (Śabda).',
        definitionHi: 'पंचमहाभूतों के सूक्ष्म तन्मात्र—गन्ध, रस, रूप, स्पर्श और शब्द।'
      }
    ],
    iconographyAndSymbolismEn:
      'Notice how the traditional colours of the inner geometric mandalas reflect the natural qualities of the elements in Āgamic science: Earth is yellow like fertile clay/gold, Water is white like moonlit water, Fire is blazing red, Air is smoky grey like wind-borne mist, and Ether is translucent white.',
    iconographyAndSymbolismHi:
      'ध्यान दें कि आगम शास्त्र में प्रत्येक तत्त्व-मण्डल का रंग और आकार उसके प्राकृतिक गुण को दर्शाता है—पृथ्वी का पीला चतुष्कोण (स्थिरता), जल का श्वेत अर्धचन्द्र (शीतलता), अग्नि का लाल त्रिकोण (ऊर्ध्वमुखी ज्वाला), वायु का धूम्र षट्कोण (गतिशील विस्तार) और आकाश का श्वेत वृत्त (अनंत शून्यता)।',
    diagramType: 'five-mahabhutas',
    detailedSections: [
      {
        headingEn: '1. The Process of Laya-Krama (Ascending Dissolution)',
        headingHi: '१. लय-क्रम (स्थूल से सूक्ष्म में विलय) की प्रक्रिया',
        bodyEn:
          'In Tantric pūjā and meditation, "Nādevo devam arcayet" ("None who is not divine may worship the Divine"). Therefore, the practitioner performs Bhūta-śuddhi along the chakras: raising Kuṇḍalinī from Mūlādhāra, they dissolve Earth (plus smell, nose, feet) into Water at Svādhiṣṭhāna; Water into Fire at Maṇipūra; Fire into Air at Anāhata; Air into Space at Viśuddha; Space into Ahaṅkāra/Mahat at Ājñā; and finally into Para-Śiva at Sahasrāra.',
        bodyHi:
          'तांत्रिक उपासना का सिद्धांत है—"नादेवो देवमर्चयेत्" (देव बने बिना देवता की पूजा नहीं होती)। अतः साधक भूत-शुद्धि के अंतर्गत मूलाधार से कुण्डलिनी को उठाते हुए पृथ्वी को स्वाधिष्ठान के जल में, जल को मणिपूर की अग्नि में, अग्नि को अनाहत की वायु में, वायु को विशुद्ध के आकाश में, और आकाश को आज्ञा से होते हुए सहस्रार के परब्रह्म में लय करता है।'
      }
    ],
    relatedConceptsEn: ['Pañca-Mahābhūta', 'Bhūta-Śuddhi', 'Tanmātra', 'Jñānendriya & Karmendriya', 'Laya-Yoga'],
    relatedConceptsHi: ['पंचमहाभूत', 'भूत-शुद्धि', 'पंच-तन्मात्रा', 'ज्ञानेन्द्रिय एवं कर्मेन्द्रिय', 'लय-योग'],
    traditionalVsModernEn: {
      traditionalView: 'Elemental yantras have specific classical colours (Yellow Earth, White Water, Red Fire, Smoky Air, White Ether) used for Bhūta-śuddhi dissolution.',
      modernView: 'Replaces the classical elemental colours with the 7-colour rainbow spectrum.',
      scholarlyClarification: 'Understanding the classical elemental colours explains why a traditional Tantric painting of Maṇipūra shows a red triangle inside blue petals rather than a monochrome yellow wheel.'
    },
    distinctionsAndMisconceptionsEn: [
      'Ājñā and Sahasrāra are not associated with gross physical elements like "light" or "thought" in Sāṃkhya—they correspond to Manas (Mind) and Transcendent Consciousness (Cit).',
      'Each elemental bīja (Laṃ, Vaṃ, Raṃ, Yaṃ, Haṃ) is acoustically linked to the place of articulation in the Sanskrit vocal tract.'
    ],
    distinctionsAndMisconceptionsHi: [
      'सांख्य और तंत्र में आज्ञा और सहस्रार पंचमहाभूतों से ऊपर क्रमशः "मनस्" और "तत्त्वातीत चित्" के केंद्र हैं।',
      'लं, वं, रं, यं, हं—ये पाँचों बीज-मंत्र संस्कृत ध्वनि-विज्ञान के उच्चारण-स्थानों से भी जुड़े हैं।'
    ],
    referencesAndReading: [
      'Taittirīya Upaniṣad, Brahmānanda Vallī (2.1)',
      'Śāradā Tilaka Tantra, Chapters 1 & 4 (Bhūta-śuddhi प्रकरण)',
      'Pūrṇānanda, Ṣaṭ-Cakra-Nirūpaṇa, Verses 4–31'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'lotus-petals-and-sanskrit-letters']
  },
  {
    id: 'article-part3-lotus-petals-sanskrit-letters',
    slug: 'lotus-petals-and-sanskrit-letters',
    articleNumber: 'RESEARCH MONOGRAPH 05',
    partCategory: 'part3-thematic',
    titleEn: 'Lotus Petals and Sanskrit Letters — The 50 Mātṛkā Phonemes Across the Chakras',
    titleSanskrit: 'कमल-दल एवं संस्कृत मातृका-वर्णमाला — पञ्चाशत् मातृका न्यास',
    transliteration: 'Padma-Dala-Pañcāśat-Mātṛkā-Vinyāsaḥ',
    subtitleEn: 'Why the Six Chakras Have 4, 6, 10, 12, 16 & 2 Petals (= 50 Letters) and Sahasrāra Has 1,000 (50 × 20)',
    subtitleHi: 'षट्चक्रों के ४, ६, १०, १२, १६ एवं २ दलों (= ५० अक्षर) तथा सहस्रार के १,००० दलों (५० × २०) का ध्वनि-वैज्ञानिक रहस्य',
    accentColor: '#C084FC',
    introductoryOverviewEn:
      'Why does Mūlādhāra have 4 petals, Svādhiṣṭhāna 6, Maṇipūra 10, Anāhata 12, Viśuddha 16, and Ājñā 2? In Tantric Mantra-śāstra, the human body is a living lute (vīṇā) of sacred sound. The total number of petals across the six chakras is 4 + 6 + 10 + 12 + 16 + 2 = 50, corresponding one-to-one with the 50 primordial phonemes (Mātṛkā-varṇas) of the Sanskrit alphabet from A (अ) to Kṣa (क्ष).',
    introductoryOverviewHi:
      'मूलाधार में ४, स्वाधिष्ठान में ६, मणिपूर में १०, अनाहत में १२, विशुद्ध में १६ और आज्ञा चक्र में २ ही दल क्यों होते हैं? तांत्रिक मंत्र-शास्त्र के अनुसार मानव का सूक्ष्म शरीर शब्दब्रह्म की जीवंत वीणा है। इन छहों चक्रों के दलों का कुल योग ४ + ६ + १० + १२ + १६ + २ = ५० होता है, जो संस्कृत वर्णमाला के "अ" से "क्ष" तक के ५० मातृका अक्षरों के पूर्णतः बराबर है।',
    historicalBackgroundEn:
      'Developed in the Śāradā-Tilaka Tantra, Kubjikāmata Tantra, Tantrāloka of Abhinavagupta, and Pūrṇānanda’s Ṣaṭ-Cakra-Nirūpaṇa, the doctrine of Mātṛkā ("Little Mothers"—the sonic matrices of creation) teaches that cosmic consciousness (Parā-Vāk) differentiates into 50 phonetic energies that crystallize as the petals of the subtle lotuses.',
    historicalBackgroundHi:
      'शारदातिलक तंत्र, कुब्जिकामत तंत्र, अभिनवगुप्त के तंत्रालोक और पूर्णानन्द के षट्चक्रनिरूपण में प्रतिपादित "मातृका-विज्ञान" के अनुसार परा-वाक् (आद्या शक्ति) ५० ध्वनि-कलाओं (मातृकाओं) के रूप में प्रस्फुटित होकर सूक्ष्म शरीर के कमलों के दलों का निर्माण करती है।',
    traditionalExplanationEn:
      'Complete Distribution of the 50 Sanskrit Letters (Mātṛkās) with Bindu (Anusvāra):\n• Viśuddha (16 Petals — All 16 Vowels / Svaras): अं आं इं ईं उं ऊं ऋं ॠं ऌं ॡं एं ऐं ओं औं अं अः\n• Anāhata (12 Petals — First 12 Consonants, Ka-varga to Ṭha): कं खं गं घं ङं चं छं जं झं ञं टं ठं\n• Maṇipūra (10 Petals — Next 10 Consonants, Ḍa to Pha): डं ढं णं तं थं दं धं नं पं फं\n• Svādhiṣṭhāna (6 Petals — Next 6 Consonants, Ba to La): बं भं मं यं रं लं\n• Mūlādhāra (4 Petals — Next 4 Semivowel/Sibilants, Va to Sa): वं शं षं सं\n• Ājñā (2 Petals — Final 2 Letters, Ha and Kṣa): हं क्षं\n• Sahasrāra (1,000 Petals): All 50 letters repeated in 20 concentric octaves (50 × 20 = 1,000), symbolizing total sonic omniscience.',
    traditionalExplanationHi:
      'षट्चक्रों के ५० दलों पर ५० संस्कृत अक्षरों (अनुस्वार सहित) का संपूर्ण वितरण:\n• विशुद्ध चक्र (१६ दल — १६ स्वर): अं आं इं ईं उं ऊं ऋं ॠं ऌं ॡं एं ऐं ओं औं अं अः\n• अनाहत चक्र (१२ दल — क से ठ तक १२ व्यंजन): कं खं गं घं ङं चं छं जं झं ञं टं ठं\n• मणिपूर चक्र (१० दल — ड से फ तक १० व्यंजन): डं ढं णं तं थं दं धं नं पं फं\n• स्वाधिष्ठान चक्र (६ दल — ब से ल तक ६ व्यंजन): बं भं मं यं रं लं\n• मूलाधार चक्र (४ दल — व से स तक ४ वर्ण): वं शं षं सं\n• आज्ञा चक्र (२ दल — अंतिम २ वर्ण): हं क्षं\n• सहस्रार महापद्म (१,००० दल): उपर्युक्त ५० अक्षर × २० आवृत्तियाँ = १,००० दल।',
    sanskritTerminology: [
      {
        termDevanagari: 'मातृका',
        termIAST: 'Mātṛkā',
        definitionEn: 'The 50 phoneme-mothers of the Sanskrit alphabet, regarded in Tantra as the audible body of the Goddess (Mātṛkā-Śakti).',
        definitionHi: 'संस्कृत वर्णमाला के ५० अक्षर, जिन्हें तंत्र में भगवती का ध्वनि-शरीर (मातृका-शक्ति) माना जाता है।'
      },
      {
        termDevanagari: 'अन्तर्मातृका न्यास',
        termIAST: 'Antar-Mātṛkā Nyāsa',
        definitionEn: 'The contemplative placement of the 50 Sanskrit letters upon the petals of the six internal chakras.',
        definitionHi: 'ध्यान के माध्यम से षट्चक्रों के ५० दलों पर क्रमशः ५० संस्कृत अक्षरों की प्रतिष्ठा करने की तांत्रिक विधि।'
      }
    ],
    iconographyAndSymbolismEn:
      'In each lotus, the letters are read clockwise around the petals starting from the topmost petal (with specific liturgical rules for Haṃ and Kṣaṃ at Ājñā). When Kuṇḍalinī rises through a chakra, she "reads" or resorbs its letters back into unmanifest Parā-Vāk.',
    iconographyAndSymbolismHi:
      'प्रत्येक कमल के दलों पर ये अक्षर प्रदक्षिणा-क्रम (दक्षिणावर्त) से अंकित होते हैं। जब कुण्डलिनी नीचे से ऊपर उठती है, तो वह वैखरी, मध्यमा और पश्यन्ती वाणी के इन अक्षरों को समेटती हुई परा-वाक् में लय कर देती है।',
    diagramType: 'fifty-letters-lotus',
    detailedSections: [
      {
        headingEn: '1. Four Levels of Sacred Speech (Parā, Paśyantī, Madhyamā, Vaikharī)',
        headingHi: '१. वाणी के चार स्तर: परा, पश्यन्ती, मध्यमा एवं वैखरी',
        bodyEn:
          'According to the Prapañcasāra and Śāradā-Tilaka Tantras, sound evolves through four subtle stations along the chakras:\n• Parā Vāk (Supreme Unmanifest Sound): Resides in Mūlādhāra as motionless Kuṇḍalinī.\n• Paśyantī Vāk (Visionary Sound): Rises to the navel (Maṇipūra), where sound and meaning are still undifferentiated.\n• Madhyamā Vāk (Intermediate Mental Sound): Vibrates in the heart (Anāhata) as internal thought and unstruck Nāda.\n• Vaikharī Vāk (Articulated Speech): Emerges at the throat (Viśuddha) and mouth as the 50 spoken Sanskrit phonemes.',
        bodyHi:
          'प्रपञ्चसार और शारदातिलक तंत्र के अनुसार चक्रों में वाणी के चार सोपान हैं:\n• परा वाक्: मूलाधार में कुण्डलिनी रूप में स्थित अव्यक्त नाद।\n• पश्यन्ती वाक्: नाभि (मणिपूर) में उठने वाली एकीभूत इच्छा-शक्ति रूपी वाणी।\n• मध्यमा वाक्: हृदय (अनाहत) में चिन्तन और अनाहत-नाद के रूप में स्पंदित होने वाली ज्ञान-शक्ति।\n• वैखरी वाक्: कण्ठ (विशुद्ध) और मुख से ५० अक्षरों के रूप में प्रकट होने वाली क्रिया-शक्ति।'
      }
    ],
    relatedConceptsEn: ['Mātṛkā-Śakti', 'Antar-Mātṛkā Nyāsa', 'Parā, Paśyantī, Madhyamā, Vaikharī', 'Akṣamālā (A to Kṣa)'],
    relatedConceptsHi: ['मातृका-शक्ति', 'अन्तर्मातृका न्यास', 'परा-पश्यन्ती-मध्यमा-वैखरी', 'अक्षमाला (अ से क्ष)'],
    traditionalVsModernEn: {
      traditionalView: 'Petal counts are determined strictly by the distribution of the 50 Sanskrit letters (4+6+10+12+16+2 = 50).',
      modernView: 'Sometimes speculates that petal counts represent nerve-bundle branches in anatomical plexuses.',
      scholarlyClarification: 'The 4+6+10+12+16+2 = 50 arithmetic proves beyond doubt that the petal structure is rooted in Sanskrit phonetics and Antar-mātṛkā-nyāsa.'
    },
    distinctionsAndMisconceptionsEn: [
      'Every petal letter in the chakras carries the nasalized Bindu (anusvāra, ं) to signify its union with Śiva-consciousness.',
      'The rosary name "Akṣamālā" literally means the garland of letters from A (अ) to Kṣa (क्ष)—the exact span of the chakra petals.'
    ],
    distinctionsAndMisconceptionsHi: [
      'चक्रों के दलों पर स्थित प्रत्येक अक्षर के ऊपर बिन्दु (अनुस्वार) लगा होता है जो शिव-तत्त्व के साथ उसके संयोग का प्रतीक है।',
      '"अक्षमाला" शब्द का शाब्दिक अर्थ ही "अ" से लेकर "क्ष" तक के ५० मातृका अक्षरों की माला है।'
    ],
    referencesAndReading: [
      'Śāradā Tilaka Tantra, Chapters 2 & 5 (Mātṛkā-utpatti)',
      'Abhinavagupta, Tantrāloka, Āhnika 3 (Parādvaita & Mātṛkā-cakra)',
      'Arthur Avalon, The Garland of Letters (Varṇamālā): Studies in the Mantra-Śāstra (1922)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'chakras-mantra-and-meditation']
  },
  {
    id: 'article-part3-chakras-mantra-meditation',
    slug: 'chakras-mantra-and-meditation',
    articleNumber: 'RESEARCH MONOGRAPH 06',
    partCategory: 'part3-thematic',
    titleEn: 'Chakras, Mantra and Meditation — Bīja Mantras, Dhyāna, Prāṇa & Nādānusandhāna',
    titleSanskrit: 'चक्र, मंत्र एवं ध्यान-विज्ञान — बीज-मंत्र, धारणा एवं नादानुसंधान',
    transliteration: 'Cakra-Mantra-Dhyāna-Nādānusandhānam',
    subtitleEn: 'How Seed Syllables (Laṃ, Vaṃ, Raṃ, Yaṃ, Haṃ, Oṃ), Yantric Visualization & Inner Sound Function in Classical Contemplation',
    subtitleHi: 'तत्त्व-बीज मंत्रों (लं, वं, रं, यं, हं, ॐ), यंत्र-धारणा, प्राण-संयम और अनाहत नाद के अनुसंधान की पारम्परिक विधि',
    accentColor: '#6366F1',
    introductoryOverviewEn:
      'In traditional Yoga and Tantra, a chakra is never contemplated in isolation from its sonic counterpart (Mantra) and geometric counterpart (Yantra). Through the triad of Mantra (seed sound), Yantra (lotus and elemental diagram), and Devatā (presiding form of consciousness), the practitioner stabilizes attention (Dhāraṇā) and deepens into contemplative absorption (Dhyāna and Samādhi).',
    introductoryOverviewHi:
      'पारम्परिक योग और तंत्र में किसी भी चक्र का ध्यान उसके ध्वनि-स्वरूप (बीज मंत्र), ज्यामितीय स्वरूप (यंत्र-मण्डल) और चैतन्य-स्वरूप (अधिष्ठाता देवता) के समन्वय से किया जाता है। मंत्र, यंत्र और देवता की इस त्रिवेणी के माध्यम से साधक की धारणा क्रमशः ध्यान और समाधि में परिणत होती है।',
    historicalBackgroundEn:
      'Detailed across the Yoga-Tattva Upaniṣad (vv. 83–102),Triśikhibrāhmaṇa Upaniṣad, Śiva Saṃhitā (Ch. 5), and Haṭha Yoga Pradīpikā (Ch. 4), elemental dhāraṇā (Pañca-tattva-dhāraṇā) and Nādānusandhāna (meditation on the inner unstruck sound) represent the culmination of internal yoga.',
    historicalBackgroundHi:
      'योगतत्त्व उपनिषद् (श्लोक ८३–१०२), त्रिशिखिब्राह्मण उपनिषद्, शिव संहिता (अध्याय ५) और हठयोगप्रदीपिका (अध्याय ४) में पंचतत्त्व-धारणा और नादानुसंधान का विस्तृत विधान वर्णित है।',
    traditionalExplanationEn:
      'Four Pillars of Chakra Contemplation:\n1. Bīja-Mantra Japa & Nyāsa: Resonating the seed syllables—Laṃ (लं) at Mūlādhāra, Vaṃ (वं) at Svādhiṣṭhāna, Raṃ (रं) at Maṇipūra, Yaṃ (यं) at Anāhata, Haṃ (हं) at Viśuddha, and Oṃ (ॐ) at Ājñā—mostly in mental (mānasa) or breath-synchronized (ajapā-gāyatrī: So’haṃ / Haṃsa) awareness.\n2. Yantric Dhāraṇā: Fixing the inner eye on the geometric mandala and lotus petals of each centre.\n3. Prāṇa-Saṃyama: Uniting breath awareness with the specific locus along the central column.\n4. Nādānusandhāna (Contemplation of Unstruck Sound): Listening in the silence of Anāhata and Ājñā to the progressive stages of inner sound (Ārambha, Ghaṭa, Paricaya, Niṣpatti)—from the roar of the ocean and conch to the subtle flute, vīṇā, and bee-hum—until sound dissolves into the soundless Para-Brahman at Sahasrāra.',
    traditionalExplanationHi:
      'चक्र-ध्यान के चार प्रमुख स्तम्भ:\n१. बीज-मंत्र एवं अजपा-गायत्री: मूलाधार से आज्ञा तक क्रमशः "लं, वं, रं, यं, हं, ॐ" बीज मंत्रों अथवा श्वास-प्रश्वास के साथ "हंसः / सोऽहम्" (अजपा-जप) का मानसिक अनुसंधान।\n२. यंत्र एवं देवता धारणा: प्रत्येक चक्र के कमल-दलों, तत्त्व-यंत्र (चतुष्कोण, अर्धचन्द्र, त्रिकोण, षट्कोण, वृत्त) और इष्ट-देवता का स्पष्ट मानसिक दर्शन।\n३. पञ्च-धारणा (तत्त्व-संयम): पृथ्वी से आकाश तक के पाँचों तत्त्वों पर प्राण और चित्त को स्थिर करना।\n४. नादानुसंधान: अनाहत और आज्ञा चक्र में सुनाई देने वाले आंतरिक नाद (आरम्भ, घटा, परिचय और निष्पत्ति अवस्था—शंख, घण्टा, वंशी, वीणा और भ्रमर-गुंजार) के सहारे मन को सहस्रार के निःशब्द परब्रह्म में लय करना।',
    sanskritTerminology: [
      {
        termDevanagari: 'अजपा गायत्री (हंसः / सोऽहम्)',
        termIAST: 'Ajapā Gāyatrī (Haṃsaḥ / So’ham)',
        definitionEn: 'The spontaneous unrepeated mantra of inhalation (So / Haṃ) and exhalation (Haṃ / Saḥ) moving through the chakras 21,600 times daily.',
        definitionHi: 'श्वास के भीतर आने (सोऽहम्) और बाहर जाने (हंसः) के साथ प्रतिदिन २१,६०० बार स्वतः चलने वाला प्राण-मंत्र।'
      },
      {
        termDevanagari: 'नादानुसंधान',
        termIAST: 'Nādānusandhāna',
        definitionEn: 'Meditative absorption into the subtle inner unstruck sound (Anāhata Nāda) leading to Manolaya (dissolution of mind).',
        definitionHi: 'अनाहत नाद के श्रवण द्वारा चंचल मन को एकाग्र कर समाधि में लय करने की सर्वोत्तम योग-विधि (हठयोगप्रदीपिका ४.६५)।'
      }
    ],
    iconographyAndSymbolismEn:
      'In the Haṃsa Upaniṣad and Vijñāna Bhairava Tantra, the breath moving between Mūlādhāra and Sahasrāra is envisioned as the royal swan (Haṃsa) ascending and descending the golden pillar of Suṣumṇā.',
    iconographyAndSymbolismHi:
      'हंसोपनिषद् और विज्ञानभैरव तंत्र में मूलाधार से सहस्रार तक आने-जाने वाली प्राण-शक्ति को सुषुम्णा के स्वर्ण-स्तम्भ पर विचरण करने वाले "परमहंस" के रूप में चित्रित किया गया है।',
    diagramType: 'three-nadis',
    detailedSections: [
      {
        headingEn: '1. The Four Stages of Nāda Yoga (Ārambha to Niṣpatti)',
        headingHi: '१. नाद-योग की चार अवस्थाएँ (आरम्भ, घटा, परिचय, निष्पत्ति)',
        bodyEn:
          'Haṭha Yoga Pradīpikā (4.69–79) maps four stages corresponding to the piercing of the three Granthis along the chakras:\n1. Ārambha-avasthā: Brahma Granthi is pierced at Mūlādhāra; unstruck tinkling jewels and ocean sounds arise.\n2. Ghaṭa-avasthā: Prāṇa enters the middle channel and Viṣṇu Granthi is pierced at Anāhata; kettle-drum and conch sounds resonate.\n3. Paricaya-avasthā: Drum-like and flute sounds heard in the space between the eyebrows.\n4. Niṣpatti-avasthā: Rudra Granthi is pierced at Ājñā; Prāṇa reaches Sahasrāra amidst the subtle sound of a vīṇā, culminating in Rāja-Yoga Samādhi.',
        bodyHi:
          'हठयोगप्रदीपिका (४.६९–७९) में तीनों ग्रन्थियों के भेदन के अनुसार चार अवस्थाएँ वर्णित हैं:\n१. आरम्भावस्था: ब्रह्म-ग्रन्थि के भेदन से शरीर में कान्ति आती है और मधुर झंकार सुनाई देती है।\n२. घटावस्था: अनाहत चक्र में विष्णु-ग्रन्थि का भेदन होता है और भेरी/शंख की ध्वनि गूँजती है।\n३. परिचयावस्था: भ्रूमध्य के आकाश में मर्दल व वंशी का नाद सुनाई देता है।\n४. निष्पत्त्यवस्था: आज्ञा चक्र में रुद्र-ग्रन्थि के भेदन के पश्चात् वीणा की सूक्ष्मतम ध्वनि के साथ मन सहस्रार में राजयोग समाधि को प्राप्त करता है।'
      }
    ],
    relatedConceptsEn: ['Bīja Mantra', 'Ajapā-Japa (So’ham)', 'Pañca-Dhāraṇā', 'Nādānusandhāna', 'Laya-Krama'],
    relatedConceptsHi: ['बीज मंत्र', 'अजपा-जप (सोऽहम्)', 'पञ्च-धारणा', 'नादानुसंधान', 'लय-क्रम'],
    traditionalVsModernEn: {
      traditionalView: 'Uses Sanskrit bīja mantras (Laṃ, Vaṃ, Raṃ, Yaṃ, Haṃ, Oṃ), So’ham breath awareness, and internal Nādānusandhāna.',
      modernView: 'Frequently substitutes Western diatonic musical scale notes (C, D, E, F, G, A, B) or arbitrary Hz frequencies ("Solfeggio frequencies") that have no basis in Sanskrit texts.',
      scholarlyClarification: 'Classical Sanskrit sources link the chakras to Mātṛkā phonemes and internal Anāhata Nāda—not Western equal-temperament concert pitches or modern Hz tuning forks.'
    },
    distinctionsAndMisconceptionsEn: [
      'Claims that specific chakras vibrate at "396 Hz, 417 Hz, 528 Hz" are 20th-century New Age inventions, not traditional Hindu or Tantric teachings.',
      'In classical practice, bīja mantras are predominantly contemplated mentally (mānasa-japa) along with prāṇa rather than shouted externally.'
    ],
    distinctionsAndMisconceptionsHi: [
      'चक्रों को पश्चिमी संगीत के स्वरों (C, D, E...) या "396 Hz, 528 Hz" जैसी आधुनिक आवृत्तियों से जोड़ना अर्वाचीन पश्चिमी कल्पना है; प्राचीन संस्कृत ग्रंथों में इसका कोई उल्लेख नहीं है।',
      'शास्त्रीय विधान में बीज-मंत्रों का जप प्राण और ध्यान के साथ "मानस-जप" या "उपांशु-जप" के रूप में किया जाता है।'
    ],
    referencesAndReading: [
      'Svātmārāma, Haṭha Yoga Pradīpikā, Chapter 4 (Samādhi & Nādānusandhāna)',
      'Yoga-Tattva Upaniṣad, Verses 83–102 (Pañca-tattva Dhāraṇā)',
      'Haṃsa Upaniṣad (Ajapā-Gāyatrī & Eight-Petalled Heart Lotus)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'lotus-petals-and-sanskrit-letters', 'traditional-vs-modern-chakra-interpretations']
  },
  {
    id: 'article-part3-traditional-vs-modern',
    slug: 'traditional-vs-modern-chakra-interpretations',
    articleNumber: 'RESEARCH MONOGRAPH 07',
    partCategory: 'part3-thematic',
    titleEn: 'Traditional and Modern Interpretations — Historical Textual Models vs. Contemporary Global Adaptations',
    titleSanskrit: 'पारम्परिक शास्त्रीय चक्र-विज्ञान एवं आधुनिक व्याख्याओं का तुलनात्मक विवेचन',
    transliteration: 'Śāstrīya-Cakra-Vidyā Ādhunika-Vyākhyā-Tulanā ca',
    subtitleEn: 'A Scholarly Comparison of Sanskrit Tantric Sources (10th–16th c.) with 20th-Century Theosophical, Jungian & Wellness Frameworks',
    subtitleHi: 'मूल संस्कृत आगम ग्रंथों (१०वीं–१६वीं शती) और २०वीं शताब्दी के थियोसोफिकल, युंगियन मनोविज्ञान एवं आधुनिक वेलनेस मॉडलों का निष्पक्ष शास्त्रीय अंतर',
    accentColor: '#10B981',
    introductoryOverviewEn:
      'Over the past century, the Sanskrit chakra system underwent a profound global transformation. What began in medieval India as an esoteric Tantric ritual map for nyāsa, bhūta-śuddhi, and Kuṇḍalinī liberation became, in the 20th-century West, a universal language of rainbow colours, endocrine glands, psychological developmental stages, crystals, and holistic wellness. A rigorous research archive must present both lineages clearly while never confusing modern adaptations with historical Sanskrit scripture.',
    introductoryOverviewHi:
      'गत एक शताब्दी में संस्कृत चक्र-विज्ञान का विश्वव्यापी प्रसार हुआ है। जो विद्या मध्यकालीन भारत में अन्तर्याग, भूत-शुद्धि और कुण्डलिनी-मोक्ष की गुह्य तांत्रिक प्रणाली थी, वह २०वीं शताब्दी के पश्चिमी जगत् में इन्द्रधनुषी रंगों, अंतःस्रावी ग्रंथियों (endocrine glands) और मनोवैज्ञानिक व्यक्तित्व-विकास की भाषा बन गई। एक प्रामाणिक शोध-अभिलेखागार का दायित्व है कि वह मूल संस्कृत शास्त्र और आधुनिक व्याख्याओं के अंतर को पूरी स्पष्टता के साथ प्रस्तुत करे।',
    historicalBackgroundEn:
      'As traced by historian Kurt Leland (Rainbow Body, 2016) and Indologist Gavin Flood:\n1. 1577 CE: Pūrṇānanda composes Ṣaṭ-Cakra-Nirūpaṇa in Bengal.\n2. 1919: Sir John Woodroffe publishes The Serpent Power, faithfully translating Pūrṇānanda’s Sanskrit text.\n3. 1927: Theosophist Charles Webster Leadbeater publishes The Chakras, superimposing clairvoyant aura wheels, spleen/solar-plexus shifts, and Newton’s prism colours onto Woodroffe’s framework.\n4. 1932: Carl Gustav Jung delivers his Zurich Seminars on The Psychology of Kundalini Yoga, reinterpreting the chakras as developmental stages of human individuation.\n5. 1970s–1990s: Christopher Hills (Nuclear Evolution, 1977) and Anodea Judith (Wheels of Life, 1987) codify the fixed 7-colour rainbow spectrum (Red to Violet) paired with psychological archetypes and Maslow’s hierarchy of needs.',
    historicalBackgroundHi:
      'इतिहासकार कर्ट लीलैंड (Rainbow Body, 2016) और इंडोलॉजिस्ट गैविन फ्लड के अनुसार आधुनिक चक्र-मॉडल के विकास के प्रमुख चरण ये हैं:\n१. १५७७ ई.: पूर्णानन्द यति द्वारा बंगाल में "षट्चक्रनिरूपण" की रचना।\n२. १९१९ ई.: आर्थर एवलॉन (सर जॉन वुडरॉफ) द्वारा मूल संस्कृत पाठ सहित "द सर्पेंट पावर" का प्रकाशन।\n३. १९२७ ई.: थियोसोफिस्ट चार्ल्स वेबस्टर लीडबीटर की पुस्तक "The Chakras", जिसमें पहली बार आभा-मण्डल और पश्चिमी रंग-चक्र को जोड़ा गया।\n४. १९३२ ई.: प्रसिद्ध मनोवैज्ञानिक कार्ल युंग (C.G. Jung) के ज्यूरिख व्याख्यान, जिन्होंने चक्रों को मानव मनोविज्ञान के विकास-चरणों के रूप में व्याख्यायित किया।\n५. १९७०–१९९० का दशक: क्रिस्टोफर हिल्स (१९७७) और एनोडिया जूडिथ (१९८७) द्वारा ७ इन्द्रधनुषी रंगों (लाल से बैंगनी) और मनोवैज्ञानिक आवश्यकताओं के आधुनिक मॉडल का मानकीकरण।',
    traditionalExplanationEn:
      'Six Key Differences Between Classical Sanskrit Sources and Modern Popular Models:\n1. Colour Symbolism: Classical texts specify distinct colours for the lotus petals AND for the inner element yantra (e.g., Maṇipūra has dark rain-cloud blue petals and a red fire triangle; Anāhata has vermilion red petals and a smoky grey air hexagram; Viśuddha has smoky purple petals and a white ether circle). Modern charts replace all of these with Newton’s 7 rainbow colours (Red, Orange, Yellow, Green, Blue, Indigo, Violet).\n2. Subtle vs. Anatomical Locus: Classical chakras are loci in the Sūkṣma Śarīra along the Citriṇī/Brahma-nāḍī. Modern books often equate them directly with physical nerve plexuses and endocrine glands (adrenals, gonads, pancreas, thymus, thyroid, pituitary, pineal).\n3. Deities & Sanskrit Letters: In traditional Tantra, the 50 Sanskrit letters and the presiding Devas/Yoginīs (Brahmā/Ḍākinī to Paramaśiva/Hākinī) are the core of the chakra. Modern wellness charts frequently omit the Sanskrit letters and deities altogether.\n4. Direction of Flow: Classical Bhūta-śuddhi dissolves the lower elements upward into Sahasrāra to transcend worldly bondage (Mokṣa). Modern psychology focuses on "balancing" all seven centres for optimal worldly self-actualization.\n5. Six Chakras + Sahasrāra: Classical texts distinguish the 6 conditioned chakras from transcendent Sahasrāra; modern charts treat all 7 as equal steps on a spectrum.\n6. Crystals & Hz Frequencies: Gemstone correspondences and Solfeggio Hz frequencies are late 20th-century Western additions with no basis in Sanskrit Yoga or Tantra scriptures.',
    traditionalExplanationHi:
      'शास्त्रीय संस्कृत ग्रंथों और आधुनिक लोकप्रिय मॉडलों के मध्य ६ प्रमुख अंतर:\n१. रंग-प्रतीकवाद: मूल संस्कृत ग्रंथों में प्रत्येक चक्र के दलों का रंग और भीतर के तत्त्व-यंत्र का रंग अलग-अलग है (जैसे—मणिपूर के १० दल मेघ-श्याम हैं और अग्नि-त्रिकोण लाल है; अनाहत के १२ दल सिन्दूरी लाल हैं और वायु-षट्कोण धूम्र वर्ण का है)। आधुनिक चार्टों में इन्हें बदलकर न्यूटन के इन्द्रधनुष के ७ रंग (लाल, नारंगी, पीला, हरा, नीला, जामुनी, बैंगनी) कर दिया गया।\n२. सूक्ष्म बनाम स्थूल शरीर: शास्त्र में चक्र "सूक्ष्म शरीर" की ब्रह्मनाड़ी में स्थित ध्यान-केंद्र हैं; आधुनिक पुस्तकों में उन्हें सीधे भौतिक शरीर की अंतःस्रावी ग्रंथियों (थायरॉइड, पिट्यूटरी आदि) का पर्याय मान लिया जाता है।\n३. मातृका अक्षर एवं देवता: पारम्परिक तंत्र में ५० संस्कृत अक्षर और अधिष्ठाता देव-शक्ति (ब्रह्मा/डाकिनी से परमशिव/हाकिनी) ही चक्र के प्राण हैं, जिन्हें आधुनिक वेलनेस साहित्य में प्रायः छोड़ दिया जाता है।\n४. साधना का लक्ष्य: शास्त्रीय चक्र-साधना का लक्ष्य भूत-शुद्धि और कुण्डलिनी-उत्थान द्वारा जन्म-मरण से मोक्ष (अद्वैत समाधि) है, जबकि आधुनिक मनोविज्ञान का उद्देश्य सांसारिक जीवन का भावनात्मक संतुलन है।\n५. षट्चक्र बनाम सप्तचक्र: शास्त्र में ६ चक्र प्रकृति के अंतर्गत और ७वाँ सहस्रार तत्त्वातीत है।\n६. रत्न एवं हर्ट्ज (Hz) आवृत्तियाँ: चक्रों को क्रिस्टल पत्थरों और Solfeggio Hz आवृत्तियों से जोड़ना २०वीं सदी के न्यू-एज आंदोलन की देन है, मूल संस्कृत शास्त्र की नहीं।',
    sanskritTerminology: [
      {
        termDevanagari: 'अन्तःयाग',
        termIAST: 'Antaryāga',
        definitionEn: 'Internal ritual worship performed within the subtle body along the chakras, contrasted with external pūjā (Bahiryāga).',
        definitionHi: 'बाह्य पूजा के स्थान पर सूक्ष्म शरीर के चक्रों में मानसिक रूप से संपन्न की जाने वाली तांत्रिक उपासना।'
      },
      {
        termDevanagari: 'अध्यारोप-अपवाद',
        termIAST: 'Adhyāropa-Apavāda',
        definitionEn: 'The contemplative method of first projecting symbolic forms (lotuses, letters, deities) and then dissolving them into pure consciousness.',
        definitionHi: 'ध्यान में पहले प्रतीकों (कमल, अक्षर, देवता) की भावना करना और अंततः उन्हें शुद्ध चैतन्य में विलीन कर देना।'
      }
    ],
    iconographyAndSymbolismEn:
      'Comparing a 17th-century Nepali or Kangra scroll of the subtle body with a modern 1980s rainbow poster reveals how visual iconography shifted from complex poly-chromatic mantric mandalas to simplified single-colour geometric badges.',
    iconographyAndSymbolismHi:
      '१७वीं शताब्दी की नेपाली या काँगड़ा पाण्डुलिपि के चक्र-चित्रों की तुलना १९८० के दशक के आधुनिक पोस्टरों से करने पर यह स्पष्ट हो जाता है कि कैसे बहुस्तरीय मातृका-मण्डलों को सरल एकरंगी चिह्नों में बदल दिया गया।',
    diagramType: 'traditional-vs-modern',
    detailedSections: [
      {
        headingEn: '1. Summary Matrix: Classical Sanskrit vs. Modern Rainbow System',
        headingHi: '१. तुलनात्मक सारणी: शास्त्रीय संस्कृत वर्ण बनाम आधुनिक इन्द्रधनुषी रंग',
        bodyEn:
          '• Mūlādhāra: Classical = Crimson-red petals + Yellow Earth Square | Modern = Solid Red\n• Svādhiṣṭhāna: Classical = Vermilion petals + White Water Crescent | Modern = Solid Orange\n• Maṇipūra: Classical = Dark rain-cloud petals + Red Fire Triangle | Modern = Solid Yellow\n• Anāhata: Classical = Bandhūka-red petals + Smoky Grey Air Hexagram | Modern = Solid Green\n• Viśuddha: Classical = Smoky-purple petals + Full-Moon White Ether Circle | Modern = Solid Sky Blue\n• Ājñā: Classical = Autumn-moon White petals + Crystalline Liṅga | Modern = Solid Indigo\n• Sahasrāra: Classical = Luminous White tinged with rosy dawn (1,000 petals) | Modern = Violet / Crown White',
        bodyHi:
          '• मूलाधार: शास्त्रीय = रक्त-लाल दल + पीला पृथ्वी चतुष्कोण | आधुनिक = पूर्ण लाल\n• स्वाधिष्ठान: शास्त्रीय = सिन्दूरी दल + श्वेत अर्धचन्द्र | आधुनिक = पूर्ण नारंगी\n• मणिपूर: शास्त्रीय = मेघ-श्याम दल + लाल अग्नि त्रिकोण | आधुनिक = पूर्ण पीला\n• अनाहत: शास्त्रीय = बन्धूक-लाल दल + धूम्र वायु षट्कोण | आधुनिक = पूर्ण हरा\n• विशुद्ध: शास्त्रीय = धूम्र-बैंगनी दल + श्वेत आकाश वृत्त | आधुनिक = पूर्ण आसमानी नीला\n• आज्ञा: शास्त्रीय = चन्द्र-धवल श्वेत दल + स्फटिक लिंग | आधुनिक = पूर्ण जामुनी (इण्डिगो)\n• सहस्रार: शास्त्रीय = अरुण-आभा युक्त परम शुभ्र (१००० दल) | आधुनिक = बैंगनी / श्वेत'
      }
    ],
    relatedConceptsEn: ['Ṣaṭ-Cakra-Nirūpaṇa', 'Arthur Avalon (1919)', 'C.G. Jung (1932)', 'Kurt Leland (Rainbow Body)', 'Historiography of Yoga'],
    relatedConceptsHi: ['षट्चक्रनिरूपण', 'आर्थर एवलॉन (१९१९)', 'कार्ल युंग (१९३२)', 'योग का आधुनिक इतिहास'],
    traditionalVsModernEn: {
      traditionalView: 'Prescriptive Sanskrit Āgamic and Haṭha-yogic subtle body focused on Mantra-mātṛkā, Bhūta-śuddhi, and Mokṣa.',
      modernView: 'Psychological and somatic self-reflection model pairing the seven centres with emotional themes and rainbow colours.',
      scholarlyClarification: 'Both models can be appreciated when clearly labelled: one as historical Indian soteriology, the other as a modern transpersonal psychological adaptation.'
    },
    distinctionsAndMisconceptionsEn: [
      'Using modern psychological chakra reflections is not "wrong," provided it is not falsely attributed to ancient Sanskrit scriptures.',
      'Traditional texts never claim that chakras can be "scanned" or "opened" by external commercial gadgets.'
    ],
    distinctionsAndMisconceptionsHi: [
      'आधुनिक मनोवैज्ञानिक दृष्टिकोण को आत्म-चिंतन के रूप में समझा जा सकता है, किंतु उसे प्राचीन संस्कृत श्लोकों के नाम पर प्रचारित नहीं किया जाना चाहिए।',
      'शास्त्रीय ग्रंथों में चक्रों को किसी बाहरी भौतिक मशीन से मापने या खोलने का कोई दावा नहीं किया गया है।'
    ],
    referencesAndReading: [
      'Kurt Leland, Rainbow Body: A History of the Western Chakra System from Blavatsky to Brennan (2016)',
      'C.G. Jung, The Psychology of Kundalini Yoga: Notes of the Seminar Given in 1932 (ed. Sonu Shamdasani, Princeton University Press, 1996)',
      'Gavin Flood, The Tantric Body: The Secret Tradition of Hindu Religion (I.B. Tauris, 2006)',
      'Sir John Woodroffe, The Serpent Power (1919)'
    ],
    relatedArticleSlugs: ['chakra-vidya-subtle-energy-centres', 'sat-cakra-nirupana-textual-study', 'five-mahabhutas-and-chakras']
  }
];

