import { ResearchArticle } from './researchPortalData';
import { ResearchComparisonTable } from './sacredSealsDeepData';

export interface VishnuDashavataraEntry {
  index: number; // 0 = Supreme Lord Mahāviṣṇu (Śeṣaśāyī), 1..10 = The 10 Avatāras
  id: string;
  slug: string;
  code: string;
  nameHi: string;
  nameEn: string;
  shortNameHi: string;
  shortNameEn: string;
  sanskritTitle: string;
  yugaGroup: 'mula' | 'satya' | 'treta' | 'dvapara' | 'kali';
  yugaHi: string;
  yugaEn: string;
  evolutionaryStageHi: string;
  evolutionaryStageEn: string;
  consortOrCompanionHi: string;
  consortOrCompanionEn: string;
  weaponsAndSymbolsHi: string;
  weaponsAndSymbolsEn: string;
  vanquishedAdharmaHi: string;
  vanquishedAdharmaEn: string;
  sacredLocusHi: string;
  sacredLocusEn: string;
  mulaMantraHi: string;
  mulaMantraEn: string;
  jayadevaSlokaHi: string;
  jayadevaSlokaEn: string;
  iconographyHi: string;
  iconographyEn: string;
  theologyAndPurposeHi: string;
  theologyAndPurposeEn: string;
  imagePath: string;
  accentColor: string;
}

export const VISHNU_MULA_IMAGE = '/assets/aistudio/image_2448eeae.png';

