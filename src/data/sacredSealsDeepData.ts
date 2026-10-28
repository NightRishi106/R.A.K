import { ResearchArticle } from './researchPortalData';

export interface ResearchComparisonTable {
  id: string;
  articleSlug: string;
  titleEn: string;
  titleHi: string;
  captionEn: string;
  captionHi: string;
  headersEn: string[];
  headersHi: string[];
  rowsEn: string[][];
  rowsHi: string[][];
}

export interface SpecialCircularSeal {
  id: string;
  sealNumber: string;
  categorySlug: string;
  articleSlug: string;
  sanskritSeal: string;
  shortTitleEn: string;
  shortTitleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  domainBadgeEn: string;
  domainBadgeHi: string;
  accentColor: string;
  motifType: 'vaishnava' | 'aghora' | 'ghora11' | 'kapalika5' | 'prahar8' | 'bhairavagana' | 'shakta' | 'mahavidya';
  isPendingVerificationNote?: boolean;
  parentSealId?: string;
  subParts?: SpecialCircularSeal[];
}

// ============================================================================
// STRUCTURED ARCHIVAL TABLES FOR MONOGRAPH ARTICLES
// ============================================================================
export const ARTICLE_COMPARISON_TABLES: Record<string, ResearchComparisonTable[]> = {
  'jaya-vijaya-vaikuntha-dvarapalas': [
    {
      id: 'table-jaya-vijaya-vs-bhairavagana',
      articleSlug: 'jaya-vijaya-vaikuntha-dvarapalas',
      titleEn: 'Comparative Taxonomy: Jaya & Vijaya vs. Bhairavagaṇa',
      titleHi: 'तुलनात्मक वर्गीकरण: जय–विजय बनाम भैरवगण',
      captionEn:
        'Jaya and Vijaya belong to Vaiṣṇava theology as gatekeepers (dvārapālas) of Vaikuṇṭha and should not be conflated with the Śaiva-Śākta Bhairavagaṇa.',
      captionHi:
        'जय और विजय वैष्णव धर्मशास्त्र में वैकुण्ठ के द्वारपाल (पार्षद) हैं; उन्हें बिना किसी विशिष्ट शास्त्रीय प्रमाण के शैव-शाक्त भैरवगण में सम्मिलित नहीं किया जाना चाहिए।',
      headersEn: ['Feature / Dimension', 'Jaya and Vijaya (जय–विजय)', 'Bhairavagaṇa (भैरवगण)'],
      headersHi: ['विशेषता / आधार', 'जय और विजय (जय–विजय)', 'भैरवगण (भैरवगण)'],
      rowsEn: [
        ['Primary Tradition', 'Vaiṣṇava (Pāñcarātra, Vaikhānasa & Bhāgavata)', 'Śaiva and Śākta (Āgama, Trika & Kaula)'],
        ['Principal Deity', 'Viṣṇu / Nārāyaṇa', 'Bhairava (fierce cosmic manifestation of Śiva)'],
        ['Main Role', 'Dvārapālas (Gatekeepers) & Pārṣadas of Vaikuṇṭha', 'Bhairava-associated attendants, directional guardians & Kṣetrapālas'],
        ['Key Scriptural Sources', 'Śrīmad-Bhāgavatam (Canto 3 Ch. 15–16; Canto 7 Ch. 1 & 10; Canto 10 Ch. 74)', 'Śiva Purāṇa, Kāśī Khaṇḍa, Svacchanda Tantra, Rudrayāmala'],
        ['Main Research Theme', 'Divine service, humility before sages, the 3-birth curse & Avatāra līlā', 'Directional mandala guardianship, Tantric classifications & sacred geography']
      ],
      rowsHi: [
        ['प्रमुख परम्परा', 'वैष्णव (पाञ्चरात्र, वैखानस एवं भागवत परम्परा)', 'शैव और शाक्त (आगम, त्रिक एवं कौल परम्परा)'],
        ['प्रमुख इष्टदेव', 'भगवान् विष्णु / नारायण', 'भैरव (शिव का उग्र एवं रक्षक स्वरूप)'],
        ['मुख्य भूमिका', 'वैकुण्ठ धाम के द्वारपाल एवं नित्य पार्षद', 'भैरव के सहचर गण, दिशा-रक्षक एवं क्षेत्रपाल'],
        ['प्रमुख शास्त्रीय स्रोत', 'श्रीमद्भागवत महापुराण (स्कन्ध ३ अध्याय १५–१६; स्कन्ध ७ अध्याय १ व १०; स्कन्ध १० अध्याय ७४)', 'शिव पुराण, काशी खण्ड, स्वच्छन्द तन्त्र, रुद्रयामल तन्त्र'],
        ['मुख्य शोध विषय', 'भगवद्-सेवा, संतों के प्रति विनय, तीन जन्मों का शाप एवं अवतार-लीला समन्वय', 'दिग्मण्डल रक्षा, तांत्रिक वर्गीकरण, अनुष्ठान एवं पवित्र भूगोल']
      ]
    },
    {
      id: 'table-jaya-vijaya-three-births',
      articleSlug: 'jaya-vijaya-vaikuntha-dvarapalas',
      titleEn: 'The Three Earthly Births of Jaya & Vijaya Across Cosmic Yugas',
      titleHi: 'तीन युगों में जय और विजय के तीन असुर-जन्म एवं उद्धारकर्ता अवतार',
      captionEn:
        'Each earthly birth links two major antagonists with specific Avatāras of Viṣṇu, uniting four major Purāṇic and Epic cycles into one theological arc.',
      captionHi:
        'प्रत्येक जन्म वराह, नृसिंह, राम और कृष्ण अवतारों की कथाओं को एक ही दार्शनिक सूत्र में पिरोता है।',
      headersEn: ['Birth Sequence', 'Cosmic Era (Yuga)', 'Incarnations of Jaya & Vijaya', 'Confronting Avatāra of Viṣṇu', 'Key Narrative & Scriptural Reference'],
      headersHi: ['जन्म क्रम', 'युग', 'जय–विजय के रूप', 'उद्धारकर्ता विष्णु अवतार', 'प्रमुख आख्यान एवं ग्रन्थ संदर्भ'],
      rowsEn: [
        [
          'First Birth (प्रथम जन्म)',
          'Satya Yuga (Kṛta Yuga)',
          'Hiraṇyākṣa & Hiraṇyakaśipu',
          'Varāha (Boar) & Narasiṃha (Man-Lion)',
          'Cosmic ocean rescue of Bhūdevī & protection of devotee Prahlāda (Bhāgavatam Canto 3 Ch. 17–19 & Canto 7 Ch. 1–10)'
        ],
        [
          'Second Birth (द्वितीय जन्म)',
          'Tretā Yuga',
          'Rāvaṇa & Kumbhakarṇa',
          'Śrī Rāma (Dāśarathi Rāma)',
          'Abduction of Sītā, Laṅkā war & liberation by Rāma’s arrows (Vālmīki Rāmāyaṇa & Bhāgavatam Canto 9 Ch. 10)'
        ],
        [
          'Third Birth (तृतीय जन्म)',
          'Dvāpara Yuga',
          'Śiśupāla & Dantavakra',
          'Śrī Kṛṣṇa (Vāsudeva Kṛṣṇa)',
          'Yudhiṣṭhira’s Rājasūya sacrifice (100 offenses forgiven before Sudarśana Cakra liberation) & Mathurā duel (Bhāgavatam Canto 10 Ch. 74 & 78)'
        ]
      ],
      rowsHi: [
        [
          'प्रथम जन्म',
          'सत्ययुग (कृतयुग)',
          'हिरण्याक्ष एवं हिरण्यकशिपु',
          'वराह अवतार एवं नृसिंह अवतार',
          'पृथ्वी का रसातल से उद्धार तथा भक्त प्रह्लाद की रक्षा (श्रीमद्भागवत स्कन्ध ३ एवं स्कन्ध ७)'
        ],
        [
          'द्वितीय जन्म',
          'त्रेतायुग',
          'रावण एवं कुम्भकर्ण',
          'श्रीराम (दाशरथि राम)',
          'सीता-हरण, लंका युद्ध एवं श्रीराम के बाणों से परम गति (वाल्मीकि रामायण एवं भागवत स्कन्ध ९)'
        ],
        [
          'तृतीय जन्म',
          'द्वापरयुग',
          'शिशुपाल एवं दन्तवक्र',
          'श्रीकृष्ण (वासुदेव कृष्ण)',
          'युधिष्ठिर के राजसूय यज्ञ में १०० अपराध पूर्ण होने पर सुदर्शन चक्र से उद्धार एवं मथुरा युद्ध (भागवत १०.७४ एवं १०.७८)'
        ]
      ]
    }
  ],
  'ghora-sampradaya-11-bhedas-study': [
    {
      id: 'table-ghora-11-12-bhedas',
      articleSlug: 'ghora-sampradaya-11-bhedas-study',
      titleEn: 'Lexical & Source-Verification Ledger: The Reported 11 (12 Listed) Ghora Bhedas',
      titleHi: 'घोर सम्प्रदाय के बताए गए ११ (सूचीबद्ध १२) भेदों की शब्दार्थ एवं स्रोत-सत्यापन तालिका',
      captionEn:
        'RESEARCH QUALIFICATION: Although the research notes refer to "11 Bhedas", 12 terms are listed (including Siddha). Because no primary Sanskrit manuscript has yet been verified for this exact 12-item sect list, each term is documented with its defensible Sanskrit meaning and open philological questions rather than fabricated sect histories.',
      captionHi:
        'शोध सावधानी: नोट्स में "११ भेद" लिखा गया है किन्तु "सिद्ध" सहित १२ नाम सूचीबद्ध हैं। चूँकि इस विशिष्ट सूची का मूल प्राथमिक ग्रंथ अभी सत्यापित नहीं है, अतः काल्पनिक इतिहास गढ़ने के स्थान पर प्रत्येक शब्द का प्रामाणिक संस्कृत अर्थ और शोध-प्रश्न दिए गए हैं।',
      headersEn: ['#', 'Devanāgarī & IAST', 'Defensible Lexical Meaning', 'Contextual Usage in Indic Texts', 'Open Research & Verification Question'],
      headersHi: ['क्र.', 'नाम (देवनागरी एवं IAST)', 'शाब्दिक संस्कृत अर्थ', 'शास्त्रीय संदर्भ में प्रयोग', 'अनुसंधान एवं सत्यापन प्रश्न'],
      rowsEn: [
        ['1', 'रक्त · Rakta', 'Red color; blood; dyed/impassioned', 'Associated with rajas, vital energy, fierce goddesses, or red vestments in Tantric texts', 'Is Rakta a guru-lineage name, a sadhana stage, a color-based classification, or a textual adjective?'],
        ['2', 'शुक्ल · Śukla', 'White, bright, luminous, pure', 'Associated with sattva, sacred ash (bhasma), lunar fortnight, or pure consciousness', 'Does Śukla denote an ascetic vestment/ash group, a contemplative state, or a contrast pair with Rakta/Nīla?'],
        ['3', 'विन्मूत्र · Vinmūtra (Viṇmūtra)', 'Excrement and urine (bodily waste)', 'Referenced in discussions of antinomian practices challenging purity/impurity (śuddha-aśuddha) taboos', 'What is the exact manuscript spelling (viṇmūtra/viṭ-mūtra), chapter, and syntactic context—a practice descriptor rather than a sect?'],
        ['4', 'भक्ष · Bhakṣa', 'Eating, food, consumption', 'General Sanskrit noun for diet/consumption; occasionally appears in compounds describing ascetic dietetics', 'Was Bhakṣa originally part of a compound word in the source list, or a dietary observance category?'],
        ['5', 'वनान्त · Vanānta', 'Edge of the forest, deep wilderness', 'Forests, mountains, and cremation grounds are classic habitats for tapasyā and avadhūta sādhanā', 'Does Vanānta describe the geographical dwelling of forest ascetics rather than an organized sect branch?'],
        ['6', 'घोर · Ghora', 'Fierce, awesome, formidable, terrifying', 'Widely used for fierce manifestations of Rudra-Śiva and dynamic Śakti powers in Śaiva Āgamas', 'Does Ghora here reflect the philosophical triad (Aghora–Ghora–Ghoratara) rather than an independent Ghora sect?'],
        ['7', 'घोरतर · Ghoratara', 'More fierce, intensely formidable (comparative)', 'Attested in Siddhayogeśvarīmata & Trika texts (studied by Judit Törzsök) for classes of Śक्त्यात्मक powers', 'Is this list borrowing Ghoratara from early Trika/Yāmala goddess classifications or a later vernacular compendium?'],
        ['8', 'वीणा · Vīṇā', 'Classical Indian stringed lute', 'Connected with Nāda-yoga, Sarasvatī, Dakṣiṇāmūrti, and the Vīṇāśikha Tantra of the Vāmasrotas', 'Is Vīṇā a reference to Vīṇāśikha Tantra, a guru name, or a scribal/transliteration variant of another term?'],
        ['9', 'नील · Nīla', 'Dark blue or sapphire-black color', 'Associated with Nīlakaṇṭha Śiva, Nīlasarasvatī/Tārā, and Bṛhannīla Tantra', 'Does Nīla indicate an iconographic color attribute, a deity epithet, or a vestment classification?'],
        ['10', 'शर्वभक्ष · Śarvabhakṣa (Sarvabhakṣa?)', 'Śarva (Śiva) + bhakṣa, OR variant of Sarvabhakṣa ("all-eating")', 'Sarvabhakṣa ("omnivorous / accepting all alms without discrimination") is a known avadhūta attribute', 'Check original Devanāgarī manuscript: is the term शर्वभक्ष (Śarvabhakṣa) or सर्वभक्ष (Sarvabhakṣa)?'],
        ['11', 'घोराघोर · Ghorāghora', 'Compound of Ghora (fierce) and Aghora (non-fierce)', 'Represents the dialectical unity of fierce and benign aspects of Śiva in Śaiva philosophy', 'Does the source text use Ghorāghora as a philosophical synthesis or as a named ascetic sub-group?'],
        ['12', 'सिद्ध · Siddha', 'Perfected adept, accomplished yogin', 'Universal term across Nātha, Siddha, Kaula, and Śaiva traditions for liberated masters', 'Why does the list contain 12 names while titled "11 Bhedas"—was Siddha a header/summary or paired with another item?']
      ],
      rowsHi: [
        ['१', 'रक्त (Rakta)', 'लाल रंग; रक्त अथवा जीवन-शक्ति', 'तांत्रिक साहित्य में रजोगुण, उग्र देवता या रक्त-वस्त्र के संदर्भ में प्रयुक्त', 'क्या यह किसी गुरु-परंपरा का नाम है, साधना की श्रेणी है, या रंग-आधारित विशेषण?'],
        ['२', 'शुक्ल (Śukla)', 'सफेद, उज्ज्वल या शुद्ध', 'सत्त्वगुण, भस्म-धारण, शुक्ल पक्ष या निर्मल चेतना का वाचक', 'क्या "शुक्ल" किसी भस्म/वस्त्र समूह का संकेत है या साधना की अवस्था?'],
        ['३', 'विन्मूत्र / विण्मूत्र (Vinmūtra)', 'मल और मूत्र (शारीरिक अपशिष्ट)', 'शुद्ध-अशुद्ध की सामाजिक धारणाओं के अतिक्रमण के संदर्भ में उल्लिखित', 'मूल ग्रंथ में वर्तनी और वाक्य-संदर्भ क्या है—क्या यह केवल अभ्यास-विशेषण है, न कि स्वतंत्र शाखा?'],
        ['४', 'भक्ष (Bhakṣa)', 'खाना, भक्षण करना या आहार', 'आहार-नियमों या भिक्षा के संदर्भ में प्रयुक्त सामान्य संस्कृत शब्द', 'क्या मूल सूची में "भक्ष" किसी संयुक्त पद का टूटा हुआ भाग है?'],
        ['५', 'वनान्त (Vanānta)', 'वन का सीमांत या गहन वन-प्रांत', 'वन, पर्वत और श्मशान भारतीय तपस्वी परंपराओं के प्रमुख साधना-स्थल रहे हैं', 'क्या यह साधकों के निवास-स्थान का वर्णन है या किसी वर्गीकृत समूह का नाम?'],
        ['६', 'घोर (Ghora)', 'भयानक, उग्र या तेजस्वी', 'रुद्र-शिव के उग्र रूपों और शक्ति-वर्गीकरण में व्यापक रूप से प्रयुक्त', 'क्या यहाँ घोर शब्द शैव दार्शनिक त्रयी (अघोर-घोर-घोरतर) से आया है?'],
        ['७', 'घोरतर (Ghoratara)', 'अधिक घोर या तीव्रतर उग्र (तुलनात्मक रूप)', 'सिद्धयोगेश्वरीमत (Judit Törzsök) और त्रिक ग्रंथों में शक्तियों के वर्ग के रूप में उल्लिखित', 'क्या यह शब्द प्रारंभिक यामल/त्रिक ग्रंथों से लिया गया है या किसी परवर्ती सूची से?'],
        ['८', 'वीणा (Vīṇā)', 'भारतीय तार-वाद्य (वीणा)', 'नाद-योग, वीणाशिख तन्त्र (वामस्रोतस्) एवं दक्षिणामूर्ति से संबद्ध', 'क्या यह वीणाशिख तन्त्र का संकेत है, किसी गुरु का नाम है, या लिपि की त्रुटि?'],
        ['९', 'नील (Nīla)', 'नीला या गहरा नीला रंग', 'नीलकण्ठ शिव, नीलतारा और बृहन्नील तन्त्र के संदर्भ में प्रयुक्त', 'क्या यह किसी देवता का विशेषण है या रंग-आधारित वर्गीकरण?'],
        ['१०', 'शर्वभक्ष (Śarvabhakṣa / सर्वभक्ष?)', 'शर्व (शिव) + भक्ष, अथवा "सर्वभक्ष" का रूपांतर', 'अवधूत परम्परा में "सर्वभक्ष" (बिना भेदभाव भिक्षा ग्रहण करने वाला) विशेषण मिलता है', 'मूल देवनागरी पाठ की जाँच आवश्यक: क्या मूल शब्द "सर्वभक्ष" था जो "शर्वभक्ष" लिखा गया?'],
        ['११', 'घोराघोर (Ghorāghora)', 'घोर और अघोर का संयुक्त द्वंद्व पद', 'शिव के उग्र (घोर) और अभय (अघोर) दोनों आयामों की एकता का दार्शनिक पद', 'क्या यह किसी तांत्रिक ग्रंथ का दार्शनिक सिद्धांत है या किसी शाखा का नाम?'],
        ['१२', 'सिद्ध (Siddha)', 'सिद्धि प्राप्त साधक या पूर्ण योगी', 'नाथ, कौल, योग और शैव परंपराओं में सिद्ध पुरुषों के लिए व्यापक शब्द', '११ भेदों की सूची में यह १२वाँ नाम कैसे जुड़ा—क्या यह किसी अन्य पद के साथ संयुक्त था?']
      ]
    }
  ],
  'kapalika-sampradaya-5-bhedas-somasiddhanta': [
    {
      id: 'table-kapalika-5-bhedas',
      articleSlug: 'kapalika-sampradaya-5-bhedas-somasiddhanta',
      titleEn: 'Reported Fivefold Kāpālika Classification — Source Verification Pending',
      titleHi: 'कापालिक सम्प्रदाय के बताए गए पाँच भेद — मूल स्रोत की पुष्टि लंबित',
      captionEn:
        'These five terms appear in modern vernacular notes as "five branches of Kāpālikas", but are not corroborated as historical sub-sects in surviving primary Sanskrit sources or standard academic monographs (e.g., Lorenzen, Sanderson).',
      captionHi:
        'ये पाँच नाम आधुनिक नोट्स में कापालिक उपशाखाओं के रूप में मिलते हैं, किंतु उपलब्ध प्राथमिक संस्कृत स्रोतों या मानक अकादमिक शोध (जैसे डेविड लॉरेंज़ेन) में स्वतंत्र ऐतिहासिक शाखाओं के रूप में प्रमाणित नहीं हैं।',
      headersEn: ['#', 'Devanāgarī & IAST', 'Defensible Sanskrit Lexical Meaning', 'Known Religious / Textual Context', 'Scholarly Research Question'],
      headersHi: ['क्र.', 'नाम (देवनागरी एवं IAST)', 'प्रामाणिक संस्कृत शब्दार्थ', 'ज्ञात धार्मिक एवं ग्रंथीय संदर्भ', 'शोध एवं सत्यापन प्रश्न'],
      rowsEn: [
        ['1', 'इन्द्र · Indra', 'Vedic King of Devas; sovereign lord or chief', 'Vedic-Purāṇic sovereign; occasionally used as an honorific title ("chief among...") in सिद्ध lists', 'Does Indra represent a guru honorific, a directional guardian, or a heading within a larger tantric table?'],
        ['2', 'देव · Deva', 'Shining one, deity, divine being; royal/ascetic suffix', 'Common suffix in Śaiva initiatory names (e.g., Somadeva, Vāmadeva) and general term for deities', 'Does Deva refer to a class of initiates bearing the -deva name-ending or a deity-focused observance?'],
        ['3', 'रुद्र · Rudra', 'The Roarer / fierce Vedic-Śaiva deity; Rudrabheda Āgamas', 'Central to Śaiva history; 18 of the 28 Siddhānta Āgamas belong to the Rudrabheda division', 'Does Rudra reflect the Rudrabheda Āgamic classification or worship of fierce Rudra-Bhairava forms?'],
        ['4', 'विद्या · Vidyā', 'Sacred knowledge, liberating wisdom, female mantra-deity', 'The Bhairava Tantras are famously divided into Mantrapīṭha and Vidyāpīṭha (goddess-centered texts)', 'Does Vidyā point to the canonical Vidyāpīṭha division of the Bhairava Tantras rather than a Kāpālika subsect?'],
        ['5', 'सिद्ध · Siddha', 'Perfected master, accomplished tantric yogin', 'The 12 Kāpālika gurus and 12 disciples in Sarvatantra/Śābara lists are revered as Siddhas', 'Does Siddha denote the Siddha-santāna lineage of perfected masters rather than a fifth sectarian subdivision?']
      ],
      rowsHi: [
        ['१', 'इन्द्र (Indra)', 'वैदिक देवराज इन्द्र; अधिपति या श्रेष्ठ', 'वैदिक-पौराणिक देवता; कभी-कभी सिद्ध-सूचियों में "श्रेष्ठ/इन्द्र" उपाधि के रूप में प्रयुक्त', 'क्या "इन्द्र" किसी गुरु-उपाधि, दिक्पाल या किसी बड़े वर्गीकरण के पद का नाम है?'],
        ['२', 'देव (Deva)', 'दिव्य सत्ता, प्रकाशमान देव; शैव दीक्षा-नाम प्रत्यय', 'शैव आचार्यों के दीक्षा-नामों (जैसे सोमदेव, वामदेव) के अंत में लगनेय वाला सामान्य पद', 'क्या यह किसी प्रकार के दीक्षित साधक-समूह या देव-उपासना को दर्शाता है?'],
        ['३', 'रुद्र (Rudra)', 'वैदिक-शैव देवता रुद्र; रुद्रभेद आगम वर्ग', '२८ शैव आगमों में १० शिवभेद और १८ रुद्रभेद आगमों का प्रसिद्ध शास्त्रीय विभाजन है', 'क्या यह "रुद्रभेद" आगम वर्गीकरण या उग्र रुद्र-भैरव उपासना का संकेत है?'],
        ['४', 'विद्या (Vidyā)', 'परा-विद्या, मन्त्र-शक्ति अथवा देवी-संहिता', 'भैरव तन्त्रों का प्रसिद्ध विभाजन "मन्त्रपीठ" और "विद्यापीठ" (देवी-प्रधान तन्त्र) के रूप में हुआ है', 'क्या "विद्या" शब्द भैरव आगमों के "विद्यापीठ" वर्ग को दर्शाता है?'],
        ['५', 'सिद्ध (Siddha)', 'सिद्धि-प्राप्त पूर्ण साधक या सिद्ध आचार्य', 'सर्वतन्त्र और नाथ-कापालिक सूचियों में १२ गुरुओं को सिद्ध-परंपरा से जोड़ा गया है', 'क्या "सिद्ध" किसी साधक की पूर्णता की अवस्था है या सिद्ध-सन्तान गुरु-परंपरा का संकेत?']
      ]
    },
    {
      id: 'table-three-claims-methodological-audit',
      articleSlug: 'kapalika-sampradaya-5-bhedas-somasiddhanta',
      titleEn: 'Methodological Audit of the Three Sectarian Claims in Research Notes',
      titleHi: 'शोध-नोट्स के तीन प्रमुख दावों की ऐतिहासिक एवं संपादकीय समीक्षा',
      captionEn:
        'How this archive handles verified historical scholarship versus unverified classification lists.',
      captionHi:
        'यह अभिलेखागार प्रमाणित ऐतिहासिक तथ्यों और असत्यापित वर्गीकरण-सूचियों के बीच किस प्रकार स्पष्ट अंतर रखता है।',
      headersEn: ['Claim in Research Notes', 'Current Evidentiary Status', 'Archive Editorial Protocol'],
      headersHi: ['शोध-नोट्स का दावा', 'वर्तमान प्रमाण की स्थिति', 'अभिलेखागार की संपादकीय पद्धति'],
      rowsEn: [
        [
          '11 Bhedas of Ghora Sampradāya (12 names listed)',
          'Primary Sanskrit source not yet identified; internal count discrepancy (11 vs. 12)',
          'Preserve all 12 terms in a clearly labeled "Source Verification Pending" ledger with lexical meanings only'
        ],
        [
          '5 Bhedas of Kāpālika Sampradāya (Indra, Deva, Rudra, Vidyā, Siddha)',
          'Not corroborated as historical Kāpālika subsects in primary inscriptions or monographs',
          'Provide Sanskrit lexical analysis and philological research questions without inventing sect histories'
        ],
        [
          'Linear evolution of Pāśupata → Kāpālika → Aghora as one identical sect',
          'Subject of nuanced academic debate (Lorenzen, Sanderson, Cecil); not a single uniform organization',
          'Compare historical continuities and doctrinal differences across three distinct historical strata'
        ]
      ],
      rowsHi: [
        [
          'घोर सम्प्रदाय के ११ भेद (सूची में १२ नाम)',
          'विश्वसनीय मूल संस्कृत स्रोत अभी अपुष्ट; संख्या में ११ बनाम १२ का अंतर',
          'सभी १२ नामों को "मूल स्रोत की पुष्टि लंबित" टिप्पणी और संभावित शब्दार्थ के साथ सुरक्षित रखना'
        ],
        [
          'कापालिक सम्प्रदाय के ५ भेद (इन्द्र, देव, रुद्र, विद्या, सिद्ध)',
          'स्वतंत्र कापालिक उपशाखाओं के रूप में प्राथमिक शिलालेखों या ग्रन्थों में पुष्टि नहीं',
          'कल्पित इतिहास गढ़े बिना केवल प्रामाणिक शब्दार्थ और शोध-दिशा प्रस्तुत करना'
        ],
        [
          'पाशुपत → कापालिक → अघोर को एक ही संगठन की सीधी वंशावली मानना',
          'गंभीर अकादमिक शोध का विषय; तीनों में समानताओं के साथ महत्त्वपूर्ण ऐतिहासिक भिन्नताएँ हैं',
          'तीनों शैव धाराओं का अलग-अलग ऐतिहासिक स्तरों पर तुलनात्मक और स्रोत-सचेत अध्ययन करना'
        ]
      ]
    }
  ],
  'samaya-ashta-prahar-timekeeping': [
    {
      id: 'table-ashta-prahar-24h-schedule',
      articleSlug: 'samaya-ashta-prahar-timekeeping',
      titleEn: 'Aṣṭa Prahara — Complete 24-Hour (Ahorātra) Cycle (Illustrative 6:00 AM Sunrise Benchmark)',
      titleHi: 'अष्ट प्रहर — २४ घंटे (अहोरात्र) का संपूर्ण चक्र (सुबह ६:०० बजे सूर्योदय के मानक उदाहरण पर आधारित)',
      captionEn:
        'Note: The 3-hour clock intervals below assume an equinox sunrise at 6:00 AM and sunset at 6:00 PM. In traditional solar calculation (dinamāna / rātrimāna), the four day-prahars and four night-prahars expand or contract according to local sunrise, sunset, latitude, and season.',
      captionHi:
        'विशेष टिप्पणी: नीचे दी गई ३-३ घंटे की घड़ी-आधारित तालिका सुबह ६:०० बजे सूर्योदय मानकर बनाई गई है। पारंपरिक सूर्य-आधारित गणना में दिन के ४ प्रहर और रात्रि के ४ प्रहर ऋतु तथा स्थानीय सूर्योदय-सूर्यास्त के अनुसार घटते-बढ़ते हैं।',
      headersEn: ['Prahar Index', 'Sanskrit / Hindi Name', 'Illustrative Clock Window (6 AM Sunrise)', 'Natural & Daily Context', 'Liturgical & Rāga-Samaya Associations'],
      headersHi: ['प्रहर क्रम', 'संस्कृत / हिंदी नाम', 'मानक घड़ी समय (६ बजे सूर्योदय पर)', 'प्राकृतिक एवं दैनिक संदर्भ', 'धार्मिक अनुष्ठान एवं राग-समय संबद्धता'],
      rowsEn: [
        ['1st Prahar (Day 1)', 'Prathama Prahara · Prātaḥkāla (प्रातःकाल)', '6:00 AM – 9:00 AM', 'Dawn-to-morning transition, rising sunlight, initiation of daily work', 'Prātaḥ-sandhyā, Sūrya arghya, japa · Morning ragas: Rāga Bhairava, Ahir Bhairav, Rāmakalī'],
        ['2nd Prahar (Day 2)', 'Dvitīya Prahara · Pūrvāhṇa (पूर्वाह्न)', '9:00 AM – 12:00 PM', 'Forenoon before midday; peak social, scholarly, agricultural & craft activity', 'Scriptural study (svādhyāya), temple morning services · Late-morning ragas (e.g., Āsāvarī, Jaunpurī, Toḍī)'],
        ['3rd Prahar (Day 3)', 'Tṛtīya Prahara · Madhyāhna (मध्याह्न)', '12:00 PM – 3:00 PM', 'Midday solar zenith; midday meal, brief rest & transition of tasks', 'Madhyāhna-sandhyā & midday bhoga/ārati · Afternoon ragas: Bhimpalasi, Sāraṅga, Multānī'],
        ['4th Prahar (Day 4)', 'Caturtha Prahara · Aparāhṇa (अपराह्न)', '3:00 PM – 6:00 PM', 'Late afternoon; softening sunlight, completion of work & return home', 'Preparation for sunset rites & evening gathering · Late-afternoon ragas (e.g., Paṭadīpa, Pūrvī transition)'],
        ['5th Prahar (Night 1)', 'Pañcama Prahara · Sandhyākāla / Pradoṣa (संध्याकाल)', '6:00 PM – 9:00 PM', 'Sunset transition into early night; family meal & evening rest', 'Sāyaṃ-sandhyā, dīpa-prajvalana (lamp lighting), sandhyā ārati · Evening ragas: Rāga Yaman (Kalyāṇa), Bhūpālī'],
        ['6th Prahar (Night 2)', 'Ṣaṣṭha Prahara · Rātri Prathama Bhāga (रात्रि का प्रथम भाग)', '9:00 PM – 12:00 AM', 'Deepening night; cessation of external labor, sacred storytelling & sleep', 'Night liturgical offerings (śayana-ārati), contemplative recitation · Night ragas: Bihāg, Bāgeśrī, खमाज'],
        ['7th Prahar (Night 3)', 'Saptama Prahara · Ardharātri / Niśītha (अर्धरात्रि)', '12:00 AM – 3:00 AM', 'Midnight axis; profound stillness & deep nocturnal silence', 'Sacred midnight festivals (Kṛṣṇa Janmāṣṭamī, Mahāśivarātri niśītha-pūjā) & specific nocturnal sādhanās · Late-night ragas: Darbārī Kānhaḍā, Mālkauṃs'],
        ['8th Prahar (Night 4)', 'Aṣṭama Prahara · Antima Rātri / Dawnward (ब्रह्ममुहूर्त की ओर)', '3:00 AM – 6:00 AM', 'Final quarter of night moving toward pre-dawn light (Uṣā) and sunrise', 'Includes Brahma-muhūrta (~96–48 min before sunrise, not the whole 3h prahar); pre-dawn meditation · Pre-dawn ragas: Lalit, Bhairavī, Sohinī']
      ],
      rowsHi: [
        ['प्रथम प्रहर (दिन १)', 'प्रातःकाल (प्रथम याम)', 'सुबह 6:00 से 9:00', 'रात्रि से दिन में संक्रमण, सूर्योदय, बढ़ती रोशनी एवं दैनिक कार्यों का आरंभ', 'प्रातःसंध्या, सूर्य अर्घ्य, जप · प्रातःकालीन राग: भैरव, अहिर भैरव, रामकली'],
        ['द्वितीय प्रहर (दिन २)', 'पूर्वाह्न (दोपहर से पूर्व)', 'सुबह 9:00 से दोपहर 12:00', 'दोपहर से पहले का सक्रिय समय; अध्ययन, कृषि, शिल्प और प्रशासन', 'स्वाध्याय, पाठ एवं नित्य कर्म · पूर्वाह्न राग (जैसे आसावरी, जौनपुरी, तोड़ी)'],
        ['तृतीय प्रहर (दिन ३)', 'मध्याह्न (दिन का मध्य)', 'दोपहर 12:00 से 3:00', 'सूर्य की उच्च स्थिति; भोजन, विश्राम एवं कार्य-परिवर्तन', 'मध्याह्न-संध्या एवं मध्याह्न पूजा · मध्याह्न राग: भीमपलासी, सारंग, मुलतानी'],
        ['चतुर्थ प्रहर (दिन ४)', 'अपराह्न (दोपहर के बाद)', 'दोपहर 3:00 से शाम 6:00', 'दिन का उत्तरार्ध; ढलती धूप, कार्यों का समापन एवं संध्या की तैयारी', 'सूर्यास्त-पूर्व तैयारी एवं संध्या-उपासना की ओर संक्रमण · अपराह्न राग'],
        ['पंचम प्रहर (रात्रि १)', 'संध्याकाल एवं रात्रि का आरंभ', 'शाम 6:00 से रात 9:00', 'दिन से रात्रि में प्रवेश; गोधूलि, भोजन एवं पारिवारिक समय', 'सायंसंध्या, दीप-प्रज्वलन, संध्या आरती · संध्याकालीन राग: राग यमन (कल्याण), भूपाली'],
        ['षष्ठ प्रहर (रात्रि २)', 'रात्रि का आरंभिक भाग', 'रात 9:00 से 12:00', 'रात्रि का विस्तार; दैनिक गतिविधियों का विराम, कथा-श्रवण एवं विश्राम', 'शयन-आरती, रात्रि जप एवं विश्राम · रात्रि के प्रथम भाग के राग: बिहाग, बागेश्री'],
        ['सप्तम प्रहर (रात्रि ३)', 'अर्धरात्रि (निशीथ काल)', 'रात 12:00 से सुबह 3:00', 'रात्रि का मध्य भाग; गहन निस्तब्धता एवं शांत वातावरण', 'श्रीकृष्ण जन्माष्टमी व महाशिवरात्रि निशीथ-पूजा तथा विशिष्ट रात्रिकालीन साधना · राग: दरबारी कान्हड़ा, मालकौंस'],
        ['अष्टम प्रहर (रात्रि ४)', 'अंतिम रात्रि एवं प्रभात की ओर', 'सुबह 3:00 से 6:00', 'रात्रि का अंतिम चरण, भोर (उषाकाल) एवं सूर्योदय की ओर संक्रमण', 'इसी प्रहर के भीतर सूर्योदय से ~96–48 मिनट पूर्व "ब्रह्ममुहूर्त" आता है (पूरा ३ घंटा ब्रह्ममुहूर्त नहीं है) · राग: ललित, भैरवी']
      ]
    },
    {
      id: 'table-time-units-comparison',
      articleSlug: 'samaya-ashta-prahar-timekeeping',
      titleEn: 'Terminology Comparison: Prahara, Yāma, Muhūrta, Sandhyā, Brahma-Muhūrta & Ahorātra',
      titleHi: 'भारतीय कालगणना की प्रमुख इकाइयों का अंतर: प्रहर, याम, मुहूर्त, संध्या, ब्रह्ममुहूर्त एवं अहोरात्र',
      captionEn:
        'Essential distinctions between traditional Sanskrit time units often conflated in popular writing.',
      captionHi:
        'पारंपरिक भारतीय कालगणना के उन शब्दों का स्पष्ट अंतर जिन्हें प्रायः एक-दूसरे का पर्यायवाची मान लिया जाता है।',
      headersEn: ['Sanskrit / Hindi Term', 'Core Meaning', 'Standard Duration / Definition', 'Key Methodological Distinction'],
      headersHi: ['शब्द (संस्कृत / हिंदी)', 'मूल अर्थ', 'सामान्य अवधि / संदर्भ', 'महत्त्वपूर्ण शास्त्रीय अंतर'],
      rowsEn: [
        ['Prahara / Pahar (प्रहर / पहर)', 'One-eighth division of the day-night cycle', '~3 hours in fixed clock reckoning (4 day + 4 night = 8 prahars)', 'Varies seasonally when calculated from actual local sunrise and sunset'],
        ['Yāma (याम)', 'Traditional watch or period of day/night', 'Often synonymous with Prahara (1/4th of day or night = ~3 hours)', 'Used frequently in Vedic, Epic, and poetic literature (e.g., tri-yāmā for night)'],
        ['Muhūrta (मुहूर्त)', '1/30th division of a 24-hour Ahorātra', '48 minutes in standard reckoning (30 muhūrtas = 24 hours; 2 ghaṭikās = 1 muhūrta)', 'Distinct from a 3-hour Prahara; 1 Prahara contains 3.75 Muhūrtas'],
        ['Sandhyā (संध्या)', 'Juncture / twilight transition; also the liturgical prayer performed at junctions', 'Dawn (prātaḥ), midday (madhyāhna), and dusk (sāyaṃ) junctions', 'A brief transitional threshold—does not last for an entire 3-hour Prahara'],
        ['Brahma-Muhūrta (ब्रह्ममुहूर्त)', 'The auspicious pre-dawn Muhūrta dedicated to wisdom/study', 'Traditionally the penultimate (14th of 15) nocturnal muhūrta: ~96 to 48 minutes before sunrise', 'Occurs inside the 8th Prahar, but must NOT be equated with the entire 3-hour 8th Prahar'],
        ['Ahorātra (अहोरात्र)', 'One complete solar day and night (Ahan + Rātri)', '24 hours (8 Prahars = 30 Muhūrtas = 60 Ghaṭikās)', 'In Hindu panchāṅga, a civil ahorātra traditionally begins at local sunrise']
      ],
      rowsHi: [
        ['पहर / प्रहर (Prahara)', 'दिन-रात का आठवाँ भाग', 'मानक गणना में लगभग ३ घंटे (दिन के ४ + रात के ४ = ८ प्रहर)', 'सूर्योदय-सूर्यास्त आधारित गणना में ऋतु के अनुसार इसकी अवधि बदलती है'],
        ['याम (Yāma)', 'समय का पारंपरिक खंड या पहरा', 'अनेक संदर्भों में प्रहर के समान (~३ घंटे)', 'काव्य और शास्त्रों में रात्रि के प्रहरों के लिए "याम" या "त्रियामा" शब्द बहुधा आता है'],
        ['मुहूर्त (Muhūrta)', 'अहोरात्र का तीसवाँ (1/30) भाग', 'मानक गणना में ४८ मिनट (३० मुहूर्त = २४ घंटे; २ घटिका = १ मुहूर्त)', 'यह ३ घंटे के प्रहर से भिन्न है; एक प्रहर में ३.७५ (पौने चार) मुहूर्त होते हैं'],
        ['संध्या (Sandhyā)', 'दिन और रात का संधिकाल; संधिकाल की उपासना', 'प्रातः, मध्याह्न और सायंकाल के तीन संधिकाल', 'संध्या एक संक्षिप्त संक्रमण-काल है; यह पूरे तीन घंटे के प्रहर के बराबर नहीं होती'],
        ['ब्रह्ममुहूर्त (Brahma-muhūrta)', 'सूर्योदय से पूर्व का विशेष प्रातःकालीन मुहूर्त', 'प्रचलित गणना में सूर्योदय से लगभग ९६ से ४८ मिनट पहले (४८ मिनट की अवधि)', 'यह अष्टम प्रहर के भीतर आता है, किन्तु पूरे ३ घंटे के अष्टम प्रहर को ब्रह्ममुहूर्त मानना अशुद्ध है'],
        ['अहोरात्र (Ahorātra)', 'एक पूरा दिन और रात (अहन् + रात्रि)', '२४ घंटे (८ प्रहर = ३० मुहूर्त = ६० घटिका)', 'भारतीय पंचांग परंपरा में अहोरात्र की गणना सूर्योदय से अगले सूर्योदय तक की जाती है']
      ]
    }
  ]
};

