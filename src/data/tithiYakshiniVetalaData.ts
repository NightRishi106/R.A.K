import { ResearchArticle } from './researchPortalData';
import { ResearchComparisonTable } from './sacredSealsDeepData';

// ============================================================================
// 1. SEAL 10: TITHI NITYĀ DEVĪ (॥ तिथि नित्या देवी ॥) — MOON PHASE PROGRESSION
//    FROM NO MOON (AMĀVĀSYĀ / PRATIPADĀ THRESHOLD) TO FULL MOON (PŪRṆIMĀ)
// ============================================================================
export interface TithiNityaDeviEntry {
  id: string;
  tithiIndex: number; // 0 = No Moon Threshold, 1..15 = 15 Tithi Nityas, 16 = Mahanitya Full Moon
  code: string;
  nameHi: string;
  nameEn: string;
  sanskritTitle: string;
  tithiNameHi: string;
  tithiNameEn: string;
  moonPhaseStageHi: string;
  moonPhaseStageEn: string;
  illuminationPercent: number;
  panchadashiKuta: string;
  panchadashiSyllableHi: string;
  panchadashiSyllableEn: string;
  triangleZoneHi: string;
  triangleZoneEn: string;
  armsCount: number;
  complexionHi: string;
  complexionEn: string;
  imagePath: string;
  mulaMantraHi: string;
  mulaMantraEn: string;
  iconographyHi: string;
  iconographyEn: string;
  tithiMappingEn?: string;
  tithiMappingHi?: string;
  significanceHi: string;
  significanceEn: string;
  accentColor: string;
}

export const TITHI_NITYA_MASTER_MANDALA_IMAGE = '/assets/aistudio/image_8839e17a.png';

export const TITHI_NITYA_DEVI_MOON_SEQUENCE: TithiNityaDeviEntry[] = [
  {
    id: 'tithi-00-amavasya-threshold',
    tithiIndex: 0,
    code: 'KALĀ 00 · AMĀVĀSYĀ',
    nameHi: 'अमावस्या मूल-संधि · तिथि-मण्डल प्रवेश',
    nameEn: 'No Moon Threshold (Amāvāsyā Root Matrix)',
    sanskritTitle: '॥ तिथि नित्या देवि — त्रिकोण मण्डल ॥',
    tithiNameHi: 'अमावस्या (दर्श / कला-संहार एवं नूतन उद्गम)',
    tithiNameEn: 'Amāvāsyā (0% Dark Moon — Seed of the 15 Lunar Kalās)',
    moonPhaseStageHi: 'अमावस्या (०% चन्द्र-कला — पूर्ण अंधकार से प्रथम किरण की ओर)',
    moonPhaseStageEn: 'No Moon (0% Illumination — Primordial Stillness before 1st Crescent)',
    illuminationPercent: 0,
    panchadashiKuta: 'Para-Bindu / Kāmakalā Trikoṇa',
    panchadashiSyllableHi: 'अ–क–थ त्रिकोण (१५ अक्षर बीज)',
    panchadashiSyllableEn: 'A-Ka-Tha Trikoṇa (Seed of 15 Syllables)',
    triangleZoneHi: 'संपूर्ण त्रिकोण मण्डल (१५ बाह्य नित्या + केंद्रीय महानित्या)',
    triangleZoneEn: 'Complete Kāmakalā Triangle (15 Perimeter Nityās + Central Mahānityā)',
    armsCount: 4,
    complexionHi: 'अरुण-सिन्दूर एवं पूर्ण चन्द्र-मण्डल',
    complexionEn: 'Deep Vermilion & Cosmic Lunar Matrix',
    imagePath: '/assets/aistudio/image_8839e17a.png',
    mulaMantraHi: '॥ क ए ई ल ह्रीं · ह स क ह ल ह्रीं · स क ल ह्रीं · श्रीं ॥',
    mulaMantraEn: 'Ka-E-Ī-La-Hrīṃ · Ha-Sa-Ka-Ha-La-Hrīṃ · Sa-Ka-La-Hrīṃ · Śrīṃ',
    iconographyHi:
      'मूल त्रिकोण आरेख में तीनों भुजाओं पर १५ तिथि नित्या देवियाँ (१. कामेश्वरी से १५. चित्रा तक) तथा मध्य में पूर्ण चन्द्र-मण्डल के सम्मुख १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी विराजमान हैं।',
    iconographyEn:
      'The master Kāmakalā triangle diagram displaying the 15 Tithi Nityā goddesses arrayed along the three sides (5 per side corresponding to the 3 Kūṭas of the Pañcadaśī mantra) and the 16th Mahānityā Śrī Lalitā Tripurasundarī enthroned before the Full Moon at the center.',
    significanceHi:
      'श्रीविद्या तंत्र (नित्याषोडशिकार्णव एवं योगिनीहृदय) के अनुसार काल की प्रत्येक तिथि केवल जड़ समय नहीं, अपितु भगवती ललिता की एक जीवंत चेतना-कला (तिथि-नित्या) है। अमावस्या के शून्य-बिन्दु से प्रतिपदा की प्रथम किरण उठती है और पूर्णिमा के पूर्ण प्रकाश तक १५ कलाओं में विकसित होती है।',
    significanceEn:
      'In Śrīvidyā Tantra (Nityāṣoḍaśikārṇava, Tantrarāja Tantra, and Yoginīhṛdaya), lunar time is not mechanical duration but the living unfolding of fifteen goddesses of consciousness (Tithi Nityās). From the dark stillness of No Moon (Amāvāsyā), the lunar digits (kalās) wax one by one from Pratipadā (Kāmeśvarī) to Pūrṇimā (Citrā & Mahānityā).',
    accentColor: '#EF4444'
  },
  {
    id: 'tithi-01-kameshwari',
    tithiIndex: 1,
    code: 'TITHI 01 · PRATIPADĀ',
    nameHi: '१. कामेश्वरी नित्या',
    nameEn: '1. Kāmeśvarī Nityā',
    sanskritTitle: '॥ कामेश्वरी ॥',
    tithiNameHi: 'प्रतिपदा (प्रथम तिथि · १ली चन्द्र-कला)',
    tithiNameEn: 'Pratipadā (1st Lunar Day · First Waxing Sliver)',
    moonPhaseStageHi: 'प्रथम सूक्ष्म चन्द्र-कोर (अमावस्या के तुरंत बाद पहली कला)',
    moonPhaseStageEn: '1st Waxing Crescent Sliver (6.7% Illumination)',
    illuminationPercent: 7,
    panchadashiKuta: 'Vāgbhava Kūṭa (1st Syllable)',
    panchadashiSyllableHi: 'क (Ka)',
    panchadashiSyllableEn: 'Ka (क)',
    triangleZoneHi: 'त्रिकोण का निचला दायाँ कोण (दक्षिण-पूर्व / काम-बिन्दु)',
    triangleZoneEn: 'Bottom-Right Apex of the Triangle (Vāgbhava Start)',
    armsCount: 6,
    complexionHi: 'उगते सूर्य एवं जपा-पुष्प के समान रक्त वर्ण',
    complexionEn: 'Radiant Vermilion Red like a Million Rising Suns',
    imagePath: '/assets/aistudio/image_fce3deb6.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं क ए ई ल ह्रीं कामेश्वरी नित्यायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Ka E Ī La Hrīṃ Kāmeśvarī Nityāyai Namaḥ',
    iconographyHi:
      'षड्भुजा (६ भुजाएँ), मस्तक पर अर्धचन्द्र, लाल साड़ी व स्वर्ण आभूषण; हाथों में पाश, अंकुश, इक्षु-कोदण्ड (गन्ने का धनुष), पंच-पुष्पबाण, रत्न-कलश एवं वरद मुद्रा। ऊपर दोनों कोनों में प्रतिपदा की प्रथम सूक्ष्म चन्द्र-कला अंकित है।',
    iconographyEn:
      'Six-armed crimson goddess crowned with the crescent moon, holding the noose (pāśa), goad (aṅkuśa), sugarcane bow (ikṣukodaṇḍa), five flower arrows (pañcabāṇa), jeweled nectar pot (ratnakalaśa), and bestowing boons (varada mudrā) with the Śrīcakra yantra engraved on her palm.',
    tithiMappingEn: 'Kameshvari (1st Tithi): Goddess of desire and creative impulse.',
    tithiMappingHi: 'कामेश्वरी (१ली तिथि): इच्छा और सृजनात्मक प्रेरणा की देवी। (Kameshvari — 1st Tithi: Goddess of desire and creative impulse.)',
    significanceHi:
      'कामेश्वरी (१ली तिथि — इच्छा और सृजनात्मक प्रेरणा की देवी): कामेश्वरी इच्छा-शक्ति और सृष्टि के प्रथम स्पन्दन की अधिष्ठात्री हैं। अमावस्या के अंधकार के बाद जैसे ही चन्द्रमा की पहली पतली कोर दिखती है, कामेश्वरी साधक के समस्त शुभ संकल्पों को पूर्ण करती हैं।',
    significanceEn:
      'Kameshvari (1st Tithi): Goddess of desire and creative impulse. Emerging as the very first sliver of light after the dark moon, she governs primordial divine will (Icchā-śakti), fulfills auspicious aspirations, and initiates the waxing cycle of the Śrīcakra.',
    accentColor: '#DC2626'
  },
  {
    id: 'tithi-02-bhagamalini',
    tithiIndex: 2,
    code: 'TITHI 02 · DVITĪYĀ',
    nameHi: '२. भगमालिनी नित्या',
    nameEn: '2. Bhagamālinī Nityā',
    sanskritTitle: '॥ भगमालिनी ॥',
    tithiNameHi: 'द्वितीया (द्वितीय तिथि · २री चन्द्र-कला)',
    tithiNameEn: 'Dvitīyā (2nd Lunar Day · Second Waxing Crescent)',
    moonPhaseStageHi: 'द्वितीया वर्धमान चन्द्र-कोर (१३% आलोक)',
    moonPhaseStageEn: '2nd Waxing Crescent (13.3% Illumination)',
    illuminationPercent: 13,
    panchadashiKuta: 'Vāgbhava Kūṭa (2nd Syllable)',
    panchadashiSyllableHi: 'ए (E)',
    panchadashiSyllableEn: 'E (ए)',
    triangleZoneHi: 'त्रिकोण की दाहिनी भुजा (नीचे से दूसरा स्थान)',
    triangleZoneEn: 'Right Side of Triangle (2nd Ascending Station)',
    armsCount: 6,
    complexionHi: 'अरुण-रक्त वर्ण, स्वर्ण-जटित रक्त वस्त्र',
    complexionEn: 'Luminous Crimson-Rose with Golden Brocade',
    imagePath: '/assets/aistudio/image_15731870.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं भगमालिनी नित्यायै नमः॥ (भगबगे भगिनि भगोदरि...)',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Bhagamālinī Nityāyai Namaḥ',
    iconographyHi:
      'षड्भुजा (६ भुजाएँ); ऊपरी हाथों में पाश और अंकुश, मध्य हाथों में विकसित गुलाबी कमल और श्वेत कुमुद पुष्प, निचले हाथों में इक्षु-धनुष और पुष्प-बाण।',
    iconographyEn:
      'Six-armed goddess holding the noose, goad, blooming pink lotus, white night-lotus (kumuda), sugarcane bow, and five flowery arrows, seated on a golden lotus pedestal.',
    tithiMappingEn: 'Bhagamalini (2nd Tithi): Goddess of abundance, luck, and stability.',
    tithiMappingHi: 'भगमालिनी (२री तिथि): समृद्धि, सौभाग्य और स्थिरता की देवी। (Bhagamalini — 2nd Tithi: Goddess of abundance, luck, and stability.)',
    significanceHi:
      'भगमालिनी (२री तिथि — समृद्धि, सौभाग्य और स्थिरता की देवी): भगमालिनी समस्त ऐश्वर्य (भग-समूह) और सूर्य-चन्द्र की आकर्षण शक्ति की माला धारण करने वाली हैं। ये साधक को प्रचुरता, सौभाग्य और स्थिरता प्रदान करती हैं।',
    significanceEn:
      'Bhagamalini (2nd Tithi): Goddess of abundance, luck, and stability. Wearing the garland of the six divine opulences (bhaga) and solar-lunar matrices, she governs magnetic attraction, creative flowering, and auspicious stability.',
    accentColor: '#E11D48'
  },
  {
    id: 'tithi-03-nityaklinna',
    tithiIndex: 3,
    code: 'TITHI 03 · TṚTĪYĀ',
    nameHi: '३. नित्यक्लिन्ना नित्या',
    nameEn: '3. Nityaklinnā Nityā',
    sanskritTitle: '॥ नित्यक्लिन्ना ॥',
    tithiNameHi: 'तृतीया (तृतीय तिथि · ३री चन्द्र-कला)',
    tithiNameEn: 'Tṛtīyā (3rd Lunar Day · Third Waxing Crescent)',
    moonPhaseStageHi: 'तृतीया चन्द्र-कला (२०% आलोक)',
    moonPhaseStageEn: '3rd Waxing Crescent (20% Illumination)',
    illuminationPercent: 20,
    panchadashiKuta: 'Vāgbhava Kūṭa (3rd Syllable)',
    panchadashiSyllableHi: 'ई (Ī)',
    panchadashiSyllableEn: 'Ī (ई)',
    triangleZoneHi: 'त्रिकोण की दाहिनी भुजा का मध्य भाग',
    triangleZoneEn: 'Right Side of Triangle (3rd Ascending Station)',
    armsCount: 4,
    complexionHi: 'सिन्दूर-अरुण आभा एवं कत्थई-स्वर्ण परिधान',
    complexionEn: 'Warm Vermilion-Coral with Deep Maroon-Gold Attire',
    imagePath: '/assets/aistudio/image_37dc9811.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं नित्यक्लिन्ने मदद्रवे स्वाहा॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Nityaklinne Madadrave Svāhā',
    iconographyHi:
      'चतुर्भुजा (४ भुजाएँ); ऊपरी दोनों हाथों में पाश और अंकुश, निचले दाएँ हाथ में अभय मुद्रा और बाएँ हाथ में अमृत-पूर्ण स्वर्ण कलश।',
    iconographyEn:
      'Four-armed goddess holding the noose (pāśa) and goad (aṅkuśa) in her upper hands, displaying the fear-dispelling gesture (abhaya mudrā) with her lower right hand, and cradling a golden vessel of nectar (kalaśa) in her lower left.',
    tithiMappingEn: 'Nityaklinna (3rd Tithi): Goddess of eternal compassion and nourishment.',
    tithiMappingHi: 'नित्यक्लिन्ना (३री तिथि): शाश्वत करुणा और पोषण की देवी। (Nityaklinna — 3rd Tithi: Goddess of eternal compassion and nourishment.)',
    significanceHi:
      'नित्यक्लिन्ना (३री तिथि — शाश्वत करुणा और पोषण की देवी): "नित्यक्लिन्ना" का अर्थ है—जो करुणा, प्रेम और परमानन्द के अमृत से सदैव भीगी हुई (आर्द्र) हैं। वे हृदय की कठोरता को गलाकर शाश्वत पोषण और अद्वैत प्रेमानन्द प्रदान करती हैं।',
    significanceEn:
      'Nityaklinna (3rd Tithi): Goddess of eternal compassion and nourishment. Her name means "Ever-Moistened with Compassion and Bliss" (nitya-klinnā); she dissolves inner dryness and duality, flooding consciousness with soma-nectar.',
    accentColor: '#F43F5E'
  },
  {
    id: 'tithi-04-bherunda',
    tithiIndex: 4,
    code: 'TITHI 04 · CATURTHĪ',
    nameHi: '४. भेरुण्डा नित्या',
    nameEn: '4. Bheruṇḍā Nityā',
    sanskritTitle: '॥ भेरुण्डा ॥',
    tithiNameHi: 'चतुर्थी (चतुर्थ तिथि · ४थी चन्द्र-कला)',
    tithiNameEn: 'Caturthī (4th Lunar Day · Fourth Waxing Crescent)',
    moonPhaseStageHi: 'चतुर्थी चन्द्र-कला (२७% आलोक)',
    moonPhaseStageEn: '4th Waxing Crescent (26.7% Illumination)',
    illuminationPercent: 27,
    panchadashiKuta: 'Vāgbhava Kūṭa (4th Syllable)',
    panchadashiSyllableHi: 'ल (La)',
    panchadashiSyllableEn: 'La (ल)',
    triangleZoneHi: 'त्रिकोण की दाहिनी भुजा (ऊपर की ओर चौथा स्थान)',
    triangleZoneEn: 'Right Side of Triangle (4th Ascending Station)',
    armsCount: 6,
    complexionHi: 'तप्त-कांचन (स्वर्णिम) वर्ण एवं श्वेत-स्वर्ण परिधान',
    complexionEn: 'Molten Gold Complexion in Pure White & Gold Silk',
    imagePath: '/assets/aistudio/image_f3e5f21e.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं भेरुण्डे नित्यायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Bheruṇḍā Nityāyai Namaḥ',
    iconographyHi:
      'षड्भुजा स्वरूप, श्वेत-स्वर्ण साड़ी में सुशोभित; हाथों में अंकुश, पाश, वज्र, खड्ग (तलवार), गदा एवं स्वर्ण-ढाल (खेटक)।',
    iconographyEn:
      'Resplendent golden-complexioned goddess in white and gold raiments, wielding the goad, noose, thunderbolt (vajra), curved sword (khaḍga), golden mace (gadā), and shield (kheṭaka).',
    tithiMappingEn: 'Bherunda (4th Tithi): Goddess of purification and protection.',
    tithiMappingHi: 'भेरुण्डा (४थी तिथि): शुद्धि और रक्षा की देवी। (Bherunda — 4th Tithi: Goddess of purification and protection.)',
    significanceHi:
      'भेरुण्डा (४थी तिथि — शुद्धि और रक्षा की देवी): भेरुण्डा प्रचण्ड रक्षा-शक्ति, शुद्धिकरण, विष-निवारण और द्वैत-भय के नाश की देवी हैं। वे साधक के मार्ग के समस्त विघ्नों को दूर कर अदम्य आध्यात्मिक बल प्रदान करती हैं।',
    significanceEn:
      'Bherunda (4th Tithi): Goddess of purification and protection. Sovereign of formidable protection and non-dual fearlessness, neutralizing spiritual and physical poisons while guarding the threshold of higher samādhi.',
    accentColor: '#F59E0B'
  },
  {
    id: 'tithi-05-vahnivasini',
    tithiIndex: 5,
    code: 'TITHI 05 · PAÑCAMĪ',
    nameHi: '५. वह्निवासिनी नित्या',
    nameEn: '5. Vahnivāsinī Nityā',
    sanskritTitle: '॥ वह्निवासिनी ॥',
    tithiNameHi: 'पंचमी (पंचम तिथि · ५वीं चन्द्र-कला)',
    tithiNameEn: 'Pañcamī (5th Lunar Day · Fifth Waxing Crescent)',
    moonPhaseStageHi: 'पंचमी चन्द्र-कला (३३% आलोक · प्रथम कूट पूर्ण)',
    moonPhaseStageEn: '5th Waxing Crescent (33.3% Illumination · Vāgbhava Kūṭa Apex)',
    illuminationPercent: 33,
    panchadashiKuta: 'Vāgbhava Kūṭa (5th Syllable)',
    panchadashiSyllableHi: 'ह्रीं (Hrīṃ)',
    panchadashiSyllableEn: 'Hrīṃ (ह्रीं)',
    triangleZoneHi: 'त्रिकोण का ऊपरी दायाँ शीर्ष-कोण',
    triangleZoneEn: 'Upper-Right Corner of the Triangle',
    armsCount: 8,
    complexionHi: 'तप्त स्वर्ण एवं अग्नि-शिखा के समान दमकता पीत वर्ण',
    complexionEn: 'Blazing Golden-Flame Complexion',
    imagePath: '/assets/aistudio/image_8d19b790.png',
    mulaMantraHi: 'ॐ ह्रीं वह्निवासिनीये नमः॥',
    mulaMantraEn: 'Oṃ Hrīṃ Vahnivāsiniye Namaḥ',
    iconographyHi:
      'अष्टभुजा (८ भुजाएँ), पीताम्बरधारिणी; हाथों में शंख, पूर्ण चन्द्र-बिम्ब, पंच-पुष्पबाण, रक्त-कमल, श्वेत-कमल, इक्षु-धनुष, बीजपूर (मातुलुंग फल) एवं स्वर्ण-शृंग।',
    iconographyEn:
      'Eight-armed goddess of golden fire holding a white conch (śaṅkha), luminous moon-orb, flower arrows, pink lotus, white lotus, sugarcane bow, citron fruit (bījapūra), and golden horn.',
    tithiMappingEn: 'Vahnivasini (5th Tithi): Goddess who dwells in fire.',
    tithiMappingHi: 'वह्निवासिनी (५वीं तिथि): अग्नि में निवास करने वाली देवी। (Vahnivasini — 5th Tithi: Goddess who dwells in fire.)',
    significanceHi:
      'वह्निवासिनी (५वीं तिथि — अग्नि में निवास करने वाली देवी): "वह्निवासिनी" का अर्थ है—जो चिदग्नि (ज्ञान की पवित्र अग्नि) में निवास करती हैं। वे पञ्चदशी मंत्र के प्रथम कूट (वाग्भव कूट) की पूर्णता हैं और अज्ञान के अंधकार को भस्म करती हैं।',
    significanceEn:
      'Vahnivasini (5th Tithi): Goddess who dwells in fire. Concluding the five syllables of the Vāgbhava Kūṭa, she embodies the purifying fire of consciousness (cidagni) that consumes karmic impurities.',
    accentColor: '#EAB308'
  },
  {
    id: 'tithi-06-mahavajreshwari',
    tithiIndex: 6,
    code: 'TITHI 06 · ṢAṢṬHĪ',
    nameHi: '६. महावज्रेश्वरी नित्या',
    nameEn: '6. Mahāvajreśvarī Nityā',
    sanskritTitle: '॥ महावज्रेश्वरी ॥',
    tithiNameHi: 'षष्ठी (षष्ठ तिथि · ६ठी चन्द्र-कला)',
    tithiNameEn: 'Ṣaṣṭhī (6th Lunar Day · Sixth Waxing Phase)',
    moonPhaseStageHi: 'षष्ठी चन्द्र-कला (४०% आलोक)',
    moonPhaseStageEn: '6th Waxing Crescent (40% Illumination)',
    illuminationPercent: 40,
    panchadashiKuta: 'Kāmarāja Kūṭa (6th Syllable)',
    panchadashiSyllableHi: 'ह (Ha)',
    panchadashiSyllableEn: 'Ha (ह)',
    triangleZoneHi: 'त्रिकोण की ऊपरी क्षैतिज भुजा (दाएँ से प्रथम)',
    triangleZoneEn: 'Top Horizontal Side of Triangle (Rightmost Station)',
    armsCount: 4,
    complexionHi: 'गहरा सिन्दूरी-रक्त वर्ण, हंस-मुखी स्वर्ण-नौका में आसीन',
    complexionEn: 'Deep Ruby-Crimson Seated in a Golden Swan-Prowed Boat',
    imagePath: '/assets/aistudio/image_fb7c3fb1.png',
    mulaMantraHi: 'ॐ ह्रीं क्लीं महावज्रेश्वरी नित्यायै नमः॥',
    mulaMantraEn: 'Oṃ Hrīṃ Klīṃ Mahāvajreśvarī Nityāyai Namaḥ',
    iconographyHi:
      'चतुर्भुजा, रक्त-पुष्पों की माला धारण किए हंस-मुखी स्वर्ण-नौका में विराजमान; हाथों में पाश, अंकुश, इक्षु-धनुष और पुष्प-बाण।',
    iconographyEn:
      'Four-armed crimson goddess adorned with red hibiscus garlands and seated inside a golden boat with swan-prows, holding the noose, goad, sugarcane bow, and flower arrows.',
    tithiMappingEn: 'Maha Vajreshwari (6th Tithi): Goddess of power and success.',
    tithiMappingHi: 'महावज्रेश्वरी (६ठी तिथि): शक्ति और सफलता की देवी। (Maha Vajreshwari — 6th Tithi: Goddess of power and success.)',
    significanceHi:
      'महावज्रेश्वरी (६ठी तिथि — शक्ति और सफलता की देवी): संसार-सागर से पार लगाने वाली स्वर्ण-नौका में विराजमान महावज्रेश्वरी साधक को वज्र के समान अभेद्य शक्ति, सफलता और कामराज कूट की प्राण-ऊर्जा प्रदान करती हैं।',
    significanceEn:
      'Maha Vajreshwari (6th Tithi): Goddess of power and success. Enthroned in a golden vessel that ferries devotees across the ocean of rebirth (भवसागर), she imparts diamond-thunderbolt (vajra) resilience and opens the central Kāmarāja Kūṭa.',
    accentColor: '#DC2626'
  },
  {
    id: 'tithi-07-shivaduti',
    tithiIndex: 7,
    code: 'TITHI 07 · SAPTAMĪ',
    nameHi: '७. शिवदूती नित्या',
    nameEn: '7. Śivadūtī Nityā',
    sanskritTitle: '॥ शिवदूती ॥',
    tithiNameHi: 'सप्तमी (सप्तम तिथि · ७वीं चन्द्र-कला)',
    tithiNameEn: 'Saptamī (7th Lunar Day · Approaching Half Moon)',
    moonPhaseStageHi: 'सप्तमी चन्द्र-कला (४७% आलोक · अर्धचन्द्र के निकट)',
    moonPhaseStageEn: '7th Waxing Phase (46.7% Illumination · Near First Quarter)',
    illuminationPercent: 47,
    panchadashiKuta: 'Kāmarāja Kūṭa (7th Syllable)',
    panchadashiSyllableHi: 'स (Sa)',
    panchadashiSyllableEn: 'Sa (स)',
    triangleZoneHi: 'त्रिकोण की ऊपरी क्षैतिज भुजा (दाएँ से दूसरा)',
    triangleZoneEn: 'Top Horizontal Side of Triangle (2nd from Right)',
    armsCount: 8,
    complexionHi: 'स्वर्णिम-पीत वर्ण एवं रक्त-स्वर्ण वस्त्र',
    complexionEn: 'Golden Complexion in Crimson & Gold Robes',
    imagePath: '/assets/aistudio/image_073343e1.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं शिवदूत्यै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Śivadūtyai Namaḥ',
    iconographyHi:
      'अष्टभुजा (८ भुजाएँ); हाथों में अंकुश, पाश, परशु (कुल्हाड़ी), खड्ग, कमल, गदा, शृंग एवं खेटक (ढाल)।',
    iconographyEn:
      'Eight-armed goddess holding the goad, noose, battle-axe (paraśu), sword (khaḍga), pink lotus, golden mace (gadā), horn, and circular shield.',
    tithiMappingEn: 'Shivaduti (7th Tithi): Messenger of Shiva, bringing balance and humility.',
    tithiMappingHi: 'शिवदूती (७वीं तिथि): शिव की दूती, संतुलन और विनम्रता लाने वाली देवी। (Shivaduti — 7th Tithi: Messenger of Shiva, bringing balance and humility.)',
    significanceHi:
      'शिवदूती (७वीं तिथि — शिव की दूती, संतुलन और विनम्रता लाने वाली देवी): शिवदूती शिव और शक्ति के संवाद-सेतु, संतुलन और विनम्रता की अधिष्ठात्री हैं तथा आसुरी अहंकार का संहार करती हैं।',
    significanceEn:
      'Shivaduti (7th Tithi): Messenger of Shiva, bringing balance and humility. She bridges transcendent Śiva-consciousness and dynamic Śakti-power while vanquishing egoic forces.',
    accentColor: '#D97706'
  },
  {
    id: 'tithi-08-tvarita',
    tithiIndex: 8,
    code: 'TITHI 08 · AṢṬAMĪ',
    nameHi: '८. त्वरिता नित्या',
    nameEn: '8. Tvaritā Nityā',
    sanskritTitle: '॥ त्वरिता ॥',
    tithiNameHi: 'अष्टमी (अष्टम तिथि · ८वीं अर्धचन्द्र कला)',
    tithiNameEn: 'Aṣṭamī (8th Lunar Day · Exact Half Moon / First Quarter)',
    moonPhaseStageHi: 'अष्टमी सम-अर्धचन्द्र (५०–५३% आलोक · चन्द्र-चक्र का मध्य संतुलन)',
    moonPhaseStageEn: 'Half Moon / First Quarter (53.3% Illumination · Mid-Cycle Equilibrium)',
    illuminationPercent: 53,
    panchadashiKuta: 'Kāmarāja Kūṭa (8th Syllable)',
    panchadashiSyllableHi: 'क (Ka)',
    panchadashiSyllableEn: 'Ka (क)',
    triangleZoneHi: 'त्रिकोण की ऊपरी भुजा का ठीक मध्य-केंद्र',
    triangleZoneEn: 'Exact Center of the Top Horizontal Side of the Triangle',
    armsCount: 4,
    complexionHi: 'मरकत-मणि (पन्ना) के समान श्याम-हरित वर्ण एवं मयूर-पंख मुकुट',
    complexionEn: 'Emerald-Jade Complexion with Peacock-Feather Crown & Serpent Ornaments',
    imagePath: '/assets/aistudio/image_4fc8c5cc.png',
    mulaMantraHi: 'ॐ ह्रीं हुँ खे च छे क्षः स्त्रीं हुँ क्षें ह्रीं फट् (त्वरिता विद्या)॥',
    mulaMantraEn: 'Oṃ Hrīṃ Huṃ Khe Ca Che Kṣaḥ Strīṃ Huṃ Kṣeṃ Hrīṃ Phaṭ (Tvaritā Nityā)',
    iconographyHi:
      'चतुर्भुजा, पन्ना-हरित वर्ण, मस्तक पर भव्य मयूर-पंखों का मुकुट, भुजाओं और चरणों में नाग-आभूषण; हाथों में पाश, अंकुश, अभय मुद्रा एवं वरद मुद्रा। ऊपर अष्टमी का अर्धचन्द्र स्पष्ट दर्शित है।',
    iconographyEn:
      'Four-armed emerald-green tribal sovereign (Kirātī form) crowned with radiant peacock feathers and adorned with living serpents, holding the noose and goad while granting fearlessness (abhaya) and boons (varada) beneath the exact Half Moon.',
    tithiMappingEn: 'Tvarita (8th Tithi): Swift goddess who rules both waxing and waning phases.',
    tithiMappingHi: 'त्वरिता (८वीं तिथि): शुक्ल और कृष्ण दोनों पक्षों पर शासन करने वाली तीव्र-फलदायिनी देवी। (Tvarita — 8th Tithi: Swift goddess who rules both waxing and waning phases.)',
    significanceHi:
      'त्वरिता (८वीं तिथि — शुक्ल और कृष्ण दोनों पक्षों पर शासन करने वाली तीव्र देवी): "त्वरिता" का अर्थ है—तीव्र गति से फल देने वाली। अष्टमी के अर्धचन्द्र पर वे शुक्ल और कृष्ण दोनों पक्षों के मध्य संतुलन स्थापित कर साधक को तुरंत सिद्धि प्रदान करती हैं।',
    significanceEn:
      'Tvarita (8th Tithi): Swift goddess who rules both waxing and waning phases. Presiding over the exact Half Moon (Aṣṭamī) at the center of the top triangle bar, she grants rapid spiritual breakthrough and prāṇic protection.',
    accentColor: '#10B981'
  },
  {
    id: 'tithi-09-kulasundari',
    tithiIndex: 9,
    code: 'TITHI 09 · NAVAMĪ',
    nameHi: '९. कुलसुन्दरी नित्या',
    nameEn: '9. Kulasundarī Nityā',
    sanskritTitle: '॥ कुलसुन्दरी ॥',
    tithiNameHi: 'नवमी (नवम तिथि · ९वीं चन्द्र-कला)',
    tithiNameEn: 'Navamī (9th Lunar Day · First Waxing Gibbous)',
    moonPhaseStageHi: 'नवमी वर्धमान चन्द्र (६०% आलोक · अर्ध से पूर्ण की ओर)',
    moonPhaseStageEn: '9th Waxing Gibbous Moon (60% Illumination)',
    illuminationPercent: 60,
    panchadashiKuta: 'Kāmarāja Kūṭa (9th Syllable)',
    panchadashiSyllableHi: 'ह (Ha)',
    panchadashiSyllableEn: 'Ha (ह)',
    triangleZoneHi: 'त्रिकोण की ऊपरी भुजा (बाएँ से दूसरा)',
    triangleZoneEn: 'Top Horizontal Side of Triangle (2nd from Left)',
    armsCount: 12,
    complexionHi: 'तप्त-सुवर्ण एवं सिन्दूरी आभा',
    complexionEn: 'Luminous Coral-Gold Complexion',
    imagePath: '/assets/aistudio/image_8725a5a7.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं कुलसुन्दरी नित्यायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Kulasundarī Nityāyai Namaḥ',
    iconographyHi:
      'द्वादशभुजा (१२ भुजाएँ); हाथों में रुद्राक्ष माला, शंख, गुलाबी कमल, पुष्प-बाण, पुस्तक (वेद-शास्त्र), अभय मुद्रा, स्वर्ण-पीत कमल, रत्न-माला, लेखनी, इक्षु-धनुष, रत्न-कलश एवं मातुलुंग फल।',
    iconographyEn:
      'Twelve-armed goddess of Kaula wisdom holding rudrākṣa rosary, conch, pink lotus, flower arrows, sacred manuscript, abhaya mudrā, golden lotus, jewel garland, stylus, sugarcane bow, nectar pot, and citron.',
    tithiMappingEn: 'Kulasundari (9th Tithi): Nurturing goddess of spiritual lineage.',
    tithiMappingHi: 'कुलसुन्दरी (९वीं तिथि): आध्यात्मिक वंश-परम्परा (कुल) का पोषण करने वाली देवी। (Kulasundari — 9th Tithi: Nurturing goddess of spiritual lineage.)',
    significanceHi:
      'कुलसुन्दरी (९वीं तिथि — आध्यात्मिक वंश-परम्परा का पोषण करने वाली देवी): कुलसुन्दरी कौल-परम्परा, परा-विद्या और गुरु-शिष्य आम्नाय की अधिष्ठात्री हैं। नवमी तिथि पर वे साधक को शास्त्र-बोध और कुल-पथ का पोषण प्रदान करती हैं।',
    significanceEn:
      'Kulasundari (9th Tithi): Nurturing goddess of spiritual lineage. Beauty of the Kaula Lineage (Kula-sundarī), uniting scriptural wisdom, the trio of knower-knowing-known, and the esoteric transmission of Śrīvidyā.',
    accentColor: '#F97316'
  },
  {
    id: 'tithi-10-nitya',
    tithiIndex: 10,
    code: 'TITHI 10 · DAŚAMĪ',
    nameHi: '१०. नित्या देवी',
    nameEn: '10. Nityā Devī',
    sanskritTitle: '॥ नित्या ॥',
    tithiNameHi: 'दशमी (दशम तिथि · १०वीं चन्द्र-कला)',
    tithiNameEn: 'Daśamī (10th Lunar Day · Tenth Waxing Gibbous)',
    moonPhaseStageHi: 'दशमी वर्धमान चन्द्र (६७% आलोक · द्वितीय कूट पूर्ण)',
    moonPhaseStageEn: '10th Waxing Gibbous Moon (66.7% Illumination)',
    illuminationPercent: 67,
    panchadashiKuta: 'Kāmarāja Kūṭa (10th Syllable)',
    panchadashiSyllableHi: 'ल (La)',
    panchadashiSyllableEn: 'La (ल)',
    triangleZoneHi: 'त्रिकोण का ऊपरी बायाँ शीर्ष-कोण',
    triangleZoneEn: 'Upper-Left Corner of the Triangle',
    armsCount: 12,
    complexionHi: 'अरुण-स्वर्ण आभा एवं कत्थई-स्वर्ण वस्त्र',
    complexionEn: 'Golden-Amber Complexion in Deep Bronze-Gold Silk',
    imagePath: '/assets/aistudio/image_a276498a.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं नित्यायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Nityāyai Namaḥ',
    iconographyHi:
      'द्वादशभुजा (१२ भुजाएँ); हाथों में श्वेत कमल, अंकुश, खड्ग, पुष्प-बाण, पुस्तक, अभय मुद्रा, त्रिशूल, पाश, ढाल (खेटक), इक्षु-धनुष, कपाल एवं वरद मुद्रा।',
    iconographyEn:
      'Twelve-armed goddess holding white lotus, goad, sword, flower arrows, sacred book, abhaya mudrā, trident (triśūla), noose, shield, sugarcane bow, skull-cup (kapāla), and varada mudrā.',
    tithiMappingEn: 'Nitya (10th Tithi): Embodiment of knowledge and active mind.',
    tithiMappingHi: 'नित्या (१०वीं तिथि): ज्ञान और सक्रिय मन की प्रतिमूर्ति। (Nitya — 10th Tithi: Embodiment of knowledge and active mind.)',
    significanceHi:
      'नित्या (१०वीं तिथि — ज्ञान और सक्रिय मन की प्रतिमूर्ति): स्वयं "नित्या" नाम धारण करने वाली ये देवी ज्ञान, सक्रिय चेतना और सप्त-धातुओं की अधिष्ठात्री हैं, जो काल के परिवर्तन में भी अपरिवर्तित रहती हैं।',
    significanceEn:
      'Nitya (10th Tithi): Embodiment of knowledge and active mind. Bearing the root name "Nityā" (The Eternal One), she governs awakened cognition and the immutable substratum of vitality across all temporal flux.',
    accentColor: '#EAB308'
  },
  {
    id: 'tithi-11-nilapataka',
    tithiIndex: 11,
    code: 'TITHI 11 · EKĀDAŚĪ',
    nameHi: '११. नीलपताका नित्या',
    nameEn: '11. Nīlapatākā Nityā',
    sanskritTitle: '॥ नीलपताका ॥',
    tithiNameHi: 'एकादशी (एकादश तिथि · ११वीं चन्द्र-कला)',
    tithiNameEn: 'Ekādaśī (11th Lunar Day · Eleventh Waxing Gibbous)',
    moonPhaseStageHi: 'एकादशी उज्ज्वल चन्द्र (७३% आलोक)',
    moonPhaseStageEn: '11th Waxing Gibbous Moon (73.3% Illumination)',
    illuminationPercent: 73,
    panchadashiKuta: 'Kāmarāja Kūṭa (11th Syllable)',
    panchadashiSyllableHi: 'ह्रीं (Hrīṃ)',
    panchadashiSyllableEn: 'Hrīṃ (ह्रीं)',
    triangleZoneHi: 'त्रिकोण की बायीं भुजा (ऊपर से नीचे प्रथम स्थान)',
    triangleZoneEn: 'Left Side of Triangle (1st Descending Station)',
    armsCount: 10,
    complexionHi: 'इन्द्रनील मणि (नीलम) के समान गहरा नील वर्ण',
    complexionEn: 'Sapphire-Blue Complexion Holding the Blue Victory Banner',
    imagePath: '/assets/aistudio/image_b4756036.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं नीलपताकायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Nīlapatākāyai Namaḥ',
    iconographyHi:
      'दशभुजा (१० भुजाएँ), नीलमेघ-श्यामा; हाथों में अंकुश, खड्ग, वज्र-दण्ड, बाण, अभय मुद्रा, पाश, खेटक (ढाल), नील-पताका (नीला ध्वज), धनुष एवं वरद मुद्रा।',
    iconographyEn:
      'Ten-armed sapphire-complexioned goddess wielding the goad, sword, thunderbolt-staff, arrow, abhaya mudrā, noose, shield, her signature Blue Victory Banner (nīla-patākā), bow, and varada mudrā.',
    tithiMappingEn: 'Nilapataka (11th Tithi): Sapphire-hued goddess of perfection.',
    tithiMappingHi: 'नीलपताका (११वीं तिथि): पूर्णता की नीलम-वर्णा देवी। (Nilapataka — 11th Tithi: Sapphire-hued goddess of perfection.)',
    significanceHi:
      'नीलपताका (११वीं तिथि — पूर्णता की नीलम-वर्णा देवी): नीलपताका कामराज कूट की पूर्णता (ह्रीं) हैं। उनकी नीली विजय-पताका अनंत आकाश (चिदाकाश) पर धर्म और साधना की सर्वोच्च पूर्णता का प्रतीक है।',
    significanceEn:
      'Nilapataka (11th Tithi): Sapphire-hued goddess of perfection. Sealing the Kāmarāja Kūṭa with Hrīṃ, she hoists the sapphire banner of spiritual perfection across the infinite blue expanse of Cidākāśa.',
    accentColor: '#38BDF8'
  },
  {
    id: 'tithi-12-vijaya',
    tithiIndex: 12,
    code: 'TITHI 12 · DVĀDAŚĪ',
    nameHi: '१२. विजया नित्या',
    nameEn: '12. Vijayā Nityā',
    sanskritTitle: '॥ विजय ॥',
    tithiNameHi: 'द्वादशी (द्वादश तिथि · १२वीं चन्द्र-कला)',
    tithiNameEn: 'Dvādaśī (12th Lunar Day · Twelfth Waxing Gibbous)',
    moonPhaseStageHi: 'द्वादशी चन्द्र-कला (८०% आलोक · शक्ति कूट आरंभ)',
    moonPhaseStageEn: '12th Waxing Gibbous Moon (80% Illumination · Śakti Kūṭa Start)',
    illuminationPercent: 80,
    panchadashiKuta: 'Śakti Kūṭa (12th Syllable)',
    panchadashiSyllableHi: 'स (Sa)',
    panchadashiSyllableEn: 'Sa (स)',
    triangleZoneHi: 'त्रिकोण की बायीं भुजा (ऊपर से दूसरा स्थान)',
    triangleZoneEn: 'Left Side of Triangle (2nd Descending Station)',
    armsCount: 10,
    complexionHi: 'तप्त-कांचन (स्वर्ण-अरुण) वर्ण एवं पीताम्बर',
    complexionEn: 'Radiant Golden-Saffron Complexion',
    imagePath: '/assets/aistudio/image_abfc8583.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं विजयायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Vijayāyai Namaḥ',
    iconographyHi:
      'दशभुजा (१० भुजाएँ); हाथों में अंकुश, शंख, खड्ग, बाण, श्वेत कमल, पाश, चक्र, खेटक (ढाल), धनुष एवं मातुलुंग फल।',
    iconographyEn:
      'Ten-armed golden warrior goddess holding the goad, conch, sword, arrow, white lotus, noose, solar discus (cakra), shield, bow, and citron fruit.',
    tithiMappingEn: 'Vijaya (12th Tithi): Goddess of victory and wealth.',
    tithiMappingHi: 'विजया (१२वीं तिथि): विजय और ऐश्वर्य/धन की देवी। (Vijaya — 12th Tithi: Goddess of victory and wealth.)',
    significanceHi:
      'विजया (१२वीं तिथि — विजय और धन-ऐश्वर्य की देवी): विजया नित्या पञ्चदशी के तृतीय कूट (शक्ति कूट) का आरंभ करती हैं और आध्यात्मिक व लौकिक संघर्षों में अमोघ विजय एवं समृद्धि प्रदान करती हैं।',
    significanceEn:
      'Vijaya (12th Tithi): Goddess of victory and wealth. Opening the final Śakti Kūṭa of the Pañcadaśī mantra, Vijayā bestows unassailable spiritual and worldly triumph and prosperity.',
    accentColor: '#F59E0B'
  },
  {
    id: 'tithi-13-sarvamangala',
    tithiIndex: 13,
    code: 'TITHI 13 · TRAYODAŚĪ',
    nameHi: '१३. सर्वमंगला नित्या',
    nameEn: '13. Sarvamaṅgalā Nityā',
    sanskritTitle: '॥ सर्वमंगला ॥',
    tithiNameHi: 'त्रयोदशी (त्रयोदश तिथि · १३वीं चन्द्र-कला)',
    tithiNameEn: 'Trayodaśī (13th Lunar Day · Thirteenth Bright Gibbous)',
    moonPhaseStageHi: 'त्रयोदशी प्रदोष चन्द्र-कला (८७% आलोक)',
    moonPhaseStageEn: '13th Bright Gibbous Moon (86.7% Illumination · Trayodaśī)',
    illuminationPercent: 87,
    panchadashiKuta: 'Śakti Kūṭa (13th Syllable)',
    panchadashiSyllableHi: 'क (Ka)',
    panchadashiSyllableEn: 'Ka (क)',
    triangleZoneHi: 'त्रिकोण की बायीं भुजा (तीसरा स्थान)',
    triangleZoneEn: 'Left Side of Triangle (3rd Descending Station)',
    armsCount: 2,
    complexionHi: 'स्वर्णिम-केसरिया आभा, द्विभुजा सौम्य स्वरूप',
    complexionEn: 'Serene Golden-Saffron Two-Armed Form',
    imagePath: '/assets/aistudio/image_b1af2d1d.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं सर्वमंगलायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Sarvamaṅgalāyai Namaḥ',
    iconographyHi:
      'द्विभुजा (२ भुजाएँ), परम शांत और मंगलमयी मुद्रा; दाएँ हाथ में अभय मुद्रा (हथेली पर श्रीचक्र चिह्न) और बाएँ हाथ में स्वर्णिम मातुलुंग फल (बीजपूर)।',
    iconographyEn:
      'Graceful two-armed goddess radiating pure auspiciousness, her right hand raised in abhaya mudrā inscribed with a geometric yantra and her left hand holding a golden citron fruit (bījapūra) of plenitude.',
    tithiMappingEn: 'Sarvamangala (13th Tithi): Bestower of all auspiciousness.',
    tithiMappingHi: 'सर्वमंगला (१३वीं तिथि): समस्त मंगल और कल्याण प्रदान करने वाली देवी। (Sarvamangala — 13th Tithi: Bestower of all auspiciousness.)',
    significanceHi:
      'सर्वमंगला (१३वीं तिथि — समस्त मंगल प्रदान करने वाली देवी): त्रयोदशी (शिव-प्रदोष तिथि) की अधिष्ठात्री सर्वमंगला देश, काल और वस्तु के समस्त दोषों को शांत कर पूर्ण कल्याण और मंगल स्थापित करती हैं।',
    significanceEn:
      'Sarvamangala (13th Tithi): Bestower of all auspiciousness. Presiding over the auspicious Trayodaśī (Pradoṣa) tithi, Sarvamaṅgalā harmonizes space, time, and destiny into pure benediction.',
    accentColor: '#FB923C'
  },
  {
    id: 'tithi-14-jwalamalini',
    tithiIndex: 14,
    code: 'TITHI 14 · CATURDAŚĪ',
    nameHi: '१४. ज्वालामालिनी नित्या',
    nameEn: '14. Jvālāmalinī Nityā',
    sanskritTitle: '॥ ज्वालामालिनी ॥',
    tithiNameHi: 'चतुर्दशी (चतुर्दश तिथि · १४वीं चन्द्र-कला)',
    tithiNameEn: 'Caturdaśī (14th Lunar Day · Near-Full Gibbous Moon)',
    moonPhaseStageHi: 'चतुर्दशी पूर्णता-उन्मुख चन्द्र (९३% आलोक)',
    moonPhaseStageEn: '14th Waxing Gibbous Moon (93.3% Illumination · Eve of Full Moon)',
    illuminationPercent: 93,
    panchadashiKuta: 'Śakti Kūṭa (14th Syllable)',
    panchadashiSyllableHi: 'ल (La)',
    panchadashiSyllableEn: 'La (ल)',
    triangleZoneHi: 'त्रिकोण की बायीं भुजा (नीचे से दूसरा स्थान)',
    triangleZoneEn: 'Left Side of Triangle (4th Descending Station)',
    armsCount: 12,
    complexionHi: 'प्रज्वलित अग्नि-शिखा के समान रक्त-स्वर्ण वर्ण',
    complexionEn: 'Blazing Flame-Garlanded Amber-Crimson Complexion',
    imagePath: '/assets/aistudio/image_658ad975.png',
    mulaMantraHi: 'ॐ नमो भगवति ज्वालामालिनि देवदेवि सर्वभूतसंहारकारिके जातवेदसि ज्वलन्ति ज्वल ज्वल प्रज्वल प्रज्वल ह्रीं ह्रीं स्वाहा॥',
    mulaMantraEn: 'Oṃ Namo Bhagavati Jvālāmalini Devadevi Sarvabhūtasaṃhārakārike Jātavedasi Jvalanti Jvala Jvala Prajvala Prajvala Hrīṃ Hrīṃ Svāhā',
    iconographyHi:
      'द्वादशभुजा (१२ भुजाएँ); हाथों में चक्र, अंकुश, खड्ग, बाण, प्रज्वलित अग्नि-ज्वाला, अभय मुद्रा, त्रिशूल, पाश, ढाल, धनुष, गदा एवं वरद मुद्रा।',
    iconographyEn:
      'Twelve-armed goddess encircled by a garland of flames (jvālā-mālinī), holding the discus, goad, sword, arrow, living white-hot flame in her palm, abhaya mudrā, trident, noose, shield, bow, mace, and varada mudrā.',
    tithiMappingEn: 'Jvalamalini (14th Tithi): Snake goddess wearing a garland of flames.',
    tithiMappingHi: 'ज्वालामालिनी (१४वीं तिथि): ज्वालाओं की माला धारण करने वाली सर्प-अग्नि देवी। (Jvalamalini — 14th Tithi: Snake goddess wearing a garland of flames.)',
    significanceHi:
      'ज्वालामालिनी (१४वीं तिथि — ज्वालाओं की माला धारण करने वाली सर्प-अग्नि देवी): ज्वालामालिनी श्रीचक्र के बाह्य अग्नि-प्राकार की रक्षिका हैं। चतुर्दशी की रात्रि में वे साधक के चारों ओर अभेद्य अग्नि-कवच निर्मित करती हैं।',
    significanceEn:
      'Jvalamalini (14th Tithi): Snake goddess wearing a garland of flames. She forms the protective ring of fire (jvālā-mālā) around the Śrīcakra mandala on Caturdaśī, burning away all hostile intrusions.',
    accentColor: '#EA580C'
  },
  {
    id: 'tithi-15-chitra',
    tithiIndex: 15,
    code: 'TITHI 15 · PAÑCADAŚĪ',
    nameHi: '१५. चित्रा नित्या',
    nameEn: '15. Citrā Nityā',
    sanskritTitle: '॥ चित्रा ॥',
    tithiNameHi: 'पञ्चदशी / पूर्णिमा-संधि (१५वीं चन्द्र-कला)',
    tithiNameEn: 'Pañcadaśī (15th Lunar Day · Full / Culminating Tithi)',
    moonPhaseStageHi: 'पञ्चदशी पूर्ण चन्द्र-कला (९८% आलोक · १५ कलाओं का शिखर)',
    moonPhaseStageEn: '15th Lunar Kalā Culmination (98% Full Moon Threshold)',
    illuminationPercent: 98,
    panchadashiKuta: 'Śakti Kūṭa (15th Syllable)',
    panchadashiSyllableHi: 'ह्रीं (Hrīṃ)',
    panchadashiSyllableEn: 'Hrīṃ (ह्रीं)',
    triangleZoneHi: 'त्रिकोण का निचला बायाँ/केंद्रीय शीर्ष-बिन्दु',
    triangleZoneEn: 'Bottom Apex of the Triangle (Completing the 15-Nityā Circuit)',
    armsCount: 4,
    complexionHi: 'विचित्र बहुरंगी रत्न-प्रभा (स्वर्ण, हरित, नील व रक्त परिधान)',
    complexionEn: 'Radiant Gold with Variegated Emerald, Sapphire & Ruby Silk',
    imagePath: '/assets/aistudio/image_35a28b47.png',
    mulaMantraHi: 'ॐ ऐं ह्रीं श्रीं चित्रायै नमः॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Citrāyai Namaḥ',
    iconographyHi:
      'चतुर्भुजा, बहुरंगी (चित्र-विचित्र) रेशमी वस्त्र और मरकत-मणि के आभूषण धारण किए हुए; ऊपरी हाथों में अंकुश और पाश, निचले हाथों में अभय एवं वरद मुद्रा।',
    iconographyEn:
      'Four-armed goddess dressed in variegated (citra) polychrome silks of emerald, royal blue, and gold, holding the goad and noose above while bestowing fearlessness (abhaya) and boons (varada) below.',
    tithiMappingEn: 'Chitra (15th Tithi): Glowing goddess worshipped with passion.',
    tithiMappingHi: 'चित्रा (१५वीं तिथि): अनुराग और भक्ति-उत्साह से पूजित दैदीप्यमान देवी। (Chitra — 15th Tithi: Glowing goddess worshipped with passion.)',
    significanceHi:
      'चित्रा (१५वीं तिथि — अनुराग से पूजित दैदीप्यमान देवी): चित्रा १५वीं तिथि-नित्या और पञ्चदशी के १५वें अक्षर (ह्रीं) की अधिष्ठात्री हैं। विश्व की समस्त विचित्रता और विविधता को एक सूत्र में पिरोकर वे साधक को १६वीं महानित्या के केंद्रीय बिन्दु में प्रवेश कराती हैं।',
    significanceEn:
      'Chitra (15th Tithi): Glowing goddess worshipped with passion. Completing the perimeter circuit of the Kāmakalā triangle with the 15th syllable Hrīṃ, she reveals the manifold universe as a single work of divine art and leads the adept into the central Bindu.',
    accentColor: '#14B8A6'
  },
  {
    id: 'tithi-16-mahanitya-lalita',
    tithiIndex: 16,
    code: 'KALĀ 16 · PŪRṆIMĀ MAHĀNITYĀ',
    nameHi: '१६. महानित्या — श्री ललिता त्रिपुरसुन्दरी (षोडशी)',
    nameEn: '16. Mahānityā — Śrī Lalitā Tripurasundarī (Ṣoḍaśī Full Moon)',
    sanskritTitle: '॥ महानित्या · श्री ललिता त्रिपुरा सुन्दरी ॥',
    tithiNameHi: 'षोडशी अमृत-कला · पूर्ण चन्द्रमा (पूर्णिमा बिन्दु)',
    tithiNameEn: 'Ṣoḍaśī Pūrṇa Kalā · 100% Full Moon (Sarvānandamaya Bindu)',
    moonPhaseStageHi: 'पूर्णिमा — १००% पूर्ण चन्द्र-मण्डल (अक्षय षोडशी अमृत-कला)',
    moonPhaseStageEn: 'Full Moon Pūrṇimā (100% Illumination — Undecaying 16th Kalā)',
    illuminationPercent: 100,
    panchadashiKuta: 'Turīya / Ṣoḍaśī Crown (16th Syllable)',
    panchadashiSyllableHi: 'श्रीं (Śrīṃ — षोडशी महाविद्या)',
    panchadashiSyllableEn: 'Śrīṃ (श्रीं — Transcendental 16th Syllable)',
    triangleZoneHi: 'त्रिकोण का केंद्रीय सर्वानन्दमय महाबिन्दु (पूर्ण चन्द्र-मण्डल)',
    triangleZoneEn: 'Central Sarvānandamaya Mahābindu of the Triangle (Full Moon)',
    armsCount: 4,
    complexionHi: 'कोटि-सूर्य समप्रभा सिन्दूर-अरुण वर्ण, पृष्ठभाग में विशाल पूर्ण चन्द्रमा',
    complexionEn: 'Crimson Empress Enthroned Before the Colossal Full Moon',
    imagePath: '/assets/aistudio/image_1838bfb3.png',
    mulaMantraHi: '॥ क ए ई ल ह्रीं · ह स क ह ल ह्रीं · स क ल ह्रीं · श्रीं ॥',
    mulaMantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Śrī-Lalitā-Mahātripurasundarī-Parābhaṭṭārikāyai Namaḥ',
    iconographyHi:
      'पृष्ठभाग में दमकते हुए विशाल पूर्ण चन्द्र-मण्डल (पूर्णिमा) के सम्मुख स्वर्ण-सिंहासन पर आसीन चतुर्भुजा राजराजेश्वरी श्री ललिता त्रिपुरसुन्दरी; चारों हाथों में पाश (इच्छा शक्ति), अंकुश (ज्ञान शक्ति), इक्षु-कोदण्ड और पंच-पुष्पबाण (क्रिया शक्ति)।',
    iconographyEn:
      'The Supreme Empress (Parābhaṭṭārikā) seated in royal majesty directly in front of the colossal Full Moon orb at the center of the triangle, holding the noose (will), goad (knowledge), sugarcane bow (mind), and five flower arrows (subtle elements).',
    significanceHi:
      'जहाँ १ से १५ तक की तिथि-नित्याएँ शुक्ल और कृष्ण पक्ष में बढ़ती-घटती रहती हैं, वहाँ १६वीं "महानित्या" श्री ललिता त्रिपुरसुन्दरी चित्-कला (सादाख्य कला) हैं जो कभी क्षीण नहीं होतीं। उन्हीं के पूर्ण चन्द्र-प्रकाश से १५ नित्याएँ आलोकित होती हैं।',
    significanceEn:
      'While the 15 Tithi Nityās wax from No Moon to Full Moon and wane back again across the lunar fortnights (Śukla and Kṛṣṇa Pakṣa), the 16th Mahānityā—Śrī Lalitā Tripurasundarī—is the undecaying 16th digit of pure consciousness (Amṛta-Kalā / Cit-Kalā) at the central Bindu, from whose eternal Full Moon all fifteen temporal goddesses shine.',
    accentColor: '#F43F5E'
  }
];

