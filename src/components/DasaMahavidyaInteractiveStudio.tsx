import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Eye,
  BookOpen,
  Layers,
  Volume2,
  Compass
} from 'lucide-react';

export interface MahavidyaStudioSlide {
  id: string;
  stageIndex: number; // 0 = INTRO, 1..10 = 01..10, 11 = OUTRO
  badgeCode: string;
  nameEn: string;
  nameHi: string;
  transliteration: string;
  themeTitleEn: string;
  themeTitleHi: string;
  reflectionEn: string;
  reflectionHi: string;
  keywordEn: string;
  keywordHi: string;
  accentColor: string;
  secondaryColor: string;
  progressRatio: number;
  uploadedPlateUrl: string;
  traditionalArtUrl?: string;
  bijaMantra?: string;
  mulaMantraSanskrit?: string;
  mulaMantraIAST?: string;
  kulaStreamEn?: string;
  kulaStreamHi?: string;
  bhairavaConsortEn?: string;
  bhairavaConsortHi?: string;
  directionEn?: string;
  symbolExplanationEn: string;
  symbolExplanationHi: string;
  philosophicalInsightEn: string;
  philosophicalInsightHi: string;
  iconographicAttributesEn?: string[];
  iconographicAttributesHi?: string[];
}

export const MAHAVIDYA_STUDIO_SLIDES: MahavidyaStudioSlide[] = [
  {
    id: 'mahavidya-intro',
    stageIndex: 0,
    badgeCode: 'INTRO',
    nameEn: '10 MAHAVIDYAS',
    nameHi: '॥ दशमहाविद्या ॥',
    transliteration: 'Daśa Mahāvidyā — Ten Facets of Devī',
    themeTitleEn: 'TEN FACETS OF DEVI · A VISUAL INTERPRETATION',
    themeTitleHi: 'देवी के दस महा-आयाम · पवित्र ज्यामितीय दर्शन',
    reflectionEn: 'Ten forms. Ten reflections on the nature of existence.',
    reflectionHi: 'दस स्वरूप। अस्तित्व और चेतना की प्रकृति के दस महा-चिंतन।',
    keywordEn: 'INSPIRED BY SACRED GEOMETRY',
    keywordHi: 'पवित्र ज्यामिति एवं तांत्रिक तत्त्वज्ञान',
    accentColor: '#38BDF8',
    secondaryColor: '#F59E0B',
    progressRatio: 0,
    uploadedPlateUrl: '/assets/aistudio/image_d3983ccf.png',
    symbolExplanationEn:
      'The outer cyan circle represents the boundless perimeter of manifest cosmos (Prakṛti / Mahāmāyā), while the inner golden circle represents the unmoving Bindu of pure awareness (Parā-Saṃvit) from which the Ten Great Wisdoms radiate.',
    symbolExplanationHi:
      'बाह्य नील वृत्त अनंत ब्रह्माण्डीय विस्तार (प्रकृति/महामाया) का प्रतीक है, और केंद्र का स्वर्ण-वलय उस अचल चैतन्य-बिन्दु (परा-संवित्) का द्योतक है जिससे दसों महाविद्याओं का स्फुरण होता है।',
    philosophicalInsightEn:
      'In Śākta Tantra (Muṇḍamālā, Тоḍala, and Mahānirvāṇa Tantras), the Ten Mahāvidyās encompass the entire spectrum of reality—from fierce time and dissolution (Kālī) to auspicious fullness (Ṣoḍaśī), cosmic space (Bhuvaneśvarī), inner stillness (Bagalāmukhī), and flourishing abundance (Kamalā).',
    philosophicalInsightHi:
      'शाक्त तंत्र में दशमहाविद्याएँ अस्तित्व के सम्पूर्ण आयामों को समाहित करती हैं—महाकाल के संहार (काली) से लेकर पूर्ण सौंदर्य (षोडशी), अनंत आकाश (भुवनेश्वरी), वाक्-स्तम्भन (बगलामुखी) और ऐश्वर्य (कमला) तक।'
  },
  {
    id: 'mahavidya-01-kali',
    stageIndex: 1,
    badgeCode: '01 / 10',
    nameEn: 'KALI',
    nameHi: '०१. काली (दक्षिणा काली)',
    transliteration: 'Kālī · Ādyā Mahāvidyā',
    themeTitleEn: 'TIME & DISSOLUTION',
    themeTitleHi: 'काल एवं महा-लय (संहार-शक्ति)',
    reflectionEn: 'Every form changes with time',
    reflectionHi: 'काल के प्रवाह में प्रत्येक रूप परिवर्तनशील है',
    keywordEn: 'IMPERMANENCE',
    keywordHi: 'अनित्यता एवं कालातीत चेतना',
    accentColor: '#EF4444',
    secondaryColor: '#F59E0B',
    progressRatio: 0.1,
    uploadedPlateUrl: '/assets/aistudio/image_6c31a566.png',
    traditionalArtUrl: '/assets/aistudio/image_6cc0fa29.png',
    bijaMantra: 'क्रीं (Krīṃ)',
    mulaMantraSanskrit: 'ॐ कालीकायै नमः॥',
    mulaMantraIAST: 'Om Kalikayai Namah',
    kulaStreamEn: 'Kālīkula Sovereign · 1st Mahāvidyā',
    kulaStreamHi: 'कालीकुल अधिष्ठात्री · प्रथम महाविद्या',
    bhairavaConsortEn: 'Mahākāla Bhairava',
    bhairavaConsortHi: 'महाकाल भैरव',
    directionEn: 'North / Zenith of Kālīkula',
    symbolExplanationEn:
      'A directional crimson triangle of transformative force pierced by an ascending sinusoidal wave of Time (Kāla-laharī) amidst dispersing particles—showing how all conditioned structures arise, oscillate, and dissolve back into pure awareness.',
    symbolExplanationHi:
      'गतिशील रक्त-त्रिकोण और उसे भेदती हुई काल-तरंग (ज्या-तरंग) तथा बिखरते हुए कण यह दर्शाते हैं कि समस्त नाम-रूप समय की तरंगों में उठकर अंततः शुद्ध चैतन्य में विलीन हो जाते हैं।',
    philosophicalInsightEn:
      'Derived from kāla ("time" and "black/all-absorber"), Kālī is Kālagrāsa—the power that devours time itself, liberating the seeker from fear of mortality and egoic permanence.',
    philosophicalInsightHi:
      '"काल" (समय एवं सर्व-समावेशी श्यामता) से व्युत्पन्न काली स्वयं काल का भी ग्रास करने वाली "कालग्रास" शक्ति हैं, जो साधक को मृत्यु-भय और अहंकार से मुक्त करती हैं।',
    iconographicAttributesEn: [
      'Khaḍga (Sword of Discriminative Gnosis)',
      'Severed Head of Ego & 50-Skull Muṇḍamālā',
      'Abhaya (Fearlessness) & Varada (Boon) Mudrās',
      'Standing upon Supine Śava-Śiva'
    ],
    iconographicAttributesHi: [
      'ज्ञान-खड्ग (अज्ञान-च्छेदन)',
      'अहंकार का छिन्न मस्तक एवं ५० मातृका मुण्डमाला',
      'अभय एवं वरद मुद्रा',
      'शवरूप शिव के वक्ष पर आरूढ़'
    ]
  },
  {
    id: 'mahavidya-02-tara',
    stageIndex: 2,
    badgeCode: '02 / 10',
    nameEn: 'TARA',
    nameHi: '०२. तारा (उग्रतारा / नीलसरस्वती)',
    transliteration: 'Tārā · Tāriṇī Śakti',
    themeTitleEn: 'GUIDANCE THROUGH SOUND',
    themeTitleHi: 'नाद एवं परा-वाक् द्वारा भव-तारण',
    reflectionEn: 'A voice across uncertainty',
    reflectionHi: 'अनिश्चितता के महासागर में मार्गदर्शक नाद',
    keywordEn: 'GUIDANCE',
    keywordHi: 'तारण एवं मार्गदर्शन',
    accentColor: '#38BDF8',
    secondaryColor: '#FBBF24',
    progressRatio: 0.2,
    uploadedPlateUrl: '/assets/aistudio/image_650fcb9a.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_02_tara.jpg',
    bijaMantra: 'ह्रीं स्त्रीं हुं फट् (Hrīṃ Strīṃ Huṃ Phaṭ)',
    mulaMantraSanskrit: 'ॐ तारायै नमः॥',
    mulaMantraIAST: 'Om Tarayai Namah',
    kulaStreamEn: 'Kālīkula · 2nd Mahāvidyā',
    kulaStreamHi: 'कालीकुल · द्वितीय महाविद्या',
    bhairavaConsortEn: 'Akṣobhya Śiva',
    bhairavaConsortHi: 'अक्षोभ्य शिव',
    directionEn: 'Above / Skyward Navigation',
    symbolExplanationEn:
      'An upward-pointing sky-blue triangle crowned by a 28-star golden pyramidal constellation (tārā = star/saviour) and traversed by rhythmic ocean/sound waves—symbolizing the guiding star and sonic mantra (Praṇava) that ferries consciousness across turbulent waters.',
    symbolExplanationHi:
      'ऊर्ध्वमुखी नील त्रिकोण, उसके शीर्ष पर २८ स्वर्ण-तारकों का पिरामिड और नीचे बहती हुई ध्वनि/समुद्र तरंगें—यह भवसागर के विक्षोभ में ध्रुव-तारे और प्रणव-नाद द्वारा सुरक्षित पार ले जाने का प्रतीक है।',
    philosophicalInsightEn:
      'From verbal root tṛ ("to cross over, rescue, save"), Tārā is both the Boatwoman across saṃsāra and Nīlasarasvatī, the unmanifest sound (Parā-Vāk) that illuminates the path in crisis.',
    philosophicalInsightHi:
      '"तृ" (पार उतारना/रक्षा करना) धातु से निष्पन्न भगवती तारा संकट से तारने वाली "उग्रतारा" और वाणी की अधिष्ठात्री "नीलसरस्वती" दोनों हैं।',
    iconographicAttributesEn: [
      'Kartrī (Shears that cut the knots of delusion)',
      'Khaḍga (Sword) & Kapāla (Skull-Cup)',
      'Nīlotpala (Blue Lotus of Awakening)',
      'Adorned with Akṣobhya Serpent in Jūṭa'
    ],
    iconographicAttributesHi: [
      'कर्तरी (मोह-ग्रन्थि काटने वाली कैंची)',
      'खड्ग एवं कपाल-पात्र',
      'नीलोत्पल (नीलकमल)',
      'जटाजूट में अक्षोभ्य नाग से सुशोभित'
    ]
  },
  {
    id: 'mahavidya-03-shodashi',
    stageIndex: 3,
    badgeCode: '03 / 10',
    nameEn: 'SHODASHI',
    nameHi: '०३. षोडशी (त्रिपुरसुन्दरी / ललिता)',
    transliteration: 'Ṣoḍaśī · Mahātripurasundarī',
    themeTitleEn: 'BEAUTY & COMPLETENESS',
    themeTitleHi: 'परम सौंदर्य एवं षोडश-कला पूर्णता',
    reflectionEn: 'Harmony held at the centre',
    reflectionHi: 'केंद्र में प्रतिष्ठित पूर्ण सामंजस्य',
    keywordEn: 'FULLNESS',
    keywordHi: 'पूर्णता (पूर्णमदः पूर्णमिदम्)',
    accentColor: '#F472B6',
    secondaryColor: '#FACC15',
    progressRatio: 0.3,
    uploadedPlateUrl: '/assets/aistudio/image_c164310d.png',
    traditionalArtUrl: '/assets/aistudio/image_a583fd6e.png',
    bijaMantra: 'श्रीं ह्रीं क्लीं ऐं सौः (Ṣoḍaśī Vidyā)',
    mulaMantraSanskrit: 'ॐ त्रिपुरसुन्दर्यै नमः॥',
    mulaMantraIAST: 'Om Tripura Sundaryai Namah',
    kulaStreamEn: 'Śrīkula Sovereign · 3rd Mahāvidyā',
    kulaStreamHi: 'श्रीकुल साम्राज्ञी · तृतीय महाविद्या',
    bhairavaConsortEn: 'Kāmeśvara Śiva (Pañcabrahmā Seat)',
    bhairavaConsortHi: 'कामेश्वर शिव (पंचब्रह्मासन)',
    directionEn: 'Northeast / Central Bindu of Śrīcakra',
    symbolExplanationEn:
      'A nine-pointed star-polygon of interlocking rose-pink triangles with golden bindu rings inside each vertex—representing the harmonic union of Śiva and Śakti triangles in the Śrīcakra and the 16th lunar digit (Ṣoḍaśī-kalā) of immutable fullness.',
    symbolExplanationHi:
      'परस्पर गुँथे हुए गुलाबी त्रिकोणों का नव-कोणीय तारा-मण्डल और प्रत्येक कोण में स्वर्ण-बिन्दु—यह श्रीचक्र के शिव-शक्ति त्रिकोणों के सामरस्य और चन्द्रमा की १६वीं अमृत-कला (षोडशी) की पूर्णता का प्रतीक है।',
    philosophicalInsightEn:
      'Tripurasundarī ("Beauty of the Three Cities/States") reveals that supreme transcendence and luminous manifestation are not opposed; the entire universe is the joyful self-reflection (Vimarśa) of the Empress.',
    philosophicalInsightHi:
      'त्रिपुरसुन्दरी (तीनों लोकों, तीनों गुणों और जाग्रत-स्वप्न-सुषुप्ति से परे तुरीया सौंदर्य) का दर्शन सिखाता है कि सृष्टि और मोक्ष विरोधी नहीं, अपितु चित्-शक्ति का ही आनन्दमय विलास हैं।',
    iconographicAttributesEn: [
      'Ikṣukodaṇḍa (Sugarcane Bow of the Mind)',
      'Pañcabāṇa (Five Flowery Arrows of Sense-Essences)',
      'Pāśa (Noose of Attraction) & Aṅkuśa (Goad of Repulsion)',
      'Enthroned above the Nine-Enclosure Śrīcakra'
    ],
    iconographicAttributesHi: [
      'इक्षुकोदण्ड (मन रूपी गन्ने का धनुष)',
      'पंच पुष्प-बाण (पाँच तन्मात्राएँ)',
      'पाश एवं अंकुश',
      'नव-आवरण श्रीचक्र के बिन्दु-पीठ पर आसीन'
    ]
  },
  {
    id: 'mahavidya-04-bhuvaneshwari',
    stageIndex: 4,
    badgeCode: '04 / 10',
    nameEn: 'BHUVANESHWARI',
    nameHi: '०४. भुवनेश्वरी (सर्वलोक-महेश्वरी)',
    transliteration: 'Bhuvaneśvarī · Mahākāśa-Rūpiṇī',
    themeTitleEn: 'THE VAST EXPANSE',
    themeTitleHi: 'अनंत महाकाश एवं सृष्टि-आधार',
    reflectionEn: 'Space holds every form',
    reflectionHi: 'अनंत आकाश ही प्रत्येक रूप को धारण करता है',
    keywordEn: 'COSMIC SPACE',
    keywordHi: 'चिदाकाश एवं विस्तार',
    accentColor: '#60A5FA',
    secondaryColor: '#F59E0B',
    progressRatio: 0.4,
    uploadedPlateUrl: '/assets/aistudio/image_c3af677b.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_04_bhuvaneshvari.jpg',
    bijaMantra: 'ह्रीं (Hrīṃ — Praṇava of Śakti)',
    mulaMantraSanskrit: 'ॐ भुवनेश्वर्यै नमः॥',
    mulaMantraIAST: 'Om Bhuvaneshvaryai Namah',
    kulaStreamEn: 'Śrīkula / Kālīkula Bridge · 4th Mahāvidyā',
    kulaStreamHi: 'चतुर्थ महाविद्या · भुवनेश्वरी',
    bhairavaConsortEn: 'Tryambaka Śiva',
    bhairavaConsortHi: 'त्र्यम्बक शिव',
    directionEn: 'West / All-Pervading Space',
    symbolExplanationEn:
      'An upward cosmic-blue triangle anchored by a golden sun-ring at its base and spanned by parallel diagonal field lines—illustrating how infinite space (Ākāśa) provides the open canvas within which every world (Bhuvana) and timeline unfolds.',
    symbolExplanationHi:
      'आधार में स्वर्ण-वलय से युक्त नील त्रिकोण और पूरे फलक पर फैली समानांतर ब्रह्माण्डीय रेखाएँ—यह दर्शाती हैं कि कैसे अनंत चिदाकाश बिना किसी भेदभाव के समस्त चौदह भुवनों को अपने भीतर स्थान देता है।',
    philosophicalInsightEn:
      'Her single-syllable Ekākṣarī mantra Hrīṃ encapsulates creation (H), preservation (R), dissolution (Ī), and transcendence (Bindu). Contemplating Bhuvaneśvarī expands constricted egoic awareness into vast equanimity.',
    philosophicalInsightHi:
      'उनका एकाक्षरी बीज "ह्रीं" (माया-बीज) सृष्टि, स्थिति और लय का समाहार है। भुवनेश्वरी का ध्यान संकुचित अहं-भाव को मिटाकर चित्त को आकाश के समान विशाल और समदर्शी बनाता है।',
    iconographicAttributesEn: [
      'Crowned with the Crescent Moon & Jewelled Diadem',
      'Holding Pāśa (Noose) & Aṅkuśa (Goad)',
      'Abhaya & Varada Mudrās Bestowing Grace',
      'Radiant Rising-Sun Complexion in Heart Space (Daharakāśa)'
    ],
    iconographicAttributesHi: [
      'चन्द्र-मुकुट एवं रत्न-किरीट धारिणी',
      'पाश एवं अंकुश युक्त',
      'अभय एवं वरद मुद्रा',
      'हृदयाकाश (दहराकाश) में उदीयमान सूर्य सदृश प्रभा'
    ]
  },
  {
    id: 'mahavidya-05-bhairavi',
    stageIndex: 5,
    badgeCode: '05 / 10',
    nameEn: 'BHAIRAVI',
    nameHi: '०५. त्रिपुरभैरवी (कौलेश्वरी)',
    transliteration: 'Tripurabhairavī · Tapas-Agni Śakti',
    themeTitleEn: 'FIERCE TRANSFORMATION',
    themeTitleHi: 'प्रचण्ड रूपांतरण एवं तपोग्नि',
    reflectionEn: 'Intensity becomes inner change',
    reflectionHi: 'तीव्र ऊर्जा ही आंतरिक रूपांतरण बन जाती है',
    keywordEn: 'TRANSFORMATION',
    keywordHi: 'तप एवं ऊर्ध्व-रूपांतरण',
    accentColor: '#F97316',
    secondaryColor: '#FACC15',
    progressRatio: 0.5,
    uploadedPlateUrl: '/assets/aistudio/image_e635285e.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_05_bhairavi.jpg',
    bijaMantra: 'हसैं हसकरीं हसैं (Hasaiṃ Hasakarīṃ Hasaiṃ)',
    mulaMantraSanskrit: 'ॐ भैरव्यै नमः॥',
    mulaMantraIAST: 'Om Bhairavyai Namah',
    kulaStreamEn: 'Kālīkula / Śrīkula Nexus · 5th Mahāvidyā',
    kulaStreamHi: 'पंचम महाविद्या · त्रिपुरभैरवी',
    bhairavaConsortEn: 'Dakṣiṇāmūrti / Vaṭuka Bhairava',
    bhairavaConsortHi: 'दक्षिणामूर्ति / कालभैरव',
    directionEn: 'South / Nadir Axis of Muladhara Fire',
    symbolExplanationEn:
      'A blazing orange triangle pierced by eight directional rays and surrounded by a dense vortex of fiery amber and golden sparks—depicting the alchemical fire of Tapas and awakened Kuṇḍalinī burning away inertia.',
    symbolExplanationHi:
      'अष्ट-दिशाओं की किरणों से युक्त प्रज्वलित नारंगी त्रिकोण और चारों ओर घूमते अग्नि-स्फुलिंग—यह योग की तपोग्नि और मूलाधार में जाग्रत कुण्डलिनी-तेज द्वारा अज्ञान के भस्मीकरण का प्रतीक है।',
    philosophicalInsightEn:
      'Shining like ten thousand rising suns, Tripurabhairavī is the fierce disciplined heat (Tapas) and relentless kriyā-śakti that transmutes raw passion and obstacle into spiritual illumination.',
    philosophicalInsightHi:
      'सहस्रों उदीयमान सूर्यों के समान तेजस्वी त्रिपुरभैरवी साधना की वह प्रचण्ड तप-शक्ति हैं जो जड़ता और विकारों को दग्ध कर अंतःकरण को शुद्ध ज्योति में बदल देती हैं।',
    iconographicAttributesEn: [
      ' Japamālā (Rosary of Letters) & Pustaka (Book of Vidyā)',
      'Abhaya & Varada Mudrās',
      'Crimson Silk Raiments & Garland of Severed Heads',
      'Three Eyes Blazing with Tapas-Agni'
    ],
    iconographicAttributesHi: [
      'अक्षमाला (जपमाला) एवं विद्या-पुस्तक धारिणी',
      'अभय एवं वरद मुद्रा',
      'रक्त-वस्त्र एवं मुण्डमाला विभूषिता',
      'तपोग्नि से दीप्त त्रिनेत्र'
    ]
  },
  {
    id: 'mahavidya-06-chhinnamasta',
    stageIndex: 6,
    badgeCode: '06 / 10',
    nameEn: 'CHHINNAMASTA',
    nameHi: '०६. छिन्नमस्ता (प्रचण्डचण्डिका)',
    transliteration: 'Chhinnamastā · Vajravairocanī',
    themeTitleEn: 'GIVING & RENEWAL',
    themeTitleHi: 'आत्म-उत्सर्ग, चक्रिक पोषण एवं नव-सृजन',
    reflectionEn: 'Life receives and gives again',
    reflectionHi: 'जीवन ग्रहण करता है और पुनः उत्सर्ग करता है',
    keywordEn: 'INTERDEPENDENCE',
    keywordHi: 'परस्पर निर्भरता एवं ग्रन्थि-भेदन',
    accentColor: '#FB7185',
    secondaryColor: '#FBBF24',
    progressRatio: 0.6,
    uploadedPlateUrl: '/assets/aistudio/image_8c680747.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_06_chhinnamasta.jpg',
    bijaMantra: 'हूं (Hūṃ) · वज्रवैरोचनीये हुं हुं फट् स्वाहा',
    mulaMantraSanskrit: 'ॐ छिन्नमस्तायै नमः॥',
    mulaMantraIAST: 'Om Chhinnamastayai Namah',
    kulaStreamEn: 'Kālīkula · 6th Mahāvidyā',
    kulaStreamHi: 'कालीकुल · षष्ठ महाविद्या',
    bhairavaConsortEn: 'Kabandha / Krodha Bhairava',
    bhairavaConsortHi: 'कबन्ध शिव / क्रोध भैरव',
    directionEn: 'East / Central Suṣumṇā Lightning Axis',
    symbolExplanationEn:
      'A central triangle linking three interconnected double-rings bridged by horizontal golden conduits and three circulating golden energy points—representing the triad of channels (Iḍā, Piṅgalā, Suṣumṇā) and the three streams of life-force nourishing Ḍākinī, Varṇinī, and the Self.',
    symbolExplanationHi:
      'केंद्रीय त्रिकोण से जुड़े तीन युगल-वृत्त और स्वर्ण-सेतुओं पर प्रवाहित तीन ऊर्जा-बिन्दु—यह इड़ा, पिंगला और सुषुम्णा नाड़ियों के संगम तथा डाकिनी, वर्णिनी और स्वयं को पोषित करने वाली प्राण-धाराओं का ज्यामितीय प्रतीक है।',
    philosophicalInsightEn:
      'By severing her own head (the crown of discursive ego-mind / Rudra-granthi), Chhinnamastā reveals the cosmic law of Yajña: life is a continuous circulation of self-offering and renewal where giver, gift, and receiver are one.',
    philosophicalInsightHi:
      'अपने ही मस्तक (अहंकार और विकल्प-जाल) का छेदन कर छिन्नमस्ता यह सर्वोच्च रहस्य प्रकट करती हैं कि समग्र अस्तित्व एक सतत यज्ञ है जहाँ दाता, दान और भोक्ता एक ही अद्वैत प्राण हैं।',
    iconographicAttributesEn: [
      'Holding Her Own Severed Head in Left Hand',
      'Three Streams of Nectar/Blood Nourishing Ḍākinī, Varṇinī & Self',
      'Standing upon Kāma and Rati Above an Inverted Triangle',
      'Vajra-like Lightning Radiance Opening Brahmarandhra'
    ],
    iconographicAttributesHi: [
      'वाम हस्त में स्व-छिन्न मस्तक एवं दक्षिण हस्त में कर्तरी',
      'कण्ठ से निःसृत तीन धाराओं से डाकिनी, वर्णिनी व स्व-पोषण',
      'काम-रति के ऊपर अधोमुख त्रिकोण में स्थित',
      'कोटि-सूर्य एवं विद्युत् सदृश वज्र-वैरोचनी आभा'
    ]
  },
  {
    id: 'mahavidya-07-dhumavati',
    stageIndex: 7,
    badgeCode: '07 / 10',
    nameEn: 'DHUMAVATI',
    nameHi: '०७. धूमावती (ज्येष्ठा / अलक्ष्मी-पारगामिनी)',
    transliteration: 'Dhūmāvatī · Mahāpralaya-Śakti',
    themeTitleEn: 'THE UNWELCOME TRUTH',
    themeTitleHi: 'अप्रिय सत्य, अभाव एवं वैराग्य-प्रज्ञा',
    reflectionEn: 'Loss also belongs to life',
    reflectionHi: 'रिक्तता और वियोग भी जीवन के अनिवार्य सत्य हैं',
    keywordEn: 'ABSENCE / WISDOM',
    keywordHi: 'शून्यता एवं विवेक-वैराग्य',
    accentColor: '#94A3B8',
    secondaryColor: '#F59E0B',
    progressRatio: 0.7,
    uploadedPlateUrl: '/assets/aistudio/image_64fe843e.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_07_dhumavati.jpg',
    bijaMantra: 'धूं (Dhūṃ) · धूं धूं धूमावती ठः ठः',
    mulaMantraSanskrit: 'ॐ धूमावत्यै नमः॥',
    mulaMantraIAST: 'Om Dhumavatyai Namah',
    kulaStreamEn: 'Kālīkula · 7th Mahāvidyā',
    kulaStreamHi: 'कालीकुल · सप्तम महाविद्या',
    bhairavaConsortEn: 'None (Eternal Widow — Beyond Even Śiva at Mahāpralaya)',
    bhairavaConsortHi: 'विधवा स्वरूपा (महाप्रलय में शिव के लय के पश्चात् एकमात्र अवशिष्ट)',
    directionEn: 'Southeast / Void of Great Dissolution',
    symbolExplanationEn:
      'An ash-silver triangle bearing "THE UNSEEN" at its heart, veiled by drifting horizontal smoke-waves—showing how the smoke of dissolution (Dhūma) strips away superficial glamour to reveal the indestructible truth hidden in emptiness.',
    symbolExplanationHi:
      'धूम्र-रजत त्रिकोण के मध्य अंकित "अदृश्य सत्य" (THE UNSEEN) और उस पर तैरती धुएँ की तरंगें—यह दर्शाती हैं कि कैसे बाह्य आकर्षणों के भस्म होने के बाद ही शून्यता के भीतर छिपा नित्य सत्य प्रकट होता है।',
    philosophicalInsightEn:
      'As the only Mahāvidyā without a consort, Dhūmāvatī embodies the hard truths of loss, aging, disappointment, and solitude—teaching that when illusions are winnowed away like chaff, supreme non-attachment (Vairāgya) dawns.',
    philosophicalInsightHi:
      'सूप (शूर्प) धारण करने वाली धूमावती जीवन के अभाव, विछोह और एकाकीपन के कठोर सत्य का साक्षात्कार कराती हैं—जहाँ भ्रम की भूसी उड़ जाने पर केवल परम वैराग्य और आत्म-ज्ञान शेष रहता है।',
    iconographicAttributesEn: [
      'Śūrpa (Winnowing Basket separating grain of Truth from chaff)',
      'Horseless Chariot Bearing the Crow Banner (Kāka-dhvaja)',
      'Pale Widow Vestments Representing Post-Pralaya Silence',
      'Bestower of Supreme Vairāgya & Fearless Detachment'
    ],
    iconographicAttributesHi: [
      'शूर्प (सूप — सार और असार का विवेक करने वाला)',
      'काक-ध्वज युक्त बिना अश्व का रथ',
      'श्वेत विधवा वेश (महाप्रलय की निस्तब्धता)',
      'परम वैराग्य एवं निर्भयता की दात्री'
    ]
  },
  {
    id: 'mahavidya-08-bagalamukhi',
    stageIndex: 8,
    badgeCode: '08 / 10',
    nameEn: 'BAGALAMUKHI',
    nameHi: '०८. बगलामुखी (पीताम्बरा / स्तम्भन-शक्ति)',
    transliteration: 'Bagalāmukhī · Vāk-Stambhinī',
    themeTitleEn: 'STILL THE SPEECH',
    themeTitleHi: 'वाक्-स्तम्भन एवं परम मौन की शक्ति',
    reflectionEn: 'A pause can change direction',
    reflectionHi: 'एक सचेत ठहराव (मौन) पूरी दिशा बदल सकता है',
    keywordEn: 'STILLNESS',
    keywordHi: 'स्तम्भन एवं निश्चल एकाग्रता',
    accentColor: '#FACC15',
    secondaryColor: '#FEF08A',
    progressRatio: 0.8,
    uploadedPlateUrl: '/assets/aistudio/image_43fc5ac5.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_08_bagalamukhi.jpg',
    bijaMantra: 'ह्लीं (Hlīṃ)',
    mulaMantraSanskrit: 'ॐ बगलामुख्यै नमः॥',
    mulaMantraIAST: 'Om Bagalamukhyai Namah',
    kulaStreamEn: 'Śrīkula / Kālīkula · 8th Mahāvidyā',
    kulaStreamHi: 'अष्टम महाविद्या · पीताम्बरा बगलामुखी',
    bhairavaConsortEn: 'Ekavaktra Mahārudra / Mṛtyuñjaya',
    bhairavaConsortHi: 'एकवक्त्र महारुद्र',
    directionEn: 'South / Golden Throne in the Ocean of Nectar',
    symbolExplanationEn:
      'A radiant golden triangle framing twin vertical pause-pillars (||) surrounded by suspended golden and white particles—visualizing Stambhana: the sudden arrest of compulsive speech, reactive thought, and hostile momentum into luminous stillness.',
    symbolExplanationHi:
      'स्वर्णिम त्रिकोण के भीतर स्थित दो ऊर्ध्वाधर स्तम्भन-रेखाएँ (||) और अंतरिक्ष में ठहरे हुए स्वर्ण-कण—यह "स्तम्भन" अर्थात् चंचल वाणी, प्रतिक्रियाशील विचारों और विपरीत वेग को तत्क्षण शांत कर देने की शक्ति का प्रतीक है।',
    philosophicalInsightEn:
      'Known as Vāg-vadhinī and Pītāmbarā, Bagalāmukhī seizes the tongue of the demon Madana (runaway dualistic babble). In the sacred pause between stimulus and response lies sovereign mastery.',
    philosophicalInsightHi:
      'पीताम्बरा बगलामुखी असुर की जिह्वा पकड़कर द्वैतवादी प्रलाप और अहंकारी तर्क को स्तम्भित करती हैं। विचार और वाणी के इसी पवित्र विराम (मौन) में आत्म-संप्रभुता जागती है।',
    iconographicAttributesEn: [
      'Golden-Yellow (Pītāmbarā) Robes, Garland & Throne',
      'Holding the Tongue of the Adversary & Mudgara (Club)',
      'Seated in a Pavilion of Gems in the Sudhāsāgara',
      'Sovereign of Stambhana (Stillness & Arrest of Motion)'
    ],
    iconographicAttributesHi: [
      'पीताम्बरा (पीत वस्त्र, पीत आभूषण एवं पीत सिंहासन)',
      'शत्रु/अहं की जिह्वा एवं मुद्गर धारिणी',
      'सुधासागर के मणिमण्डप में रत्न-सिंहासन पर आसीन',
      'वाक्-स्तम्भन एवं मनोनिरोध की अधिष्ठात्री'
    ]
  },
  {
    id: 'mahavidya-09-matangi',
    stageIndex: 9,
    badgeCode: '09 / 10',
    nameEn: 'MATANGI',
    nameHi: '०९. मातङ्गी (राजमातङ्गी / तांत्रिक सरस्वती)',
    transliteration: 'Mātaṅgī · Saṅgīta-Vidyā-mayī',
    themeTitleEn: 'VOICE & EXPRESSION',
    themeTitleHi: 'जीवंत वाणी, संगीत एवं चौंसठ कलाएँ',
    reflectionEn: 'Speech carries living knowledge',
    reflectionHi: 'वाणी और संगीत में जीवंत ज्ञान प्रवाहित होता है',
    keywordEn: 'MUSIC / LANGUAGE',
    keywordHi: 'संगीत, भाषा एवं कला-प्रवाह',
    accentColor: '#34D399',
    secondaryColor: '#FBBF24',
    progressRatio: 0.9,
    uploadedPlateUrl: '/assets/aistudio/image_aad2da19.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_09_matangi.jpg',
    bijaMantra: 'ऐं (Aiṃ — Vāgbhava Bīja)',
    mulaMantraSanskrit: 'ॐ मातङ्ग्यै नमः॥',
    mulaMantraIAST: 'Om Matangyai Namah',
    kulaStreamEn: 'Śrīkula (Mantriṇī / Śyāmalā) · 9th Mahāvidyā',
    kulaStreamHi: 'श्रीकुल (मंत्रिणी श्यामला) · नवम महाविद्या',
    bhairavaConsortEn: 'Mātaṅga Śiva (Sadāśiva)',
    bhairavaConsortHi: 'मातंग शिव',
    directionEn: 'Northwest / Throat & Palate Resonance',
    symbolExplanationEn:
      'An emerald-teal triangle where raw flowing acoustic waves on the left pass through the prism of consciousness and emerge on the right as a structured matrix of emerald and gold pixel-glyphs—showing how inner Nāda becomes articulated language, poetry, and musical rāga.',
    symbolExplanationHi:
      'मरकत-हरित त्रिकोण जिसके वाम भाग से प्रवाहित सूक्ष्म नाद-तरंगें चेतना के प्रिज्म से गुजरकर दक्षिण भाग में हरित व स्वर्ण अक्षरों/स्वर-लिपियों के सुव्यवस्थित जाल में बदल जाती हैं—यह अव्यक्त भाव के संगीत, काव्य और भाषा में प्रकटीकरण का प्रतीक है।',
    philosophicalInsightEn:
      'Revered in Śrīvidyā as Mantriṇī (Prime Minister of Lalitā) and Tantric Sarasvatī, Mātaṅgī sanctifies even the marginal and unspoken (Ucchiṣṭa), turning authentic creative expression into a vehicle of liberation.',
    philosophicalInsightHi:
      'श्रीविद्या में राजराजेश्वरी की महामंत्री (मंत्रिणी/श्यामला) के रूप में पूजित मातङ्गी माणिक्य-वीणा धारण करती हैं और परा से वैखरी तक वाणी के चारों स्तरों को चैतन्य बनाती हैं।',
    iconographicAttributesEn: [
      'Playing the Ruby-Studded Vīṇā (Māṇikya-Vīṇā)',
      'Emerald-Green Complexion (Marakata-Śyāmā)',
      'Listening Parrot (Śuka) Perched on Her Hand',
      'Adorned with Crescent Moon & Kadamba Blossoms'
    ],
    iconographicAttributesHi: [
      'माणिक्य-वीणा वादिनी (संगीत-मातृका)',
      'मरकत-मणि के समान श्यामल-हरित वर्ण',
      'कर-कमल पर बैठा शुक (तोता — परा-वाणी का प्रतीक)',
      'चन्द्र-कला एवं कदम्ब-पुष्पों से अलंकृत'
    ]
  },
  {
    id: 'mahavidya-10-kamala',
    stageIndex: 10,
    badgeCode: '10 / 10',
    nameEn: 'KAMALA',
    nameHi: '१०. कमला (कमलात्मिका / तांत्रिक महालक्ष्मी)',
    transliteration: 'Kamalā · Śrī-Soubhāgya-Dayinī',
    themeTitleEn: 'FLOURISHING LIFE',
    themeTitleHi: 'पल्लवित जीवन, श्री एवं आध्यात्मिक समृद्धि',
    reflectionEn: 'Abundance grows with care',
    reflectionHi: 'सजगता और करुणा से ही समृद्धि पल्लवित होती है',
    keywordEn: 'PROSPERITY',
    keywordHi: 'ऐश्वर्य, सौभाग्य एवं पूर्ण विकास',
    accentColor: '#FBBF24',
    secondaryColor: '#FDE68A',
    progressRatio: 1.0,
    uploadedPlateUrl: '/assets/aistudio/image_20cc39c8.png',
    traditionalArtUrl: '/assets/aistudio/mahavidya_10_kamala.jpg',
    bijaMantra: 'श्रीं (Śrīṃ — Lakṣmī Bīja)',
    mulaMantraSanskrit: 'ॐ कमलायै नमः॥',
    mulaMantraIAST: 'Om Kamalayai Namah',
    kulaStreamEn: 'Śrīkula · 10th Mahāvidyā',
    kulaStreamHi: 'श्रीकुल · दशम महाविद्या',
    bhairavaConsortEn: 'Sadāśiva / कमलनाथ नारायण',
    bhairavaConsortHi: 'सदाशिव / नारायण',
    directionEn: 'Southwest / Blossoming Lotus Mandala',
    symbolExplanationEn:
      'A multi-faceted golden diamond-lotus polyhedron enclosing concentric hexagons and an inner upward triangle—symbolizing organic symmetry, crystalline order, and the blossoming of spiritual and material auspiciousness (Śrī).',
    symbolExplanationHi:
      'बहु-आयामी स्वर्ण-कमल मणि (पॉलीहेड्रॉन) जिसके भीतर समषट्भुज और ऊर्ध्वमुखी त्रिकोण स्थित हैं—यह सृष्टि के सुव्यवस्थित सौंदर्य, आंतरिक संतुलन और आध्यात्मिक-भौतिक श्री की पूर्ण खिलन का प्रतीक है।',
    philosophicalInsightEn:
      'While the Mahāvidyā cycle begins with Kālī stripping away false attachments in the cremation ground, it culminates in Kamalā—where the purified world is recognized as a sacred golden lotus bathed by four white elephants (Dharma, Artha, Kāma, Mokṣa).',
    philosophicalInsightHi:
      'जहाँ महाविद्या-चक्र का आरम्भ काली द्वारा अज्ञान के संहार से होता है, वहीं इसकी परिणति कमला में होती है—जहाँ शुद्ध दृष्टि को यह सम्पूर्ण जगत् चार श्वेत गजों (धर्म, अर्थ, काम, मोक्ष) से अभिषिक्त स्वर्ण-कमल के रूप में दिखाई देता है।',
    iconographicAttributesEn: [
      'Seated on a Full-Blown Golden Lotus (Padmāsanā)',
      'Bathed with Nectar by Four Snow-White Elephants',
      'Holding Two Lotuses & Bestowing Abhaya and Varada',
      'Resplendent Golden Complexion (Kāñcana-Sannibhā)'
    ],
    iconographicAttributesHi: [
      'प्रफुल्लित स्वर्ण-कमल पर पद्मासनासीन',
      'चार हिम-श्वेत गजों द्वारा अमृत-कलशों से अभिषिक्त',
      'दो करों में पद्म तथा दो करों में अभय व वरद मुद्रा',
      'तप्त-कांचन (स्वर्ण) के समान दैदीप्यमान आभा'
    ]
  },
  {
    id: 'mahavidya-outro',
    stageIndex: 11,
    badgeCode: 'OUTRO',
    nameEn: 'TEN FORMS / ONE SOURCE',
    nameHi: 'दस महाविद्या · एक आद्या पराशक्ति',
    transliteration: 'Daśadhā Bhāti Ekā Parā-Śaktiḥ',
    themeTitleEn: 'MANY FACES OF WISDOM · ONE BOUNDLESS DEVI',
    themeTitleHi: 'प्रज्ञा के अनेक मुख · एक अनंत भगवती',
    reflectionEn: 'Many faces of wisdom. One boundless Devi. Observe. Question. Return to the centre.',
    reflectionHi: 'प्रज्ञा के अनेक रूप, किंतु एक ही असीम देवी। देखें, जिज्ञासा करें और पुनः केंद्र (बिन्दु) में लौट आएँ।',
    keywordEn: 'RETURN TO THE CENTRE',
    keywordHi: 'केंद्र-बिन्दु में प्रत्यावर्तन',
    accentColor: '#F59E0B',
    secondaryColor: '#38BDF8',
    progressRatio: 1.0,
    uploadedPlateUrl: '/assets/aistudio/image_89d6a681.png',
    symbolExplanationEn:
      'From the single luminous white Bindu and golden ring at the centre, ten rays radiate outward to the ten distinct geometric emblems (triangles and hexagons in each Mahāvidyā’s color)—demonstrating how all ten wisdoms are projections of one undivided Consciousness.',
    symbolExplanationHi:
      'केंद्र के एकमात्र श्वेत बिन्दु और स्वर्ण-वलय से दसों दिशाओं में निकलती दस रंगीन किरणें और दस ज्यामितीय प्रतीक (त्रिकोण एवं षट्भुज)—यह प्रत्यक्ष दर्शाते हैं कि दसों महाविद्याएँ एक ही अद्वैत चित्-शक्ति की दस किरणें हैं।',
    philosophicalInsightEn:
      'Whether approached through time (Kālī), sound (Tārā), harmony (Ṣoḍaśī), space (Bhuvaneśvarī), fire (Bhairavī), sacrifice (Chhinnamastā), emptiness (Dhūmāvatī), stillness (Bagalāmukhī), expression (Mātaṅgī), or abundance (Kamalā), every path leads back to the same central Bindu.',
    philosophicalInsightHi:
      'चाहे काल (काली), नाद (तारा), पूर्णता (षोडशी), आकाश (भुवनेश्वरी), तप (भैरवी), उत्सर्ग (छिन्नमस्ता), वैराग्य (धूमावती), मौन (बगलामुखी), संगीत (मातङ्गी) या श्री (कमला) के माध्यम से देखा जाए—प्रत्येक मार्ग साधक को उसी एक केंद्रीय बिन्दु में प्रतिष्ठित करता है।'
  }
];

