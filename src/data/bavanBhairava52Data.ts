/**
 * 52 BHAIRAVAS – THE GUARDIANS OF THE 52 SHAKTI PEETHAS
 * ॥ श्री बावन भैरव संग्रह ॥
 *
 * Canonical Roster, Devotional Mantras, Collective Samarpaṇa Prayer,
 * Three Systems Concordance, and 51/52 Shakti Peetha Reference.
 */

export interface Bhairava52Item {
  index: number;
  id: string;
  nameHi: string;
  nameEn: string;
  devotionalMantra: string;
  devotionalMantraPhonetic: string;
  peethaEn: string;
  peethaHi: string;
  goddessEn: string;
  goddessHi: string;
  bodyPartEn: string;
  bodyPartHi: string;
  locationEn: string;
  locationHi: string;
}

export const BAVAN_BHAIRAVA_COLLECTIVE_PRAYER = {
  titleHi: '॥ श्री बावन भैरव समर्पण मंत्र ॥',
  titleEn: 'Universal 52 Bhairava Samarpaṇa Mantra',
  primaryBeejaMantra: 'ॐ श्रीं भैरवाय नमः॥',
  primaryBeejaPhonetic: 'Om Shreem Bhairavaya Namah',
  samarpanaMantra: 'ॐ श्री बावन भैरवेभ्यो नमः॥',
  samarpanaPhonetic: 'Om Shri Bavan Bhairavebhyo Namah',
  meaningEn: 'Salutations to the fifty-two manifestations of Bhairava, eternal guardians of the sacred Shakti Peethas.',
  meaningHi: '५२ शक्तिपीठों के शाश्वत रक्षक बावन भैरवों को कोटिशः नमन एवं समर्पण।'
};

export const THREE_BHAIRAVA_SYSTEMS_COMPARISON = [
  {
    systemNameEn: 'Aṣṭa Bhairava (Eight Bhairavas)',
    systemNameHi: 'अष्ट भैरव (८ भैरव)',
    count: 8,
    canonicalRoleEn: 'Directional Guardians of the 8 Quarters & Consorts of the 8 Mātṛkās',
    canonicalRoleHi: '८ दिशाओं के दिक्पाल एवं अष्टमातृकाओं के भैरव-सहचर',
    membersEn: 'Asitāṅga, Ruru, Caṇḍa, Krodha, Unmatta, Kapāla, Bhīṣaṇa, Saṃhāra',
    membersHi: 'असितांग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाल, भीषण, संहार',
    primaryTextsEn: 'Rudrayāmala, Śiva Purāṇa, Kāśī Khaṇḍa, Agni Purāṇa',
    primaryTextsHi: 'रुद्रयामल, शिव पुराण, काशी खण्ड, अग्नि पुराण',
    iconographyEn: 'Paired with 8 animal mounts (Swan, Bull, Peacock, Garuda, Horse, Elephant, Lion, Dog)',
    iconographyHi: '८ वाहनों से युक्त (हंस, वृषभ, मयूर, गरुड़, अश्व, गज, सिंह, श्वान)'
  },
  {
    systemNameEn: 'Chatuḥṣaṣṭi Bhairava (64 Bhairavas)',
    systemNameHi: 'चतुःषष्टि भैरव (६४ भैरव)',
    count: 64,
    canonicalRoleEn: 'The 64 Yoginī Mandala masculine retinue (8 octads developed from 8 Ashta Bhairavas)',
    canonicalRoleHi: 'चौंसठ योगिनी मण्डल के ६४ पुरुष-चैतन्य भैरव (८ अष्टकों में विभक्त)',
    membersEn: '8 groups of 8: Asitāṅga-varga, Ruru-varga, Caṇḍa-varga, Krodha-varga, etc.',
    membersHi: '८ अष्टक: असितांग-वर्ग, रुरु-वर्ग, चण्ड-वर्ग, क्रोध-वर्ग, उन्मत्त-वर्ग, कपाल-वर्ग, भीषण-वर्ग, संहार-वर्ग',
    primaryTextsEn: 'Tantrāloka, Śrīmatottara Tantra, Bhairava Catuḥṣaṣṭi Nāmāvalī',
    primaryTextsHi: 'तन्त्रालोक, श्रीमतोत्तर तन्त्र, भैरव चतुःषष्टि नामावली',
    iconographyEn: '64 distinct forms representing all 64 Kalās and cosmic sound vibrations',
    iconographyHi: '६४ कलाओं और वर्णमाला के सूक्ष्म नादों के प्रतीक ६४ विग्रह'
  },
  {
    systemNameEn: 'Shakti Peetha Bhairavas (52 Bhairavas)',
    systemNameHi: 'शक्तिपीठ भैरव (५२ शक्तिपीठ भैरव)',
    count: '51 or 52',
    canonicalRoleEn: 'Guardian manifestations of Lord Shiva stationed at each Shakti Peetha where Sati’s body parts fell',
    canonicalRoleHi: 'सती के पावन अंगों के पतन स्थलों (शक्तिपीठों) के रक्षक शिव-स्वरूप',
    membersEn: '52 regional and Agamic guardians beginning with Bhīmalocana up to Sadāśiva',
    membersHi: 'भीमलोचन से आरंभ होकर सदाशिव पर्यन्त ५२ शक्तिपीठ रक्षक भैरव',
    primaryTextsEn: 'Pīṭhanirṇaya, Tantrachūḍāmaṇi, Śiva Purāṇa, Mahābhāgavata Purāṇa, D.C. Sircar',
    primaryTextsHi: 'पीठनिर्णय, तन्त्रचूड़ामणि, शिव पुराण, महाभागवत पुराण, डी.सी. सरकार शोध',
    iconographyEn: 'Directly linked with specific Peetha Goddesses, sacred limbs, and geological seats',
    iconographyHi: 'विशिष्ट शक्तिपीठ देवी, सती के अंग-प्रतीक एवं तीर्थ-क्षेत्र से संबंद्ध'
  }
];