export const TITHI_NITYA_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-tithi-nitya-16-moon-phases',
    articleSlug: 'tithi-nitya-devi-shodasha-archive',
    titleEn: 'Complete Moon-Phase Concordance of the 16 Tithi Nityā Devīs (No Moon Threshold to Full Moon Pūrṇimā)',
    titleHi: '१६ तिथि नित्या देवियों की चन्द्र-कला (अमावस्या से पूर्णिमा तक) सम्पूर्ण शास्त्रीय सारणी',
    captionEn:
      'Ordered strictly by lunar phase progression from the Dark Moon (Amāvāsyā) and First Waxing Crescent (Pratipadā — 1. Kāmeśvarī) through Half Moon (Aṣṭamī — 8. Tvaritā) to Full Moon (15. Citrā & 16. Mahānityā Śrī Lalitā Tripurasundarī), correlated with the 16 syllables of the Śrīvidyā Ṣoḍaśī Mantra and the Kāmakalā Triangle.',
    captionHi:
      'अमावस्या से प्रतिपदा (१. कामेश्वरी), अष्टमी अर्धचन्द्र (८. त्वरिता) और पूर्णिमा (१५. चित्रा एवं १६. महानित्या श्री ललिता त्रिपुरसुन्दरी) तक चन्द्र-कला क्रम से व्यवस्थित १६ तिथि नित्याओं, पञ्चदशी/षोडशी मंत्र-अक्षरों, भुजाओं एवं त्रिकोण-स्थान का समन्वय।',
    headersEn: [
      'Lunar Phase / Tithi',
      'Goddess Name (Devanāgarī & IAST)',
      'Lunar Illumination & Triangle Locus',
      'Pañcadaśī / Ṣoḍaśī Syllable',
      'Arms & Key Iconography (Uploaded Plates)',
      'Core Śrīvidyā Domain & Mantra'
    ],
    headersHi: [
      'चन्द्र-कला / तिथि',
      'तिथि नित्या देवी का नाम',
      'चन्द्र आलोक % एवं त्रिकोण में स्थान',
      'पञ्चदशी / षोडशी अक्षर',
      'भुजाएँ एवं प्रमुख आयुध (चित्रानुसार)',
      'प्रमुख तत्त्वज्ञान एवं मूल मंत्र'
    ],
    rowsEn: TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex > 0).map(d => [
      `${String(d.tithiIndex).padStart(2, '0')} · ${d.tithiNameEn}`,
      `${d.sanskritTitle}\n${d.nameEn}`,
      `${d.illuminationPercent}% (${d.moonPhaseStageEn})\n${d.triangleZoneEn}`,
      `${d.panchadashiSyllableEn}\n(${d.panchadashiKuta})`,
      `${d.armsCount} Arms · ${d.iconographyEn}`,
      `${d.significanceEn}\nMantra: ${d.mulaMantraHi}`
    ]),
    rowsHi: TITHI_NITYA_DEVI_MOON_SEQUENCE.filter(d => d.tithiIndex > 0).map(d => [
      `${String(d.tithiIndex).padStart(2, '0')} · ${d.tithiNameHi}`,
      `${d.sanskritTitle}\n${d.nameHi}`,
      `${d.illuminationPercent}% (${d.moonPhaseStageHi})\n${d.triangleZoneHi}`,
      `${d.panchadashiSyllableHi}\n(${d.panchadashiKuta})`,
      `${d.armsCount} भुजाएँ · ${d.iconographyHi}`,
      `${d.significanceHi}\nमंत्र: ${d.mulaMantraHi}`
    ])
  }
];

