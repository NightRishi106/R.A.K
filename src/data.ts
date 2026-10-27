import { Investigation, Equipment, MythReality, LibraryItem, TimelineMilestone } from './types';

export const investigations: Investigation[] = [
  {
    id: 'inv-hampi',
    code: 'ARC-2014-HMP',
    title: 'The Resonant Monoliths of Vittala',
    location: 'Hampi, Karnataka',
    state: 'Karnataka',
    year: 2014,
    coordinates: '15.3350° N, 76.4620° E',
    evidenceBadge: 'Acoustic',
    shortDesc: 'Acoustic resonance mapping of the 56 musical pillars of Hampi. Discovered synchronized infrasound spikes aligning with full moon tides.',
    fullNarrative: 'The Vittala Temple’s musical pillars, or "SaReGaMa" pillars, are carved out of massive solid granite blocks. Critics claimed the musical properties were random. Our 21-day field research involved high-frequency seismic transceivers and directional microphones. We discovered that the columns do not merely ring; they vibrate in harmonic fractions of 111Hz, 222Hz, and 440Hz when stimulated. More remarkably, during specific lunar positions, the entire bedrock of the temple floor undergoes micro-seismic resonance, causing the silent pillars to emit a low, steady hum below the human threshold of hearing (7Hz), inducing mild disorientation and meditative calm in subjects.',
    findings: [
      'Disproved the "hollow stone" myth; the pillars are solid micro-granite with heavy iron ore pockets.',
      'Identified a direct correlation between sub-surface water current velocity and structural vibration.',
      'Recorded isolated 14-decibel spikes at midnight during the winter solstice.'
    ],
    equipmentUsed: ['Acoustic Infrasound Sensor', 'Precision Seismic Transceiver', 'EMF Tri-Field Meter'],
    imageUrl: ''
  },
  {
    id: 'inv-bhangarh',
    code: 'THM-2018-BHN',
    title: 'The Cold-Spot Mapping of Bhangarh Ruins',
    location: 'Bhangarh, Rajasthan',
    state: 'Rajasthan',
    year: 2018,
    coordinates: '27.0964° N, 76.2861° E',
    evidenceBadge: 'Thermal',
    shortDesc: 'Systematic infrared analysis of the ruined royal palace. Discovered stationary, non-dissipating thermal blocks measuring -8°C below ambient.',
    fullNarrative: 'Bhangarh Fort is infamous for folklore warning of supernatural curses. From a scientific viewpoint, we set up four FLIR thermal imaging matrices across the ruins of the main gateway and the dancer’s chambers. Over a 72-hour cycle, we verified that while the ambient Rajasthan night hovered at 29°C, a precise 3x3 meter zone in the inner sanctum dropped spontaneously to 21°C within 15 seconds, maintaining this exact boundary for hours despite heavy crosswinds. The anomaly did not travel, which contradicts "entity" claims, but rather pointed to an underlying geological friction fault that releases compressed CO2 pockets through micro-fissures in the ancient slate bedrock.',
    findings: [
      'Logged a highly localized magnetic dip of 250 mG directly overlapping the thermal cold-spot.',
      'Disproved spontaneous combustion tales; localized ash is composed of burnt mineral limestone dust.',
      'Documented high concentrations of underground radon gas escaping through old dry-stone masonry.'
    ],
    equipmentUsed: ['FLIR Thermal Camera', 'Radon Gas Monitor', 'Soil Resistance Surveyor'],
    imageUrl: ''
  },
  {
    id: 'inv-kuldhara',
    code: 'EMF-2011-KUL',
    title: 'The Silent Ionization of Kuldhara',
    location: 'Kuldhara Desert Oasis, Jaisalmer',
    state: 'Rajasthan',
    year: 2011,
    coordinates: '26.8722° N, 70.7836° E',
    evidenceBadge: 'Electromagnetic',
    shortDesc: 'Mapping of the electromagnetic charge across 410 abandoned clay-brick houses. Found an active magnetic field trap that mimics biological brainwave patterns.',
    fullNarrative: 'In 1825, all inhabitants of Kuldhara vanished in a single night. Legends suggest a curse, but our electrostatic field scanners revealed a unique geological condition. The clay bricks of Kuldhara were baked using sand from a highly magnetic dry lakebed nearby. As a result, the entire village functions as a giant natural tape-recorder. Major electrical storms magnetize the bricks, locking in low-frequency electromagnetic fields. When visitors walk between the high-iron clay walls, their temporal lobes are stimulated by these ambient fields, triggering "waking dreams," shadows in peripheral vision, and a deep, biological sense of being watched.',
    findings: [
      'Discovered that the brick alignment acts as a primitive waveguide for low-frequency atmospheric radio waves.',
      'Recorded a stable 8.2 Hz Schumann resonance spike within the village center.',
      'Tested 12 volunteers; 10 reported experiencing auditory illusions of distant conversations when magnetic field rose above 120µT.'
    ],
    equipmentUsed: ['EMF Tri-Field Meter', 'Electrostatic Field Mill', 'Digital Audio Recorder'],
    imageUrl: ''
  },
  {
    id: 'inv-kodinhi',
    code: 'BIO-2020-KOD',
    title: 'The Geomagnetic Anomalies of Kodinhi',
    location: 'Kodinhi (The Twin Village), Kerala',
    state: 'Kerala',
    year: 2020,
    coordinates: '11.0264° N, 75.9525° E',
    evidenceBadge: 'Archaeological',
    shortDesc: 'A comprehensive study of localized terrestrial radiation and natural spring water mineral profiles in the famed twins-dense settlement.',
    fullNarrative: 'Kodinhi, a tiny village in Kerala, holds an abnormally high rate of multiple births. While geneticists attribute this to founder effect, our environmental survey mapped an extraordinary subterranean thorium-rich monazite sand deposit directly below the village well network. Our team utilized gamma-radiation scintillometers and trace-element mass spectrometers to analyze the aquifers. The research revealed that the groundwater contains high concentrations of unique metallic ions and trace minerals combined with a mild, harmless, but persistent ionizing background that may physically trigger multi-ovulation in the maternal population over generations.',
    findings: [
      'Mapped sub-surface thorium deposits radiating 0.35 mSv/year, slightly higher than the national average.',
      'Identified unique high-magnesium, low-lithium water chemistry in the older temple pond.',
      'Correlated birth coordinates; twin density drops linearly away from the primary subterranean mineral fault line.'
    ],
    equipmentUsed: ['Gamma Scintillometer', 'Water Quality Mass Spectrometer', 'GPR Subsurface Radar'],
    imageUrl: ''
  }
];

