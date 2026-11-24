// ---------------------------------------------------------------------------
// IB Diploma Chemistry (First Assessment 2025) — Paper 2 (HL)
// 20 structured & extended-response questions (SL + HL synthesis, heavy HL
// depth across all 8 topics: convergence/IE, formal charge/hybridization,
// transition-metal CFSE, combined MS/IR/¹H NMR, Born–Haber, ΔG/ΔS, rate laws
// & Arrhenius, ICE & ΔG = −RT ln K, buffers, E⊖/electrolysis, SN1/SN2 &
// multi-step retrosynthesis). Calculator & Data Booklet permitted (FA2025).
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_CFSE_SPLITTING =
  '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Octahedral crystal field d-orbital splitting diagram comparing free iron(II) ion degenerate 3d orbitals, smaller splitting delta E 1 in hexaaquairon(II), and larger splitting delta E 2 in hexacyanoferrate(II)">' +
  '<rect x="0" y="0" width="520" height="240" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<line x1="42" y1="210" x2="42" y2="26" stroke="#0f172a" stroke-width="1.8"/>' +
  '<polygon points="42,20 37,29 47,29" fill="#0f172a"/>' +
  '<text x="20" y="120" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 20 120)">Energy</text>' +
  '<g stroke="#475569" stroke-width="2.6">' +
  '<line x1="68" y1="125" x2="86" y2="125"/><line x1="90" y1="125" x2="108" y2="125"/><line x1="112" y1="125" x2="130" y2="125"/>' +
  '<line x1="134" y1="125" x2="152" y2="125"/><line x1="156" y1="125" x2="174" y2="125"/>' +
  "</g>" +
  '<line x1="176" y1="125" x2="225" y2="95" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>' +
  '<line x1="176" y1="125" x2="225" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>' +
  '<g stroke="#059669" stroke-width="2.8">' +
  '<line x1="234" y1="95" x2="264" y2="95"/><line x1="274" y1="95" x2="304" y2="95"/>' +
  '<line x1="222" y1="150" x2="248" y2="150"/><line x1="256" y1="150" x2="282" y2="150"/><line x1="290" y1="150" x2="316" y2="150"/>' +
  "</g>" +
  '<line x1="269" y1="99" x2="269" y2="146" stroke="#dc2626" stroke-width="1.6"/>' +
  '<polygon points="269,96 265,104 273,104" fill="#dc2626"/>' +
  '<polygon points="269,149 265,141 273,141" fill="#dc2626"/>' +
  '<g stroke="#d97706" stroke-width="2.8">' +
  '<line x1="388" y1="62" x2="418" y2="62"/><line x1="428" y1="62" x2="458" y2="62"/>' +
  '<line x1="376" y1="168" x2="402" y2="168"/><line x1="410" y1="168" x2="436" y2="168"/><line x1="444" y1="168" x2="470" y2="168"/>' +
  "</g>" +
  '<line x1="423" y1="66" x2="423" y2="164" stroke="#7c3aed" stroke-width="1.6"/>' +
  '<polygon points="423,63 419,71 427,71" fill="#7c3aed"/>' +
  '<polygon points="423,167 419,159 427,159" fill="#7c3aed"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11.5" text-anchor="middle">' +
  '<text x="121" y="146" font-weight="600" fill="#334155">5 degenerate 3d</text>' +
  '<text x="121" y="205" font-weight="700" fill="#0f172a">Free Fe²⁺(g)</text>' +
  '<text x="294" y="126" font-weight="700" fill="#dc2626">ΔE₁</text>' +
  '<text x="269" y="192" font-weight="700" fill="#059669">[Fe(H₂O)₆]²⁺</text>' +
  '<text x="269" y="208" font-size="10.5" fill="#475569">Pale green solution</text>' +
  '<text x="451" y="119" font-weight="700" fill="#7c3aed">ΔE₂</text>' +
  '<text x="423" y="192" font-weight="700" fill="#b45309">[Fe(CN)₆]⁴⁻</text>' +
  '<text x="423" y="208" font-size="10.5" fill="#475569">Pale yellow solution</text>' +
  "</g>" +
  "</svg>";

const SVG_PROTON_NMR_ISOPROPYL =
  '<svg viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="High-resolution proton NMR spectrum of compound Z (C5H10O2) showing a 1H septet at 4.98 ppm, a 3H singlet at 2.02 ppm, a 6H doublet at 1.24 ppm, and TMS reference peak at 0.0 ppm">' +
  '<rect x="0" y="0" width="540" height="280" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<line x1="50" y1="224" x2="505" y2="224" stroke="#0f172a" stroke-width="1.8"/>' +
  '<g stroke="#94a3b8" stroke-width="1">' +
  '<line x1="70" y1="224" x2="70" y2="230"/><line x1="140" y1="224" x2="140" y2="230"/>' +
  '<line x1="210" y1="224" x2="210" y2="230"/><line x1="280" y1="224" x2="280" y2="230"/>' +
  '<line x1="350" y1="224" x2="350" y2="230"/><line x1="420" y1="224" x2="420" y2="230"/><line x1="490" y1="224" x2="490" y2="230"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="246">6.0</text><text x="140" y="246">5.0</text><text x="210" y="246">4.0</text>' +
  '<text x="280" y="246">3.0</text><text x="350" y="246">2.0</text><text x="420" y="246">1.0</text><text x="490" y="246">0.0</text>' +
  '<text x="280" y="268" font-size="13" font-weight="600" fill="#0f172a">Chemical shift δ / ppm</text>' +
  "</g>" +
  '<line x1="490" y1="224" x2="490" y2="188" stroke="#64748b" stroke-width="1.8"/>' +
  '<text x="490" y="180" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600" fill="#64748b" text-anchor="middle">TMS</text>' +
  '<g stroke="#2563eb" stroke-width="2">' +
  '<line x1="129" y1="224" x2="129" y2="216"/><line x1="133" y1="224" x2="133" y2="204"/>' +
  '<line x1="137" y1="224" x2="137" y2="178"/><line x1="141" y1="224" x2="141" y2="162"/>' +
  '<line x1="145" y1="224" x2="145" y2="178"/><line x1="149" y1="224" x2="149" y2="204"/>' +
  '<line x1="153" y1="224" x2="153" y2="216"/>' +
  '<line x1="349" y1="224" x2="349" y2="86"/>' +
  '<line x1="400" y1="224" x2="400" y2="56"/><line x1="406" y1="224" x2="406" y2="56"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">' +
  '<rect x="78" y="96" width="126" height="40" rx="6" fill="#eff6ff" stroke="#93c5fd"/>' +
  '<text x="141" y="113" font-weight="700" fill="#1d4ed8">δ = 4.98 ppm</text>' +
  '<text x="141" y="129" fill="#1e3a8a">Septet · Area = 1H</text>' +
  '<line x1="141" y1="136" x2="141" y2="158" stroke="#93c5fd" stroke-width="1.2"/>' +
  '<rect x="242" y="24" width="122" height="40" rx="6" fill="#eff6ff" stroke="#93c5fd"/>' +
  '<text x="303" y="41" font-weight="700" fill="#1d4ed8">δ = 2.02 ppm</text>' +
  '<text x="303" y="57" fill="#1e3a8a">Singlet · Area = 3H</text>' +
  '<line x1="349" y1="64" x2="349" y2="82" stroke="#93c5fd" stroke-width="1.2"/>' +
  '<rect x="386" y="14" width="126" height="36" rx="6" fill="#eff6ff" stroke="#93c5fd"/>' +
  '<text x="449" y="29" font-weight="700" fill="#1d4ed8">δ = 1.24 ppm</text>' +
  '<text x="449" y="44" fill="#1e3a8a">Doublet · Area = 6H</text>' +
  "</g>" +
  "</svg>";

const SVG_BORN_HABER_MGO =
  '<svg viewBox="0 0 540 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Born-Haber enthalpy cycle for magnesium oxide showing formation enthalpy minus 602 kilojoules per mole, atomization, first and second ionization energies of magnesium, first and second electron affinities of oxygen, and unknown endothermic lattice dissociation enthalpy">' +
  '<rect x="0" y="0" width="540" height="310" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#0f172a" stroke-width="2">' +
  '<line x1="60" y1="274" x2="480" y2="274"/>' +
  '<line x1="60" y1="216" x2="265" y2="216"/>' +
  '<line x1="60" y1="168" x2="265" y2="168"/>' +
  '<line x1="60" y1="90" x2="265" y2="90"/>' +
  '<line x1="255" y1="112" x2="355" y2="112"/>' +
  '<line x1="335" y1="36" x2="480" y2="36"/>' +
  "</g>" +
  '<line x1="100" y1="218" x2="100" y2="268" stroke="#059669" stroke-width="2"/>' +
  '<polygon points="100,272 95,263 105,263" fill="#059669"/>' +
  '<line x1="100" y1="214" x2="100" y2="174" stroke="#2563eb" stroke-width="2"/>' +
  '<polygon points="100,170 95,179 105,179" fill="#2563eb"/>' +
  '<line x1="100" y1="166" x2="100" y2="96" stroke="#2563eb" stroke-width="2"/>' +
  '<polygon points="100,92 95,101 105,101" fill="#2563eb"/>' +
  '<line x1="280" y1="90" x2="280" y2="108" stroke="#059669" stroke-width="2"/>' +
  '<polygon points="280,111 275,103 285,103" fill="#059669"/>' +
  '<line x1="345" y1="110" x2="345" y2="42" stroke="#dc2626" stroke-width="2"/>' +
  '<polygon points="345,38 340,47 350,47" fill="#dc2626"/>' +
  '<line x1="450" y1="272" x2="450" y2="42" stroke="#7c3aed" stroke-width="2.4"/>' +
  '<polygon points="450,38 445,47 455,47" fill="#7c3aed"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<text x="270" y="293" font-weight="700" fill="#0f172a" text-anchor="middle">MgO(s)</text>' +
  '<text x="165" y="233" font-weight="600" fill="#0f172a" text-anchor="middle">Mg(s) + ½O₂(g)</text>' +
  '<text x="165" y="184" font-weight="600" fill="#0f172a" text-anchor="middle">Mg(g) + O(g)</text>' +
  '<text x="165" y="82" font-weight="600" fill="#0f172a" text-anchor="middle">Mg²⁺(g) + 2e⁻ + O(g)</text>' +
  '<text x="305" y="128" font-size="10" fill="#334155" text-anchor="middle">Mg²⁺(g) + e⁻ + O⁻(g)</text>' +
  '<text x="410" y="26" font-weight="700" fill="#0f172a" text-anchor="middle">Mg²⁺(g) + O²⁻(g)</text>' +
  '<text x="108" y="250" font-weight="600" fill="#059669">ΔH_f⊖ = −602</text>' +
  '<text x="108" y="198" font-weight="600" fill="#2563eb">+148 + 249</text>' +
  '<text x="108" y="135" font-weight="600" fill="#2563eb">IE₁ + IE₂ = +738 + 1451</text>' +
  '<text x="288" y="102" font-weight="600" fill="#059669">EA₁ = −141</text>' +
  '<text x="353" y="78" font-weight="600" fill="#dc2626">EA₂ = +753</text>' +
  '<text x="458" y="160" font-weight="700" fill="#7c3aed">ΔH_lat⊖ = ?</text>' +
  '<text x="458" y="176" font-size="10" fill="#6b21a8">(kJ mol⁻¹)</text>' +
  "</g>" +
  "</svg>";

