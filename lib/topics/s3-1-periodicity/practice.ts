import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 Qs: 6 short + 4 balanced MCQ across all 4 sections)
  // ===========================================================================
  quiz: [
    {
      id: "s3-1-periodicity-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "periodic-trends-nuclear-charge",
      question: "Which Period 3 element has the **smallest** covalent atomic radius?",
      options: ["Chlorine (`Cl`)", "Sodium (`Na`)", "Silicon (`Si`)", "Magnesium (`Mg`)"],
      answerIndex: 0,
      explanation:
        "Across Period 3, effective nuclear charge rises while electrons enter the same `n = 3` shell, pulling valence electrons steadily closer from `Na` (`160 pm`) to `Cl` (`100 pm`).",
      hints: ["How does atomic radius change moving from left to right across a period?"],
    },
    {
      id: "s3-1-periodicity-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "group-trends-period3-oxides",
      question: "Deduce the oxidation state of manganese in the permanganate ion, `MnO₄⁻`. Enter the integer value.",
      answer: { type: "number", value: 7, display: "+7" },
      traps: [
        { spec: { type: "number", value: 8 }, feedback: "Remember the ion has a `−1` overall charge, not `0`: `x + 4(−2) = −1`." },
        { spec: { type: "number", value: -7 }, feedback: "Check the sign: manganese is oxidized to a positive oxidation state (`+7`)." },
      ],
      solution: [
        "Oxygen has its standard oxidation state of `−2`.",
        "Set the sum equal to the overall ion charge: `x + 4(−2) = −1`.",
        "Solve: `x − 8 = −1` → `x = +7`.",
      ],
      hints: ["Set `x + 4(−2)` equal to the overall charge of `MnO₄⁻`."],
    },
    {
      id: "s3-1-periodicity-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "group-trends-period3-oxides",
      question: "Which Period 3 oxide forms an **alkaline** solution of `pH ≈ 13–14` when added to water?",
      options: [
        "Silicon dioxide (`SiO₂`)",
        "Sodium oxide (`Na₂O`)",
        "Aluminium oxide (`Al₂O₃`)",
        "Sulfur trioxide (`SO₃`)",
      ],
      answerIndex: 1,
      explanation:
        "Ionic `Na₂O` reacts completely with water (`Na₂O + H₂O → 2NaOH`) to produce a strongly alkaline solution. `Al₂O₃` and `SiO₂` are insoluble, while `SO₃` produces strongly acidic `H₂SO₄`.",
      hints: ["Which Period 3 oxide contains free `O²⁻` ions that react with water to produce `OH⁻(aq)`?"],
    },
    {
      id: "s3-1-periodicity-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "periodic-trends-nuclear-charge",
      question:
        "In the Period 3 isoelectronic series `P³⁻`, `S²⁻`, and `Cl⁻`, each ion contains `18` electrons. What is the atomic number (`Z`) of the **smallest** ion in this series?",
      answer: { type: "number", value: 17, display: "17" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "`Z = 15` (`P³⁻`) has the fewest protons pulling 18 electrons, making it the LARGEST ion!" },
      ],
      solution: [
        "All three ions have 18 electrons (`1s² 2s² 2p⁶ 3s² 3p⁶`) and identical shielding.",
        "The smallest ion has the greatest nuclear charge attracting those 18 electrons: `Cl⁻` (`Z = 17`).",
      ],
      hints: [
        "Compare the proton numbers of `P` (15), `S` (16), and `Cl` (17).",
        "More protons pulling the same number of electrons shrinks the ion.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "group-trends-period3-oxides",
      question:
        "Deduce the oxidation state of oxygen in hydrogen peroxide, `H₂O₂`. Include the sign.",
      answer: { type: "number", value: -1, display: "−1" },
      traps: [
        { spec: { type: "number", value: -2 }, feedback: "`−2` is oxygen's normal state, but `H₂O₂` is a peroxide: solve `2(+1) + 2x = 0`." },
      ],
      solution: [
        "Hydrogen bonded to a non-metal is `+1`.",
        "Charge balance for neutral `H₂O₂`: `2(+1) + 2x = 0` → `2x = −2` → `x = −1`.",
      ],
      hints: [
        "Assign hydrogen `+1` first.",
        "Solve `2(+1) + 2x = 0` for the oxidation state `x` of each oxygen atom.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "transition-elements-complexes-hl",
      question: "Which d-block ion has a **completely full** `3d¹⁰` sublevel and is therefore colourless and diamagnetic?",
      options: [
        "`Cu²⁺` (`Z = 29`)",
        "`Fe³⁺` (`Z = 26`)",
        "`Zn²⁺` (`Z = 30`)",
        "`Ti³⁺` (`Z = 22`)",
      ],
      answerIndex: 2,
      explanation:
        "Removing the two `4s` electrons from `Zn` (`[Ar] 3d¹⁰ 4s²`) leaves `Zn²⁺` (`[Ar] 3d¹⁰`), with all ten `3d` electrons paired and zero vacant `3d` orbitals.",
      hints: [
        "Remove `4s` electrons before `3d` electrons for every cation.",
        "Find which ion ends in `3d¹⁰`.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "transition-elements-complexes-hl",
      question:
        "Deduce the oxidation state of iron in the hexacyanoferrate complex ion `[Fe(CN)₆]⁴⁻`. Enter the integer value.",
      answer: { type: "number", value: 2, display: "+2" },
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "Check the overall charge: `[Fe(CN)₆]⁴⁻` has charge `−4`, giving `x + 6(−1) = −4` → `+2` (whereas `[Fe(CN)₆]³⁻` has `Fe = +3`)." },
        { spec: { type: "number", value: -4 }, feedback: "`−4` is the charge of the entire complex ion, not the oxidation state of iron." },
      ],
      solution: [
        "Each cyanide ligand (`CN⁻`) carries a `−1` charge.",
        "Charge balance: `x + 6(−1) = −4` → `x − 6 = −4` → `x = +2`.",
      ],
      hints: [
        "Remember that each `CN⁻` ligand has charge `−1`.",
        "Set `x + 6(−1) = −4` and solve for `x`.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "transition-elements-complexes-hl",
      question:
        "Ethane-1,2-diamine (`en`) is a bidentate ligand. State the **coordination number** of cobalt in `[Co(en)₃]³⁺`.",
      answer: { type: "number", value: 6, display: "6" },
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "There are 3 ligand molecules, but each `en` forms TWO coordinate bonds (`3 × 2 = 6`)." },
      ],
      solution: [
        "Coordination number equals the total number of coordinate bonds to the central metal ion.",
        "Each of the 3 bidentate `en` ligands donates 2 lone pairs → `CN = 3 × 2 = 6`.",
      ],
      hints: [
        "Coordination number counts coordinate bonds, not ligand molecules.",
        "Multiply the number of `en` ligands by the denticity of a bidentate ligand.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "Which ligand in the IB spectrochemical series produces the **largest** crystal field splitting energy (`ΔE`) for a given octahedral `Cr³⁺` complex?",
      options: ["`I⁻`", "`Cl⁻`", "`H₂O`", "`CN⁻`"],
      answerIndex: 3,
      explanation:
        "In the spectrochemical series `I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CO ≈ CN⁻`, cyanide (`CN⁻`) is the strongest-field ligand listed and induces the largest `ΔE`.",
      hints: [
        "Recall the ordering of ligands from weak-field halides to strong-field `CO`/`CN⁻`.",
        "Stronger-field ligands lie further to the right of the spectrochemical series.",
      ],
    },
    {
      id: "s3-1-periodicity-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "An aqueous transition-metal complex strongly absorbs **red** light around `670 nm`. Using the IB colour wheel, state the **observed** colour of the solution.",
      answer: { type: "text", accept: ["green"], display: "green" },
      traps: [
        { spec: { type: "text", accept: ["red"] }, feedback: "Red is the ABSORBED wavelength — the eye sees the COMPLEMENTARY colour opposite red on the wheel!" },
      ],
      solution: [
        "On the IB 6-sector colour wheel, red (`647–700 nm`) sits directly opposite **green** (`491–575 nm`).",
        "Absorbing red light leaves complementary **green** light transmitted to the observer.",
      ],
      hints: [
        "Identify the colour directly opposite red on the IB colour wheel.",
        "Remember the three complementary pairs: Red–Green, Orange–Blue, Yellow–Violet.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (2 papers × 15 Qs each = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: SL Core Periodicity, Groups & Period 3 Oxides (15 Qs: 8 short + 7 written)
    // -------------------------------------------------------------------------
    {
      id: "s3-1-periodicity-p1",
      title: "Structured Practice Paper 1 · SL Periodicity, Groups & Oxides",
      level: "SL",
      questions: [
        {
          id: "s3-1-periodicity-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "periodic-trends-nuclear-charge",
          question:
            "Using the simple approximation `Z_eff ≈ Z − S` (where `S` is the number of inner-shell core electrons), calculate the approximate effective nuclear charge felt by a `3p` valence electron in a chlorine atom (`Z = 17`).",
          answer: { type: "number", value: 7, display: "+7" },
          traps: [
            { spec: { type: "number", value: 17 }, feedback: "`17` is the full nuclear charge `Z`; subtract the `10` core electrons (`1s² 2s² 2p⁶`)." },
            { spec: { type: "number", value: 10 }, feedback: "`10` is the core shielding `S`, not `Z − S`." },
          ],
          solution: [
            "Chlorine (`Z = 17`) has configuration `1s² 2s² 2p⁶ 3s² 3p⁵`, so `S = 2 + 8 = 10` inner-shell electrons.",
            "`Z_eff ≈ Z − S = 17 − 10 = +7`.",
          ],
          hints: [
            "Count how many core electrons occupy the `n = 1` and `n = 2` shells of `Cl`.",
            "Subtract that core count `S` from `Z = 17`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "periodic-trends-nuclear-charge",
          question:
            "Explain why a magnesium cation (`Mg²⁺`, `72 pm`) is considerably smaller than a magnesium atom (`Mg`, `140 pm`), whereas a sulfide anion (`S²⁻`, `184 pm`) is considerably larger than a sulfur atom (`S`, `104 pm`). [3]",
          modelAnswer:
            "`Mg²⁺` loses its entire outer `n = 3` energy level, leaving only two occupied shells (`1s² 2s² 2p⁶`) and a higher proton-to-electron ratio that pulls the remaining electrons closer to the nucleus. Conversely, `S²⁻` adds two electrons into the same `n = 3` valence shell without increasing nuclear charge, increasing inter-electronic repulsion and expanding the electron cloud.",
          markScheme: [
            {
              point: "`Mg²⁺` loses the entire outer (`n = 3`) shell so it has fewer occupied energy levels (two shells instead of three).",
              keywords: ["energy level", "fewer", "two occupied", "loses its entire", "shell"],
            },
            {
              point: "In `Mg²⁺`, the same `12` protons attract fewer electrons (higher proton-to-electron ratio), pulling electrons closer.",
              keywords: ["proton-to-electron", "pulls", "closer", "remaining electrons"],
            },
            {
              point: "In `S²⁻`, added electrons enter the same shell with unchanged nuclear charge, increasing electron–electron repulsion.",
              keywords: ["inter-electronic repulsion", "electron repulsion", "electron-electron repulsion", "expanding"],
            },
          ],
          hints: [
            "Compare the number of occupied principal shells in `Mg` (`2,8,2`) versus `Mg²⁺` (`2,8`).",
            "Now compare `S` (`2,8,6`) versus `S²⁻` (`2,8,8`): did the shell count change, or did electron repulsion change?",
          ],
          commonError:
            "Saying '`S²⁻` gains an extra energy level' — both `S` and `S²⁻` have three occupied shells (`n = 3`); the expansion comes from increased inter-electronic repulsion at constant nuclear charge.",
        },
        {
          id: "s3-1-periodicity-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "group-trends-period3-oxides",
          question:
            "Deduce the oxidation state of chlorine in the chlorate ion, `ClO₃⁻`. Enter the integer value.",
          answer: { type: "number", value: 5, display: "+5" },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Don't forget the `−1` charge on `ClO₃⁻`: `x + 3(−2) = −1` gives `+5`, not `+6`." },
            { spec: { type: "number", value: 7 }, feedback: "`+7` is chlorine in `ClO₄⁻`; `ClO₃⁻` has only three oxygens." },
          ],
          solution: [
            "Assign oxygen `−2`: `x + 3(−2) = −1`.",
            "`x − 6 = −1` → `x = +5`.",
          ],
          hints: [
            "Assign oxygen `−2`.",
            "Set the sum equal to the ion charge `−1`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "periodic-trends-nuclear-charge",
          question:
            "The first ionization energies of `Na`, `Mg`, `Al`, `P`, and `S` are `496`, `738`, `578`, `1012`, and `1000 kJ mol⁻¹` respectively. Explain both the overall upward trend across Period 3 AND the two localized decreases (`Mg → Al` and `P → S`). [4]",
          modelAnswer:
            "Overall across Period 3, proton number increases while valence electrons enter the same third principal shell, so inner-shell shielding stays nearly constant; the resulting rise in effective nuclear charge pulls valence electrons closer and requires more energy to remove one. At aluminium (`[Ne] 3s² 3p¹`), the removed electron sits in a higher-energy `3p` sublevel that is additionally shielded by the filled `3s²` sublevel, lowering `IE₁` below magnesium (`3s²`). At sulfur (`[Ne] 3s² 3p⁴`), two electrons share one `3p` orbital, so spin–pair repulsion makes removing a paired electron easier than removing an unpaired `3p` electron from phosphorus (`3p³`).",
          markScheme: [
            {
              point: "Overall increase: nuclear charge rises across Period 3 while electrons enter the same shell (constant shielding), increasing effective nuclear charge.",
              keywords: ["effective nuclear charge", "constant", "same third", "proton number increases"],
            },
            {
              point: "`Mg → Al` dip: aluminium removes an electron from a higher-energy `3p` sublevel (rather than `3s`).",
              keywords: ["higher-energy 3p", "3p sublevel", "higher energy"],
            },
            {
              point: "`Mg → Al` dip: `3p` electron is partially shielded by the filled `3s²` sublevel.",
              keywords: ["shielded by the filled 3s", "3s2 sublevel", "shielded by 3s"],
            },
            {
              point: "`P → S` dip: sulfur removes a paired electron experiencing spin–pair repulsion in a doubly occupied `3p` orbital.",
              keywords: ["spin-pair repulsion", "paired electron", "doubly occupied"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not explain the overall trend or either anomaly accurately.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Explains the general Period 3 trend using effective nuclear charge OR partially explains one anomaly with minor orbital omissions.",
              indicators: ["Mentions rising nuclear charge and constant shielding", "Identifies 3p sublevel or pairing vaguely"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly explains the general trend via Z_eff AND accounts accurately for both the 3p¹ sublevel jump at Al and spin–pair repulsion in 3p⁴ at S.",
              indicators: ["Links constant core shielding to stronger attraction", "Distinguishes sublevel shielding (Al) from orbital spin–pair repulsion (S)"],
            },
          ],
          hints: [
            "Split your answer cleanly into 3 parts: general trend, `Mg → Al`, and `P → S`.",
            "Cite exact sublevels (`3s²`, `3p¹`, `3p³`, `3p⁴`) and name the repulsion acting inside sulfur's paired `3p` orbital.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "group-trends-period3-oxides",
          question:
            "A student adds `1.24 g` of solid sodium oxide (`Na₂O`, `M = 61.98 g mol⁻¹`) to distilled water and makes the solution up to `0.400 dm³` at `298 K`. Assuming complete reaction (`Na₂O + H₂O → 2NaOH`), calculate the `pH` of the resulting solution to 1 decimal place.",
          answer: { type: "number", value: 13.0, tolerance: 0.1, display: "13.0" },
          traps: [
            { spec: { type: "number", value: 12.7, tolerance: 0.08 }, feedback: "Don't forget the 1:2 stoichiometry: `1 mol Na₂O` produces `2 mol NaOH` (`[OH⁻] = 0.100 mol dm⁻³`, not `0.050`)." },
            { spec: { type: "number", value: 1.0, tolerance: 0.1 }, feedback: "`1.0` is the `pOH`! Subtract from `14.0` to get `pH = 13.0`." },
          ],
          solution: [
            "Moles of `Na₂O`: {{n(Na_2O) = 1.24 / 61.98 = 0.0200}} `mol`.",
            "From `Na₂O + H₂O → 2NaOH`, moles of `OH⁻ = 2 × 0.0200 = 0.0400 mol`.",
            "Concentration: {{[OH^-] = 0.0400 / 0.400 = 0.100}} `mol dm⁻³`.",
            "`pOH = −log₁₀(0.100) = 1.00` → `pH = 14.00 − 1.00 = 13.0`.",
          ],
          hints: [
            "Calculate `n(Na₂O) = m / M`, then double it for `n(NaOH)`.",
            "Find `[OH⁻] = n / V`, compute `pOH = −log[OH⁻]`, and convert via `pH = 14 − pOH`.",
          ],
          commonError: "Forgetting that one formula unit of `Na₂O` yields TWO moles of `OH⁻` in water.",
        },
        {
          id: "s3-1-periodicity-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "group-trends-period3-oxides",
          question:
            "Deduce the oxidation state of carbon in the ethanedioate (oxalate) ion, `C₂O₄²⁻`. Enter the integer value.",
          answer: { type: "number", value: 3, display: "+3" },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "Remember `C₂O₄²⁻` has charge `−2`: `2x + 4(−2) = −2` gives `2x = +6` → `x = +3`." },
            { spec: { type: "number", value: 6 }, feedback: "Divide by `2` because there are two carbon atoms in `C₂O₄²⁻`!" },
          ],
          solution: [
            "Let `x` be the oxidation state of `C` and assign `O = −2`.",
            "`2x + 4(−2) = −2` → `2x − 8 = −2` → `2x = +6` → `x = +3`.",
          ],
          hints: [
            "Write `2x + 4(−2) = −2`.",
            "Don't forget to divide by the `2` carbon atoms at the end.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Compare and contrast",
          guideRef: "group-trends-period3-oxides",
          question:
            "Compare and contrast the reactivity trends going down Group 1 (alkali metals) and down Group 17 (halogens), explaining the opposite direction in terms of atomic structure. [3]",
          modelAnswer:
            "Moving down both groups, atomic radius and inner-shell shielding increase, weakening the nucleus's electrostatic attraction for outer electrons. Because Group 1 metals react by losing their outer electron (`IE₁` decreases), reactivity increases down Group 1. Because Group 17 halogens react by gaining an electron into their valence shell, oxidizing power decreases down Group 17.",
          markScheme: [
            {
              point: "Similarity in atomic structure: both groups show increasing atomic radius and greater core shielding going down the group.",
              keywords: ["atomic radius", "shielding", "electrostatic attraction"],
            },
            {
              point: "Group 1 reactivity increases down the group because losing a valence electron becomes easier (`IE₁` decreases).",
              keywords: ["losing", "increases down group 1", "ie1 decreases"],
            },
            {
              point: "Group 17 reactivity decreases down the group because attracting/gaining an incoming electron becomes harder.",
              keywords: ["gaining", "decreases down group 17", "oxidizing power"],
            },
          ],
          hints: [
            "Start with the structural factor shared by BOTH groups as you move down.",
            "Then contrast electron LOSS (Group 1) with electron GAIN (Group 17).",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "group-trends-period3-oxides",
          question:
            "Calculate the minimum volume, in `cm³`, of `2.00 mol dm⁻³ HCl(aq)` required to react completely with `5.10 g` of solid aluminium oxide (`Al₂O₃`, `M = 101.96 g mol⁻¹`) according to `Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)`. Give your answer to 3 significant figures.",
          answer: { type: "number", value: 150, tolerance: 1.5, display: "150 cm³" },
          traps: [
            { spec: { type: "number", value: 0.15, tolerance: 0.005 }, feedback: "Watch the unit! `0.150 dm³` equals `150 cm³` (multiply by `1000`)." },
            { spec: { type: "number", value: 25, tolerance: 1 }, feedback: "Remember the 1:6 molar ratio between `Al₂O₃` and `HCl`." },
          ],
          solution: [
            "{{n(Al_2O_3) = 5.10 / 101.96 = 0.0500}} `mol`.",
            "Mole ratio `Al₂O₃ : HCl = 1 : 6`, so `n(HCl) = 6 × 0.0500 = 0.300 mol`.",
            "{{V(HCl) = 0.300 / 2.00 = 0.150}} `dm³ = 150 cm³`.",
          ],
          hints: [
            "Convert `5.10 g` of `Al₂O₃` into moles first.",
            "Multiply by `6` for `n(HCl)`, divide by `2.00 mol dm⁻³`, and convert `dm³` to `cm³`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "group-trends-period3-oxides",
          question:
            "Describe and explain the change in acid–base character of the Period 3 oxides `Na₂O`, `Al₂O₃`, and `SO₃`, including balanced chemical equations showing how `Na₂O` and `SO₃` react with water and how `Al₂O₃` reacts with `NaOH(aq)`. [4]",
          modelAnswer:
            "Across Period 3, electronegativity difference with oxygen decreases, shifting oxides from giant ionic basic `Na₂O` through amphoteric `Al₂O₃` to covalent molecular acidic `SO₃`. Basic `Na₂O` releases `O²⁻` ions that accept protons from water: `Na₂O(s) + H₂O(l) → 2NaOH(aq)`. Acidic `SO₃` forms strong sulfuric acid: `SO₃(l) + H₂O(l) → H₂SO₄(aq)`. Amphoteric `Al₂O₃` acts as an acid toward strong alkali: `Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)`.",
          markScheme: [
            {
              point: "Correct trend linked to bonding: ionic basic (`Na₂O`) → amphoteric (`Al₂O₃`) → covalent acidic (`SO₃`) as electronegativity difference decreases.",
              keywords: ["amphoteric", "ionic", "covalent", "electronegativity"],
            },
            {
              point: "Balanced equation for `Na₂O` with water: `Na₂O + H₂O → 2NaOH`.",
              keywords: ["2naoh"],
            },
            {
              point: "Balanced equation for `SO₃` with water: `SO₃ + H₂O → H₂SO₄`.",
              keywords: ["h2so4", "h₂so₄", "sulfuric acid"],
            },
            {
              point: "Balanced equation for `Al₂O₃` with `NaOH`: `Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄` (or ionic `[Al(OH)₄]⁻`).",
              keywords: ["2naal(oh)4", "2naal(oh)₄", "al(oh)4", "al(oh)₄"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "No valid acid–base trend or balanced equations provided.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States basic → amphoteric → acidic trend and writes at least one balanced water reaction correctly.",
              indicators: ["Balances `Na₂O` or `SO₃` with water", "Missing `Al₂O₃ + NaOH` stoichiometry or bonding explanation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Links bonding shift (`Δχ`) cleanly to basic → amphoteric → acidic behaviour and writes all three equations accurately balanced.",
              indicators: ["Includes `2NaOH`, `H₂SO₄`, and `2NaAl(OH)₄` (or `[Al(OH)₄]⁻`)"],
            },
          ],
          hints: [
            "Connect the acid–base shift to the bonding shift across Period 3 (`Δχ` decreases).",
            "Check coefficients carefully: `2NaOH` and `2NaOH + 3H₂O → 2NaAl(OH)₄`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "group-trends-period3-oxides",
          question:
            "Deduce the oxidation state of nitrogen in the ammonium ion (`NH₄⁺`) AND in the nitrate ion (`NO₃⁻`). Enter the two integers separated by a comma (in that order).",
          answer: { type: "list", values: [-3, 5], ordered: true, display: "−3, +5" },
          traps: [
            { spec: { type: "list", values: [5, -3], ordered: true }, feedback: "Check the requested order: `NH₄⁺` first (`−3`), then `NO₃⁻` (`+5`)." },
          ],
          solution: [
            "In `NH₄⁺`: `x + 4(+1) = +1` → `x = −3`.",
            "In `NO₃⁻`: `y + 3(−2) = −1` → `y = +5`.",
          ],
          hints: [
            "Solve `x + 4(+1) = +1` for `NH₄⁺`.",
            "Solve `y + 3(−2) = −1` for `NO₃⁻`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "group-trends-period3-oxides",
          question:
            "When aqueous chlorine is added to colourless aqueous potassium iodide, the mixture turns brown. Write the balanced net ionic equation and explain the redox roles of both reactants. [3]",
          modelAnswer:
            "The balanced net ionic equation is `Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)`. Chlorine is reduced from oxidation state `0` to `−1` (gaining electrons) and acts as the oxidizing agent, while iodide is oxidized from `−1` to `0` (losing electrons) to form brown iodine (`I₂`) and acts as the reducing agent. Chlorine oxidizes iodide because chlorine has a smaller atomic radius, less shielding, and stronger nuclear attraction for an incoming electron than iodine.",
          markScheme: [
            {
              point: "Correct balanced net ionic equation: `Cl₂ + 2I⁻ → 2Cl⁻ + I₂`.",
              keywords: ["2cl-", "2cl⁻", "cl2 + 2i", "cl₂(aq) + 2i⁻"],
            },
            {
              point: "Identifies `Cl₂` as reduced (`0 → −1`, oxidizing agent) and `I⁻` as oxidized (`−1 → 0`, reducing agent).",
              keywords: ["oxidizing agent", "reducing agent", "reduced"],
            },
            {
              point: "Explains via Group 17 trend: `Cl` has smaller atomic radius / less shielding and attracts an incoming electron more strongly than `I`.",
              keywords: ["smaller atomic radius", "less shielding", "incoming electron"],
            },
          ],
          hints: [
            "Omit spectator `K⁺` ions for a net ionic equation.",
            "Include BOTH oxidation-state changes AND why chlorine is a stronger oxidizing agent than iodine.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "group-trends-period3-oxides",
          question:
            "A `7.10 g` sample of `P₄O₁₀` (`M = 283.88 g mol⁻¹`) is dissolved completely in excess water (`P₄O₁₀ + 6H₂O → 4H₃PO₄`). Calculate the moles of `NaOH(aq)` required to completely neutralize all the `H₃PO₄` formed to `Na₃PO₄(aq)`. Give your answer to 3 significant figures.",
          answer: { type: "number", value: 0.300, tolerance: 0.005, display: "0.300 mol" },
          traps: [
            { spec: { type: "number", value: 0.100, tolerance: 0.005 }, feedback: "`0.100 mol` is the moles of `H₃PO₄` — remember `H₃PO₄` is triprotic (`3 mol NaOH` per `1 mol H₃PO₄`)!" },
            { spec: { type: "number", value: 0.025, tolerance: 0.002 }, feedback: "`0.0250 mol` is `n(P₄O₁₀)`; multiply by `4` for `H₃PO₄` and by `3` for `NaOH` (`× 12`)." },
          ],
          solution: [
            "{{n(P_4O_10) = 7.10 / 283.88 = 0.0250}} `mol`.",
            "From `P₄O₁₀ + 6H₂O → 4H₃PO₄`, `n(H₃PO₄) = 4 × 0.0250 = 0.100 mol`.",
            "From `H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O`, `n(NaOH) = 3 × 0.100 = 0.300 mol`.",
          ],
          hints: [
            "Find `n(P₄O₁₀)` first, then use the `1 : 4` ratio to get `n(H₃PO₄)`.",
            "How many acidic protons does each `H₃PO₄` molecule donate to form `Na₃PO₄`?",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "group-trends-period3-oxides",
          question:
            "Coal combustion releases `SO₂(g)` and internal combustion engines emit `NO₂(g)`. State two balanced equations showing how these gases generate acid deposition (`pH < 5.6`) and state one chemical consequence of acid rain on limestone buildings. [3]",
          modelAnswer:
            "Sulfur dioxide dissolves in rainwater to form sulfurous acid: `SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)` (or oxidizes to `SO₃`, giving `SO₃ + H₂O → H₂SO₄`). Nitrogen dioxide disproportionates in rainwater: `2NO₂(g) + H₂O(l) → HNO₂(aq) + HNO₃(aq)`. Acid rain corrodes calcium carbonate limestone structures via neutralization (`CaCO₃(s) + H₂SO₄(aq) → CaSO₄(s) + H₂O(l) + CO₂(g)`), eroding statues and masonry.",
          markScheme: [
            {
              point: "Balanced equation for sulfur oxide with water: `SO₂ + H₂O ⇌ H₂SO₃` (or `SO₃ + H₂O → H₂SO₄`).",
              keywords: ["h2so3", "h₂so₃", "h2so4", "h₂so₄"],
            },
            {
              point: "Balanced equation for `NO₂` with water: `2NO₂ + H₂O → HNO₂ + HNO₃`.",
              keywords: ["hno3", "hno₃", "hno2", "hno₂"],
            },
            {
              point: "Chemical impact on limestone: reacts with `CaCO₃` (carbonate) causing corrosion / erosion and releasing `CO₂`.",
              keywords: ["caco3", "caco₃", "calcium carbonate", "corrodes", "eroding"],
            },
          ],
          hints: [
            "Remember `NO₂` forms a mixture of nitrous (`HNO₂`) and nitric (`HNO₃`) acids with water.",
            "Limestone is mainly `CaCO₃`; what happens when acid meets a metal carbonate?",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "group-trends-period3-oxides",
          question:
            "In the disproportionation reaction `Cl₂(aq) + 2OH⁻(aq) → Cl⁻(aq) + ClO⁻(aq) + H₂O(l)`, deduce the oxidation state of chlorine in `Cl⁻` and in `ClO⁻`. Enter the two integers separated by a comma (in that order).",
          answer: { type: "list", values: [-1, 1], ordered: true, display: "−1, +1" },
          traps: [
            { spec: { type: "list", values: [1, -1], ordered: true }, feedback: "Watch the order: `Cl⁻` is `−1` first, then `ClO⁻` is `+1`." },
          ],
          solution: [
            "Monoatomic chloride ion `Cl⁻` has oxidation state `−1`.",
            "In `ClO⁻`, `x + (−2) = −1` → `x = +1`.",
          ],
          hints: [
            "A monoatomic ion's oxidation state equals its charge.",
            "For `ClO⁻`, solve `x − 2 = −1`.",
          ],
        },
        {
          id: "s3-1-periodicity-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          marks: 4,
          commandTerm: "Discuss",
          guideRef: "periodic-trends-nuclear-charge",
          question:
            "Discuss why fluorine (`F`) has the highest Pauling electronegativity (`4.0`) of all elements, yet a LESS exothermic first electron affinity (`−328 kJ mol⁻¹`) than chlorine (`−349 kJ mol⁻¹`). [4]",
          modelAnswer:
            "Electronegativity measures an atom's ability to attract a shared bonding pair of electrons in a covalent bond. Fluorine has the highest effective nuclear charge at the smallest covalent radius (`n = 2`, only `2` core shielding electrons), pulling bonding electrons closest to its nucleus to achieve `χ = 4.0`. First electron affinity measures the enthalpy change when an isolated gaseous atom accepts a free electron (`X(g) + e⁻ → X⁻(g)`). Because fluorine's `2p` valence sublevel is extremely small and already holds seven densely packed electrons, an incoming electron experiences strong inter-electronic repulsion that partially offsets nuclear attraction, making `EA₁(F)` less exothermic than in chlorine's larger `3p` shell.",
          markScheme: [
            {
              point: "Defines electronegativity as attraction for a shared pair of electrons in a covalent bond.",
              keywords: ["shared", "covalent bond", "bonding pair"],
            },
            {
              point: "Links fluorine's maximum `χ` to its very small radius and minimal inner-shell shielding (`2` core electrons).",
              keywords: ["smallest", "small radius", "core shielding", "minimal"],
            },
            {
              point: "Distinguishes `EA₁` as an isolated gaseous atom gaining an electron (`X(g) + e⁻ → X⁻(g)`).",
              keywords: ["isolated gaseous", "gaseous atom", "x(g)"],
            },
            {
              point: "Explains `EA₁(F) < EA₁(Cl)` magnitude via strong inter-electronic repulsion in fluorine's compact `2p` sublevel compared with chlorine's larger `3p` shell.",
              keywords: ["inter-electronic repulsion", "compact 2p", "densely packed", "larger 3p"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Conflates electronegativity and electron affinity without valid electrostatic reasoning.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly explains either fluorine's high electronegativity OR the `2p` repulsion effect in electron affinity.",
              indicators: ["Mentions small radius/shielding for F", "Omits bond vs isolated-atom distinction"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly distinguishes covalent-bond electronegativity from gaseous-atom electron affinity and explains both using nuclear attraction vs compact `2p` electron repulsion.",
              indicators: ["Contrasts `2p` electron density in `F` with larger `3p` shell in `Cl`"],
            },
          ],
          hints: [
            "Start by contrasting what electronegativity and first electron affinity each measure physically.",
            "Then explain why a tiny `2p` shell HELPS bond attraction (`χ`) yet slightly PENALIZES adding a full extra electron (`EA₁`).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: SL–HL Transition Metals, Complexes & Crystal Field Theory (15 Qs: 8 short + 7 written)
    // -------------------------------------------------------------------------
    {
      id: "s3-1-periodicity-p2",
      title: "Structured Practice Paper 2 · HL Transition Metals & Crystal Field",
      level: "HL",
      questions: [
        {
          id: "s3-1-periodicity-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "transition-elements-complexes-hl",
          question:
            "How many `3d` electrons are present in a `V³⁺` ion (atomic number of vanadium, `Z = 23`)?",
          answer: { type: "number", value: 2, display: "2" },
          traps: [
            { spec: { type: "number", value: 0 }, feedback: "Remove the two `4s` electrons first (`[Ar] 3d³ 4s²` → `[Ar] 3d²`), NOT all three `3d` electrons!" },
            { spec: { type: "number", value: 3 }, feedback: "`3` is the `3d` count in neutral `V` (`[Ar] 3d³ 4s²`); removing 3 electrons leaves `3d²`." },
          ],
          solution: [
            "Neutral vanadium (`Z = 23`): `[Ar] 3d³ 4s²`.",
            "Remove both `4s` electrons first, then one `3d` electron → `V³⁺` is `[Ar] 3d²` (`2` electrons in `3d`).",
          ],
          hints: [
            "Write neutral `V` (`Z = 23`) as `[Ar] 3d³ 4s²`.",
            "Always empty `4s` before touching `3d`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "transition-elements-complexes-hl",
          question:
            "Deduce the overall charge `q` of the octahedral complex ion `[Fe(H₂O)₅(SCN)]^q`, given that iron is in the `+3` oxidation state and `SCN⁻` is a `−1` monodentate ligand. Enter the signed integer.",
          answer: { type: "number", value: 2, display: "+2" },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "Remember `SCN⁻` carries a `−1` charge, reducing `+3` to `+2`." },
            { spec: { type: "number", value: 4 }, feedback: "Add `−1`, do not subtract `−1`: `(+3) + 5(0) + (−1) = +2`." },
          ],
          solution: [
            "`q = OS(Fe) + 5 × q(H₂O) + 1 × q(SCN⁻)`.",
            "`q = (+3) + 5(0) + (−1) = +2` → `[Fe(H₂O)₅(SCN)]²⁺` (blood-red complex!).",
          ],
          hints: [
            "`H₂O` is neutral (`0`) and `SCN⁻` is `−1`.",
            "Add `(+3) + 5(0) + (−1)`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 3,
          commandTerm: "Distinguish",
          guideRef: "transition-elements-complexes-hl",
          question:
            "Distinguish between a `d`-block element and a transition element, and explain using electron configurations why `Cu` is a transition element whereas `Zn` is not. [3]",
          modelAnswer:
            "A `d`-block element has its highest-energy electron entering a `d` sublevel, whereas a transition element must form at least one stable cation (or atom) with an incomplete `d` sublevel (`d¹–d⁹`). Copper (`[Ar] 3d¹⁰ 4s¹`) forms `Cu²⁺` (`[Ar] 3d⁹`), which possesses a partially filled `3d` sublevel and qualifies as a transition element. Zinc (`[Ar] 3d¹⁰ 4s²`) forms only `Zn²⁺` (`[Ar] 3d¹⁰`), so both the neutral atom and ion have a completely filled `3d¹⁰` sublevel.",
          markScheme: [
            {
              point: "Defines transition element via an incomplete / partially filled `d` sublevel (`d¹–d⁹`) in the atom or a stable cation.",
              keywords: ["incomplete", "partially filled", "d1-d9", "d¹–d⁹"],
            },
            {
              point: "Shows `Cu²⁺` has `[Ar] 3d⁹` (incomplete `3d` sublevel), qualifying copper.",
              keywords: ["3d9", "3d⁹", "cu2+", "cu²⁺"],
            },
            {
              point: "Shows both `Zn` (`3d¹⁰ 4s²`) and `Zn²⁺` (`3d¹⁰`) have a completely filled `3d` sublevel.",
              keywords: ["3d10", "3d¹⁰", "completely filled", "full 3d"],
            },
          ],
          hints: [
            "State the exact IB criterion (`incomplete d sublevel`).",
            "Write exact `3d` configurations for `Cu²⁺`, `Zn`, and `Zn²⁺`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "transition-elements-complexes-hl",
          question:
            "Deduce the oxidation state of chromium in the complex ion `[Cr(C₂O₄)₂(H₂O)₂]⁻`, where `C₂O₄²⁻` is the bidentate ethanedioate ligand (`−2`). Enter the integer value.",
          answer: { type: "number", value: 3, display: "+3" },
          traps: [
            { spec: { type: "number", value: 1 }, feedback: "Each `C₂O₄²⁻` ligand has charge `−2` (not `−1`): `x + 2(−2) + 2(0) = −1`." },
            { spec: { type: "number", value: 5 }, feedback: "Overall charge is `−1`, not `+1`: `x − 4 = −1` → `x = +3`." },
          ],
          solution: [
            "Two `C₂O₄²⁻` ligands contribute `2(−2) = −4`; two `H₂O` ligands contribute `0`.",
            "`x − 4 = −1` → `x = +3`.",
          ],
          hints: [
            "Use charge `−2` for each `C₂O₄²⁻` ligand and `0` for `H₂O`.",
            "Set the total equal to the complex charge `−1`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "An octahedral nickel(II) complex absorbs light maximally at `λ = 680 nm`. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, calculate the molar crystal field splitting energy `ΔE` in `kJ mol⁻¹` (to 3 s.f.).",
          answer: { type: "number", value: 176, tolerance: 1.5, display: "176 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 176000, tolerance: 1500 }, feedback: "Divide `J mol⁻¹` by `1000` to convert into `kJ mol⁻¹`!" },
            { spec: { type: "number", value: 2.93e-19, tolerance: 0.05e-19 }, feedback: "That is the energy of ONE photon in Joules — multiply by `N_A` and divide by `1000` for `kJ mol⁻¹`." },
          ],
          solution: [
            "Convert wavelength: `λ = 680 × 10⁻⁹ m = 6.80 × 10⁻⁷ m`.",
            "Single-photon energy: {{E = (6.63 * 10^(-34) * 3.00 * 10^8) / (6.80 * 10^(-7)) = 2.925 * 10^(-19)}} `J`.",
            "Molar energy: `ΔE = (2.925 × 10⁻¹⁹ × 6.02 × 10²³) / 1000 = 176.1 ≈ 176 kJ mol⁻¹`.",
          ],
          hints: [
            "Convert `680 nm` to metres (`6.80 × 10⁻⁷ m`).",
            "Compute `ΔE = (N_A × h × c) / (1000 × λ)`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Explain",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "Explain in detail why an aqueous solution of `[Ti(H₂O)₆]³⁺` appears violet-purple when illuminated with white light, whereas an aqueous solution of `[Sc(H₂O)₆]³⁺` is colourless. [4]",
          modelAnswer:
            "`Ti³⁺` (`[Ar] 3d¹`) has an incomplete `3d` sublevel. Approaching `H₂O` ligands repel `d` orbitals unevenly, splitting the five degenerate `3d` orbitals into two energy levels separated by `ΔE`. When white light passes through the solution, the single `3d` electron absorbs a visible green-yellow photon (`ΔE = hc/λ`) and is promoted to a higher-energy `d` orbital (`d–d` transition), so the complementary violet-purple light is transmitted. In contrast, `Sc³⁺` (`[Ar] 3d⁰`) has no `3d` electrons available for `d–d` excitation, so no visible wavelengths are absorbed.",
          markScheme: [
            {
              point: "`Ti³⁺` has a partially filled (`3d¹`) sublevel and water ligands split the `3d` orbitals into two energy levels (`ΔE`).",
              keywords: ["3d1", "3d¹", "split", "two energy levels", "incomplete"],
            },
            {
              point: "A `3d` electron absorbs a visible photon (`ΔE = hc/λ`) and is promoted to a higher-energy `d` orbital (`d–d` transition).",
              keywords: ["absorbs", "promoted", "d-d", "d–d", "higher-energy"],
            },
            {
              point: "The complementary violet-purple colour is transmitted (not emitted).",
              keywords: ["complementary", "transmitted"],
            },
            {
              point: "`Sc³⁺` has an empty `3d⁰` sublevel so no `d–d` transition can occur.",
              keywords: ["3d0", "3d⁰", "no 3d electrons", "empty"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Incorrectly attributes colour to emission or fails to connect `d`-orbital splitting to absorption.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies `d`-orbital splitting and absorption OR contrasts `3d¹` vs `3d⁰`, with incomplete explanation of complementary transmission.",
              indicators: ["Mentions splitting into two levels", "Omits complementary transmission or `Sc³⁺` configuration"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Full 4-step IB crystal-field explanation: `3d¹` splitting, visible `d–d` absorption, complementary transmission, and `Sc³⁺` (`3d⁰`) contrast.",
              indicators: ["Never uses 'emits'", "Accurately distinguishes `3d¹` vs `3d⁰`"],
            },
          ],
          hints: [
            "Write down the `3d` electron counts of `Ti³⁺` and `Sc³⁺` first.",
            "Hit all four IB keywords: split into two levels, absorbs visible photon (`d–d` transition), transmits complementary colour, and `3d⁰` has no `d` electrons.",
          ],
          commonError:
            "Writing that `Ti³⁺` 'emits purple light when the electron falls back down' — that immediately forfeits the complementary-colour mark!",
        },
        {
          id: "s3-1-periodicity-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "An octahedral complex ion has a molar crystal field splitting energy `ΔE = 275 kJ mol⁻¹`. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, calculate the absorbed wavelength `λ` in `nm` (to 3 s.f.).",
          answer: { type: "number", value: 435, tolerance: 3, display: "435 nm" },
          traps: [
            { spec: { type: "number", value: 4.35e-7, tolerance: 0.05e-7 }, feedback: "Convert metres to nanometres (`× 10⁹`): `4.35 × 10⁻⁷ m = 435 nm`." },
            { spec: { type: "number", value: 0.435, tolerance: 0.01 }, feedback: "Remember to convert `275 kJ mol⁻¹` to `275 000 J mol⁻¹` (`× 1000`)!" },
          ],
          solution: [
            "Convert `ΔE = 275 kJ mol⁻¹ = 2.75 × 10⁵ J mol⁻¹`.",
            "Rearrange `ΔE = (N_A h c) / λ` → {{λ = (6.02 * 10^23 * 6.63 * 10^(-34) * 3.00 * 10^8) / (2.75 * 10^5) = 4.354 * 10^(-7)}} `m`.",
            "Convert to nanometres: `λ = 435 nm` (blue region → observed colour is orange!).",
          ],
          hints: [
            "Convert `275 kJ mol⁻¹` into `J mol⁻¹` first.",
            "Solve `λ = N_A × h × c / ΔE`, then multiply by `10⁹` to get `nm`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "When concentrated `NH₃(aq)` is added dropwise in excess to pale blue `[Cu(H₂O)₆]²⁺(aq)`, the solution turns deep royal blue (`[Cu(NH₃)₄(H₂O)₂]²⁺`). Write the balanced ligand-exchange equation and explain the colour shift using the spectrochemical series. [3]",
          modelAnswer:
            "Ligand-exchange equation: `[Cu(H₂O)₆]²⁺(aq) + 4NH₃(aq) ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺(aq) + 4H₂O(l)`. Because `NH₃` lies higher than `H₂O` in the spectrochemical series (stronger-field ligand), it causes a larger crystal field splitting energy `ΔE`. Consequently, the ammine complex absorbs higher-frequency, shorter-wavelength light (shifting from red-orange toward yellow-orange), transmitting a deeper royal blue complementary colour.",
          markScheme: [
            {
              point: "Balanced equation: `[Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O`.",
              keywords: ["4nh3", "4nh₃", "4h2o", "4h₂o"],
            },
            {
              point: "`NH₃` is a stronger-field ligand than `H₂O`, producing a larger crystal field splitting `ΔE`.",
              keywords: ["stronger-field", "stronger ligand", "larger crystal field", "larger splitting"],
            },
            {
              point: "Larger `ΔE` shifts absorption to shorter wavelength / higher frequency, shifting transmitted light to deeper blue.",
              keywords: ["shorter-wavelength", "shorter wavelength", "higher-frequency", "higher frequency"],
            },
          ],
          hints: [
            "Check that `4 H₂O` molecules are released on the product side.",
            "Link `NH₃ > H₂O` → `ΔE ↑` → `λ_absorbed ↓` → colour shift.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "transition-elements-complexes-hl",
          question:
            "How many **unpaired** `3d` electrons are present in an isolated gaseous `Co²⁺` ion (`Z = 27`)?",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            { spec: { type: "number", value: 7 }, feedback: "`7` is the TOTAL number of `3d` electrons in `Co²⁺` (`3d⁷`) — four are paired in two orbitals (`↑↓ ↑↓ ↑ ↑ ↑`), leaving `3` unpaired!" },
            { spec: { type: "number", value: 5 }, feedback: "`Co` is `3d⁷ 4s²`, so `Co²⁺` loses `4s²` to leave `3d⁷` (3 unpaired), not `3d⁵`." },
          ],
          solution: [
            "Neutral `Co` (`Z = 27`): `[Ar] 3d⁷ 4s²` → `Co²⁺`: `[Ar] 3d⁷`.",
            "Distributing 7 electrons across five `3d` orbitals by Hund's rule: `↑↓  ↑↓  ↑  ↑  ↑` → **3** unpaired electrons.",
          ],
          hints: [
            "Remove `4s²` first to find `Co²⁺` (`3d⁷`).",
            "Place 5 electrons singly in the five `3d` orbitals, then pair up the remaining 2.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 3,
          commandTerm: "Explain",
          guideRef: "transition-elements-complexes-hl",
          question:
            "Explain how transition metals act as **both** heterogeneous and homogeneous catalysts, citing one named industrial or laboratory example for each mode. [3]",
          modelAnswer:
            "Both modes provide an alternative reaction pathway with a lower activation energy `E_a`. Heterogeneous catalysts (different phase from reactants, such as solid `Fe(s)` in the Haber process or `V₂O₅(s)` in the Contact process) use partially filled `3d` orbitals to adsorb reactant molecules onto their surface, weakening reactant bonds. Homogeneous catalysts (same phase as reactants, such as aqueous `Fe²⁺/Fe³⁺` catalysing `S₂O₈²⁻ + 2I⁻`) interconvert reversibly between variable oxidation states.",
          markScheme: [
            {
              point: "Catalysts provide an alternative reaction pathway with a lower activation energy (`E_a`).",
              keywords: ["lower activation energy", "alternative", "pathway"],
            },
            {
              point: "Heterogeneous catalysis: surface adsorption using `3d` orbitals weakens bonds + valid example (`Fe` Haber, `V₂O₅` Contact, `Ni` hydrogenation, `MnO₂`, `Pt/Pd/Rh`).",
              keywords: ["adsorb", "surface", "haber", "contact", "v2o5", "v₂o₅"],
            },
            {
              point: "Homogeneous catalysis: cycles between variable oxidation states + valid example (`Fe²⁺/Fe³⁺` with `S₂O₈²⁻`/`I⁻`, or `Co` in B₁₂ / `Fe²⁺` in cytochromes).",
              keywords: ["variable oxidation states", "oxidation states", "s2o8", "s₂o₈", "fe2+", "fe²⁺"],
            },
          ],
          hints: [
            "Include the universal definition of catalysis (`alternative pathway with lower E_a`).",
            "Give distinct mechanisms (surface adsorption vs oxidation-state cycling) and concrete named examples.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "transition-elements-complexes-hl",
          question:
            "In a complexometric titration, `25.0 cm³` of an aqueous `Cu²⁺` solution reacts in a `1 : 1` molar ratio with `18.40 cm³` of `0.0250 mol dm⁻³` `EDTA⁴⁻(aq)` to form `[Cu(EDTA)]²⁻`. Calculate the molar concentration of `Cu²⁺(aq)` in `mol dm⁻³` (to 3 s.f.).",
          answer: { type: "number", value: 0.0184, tolerance: 0.0003, display: "0.0184 mol dm⁻³" },
          traps: [
            { spec: { type: "number", value: 0.0340, tolerance: 0.001 }, feedback: "Check your `c₁V₁ = c₂V₂` rearrangement: `c(Cu²⁺) = (0.0250 × 18.40) / 25.0`, not `(0.0250 × 25.0) / 18.40`." },
            { spec: { type: "number", value: 0.00307, tolerance: 0.0002 }, feedback: "Even though `EDTA⁴⁻` is hexadentate (`CN = 6`), one single `EDTA⁴⁻` molecule binds one `Cu²⁺` ion (`1 : 1` molar ratio, NOT `6 : 1`!)." },
          ],
          solution: [
            "Because `EDTA⁴⁻` is hexadentate, it forms a `1 : 1` octahedral chelate `[Cu(EDTA)]²⁻`.",
            "`n(EDTA⁴⁻) = 0.0250 × 0.01840 = 4.60 × 10⁻⁴ mol = n(Cu²⁺)`.",
            "{{[Cu^(2+)] = (4.60 * 10^(-4)) / 0.0250 = 0.0184}} `mol dm⁻³`.",
          ],
          hints: [
            "Confirm the stoichiometric ratio between `Cu²⁺` and hexadentate `EDTA⁴⁻` (`1 : 1`).",
            "Calculate `n(EDTA⁴⁻) = c × V` and divide by `0.0250 dm³`.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          marks: 4,
          commandTerm: "Compare",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "Aqueous `[Fe(H₂O)₆]²⁺` is pale green, whereas aqueous `[Fe(H₂O)₆]³⁺` is yellow-brown. Compare the crystal field splitting energies (`ΔE`), absorbed wavelengths, and electronic structures of these two ions, explaining the reason for the difference in `ΔE`. [4]",
          modelAnswer:
            "`Fe²⁺` has configuration `[Ar] 3d⁶` and `Fe³⁺` has `[Ar] 3d⁵`; both have incomplete `3d` sublevels and six `H₂O` ligands in an octahedral field. Because `Fe³⁺` has a higher oxidation state (`+3` vs `+2`) and smaller ionic radius (higher charge density), it pulls the `H₂O` lone pairs closer to the central ion. This stronger electrostatic interaction increases repulsion with the `d` orbitals, giving `[Fe(H₂O)₆]³⁺` a larger splitting energy `ΔE`. Consequently, `[Fe(H₂O)₆]³⁺` absorbs shorter-wavelength violet/blue light (appearing yellow-brown), whereas `[Fe(H₂O)₆]²⁺` has a smaller `ΔE` and absorbs longer-wavelength red light (appearing pale green).",
          markScheme: [
            {
              point: "Correct `3d` configurations: `Fe²⁺` is `3d⁶` and `Fe³⁺` is `3d⁵`.",
              keywords: ["3d6", "3d⁶", "3d5", "3d⁵"],
            },
            {
              point: "`Fe³⁺` has higher oxidation state / higher charge density, attracting `H₂O` ligands closer.",
              keywords: ["higher charge density", "higher oxidation state", "closer"],
            },
            {
              point: "Stronger ligand–`d` repulsion gives `[Fe(H₂O)₆]³⁺` a larger `ΔE` than `[Fe(H₂O)₆]²⁺`.",
              keywords: ["larger splitting", "stronger electrostatic", "repulsion"],
            },
            {
              point: "`[Fe(H₂O)₆]³⁺` absorbs shorter-wavelength violet/blue light (transmitting yellow-brown), whereas `[Fe(H₂O)₆]²⁺` absorbs longer-wavelength red light (transmitting green).",
              keywords: ["shorter-wavelength", "violet", "longer-wavelength", "red"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Fails to relate oxidation state to splitting energy or absorbed wavelength.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States that `Fe³⁺` has a larger `ΔE` due to higher charge OR gives `3d` configurations, without linking both to complementary colours.",
              indicators: ["Identifies oxidation state factor", "Incomplete absorbed-wavelength comparison"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately compares `3d⁶` vs `3d⁵`, charge density & ligand distance, larger `ΔE` in `Fe³⁺`, and shorter absorbed `λ` (violet/blue vs red).",
              indicators: ["Explicitly connects `ΔE ↑` to `λ_absorbed ↓` via the colour wheel"],
            },
          ],
          hints: [
            "Same metal, same ligand, same geometry — which of the 4 crystal-field factors changed?",
            "Convert each observed colour (pale green vs yellow-brown) into its absorbed colour on the wheel to confirm which has the larger `ΔE`!",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "group-trends-period3-oxides",
          question:
            "Deduce the average oxidation state of sulfur in the tetrathionate ion, `S₄O₆²⁻`, formed when thiosulfate reacts with iodine. Give your answer as a decimal.",
          answer: { type: "number", value: 2.5, tolerance: 0.01, display: "+2.5" },
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "`+2` is sulfur in `S₂O₃²⁻`; in `S₄O₆²⁻`, solve `4x + 6(−2) = −2`." },
            { spec: { type: "number", value: 3 }, feedback: "Check arithmetic: `4x − 12 = −2` gives `4x = +10`, so `x = +2.5` (fractional average!)." },
          ],
          solution: [
            "Assign `O = −2`: `4x + 6(−2) = −2`.",
            "`4x − 12 = −2` → `4x = +10` → `x = +2.5` (two terminal S atoms are `+5` and two bridging S atoms are `0`, averaging `+2.5`).",
          ],
          hints: [
            "Solve `4x + 6(−2) = −2`.",
            "Yes, average oxidation states CAN be fractional decimals like `+2.5`!",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q14",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Predict",
          guideRef: "d-orbital-splitting-colour-hl",
          question:
            "A complex ion absorbs maximally at `λ = 460 nm` (blue region). Using the IB colour wheel, state the **observed** colour of the solution.",
          answer: { type: "text", accept: ["orange"], display: "orange" },
          traps: [
            { spec: { type: "text", accept: ["blue"] }, feedback: "Blue (`424–491 nm`) is ABSORBED; the observed colour is directly opposite blue on the colour wheel." },
          ],
          solution: [
            "`460 nm` lies in the blue sector (`424–491 nm`) of the IB colour wheel.",
            "Directly opposite blue is its complementary colour: **orange**.",
          ],
          hints: [
            "Find the colour opposite blue on the 6-sector IB colour wheel.",
            "Remember the sunset-ocean pair: Blue ↔ Orange.",
          ],
        },
        {
          id: "s3-1-periodicity-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          marks: 5,
          commandTerm: "Discuss",
          guideRef: "transition-elements-complexes-hl",
          question:
            "Discuss the structure, bonding, and thermodynamic stability of the `[Fe(EDTA)]⁻` complex formed when `EDTA⁴⁻` reacts with `[Fe(H₂O)₆]³⁺(aq)`: `[Fe(H₂O)₆]³⁺ + EDTA⁴⁻ ⇌ [Fe(EDTA)]⁻ + 6H₂O`. Include Lewis acid–base classification, coordination number, geometry, iron's oxidation state, and why the forward equilibrium is heavily favoured. [5]",
          modelAnswer:
            "In `[Fe(EDTA)]⁻`, iron has oxidation state `+3` (`x + (−4) = −1`, `[Ar] 3d⁵`). The hexadentate `EDTA⁴⁻` ligand acts as a Lewis base, donating six lone pairs (two from nitrogen atoms and four from negatively charged carboxylate oxygen atoms) into vacant orbitals of the `Fe³⁺` Lewis acid to form six coordinate covalent bonds. Consequently, iron has a coordination number of `6` and an octahedral geometry. The ligand-substitution reaction is overwhelmingly favoured thermodynamically due to the chelate effect: `2` dissolved reactant particles (`[Fe(H₂O)₆]³⁺ + EDTA⁴⁻`) produce `7` product particles (`[Fe(EDTA)]⁻ + 6H₂O`), creating a large positive entropy change (`ΔS > 0`) that drives `ΔG = ΔH − TΔS` strongly negative.",
          markScheme: [
            {
              point: "Correct oxidation state of iron (`+3`, `3d⁵`).",
              keywords: ["+3", "3d5", "3d⁵", "fe3+", "fe³⁺"],
            },
            {
              point: "Identifies `EDTA⁴⁻` as a hexadentate Lewis base donating 6 lone pairs (2 N + 4 O) to `Fe³⁺` Lewis acid via coordinate bonds.",
              keywords: ["hexadentate", "lewis base", "lewis acid", "coordinate"],
            },
            {
              point: "States coordination number `6` and octahedral geometry.",
              keywords: ["octahedral", "coordination number of 6", "cn = 6"],
            },
            {
              point: "Identifies the particle-count increase (`2` species → `7` species) liberating six water molecules.",
              keywords: ["2", "7", "six water", "particles"],
            },
            {
              point: "Links particle increase to large positive entropy change (`ΔS > 0`, chelate effect) driving `ΔG` strongly negative.",
              keywords: ["chelate effect", "positive entropy", "δs > 0", "entropy change"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Misidentifies denticity/coordination number and provides no valid bonding or thermodynamic explanation.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly deduces `Fe(+3)` and `CN = 6` / octahedral geometry, with limited bonding or entropy reasoning.",
              indicators: ["Mentions hexadentate or Lewis base", "Omits particle-count entropy driver"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately covers Lewis acid–base coordinate bonding, `Fe(+3)`, `CN = 6`, octahedral geometry, and mentions entropy rise.",
              indicators: ["Identifies 6 donor bonds cleanly", "Mentions positive `ΔS`"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Complete, rigorous IB HL synthesis covering `Fe(+3)`, 2 N + 4 O hexadentate Lewis-base coordinate bonding, octahedral `CN = 6`, `2 → 7` particle increase, positive `ΔS` (chelate effect), and negative `ΔG`.",
              indicators: ["Connects stoichiometry (`2 → 7`) explicitly to `ΔG = ΔH − TΔS`"],
            },
          ],
          hints: [
            "Check each prompt requirement systematically: OS of Fe, Lewis acid/base + donor atoms, CN & shape, and particle count (`2` vs `7`).",
            "Use `ΔG = ΔH − TΔS` to explain why liberating six `H₂O` molecules makes the chelate extraordinarily stable!",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs, ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "s3-1-periodicity-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "Aqueous `[Cr(H₂O)₆]³⁺` absorbs maximally at `575 nm`, whereas `[Cr(NH₃)₆]³⁺` absorbs maximally at `465 nm`. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, calculate the **increase** in molar crystal field splitting energy, `ΔE([Cr(NH₃)₆]³⁺) − ΔE([Cr(H₂O)₆]³⁺)`, in `kJ mol⁻¹` (to 3 s.f.).",
      answer: { type: "number", value: 49.3, tolerance: 1.0, display: "49.3 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 1088, tolerance: 20 }, feedback: "Do NOT plug `Δλ = 110 nm` directly into `hc / Δλ`! Compute `ΔE₁` and `ΔE₂` separately and subtract them." },
        { spec: { type: "number", value: -49.3, tolerance: 1.0 }, feedback: "The question asks for the positive increase (`NH₃` minus `H₂O`); `[Cr(NH₃)₆]³⁺` has the LARGER `ΔE`." },
      ],
      solution: [
        "Compute `ΔE` for `[Cr(NH₃)₆]³⁺` (`465 nm`): {{ΔE_1 = (6.02 * 10^23 * 6.63 * 10^(-34) * 3.00 * 10^8) / (1000 * 465 * 10^(-9)) = 257.5}} `kJ mol⁻¹`.",
        "Compute `ΔE` for `[Cr(H₂O)₆]³⁺` (`575 nm`): {{ΔE_2 = (6.02 * 10^23 * 6.63 * 10^(-34) * 3.00 * 10^8) / (1000 * 575 * 10^(-9)) = 208.2}} `kJ mol⁻¹`.",
        "Increase: `257.5 − 208.2 = 49.3 kJ mol⁻¹`.",
      ],
      hints: [
        "Warning: `1/λ₁ − 1/λ₂` is NOT equal to `1/(λ₁ − λ₂)`!",
        "Calculate the molar `ΔE` in `kJ mol⁻¹` for `465 nm` and `575 nm` separately, then subtract.",
      ],
      commonError:
        "Subtracting the two wavelengths (`575 − 465 = 110 nm`) and feeding `110 nm` into `N_A h c / λ`, which gives an unphysical `1088 kJ mol⁻¹`!",
    },
    {
      id: "s3-1-periodicity-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 5,
      commandTerm: "Analyse",
      guideRef: "periodic-trends-nuclear-charge",
      question:
        "An unknown Period 3 element `X` has the following first six successive ionization energies (in `kJ mol⁻¹`): `IE₁ = 578`, `IE₂ = 1817`, `IE₃ = 2745`, `IE₄ = 11 577`, `IE₅ = 14 842`, `IE₆ = 18 379`. Deduce the identity of `X`, explain why there is a huge jump between `IE₃` and `IE₄`, predict the formula and acid–base nature of its oxide, and explain why its `IE₁` is lower than that of element `Z − 1`. [5]",
      modelAnswer:
        "There is a massive jump between `IE₃` (`2745 kJ mol⁻¹`) and `IE₄` (`11 577 kJ mol⁻¹`), proving that `X` has `3` valence electrons and belongs to Group 13; in Period 3, `X` is aluminium (`Al`, `1s² 2s² 2p⁶ 3s² 3p¹`). Removing the fourth electron breaks into the filled inner `n = 2` (`2p`) principal shell, which lies much closer to the nucleus and experiences much less inner-shell shielding. Its oxide has formula `Al₂O₃` and is amphoteric (reacting with both acids and strong alkalis). Its `IE₁` (`578 kJ mol⁻¹`) is lower than magnesium (`Z − 1`, `738 kJ mol⁻¹`) because aluminium loses a higher-energy `3p¹` electron that is additionally shielded by the filled `3s²` sublevel.",
      markScheme: [
        {
          point: "Identifies `X` as aluminium (`Al`, Group 13) from the large jump after `IE₃` (`3` valence electrons).",
          keywords: ["aluminium", "aluminum", "group 13", "3 valence"],
        },
        {
          point: "Explains the `IE₃ → IE₄` jump: the fourth electron is removed from an inner `n = 2` (`2p`) shell closer to the nucleus with less shielding.",
          keywords: ["inner", "n = 2", "2p", "less shielding", "closer to the nucleus"],
        },
        {
          point: "Predicts oxide formula `Al₂O₃`.",
          keywords: ["al2o3", "al₂o₃"],
        },
        {
          point: "Identifies `Al₂O₃` as amphoteric (reacts with both acids and bases).",
          keywords: ["amphoteric"],
        },
        {
          point: "Explains `IE₁(Al) < IE₁(Mg)` via higher-energy `3p` electron shielded by the filled `3s²` sublevel.",
          keywords: ["3p", "3s2", "3s²", "higher-energy", "shielded"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Incorrect element deduction and invalid periodicity reasoning.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly identifies `Al` and `Al₂O₃`, with partial shell or sublevel explanation.",
          indicators: ["Finds Group 13 from `IE₃→IE₄` jump", "Missing amphoteric classification or `3p` explanation"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly identifies `Al`, `Al₂O₃` (amphoteric), and explains the core-shell jump and `Mg → Al` dip with minor omissions.",
          indicators: ["Cites inner `n = 2` shell and `3p` sublevel"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Complete, precise IB synthesis integrating successive IE deduction, inner-shell distance/shielding, amphoteric `Al₂O₃`, and `3p¹` sublevel shielding.",
          indicators: ["Every prompt component addressed with exact electrostatic terminology"],
        },
      ],
      hints: [
        "Locate the largest multiplicative jump in the `IE` sequence: `2745 → 11 577` is over a 4× jump!",
        "Once you know `X` is Period 3, Group 13, recall all four facts about `Al` and `Al₂O₃`.",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "Pink octahedral `[Co(H₂O)₆]²⁺` absorbs maximally at `λ_o = 510 nm`, while blue tetrahedral `[CoCl₄]²⁻` absorbs maximally at `λ_t = 660 nm`. Calculate the ratio of their crystal field splitting energies, `ΔE_t / ΔE_o`, to 3 significant figures.",
      answer: { type: "number", value: 0.773, tolerance: 0.01, display: "0.773" },
      traps: [
        { spec: { type: "number", value: 1.29, tolerance: 0.02 }, feedback: "`ΔE` is INVERSELY proportional to `λ`: `ΔE_t / ΔE_o = λ_o / λ_t = 510 / 660`, NOT `660 / 510`!" },
      ],
      solution: [
        "Since `ΔE = hc / λ`, the constants `h` and `c` cancel in the ratio:",
        "{{ΔE_t / ΔE_o = λ_o / λ_t = 510 / 660 = 0.7727 ≈ 0.773}}.",
        "(Notice `[CoCl₄]²⁻` has a smaller splitting energy because `Cl⁻` is weaker-field than `H₂O` AND tetrahedral splitting is intrinsically smaller than octahedral.)",
      ],
      hints: [
        "Write `ΔE_t = hc / λ_t` and `ΔE_o = hc / λ_o` and take their ratio.",
        "Verify your sign/magnitude: `[CoCl₄]²⁻` absorbs longer wavelength (`660 nm`), so `ΔE_t / ΔE_o` must be LESS than `1`!",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "transition-elements-complexes-hl",
      question:
        "A transition-metal coordination compound has empirical formula `CrCl₃·6H₂O`. When `0.0100 mol` of this solid is dissolved in water and treated with excess `AgNO₃(aq)`, exactly `0.0200 mol` of white `AgCl(s)` precipitates immediately. How many **chloride ligands** are coordinated directly inside the square brackets of the octahedral complex ion?",
      answer: { type: "number", value: 1, display: "1" },
      traps: [
        { spec: { type: "number", value: 2 }, feedback: "`0.0200 mol AgCl` per `0.0100 mol` complex means TWO free `Cl⁻` counter-ions are OUTSIDE the brackets, leaving `3 − 2 = 1` inside!" },
        { spec: { type: "number", value: 3 }, feedback: "If all 3 `Cl⁻` were coordinated inside the complex, zero `AgCl` would precipitate immediately." },
      ],
      solution: [
        "Ratio `n(AgCl) / n(complex) = 0.0200 / 0.0100 = 2` → **2** free uncoordinated `Cl⁻` counter-ions outside the coordination sphere.",
        "Since total `Cl` per formula unit is `3`, there is `3 − 2 = 1` `Cl⁻` ligand coordinated inside the octahedral complex: `[Cr(H₂O)₅Cl]Cl₂·H₂O`.",
      ],
      hints: [
        "Only FREE `Cl⁻` counter-ions outside the complex ion react instantly with `Ag⁺(aq)` to precipitate `AgCl(s)`.",
        "Subtract the number of precipitated `Cl⁻` ions per formula unit from `3`.",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 5,
      commandTerm: "Analyse",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "Ruby (red) and emerald (green) both contain trace `Cr³⁺` ions (`3d³`) occupying octahedral oxide (`O²⁻`) cavities, yet ruby has shorter `Cr–O` bond lengths than emerald. Analyse why the same `Cr³⁺` ion produces red in ruby and green in emerald, predicting which gemstone has the larger `ΔE` and which absorbs the shorter wavelength. [5]",
      modelAnswer:
        "Ruby appears red, so from the IB colour wheel it absorbs complementary green light (`~500–560 nm`). Emerald appears green, so it absorbs complementary red light (`~650–690 nm`). Because `ΔE = hc / λ`, absorbing shorter-wavelength green light means ruby has a **larger** crystal field splitting energy `ΔE` than emerald. Physically, ruby's tighter `Al₂O₃` lattice forces the `O²⁻` ligand lone pairs closer to the `Cr³⁺` `3d` orbitals (`shorter Cr–O` bond length), intensifying electrostatic repulsion with the `d_x²−y²` and `d_z²` orbitals and widening `ΔE`.",
      markScheme: [
        {
          point: "Ruby (red observed) absorbs complementary green light (`~491–575 nm`).",
          keywords: ["absorbs", "green"],
        },
        {
          point: "Emerald (green observed) absorbs complementary red light (`~647–700 nm`).",
          keywords: ["absorbs", "red"],
        },
        {
          point: "Concludes ruby absorbs the shorter wavelength and therefore has the larger `ΔE` (`ΔE = hc / λ`).",
          keywords: ["shorter-wavelength", "shorter wavelength", "larger", "hc"],
        },
        {
          point: "Connects shorter `Cr–O` distance in ruby to ligand lone pairs sitting closer to `Cr³⁺` `3d` orbitals.",
          keywords: ["closer", "lone pairs", "3d orbitals"],
        },
        {
          point: "Links closer ligand approach to stronger electrostatic repulsion (especially on `d_x²−y²`/`d_z²`), widening `ΔE`.",
          keywords: ["repulsion", "widening", "intensifying"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Confuses absorbed with observed colours and reverses the `ΔE` order.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly converts red/green to absorbed colours OR links shorter bond length to larger `ΔE`, without integrating both.",
          indicators: ["Uses colour wheel correctly for at least one gem"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately deduces larger `ΔE` and shorter absorbed `λ` in ruby and links qualitatively to stronger ligand repulsion.",
          indicators: ["Applies `ΔE = hc / λ` cleanly"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Rigorous IB HL analysis integrating complementary absorption, inverse `ΔE–λ` proportionality, and crystal-field `Cr–O` distance repulsion.",
          indicators: ["Explicitly links closer `O²⁻` lone pairs to greater `d`-orbital splitting"],
        },
      ],
      hints: [
        "Trap alert! Do NOT compare red vs green wavelengths directly — convert BOTH observed colours to their ABSORBED colours first!",
        "Then relate shorter `Cr–O` distance → stronger electrostatic repulsion between ligand lone pairs and `d` orbitals → bigger `ΔE`.",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "group-trends-period3-oxides",
      question:
        "In the iron oxide magnetite (`Fe₃O₄`), one iron ion is `Fe²⁺` and two iron ions are `Fe³⁺` (`FeO·Fe₂O₃`). Calculate the **average** oxidation state of iron in `Fe₃O₄` to 3 significant figures.",
      answer: { type: "number", value: 2.67, tolerance: 0.02, display: "+2.67" },
      traps: [
        { spec: { type: "number", value: 2.5, tolerance: 0.01 }, feedback: "There are TWO `Fe³⁺` and ONE `Fe²⁺` (`(2 + 3 + 3)/3 = 8/3 = 2.67`), not equal numbers!" },
      ],
      solution: [
        "Using standard oxidation-state algebra: `3x + 4(−2) = 0` → `3x = +8`.",
        "{{x = 8 / 3 = +2.67}} (3 s.f.), matching `(+2 + 3 + 3) / 3 = +2.67`.",
      ],
      hints: [
        "Set `3x + 4(−2) = 0`.",
        "Express `8/3` as a decimal to 3 s.f.",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      marks: 4,
      commandTerm: "Evaluate",
      guideRef: "group-trends-period3-oxides",
      question:
        "A student tests four unlabelled white Period 3 oxides (`Na₂O`, `MgO`, `Al₂O₃`, and `SiO₂`) by shaking each with neutral water and measuring the pH. They obtain `pH 13`, `pH 9.5`, `pH 7`, and `pH 7`, and conclude that the two `pH 7` oxides are 'neutral oxides'. Evaluate the student's conclusion and design two simple chemical tests to distinguish the two `pH 7` solids. [4]",
      modelAnswer:
        "The student's conclusion is invalid: `Al₂O₃` and `SiO₂` leave pure water at `pH 7` solely because both are insoluble in water (high lattice energy in `Al₂O₃` and strong giant covalent `Si−O` network in `SiO₂`), NOT because they are chemically neutral. `Al₂O₃` is actually amphoteric whereas `SiO₂` is acidic. Test 1: add dilute `HCl(aq)` to both solids — `Al₂O₃` dissolves to form colourless `AlCl₃(aq)` (`Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O`), while `SiO₂` shows no reaction. Test 2: warm both solids with concentrated `NaOH(aq)` — both react and dissolve (`NaAl(OH)₄` and `Na₂SiO₃`), confirming `SiO₂`'s acidic character and `Al₂O₃`'s amphoteric character.",
      markScheme: [
        {
          point: "Rejects the student's conclusion: `pH 7` arises from insolubility in water, not chemical neutrality.",
          keywords: ["insoluble", "invalid", "not", "insolubility"],
        },
        {
          point: "Correctly classifies `Al₂O₃` as amphoteric and `SiO₂` as acidic.",
          keywords: ["amphoteric", "acidic"],
        },
        {
          point: "Distinguishing test with dilute acid (`HCl`): `Al₂O₃` dissolves (`AlCl₃`), whereas `SiO₂` does not react.",
          keywords: ["hcl", "dissolves", "no reaction", "alcl3", "alcl₃"],
        },
        {
          point: "Confirmatory test with hot concentrated alkali (`NaOH`): both react (`[Al(OH)₄]⁻` / `Na₂SiO₃`), demonstrating acidic behaviour.",
          keywords: ["naoh", "na2sio3", "na₂sio₃", "naal(oh)4", "naal(oh)₄"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Agrees that the solids are neutral or proposes tests that do not distinguish them.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies insolubility OR correctly classifies `Al₂O₃` and `SiO₂`, with incomplete chemical tests.",
          indicators: ["Mentions insolubility", "Only tests with one reagent"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly refutes the 'neutral' claim via insolubility, classifies both oxides accurately, and designs acid + hot alkali tests with exact observations/products.",
          indicators: ["Contrasts `HCl` dissolution of `Al₂O₃` vs inert `SiO₂`", "Confirms `NaOH` reaction for both"],
        },
      ],
      hints: [
        "Explain WHY water stays at `pH 7` even though neither oxide is neutral.",
        "Use `HCl(aq)` to separate amphoteric `Al₂O₃` from acidic `SiO₂`, and hot `NaOH(aq)` to prove `SiO₂` is acidic.",
      ],
    },
    {
      id: "s3-1-periodicity-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      marks: 6,
      commandTerm: "Discuss",
      guideRef: "d-orbital-splitting-colour-hl",
      question:
        "A student argues: 'All `d⁰` and `d¹⁰` transition-metal species are colourless, and every colour change in a transition-metal complex is caused solely by changing the ligand.' Critically evaluate BOTH halves of this statement using named chemical examples and crystal-field principles. [6]",
      modelAnswer:
        "Part 1 is generally true for `d–d` transitions: `Sc³⁺` (`3d⁰`), `Ti⁴⁺` (`3d⁰`), `Cu⁺` (`3d¹⁰`), and `Zn²⁺` (`3d¹⁰`) complexes lack a partially filled `d` sublevel, so no `d–d` electronic transition can occur and their aqueous ions are colourless. However, there are major exceptions such as intense purple manganate(VII) (`MnO₄⁻`, where `Mn` is `+7`, `3d⁰`) and orange dichromate(VI) (`Cr₂O₇²⁻`, `Cr(+6)`, `3d⁰`), whose deep colours arise from ligand-to-metal charge transfer (LMCT) rather than `d–d` splitting. Part 2 is overly narrow: although ligand identity (spectrochemical series, e.g., `[Cu(H₂O)₆]²⁺` pale blue → `[Cu(NH₃)₄(H₂O)₂]²⁺` royal blue) alters `ΔE`, three additional factors also shift `ΔE` and colour: metal oxidation state (`[Fe(H₂O)₆]²⁺` green vs `[Fe(H₂O)₆]³⁺` yellow-brown), identity of the metal ion (`[Ni(H₂O)₆]²⁺` green vs `[Cu(H₂O)₆]²⁺` blue), and coordination geometry (octahedral pink `[Co(H₂O)₆]²⁺` vs tetrahedral blue `[CoCl₄]²⁻`).",
      markScheme: [
        {
          point: "Confirms why `d⁰` and `d¹⁰` species (`Sc³⁺`, `Zn²⁺`, `Cu⁺`) cannot undergo `d–d` transitions (no `d` electrons or no vacant upper `d` orbitals).",
          keywords: ["sc3+", "sc³⁺", "zn2+", "zn²⁺", "no d-d", "no d–d"],
        },
        {
          point: "Refutes 'all' with a named `d⁰` coloured counterexample (`MnO₄⁻` purple or `Cr₂O₇²⁻` orange) via charge transfer (LMCT).",
          keywords: ["mno4-", "mno₄⁻", "cr2o7", "cr₂o₇", "charge transfer", "lmct"],
        },
        {
          point: "Acknowledges ligand strength alters `ΔE` with an example (e.g. `H₂O` → `NH₃` on `Cu²⁺`).",
          keywords: ["spectrochemical", "cu(nh3)4", "cu(nh₃)₄", "ligand identity"],
        },
        {
          point: "Cites oxidation-state effect with an example (`Fe²⁺` vs `Fe³⁺` aqua complexes).",
          keywords: ["oxidation state", "fe(h2o)6", "fe(h₂o)₆", "yellow-brown"],
        },
        {
          point: "Cites identity of the metal ion with an example (`Ni²⁺` vs `Cu²⁺` aqua complexes).",
          keywords: ["identity of the metal", "ni(h2o)6", "ni(h₂o)₆"],
        },
        {
          point: "Cites coordination geometry with an example (octahedral `[Co(H₂O)₆]²⁺` vs tetrahedral `[CoCl₄]²⁻`).",
          keywords: ["geometry", "octahedral", "tetrahedral", "cocl4", "cocl₄"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Uncritically agrees with the student without valid chemical counterexamples.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Addresses only one half of the claim with basic `d⁰`/`d¹⁰` or ligand-factor points.",
          indicators: ["Mentions `Zn²⁺` colourless or lists factors without concrete examples"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Evaluates both halves with solid examples, missing either the LMCT `d⁰` exception (`MnO₄⁻`/`Cr₂O₇²⁻`) or one of the four `ΔE` factors.",
          indicators: ["Covers at least 3 crystal-field factors with examples"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Balanced, authoritative HL critique: confirms `d–d` rule, identifies `MnO₄⁻`/`Cr₂O₇²⁻` LMCT exception, and illustrates all four `ΔE` factors with accurate named complexes.",
          indicators: ["Distinguishes `d–d` vs charge-transfer transitions", "Names concrete complexes for ligand, OS, metal identity, and geometry"],
        },
      ],
      hints: [
        "Think of the most famous intense purple ion in IB redox titrations: what is the `3d` count of `Mn(+7)` in `MnO₄⁻`?!",
        "List all FOUR factors that alter `ΔE` and attach one concrete aqueous complex pair to each factor.",
      ],
    },
  ],
};
