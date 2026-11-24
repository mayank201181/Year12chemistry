import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 questions: 4 MCQs balanced [0,1,2,3] + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "r3-1-proton-electron-transfer-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "bronsted-ph-strong-weak",
      question:
        "In the equilibrium `HCO₃⁻(aq) + H₂O(l) ⇌ CO₃²⁻(aq) + H₃O⁺(aq)`, which species acts as the Brønsted–Lowry acid on the left-hand side and what is its conjugate base?",
      options: [
        "HCO₃⁻ is the acid and CO₃²⁻ is its conjugate base",
        "H₂O is the acid and H₃O⁺ is its conjugate base",
        "HCO₃⁻ is the base and CO₃²⁻ is its conjugate acid",
        "H₂O is the acid and CO₃²⁻ is its conjugate base",
      ],
      answerIndex: 0,
      hints: [
        "Track which species loses an H⁺ ion as you move from left to right.",
      ],
      explanation:
        "HCO₃⁻ donates a proton to water to become CO₃²⁻, so HCO₃⁻ is the Brønsted–Lowry acid and CO₃²⁻ is its conjugate base. H₂O accepts the proton to form conjugate acid H₃O⁺.",
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "bronsted-ph-strong-weak",
      question:
        "Calculate the pH of a 0.0400 mol dm⁻³ aqueous solution of the strong monoprotic acid HNO₃(aq) at 298 K. Give your answer to 2 decimal places.",
      answer: { type: "number", value: 1.4, tolerance: 0.02, display: "1.40" },
      hints: [
        "HNO₃ dissociates completely, so [H⁺] equals the initial acid concentration.",
      ],
      solution: [
        "Since HNO₃ is a strong monoprotic acid, [H⁺] = 0.0400 mol dm⁻³.",
        "pH = −log₁₀(0.0400) = 1.3979 → 1.40.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "bronsted-ph-strong-weak",
      question:
        "Calculate the pH of a 0.0150 mol dm⁻³ aqueous solution of the strong base Ba(OH)₂(aq) at 298 K (K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.",
      answer: { type: "number", value: 12.48, tolerance: 0.02, display: "12.48" },
      traps: [
        {
          spec: { type: "number", value: 12.18, tolerance: 0.02 },
          feedback: "Remember Ba(OH)₂ produces TWO moles of OH⁻ per mole of base: double 0.0150 first!",
        },
        {
          spec: { type: "number", value: 1.52, tolerance: 0.02 },
          feedback: "1.52 is the pOH — subtract from 14.00 at 298 K to get pH.",
        },
      ],
      hints: [
        "Each formula unit of Ba(OH)₂ releases 2 OH⁻ ions into solution.",
        "Compute pOH = −log₁₀[OH⁻], then use pH = 14.00 − pOH.",
      ],
      solution: [
        "Ba(OH)₂(aq) → Ba²⁺(aq) + 2OH⁻(aq), so [OH⁻] = 2 × 0.0150 = 0.0300 mol dm⁻³.",
        "pOH = −log₁₀(0.0300) = 1.523.",
        "pH = 14.00 − 1.523 = 12.48.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "weak-acids-buffers-titrations-hl",
      question:
        "Which 0.10 mol dm⁻³ salt solution has an **acidic** pH (< 7) at 298 K due to hydrolysis of its cation?",
      options: [
        "Sodium methanoate, HCOONa(aq)",
        "Ammonium nitrate, NH₄NO₃(aq)",
        "Potassium chloride, KCl(aq)",
        "Sodium carbonate, Na₂CO₃(aq)",
      ],
      answerIndex: 1,
      hints: [
        "Look for a salt formed from a strong acid and a weak base.",
        "Check which cation is the conjugate acid of a weak base and can donate H⁺ to water.",
      ],
      explanation:
        "NH₄NO₃ comes from strong HNO₃ and weak NH₃; the NH₄⁺ cation hydrolyses water (NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺), yielding pH < 7. HCOONa and Na₂CO₃ are basic, while KCl is neutral.",
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "weak-acids-buffers-titrations-hl",
      question:
        "Calculate the pH of a 0.150 mol dm⁻³ aqueous solution of ethanoic acid, CH₃COOH(aq), at 298 K given K_a = 1.74 × 10⁻⁵. Give your answer to 2 decimal places.",
      answer: { type: "number", value: 2.79, tolerance: 0.02, display: "2.79" },
      hints: [
        "Apply the small-x weak-acid approximation: [H⁺] ≈ √(K_a × [HA]).",
        "Take −log₁₀ of the resulting [H⁺].",
      ],
      solution: [
        "[H⁺] ≈ {{sqrt(1.74 * 10^(-5) * 0.150)}} = 1.616 × 10⁻³ mol dm⁻³.",
        "pH = −log₁₀(1.616 × 10⁻³) = 2.79.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "weak-acids-buffers-titrations-hl",
      question:
        "A buffer at 298 K contains 0.250 mol dm⁻³ CH₃COOH (pK_a = 4.76) and 0.150 mol dm⁻³ CH₃COONa. Calculate its pH to 2 decimal places.",
      answer: { type: "number", value: 4.54, tolerance: 0.02, display: "4.54" },
      traps: [
        {
          spec: { type: "number", value: 4.98, tolerance: 0.02 },
          feedback: "Check the fraction inside log₁₀: it is [base]/[acid] = [A⁻]/[HA], not [HA]/[A⁻].",
        },
      ],
      hints: [
        "Use Henderson–Hasselbalch: pH = pK_a + log₁₀([A⁻]/[HA]).",
        "Since [A⁻] < [HA], expect the buffer pH to sit slightly BELOW pK_a.",
      ],
      solution: [
        "pH = 4.76 + log₁₀({{0.150 / 0.250}}) = 4.76 + log₁₀(0.600).",
        "pH = 4.76 − 0.222 = 4.54.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q07",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "redox-voltaic-electrolytic",
      question:
        "In a spontaneous voltaic cell, which statement correctly describes the **anode**?",
      options: [
        "It is positive and reduction occurs at its surface",
        "It is negative and reduction occurs at its surface",
        "It is negative and oxidation occurs at its surface",
        "It is positive and oxidation occurs at its surface",
      ],
      answerIndex: 2,
      hints: [
        "Apply An Ox, Red Cat for the reaction, then recall which electrode supplies electrons into the wire in a voltaic cell.",
      ],
      explanation:
        "In a voltaic cell, oxidation occurs at the anode, releasing electrons into the external circuit so the anode is negatively charged. (In an electrolytic cell, the anode is positive instead.)",
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q08",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "redox-voltaic-electrolytic",
      question:
        "Deduce the oxidation state of manganese in potassium permanganate, KMnO₄. Enter a single integer.",
      answer: { type: "number", value: 7, display: "+7" },
      hints: [
        "Assign K = +1 and O = −2, and set the sum of all oxidation states in neutral KMnO₄ equal to 0.",
      ],
      solution: [
        "(+1) + x + 4(−2) = 0 → x − 7 = 0 → x = +7.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      question:
        "Aqueous CuSO₄(aq) is electrolysed using inert platinum electrodes. What products form at the cathode (−) and anode (+)?",
      options: [
        "Hydrogen gas at the cathode and sulfur dioxide at the anode",
        "Copper metal at the cathode and hydrogen gas at the anode",
        "Hydrogen gas at the cathode and oxygen gas at the anode",
        "Copper metal at the cathode and oxygen gas at the anode",
      ],
      answerIndex: 3,
      hints: [
        "At the cathode, Cu²⁺ (+0.34 V) is reduced far more readily than H₂O (−0.83 V).",
        "At the inert anode, SO₄²⁻ is too stable to oxidise, so water is oxidised instead.",
      ],
      explanation:
        "Cu²⁺ (+0.34 V) discharges preferentially over water at the cathode to deposit Cu(s). At the inert Pt anode, water oxidises (2H₂O → O₂ + 4H⁺ + 4e⁻) because sulfate ions are not oxidised.",
    },
    {
      id: "r3-1-proton-electron-transfer-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      question:
        "Given E⊖(Ni²⁺/Ni) = −0.26 V and E⊖(Ag⁺/Ag) = +0.80 V, calculate E⊖_cell (in V) for the spontaneous voltaic cell made from these two half-cells. Give your answer to 2 decimal places.",
      answer: { type: "number", value: 1.06, tolerance: 0.01, display: "1.06 V" },
      traps: [
        {
          spec: { type: "number", value: 1.86, tolerance: 0.01 },
          feedback: "Never multiply E⊖(Ag⁺/Ag) by 2! Electrode potential is an intensive property.",
        },
      ],
      hints: [
        "Identify the more positive half-cell as the cathode and the more negative one as the anode.",
        "Use E⊖_cell = E⊖_cathode − E⊖_anode without scaling potentials.",
      ],
      solution: [
        "Cathode = Ag⁺/Ag (+0.80 V); Anode = Ni²⁺/Ni (−0.26 V).",
        "E⊖_cell = (+0.80) − (−0.26) = +1.06 V.",
      ],
    },
  ],

  // ===========================================================================
  // PAPER 2 SETS (15 questions each to satisfy scripts/validate-topic.ts)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1: Proton Transfer, Buffers & Titration Curves (SL/HL) — 15 Qs
    // -------------------------------------------------------------------------
    {
      id: "r3-1-proton-electron-transfer-p1",
      title: "Paper 2 · Set 1: Proton Transfer, Buffers & Titration Curves (SL/HL)",
      level: "HL",
      questions: [
        {
          id: "r3-1-proton-electron-transfer-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bronsted-ph-strong-weak",
          question:
            "An alkaline solution at 298 K has [OH⁻] = 2.50 × 10⁻⁴ mol dm⁻³ (K_w = 1.00 × 10⁻¹⁴). Calculate its pH to 2 decimal places.",
          answer: { type: "number", value: 10.4, tolerance: 0.02, display: "10.40" },
          traps: [
            {
              spec: { type: "number", value: 3.6, tolerance: 0.02 },
              feedback: "3.60 is the pOH — subtract from 14.00 to find pH.",
            },
          ],
          hints: [
            "Calculate pOH = −log₁₀(2.50 × 10⁻⁴), then subtract from 14.00.",
          ],
          solution: [
            "pOH = −log₁₀(2.50 × 10⁻⁴) = 3.602.",
            "pH = 14.00 − 3.602 = 10.40.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bronsted-ph-strong-weak",
          question:
            "At 333 K (60 °C), the ionic product of water is K_w = 9.31 × 10⁻¹⁴. Calculate the pH of neutral pure water at 333 K to 2 decimal places.",
          answer: { type: "number", value: 6.52, tolerance: 0.02, display: "6.52" },
          hints: [
            "In neutral pure water, [H⁺] = [OH⁻], so K_w = [H⁺]².",
            "Solve [H⁺] = √(9.31 × 10⁻¹⁴) and take −log₁₀[H⁺].",
          ],
          solution: [
            "[H⁺] = {{sqrt(9.31 * 10^(-14))}} = 3.051 × 10⁻⁷ mol dm⁻³.",
            "pH = −log₁₀(3.051 × 10⁻⁷) = 6.52.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bronsted-ph-strong-weak",
          question:
            "30.0 cm³ of 0.250 mol dm⁻³ HCl(aq) is mixed with 20.0 cm³ of 0.150 mol dm⁻³ NaOH(aq) at 298 K. Calculate the pH of the resulting solution to 2 decimal places.",
          answer: { type: "number", value: 1.05, tolerance: 0.02, display: "1.05" },
          hints: [
            "Calculate initial moles of H⁺ and OH⁻, then subtract to find excess H⁺.",
            "Divide excess moles of H⁺ by the TOTAL combined volume (50.0 cm³ = 0.0500 dm³).",
          ],
          solution: [
            "n(H⁺) = 0.0300 × 0.250 = 0.00750 mol; n(OH⁻) = 0.0200 × 0.150 = 0.00300 mol.",
            "Excess n(H⁺) = 0.00750 − 0.00300 = 0.00450 mol in V_total = 0.0500 dm³.",
            "[H⁺] = {{0.00450 / 0.0500}} = 0.0900 mol dm⁻³ → pH = −log₁₀(0.0900) = 1.05.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "bronsted-ph-strong-weak",
          marks: 3,
          question:
            "Distinguish between **amphiprotic** and **amphoteric** behaviour, using the hydrogencarbonate ion and aluminium oxide as examples with supporting proton-transfer equations where applicable.",
          hints: [
            "Define amphiprotic strictly in terms of donating and accepting protons (H⁺).",
            "Write both equations for HCO₃⁻ acting as an acid and as a base, then explain why Al₂O₃ fails the proton-donation requirement.",
          ],
          modelAnswer:
            "An amphiprotic species can both donate a proton and accept a proton under the Brønsted–Lowry model. For example, HCO₃⁻ donates a proton to OH⁻ forming CO₃²⁻ + H₂O, and accepts a proton from H₃O⁺ forming H₂CO₃ + H₂O. An amphoteric substance is broader and reacts chemically with both acids and bases. Aluminium oxide reacts with H⁺ to yield Al³⁺ and with OH⁻ to form aluminate ions, yet it lacks any hydrogen atom so it cannot donate protons and is amphoteric rather than amphiprotic.",
          markScheme: [
            {
              point: "Defines amphiprotic as able to both donate and accept a proton (H⁺)",
              keywords: ["donate a proton", "accept a proton", "both donate and accept"],
            },
            {
              point: "Shows HCO₃⁻ acting as acid (→ CO₃²⁻) and base (→ H₂CO₃)",
              keywords: ["co₃²⁻", "h₂co₃", "co3^2-", "h2co3"],
            },
            {
              point: "Explains amphoteric reacts with both acids and bases, and Al₂O₃ has no H⁺ to donate so is amphoteric only",
              keywords: ["reacts with both", "no hydrogen", "lacks any hydrogen", "aluminate"],
            },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "bronsted-ph-strong-weak",
          marks: 4,
          question:
            "Outline two experimental tests that distinguish 0.10 mol dm⁻³ HCl(aq) from 0.10 mol dm⁻³ CH₃COOH(aq), and explain why titration against standard NaOH(aq) cannot distinguish them by equivalence volume.",
          hints: [
            "Contrast complete dissociation of HCl with partial dissociation of CH₃COOH.",
            "Give concrete observable differences (pH, conductivity, or rate with Mg/CaCO₃), then use Le Chatelier's principle to explain why neutralisation volumes match.",
          ],
          modelAnswer:
            "HCl is a strong acid that dissociates completely in water, whereas CH₃COOH is a weak acid that dissociates only partially, giving HCl a much higher hydrogen ion concentration. First, a pH meter reads a lower value (1.00) for HCl than for ethanoic acid (~2.88). Second, HCl shows much higher electrical conductivity because it contains a far greater concentration of mobile ions (or reacts faster with magnesium ribbon with more vigorous effervescence). However, titrating equal volumes with NaOH requires the exact same equivalence volume because both flasks hold identical total moles of monoprotic acid; as hydroxide removes H⁺, Le Chatelier's principle shifts the weak-acid equilibrium forward until all un-ionised molecules react.",
          markScheme: [
            {
              point: "Links distinction to complete vs partial dissociation giving different [H⁺]",
              keywords: ["dissociates completely", "partially", "higher hydrogen ion"],
            },
            {
              point: "Valid experimental test 1 with expected result (e.g. lower pH for HCl)",
              keywords: ["lower value", "ph meter", "1.00", "2.88"],
            },
            {
              point: "Valid experimental test 2 with expected result (higher electrical conductivity or faster Mg/CaCO₃ reaction)",
              keywords: ["higher electrical conductivity", "mobile ions", "vigorous effervescence", "reacts faster"],
            },
            {
              point: "Explains identical equivalence volume via equal moles of acid and Le Chatelier shift to complete reaction",
              keywords: ["le chatelier", "identical total moles", "equilibrium forward", "all un-ionised"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant distinction or reasoning provided." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies one or two valid tests with limited link to ionisation extent, or omits equivalence-volume explanation." },
            { band: "3–4", marks: [3, 4], descriptor: "Gives two clear experimental comparisons grounded in complete vs partial dissociation AND explains identical NaOH neutralisation volumes via equilibrium shift." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "Benzoic acid, C₆H₅COOH, has K_a = 6.31 × 10⁻⁵ at 298 K. Calculate the pH of a 0.400 mol dm⁻³ aqueous solution of benzoic acid to 2 decimal places.",
          answer: { type: "number", value: 2.3, tolerance: 0.02, display: "2.30" },
          hints: [
            "Apply the small-x approximation: [H⁺] ≈ √(K_a × [HA]).",
            "Calculate √(6.31 × 10⁻⁵ × 0.400), then take −log₁₀.",
          ],
          solution: [
            "[H⁺] ≈ {{sqrt(6.31 * 10^(-5) * 0.400)}} = 5.024 × 10⁻³ mol dm⁻³ (1.26% dissociated — approximation valid).",
            "pH = −log₁₀(5.024 × 10⁻³) = 2.30.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "Aqueous ammonia has K_b = 1.78 × 10⁻⁵ at 298 K (K_w = 1.00 × 10⁻¹⁴). Calculate the pH of a 0.250 mol dm⁻³ NH₃(aq) solution to 2 decimal places.",
          answer: { type: "number", value: 11.32, tolerance: 0.02, display: "11.32" },
          traps: [
            {
              spec: { type: "number", value: 2.68, tolerance: 0.02 },
              feedback: "2.68 is pOH — convert to pH via 14.00 − pOH.",
            },
          ],
          hints: [
            "Find [OH⁻] ≈ √(K_b × [NH₃]) first.",
            "Convert [OH⁻] to pOH, then calculate pH = 14.00 − pOH.",
          ],
          solution: [
            "[OH⁻] ≈ {{sqrt(1.78 * 10^(-5) * 0.250)}} = 2.110 × 10⁻³ mol dm⁻³.",
            "pOH = −log₁₀(2.110 × 10⁻³) = 2.676.",
            "pH = 14.00 − 2.676 = 11.32.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "Given K_b(NH₃) = 1.78 × 10⁻⁵ at 298 K (K_w = 1.00 × 10⁻¹⁴), calculate the pK_a of the conjugate ammonium ion, NH₄⁺, to 2 decimal places.",
          answer: { type: "number", value: 9.25, tolerance: 0.02, display: "9.25" },
          hints: [
            "First calculate pK_b = −log₁₀(1.78 × 10⁻⁵).",
            "Then use the conjugate-pair relation pK_a + pK_b = 14.00.",
          ],
          solution: [
            "pK_b(NH₃) = −log₁₀(1.78 × 10⁻⁵) = 4.750.",
            "pK_a(NH₄⁺) = 14.00 − 4.750 = 9.25.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "weak-acids-buffers-titrations-hl",
          marks: 4,
          question:
            "Predict and explain the relative pH (acidic, basic, or neutral) of 0.10 mol dm⁻³ aqueous solutions of `CH₃COONa`, `NH₄Cl`, and `FeCl₃` at 298 K, including ionic hydrolysis equations.",
          hints: [
            "Identify which ion in each salt hydrolyses water (conjugate base of a weak acid, conjugate acid of a weak base, or high charge-density metal complex).",
            "Write a balanced equilibrium showing either OH⁻ or H₃O⁺ / H⁺ formation for all three salts.",
          ],
          modelAnswer:
            "CH₃COONa forms a basic solution (pH > 7) because the ethanoate conjugate base hydrolyses water: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, producing excess hydroxide ions while Na⁺ does not hydrolyse. NH₄Cl forms an acidic solution (pH < 7) because the ammonium conjugate acid donates a proton to water: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, whereas Cl⁻ is a negligible conjugate base. FeCl₃ forms a strongly acidic solution because the small, highly charged Fe³⁺ cation has high charge density and strongly polarises the O−H bonds in its hexaaqua complex: [Fe(H₂O)₆]³⁺ ⇌ [Fe(H₂O)₅(OH)]²⁺ + H⁺.",
          markScheme: [
            {
              point: "Identifies CH₃COONa as basic and writes CH₃COO⁻ hydrolysis forming OH⁻",
              keywords: ["ethanoate", "ch₃coo⁻ + h₂o", "ch3coo- + h2o", "hydroxide"],
            },
            {
              point: "Identifies NH₄Cl as acidic and writes NH₄⁺ hydrolysis forming H₃O⁺ / H⁺",
              keywords: ["ammonium", "nh₄⁺ + h₂o", "nh4+ + h2o", "h₃o⁺"],
            },
            {
              point: "Explains FeCl₃ acidity via high charge density of Fe³⁺ polarising O−H bonds of water ligands",
              keywords: ["charge density", "polarises", "polarizes", "o−h", "o-h"],
            },
            {
              point: "Writes hexaaquairon(III) dissociation equation [Fe(H₂O)₆]³⁺ ⇌ [Fe(H₂O)₅(OH)]²⁺ + H⁺",
              keywords: ["[fe(h₂o)₆]³⁺", "[fe(h2o)6]3+", "hexaaqua", "[fe(h₂o)₅(oh)]²⁺"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No correct salt classification or hydrolysis chemistry." },
            { band: "1–2", marks: [1, 2], descriptor: "Correctly classifies pH of two or three salts with partial equations or omits charge-density mechanism for Fe³⁺." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly predicts and explains all three salts with balanced hydrolysis equations and Fe³⁺ ligand polarisation." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "Calculate the pH of a buffer solution at 298 K containing 0.180 mol dm⁻³ CH₃COOH (pK_a = 4.76) and 0.360 mol dm⁻³ CH₃COONa. Give your answer to 2 decimal places.",
          answer: { type: "number", value: 5.06, tolerance: 0.02, display: "5.06" },
          hints: [
            "Substitute into Henderson–Hasselbalch: pH = pK_a + log₁₀([A⁻]/[HA]).",
            "Note that 0.360 / 0.180 = 2.00.",
          ],
          solution: [
            "pH = 4.76 + log₁₀({{0.360 / 0.180}}) = 4.76 + log₁₀(2.00).",
            "pH = 4.76 + 0.301 = 5.06.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "A basic buffer at 298 K contains 0.200 mol dm⁻³ NH₃ (pK_b = 4.75) and 0.320 mol dm⁻³ NH₄Cl (K_w = 1.00 × 10⁻¹⁴). Calculate the pH of this buffer to 2 decimal places.",
          answer: { type: "number", value: 9.05, tolerance: 0.02, display: "9.05" },
          traps: [
            {
              spec: { type: "number", value: 4.95, tolerance: 0.02 },
              feedback: "4.95 is the pOH — subtract from 14.00 to obtain the pH!",
            },
          ],
          hints: [
            "Use the basic Henderson–Hasselbalch form: pOH = pK_b + log₁₀([NH₄⁺]/[NH₃]).",
            "Convert pOH to pH via pH = 14.00 − pOH.",
          ],
          solution: [
            "pOH = 4.75 + log₁₀({{0.320 / 0.200}}) = 4.75 + log₁₀(1.60) = 4.75 + 0.204 = 4.954.",
            "pH = 14.00 − 4.954 = 9.05.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q12",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "weak-acids-buffers-titrations-hl",
          question:
            "50.0 cm³ of 0.300 mol dm⁻³ CH₃COOH (pK_a = 4.76) is mixed with 25.0 cm³ of 0.240 mol dm⁻³ NaOH(aq) at 298 K. Calculate the pH of the resulting buffer mixture to 2 decimal places.",
          answer: { type: "number", value: 4.58, tolerance: 0.02, display: "4.58" },
          hints: [
            "Calculate initial moles of CH₃COOH and NaOH before mixing.",
            "Subtract limiting moles of OH⁻ from CH₃COOH to find remaining HA and newly formed A⁻, then apply Henderson–Hasselbalch.",
          ],
          solution: [
            "n(CH₃COOH)_init = 0.0500 × 0.300 = 0.0150 mol; n(OH⁻) = 0.0250 × 0.240 = 0.00600 mol.",
            "After neutralisation: n(CH₃COOH) = 0.0150 − 0.00600 = 0.00900 mol; n(CH₃COO⁻) = 0.00600 mol.",
            "pH = 4.76 + log₁₀({{0.00600 / 0.00900}}) = 4.76 − 0.176 = 4.58.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "weak-acids-buffers-titrations-hl",
          marks: 4,
          question:
            "Explain, with balanced ionic equations, how an aqueous ethanoic acid / sodium ethanoate mixture acts as a buffer when small quantities of strong acid or strong base are introduced.",
          hints: [
            "State the two large reservoirs present in the buffer (weak acid HA and conjugate base A⁻).",
            "Write one equation showing added H⁺ consumed by A⁻, another showing added OH⁻ consumed by HA, and explain why the ratio barely shifts.",
          ],
          modelAnswer:
            "The mixture contains large reservoirs of both un-ionised weak acid (CH₃COOH) and its conjugate base (CH₃COO⁻ from complete dissociation of the salt). When a small quantity of strong acid is introduced, the conjugate base consumes the added protons: CH₃COO⁻(aq) + H⁺(aq) → CH₃COOH(aq), preventing a rise in free [H⁺]. When a small quantity of strong base is introduced, the weak acid neutralises the hydroxide ions: CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l). Because both reservoirs are large relative to the perturbation, the ratio [CH₃COO⁻]/[CH₃COOH] changes negligibly, keeping pH nearly constant.",
          markScheme: [
            {
              point: "States presence of large reservoirs of both weak acid CH₃COOH and conjugate base CH₃COO⁻",
              keywords: ["reservoirs", "conjugate base", "un-ionised"],
            },
            {
              point: "Equation for added H⁺ neutralised by CH₃COO⁻ → CH₃COOH",
              keywords: ["ch₃coo⁻(aq) + h⁺", "ch3coo- + h+", "consumes the added protons", "ch₃coo⁻ + h⁺"],
            },
            {
              point: "Equation for added OH⁻ neutralised by CH₃COOH → CH₃COO⁻ + H₂O",
              keywords: ["ch₃cooh(aq) + oh⁻", "ch3cooh + oh-", "neutralises the hydroxide", "ch₃cooh + oh⁻"],
            },
            {
              point: "Links stable [CH₃COO⁻]/[CH₃COOH] ratio to minimal change in pH",
              keywords: ["ratio", "nearly constant", "negligibly"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid buffer mechanism or equations." },
            { band: "1–2", marks: [1, 2], descriptor: "Provides one reaction or general statement without both ionic equations." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains both reservoirs, gives both balanced ionic equations, and links the stable conjugate ratio to pH resistance." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "bronsted-ph-strong-weak",
          marks: 3,
          question:
            "Explain the chemical causes of **acid rain** (distinguishing it from normal rainfall) and describe how rising atmospheric CO₂ drives ocean acidification and damages coral calcification.",
          hints: [
            "Contrast CO₂/H₂CO₃ (pH ~5.6) with SOₓ/NOₓ forming sulfurous/sulfuric and nitric acids (pH < 5.6).",
            "Show how excess H⁺ in seawater reacts with CO₃²⁻ to form HCO₃⁻, starving corals of carbonate ions.",
          ],
          modelAnswer:
            "Normal unpolluted rainfall has pH ≈ 5.6 because dissolved CO₂ forms weak carbonic acid (H₂CO₃). Acid rain has pH below 5.6 and results from anthropogenic emissions of sulfur oxides (SO₂/SO₃ from fossil fuels) and nitrogen oxides (NO/NO₂ from vehicle engines), which form stronger acids such as H₂SO₄ and HNO₃. In oceans, excess dissolved CO₂ increases [H⁺] (lowering seawater pH); these protons react with carbonate ions via H⁺ + CO₃²⁻ → HCO₃⁻, depleting the carbonate ions needed by corals and shellfish to precipitate CaCO₃ skeletons.",
          markScheme: [
            {
              point: "Distinguishes natural rain (pH 5.6 from H₂CO₃) from acid rain (pH < 5.6)",
              keywords: ["5.6", "carbonic acid", "h₂co₃", "below 5.6"],
            },
            {
              point: "Identifies SO₂/SO₃ forming H₂SO₃/H₂SO₄ and/or NOₓ forming HNO₂/HNO₃",
              keywords: ["sulfur oxides", "so₂", "h₂so₄", "nitrogen oxides", "hno₃"],
            },
            {
              point: "Explains H⁺ reacts with CO₃²⁻ → HCO₃⁻, depleting carbonate needed for CaCO₃ coral shells",
              keywords: ["carbonate", "co₃²⁻", "caco₃", "hco₃⁻"],
            },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Analyse",
          guideRef: "weak-acids-buffers-titrations-hl",
          marks: 5,
          question:
            "Describe the four key features of the titration curve obtained when 25.0 cm³ of 0.100 mol dm⁻³ CH₃COOH (`pK_a = 4.76`) is titrated with 0.100 mol dm⁻³ NaOH(aq), and justify why phenolphthalein (range 8.3–10.0) is suitable whereas methyl orange (range 3.1–4.4) is not.",
          hints: [
            "Walk left-to-right along the curve: initial pH (~2.9), gradual buffer region + half-equivalence landmark at 12.5 cm³, equivalence point at 25.0 cm³ (why pH > 7?), and excess base plateau.",
            "Compare each indicator's colour-change range against the vertical inflection (~pH 7–10.5).",
          ],
          modelAnswer:
            "First, the curve starts around pH 2.9 (higher than strong HCl because ethanoic acid only dissociates partially). Second, between roughly 5 and 20 cm³ of NaOH, the slope flattens across the buffer region, passing through the half-equivalence point at 12.5 cm³ where [CH₃COOH] = [CH₃COO⁻] and pH = pK_a = 4.76. Third, a sharp vertical inflection occurs at the equivalence volume of 25.0 cm³ spanning roughly pH 7 to 10.5, with an alkaline equivalence pH (~8.7) caused by ethanoate hydrolysis (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻). Fourth, beyond equivalence the pH levels off asymptotically near 13 as excess strong base dominates. Phenolphthalein (8.3–10.0) is suitable because its entire transition interval falls within the steep vertical jump, giving a sharp end-point, whereas methyl orange (3.1–4.4) changes colour gradually inside the acidic buffer zone well before equivalence.",
          markScheme: [
            {
              point: "Notes initial pH around 2.9 due to partial dissociation",
              keywords: ["2.9", "partial", "starts around"],
            },
            {
              point: "Identifies buffer region and half-equivalence at 12.5 cm³ where pH = pK_a = 4.76",
              keywords: ["half-equivalence", "12.5", "buffer region", "ph = pk_a"],
            },
            {
              point: "Identifies basic equivalence point (pH > 7 / ~8.7 at 25.0 cm³) due to CH₃COO⁻ hydrolysis",
              keywords: ["8.7", "hydrolysis", "alkaline equivalence", "vertical inflection"],
            },
            {
              point: "Justifies phenolphthalein: its transition interval lies cleanly within the steep vertical jump",
              keywords: ["vertical jump", "steep vertical", "sharp end-point", "transition interval"],
            },
            {
              point: "Rejects methyl orange: changes colour early inside the buffer zone before equivalence",
              keywords: ["before equivalence", "buffer zone", "gradually", "early"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate description of titration curve landmarks or indicator choice." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions basic equivalence pH or phenolphthalein choice without quantitative landmarks or hydrolysis reasoning." },
            { band: "3–4", marks: [3, 4], descriptor: "Covers most curve landmarks (buffer, half-equivalence, basic equivalence) and compares indicator ranges accurately." },
            { band: "5", marks: [5, 5], descriptor: "Fully analyses all four regions with exact volumes/pH = pK_a, salt hydrolysis equation, and rigorous indicator justification." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2: Redox, Voltaic Cells, E⊖ & Electrolysis (SL/HL) — 15 Qs
    // -------------------------------------------------------------------------
    {
      id: "r3-1-proton-electron-transfer-p2",
      title: "Paper 2 · Set 2: Redox, Voltaic Cells, E⊖ & Electrolysis (SL/HL)",
      level: "HL",
      questions: [
        {
          id: "r3-1-proton-electron-transfer-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "redox-voltaic-electrolytic",
          question:
            "Deduce the average oxidation state of sulfur in the thiosulfate ion, S₂O₃²⁻. Enter an integer.",
          answer: { type: "number", value: 2, display: "+2" },
          hints: [
            "Assign O = −2 and set 2x + 3(−2) equal to the overall −2 charge of the ion.",
          ],
          solution: [
            "2x + 3(−2) = −2 → 2x = +4 → x = +2.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "redox-voltaic-electrolytic",
          question:
            "A 25.0 cm³ sample of ethanedioate solution, C₂O₄²⁻(aq), reacts completely with 18.0 cm³ of 0.0250 mol dm⁻³ acidified KMnO₄(aq) according to `2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O`. Calculate `[C₂O₄²⁻]` in mol dm⁻³ to 3 significant figures.",
          answer: { type: "number", value: 0.045, tolerance: 0.001, display: "0.0450" },
          hints: [
            "Find n(MnO₄⁻) = 0.0180 × 0.0250 mol.",
            "Multiply by 5/2 using the balanced 2 : 5 stoichiometry, then divide by 0.0250 dm³.",
          ],
          solution: [
            "n(MnO₄⁻) = 0.0180 × 0.0250 = 4.50 × 10⁻⁴ mol.",
            "n(C₂O₄²⁻) = {{5/2}} × 4.50 × 10⁻⁴ = 1.125 × 10⁻³ mol.",
            "[C₂O₄²⁻] = {{(1.125 * 10^(-3)) / 0.0250}} = 0.0450 mol dm⁻³.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "redox-voltaic-electrolytic",
          question:
            "In a Winkler BOD assay on 50.0 cm³ river water samples, the Day 0 titration requires 12.50 cm³ of 0.00400 mol dm⁻³ Na₂S₂O₃(aq), whereas an identical sample incubated in the dark for 5 days requires 7.50 cm³. Calculate the 5-day BOD in mg dm⁻³ (ppm) given M(O₂) = 32.00 g mol⁻¹.",
          answer: { type: "number", value: 3.2, tolerance: 0.05, display: "3.20" },
          hints: [
            "You can take the difference in titrant volume directly: ΔV = 12.50 − 7.50 = 5.00 cm³.",
            "Convert Δn(S₂O₃²⁻) to Δn(O₂) using the 1 : 4 Winkler ratio, divide by 0.0500 dm³, and multiply by 32 000 mg mol⁻¹.",
          ],
          solution: [
            "ΔV(S₂O₃²⁻) = 12.50 − 7.50 = 5.00 cm³ → Δn(S₂O₃²⁻) = 0.00500 × 0.00400 = 2.00 × 10⁻⁵ mol.",
            "Winkler ratio (1 O₂ : 4 S₂O₃²⁻): Δn(O₂) = {{(2.00 * 10^(-5)) / 4}} = 5.00 × 10⁻⁶ mol.",
            "Δ[O₂] = {{(5.00 * 10^(-6)) / 0.0500}} = 1.00 × 10⁻⁴ mol dm⁻³.",
            "BOD = 1.00 × 10⁻⁴ × 32.00 × 1000 = 3.20 mg dm⁻³.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Construct",
          guideRef: "redox-voltaic-electrolytic",
          marks: 4,
          question:
            "Construct the two balanced half-equations and the overall ionic equation for the reaction of acidified dichromate(VI) ions (`Cr₂O₇²⁻`) with iron(II) ions (`Fe²⁺`) forming `Cr³⁺` and `Fe³⁺`, and identify the oxidising and reducing agents.",
          hints: [
            "Balance Cr first (2 Cr³⁺), then 7 O with 7 H₂O, then 14 H⁺, then charge with 6 e⁻.",
            "Multiply the Fe²⁺ oxidation half-equation by 6 before summing, and remember the oxidising agent is itself reduced.",
          ],
          modelAnswer:
            "Reduction half-equation: Cr₂O₇²⁻(aq) + 14H⁺(aq) + 6e⁻ → 2Cr³⁺(aq) + 7H₂O(l). Oxidation half-equation: Fe²⁺(aq) → Fe³⁺(aq) + e⁻. Multiplying the iron half-equation by 6 to balance 6 electrons and combining gives the overall equation: Cr₂O₇²⁻(aq) + 6Fe²⁺(aq) + 14H⁺(aq) → 2Cr³⁺(aq) + 6Fe³⁺(aq) + 7H₂O(l). Dichromate(VI) gains electrons (Cr drops from +6 to +3) so it is the oxidising agent, whereas iron(II) loses electrons (+2 to +3) so it is the reducing agent.",
          markScheme: [
            {
              point: "Correct balanced reduction half-equation with 14H⁺, 6e⁻, 2Cr³⁺, 7H₂O",
              keywords: ["14h⁺", "6e⁻", "7h₂o", "14h+"],
            },
            {
              point: "Correct oxidation half-equation Fe²⁺ → Fe³⁺ + e⁻",
              keywords: ["fe²⁺(aq) → fe³⁺", "fe2+ -> fe3+", "fe²⁺ → fe³⁺"],
            },
            {
              point: "Correct overall balanced equation with 6Fe²⁺ and 6Fe³⁺",
              keywords: ["6fe²⁺", "6fe³⁺", "6fe2+"],
            },
            {
              point: "Identifies Cr₂O₇²⁻ as oxidising agent (reduced) and Fe²⁺ as reducing agent (oxidised)",
              keywords: ["gains electrons", "loses electrons", "+6 to +3"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No balanced half-equations or agent identification." },
            { band: "1–2", marks: [1, 2], descriptor: "One half-equation or agent correct, with balancing errors in H⁺/H₂O/e⁻." },
            { band: "3–4", marks: [3, 4], descriptor: "Both half-equations and overall equation fully balanced for atoms and charge, with both agents correctly justified." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "redox-voltaic-electrolytic",
          marks: 4,
          question:
            "Explain how a working `Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)` voltaic cell produces a continuous electric current, specifying electrode reactions, external electron flow, and the function of a `KNO₃(aq)` salt bridge.",
          hints: [
            "Identify which metal is oxidised at the anode (−) and which ion is reduced at the cathode (+).",
            "Distinguish external electron conduction from internal ionic migration (which ion enters which half-cell?).",
          ],
          modelAnswer:
            "Zinc is more reactive than copper, so zinc metal undergoes oxidation at the negative anode: Zn(s) → Zn²⁺(aq) + 2e⁻. The released electrons travel through the external metallic wire from the zinc anode to the positive copper cathode, where Cu²⁺ ions undergo reduction: Cu²⁺(aq) + 2e⁻ → Cu(s), plating fresh copper onto the electrode. The KNO₃ salt bridge completes the internal circuit and preserves electrical neutrality by allowing anions (NO₃⁻) to migrate into the Zn²⁺ beaker to balance excess positive charge, while cations (K⁺) migrate into the Cu²⁺ beaker to replace depleted Cu²⁺ ions.",
          markScheme: [
            {
              point: "Anode (−) oxidation: Zn → Zn²⁺ + 2e⁻",
              keywords: ["negative anode", "zn(s) → zn²⁺", "zn -> zn2+", "undergoes oxidation"],
            },
            {
              point: "Cathode (+) reduction: Cu²⁺ + 2e⁻ → Cu",
              keywords: ["positive copper cathode", "cu²⁺(aq) + 2e⁻", "cu2+ + 2e-", "undergo reduction"],
            },
            {
              point: "Electrons move through the external wire from zinc anode to copper cathode",
              keywords: ["external metallic wire", "external wire", "zinc anode to"],
            },
            {
              point: "Salt bridge maintains electrical neutrality via ion migration (NO₃⁻ → Zn half-cell, K⁺ → Cu half-cell)",
              keywords: ["electrical neutrality", "no₃⁻", "k⁺", "anions", "cations"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid description of cell operation." },
            { band: "1–2", marks: [1, 2], descriptor: "States basic half-equations or electron flow but omits ion-migration detail." },
            { band: "3–4", marks: [3, 4], descriptor: "Gives both half-equations with polarities, wire electron flow, and directional salt-bridge ion migration." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "Given E⊖(Zn²⁺/Zn) = −0.76 V and E⊖(Fe³⁺/Fe²⁺) = +0.77 V, calculate E⊖_cell (in V) for the spontaneous voltaic cell combining these two half-cells. Give your answer to 2 decimal places.",
          answer: { type: "number", value: 1.53, tolerance: 0.01, display: "1.53 V" },
          hints: [
            "The Fe³⁺/Fe²⁺ couple has the higher E⊖ (+0.77 V), so it serves as the cathode.",
            "Subtract E⊖_anode from E⊖_cathode without multiplying by 2.",
          ],
          solution: [
            "E⊖_cell = E⊖_cathode − E⊖_anode = (+0.77) − (−0.76) = +1.53 V.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "For `2Cr(s) + 3Cu²⁺(aq) → 2Cr³⁺(aq) + 3Cu(s)`, E⊖(Cr³⁺/Cr) = −0.74 V, E⊖(Cu²⁺/Cu) = +0.34 V, and F = 96 500 C mol⁻¹. Calculate ΔG⊖ in kJ mol⁻¹ to 3 significant figures.",
          answer: { type: "number", value: -625, tolerance: 2, display: "−625 kJ mol⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 625, tolerance: 2 },
              feedback: "Spontaneous cells (E⊖ > 0) have NEGATIVE ΔG⊖! Don't drop the minus sign.",
            },
            {
              spec: { type: "number", value: -625320, tolerance: 500 },
              feedback: "Remember to divide by 1000 to convert J mol⁻¹ into kJ mol⁻¹!",
            },
          ],
          hints: [
            "First calculate E⊖_cell = (+0.34) − (−0.74) = +1.08 V.",
            "Count total moles of electrons transferred in the balanced equation (n = 6), compute −nFE⊖, and divide by 1000.",
          ],
          solution: [
            "E⊖_cell = (+0.34) − (−0.74) = +1.08 V; balanced transfer uses n = 6 mol e⁻.",
            "ΔG⊖ = −n F E⊖_cell = −6 × 96 500 × 1.08 = −625 320 J mol⁻¹ = −625 kJ mol⁻¹.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "Given E⊖(MnO₄⁻/Mn²⁺) = +1.51 V and E⊖(Cl₂/Cl⁻) = +1.36 V, calculate E⊖_cell (in V) for the oxidation of aqueous Cl⁻ ions to Cl₂(g) by acidified MnO₄⁻(aq). Give your answer to 2 decimal places.",
          answer: { type: "number", value: 0.15, tolerance: 0.01, display: "0.15 V" },
          hints: [
            "MnO₄⁻ is being reduced (cathode) and Cl⁻ is being oxidised (anode).",
            "E⊖_cell = E⊖(MnO₄⁻/Mn²⁺) − E⊖(Cl₂/Cl⁻).",
          ],
          solution: [
            "E⊖_cell = (+1.51) − (+1.36) = +0.15 V (> 0, so spontaneous under standard conditions — which is why HCl is never used to acidify KMnO₄ titrations!).",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          marks: 4,
          question:
            "State the standard conditions and reference potential of the Standard Hydrogen Electrode (SHE), and explain why standard electrode potentials are never multiplied by stoichiometric coefficients when combining half-equations.",
          hints: [
            "List all four standard SHE conditions (concentration, gas pressure, temperature, electrode material) and its 0.00 V reference value.",
            "Connect E⊖ to ΔG⊖/(−nF) to prove E⊖ is an intensive energy-per-coulomb property.",
          ],
          modelAnswer:
            "The Standard Hydrogen Electrode is assigned a reference potential of exactly 0.00 V under four standard conditions: 1.0 mol dm⁻³ H⁺(aq) solution, hydrogen gas supplied at 100 kPa pressure, a temperature of 298 K, and an inert platinised platinum electrode providing catalytic surface area for 2H⁺(aq) + 2e⁻ ⇌ H₂(g). Electrode potential is an intensive property representing electrical work per unit charge (J C⁻¹), defined by E⊖ = −ΔG⊖ / (nF). Doubling a half-equation doubles both the extensive Gibbs energy change ΔG⊖ and the charge nF simultaneously, so their ratio E⊖ remains unchanged.",
          markScheme: [
            {
              point: "States reference potential 0.00 V and [H⁺] = 1.0 mol dm⁻³",
              keywords: ["0.00 v", "1.0 mol dm⁻³", "1.0 mol dm-3"],
            },
            {
              point: "States H₂ gas at 100 kPa, temperature 298 K, and platinised platinum electrode",
              keywords: ["100 kpa", "298 k", "platinised platinum", "platinum"],
            },
            {
              point: "Explains E⊖ is an intensive property (energy/work per unit charge)",
              keywords: ["intensive", "per unit charge", "j c⁻¹"],
            },
            {
              point: "Uses E⊖ = −ΔG⊖/(nF) to show scaling doubles both ΔG⊖ and nF so ratio is unchanged",
              keywords: ["ratio", "remains unchanged", "both", "nf"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Missing SHE conditions and thermodynamic explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Lists most SHE conditions without explaining why E⊖ is intensive." },
            { band: "3–4", marks: [3, 4], descriptor: "States all four SHE conditions plus 0.00 V and gives a rigorous intensive-property explanation." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "A steady current of 3.20 A passes through an aqueous nickel(II) sulfate bath (`Ni²⁺(aq)`) for 45.0 minutes. Calculate the mass of nickel metal (in g) deposited at the cathode (M(Ni) = 58.69 g mol⁻¹, F = 96 500 C mol⁻¹). Give your answer to 2 decimal places.",
          answer: { type: "number", value: 2.63, tolerance: 0.03, display: "2.63 g" },
          traps: [
            {
              spec: { type: "number", value: 5.25, tolerance: 0.05 },
              feedback: "Remember Ni²⁺ + 2e⁻ → Ni requires z = 2 moles of electrons per mole of Ni!",
            },
          ],
          hints: [
            "Convert 45.0 minutes to seconds (t = 2700 s), then find Q = I × t.",
            "Find n(e⁻) = Q / 96 500, divide by z = 2 for Ni²⁺, and multiply by 58.69 g mol⁻¹.",
          ],
          solution: [
            "t = 45.0 × 60 = 2700 s → Q = 3.20 × 2700 = 8640 C.",
            "n(e⁻) = {{8640 / 96500}} = 0.08953 mol.",
            "n(Ni) = {{0.08953 / 2}} = 0.04477 mol → m(Ni) = 0.04477 × 58.69 = 2.63 g.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "How many **minutes** must a steady current of 2.00 A flow through AgNO₃(aq) to deposit 5.40 g of silver metal at the cathode (M(Ag) = 107.87 g mol⁻¹, F = 96 500 C mol⁻¹)? Give your answer to 1 decimal place.",
          answer: { type: "number", value: 40.3, tolerance: 0.3, display: "40.3 min" },
          traps: [
            {
              spec: { type: "number", value: 2415, tolerance: 15 },
              feedback: "2415 is the time in SECONDS — divide by 60 to convert to minutes!",
            },
          ],
          hints: [
            "Work backwards: find n(Ag) = 5.40 / 107.87, which equals n(e⁻) since z = 1.",
            "Compute Q = n(e⁻) × 96 500, then t = Q / I (in seconds), and divide by 60 for minutes.",
          ],
          solution: [
            "n(Ag) = {{5.40 / 107.87}} = 0.05006 mol = n(e⁻) (since Ag⁺ + e⁻ → Ag).",
            "Q = 0.05006 × 96 500 = 4831 C → t = {{4831 / 2.00}} = 2415 s.",
            "In minutes: {{2415 / 60}} = 40.3 min.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q12",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          question:
            "An electrolytic cell containing `CuSO₄(aq)` is wired in series with a molten `Al₂O₃(l)` cell. If 1.905 g of Cu(s) is plated in the first cell, calculate the mass of Al(s) (in g) produced in the second cell (M(Cu) = 63.55 g mol⁻¹, M(Al) = 26.98 g mol⁻¹). Give your answer to 3 significant figures.",
          answer: { type: "number", value: 0.539, tolerance: 0.008, display: "0.539 g" },
          hints: [
            "Cells in series pass the exact same moles of electrons, n(e⁻).",
            "Compute n(Cu) = 1.905 / 63.55, multiply by 2 to get n(e⁻), divide by 3 to get n(Al), and multiply by 26.98.",
          ],
          solution: [
            "n(Cu) = {{1.905 / 63.55}} = 0.02998 mol → n(e⁻) = 2 × 0.02998 = 0.05995 mol.",
            "In molten Al₂O₃, Al³⁺ + 3e⁻ → Al (z = 3): n(Al) = {{0.05995 / 3}} = 0.01998 mol.",
            "m(Al) = 0.01998 × 26.98 = 0.539 g.",
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "redox-voltaic-electrolytic",
          marks: 4,
          question:
            "Compare and contrast a voltaic cell with an electrolytic cell containing molten `PbBr₂(l)` in terms of energy conversion, electrode polarity, electrode reactions, and charge carriers.",
          hints: [
            "Highlight BOTH similarities (An Ox / Red Cat; electrons in wires, ions in electrolyte) AND differences (spontaneous vs driven; polarity flip).",
            "Include the molten PbBr₂(l) half-equations at each electrode.",
          ],
          modelAnswer:
            "Both cells share the universal rule that oxidation occurs at the anode and reduction occurs at the cathode, and in both cells electrons carry current in external wires while mobile ions carry charge through the liquid electrolyte. However, a voltaic cell converts chemical energy into electrical energy via a spontaneous redox reaction, with a negative anode and a positive cathode. By contrast, an electrolytic cell uses an external DC power supply to convert electrical energy into chemical energy, driving a non-spontaneous decomposition with reversed polarities: the anode is positive (2Br⁻ → Br₂ + 2e⁻) and the cathode is negative (Pb²⁺ + 2e⁻ → Pb).",
          markScheme: [
            {
              point: "Similarity: oxidation at anode and reduction at cathode in both, plus wire e⁻ vs electrolyte ion conduction",
              keywords: ["oxidation occurs at the anode", "mobile ions", "external wires"],
            },
            {
              point: "Difference in energy conversion and spontaneity (chemical → electrical spontaneous vs electrical → chemical non-spontaneous)",
              keywords: ["chemical energy into electrical", "non-spontaneous", "dc power supply"],
            },
            {
              point: "Polarity flip: voltaic anode (−)/cathode (+) vs electrolytic anode (+)/cathode (−)",
              keywords: ["negative anode", "reversed polarities", "anode is positive", "cathode is negative"],
            },
            {
              point: "Correct molten PbBr₂ half-equations (2Br⁻ → Br₂ + 2e⁻ and Pb²⁺ + 2e⁻ → Pb)",
              keywords: ["2br⁻ → br₂", "2br- -> br2", "pb²⁺ + 2e⁻", "pb2+ + 2e-"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate comparison of voltaic and electrolytic cells." },
            { band: "1–2", marks: [1, 2], descriptor: "Notes polarity or energy difference without similarities or molten PbBr₂ half-equations." },
            { band: "3–4", marks: [3, 4], descriptor: "Thoroughly covers both similarities and differences including spontaneity, polarities, charge carriers, and both half-equations." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Compare",
          guideRef: "electrode-potentials-aqueous-electrolysis-hl",
          marks: 5,
          question:
            "Compare and explain the anode products and electrolyte changes during electrolysis of: (a) concentrated vs dilute `NaCl(aq)` using inert graphite electrodes, and (b) `CuSO₄(aq)` using inert platinum vs active copper electrodes.",
          hints: [
            "In (a), compare E⊖(Cl₂/Cl⁻) = +1.36 V vs E⊖(O₂/H₂O) = +1.23 V and explain how high [Cl⁻] + oxygen overpotential flips the anode product in brine.",
            "In (b), contrast water oxidation at Pt (blue colour fades, pH drops) with copper anode dissolution at Cu (+0.34 V < +1.23 V, constant [Cu²⁺]).",
          ],
          modelAnswer:
            "In dilute NaCl(aq) with inert graphite electrodes, water is oxidised at the anode (2H₂O → O₂ + 4H⁺ + 4e⁻, E⊖ = +1.23 V) rather than chloride (+1.36 V), evolving oxygen gas. In concentrated brine, however, high [Cl⁻] shifts the chloride potential favourably and oxygen evolution suffers a large kinetic overpotential, so chloride is oxidised preferentially to chlorine gas (2Cl⁻ → Cl₂ + 2e⁻), while H₂ and OH⁻ form at the cathode making the bath alkaline. In CuSO₄(aq) with inert platinum electrodes, Cu deposits at the cathode while water oxidises to O₂ and H⁺ at the anode, causing the blue colour to fade and the solution to become acidic. With active copper electrodes, oxidising the copper anode itself (Cu → Cu²⁺ + 2e⁻, +0.34 V) requires far less potential than oxidising water (+1.23 V); therefore the anode loses mass at the same rate Cu plates on the cathode, keeping [Cu²⁺] and blue colour constant.",
          markScheme: [
            {
              point: "Dilute NaCl(aq) oxidises water to O₂(g) because +1.23 V is less positive than +1.36 V",
              keywords: ["oxygen gas", "1.23", "2h₂o → o₂", "water is oxidised"],
            },
            {
              point: "Concentrated NaCl(aq) forms Cl₂(g) due to high [Cl⁻] concentration effect and O₂ kinetic overpotential",
              keywords: ["overpotential", "chlorine gas", "2cl⁻ → cl₂", "high [cl⁻]"],
            },
            {
              point: "CuSO₄ with inert Pt evolves O₂ and H⁺ at anode; blue solution fades and turns acidic",
              keywords: ["fade", "acidic", "becomes acidic", "become acidic"],
            },
            {
              point: "CuSO₄ with active Cu dissolves Cu anode (Cu → Cu²⁺ + 2e⁻) because +0.34 V is lower than +1.23 V",
              keywords: ["cu → cu²⁺", "cu -> cu2+", "0.34", "loses mass"],
            },
            {
              point: "Concludes [Cu²⁺] and blue colour remain constant with active copper electrodes",
              keywords: ["constant", "same rate", "blue colour constant"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No correct selective-discharge products or reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "States some products without explaining overpotential, concentration, or electrode activity." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains both NaCl concentration contrast and CuSO₄ electrode contrast with minor omissions." },
            { band: "5", marks: [5, 5], descriptor: "Fully integrates E⊖ comparisons, overpotential/concentration effects, half-equations, and electrolyte colour/pH changes." },
          ],
        },
        {
          id: "r3-1-proton-electron-transfer-p2-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "redox-voltaic-electrolytic",
          marks: 3,
          question:
            "Explain how acidified potassium dichromate(VI) (`K₂Cr₂O₇/H⁺`) distinguishes primary, secondary, and tertiary alcohols, including the role of reaction conditions for primary alcohols and the redox colour change observed.",
          hints: [
            "State the Cr(VI) orange → Cr(III) green reduction observed for oxidisable alcohols.",
            "Contrast primary (distillation → aldehyde vs reflux → carboxylic acid), secondary (→ ketone), and tertiary (no oxidation).",
          ],
          modelAnswer:
            "Primary and secondary alcohols are oxidised by acidified K₂Cr₂O₇, reducing orange dichromate(VI) ions (Cr₂O₇²⁻) to green chromium(III) ions (Cr³⁺). For a primary alcohol, immediate distillation with limited oxidant isolates the aldehyde, whereas heating under reflux with excess oxidant drives complete oxidation to a carboxylic acid. A secondary alcohol oxidises only to a ketone (also turning orange to green), whereas a tertiary alcohol resists oxidation under these conditions because its carbinol carbon has no C−H bond to remove, so the solution stays orange.",
          markScheme: [
            {
              point: "States orange Cr₂O₇²⁻ reduced to green Cr³⁺ for primary and secondary alcohols",
              keywords: ["orange", "green", "cr³⁺", "cr3+"],
            },
            {
              point: "Primary alcohol: distillation gives aldehyde; reflux with excess gives carboxylic acid",
              keywords: ["distillation", "aldehyde", "reflux", "carboxylic acid"],
            },
            {
              point: "Secondary gives ketone; tertiary does not oxidise (stays orange) due to lack of C−H on carbinol carbon",
              keywords: ["ketone", "resists oxidation", "stays orange", "no c−h"],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 questions, all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "r3-1-proton-electron-transfer-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "weak-acids-buffers-titrations-hl",
      question:
        "A 250.0 cm³ buffer solution at 298 K contains 0.400 mol dm⁻³ CH₃COOH (pK_a = 4.76) and 0.400 mol dm⁻³ CH₃COONa. Exactly 0.0200 mol of gaseous HCl is bubbled into the buffer with negligible volume change. Calculate the new pH of the buffer to 2 decimal places.",
      answer: { type: "number", value: 4.58, tolerance: 0.02, display: "4.58" },
      hints: [
        "First find the initial moles of CH₃COOH and CH₃COO⁻ inside 250.0 cm³ (0.2500 dm³).",
        "Every mole of added HCl converts 1 mole of CH₃COO⁻ into 1 mole of CH₃COOH.",
        "Substitute the updated moles into Henderson–Hasselbalch: pH = 4.76 + log₁₀(n(A⁻)/n(HA)).",
      ],
      solution: [
        "Initial moles in 0.2500 dm³: n(CH₃COOH) = 0.100 mol; n(CH₃COO⁻) = 0.100 mol.",
        "Added 0.0200 mol H⁺ reacts quantitatively with CH₃COO⁻: CH₃COO⁻ + H⁺ → CH₃COOH.",
        "New moles: n(CH₃COO⁻) = 0.100 − 0.0200 = 0.0800 mol; n(CH₃COOH) = 0.100 + 0.0200 = 0.120 mol.",
        "pH = 4.76 + log₁₀({{0.0800 / 0.120}}) = 4.76 − 0.176 = 4.58 (only a 0.18-unit shift, compared to pH 1.10 if added to pure water!).",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "weak-acids-buffers-titrations-hl",
      question:
        "25.0 cm³ of 0.160 mol dm⁻³ methanoic acid, HCOOH(aq) (K_a = 1.78 × 10⁻⁴), is titrated to exact equivalence with 25.0 cm³ of 0.160 mol dm⁻³ NaOH(aq) at 298 K (K_w = 1.00 × 10⁻¹⁴). Calculate the pH at the equivalence point to 2 decimal places.",
      answer: { type: "number", value: 8.33, tolerance: 0.02, display: "8.33" },
      traps: [
        {
          spec: { type: "number", value: 8.48, tolerance: 0.02 },
          feedback: "Remember to halve the concentration to 0.0800 mol dm⁻³ because the total volume doubled to 50.0 cm³!",
        },
      ],
      hints: [
        "At equivalence, all HCOOH has become HCOO⁻ inside a COMBINED volume of 50.0 cm³, so [HCOO⁻] = 0.0800 mol dm⁻³.",
        "Find K_b(HCOO⁻) = K_w / K_a = 1.00 × 10⁻¹⁴ / 1.78 × 10⁻⁴.",
        "Use [OH⁻] ≈ √(K_b × [HCOO⁻]), find pOH, then subtract from 14.00.",
      ],
      solution: [
        "Total volume = 50.0 cm³, so [HCOO⁻] = {{(0.0250 * 0.160) / 0.0500}} = 0.0800 mol dm⁻³.",
        "K_b(HCOO⁻) = {{(1.00 * 10^(-14)) / (1.78 * 10^(-4))}} = 5.618 × 10⁻¹¹.",
        "[OH⁻] ≈ {{sqrt(5.618 * 10^(-11) * 0.0800)}} = 2.120 × 10⁻⁶ mol dm⁻³ → pOH = 5.674.",
        "pH = 14.00 − 5.674 = 8.33.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q03",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "weak-acids-buffers-titrations-hl",
      marks: 5,
      question:
        "Human arterial blood is maintained strictly at pH 7.40 using the carbonic acid / hydrogencarbonate system (`H₂CO₃ / HCO₃⁻`), whose physiological `pK_a` is 6.10. Calculate the `[HCO₃⁻] / [H₂CO₃]` ratio and evaluate how blood buffers metabolic acid effectively despite sitting outside the standard `pK_a ± 1` laboratory rule.",
      hints: [
        "Use Henderson–Hasselbalch to find 10^(7.40 − 6.10) = 10^(1.30) ≈ 20.",
        "Explain why a 20 : 1 excess of conjugate base HCO₃⁻ actually excels at mopping up metabolic acid (lactic acid/H⁺), AND why lungs exhaling CO₂ make blood an open buffer.",
      ],
      modelAnswer:
        "From Henderson–Hasselbalch, log₁₀([HCO₃⁻]/[H₂CO₃]) = 7.40 − 6.10 = 1.30, giving a ratio [HCO₃⁻]/[H₂CO₃] = 10^(1.30) ≈ 20 : 1. In a closed laboratory beaker, sitting 1.3 units above pK_a would provide poor capacity against base, yet human metabolism produces predominantly acids (such as lactic acid and CO₂), so the 20-fold reserve of conjugate base HCO₃⁻ provides high capacity precisely against added H⁺ via HCO₃⁻ + H⁺ → H₂CO₃. Crucially, blood is an open physiological system linked to the equilibrium H₂CO₃(aq) ⇌ H₂O(l) + CO₂(g): whenever H₂CO₃ builds up, hyperventilation in the lungs rapidly exhales excess CO₂, pulling the equilibrium right and keeping [H₂CO₃] low while kidneys replenish HCO₃⁻.",
      markScheme: [
        {
          point: "Calculates ratio 10^(1.30) ≈ 20 : 1 from Henderson–Hasselbalch",
          keywords: ["1.30", "20", "10^(1.30)", "20 : 1"],
        },
        {
          point: "Notes closed-system limitation outside pK_a ± 1 (weak capacity against added base)",
          keywords: ["closed", "capacity against base", "poor capacity"],
        },
        {
          point: "Explains 20-fold excess of HCO₃⁻ matches physiological need to neutralise metabolic acids (HCO₃⁻ + H⁺ → H₂CO₃)",
          keywords: ["lactic acid", "reserve of conjugate base", "hco₃⁻ + h⁺", "metabolic"],
        },
        {
          point: "Identifies blood as an open system via H₂CO₃ ⇌ H₂O + CO₂(g)",
          keywords: ["open", "h₂o(l) + co₂", "h2o + co2", "equilibrium"],
        },
        {
          point: "Links lung ventilation (exhaling CO₂) and kidney regulation of HCO₃⁻ to maintaining the ratio",
          keywords: ["lungs", "exhales", "kidneys", "ventilation"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No quantitative ratio or physiological buffer analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Computes ratio OR gives brief qualitative mention of CO₂ breathing without quantitative link." },
        { band: "3–4", marks: [3, 4], descriptor: "Calculates 20:1 ratio and explains open-system CO₂ ventilation or asymmetric acid-buffering role." },
        { band: "5", marks: [5, 5], descriptor: "Integrates exact 20:1 ratio, asymmetric metabolic acid demand, H₂CO₃ ⇌ CO₂ + H₂O equilibrium, and lung/kidney regulation." },
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      question:
        "For the spontaneous cell `Zn(s) + Ni²⁺(aq) → Zn²⁺(aq) + Ni(s)`, E⊖(Zn²⁺/Zn) = −0.76 V and E⊖(Ni²⁺/Ni) = −0.26 V. Using `ΔG⊖ = −nFE⊖ = −RT ln K` at 298 K (F = 96 500 C mol⁻¹, R = 8.31 J K⁻¹ mol⁻¹), calculate the value of `ln K` to 3 significant figures.",
      answer: { type: "number", value: 39.0, tolerance: 0.3, display: "39.0" },
      hints: [
        "First find E⊖_cell = (−0.26) − (−0.76) = +0.50 V with n = 2.",
        "Equate −nFE⊖ = −RT ln K to get ln K = nFE⊖ / (RT) — keep both sides in Joules!",
      ],
      solution: [
        "E⊖_cell = (−0.26) − (−0.76) = +0.50 V, and n = 2.",
        "ln K = {{(n * F * E) / (R * T)}} = {{(2 * 96500 * 0.50) / (8.31 * 298)}} = {{96500 / 2476.38}} = 38.97 → 39.0 (so K ≈ 8.4 × 10¹⁶ — essentially complete!).",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      question:
        "An industrial Hall–Héroult electrolytic smelter operates at a steady current of 1.50 × 10⁵ A for 2.00 hours, reducing Al³⁺ in molten cryolite–alumina to liquid aluminium. Calculate the mass of aluminium produced in **kilograms (kg)** to 3 significant figures (M(Al) = 26.98 g mol⁻¹, F = 96 500 C mol⁻¹).",
      answer: { type: "number", value: 101, tolerance: 1, display: "101 kg" },
      hints: [
        "Convert 2.00 hours into seconds (t = 7200 s) and compute Q = I × t.",
        "Divide Q by F to find n(e⁻), divide by z = 3 (Al³⁺ + 3e⁻ → Al), multiply by 26.98 g mol⁻¹, and divide by 1000 for kg.",
      ],
      solution: [
        "t = 2.00 × 3600 = 7200 s → Q = 1.50 × 10⁵ × 7200 = 1.08 × 10⁹ C.",
        "n(e⁻) = {{(1.08 * 10^9) / 96500}} = 1.119 × 10⁴ mol.",
        "n(Al) = {{(1.119 * 10^4) / 3}} = 3.731 × 10³ mol.",
        "m(Al) = 3.731 × 10³ × 26.98 g = 1.007 × 10⁵ g = 101 kg.",
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "redox-voltaic-electrolytic",
      marks: 5,
      question:
        "Two river samples are analysed by the Winkler method. Upstream water gives BOD = 1.8 mg dm⁻³, whereas water 2 km downstream of a farm gives BOD = 18.5 mg dm⁻³. Derive the overall `1 O₂ : 4 S₂O₃²⁻` Winkler mole ratio from its three balanced reactions and analyse the environmental cause and ecological consequence of the downstream BOD spike.",
      hints: [
        "Write the three linked Winkler steps (Mn²⁺ + O₂ → MnO₂; MnO₂ + I⁻ → I₂; I₂ + S₂O₃²⁻ → S₄O₆²⁻) and trace coefficients from 1 mol O₂.",
        "Link agricultural fertiliser/organic runoff to algal blooms, aerobic bacterial decomposition, and aquatic hypoxia.",
      ],
      modelAnswer:
        "In Step 1, dissolved oxygen fixes manganese(II) in alkaline medium: 2Mn²⁺ + O₂ + 4OH⁻ → 2MnO₂ + 2H₂O (1 mol O₂ yields 2 mol MnO₂). In Step 2, acidified iodide reduces MnO₂: MnO₂ + 2I⁻ + 4H⁺ → Mn²⁺ + I₂ + 2H₂O (2 mol MnO₂ liberates 2 mol I₂). In Step 3, thiosulfate titrates iodine: 2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻ (2 mol I₂ consumes 4 mol S₂O₃²⁻), proving n(O₂) : n(S₂O₃²⁻) = 1 : 4. The upstream BOD of 1.8 mg dm⁻³ reflects clean, low-nutrient water, whereas the spike to 18.5 mg dm⁻³ downstream signals severe organic pollution and nitrate/phosphate runoff triggering eutrophication. Algal blooms block sunlight and die, causing aerobic bacteria to multiply and rapidly consume dissolved oxygen, resulting in hypoxia that kills fish and aquatic invertebrates.",
      markScheme: [
        {
          point: "Step 1 balanced: 2Mn²⁺ + O₂ + 4OH⁻ → 2MnO₂ + 2H₂O (1 O₂ → 2 MnO₂)",
          keywords: ["2mno₂", "2mno2", "4oh⁻", "2mn²⁺"],
        },
        {
          point: "Step 2 balanced: MnO₂ + 2I⁻ + 4H⁺ → Mn²⁺ + I₂ + 2H₂O (2 MnO₂ → 2 I₂)",
          keywords: ["2i⁻", "4h⁺", "liberates", "reduces mno₂"],
        },
        {
          point: "Step 3 balanced: 2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻ → derives 1 : 4 overall ratio",
          keywords: ["s₄o₆²⁻", "s4o6^2-", "2s₂o₃²⁻", "4 mol"],
        },
        {
          point: "Identifies agricultural nitrate/phosphate or organic runoff causing eutrophication / algal blooms",
          keywords: ["eutrophication", "algal blooms", "nitrate", "phosphate"],
        },
        {
          point: "Explains aerobic bacterial decomposition depleting dissolved O₂ and causing hypoxia / aquatic death",
          keywords: ["aerobic bacteria", "hypoxia", "dissolved oxygen", "kills fish"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid Winkler stoichiometry or eutrophication analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Partial Winkler equations OR general pollution description without linking both." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly derives 1:4 ratio with minor balancing slips and clearly explains eutrophication impact." },
        { band: "5", marks: [5, 5], descriptor: "All three Winkler equations balanced to prove 1:4 ratio, paired with complete eutrophication-to-hypoxia ecological analysis." },
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      marks: 6,
      question:
        "Evaluate the limitations of using standard electrode potentials (`E⊖`) alone to predict whether a redox reaction will actually occur in the laboratory or an industrial electrolytic cell. Support your evaluation with three distinct chemical mechanisms and concrete examples.",
      hints: [
        "Consider (1) kinetic activation energy barriers (thermodynamic feasibility vs rate), (2) non-standard concentrations/temperatures/pH shifting real E away from E⊖, and (3) electrode overpotential (e.g. brine electrolysis).",
        "Mention ΔG⊖ = −nFE⊖ explicitly to distinguish thermodynamic spontaneity from observed reaction.",
      ],
      modelAnswer:
        "Standard electrode potentials predict thermodynamic spontaneity under strictly standard conditions (298 K, 1.0 mol dm⁻³, 100 kPa) via ΔG⊖ = −nFE⊖_cell, where E⊖_cell > 0 implies ΔG⊖ < 0. However, E⊖ alone faces three major limitations. First, thermodynamics ignores kinetics: a reaction with a positive E⊖_cell can possess a very high activation energy and proceed at a negligible rate at room temperature (for instance, aqueous peroxodisulfate oxidising iodide slowly without an Fe²⁺ catalyst, or H₂ and O₂ failing to react without ignition). Second, laboratory concentrations and pH rarely equal 1.0 mol dm⁻³: shifting reactant or product concentrations alters the actual electrode potential by Le Chatelier's principle, which can flip the sign of E_cell when E⊖_cell is small (such as concentrated HCl vs dilute Cl⁻ with MnO₂ or Cu²⁺/I⁻ precipitation of CuI). Third, in electrolytic cells, kinetic overpotential at electrode surfaces favours faster pathways over thermodynamically cheaper ones — in concentrated NaCl(aq) brine, oxygen evolution (+1.23 V) has a high overpotential on graphite, so chlorine (+1.36 V) is discharged instead.",
      markScheme: [
        {
          point: "Links E⊖_cell > 0 to thermodynamic spontaneity (ΔG⊖ = −nFE⊖ < 0) under standard conditions",
          keywords: ["thermodynamic spontaneity", "δg⊖ = −nfe⊖", "298 k", "1.0 mol dm⁻³"],
        },
        {
          point: "Limitation 1 — Kinetics: high activation energy prevents observable rate despite E⊖_cell > 0",
          keywords: ["activation energy", "kinetics", "negligible rate"],
        },
        {
          point: "Concrete kinetic example (e.g. H₂ + O₂ ignition, or S₂O₈²⁻ + I⁻ requiring catalyst)",
          keywords: ["catalyst", "ignition", "peroxodisulfate", "h₂ and o₂"],
        },
        {
          point: "Limitation 2 — Non-standard concentrations / pH shifting actual potential via Le Chatelier",
          keywords: ["non-standard", "le chatelier", "flip the sign", "rarely equal"],
        },
        {
          point: "Limitation 3 — Overpotential in electrolysis favouring kinetically faster discharge",
          keywords: ["overpotential", "electrode surfaces", "kinetically"],
        },
        {
          point: "Concrete brine electrolysis example (Cl₂ at +1.36 V discharged over O₂ at +1.23 V)",
          keywords: ["brine", "1.36", "1.23", "chlorine"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid evaluation of E⊖ limitations." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies one limitation (e.g. kinetics or concentration) briefly without examples." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains two limitations with relevant examples or all three superficially." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive evaluation of kinetics, non-standard conditions, and overpotential, each anchored in accurate chemistry and concrete examples." },
      ],
    },
    {
      id: "r3-1-proton-electron-transfer-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Design",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      marks: 5,
      question:
        "You are given an aqueous nitrate salt of an unknown metal M (known molar mass `M_r`) whose cation has unknown charge `z+` (`M^z+`), alongside a `CuSO₄(aq)` bath, a DC power supply, copper foil, an ammeter, a stopwatch, and an analytical balance. Design a Faraday electrolysis experiment — either single-cell or series-cell — to determine `z`, specifying measurements, calculations, and two key sources of systematic error.",
      hints: [
        "Explain how to measure mass gain Δm of the clean, dried cathode alongside either constant current I & time t (Q = It) OR mass of Cu plated in a series cell.",
        "Show the explicit algebraic formula solving for z = n(e⁻) / n(M) and discuss side reactions (H₂ evolution) or poor adhesion / incomplete drying.",
      ],
      modelAnswer:
        "Connect the unknown M(NO₃)_z(aq) cell in series with the CuSO₄(aq) cell (or use a single cell with an ammeter and variable resistor to hold constant current I) and pass steady current for a measured time t in seconds. Before electrolysis, clean, dry, and weigh both cathodes accurately on the analytical balance; after electrolysis, gently rinse with distilled water and propanone, dry completely, and reweigh to determine the exact mass of deposited metal Δm(M) and Δm(Cu). Calculate moles of electrons passed via n(e⁻) = (I × t) / 96 500 (or independently from the series copper cathode via n(e⁻) = 2 × Δm(Cu) / 63.55), calculate moles of unknown metal via n(M) = Δm(M) / M_r, and obtain the integer ionic charge z = n(e⁻) / n(M). Two key systematic errors are: (1) co-reduction of H₂O producing H₂ gas at the cathode, which wastes charge so n(e⁻) overestimates z, and (2) poor metal adhesion causing flakes to fall off (overestimating z) or trapped moisture/oxidation during drying (underestimating z).",
      markScheme: [
        {
          point: "Specifies experimental setup (series with CuSO₄ or constant-current single cell + ammeter/stopwatch)",
          keywords: ["in series", "variable resistor", "ammeter", "constant current"],
        },
        {
          point: "Specifies pre- and post-electrolysis cleaning, drying, and weighing cathodes for Δm",
          keywords: ["reweigh", "analytical balance", "dry completely", "rinse"],
        },
        {
          point: "Shows electron mole calculation via Q = It/F or series Cu reference (2 × Δm/63.55)",
          keywords: ["96 500", "63.55", "n(e⁻)", "i × t"],
        },
        {
          point: "Gives explicit formula z = n(e⁻) / n(M) with n(M) = Δm / M_r",
          keywords: ["z = n(e⁻)", "n(m)", "integer ionic charge", "m_r"],
        },
        {
          point: "Identifies two realistic systematic errors with direction of impact (H₂ co-evolution, flaking, or moisture)",
          keywords: ["co-reduction", "flakes", "moisture", "overestimates"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No workable experimental procedure or Faraday calculation." },
        { band: "1–2", marks: [1, 2], descriptor: "Basic electrolysis outline lacking weighing protocol, calculation of z, or error analysis." },
        { band: "3–4", marks: [3, 4], descriptor: "Clear apparatus, weighing steps, and calculation of z with one systematic error." },
        { band: "5", marks: [5, 5], descriptor: "Complete, rigorous design covering setup, drying/weighing technique, exact z derivation, and two directional systematic errors." },
      ],
    },
  ],
};