// ============================================================================
// DEEP MONOGRAPH ARTICLES FOR JAYA-VIJAYA, AGHORA, GHORA 11/12 BHEDAS,
// KAPALIKA 5 BHEDAS, BHAIRAVAGANA, AND SAMAYA & ASHTA PRAHAR
// ============================================================================
export const DEEP_SACRED_SEAL_ARTICLES: ResearchArticle[] = [
  {
    slug: 'jaya-vijaya-vaikuntha-dvarapalas',
    categorySlug: 'cags-field-archive',
    code: 'VSN-01',
    titleEn: 'Jaya and Vijaya (जय–विजय): The Divine Gatekeepers of Vaikuṇṭha & Their Three Earthly Births',
    titleHi: 'जय और विजय (जय–विजय): वैकुण्ठ के दिव्य द्वारपाल, सनकादि मुनियों का शाप एवं तीन जन्मों की कथा',
    subtitleEn: 'Vaiṣṇava Dvārapāla Theology, the Curse of the Four Kumāras, the Three Antagonist Incarnations (Hiraṇyākṣa–Hiraṇyakaśipu, Rāvaṇa–Kumbhakarṇa, Śiśupāla–Dantavakra) & Distinction from Bhairavagaṇa',
    subtitleHi: 'वैष्णव द्वारपाल तत्त्वज्ञान, चार कुमारों का शाप, तीन जन्म (हिरण्याक्ष–हिरण्यकशिपु, रावण–कुम्भकर्ण, शिशुपाल–दन्तवक्र) एवं भैरवगण से तात्त्विक भेद',
    sanskritEpigraph: '॥ जयश्च विजयश्चैव द्वारपालौ हरेः स्मृतौ। सनकादिमुनिशापेन जातावसुरयोनिषु ॥',
    epigraphTranslationEn: '"Jaya and Vijaya are remembered as the two divine gatekeepers of Hari (Viṣṇu); through the curse of Sanaka and the Kumāra sages, they descended into ثلاث (three) earthly births as adversaries of the Lord."',
    epigraphTranslationHi: '"जय और विजय भगवान् श्रीहरि (विष्णु) के दिव्य द्वारपाल हैं, जो सनकादि ऋषियों के शाप के कारण तीन बार पृथ्वी पर असुर योनि में अवतीर्ण हुए और अंततः भगवान् के हाथों मुक्त होकर पुनः वैकुण्ठ लौटे।"',
    evidenceBadgeEn: 'PRIMARY VAIṢṆAVA SOURCE · ŚRĪMAD-BHĀGAVATAM (CANTO 3, 7 & 10)',
    evidenceBadgeHi: 'मूल वैष्णव शास्त्र स्रोत · श्रीमद्भागवत महापुराण (स्कन्ध ३, ७ एवं १०)',
    accentColor: '#38BDF8',
    summaryEn:
      'Jaya (जय, "Victory") and Vijaya (विजय, "Triumph") are the celebrated gatekeepers (dvārapālas) and eternal associates (pārṣadas) of Viṣṇu’s divine abode, Vaikuṇṭha. Recorded in the Śrīmad-Bhāgavatam (Canto 3, Chapters 15–16; Canto 7, Chapters 1 & 10; Canto 10, Chapter 74), their narrative explores the ethics of divine service, the consequences of pride before the four Kumāra sages, and the theological mystery whereby three successive births as cosmic antagonists link the Varāha, Narasiṃha, Rāma, and Kṛṣṇa avatāras into a single sacred arc. Crucially, Jaya and Vijaya belong to Vaiṣṇava theology, not to the Śaiva-Śākta Bhairavagaṇa.',
    summaryHi:
      'जय (विजय/उत्कर्ष) और विजय (सफलता/बाधाओं पर विजय) वैष्णव परंपरा में भगवान् विष्णु के दिव्य धाम वैकुण्ठ के प्रसिद्ध द्वारपाल और नित्य पार्षद हैं। श्रीमद्भागवत महापुराण (स्कन्ध ३ अध्याय १५–१६; स्कन्ध ७ अध्याय १ व १०; स्कन्ध १० अध्याय ७४) में वर्णित उनकी कथा भगवद्-सेवा में अहंकार के परिणाम, चार सनकादि कुमारों के शाप और वराह, नृसिंह, राम तथा कृष्ण अवतारों को एक सूत्र में जोड़ने वाले तीन जन्मों का गहन दार्शनिक रहस्य उद्घाटित करती है। इस शोध अभिलेखागार के लिए यह स्पष्ट भेद आवश्यक है कि जय और विजय वैष्णव धर्मशास्त्र के अंग हैं, शैव भैरवगण के सदस्य नहीं।',
    sections: [
      {
        headingEn: '1. Names, Etymology & Role as Dvārapālas of Vaikuṇṭha',
        headingHi: '1. नाम, शब्दार्थ एवं वैकुण्ठ के द्वारपाल (पार्षद) के रूप में भूमिका',
        bodyEn:
          'In Sanskrit, Jaya (जय, from root ji-) signifies victory, triumph, or spiritual conquest, while Vijaya (विजय, with the intensifier prefix vi-) signifies complete victory, supreme success, or overcoming obstacles. Together, "Victory and Triumph" stand as the consecrated dvārapālas (threshold guardians) and pārṣadas (personal attendants wearing the same four-armed śyāmasundara form and weapons as Viṣṇu) at the seventh portal of Vaikuṇṭha. In Pāñcarātra and Vaikhānasa temple architecture, images of Jaya and Vijaya flank the entrance to the inner sanctum (garbhagṛha) of Viṣṇu temples.',
        bodyHi:
          'संस्कृत व्याकरण में "जय" का अर्थ है विजय, उत्कर्ष या जीतना, और "विजय" (वि + जय) का अर्थ है विशेष विजय, पूर्ण सफलता अथवा बाधाओं का अतिक्रमण। दोनों नाम मिलकर "विजय और उत्कर्ष" का प्रतीक हैं। वैष्णव आगम (पाञ्चरात्र और वैखानस) तथा पुराणों में उन्हें भगवान् विष्णु का "पार्षद" (सहचर) और "द्वारपाल" कहा गया है, जो वैकुण्ठ के सप्तम द्वार पर चतुर्भुज रूप में शंख, चक्र, गदा और पद्म धारण कर पहरा देते हैं।'
      },
      {
        headingEn: '2. Critical Archive Distinction: Are Jaya and Vijaya Part of Bhairavagaṇa? No.',
        headingHi: '2. महत्त्वपूर्ण शोध-भेद: क्या जय और विजय भैरवगण के अंग हैं? (नहीं)',
        bodyEn:
          'A vital methodological distinction for this research archive is that Jaya and Vijaya belong strictly to Vaiṣṇava theology and temple iconography—they are NOT members of the Śaiva-Śākta Bhairavagaṇa. While comparative religion scholars may compare Vaiṣṇava dvārapālas (such as Jaya–Vijaya or Caṇḍa–Pracaṇḍa) with Śaiva threshold guardians (such as Nandī–Mahākāla or the Kṣetrapāla Bhairavas) at a structural level, merging Jaya and Vijaya into Bhairava’s retinue without a specific primary source would conflate two distinct scriptural and liturgical systems. Refer to the comparative table below for the exact parameters.',
        bodyHi:
          'शोध की प्रामाणिकता के लिए यह स्पष्ट रखना अनिवार्य है कि जय और विजय विशुद्ध रूप से वैष्णव धर्मशास्त्र और विष्णु के परिकर से संबंधित हैं—वे स्वतः भैरवगण के सदस्य नहीं हैं। यद्यपि द्वारपाल-परंपरा के तुलनात्मक अध्ययन में वैष्णव द्वारपालों (जय–विजय) की तुलना शैव द्वारपालों (नन्दी–महाकाल या क्षेत्रपाल भैरव) से की जा सकती है, किन्तु बिना किसी विशिष्ट शास्त्रीय प्रमाण के उन्हें भैरवगण में मिलाना ऐतिहासिक और शास्त्रीय रूप से अशुद्ध होगा।'
      },
      {
        headingEn: '3. The Four Stages of the Curse in Śrīmad-Bhāgavatam (Canto 3, Chapters 15–16)',
        headingHi: '3. शाप की कथा के चार चरण (श्रीमद्भागवत महापुराण, स्कन्ध ३, अध्याय १५–१६)',
        bodyEn:
          'The principal scriptural account appears in the Śrīmad-Bhāgavatam (3.15–16) narrated by Maitreya to Vidura across four distinct stages: (Stage 1 — Arrival of the Four Kumāras): The mind-born sons of Brahmā—Sanaka, Sanandana, Sanātana, and Sanatkumāra—arrive at Vaikuṇṭha. Though ancient masters of brahma-jñāna, they appear as five-year-old naked children. Passing effortlessly through six gates, they reach the seventh portal. (Stage 2 — The Gatekeepers Stop Them): Seeing the sages’ unconventional appearance, Jaya and Vijaya block their path with their staffs. (Stage 3 — The Curse): Offended that discriminatory pride and duality (bheda-buddhi) had entered the non-dual realm of Vaikuṇṭha, the Kumāras pronounce a curse that the two gatekeepers must fall from Vaikuṇṭha into earthly wombs dominated by passion and ignorance (rajas and tamas). Jaya and Vijaya immediately fall to the sages’ feet in remorse. (Stage 4 — Viṣṇu Appears): Lord Viṣṇu himself walks to the gate with Lakṣmī, bows before the brāhmaṇa sages, and declares that a master bears moral responsibility for the offense of his own servants. Confirming the sages’ words, Viṣṇu ordains that Jaya and Vijaya will return to Vaikuṇṭha after three births of intense adversarial concentration (saṃrambha-yoga).',
        bodyHi:
          'श्रीमद्भागवत के तृतीय स्कन्ध (अध्याय १५–१६) में यह आख्यान चार चरणों में वर्णित है: (चरण १ — चार कुमारों का आगमन): ब्रह्माजी के मानस-पुत्र सनक, सनन्दन, सनातन और सनत्कुमार वैकुण्ठ पहुँचते हैं। वे परम ज्ञानी होने पर भी पाँच वर्ष के दिगम्बर बालकों जैसे दिखते हैं और छह द्वार पार कर सातवें द्वार पर पहुँचते हैं। (चरण २ — द्वारपालों द्वारा रोका जाना): जय और विजय अपनी वेत्र-यष्टि (छड़ी) से उन्हें रोक देते हैं। (चरण ३ — शाप): वैकुण्ठ जैसे निर्द्वन्द्व धाम में भेद-बुद्धि और अहंकार देखकर कुमार रुष्ट होते हैं और उन्हें भौतिक संसार की आसुरी योनियों में जन्म लेने का शाप देते हैं। जय और विजय तुरंत अपनी भूल स्वीकार कर क्षमा माँगते हैं। (चरण ४ — भगवान् विष्णु का प्राकट्य): भगवान् विष्णु स्वयं लक्ष्मीजी के साथ द्वार पर पधारते हैं और संतों का सम्मान करते हुए कहते हैं कि सेवक के अपराध का उत्तरदायित्व स्वामी का भी होता है। भगवान् आश्वासन देते हैं कि तीन जन्मों में तीव्र वैर-भाव (संरम्भ-योग) द्वारा मुझमें मन लगाने से ये शीघ्र ही पुनः मेरे पार्षद पद को प्राप्त करेंगे।'
      },
      {
        headingEn: '4. The Three Earthly Births: Uniting Four Major Avatāra Narratives',
        headingHi: '4. तीन युगों में तीन जन्म: चार प्रमुख विष्णु-अवतारों का एकीकरण',
        bodyEn:
          'According to the Bhāgavata Purāṇa (7.1.35–47 & 7.10), Jaya and Vijaya undergo three successive incarnations: (1) First Birth in Satya Yuga — Hiraṇyākṣa and Hiraṇyakaśipu, sons of Diti and Kaśyapa. Hiraṇyākṣa abducts the Earth into the cosmic ocean and is slain by Viṣṇu’s Varāha (Boar) Avatāra; Hiraṇyakaśipu persecutes his devoted son Prahlāda and is slain at twilight on the threshold by the Narasiṃha (Man-Lion) Avatāra. (2) Second Birth in Tretā Yuga — Rāvaṇa and Kumbhakarṇa, the formidable rākṣasa brothers of Laṅkā, who are slain in battle by Śrī Rāma following the abduction of Sītā. (3) Third Birth in Dvāpara Yuga — Śiśupāla (King of Cedi) and Dantavakra (King of Karūṣa). At Yudhiṣṭhira’s Rājasūya sacrifice (Bhāgavatam 10.74), after Śiśupāla hurls 100 insults, Śrī Kṛṣṇa severs his head with the Sudarśana Cakra, and a visible effulgence merges directly into Kṛṣṇa’s body before all assembled kings; Dantavakra is subsequently slain by Kṛṣṇa’s Kaumodakī mace, completing the three-birth cycle.',
        bodyHi:
          'भागवत पुराण के अनुसार जय और विजय तीन क्रमिक जन्म लेते हैं: (१) प्रथम जन्म (सत्ययुग) — दिति और कश्यप के पुत्र हिरण्याक्ष और हिरण्यकशिपु के रूप में। हिरण्याक्ष का उद्धार भगवान् वराह द्वारा और भक्त प्रह्लाद की रक्षा करते हुए हिरण्यकशिपु का उद्धार भगवान् नृसिंह द्वारा होता है। (२) द्वितीय जन्म (त्रेतायुग) — विश्रवा के पुत्र रावण और कुम्भकर्ण के रूप में, जिनका वध और उद्धार सीता-हरण के पश्चात भगवान् श्रीराम के हाथों होता है। (३) तृतीय जन्म (द्वापरयुग) — शिशुपाल और दन्तवक्र के रूप में। युधिष्ठिर के राजसूय यज्ञ (भागवत १०.७४) में १०० अपराध पूर्ण होने पर श्रीकृष्ण सुदर्शन चक्र से शिशुपाल का वध करते हैं और उसके शरीर से निकला तेज सबके देखते-देखते भगवान् श्रीकृष्ण में समा जाता है; तत्पश्चात् दन्तवक्र के उद्धार के साथ तीन जन्मों की अवधि पूर्ण होती है और दोनों पुनः वैकुण्ठ के द्वारपाल बनते हैं।'
      },
      {
        headingEn: '5. Theological Meaning & Primary Scriptural Sources',
        headingHi: '5. दार्शनिक निहितार्थ एवं प्राथमिक शास्त्रीय स्रोत',
        bodyEn:
          'In Vaiṣṇava philosophical exegesis (such as Nārada’s explanation to Yudhiṣṭhira in Śrīmad-Bhāgavatam 7.1), five core principles emerge: (1) Proximity to divine office never excuses arrogance toward wisdom-bearing sages; (2) Even a painful fall operates within overarching divine providence (līlā); (3) Intense adversarial absorption (saṃrambha-yoga)—where Hiraṇyakaśipu, Rāvaṇa, and Śiśupāla could not stop thinking of Viṣṇu even for a moment out of fear and enmity—illustrates the power of unbroken mental fixation on the Divine (this is a specific theological explanation of how already-liberated pārṣadas returned quickly, not a general prescription to cultivate hatred); (4) The Lord corrects yet never abandons his servants; and (5) The narrative weaves Varāha, Narasiṃha, Rāma, and Kṛṣṇa into a unified cosmological tapestry.',
        bodyHi:
          'श्रीमद्भागवत के सप्तम स्कन्ध (अध्याय १ में नारद-युधिष्ठिर संवाद) के अनुसार इस कथा के पाँच प्रमुख दार्शनिक संदेश हैं: (१) भगवान् की निकट सेवा में होने पर भी अहंकार या संतों का अपमान क्षम्य नहीं है; (२) शाप और पतन भी भगवद्-लीला के बृहत्तर विधान का अंग बन सकते हैं; (३) "संरम्भ-योग" (तीव्र भय या वैर के कारण भी निरंतर भगवान् का ही चिंतन करना) द्वारा तीन जन्मों में शीघ्र वापसी हुई—यद्यपि यह भगवान् के नित्य पार्षदों के प्रसंग की दार्शनिक व्याख्या है, सामान्य साधकों के लिए द्वेष करने का उपदेश नहीं; (४) भगवान् अपने सेवकों का सुधार भी करते हैं और उनकी रक्षा भी; तथा (५) यह आख्यान चार युगों के प्रमुख अवतारों को एक ही सूत्र में पिरोता है।'
      }
    ],
    keyFindingsEn: [
      'Jaya and Vijaya are Vaiṣṇava dvārapālas and pārṣadas of Vaikuṇṭha—not members of the Śaiva Bhairavagaṇa.',
      'Primary source: Śrīmad-Bhāgavatam Canto 3 Ch. 15–16 (the curse of the 4 Kumāras), Canto 7 Ch. 1 & 10 (theological analysis of the 3 births), and Canto 10 Ch. 74 (Śiśupāla’s liberation at the Rājasūya).',
      'Three births link four Avatāras: (1) Hiraṇyākṣa & Hiraṇyakaśipu [Varāha & Narasiṃha], (2) Rāvaṇa & Kumbhakarṇa [Rāma], and (3) Śiśupāla & Dantavakra [Kṛṣṇa].'
    ],
    keyFindingsHi: [
      'जय और विजय वैष्णव परंपरा में वैकुण्ठ के द्वारपाल और पार्षद हैं—वे शैव भैरवगण के अंग नहीं हैं।',
      'मूल स्रोत: श्रीमद्भागवत महापुराण स्कन्ध ३ अध्याय १५–१६ (कुमारों का शाप), स्कन्ध ७ अध्याय १ व १० (तीन जन्मों की दार्शनिक व्याख्या), तथा स्कन्ध १० अध्याय ७४ (राजसूय यज्ञ में शिशुपाल का उद्धार)।',
      'तीन जन्म चार प्रमुख अवतारों को जोड़ते हैं: (१) हिरण्याक्ष–हिरण्यकशिपु [वराह व नृसिंह], (२) रावण–कुम्भकर्ण [श्रीराम], और (३) शिशुपाल–दन्तवक्र [श्रीकृष्ण]।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Names', labelHi: 'संस्कृत नाम एवं अर्थ', valueEn: 'Jaya (जय · Victory) & Vijaya (विजय · Triumph)', valueHi: 'जय (विजय) एवं विजय (पूर्ण उत्कर्ष)' },
      { labelEn: 'Tradition & Role', labelHi: 'परम्परा एवं पद', valueEn: 'Vaiṣṇava Theology · Dvārapālas & Pārṣadas of Vaikuṇṭha', valueHi: 'वैष्णव धर्मशास्त्र · वैकुण्ठ के द्वारपाल एवं पार्षद' },
      { labelEn: 'Three Incarnation Pairs', labelHi: 'तीन जन्मों के युग्म', valueEn: 'Hiraṇyākṣa–Hiraṇyakaśipu · Rāvaṇa–Kumbhakarṇa · Śiśupāla–Dantavakra', valueHi: 'हिरण्याक्ष–हिरण्यकशिपु · रावण–कुम्भकर्ण · शिशुपाल–दन्तवक्र' },
      { labelEn: 'Primary Scriptural Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Śrīmad-Bhāgavatam 3.15–16, 7.1, 7.10 & 10.74 · Viṣṇu Purāṇa · Padma Purāṇa', valueHi: 'श्रीमद्भागवत ३.१५–१६, ७.१, ७.१० एवं १०.७४ · विष्णु पुराण · पद्म पुराण' }
    ],
    primarySourcesEn: 'Śrīmad-Bhāgavatam (Canto 3 Ch. 15–16; Canto 7 Ch. 1 & 10; Canto 10 Ch. 74 & 78) · Viṣṇu Purāṇa · Vālmīki Rāmāyaṇa · Mahābhārata (Sabhā Parvan)',
    primarySourcesHi: 'श्रीमद्भागवत महापुराण (स्कन्ध ३ अध्याय १५–१६; स्कन्ध ७ अध्याय १ व १०; स्कन्ध १० अध्याय ७४ व ७८) · विष्णु पुराण · वाल्मीकि रामायण · महाभारत (सभापर्व)',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'aghora-sampradaya-history-theology',
    categorySlug: 'ashta-bhairava',
    code: 'SHA-01',
    titleEn: 'Aghora Sampradāya (अघोर सम्प्रदाय): Etymology, Three Historical Strata & Modern Lineages',
    titleHi: 'अघोर सम्प्रदाय (अघोर परम्परा): शब्दार्थ, ऐतिहासिक विकास के तीन स्तर एवं बाबा कीनाराम परम्परा',
    subtitleEn: 'Distinguishing Aghora, Aghorī, Early Śākta-Śaiva Goddess Aghorī (Brahmayāmala / Siddhayogeśvarīmata), Pāśupata, Kāpālika & Modern Kāśī Aghora Lineages',
    subtitleHi: 'अघोर, अघोरी, प्रारंभिक तांत्रिक अघोरी देवी (ब्रह्मयामल/सिद्धयोगेश्वरीमत), पाशुपत, कापालिक एवं काशी की क्रीं-कुण्ड बाबा कीनाराम परंपरा का ऐतिहासिक विश्लेषण',
    sanskritEpigraph: '॥ अघोरेभ्योऽथ घोरेभ्यो घोरघोरतरेभ्यः। सर्वेभ्यः सर्वशर्वेभ्यो नमस्ते अस्तु रुद्ररूपेभ्यः ॥',
    epigraphTranslationEn: '"Salutations to the non-terrifying (Aghora) forms, to the fierce (Ghora) forms, and to the intensely formidable (Ghoratara) forms—to all manifestations of Rudra-Śarva." (Taittirīya Āraṇyaka 10.45 / Pañcabrahma Mantra)',
    epigraphTranslationHi: '"अघोर (अभय/सौम्य) रूपों को, घोर (उग्र) रूपों को और घोरतर (अति-उग्र) रूपों को—भगवान् रुद्र-शर्व के समस्त स्वरूपों को हमारा नमन हो।" (तैत्तिरीय आरण्यक १०.४५)',
    evidenceBadgeEn: 'HISTORICAL & PHILOLOGICAL STUDY · ŚAIVA-ŚĀKTA ARCHIVE',
    evidenceBadgeHi: 'ऐतिहासिक एवं भाषावैज्ञानिक अध्ययन · शैव-शाक्त अभिलेखागार',
    accentColor: '#F59E0B',
    summaryEn:
      'Provides a rigorous philological and historical examination of the Aghora tradition. Etymologically meaning "non-terrifying" or "fearless" (a + ghora), Aghora in Tantric contexts signifies a non-dual vision that transcends conventional social polarities of pure and impure (śuddha-aśuddha). This monograph distinguishes three historical strata—ancient Pāśupata Śaivism, medieval Kāpālika asceticism, and early-modern/contemporary North Indian Aghora lineages (notably Bābā Kīnārām and Aghoreśvara Bhagavān Rām at Krīṃ Kuṇḍa in Varanasi)—without collapsing them into a single uniform sect.',
    summaryHi:
      'अघोर परंपरा का प्रामाणिक भाषावैज्ञानिक और ऐतिहासिक अध्ययन प्रस्तुत करता है। व्युत्पत्ति की दृष्टि से "अघोर" (अ + घोर) का अर्थ है अभय, सहज या भयावहता से परे; तांत्रिक दृष्टि में यह शुद्ध-अशुद्ध और पवित्र-अपवित्र की सामाजिक द्वैत-धारणाओं से ऊपर उठकर समत्व देखने की अवस्था है। यह लेख पाशुपत शैव धर्म, मध्यकालीन कापालिक परंपरा और काशी की आधुनिक अघोर परंपरा (बाबा कीनाराम एवं अघोरेश्वर भगवान राम, क्रीं कुण्ड) के तीन अलग-अलग ऐतिहासिक स्तरों को स्पष्ट करता है।',
    sections: [
      {
        headingEn: '1. Etymology & Semantic Distinctions: Aghora, Aghorī, Aghora Sampradāya & Early Goddess Aghorī',
        headingHi: '1. अघोर शब्द का अर्थ एवं चार सूक्ष्म भेद: अघोर, अघोरी, अघोर सम्प्रदाय और तांत्रिक अघोरी देवी',
        bodyEn:
          'To document the Aghora tradition accurately, four related terms must be distinguished: (1) Aghora (अघोर = a + ghora): Literally "not terrible" or "fearless." In Vedic-Śaiva liturgy (Taittirīya Āraṇyaka 10.45), Aghora is one of the five faces (Pañcabrahma) of Sadāśiva facing South, governing absorption, purification, and fearless consciousness. (2) Aghorī (अघोरी, masculine stem aghorin): A practitioner or ascetic who follows the Aghora path of radical non-duality (advaita) across cremation grounds and everyday life. (3) Aghora Sampradāya (अघोर सम्प्रदाय): The institutional and initiatory lineages—historical and contemporary—associated with Aghora sādhanā. (4) Goddess Aghorī in Early Śaiva-Śākta Tantras: As demonstrated by scholar Judit Törzsök in her studies of the Brahmayāmala and Siddhayogeśvarīmata (6th–8th century CE), "Aghorī" also appears in early Vidyāpīṭha Tantras as a supreme feminine mantra-deity paired with Bhairava and surrounded by the triad of Aghorā, Ghorā, and Ghoratarā Yoginīs—proving that the religious history of the term Aghora extends far deeper than modern ascetic stereotypes.',
        bodyHi:
          'शोध की स्पष्टता के लिए चार संबंधित पदों का अंतर समझना आवश्यक है: (१) अघोर (अ + घोर): शाब्दिक अर्थ—जो भयानक न हो, अर्थात् अभय या सहज। शैव दर्शन में सदाशिव के पाँच मुखों (पञ्चब्रह्म) में दक्षिण मुख का नाम "अघोर" है। (२) अघोरी: अघोर मार्ग का अनुसरण करने वाला साधक या संन्यासी, जो शुद्ध-अशुद्ध और ग्राह्य-त्याज्य के द्वैत से परे समदृष्टि की साधना करता है। (३) अघोर सम्प्रदाय: ऐतिहासिक और आधुनिक अघोर गुरु-परंपराओं एवं आश्रमों का संगठनात्मक रूप। (४) प्रारंभिक शाक्त-शैव तन्त्रों में "अघोरी देवी": विदुषी Judit Törzsök ने ब्रह्मयामल और सिद्धयोगेश्वरीमत (६ठी–८वीं शताब्दी) के अपने अध्ययन में दिखाया है कि प्रारंभिक तन्त्रों में अघोरी, घोरा और घोरतरा देवियों के त्रिक का अत्यंत महत्त्वपूर्ण स्थान था।'
      },
      {
        headingEn: '2. Three Historical Strata: Pāśupata, Medieval Kāpālika & Modern North Indian Aghora',
        headingHi: '2. ऐतिहासिक विकास के तीन स्तर: पाशुपत, मध्यकालीन कापालिक एवं आधुनिक काशी अघोर परम्परा',
        bodyEn:
          'Academic historians of Śaivism (David N. Lorenzen, Alexis Sanderson, Elizabeth A. Cecil, Ron Barrett) emphasize that three historical layers must be analyzed separately rather than flattened into a single unbroken organization: (Stratum A — Ancient Pāśupata Śaivism): Associated with Lakulīśa (Nakulīśa, c. 2nd century CE in Kāyāvarohaṇa, Gujarat) and the Pāśupatasūtra. Pāśupata ascetics practiced bhasma-snāna (bathing in ashes) and stage-based antinomian courting of dishonor (avamāna) to dissolve ego, but their doctrinal metaphysics remained distinct from later non-dual Kaula-Tantric systems. (Stratum B — Medieval Kāpālika Tradition): Flourishing between the 7th and 14th centuries CE, Kāpālika ascetics carried the cranial alms-bowl (kapāla), venerated fierce Bhairava and Cāmuṇḍā/Mahākālī, and expounded Somāsiddhānta. (Stratum C — Early-Modern & Contemporary Aghora Lineages): Centered in North India—above all at Krīṃ Kuṇḍa in Varanasi—the living Aghora Sampradāya traces its institutional crystallization to Bābā Kīnārām (traditionally 17th–18th century CE, author of Vivekasāra, Rāmagītā, and Unmunīrām), who synthesized non-dual Śaiva-Śākta sādhanā with Nātha-Siddha and Nirguṇa Sant currents. In the 20th century, Aghoreśvara Bhagavān Rām (1937–1992) channeled the Aghora vision of non-discrimination into social reform, establishing the Sri Sarveshwari Samooh and treating thousands of leprosy patients shunned by society.',
        bodyHi:
          'अघोर परंपरा के ऐतिहासिक विकास को समझने के लिए तीन स्तरों को अलग-अलग देखना आवश्यक है: (A. प्राचीन पाशुपत शैव परंपरा): इसके प्रवर्तक लकुलीश (नकुलीश) माने जाते हैं। पाशुपत सूत्र और कौण्डिन्य के पञ्चार्थभाष्य में भस्म-स्नान और अहंकार-नाश की साधना मिलती है, किंतु पाशुपत, कापालिक और अघोर को बिना भेद के एक ही संगठन मानना ऐतिहासिक अति-सरलीकरण होगा। (B. मध्यकालीन कापालिक परंपरा): ७वीं से १४वीं शताब्दी के मध्य कापालिक साधक कपाल-पात्र धारण करने, श्मशान-साधना और भैरव-चामुण्डा उपासना के लिए प्रसिद्ध रहे। (C. ऐतिहासिक एवं आधुनिक अघोर परंपराएँ): उत्तर भारत, विशेषतः वाराणसी के "क्रीं कुण्ड" से जुड़ी बाबा कीनाराम (ग्रन्थ: विवेकसार, रामगीता) और २०वीं शताब्दी के अघोरेश्वर भगवान राम की परंपरा। भगवान राम ने अघोर के "निर्भेद समदर्शिता" सिद्धांत को समाज-सेवा और कुष्ठ-रोगियों की चिकित्सा से जोड़ा।'
      },
      {
        headingEn: '3. The Six Points of the Aghora–Kāpālika–Ghora Dossier & Its Two Sub-Parts',
        headingHi: '3. अघोर सम्प्रदाय के ६ मुख्य बिंदु एवं इसके २ उप-भाग (घोर ११/१२ भेद व कापालिक ५ भेद)',
        bodyEn:
          'In the research notes for Aghora Sampradāya, six interconnected points are organized under one umbrella, with Points 5 and 6 forming the two specialized sub-parts of this study: (1) Origin / Background (Pravartaka/Mūla): The historical emergence of fierce Śaiva asceticism out of the Pāśupata milieu associated with Lakulīśa (Nakulīśa), while noting that Lakulīśa’s historical vs. mythic status and the exact institutional continuity require careful scholarly distinction. (2) Guru Lineage (Guru Paramparā): The 12 Kāpālika gurus recorded in the Sarvatantra and Śābara compendia (Ādinātha, Anādi, Kāla, Amitābha/Atikāla, Karāla, Vikarāla, Mahākāla, Kālabhairavanātha, Baṭuka, Bhūtanātha, Vīranātha, and Śrīkaṇṭha). (3) Presiding Deities (Iṣṭadeva): Fierce Bhairava alongside Mahākālī, Cāmuṇḍā, and Tripurasundarī. (4) Core Doctrine (Mukhya Siddhānta): Somāsiddhānta and ritual contemplation utilizing the cranial bowl (kapāla) and non-dual equanimity. (5) Sub-Part I — Ghora Sampradāya (11/12 Bhedas): Detailed philological study of the 12 listed terms (Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora, Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora, and Siddha). (6) Sub-Part II — Kāpālika Sampradāya (5 Bhedas): Detailed study of Somāsiddhānta and the 5 reported subdivisions (Indra, Deva, Rudra, Vidyā, and Siddha). Use the two engraved Sub-Part Circular Seals above to open each sub-part monograph in full.',
        bodyHi:
          'अघोर सम्प्रदाय के शोध-नोट्स में ६ मुख्य बिंदु एक साथ जुड़े हैं, जिनमें बिंदु ५ और ६ इसके दो प्रमुख उप-भाग (Sub-Parts) हैं: (१. प्रवर्तक/मूल): पाशुपत मत (लकुलीश/नकुलीश) की पृष्ठभूमि से उग्र शैव साधना का विकास (लकुलीश की ऐतिहासिकता और सीधी वंशावली पर अकादमिक सावधानी सहित)। (२. गुरु परंपरा): सर्वतन्त्र और अन्य तांत्रिक ग्रन्थों में उल्लिखित १२ गुरु—आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल, महाकाल, कालभैरवनाथ, बटुक, भूतनाथ, वीरनाथ और श्रीकण्ठ। (३. इष्टदेव): भैरव (उग्र शिव रूप) तथा महाकाली, चामुण्डा और त्रिपुरसुन्दरी। (४. मुख्य सिद्धांत): सोमसिद्धान्त दर्शन, कपाल-पात्र का प्रतीक और शुद्ध-अशुद्ध से परे अद्वैत समदृष्टि। (५. उप-भाग I — घोर सम्प्रदाय के ११/१२ भेद): रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर, घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर और सिद्ध का विस्तृत विश्लेषण। (६. उप-भाग II — कापालिक सम्प्रदाय के ५ भेद): इन्द्र, देव, रुद्र, विद्या और सिद्ध का विस्तृत अध्ययन। ऊपर दिए गए दोनों उप-भागों की वृत्ताकार मुद्राओं पर क्लिक करके प्रत्येक उप-भाग का पूर्ण स्वतंत्र पृष्ठ भी खोला जा सकता है।'
      },
      {
        headingEn: '4. Methodological Caution: Historical Evidence vs. Sensationalized Stereotypes',
        headingHi: '4. ऐतिहासिक सावधानी: प्रामाणिक साक्ष्य बनाम लोक-प्रचलित अतिरंजना',
        bodyEn:
          'Popular media frequently portrays all Aghorīs through sensationalized cremation-ground tropes. In rigorous ethnographic and textual scholarship, Aghora philosophy is grounded in the recognition that the entire phenomenal universe is pervaded by Śiva-Śakti, rendering conventional caste and ritual pollution boundaries ultimate illusions. At the same time, modern Aghora communities exhibit diverse lineages, rules, and contemplative practices; no single transgressive practice is universally mandatory across all Aghora practitioners.',
        bodyHi:
          'लोक-प्रचलित माध्यमों में प्रायः अघोर साधकों का एकांगी और सनसनीखेज चित्रण किया जाता है। वास्तविक अकादमिक और ग्रंथीय अध्ययन में अघोर दर्शन का मूल आधार "सर्वं खल्विदं ब्रह्म / शिवमय जगत्" की अद्वैत दृष्टि है, जो जातिगत और आनुष्ठानिक छुआछूत से ऊपर उठती है। साथ ही, आधुनिक अघोर समुदायों में भी विचार और साधना-पद्धतियों में विविधता है।'
      }
    ],
    keyFindingsEn: [
      'Aghora (a + ghora) means "fearless / non-terrifying" and denotes both Sadāśiva’s southern face and a non-dual Śaiva-Śākta contemplative path.',
      'Integrates the 6 core research points and directly houses Sub-Part I (Ghora Sampradāya 11/12 Bhedas) and Sub-Part II (Kāpālika Sampradāya 5 Bhedas).',
      'Pāśupata, medieval Kāpālika, and modern Kīnārāmī Aghora represent three related yet historically distinct Śaiva currents.'
    ],
    keyFindingsHi: [
      'अघोर (अ + घोर) का अर्थ "अभय / भयावहता से परे" है; यह सदाशिव के दक्षिण मुख और अद्वैत समदृष्टि दोनों का वाचक है।',
      'अघोर सम्प्रदाय के ६ मुख्य बिंदुओं के अंतर्गत इसके दोनों उप-भाग—उप-भाग I (घोर सम्प्रदाय के ११/१२ भेद) और उप-भाग II (कापालिक सम्प्रदाय के ५ भेद)—यहाँ एकीकृत हैं।',
      'पाशुपत, मध्यकालीन कापालिक और आधुनिक बाबा कीनाराम अघोर परंपरा तीन संबंधित किंतु ऐतिहासिक रूप से विशिष्ट धाराएँ हैं।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Etymology', labelHi: 'संस्कृत व्युत्पत्ति', valueEn: 'Aghora (अघोर = Non-Terrible / Fearless) · Aghorin (अघोरी)', valueHi: 'अघोर (अ + घोर = अभय / सहज) · अघोरी' },
      { labelEn: 'Two Dedicated Sub-Parts', labelHi: 'दो समर्पित उप-भाग', valueEn: 'Sub-Part I: Ghora 11/12 Bhedas · Sub-Part II: Kāpālika 5 Bhedas', valueHi: 'उप-भाग I: घोर सम्प्रदाय ११/१२ भेद · उप-भाग II: कापालिक ५ भेद' },
      { labelEn: 'Major Living Seat', labelHi: 'प्रमुख जीवंत पीठ', valueEn: 'Bābā Kīnārām Sthal, Krīṃ Kuṇḍa, Varanasi (Kāśī)', valueHi: 'बाबा कीनाराम स्थल, क्रीं कुण्ड, वाराणसी (काशी)' },
      { labelEn: 'Academic References', labelHi: 'अकादमिक संदर्भ', valueEn: 'Judit Törzsök · Alexis Sanderson · David N. Lorenzen · Ron Barrett', valueHi: 'Judit Törzsök · Alexis Sanderson · David N. Lorenzen · Ron Barrett' }
    ],
    primarySourcesEn: 'Taittirīya Āraṇyaka (10.45) · Siddhayogeśvarīmata · Brahmayāmala · Vivekasāra (Bābā Kīnārām) · Judit Törzsök (OCHS) · Alexis Sanderson ("The Śaiva Age")',
    primarySourcesHi: 'तैत्तिरीय आरण्यक (१०.४५) · सिद्धयोगेश्वरीमत · ब्रह्मयामल · विवेकसार (बाबा कीनाराम) · Judit Törzsök एवं Alexis Sanderson के शोध-पत्र',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'ghora-sampradaya-11-bhedas-study',
    categorySlug: 'ashta-bhairava',
    code: 'SHA-02',
    titleEn: 'Ghora Sampradāya: Detailed Study of the Reported 11 (12 Listed) Bhedas — Source Verification Pending',
    titleHi: 'घोर सम्प्रदाय के बताए गए ११ (सूचीबद्ध १२) भेदों का विस्तृत अध्ययन — मूल स्रोत की पुष्टि लंबित',
    subtitleEn: 'Lexical, Etymological & Textual Analysis of Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora, Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora & Siddha',
    subtitleHi: 'रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर, घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर एवं सिद्ध—प्रत्येक पद का शब्दार्थ, शास्त्रीय संदर्भ एवं शोध-प्रश्न',
    sanskritEpigraph: '॥ घोररूपा महादेव्यो घोरघोरतरास्तथा। प्रमाणमूलमन्विष्य तत्त्वनिर्णय इष्यते ॥',
    epigraphTranslationEn: '"In examining the classifications of Ghora, Ghoratara, and Aghora, rigorous inquiry demands verifying the primary manuscript source before establishing sectarian history."',
    epigraphTranslationHi: '"घोर, घोरतर और अघोर से जुड़ी वर्गीकरण-सूचियों के अध्ययन में मूल पाण्डुलिपि और प्राथमिक स्रोत की पुष्टि करना प्रामाणिक शोध की प्रथम आवश्यकता है।"',
    evidenceBadgeEn: 'REPORTED CLASSIFICATION · SOURCE VERIFICATION PENDING',
    evidenceBadgeHi: 'अप्रमाणित वर्गीकरण-सूची · मूल स्रोत की पुष्टि लंबित',
    accentColor: '#EF4444',
    summaryEn:
      'A dedicated philological dossier examining the research-note list titled "11 Bhedas of Ghora Sampradāya", which actually enumerates 12 Sanskrit/Hindi terms: (1) Rakta, (2) Śukla, (3) Vinmūtra, (4) Bhakṣa, (5) Vanānta, (6) Ghora, (7) Ghoratara, (8) Vīṇā, (9) Nīla, (10) Śarvabhakṣa, (11) Ghorāghora, and (12) Siddha. Because this 12-item list has not yet been traced to a verified primary Sanskrit Āgama or peer-reviewed edition, this monograph preserves the exact list and the 11-vs-12 numerical discrepancy while providing a detailed lexical, contextual, and methodological analysis of every single term.',
    summaryHi:
      'यह विशेष शोध-प्रबंध "घोर सम्प्रदाय के ११ भेद" शीर्षक वाली उस सूची का प्रत्येक बिंदु के साथ विस्तृत विश्लेषण करता है जिसमें वास्तव में "सिद्ध" सहित १२ नाम दिए गए हैं: (१) रक्त, (२) शुक्ल, (३) विन्मूत्र, (४) भक्ष, (५) वनान्त, (६) घोर, (७) घोरतर, (८) वीणा, (९) नील, (१०) शर्वभक्ष, (११) घोराघोर, और (१२) सिद्ध। चूँकि इस संपूर्ण सूची को स्थापित करने वाला प्राथमिक संस्कृत ग्रन्थ अभी अपुष्ट है, अतः यहाँ ११ बनाम १२ की विसंगति को सुरक्षित रखते हुए प्रत्येक भेद का प्रामाणिक शब्दार्थ, तांत्रिक संदर्भ और अनुसंधान-प्रश्न विस्तार से प्रस्तुत किया गया है।',
    sections: [
      {
        headingEn: '1. Editorial & Methodological Notice: The 11-vs-12 Discrepancy and Source Status',
        headingHi: '1. संपादकीय एवं शोध-पद्धति स्पष्टीकरण: ११ बनाम १२ नामों की विसंगति एवं स्रोत की स्थिति',
        bodyEn:
          'Two methodological observations govern this dossier: First, although the heading in the circulated notes states "11 Bhedas (subdivisions) of Ghora Sampradāya", the enumerated list contains 12 distinct items (ending with Siddha). Rather than silently deleting a name or inventing a fusion to force the number 11, archival integrity requires preserving all 12 items and documenting the discrepancy. Second, no known canonical Śaiva Āgama or academic monograph currently validates these 12 terms as 12 historical institutional sub-sects of a "Ghora Sampradāya". Several terms (such as Ghora, Ghoratara, Rakta, Śukla, and Siddha) are authentic Sanskrit adjectives or philosophical categories in Śaiva-Śākta texts, whereas others (such as Vinmūtra, Bhakṣa, or Śarvabhakṣa) appear to be fragments of descriptive compounds describing ascetic observances.',
        bodyHi:
          'इस सूची के अध्ययन में दो मुख्य बातें ध्यान देने योग्य हैं: प्रथम, शीर्षक में "११ भेद" कहा गया है, किंतु सूची में "सिद्ध" सहित कुल १२ नाम हैं। किसी नाम को बिना प्रमाण हटाने के स्थान पर इस संख्यात्मक अंतर को यथावत् दर्ज किया गया है। द्वितीय, उपलब्ध प्राथमिक संस्कृत ग्रन्थों में इन बारह नामों की स्वतंत्र ऐतिहासिक शाखाओं के रूप में पुष्टि नहीं मिलती; इनमें से कुछ शब्द (जैसे घोर, घोरतर, रक्त, शुक्ल) तांत्रिक दर्शन के प्रामाणिक विशेषण हैं, जबकि कुछ शब्द (जैसे विन्मूत्र, भक्ष) साधना-संबंधी संयुक्त पदों के अंश प्रतीत होते हैं।'
      },
      {
        headingEn: '2. Detailed Analysis of Bhedas 1 to 6: Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta & Ghora',
        headingHi: '2. प्रथम ६ भेदों का विस्तृत विवरण: रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त एवं घोर',
        bodyEn:
          '(1) Rakta (रक्त): Literally "red", "blood", or "impassioned/colored". In Tantric literature, rakta can denote vital life-force, the quality of rajas, red hibiscus/vermilion offerings to fierce deities, or red ascetic garments (raktāmbara). However, the word alone does not prove an independent "Rakta Aghora" sect. Research check: Is it a color-based classification, a sadhana stage, or a textual adjective? (2) Śukla (शुक्ल): Literally "white", "bright", or "pure". In Sanskrit texts, śukla signifies sattva, white sacred ash (bhasma), or the bright lunar fortnight. Pairing Rakta (red), Śukla (white), and Nīla (blue/black) often reflects a three-color guṇa or iconographic taxonomy rather than three separate monastic orders. (3) Vinmūtra / Viṇmūtra (विन्मूत्र / विण्मूत्र): Derived from viṣ/viṭ (excrement) + mūtra (urine). Certain extreme antinomian passages in Kāpālika, Kaula, and Aghora literature mention transcending disgust toward bodily waste (pañca-pavitrāṇi or śuddha-aśuddha-vikalpa-kṣaya) to test non-dual equanimity. Yet "Vinmūtra" is a substance noun, not a verified sect name. Research check: Identify the exact manuscript sentence where this compound occurs. (4) Bhakṣa (भक्ष): Literally "eating", "food", or "consuming". Bhakṣa is a standard Sanskrit noun/suffix (as in vāyu-bhakṣa, phala-bhakṣa, or sarva-bhakṣa). Standing alone as item #4, it may have been split from item #3 (e.g., viṇmūtra-bhakṣa, which would also explain why 11 items became 12!). (5) Vanānta (वनान्त): Literally "forest-end" or "deep wilderness". Forests, mountain caves, and cremation grounds are classic habitats for tapasyā, but "Vanānta" requires a primary source before being treated as a sect title. (6) Ghora (घोर): Literally "fierce", "formidable", or "terrifying"—a core Vedic and Āgamic epithet of Rudra-Śiva’s dynamic power, which by itself does not prove a separate "Ghora Sampradāya" organization.',
        bodyHi:
          '(१) रक्त (Rakta): शाब्दिक अर्थ—लाल रंग या रक्त। तांत्रिक साहित्य में यह जीवन-शक्ति, रजोगुण, उग्र देवता-उपासना या रक्त-वस्त्र से जुड़ सकता है, किंतु केवल नाम के आधार पर किसी स्वतंत्र "रक्त शाखा" की कल्पना नहीं की जा सकती। (२) शुक्ल (Śukla): शाब्दिक अर्थ—श्वेत, उज्ज्वल या शुद्ध। रक्त, शुक्ल और नील का एक साथ आना प्रायः रंग या गुण (सत्त्व-रज-तम) आधारित वर्गीकरण का संकेत देता है। (३) विन्मूत्र / विण्मूत्र (Vinmūtra): शाब्दिक अर्थ—मल और मूत्र। कुछ अघोर और कौल विवरणों में शुद्ध-अशुद्ध की सामाजिक घृणा को जीतने वाली साधनाओं में इस शब्द का उल्लेख मिलता है, परंतु इस नाम की कोई स्वतंत्र संस्थागत शाखा सिद्ध नहीं होती। (४) भक्ष (Bhakṣa): शाब्दिक अर्थ—भोजन या भक्षण करना। यह अत्यंत महत्त्वपूर्ण भाषावैज्ञानिक संभावना है कि मूल पाठ में "विण्मूत्रभक्ष" एक ही संयुक्त पद रहा हो जो प्रतिलिपि में "विन्मूत्र" और "भक्ष" दो अलग नामों में टूट गया—जिससे ११ भेदों की सूची में १२ नाम हो गए! (५) वनान्त (Vanānta): शाब्दिक अर्थ—वन का प्रांत या निर्जन वन। यह साधकों के निवास-स्थान का विशेषण हो सकता है। (६) घोर (Ghora): शाब्दिक अर्थ—उग्र या भयानक। शैव धर्म में रुद्र-शिव के उग्र स्वरूपों के लिए यह व्यापक शास्त्रीय पद है।'
      },
      {
        headingEn: '3. Detailed Analysis of Bhedas 7 to 12: Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora & Siddha',
        headingHi: '3. शेष ६ भेदों का विस्तृत विवरण: घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर एवं सिद्ध',
        bodyEn:
          '(7) Ghoratara (घोरतर): The comparative degree of ghora ("more fierce / intensely formidable"). In the Taittirīya Āraṇyaka (10.45) and early Vidyāpīṭha Tantras such as the Siddhayogeśvarīmata (analyzed by Judit Törzsök), Aghorā, Ghorā, and Ghoratarā form a celebrated triad of consciousness-powers (śaktis) that either liberate, bind in saṃsāra, or draw beings downward. While authentically Tantric, that scriptural triad does not validate the 11-branch sect list. (8) Vīṇā (वीणा): Literally the Indian stringed lute. Its presence in a list of Ghora subdivisions is conspicuously anomalous; it may point to the Vīṇāśikha Tantra (a foundational Vāmasrotas Śaiva text), Nāda-anusandhāna practices, a teacher’s name, or a scribal corruption in copying the list. (9) Nīla (नील): Literally "dark blue" or "black-blue"—associated with Nīlakaṇṭha Śiva, Nīlatārā, and the Bṛhannīla Tantra, forming a color triad with Rakta and Śukla. (10) Śarvabhakṣa (शर्वभक्ष / सर्वभक्ष?): Demands strict orthographic verification. Śarva is one of the eight Vedic names of Rudra-Śiva (Aṣṭamūrti), while bhakṣa means eating; however, in Devanāgarī and spoken Hindi, शर्वभक्ष (Śarvabhakṣa) is very frequently a scribal variant for सर्वभक्ष (Sarvabhakṣa, "all-consuming / omnivorous ascetic who accepts all alms without dualistic discrimination"). (11) Ghorāghora (घोराघोर): A dvandva compound uniting Ghora (fierce) and Aghora (non-fierce/benign), expressing the completeness of Śiva’s nature. (12) Siddha (सिद्ध): Literally "perfected adept" or "accomplished master", ubiquitous across Yoga, Nātha, Kaula, and Śaiva traditions.',
        bodyHi:
          '(७) घोरतर (Ghoratara): शाब्दिक अर्थ—अधिक घोर या तीव्रतर उग्र। तैत्तिरीय आरण्यक (१०.४५) और सिद्धयोगेश्वरीमत (Judit Törzsök) में अघोरा, घोरा और घोरतरा शक्तियों की प्रसिद्ध त्रयी मिलती है, किंतु वह संदर्भ इस ११-भेदों वाली सम्प्रदाय-सूची की पुष्टि नहीं करता। (८) वीणा (Vīṇā): शाब्दिक अर्थ—भारतीय तार-वाद्य। इस सूची में यह नाम विशेष रूप से अस्पष्ट है; यह वामस्रोतस् के "वीणाशिख तन्त्र", नाद-साधना, किसी गुरु के नाम, अथवा प्रतिलिपि की किसी त्रुटि का परिणाम हो सकता है। (९) नील (Nīla): शाब्दिक अर्थ—नीला या गहरा नीला रंग (नीलकण्ठ शिव या नीलतारा से संबद्ध)। (१०) शर्वभक्ष (Śarvabhakṣa / सर्वभक्ष?): शर्व शिव का एक अष्टमूर्ति नाम है और भक्ष का अर्थ भक्षण है; किंतु पाण्डुलिपि-विज्ञान की दृष्टि से यह प्रबल संभावना है कि मूल शब्द "सर्वभक्ष" (बिना किसी भेद-भाव के सर्व-भक्षण करने वाला अवधूत) रहा हो, जो "शर्वभक्ष" लिखा गया। (११) घोराघोर (Ghorāghora): घोर और अघोर का संयुक्त दार्शनिक पद, जो उग्र और सौम्य के एकत्व को दर्शाता है। (१२) सिद्ध (Siddha): सिद्धि-प्राप्त साधक या पूर्ण योगी—जो इस सूची का १२वाँ नाम है।'
      }
    ],
    keyFindingsEn: [
      'Preserves all 12 listed terms (Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora, Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora, Siddha) under a transparent "Source Verification Pending" classification.',
      'Identifies two key philological hypotheses for the 11-vs-12 discrepancy: (a) Vinmūtra + Bhakṣa may have split from a single compound viṇmūtra-bhakṣa, and (b) Śarvabhakṣa is likely an orthographic variant of Sarvabhakṣa.',
      'Links Ghora, Ghoratara, and Aghora to their authentic scriptural attestations in Taittirīya Āraṇyaka 10.45 and Siddhayogeśvarīmata without fabricating sect histories.'
    ],
    keyFindingsHi: [
      'सभी १२ नामों (रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर, घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर, सिद्ध) को "मूल स्रोत की पुष्टि लंबित" श्रेणी में पूर्ण पारदर्शिता के साथ सुरक्षित रखा गया है।',
      '११ बनाम १२ नामों की गुत्थी पर महत्वपूर्ण भाषावैज्ञानिक दृष्टि: संभवतः "विण्मूत्रभक्ष" संयुक्त पद के दो टुकड़ों ("विन्मूत्र" और "भक्ष") में बँटने से ११ नाम १२ हो गए, तथा "शर्वभक्ष" मूलतः "सर्वभक्ष" का पाठांतर हो सकता है।',
      'बिना किसी काल्पनिक इतिहास को गढ़े प्रत्येक शब्द का संस्कृत अर्थ, शास्त्रीय संदर्भ और शोध-प्रश्न स्पष्ट किया गया है।'
    ],
    metadata: [
      { labelEn: 'Classification Status', labelHi: 'वर्गीकरण की स्थिति', valueEn: 'Reported 11 Bhedas (12 Names Listed) — Source Verification Pending', valueHi: 'बताए गए ११ भेद (सूचीबद्ध १२ नाम) — मूल स्रोत की पुष्टि लंबित' },
      { labelEn: ' Verified Scriptural Parallels', labelHi: 'प्रामाणिक शास्त्रीय समानांतर', valueEn: 'Taittirīya Āraṇyaka 10.45 · Siddhayogeśvarīmata (Aghorā–Ghorā–Ghoratarā)', valueHi: 'तैत्तिरीय आरण्यक १०.४५ · सिद्धयोगेश्वरीमत (अघोरा–घोरा–घोरतरा)' },
      { labelEn: 'Color & Guṇa Triad in List', labelHi: 'सूची में रंग-त्रयी', valueEn: 'Rakta (Red) · Śukla (White) · Nīla (Dark Blue)', valueHi: 'रक्त (लाल) · शुक्ल (श्वेत) · नील (नीला)' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Taittirīya Āraṇyaka (10.45) · Siddhayogeśvarīmata · Judit Törzsök ("The Doctrine of Magic Female Spirits") · Monier-Williams Sanskrit-English Dictionary',
    primarySourcesHi: 'तैत्तिरीय आरण्यक (१०.४५) · सिद्धयोगेश्वरीमत · Judit Törzsök के शोध-पत्र · मोनियर-विलियम्स संस्कृत शब्दकोश',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'kapalika-sampradaya-5-bhedas-somasiddhanta',
    categorySlug: 'ashta-bhairava',
    code: 'SHA-03',
    titleEn: 'Kāpālika Sampradāya (कापालिक सम्प्रदाय): Somāsiddhānta, the 12 Gurus & the Reported 5 Bhedas',
    titleHi: 'कापालिक सम्प्रदाय: सोमसिद्धान्त, १२ कापालिक गुरु एवं बताए गए ५ भेदों (इन्द्र, देव, रुद्र, विद्या, सिद्ध) का अध्ययन',
    subtitleEn: 'Medieval Cranial-Bowl Asceticism, Relationship with Pāśupata & Lakulīśa, Bhairava–Cāmuṇḍā Worship, Somāsiddhānta & Source-Conscious Analysis of the 5 Reported Subdivisions',
    subtitleHi: 'मध्यकालीन कपाल-व्रत परंपरा, पाशुपत व लकुलीश से संबंध, भैरव-चामुण्डा-त्रिपुरसुन्दरी उपासना, सोमसिद्धान्त एवं ५ कथित भेदों की स्रोत-समीक्षा',
    sanskritEpigraph: '॥ कपालपाणयो नित्यं सोमसिद्धान्तवेदिनः। भैरवीं भैरवं देवं पूजयन्ति समाहिताः ॥',
    epigraphTranslationEn: '"Bearing the cranial bowl in hand and knower of the Somāsiddhānta doctrine, the Kāpālika contemplates Deva Bhairava and Goddess Bhairavī/Cāmuṇḍā."',
    epigraphTranslationHi: '"हाथ में कपाल-पात्र धारण करने वाले और सोमसिद्धान्त के मर्मज्ञ साधक एकाग्र चित्त से भगवान् भैरव और भगवती भैरवी/चामुण्डा की आराधना करते हैं।"',
    evidenceBadgeEn: 'MEDIEVAL ŚAIVA HISTORY & SOURCE-VERIFICATION DOSSIER',
    evidenceBadgeHi: 'मध्यकालीन शैव इतिहास एवं स्रोत-सत्यापन शोध-पत्र',
    accentColor: '#D97706',
    summaryEn:
      'Examines the medieval Kāpālika tradition across two distinct planes: (1) Verified historical and textual scholarship covering the meaning of Kāpālika (from kapāla, skull-bowl), the relationship with Pāśupata Śaivism and Lakulīśa, the traditional list of 12 Kāpālika gurus (Ādinātha, Anādi, Kāla, Amitābha, Karāla, Vikarāla, etc.) in Sarvatantra compendia, the worship of Bhairava, Mahākālī, Cāmuṇḍā, and Tripurasundarī, and the doctrine of Somāsiddhānta; and (2) A source-conscious lexical analysis of the reported fivefold Kāpālika classification—Indra, Deva, Rudra, Vidyā, and Siddha—clearly labeled as "source verification pending."',
    summaryHi:
      'कापालिक सम्प्रदाय का दो स्पष्ट स्तरों पर विस्तृत अध्ययन प्रस्तुत करता है: (१) प्रमाणित ऐतिहासिक एवं ग्रंथीय अध्ययन—जिसमें कपाल-पात्र का प्रतीक, पाशुपत मत और लकुलीश से संबंध, सर्वतन्त्र में उल्लिखित १२ कापालिक गुरुओं (आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल आदि) की परंपरा, भैरव, महाकाली, चामुण्डा एवं त्रिपुरसुन्दरी की इष्टदेव रूप में उपासना तथा "सोमसिद्धान्त" दर्शन शामिल है; और (२) कापालिक सम्प्रदाय के बताए गए पाँच भेदों—इन्द्र, देव, रुद्र, विद्या और सिद्ध—की शब्दार्थ एवं शोध-समीक्षा ("मूल स्रोत की पुष्टि लंबित")।',
    sections: [
      {
        headingEn: '1. Four Foundational Points of the Kāpālika Tradition & Historical Qualifications',
        headingHi: '1. कापालिक सम्प्रदाय के चार मुख्य बिंदु एवं ऐतिहासिक समीक्षा',
        bodyEn:
          'Based on epigraphic records, Sanskrit philosophical dramas (Bhavabhūti’s Mālatīmādhava, Kṛṣṇamiśra’s Prabodhacandrodaya), Purāṇas, and modern scholarship (David N. Lorenzen’s The Kāpālikas and Kālāmukhas: Two Lost Śaivite Sects; Alexis Sanderson), four key points structure the study of the Kāpālikas: (Point 1 — Origins & Relationship with Pāśupata / Lakulīśa): While Kāpālika asceticism evolved within the broader Atimārga / Mantramārga Śaiva world inaugurated by Pāśupata asceticism (attributed to Lakulīśa / Nakulīśa, whose historical vs. mythic biography is examined by Elizabeth A. Cecil), Kāpālikas were distinct from orthodox Pāśupatas and Lākulas (Kālāmukhas), specifically modeling their Mahāvrata penance on Bhairava carrying Brahmā’s fifth skull to Kāśī. (Point 2 — The 12 Kāpālika Gurus): Tantric compendia (such as the Sarvatantra / Śābara lists cited by Gopinath Kaviraj and Hazari Prasad Dvivedi) preserve the names of 12 Kāpālika gurus—Ādinātha, Anādi, Kāla, Atikāla (or Amitābha), Karāla, Vikarāla, Mahākāla, Kālabhairavanātha, Baṭuka, Bhūtanātha, Vīranātha, and Śrīkaṇṭha—along with their 12 disciples (Nāgārjuna, Jaḍabharata, Hariścandra, Satyanātha, Bhīmanātha, Gorakṣa, Carpaṭa, Avadhūta, Vairāgya, Kanthādhārī, Jālandhara, and Malayārjuna). (Point 3 — Presiding Deities / Iṣṭadevatās): Their primary deities were fierce Bhairava (Kapālabhairava / Svacchandabhairava) paired with Mahākālī, Cāmuṇḍā, Caṇḍikā, and in later Kaula-inflected currents, Tripurasundarī. (Point 4 — Core Doctrine: Somāsiddhānta & Kapāla Symbolism): Their philosophical school is referred to in medieval sources as Somāsiddhānta ("the doctrine of Soma"—signifying both Śiva united with Umā [Sa-Umā] and the lunar ambrosia [soma/amṛta] in the cranial vault), utilizing the human skull-bowl (kapāla) and six mudrā ornaments (ṣaṇmudrā: necklace, earrings, wristlets, crest-jewel, sacred thread, and ashes).',
        bodyHi:
          'शिलालेखों, संस्कृत नाटकों (भवभूति के मालतीमाधव, कृष्णमिश्र के प्रबोधचन्द्रोदय), पुराणों और आधुनिक शोध (David N. Lorenzen, Alexis Sanderson, गोपीनाथ कविराज) के आधार पर कापालिक परंपरा के चार मुख्य बिंदु इस प्रकार हैं: (१. प्रवर्तक एवं पाशुपत/लकुलीश से संबंध): कापालिक परंपरा का विकास प्राचीन अतिमार्ग/पाशुपत शैव वातावरण के बाद हुआ, जिसके प्रवर्तक लकुलीश (नकुलीश) माने जाते हैं; किंतु कापालिकों का "महाव्रत" (ब्रह्म-कपाल धारण करने वाले भैरव का अनुकरण) पाशुपत और कालामुख मत से अपनी विशिष्ट पहचान रखता था। (२. १२ कापालिक गुरुओं की परंपरा): सर्वतन्त्र और नाथ-तांत्रिक सूचियों में १२ कापालिक आचार्यों के नाम मिलते हैं—आदिनाथ, अनादि, काल, अतिकाल/अमिताभ, कराल, विकराल, महाकाल, कालभैरवनाथ, बटुक, भूतनाथ, वीरनाथ और श्रीकण्ठ—तथा उनके १२ शिष्य (नागार्जुन, जड़भरत, हरिश्चन्द्र, चर्पट, गोरक्ष, जालन्धर आदि) गिनाए गए हैं। (३. इष्टदेव): इनके प्रमुख आराध्य उग्र भैरव तथा महाकाली, चामुण्डा और परवर्ती कौल समन्वय में त्रिपुरसुन्दरी रहे हैं। (४. सोमसिद्धान्त एवं कपाल-प्रतीक): इनके दर्शन को "सोमसिद्धान्त" (स-उमा अर्थात् उमा-सहित शिव, तथा सहस्रार-स्थित सोम-अमृत का सिद्धांत) कहा जाता था और ये साधना में मानव कपाल-पात्र एवं षण्मुद्रा (कण्ठिका, कुण्डल, रुचक, शिखामणि, पवित्री और भस्म) धारण करते थे।'
      },
      {
        headingEn: '2. Reported Fivefold Kāpālika Classification — Source Verification Pending (Indra, Deva, Rudra, Vidyā, Siddha)',
        headingHi: '2. कापालिक सम्प्रदाय के बताए गए पाँच भेद — मूल स्रोत की पुष्टि लंबित (इन्द्र, देव, रुद्र, विद्या, सिद्ध)',
        bodyEn:
          'In the user’s research notes, five names are listed as subdivisions (bhedas) of the Kāpālika Sampradāya: (1) Indra (इन्द्र), (2) Deva (देव), (3) Rudra (रुद्र), (4) Vidyā (विद्या), and (5) Siddha (सिद्ध). Because no surviving primary Sanskrit text or epigraphic record currently validates these five nouns as five separate historical subsects of Kāpālikas, they are documented here with strict philological discipline: (1) Indra (इन्द्र): Name of the Vedic king of devas and wielder of the vajra; in tantric catalogues, Indra can also function as an honorific ("chief/sovereign among...") or directional guardian. Research question: Does "Indra" denote a guru title, a directional octant, or a deity heading? (2) Deva (देव): Literally "shining one" or "deity"; also a standard initiatory name-suffix (-deva) in medieval Śaiva orders. Research question: Does it classify initiates or a deity-focused observance? (3) Rudra (रुद्र): The fierce Vedic-Śaiva deity; crucially, the 28 Śaiva Āgamas are divided into 10 Śivabheda and 18 Rudrabheda texts. Research question: Does "Rudra" here reflect the canonical Rudrabheda Āgamic division? (4) Vidyā (विद्या): Liberating wisdom or female mantra-deity; the 64 Bhairava Tantras are famously divided into Mantrapīṭha and Vidyāpīṭha (goddess-focused Tantras where Kāpālika-style practices were prominent). Research question: Does "Vidyā" refer to the Vidyāpīṭha stream of Bhairava Tantras? (5) Siddha (सिद्ध): Perfected master or adept, central to the 12 Kāpālika Siddha-guru lineages. Research question: Does "Siddha" denote the stage of perfection (siddhi) or a Siddha-santāna lineage?',
        bodyHi:
          'शोध-नोट्स में कापालिक सम्प्रदाय के पाँच भेद बताए गए हैं: (१) इन्द्र, (२) देव, (३) रुद्र, (४) विद्या, और (५) सिद्ध। चूँकि किसी विश्वसनीय प्राथमिक संस्कृत ग्रन्थ में इन पाँच नामों की स्वतंत्र कापालिक उपशाखाओं के रूप में पुष्टि नहीं मिली है, अतः काल्पनिक इतिहास गढ़ने के स्थान पर प्रत्येक शब्द का प्रामाणिक अर्थ और शोध-प्रश्न इस प्रकार है: (१) इन्द्र (Indra): वैदिक देवराज इन्द्र अथवा श्रेष्ठता-सूचक उपाधि; शोध प्रश्न—क्या यह किसी गुरु-उपाधि या दिक्पाल-मण्डल का संकेत है? (२) देव (Deva): दिव्य सत्ता अथवा शैव दीक्षा-नामों का उत्तर-पद (-देव); शोध प्रश्न—क्या यह साधकों की किसी श्रेणी को दर्शाता है? (३) रुद्र (Rudra): उग्र शिव-स्वरूप; शैव आगमों में १८ आगम "रुद्रभेद" कहलाते हैं; शोध प्रश्न—क्या यह रुद्रभेद आगम-वर्ग या रुद्र-उपासना का सूचक है? (४) विद्या (Vidyā): मन्त्र-विद्या या देवी-शक्ति; भैरव तन्त्रों की कापालिक-प्रभावित शाखा को शास्त्रीय रूप से "विद्यापीठ" कहा जाता है; शोध प्रश्न—क्या "विद्या" शब्द इसी विद्यापीठ आम्नाय का संक्षिप्त रूप है? (५) सिद्ध (Siddha): सिद्धि-प्राप्त पूर्ण साधक या १२ कापालिक सिद्ध-गुरुओं की परंपरा।'
      }
    ],
    keyFindingsEn: [
      'Documents the 4 core historical features of the Kāpālikas: Atimārga/Pāśupata background, the 12 Kāpālika gurus of Sarvatantra, Bhairava–Cāmuṇḍā–Mahākālī–Tripurasundarī worship, and Somāsiddhānta.',
      'Preserves the 5 reported Kāpālika subdivisions (Indra, Deva, Rudra, Vidyā, Siddha) with explicit "Source Verification Pending" status.',
      'Highlights the philological parallel between Rudra / Vidyā and the canonical Rudrabheda / Vidyāpīṭha divisions of the Śaiva-Bhairava scriptural corpus.'
    ],
    keyFindingsHi: [
      'कापालिक परंपरा के ४ प्रमुख ऐतिहासिक बिंदुओं (लकुलीश/पाशुपत पृष्ठभूमि, सर्वतन्त्र के १२ कापालिक गुरु, भैरव-चामुण्डा-महाकाली-त्रिपुरसुन्दरी उपासना और सोमसिद्धान्त) का प्रामाणिक प्रलेखन।',
      'कापालिक सम्प्रदाय के ५ कथित भेदों (इन्द्र, देव, रुद्र, विद्या, सिद्ध) को "मूल स्रोत की पुष्टि लंबित" टिप्पणी और शब्दार्थ के साथ सुरक्षित रखा गया है।',
      'रुद्र और विद्या पदों का शैव आगमों के "रुद्रभेद" और भैरव तन्त्रों के "विद्यापीठ" वर्गीकरण से संभावित शास्त्रीय संबंध रेखांकित किया गया है।'
    ],
    metadata: [
      { labelEn: 'Philosophical System', labelHi: 'दार्शनिक सिद्धांत', valueEn: 'Somāsiddhānta (सोमसिद्धान्त) & Mahāvrata', valueHi: 'सोमसिद्धान्त एवं महाव्रत' },
      { labelEn: '12 Gurus (Sarvatantra)', labelHi: '१२ कापालिक गुरु (सर्वतन्त्र)', valueEn: 'Ādinātha, Anādi, Kāla, Amitābha, Karāla, Vikarāla, Mahākāla, etc.', valueHi: 'आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल, महाकाल आदि' },
      { labelEn: '5 Reported Bhedas (Unverified)', labelHi: '५ बताए गए भेद (अपुष्ट स्रोत)', valueEn: 'Indra · Deva · Rudra · Vidyā · Siddha', valueHi: 'इन्द्र · देव · रुद्र · विद्या · सिद्ध' },
      { labelEn: 'Key Academic Sources', labelHi: 'प्रमुख अकादमिक स्रोत', valueEn: 'David N. Lorenzen (1972) · Alexis Sanderson (1988, 2009) · Elizabeth A. Cecil', valueHi: 'David N. Lorenzen · Alexis Sanderson · Elizabeth A. Cecil' }
    ],
    primarySourcesEn: 'Prabodhacandrodaya (Kṛṣṇamiśra) · Mālatīmādhava (Bhavabhūti) · Śबर/Sarvatantra Lists · David N. Lorenzen, The Kāpālikas and Kālāmukhas (1972) · Elizabeth A. Cecil (2020)',
    primarySourcesHi: 'प्रबोधचन्द्रोदय (कृष्णमिश्र) · मालतीमाधव (भवभूति) · सर्वतन्त्र · David N. Lorenzen (The Kāpālikas and Kālāmukhas) · Elizabeth A. Cecil',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'samaya-ashta-prahar-timekeeping',
    categorySlug: 'the-14-lokas',
    code: 'KAL-01',
    titleEn: 'Samaya and Aṣṭa Prahar (समय और उसके आठ पहर): Comprehensive Study of Traditional Indian Timekeeping',
    titleHi: 'समय और उसके आठ पहर — भारतीय कालगणना, अष्ट-प्रहर चक्र, मुहूर्त, संध्या एवं राग-समय सिद्धांत का विस्तृत अध्ययन',
    subtitleEn: 'The Eight Prahars of the 24-Hour Ahorātra (Prātaḥkāla to Antima Rātri), Fixed 3-Hour vs. Solar Sunrise/Sunset Reckoning, Distinction Between Prahar, Yāma, Muhūrta, Sandhyā & Brahma-Muhūrta, and Rāga-Samaya in Classical Music',
    subtitleHi: '२४ घंटे (अहोरात्र) के आठ पहर (प्रातःकाल से अंतिम रात्रि तक), ३-घंटे की मानक गणना बनाम सूर्योदय-सूर्यास्त आधारित गणना, पहर-याम-मुहूर्त-संध्या-ब्रह्ममुहूर्त में अंतर एवं शास्त्रीय संगीत का राग-समय सिद्धांत',
    sanskritEpigraph: '॥ अहोरात्रं चरेद्युक्तो ह्यष्टौ प्रहरकान् सुधीः। कालो हि भगवान् रुद्रो लोकयात्राप्रवर्तकः ॥',
    epigraphTranslationEn: '"Across the eight prahars of the complete day-and-night (ahorātra), the wise move in harmony with sacred time; for Time (Kāla) itself is the sovereign mover of cosmic order."',
    epigraphTranslationHi: '"संपूर्ण दिन-रात (अहोरात्र) के आठों पहरों में मनीषी काल-चक्र के अनुरूप आचरण करते हैं; क्योंकि काल ही लोक-यात्रा का प्रवर्तक है।"',
    evidenceBadgeEn: 'TRADITIONALJYOTIṢA & CULTURAL TIMEKEEPING · AṢṬA PRAHARA',
    evidenceBadgeHi: 'भारतीय कालगणना एवं सांस्कृतिक समय-विज्ञान · अष्ट प्रहर',
    accentColor: '#FBBF24',
    summaryEn:
      'In classical Indian timekeeping (Kālagaṇanā), a complete solar day-and-night cycle (Ahorātra) is divided not merely into mechanical clock hours, but into eight qualitative periods called Praharas (प्रहर, Hindi: पहर / Pahar). In standard equinoctial reckoning, one Prahar equals approximately three hours (24 ÷ 8 = 3 hours: four daytime Prahars and four nighttime Prahars), though in traditional solar observation each Prahar scales dynamically with local sunrise and sunset. This monograph details all eight Prahars—their etymology, natural atmosphere, liturgical observances, and Hindustani Rāga-Samaya musical correspondences—while clarifying the exact boundaries between Prahara, Yāma, Muhūrta (48 minutes), Sandhyā, and Brahma-muhūrta.',
    summaryHi:
      'भारतीय परंपरा में दिन-रात (अहोरात्र) को केवल यांत्रिक घड़ी के घंटों से नहीं, बल्कि आठ "प्रहरों" (हिंदी: पहर) में बाँटकर समझा जाता है। सरल मानक गणना में एक पहर लगभग तीन घंटे का होता है (२४ घंटे ÷ ८ = ३ घंटे: दिन के ४ पहर और रात के ४ पहर), यद्यपि पारंपरिक सूर्य-आधारित गणना में प्रत्येक पहर की अवधि स्थानीय सूर्योदय और सूर्यास्त के अनुसार ऋतु के साथ बदलती है। यह विस्तृत शोध-प्रबंध आठों पहरों का समय, शब्दार्थ, प्राकृतिक व धार्मिक संदर्भ, हिंदुस्तानी शास्त्रीय संगीत का "राग-समय सिद्धांत" तथा पहर, याम, मुहूर्त (४८ मिनट), संध्या और ब्रह्ममुहूर्त के बीच का सटीक अंतर स्पष्ट करता है।',
    sections: [
      {
        headingEn: '1. What Is a Prahara (पहर)? Fixed 3-Hour Clock Reckoning vs. Dynamic Solar Calculation',
        headingHi: '1. पहर (प्रहर) क्या होता है? सरल २४-घंटे वाली गणना बनाम सूर्य-आधारित गणना',
        bodyEn:
          'The Sanskrit noun prahara (प्रहर, rendered in Hindi and vernacular usage as pahar, पहर) denotes a traditional watch or division of time—originally associated with the striking (pra-hṛ) of a gong or water-clock (ghaṭikā-yantra) at the completion of each three-hour watch. Two distinct methods exist for calculating the eight Prahars of an Ahorātra (24-hour day-night): (Method A — Simple 24-Hour Clock Reckoning): Each Prahar is treated as a fixed 3-hour window (24 hours ÷ 8 = 3 hours). Using an illustrative equinox sunrise of 6:00 AM, the four daytime Prahars run from 6:00 AM to 6:00 PM, and the four nighttime Prahars run from 6:00 PM to 6:00 AM. (Method B — Traditional Solar Dinamāna / Rātrimāna Reckoning): The four daytime Prahars divide the actual daylight span (from local sunrise to local sunset) into four equal quarters, while the four nighttime Prahars divide the actual nocturnal span (from sunset to the next sunrise) into four equal quarters. Consequently, in summer a daytime Prahar lasts longer than 3 hours and a nighttime Prahar is shorter, whereas in winter the reverse holds true.',
        bodyHi:
          'संस्कृत शब्द "प्रहर" (हिंदी रूप: "पहर") का अर्थ है समय का एक पारंपरिक खंड या पहरा (प्राचीन काल में घटिका-यन्त्र या जल-घड़ी पर प्रत्येक प्रहर के पूर्ण होने पर घंटा बजाकर सूचना दी जाती थी)। आठ पहरों को समझने के दो तरीके हैं: (१. सरल २४-घंटे वाली मानक गणना): २४ घंटे ÷ ८ = प्रत्येक पहर ३ घंटे का। यदि सुबह ६:०० बजे सूर्योदय माना जाए, तो सुबह ६ से शाम ६ बजे तक दिन के चार पहर और शाम ६ से अगली सुबह ६ बजे तक रात के चार पहर होते हैं। (२. सूर्य-आधारित गणना — दिनमान एवं रात्रिमान): इसमें वास्तविक सूर्योदय से सूर्यास्त तक के समय को चार बराबर भागों में और सूर्यास्त से अगले सूर्योदय तक की रात्रि को चार बराबर भागों में बाँटा जाता है। इसलिए ग्रीष्म और शीत ऋतु में तथा अलग-अलग भौगोलिक स्थानों पर प्रत्येक पहर की वास्तविक अवधि ३ घंटे से थोड़ी कम या अधिक हो सकती है।'
      },
      {
        headingEn: '2. Detailed Description of the Four Daytime Prahars (Prahars 1 to 4: 6:00 AM – 6:00 PM Base)',
        headingHi: '2. दिन के चार प्रहरों का विस्तृत वर्णन (प्रथम से चतुर्थ प्रहर: सुबह ६:०० से शाम ६:०० मानक आधार)',
        bodyEn:
          '(1) First Prahar — Prātaḥkāla / Prathama Yāma (प्रथम प्रहर — प्रातःकाल · ~6:00 AM – 9:00 AM): The transition from night into day as solar light ascends. Natural context: Sunrise and crisp morning atmosphere. Religious context: Prātaḥ-sandhyā, offering water to the Sun (Sūrya-arghya), japa, and morning temple worship. Musical context: In Hindustani Rāga-Samaya theory, early morning ragas such as Rāga Bhairava, Ahir Bhairav, and Rāmakalī are performed. Practical context: Planning the day, scriptural study, and initiating daily work. (2) Second Prahar — Pūrvāhṇa (द्वितीय प्रहर — पूर्वाह्न · ~9:00 AM – 12:00 PM): Literally "the part of the day before noon". As morning advances, social, agricultural, craft, scholarly, and administrative activities reach full momentum. In classical music, late-morning ragas (such as Āsāvarī, Jaunpurī, and Toḍī) belong to this watch. (3) Third Prahar — Madhyāhna (तृतीय प्रहर — मध्याह्न · ~12:00 PM – 3:00 PM): Literally "mid-day" around the solar zenith. Associated with midday meals, brief rest, and specific liturgical observances such as Madhyāhna-sandhyā and temple bhoga/ārati. In Hindustani music, ragas such as Bhimpalasi and Sāraṅga are traditionally associated with the midday/early-afternoon window. (4) Fourth Prahar — Aparāhṇa (चतुर्थ प्रहर — अपराह्न · ~3:00 PM – 6:00 PM): Literally "post-noon / afternoon". Sunlight softens and slants toward the western horizon, marking the completion of daytime work, preparation to return home, and readiness for evening sandhyā rites.',
        bodyHi:
          '(१) प्रथम प्रहर — प्रातःकाल (प्रथम याम · लगभग सुबह ६:००–९:०० बजे): रात से दिन की ओर संक्रमण का समय। सूर्योदय, बढ़ती रोशनी, स्नान, प्रातःसंध्या, सूर्य-अर्घ्य, जप तथा अध्ययन का आरंभ इसी प्रहर से जुड़ा है। हिंदुस्तानी शास्त्रीय संगीत में राग भैरव, अहिर भैरव और रामकली इस समय से संबद्ध हैं। (२) द्वितीय प्रहर — पूर्वाह्न (लगभग सुबह ९:०० से दोपहर १२:०० बजे): शब्दार्थ—दोपहर से पहले का समय। पारंपरिक जीवन में अध्ययन, कृषि, शिल्प, व्यापार और प्रशासन की गतिविधियाँ इस समय पूर्ण गति में होती हैं। संगीत में आसावरी, जौनपुरी और तोड़ी जैसे राग इस अवधि से जोड़े जाते हैं। (३) तृतीय प्रहर — मध्याह्न (लगभग दोपहर १२:०० से ३:०० बजे): शब्दार्थ—दिन का मध्य। यह भोजन, विश्राम तथा धार्मिक विधानों में मध्याह्न-संध्या और मध्याह्न भोग-आरती का समय है। संगीत में राग भीमपलासी और सारंग प्रायः दोपहर के आसपास गाए-बजाए जाते हैं। (४) चतुर्थ प्रहर — अपराह्न (लगभग दोपहर ३:०० से शाम ६:०० बजे): शब्दार्थ—दोपहर के बाद का समय। धूप ढलने लगती है, दिन के कार्यों का समापन होता है और सूर्यास्त-कालीन संध्या पूजा की तैयारी शुरू होती है।'
      },
      {
        headingEn: '3. Detailed Description of the Four Nighttime Prahars (Prahars 5 to 8: 6:00 PM – 6:00 AM Base)',
        headingHi: '3. रात्रि के चार प्रहरों का विस्तृत वर्णन (पंचम से अष्टम प्रहर: शाम ६:०० से सुबह ६:०० मानक आधार)',
        bodyEn:
          '(5) Fifth Prahar — Sandhyākāla & Early Night (पंचम प्रहर — संध्याकाल · ~6:00 PM – 9:00 PM): The threshold from day into night. Around sunset (sāyaṃ-sandhyā / pradoṣa), lamps are lit (dīpa-prajvalana), evening sandhyāvandana and temple ārati are performed, and families gather. Note that Sandhyā itself is the brief twilight junction rather than the entire three-hour prahar. In Hindustani music, Rāga Yaman (Kalyāṇa) and Bhūpālī inaugurate the evening cycle. (6) Sixth Prahar — Rātri Prathama Bhāga (षष्ठ प्रहर — रात्रि का पहला भाग · ~9:00 PM – 12:00 AM): External labor subsides; traditional life associated this period with sacred narrative (kathā), music, night prayers (śayana-ārati), and sleep preparation. Ragas such as Bihāg and Bāgeśrī are performed in this watch. (7) Seventh Prahar — Ardharātri / Niśītha (सप्तम प्रहर — अर्धरात्रि · ~12:00 AM – 3:00 AM): Literally "mid-night". Sacred festivals such as Kṛṣṇa Janmāṣṭamī and Mahāśivarātri (specifically the four-prahar nocturnal Śiva-pūjā and niśītha-kāla) accord special significance to midnight, as do specific Śaiva-Śākta contemplative rites (though not all Tantric practices occur at midnight). Deep-night ragas include Darbārī Kānhaḍā and Mālkauṃs. (8) Eighth Prahar — Antima Rātri & Toward Brahma-Muhūrta (अष्टम प्रहर — अंतिम रात्रि एवं प्रभात की ओर · ~3:00 AM – 6:00 AM): The final watch of night transitioning toward dawn (Uṣā). Critical distinction: Brahma-muhūrta (approximately 96 to 48 minutes before sunrise, lasting 48 minutes) falls within this eighth prahar, but the entire 3-hour eighth prahar must NOT be equated with Brahma-muhūrta. Pre-dawn ragas include Lalit and Bhairavī.',
        bodyHi:
          '(५) पंचम प्रहर — संध्याकाल और रात्रि का आरंभ (लगभग शाम ६:०० से रात ९:०० बजे): दिन से रात में प्रवेश की अवधि। सूर्यास्त के संधिकाल में दीप-प्रज्वलन, सायंसंध्या और आरती की जाती है। (ध्यान रहे कि "संध्या" एक संक्षिप्त संक्रमण-काल है, पूरे तीन घंटे का प्रहर नहीं।) संगीत में राग यमन (कल्याण) और भूपाली इस प्रहर के प्रमुख राग हैं। (६) षष्ठ प्रहर — रात्रि का पहला भाग (लगभग रात ९:०० से मध्यरात्रि १२:०० बजे): दैनिक गतिविधियाँ शांत होने लगती हैं; यह कथा-श्रवण, शयन-आरती और विश्राम का समय है। संगीत में राग बिहाग और बागेश्री इस समय से जुड़े हैं। (७) सप्तम प्रहर — अर्धरात्रि / निशीथ काल (लगभग रात १२:०० से सुबह ३:०० बजे): शब्दार्थ—रात का मध्य। श्रीकृष्ण जन्माष्टमी, महाशिवरात्रि की चार पहर की रात्रि-पूजा (विशेषतः निशीथ काल) और कुछ विशिष्ट शैव-शाक्त साधनाओं में अर्धरात्रि का विशेष महत्व है। संगीत में राग दरबारी कान्हड़ा और मालकौंस रात्रि के गंभीर प्रहरों से जुड़े हैं। (८) अष्टम प्रहर — अंतिम रात्रि और प्रभात की ओर (लगभग सुबह ३:०० से ६:०० बजे): अंधकार कम होने लगता है और वातावरण भोर की ओर बढ़ता है। महत्त्वपूर्ण स्पष्टीकरण: "ब्रह्ममुहूर्त" (सूर्योदय से लगभग ९६ से ४८ मिनट पूर्व का ४८ मिनट का विशेष मुहूर्त) इसी अष्टम प्रहर के भीतर आता है, किंतु पूरे तीन घंटे के अष्टम प्रहर को ब्रह्ममुहूर्त का समानार्थी मानना गलत होगा। भोर के रागों में ललित और भैरवी प्रमुख हैं।'
      },
      {
        headingEn: '4. Three Analytical Layers: Timekeeping, Religious Liturgy & Cultural/Musical Aesthetics',
        headingHi: '4. अध्ययन की तीन परतें: कालगणना, धार्मिक अनुष्ठान एवं राग-समय संस्कृति',
        bodyEn:
          'To avoid conflating astronomy with folklore, this archive separates three distinct layers in the study of Aṣṭa Prahar: (Layer 1 — Astronomical & Mathematical Timekeeping): The division of the 24-hour Ahorātra into 8 Praharas (3 hours each) and 30 Muhūrtas (48 minutes each), documented in Jyotiṣa treatises, Monier-Williams Sanskrit lexicon, and texts such as Śrī Caitanya-caritāmṛta (Madhya 20.390). (Layer 2 — Liturgical & Devotional Observance): How temple schedules (aṣṭa-yāma sevā in Vaiṣṇava temples, four-prahar Mahāśivarātri pūjā in Śaiva temples, and tri-sandhyā prayers) map onto the eight watches. (Layer 3 — Cultural, Literary & Rāga-Samaya Aesthetics): As studied by musicologists (e.g., Sujata Roy Manna and the Georgia Tech Computational and Cognitive Musicology Lab), Hindustani classical music links specific scale intervals (such as komal re/dha in sandhi-prakāśa ragas or tīvra ma in evening ragas) with specific Prahars as an aesthetic-contemplative tradition rather than a deterministic physiological law.',
        bodyHi:
          'इस विषय के वैज्ञानिक और सांस्कृतिक अध्ययन के लिए तीन परतों को अलग-अलग समझना उपयोगी है: (१. कालगणना): अहोरात्र का ८ प्रहरों (~३ घंटे प्रत्येक) और ३० मुहूर्तों (४८ मिनट प्रत्येक) में गणितीय विभाजन। (२. धार्मिक अनुष्ठान): मंदिरों की अष्टयाम सेवा (वैष्णव परंपरा में अष्टयाम लीला-स्मरण और शैव परंपरा में महाशिवरात्रि की चार प्रहर पूजा) तथा त्रिसंध्या उपासना। (३. सांस्कृतिक एवं राग-समय सिद्धांत): हिंदुस्तानी शास्त्रीय संगीत में स्वरों (जैसे संधि-प्रकाश रागों में कोमल ऋषभ-धैवत और संध्या में तीव्र मध्यम) का पहरों के भाव से सौन्दर्यात्मक संबंध।'
      }
    ],
    keyFindingsEn: [
      'One Ahorātra (24 hours) = 8 Praharas (~3 hours each in standard clock reckoning: 4 day + 4 night) = 30 Muhūrtas (48 minutes each).',
      'In solar reckoning (dinamāna/rātrimāna), the length of each Prahar expands or contracts seasonally between actual local sunrise and sunset.',
      'Brahma-muhūrta (~96 to 48 minutes before sunrise, lasting 48 minutes) occurs inside the 8th Prahar and must not be equated with the entire 3-hour 8th Prahar.'
    ],
    keyFindingsHi: [
      'एक पूर्ण अहोरात्र (२४ घंटे) = ८ प्रहर (मानक गणना में प्रत्येक ~३ घंटे: ४ दिन के + ४ रात के) = ३० मुहूर्त (प्रत्येक ४८ मिनट)।',
      'सूर्योदय-सूर्यास्त आधारित गणना (दिनमान/रात्रिमान) में प्रत्येक पहर की अवधि ऋतु और स्थान के अनुसार बदलती है।',
      'ब्रह्ममुहूर्त (सूर्योदय से लगभग ९६ से ४८ मिनट पूर्व, अवधि ४८ मिनट) अष्टम प्रहर का एक विशिष्ट भाग है; पूरे ३ घंटे के अष्टम प्रहर को ब्रह्ममुहूर्त नहीं मानना चाहिए।'
    ],
    metadata: [
      { labelEn: 'Sanskrit & Hindi Terms', labelHi: 'संस्कृत एवं हिंदी शब्द', valueEn: 'Prahara (प्रहर) · Pahar (पहर) · Yāma (याम) · Ahorātra (अहोरात्र)', valueHi: 'प्रहर · पहर · याम · अहोरात्र' },
      { labelEn: 'Standard Cycle', labelHi: 'मानक चक्र', valueEn: '8 Prahars × 3 Hours = 24 Hours (30 Muhūrtas × 48 Min)', valueHi: '८ प्रहर × ३ घंटे = २४ घंटे (३० मुहूर्त × ४८ मिनट)' },
      { labelEn: 'Musical Correspondence', labelHi: 'संगीत सिद्धांत', valueEn: 'Hindustani Rāga-Samaya Theory (Prahar-Based Rāga Allocation)', valueHi: 'हिंदुस्तानी शास्त्रीय संगीत का राग-समय सिद्धांत' },
      { labelEn: 'Primary & Scholarly Sources', labelHi: 'प्रमुख स्रोत', valueEn: 'Monier-Williams · Śrī Caitanya-caritāmṛta (Madhya 20.390) · Sujata Roy Manna · Georgia Tech CCM Lab', valueHi: 'मोनियर-विलियम्स शब्दकोश · श्रीचैतन्यचरितामृत (मध्य २०.३९०) · सुजाता रॉय मन्ना · Georgia Tech CCM Lab' }
    ],
    primarySourcesEn: 'Monier-Williams Sanskrit-English Dictionary (s.v. prahara) · Śrī Caitanya-caritāmṛta (Madhya 20.390) · Sujata Roy Manna, "The Concept of Time-Theory in Indian Ragas" · Georgia Tech Computational and Cognitive Musicology Lab',
    primarySourcesHi: 'मोनियर-विलियम्स संस्कृत शब्दकोश · श्रीचैतन्यचरितामृत (मध्य २०.३९०) · सुजाता रॉय मन्ना ("The Concept of Time-Theory in Indian Ragas") · Georgia Tech CCM Lab',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  },
  {
    slug: 'bhairavagana-taxonomy-kshetrapalas',
    categorySlug: 'ashta-bhairava',
    code: 'SHA-04',
    titleEn: 'Bhairavagaṇa (भैरवगण): Meaning, Aṣṭa Bhairava, 64-Bhairava Classifications & Guardian Taxonomy',
    titleHi: 'भैरवगण (भैरवगण): शब्दार्थ, अष्ट-भैरव, ६४-भैरव वर्गीकरण एवं क्षेत्रपाल-योगिनी-डाकिनी से तात्त्विक भेद',
    subtitleEn: 'Distinguishing Bhairava’s Retinue from Śiva’s Pramathagaṇas, Kṣetrapālas, Yoginīs, Ḍākinīs, and Vaiṣṇava Dvārapālas Across Āgamic & Purāṇic Literature',
    subtitleHi: 'शैव-शाक्त आगमों और पुराणों में भैरवगण, प्रमथगण, क्षेत्रपाल, योगिनी, डाकिनी तथा वैष्णव द्वारपालों का तुलनात्मक और स्रोत-सचेत वर्गीकरण',
    sanskritEpigraph: '॥ विश्वं बिभर्ति पूरयति रवयति इति भैरवः। तस्य अष्टकाष्टकभेदेन चतुःषष्टिः प्रकीर्तिताः ॥',
    epigraphTranslationEn: '"He who supports (bharana), nourishes, and sounds forth (ravana) the universe is Bhairava (Tantrāloka 1.96); through eight octads, His sixty-four manifestations are celebrated."',
    epigraphTranslationHi: '"जो विश्व का भरण-पोषण, रमण और संहार/नाद करते हैं, वे भैरव हैं (तन्त्रालोक १.९६); अष्टक-अष्टक भेद से उनके चौंसठ रूप कहे गए हैं।"',
    evidenceBadgeEn: 'ŚAIVA-ŚĀKTA ĀGAMA · GUARDIAN TAXONOMY',
    evidenceBadgeHi: 'शैव-शाक्त आगम · भैरवगण एवं क्षेत्रपाल वर्गीकरण',
    accentColor: '#FFBF38',
    summaryEn:
      'Establishes a clear philological and iconographic taxonomy for Bhairavagaṇa (भैरवगण)—explaining the Sanskrit etymology of Bhairava and gaṇa, the canonical Eight Bhairavas (Aṣṭa Bhairava), the source-verified 8×8 (64) Bhairava classifications in the Rudrayāmala and Śrīkaṇṭhīyasaṃhitā, the principal forms of Kāla Bhairava, Vaṭuka Bhairava, and Svacchanda Bhairava, and the precise distinctions separating Bhairavagaṇa from Śiva’s Kailāsa gaṇas (Nandī, Bhṛṅgī, Caṇḍīśa), Kṣetrapālas, Yoginīs, Ḍākinīs, and Vaiṣṇava guardians (Jaya–Vijaya).',
    summaryHi:
      'भैरवगण का स्पष्ट शास्त्रीय और प्रतिमाशास्त्रीय वर्गीकरण प्रस्तुत करता है—जिसमें भैरव और गण का संस्कृत व्युत्पत्ति-अर्थ, अष्ट भैरव, रुद्रयामल और श्रीकण्ठीयसंहिता में वर्णित ८×८ (६४) भैरव अष्टक, काल भैरव, वटुक भैरव और स्वच्छन्द भैरव के प्रमुख स्वरूप तथा शिव के कैलास-स्थित प्रमथगणों (नन्दी, भृंगी), क्षेत्रपालों, योगिनियों, डाकिनियों और वैष्णव द्वारपालों (जय–विजय) से उनका सटीक अंतर स्पष्ट किया गया है।',
    sections: [
      {
        headingEn: '1. Meaning of Bhairava and Gaṇa in Sanskrit & Trika Exegesis',
        headingHi: '1. भैरव और गण का संस्कृत व्युत्पत्ति-अर्थ एवं त्रिक दर्शन की व्याख्या',
        bodyEn:
          'In classical grammar, Bhairava derives from bhīru ("timid/fearful") with the vriddhi suffix -a, meaning "terrifying/formidable", yet in Abhinavagupta’s Tantrāloka (1.96–100) and Kṣemarāja’s Vijñānabhairava-uddyota, Bhairava is analyzed through nirukta etymology from the three syllables Bha (bharaṇa, sustaining the cosmos), Ra (ravaṇa/ramaṇa, withdrawing or sporting within the cosmos), and Va (vamana, projecting/emitting the cosmos)—signifying supreme non-dual consciousness enacting the cosmic functions. Gaṇa (गण) denotes a troop, retinue, assembly, or classified group. Thus, Bhairavagaṇa refers either to the collective host of Bhairava manifestations (such as the 8 or 64 Bhairavas) or to the fierce attendant troop accompanying Kāla Bhairava.',
        bodyHi:
          'व्याकरण की दृष्टि से "भैरव" का सामान्य अर्थ भीषण या भयहारी है, किंतु अभिनवगुप्त के तन्त्रालोक (१.९६–१००) में इसकी निरुक्त व्याख्या तीन अक्षरों से की गई है: "भ" (विश्व का भरण/धारण करना), "र" (रमण या संहार-प्रत्याहार करना), और "व" (वमन अर्थात् सृष्टि का प्रक्षेपण करना)—अर्थात् जो अखंड चेतना सृष्टि, स्थिति और संहार तीनों का संचालन करती है, वही भैरव है। "गण" का अर्थ समूह, दल या परिकर है। अतः भैरवगण का अर्थ भैरव के अष्ट/चौंसठ स्वरूपों का समूह अथवा कालभैरव के सहचर गणों का समुदाय है।'
      },
      {
        headingEn: '2. Distinguishing Bhairavagaṇa, Śiva-Gaṇas, Kṣetrapālas, Yoginīs & Ḍākinīs',
        headingHi: '2. भैरवगण, शिव के प्रमथगण, क्षेत्रपाल, योगिनी एवं डाकिनी में तात्त्विक अंतर',
        bodyEn:
          'In Śaiva and Śākta ritual architecture, five categories of retinue and guardian beings must not be conflated: (1) Śiva’s Kailāsa Gaṇas (Pramathagaṇa): Headed by Nandī (Nandikeśvara), महाकाल (Mahākāla), Bhṛṅgī, Vīrabhadra, and Caṇḍikeśvara, depicted in Purāṇas and temple dvāras as Śiva’s household attendants. (2) Bhairavagaṇa & Aṣṭa Bhairava: The eight directional manifestations of Bhairava (Asitāṅga, Ruru, Caṇḍa, Krodha, Unmatta, Kapāla, Bhīṣaṇa, Saṃhāra) and their eightfold octads (8 × 8 = 64 Bhairavas in Rudrayāmala / Tantrasāra), paired with the Eight Mātṛkās and Sixty-Four Yoginīs. (3) Kṣetrapālas (Guardians of Sacred Territory): Specific territorial protectors installed at the northeast (Īśāna) or perimeter of a temple/village and paired with each of the 51 Śakti Pīṭhas. While many Kṣetrapālas are forms of Bhairava (or Baṭuka), Kṣetrapāla is a functional office of spatial protection. (4) Yoginīs & Mātṛkās: Sovereign feminine śakti-powers arranged in circles of 8, 9, 42, 64, or 81 around the central Bhairava bindu. (5) Ḍākinīs (and Śākinīs, Rākiṇīs, Lākinīs, Kākinīs, Hākinīs): Subtle-body cakra guardians governing the bodily dhātus (tissues) in Kubjikāmata and Ṣaṭ-cakra-nirūpaṇa.',
        bodyHi:
          'शैव और शाक्त ग्रन्थों में पाँच संबंधित वर्गों को अलग-अलग समझना आवश्यक है: (१) शिव के प्रमथगण: नन्दी, महाकाल, भृंगी, वीरभद्र और चण्डीश—जो कैलास और शिव मंदिरों के प्रमुख गण हैं। (२) अष्ट भैरव एवं चौंसठ भैरवगण: असितांग से संहार तक आठ दिशात्मक भैरव और उनके अष्टक-भेद (रुद्रयामल/तन्त्रसार में वर्णित ६४ भैरव)। (३) क्षेत्रपाल: किसी तीर्थ, मंदिर के ईशान कोण या ग्राम की रक्षा करने वाले अधिष्ठाता (तथा ५१ शक्तिपीठों के रक्षक भैरव)। (४) मातृका एवं योगिनी चक्र: केंद्रीय भैरव बिन्दु के चारों ओर ८, ६४ या ८१ के मण्डल में अधिष्ठित स्त्री-शक्तियाँ। (५) डाकिनी-आदि षट्चक्र शक्तियाँ: सूक्ष्म-शरीर के छह चक्रों और सप्त-धातुओं की अधिष्ठात्री शक्तियाँ (डाकिनी, राकिनी, लाकिनी, काकिनी, शाकिनी, हाकिनी)।'
      },
      {
        headingEn: '3. Kāla Bhairava, Vaṭuka Bhairava & Svacchanda Bhairava',
        headingHi: '3. तीन प्रमुख भैरव स्वरूप: काल भैरव, वटुक भैरव एवं स्वच्छन्द भैरव',
        bodyEn:
          'Beyond the directional Aṣṭa Bhairava octants, three principal liturgical forms predominate across primary texts: (1) Kāla Bhairava (कालभैरव): The supreme sovereign of Time (Kāla), bearer of Brahmā’s fifth kapāla in the Śiva Purāṇa and Kāśī Khaṇḍa, and chief magistrate (Kotwāl) of Varanasi, accompanied by the dog (śvāna) vāhana. (2) Vaṭuka Bhairava (वटुक भैरव): Venerated as the youthful (baṭuka) rescuer from distress (Āpaduddhāraṇa Baṭuka Bhairava in Rudrayāmala / Viśvasāra Tantra), depicted in Sāttvika (white, crystal-like), Rājasika (red, solar), and Tāmasika (blue-black) dhyāna-ślokas. (3) Svacchanda Bhairava (स्वच्छन्द भैरव): The five-faced (pañcavaktra), eighteen-armed sovereign deity of the Svacchanda Tantra in Kashmir Śaivism, paired with consort Aghoreśvarī.',
        bodyHi:
          'दिशात्मक अष्ट भैरवों के अतिरिक्त तीन प्रमुख शास्त्रीय स्वरूपों की उपासना सर्वाधिक प्रसिद्ध है: (१) काल भैरव: काल के अधिपति, शिव पुराण और काशी खण्ड में वर्णित काशी के कोतवाल (वाहन: श्वान)। (२) वटुक भैरव (आपदुद्धारण बटुक भैरव): रुद्रयामल और विश्वसार तन्त्र में वर्णित बाल-स्वरूप रक्षक भैरव, जिनके सात्त्विक (श्वेत), राजस (रक्त) और तामस (नील) तीन ध्यान-भेद प्रसिद्ध हैं। (३) स्वच्छन्द भैरव: कश्मीर शैव परम्परा के "स्वच्छन्द तन्त्र" के पञ्चमुखी और अष्टादशभुज आराध्य स्वरूप (शक्ति: अघोरेश्वरी)।'
      }
    ],
    keyFindingsEn: [
      'Clarifies the nirukta etymology of Bhairava (Bha = sustaining, Ra = withdrawing, Va = projecting) in Abhinavagupta’s Tantrāloka.',
      'Distinguishes Bhairavagaṇa from Śiva’s Kailāsa Pramathagaṇas, Kṣetrapālas, 64 Yoginīs, cakra Ḍākinīs, and Vaiṣṇava Dvārapālas.',
      'Documents Kāla Bhairava, Vaṭuka Bhairava (Sāttvika/Rājasika/Tāmasika forms), and five-faced Svacchanda Bhairava.'
    ],
    keyFindingsHi: [
      'अभिनवगुप्त के तन्त्रालोक के अनुसार भैरव की निरुक्त व्याख्या (भ = भरण, र = रमण/संहार, व = वमन/सृष्टि) को स्पष्ट करता है।',
      'भैरवगण को शिव के प्रमथगणों, क्षेत्रपालों, ६४ योगिनियों, षट्चक्र की डाकिनियों और वैष्णव द्वारपालों (जय–विजय) से स्पष्ट रूप से पृथक करता है।',
      'काल भैरव, वटुक भैरव (सात्त्विक, राजस, तामस ध्यान) और पञ्चमुखी स्वच्छन्द भैरव के शास्त्रीय प्रमाण प्रस्तुत करता है।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Term', labelHi: 'संस्कृत संज्ञा', valueEn: 'Bhairavagaṇa, Aṣṭa Bhairava & Kṣetrapāla', valueHi: 'भैरवगण, अष्ट-भैरव एवं क्षेत्रपाल' },
      { labelEn: 'Principal Forms', labelHi: 'प्रमुख शास्त्रीय स्वरूप', valueEn: 'Kāla Bhairava · Vaṭuka Bhairava · Svacchanda Bhairava · Aṣṭa Bhairava', valueHi: 'काल भैरव · वटुक भैरव · स्वच्छन्द भैरव · अष्ट भैरव' },
      { labelEn: 'Primary Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Svacchanda Tantra · Tantrāloka · Śiva Purāṇa · Rudrayāmala · Tantrasāra', valueHi: 'स्वच्छन्द तन्त्र · तन्त्रालोक · शिव पुराण · रुद्रयामल · तन्त्रसार' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Svacchanda Tantra · Tantrāloka (Abhinavagupta, Ch. 1) · Śiva Purāṇa (Śatarudra Saṃhitā) · Rudrayāmala · Tantrasāra (Kṛṣṇānanda Āgamavāgīśa)',
    primarySourcesHi: 'स्वच्छन्द तन्त्र · तन्त्रालोक (अभिनवगुप्त, प्रथम आह्निक) · शिव पुराण (शतरुद्र संहिता) · रुद्रयामल तन्त्र · तन्त्रसार',
    authorEn: 'Ram Ashok Kumar',
    authorHi: 'राम अशोक कुमार'
  }
];

// ============================================================================
// TWO DEDICATED SUB-PART SEALS OF AGHORA SAMPRADĀYA
// Sub-Part I: Ghora Sampradāya (11/12 Bhedas)
// Sub-Part II: Kāpālika Sampradāya & Somāsiddhānta (5 Bhedas)
// ============================================================================
export const AGHORA_SUBPART_SEALS: SpecialCircularSeal[] = [
  {
    id: 'seal-ghora-11-bhedas',
    sealNumber: 'SUB-PART I',
    parentSealId: 'seal-aghora-sampradaya',
    categorySlug: 'ashta-bhairava',
    articleSlug: 'ghora-sampradaya-11-bhedas-study',
    sanskritSeal: 'घोर सम्प्रदाय · ११/१२ भेद',
    shortTitleEn: 'Ghora Sampradāya (11/12 Bhedas)',
    shortTitleHi: 'घोर सम्प्रदाय (११/१२ भेद)',
    subtitleEn: 'Sub-Part I of Aghora Sampradāya: Rakta, Śukla, Vinmūtra, Bhakṣa to Siddha (12 Terms)',
    subtitleHi: 'अघोर सम्प्रदाय का उप-भाग I: रक्त, शुक्ल, विन्मूत्र से सिद्ध तक १२ नामों की समीक्षा',
    domainBadgeEn: 'AGHORA SUB-PART I · SOURCE AUDIT',
    domainBadgeHi: 'अघोर उप-भाग I · स्रोत पुष्टि लंबित',
    accentColor: '#EF4444',
    motifType: 'ghora11',
    isPendingVerificationNote: true
  },
  {
    id: 'seal-kapalika-5-bhedas',
    sealNumber: 'SUB-PART II',
    parentSealId: 'seal-aghora-sampradaya',
    categorySlug: 'ashta-bhairava',
    articleSlug: 'kapalika-sampradaya-5-bhedas-somasiddhanta',
    sanskritSeal: 'कापालिक · सोमसिद्धान्त · ५ भेद',
    shortTitleEn: 'Kāpālika Sampradāya (5 Bhedas)',
    shortTitleHi: 'कापालिक सम्प्रदाय (५ भेद)',
    subtitleEn: 'Sub-Part II of Aghora Sampradāya: Somāsiddhānta, 12 Gurus & Indra–Deva–Rudra–Vidyā–Siddha',
    subtitleHi: 'अघोर सम्प्रदाय का उप-भाग II: सोमसिद्धान्त, १२ गुरु एवं इन्द्र–देव–रुद्र–विद्या–सिद्ध',
    domainBadgeEn: 'AGHORA SUB-PART II · SOURCE AUDIT',
    domainBadgeHi: 'अघोर उप-भाग II · स्रोत समीक्षा',
    accentColor: '#D97706',
    motifType: 'kapalika5',
    isPendingVerificationNote: true
  }
];

// Also attach the Ghora 11/12 Bhedas and Kapalika 5 Bhedas tables directly to Aghora Sampradāya
ARTICLE_COMPARISON_TABLES['aghora-sampradaya-history-theology'] = [
  ...(ARTICLE_COMPARISON_TABLES['ghora-sampradaya-11-bhedas-study'] || []),
  ...(ARTICLE_COMPARISON_TABLES['kapalika-sampradaya-5-bhedas-somasiddhanta'] || [])
];

// ============================================================================
// DEDICATED CIRCULAR ENGRAVED SEALS (विशेष शोध मुद्रिकाएँ)
// Ghora 11/12 Bhedas & Kāpālika 5 Bhedas are organized as Sub-Parts inside SEAL 02 (Aghora Sampradāya)
// ============================================================================
export const SPECIAL_CIRCULAR_SEALS: SpecialCircularSeal[] = [
  {
    id: 'seal-jaya-vijaya',
    sealNumber: 'SEAL 01',
    categorySlug: 'cags-field-archive',
    articleSlug: 'jaya-vijaya-vaikuntha-dvarapalas',
    sanskritSeal: 'जय–विजय · वैकुण्ठ द्वारपाल',
    shortTitleEn: 'Jaya & Vijaya',
    shortTitleHi: 'जय और विजय',
    subtitleEn: 'Vaikuṇṭha Gatekeepers, 4 Kumāras Curse & 3 Births',
    subtitleHi: 'वैकुण्ठ के द्वारपाल, कुमारों का शाप एवं ३ जन्म',
    domainBadgeEn: 'VAIṢṆAVA LOKA · DVĀRAPĀLA',
    domainBadgeHi: 'वैष्णव लोक · द्वारपाल तत्त्व',
    accentColor: '#38BDF8',
    motifType: 'vaishnava'
  },
  {
    id: 'seal-aghora-sampradaya',
    sealNumber: 'SEAL 02',
    categorySlug: 'ashta-bhairava',
    articleSlug: 'aghora-sampradaya-history-theology',
    sanskritSeal: 'अघोर सम्प्रदाय · क्रीं कुण्ड',
    shortTitleEn: 'Aghora Sampradāya',
    shortTitleHi: 'अघोर सम्प्रदाय',
    subtitleEn: 'Etymology, 3 Historical Strata, Bābā Kīnārām + 2 Sub-Parts (Ghora 11 Bhedas & Kāpālika 5 Bhedas)',
    subtitleHi: 'अघोर शब्दार्थ, ३ ऐतिहासिक स्तर, बाबा कीनाराम + २ उप-भाग (घोर ११ भेद व कापालिक ५ भेद)',
    domainBadgeEn: 'ŚAIVA RAHASYA · AGHORA & 2 SUB-PARTS',
    domainBadgeHi: 'शैव रहस्य · अघोर एवं २ उप-भाग',
    accentColor: '#F59E0B',
    motifType: 'aghora',
    subParts: AGHORA_SUBPART_SEALS
  },
  {
    id: 'seal-ashta-prahar',
    sealNumber: 'SEAL 03',
    categorySlug: 'the-14-lokas',
    articleSlug: 'samaya-ashta-prahar-timekeeping',
    sanskritSeal: 'समय एवं अष्ट प्रहर · काल-तत्त्व',
    shortTitleEn: 'Samaya & 8 Prahars',
    shortTitleHi: 'समय और अष्ट पहर',
    subtitleEn: '8 Prahars of 24h Cycle, Muhūrta, Sandhyā & Rāga-Samaya',
    subtitleHi: '२४ घंटे के ८ प्रहर, मुहूर्त, संध्या एवं राग-समय सिद्धांत',
    domainBadgeEn: 'KĀLA TATTVA · TIMEKEEPING',
    domainBadgeHi: 'काल तत्त्व · भारतीय कालगणना',
    accentColor: '#FBBF24',
    motifType: 'prahar8'
  },
  {
    id: 'seal-bhairavagana',
    sealNumber: 'SEAL 04',
    categorySlug: 'ashta-bhairava',
    articleSlug: 'bhairavagana-taxonomy-kshetrapalas',
    sanskritSeal: 'भैरवगण · क्षेत्रपाल · बटुक',
    shortTitleEn: 'Bhairavagaṇa Codex',
    shortTitleHi: 'भैरवगण एवं क्षेत्रपाल',
    subtitleEn: 'Aṣṭa Bhairava, 64-Bhairava & Guardian Distinctions',
    subtitleHi: 'अष्ट-भैरव, ६४-भैरव, प्रमथगण एवं क्षेत्रपाल भेद',
    domainBadgeEn: 'ŚAIVA RAHASYA · GUARDIANS',
    domainBadgeHi: 'शैव रहस्य · भैरवगण',
    accentColor: '#FFBF38',
    motifType: 'bhairavagana'
  },
  {
    id: 'seal-kalikula-srikula',
    sealNumber: 'SEAL 05',
    categorySlug: 'eight-matrikas',
    articleSlug: 'kalikula-srikula-streams',
    sanskritSeal: 'कालीकुल एवं श्रीकुल · आम्नाय',
    shortTitleEn: 'Kālīkula & Śrīkula',
    shortTitleHi: 'कालीकुल एवं श्रीकुल',
    subtitleEn: 'The Two Great Streams of Śākta Tantra & Krama',
    subtitleHi: 'शाक्त तन्त्र की दो महाधाराएँ एवं आम्नाय समन्वय',
    domainBadgeEn: 'ŚAKTI TATTVA · KULA STREAMS',
    domainBadgeHi: 'शक्ति तत्त्व · कुल-परम्परा',
    accentColor: '#EC4899',
    motifType: 'shakta'
  },
  {
    id: 'seal-mahavidya-navadurga',
    sealNumber: 'SEAL 06',
    categorySlug: 'eight-matrikas',
    articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses',
    sanskritSeal: 'दशमहाविद्या · नवदुर्गा',
    shortTitleEn: '10 Mahāvidyā & 9 Durgā',
    shortTitleHi: 'दशमहाविद्या एवं नवदुर्गा',
    subtitleEn: 'Ten Wisdom Goddesses & Nine Forms of Navadurgā',
    subtitleHi: 'दस महाविद्याएँ एवं नवदुर्गा के नौ शास्त्रीय स्वरूप',
    domainBadgeEn: 'ŚAKTI TATTVA · DEVĪ MANDALA',
    domainBadgeHi: 'शक्ति तत्त्व · देवी मण्डल',
    accentColor: '#F43F5E',
    motifType: 'mahavidya'
  }
];