const SVG_SN1_SN2_PROFILES =
  '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side potential energy profiles for Pathway A showing a single concerted transition state peak and Pathway B showing a two-step mechanism with an energy-minimum carbocation intermediate">' +
  '<rect x="0" y="0" width="540" height="240" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<line x1="270" y1="16" x2="270" y2="224" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>' +
  '<g stroke="#0f172a" stroke-width="1.6">' +
  '<line x1="42" y1="196" x2="248" y2="196"/><line x1="42" y1="196" x2="42" y2="38"/>' +
  '<line x1="306" y1="196" x2="514" y2="196"/><line x1="306" y1="196" x2="306" y2="38"/>' +
  "</g>" +
  '<path d="M 54 148 C 96 148, 114 60, 144 60 C 174 60, 192 174, 238 174" fill="none" stroke="#2563eb" stroke-width="2.6"/>' +
  '<path d="M 318 148 C 344 148, 356 58, 380 58 C 398 58, 404 128, 422 128 C 440 128, 448 92, 464 92 C 480 92, 488 174, 506 174" fill="none" stroke="#059669" stroke-width="2.6"/>' +
  '<circle cx="144" cy="60" r="3.5" fill="#dc2626"/>' +
  '<circle cx="380" cy="58" r="3.5" fill="#dc2626"/>' +
  '<circle cx="422" cy="128" r="4" fill="#d97706"/>' +
  '<circle cx="464" cy="92" r="3.5" fill="#dc2626"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">' +
  '<text x="145" y="26" font-weight="700" fill="#1d4ed8">Pathway A: 1-bromobutane + OH⁻</text>' +
  '<text x="144" y="48" font-weight="600" fill="#dc2626">Transition state ‡</text>' +
  '<text x="72" y="140" fill="#334155">Reactants</text><text x="218" y="166" fill="#334155">Products</text>' +
  '<text x="145" y="218" font-weight="600" fill="#0f172a">Reaction coordinate</text>' +
  '<text x="410" y="26" font-weight="700" fill="#047857">Pathway B: 2-bromo-2-methylpropane + OH⁻</text>' +
  '<text x="380" y="48" font-weight="600" fill="#dc2626">TS₁ (RDS)</text>' +
  '<text x="422" y="146" font-weight="700" fill="#b45309">Intermediate</text>' +
  '<text x="466" y="82" font-weight="600" fill="#dc2626">TS₂</text>' +
  '<text x="410" y="218" font-weight="600" fill="#0f172a">Reaction coordinate</text>' +
  "</g>" +
  '<text x="20" y="118" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 20 118)">Potential energy</text>' +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p2-hl",
  title: "Paper 2 (HL) · Structured & Extended Response",
  paperType: "Paper 2 (HL) · Structured & Extended",
  level: "HL",
  calculator: true,
  minutes: 150,
  questions: [
    // ===================== Q01: S1.3 Lyman Convergence IE (HL) ===============
    {
      id: "exam-p2-hl-q01",
      kind: "short",
      topicId: "s1-particulate-matter",
      guideRef: "ionization-energy-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Multiply photon energy E = hν by Avogadro's constant N_A and convert J to kJ",
      question:
        "The ultraviolet Lyman series of the hydrogen emission spectrum converges at a frequency of `ν = 3.29 × 10¹⁵ s⁻¹`. Using Planck's constant `h = 6.63 × 10⁻³⁴ J s` and the Avogadro constant `N_A = 6.02 × 10²³ mol⁻¹`, calculate the first ionization energy of hydrogen (in `kJ mol⁻¹`, to 3 significant figures).",
      answer: { type: "number", value: 1310, tolerance: 10, display: "1310 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 1310000, tolerance: 10000 },
          feedback: "Convert from J mol⁻¹ to kJ mol⁻¹ by dividing by 1000 (1310 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: 2.18e-18, tolerance: 0.05e-18 },
          feedback: "That is the ionization energy of a single hydrogen atom in joules — multiply by N_A (6.02 × 10²³) and divide by 1000 for kJ mol⁻¹.",
        },
      ],
      hints: [
        "First find the energy of one convergence photon: `E = hν = 6.63 × 10⁻³⁴ × 3.29 × 10¹⁵` (in joules).",
        "Multiply by `N_A = 6.02 × 10²³ mol⁻¹` to scale to 1 mole of atoms, then divide by `1000` for `kJ mol⁻¹`.",
      ],
      solution: [
        "Single-atom ionization energy: `E = hν = 6.63 × 10⁻³⁴ × 3.29 × 10¹⁵ = 2.181 × 10⁻¹⁸ J`.",
        "Molar ionization energy: `IE₁ = 2.181 × 10⁻¹⁸ × 6.02 × 10²³ / 1000 = 1313 kJ mol⁻¹ ≈ 1310 kJ mol⁻¹`.",
      ],
      commonError: "Reporting single-atom energy (`2.18 × 10⁻¹⁸ J`) or forgetting the `÷ 1000` conversion from `J mol⁻¹` to `kJ mol⁻¹`.",
    },

    // ===================== Q02: S1.3 Period 3 IE Discontinuities (HL) ========
    {
      id: "exam-p2-hl-q02",
      kind: "written",
      topicId: "s1-particulate-matter",
      guideRef: "ionization-energy-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Contrast 3p vs 3s sublevel energy/shielding for Mg→Al and paired 3p repulsion for P→S",
      marks: 4,
      question:
        "Although first ionization energy generally increases across Period 3, two notable dips occur: aluminium (`578 kJ mol⁻¹`) is lower than magnesium (`738 kJ mol⁻¹`), and sulfur (`1000 kJ mol⁻¹`) is lower than phosphorus (`1012 kJ mol⁻¹`). Explain **both** discontinuities in terms of electron configurations and sublevel/orbital interactions.",
      hints: [
        "Write the valence configurations: `Mg` (`3s²`) vs `Al` (`3s² 3p¹`), and `P` (`3s² 3p³`) vs `S` (`3s² 3p⁴`).",
        "For `Al`, compare the energy and shielding of the outer `3p` electron with the `3s` electron in `Mg`.",
        "For `S`, apply Hund's rule to the three `3p` orbitals — what happens when the fourth `3p` electron enters an already occupied orbital?",
      ],
      modelAnswer:
        "Magnesium has configuration `[Ne] 3s²` whereas aluminium is `[Ne] 3s² 3p¹`. Removing the outer electron from aluminium takes it from a `3p` sublevel that is higher in energy, farther from the nucleus, and partially shielded by the filled `3s²` electrons, so less energy is needed despite Al's larger nuclear charge. Phosphorus is `[Ne] 3s² 3p³` with three singly occupied `3p` orbitals, whereas sulfur is `[Ne] 3s² 3p⁴`, forcing two electrons to share one `3p` orbital. Extra electron–electron repulsion between this spin-paired pair makes removing one of the paired electrons from sulfur slightly easier than removing an unpaired electron from phosphorus.",
      markScheme: [
        {
          point: "Contrasts valence configurations Mg (3s²) vs Al (3s² 3p¹).",
          keywords: ["3s² 3p¹", "3s2 3p1", "3p sublevel", "3p orbital"],
        },
        {
          point: "Explains Al's 3p electron is higher in energy / farther from the nucleus / shielded by the filled 3s² sublevel.",
          keywords: ["higher in energy", "shielded by the filled 3s", "shielded by 3s", "farther from the nucleus"],
        },
        {
          point: "Contrasts P (3p³, three singly occupied orbitals) vs S (3p⁴, one doubly occupied / paired 3p orbital).",
          keywords: ["3p⁴", "3p4", "singly occupied", "share one"],
        },
        {
          point: "Attributes S's lower IE to greater electron–electron repulsion between spin-paired electrons in the same 3p orbital.",
          keywords: ["repulsion", "spin-paired", "paired electrons"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid sublevel or orbital explanation of either dip.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Explains only one dip accurately or relies on vague claims of 'full/half-full shell stability' without physical causes.",
          indicators: ["Writes 'half-filled shell is extra stable' without explaining paired-electron repulsion."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains Mg→Al via 3p higher energy and 3s² shielding, and P→S via spin-paired electron–electron repulsion in a doubly occupied 3p orbital.",
          indicators: ["Cites explicit valence configurations and physical electrostatic causes for both dips."],
        },
      ],
      commonError: "Merely stating 'half-filled 3p³ is stable' without explicitly explaining the increased **electron–electron repulsion** in sulfur's doubly occupied `3p` orbital.",
    },

    // ===================== Q03: S2.2 Formal Charge & Resonance (HL) ==========
    {
      id: "exam-p2-hl-q03",
      kind: "written",
      topicId: "s2-bonding-materials",
      guideRef: "expanded-octets-hybridization-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Compute FC = V − N − ½B for both N₂O structures, then explain sp² delocalization and bond order 1.33 in CO₃²⁻",
      marks: 5,
      question:
        "(a) Two possible octet Lewis structures for linear nitrous oxide (`N₂O`, atom connectivity `N−N−O`) are Structure I (`:N≡N−O:` with 3 lone pairs on O and 1 on terminal N) and Structure II (`:N=N=O:` with 2 lone pairs on terminal N and 2 on O). Calculate the formal charge on every atom in both structures and deduce which is preferred. (b) Explain why all three `C−O` bonds in the carbonate ion (`CO₃²⁻`) have identical lengths intermediate between `C−O` single and `C=O` double bonds, specifying the hybridization of the central carbon atom.",
      hints: [
        "Use `FC = V − N − {{1/2}} B` (valence electrons minus non-bonding electrons minus number of bonds; `V(N) = 5`, `V(O) = 6`).",
        "Both structures have charges summing to zero with magnitudes `0, +1, −1` — which electronegative atom should carry the negative formal charge?",
        "For `CO₃²⁻`, count the 3 electron domains on C (`sp²`), describe the sideways overlap of unhybridized `p` orbitals forming a delocalized `π` system across 3 resonance contributors, and compute the bond order (`4 / 3 = 1.33`).",
      ],
      modelAnswer:
        "(a) Using `FC = V − N − (bonds)`: in Structure I (`N≡N−O`), terminal `N` has `5 − 2 − 3 = 0`, central `N` has `5 − 0 − 4 = +1`, and `O` has `6 − 6 − 1 = −1`. In Structure II (`N=N=O`), terminal `N` has `5 − 4 − 2 = −1`, central `N` has `5 − 0 − 4 = +1`, and `O` has `6 − 4 − 2 = 0`. Structure I is preferred because the negative formal charge (`−1`) resides on the more electronegative oxygen atom rather than nitrogen. (b) In `CO₃²⁻`, the central carbon has three electron domains and is `sp²` hybridized (`120°`, trigonal planar), forming three `C−O` `σ` bonds. Its unhybridized `p` orbital overlaps sideways with `p` orbitals on all three oxygens to delocalize one `π` electron pair across three equivalent resonance forms, giving every `C−O` bond an equal bond order of `1.33` (`4/3`), intermediate in length between single and double bonds.",
      markScheme: [
        {
          point: "Correct formal charges for Structure I: N(terminal) = 0, N(central) = +1, O = −1.",
          keywords: ["5 - 2 - 3 = 0", "5 − 2 − 3 = 0", "6 - 6 - 1 = -1", "6 − 6 − 1 = −1"],
        },
        {
          point: "Correct formal charges for Structure II: N(terminal) = −1, N(central) = +1, O = 0.",
          keywords: ["5 - 4 - 2 = -1", "5 − 4 − 2 = −1", "6 - 4 - 2 = 0", "6 − 4 − 2 = 0"],
        },
        {
          point: "Selects Structure I because the negative formal charge sits on the more electronegative oxygen atom.",
          keywords: ["more electronegative oxygen", "electronegative oxygen", "structure i is preferred"],
        },
        {
          point: "Identifies sp² hybridization of carbon in CO₃²⁻ with three σ bonds and unhybridized p-orbital sideways overlap.",
          keywords: ["sp²", "sp2", "unhybridized p"],
        },
        {
          point: "Explains π electron delocalization across three resonance structures giving identical C−O bond order 1.33 (4/3).",
          keywords: ["delocalize", "delocalise", "1.33", "4/3", "resonance"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid formal charge calculation or delocalization explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Calculates formal charges partially or mentions resonance in CO₃²⁻ without hybridization, π delocalization, or bond order.",
          indicators: ["Says CO₃²⁻ 'flips rapidly between single and double bonds' (a classic misconception!)."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately calculates formal charges and selects Structure I via electronegativity, and explains CO₃²⁻ delocalization missing only sp² hybridization or bond order 1.33.",
          indicators: ["Correct formal charges and delocalized π system clearly explained."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, exact HL analysis of both N₂O structures with electronegativity justification and full sp² / σ / delocalized π / bond-order 1.33 explanation for CO₃²⁻.",
          indicators: ["Accurately describes resonance hybrid delocalization rather than oscillating bonds."],
        },
      ],
      commonError: "Describing resonance as bonds rapidly flipping back and forth instead of a single static hybrid with **delocalized `π` electrons**.",
    },

    // ===================== Q04: S3.1 Transition-Metal CFSE & Colour (HL) =====
    {
      id: "exam-p2-hl-q04",
      kind: "written",
      topicId: "s3-1-periodicity",
      guideRef: "d-orbital-splitting-colour-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Cover partially filled 3d⁶, octahedral splitting ΔE, visible d–d absorption, complementary transmission, and spectrochemical series",
      diagram: SVG_CFSE_SPLITTING,
      marks: 5,
      question:
        "Both `[Fe(H₂O)₆]²⁺(aq)` (pale green) and `[Fe(CN)₆]⁴⁻(aq)` (pale yellow) are octahedral complexes of iron(II) (`Fe²⁺`, `[Ar] 3d⁶`). Refer to the crystal-field splitting diagram above to explain why these complexes are coloured and why replacing `H₂O` with `CN⁻` changes the transmitted colour from pale green to pale yellow.",
      hints: [
        "Explain why five degenerate `3d` orbitals split into two energy levels when six ligands approach along the octahedral axes.",
        "Explain how an electron in a lower-energy `d` orbital absorbs a visible photon (`ΔE = hν = hc / λ`) to jump to a higher-energy `d` orbital (`d–d` transition), requiring a partially filled `3d` sublevel.",
        "Connect the observed colour to the **complementary** colour of the wavelength absorbed (colour wheel), then compare `CN⁻` vs `H₂O` in the spectrochemical series.",
      ],
      modelAnswer:
        "In an octahedral ligand field, electrostatic repulsion between ligand lone pairs and `Fe²⁺` `3d` electrons splits the five degenerate `3d` orbitals into two energy levels separated by an energy gap `ΔE`. Because `Fe²⁺` has a partially filled `3d⁶` sublevel, electrons in the lower `d` orbitals can absorb photons of visible light whose energy matches `ΔE = hν = hc / λ` to promote into vacant higher `d` orbitals (`d–d` transitions). The remaining unabsorbed wavelengths are transmitted, giving the solution the complementary colour to the light absorbed. Because `CN⁻` is a much stronger-field ligand than `H₂O` (higher in the spectrochemical series), `[Fe(CN)₆]⁴⁻` has a larger splitting `ΔE₂ > ΔE₁`. Consequently, `[Fe(CN)₆]⁴⁻` absorbs higher-frequency, shorter-wavelength violet light (transmitting complementary yellow), whereas `[Fe(H₂O)₆]²⁺` absorbs lower-frequency, longer-wavelength red light (transmitting complementary green).",
      markScheme: [
        {
          point: "Ligand field splits the five degenerate 3d orbitals into two energy levels separated by ΔE.",
          keywords: ["splits the five", "two energy levels", "energy gap"],
        },
        {
          point: "Fe²⁺ has a partially filled 3d⁶ sublevel enabling d–d electronic transitions by absorbing visible photons of energy ΔE = hν.",
          keywords: ["partially filled", "d–d", "d-d", "promote"],
        },
        {
          point: "Observed solution colour is the complementary colour transmitted after absorbing specific visible wavelengths.",
          keywords: ["complementary", "transmitted", "unabsorbed"],
        },
        {
          point: "CN⁻ is a stronger-field ligand higher in the spectrochemical series than H₂O, producing a larger splitting ΔE₂ > ΔE₁.",
          keywords: ["spectrochemical", "stronger-field", "larger splitting"],
        },
        {
          point: "Links larger ΔE₂ to absorbing higher-frequency / shorter-wavelength violet light (transmitting yellow) vs red light absorbed (green transmitted) for H₂O.",
          keywords: ["shorter-wavelength", "higher-frequency", "violet", "red light"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid crystal-field explanation or attributes colour to photon emission.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions d-orbital splitting or stronger CN⁻ ligands, but omits complementary colour transmission or frequency/wavelength link.",
          indicators: ["States complexes emit green or yellow light (fatal misconception!)."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains octahedral d-orbital splitting, d–d visible absorption, complementary transmission, and larger ΔE for CN⁻, omitting only exact wavelength/colour mapping.",
          indicators: ["Clearly links ΔE = hν to the spectrochemical series."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, rigorous HL crystal-field explanation covering partially filled 3d⁶, octahedral splitting, visible d–d absorption, complementary transmission, spectrochemical series, and red→green vs violet→yellow shift.",
          indicators: ["Accurately contrasts absorbed vs transmitted colours for both complexes."],
        },
      ],
      commonError: "Saying that coloured transition-metal solutions *emit* green or yellow light when electrons fall back down (colour comes from **absorbing** visible light and transmitting the **complementary** colour!).",
    },

    // ===================== Q05: S3.2 IHD with Nitrogen (SL bridge) ===========
    {
      id: "exam-p2-hl-q05",
      kind: "short",
      topicId: "s3-2-organic-classification",
      guideRef: "ihd-ms-ir-spectroscopy",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Apply IHD = (2C + 2 + N − H − X) / 2, remembering to ADD nitrogen atoms and ignore oxygen",
      question:
        "Caffeine has the molecular formula `C₈H₁₀N₄O₂`. Calculate the Index of Hydrogen Deficiency (`IHD`) of caffeine.",
      answer: { type: "number", value: 6, tolerance: 0, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 4, tolerance: 0 },
          feedback: "Remember to ADD N (not ignore it) in IHD = (2C + 2 + N − H − X) / 2: (16 + 2 + 4 − 10) / 2 = 6.",
        },
        {
          spec: { type: "number", value: 2, tolerance: 0 },
          feedback: "Nitrogen is ADDED (+N), not subtracted, in the IHD formula.",
        },
      ],
      hints: [
        "Use `IHD = (2C + 2 + N − H − X) / 2`: add `N = 4`, subtract `H = 10`, ignore `O = 2`.",
        "Evaluate `(2 × 8 + 2 + 4 − 10) / 2`.",
      ],
      solution: [
        "`IHD = (2 × 8 + 2 + 4 − 10) / 2 = (16 + 2 + 4 − 10) / 2 = 12 / 2 = 6`.",
        "Structurally, caffeine contains two fused rings (`2`) plus four double bonds (two `C=O`, one `C=C`, one `C=N`), totalling `6`.",
      ],
      commonError: "Ignoring or subtracting nitrogen atoms instead of adding `+N` in `IHD = (2C + 2 + N − H − X) / 2`.",
    },

    // ===================== Q06: S3.2 Combined MS/IR/¹H NMR (HL) ==============
    {
      id: "exam-p2-hl-q06",
      kind: "written",
      topicId: "s3-2-organic-classification",
      guideRef: "proton-nmr-combined-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Combine IHD = 1, IR C=O (no O−H), MS fragments, and ¹H NMR septet/doublet isopropyl + deshielding at 4.98 ppm",
      diagram: SVG_PROTON_NMR_ISOPROPYL,
      marks: 6,
      question:
        "An unknown fragrant liquid `Z` has empirical formula `C₅H₁₀O₂` and a mass-spectrum molecular ion peak at `m/z = 102` with prominent fragments at `m/z = 43` and `m/z = 59`. Its IR spectrum shows a strong sharp band at `1740 cm⁻¹` and no broad absorption between `2500` and `3600 cm⁻¹`. Its high-resolution `¹H NMR` spectrum is shown above. Deduce the structural formula and IUPAC name of `Z`, justifying your assignment from IHD, IR, MS, and every `¹H NMR` signal (and explaining why the isomer `methyl 2-methylpropanoate`, `(CH₃)₂CHCOOCH₃`, is ruled out).",
      hints: [
        "Verify the molecular formula is `C₅H₁₀O₂` (`M_r = 102`) with `IHD = 1`, and use IR (`1740 cm⁻¹`, no `O−H`) to identify the ester functional group.",
        "In the `¹H NMR`, a `6H` doublet (`n+1 = 2`, 1 adjacent H) coupled to a `1H` septet (`n+1 = 7`, 6 adjacent H) is the unmistakable fingerprint of an isopropyl group `−CH(CH₃)₂`!",
        "Look at the chemical shift of the `1H` septet (`4.98 ppm` — strongly deshielded by an ester single-bonded oxygen `−O−CH`) vs the `3H` singlet (`2.02 ppm`, `CH₃−C=O`). How would those shifts swap in `(CH₃)₂CHCOOCH₃`?",
      ],
      modelAnswer:
        "Since `C₅H₁₀O₂` has molar mass `102`, the molecular formula equals the empirical formula and `IHD = (2×5 + 2 − 10) / 2 = 1` (one `C=O` double bond). The sharp IR peak at `1740 cm⁻¹` confirms a `C=O` carbonyl bond, while the absence of any broad `O−H` absorption (`2500–3600 cm⁻¹`) rules out carboxylic acids and hydroxy-carbonyls, identifying an ester. In the `¹H NMR` spectrum, the `6H` doublet at `1.24 ppm` (coupled to 1 neighbouring H) and `1H` septet at `4.98 ppm` (coupled to 6 equivalent methyl H) reveal an isopropyl group, `−CH(CH₃)₂`. The strong downfield shift of the `1H` septet to `4.98 ppm` shows the `CH` carbon is bonded directly to the electronegative ester oxygen (`−O−CH(CH₃)₂`), while the `3H` singlet at `2.02 ppm` (0 neighbours) matches `CH₃−C=O`. This is corroborated by MS fragments `CH₃CO⁺` / `(CH₃)₂CH⁺` (`m/z = 43`) and `(CH₃)₂CHO⁺` (`m/z = 59`). Compound `Z` is therefore propan-2-yl ethanoate (isopropyl ethanoate), `CH₃COOCH(CH₃)₂`. The isomer `(CH₃)₂CHCOOCH₃` is eliminated because its `−OCH₃` singlet would be strongly deshielded near `3.7 ppm` and its methine septet would lie much further upfield near `2.5 ppm`.",
      markScheme: [
        {
          point: "Confirms molecular formula C₅H₁₀O₂ with IHD = 1 (one π bond / C=O).",
          keywords: ["ihd = (2×5", "ihd = 1", "ihd=1", "one c=o"],
        },
        {
          point: "Uses IR (sharp 1740 cm⁻¹ C=O, no broad O−H) to confirm an ester functional group.",
          keywords: ["identifying an ester", "ester", "o−h", "o-h"],
        },
        {
          point: "Assigns the 6H doublet (1.24 ppm) and 1H septet (4.98 ppm) to an isopropyl group −CH(CH₃)₂ via n + 1 splitting.",
          keywords: ["isopropyl", "−ch(ch₃)₂", "-ch(ch3)2", "6 equivalent"],
        },
        {
          point: "Assigns the 3H singlet (2.02 ppm) to CH₃−C=O and links the downfield 4.98 ppm shift to direct bonding to ester oxygen (−O−CH).",
          keywords: ["downfield", "ester oxygen", "ch₃−c=o", "ch3-c=o"],
        },
        {
          point: "Matches MS fragments m/z = 43 (CH₃CO⁺ / C₃H₇⁺) and/or m/z = 59 ((CH₃)₂CHO⁺) AND rules out (CH₃)₂CHCOOCH₃ via swapped chemical shifts (~3.7 ppm singlet / ~2.5 ppm septet).",
          keywords: ["3.7 ppm", "2.5 ppm", "ch₃co⁺", "ch3co+"],
        },
        {
          point: "Deduces structural formula CH₃COOCH(CH₃)₂ and IUPAC name propan-2-yl ethanoate (accept isopropyl ethanoate / 1-methylethyl ethanoate).",
          keywords: ["propan-2-yl ethanoate", "isopropyl ethanoate", "ch₃cooch(ch₃)₂", "ch3cooch(ch3)2"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Incorrect structure or no valid multi-spectroscopic reasoning.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies ester from IR/IHD or recognizes an isopropyl splitting pattern, but assigns the wrong ester orientation or omits splitting/shift justifications.",
          indicators: ["Confuses CH₃COOCH(CH₃)₂ with (CH₃)₂CHCOOCH₃."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly deduces CH₃COOCH(CH₃)₂ using IHD, IR, and ¹H NMR splitting, but omits explicit chemical-shift distinction from the isomer or MS fragment assignment.",
          indicators: ["Correct structure deduced without proving why 4.98 ppm rules out (CH₃)₂CHCOOCH₃."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Authoritative HL elucidation integrating IHD = 1, IR ester assignment, MS fragments (43 & 59), n + 1 coupling of all three ¹H NMR signals, downfield −O−CH deshielding at 4.98 ppm, and clear elimination of (CH₃)₂CHCOOCH₃.",
          indicators: ["Explicitly contrasts 4.98/2.02 ppm with the expected ~3.7/2.5 ppm shifts of the isomer."],
        },
      ],
      commonError: "Swapping the two ester orientations (`CH₃COOCH(CH₃)₂` vs `(CH₃)₂CHCOOCH₃`) by ignoring which proton environment is deshielded to `4–5 ppm` by the single-bonded ester oxygen.",
    },

    // ===================== Q07: R1.2 Born–Haber Cycle MgO (HL) ===============
    {
      id: "exam-p2-hl-q07",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "born-haber-solution-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Sum atomization, ionization, and electron affinity steps, then subtract ΔH_f⊖ to get endothermic ΔH_lat⊖",
      diagram: SVG_BORN_HABER_MGO,
      question:
        "Using the Born–Haber cycle above and standard enthalpy values (`kJ mol⁻¹`): `ΔH_f⊖[MgO(s)] = −602`, `ΔH_at⊖[Mg(s)] = +148`, `IE₁(Mg) = +738`, `IE₂(Mg) = +1451`, `ΔH_at⊖[O] = {{1/2}} E(O=O) = +249`, `EA₁(O) = −141`, and `EA₂(O) = +753`, calculate the lattice enthalpy of dissociation `ΔH_lat⊖` for `MgO(s) → Mg²⁺(g) + O²⁻(g)` (in `kJ mol⁻¹`, including sign).",
      answer: { type: "number", value: 3800, tolerance: 10, display: "+3800 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 2596, tolerance: 10 },
          feedback: "Check the sign of ΔH_f⊖: climbing from MgO(s) up to Mg(s) + ½O₂(g) REVERSES −602 to +602, so add 602 instead of subtracting.",
        },
        {
          spec: { type: "number", value: -3800, tolerance: 10 },
          feedback: "The question uses the IB Data Booklet endothermic lattice DISSOCIATION convention MgO(s) → Mg²⁺(g) + O²⁻(g), so ΔH_lat⊖ is positive (+3800 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: 4082, tolerance: 10 },
          feedback: "Check the sign of EA₁(O): adding the first electron to O(g) is exothermic (−141 kJ mol⁻¹), not endothermic (+141).",
        },
      ],
      hints: [
        "Follow the clockwise path from `MgO(s)` up to `Mg²⁺(g) + O²⁻(g)`: first reverse `ΔH_f⊖` (`+602`), then add all atomization, ionization, and electron-affinity steps.",
        "Pay close attention to signs: `EA₁(O) = −141` (exothermic) while `EA₂(O) = +753` (endothermic due to repelling an electron onto `O⁻`).",
      ],
      solution: [
        "By Hess's Law: `ΔH_lat⊖ = −ΔH_f⊖ + ΔH_at(Mg) + ΔH_at(O) + IE₁(Mg) + IE₂(Mg) + EA₁(O) + EA₂(O)`.",
        "`ΔH_lat⊖ = −(−602) + 148 + 249 + 738 + 1451 + (−141) + 753`.",
        "`ΔH_lat⊖ = 602 + 3198 = +3800 kJ mol⁻¹`.",
      ],
      commonError: "Forgetting to reverse the sign of `ΔH_f⊖` (`−602` → `+602`) or forgetting that `EA₂(O)` is endothermic (`+753`) whereas `EA₁(O)` is exothermic (`−141`).",
    },

    // ===================== Q08: R1.4 Gibbs Free Energy ΔG⊖ (HL) ==============
    {
      id: "exam-p2-hl-q08",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "entropy-gibbs-spontaneity-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Find ΔS⊖ = 2S⊖(NO₂) − S⊖(N₂O₄), divide by 1000 for kJ K⁻¹ mol⁻¹, then compute ΔG⊖ = ΔH⊖ − TΔS⊖",
      question:
        "Consider the dissociation equilibrium `N₂O₄(g) ⇌ 2NO₂(g)`, which has `ΔH⊖ = +57.2 kJ mol⁻¹`. Standard entropies at `298 K` are `S⊖[N₂O₄(g)] = 304.4 J K⁻¹ mol⁻¹` and `S⊖[NO₂(g)] = 240.1 J K⁻¹ mol⁻¹`. Calculate `ΔG⊖` at `298 K` (in `kJ mol⁻¹`, to 3 significant figures, including sign).",
      answer: { type: "number", value: 4.81, tolerance: 0.05, display: "+4.81 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: -52331, tolerance: 200 },
          feedback: "Unit trap! Convert ΔS⊖ from J K⁻¹ mol⁻¹ (+175.8) to kJ K⁻¹ mol⁻¹ (+0.1758) by dividing by 1000 before multiplying by T.",
        },
        {
          spec: { type: "number", value: 76.4, tolerance: 0.5 },
          feedback: "Remember to multiply S⊖[NO₂(g)] by its stoichiometric coefficient 2: ΔS⊖ = 2(240.1) − 304.4 = +175.8 J K⁻¹ mol⁻¹.",
        },
      ],
      hints: [
        "First compute `ΔS⊖ = 2 × S⊖(NO₂) − S⊖(N₂O₄) = 2(240.1) − 304.4` (in `J K⁻¹ mol⁻¹`).",
        "Divide `ΔS⊖` by `1000` to convert to `kJ K⁻¹ mol⁻¹` before substituting into `ΔG⊖ = ΔH⊖ − TΔS⊖` at `T = 298 K`.",
      ],
      solution: [
        "`ΔS⊖ = 2(240.1) − 304.4 = 480.2 − 304.4 = +175.8 J K⁻¹ mol⁻¹ = +0.1758 kJ K⁻¹ mol⁻¹`.",
        "`ΔG⊖ = ΔH⊖ − TΔS⊖ = +57.2 − (298 × 0.1758) = +57.2 − 52.39 = +4.81 kJ mol⁻¹`.",
      ],
      commonError: "Substituting `ΔS⊖` in `J K⁻¹ mol⁻¹` directly alongside `ΔH⊖` in `kJ mol⁻¹`, or omitting the factor of `2` for `2NO₂(g)`.",
    },

    // ===================== Q09: R1.4 Entropy, Crossover & Kinetics (HL) ======
    {
      id: "exam-p2-hl-q09",
      kind: "written",
      topicId: "r1-energetics-spontaneity",
      guideRef: "entropy-gibbs-spontaneity-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Link ΔS > 0 to gas moles/microstates, high-T spontaneity to −TΔS outweighing +ΔH, and diamond stability to high E_a",
      marks: 4,
      question:
        "Refer to `N₂O₄(g) ⇌ 2NO₂(g)` (`ΔH⊖ = +57.2 kJ mol⁻¹`, `ΔS⊖ = +175.8 J K⁻¹ mol⁻¹`, `ΔG⊖(298 K) = +4.81 kJ mol⁻¹`). (a) Explain why `ΔS⊖` is positive. (b) Explain why the reaction is non-spontaneous at `298 K` yet becomes spontaneous above `325 K`. (c) Separately, `C(diamond) → C(graphite)` has `ΔG⊖ = −2.9 kJ mol⁻¹` at `298 K`, yet diamonds persist indefinitely at room temperature; explain this observation.",
      hints: [
        "Compare the number of moles of gas on each side (`1 mol → 2 mol`) and relate to the number of ways of distributing energy and particles (microstates).",
        "Look at the two opposing terms in `ΔG⊖ = ΔH⊖ − TΔS⊖` when both `ΔH⊖ > 0` and `ΔS⊖ > 0`.",
        "Distinguish **thermodynamic spontaneity** (`ΔG < 0`) from **kinetic stability** (activation energy barrier `E_a`).",
      ],
      modelAnswer:
        "(a) `ΔS⊖` is positive because `1 mol` of gaseous `N₂O₄` dissociates into `2 mol` of gaseous `NO₂`, increasing the number of gas particles and therefore the number of possible arrangements (microstates) for distributing particles and thermal energy. (b) Because `ΔH⊖ > 0` and `ΔS⊖ > 0`, the favourable `−TΔS⊖` term increases in magnitude with temperature; below `325 K` (`T = 57.2 / 0.1758`), `+ΔH⊖` outweighs `−TΔS⊖` so `ΔG⊖ > 0`, whereas above `325 K` `TΔS⊖ > ΔH⊖`, making `ΔG⊖ < 0` and the forward reaction spontaneous. (c) Although diamond → graphite is thermodynamically feasible (`ΔG⊖ < 0`), breaking diamond's giant 3D covalent lattice imposes an enormous activation energy `E_a`, making the conversion rate negligibly slow at `298 K` (kinetically stable).",
      markScheme: [
        {
          point: "Links positive ΔS⊖ to increasing moles of gas (1 mol → 2 mol), giving greater dispersal / more microstates.",
          keywords: ["1 mol", "2 mol", "microstates", "arrangements"],
        },
        {
          point: "Explains that when ΔH > 0 and ΔS > 0, raising T makes the −TΔS term larger in magnitude until TΔS > ΔH and ΔG < 0.",
          keywords: ["outweighs", "tδs > δh", "δg⊖ < 0", "dg < 0"],
        },
        {
          point: "Identifies diamond → graphite as thermodynamically spontaneous/feasible (ΔG < 0) yet kinetically stable/inert.",
          keywords: ["kinetically stable", "thermodynamically feasible", "kinetically"],
        },
        {
          point: "Attributes the negligible rate at 298 K to a very high activation energy E_a (breaking strong covalent C−C bonds).",
          keywords: ["activation energy", "enormous", "negligibly slow", "covalent"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid thermodynamic or kinetic explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States gas moles increase or mentions high activation energy, but fails to link ΔG = ΔH − TΔS sign competition or clearly separate thermodynamics from kinetics.",
          indicators: ["Confuses ΔG < 0 with fast reaction rate."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly links Δn_gas > 0 to entropy/microstates, explains the 325 K crossover via −TΔS overcoming +ΔH, and distinguishes thermodynamic spontaneity from kinetic stability via very high E_a.",
          indicators: ["Accurately contrasts thermodynamic feasibility with kinetic barrier."],
        },
      ],
      commonError: "Confusing thermodynamic spontaneity (`ΔG < 0`) with speed (`ΔG` tells you nothing about reaction rate or `E_a`!).",
    },

    // ===================== Q10: R2.2 Initial-Rate Table & k (HL) =============
    {
      id: "exam-p2-hl-q10",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Deduce orders in NO (2) and H₂ (1) from paired trials, then solve k = rate / ([NO]²[H₂])",
      question:
        "Initial-rate data at `1100 K` for `2NO(g) + 2H₂(g) → N₂(g) + 2H₂O(g)` are shown below:\n\n| Experiment | `[NO] / mol dm⁻³` | `[H₂] / mol dm⁻³` | Initial rate `/ mol dm⁻³ s⁻¹` |\n|---|---|---|---|\n| 1 | `0.10` | `0.10` | `1.20 × 10⁻³` |\n| 2 | `0.20` | `0.10` | `4.80 × 10⁻³` |\n| 3 | `0.20` | `0.20` | `9.60 × 10⁻³` |\n\nDeduce the rate equation and calculate the rate constant `k` at `1100 K` (in `dm⁶ mol⁻² s⁻¹`, to 3 significant figures).",
      answer: { type: "number", value: 1.2, tolerance: 0.03, display: "1.20 dm⁶ mol⁻² s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 12, tolerance: 0.3 },
          feedback: "Check the order in H₂ (Expt 2 → 3): doubling [H₂] doubles the rate (first order, NOT second order despite the 2H₂ stoichiometric coefficient!).",
        },
        {
          spec: { type: "number", value: 0.12, tolerance: 0.01 },
          feedback: "Check the order in NO (Expt 1 → 2): doubling [NO] quadruples the rate, so [NO] is squared ([NO]²).",
        },
      ],
      hints: [
        "Compare Expt 1 and 2 (`[H₂]` fixed): doubling `[NO]` multiplies rate by `4.80 / 1.20 = 4`, so order in `NO` is `2`.",
        "Compare Expt 2 and 3 (`[NO]` fixed): doubling `[H₂]` multiplies rate by `9.60 / 4.80 = 2`, so order in `H₂` is `1`.",
        "Substitute Experiment 1 into `k = rate / ([NO]²[H₂])`.",
      ],
      solution: [
        "Expt 1 → 2: `[NO]` × 2 at constant `[H₂]` → rate × 4 (`2²`), so second order in `NO`.",
        "Expt 2 → 3: `[H₂]` × 2 at constant `[NO]` → rate × 2 (`2¹`), so first order in `H₂`. Rate law: `rate = k[NO]²[H₂]`.",
        "From Expt 1: `k = 1.20 × 10⁻³ / (0.10² × 0.10) = 1.20 × 10⁻³ / 1.00 × 10⁻³ = 1.20 dm⁶ mol⁻² s⁻¹`.",
      ],
      commonError: "Assuming the rate law follows the balanced stoichiometric coefficients (`[NO]²[H₂]²`) instead of experimental initial-rate orders.",
    },

    // ===================== Q11: R2.2 Two-Temperature Arrhenius (HL) ==========
    {
      id: "exam-p2-hl-q11",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Apply ln(k₂ / k₁) = (E_a / R)(1/T₁ − 1/T₂) and convert E_a from J to kJ",
      question:
        "A first-order decomposition has rate constant `k₁ = 2.00 × 10⁻³ s⁻¹` at `300 K` and `k₂ = 1.60 × 10⁻² s⁻¹` at `320 K` (`R = 8.31 J K⁻¹ mol⁻¹`). Using the Arrhenius equation `ln(k₂ / k₁) = (E_a / R)(1/T₁ − 1/T₂)`, calculate the activation energy `E_a` (in `kJ mol⁻¹`, to 3 significant figures).",
      answer: { type: "number", value: 82.9, tolerance: 0.5, display: "82.9 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 82900, tolerance: 500 },
          feedback: "Convert from J mol⁻¹ to kJ mol⁻¹ by dividing by 1000 (82.9 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: 36.0, tolerance: 0.5 },
          feedback: "Use the natural logarithm ln(8) = 2.079, not base-10 log₁₀(8) = 0.903!",
        },
      ],
      hints: [
        "Compute the ratio `k₂ / k₁ = (1.60 × 10⁻²) / (2.00 × 10⁻³) = 8.00` and take its natural logarithm `ln(8.00) = 2.0794`.",
        "Evaluate `1/300 − 1/320 = 2.0833 × 10⁻⁴ K⁻¹` (avoid over-rounding this reciprocal difference!).",
        "Solve `E_a = ln(8.00) × 8.31 / (2.0833 × 10⁻⁴)` in `J mol⁻¹`, then divide by `1000`.",
      ],
      solution: [
        "`ln(k₂ / k₁) = ln(1.60 × 10⁻² / 2.00 × 10⁻³) = ln(8.00) = 2.0794`.",
        "`1/T₁ − 1/T₂ = 1/300 − 1/320 = 20 / 96 000 = 2.0833 × 10⁻⁴ K⁻¹`.",
        "`E_a = (2.0794 × 8.31) / (2.0833 × 10⁻⁴) = 82 945 J mol⁻¹ = 82.9 kJ mol⁻¹`.",
      ],
      commonError: "Using `log₁₀` instead of `ln`, or rounding `1/300 − 1/320` prematurely to `2.1 × 10⁻⁴`.",
    },

    // ===================== Q12: R2.3 ICE Table K_c (HL) ======================
    {
      id: "exam-p2-hl-q12",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "equilibrium-ice-gibbs-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Build an ICE table in mol dm⁻³ (or moles since Δn_gas = 0) and substitute into K_c = [HI]² / ([H₂][I₂])",
      question:
        "Exactly `0.400 mol` of `H₂(g)` and `0.400 mol` of `I₂(g)` are sealed in an empty `2.00 dm³` flask at `700 K` and allowed to equilibrate: `H₂(g) + I₂(g) ⇌ 2HI(g)`. At equilibrium, `0.620 mol` of `HI(g)` is present. Calculate the equilibrium constant `K_c` at `700 K` (to 3 significant figures).",
      answer: { type: "number", value: 47.5, tolerance: 0.5, display: "47.5" },
      traps: [
        {
          spec: { type: "number", value: 7.9, tolerance: 0.3 },
          feedback: "Check the stoichiometry: forming 0.620 mol HI consumes 0.310 mol of H₂ and 0.310 mol of I₂ (leaving 0.090 mol each, not 0.620/2 wrong subtraction).",
        },
        {
          spec: { type: "number", value: 153, tolerance: 2 },
          feedback: "Remember to square [HI] in K_c = [HI]² / ([H₂][I₂]) and subtract 0.310 mol (not 0.620 mol) from initial H₂ and I₂.",
        },
      ],
      hints: [
        "Convert initial and equilibrium moles into concentrations (`÷ 2.00 dm³`): `[H₂]_0 = [I₂]_0 = 0.200 mol dm⁻³`, `[HI]_eq = 0.310 mol dm⁻³`.",
        "From `H₂ + I₂ ⇌ 2HI`, forming `2x = 0.310 mol dm⁻³` of `HI` consumes `x = 0.155 mol dm⁻³` of each reactant.",
        "Substitute `[H₂]_eq = [I₂]_eq = 0.045 mol dm⁻³` and `[HI]_eq = 0.310 mol dm⁻³` into `K_c = [HI]² / ([H₂][I₂])`.",
      ],
      solution: [
        "Initial concentrations: `[H₂] = 0.400 / 2.00 = 0.200 mol dm⁻³`, `[I₂] = 0.200 mol dm⁻³`, `[HI] = 0`.",
        "Equilibrium `[HI] = 0.620 / 2.00 = 0.310 mol dm⁻³` → `2x = 0.310` → `x = 0.155 mol dm⁻³`.",
        "Equilibrium `[H₂] = [I₂] = 0.200 − 0.155 = 0.045 mol dm⁻³`.",
        "`K_c = 0.310² / (0.045 × 0.045) = 0.0961 / 0.002025 = 47.46 ≈ 47.5`.",
      ],
      commonError: "Subtracting `0.620` instead of `0.310` (`x`, not `2x`) from the initial moles of `H₂` and `I₂`.",
    },

    // ===================== Q13: R2.3 ΔG⊖ = −RT ln K (HL) =====================
    {
      id: "exam-p2-hl-q13",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "equilibrium-ice-gibbs-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Substitute R = 8.31, T = 298, and ln(4.00) into ΔG⊖ = −RT ln K and divide by 1000 for kJ mol⁻¹",
      question:
        "An esterification equilibrium at `298 K` has equilibrium constant `K_c = 4.00` (`R = 8.31 J K⁻¹ mol⁻¹`). Using `ΔG⊖ = −RT ln K`, calculate `ΔG⊖` for the reaction at `298 K` (in `kJ mol⁻¹`, to 3 significant figures, including sign).",
      answer: { type: "number", value: -3.43, tolerance: 0.04, display: "-3.43 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: -3430, tolerance: 40 },
          feedback: "Convert from J mol⁻¹ to kJ mol⁻¹ by dividing by 1000 (−3.43 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: 3.43, tolerance: 0.04 },
          feedback: "Since K_c = 4.00 > 1, products are favoured and ΔG⊖ = −RT ln K must be negative (−3.43 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: -1.49, tolerance: 0.04 },
          feedback: "Use the natural logarithm ln(4.00) = 1.386, not base-10 log₁₀(4.00) = 0.602.",
        },
      ],
      hints: [
        "Since `K_c > 1`, check the sign first: `ln(4.00) > 0`, so `ΔG⊖ = −RT ln K` must be negative.",
        "Evaluate `−8.31 × 298 × ln(4.00)` in `J mol⁻¹`, then divide by `1000` to obtain `kJ mol⁻¹`.",
      ],
      solution: [
        "`ΔG⊖ = −RT ln K = −8.31 × 298 × ln(4.00) = −2476.38 × 1.3863 = −3433 J mol⁻¹`.",
        "Converting to kilojoules: `ΔG⊖ = −3.43 kJ mol⁻¹`.",
      ],
      commonError: "Forgetting the `÷ 1000` conversion (`J → kJ`), using `log₁₀` instead of `ln`, or omitting the minus sign.",
    },

    // ===================== Q14: R3.1 Buffer pH Calculation (HL) ==============
    {
      id: "exam-p2-hl-q14",
      kind: "short",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "weak-acids-buffers-titrations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Neutralize HA with OH⁻ first to find remaining n(HA) and formed n(A⁻), then apply Henderson–Hasselbalch",
      question:
        "A buffer is prepared at `298 K` by mixing `40.0 cm³` of `0.250 mol dm⁻³` propanoic acid (`CH₃CH₂COOH`, `pK_a = 4.87`) with `20.0 cm³` of `0.200 mol dm⁻³ NaOH(aq)`. Calculate the pH of the resulting buffer solution (to 2 decimal places).",
      answer: { type: "number", value: 4.69, tolerance: 0.02, display: "4.69" },
      traps: [
        {
          spec: { type: "number", value: 4.47, tolerance: 0.02 },
          feedback: "You plugged initial acid moles (0.0100 mol) directly into [HA] instead of subtracting the 0.00400 mol neutralized by NaOH (leaving 0.00600 mol HA)!",
        },
        {
          spec: { type: "number", value: 5.05, tolerance: 0.02 },
          feedback: "Check the log ratio: pH = pK_a + log([A⁻]/[HA]) = 4.87 + log(0.00400 / 0.00600), not log(0.00600 / 0.00400).",
        },
      ],
      hints: [
        "Calculate initial moles: `n(HA)_0 = 0.0400 × 0.250 = 0.0100 mol` and `n(OH⁻) = 0.0200 × 0.200 = 0.00400 mol`.",
        "All `OH⁻` reacts with `HA` to form `0.00400 mol` of conjugate base `A⁻`, leaving `0.0100 − 0.00400 = 0.00600 mol` of `HA`.",
        "Because both species share the same `60.0 cm³` volume, `[A⁻] / [HA] = n(A⁻) / n(HA) = 0.00400 / 0.00600`; substitute into `pH = pK_a + log₁₀([A⁻]/[HA])`.",
      ],
      solution: [
        "Initial moles: `n(HA)_0 = 0.0400 × 0.250 = 0.0100 mol`; `n(OH⁻) = 0.0200 × 0.200 = 0.00400 mol`.",
        "After neutralization (`HA + OH⁻ → A⁻ + H₂O`): `n(A⁻) = 0.00400 mol` and `n(HA) = 0.0100 − 0.00400 = 0.00600 mol`.",
        "Using Henderson–Hasselbalch: `pH = 4.87 + log₁₀(0.00400 / 0.00600) = 4.87 − 0.176 = 4.69`.",
      ],
      commonError: "Forgetting to subtract `n(OH⁻)` from `n(HA)_0` before applying Henderson–Hasselbalch, which gives `4.47` instead of `4.69`.",
    },

    // ===================== Q15: R3.1 Buffer Action & FeCl₃ Hydrolysis (HL) ===
    {
      id: "exam-p2-hl-q15",
      kind: "written",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "weak-acids-buffers-titrations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Give ionic buffer equations for added H⁺ and OH⁻, then explain Fe³⁺ charge-density polarization of coordinated H₂O",
      marks: 4,
      question:
        "(a) Explain how the propanoic acid (`HA`) / propanoate (`A⁻`) buffer resists large pH changes when small amounts of (i) strong acid (`H⁺`) and (ii) strong base (`OH⁻`) are added, writing ionic equations for both reactions. (b) Explain why an aqueous solution of iron(III) chloride (`FeCl₃(aq)`) has a pH around `2`, including an equation involving the hydrated complex ion `[Fe(H₂O)₆]³⁺`.",
      hints: [
        "In the buffer, large reservoirs of BOTH `A⁻` (to mop up added `H⁺`) and `HA` (to neutralize added `OH⁻`) keep the ratio `[A⁻] / [HA]` nearly constant.",
        "For `FeCl₃(aq)`, describe how the small, highly charged `Fe³⁺` cation pulls electron density away from the `O−H` bonds of its six coordinated water ligands.",
      ],
      modelAnswer:
        "(a) The buffer holds large reservoirs of weak acid `HA` and conjugate base `A⁻`. When small amounts of `H⁺` are added, propanoate ions consume them: `A⁻(aq) + H⁺(aq) → HA(aq)`. When small amounts of `OH⁻` are added, propanoic acid neutralizes them: `HA(aq) + OH⁻(aq) → A⁻(aq) + H₂O(l)`. Because the `[A⁻] / [HA]` ratio changes only slightly, the pH remains almost constant. (b) In `FeCl₃(aq)`, the small, highly charged `Fe³⁺` ion has a very high charge density that strongly polarizes the `O−H` bonds of coordinated water ligands in `[Fe(H₂O)₆]³⁺`, weakening them so a proton is released into water: `[Fe(H₂O)₆]³⁺(aq) + H₂O(l) ⇌ [Fe(H₂O)₅(OH)]²⁺(aq) + H₃O⁺(aq)`.",
      markScheme: [
        {
          point: "Added H⁺ is consumed by conjugate base A⁻: A⁻ + H⁺ → HA (or CH₃CH₂COO⁻ + H⁺ → CH₃CH₂COOH).",
          keywords: ["a⁻(aq) + h⁺", "a- + h+", "propanoate ions consume"],
        },
        {
          point: "Added OH⁻ is neutralized by weak acid HA: HA + OH⁻ → A⁻ + H₂O (keeping [A⁻]/[HA] nearly constant).",
          keywords: ["ha(aq) + oh⁻", "ha + oh-", "ratio changes only slightly"],
        },
        {
          point: "Explains Fe³⁺ has a very high charge density (small radius, 3+ charge) that polarizes and weakens O−H bonds of coordinated water ligands.",
          keywords: ["charge density", "polarizes", "polarises", "weakening"],
        },
        {
          point: "Provides the hydrolysis equation releasing H⁺ / H₃O⁺: [Fe(H₂O)₆]³⁺ ⇌ [Fe(H₂O)₅(OH)]²⁺ + H⁺ (or with H₂O → H₃O⁺).",
          keywords: ["[fe(h₂o)₅(oh)]²⁺", "[fe(h2o)5(oh)]2+", "h₃o⁺", "h3o+"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid buffer mechanism or metal-ion hydrolysis explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Explains buffer action OR FeCl₃ acidity, but lacks ionic equations or omits charge-density polarization of O−H bonds.",
          indicators: ["Says FeCl₃ is acidic because 'HCl is a strong acid' without mentioning [Fe(H₂O)₆]³⁺ polarization."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Gives both buffer ionic equations showing stable [A⁻]/[HA] ratio and explains [Fe(H₂O)₆]³⁺ acidity via high charge density polarizing water O−H bonds with balanced equation.",
          indicators: ["Links high Fe³⁺ charge density explicitly to O−H bond weakening and H₃O⁺ release."],
        },
      ],
      commonError: "Explaining `FeCl₃(aq)` acidity simply as 'Cl⁻ comes from HCl' (`Cl⁻` is a negligible base; the acidity comes from **high-charge-density `Fe³⁺` polarizing coordinated `H₂O` ligands**!).",
    },

    // ===================== Q16: R3.2 Quantitative Faraday Electrolysis (HL) ==
    {
      id: "exam-p2-hl-q16",
      kind: "short",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert time to seconds, find Q = It, divide by F for n(e⁻), divide by 2 for Cu²⁺ + 2e⁻ → Cu, then multiply by A_r(Cu)",
      question:
        "A steady current of `2.50 A` is passed through aqueous copper(II) sulfate, `CuSO₄(aq)`, for `32.0 minutes` (`F = 96 500 C mol⁻¹`, `A_r(Cu) = 63.55`). Calculate the mass of copper deposited at the cathode (in `g`, to 3 significant figures).",
      answer: { type: "number", value: 1.58, tolerance: 0.03, display: "1.58 g" },
      traps: [
        {
          spec: { type: "number", value: 3.16, tolerance: 0.05 },
          feedback: "Remember Cu²⁺(aq) + 2e⁻ → Cu(s) requires 2 moles of electrons per mole of copper: divide n(e⁻) by 2!",
        },
        {
          spec: { type: "number", value: 0.0263, tolerance: 0.002 },
          feedback: "Convert time from minutes to seconds (32.0 × 60 = 1920 s) before calculating Q = I t.",
        },
      ],
      hints: [
        "Convert `32.0 minutes` to seconds (`1920 s`) and compute total charge `Q = I t = 2.50 × 1920`.",
        "Calculate moles of electrons `n(e⁻) = Q / F`, then use `Cu²⁺ + 2e⁻ → Cu` so `n(Cu) = n(e⁻) / 2`.",
        "Multiply `n(Cu)` by `63.55 g mol⁻¹`.",
      ],
      solution: [
        "Charge passed: `Q = I t = 2.50 × (32.0 × 60) = 4800 C`.",
        "Moles of electrons: `n(e⁻) = Q / F = 4800 / 96 500 = 0.04974 mol`.",
        "From `Cu²⁺(aq) + 2e⁻ → Cu(s)`, `n(Cu) = 0.04974 / 2 = 0.02487 mol`.",
        "Mass of copper deposited: `m(Cu) = 0.02487 × 63.55 = 1.58 g`.",
      ],
      commonError: "Forgetting to divide `n(e⁻)` by `2` for the `2e⁻` reduction of `Cu²⁺`, or forgetting to convert minutes into seconds.",
    },

    // ===================== Q17: R3.2 Aqueous Electrolysis Comparison (HL) ====
    {
      id: "exam-p2-hl-q17",
      kind: "written",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Compare and contrast",
      strategy: "Use E⊖ values, brine Cl⁻ concentration/overpotential effect + OH⁻ buildup, and active Cu anode oxidation",
      marks: 5,
      question:
        "Standard electrode potentials (`V`) are: `Na⁺/Na = −2.71`, `H₂O/H₂ = −0.83`, `Cu²⁺/Cu = +0.34`, `O₂/H₂O = +1.23`, and `Cl₂/Cl⁻ = +1.36`. Compare and contrast the electrolysis of (1) **concentrated aqueous `NaCl(aq)` (brine)** using inert graphite electrodes and (2) **aqueous `CuSO₄(aq)`** using **active copper** electrodes, stating electrode products, half-equations, and resulting electrolyte changes in both cells.",
      hints: [
        "In brine cathode: compare `Na⁺` (`−2.71 V`) vs `H₂O` (`−0.83 V`) — which has the less negative (more positive) `E⊖` and is preferentially reduced, and what happens to solution pH?",
        "In brine anode: although `O₂/H₂O` (`+1.23 V`) is slightly less positive than `Cl₂/Cl⁻` (`+1.36 V`), why is `Cl₂(g)` discharged in **concentrated** `NaCl(aq)`?",
        "In `CuSO₄(aq)` with active copper electrodes: compare `Cu²⁺/Cu` (`+0.34 V`) vs `H₂O/H₂` (`−0.83 V`) at the cathode, AND compare oxidizing the copper anode (`+0.34 V`) vs water (`+1.23 V`) at the anode!",
      ],
      modelAnswer:
        "In concentrated `NaCl(aq)` (graphite electrodes), at the cathode water is preferentially reduced over `Na⁺` (`−0.83 V > −2.71 V`): `2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq)`, leaving `OH⁻` ions that make the electrolyte alkaline (`NaOH(aq)`). At the brine anode, despite `E⊖(O₂/H₂O) = +1.23 V` being slightly lower than `E⊖(Cl₂/Cl⁻) = +1.36 V`, the high `Cl⁻` concentration and higher overpotential for `O₂` evolution cause preferential chloride oxidation: `2Cl⁻(aq) → Cl₂(g) + 2e⁻`. By contrast, in `CuSO₄(aq)` with active copper electrodes, `Cu²⁺` is preferentially reduced over water at the cathode (`+0.34 V > −0.83 V`), plating copper (`Cu²⁺(aq) + 2e⁻ → Cu(s)`). At the active anode, copper metal itself is much more easily oxidized than water (`+0.34 V` vs `+1.23 V`): `Cu(s) → Cu²⁺(aq) + 2e⁻`, so the anode dissolves at the exact rate copper plates at the cathode, keeping `[Cu²⁺]` and the blue colour constant.",
      markScheme: [
        {
          point: "Brine cathode: water reduced over Na⁺ (−0.83 V > −2.71 V) via 2H₂O + 2e⁻ → H₂ + 2OH⁻, turning solution alkaline.",
          keywords: ["h₂(g) + 2oh⁻", "h2 + 2oh-", "alkaline", "preferentially reduced over"],
        },
        {
          point: "Brine anode: Cl₂ formed via 2Cl⁻ → Cl₂ + 2e⁻ due to high Cl⁻ concentration and/or oxygen overpotential despite +1.36 V vs +1.23 V.",
          keywords: ["overpotential", "high cl⁻ concentration", "high cl- concentration", "2cl⁻(aq) → cl₂"],
        },
        {
          point: "CuSO₄ cathode: Cu²⁺ preferentially reduced over water (+0.34 V > −0.83 V) forming solid copper (Cu²⁺ + 2e⁻ → Cu).",
          keywords: ["plating copper", "cu²⁺(aq) + 2e⁻", "cu2+ + 2e-"],
        },
        {
          point: "CuSO₄ active anode: copper electrode itself oxidizes in preference to water (+0.34 V vs +1.23 V): Cu → Cu²⁺ + 2e⁻.",
          keywords: ["copper metal itself", "anode dissolves", "cu(s) → cu²⁺", "cu -> cu2+"],
        },
        {
          point: "Electrolyte contrast: brine becomes alkaline NaOH(aq) (pH rises), whereas CuSO₄ maintains constant [Cu²⁺] and constant blue colour.",
          keywords: ["blue colour constant", "blue color constant", "constant", "naoh(aq)"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid selective discharge or active-electrode analysis.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies one or two products (e.g. Cl₂ or Cu) but omits E⊖ justification, overpotential/concentration effect, or active copper anode oxidation.",
          indicators: ["Predicts Na(s) at the aqueous brine cathode or O₂ at the active copper anode."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly predicts selective discharge in both cells using E⊖ and active-anode behaviour, omitting only one electrolyte change or overpotential detail.",
          indicators: ["Accurately contrasts brine products with copper electrorefining."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Masterful comparison covering all four half-equations with E⊖ justification, high [Cl⁻]/overpotential exception, alkaline NaOH formation in brine, and constant blue [Cu²⁺] with active copper electrodes.",
          indicators: ["Clearly contrasts inert vs active anode chemistry and solution pH/colour outcomes."],
        },
      ],
      commonError: "Predicting `O₂(g)` at an **active copper** anode (copper metal oxidizes far more readily at `+0.34 V` than water at `+1.23 V`!) or predicting metallic sodium at an aqueous cathode.",
    },

    // ===================== Q18: R3.4 SN2 vs SN1 Mechanisms (HL) ==============
    {
      id: "exam-p2-hl-q18",
      kind: "written",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "sn1-sn2-markovnikov-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Compare and contrast",
      strategy: "Contrast rate law, transition state vs planar carbocation, Walden inversion vs racemization, steric/inductive effects, and solvents",
      diagram: SVG_SN1_SN2_PROFILES,
      marks: 5,
      question:
        "Refer to the two potential-energy profiles above for the nucleophilic substitution of `1-bromobutane` (Pathway A) and `2-bromo-2-methylpropane` (Pathway B) with hydroxide ions (`OH⁻`). Compare and contrast the `SN2` and `SN1` mechanisms in terms of: (1) rate laws and molecularity, (2) transition state vs intermediate geometry, (3) stereochemical outcome if a chiral carbon is substituted, (4) steric hindrance and inductive effects, and (5) preferred solvent class.",
      hints: [
        "Pathway A (`1°` halogenoalkane) is concerted bimolecular `SN2` (`rate = k[RX][OH⁻]`), while Pathway B (`3°`) is two-step unimolecular `SN1` (`rate = k[RX]`).",
        "Compare the trigonal bipyramidal pentacoordinate transition state (backside attack → Walden inversion) against the trigonal planar carbocation intermediate (equal attack from both faces → racemic mixture).",
        "Recall which mechanism prefers polar **aprotic** solvents (e.g. propanone/DMSO, leaving `OH⁻` unsolvated) vs polar **protic** solvents (e.g. water/ethanol, stabilizing the carbocation and `Br⁻` leaving group).",
      ],
      modelAnswer:
        "1. Pathway A (`1-bromobutane`) follows bimolecular `SN2` with second-order kinetics `rate = k[C₄H₉Br][OH⁻]`, whereas Pathway B (`2-bromo-2-methylpropane`) follows unimolecular `SN1` with first-order kinetics `rate = k[(CH₃)₃CBr]` because only `C−Br` heterolytic fission occurs in the slow RDS. 2. `SN2` proceeds in one concerted step via a 5-coordinate trigonal bipyramidal transition state where `C−O` forms simultaneously as `C−Br` breaks, whereas `SN1` proceeds in two steps through an energy-minimum trigonal planar carbocation intermediate (`(CH₃)₃C⁺`). 3. At a chiral centre, backside `SN2` attack causes complete Walden inversion of configuration, whereas attack from either face of the planar `SN1` carbocation produces an optically inactive racemic mixture. 4. Primary `1-bromobutane` has minimal steric hindrance for backside attack, whereas three bulky methyl groups in `2-bromo-2-methylpropane` sterically block backside attack while inductively stabilizing the `3°` carbocation. 5. `SN2` is favoured by polar aprotic solvents (avoiding H-bond solvation of `OH⁻`), whereas `SN1` is favoured by polar protic solvents (stabilizing both carbocation and `Br⁻` ions).",
      markScheme: [
        {
          point: "Contrasts rate laws: bimolecular SN2 rate = k[RX][OH⁻] vs unimolecular SN1 rate = k[RX] (RDS is C−Br fission).",
          keywords: ["bimolecular", "unimolecular", "k[c₄h₉br][oh⁻]", "k[rx][oh-]"],
        },
        {
          point: "Contrasts concerted single-step 5-coordinate transition state (SN2) vs two-step trigonal planar carbocation intermediate (SN1).",
          keywords: ["concerted", "trigonal planar carbocation", "carbocation intermediate"],
        },
        {
          point: "Contrasts stereochemistry: SN2 backside attack gives Walden inversion vs SN1 attack from both faces giving a racemic mixture.",
          keywords: ["inversion", "racemic"],
        },
        {
          point: "Explains steric hindrance blocking backside attack on 3° carbon and positive inductive stabilization of the 3° carbocation.",
          keywords: ["sterically block", "steric hindrance", "inductively stabilizing", "inductive"],
        },
        {
          point: "Contrasts solvent preference: polar aprotic for SN2 vs polar protic for SN1.",
          keywords: ["aprotic", "protic"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid distinction between SN1 and SN2 mechanisms.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly assigns SN2 to 1° and SN1 to 3° with one supporting point (e.g. steps or rate law), but omits stereochemistry, steric/inductive causes, and solvent effects.",
          indicators: ["Confuses transition state with carbocation intermediate."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately contrasts rate laws, transition state vs planar carbocation, stereochemical outcome, and steric/inductive reasons, omitting only solvent polarity type.",
          indicators: ["Clearly links backside attack to inversion and planar carbocation to racemic mixture."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Comprehensive HL comparison hitting all five dimensions cleanly: kinetics, concerted TS vs planar carbocation, inversion vs racemization, steric/inductive rationalization, and polar aprotic vs protic solvents.",
          indicators: ["Distinguishes concerted transition-state maximum from energy-minimum intermediate."],
        },
      ],
      commonError: "Reversing polar protic and polar aprotic solvents, or calling the `SN2` transition state an 'intermediate'.",
    },

    // ===================== Q19: R3.4 Markovnikov & Benzene Nitration (HL) ====
    {
      id: "exam-p2-hl-q19",
      kind: "written",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "sn1-sn2-markovnikov-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Explain 2° vs 1° carbocation inductive stabilization for propene + HBr, then nitronium generation and aromaticity preservation in benzene",
      marks: 4,
      question:
        "(a) Electrophilic addition of `HBr` to propene (`CH₃CH=CH₂`) produces `2-bromopropane` as the major product rather than `1-bromopropane`. Explain this regioselectivity mechanistically. (b) Benzene (`C₆H₆`) reacts with a nitrating mixture of concentrated `HNO₃` and concentrated `H₂SO₄` at `50 °C` to form nitrobenzene (`C₆H₅NO₂`). Write the equation showing formation of the active electrophile and explain why benzene undergoes electrophilic substitution rather than addition.",
      hints: [
        "When the `C=C` `π` electrons attack `H^δ+` of `HBr`, compare the two possible carbocations: secondary `CH₃CH⁺CH₃` vs primary `CH₃CH₂CH₂⁺`.",
        "Which carbocation has more electron-donating alkyl groups exerting a positive inductive effect (`+I`) to disperse the positive charge?",
        "In nitration, `H₂SO₄` acts as a stronger acid that protonates `HNO₃` to generate the nitronium ion (`NO₂⁺`). Why does the arenium intermediate lose `H⁺` instead of adding a nucleophile?",
      ],
      modelAnswer:
        "(a) Protonation of propene's `C=C` `π` bond at the terminal carbon forms the secondary carbocation `CH₃CH⁺CH₃`, whereas protonation at the middle carbon forms the primary carbocation `CH₃CH₂CH₂⁺`. Because the secondary carbocation is bonded to two electron-donating methyl/alkyl groups exerting a greater positive inductive effect (`+I`), its positive charge is dispersed more effectively, making it lower in energy and formed faster before `Br⁻` attacks to yield `2-bromopropane` (Markovnikov's rule). (b) Concentrated `H₂SO₄` protonates `HNO₃` to generate the nitronium ion electrophile: `HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺` (or `HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O`). Benzene undergoes substitution (losing `H⁺` from the carbocation intermediate) rather than addition because restoring the delocalized `6π` aromatic ring preserves benzene's high resonance stabilization energy.",
      markScheme: [
        {
          point: "Compares formation of the secondary carbocation CH₃CH⁺CH₃ vs the primary carbocation CH₃CH₂CH₂⁺.",
          keywords: ["secondary carbocation", "primary carbocation", "ch₃ch⁺ch₃", "ch3ch+ch3"],
        },
        {
          point: "Explains the 2° carbocation is more stable due to greater positive inductive (+I) electron donation from two alkyl groups.",
          keywords: ["positive inductive", "+i", "electron-donating", "dispersed"],
        },
        {
          point: "Writes a balanced equation generating the nitronium ion electrophile NO₂⁺ (HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O or with 2H₂SO₄ → H₃O⁺).",
          keywords: ["nitronium", "no₂⁺", "no2+"],
        },
        {
          point: "Explains benzene favours substitution over addition to restore/preserve its delocalized aromatic π ring stability.",
          keywords: ["aromatic", "delocalized", "delocalised", "resonance stabilization"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid carbocation stability or nitration explanation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Quotes Markovnikov's rule ('H goes to C with more H') without carbocation inductive reasoning, or names NO₂⁺ without a balanced equation or aromaticity explanation.",
          indicators: ["Restates Markovnikov's rule descriptively without explaining 2° vs 1° carbocation stability."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Fully explains 2° carbocation positive inductive stabilization for 2-bromopropane, writes the balanced NO₂⁺ formation equation, and explains benzene substitution via preserving aromatic stabilization.",
          indicators: ["Links carbocation intermediate stability directly to faster formation of the major product."],
        },
      ],
      commonError: "Writing `NO₂` (neutral radical) instead of the positively charged **nitronium cation `NO₂⁺`**, or quoting Markovnikov's rule without mentioning **carbocation stability**.",
    },

    // ===================== Q20: R3.4 Multi-Step Retrosynthesis (HL) ==========
    {
      id: "exam-p2-hl-q20",
      kind: "written",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "organic-synthesis-retrosynthesis-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      strategy: "Map reagents, conditions, and intermediates for (a) ethene → ethyl ethanoate and (b) benzene → phenylamine",
      marks: 6,
      question:
        "Design multi-step organic synthesis pathways specifying every intermediate structure, reagent, catalyst, and reaction condition for:\n(a) Preparing **ethyl ethanoate** (`CH₃COOCH₂CH₃`) starting solely from **ethene** (`CH₂=CH₂`) and inorganic reagents (3 steps).\n(b) Converting **benzene** (`C₆H₆`) into **phenylamine** (`C₆H₅NH₂`) (2 steps, including the final neutralization step).",
      hints: [
        "Work backwards (retrosynthesis) from `CH₃COOCH₂CH₃`: an ester requires BOTH `CH₃COOH` (carboxylic acid) and `CH₃CH₂OH` (ethanol) — and BOTH come from ethanol!",
        "Check Step 1 (`CH₂=CH₂ → CH₃CH₂OH`: steam + `H₃PO₄` catalyst, `300 °C`, `60 atm`), Step 2 (reflux oxidation of half the ethanol with acidified `K₂Cr₂O₇` — NOT distillation, which stops at ethanal!), and Step 3 (esterification with `conc. H₂SO₄` under reflux).",
        "For benzene → phenylamine: first nitrate to nitrobenzene (`conc. HNO₃ / conc. H₂SO₄` at `50 °C`), then reduce with `Sn / conc. HCl` under reflux, followed by `NaOH(aq)` to convert `C₆H₅NH₃⁺` into free `C₆H₅NH₂`!",
      ],
      modelAnswer:
        "(a) Step 1 (hydration / electrophilic addition): React ethene with steam (`H₂O(g)`) over a concentrated phosphoric(V) acid catalyst (`H₃PO₄`, `300 °C`, `60 atm`) to produce ethanol (`CH₃CH₂OH`). Step 2 (complete oxidation): Heat half of the ethanol under reflux with excess acidified potassium dichromate(VI) (`K₂Cr₂O₇ / H₂SO₄(aq)`) to oxidize it completely to ethanoic acid (`CH₃COOH`) (orange `Cr₂O₇²⁻` turns green `Cr³⁺`). Step 3 (esterification / condensation): Heat the ethanoic acid with the remaining ethanol under reflux with a concentrated `H₂SO₄` catalyst to yield ethyl ethanoate (`CH₃COOCH₂CH₃` + `H₂O`). (b) Step 1 (electrophilic aromatic nitration): Warm benzene at `50 °C` with a nitrating mixture of concentrated `HNO₃` and concentrated `H₂SO₄` to produce nitrobenzene (`C₆H₅NO₂`). Step 2 (reduction and liberation of free amine): Heat nitrobenzene under reflux with tin and concentrated hydrochloric acid (`Sn / conc. HCl`) to form the phenylammonium ion (`C₆H₅NH₃⁺`), then add aqueous sodium hydroxide (`NaOH(aq)`) to deprotonate the salt and liberate free phenylamine (`C₆H₅NH₂`).",
      markScheme: [
        {
          point: "Route (a) Step 1: Ethene + steam (H₂O(g)) with H₃PO₄ catalyst (heat/pressure) → ethanol (CH₃CH₂OH).",
          keywords: ["h₃po₄", "h3po4", "steam", "ethanol"],
        },
        {
          point: "Route (a) Step 2: Oxidize half the ethanol under reflux with acidified K₂Cr₂O₇ / H₂SO₄ → ethanoic acid (CH₃COOH).",
          keywords: ["k₂cr₂o₇", "k2cr2o7", "dichromate", "ethanoic acid"],
        },
        {
          point: "Route (a) Step 3: Esterification of ethanoic acid + remaining ethanol heated under reflux with concentrated H₂SO₄ catalyst → CH₃COOCH₂CH₃.",
          keywords: ["esterification", "remaining ethanol", "concentrated h₂so₄ catalyst", "conc. h2so4"],
        },
        {
          point: "Route (b) Step 1: Nitration of benzene using concentrated HNO₃ + concentrated H₂SO₄ at 50 °C → nitrobenzene (C₆H₅NO₂).",
          keywords: ["nitrobenzene", "c₆h₅no₂", "c6h5no2", "50 °c"],
        },
        {
          point: "Route (b) Step 2a: Reduction of nitrobenzene using Sn and concentrated HCl under reflux (forming C₆H₅NH₃⁺).",
          keywords: ["sn / conc. hcl", "tin and concentrated hydrochloric", "sn/hcl", "phenylammonium"],
        },
        {
          point: "Route (b) Step 2b: Addition of NaOH(aq) to deprotonate C₆H₅NH₃⁺ and liberate free phenylamine (C₆H₅NH₂).",
          keywords: ["naoh", "deprotonate", "liberate", "free phenylamine"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No viable synthetic intermediates or reagents.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies key intermediates (ethanol, ethanoic acid, or nitrobenzene) but omits essential reagents, reflux conditions, or the NaOH liberation step.",
          indicators: ["Writes 'oxidize ethanol' without specifying acidified K₂Cr₂O₇ under reflux."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Constructs one pathway completely and the other partially, with mostly accurate reagents and conditions.",
          indicators: ["Correctly designs ethene → ethyl ethanoate but forgets NaOH after Sn/conc. HCl."],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete, exam-ready retrosynthesis for both targets specifying all intermediates, exact reagents/catalysts (H₃PO₄, acidified K₂Cr₂O₇ reflux, conc. H₂SO₄ esterification, conc. HNO₃/H₂SO₄ 50 °C, Sn/conc. HCl reflux, then NaOH(aq)).",
          indicators: ["Explicitly explains splitting ethanol for esterification and using NaOH(aq) to neutralize C₆H₅NH₃⁺."],
        },
      ],
      commonError: "Forgetting the `NaOH(aq)` step after `Sn / conc. HCl` reduction (leaving the protonated `C₆H₅NH₃⁺` salt instead of free phenylamine), or using distillation instead of **reflux** when oxidizing ethanol to ethanoic acid.",
    },
  ],
};
