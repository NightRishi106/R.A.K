import React, { useState } from 'react';
import { Sparkles, Compass, Shield, Clock, Flame, Layers, Orbit } from 'lucide-react';
import { BAVAN_BHAIRAVA_VIRAS_52, BAVAN_BHAIRAVAS_LIST } from '../data/bavanBhairava52Data';
import {
  TithiNityaDeviMoonStudio,
  Yakshini36MandalaStudio,
  VetalaTriGunaStudio
} from './TithiYakshiniVetalaStudios';
import VishnuDashavataraExperience from './VishnuDashavataraExperience';
import { VISHNU_DASHAVATARA_ENTRIES } from '../data/vishnuDashavataraData';

interface StudioProps {
  articleSlug: string;
  lang?: 'en' | 'hi';
}

// ============================================================================
// 1. SEAL 01: JAYA & VIJAYA — VAIKUṆṬHA SAPTADVĀRA & 3-YUGA AVATĀRA STUDIO
// ============================================================================
const JAYA_VIJAYA_BIRTHS = [
  {
    id: 'gate-7',
    stageEn: 'Vaikuṇṭha 7th Threshold (Saptadvāra)',
    stageHi: 'वैकुण्ठ सप्तम द्वार (सप्तद्वार)',
    yugaEn: 'Transcendental Paravyoman (Beyond Time)',
    yugaHi: 'कालातीत परव्योम (वैकुण्ठ लोक)',
    pairEn: 'Jaya & Vijaya (Eternal Dvārapālas)',
    pairHi: 'जय और विजय (शाश्वत वैकुण्ठ द्वारपाल)',
    avatarEn: 'Śrīமन् Nārāyaṇa (Viṣṇu)',
    avatarHi: 'श्रीमन्नारायण (भगवान् विष्णु)',
    bhavaEn: 'Dāsya & Pārṣada-Bhāva (Eternal Vigilance at the 7th Gate)',
    bhavaHi: 'दास्य एवं पार्षद-भाव (सप्तम द्वार के सजग प्रहरी)',
    descEn:
      'Stationed at the innermost seventh threshold of Vaikuṇṭha holding śaṅkha, cakra, gadā, and vetra-daṇḍa. When the Four Kumāras (Sanaka, Sanandana, Sanātana, Sanatkumāra) were halted at the seventh gate, Jaya and Vijaya chose three concentrated births of Sambhrama-bhakti (adversarial absorption) over seven births of slow separation.',
    descHi:
      'वैकुण्ठ के सातवें आंतरिक द्वार पर शंख, चक्र, गदा और वेत्र-दण्ड धारण किए जय-विजय स्थित हैं। सनकादि चार कुमारों के शाप के पश्चात् उन्होंने भगवान् से दीर्घ वियोग वाले सात शांत जन्मों के स्थान पर तीव्र संभ्रम-भक्ति (वैर-भाव से निरंतर स्मरण) के तीन जन्मों का वरण किया।',
    color: '#38BDF8'
  },
  {
    id: 'birth-1',
    stageEn: 'First Birth · Satya Yuga',
    stageHi: 'प्रथम जन्म · सत्ययुग',
    yugaEn: 'Satya Yuga (Kṛta Yuga)',
    yugaHi: 'सत्ययुग (कृतयुग)',
    pairEn: 'Hiraṇyākṣa & Hiraṇyakaśipu (Sons of Diti & Kaśyapa)',
    pairHi: 'हिरण्याक्ष एवं हिरण्यकशिपु (दिति एवं कश्यप के पुत्र)',
    avatarEn: 'Śrī Varāha & Śrī Narasiṃha',
    avatarHi: 'श्री वराह एवं श्री नृसिंह अवतार',
    bhavaEn: 'Cosmic Earth-Rescue & Pillar-Theophany at Twilight',
    bhavaHi: 'रसातल से पृथ्वी-उद्धार एवं संध्याकाल में स्तम्भ-प्राकट्य',
    descEn:
      'Hiraṇyākṣa abducted Bhūdevī into the primordial Garbhodaka ocean and was liberated by Lord Varāha. Hiraṇyakaśipu sought invulnerability across day/night, inside/outside, and weapon/hand, and was liberated on the lap of Lord Narasiṃha at twilight.',
    descHi:
      'हिरण्याक्ष ने पृथ्वी को रसातल में छिपाया और भगवान् वराह द्वारा मुक्त हुआ। हिरण्यकशिपु ने न दिन-रात, न भीतर-बाहर, न अस्त्र-शस्त्र से मरने का वरदान पाया, किंतु भक्त प्रह्लाद की रक्षा हेतु भगवान् नृसिंह ने संध्या समय देहरी पर उसका उद्धार किया।',
    color: '#F59E0B'
  },
  {
    id: 'birth-2',
    stageEn: 'Second Birth · Tretā Yuga',
    stageHi: 'द्वितीय जन्म · त्रेतायुग',
    yugaEn: 'Tretā Yuga',
    yugaHi: 'त्रेतायुग',
    pairEn: 'Rāvaṇa & Kumbhakarṇa (Sons of Viśravā & Kaikasī)',
    pairHi: 'रावण एवं कुम्भकर्ण (विश्रवा एवं कैकसी के पुत्र)',
    avatarEn: 'Śrī Rāmacandra (Maryādā Puruṣottama)',
    avatarHi: 'मर्यादा पुरुषोत्तम श्री रामचन्द्र',
    bhavaEn: 'Dharma-Yuddha in Laṅkā & Liberation by Kodanda Arrows',
    bhavaHi: 'लंका धर्म-युद्ध एवं कोदण्ड बाणों से परम गति',
    descEn:
      'Born as the ten-headed scholar-emperor Rāvaṇa of Laṅkā and the colossal warrior Kumbhakarṇa, the pair confronted Lord Rāmacandra and attained liberation on the battlefield of Laṅkā.',
    descHi:
      'त्रेतायुग में विश्रवा ऋषि के पुत्र दशग्रीव रावण और महाबली कुम्भकर्ण के रूप में जन्म लेकर दोनों ने भगवान् श्रीराम के हाथों युद्धभूमि में वीरगति और मोक्ष प्राप्त किया।',
    color: '#EF4444'
  },
  {
    id: 'birth-3',
    stageEn: 'Third Birth · Dvāpara Yuga',
    stageHi: 'तृतीय जन्म · द्वापरयुग',
    yugaEn: 'Dvāpara Yuga',
    yugaHi: 'द्वापरयुग',
    pairEn: 'Śiśupāla & Dantavakra (Cedi & Karūṣa Kings)',
    pairHi: 'शिशुपाल एवं दन्तवक्र (चेदि एवं करूष नरेश)',
    avatarEn: 'Śrī Kṛṣṇa (Svayaṃ Bhagavān)',
    avatarHi: 'योगेश्वर श्री कृष्ण (सुदर्शन चक्र एवं कौमोदकी गदा)',
    bhavaEn: 'Sāyujya Merger of Effulgent Soul-Spark at Rājasūya Sabhā',
    bhavaHi: 'राजसूय सभा में ज्योति-पुंज का श्रीकृष्ण में सायुज्य-विलय',
    descEn:
      'Consumed day and night by intense fixation (sambhrama-bhakti) on Śrī Kṛṣṇa, Śiśupāla and Dantavakra exhausted the final remnant of the Kumāras’ curse; a visible spark of effulgence rose from their bodies and re-entered Vaikuṇṭha.',
    descHi:
      'अहर्निश संभ्रम-भाव से श्रीकृष्ण का चिंतन करते हुए शिशुपाल और दन्तवक्र के शरीर से दिव्य ज्योति-पुंज निकलकर सबके देखते-देखते भगवान् श्रीकृष्ण में समाहित हो गया और दोनों पुनः वैकुण्ठ के द्वारपाल पद पर प्रतिष्ठित हुए।',
    color: '#A855F7'
  }
];

const JayaVijayaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGate, setSelectedGate] = useState(7);
  const current = JAYA_VIJAYA_BIRTHS[selectedIndex];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#38BDF8]/45 bg-[#08121E] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#38BDF8]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38BDF8] font-bold block">
            {t('SEAL 01 LIVE INTERACTIVE STUDIO · VAIKUṆṬHA SAPTADVĀRA', 'मुद्रिका ०१ जीवंत संवादात्मक कक्ष · वैकुण्ठ सप्तद्वार')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              'Jaya & Vijaya: The 7 Gates of Vaikuṇṭha & 3-Yuga Sambhrama-Bhakti Mandala',
              'जय एवं विजय: वैकुण्ठ के ७ द्वार तथा ३-युग संभ्रम-भक्ति मण्डल'
            )}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider">
          {t('Interactive SVG Diagram', 'संवादात्मक SVG आरेख')}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        {/* Left Interactive SVG */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-[380px] aspect-square rounded-2xl border border-[#38BDF8]/30 bg-[#050B14] p-3 flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <radialGradient id="vaikunthaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={current.color} stopOpacity="0.32" />
                  <stop offset="70%" stopColor="#08121E" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#050B14" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="185" fill="url(#vaikunthaGlow)" />

              {/* 7 Concentric Gates of Vaikuntha (Saptadvara) */}
              {[1, 2, 3, 4, 5, 6, 7].map((gateNum) => {
                const r = 175 - (gateNum - 1) * 19;
                const isSelectedGate = selectedGate === gateNum;
                return (
                  <g
                    key={gateNum}
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedGate(gateNum)}
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r={r}
                      fill="none"
                      stroke={gateNum === 7 ? current.color : isSelectedGate ? '#38BDF8' : '#1E3A5F'}
                      strokeWidth={gateNum === 7 ? 2.6 : isSelectedGate ? 2 : 1.1}
                      strokeDasharray={gateNum % 2 === 0 ? '5 3' : undefined}
                    />
                    <text
                      x="200"
                      y={200 - r + 11}
                      textAnchor="middle"
                      fill={gateNum === 7 ? '#FDE047' : '#7DD3FC'}
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      {`G${gateNum}`}
                    </text>
                  </g>
                );
              })}

              {/* Rotating Sudarshana Chakra */}
              <g className="origin-center animate-[spin_28s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 200 + Math.cos(angle) * 32;
                  const y1 = 200 + Math.sin(angle) * 32;
                  const x2 = 200 + Math.cos(angle) * 56;
                  const y2 = 200 + Math.sin(angle) * 56;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={current.color}
                      strokeWidth="1.6"
                      opacity="0.75"
                    />
                  );
                })}
              </g>

              {/* 4 Nodes for the 4 Cosmic States (Vaikuntha + 3 Births) */}
              {JAYA_VIJAYA_BIRTHS.map((node, idx) => {
                const angles = [-90, 0, 90, 180];
                const rad = (angles[idx] * Math.PI) / 180;
                const nx = 200 + Math.cos(rad) * 145;
                const ny = 200 + Math.sin(rad) * 145;
                const active = selectedIndex === idx;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedIndex(idx)}
                  >
                    {active && (
                      <circle
                        cx={nx}
                        cy={ny}
                        r="26"
                        fill="none"
                        stroke={node.color}
                        strokeWidth="2"
                        className="animate-ping"
                        style={{ animationDuration: '2.5s' }}
                      />
                    )}
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 22 : 17}
                      fill={active ? node.color : '#0F243C'}
                      stroke={node.color}
                      strokeWidth="2.5"
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      textAnchor="middle"
                      fill={active ? '#050B14' : '#F8FAFC'}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {idx === 0 ? 'G7' : `Y${idx}`}
                    </text>
                  </g>
                );
              })}

              {/* Center Sanctum */}
              <circle cx="200" cy="200" r="32" fill="#0B192C" stroke={current.color} strokeWidth="2.5" />
              <text x="200" y="197" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold">
                वैकुण्ठ
              </text>
              <text x="200" y="211" textAnchor="middle" fill="#BAE6FD" fontSize="8" fontFamily="monospace">
                DVĀRA 0{selectedGate}
              </text>
            </svg>
          </div>
          <p className="mt-2 text-[11px] font-mono text-[#93C5FD]/80 text-center">
            {t(
              'Click the 4 cardinal nodes (G7, Y1, Y2, Y3) or any of the 7 Vaikuṇṭha rings (G1–G7) to inspect',
              'वैकुण्ठ के ७ द्वारों (G1–G7) या ४ युग-बिन्दुओं (G7, Y1, Y2, Y3) पर क्लिक करें'
            )}
          </p>
        </div>

        {/* Right Info Panel */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {JAYA_VIJAYA_BIRTHS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`px-3 py-2 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedIndex === idx
                    ? 'bg-[#122B46] border-[#38BDF8] text-white shadow-md'
                    : 'bg-[#0B1829] border-white/10 text-[#93C5FD] hover:border-[#38BDF8]/50'
                }`}
              >
                <div className="font-mono text-[9.5px] uppercase tracking-wider opacity-80">
                  {idx === 0 ? t('Origin', 'मूल पद') : `${t('Birth', 'जन्म')} 0${idx}`}
                </div>
                <div className="font-serif text-xs font-bold truncate mt-0.5">
                  {t(item.stageEn, item.stageHi)}
                </div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-[#38BDF8]/35 bg-[#0C1D31]/90 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase"
                style={{ backgroundColor: `${current.color}25`, color: current.color, border: `1px solid ${current.color}60` }}
              >
                {t(current.yugaEn, current.yugaHi)}
              </span>
              <span className="font-mono text-[10px] text-[#7DD3FC]">
                {t(`Active Vaikuṇṭha Ring: Gate 0${selectedGate} / 07`, `सक्रिय वैकुण्ठ घेरा: द्वार ०${selectedGate} / ०७`)}
              </span>
            </div>

            <h4 className="text-xl font-serif font-bold text-white">
              {t(current.pairEn, current.pairHi)}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded bg-[#07111E] border border-white/10">
                <div className="font-mono text-[9px] uppercase text-[#7DD3FC]">
                  {t('Presiding Avatāra', 'अवतार स्वरूप')}
                </div>
                <div className="font-serif text-sm font-semibold text-[#FDE047] mt-0.5">
                  {t(current.avatarEn, current.avatarHi)}
                </div>
              </div>
              <div className="p-2.5 rounded bg-[#07111E] border border-white/10">
                <div className="font-mono text-[9px] uppercase text-[#7DD3FC]">
                  {t('Theological Mode (Bhāva)', 'भक्ति एवं लीला भाव')}
                </div>
                <div className="font-serif text-sm font-semibold text-white mt-0.5">
                  {t(current.bhavaEn, current.bhavaHi)}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-serif text-[#E2E8F0] leading-relaxed pt-1">
              {t(current.descEn, current.descHi)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 2. SEAL 02 (+ SUB-PARTS): AGHORA, GHORA 12-BHEDA & KĀPĀLIKA 5-JĀLA STUDIO
// ============================================================================
const AGHORA_MODES = [
  {
    id: 'aghora-strata',
    tabEn: '3 Strata of Aghora',
    tabHi: 'अघोर के ३ ऐतिहासिक स्तर',
    nodes: [
      { code: 'S1', nameEn: 'Vedic-Upaniṣadic Aghora Tanū', nameHi: 'वैदिक-उपनिषद् अघोर तनू', subEn: 'Śatarudrīya (YV 16.2) & Śvetāśvatara 3.5', subHi: 'शतरुद्रीय (१६.२) — अघोराऽपापकाशिनी तनू', detailEn: 'The auspicious, non-terrifying (a-ghora) luminous body of Rudra-Śiva invoked for healing and liberation.', detailHi: 'रुद्र-शिव की परम सौम्य, अभयदायिनी और पाप-नाशिनी "अघोर तनू"।' },
      { code: 'S2', nameEn: 'Pañcabrahma Aghora-Mukha', nameHi: 'पञ्चब्रह्म दक्षिण अघोर-मुख', subEn: 'Southern Face · Aghora-hṛdaya Mantra', subHi: 'सद्योजात-वामदेव-अघोर-तत्पुरुष-ईशान', detailEn: 'In Siddhānta and Bhairava Āgamas, Aghora is the southern face of Sadāśiva governing fire, dharma, and absorption.', detailHi: 'शैव आगमों में सदाशिव का दक्षिण मुख जो अग्नि, ज्ञान और पाश-दहन का अधिष्ठाता है।' },
      { code: 'S3', nameEn: 'Kīnārāmī Krim-Kuṇḍa Lineage', nameHi: 'बाबा कीनाराम एवं क्रीं कुण्ड परम्परा', subEn: 'Kāśī Krim-Kuṇḍa · Avadhūta Praxis', subHi: 'काशी क्रीं-कुण्ड · समदर्शी अवधूत साधना', detailEn: 'Institutionalized in Vārāṇasī by MahārājŚrī Bābā Kīnārām beside the sacred Dhūnī and Krim-Kuṇḍa.', detailHi: 'काशी के क्रीं-कुण्ड पर बाबा कीनाराम द्वारा स्थापित अखंड धूनी और लोक-कल्याणकारी औघड़ परम्परा।' }
    ]
  },
  {
    id: 'ghora-12',
    tabEn: 'Sub-Part I: Ghora 12-Bhedas',
    tabHi: 'उप-भाग I: घोर १२ भेद',
    nodes: [
      { code: '01', nameEn: '1. Rakta (रक्त)', nameHi: '१. रक्त', subEn: 'Vital Prāṇa / Red Stream', subHi: 'रक्त-धारा / प्राण-तेज', detailEn: 'First of the 12 vernacular Ghora bhedas audited in the CAGS textual concordance.', detailHi: 'घोर सम्प्रदाय की १२-भेद लोक-सूची का प्रथम पद।' },
      { code: '02', nameEn: '2. Śukla (शुक्ल)', nameHi: '२. शुक्ल', subEn: 'White / Pure Effulgence', subHi: 'शुक्ल / विमल ज्योति', detailEn: 'Represents the luminous, ash-anointed (bhasma) polarity balancing Rakta.', detailHi: 'भस्म-विभूषित शुभ्र शिव-तत्त्व का प्रतीक।' },
      { code: '03', nameEn: '3. Vinmūtra · 4. Bhakṣa', nameHi: '३. विन्मूत्र · ४. भक्ष', subEn: 'Transgressive Non-Duality Audit', subHi: 'अद्वैत समदृष्टि परीक्षण', detailEn: 'Vernacular terms reflecting the radical overcoming of purity-pollution duality (ghṛṇā-tyāga).', detailHi: 'कुलार्णव तन्त्र के अष्ट-पाशों में "घृणा" पाश के उन्मूलन की लोक-शब्दावली।' },
      { code: '04', nameEn: '5. Kālī · 6. Tārā · 7. Ugratārā', nameHi: '५. काली · ६. तारा · ७. उग्रतारा', subEn: 'Mahāvidyā Śākta Currents', subHi: 'महाविद्या शाक्त धाराएँ', detailEn: 'Direct incorporation of Northern/Eastern Kālīkula goddess streams into Ghora praxis.', detailHi: 'कालीकुल की उग्र महाविद्या धाराओं का घोर साधना में समन्वय।' },
      { code: '05', nameEn: '8. Aghor · 9. Kāpālik · 10. Bhairav', nameHi: '८. अघोर · ९. कापालिक · १०. भैरव', subEn: 'Core Śmaśāna Ascetic Orders', subHi: 'मुख्य श्मशान शैव आम्नाय', detailEn: 'The historical triad of cremation-ground Śaiva orders referenced across Purāṇas and Āgamas.', detailHi: 'श्मशान-साधना की तीन ऐतिहासिक शैव-शाक्त धाराएँ।' },
      { code: '06', nameEn: '11. Śmaśān · 12. Siddha', nameHi: '११. श्मशान · १२. सिद्ध', subEn: 'Culmination in Siddhatva', subHi: 'श्मशान-वैराग्य से सिद्धत्व', detailEn: 'Culmination of the 12-term sequence in complete spiritual mastery (Siddha).', detailHi: 'श्मशान-साधना से पूर्ण सिद्धत्व की प्राप्ति।' }
    ]
  },
  {
    id: 'kapalika-5',
    tabEn: 'Sub-Part II: Kāpālika 5-Jālas',
    tabHi: 'उप-भाग II: कापालिक ५-जाली',
    nodes: [
      { code: 'J1', nameEn: '1. Indrajālī (इन्द्रजाली)', nameHi: '१. इन्द्रजाली', subEn: 'Māyā & Perceptual Wonder', subHi: 'इन्द्रजाल एवं माया-कौशल', detailEn: 'Mastery over phenomenal appearances and sensory wonder (indrajāla).', detailHi: 'माया और दृश्य-प्रपंच के रहस्य का भेदन।' },
      { code: 'J2', nameEn: '2. Devajālī (देवजाली)', nameHi: '२. देवजाली', subEn: 'Celestial Invocation Net', subHi: 'दिव्य शक्ति-जाल', detailEn: 'Harmonic alignment with luminous deva-forces and mantra-mandalas.', detailHi: 'देव-शक्तियों एवं मन्त्र-मण्डलों का आह्वान।' },
      { code: 'J3', nameEn: '3. Rudrajālī (रुद्रजाली)', nameHi: '३. रुद्रजाली', subEn: 'Fierce Rudra-Bhairava Current', subHi: 'रौद्र भैरव-जाल', detailEn: 'Direct channeling of Rudra-agni for obstacle dissolution.', detailHi: 'रुद्राग्नि के माध्यम से विघ्न-नाश एवं पाश-छेदन।' },
      { code: 'J4', nameEn: '4. Vidyājālī (विद्याजाली)', nameHi: '४. विद्याजाली', subEn: 'Esoteric Vidyā & Mantra Matrix', subHi: 'गुह्य विद्या-जाल', detailEn: 'Sovereignty over Śākta vidyās and sonic matrices.', detailHi: 'शाक्त महाविद्याओं और मन्त्र-विज्ञान की साधना।' },
      { code: 'J5', nameEn: '5. Siddhajālī (सिद्धजाली)', nameHi: '५. सिद्धजाली', subEn: 'Somāsiddhānta Perfection', subHi: 'सोमसिद्धान्त एवं सिद्ध-योग', detailEn: 'Supreme realization uniting Kapālin Śiva and Mādhavī/Somā Śakti.', detailHi: 'सोमसिद्धान्त के १२ गुरुओं और ६ शिष्यों की परम्परा का सर्वोच्च सिद्ध-स्तर।' }
    ]
  }
];

const AghoraSampradayaStudio: React.FC<{ articleSlug: string; lang: 'en' | 'hi' }> = ({ articleSlug, lang }) => {
  const initialTab =
    articleSlug === 'ghora-sampradaya-11-bhedas-study'
      ? 1
      : articleSlug === 'kapalika-sampradaya-5-bhedas-somasiddhanta'
      ? 2
      : 0;
  const [tabIdx, setTabIdx] = useState(initialTab);
  const [nodeIdx, setNodeIdx] = useState(0);
  const currentTab = AGHORA_MODES[tabIdx];
  const currentNode = currentTab.nodes[nodeIdx] || currentTab.nodes[0];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#F59E0B]/45 bg-[#120B07] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F59E0B]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F59E0B] font-bold block">
            {t('SEAL 02 LIVE INTERACTIVE STUDIO · AGHORA, GHORA & KĀPĀLIKA', 'मुद्रिका ०२ जीवंत संवादात्मक कक्ष · अघोर, घोर एवं कापालिक')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              'Krīṃ-Kuṇḍa Dhūnī, Ghora 12-Bheda & Kāpālika Somāsiddhānta Interactive Mandala',
              'क्रीं-कुण्ड धूनी, घोर १२-भेद एवं कापालिक सोमसिद्धान्त संवादात्मक मण्डल'
            )}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {AGHORA_MODES.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setTabIdx(idx);
                setNodeIdx(0);
              }}
              className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider cursor-pointer transition-all ${
                tabIdx === idx
                  ? 'bg-[#F59E0B] text-[#120B07] font-bold'
                  : 'bg-[#1F130C] text-[#FDE68A] border border-[#F59E0B]/30 hover:border-[#F59E0B]'
              }`}
            >
              {t(m.tabEn, m.tabHi)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[340px] aspect-square rounded-2xl border border-[#F59E0B]/30 bg-[#0B0604] p-3">
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <circle cx="180" cy="180" r="155" fill="none" stroke="#F59E0B" strokeWidth="1.2" opacity="0.35" />
              <circle cx="180" cy="180" r="118" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5" />
              {/* Downward and Upward Fire Triangles of Dhuni */}
              <polygon points="180,55 290,245 70,245" fill="none" stroke="#F59E0B" strokeWidth="1.8" opacity="0.65" />
              <polygon points="180,305 290,115 70,115" fill="none" stroke="#EF4444" strokeWidth="1.8" opacity="0.55" />

              {currentTab.nodes.map((n, idx) => {
                const total = currentTab.nodes.length;
                const angle = ((idx * (360 / total) - 90) * Math.PI) / 180;
                const nx = 180 + Math.cos(angle) * 128;
                const ny = 180 + Math.sin(angle) * 128;
                const active = nodeIdx === idx;
                return (
                  <g key={n.code} className="cursor-pointer" onClick={() => setNodeIdx(idx)}>
                    <line x1="180" y1="180" x2={nx} y2={ny} stroke="#F59E0B" strokeWidth="1" opacity="0.3" />
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 22 : 17}
                      fill={active ? '#F59E0B' : '#1E110A'}
                      stroke="#FDE047"
                      strokeWidth="2"
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      textAnchor="middle"
                      fill={active ? '#120B07' : '#FDE68A'}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {n.code}
                    </text>
                  </g>
                );
              })}

              <circle cx="180" cy="180" r="38" fill="#1F1008" stroke="#F59E0B" strokeWidth="2.5" />
              <text x="180" y="177" textAnchor="middle" fill="#FDE047" fontSize="14" fontWeight="bold">
                क्रीं
              </text>
              <text x="180" y="194" textAnchor="middle" fill="#FDBA74" fontSize="8" fontFamily="monospace">
                AGHORA
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {currentTab.nodes.map((n, idx) => (
              <button
                key={n.code}
                type="button"
                onClick={() => setNodeIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  nodeIdx === idx
                    ? 'bg-[#29170D] border-[#F59E0B] text-white shadow-md'
                    : 'bg-[#170D08] border-white/10 text-[#FDE68A]/80 hover:border-[#F59E0B]/50'
                }`}
              >
                <span className="font-mono text-[10px] text-[#F59E0B] font-bold block">{n.code}</span>
                <span className="font-serif text-xs sm:text-sm font-bold block mt-0.5">{t(n.nameEn, n.nameHi)}</span>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-[#F59E0B]/40 bg-[#1B0F09] space-y-2.5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#F59E0B]">
              {t(currentNode.subEn, currentNode.subHi)}
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              {t(currentNode.nameEn, currentNode.nameHi)}
            </h4>
            <p className="text-sm font-serif text-[#F5E8CE]/90 leading-relaxed">
              {t(currentNode.detailEn, currentNode.detailHi)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. SEAL 03: SAMAYA & AṢṬA PRAHARA 24-HOUR HOROLOGICAL WHEEL STUDIO
// ============================================================================
const ASHTA_PRAHARS = [
  { num: 1, nameEn: '1st Day Prahar (Pūrvāhṇa)', nameHi: 'प्रथम दिन प्रहर (पूर्वाह्ण)', time: '06:00 – 09:00 AM', ragaEn: 'Bhairava, Rāmakalī, Ahīr Bhairava', ragaHi: 'भैरव, रामकली, अहीर भैरव', gunaEn: 'Sattva Rising · Uṣā Sandhyā', gunaHi: 'सत्त्व उदय · प्रातः संध्या', color: '#FBBF24' },
  { num: 2, nameEn: '2nd Day Prahar (Madhyāhna-pūrva)', nameHi: 'द्वितीय दिन प्रहर (मध्याह्न-पूर्व)', time: '09:00 – 12:00 PM', ragaEn: 'Toḍī, Bilāvala, Āsāvarī', ragaHi: 'तोड़ी, बिलावल, आसावरी', gunaEn: 'Rajas Expansion · Solar Ascent', gunaHi: 'रजस् विस्तार · सूर्य आरोहण', color: '#F59E0B' },
  { num: 3, nameEn: '3rd Day Prahar (Aparāhṇa)', nameHi: 'तृतीय दिन प्रहर (अपराह्ण)', time: '12:00 – 03:00 PM', ragaEn: 'Sāraṅga, Bhīmapalāsī, Multānī', ragaHi: 'सारंग, भीमपलासी, मुल्तानी', gunaEn: 'Solar Zenith · Abhijit Muhūrta', gunaHi: 'मध्याह्न संध्या · अभिजित् मुहूर्त', color: '#EA580C' },
  { num: 4, nameEn: '4th Day Prahar (Sāyāhna)', nameHi: 'चतुर्थ दिन प्रहर (सायाह्न)', time: '03:00 – 06:00 PM', ragaEn: 'Pūriyā Dhanāśrī, Māravā, Śrī', ragaHi: 'पूरिया धनाश्री, मारवा, श्री', gunaEn: ' Evening Sandhyā · Sunset Threshold', gunaHi: 'सायं संध्या · संधि-प्रकाश', color: '#FB7185' },
  { num: 5, nameEn: '1st Night Prahar (Pradoṣa)', nameHi: 'प्रथम रात्रि प्रहर (प्रदोष)', time: '06:00 – 09:00 PM', ragaEn: 'Yaman (Kalyāṇa), Bhūpālī, Kedāra', ragaHi: 'यमन (कल्याण), भूपाली, केदार', gunaEn: 'Śiva Pradoṣa Pūjā · Auspicious Dusk', gunaHi: 'शिव प्रदोष काल · कल्याण राग', color: '#A855F7' },
  { num: 6, nameEn: '2nd Night Prahar (Niśītha)', nameHi: 'द्वितीय रात्रि प्रहर (निशीथ)', time: '09:00 – 12:00 AM', ragaEn: 'Bāgeśrī, Bihāga, Khamāja, जयजयवन्ती', ragaHi: 'बागेश्री, बिहाग, खमाज, जयजयवन्ती', gunaEn: 'Deep Contemplative Stillness', gunaHi: 'गहन ध्यान एवं रात्रि माधुर्य', color: '#6366F1' },
  { num: 7, nameEn: '3rd Night Prahar (Mahāniśā)', nameHi: 'तृतीय रात्रि प्रहर (महानिशा)', time: '12:00 – 03:00 AM', ragaEn: 'Mālkauns, Darbārī Kānhaḍā, Adānā', ragaHi: 'मालकौंस, दरबारी कान्हड़ा, अड़ाना', gunaEn: 'Tāntric Mahāniśā · Midnight Axis', gunaHi: 'तांत्रिक महानिशा · अर्धरात्रि साधना', color: '#38BDF8' },
  { num: 8, nameEn: '4th Night Prahar (Brahmamuhūrta)', nameHi: 'चतुर्थ रात्रि प्रहर (ब्रह्ममुहूर्त)', time: '03:00 – 06:00 AM', ragaEn: 'Lalit, Sohinī, Bhatiyāra, Paraja', ragaHi: 'ललित, सोहिनी, भटियार, परज', gunaEn: 'Brahmamuhūrta Awakening (2 Muhūrtas before Dawn)', gunaHi: 'ब्रह्ममुहूर्त जागरण (सूर्योदय से २ मुहूर्त पूर्व)', color: '#2DD4BF' }
];

const SamayaAshtaPraharStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedPrahar, setSelectedPrahar] = useState(0);
  const current = ASHTA_PRAHARS[selectedPrahar];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#FBBF24]/45 bg-[#120E06] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#FBBF24]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FBBF24] font-bold block">
            {t('SEAL 03 LIVE INTERACTIVE STUDIO · SAMAYA & AṢṬA PRAHARA', 'मुद्रिका ०३ जीवंत संवादात्मक कक्ष · समय एवं अष्ट प्रहर')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              'Ahorātra 8-Prahar Horological Dial, 30 Muhūrtas & Rāga-Samaya Wheel',
              'अहोरात्र अष्ट-प्रहर कालचक्र, ३० मुहूर्त एवं राग-समय संवादात्मक चक्र'
            )}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 font-mono text-[10px] text-[#FBBF24] uppercase">
          {t('8 Prahars × 3h = 24 Hours', '८ प्रहर × ३ घंटे = २४ घंटे')}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[350px] aspect-square rounded-2xl border border-[#FBBF24]/30 bg-[#0B0804] p-3">
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <circle cx="180" cy="180" r="158" fill="none" stroke="#FBBF24" strokeWidth="1.2" opacity="0.35" />
              {/* 30 Muhurta Ticks */}
              {Array.from({ length: 30 }).map((_, i) => {
                const a = ((i * 12 - 90) * Math.PI) / 180;
                const x1 = 180 + Math.cos(a) * 148;
                const y1 = 180 + Math.sin(a) * 148;
                const x2 = 180 + Math.cos(a) * 156;
                const y2 = 180 + Math.sin(a) * 156;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FDE047" strokeWidth="1.2" opacity="0.55" />;
              })}

              {/* 8 Prahar Nodes */}
              {ASHTA_PRAHARS.map((p, idx) => {
                const a = ((idx * 45 - 67.5) * Math.PI) / 180;
                const nx = 180 + Math.cos(a) * 116;
                const ny = 180 + Math.sin(a) * 116;
                const active = selectedPrahar === idx;
                return (
                  <g key={p.num} className="cursor-pointer" onClick={() => setSelectedPrahar(idx)}>
                    <line x1="180" y1="180" x2={nx} y2={ny} stroke={p.color} strokeWidth={active ? 2.2 : 1} opacity={active ? 0.9 : 0.35} />
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 23 : 17}
                      fill={active ? p.color : '#1C140A'}
                      stroke={p.color}
                      strokeWidth="2"
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      textAnchor="middle"
                      fill={active ? '#0B0804' : '#FDE68A'}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {`P${p.num}`}
                    </text>
                  </g>
                );
              })}

              <circle cx="180" cy="180" r="42" fill="#1A1208" stroke={current.color} strokeWidth="2.5" />
              <text x="180" y="175" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold">
                अष्ट प्रहर
              </text>
              <text x="180" y="191" textAnchor="middle" fill="#FDBA74" fontSize="9" fontFamily="monospace">
                {`PRAHAR 0${current.num}`}
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {ASHTA_PRAHARS.map((p, idx) => (
              <button
                key={p.num}
                type="button"
                onClick={() => setSelectedPrahar(idx)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedPrahar === idx
                    ? 'bg-[#2B1F0D] border-[#FBBF24] text-white shadow'
                    : 'bg-[#171108] border-white/10 text-[#FDE68A]/80 hover:border-[#FBBF24]/50'
                }`}
              >
                <div className="font-mono text-[9.5px] font-bold" style={{ color: p.color }}>
                  {`P0${p.num} · ${p.time.split('–')[0]}`}
                </div>
                <div className="font-serif text-xs font-bold truncate mt-0.5">
                  {t(p.nameEn, p.nameHi)}
                </div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-[#FBBF24]/40 bg-[#1B1409] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FBBF24]/20 text-[#FDE047] font-mono text-xs font-bold">
                {current.time}
              </span>
              <span className="font-mono text-[10px] text-[#FDBA74]">
                {t('1 Prahar = 3 Hours = 3.75 Muhūrtas = 7.5 Ghaṭikās', '१ प्रहर = ३ घंटे = ३.७५ मुहूर्त = ७.५ घटिका')}
              </span>
            </div>
            <h4 className="text-xl font-serif font-bold text-white">{t(current.nameEn, current.nameHi)}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded bg-[#110C05] border border-white/10">
                <div className="font-mono text-[9.5px] uppercase text-[#FBBF24]">
                  {t('Prescribed Classical Rāgas (Rāga-Samaya)', 'निर्धारित शास्त्रीय राग (राग-समय)')}
                </div>
                <div className="font-serif text-sm font-bold text-white mt-0.5">
                  {t(current.ragaEn, current.ragaHi)}
                </div>
              </div>
              <div className="p-3 rounded bg-[#110C05] border border-white/10">
                <div className="font-mono text-[9.5px] uppercase text-[#FBBF24]">
                  {t('Liturgical & Cosmic Quality', 'संध्या एवं आनुष्ठानिक गुण')}
                </div>
                <div className="font-serif text-sm font-bold text-[#FDE68A] mt-0.5">
                  {t(current.gunaEn, current.gunaHi)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SEAL 08: BĀVAN BHAIRAVA (52 FORMS & 52 BHAIRAV VĪRAS) INTERACTIVE MANDALA
// ============================================================================
const BavanBhairavaMandalaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedNum, setSelectedNum] = useState(1);
  const [ringMode, setRingMode] = useState<'viras' | 'pithas'>('viras');
  const vira = BAVAN_BHAIRAVA_VIRAS_52[selectedNum - 1] || BAVAN_BHAIRAVA_VIRAS_52[0];
  const pithaBh = BAVAN_BHAIRAVAS_LIST[selectedNum - 1] || BAVAN_BHAIRAVAS_LIST[0];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#FFBF38]/50 bg-[#130C06] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#FFBF38]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFBF38] font-bold block">
            {t('SEAL 08 LIVE INTERACTIVE STUDIO · BĀVAN BHAIRAVA (52 FORMS)', 'मुद्रिका ०८ जीवंत संवादात्मक कक्ष · बावन भैरव (५२ स्वरूप)')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              '52-Node Bāvan Bhairava & Śakti Pīṭha Guardian Interactive Mandala',
              'बावन भैरव वीर (५२) एवं ५२ शक्तिपीठ रक्षक संवादात्मक मण्डल'
            )}
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRingMode('viras')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase cursor-pointer ${
              ringMode === 'viras'
                ? 'bg-[#FFBF38] text-[#130C06] font-bold'
                : 'bg-[#22150B] text-[#FDE68A] border border-[#FFBF38]/35'
            }`}
          >
            {t('52 Bhairav Vīras (बावन भैरव वीर)', '५२ भैरव वीर')}
          </button>
          <button
            type="button"
            onClick={() => setRingMode('pithas')}
            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] uppercase cursor-pointer ${
              ringMode === 'pithas'
                ? 'bg-[#FFBF38] text-[#130C06] font-bold'
                : 'bg-[#22150B] text-[#FDE68A] border border-[#FFBF38]/35'
            }`}
          >
            {t('52 Pīṭha Bhairavas', '५२ शक्तिपीठ भैरव')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[390px] aspect-square rounded-2xl border border-[#FFBF38]/30 bg-[#0A0603] p-2">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="172" fill="none" stroke="#FFBF38" strokeWidth="1" opacity="0.3" />
              <circle cx="200" cy="200" r="126" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.3" />

              {/* Outer Ring: Numbers 1 to 32, Inner Ring: Numbers 33 to 52 */}
              {BAVAN_BHAIRAVA_VIRAS_52.map((item) => {
                const isOuter = item.index <= 32;
                const idxInRing = isOuter ? item.index - 1 : item.index - 33;
                const countInRing = isOuter ? 32 : 20;
                const radius = isOuter ? 164 : 116;
                const angle = ((idxInRing * (360 / countInRing) - 90) * Math.PI) / 180;
                const nx = 200 + Math.cos(angle) * radius;
                const ny = 200 + Math.sin(angle) * radius;
                const active = selectedNum === item.index;
                return (
                  <g
                    key={item.index}
                    className="cursor-pointer"
                    onClick={() => setSelectedNum(item.index)}
                  >
                    {active && (
                      <line x1="200" y1="200" x2={nx} y2={ny} stroke="#FFBF38" strokeWidth="1.8" />
                    )}
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 11.5 : 7.5}
                      fill={active ? '#FFBF38' : isOuter ? '#2A180C' : '#331410'}
                      stroke={active ? '#FFFFFF' : '#FFBF38'}
                      strokeWidth={active ? 2 : 1}
                    />
                    <text
                      x={nx}
                      y={ny + 2.8}
                      textAnchor="middle"
                      fill={active ? '#130C06' : '#FDE68A'}
                      fontSize={active ? '8' : '6.5'}
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {item.index}
                    </text>
                  </g>
                );
              })}

              {/* Center Shiva-Shakti Bindu */}
              <polygon points="200,145 246,225 154,225" fill="none" stroke="#FFBF38" strokeWidth="1.6" opacity="0.75" />
              <polygon points="200,255 246,175 154,175" fill="none" stroke="#EF4444" strokeWidth="1.6" opacity="0.75" />
              <circle cx="200" cy="200" r="32" fill="#1C1008" stroke="#FFBF38" strokeWidth="2" />
              <text x="200" y="196" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold">
                {`#${String(selectedNum).padStart(2, '0')} / 52`}
              </text>
              <text x="200" y="210" textAnchor="middle" fill="#FDBA74" fontSize="8" fontFamily="monospace">
                बावन भैरव
              </text>
            </svg>
          </div>
          <p className="mt-2 text-[11px] font-mono text-[#FDE68A]/75 text-center">
            {t(
              'Click any of the 52 numbered guardian nodes (Outer Ring 1–32 · Inner Ring 33–52)',
              'बाह्य घेरे (१–३२) या आंतरिक घेरे (३३–५२) के किसी भी भैरव-बिन्दु पर क्लिक करें'
            )}
          </p>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-xl border-2 border-[#FFBF38]/50 bg-[#1D1209] space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-[#FFBF38] text-[#130C06] font-mono text-xs font-bold">
                {`BHAIRAVA #${String(selectedNum).padStart(2, '0')} OF 52`}
              </span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedNum((n) => (n > 1 ? n - 1 : 52))}
                  className="px-2.5 py-1 rounded bg-[#2B1B0E] border border-[#FFBF38]/40 text-xs font-mono cursor-pointer hover:bg-[#3A2413]"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedNum((n) => (n < 52 ? n + 1 : 1))}
                  className="px-2.5 py-1 rounded bg-[#2B1B0E] border border-[#FFBF38]/40 text-xs font-mono cursor-pointer hover:bg-[#3A2413]"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* 52 Bhairav Vira Box */}
            <div className="p-3.5 rounded-lg bg-[#120A05] border border-[#FFBF38]/35 space-y-1">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#FFBF38]">
                {t('52 Bhairav Vīra Tradition (बावन भैरव वीर)', 'बावन भैरव वीर परम्परा')}
              </div>
              <div className="text-xl font-serif font-bold text-white mt-0.5">
                {vira.index}. {vira.nameIAST} <span className="text-[#FDE047]">({vira.nameDevanagari})</span>
              </div>
              <div className="text-xs font-mono text-[#FDBA74]">
                {vira.mantraSanskrit} · {vira.mantraPhonetic}
              </div>
            </div>

            {/* Corresponding 52 Shakti Peetha Guardian Box */}
            <div className="p-3.5 rounded-lg bg-[#120A05] border border-[#EF4444]/35 space-y-1.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#FB7185]">
                {t('Corresponding Śakti Pīṭha Guardian Concordance', 'संबद्ध शक्तिपीठ रक्षक भैरव एवं पीठ')}
              </div>
              <div className="text-lg font-serif font-bold text-[#FDE68A]">
                {pithaBh.nameHi} भैरव · {pithaBh.nameEn} Bhairava
              </div>
              <div className="font-serif text-sm text-white">
                {pithaBh.devotionalMantra} <span className="font-mono text-xs text-[#FDBA74]">({pithaBh.devotionalMantraPhonetic})</span>
              </div>
              <div className="text-xs font-mono text-[#F5E8CE]/80 pt-1">
                {t(
                  `Pīṭha: ${pithaBh.peethaEn} (${pithaBh.locationEn}) · Devī: ${pithaBh.goddessEn} · Aṅga: ${pithaBh.bodyPartEn}`,
                  `पीठ: ${pithaBh.peethaHi} · देवी: ${pithaBh.goddessHi} · सती अंग: ${pithaBh.bodyPartHi}`
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 5. SEAL 05 (+ SUB-PARTS): KĀLĪKULA & ŚRĪKULA DUAL-STREAM YANTRA STUDIO
// ============================================================================
const KULA_DIMENSIONS = [
  {
    id: 'metaphysics',
    dimEn: '1. Supreme Metaphysical Emphasis',
    dimHi: '१. सर्वोच्च दार्शनिक अधिष्ठान',
    kalikulaEn: 'Kālī as devourer of Kāla (Time), radical transcendence, dissolution of ego-limitations, and luminous void (Parā-Saṃvit).',
    kalikulaHi: 'काली—काल का भक्षण करने वाली परा-संवित्, अहंकार-पाश का उन्मूलन और परम स्वातंत्र्य।',
    srikulaEn: 'Lalita Tripurasundarī as sovereign Citi-Śakti manifesting, harmonizing, andgoverning the cosmos in beauty and fullness (Pūrṇatā).',
    srikulaHi: 'ललिता त्रिपुरसुन्दरी—सौन्दर्य, सामरस्य और ऐश्वर्य से विश्व का सृजन-पालन करने वाली चिति-शक्ति।'
  },
  {
    id: 'geometry',
    dimEn: '2. Sacred Yantra Geometry',
    dimHi: '२. पवित्र यन्त्र-ज्यामिति',
    kalikulaEn: 'Kālī Yantra: Five concentric inverted (downward-pointing) Śakti triangles around the central bindu, encircled by an 8-petalled lotus.',
    kalikulaHi: 'काली यन्त्र: केंद्र बिन्दु के चारों ओर पाँच अधोमुखी (त्रिकोण) शक्ति-कोण एवं अष्टदल कमल।',
    srikulaEn: 'Śrīcakra (Navāvaraṇa): Nine interlocking enclosures formed by 4 upward Śiva triangles and 5 downward Śakti triangles generating 43vasukonas.',
    srikulaHi: 'श्रीचक्र (नवावरण): ४ ऊर्ध्वमुखी शिव-त्रिकोण एवं ५ अधोमुखी शक्ति-त्रिकोणों के मिलन से निर्मित ४३ कोणों का मेरु-मण्डल।'
  },
  {
    id: 'mahavidyas',
    dimEn: '3. Associated Mahāvidyā Grouping',
    dimHi: '३. संबद्ध दशमहाविद्या वर्गीकरण',
    kalikulaEn: 'Kālī, Tārā, Chinnamastā, Dhūmāvatī, Bagalāmukhī (dominant fierce/transformative axis in Eastern Śākta texts).',
    kalikulaHi: 'काली, तारा, छिन्नमस्ता, धूमावती, बगलामुखी (पूर्वी आम्नाय में उग्र रूपांतरणकारी धारा)।',
    srikulaEn: 'Tripurasundarī (Ṣoḍaśī), Bhuvaneśvarī, Tripurabhairavī, Mātaṅgī, Kamalā (auspicious sovereign axis in Southern/Kashmiri Śrīvidyā).',
    srikulaHi: 'त्रिपुरसुन्दरी (षोडशी), भुवनेश्वरी, त्रिपुरभैरवी, मातङ्गी, कमला (सौम्य-ऐश्वर्यमयी श्रीविद्या धारा)।'
  },
  {
    id: 'regions',
    dimEn: '4. Primary Textual & Regional Centres',
    dimHi: '४. प्रमुख ग्रंथ एवं क्षेत्रीय केंद्र',
    kalikulaEn: 'Bengal, Assam (Kāmākhyā), Mithilā, Odisha, Kashmir Krama · Jayadrathayāmala, Karpūrādi-stotra, Bṛhannīla Tantra.',
    kalikulaHi: 'बंगाल, असम (कामाख्या), मिथिला, ओडिशा एवं कश्मीर क्रम · जयद्रथयामल, कर्पूरादिस्तोत्र, बृहन्नील तन्त्र।',
    srikulaEn: 'Kāñcīpuram, Śṛṅgerī, Chidambaram, Kashmir, Vārāṇasī · Vāmakeśvara Tantra, Yoginīhṛdaya, Lalitāsahasranāma, Saundaryalaharī.',
    srikulaHi: 'कांचीपुरम्, शृंगेरी, चिदम्बरम्, कश्मीर एवं काशी · वामकेश्वर तन्त्र, योगिनीहृदय, ललितासहस्रनाम, सौन्दर्यलहरी।'
  }
];

const KalikulaSrikulaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [dimIdx, setDimIdx] = useState(0);
  const current = KULA_DIMENSIONS[dimIdx];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#EC4899]/45 bg-[#140710] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EC4899]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F472B6] font-bold block">
            {t('SEAL 05 LIVE INTERACTIVE STUDIO · KĀLĪKULA & ŚRĪKULA', 'मुद्रिका ०५ जीवंत संवादात्मक कक्ष · कालीकुल एवं श्रीकुल')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              'Kālī-Yantra (Pañca-Trikoṇa) & Śrīcakra (Navāvaraṇa) Dual-Stream Interactive Synthesis',
              'काली-यन्त्र (पञ्च-त्रिकोण) एवं श्रीचक्र (नवावरण) द्विकुल संवादात्मक संश्लेषण'
            )}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        {/* Dual SVG Yantras */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {/* Kalikula SVG */}
          <div className="rounded-xl border border-[#F43F5E]/40 bg-[#0B0408] p-3 flex flex-col items-center">
            <span className="font-mono text-[9.5px] uppercase text-[#FB7185] font-bold mb-1">
              {t('Kālīkula Yantra', 'कालीकुल यन्त्र')}
            </span>
            <svg viewBox="0 0 200 200" className="w-full aspect-square">
              <circle cx="100" cy="100" r="84" fill="none" stroke="#F43F5E" strokeWidth="1.2" opacity="0.4" />
              {[72, 58, 44, 30, 18].map((r, idx) => (
                <polygon
                  key={idx}
                  points={`100,${100 + r} ${100 - r * 0.866},${100 - r * 0.5} ${100 + r * 0.866},${100 - r * 0.5}`}
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="1.5"
                />
              ))}
              <circle cx="100" cy="100" r="4" fill="#FDE047" />
              <text x="100" y="188" textAnchor="middle" fill="#FDA4AF" fontSize="9" fontFamily="monospace">
                क्रीं · KĀLĪKULA
              </text>
            </svg>
          </div>

          {/* Srikula SVG */}
          <div className="rounded-xl border border-[#EC4899]/40 bg-[#0B0408] p-3 flex flex-col items-center">
            <span className="font-mono text-[9.5px] uppercase text-[#F472B6] font-bold mb-1">
              {t('Śrīkula Śrīcakra', 'श्रीकुल श्रीचक्र')}
            </span>
            <svg viewBox="0 0 200 200" className="w-full aspect-square">
              <circle cx="100" cy="100" r="84" fill="none" stroke="#EC4899" strokeWidth="1.2" opacity="0.4" />
              {[70, 52, 34, 18].map((r, idx) => (
                <g key={idx}>
                  <polygon
                    points={`100,${100 - r} ${100 - r * 0.866},${100 + r * 0.5} ${100 + r * 0.866},${100 + r * 0.5}`}
                    fill="none"
                    stroke="#FDE047"
                    strokeWidth="1.3"
                  />
                  <polygon
                    points={`100,${100 + r} ${100 - r * 0.866},${100 - r * 0.5} ${100 + r * 0.866},${100 - r * 0.5}`}
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="1.3"
                  />
                </g>
              ))}
              <circle cx="100" cy="100" r="4" fill="#FDE047" />
              <text x="100" y="188" textAnchor="middle" fill="#F9A8D4" fontSize="9" fontFamily="monospace">
                श्रीं · ŚRĪKULA
              </text>
            </svg>
          </div>
        </div>

        {/* Comparison Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {KULA_DIMENSIONS.map((d, idx) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDimIdx(idx)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  dimIdx === idx
                    ? 'bg-[#2E1024] border-[#EC4899] text-white shadow'
                    : 'bg-[#1B0915] border-white/10 text-[#F9A8D4]/80 hover:border-[#EC4899]/50'
                }`}
              >
                <div className="font-serif text-xs font-bold">{t(d.dimEn, d.dimHi)}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-[#F43F5E]/40 bg-[#1F0913] space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#FB7185] font-bold">
                {t('Part I · Kālīkula Stream (कालीकुल)', 'भाग I · कालीकुल आम्नाय')}
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#F5E8CE] leading-relaxed">
                {t(current.kalikulaEn, current.kalikulaHi)}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[#EC4899]/40 bg-[#1F091A] space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#F472B6] font-bold">
                {t('Part II · Śrīkula Stream (श्रीकुल)', 'भाग II · श्रीकुल आम्नाय')}
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#F5E8CE] leading-relaxed">
                {t(current.srikulaEn, current.srikulaHi)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 6. SEAL 07: NAVADURGĀ 9-PETAL SACRED LOTUS & NAVARĀTRI STUDIO
// ============================================================================
const NAVADURGA_9 = [
  { num: 1, nameHi: 'शैलपुत्री', nameEn: 'Śailaputrī', mantraHi: 'ॐ देवी शैलपुत्र्यै नमः॥', mantraEn: 'Om Devi Shailaputryai Namah', vahanaEn: 'Nandī (White Bull)', vahanaHi: 'वृषभ (नन्दी)', chakraEn: 'Mūlādhāra Chakra', chakraHi: 'मूलाधार चक्र', color: '#F43F5E' },
  { num: 2, nameHi: 'ब्रह्मचारिणी', nameEn: 'Brahmacāriṇī', mantraHi: 'ॐ देवी ब्रह्मचारिण्यै नमः॥', mantraEn: 'Om Devi Brahmacharinyai Namah', vahanaEn: 'Barefoot Ascetic Walk (Tapas)', vahanaHi: 'तपस्विनी (अक्षमाला एवं कमण्डलु)', chakraEn: 'Svādhiṣṭhāna Chakra', chakraHi: 'स्वाधिष्ठान चक्र', color: '#FB923C' },
  { num: 3, nameHi: 'चन्द्रघण्टा', nameEn: 'Candraghaṇṭā', mantraHi: 'ॐ देवी चन्द्रघण्टायै नमः॥', mantraEn: 'Om Devi Chandraghantayai Namah', vahanaEn: 'Daśabhuja Tigress/Lioness', vahanaHi: 'सिंह/व्याघ्र वाहिनी (दशभुजा)', chakraEn: 'Maṇipūra Chakra', chakraHi: 'मणिपूर चक्र', color: '#FACC15' },
  { num: 4, nameHi: 'कूष्माण्डा', nameEn: 'Kūṣmāṇḍā', mantraHi: 'ॐ देवी कूष्माण्डायै नमः॥', mantraEn: 'Om Devi Kushmandayai Namah', vahanaEn: 'Solar Lion (Sūryamaṇḍala)', vahanaHi: 'सिंह (सूर्यमण्डल निवासिनी)', chakraEn: 'Anāhata Chakra', chakraHi: 'अनाहत चक्र', color: '#4ADE80' },
  { num: 5, nameHi: 'स्कन्दमाता', nameEn: 'Skandamātā', mantraHi: 'ॐ देवी स्कन्दमातायै नमः॥', mantraEn: 'Om Devi Skandamatayai Namah', vahanaEn: 'Lion (Holding Six-Faced Kārttikeya)', vahanaHi: 'सिंह (षडानन कार्तिकेय की माता)', chakraEn: 'Viśuddha Chakra', chakraHi: 'विशुद्ध चक्र', color: '#38BDF8' },
  { num: 6, nameHi: 'कात्यायनी', nameEn: 'Kātyāyanī', mantraHi: 'ॐ देवी कात्यायन्यै नमः॥', mantraEn: 'Om Devi Katyayanyai Namah', vahanaEn: 'Golden Lion (Mahiṣāsura Slayer)', vahanaHi: 'सिंह (महिषासुरमर्दिनी)', chakraEn: 'Ājñā Chakra', chakraHi: 'आज्ञा चक्र', color: '#A855F7' },
  { num: 7, nameHi: 'कालरात्रि', nameEn: 'Kālarātri', mantraHi: 'ॐ देवी कालरात्र्यै नमः॥', mantraEn: 'Om Devi Kalaratryai Namah', vahanaEn: 'Gardabha (Ass) · Fierce Protector', vahanaHi: 'गर्दभ वाहन · शुभंकरी', chakraEn: 'Sahasrāra Threshold', chakraHi: 'सहस्रार द्वार', color: '#6366F1' },
  { num: 8, nameHi: 'महागौरी', nameEn: 'Mahāgaurī', mantraHi: 'ॐ देवी महागौर्यै नमः॥', mantraEn: 'Om Devi Mahagauryai Namah', vahanaEn: 'White Bull (Śvetavṛṣabha)', vahanaHi: 'श्वेत वृषभ एवं डमरू-त्रिशूल', chakraEn: 'Somacakra Purity', chakraHi: 'सोमचक्र विशुद्धि', color: '#EC4899' },
  { num: 9, nameHi: 'सिद्धिदात्री', nameEn: 'Siddhidātrī', mantraHi: 'ॐ देवी सिद्धिदात्र्यै नमः॥', mantraEn: 'Om Devi Siddhidatryai Namah', vahanaEn: 'Red Lotus & Lion (Bestower of 8 Siddhis)', vahanaHi: 'कमल एवं सिंह (अष्ट-सिद्धि दात्री)', chakraEn: 'Pūrṇa Sahasrāra Union', chakraHi: 'पूर्ण सहस्रार ऐक्य', color: '#F59E0B' }
];

const NavadurgaMandalaStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = NAVADURGA_9[selectedIdx];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#FB7185]/45 bg-[#15080D] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#FB7185]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FB7185] font-bold block">
            {t('SEAL 07 LIVE INTERACTIVE STUDIO · NAVADURGĀ 9-PETAL MANDALA', 'मुद्रिका ०७ जीवंत संवादात्मक कक्ष · नवदुर्गा नव-दल मण्डल')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              '॥ श्री नवदुर्गाभ्यो नमः ॥ — Nine Divine Manifestations of Maa Durgā Interactive Lotus',
              '॥ श्री नवदुर्गाभ्यो नमः ॥ — माँ दुर्गा के नौ दिव्य स्वरूपों का संवादात्मक पद्म-मण्डल'
            )}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[350px] aspect-square rounded-2xl border border-[#FB7185]/30 bg-[#0C0407] p-3">
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <circle cx="180" cy="180" r="154" fill="none" stroke="#FB7185" strokeWidth="1.2" opacity="0.35" />
              {NAVADURGA_9.map((d, idx) => {
                const a = ((idx * 40 - 90) * Math.PI) / 180;
                const nx = 180 + Math.cos(a) * 118;
                const ny = 180 + Math.sin(a) * 118;
                const active = selectedIdx === idx;
                return (
                  <g key={d.num} className="cursor-pointer" onClick={() => setSelectedIdx(idx)}>
                    <line x1="180" y1="180" x2={nx} y2={ny} stroke={d.color} strokeWidth={active ? 2.2 : 1} opacity={active ? 0.9 : 0.35} />
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 22 : 16}
                      fill={active ? d.color : '#220B14'}
                      stroke={d.color}
                      strokeWidth="2"
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      textAnchor="middle"
                      fill={active ? '#0C0407' : '#FECDD3'}
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {`0${d.num}`}
                    </text>
                  </g>
                );
              })}
              <circle cx="180" cy="180" r="40" fill="#220B14" stroke={current.color} strokeWidth="2.5" />
              <text x="180" y="177" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold">
                {current.nameHi}
              </text>
              <text x="180" y="192" textAnchor="middle" fill="#FDA4AF" fontSize="8" fontFamily="monospace">
                {`DAY 0${current.num}`}
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
            {NAVADURGA_9.map((d, idx) => (
              <button
                key={d.num}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-[#2E0F1B] border-[#FB7185] text-white shadow'
                    : 'bg-[#1B0810] border-white/10 text-[#FECDD3]/80 hover:border-[#FB7185]/50'
                }`}
              >
                <div className="font-mono text-[9.5px] font-bold" style={{ color: d.color }}>
                  0{d.num}. {d.nameHi}
                </div>
                <div className="font-serif text-xs font-bold truncate">{d.nameEn}</div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-[#FB7185]/45 bg-[#210A13] space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-[#FB7185]/20 text-[#FECDD3] font-mono text-xs font-bold">
                {t(`Navarātri Day 0${current.num} · ${current.chakraEn}`, `नवरात्रि दिवस ०${current.num} · ${current.chakraHi}`)}
              </span>
              <span className="font-mono text-xs text-[#FDE047]">{t(current.vahanaEn, current.vahanaHi)}</span>
            </div>
            <h4 className="text-2xl font-serif font-bold text-white">
              0{current.num}. {current.nameHi} — {current.nameEn}
            </h4>
            <div className="p-3.5 rounded-lg bg-[#12050A] border border-[#FDE047]/40 text-center space-y-1">
              <div className="text-lg sm:text-xl font-serif font-bold text-[#FDE047]">{current.mantraHi}</div>
              <div className="text-xs font-mono text-[#FDA4AF]">{current.mantraEn}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 7. SEAL 04: BHAIRAVAGAṆA (भैरवगण · SHA-04) — NIRUKTI, 8, 52 & 64 BHAIRAVAS STUDIO
// ============================================================================
const BHAIRAVAGANA_NIRUKTI_NODES = [
  {
    id: 'bhai',
    syllableDevanagari: 'भै',
    syllableIAST: 'BHAI — Bharaṇa (भरण)',
    roleEn: 'Cosmic Maintenance, Support & Nourishment',
    roleHi: 'विश्व का धारण, पोषण एवं संरक्षण',
    descEn: 'In Abhinavagupta’s Tantrāloka (1.96), the first syllable BHAI signifies bharaṇa—he who bears, sustains, and nourishes the entire universe within his consciousness.',
    descHi: 'तन्त्रालोक (१.९६) के अनुसार प्रथम अक्षर "भै" का अर्थ "भरण" है—जो संपूर्ण विश्व को अपनी चेतना में धारण और पोषित करते हैं।',
    color: '#F59E0B'
  },
  {
    id: 'ra',
    syllableDevanagari: 'र',
    syllableIAST: 'RA — Ravaṇa (रवण)',
    roleEn: 'Cosmic Sounding Forth (Nāda) & Withdrawal (Saṃhāra)',
    roleHi: 'नाद-गर्जन एवं संहार / अंतर्लय',
    descEn: 'The second syllable RA signifies ravaṇa—the primordial roar of mantra-nāda that shatters fear (bhaya) and reabsorbs all differentiated forms.',
    descHi: 'द्वितीय अक्षर "र" का अर्थ "रवण" है—वह प्रचण्ड नाद जो भय का नाश करता है और प्रलय-काल में सृष्टि का संहार/अंतर्लय करता है।',
    color: '#EF4444'
  },
  {
    id: 'va',
    syllableDevanagari: 'व',
    syllableIAST: 'VA — Vamana (वमन)',
    roleEn: 'Cosmic Projection & Emission (Sṛṣṭi)',
    roleHi: 'सृष्टि का प्रक्षेपण एवं उन्मेष',
    descEn: 'The third syllable VA signifies vamana—projecting or emitting the 36 tattvas and the manifold Bhairavagaṇa retinues into manifestation.',
    descHi: 'तृतीय अक्षर "व" का अर्थ "वमन" है—जो ३६ तत्त्वों और भैरवगण के बहुआयामी स्वरूपों को सृष्टि में प्रकट करते हैं।',
    color: '#38BDF8'
  },
  {
    id: 'ashta',
    syllableDevanagari: '८',
    syllableIAST: 'Aṣṭa Bhairava (अष्ट भैरव · 8)',
    roleEn: 'Asitāṅga, Ruru, Caṇḍa, Krodha, Unmatta, Kapāla, Bhīṣaṇa, Saṃhāra',
    roleHi: 'आठ दिशात्मक भैरव एवं अष्ट मातृका युग्म',
    descEn: 'The eight directional octad at the core of the Bhairavagaṇa, paired with the Eight Mātṛkās to govern the eight compass octants.',
    descHi: 'भैरवगण के मूल में स्थित आठ दिशात्मक भैरव, जो अष्ट मातृकाओं के साथ आठों दिशाओं का अधिष्ठान करते हैं।',
    color: '#A855F7'
  },
  {
    id: 'bavan',
    syllableDevanagari: '५२',
    syllableIAST: 'Bāvan Bhairava (1. Asitāṅga to 52. Svacchanda)',
    roleEn: '52 Canonical Forms from Asitāṅga Bhairava to Svacchanda Bhairava',
    roleHi: '१. असितांग भैरव से ५२. स्वछंद भैरव तक ५२ स्वरूप',
    descEn: 'The 52 Bhairavas (Table 01 below) spanning Asitāṅga (#1), Mahākāla (#2), Kāla (#4), Baṭuka (#31), Svarṇākarṣaṇa (#48), Kapāla (#50), to Svacchanda Bhairava (#52).',
    descHi: 'नीचे तालिका ०१ में सूचीबद्ध १. असितांग भैरव से ५२. स्वछंद भैरव पर्यन्त बावन भैरव स्वरूप।',
    color: '#10B981'
  },
  {
    id: 'chausath',
    syllableDevanagari: '६४',
    syllableIAST: 'Catuḥṣaṣṭi Bhairava (चतुःषष्टि भैरव · 8 × 8 = 64)',
    roleEn: '64 Mandala Consorts & Kāśī Kṣetrapāla Retinues',
    roleHi: '६४ योगिनी-सहचर भैरव एवं काशी क्षेत्रपाल गण',
    descEn: 'When each of the 8 Bhairavas expands into an octad (8 × 8 = 64), they form the 64 Bhairavas presiding with the 64 Yoginīs and Kṣetrapālas of Kāśī.',
    descHi: 'अष्ट भैरवों के ८ × ८ = ६४ विस्तार से निर्मित चतुःषष्टि भैरव एवं काशी के कोतवाल काल भैरव के क्षेत्रपाल गण।',
    color: '#F43F5E'
  }
];

const BhairavaganaTaxonomyStudio: React.FC<{ lang: 'en' | 'hi' }> = ({ lang }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = BHAIRAVAGANA_NIRUKTI_NODES[selectedIdx];
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="rounded-2xl border-2 border-[#FFBF38]/50 bg-[#130C06] text-[#F5E8CE] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#FFBF38]/25">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFBF38] font-bold block">
            {t('SEAL 04 LIVE INTERACTIVE STUDIO · BHAIRAVAGAṆA (SHA-04)', 'मुद्रिका ०४ जीवंत संवादात्मक कक्ष · भैरवगण (SHA-04)')}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            {t(
              'Bhairavagaṇa (भैरवगण): BHAI-RA-VA Nirukti & 1 → 8 → 52 → 64 Retinue Expansion',
              'भैरवगण: भै-र-व निरुक्ति (भरण-रवण-वमन) एवं १ → ८ → ५२ → ६४ भैरव मण्डल विस्तार'
            )}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#FFBF38]/15 border border-[#FFBF38]/40 font-mono text-[10px] text-[#FFBF38] uppercase">
          {t('Tantrāloka 1.96 · CAGS SHA-04', 'तन्त्रालोक १.९६ · CAGS SHA-04')}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[350px] aspect-square rounded-2xl border border-[#FFBF38]/30 bg-[#0A0603] p-3">
            <svg viewBox="0 0 360 360" className="w-full h-full">
              <circle cx="180" cy="180" r="154" fill="none" stroke="#FFBF38" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <circle cx="180" cy="180" r="118" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
              <polygon points="180,68 277,236 83,236" fill="none" stroke="#FFBF38" strokeWidth="1.5" opacity="0.45" />
              <polygon points="180,292 277,124 83,124" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.45" />

              {BHAIRAVAGANA_NIRUKTI_NODES.map((node, idx) => {
                const a = ((idx * 60 - 90) * Math.PI) / 180;
                const nx = 180 + Math.cos(a) * 118;
                const ny = 180 + Math.sin(a) * 118;
                const active = selectedIdx === idx;
                return (
                  <g key={node.id} className="cursor-pointer" onClick={() => setSelectedIdx(idx)}>
                    <line x1="180" y1="180" x2={nx} y2={ny} stroke={node.color} strokeWidth={active ? 2.4 : 1} opacity={active ? 0.9 : 0.35} />
                    <circle
                      cx={nx}
                      cy={ny}
                      r={active ? 24 : 18}
                      fill={active ? node.color : '#1F1209'}
                      stroke={node.color}
                      strokeWidth="2"
                    />
                    <text
                      x={nx}
                      y={ny + 4}
                      textAnchor="middle"
                      fill={active ? '#0A0603' : '#FDE68A'}
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {node.syllableDevanagari}
                    </text>
                  </g>
                );
              })}

              <circle cx="180" cy="180" r="42" fill="#1C1008" stroke={current.color} strokeWidth="2.5" />
              <text x="180" y="176" textAnchor="middle" fill="#FDE047" fontSize="12" fontWeight="bold">
                भैरवगण
              </text>
              <text x="180" y="192" textAnchor="middle" fill="#FDBA74" fontSize="8.5" fontFamily="monospace">
                SHA-04
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BHAIRAVAGANA_NIRUKTI_NODES.map((node, idx) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-[#2C1A0C] border-[#FFBF38] text-white shadow'
                    : 'bg-[#190F07] border-white/10 text-[#FDE68A]/80 hover:border-[#FFBF38]/50'
                }`}
              >
                <div className="font-mono text-[10px] font-bold" style={{ color: node.color }}>
                  {node.syllableDevanagari} · {node.syllableIAST.split('—')[0]}
                </div>
                <div className="font-serif text-xs font-bold truncate mt-0.5">{t(node.roleEn, node.roleHi)}</div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-[#FFBF38]/45 bg-[#1D1209] space-y-2.5">
            <span className="px-2.5 py-0.5 rounded bg-[#FFBF38]/20 text-[#FDE047] font-mono text-[10px] font-bold uppercase">
              {current.syllableIAST}
            </span>
            <h4 className="text-xl font-serif font-bold text-white">{t(current.roleEn, current.roleHi)}</h4>
            <p className="text-xs sm:text-sm font-serif text-[#F5E8CE]/90 leading-relaxed">
              {t(current.descEn, current.descHi)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MASTER DISPATCHER FOR SPECIALIZED SEAL UNITS
// ============================================================================
export const SpecializedSealInteractiveStudio: React.FC<StudioProps> = ({ articleSlug, lang = 'en' }) => {
  switch (articleSlug) {
    case 'jaya-vijaya-vaikuntha-dvarapalas':
      return <JayaVijayaStudio lang={lang} />;
    case 'aghora-sampradaya-history-theology':
    case 'ghora-sampradaya-11-bhedas-study':
    case 'kapalika-sampradaya-5-bhedas-somasiddhanta':
      return <AghoraSampradayaStudio articleSlug={articleSlug} lang={lang} />;
    case 'samaya-ashta-prahar-timekeeping':
      return <SamayaAshtaPraharStudio lang={lang} />;
    case 'bhairavagana-taxonomy-kshetrapalas':
      return <BhairavaganaTaxonomyStudio lang={lang} />;
    case 'kalikula-srikula-streams':
    case 'kalikula-archive-tradition':
    case 'srikula-archive-tradition':
      return <KalikulaSrikulaStudio lang={lang} />;
    case 'navadurga-nine-forms':
      return <NavadurgaMandalaStudio lang={lang} />;
    case 'shakti-pithas-sacred-geography':
    case 'bavan-bhairava-chhappan-kalua-concordance':
      return <BavanBhairavaMandalaStudio lang={lang} />;
    case 'tithi-nitya-devi-shodasha-archive':
      return <TithiNityaDeviMoonStudio lang={lang} />;
    case 'chhatris-yakshini-uddameshwara-tantra-archive':
      return <Yakshini36MandalaStudio lang={lang} />;
    case 'vetala-trividha-prakriti-archive':
      return <VetalaTriGunaStudio lang={lang} />;
    case 'vishnu-dashavatara-ten-avatars-codex':
      return <VishnuDashavataraExperience initialAvatarIndex={0} />;
    default: {
      const matchedAvatar = VISHNU_DASHAVATARA_ENTRIES.find(
        (entry) => entry.slug === articleSlug
      );
      if (matchedAvatar) {
        return <VishnuDashavataraExperience initialAvatarIndex={matchedAvatar.index} />;
      }
      return null;
    }
  }
};
