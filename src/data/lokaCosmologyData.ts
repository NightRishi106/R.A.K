export type LokaCategory = 'urdhva' | 'earth-axis' | 'adho';

export interface LokaProfile {
  number: number; // 1 to 14
  id: string;
  category: LokaCategory;
  divisionLabelEn: string;
  divisionLabelHi: string;
  nameEn: string;
  nameHi: string;
  shortNameEn: string;
  shortNameHi: string;
  sanskritEpithet: string; // Preserved in Sanskrit / transliteration context
  subtitleEn: string;
  subtitleHi: string;
  glanceTagEn: string;
  glanceTagHi: string;
  accentColor: string;
  secondaryColor: string;
  rulerEn: string;
  rulerHi: string;
  inhabitantsEn: string;
  inhabitantsHi: string;
  summaryEn: string;
  summaryHi: string;
  detailedEnvironmentEn: string;
  detailedEnvironmentHi: string;
  whatIsThereBulletsEn: string[];
  whatIsThereBulletsHi: string[];
  subtleBodyMappingEn: string;
  subtleBodyMappingHi: string;
  scripturalSourcesEn: string;
  scripturalSourcesHi: string;
}

export interface CosmologicalDistinction {
  id: string;
  number: string;
  titleEn: string;
  titleHi: string;
  bodyEn: string;
  bodyHi: string;
  sourceNoteEn: string;
  sourceNoteHi: string;
}