// ============================================================================
// COMPLETE SEQUENCE: SUPREME LORD VIṢṆU (00) + THE 10 AVATĀRAS (01 TO 10)
// Note: 8th Avatar is Śrī Kṛṣṇa (/assets/aistudio/image_f48ae36c.png),
//       9th Avatar is Gautama Buddha (/assets/aistudio/image_8c8778b6.png),
//       10th Avatar is Kalki (/assets/aistudio/image_2027dc95.png).
// ============================================================================
export const VISHNU_DASHAVATARA_ENTRIES: VishnuDashavataraEntry[] = [
  {
    index: 0,
    id: 'vishnu-mula-seshasayi',
    slug: 'vishnu-seshasayi-narayana-core',
    code: 'VSN-00 · MŪLA SVARŪPA',
    nameHi: 'भगवान् श्री महाविष्णु (क्षीरसागर शेषशायी नारायण एवं महालक्ष्मी)',
    nameEn: 'Bhagavān Śrī Mahāviṣṇu (Śeṣaśāyī Nārāyaṇa with Mahālakṣmī)',
    shortNameHi: 'श्री महाविष्णु',
    shortNameEn: 'Śrī Mahāviṣṇu',
    sanskritTitle: '॥ ॐ नमो भगवते वासुदेवाय · श्री महाविष्णुः ॥',
    yugaGroup: 'mula',
    yugaHi: 'नित्य वैकुण्ठ एवं क्षीरसागर (चतुर्युग के मूल अधिष्ठाता)',
    yugaEn: 'Eternal Vaikuṇṭha & Kṣīrasāgara (Transcendent Source of All Four Yugas)',
    evolutionaryStageHi: 'परात्पर पूर्ण ब्रह्म · दशावतार के अनंत उद्गम स्रोत (अवतारी)',
    evolutionaryStageEn: 'Supreme All-Pervading Consciousness · Eternal Source of the Ten Avatāras (Avatārī)',
    consortOrCompanionHi: 'भगवती श्री महालक्ष्मी (चरण-कमल सेविका) एवं सप्तमुखी अनंत शेषनाग',
    consortOrCompanionEn: 'Goddess Śrī Mahālakṣmī & Seven-Hooded Cosmic Serpent Ananta Śeṣanāga',
    weaponsAndSymbolsHi: 'पाञ्चजन्य शंख, सुदर्शन चक्र, कौमोदकी गदा, पद्म, अभय मुद्रा एवं शेष-शय्या',
    weaponsAndSymbolsEn: 'Pāñcajanya Conch, Sudarśana Discus, Kaumodakī Mace, Lotus, Abhaya Mudrā & Coiled Ananta Śeṣa',
    vanquishedAdharmaHi: 'अज्ञान, अधर्म, विश्व-असंतुलन एवं प्रलय-संकट का निवारण',
    vanquishedAdharmaEn: 'Dissolves Cosmic Disorder (Adharma), Ignorance, and Existential Imbalance Across Kalpas',
    sacredLocusHi: 'क्षीरसागर (श्वेतद्वीप) एवं परमपद वैकुण्ठ लोक',
    sacredLocusEn: 'Kṣīrasāgara (Cosmic Ocean of Milk) & Supreme Abode of Vaikuṇṭha',
    mulaMantraHi: 'ॐ नमो नारायणाय ॥ ॐ नमो भगवते वासुदेवाय ॥',
    mulaMantraEn: 'Oṃ Namo Nārāyaṇāya · Oṃ Namo Bhagavate Vāsudevāya',
    jayadevaSlokaHi:
      'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् । लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥',
    jayadevaSlokaEn:
      '"I bow to Lord Viṣṇu, the One Master of all worlds, of serene form, reclining upon the cosmic serpent Śeṣa, lotus-naveled, Lord of the celestials, foundation of the universe, vast as the sky, cloud-hued, beloved of Lakṣmī, lotus-eyed, and attainable by yogīs in deep meditation."',
    iconographyHi:
      'सप्तमुखी अनंत शेषनाग की कुण्डलित शय्या पर क्षीरसागर में शांत भाव से विराजमान चतुर्भुज नीलमेघ-श्याम भगवान् श्री विष्णु; ऊपरी हाथों में दिव्य शंख एवं पाञ्चजन्य प्रतीक, निचले दाएँ हाथ में अभय मुद्रा तथा चरण-कमलों के समीप पद्म धारण किए माता महालक्ष्मी आसीन हैं।',
    iconographyEn:
      'Four-armed, cloud-complexioned Lord Mahāviṣṇu reclining serenely upon the coiled body of the seven-hooded cosmic serpent Ananta Śeṣa amid celestial clouds and the Ocean of Milk, raising his right hand in abhaya mudrā while Goddess Mahālakṣmī sits beside his feet holding a blooming lotus.',
    theologyAndPurposeHi:
      'वैदिक और पांचरात्र आगम परम्परा में "विष्णु" धातु (विष् = व्याप्त होना) का अर्थ है—जो चराचर ब्रह्माण्ड के प्रत्येक कण में व्याप्त हैं। जब-जब धर्म की हानि और अधर्म की वृद्धि होती है ("यदा यदा हि धर्मस्य ग्लानिर्भवति भारत"), तब-तब यही क्षीरसागरशायी नारायण सृष्टि के संरक्षण और जीव-चेतना के क्रमिक विकास हेतु दस प्रमुख अवतारों (दशावतार) के रूप में प्रकट होते हैं।',
    theologyAndPurposeEn:
      'Derived from the verbal root viṣ ("to pervade, to enter everywhere"), Viṣṇu is the all-pervading sustainer of cosmic order (Ṛta and Dharma). As the Avatārī (source of incarnations), He projects His ten primary descents (Daśāvatāra) across the Four Yugas to safeguard creation, restore Dharma, and guide the evolution of consciousness.',
    imagePath: '/assets/aistudio/image_2448eeae.png',
    accentColor: '#38BDF8'
  },
  {
    index: 1,
    id: 'avatar-01-matsya',
    slug: 'avatar-01-matsya-fish-incarnation',
    code: 'AVT-01 · SATYA YUGA',
    nameHi: '१. मत्स्य अवतार (Matsya Avatāra)',
    nameEn: '1. Matsya Avatāra (The Cosmic Fish)',
    shortNameHi: '१. मत्स्य',
    shortNameEn: '01. Matsya',
    sanskritTitle: '॥ प्रलयपयोधिजले धृतवानसि वेदम् · श्री मत्स्यमूर्तिः ॥',
    yugaGroup: 'satya',
    yugaHi: 'सत्ययुग (कृतयुग) · प्रथम अवतार',
    yugaEn: 'Satya Yuga (Kṛta Yuga) · 1st Incarnation',
    evolutionaryStageHi: 'जलीय जीवन का उद्गम (Aquatic Life in Primordial Waters)',
    evolutionaryStageEn: 'Dawn of Aquatic Life in the Primordial Ocean',
    consortOrCompanionHi: 'सप्तर्षि, वैवस्वत मनु एवं चारों वेदों की रक्षा',
    consortOrCompanionEn: 'Vaivasvata Manu, the Seven Sages (Saptarṣis) & the Four Vedas',
    weaponsAndSymbolsHi: 'चक्र-दण्ड, त्रिशूल-शिखा, अभय-वरद मुद्रा, शंख एवं महामत्स्य पुच्छ',
    weaponsAndSymbolsEn: 'Mace-Staff, Trident-Crest, Abhaya & Varada Mudrās, Conch & Scaled Fish Lower Body',
    vanquishedAdharmaHi: 'हयग्रीव दैत्य (वेद-हर्ता असुर) का वध एवं महाप्रलय से सृष्टि-बीज की रक्षा',
    vanquishedAdharmaEn: 'Slaying of the Demon Hayagrīva (Stealer of the Vedas) & Preservation of Life Through the Great Deluge',
    sacredLocusHi: 'प्रलय-पयोधि (प्रारंभिक महासागर) एवं कृतमाला नदी',
    sacredLocusEn: 'Kṛtamālā River & The Waters of the Cosmic Deluge (Pralaya-Payodhi)',
    mulaMantraHi: 'ॐ नमो भगवते महामत्स्याय ह्रीं नमः ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Mahāmatsyāya Hrīṃ Namaḥ',
    jayadevaSlokaHi:
      'प्रलयपयोधिजले धृतवानसि वेदं विहितवहित्रचरित्रमखेदम् । केशव धृतमीनशरीर जय जगदीश हरे ॥१॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Cosmic Fish! In the waters of the universal deluge You effortlessly upheld the Vedas and guided the sacred ark—Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.1)',
    iconographyHi:
      'उमड़ती हुई प्रलय-लहरों के मध्य से प्रकट अर्ध-मानव एवं अर्ध-मत्स्य दिव्य विग्रह; ऊपरी भाग में मुकुटधारी चतुर्भुज भगवान् विष्णु जो गदा-चक्र, त्रिशूल-आयुध तथा अभय और वरद मुद्रा धारण किए हैं, तथा निचला भाग विशाल शल्क-युक्त मत्स्य का है।',
    iconographyEn:
      'Hybrid divine form (Matsya-mūrti) rising from the surging waves of the cosmic deluge: the crowned four-armed upper torso of Lord Viṣṇu holding sacred weapons and displaying abhaya and varada mudrās, seamlessly joined to the scaled lower body and head of the giant cosmic fish.',
    theologyAndPurposeHi:
      'दशावतार के प्रथम सोपान के रूप में मत्स्य अवतार जल तत्त्व में जीवन के प्रथम उदय और प्रलय के मध्य ज्ञान (वेद) की अविनाशी रक्षा का प्रतीक है। भगवान् मत्स्य ने राजा सत्यव्रत (वैवस्वत मनु) की नौका को वासुकि नाग की रस्सी से अपने सींग पर बाँधकर सप्तर्षियों और औषधि-बीजों को बचाया तथा हयग्रीव असुर से चारों वेदों का उद्धार किया।',
    theologyAndPurposeEn:
      'As the inaugural descent of the Daśāvatāra, Matsya represents the origin of life in the primordial waters and the rescue of sacred knowledge (Veda) from the abyss of dissolution. Towing Vaivasvata Manu’s ark through the cosmic flood and recovering the Vedas from the demon Hayagrīva, Matsya ensures continuity from one Kalpa to the next.',
    imagePath: '/assets/aistudio/image_4d3208dc.png',
    accentColor: '#0EA5E9'
  },
  {
    index: 2,
    id: 'avatar-02-kurma',
    slug: 'avatar-02-kurma-tortoise-incarnation',
    code: 'AVT-02 · SATYA YUGA',
    nameHi: '२. कूर्म अवतार (Kūrma Avatāra)',
    nameEn: '2. Kūrma Avatāra (The Cosmic Tortoise)',
    shortNameHi: '२. कूर्म',
    shortNameEn: '02. Kūrma',
    sanskritTitle: '॥ क्षितिरतिविपुलतरे तव तिष्ठति पृष्ठे · श्री कूर्ममूर्तिः ॥',
    yugaGroup: 'satya',
    yugaHi: 'सत्ययुग (कृतयुग) · द्वितीय अवतार',
    yugaEn: 'Satya Yuga (Kṛta Yuga) · 2nd Incarnation',
    evolutionaryStageHi: 'उभयचर अवस्था (Amphibious Life — Water & Land Stability)',
    evolutionaryStageEn: 'Amphibious Transition — Bridging Ocean and Solid Foundation',
    consortOrCompanionHi: 'देव-दानव समुद्र-मंथन, मन्दराचल पर्वत एवं वासुकि नाग',
    consortOrCompanionEn: 'Devas & Asuras in Samudra Manthana, Mount Mandara & Serpent Vāsuki',
    weaponsAndSymbolsHi: 'गदा, पद्म-कलिका, अभय मुद्रा, अमृत-पात्र एवं वज्र-समान कूर्म-पृष्ठ (कवच)',
    weaponsAndSymbolsEn: 'Mace, Lotus Bud, Abhaya Mudrā, Nectar Plate & Adamantine Tortoise Carapace',
    vanquishedAdharmaHi: 'समुद्र-मंथन में डूबते मन्दराचल पर्वत को अपनी पीठ पर धारण कर अमृत-प्राप्ति कराना',
    vanquishedAdharmaEn: 'Upheld the Sinking Mount Mandara on His Carapace During the Churning of the Ocean of Milk',
    sacredLocusHi: 'क्षीरसागर (समुद्र-मंथन की केंद्रीय धुरी)',
    sacredLocusEn: 'Kṣīrasāgara — The Central Axis of Samudra Manthana',
    mulaMantraHi: 'ॐ नमो भगवते अकूपाराय कूर्मात्मने नमः ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Akūpārāya Kūrmātmane Namaḥ',
    jayadevaSlokaHi:
      'क्षितिरतिविपुलतरे तव तिष्ठति पृष्ठे धरणिधरणकिणचक्रगरिष्ठे । केशव धृतकच्छपरूप जय जगदीश हरे ॥२॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Cosmic Tortoise! Upon Your vast carapace—marked with the circular callous of bearing the great mountain—rests the entire cosmos. Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.2)',
    iconographyHi:
      'विशाल ज्यामितीय षट्कोणीय कवच वाले महाकूर्म (कछुए) के ऊपर प्रतिष्ठित चतुर्भुज भगवान् विष्णु; ऊपरी हाथों में गदा एवं पद्म-शिखा, निचले दाएँ हाथ में अभय मुद्रा और बाएँ हाथ में अमृत-पात्र।',
    iconographyEn:
      'Four-armed crowned Lord Viṣṇu emerging above the massive, geometrically patterned hexagonal carapace of the Cosmic Tortoise (Kūrma), raising his front right hand in abhaya mudrā and holding a sacred offering vessel in his front left hand.',
    theologyAndPurposeHi:
      'जब देवताओं और असुरों ने अमृत प्राप्ति हेतु मन्दराचल पर्वत को मथनी और वासुकि नाग को रस्सी बनाकर क्षीरसागर का मंथन प्रारंभ किया, तब आधार न होने से पर्वत समुद्र में धँसने लगा। भगवान् विष्णु ने विशाल कूर्म (कछुए) का रूप धरकर मन्दराचल को अपनी पीठ पर स्थिर किया। योग-दर्शन में "कूर्मनाड़ी" और प्रत्याहार (इन्द्रियों को कछुए की भाँति अंतर्मुख करना) का भी यही रहस्य है।',
    theologyAndPurposeEn:
      'During the Churning of the Ocean of Milk (Samudra Manthana), when Mount Mandara began sinking into the abyss without a foundation, Lord Viṣṇu incarnated as the colossal tortoise Kūrma to support the mountain’s spinning axis on His back. Esoterically, Kūrma symbolizes yogic pratyāhāra (sense withdrawal) and the unshakable foundation of meditative stillness.',
    imagePath: '/assets/aistudio/image_711cf07d.png',
    accentColor: '#14B8A6'
  },
  {
    index: 3,
    id: 'avatar-03-varaha',
    slug: 'avatar-03-varaha-boar-incarnation',
    code: 'AVT-03 · SATYA YUGA',
    nameHi: '३. वराह अवतार (Varāha Avatāra)',
    nameEn: '3. Varāha Avatāra (The Cosmic Boar)',
    shortNameHi: '३. वराह',
    shortNameEn: '03. Varāha',
    sanskritTitle: '॥ वसति दशनशिखरे धरणी तव लग्ना · श्री वराहमूर्तिः ॥',
    yugaGroup: 'satya',
    yugaHi: 'सत्ययुग (कृतयुग · श्वेतवराह कल्प) · तृतीय अवतार',
    yugaEn: 'Satya Yuga (Śveta-Varāha Kalpa) · 3rd Incarnation',
    evolutionaryStageHi: 'स्थलीय स्तनधारी जीव (Terrestrial Mammalian Life)',
    evolutionaryStageEn: 'Emergence of Terrestrial Mammalian Life',
    consortOrCompanionHi: 'भूदेवी (पृथ्वी माता — दंष्ट्रा-शिखर पर विराजमान)',
    consortOrCompanionEn: 'Bhūdevī (Mother Earth — Uplifted on His Tusk)',
    weaponsAndSymbolsHi: 'तीक्ष्ण दंष्ट्रा (दाढ़) पर स्थित पृथ्वी गोलक, गदा/त्रिशूल, चक्र एवं वरद मुद्रा',
    weaponsAndSymbolsEn: 'Earth Globe Balanced on His Tusk, Spear-Mace, Sudarśana Discus & Varada Mudrā',
    vanquishedAdharmaHi: 'हिरण्याक्ष दैत्य का संहार एवं रसातल/गर्भोदक सागर से पृथ्वी का उद्धार',
    vanquishedAdharmaEn: 'Slaying of the Demon Hiraṇyākṣa & Uplifting the Submerged Earth from the Cosmic Abyss',
    sacredLocusHi: 'गर्भोदक महासागर एवं श्रीमुष्णम् / तिरुमला (आदि वराह क्षेत्र)',
    sacredLocusEn: 'Garbhodaka Ocean & Sacred Ādi-Varāha Kṣetras (Tirumala, Srimushnam, Eran)',
    mulaMantraHi: 'ॐ नमो भगवते वराहरूपाय भूर्भुवः स्वः पतये भूपतित्वं देहि दापय स्वाहा ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Varāharūpāya Bhūr Bhuvaḥ Svaḥ Pataye Namaḥ',
    jayadevaSlokaHi:
      'वसति दशनशिखरे धरणी तव लग्ना शशिनि कलङ्ककलेव निमग्ना । केशव धृतसूकररूप जय जगदीश हरे ॥३॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Cosmic Boar! The Earth rests securely upon the tip of Your tusk like the dark emblem upon the Moon’s crescent. Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.3)',
    iconographyHi:
      'प्रलय-सागर की उत्ताल तरंगों से ऊपर उठते हुए चतुर्भुज यज्ञ-वराह भगवान्; मुख और तीक्ष्ण दंष्ट्रा (दाढ़) के समीप संपूर्ण पृथ्वी-मण्डल (भूगोल) सुरक्षित टिका हुआ है तथा हाथों में दिव्य आयुध सुशोभित हैं।',
    iconographyEn:
      'Four-armed boar-headed Lord Varāha standing triumphant above the churning cosmic waves, effortlessly balancing the spherical globe of Mother Earth (Bhūloka) beside his curved tusk while wielding his sacred weapons in his upper hands.',
    theologyAndPurposeHi:
      'हिरण्याक्ष नामक दैत्य ने जब पृथ्वी को चुराकर रसातल के महासागर में डुबो दिया, तब ब्रह्माजी की नासिका से अंगुष्ठ-मात्र रूप में प्रकट होकर भगवान् यज्ञ-वराह क्षणभर में पर्वताकार हो गए। उन्होंने जल में प्रवेश कर हिरण्याक्ष का वध किया और अपनी दाढ़ (दंष्ट्रा) की नोक पर पृथ्वी को उठाकर पुनः उसकी कक्षा में स्थापित किया। वर्तमान कल्प को इसी कारण "श्वेतवराह कल्प" कहा जाता है।',
    theologyAndPurposeEn:
      'When the demon Hiraṇyākṣa dragged the Earth into the cosmic abyss, Lord Viṣṇu assumed the form of Yajña-Varāha (the Sacrificial Boar whose body is constituted of the Vedic hymns and rites), plunged into the depths, vanquished Hiraṇyākṣa, and lifted the Earth globe on His tusk. Our present cosmic aeon is named the Śveta-Varāha Kalpa in commemoration of this rescue.',
    imagePath: '/assets/aistudio/image_bec383ea.png',
    accentColor: '#10B981'
  },
  {
    index: 4,
    id: 'avatar-04-narasimha',
    slug: 'avatar-04-narasimha-man-lion-incarnation',
    code: 'AVT-04 · SATYA YUGA',
    nameHi: '४. नरसिंह अवतार (Narasiṃha Avatāra)',
    nameEn: '4. Narasiṃha Avatāra (The Fierce Man-Lion)',
    shortNameHi: '४. नरसिंह',
    shortNameEn: '04. Narasiṃha',
    sanskritTitle: '॥ तव करकमलवरे नखमद्भुतशृङ्गम् · श्री नृसिंहमूर्तिः ॥',
    yugaGroup: 'satya',
    yugaHi: 'सत्ययुग (कृतयुग) · चतुर्थ अवतार',
    yugaEn: 'Satya Yuga (Kṛta Yuga) · 4th Incarnation',
    evolutionaryStageHi: 'अर्ध-पशु एवं अर्ध-मानव संधि (Bridge Between Animal Instinct & Human Consciousness)',
    evolutionaryStageEn: 'Liminal Bridge Between Animal Ferocity and Human Consciousness',
    consortOrCompanionHi: 'भक्तराज प्रह्लाद एवं लक्ष्मी-नृसिंह',
    consortOrCompanionEn: 'Bhakta Prahlāda & Goddess Lakṣmī',
    weaponsAndSymbolsHi: 'वज्र-समान तीक्ष्ण नख (नाखून), चक्र, पाश/अंकुश एवं स्तम्भ-विदीर्णन',
    weaponsAndSymbolsEn: 'Adamantine Lion Claws (Nakha), Discus, Fiery Mane & Shattered Palace Pillar',
    vanquishedAdharmaHi: 'संध्या काल में देहली पर अपनी जंघा पर रखकर नखों से हिरण्यकशिपु का वध',
    vanquishedAdharmaEn: 'Slaying of the Tyrant Hiraṇyakaśipu on His Lap at Twilight with His Claws',
    sacredLocusHi: 'अहोबिलम (नव-नृसिंह क्षेत्र), सिंहाचलम एवं मुल्तान प्रह्लादपुरी',
    sacredLocusEn: 'Ahobilam (Nava-Narasiṃha Kṣetra), Simhachalam & Hiraṇyakaśipu’s Pillar Threshold',
    mulaMantraHi: 'उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम् । नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम् ॥',
    mulaMantraEn: 'Ugraṃ Vīraṃ Mahāviṣṇuṃ Jvalantaṃ Sarvatomukham · Nṛsiṃhaṃ Bhīṣaṇaṃ Bhadraṃ Mṛtyumṛtyuṃ Namāmyaham',
    jayadevaSlokaHi:
      'तव करकमलवरे नखमद्भुतशृङ्गं दलितहिरण्यकशिपुतनुभृङ्गम् । केशव धृतनरहरिरूप जय जगदीश हरे ॥४॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Man-Lion (Narahari)! The wondrous, horn-like claws of Your lotus hands tore apart the wasp-like body of Hiraṇyakaśipu. Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.4)',
    iconographyHi:
      'सिंहासन पर आसीन उग्र सिंह-मुख और अयाल (केसर) वाले चतुर्भुज भगवान् नृसिंह; उनकी जंघा पर हिरण्यकशिपु पड़ा हुआ है और भगवान् अपने वज्र-तुल्य नखों से उसका संहार कर भक्त प्रह्लाद के वचनों को सत्य सिद्ध कर रहे हैं।',
    iconographyEn:
      'Fierce lion-headed, four-armed Lord Narasiṃha enthroned with roaring jaws and flowing mane, holding the tyrant Hiraṇyakaśipu across His lap at the twilight threshold and rending him with His claws without using any forged weapon.',
    theologyAndPurposeHi:
      'हिरण्यकशिपु ने ब्रह्माजी से वरदान पाया था कि वह न दिन में मरे न रात में, न घर के भीतर न बाहर, न भूमि पर न आकाश में, न मनुष्य से न पशु से, और न किसी अस्त्र-शस्त्र से। अपने अनन्य भक्त प्रह्लाद की रक्षा और सर्वव्यापकता को सिद्ध करने के लिए भगवान् विष्णु खम्भे (स्तम्भ) को फाड़कर नृसिंह (अर्ध-नर, अर्ध-सिंह) रूप में प्रकट हुए और गोधूलि बेला में देहली पर अपनी जंघा पर रखकर नखों से उसका वध किया।',
    theologyAndPurposeEn:
      'To honor the boon of Hiraṇyakaśipu—who could be killed neither by man nor beast, neither indoors nor outdoors, neither by day nor by night, neither on earth nor in sky, nor by any weapon—Lord Viṣṇu burst forth from a stone pillar as Narasiṃha (neither man nor beast) at twilight (neither day nor night) on the courtyard threshold, slaying the tyrant on His lap with His bare claws to protect His devotee Prahlāda.',
    imagePath: '/assets/aistudio/image_878d1498.png',
    accentColor: '#F59E0B'
  },
  {
    index: 5,
    id: 'avatar-05-vamana',
    slug: 'avatar-05-vamana-trivikrama-incarnation',
    code: 'AVT-05 · TRETĀ YUGA',
    nameHi: '५. वामन / त्रिविक्रम अवतार (Vāmana Avatāra)',
    nameEn: '5. Vāmana / Trivikrama Avatāra (The Dwarf Sage & Three-Stride Sovereign)',
    shortNameHi: '५. वामन',
    shortNameEn: '05. Vāmana',
    sanskritTitle: '॥ छलयसि विक्रमेण बलिमद्भुतवामन · श्री त्रिविक्रममूर्तिः ॥',
    yugaGroup: 'treta',
    yugaHi: 'त्रेतायुग का प्रथम अवतार · पंचम अवतार',
    yugaEn: 'Tretā Yuga · 5th Incarnation (First Complete Human Form)',
    evolutionaryStageHi: 'प्रथम पूर्ण मानव रूप (बौद्धिक ब्रह्मचारी वामन से विराट् त्रिविक्रम विस्तार)',
    evolutionaryStageEn: 'First Complete Human Form — Humility Expanding into Cosmic Infinity',
    consortOrCompanionHi: 'अदिति-कश्यप पुत्र एवं दैत्यराज महाबली (तीन पग भूमि दान)',
    consortOrCompanionEn: 'Son of Aditi & Kaśyapa · Emperor Mahābali (Donor of Three Paces)',
    weaponsAndSymbolsHi: 'ब्रह्मचारी छत्र (छाता), यज्ञोपवीत, शिखा, पृथ्वी-मण्डल पर प्रथम पग एवं महाबली के समक्ष द्वितीय पग',
    weaponsAndSymbolsEn: 'Brahmacārin Parasol (Chatra), Sacred Thread (Yajñopavīta), Earth Globe Underfoot & Bowing King Bali',
    vanquishedAdharmaHi: 'दैत्यराज बलि के अहंकार का शोधन एवं तीन पगों में त्रिलोक (पृथ्वी, आकाश व बलि का मस्तक) नापना',
    vanquishedAdharmaEn: 'Measured the Three Worlds in Three Strides, Purifying Emperor Bali’s Pride and Granting Him Sutala Loka',
    sacredLocusHi: 'नर्मदा तट (भृगुकच्छ यज्ञशाला), कांचीपुरम (उलगळन्द पेरुमाल) एवं सुतल लोक',
    sacredLocusEn: 'Bhrigukaccha Sacrificial Arena on the Narmadā, Kanchipuram & Sutala Loka',
    mulaMantraHi: 'ॐ नमो भगवते वामनाय त्रिविक्रमाय नमः ॥ इदं विष्णुर्विचक्रमे त्रेधा निदधे पदम् ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Vāmanāya Trivikramāya Namaḥ · Idaṃ Viṣṇur Vicakrame Tredhā Nidadhe Padam',
    jayadevaSlokaHi:
      'छलयसि विक्रमेण बलिमद्भुतवामन पदनखनीरजनितजनपावन । केशव धृतवामनरूप जय जगदीश हरे ॥५॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Wondrous Dwarf (Vāmana)! By Your cosmic stride You humbled Bali, while the waters (Gaṅgā) born from the nails of Your uplifted foot sanctify all beings. Victory to You, O Hari!" (Gītagovinda 1.5)',
    iconographyHi:
      'दाएँ हाथ में ब्रह्मचारी छत्र (छाता) धारण किए, मस्तक पर वैष्णव तिलक और शिखा से युक्त भगवान् वामन/त्रिविक्रम; उनका दायाँ चरण संपूर्ण पृथ्वी-गोलक पर स्थित है और बायाँ चरण हाथ जोड़े झुके हुए राजा महाबली के समक्ष उठ रहा है।',
    iconographyEn:
      'Young Vedic brahmacārin Vāmana holding a traditional parasol (chatra) in his right hand, with his right foot planted firmly atop the terrestrial globe of Earth and his left leg raised before the kneeling,folded-handed Emperor Mahābali.',
    theologyAndPurposeHi:
      'अदिति और महर्षि कश्यप के पुत्र रूप में प्रकट भगवान् वामन दशावतार में प्रथम पूर्ण मानव स्वरूप हैं। दैत्यराज बलि की यज्ञशाला में पहुँचकर उन्होंने केवल तीन पग भूमि की याचना की। संकल्प होते ही वामन भगवान् ने विराट् "त्रिविक्रम" रूप धारण कर पहले पग में संपूर्ण पृथ्वी, दूसरे पग में स्वर्ग-अंतरिक्ष नाप लिया, और तीसरे पग के लिए जब बलि ने अपना मस्तक समर्पित किया, तो भगवान् ने उन्हें सुतल लोक का राज्य और स्वयं उनका द्वारपाल बनना स्वीकार किया।',
    theologyAndPurposeEn:
      'Born to Aditi and Kaśyapa, Vāmana is the first fully human form in the Daśāvatāra sequence, demonstrating that spiritual intelligence and humility surpass brute force. Requesting merely three paces of land from Emperor Mahābali, Vāmana expanded into the cosmic giant Trivikrama—measuring Earth with His first step, the heavens with His second, and placing His third step in grace upon Bali’s surrendered head.',
    imagePath: '/assets/aistudio/image_40f12a22.png',
    accentColor: '#EAB308'
  },
  {
    index: 6,
    id: 'avatar-06-parashurama',
    slug: 'avatar-06-parashurama-warrior-sage-incarnation',
    code: 'AVT-06 · TRETĀ YUGA',
    nameHi: '६. परशुराम अवतार (Paraśurāma Avatāra)',
    nameEn: '6. Paraśurāma Avatāra (The Axe-Wielding Warrior-Sage)',
    shortNameHi: '६. परशुराम',
    shortNameEn: '06. Paraśurāma',
    sanskritTitle: '॥ क्षत्रियरुधिरमये जगदपगतपापम् · श्री परशुराममूर्तिः ॥',
    yugaGroup: 'treta',
    yugaHi: 'त्रेतायुग · षष्ठ अवतार (अष्ट-चिरंजीवी)',
    yugaEn: 'Tretā Yuga · 6th Incarnation (Immortal Cirañjīvī Sage-Warrior)',
    evolutionaryStageHi: 'ब्रह्मतेज एवं क्षात्रबल का समन्वय (Forest Ascetic & Martial Wielder of the Axe)',
    evolutionaryStageEn: 'Union of Ascetic Brahmatejas and Martial Kṣātrabala (Mastery of Tools & Weapons)',
    consortOrCompanionHi: 'महर्षि जमदग्नि एवं माता रेणुका के पुत्र · भगवान् शिव के परम शिष्य',
    consortOrCompanionEn: 'Son of Sage Jamadagni & Mātā Reṇukā · Disciple of Lord Śiva',
    weaponsAndSymbolsHi: 'भगवान् शिव द्वारा प्रदत्त दिव्य परशु (फरसा), शार्ङ्ग/शिव-धनुष, तूणीर (तरकश), जटाजूट एवं रुद्राक्ष',
    weaponsAndSymbolsEn: 'Śiva’s Battle-Axe (Paraśu), Quiver of Arrows, Long Bow, Ascetic Topknot (Jaṭāmukuṭa) & Rudrākṣa Beads',
    vanquishedAdharmaHi: 'सहस्रबाहु कार्तवीर्य अर्जुन एवं निरंकुश आततायी शासकों के अन्याय का दमन',
    vanquishedAdharmaEn: 'Subjugation of Kārtavīrya Arjuna and Corrupt, Tyrannical Rulers Who Violated Dharma',
    sacredLocusHi: 'महेन्द्रगिरि पर्वत (तपस्या स्थल) एवं परशुराम क्षेत्र (कोंकण-केरल तट)',
    sacredLocusEn: 'Mount Mahendragiri (Ascetic Hermitage) & Paraśurāma Kṣetra Along the Western Coast',
    mulaMantraHi: 'ॐ जामदग्न्याय विद्महे महावीराय धीमहि तन्नो रामः प्रचोदयात् ॥',
    mulaMantraEn: 'Oṃ Jāmadagnyāya Vidmahe Mahāvīrāya Dhīmahi Tanno Rāmaḥ Pracodayāt',
    jayadevaSlokaHi:
      'क्षत्रियरुधिरमये जगदपगतपापं स्नपयसि पयसि शमितभवतापम् । केशव धृतभृगुपतिरूप जय जगदीश हरे ॥६॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Lord of the Bhṛgus (Paraśurāma)! Cleansing the world of tyranny and relieving the fever of existence, Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.6)',
    iconographyHi:
      'जटाजूट, श्मश्रु (दाढ़ी), रुद्राक्ष माला और ललाट पर त्रिपुण्ड्र-तिलक धारण किए तेजस्वी ब्रह्मर्षि-योद्धा भगवान् परशुराम; दाएँ हाथ में विशाल द्विमुखी परशु (फरसा) और पीठ पर धनुष व बाणों का तरकश सुशोभित है।',
    iconographyEn:
      'Fierce ascetic warrior-sage Paraśurāma standing in resolute majesty with matted hair (jaṭā), full beard, rudrākṣa malas, quiver of arrows, and bow slung across his chest, gripping his towering double-bladed battle-axe (paraśu) in his right hand.',
    theologyAndPurposeHi:
      'महर्षि जमदग्नि और माता रेणुका के पुत्र भार्गव परशुराम आवेशावतार एवं अष्ट-चिरंजीवियों में से एक हैं। जब सत्ता के मद में चूर सहस्रबाहु अर्जुन ने आश्रम की कामधेनु का अपहरण और महर्षि जमदग्नि की हत्या की, तब परशुरामजी ने भगवान् शिव से प्राप्त अमोघ परशु से अन्यायी और निरंकुश शासकों का संहार कर पृथ्वी को कश्यप ऋषि को दान कर दिया और स्वयं महेन्द्रगिरि पर्वत पर तपस्यारत हो गए।',
    theologyAndPurposeEn:
      'Born in the Bhṛgu lineage to Sage Jamadagni and Reṇukā, Paraśurāma embodies the synthesis of contemplative wisdom (Brahmatejas) and unstoppable martial power (Kṣātrabala). When tyrannical rulers abused their military might and murdered his ascetic father, Paraśurāma wielded the divine axe (paraśu) bestowed by Śiva to restore accountability to royal power before retiring to Mount Mahendragiri as an immortal Cirañjīvī.',
    imagePath: '/assets/aistudio/image_234f01a4.png',
    accentColor: '#D97706'
  },
  {
    index: 7,
    id: 'avatar-07-rama',
    slug: 'avatar-07-shri-rama-incarnation',
    code: 'AVT-07 · TRETĀ YUGA',
    nameHi: '७. श्री राम अवतार (Śrī Rāma Avatāra)',
    nameEn: '7. Śrī Rāma Avatāra (Maryādā Puruṣottama)',
    shortNameHi: '७. श्री राम',
    shortNameEn: '07. Śrī Rāma',
    sanskritTitle: '॥ वितरसि दिक्षु रणे दिक्पतिकमनीयम् · श्री रामचन्द्रमूर्तिः ॥',
    yugaGroup: 'treta',
    yugaHi: 'त्रेतायुग · सप्तम अवतार (सूर्यवंशी मर्यादा पुरुषोत्तम)',
    yugaEn: 'Tretā Yuga · 7th Incarnation (Ideal Sovereign of Solar Dynasty)',
    evolutionaryStageHi: 'मर्यादा पुरुषोत्तम · सत्य, धर्म एवं आदर्श राज्य-व्यवस्था (रामराज्य) की प्रतिष्ठा',
    evolutionaryStageEn: 'Maryādā Puruṣottama · Perfection of Ethical Governance, Truth & Civic Dharma (Rāmarājya)',
    consortOrCompanionHi: 'भगवती जगज्जननी सीता जी (जानकी), लक्ष्मण, भरत, शत्रुघ्न एवं भक्त हनुमान्',
    consortOrCompanionEn: 'Goddess Sītā (Jānakī), Lakṣmaṇa, Bharata, Śatrughna & Bhakta Hanumān',
    weaponsAndSymbolsHi: 'कोदण्ड धनुष, अक्षय तूणीर (तरकश), किरीट-मुकुट एवं वामभाग में पद्मधारिणी माता सीता',
    weaponsAndSymbolsEn: 'Kodaṇḍa Bow, Inexhaustible Quiver of Arrows, Royal Crown & Consort Sītā Holding a Lotus',
    vanquishedAdharmaHi: 'दशानन रावण, कुम्भकर्ण एवं राक्षस-अधर्म का विनाश कर रामराज्य की स्थापना',
    vanquishedAdharmaEn: 'Vanquishing of Ten-Headed Rāvaṇa & Establishment of Ideal Dharmic Governance (Rāmarājya)',
    sacredLocusHi: 'अयोध्या पुरी (साकेत धाम), चित्रकूट, दण्डकारण्य एवं रामेश्वरम्',
    sacredLocusEn: 'Ayodhyā (Sāketa Dhāma), Citrakūṭa, Daṇḍakāraṇya & Rāmeśvaram',
    mulaMantraHi: 'ॐ श्रीं ह्रीं क्लीं रामचन्द्राय नमः ॥ श्री राम जय राम जय जय राम ॥',
    mulaMantraEn: 'Oṃ Śrīṃ Hrīṃ Klīṃ Rāmacandrāya Namaḥ · Śrī Rāma Jaya Rāma Jaya Jaya Rāma',
    jayadevaSlokaHi:
      'वितरसि दिक्षु रणे दिक्पतिकमनीयं दशमुखमौलिबलिं रमणीयम् । केशव धृतरामशरीर जय जगदीश हरे ॥७॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of Śrī Rāma! In the great battle You offered the ten heads of Rāvaṇa as a welcome oblation to the Guardians of the Ten Directions (Dikpālas). Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.7)',
    iconographyHi:
      'कंधे पर कोदण्ड धनुष और पीठ पर बाणों का तरकश धारण किए किरीट-मुकुटधारी मर्यादा पुरुषोत्तम भगवान् श्री रामचन्द्र तथा उनके वाम भाग में पद्म-कलिका और अभय-आशीर्वाद मुद्रा में सुशोभित माता जानकी (सीता जी)।',
    iconographyEn:
      'Crowned Prince Śrī Rāma standing in serene royal dignity with His tall Kodaṇḍa bow and quiver of arrows over His right shoulder, accompanied on His left by Goddess Sītā holding a lotus blossom.',
    theologyAndPurposeHi:
      '"रामो विग्रहवान् धर्मः"—महर्षि वाल्मीकि के शब्दों में भगवान् श्री राम स्वयं मूर्तिमान् धर्म हैं। १२ कलाओं से युक्त सूर्यवंशी श्री राम ने पुत्र, भ्राता, पति, मित्र और प्रजावत्सल राजा के सर्वोच्च आदर्श (मर्यादा) को अपने आचरण से स्थापित किया तथा लंकापति रावण का वध कर त्रिलोक को भयमुक्त किया।',
    theologyAndPurposeEn:
      '"Rāmo vigrahavān dharmaḥ" (Rāma is Dharma embodied in human form). Incarnating in the Solar Dynasty (Ikṣvāku-vaṃśa) at Ayodhyā, Śrī Rāma exemplifies the perfection of ethical duty, truthfulness (satya), compassionate kingship (Rāmarājya), and unwavering devotion alongside Mother Sītā.',
    imagePath: '/assets/aistudio/image_5ae5bc6f.png',
    accentColor: '#F97316'
  },
  {
    index: 8,
    id: 'avatar-08-krishna',
    slug: 'avatar-08-shri-krishna-incarnation',
    code: 'AVT-08 · DVĀPARA YUGA',
    nameHi: '८. श्री कृष्ण अवतार (Śrī Kṛṣṇa Avatāra — पूर्णावतार)',
    nameEn: '8. Śrī Kṛṣṇa Avatāra (The 16-Kalā Pūrṇāvatāra & Lord of Yoga)',
    shortNameHi: '८. श्री कृष्ण',
    shortNameEn: '08. Śrī Kṛṣṇa',
    sanskritTitle: '॥ कृष्णस्तु भगवान् स्वयम् · वंशीविभूषितकरः श्री वेणुगोपालः ॥',
    yugaGroup: 'dvapara',
    yugaHi: 'द्वापरयुग · अष्टम अवतार (१६ कला पूर्ण पूर्णावतार)',
    yugaEn: 'Dvāpara Yuga · 8th Incarnation (16-Kalā Supreme Pūrṇāvatāra)',
    evolutionaryStageHi: 'पूर्ण दिव्य चेतना, प्रेमानन्द एवं निष्काम कर्मयोग का शिखर (Full Flowering of Divine Consciousness)',
    evolutionaryStageEn: 'Full Flowering of Divine Consciousness — Love (Prema), Wisdom (Jñāna) & Niṣkāma Karma',
    consortOrCompanionHi: 'आह्लादिनी शक्ति श्री राधा रानी, रुक्मिणी, सखा अर्जुन एवं वृन्दावन के मयूर-गौवंश',
    consortOrCompanionEn: 'Śrī Rādhā, Rukmiṇī, Pāṇḍava Arjuna & the Peacocks and Cows of Vṛndāvana',
    weaponsAndSymbolsHi: 'अधर पर मुरली (वेणु), मयूर-पंख मुकुट, वैजयन्ती माला, कदम्ब वृक्ष एवं सुदर्शन चक्र',
    weaponsAndSymbolsEn: 'Divine Flute (Veṇu), Peacock-Feather Crown, Vaijayantī Garland, Kadamba Tree & Sudarśana Cakra',
    vanquishedAdharmaHi: 'कंस, शिशुपाल आदि अधर्मियों का वध एवं कुरुक्षेत्र में श्रीमद्भगवद्गीता का अमर उपदेश',
    vanquishedAdharmaEn: 'Slaying of Kaṃsa & Tyrants, Orchestration of the Mahābhārata Dharma-Yuddha & Revelation of the Bhagavad Gītā',
    sacredLocusHi: 'मथुरा (जन्मभूमि), गोकुल-वृन्दावन, द्वारका पुरी एवं कुरुक्षेत्र धर्मक्षेत्र',
    sacredLocusEn: 'Mathurā, Gokula-Vṛndāvana, Dvārakā & the Sacred Battlefield of Kurukṣetra',
    mulaMantraHi: 'ॐ क्लीं कृष्णाय गोविन्दाय गोपीजनवल्लभाय स्वाहा ॥ हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ॥',
    mulaMantraEn: 'Oṃ Klīṃ Kṛṣṇāya Govindāya Gopījanavallabhāya Svāhā · Oṃ Namo Bhagavate Vāsudevāya',
    jayadevaSlokaHi:
      'वंशीविभूषितकरान्नवनीरदाभात् पीताम्बरादरुणबिम्बफलाधरोष्ठात् । पूर्णन्दुसुन्दरमुखादरविन्दनेत्रात् कृष्णात्परं किमपि तत्त्वमहं न जाने ॥८॥',
    jayadevaSlokaEn:
      '"Beyond Śrī Kṛṣṇa—whose hands are adorned with the flute, whose luster is like a fresh rain-cloud, whose face is as radiant as the full moon, and whose eyes are like blooming lotuses—I know no higher Supreme Reality." (Kṛṣṇopaniṣad / Madhusūdana Sarasvatī)',
    iconographyHi:
      'वृन्दावन के विशाल कदम्ब वृक्ष की शाखा पर ललितासन में आसीन, मस्तक पर मयूर-पंख मुकुट और गले में वैजयन्ती माला धारण किए वेणुगोपाल भगवान् श्री कृष्ण; अधरों पर मधुर बांसुरी (वेणु) बजाते हुए जिनके चारों ओर मुग्ध मयूर (मोर) एकत्रित हैं।',
    iconographyEn:
      'Lord Śrī Kṛṣṇa (Veṇugopāla) seated gracefully upon the low bough of an ancient Kadamba tree with a peacock feather crowning His diadem, playing His divine bamboo flute (veṇu) while enchanted peacocks gather around His feet.',
    theologyAndPurposeHi:
      'श्रीमद्भागवत महापुराण (१.३.२८) के अनुसार—"एते चांशकलाः पुंसः कृष्णस्तु भगवान् स्वयम्" अर्थात् अन्य अवतार भगवान् के अंश या कला हैं, किन्तु अष्टम अवतार श्री कृष्ण स्वयं पूर्ण परब्रह्म भगवान् (१६ कलाओं से युक्त पूर्णावतार) हैं। वृन्दावन में वे वेणुनाद से प्रेमानन्द की वर्षा करते हैं और कुरुक्षेत्र के मैदान में अर्जुन के माध्यम से मानवता को "श्रीमद्भगवद्गीता" का सार्वभौमिक ज्ञान प्रदान करते हैं।',
    theologyAndPurposeEn:
      'As declared in the Bhāgavata Purāṇa (1.3.28)—"Kṛṣṇas tu Bhagavān svayam" (Kṛṣṇa is the Supreme Lord Himself in all 16 Kalās). Placed at the 8th station of the Daśāvatāra, Śrī Kṛṣṇa unites the ecstatic flute-melody of Vṛndāvana (Prema-bhakti) with the supreme philosophical synthesis of the Bhagavad Gītā (Karma, Jñāna, and Bhakti Yoga) spoken on the battlefield of Kurukṣetra.',
    imagePath: '/assets/aistudio/image_f48ae36c.png',
    accentColor: '#3B82F6'
  },
  {
    index: 9,
    id: 'avatar-09-buddha',
    slug: 'avatar-09-gautama-buddha-incarnation',
    code: 'AVT-09 · KALI YUGA',
    nameHi: '९. बुद्ध अवतार (Buddha Avatāra)',
    nameEn: '9. Gautama Buddha Avatāra (The Awakened Lord of Compassion)',
    shortNameHi: '९. बुद्ध',
    shortNameEn: '09. Buddha',
    sanskritTitle: '॥ निन्दसि यज्ञविधेरहह श्रुतिजातम् · सदयहृदय दर्शितपशुघातम् ॥',
    yugaGroup: 'kali',
    yugaHi: 'कलियुग का प्रथम चरण · नवम अवतार',
    yugaEn: 'Kali Yuga · 9th Incarnation (Awakened Sage of Karuṇā & Ahiṃsā)',
    evolutionaryStageHi: 'प्रज्ञा, करुणा, अहिंसा एवं ध्यान-बोधि (Interiorized Awakening & Universal Compassion)',
    evolutionaryStageEn: 'Interiorized Meditative Awakening, Non-Violence (Ahiṃsā) & Universal Compassion',
    consortOrCompanionHi: 'बोधि-वृक्ष, संघ एवं करुणा-मैत्री पथ',
    consortOrCompanionEn: 'The Sacred Bodhi Tree, Dharma-Cakra & Path of Universal Karuṇā',
    weaponsAndSymbolsHi: 'भूमिस्पर्श मुद्रा, ध्यान-पद्मासन, उष्णीष, ऊर्णा-तिलक एवं पुष्पित बोधि-वृक्ष',
    weaponsAndSymbolsEn: 'Bhūmisparśa Mudrā (Earth-Witness Gesture), Padmāsana, Uṣṇīṣa Crown & Flowering Bodhi Tree',
    vanquishedAdharmaHi: 'पशु-हिंसा, बाह्य आडम्बर, तृष्णा एवं अज्ञान-अंधकार का निवारण',
    vanquishedAdharmaEn: 'Overcoming of Ritual Violence, Craving (Tṛṣṇā), Suffering (Duḥkha) & Spiritual Ignorance',
    sacredLocusHi: 'बोधगया (कीकट प्रदेश · निरंजना नदी तट), लुम्बिनी एवं सारनाथ',
    sacredLocusEn: 'Bodh Gayā (Under the Bodhi Tree in Magadha/Kīkaṭa), Lumbinī & Sārnāth',
    mulaMantraHi: 'ॐ नमो भगवते बुद्धाय शुद्धाय करुणामूर्तये नमः ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Buddhāya Śuddhāya Karuṇāmūrtaye Namaḥ',
    jayadevaSlokaHi:
      'निन्दसि यज्ञविधेरहह श्रुतिजातं सदयहृदय दर्शितपशुघातम् । केशव धृतबुद्धशरीर जय जगदीश हरे ॥९॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of the Awakened Buddha! With a heart overflowing with compassion (sadaya-hṛdaya), You forbade the slaughter of animals in sacrificial rites. Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.9)',
    iconographyHi:
      'पुष्पित और सघन बोधि-वृक्ष की छाया में पद्मासन में लीन, शांत अर्ध-उन्मीलित नेत्रों वाले भगवान् बुद्ध; दायाँ हाथ पृथ्वी को साक्षी बनाने वाली "भूमिस्पर्श मुद्रा" में और बायाँ हाथ गोद में ध्यान मुद्रा में स्थित है।',
    iconographyEn:
      'Serene Lord Buddha seated in full lotus posture (padmāsana) beneath the flowering canopy of the sacred Bodhi tree, His right hand touching the Earth in the Earth-Witness gesture (bhūmisparśa mudrā) and His left hand resting in meditative equipoise (dhyāna mudrā).',
    theologyAndPurposeHi:
      'श्रीमद्भागवत महापुराण (१.३.२४), अग्नि पुराण और कवि जयदेव के गीतगोविन्द में भगवान् बुद्ध को विष्णु के नवम अवतार के रूप में वन्दित किया गया है। कलियुग के प्रारंभ में जब धर्म का स्थान हिंसा और बाह्य आडम्बर ने ले लिया, तब करुणा के अवतार भगवान् बुद्ध ने अहिंसा, ध्यान, शील और आत्म-जागरण (बोधि) का मार्ग प्रशस्त किया।',
    theologyAndPurposeEn:
      'Revered in the Bhāgavata Purāṇa (1.3.24), Agni Purāṇa, and Jayadeva’s Gītagovinda as the ninth incarnation of Viṣṇu, Lord Buddha embodies boundless compassion (karuṇā), non-violence (ahiṃsā), and inward meditative awakening beneath the Bodhi tree.',
    imagePath: '/assets/aistudio/image_8c8778b6.png',
    accentColor: '#A855F7'
  },
  {
    index: 10,
    id: 'avatar-10-kalki',
    slug: 'avatar-10-kalki-equestrian-incarnation',
    code: 'AVT-10 · KALI YUGA SANDHYĀ',
    nameHi: '१०. कल्कि अवतार (Kalki Avatāra)',
    nameEn: '10. Kalki Avatāra (The Future Equestrian Renewer of Satya Yuga)',
    shortNameHi: '१०. कल्कि',
    shortNameEn: '10. Kalki',
    sanskritTitle: '॥ म्लेच्छनिवहनिधने कलपयसि करवालम् · श्री कल्किमूर्तिः ॥',
    yugaGroup: 'kali',
    yugaHi: 'कलियुग-संध्या (चतुर्युग समाप्ति एवं नूतन सत्ययुग प्रभात) · दशम अवतार',
    yugaEn: 'End of Kali Yuga / Dawn of New Satya Yuga · 10th Incarnation',
    evolutionaryStageHi: 'चतुर्युग चक्र का पूर्ण शोधन एवं नूतन सत्ययुग का प्रवर्तन (Cosmic Renewal & New Golden Age)',
    evolutionaryStageEn: 'Eschatological Purification & Inauguration of a New Satya Yuga Cycle',
    consortOrCompanionHi: 'श्वेत अश्व "देवदत्त" (गरुड़ का स्वरूप), पद्मा देवी एवं चिरंजीवी गुरु परशुराम',
    consortOrCompanionEn: 'White Steed "Devadatta" (Manifestation of Garuḍa), Consort Padmā & Guru Paraśurāma',
    weaponsAndSymbolsHi: 'धूमकेतु के समान प्रज्वलित खड्ग (तलवार), गरुड़-अंकित ढाल, किरीट-मुकुट एवं श्वेत अश्व देवदत्त',
    weaponsAndSymbolsEn: 'Comet-Blazing Sword (Karavāla), Garuḍa-Emblazoned Shield, Royal Crown & White Steed Devadatta',
    vanquishedAdharmaHi: 'कलियुग के घोर अधर्म, भ्रष्टाचार एवं कलि-पुरुष का अंत कर धर्म और सत्ययुग की पुनः स्थापना',
    vanquishedAdharmaEn: 'Termination of Kali-Yuga Corruption and Re-establishment of Pure Satya Yuga Dharma',
    sacredLocusHi: 'शम्भल ग्राम (विष्णुयशा ब्राह्मण के गृह में प्राकट्य)',
    sacredLocusEn: 'Śambhala Grāma (Prophesied Birthplace in the House of Viṣṇuyaśas)',
    mulaMantraHi: 'ॐ नमो भगवते कल्किरूपाय धर्मसंस्थापकाय नमः ॥',
    mulaMantraEn: 'Oṃ Namo Bhagavate Kalkirūpāya Dharmasaṃsthāpakāya Namaḥ',
    jayadevaSlokaHi:
      'म्लेच्छनिवहनिधने कलयसि करवालं धूमकेतुमिव किमपि करालम् । केशव धृतकल्किशरीर जय जगदीश हरे ॥१०॥',
    jayadevaSlokaEn:
      '"O Keśava, assuming the form of Kalki! For the destruction of rampant adharma at the close of the Dark Age, You brandish a blazing sword like a fiery comet in the sky. Victory to You, O Hari, Lord of the Universe!" (Gītagovinda 1.10)',
    iconographyHi:
      'वायुवेगी श्वेत अश्व "देवदत्त" पर सवार किरीट-मुकुटधारी भगवान् कल्कि; दाएँ हाथ में आकाश की ओर उठा हुआ प्रज्वलित खड्ग (तलवार) और बाएँ कंधे के पीछे गरुड़-अंकित चक्राकार ढाल सुशोभित है।',
    iconographyEn:
      'Crowned equestrian warrior Lord Kalki mounted upon His prancing white horse Devadatta, raising a blazing double-edged sword in His right hand and bearing a circular shield embossed with the winged emblem of Garuḍa.',
    theologyAndPurposeHi:
      'श्रीमद्भागवत महापुराण (१२.२.१८–२०) और कल्कि पुराण के अनुसार, कलियुग के अंतिम संध्या-काल में जब पृथ्वी पर सत्य, दया और धर्म लगभग लुप्त हो जाएँगे, तब शम्भल ग्राम में विष्णुयशा नामक श्रेष्ठ ब्राह्मण के घर भगवान् विष्णु का दशम "कल्कि" अवतार होगा। वे देवदत्त नामक श्वेत अश्व पर आरूढ़ होकर प्रज्वलित खड्ग से अधर्म का नाश करेंगे और पुनः निर्मल सत्ययुग (कृतयुग) का सूत्रपात करेंगे।',
    theologyAndPurposeEn:
      'Prophesied in the Bhāgavata Purāṇa (12.2.18–20) and the Kalki Purāṇa, Kalki is the tenth and final incarnation of the current Mahāyuga. Appearing at Śambhala at the twilight of Kali Yuga, riding the swift white steed Devadatta with sword drawn like a blazing comet, He purges the world of spiritual darkness and inaugurates the dawn of a new Satya Yuga.',
    imagePath: '/assets/aistudio/image_2027dc95.png',
    accentColor: '#EF4444'
  }
];