export const BAVAN_BHAIRAVAS_LIST: Bhairava52Item[] = [
  {
    index: 1,
    id: 'bhimalochana',
    nameHi: 'भीमलोचन',
    nameEn: 'Bhimalochana',
    devotionalMantra: 'ॐ श्री भीमलोचन भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhimalochana Bhairavaya Namah',
    peethaEn: 'Hingula (Hinglaj)',
    peethaHi: 'हिंगुला (हिंगलाज)',
    goddessEn: 'Kottari',
    goddessHi: 'कोट्टरी',
    bodyPartEn: 'Brahmandharandhra (Crown of Head)',
    bodyPartHi: 'ब्रह्माण्डरन्ध्र (शिरोभाग)',
    locationEn: 'Lasbela, Balochistan, Pakistan',
    locationHi: 'लासबेला, बलूचिस्तान'
  },
  {
    index: 2,
    id: 'krodhisha',
    nameHi: 'क्रोधीश',
    nameEn: 'Krodhisha',
    devotionalMantra: 'ॐ श्री क्रोधीश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Krodhisha Bhairavaya Namah',
    peethaEn: 'Sharkarare (Karavira)',
    peethaHi: 'शर्करारे (करवीर)',
    goddessEn: 'Mahishamardini',
    goddessHi: 'महिषमर्दिनी',
    bodyPartEn: 'Three Eyes (Trinetra)',
    bodyPartHi: 'त्रिनेत्र',
    locationEn: 'Near Sukkur, Sindh, Pakistan',
    locationHi: 'सुक्कुर, सिन्ध'
  },
  {
    index: 3,
    id: 'tryambaka',
    nameHi: 'त्र्यम्बक',
    nameEn: 'Tryambaka',
    devotionalMantra: 'ॐ श्री त्र्यम्बक भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Tryambaka Bhairavaya Namah',
    peethaEn: 'Sugandha (Shikarpur)',
    peethaHi: 'सुगन्धा (शिकारपुर)',
    goddessEn: 'Sunanda / Ugratara',
    goddessHi: 'सुनन्दा / उग्रतारा',
    bodyPartEn: 'Nose (Nasika)',
    bodyPartHi: 'नासिका (नाक)',
    locationEn: 'Barisal, Bangladesh',
    locationHi: 'बरिशाल, बांग्लादेश'
  },
  {
    index: 4,
    id: 'trisandhyeshwara',
    nameHi: 'त्रिसन्ध्येश्वर',
    nameEn: 'Trisandhyeshwara',
    devotionalMantra: 'ॐ श्री त्रिसन्ध्येश्वर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Trisandhyeshwara Bhairavaya Namah',
    peethaEn: 'Kashmir (Amarnath)',
    peethaHi: 'कश्मीर (अमरनाथ)',
    goddessEn: 'Mahamaya',
    goddessHi: 'महामाया',
    bodyPartEn: 'Neck (Kantha)',
    bodyPartHi: 'कण्ठ (गला)',
    locationEn: 'Amarnath Cave, Jammu & Kashmir',
    locationHi: 'अमरनाथ गुफा, कश्मीर'
  },
  {
    index: 5,
    id: 'unmatta',
    nameHi: 'उन्मत्त',
    nameEn: 'Unmatta',
    devotionalMantra: 'ॐ श्री उन्मत्त भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Unmatta Bhairavaya Namah',
    peethaEn: 'Jwalamukhi',
    peethaHi: 'ज्वालामुखी',
    goddessEn: 'Siddhada (Ambika)',
    goddessHi: 'सिद्धिदा (अम्बिका)',
    bodyPartEn: 'Tongue (Jihva)',
    bodyPartHi: 'जिह्वा (जीभ)',
    locationEn: 'Kangra, Himachal Pradesh',
    locationHi: 'कांगड़ा, हिमाचल प्रदेश'
  },
  {
    index: 6,
    id: 'bhishana',
    nameHi: 'भीषण',
    nameEn: 'Bhishana',
    devotionalMantra: 'ॐ श्री भीषण भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhishana Bhairavaya Namah',
    peethaEn: 'Jalandhara',
    peethaHi: 'जालन्धर',
    goddessEn: 'Tripuramalini',
    goddessHi: 'त्रिपुरमालिनी',
    bodyPartEn: 'Left Breast (Vama Stana)',
    bodyPartHi: 'वाम स्तन',
    locationEn: 'Jalandhar, Punjab',
    locationHi: 'जालंधर, पंजाब'
  },
  {
    index: 7,
    id: 'vaidyanatha',
    nameHi: 'वैद्यनाथ',
    nameEn: 'Vaidyanatha',
    devotionalMantra: 'ॐ श्री वैद्यनाथ भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Vaidyanatha Bhairavaya Namah',
    peethaEn: 'Vaidyanatha (Deoghar)',
    peethaHi: 'वैद्यनाथ (देवघर)',
    goddessEn: 'Jayadurga',
    goddessHi: 'जयदुर्गा',
    bodyPartEn: 'Heart (Hridaya)',
    bodyPartHi: 'हृदय',
    locationEn: 'Deoghar, Jharkhand',
    locationHi: 'देवघर, झारखंड'
  },
  {
    index: 8,
    id: 'kapali',
    nameHi: 'कपाली',
    nameEn: 'Kapali',
    devotionalMantra: 'ॐ श्री कपाली भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Kapali Bhairavaya Namah',
    peethaEn: 'Nepal (Guhyeshwari)',
    peethaHi: 'नेपाल (गुह्येश्वरी)',
    goddessEn: 'Mahamaya (Guhyeshwari)',
    goddessHi: 'महामाया (गुह्येश्वरी)',
    bodyPartEn: 'Both Knees (Janu-yugma)',
    bodyPartHi: 'दोनों घुटने (जानु)',
    locationEn: 'Kathmandu, Nepal',
    locationHi: 'काठमांडू, नेपाल'
  },
  {
    index: 9,
    id: 'amara',
    nameHi: 'अमर',
    nameEn: 'Amara',
    devotionalMantra: 'ॐ श्री अमर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Amara Bhairavaya Namah',
    peethaEn: 'Manasa (Kailash)',
    peethaHi: 'मानस (कैलास)',
    goddessEn: 'Dakshayani',
    goddessHi: 'दाक्षायणी',
    bodyPartEn: 'Right Hand (Dakshina Hasta)',
    bodyPartHi: 'दाहिना हाथ',
    locationEn: 'Lake Manasarovar, Tibet',
    locationHi: 'मानसरोवर, तिब्बत'
  },
  {
    index: 10,
    id: 'jagannatha',
    nameHi: 'जगन्नाथ',
    nameEn: 'Jagannatha',
    devotionalMantra: 'ॐ श्री जगन्नाथ भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Jagannatha Bhairavaya Namah',
    peethaEn: 'Utkala / Viraja (Puri)',
    peethaHi: 'उत्कल / विरजा (पुरी)',
    goddessEn: 'Vimala',
    goddessHi: 'विमला',
    bodyPartEn: 'Navel (Nabhi)',
    bodyPartHi: 'नाभि',
    locationEn: 'Puri / Jajpur, Odisha',
    locationHi: 'पुरी / जाजपुर, ओडिशा'
  },
  {
    index: 11,
    id: 'chakrapani',
    nameHi: 'चक्रपाणि',
    nameEn: 'Chakrapani',
    devotionalMantra: 'ॐ श्री चक्रपाणि भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Chakrapani Bhairavaya Namah',
    peethaEn: 'Gandaki (Muktinath)',
    peethaHi: 'गण्डकी (मुक्तिनाथ)',
    goddessEn: 'Gandaki Chandi',
    goddessHi: 'गण्डकी चण्डी',
    bodyPartEn: 'Cheek / Forehead (Gandasthala)',
    bodyPartHi: 'गण्डस्थल (कपोल)',
    locationEn: 'Muktinath, Nepal',
    locationHi: 'मुक्तिनाथ, नेपाल'
  },
  {
    index: 12,
    id: 'bhiruka',
    nameHi: 'भीरुक',
    nameEn: 'Bhiruka',
    devotionalMantra: 'ॐ श्री भीरुक भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhiruka Bhairavaya Namah',
    peethaEn: 'Bahula',
    peethaHi: 'बहुला',
    goddessEn: 'Bahula',
    goddessHi: 'बहुला',
    bodyPartEn: 'Left Arm (Vama Bahu)',
    bodyPartHi: 'वाम बाहु',
    locationEn: 'Ketugram, Purba Bardhaman, WB',
    locationHi: 'केतुग्राम, बर्धमान'
  },
  {
    index: 13,
    id: 'mangalachandikesha',
    nameHi: 'मङ्गलचण्डिकेश',
    nameEn: 'Mangalachandikesha',
    devotionalMantra: 'ॐ श्री मङ्गलचण्डिकेश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Mangalachandikesha Bhairavaya Namah',
    peethaEn: 'Ujjayini (Ujani)',
    peethaHi: 'उज्जयिनी (उजानी)',
    goddessEn: 'Mangalachandika',
    goddessHi: 'मंगलचण्डिका',
    bodyPartEn: 'Right Wrist / Elbow (Kurpara)',
    bodyPartHi: 'कूर्पर (कोहनी)',
    locationEn: 'Gushkara, Bardhaman, WB',
    locationHi: 'गुशकरा, बर्धमान'
  },
  {
    index: 14,
    id: 'chandrashekhara',
    nameHi: 'चन्द्रशेखर',
    nameEn: 'Chandrashekhara',
    devotionalMantra: 'ॐ श्री चन्द्रशेखर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Chandrashekhara Bhairavaya Namah',
    peethaEn: 'Chattala (Sitakunda)',
    peethaHi: 'चट्टल (सीताकुण्ड)',
    goddessEn: 'Bhavani',
    goddessHi: 'भवानी',
    bodyPartEn: 'Right Arm (Dakshina Bahu)',
    bodyPartHi: 'दक्षिण बाहु',
    locationEn: 'Sitakunda, Chittagong, Bangladesh',
    locationHi: 'सीताकुण्ड, चटगांव'
  },
  {
    index: 15,
    id: 'tripuresha',
    nameHi: 'त्रिपुरेश',
    nameEn: 'Tripuresha',
    devotionalMantra: 'ॐ श्री त्रिपुरेश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Tripuresha Bhairavaya Namah',
    peethaEn: 'Tripura (Matabari)',
    peethaHi: 'त्रिपुरा (माताबाड़ी)',
    goddessEn: 'Tripurasundari',
    goddessHi: 'त्रिपुरसुन्दरी',
    bodyPartEn: 'Right Foot (Dakshina Pada)',
    bodyPartHi: 'दाहिना पैर (दक्षिण पाद)',
    locationEn: 'Udaipur, Tripura',
    locationHi: 'उदयपुर, त्रिपुरा'
  },
  {
    index: 16,
    id: 'nimisha',
    nameHi: 'निमिष',
    nameEn: 'Nimisha',
    devotionalMantra: 'ॐ श्री निमिष भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Nimisha Bhairavaya Namah',
    peethaEn: 'Trisrota (Jalpaiguri)',
    peethaHi: 'त्रिस्रोता (जलपाईगुड़ी)',
    goddessEn: 'Bhramari Devi',
    goddessHi: 'भ्रामरी देवी',
    bodyPartEn: 'Left Foot (Vama Pada)',
    bodyPartHi: 'बायाँ पैर (वाम पाद)',
    locationEn: 'Jalpaiguri, West Bengal',
    locationHi: 'जलपाईगुड़ी, प. बंगाल'
  },
  {
    index: 17,
    id: 'umananda',
    nameHi: 'उमानन्द',
    nameEn: 'Umananda',
    devotionalMantra: 'ॐ श्री उमानन्द भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Umananda Bhairavaya Namah',
    peethaEn: 'Kamarupa (Kamakhya)',
    peethaHi: 'कामरूप (कामाख्या)',
    goddessEn: 'Kamakhya',
    goddessHi: 'कामाख्या',
    bodyPartEn: 'Yoni (Sacred Genital Seat)',
    bodyPartHi: 'योनि महामुद्रा',
    locationEn: 'Nilachal Hill, Guwahati, Assam',
    locationHi: 'नीलाचल, गुवाहाटी, असम'
  },
  {
    index: 18,
    id: 'abhiru',
    nameHi: 'अभिरु',
    nameEn: 'Abhiru',
    devotionalMantra: 'ॐ श्री अभिरु भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Abhiru Bhairavaya Namah',
    peethaEn: 'Kshiragrama (Yugadya)',
    peethaHi: 'क्षीरग्राम (योगाद्या)',
    goddessEn: 'Yugadya / Bhutadhatri',
    goddessHi: 'योगाद्या / भूतधात्री',
    bodyPartEn: 'Great Toe of Right Foot',
    bodyPartHi: 'दक्षिण पादांगुष्ठ (अँगूठा)',
    locationEn: 'Burdwan district, West Bengal',
    locationHi: 'वर्धमान, प. बंगाल'
  },
  {
    index: 19,
    id: 'nakulisha',
    nameHi: 'नकुलीश',
    nameEn: 'Nakulisha',
    devotionalMantra: 'ॐ श्री नकुलीश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Nakulisha Bhairavaya Namah',
    peethaEn: 'Kalighat (Kolkata)',
    peethaHi: 'कालीघाट (कोलकाता)',
    goddessEn: 'Kalika',
    goddessHi: 'कालिका',
    bodyPartEn: 'Four Toes of Right Foot',
    bodyPartHi: 'दक्षिण पाद की चार अंगुलियाँ',
    locationEn: 'Kolkata, West Bengal',
    locationHi: 'कोलकाता, प. बंगाल'
  },
  {
    index: 20,
    id: 'bhava',
    nameHi: 'भव',
    nameEn: 'Bhava',
    devotionalMantra: 'ॐ श्री भव भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhava Bhairavaya Namah',
    peethaEn: 'Prayaga (Triveni Sangam)',
    peethaHi: 'प्रयाग (त्रिवेणी संगम)',
    goddessEn: 'Lalita / Alopi',
    goddessHi: 'ललिता / अलोपी',
    bodyPartEn: 'Fingers of Hand (Hasta-anguli)',
    bodyPartHi: 'हाथ की अंगुली',
    locationEn: 'Prayagraj, Uttar Pradesh',
    locationHi: 'प्रयागराज, उ.प्र.'
  },
  {
    index: 21,
    id: 'krura',
    nameHi: 'क्रूर',
    nameEn: 'Krura',
    devotionalMantra: 'ॐ श्री क्रूर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Krura Bhairavaya Namah',
    peethaEn: 'Jayanti (Nartiang)',
    peethaHi: 'जयन्ती (नरतियांग)',
    goddessEn: 'Jayanti Devi',
    goddessHi: 'जयन्ती देवी',
    bodyPartEn: 'Left Thigh (Vama Uru)',
    bodyPartHi: 'बायाँ जंघा (वाम ऊरु)',
    locationEn: 'Jaintia Hills, Meghalaya',
    locationHi: 'जयंतिया हिल्स, मेघालय'
  },
  {
    index: 22,
    id: 'sananda',
    nameHi: 'सानन्द',
    nameEn: 'Sananda',
    devotionalMantra: 'ॐ श्री सानन्द भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sananda Bhairavaya Namah',
    peethaEn: 'Kiritakona',
    peethaHi: 'किरीटकोणा',
    goddessEn: 'Vimala / Kiriteshwari',
    goddessHi: 'विमला / किरीटेश्वरी',
    bodyPartEn: 'Diadem / Crown (Kirita)',
    bodyPartHi: 'किरीट (मुकुट)',
    locationEn: 'Murshidabad, West Bengal',
    locationHi: 'मुर्शिदाबाद, प. बंगाल'
  },
  {
    index: 23,
    id: 'dandapani',
    nameHi: 'दण्डपाणि',
    nameEn: 'Dandapani',
    devotionalMantra: 'ॐ श्री दण्डपाणि भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Dandapani Bhairavaya Namah',
    peethaEn: 'Varanasi (Manikarnika)',
    peethaHi: 'वाराणसी (मणिकर्णिका)',
    goddessEn: 'Vishalakshi',
    goddessHi: 'विशालाक्षी',
    bodyPartEn: 'Ear-rings / Kundala',
    bodyPartHi: 'कुण्डल (कर्णाभूषण)',
    locationEn: 'Kashi / Varanasi, UP',
    locationHi: 'काशी, उ.प्र.'
  },
  {
    index: 24,
    id: 'ruru',
    nameHi: 'रुरु',
    nameEn: 'Ruru',
    devotionalMantra: 'ॐ श्री रुरु भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Ruru Bhairavaya Namah',
    peethaEn: 'Kanyashrama (Kanyakumari)',
    peethaHi: 'कन्याश्रम (कन्याकुमारी)',
    goddessEn: 'Sharvani',
    goddessHi: 'शर्वाणी',
    bodyPartEn: 'Back (Prishtha-bhaga)',
    bodyPartHi: 'पृष्ठ-भाग (पीठ)',
    locationEn: 'Kanyakumari, Tamil Nadu',
    locationHi: 'कन्याकुमारी, तमिलनाडु'
  },
  {
    index: 25,
    id: 'sthanu',
    nameHi: 'स्थाणु',
    nameEn: 'Sthanu',
    devotionalMantra: 'ॐ श्री स्थाणु भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sthanu Bhairavaya Namah',
    peethaEn: 'Kurukshetra',
    peethaHi: 'कुरुक्षेत्र',
    goddessEn: 'Savitri / Bhadrakali',
    goddessHi: 'सावित्री / भद्रकाली',
    bodyPartEn: 'Ankle Bone (Gulpha)',
    bodyPartHi: 'गुल्फ (टखना)',
    locationEn: 'Thanesar, Haryana',
    locationHi: 'थानेसर, हरियाणा'
  },
  {
    index: 26,
    id: 'shambarananda',
    nameHi: 'शम्बरानन्द',
    nameEn: 'Shambarananda',
    devotionalMantra: 'ॐ श्री शम्बरानन्द भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Shambarananda Bhairavaya Namah',
    peethaEn: 'Manivedika (Pushkar)',
    peethaHi: 'मणिवेदिका (पुष्कर)',
    goddessEn: 'Gayatri',
    goddessHi: 'गायत्री',
    bodyPartEn: 'Two Wrists (Mani-bandha)',
    bodyPartHi: 'मणिबन्ध (कलाई)',
    locationEn: 'Pushkar, Rajasthan',
    locationHi: 'पुष्कर, राजस्थान'
  },
  {
    index: 27,
    id: 'sundarananda',
    nameHi: 'सुन्दरानन्द',
    nameEn: 'Sundarananda',
    devotionalMantra: 'ॐ श्री सुन्दरानन्द भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sundarananda Bhairavaya Namah',
    peethaEn: 'Shrishaila / Shrihatta',
    peethaHi: 'श्रीशैल / श्रीहट्ट',
    goddessEn: 'Mahalakshmi',
    goddessHi: 'महालक्ष्मी',
    bodyPartEn: 'Neck (Griva)',
    bodyPartHi: 'ग्रीवा (गर्दन)',
    locationEn: 'Sylhet, Bangladesh',
    locationHi: 'सिलहट, बांग्लादेश'
  },
  {
    index: 28,
    id: 'vedagarbha',
    nameHi: 'वेदगर्भ',
    nameEn: 'Vedagarbha',
    devotionalMantra: 'ॐ श्री वेदगर्भ भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Vedagarbha Bhairavaya Namah',
    peethaEn: 'Kanchi / Kankalitala',
    peethaHi: 'कांची / कंकालीतला',
    goddessEn: 'Devagarbha / Kankali',
    goddessHi: 'देवगर्भा / कंकाली',
    bodyPartEn: 'Skeleton / Bone (Kankala)',
    bodyPartHi: 'कंकाल (अस्थि)',
    locationEn: 'Bolpur, Birbhum, West Bengal',
    locationHi: 'बोलपुर, बीरभूम'
  },
  {
    index: 29,
    id: 'lambakarna',
    nameHi: 'लम्बकर्ण',
    nameEn: 'Lambakarna',
    devotionalMantra: 'ॐ श्री लम्बकर्ण भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Lambakarna Bhairavaya Namah',
    peethaEn: 'Ramagiri (Chitrakoot)',
    peethaHi: 'रामगिरि (चित्रकूट)',
    goddessEn: 'Shivani',
    goddessHi: 'शिवानी',
    bodyPartEn: 'Right Breast (Dakshina Stana)',
    bodyPartHi: 'दाहिना स्तन',
    locationEn: 'Chitrakoot / Maihar, MP',
    locationHi: 'चित्रकूट / मैहर'
  },
  {
    index: 30,
    id: 'bhutesha',
    nameHi: 'भूतेश',
    nameEn: 'Bhutesha',
    devotionalMantra: 'ॐ श्री भूतेश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhutesha Bhairavaya Namah',
    peethaEn: 'Vrindavana',
    peethaHi: 'वृन्दावन',
    goddessEn: 'Uma / Katyayani',
    goddessHi: 'उमा / कात्यायनी',
    bodyPartEn: 'Hair-cluster / Ringlet (Keshapasha)',
    bodyPartHi: 'केशपाश (बालों का गुच्छा)',
    locationEn: 'Vrindavan, Mathura, UP',
    locationHi: 'वृन्दावन, मथुरा'
  },
  {
    index: 31,
    id: 'samhara',
    nameHi: 'संहार',
    nameEn: 'Samhara',
    devotionalMantra: 'ॐ श्री संहार भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Samhara Bhairavaya Namah',
    peethaEn: 'Shuchindra',
    peethaHi: 'शुचीन्द्रम',
    goddessEn: 'Narayani',
    goddessHi: 'नारायणी',
    bodyPartEn: 'Upper Teeth (Urdhva-danta)',
    bodyPartHi: 'ऊपरी दन्त',
    locationEn: 'Suchindram, Kanyakumari, TN',
    locationHi: 'शुचीन्द्रम, तमिलनाडु'
  },
  {
    index: 32,
    id: 'ishana',
    nameHi: 'ईशान',
    nameEn: 'Ishana',
    devotionalMantra: 'ॐ श्री ईशान भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Ishana Bhairavaya Namah',
    peethaEn: 'Panchasagara',
    peethaHi: 'पञ्चसागर',
    goddessEn: 'Varahi',
    goddessHi: 'वाराही',
    bodyPartEn: 'Lower Teeth (Adhodanta)',
    bodyPartHi: 'निचले दाँत',
    locationEn: 'Near Haridwar / Uttaranchal',
    locationHi: 'पञ्चसागर तीर्थ'
  },
  {
    index: 33,
    id: 'amaresha',
    nameHi: 'अमरेश',
    nameEn: 'Amaresha',
    devotionalMantra: 'ॐ श्री अमरेश भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Amaresha Bhairavaya Namah',
    peethaEn: 'Karatoya (Bhavanipur)',
    peethaHi: 'करतोया (भवानीपुर)',
    goddessEn: 'Aparna',
    goddessHi: 'अपर्णा',
    bodyPartEn: 'Left Talus / Anklet (Vama Gulpha)',
    bodyPartHi: 'बायाँ टखना / नूपुर',
    locationEn: 'Bogra district, Bangladesh',
    locationHi: 'बोगरा, बांग्लादेश'
  },
  {
    index: 34,
    id: 'mahabhairava',
    nameHi: 'महाभैरव',
    nameEn: 'Mahabhairava',
    devotionalMantra: 'ॐ श्री महाभैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Mahabhairavaya Namah',
    peethaEn: 'Shriparvata',
    peethaHi: 'श्रीपर्वत',
    goddessEn: 'Shrisundari',
    goddessHi: 'श्रीसुन्दरी',
    bodyPartEn: 'Right Ankle (Dakshina Gulpha)',
    bodyPartHi: 'दाहिना टखना',
    locationEn: 'Srisailam, Andhra Pradesh',
    locationHi: 'श्रीशैलम, आन्ध्र प्रदेश'
  },
  {
    index: 35,
    id: 'vakranatha',
    nameHi: 'वक्रनाथ',
    nameEn: 'Vakranatha',
    devotionalMantra: 'ॐ श्री वक्रनाथ भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Vakranatha Bhairavaya Namah',
    peethaEn: 'Vakreshwara',
    peethaHi: 'वक्रेश्वर',
    goddessEn: 'Mahishamardini',
    goddessHi: 'महिषमर्दिनी',
    bodyPartEn: 'Mind / Mid-eyebrow (Bhrumadhya)',
    bodyPartHi: 'भ्रूमध्य / मन',
    locationEn: 'Birbhum, West Bengal',
    locationHi: 'बीरभूम, प. बंगाल'
  },
  {
    index: 36,
    id: 'vijaya',
    nameHi: 'विजय',
    nameEn: 'Vijaya',
    devotionalMantra: 'ॐ श्री विजय भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Vijaya Bhairavaya Namah',
    peethaEn: 'Bhairavaparvata',
    peethaHi: 'भैरवपर्वत',
    goddessEn: 'Avanti',
    goddessHi: 'अवन्ती',
    bodyPartEn: 'Upper Lip (Urdhva Oshtha)',
    bodyPartHi: 'ऊपरी ओष्ठ',
    locationEn: 'Shipra Bank, Ujjain, MP',
    locationHi: 'उज्जैन, मध्य प्रदेश'
  },
  {
    index: 37,
    id: 'achyuta',
    nameHi: 'अच्युत',
    nameEn: 'Achyuta',
    devotionalMantra: 'ॐ श्री अच्युत भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Achyuta Bhairavaya Namah',
    peethaEn: 'Janasthana (Nashik)',
    peethaHi: 'जनस्थान (नासिक)',
    goddessEn: 'Bhramari Devi',
    goddessHi: 'भ्रामरी देवी',
    bodyPartEn: 'Chin (Chibuka)',
    bodyPartHi: 'चिबुक (ठोड़ी)',
    locationEn: 'Panchavati, Nashik, Maharashtra',
    locationHi: 'पंचवटी, नासिक'
  },
  {
    index: 38,
    id: 'sarvananda',
    nameHi: 'सर्वानन्द',
    nameEn: 'Sarvananda',
    devotionalMantra: 'ॐ श्री सर्वानन्द भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sarvananda Bhairavaya Namah',
    peethaEn: 'Magadha (Patna)',
    peethaHi: 'मगध (पटना)',
    goddessEn: 'Sarvanandakari',
    goddessHi: 'सर्वानन्दकरी',
    bodyPartEn: 'Right Thigh (Dakshina Uru)',
    bodyPartHi: 'दाहिना जंघा',
    locationEn: 'Patna, Bihar',
    locationHi: 'पटना, बिहार'
  },
  {
    index: 39,
    id: 'kapalabhrut',
    nameHi: 'कपालभृत्',
    nameEn: 'Kapalabhrut',
    devotionalMantra: 'ॐ श्री कपालभृत् भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Kapalabhrut Bhairavaya Namah',
    peethaEn: 'Mithila (Janakpur)',
    peethaHi: 'मिथिला (जनकपुर)',
    goddessEn: 'Uma Devi',
    goddessHi: 'उमा देवी',
    bodyPartEn: 'Left Shoulder (Vama Skandha)',
    bodyPartHi: 'वाम स्कन्ध (बायाँ कंधा)',
    locationEn: 'Janakpur, Nepal-Bihar Border',
    locationHi: 'जनकपुर, मिथिला'
  },
  {
    index: 40,
    id: 'shambhu',
    nameHi: 'शम्भु',
    nameEn: 'Shambhu',
    devotionalMantra: 'ॐ श्री शम्भु भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Shambhu Bhairavaya Namah',
    peethaEn: 'Nalahati',
    peethaHi: 'नलहाटी',
    goddessEn: 'Kalika',
    goddessHi: 'कालिका',
    bodyPartEn: 'Tubular Bone / Nala (Vocal Chord)',
    bodyPartHi: 'नली (स्वर-नली / श्वासनली)',
    locationEn: 'Birbhum, West Bengal',
    locationHi: 'बीरभूम, प. बंगाल'
  },
  {
    index: 41,
    id: 'kala',
    nameHi: 'काल',
    nameEn: 'Kala',
    devotionalMantra: 'ॐ श्री काल भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Kala Bhairavaya Namah',
    peethaEn: 'Karnat',
    peethaHi: 'कर्णाट',
    goddessEn: 'Jayadurga',
    goddessHi: 'जयदुर्गा',
    bodyPartEn: 'Both Ears (Karna-yugma)',
    bodyPartHi: 'दोनों कान',
    locationEn: 'Karnataka Region',
    locationHi: 'कर्नाटक प्रदेश'
  },
  {
    index: 42,
    id: 'mahakala',
    nameHi: 'महाकाल',
    nameEn: 'Mahakala',
    devotionalMantra: 'ॐ श्री महाकाल भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Mahakala Bhairavaya Namah',
    peethaEn: 'Vakreshwara (Thermal Axis)',
    peethaHi: 'वक्रेश्वर (अग्नि अक्ष)',
    goddessEn: 'Mahishamardini',
    goddessHi: 'महिषमर्दिनी',
    bodyPartEn: 'Transcendental Awareness (Citta)',
    bodyPartHi: 'चित्-तत्त्व',
    locationEn: 'Birbhum / Ujjain',
    locationHi: 'उज्जयिनी / बीरभूम'
  },
  {
    index: 43,
    id: 'batuka',
    nameHi: 'बटुक',
    nameEn: 'Batuka',
    devotionalMantra: 'ॐ श्री बटुक भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Batuka Bhairavaya Namah',
    peethaEn: 'Yashora (Ishwaripur)',
    peethaHi: 'यशोर (ईश्वरीपुर)',
    goddessEn: 'Yashoreshwari',
    goddessHi: 'यशोरेश्वरी',
    bodyPartEn: 'Hands & Feet (Pani-Padma)',
    bodyPartHi: 'पाणि-पद्म (हस्त एवं पाद)',
    locationEn: 'Satkhira, Bangladesh',
    locationHi: 'सातखीरा, बांग्लादेश'
  },
  {
    index: 44,
    id: 'trilocana',
    nameHi: 'त्रिलोचन',
    nameEn: 'Trilocana',
    devotionalMantra: 'ॐ श्री त्रिलोचन भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Trilocana Bhairavaya Namah',
    peethaEn: 'Attahasa (Labhpur)',
    peethaHi: 'अट्टहास (लाभपुर)',
    goddessEn: 'Phullara Devi',
    goddessHi: 'फुल्लरा देवी',
    bodyPartEn: 'Lips (Adhara-Oshtha)',
    bodyPartHi: 'ओष्ठ (होंठ)',
    locationEn: 'Labhpur, Birbhum, West Bengal',
    locationHi: 'लाभपुर, बीरभूम'
  },
  {
    index: 45,
    id: 'sushena',
    nameHi: 'सुषेण',
    nameEn: 'Sushena',
    devotionalMantra: 'ॐ श्री सुषेण भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sushena Bhairavaya Namah',
    peethaEn: 'Nandipura (Sainthia)',
    peethaHi: 'नन्दीपुर (सैंथिया)',
    goddessEn: 'Nandini',
    goddessHi: 'नन्दिनी',
    bodyPartEn: 'Necklace / Collarbone (Kanthahara)',
    bodyPartHi: 'कण्ठहार (हार)',
    locationEn: 'Sainthia, Birbhum, West Bengal',
    locationHi: 'सैंथिया, बीरभूम'
  },
  {
    index: 46,
    id: 'bhishanaka',
    nameHi: 'भीषणक',
    nameEn: 'Bhishanaka',
    devotionalMantra: 'ॐ श्री भीषणक भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Bhishanaka Bhairavaya Namah',
    peethaEn: 'Lanka (Nainativu)',
    peethaHi: 'लंका (नयिनातीवु)',
    goddessEn: 'Indrakshi',
    goddessHi: 'इन्द्राक्षी',
    bodyPartEn: 'Anklet (Nupura)',
    bodyPartHi: 'नूपुर (पायल)',
    locationEn: 'Nainativu Island, Sri Lanka',
    locationHi: 'नयिनातीवु, श्रीलंका'
  },
  {
    index: 47,
    id: 'aja',
    nameHi: 'अज',
    nameEn: 'Aja',
    devotionalMantra: 'ॐ श्री अज भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Aja Bhairavaya Namah',
    peethaEn: 'Virata (Bairat)',
    peethaHi: 'विराट (बैराठ)',
    goddessEn: 'Ambika',
    goddessHi: 'अम्बिका',
    bodyPartEn: 'Left Toes (Vama Padanguli)',
    bodyPartHi: 'बाएँ पाँव की उँगलियाँ',
    locationEn: 'Bairat, Jaipur, Rajasthan',
    locationHi: 'बैराठ, जयपुर, राजस्थान'
  },
  {
    index: 48,
    id: 'hara',
    nameHi: 'हर',
    nameEn: 'Hara',
    devotionalMantra: 'ॐ श्री हर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Hara Bhairavaya Namah',
    peethaEn: 'Godavaritira (Kotilingeshwara)',
    peethaHi: 'गोदावरीतीर (कोटिशेश्वर)',
    goddessEn: 'Vishveshi',
    goddessHi: 'विश्वेशी',
    bodyPartEn: 'Left Cheek (Vama Ganda)',
    bodyPartHi: 'बायाँ कपोल (गाल)',
    locationEn: 'Rajahmundry, Andhra Pradesh',
    locationHi: 'राजामुन्द्री, आन्ध्र प्रदेश'
  },
  {
    index: 49,
    id: 'shuli',
    nameHi: 'शूली',
    nameEn: 'Shuli',
    devotionalMantra: 'ॐ श्री शूली भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Shuli Bhairavaya Namah',
    peethaEn: 'Ratnavali (Hooghly)',
    peethaHi: 'रत्नावली (हुगली)',
    goddessEn: 'Kumari',
    goddessHi: 'कुमारी',
    bodyPartEn: 'Right Shoulder (Dakshina Skandha)',
    bodyPartHi: 'दाहिना कन्धा',
    locationEn: 'Khanakul, Hooghly, West Bengal',
    locationHi: 'हुगली, प. बंगाल'
  },
  {
    index: 50,
    id: 'mundi',
    nameHi: 'मुण्डी',
    nameEn: 'Mundi',
    devotionalMantra: 'ॐ श्री मुण्डी भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Mundi Bhairavaya Namah',
    peethaEn: 'Prabhas (Somnath)',
    peethaHi: 'प्रभास (सोमनाथ)',
    goddessEn: 'Chandrabhaga',
    goddessHi: 'चन्द्रभागा',
    bodyPartEn: 'Stomach / Udara',
    bodyPartHi: 'उदर (पेट)',
    locationEn: 'Somnath / Veraval, Gujarat',
    locationHi: 'सोमनाथ, गुजरात'
  },
  {
    index: 51,
    id: 'rakshaseshwara',
    nameHi: 'राक्षसेश्वर',
    nameEn: 'Rakshaseshwara',
    devotionalMantra: 'ॐ श्री राक्षसेश्वर भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Rakshaseshwara Bhairavaya Namah',
    peethaEn: 'Vibhasha (Tamluk)',
    peethaHi: 'विभाष (तामलुक)',
    goddessEn: 'Kapalini / Bhimarupa',
    goddessHi: 'कपालिनी / भीमरूपा',
    bodyPartEn: 'Left Ankle (Vama Gulpha)',
    bodyPartHi: 'बायाँ टखना (गुल्फ)',
    locationEn: 'Tamluk, Purba Medinipur, WB',
    locationHi: 'तामलुक, प. बंगाल'
  },
  {
    index: 52,
    id: 'sadashiva',
    nameHi: 'सदाशिव',
    nameEn: 'Sadashiva',
    devotionalMantra: 'ॐ श्री सदाशिव भैरवाय नमः॥',
    devotionalMantraPhonetic: 'Om Shri Sadashiva Bhairavaya Namah',
    peethaEn: 'Danteshwari Peetha (Bastar)',
    peethaHi: 'दन्तेश्वरी पीठ (बस्तर)',
    goddessEn: 'Danteshwari Mai',
    goddessHi: 'दन्तेश्वरी माई',
    bodyPartEn: 'Sacred Tooth (Danta)',
    bodyPartHi: 'दन्त (दाँत)',
    locationEn: 'Dantewada, Bastar, Chhattisgarh',
    locationHi: 'दन्तेवाड़ा, बस्तर, छत्तीसगढ़'
  }
];

