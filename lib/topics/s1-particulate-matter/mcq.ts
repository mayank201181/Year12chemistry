import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: FOUNDATIONS, ISOTOPES & ELECTRON SHELLS (spread: 0:4, 1:4, 2:4, 3:3)
  // ===========================================================================
  {
    id: "s1-particulate-matter-m1",
    title: "Paper 1A · Set 1 — Foundations, Isotopes & Electron Shells",
    level: "SL",
    questions: [
      {
        id: "s1-particulate-matter-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "particulate-nuclear-atom",
        strategy: "Homogeneous vs heterogeneous mixtures",
        question:
          "Which of the following samples is correctly classified as a **heterogeneous mixture**?",
        options: [
          "Aqueous sodium chloride solution prepared in distilled water",
          "Clean dry atmospheric air containing nitrogen and oxygen gases",
          "A shaken bottle containing liquid vegetable oil and distilled water",
          "Solid brass alloy made by melting copper and zinc together",
        ],
        answerIndex: 2,
        hints: [
          "A homogeneous mixture has uniform composition and a single visible phase throughout.",
          "Which sample separates into distinct regions with a visible phase boundary?",
        ],
        explanation:
          "Vegetable oil and water are immiscible and form two distinct phases with non-uniform composition, making them a heterogeneous mixture. Aqueous NaCl, clean dry air, and brass alloy all have uniform single-phase composition and are homogeneous mixtures.",
      },
      {
        id: "s1-particulate-matter-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "particulate-nuclear-atom",
        strategy: "Kinetic vs potential energy on heating curves",
        question:
          "A sample of pure liquid ethanol is heated steadily at 100 kPa. While the ethanol is actively boiling at 78.4 °C, how do the average kinetic energy and potential energy of its molecules change?",
        options: [
          "Average kinetic energy stays constant while potential energy increases",
          "Average kinetic energy increases while potential energy stays constant",
          "Both average kinetic energy and potential energy increase steadily",
          "Average kinetic energy decreases while potential energy increases",
        ],
        answerIndex: 0,
        hints: [
          "How is absolute temperature related to the average kinetic energy of molecules?",
          "During boiling at constant temperature, what does the supplied thermal energy overcome?",
        ],
        explanation:
          "Because temperature remains constant at 78.4 °C during boiling, the average kinetic energy of the molecules remains constant. The supplied heat overcomes intermolecular attractions as liquid becomes gas, increasing the potential energy of the molecules.",
      },
      {
        id: "s1-particulate-matter-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "particulate-nuclear-atom",
        strategy: "Nuclear notation for ions",
        question:
          "How many protons, neutrons and electrons are present in a single iron(III) ion represented by **⁵⁶₂₆Fe³⁺**?",
        options: [
          "26 protons, 56 neutrons, 23 electrons",
          "26 protons, 30 neutrons, 29 electrons",
          "23 protons, 30 neutrons, 26 electrons",
          "26 protons, 30 neutrons, 23 electrons",
        ],
        answerIndex: 3,
        hints: [
          "The lower number (Z = 26) is the proton number; mass number (A = 56) equals protons + neutrons.",
          "A 3+ charge means the atom has LOST 3 electrons compared with a neutral Fe atom.",
        ],
        explanation:
          "Iron has {{Z = 26}} protons, {{A - Z = 56 - 26 = 30}} neutrons, and a 3+ cation has lost 3 electrons: {{26 - 3 = 23}} electrons. Adding 3 electrons instead of subtracting gives 29, which would correspond to a 3− anion.",
      },
      {
        id: "s1-particulate-matter-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "particulate-nuclear-atom",
        strategy: "Weighted average relative atomic mass",
        question:
          "Naturally occurring silver consists of 51.8% ¹⁰⁷Ag and 48.2% ¹⁰⁹Ag. What is the relative atomic mass ({{A_r}}) of silver to two decimal places?",
        options: ["107.48", "107.96", "108.00", "108.04"],
        answerIndex: 1,
        hints: [
          "Compute A_r = [(107 × 51.8) + (109 × 48.2)] / 100.",
          "Since ¹⁰⁷Ag is slightly more abundant than ¹⁰⁹Ag, A_r must be just below 108.00.",
        ],
        explanation:
          "{{A_r = ((107 * 51.8) + (109 * 48.2))/100 = (5542.6 + 5253.8)/100 = 107.964 ≈ 107.96}}. Notice that 108.04 results from accidentally swapping the two percentage abundances.",
      },
      {
        id: "s1-particulate-matter-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "particulate-nuclear-atom",
        strategy: "Chemical vs physical properties of isotopes",
        question:
          "Which statement correctly compares the two naturally occurring isotopes ³⁵Cl and ³⁷Cl?",
        options: [
          "They have identical chemical properties but different densities and rates of diffusion",
          "They have different chemical properties because their nuclei contain different numbers of neutrons",
          "They have identical physical properties because both atoms contain 17 valence-shell electrons",
          "They have different electron configurations and therefore react with sodium at different ratios",
        ],
        answerIndex: 0,
        hints: [
          "Which subatomic particles govern chemical reactivity and bonding?",
          "Which properties depend directly on atomic mass?",
        ],
        explanation:
          "Both ³⁵Cl and ³⁷Cl have 17 protons and the same electron configuration (1s² 2s² 2p⁶ 3s² 3p⁵), so their chemical properties are identical. Extra neutrons change atomic mass, altering mass-dependent physical properties such as density and diffusion rate.",
      },
      {
        id: "s1-particulate-matter-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "electron-configurations",
        strategy: "Hydrogen emission series",
        question:
          "Which electron transition in a hydrogen atom emits a photon in the **visible** region of the electromagnetic spectrum?",
        options: [
          "From n = 2 down to n = 1",
          "From n = 2 up to n = 4",
          "From n = 4 down to n = 2",
          "From n = 5 down to n = 3",
        ],
        answerIndex: 2,
        hints: [
          "Emission requires an electron to FALL from a higher shell to a lower shell.",
          "Recall Lyman (n = 1, UV), Balmer (n = 2, visible), and Paschen (n = 3, IR).",
        ],
        explanation:
          "Visible emission lines of hydrogen belong to the Balmer series, formed when excited electrons fall down to {{n = 2}} (such as {{n = 4 → n = 2}}, cyan light at 486 nm). Moving up from {{n = 2}} to {{n = 4}} is absorption, while drops to {{n = 1}} emit UV and drops to {{n = 3}} emit infrared.",
      },
      {
        id: "s1-particulate-matter-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "electron-configurations",
        strategy: "Convergence of atomic emission spectra",
        question:
          "Why do the spectral lines in each series of the hydrogen emission spectrum get closer together (converge) at higher frequencies?",
        options: [
          "Higher-frequency photons travel more slowly through the spectroscope prism",
          "The energy spacing between adjacent main energy levels decreases as n increases",
          "Electrons move closer to the nucleus as the principal quantum number n increases",
          "More electrons occupy the higher shells and repel each other into smaller gaps",
        ],
        answerIndex: 1,
        hints: [
          "Higher frequency means larger ΔE = hf.",
          "Compare the energy gap between n = 1 and n = 2 with the gap between n = 5 and n = 6.",
        ],
        explanation:
          "As {{n}} increases, consecutive main energy levels lie progressively closer together in energy and approach the ionization limit at {{n = ∞}}. Consequently, transitions from higher levels emit photons of increasingly similar high frequencies, causing the spectral lines to converge.",
      },
      {
        id: "s1-particulate-matter-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "State",
        guideRef: "electron-configurations",
        strategy: "Shell and sublevel electron capacities",
        question:
          "What is the maximum number of electrons that can occupy the {{n = 3}} main energy level, and how many individual orbitals make up the 3d sublevel?",
        options: [
          "8 electrons in n = 3, and 3 orbitals in the 3d sublevel",
          "18 electrons in n = 3, and 10 orbitals in the 3d sublevel",
          "32 electrons in n = 3, and 5 orbitals in the 3d sublevel",
          "18 electrons in n = 3, and 5 orbitals in the 3d sublevel",
        ],
        answerIndex: 3,
        hints: [
          "Use the formula 2n² for the maximum electrons in main energy level n.",
          "Remember that each individual orbital holds 2 electrons — do not confuse orbital count with electron capacity!",
        ],
        explanation:
          "Main level {{n = 3}} holds at most {{2(3)^2 = 18}} electrons (3s² 3p⁶ 3d¹⁰). The 3d sublevel holds 10 electrons across **5 individual d orbitals** (2 electrons per orbital by the Pauli exclusion principle).",
      },
      {
        id: "s1-particulate-matter-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "electron-configurations",
        strategy: "Aufbau exceptions (Cr and Cu)",
        question:
          "What is the correct condensed ground-state electron configuration of a neutral chromium atom, Cr ({{Z = 24}})?",
        options: [
          "[Ar] 3d⁴ 4s²",
          "[Ar] 3d⁶ 4s⁰",
          "[Ar] 3d⁵ 4s¹",
          "[Ne] 3d⁵ 4s¹",
        ],
        answerIndex: 2,
        hints: [
          "Ar accounts for 18 electrons, leaving 6 electrons to place in 3d and 4s.",
          "Chromium (Z = 24) and copper (Z = 29) are the two mandatory Aufbau exceptions.",
        ],
        explanation:
          "Chromium promotes one 4s electron into 3d to achieve a lower-energy half-filled 3d⁵ sublevel with reduced electron–electron repulsion: **[Ar] 3d⁵ 4s¹**. Using [Ne] instead of [Ar] omits the 3s² 3p⁶ electrons.",
      },
      {
        id: "s1-particulate-matter-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "electron-configurations",
        strategy: "Transition-metal cation rule (remove 4s first)",
        question:
          "What is the condensed ground-state electron configuration of the cobalt(II) ion, Co²⁺ ({{Z = 27}})?",
        options: [
          "[Ar] 3d⁷",
          "[Ar] 3d⁵ 4s²",
          "[Ar] 3d⁶ 4s¹",
          "[Ar] 3d⁹",
        ],
        answerIndex: 0,
        hints: [
          "First write neutral Co (Z = 27): [Ar] 3d⁷ 4s².",
          "When forming ANY 3d-block cation, which sublevel loses electrons FIRST?",
        ],
        explanation:
          "Neutral cobalt is [Ar] 3d⁷ 4s². Once 3d is occupied, 4s is higher in energy and always loses electrons first on ionization, so removing 2 electrons gives Co²⁺ = **[Ar] 3d⁷**. Removing 3d electrons first ([Ar] 3d⁵ 4s²) is the classic exam error.",
      },
      {
        id: "s1-particulate-matter-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "electron-configurations",
        strategy: "Hund's rule for transition ions",
        question:
          "How many **unpaired electrons** are present in a single ground-state iron(II) ion, Fe²⁺ ({{Z = 26}})?",
        options: ["2 unpaired electrons", "4 unpaired electrons", "5 unpaired electrons", "6 unpaired electrons"],
        answerIndex: 1,
        hints: [
          "Determine the electron configuration of Fe²⁺ by removing 4s² from neutral Fe ([Ar] 3d⁶ 4s²).",
          "Place 6 electrons into 5 degenerate 3d orbitals using Hund's rule: fill all five singly before pairing the 6th.",
        ],
        explanation:
          "Fe²⁺ has configuration [Ar] 3d⁶ (24 electrons). Filling the five 3d orbitals singly takes 5 parallel electrons, and the 6th electron pairs into one orbital, leaving one paired orbital (↑↓) and **4 unpaired electrons** (↑ ↑ ↑ ↑).",
      },
      {
        id: "s1-particulate-matter-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "ionization-energy-hl",
        strategy: "Definition of successive ionization energies",
        question:
          "Which equation correctly represents the **second ionization energy** of magnesium?",
        options: [
          "Mg(s) → Mg²⁺(g) + 2e⁻",
          "Mg(g) → Mg²⁺(g) + 2e⁻",
          "Mg⁺(s) → Mg²⁺(g) + e⁻",
          "Mg⁺(g) → Mg²⁺(g) + e⁻",
        ],
        answerIndex: 3,
        hints: [
          "The second ionization energy removes only the SECOND electron (one mole of electrons), not both electrons at once.",
          "All ionization energies are defined strictly for gaseous species.",
        ],
        explanation:
          "The second ionization energy is the minimum energy to remove one mole of electrons from one mole of gaseous 1+ ions to form gaseous 2+ ions: **Mg⁺(g) → Mg²⁺(g) + e⁻**. Removing two electrons from Mg(g) represents {{IE_1 + IE_2}}, and solid reactants include atomization energy.",
      },
      {
        id: "s1-particulate-matter-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "ionization-energy-hl",
        strategy: "Period 2 sublevel ionization anomaly (Be → B)",
        question:
          "Why is the first ionization energy of boron (801 kJ mol⁻¹) lower than that of beryllium (900 kJ mol⁻¹), despite boron having a greater nuclear charge?",
        options: [
          "Boron's outer electron occupies a higher-energy 2p sublevel that is partially shielded by 2s²",
          "Boron's outer electron is paired in a 2p orbital and experiences extra electron–electron repulsion",
          "Boron's outer electron enters the n = 3 main energy level, much further from the nucleus",
          "Boron has fewer inner core electrons than beryllium, reducing effective nuclear attraction",
        ],
        answerIndex: 0,
        hints: [
          "Compare the configurations: Be is 1s² 2s² whereas B is 1s² 2s² 2p¹.",
          "Are there any paired electrons in boron's 2p sublevel?",
        ],
        explanation:
          "Boron (1s² 2s² 2p¹) loses a single unpaired electron from the higher-energy **2p** sublevel, which lies slightly further from the nucleus and is partially shielded by the filled 2s² sublevel. Electron-pair repulsion in 2p explains the N → O dip, not Be → B.",
      },
      {
        id: "s1-particulate-matter-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "ionization-energy-hl",
        strategy: "Period 2 orbital-pairing anomaly (N → O)",
        question:
          "Why is the first ionization energy of oxygen (1314 kJ mol⁻¹) lower than that of nitrogen (1402 kJ mol⁻¹)?",
        options: [
          "Oxygen's outer electron occupies a higher-energy 3s sublevel further from the nucleus",
          "Oxygen has a larger atomic radius than nitrogen because it contains more inner shells",
          "Oxygen has two electrons paired in the same 2p orbital, causing extra electron–electron repulsion",
          "Oxygen's nuclear charge is shielded by a completely filled 2p sublevel",
        ],
        answerIndex: 2,
        hints: [
          "Draw orbital boxes for N (2p³) and O (2p⁴).",
          "What changes when the 4th electron enters the three 2p orbitals?",
        ],
        explanation:
          "In nitrogen (2p³), all three 2p orbitals hold single unpaired electrons. In oxygen (2p⁴), two electrons share the same 2p orbital; the resulting extra **electron–electron repulsion** makes one of those paired electrons easier to remove.",
      },
      {
        id: "s1-particulate-matter-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Counting atoms inside formula units",
        question:
          "How many **oxygen atoms** are present in 0.50 mol of aluminium sulfate, Al₂(SO₄)₃? (Use {{N_A = 6.02 * 10^{23}}} mol⁻¹.)",
        options: [
          "3.01 × 10²³ oxygen atoms",
          "3.61 × 10²⁴ oxygen atoms",
          "1.20 × 10²⁴ oxygen atoms",
          "7.22 × 10²⁴ oxygen atoms",
        ],
        answerIndex: 1,
        hints: [
          "Count how many O atoms appear inside one formula unit of Al₂(SO₄)₃: multiply the subscripts 4 × 3.",
          "Multiply moles of formula units (0.50 mol) by 12 to get moles of O atoms, then multiply by N_A.",
        ],
        explanation:
          "Each formula unit of Al₂(SO₄)₃ contains {{3 * 4 = 12}} oxygen atoms. Therefore 0.50 mol contains {{0.50 * 12 = 6.0}} mol of O atoms, which equals {{6.0 * 6.02 * 10^{23} = 3.61 * 10^{24}}} oxygen atoms. Using 4 instead of 12 gives {{1.20 * 10^{24}}}.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: THE MOLE, SOLUTIONS & IDEAL GASES (spread: 0:4, 1:3, 2:4, 3:4)
  // ===========================================================================
  {
    id: "s1-particulate-matter-m2",
    title: "Paper 1A · Set 2 — The Mole, Solutions & Ideal Gases",
    level: "SL",
    questions: [
      {
        id: "s1-particulate-matter-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Molar mass of hydrated salts",
        question:
          "What is the molar mass (in g mol⁻¹) of hydrated copper(II) sulfate, CuSO₄·5H₂O? ({{A_r}}: Cu = 63.55, S = 32.07, O = 16.00, H = 1.01.)",
        options: ["159.62 g mol⁻¹", "249.72 g mol⁻¹", "177.64 g mol⁻¹", "244.67 g mol⁻¹"],
        answerIndex: 1,
        hints: [
          "The dot in CuSO₄·5H₂O means ADD five moles of H₂O (do not multiply!).",
          "Compute M(CuSO₄) = 63.55 + 32.07 + 4(16.00), then add 5 × 18.02.",
        ],
        explanation:
          "{{M(CuSO_4) = 63.55 + 32.07 + 64.00 = 159.62}} g mol⁻¹, and {{5 * M(H_2O) = 5 * (2.02 + 16.00) = 90.10}} g mol⁻¹. Adding gives **249.72 g mol⁻¹**. Adding only one H₂O gives 177.64 g mol⁻¹, and omitting the water gives 159.62 g mol⁻¹.",
      },
      {
        id: "s1-particulate-matter-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Molar gas volume at IB STP",
        question:
          "What volume (in dm³) is occupied by 0.250 mol of nitrogen gas, N₂(g), at IB STP (273 K and 100 kPa, where {{V_m = 22.7}} dm³ mol⁻¹)?",
        options: ["5.60 dm³", "11.4 dm³", "90.8 dm³", "5.68 dm³"],
        answerIndex: 3,
        hints: [
          "Use V = n × V_m with the IB FA2025 molar volume V_m = 22.7 dm³ mol⁻¹.",
          "Check 0.250 × 22.7 and round to 3 significant figures.",
        ],
        explanation:
          "{{V = 0.250 * 22.7 = 5.675 ≈ 5.68}} dm³. Note that 5.60 dm³ comes from the outdated molar volume 22.4 dm³ mol⁻¹, and 90.8 dm³ comes from dividing instead of multiplying by 0.250.",
      },
      {
        id: "s1-particulate-matter-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "mole-ideal-gases",
        strategy: "Empirical formula with non-integer scaling",
        question:
          "An iron oxide contains 70.0% iron and 30.0% oxygen by mass ({{A_r}}: Fe = 55.85, O = 16.00). What is its empirical formula?",
        options: ["Fe₂O₃", "FeO", "Fe₃O₄", "FeO₂"],
        answerIndex: 0,
        hints: [
          "Convert 70.0 g Fe and 30.0 g O to moles by dividing by their respective A_r values.",
          "Divide both mole amounts by the smaller value — if you get 1 : 1.5, multiply both by 2!",
        ],
        explanation:
          "{{n(Fe) = 70.0/55.85 = 1.253}} mol and {{n(O) = 30.0/16.00 = 1.875}} mol. Dividing by 1.253 gives {{Fe : O = 1.00 : 1.50}}. Multiplying both by 2 yields the simplest whole-number ratio **Fe₂O₃**.",
      },
      {
        id: "s1-particulate-matter-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "mole-ideal-gases",
        strategy: "Molecular formula from empirical formula",
        question:
          "A compound has empirical formula C₂H₄O and molar mass 132.2 g mol⁻¹ ({{A_r}}: C = 12.01, H = 1.01, O = 16.00). What is its molecular formula?",
        options: ["C₄H₈O₂", "C₅H₁₀O₃", "C₆H₁₂O₃", "C₈H₁₆O₄"],
        answerIndex: 2,
        hints: [
          "First find the empirical formula molar mass M_emp of C₂H₄O.",
          "Divide the molecular molar mass (132.2) by M_emp to obtain the integer multiplier k.",
        ],
        explanation:
          "{{M_{emp}(C_2H_4O) = 2(12.01) + 4(1.01) + 16.00 = 44.06}} g mol⁻¹. Then {{k = 132.2/44.06 = 3.00}}, so multiplying every subscript in C₂H₄O by 3 gives **C₆H₁₂O₃**.",
      },
      {
        id: "s1-particulate-matter-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Standard solution preparation",
        question:
          "What mass of solid sodium hydroxide, NaOH ({{M = 40.00}} g mol⁻¹), is required to prepare 250.0 cm³ of a 0.400 mol dm⁻³ aqueous solution?",
        options: ["1.60 g", "10.0 g", "16.0 g", "4.00 g"],
        answerIndex: 3,
        hints: [
          "Convert volume from cm³ to dm³ by dividing by 1000: 250.0 cm³ = 0.2500 dm³.",
          "Find moles n = c × V, then mass m = n × M.",
        ],
        explanation:
          "{{V = 250.0/1000 = 0.2500}} dm³, so {{n = cV = 0.400 * 0.2500 = 0.100}} mol and {{m = nM = 0.100 * 40.00 = 4.00}} g. Obtaining 16.0 g comes from forgetting to multiply by 0.250 dm³.",
      },
      {
        id: "s1-particulate-matter-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Dilution equation — water added vs total volume",
        question:
          "A student has 50.0 cm³ of 2.00 mol dm⁻³ HCl(aq). What volume of **distilled water must be added** to dilute the acid to a final concentration of 0.400 mol dm⁻³? (Assume volumes are additive.)",
        options: ["200.0 cm³", "250.0 cm³", "150.0 cm³", "100.0 cm³"],
        answerIndex: 0,
        hints: [
          "Use c₁V₁ = c₂V₂ to find the FINAL TOTAL volume V₂ first.",
          "Carefully re-read the stem: it asks for the volume of water ADDED (V₂ − V₁), not V₂!",
        ],
        explanation:
          "From {{c_1 V_1 = c_2 V_2}}, the final total volume is {{V_2 = (2.00 * 50.0)/0.400 = 250.0}} cm³. Since 50.0 cm³ of solution is already present, the volume of water to add is {{250.0 - 50.0 = 200.0}} cm³.",
      },
      {
        id: "s1-particulate-matter-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Combined gas law with Kelvin conversion",
        question:
          "A fixed sample of ideal gas occupies 2.00 dm³ at 27 °C and 100 kPa. What volume does the gas occupy when heated to 327 °C while the pressure is raised to 200 kPa? (Use {{T(K) = t(°C) + 273}}.)",
        options: ["1.00 dm³", "4.00 dm³", "2.00 dm³", "12.1 dm³"],
        answerIndex: 2,
        hints: [
          "Convert BOTH temperatures to kelvin first: T₁ = 27 + 273 = 300 K and T₂ = 327 + 273 = 600 K.",
          "Apply (p₁V₁)/T₁ = (p₂V₂)/T₂: notice both p and T double!",
        ],
        explanation:
          "{{T_1 = 300}} K and {{T_2 = 600}} K. Using {{V_2 = V_1 * (p_1/p_2) * (T_2/T_1) = 2.00 * (100/200) * (600/300) = 2.00}} dm³. Plugging in Celsius directly (327/27) wrongly yields 12.1 dm³.",
      },
      {
        id: "s1-particulate-matter-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Ideal gas equation with kPa and dm³",
        question:
          "A sealed 4.00 dm³ cylinder contains 0.500 mol of argon gas at 300 K ({{R = 8.31}} J K⁻¹ mol⁻¹). Assuming ideal behaviour, what is the pressure inside the cylinder in kPa (to 3 significant figures)?",
        options: ["125 kPa", "312 kPa", "623 kPa", "31.2 kPa"],
        answerIndex: 1,
        hints: [
          "With R = 8.31 J K⁻¹ mol⁻¹, substituting V in dm³ gives p directly in kPa!",
          "Evaluate p = (nRT)/V = (0.500 × 8.31 × 300) / 4.00.",
        ],
        explanation:
          "Using the consistent pair (kPa, dm³, K): {{p = (nRT)/V = (0.500 * 8.31 * 300)/4.00 = 1246.5/4.00 = 311.6 ≈ 312}} kPa.",
      },
      {
        id: "s1-particulate-matter-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "mole-ideal-gases",
        strategy: "Conditions for ideal gas behaviour",
        question:
          "Under which pair of conditions does a real gas behave **most closely** to an ideal gas?",
        options: [
          "High pressure and low temperature",
          "High pressure and high temperature",
          "Low pressure and low temperature",
          "Low pressure and high temperature",
        ],
        answerIndex: 3,
        hints: [
          "Ideal gas assumptions require negligible particle volume and negligible intermolecular attractions.",
          "Which pressure makes empty space huge compared to particle size, and which temperature makes kinetic energy swamp attractions?",
        ],
        explanation:
          "At **low pressure**, particles are far apart so their own volume is negligible compared with the container volume. At **high temperature**, high kinetic energy overcomes intermolecular attractions so collisions behave elastically.",
      },
      {
        id: "s1-particulate-matter-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "mole-ideal-gases",
        strategy: "Comparing real-gas deviations by IMF strength",
        question:
          "At 300 K and 5000 kPa, which of the following gases deviates **most** from ideal gas behaviour?",
        options: [
          "Ammonia, NH₃",
          "Helium, He",
          "Hydrogen, H₂",
          "Nitrogen, N₂",
        ],
        answerIndex: 0,
        hints: [
          "Real gases deviate more strongly when molecules are larger and attract each other more strongly.",
          "Which of these four molecules is polar and forms hydrogen bonds?",
        ],
        explanation:
          "NH₃ is a polar molecule capable of strong **hydrogen bonding**, producing significant intermolecular attractions that pull {{pV/(nRT)}} sharply below 1. He, H₂ and N₂ are small non-polar species with only weak London dispersion forces.",
      },
      {
        id: "s1-particulate-matter-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "particulate-nuclear-atom",
        strategy: "Choosing a separation technique",
        question:
          "Which physical separation technique is most suitable for separating a homogeneous liquid mixture of ethanol (b.p. 78 °C) and propan-1-ol (b.p. 97 °C)?",
        options: [
          "Gravity filtration through fluted filter paper",
          "Recrystallization from hot distilled water",
          "Fractional distillation using a fractionating column",
          "Evaporation to dryness in an evaporating basin",
        ],
        answerIndex: 2,
        hints: [
          "Both ethanol and propan-1-ol are miscible volatile liquids with boiling points only 19 °C apart.",
          "Which distillation apparatus provides repeated vaporization–condensation cycles for close boiling points?",
        ],
        explanation:
          "Miscible liquids with relatively close boiling points require **fractional distillation**; the fractionating column creates a temperature gradient allowing multiple vaporization–condensation cycles so the lower-boiling ethanol distils cleanly first.",
      },
      {
        id: "s1-particulate-matter-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "ionization-energy-hl",
        strategy: "Deducing group number from successive IEs",
        question:
          "The first five successive ionization energies of an element X are 578, 1817, 2745, 11 577 and 14 842 kJ mol⁻¹. Which group of the Periodic Table does element X belong to?",
        options: ["Group 2", "Group 3", "Group 14", "Group 13"],
        answerIndex: 3,
        hints: [
          "Find where the largest multiplicative jump occurs between consecutive ionization energies.",
          "3 valence electrons in a main-group (p-block) element corresponds to which IUPAC group number?",
        ],
        explanation:
          "The huge jump (4.2×) occurs between {{IE_3}} (2745) and {{IE_4}} (11 577), showing the 4th electron comes from a closer inner main shell. Element X has 3 valence electrons and belongs to **Group 13** (aluminium), NOT Group 3 (which is d-block).",
      },
      {
        id: "s1-particulate-matter-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ionization-energy-hl",
        strategy: "Single photon energy E = hf",
        question:
          "An emission line in the visible spectrum has a frequency of {{5.00 * 10^{14}}} s⁻¹. Using Planck's constant {{h = 6.63 * 10^(-34)}} J s, what is the energy of a single photon of this light?",
        options: [
          "1.33 × 10⁻⁴⁸ J",
          "3.32 × 10⁻¹⁹ J",
          "7.54 × 10⁴⁷ J",
          "3.32 × 10⁻²⁰ J",
        ],
        answerIndex: 1,
        hints: [
          "Use E = hf directly.",
          "Multiply 6.63 × 5.00 = 33.15, then combine powers of ten: 10⁻³⁴ × 10¹⁴ = 10⁻²⁰.",
        ],
        explanation:
          "{{E = hf = (6.63 * 10^(-34)) * (5.00 * 10^{14}) = 33.15 * 10^(-20) = 3.315 * 10^(-19) ≈ 3.32 * 10^(-19)}} J. Watch the standard-form shift from {{33.15 * 10^(-20)}} to {{3.32 * 10^(-19)}}!",
      },
      {
        id: "s1-particulate-matter-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "ionization-energy-hl",
        strategy: "Comparing second ionization energies across Group 1 and Group 2",
        question:
          "Why is the **second** ionization energy of sodium (4562 kJ mol⁻¹) dramatically larger than the **second** ionization energy of magnesium (1451 kJ mol⁻¹)?",
        options: [
          "The second electron of Na is removed from a closer n = 2 inner shell with less shielding",
          "Sodium has a greater nuclear charge than magnesium, pulling all electrons more strongly",
          "Magnesium's second electron is paired in a 3p orbital and repelled by another electron",
          "Sodium's first electron is removed from a 2p orbital whereas magnesium loses a 3s electron",
        ],
        answerIndex: 0,
        hints: [
          "Write the configurations of Na⁺ (1s² 2s² 2p⁶) and Mg⁺ (1s² 2s² 2p⁶ 3s¹).",
          "Which main shell is each ion losing its next electron from?",
        ],
        explanation:
          "Na⁺ already has a noble-gas neon configuration (1s² 2s² 2p⁶), so removing a second electron breaks into the **closer n = 2 shell** with less inner shielding. By contrast, Mg⁺ ([Ne] 3s¹) loses a second outer n = 3 electron.",
      },
      {
        id: "s1-particulate-matter-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "ionization-energy-hl",
        strategy: "Convergence limit and ground-state ionization",
        question:
          "Which spectral feature of hydrogen directly gives the **first ionization energy** of a ground-state hydrogen atom when substituted into {{E = hf}}?",
        options: [
          "The reddest line of the Balmer series (n = 3 → n = 2)",
          "The convergence limit of the Balmer series (n = ∞ → n = 2)",
          "The convergence limit of the Lyman series (n = ∞ → n = 1)",
          "The first line of the Lyman series (n = 2 → n = 1)",
        ],
        answerIndex: 2,
        hints: [
          "Ionization removes an electron from the GROUND STATE (n = 1) completely out of the atom (to n = ∞).",
          "Which emission series terminates at the ground state n = 1?",
        ],
        explanation:
          "First ionization removes the ground-state electron from {{n = 1}} to {{n = ∞}}, which has the exact same energy magnitude as the **convergence limit of the Lyman series** ({{n = ∞ → n = 1}}). The Balmer convergence limit measures only ionization starting from the excited {{n = 2}} state.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: HL EXTENSIONS, SPECTRA & SYNTHESIS (spread: 0:3, 1:4, 2:4, 3:4)
  // ===========================================================================
  {
    id: "s1-particulate-matter-m3",
    title: "Paper 1A · Set 3 — HL Extensions, Spectra & Integrated Problems",
    level: "HL",
    questions: [
      {
        id: "s1-particulate-matter-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "particulate-nuclear-atom",
        strategy: "Reverse relative atomic mass algebra",
        question:
          "Rubidium has a relative atomic mass of 85.47 and consists of two naturally occurring isotopes, ⁸⁵Rb and ⁸⁷Rb. What is the percentage abundance of ⁸⁵Rb?",
        options: ["23.5%", "47.0%", "53.0%", "76.5%"],
        answerIndex: 3,
        hints: [
          "Let the fraction of ⁸⁵Rb be x and ⁸⁷Rb be (1 − x), then solve 85x + 87(1 − x) = 85.47.",
          "Sanity check: 85.47 is much closer to 85 than to 87, so ⁸⁵Rb must be well over 50%.",
        ],
        explanation:
          "{{85x + 87(1 - x) = 85.47}} simplifies to {{87 - 2x = 85.47}}, giving {{2x = 1.53}} and {{x = 0.765}} → **76.5%** ⁸⁵Rb (and 23.5% ⁸⁷Rb).",
      },
      {
        id: "s1-particulate-matter-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "particulate-nuclear-atom",
        strategy: "Molecular isotopologue peaks in mass spectra",
        question:
          "Naturally occurring bromine consists of approximately 50% ⁷⁹Br and 50% ⁸¹Br. What molecular ion (Br₂⁺) peaks and relative peak-height ratio appear in the mass spectrum of gaseous Br₂?",
        options: [
          "m/z = 158 and 162 in a 1 : 1 ratio",
          "m/z = 158, 160 and 162 in a 1 : 2 : 1 ratio",
          "m/z = 158, 160 and 162 in a 1 : 1 : 1 ratio",
          "m/z = 158, 160 and 162 in a 9 : 6 : 1 ratio",
        ],
        answerIndex: 1,
        hints: [
          "List all four equally probable ordered pairs of isotopes in Br—Br: (79,79), (79,81), (81,79), (81,81).",
          "Notice two distinct pairings sum to mass 160!",
        ],
        explanation:
          "With 50/50 probabilities, the four molecular combinations are ⁷⁹Br—⁷⁹Br (158, probability 1/4), ⁷⁹Br—⁸¹Br and ⁸¹Br—⁷⁹Br (both 160, combined probability 2/4), and ⁸¹Br—⁸¹Br (162, probability 1/4), producing peaks at **158, 160, 162 in a 1 : 2 : 1 ratio**. (9 : 6 : 1 belongs to Cl₂ because ³⁵Cl : ³⁷Cl is 3 : 1.)",
      },
      {
        id: "s1-particulate-matter-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "electron-configurations",
        strategy: "Isoelectronic species vs equal electron counts",
        question:
          "Which pair of chemical species has the **exact same ground-state electron configuration**?",
        options: [
          "Cr (Z = 24) and Fe²⁺ (Z = 26)",
          "V (Z = 23) and Mn²⁺ (Z = 25)",
          "S²⁻ (Z = 16) and Ca²⁺ (Z = 20)",
          "Cu²⁺ (Z = 29) and Zn²⁺ (Z = 30)",
        ],
        answerIndex: 2,
        hints: [
          "Same total number of electrons does NOT guarantee identical orbital occupation in the 3d block!",
          "Check Cr ([Ar] 3d⁵ 4s¹) vs Fe²⁺ ([Ar] 3d⁶) carefully — then check S²⁻ and Ca²⁺.",
        ],
        explanation:
          "Both S²⁻ ({{16 + 2 = 18}} e⁻) and Ca²⁺ ({{20 - 2 = 18}} e⁻) have the exact noble-gas configuration **1s² 2s² 2p⁶ 3s² 3p⁶** ([Ar]). Although Cr and Fe²⁺ both contain 24 electrons, Cr is [Ar] 3d⁵ 4s¹ whereas Fe²⁺ is [Ar] 3d⁶; likewise V ([Ar] 3d³ 4s²) differs from Mn²⁺ ([Ar] 3d⁵).",
      },
      {
        id: "s1-particulate-matter-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "electron-configurations",
        strategy: "Comparing ΔE and wavelength across hydrogen series",
        question:
          "Which electronic transition in a hydrogen atom emits a photon with the **shortest wavelength**?",
        options: [
          "n = 2 → n = 1",
          "n = 6 → n = 2",
          "n = 4 → n = 2",
          "n = 5 → n = 3",
        ],
        answerIndex: 0,
        hints: [
          "Shortest wavelength corresponds to the LARGEST energy change ΔE = hc/λ.",
          "Remember that the energy gap between n = 1 and n = 2 alone is larger than the entire gap from n = 2 to n = ∞!",
        ],
        explanation:
          "Shortest wavelength means highest photon energy ({{ΔE = hc/λ}}). Because energy levels converge steeply as {{n}} rises, the Lyman transition {{n = 2 → n = 1}} releases 75% of hydrogen's ionization energy (UV photon) — over three times the energy of {{n = 6 → n = 2}} (visible violet).",
      },
      {
        id: "s1-particulate-matter-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ionization-energy-hl",
        strategy: "Converting wavelength to molar photon energy",
        question:
          "What is the energy, in kJ mol⁻¹ (to 3 significant figures), of photons with wavelength 400 nm? (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{N_A = 6.02 * 10^{23}}} mol⁻¹.)",
        options: [
          "4.97 × 10⁻¹⁹ kJ mol⁻¹",
          "150 kJ mol⁻¹",
          "299 kJ mol⁻¹",
          "2.99 × 10⁵ kJ mol⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Convert 400 nm to metres (4.00 × 10⁻⁷ m) and compute E = hc/λ in joules per photon.",
          "Multiply by N_A to convert to J mol⁻¹, then divide by 1000 to convert to kJ mol⁻¹.",
        ],
        explanation:
          "{{E_{photon} = (6.63 * 10^(-34) * 3.00 * 10^8)/(4.00 * 10^(-7)) = 4.973 * 10^(-19)}} J. Per mole: {{4.973 * 10^(-19) * 6.02 * 10^{23} = 2.993 * 10^5}} J mol⁻¹ = **299 kJ mol⁻¹**. Forgetting to divide by 1000 gives {{2.99 * 10^5}}.",
      },
      {
        id: "s1-particulate-matter-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ionization-energy-hl",
        strategy: "Inverse convergence-limit calculation (IE₁ → λ)",
        question:
          "The first ionization energy of lithium is 520 kJ mol⁻¹. What is the maximum wavelength of light (in nm, to 3 significant figures) capable of ionizing a gaseous ground-state lithium atom? (Use {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹, {{N_A = 6.02 * 10^{23}}} mol⁻¹.)",
        options: ["461 nm", "115 nm", "312 nm", "230 nm"],
        answerIndex: 3,
        hints: [
          "Convert 520 kJ mol⁻¹ into joules for ONE atom: E = (520 × 1000) / (6.02 × 10²³).",
          "Rearrange E = hc/λ to λ = hc/E, then convert metres to nm (× 10⁹).",
        ],
        explanation:
          "Energy per atom: {{E = (5.20 * 10^5)/(6.02 * 10^{23}) = 8.638 * 10^(-19)}} J. Wavelength: {{λ = (hc)/E = (6.63 * 10^(-34) * 3.00 * 10^8)/(8.638 * 10^(-19)) = 2.303 * 10^(-7)}} m = **230 nm** (ultraviolet).",
      },
      {
        id: "s1-particulate-matter-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "ionization-energy-hl",
        strategy: "Period 3 ionization energy anomalies",
        question:
          "Which sequence arranges the four Period 3 elements Mg, Al, P and S in order of **increasing** first ionization energy (lowest first)?",
        options: [
          "Mg < Al < P < S",
          "Al < Mg < S < P",
          "Al < Mg < P < S",
          "Mg < Al < S < P",
        ],
        answerIndex: 1,
        hints: [
          "Across Period 3, first IE generally rises, EXCEPT for the two classic dips at Group 2 → 13 and Group 15 → 16.",
          "Apply both dips: Al dips below Mg (3p vs 3s), and S dips below P (paired 3p⁴ repulsion).",
        ],
        explanation:
          "Al (578 kJ mol⁻¹) is lower than Mg (738 kJ mol⁻¹) because its outer electron sits in the higher-energy 3p sublevel. S (1000 kJ mol⁻¹) is lower than P (1012 kJ mol⁻¹) due to electron-pair repulsion in a doubly occupied 3p orbital. Thus **Al < Mg < S < P**.",
      },
      {
        id: "s1-particulate-matter-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "ionization-energy-hl",
        strategy: "Valence configuration from successive IEs",
        question:
          "The first six successive ionization energies of a Period 3 element Q are 1012, 1907, 2914, 4964, 6274 and 21 267 kJ mol⁻¹. What is the valence-shell electron configuration of a ground-state atom of Q?",
        options: [
          "3s² 3p³",
          "3s² 3p⁴",
          "3s² 3p²",
          "2s² 2p³",
        ],
        answerIndex: 0,
        hints: [
          "Identify where the big jump into an inner main shell occurs: between IE₅ (6274) and IE₆ (21 267).",
          "5 valence electrons in Period 3 (n = 3) fills 3s² and how many 3p electrons?",
        ],
        explanation:
          "The huge jump (3.4×) between {{IE_5}} and {{IE_6}} shows Q has **5 valence electrons** (Group 15). Since Q is in Period 3 (phosphorus), its valence-shell configuration is **3s² 3p³**.",
      },
      {
        id: "s1-particulate-matter-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "ionization-energy-hl",
        strategy: "Subshell steps inside successive ionization graphs",
        question:
          "In a plot of {{log_{10}(IE)}} against ionization number for aluminium (1s² 2s² 2p⁶ 3s² 3p¹), there is a massive jump between {{IE_3}} and {{IE_4}} AND a noticeable smaller step between {{IE_1}} and {{IE_2}}. What causes the smaller step between {{IE_1}} and {{IE_2}}?",
        options: [
          "The second electron is removed from the closer n = 2 main shell with much less shielding",
          "The second electron is paired in a 3p orbital and repels the remaining valence electrons",
          "The nuclear charge of aluminium increases by one unit after the first electron is lost",
          "The first electron is lost from the 3p sublevel whereas the second is lost from the lower-energy 3s sublevel",
        ],
        answerIndex: 3,
        hints: [
          "Which specific sublevel holds the 1st electron removed from Al, and which sublevel holds the 2nd?",
          "Does moving from 3p to 3s change the main shell n = 3?",
        ],
        explanation:
          "For Al (3s² 3p¹), {{IE_1}} removes the single higher-energy 3p electron, whereas {{IE_2}} must remove an electron from the closer, lower-energy **3s** sublevel within the same {{n = 3}} shell — producing a distinct subshell step smaller than the main-shell jump into {{n = 2}} at {{IE_4}}.",
      },
      {
        id: "s1-particulate-matter-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Ion concentration in aqueous ionic solutions",
        question:
          "A student dissolves 0.150 mol of iron(III) chloride, FeCl₃, in distilled water to produce 300.0 cm³ of solution. What is the molar concentration of **chloride ions, Cl⁻(aq)**, in this solution?",
        options: [
          "0.500 mol dm⁻³",
          "1.50 mol dm⁻³",
          "0.450 mol dm⁻³",
          "3.00 mol dm⁻³",
        ],
        answerIndex: 1,
        hints: [
          "First find the concentration of FeCl₃: c = n/V with V = 0.3000 dm³.",
          "Each mole of FeCl₃ dissociates completely to release 3 moles of Cl⁻ ions.",
        ],
        explanation:
          "{{[FeCl_3] = 0.150/0.3000 = 0.500}} mol dm⁻³. Because {{FeCl_3(s) → Fe^{3+}(aq) + 3Cl^-(aq)}}, {{[Cl^-] = 3 * 0.500 = 1.50}} mol dm⁻³. Forgetting the 3× stoichiometry gives 0.500 mol dm⁻³.",
      },
      {
        id: "s1-particulate-matter-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "mole-ideal-gases",
        strategy: "Combustion analysis empirical formula",
        question:
          "Complete combustion of a gaseous hydrocarbon produces 0.400 mol of CO₂ and 0.500 mol of H₂O. What is the empirical formula of the hydrocarbon?",
        options: ["C₄H₅", "CH₂", "C₂H₅", "C₄H₁₀"],
        answerIndex: 2,
        hints: [
          "Each CO₂ molecule contains 1 C atom, whereas each H₂O molecule contains TWO H atoms!",
          "Find the mole ratio of carbon to hydrogen and simplify to the smallest whole numbers.",
        ],
        explanation:
          "There are {{0.400}} mol of carbon atoms and {{2 * 0.500 = 1.000}} mol of hydrogen atoms. The ratio {{0.400 : 1.000 = 1 : 2.5 = 2 : 5}}, giving empirical formula **C₂H₅** (note that C₄H₁₀ is not simplified to the empirical ratio, and C₄H₅ forgets the factor of 2 in H₂O).",
      },
      {
        id: "s1-particulate-matter-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "mole-ideal-gases",
        strategy: "Molar mass from gas density at STP",
        question:
          "An unknown ideal gas has a density of 1.94 g dm⁻³ at IB STP (273 K, 100 kPa; {{V_m = 22.7}} dm³ mol⁻¹). What is its molar mass to 3 significant figures?",
        options: ["11.7 g mol⁻¹", "44.0 g mol⁻¹", "43.5 g mol⁻¹", "22.0 g mol⁻¹"],
        answerIndex: 1,
        hints: [
          "One mole of any ideal gas at STP occupies 22.7 dm³.",
          "Multiply the mass of 1 dm³ (density) by 22.7 dm³ mol⁻¹ to obtain the mass of 1 mole!",
        ],
        explanation:
          "{{M = ρ * V_m = 1.94 * 22.7 = 44.04 ≈ 44.0}} g mol⁻¹ (consistent with CO₂ or N₂O). Using 22.4 dm³ mol⁻¹ gives the wrong value 43.5 g mol⁻¹.",
      },
      {
        id: "s1-particulate-matter-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "mole-ideal-gases",
        strategy: "Interpreting compressibility factor pV/(nRT) curves",
        question:
          "At 300 K, the ratio {{(pV)/(nRT)}} for real CO₂ gas first drops below 1.0 at moderate pressures and then climbs steeply above 1.0 at very high pressures. What causes these two opposing deviations?",
        options: [
          "Intermolecular attractions dominate at moderate pressure; finite molecular volume dominates at very high pressure",
          "Finite molecular volume dominates at moderate pressure; intermolecular attractions dominate at very high pressure",
          "CO₂ molecules dissociate into atoms at moderate pressure and recombine into dimers at very high pressure",
          "Average kinetic energy drops at moderate pressure and increases sharply above ideal values at very high pressure",
        ],
        answerIndex: 0,
        hints: [
          "Attractions between molecules pull them slightly back from the container walls, reducing measured p.",
          "At extreme compression, molecules occupy a significant fraction of V, making the gas harder to compress.",
        ],
        explanation:
          "At moderate pressures, **intermolecular attractions** pull approaching molecules inward, lowering wall collision pressure so {{pV/(nRT) < 1}}. At very high pressures, the **finite volume of the molecules** leaves less free volume, making the gas less compressible so {{pV/(nRT) > 1}}.",
      },
      {
        id: "s1-particulate-matter-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "ionization-energy-hl",
        strategy: "Scaling convergence limit frequency to molar IE",
        question:
          "The Lyman convergence-limit frequency of the one-electron ion He⁺ is exactly four times that of hydrogen ({{f_{H} = 3.29 * 10^{15}}} s⁻¹). Using {{h = 6.63 * 10^(-34)}} J s and {{N_A = 6.02 * 10^{23}}} mol⁻¹, what is the second ionization energy of helium ({{He^+(g) → He^{2+}(g) + e^-}}) to 3 significant figures?",
        options: [
          "1310 kJ mol⁻¹",
          "2630 kJ mol⁻¹",
          "3940 kJ mol⁻¹",
          "5250 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Calculate f(He⁺) = 4 × 3.29 × 10¹⁵ = 1.316 × 10¹⁶ s⁻¹.",
          "Compute IE₂ = (h × f × N_A) / 1000 (or simply multiply H's IE₁ ≈ 1313 kJ mol⁻¹ by 4).",
        ],
        explanation:
          "Since {{IE ∝ f_{limit}}}, quadrupling the convergence frequency quadruples the ionization energy: {{IE_2(He) = 4 * (6.63 * 10^(-34) * 3.29 * 10^{15} * 6.02 * 10^{23})/1000 = 5252 ≈ 5250}} kJ mol⁻¹ (matching the IB Data Booklet value 5251 kJ mol⁻¹!).",
      },
      {
        id: "s1-particulate-matter-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "mole-ideal-gases",
        strategy: "Water of crystallization stoichiometry",
        question:
          "A 5.00 g sample of hydrated magnesium sulfate, MgSO₄·xH₂O, is heated to constant mass, leaving 2.44 g of anhydrous MgSO₄ ({{M(MgSO_4) = 120.38}} g mol⁻¹, {{M(H_2O) = 18.02}} g mol⁻¹). What is the integer value of {{x}}?",
        options: ["5", "6", "7", "8"],
        answerIndex: 2,
        hints: [
          "Find the mass of water lost: m(H₂O) = 5.00 − 2.44 = 2.56 g.",
          "Convert both 2.44 g MgSO₄ and 2.56 g H₂O to moles, then compute the ratio n(H₂O) / n(MgSO₄).",
        ],
        explanation:
          "{{n(MgSO_4) = 2.44/120.38 = 0.02027}} mol and {{n(H_2O) = (5.00 - 2.44)/18.02 = 2.56/18.02 = 0.1421}} mol. Dividing gives {{x = 0.1421/0.02027 = 7.01 ≈ 7}} (Epsom salt, MgSO₄·7H₂O).",
      },
    ],
  },
];
