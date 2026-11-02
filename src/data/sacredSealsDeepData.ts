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
        ['1', 'इन्द्रजाली · Indrajali', 'Indra + jāla ("Net of Indra") + -in: practitioner or lineage associated with Indrajāla (sacred illusion, wonder-working, or cosmic net)', 'Indrajāla appears in Atharvavedic, Tantric, and Dāmaratantra traditions for wonder-working rites and the illusory weave of māyā', 'Does Indrajali denote a Kāpālika sub-order specializing in Indrajāla-tantra or a Siddha-lineage classification?'],
        ['2', 'देवजाली · Devjali', 'Deva + jāla ("Divine Net / Network of Deities") + -in: initiate or stream associated with the luminous deity-matrix', 'Relates to the mandala-network (jāla) of Devas and Śaiva initiatory lineages bearing divine classifications', 'Does Devjali classify a deity-mandala observance (deva-jāla) within the fivefold Kāpālika taxonomy?'],
        ['3', 'रुद्रजाली · Rudrajali', 'Rudra + jāla ("Net/Matrix of Rudra") + -in: fierce Rudra-centered lineage or practitioner of the Rudrabheda stream', 'Central to fierce Śaiva-Bhairava practice; resonates with the 18 Rudrabheda Āgamas and Rudra-grantha networks', 'Does Rudrajali reflect the Rudrabheda Āgamic stream and fierce Rudra-Bhairava kapāla-vrata?'],
        ['4', 'विद्याजाली · Vidyajali', 'Vidyā + jāla ("Network of Mantric Vidyās") + -in: adept or branch centered on the Vidyāpīṭha goddess-mantra corpus', 'The Bhairava Tantras are divided into Mantrapīṭha and Vidyāpīṭha; Vidyājāla denotes a lattice of esoteric mantra-vidyās', 'Does Vidyajali point to the canonical Vidyāpīṭha division of the Bhairava Tantras within Kāpālika practice?'],
        ['5', 'सिद्धजाली · Siddhajali', 'Siddha + jāla ("Lineage-Net of Perfected Masters") + -in: stream of accomplished Siddha-yogins (Siddha-jāla / Siddha-santāna)', 'The 12 Kāpālika gurus and 12 disciples in Sarvatantra/Śābara lists are revered as the Siddha network', 'Does Siddhajali denote the Siddha-jāla / Siddha-santāna lineage of perfected Kāpālika masters?']
      ],
      rowsHi: [
        ['१', 'इन्द्रजाली · Indrajali', 'इन्द्रजाल + इन् = इन्द्रजाल (माया-जाल, ऐन्द्रजालिक विद्या या ब्रह्माण्डीय जाल) से युक्त साधक/शाखा', 'अथर्ववेदीय परिशिष्ट, डामर तन्त्र और तांत्रिक साहित्य में "इन्द्रजाल" एवं कौतुक-सिद्धियों का उल्लेख मिलता है', 'क्या "इन्द्रजाली" इन्द्रजाल-तन्त्र या माया-तत्त्व की साधना करने वाली कापालिक उपशाखा का नाम है?'],
        ['२', 'देवजाली · Devjali', 'देवजाल + इन् = देव-मण्डल या दिव्य-जाल की उपासना से संबद्ध साधक-वर्ग', 'तांत्रिक मण्डल-विधान में देवताओं के समूह या शक्ति-जाल के संदर्भ में प्रयुक्त', 'क्या "देवजाली" देव-मण्डल उपासना से जुड़ी कापालिक शाखा को दर्शाता है?'],
        ['३', 'रुद्रजाली · Rudrajali', 'रुद्रजाल + इन् = उग्र रुद्र-भैरव के शक्ति-जाल एवं रुद्रभेद आगम-धारा से संबद्ध', '२८ शैव आगमों में १८ रुद्रभेद आगम हैं तथा कापालिक साधना में उग्र रुद्र-भैरव की प्रधानता है', 'क्या "रुद्रजाली" रुद्रभेद आगम-परंपरा या उग्र रुद्र-कपाल व्रत की शाखा का सूचक है?'],
        ['४', 'विद्याजाली · Vidyajali', 'विद्याजाल + इन् = परा-विद्या एवं मन्त्र-विद्याओं के जाल (विद्यापीठ) का साधक/वर्ग', 'भैरव तन्त्रों का प्रसिद्ध विभाजन "मन्त्रपीठ" और "विद्यापीठ" (देवी-मन्त्र प्रधान तन्त्र) के रूप में हुआ है', 'क्या "विद्याजाली" भैरव आगमों के "विद्यापीठ" आम्नाय से जुड़ी कापालिक धारा को दर्शाता है?'],
        ['५', 'सिद्धजाली · Siddhajali', 'सिद्धजाल + इन् = सिद्ध आचार्यों के मण्डल (सिद्ध-जाल / सिद्ध-सन्तान) से संबद्ध पूर्ण साधक', 'सर्वतन्त्र और नाथ-कापालिक सूचियों में १२ गुरुओं और १२ शिष्यों को सिद्ध-परंपरा से जोड़ा गया है', 'क्या "सिद्धजाली" १२ कापालिक सिद्ध-गुरुओं की "सिद्ध-सन्तान" परंपरा या सिद्ध-वर्ग का संकेत है?']
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
          '5 Bhedas of Kāpālika Sampradāya (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali)',
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
          'कापालिक सम्प्रदाय के ५ भेद (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली)',
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
  ],
  'dasa-mahavidya-ten-wisdom-goddesses': [
    {
      id: 'table-mahavidya-10-comparative-system',
      articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses',
      titleEn: 'The Ten Mahāvidyās — Comparative Theological, Iconographic & Philosophical Framework',
      titleHi: 'दशमहाविद्या — तुलनात्मक धर्मशास्त्रीय, प्रतिमाशास्त्रीय एवं दार्शनिक रूपरेखा',
      captionEn:
        'A comparative interpretive framework across the ten Great Wisdom Goddesses (Daśa Mahāvidyā). Note: Recurring associations and symbolic themes vary across individual Tantric scriptures, regional lineages, and iconographic forms (cf. David Kinsley; Jae-Eun Shin).',
      captionHi:
        'दस महाविद्याओं (दशमहाविद्या) की तुलनात्मक दार्शनिक एवं प्रतिमाशास्त्रीय रूपरेखा। विशेष टिप्पणी: विभिन्न तांत्रिक ग्रन्थों, आम्नायों और क्षेत्रीय परम्पराओं में इनके क्रम और प्रतीकात्मक अर्थों में विविधता मिलती है।',
      headersEn: ['#', 'Mahāvidyā (Devanāgarī & IAST)', 'Core Associations & Familiar Iconography', 'Central Theme', 'Question for Philosophical Research'],
      headersHi: ['क्र.', 'महाविद्या (देवनागरी एवं IAST)', 'मुख्य संबद्धता एवं प्रमुख प्रतिमाशास्त्रीय लक्षण', 'केंद्रीय विषय', 'दार्शनिक शोध हेतु मुख्य प्रश्न'],
      rowsEn: [
        [
          '1',
          'काली · Kālī (Kālikā) — The Power of Time',
          'Time, death, transformation, dissolution of limiting identities & maternal liberation; dark/black complexion, disheveled hair, garland of skulls, standing upon Śiva',
          'Time and dissolution',
          'What happens to identity when all forms are impermanent?'
        ],
        [
          '2',
          'तारा · Tārā — The Saviouress',
          'Protection, deliverance across danger, and liberating speech; blue/dark coloration, fierce expression, weapons/ritual implements, cremation-ground imagery (distinct from yet historically studied alongside Buddhist Tārā)',
          'Deliverance and protection',
          'What does it mean to cross beyond danger or suffering?'
        ],
        [
          '3',
          'त्रिपुरसुन्दरी · Tripurasundarī (Ṣoḍaśī · Lalitā) — Beauty of the Three Worlds',
          'Central to Śrīvidyā & Śrīcakra; youthful radiant form, red garments, jeweled crown, four arms holding sugarcane bow, five flowery arrows, noose (pāśa), and goad (aṅkuśa)',
          'Beauty and sovereignty',
          'How can the manifested universe express divine harmony?'
        ],
        [
          '4',
          'भुवनेश्वरी · Bhuvaneśvarī — The Queen of the Worlds',
          'Cosmos as the spatial expanse in which manifestation unfolds; regal radiant Goddess with elaborate ornaments, holding noose and goad with gestures of abhaya (reassurance) and varada (blessing)',
          'Cosmic expanse',
          'How is the universe understood as a domain of divine power?'
        ],
        [
          '5',
          'त्रिपुरभैरवी · Tripurā Bhairavī — The Fierce Radiance',
          'Fierce divine power, tapas, discipline, and transformative energy; red/fiery coloration, crown, multiple arms with weapons or ritual implements, combining royal and ascetic intensity',
          'Intensity and transformation',
          'What is the role of discipline and formidable energy?'
        ],
        [
          '6',
          'छिन्नमस्ता · Chhinnamastā — The Self-Decapitated Goddess',
          'Self-sacrifice, circulation of vital life-force, and the paradox of selfhood; stands holding her own severed head while three streams of blood nourish her head and two attendant figures',
          'Sacrifice and life force',
          'How are giving, nourishment, and destruction interconnected?'
        ],
        [
          '7',
          'धूमावती · Dhūmāvatī — The Smoky Goddess',
          'Smoke (dhūma), absence, deprivation, old age, and widowhood; elderly woman with disheveled hair, worn clothing, winnowing basket (śūrpa), and crow-associated austerity',
          'Absence and impermanence',
          'Can the sacred be recognized in loss and deprivation?'
        ],
        [
          '8',
          'बगलामुखी · Bagalāmukhī (Bagalā) — The Power of Arresting',
          'Arresting, restraining, or immobilizing hostile speech and action; yellow/golden coloration, yellow garments, seated on a throne, restraining an adversary’s tongue with a club raised',
          'Arrest and restraint',
          'What does it mean to interrupt harmful action or speech?'
        ],
        [
          '9',
          'मातङ्गी · Mātaṅgī — The Goddess of Speech and Art',
          'Spoken language, music, learning, artistic expression, and knowledge challenging social boundaries; dark/emerald-greenish hue, royal throne, veena (lute), and affinities with yet distinct from Sarasvatī',
          'Speech and expression',
          'How are knowledge, language, art, and authority related?'
        ],
        [
          '10',
          'कमला · Kamalā (Kamalātmikā) — The Lotus Goddess',
          'Prosperity, fertility, auspiciousness, beauty, and flourishing; golden complexion, seated on a lotus, holding lotuses while elephants pour lustral water over her (closely identified with Lakṣmī)',
          'Prosperity and auspiciousness',
          'How should abundance and spiritual life be understood together?'
        ]
      ],
      rowsHi: [
        [
          '१',
          'काली · Kālī (कालिका) — काल की अधिष्ठात्री शक्ति',
          'काल, मृत्यु, रूपांतरण, सीमित अहं का लय एवं मातृवत् करुणा; श्यामल/कृष्ण वर्ण, मुक्त केश, मुण्डमाला, खड्ग एवं शिव के वक्ष पर स्थित मुद्रा',
          'काल एवं लय (Time & Dissolution)',
          'जब समस्त रूप अनित्य हैं, तब अस्मिता (Identity) का स्वरूप क्या रहता है?'
        ],
        [
          '२',
          'तारा · Tārā — तारिणी एवं संकट-मोचनी शक्ति',
          'रक्षा, भव-संकट से पार लगाना एवं वाक्-शक्ति; नील/श्यामल वर्ण, उग्र मुद्रा, कर्तरी-खड्ग-पद्म एवं श्मशान-वास (हिन्दू एवं बौद्ध तारा परंपराओं का तुलनात्मक ऐतिहासिक संदर्भ)',
          'उद्धार एवं संरक्षण (Deliverance & Protection)',
          'भय, संकट या दुःख के पार जाने (तरण) का वास्तविक दार्शनिक अर्थ क्या है?'
        ],
        [
          '३',
          'त्रिपुरसुन्दरी · Tripurasundarī (षोडशी · ललिता) — त्रैलोक्य-सुन्दरी',
          'श्रीविद्या एवं श्रीचक्र की अधिष्ठात्री; अरुण आभा, रत्नजटित मुकुट, चतुर्भुज रूप में इक्षु-धनुष, पंच-पुष्पबाण, पाश और अंकुश धारिणी',
          'सौन्दर्य एवं ऐश्वर्य-सम्पन्न संप्रभुता',
          'प्रकट ब्रह्माण्ड दिव्य सामरस्य और सौन्दर्य की अभिव्यक्ति कैसे बनता है?'
        ],
        [
          '४',
          'भुवनेश्वरी · Bhuvaneśvarī — भुवनों की अधीश्वरी',
          'ब्रह्माण्डीय आकाश एवं सृष्टि के विस्तार की स्वामिनी; सौम्य राजकीय तेज, पाश, अंकुश तथा अभय एवं वरद मुद्रा से युक्त',
          'ब्रह्माण्डीय विस्तार (Cosmic Expanse)',
          'संपूर्ण विश्व को पराशक्ति के चिन्मय क्षेत्र (Domain) के रूप में कैसे समझा जाए?'
        ],
        [
          '५',
          'त्रिपुरभैरवी · Tripurā Bhairavī — प्रचण्ड तेज एवं तपःशक्ति',
          'उग्र दिव्य शक्ति, अनुशासन, तप एवं रूपांतरणकारी ऊर्जा; रक्त/अग्निवर्ण आभा, मुकुट, बहुभुजाओं में शस्त्र अथवा जपमाला-पुस्तक',
          'तीव्रता एवं रूपांतरण (Intensity & Transformation)',
          'साधना में कठोर अनुशासन और प्रचण्ड ऊर्जा की क्या भूमिका है?'
        ],
        [
          '६',
          'छिन्नमस्ता · Chhinnamastā — स्व-शीर्षच्छेदिनी महाविद्या',
          'आत्म-त्याग, प्राण-शक्ति का संचरण, जीवन-मृत्यु का अंतर्संबंध एवं अहं का विखंडन; स्व-कटे मस्तक को हाथ में धारण किए तीन रक्त-धाराओं से स्वयं व दो सहचरियों का पोषण',
          'त्याग एवं प्राण-शक्ति (Sacrifice & Life Force)',
          'उत्सर्ग (त्याग), पोषण और संहार एक-दूसरे से किस प्रकार जुड़े हैं?'
        ],
        [
          '७',
          'धूमावती · Dhūmāvatī — धूम्र-रूपा एवं अभाव में निहित सत्य',
          'धूम (धुआँ), अभाव, वृद्धावस्था, वैधव्य एवं लौकिक समृद्धि से बहिष्कृत यथार्थ; वृद्धा स्वरूप, शूर्प (सूप) और काक-ध्वज रथ से संबद्ध',
          'अभाव एवं अनित्यता (Absence & Impermanence)',
          'क्या हानि, रिक्तता और अभाव में भी पवित्र सत्ता का साक्षात्कार संभव है?'
        ],
        [
          '८',
          'बगलामुखी · Bagalāmukhī (बगला) — स्तम्भन शक्ति',
          'शत्रुतापूर्ण वाणी, गति और आक्रामक क्रियाओं का स्तम्भन (रोकना); पीत (पीला/स्वर्ण) वर्ण, पीताम्बर, सिंहासन पर आसीन होकर विरोधी की जिह्वा को नियंत्रित करती हुईं',
          'स्तम्भन एवं नियंत्रण (Arrest & Restraint)',
          'हानिकारक वाणी या आक्रामक क्रिया को बाधित/स्तम्भित करने का क्या तात्पर्य है?'
        ],
        [
          '९',
          'मातङ्गी · Mātaṅgī — वाक्, संगीत एवं कला की अधिष्ठात्री',
          'वाणी, संगीत, विद्या, कलात्मक अभिव्यक्ति एवं सामाजिक सीमाओं का अतिक्रमण करने वाला ज्ञान; मरकत-श्यामल वर्ण, वीणा-धारिणी, सरस्वती के सदृश किंतु विशिष्ट तांत्रिक स्वरूप',
          'वाणी एवं अभिव्यक्ति (Speech & Expression)',
          'ज्ञान, भाषा, कला और सामाजिक अधिकार परस्पर किस प्रकार संबद्ध हैं?'
        ],
        [
          '१०',
          'कमला · Kamalā (कमलात्मिका) — पद्म-वासिनी ऐश्वर्य शक्ति',
          'समृद्धि, उर्वरता, मांगल्य, सौन्दर्य एवं प्रचुरता; स्वर्ण आभा, पद्मासन, कर-कमलों में पद्म एवं गजों द्वारा अभिषेक (लक्ष्मी से प्रगाढ़ तादात्म्य)',
          'समृद्धि एवं मांगल्य (Prosperity & Auspiciousness)',
          'भौतिक प्रचुरता और आध्यात्मिक जीवन को एक साथ कैसे समझा जाना चाहिए?'
        ]
      ]
    },
    {
      id: 'table-mahavidya-primary-scholarly-sources',
      articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses',
      titleEn: 'Primary Texts, Tantric Compendia & Modern Scholarly Literature on the Mahāvidyās',
      titleHi: 'दशमहाविद्या अध्ययन के प्रमुख शास्त्रीय ग्रन्थ एवं आधुनिक अकादमिक शोध-साहित्य',
      captionEn:
        'Foundational scriptural and peer-reviewed sources for documenting textual history, iconography, and theological debates.',
      captionHi:
        'दशमहाविद्याओं के ग्रंथीय इतिहास, प्रतिमाशास्त्र और दार्शनिक विमर्श के प्रलेखन हेतु प्रमुख प्राथमिक एवं अकादमिक स्रोत।',
      headersEn: ['#', 'Source / Author', 'Category & Publication Context', 'Significance for the Mahāvidyā Archive'],
      headersHi: ['क्र.', 'ग्रन्थ / लेखक', 'श्रेणी एवं प्रकाशन संदर्भ', 'महाविद्या अभिलेखागार के लिए महत्त्व'],
      rowsEn: [
        [
          '1',
          'David Kinsley — Tantric Visions of the Divine Feminine: The Ten Mahavidyas',
          'Modern Academic Monograph · University of California Press (1997)',
          'Comprehensive scholarly study of the ten Mahāvidyās, their individual identities, mythology, iconography, and theological relationships.'
        ],
        [
          '2',
          'Jae-Eun Shin — Change, Continuity and Complexity: The Mahavidyas in East Indian Sakta Traditions',
          'Modern Historical Scholarship · Routledge (2018)',
          'Examines the historical development of the Mahāvidyās in eastern Indian Śākta traditions, regional epigraphy, Purāṇic synthesis, and complexity of grouping.'
        ],
        [
          '3',
          'The Devī Māhātmya (Mārkaṇḍeya Purāṇa)',
          'Primary Purāṇic Scripture (c. 5th–6th century CE)',
          'Foundational text for the wider history of Hindu Goddess theology (Kālī, Ambikā, Cāmuṇḍā), though not yet an exposition of the complete tenfold Mahāvidyā list.'
        ],
        [
          '4',
          'The Mahābhāgavata Purāṇa & Bṛhaddharma Purāṇa',
          'Eastern Śākta Upapurāṇas',
          'Primary narrative source for Satī manifesting the ten Mahāvidyās in ten directions before Śiva prior to Dakṣa’s sacrifice.'
        ],
        [
          '5',
          'Muṇḍamālā Tantra, Toḍala Tantra, Śaktisaṅgama Tantra & Śāktapramoda',
          'Tantric Textual Traditions & Ritual Compendia',
          'Preserve canonical verses listing the ten Mahāvidyās, their Bhairava consorts, dhyāna-ślokas, mantras, and yantras across distinct historical layers.'
        ],
        [
          '6',
          'Journal of Hindu Studies (Oxford Academic) — Scholarship on Tārā, Kālīkula & Śrīkula',
          'Peer-Reviewed Journal Scholarship',
          'Analyzes how the Mahāvidyā framework bridges Kālīkula and Śrīkula currents and investigates Tārā’s incorporation across Hindu and Buddhist contexts.'
        ]
      ],
      rowsHi: [
        [
          '१',
          'डेविड किन्सले (David Kinsley) — Tantric Visions of the Divine Feminine: The Ten Mahavidyas',
          'आधुनिक अकादमिक शोध-ग्रन्थ · यूनिवर्सिटी ऑफ कैलिफ़ोर्निया प्रेस (१९९७)',
          'दसों महाविद्याओं के स्वतंत्र व्यक्तित्व, मिथक, प्रतिमाशास्त्र और पारस्परिक धर्मशास्त्रीय संबंधों का आधारभूत अध्ययन।'
        ],
        [
          '२',
          'जे-युन शिन (Jae-Eun Shin) — Change, Continuity and Complexity: The Mahavidyas in East Indian Sakta Traditions',
          'ऐतिहासिक शोध-ग्रन्थ · रूटलेज (Routledge)',
          'पूर्वी भारत की शाक्त परम्पराओं में दशमहाविद्या समूह के ऐतिहासिक विकास, क्षेत्रीय मंदिरों और पुराण-तन्त्र समन्वय का गहन विश्लेषण।'
        ],
        [
          '३',
          'देवी माहात्म्य (मार्कण्डेय पुराण का अंश)',
          'मूल पौराणिक शास्त्र',
          'हिन्दू देवी-तत्त्वज्ञान के व्यापक इतिहास का आधारभूत ग्रन्थ (यद्यपि इसमें दसों महाविद्याओं की परवर्ती सूची एक साथ नहीं है, तथापि यह आवश्यक पृष्ठभूमि है)।'
        ],
        [
          '४',
          'महाभागवत पुराण एवं बृहद्धर्म पुराण',
          'पूर्वी भारत के शाक्त उपपुराण',
          'दक्ष-यज्ञ के प्रसंग में सती द्वारा शिव के समक्ष दसों दिशाओं में दस महाविद्याओं के प्राकट्य की कथा का प्रमुख स्रोत।'
        ],
        [
          '५',
          'मुण्डमाला तन्त्र, तोडल तन्त्र, शक्तिसंगम तन्त्र एवं शाक्तप्रमोद',
          'तांत्रिक संहिताएँ एवं पूजा-पद्धति ग्रन्थ',
          'दशमहाविद्याओं की प्रामाणिक नामावली, भैरव-युग्म, ध्यान-श्लोक, मन्त्र और यन्त्र-विधान के विविध ऐतिहासिक स्तरों के स्रोत।'
        ],
        [
          '६',
          'जर्नल ऑफ हिन्दू स्टडीज़ (Oxford Academic) — तारा, कालीकुल एवं श्रीकुल पर शोध',
          'समीक्षित अकादमिक शोध-पत्र',
          'कालीकुल और श्रीकुल को जोड़ने वाले ढाँचे के रूप में महाविद्या समूह तथा हिन्दू व बौद्ध संदर्भों में तारा के स्थान का विश्लेषण।'
        ]
      ]
    },
    {
      id: 'table-mahavidya-10-point-research-template',
      articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses',
      titleEn: 'Standardized 10-Point Archival Research Template & 7 Collection Categories',
      titleHi: 'प्रत्येक महाविद्या के अध्ययन हेतु १०-सूत्रीय मानक शोध-प्रारूप एवं ७ संग्रह श्रेणियाँ',
      captionEn:
        'Methodological template applied across the Tantric Ram Ashok Kumar Archive to ensure every Goddess profile separates primary evidence from modern commentary.',
      captionHi:
        'राम अशोक कुमार शोध अभिलेखागार में प्रत्येक महाविद्या के व्यवस्थित, स्रोत-सचेत और प्रामाणिक प्रलेखन हेतु १०-सूत्रीय मानक संरचना।',
      headersEn: ['Module #', 'Research Module Heading', 'Required Archival Documentation & Evidentiary Scope'],
      headersHi: ['क्रम', 'शोध अनुभाग शीर्षक', 'आवश्यक अभिलेखीय विवरण एवं प्रमाण-पद्धति'],
      rowsEn: [
        ['01', 'Overview and Terminology', 'Sanskrit name in Devanāgarī, IAST transliteration, alternative epithets (e.g., Ṣoḍaśī, Kamalātmikā), and lexical definition.'],
        ['02', 'Historical Development', 'Earliest surviving textual or material evidence, regional history, and chronological stages before and after tenfold standardization.'],
        ['03', 'Mythology and Narratives', 'Major Purāṇic and Tantric narratives, variant textual versions, and theological interpretations drawn from them.'],
        ['04', 'Iconography', 'Posture, complexion, attributes, weapons/implements, attendants, provenance/date of artifacts, and documented visual variants.'],
        ['05', 'Philosophy and Symbolism', 'Conceptual themes (time, crossing, space, sacrifice, speech, restraint, abundance) grounded in identifiable texts.'],
        ['06', 'Scriptures and Manuscripts', 'Primary Tantras and Purāṇas, critical editions, translators, chapter/verse citations, and manuscript lineages.'],
        ['07', 'Worship and Ritual History', 'Clear distinction between public temple devotional practice, textual ritual manuals, initiatory (dīkṣā) lineages, and modern interpretations.'],
        ['08', 'Temples and Regional Traditions', 'Documented seats (such as Kāmākhyā, Tarapith, Varanasi, Mithila, Bengal, South India) and living community observances.'],
        ['09', 'Comparative Studies', 'Connections with other Mahāvidyās, Kālīkula vs. Śrīkula synthesis, and cross-tradition parallels (e.g., Hindu and Buddhist Tārā).'],
        ['10', 'Bibliography and Evidence', 'Complete source ledger, edition details, provenance notes, scholarly disagreements, and unresolved historical questions.']
      ],
      rowsHi: [
        ['०१', 'परिचय एवं शब्दावली (Overview & Terminology)', 'संस्कृत नाम (देवनागरी), IAST लिप्यंतरण, वैकल्पिक नाम (जैसे षोडशी, कमलात्मिका) और प्रामाणिक परिभाषा।'],
        ['०२', 'ऐतिहासिक विकास (Historical Development)', 'प्राचीनतम उपलब्ध ग्रंथीय या पुरातात्विक साक्ष्य, क्षेत्रीय इतिहास और दश-समूह के मानकीकरण के चरण।'],
        ['०३', 'मिथक एवं आख्यान (Mythology & Narratives)', 'प्रमुख पौराणिक एवं तांत्रिक कथाएँ, विभिन्न ग्रन्थों के पाठांतर और उनके दार्शनिक निहितार्थ।'],
        ['०४', 'प्रतिमाशास्त्र (Iconography)', 'मुद्रा, वर्ण, आयुध, वाहन, सहचरी शक्तियाँ, ऐतिहासिक प्रतिमाओं का काल/स्थान और दृश्य भिन्नताएँ।'],
        ['०५', 'दर्शन एवं प्रतीक-विधान (Philosophy & Symbolism)', 'विशिष्ट ग्रन्थों द्वारा समर्थित वैचारिक विषय (काल, तरण, आकाश, आत्म-त्याग, वाक्, स्तम्भन, मांगल्य)।'],
        ['०६', 'शास्त्र एवं पाण्डुलिपियाँ (Scriptures & Manuscripts)', 'मूल तन्त्र एवं पुराण, प्रामाणिक संस्करण, अनुवादक, अध्याय/श्लोक संख्या और पाण्डुलिपि विवरण।'],
        ['०७', 'उपासना एवं अनुष्ठान इतिहास (Worship & Ritual History)', 'सार्वजनिक मंदिर भक्ति, शास्त्रीय पूजा-पद्धति, गुरु-दीक्षा (आम्नाय) परंपरा और आधुनिक व्याख्याओं में स्पष्ट भेद।'],
        ['०८', 'मंदिर एवं क्षेत्रीय परंपराएँ (Temples & Regional Traditions)', 'प्रमुख पीठ (कामाख्या, तारापीठ, काशी, मिथिला, बंगाल, दक्षिण भारत) और जीवंत उपासना परंपराएँ।'],
        ['०९', 'तुलनात्मक अध्ययन (Comparative Studies)', 'अन्य महाविद्याओं से संबंध, कालीकुल-श्रीकुल समन्वय तथा अन्य धार्मिक धाराओं (जैसे बौद्ध तारा) से तुलना।'],
        ['१०', 'संदर्भ-सूची एवं साक्ष्य समीक्षा (Bibliography & Evidence)', 'संपूर्ण स्रोत-सूची, संस्करण विवरण, विद्वानों के मतभेद और अनसुलझे ऐतिहासिक प्रश्न।']
      ]
    }
  ],
  'bhairavagana-taxonomy-kshetrapalas': [
    {
      id: 'table-52-bhairava-canonical-list',
      articleSlug: 'bhairavagana-taxonomy-kshetrapalas',
      titleEn: 'Complete Roster of the 52 Bhairavas (बावन भैरव — Bāvan Bhairava: 01 to 52)',
      titleHi: 'बावन भैरव (52 भैरव) की संपूर्ण प्रामाणिक नामावली (क्रमांक 01 से 52)',
      captionEn:
        'Canonical concordance of the 52 Bhairavas (1. असितांग भैरव to 52. स्वछंद भैरव) revered across Śaiva-Śākta Āgamas, Kāśī Kṣetrapāla traditions, Śaktipīṭha sanctuaries, and the 64 Yoginī mandala.',
      captionHi:
        'शैव-शाक्त आगमों, काशी क्षेत्रपाल परम्परा, शक्तिपीठों एवं चौंसठ योगिनी मण्डल में पूजित बावन भैरव (१. असितांग भैरव से ५२. स्वछंद भैरव) की क्रमबद्ध सारणी।',
      headersEn: ['No.', 'Devanāgarī Name (हिंदी नाम)', 'Transliteration (IAST)', 'Primary Theological & Liturgical Domain'],
      headersHi: ['क्र.', 'भैरव नाम (देवनागरी)', 'लिप्यंतरण (IAST)', 'प्रमुख तात्त्विक एवं उपासनात्मक अधिष्ठान'],
      rowsEn: [
        ['1', 'असितांग भैरव', 'Asitāṅga Bhairava', 'First of the Aṣṭa Bhairavas · Eastern axis, Brahmāṇī consort & creative spanda'],
        ['2', 'महाकाल भैरव', 'Mahākāla Bhairava', 'Supreme Lord of Transcendent Time (Mahākāla), Ujjayinī & Mahākālī consort'],
        ['3', 'त्रिलोचन भैरव', 'Trilocana Bhairava', 'Three-eyed sovereign of solar, lunar, and fire vision across the three times'],
        ['4', 'काल भैरव', 'Kāla Bhairava', 'Kotwal (Chief Magistrate) of Kāśī, Brahmakapāla liberator & master of Kāla'],
        ['5', 'त्रिपुर भैरव', 'Tripura Bhairava', 'Guardian of the triad of cities, bodies, and states of consciousness'],
        ['6', 'क्रोध भैरव', 'Krodha Bhairava', 'Aṣṭa Bhairava of fierce transformative wrath & Vaiṣṇavī consort'],
        ['7', 'तांडव भैरव', 'Tāṇḍava Bhairava', 'Cosmic dancer of the five divine acts (Pañcakṛtya) & rhythmic dissolution'],
        ['8', 'यम भैरव', 'Yama Bhairava', 'Ordainer of cosmic law (Dharma), yogic restraint, and the threshold of mortality'],
        ['9', 'नीलकंठ भैरव', 'Nīlakaṇṭha Bhairava', 'Blue-throated absorber of cosmic poison (Hālāhala) & compassionate protector'],
        ['10', 'श्मशान भैरव', 'Śmaśāna Bhairava', 'Dweller of the cremation ground (Mahāśmaśāna) & awakener of radical non-attachment'],
        ['11', 'चंड भैरव', 'Caṇḍa Bhairava', 'Southern Aṣṭa Bhairava of blazing martial energy & Kaumārī consort'],
        ['12', 'धूम्रलोचन भैरव', 'Dhūmralocana Bhairava', 'Smoke-eyed guardian of twilight veils, dhūmra-agni & subtle dissolution'],
        ['13', 'वीर भैरव', 'Vīra Bhairava', 'Heroic sovereign of Vīrācāra sadhana & fearless mandala defense'],
        ['14', 'रुद्र भैरव', 'Rudra Bhairava', 'Vedic-Āgamic roaring tempest who dissolves affliction and ignorance'],
        ['15', 'क्षेत्रपाल भैरव', 'Kṣetrapāla Bhairava', 'Protector of sacred geography (Kṣetra), temples, and inner bodily sanctity'],
        ['16', 'लोकनाथ भैरव', 'Lokanātha Bhairava', 'Compassionate sovereign and guardian of the fourteen worlds (Bhuvanas)'],
        ['17', 'पापभंजन भैरव', 'Pāpabhañjana Bhairava', 'Shatterer of karmic transgressions, moral fetters (pāśa), and inner guilt'],
        ['18', 'महाभैरव', 'Mahābhairava', 'Macrocosmic plenitude (Pūrṇatā) supporting the entire Śākta-Śaiva cosmos'],
        ['19', 'वत्सनाभ भैरव', 'Vatsanābha Bhairava', 'Alchemical transmuter of lethal poison into spiritual nectar (Rasāyana)'],
        ['20', 'चित्रभानु भैरव', 'Citrabhānu Bhairava', 'Multicolored solar-fire effulgence illuminating the subtle nādīs'],
        ['21', 'भीषण भैरव', 'Bhīṣaṇa Bhairava', 'Northern Aṣṭa Bhairava & Cāmuṇḍā consort who terrifies demonic ego'],
        ['22', 'संहार भैरव', 'Saṃhāra Bhairava', 'North-Eastern Aṣṭa Bhairava & Caṇḍikā consort of final cosmic reabsorption'],
        ['23', 'क्रोधनाथ भैरव', 'Krodhanātha Bhairava', 'Sovereign master over wrathful protective forces and obstacle-removal'],
        ['24', 'कालाग्नि भैरव', 'Kālāgni Bhairava', 'Kālāgnirudra—the subterranean fire of cosmic dissolution at the end of kalpas'],
        ['25', 'त्र्यम्बक भैरव', 'Tryambaka Bhairava', 'Mṛtyuñjaya healer, father of the three worlds, and bestower of immortality'],
        ['26', 'सर्प भैरव', 'Sarpa Bhairava', 'Nāga-crowned lord of coiled Kuṇḍalinī śakti and subterranean treasures'],
        ['27', 'अजर भैरव', 'Ajara Bhairava', 'Ageless, undecaying eternal witness untouched by biological or cosmic time'],
        ['28', 'व्यापक भैरव', 'Vyāpaka Bhairava', 'All-pervading omnipresent consciousness permeating every atom and tattva'],
        ['29', 'इंद्राचौड़ भैरव', 'Indrācauḍa Bhairava', 'Crest-sovereign of celestial dominion crowning the zenith of divine authority'],
        ['30', 'इंद्रा मूर्ति भैरव', 'Indrā Mūrti Bhairava', 'Embodied vajra-sovereignty uniting royal thunderbolt power with Śiva-tattva'],
        ['31', 'बटुक भैरव', 'Baṭuka Bhairava', 'Ever-youthful Āpaduddhāraka (Rescuer from Peril) revered in Sattva, Rajas & Tamas'],
        ['32', 'अमृत भैरव', 'Amṛta Bhairava', 'Lunar-nectar lord of Somacakra who showers rejuvenating soma-amṛta'],
        ['33', 'मार्तंड भैरव', 'Mārtaṇḍa Bhairava', 'Solar-Bhairava synthesis (Khaṇḍobā / Mārtaṇḍa) of radiant heroic splendor'],
        ['34', 'विपाक्ष भैरव', 'Vipākṣa Bhairava', 'Impartial transcendent witness (Virūpākṣa/Vipākṣa) beyond all dualistic polarities'],
        ['35', 'योगेश्वर भैरव', 'Yogeśvara Bhairava', 'Supreme master of Haṭha, Laya, Mantra, and Śāmbhava yoga'],
        ['36', 'त्रिनेत्र भैरव', 'Trinetra Bhairava', 'Awakener of the Ājñā third eye uniting Iḍā, Piṅgalā, and Suṣumṇā'],
        ['37', 'प्रेतनाथ भैरव', 'Pretanātha Bhairava', 'Lord of liminal spirits (pretas), guiding disembodied prāṇa to liberation'],
        ['38', 'पिशाचनाथ भैरव', 'Piśācanātha Bhairava', 'Master of nocturnal shadow-beings and tamasic subconscious impulses'],
        ['39', 'दंडपाणि भैरव', 'Daṇḍapāṇi Bhairava', 'Staff-wielding chief enforcer of Kāśī’s sacred law and karmic discipline'],
        ['40', 'विकराल भैरव', 'Vikarāla Bhairava', 'Formidable fang-bearing guardian whose awe-inspiring form shatters dark sorcery'],
        ['41', 'भद्र भैरव', 'Bhadra Bhairava', 'Auspicious, benign, and welfare-bestowing protective aspect of Bhairava'],
        ['42', 'भीम भैरव', 'Bhīma Bhairava', 'Tremendous, awe-inspiring colossus of prāṇic strength and unshakeable resolve'],
        ['43', 'दिगंबर भैरव', 'Digambara Bhairava', 'Sky-clad ascetic stripped of all worldly conditioning and illusory veils'],
        ['44', 'नाग भैरव', 'Nāga Bhairava', 'Guardian of Pātāla, serpent wisdom, sacred water-springs, and subtle prāṇa'],
        ['45', 'उग्र भैरव', 'Ugra Bhairava', 'Fierce, high-voltage transformative current (consort of Tārā / Ugratārā)'],
        ['46', 'भूतनाथ भैरव', 'Bhūtanātha Bhairava', 'Sovereign of the five gross elements (Pañcamahābhūtas) and all living beings'],
        ['47', 'अघोर भैरव', 'Aghora Bhairava', 'Non-terrifying luminous grace at the heart of the fiercest cremation-ground praxis'],
        ['48', 'स्वर्णाकर्षण भैरव', 'Svarṇākarṣaṇa Bhairava', 'Golden-complexioned bestower of spiritual auric radiance and material abundance'],
        ['49', 'नृसिंह भैरव', 'Nṛsiṃha Bhairava', 'Man-Lion Tantric synthesis tearing apart the demon of entrenched ego'],
        ['50', 'कपाल भैरव', 'Kapāla Bhairava', 'Skull-bowl bearer of the Kāpālika stream & Northern Aṣṭa Bhairava variant'],
        ['51', 'चरु भैरव', 'Caru Bhairava', 'Lord of the sacred oblation (caru-homa) and ritual alchemy of the fire-altar'],
        ['52', 'स्वछंद भैरव', 'Svacchanda Bhairava', 'Five-faced, eighteen-armed supreme autonomous Reality of the Svacchanda Tantra']
      ],
      rowsHi: [
        ['1', 'असितांग भैरव', 'Asitāṅga Bhairava', 'अष्ट भैरवों में प्रथम · पूर्व दिशा, ब्राह्मी शक्ति युग्म एवं सृजनात्मक स्पन्द'],
        ['2', 'महाकाल भैरव', 'Mahākāla Bhairava', 'महाकालेश्वर · कालों के भी काल, उज्जयिनी अधिपति एवं महाकाली के भैरव'],
        ['3', 'त्रिलोचन भैरव', 'Trilocana Bhairava', 'सूर्य, चन्द्र और अग्नि रूपी तीन नेत्रों से त्रिकाल को देखने वाले भैरव'],
        ['4', 'काल भैरव', 'Kāla Bhairava', 'काशी के सर्वोच्च कोतवाल, ब्रह्मकपाल मोचक एवं काल-चक्र के शासक'],
        ['5', 'त्रिपुर भैरव', 'Tripura Bhairava', 'तीनों पुरों (स्थूल-सूक्ष्म-कारण) एवं जाग्रत-स्वप्न-सुषुप्ति के अधिष्ठाता'],
        ['6', 'क्रोध भैरव', 'Krodha Bhairava', 'अष्ट भैरव (वैष्णवी युग्म) · अज्ञान और अधर्म का नाश करने वाला दिव्य क्रोध'],
        ['7', 'तांडव भैरव', 'Tāṇḍava Bhairava', 'पञ्चकृत्य (सृष्टि, स्थिति, संहार, तिरोभाव, अनुग्रह) के ताण्डव नर्तक'],
        ['8', 'यम भैरव', 'Yama Bhairava', 'धर्म-नियम, योग-संयम एवं मृत्यु-सीमा के सर्वोच्च नियामक'],
        ['9', 'नीलकंठ भैरव', 'Nīlakaṇṭha Bhairava', 'हालाहल विष को कंठ में धारण कर लोक-रक्षा करने वाले करुणामय भैरव'],
        ['10', 'श्मशान भैरव', 'Śmaśāna Bhairava', 'महाश्मशान के अधिपति एवं अहंकार-भस्म के पश्चात् जाग्रत शुद्ध वैराग्य'],
        ['11', 'चंड भैरव', 'Caṇḍa Bhairava', 'दक्षिण दिशा के अष्ट भैरव (कौमारी युग्म) · प्रचण्ड शौर्य एवं तेज के स्वामी'],
        ['12', 'धूम्रलोचन भैरव', 'Dhūmralocana Bhairava', 'धूम्र-नेत्र धारी संध्या-आवरण एवं सूक्ष्म लय के सजग प्रहरी'],
        ['13', 'वीर भैरव', 'Vīra Bhairava', 'वीराचार साधना के आदर्श एवं मण्डल के अजेय रक्षक'],
        ['14', 'रुद्र भैरव', 'Rudra Bhairava', 'वैदिक-आगमिक रौद्र तेज जो दुःख, रोग और अज्ञान को दग्ध करता है'],
        ['15', 'क्षेत्रपाल भैरव', 'Kṣetrapāla Bhairava', 'तीर्थों, शक्तिपीठों, देवालयों एवं साधक की देह-भूमि के रक्षक'],
        ['16', 'लोकनाथ भैरव', 'Lokanātha Bhairava', 'चतुर्दश भुवनों के करुणामय स्वामी एवं लोक-कल्याणकारी नाथ'],
        ['17', 'पापभंजन भैरव', 'Pāpabhañjana Bhairava', 'संचित पाप-राशि, कर्म-पाश एवं अपराध-बोध का भंजन करने वाले भैरव'],
        ['18', 'महाभैरव', 'Mahābhairava', 'समस्त ब्रह्माण्ड को धारण करने वाली पूर्ण परब्रह्म महाभैरव चेतना'],
        ['19', 'वत्सनाभ भैरव', 'Vatsanābha Bhairava', 'तीव्र विष को भी योग और रसायन से अमृत में बदलने वाले उग्र रक्षक'],
        ['20', 'चित्रभानु भैरव', 'Citrabhānu Bhairava', 'सूर्य और अग्नि के समान बहु-वर्णी दिव्य प्रकाश के स्वामी'],
        ['21', 'भीषण भैरव', 'Bhīṣaṇa Bhairava', 'उत्तर दिशा के अष्ट भैरव (चामुण्डा युग्म) · आसुरी वृत्तियों के लिए भयकारी'],
        ['22', 'संहार भैरव', 'Saṃhāra Bhairava', 'ईशान कोण के अष्ट भैरव (चण्डिका युग्म) · महाप्रलय एवं तात्त्विक लय के स्वामी'],
        ['23', 'क्रोधनाथ भैरव', 'Krodhanātha Bhairava', 'उग्र रक्षा-शक्तियों के स्वामी एवं अन्याय-दमन के अधिपति'],
        ['24', 'कालाग्नि भैरव', 'Kālāgni Bhairava', 'कल्पान्त की प्रलयाग्नि (कालाग्निरुद्र) के अधिष्ठाता भैरव'],
        ['25', 'त्र्यम्बक भैरव', 'Tryambaka Bhairava', 'महामृत्युंजय, तीनों लोकों के पिता एवं अमरत्व-प्रदाता भैरव'],
        ['26', 'सर्प भैरव', 'Sarpa Bhairava', 'नाग-भूषण एवं मूलाधार स्थित कुण्डलिनी सर्प-शक्ति के नियामक'],
        ['27', 'अजर भैरव', 'Ajara Bhairava', 'जरा (वृद्धावस्था) और क्षय से रहित नित्य-नूतन शाश्वत साक्षी भैरव'],
        ['28', 'व्यापक भैरव', 'Vyāpaka Bhairava', 'कण-कण और छत्तीस तत्त्वों में सर्वत्र ओत-प्रोत सर्वव्यापी भैरव'],
        ['29', 'इंद्राचौड़ भैरव', 'Indrācauḍa Bhairava', 'दिव्य ऐश्वर्य के शिखर-मुकुट (चूड़ामणि) पर विराजमान भैरव'],
        ['30', 'इंद्रा मूर्ति भैरव', 'Indrā Mūrti Bhairava', 'वज्र-समान अमोघ ऐश्वर्य और शिव-तेज के साकार विग्रह भैरव'],
        ['31', 'बटुक भैरव', 'Baṭuka Bhairava', 'आपदुद्धारक बाल-स्वरूप भैरव (सात्त्विक, राजसिक एवं तामसिक त्रिविध ध्यान)'],
        ['32', 'अमृत भैरव', 'Amṛta Bhairava', 'सहस्रार चंद्र-मण्डल से सोमामृत की वर्षा करने वाले संजीवनी भैरव'],
        ['33', 'मार्तंड भैरव', 'Mārtaṇḍa Bhairava', 'सूर्य और भैरव का संयुक्त तेजस्वी स्वरूप (मार्तण्ड-भैरव / खण्डोबा परम्परा)'],
        ['34', 'विपाक्ष भैरव', 'Vipākṣa Bhairava', 'द्वैत के समस्त पक्षों से परे निष्पक्ष एवं विषम-नेत्र (विरूपाक्ष/विपाक्ष) साक्षी'],
        ['35', 'योगेश्वर भैरव', 'Yogeśvara Bhairava', 'हठ, लय, मन्त्र और शाम्भव योग के सर्वोच्च अधीश्वर एवं आदिगुरु'],
        ['36', 'त्रिनेत्र भैरव', 'Trinetra Bhairava', 'इड़ा-पिंगला-सुषुम्णा के संगम आज्ञाचक्र (तृतीय नेत्र) के प्रकाशक'],
        ['37', 'प्रेतनाथ भैरव', 'Pretanātha Bhairava', 'अतृप्त एवं देह-मुक्त प्राणों (प्रेत योनि) को सद्गति देने वाले स्वामी'],
        ['38', 'पिशाचनाथ भैरव', 'Piśācanātha Bhairava', 'रात्रिचर तामसिक शक्तियों और अवचेतन अंधकार को वश में करने वाले नाथ'],
        ['39', 'दंडपाणि भैरव', 'Daṇḍapāṇi Bhairava', 'काशी में धर्म-दण्ड धारण करने वाले अनुशासन और न्याय के सेनापति'],
        ['40', 'विकराल भैरव', 'Vikarāla Bhairava', 'प्रचण्ड दंष्ट्रा-युक्त भयानक रूप से अभिचार और आसुरी बाधा मिटाने वाले'],
        ['41', 'भद्र भैरव', 'Bhadra Bhairava', 'भक्तों का कल्याण, मंगल और अभय सुनिश्चित करने वाले सौम्य-रक्षक भैरव'],
        ['42', 'भीम भैरव', 'Bhīma Bhairava', 'अतुलनीय प्राण-बल, अडिग संकल्प और महापराक्रम के अधिष्ठाता भैरव'],
        ['43', 'दिगंबर भैरव', 'Digambara Bhairava', 'दिशाओं को ही वस्त्र बनाने वाले, सर्व-आवरण-मुक्त परमहंस भैरव'],
        ['44', 'नाग भैरव', 'Nāga Bhairava', 'पाताल, जल-स्रोत, भूमि-निधि और प्राण-वायु के रक्षक नागराजा भैरव'],
        ['45', 'उग्र भैरव', 'Ugra Bhairava', 'भगवती उग्रतारा के सहचर एवं तीव्र रूपांतरणकारी विद्युत-तेज स्वरूप'],
        ['46', 'भूतनाथ भैरव', 'Bhūtanātha Bhairava', 'पञ्चमहाभूतों और समस्त प्राणी-जगत एवं भूतगणों के परम स्वामी'],
        ['47', 'अघोर भैरव', 'Aghora Bhairava', 'घोरतम श्मशान में भी परम अ-घोर (सौम्य, शिव एवं समदर्शी) तत्व'],
        ['48', 'स्वर्णाकर्षण भैरव', 'Svarṇākarṣaṇa Bhairava', 'स्वर्ण-आभा, दैवी समृद्धि, ऐश्वर्य और दारिद्र्य-नाश के सात्त्विक भैरव'],
        ['49', 'नृसिंह भैरव', 'Nṛsiṃha Bhairava', 'नृसिंह और भैरव के संयुक्त उग्र तेज से अहंकार-रूपी असुर का विदारण करने वाले'],
        ['50', 'कपाल भैरव', 'Kapāla Bhairava', 'ब्रह्मकपाल पात्र धारी कापालिक आम्नाय एवं उत्तर-दिशा के अष्ट भैरव'],
        ['51', 'चरु भैरव', 'Caru Bhairava', 'यज्ञीय चरु-आहुति, अग्नि-रसायन एवं तांत्रिक होम-विधान के अधिष्ठाता'],
        ['52', 'स्वछंद भैरव', 'Svacchanda Bhairava', 'स्वच्छन्द तन्त्र के पञ्चमुख, अष्टादशभुज, परम स्वतंत्र परात्पर भैरव']
      ]
    }
  ],
  'bavan-bhairava-chhappan-kalua-concordance': [
    {
      id: 'table-52-bhairava-complete-roster',
      articleSlug: 'bavan-bhairava-chhappan-kalua-concordance',
      titleEn: 'Complete Canonical & Śaktipīṭha Concordance of the 52 Bhairavas (बावन भैरव — Bāvan Bhairav: 01–52)',
      titleHi: 'बावन भैरव (५२ भैरव) की संपूर्ण शास्त्रीय एवं शक्तिपीठ-क्षेत्रपाल नामावली (०१–५२)',
      captionEn:
        'In Śākta-Śaiva cosmology, the 52 Bhairavas (Bāvan Bhairav) correspond to the 51/52 Śaktipīṭhas and the 51/52 Mātṛkā phonemes (A–Kṣa), encompassing the core Aṣṭa Bhairava octad and the sovereign Kṣetrapāla Bhairavas who stand guard over every Pīṭha alongside the 64 Yoginīs.',
      captionHi:
        'शाक्त-शैव परम्परा में "बावन भैरव" (५२ भैरव) ५१/५२ शक्तिपीठों और मातृका वर्णमाला के अक्षरों (अ–क्ष) के अधिष्ठाता क्षेत्रपाल हैं, जिनमें मूल अष्ट भैरव तथा पीठनिर्णय/तन्त्रचूड़ामणि और रुद्रयामल में वर्णित पीठ-भैरव सम्मिलित हैं।',
      headersEn: ['#', 'Bhairava Name (Devanāgarī & IAST)', 'Classification / Pīṭha Consort Context', 'Primary Sacred Seat / Liturgical Domain'],
      headersHi: ['क्र.', 'भैरव नाम (देवनागरी एवं IAST)', 'वर्गीकरण / शक्तिपीठ युग्म संदर्भ', 'प्रमुख पीठ / आनुष्ठानिक क्षेत्र'],
      rowsEn: [
        ['01', 'असितांग भैरव · Asitāṅga Bhairava', 'Aṣṭa Bhairava I (East · Brahmāṇī)', 'Kāśī (Vṛddhakāla) & Eastern Mātṛkā Octad'],
        ['02', 'रुरु भैरव · Ruru Bhairava', 'Aṣṭa Bhairava II (South-East · Māheśvarī)', 'Kāśī (Hanumān Ghāṭ) & Āgneya Octad'],
        ['03', 'चण्ड भैरव · Caṇḍa Bhairava', 'Aṣṭa Bhairava III (South · Kaumārī)', 'Kāśī (Durgā Kuṇḍa) & Southern Octad'],
        ['04', 'क्रोध भैरव · Krodha Bhairava', 'Aṣṭa Bhairava IV (South-West · Vaiṣṇavī)', 'Kāśī (Kāmākṣā) & Nairṛtya Octad'],
        ['05', 'उन्मत्त भैरव · Unmatta Bhairava', 'Aṣṭa Bhairava V (West · Vārāhī)', 'Kāśī (Deउरā) & Western Octad'],
        ['06', 'कपाल भैरव (कपाली) · Kapāla Bhairava', 'Aṣṭa Bhairava VI (North-West · Indrāṇī)', 'Kāśī (Lāṭ Bhairava) & Vāyavya Octad'],
        ['07', 'भीषण भैरव · Bhīṣaṇa Bhairava', 'Aṣṭa Bhairava VII (North · Cāmuṇḍā)', 'Kāśī (Bhūtabhairava) & Northern Octad'],
        ['08', 'संहार भैरव · Saṃhāra Bhairava', 'Aṣṭa Bhairava VIII (North-East · Caṇḍikā)', 'Kāśī (Trilocana) & Īśāna Octad'],
        ['09', 'काल भैरव · Kāla Bhairava', 'Supreme Kotwāl of Kāśī & Kālamocana', 'Vārāṇasī (Viśveśvara Kṣetrapāla) & Kālapīṭha'],
        ['10', 'बटुक भैरव (आपदुद्धारक) · Baṭuka Bhairava', 'Sāttvika-Rājasika-Tāmasika Child Protector', 'Kāśī (Kāmākṣā) & Universal Śākta-Śaiva Rakṣā'],
        ['11', 'स्वर्णाकर्षण भैरव · Svarṇākarṣaṇa Bhairava', 'Rājarājeśvara / Kubera-Tattva Bhairava', 'Rudrayāmala Tantric Wealth & Auspiciousness Stream'],
        ['12', 'महाकाल भैरव · Mahākāla Bhairava', 'Consort of Mahākālī / Avantī Pīṭha', 'Ujjayinī (Mahākālavana) & Kālīkula Axis'],
        ['13', 'आनन्द भैरव · Ānanda Bhairava', 'Kaula Cakreśvara & Consort of Ānandabhairavī', 'Kāśī / Kaula Pañcamakāra & Yoginī Cakra Bindu'],
        ['14', 'स्वच्छन्द भैरव · Svacchanda Bhairava', 'Five-Faced (Pañcavaktra) 18-Armed Sovereign', 'Kashmir Śaiva Svacchanda Tantra & Aghoreśvarī'],
        ['15', 'मार्तण्ड भैरव (मल्हारी) · Mārtaṇḍa Bhairava', 'Solar-Bhairava Manifestation (Khaṇḍobā)', 'Deccan / Jejuri & Mallāri Māhātmya Tradition'],
        ['16', 'भीमलोचन भैरव · Bhīmalocana Bhairava', 'Śaktipīṭha Bhairava of Koṭṭarī / Hiṅgulā', 'Hiṅgulā (Hinglaj) — Brahmāṇḍa / Cakra Pīṭha'],
        ['17', 'चण्डेश भैरव · Caṇḍeśa Bhairava', 'Śaktipīṭha Bhairava of Mahiṣamardinī', 'Śarkarāre (Karavīra / Sukkur) Pīṭha'],
        ['18', 'तरुण भैरव · Taruṇa Bhairava', 'Śaktipīṭha Bhairava of Nārāyaṇī', 'Śucīndra (Suchindram) Pīṭha'],
        ['19', 'त्रिसन्ध्येश्वर भैरव · Trisandhyeśvara Bhairava', 'Śaktipīṭha Bhairava of Mahāmāyā', 'Amaranātha (Kashmir) Pīṭha'],
        ['20', 'उन्पत्त भैरव · Unmatta-Jwālā Bhairava', 'Śaktipīṭha Bhairava of Siddhidā (Ambikā)', 'Jwālāmukhī (Kangra) Pīṭha'],
        ['21', 'भीषण-जालन्धर भैरव · Bhīṣaṇa-Jālandhara', 'Śaktipīṭha Bhairava of Tripuramālinī', 'Jālandhara (Devi Talab) Pīṭha'],
        ['22', 'अमर भैरव · Amara Bhairava', 'Śaktipīṭha Bhairava of जयदुर्गा / Vaidyanātha', 'Vaidyanātha (Deoghar) Hṛdaya Pīṭha'],
        ['23', 'सर्वानन्द भैरव · Sarvānanda Bhairava', 'Śaktipīṭha Bhairava of Mahāmāyā (Guheśvarī)', 'Nepāla (Pashupatinath / Guhyeshwari) Pīṭha'],
        ['24', 'अमरनाथ (मानस) भैरव · Amaranātha-Mānasa', 'Śaktipīṭha Bhairava of Dākṣāyaṇī', 'Mānasa Sarovara (Tibet/Kailāsa) Pīṭha'],
        ['25', 'जगन्नाथ भैरव · Jagannātha Bhairava', 'Śaktipīṭha Bhairava of Vimalā Bhairavī', 'Utkala / Purī (Nābhi / Virajā) Pīṭha'],
        ['26', 'चक्रपाणि भैरव · Cakrapāṇi Bhairava', 'Śaktipīṭha Bhairava of Gaṇḍakī Caṇḍī', 'Gaṇḍakī (Muktinath) कपोल Pīṭha'],
        ['27', 'भीरुक भैरव · Bhīruka Bhairava', 'Śaktipīṭha Bhairava of Bahulā Devī', 'Bāhulā (Ketugram, Bengal) Pīṭha'],
        ['28', 'मंगलचण्डिकेश्वर भैरव · Maṅgalacaṇḍikeśvara', 'Śaktipīṭha Bhairava of Maṅgalacaṇḍikā', 'Ujjayinī (Ujani, Bardhaman) Pīṭha'],
        ['29', 'चन्द्रशेखर भैरव · Candraśekhara Bhairava', 'Śaktipīṭha Bhairava of Bhavānī', 'Caṭṭala (Chittagong / Sitakunda) Pīṭha'],
        ['30', 'त्रिपुरेश भैरव · Tripureśa Bhairava', 'Śaktipīṭha Bhairava of Tripurasundarī', 'Tripurā (Udaipur Matabari) Pīṭha'],
        ['31', 'निमिष भैरव · Nimiṣa Bhairava', 'Śaktipīṭha Bhairava of Bhrāmarī Devī', 'Trisrotā (Jalpaiguri) Pīṭha'],
        ['32', 'उमानन्द (रावण) भैरव · Umānanda Bhairava', 'Śaktipīṭha Bhairava of Kāmākhyā (Mahāmudrā)', 'Kāmarūpa / Kāmākhyā (Nīlācala) Yoni Pīṭha'],
        ['33', 'अभिरु भैरव · Abhiru Bhairava', 'Śaktipīṭha Bhairava of Bhūtadhātrī', 'Kṣīragrāma (Jogadya, Bengal) Pīṭha'],
        ['34', 'नकुलीश भैरव · Nakulīśa Bhairava', 'Śaktipīṭha Bhairava of Kālikā', 'Kālīpīṭha (Kalighat, Kolkata) Pīṭha'],
        ['35', 'भाव-प्रयाग भैरव · Bhava Bhairava', 'Śaktipīṭha Bhairava of Lalitā (Alopī/Kalyāṇī)', 'Prayāga (Triveṇī Saṅgama) Pīṭha'],
        ['36', 'क्रूर भैरव · Krūra Bhairava', 'Śaktipīṭha Bhairava of Jayantī Devī', 'Jayantī (Nartiang, Jaintia Hills) Pīṭha'],
        ['37', 'सानन्द भैरव · Sānanda Bhairava', 'Śaktipīṭha Bhairava of Vimalā Devī', 'Kirīṭa (Murshidabad) Pīṭha'],
        ['38', 'दण्डपाणि भैरव · Daṇḍapāṇi Bhairava', 'Śaktipīṭha Bhairava of Viśālākṣī & Manikarnika', 'Vārāṇasī (Kāśī Maṇikarṇikā) Pīṭha'],
        ['39', 'रुरु-कन्याश्रम भैरव · Nimīṣa/Ruru Bhairava', 'Śaktipīṭha Bhairava of Śarvāṇī', 'Kanyāśrama (Kanyakumari) Pīṭha'],
        ['40', 'स्थाणु भैरव · Sthāṇu Bhairava', 'Śaktipīṭha Bhairava of Sāvitrī / Bhadrakālī', 'Kurukṣetra (Sthāṇvīśvara) Pīṭha'],
        ['41', 'शम्बरानन्द भैरव · Śambarānanda Bhairava', 'Śaktipīṭha Bhairava of Gāyatrī', 'Maṇivedika (Pushkar) Pīṭha'],
        ['42', 'सुन्दरानन्द भैरव · Sundarānanda Bhairava', 'Śaktipīṭha Bhairava of Mahālakṣmī', 'Śrīśaila / Śrīhaṭṭa (Grīvā) Pīṭha'],
        ['43', 'असित-कांची भैरव · वेदगर्भ भैरव (Vedagarbha)', 'Śaktipīṭha Bhairava of Devagarbhā (Kankalitala)', 'Kāñcī / Kopāī River (Birbhum) Pīṭha'],
        ['44', 'लम्बकर्ण भैरव · Lambakarṇa Bhairava', 'Śaktipīṭha Bhairava of Śivānī', 'Rāmagiri (Chitrakoot / Maihar) Pīṭha'],
        ['45', 'भूतेश भैरव · Bhūteśa Bhairava', 'Śaktipīṭha Bhairava of Umā (Kātyāyanī)', 'Vṛndāvana (Bhūteśvara / Uma Shaktipith)'],
        ['46', 'संहार-अट्टहास भैरव · Saṃhāra-Phullara', 'Śaktipīṭha Bhairava of Phullarā Devī', 'Aṭṭahāsa (Labhpur, Bengal) Pīṭha'],
        ['47', 'ईशान भैरव · Īśāna Bhairava', 'Śaktipīṭha Bhairava of नन्दिनी (Nandinī)', 'Nandīpura (Sainthia) Pīṭha'],
        ['48', 'राक्षसेश्वर भैरव · Rākṣaseśvara Bhairava', 'Śaktipīṭha Bhairava of Indrākṣī', 'Laṅkā / Nainativu Pīṭha'],
        ['49', 'महाभैरव (गोधरा/विराट) · अमृत भैरव (Amṛta)', 'Śaktipīṭha Bhairava of Ambikā', 'Virāṭa (Bairat, Rajasthan) Pīṭha'],
        ['50', 'वक्रनाथ भैरव · Vakranātha Bhairava', 'Śaktipīṭha Bhairava of Mahiṣamardinī', 'Vakreśvara (Bakreshwar) Pīṭha'],
        ['51', 'उमापति / उन्मत्त भैरव · Unmatta-Vibhāṣa', 'Śaktipīṭha Bhairava of Kapālinī (Bhīmarūpā)', 'Vibhāṣa (Tamluk / Bargabhima) Pīṭha'],
        ['52', 'अच्युतानन्द / क्षेत्रपाल महाभैरव · Acyutānanda', 'Śaktipīṭha Bhairava of Yaśoreśvarī & Guhya Pīṭha', 'Yaśora (Ishwaripur) & Central Bindu Kṣetra']
      ],
      rowsHi: [
        ['०१', 'असितांग भैरव · Asitāṅga Bhairava', 'अष्ट भैरव I (पूर्व · ब्राह्मी शक्ति)', 'काशी (वृद्धकाल) एवं पूर्व मातृका अष्टक'],
        ['०२', 'रुरु भैरव · Ruru Bhairava', 'अष्ट भैरव II (आग्नेय · माहेश्वरी शक्ति)', 'काशी (हनुमान घाट) एवं आग्नेय अष्टक'],
        ['०३', 'चण्ड भैरव · Caṇḍa Bhairava', 'अष्ट भैरव III (दक्षिण · कौमारी शक्ति)', 'काशी (दुर्गाकुण्ड) एवं दक्षिण अष्टक'],
        ['०४', 'क्रोध भैरव · Krodha Bhairava', 'अष्ट भैरव IV (नैऋत्य · वैष्णवी शक्ति)', 'काशी (कामाक्षा) एवं नैऋत्य अष्टक'],
        ['०५', 'उन्मत्त भैरव · Unmatta Bhairava', 'अष्ट भैरव V (पश्चिम · वाराही शक्ति)', 'काशी (देउरा) एवं पश्चिम अष्टक'],
        ['०६', 'कपाल भैरव (कपाली) · Kapāla Bhairava', 'अष्ट भैरव VI (वायव्य · इन्द्राणी शक्ति)', 'काशी (लाट भैरव) एवं वायव्य अष्टक'],
        ['०७', 'भीषण भैरव · Bhīṣaṇa Bhairava', 'अष्ट भैरव VII (उत्तर · चामुण्डा शक्ति)', 'काशी (भूतभैरव) एवं उत्तर अष्टक'],
        ['०८', 'संहार भैरव · Saṃhāra Bhairava', 'अष्ट भैरव VIII (ईशान · चण्डिका शक्ति)', 'काशी (त्रिलोचन) एवं ईशान अष्टक'],
        ['०९', 'काल भैरव · Kāla Bhairava', 'काशी के सर्वोच्च कोतवाल एवं कपालमोचन', 'वाराणसी (विश्वेश्वर क्षेत्रपाल) एवं कालपीठ'],
        ['१०', 'बटुक भैरव (आपदुद्धारक) · Baṭuka Bhairava', 'सात्त्विक-राजसिक-तामसिक बाल-रक्षक स्वरूप', 'काशी (कमच्छा) एवं सार्वभौम शाक्त-शैव रक्षा'],
        ['११', 'स्वर्णाकर्षण भैरव · Svarṇākarṣaṇa Bhairava', 'राजराजेश्वर / ऐश्वर्य-प्रदायक भैरव', 'रुद्रयामल तन्त्र एवं समृद्धि-रक्षा आम्नाय'],
        ['१२', 'महाकाल भैरव · Mahākāla Bhairava', 'भगवती महाकाली के भैरव / अवन्ती पीठ', 'उज्जयिनी (महाकालवन) एवं कालीकुल धुरी'],
        ['१३', 'आनन्द भैरव · Ānanda Bhairava', 'कौल चक्रेश्वर एवं आनन्दभैरवी युग्म', 'काशी / कौल पञ्चमकार एवं योगिनी चक्र बिन्दु'],
        ['१४', 'स्वच्छन्द भैरव · Svacchanda Bhairava', 'पञ्चमुख अष्टादशभुज स्वच्छन्द तन्त्र अधिपति', 'कश्मीर शैव आम्नाय एवं भगवती अघोरेश्वरी'],
        ['१५', 'मार्तण्ड भैरव (मल्हारी) · Mārtaṇḍa Bhairava', 'सूर्य-भैरव संयुक्त स्वरूप (खण्डोबा)', 'दक्कन / जेजुरी एवं मल्लारि माहात्म्य परम्परा'],
        ['१६', 'भीमलोचन भैरव · Bhīmalocana Bhairava', 'हिंगुला (कोट्टरी) शक्तिपीठ के रक्षक भैरव', 'हिंगुलाज (ब्रह्माण्ड रंध्र / प्रथम शक्तिपीठ)'],
        ['१७', 'चण्डेश भैरव · Caṇḍeśa Bhairava', 'महिषमर्दिनी शक्तिपीठ के रक्षक भैरव', 'शर्करारे / करवीर (सुक्कुर) शक्तिपीठ'],
        ['१८', 'तरुण भैरव · Taruṇa Bhairava', 'नारायणी शक्तिपीठ के रक्षक भैरव', 'शुचीन्द्रम (कन्याकुमारी-तमिलनाडु) शक्तिपीठ'],
        ['१९', 'त्रिसन्ध्येश्वर भैरव · Trisandhyeśvara Bhairava', 'महामाया शक्तिपीठ के रक्षक भैरव', 'अमरनाथ (कश्मीर — कण्ठ) शक्तिपीठ'],
        ['२०', 'उन्मत्त-ज्वाला भैरव · Unmatta-Jwālā Bhairava', 'सिद्धिदा (अम्बिका) शक्तिपीठ के भैरव', 'ज्वालामुखी (कांगड़ा — जिह्वा) शक्तिपीठ'],
        ['२१', 'भीषण-जालन्धर भैरव · Bhīṣaṇa-Jālandhara', 'त्रिपुरमालिनी शक्तिपीठ के रक्षक भैरव', 'जालन्धर (देवी तालाब — वाम स्तन) शक्तिपीठ'],
        ['२२', 'अमर भैरव · Amara Bhairava', 'जयदुर्गा शक्तिपीठ के रक्षक भैरव', 'वैद्यनाथ धाम (देवघर — हृदय) शक्तिपीठ'],
        ['२३', 'सर्वानन्द भैरव · Sarvānanda Bhairava', 'गुह्येश्वरी (महामाया) शक्तिपीठ के भैरव', 'नेपाल (पशुपतिनाथ / गुह्येश्वरी — जानु) पीठ'],
        ['२४', 'अमरनाथ (मानस) भैरव · Amaranātha-Mānasa', 'दाक्षायणी शक्तिपीठ के रक्षक भैरव', 'मानसरोवर (कैलास — दक्षिण हस्त) शक्तिपीठ'],
        ['२५', 'जगन्नाथ भैरव · Jagannātha Bhairava', 'विमला भैरवी शक्तिपीठ के रक्षक भैरव', 'उत्कल / पुरी (नाभि / विरजा क्षेत्र) शक्तिपीठ'],
        ['२६', 'चक्रपाणि भैरव · Cakrapāṇi Bhairava', 'गण्डकी चण्डी शक्तिपीठ के रक्षक भैरव', 'गण्डकी (मुक्तिनाथ — गण्डस्थल) शक्तिपीठ'],
        ['२७', 'भीरुक भैरव · Bhīruka Bhairava', 'बहुला देवी शक्तिपीठ के रक्षक भैरव', 'बहुला (केतुग्राम, वर्धमान — वाम बाहु) पीठ'],
        ['२८', 'मंगलचण्डिकेश्वर भैरव · Maṅgalacaṇḍikeśvara', 'मंगलचण्डिका शक्तिपीठ के रक्षक भैरव', 'उज्जयिनी / उजानी (कूर्पर) शक्तिपीठ'],
        ['२९', 'चन्द्रशेखर भैरव · Candraśekhara Bhairava', 'भवानी शक्तिपीठ के रक्षक भैरव', 'चट्टल (चन्द्रनाथ, सीताकुण्ड — दक्षिण बाहु) पीठ'],
        ['३०', 'त्रिपुरेश भैरव · Tripureśa Bhairava', 'त्रिपुरसुन्दरी शक्तिपीठ के रक्षक भैरव', 'त्रिपुरा (उदयपुर माताबाड़ी — दक्षिण पाद) पीठ'],
        ['३१', 'निमिष भैरव · Nimiṣa Bhairava', 'भ्रामरी देवी शक्तिपीठ के रक्षक भैरव', 'त्रिस्रोता (जलपाईगुड़ी — वाम पाद) शक्तिपीठ'],
        ['३२', 'उमानन्द भैरव · Umānanda Bhairava', 'कामाख्या (महामुद्रा) शक्तिपीठ के भैरव', 'कामरूप / कामाख्या (नीलाचल — योनि) महापीठ'],
        ['३३', 'अभिरु भैरव · Abhiru Bhairava', 'भूतधात्री (योगाद्या) शक्तिपीठ के भैरव', 'क्षीरग्राम (वर्धमान — दक्ष पादांगुष्ठ) पीठ'],
        ['३४', 'नकुलीश भैरव · Nakulīśa Bhairava', 'कालिका शक्तिपीठ के रक्षक भैरव', 'कालीपीठ (कालीघाट, कोलकाता) शक्तिपीठ'],
        ['३५', 'भव भैरव (प्रयाग) · Bhava Bhairava', 'ललिता (अलोपी) शक्तिपीठ के रक्षक भैरव', 'प्रयाग (त्रिवेणी संगम — हस्त-अंगुली) पीठ'],
        ['३६', 'क्रूर भैरव · Krūra Bhairava', 'जयन्ती देवी शक्तिपीठ के रक्षक भैरव', 'जयन्ती (नर्तियांग, मेघालय — वाम जंघा) पीठ'],
        ['३७', 'सानन्द भैरव · Sānanda Bhairava', 'विमला (मुकुटेश्वरी) शक्तिपीठ के भैरव', 'किरीटकोण (मुर्शिदाबाद — किरीट) शक्तिपीठ'],
        ['३८', 'दण्डपाणि भैरव · Daṇḍapāṇi Bhairava', 'विशालाक्षी एवं मणिकर्णिका पीठ के भैरव', 'वाराणसी (काशी मणिकर्णिका — कर्णकुण्डल) पीठ'],
        ['३९', 'निमिष/रुरु (कन्याश्रम) · Ruru-Kanyāśrama', 'शर्वाणी शक्तिपीठ के रक्षक भैरव', 'कन्याश्रम (कन्याकुमारी — पृष्ठ भाग) पीठ'],
        ['४०', 'स्थाणु भैरव · Sthāṇu Bhairava', 'सावित्री (भद्रकाली) शक्तिपीठ के भैरव', 'कुरुक्षेत्र (स्थाण्वीश्वर — गुल्फ) शक्तिपीठ'],
        ['४१', 'शम्बरानन्द भैरव · Śambarānanda Bhairava', 'गायत्री शक्तिपीठ के रक्षक भैरव', 'मणिवेदिक (पुष्कर — मणिबन्ध) शक्तिपीठ'],
        ['४२', 'सुन्दरानन्द भैरव · Sundarānanda Bhairava', 'महालक्ष्मी शक्तिपीठ के रक्षक भैरव', 'श्रीशैल / श्रीहट्ट (ग्रीवा) शक्तिपीठ'],
        ['४३', 'वेदगर्भ भैरव · Vedagarbha Bhairava', 'देवगर्भा (कंकालीतला) शक्तिपीठ के भैरव', 'कांची / कोपाई नदी (बीरभूम — अस्थि) पीठ'],
        ['४४', 'लम्बकर्ण भैरव · Lambakarṇa Bhairava', 'शिवानी शक्तिपीठ के रक्षक भैरव', 'रामगिरि (चित्रकूट / मैहर — दक्षिण स्तन) पीठ'],
        ['४५', 'भूतेश भैरव · Bhūteśa Bhairava', 'उमा (कात्यायनी) शक्तिपीठ के रक्षक भैरव', 'वृन्दावन (भूतेश्वर — केशपाश) शक्तिपीठ'],
        ['४६', 'संहार-अट्टहास भैरव · Saṃhāra-Phullara', 'फुल्लरा देवी शक्तिपीठ के रक्षक भैरव', 'अट्टहास (लाभपुर — ओष्ठ) शक्तिपीठ'],
        ['४७', 'ईशान भैरव · Īśāna Bhairava', 'नन्दिनी शक्तिपीठ के रक्षक भैरव', 'नन्दीपुर (सैंथिया — कण्ठहार) शक्तिपीठ'],
        ['४८', 'राक्षसेश्वर भैरव · Rākṣaseśvara Bhairava', 'इन्द्राक्षी शक्तिपीठ के रक्षक भैरव', 'लंका (नूपुर) शक्तिपीठ'],
        ['४९', 'अमृत (विराट) भैरव · Amṛta Bhairava', 'अम्बिका शक्तिपीठ के रक्षक भैरव', 'विराट (बैराठ, राजस्थान — पादांगुली) पीठ'],
        ['५०', 'वक्रनाथ भैरव · Vakranātha Bhairava', 'महिषमर्दिनी शक्तिपीठ के रक्षक भैरव', 'वक्रेश्वर (बीरभूम — मन/भ्रूमध्य) शक्तिपीठ'],
        ['५१', 'उन्मत्त-विभाष भैरव · Unmatta-Vibhāṣa', 'कपालिनी (भीमरूपा) शक्तिपीठ के भैरव', 'विभाष (तामलुक — वाम गुल्फ) शक्तिपीठ'],
        ['५२', 'अच्युतानन्द महाभैरव · Acyutānanda Bhairava', 'यशोरेश्वरी एवं गुह्य-पीठ के रक्षक भैरव', 'यशोर (ईश्वरीपुर — पाणिपद्म) एवं केंद्रीय पीठ']
      ]
    },
    {
      id: 'table-52-bhairav-64-yogini-56-kalua-triad',
      articleSlug: 'bavan-bhairava-chhappan-kalua-concordance',
      titleEn: 'Structural Concordance: 52 Bhairavas · 64 Yoginīs · 56 Kaluas (The Threefold Mandala Retinue)',
      titleHi: 'त्रिकोणीय मण्डल समन्वय: बावन भैरव (५२) · चौंसठ योगिनी (६४) · छप्पन कलुआ (५६)',
      captionEn:
        'How the three numerical canons operate together across Sanskrit Āgamic mandalas and North Indian Nātha-Śākta-Śābara liturgical traditions.',
      captionHi:
        'संस्कृत आगमों और उत्तर भारतीय शाक्त, नाथ एवं लोक-तांत्रिक अनुष्ठानों में बावन भैरव, चौंसठ योगिनी और छप्पन कलुआ की त्रयी का संरचनात्मक संबंध।',
      headersEn: ['Retinue Group', 'Canonical Count & Formula', 'Sanskrit & Regional Terminology', 'Ritual & Cosmological Function in the Mandala'],
      headersHi: ['गण-समूह', 'शास्त्रीय संख्या एवं सूत्र', 'संस्कृत एवं क्षेत्रीय संज्ञा', 'मण्डल एवं उपासना में भूमिका'],
      rowsEn: [
        [
          'Bāvan Bhairava (बावन भैरव)',
          '52 (8 Core Aṣṭa Bhairavas + 44 Pīṭha/Mātṛkā Kṣetrapālas; or 51/52 Śaktipīṭha Guardians)',
          'Dvipaञ्चāśad-Bhairava · Pīṭha-Kṣetrapāla · Bāvan Bīr',
          'Masculine axis of consciousness (Prakāśa) and territorial Kṣetrapāla sovereignty over the 52 Śaktipīṭhas and 52 Sanskrit Varṇamālā phonemes.'
        ],
        [
          'Chauṃsaṭh Yoginī (चौंसठ योगिनी)',
          '64 (8 Aṣṭa Mātṛkās × 8 Directional Octads = 64)',
          'Catuḥṣaṣṭi Yoginī · Cakra-Yoginī · Mātṛkā-Gaṇa',
          'Dynamic feminine śakti-matrix (Vimarśa) governing the 64 Kalās, 64 Tantras, and the circular hypaethral Yoginī temple enclosure.'
        ],
        [
          'Chhappan Kalua (छप्पन कलुआ)',
          '56 (8 Directions × 7 Lokas/Pātālas = 56; or 56 Deśa-Kṣetra Vanguard Vīras)',
          'Chhappan Kalua / Kāluā Bīr · Kāla-Gaṇa · Kālī-Kiṅkara',
          'Fierce dark-complexioned vanguard troops (Kāla-gaṇas) of Mahākālī and Kāla Bhairava who guard the outer threshold, crossroads, and bali-offerings.'
        ]
      ],
      rowsHi: [
        [
          'बावन भैरव (52 Bhairavas)',
          '५२ (८ मूल अष्ट भैरव + ४४ शक्तिपीठ/मातृका क्षेत्रपाल = ५२)',
          'द्विपञ्चाशद् भैरव · पीठ-क्षेत्रपाल · बावन वीर',
          '५२ शक्तिपीठों और ५२ मातृका वर्णों के रक्षक क्षेत्रपाल तथा मण्डल के पुरुष-चैतन्य (प्रकाश) स्तंभ।'
        ],
        [
          'चौंसठ योगिनी (64 Yoginīs)',
          '६४ (८ मातृकाएँ × ८ दिशात्मक अष्टक = ६४)',
          'चतुःषष्टि योगिनी · योगिनी-चक्र · मातृका-गण',
          '६४ कलाओं, ६४ तन्त्रों और वृत्ताकार योगिनी मंदिरों की अधिष्ठात्री गतिशील स्त्री-शक्तियाँ (विमर्श)।'
        ],
        [
          'छप्पन कलुआ (56 Kaluas)',
          '५६ (८ दिशाएँ × ७ लोक/ताल = ५६; अथवा ५६ देश-सीमा के काल-वीर)',
          'छप्पन कलुआ · कालू वीर · काल-गण · काली-किंकर',
          'भगवती महाकाली और कालभैरव के श्यामवर्णी (काल-रूप) अग्रिम रक्षक गण, जो मण्डल की बाह्य सीमा, चौराहों और बलि-विधान की रक्षा करते हैं।'
        ]
      ]
    }
  ],
  'navadurga-nine-forms': [
    {
      id: 'table-navadurga-nine-nights-sequence',
      articleSlug: 'navadurga-nine-forms',
      titleEn: 'The Nine Forms of Navadurgā in Navarātri (Devī Kavaca Sequence)',
      titleHi: 'नवरात्रि के नौ दिनों में पूजित नवदुर्गा के नौ स्वरूप (देवी कवच क्रम)',
      captionEn:
        'The Navadurgā are commonly worshipped in sequence over the nine nights of Navarātri. This familiar order is documented in the Devī Kavaca, a protective hymn traditionally associated with the Devī Māhātmya. Precise observances, colors, offerings, and local narratives vary by region and community.',
      captionHi:
        'नवरात्रि की नौ रात्रियों में नवदुर्गा की क्रमिक उपासना की जाती है। यह प्रसिद्ध क्रम दुर्गा सप्तशती (देवी माहात्म्य) से संबद्ध रक्षा-स्तोत्र "देवी कवच" में प्रलेखित है।',
      headersEn: ['Navarātri Day', 'Goddess (IAST & Devanāgarī)', 'Meaning & Traditional Mount / Attributes', 'Main Traditional Association'],
      headersHi: ['नवरात्रि दिवस', 'देवी (संस्कृत एवं IAST)', 'शाब्दिक अर्थ एवं वाहन / प्रमुख प्रतीक', 'मुख्य पारंपरिक संबंध एवं आध्यात्मिक भाव'],
      rowsEn: [
        [
          '1',
          'Śailaputrī (शैलपुत्री)',
          'Daughter of the Mountain · Mount: Bull (Nandī) · Trident & Lotus',
          'Mountains, beginnings, grounding, and the Goddess as daughter of Himālaya (Pārvatī reborn after Satī)'
        ],
        [
          '2',
          'Brahmacāriṇī (ब्रह्मचारिणी)',
          'She Who Practices Brahmacarya · Attributes: Rosary (akṣamālā) & Water Pot (kamaṇḍalu)',
          'Penance (tapasyā), devotion, self-restraint, and disciplined spiritual practice'
        ],
        [
          '3',
          'Candraghaṇṭā (चन्द्रघण्टा)',
          'Crescent Moon Like a Bell · Mount: Tiger or Lion · Multi-armed with weapons & bell',
          'Courage, protection, and martial readiness'
        ],
        [
          '4',
          'Kūṣmāṇḍā (कूष्माण्डा)',
          'Cosmic Warmth & Radiance · Mount: Lion · Eight arms with weapons, rosary & nectar jar',
          'Creative radiance, solar illumination, and cosmic manifestation (brahmāṇḍa)'
        ],
        [
          '5',
          'Skandamātā (स्कन्दमाता)',
          'Mother of Skanda (Kārttikeya) · Mount: Lotus / Lion · Holding child Skanda & lotuses',
          'Motherhood, nurture, auspiciousness, and divine protection'
        ],
        [
          '6',
          'Kātyāyanī (कात्यायनी)',
          'Manifested in Sage Kātyāyana’s Hermitage · Mount: Lion · Sword, lotus, abhaya & varada',
          'Warrior power, defense of cosmic order, and the defeat of demonic forces'
        ],
        [
          '7',
          'Kālarātrī (कालरात्रि)',
          'The Dark Night or Night of Time · Mount: Donkey (gardabha) · Fierce protective form (Śubhaṅkarī)',
          'Fierce protection, confrontation with danger, and the destruction of fear'
        ],
        [
          '8',
          'Mahāgaurī (महागौरी)',
          'The Great Radiant or Fair One · Mount: White Bull · Trident, drum (ḍamaru), white garments',
          'Purity, serenity, luminous grace, and auspiciousness'
        ],
        [
          '9',
          'Siddhidātrī (सिद्धिदात्री)',
          'Bestower of Siddhis · Seat/Mount: Lotus or Lion · Conch, discus, mace & lotus',
          'Spiritual accomplishments, fulfillment, and the bestowal of siddhis'
        ]
      ],
      rowsHi: [
        [
          '१',
          'शैलपुत्री (Śailaputrī)',
          'पर्वतराज हिमालय की पुत्री · वाहन: वृषभ (नन्दी) · त्रिशूल एवं कमल',
          'पर्वत, आध्यात्मिक आरंभ, स्थिरता और हिमालय-पुत्री पार्वती के रूप में देवी का प्राकट्य'
        ],
        [
          '२',
          'ब्रह्मचारिणी (Brahmacāriṇī)',
          'ब्रह्मचर्य और तपस्या का आचरण करने वाली · प्रतीक: अक्षमाला एवं कमण्डलु',
          'तपस्या, निष्ठा, आत्म-संयम और अनुशासित आध्यात्मिक साधना'
        ],
        [
          '३',
          'चन्द्रघण्टा (Candraghaण्टा)',
          'मस्तक पर घण्टे के आकार का अर्धचन्द्र · वाहन: बाघ या सिंह · दशभुजा आयुधधारी रूप',
          'साहस, भक्तों की रक्षा और आसुरी शक्तियों के विरुद्ध सामरिक तत्परता'
        ],
        [
          '४',
          'कूष्माण्डा (Kūṣmāṇḍा)',
          'ब्रह्माण्डीय ऊष्मा एवं तेज · वाहन: सिंह · अष्टभुजा, कमण्डलु, धनुष, बाण, कमल व जपमाला',
          'सृजनात्मक तेज, सूर्य-समान प्रकाश और ब्रह्माण्ड की अभिव्यक्ति'
        ],
        [
          '५',
          'स्कन्दमाता (Skandamātā)',
          'भगवान् स्कन्द (कार्तिकेय) की माता · आसन/वाहन: पद्मासना / सिंह · गोद में बालक स्कन्द',
          'मातृत्व, वात्सल्य, पोषण और दिव्य संरक्षण'
        ],
        [
          '६',
          'कात्यायनी (Kātyāyanī)',
          'महर्षि कात्यायन के आश्रम में प्रकट · वाहन: सिंह · खड्ग, कमल, अभय एवं वरद मुद्रा',
          'योद्धा शक्ति, धर्म की रक्षा और आसुरी शक्तियों का विनाश'
        ],
        [
          '७',
          'कालरात्रि (Kālarātrī)',
          'महाकाल की रात्रि · वाहन: गर्दभ (गधा) · उग्र रक्षिका एवं शुभंकरी स्वरूप',
          'उग्र संरक्षण, संकट का निर्भय सामना और भय का पूर्ण विनाश'
        ],
        [
          '८',
          'महागौरी (Mahāgaurī)',
          'परम उज्ज्वल एवं गौर वर्ण वाली · वाहन: श्वेत वृषभ · त्रिशूल, डमरू एवं श्वेत वस्त्र',
          'पवित्रता, प्रशांति, निर्मल आभा और मांगल्य'
        ],
        [
          '९',
          'सिद्धिदात्री (Siddhidātrī)',
          'सिद्धियों को प्रदान करने वाली · आसन/वाहन: कमल या सिंह · शंख, चक्र, गदा एवं पद्म',
          'आध्यात्मिक पूर्णता, साधना की सिद्धि और अष्ट-सिद्धियों का वरदान'
        ]
      ]
    },
    {
      id: 'table-navadurga-vs-dasa-mahavidya',
      articleSlug: 'navadurga-nine-forms',
      titleEn: 'Part IX (35) · Navadurgā and the Daśa Mahāvidyās: Structural Comparison',
      titleHi: 'भाग IX (३५) · नवदुर्गा एवं दशमहाविद्या: संरचनात्मक एवं ऐतिहासिक तुलना',
      captionEn:
        'Although both groups belong to the wider Śākta Goddess tradition, the Navadurgā and the Daśa Mahāvidyās have distinct numbers, scriptural frameworks, liturgical contexts, and historical emphases.',
      captionHi:
        'यद्यपि दोनों समूह व्यापक शाक्त देवी-परम्परा के अंग हैं, तथापि नवदुर्गा और दशमहाविद्या की संख्या, शास्त्रीय संरचना, उपासना-संदर्भ और ऐतिहासिक विकास में स्पष्ट अंतर है।',
      headersEn: ['Feature', 'Navadurgā (नवदुर्गा)', 'Daśa Mahāvidyā (दशमहाविद्या)'],
      headersHi: ['विशेषता / आधार', 'नवदुर्गा (Navadurgā)', 'दशमहाविद्या (Daśa Mahāvidyā)'],
      rowsEn: [
        ['Number', 'Nine forms', 'Ten forms'],
        ['Best-known context', 'Nine nights of Navarātri', 'Śākta Tantric Goddess traditions'],
        ['Familiar list begins with', 'Śailaputrī (शैलपुत्री)', 'Kālī (काली)'],
        ['Familiar list ends with', 'Siddhidātrī (सिद्धिदात्री)', 'Kamalā (कमला)'],
        ['Main organizational idea', 'Nine forms of Durgā in a traditional sequence', 'Ten Great Wisdom Goddesses'],
        ['Historical emphasis', 'Devotional worship, Navarātri, Purāṇic and regional traditions', 'Tantric theology, ritual traditions, iconography, and philosophical interpretations']
      ],
      rowsHi: [
        ['संख्या (Number)', 'नौ स्वरूप (Nine forms)', 'दस स्वरूप (Ten forms)'],
        ['प्रमुख संदर्भ (Best-known context)', 'नवरात्रि की नौ रात्रियाँ (Nine nights of Navarātri)', 'शाक्त तांत्रिक देवी परम्पराएँ (Śākta Tantric Goddess traditions)'],
        ['प्रसिद्ध सूची का प्रथम नाम', 'शैलपुत्री (Śailaputrī)', 'काली (Kālī)'],
        ['प्रसिद्ध सूची का अंतिम नाम', 'सिद्धिदात्री (Siddhidātrī)', 'कमला (Kamalā)'],
        ['मुख्य संगठनात्मक विचार', 'पारंपरिक अनुक्रम में भगवती दुर्गा के नौ स्वरूप', 'दस महाविद्याएँ (Ten Great Wisdom Goddesses)'],
        ['ऐतिहासिक एवं साधनात्मक बल', 'भक्तिपूर्ण आराधना, नवरात्रि पर्व, पौराणिक एवं क्षेत्रीय परम्पराएँ', 'तांत्रिक तत्त्वज्ञान, आनुष्ठानिक आम्नाय, प्रतिमाशास्त्र एवं दार्शनिक व्याख्याएँ']
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
          'In the research notes for Aghora Sampradāya, six interconnected points are organized under one umbrella, with Points 5 and 6 forming the two specialized sub-parts of this study: (1) Origin / Background (Pravartaka/Mūla): The historical emergence of fierce Śaiva asceticism out of the Pāśupata milieu associated with Lakulīśa (Nakulīśa), while noting that Lakulīśa’s historical vs. mythic status and the exact institutional continuity require careful scholarly distinction. (2) Guru Lineage (Guru Paramparā): The 12 Kāpālika gurus recorded in the Sarvatantra and Śābara compendia (Ādinātha, Anādi, Kāla, Amitābha/Atikāla, Karāla, Vikarāla, Mahākāla, Kālabhairavanātha, Baṭuka, Bhūtanātha, Vīranātha, and Śrīkaṇṭha). (3) Presiding Deities (Iṣṭadeva): Fierce Bhairava alongside Mahākālī, Cāmuṇḍā, and Tripurasundarī. (4) Core Doctrine (Mukhya Siddhānta): Somāsiddhānta and ritual contemplation utilizing the cranial bowl (kapāla) and non-dual equanimity. (5) Sub-Part I — Ghora Sampradāya (11/12 Bhedas): Detailed philological study of the 12 listed terms (Rakta, Śukla, Vinmūtra, Bhakṣa, Vanānta, Ghora, Ghoratara, Vīṇā, Nīla, Śarvabhakṣa, Ghorāghora, and Siddha). (6) Sub-Part II — Kāpālika Sampradāya (5 Bhedas): Detailed study of Somāsiddhānta and the 5 reported subdivisions (Indrajali, Devjali, Rudrajali, Vidyajali, and Siddhajali). Use the two engraved Sub-Part Circular Seals above to open each sub-part monograph in full.',
        bodyHi:
          'अघोर सम्प्रदाय के शोध-नोट्स में ६ मुख्य बिंदु एक साथ जुड़े हैं, जिनमें बिंदु ५ और ६ इसके दो प्रमुख उप-भाग (Sub-Parts) हैं: (१. प्रवर्तक/मूल): पाशुपत मत (लकुलीश/नकुलीश) की पृष्ठभूमि से उग्र शैव साधना का विकास (लकुलीश की ऐतिहासिकता और सीधी वंशावली पर अकादमिक सावधानी सहित)। (२. गुरु परंपरा): सर्वतन्त्र और अन्य तांत्रिक ग्रन्थों में उल्लिखित १२ गुरु—आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल, महाकाल, कालभैरवनाथ, बटुक, भूतनाथ, वीरनाथ और श्रीकण्ठ। (३. इष्टदेव): भैरव (उग्र शिव रूप) तथा महाकाली, चामुण्डा और त्रिपुरसुन्दरी। (४. मुख्य सिद्धांत): सोमसिद्धान्त दर्शन, कपाल-पात्र का प्रतीक और शुद्ध-अशुद्ध से परे अद्वैत समदृष्टि। (५. उप-भाग I — घोर सम्प्रदाय के ११/१२ भेद): रक्त, शुक्ल, विन्मूत्र, भक्ष, वनान्त, घोर, घोरतर, वीणा, नील, शर्वभक्ष, घोराघोर और सिद्ध का विस्तृत विश्लेषण। (६. उप-भाग II — कापालिक सम्प्रदाय के ५ भेद): इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली और सिद्धजाली का विस्तृत अध्ययन। ऊपर दिए गए दोनों उप-भागों की वृत्ताकार मुद्राओं पर क्लिक करके प्रत्येक उप-भाग का पूर्ण स्वतंत्र पृष्ठ भी खोला जा सकता है।'
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
    titleEn: 'Kāpālika Sampradāya (कापालिक सम्प्रदाय): Somāsiddhānta, the 12 Gurus & the Reported 5 Bhedas (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali)',
    titleHi: 'कापालिक सम्प्रदाय: सोमसिद्धान्त, १२ कापालिक गुरु एवं बताए गए ५ भेदों (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली) का अध्ययन',
    subtitleEn: 'Medieval Cranial-Bowl Asceticism, Relationship with Pāśupata & Lakulīśa, Bhairava–Cāmuṇḍā Worship, Somāsiddhānta & Source-Conscious Analysis of the 5 Reported Subdivisions',
    subtitleHi: 'मध्यकालीन कपाल-व्रत परंपरा, पाशुपत व लकुलीश से संबंध, भैरव-चामुण्डा-त्रिपुरसुन्दरी उपासना, सोमसिद्धान्त एवं ५ कथित भेदों की स्रोत-समीक्षा',
    sanskritEpigraph: '॥ कपालपाणयो नित्यं सोमसिद्धान्तवेदिनः। भैरवीं भैरवं देवं पूजयन्ति समाहिताः ॥',
    epigraphTranslationEn: '"Bearing the cranial bowl in hand and knower of the Somāsiddhānta doctrine, the Kāpālika contemplates Deva Bhairava and Goddess Bhairavī/Cāmuṇḍā."',
    epigraphTranslationHi: '"हाथ में कपाल-पात्र धारण करने वाले और सोमसिद्धान्त के मर्मज्ञ साधक एकाग्र चित्त से भगवान् भैरव और भगवती भैरवी/चामुण्डा की आराधना करते हैं।"',
    evidenceBadgeEn: 'MEDIEVAL ŚAIVA HISTORY & SOURCE-VERIFICATION DOSSIER',
    evidenceBadgeHi: 'मध्यकालीन शैव इतिहास एवं स्रोत-सत्यापन शोध-पत्र',
    accentColor: '#D97706',
    summaryEn:
      'Examines the medieval Kāpālika tradition across two distinct planes: (1) Verified historical and textual scholarship covering the meaning of Kāpālika (from kapāla, skull-bowl), the relationship with Pāśupata Śaivism and Lakulīśa, the traditional list of 12 Kāpālika gurus (Ādinātha, Anādi, Kāla, Amitābha, Karāla, Vikarāla, etc.) in Sarvatantra compendia, the worship of Bhairava, Mahākālī, Cāmuṇḍā, and Tripurasundarī, and the doctrine of Somāsiddhānta; and (2) A source-conscious lexical analysis of the reported fivefold Kāpālika classification—Indrajali (इन्द्रजाली), Devjali (देवजाली), Rudrajali (रुद्रजाली), Vidyajali (विद्याजाली), and Siddhajali (सिद्धजाली)—clearly labeled as "source verification pending."',
    summaryHi:
      'कापालिक सम्प्रदाय का दो स्पष्ट स्तरों पर विस्तृत अध्ययन प्रस्तुत करता है: (१) प्रमाणित ऐतिहासिक एवं ग्रंथीय अध्ययन—जिसमें कपाल-पात्र का प्रतीक, पाशुपत मत और लकुलीश से संबंध, सर्वतन्त्र में उल्लिखित १२ कापालिक गुरुओं (आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल आदि) की परंपरा, भैरव, महाकाली, चामुण्डा एवं त्रिपुरसुन्दरी की इष्टदेव रूप में उपासना तथा "सोमसिद्धान्त" दर्शन शामिल है; और (२) कापालिक सम्प्रदाय के बताए गए पाँच भेदों—इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली और सिद्धजाली—की शब्दार्थ एवं शोध-समीक्षा ("मूल स्रोत की पुष्टि लंबित")।',
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
        headingEn: '2. Reported Fivefold Kāpālika Classification — Source Verification Pending (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali)',
        headingHi: '2. कापालिक सम्प्रदाय के बताए गए पाँच भेद — मूल स्रोत की पुष्टि लंबित (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली)',
        bodyEn:
          'In the research notes, five names ending in -jālī (-jali) are listed as subdivisions (bhedas) of the Kāpālika Sampradāya: (1) Indrajali / Indrajālī (इन्द्रजाली), (2) Devjali / Devajālī (देवजाली), (3) Rudrajali / Rudrajālī (रुद्रजाली), (4) Vidyajali / Vidyājālī (विद्याजाली), and (5) Siddhajali / Siddhajālī (सिद्धजाली). Because no surviving primary Sanskrit text or epigraphic record currently validates these five terms as five separate historical subsects of Kāpālikas, they are documented here with strict philological discipline: (1) Indrajālī / Indrajali (इन्द्रजाली): Derived from indrajāla ("the net of Indra", magical illusion, or wonder-working tantric rites); in Atharvavedic and Dāmara-tantric contexts, indrajāla denotes mastery over wondrous appearances and māyā. (2) Devajālī / Devjali (देवजाली): Derived from deva-jāla ("network/mandala of deities"), pointing to initiates or observances centered on the luminous deity-matrix. (3) Rudrajālī / Rudrajali (रुद्रजाली): Derived from rudra-jāla ("matrix/net of fierce Rudra"); crucially, 18 of the 28 Śaiva Āgamas belong to the Rudrabheda division, and fierce Rudra-Bhairava is the archetype of the Kāpālika mahāvrata. (4) Vidyājālī / Vidyajali (विद्याजाली): Derived from vidyā-jāla ("network of sacred female mantras/vidyās"); the 64 Bhairava Tantras are famously divided into Mantrapīṭha and Vidyāpīṭha (goddess-focused Tantras where Kāpālika-style practices were prominent). (5) Siddhajālī / Siddhajali (सिद्धजाली): Derived from siddha-jāla ("lineage-network of perfected masters"), central to the 12 Kāpālika Siddha-guru lineages.',
        bodyHi:
          'शोध-नोट्स में कापालिक सम्प्रदाय के पाँच भेद बताए गए हैं: (१) इन्द्रजाली (Indrajali), (२) देवजाली (Devjali), (३) रुद्रजाली (Rudrajali), (४) विद्याजाली (Vidyajali), और (५) सिद्धजाली (Siddhajali)। चूँकि किसी विश्वसनीय प्राथमिक संस्कृत ग्रन्थ में इन पाँच नामों की स्वतंत्र कापालिक उपशाखाओं के रूप में पुष्टि नहीं मिली है, अतः काल्पनिक इतिहास गढ़ने के स्थान पर प्रत्येक शब्द का प्रामाणिक अर्थ और शोध-प्रश्न इस प्रकार है: (१) इन्द्रजाली (Indrajali): "इन्द्रजाल" (माया-जाल अथवा कौतुक-सिद्धि विद्या) से संबद्ध साधक या धारा; शोध प्रश्न—क्या यह इन्द्रजाल-तन्त्र से जुड़ी किसी कापालिक उपशाखा का संकेत है? (२) देवजाली (Devjali): "देवजाल" (दिव्य मण्डल या देव-समूह) की उपासना से संबद्ध साधक-वर्ग। (३) रुद्रजाली (Rudrajali): उग्र रुद्र-भैरव के शक्ति-जाल से संबद्ध; शैव आगमों में १८ आगम "रुद्रभेद" कहलाते हैं। (४) विद्याजाली (Vidyajali): मन्त्र-विद्याओं के जाल ("विद्याजाल") का साधक; भैरव तन्त्रों की कापालिक-प्रभावित शाखा को शास्त्रीय रूप से "विद्यापीठ" कहा जाता है। (५) सिद्धजाली (Siddhajali): सिद्धि-प्राप्त आचार्यों के मण्डल ("सिद्धजाल" / १२ कापालिक सिद्ध-गुरुओं की परंपरा) से संबद्ध साधक-वर्ग।'
      }
    ],
    keyFindingsEn: [
      'Documents the 4 core historical features of the Kāpālikas: Atimārga/Pāśupata background, the 12 Kāpālika gurus of Sarvatantra, Bhairava–Cāmuṇḍā–Mahākālī–Tripurasundarī worship, and Somāsiddhānta.',
      'Preserves the 5 reported Kāpālika subdivisions (Indrajali, Devjali, Rudrajali, Vidyajali, Siddhajali) with explicit "Source Verification Pending" status.',
      'Highlights the philological parallel between Rudrajali / Vidyajali and the canonical Rudrabheda / Vidyāpīṭha divisions of the Śaiva-Bhairava scriptural corpus.'
    ],
    keyFindingsHi: [
      'कापालिक परंपरा के ४ प्रमुख ऐतिहासिक बिंदुओं (लकुलीश/पाशुपत पृष्ठभूमि, सर्वतन्त्र के १२ कापालिक गुरु, भैरव-चामुण्डा-महाकाली-त्रिपुरसुन्दरी उपासना और सोमसिद्धान्त) का प्रामाणिक प्रलेखन।',
      'कापालिक सम्प्रदाय के ५ कथित भेदों (इन्द्रजाली, देवजाली, रुद्रजाली, विद्याजाली, सिद्धजाली) को "मूल स्रोत की पुष्टि लंबित" टिप्पणी और शब्दार्थ के साथ सुरक्षित रखा गया है।',
      'रुद्रजाली और विद्याजाली पदों का शैव आगमों के "रुद्रभेद" और भैरव तन्त्रों के "विद्यापीठ" वर्गीकरण से संभावित शास्त्रीय संबंध रेखांकित किया गया है।'
    ],
    metadata: [
      { labelEn: 'Philosophical System', labelHi: 'दार्शनिक सिद्धांत', valueEn: 'Somāsiddhānta (सोमसिद्धान्त) & Mahāvrata', valueHi: 'सोमसिद्धान्त एवं महाव्रत' },
      { labelEn: '12 Gurus (Sarvatantra)', labelHi: '१२ कापालिक गुरु (सर्वतन्त्र)', valueEn: 'Ādinātha, Anādi, Kāla, Amitābha, Karāla, Vikarāla, Mahākāla, etc.', valueHi: 'आदिनाथ, अनादि, काल, अमिताभ, कराल, विकराल, महाकाल आदि' },
      { labelEn: '5 Reported Bhedas (Unverified)', labelHi: '५ बताए गए भेद (अपुष्ट स्रोत)', valueEn: 'Indrajali · Devjali · Rudrajali · Vidyajali · Siddhajali', valueHi: 'इन्द्रजाली · देवजाली · रुद्रजाली · विद्याजाली · सिद्धजाली' },
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
    titleEn: 'Bhairavagaṇa & The 52 Bhairavas (बावन भैरव — 1. Asitāṅga Bhairava to 52. Svacchanda Bhairava)',
    titleHi: 'भैरवगण एवं बावन भैरव (52 भैरव — 1. असितांग भैरव से 52. स्वछंद भैरव): संपूर्ण शास्त्रीय शोध-प्रबंध',
    subtitleEn: 'Comprehensive Philological, Āgamic, Purāṇic, Iconographic, and Yogic Monograph on All Fifty-Two Bhairavas (1 to 52)',
    subtitleHi: '1. असितांग भैरव से 52. स्वछंद भैरव पर्यन्त सभी बावन भैरवों का विस्तृत व्युत्पत्तिमूलक, आगमिक, पौराणिक, प्रतिमाशास्त्रीय एवं यौगिक विवेचन',
    sanskritEpigraph: '॥ विश्वं बिभर्ति पूरयति रवयति इति भैरवः। असिताङ्गादि-स्वच्छन्दान्ताः द्विपञ्चाशद्-भैरवाः ॥',
    epigraphTranslationEn: '"He who supports (bharaṇa), nourishes, and sounds forth (ravaṇa) the universe is Bhairava (Tantrāloka 1.96); from Asitāṅga Bhairava to Svacchanda Bhairava stand the Fifty-Two Bhairavas."',
    epigraphTranslationHi: '"जो विश्व का भरण-पोषण, रमण और संहार/नाद करते हैं, वे भैरव हैं (तन्त्रालोक १.९६); १. असितांग भैरव से ५२. स्वछंद भैरव पर्यन्त बावन भैरव प्रतिष्ठित हैं।"',
    evidenceBadgeEn: 'ŚAIVA-ŚĀKTA ĀGAMA · COMPLETE 52 BHAIRAVA MONOGRAPH (01–52)',
    evidenceBadgeHi: 'शैव-शाक्त आगम · संपूर्ण बावन भैरव शोध-प्रबंध (01–52)',
    accentColor: '#FFBF38',
    summaryEn:
      'In Śaiva-Śākta Tantric cosmology, Śaktipīṭha topography, Kāśī Kṣetrapāla traditions, and the 64 Yoginī mandala, the Fifty-Two Bhairavas (Bāvan Bhairava — बावन भैरव) constitute the complete protective and metaphysical retinue (Bhairavagaṇa) of Supreme Bhairava consciousness. Corresponding to the 51/52 Śaktipīṭhas and the Mātṛkā phonemic matrix, these fifty-two forms span the gentle creative current of Asitāṅga Bhairava, the temporal sovereignty of Mahākāla and Kāla Bhairava, the fierce protective interventions of Caṇḍa, Bhīṣaṇa, and Vikarāla Bhairava, the compassionate rescue of Baṭuka and Svarṇākarṣaṇa Bhairava, and the supreme five-faced autonomy of Svacchanda Bhairava. Below is a dedicated 8-to-10-line scholarly monograph section on each of the 52 Bhairavas in exact canonical sequence.',
    summaryHi:
      'शैव-शाक्त तांत्रिक ब्रह्माण्ड-विज्ञान, शक्तिपीठ भूगोल, काशी क्षेत्रपाल परम्परा और चौंसठ योगिनी मण्डल में "बावन भैरव" (52 भैरव) परम भैरव चेतना के संपूर्ण रक्षात्मक एवं तात्त्विक व्यूह (भैरवगण) का निर्माण करते हैं। ५१/५२ शक्तिपीठों और मातृका वर्णमाला के अक्षरों से संबद्ध ये बावन स्वरूप १. असितांग भैरव की सृजनात्मक स्पन्द-शक्ति से आरंभ होकर महाकाल व काल भैरव के काल-शासन, चंड, भीषण व विकराल भैरव के उग्र रक्षण, बटुक व स्वर्णाकर्षण भैरव की करुणा तथा ५२. स्वछंद भैरव की परम स्वतंत्र पञ्चमुखी चेतना तक विस्तृत हैं। नीचे क्रमबद्ध रूप से प्रत्येक भैरव पर विस्तृत शास्त्रीय लेख प्रस्तुत है।',
    sections: [
      {
        headingEn: '1. असितांग भैरव (Asitāṅga Bhairava)',
        headingHi: '1. असितांग भैरव (Asitāṅga Bhairava)',
        bodyEn:
          'Etymology & Identity: Asitāṅga Bhairava (from Sanskrit asita meaning "dark, unconditioned, or deep sapphire-black" and aṅga meaning "limbs or embodied form") stands first among both the classical Aṣṭa Bhairavas (Eight Directional Bhairavas) and the Fifty-Two Bhairavas.\n' +
          'Scriptural & Directional Context: In the Tantrāloka of Abhinavagupta, the Rudrayāmala, and the Kāśī Khaṇḍa of the Skanda Purāṇa, Asitāṅga presides over the Eastern quarter (Pūrva-dik) and initiates the first octad of the 64 Yoginī mandala alongside his Mātṛkā consort Brahmāṇī (Brāhmī). In Kāśī’s sacred geography, his shrine anchors the eastern protective circuit of the Aṣṭa Bhairava pilgrimage.\n' +
          'Iconography & Attributes: Classical dhyāna verses depict him with a golden or dark-luminous complexion, wearing a garland of skulls (muṇḍamālā), mounted upon a swan (haṃsa), and holding the rosary (akṣamālā), ascetic water-vessel (kamaṇḍalu), trident (triśūla), and skull-cup (kapāla).\n' +
          'Philosophical & Yogic Significance: Metaphysically, Asitāṅga embodies Sṛṣṭi-śakti—the primal creative impulse (spanda) through which unmanifest Śiva-consciousness projects the universe and awakens poetic speech, mantra-siddhi, and vital prāṇa at the dawn of spiritual practice.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "असितांग" शब्द संस्कृत के "असित" (श्याम, नीलवर्ण अथवा बन्धन-रहित) और "अंग" (देह/स्वरूप) के संयोग से बना है, जिसका अर्थ है—श्याम अथवा असीम चिदाकाश रूपी अंगों वाले भैरव। वे शास्त्रीय अष्ट भैरवों तथा बावन भैरवों दोनों ही सूचियों में प्रथम स्थान पर प्रतिष्ठित हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: आचार्य अभिनवगुप्त के तन्त्रालोक, रुद्रयामल और स्कन्द पुराण के काशी खण्ड में असितांग भैरव पूर्व दिशा के अधिपति हैं तथा मातृका ब्राह्मी के साथ चौंसठ योगिनी चक्र के प्रथम अष्टक का संचालन करते हैं। काशी की अष्ट-भैरव यात्रा में उनका प्राचीन मंदिर पूर्वी रक्षा-कवच का केंद्र है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: ध्यान-मन्त्रों में उन्हें स्वर्णिम या श्याम-तेजस्वी वर्ण, हंस वाहन तथा चतुर्भुज रूप में अक्षमाला, कमण्डलु, त्रिशूल और कपाल धारण किए हुए वर्णित किया गया है।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: तात्त्विक दृष्टि से असितांग भैरव "सृष्टि-शक्ति" और आद्य स्पन्द के प्रतीक हैं, जिनकी उपासना से साधक में सृजनात्मक मेधा, वाक्-सिद्धि, प्राण-ऊर्जा का जागरण और साधना के प्रारंभिक विघ्नों का निवारण होता है।'
      },
      {
        headingEn: '2. महाकाल भैरव (Mahākāla Bhairava)',
        headingHi: '2. महाकाल भैरव (Mahākāla Bhairava)',
        bodyEn:
          'Etymology & Identity: Mahākāla Bhairava ("Lord of Great or Transcendent Time") represents the absolute macrocosmic dimension of Śiva-Bhairava that devours ordinary sequential time (khaṇḍa-kāla) while remaining eternally beyond birth and decay.\n' +
          'Scriptural & Sacred Geography: Celebrated across the Śiva Purāṇa, Skanda Purāṇa (Avanti Khaṇḍa), Mahākāla Saṃhitā, and Kālīkula Tantras, Mahākāla is the sovereign presiding deity of Ujjayinī (Avantikā) and the supreme consort of Dakṣiṇakālī / Mahākālī in the Daśa Mahāvidyā system.\n' +
          'Iconography & Attributes: He is envisioned as vast and dark as the collyrium of dissolution clouds, three-eyed, digambara or clad in tiger-skin, encircled by serpents, and wielding the trident (triśūla), ḍamaru, khaḍga (sword), and kapāla drenched in the nectar of immortality.\n' +
          'Philosophical & Yogic Significance: In Trika and Krama non-dualism, Mahākāla is the unchanging witness-substratum upon whose chest Mahākālī dances; in yogic sadhana, his grace dissolves the fear of death (kāla-bhaya), halts karmic oscillation between past and future, and establishes the practitioner in timeless awareness (akāla-sthiti).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "महाकाल भैरव" (महा + काल) वह सर्वोच्च परात्पर सत्ता हैं जो खण्ड-काल (भूत, वर्तमान और भविष्य) को अपने भीतर लीन कर लेते हैं और स्वयं काल की सीमाओं से परे अखंड रूप में विराजमान रहते हैं।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: शिव पुराण, स्कन्द पुराण (अवन्ती खण्ड), महाकाल संहिता और कालीकुल के आगमों में महाकाल भैरव उज्जयिनी (अवन्तिका) के अधिपति तथा दशमहाविद्या में आद्या महाविद्या दक्षिणाकाली/महाकाली के भैरव के रूप में पूजित हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: इनका स्वरूप प्रलयकालीन मेघ या अंजन के समान गहन श्याम, त्रिनेत्रधारी, व्याघ्रचर्म व नाग-यज्ञोपवीत से सुशोभित तथा हाथों में त्रिशूल, डमरू, खड्ग और खप्पर (कपाल) धारण करने वाला है।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: तांत्रिक अद्वैत दर्शन में महाकाल ही वह निस्पन्द शिव-अधिष्ठान हैं जिनके वक्षःस्थल पर महाकाली की चित्-शक्ति नृत्य करती है; इनकी आराधना से अकाल मृत्यु का भय समाप्त होता है और साधक कालातीत तुरीय चेतना में स्थित होता है।'
      },
      {
        headingEn: '3. त्रिलोचन भैरव (Trilocana Bhairava)',
        headingHi: '3. त्रिलोचन भैरव (Trilocana Bhairava)',
        bodyEn:
          'Etymology & Identity: Trilocana Bhairava (from tri, "three," and locana, "eyes or organs of luminous perception") is the three-eyed aspect of Bhairava who perceives the totality of manifest and unmanifest reality without obstruction.\n' +
          'Scriptural & Sacred Geography: In the Kāśī Khaṇḍa of the Skanda Purāṇa and Purāṇic tīrtha manuals, Trilocana (also venerated at the ancient Trilocana Mahādeva / Trilocana Ghāṭ precinct in Vārāṇasī) guards the triadic confluence of cosmic currents and grants direct visionary insight.\n' +
          'Iconography & Attributes: His three eyes correspond to Soma (the moon, cooling grace, left eye), Sūrya (the sun, dynamic illumination, right eye), and Agni (the consuming fire of wisdom, vertical central eye on the forehead), while his four hands bear the trident, noose (pāśa), goad (aṅkuśa), and skull-bowl.\n' +
          'Philosophical & Yogic Significance: Esoterically, Trilocana Bhairava governs the triads of Pramātṛ (knower), Pramāṇa (means of knowledge), and Prameya (object of knowledge), as well as the three times (past, present, future); meditating upon him unifies the left (Iḍā) and right (Piṅgalā) breaths into the central Suṣumṇā channel.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "त्रिलोचन भैरव" (त्रि = तीन + लोचन = नेत्र) भैरव का वह सर्वद्रष्टा स्वरूप है जो तीन दिव्य नेत्रों से दृश्य और अदृश्य समस्त ब्रह्माण्ड का युगपत् साक्षात्कार करता है।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: स्कन्द पुराण के काशी खण्ड और आगम ग्रन्थों में त्रिलोचन स्वरूप की विशेष महिमा वर्णित है; काशी में त्रिलोचन घाट एवं त्रिलोचन महादेव का क्षेत्र इसी त्रिकालदर्शी भैरव-शिव चेतना का प्राचीन केंद्र माना जाता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: इनके वाम नेत्र में चन्द्रमा (सोम/करुणा), दक्षिण नेत्र में सूर्य (तेज/क्रिया) और ललाट के मध्य तृतीय नेत्र में ज्ञानाग्नि (अग्नि) का निवास है; वे त्रिशूल, पाश, अंकुश और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: दार्शनिक रूप से त्रिलोचन भैरव प्रमाता (ज्ञाता), प्रमाण (ज्ञान-साधन) और प्रमेय (ज्ञेय) की त्रिपुटी के अधिष्ठाता हैं। योग-साधना में उनकी उपासना इड़ा और पिंगला नाड़ियों का संतुलन कर सुषुम्णा के माध्यम से त्रिकालदर्शी प्रज्ञा जाग्रत करती है।'
      },
      {
        headingEn: '4. काल भैरव (Kāla Bhairava)',
        headingHi: '4. काल भैरव (Kāla Bhairava)',
        bodyEn:
          'Etymology & Identity: Kāla Bhairava is the supreme temporal sovereign and fierce manifestation of Śiva who appeared from the blazing pillar of fire between Brahmā and Viṣṇu to sever the arrogant fifth head of Brahmā.\n' +
          'Scriptural & Sacred Geography: Extensively chronicled in the Śiva Purāṇa (Śatarudra Saṃhitā), Skanda Purāṇa (Kāśī Khaṇḍa, Ch. 31), and Ādi Śaṅkarācārya’s celebrated Kālabhairavāṣṭakam, Kāla Bhairava was appointed by Śiva as the Kāśī-Kotwāl (Chief Magistrate and Supreme Guardian of Vārāṇasī), where the kapāla of Brahmā finally fell from his hand at Kapālamocana Tīrtha.\n' +
          'Iconography & Attributes: Dark as a storm-cloud, naked or clad in elephant/tiger hide, accompanied by his black dog mount (śvāna-vāhana—symbolizing dharma and vigilance), he holds the severed head/kapāla, daṇḍa (staff of justice), trident, and ḍamaru.\n' +
          'Philosophical & Yogic Significance: As Kālabhairavāṣṭakam proclaims (kāśikāpurādhinātha kālabhairavaṃ bhaje), he devours the sins, ego-delusions, and karmic debts of devotees, governing the transition at death in Kāśī so that liberation (tāraka-mokṣa) may be realized without impediment.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "काल भैरव" साक्षात् भगवान् शिव के पूर्ण रौद्र एवं न्यायकारी अवतार हैं, जिनका प्राकट्य ब्रह्मा के पंचम अहंकारी मस्तक का नखाग्र से छेदन करने तथा विश्व में सत्य की मर्यादा स्थापित करने के लिए हुआ था।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: शिव पुराण (शतरुद्र संहिता), स्कन्द पुराण (काशी खण्ड, अध्याय ३१) और आदि शंकराचार्य रचित "कालभैरवाष्टकम्" में उन्हें "काशी का कोतवाल" (काशीपुराधिनाथ) घोषित किया गया है। कपालमोचन तीर्थ में उनके हाथ से ब्रह्मकपाल छूटने के पश्चात् वे सदा के लिए काशी के सर्वोच्च दण्डनायक बने।\n' +
          'प्रतिमाशास्त्र एवं आयुध: श्वान (कुक्कुर) वाहन पर आरूढ़, मेघ-समान श्याम वर्ण, सर्प-यज्ञोपवीत एवं मुण्डमाला धारी काल भैरव अपने हाथों में त्रिशूल, डमरू, धर्म-दण्ड और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: काल भैरव समय के भ्रम, मृत्यु-भय, ग्रह-पीड़ा और अहंकार-जनित पापों का भक्षण करने वाले हैं। काशी की मोक्ष-परम्परा में उनकी अनुमति और कृपा के बिना आध्यात्मिक सिद्धि पूर्ण नहीं मानी जाती।'
      },
      {
        headingEn: '5. त्रिपुर भैरव (Tripura Bhairava)',
        headingHi: '5. त्रिपुर भैरव (Tripura Bhairava)',
        bodyEn:
          'Etymology & Identity: Tripura Bhairava ("Lord of the Three Cities or Threefold Citadel") is the Śaiva-Śākta counterpart to the Tripurā goddesses (Tripurasundarī and Tripurabhairavī) and the destroyer of the three metallic fortresses (Tripura) of limitation.\n' +
          'Scriptural & Tantric Context: Revered in Śrīvidyā and Kaula Tantras (including the Vāmakeśvara Tantra, Tantrarāja Tantra, and Rudrayāmala), Tripura Bhairava guards the triadic geometry of the Śrīcakra and serves as the masculine consciousness-axis of the three bīja-kūṭas (Vāgbhava, Kāmarāja, and Śakti).\n' +
          'Iconography & Attributes: He is depicted with a radiant vermilion or rising-sun complexion, four-armed, adorned with a crescent moon on his matted locks, holding the bow of sugarcane/energy, arrows, noose (pāśa), and goad (aṅkuśa) or trident and kapāla.\n' +
          'Philosophical & Yogic Significance: The "three cities" (Tripura) represent the gross, subtle, and causal bodies (sthūla, sūkṣma, kāraṇa śarīra), the three guṇas (sattva, rajas, tamas), and the three states of waking, dreaming, and deep sleep; Tripura Bhairava pierces all three with a single arrow of non-dual awareness to reveal the Fourth state (Turīya).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "त्रिपुर भैरव" (त्रि = तीन + पुर = नगर/दुर्ग) तीनों पुरों के विजेता और अधिपति हैं, जो शाक्त परम्परा में भगवती त्रिपुरसुन्दरी एवं त्रिपुरभैरवी के भैरव-अधिष्ठान से गहन रूप से जुड़े हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: वामकेश्वर तन्त्र, तन्त्रराज तन्त्र और रुद्रयामल में त्रिपुर भैरव को त्रिकोण-मण्डल का रक्षक तथा पञ्चदशी/षोडशी महाविद्या के तीन कूटों (वाग्भव, कामराज और शक्ति कूट) का चैतन्य-आधार माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: इन्हें उदीयमान सूर्य या सिन्दूर के समान अरुण-तेजस्वी वर्ण, मस्तक पर अर्धचन्द्र तथा हाथों में पाश, अंकुश, त्रिशूल और कपाल (अथवा धनुष-बाण) धारण किए हुए चित्रित किया जाता है।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: दार्शनिक दृष्टि से "त्रिपुर" जीव के तीन शरीर (स्थूल, सूक्ष्म, कारण), तीन गुण (सत्त्व, रज, तम) और तीन अवस्थाएँ (जाग्रत, स्वप्न, सुषुप्ति) हैं। त्रिपुर भैरव की साधना इन तीनों आवरणों का भेदन कर साधक को चतुर्थ "तुरीय" अवस्था में प्रतिष्ठित करती है।'
      },
      {
        headingEn: '6. क्रोध भैरव (Krodha Bhairava)',
        headingHi: '6. क्रोध भैरव (Krodha Bhairava)',
        bodyEn:
          'Etymology & Identity: Krodha Bhairava (from krodha, "sacred, transformative wrath") is the fourth canonical member of the Aṣṭa Bhairava octad and the sixth of the Fifty-Two Bhairavas.\n' +
          'Scriptural & Directional Context: In the Tantrāloka, Agni Purāṇa, and Kāśī Khaṇḍa, Krodha Bhairava governs the South-Western quarter (Nairṛtya-dik), leads the fourth octad of the 64 Yoginī matrix alongside his Mātṛkā consort Vaiṣṇavī, and serves as the presiding Bhairava of major Śaktipīṭhas where fierce protection is required.\n' +
          'Iconography & Attributes: He is smoky-blue or dark purple in hue, mounted upon the celestial eagle Garuḍa (reflecting his pairing with Vaiṣṇavī), with blazing eyes and four arms bearing the discus (cakra), mace (gadā), conch (śaṅkha), and kapāla or sword.\n' +
          'Philosophical & Yogic Significance: Unlike ordinary human anger born of egoic frustration, Krodha Bhairava’s wrath is pure compassionate energy (kāruṇya-krodha) directed solely against spiritual inertia, demonic tyranny, and deep-seated vāsanās, transmuting reactive passion into unshakeable dharmic protective power.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "क्रोध भैरव" में "क्रोध" सामान्य मानवीय आवेश नहीं, अपितु अधर्म, तमस और अज्ञान के समूल नाश के लिए प्रकट हुई भगवान् शिव की दिव्य रूपांतरणकारी रौद्र-शक्ति है। वे अष्ट भैरवों में चतुर्थ और बावन भैरवों में छठे स्थान पर हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: तन्त्रालोक, अग्नि पुराण और काशी खण्ड के अनुसार क्रोध भैरव नैऋत्य कोण (दक्षिण-पश्चिम) के अधिपति हैं और मातृका वैष्णवी के साथ चौंसठ योगिनी मण्डल की चतुर्थ पंक्ति का संचालन करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: वैष्णवी शक्ति के युग्म होने से इनका वाहन गरुड़ है; ये धूम्र-नील वर्ण के हैं तथा अपनी चार भुजाओं में शंख, चक्र, गदा (अथवा खड्ग) और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग और तन्त्र में क्रोध भैरव साधक के भीतर दबे हुए तामसिक आलस्य, भय और वासना-ग्रंथियों को भस्म करने वाले हैं। उनकी उपासना से नकारात्मक क्रोध का रूपांतरण धर्म-रक्षा के सात्त्विक तेज में हो जाता है।'
      },
      {
        headingEn: '7. तांडव भैरव (Tāṇḍava Bhairava)',
        headingHi: '7. तांडव भैरव (Tāṇḍava Bhairava)',
        bodyEn:
          'Etymology & Identity: Tāṇḍava Bhairava ("Lord of the Cosmic Tāṇḍava Dance") embodies the dynamic, rhythmic kineticism of Bhairava as the supreme dancer (Naṭarāja-Bhairava) whose footsteps pulse as the heartbeat of the cosmos.\n' +
          'Scriptural & Architectural Context: Celebrated in the Śiva Sūtras (nartaka ātmā — "The Self is the Dancer", 3.9), Svacchanda Tantra, and temple sculpture at Chidambaram, Ellora, and Bhubaneswar, Tāṇḍava Bhairava executes both the fierce Rudra/Saṃhāra Tāṇḍava in the cremation ground and the blissful Ānanda Tāṇḍava of cosmic manifestation.\n' +
          'Iconography & Attributes: Shown in the dynamic ūrdhvajānu or catura dance posture amidst a ring of cosmic flames (prabhāmaṇḍala), with flying locks (jaṭā) and multi-armed symmetry holding the ḍamaru (drum of creation), agni (fire of dissolution), triśūla, kapāla, and abhaya-mudrā.\n' +
          'Philosophical & Yogic Significance: His dance performs the Pañcakṛtya—the five divine acts of creation (sṛṣṭi), maintenance (sthiti), dissolution (saṃhāra), concealment (tirobhāva), and grace (anugraha)—teaching the yogī to experience every movement of breath and thought as the sacred dance of Supreme Consciousness.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "तांडव भैरव" ब्रह्माण्डीय ताण्डव नृत्य के अधीश्वर हैं, जिनके पद-चाप और डमरू के नाद से सृष्टि के उत्थान और विलय की लय संचालित होती है।\n' +
          'शास्त्रीय एवं स्थापत्य संदर्भ: वसुगुप्त के शिवसूत्र ("नर्तक आत्मा" — ३.९), स्वच्छन्द तन्त्र तथा एलोरा, चिदम्बरम् और भुवनेश्वर के प्राचीन मंदिर शिल्पों में तांडव भैरव के आनंद-ताण्डव एवं रुद्र/संहार-ताण्डव का भव्य अंकन मिलता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रभामण्डल की ज्वालाओं के मध्य ऊर्ध्वजानु या चतुर नृत्य-मुद्रा में स्थित, बिखरी हुई जटाओं वाले तांडव भैरव अपने हाथों में सृजन का डमरू, संहार की अग्नि, त्रिशूल, कपाल और अभय मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: उनका ताण्डव भगवान् शिव के "पञ्चकृत्य" (सृष्टि, स्थिति, संहार, तिरोभाव और अनुग्रह) का प्रत्यक्ष नृत्य है। साधक के लिए तांडव भैरव प्राण-स्पन्दन और नाद-अनुसंधान के माध्यम से जड़ता को तोड़कर चैतन्य-आनंद में प्रवेश करने के प्रतीक हैं।'
      },
      {
        headingEn: '8. यम भैरव (Yama Bhairava)',
        headingHi: '8. यम भैरव (Yama Bhairava)',
        bodyEn:
          'Etymology & Identity: Yama Bhairava (from root yam-, "to restrain, govern, or uphold moral law") is the sovereign aspect of Bhairava who rules over Yama (the lord of death and dharma) and presides over the inescapable law of karmic reckoning.\n' +
          'Scriptural & Directional Context: In Purāṇic and Āgamic cosmography, while Yama Dharmarāja guards the southern direction as a lokapāla, Yama Bhairava stands above him as the supreme Śaiva overlord who can override Yama’s noose (kāla-pāśa) for initiated devotees of Śiva and Śakti.\n' +
          'Iconography & Attributes: Stern and majestic in appearance, dark-complexioned, associated with the buffalo or hound mount, he holds the kāla-daṇḍa (staff of final judgment), dharma-pāśa (noose of cosmic order), trident, and skull-cup.\n' +
          'Philosophical & Yogic Significance: On the path of Aṣṭāṅga and Haṭha Yoga, Yama Bhairava personifies supreme self-mastery and ethical restraint (the five Yamas: ahiṃsā, satya, asteya, brahmacarya, aparigraha); his worship frees the aspirant from the terror of Yama’s messengers (yamadūtas) and aligns individual conduct with cosmic Ṛta.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "यम भैरव" (धातु यम् = नियमन करना, संयम रखना) धर्मराज यम के भी नियामक, कर्म-विपाक के सर्वोच्च न्यायाधीश और मृत्यु की सीमा पर शासन करने वाले भैरव हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: पौराणिक एवं आगमिक परम्परा में दक्षिण दिशा के लोकपाल यमराज स्वयं जिन महाभैरव की आज्ञा के अधीन कार्य करते हैं, वे यम भैरव हैं। काशी और महाश्मशान की परम्परा में यम भैरव अपने भक्तों को यम-पाश और यम-यातना से मुक्त करने वाले माने गए हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: गंभीर एवं तेजोमय श्याम वर्ण वाले यम भैरव अपने हाथों में काल-दण्ड, धर्म-पाश, त्रिशूल और कपाल धारण करते हैं तथा न्याय की अटल दृष्टि रखते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योगशास्त्र में यम भैरव "अष्टांग योग" के प्रथम अंग "यम" (अहिंसा, सत्य, अस्तेय, ब्रह्मचर्य, अपरिग्रह) और इंद्रिय-संयम के अधिष्ठाता हैं। उनकी आराधना से साधक में अमोघ आत्म-अनुशासन और मृत्यु-भय से पूर्ण अभय जागृत होता है।'
      },
      {
        headingEn: '9. नीलकंठ भैरव (Nīlakaṇṭha Bhairava)',
        headingHi: '9. नीलकंठ भैरव (Nīlakaṇṭha Bhairava)',
        bodyEn:
          'Etymology & Identity: Nīlakaṇṭha Bhairava ("The Blue-Throated Bhairava") commemorates the supreme act of cosmic sacrifice during the churning of the Milky Ocean (Samudra-manthana), when Śiva drank the world-destroying Hālāhala (Kālakūṭa) poison and held it in his throat.\n' +
          'Scriptural & Tantric Context: Revered across the Mahābhārata, Śiva Purāṇa, Nīlakaṇṭha Stava, and Buddhist-Śaiva Tantric borderlands, Nīlakaṇṭha Bhairava bridges fierce protective power with boundless universal compassion (mahākaruṇā).\n' +
          'Iconography & Attributes: His body shines like camphor or autumn moonlight while his throat gleams with a deep sapphire-blue ring (held there by Pārvatī as Tārā/Mahāvidyā); he bears the trident, ḍamaru, rosary, and vessel of transmuted nectar.\n' +
          'Philosophical & Yogic Significance: In subtle-body anatomy, Nīlakaṇṭha Bhairava presides over the Viśuddha Cakra (the sixteen-petaled throat center of purification and ākāśa-tattva); through his grace, the yogī absorbs and neutralizes external hostility, physical toxins, and psychic bitterness without allowing them to descend into the heart or rise to cloud the mind.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "नीलकंठ भैरव" (नील = नीला + कंठ = गला) समुद्र-मंथन से निकले सृष्टि-विनाशक "हालाहल" (कालकूट) विष को लोक-कल्याणार्थ अपने कंठ में धारण करने वाले करुणावतार भैरव हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: शिव पुराण, महाभारत, नीलकंठ-स्तव तथा शाक्त तन्त्रों (जहाँ भगवती तारा उन्हें स्तनपान कराकर विष-ताप शांत करती हैं) में नीलकंठ भैरव को संकट-मोचन और विष-निवारण का सर्वोच्च देवता माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: कर्पूर के समान गौर देह और नीलमणि के समान गहरे नीले कंठ वाले नीलकंठ भैरव जटाजूट में चन्द्रमा तथा हाथों में त्रिशूल, डमरू, अक्षमाला और अमृत-कलश धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कुण्डलिनी योग में नीलकंठ भैरव सोलह दलों वाले "विशुद्ध चक्र" (कंठ-चक्र) के अधिष्ठाता हैं। उनकी साधना से शारीरिक-मानसिक विषों का शमन होता है और साधक संसार के कटु अनुभवों को कंठ में ही पचाकर हृदय की निर्मलता सुरक्षित रखता है।'
      },
      {
        headingEn: '10. श्मशान भैरव (Śmaśāna Bhairava)',
        headingHi: '10. श्मशान भैरव (Śmaśāna Bhairava)',
        bodyEn:
          'Etymology & Identity: Śmaśāna Bhairava ("Lord of the Cremation Ground") is the sovereign of the Mahāśmaśāna—both the physical cremation ground (such as Maṇikarṇikā and Hariścandra Ghāṭs in Kāśī) and the inner cremation ground of consciousness where all finite constructs are burned to ash.\n' +
          'Scriptural & Tantric Context: Central to the Kālīkula, Kāpālika, and Aghora streams, as well as the Vijñāna Bhairava Tantra and Karpūrādi Stotra, Śmaśāna Bhairava is the constant companion of Śmaśāna-Kālī and Tārā.\n' +
          'Iconography & Attributes: Smeared with fresh funeral ashes (citā-bhasma), garlanded with skulls, standing or seated amidst funeral pyres accompanied by jackals, yoginīs, and bhūtagaṇas, he wields the khaṭvāṅga (skull-topped staff), kapāla, kartrī (flaying knife), and ḍamaru.\n' +
          'Philosophical & Yogic Significance: As Abhinavagupta explains in Tantrāloka, the true śmaśāna is the empty sky of pure Consciousness (cid-ākāśa) into which all phenomena dissolve; worshipping Śmaśāna Bhairava strips away social pretension, body-identification (dehādhyāsa), and existential dread, awakening supreme non-attachment (parā-vairāgya).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "श्मशान भैरव" महाश्मशान के अधीश्वर हैं—वह पवित्र भूमि जहाँ पंचतत्त्वों से निर्मित नश्वर देह और सांसारिक अहंकार दोनों भस्म में परिणत होकर शुद्ध शिव-तत्त्व में लीन हो जाते हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: कालीकुल, कापालिक, अघोर आम्नाय, कर्पूरादि-स्तोत्र तथा काशी की मणिकर्णिका व हरिश्चन्द्र घाट परम्परा में श्मशान भैरव भगवती श्मशान-काली और तारा के नित्य सहचर के रूप में पूजित हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: चिता-भस्म से चर्चित अंग, मुण्डमाला और नागों से अलंकृत, प्रज्वलित चिताओं के मध्य योगिनी व भूतगणों से घिरे श्मशान भैरव अपने हाथों में खट्वांग, कपाल, कर्तरी (छुरिका) और डमरू धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: आचार्य अभिनवगुप्त के तन्त्रालोक के अनुसार वास्तविक "श्मशान" वह शून्य चिदाकाश है जहाँ समस्त कल्पित विकल्पों का दाह हो जाता है। श्मशान भैरव की उपासना देहाध्यास, लोक-भय और मोह को भस्म कर परम वैराग्य एवं आत्म-साक्षात्कार प्रदान करती है।'
      },
      {
        headingEn: '11. चंड भैरव (Caṇḍa Bhairava)',
        headingHi: '11. चंड भैरव (Caṇḍa Bhairava)',
        bodyEn:
          'Etymology & Identity: Caṇḍa Bhairava (from caṇḍa, "fierce, impetuous, blazing, or incandescent") is the third canonical member of the Aṣṭa Bhairavas and the eleventh of the Fifty-Two Bhairavas.\n' +
          'Scriptural & Directional Context: In the Tantrāloka, Rudrayāmala, and Kāśī Khaṇḍa, Caṇḍa Bhairava governs the Southern direction (Dakṣiṇa-dik), leads the third octad of the 64 Yoginī mandala alongside his Mātṛkā consort Kaumārī, and guards key Śaktipīṭha sanctuaries.\n' +
          'Iconography & Attributes: Radiant white or blazing coral-red in complexion, riding the peacock (mayūra-vāhana, shared with Kaumārī/Skanda), he carries the spear (śakti/vel), bow (dhanuṣa), arrow (bāṇa), and skull-cup (kapāla).\n' +
          'Philosophical & Yogic Significance: Caṇḍa Bhairava embodies the concentrated martial velocity of spiritual resolve (saṅkalpa-vega) that cuts through procrastination, cowardice, and adversarial obstacles (śatru-bādhā), channeling the fiery tejas of the Maṇipūra solar plexus upward along the central yogic axis.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "चंड भैरव" (संस्कृत "चण्ड" = प्रचण्ड, उग्र, उद्दाम तेजस्वी) अष्ट भैरवों के शास्त्रीय क्रम में तृतीय तथा बावन भैरवों की नामावली में ग्यारहवें स्थान पर प्रतिष्ठित हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: तन्त्रालोक, रुद्रयामल और काशी खण्ड के अनुसार चंड भैरव दक्षिण दिशा के स्वामी हैं तथा मातृका कौमारी के साथ चौंसठ योगिनी मण्डल के तृतीय अष्टक का अधिष्ठान करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: मयूर (मोर) वाहन पर आरूढ़, श्वेत अथवा प्रवाल-रक्त वर्ण वाले चंड भैरव अपनी चार भुजाओं में शक्ति (भाला), धनुष, बाण तथा कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: चंड भैरव अदम्य आध्यात्मिक शौर्य, एकाग्र संकल्प और मणिपूर चक्र की तेजस्विता के प्रतीक हैं। उनकी उपासना से साधक के भीतर का संशय, भीरुता और शत्रु-बाधाएँ नष्ट होती हैं तथा साधना के पथ पर अपराजेय आत्मबल प्राप्त होता है।'
      },
      {
        headingEn: '12. धूम्रलोचन भैरव (Dhūmralocana Bhairava)',
        headingHi: '12. धूम्रलोचन भैरव (Dhūmralocana Bhairava)',
        bodyEn:
          'Etymology & Identity: Dhūmralocana Bhairava ("The Smoke-Eyed Bhairava", from dhūmra, "smoke-colored or twilight-hued," and locana, "eyes") is the guardian of the threshold between manifest fire and unmanifest ether.\n' +
          'Scriptural & Tantric Context: Distinct from the Purāṇic demon of the same epithet, in Śaiva-Śākta Tantric manuals and Kṣetrapāla lists Dhūmralocana Bhairava is a protective Bhairava associated with the smoky-hued goddess Dhūmāvatī and the twilight rituals (sandhyā-kāla) of the Yoginī circle.\n' +
          'Iconography & Attributes: Clad in smoky-grey garments, surrounded by a veil of sacred homa-smoke, with piercing tawny-grey eyes, he holds the winnowing basket or staff, trident, noose, and skull-bowl filled with consecrated ash.\n' +
          'Philosophical & Yogic Significance: In yogic phenomenology, dhūmra (smoke) is the very first internal visionary sign (pūrvarūpa) seen when prāṇa enters the Suṣumṇā (as taught in Śvetāśvatara Upaniṣad 2.11: nīhāra-dhūmārkānilānalānām); Dhūmralocana Bhairava guides the meditator safely through the obscurity of cosmic illusion (māyā-dhūma) into the clear flame of self-knowledge.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "धूम्रलोचन भैरव" (धूम्र = धुएँ के वर्ण का / संध्या-वर्णी + लोचन = नेत्र) भैरव का वह रहस्यमय स्वरूप है जो व्यक्त अग्नि और अव्यक्त आकाश के संधि-स्थल पर पहरा देता है।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: पौराणिक दैत्य से सर्वथा भिन्न, शैव-शाक्त आगमों और क्षेत्रपाल सूचियों में धूम्रलोचन भैरव चौंसठ योगिनी मण्डल के एक सजग प्रहरी हैं, जिनका तात्त्विक संबंध महाविद्या धूमावती और संध्याकालीन होम-साधना से जुड़ता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: धूम्र-धूसर आभा से युक्त, पवित्र यज्ञ-धूम के आवरण में स्थित ये भैरव अपने हाथों में त्रिशूल, पाश, दण्ड और भस्म-पूर्ण कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: श्वेताश्वतर उपनिषद् (२.११ — "नीहारधूमार्वानिलानलानाम्") के अनुसार जब प्राण सुषुम्णा में प्रवेश करता है, तब साधक को सर्वप्रथम "धूम" (धुएँ) की आंतरिक ज्योतिर्मयी प्रतीति होती है। धूम्रलोचन भैरव माया के धुंधले आवरण को भेदकर साधक को शुद्ध ज्ञानाग्नि तक पहुँचाते हैं।'
      },
      {
        headingEn: '13. वीर भैरव (Vīra Bhairava)',
        headingHi: '13. वीर भैरव (Vīra Bhairava)',
        bodyEn:
          'Etymology & Identity: Vīra Bhairava ("The Heroic Bhairava") is the quintessential archetype of the spiritual warrior (vīra) and overlaps closely with Vīrabhadra, the fierce emanation of Śiva who dismantled Dakṣa’s ritualistic arrogance.\n' +
          'Scriptural & Tantric Context: Prominently invoked in the Kulārṇava Tantra, Rudrayāmala, and Kaula Vīrācāra manuals, Vīra Bhairava is the patron deity of the vīra-sādhaka—the practitioner who has risen above herd-like bound consciousness (paśu-bhāva) to confront dualistic fear head-on.\n' +
          'Iconography & Attributes: Towering and muscular, blazing like molten gold or crimson fire, wearing a garland of severed heads and weapons of war, he wields the great sword (mahākhaḍga), shield (kheṭaka), trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: In Tantric sadhana, Vīra Bhairava bestows vīrya (spiritual virility, fearlessness, and unwavering mindfulness), enabling the practitioner to cut through the eight fetters (aṣṭa-pāśa: hatred, shame, fear, doubt, pedigree-pride, etc.) and ascend directly from Vīra-bhāva to Divya-bhāva.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "वीर भैरव" आध्यात्मिक पराक्रम और निर्भयता के सर्वोच्च आदर्श हैं, जिनका स्वरूप दक्ष-यज्ञ के विध्वंसक वीरभद्र और तांत्रिक "वीराचार" के अधिष्ठाता देव से एकाकार है।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: कुलार्णव तन्त्र, रुद्रयामल और कौल आगमों में वीर भैरव को "वीर-साधक" का इष्ट और रक्षक माना गया है—वह साधक जो "पशु-भाव" के अज्ञान और भय से ऊपर उठकर सत्य का साक्षात्कार करने का साहस रखता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: तप्त स्वर्ण या सिन्दूर के समान तेजस्वी, विशालकाय और युद्ध-मुद्रा में तत्पर वीर भैरव अपने हाथों में महाखड्ग, खेटक (ढाल), त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: तन्त्र-दर्शन में वीर भैरव साधक को "अष्ट-पाश" (घृणा, लज्जा, भय, शंका, जुगुप्सा, कुल, शील और जाति के अहंकार) का छेदन करने का आत्मबल प्रदान करते हैं और उसे वीर-भाव से दिव्य-भाव की ओर अग्रसर करते हैं।'
      },
      {
        headingEn: '14. रुद्र भैरव (Rudra Bhairava)',
        headingHi: '14. रुद्र भैरव (Rudra Bhairava)',
        bodyEn:
          'Etymology & Identity: Rudra Bhairava unites the ancient Vedic storm-and-healing deity Rudra (from root rud-, "to roar" or "he who drives away suffering, rujam drāvayati") with the Tantric fullness of Bhairava.\n' +
          'Scriptural & Directional Context: In the Śrī Rudram (Taittirīya Saṃhitā 4.5), Śiva Purāṇa, and Tantric Aṣṭa Bhairava lists (where Ruru/Rudra Bhairava often presides over the South-Eastern Āgneya quarter alongside Māheśvarī), Rudra Bhairava bridges Nigama (Veda) and Āgama (Tantra).\n' +
          'Iconography & Attributes: Coppery-red or camphor-white in complexion, mounted upon the bull (vṛṣabha-vāhana), adorned with coiled serpents and rudrākṣa beads, he holds the Pināka bow, trident, ḍamaru, and kapāla.\n' +
          'Philosophical & Yogic Significance: As the roaring vital breath (prāṇa-rudra) within the body and the purifying tempest in nature, Rudra Bhairava burns away the triple afflictions (ādhyātmika, ādhibhautika, ādhidaivika tāpa) and reveals the auspicious heart of Śiva hidden within the fiercest storm.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "रुद्र भैरव" वैदिक संहिताओं के "रुद्र" ("रुजं द्रावयति इति रुद्रः"—जो दुःख और रोग को भगा देते हैं) तथा आगमिक भैरव तत्त्व का अद्भुत समन्वय हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: यजुर्वेद के श्रीरुद्रम् (चमक-नमक), शिव पुराण और तन्त्र-शास्त्र (जहाँ रुरु/रुद्र भैरव आग्नेय कोण और मातृका माहेश्वरी से संबद्ध हैं) में रुद्र भैरव निगम और आगम की एकता के सेतु हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: वृषभ (नन्दी) वाहन पर आरूढ़, ताम्र-अरुण अथवा कर्पूर-गौर वर्ण, रुद्राक्ष और सर्पों से अलंकृत रुद्र भैरव पिनाक धनुष, त्रिशूल, डमरू और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: देह के भीतर "प्राण-रुद्र" के रूप में वे नाड़ियों के अवरोधों को दूर करते हैं तथा आध्यात्मिक, आधिभौतिक और आधिदैविक—तीनों प्रकार के तापों का नाश कर साधक को शिवत्व का बोध कराते हैं।'
      },
      {
        headingEn: '15. क्षेत्रपाल भैरव (Kṣetrapāla Bhairava)',
        headingHi: '15. क्षेत्रपाल भैरव (Kṣetrapāla Bhairava)',
        bodyEn:
          'Etymology & Identity: Kṣetrapāla Bhairava ("Guardian of the Sacred Field") is the supreme custodian of every consecrated temple precinct, pilgrimage city (tīrtha-kṣetra), Śaktipīṭha, and ritual mandala.\n' +
          'Scriptural & Architectural Context: Across the Mayamata, Kāmikāgama, Agni Purāṇa, and Skanda Purāṇa, no Śaiva, Śākta, or even major Vaiṣṇava/Jaina temple ritual is complete without offering bali and homage to Kṣetrapāla Bhairava, whose shrine is canonically positioned in the North-Eastern (Īśāna) or threshold sector of the temple.\n' +
          'Iconography & Attributes: Depicted standing in samabhaṅga or tribhaṅga posture, naked (digambara) with flame-like upright hair, accompanied by his faithful hound, holding the ghantā (ritual bell), trident, kapāla, and club (gadā/daṇḍa).\n' +
          'Philosophical & Yogic Significance: As the Bhagavad Gītā (13.1) states, the human body itself is the Kṣetra (field) and Consciousness is the Kṣetrajña (knower of the field); Kṣetrapāla Bhairava guards the sanctity of both the external pilgrimage sanctuary and the yogī’s physical-subtle body against intrusive or fragmented forces.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "क्षेत्रपाल भैरव" (क्षेत्र = पवित्र भू-भाग/देह + पाल = रक्षक) प्रत्येक तीर्थ-क्षेत्र, शक्तिपीठ, देवालय और तांत्रिक पूजा-मण्डल के सर्वोच्च प्रहरी एवं संरक्षक हैं।\n' +
          'शास्त्रीय एवं स्थापत्य संदर्भ: मयमतम्, कामिकागम, अग्नि पुराण और स्कन्द पुराण के वास्तु-विधान के अनुसार देवालय के ईशान कोण या द्वार-परिसर में क्षेत्रपाल भैरव की स्थापना अनिवार्य है, और उनकी आज्ञा व बलि-पूजा के बिना कोई भी महापूजा या अनुष्ठान पूर्ण नहीं होता।\n' +
          'प्रतिमाशास्त्र एवं आयुध: ऊर्ध्व-केश, दिगम्बर अथवा व्याघ्रचर्म धारी, श्वान (कुक्कुर) के साथ तत्पर खड़े क्षेत्रपाल भैरव अपने हाथों में घण्टा, त्रिशूल, कपाल और गदा/दण्ड धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: गीता और आगम दर्शन में मानव देह को भी "क्षेत्र" और आत्मा को "क्षेत्रज्ञ" कहा गया है। अतः क्षेत्रपाल भैरव बाह्य तीर्थ-भूमि की रक्षा करने के साथ-साथ साधक के सूक्ष्म शरीर और प्राण-मण्डल को बाह्य नकारात्मक अतिक्रमणों से सुरक्षित रखते हैं।'
      },
      {
        headingEn: '16. लोकनाथ भैरव (Lokanātha Bhairava)',
        headingHi: '16. लोकनाथ भैरव (Lokanātha Bhairava)',
        bodyEn:
          'Etymology & Identity: Lokanātha Bhairava ("Lord and Protector of the Worlds") represents the sovereign, pastoral, and universally accessible face of Bhairava who sustains the fourteen worlds (caturdaśa-bhuvana).\n' +
          'Scriptural & Regional Context: Attested in Śaiva Purāṇas, Nātha Siddha lineages, and eastern Indian temple traditions (such as Odisha and Bengal, where Lokanātha Śiva-Bhairava is deeply venerated alongside the Yoginīs), he bridges ascetic renunciation with civic and cosmic welfare (lokasaṅgraha).\n' +
          'Iconography & Attributes: Serene yet commanding, five-faced or single-faced with a third eye, adorned with the crescent moon and flowing Gaṅgā, he extends the varada (boon-giving) and abhaya (fear-not) mudrās while holding the trident and rosary.\n' +
          'Philosophical & Yogic Significance: Lokanātha Bhairava reminds the Tantric practitioner that the world (loka) is not a dualistic illusion to be despised, but the living body of Śiva-Śakti (viśvamaya-bhairava), cultivating universal compassion and responsible stewardship alongside inner liberation.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "लोकनाथ भैरव" (लोक = चतुर्दश भुवन/जनमानस + नाथ = स्वामी एवं रक्षक) भैरव का वह लोक-कल्याणकारी और सर्वसुलभ स्वरूप है जो संपूर्ण चराचर जगत का भरण-पोषण और रक्षण करता है।\n' +
          'शास्त्रीय एवं क्षेत्रीय संदर्भ: शैव पुराणों, नाथ-सिद्ध परम्परा तथा पूर्वी भारत (विशेषतः ओडिशा और बंगाल की लोकनाथ-शैव परम्परा) में लोकनाथ भैरव की गहरी प्रतिष्ठा है, जहाँ वे योगिनी-मण्डल और जन-समाज के बीच करुणा के सेतु हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: शांत किंतु तेजोमय मुखमण्डल, जटाजूट में गंगा और अर्धचन्द्र धारण किए लोकनाथ भैरव अपने हाथों से वरद और अभय मुद्रा प्रदान करते हैं तथा त्रिशूल व अक्षमाला धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: आगम दर्शन में "भैरव" शब्द का भ-कार "भरण" (विश्व का पोषण) का प्रतीक है। लोकनाथ भैरव यह बोध कराते हैं कि यह समग्र जगत शिव और शक्ति की ही चिन्मय अभिव्यक्ति है, अतः आत्म-मुक्ति के साथ लोक-मंगल की भावना अविभाज्य है।'
      },
      {
        headingEn: '17. पापभंजन भैरव (Pāpabhañjana Bhairava)',
        headingHi: '17. पापभंजन भैरव (Pāpabhañjana Bhairava)',
        bodyEn:
          'Etymology & Identity: Pāpabhañjana Bhairava (from pāpa, "karmic transgression, sin, or moral constriction," and bhañjana, "shattering, pulverizing, or dissolving") is the great absolver of karmic bondage.\n' +
          'Scriptural & Liturgical Context: In the Kāśī Khaṇḍa and Purāṇic prāyaścitta (expiation) traditions, Bhairava is celebrated as Pāpabhakṣaṇa and Pāpabhañjana—the deity who consumes the accumulated sins (sañcita-pāpa) of those who enter his sanctuary with sincere repentance and awareness.\n' +
          'Iconography & Attributes: Blazing like purifying fire, four-armed, he wields the vajra or iron club (mudgara) that shatters karmic chains, the noose-cutting sword (khaḍga), the trident, and the skull-cup in which karmic residues are incinerated.\n' +
          'Philosophical & Yogic Significance: In Kashmir Śaivism and Śākta Tantra, the ultimate "sin" (pāpa) is āṇava-mala—the primal self-contraction whereby infinite Consciousness mistakes itself for a helpless, guilty finite creature; Pāpabhañjana Bhairava shatters this constriction and restores the innate purity of the Self.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "पापभंजन भैरव" (पाप = अशुभ कर्म-संस्कार/पाश + भंजन = चूर-चूर करना या नष्ट करना) जीव के संचित पापों, अपराध-बोध और कर्म-बन्धनों को भस्म करने वाले मोचक भैरव हैं।\n' +
          'शास्त्रीय एवं उपासना संदर्भ: स्कन्द पुराण के काशी खण्ड और कालभैरवाष्टकम् ("भानुकोटिभास्वरं भवाब्धितारकं परं... पापभक्षणम्") में भैरव को पापों का भक्षण और भंजन करने वाला सर्वोच्च देवता कहा गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रज्वलित अग्नि के समान तेजस्वी पापभंजन भैरव अपने हाथों में कर्म-बेड़ियों को तोड़ने वाला मुद्गर/वज्र, अज्ञान-छेदक खड्ग, त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: अद्वैत शैव दर्शन के अनुसार जीव का सबसे मूल पाप "आणव मल" (स्वयं की अनन्त शिव-चेतना को भूलकर अपने को क्षुद्र एवं पापी समझना) है। पापभंजन भैरव की कृपा इस आत्म-संकोच की ग्रंथि को तोड़कर आत्मा की मूल निर्मलता प्रकट करती है।'
      },
      {
        headingEn: '18. महाभैरव (Mahābhairava)',
        headingHi: '18. महाभैरव (Mahābhairava)',
        bodyEn:
          'Etymology & Identity: Mahābhairava ("The Great Supreme Bhairava") is the macrocosmic totality of Bhairava consciousness—explained by Jayaratha and Abhinavagupta through the hermeneutic etymology (nirukti) of the three syllables BHAI-RA-VA: Bharaṇa (sustaining the universe), Ravaṇa (withdrawing/resonating all things), and Vamana (projecting/disgorging the cosmos).\n' +
          'Scriptural & Tantric Context: Revered in the Vijñāna Bhairava Tantra, Mālinīvijayottara Tantra, Tantrāloka, and Kālikā Purāṇa (where Mahābhairava is the supreme Lord of Kāmarūpa and the 64 Yoginīs), he stands above all partial departmental deities.\n' +
          'Iconography & Attributes: Envisioned in five-faced or ten-armed cosmic majesty, shining with the brilliance of ten million suns, embracing Mahābhairavī, and holding all principal divine weapons—trident, sword, ḍamaru, kapāla, pāśa, aṅkuśa, bow, arrow, shield, and bell.\n' +
          'Philosophical & Yogic Significance: Mahābhairava is Pūrṇāhantā—the supreme, all-inclusive "I-consciousness" of Paramaśiva in which Śiva and Śakti, transcendent silence and dynamic manifestation, are indivisibly one.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "महाभैरव" समग्र भैरव-चेतना के सर्वोच्च समष्टि रूप हैं। तन्त्रालोक में "भैरव" शब्द की निरुक्ति करते हुए कहा गया है—जो विश्व का "भरण" (धारण), "रवण" (संहरण/नाद) और "वमन" (सृजन) करते हैं, वे परम सत्ता महाभैरव हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: विज्ञानभैरव तन्त्र, मालिनीविजयोत्तर तन्त्र, तन्त्रालोक तथा कालिका पुराण (जहाँ कामाख्या और कामरूप पीठ में महाभैरव सर्वोच्च अधिपति हैं) में महाभैरव को समस्त ६४ योगिनियों और ३६ तत्त्वों का स्वामी कहा गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: कोटि सूर्य के समान भास्वर, पञ्चमुख एवं दशभुज महाभैरव भगवती महाभैरवी के साथ आलिंगित रहते हैं तथा त्रिशूल, खड्ग, डमरू, कपाल, पाश, अंकुश, धनुष, बाण, खेटक और घण्टा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: दार्शनिक रूप से महाभैरव "पूर्णाहन्ता" (पूर्ण अद्वैत अहं-चेतना) के प्रतीक हैं, जिसमें प्रकाश (शिव) और विमर्श (शक्ति) का कोई भेद नहीं रहता और साधक सर्वत्र एक ही महाभैरव का दर्शन करता है।'
      },
      {
        headingEn: '19. वत्सनाभ भैरव (Vatsanābha Bhairava)',
        headingHi: '19. वत्सनाभ भैरव (Vatsanābha Bhairava)',
        bodyEn:
          'Etymology & Identity: Vatsanābha Bhairava takes his name from Vatsanābha (Aconitum ferox, the sovereign Himalayan tuber poison), signifying the fierce alchemical lord who masters and transmutes the most lethal forces in nature into life-saving medicine.\n' +
          'Scriptural & Rasāyana Context: In Siddha Rasāyana (Tantric alchemy, such as the Rasārṇava and Rasaratnasamuccaya) and Nātha-Aghora traditions, vatsanābha and mercury (pārada, the seed of Bhairava) are purified through mantra and fire to conquer disease and senility; Vatsanābha Bhairava presides over this perilous alchemical threshold.\n' +
          'Iconography & Attributes: Deep blue-black like the root of aconite, fierce-eyed, adorned with nāgas and medicinal herbs of the high Himālayas, he holds the mortar/crucible-kapāla, trident, vajra, and alchemical staff.\n' +
          'Philosophical & Yogic Significance: He embodies the core Tantric principle quoted in the Kulārṇava Tantra: "By that very substance through which bound beings fall, the wise attain liberation when guided by method" (yenaiva patanaṃ dravyaiḥ siddhis tenaiva coditā)—turning poison into nectar (viṣasya amṛtīkaraṇam).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "वत्सनाभ भैरव" का नाम हिमालय के प्रसिद्ध महाविष "वत्सनाभ" पर आधारित है; वे उस उग्र रसायन-विद्या और भैरव-तेज के अधिपति हैं जो तीव्रतम विष को भी जीवनरक्षक औषधि और अमृत में रूपांतरित कर देता है।\n' +
          'शास्त्रीय एवं रसायन संदर्भ: रसार्णव, रसरत्नसमुच्चय तथा नाथ-सिद्ध आयुर्वेद और तांत्रिक रसायन परम्परा में पारद (शिव-बीज) और वत्सनाभ के शोधन के अधिष्ठाता के रूप में वत्सनाभ भैरव का स्मरण किया जाता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: गहरे नील-श्याम वर्ण, उग्र नेत्रों और नाग-आभूषणों से युक्त वत्सनाभ भैरव अपने हाथों में रसायन-कपाल, त्रिशूल, वज्र और औषध-दण्ड धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कुलार्णव तन्त्र के प्रसिद्ध सूत्र ("येनैव पतनं द्रव्यैः सिद्धिस्तेनैव चोदिता") के अनुरूप वत्सनाभ भैरव यह सिखाते हैं कि जिन विषयों और संकटों से सामान्य जीव का पतन होता है, योग-युक्ति और भैरव-बोध से वे ही मोक्ष और सिद्धि के साधन बन जाते हैं।'
      },
      {
        headingEn: '20. चित्रभानु भैरव (Citrabhānu Bhairava)',
        headingHi: '20. चित्रभानु भैरव (Citrabhānu Bhairava)',
        bodyEn:
          'Etymology & Identity: Citrabhānu Bhairava (from citra, "wondrous, variegated, multicolored," and bhānu, "light, ray, sun, or fire") is the radiant solar-igneous manifestation of Bhairava.\n' +
          'Scriptural & Vedic-Āgamic Context: In Sanskrit lexicon and Vedic-Purāṇic tradition, Citrabhānu is a sacred name of both Agni (the ritual fire) and Sūrya (the sun), as well as the sixteenth year of the sixty-year Jovian cycle (Saṃvatsara); in Śaiva Āgamas, Citrabhānu Bhairava governs the luminous rays (bhānu) that irradiate the Yoginī mandala.\n' +
          'Iconography & Attributes: Shining with a spectrum of golden, crimson, and ultraviolet-white flames, three-eyed, wearing a crown of solar rays, he carries the lotus, flaming trident, discus/solar wheel, and kapāla.\n' +
          'Philosophical & Yogic Significance: Within the subtle body, Citrabhānu Bhairava illuminates the Citriṇī Nāḍī—the innermost luminous filament within the Suṣumṇā channel—banishing mental depression, inner darkness, and perceptual dullness with the variegated splendor of pure Consciousness.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "चित्रभानु भैरव" (चित्र = अद्भुत/बहुवर्णी + भानु = किरण/सूर्य/अग्नि) भैरव का वह परम ज्योतिर्मय स्वरूप है जिसमें सूर्य का तेज और अग्नि की पावनता एक साथ प्रस्फुटित होती है।\n' +
          'शास्त्रीय एवं आगमिक संदर्भ: संस्कृत वाङ्मय में "चित्रभानु" अग्निदेव, सूर्य तथा साठ संवत्सरों में से सोलहवें संवत्सर का नाम है; शैव-शाक्त आगमों में चित्रभानु भैरव योगिनी-मण्डल को आलोकित करने वाली दिव्य रश्मियों के स्वामी हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: स्वर्ण, सिन्दूर और माणिक्य के समान बहुवर्णी ज्वालाओं से दीप्त, सूर्य-प्रभा मुकुट धारी चित्रभानु भैरव अपने हाथों में पद्म, अग्नि-त्रिशूल, चक्र और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कुण्डलिनी विज्ञान में सुषुम्णा नाड़ी के भीतर स्थित सूक्ष्म "चित्रिणी नाड़ी" को आलोकित करने वाले देवता चित्रभानु भैरव ही हैं; उनकी उपासना से चित्त का अवसाद, अज्ञान-जनित अंधकार और नेत्र-दोष दूर होकर दिव्य प्रज्ञा का उदय होता है।'
      },
      {
        headingEn: '21. भीषण भैरव (Bhīṣaṇa Bhairava)',
        headingHi: '21. भीषण भैरव (Bhīṣaṇa Bhairava)',
        bodyEn:
          'Etymology & Identity: Bhīṣaṇa Bhairava ("The Terrifying or Awe-Inspiring Bhairava", from root bhī-, "to fear") is the seventh canonical member of the Aṣṭa Bhairavas and the twenty-first of the Fifty-Two Bhairavas.\n' +
          'Scriptural & Directional Context: In the Tantrāloka, Rudrayāmala, and Kāśī Khaṇḍa, Bhīṣaṇa Bhairava presides over the Northern quarter (Uttara-dik, or in variant lists aligns with the Cāmuṇḍā octad), commanding the seventh row of the 64 Yoginī matrix alongside the fierce Mātṛkā Cāmuṇḍā.\n' +
          'Iconography & Attributes: Blood-red or midnight-black in complexion, seated upon a corpse or lion/preta-vāhana, with protruding fangs and a reverberating laugh (aṭṭahāsa), he holds the khaṭvāṅga, trident, sword (khaḍga), and skull-cup.\n' +
          'Philosophical & Yogic Significance: As the Upaniṣads declare of Brahman (bhayānāṃ bhayaṃ bhīṣaṇaṃ bhīṣaṇānām), Bhīṣaṇa Bhairava is terrifying only to the forces of terror, malice, and egoic resistance; to the surrendered devotee, his awe-inspiring presence is an impenetrable fortress of fearlessness.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "भीषण भैरव" (धातु भी = भय उत्पन्न करना; आसुरी शक्तियों के लिए परम भयकारी) अष्ट भैरवों के शास्त्रीय क्रम में सप्तम तथा बावन भैरवों में इक्कीसवें स्थान पर प्रतिष्ठित हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: तन्त्रालोक, रुद्रयामल और काशी खण्ड में भीषण भैरव उत्तर दिशा के रक्षक हैं तथा सप्तम मातृका चामुण्डा के साथ चौंसठ योगिनी मण्डल के सप्तम अष्टक का संचालन करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रेत अथवा सिंह वाहन पर आसीन, रक्त-वर्ण या गहन कृष्ण वर्ण, विकराल दंष्ट्रा और अट्टहास से युक्त भीषण भैरव अपने हाथों में खट्वांग, त्रिशूल, खड्ग और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: उपनिषदों के वचन ("भयानां भयं भीषणं भीषणानाम्") के अनुसार भीषण भैरव स्वयं भय के लिए भी भय हैं। आसुरी वृत्तियों, प्रेत-बाधाओं और अहंकार के लिए वे भीषण हैं, किंतु शरणागत साधक के लिए वे परम अभय-दुर्ग हैं।'
      },
      {
        headingEn: '22. संहार भैरव (Saṃhāra Bhairava)',
        headingHi: '22. संहार भैरव (Saṃhāra Bhairava)',
        bodyEn:
          'Etymology & Identity: Saṃhāra Bhairava (from saṃ-hṛ, "to gather together, withdraw, or reabsorb") is the eighth and culminating member of the canonical Aṣṭa Bhairava octad and the twenty-second of the Fifty-Two Bhairavas.\n' +
          'Scriptural & Directional Context: In the Tantrāloka, Agni Purāṇa, and Kāśī Khaṇḍa, Saṃhāra Bhairava governs the North-Eastern direction (Īśāna-dik—the sacred portal of Śiva) and presides over the eighth and final octad of the 64 Yoginī matrix alongside Caṇḍikā / Mahālakṣmī.\n' +
          'Iconography & Attributes: Lightning-hued or glowing like the embers of cosmic dissolution, multi-armed (often ten-armed or four-armed), wearing an elephant hide and serpent ornaments, mounted on a lion, holding the trident, ḍamaru, conch, discus, sword, shield, bow, arrow, pāśa, and kapāla.\n' +
          'Philosophical & Yogic Significance: In Kashmir Śaiva Krama philosophy, Saṃhāra is not nihilistic destruction, but complete reabsorption (pratyāhāra/laya) of differentiated sensory objects back into the undivided fire of pure Consciousness, granting final liberation (mokṣa) at the completion of the cosmic cycle.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "संहार भैरव" (सम् + हृ = समेटना, पुनः अपने मूल कारण में लीन करना) अष्ट भैरवों में अष्टम (अंतिम) तथा बावन भैरवों की सूची में बाईसवें स्थान पर प्रतिष्ठित हैं।\n' +
          'शास्त्रीय एवं दिशात्मक संदर्भ: तन्त्रालोक, अग्नि पुराण और काशी खण्ड के अनुसार संहार भैरव पवित्र ईशान कोण (उत्तर-पूर्व) के अधिपति हैं तथा अष्टम मातृका चण्डिका/महालक्ष्मी के साथ चौंसठ योगिनी चक्र के अंतिम अष्टक के नायक हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: सिंह वाहन पर आरूढ़, विद्युत् या प्रलयाग्नि के समान दमकते हुए वर्ण वाले, गजचर्म व नाग-भूषण धारी संहार भैरव त्रिशूल, डमरू, खड्ग, खेटक, पाश, अंकुश और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: काश्मीरी शैव और क्रम दर्शन में "संहार" का अर्थ विनाश नहीं, अपितु बहिर्मुखी इंद्रिय-प्रपंच का पुनः अंतर्मुखी शुद्ध चेतना में पूर्ण "लय" (प्रत्याहार) है। संहार भैरव कर्म-चक्र का उपसंहार कर साधक को कैवल्य-मोक्ष प्रदान करते हैं।'
      },
      {
        headingEn: '23. क्रोधनाथ भैरव (Krodhanātha Bhairava)',
        headingHi: '23. क्रोधनाथ भैरव (Krodhanātha Bhairava)',
        bodyEn:
          'Etymology & Identity: Krodhanātha Bhairava ("Sovereign Master of Wrathful Energies") is distinct from Krodha Bhairava (#6): whereas Krodha Bhairava is the directional force of sacred wrath, Krodhanātha is the transcendent Nātha (Lord) who commands and regulates all wrathful retinues (krodha-gaṇas).\n' +
          'Scriptural & Tantric Context: Invoked in Nātha-panthī, Kaula, and Śākta Pīṭha protection liturgies (especially in Himalayan and eastern Indian Tantric traditions), Krodhanātha Bhairava stands as the supreme commander over fierce kṣetrapālas and yoginī hosts.\n' +
          'Iconography & Attributes: Crowned with matted locks and a blazing third eye, dark crimson in complexion, wearing earrings of coiled cobras, he holds the vajra-daṇḍa (thunderbolt staff), flaming trident, hook (aṅkuśa) of mastery, and skull-bowl.\n' +
          'Philosophical & Yogic Significance: For the advanced practitioner working with intense prāṇic and kundalinī currents, Krodhanātha Bhairava provides sovereign self-command (nāthatva), ensuring that fierce inner energies remain under the absolute governance of witness-consciousness.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "क्रोधनाथ भैरव" (क्रोध + नाथ = उग्र शक्तियों के सर्वोच्च स्वामी) छठे क्रमांक के क्रोध भैरव से इस अर्थ में विशिष्ट हैं कि वे समस्त उग्र गणों, रुद्र-शक्तियों और प्रचण्ड ऊर्जाओं के नियामक "नाथ" हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: नाथ-सिद्ध परम्परा, कौल मार्ग और शक्तिपीठों के रक्षा-विधानों में क्रोधनाथ भैरव का आह्वान उग्र क्षेत्रपालों और योगिनी-दलों के सेनापति के रूप में किया जाता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: गहरे रक्त-श्याम वर्ण, नाग-कुण्डल, प्रज्वलित तृतीय नेत्र और जटा-मुकुट से युक्त क्रोधनाथ भैरव अपने हाथों में वज्र-दण्ड, अग्नि-त्रिशूल, नियंत्रण का अंकुश और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: जब साधना में तीव्र कुण्डलिनी या उग्र प्राण-ऊर्जा जाग्रत होती है, तब क्रोधनाथ भैरव उस प्रचण्ड शक्ति पर पूर्ण आध्यात्मिक नियंत्रण ("नाथत्व") प्रदान करते हैं, जिससे साधक का संतुलन कभी भंग नहीं होता।'
      },
      {
        headingEn: '24. कालाग्नि भैरव (Kālāgni Bhairava)',
        headingHi: '24. कालाग्नि भैरव (Kālāgni Bhairava)',
        bodyEn:
          'Etymology & Identity: Kālāgni Bhairava ("The Bhairava of the Fire of Final Time"), identical in essence with Kālāgnirudra, is the cosmic conflagration that rises from the subterranean depths at the end of a kalpa to consume the lower worlds.\n' +
          'Scriptural & Cosmological Context: Described in the Kālāgnirudra Upaniṣad, Śiva Purāṇa, Mayamata, and Tantrāloka (Ch. 8 on Bhuvana-adhvan), Kālāgni Bhairava abides at the very base of the cosmic egg (brahmāṇḍa) below Pātāla, where his breath ignites the fire of universal dissolution.\n' +
          'Iconography & Attributes: Blazing like a mountain of smokeless crimson fire, surrounded by tongues of lightning, three-eyed and four-armed, he wields the flaming triśūla, agni-kuṇḍa/kapāla, sword of time, and ḍamaru.\n' +
          'Philosophical & Yogic Significance: Through the sacred practice of tripuṇḍra-dhāraṇa (applying the three horizontal lines of consecrated bhasma taught in the Kālāgnirudra Upaniṣad) and Mūlādhāra-agni contemplation, Kālāgni Bhairava incinerates the seeds of future rebirth (karma-bīja) in the fire of non-dual jñāna.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "कालाग्नि भैरव" (काल + अग्नि = कल्पान्त की प्रलयाग्नि) साक्षात् "कालाग्निरुद्र" स्वरूप हैं, जिनकी अग्नि महाप्रलय के समय ब्रह्माण्ड के समस्त विकारों और लोकों को भस्म कर शुद्ध तत्त्व में परिवर्तित कर देती है।\n' +
          'शास्त्रीय एवं ब्रह्माण्डीय संदर्भ: कालाग्निरुद्रोपनिषद्, शिव पुराण और तन्त्रालोक (भुवनाध्व प्रकरण) के अनुसार कालाग्नि भैरव सप्त-पातालों के नीचे ब्रह्माण्ड के मूल आधार पर स्थित रहते हैं और समय पूर्ण होने पर प्रलयाग्नि का उत्सर्जन करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: धूम-रहित प्रचण्ड लाल अग्नि-पर्वत के समान दैदीप्यमान, विद्युत्-जिह्वाओं से घिरे कालाग्नि भैरव अपने हाथों में ज्वाला-त्रिशूल, अग्निकुण्ड/कपाल, काल-खड्ग और डमरू धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कालाग्निरुद्रोपनिषद् में वर्णित पवित्र "भस्म-त्रिपुण्ड्र" विधान और मूलाधार की कुण्डलिनी-अग्नि के माध्यम से कालाग्नि भैरव साधक के संचित कर्म-बीजों को ज्ञानाग्नि में दग्ध कर पुनर्जन्म के चक्र को समाप्त कर देते हैं।'
      },
      {
        headingEn: '25. त्र्यम्बक भैरव (Tryambaka Bhairava)',
        headingHi: '25. त्र्यम्बक भैरव (Tryambaka Bhairava)',
        bodyEn:
          'Etymology & Identity: Tryambaka Bhairava ("The Three-Eyed Father of the Three Worlds" or "Lord of the Three Mother-Śaktis: Ambā, Ambikā, and Ambālikā") is the supreme healing and death-conquering (Mṛtyuñjaya) aspect of Bhairava.\n' +
          'Scriptural & Vedic-Tantric Context: Rooted in the immortal Rigvedic Mahāmṛtyuñjaya Mantra (tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam, RV 7.59.12) and elaborated in the Netra Tantra (Mṛtyuñjaya-bhaṭṭāraka) and Śiva Purāṇa (associated with Tryambakeśvara Jyotirliṅga), Tryambaka Bhairava unites fierce protection with rejuvenating grace.\n' +
          'Iconography & Attributes: Snow-white or crystalline in radiance, seated upon a white lotus, wearing a crescent moon that drips cooling nectar, he holds the amṛta-kalaśa (nectar-vase), akṣamālā, trident, and mudrā of fearlessness.\n' +
          'Philosophical & Yogic Significance: Just as a ripened cucumber (urvārukam) is effortlessly detached from its creeping vine when fully mature, Tryambaka Bhairava nourishes the yogī’s prāṇa and ojas (puṣṭivardhanam) while effortlessly severing the knot of mortality (mṛtyor mukṣīya mā’mṛtāt).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "त्र्यम्बक भैरव" (त्रि = तीन + अम्बक = नेत्र अथवा तीन मातृ-शक्तियों—अम्बा, अम्बिका, अम्बालिका के स्वामी) भैरव का परम आरोग्यकारी, पुष्टि-वर्धक और "महामृत्युंजय" स्वरूप है।\n' +
          'शास्त्रीय एवं वैदिक-तांत्रिक संदर्भ: ऋग्वेद के अमर महामृत्युंजय मन्त्र ("त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्" — ७.५९.१२), काश्मीरी शैव परम्परा के "नेत्र तन्त्र" (मृत्युंजय भट्टारक) तथा त्र्यम्बकेश्वर ज्योतिर्लिंग की परम्परा में त्र्यम्बक भैरव सर्वोच्च जीवन-रक्षक हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: स्फटिक या हिम के समान उज्ज्वल, श्वेत पद्म पर आसीन, चंद्र-कला से अमृत-वर्षा करने वाले त्र्यम्बक भैरव अपने हाथों में अमृत-कलश, रुद्राक्ष-माला, त्रिशूल और अभय मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: जैसे पका हुआ ककड़ी का फल ("उर्वारुकमिव बन्धनान्") बिना किसी पीड़ा के डंठल से अलग हो जाता है, वैसे ही त्र्यम्बक भैरव साधक के प्राण और ओज का पोषण करते हुए उसे मृत्यु के बन्धन से सहज ही अमृतत्व (मोक्ष) की ओर ले जाते हैं।'
      },
      {
        headingEn: '26. सर्प भैरव (Sarpa Bhairava)',
        headingHi: '26. सर्प भैरव (Sarpa Bhairava)',
        bodyEn:
          'Etymology & Identity: Sarpa Bhairava ("The Serpent-Adorned Bhairava", from root sṛp-, "to glide or coil in spiral motion") is the sovereign over all serpentine energies, subterranean currents, and the coiled power of Kuṇḍalinī.\n' +
          'Scriptural & Tantric Context: Revered in Śaiva Āgamas, Garuḍa Tantra (viṣavidyā or toxicological tantra), and Kāśī / Śaktipīṭha guardian lists, Sarpa Bhairava commands the great Nāga kings (Vāsuki, Takṣaka, Karkoṭaka) who serve as his sacred thread (nāga-yajñopavīta), bracelets, and anklets.\n' +
          'Iconography & Attributes: Dark emerald or smoky-blue in complexion, shaded by a canopy of seven or five cobra hoods, holding a living serpent-noose (nāga-pāśa), trident, ḍamaru, and nectar-filled kapāla.\n' +
          'Philosophical & Yogic Significance: In Haṭha and Kuṇḍalinī Yoga, the dormant evolutionary energy at the Mūlādhāra is called Bhujagī or Sarpiṇī (coiled three-and-a-half times around the Svayambhū-liṅga); Sarpa Bhairava awakens this coiled serpent-fire safely upward along the spine while neutralizing sarpa-doṣa and Kālasarpa afflictions.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "सर्प भैरव" (धातु सृप् = सर्पिल गति से प्रवाहित होना) समस्त नाग-शक्तियों, भूमिगत प्राण-धाराओं और मूलाधार में कुण्डलित सर्पिणी-शक्ति (कुण्डलिनी) के अधिष्ठाता भैरव हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: शैव आगमों, गारुड़ तन्त्र (विष-विद्या) और क्षेत्रपाल परम्परा में सर्प भैरव वासुकि, तक्षक और कर्कोटक आदि महानागों को अपने यज्ञोपवीत, केयूर और नूपुर के रूप में धारण करने वाले स्वामी हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: मरकत-श्याम या धूम्र-नील वर्ण, मस्तक पर पंचमुखी या सप्तमुखी नाग-छत्र से सुशोभित सर्प भैरव अपने हाथों में जीवित नाग-पाश, त्रिशूल, डमरू और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग-शास्त्र में मूलाधार के स्वयंभू-लिंग को साढ़े तीन वलयों में लपेटकर सोई हुई कुण्डलिनी को "सर्पिणी" कहा गया है। सर्प भैरव की आराधना से कुण्डलिनी का सुरक्षित ऊर्ध्वगमन होता है तथा जन्मपत्रिका के सर्प-दोष व कालसर्प-जनित कष्टों का निवारण होता है।'
      },
      {
        headingEn: '27. अजर भैरव (Ajara Bhairava)',
        headingHi: '27. अजर भैरव (Ajara Bhairava)',
        bodyEn:
          'Etymology & Identity: Ajara Bhairava (from a-jara, "ageless, undecaying, immune to senescence and attrition") represents the eternal, ever-fresh substratum of Bhairava consciousness that never undergoes biological or cosmic aging.\n' +
          'Scriptural & Siddha Context: Celebrated in the Upaniṣads (vijaro vimṛtyuḥ), Nātha Siddha treatises (such as the Gorakṣa Śataka and Haṭhayogapradīpikā), and Śaiva Āgamas, Ajara Bhairava is the patron lord of kāyā-siddhi (perfection and rejuvenation of the yogic body) and unchanging awareness.\n' +
          'Iconography & Attributes: Radiant like pure crystal or the rising autumn moon, eternally youthful in form, seated in siddhāsana upon a lotus, he holds the amṛta-kalaśa, rudrākṣa rosary, trident, and abhaya-mudrā.\n' +
          'Philosophical & Yogic Significance: Whereas all compounded things in Prakṛti are subject to the six modifications of existence (ṣaḍ-bhāva-vikāra: birth, existence, growth, transformation, decay, and death), Ajara Bhairava anchors the yogī in the fifth-and-sixth-free witness state—preserving vital ojas and spiritual vigor across decades of sadhana.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "अजर भैरव" (अ = नहीं + जर = वृद्धावस्था/जीर्णता/क्षय) भैरव-चेतना का वह नित्य-नूतन और अक्षय स्वरूप है जो काल के प्रभाव से कभी जीर्ण या वृद्ध नहीं होता।\n' +
          'शास्त्रीय एवं सिद्ध संदर्भ: उपनिषदों ("विजरो विमृत्युः"), नाथ-सिद्ध साहित्य (गोरक्षशतक, हठयोगप्रदीपिका) और शैव आगमों में अजर भैरव को "काया-सिद्धि", प्राण-नवीनीकरण और अक्षर-ब्रह्म का अधिष्ठाता माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: स्फटिक या शरद्-चन्द्र के समान निर्मल आभा वाले, नित्य-तरुण स्वरूप अजर भैरव पद्मासन/सिद्धासन में विराजमान होकर अमृत-कलश, अक्षमाला, त्रिशूल और अभय मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: प्रकृति के समस्त पदार्थ "षड्-भाव-विकार" (जन्म, अस्तित्व, वृद्धि, विपरिणाम, अपक्षय और विनाश) के अधीन हैं, किंतु अजर भैरव अपक्षय से परे कूटस्थ चैतन्य हैं; उनकी साधना से साधक के ओज, तेज और आध्यात्मिक उत्साह का कभी क्षय नहीं होता।'
      },
      {
        headingEn: '28. व्यापक भैरव (Vyāpaka Bhairava)',
        headingHi: '28. व्यापक भैरव (Vyāpaka Bhairava)',
        bodyEn:
          'Etymology & Identity: Vyāpaka Bhairava (from root vy-āp, "to pervade, permeate, or encompass completely") is the omnipresent aspect of Bhairava that saturates every atom of space, time, and the thirty-six tattvas.\n' +
          'Scriptural & Liturgical Context: In Tantric mantra-śāstra and daily Āgamic worship, vyāpaka-nyāsa is the foundational rite in which the practitioner sweeps consecrated hands over the entire body and aura to realize the all-pervading presence of the deity; Vyāpaka Bhairava is the living deity of this cosmic pervasion.\n' +
          'Iconography & Attributes: Vast as the unbounded sky (vyoma-rūpa), blue-gold in radiance, facing all directions simultaneously, he holds the discus of space, trident, conch of primordial sound (nāda), and kapāla.\n' +
          'Philosophical & Yogic Significance: In the Vijñāna Bhairava Tantra, numerous dhāraṇās instruct the yogī to meditate on his own body and the entire universe as simultaneously pervaded by Bhairava-consciousness (sarvaṃ dehaṃ cinmayaṃ hi jagadvā paribhāvayet, v. 63); Vyāpaka Bhairava dissolves the artificial boundary between "inside" and "outside."',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "व्यापक भैरव" (वि + आप् = सर्वत्र व्याप्त होना, कण-कण में ओत-प्रोत रहना) भैरव का वह सर्वव्यापी स्वरूप है जो देश, काल और छत्तीस तत्त्वों के प्रत्येक परमाणु में समान रूप से विद्यमान है।\n' +
          'शास्त्रीय एवं उपासना संदर्भ: तांत्रिक उपासना पद्धति में "व्यापक-न्यास" के माध्यम से साधक सिर से पैर तक संपूर्ण देह और बाह्य आकाश में मंत्र-चैतन्य का विस्तार करता है; व्यापक भैरव उसी सर्वव्यापकता के अधिष्ठाता देव हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: अनन्त नीलाकाश के समान विस्तृत एवं स्वर्ण-नील आभा से युक्त व्यापक भैरव अपने हाथों में आकाश-चक्र, त्रिशूल, अनाहत नाद का शंख और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: विज्ञानभैरव तन्त्र (श्लोक ६३ — "सर्वं देहं चिन्मयं हि जगद्वा परिभावयेत्") की धारणा के अनुसार जब साधक अपनी देह और संपूर्ण विश्व को एक ही अखंड चित्-तत्त्व से व्याप्त देखता है, तब भीतर और बाहर का भेद मिटकर व्यापक भैरव की अनुभूति होती है।'
      },
      {
        headingEn: '29. इंद्राचौड़ भैरव (Indrācauḍa Bhairava)',
        headingHi: '29. इंद्राचौड़ भैरव (Indrācauḍa Bhairava)',
        bodyEn:
          'Etymology & Identity: Indrācauḍa Bhairava (also rendered Indracūḍa / Indrācūra Bhairava, from Indra, "sovereign lord of the celestial powers/senses," and cauḍa/cūḍā, "crest, crown-jewel, or summit") is the crest-sovereign Bhairava who stands at the zenith of celestial authority.\n' +
          'Scriptural & Regional Context: Preserved in the 52-Bhairava rosters of North Indian Śākta-Nātha and Kṣetrapāla traditions, Indrācauḍa Bhairava represents the supremacy of Bhairava over the Vedic-Purāṇic heaven of Indra (Svarloka) and the mountain-crest sanctuaries where Indra performed penance to Śiva.\n' +
          'Iconography & Attributes: Wearing a towering royal jaṭā-mukuṭa (crown of matted locks) blazing with a crest-jewel (cūḍāmaṇi), golden-thunderbolt in hue, he carries the vajra (thunderbolt), trident, royal sceptre/daṇḍa, and kapāla.\n' +
          'Philosophical & Yogic Significance: In Sanskrit yogic terminology, the indriyas (sensory and motor faculties) take their name from Indra; Indrācauḍa Bhairava crowns the Sahasrāra/Brahmarandhra summit (cūḍā), granting the yogī complete sovereignty over the indriyas and elevating consciousness above transient celestial pleasures.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "इंद्राचौड़ भैरव" (संस्कृत: इन्द्रचूड / इन्द्राचौर—इन्द्र = देवराज/इंद्रियाँ + चौड़/चूड़ा = शिखर, मुकुटमणि या किरीट) भैरव का वह सर्वोच्च मुकुट-स्वरूप है जो देवलोक के ऐश्वर्य के भी शिखर पर विराजमान है।\n' +
          'शास्त्रीय एवं क्षेत्रीय संदर्भ: उत्तर भारतीय शाक्त-नाथ और बावन भैरव की पारंपरिक सूचियों में इंद्राचौड़ भैरव को स्वर्गपति इन्द्र के दर्प का शमन करने वाले तथा पर्वत-शिखरों (चूड़ा) के रक्षक क्षेत्रपाल के रूप में स्मरण किया जाता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: मस्तक पर दिव्य चूड़ामणि से युक्त ऊँचा जटा-मुकुट धारण किए, स्वर्ण-वज्र के समान तेजस्वी इंद्राचौड़ भैरव अपने हाथों में वज्र, त्रिशूल, राज-दण्ड और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग-दर्शन में "इन्द्र" शब्द जीव की दसों "इंद्रियों" और मन का भी वाचक है तथा "चौड़/चूड़ा" सहस्रार शिखर (ब्रह्मरंध्र) का प्रतीक है। इंद्राचौड़ भैरव साधक को इंद्रियों के शिखर पर पूर्ण स्वामित्व और आत्म-साम्राज्य प्रदान करते हैं।'
      },
      {
        headingEn: '30. इंद्रा मूर्ति भैरव (Indrā Mūrti Bhairava)',
        headingHi: '30. इंद्रा मूर्ति भैरव (Indrā Mūrti Bhairava)',
        bodyEn:
          'Etymology & Identity: Indrā Mūrti Bhairava (from Indrā/Indra, "the sovereign thunderbolt power and Mātṛkā Indrāṇī/Aindrī," and mūrti, "embodied icon or concrete manifestation") is the crystallized form of royal-celestial śakti within the Bhairava retinue.\n' +
          'Scriptural & Mandala Context: Paired in the broader Yoginī-Mātṛkā architecture with the sixth Mātṛkā Indrāṇī (Aindrī/Vajriṇī), Indrā Mūrti Bhairava embodies the diamond-hard (vajra) protective power that guards the eastern and western thresholds of the Tantric mandala.\n' +
          'Iconography & Attributes: Ruby-red or flashing golden in complexion, adorned with thousand-eyed spiritual vigilance, riding or flanked by the royal elephant Airāvata, he wields the vajra (diamond thunderbolt), aṅkuśa (elephant-goad), trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: Whereas ordinary mental states are fragile and easily fractured by sensory distraction, Indrā Mūrti Bhairava forge-hardens the practitioner’s subtle body into a vajra-mūrti (adamantine form), conferring unshakeable spiritual authority, decisive leadership, and immunity to psychic fragmentation.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "इंद्रा मूर्ति भैरव" (इन्द्रा = ऐन्द्री/इन्द्राणी शक्ति अथवा वज्र-ऐश्वर्य + मूर्ति = साकार विग्रह) भैरव-मण्डल में दिव्य राजसी तेज और वज्र-शक्ति के साकार विग्रह हैं।\n' +
          'शास्त्रीय एवं मण्डल संदर्भ: अष्ट मातृकाओं में छठी मातृका "इन्द्राणी (ऐन्द्री)" और चौंसठ योगिनी चक्र के वज्र-रक्षा विधान से संबद्ध इंद्रा मूर्ति भैरव मण्डल की अभेद्य सुरक्षा-प्राचीर का निर्माण करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: माणिक्य-रक्त अथवा तप्त स्वर्ण के समान आभा वाले, गजराज ऐरावत के प्रतीक से युक्त और सहस्र-नेत्रों जैसी सजगता रखने वाले इंद्रा मूर्ति भैरव अपने हाथों में वज्र, अंकुश, त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: साधना में जब चित्त बाह्य विक्षेपों से विचलित होता है, तब इंद्रा मूर्ति भैरव साधक के संकल्प और सूक्ष्म शरीर को "वज्र-मूर्ति" के समान सुदृढ़ बनाते हैं तथा अमोघ नेतृत्व-क्षमता और आध्यात्मिक तेज प्रदान करते हैं।'
      },
      {
        headingEn: '31. बटुक भैरव (Baṭuka Bhairava)',
        headingHi: '31. बटुक भैरव (Baṭuka Bhairava)',
        bodyEn:
          'Etymology & Identity: Baṭuka Bhairava ("The Ever-Youthful Boy Bhairava", from baṭuka, a young brahmacārin or five-to-eight-year-old divine child) is one of the most universally worshipped and accessible forms of Bhairava across all of India.\n' +
          'Scriptural & Liturgical Context: Enshrined in the Rudrayāmala Tantra (Viśvasāroddhāra Tantra), Śāradā Tilaka, and the celebrated Āpaduddhāraka Baṭuka Bhairava Stotra, Baṭuka appeared to vanquish the demon Āpad ("Calamity") and is revered as Āpaduddhāraka—the swift rescuer of devotees from acute danger, litigation, illness, and fear.\n' +
          'Iconography & Attributes: The Śāradā Tilaka and Rudrayāmala prescribe three distinct meditative forms (dhyānas) of Baṭuka according to the three guṇas: (1) Sāttvika Dhyāna (crystal-white, granting longevity, wisdom, and mokṣa), (2) Rājasika Dhyāna (rising-sun red, granting dharma, artha, and kāma), and (3) Tāmasika Dhyāna (blue-black, naked, eight-armed, accompanied by his dog, destroying fierce enemies and black magic).\n' +
          'Philosophical & Yogic Significance: Especially propitiated in Kaliyuga alongside Hanumān and Kālī, Baṭuka Bhairava’s childlike form signifies pure, unconditioned spontaneity (sahaja-bhāva) combined with instantaneous maternal-paternal protection.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "बटुक भैरव" (बटुक = बाल-ब्रह्मचारी / किशोर स्वरूप) भैरव उपासना परम्परा में सर्वाधिक लोकप्रिय, शीघ्र प्रसन्न होने वाले और "आपदुद्धारक" (संकटों से तत्काल उद्धार करने वाले) भैरव हैं।\n' +
          'शास्त्रीय एवं उपासना संदर्भ: रुद्रयामल तन्त्र (विश्वसारोद्धार तन्त्र), शारदातिलक और "बटुकभैरवस्तोत्रम्" के अनुसार "आपद्" नामक दैत्य का वध करने और भक्तों को घोर विपत्ति से बचाने के लिए भगवान् शिव ने बाल-रूप में बटुक भैरव का अवतार लिया। काशी के कमच्छा स्थित बटुक भैरव मंदिर इनका प्रमुख सिद्धपीठ है।\n' +
          'प्रतिमाशास्त्र एवं त्रिविध ध्यान: शास्त्रों में बटुक भैरव के तीन ध्यान वर्णित हैं—(१) सात्त्विक ध्यान (स्फटिक के समान श्वेत वर्ण, चतुर्भुज—आयु, आरोग्य और मोक्ष प्रदाता), (२) राजसिक ध्यान (उदीयमान सूर्य के समान रक्त वर्ण—धर्म, अर्थ व कामनाओं के पूरक), तथा (३) तामसिक ध्यान (नील-मेघ वर्ण, दिगम्बर, अष्टभुज, श्वान-सहित—शत्रु, अभिचार व भूत-बाधा नाशक)।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कलियुग में बटुक भैरव की साधना तत्काल फलदायी मानी गई है; उनका बाल-स्वरूप निर्मल, निष्कपट "सहज-भाव" और अमोघ रक्षण का प्रतीक है।'
      },
      {
        headingEn: '32. अमृत भैरव (Amṛta Bhairava)',
        headingHi: '32. अमृत भैरव (Amṛta Bhairava)',
        bodyEn:
          'Etymology & Identity: Amṛta Bhairava ("The Nectar-Bestowing Immortal Bhairava", from a-mṛta, "deathless ambrosia") is the supreme lunar-rejuvenating aspect of Bhairava.\n' +
          'Scriptural & Tantric Context: Prominently featured in the Netra Tantra (where Amṛteśvara / Amṛta Bhairava is the central deity of the Kashmir Śaiva royal and healing liturgy), Svacchanda Tantra, and Kubjikāmata, Amṛta Bhairava presides over the Somacakra and the sixteen digits (kalās) of the divine Moon.\n' +
          'Iconography & Attributes: Luminous as a mountain of snow bathed in full-moon light, seated upon a white lotus in union with Amṛtalakṣmī / Amṛteśvarī, his four hands hold two golden pots overflowing with soma-amṛta, the rosary, and the mudrā of supreme grace.\n' +
          'Philosophical & Yogic Significance: In Tantric subtle physiology (amṛta-plāvana), when the yogī’s awareness ascends to the Sahasrāra and unites Śiva and Śakti, a cooling stream of celestial soma-nectar drips from the Bindu/Lalanā cakra, flooding the 72,000 nādīs—a process governed directly by Amṛta Bhairava.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "अमृत भैरव" (अ = नहीं + मृत = मृत्यु; अमरत्व और संजीवनी सुधा के स्वामी) भैरव का परम सौम्य, शीतल और जीवन-प्रदायक स्वरूप है।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: काश्मीरी शैव आगम "नेत्र तन्त्र" (अमृतेश्वर भैरव), स्वच्छन्द तन्त्र और कुब्जिकामत में अमृत भैरव को चंद्र-मण्डल की सोलह कलाओं का अधिपति तथा असाध्य रोगों और मृत्यु-भय का हरण करने वाला सर्वोच्च देवता माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: पूर्णिमा के चन्द्रमा और हिम के समान उज्ज्वल, श्वेत कमल पर भगवती अमृतेश्वरी के साथ आसीन अमृत भैरव अपने हाथों में सुधा से छलकता हुआ स्वर्ण-कलश, अक्षमाला, पद्म और वरद-अभय मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कुण्डलिनी और खेचरी मुद्रा के विज्ञान में जब सहस्रार चक्र के सोम-मण्डल से दिव्य "सोमामृत" का स्राव होता है ("अमृत-प्लावन"), तब अमृत भैरव की कृपा से साधक की बहत्तर हजार नाड़ियाँ संजीवनी ऊर्जा से आप्लावित हो उठती हैं।'
      },
      {
        headingEn: '33. मार्तंड भैरव (Mārtaṇḍa Bhairava)',
        headingHi: '33. मार्तंड भैरव (Mārtaṇḍa Bhairava)',
        bodyEn:
          'Etymology & Identity: Mārtaṇḍa Bhairava (from Mārtaṇḍa, the Vedic solar deity born of the cosmic egg mṛtāṇḍa, united with Bhairava) is the glorious solar-warrior synthesis of Sūrya and Śiva-Bhairava.\n' +
          'Scriptural & Regional Context: Celebrated in the Mallāri Māhātmya (reported as part of the Brahmāṇḍa / Kṣetra Khaṇḍa Purāṇic corpus) and revered across Maharashtra, Karnataka, and the Deccan as Khaṇḍobā / Malhārī Mārtaṇḍa (particularly at Jejuri), as well as in the great Mārtaṇḍa tradition of Kashmir, he took avatar to vanquish the demons Maṇi and Malla.\n' +
          'Iconography & Attributes: Radiant gold and turmeric-yellow (bhaṇḍāra) in complexion, mounted upon a white steed (aśva-vāhana) accompanied by his hunting hound, flanked by his consorts Mhāḷsā and Bāṇāī, he wields the giant sword (khaḍga), trident, ḍamaru, and pān-pātra/kapāla.\n' +
          'Philosophical & Yogic Significance: Mārtaṇḍa Bhairava unites the life-giving solar prāṇa (Sūrya-kalā) with the transcendent consciousness of Bhairava, bestowing radiant health, family protection (kuladaivata grace), and victory over adharmic oppression.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "मार्तंड भैरव" (वैदिक सूर्य "मार्तण्ड" और भगवान् शिव के "भैरव" स्वरूप का संयुक्त विग्रह) सूर्य के प्रखर तेज और भैरव के रक्षण-पराक्रम के अद्वितीय संगम हैं।\n' +
          'शास्त्रीय एवं क्षेत्रीय संदर्भ: ब्रह्माण्ड पुराण के मल्लारि माहात्म्य तथा दक्कन, महाराष्ट्र और कर्नाटक की लोक-शास्त्रीय परम्परा में वे "मल्हारी मार्तण्ड" या "खण्डोबा" (जेजुरी सिद्धपीठ) के रूप में पूजित हैं, जिन्होंने मणि और मल्ल नामक दैत्यों का संहार कर धर्म की रक्षा की।\n' +
          'प्रतिमाशास्त्र एवं आयुध: हरिद्रा (हल्दी/भंडारा) और तप्त स्वर्ण के समान पीत-तेजस्वी वर्ण, श्वेत अश्व पर आरूढ़, साथ में स्वामिभक्त श्वान तथा हाथों में विशाल खड्ग (खांडा), त्रिशूल, डमरू और पानपात्र/कपाल धारण किए मार्तंड भैरव अत्यंत भव्य प्रतीत होते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग और अध्यात्म में मार्तंड भैरव "सूर्य-कला" (पिंगला नाड़ी के प्राण-तेज) और शिव-चैतन्य के एकीकरण के प्रतीक हैं; उनकी उपासना से आरोग्य, कुल-रक्षा, तेजस्विता और विजय की प्राप्ति होती है।'
      },
      {
        headingEn: '34. विपाक्ष भैरव (Vipākṣa Bhairava)',
        headingHi: '34. विपाक्ष भैरव (Vipākṣa Bhairava)',
        bodyEn:
          'Etymology & Identity: Vipākṣa Bhairava (philologically linked both to vi-pakṣa, "beyond all partiality, partisan sides, or dualistic wings—and conqueror of adversaries," and to the vernacular transmission of Virūpākṣa, "he of uneven/three eyes") is the impartial, all-seeing sovereign of the mandala.\n' +
          'Scriptural & Philosophical Context: In Nyāya-Tantric epistemology and Kaula Āgamas, while bound minds remain trapped between pakṣa (thesis/attachment) and pratipakṣa (antithesis/aversion), Vipākṣa Bhairava stands in the transcendent center (madhya-dhāma) free from all bias, while simultaneously neutralizing hostile forces (vipakṣa-dalana).\n' +
          'Iconography & Attributes: Three-eyed (viṣama-netra), smoky-gold in hue, standing in equipoise (samapāda), holding the balance-scale or sword of discrimination, trident, noose, and skull-cup.\n' +
          'Philosophical & Yogic Significance: Meditating upon Vipākṣa Bhairava dissolves dualistic polarization (dvandva-moha—pleasure/pain, praise/blame, friend/foe) and awakens the central Suṣumṇā path between the two "wings" (pakṣau) of inhalation (prāṇa) and exhalation (apāna).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "विपाक्ष भैरव" (संस्कृत: विपक्ष-दलन अर्थात् शत्रु-पक्ष का नाश करने वाले, अथवा समस्त द्वैत-पक्षों से परे "निष्पक्ष" साक्षी; तथा आगमिक "विरूपाक्ष" परंपरा से संबद्ध) भैरव का समदर्शी एवं अजेय स्वरूप है।\n' +
          'शास्त्रीय एवं दार्शनिक संदर्भ: तांत्रिक दर्शन और क्षेत्रपाल परम्परा में जहाँ साधारण जीव "पक्ष" (राग) और "प्रतिपक्ष" (द्वेष) के द्वन्द्व में फँसा रहता है, वहीं विपाक्ष भैरव दोनों ध्रुवों के मध्य स्थित शुद्ध चैतन्य के अधिपति हैं तथा साधक के विरोधी विघ्नों (विपक्ष) का समूल भेदन करते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: त्रिनेत्रधारी (विषम-लोचन), समपाद मुद्रा में स्थित, धूम्र-स्वर्ण आभा वाले विपाक्ष भैरव अपने हाथों में विवेक-खड्ग, त्रिशूल, पाश और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: प्राण और अपान रूपी दो पक्षों (पंखों) के मध्य जब प्राण सुषुम्णा के शून्य-पथ में स्थिर होता है, तब विपाक्ष भैरव की कृपा से सुख-दुःख, मान-अपमान और शत्रु-मित्र के द्वन्द्व समाप्त होकर समत्व-योग सिद्ध होता है।'
      },
      {
        headingEn: '35. योगेश्वर भैरव (Yogeśvara Bhairava)',
        headingHi: '35. योगेश्वर भैरव (Yogeśvara Bhairava)',
        bodyEn:
          'Etymology & Identity: Yogeśvara Bhairava ("Supreme Lord of Yoga and Master of all Yogīs and Yoginīs") is Bhairava as the Ādinātha—the primordial teacher from whom Mantra Yoga, Haṭha Yoga, Laya Yoga, and Rāja/Śāmbhava Yoga originate.\n' +
          'Scriptural & Lineage Context: Revered in the Vijñāna Bhairava Tantra, Svacchanda Tantra, Siddhasiddhāntapaddhati, and the Kāśī-Nātha tradition, Yogeśvara Bhairava sits at the center of the Yoginī Cakra as Cakreśvara, imparting the 112 meditative upāyas (gateways to liberation) to Devī.\n' +
          'Iconography & Attributes: Seated in perfect padmāsana upon a tiger-skin with a yoga-paṭṭa band around his knees, ashes on his limbs, matted locks piled high, eyes half-closed in śāmbhavī-mudrā (inner absorption while looking outward), holding the trident, ḍamaru, akṣamālā, and kapāla.\n' +
          'Philosophical & Yogic Significance: Yogeśvara Bhairava personifies the state of Nirvikalpa Samādhi and Jagadānanda (bliss in waking action), granting the aspirant mastery over the eight limbs of yoga, the mudrās, bandhas, and the spontaneous unfolding of Śāmbhavopāya.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "योगेश्वर भैरव" (योग + ईश्वर = समस्त योग-विद्याओं, योगियों और चौंसठ योगिनियों के सर्वोच्च स्वामी) साक्षात् आदिनाथ शिव के भैरव-स्वरूप हैं, जिनसे मन्त्र, हठ, लय और राज/शाम्भव योग की उत्पत्ति हुई है।\n' +
          'शास्त्रीय एवं परम्परा संदर्भ: विज्ञानभैरव तन्त्र (जहाँ भैरव भगवती भैरवी को ११२ ध्यान-धारणाओं का उपदेश देते हैं), स्वच्छन्द तन्त्र और नाथ-सिद्ध परम्परा में योगेश्वर भैरव को योगिनी-चक्र का केंद्रीय गुरु और चक्रेश्वर माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: व्याघ्रचर्म पर पूर्ण पद्मासन या योग-पट्ट बांधकर आसीन, भस्म-विभूषित, अर्ध-उन्मीलित नेत्रों से "शाम्भवी मुद्रा" में स्थित योगेश्वर भैरव अपने हाथों में त्रिशूल, डमरू, रुद्राक्ष-माला और ज्ञान-कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योगेश्वर भैरव की उपासना से साधक को आसन, प्राणायाम, मुद्रा, बन्ध और समाधि की सहज सिद्धि प्राप्त होती है तथा वह बाह्य जगत में व्यवहार करते हुए भी आंतरिक "जगदानन्द" में स्थित रहता है।'
      },
      {
        headingEn: '36. त्रिनेत्र भैरव (Trinetra Bhairava)',
        headingHi: '36. त्रिनेत्र भैरव (Trinetra Bhairava)',
        bodyEn:
          'Etymology & Identity: Trinetra Bhairava ("The Bhairava of the Awakened Third Eye", from tri, "three," and netra, "guiding eye", root nī-, "to lead") focuses specifically on the vertical eye of non-dual wisdom (jñāna-netra) at the Ājñā Cakra.\n' +
          'Scriptural & Tantric Context: While Trilocana Bhairava (#3) emphasizes cosmic triadic vision across the three worlds, Trinetra Bhairava is directly linked to the Netra Tantra (Mṛtyuñjaya Bhaṭṭāraka, "The Tantra of the Supreme Eye") and the fiery third eye that reduced Kāmadeva (blind craving) to ashes.\n' +
          'Iconography & Attributes: Blazing with a vertical ruby-gold eye in the center of his forehead, four-armed, holding the vajra, trident, lotus of the two-petaled Ājñā center, and skull-cup.\n' +
          'Philosophical & Yogic Significance: Situated at the bhrūmadhya (the confluence between the eyebrows where Iḍā, Piṅgalā, and Suṣumṇā meet in Mukta-triveṇī), Trinetra Bhairava pierces the Rudra-granthi (the psychic knot of spiritual pride and subtle illusion) and awakens direct intuitive perception (pratibhā-jñāna).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "त्रिनेत्र भैरव" (त्रि = तीन + नेत्र = मार्गदर्शक चक्षु; धातु नी = ले जाना) भैरव का वह स्वरूप है जो विशेष रूप से ललाट के मध्य स्थित तृतीय "ज्ञान-नेत्र" (आज्ञाचक्र) के जागरण और काम-दहन से संबद्ध है।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: जहाँ ३. त्रिलोचन भैरव त्रिलोक और त्रिकाल के व्यापक दर्शन के प्रतीक हैं, वहीं ३६. त्रिनेत्र भैरव का सीधा संबंध काश्मीरी शैव आगम "नेत्र तन्त्र" और कामदेव (अंध-वासना) को भस्म करने वाली ऊर्ध्व-ज्योति से है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: भ्रूमध्य में माणिक्य और अग्नि के समान दमकते हुए ऊर्ध्वाधर तृतीय नेत्र से युक्त त्रिनेत्र भैरव अपने हाथों में वज्र, त्रिशूल, द्विदल पद्म और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: कुण्डलिनी योग में भ्रूमध्य (आज्ञाचक्र) इड़ा, पिंगला और सुषुम्णा के संगम ("मुक्त-त्रिवेणी") तथा "रुद्र-ग्रंथि" का स्थान है। त्रिनेत्र भैरव रुद्र-ग्रंथि का भेदन कर साधक में अपरोक्ष प्रातिभ-ज्ञान (अंतर्दृष्टि) जाग्रत करते हैं।'
      },
      {
        headingEn: '37. प्रेतनाथ भैरव (Pretanātha Bhairava)',
        headingHi: '37. प्रेतनाथ भैरव (Pretanātha Bhairava)',
        bodyEn:
          'Etymology & Identity: Pretanātha Bhairava ("Lord of the Pretas or Disembodied Spirits", from pra-ita, "departed or in transit between bodies," and nātha, "compassionate master") governs the liminal realm between physical death and subsequent rebirth or liberation.\n' +
          'Scriptural & Liturgical Context: In the Garuḍa Purāṇa, Kālīkula Tantras (where Cāmuṇḍā and Dakṣiṇakālī ride or sit upon a preta/śava), and Kāśī’s cremation-ground traditions, Pretanātha Bhairava is the supreme authority who pacifies restless ancestral or wandering spirits (preta-yoni) and grants them sadgati (auspicious release).\n' +
          'Iconography & Attributes: Standing or seated upon a prostrate preta (corpse) in the cremation ground, smeared with white ashes, surrounded by flickering marsh-lights, holding the khaṭvāṅga, bell (ghaṇṭā), noose (pāśa), and kapāla.\n' +
          'Philosophical & Yogic Significance: Psychologically, "pretas" also represent hungry, unfulfilled cravings and unprocessed grief clinging to the past; Pretanātha Bhairava liberates both external pitṛ/preta afflictions and internal phantom attachments, restoring peace to the lineage and mind.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "प्रेतनाथ भैरव" (प्रेत = प्र + इत अर्थात् देह त्यागकर अंतराल अवस्था में स्थित प्राण + नाथ = स्वामी/उद्धारक) मृत्यु और पुनर्जन्म के मध्य की सूक्ष्म "प्रेत-योनि" के सर्वोच्च नियामक एवं मुक्तिदाता भैरव हैं।\n' +
          'शास्त्रीय एवं उपासना संदर्भ: गरुड़ पुराण, कालीकुल के तन्त्रों (जहाँ चामुण्डा और काली प्रेत-आसना हैं) तथा काशी और गया की पितृ-मोक्ष परम्परा में प्रेतनाथ भैरव अतृप्त एवं भटकती हुई आत्माओं को शांत कर उन्हें सद्गति प्रदान करने वाले अधिपति हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: श्मशान भूमि में प्रेत-आसन पर स्थित, भस्म-लेपित, खट्वांग, घण्टा, पाश और कपाल धारण किए प्रेतनाथ भैरव की मुद्रा उग्र होते हुए भी उद्धारक है।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: मनोवैज्ञानिक धरातल पर "प्रेत" मनुष्य के अतीत की अतृप्त तृष्णाओं और शोक-संस्कारों के भी प्रतीक हैं। प्रेतनाथ भैरव की आराधना से बाह्य प्रेत-बाधा और पितृ-दोष के निवारण के साथ-साथ चित्त की अतृप्त वासनाओं को भी पूर्ण शांति मिलती है।'
      },
      {
        headingEn: '38. पिशाचनाथ भैरव (Piśācanātha Bhairava)',
        headingHi: '38. पिशाचनाथ भैरव (Piśācanātha Bhairava)',
        bodyEn:
          'Etymology & Identity: Piśācanātha Bhairava ("Sovereign Master over the Piśācas") rules over the darkest, most volatile elemental and nocturnal entities (piśācas) described in Atharvavedic, Purāṇic, and Tantric lore.\n' +
          'Scriptural & Sacred Geography: Celebrated in the Kāśī Khaṇḍa of the Skanda Purāṇa (associated with the ancient Piśācamocana Tīrtha in Vārāṇasī, where the spirit Vali/Piśāca was liberated through Bhairava’s grace) and in the Bhūta-ḍāmara and Uḍḍāmareśvara Tantras, Piśācanātha commands absolute obedience from all lower astral forces.\n' +
          'Iconography & Attributes: Midnight-black, with blazing red eyes and iron-like limbs, holding an iron club (lauha-daṇḍa), flaming torch or trident, iron chain/noose, and kapāla.\n' +
          'Philosophical & Yogic Significance: In depth psychology and Tantric yoga, the piśāca represents obsessive, self-destructive, and parasitic impulses lurking in the deepest tamasic strata of the subconscious; Piśācanātha Bhairava exposes these shadows to the light of awareness and binds them under the sovereignty of the Self.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "पिशाचनाथ भैरव" (पिशाच = रात्रिचर तामसिक भूत-योनि + नाथ = शासक एवं मोचक) सूक्ष्म जगत की सबसे उग्र एवं तामसिक शक्तियों पर पूर्ण नियंत्रण रखने वाले और उनसे मुक्ति दिलाने वाले भैरव हैं।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: स्कन्द पुराण के काशी खण्ड में वर्णित काशी के प्रसिद्ध "पिशाचमोचन तीर्थ" की कथा तथा उड्डामरेश्वर और भूतडामर तन्त्र में पिशाचनाथ भैरव की महिमा गाई गई है, जिनकी आज्ञा के बिना कोई भी तामसिक शक्ति साधक के निकट नहीं आ सकती।\n' +
          'प्रतिमाशास्त्र एवं आयुध: गहन रात्रि के समान कृष्ण वर्ण, अग्नि-समान रक्त नेत्रों वाले पिशाचनाथ भैरव अपने हाथों में लौह-दण्ड (मुद्गर), ज्वाला-त्रिशूल, पाश और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: अंतर्मन के विज्ञान में "पिशाच" मनुष्य के अवचेतन में छिपी हुई आत्मघाती, हिंसक और तामसिक वृत्तियों का प्रतीक है। पिशाचनाथ भैरव की उपासना बाह्य अभिचार और पिशाच-बाधा को नष्ट करने के साथ-साथ अवचेतन के गहनतम अंधकार को भी आलोकित करती है।'
      },
      {
        headingEn: '39. दंडपाणि भैरव (Daṇḍapāṇi Bhairava)',
        headingHi: '39. दंडपाणि भैरव (Daṇḍapāṇi Bhairava)',
        bodyEn:
          'Etymology & Identity: Daṇḍapāṇi Bhairava ("He Who Holds the Staff of Sacred Law in His Hand", from daṇḍa, "staff, sceptre, or rod of discipline," and pāṇi, "hand") is the chief executive officer and field commander serving directly alongside Kāla Bhairava in Kāśī.\n' +
          'Scriptural & Sacred Geography: Extensively narrated in the Kāśī Khaṇḍa of the Skanda Purāṇa (Ch. 32), when Harikeśa Yakṣa performed intense penance in Vārāṇasī, Śiva-Viśvanātha appointed him as Daṇḍapāṇi Kṣetrapāla—making his darśana mandatory along with Kāla Bhairava for every pilgrim in Kāśī.\n' +
          'Iconography & Attributes: Stern, muscular, and vigilant, standing upright with a massive golden or iron staff (dharma-daṇḍa) held firmly in his right hand, accompanied by a trident, noose, and skull-bowl.\n' +
          'Philosophical & Yogic Significance: The daṇḍa symbolizes both cosmic moral order (dharmadaṇḍa) and the vertical spinal column (merudaṇḍa) of the human body; Daṇḍapāṇi Bhairava straightens the yogī’s spine, enforces unwavering sadhana discipline, and clears deceit and hypocrisy from the spiritual path.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "दंडपाणि भैरव" (दण्ड = धर्म-दण्ड / न्याय-दण्ड + पाणि = हाथ; जिनके हाथ में अनुशासन का दण्ड है) काशी के कोतवाल काल भैरव के प्रमुख सेनापति और काशी-क्षेत्र के सर्वोच्च व्यवस्थापक हैं।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: स्कन्द पुराण के काशी खण्ड (अध्याय ३२) में हरिकेश यक्ष की घोर तपस्या से प्रसन्न होकर भगवान् विश्वनाथ ने उन्हें "दंडपाणि" पद प्रदान किया। काशी की परम्परा में बाबा विश्वनाथ और काल भैरव के दर्शन के साथ दंडपाणि भैरव का दर्शन अनिवार्य माना जाता है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: सुदृढ़ एवं तेजस्वी देहयष्टि वाले दंडपाणि भैरव अपने दक्षिण हस्त में अमोघ धर्म-दण्ड (गदा/दण्ड) तथा अन्य हाथों में त्रिशूल, पाश और कपाल धारण किए सावधान मुद्रा में खड़े रहते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग-शास्त्र में "दण्ड" मानव शरीर के "मेरुदण्ड" (सुषुम्णा स्तंभ) और आत्म-अनुशासन का प्रतीक है। दंडपाणि भैरव साधक के मेरुदण्ड को सीधा व ऊर्ध्वमुखी रखते हैं तथा साधना में प्रमाद, कपट और अनुशासनहीनता का निवारण करते हैं।'
      },
      {
        headingEn: '40. विकराल भैरव (Vikarāla Bhairava)',
        headingHi: '40. विकराल भैरव (Vikarāla Bhairava)',
        bodyEn:
          'Etymology & Identity: Vikarāla Bhairava (from vi-karāla, "formidable, wide-jawed, fang-bearing, and dread-inspiring") is the extreme protective manifestation of Bhairava invoked during severe spiritual or material crises.\n' +
          'Scriptural & Tantric Context: Found in the Rudrayāmala, Mahākāla Saṃhitā, and protective kavaca hymns (where Kālī and Bhairava are both addressed as Mahāvikarāla), Vikarāla Bhairava stands at the outer perimeter of the Yoginī Cakra to repel hostile sorcery (abhicāra) and demonic intrusion.\n' +
          'Iconography & Attributes: Towering like a black thunderhead, with gaping jaws gleaming with curved fangs (daṃṣṭrā), three bulging eyes of fire, wearing a garland of freshly severed ego-heads, wielding the battle-axe (paraśu), khaḍga, trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: Karāla/Vikarāla represents the gaping mouth of Infinite Time that swallows all finite names and forms; by contemplating Vikarāla Bhairava, the practitioner confronts and transcends the primal existential terror of annihilation, emerging with diamond-like equanimity.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "विकराल भैरव" (वि + कराल = प्रचण्ड दंष्ट्रा-युक्त, अति-भयंकराकृति एवं अजेय रक्षक) भैरव का वह अति-उग्र कवच-स्वरूप है जो घोरतम संकट और आसुरी आक्रमणों का क्षणभर में भंजन करता है।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: रुद्रयामल, महाकाल संहिता और भैरव-कवच स्तोत्रों में विकराल भैरव को चौंसठ योगिनी मण्डल की बाह्य रक्षा-पंक्ति का अजेय प्रहरी तथा उग्र अभिचार-क्रियाओं का नाशक बताया गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रलय के काले मेघ के समान विशालकाय, वक्र दंष्ट्राओं से युक्त खुला हुआ मुख, अग्नि के समान तीन नेत्र और मुण्डमाला धारण किए विकराल भैरव अपने हाथों में परशु (फरसा), महाखड्ग, त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: दार्शनिक रूप से "विकराल मुख" महाकाल का वह अनन्त ग्रास है जिसमें समस्त नाम-रूप समा जाते हैं। विकराल भैरव का ध्यान साधक के भीतर छिपे मृत्यु और विनाश के अंतिम भय को भी निगलकर उसे पूर्ण निर्भयता प्रदान करता है।'
      },
      {
        headingEn: '41. भद्र भैरव (Bhadra Bhairava)',
        headingHi: '41. भद्र भैरव (Bhadra Bhairava)',
        bodyEn:
          'Etymology & Identity: Bhadra Bhairava (from bhadra, "auspicious, blessed, gracious, prosperous, and benign") reveals the gentle, welfare-bestowing heart of Bhairava that balances Vikarāla Bhairava (#40).\n' +
          'Scriptural & Vedic-Tantric Context: Echoing the Vedic prayer bhadraṃ karṇebhiḥ śṛṇuyāma devāḥ and paired in Śākta tradition with Bhadrakālī ("The Auspicious Kālī"), Bhadra Bhairava demonstrates that the fierce guardian of the cremation ground is simultaneously Śiva ("The Auspicious One") who brings maṅgala (blessing) to household and hermitage alike.\n' +
          'Iconography & Attributes: Golden-white in complexion, with a serene, smiling countenance alongside his third eye, seated upon a lotus or bull throne (bhadrāsana), extending the varada and abhaya mudrās while holding the trident and lotus/rosary.\n' +
          'Philosophical & Yogic Significance: In Haṭha Yoga, Bhadrāsana ("The Auspicious Posture") is praised in the Haṭhayogapradīpikā (1.53–54) as the destroyer of all diseases and fatigues; Bhadra Bhairava establishes the practitioner in unshakeable peace, domestic harmony, and auspicious spiritual progress (kalyāṇa-mārga).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "भद्र भैरव" (भद्र = कल्याणकारी, मंगलमय, सौम्य एवं शुभ) भैरव-तत्त्व के उस परम करुणामय और मंगलकारी हृदय को प्रकट करते हैं जो ४०. विकराल भैरव की उग्रता को संतुलित करता है।\n' +
          'शास्त्रीय एवं वैदिक-तांत्रिक संदर्भ: वैदिक मंगलाचरण ("भद्रं कर्णेभिः शृणुयाम देवाः") और शाक्त परम्परा की "भद्रकाली" के सहचर के रूप में भद्र भैरव यह सिद्ध करते हैं कि भैरव का रौद्र रूप अंततः भक्तों के परम कल्याण (मंगल) के लिए ही है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: स्वर्ण-गौर वर्ण, प्रसन्न एवं स्मित मुखमण्डल, पद्म या भद्रासन पर विराजमान भद्र भैरव अपने दो हाथों से वरद और अभय मुद्रा प्रदान करते हैं तथा अन्य हाथों में त्रिशूल और कमल/अक्षमाला धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: हठयोगप्रदीपिका (१.५३–५४) में "भद्रासन" को समस्त रोगों और विषों का नाशक कहा गया है। भद्र भैरव की आराधना से साधक के गृहस्थ और आध्यात्मिक जीवन में सुख, शांति, आरोग्य और निर्विघ्न मांगल्य की प्रतिष्ठा होती है।'
      },
      {
        headingEn: '42. भीम भैरव (Bhīma Bhairava)',
        headingHi: '42. भीम भैरव (Bhīma Bhairava)',
        bodyEn:
          'Etymology & Identity: Bhīma Bhairava ("The Tremendous, Formidable, and Colossal Bhairava") is one of the eight canonical names of Rudra-Śiva in the Vedic Aṣṭamūrti system (Śarva, Bhava, Rudra, Ugra, Bhīma, Paśupati, Īśāna, Mahādeva) manifested in full Tantric majesty.\n' +
          'Scriptural & Purāṇic Context: Attested in the Yajurveda, Śiva Purāṇa (associated with the Bhīmaśaṅkara Jyotirliṅga in the Sahyādri mountains), and Kṣetrapāla Tantras, Bhīma Bhairava embodies the boundless space-element (ākāśa-mūrti) and colossal prāṇic strength that crushes tyrannical forces.\n' +
          'Iconography & Attributes: Immense in stature, deep indigo or coppery-gold in hue, wearing a lion-skin and serpent ornaments, wielding the heavy mace (gadā), Pināka bow, trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: Bhīma Bhairava infuses the practitioner’s prāṇamaya-kośa (vital sheath) with inexhaustible stamina, courage, and fortitude (dhṛti), enabling the yogī to bear high-intensity tapas and life challenges without wavering.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "भीम भैरव" (भीम = असीम बलशाली, विशालकाय एवं पराक्रमी) वैदिक और पौराणिक "अष्टमूर्ति शिव" के आठ नामों (शर्व, भव, रुद्र, उग्र, भीम, पशुपति, ईशान, महादेव) में से पंचम मूर्ति का पूर्ण तांत्रिक भैरव-स्वरूप हैं।\n' +
          'शास्त्रीय एवं पौराणिक संदर्भ: यजुर्वेद, शिव पुराण (सह्याद्रि पर्वत स्थित भीमशंकर ज्योतिर्लिंग की परम्परा) और आगम ग्रन्थों में भीम भैरव को आकाश-तत्त्व का अधिष्ठान तथा राक्षसी अत्याचारों को कुचलने वाले महाबल का स्वामी माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: पर्वत के समान विशाल देहयष्टि, गहरे नील या ताम्र-स्वर्ण वर्ण, सिंहचर्म एवं नाग-आभूषण धारी भीम भैरव अपने हाथों में भारी गदा, धनुष, त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग-साधना में भीम भैरव साधक के "प्राणमय कोश" को असीम ऊर्जा, धैर्य (धृति) और वज्र-समान सहनशक्ति प्रदान करते हैं, जिससे कठिन से कठिन तपस्या और जीवन-संघर्ष में भी साधक अडिग रहता है।'
      },
      {
        headingEn: '43. दिगंबर भैरव (Digambara Bhairava)',
        headingHi: '43. दिगंबर भैरव (Digambara Bhairava)',
        bodyEn:
          'Etymology & Identity: Digambara Bhairava ("Clad in the Quarters of Space", from dik, "the directions of the sky," and ambara, "garment") is the sky-clad ascetic Bhairava who wears the infinite expanse of the cosmos as his only robe.\n' +
          'Scriptural & Ascetic Context: Invoked in the Kālabhairavāṣṭakam (digambaraṃ... kālabhairavaṃ bhaje), Avadhūta Gītā, and Kāpālika/Nāga/Aghora ascetic lineages, Digambara Bhairava represents absolute freedom from social convention, shame (lajjā-pāśa), and false persona.\n' +
          'Iconography & Attributes: Completely unadorned by artificial cloth, smeared only with sacred white vibhūti (ashes), radiant and self-contained, holding the khaṭvāṅga, ḍamaru, trident, and begging skull-bowl (bhikṣā-kapāla).\n' +
          'Philosophical & Yogic Significance: In Trika metaphysics, the thirty-six tattvas and the māyīya-mala (veil of differentiation) are the "clothes" that conceal the naked luminosity of Consciousness; Digambara Bhairava strips away every conceptual veil (āvaraṇa-bhaṅga) so that the Self stands revealed in its pristine, unconditioned nakedness.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "दिगंबर भैरव" (दिक् = दसों दिशाएँ + अम्बर = वस्त्र; दिशाएँ ही जिनके वस्त्र हैं) भैरव का वह परमहंस, अवधूत और सर्व-आवरण-मुक्त स्वरूप है जिसे किसी कृत्रिम आवरण की आवश्यकता नहीं है।\n' +
          'शास्त्रीय एवं संन्यास संदर्भ: आदि शंकराचार्य के कालभैरवाष्टकम् ("दिगम्बरं... कालभैरवं भजे"), अवधूत गीता तथा नागा, कापालिक और अघोर संन्यास परम्पराओं में दिगंबर भैरव को परम स्वतंत्रता और निर्द्वन्द्वता का आदर्श माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: केवल चिता-भस्म (विभूति) से लिप्त देह, दसों दिशाओं के चिदाकाश को ओढ़े हुए, शांत और आत्म-तृप्त दिगंबर भैरव अपने हाथों में खट्वांग, डमरू, त्रिशूल और भिक्षा-कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: तन्त्र-दर्शन में अष्ट-पाशों में "लज्जा" और "मायीय मल" जीव के ऊपर पड़े हुए अज्ञान के वस्त्र हैं। दिगंबर भैरव की उपासना समस्त मानसिक आवरणों और लोक-दिखावे को उतारकर आत्मा के विशुद्ध, निरावरण स्वरूप का साक्षात्कार कराती है।'
      },
      {
        headingEn: '44. नाग भैरव (Nāga Bhairava)',
        headingHi: '44. नाग भैरव (Nāga Bhairava)',
        bodyEn:
          'Etymology & Identity: Nāga Bhairava ("Lord of the Immortal Nāgas") is distinct from Sarpa Bhairava (#26): whereas Sarpa emphasizes the dynamic gliding motion of the serpent-fire, Nāga Bhairava presides over the royal, jewel-crowned Nāga race of Pātāla, sacred water springs (nāga-tīrthas), and earth-treasures (nidhi).\n' +
          'Scriptural & Sacred Geography: Deeply venerated in the Nīlamata Purāṇa of Kashmir (where every sacred spring is a nāga guarded by Bhairava), the Kāśī Khaṇḍa (Nāga Kūpa / Kārkoṭaka Vāpī), and Himalayan sanctuary traditions, Nāga Bhairava harmonizes subterranean ecological forces with human habitation.\n' +
          'Iconography & Attributes: Crowned with a blazing nāga-maṇi (serpent jewel) beneath a nine-headed cobra canopy, wearing ornaments of pearls and coral, holding the jewel-vase (ratna-kalaśa), nāga-pāśa, trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: In Haṭha Yoga’s ten vāyus (five major prāṇas and five minor upaprāṇas), "Nāga" is the first upaprāṇa governing release and subtle clearing; Nāga Bhairava purifies the subtle channels, unlocks hidden spiritual treasures (guhyanidhi), and bestows deep subterranean stability.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "नाग भैरव" २६वें क्रमांक के सर्प भैरव से विशिष्ट हैं—जहाँ सर्प भैरव गतिशील कुण्डलिनी-सृपण के प्रतीक हैं, वहीं नाग भैरव पाताल लोक के मणिधारी नागराजों, पवित्र जल-स्रोतों (नाग-तीर्थों) और भूमिगत निधियों के अधिपति हैं।\n' +
          'शास्त्रीय एवं तीर्थ संदर्भ: कश्मीर के नीलमत पुराण (जहाँ प्रत्येक पवित्र जल-कुण्ड "नाग" कहलाता है), काशी के नागकूप (कर्कोटक वापी) तथा हिमालयी लोक-तांत्रिक परम्पराओं में नाग भैरव भूमि, जल और वास्तु-दोष के सर्वोच्च रक्षक माने जाते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: मस्तक पर दिव्य नागमणि और नवमुखी नाग-छत्र से अलंकृत, प्रवाल व मुक्ता आभूषण धारी नाग भैरव अपने हाथों में रत्न-कलश, नाग-पाश, त्रिशूल और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: योग-शास्त्र के दस प्राणों (पञ्च प्राण व पञ्च उपप्राण) में प्रथम उपप्राण का नाम "नाग" है जो देह की शुद्धि से संबद्ध है। नाग भैरव की आराधना से नाड़ियों की शुद्धि, गुप्त आध्यात्मिक निधियों की प्राप्ति और पृथ्वी-तत्त्व की स्थिरता सिद्ध होती है।'
      },
      {
        headingEn: '45. उग्र भैरव (Ugra Bhairava)',
        headingHi: '45. उग्र भैरव (Ugra Bhairava)',
        bodyEn:
          'Etymology & Identity: Ugra Bhairava (from ugra, "intense, formidable, high-voltage, pungent, and overwhelming") is the fourth of the Vedic Aṣṭamūrti Rudras and a supreme Tantric consort of the Mahāvidyā Ugratārā / Ekajaṭā.\n' +
          'Scriptural & Tantric Context: Celebrated in the Tārā Tantra, Rudrayāmala, Bṛhannīla Tantra, and Śiva Purāṇa (where Ugra corresponds to the Vāyu/wind element that sweeps away all stagnation), Ugra Bhairava acts with lightning-like speed to rescue the practitioner from extreme crisis (ugratārā-sahāya).\n' +
          'Iconography & Attributes: Blazing blue-black like a storm-charged thundercloud, wearing a tiger-skin and five skulls on his crown, standing in pratyālīḍha posture, holding the kartrī (chopper), khaḍga, blue lotus (nīlotpala) or trident, and kapāla.\n' +
          'Philosophical & Yogic Significance: In Tantric sadhana, ugratā denotes one-pointed, high-intensity spiritual urgency (tīvra-saṃvega, Yoga Sūtra 1.21—"attainment is near for those of intense urgency"); Ugra Bhairava accelerates the yogī’s breakthrough across the ocean of saṃsāra.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "उग्र भैरव" (उग्र = तीव्र वेगवान, प्रचण्ड तेजस्वी एवं त्वरित फलदायी) वैदिक अष्टमूर्ति शिव की चतुर्थ मूर्ति (वायु-तत्त्व के अधिष्ठाता) तथा दशमहाविद्या में भगवती "उग्रतारा" के प्रमुख भैरव-सहचर हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: तारा तन्त्र, बृहन्नील तन्त्र, रुद्रयामल और शिव पुराण में उग्र भैरव को घोर संकटों ("उग्र-तारिणी") से विद्युत्-गति से पार लगाने वाला और जड़ता को उड़ा देने वाले महाप्राण-वायु का स्वामी कहा गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: सघन मेघ के समान नील-श्याम वर्ण, मस्तक पर पंचमुण्ड-मुकुट, व्याघ्रचर्म धारी और प्रत्यालीढ़ मुद्रा में स्थित उग्र भैरव अपने हाथों में कर्तरी, खड्ग, त्रिशूल (या नीलकमल) और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: पातञ्जल योगसूत्र (१.२१ — "तीव्रसंवेगानामासन्नः") के अनुसार तीव्र आध्यात्मिक संवेग वाले साधकों को समाधि और सिद्धि शीघ्र प्राप्त होती है। उग्र भैरव साधक में वही अदम्य "तीव्र-संवेग" जाग्रत कर भवसागर से पार उतारते हैं।'
      },
      {
        headingEn: '46. भूतनाथ भैरव (Bhūtanātha Bhairava)',
        headingHi: '46. भूतनाथ भैरव (Bhūtanātha Bhairava)',
        bodyEn:
          'Etymology & Identity: Bhūtanātha Bhairava ("Lord of All Beings and Master of the Five Elements") encompasses the dual meaning of bhūta in Sanskrit: (1) the five gross elements (Pañcamahābhūtas: earth, water, fire, air, ether) and all living creatures, and (2) the subtle elemental attendants (bhūtagaṇas) of Śiva’s retinue.\n' +
          'Scriptural & Purāṇic Context: Extensively praised in the Śiva Purāṇa, Liṅga Purāṇa, and Kālīkula Tantras, Bhūtanātha Bhairava is the hospitable lord who welcomes every creature discarded or feared by polite society into his divine assembly.\n' +
          'Iconography & Attributes: Surrounded by joyous dancing gaṇas, yakṣas, and yoginīs, wearing a crescent moon and serpent garland, five-hued or ash-white, holding the trident, ḍamaru, horn (śṛṅgī), and skull-bowl.\n' +
          'Philosophical & Yogic Significance: In Haṭha and Tantric Yoga, Bhūtanātha Bhairava presides over Bhūta-śuddhi—the foundational liturgical and meditative purification of the five elements within the five lower cakras (Mūlādhāra to Viśuddha), granting elemental mastery (bhūtajaya).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "भूतनाथ भैरव" में "भूत" शब्द के दो गहन शास्त्रीय अर्थ हैं—(१) पृथ्वी, जल, तेज, वायु और आकाश रूपी "पञ्चमहाभूत" तथा समस्त प्राणी-मात्र, और (२) भगवान् शिव के अनुचर "भूतगण"। इन दोनों के परम स्वामी भूतनाथ भैरव हैं।\n' +
          'शास्त्रीय एवं पौराणिक संदर्भ: शिव पुराण, लिंग पुराण और आगम ग्रन्थों में भूतनाथ भैरव को समदर्शी करुणा का सागर बताया गया है, जो समाज द्वारा उपेक्षित और भयावह समझे जाने वाले प्राणियों को भी अपने गणों के रूप में अपनाते हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: नृत्य करते हुए भूतगणों, यक्षों और योगिनियों से परिवृत, भस्म-विभूषित, चन्द्र-शेखर भूतनाथ भैरव अपने हाथों में त्रिशूल, डमरू, श्रृंगी नाद और कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: तांत्रिक उपासना के मूल आधार "भूत-शुद्धि" (मूलाधार से विशुद्ध चक्र तक पाँचों महाभूतों का शोधन) के अधिष्ठाता देव भूतनाथ भैरव ही हैं, जिनकी कृपा से साधक को "भूत-जय" (पंचतत्त्वों पर विजय) प्राप्त होती है।'
      },
      {
        headingEn: '47. अघोर भैरव (Aghora Bhairava)',
        headingHi: '47. अघोर भैरव (Aghora Bhairava)',
        bodyEn:
          'Etymology & Identity: Aghora Bhairava (from a-ghora, literally "Non-Terrifying, Luminous, and Profoundly Benign", even within the heart of the fiercest reality) is the Southern face of the five-faced Sadāśiva/Svacchanda and the fountainhead of the Aghora spiritual stream.\n' +
          'Scriptural & Philosophical Context: Rooted in the Yajurvedic Pañcabrahma mantras (aghorébhyo ’tha ghorébhyo ghoraghoratarebhyaḥ, Taittirīya Āraṇyaka 10.20) and expounded in the Svacchanda Tantra, Tantrāloka, and the Kīnārāmī Aghora lineage of Kāśī, Aghora Bhairava reveals that nothing in existence is impure when seen through non-dual eyes.\n' +
          'Iconography & Attributes: Deep sapphire or midnight-blue in radiance, serene yet fierce, adorned with rudrākṣa and ashes, holding the trident, ḍamaru, kapāla, and sword of wisdom.\n' +
          'Philosophical & Yogic Significance: In Kashmir Śaivism, the three cosmic powers are Parā (supreme), Parāparā (intermediate), and Aparā (diverse); Aghora represents the dynamic grace that descends into the most contracted, "terrifying" (ghora) realms of saṃsāra and transforms them into pure, non-dual Śiva-light (aghora).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "अघोर भैरव" (अ = नहीं + घोर = भयानक या कठिन; अर्थात् जो घोरतम स्थिति में भी परम सौम्य, सरल और शिवमय हैं) पञ्चमुख शिव के दक्षिण मुख तथा "अघोर पथ" के सर्वोच्च आराध्य देव हैं।\n' +
          'शास्त्रीय एवं दार्शनिक संदर्भ: कृष्ण यजुर्वेद के तैत्तिरीय आरण्यक ("अघोरेभ्योऽथ घोरेभ्यो घोरघोरतरेभ्यः" — १०.२०), स्वच्छन्द तन्त्र, तन्त्रालोक और काशी की बाबा कीनाराम अघोर परम्परा में अघोर भैरव को अद्वैत समदृष्टि का सर्वोच्च शिखर माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: नीलमणि या गहन रात्रि के समान शांत-तेजस्वी वर्ण, भस्म और रुद्राक्ष से अलंकृत अघोर भैरव अपने हाथों में त्रिशूल, डमरू, कपाल और ज्ञान-खड्ग धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: अघोर दर्शन का मूल सिद्धांत है कि सृष्टि में कुछ भी घृणित या त्याज्य नहीं है; जब साधक शुद्ध-अशुद्ध और ग्राह्य-त्याज्य के द्वैत से ऊपर उठकर सर्वत्र शिव का दर्शन करता है, तब वह "अघोर-अवस्था" को प्राप्त करता है।'
      },
      {
        headingEn: '48. स्वर्णाकर्षण भैरव (Svarṇākarṣaṇa Bhairava)',
        headingHi: '48. स्वर्णाकर्षण भैरव (Svarṇākarṣaṇa Bhairava)',
        bodyEn:
          'Etymology & Identity: Svarṇākarṣaṇa Bhairava ("The Golden-Attracting Bhairava", from svarṇa, "pure gold, auric radiance, and auspicious abundance," and ākarṣaṇa, "magnetizing or drawing forth") is the supreme Sāttvika wealth-and-grace-bestowing form of Bhairava.\n' +
          'Scriptural & Liturgical Context: Extensively detailed in the Rudrayāmala Tantra (Svarṇākarṣaṇa Bhairava Kalpa, Stotra, and Sahasranāma) and connected with the temple traditions of Chidambaram and Kāśī, he is propitiated by householders and yogīs alike to eradicate crushing poverty (dāridrya-nāśa), debt, and scarcity.\n' +
          'Iconography & Attributes: Unlike the dark cremation-ground forms, Svarṇākarṣaṇa Bhairava is clad in yellow silk (pītāmbara), glowing like molten gold, seated upon a jewelled lion-throne beneath the wish-fulfilling Kalpavṛkṣa tree, embraced by Bhairavī, holding a vessel overflowing with gold and jewels (svarṇa-pātra), a golden trident, ḍamaru, and varada-mudrā.\n' +
          'Philosophical & Yogic Significance: Esoterically, svarṇa is not merely physical gold, but the incorruptible golden light of spiritual wisdom (hiraṇmaya-jyoti) and vital ojas; Svarṇākarṣaṇa Bhairava magnetizes both outer material sufficiency for dharma and inner golden illumination.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "स्वर्णाकर्षण भैरव" (स्वर्ण = सुवर्ण, समृद्धि एवं हिरण्मय आत्म-तेज + आकर्षण = खींचना/प्रदान करना) भैरव का परम सात्त्विक, ऐश्वर्य-प्रदायक और दारिद्र्य-विनाशक स्वरूप है।\n' +
          'शास्त्रीय एवं उपासना संदर्भ: रुद्रयामल तन्त्र (स्वर्णाकर्षण भैरव कल्प, स्तोत्र एवं सहस्रनाम) तथा चिदम्बरम् और काशी की उपासना परम्परा में इन्हें गृहस्थों और साधकों के समस्त ऋण, दरिद्रता और अभावों को दूर कर अक्षय लक्ष्मी प्रदान करने वाला देवता माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: श्मशान-वासी उग्र रूपों से भिन्न, स्वर्णाकर्षण भैरव पीताम्बर धारी, तप्त कांचन के समान स्वर्णिम आभा वाले, कल्पवृक्ष के नीचे रत्न-सिंहासन पर भैरवी के साथ आसीन हैं तथा हाथों में स्वर्ण-रत्न से भरा पात्र, स्वर्ण-त्रिशूल, डमरू और वरद मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: आध्यात्मिक धरातल पर "स्वर्ण" साधक के विशुद्ध ओज और "हिरण्मय ज्योति" (आत्म-ज्ञान) का प्रतीक है। स्वर्णाकर्षण भैरव साधक को बाह्य श्री-समृद्धि के साथ-साथ आंतरिक स्वर्णिम प्रज्ञा से भी संपन्न करते हैं।'
      },
      {
        headingEn: '49. नृसिंह भैरव (Nṛsiṃha Bhairava)',
        headingHi: '49. नृसिंह भैरव (Nṛsiṃha Bhairava)',
        bodyEn:
          'Etymology & Identity: Nṛsiṃha Bhairava ("The Man-Lion Bhairava") represents the powerful Tantric synthesis of the fierce Vaiṣṇava avatāra Narasiṃha and Śaiva-Śākta Bhairava consciousness.\n' +
          'Scriptural & Tantric Context: Attested in the Śāradā Tilaka, Prapañcasāra Tantra, Nṛsiṃhatāpanīya Upaniṣad, and shared Śākta-Śaiva-Vaiṣṇava mandala traditions (where Nārasimhī is one of the Mātṛkās/Yoginīs in 8/9-mother lists), Nṛsiṃha Bhairava embodies the transcendent threshold that defies all dualistic loopholes.\n' +
          'Iconography & Attributes: Possessing a blazing lion-face with a mane of flames and a muscular human-divine torso, three-eyed, roaring with the sound of thunder, wielding the discus, trident, kapāla, and lotus while tearing apart demonic obstruction with his claws.\n' +
          'Philosophical & Yogic Significance: Just as Hiraṇyakaśipu sought immunity from "inside or outside, day or night, man or beast, earth or sky," the ego constructs subtle rationalizations to avoid surrender; Nṛsiṃha Bhairava manifests at the twilight junction (sandhyā / suṣumṇā) to rip open the armoured chest of egoic resistance and reveal the heart of devotion.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "नृसिंह भैरव" (नृ = मानव + सिंह = केसरी; नर-सिंह और भैरव के संयुक्त उग्र तेज का विग्रह) वैष्णव नृसिंह-तत्त्व और शैव-शाक्त भैरव-तत्त्व के अद्भुत तांत्रिक समन्वय के प्रतीक हैं।\n' +
          'शास्त्रीय एवं तांत्रिक संदर्भ: शारदातिलक, प्रपञ्चसार तन्त्र, नृसिंहतापनीय उपनिषद् तथा योगिनी-मातृका मण्डल (जहाँ "नारसिंही" मातृका शक्ति पूजित हैं) में नृसिंह भैरव को समस्त आसुरी वरदानों और अभेद्य बाधाओं को चीर डालने वाली संधि-शक्ति माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रज्वलित अग्नि-समान केसर (अयाल) से युक्त सिंह-मुख, त्रिनेत्र, मेघ-गर्जन जैसी दहाड़ तथा हाथों में त्रिशूल, चक्र, कपाल और तीक्ष्ण नख धारण किए नृसिंह भैरव अत्यंत प्रभावशाली हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: जैसे हिरण्यकशिपु न भीतर मर सकता था न बाहर, न दिन में न रात में, वैसे ही सूक्ष्म अहंकार अनेक तर्कों की आड़ में छिपा रहता है। नृसिंह भैरव इड़ा और पिंगला के संधि-काल (सुषुम्णा की गोधूलि) में प्रकट होकर अहंकार का विदारण करते हैं।'
      },
      {
        headingEn: '50. कपाल भैरव (Kapāla Bhairava)',
        headingHi: '50. कपाल भैरव (Kapāla Bhairava)',
        bodyEn:
          'Etymology & Identity: Kapāla Bhairava ("The Skull-Bearing Bhairava", also revered as Kapālī) is the seventh canonical member in several major Aṣṭa Bhairava lists (alternating with Bhīṣaṇa Bhairava) and the fiftieth of the Fifty-Two Bhairavas.\n' +
          'Scriptural & Lineage Context: Central to the Śiva Purāṇa, Kūrma Purāṇa, Kāśī Khaṇḍa (Kapālabhairava / Lāṭ Bhairava of Vārāṇasī), and the historical Kāpālika ascetic order (Soma-siddhānta), Kapāla Bhairava carries the fifth cranium of Brahmā as his eternal alms-bowl.\n' +
          'Iconography & Attributes: Glowing yellow or blood-red in complexion, seated or mounted on an elephant/corpse alongside his Mātṛkā consort Indrāṇī or Cāmuṇḍā, garlanded with bones and skulls, holding the vajra, pāśa, trident, and the luminous brahma-kapāla.\n' +
          'Philosophical & Yogic Significance: In esoteric subtle anatomy, the ultimate kapāla is the cranial vault of the yogī’s own skull enclosing the thousand-petaled Sahasrāra lotus; Kapāla Bhairava fills this inner cranial vessel with the wine of supreme Self-awareness (kulāmṛta / parā-saṃvit).',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "कपाल भैरव" (कपाल = ब्रह्मकपाल अथवा सहस्रार-कपाल को धारण करने वाले "कपाली") अनेक शास्त्रीय अष्ट-भैरव सूचियों में सप्तम भैरव तथा बावन भैरवों की नामावली में पचासवें स्थान पर प्रतिष्ठित हैं।\n' +
          'शास्त्रीय एवं आम्नाय संदर्भ: शिव पुराण, कूर्म पुराण, काशी खण्ड (काशी के प्राचीन कपाल भैरव / लाट भैरव तीर्थ) तथा ऐतिहासिक "कापालिक" (सोम-सिद्धान्त) परम्परा में कपाल भैरव को ब्रह्मकपाल-पात्र का अधिष्ठाता माना गया है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: पीत अथवा रक्त-प्रभ वर्ण, मुण्डमाला और अस्थि-आभूषणों से युक्त कपाल भैरव अपने हाथों में वज्र, पाश, त्रिशूल और दिव्य ज्योति से पूर्ण ब्रह्म-कपाल धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: गुह्य योग-विज्ञान में वास्तविक "कपाल" साधक के स्वयं के मस्तक का ऊपरी कपाल-कुहर है जिसके भीतर सहस्रार पद्म स्थित है। कपाल भैरव की साधना इस अंतः-कपाल को परा-संवित् के कुलामृत से परिपूर्ण कर देती है।'
      },
      {
        headingEn: '51. चरु भैरव (Caru Bhairava)',
        headingHi: '51. चरु भैरव (Caru Bhairava)',
        bodyEn:
          'Etymology & Identity: Caru Bhairava (from caru, "the consecrated sacrificial oblation of boiled rice, barley, milk, and ghee offered into the sacred fire", as well as cāru, "auspicious and pleasing") is the presiding Bhairava of ritual fire-alchemy (homa-vidhāna) and sacrificial nourishment.\n' +
          'Scriptural & Ritual Context: Across Vedic Śrauta-Gṛhya rituals, Purāṇic yajñas, and Tantric kuṇḍa-homa manuals (such as the Śāradā Tilaka and Somaśambhupaddhati), the preparation and offering of caru is the climax that feeds the deities and ancestors; in Kaula and Vidyāpīṭha Tantras, caru also designates the consecrated sacramental offering of the Yoginī circle.\n' +
          'Iconography & Attributes: Shining like clarified butter poured upon smokeless fire, four-armed, holding the golden caru-sthālī (sacrificial vessel), sruk/sruva (sacrificial ladles), trident, and abhaya-mudrā.\n' +
          'Philosophical & Yogic Significance: In the inner fire-sacrifice (antar-yāga) taught in the Vijñāna Bhairava and Tantrāloka, the yogī offers the oblation (caru) of sense-impressions and dualistic thoughts into the blazing stomach-and-consciousness fire (cid-agni), where Caru Bhairava transmutes every experience into spiritual nourishment.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "चरु भैरव" (संस्कृत "चरु" = यज्ञ और तांत्रिक होम में देवताओं को अर्पित किया जाने वाला पवित्र हविष्यान्न/पायस; तथा "चारु" = मनोहर एवं शुभ) यज्ञीय आहुति, तांत्रिक बलि-विधान और आध्यात्मिक पोषण के अधिष्ठाता भैरव हैं।\n' +
          'शास्त्रीय एवं आनुष्ठानिक संदर्भ: वैदिक गृह्य-श्रौत सूत्रों से लेकर शारदातिलक, सोमशम्भुपद्धति और कौल आगमों के होम-विधान में "चरु-हवन" अनुष्ठान का प्राण-बिन्दु है, जिसके माध्यम से भैरव और चौंसठ योगिनियों की तृप्ति होती है।\n' +
          'प्रतिमाशास्त्र एवं आयुध: प्रज्वलित हवनीय अग्नि और घृत के समान स्वर्णिम-तेजस्वी चरु भैरव अपने हाथों में स्वर्णमयी चरु-स्थाली (हविष्य पात्र), स्रुक्-स्रुवा, त्रिशूल और अभय मुद्रा धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: विज्ञानभैरव और तन्त्रालोक के "अन्तर्याग" (आंतरिक हवन) में साधक अपनी इंद्रिय-वृत्तियों और द्वैत-विकल्पों रूपी "चरु" को चिदग्नि (ज्ञानाग्नि) में आहुत करता है; चरु भैरव उस आहुति को स्वीकार कर साधक को पूर्ण आध्यात्मिक तृप्ति प्रदान करते हैं।'
      },
      {
        headingEn: '52. स्वछंद भैरव (Svacchanda Bhairava)',
        headingHi: '52. स्वछंद भैरव (Svacchanda Bhairava)',
        bodyEn:
          'Etymology & Identity: Svacchanda Bhairava (from sva, "one’s own innate Self," and chanda, "free will, sovereign spontaneity, and unconditioned rhythm") crowns the Fifty-Two Bhairavas as the supreme, autonomous Paramaśiva-Bhairava of non-dual Śaivism.\n' +
          'Scriptural & Philosophical Context: He is the central deity of the monumental Svacchanda Tantra (expounded with Kṣemarāja’s Uddyota commentary)—the foundational scripture of the Dakṣiṇa/Bhairava stream in Kashmir Śaivism—where Svacchanda Bhairava and his consort Aghoreśvarī embody absolute divine freedom (Svātantrya-śakti).\n' +
          'Iconography & Attributes: Canonically described in the Svacchanda Tantra as snow-white (or five-complexioned), having five faces (Īśāna, Tatpuruṣa, Aghora, Vāmadeva, Sadyojāta—each with three eyes, totaling fifteen eyes) and eighteen arms (aṣṭādaśa-bhuja) wielding all weapons of knowledge and grace while standing upon Kāla and Māyā.\n' +
          'Philosophical & Yogic Significance: Svacchanda Bhairava is the ultimate culmination of the 52 Bhairavas: he who depends on nothing outside himself, whose playful free will (svacchandatā) manifests, sustains, and reabsorbs the entire universe, and whose realization bestows Jīvanmukti—supreme, unfettered liberation in this very life.',
        bodyHi:
          'व्युत्पत्ति एवं स्वरूप: "स्वछंद भैरव" (स्व = निज आत्मा + छन्द = परम स्वतंत्र इच्छा एवं सहज स्पन्द; जो केवल अपनी ही स्वतंत्र इच्छा से लीला करते हैं) बावन भैरवों की श्रृंखला के सर्वोच्च शिखर एवं मुकुटमणि हैं।\n' +
          'शास्त्रीय एवं दार्शनिक संदर्भ: काश्मीरी शैव दर्शन के विशाल और मूलभूत आगम "स्वच्छन्द तन्त्र" (आचार्य क्षेमराज की "उद्योत" टीका सहित) के केंद्रीय आराध्य देव स्वछंद भैरव और उनकी शक्ति भगवती अघोरेश्वरी ही हैं, जो परब्रह्म की "स्वातंत्र्य-शक्ति" के पूर्ण विग्रह हैं।\n' +
          'प्रतिमाशास्त्र एवं आयुध: स्वच्छन्द तन्त्र के ध्यान के अनुसार वे कर्पूर-गौर, "पञ्चमुख" (ईशान, तत्पुरुष, अघोर, वामदेव और सद्योजात—प्रत्येक मुख पर तीन नेत्र अर्थात् कुल पंद्रह नेत्र) तथा "अष्टादशभुज" (१८ भुजाओं वाले) हैं, जो काल और माया के ऊपर खड़े होकर १८ दिव्य आयुध व मुद्राएँ धारण करते हैं।\n' +
          'दार्शनिक एवं यौगिक महत्त्व: १. असितांग भैरव से प्रारंभ हुई बावन भैरवों की यात्रा ५२. स्वछंद भैरव में पूर्णता पाती है—उनकी अनुभूति से साधक समस्त कर्म-पाशों और परतंत्रता से मुक्त होकर इसी जीवन में "जीवन्मुक्ति" और परम आत्म-स्वातंत्र्य ("स्वच्छन्द-पद") प्राप्त करता है।'
      }
    ],
    keyFindingsEn: [
      'Complete 52 Bhairava (Bāvan Bhairav) monograph from 1. Asitāṅga Bhairava to 52. Svacchanda Bhairava.',
      'Each of the 52 Bhairavas is documented with Sanskrit etymology, Āgamic/Purāṇic context, iconography, and yogic significance.',
      'Integrates the canonical Aṣṭa Bhairava octad, Kāśī Kṣetrapāla guardians, Śaktipīṭha consorts, and Svacchanda Tantra metaphysics.'
    ],
    keyFindingsHi: [
      '1. असितांग भैरव से 52. स्वछंद भैरव तक सभी बावन भैरव (52 भैरव) पर विस्तृत शास्त्रीय शोध-प्रबंध।',
      'प्रत्येक भैरव का संस्कृत शब्दार्थ, आगमिक/पौराणिक संदर्भ, प्रतिमाशास्त्र एवं यौगिक रहस्य सविस्तार प्रलेखित।',
      'अष्ट भैरव, काशी के कोतवाल एवं दण्डपाणि, शक्तिपीठ रक्षक तथा स्वच्छन्द तन्त्र के सर्वोच्च तत्त्वज्ञान का समन्वित संकलन।'
    ],
    metadata: [
      { labelEn: 'Sanskrit Term', labelHi: 'संस्कृत संज्ञा', valueEn: 'Bhairavagaṇa & Bāvan Bhairava (01. Asitāṅga to 52. Svacchanda)', valueHi: 'भैरवगण एवं बावन भैरव (01. असितांग से 52. स्वछंद भैरव)' },
      { labelEn: 'Total Forms Profiled', labelHi: 'कुल वर्णित स्वरूप', valueEn: '52 Bhairavas (Full Monograph Entries)', valueHi: '52 भैरव (संपूर्ण विस्तृत लेख)' },
      { labelEn: 'Primary Sources', labelHi: 'मूल शास्त्रीय स्रोत', valueEn: 'Svacchanda Tantra · Tantrāloka · Śiva Purāṇa · Rudrayāmala · Kāśī Khaṇḍa', valueHi: 'स्वच्छन्द तन्त्र · तन्त्रालोक · शिव पुराण · रुद्रयामल · काशी खण्ड' },
      { labelEn: 'Lead Investigator', labelHi: 'प्रमुख अन्वेषक', valueEn: 'Ram Ashok Kumar', valueHi: 'राम अशोक कुमार' }
    ],
    primarySourcesEn: 'Svacchanda Tantra · Tantrāloka (Abhinavagupta, Ch. 1) · Śiva Purāṇa (Śatarudra Saṃhitā) · Rudrayāmala · Skanda Purāṇa (Kāśī Khaṇḍa)',
    primarySourcesHi: 'स्वच्छन्द तन्त्र · तन्त्रालोक (अभिनवगुप्त, प्रथम आह्निक) · शिव पुराण (शतरुद्र संहिता) · रुद्रयामल तन्त्र · स्कन्द पुराण (काशी खण्ड)',
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
    subtitleEn: 'Sub-Part II of Aghora Sampradāya: Somāsiddhānta, 12 Gurus & Indrajali–Devjali–Rudrajali–Vidyajali–Siddhajali',
    subtitleHi: 'अघोर सम्प्रदाय का उप-भाग II: सोमसिद्धान्त, १२ गुरु एवं इन्द्रजाली–देवजाली–रुद्रजाली–विद्याजाली–सिद्धजाली',
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
    sanskritSeal: 'भैरवगण · बावन भैरव (१–५२)',
    shortTitleEn: 'Bhairavagaṇa & 52 Bhairavas',
    shortTitleHi: 'भैरवगण एवं बावन भैरव (१–५२)',
    subtitleEn: 'Complete 52 Bhairavas Monograph (1. Asitāṅga to 52. Svacchanda Bhairava)',
    subtitleHi: '१. असितांग भैरव से ५२. स्वछंद भैरव तक सभी ५२ भैरवों का संपूर्ण शोध-प्रबंध',
    domainBadgeEn: 'ŚAIVA RAHASYA · 52 BHAIRAVAS',
    domainBadgeHi: 'शैव रहस्य · बावन भैरव (१–५२)',
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
    subtitleEn: 'Research Synthesis (Parts I–IV) + 2 Dedicated Archives: Kālīkula Archive & Śrīkula Archive',
    subtitleHi: 'शोध संश्लेषण (भाग I–IV) + २ पृथक् शोध संग्रह: कालीकुल अभिलेखागार एवं श्रीकुल अभिलेखागार',
    domainBadgeEn: 'ŚAKTI TATTVA · KULA STREAMS & 2 ARCHIVES',
    domainBadgeHi: 'शक्ति तत्त्व · कुल-परम्परा एवं २ संग्रह',
    accentColor: '#EC4899',
    motifType: 'shakta',
    subParts: [
      {
        id: 'seal-kalikula-archive-part1',
        sealNumber: 'PART I · ARCHIVE',
        parentSealId: 'seal-kalikula-srikula',
        categorySlug: 'eight-matrikas',
        articleSlug: 'kalikula-archive-tradition',
        sanskritSeal: 'कालीकुल · Kālīkula Archive',
        shortTitleEn: 'Part I — Kālīkula Archive (Time, Transformation & Dissolution)',
        shortTitleHi: 'भाग I — कालीकुल अभिलेखागार (काल, रूपांतरण एवं लय)',
        subtitleEn: 'The family, lineage, or tradition of Kālī: Definition, Philosophy, Iconography, Krama & Sources',
        subtitleHi: 'काली का कुल/परम्परा: परिभाषा, दार्शनिक आधार, प्रतिमाशास्त्र, कश्मीर क्रम एवं ग्रंथीय स्रोत',
        domainBadgeEn: 'PART I · KĀLĪKULA RESEARCH ARCHIVE',
        domainBadgeHi: 'भाग I · कालीकुल शोध संग्रह',
        accentColor: '#F43F5E',
        motifType: 'shakta'
      },
      {
        id: 'seal-srikula-archive-part2',
        sealNumber: 'PART II · ARCHIVE',
        parentSealId: 'seal-kalikula-srikula',
        categorySlug: 'eight-matrikas',
        articleSlug: 'srikula-archive-tradition',
        sanskritSeal: 'श्रीकुल · Śrīkula Archive',
        shortTitleEn: 'Part II — Śrīkula Archive (Sovereignty, Manifestation & Śrīvidyā)',
        shortTitleHi: 'भाग II — श्रीकुल अभिलेखागार (संप्रभुता, अभिव्यक्ति एवं श्रीविद्या)',
        subtitleEn: 'The family, lineage, or tradition of Śrī: Tripurasundarī, Śrīcakra, Mantra, Jīvanmukti & Sources',
        subtitleHi: 'श्री का कुल/परम्परा: त्रिपुरसुन्दरी, श्रीचक्र ज्यामिति, मन्त्र-तत्त्व, जीवनमुक्ति एवं मूल ग्रंथ',
        domainBadgeEn: 'PART II · ŚRĪKULA RESEARCH ARCHIVE',
        domainBadgeHi: 'भाग II · श्रीकुल शोध संग्रह',
        accentColor: '#EC4899',
        motifType: 'mahavidya'
      }
    ]
  },
  {
    id: 'seal-mahavidya-navadurga',
    sealNumber: 'SEAL 06',
    categorySlug: 'eight-matrikas',
    articleSlug: 'dasa-mahavidya-ten-wisdom-goddesses',
    sanskritSeal: 'दशमहाविद्या · Daśa Mahāvidyā',
    shortTitleEn: 'The Ten Mahāvidyās Archive',
    shortTitleHi: 'दशमहाविद्या संपूर्ण शोध अभिलेखागार',
    subtitleEn: 'Complete Research Archive: Origins, Kālīkula–Śrīkula, Profiles of All 10 Goddesses, Philosophy, Sources & Ritual',
    subtitleHi: 'दस महाविद्याओं का संपूर्ण शोध अभिलेखागार: उत्पत्ति, दसों देवियों का विस्तृत विवरण, दर्शन, शास्त्र एवं उपासना',
    domainBadgeEn: 'ŚAKTI TATTVA · DAŚA MAHĀVIDYĀ',
    domainBadgeHi: 'शक्ति तत्त्व · दशमहाविद्या',
    accentColor: '#F43F5E',
    motifType: 'mahavidya'
  },
  {
    id: 'seal-navadurga-nine-forms',
    sealNumber: 'SEAL 07',
    categorySlug: 'eight-matrikas',
    articleSlug: 'navadurga-nine-forms',
    sanskritSeal: 'नवदुर्गा · शैलपुत्र्यादि नव-स्वरूप',
    shortTitleEn: 'Navadurgā — Nine Forms',
    shortTitleHi: 'नवदुर्गा — देवी के नौ स्वरूप',
    subtitleEn: 'Śailaputrī to Siddhidātrī: Devī Kavaca Liturgy, Agni Purāṇa Mandala & Kāśī Pilgrimage',
    subtitleHi: 'शैलपुत्री से सिद्धिदात्री: देवी कवच विधान, अग्नि पुराण मण्डल एवं काशी नवदुर्गा यात्रा',
    domainBadgeEn: 'ŚAKTI TATTVA · NAVADURGĀ',
    domainBadgeHi: 'शक्ति तत्त्व · नवदुर्गा मण्डल',
    accentColor: '#FB7185',
    motifType: 'shakta'
  },
  {
    id: 'seal-shakti-pithas-geography',
    sealNumber: 'SEAL 08',
    categorySlug: 'eight-matrikas',
    articleSlug: 'shakti-pithas-sacred-geography',
    sanskritSeal: 'शक्तिपीठ · चतुष्पीठ एवं ५१ पीठ',
    shortTitleEn: 'Śakti Pīṭhas — 51 Seats',
    shortTitleHi: '५१ शक्तिपीठ एवं पवित्र भूगोल',
    subtitleEn: 'Catuṣpīṭha, 51 Embodied Seats of Satī, 51 Sanskrit Mātṛkā Letters & Bhairava Consorts',
    subtitleHi: 'आदि चतुष्पीठ, ५१ शक्तिपीठ, ५१ मातृका अक्षर एवं रक्षक भैरव युग्म',
    domainBadgeEn: 'ŚAKTI TATTVA · ŚAKTI PĪṬHAS',
    domainBadgeHi: 'शक्ति तत्त्व · ५१ शक्तिपीठ',
    accentColor: '#E879F9',
    motifType: 'mahavidya'
  }
];