export const PRIMARY_RESEARCH_REFERENCES = [
  {
    source: 'amazingbharat.com',
    title: '52 Shakti Peethas & their Bhairavas',
    topic: 'Shiva, Tantra art, Mantras & Traditional Peetha-Bhairava concordance'
  },
  {
    source: 'Pavitra Granth / Sanatan Bodh',
    title: 'India For You – 52 Peethas & Guardians',
    topic: 'Regional pilgrimage rosters and traditional Peetha worship practices'
  },
  {
    source: 'Tantravidya.org',
    title: 'Tantra Vidya: Bhairava Sadhana & Sacred Geography',
    topic: 'Esoteric ritual protective circles and Kṣetrapāla installations'
  },
  {
    source: 'French Institute of Pondicherry (IFP)',
    title: 'Indological Manuscript Archive: Śaiva-Śākta Āgamas',
    topic: 'Epigraphical, iconographical, and textual concordances of the Bhairava corpus'
  },
  {
    source: 'Bhairava Catuḥṣaṣṭi Nāmāvalī',
    title: 'The 64 Bhairava Lexicon vs. 52 Peetha Guardians',
    topic: 'Comparative analysis of the 8-octad system vs. the geographical Shakti Peetha roster'
  },
  {
    source: 'D.C. Sircar (The Śākta Pīṭhas)',
    title: 'Critical Textual Edition of Pīṭhanirṇaya',
    topic: 'Academic critical reconstruction of the 51 canonical Peethas from Sanskrit manuscripts'
  }
];