export const VISHNU_DASHAVATARA_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-vishnu-dashavatara-complete-concordance',
    articleSlug: 'vishnu-dashavatara-ten-avatars-codex',
    titleEn: 'Complete Concordance of Bhagavān Śrī Viṣṇu & The Ten Avatāras (Daśāvatāra: 01 Matsya to 10 Kalki)',
    titleHi: 'भगवान् श्री महाविष्णु एवं दशावतार (१. मत्स्य से १०. कल्कि तक) की सम्पूर्ण शास्त्रीय एवं युगानुसार सारणी',
    captionEn:
      'Canonical sequence of Supreme Śeṣaśāyī Mahāviṣṇu and His Ten Incarnations across Satya, Tretā, Dvāpara, and Kali Yugas—showing their evolutionary progression, iconographic attributes in the 11 archival plates, and dharmic mission.',
    captionHi:
      'क्षीरसागरशायी भगवान् श्री महाविष्णु तथा सत्ययुग, त्रेतायुग, द्वापरयुग और कलियुग में प्रकट उनके दस अवतारों (दशावतार) का क्रमिक विकास, आयुध-प्रतीक, मूल मंत्र एवं अवतार-प्रयोजन।',
    headersEn: [
      'No. & Yuga',
      'Incarnation (Devanāgarī & IAST)',
      'Cosmic & Evolutionary Stage',
      'Key Iconography (Archival Plates)',
      'Dharmic Mission & Vanquished Adharma',
      'Consecrated Mantra'
    ],
    headersHi: [
      'क्र. एवं युग',
      'अवतार का नाम',
      'चेतना एवं सृष्टि-विकास सोपान',
      'प्रमुख प्रतिमाशास्त्रीय स्वरूप (चित्रानुसार)',
      'अवतार प्रयोजन एवं अधर्म-नाश',
      'मूल मंत्र'
    ],
    rowsEn: VISHNU_DASHAVATARA_ENTRIES.map(e => [
      `${e.index === 0 ? '00 · Mūla' : String(e.index).padStart(2, '0')}\n${e.yugaEn}`,
      `${e.nameHi}\n${e.nameEn}`,
      e.evolutionaryStageEn,
      e.weaponsAndSymbolsEn,
      e.vanquishedAdharmaEn,
      e.mulaMantraHi
    ]),
    rowsHi: VISHNU_DASHAVATARA_ENTRIES.map(e => [
      `${e.index === 0 ? '०० · मूल स्वरूप' : String(e.index).padStart(2, '0')}\n${e.yugaHi}`,
      e.nameHi,
      e.evolutionaryStageHi,
      e.weaponsAndSymbolsHi,
      e.vanquishedAdharmaHi,
      e.mulaMantraHi
    ])
  }
];