/**
 * Live Animated Sacred Geometry Canvas reproducing and animating all 12 plates
 * (Intro, 01 Kali to 10 Kamala, and Outro) on a dark blueprint coordinate grid.
 */
const AnimatedMahavidyaGeometryCanvas: React.FC<{
  slide: MahavidyaStudioSlide;
  isMotionPaused: boolean;
  onSelectStage?: (stageIndex: number) => void;
}> = ({ slide, isMotionPaused, onSelectStage }) => {
  const animState = isMotionPaused ? 'paused' : 'running';

  // Helper to generate polygon points
  const makePolygonPoints = (cx: number, cy: number, r: number, sides: number, rotDeg = 0) => {
    const pts: string[] = [];
    for (let i = 0; i < sides; i++) {
      const a = ((i * 360) / sides + rotDeg) * (Math.PI / 180);
      pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
    }
    return pts.join(' ');
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-[#1E3A5F]/80 bg-[#050912] shadow-[0_0_50px_rgba(0,0,0,0.9)] select-none">
      <style>{`
        @keyframes mvSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes mvSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes mvPulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes mvWaveFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
        @keyframes mvFloatParticle {
          0%, 100% { transform: translateY(0px) scale(0.9); opacity: 0.45; }
          50% { transform: translateY(-7px) scale(1.25); opacity: 1; }
        }
        @keyframes mvDiagonalSweep {
          0%, 100% { transform: translateX(-4px); opacity: 0.65; }
          50% { transform: translateX(4px); opacity: 1; }
        }
      `}</style>

      <svg
        viewBox="0 0 320 420"
        className="w-full h-auto block"
        role="img"
        aria-label={`${slide.nameEn} — ${slide.themeTitleEn} Sacred Geometry Motion Canvas`}
      >
        <defs>
          {/* Blueprint Grid Pattern */}
          <pattern id="mv-blueprint-grid" width="26.66" height="26.66" patternUnits="userSpaceOnUse">
            <path
              d="M 26.66 0 L 0 0 0 26.66"
              fill="none"
              stroke="#0E2238"
              strokeWidth="0.7"
            />
          </pattern>
          <radialGradient id={`mv-glow-${slide.stageIndex}`} cx="50%" cy="48%" r="48%">
            <stop offset="0%" stopColor={slide.accentColor} stopOpacity="0.22" />
            <stop offset="65%" stopColor={slide.secondaryColor} stopOpacity="0.06" />
            <stop offset="100%" stopColor="#050912" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep Blueprint Background & Frame */}
        <rect x="0" y="0" width="320" height="420" fill="#050912" />
        <rect x="0" y="0" width="320" height="420" fill="url(#mv-blueprint-grid)" />
        <rect
          x="10"
          y="10"
          width="300"
          height="400"
          fill="none"
          stroke="#163554"
          strokeWidth="1"
        />

        {/* Ambient Center Radial Glow */}
        <circle cx="160" cy="198" r="138" fill={`url(#mv-glow-${slide.stageIndex})`} />

        {/* Top Studio Header Inside Blueprint Frame */}
        <text
          x="160"
          y="30"
          textAnchor="middle"
          fill="#F8FAFC"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.16em"
          className="font-sans"
        >
          DAŚA MAHĀVIDYĀ STUDIO
        </text>
        <text
          x="160"
          y="43"
          textAnchor="middle"
          fill="#D3AD55"
          fontSize="6.5"
          fontWeight="600"
          letterSpacing="0.2em"
          className="font-mono"
        >
          RESEARCH  |  SACRED GEOMETRY  |  CONTEMPLATION
        </text>

        {/* Stage Counter & Title Header for 01..10 */}
        {slide.stageIndex >= 1 && slide.stageIndex <= 10 && (
          <g>
            <text
              x="160"
              y="68"
              textAnchor="middle"
              fill={slide.accentColor}
              fontSize="9.5"
              fontWeight="700"
              letterSpacing="0.22em"
              className="font-mono"
            >
              {slide.badgeCode}
            </text>
            <text
              x="160"
              y="92"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="21"
              fontWeight="800"
              letterSpacing="0.08em"
              className="font-sans"
            >
              {slide.nameEn}
            </text>
          </g>
        )}

        {/* Background Concentric Geometric Rings for 01..10 */}
        {slide.stageIndex >= 1 && slide.stageIndex <= 10 && (
          <g>
            <circle
              cx="160"
              cy="195"
              r="102"
              fill="none"
              stroke={slide.accentColor}
              strokeOpacity="0.18"
              strokeWidth="0.9"
            />
            <g
              style={{
                transformOrigin: '160px 195px',
                animation: `mvSpinSlow 44s linear infinite`,
                animationPlayState: animState
              }}
            >
              <polygon
                points={makePolygonPoints(160, 195, 86, 10, 18)}
                fill="none"
                stroke={slide.accentColor}
                strokeOpacity="0.22"
                strokeWidth="0.9"
              />
            </g>
            <g
              style={{
                transformOrigin: '160px 195px',
                animation: `mvSpinReverse 32s linear infinite`,
                animationPlayState: animState
              }}
            >
              <polygon
                points={makePolygonPoints(160, 195, 68, 8, 22.5)}
                fill="none"
                stroke={slide.accentColor}
                strokeOpacity="0.26"
                strokeWidth="0.9"
              />
            </g>
          </g>
        )}

        {/* =================================================================
            STAGE 00: INTRO — 10 MAHAVIDYAS
           ================================================================= */}
        {slide.stageIndex === 0 && (
          <g>
            <text
              x="160"
              y="88"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="21"
              fontWeight="800"
              letterSpacing="0.06em"
            >
              10 MAHAVIDYAS
            </text>
            <text
              x="160"
              y="108"
              textAnchor="middle"
              fill="#F59E0B"
              fontSize="12.5"
              fontWeight="700"
              letterSpacing="0.08em"
            >
              TEN FACETS OF DEVI
            </text>
            <text
              x="160"
              y="124"
              textAnchor="middle"
              fill="#38BDF8"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.1em"
            >
              A VISUAL INTERPRETATION
            </text>

            {/* Outer Breathing Cyan Circle */}
            <g
              style={{
                transformOrigin: '160px 212px',
                animation: `mvPulseGlow 4s ease-in-out infinite`,
                animationPlayState: animState
              }}
            >
              <circle
                cx="160"
                cy="212"
                r="76"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.8"
              />
            </g>

            {/* Orbiting subtle light node on the cyan circle */}
            <g
              style={{
                transformOrigin: '160px 212px',
                animation: `mvSpinSlow 16s linear infinite`,
                animationPlayState: animState
              }}
            >
              <circle cx="160" cy="136" r="3" fill="#38BDF8" />
              <circle cx="160" cy="288" r="2.2" fill="#F59E0B" />
            </g>

            {/* Inner Golden Bindu Ring */}
            <circle
              cx="160"
              cy="212"
              r="10"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.2"
              style={{
                transformOrigin: '160px 212px',
                animation: `mvPulseGlow 2.4s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />

            <text
              x="160"
              y="326"
              textAnchor="middle"
              fill="#E2E8F0"
              fontSize="11"
              className="font-sans"
            >
              Ten forms. Ten reflections
            </text>
            <text
              x="160"
              y="343"
              textAnchor="middle"
              fill="#E2E8F0"
              fontSize="11"
              className="font-sans"
            >
              on the nature of existence.
            </text>
            <text
              x="160"
              y="390"
              textAnchor="middle"
              fill="#D3AD55"
              fontSize="7.5"
              fontWeight="600"
              letterSpacing="0.16em"
              className="font-mono"
            >
              INSPIRED BY SACRED GEOMETRY
            </text>
          </g>
        )}

        {/* =================================================================
            STAGE 01: KALI — TIME & DISSOLUTION
           ================================================================= */}
        {slide.stageIndex === 1 && (
          <g>
            {/* Scattered Crimson Time-Particles */}
            {[
              [106, 134], [148, 126], [198, 118], [178, 142], [122, 162],
              [142, 182], [160, 195], [186, 186], [218, 168], [248, 156],
              [92, 178], [76, 200], [116, 218], [144, 232], [174, 214],
              [195, 238], [228, 216], [254, 198], [132, 148], [164, 172]
            ].map(([px, py], i) => (
              <circle
                key={i}
                cx={px}
                cy={py}
                r={i % 3 === 0 ? 2.3 : 1.7}
                fill="#EF4444"
                style={{
                  animation: `mvFloatParticle ${2.2 + (i % 5) * 0.4}s ease-in-out ${(i % 4) * 0.3}s infinite`,
                  animationPlayState: animState
                }}
              />
            ))}

            {/* Right-Pointing Crimson Triangle */}
            <polygon
              points="126,144 236,195 126,246"
              fill="#EF4444"
              fillOpacity="0.06"
              stroke="#EF4444"
              strokeWidth="1.6"
              style={{
                transformOrigin: '160px 195px',
                animation: `mvPulseGlow 3.5s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />

            {/* Ascending Undulating Crimson Time-Wave */}
            <path
              d="M 42 252 Q 58 226, 76 248 T 112 240 T 148 228 T 186 218 T 224 202 T 262 186 T 284 192"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M 42 252 Q 58 226, 76 248 T 112 240 T 148 228 T 186 218 T 224 202 T 262 186 T 284 192"
              fill="none"
              stroke="#FCA5A5"
              strokeWidth="1.2"
              strokeDasharray="8 16"
              style={{
                animation: `mvWaveFlow 3s linear infinite`,
                animationPlayState: animState
              }}
            />
          </g>
        )}

        {/* =================================================================
            STAGE 02: TARA — GUIDANCE THROUGH SOUND
           ================================================================= */}
        {slide.stageIndex === 2 && (
          <g>
            {/* Flowing Horizontal Acoustic / Ocean Waves */}
            {[-28, -14, 0, 14, 28].map((offsetY, idx) => (
              <path
                key={idx}
                d={`M 38 ${195 + offsetY} C 78 ${180 + offsetY}, 118 ${210 + offsetY}, 160 ${195 + offsetY} C 202 ${180 + offsetY}, 242 ${210 + offsetY}, 282 ${195 + offsetY}`}
                fill="none"
                stroke="#38BDF8"
                strokeOpacity={idx === 2 ? '0.85' : '0.28'}
                strokeWidth={idx === 2 ? '1.8' : '1'}
                strokeDasharray={idx === 2 ? 'none' : '4 3'}
                style={{
                  animation: `mvDiagonalSweep ${3 + idx * 0.5}s ease-in-out infinite`,
                  animationPlayState: animState
                }}
              />
            ))}

            {/* Upward Sky-Blue Triangle */}
            <polygon
              points="160,138 214,224 106,224"
              fill="#38BDF8"
              fillOpacity="0.07"
              stroke="#38BDF8"
              strokeWidth="1.7"
            />

            {/* 28 Golden Star-Dots Arranged in a 7-Row Triangular Constellation */}
            {Array.from({ length: 7 }).map((_, row) => {
              const count = row + 1;
              const y = 118 + row * 11.5;
              const startX = 160 - (row * 13) / 2;
              return Array.from({ length: count }).map((__, col) => {
                const x = startX + col * 13;
                return (
                  <circle
                    key={`star-${row}-${col}`}
                    cx={x}
                    cy={y}
                    r="1.9"
                    fill="#FBBF24"
                    style={{
                      animation: `mvFloatParticle 2.6s ease-in-out ${(row * 0.18 + col * 0.1).toFixed(2)}s infinite`,
                      animationPlayState: animState
                    }}
                  />
                );
              });
            })}
          </g>
        )}

        {/* =================================================================
            STAGE 03: SHODASHI — BEAUTY & COMPLETENESS
           ================================================================= */}
        {slide.stageIndex === 3 && (
          <g>
            {/* 9-Pointed Interlocking Star of Three Triangles with Golden Bindu Rings */}
            <g
              style={{
                transformOrigin: '160px 195px',
                animation: `mvSpinSlow 38s linear infinite`,
                animationPlayState: animState
              }}
            >
              {[0, 40, 80].map((rot, idx) => (
                <g key={idx} transform={`rotate(${rot} 160 195)`}>
                  <polygon
                    points={makePolygonPoints(160, 195, 74, 3, -90)}
                    fill="#EC4899"
                    fillOpacity="0.04"
                    stroke="#F472B6"
                    strokeWidth="1.5"
                  />
                  {/* Golden bindu rings near the 3 vertices of each triangle */}
                  {[0, 120, 240].map((vAng) => {
                    const rad = ((vAng - 90) * Math.PI) / 180;
                    const vx = 160 + 57 * Math.cos(rad);
                    const vy = 195 + 57 * Math.sin(rad);
                    return (
                      <circle
                        key={vAng}
                        cx={vx}
                        cy={vy}
                        r="3.2"
                        fill="none"
                        stroke="#FACC15"
                        strokeWidth="1.2"
                      />
                    );
                  })}
                </g>
              ))}
            </g>
          </g>
        )}

        {/* =================================================================
            STAGE 04: BHUVANESHWARI — THE VAST EXPANSE
           ================================================================= */}
        {slide.stageIndex === 4 && (
          <g>
            {/* Upward Indigo-Blue Triangle */}
            <polygon
              points="160,136 218,224 102,224"
              fill="#60A5FA"
              fillOpacity="0.06"
              stroke="#818CF8"
              strokeWidth="1.6"
            />

            {/* Sweeping Diagonal Parallel Cosmic Space Lines */}
            <g
              style={{
                animation: `mvDiagonalSweep 4.2s ease-in-out infinite`,
                animationPlayState: animState
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => {
                const xTop = 26 + i * 26;
                const xBot = 74 + i * 24;
                return (
                  <line
                    key={i}
                    x1={xTop}
                    y1="74"
                    x2={xBot}
                    y2="306"
                    stroke="#60A5FA"
                    strokeOpacity={i % 2 === 0 ? '0.85' : '0.45'}
                    strokeWidth="1.2"
                  />
                );
              })}
            </g>

            {/* Golden Ring at Base Center of Triangle */}
            <circle
              cx="160"
              cy="224"
              r="10.5"
              fill="#050912"
              fillOpacity="0.6"
              stroke="#F59E0B"
              strokeWidth="2"
              style={{
                transformOrigin: '160px 224px',
                animation: `mvPulseGlow 2.8s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />
          </g>
        )}

        {/* =================================================================
            STAGE 05: BHAIRAVI — FIERCE TRANSFORMATION
           ================================================================= */}
        {slide.stageIndex === 5 && (
          <g>
            {/* 8 Directional Radial Fire Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => {
              const rad = (ang * Math.PI) / 180;
              return (
                <line
                  key={ang}
                  x1={160 + 18 * Math.cos(rad)}
                  y1={195 + 18 * Math.sin(rad)}
                  x2={160 + 96 * Math.cos(rad)}
                  y2={195 + 96 * Math.sin(rad)}
                  stroke="#F97316"
                  strokeWidth="1.4"
                  strokeOpacity="0.85"
                />
              );
            })}

            {/* Left-Pointing Fiery Triangle */}
            <polygon
              points="96,195 196,142 196,248"
              fill="#F97316"
              fillOpacity="0.08"
              stroke="#F97316"
              strokeWidth="1.7"
              style={{
                transformOrigin: '160px 195px',
                animation: `mvPulseGlow 2.8s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />

            {/* Swirling Orange & Golden Fire Sparks */}
            {[
              [118, 128, 3.2, '#F97316'], [160, 120, 2.8, '#FACC15'], [208, 138, 2.5, '#F97316'],
              [84, 174, 3.0, '#F97316'], [102, 162, 2.2, '#FACC15'], [134, 172, 2.8, '#F97316'],
              [148, 156, 2.2, '#FACC15'], [172, 168, 2.6, '#FACC15'], [216, 174, 2.8, '#F97316'],
              [236, 192, 2.2, '#FACC15'], [72, 206, 3.2, '#F97316'], [92, 218, 2.6, '#FACC15'],
              [124, 204, 2.8, '#FACC15'], [152, 208, 3.0, '#F97316'], [176, 202, 2.8, '#F97316'],
              [192, 214, 2.6, '#FACC15'], [142, 238, 2.4, '#FACC15'], [178, 242, 2.8, '#F97316'],
              [224, 232, 2.6, '#F97316'], [108, 248, 2.8, '#F97316'], [138, 268, 2.4, '#F97316']
            ].map(([x, y, r, col], idx) => (
              <circle
                key={idx}
                cx={x as number}
                cy={y as number}
                r={r as number}
                fill={col as string}
                style={{
                  animation: `mvFloatParticle ${1.8 + (idx % 4) * 0.35}s ease-in-out ${(idx % 5) * 0.2}s infinite`,
                  animationPlayState: animState
                }}
              />
            ))}
          </g>
        )}

        {/* =================================================================
            STAGE 06: CHHINNAMASTA — GIVING & RENEWAL
           ================================================================= */}
        {slide.stageIndex === 6 && (
          <g>
            {/* Central Triangle */}
            <polygon
              points="154,136 218,224 106,232"
              fill="#FB7185"
              fillOpacity="0.06"
              stroke="#FB7185"
              strokeWidth="1.5"
            />

            {/* Three Interconnected Double-Circles (Self + Dakini + Varnini) */}
            {[
              { cx: 108, cy: 204, r: 28 },
              { cx: 160, cy: 218, r: 28 },
              { cx: 214, cy: 210, r: 28 }
            ].map((c, idx) => (
              <g key={idx}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={c.r}
                  fill="none"
                  stroke="#FB7185"
                  strokeWidth="1.8"
                />
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={c.r - 4}
                  fill="none"
                  stroke="#FB7185"
                  strokeOpacity="0.35"
                  strokeWidth="0.9"
                />
              </g>
            ))}

            {/* Two Golden Horizontal Energy Bridges */}
            <line x1="135" y1="196" x2="185" y2="196" stroke="#FBBF24" strokeWidth="1.8" />
            <line x1="192" y1="196" x2="240" y2="196" stroke="#FBBF24" strokeWidth="1.8" />

            {/* Three Circulating Golden Nodes */}
            {[
              { cx: 120, cy: 228 },
              { cx: 132, cy: 218 },
              { cx: 224, cy: 186 }
            ].map((pt, i) => (
              <circle
                key={i}
                cx={pt.cx}
                cy={pt.cy}
                r="3.4"
                fill="#FBBF24"
                style={{
                  transformOrigin: `${pt.cx}px ${pt.cy}px`,
                  animation: `mvPulseGlow ${2 + i * 0.4}s ease-in-out infinite`,
                  animationPlayState: animState
                }}
              />
            ))}
          </g>
        )}

        {/* =================================================================
            STAGE 07: DHUMAVATI — THE UNWELCOME TRUTH
           ================================================================= */}
        {slide.stageIndex === 7 && (
          <g>
            {/* Central Pale Triangle */}
            <polygon
              points="160,136 216,228 104,228"
              fill="#94A3B8"
              fillOpacity="0.06"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />

            {/* "THE UNSEEN" Golden Text Inside Triangle */}
            <text
              x="160"
              y="188"
              textAnchor="middle"
              fill="#F59E0B"
              fontSize="10.5"
              fontWeight="700"
              letterSpacing="0.12em"
              className="font-mono"
            >
              THE UNSEEN
            </text>

            {/* Drifting Translucent Smoke / Veil Waves */}
            {[-54, -30, -8, 16, 38, 60].map((dy, idx) => (
              <path
                key={idx}
                d={`M 32 ${195 + dy} Q 96 ${176 + dy * 0.9}, 160 ${195 + dy} T 288 ${195 + dy}`}
                fill="none"
                stroke="#CBD5E1"
                strokeOpacity={idx % 2 === 0 ? '0.68' : '0.32'}
                strokeWidth={idx % 2 === 0 ? '1.5' : '0.9'}
                style={{
                  animation: `mvDiagonalSweep ${3.5 + idx * 0.45}s ease-in-out infinite`,
                  animationPlayState: animState
                }}
              />
            ))}
          </g>
        )}

        {/* =================================================================
            STAGE 08: BAGALAMUKHI — STILL THE SPEECH
           ================================================================= */}
        {slide.stageIndex === 8 && (
          <g>
            {/* Suspended Golden & White Star Particles */}
            {[
              [104, 128, '#FACC15'], [134, 122, '#FFFFFF'], [196, 134, '#FACC15'],
              [82, 166, '#FACC15'], [118, 174, '#FACC15'], [136, 198, '#FFFFFF'],
              [174, 176, '#FACC15'], [208, 170, '#FACC15'], [246, 172, '#FACC15'],
              [78, 206, '#FACC15'], [104, 224, '#FACC15'], [142, 228, '#FFFFFF'],
              [184, 218, '#FACC15'], [216, 208, '#FFFFFF'], [254, 208, '#FFFFFF'],
              [122, 248, '#FACC15'], [162, 252, '#FACC15'], [206, 246, '#FACC15']
            ].map(([px, py, col], idx) => (
              <circle
                key={idx}
                cx={px as number}
                cy={py as number}
                r="1.8"
                fill={col as string}
                style={{
                  animation: `mvPulseGlow ${2.8 + (idx % 4) * 0.5}s ease-in-out infinite`,
                  animationPlayState: animState
                }}
              />
            ))}

            {/* Golden Upward Triangle */}
            <polygon
              points="168,136 212,228 104,220"
              fill="#FACC15"
              fillOpacity="0.06"
              stroke="#FACC15"
              strokeWidth="1.6"
            />

            {/* Iconic Twin Vertical Stambhana Pause Pillars (||) */}
            <rect
              x="150"
              y="168"
              width="6.5"
              height="52"
              rx="1"
              fill="#F59E0B"
              style={{
                transformOrigin: '160px 194px',
                animation: `mvPulseGlow 3s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />
            <rect
              x="164"
              y="168"
              width="6.5"
              height="52"
              rx="1"
              fill="#F59E0B"
              style={{
                transformOrigin: '160px 194px',
                animation: `mvPulseGlow 3s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />
          </g>
        )}

        {/* =================================================================
            STAGE 09: MATANGI — VOICE & EXPRESSION
           ================================================================= */}
        {slide.stageIndex === 9 && (
          <g>
            {/* Left-Side Flowing Acoustic Sound Waves */}
            {[-38, -22, -6, 10, 26, 42].map((dy, idx) => (
              <path
                key={idx}
                d={`M 36 ${192 + dy} Q 74 ${204 + dy}, 112 ${188 + dy} T 174 ${194 + dy}`}
                fill="none"
                stroke="#34D399"
                strokeOpacity="0.72"
                strokeWidth="1.3"
                style={{
                  animation: `mvDiagonalSweep ${2.8 + idx * 0.3}s ease-in-out infinite`,
                  animationPlayState: animState
                }}
              />
            ))}

            {/* Central Emerald-Teal Triangle */}
            <polygon
              points="154,136 214,224 104,226"
              fill="#34D399"
              fillOpacity="0.07"
              stroke="#34D399"
              strokeWidth="1.6"
            />

            {/* Right-Side Structured Matrix of Emerald & Gold Pixel-Glyphs */}
            {[
              [0, 0, '#FBBF24'], [1, 0, '#34D399'], [4, 0, '#34D399'], [5, 0, '#34D399'],
              [1, 1, '#34D399'], [2, 1, '#34D399'], [5, 1, '#34D399'], [6, 1, '#FBBF24'],
              [2, 2, '#34D399'], [3, 2, '#FBBF24'], [6, 2, '#FBBF24'], [7, 2, '#34D399'],
              [0, 3, '#FBBF24'], [3, 3, '#FBBF24'], [4, 3, '#34D399'], [7, 3, '#34D399'],
              [0, 4, '#FBBF24'], [1, 4, '#34D399'], [4, 4, '#34D399'], [5, 4, '#34D399'],
              [1, 5, '#34D399'], [2, 5, '#34D399'], [5, 5, '#34D399'], [6, 5, '#FBBF24'],
              [2, 6, '#34D399'], [3, 6, '#FBBF24'], [6, 6, '#FBBF24'], [7, 6, '#34D399'],
              [0, 7, '#FBBF24'], [3, 7, '#FBBF24'], [4, 7, '#34D399'], [7, 7, '#34D399']
            ].map(([col, row, color], idx) => (
              <rect
                key={idx}
                x={190 + (col as number) * 10}
                y={150 + (row as number) * 10.5}
                width="6"
                height="7.5"
                rx="0.8"
                fill={color as string}
                style={{
                  animation: `mvPulseGlow ${1.8 + (idx % 5) * 0.3}s ease-in-out ${(idx % 4) * 0.2}s infinite`,
                  animationPlayState: animState
                }}
              />
            ))}
          </g>
        )}

        {/* =================================================================
            STAGE 10: KAMALA — FLOURISHING LIFE
           ================================================================= */}
        {slide.stageIndex === 10 && (
          <g>
            {/* Outer Crystalline Golden Lotus-Diamond Polyhedron */}
            <g
              style={{
                transformOrigin: '160px 195px',
                animation: `mvPulseGlow 4s ease-in-out infinite`,
                animationPlayState: animState
              }}
            >
              {/* Outer 8-vertex diamond-lotus contour */}
              <polygon
                points="160,112 204,142 238,195 194,250 160,276 116,246 82,195 126,142"
                fill="#FBBF24"
                fillOpacity="0.06"
                stroke="#FBBF24"
                strokeWidth="2"
              />
              {/* Internal crystalline facet lines */}
              <polygon
                points="160,112 194,250 116,246"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="1.2"
              />
              <polygon
                points="160,276 204,142 126,142"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="1.2"
              />
              <line x1="82" y1="195" x2="204" y2="142" stroke="#FBBF24" strokeOpacity="0.55" strokeWidth="1" />
              <line x1="238" y1="195" x2="116" y2="246" stroke="#FBBF24" strokeOpacity="0.55" strokeWidth="1" />

              {/* Inner Upward Triangle & Nested Hexagons */}
              <polygon
                points="160,144 214,224 106,224"
                fill="none"
                stroke="#FDE68A"
                strokeWidth="1.1"
              />
              <polygon
                points={makePolygonPoints(160, 195, 38, 6, 0)}
                fill="none"
                stroke="#FBBF24"
                strokeOpacity="0.7"
                strokeWidth="1"
              />
              <polygon
                points={makePolygonPoints(160, 195, 22, 6, 0)}
                fill="none"
                stroke="#FBBF24"
                strokeOpacity="0.45"
                strokeWidth="0.9"
              />
            </g>
          </g>
        )}

        {/* =================================================================
            STAGE 11: OUTRO — TEN FORMS / ONE SOURCE
           ================================================================= */}
        {slide.stageIndex === 11 && (
          <g>
            <text
              x="160"
              y="88"
              textAnchor="middle"
              fill="#F59E0B"
              fontSize="15.5"
              fontWeight="800"
              letterSpacing="0.06em"
            >
              TEN FORMS  /  ONE SOURCE
            </text>

            {/* 10 Radial Rays + 10 Orbiting Mahavidya Geometric Emblems */}
            {[
              { ang: -90, color: '#F472B6', shape: 'triangle', stage: 3, label: '03' },
              { ang: -54, color: '#CBD5E1', shape: 'hexagon', stage: 7, label: '07' },
              { ang: -18, color: '#FACC15', shape: 'triangle', stage: 8, label: '08' },
              { ang: 18, color: '#34D399', shape: 'hexagon', stage: 9, label: '09' },
              { ang: 54, color: '#FBBF24', shape: 'triangle', stage: 10, label: '10' },
              { ang: 90, color: '#EF4444', shape: 'hexagon', stage: 1, label: '01' },
              { ang: 126, color: '#38BDF8', shape: 'triangle', stage: 2, label: '02' },
              { ang: 162, color: '#FB7185', shape: 'hexagon', stage: 6, label: '06' },
              { ang: 198, color: '#818CF8', shape: 'triangle', stage: 4, label: '04' },
              { ang: 234, color: '#F97316', shape: 'hexagon', stage: 5, label: '05' }
            ].map((item, idx) => {
              const rad = (item.ang * Math.PI) / 180;
              const ex = 160 + 88 * Math.cos(rad);
              const ey = 185 + 88 * Math.sin(rad);
              return (
                <g
                  key={idx}
                  onClick={() => onSelectStage && onSelectStage(item.stage)}
                  className="cursor-pointer group"
                >
                  <line
                    x1="160"
                    y1="185"
                    x2={ex}
                    y2={ey}
                    stroke={item.color}
                    strokeOpacity="0.65"
                    strokeWidth="1.2"
                  />
                  {item.shape === 'triangle' ? (
                    <polygon
                      points={makePolygonPoints(ex, ey, 11, 3, item.ang)}
                      fill="#050912"
                      fillOpacity="0.7"
                      stroke={item.color}
                      strokeWidth="1.5"
                    />
                  ) : (
                    <polygon
                      points={makePolygonPoints(ex, ey, 11, 6, item.ang)}
                      fill="#050912"
                      fillOpacity="0.7"
                      stroke={item.color}
                      strokeWidth="1.5"
                    />
                  )}
                </g>
              );
            })}

            {/* Central Golden Ring & Luminous White Bindu */}
            <circle
              cx="160"
              cy="185"
              r="26"
              fill="#050912"
              fillOpacity="0.4"
              stroke="#F59E0B"
              strokeWidth="1.8"
              style={{
                transformOrigin: '160px 185px',
                animation: `mvPulseGlow 3s ease-in-out infinite`,
                animationPlayState: animState
              }}
            />
            <circle cx="160" cy="185" r="4" fill="#FFFFFF" />

            {/* Contemplative Outro Verse */}
            <text x="160" y="302" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">
              Many faces of wisdom.
            </text>
            <text x="160" y="318" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">
              One boundless Devi.
            </text>
            <text x="160" y="334" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">
              Observe. Question.
            </text>
            <text x="160" y="350" textAnchor="middle" fill="#E2E8F0" fontSize="10.5">
              Return to the centre.
            </text>

            <text
              x="160"
              y="378"
              textAnchor="middle"
              fill="#38BDF8"
              fontSize="6.8"
              fontWeight="600"
              letterSpacing="0.16em"
              className="font-mono"
            >
              SACRED GEOMETRY  /  RESEARCH  DESIGN  HERITAGE
            </text>
            <text
              x="160"
              y="395"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="6"
              letterSpacing="0.14em"
              className="font-mono"
            >
              A CONTEMPORARY VISUAL INTERPRETATION
            </text>
          </g>
        )}

        {/* Bottom Theme Title, Reflection, Keyword & Progress Bar for 01..10 */}
        {slide.stageIndex >= 1 && slide.stageIndex <= 10 && (
          <g>
            <text
              x="160"
              y="296"
              textAnchor="middle"
              fill={slide.accentColor}
              fontSize="13.5"
              fontWeight="700"
              letterSpacing="0.08em"
              className="font-mono"
            >
              {slide.themeTitleEn}
            </text>
            <text
              x="160"
              y="319"
              textAnchor="middle"
              fill="#F1F5F9"
              fontSize="10"
              className="font-sans"
            >
              {slide.reflectionEn}
            </text>
            <text
              x="160"
              y="344"
              textAnchor="middle"
              fill="#D3AD55"
              fontSize="8"
              fontWeight="700"
              letterSpacing="0.14em"
              className="font-mono"
            >
              {slide.keywordEn}
            </text>

            {/* Progress Track & Active Bar */}
            <line
              x1="44"
              y1="368"
              x2="276"
              y2="368"
              stroke="#1E3A5F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="44"
              y1="368"
              x2={44 + 232 * slide.progressRatio}
              y2="368"
              stroke={slide.accentColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <text
              x="160"
              y="390"
              textAnchor="middle"
              fill="#CBD5E1"
              fontSize="6.5"
              letterSpacing="0.15em"
              className="font-mono"
            >
              SYMBOLS   /   GEOMETRY   /   CONTEMPLATION
            </text>
            <text
              x="160"
              y="402"
              textAnchor="middle"
              fill="#64748B"
              fontSize="5.5"
              letterSpacing="0.14em"
              className="font-mono"
            >
              CONTEMPORARY ART  ·  NOT HISTORICAL YANTRAS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export const DasaMahavidyaInteractiveStudio: React.FC<{
  lang?: 'en' | 'hi';
}> = ({ lang = 'en' }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [isMotionPaused, setIsMotionPaused] = useState<boolean>(false);
  const [visualMode, setVisualMode] = useState<'motion' | 'split' | 'plate'>('motion');

  const activeSlide =
    MAHAVIDYA_STUDIO_SLIDES.find((s) => s.stageIndex === activeStageIndex) ||
    MAHAVIDYA_STUDIO_SLIDES[0];

  // Auto-play progression across all 12 stages (Intro -> 01..10 -> Outro)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = window.setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % MAHAVIDYA_STUDIO_SLIDES.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setActiveStageIndex(
      (prev) => (prev - 1 + MAHAVIDYA_STUDIO_SLIDES.length) % MAHAVIDYA_STUDIO_SLIDES.length
    );
  };

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % MAHAVIDYA_STUDIO_SLIDES.length);
  };

  return (
    <section className="rounded-3xl border border-[#D3AD55]/45 bg-gradient-to-b from-[#070B14] via-[#0B101E] to-[#070B14] p-5 sm:p-8 text-[#F5EFE6] shadow-[0_25px_75px_rgba(0,0,0,0.85)] space-y-6">
      {/* Studio Top Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#D3AD55]/40 bg-[#D3AD55]/10 text-[#FDE68A] text-[11px] font-mono uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            SEAL 06 · INTERACTIVE SACRED GEOMETRY & CONTEMPLATION STUDIO
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            10 MAHAVIDYAS STUDIO —{' '}
            <span className="text-[#FDE68A]">दशमहाविद्या संवादात्मक ज्यामिति एवं दर्शन केंद्र</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            {lang === 'hi'
              ? 'प्रथम भाग: परिचय (INTRO) · ०१ काली से १० कमला तक के गतिशील ज्यामितीय प्रतीक एवं मंत्र-तत्त्व · अंतिम भाग: उपसंहार (OUTRO — दस रूप / एक मूल स्रोत)'
              : '12-Stage Interactive Journey: INTRO · 01 Kālī to 10 Kamalā Moving Sacred Geometry Symbols & Complete Dossiers · OUTRO (Ten Forms / One Source)'}
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoPlaying((v) => !v)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border transition flex items-center gap-1.5 cursor-pointer ${
              isAutoPlaying
                ? 'border-emerald-400 bg-emerald-950/60 text-emerald-200'
                : 'border-[#D3AD55]/60 bg-[#D3AD55]/15 text-[#FDE68A] hover:bg-[#D3AD55]/25'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isAutoPlaying ? 'Auto-Journey Active' : 'Auto-Play 12 Stages'}
          </button>

          <button
            type="button"
            onClick={() => setIsMotionPaused((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition flex items-center gap-1.5 cursor-pointer ${
              !isMotionPaused
                ? 'border-sky-400/50 bg-sky-950/40 text-sky-200'
                : 'border-white/15 bg-white/5 text-white/60'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${!isMotionPaused ? 'animate-spin' : ''}`} />
            {isMotionPaused ? 'Resume Motion' : 'Motion Active'}
          </button>

          <div className="inline-flex rounded-xl border border-white/15 bg-black/40 p-0.5">
            {[
              { id: 'motion', label: 'Moving Geometry' },
              { id: 'split', label: 'Motion + Plate' },
              { id: 'plate', label: 'Original Plate' }
            ].map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setVisualMode(mode.id as typeof visualMode)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition cursor-pointer ${
                  visualMode === mode.id
                    ? 'bg-[#D3AD55] text-black font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 12-Stage Navigation Strip (INTRO -> 01..10 -> OUTRO) */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
        {MAHAVIDYA_STUDIO_SLIDES.map((s) => {
          const isCurrent = s.stageIndex === activeStageIndex;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveStageIndex(s.stageIndex);
              }}
              className={`text-left rounded-xl p-2.5 border transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-white/[0.09] shadow-lg scale-[1.02]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.05]'
              }`}
              style={
                isCurrent
                  ? {
                      borderColor: s.accentColor,
                      boxShadow: `0 0 18px ${s.accentColor}38`
                    }
                  : undefined
              }
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className="text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: `${s.accentColor}22`,
                    color: s.accentColor
                  }}
                >
                  {s.stageIndex === 0
                    ? 'INTRO'
                    : s.stageIndex === 11
                    ? 'OUTRO'
                    : String(s.stageIndex).padStart(2, '0')}
                </span>
                {isCurrent && (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: s.accentColor }}
                  />
                )}
              </div>
              <div className="font-sans font-bold text-xs text-white truncate">
                {s.stageIndex === 0
                  ? 'Intro'
                  : s.stageIndex === 11
                  ? 'Outro'
                  : s.nameEn}
              </div>
              <div
                className="text-[9.5px] font-mono truncate mt-0.5"
                style={{ color: s.accentColor }}
              >
                {s.keywordEn}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Studio Content Grid: Left Visual Canvas + Right Detailed Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Left Column: Moving Sacred Geometry Canvas & Reference Plate */}
        <div className="lg:col-span-5 space-y-4">
          {visualMode === 'motion' && (
            <AnimatedMahavidyaGeometryCanvas
              slide={activeSlide}
              isMotionPaused={isMotionPaused}
              onSelectStage={(idx) => setActiveStageIndex(idx)}
            />
          )}

          {visualMode === 'plate' && (
            <div className="w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-[#D3AD55]/40 bg-[#050912] shadow-2xl">
              <img
                src={activeSlide.uploadedPlateUrl}
                alt={`${activeSlide.nameEn} — ${activeSlide.themeTitleEn}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
              />
            </div>
          )}

          {visualMode === 'split' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#FDE68A] mb-1 text-center">
                  Live Moving Geometry
                </div>
                <AnimatedMahavidyaGeometryCanvas
                  slide={activeSlide}
                  isMotionPaused={isMotionPaused}
                  onSelectStage={(idx) => setActiveStageIndex(idx)}
                />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-sky-300 mb-1 text-center">
                  Original Reference Plate
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#050912]">
                  <img
                    src={activeSlide.uploadedPlateUrl}
                    alt={`${activeSlide.nameEn} Reference Plate`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Previous / Stage / Next Stepper Bar */}
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3">
            <button
              type="button"
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:border-[#D3AD55] text-xs font-mono text-white flex items-center gap-1 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            <div className="text-center">
              <div
                className="text-xs font-mono font-bold uppercase tracking-widest"
                style={{ color: activeSlide.accentColor }}
              >
                {activeSlide.badgeCode} · {activeSlide.nameEn}
              </div>
              <div className="text-[11px] text-white/60">{activeSlide.themeTitleEn}</div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="px-3 py-1.5 rounded-xl border border-white/15 bg-white/5 hover:border-[#D3AD55] text-xs font-mono text-white flex items-center gap-1 transition cursor-pointer"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Complete Info, Mantra, Sacred Geometry & Philosophy */}
        <div className="lg:col-span-7 space-y-5">
          <div
            className="rounded-3xl border bg-[#0E1526]/90 p-6 sm:p-7 space-y-5 shadow-xl transition-all duration-300"
            style={{
              borderColor: `${activeSlide.accentColor}66`,
              boxShadow: `0 10px 40px ${activeSlide.accentColor}15`
            }}
          >
            {/* Stage Badge & Keyword */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: `${activeSlide.accentColor}25`,
                  color: activeSlide.accentColor
                }}
              >
                STAGE {activeSlide.badgeCode} · {activeSlide.keywordEn}
              </span>
              {activeSlide.kulaStreamEn && (
                <span className="text-xs font-mono text-[#FDE68A]/85">
                  {lang === 'hi' ? activeSlide.kulaStreamHi : activeSlide.kulaStreamEn}
                </span>
              )}
            </div>

            {/* Main Title & Contemplative Theme */}
            <div>
              <h3
                className="text-2xl sm:text-4xl font-serif font-bold tracking-wide"
                style={{ color: activeSlide.accentColor }}
              >
                {activeSlide.nameEn}{' '}
                <span className="text-white text-xl sm:text-2xl font-normal">
                  ({activeSlide.nameHi})
                </span>
              </h3>
              <div className="text-xs font-mono text-white/60 mt-1">
                {activeSlide.transliteration}
              </div>

              <div className="mt-3 p-4 rounded-2xl border border-white/10 bg-black/40">
                <div
                  className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider"
                  style={{ color: activeSlide.accentColor }}
                >
                  {lang === 'hi' ? activeSlide.themeTitleHi : activeSlide.themeTitleEn}
                </div>
                <div className="text-base sm:text-lg font-serif italic text-white mt-1">
                  “{lang === 'hi' ? activeSlide.reflectionHi : activeSlide.reflectionEn}”
                </div>
              </div>
            </div>

            {/* Mūla Nāma Mantra & Bīja Box (for 01..10) */}
            {activeSlide.mulaMantraSanskrit && (
              <div className="rounded-2xl border border-[#D3AD55]/45 bg-gradient-to-r from-[#17110B] via-[#24190E] to-[#17110B] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-widest text-[#D3AD55] mb-1.5">
                  <span>MŪLA NĀMA MANTRA & BĪJA · मूल नाम मंत्र एवं बीज</span>
                  <span>Bīja: {activeSlide.bijaMantra}</span>
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#FFDF80]">
                  {activeSlide.mulaMantraSanskrit}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#E5C168] mt-0.5">
                  {activeSlide.mulaMantraIAST}
                </div>
              </div>
            )}

            {/* Geometric Symbolism & Philosophical Insight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <div
                  className="text-[11px] font-mono uppercase tracking-wider font-bold mb-1.5"
                  style={{ color: activeSlide.accentColor }}
                >
                  Sacred Geometry & Motion Symbolism
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {lang === 'hi'
                    ? activeSlide.symbolExplanationHi
                    : activeSlide.symbolExplanationEn}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#FDE68A] mb-1.5">
                  Tantric & Philosophical Insight
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {lang === 'hi'
                    ? activeSlide.philosophicalInsightHi
                    : activeSlide.philosophicalInsightEn}
                </p>
              </div>
            </div>

            {/* Traditional Attributes & Bhairava Consort (for 01..10) */}
            {activeSlide.iconographicAttributesEn && (
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55]">
                    Classical Dhyāna Attributes & Consort
                  </span>
                  {activeSlide.bhairavaConsortEn && (
                    <span className="text-xs font-serif text-[#FDE68A]">
                      Bhairava: {lang === 'hi' ? activeSlide.bhairavaConsortHi : activeSlide.bhairavaConsortEn}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(lang === 'hi'
                    ? activeSlide.iconographicAttributesHi || activeSlide.iconographicAttributesEn
                    : activeSlide.iconographicAttributesEn
                  ).map((attr, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-white/85 flex items-center gap-2"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: activeSlide.accentColor }}
                      />
                      <span>{attr}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Jump Grid inside Intro / Outro */}
            {(activeSlide.stageIndex === 0 || activeSlide.stageIndex === 11) && (
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#D3AD55] mb-3">
                  CLICK ANY OF THE 10 MAHĀVIDYĀS TO EXPLORE HER MOVING SYMBOL & DOSSIER
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {MAHAVIDYA_STUDIO_SLIDES.slice(1, 11).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveStageIndex(m.stageIndex)}
                      className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-left transition cursor-pointer"
                      style={{ borderColor: `${m.accentColor}55` }}
                    >
                      <div
                        className="text-[10px] font-mono font-bold"
                        style={{ color: m.accentColor }}
                      >
                        {m.badgeCode}
                      </div>
                      <div className="font-serif font-bold text-xs text-white mt-0.5">
                        {m.nameEn}
                      </div>
                      <div className="text-[9.5px] text-white/60 truncate">
                        {m.keywordEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DasaMahavidyaInteractiveStudio;
