import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 questions: 4 MCQs balanced 0,1,2,3 + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "s1-particulate-matter-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "particulate-nuclear-atom",
      strategy: "Celsius to Kelvin conversion",
      question:
        "Pure water boils at 100.0 °C at 101.3 kPa. What is this boiling point on the absolute (kelvin) temperature scale using {{T(K) = t(°C) + 273.15}}?",
      options: ["173.15 K", "373.15 K", "273.15 K", "373.00 K"],
      answerIndex: 1,
      hints: [
        "Add 273.15 to the Celsius temperature.",
        "Evaluate 100.0 + 273.15 carefully.",
      ],
      explanation:
        "{{T = 100.0 + 273.15 = 373.15}} K. Subtracting 273.15 instead of adding gives an invalid lower temperature, and 273.15 K is the freezing point (0 °C).",
    },
    {
      id: "s1-particulate-matter-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "particulate-nuclear-atom",
      strategy: "Counting nucleons from nuclear notation",
      question:
        "Deduce the number of **neutrons** in a single bromide ion represented by **⁸¹₃₅Br⁻**.",
      answer: { type: "number", value: 46, tolerance: 0, display: "46" },
      traps: [
        { spec: { type: "number", value: 36, tolerance: 0 }, feedback: "36 is the number of electrons (35 + 1); neutrons equal mass number A minus proton number Z." },
        { spec: { type: "number", value: 35, tolerance: 0 }, feedback: "35 is the number of protons (Z); subtract Z from mass number A = 81." },
      ],
      hints: [
        "Does gaining an electron to form a 1− ion change the number of neutrons in the nucleus?",
        "Compute neutrons = A − Z = 81 − 35.",
      ],
      solution: [
        "Mass number {{A = 81}} and atomic number {{Z = 35}}.",
        "Neutrons = {{A - Z = 81 - 35 = 46}} (ionic charge only affects electrons, never the nucleus).",
      ],
    },
    {
      id: "s1-particulate-matter-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "particulate-nuclear-atom",
      strategy: "Three-isotope weighted average A_r",
      question:
        "Naturally occurring neon contains 90.48% ²⁰Ne, 0.27% ²¹Ne and 9.25% ²²Ne. Calculate the relative atomic mass ({{A_r}}) of neon to **2 decimal places**.",
      answer: { type: "number", value: 20.19, tolerance: 0.02, display: "20.19" },
      traps: [
        { spec: { type: "number", value: 21, tolerance: 0.05 }, feedback: "21 is the unweighted mean — weight each isotope mass by its percentage abundance!" },
      ],
      hints: [
        "Multiply each isotope mass number by its percentage abundance and sum all three products.",
        "Divide the total by 100 and round to 2 decimal places.",
      ],
      solution: [
        "{{A_r = ((20 * 90.48) + (21 * 0.27) + (22 * 9.25))/100}}.",
        "{{A_r = (1809.60 + 5.67 + 203.50)/100 = 2018.77/100 = 20.1877 ≈ 20.19}}.",
      ],
    },
    {
      id: "s1-particulate-matter-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "electron-configurations",
      strategy: "Sublevel orbital shapes and degeneracy",
      question:
        "Which atomic sublevel consists of **three degenerate dumbbell-shaped orbitals** oriented along mutually perpendicular axes?",
      options: [
        "The s sublevel",
        "The d sublevel",
        "The f sublevel",
        "The p sublevel",
      ],
      answerIndex: 3,
      hints: [
        "Recall the orbital counts per sublevel: s has 1, p has 3, d has 5, f has 7.",
        "The three orbitals are labelled along the x, y and z axes.",
      ],
      explanation:
        "The **p sublevel** consists of three degenerate dumbbell-shaped orbitals ({{p_x, p_y, p_z}}), holding up to 6 electrons in total. An s sublevel has 1 spherical orbital, while d has 5 orbitals and f has 7 orbitals.",
    },
    {
      id: "s1-particulate-matter-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "electron-configurations",
      strategy: "Chromium Aufbau exception & Hund's rule",
      question:
        "State the total number of **unpaired electrons** in a ground-state neutral chromium atom, Cr ({{Z = 24}}).",
      answer: { type: "number", value: 6, tolerance: 0, display: "6" },
      traps: [
        { spec: { type: "number", value: 4, tolerance: 0 }, feedback: "4 assumes [Ar] 3d⁴ 4s² — remember chromium is an Aufbau exception: [Ar] 3d⁵ 4s¹!" },
        { spec: { type: "number", value: 5, tolerance: 0 }, feedback: "Don't forget the single unpaired electron sitting in the 4s¹ orbital in addition to the five in 3d⁵!" },
      ],
      hints: [
        "Chromium (Z = 24) is one of the two IB configuration exceptions.",
        "Write its condensed configuration [Ar] 3d⁵ 4s¹ and count unpaired electrons in BOTH 3d and 4s.",
      ],
      solution: [
        "Neutral Cr ({{Z = 24}}) has ground-state configuration **[Ar] 3d⁵ 4s¹**.",
        "By Hund's rule, all five 3d orbitals hold one unpaired electron (5) plus one unpaired electron in 4s¹ (1) = **6** unpaired electrons.",
      ],
    },
    {
      id: "s1-particulate-matter-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "ionization-energy-hl",
      strategy: "Period 2 ionization energy anomalies",
      question:
        "Which Period 2 element has a **lower** first ionization energy than the element immediately preceding it because of electron–electron repulsion between two electrons paired in the same 2p orbital?",
      options: ["Oxygen, O", "Boron, B", "Nitrogen, N", "Fluorine, F"],
      answerIndex: 0,
      hints: [
        "There are two dips across Period 2: Be → B (sublevel change) and N → O (orbital pairing).",
        "Which element is the first in Period 2 to pair two electrons inside a single 2p orbital (2p⁴)?",
      ],
      explanation:
        "Oxygen (2p⁴) places two electrons into the same 2p orbital, causing extra electron–electron repulsion that lowers {{IE_1}} below nitrogen (2p³). Boron's dip below beryllium is caused by entering the higher-energy 2p sublevel, not orbital pairing.",
    },
    {
      id: "s1-particulate-matter-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "ionization-energy-hl",
      strategy: "Converting photon frequency to molar energy",
      question:
        "The first line of the Lyman series of hydrogen has frequency {{2.47 * 10^{15}}} s⁻¹. Using {{h = 6.63 * 10^(-34)}} J s and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the molar energy of this transition in **kJ mol⁻¹** to **3 significant figures**.",
      answer: { type: "number", value: 986, tolerance: 5, display: "986 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 986000, tolerance: 5000 }, feedback: "That value is in J mol⁻¹ — divide by 1000 to convert to kJ mol⁻¹!" },
      ],
      hints: [
        "First find the energy of one photon: E = hf (in joules).",
        "Multiply by Avogadro's constant N_A and divide by 1000 to obtain kJ mol⁻¹.",
      ],
      solution: [
        "Single photon: {{E = hf = (6.63 * 10^(-34)) * (2.47 * 10^{15}) = 1.6376 * 10^(-18)}} J.",
        "Molar energy: {{E_{mol} = (1.6376 * 10^(-18) * 6.02 * 10^{23})/1000 = 985.8 ≈ 986}} kJ mol⁻¹.",
      ],
    },
    {
      id: "s1-particulate-matter-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "mole-ideal-gases",
      strategy: "Moles from mass n = m/M",
      question:
        "Calculate the amount in moles (to **3 significant figures**) present in 11.0 g of carbon dioxide, CO₂ ({{M = 44.01}} g mol⁻¹).",
      answer: { type: "number", value: 0.25, tolerance: 0.005, display: "0.250 mol" },
      traps: [
        { spec: { type: "number", value: 4, tolerance: 0.05 }, feedback: "You divided M by m — remember n = m / M!" },
      ],
      hints: [
        "Use n = m / M.",
        "Evaluate 11.0 / 44.01 to 3 significant figures.",
      ],
      solution: [
        "{{n = m/M = 11.0/44.01 = 0.2499 ≈ 0.250}} mol.",
      ],
    },
    {
      id: "s1-particulate-matter-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "mole-ideal-gases",
      strategy: "Ideal gas volume at IB STP",
      question:
        "What volume (to 3 significant figures) does 0.500 mol of oxygen gas, O₂(g), occupy at IB STP (273 K, 100 kPa; {{V_m = 22.7}} dm³ mol⁻¹)?",
      options: ["11.2 dm³", "45.4 dm³", "11.4 dm³", "22.7 dm³"],
      answerIndex: 2,
      hints: [
        "Multiply moles n by molar volume V_m = 22.7 dm³ mol⁻¹.",
        "0.500 × 22.7 = 11.35 dm³, which rounds to what value at 3 s.f.?",
      ],
      explanation:
        "{{V = n * V_m = 0.500 * 22.7 = 11.35 ≈ 11.4}} dm³. Using the obsolete 22.4 dm³ mol⁻¹ value gives 11.2 dm³, and dividing instead of multiplying gives 45.4 dm³.",
    },
    {
      id: "s1-particulate-matter-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "mole-ideal-gases",
      strategy: "Dilution equation c₁V₁ = c₂V₂",
      question:
        "A 40.0 cm³ portion of 1.50 mol dm⁻³ NaCl(aq) is diluted with distilled water to a final total volume of 200.0 cm³. Calculate the final concentration in **mol dm⁻³**.",
      answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.300 mol dm⁻³" },
      traps: [
        { spec: { type: "number", value: 7.5, tolerance: 0.05 }, feedback: "Diluting a solution MUST lower its concentration — check your rearrangement of c₁V₁ = c₂V₂." },
      ],
      hints: [
        "Solute moles remain constant: c₁V₁ = c₂V₂.",
        "Solve c₂ = (1.50 × 40.0) / 200.0.",
      ],
      solution: [
        "Since volume increases by a factor of {{200.0/40.0 = 5}}, concentration drops by a factor of 5.",
        "{{c_2 = (c_1 V_1)/V_2 = (1.50 * 40.0)/200.0 = 0.300}} mol dm⁻³.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions each = 30 questions)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: SL CORE CALCULATIONS & STRUCTURED RESPONSES (15 questions)
    // -------------------------------------------------------------------------
    {
      id: "s1-particulate-matter-p1",
      title: "Paper 2 · Set 1 — SL Particulate Matter, Spectra & Stoichiometry",
      level: "SL",
      questions: [
        {
          id: "s1-particulate-matter-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "particulate-nuclear-atom",
          strategy: "Electron count of anions",
          question:
            "State the number of **electrons** present in a single sulfide ion, **³²₁₆S²⁻**.",
          answer: { type: "number", value: 18, tolerance: 0, display: "18" },
          traps: [
            { spec: { type: "number", value: 14, tolerance: 0 }, feedback: "A 2− anion has GAINED 2 electrons (16 + 2 = 18), not lost 2!" },
            { spec: { type: "number", value: 16, tolerance: 0 }, feedback: "16 is the electron count of a neutral sulfur atom; account for the 2− charge." },
          ],
          hints: [
            "A neutral sulfur atom (Z = 16) has 16 electrons.",
            "Each negative charge represents one extra gained electron.",
          ],
          solution: [
            "Sulfur has {{Z = 16}} protons; a 2− charge means 2 additional electrons: {{16 + 2 = 18}} electrons.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "particulate-nuclear-atom",
          strategy: "A_r from non-percentage peak heights",
          question:
            "A mass spectrum of magnesium records relative peak heights (not percentages) of **100.0** at m/z = 24, **12.7** at m/z = 25, and **14.0** at m/z = 26. Calculate the relative atomic mass ({{A_r}}) of magnesium to **2 decimal places**.",
          answer: { type: "number", value: 24.32, tolerance: 0.02, display: "24.32" },
          traps: [
            { spec: { type: "number", value: 30.82, tolerance: 0.05 }, feedback: "You divided by 100 instead of the total sum of peak heights (100.0 + 12.7 + 14.0 = 126.7)!" },
          ],
          hints: [
            "Check whether the three peak heights sum to 100 — they do NOT! Sum them first.",
            "Divide [(24 × 100.0) + (25 × 12.7) + (26 × 14.0)] by total height (126.7).",
          ],
          solution: [
            "Total relative peak height = {{100.0 + 12.7 + 14.0 = 126.7}}.",
            "Weighted sum = {{2400.0 + 317.5 + 364.0 = 3081.5}}.",
            "{{A_r = 3081.5/126.7 = 24.321 ≈ 24.32}}.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "particulate-nuclear-atom",
          strategy: "Cooling curve energy transformations",
          marks: 3,
          question:
            "When liquid stearic acid cools in a room-temperature water bath, its temperature–time graph shows a flat horizontal section at 69.3 °C as it turns into a solid. Explain why the temperature remains steady during this change of state.",
          modelAnswer:
            "Temperature is proportional to the average kinetic energy of the molecules, so a steady temperature means the average kinetic energy remains unchanged while freezing occurs. As the liquid freezes into a solid, new intermolecular attractions form, releasing potential energy as thermal energy to the surroundings. This released energy compensates for heat lost to the water bath until solidification is complete.",
          markScheme: [
            {
              point: "Links constant temperature to constant average kinetic energy of the particles.",
              keywords: ["average kinetic energy", "kinetic energy remains", "kinetic energy constant"],
            },
            {
              point: "States that intermolecular attractions/bonds form during freezing, releasing potential energy.",
              keywords: ["potential energy", "intermolecular", "attractions form"],
            },
            {
              point: "Explains that the energy released balances the heat lost to the surroundings until all liquid has solidified.",
              keywords: ["balances", "compensates", "surroundings", "solidification is complete"],
            },
          ],
          hints: [
            "Connect temperature directly to average kinetic energy.",
            "What happens to potential energy when particles lock into a solid lattice and form intermolecular attractions?",
            "Why doesn't the sample cool below 69.3 °C until all the liquid has frozen?",
          ],
          commonError:
            "Writing 'heat is no longer being lost to the surroundings' — the warm acid is still losing heat to the cooler bath, but latent heat released by bond formation replaces it!",
        },
        {
          id: "s1-particulate-matter-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "particulate-nuclear-atom",
          strategy: "Reverse A_r isotopic abundance",
          question:
            "Naturally occurring lithium ({{A_r = 6.94}}) consists of two isotopes, ⁶Li and ⁷Li. Calculate the percentage abundance of **⁷Li** to **1 decimal place**.",
          answer: { type: "number", value: 94.0, tolerance: 0.2, display: "94.0%" },
          traps: [
            { spec: { type: "number", value: 6.0, tolerance: 0.2 }, feedback: "6.0% is the abundance of ⁶Li — re-read carefully: the question asks for ⁷Li!" },
          ],
          hints: [
            "Let x be the fractional abundance of ⁷Li and (1 − x) be the fractional abundance of ⁶Li.",
            "Solve 7x + 6(1 − x) = 6.94 and convert x to a percentage.",
          ],
          solution: [
            "{{7x + 6(1 - x) = 6.94}} gives {{6 + x = 6.94}}, so {{x = 0.94}}.",
            "Percentage abundance of ⁷Li = **94.0%** (sanity check: 6.94 is very close to 7).",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q05",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "electron-configurations",
          strategy: "Shell capacity 2n²",
          question:
            "Calculate the maximum total number of electrons that can occupy the **n = 4** main energy level.",
          answer: { type: "number", value: 32, tolerance: 0, display: "32" },
          traps: [
            { spec: { type: "number", value: 16, tolerance: 0 }, feedback: "16 is the number of orbitals (n²); multiply by 2 electrons per orbital to get 2n² = 32." },
          ],
          hints: [
            "Use the shell capacity rule 2n².",
            "Check by summing sublevel capacities: 4s(2) + 4p(6) + 4d(10) + 4f(14).",
          ],
          solution: [
            "Maximum electrons = {{2n^2 = 2(4)^2 = 2 * 16 = 32}} (2 + 6 + 10 + 14 = 32).",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "electron-configurations",
          strategy: "4s-first ionization of d-block metals",
          question:
            "State the number of electrons occupying the **3d sublevel** in a ground-state nickel(II) ion, Ni²⁺ ({{Z = 28}}).",
          answer: { type: "number", value: 8, tolerance: 0, display: "8" },
          traps: [
            { spec: { type: "number", value: 6, tolerance: 0 }, feedback: "Never remove 3d electrons before 4s! Neutral Ni is [Ar] 3d⁸ 4s², so losing 2 electrons removes 4s² and leaves 3d⁸." },
          ],
          hints: [
            "Write neutral Ni (Z = 28) first: [Ar] 3d⁸ 4s².",
            "Which sublevel loses electrons FIRST when forming a transition-metal cation?",
          ],
          solution: [
            "Neutral Ni ({{Z = 28}}) is [Ar] 3d⁸ 4s².",
            "Removing 2 electrons from 4s first gives Ni²⁺ = [Ar] 3d⁸ → **8** electrons in 3d.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "electron-configurations",
          strategy: "Interpreting hydrogen emission spectra",
          marks: 4,
          question:
            "Explain how the hydrogen emission spectrum provides evidence for atomic structure, why adjacent lines in the Balmer series become closer together toward the violet end, and how the Balmer series differs from the Lyman series.",
          modelAnswer:
            "Because the hydrogen emission spectrum displays only discrete coloured lines at specific wavelengths rather than a continuous rainbow, electron energies inside the atom must be quantized into fixed energy levels. Each bright line arises when an excited electron falls from a higher energy level to a lower one, emitting a photon of exact energy ΔE = hf. Toward the higher-frequency violet end, lines converge because adjacent main shells lie progressively closer together in energy as n increases toward infinity. The Balmer series consists of visible-light transitions terminating at n = 2, whereas the Lyman series consists of higher-energy ultraviolet transitions terminating at the ground state n = 1.",
          markScheme: [
            {
              point: "Links discrete/specific wavelengths (not continuous) to quantized/fixed electron energy levels.",
              keywords: ["quantized", "discrete", "fixed energy levels"],
            },
            {
              point: "States that photons are emitted when excited electrons fall from higher to lower energy levels.",
              keywords: ["falls", "higher to lower", "emits a photon", "emitting a photon"],
            },
            {
              point: "Explains convergence toward high frequency/short wavelength because energy levels get closer together as n increases.",
              keywords: ["closer together", "converge", "n increases"],
            },
            {
              point: "Distinguishes Balmer (transitions to n = 2, visible) from Lyman (transitions to n = 1, ultraviolet).",
              keywords: ["n = 2", "n = 1", "ultraviolet"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Basic recall of electron transitions or naming of spectral regions, but lacks a clear causal link between discrete lines and quantization or misstates the convergence direction.",
              indicators: ["Mentions electrons dropping between shells", "Incomplete or inaccurate distinction between Balmer and Lyman"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear, chemically accurate explanation linking discrete lines to quantized levels, shell-spacing decrease to high-frequency convergence, and exact final shells/EM regions of Balmer vs Lyman.",
              indicators: ["Explains quantized levels via discrete ΔE = hf", "Correctly explains high-frequency convergence", "Correctly states Balmer (n = 2, visible) vs Lyman (n = 1, UV)"],
            },
          ],
          hints: [
            "Start with what discrete lines (vs a continuous spectrum) prove about electron energies.",
            "Explain the physical origin of each emitted line (electron falling from higher to lower level).",
            "Explain why shell spacing shrinks as n increases, and contrast destination shell + EM region of Balmer vs Lyman.",
          ],
          commonError:
            "Stating that lines converge at the red (long-wavelength) end, or claiming emission occurs when electrons jump UP to higher shells.",
        },
        {
          id: "s1-particulate-matter-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Mass from moles m = nM",
          question:
            "Calculate the mass in **grams** (to **3 significant figures**) of 0.350 mol of calcium carbonate, CaCO₃ ({{A_r}}: Ca = 40.08, C = 12.01, O = 16.00).",
          answer: { type: "number", value: 35.0, tolerance: 0.2, display: "35.0 g" },
          traps: [
            { spec: { type: "number", value: 286, tolerance: 2 }, feedback: "You divided M by n — remember m = n × M!" },
          ],
          hints: [
            "First find the molar mass M(CaCO₃) = 40.08 + 12.01 + 3(16.00).",
            "Multiply M by 0.350 mol and round to 3 significant figures.",
          ],
          solution: [
            "{{M(CaCO_3) = 40.08 + 12.01 + 3(16.00) = 100.09}} g mol⁻¹.",
            "{{m = nM = 0.350 * 100.09 = 35.03 ≈ 35.0}} g.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Total moles of ions in solution",
          question:
            "Calculate the **total amount in moles of ions** (Na⁺ and CO₃²⁻ combined) dissolved in 250.0 cm³ of 0.400 mol dm⁻³ Na₂CO₃(aq).",
          answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.300 mol" },
          traps: [
            { spec: { type: "number", value: 0.1, tolerance: 0.005 }, feedback: "0.100 mol is the moles of Na₂CO₃ formula units — each dissociates into THREE ions (2 Na⁺ + 1 CO₃²⁻)!" },
            { spec: { type: "number", value: 0.2, tolerance: 0.005 }, feedback: "0.200 mol counts only the Na⁺ ions — remember to include the CO₃²⁻ ions too!" },
          ],
          hints: [
            "Find n(Na₂CO₃) = c × V with V = 0.2500 dm³.",
            "Write the dissociation equation Na₂CO₃ → 2Na⁺ + CO₃²⁻ to count total ions per formula unit.",
          ],
          solution: [
            "{{n(Na_2CO_3) = 0.400 * 0.2500 = 0.100}} mol.",
            "Each Na₂CO₃ releases 3 ions (2 Na⁺ + 1 CO₃²⁻), so total ions = {{3 * 0.100 = 0.300}} mol.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Converting molar concentration to mass concentration",
          question:
            "Calculate the mass concentration in **g dm⁻³** (to **3 significant figures**) of a 0.125 mol dm⁻³ aqueous solution of sulfuric acid, H₂SO₄ ({{M = 98.09}} g mol⁻¹).",
          answer: { type: "number", value: 12.3, tolerance: 0.1, display: "12.3 g dm⁻³" },
          traps: [
            { spec: { type: "number", value: 785, tolerance: 5 }, feedback: "Multiply concentration by molar mass (ρ = c × M), rather than dividing M by c." },
          ],
          hints: [
            "Mass concentration (g dm⁻³) = molar concentration (mol dm⁻³) × molar mass (g mol⁻¹).",
            "Compute 0.125 × 98.09 and round to 3 significant figures.",
          ],
          solution: [
            "{{ρ = c * M = 0.125 * 98.09 = 12.26 ≈ 12.3}} g dm⁻³.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "mole-ideal-gases",
          strategy: "Volumetric standard-solution preparation",
          marks: 3,
          question:
            "A student has accurately weighed the required mass of pure anhydrous sodium carbonate in a weighing boat. Outline the key laboratory steps needed to convert this solid into exactly 250.0 cm³ of homogeneous standard aqueous solution.",
          modelAnswer:
            "Transfer the solid into a clean beaker and dissolve it completely in a small volume (around 50–100 cm³) of distilled water. Pour the solution quantitatively through a funnel into a 250 cm³ volumetric flask, rinsing the beaker, stirring rod and funnel with distilled water and adding all washings to the flask. Add distilled water dropwise near the neck until the bottom of the meniscus rests exactly on the graduation mark, then stopper and invert repeatedly to mix thoroughly.",
          markScheme: [
            {
              point: "Dissolve the solid completely in a small amount of distilled water in a beaker first.",
              keywords: ["beaker", "dissolve", "small volume"],
            },
            {
              point: "Transfer quantitatively into a 250 cm³ volumetric flask including rinsings/washings of beaker and funnel.",
              keywords: ["volumetric flask", "rinsing", "washings", "rinse"],
            },
            {
              point: "Make up to the graduation mark (bottom of meniscus on line), stopper, and invert to mix.",
              keywords: ["meniscus", "graduation mark", "invert"],
            },
          ],
          hints: [
            "Should you pour solid directly into a volumetric flask, or dissolve in a beaker first?",
            "How do you ensure zero solute is left behind on the beaker walls?",
            "How do you read the final graduation line accurately and ensure uniform concentration?",
          ],
          commonError:
            "Writing 'add 250 cm³ of water' instead of 'make up to the 250.0 cm³ graduation mark' — dissolving solute changes total volume slightly!",
        },
        {
          id: "s1-particulate-matter-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "STP gas volume in cm³",
          question:
            "Calculate the volume in **cm³** (to **3 significant figures**) occupied by 0.0160 mol of CO₂(g) at IB STP (273 K, 100 kPa; {{V_m = 22.7}} dm³ mol⁻¹).",
          answer: { type: "number", value: 363, tolerance: 2, display: "363 cm³" },
          traps: [
            { spec: { type: "number", value: 0.363, tolerance: 0.005 }, feedback: "0.363 is in dm³ — multiply by 1000 to convert to cm³ as asked!" },
            { spec: { type: "number", value: 358, tolerance: 2 }, feedback: "358 cm³ uses the obsolete 22.4 dm³ mol⁻¹ — IB STP uses 22.7 dm³ mol⁻¹!" },
          ],
          hints: [
            "First find the volume in dm³ using V = n × 22.7.",
            "Convert dm³ to cm³ by multiplying by 1000.",
          ],
          solution: [
            "{{V = 0.0160 * 22.7 = 0.3632}} dm³.",
            "In cm³: {{0.3632 * 1000 = 363.2 ≈ 363}} cm³.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Solving pV = nRT for absolute temperature",
          question:
            "A 0.400 mol sample of an ideal gas occupies 12.0 dm³ at a pressure of 95.0 kPa ({{R = 8.31}} J K⁻¹ mol⁻¹). Calculate the temperature of the gas in **kelvin** to **3 significant figures**.",
          answer: { type: "number", value: 343, tolerance: 2, display: "343 K" },
          traps: [
            { spec: { type: "number", value: 70, tolerance: 2 }, feedback: "70 °C is in Celsius — the question asks for kelvin (343 K)!" },
          ],
          hints: [
            "Rearrange pV = nRT to T = (pV)/(nR).",
            "With R = 8.31 J K⁻¹ mol⁻¹, kPa × dm³ gives J directly, so T = (95.0 × 12.0) / (0.400 × 8.31).",
          ],
          solution: [
            "Using consistent units ({{p}} in kPa, {{V}} in dm³): {{T = (pV)/(nR) = (95.0 * 12.0)/(0.400 * 8.31)}}.",
            "{{T = 1140/3.324 = 342.96 ≈ 343}} K.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "mole-ideal-gases",
          strategy: "Empirical formula from percentage composition",
          question:
            "An organic liquid contains 52.14% C, 13.13% H and 34.73% O by mass ({{A_r}}: C = 12.01, H = 1.01, O = 16.00). Determine its **empirical formula** (write in standard C, H, O order, e.g. CH4O).",
          answer: { type: "text", accept: ["C2H6O", "C₂H₆O"], display: "C₂H₆O" },
          hints: [
            "Divide each mass percentage by its relative atomic mass A_r to get moles in 100 g.",
            "Divide all three mole amounts by the smallest value (oxygen: 2.171 mol).",
          ],
          solution: [
            "Moles per 100 g: C = {{52.14/12.01 = 4.341}}; H = {{13.13/1.01 = 13.00}}; O = {{34.73/16.00 = 2.171}}.",
            "Divide by 2.171: C = {{2.00}}, H = {{5.99 ≈ 6}}, O = {{1.00}} → **C₂H₆O**.",
          ],
        },
        {
          id: "s1-particulate-matter-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "mole-ideal-gases",
          strategy: "Real vs ideal gas deviations",
          marks: 5,
          question:
            "State the two core assumptions of the ideal gas model regarding molecular size and forces, and explain why real gases such as NH₃ and CO₂ deviate strongly from {{(pV)/(nRT) = 1}} under extreme pressure or cold conditions.",
          modelAnswer:
            "The ideal gas model assumes that (1) the volume of the gas particles themselves is negligible compared with the total container volume, and (2) there are negligible intermolecular forces between particles. At low temperatures, molecules move slowly so attractive intermolecular forces (such as hydrogen bonding in NH₃ or dispersion attractions in CO₂) pull molecules inward before wall collisions, lowering the observed pressure and causing pV/(nRT) to dip below 1. At very high pressures, particles are packed close together so their finite molecular volume becomes a significant fraction of the container volume; the gas becomes less compressible and pV/(nRT) rises above 1.",
          markScheme: [
            {
              point: "Assumption 1: particle volume is negligible compared to the container volume.",
              keywords: ["negligible", "container volume", "volume of the gas particles"],
            },
            {
              point: "Assumption 2: negligible/zero intermolecular forces between particles.",
              keywords: ["intermolecular forces", "no attractions", "negligible intermolecular"],
            },
            {
              point: "At low temperature: molecules have lower kinetic energy so intermolecular attractions become significant (e.g. H-bonding in NH₃).",
              keywords: ["low temperature", "hydrogen bonding", "pull", "attractive"],
            },
            {
              point: "Consequence at low T/moderate P: wall collision pressure decreases, so pV/(nRT) drops below 1.",
              keywords: ["below 1", "less than 1", "lowering the observed pressure"],
            },
            {
              point: "At very high pressure: finite particle volume becomes significant (less compressible), causing pV/(nRT) to rise above 1.",
              keywords: ["above 1", "greater than 1", "finite", "less compressible"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States the ideal gas assumptions or the conditions for deviation (high P, low T) without linking each condition to the correct physical mechanism or direction of pV/(nRT).",
              indicators: ["Lists assumptions without linking to real gas curves", "Confuses which condition causes pV/(nRT) < 1 vs > 1"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Correctly states both assumptions and explains at least one deviation regime accurately in terms of particle volume or intermolecular attractions and pV/(nRT).",
              indicators: ["Accurate assumptions", "Mostly complete mechanistic explanation with one minor omission"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Comprehensive, precise explanation of both ideal assumptions and both opposing real-gas deviations (low T attractions → pV/nRT < 1; high P finite volume → pV/nRT > 1), referencing NH₃/CO₂.",
              indicators: ["Both assumptions stated precisely", "Clear link from IMFs to reduced wall pressure and pV/nRT < 1", "Clear link from finite molecular volume to pV/nRT > 1"],
            },
          ],
          hints: [
            "Begin by writing the two kinetic assumptions explicitly (particle volume and intermolecular forces).",
            "Explain what happens at low temperature (attractions reduce wall collision pressure → pV/nRT < 1).",
            "Explain what happens at very high pressure (finite particle volume takes up space → pV/nRT > 1).",
          ],
          commonError:
            "Reversing the two regimes — claiming finite particle volume pulls pV/(nRT) below 1 instead of pushing it above 1!",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: HL IONIZATION ENERGIES, SPECTRA & MULTI-STEP STOICHIOMETRY (15 Qs)
    // -------------------------------------------------------------------------
    {
      id: "s1-particulate-matter-p2",
      title: "Paper 2 · Set 2 — HL Ionization Energies, Spectra & Multi-Step Mole Problems",
      level: "HL",
      questions: [
        {
          id: "s1-particulate-matter-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ionization-energy-hl",
          strategy: "Photon wavelength from energy E = hc/λ",
          question:
            "A photon emitted in the hydrogen Balmer series has energy {{3.03 * 10^(-19)}} J. Using {{h = 6.63 * 10^(-34)}} J s and {{c = 3.00 * 10^8}} m s⁻¹, calculate its wavelength in **nanometres (nm)** to **3 significant figures**.",
          answer: { type: "number", value: 656, tolerance: 3, display: "656 nm" },
          traps: [
            { spec: { type: "number", value: 6.56e-7, tolerance: 5e-9 }, feedback: "6.56 × 10⁻⁷ is in metres — multiply by 10⁹ to express the wavelength in nanometres!" },
          ],
          hints: [
            "Rearrange E = hc/λ to λ = hc/E.",
            "Compute λ in metres first, then multiply by 10⁹ to convert to nm.",
          ],
          solution: [
            "{{λ = (hc)/E = (6.63 * 10^(-34) * 3.00 * 10^8)/(3.03 * 10^(-19)) = 6.564 * 10^(-7)}} m.",
            "Convert to nm: {{6.564 * 10^(-7) * 10^9 = 656}} nm (the red Balmer-α line, {{n = 3 → 2}}).",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "ionization-energy-hl",
          strategy: "Molar ionization energy from threshold frequency",
          question:
            "The ionization convergence frequency for gaseous atoms of an alkali metal is {{1.25 * 10^{15}}} s⁻¹. Using {{h = 6.63 * 10^(-34)}} J s and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate its first ionization energy in **kJ mol⁻¹** to **3 significant figures**.",
          answer: { type: "number", value: 499, tolerance: 3, display: "499 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 499000, tolerance: 3000 }, feedback: "Divide J mol⁻¹ by 1000 to convert to kJ mol⁻¹." },
          ],
          hints: [
            "Calculate single-atom energy E = hf.",
            "Multiply by N_A and divide by 1000 for kJ mol⁻¹.",
          ],
          solution: [
            "{{E = (6.63 * 10^(-34)) * (1.25 * 10^{15}) = 8.2875 * 10^(-19)}} J per atom.",
            "{{IE_1 = (8.2875 * 10^(-19) * 6.02 * 10^{23})/1000 = 498.9 ≈ 499}} kJ mol⁻¹ (close to sodium, 496 kJ mol⁻¹).",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ionization-energy-hl",
          strategy: "Period 3 IE₁ trend and both anomalies",
          marks: 4,
          question:
            "Account for the overall pattern in first ionization energy across Period 3 from sodium (Z = 11) to argon (Z = 18), and account for BOTH dips (Mg → Al and P → S).",
          modelAnswer:
            "Across Period 3, first ionization energy generally increases because nuclear charge increases while valence electrons enter the same n = 3 main energy level, so inner-shell shielding stays approximately constant and atomic radius decreases, strengthening electrostatic attraction to the outer electron. The dip from Mg to Al occurs because aluminium's outermost electron occupies the higher-energy 3p sublevel, which is slightly further from the nucleus and partially shielded by the filled 3s² sublevel. The dip from P to S occurs because sulfur (3p⁴) has two electrons paired in the same 3p orbital, creating extra electron–electron repulsion that makes removing one electron easier than from half-filled 3p³ phosphorus.",
          markScheme: [
            {
              point: "General increase: increasing nuclear charge across the period.",
              keywords: ["nuclear charge increases", "increasing nuclear charge", "more protons"],
            },
            {
              point: "General increase: electrons added to same main shell (n = 3) so shielding stays roughly constant / radius decreases.",
              keywords: ["same main", "constant shielding", "shielding stays", "atomic radius decreases"],
            },
            {
              point: "Mg → Al dip: Al's outer electron is in a higher-energy 3p sublevel, partially shielded by 3s².",
              keywords: ["3p sublevel", "higher-energy 3p", "shielded by the filled 3s"],
            },
            {
              point: "P → S dip: paired electrons in the same 3p orbital in sulfur cause extra electron–electron repulsion.",
              keywords: ["paired", "repulsion", "same 3p orbital"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Explains the overall increase across Period 3 OR one of the two dips accurately, but omits key shielding/orbital-repulsion reasoning.",
              indicators: ["Mentions rising nuclear charge without shielding", "Attributes P → S solely to 'half-filled stability' without electron-pair repulsion"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Complete, well-structured explanation covering nuclear charge + constant shielding, 3p vs 3s energy/shielding for Mg → Al, and paired-electron repulsion in 3p for P → S.",
              indicators: ["Explicitly links nuclear charge + constant shielding", "Explains Mg → Al via 3p sublevel", "Explains P → S via paired-electron repulsion in a 3p orbital"],
            },
          ],
          hints: [
            "First explain the general upward trend using nuclear charge AND constant inner-shell shielding.",
            "For Mg → Al, compare 3s² with 3s² 3p¹.",
            "For P → S, compare 3p³ with 3p⁴ and explicitly cite paired-electron repulsion in the same 3p orbital.",
          ],
          commonError:
            "Writing 'phosphorus has a stable half-filled shell' without mentioning **electron–electron repulsion between paired electrons** in sulfur's 3p orbital — examiners require the repulsion mechanism!",
        },
        {
          id: "s1-particulate-matter-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "ionization-energy-hl",
          strategy: "Group number from successive IE table",
          question:
            "The first six successive ionization energies (in kJ mol⁻¹) of a Period 2 element Y are: 1086, 2353, 4621, 6223, 37 831 and 47 277. State the **IUPAC group number** (1–18) of element Y.",
          answer: { type: "number", value: 14, tolerance: 0, display: "14" },
          traps: [
            { spec: { type: "number", value: 4, tolerance: 0 }, feedback: "4 is the number of valence electrons — in IUPAC numbering (1–18), p-block elements with 4 valence electrons are in Group 14, not Group 4!" },
            { spec: { type: "number", value: 15, tolerance: 0 }, feedback: "The big jump occurs BEFORE IE₅ (between IE₄ and IE₅), so count the 4 electrons removed before the jump → Group 14." },
          ],
          hints: [
            "Find the biggest multiplicative jump: compare 37 831 / 6223 (> 6×!).",
            "Count how many valence electrons were removed BEFORE the jump, then convert to IUPAC Group 13–18.",
          ],
          solution: [
            "Huge jump (> 6×) between {{IE_4}} (6223) and {{IE_5}} (37 831) indicates 4 valence electrons.",
            "A main-group Period 2 element with 4 valence electrons belongs to **Group 14** (carbon).",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ionization-energy-hl",
          strategy: "Logarithmic successive ionization energy plots",
          marks: 3,
          question:
            "Consider the successive ionization energies of silicon (Z = 14). Explain (a) why every successive ionization energy is larger than the previous one, (b) why chemists plot {{log_{10}(IE)}} rather than raw IE, and (c) why the 5th ionization energy jumps sharply.",
          modelAnswer:
            "(a) As each electron is removed, the same positive nuclear charge attracts fewer remaining electrons with reduced electron–electron repulsion and smaller ionic radius, increasing the effective nuclear attraction per electron. (b) Successive ionization energies span several orders of magnitude (from hundreds to over 200 000 kJ mol⁻¹), so taking log₁₀ compresses the vertical range onto one readable scale so shell jumps stand out clearly. (c) Silicon (2,8,4) has four valence electrons in n = 3; the 5th electron must be removed from the closer inner n = 2 shell with substantially less shielding.",
          markScheme: [
            {
              point: "Same nuclear charge attracts fewer electrons / less electron–electron repulsion / higher proton-to-electron ratio.",
              keywords: ["fewer", "repulsion", "nuclear charge", "proton"],
            },
            {
              point: "Values span several orders of magnitude / huge range, so log₁₀ fits all values cleanly on one axis.",
              keywords: ["orders of magnitude", "range", "compresses", "scale"],
            },
            {
              point: "5th electron is removed from a closer inner shell (n = 2) with less shielding.",
              keywords: ["inner", "n = 2", "less shielding", "closer"],
            },
          ],
          hints: [
            "For (a), compare the constant nuclear charge (+14) against the shrinking number of remaining electrons.",
            "For (b), compare IE₁ (~787) with IE₁₄ (~250 000 kJ mol⁻¹).",
            "For (c), write silicon's shell arrangement (2, 8, 4).",
          ],
          commonError:
            "Saying 'nuclear charge increases' when successive electrons are removed — the number of protons stays fixed at 14; it is the *effective* nuclear charge per remaining electron that rises!",
        },
        {
          id: "s1-particulate-matter-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "electron-configurations",
          strategy: "Paired vs unpaired 3d orbitals in Cu²⁺",
          question:
            "How many **fully occupied (paired) 3d orbitals** are present in a single ground-state copper(II) ion, Cu²⁺ ({{Z = 29}})?",
          answer: { type: "number", value: 4, tolerance: 0, display: "4" },
          traps: [
            { spec: { type: "number", value: 1, tolerance: 0 }, feedback: "1 is the number of UNPAIRED orbitals in 3d⁹ — the question asks for FULLY OCCUPIED (paired) 3d orbitals!" },
            { spec: { type: "number", value: 5, tolerance: 0 }, feedback: "Cu⁺ is 3d¹⁰ (5 paired orbitals), whereas Cu²⁺ has lost one 4s and one 3d electron to become 3d⁹." },
          ],
          hints: [
            "Start with neutral Cu = [Ar] 3d¹⁰ 4s¹, then remove 4s¹ first and one 3d electron to form Cu²⁺.",
            "Place 9 electrons into 5 degenerate 3d orbitals: how many boxes contain a full pair ↑↓?",
          ],
          solution: [
            "Neutral Cu is [Ar] 3d¹⁰ 4s¹ → Cu²⁺ is [Ar] 3d⁹.",
            "Across 5 degenerate 3d orbitals, 9 electrons fill **4** orbitals completely (↑↓ ↑↓ ↑↓ ↑↓) with 1 unpaired electron (↑) in the 5th orbital.",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "electron-configurations",
          strategy: "Chromium configuration & 4s-first ionization",
          marks: 3,
          question:
            "Give the condensed ground-state electron configurations of neutral chromium (Z = 24) and the Cr³⁺ ion, and explain why chromium does not adopt a 4s² configuration and why Cr³⁺ loses its 4s electron before 3d electrons.",
          modelAnswer:
            "Neutral Cr is [Ar] 3d⁵ 4s¹ and Cr³⁺ is [Ar] 3d³. Neutral chromium adopts 3d⁵ 4s¹ because placing one electron in each of the five degenerate 3d orbitals achieves a symmetric half-filled sublevel with lower electron–electron repulsion and greater exchange stability than 3d⁴ 4s². Once the 3d sublevel contains electrons, the 4s orbital lies higher in energy and further from the nucleus than 3d, so the 4s electron is always removed first on ionization, followed by two 3d electrons to leave 3d³.",
          markScheme: [
            {
              point: "Correctly gives Cr = [Ar] 3d⁵ 4s¹ AND Cr³⁺ = [Ar] 3d³.",
              keywords: ["3d⁵ 4s¹", "3d5 4s1", "3d³", "3d3"],
            },
            {
              point: "Explains Cr exception via extra stability / reduced electron–electron repulsion of a half-filled 3d⁵ sublevel.",
              keywords: ["half-filled", "repulsion", "stability"],
            },
            {
              point: "Explains that once 3d is occupied, 4s is higher in energy / further out than 3d so 4s is removed first.",
              keywords: ["higher in energy", "removed first", "further from the nucleus"],
            },
          ],
          hints: [
            "Write both [Ar] 3d⁵ 4s¹ and [Ar] 3d³ explicitly.",
            "Link the neutral exception to the symmetric half-filled 3d⁵ sublevel and reduced repulsion.",
            "Explain the relative energy of 4s vs 3d once 3d orbitals are occupied.",
          ],
          commonError:
            "Writing Cr³⁺ as [Ar] 3d² 4s¹ — forgetting to remove the 4s¹ electron FIRST!",
        },
        {
          id: "s1-particulate-matter-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "particulate-nuclear-atom",
          strategy: "Reverse A_r isotopic abundance",
          question:
            "Copper has a relative atomic mass of 63.55 and consists of two isotopes, ⁶³Cu and ⁶⁵Cu. Calculate the percentage abundance of **⁶³Cu** to **1 decimal place**.",
          answer: { type: "number", value: 72.5, tolerance: 0.2, display: "72.5%" },
          traps: [
            { spec: { type: "number", value: 27.5, tolerance: 0.2 }, feedback: "27.5% is the abundance of ⁶⁵Cu — check which isotope the question asks for!" },
          ],
          hints: [
            "Let x be the fractional abundance of ⁶³Cu, so (1 − x) is the fraction of ⁶⁵Cu.",
            "Solve 63x + 65(1 − x) = 63.55 → 65 − 2x = 63.55.",
          ],
          solution: [
            "{{63x + 65(1 - x) = 63.55}} gives {{2x = 1.45}}, so {{x = 0.725}}.",
            "Percentage abundance of ⁶³Cu = **72.5%** (using integer isotopic masses).",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Describe",
          guideRef: "particulate-nuclear-atom",
          strategy: "Multi-step physical mixture separation",
          marks: 3,
          question:
            "A beaker contains a mixture of insoluble sand, water, dissolved ethanol (b.p. 78 °C) and dissolved sodium chloride. Describe a three-step physical separation sequence to isolate pure sand, pure liquid ethanol and dry solid sodium chloride, naming the physical property exploited at each step.",
          modelAnswer:
            "First, perform filtration to trap the insoluble sand as residue on filter paper while the aqueous ethanol–salt filtrate passes through, exploiting differences in solubility and particle size. Second, perform fractional distillation on the filtrate to collect pure ethanol at 78 °C before water (100 °C), exploiting the difference in boiling points of miscible liquids. Third, evaporate and crystallize the remaining aqueous sodium chloride solution to obtain dry solid NaCl, exploiting the difference in volatility between water and the non-volatile ionic salt.",
          markScheme: [
            {
              point: "Step 1: Filtration to separate insoluble sand (exploits solubility / particle size).",
              keywords: ["filtration", "insoluble", "residue"],
            },
            {
              point: "Step 2: Fractional distillation to isolate ethanol at 78 °C (exploits boiling point difference).",
              keywords: ["fractional distillation", "boiling point", "boiling points"],
            },
            {
              point: "Step 3: Evaporation / crystallization to recover solid NaCl (exploits volatility difference).",
              keywords: ["evaporat", "crystalliz", "volatility", "non-volatile"],
            },
          ],
          hints: [
            "Always remove insoluble solids FIRST before heating or distilling!",
            "How do you separate two miscible liquids with boiling points 78 °C and 100 °C?",
            "How do you recover a non-volatile dissolved ionic salt from the remaining water?",
          ],
          commonError:
            "Evaporating the mixture BEFORE distilling off the ethanol — that would boil away and lose all the ethanol!",
        },
        {
          id: "s1-particulate-matter-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Combustion analysis — oxygen by difference",
          question:
            "Complete combustion of 1.80 g of an organic compound containing only C, H and O produces 2.64 g of CO₂ and 1.08 g of H₂O ({{A_r}}: C = 12.01, H = 1.01, O = 16.00). Calculate the mass of **oxygen** (in g, to **2 decimal places**) present in the original 1.80 g sample.",
          answer: { type: "number", value: 0.96, tolerance: 0.02, display: "0.96 g" },
          traps: [
            { spec: { type: "number", value: 0.72, tolerance: 0.02 }, feedback: "0.72 g is the mass of CARBON — now subtract both m(C) and m(H) from 1.80 g to find m(O)!" },
            { spec: { type: "number", value: 0.12, tolerance: 0.02 }, feedback: "0.12 g is the mass of HYDROGEN — subtract both m(C) and m(H) from 1.80 g." },
          ],
          hints: [
            "Calculate mass of C from CO₂: m(C) = 2.64 × (12.01 / 44.01).",
            "Calculate mass of H from H₂O: m(H) = 1.08 × (2.02 / 18.02). Then find m(O) = 1.80 − m(C) − m(H).",
          ],
          solution: [
            "{{m(C) = 2.64 * (12.01/44.01) = 0.7204}} g.",
            "{{m(H) = 1.08 * (2.02/18.02) = 0.1211}} g.",
            "{{m(O) = 1.80 - 0.7204 - 0.1211 = 0.9585 ≈ 0.96}} g.",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Combined gas law with sub-zero Celsius temperature",
          question:
            "A weather balloon contains 15.0 dm³ of helium at 20.0 °C (293.15 K) and 101 kPa. It ascends to an altitude where the pressure is 40.0 kPa and temperature is −30.0 °C (243.15 K). Calculate the new volume of the balloon in **dm³** to **3 significant figures**.",
          answer: { type: "number", value: 31.4, tolerance: 0.3, display: "31.4 dm³" },
          traps: [
            { spec: { type: "number", value: 45.7, tolerance: 0.4 }, feedback: "Check your temperature ratio: cooling from 293.15 K to 243.15 K shrinks the gas, so multiply by (243.15 / 293.15), not its reciprocal!" },
          ],
          hints: [
            "Apply the combined gas law: (p₁V₁)/T₁ = (p₂V₂)/T₂ with T strictly in kelvin.",
            "Rearrange: V₂ = 15.0 × (101 / 40.0) × (243.15 / 293.15).",
          ],
          solution: [
            "{{V_2 = V_1 * (p_1/p_2) * (T_2/T_1) = 15.0 * (101/40.0) * (243.15/293.15)}}.",
            "{{V_2 = 15.0 * 2.525 * 0.8294 = 31.41 ≈ 31.4}} dm³.",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Molar mass of a volatile liquid via pV = nRT",
          question:
            "A 0.787 g sample of a volatile organic liquid is vaporized completely in a heated gas syringe, occupying 420 cm³ at 100.0 °C (373.15 K) and 100.0 kPa ({{R = 8.31}} J K⁻¹ mol⁻¹). Calculate the molar mass of the compound in **g mol⁻¹** to **3 significant figures**.",
          answer: { type: "number", value: 58.1, tolerance: 0.4, display: "58.1 g mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 0.0581, tolerance: 0.001 }, feedback: "Convert 420 cm³ to 0.420 dm³ before pairing with pressure in kPa!" },
          ],
          hints: [
            "Convert V = 420 cm³ = 0.420 dm³ so (kPa, dm³, K) matches R = 8.31.",
            "Find n = (pV)/(RT), then compute M = m/n (or directly M = mRT/(pV)).",
          ],
          solution: [
            "{{V = 0.420}} dm³, {{p = 100.0}} kPa, {{T = 373.15}} K.",
            "{{n = (100.0 * 0.420)/(8.31 * 373.15) = 42.0/3100.88 = 0.013545}} mol.",
            "{{M = 0.787/0.013545 = 58.10 ≈ 58.1}} g mol⁻¹ (consistent with propanone, C₃H₆O).",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "mole-ideal-gases",
          strategy: "Two-stage serial dilution",
          question:
            "A 25.0 cm³ aliquot of 0.800 mol dm⁻³ KMnO₄ stock solution is diluted to 250.0 cm³ (Solution A). Next, 20.0 cm³ of Solution A is diluted to 100.0 cm³ (Solution B). Calculate the molar concentration of **Solution B** in **mol dm⁻³**.",
          answer: { type: "number", value: 0.016, tolerance: 0.0005, display: "0.0160 mol dm⁻³" },
          traps: [
            { spec: { type: "number", value: 0.08, tolerance: 0.002 }, feedback: "0.0800 mol dm⁻³ is Solution A — apply the second dilution (20.0 → 100.0 cm³) to obtain Solution B!" },
          ],
          hints: [
            "Find Solution A first: dilution factor is 25.0 / 250.0 = 1/10.",
            "Then dilute Solution A by a factor of 20.0 / 100.0 = 1/5.",
          ],
          solution: [
            "Solution A: {{c_A = 0.800 * (25.0/250.0) = 0.0800}} mol dm⁻³.",
            "Solution B: {{c_B = 0.0800 * (20.0/100.0) = 0.0160}} mol dm⁻³.",
          ],
        },
        {
          id: "s1-particulate-matter-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ionization-energy-hl",
          strategy: "Convergence limit ionization determination",
          marks: 4,
          question:
            "Explain how the convergence limit of the Lyman series is used to determine the molar first ionization energy of hydrogen, and explain why the convergence limit of the Balmer series alone cannot directly give the first ionization energy.",
          modelAnswer:
            "In the Lyman series, excited electrons fall to the ground state n = 1, so the convergence limit corresponds to the maximum transition n = ∞ → n = 1, whose energy equals the exact energy required to remove an electron completely from the ground state to infinity (ionization). Measure the convergence frequency f_limit (or wavelength λ_limit) and compute the single-atom ionization energy using E = hf_limit (or E = hc/λ_limit) in joules. Multiply by Avogadro's constant N_A and divide by 1000 to convert to kJ mol⁻¹. The Balmer convergence limit corresponds only to n = ∞ → n = 2 (ionizing from the excited n = 2 level), so it underestimates IE₁ unless the n = 2 → n = 1 transition energy is added.",
          markScheme: [
            {
              point: "Links Lyman convergence limit to n = ∞ → n = 1 (complete removal of ground-state electron).",
              keywords: ["n = 1", "ground state", "infinity", "∞"],
            },
            {
              point: "Uses E = hf or E = hc/λ to obtain the energy for one atom in joules.",
              keywords: ["hf", "hc/λ", "one atom", "single"],
            },
            {
              point: "Multiplies by Avogadro's constant N_A and divides by 1000 for kJ mol⁻¹.",
              keywords: ["avogadro", "n_a", "1000", "kj mol"],
            },
            {
              point: "Explains Balmer convergence limit ends at n = 2 (excited state), missing the n = 2 → n = 1 energy gap.",
              keywords: ["n = 2", "excited", "underestimates", "added"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Recalls E = hf or mentions Avogadro's constant, but omits either the ground-state n = 1 link or why Balmer alone is insufficient.",
              indicators: ["Writes formula without explaining physical meaning of convergence limit", "Omits J → kJ mol⁻¹ conversion"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clear, rigorous explanation connecting Lyman convergence (n = ∞ → 1) to ground-state ionization, full J → kJ mol⁻¹ conversion, and exact reason Balmer convergence (n = ∞ → 2) misses the n = 2 → 1 gap.",
              indicators: ["Links Lyman limit to ground-state removal", "Includes E = hf, N_A and ÷1000", "Contrasts n = 2 excited-state limit of Balmer"],
            },
          ],
          hints: [
            "State which shells the Lyman convergence transition connects.",
            "Give the full calculation path from frequency/wavelength to kJ mol⁻¹.",
            "Contrast where the Balmer series terminates (n = 2) with the definition of first ionization energy (from ground state n = 1).",
          ],
          commonError:
            "Forgetting to multiply single-photon energy E = hf by Avogadro's constant N_A and divide by 1000 when stating how molar ionization energy (kJ mol⁻¹) is found.",
        },
        {
          id: "s1-particulate-matter-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "mole-ideal-gases",
          strategy: "Systematic error analysis in gas-syringe M_r determination",
          marks: 4,
          question:
            "In a volatile-liquid molar-mass experiment using {{M = (mRT)/(pV)}}, a student's calculated value of M is 6% higher than the true literature value. Suggest and explain TWO distinct experimental errors that would cause M to be too high, and deduce how intermolecular attractions in the real vapour affect the calculated value of M.",
          modelAnswer:
            "Since M = mRT/(pV), any error that makes recorded volume V too small or recorded mass m too large will inflate M. First, if some injected liquid fails to vaporize completely (or re-condenses on a cooler syringe barrel), the measured gas volume V is smaller than expected, making M too high. Second, if vapour leaks out past a loose syringe plunger (or if some liquid drips onto the syringe tip after weighing so less actually enters the syringe), V is smaller than corresponds to mass m, again overestimating M. Finally, intermolecular attractions in a real vapour near its boiling point pull molecules closer together so the actual gas volume V is smaller than predicted by ideal gas law, also causing the calculated M to be higher than the true value.",
          markScheme: [
            {
              point: "Links an overestimate of M = mRT/(pV) to an underestimated V (or overestimated m or T).",
              keywords: ["v is smaller", "volume v is smaller", "underestimate", "smaller than"],
            },
            {
              point: "Experimental error 1: incomplete vaporization or condensation in syringe lowers V, raising M.",
              keywords: ["incomplete", "condens", "fails to vaporize"],
            },
            {
              point: "Experimental error 2: gas leakage past plunger / liquid lost during transfer / oven temperature lower than thermometer reading.",
              keywords: ["leak", "plunger", "drips", "syringe tip"],
            },
            {
              point: "Real-gas effect: intermolecular attractions reduce V below ideal volume, causing calculated M to be higher.",
              keywords: ["attractions", "smaller than predicted", "higher than the true"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies experimental errors (e.g. gas leak or condensation) without clearly showing mathematically why they increase M = mRT/(pV), or gets the real-gas direction backwards.",
              indicators: ["Lists errors without directional impact on M", "Omits real-gas intermolecular-attraction reasoning"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly connects two valid experimental errors AND real-gas intermolecular attractions directly to a smaller measured V in M = mRT/(pV), accurately predicting a higher M.",
              indicators: ["Two distinct valid errors linked to V or m", "Correct mathematical direction on M = mRT/(pV)", "Correct real-gas attraction effect on V and M"],
            },
          ],
          hints: [
            "Look at M = mRT/(pV): to make M TOO LARGE, must V be too small or too big?",
            "Think about two ways real gas volume V in a syringe ends up smaller than it should for the weighed mass m.",
            "Near the boiling point of a volatile organic liquid, do intermolecular attractions pull molecules closer together (smaller V) or push them apart?",
          ],
          commonError:
            "Suggesting 'air bubbles already inside the syringe' — extra air makes measured V too BIG, which makes calculated M too LOW, not too high!",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 tough problems, ALL difficulty: "challenge", 3-step hints)
  // ===========================================================================
  challenge: [
    {
      id: "s1-particulate-matter-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "particulate-nuclear-atom",
      strategy: "Three-isotope simultaneous abundance equations",
      question:
        "A sample of silicon consists of three isotopes: ²⁸Si, ²⁹Si and ³⁰Si, with an overall relative atomic mass of 28.11. Given that the abundance of ³⁰Si is exactly 3.10%, calculate the percentage abundance of **²⁸Si** to **1 decimal place**.",
      answer: { type: "number", value: 92.1, tolerance: 0.2, display: "92.1%" },
      traps: [
        { spec: { type: "number", value: 4.8, tolerance: 0.2 }, feedback: "4.8% is the abundance of ²⁹Si — check which isotope the question asks for!" },
      ],
      hints: [
        "All three fractional abundances must sum to 1.000, so if ³⁰Si = 0.0310, then ²⁸Si + ²⁹Si = 0.9690.",
        "Let x = fraction of ²⁸Si, so (0.9690 − x) = fraction of ²⁹Si.",
        "Substitute into 28x + 29(0.9690 − x) + 30(0.0310) = 28.11 and solve for x.",
      ],
      solution: [
        "Let {{x}} be the fraction of ²⁸Si; then fraction of ²⁹Si = {{0.9690 - x}}.",
        "{{28x + 29(0.9690 - x) + 30(0.0310) = 28.11}}.",
        "{{28.101 + 0.930 - x = 28.11}} → {{29.031 - x = 28.11}} → {{x = 0.921}} → **92.1%** (and 4.8% ²⁹Si).",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "ionization-energy-hl",
      strategy: "Hess-like addition of atomic transition energies",
      question:
        "In the hydrogen emission spectrum, the first Lyman line ({{n = 2 → n = 1}}) has wavelength 121.6 nm and the convergence limit of the Balmer series ({{n = ∞ → n = 2}}) has wavelength 364.6 nm. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the first ionization energy of hydrogen in **kJ mol⁻¹** to **3 significant figures**.",
      answer: { type: "number", value: 1310, tolerance: 15, display: "1310 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 985, tolerance: 15 }, feedback: "985 kJ mol⁻¹ is ONLY the n = 2 → 1 step — add the Balmer convergence energy (328 kJ mol⁻¹)!" },
        { spec: { type: "number", value: 328, tolerance: 10 }, feedback: "328 kJ mol⁻¹ is ONLY the Balmer convergence limit (n = ∞ → 2) — add the n = 2 → 1 energy!" },
        { spec: { type: "number", value: 246, tolerance: 10 }, feedback: "Never add wavelengths directly — photon energy is inversely proportional to λ, so add ENERGIES (hc/λ₁ + hc/λ₂)!" },
      ],
      hints: [
        "Sketch an energy ladder showing n = 1, n = 2 and n = ∞: the total gap (n = 1 to ∞) is the SUM of two smaller energy gaps!",
        "Never add wavelengths! Convert each wavelength separately into energy via E = hc/λ.",
        "Add E(121.6 nm) + E(364.6 nm), multiply by N_A, and divide by 1000.",
      ],
      solution: [
        "{{E(2 → 1) = (6.63 * 10^(-34) * 3.00 * 10^8)/(121.6 * 10^(-9)) = 1.6357 * 10^(-18)}} J (984.7 kJ mol⁻¹).",
        "{{E(∞ → 2) = (6.63 * 10^(-34) * 3.00 * 10^8)/(364.6 * 10^(-9)) = 5.4553 * 10^(-19)}} J (328.4 kJ mol⁻¹).",
        "Total {{IE_1 = 984.7 + 328.4 = 1313.1 ≈ 1310}} kJ mol⁻¹.",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "mole-ideal-gases",
      strategy: "Full combustion analysis + molecular formula",
      question:
        "Complete combustion of 2.32 g of a fruity ester containing only C, H and O produced 5.28 g of CO₂ and 2.16 g of H₂O ({{A_r}}: C = 12.01, H = 1.01, O = 16.00). Mass spectrometry shows its molar mass is 116.2 g mol⁻¹. Determine its **molecular formula** (write in C, H, O order, e.g. C4H8O2).",
      answer: { type: "text", accept: ["C6H12O2", "C₆H₁₂O₂"], display: "C₆H₁₂O₂" },
      traps: [
        { spec: { type: "text", accept: ["C3H6O", "C₃H₆O"] }, feedback: "C₃H₆O is the EMPIRICAL formula (M = 58.09) — scale it up to molar mass 116.2 g mol⁻¹!" },
      ],
      hints: [
        "Find moles and mass of C from 5.28 g CO₂, and moles and mass of H from 2.16 g H₂O (remember 2 H per H₂O!).",
        "Find mass of O by subtracting m(C) + m(H) from 2.32 g, convert to moles of O, and deduce the empirical formula.",
        "Divide M = 116.2 g mol⁻¹ by the empirical molar mass to find the integer multiplier k.",
      ],
      solution: [
        "{{n(C) = 5.28/44.01 = 0.1200}} mol ({{m(C) = 1.441}} g); {{n(H) = 2 * (2.16/18.02) = 0.2397}} mol ({{m(H) = 0.2421}} g).",
        "{{m(O) = 2.32 - 1.441 - 0.2421 = 0.637}} g → {{n(O) = 0.637/16.00 = 0.0398}} mol.",
        "Mole ratio {{0.1200 : 0.2397 : 0.0398 = 3 : 6 : 1}} → empirical formula C₃H₆O ({{M_{emp} = 58.09}} g mol⁻¹).",
        "Multiplier {{k = 116.2/58.09 = 2}} → molecular formula **C₆H₁₂O₂**.",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "mole-ideal-gases",
      strategy: "Isothermal mixing of ideal gases (conserved pV)",
      question:
        "Two rigid glass bulbs joined by a closed stopcock are held at constant 300 K: Bulb A (2.00 dm³) contains helium at 150 kPa, and Bulb B (3.00 dm³) contains neon at 250 kPa. The stopcock is opened and the non-reacting ideal gases mix completely at 300 K. Calculate the final total pressure in **kPa**.",
      answer: { type: "number", value: 210, tolerance: 1, display: "210 kPa" },
      traps: [
        { spec: { type: "number", value: 200, tolerance: 1 }, feedback: "200 kPa is the unweighted average of 150 and 250 — the bulbs have DIFFERENT volumes (2.00 vs 3.00 dm³)!" },
        { spec: { type: "number", value: 400, tolerance: 1 }, feedback: "You added the two initial pressures without accounting for each gas expanding into the combined 5.00 dm³ volume!" },
      ],
      hints: [
        "At constant T, total moles n_total = n_A + n_B implies p_final V_total = p_A V_A + p_B V_B!",
        "Find V_total = 2.00 + 3.00 = 5.00 dm³.",
        "Alternatively, compute each gas's partial pressure via Boyle's law (p_final = p₁V₁/V_total) and sum them.",
      ],
      solution: [
        "Partial pressure of He in 5.00 dm³: {{p(He) = 150 * (2.00/5.00) = 60.0}} kPa.",
        "Partial pressure of Ne in 5.00 dm³: {{p(Ne) = 250 * (3.00/5.00) = 150.0}} kPa.",
        "Total pressure = {{60.0 + 150.0 = 210}} kPa.",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "mole-ideal-gases",
      strategy: "Hydrated salt formula from thermal dehydration",
      question:
        "Heating 4.29 g of hydrated sodium carbonate crystals, Na₂CO₃·xH₂O, to constant mass leaves 1.59 g of anhydrous Na₂CO₃ ({{M(Na_2CO_3) = 105.99}} g mol⁻¹, {{M(H_2O) = 18.02}} g mol⁻¹). Determine the integer value of **x**.",
      answer: { type: "number", value: 10, tolerance: 0, display: "10" },
      traps: [
        { spec: { type: "number", value: 16, tolerance: 0 }, feedback: "Did you divide total hydrated mass (4.29 g) by 18.02 instead of subtracting 1.59 g first?" },
      ],
      hints: [
        "Mass of water driven off = 4.29 − 1.59 = 2.70 g.",
        "Convert 1.59 g Na₂CO₃ and 2.70 g H₂O to moles separately.",
        "Compute the mole ratio x = n(H₂O) / n(Na₂CO₃).",
      ],
      solution: [
        "{{n(Na_2CO_3) = 1.59/105.99 = 0.01500}} mol.",
        "{{m(H_2O) = 4.29 - 1.59 = 2.70}} g → {{n(H_2O) = 2.70/18.02 = 0.1498}} mol.",
        "{{x = 0.1498/0.01500 = 9.99 ≈ 10}} (washing soda, Na₂CO₃·10H₂O).",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "ionization-energy-hl",
      strategy: "Spectral wavelength from molar energy levels",
      question:
        "In hydrogen, the molar energies of levels {{n = 2}} and {{n = 3}} relative to {{n = ∞}} (0 kJ mol⁻¹) are −328.0 kJ mol⁻¹ and −145.8 kJ mol⁻¹ respectively. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the wavelength in **nm** (to **3 significant figures**) of the photon emitted in the {{n = 3 → n = 2}} transition.",
      answer: { type: "number", value: 657, tolerance: 4, display: "657 nm" },
      traps: [
        { spec: { type: "number", value: 365, tolerance: 4 }, feedback: "365 nm corresponds to 328.0 kJ mol⁻¹ alone — subtract the two energy levels first: ΔE = 328.0 − 145.8 = 182.2 kJ mol⁻¹!" },
      ],
      hints: [
        "Find the molar energy released: ΔE = |−145.8 − (−328.0)| = 182.2 kJ mol⁻¹.",
        "Convert 182.2 kJ mol⁻¹ into joules for ONE photon: E = (182.2 × 1000) / (6.02 × 10²³).",
        "Compute λ = hc/E in metres and multiply by 10⁹ to get nm.",
      ],
      solution: [
        "Molar energy difference: {{ΔE_{mol} = 328.0 - 145.8 = 182.2}} kJ mol⁻¹.",
        "Single-photon energy: {{E = (1.822 * 10^5)/(6.02 * 10^{23}) = 3.0266 * 10^(-19)}} J.",
        "{{λ = (6.63 * 10^(-34) * 3.00 * 10^8)/(3.0266 * 10^(-19)) = 6.572 * 10^(-7)}} m = **657 nm**.",
      ],
    },
    {
      id: "s1-particulate-matter-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "ionization-energy-hl",
      strategy: "Full shell & subshell diagnosis from successive IEs",
      marks: 6,
      question:
        "A Period 3 element Z has the following first six successive ionization energies (in kJ mol⁻¹): 787, 1577, 3232, 4356, 16 091 and 19 805. (a) Deduce the IUPAC group number, chemical identity and full ground-state electron configuration of Z. (b) Explain BOTH the dramatic jump between IE₄ and IE₅ AND the smaller step between IE₂ and IE₃. (c) Predict and justify whether the first ionization energy of Z lies between aluminium and phosphorus.",
      modelAnswer:
        "(a) The largest jump (nearly 3.7×) lies between IE₄ (4356) and IE₅ (16 091), proving Z has 4 valence electrons and belongs to Group 14. In Period 3, Group 14 is silicon (Si, Z = 14) with full ground-state configuration 1s² 2s² 2p⁶ 3s² 3p². (b) The massive jump at IE₅ occurs because the 5th electron is removed from the closer inner n = 2 main shell with significantly less shielding. The smaller step between IE₂ and IE₃ occurs within the n = 3 valence shell as ionization transitions from removing the two higher-energy 3p electrons (IE₁, IE₂) to removing a closer, lower-energy 3s electron (IE₃). (c) Yes, silicon's first IE (787 kJ mol⁻¹) sits strictly above aluminium (578) and below phosphorus (1012) because moving from Al → Si → P increases nuclear charge while electrons enter the same 3p sublevel without pairing up, so inner shielding remains constant and atomic radius shrinks.",
      markScheme: [
        {
          point: "Identifies big jump between IE₄ and IE₅ → 4 valence electrons → Group 14.",
          keywords: ["group 14", "4 valence"],
        },
        {
          point: "Identifies silicon (Si) and writes full configuration 1s² 2s² 2p⁶ 3s² 3p².",
          keywords: ["silicon", "1s² 2s² 2p⁶ 3s² 3p²", "1s2 2s2 2p6 3s2 3p2"],
        },
        {
          point: "Explains IE₄ → IE₅ jump: 5th electron removed from closer inner n = 2 shell with less shielding.",
          keywords: ["n = 2", "less shielding", "inner"],
        },
        {
          point: "Explains IE₂ → IE₃ step: transition from higher-energy 3p sublevel to lower-energy 3s sublevel within n = 3.",
          keywords: ["3p", "3s", "sublevel"],
        },
        {
          point: "Predicts IE₁(Al) < IE₁(Si) < IE₁(P).",
          keywords: ["above aluminium", "below phosphorus", "between"],
        },
        {
          point: "Justifies trend via increasing nuclear charge across 3p¹, 3p², 3p³ with constant shielding and no orbital pairing.",
          keywords: ["nuclear charge", "constant", "without pairing"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly identifies Group 14 / silicon or writes its configuration, but explanations of subshell jumps and periodic comparison are incomplete.",
          indicators: ["Finds Group 14 from big jump", "Misses the 3p → 3s subshell step"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately identifies silicon and its full configuration, explains the main-shell jump at IE₅, and gives a partial explanation of either the 3p → 3s step or the Al–Si–P trend.",
          indicators: ["Correct identity + configuration", "Main-shell jump clear", "One minor gap in subshell or Period 3 justification"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Complete, rigorous HL analysis diagnosing Group 14/Si/1s² 2s² 2p⁶ 3s² 3p², contrasting main-shell (n = 3 → 2) vs subshell (3p → 3s) jumps, and accurately justifying Al < Si < P via nuclear charge, constant shielding and unpaired 3p electrons.",
          indicators: ["Full configuration accurate", "Clearly separates main-shell jump from 3p → 3s sublevel step", "Explicitly notes no 3p pairing occurs between Al, Si and P"],
        },
      ],
      hints: [
        "Compute the ratios IE₂/IE₁, IE₃/IE₂, IE₄/IE₃, IE₅/IE₄ to spot BOTH the main jump (3.7×) and the secondary subshell step (2.05×).",
        "For (b), trace which specific sublevel each of the first 5 electrons comes out of: 3p², 3s², then 2p⁶!",
        "For (c), check whether any sublevel change or electron pairing occurs along the sequence Al (3p¹) → Si (3p²) → P (3p³).",
      ],
      commonError:
        "Missing the subshell interpretation of the IE₂ → IE₃ jump (2.05×) or claiming silicon has a dip below aluminium.",
    },
    {
      id: "s1-particulate-matter-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "particulate-nuclear-atom",
      strategy: "Interpreting diatomic molecular & doubly-charged mass-spectrum peaks",
      marks: 5,
      question:
        "A gaseous diatomic element produces five main peaks in a mass spectrometer at m/z = 35, 37, 70, 72 and 74. The peak at m/z = 35 is exactly three times as tall as the peak at m/z = 37. Identify the element, assign the exact ion formula (including charge) to every one of the five peaks, deduce the relative height ratio of the peaks at m/z = 70 : 72 : 74, and explain why a tiny peak may also be detected at m/z = 17.5.",
      modelAnswer:
        "The element is chlorine (Cl), with isotopes ³⁵Cl (75%, fraction 3/4) and ³⁷Cl (25%, fraction 1/4). The five ion assignments are: m/z = 35 is ³⁵Cl⁺; m/z = 37 is ³⁷Cl⁺; m/z = 70 is (³⁵Cl—³⁵Cl)⁺; m/z = 72 is (³⁵Cl—³⁷Cl)⁺; and m/z = 74 is (³⁷Cl—³⁷Cl)⁺. Using probability combinations: P(70) = (3/4)² = 9/16; P(72) = 2 × (3/4)(1/4) = 6/16 (accounting for both ³⁵Cl—³⁷Cl and ³⁷Cl—³⁵Cl); and P(74) = (1/4)² = 1/16, giving an exact relative height ratio of 9 : 6 : 1. A small peak at m/z = 17.5 arises from doubly charged ³⁵Cl²⁺ ions, whose mass-to-charge ratio is 35 / 2 = 17.5.",
      markScheme: [
        {
          point: "Identifies chlorine (³⁵Cl at 75% and ³⁷Cl at 25%).",
          keywords: ["chlorine", "75%", "25%"],
        },
        {
          point: "Assigns singly charged atomic and molecular ion formulas with + charges (³⁵Cl⁺, ³⁷Cl⁺, ³⁵Cl₂⁺, ³⁵Cl³⁷Cl⁺, ³⁷Cl₂⁺).",
          keywords: ["³⁵cl⁺", "35cl+", "³⁷cl⁺", "37cl+", "³⁵cl—³⁷cl"],
        },
        {
          point: "Computes probabilities including factor of 2 for m/z = 72 (both ³⁵Cl—³⁷Cl and ³⁷Cl—³⁵Cl).",
          keywords: ["9/16", "6/16", "1/16", "both"],
        },
        {
          point: "States exact relative intensity ratio 9 : 6 : 1 for m/z = 70 : 72 : 74.",
          keywords: ["9 : 6 : 1", "9:6:1"],
        },
        {
          point: "Explains m/z = 17.5 as a doubly charged ³⁵Cl²⁺ ion (35 ÷ 2 = 17.5).",
          keywords: ["doubly charged", "³⁵cl²⁺", "35cl2+", "35 / 2"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Response does not reach a standard described by the descriptors below." },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies chlorine and assigns some species without charges, OR obtains 9 : 3 : 1 by omitting the combinatorial factor of 2 for m/z = 72.",
          indicators: ["Omits + charge on ion species", "Gives 9 : 3 : 1 instead of 9 : 6 : 1"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly identifies chlorine, assigns charged ion formulas and deduces 9 : 6 : 1, with a minor gap in showing the probability reasoning or explaining m/z = 17.5.",
          indicators: ["Correct 9 : 6 : 1 ratio", "Includes ion charges", "Incomplete explanation of 17.5"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, rigorous mass-spectrometry analysis: identifies Cl, writes all five charged ion formulas, derives 9 : 6 : 1 clearly with both permutations of 72, and explains ³⁵Cl²⁺ at m/z = 17.5.",
          indicators: ["All five charged species accurate", "Clear combinatorial derivation of 9 : 6 : 1", "Accurate ³⁵Cl²⁺ (35/2) explanation for 17.5"],
        },
      ],
      hints: [
        "Match atomic masses 35 and 37 (in a 3 : 1 ratio) to a familiar Group 17 halogen!",
        "Remember EVERY detected peak in a mass spectrometer must be a positively charged ion (+), and there are TWO ways to build mass 72.",
        "How can an isotope of mass 35 appear at m/z = 17.5? Think about the denominator z in m/z!",
      ],
      commonError:
        "Forgetting to include the + charge on ion formulas, or writing a 9 : 3 : 1 ratio instead of 9 : 6 : 1 by missing the second permutation of mass 72!",
    },
  ],
};