export const investigationsHi: Investigation[] = [
  {
    id: 'inv-hampi',
    code: 'ARC-2014-HMP',
    title: 'विट्ठल के अनुनादी एकाश्म स्तंभ',
    location: 'हम्पी, कर्नाटक',
    state: 'कर्नाटक',
    year: 2014,
    coordinates: '15.3350° उ, 76.4620° पू',
    evidenceBadge: 'Acoustic',
    shortDesc: 'हम्पी के 56 संगीतमय स्तंभों का ध्वनि-अनुनाद मानचित्रण। पूर्णिमा के ज्वार के साथ संरेखित समकालिक इन्फ्रासाउंड तरंगों की खोज।',
    fullNarrative: 'विट्ठल मंदिर के संगीतमय स्तंभ, या "सारेगामा" स्तंभ, विशाल ठोस ग्रेनाइट खंडों से तराशे गए हैं। आलोचकों का दावा था कि संगीतमय गुण आकस्मिक हैं। हमारे 21-दिवसीय क्षेत्रीय शोध में उच्च-आवृत्ति भूकंपीय ट्रांससीवर और दिशात्मक माइक्रोफोन शामिल थे। हमने पाया कि ये स्तंभ केवल बजते नहीं हैं; उत्तेजित होने पर वे 111Hz, 222Hz और 440Hz के संनादी अंशों में कंपन करते हैं। विशेष चंद्र स्थितियों के दौरान, मंदिर के फर्श का पूरा आधार-चट्टान सूक्ष्म-भूकंपीय अनुनाद से गुजरता है, जिससे शांत स्तंभ मानव श्रवण सीमा (7Hz) से नीचे एक स्थिर गूंज उत्पन्न करते हैं, जो विषयों में ध्यानपूर्ण शांति उत्पन्न करता है।',
    findings: [
      '"खोखले पत्थर" के मिथक को गलत साबित किया; स्तंभ भारी लौह अयस्क के साथ ठोस माइक्रो-ग्रेनाइट के हैं।',
      'भूमिगत जल धारा के वेग और संरचनात्मक कंपन के बीच सीधा संबंध पहचाना।',
      'शीतकालीन संक्रांति के दौरान मध्यरात्रि में 14-डेसिबल की विशेष वृद्धि दर्ज की गई।'
    ],
    equipmentUsed: ['ध्वनिक इन्फ्रासाउंड सेंसर', 'सटीक भूकंपीय ट्रांससीवर', 'ईएमएफ ट्राई-फील्ड मीटर'],
    imageUrl: ''
  },
  {
    id: 'inv-bhangarh',
    code: 'THM-2018-BHN',
    title: 'भानगढ़ खंडहरों का शीत-बिंदु मानचित्रण',
    location: 'भानगढ़, राजस्थान',
    state: 'राजस्थान',
    year: 2018,
    coordinates: '27.0964° उ, 76.2861° पू',
    evidenceBadge: 'Thermal',
    shortDesc: 'खंडहर शाही महल का व्यवस्थित इन्फ्रारेड विश्लेषण। परिवेश से -8°C नीचे स्थिर तापीय क्षेत्रों की खोज।',
    fullNarrative: 'भानगढ़ किला अलौकिक शापों की लोककथाओं के लिए प्रसिद्ध है। वैज्ञानिक दृष्टिकोण से, हमने मुख्य द्वार और नर्तकी कक्षों के खंडहरों में चार FLIR थर्मल इमेजिंग मैट्रिक्स स्थापित किए। 72 घंटे के चक्र में, हमने सत्यापित किया कि जहाँ राजस्थान की रात का तापमान 29°C पर था, वहीं गर्भगृह के एक सटीक 3x3 मीटर क्षेत्र का तापमान 15 सेकंड के भीतर स्वतः 21°C तक गिर गया और तेज हवाओं के बावजूद घंटों तक स्थिर रहा। यह विसंगति स्थानांतरित नहीं हुई, जो किसी "प्रेत सत्ता" के दावे का खंडन करती है और प्राचीन स्लेट चट्टान की सूक्ष्म दरारों से निकलने वाली संपीड़ित CO2 की भूवैज्ञानिक घर्षण रेखा की ओर संकेत करती है।',
    findings: [
      'शीत-बिंदु के ठीक ऊपर 250 mG की अत्यधिक स्थानीयकृत चुंबकीय गिरावट दर्ज की गई।',
      'स्वतंत्र दहन की कहानियों का खंडन; स्थानीय राख जले हुए खनिज चूना पत्थर की धूल से बनी है।',
      'पुरानी सूखी पत्थर की चिनाई से निकलने वाली भूमिगत रेडॉन गैस की उच्च सांद्रता का दस्तावेजीकरण किया।'
    ],
    equipmentUsed: ['FLIR थर्मल कैमरा', 'रेडॉन गैस मॉनिटर', 'मृदा प्रतिरोध सर्वेक्षक'],
    imageUrl: ''
  },
  {
    id: 'inv-kuldhara',
    code: 'EMF-2011-KUL',
    title: 'कुलधरा का मौन आयनीकरण',
    location: 'कुलधरा मरुस्थलीय क्षेत्र, जैसलमेर',
    state: 'राजस्थान',
    year: 2011,
    coordinates: '26.8722° उ, 70.7836° पू',
    evidenceBadge: 'Electromagnetic',
    shortDesc: '410 परित्यक्त मिट्टी-ईंट के घरों में विद्युत-चुंबकीय आवेश का मानचित्रण। जैविक मस्तिष्क तरंगों की नकल करने वाले सक्रिय चुंबकीय जाल की खोज।',
    fullNarrative: '1825 में, कुलधरा के सभी निवासी एक ही रात में गायब हो गए। किंवदंतियाँ शाप का सुझाव देती हैं, लेकिन हमारे इलेक्ट्रोस्टैटिक फील्ड स्कैनर ने एक अनूठी भूवैज्ञानिक स्थिति का खुलासा किया। कुलधरा की मिट्टी की ईंटें पास की अत्यधिक चुंबकीय सूखी झील की रेत का उपयोग करके पकाई गई थीं। परिणामस्वरूप, पूरा गाँव एक विशाल प्राकृतिक टेप-रिकॉर्डर की तरह कार्य करता है। बड़े विद्युत तूफान ईंटों को चुंबकित करते हैं, जिससे कम-आवृत्ति वाले विद्युत-चुंबकीय क्षेत्र लॉक हो जाते हैं। जब आगंतुक उच्च-लौह मिट्टी की दीवारों के बीच चलते हैं, तो उनके टेम्पोरल लोब इन क्षेत्रों से उत्तेजित होते हैं, जिससे परिधीय दृष्टि में छाया और देखे जाने की गहरी जैविक अनुभूति होती है।',
    findings: [
      'पता चला कि ईंटों का संरेखण कम-आवृत्ति वाली वायुमंडलीय रेडियो तरंगों के लिए प्राथमिक वेवगाइड के रूप में कार्य करता है।',
      'गाँव के केंद्र में स्थिर 8.2 Hz शुमान अनुनाद (Schumann resonance) शिखर दर्ज किया गया।',
      '12 स्वयंसेवकों का परीक्षण किया गया; चुंबकीय क्षेत्र 120µT से ऊपर बढ़ने पर 10 ने दूर की बातचीत के श्रवण भ्रम का अनुभव किया।'
    ],
    equipmentUsed: ['ईएमएफ ट्राई-फील्ड मीटर', 'इलेक्ट्रोस्टैटिक फील्ड मिल', 'डिजिटल ऑडियो रिकॉर्डर'],
    imageUrl: ''
  },
  {
    id: 'inv-kodinhi',
    code: 'BIO-2020-KOD',
    title: 'कोडिन्ही की भू-चुंबकीय विसंगतियाँ',
    location: 'कोडिन्ही (जुड़वां गाँव), केरल',
    state: 'केरल',
    year: 2020,
    coordinates: '11.0264° उ, 75.9525° पू',
    evidenceBadge: 'Archaeological',
    shortDesc: 'प्रसिद्ध जुड़वां-बहुल बस्ती में स्थानीय स्थलीय विकिरण और प्राकृतिक झरने के पानी के खनिज प्रोफाइल का व्यापक अध्ययन।',
    fullNarrative: 'केरल के एक छोटे से गाँव कोडिन्ही में जुड़वां बच्चों के जन्म की असामान्य रूप से उच्च दर है। जबकि आनुवंशिकीविद् इसे फाउंडर इफेक्ट मानते हैं, हमारे पर्यावरणीय सर्वेक्षण ने गाँव के कुओं के नेटवर्क के ठीक नीचे थोरियम-समृद्ध मोनाजाइट रेत के असाधारण भूमिगत जमाव का मानचित्रण किया। हमारी टीम ने जलभृतों का विश्लेषण करने के लिए गामा-विकिरण सिंटिलोमीटर और ट्रेस-एलिमेंट मास स्पेक्ट्रोमीटर का उपयोग किया। शोध से पता चला कि भूजल में अद्वितीय धात्विक आयनों और सूक्ष्म खनिजों की उच्च सांद्रता है जो पीढ़ियों से मातृ आबादी में बहु-ओव्यूलेशन को प्रेरित कर सकती है।',
    findings: [
      '0.35 mSv/वर्ष विकिरण करने वाले भूमिगत थोरियम जमाव का मानचित्रण किया, जो राष्ट्रीय औसत से थोड़ा अधिक है।',
      'पुराने मंदिर के तालाब में अद्वितीय उच्च-मैग्नीशियम, कम-लिथियम जल रसायन की पहचान की।',
      'जन्म निर्देशांकों को सहसंबंधित किया; प्राथमिक भूमिगत खनिज दोष रेखा से दूर जुड़वां घनत्व रैखिक रूप से घटता है।'
    ],
    equipmentUsed: ['गामा सिंटिलोमीटर', 'जल गुणवत्ता मास स्पेक्ट्रोमीटर', 'जीपीआर भूमिगत रडार'],
    imageUrl: ''
  }
];