export const VISHNU_DASHAVATARA_MASTER_ARTICLE: ResearchArticle = {
  slug: 'vishnu-dashavatara-ten-avatars-codex',
  categorySlug: 'vishnu-dashavatara-codex',
  code: 'VSN-10',
  titleEn: 'Bhagavān Śrī Viṣṇu & The Daśāvatāra (भगवान् श्री विष्णु एवं दशावतार): Complete Iconographic, Yuga-Cycle & Purāṇic Monograph',
  titleHi: 'भगवान् श्री विष्णु एवं दशावतार (१० अवतार): क्षीरसागरशायी नारायण से मत्स्य, कूर्म, वराह, नृसिंह, वामन, परशुराम, राम, कृष्ण, बुद्ध एवं कल्कि तक का सचित्र शास्त्रीय अध्ययन',
  subtitleEn: 'A Comprehensive Study of Śeṣaśāyī Mahāviṣṇu and His Ten Cosmic Incarnations Across Satya, Tretā, Dvāpara & Kali Yugas — Illustrated with 11 Archival Plates',
  subtitleHi: 'चतुर्युग (सत्य, त्रेता, द्वापर, कलि) में धर्म-संस्थापन और चेतना के क्रमिक विकास को दर्शाने वाले भगवान् विष्णु के ११ मूल चित्रों, स्तोत्रों और पुराण-प्रमाणों का गहन संकलन',
  sanskritEpigraph: '॥ यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
  epigraphTranslationEn: '"Whenever there is a decline of Dharma and an ascendance of Adharma, O Bhārata, then I manifest Myself across age after age to protect the righteous and re-establish Cosmic Order." — Bhagavad Gītā 4.7–8',
  epigraphTranslationHi: '"हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब साधुजनों के परित्राण और धर्म की पुनः स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।" — श्रीमद्भगवद्गीता ४.७–८',
  evidenceBadgeEn: 'PRIMARY VAIṢṆAVA ARCHIVE · BHĀGAVATA PURĀṆA, VIṢṆU PURĀṆA, AGNI PURĀṆA & GĪTAGOVINDA',
  evidenceBadgeHi: 'मूल वैष्णव शास्त्र स्रोत · श्रीमद्भागवत महापुराण, विष्णु पुराण, अग्नि पुराण एवं गीतगोविन्द',
  accentColor: '#38BDF8',
  interactiveIndex: 0,
  summaryEn:
    'In Vaiṣṇava theology, Pāñcarātra Āgama, and the Mahāpurāṇas, Bhagavān Śrī Mahāviṣṇu—reclining upon the seven-hooded serpent Ananta Śeṣa in the Ocean of Milk with Goddess Mahālakṣmī—is the all-pervading sustainer of the cosmos (Viśvādhāra). Across the four cyclic ages (Satya, Tretā, Dvāpara, and Kali Yuga), He descends in ten canonical incarnations known as the Daśāvatāra: (1) Matsya, (2) Kūrma, (3) Varāha, (4) Narasiṃha, (5) Vāmana, (6) Paraśurāma, (7) Śrī Rāma, (8) Śrī Kṛṣṇa, (9) Buddha, and (10) Kalki. Together, these eleven forms trace both the preservation of Dharma and the grand evolutionary ascent of embodied consciousness from primordial waters to supreme spiritual awakening.',
  summaryHi:
    'वैष्णव दर्शन, पांचरात्र आगम और अष्टादश पुराणों में क्षीरसागर में सप्तमुखी अनंत शेषनाग की शय्या पर भगवती महालक्ष्मी के साथ विराजमान भगवान् श्री महाविष्णु संपूर्ण ब्रह्माण्ड के आधार और पालक हैं। चतुर्युग (सत्ययुग, त्रेतायुग, द्वापरयुग और कलियुग) के काल-चक्र में धर्म की रक्षा और जीव-चेतना के उत्थान हेतु भगवान् के दस प्रमुख अवतार—"दशावतार"—प्रसिद्ध हैं: (१) मत्स्य, (२) कूर्म, (३) वराह, (४) नृसिंह, (५) वामन, (६) परशुराम, (७) श्री राम, (८) श्री कृष्ण, (९) बुद्ध और (१०) कल्कि। ये ग्यारह स्वरूप जल-तत्त्व से लेकर पूर्ण ब्रह्म-चेतना तक सृष्टि के क्रमिक विकास को भी मूर्त रूप देते हैं।',
  sections: [
    {
      headingEn: '1. Supreme Source (Avatārī): Śeṣaśāyī Nārāyaṇa with Mahālakṣmī in Kṣīrasāgara',
      headingHi: '1. अवतारी मूल स्वरूप: क्षीरसागर में शेषशायी भगवान् श्री महाविष्णु एवं महालक्ष्मी',
      bodyEn:
        'Etymology of Viṣṇu and Nārāyaṇa: In the Nirukta and Viṣṇu Purāṇa, the name Viṣṇu (विष्णु) derives from the root viṣ ("to pervade, to permeate"), signifying the Supreme Reality that enters and sustains every atom of existence ("Viṣṇur viśateḥ"). The name Nārāyaṇa (नारायण) signifies both "He whose abode (ayana) is the primordial cosmic waters (nārāḥ)" and "the ultimate resting place of all living beings."\n\nIconography of the Master Archival Plate (VSN-00): In the opening plate of this unit, four-armed Lord Mahāviṣṇu reclines in yogic slumber (Yoga-nidrā) upon the coils of the seven-hooded cosmic serpent Ananta Śeṣa. Above Him arch the seven cobra hoods representing the seven planes of existence and timelessness (Ananta = Endless Time). At His lotus feet sits Śrī Mahālakṣmī holding a lotus blossom, representing Śrī-Śakti—the inseparable grace, harmony, and auspiciousness through which Viṣṇu sustains the worlds.',
      bodyHi:
        'विष्णु और नारायण का व्युत्पत्ति-अर्थ: निरुक्त और विष्णु पुराण के अनुसार "विष्" धातु (व्याप्त होना) से "विष्णु" शब्द बना है, जिसका अर्थ है—जो चराचर जगत के कण-कण में रम रहा है। "नारायण" का अर्थ है—जल (नार) ही जिनका प्रथम अयन (निवास) है तथा जो समस्त जीवों के परम आश्रय हैं।\n\nमूल चित्र (VSN-00) का प्रतिमाशास्त्रीय रहस्य: इस इकाई के प्रथम चित्र में चतुर्भुज भगवान् श्री महाविष्णु सप्तमुखी अनंत शेषनाग की कुण्डलित शय्या पर शांत भाव से विराजमान हैं। शेषनाग के सात फन सप्त-लोकों और अनंत काल के प्रतीक हैं, जबकि भगवान् के चरणों के समीप पद्म धारण किए विराजमान भगवती महालक्ष्मी उस अनंत श्री-शक्ति और करुणा का प्रतीक हैं जिससे सृष्टि का पालन होता है।'
    },
    {
      headingEn: '2. The Four Incarnations of Satya Yuga (Kṛta Yuga): Matsya, Kūrma, Varāha & Narasiṃha',
      headingHi: '2. सत्ययुग (कृतयुग) के चार अवतार: १. मत्स्य, २. कूर्म, ३. वराह एवं ४. नृसिंह',
      bodyEn:
        '1. Matsya Avatāra (मत्स्य · The Cosmic Fish): Appearing during the universal deluge (Mahāpralaya), Lord Matsya saved Vaivasvata Manu, the Seven Sages, and the seeds of all living beings in a great ark, while slaying the demon Hayagrīva to rescue the Four Vedas from the ocean depths.\n\n2. Kūrma Avatāra (कूर्म · The Cosmic Tortoise): During the Churning of the Ocean of Milk (Samudra Manthana) by the Devas and Asuras, Lord Kūrma supported the sinking Mount Mandara upon His adamantine shell as the cosmic pivot, enabling the emergence of Dhanvantari, Mahālakṣmī, and the nectar of immortality (Amṛta).\n\n3. Varāha Avatāra (वराह · The Cosmic Boar): When the demon Hiraṇyākṣa plunged Mother Earth (Bhūdevī) into the abyss of the Garbhodaka ocean, Lord Yajña-Varāha dove into the cosmic waters, vanquished Hiraṇyākṣa, and lifted the spherical Earth effortlessly upon His tusk.\n\n4. Narasiṃha Avatāra (नरसिंह · The Man-Lion): Bursting forth from a palace pillar at twilight to protect His fearless devotee Prahlāda, half-man half-lion Bhagavān Narasiṃha bypassed every clause of Hiraṇyakaśipu’s invulnerability boon, slaying the tyrant across His lap on the courtyard threshold with His bare claws.',
      bodyHi:
        '१. मत्स्य अवतार: प्रलय-सागर के उमड़ते जल में भगवान् मत्स्य ने हयग्रीव दैत्य का वध कर चारों वेदों का उद्धार किया तथा वैवस्वत मनु और सप्तर्षियों की नौका की रक्षा की।\n\n२. कूर्म अवतार: देव-दानव समुद्र-मंथन के समय जब मन्दराचल पर्वत समुद्र में धँसने लगा, तब भगवान् ने विशाल कछुए (कूर्म) का रूप धरकर उसे अपनी पीठ पर धारण किया।\n\n३. वराह अवतार: पृथ्वी को रसातल में ले जाने वाले हिरण्याक्ष का वध कर भगवान् यज्ञ-वराह ने अपनी तीक्ष्ण दाढ़ (दंष्ट्रा) पर भूदेवी (पृथ्वी गोलक) को ऊपर उठाया।\n\n४. नृसिंह अवतार: भक्त प्रह्लाद की रक्षा हेतु खम्भे को फाड़कर प्रकट हुए अर्ध-मानव अर्ध-सिंह भगवान् नृसिंह ने संध्या काल में देहली पर अपनी जंघा पर रखकर नखों से हिरण्यकशिपु का संहार किया।'
    },
    {
      headingEn: '3. The Three Incarnations of Tretā Yuga: Vāmana, Paraśurāma & Śrī Rāma',
      headingHi: '3. त्रेतायुग के तीन अवतार: ५. वामन (त्रिविक्रम), ६. परशुराम एवं ७. श्री राम',
      bodyEn:
        '5. Vāmana / Trivikrama Avatāra (वामन · The Dwarf Brahmacārin): Entering the sacrificial arena of Emperor Mahābali with a parasol in hand, the young dwarf sage Vāmana requested three paces of land. Expanding into the cosmic form of Trivikrama, He measured the entire Earth in one stride and the heavens in the second, before placing His third foot in grace upon Bali’s bowed head.\n\n6. Paraśurāma Avatāra (परशुराम · The Warrior-Sage): Born to Sage Jamadagni and Reṇukā, the immortal (Cirañjīvī) ascetic warrior Paraśurāma wielded Lord Śiva’s battle-axe (paraśu) and bow to overthrow Kārtavīrya Arjuna and corrupt kings who had abandoned dharmic restraint.\n\n7. Śrī Rāma Avatāra (श्री राम · Maryādā Puruṣottama): Crowned Prince of Ayodhyā and consort of Goddess Sītā, Śrī Rāma wielded the Kodaṇḍa bow to vanquish the ten-headed Rāvaṇa in Laṅkā and established Rāmarājya—the timeless exemplar of righteous governance, filial devotion, and truthfulness.',
      bodyHi:
        '५. वामन / त्रिविक्रम अवतार: हाथ में छत्र लिए बटुक ब्रह्मचारी रूप में दैत्यराज महाबली से तीन पग भूमि माँगकर भगवान् ने विराट् त्रिविक्रम रूप में पृथ्वी और आकाश को नाप लिया तथा बलि के समर्पण से प्रसन्न होकर उन्हें सुतल लोक प्रदान किया।\n\n६. परशुराम अवतार: जमदग्नि-रेणुका के पुत्र एवं भगवान् शिव के शिष्य परशुराम ने अपने अमोघ परशु (फरसे) से सहस्रबाहु अर्जुन और निरंकुश शासकों के अन्याय का अंत किया।\n\n७. श्री राम अवतार: कोदण्ड धनुषधारी मर्यादा पुरुषोत्तम भगवान् श्री राम ने माता सीता और लक्ष्मण के साथ वनवास की लीला करते हुए दशानन रावण का वध किया और आदर्श धर्म-राज्य (रामराज्य) की स्थापना की।'
    },
    {
      headingEn: '4. Dvāpara & Kali Yuga Incarnations (08 to 10): Śrī Kṛṣṇa (8th), Buddha (9th) & Kalki (10th)',
      headingHi: '4. द्वापर एवं कलियुग के अवतार (०८ से १०): ८. श्री कृष्ण, ९. बुद्ध एवं १०. कल्कि',
      bodyEn:
        '8. Śrī Kṛṣṇa Avatāra (श्री कृष्ण · 8th Avatar · Dvāpara Yuga Pūrṇāvatāra): Revered as "Kṛṣṇas tu Bhagavān svayam" (the sixteen-kalā complete manifestation of the Supreme Lord), Śrī Kṛṣṇa enchants creation with His divine flute (Veṇu) beneath the Kadamba tree of Vṛndāvana surrounded by peacocks, slays tyrants like Kaṃsa, and delivers the immortal wisdom of the Bhagavad Gītā to Arjuna at Kurukṣetra.\n\n9. Gautama Buddha Avatāra (बुद्ध · 9th Avatar · Kali Yuga): Seated in lotus meditation and Earth-witness gesture (bhūmisparśa mudrā) beneath the flowering Bodhi tree, the ninth incarnation Buddha ("kesava dhṛta-buddha-śarīra") restores universal compassion (karuṇā), non-violence (ahiṃsā), and interior mindfulness.\n\n10. Kalki Avatāra (कल्कि · 10th Avatar · Twilight of Kali Yuga): Mounted upon the white steed Devadatta with a blazing comet-like sword in His right hand and a Garuḍa shield on His arm, Lord Kalki appears at Śambhala at the close of Kali Yuga to vanquish corruption and inaugurate the dawn of a new Satya Yuga.',
      bodyHi:
        '८. श्री कृष्ण अवतार (अष्टम अवतार · द्वापरयुग पूर्णावतार): षोडश कलाओं से परिपूर्ण भगवान् श्री कृष्ण वृन्दावन के कदम्ब वृक्ष पर मयूरों के मध्य वंशीनाद से प्रेमानन्द की वर्षा करते हैं, कंस आदि दुष्टों का संहार करते हैं और कुरुक्षेत्र में "श्रीमद्भगवद्गीता" का शाश्वत उपदेश देते हैं।\n\n९. बुद्ध अवतार (नवम अवतार · कलियुग): पुष्पित बोधि-वृक्ष के नीचे पद्मासन और भूमिस्पर्श मुद्रा में विराजमान भगवान् बुद्ध जीव-दया, करुणा, अहिंसा और आत्म-बोधि की प्रतिमूर्ति हैं।\n\n१०. कल्कि अवतार (दशम अवतार · कलियुग संध्या): शम्भल ग्राम में प्रकट होकर श्वेत अश्व "देवदत्त" पर सवार और हाथ में प्रज्वलित खड्ग धारण किए भगवान् कल्कि कलियुग के अंत में अधर्म का नाश कर नूतन सत्ययुग का प्रवर्तन करते हैं।'
    }
  ],
  keyFindingsEn: [
    'Traces the complete 11-fold Vaiṣṇava sequence from Supreme Śeṣaśāyī Mahāviṣṇu (00) through the 10 canonical Avatāras (01 Matsya to 10 Kalki) across Satya, Tretā, Dvāpara, and Kali Yugas.',
    'Places Śrī Kṛṣṇa at the canonical 8th Avatar position (Dvāpara Yuga Pūrṇāvatāra), Gautama Buddha at the 9th Avatar position, and Kalki at the 10th Avatar position.',
    'Correlates the Daśāvatāra sequence with both Purāṇic Yuga-cycles and the progressive unfolding of embodied life from aquatic (Matsya) and amphibious (Kūrma) forms to supreme spiritual consciousness (Rāma, Kṛṣṇa, Buddha, Kalki).'
  ],
  keyFindingsHi: [
    'क्षीरसागरशायी भगवान् श्री महाविष्णु (००) से लेकर मत्स्य (०१) से कल्कि (१०) तक चारों युगों के दशावतार का संपूर्ण शास्त्रीय एवं सचित्र समन्वय।',
    'शास्त्रीय क्रमानुसार ८वें स्थान पर द्वापरयुग के पूर्णावतार श्री कृष्ण, ९वें स्थान पर भगवान् बुद्ध और १०वें स्थान पर कल्कि अवतार प्रतिष्ठित हैं।',
    'दशावतार क्रम में जलीय (मत्स्य), उभयचर (कूर्म), स्थलीय (वराह), अर्ध-मानव (नृसिंह) से लेकर पूर्ण मानव एवं दिव्य चेतना (वामन, परशुराम, राम, कृष्ण, बुद्ध, कल्कि) के क्रमिक विकास का विश्लेषण।'
  ],
  metadata: [
    {
      labelEn: 'GATEWAY & CODE',
      labelHi: 'पवित्र द्वार एवं कोड',
      valueEn: 'GATEWAY IX · VSN-10 (Śrī Viṣṇu & Daśāvatāra)',
      valueHi: 'ज्ञान-द्वार IX · VSN-10 (श्री विष्णु एवं दशावतार)'
    },
    {
      labelEn: 'CANONICAL ROSTER',
      labelHi: 'अवतार अनुक्रम',
      valueEn: '1 Supreme Mahāviṣṇu + 10 Avatāras (Matsya to Kalki, with 8th Śrī Kṛṣṇa)',
      valueHi: '१ मूल महाविष्णु + १० अवतार (१. मत्स्य से १०. कल्कि, ८वें श्री कृष्ण सहित)'
    },
    {
      labelEn: 'ARCHIVAL PLATES',
      labelHi: 'सचित्र फलक संख्या',
      valueEn: '11 Consecrated Parchment Plates (00 Mahāviṣṇu + 01–10 Avatāras)',
      valueHi: '११ मूल चित्र फलक (०० श्री महाविष्णु + ०१–१० दशावतार)'
    },
    {
      labelEn: 'PRIMARY SOURCES',
      labelHi: 'मूल शास्त्रीय स्रोत',
      valueEn: 'Bhāgavata Purāṇa · Viṣṇu Purāṇa · Gītagovinda (Daśāvatāra Stotra)',
      valueHi: 'श्रीमद्भागवत महापुराण · विष्णु पुराण · गीतगोविन्द (दशावतार स्तोत्र)'
    }
  ],
  primarySourcesEn:
    'Bhāgavata Purāṇa (1.3 & 10–12), Viṣṇu Purāṇa, Agni Purāṇa (Ch. 2–16), Matsya Purāṇa, Varāha Purāṇa, Nṛsiṃha Purāṇa, Padma Purāṇa, Kalki Purāṇa, and Jayadeva’s Gītagovinda (Sarga 1: Daśāvatāra-kīrti-dhavala).',
  primarySourcesHi:
    'श्रीमद्भागवत महापुराण (स्कन्ध १.३ एवं १०–१२), विष्णु पुराण, अग्नि पुराण (अध्याय २–१६), मत्स्य पुराण, वराह पुराण, नृसिंह पुराण, पद्म पुराण, कल्कि पुराण एवं कवि जयदेव कृत गीतगोविन्द (दशावतार स्तोत्र)।',
  authorEn: 'Ram Ashok Kumar',
  authorHi: 'राम अशोक कुमार'
};