export const TITHI_NITYA_ARTICLE: ResearchArticle = {
  slug: 'tithi-nitya-devi-shodasha-archive',
  categorySlug: 'shri-meru-chakra',
  code: 'SVD-16',
  titleEn: 'Tithi Nityā Devī (॥ तिथि नित्या देवी ॥): The 16 Lunar-Phase Goddesses of Śrīvidyā from No Moon to Full Moon',
  titleHi: 'तिथि नित्या देवी (॥ तिथि नित्या देवी ॥): अमावस्या से पूर्णिमा तक चन्द्र-कला क्रमानुसार १६ नित्या शक्तियाँ एवं महानित्या ललिता त्रिपुरसुन्दरी',
  subtitleEn: 'Complete Iconographic, Mantric & Lunar-Kalā Monograph of the 15 Tithi Nityās (1. Kāmeśvarī to 15. Citrā) Along the Kāmakalā Triangle and the 16th Mahānityā Śrī Lalitā Tripurasundarī at the Full-Moon Bindu',
  subtitleHi: 'काम-कला त्रिकोण की तीनों भुजाओं पर स्थित १५ तिथि नित्याओं (१. कामेश्वरी से १५. चित्रा) तथा पूर्ण चन्द्र-बिन्दु में विराजमान १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी का सचित्र शास्त्रीय अध्ययन',
  sanskritEpigraph: '॥ तिथिरूपेण कालस्य परिणामो यदा भवेत्। पञ्चदश्यात्मिका नित्या षोडशी चपलाकला ॥',
  epigraphTranslationEn: '"Time itself unfolds in the form of the fifteen lunar tithis embodied by the fifteen Nityā Goddesses, while the sixteenth—Mahānityā Lalitā—shines as the eternal, undecaying Full-Moon Kalā of pure consciousness."',
  epigraphTranslationHi: '"काल स्वयं पन्द्रह चन्द्र-तिथियों (१५ तिथि नित्याओं) के रूप में स्पन्दित होता है, जबकि सोलहवीं महानित्या श्री ललिता त्रिपुरसुन्दरी देश-काल से परे अक्षय पूर्ण-चन्द्र चित्-कला के रूप में विराजमान हैं।"',
  evidenceBadgeEn: 'PRIMARY ŚRĪVIDYĀ ARCHIVE · NITYĀṢOḌAŚIKĀRṆAVA, YOGINĪHṚDAYA & TANTRARĀJA TANTRA',
  evidenceBadgeHi: 'मूल श्रीविद्या शास्त्र स्रोत · नित्याषोडशिकार्णव, योगिनीहृदय एवं तन्त्रराज तन्त्र',
  accentColor: '#F43F5E',
  summaryEn:
    'In the Śrīvidyā tradition of Śākta Tantra (expounded in the Nityāṣoḍaśikārṇava, Yoginīhṛdaya, Tantrarāja Tantra, and Lalitāsahasranāma), the lunar cycle from No Moon (Amāvāsyā) to Full Moon (Pūrṇimā) is revered as a living mandala of sixteen goddesses known as the Ṣoḍaśa Nityās (16 Tithi Nityā Devīs). Each of the fifteen lunar days (tithis) is governed by a specific Nityā Devī (from 1. Kāmeśvarī on Pratipadā to 15. Citrā on Pañcadaśī) and corresponds to one of the fifteen syllables of the Pañcadaśī Mahāmantra arrayed along the three sides of the central Kāmakalā Triangle. At the very center of the triangle—enthroned before the radiant Full Moon—resides the sixteenth, Mahānityā Śrī Lalitā Tripurasundarī, the undecaying Ṣoḍaśī Kalā.',
  summaryHi:
    'शाक्त तन्त्र की श्रीविद्या परम्परा (नित्याषोडशिकार्णव, योगिनीहृदय, तन्त्रराज तन्त्र और ललिता सहस्रनाम) में अमावस्या से पूर्णिमा तक की चन्द्र-कलाओं को जड़ काल-गणना न मानकर सोलह जीवंत चेतना-शक्तियों—षोडश तिथि नित्या देवियों—के रूप में पूजा जाता है। प्रत्येक तिथि की अधिष्ठात्री एक विशिष्ट नित्या देवी हैं (प्रतिपदा की १. कामेश्वरी से लेकर पञ्चदशी की १५. चित्रा तक), जो पञ्चदशी महामंत्र के १५ अक्षरों और केंद्रीय त्रिकोण की तीनों भुजाओं पर स्थित हैं। त्रिकोण के मध्य में पूर्ण चन्द्रमा (पूर्णिमा) के सम्मुख १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी अक्षय अमृत-कला के रूप में विराजमान हैं।',
  sections: [
    {
      headingEn: '1. The Specific Mapping of the Fifteen Nitya Devis to the Lunar Tithis (1st to 15th Tithi)',
      headingHi: '1. पन्द्रह तिथि नित्या देवियों का चन्द्र-तिथियों (१ली से १५वीं तिथि) से विशिष्ट संबंध',
      bodyEn:
        'The specific mapping of the fifteen Nitya Devis to the lunar tithis is as follows:\n\n• Kameshvari (1st Tithi): Goddess of desire and creative impulse.\n• Bhagamalini (2nd Tithi): Goddess of abundance, luck, and stability.\n• Nityaklinna (3rd Tithi): Goddess of eternal compassion and nourishment.\n• Bherunda (4th Tithi): Goddess of purification and protection.\n• Vahnivasini (5th Tithi): Goddess who dwells in fire.\n• Maha Vajreshwari (6th Tithi): Goddess of power and success.\n• Shivaduti (7th Tithi): Messenger of Shiva, bringing balance and humility.\n• Tvarita (8th Tithi): Swift goddess who rules both waxing and waning phases.\n• Kulasundari (9th Tithi): Nurturing goddess of spiritual lineage.\n• Nitya (10th Tithi): Embodiment of knowledge and active mind.\n• Nilapataka (11th Tithi): Sapphire-hued goddess of perfection.\n• Vijaya (12th Tithi): Goddess of victory and wealth.\n• Sarvamangala (13th Tithi): Bestower of all auspiciousness.\n• Jvalamalini (14th Tithi): Snake goddess wearing a garland of flames.\n• Chitra (15th Tithi): Glowing goddess worshipped with passion.\n• Mahanitya Shri Lalita Tripurasundari (16th Kala / Full Moon Bindu): The undecaying 16th digit of pure consciousness at the center of the Kamakala Triangle.',
      bodyHi:
        'पन्द्रह नित्या देवियों का पन्द्रह चन्द्र-तिथियों से विशिष्ट संबंध (The specific mapping of the fifteen Nitya Devis to the lunar tithis) इस प्रकार है:\n\n• Kameshvari — कामेश्वरी (1st Tithi / प्रथम तिथि): Goddess of desire and creative impulse (इच्छा और सृजनात्मक प्रेरणा की देवी)।\n• Bhagamalini — भगमालिनी (2nd Tithi / द्वितीय तिथि): Goddess of abundance, luck, and stability (समृद्धि, सौभाग्य और स्थिरता की देवी)।\n• Nityaklinna — नित्यक्लिन्ना (3rd Tithi / तृतीय तिथि): Goddess of eternal compassion and nourishment (शाश्वत करुणा और पोषण की देवी)।\n• Bherunda — भेरुण्डा (4th Tithi / चतुर्थ तिथि): Goddess of purification and protection (शुद्धि और रक्षा की देवी)।\n• Vahnivasini — वह्निवासिनी (5th Tithi / पंचम तिथि): Goddess who dwells in fire (अग्नि में निवास करने वाली देवी)।\n• Maha Vajreshwari — महावज्रेश्वरी (6th Tithi / षष्ठ तिथि): Goddess of power and success (शक्ति और सफलता की देवी)।\n• Shivaduti — शिवदूती (7th Tithi / सप्तम तिथि): Messenger of Shiva, bringing balance and humility (शिव की दूती, संतुलन और विनम्रता लाने वाली देवी)।\n• Tvarita — त्वरिता (8th Tithi / अष्टम तिथि): Swift goddess who rules both waxing and waning phases (शुक्ल और कृष्ण दोनों पक्षों पर शासन करने वाली तीव्र देवी)।\n• Kulasundari — कुलसुन्दरी (9th Tithi / नवम तिथि): Nurturing goddess of spiritual lineage (आध्यात्मिक वंश-परम्परा का पोषण करने वाली देवी)।\n• Nitya — नित्या (10th Tithi / दशम तिथि): Embodiment of knowledge and active mind (ज्ञान और सक्रिय मन की प्रतिमूर्ति)।\n• Nilapataka — नीलपताका (11th Tithi / एकादश तिथि): Sapphire-hued goddess of perfection (पूर्णता की नीलम-वर्णा देवी)।\n• Vijaya — विजया (12th Tithi / द्वादश तिथि): Goddess of victory and wealth (विजय और धन-ऐश्वर्य की देवी)।\n• Sarvamangala — सर्वमंगला (13th Tithi / त्रयोदश तिथि): Bestower of all auspiciousness (समस्त मंगल प्रदान करने वाली देवी)।\n• Jvalamalini — ज्वालामालिनी (14th Tithi / चतुर्दश तिथि): Snake goddess wearing a garland of flames (ज्वालाओं की माला धारण करने वाली सर्प-अग्नि देवी)।\n• Chitra — चित्रा (15th Tithi / पञ्चदशी तिथि): Glowing goddess worshipped with passion (अनुराग और भक्ति से पूजित दैदीप्यमान देवी)।'
    },
    {
      headingEn: '2. The Theology of Lunar Time (Kāla) and the 16 Kalās in Śrīvidyā',
      headingHi: '2. श्रीविद्या में चन्द्र-काल (तिथि-चक्र) और १६ कलाओं का दार्शनिक रहस्य',
      bodyEn:
        'Philosophy of Nityā (The Eternal in the Temporal): In Sanskrit, the word Nityā (नित्या) means "eternal, constant, and imperishable," while Tithi (तिथि) denotes a lunar day (defined astronomically by each 12-degree longitudinal separation between the Sun and the Moon). By uniting these two terms into Tithi-Nityā (तिथि-नित्या), Śrīvidyā theology reveals that changing lunar time is not separate from eternal consciousness. Each waxing and waning phase of the Moon is a projection (kalā) of the Supreme Goddess.\n\nWaxing (Śukla Pakṣa) and Waning (Kṛṣṇa Pakṣa) Dual Moon Spheres: On each of the 15 individual Tithi Nityā iconographic plates in this archive, two lunar spheres appear in the upper left and upper right corners. The left lunar orb illustrates the waxing phase (Śukla Pakṣa) growing toward fullness, while the right lunar orb illustrates the corresponding waning phase (Kṛṣṇa Pakṣa)—showing how the same Nityā Devī governs her respective tithi in both halves of the lunar month.\n\nThe Three Sides of the Kāmakalā Triangle & the 15 Syllables of Pañcadaśī: As depicted in the master mandala chart (॥ तिथि नित्या देवि ॥), the 15 Tithi Nityās sit five along each of the three sides of the central red inverted triangle: (1) Right Side (Vāgbhava Kūṭa — क ए ई ल ह्रीं): 1. Kāmeśvarī, 2. Bhagamālinī, 3. Nityaklinnā, 4. Bheruṇḍā, 5. Vahnivāsinī; (2) Top Horizontal Side (Kāmarāja Kūṭa — ह स क ह ल ह्रीं): 6. Mahāvajreśvarī, 7. Śivadūtī, 8. Tvaritā, 9. Kulasundarī, 10. Nityā, and 11. Nīlapatākā; (3) Left Side (Śakti Kūṭa — स क ल ह्रीं): 12. Vijayā, 13. Sarvamaṅgalā, 14. Jvālāmalinī, and 15. Citrā. At the central Bindu shines the 16th—Mahānityā Śrī Lalitā Tripurasundarī.',
      bodyHi:
        'नित्या और तिथि का समन्वय: संस्कृत में "नित्या" का अर्थ है शाश्वत और अविनाशी, जबकि "तिथि" सूर्य और चन्द्रमा के १२-१२ अंश के अंतर से बनने वाले चन्द्र-दिवस को कहते हैं। "तिथि-नित्या" का सिद्धांत यह प्रकट करता है कि परिवर्तनशील समय स्वयं भगवती ललिता की शाश्वत चेतना का ही विलास है।\n\nशुक्ल पक्ष और कृष्ण पक्ष के दो चन्द्र-गोलक: इस संग्रह के प्रत्येक तिथि-नित्या चित्र के ऊपरी बाएँ और दाएँ कोने में दो चन्द्र-मण्डल अंकित हैं—जो यह दर्शाते हैं कि अमावस्या से पूर्णिमा (शुक्ल पक्ष) में चन्द्र-कलाओं के क्रमिक विकास और पूर्णिमा से अमावस्या (कृष्ण पक्ष) में उनके प्रत्यावर्तन—दोनों पक्षों की संबंधित तिथि पर उसी नित्या देवी का आधिपत्य रहता है।\n\nकाम-कला त्रिकोण की तीन भुजाएँ और पञ्चदशी के १५ अक्षर: मुख्य मण्डल चित्र (॥ तिथि नित्या देवि ॥) के अनुसार त्रिकोण की तीनों भुजाओं पर पञ्चदशी महामंत्र के तीन कूट और १५ नित्याएँ स्थित हैं: (१) दाहिनी भुजा (वाग्भव कूट — क ए ई ल ह्रीं): कामेश्वरी, भगमालिनी, नित्यक्लिन्ना, भेरुण्डा, वह्निवासिनी; (२) ऊपरी क्षैतिज भुजा (कामराज कूट — ह स क ह ल ह्रीं): महावज्रेश्वरी, शिवदूती, त्वरिता, कुलसुन्दरी, नित्या एवं नीलपताका; (३) बायीं भुजा (शक्ति कूट — स क ल ह्रीं): विजया, सर्वमंगला, ज्वालामालिनी एवं चित्रा। केंद्र में पूर्ण चन्द्रमा के आगे १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी विराजमान हैं।'
    },
    {
      headingEn: '2. First Triad of the Waxing Moon (Tithis 01–05 · Vāgbhava Kūṭa: क ए ई ल ह्रीं)',
      headingHi: '2. प्रथम पंचक (तिथि ०१ से ०५ · वाग्भव कूट: क ए ई ल ह्रीं — अमावस्या से पंचमी तक)',
      bodyEn:
        '1. Kāmeśvarī (॥ कामेश्वरी ॥ · Pratipadā · Syllable क): Emerging as the first crescent sliver (6.7% illumination) after No Moon, six-armed crimson Kāmeśvarī holds the noose, goad, sugarcane bow, five flower arrows, jeweled nectar pot (ratnakalaśa), and varada mudrā.\n\n2. Bhagamālinī (॥ भगमालिनी ॥ · Dvitīyā · Syllable ए): Governing the second waxing crescent (13.3%), six-armed Bhagamālinī holds the noose, goad, pink lotus, white night-lotus, sugarcane bow, and flower arrows, radiating solar-lunar attraction.\n\n3. Nityaklinnā (॥ नित्यक्लिन्ना ॥ · Tṛtīyā · Syllable ई): Governing the third crescent (20%), four-armed Nityaklinnā ("Ever-Moist with Compassion") holds the noose, goad, abhaya mudrā, and golden nectar vessel.\n\n4. Bheruṇḍā (॥ भेरुण्डा ॥ · Caturthī · Syllable ल): Governing the fourth crescent (26.7%), golden-complexioned Bheruṇḍā in white-gold attire wields the goad, noose, vajra, sword, mace, and shield.\n\n5. Vahnivāsinī (॥ वह्निवासिनी ॥ · Pañcamī · Syllable ह्रीं): Governing the fifth crescent (33.3%) at the upper-right apex, eight-armed golden Vahnivāsinī ("Dweller in Fire") holds the conch, full moon orb, flower arrows, pink lotus, white lotus, sugarcane bow, citron, and golden horn.',
      bodyHi:
        '१. कामेश्वरी (॥ कामेश्वरी ॥ · प्रतिपदा · अक्षर क): अमावस्या के पश्चात् प्रथम सूक्ष्म चन्द्र-कला के रूप में प्रकट षड्भुजा रक्तवर्णा कामेश्वरी पाश, अंकुश, इक्षु-धनुष, पुष्प-बाण, रत्न-कलश और वरद मुद्रा धारण करती हैं।\n\n२. भगमालिनी (॥ भगमालिनी ॥ · द्वितीया · अक्षर ए): द्वितीय चन्द्र-कला की स्वामिनी षड्भुजा भगमालिनी पाश, अंकुश, पद्म, कुमुद, इक्षु-धनुष और पुष्प-बाण धारण कर षड्-ऐश्वर्य प्रदान करती हैं।\n\n३. नित्यक्लिन्ना (॥ नित्यक्लिन्ना ॥ · तृतीया · अक्षर ई): तृतीय कला की स्वामिनी चतुर्भुजा नित्यक्लिन्ना करुणा और प्रेमानन्द से आर्द्र हैं तथा पाश, अंकुश, अभय मुद्रा और अमृत-कलश धारण करती हैं।\n\n४. भेरुण्डा (॥ भेरुण्डा ॥ · चतुर्थी · अक्षर ल): चतुर्थ कला की स्वामिनी श्वेत-स्वर्ण वस्त्रा भेरुण्डा अंकुश, पाश, वज्र, खड्ग, गदा और ढाल धारण कर विष व भय का नाश करती हैं।\n\n५. वह्निवासिनी (॥ वह्निवासिनी ॥ · पंचमी · अक्षर ह्रीं): पंचम कला की स्वामिनी अष्टभुजा स्वर्णवर्णा वह्निवासिनी शंख, चन्द्र-बिम्ब, पुष्प-बाण, रक्त-कमल, श्वेत-कमल, इक्षु-धनुष, मातुलुंग फल और शृंग धारण करती हैं।'
    },
    {
      headingEn: '3. Second Group Across the Top Bar (Tithis 06–11 · Kāmarāja Kūṭa: ह स क ह ल ह्रीं)',
      headingHi: '3. मध्य षट्क (तिथि ०६ से ११ · कामराज कूट: ह स क ह ल ह्रीं — षष्ठी से एकादशी तक)',
      bodyEn:
        '6. Mahāvajreśvarī (॥ महावज्रेश्वरी ॥ · Ṣaṣṭhī · Syllable ह): Seated in a golden swan-prowed boat at 40% lunar illumination, four-armed ruby-red Mahāvajreśvarī holds the noose, goad, sugarcane bow, and flower arrows.\n\n7. Śivadūtī (॥ शिवदूती ॥ · Saptamī · Syllable स): At 46.7% illumination approaching the half moon, eight-armed Śivadūtī wields the goad, noose, axe (paraśu), sword, pink lotus, mace, horn, and shield.\n\n8. Tvaritā (॥ त्वरिता ॥ · Aṣṭamī · Syllable क): Stationed at the exact Half Moon (First Quarter, 53.3%) at the center of the top triangle bar, four-armed emerald-green Tvaritā wears a majestic peacock-feather crown and serpent ornaments while holding the noose, goad, abhaya, and varada mudrās.\n\n9. Kulasundarī (॥ कुलसुन्दरी ॥ · Navamī · Syllable ह): At 60% waxing gibbous illumination, twelve-armed Kulasundarī holds the rosary, conch, pink lotus, flower arrows, book, abhaya mudrā, golden lotus, jewel necklace, stylus, sugarcane bow, nectar pot, and citron.\n\n10. Nityā (॥ नित्या ॥ · Daśamī · Syllable ल): At 66.7% illumination at the upper-left corner, twelve-armed Nityā holds the white lotus, goad, sword, flower arrows, book, abhaya mudrā, trident, noose, shield, sugarcane bow, skull-cup (kapāla), and varada mudrā.\n\n11. Nīlapatākā (॥ नीलपताका ॥ · Ekādaśī · Syllable ह्रीं): At 73.3% illumination, ten-armed sapphire-blue Nīlapatākā holds the goad, sword, vajra-staff, arrow, abhaya mudrā, noose, shield, blue victory flag (nīla-patākā), bow, and varada mudrā.',
      bodyHi:
        '६. महावज्रेश्वरी (॥ महावज्रेश्वरी ॥ · षष्ठी · अक्षर ह): हंस-मुखी स्वर्ण-नौका में आसीन चतुर्भुजा रक्तवर्णा महावज्रेश्वरी पाश, अंकुश, इक्षु-धनुष और पुष्प-बाण धारण कर भवसागर से पार लगाती हैं।\n\n७. शिवदूती (॥ शिवदूती ॥ · सप्तमी · अक्षर स): अष्टभुजा शिवदूती अंकुश, पाश, परशु, खड्ग, कमल, गदा, शृंग और ढाल धारण करती हैं।\n\n८. त्वरिता (॥ त्वरिता ॥ · अष्टमी अर्धचन्द्र · अक्षर क): अष्टमी के सम-अर्धचन्द्र की स्वामिनी, मरकत-हरित वर्णा चतुर्भुजा त्वरिता मस्तक पर मयूर-पंख मुकुट और नाग-आभूषण धारण कर पाश, अंकुश, अभय व वरद मुद्रा से शीघ्र सिद्धि प्रदान करती हैं।\n\n९. कुलसुन्दरी (॥ कुलसुन्दरी ॥ · नवमी · अक्षर ह): द्वादशभुजा कुलसुन्दरी रुद्राक्ष माला, शंख, कमल, बाण, पुस्तक, अभय, स्वर्ण-कमल, रत्नमाला, लेखनी, धनुष, कलश व बीजपूर धारण करती हैं।\n\n१०. नित्या (॥ नित्या ॥ · दशमी · अक्षर ल): द्वादशभुजा नित्या श्वेत कमल, अंकुश, खड्ग, बाण, पुस्तक, अभय, त्रिशूल, पाश, ढाल, इक्षु-धनुष, कपाल और वरद मुद्रा धारण करती हैं।\n\n११. नीलपताका (॥ नीलपताका ॥ · एकादशी · अक्षर ह्रीं): दशभुजा नीलवर्णा नीलपताका अपने हाथ में नील विजय-ध्वज, धनुष, बाण, खड्ग, ढाल, पाश व अंकुश धारण करती हैं।'
    },
    {
      headingEn: '4. Culminating Waxing Gibbous to Full Moon (Tithis 12–15 & 16th Mahānityā)',
      headingHi: '4. तृतीय कूट एवं पूर्ण चन्द्र शिखर (तिथि १२ से १५ एवं १६वीं महानित्या ललिता त्रिपुरसुन्दरी)',
      bodyEn:
        '12. Vijayā (॥ विजय ॥ · Dvādaśī · Syllable स): At 80% illumination opening the Śakti Kūṭa, ten-armed golden Vijayā wields the goad, conch, sword, arrow, white lotus, noose, discus, shield, bow, and citron.\n\n13. Sarvamaṅgalā (॥ सर्वमंगला ॥ · Trayodaśī · Syllable क): At 86.7% illumination, serene two-armed golden Sarvamaṅgalā displays the yantra-marked abhaya mudrā in her right hand and holds a citron fruit in her left.\n\n14. Jvālāmalinī (॥ ज्वालामालिनी ॥ · Caturdaśī · Syllable ल): At 93.3% near-full illumination, twelve-armed Jvālāmalinī holds a living flame in her palm along with discus, goad, sword, arrow, abhaya, trident, noose, shield, bow, mace, and varada.\n\n15. Citrā (॥ चित्रा ॥ · Pañcadaśī · Syllable ह्रीं): At 98% illumination at the bottom apex of the triangle, four-armed Citrā in polychrome emerald-blue-gold silks holds the goad, noose, abhaya, and varada mudrās.\n\n16. Mahānityā Śrī Lalitā Tripurasundarī (॥ महानित्या · श्री ललिता त्रिपुरा सुन्दरी ॥ · Ṣoḍaśī Pūrṇa Kalā · Syllable श्रीं): Enthroned at the center of the triangle before the 100% Full Moon (Pūrṇimā), four-armed Empress Lalitā Tripurasundarī holds the noose, goad, sugarcane bow, and five flower arrows as the eternal, undecaying 16th Kalā that illuminates all fifteen tithis.',
      bodyHi:
        '१२. विजया (॥ विजय ॥ · द्वादशी · अक्षर स): शक्ति कूट की प्रथम देवी दशभुजा स्वर्णवर्णा विजया अंकुश, शंख, खड्ग, बाण, श्वेत कमल, पाश, चक्र, ढाल, धनुष और मातुलुंग फल धारण करती हैं।\n\n१३. सर्वमंगला (॥ सर्वमंगला ॥ · त्रयोदशी · अक्षर क): द्विभुजा शांत स्वर्णवर्णा सर्वमंगला दाएँ हाथ में यंत्र-अंकित अभय मुद्रा और बाएँ हाथ में बीजपूर धारण कर सर्व-कल्याण करती हैं।\n\n१४. ज्वालामालिनी (॥ ज्वालामालिनी ॥ · चतुर्दशी · अक्षर ल): द्वादशभुजा ज्वालामालिनी अपनी हथेली पर प्रज्वलित अग्नि-ज्वाला तथा चक्र, त्रिशूल, खड्ग, धनुष, गदा, पाश व अंकुश धारण कर श्रीचक्र के अग्नि-प्राकार की रक्षा करती हैं।\n\n१५. चित्रा (॥ चित्रा ॥ · पञ्चदशी · अक्षर ह्रीं): त्रिकोण के निचले शीर्ष पर स्थित चतुर्भुजा चित्रा बहुरंगी वस्त्र और पाश, अंकुश, अभय व वरद मुद्रा धारण करती हैं।\n\n१६. महानित्या श्री ललिता त्रिपुरसुन्दरी (॥ महानित्या ॥ · षोडशी पूर्ण चन्द्र कला · अक्षर श्रीं): त्रिकोण के मध्य में १००% पूर्ण चन्द्रमा (पूर्णिमा) के सम्मुख विराजमान चतुर्भुजा पराभट्टारिका श्री ललिता त्रिपुरसुन्दरी पाश, अंकुश, इक्षु-कोदण्ड और पंच-पुष्पबाण धारण करती हैं। यही वह अक्षय १६वीं अमृत-कला हैं जिनसे संपूर्ण काल-चक्र प्रकाशित है।'
    }
  ],
  keyFindingsEn: [
    'The 16 Tithi Nityā Devīs map the lunar cycle from No Moon (Amāvāsyā) through the 15 waxing tithis (Pratipadā to Pūrṇimā) onto the 15 syllables of the Pañcadaśī mantra and the 16th Ṣoḍaśī syllable (Śrīṃ).',
    'In the master triangular mandala (॥ तिथि नित्या देवि ॥), 5 Nityās sit along each of the 3 sides of the Kāmakalā triangle, while Mahānityā Śrī Lalitā Tripurasundarī sits at the center before the Full Moon.',
    'Each individual iconographic plate displays both the waxing (Śukla Pakṣa) and waning (Kṛṣṇa Pakṣa) lunar phase spheres in the upper corners, showing how each Nityā governs her tithi across both fortnights.'
  ],
  keyFindingsHi: [
    '१६ तिथि नित्या देवियाँ अमावस्या (शून्य कला) से प्रतिपदा (कामेश्वरी) होते हुए पूर्णिमा (चित्रा एवं महानित्या ललिता) तक चन्द्र-कलाओं के क्रमिक विकास को पञ्चदशी और षोडशी महामंत्र के १६ अक्षरों से जोड़ती हैं।',
    'मूल त्रिकोण मण्डल (॥ तिथि नित्या देवि ॥) की तीनों भुजाओं पर ५-५ नित्याएँ (तीनों कूट) तथा केंद्र में पूर्ण चन्द्रमा के सम्मुख १६वीं महानित्या श्री ललिता त्रिपुरसुन्दरी प्रतिष्ठित हैं।',
    'प्रत्येक देवी के चित्र के ऊपरी कोनों में शुक्ल और कृष्ण पक्ष के चन्द्र-बिम्ब उस तिथि की सटीक चन्द्र-कला को दर्शाते हैं।'
  ],
  metadata: [
    {
      labelEn: 'ARCHIVE CODE & SEAL',
      labelHi: 'अभिलेख कोड एवं मुद्रा',
      valueEn: 'SVD-16 · SEAL 10 (Tithi Nityā Devī)',
      valueHi: 'SVD-16 · मुद्रा १० (तिथि नित्या देवी)'
    },
    {
      labelEn: 'LUNAR SEQUENCE',
      labelHi: 'चन्द्र-कला अनुक्रम',
      valueEn: 'No Moon (0%) → 15 Waxing Tithis → Full Moon (100% Mahānityā)',
      valueHi: 'अमावस्या (०%) → १५ वर्धमान तिथियाँ → पूर्णिमा (१००% महानित्या)'
    },
    {
      labelEn: 'MANTRIC CORRELATION',
      labelHi: 'मन्त्र समन्वय',
      valueEn: '15 Pañcadaśī Syllables + 16th Śrīṃ (Ṣoḍaśī)',
      valueHi: '१५ पञ्चदशी अक्षर + १६वाँ श्रीं (षोडशी)'
    },
    {
      labelEn: 'UPLOADED PLATES',
      labelHi: 'सचित्र फलक संख्या',
      valueEn: '17 Consecrated Plates (1 Master Mandala + 16 Nityā Portraits)',
      valueHi: '१७ मूल चित्र (१ मुख्य त्रिकोण मण्डल + १६ नित्या विग्रह)'
    }
  ],
  primarySourcesEn:
    'Nityāṣoḍaśikārṇava (Vāmakeśvarīmata), Yoginīhṛdaya (with Amṛtānanda’s Dīpikā), Tantrarāja Tantra (Ch. 1–16), Kalpasūtra of Paraśurāma, and Lalitāsahasranāma.',
  primarySourcesHi:
    'नित्याषोडशिकार्णव (वामकेश्वरीमत), योगिनीहृदय (अमृतानन्द कृत दीपिका टीका), तन्त्रराज तन्त्र (अध्याय १–१६), परशुराम कल्पसूत्र एवं श्रीललितासहस्रनाम।',
  authorEn: 'Ram Ashok Kumar',
  authorHi: 'राम अशोक कुमार'
};