export interface BhairavViraItem {
  index: number;
  nameIAST: string;
  nameDevanagari: string;
  mantraSanskrit: string;
  mantraPhonetic: string;
}

export const BAVAN_BHAIRAVA_VIRAS_52: BhairavViraItem[] = [
  { index: 1, nameIAST: 'Kṣetrapāl Vīr', nameDevanagari: 'क्षेत्रपाल वीर', mantraSanskrit: 'ॐ श्री क्षेत्रपाल वीराय नमः॥', mantraPhonetic: 'Om Shri Kshetrapala Viraya Namah' },
  { index: 2, nameIAST: 'Kapil Vīr', nameDevanagari: 'कपिल वीर', mantraSanskrit: 'ॐ श्री कपिल वीराय नमः॥', mantraPhonetic: 'Om Shri Kapila Viraya Namah' },
  { index: 3, nameIAST: 'Baṭuk Vīr', nameDevanagari: 'बटुक वीर', mantraSanskrit: 'ॐ श्री बटुक वीराय नमः॥', mantraPhonetic: 'Om Shri Batuka Viraya Namah' },
  { index: 4, nameIAST: 'Nṛsiṃha Vīr', nameDevanagari: 'नृसिंह वीर', mantraSanskrit: 'ॐ श्री नृसिंह वीराय नमः॥', mantraPhonetic: 'Om Shri Nrisimha Viraya Namah' },
  { index: 5, nameIAST: 'Gopāl Vīr', nameDevanagari: 'गोपाल वीर', mantraSanskrit: 'ॐ श्री गोपाल वीराय नमः॥', mantraPhonetic: 'Om Shri Gopala Viraya Namah' },
  { index: 6, nameIAST: 'Bhairav Vīr', nameDevanagari: 'भैरव वीर', mantraSanskrit: 'ॐ श्री भैरव वीराय नमः॥', mantraPhonetic: 'Om Shri Bhairava Viraya Namah' },
  { index: 7, nameIAST: 'Garuḍ Vīr', nameDevanagari: 'गरुड़ वीर', mantraSanskrit: 'ॐ श्री गरुड़ वीराय नमः॥', mantraPhonetic: 'Om Shri Garuda Viraya Namah' },
  { index: 8, nameIAST: 'Mahākāl Vīr', nameDevanagari: 'महाकाल वीर', mantraSanskrit: 'ॐ श्री महाकाल वीराय नमः॥', mantraPhonetic: 'Om Shri Mahakala Viraya Namah' },
  { index: 9, nameIAST: 'Kāl Vīr', nameDevanagari: 'काल वीर', mantraSanskrit: 'ॐ श्री काल वीराय नमः॥', mantraPhonetic: 'Om Shri Kala Viraya Namah' },
  { index: 10, nameIAST: 'Svarṇ Vīr', nameDevanagari: 'स्वर्ण वीर', mantraSanskrit: 'ॐ श्री स्वर्ण वीराय नमः॥', mantraPhonetic: 'Om Shri Svarna Viraya Namah' },
  { index: 11, nameIAST: 'Rakta-Svarṇ Vīr', nameDevanagari: 'रक्तस्वर्ण वीर', mantraSanskrit: 'ॐ श्री रक्तस्वर्ण वीराय नमः॥', mantraPhonetic: 'Om Shri Rakta-Svarna Viraya Namah' },
  { index: 12, nameIAST: 'Devasen Vīr', nameDevanagari: 'देवसेन वीर', mantraSanskrit: 'ॐ श्री देवसेन वीराय नमः॥', mantraPhonetic: 'Om Shri Devasena Viraya Namah' },
  { index: 13, nameIAST: 'Ghaṇṭāpath Vīr', nameDevanagari: 'घंटापथ वीर', mantraSanskrit: 'ॐ श्री घंटापथ वीराय नमः॥', mantraPhonetic: 'Om Shri Ghantapatha Viraya Namah' },
  { index: 14, nameIAST: 'Rudra Vīr', nameDevanagari: 'रुद्र वीर', mantraSanskrit: 'ॐ श्री रुद्र वीराय नमः॥', mantraPhonetic: 'Om Shri Rudra Viraya Namah' },
  { index: 15, nameIAST: 'Terāsaṅgh Vīr', nameDevanagari: 'तेरासंघ वीर', mantraSanskrit: 'ॐ श्री तेरासंघ वीराय नमः॥', mantraPhonetic: 'Om Shri Terasangha Viraya Namah' },
  { index: 16, nameIAST: 'Varuṇ Vīr', nameDevanagari: 'वरुण वीर', mantraSanskrit: 'ॐ श्री वरुण वीराय नमः॥', mantraPhonetic: 'Om Shri Varuna Viraya Namah' },
  { index: 17, nameIAST: 'Gandharv Vīr', nameDevanagari: 'गंधर्व वीर', mantraSanskrit: 'ॐ श्री गंधर्व वीराय नमः॥', mantraPhonetic: 'Om Shri Gandharva Viraya Namah' },
  { index: 18, nameIAST: 'Haṃs Vīr', nameDevanagari: 'हंस वीर', mantraSanskrit: 'ॐ श्री हंस वीराय नमः॥', mantraPhonetic: 'Om Shri Hamsa Viraya Namah' },
  { index: 19, nameIAST: 'Launkḍiyā Vīr', nameDevanagari: 'लौन्कडिया वीर', mantraSanskrit: 'ॐ श्री लौन्कडिया वीराय नमः॥', mantraPhonetic: 'Om Shri Launkdiya Viraya Namah' },
  { index: 20, nameIAST: 'Vahi Vīr', nameDevanagari: 'वहि वीर', mantraSanskrit: 'ॐ श्री वहि वीराय नमः॥', mantraPhonetic: 'Om Shri Vahi Viraya Namah' },
  { index: 21, nameIAST: 'Priyamitra Vīr', nameDevanagari: 'प्रियमित्र वीर', mantraSanskrit: 'ॐ श्री प्रियमित्र वीराय नमः॥', mantraPhonetic: 'Om Shri Priyamitra Viraya Namah' },
  { index: 22, nameIAST: 'Kāru Vīr', nameDevanagari: 'कारु वीर', mantraSanskrit: 'ॐ श्री कारु वीराय नमः॥', mantraPhonetic: 'Om Shri Karu Viraya Namah' },
  { index: 23, nameIAST: 'Adṛśya Vīr', nameDevanagari: 'अदृश्य वीर', mantraSanskrit: 'ॐ श्री अदृश्य वीराय नमः॥', mantraPhonetic: 'Om Shri Adrishya Viraya Namah' },
  { index: 24, nameIAST: 'Vallabh Vīr', nameDevanagari: 'वल्लभ वीर', mantraSanskrit: 'ॐ श्री वल्लभ वीराय नमः॥', mantraPhonetic: 'Om Shri Vallabha Viraya Namah' },
  { index: 25, nameIAST: 'Vajra Vīr', nameDevanagari: 'वज्र वीर', mantraSanskrit: 'ॐ श्री वज्र वीराय नमः॥', mantraPhonetic: 'Om Shri Vajra Viraya Namah' },
  { index: 26, nameIAST: 'Mahākālī Vīr', nameDevanagari: 'महाकाली वीर', mantraSanskrit: 'ॐ श्री महाकाली वीराय नमः॥', mantraPhonetic: 'Om Shri Mahakali Viraya Namah' },
  { index: 27, nameIAST: 'Mahālābh Vīr', nameDevanagari: 'महालाभ वीर', mantraSanskrit: 'ॐ श्री महालाभ वीराय नमः॥', mantraPhonetic: 'Om Shri Mahalabha Viraya Namah' },
  { index: 28, nameIAST: 'Tuṅgabhadr Vīr', nameDevanagari: 'तुंगभद्र वीर', mantraSanskrit: 'ॐ श्री तुंगभद्र वीराय नमः॥', mantraPhonetic: 'Om Shri Tungabhadra Viraya Namah' },
  { index: 29, nameIAST: 'Vidyādhar Vīr', nameDevanagari: 'विद्याधर वीर', mantraSanskrit: 'ॐ श्री विद्याधर वीराय नमः॥', mantraPhonetic: 'Om Shri Vidyadhara Viraya Namah' },
  { index: 30, nameIAST: 'Ghaṇṭākarṇ Vīr', nameDevanagari: 'घंटाकर्ण वीर', mantraSanskrit: 'ॐ श्री घंटाकर्ण वीराय नमः॥', mantraPhonetic: 'Om Shri Ghantakarna Viraya Namah' },
  { index: 31, nameIAST: 'Vaidyanāth Vīr', nameDevanagari: 'बैद्यनाथ वीर', mantraSanskrit: 'ॐ श्री बैद्यनाथ वीराय नमः॥', mantraPhonetic: 'Om Shri Vaidyanatha Viraya Namah' },
  { index: 32, nameIAST: 'Vibhīṣaṇ Vīr', nameDevanagari: 'विभीषण वीर', mantraSanskrit: 'ॐ श्री विभीषण वीराय नमः॥', mantraPhonetic: 'Om Shri Vibhishana Viraya Namah' },
  { index: 33, nameIAST: 'Pāhetak Vīr', nameDevanagari: 'फाहेतक वीर', mantraSanskrit: 'ॐ श्री फाहेतक वीराय नमः॥', mantraPhonetic: 'Om Shri Pahetaka Viraya Namah' },
  { index: 34, nameIAST: 'Pitṛ Vīr', nameDevanagari: 'पितृ वीर', mantraSanskrit: 'ॐ श्री पितृ वीराय नमः॥', mantraPhonetic: 'Om Shri Pitri Viraya Namah' },
  { index: 35, nameIAST: 'Khaḍga Vīr', nameDevanagari: 'खड्ग वीर', mantraSanskrit: 'ॐ श्री खड्ग वीराय नमः॥', mantraPhonetic: 'Om Shri Khadga Viraya Namah' },
  { index: 36, nameIAST: 'Nāghasṭ Vīr', nameDevanagari: 'नाघस्ट वीर', mantraSanskrit: 'ॐ श्री नाघस्ट वीराय नमः॥', mantraPhonetic: 'Om Shri Naghasta Viraya Namah' },
  { index: 37, nameIAST: 'Pradyumna Vīr', nameDevanagari: 'प्रदुम्न वीर', mantraSanskrit: 'ॐ श्री प्रदुम्न वीराय नमः॥', mantraPhonetic: 'Om Shri Pradyumna Viraya Namah' },
  { index: 38, nameIAST: 'Śmaśān Vīr', nameDevanagari: 'श्मशान वीर', mantraSanskrit: 'ॐ श्री श्मशान वीराय नमः॥', mantraPhonetic: 'Om Shri Shmashana Viraya Namah' },
  { index: 39, nameIAST: 'Bharudag Vīr', nameDevanagari: 'भरुदग वीर', mantraSanskrit: 'ॐ श्री भरुदग वीराय नमः॥', mantraPhonetic: 'Om Shri Bharudaga Viraya Namah' },
  { index: 40, nameIAST: 'Kāklekar Vīr', nameDevanagari: 'काकेलेकर वीर', mantraSanskrit: 'ॐ श्री काकेलेकर वीराय नमः॥', mantraPhonetic: 'Om Shri Kaklekara Viraya Namah' },
  { index: 41, nameIAST: 'Kaṃphilābh Vīr', nameDevanagari: 'कंफिलाभ वीर', mantraSanskrit: 'ॐ श्री कंफिलाभ वीराय नमः॥', mantraPhonetic: 'Om Shri Kamphilabha Viraya Namah' },
  { index: 42, nameIAST: 'Asthimukh Vīr', nameDevanagari: 'अस्थिमुख वीर', mantraSanskrit: 'ॐ श्री अस्थिमुख वीराय नमः॥', mantraPhonetic: 'Om Shri Asthimukha Viraya Namah' },
  { index: 43, nameIAST: 'Retovedya Vīr', nameDevanagari: 'रेतोवेद्य वीर', mantraSanskrit: 'ॐ श्री रेतोवेद्य वीराय नमः॥', mantraPhonetic: 'Om Shri Retovedya Viraya Namah' },
  { index: 44, nameIAST: 'Nakul Vīr', nameDevanagari: 'नकुल वीर', mantraSanskrit: 'ॐ श्री नकुल वीराय नमः॥', mantraPhonetic: 'Om Shri Nakula Viraya Namah' },
  { index: 45, nameIAST: 'Śaunak Vīr', nameDevanagari: 'शौनक वीर', mantraSanskrit: 'ॐ श्री शौनक वीराय नमः॥', mantraPhonetic: 'Om Shri Shaunaka Viraya Namah' },
  { index: 46, nameIAST: 'Kālmukh', nameDevanagari: 'कालमुख', mantraSanskrit: 'ॐ श्री कालमुख वीराय नमः॥', mantraPhonetic: 'Om Shri Kalmukha Viraya Namah' },
  { index: 47, nameIAST: 'Bhūta Bhairav Vīr', nameDevanagari: 'भूतबैरव वीर', mantraSanskrit: 'ॐ श्री भूतभैरव वीराय नमः॥', mantraPhonetic: 'Om Shri Bhuta Bhairava Viraya Namah' },
  { index: 48, nameIAST: 'Paiśāch Vīr', nameDevanagari: 'पैशाच वीर', mantraSanskrit: 'ॐ श्री पैशाच वीराय नमः॥', mantraPhonetic: 'Om Shri Paishacha Viraya Namah' },
  { index: 49, nameIAST: 'Trimukh Vīr', nameDevanagari: 'त्रिमुख वीर', mantraSanskrit: 'ॐ श्री त्रिमुख वीराय नमः॥', mantraPhonetic: 'Om Shri Trimukha Viraya Namah' },
  { index: 50, nameIAST: 'Ḍachak Vīr', nameDevanagari: 'डचक वीर', mantraSanskrit: 'ॐ श्री डचक वीराय नमः॥', mantraPhonetic: 'Om Shri Dachaka Viraya Namah' },
  { index: 51, nameIAST: 'Aṭṭalād Vīr', nameDevanagari: 'अट्टलाद वीर', mantraSanskrit: 'ॐ श्री अट्टलाद वीराय नमः॥', mantraPhonetic: 'Om Shri Attalada Viraya Namah' },
  { index: 52, nameIAST: 'Vāsamitra Vīr', nameDevanagari: 'वासमित्र वीर', mantraSanskrit: 'ॐ श्री वासमित्र वीराय नमः॥', mantraPhonetic: 'Om Shri Vasamitra Viraya Namah' }
];

