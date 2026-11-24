import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: Acids, Bases & Redox Core (SL/HL) — answerIndex [2,0,3,1,0,2,1,3,2,0,1,3,0,2,1]
  // ===========================================================================
  {
    id: "r3-1-proton-electron-transfer-m1",
    title: "Paper 1A · Set 1: Acids, Bases & Redox Core (SL/HL)",
    level: "SL",
    questions: [
      {
        id: "r3-1-proton-electron-transfer-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "Which pair of species constitutes a Brønsted–Lowry conjugate acid–base pair?",
        options: [
          "H₂CO₃ and CO₃²⁻",
          "H₃O⁺ and OH⁻",
          "H₂PO₄⁻ and HPO₄²⁻",
          "NH₄⁺ and NH₂⁻",
        ],
        answerIndex: 2,
        hints: [
          "A conjugate acid–base pair differs by exactly one proton (H⁺) and one unit of charge.",
          "Count how many H⁺ ions separate each pair — several differ by two protons.",
        ],
        explanation:
          "H₂PO₄⁻ loses exactly one H⁺ to form HPO₄²⁻, so they form a conjugate acid–base pair. H₂CO₃/CO₃²⁻, H₃O⁺/OH⁻, and NH₄⁺/NH₂⁻ all differ by two protons rather than one.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "What is the pH of a 0.0050 mol dm⁻³ aqueous solution of the strong base barium hydroxide, Ba(OH)₂(aq), at 298 K (K_w = 1.00 × 10⁻¹⁴)?",
        options: ["12.00", "11.70", "2.00", "2.30"],
        answerIndex: 0,
        hints: [
          "Write the complete dissociation equation for Ba(OH)₂(aq) — how many moles of OH⁻ form per mole of base?",
          "Find [OH⁻] = 2 × 0.0050 mol dm⁻³, calculate pOH = −log₁₀[OH⁻], then subtract from 14.00.",
        ],
        explanation:
          "Ba(OH)₂ dissociates completely to give [OH⁻] = 2 × 0.0050 = 0.010 mol dm⁻³ = 1.0 × 10⁻² mol dm⁻³. Therefore pOH = 2.00 and pH = 14.00 − 2.00 = 12.00. Forgetting the stoichiometry factor of 2 gives the trap value 11.70, while 2.00 is the pOH rather than pH.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "Which species is **amphoteric** (reacts with both acids and bases) but is **not amphiprotic** under the Brønsted–Lowry definition?",
        options: [
          "Hydrogencarbonate ion, HCO₃⁻(aq)",
          "Liquid water, H₂O(l)",
          "Dihydrogenphosphate ion, H₂PO₄⁻(aq)",
          "Aluminium oxide, Al₂O₃(s)",
        ],
        answerIndex: 3,
        hints: [
          "An amphiprotic species must be able to BOTH donate a proton (H⁺) and accept a proton.",
          "Check which substance contains no hydrogen atoms to donate as H⁺.",
        ],
        explanation:
          "Al₂O₃ reacts with both acids (forming Al³⁺) and strong bases (forming [Al(OH)₄]⁻), making it amphoteric, but it contains no hydrogen atoms so it cannot donate a proton and is not amphiprotic. HCO₃⁻, H₂O, and H₂PO₄⁻ are all amphiprotic.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "A student has 10.0 cm³ of HCl(aq) at pH 2.00 (298 K). What volume of distilled water must be added to raise its pH to 4.00?",
        options: ["20.0 cm³", "990 cm³", "1000 cm³", "90.0 cm³"],
        answerIndex: 1,
        hints: [
          "How does [H⁺] change when pH rises by 2.00 units from 2.00 to 4.00?",
          "A 100-fold decrease in [H⁺] requires a final total volume of 100 × 10.0 cm³ — remember to subtract the initial 10.0 cm³!",
        ],
        explanation:
          "Raising pH by 2.00 units decreases [H⁺] by a factor of 10² = 100, requiring a final volume of 10.0 × 100 = 1000 cm³. Since 10.0 cm³ of solution is already present, 1000 − 10.0 = 990 cm³ of distilled water must be added (1000 cm³ is the final volume, not the volume added).",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "Equal volumes of 0.10 mol dm⁻³ HCl(aq) and 0.10 mol dm⁻³ CH₃COOH(aq) are compared at 298 K. Which property is **identical** for both solutions?",
        options: [
          "Volume of 0.10 mol dm⁻³ NaOH(aq) required for complete neutralisation",
          "Initial rate of hydrogen evolution upon adding magnesium ribbon",
          "Electrical conductivity measured with inert platinum electrodes",
          "Measured hydrogen ion concentration and solution pH value",
        ],
        answerIndex: 0,
        hints: [
          "Strong and weak acids differ in their degree of dissociation at equilibrium, NOT in their total moles of ionisable protons.",
          "Think about how Le Chatelier's principle acts on CH₃COOH ⇌ H⁺ + CH₃COO⁻ as NaOH consumes H⁺.",
        ],
        explanation:
          "Both solutions contain the exact same moles of monoprotic acid, so both require the identical volume of 0.10 mol dm⁻³ NaOH for complete neutralisation. HCl has higher [H⁺], lower pH, higher electrical conductivity, and faster initial reaction rate with Mg.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "Why is unpolluted natural rainwater naturally acidic with a pH of approximately 5.6?",
        options: [
          "Atmospheric nitrogen reacts with rain to produce dilute nitric acid",
          "Volcanic sulfur dioxide always dominates global background precipitation",
          "Dissolved atmospheric carbon dioxide forms weak carbonic acid, H₂CO₃",
          "Autoionization of falling rainwater increases dramatically at low altitude",
        ],
        answerIndex: 2,
        hints: [
          "Which naturally abundant acidic oxide is always present in unpolluted air?",
        ],
        explanation:
          "Atmospheric CO₂ dissolves in water (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻), naturally giving unpolluted rain a pH around 5.6. Acid rain is defined as precipitation with pH < 5.6 caused by stronger acids from SOₓ and NOₓ pollutants.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "What is the oxidation state of chromium in the dichromate ion, Cr₂O₇²⁻, and of oxygen in hydrogen peroxide, H₂O₂, respectively?",
        options: [
          "+3 and −2",
          "+6 and −1",
          "+7 and −1",
          "+6 and −2",
        ],
        answerIndex: 1,
        hints: [
          "In Cr₂O₇²⁻, set 2x + 7(−2) = −2 and solve for x.",
          "Hydrogen peroxide is a peroxide — oxygen does NOT have its usual −2 oxidation state.",
        ],
        explanation:
          "In Cr₂O₇²⁻, 2x − 14 = −2 gives x = +6. In the peroxide H₂O₂, H is +1 so 2(+1) + 2y = 0 gives y = −1. Using −2 for oxygen in peroxides is a classic exam slip.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "Consider the reaction: `Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)`. Which statement correctly identifies the oxidising agent and what happens to it?",
        options: [
          "Br⁻ is the oxidising agent because it loses electrons to form Br₂",
          "Cl₂ is the reducing agent because its oxidation state falls from 0 to −1",
          "Br⁻ is the oxidising agent because its oxidation state rises from −1 to 0",
          "Cl₂ is the oxidising agent because it gains electrons and is reduced to Cl⁻",
        ],
        answerIndex: 3,
        hints: [
          "Assign oxidation states to Cl and Br on both sides of the equation.",
          "An oxidising agent oxidises another species by taking its electrons — so the oxidising agent itself is reduced.",
        ],
        explanation:
          "Cl₂ drops from oxidation state 0 to −1 in Cl⁻, meaning it gains electrons (is reduced) and acts as the oxidising agent. Br⁻ loses electrons (is oxidised) and is therefore the reducing agent.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "In a working Daniell voltaic cell `Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)` with a `KNO₃(aq)` salt bridge, how do electrons and ions move?",
        options: [
          "Electrons move from Cu to Zn in the wire; NO₃⁻ migrates toward the Cu half-cell",
          "Electrons move from Zn to Cu through the salt bridge; K⁺ stays stationary",
          "Electrons move from Zn to Cu in the wire; NO₃⁻ migrates toward the Zn half-cell",
          "Electrons move from Cu to Zn through the salt bridge; K⁺ migrates to Zn",
        ],
        answerIndex: 2,
        hints: [
          "Zn is more reactive than Cu, so Zn is oxidised at the anode (Zn → Zn²⁺ + 2e⁻).",
          "Electrons travel only through external wires (anode → cathode), while anions migrate through the salt bridge toward the anode to maintain electrical neutrality.",
        ],
        explanation:
          "Zinc is oxidised at the negative anode, sending electrons through the external wire to the positive copper cathode. To balance the newly formed Zn²⁺ ions in the anode half-cell, NO₃⁻ anions migrate from the salt bridge toward the Zn half-cell (and K⁺ toward Cu).",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "A 100.0 cm³ sample of pond water is analysed by the Winkler method. The iodine liberated reacts completely with 10.0 cm³ of 0.00500 mol dm⁻³ Na₂S₂O₃(aq). What is the dissolved O₂ concentration in mg dm⁻³ (M(O₂) = 32.00 g mol⁻¹)?",
        options: ["4.00 mg dm⁻³", "8.00 mg dm⁻³", "16.0 mg dm⁻³", "1.00 mg dm⁻³"],
        answerIndex: 0,
        hints: [
          "First find n(S₂O₃²⁻) = c × V = 0.00500 × 0.0100 mol.",
          "Recall the overall Winkler ratio: 1 mol O₂ : 4 mol S₂O₃²⁻, then divide by 0.1000 dm³ and multiply by 32 000 mg mol⁻¹.",
        ],
        explanation:
          "n(S₂O₃²⁻) = 5.00 × 10⁻⁵ mol. Using the 1 O₂ : 4 S₂O₃²⁻ Winkler stoichiometry gives n(O₂) = 1.25 × 10⁻⁵ mol in 0.1000 dm³, so [O₂] = 1.25 × 10⁻⁴ mol dm⁻³. Multiplying by 32.00 × 1000 gives 4.00 mg dm⁻³. Using a 1:2 or 1:1 ratio produces the distractors 8.00 and 16.0 mg dm⁻³.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "Which statement is true for **both** a voltaic cell and an electrolytic cell?",
        options: [
          "The anode is negatively charged and attracts migrating cations",
          "Oxidation occurs at the anode and electrons leave the anode via the external wire",
          "The overall cell reaction is spontaneous with a negative Gibbs free energy change",
          "A salt bridge is required to separate two different aqueous half-cells",
        ],
        answerIndex: 1,
        hints: [
          "Remember the universal mnemonic An Ox, Red Cat — electrode reactions never swap.",
          "Check which properties flip between spontaneous voltaic cells and externally powered electrolytic cells.",
        ],
        explanation:
          "In every electrochemical cell, oxidation occurs at the anode (releasing electrons into the external wire) and reduction occurs at the cathode. Electrode polarity, spontaneity, and the need for a salt bridge differ between voltaic and electrolytic cells.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "At 298 K (K_w = 1.00 × 10⁻¹⁴), ethanoic acid (CH₃COOH) has pK_a = 4.76. What is the base dissociation constant, K_b, of its conjugate base CH₃COO⁻?",
        options: [
          "1.74 × 10⁻⁵",
          "1.74 × 10⁻⁹",
          "5.75 × 10⁻⁵",
          "5.75 × 10⁻¹⁰",
        ],
        answerIndex: 3,
        hints: [
          "Use the conjugate pair relationship pK_a + pK_b = 14.00 at 298 K.",
          "Calculate pK_b = 14.00 − 4.76 = 9.24, then evaluate K_b = 10^(−9.24).",
        ],
        explanation:
          "For a conjugate acid–base pair at 298 K, pK_b = 14.00 − 4.76 = 9.24, so K_b = 10^(−9.24) = 5.75 × 10⁻¹⁰. Note that 1.74 × 10⁻⁵ is K_a of the acid itself, not K_b of its conjugate base.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Given standard reduction potentials `Fe²⁺(aq) + 2e⁻ ⇌ Fe(s)` (E⊖ = −0.45 V) and `Ag⁺(aq) + e⁻ ⇌ Ag(s)` (E⊖ = +0.80 V), what is E⊖_cell for the spontaneous voltaic cell `Fe(s) | Fe²⁺(aq) || Ag⁺(aq) | Ag(s)`?",
        options: ["+1.25 V", "+2.05 V", "+0.35 V", "+1.15 V"],
        answerIndex: 0,
        hints: [
          "Identify the cathode (higher E⊖) and anode (lower E⊖).",
          "Use E⊖_cell = E⊖_cathode − E⊖_anode — remember never to multiply E⊖ by stoichiometric coefficients!",
        ],
        explanation:
          "Ag⁺/Ag (+0.80 V) is the cathode and Fe²⁺/Fe (−0.45 V) is the anode, giving E⊖_cell = (+0.80) − (−0.45) = +1.25 V. Multiplying +0.80 V by 2 produces the common trap answer +2.05 V.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "State",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Which set of conditions correctly defines the Standard Hydrogen Electrode (SHE) at E⊖ = 0.00 V?",
        options: [
          "1.0 mol dm⁻³ H₂SO₄(aq), H₂(g) at 100 kPa, 273 K, platinum electrode",
          "0.5 mol dm⁻³ HCl(aq), H₂(g) at 101 kPa, 298 K, graphite electrode",
          "1.0 mol dm⁻³ H⁺(aq), H₂(g) at 100 kPa, 298 K, platinised platinum electrode",
          "1.0 mol dm⁻³ H⁺(aq), H₂(g) at 100 Pa, 298 K, copper electrode",
        ],
        answerIndex: 2,
        hints: [
          "Check temperature (standard thermodynamic temperature is 298 K, NOT STP 273 K) and pressure (100 kPa).",
          "Check both the H⁺ concentration (1.0 mol dm⁻³) and the inert catalytic electrode material.",
        ],
        explanation:
          "The SHE requires 1.0 mol dm⁻³ H⁺(aq), H₂(g) at 100 kPa, temperature 298 K, and an inert platinised platinum electrode. 1.0 mol dm⁻³ H₂SO₄ would exceed 1.0 mol dm⁻³ H⁺, and 273 K is STP rather than standard state.",
      },
      {
        id: "r3-1-proton-electron-transfer-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "A monoprotic weak acid HA has K_a = 1.0 × 10⁻⁵ at 298 K. What is the pH of a 0.10 mol dm⁻³ aqueous solution of HA?",
        options: ["1.00", "3.00", "5.00", "6.00"],
        answerIndex: 1,
        hints: [
          "Use the weak-acid small-x approximation: [H⁺] ≈ √(K_a × c).",
          "Evaluate √(1.0 × 10⁻⁵ × 0.10) = √(1.0 × 10⁻⁶), then take −log₁₀[H⁺].",
        ],
        explanation:
          "[H⁺] ≈ √(K_a × [HA]) = √(1.0 × 10⁻⁵ × 0.10) = √(1.0 × 10⁻⁶) = 1.0 × 10⁻³ mol dm⁻³, giving pH = −log₁₀(1.0 × 10⁻³) = 3.00. Treating HA as strong gives 1.00, while using pK_a directly gives 5.00.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Buffers, Titrations & Electrode Potentials (SL/HL) — answerIndex [1,3,0,2,3,0,2,1,0,3,2,0,1,3,2]
  // ===========================================================================
  {
    id: "r3-1-proton-electron-transfer-m2",
    title: "Paper 1A · Set 2: Buffers, Titrations & Electrode Potentials (SL/HL)",
    level: "HL",
    questions: [
      {
        id: "r3-1-proton-electron-transfer-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "A buffer solution at 298 K contains 0.20 mol dm⁻³ ethanoic acid (pK_a = 4.76) and 0.020 mol dm⁻³ sodium ethanoate. What is its pH?",
        options: ["5.76", "3.76", "4.76", "2.76"],
        answerIndex: 1,
        hints: [
          "Apply Henderson–Hasselbalch: pH = pK_a + log₁₀([A⁻]/[HA]).",
          "Notice that [A⁻]/[HA] = 0.020 / 0.20 = 0.10, and log₁₀(0.10) = −1.00.",
        ],
        explanation:
          "pH = 4.76 + log₁₀(0.020 / 0.20) = 4.76 + log₁₀(10⁻¹) = 4.76 − 1.00 = 3.76. Inverting the ratio to [HA]/[A⁻] gives the trap answer 5.76.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "Which 0.10 mol dm⁻³ aqueous salt solution has a pH **greater than 7** at 298 K?",
        options: [
          "Ammonium chloride, NH₄Cl(aq)",
          "Iron(III) chloride, FeCl₃(aq)",
          "Potassium nitrate, KNO₃(aq)",
          "Sodium ethanoate, CH₃COONa(aq)",
        ],
        answerIndex: 3,
        hints: [
          "Identify the parent acid and parent base of each salt.",
          "A basic salt comes from a weak acid + strong base, because its conjugate base anion hydrolyses water to form OH⁻.",
        ],
        explanation:
          "CH₃COONa is formed from weak acid CH₃COOH and strong base NaOH; its anion hydrolyses water (CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻), making pH > 7. NH₄Cl and FeCl₃ are acidic, while KNO₃ is neutral.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "Ammonia has K_b = 1.8 × 10⁻⁵ at 298 K (K_w = 1.00 × 10⁻¹⁴). What is the pH of a 0.10 mol dm⁻³ aqueous ammonia solution?",
        options: ["11.13", "2.87", "9.25", "13.00"],
        answerIndex: 0,
        hints: [
          "First find [OH⁻] ≈ √(K_b × [NH₃]) = √(1.8 × 10⁻⁵ × 0.10).",
          "Compute pOH = −log₁₀[OH⁻] = 2.87, and remember to convert to pH using 14.00 − pOH!",
        ],
        explanation:
          "[OH⁻] ≈ √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ mol dm⁻³, so pOH = −log₁₀(1.34 × 10⁻³) = 2.87 and pH = 14.00 − 2.87 = 11.13. Stopping at 2.87 is the classic pOH-instead-of-pH trap.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "A 25.0 cm³ sample of 0.10 mol dm⁻³ NH₃(aq) is titrated with 0.10 mol dm⁻³ HCl(aq). Which indicator is most suitable to detect the equivalence point?",
        options: [
          "Phenolphthalein (transition range pH 8.3–10.0)",
          "Phenol red (transition range pH 6.8–8.4)",
          "Methyl red (transition range pH 4.4–6.2)",
          "No indicator can detect a strong acid + weak base equivalence point",
        ],
        answerIndex: 2,
        hints: [
          "At equivalence, NH₃ + HCl forms NH₄Cl(aq) — is this salt acidic or basic?",
          "Select the indicator whose colour-change range lies cleanly within the acidic vertical jump around pH 3–7.",
        ],
        explanation:
          "Titrating weak base NH₃ with strong acid HCl yields acidic NH₄Cl at equivalence (pH ≈ 5.3) with a vertical inflection roughly between pH 3 and 7. Methyl red (4.4–6.2) changes sharply inside this vertical jump, whereas phenolphthalein and phenol red change too high.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "How does an acidic buffer containing CH₃COOH(aq) and CH₃COO⁻(aq) resist a pH drop when a small amount of HCl(aq) is added?",
        options: [
          "Added H⁺ shifts CH₃COOH ⇌ H⁺ + CH₃COO⁻ forward to generate more CH₃COO⁻",
          "CH₃COOH molecules accept protons directly to form neutral CH₃COOH₂⁺ salts",
          "Added Cl⁻ ions neutralise OH⁻ ions produced from water autoionization",
          "The conjugate base CH₃COO⁻ reacts with added H⁺ to form un-ionised CH₃COOH",
        ],
        answerIndex: 3,
        hints: [
          "Which component of the buffer is a Brønsted–Lowry base capable of accepting H⁺?",
          "Removing free H⁺ keeps [H⁺] — and thus pH — nearly unchanged.",
        ],
        explanation:
          "The large reservoir of conjugate base CH₃COO⁻ reacts with added H⁺ via CH₃COO⁻(aq) + H⁺(aq) → CH₃COOH(aq), consuming almost all added protons so the ratio [CH₃COO⁻]/[CH₃COOH] and pH change very little.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "50.0 cm³ of 0.20 mol dm⁻³ methanoic acid, HCOOH(aq) (pK_a = 3.75), is mixed with 25.0 cm³ of 0.20 mol dm⁻³ NaOH(aq) at 298 K. What is the pH of the resulting solution?",
        options: ["3.75", "7.00", "2.22", "4.05"],
        answerIndex: 0,
        hints: [
          "Calculate initial moles of HCOOH (0.010 mol) and NaOH (0.0050 mol).",
          "Exactly half of the weak acid has been neutralised into HCOO⁻ — what landmark on a titration curve is this?",
        ],
        explanation:
          "0.0050 mol of NaOH neutralises half of the 0.010 mol HCOOH, leaving 0.0050 mol HCOOH and 0.0050 mol HCOO⁻. Because [HCOO⁻] = [HCOOH] (the half-equivalence point), log₁₀(1) = 0 and pH = pK_a = 3.75.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Consider the standard reduction potentials: `Zn²⁺/Zn (−0.76 V)`, `Fe²⁺/Fe (−0.45 V)`, `Cu²⁺/Cu (+0.34 V)`, `Ag⁺/Ag (+0.80 V)`. Which species is the **strongest reducing agent**?",
        options: ["Ag⁺(aq)", "Ag(s)", "Zn(s)", "Zn²⁺(aq)"],
        answerIndex: 2,
        hints: [
          "A reducing agent loses electrons (is oxidised) — look at the RIGHT-hand side of reduction half-equations.",
          "The most negative E⊖ value corresponds to the strongest tendency to lose electrons.",
        ],
        explanation:
          "The Zn²⁺/Zn couple has the most negative reduction potential (−0.76 V), meaning its reduced form on the right-hand side, Zn(s), loses electrons most readily and is the strongest reducing agent. Ag⁺(aq) is the strongest oxidising agent.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Concentrated aqueous sodium chloride (brine) is electrolysed using inert graphite electrodes. What are the main products formed at the **cathode (−)** and **anode (+)**?",
        options: [
          "Sodium metal at the cathode; chlorine gas at the anode",
          "Hydrogen gas at the cathode; chlorine gas at the anode",
          "Hydrogen gas at the cathode; oxygen gas at the anode",
          "Sodium metal at the cathode; oxygen gas at the anode",
        ],
        answerIndex: 1,
        hints: [
          "At the cathode, compare E⊖(Na⁺/Na) = −2.71 V with water reduction (−0.83 V).",
          "At the anode in CONCENTRATED brine, high [Cl⁻] and oxygen overpotential favour Cl⁻ oxidation over water.",
        ],
        explanation:
          "At the cathode, H₂O is far easier to reduce (−0.83 V) than Na⁺ (−2.71 V), yielding H₂(g) and OH⁻(aq). At the anode, high chloride concentration and kinetic overpotential for O₂ cause Cl⁻ to oxidise preferentially to Cl₂(g).",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "For the voltaic cell `Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)`, E⊖(Mg²⁺/Mg) = −2.37 V, E⊖(Cu²⁺/Cu) = +0.34 V, and F = 96 500 C mol⁻¹. What is ΔG⊖ in kJ mol⁻¹?",
        options: [
          "−523 kJ mol⁻¹",
          "−262 kJ mol⁻¹",
          "+523 kJ mol⁻¹",
          "−392 kJ mol⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "First find E⊖_cell = (+0.34) − (−2.37) = +2.71 V, and note n = 2 mol of electrons transferred.",
          "Substitute into ΔG⊖ = −n F E⊖_cell and divide by 1000 to convert J mol⁻¹ to kJ mol⁻¹.",
        ],
        explanation:
          "E⊖_cell = +0.34 − (−2.37) = +2.71 V and n = 2. Thus ΔG⊖ = −2 × 96 500 × 2.71 = −523 030 J mol⁻¹ = −523 kJ mol⁻¹. Using n = 1 gives −262 kJ mol⁻¹, and adding rather than subtracting −2.37 V gives −392 kJ mol⁻¹.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Aqueous copper(II) sulfate, CuSO₄(aq), is electrolysed using **copper electrodes** rather than inert graphite electrodes. What happens to the anode and the blue colour of the electrolyte?",
        options: [
          "Oxygen gas evolves at the anode and the blue solution fades steadily",
          "Copper deposits on the anode and the blue solution becomes darker",
          "Hydrogen gas evolves at the anode and the solution turns strongly acidic",
          "The copper anode dissolves to Cu²⁺(aq) and the blue colour remains constant",
        ],
        answerIndex: 3,
        hints: [
          "Compare E⊖(Cu²⁺/Cu) = +0.34 V with E⊖(O₂/H₂O) = +1.23 V at the anode.",
          "Because copper is an active electrode, oxidising Cu(s) is much easier than oxidising water!",
        ],
        explanation:
          "At the active copper anode, Cu(s) → Cu²⁺(aq) + 2e⁻ (+0.34 V) occurs preferentially over water oxidation (+1.23 V). Each Cu²⁺ reduced at the cathode is replaced by one Cu²⁺ dissolved from the anode, keeping [Cu²⁺] and the blue colour constant.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Two electrolytic cells containing `CuSO₄(aq)` and `AgNO₃(aq)` are connected in **series** so identical electric charge passes through both. If 0.20 mol of Cu(s) deposits in the first cell, how many moles of Ag(s) deposit in the second cell?",
        options: ["0.10 mol", "0.20 mol", "0.40 mol", "0.80 mol"],
        answerIndex: 2,
        hints: [
          "Cells in series carry the exact same moles of electrons, n(e⁻).",
          "Since Cu²⁺ + 2e⁻ → Cu requires 2 mol e⁻ per mol Cu, how many moles of electrons passed? Then apply Ag⁺ + e⁻ → Ag.",
        ],
        explanation:
          "Depositing 0.20 mol Cu from Cu²⁺ consumes 2 × 0.20 = 0.40 mol of electrons. In series, the same 0.40 mol of electrons passes through AgNO₃(aq) where Ag⁺ + e⁻ → Ag (z = 1), depositing 0.40 mol of Ag(s).",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "When molten lead(II) bromide, PbBr₂(l), is electrolysed using inert graphite electrodes, which observation occurs at the **positive anode**?",
        options: [
          "Red-brown bromine vapour forms as Br⁻ ions are oxidised",
          "Molten silver-grey lead metal forms as Pb²⁺ ions are reduced",
          "Colourless oxygen gas bubbles off as oxide impurities react",
          "No reaction occurs because molten ionic compounds cannot conduct",
        ],
        answerIndex: 0,
        hints: [
          "Use PANIC for electrolytic cells: Positive is Anode (oxidation), Negative Is Cathode (reduction).",
          "Which ions migrate toward the positive electrode and lose electrons?",
        ],
        explanation:
          "In molten PbBr₂(l), negatively charged Br⁻ ions migrate to the positive anode and undergo oxidation: 2Br⁻(l) → Br₂(g) + 2e⁻, producing pungent red-brown bromine vapour. Lead metal forms at the negative cathode.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "When ethanol is heated under reflux with excess acidified potassium dichromate(VI), K₂Cr₂O₇(aq)/H⁺, what organic product and colour change occur?",
        options: [
          "Ethanal forms; solution changes from green to orange",
          "Ethanoic acid forms; solution changes from orange to green",
          "Propanone forms; solution changes from purple to colourless",
          "Ethane forms; solution changes from orange to blue",
        ],
        answerIndex: 1,
        hints: [
          "Ethanol is a primary alcohol — heating under reflux with excess oxidising agent drives oxidation all the way past the aldehyde stage.",
          "Cr₂O₇²⁻ (Cr +6, orange) is reduced to Cr³⁺ (Cr +3, green).",
        ],
        explanation:
          "Under reflux with excess acidified K₂Cr₂O₇, primary ethanol is fully oxidised to ethanoic acid, while orange Cr₂O₇²⁻ ions are reduced to green Cr³⁺ ions. Distillation (not reflux) would isolate ethanal.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "A steady current of 1.93 A passes through CuSO₄(aq) for 1000 s. What mass of copper deposits at the cathode (M(Cu) = 63.55 g mol⁻¹, F = 96 500 C mol⁻¹)?",
        options: ["1.27 g", "2.54 g", "0.318 g", "0.636 g"],
        answerIndex: 3,
        hints: [
          "Calculate Q = I × t = 1.93 × 1000 C, then n(e⁻) = Q / 96 500.",
          "Remember Cu²⁺ + 2e⁻ → Cu requires z = 2 electrons per copper atom, so n(Cu) = n(e⁻) / 2.",
        ],
        explanation:
          "Q = 1930 C, giving n(e⁻) = 1930 / 96 500 = 0.0200 mol. Dividing by z = 2 gives n(Cu) = 0.0100 mol, so m(Cu) = 0.0100 × 63.55 = 0.6355 g ≈ 0.636 g. Forgetting to divide by z = 2 yields the distractor 1.27 g.",
      },
      {
        id: "r3-1-proton-electron-transfer-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "25.0 cm³ of 0.20 mol dm⁻³ HCl(aq) is mixed with 25.0 cm³ of 0.10 mol dm⁻³ NaOH(aq) at 298 K. What is the pH of the resulting mixture?",
        options: ["1.00", "2.00", "1.30", "1.60"],
        answerIndex: 2,
        hints: [
          "Find initial moles of H⁺ (0.0050 mol) and OH⁻ (0.0025 mol) and subtract to find excess H⁺.",
          "Divide excess n(H⁺) = 0.0025 mol by the TOTAL combined volume of 50.0 cm³ (0.050 dm³) before taking −log₁₀.",
        ],
        explanation:
          "Excess n(H⁺) = 0.0050 − 0.0025 = 0.0025 mol in a total volume of 0.050 dm³, so [H⁺] = 0.0025 / 0.050 = 0.050 mol dm⁻³ and pH = −log₁₀(0.050) = 1.30. Forgetting to double the volume gives the trap value 1.00.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: Mixed IB Diploma Exam Challenge (SL/HL) — answerIndex [3,1,2,0,1,3,2,0,3,1,2,3,0,1,2]
  // ===========================================================================
  {
    id: "r3-1-proton-electron-transfer-m3",
    title: "Paper 1A · Set 3: Mixed IB Diploma Exam Challenge (SL/HL)",
    level: "HL",
    questions: [
      {
        id: "r3-1-proton-electron-transfer-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "If the pH of an aqueous solution decreases from 5.0 to 2.0 at 298 K, how does the hydrogen ion concentration `[H⁺]` change?",
        options: [
          "It decreases by a factor of 3",
          "It increases by a factor of 3",
          "It decreases by a factor of 1000",
          "It increases by a factor of 1000",
        ],
        answerIndex: 3,
        hints: [
          "Lower pH means a MORE acidic solution (higher [H⁺]).",
          "Each 1-unit drop in pH multiplies [H⁺] by 10, so a 3-unit drop multiplies it by 10³.",
        ],
        explanation:
          "A drop of 3.0 pH units corresponds to multiplying [H⁺] by 10³ = 1000 (from 10⁻⁵ mol dm⁻³ to 10⁻² mol dm⁻³). Treating the logarithmic pH scale as linear produces the factor-of-3 distractors.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "Why is the enthalpy of neutralisation of weak ethanoic acid with NaOH (−55.2 kJ mol⁻¹) slightly less exothermic than that of strong HCl with NaOH (−57.3 kJ mol⁻¹)?",
        options: [
          "Ethanoic acid reacts incompletely with NaOH leaving unreacted acid behind",
          "Some heat energy is absorbed to dissociate un-ionised CH₃COOH molecules",
          "Sodium ethanoate precipitates out of solution as an endothermic solid",
          "Strong acids release two protons per molecule during aqueous neutralisation",
        ],
        answerIndex: 1,
        hints: [
          "HCl is already 100% ionised before NaOH is added, whereas CH₃COOH is mostly molecular.",
          "Breaking the O−H bond during CH₃COOH dissociation requires energy.",
        ],
        explanation:
          "Neutralisation of strong acids is simply H⁺ + OH⁻ → H₂O (−57.3 kJ mol⁻¹). For weak CH₃COOH, intact acid molecules must also dissociate endothermically as OH⁻ consumes H⁺, reducing the net heat released.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bronsted-ph-strong-weak",
        question:
          "At 373 K (100 °C), the ionic product of water is K_w = 5.13 × 10⁻¹³. What is the pH of pure water at 373 K, and is it acidic or neutral?",
        options: [
          "pH = 7.00; neutral",
          "pH = 6.14; acidic",
          "pH = 6.14; neutral",
          "pH = 12.29; basic",
        ],
        answerIndex: 2,
        hints: [
          "In pure water, [H⁺] = [OH⁻] = √K_w regardless of temperature.",
          "Compute −log₁₀(√(5.13 × 10⁻¹³)) and recall the strict definition of neutrality.",
        ],
        explanation:
          "[H⁺] = √(5.13 × 10⁻¹³) = 7.16 × 10⁻⁷ mol dm⁻³, giving pH = 6.14. Because [H⁺] still equals [OH⁻], boiling pure water remains strictly neutral despite having pH < 7.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "Which mixture of aqueous solutions produces an effective **acidic buffer**?",
        options: [
          "50 cm³ of 0.20 mol dm⁻³ CH₃COOH + 25 cm³ of 0.20 mol dm⁻³ NaOH",
          "50 cm³ of 0.20 mol dm⁻³ HCl + 50 cm³ of 0.20 mol dm⁻³ NaCl",
          "50 cm³ of 0.20 mol dm⁻³ CH₃COOH + 50 cm³ of 0.20 mol dm⁻³ NaOH",
          "25 cm³ of 0.20 mol dm⁻³ CH₃COOH + 50 cm³ of 0.20 mol dm⁻³ NaOH",
        ],
        answerIndex: 0,
        hints: [
          "An acidic buffer requires substantial reservoirs of BOTH a weak acid (HA) and its conjugate base (A⁻).",
          "When mixing a weak acid with a strong base, which reactant must be in excess?",
        ],
        explanation:
          "Mixing excess weak acid CH₃COOH (0.010 mol) with limiting strong base NaOH (0.0050 mol) yields 0.0050 mol CH₃COOH plus 0.0050 mol CH₃COO⁻ — an optimal buffer! Equal moles hit equivalence (pure salt), excess NaOH leaves strong base, and HCl/NaCl uses a strong acid.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "Why does an aqueous solution of aluminium chloride, AlCl₃(aq), have a pH around 3 at 298 K?",
        options: [
          "Chloride ions hydrolyse water strongly to release free HCl molecules",
          "High charge density of Al³⁺ polarises coordinated water O−H bonds, releasing H⁺",
          "Al³⁺ ions accept hydroxide ions only in molten states, leaving excess H⁺",
          "AlCl₃ is a strong Brønsted–Lowry acid that donates protons directly from Al",
        ],
        answerIndex: 1,
        hints: [
          "Consider the hydrated complex ion [Al(H₂O)₆]³⁺ formed when AlCl₃ dissolves.",
          "How does a small, 3+ cation pull electron density away from the O−H bonds of its water ligands?",
        ],
        explanation:
          "The small, highly charged Al³⁺ cation strongly polarises the O−H bonds in [Al(H₂O)₆]³⁺, weakening them so a coordinated water molecule donates H⁺: [Al(H₂O)₆]³⁺ ⇌ [Al(H₂O)₅(OH)]²⁺ + H⁺. Cl⁻ is the negligible conjugate base of strong HCl.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "A student needs an ethanoic acid / sodium ethanoate buffer at pH 5.06 (pK_a = 4.76 at 298 K). What molar ratio `[CH₃COO⁻] / [CH₃COOH]` is required?",
        options: ["0.50", "1.30", "10.0", "2.00"],
        answerIndex: 3,
        hints: [
          "Rearrange Henderson–Hasselbalch: log₁₀([A⁻]/[HA]) = pH − pK_a.",
          "Evaluate 10^(5.06 − 4.76) = 10^(0.30).",
        ],
        explanation:
          "log₁₀([CH₃COO⁻]/[CH₃COOH]) = 5.06 − 4.76 = 0.30, so [CH₃COO⁻]/[CH₃COOH] = 10^(0.30) ≈ 2.00 (since log₁₀ 2 = 0.301). A ratio of 0.50 would give pH 4.46.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "On a titration curve of 25.0 cm³ of a weak monoprotic acid HA titrated with NaOH(aq), equivalence occurs at 24.0 cm³ of NaOH. At what added NaOH volume does `pH = pK_a`?",
        options: ["0.0 cm³", "24.0 cm³", "12.0 cm³", "12.5 cm³"],
        answerIndex: 2,
        hints: [
          "pH = pK_a occurs at the half-equivalence point where half the acid has been neutralised.",
          "Be careful — take half of the EQUIVALENCE volume of NaOH, not half of the initial acid volume!",
        ],
        explanation:
          "Half-equivalence is reached at exactly half the equivalence volume of titrant: 24.0 / 2 = 12.0 cm³. Taking half of the 25.0 cm³ analyte volume gives the trap value 12.5 cm³.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "weak-acids-buffers-titrations-hl",
        question:
          "At the equivalence point of titrating 0.100 mol dm⁻³ CH₃COOH with equal-concentration NaOH at 298 K, the flask contains 0.050 mol dm⁻³ CH₃COONa (K_b of CH₃COO⁻ = 5.75 × 10⁻¹⁰, K_w = 1.00 × 10⁻¹⁴). What is the equivalence pH?",
        options: ["8.73", "5.27", "8.88", "7.00"],
        answerIndex: 0,
        hints: [
          "CH₃COO⁻ acts as a weak base: [OH⁻] ≈ √(K_b × [CH₃COO⁻]) where [CH₃COO⁻] = 0.050 mol dm⁻³.",
          "Compute pOH = −log₁₀(5.36 × 10⁻⁶) = 5.27, then subtract from 14.00.",
        ],
        explanation:
          "[OH⁻] = √(5.75 × 10⁻¹⁰ × 0.050) = 5.36 × 10⁻⁶ mol dm⁻³, giving pOH = 5.27 and pH = 14.00 − 5.27 = 8.73. Forgetting dilution to 0.050 mol dm⁻³ gives 8.88, while 5.27 is pOH.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "In the balanced acidic half-equation for the reduction of iodate(V) ions to iodine (`IO₃⁻(aq) → I₂(aq)`), what are the coefficients of `H⁺` and `e⁻` on the left-hand side?",
        options: [
          "6 H⁺ and 5 e⁻",
          "6 H⁺ and 6 e⁻",
          "12 H⁺ and 12 e⁻",
          "12 H⁺ and 10 e⁻",
        ],
        answerIndex: 3,
        hints: [
          "Start by balancing iodine atoms: 2 IO₃⁻ → I₂.",
          "Balance 6 O atoms with 6 H₂O on the right, then balance H with H⁺, then balance total charge with e⁻.",
        ],
        explanation:
          "Balancing atoms gives 2IO₃⁻ + 12H⁺ → I₂ + 6H₂O. The left-hand charge is 2(−1) + 12(+1) = +10 while the right is 0, so 10 e⁻ are required on the left: 2IO₃⁻ + 12H⁺ + 10e⁻ → I₂ + 6H₂O.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "A 25.0 cm³ sample of acidified Fe²⁺(aq) requires 20.0 cm³ of 0.0200 mol dm⁻³ KMnO₄(aq) for complete oxidation (`MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O`). What is `[Fe²⁺]`?",
        options: [
          "0.0160 mol dm⁻³",
          "0.0800 mol dm⁻³",
          "0.00320 mol dm⁻³",
          "0.100 mol dm⁻³",
        ],
        answerIndex: 1,
        hints: [
          "Calculate n(MnO₄⁻) = 0.0200 dm³ × 0.0200 mol dm⁻³ = 4.00 × 10⁻⁴ mol.",
          "Multiply by 5 (from the 1 : 5 mole ratio) to find n(Fe²⁺), then divide by 0.0250 dm³.",
        ],
        explanation:
          "n(MnO₄⁻) = 4.00 × 10⁻⁴ mol, so n(Fe²⁺) = 5 × 4.00 × 10⁻⁴ = 2.00 × 10⁻³ mol. Dividing by 0.0250 dm³ gives [Fe²⁺] = 0.0800 mol dm⁻³. Omitting the 5:1 factor gives 0.0160 mol dm⁻³.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Outline",
        guideRef: "redox-voltaic-electrolytic",
        question:
          "In a hydrogen–oxygen proton-exchange membrane (PEM) acidic fuel cell, which half-equation occurs at the **anode**?",
        options: [
          "O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)",
          "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻",
          "H₂(g) → 2H⁺(aq) + 2e⁻",
          "2H⁺(aq) + 2e⁻ → H₂(g)",
        ],
        answerIndex: 2,
        hints: [
          "Recall An Ox: the anode is always the site of oxidation (electron loss).",
          "In a hydrogen fuel cell, H₂ fuel is oxidised while O₂ is reduced at the cathode.",
        ],
        explanation:
          "At the anode of an acidic PEM fuel cell, hydrogen gas is oxidised: H₂(g) → 2H⁺(aq) + 2e⁻. Protons cross the membrane to the cathode, where oxygen is reduced via O₂ + 4H⁺ + 4e⁻ → 2H₂O.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "Given `I₂/I⁻ (+0.54 V)`, `Fe³⁺/Fe²⁺ (+0.77 V)`, and `Br₂/Br⁻ (+1.09 V)`, which reaction is **spontaneous** under standard conditions?",
        options: [
          "2Fe³⁺(aq) + 2Br⁻(aq) → 2Fe²⁺(aq) + Br₂(aq)",
          "2Fe²⁺(aq) + I₂(aq) → 2Fe³⁺(aq) + 2I⁻(aq)",
          "I₂(aq) + 2Br⁻(aq) → 2I⁻(aq) + Br₂(aq)",
          "2Fe³⁺(aq) + 2I⁻(aq) → 2Fe²⁺(aq) + I₂(aq)",
        ],
        answerIndex: 3,
        hints: [
          "A redox reaction is spontaneous when E⊖_cell = E⊖(reduced) − E⊖(oxidised) > 0.",
          "Check which reaction pairs a species of higher E⊖ being reduced with one of lower E⊖ being oxidised.",
        ],
        explanation:
          "When Fe³⁺ (+0.77 V) is reduced to Fe²⁺ and I⁻ (+0.54 V) is oxidised to I₂, E⊖_cell = (+0.77) − (+0.54) = +0.23 V > 0 (spontaneous!). The other three reactions all have negative E⊖_cell values.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "A redox reaction has a positive standard cell potential (`E⊖_cell = +0.65 V`), yet no visible reaction happens when the reagents are mixed at 298 K. What is the most likely chemical explanation?",
        options: [
          "The reaction has a very high activation energy and is kinetically inhibited",
          "The equilibrium constant K_c must be much smaller than 1 at 298 K",
          "The standard Gibbs free energy change ΔG⊖ must be strongly positive",
          "Electrode potentials only apply to metallic solids and never to ions",
        ],
        answerIndex: 0,
        hints: [
          "E⊖_cell > 0 guarantees thermodynamic feasibility (ΔG⊖ < 0), NOT reaction speed!",
          "Distinguish thermodynamic spontaneity from kinetic rate.",
        ],
        explanation:
          "A positive E⊖_cell guarantees ΔG⊖ < 0 and K_c > 1 (thermodynamically spontaneous), but gives no information about reaction rate. A high activation energy can make a thermodynamically feasible reaction imperceptibly slow.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "During electrolysis of aqueous CuSO₄(aq) with inert platinum electrodes, 0.40 mol of electrons pass through the circuit. What volume of O₂(g) is collected at the anode at STP (molar gas volume = 22.7 dm³ mol⁻¹)?",
        options: ["4.54 dm³", "2.27 dm³", "9.08 dm³", "1.14 dm³"],
        answerIndex: 1,
        hints: [
          "Write the anode oxidation of water: 2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻.",
          "Notice z = 4 moles of electrons per mole of O₂ produced, so n(O₂) = 0.40 / 4.",
        ],
        explanation:
          "From 2H₂O → O₂ + 4H⁺ + 4e⁻, 4 mol e⁻ produce 1 mol O₂. Therefore 0.40 mol e⁻ yields 0.40 / 4 = 0.10 mol O₂, occupying 0.10 × 22.7 = 2.27 dm³ at STP. Dividing by 2 instead of 4 gives the trap value 4.54 dm³.",
      },
      {
        id: "r3-1-proton-electron-transfer-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "electrode-potentials-aqueous-electrolysis-hl",
        question:
          "A spontaneous two-electron voltaic cell has E⊖_cell = +0.50 V at 298 K (F = 96 500 C mol⁻¹). What are the values of ΔG⊖ and the sign/magnitude of the equilibrium constant K_c?",
        options: [
          "ΔG⊖ = +96.5 kJ mol⁻¹ and K_c < 1",
          "ΔG⊖ = −48.3 kJ mol⁻¹ and K_c > 1",
          "ΔG⊖ = −96.5 kJ mol⁻¹ and K_c > 1",
          "ΔG⊖ = −96.5 kJ mol⁻¹ and K_c < 1",
        ],
        answerIndex: 2,
        hints: [
          "Use ΔG⊖ = −n F E⊖_cell with n = 2 and convert J mol⁻¹ to kJ mol⁻¹.",
          "Recall ΔG⊖ = −RT ln K_c: when ΔG⊖ < 0, ln K_c > 0 so K_c > 1.",
        ],
        explanation:
          "ΔG⊖ = −2 × 96 500 × 0.50 = −96 500 J mol⁻¹ = −96.5 kJ mol⁻¹. Since ΔG⊖ < 0 and ΔG⊖ = −RT ln K_c, equilibrium lies far toward products with K_c > 1.",
      },
    ],
  },
];