// ============================================================================
// 2. SEAL 11: 36 YAKṢIṆĪS (36 यक्षिणियाँ — UDDĀMEŚVARA & TANTRARĀJA TANTRA)
// ============================================================================
export interface Yakshini36Entry {
  index: number;
  nameHi: string;
  nameEn: string;
  meaningHi: string;
  meaningEn: string;
  japaCount: string;
  locusAndMaterialsHi: string;
  locusAndMaterialsEn: string;
  mantraHi: string;
  mantraEn: string;
  siddhiAndBoonsHi: string;
  siddhiAndBoonsEn: string;
  fullTextHi: string;
  fullTextEn: string;
  categoryGroup: 'wish-wealth' | 'alchemy-Rasayana' | 'astral-occult' | 'attraction-siddhi';
}

export const YAKSHINI_36_INTRO_HI = {
  headerBadge: 'मंत्र एवं श्लोक · शनिवार, 2 जुलाई 2011 · उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र',
  title: '36 यक्षिणियाँ (36 Yakṣiṇīs — Uddāmeśvara Tantra & Tantrarāja Tantra)',
  paragraphs: [
    'यक्षिणी एक प्रकार की अलौकिक शक्ति है, जो कुछ मायनों में परी के समान होती है। यक्ष पुरुष होता है, यक्षिणी स्त्री। उद्दामेश्वर तंत्र में इन 36 शक्तियों का वर्णन उनके मंत्रों और विधि-विधि के साथ किया गया है। ऐसा कहा जाता है कि इनकी सहायता लेने से भक्त को अनेक शक्तियाँ प्राप्त होती हैं।',
    'उद्दामेश्वर भगवान शिव का एक नाम है, जिसका अर्थ है "असाधारण के स्वामी"। उनके अनुयायियों में अनेक कुख्यात प्राणी, राक्षस, भूत आदि शामिल हैं, जिन्हें उन्होंने अपनी सेवा में विवश किया है।',
    'यक्ष और यक्षिणियाँ भगवान कुबेर के सेवक हैं, जिनके राज्य में पृथ्वी का समस्त खजाना समाहित है। तंत्रराज तंत्र में भी इसी प्रकार की सूची दी गई है। वहाँ कहा गया है कि वे मनोकामना पूरी करने वाली हैं, प्रत्येक की दो भुजाएँ हैं, सुंदर शरीर है, विभिन्न रंगों के उत्तम वस्त्र धारण किए हुए हैं, युवा और चंचल हैं, फूलों की मालाओं से सुशोभित हैं और उन पर इत्र लगा हुआ है। इस तंत्र से वैकल्पिक मंत्र इस प्रकार हैं: ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।'
  ],
  tantrarajaFormulaHi: 'ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।',
  tantrarajaFormulaEn: 'Hrīṃ Śrīṃ Nityadrave Madā .... (Name of Yakṣiṇī in Vocative/Dative) Śrīṃ Hrīṃ'
};

