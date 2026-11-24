import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: SL Core — Calorimetry, Bond Enthalpies, Hess's Law & Fuels (15 Qs)
  // answerIndex spread: [4, 4, 4, 3]
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity-m1",
    title: "MCQ Paper 1 · Calorimetry, Hess's Law & Fuels (SL)",
    level: "SL",
    questions: [
      {
        id: "r1-energetics-spontaneity-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "enthalpy-calorimetry",
        strategy: "Enthalpy profile stability",
        question:
          "Which statement correctly describes an **exothermic** chemical reaction?",
        options: [
          "Products have higher enthalpy and weaker bonds than reactants, so ΔH is positive.",
          "Heat is absorbed from the surroundings so the solution temperature drops and ΔH is negative.",
          "Products have lower enthalpy and stronger bonds than reactants, so ΔH is negative.",
          "Heat is released to the surroundings so the solution temperature rises and ΔH is positive.",
        ],
        answerIndex: 2,
        hints: [
          "Exothermic means heat exits the chemical system into the surroundings.",
          "Lower enthalpy corresponds to stronger overall bonds and greater energetic stability.",
        ],
        explanation:
          "In an exothermic reaction, heat flows from the system into the surroundings, so the enthalpy of the products is lower than that of the reactants (ΔH < 0) and the products have stronger overall bonds. Confusing the temperature rise of the surroundings with a positive ΔH is a classic trap.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "enthalpy-calorimetry",
        strategy: "Calorimetry q = mcΔT",
        question:
          "A copper can contains **100.0 g** of water initially at **20.0 °C**. After heating, the temperature reaches **35.0 °C**. Given `c = 4.18 J g⁻¹ K⁻¹`, how much thermal energy (in kJ) was absorbed by the water?",
        options: [
          "6.27 kJ",
          "14.6 kJ",
          "62.7 kJ",
          "0.627 kJ",
        ],
        answerIndex: 0,
        hints: [
          "First find ΔT = T_final − T_initial.",
          "Use q = mcΔT in Joules, then divide by 1000 to convert to kJ.",
        ],
        explanation:
          "ΔT = 35.0 − 20.0 = 15.0 K. Thus q = 100.0 × 4.18 × 15.0 = 6270 J = 6.27 kJ. Using 35.0 °C instead of ΔT gives the tempting distractor 14.6 kJ, while dividing by 100 instead of 1000 gives 62.7 kJ.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "enthalpy-calorimetry",
        strategy: "Coffee-cup neutralisation calorimetry",
        question:
          "**50.0 cm³** of **1.00 mol dm⁻³** HCl(aq) is mixed with **50.0 cm³** of **1.00 mol dm⁻³** NaOH(aq) in an insulated polystyrene cup. The temperature rises by **6.7 °C**. Assuming density = `1.00 g cm⁻³` and `c = 4.18 J g⁻¹ K⁻¹`, what is the experimental enthalpy of neutralisation?",
        options: [
          "−28.0 kJ mol⁻¹",
          "+56.0 kJ mol⁻¹",
          "−112 kJ mol⁻¹",
          "−56.0 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "What is the TOTAL mass of aqueous solution warming up?",
          "Calculate n(H₂O) from 0.0500 dm³ × 1.00 mol dm⁻³, then apply ΔH = −q / n (with q in kJ).",
        ],
        explanation:
          "Total solution mass is m = 50.0 + 50.0 = 100.0 g. Heat absorbed q = 100.0 × 4.18 × 6.7 = 2800.6 J = 2.8006 kJ. Moles of water formed n = 0.0500 × 1.00 = 0.0500 mol. Since temperature rose, ΔH = −2.8006 / 0.0500 = −56.0 kJ mol⁻¹. Using only 50.0 g gives −28.0 kJ mol⁻¹, and forgetting the exothermic minus sign gives +56.0 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "enthalpy-calorimetry",
        strategy: "Systematic error analysis",
        question:
          "A student burns propan-1-ol in a spirit burner under a beaker of water and obtains `ΔH_c = −1290 kJ mol⁻¹`, whereas the IB Data Booklet value is `−2021 kJ mol⁻¹`. Which combination best explains this discrepancy?",
        options: [
          "Heat absorbed from the room air and excess oxygen causing faster combustion.",
          "Heat lost to the surroundings and incomplete combustion producing soot and CO.",
          "Using too much water in the beaker and reading the thermometer too quickly.",
          "Water evaporating from the beaker before heating and using a wider wick.",
        ],
        answerIndex: 1,
        hints: [
          "Why is the measured magnitude |ΔH_c| SMALLER than the true value?",
          "Think about where heat goes instead of into the water, and what black soot on the bottom of the beaker signifies.",
        ],
        explanation:
          "Heat escaping to the air and beaker plus incomplete combustion (which releases less energy per mole than complete combustion to CO₂ and H₂O) both reduce ΔT, making the measured enthalpy of combustion significantly less exothermic than the literature value.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "enthalpy-calorimetry",
        strategy: "Cooling-curve extrapolation",
        question:
          "In a coffee-cup calorimetry experiment for an exothermic displacement reaction, a student records temperature every 30 s and extrapolates the linear cooling section back to the exact time of mixing (`t_mix`). Compared with simply using the highest recorded thermometer reading, extrapolation produces:",
        options: [
          "a larger ΔT and a more exothermic (more negative) value of ΔH.",
          "a larger ΔT and a less exothermic (less negative) value of ΔH.",
          "a smaller ΔT and a more exothermic (more negative) value of ΔH.",
          "a smaller ΔT and a less exothermic (less negative) value of ΔH.",
        ],
        answerIndex: 0,
        hints: [
          "During the time the reaction takes to finish, heat is already leaking out to the room.",
          "Extending the cooling line backwards to t_mix estimates what T would have been if all heat were released instantaneously.",
        ],
        explanation:
          "Back-extrapolating the cooling curve to t_mix compensates for heat lost to the surroundings while the reaction proceeds, yielding a higher T_max (larger ΔT) and therefore a larger magnitude, more negative (more exothermic) ΔH.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "enthalpy-calorimetry",
        strategy: "Standard enthalpy of formation definition",
        question:
          "Which thermochemical equation correctly represents the **standard enthalpy of formation**, `ΔH_f⊖`, of liquid methanol, `CH₃OH(l)`?",
        options: [
          "2C(s, graphite) + 4H₂(g) + O₂(g) → 2CH₃OH(l)",
          "C(g) + 4H(g) + O(g) → CH₃OH(l)",
          "C(s, graphite) + 2H₂(g) + ½O₂(g) → CH₃OH(l)",
          "CO(g) + 2H₂(g) → CH₃OH(l)",
        ],
        answerIndex: 2,
        hints: [
          "Check TWO rules for ΔH_f⊖: exactly 1 mole of product formed, and reactants must be ELEMENTS in their standard states at 298 K.",
          "Fractional coefficients on the reactant side are completely allowed — and often required!",
        ],
        explanation:
          "Standard enthalpy of formation is defined for forming exactly 1 mole of the compound from its constituent elements in their standard states at 298 K and 100 kPa: C(s, graphite), H₂(g), and O₂(g). Forming 2 moles doubles ΔH, using gaseous atoms ignores atomisation, and CO(g) is a compound rather than an element.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Average bond enthalpies",
        question:
          "Estimate `ΔH` for `CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)` using these average bond enthalpies (kJ mol⁻¹): `C−H = 414`, `Cl−Cl = 242`, `C−Cl = 324`, `H−Cl = 431`.",
        options: [
          "+99 kJ mol⁻¹",
          "−99 kJ mol⁻¹",
          "−341 kJ mol⁻¹",
          "+341 kJ mol⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Three C−H bonds remain intact; only one C−H bond and one Cl−Cl bond are broken.",
          "Use ΔH = Σ(bonds broken) − Σ(bonds formed).",
        ],
        explanation:
          "Net bonds broken: 1(C−H) + 1(Cl−Cl) = 414 + 242 = 656 kJ mol⁻¹. Net bonds formed: 1(C−Cl) + 1(H−Cl) = 324 + 431 = 755 kJ mol⁻¹. Therefore ΔH = 656 − 755 = −99 kJ mol⁻¹. Reversing the subtraction gives +99 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Bond counting in combustion",
        question:
          "Estimate `ΔH` for the gaseous combustion of methane, `CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)`, given average bond enthalpies (kJ mol⁻¹): `C−H = 414`, `O=O = 498`, `C=O = 804`, `O−H = 463`.",
        options: [
          "+808 kJ mol⁻¹",
          "−4 kJ mol⁻¹",
          "−345 kJ mol⁻¹",
          "−808 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Count EVERY bond carefully: CO₂ (`O=C=O`) has TWO C=O bonds, and 2 H₂O (`H−O−H`) have FOUR O−H bonds.",
          "Compute [4(C−H) + 2(O=O)] − [2(C=O) + 4(O−H)].",
        ],
        explanation:
          "Bonds broken = 4(414) + 2(498) = 1656 + 996 = 2652 kJ mol⁻¹. Bonds formed = 2(804) + 4(463) = 1608 + 1852 = 3460 kJ mol⁻¹. ΔH = 2652 − 3460 = −808 kJ mol⁻¹. Counting only 1 C=O bond in CO₂ yields the −4 kJ mol⁻¹ error.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Limitations of average bond enthalpies",
        question:
          "The bond-enthalpy calculation for methane combustion gives `−808 kJ mol⁻¹`, whereas the IB Data Booklet standard enthalpy of combustion `ΔH_c⊖(CH₄)` is `−891 kJ mol⁻¹`. What is the main physical reason the Data Booklet value is noticeably **more exothermic**?",
        options: [
          "Average bond enthalpies overestimate the C=O bond strength in carbon dioxide.",
          "Methane is a liquid under standard conditions, requiring extra vaporisation energy.",
          "Standard combustion forms liquid H₂O(l), releasing extra enthalpy of condensation.",
          "Breaking O=O bonds in oxygen is exothermic under standard conditions.",
        ],
        answerIndex: 2,
        hints: [
          "What is the physical state of H₂O at 298 K in standard combustion ΔH_c⊖?",
          "Does converting 2 mol H₂O(g) → 2 mol H₂O(l) absorb or release heat?",
        ],
        explanation:
          "Bond enthalpies apply strictly to gaseous species and calculate ΔH for forming H₂O(g). Under standard conditions (298 K), water is a liquid, and condensing 2 mol H₂O(g) → 2 mol H₂O(l) releases ~88 kJ of additional exothermic enthalpy (accounting for almost the entire 83 kJ mol⁻¹ gap).",
      },
      {
        id: "r1-energetics-spontaneity-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Algebraic Hess's Law",
        question:
          "Given the two thermochemical equations:\n\n1. `N₂(g) + O₂(g) → 2NO(g)`   `ΔH = +180 kJ`\n2. `2NO(g) + O₂(g) → 2NO₂(g)`   `ΔH = −114 kJ`\n\nWhat is `ΔH` for `½N₂(g) + O₂(g) → NO₂(g)`?",
        options: [
          "+33 kJ mol⁻¹",
          "+66 kJ mol⁻¹",
          "+147 kJ mol⁻¹",
          "−33 kJ mol⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "Add equations (1) and (2) directly so that 2NO(g) cancels out.",
          "Compare the coefficients of the summed equation with the target equation for 1 mol NO₂(g).",
        ],
        explanation:
          "Adding (1) and (2) cancels 2NO(g) to give N₂(g) + 2O₂(g) → 2NO₂(g) with ΔH = +180 + (−114) = +66 kJ. Dividing the whole equation by 2 for 1 mol NO₂(g) gives ΔH = +33 kJ mol⁻¹. Forgetting to divide by 2 gives +66 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Hess's Law with ΔH_f⊖",
        question:
          "Calculate `ΔH⊖` for the reduction of iron(III) oxide in a blast furnace: `Fe₂O₃(s) + 3CO(g) → 2Fe(s) + 3CO₂(g)`, given `ΔH_f⊖` (kJ mol⁻¹): `Fe₂O₃(s) = −824`, `CO(g) = −111`, `CO₂(g) = −394`.",
        options: [
          "+25 kJ mol⁻¹",
          "−25 kJ mol⁻¹",
          "−541 kJ mol⁻¹",
          "−2339 kJ mol⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Remember ΔH_f⊖[Fe(s)] = 0 kJ mol⁻¹ because iron is an element in its standard state.",
          "Use ΔH_r = ΣΔH_f⊖(products) − ΣΔH_f⊖(reactants), paying careful attention to stoichiometric coefficients of 3.",
        ],
        explanation:
          "ΣΔH_f⊖(products) = 2(0) + 3(−394) = −1182 kJ mol⁻¹. ΣΔH_f⊖(reactants) = −824 + 3(−111) = −1157 kJ mol⁻¹. Therefore ΔH⊖ = −1182 − (−1157) = −25 kJ mol⁻¹. Reversing products and reactants gives +25 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Hess's Law with ΔH_c⊖",
        question:
          "Calculate `ΔH⊖` for the hydrogenation of ethene, `C₂H₄(g) + H₂(g) → C₂H₆(g)`, given standard enthalpies of combustion `ΔH_c⊖` (kJ mol⁻¹): `C₂H₄(g) = −1411`, `H₂(g) = −286`, `C₂H₆(g) = −1561`.",
        options: [
          "+136 kJ mol⁻¹",
          "−3258 kJ mol⁻¹",
          "−436 kJ mol⁻¹",
          "−136 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Combustion arrows point DOWN to CO₂ + H₂O, so the order is Reactants minus Products.",
          "Evaluate (−1411 + (−286)) − (−1561).",
        ],
        explanation:
          "For combustion cycles, ΔH_r = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products) = [−1411 + (−286)] − (−1561) = −1697 + 1561 = −136 kJ mol⁻¹. Using products minus reactants mistakenly gives +136 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Specific energy of fuels",
        question:
          "Methanol (`CH₃OH`, `M = 32.0 g mol⁻¹`) has a standard enthalpy of combustion of `−726 kJ mol⁻¹`. What is the **specific energy** of methanol?",
        options: [
          "22.7 kJ g⁻¹",
          "44.1 kJ g⁻¹",
          "23.2 MJ g⁻¹",
          "0.0441 kJ g⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "Specific energy is energy released per unit MASS (kJ g⁻¹).",
          "Divide |ΔH_c⊖| by the molar mass M.",
        ],
        explanation:
          "Specific energy = |ΔH_c⊖| / M = 726 / 32.0 = 22.69 ≈ 22.7 kJ g⁻¹. Inverting the ratio gives 0.0441 g kJ⁻¹, and multiplying by M gives 23 232 kJ mol⁻² g.",
      },
      {
        id: "r1-energetics-spontaneity-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Specific energy vs energy density",
        question:
          "How do gaseous hydrogen (`H₂`) and liquid octane (`C₈H₁₈`) compare as transport fuels at room temperature and pressure?",
        options: [
          "Hydrogen has both a higher specific energy and a higher volumetric energy density than octane.",
          "Octane has both a higher specific energy and a higher volumetric energy density than hydrogen.",
          "Hydrogen has a higher specific energy (per kg), while octane has a higher energy density (per dm³).",
          "Octane has a higher specific energy (per kg), while hydrogen has a higher energy density (per dm³).",
        ],
        answerIndex: 2,
        hints: [
          "Think about molar mass: H₂ has M = 2.02 g mol⁻¹, making energy per gram huge!",
          "Now think about volume: H₂ is a very low-density gas, whereas octane is a dense liquid.",
        ],
        explanation:
          "Because of its tiny molar mass, hydrogen releases ~142 kJ g⁻¹ (~3× octane's ~48 kJ g⁻¹), giving superior specific energy. However, because H₂ is a low-density gas, liquid octane packs far more energy per litre (higher volumetric energy density).",
      },
      {
        id: "r1-energetics-spontaneity-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Fuel-cell half-equations",
        question:
          "In a proton-exchange membrane (**acidic**) hydrogen–oxygen fuel cell, which half-equation occurs at the **cathode**?",
        options: [
          "H₂(g) → 2H⁺(aq) + 2e⁻",
          "O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)",
          "O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)",
          "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻",
        ],
        answerIndex: 1,
        hints: [
          "Reduction ALWAYS occurs at the cathode (Red Cat).",
          "The electrolyte is ACIDIC (H⁺ ions), not alkaline (OH⁻ ions).",
        ],
        explanation:
          "At the cathode, oxygen is reduced by gaining electrons and reacting with H⁺ ions migrating across the acidic membrane: O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l). H₂ → 2H⁺ + 2e⁻ is anode oxidation, and the OH⁻ equation applies to an alkaline fuel cell.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: Mixed SL & HL — Calorimetry/Hess Mastery, Born–Haber & Entropy (15 Qs)
  // answerIndex spread: [4, 4, 3, 4]
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity-m2",
    title: "MCQ Paper 2 · Cycles, Born–Haber & Entropy (SL & HL)",
    level: "HL",
    questions: [
      {
        id: "r1-energetics-spontaneity-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "enthalpy-calorimetry",
        strategy: "Limiting reagent in calorimetry",
        question:
          "Excess zinc powder (`2.00 g`) is added to **50.0 cm³** of **0.400 mol dm⁻³** `CuSO₄(aq)` in an insulated cup: `Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)`. The temperature rises by **20.0 °C**. Using `c = 4.18 J g⁻¹ K⁻¹` and density `1.00 g cm⁻³`, what is `ΔH`?",
        options: [
          "−136 kJ mol⁻¹",
          "−209 kJ mol⁻¹",
          "+209 kJ mol⁻¹",
          "−418 kJ mol⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Zinc is in EXCESS — so which substance determines n?",
          "Compute q = 50.0 × 4.18 × 20.0 (in kJ) and divide by n(CuSO₄) = 0.0500 × 0.400.",
        ],
        explanation:
          "n(CuSO₄) = 0.0500 × 0.400 = 0.0200 mol (limiting). Heat absorbed by the 50.0 g aqueous solution: q = 50.0 × 4.18 × 20.0 = 4180 J = 4.18 kJ. Exothermic rise gives ΔH = −4.18 / 0.0200 = −209 kJ mol⁻¹. Dividing by moles of excess Zn (0.0306 mol) wrongly gives −136 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "enthalpy-calorimetry",
        strategy: "Proportional scaling in calorimetry",
        question:
          "A student mixes **25 cm³** of `1.0 mol dm⁻³` HCl with **25 cm³** of `1.0 mol dm⁻³` NaOH and measures a temperature rise `ΔT` and molar enthalpy `ΔH_neut`. The experiment is repeated using **50 cm³** of `1.0 mol dm⁻³` HCl and **50 cm³** of `1.0 mol dm⁻³` NaOH. Assuming zero heat loss, how do `ΔT` and `ΔH_neut` change?",
        options: [
          "Both ΔT and ΔH_neut double.",
          "ΔT doubles, while ΔH_neut remains unchanged.",
          "ΔT remains unchanged, while ΔH_neut doubles.",
          "Both ΔT and ΔH_neut remain unchanged.",
        ],
        answerIndex: 3,
        hints: [
          "Doubling both volumes doubles the moles reacting (and thus doubles q), AND also doubles the mass of water being heated (m).",
          "Check ΔT = q / (mc) when both q and m double!",
        ],
        explanation:
          "Doubling both reactant volumes doubles both the heat released q and the total solution mass m. Therefore ΔT = q/(mc) stays identical, and ΔH_neut = −q/n (an intensive molar quantity) is also unchanged.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Reverse bond enthalpy algebra",
        question:
          "For `N₂(g) + 3H₂(g) → 2NH₃(g)`, `ΔH = −93 kJ mol⁻¹`. Given bond enthalpies `N≡N = 945 kJ mol⁻¹` and `H−H = 436 kJ mol⁻¹`, what is the average `N−H` bond enthalpy?",
        options: [
          "391 kJ mol⁻¹",
          "360 kJ mol⁻¹",
          "782 kJ mol⁻¹",
          "1173 kJ mol⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "How many N−H bonds are formed in 2NH₃(g)? Six!",
          "Set −93 = [945 + 3(436)] − 6·E(N−H) and solve carefully for E(N−H).",
        ],
        explanation:
          "Bonds broken = 945 + 3(436) = 2253 kJ mol⁻¹. Setting −93 = 2253 − 6·E(N−H) gives 6·E(N−H) = 2253 + 93 = 2346, so E(N−H) = 2346 / 6 = 391 kJ mol⁻¹. Subtracting 93 instead of adding gives 360 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Finding ΔH_f⊖ from ΔH_c⊖",
        question:
          "Calculate `ΔH_f⊖` of propane, `3C(s) + 4H₂(g) → C₃H₈(g)`, given `ΔH_c⊖` (kJ mol⁻¹): `C(s) = −394`, `H₂(g) = −286`, `C₃H₈(g) = −2219`.",
        options: [
          "+107 kJ mol⁻¹",
          "−1539 kJ mol⁻¹",
          "−107 kJ mol⁻¹",
          "−4545 kJ mol⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Use the combustion cycle: ΔH_r = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products).",
          "Compute [3(−394) + 4(−286)] − (−2219).",
        ],
        explanation:
          "ΣΔH_c⊖(reactants) = 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ mol⁻¹. Subtracting ΔH_c⊖(C₃H₈) gives ΔH_f⊖ = −2326 − (−2219) = −107 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Fuel H : C ratio and CO₂ intensity",
        question:
          "Why does burning natural gas (mainly `CH₄`) emit **less CO₂ per kilojoule of energy released** than burning coal (mostly carbon)?",
        options: [
          "Natural gas burns by incomplete combustion, converting less carbon to CO₂.",
          "Coal has a higher specific energy than methane, requiring more oxygen per mole.",
          "Methane has weaker C=O bonds in its products than coal combustion produces.",
          "Methane has a higher H : C ratio, so a large share of energy comes from forming H₂O.",
        ],
        answerIndex: 3,
        hints: [
          "Compare the products of burning C(s) vs CH₄(g).",
          "Forming 2 moles of H₂O per mole of CO₂ releases substantial heat without adding extra carbon.",
        ],
        explanation:
          "Because CH₄ has a 4 : 1 H : C ratio, burning it forms 2 mol H₂O for every 1 mol CO₂, supplying a large share of exothermic bond formation from O−H bonds without emitting additional CO₂.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "hess-bond-enthalpies-fuels",
        strategy: "Volumetric energy density",
        question:
          "Liquid ethanol (`C₂H₅OH`, `M = 46.1 g mol⁻¹`, density `ρ = 0.789 g cm⁻³`) has `ΔH_c⊖ = −1367 kJ mol⁻¹`. What is the **energy density** of ethanol in `kJ cm⁻³`?",
        options: [
          "29.7 kJ cm⁻³",
          "23.4 kJ cm⁻³",
          "37.6 kJ cm⁻³",
          "1079 kJ cm⁻³",
        ],
        answerIndex: 1,
        hints: [
          "First find specific energy = |ΔH_c⊖| / M (in kJ g⁻¹).",
          "Multiply specific energy (kJ g⁻¹) by density (g cm⁻³) so grams cancel cleanly to give kJ cm⁻³.",
        ],
        explanation:
          "Specific energy = 1367 / 46.1 = 29.65 kJ g⁻¹. Multiplying by density 0.789 g cm⁻³ gives energy density = 29.65 × 0.789 = 23.4 kJ cm⁻³. Dividing by density wrongly gives 37.6 kJ cm⁻³.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "born-haber-solution-hl",
        strategy: "IB lattice enthalpy definition",
        question:
          "Which equation correctly represents the **lattice enthalpy**, `ΔH_lat⊖`, of magnesium chloride according to the **IB Chemistry Data Booklet convention**?",
        options: [
          "MgCl₂(s) → Mg²⁺(g) + 2Cl⁻(g)",
          "Mg²⁺(g) + 2Cl⁻(g) → MgCl₂(s)",
          "MgCl₂(s) → Mg(s) + Cl₂(g)",
          "MgCl₂(s) → Mg²⁺(aq) + 2Cl⁻(aq)",
        ],
        answerIndex: 0,
        hints: [
          "In IB Chemistry, lattice enthalpy is always ENDOTHERMIC (+): separating 1 mole of solid crystal into gaseous ions.",
          "Check both the direction of the arrow and the `(g)` state symbols on the ions.",
        ],
        explanation:
          "The IB Data Booklet defines lattice enthalpy as the endothermic dissociation of 1 mole of solid ionic compound into its isolated gaseous ions: MgCl₂(s) → Mg²⁺(g) + 2Cl⁻(g), ΔH_lat⊖ > 0. Separating into aqueous ions is enthalpy of solution, not lattice enthalpy.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "born-haber-solution-hl",
        strategy: "Signs of Born–Haber steps",
        question:
          "Which step in the Born–Haber cycle for magnesium oxide (`MgO`) is **exothermic** (`ΔH < 0`)?",
        options: [
          "Mg(s) → Mg(g)",
          "O⁻(g) + e⁻ → O²⁻(g)",
          "O(g) + e⁻ → O⁻(g)",
          "Mg⁺(g) → Mg²⁺(g) + e⁻",
        ],
        answerIndex: 2,
        hints: [
          "Atomisation and ionisation energies always require energy input (+).",
          "Compare adding an electron to a neutral O atom versus forcing a second electron onto a negatively charged O⁻ ion.",
        ],
        explanation:
          "The first electron affinity of oxygen, O(g) + e⁻ → O⁻(g) (−141 kJ mol⁻¹), is exothermic because the incoming electron is attracted to the oxygen nucleus. By contrast, the second electron affinity O⁻(g) + e⁻ → O²⁻(g) is endothermic (+753 kJ mol⁻¹) due to electron–electron repulsion.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "born-haber-solution-hl",
        strategy: "Coulomb's law for lattice enthalpy",
        question:
          "Which sequence arranges the ionic compounds in order of **increasing** lattice enthalpy (`ΔH_lat⊖`, smallest to largest)?",
        options: [
          "KBr < NaCl < MgO",
          "MgO < NaCl < KBr",
          "NaCl < KBr < MgO",
          "KBr < MgO < NaCl",
        ],
        answerIndex: 0,
        hints: [
          "Lattice enthalpy increases with ionic charge product (q₊ × q₋) and decreases as ionic radii increase.",
          "Compare K⁺/Br⁻ (larger 1+/1− ions), Na⁺/Cl⁻ (smaller 1+/1− ions), and Mg²⁺/O²⁻ (small 2+/2− ions).",
        ],
        explanation:
          "K⁺ and Br⁻ are larger than Na⁺ and Cl⁻, so KBr (+691 kJ mol⁻¹) has a smaller ΔH_lat⊖ than NaCl (+790 kJ mol⁻¹). MgO has doubly charged, small Mg²⁺ and O²⁻ ions, giving an enormous lattice enthalpy (+3791 kJ mol⁻¹).",
      },
      {
        id: "r1-energetics-spontaneity-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "born-haber-solution-hl",
        strategy: "Charge density & hydration enthalpy",
        question:
          "The standard enthalpy of hydration of `Mg²⁺(g)` (`−1963 kJ mol⁻¹`) is much more exothermic than that of `Na⁺(g)` (`−424 kJ mol⁻¹`). Why?",
        options: [
          "Mg²⁺ has a larger ionic radius, allowing more water molecules to fit around it.",
          "Mg²⁺ forms covalent bonds with water molecules whereas Na⁺ forms hydrogen bonds.",
          "Mg²⁺ has a lower charge density, reducing repulsion between surrounding water dipoles.",
          "Mg²⁺ has a higher charge and smaller ionic radius, creating stronger ion–dipole attractions.",
        ],
        answerIndex: 3,
        hints: [
          "Mg²⁺ and Na⁺ are isoelectronic, yet Mg²⁺ has 12 protons versus 11 for Na⁺.",
          "How do higher charge (+2 vs +1) and smaller radius affect electrostatic ion–dipole attraction to δ⁻ oxygen atoms of water?",
        ],
        explanation:
          "Mg²⁺ has twice the positive charge and a smaller ionic radius than Na⁺, giving it a much higher charge density and far stronger electrostatic ion–dipole attractions with the δ⁻ oxygen lone pairs of water molecules.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "born-haber-solution-hl",
        strategy: "MX Born–Haber calculation",
        question:
          "Calculate the lattice enthalpy `ΔH_lat⊖` (IB endothermic dissociation convention) of `KF(s)` using these data (kJ mol⁻¹): `ΔH_f⊖(KF) = −569`, `ΔH_at⊖(K) = +89`, `IE₁(K) = +419`, `ΔH_at⊖(½F₂) = +79`, `EA₁(F) = −328`.",
        options: [
          "+310 kJ mol⁻¹",
          "+828 kJ mol⁻¹",
          "+1484 kJ mol⁻¹",
          "−828 kJ mol⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Write the Hess equation: ΔH_f⊖ = ΔH_at(K) + IE₁(K) + ΔH_at(F) + EA₁(F) − ΔH_lat⊖.",
          "Rearrange: ΔH_lat⊖ = (89 + 419 + 79 − 328) − (−569).",
        ],
        explanation:
          "Sum of atomic steps = 89 + 419 + 79 + (−328) = +259 kJ mol⁻¹. Since ΔH_f⊖ = +259 − ΔH_lat⊖, we get ΔH_lat⊖ = +259 − (−569) = +828 kJ mol⁻¹. Adding +328 instead of −328 produces +1484 kJ mol⁻¹, and flipping the sign of ΔH_f⊖ gives −310 / +310 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "born-haber-solution-hl",
        strategy: "Enthalpy of solution cycle",
        question:
          "Given `ΔH_lat⊖(NaI) = +700 kJ mol⁻¹`, `ΔH_hyd⊖(Na⁺) = −424 kJ mol⁻¹`, and `ΔH_hyd⊖(I⁻) = −293 kJ mol⁻¹`, what is the standard enthalpy of solution `ΔH_sol⊖` of sodium iodide?",
        options: [
          "−17 kJ mol⁻¹",
          "+17 kJ mol⁻¹",
          "+1417 kJ mol⁻¹",
          "−1417 kJ mol⁻¹",
        ],
        answerIndex: 0,
        hints: [
          "Use ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖ (IB endothermic ΔH_lat⊖ > 0).",
          "Sum +700 + (−424) + (−293).",
        ],
        explanation:
          "Breaking the NaI lattice absorbs +700 kJ mol⁻¹, while hydrating Na⁺ and I⁻ releases −424 + (−293) = −717 kJ mol⁻¹. Thus ΔH_sol⊖ = +700 − 717 = −17 kJ mol⁻¹ (slightly exothermic).",
      },
      {
        id: "r1-energetics-spontaneity-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Predicting ΔS from Δn_gas",
        question:
          "Which reaction is predicted to have a **negative** standard entropy change (`ΔS⊖ < 0`)?",
        options: [
          "CaCO₃(s) → CaO(s) + CO₂(g)",
          "2H₂O₂(l) → 2H₂O(l) + O₂(g)",
          "C(s) + H₂O(g) → CO(g) + H₂(g)",
          "2SO₂(g) + O₂(g) → 2SO₃(g)",
        ],
        answerIndex: 3,
        hints: [
          "Count the change in moles of GAS (Δn_gas = n_gas(products) − n_gas(reactants)) for each reaction.",
          "A decrease in moles of gas corresponds to fewer microstates and ΔS⊖ < 0.",
        ],
        explanation:
          "In 2SO₂(g) + O₂(g) → 2SO₃(g), 3 moles of gas combine into 2 moles of gas (Δn_gas = −1), decreasing disorder so ΔS⊖ < 0. The other three reactions all have Δn_gas = +1 and therefore ΔS⊖ > 0.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Absolute molar entropy trends",
        question:
          "Which list orders the substances in **increasing** standard molar entropy (`S⊖`) at 298 K?",
        options: [
          "H₂O(l) < C(s, diamond) < CH₄(g) < C₃H₈(g)",
          "C(s, diamond) < H₂O(l) < CH₄(g) < C₃H₈(g)",
          "C(s, diamond) < H₂O(l) < C₃H₈(g) < CH₄(g)",
          "C₃H₈(g) < CH₄(g) < H₂O(l) < C(s, diamond)",
        ],
        answerIndex: 1,
        hints: [
          "Physical state comes first: solid < liquid < gas.",
          "Between two gases, a larger, more complex molecule has more vibrational/rotational states and thus higher S⊖.",
        ],
        explanation:
          "Rigid covalent network diamond (2.4 J K⁻¹ mol⁻¹) has the lowest entropy, followed by liquid water (70 J K⁻¹ mol⁻¹), then gaseous methane (186 J K⁻¹ mol⁻¹), and larger gaseous propane (270 J K⁻¹ mol⁻¹) has the highest.",
      },
      {
        id: "r1-energetics-spontaneity-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Computing ΔS⊖ = ΣS⊖(P) − ΣS⊖(R)",
        question:
          "Calculate `ΔS⊖` for `2H₂(g) + O₂(g) → 2H₂O(l)` at 298 K given standard molar entropies `S⊖` (`J K⁻¹ mol⁻¹`): `H₂(g) = 131`, `O₂(g) = 205`, `H₂O(l) = 70`.",
        options: [
          "+327 J K⁻¹ mol⁻¹",
          "−266 J K⁻¹ mol⁻¹",
          "−327 J K⁻¹ mol⁻¹",
          "−196 J K⁻¹ mol⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Remember that elements like H₂(g) and O₂(g) do NOT have S⊖ = 0!",
          "Use ΔS⊖ = 2·S⊖(H₂O) − [2·S⊖(H₂) + S⊖(O₂)].",
        ],
        explanation:
          "ΔS⊖ = 2(70) − [2(131) + 205] = 140 − (262 + 205) = 140 − 467 = −327 J K⁻¹ mol⁻¹. Three moles of gas condensing into liquid water causes a large negative entropy change.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: HL Mastery — Born–Haber Stoichiometry, Polarization & Gibbs (15 Qs)
  // answerIndex spread: [3, 4, 4, 4]
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity-m3",
    title: "MCQ Paper 3 · Born–Haber Mastery, Entropy & Gibbs (HL)",
    level: "HL",
    questions: [
      {
        id: "r1-energetics-spontaneity-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "born-haber-solution-hl",
        strategy: "MX₂ Born–Haber stoichiometry",
        question:
          "Calculate `ΔH_lat⊖` (IB endothermic dissociation convention) of `CaCl₂(s)` given (kJ mol⁻¹): `ΔH_f⊖(CaCl₂) = −796`, `ΔH_at⊖(Ca) = +178`, `IE₁(Ca) = +590`, `IE₂(Ca) = +1145`, `E(Cl−Cl) = +242`, `EA₁(Cl) = −349`.",
        options: [
          "+2602 kJ mol⁻¹",
          "+2495 kJ mol⁻¹",
          "+661 kJ mol⁻¹",
          "+2253 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Breaking 1 mol of Cl−Cl bonds in Cl₂(g) already makes 2 mol of Cl(g) atoms — do NOT double E(Cl−Cl)!",
          "Do multiply EA₁(Cl) by 2 because 2 mol of Cl⁻(g) ions are formed.",
        ],
        explanation:
          "Gaseous-ion sum = 178 + 590 + 1145 + 242 + 2(−349) = 2155 − 698 = +1457 kJ mol⁻¹. Then ΔH_lat⊖ = +1457 − (−796) = +2253 kJ mol⁻¹. Forgetting to double EA₁(Cl) gives +2602 kJ mol⁻¹, and mistakenly doubling E(Cl−Cl) gives +2495 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "born-haber-solution-hl",
        strategy: "Experimental vs theoretical lattice enthalpy",
        question:
          "For silver iodide (`AgI`), the experimental Born–Haber lattice enthalpy is `+889 kJ mol⁻¹`, while the theoretical value calculated from the purely ionic model is `+808 kJ mol⁻¹`. What does this `+81 kJ mol⁻¹` difference demonstrate?",
        options: [
          "The bonding in AgI is weaker than predicted because Ag⁺ and I⁻ ions are too far apart.",
          "Ag⁺ polarises the large I⁻ electron cloud, introducing significant covalent character.",
          "I⁻ polarises the small Ag⁺ electron cloud, reducing the electrostatic lattice attraction.",
          "The theoretical ionic model ignores the exothermic hydration enthalpy of Ag⁺ and I⁻.",
        ],
        answerIndex: 1,
        hints: [
          "The experimental lattice is STRONGER (+889 > +808) than pure electrostatic point charges predict.",
          "Which ion polarises which? Cations distort the diffuse electron clouds of large anions.",
        ],
        explanation:
          "When experimental ΔH_lat⊖ substantially exceeds the theoretical pure-ionic value, the extra lattice strength arises from covalent character caused by the polarising cation (Ag⁺) distorting the large, easily polarised electron cloud of the anion (I⁻).",
      },
      {
        id: "r1-energetics-spontaneity-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "born-haber-solution-hl",
        strategy: "Rearranging MX₂ solution cycle",
        question:
          "Calcium fluoride (`CaF₂`) has `ΔH_lat⊖ = +2651 kJ mol⁻¹`, `ΔH_sol⊖ = +13 kJ mol⁻¹`, and `ΔH_hyd⊖(Ca²⁺) = −1616 kJ mol⁻¹`. What is `ΔH_hyd⊖(F⁻)`?",
        options: [
          "−1022 kJ mol⁻¹",
          "−524 kJ mol⁻¹",
          "−511 kJ mol⁻¹",
          "+511 kJ mol⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Write the full solution equation including stoichiometry: ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(Ca²⁺) + 2·ΔH_hyd⊖(F⁻).",
          "Solve 13 = 2651 − 1616 + 2·ΔH_hyd⊖(F⁻) and remember to divide by 2 at the end!",
        ],
        explanation:
          "Substituting into ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(Ca²⁺) + 2·ΔH_hyd⊖(F⁻) gives 13 = 1035 + 2·ΔH_hyd⊖(F⁻), so 2·ΔH_hyd⊖(F⁻) = −1022 and ΔH_hyd⊖(F⁻) = −511 kJ mol⁻¹. Forgetting the factor of 2 gives −1022 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "born-haber-solution-hl",
        strategy: "Pure ionic agreement",
        question:
          "Why does the experimental Born–Haber lattice enthalpy of `NaF` (`+930 kJ mol⁻¹`) agree closely with its theoretical ionic value (`+915 kJ mol⁻¹`), unlike `AgI`?",
        options: [
          "Na⁺ has low polarising power and F⁻ is small and tightly held, giving almost pure ionic bonding.",
          "Na⁺ and F⁻ have identical ionic radii, cancelling all covalent orbital overlap in the crystal.",
          "Fluorine has a smaller electronegativity than iodine, preventing distortion of the anion cloud.",
          "NaF has a smaller lattice enthalpy than AgI, so percentage errors are naturally reduced.",
        ],
        answerIndex: 0,
        hints: [
          "Covalent character requires a strongly polarising cation AND a large, easily distorted anion.",
          "Check the polarising power of a 1+ noble-gas-core cation (Na⁺) and the polarisability of the tiny F⁻ ion.",
        ],
        explanation:
          "Na⁺ has only a +1 charge with a noble-gas core (low polarising power), and F⁻ is very small with tightly held valence electrons (very low polarisability). Consequently, NaF has negligible covalent character and fits the purely ionic point-charge model closely.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "born-haber-solution-hl",
        strategy: "M₂X Born–Haber stoichiometry",
        question:
          "Which expression gives `ΔH_lat⊖` (IB endothermic dissociation convention) of sodium oxide, `Na₂O(s)`, using standard atomisation enthalpies `ΔH_at⊖(Na)` and `ΔH_at⊖(½O₂)`?",
        options: [
          "ΔH_at⊖(Na) + IE₁(Na) + ΔH_at⊖(½O₂) + EA₁(O) + EA₂(O) − ΔH_f⊖(Na₂O)",
          "2ΔH_at⊖(Na) + 2IE₁(Na) + 2ΔH_at⊖(½O₂) + EA₁(O) + EA₂(O) − ΔH_f⊖(Na₂O)",
          "2ΔH_at⊖(Na) + 2IE₁(Na) + ΔH_at⊖(½O₂) + EA₁(O) + EA₂(O) − ΔH_f⊖(Na₂O)",
          "2ΔH_at⊖(Na) + 2IE₁(Na) + ΔH_at⊖(½O₂) + EA₁(O) + EA₂(O) + ΔH_f⊖(Na₂O)",
        ],
        answerIndex: 2,
        hints: [
          "Write the formation equation first: 2Na(s) + ½O₂(g) → Na₂O(s).",
          "Count how many moles of Na⁺(g) (2) and O²⁻(g) (1) are formed, and check the sign of ΔH_f⊖ when solving for ΔH_lat⊖.",
        ],
        explanation:
          "Forming 2Na⁺(g) + O²⁻(g) from 2Na(s) + ½O₂(g) takes 2ΔH_at⊖(Na) + 2IE₁(Na) + 1ΔH_at⊖(½O₂) + EA₁(O) + EA₂(O). Since ΔH_f⊖ = (gaseous ion sum) − ΔH_lat⊖, rearranging subtracts ΔH_f⊖(Na₂O).",
      },
      {
        id: "r1-energetics-spontaneity-m3-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Gibbs unit conversion J → kJ",
        question:
          "A reaction has `ΔH⊖ = −120 kJ mol⁻¹` and `ΔS⊖ = −200 J K⁻¹ mol⁻¹`. What is `ΔG⊖` at **298 K**?",
        options: [
          "−179.6 kJ mol⁻¹",
          "+59 480 kJ mol⁻¹",
          "−60.4 J mol⁻¹",
          "−60.4 kJ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Convert ΔS⊖ from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ by dividing by 1000: −0.200 kJ K⁻¹ mol⁻¹.",
          "Watch the double negative in ΔG⊖ = −120 − 298(−0.200)!",
        ],
        explanation:
          "Converting ΔS⊖ = −0.200 kJ K⁻¹ mol⁻¹ gives ΔG⊖ = −120 − (298 × −0.200) = −120 + 59.6 = −60.4 kJ mol⁻¹. Missing the double negative yields −179.6 kJ mol⁻¹, and forgetting ÷ 1000 yields +59 480 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Celsius-to-Kelvin and ΔG sign",
        question:
          "For a reaction with `ΔH⊖ = +95.0 kJ mol⁻¹` and `ΔS⊖ = +250 J K⁻¹ mol⁻¹`, calculate `ΔG` at **127 °C** (assuming `ΔH` and `ΔS` are constant with temperature) and state whether it is spontaneous.",
        options: [
          "+63.3 kJ mol⁻¹, non-spontaneous",
          "−5.0 kJ mol⁻¹, spontaneous",
          "+5.0 kJ mol⁻¹, non-spontaneous",
          "−195 kJ mol⁻¹, spontaneous",
        ],
        answerIndex: 1,
        hints: [
          "Always convert °C to Kelvin first: T = 127 + 273 = 400 K.",
          "Convert ΔS = +0.250 kJ K⁻¹ mol⁻¹, then compute 95.0 − 400(0.250).",
        ],
        explanation:
          "T = 127 + 273 = 400 K and ΔS = +0.250 kJ K⁻¹ mol⁻¹. Hence ΔG = +95.0 − (400 × 0.250) = 95.0 − 100.0 = −5.0 kJ mol⁻¹. Because ΔG < 0, the reaction is spontaneous at 127 °C. Using T = 127 without adding 273 gives +63.3 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Crossover temperature T = ΔH/ΔS",
        question:
          "Steam reforming of carbon, `C(s) + H₂O(g) → CO(g) + H₂(g)`, has `ΔH⊖ = +131 kJ mol⁻¹` and `ΔS⊖ = +134 J K⁻¹ mol⁻¹`. Above what minimum temperature (in K) does this reaction become spontaneous?",
        options: [
          "978 K",
          "0.978 K",
          "1023 K",
          "705 K",
        ],
        answerIndex: 0,
        hints: [
          "Set ΔG = ΔH − TΔS = 0 to solve for T = ΔH / ΔS.",
          "Ensure both ΔH and ΔS use the same energy unit: 131 kJ mol⁻¹ / 0.134 kJ K⁻¹ mol⁻¹.",
        ],
        explanation:
          "At the crossover temperature, ΔG = 0 ⇒ T = ΔH / ΔS = 131 / 0.134 = 977.6 ≈ 978 K. Forgetting to convert J to kJ produces 0.978 K, and inverting ΔS/ΔH gives 1023 K.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Four Gibbs spontaneity regimes",
        question:
          "A chemical reaction is exothermic (`ΔH⊖ < 0`) and causes a decrease in entropy (`ΔS⊖ < 0`). Under what temperature conditions is the reaction thermodynamically spontaneous?",
        options: [
          "At all temperatures, because ΔH⊖ is negative.",
          "Never spontaneous at any temperature, because ΔS⊖ is negative.",
          "Only at high temperatures, when |TΔS⊖| exceeds |ΔH⊖|.",
          "Only at low temperatures, when |ΔH⊖| exceeds |TΔS⊖|.",
        ],
        answerIndex: 3,
        hints: [
          "Check the sign of −TΔS⊖ when ΔS⊖ < 0: a minus times a minus is POSITIVE!",
          "For ΔG = (negative) + (positive) to stay negative, does T need to be small or large?",
        ],
        explanation:
          "With ΔH⊖ < 0 and ΔS⊖ < 0, the −TΔS⊖ term is positive and grows linearly with T. Thus ΔG⊖ < 0 only at low temperatures (below T = ΔH⊖/ΔS⊖) where the negative enthalpy term outweighs the unfavourable positive −TΔS⊖ term.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Reading ΔH and ΔS from ΔG vs T graph",
        question:
          "The graph below plots `ΔG` (`kJ mol⁻¹`) against temperature `T` (`K`) for a reversible reaction. What are `ΔH⊖` and `ΔS⊖` for this reaction?",
        diagram:
          `<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Linear graph of delta G versus temperature T starting at plus 80 kJ per mole at 0 K and crossing zero at 500 K" style="width:100%;max-width:420px;height:auto;display:block;margin:0 auto">` +
          `<rect x="0" y="0" width="420" height="210" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>` +
          `<line x1="68" y1="186" x2="68" y2="20" stroke="#334155" stroke-width="1.8"/>` +
          `<line x1="68" y1="116" x2="388" y2="116" stroke="#334155" stroke-width="1.8"/>` +
          `<text x="20" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90 20 106)">ΔG (kJ mol⁻¹)</text>` +
          `<text x="382" y="135" text-anchor="end" font-size="11" font-weight="700" fill="#334155">T (K)</text>` +
          `<line x1="63" y1="44" x2="73" y2="44" stroke="#334155" stroke-width="1.5"/>` +
          `<text x="58" y="48" text-anchor="end" font-size="10.5" font-weight="700" fill="#0f172a">+80</text>` +
          `<text x="58" y="120" text-anchor="end" font-size="10.5" fill="#475569">0</text>` +
          `<line x1="268" y1="111" x2="268" y2="121" stroke="#334155" stroke-width="1.5"/>` +
          `<text x="268" y="136" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">500</text>` +
          `<line x1="68" y1="44" x2="368" y2="152" stroke="#2563eb" stroke-width="2.8"/>` +
          `<circle cx="68" cy="44" r="4" fill="#2563eb"/>` +
          `<circle cx="268" cy="116" r="4" fill="#dc2626"/>` +
          `<text x="355" y="170" text-anchor="end" font-size="10.5" font-weight="700" fill="#047857">Spontaneous (ΔG &lt; 0)</text>` +
          `</svg>`,
        options: [
          "ΔH⊖ = +80 kJ mol⁻¹ and ΔS⊖ = −160 J K⁻¹ mol⁻¹",
          "ΔH⊖ = −80 kJ mol⁻¹ and ΔS⊖ = +160 J K⁻¹ mol⁻¹",
          "ΔH⊖ = +80 kJ mol⁻¹ and ΔS⊖ = +160 J K⁻¹ mol⁻¹",
          "ΔH⊖ = +80 kJ mol⁻¹ and ΔS⊖ = +0.160 J K⁻¹ mol⁻¹",
        ],
        answerIndex: 2,
        hints: [
          "Compare ΔG = ΔH − TΔS to y = c + m x: what do the y-intercept and gradient equal?",
          "Gradient = (0 − 80) / (500 − 0) = −0.160 kJ K⁻¹ mol⁻¹ = −ΔS⊖! Convert kJ to J and flip the sign!",
        ],
        explanation:
          "From ΔG = ΔH − TΔS, the y-intercept at T = 0 K gives ΔH⊖ = +80 kJ mol⁻¹. The gradient equals −ΔS⊖ = (0 − 80)/(500 − 0) = −0.160 kJ K⁻¹ mol⁻¹, so ΔS⊖ = +0.160 kJ K⁻¹ mol⁻¹ = +160 J K⁻¹ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Hess's Law with ΔG_f⊖",
        question:
          "Calculate `ΔG⊖` at 298 K for `2NO(g) + O₂(g) → 2NO₂(g)`, given `ΔG_f⊖` (`kJ mol⁻¹`): `NO(g) = +87`, `NO₂(g) = +51`.",
        options: [
          "−36 kJ mol⁻¹",
          "−72 kJ mol⁻¹",
          "+72 kJ mol⁻¹",
          "+276 kJ mol⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "ΔG_f⊖[O₂(g)] = 0 kJ mol⁻¹ for an element in its standard state.",
          "Apply ΔG⊖ = ΣΔG_f⊖(products) − ΣΔG_f⊖(reactants) including the coefficients of 2.",
        ],
        explanation:
          "ΔG⊖ = 2(+51) − [2(+87) + 0] = 102 − 174 = −72 kJ mol⁻¹. Omitting the stoichiometric factor of 2 gives −36 kJ mol⁻¹, and reversing products and reactants gives +72 kJ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Entropy-driven endothermic dissolution",
        question:
          "Ammonium nitrate (`NH₄NO₃`) dissolves spontaneously in water at 298 K even though `ΔH_sol⊖ = +25.7 kJ mol⁻¹`. Which statement best explains this observation?",
        options: [
          "Hydration of NH₄⁺ and NO₃⁻ releases more heat than the lattice enthalpy absorbs.",
          "Dissolving decreases the entropy of the system so that −TΔS⊖ becomes negative.",
          "The positive entropy change of dissolving makes TΔS⊖ larger than ΔH_sol⊖, giving ΔG⊖ < 0.",
          "A low activation energy allows the endothermic reaction to bypass thermodynamic spontaneity.",
        ],
        answerIndex: 2,
        hints: [
          "If ΔH_sol⊖ > 0, what must the sign and magnitude of TΔS⊖ be for ΔG = ΔH − TΔS to be negative?",
          "Breaking an ordered ionic crystal into mobile hydrated ions greatly increases disorder (ΔS > 0).",
        ],
        explanation:
          "Dissolving solid NH₄NO₃ into aqueous ions increases disorder substantially (ΔS_sol⊖ > 0). At 298 K, TΔS_sol⊖ exceeds +25.7 kJ mol⁻¹, making ΔG_sol⊖ = ΔH_sol⊖ − TΔS_sol⊖ < 0 (spontaneous).",
      },
      {
        id: "r1-energetics-spontaneity-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Thermodynamic feasibility vs kinetic stability",
        question:
          "A sealed flask of `H₂(g)` and `O₂(g)` at 298 K shows no detectable formation of water over many years, even though `ΔG⊖ = −237 kJ mol⁻¹` for `H₂(g) + ½O₂(g) → H₂O(l)`. Why?",
        options: [
          "The reaction is thermodynamically spontaneous but kinetically stable due to a high activation energy.",
          "The reaction is thermodynamically non-spontaneous at 298 K because ΔS⊖ is negative.",
          "The equilibrium constant K is very small at 298 K despite the negative ΔG⊖ value.",
          "The strong O−H bonds in product water prevent reactant molecules from colliding effectively.",
        ],
        answerIndex: 0,
        hints: [
          "Does ΔG⊖ tell you anything about how FAST a reaction occurs?",
          "Breaking strong H−H and O=O bonds requires a large initial energy barrier.",
        ],
        explanation:
          "A negative ΔG⊖ proves thermodynamic feasibility, not speed. Because the H−H and O=O bonds are very strong, the reaction has a high activation energy (E_a) and is kinetically stable until a spark or platinum catalyst provides a pathway.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Solving ΔG = ΔH − TΔS for ΔS",
        question:
          "At **300 K**, a reaction has `ΔH⊖ = −45.0 kJ mol⁻¹` and `ΔG⊖ = −12.0 kJ mol⁻¹`. What is `ΔS⊖` in `J K⁻¹ mol⁻¹`?",
        options: [
          "+110 J K⁻¹ mol⁻¹",
          "−0.110 J K⁻¹ mol⁻¹",
          "−190 J K⁻¹ mol⁻¹",
          "−110 J K⁻¹ mol⁻¹",
        ],
        answerIndex: 3,
        hints: [
          "Rearrange ΔG = ΔH − TΔS to TΔS = ΔH − ΔG.",
          "Compute ΔS = (−45.0 − (−12.0)) / 300 in kJ K⁻¹ mol⁻¹, then multiply by 1000 to convert to J K⁻¹ mol⁻¹.",
        ],
        explanation:
          "TΔS = ΔH − ΔG = −45.0 − (−12.0) = −33.0 kJ mol⁻¹. Dividing by 300 K gives ΔS = −0.110 kJ K⁻¹ mol⁻¹ = −110 J K⁻¹ mol⁻¹. Getting the sign backwards gives +110 J K⁻¹ mol⁻¹, and adding −45 and −12 gives −190 J K⁻¹ mol⁻¹.",
      },
      {
        id: "r1-energetics-spontaneity-m3-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "entropy-gibbs-spontaneity-hl",
        strategy: "Always-spontaneous reactions",
        question:
          "Which reaction is thermodynamically spontaneous at **all** temperatures?",
        options: [
          "CaCO₃(s) → CaO(s) + CO₂(g)   (ΔH⊖ = +178 kJ mol⁻¹)",
          "2H₂O₂(l) → 2H₂O(l) + O₂(g)   (ΔH⊖ = −196 kJ mol⁻¹)",
          "N₂(g) + 3H₂(g) → 2NH₃(g)   (ΔH⊖ = −92 kJ mol⁻¹)",
          "3O₂(g) → 2O₃(g)   (ΔH⊖ = +285 kJ mol⁻¹)",
        ],
        answerIndex: 1,
        hints: [
          "For ΔG = ΔH − TΔS to be negative at ALL temperatures, we need ΔH < 0 AND ΔS > 0.",
          "Check Δn_gas for each exothermic reaction.",
        ],
        explanation:
          "Decomposing liquid H₂O₂ is exothermic (ΔH⊖ < 0) AND produces 1 mole of O₂ gas from liquids (ΔS⊖ > 0), so both terms make ΔG = ΔH − TΔS negative at every temperature. Haber synthesis has ΔS < 0 (low T only), CaCO₃ decomposition has ΔH > 0 (high T only), and ozone formation has ΔH > 0, ΔS < 0 (never spontaneous).",
      },
    ],
  },
];
