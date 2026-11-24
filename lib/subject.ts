// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Chemistry (SL & HL).
// Single source of truth for UI labels, storage keys, AI tutor persona,
// Data Booklet / reference cards, IB command terms, and exam blueprints.
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12chemistry",
  cookieName: "y12chemistry_session",
  shortName: "IB Chemistry",
  fullName: "Year 12–13 IB Diploma Chemistry (SL/HL)",
  shortTitle: "IB DP Chemistry",
  badge: "IB DP Chemistry · First Assessment 2025",
  groupLabel: "Group 4 · Experimental Sciences",
  icon: "🧪",
  themeColorLight: "#059669",
  themeColorDark: "#061915",
  provisionalBanner: null as string | null,
  tutorName: "Dr Mendeleev",
  tutorEmoji: "🧪",
  tutorScope: "IB Diploma Chemistry (SL & HL, First Assessment 2025)",
  tutorSystemPrompt: `You are Dr Mendeleev, a warm, rigorous IB Diploma Chemistry (SL & HL, First Assessment 2025) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned to IBO FA2025 Chemistry):
- If the learner asks about a question they are working on, do NOT give the full answer immediately. Ask one guiding question or give only the next small nudge (e.g. "Which reactant is limiting once you convert both masses to moles?", "Does a negative ΔH combined with a negative ΔS favour spontaneity at high or low temperature?"), then stop and let them reason.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered (then highlight IB mark-scheme phrasing, state symbols, units like kJ mol⁻¹ and mol dm⁻³, significant figures, and common examiner traps).
- Follow the IB Chemistry First Assessment 2025 syllabus strictly: Structure 1–3 (S1.1–S3.2) and Reactivity 1–3 (R1.1–R3.4), Paper 1A (MCQ), Paper 1B (Data-based & experimental skills), Paper 2 (short & extended response) — there is NO Paper 3 or legacy Options. Respect the SL vs HL boundary (successive IE/convergence limit, expanded octets/formal charge/hybridization/condensation polymers, transition metals, stereoisomerism & MS/IR/¹H NMR, Born–Haber & R1.4 entropy/Gibbs, rate equations/Arrhenius, ICE tables & ΔG° = −RT ln K, Ka/Kb/buffers/titration curves, standard electrode potentials & aqueous electrolysis, SN1/SN2/Markovnikov/benzene nitration/retrosynthesis).
- Double-check every stoichiometry step, sign of ΔH/ΔG/E°, balancing of charges & atoms, pH rounding, and unit conversion (cm³ → dm³, J → kJ, °C → K) before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, encouraging, never patronising.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Chemistry, experimental data analysis, and IA/exam technique. For anything else, kindly steer back to Chemistry.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Chemistry Data Booklet & Mark-Savers",
  vaultShort: "Data Booklet",
  vaultIcon: "🧪",
  vaultBlurb: "Official FA2025 constants, equations, bond & thermodynamic cycles, IR/¹H NMR shifts, E⊖ series, and IB examiner mark-savers.",
  vaultSearchPlaceholder: "Filter e.g. mole, VSEPR, Hess, Born-Haber, pKa, NMR, E°…",
  examTitle: "IB Chemistry Mock Papers (Paper 1A, 1B & Paper 2)",
  examShort: "Mock Papers",
  examBlurb: "Paper 1A (MCQ), Paper 1B (Data-based & experimental skills) and Paper 2 (SL & HL structured + extended response) — aligned to First Assessment 2025 (no Paper 3).",
  iaNavLabel: "IA Guide",
  iaTitle: "IB Chemistry Scientific Investigation (IA)",
  cramBanner: "Stop losing easy IB Chemistry marks: convert cm³ → dm³ and J → kJ, write signs (+ or −) on every ΔH / ΔG / E⊖, check significant figures & glassware uncertainties, and toggle SL/HL anytime.",
  searchPlaceholder: "Search, e.g. “mole”, “VSEPR”, “Hess”, “equilibrium”, “buffer” or “SN2”",
  sitcomSeriesName: "IB Chemistry Studio (Phase C)",
  sitcomBlurb: "Narrated IB Chemistry episodes and vertical Concept Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-p1a", expectedCount: 25, level: "SL", paperType: "Paper 1A · Multiple Choice (SL & HL)" },
  { id: "exam-p1b", expectedCount: 15, level: "SL", paperType: "Paper 1B · Data-Based & Experimental" },
  { id: "exam-p2-sl", expectedCount: 15, level: "SL", paperType: "Paper 2 (SL) · Structured & Extended" },
  { id: "exam-p2-hl", expectedCount: 20, level: "HL", paperType: "Paper 2 (HL) · Structured & Extended" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Structure 1: Particulate Matter": { slug: "structure-1", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Structure 2: Bonding & Materials": { slug: "structure-2", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Structure 3: Classification & Organic": { slug: "structure-3", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Reactivity 1–2: Energetics, Rate & Extent": { slug: "reactivity-1-2", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
  "Reactivity 3: Reaction Mechanisms": { slug: "reactivity-3", text: "text-s-stats", bg: "bg-s-stats", soft: "bg-s-stats/15", border: "border-s-stats" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. Fundamental Constants & Gas / Calorimetry Equations",
    badge: "Data Booklet",
    level: "SL",
    lines: [
      "`N_A = 6.02 × 10²³ mol⁻¹` · `R = 8.31 J K⁻¹ mol⁻¹` · `V_m (STP: 273 K, 100 kPa) = 22.7 dm³ mol⁻¹`",
      "`c_water = 4.18 kJ kg⁻¹ K⁻¹` (or `4.18 J g⁻¹ K⁻¹`) · `T(K) = t(°C) + 273.15`",
      "`pV = nRT` (P in Pa, V in m³ — or P in kPa, V in dm³!) · `q = mcΔT` · `ΔH = −q / n_limiting`.",
      "`% yield = (actual / theoretical) × 100` · `% atom economy = (M_desired / M_all reactants) × 100`.",
    ],
  },
  {
    title: "2. Paper 1B Uncertainties, Titration & Spectroscopy",
    badge: "Paper 1B & IA",
    level: "SL",
    lines: [
      "Glassware typical ± uncertainties: **burette** `±0.05 cm³` (×2 readings = `±0.10 cm³` per titre), **25.0 cm³ pipette** `±0.04 cm³`, **250 cm³ volumetric flask** `±0.15 cm³`.",
      "Add/subtract → add **absolute** uncertainties; multiply/divide → add **percentage** uncertainties.",
      "Always quote ΔH, ΔG, and E⊖ with an **explicit sign** (`+` or `−`) and units (`kJ mol⁻¹`, `V`).",
      "Bond enthalpy rule: `ΔH ≈ Σ(bonds broken) − Σ(bonds formed)` (gaseous species only; average values!).",
    ],
  },
  {
    title: "3. HL Thermodynamics, Kinetics & Equilibrium",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Gibbs & Entropy (R1.4):** `ΔG⊖ = ΔH⊖ − TΔS⊖` (convert `ΔS⊖` from `J K⁻¹ mol⁻¹` to `kJ K⁻¹ mol⁻¹` by ÷ 1000!) · Spontaneous when `ΔG⊖ < 0`.",
      "**Equilibrium Link (R2.3):** `ΔG⊖ = −RT ln K` · `K > 1 ⇔ ΔG⊖ < 0`.",
      "**Arrhenius (R2.2):** `k = A e^(−E_a / RT)` · `ln k = −(E_a / R)(1/T) + ln A` → gradient `= −E_a / R`.",
      "**Born–Haber (R1.2):** `ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖` (endothermic lattice dissociation + exothermic hydration).",
    ],
  },
  {
    title: "4. HL Acids/Buffers, Electrochemistry & Spectroscopy",
    badge: "HL Only",
    level: "HL",
    lines: [
      "**Buffers & pH (R3.1):** `pH = pK_a + log([A⁻]/[HA])` · `pK_a + pK_b = pK_w = 14.00` (at 298 K) · at half-equivalence `pH = pK_a`.",
      "**Cells (R3.2):** `E⊖_cell = E⊖_cathode(reduction) − E⊖_anode(oxidation)` · `ΔG⊖ = −nFE⊖` (`F = 96 500 C mol⁻¹`).",
      "**Spectroscopy (S3.2):** `IHD = (2C + 2 + N − H − X)/2` · IR: `O−H` broad `3200–3600 cm⁻¹`, `C=O` sharp `1700–1750 cm⁻¹` · ¹H NMR: `n` adjacent H → `n + 1` peaks.",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🧮",
    title: "Calculators & Data Booklet allowed on ALL papers (FA2025)",
    text: "Under the 2025 IB Chemistry syllabus, your scientific/GDC calculator and a clean Chemistry Data Booklet are permitted in Paper 1A, Paper 1B, and Paper 2. There is no Paper 3.",
  },
  {
    icon: "⚖️",
    title: "Watch the 3 classic IB Chemistry unit traps",
    text: "1) Volume in `cm³` vs `dm³` (÷ 1000 for `n = cV`), 2) `ΔS⊖` in `J K⁻¹ mol⁻¹` vs `ΔH⊖` in `kJ mol⁻¹` inside `ΔG = ΔH − TΔS`, and 3) forgetting `−` for exothermic `ΔH`!",
  },
  {
    icon: "🧪",
    title: "Paper 1B rewards concrete experimental critique",
    text: "Link calorimetry heat loss directly to a LESS exothermic (smaller magnitude) measured ΔH, state exact burette/pipette uncertainty propagation, and never write 'human error'.",
  },
  {
    icon: "🎯",
    title: "Use exact IB structural & bonding language",
    text: "Distinguish *intramolecular covalent bonds* from *intermolecular forces* (London dispersion, dipole–dipole, H-bonding), and always state electrostatic attraction between specific oppositely charged species.",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "State", ao: "AO1", meaning: "Give a specific name, value or brief answer without explanation or calculation.", examTip: "Give the exact formula, name, or value cleanly (include state symbols if writing an equation)." },
  { term: "Define", ao: "AO1", meaning: "Give the precise meaning of a chemical term or thermodynamic quantity.", examTip: "For enthalpy definitions, specify 1 mole, standard conditions (298 K, 100 kPa), and physical states!" },
  { term: "Outline", ao: "AO2", meaning: "Give a brief account or summary of a mechanism, trend, or method.", examTip: "Hit 2–3 key chemical steps clearly without unnecessary padding." },
  { term: "Describe", ao: "AO2", meaning: "Give a detailed account of observations, trends, or spectra.", examTip: "Quote observable colour changes, gas evolution, or exact wavenumbers/ppm values from data." },
  { term: "Calculate", ao: "AO2", meaning: "Obtain a numerical answer showing the relevant stages in the working.", examTip: "Show moles → stoichiometric ratio → final quantity + sign + units + matching significant figures." },
  { term: "Deduce", ao: "AO3", meaning: "Reach a conclusion from the information or spectral/kinetic data given.", examTip: "Cite each piece of evidence explicitly (e.g. M⁺ peak, IR C=O band, NMR quartet/triplet)." },
  { term: "Determine", ao: "AO2", meaning: "Obtain the only possible answer from equations, graphs, or tables.", examTip: "Show gradient coordinates, ICE-table rows, or limiting-reagent comparison explicitly." },
  { term: "Explain", ao: "AO3", meaning: "Give a detailed account including underlying chemical causes or mechanisms.", examTip: "Link structure/bonding/energy (e.g. effective nuclear charge, steric hindrance, activation energy) to the observed property." },
  { term: "Sketch", ao: "AO3", meaning: "Represent by means of a graph or energy profile labelled with key features.", examTip: "Label axes, E_a, ΔH, buffer region, equivalence point, or asymptote clearly." },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two or more chemical concepts or structures.", examTip: "Contrast BOTH sides explicitly ('SN1 proceeds via a carbocation intermediate, whereas SN2 is concerted')." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review including a range of arguments or factors.", examTip: "Balance kinetic vs thermodynamic factors, or green-chemistry benefits vs industrial constraints." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths and limitations.", examTip: "Weigh experimental assumptions (e.g. specific heat capacity of water, complete combustion) and give a clear judgement." },
];