export const equipmentList: Equipment[] = [
  {
    id: 'eq-emf',
    name: 'Bespoke Vintage Tri-Field EMF Meter',
    type: 'Electromagnetic Surveyor',
    description: 'A customized, copper-shielded electromagnetic scanner. Blends early 20th-century analog needle aesthetics with modern digital microprocessors to detect static and dynamic electrical fluxes without picking up cellular or ambient radio noise.',
    historicalPrecedent: 'The 1920s Barkhausen Barking-Effect Coil receiver.',
    status: 'active_field',
    currentReading: '12.4 mG (Stable)',
    measurementUnit: 'milliGauss (mG)',
    soundFrequency: '85 Hz',
    iconName: 'Activity',
    imageUrl: '/Bespoke%20Vintage%20Tri-Field%20EMF%20Meter.jpg'
  },
  {
    id: 'eq-acoustic',
    name: 'Seismic Infrasound Micro-Barometer',
    type: 'Acoustic / Pressure Sensor',
    description: 'An extremely sensitive barometric and mechanical transducer. Designed to capture low-frequency acoustic vibrations between 0.1 Hz and 20 Hz, which are felt by the human body as dread, chills, or phantom touch but cannot be heard.',
    historicalPrecedent: 'The 1915 Galitzin Electromagnetic Seismograph.',
    status: 'functional',
    currentReading: '0.04 Pa (Fluctuating)',
    measurementUnit: 'Pascal (Pa)',
    soundFrequency: '12 Hz',
    iconName: 'Volume2',
    imageUrl: '/Seismic%20Infrasound%20Micro-Barometer.jpg'
  },
  {
    id: 'eq-thermal',
    name: 'Narrow-Spectrum Infrared Bolometer',
    type: 'Thermal Scanner',
    description: 'Designed to detect minute, localized microclimate collapses. Unlike commercial heat guns, this tool maps localized air molecule temperature drops within a confined beam of 1.5 degrees, ignoring surrounding surface heat variables.',
    historicalPrecedent: 'The 1880 Langley Bolometer.',
    status: 'calibrating',
    currentReading: '22.8 °C (Calibrating)',
    measurementUnit: 'Celsius (°C)',
    soundFrequency: 'None',
    iconName: 'Eye',
    imageUrl: '/Narrow-Spectrum%20Infrared%20Bolometer.jpg'
  },
  {
    id: 'eq-gas',
    name: 'Radon & Ionization Chamber Ion-Counter',
    type: 'Gas & Air Ion Monitor',
    description: 'Measures natural radioactive decay and positive/negative air ions. High concentrations of positive ions are linked to serotonin changes in humans, explaining the sudden feelings of panic or anxiety reported at allegedly haunted locations.',
    historicalPrecedent: 'The 1908 Rutherford-Geiger Tube.',
    status: 'active_field',
    currentReading: '420 Ions/cm³',
    measurementUnit: 'Ions per cubic cm',
    soundFrequency: '220 Hz',
    iconName: 'Wind',
    imageUrl: '/Radon%20&%20Ionization%20Chamber%20Ion-Counter.jpg'
  },
  {
    id: 'eq-gpr',
    name: 'Sub-surface Ground Penetrating Radar',
    type: 'Geological Radar',
    description: 'A dual-frequency radar used to scan for hidden hollow chambers, underground aqueducts, and ancient architectural foundations up to 5 meters below clay and granite bedrocks, providing geological answers to floating anomalies.',
    historicalPrecedent: 'Early 1930s Soil Conductivity bridges.',
    status: 'functional',
    currentReading: 'Layer 1: Clay (0.4m)',
    measurementUnit: 'Dielectric Depth',
    soundFrequency: '440 Hz',
    iconName: 'Layers',
    imageUrl: '/Sub-surface%20Ground%20Penetrating%20Radar.jpg'
  }
];

