export interface DikpalaRecord {
  number: number; // 1 to 10
  id: string;
  slug: string;
  nameEn: string;
  nameHi: string;
  sanskritName: string;
  directionEn: string;
  directionHi: string;
  directionType: 'cardinal' | 'intercardinal' | 'vertical';
  angleDegrees: number; // For compass display (East=0, Southeast=45, South=90, Southwest=135, West=180, Northwest=225, North=270, Northeast=315, Zenith=top, Nadir=bottom)
  goddessEn: string;
  goddessHi: string;
  vehicleEn: string;
  vehicleHi: string;
  weaponEn: string;
  weaponHi: string;
  domainEn: string;
  domainHi: string;
  bijaMantra: string;
  mantraTranslit: string;
  mantraNoteEn?: string;
  mantraNoteHi?: string;
  accentColor: string;
  bgGradient: string;
  iconSymbol: string;
  elementEn: string;
  elementHi: string;
  detailedAnalysisEn: string;
  detailedAnalysisHi: string;
  scripturalContextEn: string;
  scripturalContextHi: string;
}

export const DASHA_DIKPALAS: DikpalaRecord[] = [
  {
    number: 1,
    id: 'dikpala-indra',
    slug: 'indra-east-purva',
    nameEn: 'Indra (इन्द्र)',
    nameHi: 'इन्द्र (देवराज इन्द्र)',
    sanskritName: 'इन्द्रः · पूर्वदिक्पालः',
    directionEn: 'East (Pūrva Diśā)',
    directionHi: 'पूर्व दिशा',
    directionType: 'cardinal',
    angleDegrees: 0,
    goddessEn: 'Indrāṇī / Śacī',
    goddessHi: 'इन्द्राणी / शची',
    vehicleEn: 'Airāvata (White Multi-Tusked Elephant)',
    vehicleHi: 'ऐरावत (श्वेत गजराज)',
    weaponEn: 'Vajra (Thunderbolt of Diamond Illumination)',
    weaponHi: 'वज्र (अमोघ हीरक वज्र)',
    domainEn: 'Rain, storms, celestial sovereignty, kingship & divine power',
    domainHi: 'वर्षा, मेघ, देव-साम्राज्य, संप्रभुता एवं पराक्रम',
    bijaMantra: 'ॐ लं इन्द्राय नमः॥',
    mantraTranslit: 'Om Lam Indraya Namah',
    accentColor: '#F59E0B',
    bgGradient: 'from-amber-600/20 via-amber-900/10 to-transparent',
    iconSymbol: '⚡',
    elementEn: 'Prāṇa / Cloud-Rain (Vṛṣṭi)',
    elementHi: 'प्राण एवं मेघ-वृष्टि',
    detailedAnalysisEn:
      'Sovereign guardian of the Eastern horizon, the threshold of the rising sun and dawn light. Armed with the indestructible Vajra fashioned from the bones of sage Dadhīci, Indra rides the celestial four-tusked elephant Airāvata, governing the heavenly hosts (Svarga) and the circulation of life-giving monsoon rains. In temple vastu, the eastern gateway invokes Indra and Indrāṇī for righteous royal authority, vigor, and protection against celestial discord.',
    detailedAnalysisHi:
      'पूर्व दिशा के स्वामी देवराज इन्द्र सूर्योदय और प्रातःकालीन प्रकाश के रक्षक हैं। महर्षि दधीचि की अस्थियों से निर्मित अमोघ वज्र धारण किए और चतुर्दंती ऐरावत हाथी पर आरूढ़, इन्द्र देवलोक के राजा तथा जीवनदायिनी वर्षा व मेघों के अधिपति हैं। मन्दिर वास्तु में पूर्व द्वार पर इन्द्र और इन्द्राणी का आवाहन धर्मसम्मत अधिकार, ओज और विजय हेतु किया जाता है।',
    scripturalContextEn:
      'Rigveda (Indra Sūktas) · Vāstu Śāstra · Bṛhat Saṃhitā · Agni Purāṇa',
    scripturalContextHi:
      'ऋग्वेद (इन्द्र सूक्त) · वास्तु शास्त्र · बृहत्संहिता · अग्नि पुराण'
  },
  {
    number: 2,
    id: 'dikpala-agni',
    slug: 'agni-southeast-agneya',
    nameEn: 'Agni (अग्नि)',
    nameHi: 'अग्नि (वैश्वानर / पावक)',
    sanskritName: 'अग्निः · आग्नेयदिक्पालः',
    directionEn: 'Southeast (Āgneya Diśā)',
    directionHi: 'आग्नेय दिशा (दक्षिण-पूर्व)',
    directionType: 'intercardinal',
    angleDegrees: 45,
    goddessEn: 'Svāhā (The Divine Consort of Oblation)',
    goddessHi: 'स्वाहा (यज्ञ-आहुति की अधिष्ठात्री)',
    vehicleEn: 'Ram (Meṣa)',
    vehicleHi: 'मेष (बकरा / भेंड़)',
    weaponEn: 'Śakti / Spear (Flaming Lance of Purification)',
    weaponHi: 'शक्ति / भाला (प्रज्वलित अग्नि-शक्ति)',
    domainEn: 'Fire, sacrifice, purification, metabolic heat & transformation',
    domainHi: 'अग्नि, यज्ञ-हवि, पावनता, रूपांतरीकरण एवं ऊर्जा',
    bijaMantra: 'ॐ रं अग्नये नमः॥',
    mantraTranslit: 'Om Ram Agnaye Namah',
    accentColor: '#EF4444',
    bgGradient: 'from-red-600/20 via-orange-900/10 to-transparent',
    iconSymbol: '🔥',
    elementEn: 'Tejas / Fire (Agni-Tattva)',
    elementHi: 'तेजस् / अग्नि तत्त्व',
    detailedAnalysisEn:
      'Guardian of the Southeast diagonal, Agni is the cosmic mouth of the gods (Havya-vāhana) and the consumer of all sacrificial offerings through his consort Svāhā. Mounted upon a fiery ram (meṣa) and brandishing the radiant spear (śakti), Agni presides over digestion, metabolic transformation, cremation-fire, and the alchemical burning of impurities. In domestic and temple architecture, the southeastern corner is perpetually reserved for hearths, kilns, and sacred fire altars.',
    detailedAnalysisHi:
      'आग्नेय (दक्षिण-पूर्व) दिशा के अधिपति अग्निदेव देवताओं के मुख (हव्यवाहन) हैं, जो अपनी शक्ति स्वाहा के माध्यम से समस्त आहुतियाँ ग्रहण करते हैं। मेष (मेढ़ा) पर आरूढ़ और प्रज्वलित शक्ति (भाला) धारण किए, अग्नि पाचन-अग्नि, जठराग्नि, होम-यज्ञ और विकारों के भस्म-शोधन के प्रतीक हैं। वास्तु विधान में आग्नेय कोण सदैव पाकशाला, भट्ठी और यज्ञवेदी के लिए निर्धारित रहता है।',
    scripturalContextEn:
      'Rigveda 1.1.1 · Śatapatha Brāhmaṇa · Gṛhya Sūtras · Mānasāra',
    scripturalContextHi:
      'ऋग्वेद १.१.१ · शतपथ ब्राह्मण · गृह्य सूत्र · मानसार वास्तुशास्त्र'
  },
  {
    number: 3,
    id: 'dikpala-yama',
    slug: 'yama-south-dakshina',
    nameEn: 'Yama (यम)',
    nameHi: 'यम (धर्मराज यम)',
    sanskritName: 'यमः (धर्मराजः) · दक्षिणदिक्पालः',
    directionEn: 'South (Dakṣiṇa Diśā)',
    directionHi: 'दक्षिण दिशा',
    directionType: 'cardinal',
    angleDegrees: 90,
    goddessEn: 'Yamī (Yamunā in Riverine & Puranic Lineages)',
    goddessHi: 'यमी (यमुना / श्यामा)',
    vehicleEn: 'Male Water Buffalo (Mahiṣa)',
    vehicleHi: 'महिष (काला भैंसा)',
    weaponEn: 'Daṇḍa (The Staff of Inexorable Cosmic Justice)',
    weaponHi: 'दण्ड (काल-दण्ड / न्याय-दण्ड)',
    domainEn: 'Death, justice, karmic reckoning, truth & moral order (Dharma)',
    domainHi: 'मृत्यु, न्याय, कर्म-फल, धर्म एवं पितृ-साम्राज्य',
    bijaMantra: 'ॐ मं यमाय नमः॥',
    mantraTranslit: 'Om Mam Yamaya Namah',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-600/20 via-slate-900/10 to-transparent',
    iconSymbol: '⚖️',
    elementEn: 'Kāla / Moral Law (Dharma-Mārga)',
    elementHi: 'काल एवं धर्म-विधान',
    detailedAnalysisEn:
      'Guardian of the Southern quarter, the path of the ancestors (Pitṛyāna) and the realm of mortality. Dharmarāja Yama is the first mortal who charted the trail beyond death, now serving as the unbribable magistrate of cosmic law wielding the merciless Daṇḍa (staff of retribution). Riding a massive black water buffalo, Yama evaluates the ledger of deeds with absolute impartiality, separating transient physical attachment from the immortal soul.',
    detailedAnalysisHi:
      'दक्षिण दिशा के अधिपति धर्मराज यम पितृलोक और कर्म-फल के निष्पक्ष न्यायाधीश हैं। मृत्यु के उपरांत जीवात्मा के कर्मों का लेखा-जोखा करने वाले यमदेव हाथ में काल-दण्ड लिए विशाल काले महिष पर आरूढ़ रहते हैं। वे क्रूर संहारक नहीं, अपितु ब्रह्माण्ड के अटल नैतिक न्याय और सत्य के सजग प्रहरी हैं, जो आत्मा को नश्वर देह के मोह से मुक्त करते हैं।',
    scripturalContextEn:
      'Kaṭha Upaniṣad (Yama-Naciketas Dialogue) · Mahābhārata · Viṣṇu Purāṇa',
    scripturalContextHi:
      'कठोपनिषद् (यम-नचिकेता संवाद) · महाभारत · विष्णु पुराण'
  },
  {
    number: 4,
    id: 'dikpala-nirriti',
    slug: 'nirriti-southwest-nairritya',
    nameEn: 'Nirṛti (निरृति)',
    nameHi: 'निरृति (नैऋत्य अधिपति)',
    sanskritName: 'निरृतिः · नैऋत्यदिक्पालः',
    directionEn: 'Southwest (Nairṛtya Diśā)',
    directionHi: 'नैऋत्य दिशा (दक्षिण-पश्चिम)',
    directionType: 'intercardinal',
    angleDegrees: 135,
    goddessEn: 'Nirṛti herself in Goddess traditions / Rakṣasī',
    goddessHi: 'निरृति (शाक्त परम्परा में स्वयं देवी / राक्षसी)',
    vehicleEn: 'Varies by tradition: Nara (corpse / human), Lion or Donkey',
    vehicleHi: 'परम्परा-भेद से: नर (शव/मानव), सिंह अथवा गर्दभ',
    weaponEn: 'Khaḍga (Sacrificial Severing Sword of Dissolution)',
    weaponHi: 'खड्ग (अहंकार-च्छेदी खड्ग)',
    domainEn: 'Dissolution, decay, entropy, disorder, destruction & transition',
    domainHi: 'क्षय, लय, विनाश, अव्यवस्था एवं रूपांतरण',
    bijaMantra: 'ॐ क्षं नैऋत्याय नमः॥',
    mantraTranslit: 'Om Ksham Nairityaya Namah',
    mantraNoteEn: 'A commonly used devotional form; other traditions use Rakshasa invocations.',
    mantraNoteHi: 'यह सर्वाधिक प्रयुक्त भक्ति-मंत्र है; अन्य तांत्रिक शाखाओं में राक्षस-आवाहन का प्रयोग होता है।',
    accentColor: '#8B5CF6',
    bgGradient: 'from-purple-600/20 via-zinc-900/10 to-transparent',
    iconSymbol: '🗡️',
    elementEn: 'Laya / Entropy & Deep Earth (Tamas)',
    elementHi: 'लय, क्षय एवं गहन तामसिक पृथ्वी',
    detailedAnalysisEn:
      'Guardian of the Southwestern sector, Nirṛti embodies the essential cosmological principle of entropy, rot, breakdown, and dissolution without which new creation cannot arise. In ancient Vedic lore, Nirṛti is the goddess of hardship and calamity; in later Āgamic texts, Nairṛta appears as the king of Rākṣasas wielding a raised sword (khaḍga). The southwestern corner in Vāstu represents the heaviest grounding zone, requiring solid walls to seal away decay and chaotic forces.',
    detailedAnalysisHi:
      'नैऋत्य (दक्षिण-पश्चिम) दिशा के रक्षक निरृति ब्रह्माण्ड के अपरिहार्य क्षय, लय और पुराने रूपों के विखंडन का प्रतिनिधित्व करते हैं। वैदिक साहित्य में निरृति को कष्ट और मृत्यु की देवी माना गया, जबकि परवर्ती आगमों में नैऋत्य को राक्षसों के अधिपति के रूप में खड्ग-हस्त चित्रित किया गया। वास्तु शास्त्र में यह दिशा सबसे भारी और सघन रखी जाती है ताकि नकारात्मक क्षयकारी ऊर्जा घर या मन्दिर में प्रवेश न करे।',
    scripturalContextEn:
      'Taittirīya Saṃhitā · Śatapatha Brāhmaṇa · Mayamata · Tantrasāra',
    scripturalContextHi:
      'तैत्तिरीय संहिता · शतपथ ब्राह्मण · मयमतम् · तंत्रसार'
  },
  {
    number: 5,
    id: 'dikpala-varuna',
    slug: 'varuna-west-pashchima',
    nameEn: 'Varuṇa (वरुण)',
    nameHi: 'वरुण (जलाधिपति वरुण)',
    sanskritName: 'वरुणः · पश्चिमदिक्पालः',
    directionEn: 'West (Paścima Diśā)',
    directionHi: 'पश्चिम दिशा',
    directionType: 'cardinal',
    angleDegrees: 180,
    goddessEn: 'Vāruṇī (Goddess of Waters & Celestial Intoxication)',
    goddessHi: 'वारुणी (जलों एवं दिव्य आनंद की देवी)',
    vehicleEn: 'Makara (Mythical Crocodilian Sea-Monster)',
    vehicleHi: 'मकर (समुद्री घड़ियाल / जल-जंतु)',
    weaponEn: 'Pāśa (The Inescapable Golden Noose of Cosmic Law)',
    weaponHi: 'पाश (वरुण-पाश / सत्य का अटूट बंधन)',
    domainEn: 'Oceans, primordial waters, cosmic order (Ṛta), clouds & moral truth',
    domainHi: 'सागर, जल-तत्त्व, ऋत (सार्वभौमिक नियम), सत्य एवं पाश-बंधन',
    bijaMantra: 'ॐ वं वरुणाय नमः॥',
    mantraTranslit: 'Om Vam Varunaya Namah',
    accentColor: '#06B6D4',
    bgGradient: 'from-cyan-600/20 via-blue-950/10 to-transparent',
    iconSymbol: '🌊',
    elementEn: 'Jala / Primordial Waters (Āpas)',
    elementHi: 'जल तत्त्व / अप्',
    detailedAnalysisEn:
      'Guardian of the Western portal where the sun sets into the cosmic waters, Varuṇa was celebrated in the Rigveda as the supreme moral sovereign of Ṛta (cosmic law and natural harmony). Wielding the golden Pāśa (noose) with which he binds untruth and sin, Varuṇa commands all rivers, seas, rain-clouds, and subterranean aquifers, seated upon the composite aquatic beast Makara beside his radiant consort Vāruṇī.',
    detailedAnalysisHi:
      'पश्चिम दिशा के स्वामी वरुणदेव समस्त महासागरों, जलों और सार्वभौमिक नियम "ऋत" के संरक्षक हैं। ऋग्वेद में वरुण को सर्वज्ञानी सम्राट कहा गया है जो अपने स्वर्ण-पाश से असत्य और पाप का बंधन करते हैं। मकर (जल-दैत्य/मगरमच्छ) पर आरूढ़ और वारुणी से संयुक्त, वरुण पश्चिमी दिशा में सूर्यास्त की शांति और गहरे जलाशयों की अथाह शुद्धि का संचालन करते हैं।',
    scripturalContextEn:
      'Rigveda (Varuṇa Hymns) · Vājasaneyi Saṃhitā · Rāmāyaṇa · Vāstu Śilpa',
    scripturalContextHi:
      'ऋग्वेद (वरुण सूक्त) · वाजसनेयि संहिता · रामायण · वास्तु शिल्प'
  },
  {
    number: 6,
    id: 'dikpala-vayu',
    slug: 'vayu-northwest-vayavya',
    nameEn: 'Vāyu (वायु)',
    nameHi: 'वायु (पवनदेव / मरुत्)',
    sanskritName: 'वायुः · वायव्यदिक्पालः',
    directionEn: 'Northwest (Vāyavya Diśā)',
    directionHi: 'वायव्य दिशा (उत्तर-पश्चिम)',
    directionType: 'intercardinal',
    angleDegrees: 225,
    goddessEn: 'Bhāratī (in iconographic registers) / Anjanā',
    goddessHi: 'भारती (प्रतिमाशास्त्र में) / शिवा',
    vehicleEn: 'Deer / Antelope (Kṛṣṇasāra / Gazelle of Swiftness)',
    vehicleHi: 'हरिण / मृग (तीव्रगामी कृष्णसार मृग)',
    weaponEn: 'Aṅkuśa (The Goad of Vital Direction) / Flag (Dhvajā)',
    weaponHi: 'अंकुश (प्राण-नियंत्रण का अंकुश) / ध्वजा',
    domainEn: 'Wind, atmospheric currents, swift motion, Prāṇa & vital breath',
    domainHi: 'वायु, पवन, गतिशीलता, प्राण-शक्ति एवं श्वास-प्रश्वास',
    bijaMantra: 'ॐ यं वायवे नमः॥',
    mantraTranslit: 'Om Yam Vayave Namah',
    accentColor: '#10B981',
    bgGradient: 'from-emerald-600/20 via-teal-950/10 to-transparent',
    iconSymbol: '💨',
    elementEn: 'Vāyu / Cosmic Wind & Breath (Prāṇa-Tattva)',
    elementHi: 'वायु तत्त्व एवं प्राण-स्पन्दन',
    detailedAnalysisEn:
      'Guardian of the Northwestern diagonal, Lord Vāyu governs the dynamic winds, invisible atmospheric currents, and the ten vital prāṇas animating all living physiology (Prāṇa, Apāna, Samāna, Udāna, Vyāna). Swift as thought, Vāyu rides a leaping gazelle or black antelope (mṛga), holding the goad (aṅkuśa) that directs the currents of air and thoughts. In temple design, the northwest corner regulates ventilation, circulation, and guest chambers.',
    detailedAnalysisHi:
      'वायव्य (उत्तर-पश्चिम) दिशा के रक्षक वायुदेव वायुमंडल की अदृश्य तरंगों, तीव्र गति और शरीर में प्रवाहित दसों प्राणों के नियंता हैं। विचार से भी तीव्र गति वाले वायुदेव छलाँग भरते मृग पर आरूढ़ होकर अंकुश और पवन-पताका धारण करते हैं। वास्तु विधान में यह दिशा संचार, आवागमन, वायु-प्रवाह और अतिथि कक्ष के लिए श्रेष्ठ मानी गई है।',
    scripturalContextEn:
      'Rigveda 10.168 · Praśna Upaniṣad · Taittirīya Upaniṣad · Śilparatna',
    scripturalContextHi:
      'ऋग्वेद १०.१६८ · प्रश्नोपनिषद् · तैत्तिरीयोपनिषद् · शिल्परत्न'
  },
  {
    number: 7,
    id: 'dikpala-kubera',
    slug: 'kubera-north-uttara',
    nameEn: 'Kubera (कुबेर)',
    nameHi: 'कुबेर (धनपति कुबेर / यक्षराज)',
    sanskritName: 'कुबेरः (वैश्रवणः) · उत्तरदिक्पालः',
    directionEn: 'North (Uttara Diśā)',
    directionHi: 'उत्तर दिशा',
    directionType: 'cardinal',
    angleDegrees: 270,
    goddessEn: 'Bhadrā / Kauberī / Ṛddhi (Prosperity & Auspiciousness)',
    goddessHi: 'भद्रा / कौबेरी / ऋद्धि-सिद्धि',
    vehicleEn: 'Mongoose (Nakula jewel-spitter) or Human / Pushpaka Vimāna',
    vehicleHi: 'नकुल (नेवला — मणि-उद्गीरक) अथवा नर-वाहन / पुष्पक विमान',
    weaponEn: 'Gadā (Golden Heavy Mace of Treasure Safeguard)',
    weaponHi: 'गदा (स्वर्ण-गदा एवं रत्न-कलश)',
    domainEn: 'Wealth, subterranean treasures, Nidhis, Yakṣas & material abundance',
    domainHi: 'धन, कोष, नव-निधियाँ, समृद्धि एवं यक्ष-साम्राज्य',
    bijaMantra: 'ॐ शं कुबेराय नमः॥',
    mantraTranslit: 'Om Sham Kuberaya Namah',
    accentColor: '#EAB308',
    bgGradient: 'from-yellow-600/20 via-amber-950/10 to-transparent',
    iconSymbol: '🪙',
    elementEn: 'Dhana-Nidhi / Material Abundance (Pṛthvī-Sampad)',
    elementHi: 'धन-निधि एवं भौतिक संपदा',
    detailedAnalysisEn:
      'Guardian of the Northern gateway, Kubera (Vaiśravaṇa) is the sovereign lord of Alakāpurī, king of the Yakṣas, Kinnaras, and Guhyakas, and custodian of the earth’s nine celestial treasures (Nava-Nidhis: Padma, Mahāpadma, Śaṅkha, Makara, Kacchapa, Mukunda, Kunda, Nīla, Kharva). Depicted with a golden mace (gadā), jewel pots, and accompanied by the jewel-vomiting mongoose (nakula), Kubera’s northern vector in Vāstu is the magnetic channel through which financial prosperity, auspicious transactions, and scholarly treasure flow.',
    detailedAnalysisHi:
      'उत्तर दिशा के अधिपति कुबेर (वैश्रवण) यक्षराज और अलकापुरी के स्वामी हैं, जो पृथ्वी की नौ महान निधियों (पद्म, महापद्म, शंख आदि) और स्वर्ण-कोष के संरक्षक हैं। हाथ में गदा और रत्न-पात्र लिए तथा रत्नों की वर्षा करने वाले नेवले (नकुल) से युक्त, कुबेर उत्तर दिशा से धन, व्यापारिक उन्नति और स्थिर संपदा की रक्षा करते हैं। वास्तु में उत्तर दिशा को कुबेर का पवित्र द्वार माना जाता है।',
    scripturalContextEn:
      'Atharvaveda 8.10 · Mahābhārata · Meghadūta of Kālidāsa · Viṣṇudharmottara Purāṇa',
    scripturalContextHi:
      'अथर्ववेद ८.१० · महाभारत · कालिदास का मेघदूत · विष्णुधर्मोत्तर पुराण'
  },
  {
    number: 8,
    id: 'dikpala-ishana',
    slug: 'ishana-northeast-ishana',
    nameEn: 'Īśāna (ईशान)',
    nameHi: 'ईशान (सदाशिव / ईशान महादेव)',
    sanskritName: 'ईशानः · ईशानदिक्पालः',
    directionEn: 'Northeast (Īśāna Diśā)',
    directionHi: 'ईशान दिशा (उत्तर-पूर्व)',
    directionType: 'intercardinal',
    angleDegrees: 315,
    goddessEn: 'Pārvatī / Īśānī / Umā',
    goddessHi: 'पार्वती / ईशानी / उमा',
    vehicleEn: 'Nandī (The Sacred Pure White Bull of Śiva)',
    vehicleHi: 'नन्दी (भगवान् शिव का श्वेत वृषभ)',
    weaponEn: 'Triśūla (The Sovereign Three-Pronged Spear of Gnosis)',
    weaponHi: 'त्रिशूल (त्रिगुणातीत ज्ञान-त्रिशूल)',
    domainEn: 'Spiritual wisdom, pure consciousness, enlightenment & sacred sanctum',
    domainHi: 'आध्यात्मिक ज्ञान, परा-चेतना, मोक्ष एवं पवित्र देव-स्थान',
    bijaMantra: 'ॐ हं ईशानाय नमः॥',
    mantraTranslit: 'Om Ham Ishanaya Namah',
    accentColor: '#38BDF8',
    bgGradient: 'from-sky-600/20 via-indigo-950/10 to-transparent',
    iconSymbol: '🔱',
    elementEn: 'Ākāśa / Pure Ether & Consciousness (Śiva-Tattva)',
    elementHi: 'आकाश तत्त्व एवं शुद्ध चिद्-आकाश',
    detailedAnalysisEn:
      'Guardian of the most sacred Northeastern diagonal, Īśāna represents the upward-facing fifth aspect of Sadāśiva, embodying transcendental knowledge, spiritual sovereignty, and cosmic consciousness. Mounted on the pure bull Nandī and brandishing the trident (triśūla) alongside the crescent moon in his matted locks, Īśāna sanctifies the northeast as the Vāstu-Puruṣa’s head (śiras). In every traditional temple and household, the Īśāna corner is exclusively consecrated for meditation, daily pūjā, and water sanctums.',
    detailedAnalysisHi:
      'ईशान (उत्तर-पूर्व) दिशा के अधिपति भगवान् ईशान (सदाशिव) समस्त दिशाओं में सबसे पवित्र दिशा के रक्षक हैं। नन्दी वृषभ पर आरूढ़ और त्रिशूल धारण किए, ईशान परम ज्ञान, ध्यान और मोक्ष-प्रदायिनी चेतना के प्रतीक हैं। वास्तु पुरुष मण्डल में ईशान कोण वास्तु-पुरुष का मस्तक माना जाता है, इसलिए मन्दिरों और घरों में पूजा-स्थल, देव-कक्ष और ध्यान-वेदी सदैव ईशान कोण में ही स्थापित की जाती है।',
    scripturalContextEn:
      'Śiva Purāṇa · Liṅga Purāṇa · Taittirīya Āraṇyaka · Vāstu Vidhir',
    scripturalContextHi:
      'शिव पुराण · लिंग पुराण · तैत्तिरीय आरण्यक · वास्तु विधि'
  },
  {
    number: 9,
    id: 'dikpala-brahma',
    slug: 'brahma-zenith-urdhva',
    nameEn: 'Brahmā (ब्रह्मा)',
    nameHi: 'ब्रह्मा (सृष्टिकर्ता ब्रह्मा)',
    sanskritName: 'ब्रह्मा · ऊर्ध्वदिक्पालः (दिक्-अधिपतिः)',
    directionEn: 'Upward / Zenith (Ūrdhva Diśā)',
    directionHi: 'ऊर्ध्व दिशा (आकाश / ब्रह्मलोक)',
    directionType: 'vertical',
    angleDegrees: -90,
    goddessEn: 'Sarasvatī (Goddess of Speech, Learning & Arts)',
    goddessHi: 'सरस्वती (विद्या, वाक् एवं कला की देवी)',
    vehicleEn: 'Haṃsa (The Discriminating Cosmic Swan)',
    vehicleHi: 'हंस (विवेकशील दिव्य राजहंस)',
    weaponEn: 'Vedas, Lotus & Kamaṇḍalu (Sacred Emblems of Manifestation)',
    weaponHi: 'वेद-पुस्तिका, कमल एवं कमण्डलु (सृष्टि-प्रतीक)',
    domainEn: 'Creation, cosmic manifestation, intellect (Buddhi), Vedas & cosmic space',
    domainHi: 'सृष्टि-रचना, वेदों का ज्ञान, बुद्धि, ब्रह्माण्ड-अभिव्यक्ति एवं ऊर्ध्व लोक',
    bijaMantra: 'ॐ ह्रीं ब्रह्मणे नमः॥',
    mantraTranslit: 'Om Hrim Brahmane Namah',
    accentColor: '#FB923C',
    bgGradient: 'from-orange-600/20 via-amber-950/10 to-transparent',
    iconSymbol: '🪷',
    elementEn: 'Mahat-Tattva / Cosmic Intellect & Genesis',
    elementHi: 'महत्-तत्त्व एवं सृष्टि-संकल्प',
    detailedAnalysisEn:
      'Guardian of the celestial Zenith (Ūrdhva), the upward vertical axis ascending to Satya Loka (Brahma Loka). Four-faced Lord Brahmā recites the four Vedas, holding the water-pot (kamaṇḍalu), prayer beads, and lotus, seated with Sarasvatī upon the discriminating swan Haṃsa. Presiding over the expansion of space, intellect, and the genesis of all living organisms, Brahmā anchors the upper pole of the ten-directional cosmic sphere.',
    detailedAnalysisHi:
      'ऊर्ध्व (आकाश / सर्वोच्च शिखर) दिशा के रक्षक सृष्टिकर्ता भगवान् ब्रह्मा हैं, जो सत्यलोक (ब्रह्मलोक) से संपूर्ण ब्रह्माण्ड की रचना का संचालन करते हैं। चार मुखों से चारों वेदों का गान करते हुए, हाथ में कमण्डलु, जपमाला और कमल धारण किए तथा हंस पर आरूढ़ होकर, ब्रह्माजी ज्ञान, बुद्धि और सृष्टि के निरंतर विस्तार की ऊर्ध्व धुरी को संभालते हैं।',
    scripturalContextEn:
      'Padma Purāṇa · Brahmāṇḍa Purāṇa · Manusmṛti · Matsya Purāṇa',
    scripturalContextHi:
      'पद्म पुराण · ब्रह्माण्ड पुराण · मनुस्मृति · मत्स्य पुराण'
  },
  {
    number: 10,
    id: 'dikpala-vishnu',
    slug: 'vishnu-nadir-adha',
    nameEn: 'Viṣṇu (विष्णु)',
    nameHi: 'विष्णु (सर्वपालक श्रीविष्णु)',
    sanskritName: 'विष्णुः · अधोदिक्पालः (अनन्त-अधिपतिः)',
    directionEn: 'Downward / Nadir (Adhaḥ Diśā)',
    directionHi: 'अधः दिशा (पाताल / गर्भोदक / रसातल)',
    directionType: 'vertical',
    angleDegrees: 90,
    goddessEn: 'Lakṣmī (Empress of Auspicious Fortune & Sustenance)',
    goddessHi: 'लक्ष्मी (महावैभव एवं संप्रभु पोषण की देवी)',
    vehicleEn: 'Garuḍa (Solar Eagle) & Ananta Śeṣa (Cosmic Coiled Serpent)',
    vehicleHi: 'गरुड़ (खगराज) एवं शेषनाग (अनन्त)',
    weaponEn: 'Sudarśana Cakra (The Flaming Discus of Cosmic Preservation)',
    weaponHi: 'सुदर्शन चक्र (परम रक्षक चक्र)',
    domainEn: 'Preservation, cosmic stability, protection, gravity & subterranean foundation',
    domainHi: 'पालन, स्थिरता, सार्वभौमिक संरक्षण, गुरुत्वाकर्षण एवं आधार-शिला',
    bijaMantra: 'ॐ क्लीं विष्णवे नमः॥',
    mantraTranslit: 'Om Klim Vishnave Namah',
    accentColor: '#6366F1',
    bgGradient: 'from-indigo-600/20 via-blue-950/10 to-transparent',
    iconSymbol: '☸️',
    elementEn: 'Sthiti-Tattva / Preservation & Gravitational Anchor',
    elementHi: 'स्थिति तत्त्व एवं आधार-भूत अनन्त चेतना',
    detailedAnalysisEn:
      'Guardian of the subterranean Nadir (Adhaḥ), the downward vertical axis descending through the subterranean realms down to the primordial cosmic waters where Lord Viṣṇu reclines as Śeṣaśāyī upon the thousand-headed serpent Ananta Śeṣa. Holding the spinning Sudarśana Cakra, conch (śaṅkha), mace (gadā), and lotus beside Lakṣmī, Viṣṇu anchors the cosmic foundation, counterbalancing the celestial ascent of Brahmā with profound grounding stability, preservation, and divine grace.',
    detailedAnalysisHi:
      'अधः (निम्न / पाताल / रसातल) दिशा के रक्षक जगत्-पालक भगवान् श्रीहरि विष्णु हैं, जो गर्भोदक सागर में अनन्त शेषनाग की शैय्या पर योगनिद्रा में स्थित होकर समस्त भुवनों को आधार प्रदान करते हैं। सुदर्शन चक्र, शंख, गदा और पद्म धारण किए तथा देवी लक्ष्मी से युक्त, भगवान् विष्णु सृष्टि की आधार-धुरी, स्थिरता, गुरुत्वाकर्षण और अटूट रक्षा का संपादन करते हैं।',
    scripturalContextEn:
      'Śrīmad-Bhāgavatam · Viṣṇu Sahasranāma · Pāñcarātra Saṃhitās · Vaikhānasāgama',
    scripturalContextHi:
      'श्रीमद्भागवत महापुराण · विष्णु सहस्रनाम · पाञ्चरात्र संहिताएँ · वैखानसागम'
  }
];

export const UNIVERSAL_DIKPALA_NAMASKARA = {
  sanskrit: 'ॐ सर्वेभ्यो दिक्पालेभ्यो नमः॥',
  translit: 'Om Sarvebhyo Dikpalebhyo Namah',
  meaningEn: 'Salutations to all the divine guardians of the ten directions.',
  meaningHi: 'दसों दिशाओं के समस्त रक्षक देवताओं को हमारा सादर नमन।'
};
