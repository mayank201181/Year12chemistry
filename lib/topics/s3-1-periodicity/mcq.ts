import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: SL Core Periodicity, Group Trends & Period 3 Oxides (15 MCQs)
  // answerIndex spread: [4, 4, 4, 3]
  // ===========================================================================
  {
    id: "s3-1-periodicity-m1",
    title: "Paper 1A · SL Core Periodicity & Period 3 Oxides",
    level: "SL",
    questions: [
      {
        id: "s3-1-periodicity-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Which statement best explains why covalent atomic radius decreases across Period 3 from sodium (`Na`) to chlorine (`Cl`)?",
        options: [
          "The number of occupied electron energy levels decreases steadily while the nuclear charge stays unchanged.",
          "Extra inner-shell electrons increase shielding faster than the rise in nuclear charge across the period.",
          "Nuclear charge increases while electrons enter the same principal shell, so effective nuclear charge increases.",
          "Repulsion between valence electrons decreases because fewer valence electrons occupy the outer shell.",
        ],
        answerIndex: 2,
        explanation:
          "Across Period 3, proton number increases from 11 to 17 while each added electron enters the same `n = 3` shell. Inner-shell shielding stays nearly constant (`10` core electrons), so effective nuclear charge (`Z_eff`) increases and pulls the valence shell closer. Claiming shielding increases faster or shells decrease contradicts Period 3 electron configurations.",
        hints: [
          "Check which main energy level (`n`) receives the added valence electrons from `Na` to `Cl`.",
          "Compare how quickly nuclear charge (`Z`) changes versus inner-shell shielding (`S`).",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Which sequence arranges the isoelectronic ions `F⁻`, `Na⁺`, `O²⁻`, and `Mg²⁺` in order of **increasing** ionic radius?",
        options: [
          "`Mg²⁺ < Na⁺ < F⁻ < O²⁻`",
          "`O²⁻ < F⁻ < Na⁺ < Mg²⁺`",
          "`Na⁺ < Mg²⁺ < O²⁻ < F⁻`",
          "`F⁻ < O²⁻ < Mg²⁺ < Na⁺`",
        ],
        answerIndex: 0,
        explanation:
          "All four ions have the identical `10`-electron configuration `1s² 2s² 2p⁶`, so shielding is the same. The ion with the greatest nuclear charge (`Mg²⁺`, `Z = 12`) pulls those 10 electrons most strongly and is smallest, while `O²⁻` (`Z = 8`) has the weakest nuclear pull and is largest.",
        hints: [
          "Count the total number of electrons in every ion first.",
          "When electron count and shielding are identical, a larger proton number (`Z`) produces a smaller radius.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Why is the first ionization energy of aluminium (`578 kJ mol⁻¹`) lower than that of magnesium (`738 kJ mol⁻¹`)?",
        options: [
          "Aluminium has a larger atomic radius and more occupied principal energy levels than magnesium.",
          "Aluminium loses a paired `3p` electron experiencing strong spin–pair repulsion in the same orbital.",
          "Magnesium has a higher nuclear charge than aluminium and therefore attracts its valence electrons more strongly.",
          "Aluminium loses a higher-energy `3p` electron that is additionally shielded by the filled `3s` sublevel.",
        ],
        answerIndex: 3,
        explanation:
          "`Mg` is `[Ne] 3s²` and `Al` is `[Ne] 3s² 3p¹`. Removing aluminium's single `3p` electron requires less energy because the `3p` sublevel lies higher in energy and is partially shielded by the filled `3s²` sublevel. Spin–pair repulsion explains the `P → S` dip (`3p⁴`), not the `Mg → Al` dip.",
        hints: [
          "Write the sublevel configurations of `Mg` and `Al`.",
          "Identify which sublevel the removed electron comes from in each element.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "periodic-trends-nuclear-charge",
        diagram: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plot of Period 3 ionic radii showing decrease from Na+ to Al3+, sharp jump to P3-, then decrease to Cl-">
  <rect x="0" y="0" width="420" height="190" rx="10" fill="#f8fafc"/>
  <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Ionic Radii of Common Period 3 Ions (pm)</text>
  <line x1="48" y1="34" x2="48" y2="152" stroke="#64748b" stroke-width="1.5"/>
  <line x1="48" y1="152" x2="394" y2="152" stroke="#64748b" stroke-width="1.5"/>
  <g font-size="9" fill="#64748b" text-anchor="end">
    <text x="42" y="42">240</text><text x="42" y="80">160</text><text x="42" y="118">80</text><text x="42" y="155">0</text>
  </g>
  <polyline fill="none" stroke="#0d9488" stroke-width="2.5" points="80,104 134,118 188,126"/>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="256,51 310,64 364,66"/>
  <line x1="188" y1="126" x2="256" y2="51" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <g fill="#0d9488"><circle cx="80" cy="104" r="4"/><circle cx="134" cy="118" r="4"/><circle cx="188" cy="126" r="4"/></g>
  <g fill="#dc2626"><circle cx="256" cy="51" r="4"/><circle cx="310" cy="64" r="4"/><circle cx="364" cy="66" r="4"/></g>
  <g font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">
    <text x="80" y="168">Na⁺</text><text x="134" y="168">Mg²⁺</text><text x="188" y="168">Al³⁺</text>
    <text x="256" y="168">P³⁻</text><text x="310" y="168">S²⁻</text><text x="364" y="168">Cl⁻</text>
  </g>
  <text x="222" y="96" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">Sharp jump!</text>
</svg>`,
        question:
          "The graph shows ionic radii across Period 3. Why is there a sharp increase in ionic radius from `Al³⁺` (`54 pm`) to `P³⁻` (`212 pm`)?",
        options: [
          "Phosphorus has fewer protons than aluminium, reducing the electrostatic pull on its valence shell.",
          "`P³⁻` has three occupied electron shells (`18 e⁻`), whereas `Al³⁺` has only two occupied shells (`10 e⁻`).",
          "`Al³⁺` is a covalent ion with directional bonds, whereas `P³⁻` forms a giant metallic lattice.",
          "The nuclear charge of `P³⁻` is completely cancelled by its three extra valence electrons.",
        ],
        answerIndex: 1,
        explanation:
          "Removing three valence electrons leaves `Al³⁺` with the neon configuration (`1s² 2s² 2p⁶`, 2 occupied shells), whereas gaining three electrons gives `P³⁻` the argon configuration (`1s² 2s² 2p⁶ 3s² 3p⁶`, 3 occupied shells). The extra principal energy level plus increased electron–electron repulsion causes the huge jump in radius.",
        hints: [
          "Write the full electron configurations of `Al³⁺` and `P³⁻`.",
          "Compare the number of occupied principal energy levels (`n`) in each ion.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Why is the first ionization energy of oxygen (`1314 kJ mol⁻¹`) lower than that of nitrogen (`1402 kJ mol⁻¹`)?",
        options: [
          "Oxygen removes an electron from a doubly occupied `2p` orbital where spin–pair repulsion lowers the required energy.",
          "Oxygen's outermost electron enters the higher-energy `3s` sublevel which lies further from the nucleus.",
          "Nitrogen has a smaller nuclear charge and greater inner-shell shielding than oxygen across Period 2.",
          "Oxygen has a lower electronegativity than nitrogen, so its nucleus holds bonding electrons less tightly.",
        ],
        answerIndex: 0,
        explanation:
          "Nitrogen (`2p³`) has one unpaired electron in each of its three `2p` orbitals, whereas oxygen (`2p⁴`) has two spin-paired electrons sharing one `2p` orbital. Inter-electronic repulsion between those paired electrons makes one slightly easier to remove despite oxygen's higher nuclear charge.",
        hints: [
          "Draw orbital-box diagrams for the `2p` electrons of `N` (`2p³`) and `O` (`2p⁴`).",
          "What repulsive force appears for the first time at `2p⁴`?",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Why is the first electron affinity of fluorine (`−328 kJ mol⁻¹`) less exothermic than that of chlorine (`−349 kJ mol⁻¹`)?",
        options: [
          "Fluorine has a lower electronegativity than chlorine and attracts incoming electrons less strongly.",
          "Fluorine has more inner electron shells than chlorine, causing stronger shielding of its nucleus.",
          "Fluorine's very compact `2p` sublevel creates strong electron–electron repulsion against the incoming electron.",
          "Chlorine forms a gaseous diatomic molecule with a weaker covalent bond than fluorine gas.",
        ],
        answerIndex: 2,
        explanation:
          "First electron affinity refers to isolated gaseous atoms (`X(g) + e⁻ → X⁻(g)`), not `X₂` molecules. Although fluorine's nucleus is closer, its tiny `2p` shell has high electron density, so incoming-electron repulsion slightly reduces the energy released compared to chlorine's more spacious `3p` shell.",
        hints: [
          "Electron affinity involves isolated gaseous atoms, so bond enthalpy in `X₂` is irrelevant.",
          "Compare the size and electron-cloud density of a `2p` shell (`F`) versus a `3p` shell (`Cl`).",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Which statement correctly compares the properties of potassium (`K`) and rubidium (`Rb`) in Group 1?",
        options: [
          "Rubidium has a smaller atomic radius and a higher first ionization energy than potassium.",
          "Rubidium has a larger atomic radius and reacts more vigorously with water than potassium.",
          "Rubidium has a higher melting point and a higher electronegativity than potassium.",
          "Rubidium has fewer occupied electron shells and stronger metallic bonding than potassium.",
        ],
        answerIndex: 1,
        explanation:
          "`Rb` sits directly below `K` in Group 1, so it has one extra occupied electron shell, a larger atomic radius, stronger shielding, and lower `IE₁`. Consequently, `Rb` loses its outer `5s¹` electron more easily and reacts more vigorously with water (while its melting point and electronegativity are lower).",
        hints: [
          "Locate `K` (Period 4) and `Rb` (Period 5) in Group 1.",
          "How do radius, shielding, `IE₁`, and reactivity with water change going down Group 1?",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "group-trends-period3-oxides",
        question:
          "Which aqueous mixture produces a visible colour change due to a spontaneous halogen displacement reaction?",
        options: [
          "Aqueous iodine (`I₂`) added to aqueous potassium bromide (`KBr`).",
          "Aqueous bromine (`Br₂`) added to aqueous sodium chloride (`NaCl`).",
          "Aqueous iodine (`I₂`) added to aqueous sodium chloride (`NaCl`).",
          "Aqueous chlorine (`Cl₂`) added to aqueous potassium bromide (`KBr`).",
        ],
        answerIndex: 3,
        explanation:
          "Oxidizing power decreases down Group 17 (`Cl₂ > Br₂ > I₂`). Chlorine is more reactive than bromine, so `Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)`, turning the colourless bromide solution orange-yellow. Neither `Br₂` nor `I₂` can oxidize `Cl⁻`, and `I₂` cannot oxidize `Br⁻`.",
        hints: [
          "Recall the reactivity order down Group 17: a higher halogen displaces a lower halide.",
          "Check which pair places the more reactive element as the free `X₂` halogen.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "group-trends-period3-oxides",
        question:
          "Which Period 3 oxide is **amphoteric**, reacting with both dilute hydrochloric acid and concentrated aqueous sodium hydroxide?",
        options: [
          "Magnesium oxide, `MgO`",
          "Silicon dioxide, `SiO₂`",
          "Aluminium oxide, `Al₂O₃`",
          "Tetraphosphorus decaoxide, `P₄O₁₀`",
        ],
        answerIndex: 2,
        explanation:
          "`Al₂O₃` sits at the metal/non-metal boundary of Period 3 and is amphoteric: it reacts with `HCl` to form `AlCl₃ + H₂O` and with `NaOH + H₂O` to form `NaAl(OH)₄`. `MgO` is basic, while `SiO₂` and `P₄O₁₀` are acidic.",
        hints: [
          "Trace Period 3 oxides from left to right: basic → amphoteric → acidic.",
          "Remember that `SiO₂` is acidic (reacts only with hot conc. base), not amphoteric.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "Separate samples of `Na₂O`, `MgO`, `SiO₂`, and `SO₃` are shaken with equal volumes of neutral distilled water (`pH 7`). Which sequence lists the resulting aqueous mixtures in order of **increasing pH**?",
        options: [
          "`SO₃ < SiO₂ < MgO < Na₂O`",
          "`Na₂O < MgO < SiO₂ < SO₃`",
          "`SiO₂ < SO₃ < MgO < Na₂O`",
          "`SO₃ < MgO < SiO₂ < Na₂O`",
        ],
        answerIndex: 0,
        explanation:
          "`SO₃` forms strong sulfuric acid (`pH ≈ 0–1`), `SiO₂` is insoluble so the water remains neutral (`pH = 7`), sparingly soluble `MgO` gives weakly basic `Mg(OH)₂` (`pH ≈ 9–10`), and soluble `Na₂O` gives strongly basic `NaOH` (`pH ≈ 13–14`). Thus increasing pH is `SO₃ < SiO₂ < MgO < Na₂O`.",
        hints: [
          "Remember that `SiO₂` is an acidic oxide chemically, but what happens to pH when it is shaken with pure water?",
          "Order from lowest pH (strong acid) through pH 7 (insoluble) to highest pH (strong alkali).",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "Which equation is correctly balanced for the complete reaction of tetraphosphorus decaoxide with water?",
        options: [
          "`P₄O₁₀(s) + 4H₂O(l) → 4H₂PO₃(aq)`",
          "`P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)`",
          "`P₄O₁₀(s) + 2H₂O(l) → 4HPO₃(aq)`",
          "`P₄O₁₀(s) + 6H₂O(l) → 2H₆P₂O₈(aq)`",
        ],
        answerIndex: 1,
        explanation:
          "`P₄O₁₀` hydrolyses completely to phosphoric(V) acid, `H₃PO₄` (keeping phosphorus in the `+5` oxidation state). Four `H₃PO₄` molecules contain `12 H` and `16 O`, requiring `6 H₂O` (`10 + 6 = 16 O`, `6 × 2 = 12 H`).",
        hints: [
          "Phosphorus has oxidation state `+5` in `P₄O₁₀`; hydrolysis is not a redox reaction, so the acid formed is `H₃PO₄`.",
          "Balance phosphorus first (`4H₃PO₄`), then count hydrogen atoms to find the coefficient of `H₂O`.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "group-trends-period3-oxides",
        question:
          "Why does unpolluted rainwater have a pH of approximately `5.6`, whereas acid rain has a pH below `5.6`?",
        options: [
          "Unpolluted rain contains dissolved `Na₂O` dust, while acid rain contains dissolved `CO₂` forming `H₂CO₃`.",
          "Unpolluted rain contains dissolved `SO₂` from oceans, while acid rain contains `Al₂O₃` from soil erosion.",
          "Unpolluted rain contains dissolved `N₂` gas, while acid rain contains dissolved `O₂` and `Ar` from combustion.",
          "Unpolluted rain contains weak `H₂CO₃` from `CO₂`, while acid rain contains stronger acids from `SO₂`/`SO₃` and `NO₂`.",
        ],
        answerIndex: 3,
        explanation:
          "Atmospheric `CO₂` naturally equilibrates with rainwater (`CO₂ + H₂O ⇌ H₂CO₃`), giving `pH ≈ 5.6`. Acid rain (`pH < 5.6`) occurs when sulfur oxides (`SO₂`, `SO₃` → `H₂SO₃`, `H₂SO₄`) and nitrogen dioxide (`2NO₂ + H₂O → HNO₂ + HNO₃`) lower the pH further.",
        hints: [
          "Which naturally occurring atmospheric oxide dissolves in all rainwater to form a weak acid?",
          "Which pollutant non-metal oxides form stronger acids (`H₂SO₄` and `HNO₃`)?",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "In which species does oxygen have an oxidation state of **`+2`**?",
        options: [
          "`OF₂`",
          "`H₂O₂`",
          "`Na₂O₂`",
          "`ClO₂⁻`",
        ],
        answerIndex: 0,
        explanation:
          "Fluorine is the most electronegative element (`χ = 4.0`) and is ALWAYS `−1` in compounds. In `OF₂`, `x + 2(−1) = 0`, so `O = +2`. In `H₂O₂` and `Na₂O₂` (peroxides), `O = −1`; in `ClO₂⁻`, `O = −2`.",
        hints: [
          "Which element is more electronegative than oxygen, forcing oxygen into a positive oxidation state?",
          "Check `F = −1` in `OF₂` versus Group 1 / hydrogen rules in peroxides.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "What is the oxidation state of sulfur in the thiosulfate ion, `S₂O₃²⁻`, and what is the oxidation state of hydrogen in calcium hydride, `CaH₂`?",
        options: [
          "`S = +4` and `H = +1`",
          "`S = +6` and `H = −1`",
          "`S = +2` and `H = −1`",
          "`S = +2` and `H = +1`",
        ],
        answerIndex: 2,
        explanation:
          "In `S₂O₃²⁻`: `2x + 3(−2) = −2` → `2x = +4` → `x = +2`. In the metal hydride `CaH₂`, Group 2 `Ca` is strictly `+2`, so `+2 + 2y = 0` → `y = −1`.",
        hints: [
          "For `S₂O₃²⁻`, set the sum of oxidation states equal to the ion charge `−2` (not `0`).",
          "In metal hydrides, Group 1 and Group 2 metals keep their fixed positive oxidation states, making hydrogen `−1`.",
        ],
      },
      {
        id: "s3-1-periodicity-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "Why does the boiling point of the Group 17 halogens increase smoothly from `F₂` (`−188 °C`) to `I₂` (`+184 °C`), while the melting point of the Group 1 alkali metals decreases from `Li` (`181 °C`) to `Cs` (`29 °C`)?",
        options: [
          "Halogen covalent bonds strengthen down Group 17, whereas alkali-metal covalent bonds weaken down Group 1.",
          "Halogen London dispersion forces strengthen with more electrons, whereas alkali-metal metallic bonding weakens with larger cation radius.",
          "Halogen dipole–dipole attractions strengthen down Group 17, whereas alkali-metal ionic lattices weaken down Group 1.",
          "Halogens become more electronegative down Group 17, whereas alkali metals gain extra delocalized valence electrons down Group 1.",
        ],
        answerIndex: 1,
        explanation:
          "Halogens are non-polar diatomic molecules (`X₂`); melting/boiling overcomes intermolecular **London dispersion forces**, which grow stronger as total electron count (polarizability) increases down Group 17. Alkali metals are metallic lattices; as ionic radius increases down Group 1, the distance between `M⁺` nuclei and delocalized electrons increases, weakening electrostatic metallic bonding.",
        hints: [
          "Identify the type of attraction broken when boiling `X₂` molecules versus melting Group 1 metals.",
          "Covalent `X−X` bonds do NOT break during boiling of `Cl₂`, `Br₂`, or `I₂`.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: SL–HL Mixed Periodicity, Oxides & Transition Complexes (15 MCQs)
  // answerIndex spread: [4, 4, 3, 4]
  // ===========================================================================
  {
    id: "s3-1-periodicity-m2",
    title: "Paper 1A · SL–HL Mixed Periodicity & Complexes",
    level: "HL",
    questions: [
      {
        id: "s3-1-periodicity-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Which statement explains why the second electron affinity of oxygen (`O⁻(g) + e⁻ → O²⁻(g)`) is endothermic (`+753 kJ mol⁻¹`)?",
        options: [
          "The second electron enters a higher-energy `3s` orbital outside the valence shell of oxygen.",
          "Energy must be supplied to overcome electrostatic repulsion between the negative `O⁻` ion and the incoming electron.",
          "Removing an electron from an `O⁻` ion requires breaking a filled noble-gas electron configuration.",
          "Oxygen's nuclear charge decreases after accepting the first electron, weakening attraction to the nucleus.",
        ],
        answerIndex: 1,
        explanation:
          "Adding a negatively charged electron to an already negatively charged `O⁻(g)` ion experiences strong like-charge electrostatic repulsion. Work must be done to force the electron into the `2p` shell, making `EA₂` endothermic.",
        hints: [
          "Look at the charges of the two reacting species on the left of `O⁻(g) + e⁻ → O²⁻(g)`.",
          "Does forcing two negative charges together release energy or absorb energy?",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "What is the IUPAC systematic name (using Stock Roman numerals) for the compound `K₂Cr₂O₇`?",
        options: [
          "Potassium dichromate(III)",
          "Potassium dichromate(VII)",
          "Potassium dichromate(IV)",
          "Potassium dichromate(VI)",
        ],
        answerIndex: 3,
        explanation:
          "In `K₂Cr₂O₇`, `K = +1` and `O = −2`: `2(+1) + 2x + 7(−2) = 0` → `2x − 12 = 0` → `x = +6`. Therefore chromium is in the `+6` oxidation state: potassium dichromate(VI).",
        hints: [
          "Set the sum of all oxidation states in neutral `K₂Cr₂O₇` to `0`.",
          "Remember there are TWO chromium atoms, so divide the remaining sum by `2`!",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "group-trends-period3-oxides",
        question:
          "Why does silicon dioxide (`SiO₂`) have a much higher melting point (`1710 °C`) than tetraphosphorus decaoxide (`P₄O₁₀`, `340 °C`)?",
        options: [
          "Melting `SiO₂` requires breaking strong covalent bonds in a giant network, whereas melting `P₄O₁₀` only overcomes weak intermolecular forces.",
          "`SiO₂` forms a giant ionic lattice of `Si⁴⁺` and `O²⁻` ions, whereas `P₄O₁₀` consists of simple covalent molecules.",
          "The `Si=O` double bonds in discrete `SiO₂` molecules are far stronger than the `P−O` single bonds in `P₄O₁₀`.",
          "Silicon has a larger atomic radius than phosphorus, creating stronger London dispersion forces between `SiO₂` molecules.",
        ],
        answerIndex: 0,
        explanation:
          "`SiO₂` is a 3D giant covalent network in which every silicon atom is tetrahedrally bonded to four oxygens; melting requires breaking strong `Si−O` covalent bonds. `P₄O₁₀` consists of discrete covalent molecules held together only by weak London dispersion forces.",
        hints: [
          "Contrast the structure of `SiO₂` (like diamond) with `P₄O₁₀` (discrete molecules).",
          "Distinguish intramolecular covalent bonds from intermolecular London dispersion forces.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "When `Al₂O₃(s)` reacts with excess aqueous `NaOH(aq)` and water, which soluble aluminium-containing ion is produced?",
        options: [
          "`[Al(H₂O)₆]³⁺`",
          "`AlO₂⁺`",
          "`[Al(OH)₄]⁻`",
          "`Al³⁻`",
        ],
        answerIndex: 2,
        explanation:
          "Amphoteric `Al₂O₃` acts as an acid with aqueous `NaOH`: `Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)`, containing the soluble tetrahydroxoaluminate ion `[Al(OH)₄]⁻`.",
        hints: [
          "Write the balanced equation for `Al₂O₃` reacting with `NaOH(aq)` and `H₂O(l)`.",
          "Keep `Al` at `+3` and check the net charge of four `OH⁻` ligands around `Al³⁺`.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which condensed electron configuration is correct for the `Fe³⁺` ion (`Z = 26`)?",
        options: [
          "`[Ar] 3d³ 4s²`",
          "`[Ar] 3d⁴ 4s¹`",
          "`[Ar] 3d⁶`",
          "`[Ar] 3d⁵`",
        ],
        answerIndex: 3,
        explanation:
          "Neutral iron is `[Ar] 3d⁶ 4s²`. Transition-metal cations ALWAYS lose `4s` electrons before `3d` electrons: losing `4s²` gives `Fe²⁺` (`[Ar] 3d⁶`), and losing one `3d` electron gives `Fe³⁺` (`[Ar] 3d⁵`).",
        hints: [
          "Write the neutral `Fe` (`Z = 26`) configuration first: `[Ar] 3d⁶ 4s²`.",
          "Apply the 4s-first-out rule before removing any `3d` electrons.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Why is zinc (`Z = 30`) classified as a d-block element, yet NOT as a transition element?",
        options: [
          "Zinc has a completely empty `3d` sublevel in its neutral ground state and cannot form complexes.",
          "Neither a zinc atom (`3d¹⁰ 4s²`) nor its only stable ion `Zn²⁺` (`3d¹⁰`) has an incomplete `d` sublevel.",
          "Zinc loses `3d` electrons before `4s` electrons, preventing it from forming stable `+2` cations.",
          "Zinc forms only covalent compounds and never acts as a Lewis acid toward lone-pair ligands.",
        ],
        answerIndex: 1,
        explanation:
          "By the IB definition, a transition element forms an atom or cation with an incomplete `d` sublevel (`d¹–d⁹`). Both `Zn` (`[Ar] 3d¹⁰ 4s²`) and its only ion `Zn²⁺` (`[Ar] 3d¹⁰`) have a completely filled `3d¹⁰` sublevel (note: `Zn²⁺` CAN still form colourless complexes like `[Zn(NH₃)₄]²⁺`!).",
        hints: [
          "Recall the exact IB definition of a transition element.",
          "Check the `3d` sublevel count in both `Zn` and `Zn²⁺`.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "transition-elements-complexes-hl",
        question:
          "What are the oxidation state of chromium and the coordination number of the complex ion `[Cr(H₂O)₄Cl₂]⁺`?",
        options: [
          "Oxidation state `+3`, coordination number `6`",
          "Oxidation state `+1`, coordination number `6`",
          "Oxidation state `+3`, coordination number `4`",
          "Oxidation state `+2`, coordination number `6`",
        ],
        answerIndex: 0,
        explanation:
          "`H₂O` is neutral (`0`) and each `Cl⁻` has charge `−1`, so `x + 4(0) + 2(−1) = +1` → `x = +3`. Both `H₂O` and `Cl⁻` are monodentate ligands, giving `4 + 2 = 6` coordinate bonds (`CN = 6`).",
        hints: [
          "Count all monodentate ligands inside the square brackets for the coordination number.",
          "Solve `x + 4(0) + 2(−1) = +1` for the oxidation state of `Cr`.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Ethane-1,2-diamine (`en`) is a neutral bidentate ligand. What are the coordination number and the oxidation state of cobalt in `[Co(en)₂(H₂O)Cl]²⁺`?",
        options: [
          "Coordination number `4`, oxidation state `+2`",
          "Coordination number `4`, oxidation state `+3`",
          "Coordination number `6`, oxidation state `+2`",
          "Coordination number `6`, oxidation state `+3`",
        ],
        answerIndex: 3,
        explanation:
          "Each `en` forms 2 coordinate bonds, while `H₂O` and `Cl⁻` each form 1: `CN = 2(2) + 1 + 1 = 6`. For charge balance: `x + 2(0) + 0 + (−1) = +2` → `x = +3`.",
        hints: [
          "Multiply the number of `en` ligands by `2` because `en` is bidentate.",
          "Only `Cl⁻` carries a charge (`−1`) among the ligands.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transition-elements-complexes-hl",
        question:
          "In the formation of `[Fe(CN)₆]³⁻` from `Fe³⁺` and six `CN⁻` ions, which bonding description is correct?",
        options: [
          "`Fe³⁺` acts as a Lewis base donating electron pairs to `CN⁻` ligands via ionic bonds.",
          "`CN⁻` acts as a Lewis acid accepting lone pairs from `Fe³⁺` to form hydrogen bonds.",
          "`CN⁻` acts as a Lewis base donating lone pairs into vacant `Fe³⁺` orbitals via coordinate bonds.",
          "`Fe³⁺` and `CN⁻` each contribute one unpaired electron to form six non-polar covalent bonds.",
        ],
        answerIndex: 2,
        explanation:
          "Every ligand possesses at least one lone pair and donates it as a **Lewis base** to the electron-deficient central metal ion (**Lewis acid**), forming **coordinate (dative) covalent bonds**.",
        hints: [
          "Recall which species supplies BOTH electrons of each metal–ligand bond.",
          "Match electron-pair donor = Lewis base and electron-pair acceptor = Lewis acid.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "periodic-trends-nuclear-charge",
        question:
          "Which element has the **greatest** Pauling electronegativity among `Si`, `P`, `S`, and `N`?",
        options: [
          "Sulfur (`S`)",
          "Nitrogen (`N`)",
          "Phosphorus (`P`)",
          "Silicon (`Si`)",
        ],
        answerIndex: 1,
        explanation:
          "Electronegativity increases across a period and decreases down a group. Nitrogen (`Period 2, Group 15`, `χ = 3.0`) sits higher up than `S` (`2.6`), `P` (`2.2`), and `Si` (`1.9`), because its smaller atomic radius and minimal core shielding (`2` core electrons) give stronger attraction for bonding electrons.",
        hints: [
          "Compare `N` (Period 2) against Period 3 elements `Si`, `P`, and `S`.",
          "Remember the top three most electronegative elements in the entire periodic table: `F > O > N ≈ Cl`.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which gaseous transition-metal ion has the **largest** number of unpaired `3d` electrons in its ground state?",
        options: [
          "`Mn²⁺` (`Z = 25`)",
          "`Fe²⁺` (`Z = 26`)",
          "`Cr³⁺` (`Z = 24`)",
          "`Ni²⁺` (`Z = 28`)",
        ],
        answerIndex: 0,
        explanation:
          "By Hund's rule across the five `3d` orbitals: `Mn²⁺` (`3d⁵`) has **5** unpaired electrons (`↑ ↑ ↑ ↑ ↑`); `Fe²⁺` (`3d⁶`) has 4; `Cr³⁺` (`3d³`) has 3; and `Ni²⁺` (`3d⁸`) has 2.",
        hints: [
          "Remove `4s` electrons first to find the `3d^n` count for each ion.",
          "Use Hund's rule across five `3d` orbitals: unpaired count peaks at half-filled `3d⁵`!",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Which aqueous `d`-block complex ion is expected to be **colourless**?",
        options: [
          "`[Ti(H₂O)₆]³⁺`",
          "`[Cu(H₂O)₆]²⁺`",
          "`[Cr(H₂O)₆]³⁺`",
          "`[Sc(H₂O)₆]³⁺`",
        ],
        answerIndex: 3,
        explanation:
          "`Sc` (`Z = 21`) is `[Ar] 3d¹ 4s²`, so `Sc³⁺` is `[Ar] 3d⁰` — with zero `3d` electrons, no `d–d` transition can occur and `[Sc(H₂O)₆]³⁺` is colourless. `Ti³⁺` (`3d¹`), `Cu²⁺` (`3d⁹`), and `Cr³⁺` (`3d³`) all have incomplete `3d` sublevels and are coloured.",
        hints: [
          "A complex is colourless when the metal ion has `d⁰` or `d¹⁰`.",
          "Deduce the `3d^n` configuration for `Ti³⁺`, `Cu²⁺`, `Cr³⁺`, and `Sc³⁺`.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "An aqueous complex ion shows a single strong visible absorption band centred at `λ = 600 nm` (orange). What colour does the solution appear to an observer?",
        options: [
          "Orange",
          "Blue",
          "Green",
          "Yellow",
        ],
        answerIndex: 1,
        explanation:
          "On the IB colour wheel, `600 nm` lies in the orange region (`585–647 nm`). The solution absorbs orange light and transmits the complementary colour directly opposite orange: **blue**.",
        hints: [
          "Never pick the absorbed colour itself — the observer sees what is TRANSMITTED!",
          "Find the colour opposite orange on the 6-sector IB colour wheel.",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "d-orbital-splitting-colour-hl",
        diagram: `<svg viewBox="0 0 420 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crystal field splitting comparison between complex X with smaller gap and complex Y with larger gap">
  <rect x="0" y="0" width="420" height="185" rx="10" fill="#f8fafc"/>
  <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Octahedral d-Orbital Splitting: Complex X vs Complex Y</text>
  <!-- Complex X -->
  <rect x="20" y="34" width="176" height="136" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="108" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#0f766e">Complex X: [Cr(H₂O)₆]³⁺</text>
  <line x1="72" y1="86" x2="100" y2="86" stroke="#dc2626" stroke-width="3"/><line x1="116" y1="86" x2="144" y2="86" stroke="#dc2626" stroke-width="3"/>
  <line x1="56" y1="134" x2="82" y2="134" stroke="#2563eb" stroke-width="3"/><line x1="95" y1="134" x2="121" y2="134" stroke="#2563eb" stroke-width="3"/><line x1="134" y1="134" x2="160" y2="134" stroke="#2563eb" stroke-width="3"/>
  <line x1="108" y1="90" x2="108" y2="130" stroke="#ea580c" stroke-width="1.8"/>
  <text x="148" y="114" text-anchor="middle" font-size="10" font-weight="700" fill="#ea580c">ΔE_X</text>
  <text x="108" y="158" text-anchor="middle" font-size="9" fill="#475569">Smaller splitting</text>
  <!-- Complex Y -->
  <rect x="224" y="34" width="176" height="136" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="312" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Complex Y: [Cr(CN)₆]³⁻</text>
  <line x1="276" y1="68" x2="304" y2="68" stroke="#dc2626" stroke-width="3"/><line x1="320" y1="68" x2="348" y2="68" stroke="#dc2626" stroke-width="3"/>
  <line x1="260" y1="146" x2="286" y2="146" stroke="#2563eb" stroke-width="3"/><line x1="299" y1="146" x2="325" y2="146" stroke="#2563eb" stroke-width="3"/><line x1="338" y1="146" x2="364" y2="146" stroke="#2563eb" stroke-width="3"/>
  <line x1="312" y1="72" x2="312" y2="142" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="352" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="#7c3aed">ΔE_Y</text>
  <text x="312" y="162" text-anchor="middle" font-size="9" fill="#475569">Larger splitting</text>
</svg>`,
        question:
          "Compare `[Cr(H₂O)₆]³⁺` (Complex X) with `[Cr(CN)₆]³⁻` (Complex Y) shown above. Which statement about their visible-light absorption is correct?",
        options: [
          "Complex Y absorbs light of higher frequency and shorter wavelength than Complex X because `CN⁻` is a stronger-field ligand than `H₂O`.",
          "Complex Y absorbs light of lower frequency and longer wavelength than Complex X because `CN⁻` carries a negative charge.",
          "Complex X absorbs light of higher frequency and shorter wavelength than Complex Y because `H₂O` is a neutral ligand.",
          "Both complexes absorb the exact same wavelength because both contain the same `Cr³⁺` (`3d³`) central metal ion.",
        ],
        answerIndex: 0,
        explanation:
          "In the spectrochemical series, `CN⁻` lies far above `H₂O`, giving `ΔE_Y > ΔE_X`. Because `ΔE = hν = hc / λ`, larger `ΔE` directly corresponds to **higher absorbed frequency `ν`** and **shorter absorbed wavelength `λ`**.",
        hints: [
          "Compare `ΔE_X` and `ΔE_Y` from the diagram and the spectrochemical series (`H₂O < CN⁻`).",
          "Use `ΔE = hν = hc / λ`: how do frequency and wavelength respond when `ΔE` gets bigger?",
        ],
      },
      {
        id: "s3-1-periodicity-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "group-trends-period3-oxides",
        question:
          "A white solid Period 3 oxide `Q` has a very high melting point, does not dissolve in water, and fails to react with `HCl(aq)`, yet dissolves in hot concentrated `NaOH(aq)`. What is `Q`?",
        options: [
          "Magnesium oxide, `MgO`",
          "Aluminium oxide, `Al₂O₃`",
          "Silicon dioxide, `SiO₂`",
          "Tetraphosphorus decaoxide, `P₄O₁₀`",
        ],
        answerIndex: 2,
        explanation:
          "`SiO₂` is a giant covalent solid (very high m.p., insoluble in water) that is **acidic**: it does NOT react with `HCl(aq)` (ruling out basic `MgO` and amphoteric `Al₂O₃`), but reacts with hot concentrated `NaOH(aq)` to form `Na₂SiO₃(aq)`. `P₄O₁₀` has a low melting point and reacts vigorously with water.",
        hints: [
          "Eliminate any oxide that reacts with `HCl(aq)` (all basic and amphoteric oxides).",
          "Check which remaining acidic Period 3 oxide is insoluble in water with a giant covalent network.",
        ],
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: HL Transition Metals, Catalysis & Crystal Field Theory (15 MCQs)
  // answerIndex spread: [3, 4, 4, 4]
  // ===========================================================================
  {
    id: "s3-1-periodicity-m3",
    title: "Paper 1A · HL Transition Elements & Crystal Field Theory",
    level: "HL",
    questions: [
      {
        id: "s3-1-periodicity-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Why do first-row transition metals exhibit multiple stable oxidation states, whereas Group 2 metals like calcium exhibit only `+2`?",
        options: [
          "Transition metals have much larger atomic radii than calcium, reducing all successive ionization energies equally.",
          "Transition metals possess paired `4p` electrons that can be lost alongside `4s` electrons without energy cost.",
          "Calcium cannot form cations with a noble-gas configuration, whereas transition metals reach `[Kr]` readily.",
          "The `4s` and `3d` sublevels in transition metals are very close in energy, so successive ionization energies rise gradually.",
        ],
        answerIndex: 3,
        explanation:
          "In transition elements, `4s` and `3d` sublevels have very similar energies, allowing variable numbers of electrons to be removed without a massive jump in ionization energy. In `Ca` (`[Ar] 4s²`), removing a third electron breaks into the inner `3p` shell, producing an enormous jump in `IE₃`.",
        hints: [
          "Compare the energy gap between the valence orbitals of `Fe` (`4s` and `3d`) versus `Ca` (`4s` and inner `3p`).",
          "Think about what a plot of successive ionization energies looks like for `Ca` vs `Mn`.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which three first-row `d`-block elements exhibit **ferromagnetism** at room temperature?",
        options: [
          "Chromium, manganese, and iron (`Cr, Mn, Fe`)",
          "Iron, cobalt, and nickel (`Fe, Co, Ni`)",
          "Titanium, vanadium, and chromium (`Ti, V, Cr`)",
          "Nickel, copper, and zinc (`Ni, Cu, Zn`)",
        ],
        answerIndex: 1,
        explanation:
          "Only **iron (`Fe`), cobalt (`Co`), and nickel (`Ni`)** among the first-row `d`-block metals form aligned long-range magnetic domains that retain permanent magnetism (**ferromagnetism**) after the external field is removed.",
        hints: [
          "Think of the classic magnetic metals found next to each other in Groups 8, 9, and 10.",
          "Eliminate diamagnetic `Zn` and purely paramagnetic metals like `Ti` or `Cr`.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "transition-elements-complexes-hl",
        question:
          "In the Contact process (`2SO₂(g) + O₂(g) ⇌ 2SO₃(g)`), solid vanadium(V) oxide (`V₂O₅(s)`) serves as a catalyst. Which statement best describes its role?",
        options: [
          "It acts as a homogeneous catalyst that shifts the equilibrium position toward `SO₃` to increase yield.",
          "It acts as a heterogeneous catalyst that increases the enthalpy change (`ΔH`) of the forward reaction.",
          "It acts as a heterogeneous catalyst providing an alternative pathway with lower activation energy via variable vanadium oxidation states.",
          "It acts as a homogeneous catalyst that supplies oxygen permanently and is consumed stoichiometrically.",
        ],
        answerIndex: 2,
        explanation:
          "Solid `V₂O₅(s)` is in a different phase from gaseous `SO₂`/`O₂`, so it is a **heterogeneous** catalyst. It lowers activation energy `E_a` by cycling reversibly between `V(+5)` (`V₂O₅`) and `V(+4)` (`V₂O₄`) without being consumed and without changing `ΔH` or equilibrium yield.",
        hints: [
          "Check the physical state of `V₂O₅(s)` versus `SO₂(g)` and `O₂(g)`: homogeneous or heterogeneous?",
          "Remember that NO catalyst ever alters `ΔH` or the equilibrium position.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "transition-elements-complexes-hl",
        question:
          "What are the coordination number and the oxidation state of iron in the tris(ethanedioato)ferrate complex ion, `[Fe(C₂O₄)₃]³⁻`?",
        options: [
          "Coordination number `6`, oxidation state `+3`",
          "Coordination number `3`, oxidation state `+3`",
          "Coordination number `6`, oxidation state `+6`",
          "Coordination number `3`, oxidation state `−3`",
        ],
        answerIndex: 0,
        explanation:
          "Each ethanedioate (oxalate) ligand `C₂O₄²⁻` is **bidentate** (donates 2 oxygen lone pairs) and carries charge `−2`. Thus `CN = 3 × 2 = 6`, and charge balance gives `x + 3(−2) = −3` → `x = +3`.",
        hints: [
          "Remember that `C₂O₄²⁻` is bidentate with charge `−2`.",
          "Solve `x + 3(−2) = −3` and multiply `3` ligands by `2` donor atoms per ligand.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which species **cannot** function as a ligand in a transition-metal complex ion?",
        options: [
          "Carbon monoxide, `CO`",
          "Hydroxide ion, `OH⁻`",
          "Ammonium ion, `NH₄⁺`",
          "Ethane-1,2-diamine, `H₂NCH₂CH₂NH₂`",
        ],
        answerIndex: 2,
        explanation:
          "A ligand must possess at least one **lone pair** of electrons to donate into a metal orbital. In `NH₄⁺`, nitrogen's lone pair has already formed a coordinate bond with `H⁺`, leaving zero lone pairs (plus positive–positive electrostatic repulsion with the metal cation!).",
        hints: [
          "Draw Lewis structures for all four species and look for a lone pair on a donor atom.",
          "Compare ammonia (`NH₃`, 1 lone pair) with ammonium (`NH₄⁺`).",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which option correctly matches the coordination complex with its molecular geometry and coordination number?",
        options: [
          "`[CuCl₄]²⁻` — octahedral, coordination number `4`",
          "`[Ag(NH₃)₂]⁺` — bent, coordination number `2`",
          "`[Fe(EDTA)]⁻` — linear, coordination number `1`",
          "`[Pt(NH₃)₂Cl₂]` — square planar, coordination number `4`",
        ],
        answerIndex: 3,
        explanation:
          "Cisplatin `[Pt(NH₃)₂Cl₂]` (`d⁸` `Pt²⁺`) is **square planar** with `CN = 4`. `[CuCl₄]²⁻` is tetrahedral (`CN = 4`), `[Ag(NH₃)₂]⁺` is linear (`CN = 2`), and `[Fe(EDTA)]⁻` is octahedral (`CN = 6`).",
        hints: [
          "Check the denticity of `EDTA⁴⁻` and the geometry of 2-coordinate `[Ag(NH₃)₂]⁺`.",
          "Recall the anticancer drug cisplatin (`[Pt(NH₃)₂Cl₂]`): why does it have cis/trans isomers?",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "In an octahedral crystal field where six ligands approach along the `±x`, `±y`, and `±z` axes, why do the `d_x²−y²` and `d_z²` orbitals rise to a higher energy than `d_xy`, `d_xz`, and `d_yz`?",
        options: [
          "The `d_x²−y²` and `d_z²` orbitals lie further from the nucleus, so they attract incoming ligands more strongly.",
          "The lobes of `d_x²−y²` and `d_z²` point directly along the axes at ligand lone pairs, causing stronger electrostatic repulsion.",
          "The `d_xy`, `d_xz`, and `d_yz` orbitals form π bonds with water ligands that lower their principal quantum number.",
          "Electrons in `d_x²−y²` and `d_z²` always spin-pair first, creating additional inter-electronic repulsion.",
        ],
        answerIndex: 1,
        explanation:
          "Electrostatic repulsion between ligand lone pairs and metal `d` electrons is greatest where their electron clouds overlap most directly. Because `d_x²−y²` and `d_z²` lobes align directly along the Cartesian axes toward the six ligands, they experience greater repulsion and sit higher in energy than `d_xy, d_xz, d_yz` (whose lobes lie between axes).",
        hints: [
          "Picture where the lobes of `d_z²` and `d_x²−y²` point relative to six octahedral ligands along `±x, ±y, ±z`.",
          "Remember that ligand lone pairs and metal `d` electrons are BOTH negatively charged, so they repel!",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Why is an aqueous solution of `[Cu(H₂O)₆]²⁺` pale blue, whereas an aqueous solution of `[Zn(H₂O)₆]²⁺` is colourless?",
        options: [
          "`Cu²⁺` (`3d⁹`) has an incomplete `d` sublevel allowing visible `d–d` absorption, whereas `Zn²⁺` (`3d¹⁰`) has a full `d` sublevel preventing `d–d` transitions.",
          "`Cu²⁺` (`3d⁹`) emits blue photons as electrons drop between split `d` levels, whereas `Zn²⁺` emits only ultraviolet radiation.",
          "`H₂O` ligands split the `3d` orbitals of `Cu²⁺` into two levels, whereas `H₂O` ligands cannot coordinate to `Zn²⁺` ions.",
          "`Cu²⁺` has a smaller splitting energy `ΔE` than `Zn²⁺`, so `Zn²⁺` absorbs only infrared radiation beyond `700 nm`.",
        ],
        answerIndex: 0,
        explanation:
          "Although `H₂O` coordinates to both ions and splits their `3d` sublevels, `Zn²⁺` (`[Ar] 3d¹⁰`) has both the lower and upper `d` orbitals completely filled — no electron can be promoted (`d–d` transition is blocked). `Cu²⁺` (`[Ar] 3d⁹`) has a vacancy in the upper `d` level, so it absorbs orange-red light and transmits complementary blue light (never 'emits' blue light!).",
        hints: [
          "Compare the `3d` electron counts of `Cu²⁺` and `Zn²⁺`.",
          "Watch out for the classic IB trap word 'emits' — coloured complexes ABSORB and TRANSMIT!",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "d-orbital-splitting-colour-hl",
        diagram: `<svg viewBox="0 0 420 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visible absorption spectrum of a transition metal complex with peak absorbance at 520 nm">
  <rect x="0" y="0" width="420" height="185" rx="10" fill="#f8fafc"/>
  <text x="210" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">Visible Absorption Spectrum of Complex Z</text>
  <line x1="50" y1="34" x2="50" y2="146" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="146" x2="390" y2="146" stroke="#475569" stroke-width="1.5"/>
  <text x="20" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#475569" transform="rotate(-90 20 92)">Absorbance</text>
  <!-- Absorption peak around 520 nm (x = 50 + (520-400)/300 * 320 = 178) -->
  <path d="M58,143 C110,141 142,50 178,48 C214,50 250,141 378,144" fill="#bbf7d0" fill-opacity="0.55" stroke="#16a34a" stroke-width="2.5"/>
  <line x1="178" y1="48" x2="178" y2="146" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="4,3"/>
  <circle cx="178" cy="48" r="4" fill="#dc2626"/>
  <text x="228" y="60" font-size="10" font-weight="700" fill="#dc2626">λ_max = 520 nm</text>
  <g font-size="9.5" fill="#475569" text-anchor="middle">
    <text x="50" y="160">400</text><text x="157" y="160">500</text><text x="263" y="160">600</text><text x="370" y="160">700</text>
    <text x="210" y="176" font-weight="700">Wavelength λ (nm)</text>
  </g>
</svg>`,
        question:
          "Complex Z exhibits its absorption peak at `λ_max = 520 nm` as shown. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, what are its molar splitting energy `ΔE` and observed colour?",
        options: [
          "`ΔE ≈ 230 kJ mol⁻¹`, observed colour **green**",
          "`ΔE ≈ 175 kJ mol⁻¹`, observed colour **red**",
          "`ΔE ≈ 383 kJ mol⁻¹`, observed colour **blue**",
          "`ΔE ≈ 230 kJ mol⁻¹`, observed colour **red**",
        ],
        answerIndex: 3,
        explanation:
          "Convert `λ = 520 × 10⁻⁹ m`: `E = hc / λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (5.20 × 10⁻⁷) = 3.825 × 10⁻¹⁹ J`. Per mole: `ΔE = 3.825 × 10⁻¹⁹ × 6.02 × 10²³ / 1000 = 230.3 ≈ 230 kJ mol⁻¹`. Since `520 nm` is **green** (`491–575 nm`), the complementary colour observed is **red**.",
        hints: [
          "Calculate `ΔE = (h × c × N_A) / (1000 × λ)` with `λ = 520 × 10⁻⁹ m`.",
          "Locate `520 nm` (green) on the IB colour wheel, then move directly across to the opposite sector.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Four octahedral `Cr³⁺` complexes contain the ligands `Cl⁻`, `H₂O`, `NH₃`, and `CN⁻` respectively. Which sequence lists them in order of **increasing** crystal field splitting energy `ΔE`?",
        options: [
          "`[Cr(CN)₆]³⁻ < [Cr(NH₃)₆]³⁺ < [Cr(H₂O)₆]³⁺ < [CrCl₆]³⁻`",
          "`[Cr(H₂O)₆]³⁺ < [CrCl₆]³⁻ < [Cr(NH₃)₆]³⁺ < [Cr(CN)₆]³⁻`",
          "`[CrCl₆]³⁻ < [Cr(H₂O)₆]³⁺ < [Cr(NH₃)₆]³⁺ < [Cr(CN)₆]³⁻`",
          "`[CrCl₆]³⁻ < [Cr(NH₃)₆]³⁺ < [Cr(H₂O)₆]³⁺ < [Cr(CN)₆]³⁻`",
        ],
        answerIndex: 2,
        explanation:
          "Following the IB spectrochemical series (`I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CO ≈ CN⁻`), splitting energy `ΔE` increases smoothly in the order `Cl⁻ < H₂O < NH₃ < CN⁻`.",
        hints: [
          "Recall the spectrochemical series order for `Cl⁻`, `H₂O`, `NH₃`, and `CN⁻`.",
          "Weak-field halide ligands lie at the bottom (`smallest ΔE`); `CN⁻` lies at the top (`largest ΔE`).",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Why does `[Fe(H₂O)₆]³⁺(aq)` have a larger crystal field splitting energy `ΔE` than `[Fe(H₂O)₆]²⁺(aq)`?",
        options: [
          "`Fe³⁺` has more `3d` electrons than `Fe²⁺`, increasing repulsion against the water ligands.",
          "`Fe³⁺` has a higher oxidation state and greater charge density, pulling `H₂O` ligands closer and increasing `d`-orbital repulsion.",
          "`[Fe(H₂O)₆]³⁺` adopts a tetrahedral geometry whereas `[Fe(H₂O)₆]²⁺` adopts an octahedral geometry.",
          "`H₂O` becomes a stronger-field ligand in the spectrochemical series only when bonded to `+3` cations.",
        ],
        answerIndex: 1,
        explanation:
          "Both complexes are octahedral with identical `H₂O` ligands. Because `Fe³⁺` has a higher positive charge and smaller ionic radius (higher charge density), it attracts the `H₂O` lone pairs closer to the nucleus, intensifying repulsion with the `d_x²−y²` and `d_z²` orbitals and widening `ΔE`.",
        hints: [
          "Identify which of the four `ΔE` factors differs between `[Fe(H₂O)₆]²⁺` and `[Fe(H₂O)₆]³⁺`.",
          "How does a higher cation charge affect metal–ligand distance and electrostatic splitting?",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "An octahedral cobalt(III) complex has a molar crystal field splitting energy `ΔE = 266 kJ mol⁻¹`. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, what is the wavelength of light absorbed and the observed colour?",
        options: [
          "`λ ≈ 450 nm` (blue absorbed), observed colour **blue**",
          "`λ ≈ 600 nm` (orange absorbed), observed colour **blue**",
          "`λ ≈ 450 nm` (blue absorbed), observed colour **yellow**",
          "`λ ≈ 450 nm` (blue absorbed), observed colour **orange**",
        ],
        answerIndex: 3,
        explanation:
          "Rearranging `ΔE = h c N_A / λ` with `ΔE = 266 000 J mol⁻¹`: `λ = (6.02 × 10²³ × 6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 266 000 = 4.50 × 10⁻⁷ m = 450 nm`. On the IB colour wheel, `450 nm` is **blue** (`424–491 nm`), so its complementary observed colour is **orange**.",
        hints: [
          "Convert `266 kJ mol⁻¹` to `266 000 J mol⁻¹` before solving `λ = N_A h c / ΔE`.",
          "Convert metres to nanometres (`× 10⁹`), then find the complementary colour opposite blue.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Adding concentrated `HCl(aq)` to pink `[Co(H₂O)₆]²⁺(aq)` shifts the equilibrium to deep blue `[CoCl₄]²⁻(aq)`. Which two factors both contribute to a **smaller** splitting energy `ΔE` in `[CoCl₄]²⁻`?",
        options: [
          "`Cl⁻` is a stronger-field ligand than `H₂O`, and tetrahedral complexes have larger splitting than octahedral complexes.",
          "`Co²⁺` is oxidized to `Co³⁺`, and chloride ligands carry a negative charge.",
          "`Cl⁻` is a weaker-field ligand than `H₂O`, and tetrahedral geometry (`CN = 4`) splits `d` orbitals less than octahedral geometry (`CN = 6`).",
          "`Cl⁻` reduces the number of `3d` electrons on cobalt, and tetrahedral ligands approach directly along all three axes.",
        ],
        answerIndex: 2,
        explanation:
          "In `[Co(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CoCl₄]²⁻ + 6H₂O`, cobalt stays `+2` (`3d⁷`). Both replacing `H₂O` with weaker-field `Cl⁻` AND changing from 6-coordinate octahedral to 4-coordinate tetrahedral geometry (`Δ_t ≈ 4/9 Δ_o`) reduce `ΔE`, shifting absorption from green (~510 nm, pink seen) to longer-wavelength orange (~620 nm, blue seen).",
        hints: [
          "Check whether cobalt's oxidation state changes when forming `[CoCl₄]²⁻`.",
          "Compare `Cl⁻` vs `H₂O` in the spectrochemical series AND `CN = 4` tetrahedral vs `CN = 6` octahedral splitting.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "transition-elements-complexes-hl",
        question:
          "Which statement correctly explains why aqueous `Fe²⁺` ions effectively catalyse the slow homogeneous reaction between `S₂O₈²⁻(aq)` and `I⁻(aq)`?",
        options: [
          "Positive `Fe²⁺`/`Fe³⁺` ions attract negative reactants and interconvert between `+2` and `+3` oxidation states along a lower-`E_a` pathway.",
          "Solid `Fe²⁺` precipitates onto the reaction vessel walls, providing vacant `3d` orbitals for surface adsorption.",
          "`Fe²⁺` permanently oxidizes `I⁻` to `I₂` while remaining unchanged in the `+2` oxidation state throughout.",
          "`Fe²⁺` reacts with `S₂O₈²⁻` to raise the average kinetic energy of `I⁻` ions above the original activation energy.",
        ],
        answerIndex: 0,
        explanation:
          "Direct collision between `S₂O₈²⁻` and `I⁻` has a high `E_a` because two negatively charged anions repel each other. Positively charged `Fe²⁺` reduces `S₂O₈²⁻` (`2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻`), and `Fe³⁺` then oxidizes `I⁻` (`2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂`), regenerating `Fe²⁺` via two low-`E_a` steps.",
        hints: [
          "Think about why `S₂O₈²⁻` and `I⁻` react slowly without a catalyst (look at their charges!).",
          "Recall how homogeneous transition-metal catalysts work: cycling between two accessible oxidation states.",
        ],
      },
      {
        id: "s3-1-periodicity-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "d-orbital-splitting-colour-hl",
        question:
          "Two octahedral complexes of the same `d³` metal ion, `P` (yellow) and `Q` (green), each show a single `d–d` absorption band in the visible spectrum. Which conclusion is valid?",
        options: [
          "Complex `Q` has a larger splitting energy `ΔE` than Complex `P` because green light has a shorter wavelength than yellow light.",
          "Complex `P` has a larger splitting energy `ΔE` than Complex `Q` because `P` absorbs violet light (`~410 nm`) whereas `Q` absorbs red light (`~670 nm`).",
          "Complex `P` and Complex `Q` have identical splitting energies `ΔE`, differing only in the concentration of the solution.",
          "Complex `Q` contains a stronger-field ligand than Complex `P` because `Q` transmits shorter-wavelength green light.",
        ],
        answerIndex: 1,
        explanation:
          "Use the complementary colour wheel! Yellow Complex `P` absorbs **violet** light (`400–424 nm`, short `λ`, **large `ΔE`**), whereas green Complex `Q` absorbs **red** light (`647–700 nm`, long `λ`, **small `ΔE`**). Never compare the wavelengths of the *transmitted* colours directly without converting to *absorbed* colours first!",
        hints: [
          "First convert each OBSERVED colour (yellow and green) into its ABSORBED complementary colour!",
          "Then apply `ΔE = hc / λ`: shorter absorbed wavelength = larger `ΔE`.",
        ],
      },
    ],
  },
];