export const FOURTEEN_LOKAS: LokaProfile[] = [
  {
    number: 1,
    id: 'loka-01-satya',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 1 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में प्रथम (सर्वोच्च)',
    nameEn: 'Satya Loka (Brahma Loka)',
    nameHi: 'सत्य लोक (ब्रह्म लोक)',
    shortNameEn: 'Satya Loka',
    shortNameHi: 'सत्य लोक',
    sanskritEpithet: 'सत्यलोक · ब्रह्मलोक',
    subtitleEn: 'The highest realm',
    subtitleHi: 'सर्वोच्च लोक',
    glanceTagEn: 'Highest realm',
    glanceTagHi: 'सर्वोच्च लोक',
    accentColor: '#FFE082',
    secondaryColor: '#D4AF37',
    rulerEn: 'Lord Brahmā (Hiraṇyagarbha — The Four-Faced Creator) & Goddess Sarasvatī',
    rulerHi: 'भगवान ब्रह्मा (हिरण्यगर्भ — चतुर्मुख सृष्टिकर्ता) एवं देवी सरस्वती',
    inhabitantsEn:
      'Brahmā, liberated Siddhas, Prajāpatis, and supreme Yogīs who attain Kramamukti (gradual liberation at the end of the Kalpa)',
    inhabitantsHi:
      'भगवान ब्रह्मा, मुक्त सिद्ध, प्रजापति और सर्वोच्च योगी जो कल्प के अंत में क्रममुक्ति प्राप्त करते हैं',
    summaryEn:
      'Traditionally described as the realm of Brahma, the creator deity. It represents an exalted cosmic plane associated with truth, spiritual attainment, and existence beyond ordinary earthly experience.',
    summaryHi:
      'पारंपरिक रूप से सृष्टिकर्ता भगवान ब्रह्मा के धाम के रूप में वर्णित। यह सत्य, सर्वोच्च आध्यात्मिक सिद्धि और साधारण पार्थिव अनुभव से परे के अस्तित्व से जुड़ा सर्वोच्च ब्रह्माण्डीय तल है।',
    detailedEnvironmentEn:
      'Situated at the zenith of the cosmic egg (Brahmāṇḍa), Satya Loka is untouched by the daily cycles of creation and destruction (Naimittika Pralaya) that dissolve the lower worlds. Here, time flows at the scale of Brahmā’s cosmic lifespan (100 divine years = 311.04 trillion human years). There is no bereavement, old age, physical decay, fear, or Dualistic sorrow—only luminous awareness, Vedic vibration (Śabda-Brahman), and contemplative bliss.',
    detailedEnvironmentHi:
      'ब्रह्माण्ड के सर्वोच्च शिखर पर स्थित सत्य लोक निचले लोकों को प्रभावित करने वाले नैमित्तिक प्रलय के चक्रों से अछूता रहता है। यहाँ काल की गति भगवान ब्रह्मा की आयु के पैमाने पर चलती है। इस लोक में शोक, वृद्धावस्था, शारीरिक क्षय, भय या द्वैतजन्य दुःख का अस्तित्व नहीं है—केवल विशुद्ध चैतन्य, वेदमयी नाद-ऊर्जा (शब्द-ब्रह्म) और परमानंद का निवास है।',
    whatIsThereBulletsEn: [
      'The Celestial Assembly of Brahmā (Brahma-Sabhā), described in the Mahābhārata and Purāṇas as self-luminous, beyond material architecture, resonating continuously with the four Vedas in personified form.',
      'Beings who ascend here through supreme meditation on Oṁ (Pranava) do not return to earthly rebirth; they attain final liberation (Mokṣa) alongside Brahmā at the Mahāpralaya.',
      'Pure Sattva-guṇa unmixed with Rajas or Tamas, where consciousness perceives cosmic laws directly without sensory mediation.'
    ],
    whatIsThereBulletsHi: [
      'भगवान ब्रह्मा की दिव्य सभा (ब्रह्म-सभा), जिसका वर्णन महाभारत और पुराणों में स्वयं-प्रकाशित और भौतिक वास्तुकला से परे के रूप में किया गया है, जहाँ चारों वेद साक्षात् रूप में गुंजायमान रहते हैं।',
      'प्रणव (ॐ) की सर्वोच्च उपासना से यहाँ पहुँचने वाले साधक पुनः पृथ्वी पर जन्म नहीं लेते; वे महाप्रलय के समय ब्रह्मा के साथ ही परम मोक्ष प्राप्त करते हैं।',
      'रज और तम से रहित विशुद्ध सत्त्वगुण का वातावरण, जहाँ चेतना इंद्रियों के बिना सीधे ब्रह्माण्डीय नियमों का साक्षात्कार करती है।'
    ],
    subtleBodyMappingEn: 'Sahasrāra Chakra (Crown Thousand-Petaled Lotus) · Vyāhṛti: Oṁ Satyam',
    subtleBodyMappingHi: 'सहस्रार चक्र (सहस्रदल कमल) · व्याहृति: ॐ सत्यम्',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (2.5, 5.24) · Viṣṇu Purāṇa (2.7) · Muṇḍaka Upaniṣad',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (2.5, 5.24) · विष्णु पुराण (2.7) · मुण्डक उपनिषद्'
  },
  {
    number: 2,
    id: 'loka-02-tapa',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 2 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में द्वितीय',
    nameEn: 'Tapa Loka',
    nameHi: 'तप लोक (तपोलोक)',
    shortNameEn: 'Tapa Loka',
    shortNameHi: 'तप लोक',
    sanskritEpithet: 'तपोलोक',
    subtitleEn: 'The realm of austerity',
    subtitleHi: 'तपस्या और साधना का लोक',
    glanceTagEn: 'Austerity',
    glanceTagHi: 'तपस्या एवं साधना',
    accentColor: '#F6C453',
    secondaryColor: '#B8860B',
    rulerEn: 'The Vairāja Devas (Incorruptible Lords of Ascetic Radiance) & Supreme Tapasvins',
    rulerHi: 'वैराज देवगण (अविनाशी तपोमय सत्ताएँ) एवं सर्वोच्च तपस्वी ऋषि',
    inhabitantsEn:
      'Vairāja Pitṛs, Ṛbhus, and exalted ascetics whose subtle bodies are forged from pure spiritual heat (Tapas)',
    inhabitantsHi:
      'वैराज पितर, ऋभुगण और उच्च कोटि के तपस्वी जिनका सूक्ष्म शरीर विशुद्ध तपोबल से निर्मित है',
    summaryEn:
      'Associated with highly advanced ascetics and sages who practice intense tapas—spiritual discipline, meditation, and austerity. It symbolizes extraordinary spiritual concentration and inner power.',
    summaryHi:
      'अत्यंत उच्च कोटि के तपस्वियों और ऋषियों से संबद्ध, जो गहन तप—आध्यात्मिक अनुशासन, ध्यान और संयम—का अभ्यास करते हैं। यह असाधारण आध्यात्मिक एकाग्रता और आंतरिक शक्ति का प्रतीक है।',
    detailedEnvironmentEn:
      'Positioned beneath Satya Loka and above Jana Loka, Tapa Loka is a plane of radiant spiritual fire where even the cosmic conflagration (Saṁvartaka Agni) at the end of Brahmā’s day cannot burn its inhabitants. Because its residents have already consumed all material impurities through centuries of inner tapas, external fire feels merely like a warm breeze to them.',
    detailedEnvironmentHi:
      'सत्य लोक के नीचे और जन लोक के ऊपर स्थित तप लोक आध्यात्मिक तेज का वह क्षेत्र है जहाँ ब्रह्मा के दिन के अंत में उठने वाली प्रलयंकारी संवर्तक अग्नि भी इसके निवासियों को दग्ध नहीं कर पाती। चूँकि यहाँ के साधकों ने अंतःकरण की तपस्या से समस्त भौतिक मलों को भस्म कर दिया है, इसलिए प्रलय की बाह्य अग्नि भी उन्हें मंद उष्ण पवन के समान प्रतीत होती है।',
    whatIsThereBulletsEn: [
      'Self-sustaining fields of Tapo-Tejas (ascetic luminance) where nourishment is drawn purely from meditative absorption (Samādhi) rather than food or soma.',
      'Abode of the Vairājas and the ancient masters of Yoga who oversee the preservation of Vedic seed-knowledge across cosmic cycles.',
      'Complete immunity to the heat and upheaval of the three lower worlds during Kalpa-end dissolution.'
    ],
    whatIsThereBulletsHi: [
      'तपो-तेज के स्वयं-स्फूर्त क्षेत्र, जहाँ आहार या सोम के बजाय केवल समाधि और ध्यान से ही प्राण-पोषण होता है।',
      'वैराज देवों और योग के प्राचीन आचार्यों का निवास, जो कल्प-चक्रों के दौरान वैदिक बीज-ज्ञान के संरक्षण की देखरेख करते हैं।',
      'कल्पान्त प्रलय के समय निचले तीनों लोकों के ताप और उथल-पुथल से पूर्ण प्रतिरक्षा।'
    ],
    subtleBodyMappingEn: 'Ājñā Chakra (Third-Eye Command Center) · Vyāhṛti: Oṁ Tapaḥ',
    subtleBodyMappingHi: 'आज्ञा चक्र (भ्रूमध्य केंद्र) · व्याहृति: ॐ तपः',
    scripturalSourcesEn: 'Viṣṇu Purāṇa (2.7) · Vāyu Purāṇa · Bhāgavata Purāṇa',
    scripturalSourcesHi: 'विष्णु पुराण (2.7) · वायु पुराण · श्रीमद्भागवत पुराण'
  },
  {
    number: 3,
    id: 'loka-03-jana',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 3 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में तृतीय',
    nameEn: 'Jana Loka',
    nameHi: 'जन लोक',
    shortNameEn: 'Jana Loka',
    shortNameHi: 'जन लोक',
    sanskritEpithet: 'जनलोक',
    subtitleEn: 'The realm of the sages',
    subtitleHi: 'महात्माओं और ब्रह्मज्ञानियों का लोक',
    glanceTagEn: 'Sages and wisdom',
    glanceTagHi: 'ऋषि एवं प्रज्ञा',
    accentColor: '#E8B86D',
    secondaryColor: '#9E722C',
    rulerEn: 'The Four Kumāras — Sanaka, Sanandana, Sanātana, and Sanatkumāra',
    rulerHi: 'चार सनत्कुमार — सनक, सनन्दन, सनातन और सनत्कुमार',
    inhabitantsEn:
      'Mind-born sons of Brahmā, Naiṣṭhika Brahmachārīs (lifelong celibate sages), and perfected Jñāna-Yogīs',
    inhabitantsHi:
      'ब्रह्मा के मानस-पुत्र, नैष्ठिक ब्रह्मचारी ऋषि और सिद्ध ज्ञान-योगी',
    summaryEn:
      'Described as the abode of exalted sages and spiritually advanced beings, including the four Kumaras in traditional accounts. It is associated with wisdom, contemplation, and higher spiritual knowledge.',
    summaryHi:
      'पारंपरिक विवरणों में चारों सनत्कुमारों सहित उच्च कोटि के ऋषियों और आध्यात्मिक रूप से उन्नत महापुरुषों के निवास के रूप में वर्णित। यह प्रज्ञा, चिंतन और उच्च आध्यात्मिक ज्ञान से संबद्ध है।',
    detailedEnvironmentEn:
      'Jana Loka (literally the "Realm of the Mind-Born") is the sanctuary of unclouded wisdom and stainless purity. When the lower triple-world (Bhūr, Bhuvar, Svar) is engulfed by the flames of cosmic dissolution at the close of a Kalpa, the smoke and heat reach up to Mahar Loka, prompting the great seers of Mahar Loka to ascend into Jana Loka for refuge and philosophical communion.',
    detailedEnvironmentHi:
      'जन लोक (अर्थात् ब्रह्मा के मानस-पुत्रों का लोक) निर्मल प्रज्ञा और निष्कलंक पवित्रता का धाम है। जब कल्प के अंत में निचले त्रैलोक्य (भूः, भुवः, स्वः) प्रलय की अग्नि से घिर जाते हैं और उसका धुआँ महर्लोक तक पहुँचता है, तब महर्लोक के महर्षि आश्रय और तत्त्व-चिंतन के लिए इसी जन लोक में आरोहण करते हैं।',
    whatIsThereBulletsEn: [
      'Presided over by the Four Kumāras, who perpetually appear as five-year-old radiant youths symbolizing eternal renewal and non-attachment.',
      'A realm where communication occurs through direct silence (Dakṣiṇāmūrti-bhāva) and intuitive transmission of Upaniṣadic truth.',
      'Free from karmic bondage and sensory distraction; dedicated wholly to Brahma-Vidyā (knowledge of the Absolute).'
    ],
    whatIsThereBulletsHi: [
      'चारों कुमारों द्वारा अधिष्ठित, जो सनातन नवीनता और अनासक्ति के प्रतीक रूप में सदैव पाँच वर्ष के तेजस्वी बालकों के रूप में दिखाई देते हैं।',
      'ऐसा लोक जहाँ संवाद मौन (दक्षिणामूर्ति-भाव) और उपनिषद-सत्य के प्रत्यक्ष अंतर्बोध से होता है।',
      'कर्म-बंधन और इंद्रिय-विक्षेप से पूर्णतः मुक्त; केवल ब्रह्म-विद्या के चिंतन को समर्पित।'
    ],
    subtleBodyMappingEn: 'Viśuddha Chakra (Throat Center of Pure Akasha) · Vyāhṛti: Oṁ Janaḥ',
    subtleBodyMappingHi: 'विशुद्ध चक्र (कण्ठ केंद्र) · व्याहृति: ॐ जनः',
    scripturalSourcesEn: 'Bhāgavata Purāṇa · Viṣṇu Purāṇa (2.7) · Brahmāṇḍa Purāṇa',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण · विष्णु पुराण (2.7) · ब्रह्माण्ड पुराण'
  },
  {
    number: 4,
    id: 'loka-04-mahar',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 4 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में चतुर्थ',
    nameEn: 'Mahar Loka',
    nameHi: 'महर्लोक',
    shortNameEn: 'Mahar Loka',
    shortNameHi: 'महर्लोक',
    sanskritEpithet: 'महर्लोक',
    subtitleEn: "The great sages' realm",
    subtitleHi: 'महान ऋषियों और महर्षियों का लोक',
    glanceTagEn: 'Great seers',
    glanceTagHi: 'महान द्रष्टा ऋषि',
    accentColor: '#64DFDF',
    secondaryColor: '#2B9393',
    rulerEn: 'Maharṣi Bhṛgu, Mārkaṇḍeya, and the Prajeśvaras / Saptarṣis (Seven Great Seers)',
    rulerHi: 'महर्षि भृगु, मार्कण्डेय तथा प्रजेश्वर / सप्तर्षि मंडल',
    inhabitantsEn:
      'Kalpa-jīvīs (beings who live for an entire Kalpa), Bhrigu-lineage sages, and cosmic record-keepers',
    inhabitantsHi:
      'कल्प-जीवी महापुरुष (जो संपूर्ण कल्प तक जीवित रहते हैं), भृगु-वंशीय महर्षि और ब्रह्माण्डीय द्रष्टा',
    summaryEn:
      "The world of great rishis and other elevated beings. Some Puranic accounts describe its inhabitants as surviving cosmic upheavals that affect lower realms, making it a symbol of enduring spiritual achievement.",
    summaryHi:
      'महान ऋषियों और अन्य उच्च कोटि की सत्ताओं का लोक। पौराणिक विवरणों के अनुसार यहाँ के निवासी निचले लोकों को प्रभावित करने वाले प्रलयंकारी परिवर्तनों में भी सुरक्षित रहते हैं, जो इसे स्थायी आध्यात्मिक उपलब्धि का प्रतीक बनाता है।',
    detailedEnvironmentEn:
      'Mahar Loka forms the grand cosmic threshold (Sandhi-sthana) between the three mortal/manifest worlds below (Bhūr, Bhuvar, Svar) and the three imperishable spiritual worlds above (Jana, Tapa, Satya). During the Naimittika Pralaya at the end of every thousand Mahāyugas, Mahar Loka is not destroyed in structure, though it becomes uninhabitably warm from the fires below, causing its sages to temporarily migrate upward to Jana Loka and return when creation renews.',
    detailedEnvironmentHi:
      'महर्लोक नीचे के तीन नश्वर लोकों (भूः, भुवः, स्वः) और ऊपर के तीन अविनाशी आध्यात्मिक लोकों (जन, तप, सत्य) के बीच महान संधि-स्थल है। प्रत्येक सहस्र महायुग के अंत में होने वाले नैमित्तिक प्रलय के समय महर्लोक नष्ट नहीं होता, किंतु नीचे की अग्नि की उष्णता से जब यह तप्त हो उठता है, तब यहाँ के महर्षि अस्थायी रूप से जन लोक में चले जाते हैं और सृष्टि के पुनः आरम्भ होने पर लौट आते हैं।',
    whatIsThereBulletsEn: [
      'Hermitages of luminescent ether where Maharṣi Bhṛgu and the patriarchs of the Manvantaras observe the rise and fall of civilizations across Yugas.',
      'The cosmic archive of Dharma, Mantra, and Āgamic lineages preserved between cycles of earthly dissolution.',
      'Direct harmonic link to the Pole Star (Dhruva-maṇḍala) and the Saptarṣi constellation above Svarga.'
    ],
    whatIsThereBulletsHi: [
      'तेजोमय आकाश के आश्रम जहाँ महर्षि भृगु और मन्वन्तरों के प्रजापति युगों के उत्थान और पतन का साक्षी-भाव से अवलोकन करते हैं।',
      'पार्थिव प्रलय-चक्रों के बीच धर्म, मंत्र और आगम परंपराओं को सुरक्षित रखने वाला ब्रह्माण्डीय ज्ञान-कोष।',
      'स्वर्ग से ऊपर ध्रुव-मण्डल और सप्तर्षि तारामंडल के साथ सीधा आध्यात्मिक एवं ज्योतिषीय संबंध।'
    ],
    subtleBodyMappingEn: 'Anāhata Chakra (Heart Lotus of Unstruck Sound) · Vyāhṛti: Oṁ Mahaḥ',
    subtleBodyMappingHi: 'अनाहत चक्र (हृदय पद्म — अनाहत नाद) · व्याहृति: ॐ महः',
    scripturalSourcesEn: 'Viṣṇu Purāṇa (2.7) · Kürma Purāṇa · Bhāgavata Purāṇa',
    scripturalSourcesHi: 'विष्णु पुराण (2.7) · कूर्म पुराण · श्रीमद्भागवत पुराण'
  },
  {
    number: 5,
    id: 'loka-05-svar',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 5 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में पंचम',
    nameEn: 'Svar Loka (Svarga)',
    nameHi: 'स्वर्लोक (स्वर्ग लोक)',
    shortNameEn: 'Svar Loka',
    shortNameHi: 'स्वर्लोक (स्वर्ग)',
    sanskritEpithet: 'स्वर्लोक · स्वर्ग',
    subtitleEn: 'The heavenly realm',
    subtitleHi: 'देवताओं का दिव्य स्वर्ग लोक',
    glanceTagEn: 'Celestial heaven',
    glanceTagHi: 'दिव्य स्वर्ग',
    accentColor: '#38BDF8',
    secondaryColor: '#0284C7',
    rulerEn: 'Indra (Devendra / Purandara — King of the Devas) with Queen Śacī (Indrāṇī)',
    rulerHi: 'देवराज इन्द्र (पुरन्दर) एवं इंद्राणी (शची)',
    inhabitantsEn:
      'The 33 Koti Devas (12 Ādityas, 8 Vasus, 11 Rudras, 2 Aśvins), Bṛhaspati, Maruts, Gandharvas, Apsaras, and virtuous souls enjoying accumulated merit (Puṇya)',
    inhabitantsHi:
      'तैंतीस कोटि देवता (12 आदित्य, 8 वसु, 11 रुद्र, 2 अश्विनीकुमार), देवगुरु बृहस्पति, मरुद्गण, गंधर्व, अप्सराएँ और पुण्यात्माएँ',
    summaryEn:
      'Associated with Indra, king of the devas, and celestial pleasures, divine assemblies, and magnificent palaces. In many Hindu traditions, residence here is temporary and connected to accumulated merit (punya).',
    summaryHi:
      'देवराज इन्द्र, दिव्य सुख-भोग, देव-सभाओं और भव्य प्रासादों से संबद्ध। अनेक हिंदू परंपराओं में यहाँ का निवास अस्थायी माना गया है, जो संचित पुण्य-कर्मों से जुड़ा होता है।',
    detailedEnvironmentEn:
      'Extending from the orbit of the Sun (Sūrya) to the Pole Star (Dhruva), Svar Loka is centered around Indra’s resplendent capital city of Amarāvatī on the summit of Mount Meru. Here stand the Sudharmā assembly hall, the Nandana gardens, the wish-fulfilling Kalpavṛkṣa tree, the Kāmadhenu cow, Airāvata (the four-tusked white elephant), and the celestial Mandākinī river. Yet scriptures emphasize that once a soul’s accumulated puṇya is exhausted, it must return to Bhūloka ("Kṣīṇe puṇye martyalokaṁ viśanti" — Bhagavad Gītā 9.21).',
    detailedEnvironmentHi:
      'सूर्य-मण्डल से लेकर ध्रुव तारे तक विस्तृत स्वर्लोक का केंद्र सुमेरु पर्वत के शिखर पर स्थित इन्द्र की भव्य राजधानी अमरावती है। यहाँ सुधर्मा देव-सभा, नन्दन वन, कल्पवृक्ष, कामधेनु, चतुर्दन्त श्वेत गज ऐरावत और आकाश-गंगा मन्दाकिनी विद्यमान हैं। तथापि शास्त्र स्पष्ट करते हैं कि संचित पुण्य क्षीण होने पर जीव को पुनः मर्त्यलोक (पृथ्वी) में लौटना पड़ता है ("क्षीणे पुण्ये मर्त्यलोकं विशन्ति" — भगवद्गीता 9.21)।',
    whatIsThereBulletsEn: [
      'Amarāvatī Puri & Sudharmā Hall: The capital of Indra where celestial music (Gandharva-veda), Soma offerings, and cosmic administration take place.',
      'Navagraha & Nakṣatra Mandalas: The luminous planetary chariots and 27 lunar mansions that regulate cosmic time (Kāla-chakra).',
      'Temporary Reward Plane: A realm of refined enjoyment (Bhoga-bhūmi) rather than new karmic accumulation or final liberation (Mokṣa).'
    ],
    whatIsThereBulletsHi: [
      'अमरावती पुरी एवं सुधर्मा सभा: देवराज इन्द्र की राजधानी जहाँ दिव्य गंधर्व-संगीत, सोम-यज्ञ और ब्रह्माण्डीय संचालन होता है।',
      'नवग्रह एवं नक्षत्र मण्डल: काल-चक्र को नियंत्रित करने वाले तेजोमय ग्रह-रथ और 27 नक्षत्र।',
      'अस्थायी पुण्य-भोग भूमि: यह नवीन कर्म करने या अंतिम मोक्ष का स्थान नहीं, बल्कि अर्जित पुण्यों के उपभोग की भोग-भूमि है।'
    ],
    subtleBodyMappingEn: 'Maṇipūra Chakra (Solar Plexus Center of Tejas) · Vyāhṛti: Oṁ Svaḥ',
    subtleBodyMappingHi: 'मणिपूर चक्र (नाभि केंद्र — तेजस् तत्त्व) · व्याहृति: ॐ स्वः',
    scripturalSourcesEn: 'Bhagavad Gītā (9.20–21) · Viṣṇu Purāṇa · Mahābhārata (Sabhā Parva)',
    scripturalSourcesHi: 'श्रीमद्भगवद्गीता (9.20–21) · विष्णु पुराण · महाभारत (सभा पर्व)'
  },
  {
    number: 6,
    id: 'loka-06-bhuvar',
    category: 'urdhva',
    divisionLabelEn: 'URDHVA LOKA · 6 OF 7 HIGHER REALMS',
    divisionLabelHi: 'ऊर्ध्व लोक · 7 उच्च लोकों में षष्ठ',
    nameEn: 'Bhuvar Loka',
    nameHi: 'भुवर्लोक (अंतरिक्ष लोक)',
    shortNameEn: 'Bhuvar Loka',
    shortNameHi: 'भुवर्लोक',
    sanskritEpithet: 'भुवर्लोक · अन्तरिक्ष',
    subtitleEn: 'The intermediate realm',
    subtitleHi: 'पृथ्वी और स्वर्ग के मध्य का अंतरिक्ष लोक',
    glanceTagEn: 'Intermediate realm',
    glanceTagHi: 'मध्यवर्ती अंतरिक्ष लोक',
    accentColor: '#818CF8',
    secondaryColor: '#4F46E5',
    rulerEn: 'Sūrya (The Solar Regent) & Vāyu / Mātariśvan (Lords of Prāṇa and Atmospheric Currents)',
    rulerHi: 'भगवान सूर्य (सौर अधिपति) एवं वायुदेव / मातरिश्वन् (प्राण एवं अंतरिक्ष धाराओं के स्वामी)',
    inhabitantsEn:
      'Siddhas, Chāraṇas, Vidyādharas, Gandharvas, Yakṣas, Kinnaras, Guhyakas, Pitṛs (Ancestral Manes), and subtle Prāṇic beings',
    inhabitantsHi:
      'सिद्ध, चारण, विद्याधर, गंधर्व, यक्ष, किन्नर, गुह्यक, पितृगण और सूक्ष्म प्राणमय सत्ताएँ',
    summaryEn:
      'The region between the earthly world and Svarga, associated in traditional cosmology with the atmosphere, celestial pathways, and beings such as gandharvas and siddhas. It is also connected with the sacred Gayatri Mantra.',
    summaryHi:
      'पृथ्वी लोक और स्वर्ग के बीच का क्षेत्र, जो पारंपरिक ब्रह्माण्ड-विज्ञान में वायुमंडल, दिव्य पथों तथा गंधर्वों और सिद्धों जैसी सत्ताओं से जुड़ा है। यह पवित्र गायत्री मंत्र से भी गहराई से संबद्ध है।',
    detailedEnvironmentEn:
      'Spanning from the upper atmosphere of Earth to the solar orb (Sūrya-maṇḍala), Bhuvar Loka is the intermediate astral-atmospheric corridor (Antarikṣa). Semi-divine beings such as Vidyādharas (holders of esoteric sciences), Siddhas, and Gandharvas traverse its luminous wind-paths (Vāyu-skandhas). It serves as the relay plane through which Vedic oblations (Havis) offered into terrestrial sacred fire ascend to the Devas, and through which rain, prāṇa, and solar vitality descend to Earth.',
    detailedEnvironmentHi:
      'पृथ्वी के ऊपरी वायुमंडल से लेकर सूर्य-मण्डल तक फैला हुआ भुवर्लोक मध्यवर्ती सूक्ष्म-अंतरिक्ष गलियारा है। विद्याधर (गूढ़ विद्याओं के धारक), सिद्ध और गंधर्व जैसी अर्ध-दैवीय सत्ताएँ इसके तेजोमय वायु-स्कंधों में विचरण करती हैं। यह वह संवाहक तल है जिसके माध्यम से पृथ्वी की यज्ञ-अग्नि में दी गई आहुतियाँ देवताओं तक पहुँचती हैं और वर्षा, प्राण तथा सौर ऊर्जा पृथ्वी पर अवतरित होती है।',
    whatIsThereBulletsEn: [
      'Sapta Vāyu-Skandhas: Seven layered atmospheric and prāṇic wind-belts (Āvaha, Pravaha, Udvaha, Saṁvaha, Vivaha, Parāvaha, Parivaha) that hold the celestial bodies in motion.',
      'Abode of the Pitṛs (Ancestors) and Muni-Siddhas who observe earthly conduct and assist spiritual aspirants.',
      'Second syllable of the Mahā-Vyāhṛti ("Oṁ Bhūr Bhuvaḥ Svaḥ") in the sacred Gāyatrī Mantra, invoking illumination of the vital-mental plane.'
    ],
    whatIsThereBulletsHi: [
      'सप्त वायु-स्कंध: अंतरिक्ष की सात सूक्ष्म वायु-परतें (आवह, प्रवह, उद्वह, संवह, विवह, परावह, परिवह) जो खगोलीय पिंडों को गतिमान रखती हैं।',
      'पितरों और मुनि-सिद्धों का निवास-क्षेत्र, जो पार्थिव आचरण का अवलोकन करते हैं और साधकों की सहायता करते हैं।',
      'गायत्री मंत्र की महा-व्याहृति ("ॐ भूः भुवः स्वः") का द्वितीय पद, जो प्राणमय और मनोमय कोश के जागरण का आह्वान करता है।'
    ],
    subtleBodyMappingEn: 'Svādhiṣṭhāna Chakra (Vital-Astral Fluidic Center) · Vyāhṛti: Oṁ Bhuvaḥ',
    subtleBodyMappingHi: 'स्वाधिष्ठान चक्र (प्राणमय-सूक्ष्म केंद्र) · व्याहृति: ॐ भुवः',
    scripturalSourcesEn: 'Taittirīya Āraṇyaka · Viṣṇu Purāṇa (2.7) · Bṛhadāraṇyaka Upaniṣad',
    scripturalSourcesHi: 'तैत्तिरीय आरण्यक · विष्णु पुराण (2.7) · बृहदारण्यक उपनिषद्'
  },
  {
    number: 7,
    id: 'loka-07-bhur',
    category: 'earth-axis',
    divisionLabelEn: 'URDHVA LOKA · 7 OF 7 · PLANETARY THRESHOLD (KARMA-BHŪMI)',
    divisionLabelHi: 'ऊर्ध्व लोक · 7वाँ लोक · पार्थिव धुरी (कर्म-भूमि)',
    nameEn: 'Bhur Loka (Bhūloka)',
    nameHi: 'भूर्लोक (भूलोक — पृथ्वी)',
    shortNameEn: 'Bhur Loka (Earth)',
    shortNameHi: 'भूर्लोक (पृथ्वी)',
    sanskritEpithet: 'भूर्लोक · कर्मभूमि',
    subtitleEn: 'The earthly realm — separates the upper and lower sequences',
    subtitleHi: 'पार्थिव लोक — उच्च और अधो लोकों के मध्य की विभाजक धुरी',
    glanceTagEn: 'Earth (Threshold)',
    glanceTagHi: 'पृथ्वी (मध्य धुरी)',
    accentColor: '#34D399',
    secondaryColor: '#059669',
    rulerEn: 'Pṛthvī Devī (Bhūmi), the Aṣṭa-Dikpālas (Eight Directional Guardians), and Dharma / Karmic Law',
    rulerHi: 'पृथ्वी देवी (भूमि), अष्ट-दिक्पाल (आठ दिशाओं के रक्षक) एवं धर्म / कर्म-नियम',
    inhabitantsEn:
      'Embodied human beings (Manuṣyas), animals, plants, rivers, mountains, and terrestrial spirits navigating moral choice and spiritual evolution',
    inhabitantsHi:
      'देहधारी मनुष्य, पशु-पक्षी, वनस्पति, नदियाँ, पर्वत और नैतिक चयन एवं आध्यात्मिक विकास के पथ पर अग्रसर जीव',
    summaryEn:
      'The world of Earth and embodied life, where humans, animals, plants, and other earthly beings live. It is a realm of action, moral choices, learning, and spiritual practice.',
    summaryHi:
      'पृथ्वी और देहधारी जीवन का लोक, जहाँ मनुष्य, पशु, वनस्पति और अन्य पार्थिव जीव निवास करते हैं। यह कर्म, नैतिक चयन, शिक्षा और आध्यात्मिक साधना का क्षेत्र है।',
    detailedEnvironmentEn:
      'In Puranic sacred geography, Bhūloka is envisioned as a vast lotus-like planetary mandala composed of seven concentric island-continents (Sapta-Dvīpa: Jambū, Plakṣa, Śāalmali, Kuśa, Krauñca, Śāka, and Puṣkara) encircled by seven cosmic oceans, with the golden axis of Mount Meru rising at the center of Jambūdvīpa and Bhārata-varṣa at its southern petal. Unlike both the upper heavens (Svarga) and the subterranean splendors (Bila-svarga / Pātāla), which are primarily Bhoga-bhūmis (realms of experiencing past results), Bhūloka is the unique Karma-bhūmi where free will, self-inquiry, and Tantra/Yoga sadhana can forge new destiny and direct liberation.',
    detailedEnvironmentHi:
      'पौराणिक पवित्र भूगोल में भूलोक की कल्पना सात संकेंद्रित द्वीपों (सप्त-द्वीप: जम्बू, प्लक्ष, शाल्मली, कुश, क्रौंच, शाक और पुष्कर) तथा सात समुद्रों से युक्त एक विशाल पद्म-मण्डल के रूप में की गई है, जिसके केंद्र जम्बूद्वीप में स्वर्णिम सुमेरु पर्वत और दक्षिण दल में भारतवर्ष स्थित है। ऊपरी स्वर्ग और नीचे के पाताल (बिल-स्वर्ग)—जो मुख्यतः भोग-भूमियाँ हैं—के विपरीत, भूलोक ही एकमात्र ऐसी कर्म-भूमि है जहाँ स्वतंत्र संकल्प, आत्म-विचार और तंत्र/योग साधना के द्वारा जीव नए कर्मों का सृजन और प्रत्यक्ष मोक्ष प्राप्त कर सकता है।',
    whatIsThereBulletsEn: [
      'Sapta-Dvīpa & Jambūdvīpa: The seven concentric rings of terrestrial geography centered around the axial mountain Meru.',
      'Sacred Kṣetras & Śakti-Pīṭhas: Geomagnetically and spiritually charged pilgrimage nodes (such as Kāśī, Kāmākhyā, Ujjain, and Kedāra) that anchor cosmic energy on Earth.',
      'The Great Hinge: Earth stands at position 7, dividing the ascending Urdhva Lokas (1–7) from the seven subterranean Adho Lokas / Talas (8–14) beneath its crust.'
    ],
    whatIsThereBulletsHi: [
      'सप्त-द्वीप एवं जम्बूद्वीप: केंद्रीय मेरु पर्वत के चारों ओर व्यवस्थित पार्थिव भूगोल के सात संकेंद्रित द्वीप-वलय।',
      'पवित्र क्षेत्र एवं शक्ति-पीठ: काशी, कामाख्या, उज्जयिनी और केदार जैसे जाग्रत तीर्थ-केंद्र जो पृथ्वी पर ब्रह्माण्डीय ऊर्जा को स्थापित करते हैं।',
      'महान विभाजक धुरी: पृथ्वी 7वें स्थान पर स्थित है, जो ऊपरी ऊर्ध्व लोकों (1–7) को भूपर्पटी के नीचे स्थित सात अधो लोकों / तलों (8–14) से अलग करती है।'
    ],
    subtleBodyMappingEn: 'Mūlādhāra Chakra (Root Foundation of Pṛthvī Tattva) · Vyāhṛti: Oṁ Bhūḥ',
    subtleBodyMappingHi: 'मूलाधार चक्र (पृथ्वी तत्त्व का मूल आधार) · व्याहृति: ॐ भूः',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.16–19) · Viṣṇu Purāṇa (2.1–4) · Devī Bhāgavata',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.16–19) · विष्णु पुराण (2.1–4) · देवी भागवत'
  },
  {
    number: 8,
    id: 'loka-08-atala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 1 OF 7) · REALM 8 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में प्रथम) · 14 लोकों में 8वाँ',
    nameEn: 'Atala Loka',
    nameHi: 'अतल लोक',
    shortNameEn: 'Atala Loka',
    shortNameHi: 'अतल लोक',
    sanskritEpithet: 'अतल · प्रथम तल',
    subtitleEn: 'The realm of enchantment',
    subtitleHi: 'माया और सम्मोहन का लोक',
    glanceTagEn: 'Enchantment',
    glanceTagHi: 'माया एवं सम्मोहन',
    accentColor: '#F472B6',
    secondaryColor: '#BE185D',
    rulerEn: 'Bala (Son of Maya Dānava) — Master of 96 Mystic Illusions (Ṣaṇ-ṇavati Māyā)',
    rulerHi: 'बल (मय दानव का पुत्र) — 96 प्रकार की मायावी शक्तियों का स्वामी',
    inhabitantsEn:
      'Dānava lords, illusionists, and three classes of enchanting subterranean women: Svairiṇī (independent), Kāminī (passionate), and Puṁścalī (mercurial)',
    inhabitantsHi:
      'दानव अधिपति, मायावी साधक और तीन श्रेणियों की सम्मोहक स्त्रियाँ: स्वैरिणी, कामिनी और पुंश्चली',
    summaryEn:
      'In the Bhagavata Purana, Atala is ruled by Bala, associated with magical powers and illusions. Its stories feature extraordinary substances and seductive enchantments, making it a realm of supernatural influence and temptation.',
    summaryHi:
      'श्रीमद्भागवत पुराण के अनुसार अतल लोक पर मय दानव के पुत्र बल का शासन है, जो जादुई शक्तियों और माया से संबद्ध है। इसकी कथाओं में असाधारण द्रव्यों और मोहक आकर्षणों का वर्णन मिलता है, जो इसे अलौकिक प्रभाव और प्रलोभन का क्षेत्र बनाता है।',
    detailedEnvironmentEn:
      'The uppermost of the seven subterranean Bila-svargas ("cavern-heavens"), Atala features luminous white-and-amber palaces built within vast underground domes. According to Bhāgavata Purāṇa (5.24.16), simply by yawning, its ruler Bala created three groups of mesmerizing women who greet anyone entering Atala with Hāṭaka—an intoxicating botanical elixir—endowing the drinker with the sensation of possessing the strength of ten thousand elephants and forgetting mortality itself.',
    detailedEnvironmentHi:
      'सात भूमिगत "बिल-स्वर्गों" में सबसे ऊपर स्थित अतल लोक विशाल भूमिगत गुंबदों के भीतर बने श्वेत और स्वर्णिम महलों से सुशोभित है। श्रीमद्भागवत पुराण (5.24.16) के अनुसार, इसके शासक बल की जम्हाई मात्र से तीन प्रकार की अत्यंत मोहक स्त्रियों की उत्पत्ति हुई। वे अतल में प्रवेश करने वाले व्यक्ति को "हाटक" नामक मादक रस पिलाती हैं, जिससे व्यक्ति स्वयं को दस हजार हाथियों के बल से युक्त और मृत्यु से परे अनुभव करने लगता है।',
    whatIsThereBulletsEn: [
      'The 96 Māyā Tantra Systems: Bala’s compendium of perceptual illusions, hypnotic projection, and alchemical transmutation, portions of which are still sought by terrestrial tantrics.',
      'Hāṭaka Elixir Groves: Subterranean gardens producing intoxicating alchemical draughts that induce sensory euphoria and illusion of invincibility.',
      'White-Quartz Subterranean Citadels: Palaces that glow without sunlight, adorned with crystal pillars and lotus baths.'
    ],
    whatIsThereBulletsHi: [
      '96 माया-तंत्र प्रणालियाँ: बल द्वारा रचित दृष्टि-भ्रम, सम्मोहन और रसायन-परिवर्तन की विद्याएँ, जिनके अंश आज भी तांत्रिकों द्वारा खोजे जाते हैं।',
      'हाटक रस के उपवन: भूमिगत उद्यान जहाँ मादक रसायन उत्पन्न होते हैं जो इंद्रिय-सुख और अजेय होने का भ्रम पैदा करते हैं।',
      'श्वेत-स्फटिक भूमिगत दुर्ग: सूर्य के प्रकाश के बिना चमकने वाले प्रासाद, जो स्फटिक स्तंभों और कमल-सरोवरों से युक्त हैं।'
    ],
    subtleBodyMappingEn: 'Atala Center (Hips / Pelvic Threshold) — Subconscious sensory fascination & glamour',
    subtleBodyMappingHi: 'अतल चक्र (कटि / श्रोणि क्षेत्र) — अवचेतन इंद्रिय-आकर्षण एवं माया-मोह',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.16) · Viṣṇu Purāṇa (2.5) · Padma Purāṇa',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.16) · विष्णु पुराण (2.5) · पद्म पुराण'
  },
  {
    number: 9,
    id: 'loka-09-vitala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 2 OF 7) · REALM 9 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में द्वितीय) · 14 लोकों में 9वाँ',
    nameEn: 'Vitala Loka',
    nameHi: 'वितल लोक',
    shortNameEn: 'Vitala Loka',
    shortNameHi: 'वितल लोक',
    sanskritEpithet: 'वितल · हाटकेश्वर क्षेत्र',
    subtitleEn: 'The realm of subterranean power',
    subtitleHi: 'भूमिगत शक्ति और हाटक सुवर्ण का लोक',
    glanceTagEn: 'Subterranean forces',
    glanceTagHi: 'भूमिगत शक्तियाँ',
    accentColor: '#FB923C',
    secondaryColor: '#C2410C',
    rulerEn: 'Lord Śiva as Hāṭakeśvara (Lord of Subterranean Gold) united with Goddess Bhavānī',
    rulerHi: 'भगवान शिव (हाटकेश्वर रूप में) एवं माता भवानी',
    inhabitantsEn:
      'Śiva’s Pramatha Gaṇas (ghostly & elemental attendants), subterranean Siddhas, and Daitya artisans adorned in Hāṭaka gold',
    inhabitantsHi:
      'भगवान शिव के प्रमथ गण (भूत-गणादि पार्षद), भूमिगत सिद्ध और हाटक स्वर्ण धारण करने वाले दैत्य-वंशी',
    summaryEn:
      'Described as a remarkable underground region associated in Puranic accounts with Shiva and Bhavani, as well as unusual forms of subterranean fire and precious materials. It evokes hidden natural forces and immense mineral wealth.',
    summaryHi:
      'पौराणिक विवरणों में भगवान शिव और माता भवानी के साथ-साथ भूमिगत अग्नि के अद्भुत रूपों और बहुमूल्य धातुओं से जुड़ा एक असाधारण भूमिगत क्षेत्र। यह पृथ्वी की गुप्त प्राकृतिक शक्तियों और अपार खनिज संपदा का बोध कराता है।',
    detailedEnvironmentEn:
      'Beneath Atala lies Vitala, where Lord Śiva and Goddess Bhavānī dwell in union as Hāṭakeśvara, surrounded by their Pramatha attendants, to vitalize the creative matrix of the deep earth. From their cosmic union flows the sacred subterranean river Hāṭakī. When subterranean fire (Agni), fanned by deep tectonic wind (Vāyu), drinks of this river and hisses it forth, it solidifies into a extraordinary celestial gold called Hāṭaka—far more luminous than surface gold.',
    detailedEnvironmentHi:
      'अतल के नीचे वितल लोक स्थित है, जहाँ भगवान शिव और माता भवानी अपने प्रमथ गणों से घिरे हुए "हाटकेश्वर" रूप में निवास करते हैं और भूगर्भ की सृजनात्मक शक्ति को ऊर्जित करते हैं। उनके दिव्य संयोग से पवित्र भूमिगत नदी "हाटकी" प्रवाहित होती है। जब भूमिगत वायु से प्रदीप्त अग्नि इस नदी के जल का पान कर उसे फुफकारती है, तो उससे "हाटक" नामक अलौकिक स्वर्ण उत्पन्न होता है, जो पृथ्वी के साधारण सोने से कहीं अधिक तेजोमय होता है।',
    whatIsThereBulletsEn: [
      'Shrine of Hāṭakeśvara Mahādeva: The primordial subterranean lingam and court of Śiva-Bhavānī venerated across Pātāla traditions.',
      'The River Hāṭakī & Alchemical Fire: The sacred hydro-thermal interaction producing Hāṭaka gold, worn as crowns and bracelets by Daitya kings and their consorts.',
      'Deep Tectonic & Magmatic Resonance: Mythological representation of Earth’s deep geothermal and metallogenic veins.'
    ],
    whatIsThereBulletsHi: [
      'हाटकेश्वर महादेव धाम: पाताल परंपराओं में पूजित भगवान शिव और भवानी का आदिम भूमिगत ज्योतिर्लिंग एवं दरबार।',
      'हाटकी नदी एवं रसायन अग्नि: जल और भूगर्भीय अग्नि के संयोग से उत्पन्न होने वाला "हाटक स्वर्ण", जिसे दैत्य राजा और उनकी रानियाँ आभूषण रूप में धारण करती हैं।',
      'गहन भू-तापीय एवं खनिज शक्ति: पृथ्वी की गहरी भू-तापीय शिराओं और स्वर्ण-खनिज निर्माण का पौराणिक निरूपण।'
    ],
    subtleBodyMappingEn: 'Vitala Center (Thighs) — Deepvital drive, alchemical heat, and restless volatility',
    subtleBodyMappingHi: 'वितल चक्र (जंघा क्षेत्र) — गहन प्राण-ऊर्जा, रसायन ताप एवं उद्वेग',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.17) · Skanda Purāṇa (Nāgara Khaṇḍa) · Śiva Purāṇa',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.17) · स्कन्द पुराण (नागर खण्ड) · शिव पुराण'
  },
  {
    number: 10,
    id: 'loka-10-sutala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 3 OF 7) · REALM 10 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में तृतीय) · 14 लोकों में 10वाँ',
    nameEn: 'Sutala Loka',
    nameHi: 'सुतल लोक',
    shortNameEn: 'Sutala Loka',
    shortNameHi: 'सुतल लोक',
    sanskritEpithet: 'सुतल · बलि राज्य',
    subtitleEn: 'The kingdom of King Mahabali',
    subtitleHi: 'धर्मपरायण दैत्यराज महाबलि का साम्राज्य',
    glanceTagEn: 'King Mahabali',
    glanceTagHi: 'राजा महाबलि',
    accentColor: '#FBBF24',
    secondaryColor: '#B45309',
    rulerEn: 'Emperor Mahābali (Son of Virocana & Grandson of Prahlāda) — Guarded by Lord Viṣṇu (Vāmana)',
    rulerHi: 'दैत्य सम्राट महाबलि (विरोचन-पुत्र एवं प्रह्लाद के पौत्र) — द्वारपाल: स्वयं भगवान विष्णु (वामन/उपेन्द्र)',
    inhabitantsEn:
      'King Mahābali, Queen Vindhyāvalī, righteous Asura nobles, and Lord Viṣṇu standing sentinel with His Kaumodakī mace',
    inhabitantsHi:
      'सम्राट महाबलि, महारानी विन्ध्यावली, धर्मनिष्ठ असुर श्रेष्ठ और कौमोदकी गदा धारण कर द्वार की रक्षा करते भगवान विष्णु',
    summaryEn:
      'One of the most celebrated lower realms. After the Vamana incarnation of Vishnu measures the universe in three strides, the devoted king Mahabali is granted Sutala as his kingdom. Vishnu promises to guard him there. Sutala is portrayed as exceptionally splendid and prosperous.',
    summaryHi:
      'अधो लोकों में सर्वाधिक प्रसिद्ध और पूजनीय लोक। जब भगवान विष्णु ने वामन अवतार में तीन पगों में संपूर्ण ब्रह्माण्ड को नाप लिया, तब भक्तराज महाबलि की आत्म-समर्पण निष्ठा से प्रसन्न होकर उन्हें सुतल का राज्य प्रदान किया और स्वयं उनके द्वारपाल बनने का वचन दिया। सुतल को इंद्र के स्वर्ग से भी अधिक भव्य और समृद्ध बताया गया है।',
    detailedEnvironmentEn:
      'Sutala ("The Great/Auspicious Foundation") is celebrated across the Purāṇas as a realm of unmatched moral nobility and architectural splendor, surpassing even Indra’s Svarga. Constructed by Viśvakarmā with hundred-pillared halls of emerald, ruby, and सूर्य-कान्त (sunstone), Sutala is completely free from physical illness, mental anxiety, fatigue, laziness, and humiliation. Once when Rāvaṇa attempted to invade Sutala, Lord Viṣṇu—stationed as Bali’s doorkeeper—effortlessly flung him ten thousand yojanas away with His toe.',
    detailedEnvironmentHi:
      'सुतल ("मंगलमय तल") का वर्णन पुराणों में इंद्र के स्वर्ग से भी अधिक ऐश्वर्यशाली और धर्ममय राज्य के रूप में किया गया है। विश्वकर्मा द्वारा पन्ना, माणिक्य और सूर्यकांत मणियों के सौ-सौ स्तंभों वाले प्रासादों से निर्मित सुतल लोक शारीरिक व्याधि, मानसिक चिंता, थकान, आलस्य और पराजय के भय से पूर्णतः मुक्त है। एक बार जब रावण ने सुतल में प्रवेश करने का दुस्साहस किया, तो द्वारपाल रूप में खड़े भगवान विष्णु ने अपने पैर के अँगूठे मात्र से उसे दस हजार योजन दूर फेंक दिया था।',
    whatIsThereBulletsEn: [
      'The Gate of Upendra (Vāmana): Lord Viṣṇu Himself stands perpetually at the portal of Sutala with His mace, fulfilling His vow to protect King Bali.',
      'Opulence Surpassing Amarāvatī: Gem-studded courtyards, wish-yielding groves, and spotless lakes devoid of the envy and insecurity that afflict celestial devas.',
      'Future Indra Seat: From Sutala, Mahābali rules in unbroken devotion until the next Manvantara (Sāvarṇi), when he is destined to ascend as the official Indra of Svarga.'
    ],
    whatIsThereBulletsHi: [
      'उपेन्द्र (वामन) का रक्षित द्वार: राजा बलि की रक्षा के अपने वचन को निभाते हुए भगवान विष्णु स्वयं गदा धारण कर सुतल के मुख्य द्वार पर पहरा देते हैं।',
      'अमरावती से भी श्रेष्ठ वैभव: रत्न-जड़ित प्रांगण और निर्मल सरोवर, जहाँ देवताओं को सताने वाली ईर्ष्या और असुरक्षा का लेशमात्र भी नहीं है।',
      'भावी इंद्र पद की प्रतीक्षा: महाबलि यहाँ अटूट भक्ति में निवास करते हैं और आगामी सावर्णि मन्वन्तर में वे स्वर्ग के देवराज इंद्र का पद ग्रहण करेंगे।'
    ],
    subtleBodyMappingEn: 'Sutala Center (Knees) — Steadfast surrender, karmic humility, and spiritual sovereignty',
    subtleBodyMappingHi: 'सुतल चक्र (जानू / घुटने) — अटूट समर्पण, कार्मिक विनम्रता एवं आध्यात्मिक ऐश्वर्य',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.18–27, 8.22–23) · Vāmana Purāṇa · Viṣṇu Purāṇa',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.18–27, 8.22–23) · वामन पुराण · विष्णु पुराण'
  },
  {
    number: 11,
    id: 'loka-11-talatala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 4 OF 7) · REALM 11 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में चतुर्थ) · 14 लोकों में 11वाँ',
    nameEn: 'Talatala Loka',
    nameHi: 'तलातल लोक',
    shortNameEn: 'Talatala Loka',
    shortNameHi: 'तलातल लोक',
    sanskritEpithet: 'तलातल · मय-सभा',
    subtitleEn: 'The realm of the master architect',
    subtitleHi: 'मायावी शिल्पी मय दानव का लोक',
    glanceTagEn: 'Maya Danava',
    glanceTagHi: 'मय दानव',
    accentColor: '#A78BFA',
    secondaryColor: '#6D28D9',
    rulerEn: 'Maya Dānava — Supreme Architect of the Asuras & Preceptor of Māyāvins, Protected by Śiva (Tripurāntaka)',
    rulerHi: 'मय दानव — असुरों के सर्वोच्च वास्तुशिल्पी एवं मायावियों के आचार्य (भगवान शिव त्रिपुरान्तक द्वारा रक्षित)',
    inhabitantsEn:
      'Maya Dānava, Asura geometers, yantra-engineers, illusionists, and Dānava noble houses',
    inhabitantsHi:
      'मय दानव, असुर ज्यामिति-विद, यंत्र-अभियंता, मायावी साधक और दानव राजवंश',
    summaryEn:
      'Associated with Maya Danava, a legendary architect and master of extraordinary construction and illusion. Its mythological imagery suggests immense fortresses, complex architecture, and advanced magical craftsmanship.',
    summaryHi:
      'पौराणिक वास्तुकार और अद्भुत निर्माण एवं माया-शिल्प के स्वामी मय दानव से संबद्ध। इसकी पौराणिक छवि विशाल दुर्गों, जटिल ज्यामितीय वास्तुकला और उन्नत जादुई शिल्पकला को दर्शाती है।',
    detailedEnvironmentEn:
      'Beneath Sutala lies Talātala, the sovereign domain of Maya Dānava—the legendary author of the Mayamata (Vāstu-śāstra) and Sūrya-Siddhānta traditions, and builder of the Indraprastha Maya-Sabhā. In ancient times, Maya constructed the three flying metallic citadels (Tripura of gold, silver, and iron); when Lord Śiva as Tripurāntaka incinerated the Tripuras for the welfare of the cosmos, He spared Maya due to his devotion and granted him safe rule over Talātala.',
    detailedEnvironmentHi:
      'सुतल के नीचे तलातल लोक स्थित है, जो "मयमतम्" (वास्तुशास्त्र) और "सूर्य-सिद्धांत" परंपरा के प्रणेता तथा इंद्रप्रस्थ की मय-सभा के निर्माता मय दानव का साम्राज्य है। प्राचीन काल में मय ने सोने, चांदी और लोहे के तीन उड़ने वाले पुरों (त्रिपुर) का निर्माण किया था; जब भगवान शिव ने त्रिपुरान्तक रूप में लोक-कल्याण के लिए त्रिपुर का भस्म किया, तब मय की भक्ति से प्रसन्न होकर उन्हें अभयदान दिया और तलातल का सुरक्षित राज्य प्रदान किया।',
    whatIsThereBulletsEn: [
      'Holographic & Optical Palaces: Architectural halls where crystal floors appear as deep water and water pools appear as solid marble—the archetype of the Maya-Sabhā.',
      'Yantra & Vāstu Laboratories: Subterranean workshops housing flying vimānas, self-moving mechanical guardians (Yantra-puruṣas), and astronomical calculators.',
      'Grace of Tripurāntaka: Worshipped by all masters of sorcery and illusory arts, Maya rules under the direct protective sanction of Mahādeva.'
    ],
    whatIsThereBulletsHi: [
      'दृष्टि-भ्रम एवं स्फटिक महल: ऐसे वास्तु-कक्ष जहाँ स्फटिक का फर्श गहरे जल जैसा और जल-कुण्ड ठोस संगमरमर जैसे दिखाई देते हैं—मय-सभा का मूल प्रतिमान।',
      'यंत्र एवं वास्तु कार्यशालाएँ: विमान-शिल्प, स्वचालित यांत्रिक प्रहरियों (यंत्र-पुरुष) और खगोलीय गणना यंत्रों से युक्त भूमिगत प्रयोगशालाएँ।',
      'त्रिपुरान्तक महादेव की कृपा: समस्त मायावी कलाओं के आचार्यों द्वारा पूजित मय दानव भगवान महादेव के प्रत्यक्ष संरक्षण में शासन करते हैं।'
    ],
    subtleBodyMappingEn: 'Talātala Center (Calves) — Structural ingenuity, attachment to craft, and mental clinging',
    subtleBodyMappingHi: 'तलातल चक्र (पिंडली क्षेत्र) — शिल्प-कौशल, रचनात्मक तंत्र एवं जड़ता-निवारण',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.28) · Mahābhārata (Sabhā Parva) · Mayamatam',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.28) · महाभारत (सभा पर्व) · मयमतम्'
  },
  {
    number: 12,
    id: 'loka-12-mahatala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 5 OF 7) · REALM 12 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में पंचम) · 14 लोकों में 12वाँ',
    nameEn: 'Mahatala Loka',
    nameHi: 'महातल लोक',
    shortNameEn: 'Mahatala Loka',
    shortNameHi: 'महातल लोक',
    sanskritEpithet: 'महातल · नाग-मण्डल',
    subtitleEn: 'The realm of mighty nagas',
    subtitleHi: 'प्रचण्ड बहु-फणधारी नागों का लोक',
    glanceTagEn: 'Naga beings',
    glanceTagHi: 'नाग वंश',
    accentColor: '#2DD4BF',
    secondaryColor: '#0F766E',
    rulerEn: 'The Kādraveya Nāga Lords of the Krodhavaśa Clan — Kuhaka, Takṣaka, Kāliya, and Suṣeṇa',
    rulerHi: 'कद्रू-पुत्र क्रोधवश कुल के नागराज — कुहक, तक्षक, कालिया और सुषेण',
    inhabitantsEn:
      'Multi-headed Nāgas (hooded serpent-beings with 1, 5, 7, 10, to 1,000 hoods), Nāginīs, and their royal clans',
    inhabitantsHi:
      'अनेक फणों वाले महानाग (1, 5, 7, 10 से लेकर सहस्र फणों वाले सर्प-देव), नागिनियाँ और उनके राजवंश',
    summaryEn:
      'Home to powerful serpent beings and their families, including multi-headed nagas in traditional descriptions. The realm is associated with concealed strength, serpentine power, and vast subterranean domains.',
    summaryHi:
      'पारंपरिक विवरणों में बहु-फणधारी नागों सहित शक्तिशाली सर्प-सत्ताओं और उनके परिवारों का निवास-स्थान। यह लोक गुप्त शक्ति, कुण्डलिनी-सदृश सर्प-ऊर्जा और विशाल भूमिगत क्षेत्रों से जुड़ा है।',
    detailedEnvironmentEn:
      'Mahātala is a cavernous subterranean empire inhabited by the fierce Kādraveya Nāgas (descendants of Kadru and Kaśyapa) belonging to the Krodhavaśa group, led by Takṣaka, Kuhaka, Kāliya, and Suṣeṇa. Capable of assuming both giant multi-hooded serpent forms and radiant human-divine forms, they dwell in emerald-lit subterranean river basins with their wives, children, and retinues, though they remain ever watchful of Garuḍa (the solar eagle carrier of Viṣṇu).',
    detailedEnvironmentHi:
      'महातल एक विशाल भूमिगत साम्राज्य है जहाँ कश्यप और कद्रू के वंशज "क्रोधवश" समूह के प्रचण्ड नाग निवास करते हैं, जिनमें तक्षक, कुहक, कालिया और सुषेण प्रमुख हैं। विशाल बहु-फणधारी सर्प रूप और दिव्य मानवीय रूप—दोनों धारण करने में सक्षम ये नाग अपनी पत्नियों, संतानों और परिजनों के साथ पन्ना-मणि से आलोकित भूमिगत नदी-घाटियों में रहते हैं, यद्यपि वे भगवान विष्णु के वाहन गरुड़ के प्रति सदैव सतर्क रहते हैं।',
    whatIsThereBulletsEn: [
      'Citadels of Takṣaka & Kāliya: Subterranean lake-palaces illuminated by Nāga-maṇis (serpent crest-jewels) formed from condensed cosmic lightning.',
      'Serpentine Alchemy & Elixir Lore: Custodians of subterranean mineral venoms, antidotes (Viṣa-vidyā), and hidden earth-currents.',
      'Vigilance Against Suparṇa (Garuḍa): A dramatic mythic tension between the solar sky-force (Garuḍa) and the chthonic serpent-force (Nāgas).'
    ],
    whatIsThereBulletsHi: [
      'तक्षक एवं कालिया के जल-प्रासाद: घनीभूत आकाशीय विद्युत से बनी नागमणियों से प्रकाशित भूमिगत सरोवर-महल।',
      'सर्प-रसायन एवं विष-विद्या: भूमिगत खनिज-विषों, अमृत-तुल्य औषधियों और पृथ्वी की गुप्त ऊर्जा-धाराओं के संरक्षक।',
      'सुपर्ण (गरुड़) के प्रति सतर्कता: सौर आकाश-शक्ति (गरुड़) और भूमिगत सर्प-शक्ति (नाग) के बीच सनातन पौराणिक संतुलन।'
    ],
    subtleBodyMappingEn: 'Mahātala Center (Ankles) — Coiled primal instinct and dormant serpentine vitality',
    subtleBodyMappingHi: 'महातल चक्र (गुल्फ / टखने) — कुण्डलित आदिम वृत्ति एवं सुप्त सर्प-प्राण',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.29) · Mahābhārata (Ādi Parva) · Viṣṇu Purāṇa',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.29) · महाभारत (आदि पर्व) · विष्णु पुराण'
  },
  {
    number: 13,
    id: 'loka-13-rasatala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 6 OF 7) · REALM 13 OF 14',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में षष्ठ) · 14 लोकों में 13वाँ',
    nameEn: 'Rasatala Loka',
    nameHi: 'रसातल लोक',
    shortNameEn: 'Rasatala Loka',
    shortNameHi: 'रसातल लोक',
    sanskritEpithet: 'रसातल · दैत्य-दानव बिल',
    subtitleEn: 'The realm of the Daityas and Danavas',
    subtitleHi: 'प्रबल दैत्यों, दानवों और निवातकवचों का लोक',
    glanceTagEn: 'Daityas and Danavas',
    glanceTagHi: 'दैत्य एवं दानव',
    accentColor: '#F87171',
    secondaryColor: '#B91C1C',
    rulerEn: 'The Mighty Lineages of Daityas, Dānavas, Nivātakavacas, Kālakeyas, and Paṇis of Hiraṇyapura',
    rulerHi: 'दैत्य, दानव, निवातकवच, कालकेय और हिरण्यपुर के पणि राजवंश',
    inhabitantsEn:
      'Sons of Diti (Daityas) and Danu (Dānavas), armor-clad Nivātakavaca warriors, and subterranean Paṇi guardians',
    inhabitantsHi:
      'दिति के पुत्र (दैत्य), दनु के पुत्र (दानव), अभेद्य कवचधारी निवातकवच योद्धा और भूमिगत पणि रक्षक',
    summaryEn:
      'A lower world associated with powerful asura lineages, particularly the Daityas and Danavas. Puranic descriptions portray its inhabitants as formidable beings with immense strength who contend with the devas.',
    summaryHi:
      'शक्तिशाली असुर वंशों—विशेष रूप से दैत्यों और दानवों—से जुड़ा एक अधो लोक। पौराणिक विवरणों में यहाँ के निवासियों को अपार बलशाली और दुर्जेय योद्धाओं के रूप में चित्रित किया गया है जो देवताओं से प्रतिस्पर्धा करते हैं।',
    detailedEnvironmentEn:
      'Beneath Mahātala lies Rasātala, a realm of colossal subterranean chasms (Bila) and golden-armored strongholds such as Hiraṇyapura. Here dwell the Nivātakavacas ("those clad in impenetrable armor"), the Kālakeyas, and the Vedic Paṇis—born with volcanic strength and martial pride as the elder half-brothers and perennial adversaries of the Devas. Though fierce against Indra’s armies, they remain bound only by the cosmic word and Sudarśana Chakra of Lord Hari.',
    detailedEnvironmentHi:
      'महातल के नीचे रसातल स्थित है, जो विशाल भूमिगत कंदराओं (बिल) और "हिरण्यपुर" जैसे स्वर्ण-कवचधारी दुर्गों का क्षेत्र है। यहाँ अभेद्य कवच धारण करने वाले निवातकवच, कालकेय और वैदिक काल के पणि निवास करते हैं—जो जन्मजात ज्वालामुखीय बल और शौर्य से संपन्न हैं तथा देवताओं के चिर-प्रतिद्वंद्वी हैं। इंद्र की सेनाओं के लिए अजेय होते हुए भी वे भगवान हरि के सुदर्शन चक्र और वैदिक मंत्र-बल से नियंत्रित रहते हैं।',
    whatIsThereBulletsEn: [
      'Hiraṇyapura (The Golden Subterranean City): The fortified citadel of the Dānavas and Kālakeyas, rich in heavy metals, mercury (Rasa), and martial arsenals.',
      'The Nivātakavaca Legions: Warriors whose natural bio-metallic armor cannot be pierced by ordinary celestial weapons.',
      'Alchemical Essence (Rasa): In Tantric Rasa-śāstra, Rasātala is also linked to subterranean veins of mercury (Pārada) and sulfur.'
    ],
    whatIsThereBulletsHi: [
      'हिरण्यपुर (स्वर्णिम भूमिगत नगरी): दानवों और कालकेयों का सुदृढ़ दुर्ग, जो भारी धातुओं, पारद (रस) और शस्त्रागारों से समृद्ध है।',
      'निवातकवच सेनाएँ: ऐसे दुर्जेय योद्धा जिनका प्राकृतिक कवच साधारण दैवीय अस्त्रों से भेदा नहीं जा सकता।',
      'रस-शास्त्र संबंध: तांत्रिक रस-शास्त्र में रसातल को भूगर्भीय पारद (पारा) और गंधक की शिराओं का मूल स्रोत भी माना जाता है।'
    ],
    subtleBodyMappingEn: 'Rasātala Center (Instep / Top of Feet) — Raw martial willpower, territoriality, and primal survival',
    subtleBodyMappingHi: 'रसातल चक्र (पद-पृष्ठ / पंजों का ऊपरी भाग) — प्रचण्ड शौर्य-संकल्प एवं आत्मरक्षा वृत्ति',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.30) · Mahābhārata (Vana Parva) · Ṛgveda (Paṇi-Sūktas)',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.30) · महाभारत (वन पर्व) · ऋग्वेद (पणि-सूक्त)'
  },
  {
    number: 14,
    id: 'loka-14-patala',
    category: 'adho',
    divisionLabelEn: 'ADHO LOKA (PĀTĀLA · TAL 7 OF 7) · DEEPEST REALM (14 OF 14)',
    divisionLabelHi: 'अधो लोक (पाताल · सप्त तलों में सप्तम) · सबसे गहरा लोक (14वाँ)',
    nameEn: 'Patala Loka',
    nameHi: 'पाताल लोक (नागलोक)',
    shortNameEn: 'Patala Loka',
    shortNameHi: 'पाताल लोक',
    sanskritEpithet: 'पाताल · नागलोक · अनन्त-शेष आधार',
    subtitleEn: 'The deepest of the seven lower realms',
    subtitleHi: 'सात अधो लोकों में सबसे गहरा और रत्न-दीप्त लोक',
    glanceTagEn: 'Deepest lower realm',
    glanceTagHi: 'सबसे गहरा अधो लोक',
    accentColor: '#38D9FF',
    secondaryColor: '#0369A1',
    rulerEn: 'Vāsuki (King of the Nāgas) & at the Cosmic Base: Lord Ananta-Śeṣa (Saṅkarṣaṇa)',
    rulerHi: 'नागराज वासुकि (नागलोक के अधिपति) तथा मूल आधार पर: भगवान अनन्त-शेष (संकर्षण)',
    inhabitantsEn:
      'Vāsuki, Śaṅkha, Kulika, Mahāśaṅkha, Śveta, Dhanañjaya, Dhṛtarāṣṭra, Devadatta, Nāga-kanyās, and below its foundation, thousand-hooded Ananta-Śeṣa',
    inhabitantsHi:
      'वासुकि, शंख, कुलिक, महाशंख, श्वेत, धनंजय, धृतराष्ट्र, देवदत्त, नाग-कन्याएँ तथा इसके मूल में सहस्र-फणधारी भगवान अनन्त-शेष',
    summaryEn:
      'Famous for its magnificent subterranean splendor, precious jewels, and powerful naga beings. Vasuki and other great serpents are associated with the broader Patala traditions. Despite its position at the bottom of the fourteen-world arrangement, Patala is often portrayed as beautiful and richly adorned rather than as a place of punishment.',
    summaryHi:
      'अपनी भव्य भूमिगत शोभा, बहुमूल्य रत्नों और शक्तिशाली नाग-सत्ताओं के लिए प्रसिद्ध। नागराज वासुकि और अन्य महानाग पाताल की इस परंपरा के अधिपति हैं। चौदह लोकों की व्यवस्था में सबसे नीचे स्थित होने के बावजूद, पाताल को दंड के स्थान (नरक) के रूप में नहीं, बल्कि अत्यंत सुंदर और रत्न-मंडित लोक के रूप में चित्रित किया गया है।',
    detailedEnvironmentEn:
      'At the base of the fourteen-world hierarchy lies Pātāla Loka (Nāgaloka), ruled by Vāsuki—the great serpent who served as the churning rope during the Samudra-Manthana and adorns Lord Śiva’s neck. In the Viṣṇu Purāṇa, the sage Nārada visits Pātāla and declares it more enchanting than Svarga itself: there is no scorching heat by day nor freezing cold by night, because the entire realm is illuminated by the blazing effulgence of countless Nāga-maṇis (crest-jewels) set upon the hoods of the great serpents. Directly beneath the base of Pātāla (30,000 yojanas below) rests Lord Ananta-Śeṣa, holding the entire planetary mandala effortlessly upon His thousand gem-crowned hoods.',
    detailedEnvironmentHi:
      'चौदह लोकों के अनुक्रम के सबसे निचले स्तर पर पाताल लोक (नागलोक) स्थित है, जिसके अधिपति नागराज वासुकि हैं—वही महानाग जो समुद्र-मंथन में मथनी की रस्सी बने और भगवान शिव के कंठ का आभूषण हैं। विष्णु पुराण में देवर्षि नारद पाताल का भ्रमण कर घोषणा करते हैं कि यह स्वर्ग से भी अधिक रमणीय है: यहाँ न दिन में सूर्य का प्रचण्ड ताप है और न रात्रि की शीतलता, क्योंकि संपूर्ण लोक महानागों के फणों पर जड़ी असंख्य दिव्य नागमणियों के प्रकाश से जगमगाता रहता है। पाताल के ठीक नीचे मूल आधार पर भगवान अनन्त-शेष विराजमान हैं, जो अपने सहस्र रत्न-मंडित फणों पर संपूर्ण भूमण्डल को सरसों के दाने की भाँति धारण किए हुए हैं।',
    whatIsThereBulletsEn: [
      'Bhogavatī Puri: The jewel-paved capital of Vāsuki, filled with lotus lakes, sandalwood groves, Kinnara music, and crystal towers.',
      'Illumination by Nāga-Maṇis: Darkness is banished not by a physical sun, but by the self-luminous gems crowning the 5-, 7-, 10-, and 1000-hooded Nāga lords.',
      'Foundation of Ananta-Śeṣa: Beneath Pātāla’s floor stands the infinite serpent manifestation of Viṣṇu/Śiva consciousness supporting the entire cosmic egg (Brahmāṇḍa).'
    ],
    whatIsThereBulletsHi: [
      'भोगवती पुरी: नागराज वासुकि की रत्न-निर्मित राजधानी, जो कमल-सरोवरों, चंदन वनों, किन्नर-संगीत और स्फटिक प्रासादों से सुशोभित है।',
      'नागमणियों का दिव्य प्रकाश: यहाँ अंधकार का नाश किसी भौतिक सूर्य से नहीं, अपितु 5, 7, 10 और 1000 फणों वाले नागराजों की स्वयं-प्रकाशित चूड़ामणियों से होता है।',
      'अनन्त-शेष का मूल आधार: पाताल के तल के नीचे भगवान अनन्त-शेष विराजमान हैं जो संपूर्ण ब्रह्माण्ड को अपने फणों पर धारण करते हैं।'
    ],
    subtleBodyMappingEn: 'Pātāla Center (Soles of the Feet) — Grounding foundation & cosmic support of Ananta-Śeṣa',
    subtleBodyMappingHi: 'पाताल चक्र (पाद-तल / पैरों के तलवे) — मूलाधार के नीचे अंतिम पृथ्वी-स्पर्श एवं अनन्त-आधार',
    scripturalSourcesEn: 'Bhāgavata Purāṇa (5.24.31, 5.25) · Viṣṇu Purāṇa (2.5) · Mahābhārata (Udyoga Parva)',
    scripturalSourcesHi: 'श्रीमद्भागवत पुराण (5.24.31, 5.25) · विष्णु पुराण (2.5) · महाभारत (उद्योग पर्व)'
  }
];

