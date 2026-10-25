import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Radio,
  Zap,
  Thermometer,
  Droplet,
  Layers,
  Eye,
  ArrowLeft,
  ArrowRight,
  Compass,
  BookOpen,
  Flame,
  Sparkles,
  Shield,
  Sun,
  Activity,
  Mountain
} from 'lucide-react';
import AshtaBhairavaExperience from './AshtaBhairavaExperience';
import Matrix64Chapter from './Matrix64Chapter';
import MatrikaExperience from './MatrikaExperience';
import ShriMeruExperience from './ShriMeruExperience';

interface MethodologyNode {
  id: string;
  name: string;
  sanskritTerm: string;
  shortDesc: string;
  fullPrinciple: string;
  sanskritVerse: string;
  translation: string;
  scientificConcept: string;
  activeCase: string;
  icon: React.ComponentType<any>;
  angle: number;
}

interface BhairavCodexEntry {
  id: string;
  codexId: string;
  selectorLabel: string;
  nodeShortLabel: string;
  category: string;
  evidenceStatus: string;
  title: string;
  interpretiveFrame: string;
  investigationPrinciple: string;
  researchMethod: string;
  sourceRegister: string;
  caseStudyPrompt: string;
  importantDistinction: string;
  icon: React.ComponentType<any>;
  angle: number;
}

const EMPIRICAL_NODES: MethodologyNode[] = [
  {
    id: 'node-acoustic',
    name: 'Acoustic Resonance',
    sanskritTerm: 'Nada-Shastra',
    shortDesc: 'Acoustic standing waves and elliptical sound amplification in temple sanctums.',
    fullPrinciple: 'Ancient Indian temples were often carved in ellipsoidal or dome shapes using high-quartz granite blocks. When speakers chant deep pitch notes in the center, the vaults mirror frequencies between 110Hz and 130Hz—the exact frequency of a deep male baritone. This creates a powerful acoustic feedback loop, making the space hum as if alive and triggering profound psychological state shifts in subjects.',
    sanskritVerse: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति॥',
    translation: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone."',
    scientificConcept: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
    activeCase: 'The Musical Pillars of Vittala, Hampi',
    icon: Radio,
    angle: 0
  },
  {
    id: 'node-geomagnetic',
    name: 'Geomagnetic Friction',
    sanskritTerm: 'Bhu-Marma',
    shortDesc: 'Subterranean fault line friction inducing high electromagnetic fluxes.',
    fullPrinciple: 'Tectonic friction points and groundwater faults can emit continuous, micro-frequency electromagnetic currents. When a structure sits directly atop a geomagnetic joint (Marma), the intense magnetic field changes affect human temporal lobes, occasionally triggering mild visual shadows in peripheral vision, dizziness, and intense lucid dreaming.',
    sanskritVerse: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते॥',
    translation: '"Where the core joints of the earth are knit, there an invisible current of force is generated."',
    scientificConcept: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
    activeCase: 'The Natural Fields of Kuldhara Village',
    icon: Zap,
    angle: 72
  },
  {
    id: 'node-thermal',
    name: 'Thermodynamic Inversion',
    sanskritTerm: 'Ushna-Saman',
    shortDesc: 'Cold-spot formations caused by gaseous seeps and masonry thermal gaps.',
    fullPrinciple: 'Alleged "cold spots" are analyzed through strict thermodynamics. In places built with dry-stone, mortar-less masonry, small cracks seeping deep subterranean radon or compressed carbon dioxide gases create sudden, physical local cooling. Ambient moisture condenses instantly, creating draft currents and visible mist pockets that mimic apparitions.',
    sanskritVerse: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं॥',
    translation: '"The localized chill of the stones is produced slowly by the upward movement of deep air."',
    scientificConcept: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
    activeCase: 'The Gateway cold-spots of Bhangarh Fort',
    icon: Thermometer,
    angle: 144
  },
  {
    id: 'node-chemistry',
    name: 'Environmental Chemistry',
    sanskritTerm: 'Rasa-Vijnana',
    shortDesc: 'Ionization currents and trace heavy minerals in groundwater faultlines.',
    fullPrinciple: 'Natural mineral faultlines, heavy metal deposits (such as iron oxide, magnetite, or radioactive thorium-rich monazite) dissolve into local subterranean aquifers. Chronic ingestion or close proximity to these highly ionized water sources leads to distinct physiological changes, including high cell replication rates, altered hormone production, and mild perceptual distortion.',
    sanskritVerse: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति॥',
    translation: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life."',
    scientificConcept: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
    activeCase: 'The Thorium Aquifers of Kodinhi',
    icon: Droplet,
    angle: 216
  },
  {
    id: 'node-structural',
    name: 'Architectural Waveguides',
    sanskritTerm: 'Vastu-Mandala',
    shortDesc: 'The geometry of stone layouts focusing low-frequency environmental waves.',
    fullPrinciple: 'Pyramidal, concentric, and square-within-square temple layouts function similarly to modern radio waveguides. By aligning heavy granite structures to cardinal coordinates, these layouts trap and focus low-frequency ambient environmental waves (such as wind friction or microseisms), turning the building itself into a passive energetic resonator.',
    sanskritVerse: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति॥',
    translation: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine."',
    scientificConcept: 'Concentric Dielectric Waveguides & Environmental RF Traps',
    activeCase: 'The Ellipsoidal Sanctums of Western Ghats',
    icon: Layers,
    angle: 288
  }
];