// ============================================================================
// STRUCTURED TABLES FOR KĀLĪKULA & ŚRĪKULA (PARTS I, II, III & IV)
// ============================================================================
const KALIKULA_PART1_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-kalikula-wider-traditions',
    articleSlug: 'kalikula-archive-tradition',
    titleEn: 'Part I · Important Traditions Within the Wider Kālī-Centered Landscape',
    titleHi: 'भाग I · व्यापक काली-केंद्रित परिदृश्य की प्रमुख परम्पराएँ एवं शोध क्षेत्र',
    captionEn:
      'Kālīkula should not be treated as a fixed list of subsects. These are key research areas that are not all interchangeable or necessarily separate branches of one formal organization.',
    captionHi:
      'कालीकुल को उप-संप्रदायों की किसी एक निश्चित सूची के रूप में नहीं देखा जाना चाहिए। ये प्रमुख शोध-क्षेत्र हैं, जो किसी एक ही औपचारिक संगठन की शाखाएँ नहीं हैं।',
    headersEn: ['Tradition or Subject', 'Religious, Regional & Philosophical Significance'],
    headersHi: ['परम्परा / शोध विषय', 'धार्मिक, क्षेत्रीय एवं दार्शनिक महत्त्व'],
    rowsEn: [
      [
        'Bengali Śākta traditions',
        'Diverse devotional, philosophical, and Tantric approaches to Kālī and the Goddess, with important regional and historical variations.'
      ],
      [
        'Kashmirian Krama',
        'A nondual Śākta-Śaiva current in which Kālī and her sequences (notably the Twelve Kālīs) are central to theories of consciousness and dissolution.'
      ],
      [
        'Mahāvidyā traditions',
        'Kālī is one of the ten Mahāvidyās, a group of Goddess forms interpreted differently across Tantric texts and lineages.'
      ],
      [
        'Kaula traditions',
        'Tantric traditions emphasizing lineage, initiation, ritual, and the relationship between the individual and the larger reality designated by kula. Some overlap with Kālī-centered worship.'
      ]
    ],
    rowsHi: [
      [
        'बंगाली शाक्त परम्पराएँ (Bengali Śākta traditions)',
        'काली और पराशक्ति के प्रति भक्तिमूलक, दार्शनिक और तांत्रिक दृष्टिकोणों की विविधता, जिसमें महत्त्वपूर्ण क्षेत्रीय और ऐतिहासिक विशेषताएँ हैं।'
      ],
      [
        'कश्मीरी क्रम परम्परा (Kashmirian Krama)',
        'एक अद्वैत शाक्त-शैव धारा जिसमें काली और उनका क्रम (विशेषतः द्वादश काली) चेतना के उन्मेष और लय (विलय) के सिद्धांतों के केंद्र में हैं।'
      ],
      [
        'महाविद्या परम्पराएँ (Mahāvidyā traditions)',
        'काली दस महाविद्याओं में से एक प्रमुख स्वरूप हैं, जिनकी व्याख्या विभिन्न तांत्रिक ग्रन्थों और आम्नायों में विविध प्रकार से की गई है।'
      ],
      [
        'कौल परम्पराएँ (Kaula traditions)',
        'वंश-परम्परा, दीक्षा, अनुष्ठान तथा व्यक्ति और "कुल" (समग्र चेतना-शक्ति) के संबंध पर बल देने वाली तांत्रिक धाराएँ, जिनका काली-केंद्रित उपासना से गहरा संबंध है।'
      ]
    ]
  },
  {
    id: 'table-kalikula-iconography-symbolism',
    articleSlug: 'kalikula-archive-tradition',
    titleEn: 'Part I · Kālī: Iconography, Visual Features & Documented Interpretive Registers',
    titleHi: 'भाग I · काली प्रतिमाशास्त्र एवं प्रतीकार्थ: दृश्य रूप बनाम शास्त्रीय व्याख्या',
    captionEn:
      'Research Note: Iconographic descriptions distinguish what is visibly represented from interpretations attributed to particular scriptures, commentaries, or living traditions. A symbol may carry several meanings rather than one universal explanation.',
    captionHi:
      'शोध टिप्पणी: प्रतिमाशास्त्रीय विवरण में दृश्य रूप और विशिष्ट शास्त्रों, भाष्यों या जीवंत परम्पराओं की व्याख्याओं के बीच स्पष्ट अंतर रखा जाना चाहिए।',
    headersEn: ['Iconographic Element', 'Visual Representation & Theological / Devotional Interpretations'],
    headersHi: ['प्रतिमाशास्त्रीय तत्त्व', 'दृश्य स्वरूप एवं धर्मशास्त्रीय / भक्तिमूलक व्याख्याएँ'],
    rowsEn: [
      [
        'Dark or black complexion',
        'Kālī is frequently depicted with a dark complexion. Devotional and theological interpretations associate this darkness with the boundless, the unmanifest, or a reality that cannot be contained by ordinary categories. Interpretations differ between texts and communities.'
      ],
      [
        'Garland of heads and other fierce attributes',
        'These features belong to particular iconographic forms of Kālī. They can be interpreted in relation to mortality, the destruction of ego, the transience of embodied existence, and the severing of limiting attachments. Specific meanings depend on the relevant textual and ritual context.'
      ],
      [
        'Kālī standing upon Śiva',
        'In a widely recognized image, Kālī stands upon the reclining Śiva. The image is interpreted in different ways, including through the relationship between consciousness (Śiva) and dynamic power (Śakti). Popular devotional narratives also connect it with Kālī’s cessation of destructive activity upon recognizing Śiva beneath her feet.'
      ],
      [
        'Cremation-ground imagery',
        'Certain forms of Kālī are associated with cremation grounds and other liminal settings. These places confront practitioners and observers with impermanence, death, social boundaries, and the limits of ordinary identity. Their meanings differ across devotional, ritual, and philosophical traditions.'
      ]
    ],
    rowsHi: [
      [
        'श्यामल या कृष्ण वर्ण (Dark or black complexion)',
        'काली को प्रायः गहरे श्यामल या कृष्ण वर्ण में चित्रित किया जाता है। भक्ति और धर्मशास्त्रीय व्याख्याएँ इस अंधकार/श्यामता को असीम, अव्यक्त, या सामान्य श्रेणियों से परे के परम यथार्थ से जोड़ती हैं।'
      ],
      [
        'मुण्डमाला एवं अन्य उग्र लक्षण (Garland of heads & fierce attributes)',
        'ये लक्षण काली के विशिष्ट प्रतिमा-रूपों से संबद्ध हैं। इनकी व्याख्या नश्वरता, अहंकार के नाश, देहधारी अस्तित्व की क्षणभंगुरता और सीमित करने वाली आसक्तियों के उच्छेदन के संदर्भ में की जाती है।'
      ],
      [
        'शिव के ऊपर खड़ी काली (Kālī standing upon Śiva)',
        'सुप्रसिद्ध प्रतिमा में काली शवासन में लेटे शिव के ऊपर स्थित हैं। इसकी व्याख्या चेतना (शिव) और गतिशील शक्ति (शक्ति) के अंतर्संबंध के साथ-साथ अपने चरणों के नीचे शिव को पहचानकर संहारक वेग को शांत करने की भक्ति-कथाओं से भी जुड़ी है।'
      ],
      [
        'श्मशान-भूमि के प्रतीक (Cremation-ground imagery)',
        'काली के कुछ रूप श्मशान और सीमांत स्थलों से जुड़े हैं। ये स्थल साधक को अनित्यता, मृत्यु, सामाजिक सीमाओं और साधारण अहं की नश्वरता के प्रत्यक्ष साक्षात्कार के लिए प्रेरित करते हैं।'
      ]
    ]
  },
  {
    id: 'table-kaligana-terminological-inquiry',
    articleSlug: 'kalikula-archive-tradition',
    titleEn: 'Part I · Kālīgaṇa (कालीगण), Kālīkula & The Twelve Kālīs: Terminological & Historical Matrix',
    titleHi: 'भाग I · कालीगण (Kālīgaṇa), कालीकुल एवं द्वादश काली: पारिभाषिक एवं ऐतिहासिक तुलनात्मक सारणी',
    captionEn:
      'Terminological precision distinguishing the descriptive Sanskrit compound Kālīgaṇa ("group/retinue/collection of Kālī forms") from formally attested Tantric school designations (Kālīkula, Kālīkrama, Kaula).',
    captionHi:
      'संस्कृत सामासिक पद "कालीगण" (काली के स्वरूपों या परिचारिकाओं का समूह/गण) और प्रमाणित तांत्रिक संप्रदाय-नामों (कालीकुल, कालीक्रम, कौल) के बीच सूक्ष्म पारिभाषिक एवं ऐतिहासिक अंतर।',
    headersEn: ['Sanskrit Term', 'Literal Meaning', 'Historical & Textual Status', 'Primary Texts & Scholarly Context'],
    headersHi: ['संस्कृत शब्द', 'शाब्दिक अर्थ', 'ऐतिहासिक एवं ग्रंथीय स्थिति', 'प्रमुख मूल ग्रन्थ एवं अकादमिक संदर्भ'],
    rowsEn: [
      [
        'Kālīgaṇa (कालीगण)',
        'Group, class, troop, retinue, or series of Kālīs (Kālī + gaṇa)',
        'Grammatically valid descriptive compound for a collective of Kālī manifestations or retinue deities; not an established academic name for a major independent Tantric sect.',
        'Used descriptively for deity groups/retinues; requires manuscript-specific verification rather than conflation with Kālīkula.'
      ],
      [
        'Kālīkula (कालीकुल)',
        'The family, lineage, or tradition of Kālī (Kālī + kula)',
        'Major umbrella designation in Śākta Tantra encompassing eastern Indian/Bengali Śākta lineages and medieval Kashmirian Krama streams.',
        'Kālīkulakramasadbhāva, Jayadrathayāmala, Devīpañcaśataka, Tantrāloka.'
      ],
      [
        'Kālīkrama / Mahānaya (कालीक्रम / महानय)',
        'The sequence/way of Kālī; the Great Way',
        'Nondual Śākta-Śaiva mystical and philosophical system of medieval Kashmir centered on sequential manifestation and reabsorption of consciousness.',
        'Abhinavagupta’s Tantrāloka, Kṣemarāja’s commentaries, Krama corpus.'
      ],
      [
        'Dvādaśa Kālī (द्वादश काली · The Twelve Kālīs)',
        'The twelvefold sequence of Kālī manifestations',
        'Evolved from the earlier bhānavīkrama ("sequence of the Sun-Goddess") in Kula/Kaula texts into the nondual doctrine of kālagrāsa ("time-consumption").',
        'Devīpañcaśataka, Jayadrathayāmala, Tantrāloka; Aleksandra Wenta (Journal of Indian Philosophy, 2021).'
      ],
      [
        'Kaula / Kula (कौल / कुल)',
        'Relating to kula (spiritual family, embodied totality, śakti-network)',
        'Esoteric initiatory currents emphasizing lineage transmission, yoginī/mātṛkā circles, and embodied realization of consciousness.',
        'Early Kula/Kaula scriptures and Kashmirian nondual Śaiva-Śākta exegesis.'
      ]
    ],
    rowsHi: [
      [
        'कालीगण (Kālīgaṇa)',
        'काली के रूपों का समूह, वर्ग, परिचारिका-गण या शृंखला (काली + गण)',
        'काली की अभिव्यक्तियों या योगिनी-परिचारिकाओं के समूह हेतु व्याकरणसम्मत सामासिक पद; किसी स्वतंत्र तांत्रिक संप्रदाय का मानक अकादमिक नाम नहीं।',
        'देवी-समूहों/गणों के वर्णन में प्रयुक्त; इसे बिना पाण्डुलिपि-प्रमाण के कालीकुल का पर्याय नहीं माना जाना चाहिए।'
      ],
      [
        'कालीकुल (Kālīkula)',
        'काली का परिवार, वंश या परम्परा (काली + कुल)',
        'शाक्त तन्त्र की प्रमुख महाधारा जिसमें बंगाल/पूर्वी भारत की परम्पराएँ और कश्मीर की मध्यकालीन क्रम धारा समाहित हैं।',
        'कालीकुलक्रमसद्भाव, जयद्रथयामल, देवीपञ्चशतक, तन्त्रालोक।'
      ],
      [
        'कालीक्रम / महानय (Kālīkrama / Mahānaya)',
        'काली का अनुक्रम / महान् पथ',
        'मध्यकालीन कश्मीर की अद्वैत शाक्त-शैव दार्शनिक प्रणाली जो चेतना के क्रमिक उन्मेष और लय पर केंद्रित है।',
        'अभिनवगुप्त कृत तन्त्रालोक, क्षेमराज के भाष्य एवं क्रम-साहित्य।'
      ],
      [
        'द्वादश काली (Dvādaśa Kālī · बारह कालियाँ)',
        'काली-स्वरूपों का बारह-स्तरीय अनुक्रम',
        'प्रारंभिक कुल/कौल ग्रन्थों के "भानवीक्रम" (सूर्य-देवी के अनुक्रम) से विकसित होकर परवर्ती दर्शन में "कालग्रास" (काल के भक्षण/समावेशन) के सिद्धांत में रूपांतरित।',
        'देवीपञ्चशतक, जयद्रथयामल, तन्त्रालोक; अलेक्ज़ांद्रा वेंटा (२०२१)।'
      ],
      [
        'कौल / कुल (Kaula / Kula)',
        '"कुल" (आध्यात्मिक परिवार, समग्र शक्ति-चक्र) से संबद्ध',
        'वंश-परम्परा, दीक्षा, योगिनी/मातृका चक्र और देहस्थ चेतना के साक्षात्कार पर बल देने वाली गूढ़ तांत्रिक धाराएँ।',
        'प्रारंभिक कुल/कौल आगम एवं कश्मीरी अद्वैत शैव-शाक्त भाष्य।'
      ]
    ]
  }
];