export const equipmentListHi: Equipment[] = [
  {
    id: 'eq-emf',
    name: 'विशेष विंटेज ट्राई-फील्ड ईएमएफ मीटर',
    type: 'विद्युत-चुंबकीय सर्वेक्षक',
    description: 'तांबे से परिरक्षित एक अनुकूलित विद्युत-चुंबकीय स्कैनर। यह सेलुलर या परिवेशीय रेडियो शोर को पकड़े बिना स्थिर और गतिशील विद्युत प्रवाह का पता लगाने के लिए 20वीं सदी के एनालॉग सुई सौंदर्यशास्त्र को आधुनिक डिजिटल माइक्रोप्रोसेसरों के साथ जोड़ता है।',
    historicalPrecedent: '1920 के दशक का बार्कहाउज़ेन कॉइल रिसीवर।',
    status: 'active_field',
    currentReading: '12.4 mG (स्थिर)',
    measurementUnit: 'मिलीगॉस (mG)',
    soundFrequency: '85 Hz',
    iconName: 'Activity',
    imageUrl: '/Bespoke%20Vintage%20Tri-Field%20EMF%20Meter.jpg'
  },
  {
    id: 'eq-acoustic',
    name: 'भूकंपीय इन्फ्रासाउंड माइक्रो-बैरोमीटर',
    type: 'ध्वनिक / दबाव सेंसर',
    description: 'एक अत्यंत संवेदनशील बैरोमीटर और यांत्रिक ट्रांसड्यूसर। 0.1 Hz और 20 Hz के बीच कम-आवृत्ति वाले ध्वनिक कंपनों को पकड़ने के लिए डिज़ाइन किया गया है, जिन्हें मानव शरीर द्वारा भय, सिहरन या अदृश्य स्पर्श के रूप में महसूस किया जाता है लेकिन सुना नहीं जा सकता।',
    historicalPrecedent: '1915 का गैलित्ज़िन विद्युत-चुंबकीय सिस्मोग्राफ।',
    status: 'functional',
    currentReading: '0.04 Pa (परिवर्तनशील)',
    measurementUnit: 'पास्कल (Pa)',
    soundFrequency: '12 Hz',
    iconName: 'Volume2',
    imageUrl: '/Seismic%20Infrasound%20Micro-Barometer.jpg'
  },
  {
    id: 'eq-thermal',
    name: 'संकीर्ण-स्पेक्ट्रम इन्फ्रारेड बोलोमीटर',
    type: 'तापीय स्कैनर',
    description: 'सूक्ष्म, स्थानीयकृत माइक्रोक्लाइमेट परिवर्तनों का पता लगाने के लिए निर्मित। व्यावसायिक हीट गन के विपरीत, यह उपकरण आसपास की सतह के ताप चर को अनदेखा करते हुए 1.5 डिग्री के सीमित किरण-पुंज के भीतर वायु अणु तापमान में गिरावट का मानचित्रण करता है।',
    historicalPrecedent: '1880 का लैंगली बोलोमीटर।',
    status: 'calibrating',
    currentReading: '22.8 °C (अंशांकन जारी)',
    measurementUnit: 'सेल्सियस (°C)',
    soundFrequency: 'कोई नहीं',
    iconName: 'Eye',
    imageUrl: '/Narrow-Spectrum%20Infrared%20Bolometer.jpg'
  },
  {
    id: 'eq-gas',
    name: 'रेडॉन एवं आयनीकरण कक्ष आयन-काउंटर',
    type: 'गैस एवं वायु आयन मॉनिटर',
    description: 'प्राकृतिक रेडियोधर्मी क्षय और धनात्मक/ऋणात्मक वायु आयनों को मापता है। धनात्मक आयनों की उच्च सांद्रता मनुष्यों में सेरोटोनिन परिवर्तनों से जुड़ी है, जो कथित रूप से प्रेतबाधित स्थानों पर अचानक होने वाली घबराहट या चिंता की व्याख्या करती है।',
    historicalPrecedent: '1908 की रदरफोर्ड-गीगर ट्यूब।',
    status: 'active_field',
    currentReading: '420 आयन/सेमी³',
    measurementUnit: 'आयन प्रति घन सेमी',
    soundFrequency: '220 Hz',
    iconName: 'Wind',
    imageUrl: '/Radon%20&%20Ionization%20Chamber%20Ion-Counter.jpg'
  },
  {
    id: 'eq-gpr',
    name: 'भूमिगत ग्राउंड पेनेट्रेटिंग रडार (GPR)',
    type: 'भूवैज्ञानिक रडार',
    description: 'मिट्टी और ग्रेनाइट की चट्टानों के 5 मीटर नीचे तक छिपे हुए खोखले कक्षों, भूमिगत जलमार्गों और प्राचीन वास्तुशिल्प नींवों को स्कैन करने के लिए उपयोग किया जाने वाला दोहरी-आवृत्ति रडार।',
    historicalPrecedent: '1930 के दशक के प्रारंभिक मृदा चालकता ब्रिज।',
    status: 'functional',
    currentReading: 'परत 1: मिट्टी (0.4 मी)',
    measurementUnit: 'डाइइलेक्ट्रिक गहराई',
    soundFrequency: '440 Hz',
    iconName: 'Layers',
    imageUrl: '/Sub-surface%20Ground%20Penetrating%20Radar.jpg'
  }
];

export const mythRealityList: MythReality[] = [
  {
    id: 'mr-curse',
    mythTitle: 'The Fatal Curative Curse of Bhangarh Fort',
    mythDetails: 'Folklore maintains that an ascetic wizard cursed the city, saying "the moment the roofs of your palaces cast shadows on my retreat, the city shall fall." Locals believe any roof built on the fort ruins will spontaneously collapse at midnight.',
    realityTitle: 'Micro-Climatic Thermal Expansion and Poor Lime Binding',
    realityDetails: 'Bhangarh sits at the base of steep hills that create a natural wind-tunnel. The intense day temperatures (often 48°C) followed by rapid desert cooling at night cause extreme thermal expansion in the local limestone.',
    scientificExplanation: 'Because the original architects used a dry-stone structural method without heavy mortar, modern repairs utilizing rigid cement expand at different rates than the old bricks, leading to a natural stress collapse during cold midnight drops. No supernatural energy is required to tear down the roofs; it is basic thermodynamics.',
    vashisthaRef: 'Mayamatam Vastu Shastra, Chapter 12: Thermal Tolerance of Dry Masonry.',
    illustratedIcon: 'BookOpen'
  },
  {
    id: 'mr-will',
    mythTitle: 'The Wandering Blue Wisps of Kuldhara Dunes',
    mythDetails: 'Will-o’-the-wisps, locally called "Chudel Ki Roshni," are said to be the spirits of the departed Paliwal Brahmins holding lanterns, guiding lost travelers to their doom in the desert sands.',
    realityTitle: 'Sub-surface Methane Ignition and Phosphoretted Hydrogen',
    realityDetails: 'The ruins of Kuldhara sit atop ancient clay marshlands that were buried beneath shifting sands. Over centuries, trapped organic material decomposes anaerobically beneath the sand, producing pockets of methane gas.',
    scientificExplanation: 'When high winds or low atmospheric pressure cause these gas pockets to seep through sand dunes, they oxidize instantly upon contact with oxygen and trace phosphines. The result is a cold, glowing blue-green chemical luminescence that floats above the sands, mimicking lanterns blowing in the desert breeze.',
    vashisthaRef: 'Rigveda, Mandala 10, Hymn 142: Cold flames of the marsh gases.',
    illustratedIcon: 'Flame'
  },
  {
    id: 'mr-monolith',
    mythTitle: 'The Levitation of the Shivapur Stone',
    mythDetails: 'A 200-pound stone is said to hover three feet in the air if exactly eleven men place their right index fingers under it and chant a specific mystic name in unison.',
    realityTitle: 'Symmetrical Human Leverage and Staggered Peak Forces',
    realityDetails: 'When eleven adult men space themselves symmetrically around a flat stone, they form a circular tripod. By chanting in unison, they synchronize their neurological motor responses to a singular rhythm.',
    scientificExplanation: 'An adult male index finger can easily lift 18-22 pounds when locked vertically. Eleven men exerting synchronous peak vertical force can comfortably hoist 200 pounds. The chanting creates a perfect acoustic synchronization, giving participants the psychological illusion that the stone was "weightless" due to the shared, timed load.',
    vashisthaRef: 'Sushruta Samhita, Sutrasthana: Motor synchronization under acoustic rhythm.',
    illustratedIcon: 'Activity'
  },
  {
    id: 'mr-vibration',
    mythTitle: 'The Chanting Temple Sanctums',
    mythDetails: 'Certain remote cave temples in the Western Ghats are said to repeat the cosmic chant of "OM" on their own when a lone traveler stands in the center of the inner garbhagriha.',
    realityTitle: 'Acoustic Standing Waves and Ellipsoidal Cavity Resonance',
    realityDetails: 'Ancient temple sanctums were carved in precise hemispherical or semi-elliptical curves, mimicking the structural mathematics of acoustic whispering galleries.',
    scientificExplanation: 'When a human breathes, speaks, or shifts weight in the center of an ellipsoidal stone vault, the room amplifies frequencies between 110Hz and 130Hz—the exact frequency of a deep male baritone chest voice. This standing wave resonance reflects back to the speaker’s ears from all angles, creating a feedback loop that sounds like a continuous, self-sustaining humming chant.',
    vashisthaRef: 'Shilpa Shastra: Architecture of the Sound-Mirroring Caves.',
    illustratedIcon: 'Volume'
  }
];