const BHAIRAV_CODEX_ENTRIES: BhairavCodexEntry[] = [
  {
    id: 'bhairav-asitanga',
    codexId: 'BH-001',
    selectorLabel: '1. Asitanga Bhairava',
    nodeShortLabel: 'Asitanga',
    category: 'ASHTA BHAIRAVA · EAST',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    title: 'ASITANGA BHAIRAVA',
    interpretiveFrame:
      '“Representing creative articulation and the eastern directional threshold, Asitanga Bhairava anchors the first octant of the Ashta Bhairava mandala in Shaiva Agamic cosmology.”',
    investigationPrinciple:
      'Examine documented representations of Asitanga Bhairava across Kashi and South Indian Shaiva temple programs. Associated in traditional compendia with the Brahmi Matrika, a swan (hamsa) vahana, and golden-white iconography bearing japa-mala, kamandalu, khadga, and trishula. Compare regional shrine alignments in Varanasi (Vriddhakaleshwar / Kashi Vishwanath perimeter) with Agamic directional prescriptions.',
    researchMethod: 'Comparative iconography · Sacred-geographical triangulation',
    sourceRegister: 'Shaiva Agamas · Kashi Khanda · Archaeological shrine surveys',
    caseStudyPrompt:
      'Investigate the directional placement and iconographic attributes of Asitanga Bhairava shrines in Varanasi in relation to classical Ashta Bhairava lists.',
    importantDistinction:
      'Regional lists occasionally vary in secondary attributes; verify specific shrine provenance and inscriptional records before equating local folk narratives with canonical Agamic descriptions.',
    icon: Sun,
    angle: -90
  },
  {
    id: 'bhairav-ruru',
    codexId: 'BH-002',
    selectorLabel: '2. Ruru Bhairava',
    nodeShortLabel: 'Ruru',
    category: 'ASHTA BHAIRAVA · SOUTHEAST',
    evidenceStatus: 'SCHOLARLY INTERPRETATION',
    title: 'RURU BHAIRAVA',
    interpretiveFrame:
      '“Positioned at the southeastern vector, Ruru Bhairava embodies austere discipline, instructional authority, and the mastery of vital currents across Shaiva visual traditions.”',
    investigationPrinciple:
      'Document sculptural and textual depictions of Ruru Bhairava, traditionally paired with Maheshvari and mounted upon an ox (vrishabha). Analyze the recurring motifs of akshamala, ankusha, vina/lute or pustaka, and kapala in medieval Chola and Deccan bronzes, alongside the living pilgrimage circuit linking the Ruru Bhairava shrine near Hanuman Ghat in Kashi.',
    researchMethod: 'Bronzes & stone relief analysis · Pilgrimage route mapping',
    sourceRegister: 'Museum bronze catalogues · Sthala Puranas · Field documentation',
    caseStudyPrompt:
      'Compare South Indian bronze depictions of Ruru Bhairava with the living ritual geography of the Ruru Bhairava shrine in Varanasi.',
    importantDistinction:
      'Distinguish between the narrative myth of the demon Ruru in Purana literature and the technical Agamic classification of Ruru as one of the eight directional Bhairavas.',
    icon: Shield,
    angle: -45
  },
  {
    id: 'bhairav-chanda',
    codexId: 'BH-003',
    selectorLabel: '3. Chanda Bhairava',
    nodeShortLabel: 'Chanda',
    category: 'ASHTA BHAIRAVA · SOUTH',
    evidenceStatus: 'CULTURAL & TEXTUAL TRADITION',
    title: 'CHANDA BHAIRAVA',
    interpretiveFrame:
      '“Guarding the southern threshold, Chanda Bhairava signifies fierce kinetic momentum, solar intensity, and the cutting away of stagnation at the boundary of sacred precincts.”',
    investigationPrinciple:
      'Investigate the pairing of Chanda Bhairava with Kaumari and the peacock (mayura) vahana in classical Ashta Bhairava schemas. Examine weapons and attributes—agni (fire), shakti (spear), gada, and kunda—and document the spatial relationship between the Chanda Bhairava shrine (Durga Kund sector, Varanasi) and surrounding Shakta-Shaiva sacred topography.',
    researchMethod: 'Spatial-topographical survey · Comparative textual study',
    sourceRegister: 'Tantrasara · Kashi pilgrimage manuals · Heritage site records',
    caseStudyPrompt:
      'Examine how Chanda Bhairava functions as a southern directional guardian within shared Shaiva-Shakta temple complexes.',
    importantDistinction:
      'Do not conflate fierce protective iconography with malevolence; in Agamic texts, Chanda denotes concentrated transformative force rather than disorder.',
    icon: Flame,
    angle: 0
  },
  {
    id: 'bhairav-krodha',
    codexId: 'BH-004',
    selectorLabel: '4. Krodha Bhairava',
    nodeShortLabel: 'Krodha',
    category: 'ASHTA BHAIRAVA · SOUTHWEST',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    title: 'KRODHA BHAIRAVA',
    interpretiveFrame:
      '“Aligned with the southwestern octant, Krodha Bhairava represents sovereign wrath directed against existential delusion and structural decay.”',
    investigationPrinciple:
      'Study Krodha Bhairava’s association with the Vaishnavi Matrika and the eagle (garuda) vahana across Tantric manuals and temple reliefs. Document the symbolic pairing of shankha, chakra, gada, and kapala—illustrating the synthesis of Shaiva and Vaishnava iconographic vocabularies within the Ashta Bhairava system.',
    researchMethod: 'Syncretic iconography · Primary-source philology',
    sourceRegister: 'Agamic compendia · Temple architectural surveys · Art history archives',
    caseStudyPrompt:
      'Analyze the presence of Vaishnava-associated emblems (shankha, chakra, garuda) within the canonical iconography of Krodha Bhairava.',
    importantDistinction:
      'Maintain a clear distinction between psychological anger and the technical Tantric category of Krodha-deities as protective, boundary-maintaining manifestations.',
    icon: Zap,
    angle: 45
  },
  {
    id: 'bhairav-unmatta',
    codexId: 'BH-005',
    selectorLabel: '5. Unmatta Bhairava',
    nodeShortLabel: 'Unmatta',
    category: 'ASHTA BHAIRAVA · WEST',
    evidenceStatus: 'CULTURAL TRADITION',
    title: 'UNMATTA BHAIRAVA',
    interpretiveFrame:
      '“Occupying the western vector, Unmatta Bhairava embodies ecstatic transcendence beyond conventional dualities and ordinary cognitive constraints.”',
    investigationPrinciple:
      'Examine textual and ethnographic accounts of Unmatta Bhairava, paired with Varahi and associated with the horse (ashva) vahana. Investigate the placement of the Unmatta Bhairava shrine along the Panchakroshi pilgrimage route (Deura, Varanasi) and compare prescribed attributes—khadga, khetaka, parigha, and bhindipala—with surviving sculptural examples.',
    researchMethod: 'Ethnographic contextualization · Pilgrimage cartography',
    sourceRegister: 'Panchakroshi Yatra records · Regional field studies · Iconographic texts',
    caseStudyPrompt:
      'Trace the role of Unmatta Bhairava along the outer Panchakroshi sacred boundary of Kashi and its relationship to liminal consciousness in Shaiva thought.',
    importantDistinction:
      'In Sanskrit philosophical literature, “Unmatta” denotes ecstatic non-ordinary awareness rather than clinical pathology; interpret textual passages within their proper soteriological context.',
    icon: Sparkles,
    angle: 90
  },
  {
    id: 'bhairav-kapala',
    codexId: 'BH-006',
    selectorLabel: '6. Kapala Bhairava',
    nodeShortLabel: 'Kapala',
    category: 'ASHTA BHAIRAVA · NORTHWEST',
    evidenceStatus: 'PRIMARY SOURCE & ARCHIVAL STUDY',
    title: 'KAPALA BHAIRAVA',
    interpretiveFrame:
      '“At the northwestern threshold, Kapala Bhairava foregrounds the skull-bowl emblem—recalling the transient vessel of mortality and the origin myth of Brahma-kapala.”',
    investigationPrinciple:
      'Investigate the historical and textual links between Kapala Bhairava (paired with Indrani, elephant/gaja vahana) and ascetic Kapalika lineages documented in medieval Sanskrit literature and inscriptions. Examine the attributes of vajra, pasha, khadga, and kapala, and survey the Lat Bhairav / Kapala Mochan sacred tank precinct in Varanasi.',
    researchMethod: 'Epigraphic & historical analysis · Sacred hydrology survey',
    sourceRegister: 'Purana texts · Epigraphia Indica · Varanasi heritage documentation',
    caseStudyPrompt:
      'Examine the architectural and historical relationship between the Kapala Mochan Teerth and the Kapala Bhairava tradition in Kashi.',
    importantDistinction:
      'Separate polemical depictions of Kapalika ascetics in medieval plays from verifiable epigraphic and textual sources produced within Shaiva traditions.',
    icon: BookOpen,
    angle: 135
  },
  {
    id: 'bhairav-bhishana',
    codexId: 'BH-007',
    selectorLabel: '7. Bhishana Bhairava',
    nodeShortLabel: 'Bhishana',
    category: 'ASHTA BHAIRAVA · NORTH',
    evidenceStatus: 'SCHOLARLY INTERPRETATION',
    title: 'BHISHANA BHAIRAVA',
    interpretiveFrame:
      '“Guarding the northern vector, Bhishana Bhairava confronts dread itself, standing at the threshold where awe and dissolution intersect.”',
    investigationPrinciple:
      'Document the iconography of Bhishana Bhairava, paired in Tantric classifications with Chamunda and associated with the preta (corpse/spirit) or lion vehicle. Analyze the symbolic function of khadga, shula, kapala, and musala (pestle), and study the Bhishana Bhairava shrine (Bhoot Bhairav / Kashipura sector) within the urban mandala of Varanasi.',
    researchMethod: 'Symbolic & ritual analysis · Urban sacred-space mapping',
    sourceRegister: 'Shakta-Shaiva Tantras · Urban anthropology studies · Shrine registries',
    caseStudyPrompt:
      'Investigate how northern-sector Bhairava shrines in Varanasi mediate concepts of fear, protection, and threshold guardianship.',
    importantDistinction:
      'Approach cremation-ground and fierce imagery through documented theological frameworks rather than sensationalized occult tropes.',
    icon: Compass,
    angle: 180
  },
  {
    id: 'bhairav-samhara',
    codexId: 'BH-008',
    selectorLabel: '8. Samhara Bhairava',
    nodeShortLabel: 'Samhara',
    category: 'ASHTA BHAIRAVA · NORTHEAST',
    evidenceStatus: 'ICONOGRAPHIC & TEXTUAL RECORD',
    title: 'SAMHARA BHAIRAVA',
    interpretiveFrame:
      '“Completing the eightfold cycle in the auspicious northeast (Ishanya), Samhara Bhairava governs cosmic reabsorption—dissolving exhausted forms back into undivided consciousness.”',
    investigationPrinciple:
      'Examine the ten-armed or multi-armed depictions of Samhara Bhairava paired with Chandika and the lion (simha) vahana. Analyze how “Samhara” (reabsorption/dissolution) functions as the culminating phase of the five cosmic acts (Pancha-kritya) in Kashmir Shaiva and Siddhanta philosophy, rather than mere destruction.',
    researchMethod: 'Comparative philosophy · Iconographic taxonomy',
    sourceRegister: 'Kashmir Shaiva treatises · Agamic manuals · Temple sculpture archives',
    caseStudyPrompt:
      'Trace the philosophical meaning of Samhara in Shaiva cosmology and its visual translation in the eighth node of the Ashta Bhairava mandala.',
    importantDistinction:
      'In Sanskrit cosmology, Samhara is cyclic withdrawal prior to renewal, distinct from linear apocalyptic destruction.',
    icon: Mountain,
    angle: 225
  }
];