const SRIKULA_PART2_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-srikula-sricakra-components',
    articleSlug: 'srikula-archive-tradition',
    titleEn: 'Part II · The Śrīcakra (Śrīyantra): Principal Geometric Components & Theological System',
    titleHi: 'भाग II · श्रीचक्र (श्रीयन्त्र): प्रमुख ज्यामितीय घटक एवं धर्मशास्त्रीय व्यवस्था',
    captionEn:
      'In Śrīvidyā, the Goddess is worshipped through interconnected forms including her anthropomorphic image, her mantra (Pañcadaśī / Ṣoḍaśī), and the Śrīcakra across nine enclosures (āvaraṇas).',
    captionHi:
      'श्रीविद्या में देवी की उपासना उनके साकार विग्रह, मन्त्र (पञ्चदशी / षोडशी) और श्रीचक्र के नौ आवरणों की एकीकृत धर्मशास्त्रीय प्रणाली के माध्यम से होती है।',
    headersEn: ['Principal Component', 'Geometric Structure & Theological / Ritual Significance'],
    headersHi: ['प्रमुख घटक', 'ज्यामितीय संरचना एवं धर्मशास्त्रीय / आनुष्ठानिक महत्त्व'],
    rowsEn: [
      [
        'The Bindu (केन्द्रीय बिन्दु)',
        'The central point is associated with unity, the concentrated presence of the Goddess, and the source from which multiplicity emerges. Its exact interpretation depends on the relevant doctrinal and ritual framework.'
      ],
      [
        'The Interlocking Triangles (९ अंतर्ग्रथित त्रिकोण)',
        'The central triangular structure is traditionally composed of nine principal interlocking triangles, conventionally counted as five downward-pointing and four upward-pointing triangles. Together they generate the complex network of smaller triangles associated with the diagram.'
      ],
      [
        'Lotus Enclosures & Outer Boundary (पद्म-दल एवं भूपुर)',
        'The surrounding lotus circles (8-petal and 16-petal) and square enclosure (bhūpura) form part of the Śrīcakra’s layered structure, associated with differentiated powers, protective boundaries, and the organized relationship between the central deity and the surrounding cosmos.'
      ],
      [
        'The Nine Enclosures (नव-आवरण · Nine Āvaraṇas)',
        'The Śrīcakra is commonly described through nine enclosures, called āvaraṇas. Śrīvidyā ritual and textual traditions associate these enclosures with groups of deities, powers, and stages of contemplative or ritual engagement. Details should be taken from specific authoritative ritual manuals rather than simplified diagrams.'
      ]
    ],
    rowsHi: [
      [
        'केन्द्रीय बिन्दु (The Bindu)',
        'केंद्रीय बिन्दु पूर्ण एकत्व, भगवती की घनीभूत उपस्थिति और उस मूल स्रोत से संबद्ध है जहाँ से बहुलता (सृष्टि) का उन्मेष होता है।'
      ],
      [
        'अंतर्ग्रथित त्रिकोण (The Interlocking Triangles)',
        'केंद्रीय त्रिकोणीय संरचना पारंपरिक रूप से नौ मुख्य अंतर्ग्रथित त्रिकोणों (५ अधोमुखी शक्ति त्रिकोण और ४ ऊर्ध्वमुखी शिव त्रिकोण) से निर्मित है, जो मिलकर छोटे त्रिकोणों के जटिल जाल की रचना करते हैं।'
      ],
      [
        'कमल-दल एवं बाहरी भूपुर (Lotus Enclosures & Outer Boundary)',
        'चारों ओर के कमल-वृत्त (अष्टदल एवं षोडशदल) और वर्गाकार भूपुर श्रीचक्र की स्तरीय संरचना के अंग हैं, जो विभेदित शक्तियों, रक्षक सीमाओं और केंद्रीय देवता व ब्रह्माण्ड के सुव्यवस्थित संबंध को दर्शाते हैं।'
      ],
      [
        'नौ आवरण (The Nine Enclosures / Āvaraṇas)',
        'श्रीचक्र का वर्णन नौ आवरणों के माध्यम से किया जाता है। श्रीविद्या के ग्रन्थ इन आवरणों को विशिष्ट देवता-समूहों, शक्तियों और ध्यान/पूजा के क्रमिक सोपानों से जोड़ते हैं।'
      ]
    ]
  }
];