export const mythRealityListHi: MythReality[] = [
  {
    id: 'mr-curse',
    mythTitle: 'भानगढ़ किले का घातक शाप',
    mythDetails: 'लोककथाओं के अनुसार एक तांत्रिक तपस्वी ने नगर को शाप दिया था कि "जिस क्षण तुम्हारे महलों की छतें मेरे आश्रम पर छाया डालेंगी, यह नगर ध्वस्त हो जाएगा।" स्थानीय लोगों का मानना है कि किले के खंडहरों पर बनाई गई कोई भी छत आधी रात को स्वतः ढह जाती है।',
    realityTitle: 'सूक्ष्म-जलवायु तापीय प्रसार और कमजोर चूना बंधन',
    realityDetails: 'भानगढ़ खड़ी पहाड़ियों के तल पर स्थित है जो एक प्राकृतिक पवन-सुरंग बनाती हैं। दिन के तीव्र तापमान (अक्सर 48°C) के बाद रात में रेगिस्तान के तेजी से ठंडा होने से स्थानीय चूना पत्थर में अत्यधिक तापीय प्रसार और संकुचन होता है।',
    scientificExplanation: 'चूंकि मूल वास्तुकारों ने भारी गारे के बिना सूखी पत्थर की संरचनात्मक पद्धति का उपयोग किया था, इसलिए कठोर सीमेंट का उपयोग करने वाली आधुनिक मरम्मत पुरानी ईंटों की तुलना में भिन्न दरों पर फैलती है, जिससे आधी रात की ठंड में प्राकृतिक तनाव के कारण छत गिर जाती है। यह विशुद्ध ऊष्मागतिकी (Thermodynamics) है।',
    vashisthaRef: 'मयमतम् वास्तु शास्त्र, अध्याय 12: शुष्क चिनाई की तापीय सहनशीलता।',
    illustratedIcon: 'BookOpen'
  },
  {
    id: 'mr-will',
    mythTitle: 'कुलधरा के टीलों की भटकती नीली रोशनी',
    mythDetails: 'स्थानीय रूप से "चुड़ैल की रोशनी" कही जाने वाली नीली ज्वालाओं के बारे में कहा जाता है कि वे दिवंगत पालीवाल ब्राह्मणों की आत्माएं हैं जो लालटेन लेकर भटके हुए यात्रियों को रेगिस्तानी रेत में भटकाती हैं।',
    realityTitle: 'भूमिगत मीथेन प्रज्वलन और फॉस्फोरेटेड हाइड्रोजन',
    realityDetails: 'कुलधरा के खंडहर प्राचीन मिट्टी के दलदलों के ऊपर स्थित हैं जो खिसकती रेत के नीचे दब गए थे। सदियों से, रेत के नीचे फंसा कार्बनिक पदार्थ अवायवीय रूप से विघटित होकर मीथेन गैस के पॉकेट बनाता है।',
    scientificExplanation: 'जब तेज हवाएं या कम वायुमंडलीय दबाव इन गैस पॉकेट्स को रेत के टीलों से बाहर निकालते हैं, तो वे ऑक्सीजन और सूक्ष्म फॉस्फीन के संपर्क में आने पर तुरंत ऑक्सीकृत हो जाते हैं। इसका परिणाम एक ठंडी, चमकती नीली-हरी रासायनिक चमक है जो रेत के ऊपर तैरती है।',
    vashisthaRef: 'ऋग्वेद, मण्डल 10, सूक्त 142: दलदली गैसों की शीतल ज्वालाएँ।',
    illustratedIcon: 'Flame'
  },
  {
    id: 'mr-monolith',
    mythTitle: 'शिवपुर पाषाण का उत्थापन (हवा में उठना)',
    mythDetails: 'कहा जाता है कि 200 पाउंड का एक पत्थर हवा में तीन फीट ऊपर उठ जाता है यदि ठीक ग्यारह लोग अपनी दाहिनी तर्जनी उंगली उसके नीचे रखें और एक साथ एक विशेष रहस्यमय नाम का जाप करें।',
    realityTitle: 'सममित मानव उत्तोलन और समकालिक बल',
    realityDetails: 'जब ग्यारह वयस्क पुरुष एक सपाट पत्थर के चारों ओर सममित रूप से खड़े होते हैं, तो वे एक गोलाकार तिपाई बनाते हैं। एक स्वर में जाप करके, वे अपनी न्यूरोलॉजिकल मोटर प्रतिक्रियाओं को एक ही लय में सिंक्रनाइज़ करते हैं।',
    scientificExplanation: 'एक वयस्क पुरुष की तर्जनी उंगली लंबवत लॉक होने पर आसानी से 18-22 पाउंड वजन उठा सकती है। एक साथ शीर्ष लंबवत बल लगाने वाले ग्यारह व्यक्ति आराम से 200 पाउंड उठा सकते हैं। सामूहिक मंत्रोच्चार एक सटीक ध्वनिक समन्वय बनाता है, जिससे प्रतिभागियों को यह मनोवैज्ञानिक आभास होता है कि पत्थर "भारहीन" हो गया था।',
    vashisthaRef: 'सुश्रुत संहिता, सूत्रस्थान: ध्वनिक लय के अंतर्गत पेशीय समन्वय।',
    illustratedIcon: 'Activity'
  },
  {
    id: 'mr-vibration',
    mythTitle: 'स्वतः मंत्रोच्चार करने वाले मंदिर गर्भगृह',
    mythDetails: 'पश्चिमी घाट के कुछ सुदूर गुफा मंदिरों के बारे में कहा जाता है कि जब कोई यात्री आंतरिक गर्भगृह के केंद्र में अकेला खड़ा होता है, तो वे अपने आप "ॐ" के ब्रह्मांडीय नाद को दोहराते हैं।',
    realityTitle: 'ध्वनिक अप्रगामी तरंगें (Standing Waves) और दीर्घवृत्तीय गुहा अनुनाद',
    realityDetails: 'प्राचीन मंदिर के गर्भगृहों को सटीक अर्धगोलाकार या अर्ध-दीर्घवृत्तीय वक्रों में तराशा गया था, जो ध्वनिक व्हिस्परिंग गैलरी के संरचनात्मक गणित का अनुसरण करते हैं।',
    scientificExplanation: 'जब कोई मनुष्य दीर्घवृत्तीय पत्थर के कक्ष के केंद्र में सांस लेता है, बोलता है या भार बदलता है, तो कक्ष 110Hz और 130Hz के बीच की आवृत्तियों को बढ़ाता है। यह अप्रगामी तरंग अनुनाद सभी कोणों से वक्ता के कानों में वापस परावर्तित होता है, जिससे एक फीडबैक लूप बनता है जो निरंतर, स्वतःस्फूर्त गूंजते मंत्र जैसा सुनाई देता है।',
    vashisthaRef: 'शिल्प शास्त्र: ध्वनि-परावर्तक गुफाओं की वास्तुकला।',
    illustratedIcon: 'Volume'
  }
];