const KAAL_BHAIRAV_CORE_ENTRY: BhairavCodexEntry = {
  id: 'bhairav-kaal',
  codexId: 'BH-CORE',
  selectorLabel: 'Kaal Bhairava (Supreme Core)',
  nodeShortLabel: 'Kaal Bhairava',
  category: 'ADHIPATI · SUPREME SOVEREIGN CORE',
  evidenceStatus: 'PRIMARY SOURCE & LIVING TRADITION',
  title: 'KAAL BHAIRAVA — THE SOVEREIGN AXIS',
  interpretiveFrame:
    '“At the center of the eightfold directional mandala stands Kaal Bhairava—Sovereign of Time (Kala), Kotwal (Chief Magistrate) of Kashi, and the axis from which the Ashta Bhairavas emanate.”',
  investigationPrinciple:
    'Investigate Kaal Bhairava as the central unifying principle of the Bhairava tradition. In Purana, Agama, and the living religious civic order of Varanasi, Kaal Bhairava governs temporal finitude, karmic accountability, and sacred jurisdiction. Examine the historical continuity of the Kaal Bhairav Mandir in Varanasi, the shvan (dog) vahana, and how the eight directional Bhairavas form a protective geometric perimeter around this central axis.',
  researchMethod: 'Multidisciplinary synthesis · Textual, iconographic & ethnographic study',
  sourceRegister: 'Shiva Purana · Kashi Khanda · Archaeological & ethnographic records',
  caseStudyPrompt:
    'Examine how Kaal Bhairava functions simultaneously as a metaphysical personification of Time (Mahakala/Kala) and as the civic-religious guardian (Kotwal) of Varanasi.',
  importantDistinction:
    'Treat Kaal Bhairava as the central sovereign archetype unifying the eight directional manifestations, documenting both classical Sanskrit sources and living community traditions.',
  icon: Activity,
  angle: 0
};