export const YAKSHINI_36_LIST: Yakshini36Entry[] = [
  {
    index: 1,
    nameHi: 'विचित्र (सुंदर)',
    nameEn: '1. Vicitrā (The Wondrous / Beautiful)',
    meaningHi: 'सुंदर / विचित्र रूप वाली',
    meaningEn: 'Beautiful / Of Wondrous Form',
    japaCount: '20,000',
    locusAndMaterialsHi: 'अंजीर के पेड़ की छाल पर मंत्र अंकित करें; सफेद फूल, मदिरा और घी के साथ अग्नि में आहुति।',
    locusAndMaterialsEn: 'Inscribe mantra on fig tree bark; fire oblation with white flowers, wine, and ghee.',
    mantraHi: 'ॐ विचित्र चित्ररूपिणी मे सिद्धिं कुरु कुरु स्वाहा ।',
    mantraEn: 'Oṃ Vicitra Citrarūpiṇī Me Siddhiṃ Kuru Kuru Svāhā',
    siddhiAndBoonsHi: 'वह सभी मनोकामनाएँ पूरी करती हैं (सर्वमनोकामना सिद्धि)।',
    siddhiAndBoonsEn: 'She fulfills all desires and wishes.',
    fullTextHi:
      '(1) विचित्र (सुंदर): इस मंत्र को अंजीर के पेड़ की छाल पर अंकित करना चाहिए और 20,000 बार जपना चाहिए। सफेद फूलों को मदिरा और घी के साथ अग्नि में अर्पित करना चाहिए। मंत्र है: ॐ विचित्र चित्ररूपिणी मे सिद्धिं कुरु कुरु स्वाहा । वह सभी मनोकामनाएँ पूरी करती हैं।',
    fullTextEn:
      '(1) Vicitrā (Beautiful): This mantra should be inscribed on the bark of a fig tree and chanted 20,000 times. White flowers with wine and ghee should be offered into the sacred fire. Mantra: Oṃ Vicitra Citrarūpiṇī Me Siddhiṃ Kuru Kuru Svāhā. She fulfills all desires.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 2,
    nameHi: 'विभ्रम (प्रेममय)',
    nameEn: '2. Vibhramā (The Amorous / Enthralling)',
    meaningHi: 'प्रेममय / विभ्रम उत्पन्न करने वाली',
    meaningEn: 'Amorous / Ecstatic Whirl',
    japaCount: '20,000',
    locusAndMaterialsHi: 'रात्रि में श्मशान की धूल से लिखें; नग्न अवस्था में घी और कपूर से पूजा।',
    locusAndMaterialsEn: 'Write at night with cremation ground dust; worship naked with ghee and camphor.',
    mantraHi: 'ॐ ह्रीं विभ्रम विभ्रमंगरूपे विभ्रमं कुरु रहीं रहीं भगवती स्वाहा ।',
    mantraEn: 'Oṃ Hrīṃ Vibhrama Vibhramaṅgarūpe Vibhramaṃ Kuru Rahīṃ Rahīṃ Bhagavatī Svāhā',
    siddhiAndBoonsHi: 'सम्मोहन एवं प्रेम-सिद्धि।',
    siddhiAndBoonsEn: 'Bestows enchantment and amorous mastery.',
    fullTextHi:
      '(2) विभ्रम (प्रेममय): इस मंत्र को रात के समय श्मशान भूमि की धूल से लिखना चाहिए। व्यक्ति को नग्न रहना चाहिए। घी और कपूर से उनकी पूजा करनी चाहिए और इस मंत्र को 20,000 बार जपना चाहिए। ॐ ह्रीं विभ्रम विभ्रमंगरूपे विभ्रमं कुरु रहीं रहीं भगवती स्वाहा ।',
    fullTextEn:
      '(2) Vibhramā (Amorous): This mantra should be written at night in the dust of a cremation ground while naked. Worship her with ghee and camphor and chant the mantra 20,000 times: Oṃ Hrīṃ Vibhrama Vibhramaṅgarūpe Vibhramaṃ Kuru Rahīṃ Rahīṃ Bhagavatī Svāhā.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 3,
    nameHi: 'हंसि (हंस)',
    nameEn: '3. Haṃsī (The Swan Maiden)',
    meaningHi: 'हंस / हंसवाहिनी',
    meaningEn: 'Swan / Swan-Mounted',
    japaCount: '10,000',
    locusAndMaterialsHi: 'शहर के बाहरी इलाके में; कमल के पत्ते और घी का उपयोग।',
    locusAndMaterialsEn: 'Outskirts of town; using lotus leaves and ghee.',
    mantraHi: 'ॐ द्रिम नमो हंसि हंसवाहिनी क्लीम क्लीम स्वाहा ।',
    mantraEn: 'Oṃ Drim Namo Haṃsi Haṃsavāhinī Klīm Klīm Svāhā',
    siddhiAndBoonsHi: 'दबे हुए खजाने का पता बताती है, और एक ऐसा मरहम (अंजन) प्रदान करती है जिससे ठोस वस्तुओं के आर-पार देखा जा सकता है।',
    siddhiAndBoonsEn: 'Reveals the location of buried treasure and grants an ointment allowing one to see through solid objects.',
    fullTextHi:
      '(3) हंसि (हंस): यह अनुष्ठान शहर के बाहरी इलाके में किया जाना चाहिए। कमल के पत्ते और घी का उपयोग किया जाना चाहिए, और मंत्र का 10,000 बार जाप किया जाना चाहिए। ॐ द्रिम नमो हंसि हंसवाहिनी क्लीम क्लीम स्वाहा । वह दबे हुए खजाने का पता बताती है, और एक ऐसा मरहम प्रदान करती है जिससे ठोस वस्तुओं के आर-पार देखा जा सकता है।',
    fullTextEn:
      '(3) Haṃsī (Swan): Perform this rite on the outskirts of the city using lotus leaves and ghee, chanting 10,000 times: Oṃ Drim Namo Haṃsi Haṃsavāhinī Klīm Klīm Svāhā. She reveals buried treasure and grants an ointment to see through solid matter.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 4,
    nameHi: 'भीषणी (भयानक)',
    nameEn: '4. Bhīṣaṇī (The Formidable / Terrifying)',
    meaningHi: 'भयानक / भयहारी',
    meaningEn: 'Terrifying / Formidable',
    japaCount: '10,000',
    locusAndMaterialsHi: 'तीन रास्तों के संगम (तिराहे) पर; कपूर और घी की आहुति।',
    locusAndMaterialsEn: 'At the junction of three roads; camphor and ghee oblations.',
    mantraHi: 'ॐ ऐं द्रिम महामोदे भीषणी द्रम द्रम स्वाहा ।',
    mantraEn: 'Oṃ Aiṃ Drim Mahāmode Bhīṣaṇī Dram Dram Svāhā',
    siddhiAndBoonsHi: 'भय-निवारण एवं उग्र सिद्धि।',
    siddhiAndBoonsEn: 'Grants formidable command and subjugation of fear.',
    fullTextHi:
      '(4) भीषणी (भयानक): यह अनुष्ठान तीन रास्तों के संगम पर किया जाना चाहिए। मंत्र का 10,000 बार जाप किया जाना चाहिए। कपूर और घी का आहुति के रूप में उपयोग किया जाना चाहिए। ॐ ऐं द्रिम महामोदे भीषणी द्रम द्रम स्वाहा ।',
    fullTextEn:
      '(4) Bhīṣaṇī (Terrifying): Perform this ritual at the junction of three paths. Chant the mantra 10,000 times with camphor and ghee oblations: Oṃ Aiṃ Drim Mahāmode Bhīṣaṇī Dram Dram Svāhā.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 5,
    nameHi: 'जनरंजिका (मनुष्यों को प्रसन्न करने वाली)',
    nameEn: '5. Janarañjikā (Delighter of Mankind)',
    meaningHi: 'मनुष्यों को प्रसन्न करने वाली',
    meaningEn: 'Delighter of People',
    japaCount: '20,000',
    locusAndMaterialsHi: 'रात्रि में कदंब के पेड़ के नीचे; कपूर, चंदन और घी का प्रयोग।',
    locusAndMaterialsEn: 'At night beneath a Kadamba tree; camphor, sandalwood, and ghee.',
    mantraHi: 'ॐ ह्रीं क्लीं जनरंजिके स्वाहा ।',
    mantraEn: 'Oṃ Hrīṃ Klīṃ Janarañjike Svāhā',
    siddhiAndBoonsHi: 'वह अपार सौभाग्य और सुख प्रदान करती है।',
    siddhiAndBoonsEn: 'Bestows immense good fortune and happiness.',
    fullTextHi:
      '(5) जनरंजिका (मनुष्यों को प्रसन्न करने वाली): यह मंत्र रात में कदंब के पेड़ के नीचे 20,000 बार जाप किया जाना चाहिए। कपूर, चंदन और घी का प्रयोग किया जाता है। ॐ ह्रीं क्लीं जनरंजिके स्वाहावह अपार सौभाग्य और सुख प्रदान करती है।',
    fullTextEn:
      '(5) Janarañjikā (Delighter of People): Chant this mantra 20,000 times at night under a Kadamba tree using camphor, sandalwood, and ghee: Oṃ Hrīṃ Klīṃ Janarañjike Svāhā. She bestows great fortune and joy.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 6,
    nameHi: 'विशाला (बड़ी आँखों वाली)',
    nameEn: '6. Viśālā (The Large-Eyed One)',
    meaningHi: 'बड़ी आँखों वाली',
    meaningEn: 'Wide-Eyed / Broad-Visioned',
    japaCount: '10,000',
    locusAndMaterialsHi: 'इमली की छाल पर मंत्र लिखें; 100 पत्ते, फूल और घी अर्पित करें।',
    locusAndMaterialsEn: 'Write mantra on tamarind bark; offer 100 leaves, flowers, and ghee.',
    mantraHi: 'ओम ऐम ह्रीं विशाले स्त्रम स्त्रम एहयेहि स्वाहा ।',
    mantraEn: 'Oṃ Aim Hrīṃ Viśāले Stram Stram Ehyehi Svāhā',
    siddhiAndBoonsHi: 'वह दिव्य औषधि (रसायन) प्रदान करती है।',
    siddhiAndBoonsEn: 'She bestows miraculous alchemical medicine.',
    fullTextHi:
      '(6) विशाला (बड़ी आँखों वाली): इमली की छाल पर मंत्र लिखें। इसका 10,000 बार जाप करें। 100 पत्ते, फूल और घी अर्पित करें। ओम ऐम ह्रीं विशाले स्त्रम स्त्रम एहयेहि स्वाहा । वह औषधि प्रदान करती है।',
    fullTextEn:
      '(6) Viśālā (Large-Eyed): Write the mantra on tamarind bark, chant 10,000 times, and offer 100 leaves, flowers, and ghee: Oṃ Aim Hrīṃ Viśāle Stram Stram Ehyehi Svāhā. She grants miraculous medicine.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 7,
    nameHi: 'मदना (कामुक)',
    nameEn: '7. Madanā (The Passionate / Lustrous)',
    meaningHi: 'कामुक / मदन-विदम्बिनी',
    meaningEn: 'Impassioned / Outshining Kāma',
    japaCount: '10,000',
    locusAndMaterialsHi: 'एक शुद्ध राजा के द्वार के पास; चमेली के फूलों के रस से अर्पण।',
    locusAndMaterialsEn: 'Near the gate of a righteous king; offerings with jasmine flower juice.',
    mantraHi: 'ओम ह्रीं मदने मदनविदम्बिनी आलय संगमं देहि देहि श्रीं स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Madane Madanavidambinī Ālaya Saṅgamaṃ Dehi Dehi Śrīṃ Svāhā',
    siddhiAndBoonsHi: 'वह सर्वगुणकारी औषधि (गुटिका) प्रदान करती है।',
    siddhiAndBoonsEn: 'Bestows an all-beneficial panacea (alchemical pill/medicine).',
    fullTextHi:
      '(7) मदन (कामुक): एक शुद्ध राजा के द्वार के पास 10,000 बार मंत्र का जाप करें। चमेली के फूलों के रस से अर्पित करें। ओम ह्रीं मदने मदनविदम्बिनी आलय संगमं देहि देहि श्रीं स्वाहा। वह सर्वगुणकारी औषधि प्रदान करती है।',
    fullTextEn:
      '(7) Madanā (Amorous): Chant 10,000 times near the gate of a pure king and offer jasmine flower extract: Oṃ Hrīṃ Madane Madanavidambinī Ālaya Saṅgamaṃ Dehi Dehi Śrīṃ Svāhā. She grants a panacea.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 8,
    nameHi: 'घंटा (घंटी)',
    nameEn: '8. Ghaṇṭā (The Sacred Bell)',
    meaningHi: 'घंटी / नाद-स्वरूपिणी',
    meaningEn: 'Bell / Resonant Sound',
    japaCount: '20,000',
    locusAndMaterialsHi: 'एक सुंदर घंटी के सामने 20,000 बार जाप करें।',
    locusAndMaterialsEn: 'Chant 20,000 times in front of a beautiful consecrated bell.',
    mantraHi: 'ओम ऐम द्रिम पुरीं क्षोभय प्रजा क्षोभय भगवती गंभीरस्वप्ने स्वप्ने स्वाहा ।',
    mantraEn: 'Oṃ Aim Drim Purīṃ Kṣobhaya Prajā Kṣobhaya Bhagavatī Gambhīrasvapne Svapne Svāhā',
    siddhiAndBoonsHi: 'वह संसार को मोहित करने की क्षमता (जगन्मोहन सिद्धि) प्रदान करती है।',
    siddhiAndBoonsEn: 'Grants the power to enchant the entire world.',
    fullTextHi:
      '(8) घंटा (घंटी): एक सुंदर घंटी के सामने 20,000 बार जाप करें। ओम ऐम द्रिम पुरीं क्षोभय प्रजा क्षोभय भगवती गंभीरस्वप्ने स्वप्ने स्वाहा । वह संसार को मोहित करने की क्षमता प्रदान करती है।',
    fullTextEn:
      '(8) Ghaṇṭā (Bell): Chant 20,000 times before a beautiful bell: Oṃ Aim Drim Purīṃ Kṣobhaya Prajā Kṣobhaya Bhagavatī Gambhīrasvapne Svapne Svāhā. She bestows the ability to enchant the world.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 9,
    nameHi: 'कलाकर्णी (कलों से सुशोभित कान)',
    nameEn: '9. Kalākarṇī (Ears Adorned with Kalās)',
    meaningHi: 'कलाओं से सुशोभित कान वाली',
    meaningEn: 'Ears Adorned with Arts/Digits',
    japaCount: '10,000',
    locusAndMaterialsHi: '100 घास (दूर्वा/कुश) की पत्तियां और मदिरा अर्पित करें।',
    locusAndMaterialsEn: 'Offer 100 blades of sacred grass and wine.',
    mantraHi: 'ॐ हम कलाकर्णी ताः ताः स्वाः ।',
    mantraEn: 'Oṃ Ham Kalākarṇī Tāḥ Tāḥ Svāhā',
    siddhiAndBoonsHi: 'जाप में सफलता पराक्रम और अलौकिक शक्ति प्रदान करती है।',
    siddhiAndBoonsEn: 'Success in recitation grants supernatural power and strength.',
    fullTextHi:
      '(9) कलाकर्णी (कलों से सुशोभित कान): इस मंत्र का 10,000 बार जाप करें और 100 घास की पत्तियां और मदिरा अर्पित करें। ॐ हम कलाकर्णी ताः ताः स्वाः । जाप में सफलता शक्ति प्रदान करती है।',
    fullTextEn:
      '(9) Kalākarṇī (Ears Adorned with Kalās): Chant 10,000 times and offer 100 blades of grass and wine: Oṃ Ham Kalākarṇī Tāḥ Tāḥ Svāhā. Success bestows great power.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 10,
    nameHi: 'महाभया (अत्यंत भयभीत / भयनाशिनी)',
    nameEn: '10. Mahābhayā (Transcending Great Fear)',
    meaningHi: 'अत्यंत भयभीत / महाभय से मुक्त करने वाली',
    meaningEn: 'Great Fear / Remover of Dread',
    japaCount: '10,000',
    locusAndMaterialsHi: 'श्मशान में अस्थि-ढेर पर बैठकर अनुष्ठान करें।',
    locusAndMaterialsEn: 'Perform in a cremation ground seated upon a mound of bones.',
    mantraHi: 'ॐ द्रिं महाभय प्रेम स्वाः।',
    mantraEn: 'Oṃ Driṃ Mahābhaya Prema Svāhā',
    siddhiAndBoonsHi: 'रोग से सुरक्षा, भय से मुक्ति, रसायन विद्या का रहस्य तथा सफेद बालों और वृद्धावस्था के लक्षणों से मुक्ति (कायाकल्प)।',
    siddhiAndBoonsEn: 'Protection from disease, freedom from fear, secrets of alchemy (Rasāyana), and reversal of grey hair and old age.',
    fullTextHi:
      '(10) महाभय (अत्यंत भयभीत): अस्थि-ढेर पर बैठकर, श्मशान में यह अनुष्ठान करें। इस मंत्र का 10,000 बार जाप करें। सफलता रोग से सुरक्षा प्रदान करती है। ॐ द्रिं महाभय प्रेम स्वाः। वह भय से मुक्ति और रसायन विद्या का रहस्य प्रदान करती है, साथ ही सफेद बालों और वृद्धावस्था के लक्षणों से भी मुक्ति दिलाती है।',
    fullTextEn:
      '(10) Mahābhayā: Seated on a pile of bones in a cremation ground, chant 10,000 times: Oṃ Driṃ Mahābhaya Prema Svāhā. She grants immunity from disease, freedom from fear, the secret of Rasāyana alchemy, and freedom from grey hair and old age.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 11,
    nameHi: 'महेंद्री (अत्यंत शक्तिशाली)',
    nameEn: '11. Mahendrī (Supremely Powerful)',
    meaningHi: 'अत्यंत शक्तिशाली / इन्द्र-शक्ति',
    meaningEn: 'Supremely Sovereign / Great Indrāṇī Power',
    japaCount: 'सिद्धि पर्यन्त (इंद्रधनुष दर्शन काल)',
    locusAndMaterialsHi: 'आकाश में इंद्रधनुष दिखाई देने पर तुलसी के पौधे के पास जाप करें।',
    locusAndMaterialsEn: 'Chant near a Tulasī plant whenever a rainbow appears in the sky.',
    mantraHi: 'ॐ ह्रीं महेंद्रि मंत्रसिद्धिं कुरु कुरु कुलु कुलु हंसः सोहम स्वाः ।',
    mantraEn: 'Oṃ Hrīṃ Mahendri Mantrasiddhiṃ Kuru Kuru Kulu Kulu Haṃsaḥ Sohaṃ Svāhā',
    siddhiAndBoonsHi: 'व्यक्ति उड़ने (खेचरी) और कहीं भी जाने में सक्षम हो जाता है; पाताल सिद्धि प्राप्त होती है।',
    siddhiAndBoonsEn: 'Grants flight/astral travel anywhere and Pātāla-Siddhi (mastery over subterranean realms).',
    fullTextHi:
      '(11) महेंद्रि (अत्यंत शक्तिशाली): इस मंत्र में सफलता का अर्थ है कि व्यक्ति उड़ने और कहीं भी जाने में सक्षम हो जाता है। इंद्रधनुष दिखाई देने पर तुलसी के पौधे के पास इसका जाप करें। ॐ ह्रीं महेंद्रि मंत्रसिद्धिं कुरु कुरु कुलु कुलु हंसः सोहम स्वाः । पाताल सिद्धि प्राप्त होती है।',
    fullTextEn:
      '(11) Mahendrī (Supremely Powerful): Chant near a Tulasī plant when a rainbow appears: Oṃ Hrīṃ Mahendri Mantrasiddhiṃ Kuru Kuru Kulu Kulu Haṃsaḥ Sohaṃ Svāhā. Success enables aerial travel and Pātāla Siddhi.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 12,
    nameHi: 'शंखिनी (शंख कन्या)',
    nameEn: '12. Śaṅkhinī (The Conch Maiden)',
    meaningHi: 'शंख कन्या / शंखधारिणी',
    meaningEn: 'Conch Maiden',
    japaCount: 'सूर्योदय साधना',
    locusAndMaterialsHi: 'सूर्योदय के समय करवीर (कनेर) पुष्प और घी का प्रयोग करते हुए साधना करें।',
    locusAndMaterialsEn: 'Practice at sunrise using red oleander (karavīra) flowers and ghee.',
    mantraHi: 'ॐ ह्रीं शंखधारिणी शंखधारणे द्रं द्रं क्लीं श्रीं स्वाहा ।',
    mantraEn: 'Oṃ Hrīṃ Śaṅkhadhāriṇī Śaṅkhadhāraṇe Draṃ Draṃ Klīṃ Śrīṃ Svāhā',
    siddhiAndBoonsHi: 'सफलता से सभी मनोकामनाएं पूरी होती हैं।',
    siddhiAndBoonsEn: 'Success fulfills all desired wishes.',
    fullTextHi:
      '(12) शंखिणी (शंख कन्या): सूर्योदय के समय करावीरा पुष्प और घी का प्रयोग करते हुए साधना करें। सफलता से सभी मनोकामनाएं पूरी होती हैं। ॐ ह्रीं शंखधारिणी शंखधारणे द्रं द्रं क्लीं श्रीं स्वाहा ।',
    fullTextEn:
      '(12) Śaṅkhinī (Conch Maiden): Practice at sunrise using Karavīra (oleander) flowers and ghee: Oṃ Hrīṃ Śaṅkhadhāriṇī Śaṅkhadhāraṇe Draṃ Draṃ Klīṃ Śrīṃ Svāhā. Fulfills all wishes.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 13,
    nameHi: 'चंद्री (चंद्र कन्या)',
    nameEn: '13. Candrī (The Moon Maiden)',
    meaningHi: 'चंद्र कन्या',
    meaningEn: 'Lunar Maiden',
    japaCount: '(12) शंखिनी के समान',
    locusAndMaterialsHi: 'उनकी साधना (12) शंखिनी के समान है (करवीर पुष्प एवं घी)।',
    locusAndMaterialsEn: 'Her ritual observance is identical to (12) Śaṅkhinī.',
    mantraHi: 'ह्रीं श्रीं नित्यद्रवे मदा चन्द्रि श्रीं ह्रीं (तंत्रराज वैकल्पिक सूत्र)',
    mantraEn: 'Hrīṃ Śrīṃ Nityadrave Madā Candri Śrīṃ Hrīṃ (Tantrarāja Formula)',
    siddhiAndBoonsHi: 'मनोकामना पूर्ति एवं चन्द्र-सौम्यता।',
    siddhiAndBoonsEn: 'Fulfillment of desires and lunar grace.',
    fullTextHi: '(13) चंद्री (चंद्र कन्या): उनकी साधना (12) के समान है।',
    fullTextEn: '(13) Candrī (Moon Maiden): Her ritual method is the same as (12) Śaṅkhinī.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 14,
    nameHi: 'श्मशाना (श्मशान कन्या)',
    nameEn: '14. Śmaśānā (The Cremation Ground Maiden)',
    meaningHi: 'श्मशान कन्या / श्मशान-वासिनी',
    meaningEn: 'Maiden of the Cremation Ground',
    japaCount: '40,000',
    locusAndMaterialsHi: 'शुद्ध व्यक्ति श्मशान में पूर्णतया नग्न होकर और श्मशान की राख (भस्म) लपेटकर जाप करे।',
    locusAndMaterialsEn: 'In a cremation ground, pure adept naked and smeared with pyre ash chants 40,000 times.',
    mantraHi: 'ॐ द्रं द्रं श्मशान वासिनी स्वाहा।',
    mantraEn: 'Oṃ Draṃ Draṃ Śmaśāna Vāsinī Svāhā',
    siddhiAndBoonsHi: 'धन प्रदान करती हैं, बाधाओं को दूर करती हैं और व्यक्ति केवल एक नज़र से विरोधियों को स्तंभित (लकवाग्रस्त) कर सकता है।',
    siddhiAndBoonsEn: 'Grants wealth, removes obstacles, and gives the power to paralyze (stambhana) with a single glance.',
    fullTextHi:
      '(14) श्मशान (श्मशान कन्या): शुद्ध व्यक्ति को श्मशान में उनके मंत्र का 40,000 बार जाप करना चाहिए। व्यक्ति को पूर्णतया नग्न होना चाहिए और श्मशान की राख से लिपटा होना चाहिए। वह धन प्रदान करती हैं, बाधाओं को दूर करती हैं और व्यक्ति केवल एक नज़र से लोगों को लकवाग्रस्त कर सकता है। ॐ द्रं द्रं श्मशान वासिनी स्वाहा।',
    fullTextEn:
      '(14) Śmaśānā (Cremation Maiden): A pure practitioner should chant her mantra 40,000 times in a cremation ground, naked and covered in cremation ash: Oṃ Draṃ Draṃ Śmaśāna Vāsinī Svāhā. She bestows wealth, removes obstacles, and grants stambhana by a mere glance.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 15,
    nameHi: 'वटयक्षिणी',
    nameEn: '15. Vaṭayakṣiṇī (Yakṣiṇī of the Banyan/Fig Tree)',
    meaningHi: 'वट-वृक्ष वासिनी यक्षिणी',
    meaningEn: 'Dweller in the Sacred Banyan Tree',
    japaCount: '30,000',
    locusAndMaterialsHi: 'रात्रि में, तीन मार्गों के संगम पर, अंजीर/वट वृक्ष के पास।',
    locusAndMaterialsEn: 'At night, at a three-road junction near a banyan/fig tree.',
    mantraHi: 'ॐ श्रीं द्रिम वटवासिनी यक्षकुलप्रसुते वटयक्षिणी एहयेहि स्वाहा।',
    mantraEn: 'Oṃ Śrīṃ Drim Vaṭavāsinī Yakṣakulaprasūte Vaṭayakṣiṇī Ehyehi Svāhā',
    siddhiAndBoonsHi: 'रसायन शास्त्र के रहस्य, दिव्य रत्न, उत्तम वस्त्र और एक दिव्य जादुई मरहम (अंजन) प्रदान करती हैं।',
    siddhiAndBoonsEn: 'Bestows secrets of alchemy, celestial jewels, garments, and a magical salve.',
    fullTextHi:
      '(15) वटयक्षिणी: यह विधि रात्रि में, तीन मार्गों के संगम पर, अंजीर के वृक्ष के पास करनी चाहिए। वह रसायन शास्त्र के रहस्य, दिव्य रत्न और वस्त्र प्रदान करती हैं। मंत्र का 30,000 बार जाप करना चाहिए। वह एक दिव्य और जादुई मरहम भी देती है।ॐ श्रीं द्रिम वटवासिनी यक्षकुलप्रसुते वटयक्षिणी एहयेहि स्वाहा।',
    fullTextEn:
      '(15) Vaṭayakṣiṇī: Perform at night at a three-way crossroads near a fig/banyan tree, chanting 30,000 times: Oṃ Śrīṃ Drim Vaṭavāsinī Yakṣakulaprasūte Vaṭayakṣiṇī Ehyehi Svāhā. She grants secrets of alchemy, divine gems, robes, and a magical ointment.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 16,
    nameHi: 'मेखला (प्रेम की कमरबंद)',
    nameEn: '16. Mekhalā (Girdle of Love)',
    meaningHi: 'प्रेम की कमरबंद / करधनी',
    meaningEn: 'Girdle of Kāma',
    japaCount: 'चतुर्दशी रात्रि अनुष्ठान',
    locusAndMaterialsHi: 'चंद्र चक्र के चौदहवें दिन (चतुर्दशी) खिले हुए मधुका (महुआ) वृक्ष की जड़ में जाकर उच्चारण करें।',
    locusAndMaterialsEn: 'On the 14th lunar day (Caturdaśī) at the root of a blooming Madhūka tree.',
    mantraHi: 'ॐ द्रिम हम मदनमेखलयै मदनविदंबनयै नमः स्वाहा।',
    mantraEn: 'Oṃ Drim Ham Madanamekhalāyai Madanavidambanāyai Namaḥ Svāhā',
    siddhiAndBoonsHi: 'एक जादुई लेप (सिद्ध अंजन/तिलक) प्राप्त होता है जो सभी मनोकामनाओं को पूरा करता है।',
    siddhiAndBoonsEn: 'Grants a magical salve that fulfills all desires.',
    fullTextHi:
      '(16) मेखला (प्रेम की कमरबंद): यदि साधक चंद्र चक्र के चौदहवें दिन खिले हुए मधुका वृक्ष की जड़ में जाकर इस मंत्र का उच्चारण करता है, तो एक जादुई लेप प्राप्त होता है जो सभी मनोकामनाओं को पूरा करता है। ॐ द्रिम हम मदनमेखलयै मदनविदंबनयै नमः स्वाहा।',
    fullTextEn:
      '(16) Mekhalā (Girdle of Love): Chanting this mantra at the root of a blossoming Madhūka tree on the 14th lunar day yields a magical salve that fulfills all wishes: Oṃ Drim Ham Madanamekhalāyai Madanavidambanāyai Namaḥ Svāhā.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 17,
    nameHi: 'विकला',
    nameEn: '17. Vikalā (The Transcendent Digit)',
    meaningHi: 'विकला / कला-विशेषा',
    meaningEn: 'Beyond Ordinary Measure',
    japaCount: '3 माह निरंतर जाप',
    locusAndMaterialsHi: 'किसी गुप्त (एकांत) स्थान पर रहकर तीन महीने तक मंत्र का जाप करें।',
    locusAndMaterialsEn: 'Reside in a secret, secluded place and chant for three months.',
    mantraHi: 'ॐ विकला ऐं ह्रीं श्रीं क्लीं स्वाहा ।',
    mantraEn: 'Oṃ Vikalā Aiṃ Hrīṃ Śrīṃ Klīṃ Svāhā',
    siddhiAndBoonsHi: 'वह मनचाहा फल (अभीष्ट सिद्धि) प्रदान करती है।',
    siddhiAndBoonsEn: 'Bestows the exact fruit desired by the practitioner.',
    fullTextHi:
      '(17) विकला: तीन महीने तक मंत्र का जाप करें। किसी गुप्त स्थान पर रहें। वह मनचाहा फल प्रदान करती है। ॐ विकला ऐं ह्रीं श्रीं क्लीं स्वाहा ।',
    fullTextEn:
      '(17) Vikalā: Chant for three months while staying in a secret place: Oṃ Vikalā Aiṃ Hrīṃ Śrīṃ Klīṃ Svāhā. She grants the desired fruit.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 18,
    nameHi: 'लक्ष्मी (धन)',
    nameEn: '18. Lakṣmī Yakṣiṇī (Wealth & Prosperity)',
    meaningHi: 'धन एवं ऐश्वर्य दात्री',
    meaningEn: 'Bestower of Fortune & Treasure',
    japaCount: '10,000',
    locusAndMaterialsHi: 'अपने घर में लाल सुगंधित फूलों का उपयोग करके अग्नि जलाएं और आहुति दें।',
    locusAndMaterialsEn: 'In one’s own home, kindle sacred fire and offer fragrant red flowers.',
    mantraHi: 'ॐ ऐं ह्रीं श्रीं लक्ष्मी कमलधारिणी हंसः सोहम स्वाहा ।',
    mantraEn: 'Oṃ Aiṃ Hrīṃ Śrīṃ Lakṣmī Kamaladhāriṇī Haṃsaḥ Sohaṃ Svāhā',
    siddhiAndBoonsHi: 'लक्ष्मी सिद्धि, रसायन शास्त्र के रहस्य और दिव्य खजाना प्रदान करती है।',
    siddhiAndBoonsEn: 'Grants Lakṣmī-Siddhi, secrets of alchemy, and divine treasure.',
    fullTextHi:
      '(18) लक्ष्मी (धन): अपने घर में लाल सुगंधित फूलों का उपयोग करके अग्नि जलाएं और 10,000 बार मंत्र का जाप करें। वह लक्ष्मी सिद्धि, रसायन शास्त्र के रहस्य और दिव्य खजाना प्रदान करती है। ॐ ऐं ह्रीं श्रीं लक्ष्मी कमलधारिणी हंसः सोहम स्वाहा ।',
    fullTextEn:
      '(18) Lakṣmī (Wealth): Kindle a fire at home using fragrant red flowers and chant 10,000 times: Oṃ Aiṃ Hrīṃ Śrīṃ Lakṣmī Kamaladhāriṇī Haṃsaḥ Sohaṃ Svāhā. She grants Lakṣmī Siddhi, alchemical secrets, and divine treasure.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 19,
    nameHi: 'मालिनी (फूलवाली)',
    nameEn: '19. Mālinī (The Flower-Garlanded One)',
    meaningHi: 'फूलवाली / मालाधारिणी',
    meaningEn: 'Garlanded Maiden',
    japaCount: '10,000',
    locusAndMaterialsHi: 'चौराहे (चतुष्पथ) पर 10,000 बार मंत्र का जाप करें।',
    locusAndMaterialsEn: 'Chant 10,000 times at a four-way crossroads (catuṣpatha).',
    mantraHi: 'ओम द्रिम ओम नमो मालिनी स्त्री एह्येहि सुंदरी हम्स हम्सि समिहम मे संगभया स्वाहा।',
    mantraEn: 'Oṃ Drim Oṃ Namo Mālinī Strī Ehyehi Sundarī Haṃsa Haṃsi Samiham Me Saṅgabhayā Svāhā',
    siddhiAndBoonsHi: 'खड्ग सिद्धि प्राप्त होती है, जिसका अर्थ है किसी भी हथियार को रोकने की क्षमता और अजेयता।',
    siddhiAndBoonsEn: 'Bestows Khaḍga-Siddhi (invulnerability and the ability to repel any weapon).',
    fullTextHi:
      '(19) मालिनी (फूलवाली): चौराहे पर 10,000 बार मंत्र का जाप करें। इससे खड्ग सिद्धि प्राप्त होती है, जिसका अर्थ है किसी भी हथियार को रोकने की क्षमता। ओम द्रिम ओम नमो मालिनी स्त्री एह्येहि सुंदरी हम्स हम्सि समिहम मे संगभया स्वाहा।',
    fullTextEn:
      '(19) Mālinī (Flower-Maiden): Chant 10,000 times at a crossroads: Oṃ Drim Oṃ Namo Mālinī Strī Ehyehi Sundarī Haṃsa Haṃsi Samiham Me Saṅgabhayā Svāhā. Grants Khaḍga Siddhi (stopping any weapon).',
    categoryGroup: 'astral-occult'
  },
  {
    index: 20,
    nameHi: 'शतपत्रिका (100 फूल)',
    nameEn: '20. Śatapatrikā (Hundred-Petaled Lotus)',
    meaningHi: '100 फूल / शतदल कमल',
    meaningEn: 'Hundred-Petaled One',
    japaCount: '100 पुष्प हवन',
    locusAndMaterialsHi: 'जंगल (वन) में मंत्र का जाप करें; अग्नि प्रज्वलित कर उसमें 100 फूल अर्पित करें।',
    locusAndMaterialsEn: 'In a forest, kindle fire and offer 100 flowers while chanting.',
    mantraHi: 'ओम द्रिम शतपत्रिका द्रिम द्रिम श्रीम स्वाहा।',
    mantraEn: 'Oṃ Drim Śatapatrikā Drim Drim Śrīm Svāhā',
    siddhiAndBoonsHi: 'वन-संपदा एवं श्री-समृद्धि सिद्धि।',
    siddhiAndBoonsEn: 'Grants auspicious abundance and floral grace.',
    fullTextHi:
      '(20) शतपत्रिका (100 फूल): जंगल में मंत्र का जाप करें। अग्नि प्रज्वा करें और उसमें 100 फूल अर्पित करें। ओम द्रिम शतपत्रिका द्रिम द्रिम श्रीम स्वाहा।',
    fullTextEn:
      '(20) Śatapatrikā (100 Petals): Chant in the forest, kindle a fire, and offer 100 flowers: Oṃ Drim Śatapatrikā Drim Drim Śrīm Svāhā.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 21,
    nameHi: 'सुलोचना (सुंदर नेत्रों वाली)',
    nameEn: '21. Sulocanā (The Fair-Eyed One)',
    meaningHi: 'सुंदर नेत्रों वाली',
    meaningEn: 'Luminous-Eyed Maiden',
    japaCount: '30,000',
    locusAndMaterialsHi: 'नदी के किनारे अग्नि प्रज्वलित कर घी और सुगंधित पदार्थ अर्पित करें।',
    locusAndMaterialsEn: 'On a riverbank, kindle fire and offer ghee and aromatic substances.',
    mantraHi: 'ओम द्रिम क्लीम सुलोचने सिद्धिम मे देहि देहि स्वाहा।',
    mantraEn: 'Oṃ Drim Klīm Sulocane Siddhiṃ Me Dehi Dehi Svāhā',
    siddhiAndBoonsHi: 'पादुका सिद्धि प्राप्त होती है, जिससे आकाश में तीव्र गति से यात्रा करने की क्षमता प्राप्त होती है।',
    siddhiAndBoonsEn: 'Grants Pādukā-Siddhi (the power to travel swiftly through the sky).',
    fullTextHi:
      '(21) सुलोचना (सुंदर नेत्रों वाली): नदी के किनारे 30,000 बार जाप करें। अग्नि प्रज्वा करें और घी और अन्य सुगंधित पदार्थ अर्पित करें। इससे पादुका सिद्धि प्राप्त होती है, जिससे आकाश में तीव्र गति से यात्रा करने की क्षमता प्राप्त होती है। ओम द्रिम क्लीम सुलोचने सिद्धिम मे देहि देहि स्वाहा।',
    fullTextEn:
      '(21) Sulocanā (Fair-Eyed): Chant 30,000 times on a riverbank with fire offerings of ghee and aromatics: Oṃ Drim Klīm Sulocane Siddhiṃ Me Dehi Dehi Svāhā. Bestows Pādukā Siddhi for swift aerial travel.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 22,
    nameHi: 'शोभा',
    nameEn: '22. Śobhā (Splendor & Radiance)',
    meaningHi: 'शोभा / सौंदर्य-कांति',
    meaningEn: 'Beauty & Splendor',
    japaCount: 'चतुर्दशी (14वें दिन) जाप',
    locusAndMaterialsHi: 'लाल वस्त्र पहनें और चंद्र के 14वें दिन (चतुर्दशी) मंत्र का जाप करें।',
    locusAndMaterialsEn: 'Wear red garments and chant on the 14th lunar day (Caturdaśī).',
    mantraHi: 'ओम द्रिं अशोक पल्लव करतले शोभने श्रीं क्षः स्वाहा ।',
    mantraEn: 'Oṃ Driṃ Aśoka Pallava Karatale Śobhane Śrīṃ Kṣaḥ Svāhā',
    siddhiAndBoonsHi: 'देवी पूर्ण आनंद की शक्ति और अपार सौंदर्य प्रदान करती हैं।',
    siddhiAndBoonsEn: 'Bestows supreme bliss and peerless beauty.',
    fullTextHi:
      '(22) शोभा: लाल वस्त्र पहनें। 14वें दिन मंत्र का जाप करें। देवी पूर्ण आनंद की शक्ति और अपार सौंदर्य प्रदान करती हैं। ओम द्रिं अशोक पल्लव करतले शोभने श्रीं क्षः स्वाहा ।',
    fullTextEn:
      '(22) Śobhā: Wear red clothes and chant on the 14th day: Oṃ Driṃ Aśoka Pallava Karatale Śobhane Śrīṃ Kṣaḥ Svāhā. She grants supreme joy and immense beauty.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 23,
    nameHi: 'कपालिनी (खोपड़ी वाली कन्या)',
    nameEn: '23. Kapālinī (The Skull-Bearing Maiden)',
    meaningHi: 'खोपड़ी (कपाल) धारण करने वाली कन्या',
    meaningEn: 'Maiden Bearing the Kapāla',
    japaCount: '20,000',
    locusAndMaterialsHi: 'उबले हुए चावल और अन्य स्वादिष्ट खाद्य पदार्थ अर्पित करते हुए जाप करें।',
    locusAndMaterialsEn: 'Offer boiled rice and savory foods while chanting 20,000 times.',
    mantraHi: 'ओम कपालिनी द्रिं द्रिं क्लम क्लिम क्लम क्लम क्लह हम्सः सोहम सा का ला ह्रीं फट स्वाहा।',
    mantraEn: 'Oṃ Kapālinī Driṃ Driṃ Klam Klim Klam Klam Klah Haṃsaḥ Sohaṃ Sa Ka La Hrīṃ Phaṭ Svāhā',
    siddhiAndBoonsHi: 'कपाल सिद्धि प्रदान करती हैं तथा स्वप्न में आकाश में कहीं भी जाने और सुदूर दर्शन की शक्ति देती हैं।',
    siddhiAndBoonsEn: 'Grants Kapāla-Siddhi and the power to travel anywhere in the sky during dreams.',
    fullTextHi:
      '(23) कपालिनी (खोपड़ी वाली कन्या): वह कपाल सिद्धि प्रदान करती हैं। उबले हुए चावल और अन्य कई स्वादिष्ट खाद्य पदार्थ अर्पित करते हुए उनके मंत्र का 20,000 बार जाप करें। वह स्वप्न में आकाश में कहीं भी जाने और किसी भी दूर तक जाने की शक्ति प्रदान करती हैं। ओम कपालिनी द्रिं द्रिं क्लम क्लिम क्लम क्लम क्लह हम्सः सोहम सा का ला ह्रीं फट स्वाहा।',
    fullTextEn:
      '(23) Kapālinī (Skull Maiden): Offer boiled rice and delicacies while chanting 20,000 times: Oṃ Kapālinī Driṃ Driṃ Klam Klim Klam Klam Klah Haṃsaḥ Sohaṃ Sa Ka La Hrīṃ Phaṭ Svāhā. She grants Kapāla Siddhi and astral dream travel.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 24,
    nameHi: 'वरयक्षिणी',
    nameEn: '24. Varayakṣiṇī (Boon-Bestowing Yakṣiṇī)',
    meaningHi: 'श्रेष्ठ वर देने वाली यक्षिणी',
    meaningEn: 'Supreme Boon-Giver',
    japaCount: '50,000',
    locusAndMaterialsHi: 'नदी के किनारे अग्नि प्रज्वलित कर घी और सुगंधित पदार्थों से आहुति दें।',
    locusAndMaterialsEn: 'On a riverbank, kindle fire and offer ghee and fragrant substances.',
    mantraHi: 'ओम वरयाक्षिणी वरयाक्ष विशालिनी आगाच्छ आगाच्छ प्रियं मे भवतु हैमे भव स्वाहा।',
    mantraEn: 'Oṃ Varayakṣiṇī Varayakṣa Viśālinī Āgaccha Āgaccha Priyaṃ Me Bhavatu Haime Bhava Svāhā',
    siddhiAndBoonsHi: 'स्वर्ण-सिद्धि एवं अभीष्ट वरदान की प्राप्ति।',
    siddhiAndBoonsEn: 'Grants golden prosperity and cherished boons.',
    fullTextHi:
      '(24) वरयाक्षिणी: नदी के किनारे उनके मंत्र का 50,000 बार जाप करें। अग्नि प्रज्वलित करें और उसमें घी और अन्य सुगंधित पदार्थ डालें। ओम वरयाक्षिणी वरयाक्ष विशालिनी आगाच्छ आगाच्छ प्रियं मे भवतु हैमे भव स्वाहा।',
    fullTextEn:
      '(24) Varayakṣiṇī: Chant 50,000 times on a riverbank with fire oblations of ghee and aromatics: Oṃ Varayakṣiṇī Varayakṣa Viśālinī Āgaccha Āgaccha Priyaṃ Me Bhavatu Haime Bhava Svāhā.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 25,
    nameHi: 'नटी (अभिनेत्री)',
    nameEn: '25. Naṭī (The Celestial Actress / Dancer)',
    meaningHi: 'अभिनेत्री / महानटी',
    meaningEn: 'Celestial Dancer & Actress',
    japaCount: '1,000 (रात्रि पूजा)',
    locusAndMaterialsHi: 'अशोक वृक्ष की जड़ में चंदन के तेल से घेरा बनाएँ; रात्रि में नग्न अवस्था में रस अर्पित करें।',
    locusAndMaterialsEn: 'At the root of a fine Aśoka tree, draw a circle with sandalwood oil; worship at night offering juice.',
    mantraHi: 'ॐ द्रिं नाटी महानति रूपावती द्रिं स्वाहा।',
    mantraEn: 'Oṃ Driṃ Nāṭī Mahānati Rūpāvatī Driṃ Svāhā',
    siddhiAndBoonsHi: 'गुप्त खजाना, एक रासायनिक लेप (अंजन) और मंत्र योग की शक्ति प्रदान करती हैं।',
    siddhiAndBoonsEn: 'Bestows hidden treasure, an alchemical ointment, and the power of Mantra-Yoga.',
    fullTextHi:
      '(25) नाटी (अभिनेत्री): एक उत्तम अशोक वृक्ष की जड़ में जाकर चंदन के तेल से एक घेरा बनाएँ। नग्न अवस्था में, 1000 बार मंत्र का उच्चारण करते हुए यक्षिणी को रस अर्पित करें। यह पूजा रात्रि में की जाती है। नाटी गुप्त खजाना, एक रासायनिक लेप और मंत्र योग की शक्ति प्रदान करती हैं। उनका मंत्र है: ॐ द्रिं नाटी महानति रूपावती द्रिं स्वाहा।',
    fullTextEn:
      '(25) Naṭī (Actress): At the root of an Aśoka tree, draw a sandalwood-oil circle and chant 1,000 times at night offering juice: Oṃ Driṃ Nāṭī Mahānati Rūpāvatī Driṃ Svāhā. She grants hidden treasure, alchemical paste, and Mantra-Yoga power.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 26,
    nameHi: 'कामेश्वरी यक्षिणी',
    nameEn: '26. Kāmeśvarī Yakṣiṇī',
    meaningHi: 'काम-सिद्धि एवं रसायन दात्री',
    meaningEn: 'Lady of Desire & Alchemy',
    japaCount: '3,000 प्रति संध्या (1 माह)',
    locusAndMaterialsHi: 'एक माह तक प्रत्येक संध्या पर अग्नि जलाकर फूल, धूप, भोजन आदि अर्पित करें।',
    locusAndMaterialsEn: 'For one month at each twilight, offer flowers, incense, and food into fire, chanting 3,000 times.',
    mantraHi: 'ॐ ह्रीं आगाच्छ आगाच्छ कामेश्वरी स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Āgaccha Āgaccha Kāmeśvarī Svāhā',
    siddhiAndBoonsHi: 'आधी रात को देवी प्रकट होकर रत्न, वस्त्र, रसायन शास्त्र के रहस्य और स्वयं रासायनिक पदार्थ प्रदान करती हैं।',
    siddhiAndBoonsEn: 'Appears at midnight and bestows gems, fine raiments, secrets of alchemy, and alchemical substances.',
    fullTextHi:
      '(26) कामेश्वरी: एक माह तक प्रत्येक संध्या पर 3000 बार मंत्र का जाप करें। अग्नि जलाएँ और उसमें फूल, धूप, भोजन आदि डालें। आधी रात को देवी आती हैं और संभोग करती हैं, और रत्न, वस्त्र, रसायन शास्त्र के रहस्य और स्वयं रासायनिक पदार्थ प्रदान करती हैं। ॐ ह्रीं आगाच्छ आगाच्छ कामेश्वरी स्वाहा।',
    fullTextEn:
      '(26) Kāmeśvarī: Chant 3,000 times each evening for a month with fire offerings of flowers, incense, and food: Oṃ Hrīṃ Āgaccha Āgaccha Kāmeśvarī Svāhā. She bestows gems, robes, and alchemical substances.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 27,
    nameHi: '(27) एवं (28) पूर्वोक्त-संदर्भित यक्षिणी द्वय',
    nameEn: '27 & 28. Textual Cross-Reference Note in Manuscript',
    meaningHi: 'पाठ में कहा गया है कि इनका वर्णन पहले ही किया जा चुका है। (?)',
    meaningEn: 'The manuscript text states that these two have already been described earlier.',
    japaCount: 'पूर्वोक्त विधि',
    locusAndMaterialsHi: 'मूल पांडुलिपि टिप्पणी: (27) (28) पाठ में कहा गया है कि इनका वर्णन पहले ही किया जा चुका है। (?)',
    locusAndMaterialsEn: 'Manuscript note: Entries (27) and (28) are noted in the text as already described above.',
    mantraHi: 'ह्रीं श्रीं नित्यद्रवे मदा .... श्रीं ह्रीं (तंत्रराज सूत्र)',
    mantraEn: 'Hrīṃ Śrīṃ Nityadrave Madā .... Śrīṃ Hrīṃ',
    siddhiAndBoonsHi: 'मूल पाठ की संख्यात्मक अखंडता (1–36) बनाए रखने हेतु यथावत् संरक्षित।',
    siddhiAndBoonsEn: 'Preserved verbatim to maintain the exact 1–36 numbering of the Uddāmeśvara Tantra.',
    fullTextHi: '(27) (28) पाठ में कहा गया है कि इनका वर्णन पहले ही किया जा चुका है। (?)',
    fullTextEn: '(27) (28) The text states that these have already been described earlier. (?)',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 28,
    nameHi: '(28) द्वितीय पूर्वोक्त-संदर्भित प्रविष्टि',
    nameEn: '28. Second Cross-Referenced Entry in Manuscript',
    meaningHi: 'देखें प्रविष्टि (27) — पांडुलिपि में पूर्व-वर्णित उल्लेख',
    meaningEn: 'See Entry (27) — Manuscript cross-reference note',
    japaCount: 'पूर्वोक्त विधि',
    locusAndMaterialsHi: 'मूल पाठ के अनुसार पूर्व-वर्णित।',
    locusAndMaterialsEn: 'Noted in the source manuscript as previously described.',
    mantraHi: 'ह्रीं श्रीं नित्यद्रवे मदा .... श्रीं ह्रीं',
    mantraEn: 'Hrīṃ Śrīṃ Nityadrave Madā .... Śrīṃ Hrīṃ',
    siddhiAndBoonsHi: 'मनोकामना एवं सिद्धि प्रदायक।',
    siddhiAndBoonsEn: 'Wish-fulfilling Yakṣiṇī stream.',
    fullTextHi: '(27) (28) पाठ में कहा गया है कि इनका वर्णन पहले ही किया जा चुका है। (?)',
    fullTextEn: '(27) (28) The text states that these have already been described earlier. (?)',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 29,
    nameHi: 'मनोहरा (मनमोहक)',
    nameEn: '29. Manoharā (The Mind-Captivating One)',
    meaningHi: 'मनमोहक / सर्वकामदा',
    meaningEn: 'Charming / All-Desire-Granting',
    japaCount: '10,000',
    locusAndMaterialsHi: 'सुंदर और सुखद नदी के किनारे चंदन के तेल से एक वृत्त (मण्डल) बनाएं।',
    locusAndMaterialsEn: 'On the bank of a pleasant river, draw a circle with sandalwood oil.',
    mantraHi: 'ओम ह्रीं सर्वकामदा मनोहरे स्वाहा ।',
    mantraEn: 'Oṃ Hrīṃ Sarvakāmadā Manohare Svāhā',
    siddhiAndBoonsHi: 'सर्वकामदा — समस्त इच्छाओं की पूर्ति करने वाली।',
    siddhiAndBoonsEn: 'Sarvakāmadā — fulfills all wishes and captivates minds.',
    fullTextHi:
      '(29) मनोहर (मनमोहक): किसी सुंदर और सुखद नदी के किनारे चंदन के तेल से एक वृत्त बनाएं। मंत्र का उच्चारण 10,000 बार करें। ओम ह्रीं सर्वकामदा मनोहरे स्वाहा ।',
    fullTextEn:
      '(29) Manoharā (Captivating): Draw a circle with sandalwood oil on a pleasant riverbank and chant 10,000 times: Oṃ Hrīṃ Sarvakāmadā Manohare Svāhā.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 30,
    nameHi: 'प्रमोदा (सुगंधित)',
    nameEn: '30. Pramodā (The Fragrant / Joyous One)',
    meaningHi: 'सुगंधित / हर्षदायिनी',
    meaningEn: 'Fragrant & Blissful',
    japaCount: '1,000 प्रति रात्रि (1 माह)',
    locusAndMaterialsHi: 'एक माह तक आधी रात (निशीथ काल) को उठकर प्रतिदिन 1000 बार उच्चारण करें।',
    locusAndMaterialsEn: 'Rise at midnight every night for one month and chant 1,000 times.',
    mantraHi: 'ओम ह्रीं प्रमोदयाई स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Pramodāyai Svāhā',
    siddhiAndBoonsHi: 'आनंद, सुगंधित ऐश्वर्य और प्रसन्नता की सिद्धि।',
    siddhiAndBoonsEn: 'Bestows joy, fragrant opulence, and delight.',
    fullTextHi: '(30) प्रमोदा (सुगंधित): एक माह तक आधी रात को उठकर मंत्र का उच्चारण 1000 बार करें। ओम ह्रीं प्रमोदयाई स्वाहा।',
    fullTextEn: '(30) Pramodā (Fragrant): Rise at midnight for one month and chant 1,000 times: Oṃ Hrīṃ Pramodāyai Svāhā.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 31,
    nameHi: 'अनुरागिनी (अत्यंत भावुक)',
    nameEn: '31. Anurāgiṇī (The Deeply Passionate One)',
    meaningHi: 'अत्यंत भावुक / अनुराग-मयी',
    meaningEn: 'Full of Deep Affection',
    japaCount: '1,000 त्रिकाल संध्या (1 माह)',
    locusAndMaterialsHi: 'कुमकुम से भोजपत्र (बर्च की छाल) पर सुंदर देवी चित्र बनाएं; दीप, धूप, फूल से पूजा कर तीनों गोधूलि/संध्या में 1 माह जाप।',
    locusAndMaterialsEn: 'Draw the goddess with kumkuma on birch bark (bhojapatra); worship with lamp, incense, and flowers at all three twilights for a month.',
    mantraHi: 'ओम अनुरागिनी मैथुनप्रिये यक्षकुलप्रसुते स्वाहा ।',
    mantraEn: 'Oṃ Anurāgiṇī Maithunapriye Yakṣakulaprasūte Svāhā',
    siddhiAndBoonsHi: 'आधी रात को वह आती हैं और प्रतिदिन साधक पर एक हजार सोने के सिक्के (स्वर्ण मुद्राएँ) बरसाती हैं।',
    siddhiAndBoonsEn: 'She arrives at midnight and showers the practitioner with a thousand gold coins daily.',
    fullTextHi:
      '(31) अनुरागिनी (अत्यंत भावुक): कुमकुम से बर्च की छाल पर एक सुंदर देवी का चित्र बनाएं। उसमें देवी का आह्वान करें और ज्वाला, धूप, फूल आदि से उनकी पूजा करें। फिर मंत्र का उच्चारण 1000 बार करें। एक माह तक तीनों गोधूलि बेला में ऐसा करें। आधी रात को वह आती हैं और प्रतिदिन साधक पर एक हजार सोने के सिक्के बरसाती हैं। ओम अनुरागिनी मैथुनप्रिये यक्षकुलप्रसुते स्वाहा ।',
    fullTextEn:
      '(31) Anurāgiṇī (Passionate): Draw her image with kumkuma on birch bark, invoke her with flame, incense, and flowers, and chant 1,000 times at the three twilights for a month: Oṃ Anurāgiṇī Maithunapriye Yakṣakulaprasūte Svāhā. She showers 1,000 gold coins daily.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 32,
    nameHi: 'नखकेशी',
    nameEn: '32. Nakhakeśī (Long-Nailed & Flowing-Haired)',
    meaningHi: 'नख एवं केश सुंदरी',
    meaningEn: 'Adorned with Flowing Hair',
    japaCount: '21 रात्रि अनुष्ठान',
    locusAndMaterialsHi: 'नग्न अवस्था में और बिखरे बालों के साथ घर के एक कोने में जाकर 21 दिनों तक रात में पूजा करें।',
    locusAndMaterialsEn: 'In a corner of the house at night, naked with unbound hair, worship for 21 days.',
    mantraHi: 'ॐ ह्रीं नखकेशिके स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Nakhakeśike Svāhā',
    siddhiAndBoonsHi: 'आधी रात को वे अभीष्ट फल देते हुए आती हैं।',
    siddhiAndBoonsEn: 'She appears at midnight bestowing desired fruits.',
    fullTextHi:
      '(32) नखकेशी: नग्न अवस्था में और बिखरे बालों के साथ घर के एक कोने में जाकर 21 दिनों तक रात में उनकी पूजा करें। आधी रात को वे फल देते हुए आती हैं। ॐ ह्रीं नखकेशिके स्वाहा।',
    fullTextEn:
      '(32) Nakhakeśī: Worship at night for 21 days in a corner of the house with unbound hair: Oṃ Hrīṃ Nakhakeśike Svāhā. She arrives at midnight granting boons.',
    categoryGroup: 'astral-occult'
  },
  {
    index: 33,
    nameHi: 'भामिनी',
    nameEn: '33. Bhāminī (The Radiant Lady)',
    meaningHi: 'तेजस्विनी / रतिप्रिया',
    meaningEn: 'Radiant & Passionate Lady',
    japaCount: 'ग्रहण काल एवं 3 दिन',
    locusAndMaterialsHi: 'ग्रहण के स्पर्श से मोक्ष तक तथा ग्रहण होने पर 3 दिनों तक मंत्र का जाप करें।',
    locusAndMaterialsEn: 'Chant throughout the duration of a solar/lunar eclipse and for 3 days.',
    mantraHi: 'ॐ ह्रीं यक्षिणी भामिनी रतिप्रिये स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Yakṣiṇī Bhāminī Ratipriye Svāhā',
    siddhiAndBoonsHi: 'वे एक अद्भुत लेप देती हैं; इसे शरीर पर लगाने से आकर्षण-शक्ति और धन की प्राप्ति होती है।',
    siddhiAndBoonsEn: 'Grants a wondrous ointment that bestows magnetic attraction and wealth.',
    fullTextHi:
      '(33) भामिनी: ग्रहण के समय से लेकर ग्रहण के समाप्त होने तक, जब भी ग्रहण हो, 3 दिनों तक उनके मंत्र का जाप करें। वे एक अद्भुत लेप देती हैं। इसे शरीर पर लगाने से स्त्रियाँ आकर्षित होती हैं और धन प्राप्ति होती है। ॐ ह्रीं यक्षिणी भामिनी रतिप्रिये स्वाहा।',
    fullTextEn:
      '(33) Bhāminī: Chant during an eclipse from start to finish for 3 days: Oṃ Hrīṃ Yakṣiṇī Bhāminī Ratipriye Svāhā. She grants a miraculous ointment for attraction and wealth.',
    categoryGroup: 'attraction-siddhi'
  },
  {
    index: 34,
    nameHi: 'पद्मिनी (35 स्वर्णवती में सम्मिलित)',
    nameEn: '34. Padminī (Included with 35. Svarṇavatī)',
    meaningHi: 'कमलिनी / पद्मा',
    meaningEn: 'Lotus Maiden',
    japaCount: '(35) के साथ सम्मिलित',
    locusAndMaterialsHi: '(34) पद्मिनी को नीचे (35) स्वर्णवती के विधान में शामिल किया गया है।',
    locusAndMaterialsEn: '(34) Padminī is combined with the ritual of (35) Svarṇavatī below.',
    mantraHi: 'ह्रीं श्रीं नित्यद्रवे मदा पद्मिनि श्रीं ह्रीं',
    mantraEn: 'Hrīṃ Śrīṃ Nityadrave Madā Padmini Śrīṃ Hrīṃ',
    siddhiAndBoonsHi: 'पद्म-ऐश्वर्य एवं अंजन सिद्धि।',
    siddhiAndBoonsEn: 'Lotus opulence and clairvoyant salve.',
    fullTextHi: '(34) पद्मिनी को नीचे (35) में शामिल किया गया है।',
    fullTextEn: '(34) Padminī is included in (35) below.',
    categoryGroup: 'wish-wealth'
  },
  {
    index: 35,
    nameHi: 'स्वर्णवती',
    nameEn: '35. Svarṇavatī (The Golden Maiden)',
    meaningHi: 'स्वर्णमयी / कनकवती',
    meaningEn: 'Possessor of Gold',
    japaCount: '1,000 प्रतिदिन (1 चंद्र माह)',
    locusAndMaterialsHi: 'अंजीर के पेड़ की जड़ में चंदन के तेल से घेरा बनाएँ; भोजन अर्पित कर 1 चंद्र माह तक प्रतिदिन 1000 जाप।',
    locusAndMaterialsEn: 'Draw a sandalwood-oil circle at the root of a fig tree, offer food, and chant 1,000 times daily for one lunar month.',
    mantraHi: 'ॐ ह्रीं आगच्छ आगच्छ स्वर्णवती स्वाहा।',
    mantraEn: 'Oṃ Hrīṃ Āgaccha Āgaccha Svarṇavatī Svāhā',
    siddhiAndBoonsHi: 'तब वे "अंजना सिद्धि" (अदृश्य खजाना व सूक्ष्म लोक देखने का अंजन) देते हुए आती हैं।',
    siddhiAndBoonsEn: 'She arrives bestowing Añjana-Siddhi (magic collyrium revealing hidden gold and subtle realms).',
    fullTextHi:
      '(35) स्वर्णवती: अंजीर के पेड़ की जड़ में चंदन के तेल से एक घेरा बनाएँ। यक्षिणी को भोजन आदि अर्पित करें। एक चंद्र माह तक प्रतिदिन मंत्र का जाप करें। प्रतिदिन 1000 बार मंत्र का जाप करें। तब वे अंजना सिद्धि देते हुए आती हैं। ॐ ह्रीं आगच्छ आगच्छ स्वर्णवती स्वाहा।',
    fullTextEn:
      '(35) Svarṇavatī: Draw a sandalwood-oil circle at the root of a fig tree, offer food, and chant 1,000 times daily for a lunar month: Oṃ Hrīṃ Āgaccha Āgaccha Svarṇavatī Svāhā. She grants Añjana Siddhi.',
    categoryGroup: 'alchemy-Rasayana'
  },
  {
    index: 36,
    nameHi: 'रतिप्रिया (प्रेमप्रिय)',
    nameEn: '36. Ratipriyā (Beloved of Rati / Love)',
    meaningHi: 'प्रेमप्रिय / रति-सुंदरी',
    meaningEn: 'Dear to Love & Beauty',
    japaCount: '1,000 प्रतिदिन (7 दिन · 25वें दिन प्राकट्य)',
    locusAndMaterialsHi: 'कपड़े पर सोने की देवी की आकर्षक, आभूषण-युक्त छवि बनाएँ और अंदर अपना नाम लिखें; लाल फूल चढ़ाएँ।',
    locusAndMaterialsEn: 'Paint an attractive, jewel-adorned golden image of the goddess on cloth with your name inside; offer red flowers and chant 1,000 times for 7 days.',
    mantraHi: 'ॐ ह्रीं रतिप्रिये स्वाहा ।',
    mantraEn: 'Oṃ Hrīṃ Ratipriye Svāhā',
    siddhiAndBoonsHi: 'पूजा शुरू होने के 25वें दिन वे रात में प्रकट होकर मनोवांछित सिद्धि प्रदान करती हैं।',
    siddhiAndBoonsEn: 'On the 25th night after beginning the worship, she manifests and fulfills the practitioner’s desires.',
    fullTextHi:
      '(36) रतिप्रिया (प्रेमप्रिय): कपड़े पर सोने की देवी की छवि बनाएँ और उसके अंदर अपना नाम लिखें। छवि अत्यंत आकर्षक होनी चाहिए और सुंदर आभूषणों से सजी होनी चाहिए। लाल फूल चढ़ाएँ और 7 दिनों तक 1000 बार उनके मंत्र का जाप करें। पूजा शुरू होने के 25वें दिन वे रात में प्रकट होती हैं। ॐ ह्रीं रतिप्रिये स्वाहा ।',
    fullTextEn:
      '(36) Ratipriyā (Beloved of Love): Draw an attractive, jewel-adorned golden image of the goddess on cloth with your name inside. Offer red flowers and chant 1,000 times daily for 7 days: Oṃ Hrīṃ Ratipriye Svāhā. She manifests at night on the 25th day.',
    categoryGroup: 'attraction-siddhi'
  }
];