const KALIKULA_SRIKULA_PART3_4_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-part3-comparing-kalikula-srikula',
    articleSlug: 'kalikula-srikula-streams',
    titleEn: 'Part III · Comparing Kālīkula and Śrīkula Across Eight Core Dimensions',
    titleHi: 'भाग III · आठ प्रमुख आयामों में कालीकुल और श्रीकुल का तुलनात्मक अध्ययन',
    captionEn:
      'Overview comparing the two great streams of Śākta Tantra while recognizing that both traditions are internally diverse and historically interconnected, not absolute opposites.',
    captionHi:
      'शाक्त तन्त्र की दोनों महाधाराओं का तुलनात्मक अवलोकन—यह ध्यान रखते हुए कि दोनों परम्पराएँ आंतरिक रूप से विविध और परस्पर संबद्ध हैं, न कि पूर्णतः विरोधी।',
    headersEn: ['Dimension', 'Kālīkula (कालीकुल)', 'Śrīkula (Śrīvidyā / श्रीकुल)'],
    headersHi: ['आयाम / आधार', 'कालीकुल (Kālīkula)', 'श्रीकुल (Śrīkula)'],
    rowsEn: [
      ['Central Goddess', 'Kālī and related forms', 'Tripurasundarī, Lalitā, and related forms'],
      ['Name', 'Family or lineage of Kālī', 'Family or lineage of Śrī'],
      ['Prominent scholarly focus', 'Kālī-centered Śākta traditions, including Krama', 'Śrīvidyā and the Tripurasundarī tradition'],
      ['Philosophical themes', 'Time, transformation, dissolution, consciousness', 'Manifestation, auspiciousness, sovereignty, consciousness'],
      ['Important symbols', 'Kālī’s iconography, particular yantras and ritual symbols', 'Śrīcakra, mantra, and the Goddess’s iconographic form'],
      ['Major textual areas', 'Kālī-centered Tantras, Krama texts, related commentaries', 'Vāmakeśvarīmata, Yoginīhṛdaya, Nityāṣoḍaśikārṇava'],
      ['Historical geography', 'Diverse traditions, with important eastern Indian and Kashmirian contexts', 'Strong historical development in South India and connections with Kashmir'],
      ['Practice', 'Varies by lineage; may include devotional, ritual, and contemplative approaches', 'Varies by lineage; may include mantra, yantra, external worship, and meditation']
    ],
    rowsHi: [
      ['केंद्रीय देवी (Central Goddess)', 'काली और उनसे संबंधित स्वरूप', 'त्रिपुरसुन्दरी, ललिता, राजराजेश्वरी और संबंधित स्वरूप'],
      ['नाम का अर्थ (Name)', 'काली का कुल, परिवार या परम्परा', 'श्री (पराशक्ति) का कुल, परिवार या परम्परा'],
      ['प्रमुख अकादमिक केंद्र (Scholarly focus)', 'काली-केंद्रित शाक्त परम्पराएँ, विशेषतः कश्मीर क्रम दर्शन', 'श्रीविद्या और त्रिपुरसुन्दरी उपासना परम्परा'],
      ['दार्शनिक विषय (Philosophical themes)', 'काल, रूपांतरण, लय (संहार/विलय) एवं परम चेतना', 'अभिव्यक्ति (सृष्टि-विस्तार), मांगल्य, संप्रभुता एवं परम चेतना'],
      ['प्रमुख प्रतीक (Important symbols)', 'काली का प्रतिमाशास्त्र, विशिष्ट यन्त्र एवं आनुष्ठानिक प्रतीक', 'श्रीचक्र (श्रीयन्त्र), मन्त्र (पञ्चदशी/षोडशी) एवं देवी का विग्रह'],
      ['प्रमुख ग्रंथीय क्षेत्र (Major textual areas)', 'कालीकुलक्रमसद्भाव, जयद्रथयामल, देवीपञ्चशतक, तन्त्रालोक एवं क्रम भाष्य', 'वामकेश्वरीमत, योगिनीहृदय, नित्याषोडशिकार्णव, परशुराम कल्पसूत्र, ललिता सहस्रनाम'],
      ['ऐतिहासिक भूगोल (Historical geography)', 'पूर्वी भारत (बंगाल, कामरूप, मिथिला) एवं कश्मीर में विशेष ऐतिहासिक विकास', 'दक्षिण भारत में सुदृढ़ ऐतिहासिक विकास तथा कश्मीर के साथ दार्शनिक आदान-प्रदान'],
      ['साधना एवं अभ्यास (Practice)', 'परम्परा के अनुसार विविध; भक्ति, आनुष्ठानिक पूजा एवं अद्वैत चिंतन', 'परम्परा के अनुसार विविध; मन्त्र-साधना, श्रीचक्र अर्चन, बाह्य पूजा एवं अंतर्मुखी ध्यान']
    ]
  },
  {
    id: 'table-part4-selected-bibliography-and-structure',
    articleSlug: 'kalikula-srikula-streams',
    titleEn: 'Part IV · Selected Peer-Reviewed Bibliography & Eightfold Archival Architecture',
    titleHi: 'भाग IV · चयनित अकादमिक संदर्भ-सूची एवं अष्ट-स्तरीय अभिलेखागार संरचना',
    captionEn:
      'Distinguishes primary textual evidence from peer-reviewed scholarly interpretation and contemporary practitioner explanations.',
    captionHi:
      'प्राथमिक ग्रंथीय साक्ष्य, समीक्षित अकादमिक व्याख्या और समकालीन साधक-विवरणों के बीच स्पष्ट अंतर।',
    headersEn: ['Ref #', 'Scholar & Publication Title', 'Publication Venue & Year', 'Archival Scope & Research Relevance'],
    headersHi: ['क्र.', 'विद्वान् एवं शोध-ग्रन्थ / लेख शीर्षक', 'प्रकाशन माध्यम एवं वर्ष', 'शोध विषय एवं अभिलेखीय महत्त्व'],
    rowsEn: [
      [
        '01',
        'Aleksandra Wenta — “From the Sequence of the Sun-Goddess to Time-Consumption”',
        'Journal of Indian Philosophy (2021)',
        'A peer-reviewed study of the twelve Kālīs, the Krama tradition, and the development of their philosophical interpretation from earlier Kula/Kaula contexts.'
      ],
      [
        '02',
        'Douglas Renfrew Brooks — Auspicious Wisdom: The Texts and Traditions of Śrīvidyā Śākta Tantrism in South India',
        'State University of New York (SUNY) Press (1992)',
        'A major scholarly study of Śrīvidyā texts, ritual traditions, theology, and historical development in South India.'
      ],
      [
        '03',
        'Anna A. Golovkova — “From Worldly Powers to Jīvanmukti”',
        'The Journal of Hindu Studies (2019)',
        'Examines changing understandings of ritual, liberation during one’s lifetime (jīvanmukti), and spiritual attainment in early Tripurasundarī traditions.'
      ],
      [
        '04',
        'Maciej Karasiński — “Śrī Vidyā”',
        'Oxford Bibliographies in Hinduism (2025)',
        'A scholarly overview of Śrīvidyā’s history, terminology, texts, and changing ritual contexts.'
      ]
    ],
    rowsHi: [
      [
        '०१',
        'अलेक्ज़ांद्रा वेंटा (Aleksandra Wenta) — “From the Sequence of the Sun-Goddess to Time-Consumption”',
        'Journal of Indian Philosophy (२०२१)',
        'द्वादश काली, कश्मीर क्रम परम्परा तथा प्रारंभिक कुल/कौल संदर्भों से परवर्ती दार्शनिक व्याख्याओं के विकास का समीक्षित अध्ययन।'
      ],
      [
        '०२',
        'डगलस रेनफ्रू ब्रुक्स (Douglas Renfrew Brooks) — Auspicious Wisdom: The Texts and Traditions of Śrīvidyā Śākta Tantrism in South India',
        'State University of New York Press (१९९२)',
        'दक्षिण भारत में श्रीविद्या ग्रन्थों, अनुष्ठान परम्पराओं, धर्मशास्त्र और ऐतिहासिक विकास का प्रमुख अकादमिक अध्ययन।'
      ],
      [
        '०३',
        'अन्ना ए. गोलोवकोवा (Anna A. Golovkova) — “From Worldly Powers to Jīvanmukti”',
        'The Journal of Hindu Studies (२०१९)',
        'प्रारंभिक त्रिपुरसुन्दरी परम्पराओं में अनुष्ठान, लौकिक सिद्धियों से जीवनमुक्ति की ओर विकसित होती दार्शनिक दृष्टि का अध्ययन।'
      ],
      [
        '०४',
        'माचिये करासिंस्की (Maciej Karasiński) — “Śrī Vidyā”',
        'Oxford Bibliographies in Hinduism (२०२५)',
        'श्रीविद्या के इतिहास, पारिभाषिक शब्दावली, प्रमुख ग्रन्थों और बदलते आनुष्ठानिक संदर्भों का प्रामाणिक अकादमिक सर्वेक्षण।'
      ]
    ]
  }
];