export default function PhilosophySection() {
  // 0 = Empirical Field Methodology, 1 = Ashta Bhairava, 2 = Bhairav Investigation Codex, 3 = 64 Matrix, 4 = The Eight Matrikas, 5 = Shri Meru Chakra & Ashta Matrika
  const TOTAL_CHAPTERS = 6;
  const [viewState, setViewState] = useState<{ index: number; direction: number }>({
    index: 0,
    direction: 1
  });
  const [selectedEmpiricalId, setSelectedEmpiricalId] = useState('node-acoustic');
  const [selectedBhairavId, setSelectedBhairavId] = useState('bhairav-asitanga');
  const [focusedBhairavaProfileIdx, setFocusedBhairavaProfileIdx] = useState<number>(0);
  const [focusedMatrikaProfileIdx, setFocusedMatrikaProfileIdx] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const isAshtaExhibitView = viewState.index === 1;
  const isBhairavView = viewState.index === 2;
  const isMatrix64View = viewState.index === 3;
  const isMatrikaView = viewState.index === 4;
  const isShriMeruView = viewState.index === 5;

  const selectedEmpiricalNode =
    EMPIRICAL_NODES.find(n => n.id === selectedEmpiricalId) || EMPIRICAL_NODES[0];
  const selectedBhairavEntry =
    selectedBhairavId === KAAL_BHAIRAV_CORE_ENTRY.id
      ? KAAL_BHAIRAV_CORE_ENTRY
      : BHAIRAV_CODEX_ENTRIES.find(e => e.id === selectedBhairavId) || BHAIRAV_CODEX_ENTRIES[0];

  const goToChapter = (targetIndex: number) => {
    setViewState(prev => ({
      index: targetIndex,
      direction: targetIndex >= prev.index ? 1 : -1
    }));
  };

  const handlePrevView = () => {
    setViewState(prev => ({
      index: (prev.index - 1 + TOTAL_CHAPTERS) % TOTAL_CHAPTERS,
      direction: -1
    }));
  };

  const handleNextView = () => {
    setViewState(prev => ({
      index: (prev.index + 1) % TOTAL_CHAPTERS,
      direction: 1
    }));
  };

  const slideVariants = {
    enter: (direction: number) =>
      shouldReduceMotion
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: direction > 0 ? 90 : -90 },
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) =>
      shouldReduceMotion
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: direction > 0 ? -90 : 90 }
  };

  return (
    <section
      id="philosophy"
      className="relative py-24 px-2 sm:px-6 md:px-10 lg:px-14 overflow-hidden border-b border-bronze-dark/40 bg-[#17100C]"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/BACKGROUND%202.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Background grain and vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />

      {/* Faint blueprint / geometric grid overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(rgba(197,168,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-[1480px] w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 px-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">
              THE SCIENCE OF MYTH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            RESEARCH PHILOSOPHY
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={`quote-view-${viewState.index}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              className="mt-3 text-base md:text-lg text-ancient-beige/70 font-vintage italic leading-relaxed"
            >
              {isAshtaExhibitView
                ? '“Eight directional forms, eight planetary frequencies, and the central axis of Kaal Bhairava — mapped across sacred space and cosmic octave.”'
                : isMatrix64View
                  ? '“Eight Bhairavas intersecting eight Matrikas across 64 combinatorial vectors — an interactive comparative research matrix.”'
                  : isMatrikaView
                    ? '“Eight archetypal Matrika profiles and eight animated visual systems — exploring symbolic cybernetic, elemental, and sacred-geographical mappings.”'
                    : isShriMeruView
                      ? '“One Yantra, Nine Enclosures, Forty-Four Triangles, and the Eight Mothers of the Bhūpura — a continuous geometric journey inward to the Bindu.”'
                      : isBhairavView
                        ? '“We do not approach Bhairav through fear alone. We investigate the traditions, symbols, histories, and evidence through which Bhairav is understood.”'
                        : '"We do not debunk. We do not mythologize. We measure."'}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Main Wrapper with Left/Right Arrows Beside the Shifting Div */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-3 md:gap-5">
          {/* Left Arrow Beside the Div */}
          <button
            type="button"
            onClick={handlePrevView}
            aria-label="Previous research philosophy view"
            className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-full border border-[#5A3922] bg-[#17100C]/90 text-[#D3AD55] flex items-center justify-center transition-all duration-300 motion-reduce:transition-none hover:border-[#D3AD55] hover:bg-[#D3AD55]/10 hover:shadow-[0_0_15px_rgba(211,173,85,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] cursor-pointer z-30 group"
          >
            <ArrowLeft
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#D3AD55]/85 group-hover:text-[#D3AD55] group-hover:-translate-x-0.5 transition-all duration-300"
              strokeWidth={1.75}
            />
          </button>

          {/* Horizontally Shifting Div Container */}
          <div className="w-full max-w-[1360px] mx-auto overflow-hidden">
            <AnimatePresence mode="wait" custom={viewState.direction}>
              {viewState.index === 0 ? (
                /* VIEW 1: ORIGINAL EMPIRICAL RESEARCH PHILOSOPHY */
                <motion.div
                  key="view-empirical"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Left Side: Circular Interactive Diagram (4 cols on lg) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <div className="relative w-80 h-80 scale-[0.88] sm:scale-100 flex items-center justify-center">
                      {/* Outer Circular Ring */}
                      <div className="absolute inset-0 rounded-full border border-bronze-light/20 border-dashed" />
                      <div className="absolute inset-4 rounded-full border border-gold-faded/10" />

                      {/* Spinning Sanskrit Script Ring */}
                      <svg
                        className="absolute inset-6 w-[252px] h-[252px] text-gold-faded/10 animate-[spin_180s_linear_infinite] motion-reduce:animate-none"
                        viewBox="0 0 100 100"
                      >
                        <path
                          id="circlePath-empirical"
                          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                          fill="none"
                        />
                        <text fontFamily="serif" fontSize="6.5" fill="currentColor" letterSpacing="2">
                          <textPath href="#circlePath-empirical">
                            ऋग् वेद यजुर्वेद सामवेद अथर्ववेद वास्तु शास्त्र शिल्प रहस्य रसार्णव मण्डलम् ॥
                          </textPath>
                        </text>
                      </svg>

                      {/* Connecting Bronze Lines (SVGs radiating from core) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                        {EMPIRICAL_NODES.map(node => {
                          const rad = (node.angle * Math.PI) / 180;
                          const x2 = 100 + Math.cos(rad) * 72;
                          const y2 = 100 + Math.sin(rad) * 72;
                          const isSelected = node.id === selectedEmpiricalNode.id;
                          return (
                            <g key={node.id}>
                              <line
                                x1="100"
                                y1="100"
                                x2={x2}
                                y2={y2}
                                stroke={isSelected ? '#d4af37' : '#3a2e24'}
                                strokeWidth={isSelected ? '1.75' : '0.75'}
                                strokeDasharray={isSelected ? 'none' : '2 2'}
                                className="transition-all duration-300 motion-reduce:transition-none"
                              />
                              {isSelected && (
                                <circle
                                  cx={x2}
                                  cy={y2}
                                  r="3"
                                  fill="#d4af37"
                                  className="animate-ping motion-reduce:animate-none"
                                />
                              )}
                            </g>
                          );
                        })}
                      </svg>

                      {/* Central Core Circle (Gold Medallion) */}
                      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#2a1d15] to-[#0f0a07] border border-gold-warm/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.15)] z-20">
                        <span className="font-serif text-[10px] text-gold-warm tracking-widest font-bold">
                          CAGS
                        </span>
                        <span className="text-[7px] font-mono text-gold-faded/60 uppercase">
                          Varanasi
                        </span>
                      </div>

                      {/* Clickable Peripheral Nodes */}
                      {EMPIRICAL_NODES.map(node => {
                        const rad = (node.angle * Math.PI) / 180;
                        const x = 160 + Math.cos(rad) * 110 - 24;
                        const y = 160 + Math.sin(rad) * 110 - 24;
                        const IconComponent = node.icon;
                        const isSelected = node.id === selectedEmpiricalNode.id;

                        return (
                          <button
                            key={node.id}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={`${node.name} (${node.sanskritTerm})`}
                            onClick={() => {
                              setSelectedEmpiricalId(node.id);
                              const cardEl = document.getElementById('philosophy-manuscript-card');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            style={{ left: `${x}px`, top: `${y}px` }}
                            className={`absolute w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 motion-reduce:transition-none z-30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1512] ${
                              isSelected
                                ? 'bg-gold-warm/20 border-2 border-gold-warm text-gold-warm shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-110'
                                : 'bg-[#1a1512] border border-bronze-dark text-ancient-beige/50 hover:border-gold-faded/50 hover:text-gold-faded'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="text-[6.5px] font-mono tracking-wider uppercase mt-1 text-center w-full truncate px-1">
                              {node.sanskritTerm.split('-')[0]}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 justify-center max-w-sm">
                      {EMPIRICAL_NODES.map(node => {
                        const isSelected = node.id === selectedEmpiricalNode.id;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => {
                              setSelectedEmpiricalId(node.id);
                              const cardEl = document.getElementById('philosophy-manuscript-card');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-warm focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1512] ${
                              isSelected
                                ? 'bg-gold-warm/15 border-gold-warm text-gold-warm font-semibold'
                                : 'bg-ancient-charcoal/30 border-bronze-dark/40 text-ancient-beige/50 hover:border-gold-faded/30 hover:text-gold-faded'
                            }`}
                          >
                            {node.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Side: Ancient Manuscript Sheet (8 cols on lg) */}
                  <div id="philosophy-manuscript-card" className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedEmpiricalNode.id}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                        className="relative p-6 md:px-9 md:py-7 rounded bg-ancient-beige text-[#1c1613] shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-bronze-light/40 overflow-hidden font-vintage paper-grain"
                      >
                        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-[#bfa15f]/15 pointer-events-none" />
                        <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full border border-dashed border-[#bfa15f]/15 pointer-events-none" />

                        <div className="flex flex-wrap justify-between items-center gap-2 border-b border-[#3a2e24]/20 pb-3.5 mb-4">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#544338]">
                              METHODOLOGY CODEX IX
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif text-[#2a1f18] mt-1">
                              {selectedEmpiricalNode.name}
                            </h3>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] font-mono tracking-widest font-bold bg-[#3a2e24]/10 px-2.5 py-1 rounded text-[#2a1f18] uppercase">
                              {selectedEmpiricalNode.sanskritTerm}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-[#ede2d4] border-l-4 border-gold-faded rounded-r mb-5 shadow-inner italic">
                          <p className="text-base sm:text-lg text-[#2a1f18] tracking-wide text-center font-serif leading-relaxed mb-1.5">
                            {selectedEmpiricalNode.sanskritVerse}
                          </p>
                          <p className="text-[12px] text-[#544338] text-center font-sans tracking-wide">
                            {selectedEmpiricalNode.translation}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-serif text-[12px] uppercase tracking-wider text-[#544338] font-bold">
                              Investigation Principle:
                            </h4>
                            <p className="text-[14px] leading-relaxed text-[#2c221a] mt-1">
                              {selectedEmpiricalNode.fullPrinciple}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3a2e24]/15">
                            <div>
                              <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">
                                Empirical Field Term:
                              </h5>
                              <p className="font-sans text-[12px] font-medium text-[#2c221a] mt-0.5">
                                {selectedEmpiricalNode.scientificConcept}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">
                                Benchmark Case Log:
                              </h5>
                              <span className="inline-flex items-center gap-1 font-sans text-[12px] font-semibold text-amber-900 mt-0.5 underline decoration-dotted">
                                <Eye className="w-3.5 h-3.5" />
                                {selectedEmpiricalNode.activeCase}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-between items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#544338]/60 uppercase tracking-widest pt-3.5 border-t border-[#3a2e24]/10">
                          <span>Center for Anomalous Studies</span>
                          <span>Codex No: {selectedEmpiricalNode.id.replace('node-', 'CAGS-0')}</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              ) : viewState.index === 1 ? (
                /* VIEW 2: ASHTA BHAIRAVA — THE EIGHT DIRECTIONS, EIGHT FORMS, EIGHT RESEARCH PROFILES */
                <motion.div
                  key="view-ashta-bhairava-exhibit"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <AshtaBhairavaExperience
                    initialProfileIndex={focusedBhairavaProfileIdx}
                    onNextChapter={() => goToChapter(2)}
                  />
                </motion.div>
              ) : viewState.index === 3 ? (
                /* VIEW 4: CHAPTER A — THE 64 MATRIX (8 BHAIRAVAS × 8 MATRIKAS = 64 INTERSECTIONS) */
                <motion.div
                  key="view-matrix-64"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <Matrix64Chapter
                    onPrevChapter={() => goToChapter(2)}
                    onNextChapter={() => goToChapter(4)}
                    onSelectBhairavaProfile={idx => {
                      setFocusedBhairavaProfileIdx(idx);
                      goToChapter(1);
                    }}
                    onSelectMatrikaProfile={idx => {
                      setFocusedMatrikaProfileIdx(idx);
                      goToChapter(4);
                    }}
                  />
                </motion.div>
              ) : viewState.index === 4 ? (
                /* VIEW 5: CHAPTER B — THE EIGHT MATRIKAS (8 ANIMATED PROFILES + SUMMARY) */
                <motion.div
                  key="view-eight-matrikas"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <MatrikaExperience
                    initialProfileIndex={focusedMatrikaProfileIdx}
                    onPrevChapter={() => goToChapter(3)}
                    onNextChapter={() => goToChapter(5)}
                    onOpenMatrix={() => goToChapter(3)}
                  />
                </motion.div>
              ) : viewState.index === 5 ? (
                /* VIEW 6: SHRI MERU CHAKRA, NINE ENCLOSURES & ASHTA MATRIKA (VIDEO 3.MP4 RECONSTRUCTION) */
                <motion.div
                  key="view-shri-meru-chakra"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <ShriMeruExperience
                    initialMatrikaIndex={focusedMatrikaProfileIdx}
                    onPrevChapter={() => goToChapter(4)}
                    onNextChapter={() => goToChapter(0)}
                    onOpenMatrix={() => goToChapter(3)}
                    onOpenCyberneticMatrika={idx => {
                      setFocusedMatrikaProfileIdx(idx);
                      goToChapter(4);
                    }}
                  />
                </motion.div>
              ) : (
                /* VIEW 3: BHAIRAV RESEARCH PHILOSOPHY — ASHTA BHAIRAVA & KAAL BHAIRAVA CODEX */
                <motion.div
                  key="view-bhairav"
                  custom={viewState.direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Left Column: Bhairav Research Mapping Interface (4 cols on lg) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <div className="relative w-80 h-80 scale-[0.88] sm:scale-100 flex items-center justify-center">
                      {/* Concentric Rings & Faint Radial Construction Grid */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 320 320"
                        aria-hidden="true"
                      >
                        <circle
                          cx="160"
                          cy="160"
                          r="154"
                          fill="none"
                          stroke="#5A3922"
                          strokeWidth="0.75"
                          strokeDasharray="3 4"
                          opacity="0.55"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="138"
                          fill="none"
                          stroke="#B68A32"
                          strokeWidth="0.5"
                          opacity="0.22"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="116"
                          fill="none"
                          stroke="#5A3922"
                          strokeWidth="0.75"
                          opacity="0.45"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="68"
                          fill="none"
                          stroke="#B68A32"
                          strokeWidth="0.5"
                          strokeDasharray="2 3"
                          opacity="0.3"
                        />

                        {/* Outer ring index ticks & radial connectors for the 8 Bhairavas */}
                        {BHAIRAV_CODEX_ENTRIES.map((entry, idx) => {
                          const rad = (entry.angle * Math.PI) / 180;
                          const x1 = 160 + Math.cos(rad) * 40;
                          const y1 = 160 + Math.sin(rad) * 40;
                          const x2 = 160 + Math.cos(rad) * 116;
                          const y2 = 160 + Math.sin(rad) * 116;
                          const isSelected =
                            entry.id === selectedBhairavEntry.id ||
                            selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id;

                          return (
                            <g key={entry.id}>
                              <line
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={isSelected ? '#D3AD55' : '#5A3922'}
                                strokeWidth={entry.id === selectedBhairavEntry.id ? '1.75' : '0.85'}
                                strokeDasharray={isSelected ? 'none' : '2 3'}
                                className="transition-all duration-300 motion-reduce:transition-none"
                              />
                              {entry.id === selectedBhairavEntry.id && (
                                <circle
                                  cx={x2}
                                  cy={y2}
                                  r="28"
                                  fill="none"
                                  stroke="#D3AD55"
                                  strokeWidth="0.75"
                                  opacity="0.5"
                                />
                              )}
                              {/* Small outer index label */}
                              <text
                                x={160 + Math.cos(rad) * 147}
                                y={160 + Math.sin(rad) * 147}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill={entry.id === selectedBhairavEntry.id ? '#D3AD55' : '#877665'}
                                fontSize="6.5"
                                fontFamily="monospace"
                                letterSpacing="0.5"
                                opacity={entry.id === selectedBhairavEntry.id ? '0.95' : '0.45'}
                              >
                                0{idx + 1}
                              </text>
                            </g>
                          );
                        })}
                      </svg>

                      {/* Central Node (div:nth-of-type(1)): KAAL BHAIRAVA */}
                      <div
                        role="button"
                        tabIndex={0}
                        aria-pressed={selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id}
                        aria-label="Kaal Bhairava — Supreme Core"
                        onClick={() => {
                          setSelectedBhairavId(KAAL_BHAIRAV_CORE_ENTRY.id);
                          const cardEl = document.getElementById('bhairav-codex-panel');
                          if (cardEl && window.innerWidth < 1024) {
                            cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          }
                        }}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedBhairavId(KAAL_BHAIRAV_CORE_ENTRY.id);
                          }
                        }}
                        className={`absolute w-[82px] h-[82px] rounded-full bg-gradient-to-br from-[#28180F] to-[#17100C] flex flex-col items-center justify-center z-20 px-1.5 text-center cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] ${
                          selectedBhairavEntry.id === KAAL_BHAIRAV_CORE_ENTRY.id
                            ? 'border-2 border-[#D3AD55] shadow-[0_0_28px_rgba(211,173,85,0.4)] scale-105'
                            : 'border border-[#D3AD55]/65 shadow-[0_0_22px_rgba(211,173,85,0.18)] hover:border-[#D3AD55]'
                        }`}
                      >
                        <span className="font-serif text-[9.5px] leading-tight text-[#D3AD55] tracking-[0.12em] font-bold uppercase">
                          Kaal Bhairava
                        </span>
                        <span className="text-[6px] font-mono text-[#E6D7BD]/70 tracking-[0.1em] uppercase mt-1">
                          SUPREME CORE
                        </span>
                      </div>

                      {/* Eight Connected Peripheral Bhairava Buttons */}
                      {BHAIRAV_CODEX_ENTRIES.map(entry => {
                        const rad = (entry.angle * Math.PI) / 180;
                        const x = 160 + Math.cos(rad) * 116 - 25;
                        const y = 160 + Math.sin(rad) * 116 - 25;
                        const IconComponent = entry.icon;
                        const isSelected = entry.id === selectedBhairavEntry.id;

                        return (
                          <button
                            key={entry.id}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={entry.selectorLabel}
                            onClick={() => {
                              setSelectedBhairavId(entry.id);
                              const cardEl = document.getElementById('bhairav-codex-panel');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            style={{ left: `${x}px`, top: `${y}px` }}
                            className={`absolute w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center transition-all duration-300 motion-reduce:transition-none z-30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] ${
                              isSelected
                                ? 'bg-[#382116] border-2 border-[#D3AD55] text-[#D3AD55] shadow-[0_0_16px_rgba(211,173,85,0.32)] scale-110'
                                : 'bg-[#17100C] border border-[#5A3922] text-[#E6D7BD]/65 hover:border-[#B68A32] hover:text-[#D3AD55]'
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" strokeWidth={1.75} />
                            <span className="text-[6px] font-mono tracking-wider uppercase mt-0.5 text-center w-full truncate px-1">
                              {entry.nodeShortLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Contextual Diagram Caption */}
                    <div className="mt-2.5 text-center">
                      <span className="font-mono text-[9px] tracking-[0.22em] text-[#877665] uppercase">
                        ACTIVE NODE: {selectedBhairavEntry.codexId} · {selectedBhairavEntry.title}
                      </span>
                    </div>

                    {/* Eight Compact Ashta Bhairava Selector Buttons */}
                    <div
                      className="mt-3.5 flex flex-wrap gap-1.5 justify-center max-w-md"
                      role="group"
                      aria-label="Ashta Bhairava topic selectors"
                    >
                      {BHAIRAV_CODEX_ENTRIES.map(entry => {
                        const isSelected = entry.id === selectedBhairavEntry.id;
                        return (
                          <button
                            key={entry.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => {
                              setSelectedBhairavId(entry.id);
                              const cardEl = document.getElementById('bhairav-codex-panel');
                              if (cardEl && window.innerWidth < 1024) {
                                cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                              }
                            }}
                            className={`px-2.5 py-1 rounded-[3px] text-[9.5px] font-mono uppercase tracking-[0.1em] border transition-all duration-300 motion-reduce:transition-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-1 focus-visible:ring-offset-[#17100C] ${
                              isSelected
                                ? 'bg-[#382116]/90 border-[#D3AD55] text-[#D3AD55] font-semibold shadow-[0_0_10px_rgba(211,173,85,0.15)]'
                                : 'bg-[#28180F]/60 border-[#5A3922]/70 text-[#E6D7BD]/65 hover:border-[#B68A32] hover:bg-[#382116]/50 hover:text-[#D3AD55]'
                            }`}
                          >
                            {entry.selectorLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: The Active Research Codex (8 cols on lg — increased breadth) */}
                  <div id="bhairav-codex-panel" className="lg:col-span-8 w-full">
                    <AnimatePresence mode="wait">
                      <motion.article
                        key={selectedBhairavEntry.id}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
                        className="relative w-full p-5 sm:p-6 md:px-9 md:py-6 rounded-[4px] bg-[#F0E5D1] text-[#30241D] shadow-[0_14px_34px_rgba(0,0,0,0.65)] border border-[#B68A32]/35 overflow-hidden paper-grain"
                      >
                        {/* Codex Header */}
                        <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[#30241D]/15 pb-3 mb-3.5">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5A3922]">
                                METHODOLOGY CODEX / {selectedBhairavEntry.codexId}
                              </span>
                              <span className="text-[9px] font-mono uppercase tracking-[0.14em] px-2 py-0.5 rounded-[2px] border border-[#5A3922]/25 text-[#5A3922] bg-[#E6D7BD]/70">
                                {selectedBhairavEntry.evidenceStatus}
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif text-[#17100C] mt-1 tracking-wide font-semibold">
                              {selectedBhairavEntry.title}
                            </h3>
                          </div>
                          <div className="text-right">
                            <span className="inline-block text-[10px] font-mono tracking-[0.18em] font-semibold bg-[#E6D7BD] border border-[#5A3922]/20 px-2.5 py-1 rounded-[2px] text-[#30241D] uppercase">
                              {selectedBhairavEntry.category}
                            </span>
                          </div>
                        </div>

                        {/* Featured Passage: Interpretive Frame */}
                        <div className="p-3 sm:px-4 sm:py-3 bg-[#E6D7BD]/75 border-l-[3px] border-[#B68A32] rounded-r-[2px] mb-3.5">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#5A3922] mb-1">
                            INTERPRETIVE FRAME
                          </span>
                          <p className="text-sm sm:text-[15px] text-[#30241D] font-serif italic leading-snug">
                            {selectedBhairavEntry.interpretiveFrame}
                          </p>
                        </div>

                        {/* Investigation Principle */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A3922] font-semibold">
                              INVESTIGATION PRINCIPLE
                            </h4>
                            <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#30241D] font-serif mt-1">
                              {selectedBhairavEntry.investigationPrinciple}
                            </p>
                          </div>

                          {/* Case-Study Prompt & Important Methodological Distinction */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                            <div className="p-2.5 sm:p-3 rounded-[2px] bg-[#E6D7BD]/55 border border-[#5A3922]/15">
                              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#5A3922] font-semibold">
                                CASE-STUDY PROMPT
                              </span>
                              <p className="text-[12px] sm:text-[12.5px] leading-snug text-[#30241D] font-serif mt-1">
                                {selectedBhairavEntry.caseStudyPrompt}
                              </p>
                            </div>
                            <div className="p-2.5 sm:p-3 rounded-[2px] bg-[#E6D7BD]/40 border border-[#5A3922]/15">
                              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-[#5A3922] font-semibold">
                                IMPORTANT DISTINCTION
                              </span>
                              <p className="text-[12px] sm:text-[12.5px] leading-snug text-[#30241D]/90 font-serif mt-1">
                                {selectedBhairavEntry.importantDistinction}
                              </p>
                            </div>
                          </div>

                          {/* Evidence and Methodology Metadata */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#30241D]/15">
                            <div>
                              <h5 className="font-mono text-[9px] tracking-[0.2em] text-[#5A3922] uppercase">
                                RESEARCH METHOD
                              </h5>
                              <p className="font-serif text-[12.5px] sm:text-[13px] font-medium text-[#17100C] mt-0.5">
                                {selectedBhairavEntry.researchMethod}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-mono text-[9px] tracking-[0.2em] text-[#5A3922] uppercase">
                                SOURCE REGISTER
                              </h5>
                              <p className="font-serif text-[12.5px] sm:text-[13px] font-medium text-[#17100C] mt-0.5">
                                {selectedBhairavEntry.sourceRegister}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Document Footer */}
                        <div className="mt-4 flex flex-wrap justify-between items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#5A3922]/80 uppercase tracking-[0.2em] pt-3 border-t border-[#30241D]/15">
                          <span>BHAIRAV RESEARCH ARCHIVE</span>
                          <span>CODEX NO: {selectedBhairavEntry.codexId}</span>
                        </div>
                      </motion.article>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Arrow Beside the Div */}
          <button
            type="button"
            onClick={handleNextView}
            aria-label="Next research philosophy view"
            className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-full border border-[#5A3922] bg-[#17100C]/90 text-[#D3AD55] flex items-center justify-center transition-all duration-300 motion-reduce:transition-none hover:border-[#D3AD55] hover:bg-[#D3AD55]/10 hover:shadow-[0_0_15px_rgba(211,173,85,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3AD55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17100C] cursor-pointer z-30 group"
          >
            <ArrowRight
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#D3AD55]/85 group-hover:text-[#D3AD55] group-hover:translate-x-0.5 transition-all duration-300"
              strokeWidth={1.75}
            />
          </button>
        </div>

        {/* View Indicator Below */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => goToChapter(0)}
            aria-label="Empirical Field Methodology Archive"
            aria-current={viewState.index === 0 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 0
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            I · CAGS Field Archive
          </button>
          <button
            type="button"
            onClick={() => goToChapter(1)}
            aria-label="Ashta Bhairava — The Eight Bhairavas Astronomical Exhibit"
            aria-current={viewState.index === 1 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 1
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            II · अष्ट भैरव · Ashta Bhairava
          </button>
          <button
            type="button"
            onClick={() => goToChapter(2)}
            aria-label="Bhairav Investigation Codex"
            aria-current={viewState.index === 2 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 2
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            III · Bhairav Investigation Codex
          </button>
          <button
            type="button"
            onClick={() => goToChapter(3)}
            aria-label="64 Matrix — 8 Bhairavas by 8 Matrikas"
            aria-current={viewState.index === 3 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 3
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            IV · 64 Matrix (8 × 8)
          </button>
          <button
            type="button"
            onClick={() => goToChapter(4)}
            aria-label="Ashta Matrika — The Eight Matrikas"
            aria-current={viewState.index === 4 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 4
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            V · अष्ट मातृका · Eight Matrikas
          </button>
          <button
            type="button"
            onClick={() => goToChapter(5)}
            aria-label="Shri Meru Chakra — Nine Enclosures and Ashta Matrika"
            aria-current={viewState.index === 5 ? 'true' : undefined}
            className={`px-3 py-1 rounded-[2px] font-mono text-[9px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
              viewState.index === 5
                ? 'border-[#D3AD55] bg-[#382116]/80 text-[#D3AD55]'
                : 'border-[#5A3922]/50 bg-[#17100C]/60 text-[#877665] hover:text-[#E6D7BD]'
            }`}
          >
            VI · श्री मेरु चक्र · Shri Meru Chakra
          </button>
        </div>
      </div>
    </section>
  );
}