export const THREE_IMPORTANT_DISTINCTIONS: CosmologicalDistinction[] = [
  {
    id: 'distinction-svarga-moksha',
    number: '01',
    titleEn: 'Svarga is not necessarily the final spiritual destination',
    titleHi: 'स्वर्ग अंतिम आध्यात्मिक गंतव्य (मोक्ष) नहीं है',
    bodyEn:
      'In many Hindu traditions, Svarga (Svar Loka) is a temporary heavenly state attained through accumulated ritual and moral merit (punya). Once that merit is expended, the soul returns to the cycle of rebirth, whereas Moksha (liberation) transcends the fourteen-world karmic hierarchy altogether.',
    bodyHi:
      'अनेक हिंदू परंपराओं में स्वर्ग (स्वर्लोक) संचित पुण्य-कर्मों से प्राप्त होने वाली एक अस्थायी दिव्य अवस्था है। पुण्य क्षीण होने पर जीव को पुनः जन्म-मरण के चक्र में लौटना पड़ता है, जबकि मोक्ष चौदह लोकों के इस संपूर्ण कार्मिक अनुक्रम से परे परम मुक्ति है।',
    sourceNoteEn: 'Bhagavad Gītā 9.21 · Muṇḍaka Upaniṣad 1.2.10',
    sourceNoteHi: 'श्रीमद्भगवद्गीता 9.21 · मुण्डक उपनिषद् 1.2.10'
  },
  {
    id: 'distinction-patala-naraka',
    number: '02',
    titleEn: 'Patala is not synonymous with Naraka',
    titleHi: 'पाताल और नरक एक नहीं हैं (बिल-स्वर्ग बनाम दंड-लोक)',
    bodyEn:
      'The seven lower realms (Adho Lokas: Atala through Patala) are not seven levels of hell. In the Puranas they are called Bila-svarga ("subterranean heavens")—realms of extraordinary architecture, jewels, Nagas, and Daitya rulers. Naraka, the punitive realms overseen by Yama for karmic rectification, is a distinct cosmological region located below Patala above the Garbhodaka ocean.',
    bodyHi:
      'सात अधो लोक (अतल से पाताल तक) नरक के सात स्तर नहीं हैं। पुराणों में इन्हें "बिल-स्वर्ग" (भूमिगत स्वर्ग) कहा गया है—जो अद्भुत वास्तुकला, रत्नों, नागों और दैत्य सम्राटों के ऐश्वर्यशाली राज्य हैं। कर्म-दंड और शुद्धि से जुड़े यमराज के "नरक" लोक पाताल से पृथक एक अलग क्षेत्र में (गर्भोदक सागर के ऊपर) स्थित बताए गए हैं।',
    sourceNoteEn: 'Bhāgavata Purāṇa 5.24 & 5.26 · Viṣṇu Purāṇa 2.5–6',
    sourceNoteHi: 'श्रीमद्भागवत पुराण 5.24 एवं 5.26 · विष्णु पुराण 2.5–6'
  },
  {
    id: 'distinction-textual-variation',
    number: '03',
    titleEn: 'The descriptions differ between scriptures',
    titleHi: 'विभिन्न शास्त्रों और पुराणों में विवरणों की विविधता',
    bodyEn:
      'The Bhagavata Purana, Vishnu Purana, Padma Purana, Vayu Purana, and Shaiva-Shakta Tantras provide related but not always identical cosmological details—some emphasizing vertical cosmological distances (in yojanas), others symbolic states of consciousness (chakras and talas), and others sacred geographical correspondences.',
    bodyHi:
      'श्रीमद्भागवत पुराण, विष्णु पुराण, पद्म पुराण, वायु पुराण और शैव-शाक्त तंत्रों में इन लोकों के संबंधित किंतु विविध विवरण मिलते हैं—कुछ ग्रंथ इन्हें योजनों की खगोलीय दूरी में मापते हैं, तो कुछ इन्हें मानव देह के चक्रों-तलों और चेतना के विभिन्न स्तरों के रूप में व्याख्यायित करते हैं।',
    sourceNoteEn: 'Comparative Purāṇic & Āgamic Cosmology',
    sourceNoteHi: 'तुलनात्मक पौराणिक एवं आगम ब्रह्माण्ड-विज्ञान'
  }
];