export const YAKSHINI_36_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-36-yakshinis-uddameshwara-complete',
    articleSlug: 'chhatris-yakshini-uddameshwara-tantra-archive',
    titleEn: 'Complete Concordance of the 36 Yakṣiṇīs in Uddāmeśvara Tantra & Tantrarāja Tantra (01 to 36)',
    titleHi: 'उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र में वर्णित ३६ यक्षिणियों की संपूर्ण मंत्र एवं साधना-विधि तालिका (०१ से ३६)',
    captionEn:
      'Every Yakṣiṇī (1. Vicitrā to 36. Ratipriyā) documented with her meaning, ritual locus, japa count, consecrated mantra, and bestowed siddhis.',
    captionHi:
      '१. विचित्रा से ३६. रतिप्रिया तक सभी ३६ यक्षिणियों के नाम, अर्थ, साधना-स्थल, जप-संख्या, मूल मंत्र एवं प्राप्त होने वाली सिद्धियों का संपूर्ण विवरण।',
    headersEn: ['#', 'Yakṣiṇī Name & Meaning', 'Ritual Locus, Materials & Japa Count', 'Consecrated Mantra (Devanāgarī & IAST)', 'Bestowed Siddhi & Fruit'],
    headersHi: ['क्र.', 'यक्षिणी का नाम एवं अर्थ', 'साधना स्थल, सामग्री एवं जप संख्या', 'मूल मंत्र (उद्दामेश्वर तंत्र)', 'प्राप्त सिद्धि एवं फल'],
    rowsEn: YAKSHINI_36_LIST.map(y => [
      String(y.index).padStart(2, '0'),
      `${y.nameHi}\n${y.nameEn}`,
      `Japa: ${y.japaCount}\n${y.locusAndMaterialsEn}`,
      `${y.mantraHi}\n(${y.mantraEn})`,
      y.siddhiAndBoonsEn
    ]),
    rowsHi: YAKSHINI_36_LIST.map(y => [
      String(y.index).padStart(2, '0'),
      `${y.nameHi}\n(${y.meaningHi})`,
      `जप: ${y.japaCount}\n${y.locusAndMaterialsHi}`,
      y.mantraHi,
      y.siddhiAndBoonsHi
    ])
  }
];

export const YAKSHINI_36_ARTICLE: ResearchArticle = {
  slug: 'chhatris-yakshini-uddameshwara-tantra-archive',
  categorySlug: '64-yogini-matrix',
  code: 'UDM-36',
  titleEn: '36 Yakṣiṇīs (36 यक्षिणियाँ): Complete Mantra, Sādhanā & Siddhi Codex in Uddāmeśvara Tantra & Tantrarāja Tantra',
  titleHi: '36 यक्षिणियाँ (उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र): संपूर्ण ३६ यक्षिणी मंत्र, साधना-विधान एवं सिद्धि अभिलेखागार',
  subtitleEn: 'Śiva as Uddāmeśvara ("Lord of the Extraordinary"), Kubera’s Treasury Retinue, the Tantrarāja Tantra Invocation Formula & All 36 Yakṣiṇīs from (1) Vicitrā to (36) Ratipriyā',
  subtitleHi: 'भगवान् शिव का "उद्दामेश्वर" स्वरूप, कुबेर के कोष की ३६ अलौकिक शक्तियाँ, तंत्रराज तंत्र का वैकल्पिक मंत्र-सूत्र एवं (१) विचित्रा से (३६) रतिप्रिया तक संपूर्ण विवरण',
  sanskritEpigraph: '॥ ह्रीं श्रीं नित्यद्रवे मदा (यक्षिणी-नाम) श्रीं ह्रीं ॥',
  epigraphTranslationEn: '"Hrīṃ Śrīṃ Nityadrave Madā [Name of Yakṣiṇī] Śrīṃ Hrīṃ — The canonical invocation formula of the thirty-six wish-fulfilling Yakṣiṇīs in the Tantrarāja Tantra."',
  epigraphTranslationHi: '"ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं — तंत्रराज तंत्र में वर्णित मनोकामना पूर्ण करने वाली ३६ यक्षिणियों का वैकल्पिक बीज-सूत्र।"',
  evidenceBadgeEn: 'PRIMARY TANTRIC CODEX · UDDĀMEŚVARA TANTRA & TANTRARĀJA TANTRA',
  evidenceBadgeHi: 'मूल तांत्रिक ग्रन्थ स्रोत · उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र',
  accentColor: '#10B981',
  summaryEn:
    'A Yakṣiṇī (यक्षिणी) is a class of supernatural celestial being (the feminine counterpart of the masculine Yakṣa) serving in the retinue of Lord Kubera, sovereign of all subterranean treasures of the Earth, and bound into cosmic service by Lord Śiva as Uddāmeśvara ("Lord of the Extraordinary"). Both the Uddāmeśvara Tantra and the Tantrarāja Tantra preserve the classical roster of 36 Yakṣiṇīs—from (1) Vicitrā to (36) Ratipriyā—detailing their two-armed youthful iconography, sacred tree and riverbank habitats, exact japa counts, fire offerings, and specialized siddhis (including Rasāyana alchemy, Añjana clairvoyant salve, Pādukā aerial travel, Khaḍga invulnerability, and hidden treasure).',
  summaryHi:
    'यक्षिणी एक प्रकार की अलौकिक शक्ति है, जो कुछ मायनों में परी के समान होती है (यक्ष पुरुष होता है, यक्षिणी स्त्री)। उद्दामेश्वर तंत्र और तंत्रराज तंत्र में भगवान् शिव (उद्दामेश्वर — "असाधारण के स्वामी") और धनाधिपति भगवान् कुबेर के अधीन इन 36 यक्षिणियों—(1) विचित्र से (36) रतिप्रिया तक—का वर्णन उनके मंत्रों, साधना-स्थलों, जप-संख्याओं और अद्भुत सिद्धियों (रसायन विद्या, अंजन सिद्धि, पादुका सिद्धि, खड्ग सिद्धि, पाताल सिद्धि एवं स्वर्ण-कोष) के साथ किया गया है।',
  sections: [
    {
      headingEn: '1. Introduction: मंत्र एवं श्लोक — 36 यक्षिणियाँ (Uddāmeśvara Tantra & Tantrarāja Tantra)',
      headingHi: '1. प्रस्तावना: मंत्र एवं श्लोक — 36 यक्षिणियाँ (उद्दामेश्वर तंत्र एवं तंत्रराज तंत्र)',
      bodyEn:
        'यक्षिणी एक प्रकार की अलौकिक शक्ति है, जो कुछ मायनों में परी के समान होती है। यक्ष पुरुष होता है, यक्षिणी स्त्री। उद्दामेश्वर तंत्र में इन 36 शक्तियों का वर्णन उनके मंत्रों और विधि-विधि के साथ किया गया है। ऐसा कहा जाता है कि इनकी सहायता लेने से भक्त को अनेक शक्तियाँ प्राप्त होती हैं।\n\nउद्दामेश्वर भगवान शिव का एक नाम है, जिसका अर्थ है "असाधारण के स्वामी" (Lord of the Extraordinary / Unbound). उनके अनुयायियों में अनेक कुख्यात प्राणी, राक्षस, भूत आदि शामिल हैं, जिन्हें उन्होंने अपनी सेवा में विवश किया है।\n\nयक्ष और यक्षिणियाँ भगवान कुबेर के सेवक हैं, जिनके राज्य में पृथ्वी का समस्त खजाना समाहित है। तंत्रराज तंत्र में भी इसी प्रकार की सूची दी गई है। वहाँ कहा गया है कि वे मनोकामना पूरी करने वाली हैं, प्रत्येक की दो भुजाएँ हैं, सुंदर शरीर है, विभिन्न रंगों के उत्तम वस्त्र धारण किए हुए हैं, युवा और चंचल हैं, फूलों की मालाओं से सुशोभित हैं और उन पर इत्र लगा हुआ है। इस तंत्र से वैकल्पिक मंत्र इस प्रकार हैं: ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।',
      bodyHi:
        'यक्षिणी एक प्रकार की अलौकिक शक्ति है, जो कुछ मायनों में परी के समान होती है। यक्ष पुरुष होता है, यक्षिणी स्त्री। उद्दामेश्वर तंत्र में इन 36 शक्तियों का वर्णन उनके मंत्रों और विधि-विधि के साथ किया गया है। ऐसा कहा जाता है कि इनकी सहायता लेने से भक्त को अनेक शक्तियाँ प्राप्त होती हैं।\n\nउद्दामेश्वर भगवान शिव का एक नाम है, जिसका अर्थ है "असाधारण के स्वामी"। उनके अनुयायियों में अनेक कुख्यात प्राणी, राक्षस, भूत आदि शामिल हैं, जिन्हें उन्होंने अपनी सेवा में विवश किया है।\n\nयक्ष और यक्षिणियाँ भगवान कुबेर के सेवक हैं, जिनके राज्य में पृथ्वी का समस्त खजाना समाहित है। तंत्रराज तंत्र में भी इसी प्रकार की सूची दी गई है। वहाँ कहा गया है कि वे मनोकामना पूरी करने वाली हैं, प्रत्येक की दो भुजाएँ हैं, सुंदर शरीर है, विभिन्न रंगों के उत्तम वस्त्र धारण किए हुए हैं, युवा और चंचल हैं, फूलों की मालाओं से सुशोभित हैं और उन पर इत्र लगा हुआ है। इस तंत्र से वैकल्पिक मंत्र इस प्रकार हैं: ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।'
    },
    {
      headingEn: '2. Yakṣiṇīs (1) to (12): Vicitrā, Vibhramā, Haṃsī, Bhīṣaṇī, Janarañjikā, Viśālā, Madanā, Ghaṇṭā, Kalākarṇī, Mahābhayā, Mahendrī & Śaṅkhinī',
      headingHi: '2. यक्षिणी (1) से (12) तक: विचित्र, विभ्रम, हंसि, भीषणी, जनरंजिका, विशाला, मदन, घंटा, कलाकर्णी, महाभय, महेंद्रि एवं शंखिणी',
      bodyEn: YAKSHINI_36_LIST.slice(0, 12).map(y => y.fullTextHi + '\n(' + y.fullTextEn + ')').join('\n\n'),
      bodyHi: YAKSHINI_36_LIST.slice(0, 12).map(y => y.fullTextHi).join('\n\n')
    },
    {
      headingEn: '3. Yakṣiṇīs (13) to (24): Candrī, Śmaśānā, Vaṭayakṣiṇī, Mekhalā, Vikalā, Lakṣmī, Mālinī, Śatapatrikā, Sulocanā, Śobhā, Kapālinī & Varayakṣiṇī',
      headingHi: '3. यक्षिणी (13) से (24) तक: चंद्री, श्मशान, वटयक्षिणी, मेखला, विकला, लक्ष्मी, मालिनी, शतपत्रिका, सुलोचना, शोभा, कपालिनी एवं वरयाक्षिणी',
      bodyEn: YAKSHINI_36_LIST.slice(12, 24).map(y => y.fullTextHi + '\n(' + y.fullTextEn + ')').join('\n\n'),
      bodyHi: YAKSHINI_36_LIST.slice(12, 24).map(y => y.fullTextHi).join('\n\n')
    },
    {
      headingEn: '4. Yakṣiṇīs (25) to (36): Naṭī, Kāmeśvarī, (27–28), Manoharā, Pramodā, Anurāgiṇī, Nakhakeśī, Bhāminī, Padminī (34), Svarṇavatī & Ratipriyā',
      headingHi: '4. यक्षिणी (25) से (36) तक: नाटी, कामेश्वरी, (27–28), मनोहर, प्रमोदा, अनुरागिनी, नखकेशी, भामिनी, पद्मिनी (34), स्वर्णवती एवं रतिप्रिया',
      bodyEn: YAKSHINI_36_LIST.slice(24, 36).map(y => y.fullTextHi + '\n(' + y.fullTextEn + ')').join('\n\n'),
      bodyHi: YAKSHINI_36_LIST.slice(24, 36).map(y => y.fullTextHi).join('\n\n')
    }
  ],
  keyFindingsEn: [
    'The 36 Yakṣiṇīs are documented in the Uddāmeśvara Tantra (where Śiva is revered as Uddāmeśvara, "Lord of the Extraordinary") and the Tantrarāja Tantra as attendants of Lord Kubera.',
    'Tantrarāja Tantra describes each Yakṣiṇī as youthful, two-armed, adorned with flower garlands and fragrance, and provides the universal invocation formula: ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।',
    'All 36 entries—from (1) Vicitrā to (36) Ratipriyā, including the manuscript cross-references at (13), (27)–(28), and (34)—are preserved verbatim with their exact mantras, japa counts, and siddhis.'
  ],
  keyFindingsHi: [
    'उद्दामेश्वर तंत्र और तंत्रराज तंत्र में ३६ यक्षिणियों को भगवान् शिव (उद्दामेश्वर) के अनुशासन और भगवान् कुबेर के खजाने से जुड़ी अलौकिक शक्तियों के रूप में वर्णित किया गया है।',
    'तंत्रराज तंत्र में प्रत्येक यक्षिणी को द्विभुजा, युवा, पुष्पमाला और इत्र से सुशोभित बताया गया है तथा वैकल्पिक मंत्र दिया गया है: ह्रीं श्रीं नित्यद्रवे मदा .... (यक्षिणी का नाम) श्रीं ह्रीं।',
    '(1) विचित्र से (36) रतिप्रिया तक सभी ३६ यक्षिणियों के मंत्र, जप-संख्या, वृक्ष/नदी/श्मशान साधना-स्थल और सिद्धियाँ मूल पाठ के अनुसार पूर्णतः संरक्षित हैं।'
  ],
  metadata: [
    {
      labelEn: 'ARCHIVE CODE & SEAL',
      labelHi: 'अभिलेख कोड एवं मुद्रा',
      valueEn: 'UDM-36 · SEAL 11 (36 Yakṣiṇīs)',
      valueHi: 'UDM-36 · मुद्रा ११ (३६ यक्षिणियाँ)'
    },
    {
      labelEn: 'PRESIDING SOVEREIGNS',
      labelHi: 'अधिष्ठाता देवता',
      valueEn: 'Śiva Uddāmeśvara & Lord Kubera (Dhanapati)',
      valueHi: 'भगवान् शिव (उद्दामेश्वर) एवं भगवान् कुबेर'
    },
    {
      labelEn: 'CANONICAL COUNT',
      labelHi: 'शास्त्रीय संख्या',
      valueEn: '36 Yakṣiṇīs (1. Vicitrā to 36. Ratipriyā)',
      valueHi: '३६ यक्षिणियाँ (१. विचित्र से ३६. रतिप्रिया)'
    }
  ],
  primarySourcesEn: 'Uddāmeśvara Tantra, Tantrarāja Tantra (Manoramā Commentary), and Bhūtaḍāmara / Yakṣiṇī-Kalpa Compendia.',
  primarySourcesHi: 'उद्दामेश्वर तंत्र, तंत्रराज तंत्र (मनोरमा टीका) एवं यक्षिणी-कल्प संग्रह।',
  authorEn: 'Ram Ashok Kumar',
  authorHi: 'राम अशोक कुमार'
};

// ============================================================================
// 3. SEAL 12: VETĀLA (बेतालों की त्रिविध प्रकृति — THE THREE GUṆAS OF BETALS)
// ============================================================================
export interface VetalaProfileEntry {
  id: string;
  gunaCategory: 'sattvic' | 'rajasic' | 'tamasic';
  gunaLabelHi: string;
  gunaLabelEn: string;
  nameHi: string;
  nameEn: string;
  elementOrDomainHi: string;
  elementOrDomainEn: string;
  descriptionHi: string;
  descriptionEn: string;
  accentColor: string;
}

export const VETALA_THREE_GUNAS_OVERVIEW = [
  {
    id: 'sattvic-vetala-group',
    guna: 'sattvic' as const,
    titleHi: '1. सात्विक बेताल (16 प्रकार)',
    titleEn: '1. Sāttvika Vetālas (16 Types)',
    countBadgeHi: '16 प्रकार (१६ सात्विक भेद)',
    countBadgeEn: '16 Canonical Types',
    characteristicsHi: 'ये आत्माएं शांत, ज्ञानी और न्यायप्रिय मानी जाती हैं।',
    characteristicsEn: 'These spirits are serene, wise, philosophical, and devoted to justice (nyāya).',
    roleHi:
      'इनका उद्देश्य किसी को नुकसान पहुंचाना नहीं होता। तंत्र शास्त्र के अनुसार, ये साधक को आध्यात्मिक ज्ञान, भूत-भविष्य देखने की दृष्टि (Divya Drishti) और गूढ़ रहस्यों को सुलझाने की क्षमता प्रदान करते हैं।',
    roleEn:
      'Their purpose is never to cause harm. According to Tantric śāstra, they bestow spiritual wisdom, clairvoyant vision across past and future (Divya Dṛṣṭi), and the ability to unravel esoteric mysteries.',
    exampleHi:
      "'बेताल पच्चीसी' का बेताल इसी श्रेणी के करीब दिखता है, जो राजा विक्रम की परीक्षा केवल ज्ञान और न्याय के आधार पर लेता है।",
    exampleEn:
      'The Vetāla of the classic "Vetāla Pañcaviṃśati" (Baitāl Pachīsī) belongs to this Sāttvika class, testing King Vikramāditya purely on wisdom, dharma, and subtle justice.',
    accentColor: '#38BDF8'
  },
  {
    id: 'rajasic-vetala-group',
    guna: 'rajasic' as const,
    titleHi: '2. राजसिक बेताल (11 प्रकार)',
    titleEn: '2. Rājasika Vetālas (11 Types)',
    countBadgeHi: '11 प्रकार (११ राजसिक भेद)',
    countBadgeEn: '11 Canonical Types',
    characteristicsHi: 'ये अत्यंत शक्तिशाली, वैभवशाली और मायावी (Illusionary) शक्तियों के स्वामी होते हैं।',
    characteristicsEn: 'Supremely powerful, majestic, and masters of sovereign and illusionary (Māyāvī) forces.',
    roleHi:
      'ये राजाओं, योद्धाओं और महत्वाकांक्षी साधकों से जुड़ते हैं। इनका उपयोग युद्ध जीतने, खोया हुआ साम्राज्य या धन वापस पाने और शत्रुओं पर विजय प्राप्त करने के लिए किया जाता था। इनमें अहंकार और यश की भावना प्रबल होती है।',
    roleEn:
      'Aligned with kings, warriors, commanders, and ambitious adepts. Historically invoked to win battles, reclaim lost kingdoms or wealth, and triumph over rivals; marked by strong pride, valor, and desire for glory.',
    exampleHi:
      'प्राचीन काल में राजा-महाराजा और युद्ध कला के साधक साम्राज्य की रक्षा और विजय के लिए राजसिक बेताल ऊर्जा से जुड़ते थे।',
    exampleEn:
      'Ancient monarchs and martial practitioners aligned with Rājasika Vetālas for statecraft, courage, and battlefield victory.',
    accentColor: '#F59E0B'
  },
  {
    id: 'tamasic-vetala-group',
    guna: 'tamasic' as const,
    titleHi: '3. तामसिक बेताल (प्रचंड श्मशान शक्तियां)',
    titleEn: '3. Tāmasika Vetālas (Fierce Cremation Forces)',
    countBadgeHi: 'उग्र तामसिक श्रेणी',
    countBadgeEn: 'Fierce Destructive Class',
    characteristicsHi: 'ये पूरी तरह से उग्र, क्रूर, अंधकारमयी और विनाशकारी ऊर्जा से भरे होते हैं।',
    characteristicsEn: 'Completely fierce, ruthless, dark, and charged with destructive energy.',
    roleHi:
      'ये श्मशान के सबसे डरावने हिस्सों में रहते हैं। तांत्रिक ग्रंथों में इनका उपयोग मारण (शत्रु का नाश), उच्चाटन और तबाही मचाने जैसे घोर तांत्रिक कर्मों के लिए किया जाता है। इनकी साधना सबसे कठिन और खतरनाक होती है, क्योंकि ज़रा सी चूक होने पर ये साधक को ही मार डालते हैं।',
    roleEn:
      'Dwelling in the most terrifying recesses of cremation grounds, they are described in Tantric texts in connection with extreme rites such as Māraṇa and Uccāṭana. Their sādhanā is considered perilous, as the slightest error rebounds fatally upon the practitioner.',
    exampleHi:
      'अमावस्या, काली चौदह (नरक चतुर्दशी) या ग्रहण की मध्यरात्रि (कालरात्रि) में घोर श्मशान में इनकी उपासना का उल्लेख मिलता है।',
    exampleEn:
      'Associated with midnight (Kālarātri) rites on Amāvāsyā, Kālī Chaudas, or eclipses in deep cremation grounds.',
    accentColor: '#EF4444'
  }
];