ARTICLE_COMPARISON_TABLES['kalikula-srikula-streams'] = [
  ...KALIKULA_SRIKULA_PART3_4_TABLES
];

ARTICLE_COMPARISON_TABLES['kalikula-archive-tradition'] = [
  ...KALIKULA_PART1_TABLES
];

ARTICLE_COMPARISON_TABLES['srikula-archive-tradition'] = [
  ...SRIKULA_PART2_TABLES
];

// ============================================================================
// STRUCTURED TABLES FOR PORTAL VII: THE 14 LOKAS IN HINDU COSMOLOGY
// ============================================================================
const FOURTEEN_LOKAS_HIERARCHY_TABLES: ResearchComparisonTable[] = [
  {
    id: 'table-14-lokas-complete-hierarchy',
    articleSlug: 'satya-loka',
    titleEn: 'The 14 Lokas in Hindu Cosmology · Complete Hierarchy at a Glance',
    titleHi: 'हिन्दू ब्रह्माण्ड विज्ञान में १४ लोक · संपूर्ण पदानुक्रम एक दृष्टि में',
    captionEn:
      'Earth (Bhūloka, Realm 7) separates the upper and lower sequences: realms 1–6 sit above Bhūloka as the celestial and meditative Urdhva Lokas, realm 7 is the human world itself, and realms 8–14 (Adho Lokas / Pātāla) extend downward beneath it.',
    captionHi:
      'पृथ्वी (भूलोक, ७वाँ लोक) ऊर्ध्व और अधो लोकों की शृंखला को विभाजित करती है: लोक १–६ भूलोक के ऊपर स्थित हैं, ७वाँ लोक स्वयं मानव जगत है, और लोक ८–१४ इसके नीचे विस्तृत सप्त-तल हैं।',
    headersEn: ['#', 'Loka Name', 'Division', 'Ruler / Sovereign Presence', 'Defining Cosmological Character'],
    headersHi: ['क्र.', 'लोक का नाम', 'विभाग', 'अधिपति / शासक उपस्थिति', 'प्रमुख ब्रह्माण्डीय विशेषता'],
    rowsEn: [
      ['01', 'Satya Loka (Brahma Loka)', 'Upper World (Urdhva Loka)', 'Brahmā', 'Highest realm of truth, pure knowledge, and liberation at cosmic dissolution (krama-mukti)'],
      ['02', 'Tapa Loka', 'Upper World (Urdhva Loka)', 'Ascetic Siddhas & Kumāras', 'Realm of supreme austerity, spiritual fire, and deathless meditative absorption'],
      ['03', 'Jana Loka', 'Upper World (Urdhva Loka)', 'Sanaka, Sanandana, Sanātana, Sanatkumāra', 'Abode of pure wisdom-born beings and mind-born sons of Brahmā untouched by passion'],
      ['04', 'Mahar Loka', 'Upper World (Urdhva Loka)', 'Bhṛgu & Kalpa-surviving Ṛṣis', 'Transitional plane of great sages that endures nightly cosmic dissolutions (naimittika pralaya)'],
      ['05', 'Svar Loka (Svarga)', 'Upper World (Urdhva Loka)', 'Indra & the Devas', 'Celestial paradise of righteous enjoyment, Gandharvas, and Apsarās prior to rebirth'],
      ['06', 'Bhuvar Loka', 'Upper World (Urdhva Loka)', 'Sūrya, Grahas, Pitṛs & Siddhas', 'Atmospheric and intermediary astral space between Earth and Indra’s heaven'],
      ['07', 'Bhur Loka (Bhūloka)', 'Middle Terrestrial Pivot', 'Prithvī & Embodied Beings', 'Physical Earth realm of human birth, sensory action (karma-bhūmi), and moral choice'],
      ['08', 'Atala Loka', 'Lower World (Adho Loka / Tala)', 'Bala (son of Maya Dānava)', 'First subterranean realm of magical illusions and hypnotic sensual luxury'],
      ['09', 'Vitala Loka', 'Lower World (Adho Loka / Tala)', 'Hāṭakeśvara Śiva & Bhavānī', 'Second subterranean plane famous for rivers of liquid Hāṭaka gold'],
      ['10', 'Sutala Loka', 'Lower World (Adho Loka / Tala)', 'Mahābali (guarded by Viṣṇu / Vāmana)', 'Blessed subterranean kingdom of righteous King Bali, surpassing Indra’s splendor'],
      ['11', 'Talatala Loka', 'Lower World (Adho Loka / Tala)', 'Maya Dānava (blessed by Śiva)', 'Architectural capital of the master illusionist and builder of the three cities'],
      ['12', 'Mahatala Loka', 'Lower World (Adho Loka / Tala)', 'Kadrū’s Multi-Hooded Nāgas', 'Dominion of fierce many-hooded serpents (Kuhaka, Takṣaka, Suṣeṇa)'],
      ['13', 'Rasatala Loka', 'Lower World (Adho Loka / Tala)', 'Dānavas, Daityas & Paṇis', 'Subterranean fortress of titanic enemies of the Devas living in mountain recesses'],
      ['14', 'Patala Loka (Nāga-Loka)', 'Lowest World (Adho Loka / Tala)', 'Vāsuki & Śeṣa (Ananta)', 'Deepest jewel-lit subterranean realm of the Nāga sovereigns; below its base rests Naraka']
    ],
    rowsHi: [
      ['०१', 'सत्यलोक (ब्रह्मलोक)', 'ऊर्ध्व लोक (Upper World)', 'ब्रह्मा', 'सत्य, विशुद्ध ज्ञान और महाप्रलय के समय क्रम-मुक्ति का सर्वोच्च लोक'],
      ['०२', 'तपोलोक', 'ऊर्ध्व लोक (Upper World)', 'तपस्वी सिद्ध एवं कुमार', 'परम तपस्या, आध्यात्मिक तेज और अटूट ध्यान-समाधि का लोक'],
      ['०३', 'जनलोक', 'ऊर्ध्व लोक (Upper World)', 'सनक, सनन्दन, सनातन, सनत्कुमार', 'राग-द्वेष से रहित ब्रह्मा के मानस-पुत्रों और विशुद्ध ज्ञानियों का निवास'],
      ['०४', 'महर्लोक', 'ऊर्ध्व लोक (Upper World)', 'महर्षि भृगु एवं कल्पजीवी ऋषि', 'नैमित्तिक प्रलय में भी सुरक्षित रहने वाला महान ऋषियों का संधि-लोक'],
      ['०५', 'स्वर्लोक (स्वर्ग)', 'ऊर्ध्व लोक (Upper World)', 'इन्द्र एवं देवतागण', 'पुण्यकर्मों के फलभोग, गन्धर्वों और अप्सराओं का दिव्य लोक (जहाँ से पुण्य क्षीण होने पर पुनर्जन्म होता है)'],
      ['०६', 'भुवर्लोक (अन्तरिक्ष)', 'ऊर्ध्व लोक (Upper World)', 'सूर्य, ग्रह, पितर एवं सिद्ध', 'पृथ्वी और स्वर्ग के मध्य स्थित अंतरिक्ष एवं सूक्ष्म प्राण-लोक'],
      ['०७', 'भूर्लोक (भूलोक / पृथ्वी)', 'मध्य पार्थिव केंद्र', 'पृथ्वी एवं देहधारी जीव', 'मनुष्यों, प्राणियों और प्रकृति का भौतिक संसार जहाँ कर्म और धर्म का संपादन होता है'],
      ['०८', 'अतल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'बल (मय दानव का पुत्र)', 'मायावी शक्तियों और ऐन्द्रिय विलास से युक्त प्रथम अधोलोक'],
      ['०९', 'वितल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'हाटकेश्वर शिव एवं भवानी', 'हाटक स्वर्ण की नदियों के लिए प्रसिद्ध द्वितीय अधोलोक'],
      ['१०', 'सुतल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'राजा महाबलि (वामन/विष्णु द्वारा रक्षित)', 'धर्मनिष्ठ राजा बलि का पुण्यमय राज्य जहाँ स्वयं भगवान विष्णु द्वारपाल हैं'],
      ['११', 'तलातल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'मय दानव (शिव द्वारा रक्षित)', 'असुरों के महान वास्तुकार और मायावी मय दानव की राजधानी'],
      ['१२', 'महातल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'कद्रू के बहु-फणधारी नाग', 'कुहक, तक्षक और सुषेण आदि क्रोधी बहु-फणधारी सर्पों का लोक'],
      ['१३', 'रसातल लोक', 'अधो लोक (पाताल / सप्त-तल)', 'दैत्य, दानव एवं पणि', 'देवताओं के प्रतिद्वंद्वी दैत्यों और दानवों का दुर्गम निवास'],
      ['१४', 'पाताल लोक (नागलोक)', 'अधो लोक (सप्तम तल)', 'वासुकि एवं अनन्त शेष', 'मणि-जटित फणों के प्रकाश से आलोकित नागराज वासुकि का सबसे निचला तल']
    ]
  },
  {
    id: 'table-14-lokas-three-important-distinctions',
    articleSlug: 'satya-loka',
    titleEn: 'Three Important Cosmological & Philosophical Distinctions in the 14-Loka System',
    titleHi: '१४ लोकों की व्यवस्था में तीन अत्यंत महत्त्वपूर्ण शास्त्रीय एवं दार्शनिक भेद',
    captionEn:
      'Foundational interpretive safeguards from the Purāṇic, Upaniṣadic, and Vedāntic traditions regarding Svarga, Pātāla vs. Naraka, and multi-layered cosmology.',
    captionHi:
      'स्वर्ग बनाम मोक्ष, पाताल बनाम नरक तथा पौराणिक व उपनिषद्-वेदान्तिक दृष्टियों के संबंध में तीन मूलभूत शास्त्रीय सिद्धांत।',
    headersEn: ['Distinction', 'Common Misconception', 'Scriptural & Philosophical Clarification'],
    headersHi: ['शास्त्रीय भेद', 'सामान्य भ्रांति', 'पौराणिक एवं दार्शनिक स्पष्टीकरण'],
    rowsEn: [
      [
        '1. Svarga is not necessarily the final spiritual destination',
        'Equating Svar Loka (Indra’s heaven) with eternal liberation.',
        'In many Hindu traditions, Svarga is a temporary reward for good deeds (puṇya). Once that merit is exhausted, the soul returns to rebirth (kṣīṇe puṇye martyalokaṁ viśanti). Final liberation (mokṣa) is placed beyond the cycle of worlds or associated with realms like Vaikuṇṭha, Kailāsa, Goloka, or Satya Loka.'
      ],
      [
        '2. Pātāla is not synonymous with Naraka',
        'Treating the seven subterranean Talas as hells of punishment.',
        'Naraka is the realm of moral punishment and post-mortem purification, whereas the seven lower Talas (Atala through Pātāla, often called bila-svarga) are richly built subterranean worlds filled with palaces, jewels, serpents, demons, and supernatural powers—albeit steeped in sensory attachment and illusion.'
      ],
      [
        '3. Descriptions differ between scriptures',
        'Assuming all Hindu scriptures describe the 14 Lokas only as physical geography.',
        'The Purāṇas (such as the Bhāgavata, Viṣṇu, and Padma Purāṇa) describe these realms with vivid cosmological detail, rulers, and inhabitants, while Upaniṣadic, Vedāntic, and Tantric traditions also interpret them as levels of consciousness, prāṇic strata, and subtle states of existence.'
      ]
    ],
    rowsHi: [
      [
        '१. स्वर्ग अंतिम आध्यात्मिक गंतव्य (मोक्ष) नहीं है',
        'इन्द्र के स्वर्ग (स्वर्लोक) को ही शाश्वत मुक्ति मान लेना।',
        'अनेक हिन्दू परम्पराओं में स्वर्ग पुण्यकर्मों का अस्थायी फल मात्र है। पुण्य क्षीण होने पर जीव पुनः जन्म-मरण के चक्र में लौटता है ("क्षीणे पुण्ये मर्त्यलोकं विशन्ति")। अंतिम मुक्ति (मोक्ष) लोक-चक्र से परे है अथवा वैकुण्ठ, कैलास या सत्यलोक की क्रम-मुक्ति से संबद्ध है।'
      ],
      [
        '२. पाताल (सप्त-तल) और नरक पर्यायवाची नहीं हैं',
        'नीचे के सातों तलों को दण्ड देने वाला नरक समझ लेना।',
        'नरक अधर्म के दण्ड और शुद्धि का क्षेत्र है (जो पाताल के भी नीचे गर्भोदक सागर के ऊपर स्थित है), जबकि सात अधोलोक (अतल से पाताल तक, जिन्हें "बिल-स्वर्ग" भी कहा जाता है) भव्य महलों, मणियों, नागों, दानवों और मायावी ऐश्वर्य से भरे समृद्ध भूमिगत लोक हैं।'
      ],
      [
        '३. विभिन्न शास्त्रों में विवरण की दृष्टि भिन्न है',
        'सभी शास्त्रों के लोक-वर्णन को केवल बाह्य भौतिक भूगोल मान लेना।',
        'पुराण (भागवत, विष्णु, पद्म पुराण आदि) इन लोकों का वर्णन सजीव शासकों, नगरों और निवासियों के साथ करते हैं, जबकि उपनिषद्, वेदान्त और तन्त्र इन्हें चेतना के स्तरों, सूक्ष्म शरीर के चक्रों और अस्तित्व की आध्यात्मिक अवस्थाओं के रूप में भी व्याख्यायित करते हैं।'
      ]
    ]
  }
];

[
  'satya-loka',
  'tapa-loka',
  'jana-loka',
  'mahar-loka',
  'svar-loka',
  'bhuvar-loka',
  'bhur-loka',
  'atala-loka',
  'vitala-loka',
  'sutala-loka',
  'talatala-loka',
  'mahatala-loka',
  'rasatala-loka',
  'patala-loka'
].forEach((lokaSlug) => {
  ARTICLE_COMPARISON_TABLES[lokaSlug] = FOURTEEN_LOKAS_HIERARCHY_TABLES;
});