export const PEETHA_COMPONENT_STRUCTURE_TABLE = [
  { componentEn: 'Pīṭha', componentHi: 'पीठ (Pīṭha)', descriptionEn: 'Sacred geographical location', descriptionHi: 'पवित्र भौगोलिक स्थान' },
  { componentEn: 'Śakti', componentHi: 'शक्ति (Śakti)', descriptionEn: 'Goddess worshipped at the location', descriptionHi: 'उस स्थान पर पूजित अधिष्ठात्री देवी' },
  { componentEn: 'Bhairava', componentHi: 'भैरव (Bhairava)', descriptionEn: 'Corresponding manifestation of Śiva', descriptionHi: 'संबद्ध शिव-भैरव स्वरूप' },
  { componentEn: 'Satī association', componentHi: 'सती संबद्धता', descriptionEn: 'Body part or ornament associated with the location', descriptionHi: 'उस स्थान से जुड़ा देवी सती का अंग अथवा आभूषण' },
  { componentEn: 'Sacred tradition', componentHi: 'पवित्र परम्परा', descriptionEn: 'Local history, worship, and pilgrimage', descriptionHi: 'स्थानीय इतिहास, उपासना पद्धति एवं तीर्थयात्रा' }
];

export const PEETHA_ENUMERATION_NUMBERS_TABLE = [
  { number: '4', groupingEn: 'Ādi Śakti Pīṭhas', groupingHi: 'आदि शक्तिपीठ (चतुष्पीठ)' },
  { number: '18', groupingEn: 'Aṣṭādaśa Mahā Pīṭhas', groupingHi: 'अष्टादश महापीठ (१८ महापीठ)' },
  { number: '51', groupingEn: 'A widely circulated Tantric Pīṭha enumeration', groupingHi: 'व्यापक रूप से प्रचलित तांत्रिक ५१ शक्तिपीठ गणना' },
  { number: '52', groupingEn: 'A variant enumeration found in some compilations', groupingHi: 'कुछ संकलनों में प्राप्त ५२ शक्तिपीठ गणना' },
  { number: '64', groupingEn: 'A separate Pīṭha enumeration in certain traditions', groupingHi: 'विशिष्ट तांत्रिक परम्पराओं में ६४ पीठ गणना' },
  { number: '108', groupingEn: 'An expanded sacred enumeration', groupingHi: 'विस्तृत १०८ शक्तिपीठ गणना' }
];