export const VETALA_PROFILES_LIST: VetalaProfileEntry[] = [
  // SATTVIC VETALAS (5 Profiles)
  {
    id: 'gagana-vetal',
    gunaCategory: 'sattvic',
    gunaLabelHi: 'सात्विक बेताल',
    gunaLabelEn: 'Sāttvika Vetāla',
    nameHi: 'गगन बेताल (Gagana Vetal)',
    nameEn: 'Gagana Vetāla (Sky / Ether Vetāla)',
    elementOrDomainHi: 'आकाश तत्व · उच्च बौद्धिक क्षमता एवं आध्यात्मिक अंतर्दृष्टि',
    elementOrDomainEn: 'Ākāśa Tattva (Ether) · Higher Intellect, Foresight & Intuition',
    descriptionHi:
      'यह आकाश तत्व से जुड़ी सात्विक शक्ति है। इसका मुख्य कार्य साधक को उच्च बौद्धिक क्षमता, दूरदर्शिता और आध्यात्मिक अंतर्दृष्टि (Intuition) प्रदान करना है।',
    descriptionEn:
      'A Sāttvika power connected to the Ether/Sky element (Ākāśa). Its primary function is to bestow high intellectual capacity, far-sightedness, and spiritual intuition.',
    accentColor: '#38BDF8'
  },
  {
    id: 'jala-vetal',
    gunaCategory: 'sattvic',
    gunaLabelHi: 'सात्विक बेताल',
    gunaLabelEn: 'Sāttvika Vetāla',
    nameHi: 'जल बेताल (Jala Vetal)',
    nameEn: 'Jala Vetāla (Water Vetāla)',
    elementOrDomainHi: 'जल तत्व · शांति, शीतलता एवं ध्यान में स्थिरता',
    elementOrDomainEn: 'Jala Tattva (Water) · Peace, Coolness & Meditative Stability',
    descriptionHi:
      'जल तत्व का स्वामी होने के कारण यह शांति और शीतलता का प्रतीक है। यह साधक के मन की चंचलता को दूर करने, तनाव मिटाने और ध्यान (Meditation) में स्थिरता लाने में मदद करता है।',
    descriptionEn:
      'Lord of the Water element, symbolizing peace and coolness. It removes mental restlessness, relieves stress, and establishes deep stability in meditation (dhyāna).',
    accentColor: '#0EA5E9'
  },
  {
    id: 'bhumi-vetal',
    gunaCategory: 'sattvic',
    gunaLabelHi: 'सात्विक बेताल',
    gunaLabelEn: 'Sāttvika Vetāla',
    nameHi: 'भूमि बेताल / भू बेताल (Bhumi Vetal)',
    nameEn: 'Bhūmi / Bhū Vetāla (Earth Vetāla)',
    elementOrDomainHi: 'पृथ्वी तत्व · मानसिक स्थिरता, भूमि-न्याय एवं आपदा-रक्षा',
    elementOrDomainEn: 'Pṛthvī Tattva (Earth) · Mental Grounding, Land Justice & Disaster Protection',
    descriptionHi:
      'यह पृथ्वी तत्व से जुड़ा है। इसका कार्य साधक को मानसिक रूप से स्थिर (Ground) रखना, खेती या भूमि से जुड़े विवादों में न्याय दिलाना और प्राकृतिक आपदाओं से रक्षा करना माना जाता है।',
    descriptionEn:
      'Connected to the Earth element. It keeps the practitioner mentally grounded, secures justice in agricultural or land disputes, and protects against natural calamities.',
    accentColor: '#10B981'
  },
  {
    id: 'pavana-vetal',
    gunaCategory: 'sattvic',
    gunaLabelHi: 'सात्विक बेताल',
    gunaLabelEn: 'Sāttvika Vetāla',
    nameHi: 'पवन बेताल (Pavana Vetal)',
    nameEn: 'Pavana Vetāla (Wind Vetāla)',
    elementOrDomainHi: 'वायु तत्व · तीव्रता (Speed), सतर्कता एवं पूर्व-आभास',
    elementOrDomainEn: 'Vāyu Tattva (Air) · Swiftness, Vigilance & Early Danger Detection',
    descriptionHi:
      'वायु तत्व का यह बेताल साधक को तीव्रता (Speed) और सतर्कता देता है। इसका कार्य संकट के समय साधक को पहले ही भांपने की शक्ति देना और सही राह दिखाना है।',
    descriptionEn:
      'This Vetāla of the Wind element grants speed and alertness, enabling the practitioner to sense approaching danger beforehand and choose the right path.',
    accentColor: '#2DD4BF'
  },
  {
    id: 'jnana-vetal',
    gunaCategory: 'sattvic',
    gunaLabelHi: 'सात्विक बेताल',
    gunaLabelEn: 'Sāttvika Vetāla',
    nameHi: 'ज्ञान बेताल (Jnana Vetal)',
    nameEn: 'Jñāna Vetāla (Wisdom Vetāla of Baitāl Pachīsī)',
    elementOrDomainHi: 'शास्त्र एवं गुप्त विद्या रक्षक · बेताल पच्चीसी (राजा विक्रमादित्य संवाद)',
    elementOrDomainEn: 'Guardian of Śāstras & Esoteric Lore · Vetāla Pañcaviṃśati',
    descriptionHi:
      "यह सीधे तौर पर शास्त्रों और गुप्त विद्याओं का रक्षक है। 'बेताल पच्चीसी' की कहानियों में दिखने वाला बेताल इसी श्रेणी से मेल खाता है, जो राजा विक्रमादित्य से जटिल और दार्शनिक सवाल पूछकर उनकी बुद्धिमत्ता की परीक्षा लेता है।",
    descriptionEn:
      'Direct guardian of scriptures and esoteric sciences. The famous Vetāla of the "Baitāl Pachīsī" stories corresponds to this category, posing complex philosophical and ethical riddles to test the wisdom of King Vikramāditya.',
    accentColor: '#60A5FA'
  },

  // RAJASIC VETALAS (5 Profiles)
  {
    id: 'veer-vetal',
    gunaCategory: 'rajasic',
    gunaLabelHi: 'राजसिक बेताल',
    gunaLabelEn: 'Rājasika Vetāla',
    nameHi: 'वीर बेताल (Veer Vetal)',
    nameEn: 'Vīra Vetāla (Heroic Vetāla)',
    elementOrDomainHi: 'प्रमुख राजसिक बेताल · निर्भयता (Courage), शारीरिक बल एवं शत्रु-भय नाश',
    elementOrDomainEn: 'Chief Rājasika Vetāla · Fearlessness, Physical Strength & Destruction of Fear',
    descriptionHi:
      'यह राजसिक श्रेणी का सबसे प्रमुख बेताल माना जाता है। इसका कार्य साधक को निर्भयता (Courage) देना, शारीरिक बल बढ़ाना और शत्रुओं के भय को समाप्त करना है।',
    descriptionEn:
      'Considered the foremost Vetāla of the Rājasika class. Its work is to grant fearlessness (courage), increase physical strength, and eliminate all fear of enemies.',
    accentColor: '#F59E0B'
  },
  {
    id: 'rajya-vetal',
    gunaCategory: 'rajasic',
    gunaLabelHi: 'राजसिक बेताल',
    gunaLabelEn: 'Rājasika Vetāla',
    nameHi: 'राज्य बेताल (Rajya Vetal)',
    nameEn: 'Rājya Vetāla (Sovereignty & Statecraft Vetāla)',
    elementOrDomainHi: 'सत्ता, अधिकार, प्रशासनिक सफलता एवं साम्राज्य-सीमा रक्षा',
    elementOrDomainEn: 'Sovereignty, Authority, Administrative Success & Border Defense',
    descriptionHi:
      'जैसा कि नाम से स्पष्ट है, इसका संबंध सत्ता और अधिकार से है। पुराने समय में राजा और सेनापति प्रशासनिक सफलता, मान-सम्मान और अपने साम्राज्य की सीमाओं को सुरक्षित रखने के लिए इससे जुड़ी ऊर्जा का आह्वान करते थे।',
    descriptionEn:
      'Directly connected with political authority and sovereignty. In ancient times, kings and generals invoked its energy for administrative success, honor, and securing the borders of their empire.',
    accentColor: '#D97706'
  },
  {
    id: 'jaya-vetal',
    gunaCategory: 'rajasic',
    gunaLabelHi: 'राजसिक बेताल',
    gunaLabelEn: 'Rājasika Vetāla',
    nameHi: 'जय बेताल (Jaya Vetal)',
    nameEn: 'Jaya Vetāla (Victory Vetāla)',
    elementOrDomainHi: 'युद्ध, न्यायालय विवाद एवं प्रतिस्पर्धा में पूर्ण विजय (Victory)',
    elementOrDomainEn: 'Triumph in Battle, Legal Disputes & High-Stakes Contests',
    descriptionHi:
      'यह पूर्णतः विजय (Victory) का प्रतीक है। चाहे वह युद्ध का मैदान हो, कोर्ट-कचहरी के विवाद हों या कोई बड़ा मुकाबला—प्रतिद्वंद्वियों पर बढ़त हासिल करने और सफलता पाने में यह सहायक माना जाता है।',
    descriptionEn:
      'The complete symbol of Victory. Whether on the battlefield, in court/legal disputes, or in major contests, it assists in gaining the upper hand over rivals and achieving triumph.',
    accentColor: '#FBBF24'
  },
  {
    id: 'mahaveer-vetal',
    gunaCategory: 'rajasic',
    gunaLabelHi: 'राजसिक बेताल',
    gunaLabelEn: 'Rājasika Vetāla',
    nameHi: 'महावीर बेताल (Mahaveer Vetal)',
    nameEn: 'Mahāvīra Vetāla (Great Valor Vetāla)',
    elementOrDomainHi: 'असाधारण नेतृत्व क्षमता, पराक्रम एवं विपरीत परिस्थितियों में अडिग साहस',
    elementOrDomainEn: 'Extraordinary Leadership, Prowess & Unwavering Fortitude',
    descriptionHi:
      'यह बहुत अधिक ऊर्जा और पराक्रम से युक्त होता है। इसका कार्य साधक को असाधारण नेतृत्व क्षमता और विपरीत परिस्थितियों में भी अडिग रहने का साहस देना है।',
    descriptionEn:
      'Endowed with immense energy and valor, its function is to bestow extraordinary leadership capacity and the courage to stand unshaken even in adverse circumstances.',
    accentColor: '#EA580C'
  },
  {
    id: 'maya-vetal',
    gunaCategory: 'rajasic',
    gunaLabelHi: 'राजसिक बेताल',
    gunaLabelEn: 'Rājasika Vetāla',
    nameHi: 'माया बेताल (Maya Vetal)',
    nameEn: 'Māyā Vetāla (Illusion & Protective Veil Vetāla)',
    elementOrDomainHi: 'भ्रम (Illusion) एवं शत्रुओं से रक्षा हेतु अभेद्य सुरक्षा कवच / मायाजाल',
    elementOrDomainEn: 'Strategic Illusion & Impenetrable Protective Veil Against Foes',
    descriptionHi:
      'यह भ्रम (Illusion) पैदा करने की शक्तियों से लैस होता है। इसका कार्य साधक की शत्रुओं से रक्षा के लिए एक अभेद्य सुरक्षा कवच या मायाजाल बुनना होता है, जिससे विरोधी भ्रमित हो जाते हैं।',
    descriptionEn:
      'Equipped with the power of illusion (Māyā), its role is to weave an impenetrable protective shield or web of illusion around the practitioner so that adversaries are confounded.',
    accentColor: '#A855F7'
  },

  // TAMASIC VETALAS (5 Profiles)
  {
    id: 'maha-vetal',
    gunaCategory: 'tamasic',
    gunaLabelHi: 'तामसिक बेताल',
    gunaLabelEn: 'Tāmasika Vetāla',
    nameHi: 'महा बेताल (Maha Vetal)',
    nameEn: 'Mahā Vetāla (Sovereign of Tāmasika Vetālas)',
    elementOrDomainHi: 'तामसिक बेतालों का राजा · सबसे प्रचंड रूप एवं मारण कर्म',
    elementOrDomainEn: 'King of Tāmasika Vetālas · Supreme Fierce Energy',
    descriptionHi:
      'यह सभी तामसिक बेतालों का राजा और सबसे प्रचंड रूप माना जाता है। इसका कार्य साधक के घोर शत्रुओं का पूरी तरह से समूल नाश करना (मारण कर्म) होता है। इसकी ऊर्जा इतनी तीव्र होती है कि इसे संभालना आम तांत्रिकों के बस की बात नहीं होती।',
    descriptionEn:
      'Regarded as the king and fiercest form of all Tāmasika Vetālas, associated in Tantric lore with complete destruction of mortal enemies (māraṇa). Its energy is so intense that ordinary practitioners cannot withstand it.',
    accentColor: '#EF4444'
  },
  {
    id: 'prachand-vetal',
    gunaCategory: 'tamasic',
    gunaLabelHi: 'तामसिक बेताल',
    gunaLabelEn: 'Tāmasika Vetāla',
    nameHi: 'प्रचंड बेताल (Prachand Vetal)',
    nameEn: 'Pracaṇḍa Vetāla (Fierce Uccāṭana Vetāla)',
    elementOrDomainHi: 'क्रोध, शत्रु-भय, बुद्धि-भ्रम एवं उच्चाटन कर्म',
    elementOrDomainEn: 'Fierce Wrath, Terror in Foes & Uccāṭana (Dislodgement)',
    descriptionHi:
      'अपने नाम के अनुरूप यह अत्यंत क्रोधी और हिंसक स्वभाव का होता है। शत्रु के मन में अत्यधिक भय पैदा करना, विरोधियों की बुद्धि को भ्रमित कर देना और समाज में अशांति या उच्चाटन (मन उचाट करना) जैसी परिस्थितियों को जन्म देना इसका मुख्य कार्य माना जाता है।',
    descriptionEn:
      'True to its name, it is fiercely wrathful, associated with instilling terror in enemies, confounding the intellect of opponents, and causing dislodgement or agitation (uccāṭana).',
    accentColor: '#DC2626'
  },
  {
    id: 'agni-agya-vetal',
    gunaCategory: 'tamasic',
    gunaLabelHi: 'तामसिक बेताल',
    gunaLabelEn: 'Tāmasika Vetāla',
    nameHi: 'अग्नि बेताल / आग्या बेताल (Agni Vetal / Agya Vetal)',
    nameEn: 'Agni / Āgyā Vetāla (Fiery Vetāla)',
    elementOrDomainHi: 'अग्नि तत्व की उग्र ऊर्जा · दहन एवं तंत्र-बाधा',
    elementOrDomainEn: 'Fierce Fire Element · Combustion & Tantric Obstruction',
    descriptionHi:
      'हालांकि इसका कुछ संदर्भ राजसिक में भी आता है, लेकिन इसका घोर तामसिक रूप पूरी तरह विनाशकारी है। यह अग्नि तत्व की नकारात्मक और उग्र ऊर्जा को नियंत्रित करता है। तांत्रिक इसका उपयोग किसी स्थान या शत्रु की संपत्ति को नष्ट करने, आगजनी या तंत्र बाधा उत्पन्न करने के लिए करते हैं।',
    descriptionEn:
      'Though sometimes referenced in Rājasika contexts, its extreme Tāmasika aspect governs the destructive force of the Fire element.',
    accentColor: '#F97316'
  },
  {
    id: 'kankal-vetal',
    gunaCategory: 'tamasic',
    gunaLabelHi: 'तामसिक बेताल',
    gunaLabelEn: 'Tāmasika Vetāla',
    nameHi: 'कंकाल बेताल (Kankal Vetal)',
    nameEn: 'Kaṅkāla Vetāla (Skeletal Cremation Vetāla)',
    elementOrDomainHi: 'श्मशान की सूखी हड्डियों एवं अधजली चिताओं की ऊर्जा',
    elementOrDomainEn: 'Cremation Ground Bones & Pyre Ash Energy',
    descriptionHi:
      'यह श्मशान की सूखी हड्डियों और अधजली लाशों की ऊर्जा से जुड़ा होता है। इसका कार्य अकाल मृत्यु, महामारियों, और असाध्य (लाइलाज) शारीरिक रोगों का संचार करना माना गया है।',
    descriptionEn:
      'Bound to the dry bones and half-burnt pyres of the cremation ground, associated in folklore with untimely mortality, epidemics, and severe afflictions.',
    accentColor: '#991B1B'
  },
  {
    id: 'rakta-vetal',
    gunaCategory: 'tamasic',
    gunaLabelHi: 'तामसिक बेताल',
    gunaLabelEn: 'Tāmasika Vetāla',
    nameHi: 'रक्त बेताल (Rakta Vetal)',
    nameEn: 'Rakta Vetāla (Blood & Conflict Vetāla)',
    elementOrDomainHi: 'युद्ध एवं संघर्ष में रक्तपात तथा आपसी कलह',
    elementOrDomainEn: 'Bloodshed & Mutual Strife Among Enemy Ranks',
    descriptionHi:
      'इसका संबंध सीधे तौर पर हिंसा, दुर्घटनाओं और रक्तपात से होता है। युद्ध या संघर्ष की स्थिति में शत्रुओं के बीच आपसी मार-काट और रक्तपात की स्थितियाँ पैदा करना इस तामसिक शक्ति का कार्य माना जाता है।',
    descriptionEn:
      'Directly associated with conflict and bloodshed, described as sowing mutual strife and chaos within enemy ranks during warfare.',
    accentColor: '#B91C1C'
  }
];

export interface Vetala52TypeEntry {
  index: number;
  iast: string;
  hindi: string;
  combined: string;
}

export const VETALA_52_TYPES_LIST: Vetala52TypeEntry[] = [
  { index: 1, iast: 'Vīra Betāla', hindi: 'वीर बेताल', combined: 'Vīra Betāla — वीर बेताल' },
  { index: 2, iast: 'Mahā Betāla', hindi: 'महा बेताल', combined: 'Mahā Betāla — महा बेताल' },
  { index: 3, iast: 'Agni Betāla', hindi: 'अग्नि बेताल', combined: 'Agni Betāla — अग्नि बेताल' },
  { index: 4, iast: 'Gagana Betāla', hindi: 'गगन बेताल', combined: 'Gagana Betāla — गगन बेताल' },
  { index: 5, iast: 'Bhūmi Betāla (Bhū Betāla)', hindi: 'भूमि बेताल', combined: 'Bhūmi Betāla (Bhū Betāla) — भूमि बेताल' },
  { index: 6, iast: 'Jala Betāla', hindi: 'जल बेताल', combined: 'Jala Betāla — जल बेताल' },
  { index: 7, iast: 'Pavana Betāla', hindi: 'पवन बेताल', combined: 'Pavana Betāla — पवन बेताल' },
  { index: 8, iast: 'Mahāvīra Betāla', hindi: 'महावीर बेताल', combined: 'Mahāvīra Betāla — महावीर बेताल' },
  { index: 9, iast: 'Rājya Betāla', hindi: 'राज्य बेताल', combined: 'Rājya Betāla — राज्य बेताल' },
  { index: 10, iast: 'Jaya Betāla', hindi: 'जय बेताल', combined: 'Jaya Betāla — जय बेताल' },
  { index: 11, iast: 'Brahma Betāla', hindi: 'ब्रह्म बेताल', combined: 'Brahma Betāla — ब्रह्म बेताल' },
  { index: 12, iast: 'Hanumān Betāla', hindi: 'हनुमान बेताल', combined: 'Hanumān Betāla — हनुमान बेताल' },
  { index: 13, iast: 'Guhiyā Betāla', hindi: 'गुहिया बेताल', combined: 'Guhiyā Betāla — गुहिया बेताल' },
  { index: 14, iast: 'Dhana Betāla', hindi: 'धन बेताल', combined: 'Dhana Betāla — धन बेताल' },
  { index: 15, iast: 'Rākṣasa Betāla', hindi: 'राक्षस बेताल', combined: 'Rākṣasa Betāla — राक्षस बेताल' },
  { index: 16, iast: 'Karṇa Betāla', hindi: 'कर्ण बेताल', combined: 'Karṇa Betāla — कर्ण बेताल' },
  { index: 17, iast: 'Śiva Betāla', hindi: 'शिव बेताल', combined: 'Śiva Betāla — शिव बेताल' },
  { index: 18, iast: 'Trinetra Betāla', hindi: 'त्रिनेत्र बेताल', combined: 'Trinetra Betāla — त्रिनेत्र बेताल' },
  { index: 19, iast: 'Ghaṭaka Betāla', hindi: 'घटक बेताल', combined: 'Ghaṭaka Betāla — घटक बेताल' },
  { index: 20, iast: 'Citeśvara Betāla', hindi: 'चितेश्वर बेताल', combined: 'Citeśvara Betāla — चितेश्वर बेताल' },
  { index: 21, iast: 'Kapālī Betāla', hindi: 'कापाली बेताल', combined: 'Kapālī Betāla — कापाली बेताल' },
  { index: 22, iast: 'Ghaṇṭākarṇa Betāla', hindi: 'घंटाकर्ण बेताल', combined: 'Ghaṇṭākarṇa Betāla — घंटाकर्ण बेताल' },
  { index: 23, iast: 'Rudra Betāla', hindi: 'रुद्र बेताल', combined: 'Rudra Betāla — रुद्र बेताल' },
  { index: 24, iast: 'Budha Betāla', hindi: 'बुध बेताल', combined: 'Budha Betāla — बुध बेताल' },
  { index: 25, iast: 'Ājñā Betāla', hindi: 'आज्ञा बेताल', combined: 'Ājñā Betāla — आज्ञा बेताल' },
  { index: 26, iast: 'Jalayāna Betāla', hindi: 'जलयान बेताल', combined: 'Jalayāna Betāla — जलयान बेताल' },
  { index: 27, iast: 'Kālī Betāla', hindi: 'काली बेताल', combined: 'Kālī Betāla — काली बेताल' },
  { index: 28, iast: 'Māraṇa Betāla', hindi: 'मारण बेताल', combined: 'Māraṇa Betāla — मारण बेताल' },
  { index: 29, iast: 'Aichika Betāla', hindi: 'ऐचिक बेताल', combined: 'Aichika Betāla — ऐचिक बेताल' },
  { index: 30, iast: 'Āgama Betāla', hindi: 'आगम बेताल', combined: 'Āgama Betāla — आगम बेताल' },
  { index: 31, iast: 'Aghora Betāla', hindi: 'अघोर बेताल', combined: 'Aghora Betāla — अघोर बेताल' },
  { index: 32, iast: 'Ghāṇṭālā Betāla', hindi: 'घांटाला बेताल', combined: 'Ghāṇṭālā Betāla — घांटाला बेताल' },
  { index: 33, iast: 'Ghaṭaka Betāla', hindi: 'घटक बेताल', combined: 'Ghaṭaka Betāla — घटक बेताल' },
  { index: 34, iast: 'Pracaṇḍa Betāla', hindi: 'प्रचण्ड बेताल', combined: 'Pracaṇḍa Betāla — प्रचण्ड बेताल' },
  { index: 35, iast: 'Bhoṃḍā Betāla', hindi: 'भोंडा बेताल', combined: 'Bhoṃḍā Betāla — भोंडा बेताल' },
  { index: 36, iast: 'Tāla Betāla', hindi: 'ताल बेताल', combined: 'Tāla Betāla — ताल बेताल' },
  { index: 37, iast: 'Jogiyā Betāla', hindi: 'जोगिया बेताल', combined: 'Jogiyā Betāla — जोगिया बेताल' },
  { index: 38, iast: 'Pītama Betāla', hindi: 'पीतम बेताल', combined: 'Pītama Betāla — पीतम बेताल' },
  { index: 39, iast: 'Śmaśāna Betāla', hindi: 'श्मशान बेताल', combined: 'Śmaśāna Betāla — श्मशान बेताल' },
  { index: 40, iast: 'Rākṣasa Betāla', hindi: 'राक्षस बेताल', combined: 'Rākṣasa Betāla — राक्षस बेताल' },
  { index: 41, iast: 'Bhūta Betāla', hindi: 'भूत बेताल', combined: 'Bhūta Betāla — भूत बेताल' },
  { index: 42, iast: 'Preta Betāla', hindi: 'प्रेत बेताल', combined: 'Preta Betāla — प्रेत बेताल' },
  { index: 43, iast: 'Piśācha Betāla', hindi: 'पिशाच बेताल', combined: 'Piśācha Betāla — पिशाच बेताल' },
  { index: 44, iast: 'Nāga Betāla', hindi: 'नाग बेताल', combined: 'Nāga Betāla — नाग बेताल' },
  { index: 45, iast: 'Brahmarākṣasa Betāla', hindi: 'ब्रह्मराक्षस बेताल', combined: 'Brahmarākṣasa Betāla — ब्रह्मराक्षस बेताल' },
  { index: 46, iast: 'Kṣetrapāl Betāla', hindi: 'क्षेत्रपाल बेताल', combined: 'Kṣetrapāl Betāla — क्षेत्रपाल बेताल' },
  { index: 47, iast: 'Mahāvīra Betāla', hindi: 'महावीर बेताल', combined: 'Mahāvīra Betāla — महावीर बेताल' },
  { index: 48, iast: 'Kālikā Betāla', hindi: 'कालिका बेताल', combined: 'Kālikā Betāla — कालिका बेताल' },
  { index: 49, iast: 'Haṃḍiyā Betāla', hindi: 'हंडिया बेताल', combined: 'Haṃḍiyā Betāla — हंडिया बेताल' },
  { index: 50, iast: 'Pañcabhūta Betāla', hindi: 'पंचभूत बेताल', combined: 'Pañcabhūta Betāla — पंचभूत बेताल' },
  { index: 51, iast: 'Suprabha Betāla', hindi: 'सुप्रभा बेताल', combined: 'Suprabha Betāla — सुप्रभा बेताल' },
  { index: 52, iast: 'Pañcatattva Betāla', hindi: 'पंचतत्त्व बेताल', combined: 'Pañcatattva Betāla — पंचतत्त्व बेताल' }
];

export const VETALA_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-vetala-three-gunas-overview',
    articleSlug: 'vetala-trividha-prakriti-archive',
    titleEn: 'The Threefold Nature of Vetālas (बेतालों की त्रिविध प्रकृति — Sāttvika, Rājasika & Tāmasika)',
    titleHi: 'बेतालों की त्रिविध प्रकृति (सात्विक १६ प्रकार · राजसिक ११ प्रकार · तामसिक बेताल) — तुलनात्मक सारणी',
    captionEn:
      'Classification of Vetāla spirits across the three Guṇas (Sattva, Rajas, and Tamas), their canonical counts, core characteristics, and primary roles.',
    captionHi:
      'सत्त्व, रज और तम—तीनों गुणों के आधार पर बेतालों का वर्गीकरण, उनकी संख्या, प्रमुख विशेषताएं और साधना में भूमिका।',
    headersEn: ['Guṇa Category & Count', 'Core Characteristics (विशेषता)', 'Primary Role & Function (भूमिका)', 'Key Representatives (प्रमुख बेताल)'],
    headersHi: ['गुण श्रेणी एवं संख्या', 'प्रमुख विशेषता (Characteristics)', 'साधनात्मक भूमिका एवं कार्य (Role)', 'प्रमुख बेताल स्वरूप'],
    rowsEn: [
      [
        '1. Sāttvika Vetālas (16 Types)\n१. सात्विक बेताल (16 प्रकार)',
        'Serene, wise, philosophical, and devoted to justice (शांत, ज्ञानी और न्यायप्रिय).',
        'Never cause harm; bestow spiritual knowledge, clairvoyance across past and future (Divya Dṛṣṭi), and ability to solve deep riddles (e.g., Baitāl Pachīsī).',
        '1. Gagana Vetal (Sky)\n2. Jala Vetal (Water)\n3. Bhūmi Vetal (Earth)\n4. Pavana Vetal (Wind)\n5. Jñāna Vetal (Wisdom)'
      ],
      [
        '2. Rājasika Vetālas (11 Types)\n२. राजसिक बेताल (11 प्रकार)',
        'Supremely powerful, majestic, and masters of illusionary (Māyāvī) powers (शक्तिशाली, वैभवशाली और मायावी).',
        'Connect with kings, warriors, and ambitious adepts to win wars, regain lost kingdoms or wealth, and achieve victory over rivals.',
        '1. Vīra Vetal (Courage)\n2. Rājya Vetal (Sovereignty)\n3. Jaya Vetal (Victory)\n4. Mahāvīra Vetal (Leadership)\n5. Māyā Vetal (Protective Illusion)'
      ],
      [
        '3. Tāmasika Vetālas\n३. तामसिक बेताल',
        'Fierce, wrathful, dark, and filled with destructive cremation-ground energy (उग्र, क्रूर, अंधकारमयी और विनाशकारी).',
        'Dwell in the deepest recesses of cremation grounds; associated in Tantric texts with extreme rites (Māraṇa, Uccāṭana) at midnight on Amāvāsyā, Kālī Chaudas, or eclipses.',
        '1. Mahā Vetal (King of Tāmasika)\n2. Pracaṇḍa Vetal (Wrath/Uccāṭana)\n3. Agni / Āgyā Vetal (Fire)\n4. Kaṅkāla Vetal (Skeletal)\n5. Rakta Vetal (Conflict)'
      ]
    ],
    rowsHi: [
      [
        '1. सात्विक बेताल (16 प्रकार)',
        'ये आत्माएं शांत, ज्ञानी और न्यायप्रिय मानी जाती हैं।',
        'इनका उद्देश्य किसी को नुकसान पहुंचाना नहीं होता। ये साधक को आध्यात्मिक ज्ञान, भूत-भविष्य देखने की दृष्टि (Divya Drishti) और गूढ़ रहस्यों को सुलझाने की क्षमता प्रदान करते हैं (उदाहरण: बेताल पच्चीसी)।',
        '१. गगन बेताल (आकाश तत्व)\n२. जल बेताल (जल तत्व)\n३. भूमि / भू बेताल (पृथ्वी तत्व)\n४. पवन बेताल (वायु तत्व)\n५. ज्ञान बेताल (शास्त्र रक्षक)'
      ],
      [
        '2. राजसिक बेताल (11 प्रकार)',
        'ये अत्यंत शक्तिशाली, वैभवशाली और मायावी (Illusionary) शक्तियों के स्वामी होते हैं।',
        'ये राजाओं, योद्धाओं और महत्वाकांक्षी साधकों से जुड़ते हैं। इनका उपयोग युद्ध जीतने, खोया हुआ साम्राज्य या धन वापस पाने और शत्रुओं पर विजय प्राप्त करने के लिए किया जाता था।',
        '१. वीर बेताल (निर्भयता व बल)\n२. राज्य बेताल (सत्ता व अधिकार)\n३. जय बेताल (युद्ध/विवाद विजय)\n४. महावीर बेताल (नेतृत्व व पराक्रम)\n५. माया बेताल (सुरक्षा मायाजाल)'
      ],
      [
        '3. तामसिक बेताल',
        'ये पूरी तरह से उग्र, क्रूर, अंधकारमयी और विनाशकारी ऊर्जा से भरे होते हैं।',
        'ये श्मशान के सबसे डरावने हिस्सों में रहते हैं। तांत्रिक ग्रंथों में इनका उपयोग मारण, उच्चाटन आदि घोर तांत्रिक कर्मों के लिए वर्णित है; इनकी साधना अमावस्या, काली चौदह या ग्रहण की मध्यरात्रि को होती है।',
        '१. महा बेताल (तामसिक राजा)\n२. प्रचंड बेताल (भय व उच्चाटन)\n३. अग्नि / आग्या बेताल (अग्नि तत्व)\n४. कंकाल बेताल (श्मशान अस्थि)\n५. रक्त बेताल (संघर्ष)'
      ]
    ]
  },
  {
    id: 'table-vetala-15-detailed-profiles',
    articleSlug: 'vetala-trividha-prakriti-archive',
    titleEn: 'Complete Roster of the 15 Principal Vetālas Across Sāttvika, Rājasika & Tāmasika Divisions',
    titleHi: 'सात्विक, राजसिक एवं तामसिक श्रेणी के १५ प्रमुख बेतालों और उनके कार्यों की विस्तृत तालिका',
    captionEn:
      'Individual classification of the five Sāttvika elemental/wisdom Vetālas, five Rājasika royal/martial Vetālas, and five Tāmasika cremation-ground Vetālas.',
    captionHi:
      'पाँच सात्विक (तत्व एवं ज्ञान), पाँच राजसिक (शौर्य एवं राज्य) तथा पाँच तामसिक (श्मशानिक) बेतालों का विस्तृत कार्य-विवरण।',
    headersEn: ['#', 'Vetāla Name', 'Guṇa Class', 'Element / Domain', 'Detailed Function & Tantric Role'],
    headersHi: ['क्र.', 'बेताल का नाम', 'गुण श्रेणी', 'तत्व / अधिकार-क्षेत्र', 'विस्तृत कार्य एवं तांत्रिक भूमिका'],
    rowsEn: VETALA_PROFILES_LIST.map((v, idx) => [
      String(idx + 1).padStart(2, '0'),
      `${v.nameHi}\n${v.nameEn}`,
      v.gunaLabelEn,
      v.elementOrDomainEn,
      v.descriptionEn
    ]),
    rowsHi: VETALA_PROFILES_LIST.map((v, idx) => [
      String(idx + 1).padStart(2, '0'),
      v.nameHi,
      v.gunaLabelHi,
      v.elementOrDomainHi,
      v.descriptionHi
    ])
  }
];