export const VISHNU_DASHAVATARA_INDIVIDUAL_ARTICLES: ResearchArticle[] = VISHNU_DASHAVATARA_ENTRIES.map(entry => ({
  slug: entry.slug,
  categorySlug: 'vishnu-dashavatara-codex',
  code: entry.code.split('·')[0].trim(),
  titleEn: `${entry.nameEn} — ${entry.yugaEn}`,
  titleHi: `${entry.nameHi} — ${entry.yugaHi}`,
  subtitleEn: `${entry.evolutionaryStageEn} · ${entry.weaponsAndSymbolsEn}`,
  subtitleHi: `${entry.evolutionaryStageHi} · ${entry.weaponsAndSymbolsHi}`,
  sanskritEpigraph: entry.jayadevaSlokaHi,
  epigraphTranslationEn: entry.jayadevaSlokaEn,
  epigraphTranslationHi: `मूल मंत्र: ${entry.mulaMantraHi} — ${entry.vanquishedAdharmaHi}`,
  evidenceBadgeEn: `${entry.code} · VAIṢṆAVA PURĀṆIC & ĀGAMIC MONOGRAPH`,
  evidenceBadgeHi: `${entry.code} · वैष्णव पुराण एवं आगम शोध-प्रबंध`,
  accentColor: entry.accentColor,
  interactiveIndex: entry.index,
  summaryEn: `${entry.theologyAndPurposeEn} ${entry.iconographyEn}`,
  summaryHi: `${entry.theologyAndPurposeHi} ${entry.iconographyHi}`,
  sections: [
    {
      headingEn: `1. Iconography & Visual Symbolism of ${entry.shortNameEn}`,
      headingHi: `1. ${entry.shortNameHi} का प्रतिमाशास्त्रीय स्वरूप एवं प्रतीकार्थ`,
      bodyEn: `${entry.iconographyEn}\n\nDivine Emblems & Companions: ${entry.weaponsAndSymbolsEn}. Associated Consort / Figures: ${entry.consortOrCompanionEn}.\n\nSacred Geography (Kṣetra): ${entry.sacredLocusEn}.`,
      bodyHi: `${entry.iconographyHi}\n\nप्रमुख आयुध एवं प्रतीक: ${entry.weaponsAndSymbolsHi}। संबंधित शक्ति / सहचर: ${entry.consortOrCompanionHi}।\n\nपवित्र तीर्थ एवं क्षेत्र: ${entry.sacredLocusHi}।`
    },
    {
      headingEn: `2. Purāṇic Theology, Yuga Context & Dharmic Mission`,
      headingHi: `2. पौराणिक तत्त्वज्ञान, युग-संदर्भ एवं अवतार-प्रयोजन`,
      bodyEn: `${entry.theologyAndPurposeEn}\n\nCosmic & Evolutionary Significance: ${entry.evolutionaryStageEn}.\n\nDharmic Resolution: ${entry.vanquishedAdharmaEn}.\n\nConsecrated Mantra & Stotra:\n${entry.mulaMantraHi}\n(${entry.mulaMantraEn})\n\n${entry.jayadevaSlokaHi}\n${entry.jayadevaSlokaEn}`,
      bodyHi: `${entry.theologyAndPurposeHi}\n\nसृष्टि एवं चेतना विकास सोपान: ${entry.evolutionaryStageHi}।\n\nधर्म-संस्थापन कार्य: ${entry.vanquishedAdharmaHi}।\n\nप्रतिष्ठित मूल मंत्र एवं स्तोत्र:\n${entry.mulaMantraHi}\n(${entry.mulaMantraEn})\n\n${entry.jayadevaSlokaHi}`
    }
  ],
  keyFindingsEn: [
    `Station in Daśāvatāra Sequence: ${entry.code} (${entry.yugaEn}).`,
    `Iconographic Attributes: ${entry.weaponsAndSymbolsEn}.`,
    `Core Dharmic Function: ${entry.vanquishedAdharmaEn}.`
  ],
  keyFindingsHi: [
    `दशावतार क्रम में स्थान: ${entry.code} (${entry.yugaHi})।`,
    `प्रमुख आयुध एवं चिह्न: ${entry.weaponsAndSymbolsHi}।`,
    `अवतार का मुख्य कार्य: ${entry.vanquishedAdharmaHi}।`
  ],
  metadata: [
    { labelEn: 'CODE & STATION', labelHi: 'कोड एवं स्थान', valueEn: entry.code, valueHi: entry.code },
    { labelEn: 'YUGA EPOCH', labelHi: 'युग काल', valueEn: entry.yugaEn, valueHi: entry.yugaHi },
    { labelEn: 'SACRED LOCUS', labelHi: 'पवित्र क्षेत्र', valueEn: entry.sacredLocusEn, valueHi: entry.sacredLocusHi },
    { labelEn: 'MŪLA MANTRA', labelHi: 'मूल मंत्र', valueEn: entry.mulaMantraEn, valueHi: entry.mulaMantraHi }
  ],
  primarySourcesEn: 'Bhāgavata Purāṇa, Viṣṇu Purāṇa, Agni Purāṇa & Jayadeva’s Gītagovinda (Daśāvatāra Stotra).',
  primarySourcesHi: 'श्रीमद्भागवत महापुराण, विष्णु पुराण, अग्नि पुराण एवं गीतगोविन्द (दशावतार स्तोत्र)।',
  authorEn: 'Ram Ashok Kumar',
  authorHi: 'राम अशोक कुमार'
}));

export const ALL_VISHNU_DASHAVATARA_ARTICLES: ResearchArticle[] = [
  VISHNU_DASHAVATARA_MASTER_ARTICLE,
  ...VISHNU_DASHAVATARA_INDIVIDUAL_ARTICLES
];