export const libraryItems: LibraryItem[] = [
  {
    id: 'lib-shivasutra',
    title: 'Shivasutra',
    category: 'Siddhanta & Sadhana',
    origin: 'Dr. Shyamakant Dwivedi \'Anand\'',
    estimatedAge: 'Modern Print of Ancient Text',
    summary: 'A foundational text of Kashmir Shaivism, presenting the ultimate reality and the path to spiritual realization through the aphorisms of Shiva.',
    translatedExcerpt: '"Chaitanyamatma — The self is consciousness. The fundamental reality is the pure, undifferentiated consciousness that pervades the universe."',
    condition: 'Hardcover, cloth-bound with gold embossing.',
    languages: ['Sanskrit', 'Hindi']
  },
  {
    id: 'lib-ekalingapuranam',
    title: 'Shrimad Ekalingapuranam',
    category: 'Purana',
    origin: 'Dr. Shrikrishna Jugnu / Prof. Bhaivar Sharma',
    estimatedAge: 'Modern Print',
    summary: 'A regional Purana detailing the legends, rituals, and significance of Lord Eklingji, the ruling deity of Mewar.',
    translatedExcerpt: '"In the presence of the eternal Lord, the cycles of time dissolve, and the devotee finds absolute sanctuary within the sanctum of the heart."',
    condition: 'Hardcover, maroon binding with gold text.',
    languages: ['Sanskrit', 'Hindi']
  },
  {
    id: 'lib-tantratattvam',
    title: 'Shri Tara-Tantram',
    category: 'Tantra & Mahavidya',
    origin: 'Yogeshwaranand & Sumit Girdharwal',
    estimatedAge: 'Contemporary Print',
    summary: 'An exploration of the fundamental principles of Tantra, focusing on the Dwitiya Mahavidya (Goddess Tara, The Second Wisdom Goddess) and esoteric sadhana practices.',
    translatedExcerpt: '"The bindu (center) is not merely a focal point for the mind, but a grounding pole where the cosmic energy manifests in the physical vessel."',
    condition: 'Hardcover, deep green binding.',
    languages: ['Sanskrit', 'Hindi']
  },
  {
    id: 'lib-kamakhya',
    title: 'Shri Kamakhya-Rahasyam',
    category: 'Tantra & Shakti',
    origin: 'Yogeshwaranand & Sumit Girdharwal',
    estimatedAge: 'Contemporary Print',
    summary: 'A deep dive into the esoteric mysteries and highly secretive rituals associated with Goddess Kamakhya, the presiding deity of desire and creation.',
    translatedExcerpt: '"At the center of the yoni yantra lies the primordial void, from which all creation emerges and to which all elements must eventually return."',
    condition: 'Hardcover, purple binding.',
    languages: ['Sanskrit', 'Hindi']
  },
  {
    id: 'lib-shabar-uttar',
    title: 'Shabar-Mantra-Sagar (Uttar Bhag)',
    category: 'Shabar Mantra',
    origin: 'S.N Khandelwal',
    estimatedAge: 'Modern Print',
    summary: 'The latter half of the vast ocean of Shabar Mantras—highly potent, colloquial invocations developed by the Nath Yogis for immediate results.',
    translatedExcerpt: '"By the command of the Guru, let the elements bind. The mantra spoken in the tongue of the earth moves the heavens instantly."',
    condition: 'Hardcover, black binding with an esoteric sun sigil.',
    languages: ['Hindi', 'Regional Dialects']
  },
  {
    id: 'lib-shabar-purva',
    title: 'Shabar-Mantra-Sagar',
    category: 'Shabar Mantra',
    origin: 'Gopaniya evam Adbhut Shabar Mantron ka Durlabh Sangrah',
    estimatedAge: 'Modern Print',
    summary: 'A rare collection of secret and miraculous Shabar mantras, known for their directness and divergence from classical Sanskrit grammar rules.',
    translatedExcerpt: '"The sound is the key, the intent is the lock. When the rural tongue calls upon the cosmic force, the response is swift and undeniable."',
    condition: 'Hardcover, bright blue binding.',
    languages: ['Hindi', 'Regional Dialects']
  }
];