export const VETALA_ARTICLE: ResearchArticle = {
  slug: 'vetala-trividha-prakriti-archive',
  categorySlug: 'bhairav-investigation-codex',
  code: 'VTL-03',
  titleEn: 'बेतालों की त्रिविध प्रकृति — The Three Guṇas of Vetālas: Sāttvika (16), Rājasika (11), Tāmasika & the 52 Betālas',
  titleHi: 'बेतालों की त्रिविध प्रकृति (The Three Gunas of Betals): सात्विक (16), राजसिक (11), तामसिक एवं 52 बेताल',
  subtitleEn: 'Comprehensive Study of Sāttvika Elemental & Wisdom Vetālas (Gagana, Jala, Bhūmi, Pavana, Jñāna), Rājasika Royal Vetālas (Vīra, Rājya, Jaya, Mahāvīra, Māyā), Tāmasika Cremation Vetālas, and the Complete Roster of 52 Betālas',
  subtitleHi: 'सात्विक (गगन, जल, भूमि, पवन, ज्ञान), राजसिक (वीर, राज्य, जय, महावीर, माया), तामसिक बेतालों (महा, प्रचंड, अग्नि/आग्या, कंकाल, रक्त) का स्वरूप तथा 52 प्रकार के बेतालों की संपूर्ण सूची',
  sanskritEpigraph: '॥ सात्त्विका राजसाश्चैव तामसाश्चेति त्रिविधाः वेतालाः परिकीर्तिताः ॥',
  epigraphTranslationEn: '"Vetālas are classified into three distinct natures according to the three Guṇas—Sāttvika (16 types of wisdom and elemental guardianship), Rājasika (11 types of royal valor and victory), and Tāmasika (fierce cremation-ground forces)."',
  epigraphTranslationHi: '"तंत्र शास्त्र में बेतालों की प्रकृति तीन गुणों में विभाजित है—१. सात्विक बेताल (१६ प्रकार: शांत, ज्ञानी व न्यायप्रिय), २. राजसिक बेताल (११ प्रकार: शक्तिशाली, वैभवशाली व विजय-प्रदायक), और ३. तामसिक बेताल (उग्र श्मशानिक ऊर्जा)।"',
  evidenceBadgeEn: 'BHŪTA-VETĀLA TANTRA & FOLKLORE ARCHIVE · TRI-GUṆA & 52 BETĀLA TAXONOMY',
  evidenceBadgeHi: 'वेताल-तंत्र एवं लोक-परम्परा अभिलेखागार · त्रिगुण एवं ५२ बेताल वर्गीकरण',
  accentColor: '#38BDF8',
  summaryEn:
    'In Indian Tantric taxonomy and classical narrative literature (such as the Vetāla Pañcaviṃśati / Baitāl Pachīsī), Vetālas (बेताल) are not a single monolithic class of spirits, but are divided into three distinct natures (त्रिविध प्रकृति — The Three Guṇas of Betals): (1) Sāttvika Vetālas (16 types), serene, wise, and justice-loving spirits governing the elements and scriptures who grant Divya Dṛṣṭi and intuition; (2) Rājasika Vetālas (11 types), majestic, martial, and illusion-wielding powers invoked by kings and warriors for courage, sovereignty, and victory; and (3) Tāmasika Vetālas, fierce and perilous cremation-ground energies associated with midnight rites on Amāvāsyā, Kālī Chaudas, and eclipses, alongside the complete traditional roster of 52 types of Vetāla (Bāvan Betāla).',
  summaryHi:
    'तंत्र शास्त्र और भारतीय आख्यान परम्परा (जैसे बेताल पच्चीसी) में बेतालों की प्रकृति को तीन प्रमुख गुणों—सात्विक, राजसिक और तामसिक—में विभाजित किया गया है: (1) सात्विक बेताल (16 प्रकार): शांत, ज्ञानी और न्यायप्रिय शक्तियां जो दिव्य दृष्टि, तत्व-रक्षा और आध्यात्मिक अंतर्दृष्टि प्रदान करती हैं; (2) राजसिक बेताल (11 प्रकार): शक्तिशाली, वैभवशाली और मायावी शक्तियां जो राजाओं और योद्धाओं को निर्भयता, राज्य-सत्ता और विजय दिलाती हैं; तथा (3) तामसिक बेताल: श्मशान के सबसे उग्र और विनाशकारी हिस्से में रहने वाली प्रचंड शक्तियां, जिनके साथ परम्परा में बेताल के कुल 52 प्रकार (बावन बेताल) भी वर्णित हैं।',
  sections: [
    {
      headingEn: '1. बेतालों की त्रिविध प्रकृति (The Three Gunas of Betals)',
      headingHi: '1. बेतालों की त्रिविध प्रकृति (The Three Gunas of Betals)',
      bodyEn:
        "1. सात्विक बेताल (16 प्रकार) — Sāttvika Vetālas (16 Types):\n• विशेषता (Characteristics): ये आत्माएं शांत, ज्ञानी और न्यायप्रिय मानी जाती हैं। (These spirits are considered serene, wise, and devoted to justice.)\n• भूमिका (Role): इनका उद्देश्य किसी को नुकसान पहुंचाना नहीं होता। तंत्र शास्त्र के अनुसार, ये साधक को आध्यात्मिक ज्ञान, भूत-भविष्य देखने की दृष्टि (Divya Drishti) और गूढ़ रहस्यों को सुलझाने की क्षमता प्रदान करते हैं।\n• उदाहरण (Example): 'बेताल पच्चीसी' का बेताल इसी श्रेणी के करीब दिखता है, जो राजा विक्रम की परीक्षा केवल ज्ञान और न्याय के आधार पर लेता है।\n\n2. राजसिक बेताल (11 प्रकार) — Rājasika Vetālas (11 Types):\n• विशेषता (Characteristics): ये अत्यंत शक्तिशाली, वैभवशाली और मायावी (Illusionary) शक्तियों के स्वामी होते हैं।\n• भूमिका (Role): ये राजाओं, योद्धाओं और महत्वाकांक्षी साधकों से जुड़ते हैं। इनका उपयोग युद्ध जीतने, खोया हुआ साम्राज्य या धन वापस पाने और शत्रुओं पर विजय प्राप्त करने के लिए किया जाता था। इनमें अहंकार और यश की भावना प्रबल होती है।\n\n3. तामसिक बेताल — Tāmasika Vetālas:\n• विशेषता (Characteristics): ये पूरी तरह से उग्र, क्रूर, अंधकारमयी और विनाशकारी ऊर्जा से भरे होते हैं।\n• भूमिका (Role): ये श्मशान के सबसे डरावने हिस्सों में रहते हैं। तांत्रिक ग्रंथों में इनका उपयोग मारण (शत्रु का नाश), उच्चाटन और तबाही मचाने जैसे घोर तांत्रिक कर्मों के लिए किया जाता है। इनकी साधना सबसे कठिन और खतरनाक होती है, क्योंकि ज़रा सी चूक होने पर ये साधक को ही मार डालते हैं।",
      bodyHi:
        "1. सात्विक बेताल (16 प्रकार)\n• विशेषता: ये आत्माएं शांत, ज्ञानी और न्यायप्रिय मानी जाती हैं।\n• भूमिका: इनका उद्देश्य किसी को नुकसान पहुंचाना नहीं होता। तंत्र शास्त्र के अनुसार, ये साधक को आध्यात्मिक ज्ञान, भूत-भविष्य देखने की दृष्टि (Divya Drishti) और गूढ़ रहस्यों को सुलझाने की क्षमता प्रदान करते हैं।\n• उदाहरण: 'बेताल पच्चीसी' का बेताल इसी श्रेणी के करीब दिखता है, जो राजा विक्रम की परीक्षा केवल ज्ञान और न्याय के आधार पर लेता है।\n\n2. राजसिक बेताल (11 प्रकार)\n• विशेषता: ये अत्यंत शक्तिशाली, वैभवशाली और मायावी (Illusionary) शक्तियों के स्वामी होते हैं।\n• भूमिका: ये राजाओं, योद्धाओं और महत्वाकांक्षी साधकों से जुड़ते हैं। इनका उपयोग युद्ध जीतने, खोया हुआ साम्राज्य या धन वापस पाने और शत्रुओं पर विजय प्राप्त करने के लिए किया जाता था। इनमें अहंकार और यश की भावना प्रबल होती है।\n\n3. तामसिक बेताल\n• विशेषता: ये पूरी तरह से उग्र, क्रूर, अंधकारमयी और विनाशकारी ऊर्जा से भरे होते हैं।\n• भूमिका: ये श्मशान के सबसे डरावने हिस्सों में रहते हैं। तांत्रिक ग्रंथों में इनका उपयोग मारण (शत्रु का नाश), उच्चाटन और तबाही मचाने जैसे घोर तांत्रिक कर्मों के लिए किया जाता है। इनकी साधना सबसे कठिन और खतरनाक होती है, क्योंकि ज़रा सी चूक होने पर ये साधक को ही मार डालते हैं।"
    },
    {
      headingEn: '2. सात्विक बेताल (Sattvic Vetals) — Elemental & Wisdom Guardians',
      headingHi: '2. सात्विक बेताल (Sattvic Vetals)',
      bodyEn:
        "ये शक्तियां ज्ञान, दिशा-निर्देश, तत्वों की रक्षा और न्याय से जुड़ी होती हैं। इनका स्वभाव आक्रामक नहीं होता और ये साधक की मानसिक व आध्यात्मिक उन्नति में सहायता करती हैं।\n\n• गगन बेताल (Gagana Vetal): यह आकाश तत्व से जुड़ी सात्विक शक्ति है। इसका मुख्य कार्य साधक को उच्च बौद्धिक क्षमता, दूरदर्शिता और आध्यात्मिक अंतर्दृष्टि (Intuition) प्रदान करना है।\n\n• जल बेताल (Jala Vetal): जल तत्व का स्वामी होने के कारण यह शांति और शीतलता का प्रतीक है। यह साधक के मन की चंचलता को दूर करने, तनाव मिटाने और ध्यान (Meditation) में स्थिरता लाने में मदद करता है।\n\n• भूमि बेताल / भू बेताल (Bhumi Vetal): यह पृथ्वी तत्व से जुड़ा है। इसका कार्य साधक को मानसिक रूप से स्थिर (Ground) रखना, खेती या भूमि से जुड़े विवादों में न्याय दिलाना और प्राकृतिक आपदाओं से रक्षा करना माना जाता है।\n\n• पवन बेताल (Pavana Vetal): वायु तत्व का यह बेताल साधक को तीव्रता (Speed) और सतर्कता देता है। इसका कार्य संकट के समय साधक को पहले ही भांपने की शक्ति देना और सही राह दिखाना है।\n\n• ज्ञान बेताल (Jnana Vetal): यह सीधे तौर पर शास्त्रों और गुप्त विद्याओं का रक्षक है। 'बेताल पच्चीसी' की कहानियों में दिखने वाला बेताल इसी श्रेणी से मेल खाता है, जो राजा विक्रमादित्य से जटिल और दार्शनिक सवाल पूछकर उनकी बुद्धिमत्ता की परीक्षा लेता है।",
      bodyHi:
        "ये शक्तियां ज्ञान, दिशा-निर्देश, तत्वों की रक्षा और न्याय से जुड़ी होती हैं। इनका स्वभाव आक्रामक नहीं होता और ये साधक की मानसिक व आध्यात्मिक उन्नति में सहायता करती हैं।\n\n• गगन बेताल (Gagana Vetal): यह आकाश तत्व से जुड़ी सात्विक शक्ति है। इसका मुख्य कार्य साधक को उच्च बौद्धिक क्षमता, दूरदर्शिता और आध्यात्मिक अंतर्दृष्टि (Intuition) प्रदान करना है।\n\n• जल बेताल (Jala Vetal): जल तत्व का स्वामी होने के कारण यह शांति और शीतलता का प्रतीक है। यह साधक के मन की चंचलता को दूर करने, तनाव मिटाने और ध्यान (Meditation) में स्थिरता लाने में मदद करता है।\n\n• भूमि बेताल / भू बेताल (Bhumi Vetal): यह पृथ्वी तत्व से जुड़ा है। इसका कार्य साधक को मानसिक रूप से स्थिर (Ground) रखना, खेती या भूमि से जुड़े विवादों में न्याय दिलाना और प्राकृतिक आपदाओं से रक्षा करना माना जाता है।\n\n• पवन बेताल (Pavana Vetal): वायु तत्व का यह बेताल साधक को तीव्रता (Speed) और सतर्कता देता है। इसका कार्य संकट के समय साधक को पहले ही भांपने की शक्ति देना और सही राह दिखाना है।\n\n• ज्ञान बेताल: यह सीधे तौर पर शास्त्रों और गुप्त विद्याओं का रक्षक है। 'बेताल पच्चीसी' की कहानियों में दिखने वाला बेताल इसी श्रेणी से मेल खाता है, जो राजा विक्रमादित्य से जटिल और दार्शनिक सवाल पूछकर उनकी बुद्धिमत्ता की परीक्षा लेता है।"
    },
    {
      headingEn: '3. राजसिक बेताल (Rajasic Vetals) — Valor, Sovereignty & Victory',
      headingHi: '3. राजसिक बेताल (Rajasic Vetals)',
      bodyEn:
        'ये शक्तियां बल, ऐश्वर्य, विजय और भौतिक जगत में सफलता दिलाने के लिए जानी जाती हैं। राजा-महाराजा और युद्ध कला के साधक प्राचीन काल में इनकी ऊर्जा से जुड़ते थे।\n\n• वीर बेताल (Veer Vetal): यह राजसिक श्रेणी का सबसे प्रमुख बेताल माना जाता है। इसका कार्य साधक को निर्भयता (Courage) देना, शारीरिक बल बढ़ाना और शत्रुओं के भय को समाप्त करना है।\n\n• राज्य बेताल (Rajya Vetal): जैसा कि नाम से स्पष्ट है, इसका संबंध सत्ता और अधिकार से है। पुराने समय में राजा और सेनापति प्रशासनिक सफलता, मान-सम्मान और अपने साम्राज्य की सीमाओं को सुरक्षित रखने के लिए इससे जुड़ी ऊर्जा का आह्वान करते थे।\n\n• जय बेताल (Jaya Vetal): यह पूर्णतः विजय (Victory) का प्रतीक है। चाहे वह युद्ध का मैदान हो, कोर्ट-कचहरी के विवाद हों या कोई बड़ा मुकाबला—प्रतिद्वंद्वियों पर बढ़त हासिल करने और सफलता पाने में यह सहायक माना जाता है।\n\n• महावीर बेताल (Mahaveer Vetal): यह बहुत अधिक ऊर्जा और पराक्रम से युक्त होता है। इसका कार्य साधक को असाधारण नेतृत्व क्षमता और विपरीत परिस्थितियों में भी अडिग रहने का साहस देना है।\n\n• माया बेताल (Maya Vetal): यह भ्रम (Illusion) पैदा करने की शक्तियों से लैस होता है। इसका कार्य साधक की शत्रुओं से रक्षा के लिए एक अभेद्य सुरक्षा कवच या मायाजाल बुनना होता है, जिससे विरोधी भ्रमित हो जाते हैं।',
      bodyHi:
        'ये शक्तियां बल, ऐश्वर्य, विजय और भौतिक जगत में सफलता दिलाने के लिए जानी जाती हैं। राजा-महाराजा और युद्ध कला के साधक प्राचीन काल में इनकी ऊर्जा से जुड़ते थे।\n\n• वीर बेताल (Veer Vetal): यह राजसिक श्रेणी का सबसे प्रमुख बेताल माना जाता है। इसका कार्य साधक को निर्भयता (Courage) देना, शारीरिक बल बढ़ाना और शत्रुओं के भय को समाप्त करना है।\n\n• राज्य बेताल (Rajya Vetal): जैसा कि नाम से स्पष्ट है, इसका संबंध सत्ता और अधिकार से है। पुराने समय में राजा और सेनापति प्रशासनिक सफलता, मान-सम्मान और अपने साम्राज्य की सीमाओं को सुरक्षित रखने के लिए इससे जुड़ी ऊर्जा का आह्वान करते थे।\n\n• जय बेताल (Jaya Vetal): यह पूर्णतः विजय (Victory) का प्रतीक है। चाहे वह युद्ध का मैदान हो, कोर्ट-कचहरी के विवाद हों या कोई बड़ा मुकाबला—प्रतिद्वंद्वियों पर बढ़त हासिल करने और सफलता पाने में यह सहायक माना जाता है।\n\n• महावीर बेताल (Mahaveer Vetal): यह बहुत अधिक ऊर्जा और पराक्रम से युक्त होता है। इसका कार्य साधक को असाधारण नेतृत्व क्षमता और विपरीत परिस्थितियों में भी अडिग रहने का साहस देना है।\n\n• माया बेताल: यह भ्रम (Illusion) पैदा करने की शक्तियों से लैस होता है। इसका कार्य साधक की शत्रुओं से रक्षा के लिए एक अभेद्य सुरक्षा कवच या मायाजाल बुनना होता है, जिससे विरोधी भ्रमित हो जाते हैं।'
    },
    {
      headingEn: '4. प्रमुख तामसिक बेताल और उनके कार्य (Tamasic Vetals & Their Functions)',
      headingHi: '4. प्रमुख तामसिक बेताल और उनके कार्य',
      bodyEn:
        '• महा बेताल (Maha Vetal): यह सभी तामसिक बेतालों का राजा और सबसे प्रचंड रूप माना जाता है। इसका कार्य साधक के घोर शत्रुओं का पूरी तरह से समूल नाश करना (मारण कर्म) होता है। इसकी ऊर्जा इतनी तीव्र होती है कि इसे संभालना आम तांत्रिकों के बस की बात नहीं होती।\n\n• प्रचंड बेताल (Prachand Vetal): अपने नाम के अनुरूप यह अत्यंत क्रोधी और हिंसक स्वभाव का होता है। शत्रु के मन में अत्यधिक भय पैदा करना, विरोधियों की बुद्धि को भ्रमित कर देना और समाज में अशांति या उच्चाटन (मन उचाट करना) जैसी परिस्थितियों को जन्म देना इसका मुख्य कार्य माना जाता है।\n\n• अग्नि बेताल / आग्या बेताल (Agni Vetal / Agya Vetal): हालांकि इसका कुछ संदर्भ राजसिक में भी आता है, लेकिन इसका घोर तामसिक रूप पूरी तरह विनाशकारी है। यह अग्नि तत्व की नकारात्मक और उग्र ऊर्जा को नियंत्रित करता है। तांत्रिक इसका उपयोग किसी स्थान या शत्रु की संपत्ति को नष्ट करने, आगजनी या तंत्र बाधा उत्पन्न करने के लिए करते हैं।\n\n• कंकाल बेताल (Kankal Vetal): यह श्मशान की सूखी हड्डियों और अधजली लाशों की ऊर्जा से जुड़ा होता है। इसका कार्य अकाल मृत्यु, महामारियों, और असाध्य (लाइलाज) शारीरिक रोगों का संचार करना माना गया है।\n\n• रक्त बेताल (Rakta Vetal): इसका संबंध सीधे तौर पर हिंसा, दुर्घटनाओं और रक्तपात से होता है। युद्ध या संघर्ष की स्थिति में शत्रुओं के बीच आपसी मार-काट और रक्तपात की स्थितियाँ पैदा करना इस तामसिक शक्ति का कार्य माना जाता है।',
      bodyHi:
        '• महा बेताल (Maha Vetal): यह सभी तामसिक बेतालों का राजा और सबसे प्रचंड रूप माना जाता है। इसका कार्य साधक के घोर शत्रुओं का पूरी तरह से समूल नाश करना (मारण कर्म) होता है। इसकी ऊर्जा इतनी तीव्र होती है कि इसे संभालना आम तांत्रिकों के बस की बात नहीं होती।\n\n• प्रचंड बेताल (Prachand Vetal): अपने नाम के अनुरूप यह अत्यंत क्रोधी और हिंसक स्वभाव का होता है। शत्रु के मन में अत्यधिक भय पैदा करना, विरोधियों की बुद्धि को भ्रमित कर देना और समाज में अशांति या उच्चाटन (मन उचाट करना) जैसी परिस्थितियों को जन्म देना इसका मुख्य कार्य माना जाता है।\n\n• अग्नि बेताल / आग्या बेताल (Agni Vetal / Agya Vetal): हालांकि इसका कुछ संदर्भ राजसिक में भी आता है, लेकिन इसका घोर तामसिक रूप पूरी तरह विनाशकारी है। यह अग्नि तत्व की नकारात्मक और उग्र ऊर्जा को नियंत्रित करता है। तांत्रिक इसका उपयोग किसी स्थान या शत्रु की संपत्ति को नष्ट करने, आगजनी या तंत्र बाधा उत्पन्न करने के लिए करते हैं।\n\n• कंकाल बेताल (Kankal Vetal): यह श्मशान की सूखी हड्डियों और अधजली लाशों की ऊर्जा से जुड़ा होता है। इसका कार्य अकाल मृत्यु, महामारियों, और असाध्य (लालाज) शारीरिक रोगों का संचार करना माना गया है।\n\n• रक्त बेताल (Rakta Vetal): इसका संबंध सीधे तौर पर हिंसा, दुर्घटनाओं और रक्तपात से होता है। युद्ध या संघर्ष की स्थिति में शत्रुओं के बीच आपसी मार-काट और रक्तपात की स्थितियाँ पैदा करना इस तामसिक शक्ति का कार्य माना जाता है।'
    },
    {
      headingEn: '5. तामसिक बेतालों की पूजा पद्धति और विशेषताएं (Ritual Characteristics of Tamasic Vetals)',
      headingHi: '5. तामसिक बेतालों की पूजा पद्धति और विशेषताएं',
      bodyEn:
        '1. भोग और नैवेद्य (Offerings): सात्विक और राजसिक बेतालों के विपरीत, तामसिक बेतालों की तृप्ति के लिए मदिरा (शराब), बकरे या मुर्गे की बलि (प्राचीन काल में प्रचलित), और श्मशान की भस्म चढ़ाई जाती है।\n\n2. साधना का समय (Time of Sādhanā): इनकी साधना केवल कृष्ण पक्ष की अमावस्या, काली चौदह (नरक चतुर्दशी), या ग्रहण की रात को मध्यरात्रि (कालरात्रि) के समय की जाती है।\n\n3. साधना स्थल (Locus of Sādhanā): इसके लिए केवल घोर श्मशान घाट, लाशों के पास, या भयंकर तांत्रिक पीठ ही उपयुक्त माने जाते हैं।',
      bodyHi:
        '1. भोग और नैवेद्य: सात्विक और राजसिक बेतालों के विपरीत, तामसिक बेतालों की तृप्ति के लिए मदिरा (शराब), बकरे या मुर्गे की बलि (प्राचीन काल में प्रचलित), और श्मशान की भस्म चढ़ाई जाती है।\n\n2. साधना का समय: इनकी साधना केवल कृष्ण पक्ष की अमावस्या, काली चौदह (नरक चतुर्दशी), या ग्रहण की रात को मध्यरात्रि (कालरात्रि) के समय की जाती है।\n\n3. साधना स्थल: इसके लिए केवल घोर श्मशान घाट, लाशों के पास, या भयंकर तांत्रिक पीठ ही उपयुक्त माने जाते हैं।'
    },
    {
      headingEn: '6. The 52 Types of Vetāla (बावन बेताल — 52 प्रकार के बेताल)',
      headingHi: '6. बावन बेताल — बेताल के 52 प्रकार (The 52 Types of Betāla)',
      bodyEn:
        'According to Tantric tradition, Vetālas have 52 distinct types (तंत्र परम्परा के अनुसार बेताल के कुल 52 प्रकार होते हैं):\n\n' +
        VETALA_52_TYPES_LIST.map(v => `${v.index}. ${v.combined}`).join('\n'),
      bodyHi:
        'तंत्र परम्परा के अनुसार बेताल के कुल 52 प्रकार होते हैं:\n\n' +
        VETALA_52_TYPES_LIST.map(v => `${v.index}. ${v.combined}`).join('\n')
    }
  ],
  keyFindingsEn: [
    'Vetālas are classified into three Guṇas: Sāttvika (16 types), Rājasika (11 types), and Tāmasika, and Tantric lore enumerates 52 distinct types of Vetālas (Bāvan Betāla) from 1. Vīra Betāla to 52. Pañcatattva Betāla.',
    'The five principal Sāttvika Vetālas—Gagana (Sky), Jala (Water), Bhūmi (Earth), Pavana (Wind), and Jñāna (Scriptural Wisdom, as in Baitāl Pachīsī)—promote intuition, meditation, grounding, vigilance, and dharma.',
    'The five principal Rājasika Vetālas—Vīra, Rājya, Jaya, Mahāvīra, and Māyā—govern courage, royal authority, battlefield/legal victory, leadership, and protective illusion, while the five Tāmasika Vetālas—Mahā, Pracaṇḍa, Agni/Āgyā, Kaṅkāla, and Rakta—represent fierce cremation-ground forces.'
  ],
  keyFindingsHi: [
    'बेतालों की प्रकृति तीन गुणों में विभाजित है: १. सात्विक बेताल (16 प्रकार), २. राजसिक बेताल (11 प्रकार), और ३. तामसिक बेताल; साथ ही तंत्र परम्परा में बेताल के कुल 52 प्रकार (१. वीर बेताल से ५२. पंचतत्त्व बेताल तक) वर्णित हैं।',
    'प्रमुख सात्विक बेताल (गगन, जल, भूमि, पवन और ज्ञान बेताल) पंचतत्वों के संतुलन, ध्यान, न्याय और आध्यात्मिक अंतर्दृष्टि से जुड़े हैं।',
    'प्रमुख राजसिक बेताल (वीर, राज्य, जय, महावीर और माया बेताल) शौर्य, सत्ता और विजय प्रदान करते हैं, जबकि तामसिक बेताल (महा, प्रचंड, अग्नि/आग्या, कंकाल और रक्त बेताल) घोर श्मशानिक क्रियाओं से संबद्ध हैं।'
  ],
  metadata: [
    {
      labelEn: 'ARCHIVE CODE & SEAL',
      labelHi: 'अभिलेख कोड एवं मुद्रा',
      valueEn: 'VTL-03 · SEAL 12 (Tri-Guṇa & 52 Vetāla Archive)',
      valueHi: 'VTL-03 · मुद्रा १२ (त्रिगुण एवं ५२ बेताल अभिलेखागार)'
    },
    {
      labelEn: 'THREEFOLD TAXONOMY',
      labelHi: 'त्रिविध वर्गीकरण',
      valueEn: 'Sāttvika (16) · Rājasika (11) · Tāmasika',
      valueHi: 'सात्विक (१६ प्रकार) · राजसिक (११ प्रकार) · तामसिक'
    },
    {
      labelEn: 'CANONICAL ROSTER',
      labelHi: 'संपूर्ण बेताल प्रकार',
      valueEn: '52 Types of Betāla (1. Vīra Betāla to 52. Pañcatattva Betāla)',
      valueHi: 'बेताल के ५२ प्रकार (१. वीर बेताल से ५२. पंचतत्त्व बेताल)'
    }
  ],
  primarySourcesEn: 'Vetāla Pañcaviṃśati (Kathāsaritsāgara of Somadeva), Bhūtaḍāmara Tantra, Uddāmeśvara Tantra & Regional Vetāla-Kalpa Traditions.',
  primarySourcesHi: 'वेतालपञ्चविंशति (बेताल पच्चीसी / कथासरित्सागर), भूतडामर तंत्र, उद्दामेश्वर तंत्र एवं क्षेत्रीय बेताल-साधना परम्परा।',
  authorEn: 'Ram Ashok Kumar',
  authorHi: 'राम अशोक कुमार'
};
