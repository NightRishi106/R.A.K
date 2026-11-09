const fs = require('fs');
let code = fs.readFileSync('src/data/sacredSealsDeepData.ts', 'utf8');

// 1. Add import if not present
if (!code.includes('BAVAN_BHAIRAVAS_LIST')) {
  code = "import { BAVAN_BHAIRAVAS_LIST, THREE_BHAIRAVA_SYSTEMS_COMPARISON } from './bavanBhairava52Data';\n" + code;
}

// 2. Locate start of 'bavan-bhairava-chhappan-kalua-concordance': [
const key = "'bavan-bhairava-chhappan-kalua-concordance': [";
const startIdx = code.indexOf(key);
if (startIdx === -1) {
  console.error('Key not found');
  process.exit(1);
}

// 3. Locate id: 'table-52-bhairav-64-yogini-56-kalua-triad'
const triadIdx = code.indexOf("id: 'table-52-bhairav-64-yogini-56-kalua-triad'", startIdx);
if (triadIdx === -1) {
  console.error('triad table not found');
  process.exit(1);
}
const triadStart = code.lastIndexOf('{', triadIdx);

const replacement = `    {
      id: 'table-three-bhairava-systems-comparison',
      articleSlug: 'bavan-bhairava-chhappan-kalua-concordance',
      titleEn: 'Three Canonical Systems: Aṣṭa Bhairava (8) · Catuḥṣaṣṭi Bhairava (64) · 52 Śaktipīṭha Bhairavas',
      titleHi: 'तीन शास्त्रीय प्रणालियों में भेद: अष्ट भैरव (८) · चतुःषष्टि भैरव (६४) · ५२ शक्तिपीठ भैरव',
      captionEn: 'Do Not Confuse These Three Systems: comparative breakdown of count, scriptural authority, role, and iconography.',
      captionHi: 'इन तीन प्रणालियों को परस्पर मिश्रित न करें: शास्त्रीय संख्या, प्रामाणिक ग्रन्थ, आनुष्ठानिक कार्य एवं प्रतिमाशास्त्र का तुलनात्मक विश्लेषण।',
      headersEn: ['System & Count', 'Canonical Role & Mandalic Position', 'Member Forms & Classification', 'Primary Sanskrit Corpus & Iconography'],
      headersHi: ['प्रणाली एवं संख्या', 'शास्त्रीय भूमिका एवं मण्डल स्थिति', 'स्वरूप एवं वर्गीकरण', 'मूल आगमिक ग्रन्थ एवं प्रतिमाशास्त्र'],
      rowsEn: THREE_BHAIRAVA_SYSTEMS_COMPARISON.map(s => [
        s.systemNameEn + ' [Count: ' + s.count + ']',
        s.canonicalRoleEn,
        s.membersEn,
        s.primaryTextsEn + ' — ' + s.iconographyEn
      ]),
      rowsHi: THREE_BHAIRAVA_SYSTEMS_COMPARISON.map(s => [
        s.systemNameHi || s.systemNameEn,
        s.canonicalRoleHi,
        s.membersHi,
        s.primaryTextsHi + ' — ' + s.iconographyHi
      ])
    },
    {
      id: 'table-52-bhairava-complete-roster',
      articleSlug: 'bavan-bhairava-chhappan-kalua-concordance',
      titleEn: 'Complete Canonical Roster: 52 Bhairavas & Devotional Mantras (01. Bhīmalocana to 52. Sadāśiva)',
      titleHi: 'संपूर्ण शास्त्रीय नामावली: ५२ भैरव एवं भक्ति नाम-मन्त्र (०१. भीमलोचन से ५२. सदाशिव)',
      captionEn:
        '52 BHAIRAVAS – THE GUARDIANS OF THE 52 SHAKTI PEETHAS (01–52) with Devanagari & IAST names, devotional salutation mantras, associated Shakti Peethas, sacred limbs, and locations.',
      captionHi:
        '५२ शक्तिपीठ रक्षक भैरव नामावली (०१–५२): देवनागरी एवं IAST नाम, भक्ति-प्रणाम मन्त्र, संबद्ध शक्तिपीठ, सती के पावन अंग एवं तीर्थ अवस्थिति।',
      headersEn: ['#', 'Bhairava Name & Devotional Mantra', 'Associated Goddess & Sacred Relic', 'Shakti Peetha & Geographical Seat'],
      headersHi: ['क्र.', 'भैरव नाम एवं भक्ति नाम-मन्त्र', 'संबद्ध देवी एवं सती का अंग', 'शक्तिपीठ एवं तीर्थ अवस्थिति'],
      rowsEn: BAVAN_BHAIRAVAS_LIST.map(b => [
        String(b.index).padStart(2, '0'),
        b.nameHi + ' · ' + b.nameEn + '\\n' + b.devotionalMantra + ' (' + b.devotionalMantraPhonetic + ')',
        b.goddessEn + ' · ' + b.bodyPartEn,
        b.peethaEn + ' (' + b.locationEn + ')'
      ]),
      rowsHi: BAVAN_BHAIRAVAS_LIST.map(b => [
        String(b.index).padStart(2, '0'),
        b.nameHi + ' · ' + b.nameEn + '\\n' + b.devotionalMantra,
        b.goddessHi + ' · ' + b.bodyPartHi,
        b.peethaHi + ' (' + b.locationHi + ')'
      ])
    },
`;

code = code.slice(0, startIdx + key.length) + '\n' + replacement + code.slice(triadStart);
fs.writeFileSync('src/data/sacredSealsDeepData.ts', code, 'utf8');
console.log('Successfully updated sacredSealsDeepData.ts');