export const libraryItemsHi: LibraryItem[] = [
  {
    id: 'lib-shivasutra',
    title: 'शिवसूत्र',
    category: 'सिद्धान्त एवं साधना',
    origin: 'डॉ. श्यामाकान्त द्विवेदी \'आनन्द\'',
    estimatedAge: 'प्राचीन ग्रंथ का आधुनिक संस्करण',
    summary: 'कश्मीर शैव दर्शन का एक आधारभूत ग्रंथ, जो शिव के सूत्रों के माध्यम से परम सत्य और आध्यात्मिक साक्षात्कार के मार्ग को प्रस्तुत करता है।',
    translatedExcerpt: '"चैतन्यमात्मा — आत्मा ही चैतन्य है। मूलभूत वास्तविकता वह शुद्ध, अविभाजित चेतना है जो संपूर्ण ब्रह्मांड में व्याप्त है।"',
    condition: 'हार्डकवर, स्वर्ण उभार के साथ कपड़े की जिल्द।',
    languages: ['संस्कृत', 'हिंदी']
  },
  {
    id: 'lib-ekalingapuranam',
    title: 'श्रीमद् एकलिंगपुराणम्',
    category: 'पुराण',
    origin: 'डॉ. श्रीकृष्ण जुगनू / प्रो. भँवर शर्मा',
    estimatedAge: 'आधुनिक संस्करण',
    summary: 'मेवाड़ के अधिष्ठाता देव भगवान एकलिंगजी की कथाओं, अनुष्ठानों और महत्व का विवरण देने वाला एक क्षेत्रीय पुराण।',
    translatedExcerpt: '"शाश्वत प्रभु की उपस्थिति में काल के चक्र विलीन हो जाते हैं, और साधक को हृदय के गर्भगृह में परम आश्रय प्राप्त होता है।"',
    condition: 'हार्डकवर, स्वर्ण अक्षरों के साथ मैरून जिल्द।',
    languages: ['संस्कृत', 'हिंदी']
  },
  {
    id: 'lib-tantratattvam',
    title: 'श्री तारा-तन्त्रम्',
    category: 'तन्त्र एवं महाविद्या',
    origin: 'योगेश्वरानन्द एवं सुमित गिरधरवाल',
    estimatedAge: 'समकालीन संस्करण',
    summary: 'द्वितीया महाविद्या (देवी तारा) और गूढ़ साधना पद्धतियों पर केंद्रित तन्त्र के मूलभूत सिद्धांतों का अन्वेषण।',
    translatedExcerpt: '"बिन्दु केवल मन के लिए एक केंद्र नहीं है, बल्कि वह आधार स्तंभ है जहाँ ब्रह्मांडीय ऊर्जा भौतिक पात्र में प्रकट होती है।"',
    condition: 'हार्डकवर, गहरी हरी जिल्द।',
    languages: ['संस्कृत', 'हिंदी']
  },
  {
    id: 'lib-kamakhya',
    title: 'श्री कामाख्या-रहस्यम्',
    category: 'तन्त्र एवं शक्ति',
    origin: 'योगेश्वरानन्द एवं सुमित गिरधरवाल',
    estimatedAge: 'समकालीन संस्करण',
    summary: 'इच्छा और सृष्टि की अधिष्ठात्री देवी कामाख्या से जुड़े गूढ़ रहस्यों और गोपनीय अनुष्ठानों का गहन अध्ययन।',
    translatedExcerpt: '"योनि यन्त्र के केंद्र में आदिम शून्य स्थित है, जिससे संपूर्ण सृष्टि प्रकट होती है और जिसमें अंततः सभी तत्व विलीन हो जाते हैं।"',
    condition: 'हार्डकवर, बैंगनी जिल्द।',
    languages: ['संस्कृत', 'हिंदी']
  },
  {
    id: 'lib-shabar-uttar',
    title: 'शाबरमन्त्रसागर (उत्तर भाग)',
    category: 'शाबर मन्त्र',
    origin: 'एस. एन. खण्डेलवाल',
    estimatedAge: 'आधुनिक संस्करण',
    summary: 'शाबर मन्त्रों के विशाल सागर का उत्तर भाग — तत्काल परिणामों के लिए नाथ योगियों द्वारा विकसित अत्यंत प्रभावशाली लोक-आह्वान।',
    translatedExcerpt: '"गुरु के आदेश से तत्व बंध जाएं। धरती की वाणी में बोला गया मन्त्र आकाश को तुरंत गतिमान कर देता है।"',
    condition: 'हार्डकवर, गूढ़ सूर्य मुद्रा के साथ काली जिल्द।',
    languages: ['हिंदी', 'क्षेत्रीय बोलियाँ']
  },
  {
    id: 'lib-shabar-purva',
    title: 'शाबरमन्त्रसागर',
    category: 'शाबर मन्त्र',
    origin: 'गोपनीय एवं अद्भुत शाबर मन्त्रों का दुर्लभ संग्रह',
    estimatedAge: 'आधुनिक संस्करण',
    summary: 'गुप्त और चमत्कारी शाबर मन्त्रों का एक दुर्लभ संग्रह, जो अपनी प्रत्यक्षता और शास्त्रीय व्याकरण नियमों से भिन्नता के लिए जाना जाता है।',
    translatedExcerpt: '"ध्वनि ही कुंजी है, संकल्प ही ताला है। जब लोक-वाणी ब्रह्मांडीय शक्ति का आह्वान करती है, तो उत्तर तीव्र और अमोघ होता है।"',
    condition: 'हार्डकवर, चमकीली नीली जिल्द।',
    languages: ['हिंदी', 'क्षेत्रीय बोलियाँ']
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'tl-2000',
    year: 2000,
    title: 'The Spiritual Awakening',
    location: 'Banaras (Varanasi)',
    achievement: 'Formal education in Tantra Science',
    narrative: 'Ram Ashok Kumar began his formal education in Tantra Science, training under the legendary Kina Ram Sampradaya in Banaras (Varanasi) — a lineage older than memory.',
    sketchLabel: 'Entry №01'
  },
  {
    id: 'tl-2003',
    year: 2003,
    title: 'The Genesis',
    location: 'India',
    achievement: 'Paranormal Mechanism founded',
    narrative: 'Paranormal Mechanism is founded — a specialized institution dedicated to researching unexplained anomalies and dark regional phenomena across the subcontinent.',
    sketchLabel: 'Entry №02'
  },
  {
    id: 'tl-2009',
    year: 2009,
    title: 'Canonical Ingestion',
    location: 'India',
    achievement: 'Deeper study of Tantra Science',
    narrative: 'Deeper study of Tantra Science, aligning fieldwork directly with strict principles found in Hindu Dharmashastra to decode complex spiritual entities.',
    sketchLabel: 'Entry №03'
  },
  {
    id: 'tl-2012',
    year: 2012,
    title: 'Ultimate Expertise',
    location: 'India',
    achievement: 'Mastery over Metaphysics and Tantra Science',
    narrative: 'Recognized mastery over Metaphysics and Tantra Science — the transition from investigator into a leading authority on energy binding and containment.',
    sketchLabel: 'Entry №04'
  },
  {
    id: 'tl-2014',
    year: 2014,
    title: 'Entering the Digital Realm',
    location: 'Global',
    achievement: 'Social media launch',
    narrative: 'Paranormal Mechanism launches across global social media networks. Private case archives open to the public for the first time.',
    sketchLabel: 'Entry №05'
  },
  {
    id: 'tl-2015',
    year: 2015,
    title: 'The Science Phase',
    location: 'India',
    achievement: 'Crossroads of psychology and environment',
    narrative: 'Organizational horizons expand into the crossroads of psychology and environment — Pareidolia, the Placebo Effect, Schizophrenia, Hysteria, Geopathic Stress, and Idiopathic anomalies — to eliminate false positives in field research.',
    sketchLabel: 'Entry №06'
  },
  {
    id: 'tl-2019',
    year: 2019,
    title: 'Alliance Building',
    location: 'Global',
    achievement: 'Cross-collaborations with premier investigators',
    narrative: 'Cross-collaborations with premier paranormal investigators worldwide transform the unit into an interconnected hub for advanced research.',
    sketchLabel: 'Entry №07'
  },
  {
    id: 'tl-2021',
    year: 2021,
    title: 'The 100K Milestone',
    location: 'Global',
    achievement: '100,000 dedicated followers',
    narrative: 'Mass public recognition arrives — over 100,000 dedicated followers, a loyal community of lore hunters and skeptics alike.',
    sketchLabel: 'Entry №08'
  },
  {
    id: 'tl-2024',
    year: 2024,
    title: 'Mainstream Media Ingestion',
    location: 'India',
    achievement: 'National media campaign',
    narrative: 'A national media campaign brings high-profile appearances across prominent podcast circuits and news outlets.',
    sketchLabel: 'Entry №09'
  },
  {
    id: 'tl-present',
    year: 'Present',
    title: 'Global Outreach & Resolution',
    location: 'Global',
    achievement: 'Spiritual relief and education',
    narrative: 'Decades of metaphysical research, psychological insight, and Tantric knowledge are now leveraged to provide spiritual relief, resolution, and education to thousands worldwide.',
    sketchLabel: 'Entry №10'
  }
];