export const BAVAN_BHAIRAVA_SECTIONS = [
  {
    headingEn: 'Introduction — Bāvan Bhairava (बावन भैरव): The Sacred Guardians of the Śakti Pīṭhas',
    headingHi: 'प्रस्तावना — बावन भैरव: शक्तिपीठों के पवित्र रक्षक',
    bodyEn:
      'Bāvan Bhairava (बावन भैरव) refers to a traditional grouping of fifty-two Bhairava forms associated in certain Śākta traditions with the fifty-two Śakti Pīṭhas.\n\n' +
      'Bhairava is a fierce and protective manifestation of Lord Śiva. He represents divine protection, the destruction of negativity, the guardianship of sacred spaces, and the power of time and transformation.\n\n' +
      'In the Śakti Pīṭha tradition, every sacred seat of the Goddess is associated with a particular form of Śakti and a corresponding Bhairava. The Goddess represents the divine feminine power, while Bhairava represents the accompanying Śaiva presence and guardianship.\n\n' +
      'The Bāvan Bhairava concept therefore expresses the relationship between Śiva and Śakti across a sacred geography of temples, pilgrimage sites, and spiritual centres.\n\n' +
      'It is important to understand that the number fifty-two is not universally accepted across all Śākta traditions. Lists of Śakti Pīṭhas differ, with traditions and texts referring to 4, 18, 51, 52, 64, 108, and other numbers. Consequently, the names and associations of the Bhairavas also vary.',
    bodyHi:
      'बावन भैरव (Bāvan Bhairava) कतिपय शाक्त परम्पराओं में बावन शक्तिपीठों से संबद्ध भगवान् भैरव के बावन स्वरूपों के पारंपरिक समूह को संदर्भित करता है।\n\n' +
      'भैरव भगवान् शिव के उग्र और रक्षाकारी स्वरूप हैं। वे दैवी संरक्षण, नकारात्मकता के विनाश, पवित्र स्थानों के क्षेत्रपाल-रक्षण तथा काल और रूपांतरण की शक्ति का प्रतिनिधित्व करते हैं।\n\n' +
      'शक्तिपीठ परम्परा में देवी का प्रत्येक पवित्र पीठ शक्ति के एक विशिष्ट स्वरूप और एक संबद्ध भैरव से जुड़ा होता है। देवी दिव्य स्त्री-शक्ति का प्रतिनिधित्व करती हैं, जबकि भैरव सहगामी शैव उपस्थिति और संरक्षकत्व का प्रतिनिधित्व करते हैं।\n\n' +
      'यह समझना महत्त्वपूर्ण है कि बावन (५२) की संख्या सभी शाक्त परम्पराओं में सार्वभौमिक रूप से एकसमान नहीं है। ग्रंथों और परम्पराओं में ४, १८, ५१, ५२, ६४, १०८ आदि संख्याओं का उल्लेख मिलता है, जिसके परिणामस्वरूप भैरवों के नाम और संबंध भी भिन्न होते हैं।'
  },
  {
    headingEn: '1. Who Is Bhairava?',
    headingHi: '१. भैरव कौन हैं? (Who Is Bhairava?)',
    bodyEn:
      'Bhairava (भैरव) is a powerful manifestation of Lord Śiva worshipped throughout Śaiva and Śākta traditions.\n' +
      'The word Bhairava is traditionally associated with divine awe, formidable power, and the destruction of fear. Bhairava is understood through several theological and devotional interpretations.\n\n' +
      '(1) Protector: Guards sacred places, temples, and spiritual territories.\n' +
      '(2) Destroyer: Represents the destruction of ignorance, arrogance, and negative forces.\n' +
      '(3) Guardian of time: Particularly in traditions associated with Kālabhairava.\n' +
      '(4) Lord of transformation: Represents the dissolution of limitations and the transformation of consciousness.\n' +
      '(5) Companion of Śakti: Appears alongside the Goddess in numerous Śākta traditions.\n' +
      '(6) Guardian of sacred boundaries: Associated with the protection of temples and sacred regions.\n\n' +
      'Bhairava and Śiva: Bhairava is not generally understood as a separate god unrelated to Śiva. He is worshipped as a manifestation or form of Śiva. Different traditions describe his manifestations through different names, attributes, directions, powers, and ritual functions.',
    bodyHi:
      'भैरव (Bhairava) भगवान् शिव के एक अत्यंत शक्तिशाली विग्रह हैं जिनकी आराधना शैव और शाक्त दोनों परम्पराओं में की जाती है।\n' +
      '(१) रक्षक (Protector): पवित्र तीर्थों, मंदिरों और आध्यात्मिक क्षेत्रों की रक्षा करते हैं।\n' +
      '(२) संहारक (Destroyer): अज्ञान, अहंकार और आसुरी शक्तियों के विनाश का प्रतिनिधित्व करते हैं।\n' +
      '(३) काल के अधिपति (Guardian of Time): विशेषतः कालभैरव से जुड़ी परम्पराओं में।\n' +
      '(४) रूपांतरण के स्वामी (Lord of Transformation): सीमाओं के विलय और चेतना के ऊर्ध्व रूपांतरण के प्रतीक।\n' +
      '(५) शक्ति के सहचर (Companion of Śakti): अनेक शाक्त परम्पराओं में भगवती के साथ युग्मित रूप में प्रतिष्ठित।\n' +
      '(६) पवित्र सीमाओं के क्षेत्रपाल (Guardian of Sacred Boundaries): मंदिरों और तीर्थ-क्षेत्रों की रक्षा से संबद्ध।\n\n' +
      'भैरव और शिव: भैरव को शिव से पृथक् कोई अन्य देवता नहीं माना जाता, अपितु वे भगवान् शिव के ही पूर्ण एवं उग्र रक्षक स्वरूप हैं।'
  },
  {
    headingEn: '2. The Meaning of Bāvan Bhairava',
    headingHi: '२. बावन भैरव का अर्थ (The Meaning of Bāvan Bhairava)',
    bodyEn:
      'The Sanskrit number fifty-two is Dvāpañcāśat (द्वापञ्चाशत्), while Bāvan (बावन) is its familiar Hindi form.\n' +
      'Bāvan Bhairava refers to a grouping of fifty-two Bhairavas.\n' +
      'In the Śakti Pīṭha-related classification, the number is associated with the sacred seats of the Goddess.\n\n' +
      'Each Pīṭha is traditionally associated with:\n' +
      '(1) Sacred Geographical Location: A consecrated pilgrimage site.\n' +
      '(2) Manifestation of Śakti: A particular form of the Goddess worshipped there.\n' +
      '(3) Satī Relic Association: A body part or ornament associated with the Goddess Satī in the traditional origin narrative.\n' +
      '(4) Corresponding Bhairava: The accompanying Śaiva guardian manifestation.\n' +
      '(5) Local Temple Tradition: Specific regional customs, history, and forms of worship.\n\n' +
      'The Bhairava associated with a Pīṭha may have a distinct name, such as Kālabhairava, Viśveśa, Kapālī, Vakranātha, or another traditional form. These names and associations are not identical across all lists.',
    bodyHi:
      'संस्कृत में बावन की संख्या को "द्वापञ्चाशत्" कहा जाता है और "बावन" इसका प्रचलित हिंदी रूप है।\n' +
      'प्रत्येक शक्तिपीठ पारंपरिक रूप से ५ तत्त्वों से जुड़ा होता है:\n' +
      '(१) पवित्र भौगोलिक स्थान\n' +
      '(२) शक्ति का विशिष्ट स्वरूप\n' +
      '(३) देवी सती का पतित अंग अथवा आभूषण\n' +
      '(४) संबद्ध रक्षक भैरव (जैसे कालभैरव, विश्वेश, कपाली, वक्रनाथ आदि)\n' +
      '(५) स्थानीय मंदिर परम्परा एवं उपासना पद्धति।'
  },
  {
    headingEn: '3. The Origin of the Śakti Pīṭhas',
    headingHi: '३. शक्तिपीठों की उत्पत्ति (The Origin of the Śakti Pīṭhas)',
    bodyEn:
      'The traditional origin of the Śakti Pīṭhas is connected with the story of Goddess Satī and Lord Śiva.\n\n' +
      'The story of Satī: Satī, the daughter of Prajāpati Dakṣa, married Lord Śiva. Dakṣa disapproved of the marriage and organized a great sacrificial ceremony. He invited many divine beings but deliberately excluded Śiva. Despite Śiva’s objections, Satī attended the ceremony. There, she witnessed the disrespect shown toward her husband. Unable to bear the insult, Satī gave up her physical body through yogic fire, according to the traditional narrative.\n\n' +
      'When Śiva learned of her death, he became overwhelmed with grief and carried her body while wandering through the universe. To restore cosmic order, Lord Viṣṇu used his Sudarśana Cakra to divide Satī’s body. The places where her body parts or ornaments are traditionally believed to have fallen became sacred Śakti Pīṭhas.\n\n' +
      'The emergence of the Pīṭha tradition: At these sacred places, the Goddess is worshipped in different manifestations of Śakti. A corresponding Bhairava is also associated with each place. This relationship symbolizes the inseparability of Śiva and Śakti. The Bhairava is understood as the guardian or accompanying divine presence of the Pīṭha, while the Goddess is its presiding Śakti. The specific narrative details and lists differ between textual and regional traditions.',
    bodyHi:
      'शक्तिपीठों की पारंपरिक उत्पत्ति देवी सती और भगवान् शिव की कथा से जुड़ी है।\n\n' +
      'सती की कथा: प्रजापति दक्ष की पुत्री सती ने भगवान् शिव से विवाह किया। दक्ष ने एक विशाल यज्ञ का आयोजन किया और जानबूझकर शिव को आमंत्रित नहीं किया। पति के प्रति अपमान सहन न कर पाने के कारण सती ने योगाग्नि द्वारा अपनी पार्थिव देह का त्याग कर दिया। शोकाकुल शिव सती के पार्थिव शरीर को लेकर ब्रह्माण्ड में भ्रमण करने लगे। सृष्टि-व्यवस्था के संतुलन हेतु भगवान् विष्णु ने अपने सुदर्शन चक्र से सती की देह को विभक्त किया। जहाँ-जहाँ सती के अंग या आभूषण गिरे, वे स्थान पवित्र शक्तिपीठ बन गए।\n\n' +
      'पीठ परम्परा का उदय: इन पवित्र स्थानों पर देवी की विभिन्न शक्ति-स्वरूपों में पूजा होती है और प्रत्येक स्थान के साथ एक संबद्ध भैरव प्रतिष्ठित हैं, जो शिव और शक्ति की अभिन्नता के प्रतीक हैं।'
  },
  {
    headingEn: '4. The Relationship Between the 52 Śakti Pīṭhas and 52 Bhairavas',
    headingHi: '४. ५२ शक्तिपीठों और ५२ भैरवों का पारस्परिक संबंध',
    bodyEn:
      'The Bāvan Bhairava classification is best understood through the relationship between the Goddess and Bhairava at each sacred Pīṭha.\n\n' +
      'A traditional Pīṭha entry contains five core components: Pīṭha (Sacred geographical location), Śakti (Goddess worshipped at the location), Bhairava (Corresponding manifestation of Śiva), Satī association (Body part or ornament associated with the location), and Sacred tradition (Local history, worship, and pilgrimage).\n\n' +
      'For example, certain traditional lists associate:\n' +
      '• Kāmakṣī with Kālabhairava.\n' +
      '• Avanti with Lambakarṇa.\n' +
      '• Mahāmāyā with Trisaṃdhyēśvara.\n' +
      '• Phullarā with Viśveśa.\n' +
      '• Mahālakṣmī of Śrīśaila with Śambarananda.\n\n' +
      'These are examples from particular compilations, not a universal list applicable to every Pīṭha enumeration. The name of a Bhairava can vary depending on the source, regional tradition, and identification of the sacred location.',
    bodyHi:
      'बावन भैरव वर्गीकरण को प्रत्येक पवित्र पीठ पर देवी और भैरव के संबंध के माध्यम से सबसे अच्छी तरह समझा जा सकता है।\n\n' +
      'उदाहरण के लिए, कुछ पारंपरिक सूचियों में निम्नलिखित युग्म मिलते हैं:\n' +
      '• कामाक्षी के साथ कालभैरव।\n' +
      '• अवन्ती के साथ लम्बकर्ण।\n' +
      '• महामाया के साथ त्रिसन्ध्येश्वर।\n' +
      '• फुल्लरा के साथ विश्वेश।\n' +
      '• श्रीशैल की महालक्ष्मी के साथ शम्बरानन्द।\n\n' +
      'ये विशिष्ट संकलनों के उदाहरण हैं; स्रोत, क्षेत्रीय परम्परा और तीर्थ की पहचान के आधार पर भैरव का नाम भिन्न हो सकता है।'
  },
  {
    headingEn: '5. Why Are There Different Numbers of Śakti Pīṭhas?',
    headingHi: '५. शक्तिपीठों की विभिन्न संख्याएँ क्यों हैं? (4, 18, 51, 52, 64, 108)',
    bodyEn:
      'There is no single universally accepted enumeration of Śakti Pīṭhas. Different scriptures, Tantric traditions, regional accounts, and pilgrimage compilations preserve different numbers.\n\n' +
      'Commonly encountered enumerations include:\n' +
      '• 4 — Ādi Śakti Pīṭhas\n' +
      '• 18 — Aṣṭādaśa Mahā Pīṭhas\n' +
      '• 51 — A widely circulated Tantric Pīṭha enumeration\n' +
      '• 52 — A variant enumeration found in some compilations\n' +
      '• 64 — A separate Pīṭha enumeration in certain traditions\n' +
      '• 108 — An expanded sacred enumeration\n\n' +
      'The Pīṭhanirṇaya and related compilations are important sources for studying the names, locations, Śaktis, and Bhairavas associated with the Pīṭhas. A scholarly discussion of Pīṭha enumerations also documents how lists of fifty-one and fifty-two emerged through different compilations and variations. Therefore, the Bāvan Bhairava tradition should be studied within its specific textual and regional context.',
    bodyHi:
      'शक्तिपीठों की कोई एक सर्वमान्य स्थिर संख्या नहीं है। विभिन्न शास्त्रों, तांत्रिक परम्पराओं और क्षेत्रीय विवरणों में अलग-अलग संख्याएँ सुरक्षित हैं:\n' +
      '• ४ — आदि शक्तिपीठ\n' +
      '• १८ — अष्टादश महापीठ\n' +
      '• ५१ — व्यापक रूप से प्रचलित तांत्रिक पीठ गणना\n' +
      '• ५२ — कुछ संकलनों में प्राप्त पाठान्तर गणना\n' +
      '• ६४ — कतिपय परम्पराओं में पृथक् पीठ गणना\n' +
      '• १०८ — विस्तृत पवित्र पीठ गणना\n\n' +
      'पीठनिर्णय और संबंधित ग्रन्थ इन नामों, स्थानों, शक्तियों और भैरवों के अध्ययन के प्रमुख स्रोत हैं।'
  },
  {
    headingEn: '6. The Difference Between Aṣṭa, 52, and 64 Bhairavas',
    headingHi: '६. अष्ट (८), बावन (५२) और चौंसठ (६४) भैरवों में शास्त्रीय अंतर',
    bodyEn:
      'Bhairava appears in several numerical classifications. These classifications should not be confused with one another.\n\n' +
      '(1) Aṣṭa Bhairava — 8 Bhairavas: The Aṣṭa Bhairavas are eight prominent forms of Bhairava, commonly associated with the eight directions. They are: 1. Asitāṅga, 2. Ruru, 3. Caṇḍa, 4. Krodha, 5. Unmatta, 6. Kapāla, 7. Bhīṣaṇa, and 8. Saṃhāra. The exact names, directional assignments, and associated goddesses vary by tradition.\n\n' +
      '(2) Bāvan Bhairava — 52 Bhairavas: A grouping associated in some traditions with the fifty-two Śakti Pīṭhas. Its focus is the relationship between the Goddess, the sacred location, and the corresponding Bhairava.\n\n' +
      '(3) Catuḥṣaṣṭi Bhairava — 64 Bhairavas: Some Tantric classifications describe sixty-four Bhairavas, often organized through eight groups of eight. These represent a separate classification and should not automatically be equated with the fifty-two Bhairavas associated with Śakti Pīṭhas.',
    bodyHi:
      'भैरव कई संख्यात्मक वर्गीकरणों में प्रकट होते हैं। इन्हें एक-दूसरे के साथ मिश्रित नहीं किया जाना चाहिए:\n\n' +
      '(१) अष्ट भैरव (८ भैरव): आठ दिशाओं से संबद्ध भैरव के आठ प्रमुख रूप—१. असितांग, २. रुरु, ३. चण्ड, ४. क्रोध, ५. उन्मत्त, ६. कपाल, ७. भीषण और ८. संहार।\n' +
      '(२) बावन भैरव (५२ भैरव): कतिपय परम्पराओं में बावन शक्तिपीठों से संबद्ध समूह, जिसका केंद्र देवी, तीर्थ-स्थान और रक्षक भैरव का संबंध है।\n' +
      '(३) चतुःषष्टि भैरव (६४ भैरव): तांत्रिक वर्गीकरणों में आठ-आठ के आठ समूहों (८×८) में वर्णित ६४ भैरव, जो ५२ भैरवों से पृथक् वर्गीकरण हैं।'
  },
  {
    headingEn: '7. Spiritual and Symbolic Significance',
    headingHi: '७. आध्यात्मिक एवं प्रतीकात्मक महत्त्व (Spiritual and Symbolic Significance)',
    bodyEn:
      'The Bāvan Bhairava tradition represents the distribution of Śiva’s protective presence across sacred geography. Its symbolism can be explored through five key themes:\n\n' +
      '(1) 7.1 Protection of Śakti: The Bhairava is associated with the protection of the Goddess’s sacred seat.\n' +
      '(2) 7.2 Unity of Śiva and Śakti: The paired presence of Śakti and Bhairava expresses the relationship between consciousness and divine power in Śaiva-Śākta thought.\n' +
      '(3) 7.3 Sacred Geography: The Pīṭhas connect religious mythology with actual geographical locations, pilgrimage routes, and regional worship traditions.\n' +
      '(4) 7.4 Diversity of Divine Manifestations: The different names of Bhairava express the diversity of Śiva’s manifestations across different sacred traditions.\n' +
      '(5) 7.5 Destruction and Protection: Bhairava represents both formidable divine power and the protection of devotees and sacred spaces.',
    bodyHi:
      'बावन भैरव परम्परा पवित्र भूगोल में भगवान् शिव की रक्षात्मक उपस्थिति के विस्तार को दर्शाती है:\n\n' +
      '(१) ७.१ शक्ति का संरक्षण: भैरव देवी के पवित्र पीठ की रक्षा से संबद्ध हैं।\n' +
      '(२) ७.२ शिव और शक्ति की एकता: शक्ति और भैरव की युगल उपस्थिति चेतना (प्रकाश) और दिव्य शक्ति (विमर्श) के संबंध को व्यक्त करती है।\n' +
      '(३) ७.३ पवित्र भूगोल: शक्तिपीठ पौराणिक कथाओं को वास्तविक भौगोलिक तीर्थों और यात्रा-मार्गों से जोड़ते हैं।\n' +
      '(४) ७.४ दिव्य अभिव्यक्तियों की विविधता: भैरव के विभिन्न नाम शिव की अनन्त अभिव्यक्तियों को दर्शाते हैं।\n' +
      '(५) ७.५ संहार और संरक्षण: भैरव प्रचण्ड दैवी शक्ति और भक्तों व तीर्थों की रक्षा दोनों का प्रतिनिधित्व करते हैं।'
  },
  {
    headingEn: '8. Worship and Devotional Traditions',
    headingHi: '८. उपासना एवं भक्ति परम्पराएँ (Worship and Devotional Traditions)',
    bodyEn:
      'Bhairava worship differs between regions and lineages. Common devotional practices in Bhairava traditions may include:\n\n' +
      '• Recitation of Bhairava mantras.\n' +
      '• Worship of Bhairava images and icons.\n' +
      '• Offerings according to local temple customs.\n' +
      '• Observance of Kālabhairava Aṣṭamī.\n' +
      '• Pilgrimage to Bhairava-associated temples.\n' +
      '• Worship of the presiding Goddess and her corresponding Bhairava.\n\n' +
      'Not every practice applies to every Pīṭha or every Bhairava form. Ritual procedures should be described according to the particular temple or lineage rather than generalized.',
    bodyHi:
      'भैरव उपासना विभिन्न क्षेत्रों और परम्पराओं में भिन्न होती है। सामान्य भक्ति पद्धतियों में सम्मिलित हैं:\n' +
      '• भैरव मन्त्रों का जप और पाठ।\n' +
      '• भैरव प्रतिमाओं एवं विग्रहों का पूजन।\n' +
      '• स्थानीय मंदिर रीति के अनुसार नैवेद्य और अर्पण।\n' +
      '• कालभैरव अष्टमी का पर्व-पालन।\n' +
      '• भैरव-संबद्ध मंदिरों और शक्तिपीठों की तीर्थयात्रा।\n' +
      '• अधिष्ठात्री देवी और उनके संबद्ध भैरव की संयुक्त आराधना।'
  },
  {
    headingEn: '9. Important Distinctions & 10. Conclusion',
    headingHi: '९. महत्त्वपूर्ण शोध-भेद एवं १०. निष्कर्ष',
    bodyEn:
      '9. Important Distinctions — The following distinctions are essential for accurate research:\n' +
      '(1) The fifty-two Bhairavas associated with Śakti Pīṭhas are not the same classification as the sixty-four Bhairavas.\n' +
      '(2) Aṣṭa Bhairava is a separate group of eight forms.\n' +
      '(3) The number of Śakti Pīṭhas varies across texts and traditions.\n' +
      '(4) The names of the Bhairavas can differ between Pīṭha lists.\n' +
      '(5) Not every Bhairava name represents an entirely separate theological form of Śiva.\n' +
      '(6) The association of a Bhairava with a Pīṭha should be supported by a specific source.\n' +
      '(7) Regional devotional traditions should not automatically be presented as universally accepted scriptural classifications.\n\n' +
      '10. Conclusion: The Bāvan Bhairava tradition provides an important way to understand the relationship between Bhairava and the sacred geography of Śākta worship. Through the fifty-two Pīṭha-associated Bhairava forms, the tradition expresses the presence of Śiva alongside the many manifestations of the Divine Mother. Rather than viewing the fifty-two Bhairavas as a completely uniform list, they should be understood through the particular Tantric, scriptural, and regional traditions that preserve their names and associations.\n\n' +
      'Research References and Further Reading:\n' +
      '1. Pīṭhanirṇaya / Mahāpīṭhanirūpaṇa — an important textual tradition for studying Śakti Pīṭha names and their associated Śaktis and Bhairavas.\n' +
      '2. Tantra Cūḍāmaṇi — a text associated with widely circulated Pīṭha enumerations.\n' +
      '3. Devī Bhāgavata Purāṇa — relevant to the broader Śākta understanding of the Goddess and sacred Pīṭhas.\n' +
      '4. D. C. Sircar — The Śākta Pīṭhas — historical and textual research on the Śakti Pīṭha tradition.\n' +
      '5. Scholarly research on the historical development and varying enumerations of Śakti Pīṭhas.\n' +
      'Research classification: Traditional and regional groupings; the exact 52-name Bhairava roster and its one-to-one Pīṭha associations must be verified against the specific enumeration being followed.',
    bodyHi:
      '९. महत्त्वपूर्ण शोध-भेद:\n' +
      '(१) शक्तिपीठों से जुड़े ५२ भैरव और ६४ भैरव एक ही वर्गीकरण नहीं हैं।\n' +
      '(२) अष्ट भैरव आठ रूपों का एक पृथक् समूह है।\n' +
      '(३) शक्तिपीठों की संख्या ग्रंथों और परम्पराओं में भिन्न होती है।\n' +
      '(४) विभिन्न पीठ-सूचियों में भैरवों के नाम भिन्न हो सकते हैं।\n' +
      '(५) प्रत्येक भैरव नाम शिव का पूर्णतः अलग दार्शनिक तत्त्व नहीं है।\n' +
      '(६) किसी पीठ के साथ भैरव के संबंध को विशिष्ट स्रोत द्वारा समर्थित होना चाहिए।\n' +
      '(७) क्षेत्रीय भक्ति परम्पराओं को स्वतः सर्वमान्य शास्त्रीय वर्गीकरण के रूप में प्रस्तुत नहीं किया जाना चाहिए।\n\n' +
      '१०. निष्कर्ष एवं प्रमुख शोध संदर्भ:\n' +
      '१. पीठनिर्णय / महापीठनिरूपण, २. तन्त्रचूड़ामणि, ३. देवी भागवत पुराण, ४. डॉ. डी.सी. सरकार — द शाक्त पीठस, ५. शक्तिपीठों के ऐतिहासिक विकास पर अकादमिक शोध।'
  },
  {
    headingEn: '11. 52 Bhairav Vīras — बावन भैरव वीर (Complete 01–52 Roster)',
    headingHi: '११. ५२ भैरव वीर — बावन भैरव वीर (संपूर्ण ०१–५२ नामावली)',
    bodyEn:
      '1. Kṣetrapāl Vīr (क्षेत्रपाल वीर) · 2. Kapil Vīr (कपिल वीर) · 3. Baṭuk Vīr (बटुक वीर) · 4. Nṛsiṃha Vīr (नृसिंह वीर) · 5. Gopāl Vīr (गोपाल वीर) · 6. Bhairav Vīr (भैरव वीर) · 7. Garuḍ Vīr (गरुड़ वीर) · 8. Mahākāl Vīr (महाकाल वीर) · 9. Kāl Vīr (काल वीर) · 10. Svarṇ Vīr (स्वर्ण वीर) · 11. Rakta-Svarṇ Vīr (रक्तस्वर्ण वीर) · 12. Devasen Vīr (देवसेन वीर) · 13. Ghaṇṭāpath Vīr (घंटापथ वीर) · 14. Rudra Vīr (रुद्र वीर) · 15. Terāsaṅgh Vīr (तेरासंघ वीर) · 16. Varuṇ Vīr (वरुण वीर) · 17. Gandharv Vīr (गंधर्व वीर) · 18. Haṃs Vīr (हंस वीर) · 19. Launkḍiyā Vīr (लौन्कडिया वीर) · 20. Vahi Vīr (वहि वीर) · 21. Priyamitra Vīr (प्रियमित्र वीर) · 22. Kāru Vīr (कारु वीर) · 23. Adṛśya Vīr (अदृश्य वीर) · 24. Vallabh Vīr (वल्लभ वीर) · 25. Vajra Vīr (वज्र वीर) · 26. Mahākālī Vīr (महाकाली वीर) · 27. Mahālābh Vīr (महालाभ वीर) · 28. Tuṅgabhadr Vīr (तुंगभद्र वीर) · 29. Vidyādhar Vīr (विद्याधर वीर) · 30. Ghaṇṭākarṇ Vīr (घंटाकर्ण वीर) · 31. Vaidyanāth Vīr (बैद्यनाथ वीर) · 32. Vibhīṣaṇ Vīr (विभीषण वीर) · 33. Pāhetak Vīr (फाहेतक वीर) · 34. Pitṛ Vīr (पितृ वीर) · 35. Khaḍga Vīr (खड्ग वीर) · 36. Nāghasṭ Vīr (नाघस्ट वीर) · 37. Pradyumna Vīr (प्रदुम्न वीर) · 38. Śmaśān Vīr (श्मशान वीर) · 39. Bharudag Vīr (भरुदग वीर) · 40. Kāklekar Vīr (काकेलेकर वीर) · 41. Kaṃphilābh Vīr (कंफिलाभ वीर) · 42. Asthimukh Vīr (अस्थिमुख वीर) · 43. Retovedya Vīr (रेतोवेद्य वीर) · 44. Nakul Vīr (नकुल वीर) · 45. Śaunak Vīr (शौनक वीर) · 46. Kālmukh (कालमुख) · 47. Bhūta Bhairav Vīr (भूतबैरव वीर) · 48. Paiśāch Vīr (पैशाच वीर) · 49. Trimukh Vīr (त्रिमुख वीर) · 50. Ḍachak Vīr (डचक वीर) · 51. Aṭṭalād Vīr (अट्टलाद वीर) · 52. Vāsamitra Vīr (वासमित्र वीर)',
    bodyHi:
      '१. क्षेत्रपाल वीर (Kṣetrapāl Vīr) · २. कपिल वीर (Kapil Vīr) · ३. बटुक वीर (Baṭuk Vīr) · ४. नृसिंह वीर (Nṛsiṃha Vīr) · ५. गोपाल वीर (Gopāl Vīr) · ६. भैरव वीर (Bhairav Vīr) · ७. गरुड़ वीर (Garuḍ Vīr) · ८. महाकाल वीर (Mahākāl Vīr) · ९. काल वीर (Kāl Vīr) · १०. स्वर्ण वीर (Svarṇ Vīr) · ११. रक्तस्वर्ण वीर (Rakta-Svarṇ Vīr) · १२. देवसेन वीर (Devasen Vīr) · १३. घंटापथ वीर (Ghaṇṭāpath Vīr) · १४. रुद्र वीर (Rudra Vīr) · १५. तेरासंघ वीर (Terāsaṅgh Vīr) · १६. वरुण वीर (Varuṇ Vīr) · १७. गंधर्व वीर (Gandharv Vīr) · १८. हंस वीर (Haṃs Vīr) · १९. लौन्कडिया वीर (Launkḍiyā Vīr) · २०. वहि वीर (Vahi Vīr) · २१. प्रियमित्र वीर (Priyamitra Vīr) · २२. कारु वीर (Kāru Vīr) · २३. अदृश्य वीर (Adṛśya Vīr) · २४. वल्लभ वीर (Vallabh Vīr) · २५. वज्र वीर (Vajra Vīr) · २६. महाकाली वीर (Mahākālī Vīr) · २७. महालाभ वीर (Mahālābh Vīr) · २८. तुंगभद्र वीर (Tuṅgabhadr Vīr) · २९. विद्याधर वीर (Vidyādhar Vīr) · ३०. घंटाकर्ण वीर (Ghaṇṭākarṇ Vīr) · ३१. बैद्यनाथ वीर (Vaidyanāth Vīr) · ३२. विभीषण वीर (Vibhīṣaṇ Vīr) · ३३. फाहेतक वीर (Pāhetak Vīr) · ३४. पितृ वीर (Pitṛ Vīr) · ३५. खड्ग वीर (Khaḍga Vīr) · ३६. नाघस्ट वीर (Nāghasṭ Vīr) · ३७. प्रदुम्न वीर (Pradyumna Vīr) · ३८. श्मशान वीर (Śmaśān Vīr) · ३९. भरुदग वीर (Bharudag Vīr) · ४०. काकेलेकर वीर (Kāklekar Vīr) · ४१. कंफिलाभ वीर (Kaṃphilābh Vīr) · ४२. अस्थिमुख वीर (Asthimukh Vīr) · ४३. रेतोवेद्य वीर (Retovedya Vīr) · ४४. नकुल वीर (Nakul Vīr) · ४५. शौनक वीर (Śaunak Vīr) · ४६. कालमुख (Kālmukh) · ४७. भूतबैरव वीर (Bhūta Bhairav Vīr) · ४८. पैशाच वीर (Paiśāch Vīr) · ४९. त्रिमुख वीर (Trimukh Vīr) · ५०. डचक वीर (Ḍachak Vīr) · ५१. अट्टलाद वीर (Aṭṭalād Vīr) · ५२. वासमित्र वीर (Vāsamitra Vīr)'
  }
];

