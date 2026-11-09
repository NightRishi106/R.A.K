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

export const BAVAN_BHAIRAVA_SECTIONS = [
  {
    headingEn: '1. Understanding the 52 Bhairavas',
    headingHi: '१. ५२ भैरवों का शास्त्रीय स्वरूप (Understanding the 52 Bhairavas)',
    bodyEn:
      '• Bhairava is a fierce and protective manifestation of Lord Shiva.\n' +
      '• Each Shakti Peetha is traditionally associated with a guardian Bhairava.\n' +
      '• The Goddess represents Shakti, while Bhairava represents Shiva as the protector of the sacred seat.\n' +
      '• Kaal Bhairava is especially revered as the guardian of Kashi (Varanasi).\n' +
      '• Important textual distinction: The commonly circulated lists contain 51 or 52 Peethas depending on the tradition and recension. The names below follow one published 52-Peetha listing, not a universally fixed canonical roster.\n' +
      '• Source Context: Published via amazingbharat.com (Shiva, Tantra art, Mantras), Tantra Vidya (+2 related recensions), and classical Shakta pilgrimage manuals, this formulation interprets the 52 Bhairavas specifically as the regional protectors of the Shakti Peethas.',
    bodyHi:
      '• भैरव भगवान् शिव के अत्यंत उग्र, तेजस्वी और रक्षाकारी स्वरूप हैं।\n' +
      '• प्रत्येक शक्तिपीठ पारंपरिक रूप से एक रक्षक भैरव से संबंद्ध है।\n' +
      '• देवी उस पवित्र पीठ की "शक्ति" का प्रतिनिधित्व करती हैं, जबकि भैरव उस पीठ के रक्षक के रूप में "शिव" का प्रतिनिधित्व करते हैं।\n' +
      '• काशी (वाराणसी) के रक्षक के रूप में काल भैरव को विशेष रूप से काशी का कोतवाल माना जाता है।\n' +
      '• महत्त्वपूर्ण शास्त्रीय भेद: जनसामान्य में प्रचलित सूचियों में परम्परा और पाठ-भेद के अनुसार ५१ अथवा ५२ पीठ माने जाते हैं। नीचे दी गई नामावली प्रकाशित ५२-पीठ परम्परा का अनुसरण करती है, जो सर्वमान्य स्थिर एकाश्मीय सूची नहीं अपितु बहु-शास्त्रीय पाठ-परम्परा है।'
  },
  {
    headingEn: '2. Complete List: 52 Bhairava Names and Devotional Mantras',
    headingHi: '२. संपूर्ण नामावली: ५२ भैरव नाम एवं भक्ति नाम-मन्त्र (01–52)',
    bodyEn:
      'The following is a devotional reference list. The mantras are simple name-based salutations formed for each Bhairava, not claimed to be independently attested Tantric Mula Mantras.\n\n' +
      '01. भीमलोचन - Bhimalochana\nॐ श्री भीमलोचन भैरवाय नमः॥\nOm Shri Bhimalochana Bhairavaya Namah\n\n' +
      '02. क्रोधीश - Krodhisha\nॐ श्री क्रोधीश भैरवाय नमः॥\nOm Shri Krodhisha Bhairavaya Namah\n\n' +
      '03. त्र्यम्बक - Tryambaka\nॐ श्री त्र्यम्बक भैरवाय नमः॥\nOm Shri Tryambaka Bhairavaya Namah\n\n' +
      '04. त्रिसन्ध्येश्वर - Trisandhyeshwara\nॐ श्री त्रिसन्ध्येश्वर भैरवाय नमः॥\nOm Shri Trisandhyeshwara Bhairavaya Namah\n\n' +
      '05. उन्मत्त - Unmatta\nॐ श्री उन्मत्त भैरवाय नमः॥\nOm Shri Unmatta Bhairavaya Namah\n\n' +
      '06. भीषण - Bhishana\nॐ श्री भीषण भैरवाय नमः॥\nOm Shri Bhishana Bhairavaya Namah\n\n' +
      '07. वैद्यनाथ - Vaidyanatha\nॐ श्री वैद्यनाथ भैरवाय नमः॥\nOm Shri Vaidyanatha Bhairavaya Namah\n\n' +
      '08. कपाली - Kapali\nॐ श्री कपाली भैरवाय नमः॥\nOm Shri Kapali Bhairavaya Namah\n\n' +
      '09. अमर - Amara\nॐ श्री अमर भैरवाय नमः॥\nOm Shri Amara Bhairavaya Namah\n\n' +
      '10. जगन्नाथ - Jagannatha\nॐ श्री जगन्नाथ भैरवाय नमः॥\nOm Shri Jagannatha Bhairavaya Namah\n\n' +
      '11. चक्रपाणि - Chakrapani\nॐ श्री चक्रपाणि भैरवाय नमः॥\nOm Shri Chakrapani Bhairavaya Namah\n\n' +
      '12. भीरुक - Bhiruka\nॐ श्री भीरुक भैरवाय नमः॥\nOm Shri Bhiruka Bhairavaya Namah\n\n' +
      '13. मङ्गलचण्डिकेश - Mangalachandikesha\nॐ श्री मङ्गलचण्डिकेश भैरवाय नमः॥\nOm Shri Mangalachandikesha Bhairavaya Namah\n\n' +
      '14. चन्द्रशेखर - Chandrashekhara\nॐ श्री चन्द्रशेखर भैरवाय नमः॥\nOm Shri Chandrashekhara Bhairavaya Namah\n\n' +
      '15. त्रिपुरेश - Tripuresha\nॐ श्री त्रिपुरेश भैरवाय नमः॥\nOm Shri Tripuresha Bhairavaya Namah\n\n' +
      '16. निमिष - Nimisha\nॐ श्री निमिष भैरवाय नमः॥\nOm Shri Nimisha Bhairavaya Namah\n\n' +
      '17. उमानन्द - Umananda\nॐ श्री उमानन्द भैरवाय नमः॥\nOm Shri Umananda Bhairavaya Namah\n\n' +
      '18. अभिरु - Abhiru\nॐ श्री अभिरु भैरवाय नमः॥\nOm Shri Abhiru Bhairavaya Namah\n\n' +
      '19. नकुलीश - Nakulisha\nॐ श्री नकुलीश भैरवाय नमः॥\nOm Shri Nakulisha Bhairavaya Namah\n\n' +
      '20. भव - Bhava\nॐ श्री भव भैरवाय नमः॥\nOm Shri Bhava Bhairavaya Namah\n\n' +
      '21. क्रूर - Krura\nॐ श्री क्रूर भैरवाय नमः॥\nOm Shri Krura Bhairavaya Namah\n\n' +
      '22. सानन्द - Sananda\nॐ श्री सानन्द भैरवाय नमः॥\nOm Shri Sananda Bhairavaya Namah\n\n' +
      '23. दण्डपाणि - Dandapani\nॐ श्री दण्डपाणि भैरवाय नमः॥\nOm Shri Dandapani Bhairavaya Namah\n\n' +
      '24. रुरु - Ruru\nॐ श्री रुरु भैरवाय नमः॥\nOm Shri Ruru Bhairavaya Namah\n\n' +
      '25. स्थाणु - Sthanu\nॐ श्री स्थाणु भैरवाय नमः॥\nOm Shri Sthanu Bhairavaya Namah\n\n' +
      '26. शम्बरानन्द - Shambarananda\nॐ श्री शम्बरानन्द भैरवाय नमः॥\nOm Shri Shambarananda Bhairavaya Namah\n\n' +
      '27. सुन्दरानन्द - Sundarananda\nॐ श्री सुन्दरानन्द भैरवाय नमः॥\nOm Shri Sundarananda Bhairavaya Namah\n\n' +
      '28. वेदगर्भ - Vedagarbha\nॐ श्री वेदगर्भ भैरवाय नमः॥\nOm Shri Vedagarbha Bhairavaya Namah\n\n' +
      '29. लम्बकर्ण - Lambakarna\nॐ श्री लम्बकर्ण भैरवाय नमः॥\nOm Shri Lambakarna Bhairavaya Namah\n\n' +
      '30. भूतेश - Bhutesha\nॐ श्री भूतेश भैरवाय नमः॥\nOm Shri Bhutesha Bhairavaya Namah\n\n' +
      '31. संहार - Samhara\nॐ श्री संहार भैरवाय नमः॥\nOm Shri Samhara Bhairavaya Namah\n\n' +
      '32. ईशान - Ishana\nॐ श्री ईशान भैरवाय नमः॥\nOm Shri Ishana Bhairavaya Namah\n\n' +
      '33. अमरेश - Amaresha\nॐ श्री अमरेश भैरवाय नमः॥\nOm Shri Amaresha Bhairavaya Namah\n\n' +
      '34. महाभैरव - Mahabhairava\nॐ श्री महाभैरवाय नमः॥\nOm Shri Mahabhairavaya Namah\n\n' +
      '35. वक्रनाथ - Vakranatha\nॐ श्री वक्रनाथ भैरवाय नमः॥\nOm Shri Vakranatha Bhairavaya Namah\n\n' +
      '36. विजय - Vijaya\nॐ श्री विजय भैरवाय नमः॥\nOm Shri Vijaya Bhairavaya Namah\n\n' +
      '37. अच्युत - Achyuta\nॐ श्री अच्युत भैरवाय नमः॥\nOm Shri Achyuta Bhairavaya Namah\n\n' +
      '38. सर्वानन्द - Sarvananda\nॐ श्री सर्वानन्द भैरवाय नमः॥\nOm Shri Sarvananda Bhairavaya Namah\n\n' +
      '39. कपालभृत् - Kapalabhrut\nॐ श्री कपालभृत् भैरवाय नमः॥\nOm Shri Kapalabhrut Bhairavaya Namah\n\n' +
      '40. शम्भु - Shambhu\nॐ श्री शम्भु भैरवाय नमः॥\nOm Shri Shambhu Bhairavaya Namah\n\n' +
      '41. काल - Kala\nॐ श्री काल भैरवाय नमः॥\nOm Shri Kala Bhairavaya Namah\n\n' +
      '42. महाकाल - Mahakala\nॐ श्री महाकाल भैरवाय नमः॥\nOm Shri Mahakala Bhairavaya Namah\n\n' +
      '43. बटुक - Batuka\nॐ श्री बटुक भैरवाय नमः॥\nOm Shri Batuka Bhairavaya Namah\n\n' +
      '44. त्रिलोचन - Trilocana\nॐ श्री त्रिलोचन भैरवाय नमः॥\nOm Shri Trilocana Bhairavaya Namah\n\n' +
      '45. सुषेण - Sushena\nॐ श्री सुषेण भैरवाय नमः॥\nOm Shri Sushena Bhairavaya Namah\n\n' +
      '46. भीषणक - Bhishanaka\nॐ श्री भीषणक भैरवाय नमः॥\nOm Shri Bhishanaka Bhairavaya Namah\n\n' +
      '47. अज - Aja\nॐ श्री अज भैरवाय नमः॥\nOm Shri Aja Bhairavaya Namah\n\n' +
      '48. हर - Hara\nॐ श्री हर भैरवाय नमः॥\nOm Shri Hara Bhairavaya Namah\n\n' +
      '49. शूली - Shuli\nॐ श्री शूली भैरवाय नमः॥\nOm Shri Shuli Bhairavaya Namah\n\n' +
      '50. मुण्डी - Mundi\nॐ श्री मुण्डी भैरवाय नमः॥\nOm Shri Mundi Bhairavaya Namah\n\n' +
      '51. राक्षसेश्वर - Rakshaseshwara\nॐ श्री राक्षसेश्वर भैरवाय नमः॥\nOm Shri Rakshaseshwara Bhairavaya Namah\n\n' +
      '52. सदाशिव - Sadashiva\nॐ श्री सदाशिव भैरवाय नमः॥\nOm Shri Sadashiva Bhairavaya Namah',
    bodyHi:
      'यह एक भक्ति संदर्भ सूची है। ये मन्त्र प्रत्येक भैरव के नाम पर आधारित सरल भक्ति-प्रणाम मन्त्र हैं, जिन्हें स्वतंत्र शास्त्रीय तांत्रिक मूल मन्त्र होने का दावा नहीं किया गया है।\n\n' +
      '०१. भीमलोचन — ॐ श्री भीमलोचन भैरवाय नमः॥\n' +
      '०२. क्रोधीश — ॐ श्री क्रोधीश भैरवाय नमः॥\n' +
      '०३. त्र्यम्बक — ॐ श्री त्र्यम्बक भैरवाय नमः॥\n' +
      '०४. त्रिसन्ध्येश्वर — ॐ श्री त्रिसन्ध्येश्वर भैरवाय नमः॥\n' +
      '०५. उन्मत्त — ॐ श्री उन्मत्त भैरवाय नमः॥\n' +
      '०६. भीषण — ॐ श्री भीषण भैरवाय नमः॥\n' +
      '०७. वैद्यनाथ — ॐ श्री वैद्यनाथ भैरवाय नमः॥\n' +
      '०८. कपाली — ॐ श्री कपाली भैरवाय नमः॥\n' +
      '०९. अमर — ॐ श्री अमर भैरवाय नमः॥\n' +
      '१०. जगन्नाथ — ॐ श्री जगन्नाथ भैरवाय नमः॥\n' +
      '११. चक्रपाणि — ॐ श्री चक्रपाणि भैरवाय नमः॥\n' +
      '१२. भीरुक — ॐ श्री भीरुक भैरवाय नमः॥\n' +
      '१३. मङ्गलचण्डिकेश — ॐ श्री मङ्गलचण्डिकेश भैरवाय नमः॥\n' +
      '१४. चन्द्रशेखर — ॐ श्री चन्द्रशेखर भैरवाय नमः॥\n' +
      '१५. त्रिपुरेश — ॐ श्री त्रिपुरेश भैरवाय नमः॥\n' +
      '१६. निमिष — ॐ श्री निमिष भैरवाय नमः॥\n' +
      '१७. उमानन्द — ॐ श्री उमानन्द भैरवाय नमः॥\n' +
      '१८. अभिरु — ॐ श्री अभिरु भैरवाय नमः॥\n' +
      '१९. नकुलीश — ॐ श्री नकुलीश भैरवाय नमः॥\n' +
      '२०. भव — ॐ श्री भव भैरवाय नमः॥\n' +
      '२१. क्रूर — ॐ श्री क्रूर भैरवाय नमः॥\n' +
      '२२. सानन्द — ॐ श्री सानन्द भैरवाय नमः॥\n' +
      '२३. दण्डपाणि — ॐ श्री दण्डपाणि भैरवाय नमः॥\n' +
      '२४. रुरु — ॐ श्री रुरु भैरवाय नमः॥\n' +
      '२५. स्थाणु — ॐ श्री स्थाणु भैरवाय नमः॥\n' +
      '२६. शम्बरानन्द — ॐ श्री शम्बरानन्द भैरवाय नमः॥\n' +
      '२७. सुन्दरानन्द — ॐ श्री सुन्दरानन्द भैरवाय नमः॥\n' +
      '२८. वेदगर्भ — ॐ श्री वेदगर्भ भैरवाय नमः॥\n' +
      '२९. लम्बकर्ण — ॐ श्री लम्बकर्ण भैरवाय नमः॥\n' +
      '३०. भूतेश — ॐ श्री भूतेश भैरवाय नमः॥\n' +
      '३१. संहार — ॐ श्री संहार भैरवाय नमः॥\n' +
      '३२. ईशान — ॐ श्री ईशान भैरवाय नमः॥\n' +
      '३३. अमरेश — ॐ श्री अमरेश भैरवाय नमः॥\n' +
      '३४. महाभैरव — ॐ श्री महाभैरवाय नमः॥\n' +
      '३५. वक्रनाथ — ॐ श्री वक्रनाथ भैरवाय नमः॥\n' +
      '३६. विजय — ॐ श्री विजय भैरवाय नमः॥\n' +
      '३७. अच्युत — ॐ श्री अच्युत भैरवाय नमः॥\n' +
      '३८. सर्वानन्द — ॐ श्री सर्वानन्द भैरवाय नमः॥\n' +
      '३९. कपालभृत् — ॐ श्री कपालभृत् भैरवाय नमः॥\n' +
      '४०. शम्भु — ॐ श्री शम्भु भैरवाय नमः॥\n' +
      '४१. काल — ॐ श्री काल भैरवाय नमः॥\n' +
      '४२. महाकाल — ॐ श्री महाकाल भैरवाय नमः॥\n' +
      '४३. बटुक — ॐ श्री बटुक भैरवाय नमः॥\n' +
      '४४. त्रिलोचन — ॐ श्री त्रिलोचन भैरवाय नमः॥\n' +
      '४५. सुषेण — ॐ श्री सुषेण भैरवाय नमः॥\n' +
      '४६. भीषणक — ॐ श्री भीषणक भैरवाय नमः॥\n' +
      '४७. अज — ॐ श्री अज भैरवाय नमः॥\n' +
      '४८. हर — ॐ श्री हर भैरवाय नमः॥\n' +
      '४९. शूली — ॐ श्री शूली भैरवाय नमः॥\n' +
      '५०. मुण्डी — ॐ श्री मुण्डी भैरवाय नमः॥\n' +
      '५१. राक्षसेश्वर — ॐ श्री राक्षसेश्वर भैरवाय नमः॥\n' +
      '५२. सदाशिव — ॐ श्री सदाशिव भैरवाय नमः॥'
  },
  {
    headingEn: '3. Collective 52 Bhairava Prayer',
    headingHi: '३. सामूहिक श्री बावन भैरव समर्पण मंत्र',
    bodyEn:
      '॥ श्री बावन भैरव समर्पण मंत्र ॥\n\n' +
      'ॐ श्रीं भैरवाय नमः॥\n' +
      'Om Shreem Bhairavaya Namah\n\n' +
      'ॐ श्री बावन भैरवेभ्यो नमः॥\n' +
      'Om Shri Bavan Bhairavebhyo Namah\n\n' +
      '"Salutations to the fifty-two manifestations of Bhairava."\n\n' +
      'This collective prayer invokes the supreme light of Shiva-Bhairava to protect the body, mind, prana, and pilgrim environment across all sacred quarters.',
    bodyHi:
      '॥ श्री बावन भैरव समर्पण मंत्र ॥\n\n' +
      'ॐ श्रीं भैरवाय नमः॥\n' +
      'Om Shreem Bhairavaya Namah\n\n' +
      'ॐ श्री बावन भैरवेभ्यो नमः॥\n' +
      'Om Shri Bavan Bhairavebhyo Namah\n\n' +
      '"बावन भैरव स्वरूपों को सादर नमन।"\n\n' +
      'यह सामूहिक समर्पण मन्त्र समस्त ५२ शक्तिपीठों की रक्षक ऊर्जा को एकाग्र कर साधक के अंतःकरण में आध्यात्मिक अभय-कवच प्रतिष्ठित करता है।'
  },
  {
    headingEn: '4. Important Source Articles and References',
    headingHi: '४. प्रमुख शास्त्रीय स्रोत एवं संदर्भ ग्रन्थ',
    bodyEn:
      '1. amazingbharat.com — "52 Shakti Peethas & their Bhairavas" (Shiva, Tantra art, Mantras & traditional concordance).\n' +
      '2. India For You — Sanatan Bodh & Pavitra Granth listings of traditional Shakta Peethas and guardian Bhairavas.\n' +
      '3. Tantra Vidya (tantravidya.org) — Bhairava Sadhana methodologies and protective mandala structures.\n' +
      '4. French Institute of Pondicherry (IFP) — Indological Manuscript Collections on Shaiva-Shakta iconography and Matrika-Bhairava alignments.\n' +
      '5. Bhairava Chatushshashti Namavali — The 64 Bhairava canonical texts (Rudrayamala and Kashmir Shaivism) used for comparative differentiation.\n' +
      '6. D.C. Sircar — The Śākta Pīṭhas (Motilal Banarsidass / Asiatic Society), the landmark critical edition of the Sanskrit Pīṭhanirṇaya.',
    bodyHi:
      '१. amazingbharat.com — "52 Shakti Peethas & their Bhairavas" (शिव, तन्त्र कला, मन्त्र एवं शक्तिपीठ भैरव विवरण)।\n' +
      '२. India For You — सनातन बोध एवं पवित्र ग्रन्थ संकलन (शक्तिपीठ एवं क्षेत्रपाल भैरव परम्परा)।\n' +
      '३. Tantra Vidya — भैरव साधना एवं रक्षा-मण्डल विन्यास।\n' +
      '४. फ्रेंच इंस्टीट्यूट ऑफ पॉन्डिचेरी (IFP) — शैव-शाक्त प्रतिमाशास्त्र एवं हस्तलिखित ग्रन्थ अभिलेखागार।\n' +
      '५. भैरव चतुःषष्टि नामावली — ६४ भैरव तुलनात्मक शास्त्रीय ग्रन्थ (रुद्रयामल एवं काश्मीर शैव दर्शन)।\n' +
      '६. डॉ. डी.सी. सरकार — "द शाक्त पीठस" (एशियाटिक सोसाइटी / मोतीलाल बनारसीदास), संस्कृत पीठनिर्णय ग्रन्थ का प्रामाणिक समीक्षात्मक संस्करण।'
  },
  {
    headingEn: '5. Do Not Confuse These Three Systems',
    headingHi: '५. तीन भैरव प्रणालियों में भेद: इन्हें परस्पर मिश्रित न करें',
    bodyEn:
      'A crucial requirement of academic and tantric rigor is distinguishing between the three distinct numerical systems of Bhairava:\n\n' +
      '1. AṢṬA BHAIRAVA (Eight Bhairavas):\n' +
      '• Count: 8 forms.\n' +
      '• Function: Preside over the eight directions (East to North-East) and serve as consorts to the Eight Matrikas (Brahmani to Chandika).\n' +
      '• Names: Asitanga, Ruru, Chanda, Krodha, Unmatta, Kapala, Bhishana, Samhara.\n' +
      '• Context: Primary directional guardians of temple complexes and the sacred territory of Kashi.\n\n' +
      '2. CHATUḤṢAṢṬI BHAIRAVA (Sixty-Four Bhairavas):\n' +
      '• Count: 64 forms.\n' +
      '• Function: Represents the complete 8 × 8 octad expansion corresponding to the 64 Yoginis in hypaethral temples.\n' +
      '• Context: Expounded in the Rudrayamala, Tantraloka, and Srimatottara Tantra. Encodes all 64 arts (Kalas) and Sanskrit sonic phonemes.\n\n' +
      '3. SHAKTI PEETHA BHAIRAVAS (Fifty-One or Fifty-Two Bhairavas):\n' +
      '• Count: 51 or 52 forms.\n' +
      '• Function: Stationed as guardian protectors (Kshetrapalas) at every geological Shakti Peetha where a relic of Sati fell.\n' +
      '• Names: Bhimalochana, Krodhisha, Tryambaka, Trisandhyeshwara, Unmatta, Vaidyanatha, etc., culminating in Sadashiva.\n' +
      '• Context: Rooted in the Pithanirnaya, Tantrachudamani, and regional Shakta pilgrimage itineraries.',
    bodyHi:
      'शास्त्रीय दृष्टि से भैरव के तीन विशिष्ट संख्यात्मक प्रणालियों को परस्पर अलग समझना अनिवार्य है:\n\n' +
      '१. अष्ट भैरव (८ भैरव): आठों दिशाओं के दिक्पाल तथा अष्टमातृकाओं के भैरव-सहचर (असितांग, रुरु, चण्ड, क्रोध, उन्मत्त, कपाल, भीषण, संहार)।\n' +
      '२. चतुःषष्टि भैरव (६४ भैरव): चौंसठ योगिनी मण्डल का ६४ पुरुष-चैतन्य विस्तार (८ अष्टकों में विभक्त, ६४ कलाओं के अधिष्ठाता)।\n' +
      '३. शक्तिपीठ भैरव (५१ अथवा ५२ भैरव): जहाँ-जहाँ सती के पावन अंग गिरे, उन शक्तिपीठों के क्षेत्रपाल और रक्षक के रूप में प्रतिष्ठित शिव-स्वरूप (भीमलोचन से आरंभ होकर सदाशिव पर्यन्त)।'
  },
  {
    headingEn: '6. Origin and Mythology of the 51/52 Shakti Peethas & Bhairava Guardians',
    headingHi: '६. शक्तिपीठों एवं भैरव क्षेत्रपालों की प्राकट्य-कथा',
    bodyEn:
      'The theological foundation of the Shakti Peetha Bhairavas is rooted in the Mahābhāgavata Purāṇa, Kālikā Purāṇa, and Śiva Purāṇa:\n\n' +
      '1. Daksha’s Yajna & Sati’s Sacrifice: Prajapati Daksha organized a grand Vedic sacrifice but deliberately insulted Lord Shiva. Unable to tolerate the disrespect towards Mahadeva, Sati immolated her physical form in Yogagni.\n\n' +
      '2. The Cosmic Grief & Tandava: Stricken with grief and fury, Shiva manifested Virabhadra to destroy the sacrifice. Bearing Sati’s lifeless body upon his shoulders, Shiva performed the cosmic Pralaya Tandava, shaking the universe.\n\n' +
      '3. The Sudarshana Disintegration: To preserve cosmic equilibrium, Lord Vishnu released his Sudarshana Chakra, severing Sati’s body into fragments that consecrated sacred Peethas across the subcontinent.\n\n' +
      '4. Installation of the Guardian Bhairavas: Shiva pledged that wherever an organ, limb, or ornament of Sati fell, he would forever manifest as a guardian Bhairava to protect the Goddess and her pilgrims. Thus, every Shakti Peetha is incomplete without its Bhairava.',
    bodyHi:
      'शक्तिपीठों और उनके रक्षक भैरवों का उद्भव शिव पुराण, कालिका पुराण और महाभागवत पुराण की सुप्रसिद्ध आख्यायिका पर आधारित है:\n\n' +
      '१. दक्ष प्रजापति का यज्ञ एवं सती का आत्मत्याग: सती ने पति महादेव के अपमान पर योगाग्नि में अपने प्राण त्याग दिए।\n' +
      '२. शिव का महाशोक एवं ताण्डव: सती के पार्थिव देह को कंधे पर उठाकर भगवान् शिव ने प्रलयंकारी ताण्डव आरंभ किया।\n' +
      '३. सुदर्शन चक्र द्वारा अंग-छेदन: भगवान् विष्णु ने सुदर्शन चक्र से सती के शरीर को खंडित किया, जिससे पावन शक्तिपीठों का प्राकट्य हुआ।\n' +
      '४. क्षेत्रपाल भैरवों की स्थापना: भगवान् शिव ने प्रतिज्ञा की कि जिस स्थान पर सती का जो भी अंग गिरा है, वहाँ वे स्वयं एक विशिष्ट भैरव रूप में विराजमान होकर शक्ति की सदा रक्षा करेंगे।'
  },
  {
    headingEn: '7. Complete Peetha & Bhairava Reference Table (Pīṭhanirṇaya / D.C. Sircar)',
    headingHi: '७. पीठनिर्णय / डी.सी. सरकार की प्रामाणिक ५१ शक्तिपीठ एवं भैरव तालिका',
    bodyEn:
      'Based on the academic critical edition of the Pīṭhanirṇaya established by epigraphist Dr. D.C. Sircar (The Śākta Pīṭhas), the 51 canonical seats and their paired guardians are:\n\n' +
      '1. Hiṅgulā (Balochistan) — Devi: Koṭṭarī · Bhairava: Bhīmalocana · Limb: Brahmandharandhra\n' +
      '2. Śarkarāre (Sindh) — Devi: Mahiṣamardinī · Bhairava: Krodhīśa / Candra · Limb: Three Eyes\n' +
      '3. Sugandhā (Barisal) — Devi: Sunandā · Bhairava: Tryambaka · Limb: Nose\n' +
      '4. Kaśmīra (Amarnath) — Devi: Mahāmāyā · Bhairava: Trisandhyeśvara · Limb: Neck\n' +
      '5. Jvālāmukhī (Kangra) — Devi: Siddhidā / Ambikā · Bhairava: Unmatta · Limb: Tongue\n' +
      '6. Jālandhara (Punjab) — Devi: Tripuramālinī · Bhairava: Bhīṣaṇa · Limb: Left Breast\n' +
      '7. Vaidyanātha (Deoghar) — Devi: Jayadurgā · Bhairava: Vaidyanātha · Limb: Heart\n' +
      '8. Nepāla (Kathmandu) — Devi: Mahāmāyā / Guhyeśvarī · Bhairava: Kapālī · Limb: Knees\n' +
      '9. Mānasa (Tibet) — Devi: Dākṣāyaṇī · Bhairava: Amara · Limb: Right Hand\n' +
      '10. Utkala / Virajā (Puri) — Devi: Vimalā · Bhairava: Jagannātha · Limb: Navel\n' +
      '11. Gaṇḍakī (Muktinath) — Devi: Gaṇḍakī Caṇḍī · Bhairava: Cakrapāṇi · Limb: Cheeks / Forehead\n' +
      '12. Bahulā (Burdwan) — Devi: Bahulā · Bhairava: Bhīruka · Limb: Left Arm\n' +
      '13. Ujjayinī (Ujani) — Devi: Maṅgalacaṇḍikā · Bhairava: Maṅgalacaṇḍikeśa · Limb: Elbow\n' +
      '14. Caṭṭala (Chittagong) — Devi: Bhavānī · Bhairava: Candraśekhara · Limb: Right Arm\n' +
      '15. Tripurā (Matabari) — Devi: Tripurasundarī · Bhairava: Tripureśa · Limb: Right Foot\n' +
      '16. Trisrotā (Jalpaiguri) — Devi: Bhrāmarī · Bhairava: Nimiṣa · Limb: Left Foot\n' +
      '17. Kāmarūpa (Guwahati) — Devi: Kāmākhyā · Bhairava: Umānanda · Limb: Yoni Mahamudra\n' +
      '18. Kṣīragrāma (Burdwan) — Devi: Yugādyā · Bhairava: Abhiru · Limb: Right Big Toe\n' +
      '19. Kālīghāṭ (Kolkata) — Devi: Kālikā · Bhairava: Nakulīśa · Limb: Right Toes\n' +
      '20. Prayāga (Prayagraj) — Devi: Lalitā / Alopī · Bhairava: Bhava · Limb: Hand Fingers\n' +
      '21. Jayantī (Meghalaya) — Devi: Jayantī · Bhairava: Krūra · Limb: Left Thigh\n' +
      '22. Kirīṭakoṇā (Murshidabad) — Devi: Vimalā / Kirīṭeśvarī · Bhairava: Sānanda · Limb: Crown\n' +
      '23. Vārāṇasī (Kashi) — Devi: Viśālākṣī · Bhairava: Kāla Bhairava / Daṇḍapāṇi · Limb: Ear-rings\n' +
      '24. Kanyāśrama (Kanyakumari) — Devi: Śarvāṇī · Bhairava: Nimīṣa / Ruru · Limb: Back\n' +
      '25. Kurukṣetra (Haryana) — Devi: Sāvitrī / Bhadrakālī · Bhairava: Sthāṇu · Limb: Ankle Bone\n' +
      '26. Maṇivedikā (Pushkar) — Devi: Gāyatrī · Bhairava: Śambarānanda · Limb: Two Wrists\n' +
      '27. Śrīśaila / Śrīhaṭṭa (Sylhet) — Devi: Mahālakṣmī · Bhairava: Sundarānanda · Limb: Neck\n' +
      '28. Kāñcī / Kopāī (Birbhum) — Devi: Devagarbhā / Kaṅkālī · Bhairava: Vedagarbha · Limb: Skeleton\n' +
      '29. Rāmagiri (Chitrakoot) — Devi: Śivānī · Bhairava: Lambakarṇa · Limb: Right Breast\n' +
      '30. Vṛndāvana (Mathura) — Devi: Umā · Bhairava: Bhūteśa · Limb: Hair Ringlets\n' +
      '31. Śucīndra (Suchindram) — Devi: Nārāyaṇī · Bhairava: Saṃhāra · Limb: Upper Teeth\n' +
      '32. Pañcasāgara — Devi: Vārāhī · Bhairava: Īśāna · Limb: Lower Teeth\n' +
      '33. Karatoyā (Bogra) — Devi: Aparṇā · Bhairava: Amareśa · Limb: Left Talus\n' +
      '34. Śrīparvata (Srisailam) — Devi: Śrīsundarī · Bhairava: Sundarānanda / Mahābhairava · Limb: Right Ankle\n' +
      '35. Vibhāṣa (Tamluk) — Devi: Kapālinī · Bhairava: Sarvānanda / Unmatta · Limb: Left Ankle\n' +
      '36. Prabhāsa (Somnath) — Devi: Candrabhāgā · Bhairava: Vakranātha · Limb: Stomach\n' +
      '37. Bhairavaparvata (Ujjain) — Devi: Avantī · Bhairava: Vijaya · Limb: Upper Lip\n' +
      '38. Janasthāna (Nashik) — Devi: Bhrāmarī · Bhairava: Acyuta · Limb: Chin\n' +
      '39. Godāvarītīra (Rajahmundry) — Devi: Viśveśī · Bhairava: Daṇḍapāṇi / Hara · Limb: Left Cheek\n' +
      '40. Ratnāvalī (Hooghly) — Devi: Kumārī · Bhairava: Śiva / Śūlī · Limb: Right Shoulder\n' +
      '41. Mithilā (Janakpur) — Devi: Umā · Bhairava: Mahodara / Kapālabhṛt · Limb: Left Shoulder\n' +
      '42. Nalahāṭī (Birbhum) — Devi: Kālikā · Bhairava: Yogeśa / Śambhu · Limb: Tubular Bone\n' +
      '43. Karṇāṭa — Devi: Jayadurgā · Bhairava: Abhiru / Kāla · Limb: Both Ears\n' +
      '44. Vakreśvara (Birbhum) — Devi: Mahiṣamardinī · Bhairava: Vakranātha / Mahākāla · Limb: Mind/Brow\n' +
      '45. Yaśora (Ishwaripur) — Devi: Yaśoreśvarī · Bhairava: Caṇḍa / Baṭuka · Limb: Hands & Feet\n' +
      '46. Aṭṭahāsa (Birbhum) — Devi: Phullarā · Bhairava: Viśveśa / Trilocana · Limb: Lips\n' +
      '47. Nandīpura (Sainthia) — Devi: Nandinī · Bhairava: Nandikeśvara / Suṣeṇa · Limb: Necklace\n' +
      '48. Laṅkā (Nainativu) — Devi: Indrākṣī · Bhairava: Rākṣaseśvara / Bhīṣaṇaka · Limb: Anklet\n' +
      '49. Virāṭa (Bairat) — Devi: Ambikā · Bhairava: Amṛta / Aja · Limb: Left Toes\n' +
      '50. Magadha (Patna) — Devi: Sarvānandakarī · Bhairava: Sarvānanda · Limb: Right Thigh\n' +
      '51. Kālīghāṭ Anguli Branch (Bengal) — Devi: Kālikā · Bhairava: Śūlī / Muṇḍī · Limb: Finger',
    bodyHi:
      'पीठनिर्णय के अनुसार ५१ प्रामाणिक शक्तिपीठ, उनकी देवी, भैरव एवं पतित अंग:\n' +
      'हिंगुला (कोट्टरी-भीमलोचन), शर्करारे (महिषमर्दिनी-क्रोधीश), सुगन्धा (सुनन्दा-त्र्यम्बक), कश्मीर (महामाया-त्रिसन्ध्येश्वर), ज्वालामुखी (सिद्धिदा-उन्मत्त), जालन्धर (त्रिपुरमालिनी-भीषण), वैद्यनाथ (जयदुर्गा-वैद्यनाथ), नेपाल (गुह्येश्वरी-कपाली), मानसरोवर (दाक्षायणी-अमर), उत्कल (विमला-जगन्नाथ), गण्डकी (गण्डकी चण्डी-चक्रपाणि), बहुला (बहुला-भीरुक), उज्जयिनी (मंगलचण्डिका-मङ्गलचण्डिकेश), चट्टल (भवानी-चन्द्रशेखर), त्रिपुरा (त्रिपुरसुन्दरी-त्रिपुरेश), त्रिस्रोता (भ्रामरी-निमिष), कामरूप (कामाख्या-उमानन्द), क्षीरग्राम (योगाद्या-अभिरु), कालीघाट (कालिका-नकुलीश), प्रयाग (ललिता-भव), जयन्ती (जयन्ती-क्रूर), किरीटकोणा (विमला-सानन्द), वाराणसी (विशालाक्षी-कालभैरव/दण्डपाणि), कन्याश्रम (शर्वाणी-रुरु), कुरुक्षेत्र (सावित्री-स्थाणु), मणिवेदिका (गायत्री-शम्बरानन्द), श्रीशैल (महालक्ष्मी-सुन्दरानन्द), कांची (देवगर्भा-वेदगर्भ), रामगिरि (शिवानी-लम्बकर्ण), वृन्दावन (उमा-भूतेश), शुचीन्द्रम (नारायणी-संहार), पञ्चसागर (वाराही-ईशान), करतोया (अपर्णा-अमरेश), श्रीपर्वत (श्रीसुन्दरी-महाभैरव), विभाष (कपालिनी-राक्षसेश्वर), प्रभास (चन्द्रभागा-मुण्डी), भैरवपर्वत (अवन्ती-विजय), जनस्थान (भ्रामरी-अच्युत), गोदावरी (विश्वेशी-हर), रत्नावली (कुमारी-शूली), मिथिला (उमा-कपालभृत्), नलहाटी (कालिका-शम्भु), कर्णाट (जयदुर्गा-काल), वक्रेश्वर (महिषमर्दिनी-महाकाल), यशोर (यशोरेश्वरी-बटुक), अट्टहास (फुल्लरा-त्रिलोचन), नन्दीपुर (नन्दिनी-सुषेण), लंका (इन्द्राक्षी-भीषणक), विराट (अम्बिका-अज), मगध (सर्वानन्दकरी-सर्वानन्द), कालीघाट अंगुली (कालिका-शूली)।'
  },
  {
    headingEn: '8. The 52nd Additional Entry: Danteshwari Peetha',
    headingHi: '८. ५२वाँ अतिरिक्त पीठ: दन्तेश्वरी पीठ (बस्तर, छत्तीसगढ़)',
    bodyEn:
      'While the classical Pīṭhanirṇaya enumerates 51 Peethas, regional central-Indian traditions and historical royal archives of the Bastar kingdom recognize the 52nd Peetha:\n\n' +
      '• Sacred Seat: Danteshwari Peetha, situated at the confluence of the sacred Shankhini and Dankini rivers in Dantewada, Bastar, Chhattisgarh.\n' +
      '• Relic of Sati: Sacred Tooth (Danta / दन्त) of Devi Sati.\n' +
      '• Presiding Goddess: Maa Danteshwari (Danteshwari Mai), the tutelary sovereign deity of the Bastar region and the presiding spirit of the 75-day Bastar Dussehra festival.\n' +
      '• Guardian Bhairava: Sadāśiva Bhairava (also worshipped locally as Bhairamdeo / Kapala Bhairava).\n' +
      '• Dedicated Devotional Mantra: ॐ श्री सदाशिव भैरवाय नमः॥ (Om Shri Sadashiva Bhairavaya Namah).\n' +
      '• Signification: This 52nd inclusion completes the popular "Bāvan Shakti Peetha" geography of central India, anchoring the tribal, royal, and Agamic synthesis of Chhattisgarh.',
    bodyHi:
      'मध्य भारत की परम्परा और बस्तर रियासत के अभिलेख ५२वें पीठ को अत्यंत श्रद्धा से स्वीकार करते हैं:\n\n' +
      '• तीर्थ स्थल: दन्तेश्वरी शक्तिपीठ, शंखिनी एवं डंकिनी नदियों के पावन संगम पर स्थित (दन्तेवाड़ा, बस्तर, छत्तीसगढ़)।\n' +
      '• सती का पतित अंग: सती का पावन दाँत (दन्त)।\n' +
      '• अधिष्ठात्री देवी: माँ दन्तेश्वरी (दन्तेश्वरी माई), बस्तर की कुलदेवी।\n' +
      '• रक्षक भैरव: ५२. सदाशिव भैरव (स्थानीय रूप से भैरमदेव / कपाल भैरव के रूप में पूजित)।\n' +
      '• भक्ति मन्त्र: ॐ श्री सदाशिव भैरवाय नमः॥ (Om Shri Sadashiva Bhairavaya Namah)।\n' +
      '• महत्त्व: यह ५२वाँ समावेश मध्य भारत को शक्तिपीठ-भूगोल से जोड़कर बावन शक्तिपीठ परम्परा को पूर्ण करता है।'
  },
  {
    headingEn: '9. Standard 8-Field Documentation Framework per Bhairava',
    headingHi: '९. प्रत्येक भैरव का ८-स्तरीय प्रामाणिक प्रलेखन ढांचा',
    bodyEn:
      'To maintain uniform scholarship across all 52 Bhairava entries, each monograph entry is structured around 8 core parameters:\n\n' +
      '1. Bhairava Name (भैरव नाम): Classical Sanskrit title and regional appellation.\n' +
      '2. Associated Peetha (संबद्ध शक्तिपीठ): Name and historical identity of the sacred seat.\n' +
      '3. Presiding Goddess (शक्तिपीठ देवी): The manifested Shakti whom the Bhairava accompanies and protects.\n' +
      '4. Sacred Relic (सती का पतित अंग): The specific anatomical limb, organ, or ornament of Sati.\n' +
      '5. Geographic Location (भौगोलिक अवस्थिति): Contemporary town, district, state/province, and river confluence.\n' +
      '6. Iconography & Mount (प्रतिमाशास्त्र एवं वाहन): Complexion, arms, weapons (ayudhas), posture, and animal vahana.\n' +
      '7. Devotional Mantra & Seed (भक्ति मन्त्र एवं बीज): The salutation formula and associated sonic resonance.\n' +
      '8. Spiritual & Protective Role (आध्यात्मिक एवं रक्षात्मक प्रभाव): Metaphysical significance for sadhana and pilgrim security.',
    bodyHi:
      'सभी ५२ भैरव स्वरूपों के शास्त्रीय विवेचन के लिए निम्नलिखित ८ प्रामाणिक पैमानों का पालन किया जाता है:\n' +
      '१. भैरव नाम, २. संबद्ध शक्तिपीठ, ३. अधिष्ठात्री देवी, ४. सती का अंग/आभूषण, ५. भौगोलिक अवस्थिति, ६. प्रतिमाशास्त्र एवं वाहन, ७. भक्ति मन्त्र एवं बीज, ८. आध्यात्मिक एवं रक्षात्मक प्रभाव।'
  },
  {
    headingEn: '10. Crucial Mantra Correction Note',
    headingHi: '१०. मन्त्र-शुद्धि एवं प्रयोग सम्बन्धी अनिवार्य निर्देश',
    bodyEn:
      '• Academic Transparency: The simple devotional mantras listed above (e.g., ॐ श्री भीमलोचन भैरवाय नमः॥) are standard devotional namavalis designed for reverence and accessible japa by devotees and pilgrims.\n' +
      '• Distinction from Tantric Mūla Mantras: These devotional salutations must not be conflated with independently attested esoteric Tantric Mula Mantras (which contain intricate beeja syllables such as भ्रं, ह्रीं, क्लीं, फ्रों, and nyasa sequences), found in specialized texts such as the Tantrachūḍāmaṇi, Śāradā Tilaka, and Rudrayāmala.\n' +
      '• Devotional Utility: For regular prayer, circumambulation (parikrama), and pilgrim salutations at each respective Shakti Peetha, these 52 devotional formulas provide a pure and spiritually harmonious medium of worship.',
    bodyHi:
      '• शास्त्रीय पारदर्शिता: ऊपर दी गई नामावली में उद्धृत मन्त्र (उदा. "ॐ श्री भीमलोचन भैरवाय नमः॥") सरल भक्ति-प्रणाम मन्त्र हैं, जो श्रद्धालुओं और तीर्थयात्रियों के नित्य स्मरण हेतु अत्यंत सुगम हैं।\n' +
      '• आगमिक मूल मन्त्रों से भेद: इन्हें तन्त्रचूड़ामणि अथवा रुद्रयामल के दीक्षा-सापेक्ष बीजात्मक मूल मन्त्रों का विकल्प नहीं मानना चाहिए।\n' +
      '• उपासना में उपयोग: शक्तिपीठ यात्रा, परिक्रमा और सामान्य भक्ति-अर्चना में इन ५२ नाम-मन्त्रों का जप पूर्ण फलदायी और दोष-रहित माना जाता है।'
  },
  {
    headingEn: '11. Recommended 12-Point Editorial Structure for Individual Monographs',
    headingHi: '११. व्यक्तिगत लेखों हेतु अनुशंसित १२-सूत्रीय संपादकीय संरचना',
    bodyEn:
      'When compiling separate dedicated chapters for each of the 52 Bhairavas, authors and researchers should follow this 12-point sequence:\n' +
      '1. Sanskrit Title Banner with Devanagari & IAST transliteration\n' +
      '2. Epigraphical citation from Pīṭhanirṇaya or Śiva Purāṇa\n' +
      '3. Etymological and Philological derivation of the Bhairava’s name\n' +
      '4. Geographical and Archaeological description of the Peetha shrine\n' +
      '5. Detailed iconographical analysis of the deity’s murti and vahana\n' +
      '6. Relationship with the resident Shakti / Goddess of that Peetha\n' +
      '7. Devotional Name Mantra with Sanskrit Devanagari & Roman phonetic\n' +
      '8. Attested Tantric Beeja resonances and liturgical offerings (bhoga/bali)\n' +
      '9. Historical temple lineage, inscriptions, and priest traditions\n' +
      '10. Local folkloric legends, annual melas, and pilgrim rituals\n' +
      '11. Yogic and internal meditative correlation (Cakra and Nadi alignment)\n' +
      '12. Bibliography of Primary Manuscripts, Epigraphia Indica, and Field Reports.',
    bodyHi:
      'भविष्य में प्रत्येक भैरव पर स्वतंत्र शोध-अध्याय तैयार करते समय विद्वानों को निम्नलिखित १२-सूत्रीय क्रम का पालन करने की अनुशंसा की जाती है:\n' +
      '१. संस्कृत शीर्षक, २. मूल श्लोक उद्धरण, ३. नाम-व्युत्पत्ति, ४. तीर्थ का भौगोलिक-पुरातात्विक विवरण, ५. प्रतिमाशास्त्र एवं वाहन, ६. पीठ की देवी से संबंध, ७. भक्ति-प्रणाम मन्त्र, ८. बीज-मन्त्र एवं भोग विधान, ९. मंदिर इतिहास एवं शिलालेख, १०. लोक-आख्यान एवं मेले, ११. योग साधना में चक्र-नाड़ी संबंध, १२. संदर्भ सूची।'
  }
];