export const timelineMilestonesHi: TimelineMilestone[] = [
  {
    id: 'tl-2000',
    year: 2000,
    title: 'आध्यात्मिक जागरण',
    location: 'बनारस (वाराणसी)',
    achievement: 'तन्त्र विज्ञान में औपचारिक शिक्षा',
    narrative: 'राम अशोक कुमार ने बनारस (वाराणसी) में प्रसिद्ध कीनाराम सम्प्रदाय के अंतर्गत तन्त्र विज्ञान में अपनी औपचारिक शिक्षा और साधना प्रारंभ की।',
    sketchLabel: 'प्रविष्टि सं. 01'
  },
  {
    id: 'tl-2003',
    year: 2003,
    title: 'संस्था की उत्पत्ति',
    location: 'भारत',
    achievement: 'पैरानॉर्मल मैकेनिज्म की स्थापना',
    narrative: 'पैरानॉर्मल मैकेनिज्म की स्थापना हुई — भारतीय उपमहाद्वीप में अनसुलझी विसंगतियों और गूढ़ क्षेत्रीय घटनाओं के शोध के लिए समर्पित एक विशेष संस्थान।',
    sketchLabel: 'प्रविष्टि सं. 02'
  },
  {
    id: 'tl-2009',
    year: 2009,
    title: 'शास्त्रीय समन्वय',
    location: 'भारत',
    achievement: 'तन्त्र विज्ञान का गहन अध्ययन',
    narrative: 'जटिल आध्यात्मिक सत्ताओं को समझने के लिए क्षेत्रीय शोध को सीधे हिंदू धर्मशास्त्र और आगम ग्रंथों के सख्त सिद्धांतों के साथ संरेखित किया गया।',
    sketchLabel: 'प्रविष्टि सं. 03'
  },
  {
    id: 'tl-2012',
    year: 2012,
    title: 'सर्वोच्च विशेषज्ञता',
    location: 'भारत',
    achievement: 'तत्त्वमीमांसा और तन्त्र विज्ञान में दक्षता',
    narrative: 'तत्त्वमीमांसा और तन्त्र विज्ञान में मान्यता प्राप्त दक्षता — एक अन्वेषक से ऊर्जा बंधन और नियंत्रण के प्रमुख विशेषज्ञ के रूप में रूपांतरण।',
    sketchLabel: 'प्रविष्टि सं. 04'
  },
  {
    id: 'tl-2014',
    year: 2014,
    title: 'डिजिटल क्षेत्र में प्रवेश',
    location: 'वैश्विक',
    achievement: 'सोशल मीडिया शुभारंभ',
    narrative: 'वैश्विक सोशल मीडिया नेटवर्क पर पैरानॉर्मल मैकेनिज्म का शुभारंभ। निजी केस अभिलेखागार पहली बार जनता के लिए खोले गए।',
    sketchLabel: 'प्रविष्टि सं. 05'
  },
  {
    id: 'tl-2015',
    year: 2015,
    title: 'वैज्ञानिक चरण',
    location: 'भारत',
    achievement: 'मनोविज्ञान और पर्यावरण का संगम',
    narrative: 'क्षेत्रीय शोध में गलत निष्कर्षों को समाप्त करने के लिए मनोविज्ञान और पर्यावरण — पैरेडोलिया, प्लेसीबो प्रभाव, सिज़ोफ्रेनिया, हिस्टीरिया और भू-तनाव — के संगम में संगठनात्मक विस्तार।',
    sketchLabel: 'प्रविष्टि सं. 06'
  },
  {
    id: 'tl-2019',
    year: 2019,
    title: 'वैश्विक गठबंधन',
    location: 'वैश्विक',
    achievement: 'प्रमुख अन्वेषकों के साथ सहयोग',
    narrative: 'दुनिया भर के प्रमुख पैरानॉर्मल अन्वेषकों के साथ सहयोग ने इस इकाई को उन्नत शोध के एक अंतर्संबंधित केंद्र में बदल दिया।',
    sketchLabel: 'प्रविष्टि सं. 07'
  },
  {
    id: 'tl-2021',
    year: 2021,
    title: '1,00,000 अनुयायियों का मील का पत्थर',
    location: 'वैश्विक',
    achievement: '1,00,000 समर्पित अनुयायी',
    narrative: 'व्यापक जन पहचान मिली — 1,00,000 से अधिक समर्पित अनुयायियों और जिज्ञासु शोधार्थियों का एक निष्ठावान समुदाय बना।',
    sketchLabel: 'प्रविष्टि सं. 08'
  },
  {
    id: 'tl-2024',
    year: 2024,
    title: 'मुख्यधारा मीडिया में उपस्थिति',
    location: 'भारत',
    achievement: 'राष्ट्रीय मीडिया अभियान',
    narrative: 'एक राष्ट्रीय मीडिया अभियान के तहत प्रमुख पॉडकास्ट सर्किट और समाचार चैनलों पर उच्च-स्तरीय साक्षात्कार और चर्चाएँ प्रसारित हुईं।',
    sketchLabel: 'प्रविष्टि सं. 09'
  },
  {
    id: 'tl-present',
    year: 'वर्तमान',
    title: 'वैश्विक पहुँच एवं समाधान',
    location: 'वैश्विक',
    achievement: 'आध्यात्मिक राहत और शिक्षण',
    narrative: 'दशकों के आध्यात्मिक शोध, मनोवैज्ञानिक अंतर्दृष्टि और तांत्रिक ज्ञान का उपयोग अब दुनिया भर में हजारों लोगों को समाधान और शिक्षा प्रदान करने के लिए किया जा रहा है।',
    sketchLabel: 'प्रविष्टि सं. 10'
  }
];

export function getInvestigations(lang: 'en' | 'hi'): Investigation[] {
  return lang === 'hi' ? investigationsHi : investigations;
}

export function getEquipmentList(lang: 'en' | 'hi'): Equipment[] {
  return lang === 'hi' ? equipmentListHi : equipmentList;
}

export function getMythRealityList(lang: 'en' | 'hi'): MythReality[] {
  return lang === 'hi' ? mythRealityListHi : mythRealityList;
}

export function getLibraryItems(lang: 'en' | 'hi'): LibraryItem[] {
  return lang === 'hi' ? libraryItemsHi : libraryItems;
}

export function getTimelineMilestones(lang: 'en' | 'hi'): TimelineMilestone[] {
  return lang === 'hi' ? timelineMilestonesHi : timelineMilestones;
}
