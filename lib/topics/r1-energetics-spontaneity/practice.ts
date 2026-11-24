import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 Qs: 4 MCQs with indices 0,1,2,3 + 6 ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "r1-energetics-spontaneity-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "enthalpy-calorimetry",
      strategy: "Calorimetry q = mcΔT",
      question:
        "A sample of **150.0 g** of water increases in temperature by **12.0 °C**. Given `c = 4.18 J g⁻¹ K⁻¹`, calculate the thermal energy `q` absorbed by the water in **kJ** (to 3 significant figures).",
      answer: { type: "number", value: 7.52, tolerance: 0.03, display: "7.52 kJ" },
      traps: [
        { spec: { type: "number", value: 7524, tolerance: 25 }, feedback: "That value is in Joules — divide by 1000 to convert to kJ." },
      ],
      hints: [
        "Substitute m = 150.0 g, c = 4.18 J g⁻¹ K⁻¹, and ΔT = 12.0 K into q = mcΔT.",
        "Divide the result in Joules by 1000 to obtain kJ.",
      ],
      solution: [
        "{{q = m c ΔT = 150.0 * 4.18 * 12.0 = 7524}} J.",
        "Convert to kilojoules: {{7524 / 1000 = 7.524}} kJ ≈ **7.52 kJ** (3 s.f.).",
      ],
      commonError: "Forgetting to divide Joules by 1000 when quoting q in kJ.",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Describe",
      guideRef: "enthalpy-calorimetry",
      strategy: "Endothermic enthalpy profile",
      question:
        "Which statement correctly describes an **endothermic** reaction?",
      options: [
        "Heat flows from the surroundings into the system, so ΔH > 0 and reactants are more stable than products.",
        "Heat flows from the system into the surroundings, so ΔH > 0 and products are more stable than reactants.",
        "Heat flows from the surroundings into the system, so ΔH < 0 and products are more stable than reactants.",
        "Heat flows from the system into the surroundings, so ΔH < 0 and reactants are more stable than products.",
      ],
      answerIndex: 0,
      hints: [
        "Endothermic reactions absorb heat from the surroundings, cooling the thermometer.",
        "Higher enthalpy means weaker overall bonds and lower energetic stability.",
      ],
      explanation:
        "An endothermic reaction absorbs heat from the surroundings into the system, lifting the products to a higher enthalpy level than the reactants (ΔH > 0); thus reactants sit lower in enthalpy and are more energetically stable.",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "enthalpy-calorimetry",
      strategy: "Coffee-cup neutralisation",
      question:
        "**50.0 cm³** of `1.00 mol dm⁻³` HCl(aq) is mixed with **50.0 cm³** of `1.00 mol dm⁻³` KOH(aq) in a polystyrene cup. The temperature rises by **6.8 °C**. Using `c = 4.18 J g⁻¹ K⁻¹` and density `1.00 g cm⁻³`, calculate `ΔH_neut` in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
      answer: { type: "number", value: -56.8, tolerance: 0.25, display: "−56.8 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 56.8, tolerance: 0.25 }, feedback: "The temperature rose, so the reaction is exothermic — include the negative sign!" },
        { spec: { type: "number", value: -28.4, tolerance: 0.2 }, feedback: "You used 50.0 g instead of the total mixed solution mass (50.0 + 50.0 = 100.0 g)." },
      ],
      hints: [
        "Total mass of solution warming up is 50.0 + 50.0 = 100.0 g.",
        "Find q in kJ, divide by n(H₂O) = 0.0500 mol, and apply the negative sign for an exothermic rise.",
      ],
      solution: [
        "Total mass: m = 50.0 + 50.0 = 100.0 g.",
        "{{q = 100.0 * 4.18 * 6.8 = 2842.4}} J = 2.8424 kJ.",
        "Moles of water formed: {{n = 0.0500 * 1.00 = 0.0500}} mol.",
        "{{ΔH = -2.8424 / 0.0500 = -56.85}} ≈ **−56.8 kJ mol⁻¹**.",
      ],
      commonError: "Using 50.0 g instead of 100.0 g or dropping the negative sign.",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "hess-bond-enthalpies-fuels",
      strategy: "Average bond enthalpies",
      question:
        "Calculate `ΔH` (in **kJ mol⁻¹**, include the sign) for `H₂(g) + Br₂(g) → 2HBr(g)` using bond enthalpies (`kJ mol⁻¹`): `H−H = 436`, `Br−Br = 193`, `H−Br = 366`.",
      answer: { type: "number", value: -103, tolerance: 0.5, display: "−103 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 103, tolerance: 0.5 }, feedback: "Remember: bond enthalpies use Σ(broken) − Σ(formed), not formed minus broken!" },
        { spec: { type: "number", value: 263, tolerance: 0.5 }, feedback: "Two moles of HBr are formed, so multiply the H−Br bond enthalpy by 2." },
      ],
      hints: [
        "Count bonds broken: 1 H−H and 1 Br−Br. Count bonds formed: 2 H−Br.",
        "Evaluate ΔH = Σ(bonds broken) − Σ(bonds formed).",
      ],
      solution: [
        "Bonds broken = 436 + 193 = 629 kJ mol⁻¹.",
        "Bonds formed = 2 × 366 = 732 kJ mol⁻¹.",
        "ΔH = 629 − 732 = **−103 kJ mol⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "hess-bond-enthalpies-fuels",
      strategy: "Hess combustion vs formation cycles",
      question:
        "Which Hess's Law relation correctly calculates the standard enthalpy change of reaction `ΔH_r⊖` from **standard enthalpies of combustion** (`ΔH_c⊖`)?",
      options: [
        "ΔH_r⊖ = ΣΔH_c⊖(products) − ΣΔH_c⊖(reactants)",
        "ΔH_r⊖ = ΣΔH_c⊖(reactants) + ΣΔH_c⊖(products)",
        "ΔH_r⊖ = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)",
        "ΔH_r⊖ = −ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)",
      ],
      answerIndex: 2,
      hints: [
        "In a combustion cycle, arrows point DOWN from both reactants and products to CO₂ + H₂O.",
        "To travel from reactants to products via CO₂ + H₂O, go WITH the reactant arrow and AGAINST the product arrow.",
      ],
      explanation:
        "Because combustion arrows point down from both reactants and products to the same combustion products (CO₂ + H₂O), going from reactants to products travels with ΣΔH_c⊖(reactants) and against ΣΔH_c⊖(products), giving ΔH_r⊖ = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products).",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "hess-bond-enthalpies-fuels",
      strategy: "Specific energy of fuels",
      question:
        "Methane (`CH₄`, `M = 16.05 g mol⁻¹`) has `ΔH_c⊖ = −891 kJ mol⁻¹`. Calculate the **specific energy** of methane in **kJ g⁻¹** (to 3 significant figures).",
      answer: { type: "number", value: 55.5, tolerance: 0.2, display: "55.5" },
      traps: [
        { spec: { type: "number", value: 0.018, tolerance: 0.002 }, feedback: "You divided M by |ΔH_c| instead of |ΔH_c| by M." },
      ],
      hints: [
        "Specific energy is positive heat released per gram of fuel: |ΔH_c⊖| / M.",
        "Divide 891 by 16.05.",
      ],
      solution: [
        "{{Specific energy = 891 / 16.05 = 55.51}} ≈ **55.5 kJ g⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "born-haber-solution-hl",
      strategy: "Second electron affinity sign",
      question:
        "Why is the second electron affinity of oxygen, `O⁻(g) + e⁻ → O²⁻(g)`, **endothermic**?",
      options: [
        "The incoming electron enters an inner shell with lower nuclear shielding.",
        "Energy is required to overcome electrostatic repulsion between O⁻ and the incoming electron.",
        "Breaking the O=O double bond requires more energy than adding an electron releases.",
        "O²⁻ has a smaller ionic radius than O⁻, increasing the lattice enthalpy.",
      ],
      answerIndex: 1,
      hints: [
        "Both O⁻(g) and the incoming electron carry a negative charge.",
        "What electrostatic force acts between two like charges?",
      ],
      explanation:
        "Forcing a negatively charged electron onto an already negatively charged O⁻(g) ion requires energy input to overcome electrostatic repulsion, making EA₂ endothermic (+753 kJ mol⁻¹).",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "born-haber-solution-hl",
      strategy: "Enthalpy of solution cycle",
      question:
        "Using the IB endothermic lattice enthalpy convention, calculate `ΔH_sol⊖` (in **kJ mol⁻¹**, include the sign) for `KCl(s)` given `ΔH_lat⊖(KCl) = +720 kJ mol⁻¹`, `ΔH_hyd⊖(K⁺) = −340 kJ mol⁻¹`, and `ΔH_hyd⊖(Cl⁻) = −359 kJ mol⁻¹`.",
      answer: { type: "number", value: 21, tolerance: 0.5, display: "+21 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: -21, tolerance: 0.5 }, feedback: "Check the sign: +720 − 699 is positive (+21 kJ mol⁻¹, endothermic)." },
        { spec: { type: "number", value: 1419, tolerance: 2 }, feedback: "Hydration enthalpies are exothermic (negative) and must be subtracted from +ΔH_lat⊖." },
      ],
      hints: [
        "Apply ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(K⁺) + ΔH_hyd⊖(Cl⁻).",
        "Sum +720 + (−340) + (−359).",
      ],
      solution: [
        "ΔH_sol⊖ = +720 + (−340) + (−359) = 720 − 699 = **+21 kJ mol⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-quiz-q09",
      kind: "mcq",
      difficulty: "warmup",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "entropy-gibbs-spontaneity-hl",
      strategy: "Predicting ΔS from state change",
      question:
        "Which prediction best describes the entropy change `ΔS⊖` for `NH₄Cl(s) → NH₃(g) + HCl(g)`?",
      options: [
        "Large negative ΔS⊖ because two covalent gases form from an ionic solid.",
        "Close to zero because the number of nitrogen and chlorine atoms is conserved.",
        "Small negative ΔS⊖ because gas molecules have higher kinetic energy than solids.",
        "Large positive ΔS⊖ because 1 mole of solid produces 2 moles of gas.",
      ],
      answerIndex: 3,
      hints: [
        "Count moles of gas on each side: 0 mol gas on the left, 2 mol gas on the right.",
        "Gases have far greater positional freedom and entropy than crystalline solids.",
      ],
      explanation:
        "Converting an ordered crystalline solid into 2 moles of gas (Δn_gas = +2) massively increases the dispersal of matter and energy, producing a large positive ΔS⊖.",
    },
    {
      id: "r1-energetics-spontaneity-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "entropy-gibbs-spontaneity-hl",
      strategy: "Gibbs free energy unit conversion",
      question:
        "A reaction has `ΔH⊖ = −85.0 kJ mol⁻¹` and `ΔS⊖ = +150 J K⁻¹ mol⁻¹`. Calculate `ΔG⊖` at **298 K** in **kJ mol⁻¹** (include the sign, to 1 decimal place).",
      answer: { type: "number", value: -129.7, tolerance: 0.2, display: "−129.7 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: -44785, tolerance: 10 }, feedback: "Unit trap! Divide ΔS⊖ (in J K⁻¹ mol⁻¹) by 1000 to convert to kJ K⁻¹ mol⁻¹ first." },
        { spec: { type: "number", value: -40.3, tolerance: 0.2 }, feedback: "Check the sign: ΔG = ΔH − TΔS subtracts a positive TΔS from −85.0, making it MORE negative." },
      ],
      hints: [
        "First convert ΔS⊖ = +150 J K⁻¹ mol⁻¹ = +0.150 kJ K⁻¹ mol⁻¹.",
        "Compute ΔG⊖ = −85.0 − (298 × 0.150).",
      ],
      solution: [
        "Convert ΔS⊖: {{150 / 1000 = +0.150}} kJ K⁻¹ mol⁻¹.",
        "ΔG⊖ = −85.0 − (298 × 0.150) = −85.0 − 44.7 = **−129.7 kJ mol⁻¹**.",
      ],
      commonError: "Forgetting to divide ΔS⊖ by 1000 when using ΔG = ΔH − TΔS.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS P1 (SL Core, 15 Qs) & P2 (HL Energetics & Spontaneity, 15 Qs)
  // ===========================================================================
  papers: [
    {
      id: "r1-energetics-spontaneity-p1",
      title: "Practice Paper 1 · Calorimetry, Hess's Law & Fuels (SL Structured)",
      level: "SL",
      questions: [
        {
          id: "r1-energetics-spontaneity-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "enthalpy-calorimetry",
          strategy: "Spirit-burner heat transfer",
          question:
            "A spirit burner containing propan-1-ol heats **250.0 g** of water in a copper can from **19.5 °C** to **39.5 °C**. Using `c = 4.18 J g⁻¹ K⁻¹`, calculate the thermal energy `q` absorbed by the water in **kJ** (to 3 significant figures).",
          answer: { type: "number", value: 20.9, tolerance: 0.05, display: "20.9 kJ" },
          traps: [
            { spec: { type: "number", value: 20900, tolerance: 50 }, feedback: "Convert from Joules to kJ by dividing by 1000." },
          ],
          hints: [
            "Calculate ΔT = 39.5 − 19.5 = 20.0 K.",
            "Multiply 250.0 × 4.18 × 20.0, then divide by 1000.",
          ],
          solution: [
            "ΔT = 39.5 − 19.5 = 20.0 K.",
            "{{q = 250.0 * 4.18 * 20.0 = 20900}} J = **20.9 kJ**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "enthalpy-calorimetry",
          strategy: "Molar enthalpy of combustion",
          question:
            "In the spirit-burner experiment above, **0.720 g** of propan-1-ol (`M = 60.1 g mol⁻¹`) burned to transfer **20.9 kJ** to the water. Calculate the experimental enthalpy of combustion `ΔH_c` in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
          answer: { type: "number", value: -1740, tolerance: 12, display: "−1740 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 1740, tolerance: 12 }, feedback: "Combustion is exothermic — remember the negative sign!" },
          ],
          hints: [
            "Calculate moles of propan-1-ol burnt: n = 0.720 / 60.1.",
            "Apply ΔH_c = −q / n with q = 20.9 kJ.",
          ],
          solution: [
            "{{n = 0.720 / 60.1 = 0.01198}} mol.",
            "{{ΔH_c = -20.9 / 0.01198 = -1744.6}} ≈ **−1740 kJ mol⁻¹** (3 s.f.).",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "enthalpy-calorimetry",
          strategy: "Paper 1B systematic error evaluation",
          marks: 3,
          question:
            "The IB Data Booklet enthalpy of combustion of propan-1-ol is `−2021 kJ mol⁻¹`, whereas the student's spirit-burner result was `−1740 kJ mol⁻¹`. Explain **two** systematic errors causing this difference and suggest **one** practical apparatus improvement.",
          hints: [
            "Name concrete physical losses (never write 'human error') — where did heat escape and what does soot indicate?",
            "Suggest a specific shielding or calorimeter upgrade such as a draught shield, lid, or bomb calorimeter.",
          ],
          modelAnswer:
            "1. Significant thermal energy escapes to the surrounding air and is absorbed by the copper can instead of warming the water, lowering ΔT and making the measured value less exothermic.\n" +
            "2. Incomplete combustion of propan-1-ol due to limited oxygen supply produces carbon soot and carbon monoxide rather than CO₂, releasing less energy per mole burnt.\n" +
            "3. Apparatus improvement: surround the flame with a draught shield and add an insulating lid to the calorimeter (or use a bomb calorimeter calibrated for its heat capacity) to minimise heat losses.",
          markScheme: [
            { point: "Heat loss to surrounding air / absorbed by copper can lowers measured ΔT.", keywords: ["surrounding air", "heat loss", "copper can", "escapes"] },
            { point: "Incomplete combustion (forming soot / C / CO) releases less heat per mole.", keywords: ["incomplete combustion", "soot", "carbon monoxide"] },
            { point: "Valid practical improvement (draught shield, insulated lid, or bomb calorimeter).", keywords: ["draught shield", "draft shield", "lid", "bomb calorimeter", "insulat"] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "enthalpy-calorimetry",
          strategy: "Endothermic dissolution calorimetry",
          question:
            "**8.00 g** of solid `NH₄NO₃` (`M = 80.06 g mol⁻¹`) dissolves in **100.0 g** of water in an insulated cup, causing the temperature to drop from **23.0 °C** to **17.0 °C**. Assuming the solution mass is `100.0 g` and `c = 4.18 J g⁻¹ K⁻¹`, calculate `ΔH_sol` in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
          answer: { type: "number", value: 25.1, tolerance: 0.2, display: "+25.1 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -25.1, tolerance: 0.2 }, feedback: "The water cooled down (ΔT < 0), so dissolving absorbed heat — ΔH_sol is POSITIVE!" },
          ],
          hints: [
            "ΔT = 17.0 − 23.0 = −6.0 K (endothermic, so final ΔH must be positive).",
            "Find q = 100.0 × 4.18 × (−6.0) in kJ, find n = 8.00 / 80.06, and use ΔH = −q / n.",
          ],
          solution: [
            "ΔT = 17.0 − 23.0 = −6.0 K.",
            "{{q = 100.0 * 4.18 * (-6.0) = -2508}} J = −2.508 kJ.",
            "{{n = 8.00 / 80.06 = 0.09993}} mol.",
            "{{ΔH_sol = -(-2.508) / 0.09993 = +25.10}} ≈ **+25.1 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "enthalpy-calorimetry",
          strategy: "Cooling-curve linear back-extrapolation",
          question:
            "In a coffee-cup calorimetry experiment, the steady initial baseline temperature is **21.0 °C** and the solid reagent is added at **t = 4.0 min**. After peaking, the solution cools linearly through **(6.0 min, 29.0 °C)** and **(10.0 min, 27.0 °C)** as shown below. Extrapolate the linear cooling line back to `t = 4.0 min` to determine the corrected temperature change `ΔT` in **°C** (to 1 decimal place).",
          diagram:
            `<svg viewBox="0 0 430 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature versus time cooling curve with baseline 21.0 degrees Celsius, mixing at 4.0 min, and linear cooling through 6.0 min at 29.0 degrees and 10.0 min at 27.0 degrees" style="width:100%;max-width:430px;height:auto;display:block;margin:0 auto">` +
            `<rect x="0" y="0" width="430" height="205" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>` +
            `<line x1="62" y1="170" x2="62" y2="20" stroke="#334155" stroke-width="1.8"/>` +
            `<line x1="62" y1="170" x2="402" y2="170" stroke="#334155" stroke-width="1.8"/>` +
            `<text x="18" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90 18 96)">Temp (°C)</text>` +
            `<text x="232" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Time (min)</text>` +
            `<line x1="176" y1="24" x2="176" y2="170" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>` +
            `<text x="176" y="184" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">4.0</text>` +
            `<text x="233" y="184" text-anchor="middle" font-size="10" fill="#475569">6.0</text>` +
            `<text x="347" y="184" text-anchor="middle" font-size="10" fill="#475569">10.0</text>` +
            `<line x1="66" y1="150" x2="176" y2="150" stroke="#2563eb" stroke-width="2.4"/>` +
            `<text x="55" y="154" text-anchor="end" font-size="10" font-weight="700" fill="#1d4ed8">21.0</text>` +
            `<path d="M176 150 Q200 72, 233 54" fill="none" stroke="#ea580c" stroke-width="2.2"/>` +
            `<line x1="233" y1="54" x2="347" y2="78" stroke="#059669" stroke-width="2.6"/>` +
            `<circle cx="233" cy="54" r="4" fill="#059669"/><text x="242" y="47" font-size="10" font-weight="700" fill="#047857">(6.0, 29.0)</text>` +
            `<circle cx="347" cy="78" r="4" fill="#059669"/><text x="348" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">(10.0, 27.0)</text>` +
            `<line x1="176" y1="42" x2="233" y2="54" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>` +
            `<circle cx="176" cy="42" r="4" fill="#dc2626"/><text x="164" y="38" text-anchor="end" font-size="10" font-weight="700" fill="#b91c1c">T_max = ?</text>` +
            `</svg>`,
          answer: { type: "number", value: 9.0, tolerance: 0.1, display: "9.0 °C" },
          traps: [
            { spec: { type: "number", value: 30.0, tolerance: 0.1 }, feedback: "30.0 °C is the extrapolated T_max — subtract the 21.0 °C baseline to get ΔT!" },
            { spec: { type: "number", value: 8.0, tolerance: 0.1 }, feedback: "29.0 − 21.0 = 8.0 °C ignores the linear extrapolation back from 6.0 min to 4.0 min." },
          ],
          hints: [
            "Find the cooling rate (gradient) between 6.0 min and 10.0 min: (27.0 − 29.0) / (10.0 − 6.0).",
            "Walk 2.0 min backwards from 6.0 min to 4.0 min to find T_max, then subtract 21.0 °C.",
          ],
          solution: [
            "Cooling gradient = {{(27.0 - 29.0) / (10.0 - 6.0) = -0.50}} °C min⁻¹.",
            "Extrapolating 2.0 min back to t = 4.0 min: T_max = 29.0 + (0.50 × 2.0) = 30.0 °C.",
            "Corrected temperature change: ΔT = 30.0 − 21.0 = **9.0 °C**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "enthalpy-calorimetry",
          strategy: "Limiting reactant metal–acid calorimetry",
          question:
            "**0.243 g** of magnesium ribbon (`M = 24.31 g mol⁻¹`) is added to **100.0 cm³** of `1.00 mol dm⁻³` HCl(aq) in an insulated cup: `Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)`. The temperature increases by **10.8 °C**. Assuming solution mass = `100.0 g` and `c = 4.18 J g⁻¹ K⁻¹`, calculate `ΔH` per mole of Mg in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
          answer: { type: "number", value: -452, tolerance: 3, display: "−452 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 452, tolerance: 3 }, feedback: "Temperature increased, so the reaction is exothermic (negative sign)." },
            { spec: { type: "number", value: -45.1, tolerance: 0.5 }, feedback: "Check the limiting reactant: n(Mg) = 0.0100 mol whereas n(HCl) = 0.100 mol (in large excess)." },
          ],
          hints: [
            "Check which reactant is limiting: n(Mg) = 0.243 / 24.31 = 0.0100 mol; n(HCl) = 0.100 mol (needs only 0.0200 mol).",
            "Calculate q = 100.0 × 4.18 × 10.8 in kJ, then compute ΔH = −q / n(Mg).",
          ],
          solution: [
            "n(Mg) = {{0.243 / 24.31 = 0.009996}} mol; n(HCl) = 0.100 mol ⇒ Mg is limiting.",
            "q = 100.0 × 4.18 × 10.8 = 4514.4 J = 4.5144 kJ.",
            "{{ΔH = -4.5144 / 0.009996 = -451.6}} ≈ **−452 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Alkyne hydrogenation bond enthalpy",
          question:
            "Calculate `ΔH` (in **kJ mol⁻¹**, include the sign) for the complete hydrogenation of ethyne, `H−C≡C−H(g) + 2H₂(g) → C₂H₆(g)`, given average bond enthalpies (`kJ mol⁻¹`): `C≡C = 839`, `C−C = 346`, `C−H = 414`, `H−H = 436`.",
          answer: { type: "number", value: -291, tolerance: 0.5, display: "−291 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 291, tolerance: 0.5 }, feedback: "Check the subtraction order: Σ(bonds broken) − Σ(bonds formed)." },
          ],
          hints: [
            "Ethyne has 1 C≡C and 2 C−H; 2H₂ has 2 H−H; ethane has 1 C−C and 6 C−H.",
            "Alternatively cancel the 2 unchanged C−H bonds: broken = C≡C + 2(H−H), formed = C−C + 4(C−H).",
          ],
          solution: [
            "Net bonds broken = 839 + 2(436) = 1711 kJ mol⁻¹.",
            "Net bonds formed = 346 + 4(414) = 2002 kJ mol⁻¹.",
            "ΔH = 1711 − 2002 = **−291 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Organic combustion bond counting",
          question:
            "Estimate `ΔH` (in **kJ mol⁻¹**, include the sign) for gaseous ethanol combustion, `C₂H₅OH(g) + 3O₂(g) → 2CO₂(g) + 3H₂O(g)`, given average bond enthalpies (`kJ mol⁻¹`): `C−C = 346`, `C−H = 414`, `C−O = 358`, `O−H = 463`, `O=O = 498`, `C=O = 804`.",
          answer: { type: "number", value: -1263, tolerance: 1, display: "−1263 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 1263, tolerance: 1 }, feedback: "Combustion is strongly exothermic: use Σ(broken) − Σ(formed)." },
          ],
          hints: [
            "Draw ethanol `CH₃−CH₂−O−H`: 1 C−C, 5 C−H, 1 C−O, 1 O−H, plus 3 O=O in oxygen.",
            "Products have 2 CO₂ (= 4 C=O bonds) and 3 H₂O (= 6 O−H bonds).",
          ],
          solution: [
            "Bonds broken = 346 + 5(414) + 358 + 463 + 3(498) = 346 + 2070 + 358 + 463 + 1494 = 4731 kJ mol⁻¹.",
            "Bonds formed = 4(804) + 6(463) = 3216 + 2778 = 5994 kJ mol⁻¹.",
            "ΔH = 4731 − 5994 = **−1263 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Explaining bond-enthalpy vs Data Booklet discrepancies",
          marks: 4,
          question:
            "The bond-enthalpy estimate for gaseous ethanol combustion is `−1263 kJ mol⁻¹`, whereas the standard enthalpy of combustion of liquid ethanol in the IB Data Booklet is `−1367 kJ mol⁻¹`. Explain **two** reasons for this discrepancy and analyse how the phase changes of ethanol and water combine to make the standard value **more exothermic**.",
          hints: [
            "State the two fundamental approximations built into Data Booklet average bond enthalpies (mean across environments + gaseous state).",
            "Compare the endothermic vaporisation of 1 mol ethanol (+39 kJ) with the exothermic condensation of 3 mol water (3 × −44 = −132 kJ)!",
          ],
          modelAnswer:
            "1. Average bond enthalpies are mean values taken across a wide range of different compounds rather than the exact bond energies in ethanol, CO₂, or H₂O.\n" +
            "2. Bond-enthalpy calculations strictly assume all reactants and products are in the gaseous state, whereas standard combustion at 298 K starts with liquid ethanol and forms liquid water.\n" +
            "3. Vaporising 1 mol of liquid ethanol to gas is endothermic (~+39 kJ mol⁻¹), whereas condensing 3 mol of gaseous water to liquid releases far more exothermic enthalpy (3 × −44 ≈ −132 kJ mol⁻¹).\n" +
            "4. Because the exothermic condensation of three moles of water greatly outweighs the endothermic vaporisation of one mole of ethanol, the net standard reaction is roughly 93–104 kJ mol⁻¹ more exothermic than the all-gas estimate.",
          markScheme: [
            { point: "Data booklet bond enthalpies are mean/average values across many molecules rather than exact for these species.", keywords: ["mean", "different compounds", "many molecules", "exact"] },
            { point: "Bond enthalpies assume all species are gaseous, ignoring liquid states at 298 K.", keywords: ["gaseous state", "all reactants and products are", "298 k", "liquid water"] },
            { point: "Condensing 3 mol H₂O(g) → H₂O(l) is exothermic while vaporising 1 mol ethanol(l) → (g) is endothermic.", keywords: ["condens", "vaporis", "vaporiz", "endothermic"] },
            { point: "Exothermic condensation of 3 mol water outweighs endothermic vaporisation of 1 mol ethanol, giving net extra heat release.", keywords: ["outweigh", "three moles", "3 mol", "net"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No creditworthy thermodynamic reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies average bond values or state differences briefly without linking phase-change signs.", indicators: ["Mentions average values OR gas vs liquid state."] },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains both approximations and quantitatively/directionally compares 3 mol water condensation against 1 mol ethanol vaporisation.", indicators: ["Distinguishes endothermic vaporisation from exothermic condensation and identifies net direction."] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Algebraic Hess's Law manipulation",
          question:
            "Given:\n\n1. `2CO(g) + O₂(g) → 2CO₂(g)`   `ΔH₁ = −566 kJ`\n2. `2H₂(g) + O₂(g) → 2H₂O(g)`   `ΔH₂ = −484 kJ`\n\nUse Hess's Law to calculate `ΔH` (in **kJ mol⁻¹**, include the sign) for the water–gas shift reaction `CO(g) + H₂O(g) → CO₂(g) + H₂(g)`.",
          answer: { type: "number", value: -41, tolerance: 0.5, display: "−41 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -82, tolerance: 0.5 }, feedback: "Don't forget to divide both equations by 2 so the coefficients match 1 mol CO and 1 mol H₂O!" },
            { spec: { type: "number", value: 41, tolerance: 0.5 }, feedback: "Check which equation needs to be reversed: H₂O(g) must move to the reactant side (reverse equation 2)." },
          ],
          hints: [
            "Keep equation (1) in the forward direction and halve it (CO → CO₂).",
            "Reverse equation (2) and halve it (H₂O → H₂ + ½O₂), then add the two halved ΔH values.",
          ],
          solution: [
            "½ × (1): `CO(g) + ½O₂(g) → CO₂(g)`   ΔH = −283 kJ mol⁻¹.",
            "−½ × (2): `H₂O(g) → H₂(g) + ½O₂(g)`   ΔH = +242 kJ mol⁻¹.",
            "Adding cancels ½O₂(g): ΔH = −283 + 242 = **−41 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Hess's Law from ΔH_f⊖",
          question:
            "Calculate `ΔH_c⊖` (in **kJ mol⁻¹**, include the sign) for propane, `C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)`, given `ΔH_f⊖` (`kJ mol⁻¹`): `C₃H₈(g) = −105`, `CO₂(g) = −394`, `H₂O(l) = −286`.",
          answer: { type: "number", value: -2221, tolerance: 1, display: "−2221 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -2431, tolerance: 1 }, feedback: "Subtracting a negative (−105) adds +105: −2326 − (−105) = −2221." },
            { spec: { type: "number", value: 2221, tolerance: 1 }, feedback: "Formation cycles use Products − Reactants, and combustion is exothermic (−)." },
          ],
          hints: [
            "Remember ΔH_f⊖[O₂(g)] = 0 kJ mol⁻¹.",
            "Evaluate [3(−394) + 4(−286)] − (−105).",
          ],
          solution: [
            "ΣΔH_f⊖(products) = 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ mol⁻¹.",
            "ΣΔH_f⊖(reactants) = −105 + 5(0) = −105 kJ mol⁻¹.",
            "ΔH_c⊖ = −2326 − (−105) = **−2221 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Hess's Law from ΔH_c⊖ for glucose",
          question:
            "Calculate `ΔH_f⊖` (in **kJ mol⁻¹**, include the sign) for glucose, `6C(s) + 6H₂(g) + 3O₂(g) → C₆H₁₂O₆(s)`, given `ΔH_c⊖` (`kJ mol⁻¹`): `C(s) = −394`, `H₂(g) = −286`, `C₆H₁₂O₆(s) = −2803`.",
          answer: { type: "number", value: -1277, tolerance: 1, display: "−1277 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 1277, tolerance: 1 }, feedback: "Combustion cycles use ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)." },
          ],
          hints: [
            "O₂(g) has ΔH_c⊖ = 0.",
            "Compute [6(−394) + 6(−286)] − (−2803).",
          ],
          solution: [
            "ΣΔH_c⊖(reactants) = 6(−394) + 6(−286) = −2364 − 1716 = −4080 kJ mol⁻¹.",
            "ΔH_f⊖ = −4080 − (−2803) = **−1277 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q13",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Specific energy of hydrogen",
          question:
            "Hydrogen gas (`H₂`, `M = 2.02 g mol⁻¹`) has `ΔH_c⊖ = −286 kJ mol⁻¹`. Calculate its **specific energy** in **kJ g⁻¹** (to 3 significant figures).",
          answer: { type: "number", value: 142, tolerance: 0.6, display: "142" },
          hints: [
            "Specific energy = |ΔH_c⊖| / M.",
            "Divide 286 by 2.02.",
          ],
          solution: [
            "{{Specific energy = 286 / 2.02 = 141.58}} ≈ **142 kJ g⁻¹** (3 s.f.).",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Complete vs incomplete combustion",
          marks: 3,
          question:
            "Compare complete and incomplete combustion of octane (`C₈H₁₈`), giving a balanced equation for complete combustion, one balanced equation for incomplete combustion producing carbon monoxide, and the key health/environmental hazards of incomplete combustion products.",
          hints: [
            "Complete combustion forms 8 CO₂ and 9 H₂O (requiring 12.5 or 25/2 O₂).",
            "Mention CO binding to haemoglobin (reducing oxygen transport) and soot particulates causing respiratory issues and global dimming.",
          ],
          modelAnswer:
            "• Complete combustion (excess oxygen): 2C₈H₁₈(l) + 25O₂(g) → 16CO₂(g) + 18H₂O(l) (or C₈H₁₈ + 12.5O₂ → 8CO₂ + 9H₂O), releasing maximum thermal energy.\n" +
            "• Incomplete combustion (limited oxygen): 2C₈H₁₈(l) + 17O₂(g) → 16CO(g) + 18H₂O(l) (or forming solid soot C(s)), releasing less energy per mole.\n" +
            "• Hazards: CO is a toxic gas that binds irreversibly to haemoglobin to form carboxyhaemoglobin, starving tissues of oxygen, while fine carbon soot particulates trigger respiratory/cardiovascular illness and atmospheric haze.",
          markScheme: [
            { point: "Balanced complete combustion equation for octane (C₈H₁₈ + 12.5O₂ → 8CO₂ + 9H₂O or doubled).", keywords: ["8co", "16co", "9h", "18h"] },
            { point: "Balanced incomplete combustion equation producing CO (e.g. 2C₈H₁₈ + 17O₂ → 16CO + 18H₂O or C₈H₁₈ + 8.5O₂ → 8CO + 9H₂O).", keywords: ["17o", "8.5o", "limited oxygen"] },
            { point: "States health/environmental impact (CO binds haemoglobin / toxic AND/OR soot causes respiratory harm / haze).", keywords: ["haemoglobin", "hemoglobin", "respiratory", "particulate"] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "hess-bond-enthalpies-fuels",
          strategy: "Extended evaluation of fuels & fuel cells",
          marks: 6,
          question:
            "Evaluate the use of **acidic PEM hydrogen fuel cells** compared with **bioethanol internal combustion engines** for powering urban public buses. Include both PEM fuel-cell electrode half-equations, energy efficiency, specific energy vs volumetric energy density, and lifecycle carbon emissions.",
          hints: [
            "Write exact acidic PEM anode (H₂ → 2H⁺ + 2e⁻) and cathode (O₂ + 4H⁺ + 4e⁻ → 2H₂O) equations.",
            "Compare direct electrochemical conversion (~50–60% efficiency) vs heat-engine Carnot limits (~25–30%).",
            "Contrast H₂'s massive specific energy / low volumetric density (requiring high-pressure tanks) with liquid bioethanol's easy storage and photosynthesis CO₂ uptake vs steam-methane reforming of grey H₂.",
          ],
          modelAnswer:
            "1. Fuel-cell chemistry: In an acidic PEM fuel cell, hydrogen is oxidised at the anode (H₂(g) → 2H⁺(aq) + 2e⁻) and oxygen is reduced at the cathode (O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)), emitting only liquid water at the tailpipe with zero urban NOₓ or particulate soot.\n" +
            "2. Efficiency: Fuel cells convert chemical energy directly to electrical work at ~50–60% efficiency, roughly double the ~25–30% efficiency of a bioethanol combustion engine constrained by waste heat.\n" +
            "3. Storage trade-off: Hydrogen has exceptional specific energy (~142 kJ g⁻¹ vs ~30 kJ g⁻¹ for ethanol) which saves fuel weight, yet its low volumetric energy density requires bulky 35–70 MPa pressurised cylinders; liquid bioethanol packs much higher volumetric energy density and uses existing refuelling pumps.\n" +
            "4. Lifecycle carbon balance: Bioethanol releases CO₂ on combustion that was recently absorbed via photosynthesis, approaching carbon neutrality, though fertiliser manufacture, distillation energy, and arable land-use competition limit sustainability.\n" +
            "5. Hydrogen upstream impact: Hydrogen is only truly zero-carbon when produced as green H₂ via renewable electrolysis; grey H₂ from steam reforming of methane still emits large amounts of CO₂.\n" +
            "6. Overall judgement: For dense cities prioritising clean air and quiet efficiency, PEM fuel-cell buses are superior provided green hydrogen supply and refuelling infrastructure exist, whereas bioethanol offers an immediate drop-in transition fuel.",
          markScheme: [
            { point: "Correct acidic PEM anode half-equation: H₂ → 2H⁺ + 2e⁻.", keywords: ["2h+", "2e-", "anode"] },
            { point: "Correct acidic PEM cathode half-equation: O₂ + 4H⁺ + 4e⁻ → 2H₂O.", keywords: ["4h+", "4e-", "cathode", "tailpipe"] },
            { point: "Fuel cells achieve higher efficiency (~50–60%) via direct electrical conversion than heat engines (~25–30%).", keywords: ["50", "direct", "waste heat", "efficiency"] },
            { point: "Contrasts H₂ high specific energy / low volumetric energy density (pressurised tanks) with liquid bioethanol's compact storage.", keywords: ["142", "pressurised", "pressurized", "volumetric", "existing"] },
            { point: "Evaluates bioethanol photosynthesis carbon uptake against land use / fertiliser / distillation costs.", keywords: ["photosynthesis", "land", "fertiliser", "fertilizer", "distillation"] },
            { point: "Distinguishes green H₂ (renewable electrolysis) from grey H₂ (steam methane reforming) with a justified conclusion.", keywords: ["electrolysis", "steam reforming", "green", "superior"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant chemical or energetic evaluation." },
            { band: "1–2", marks: [1, 2], descriptor: "Lists isolated facts (e.g. H₂ emits water) with incomplete or missing half-equations and no balanced evaluation.", indicators: ["Gives one advantage or one half-equation only."] },
            { band: "3–4", marks: [3, 4], descriptor: "Provides accurate half-equations and compares efficiency or energy density, with partial lifecycle carbon discussion.", indicators: ["Both electrode equations correct plus 2 valid comparative criteria."] },
            { band: "5–6", marks: [5, 6], descriptor: "Comprehensive, well-balanced IB evaluation integrating exact PEM electrochemistry, efficiency, specific energy vs volumetric density, green vs grey H₂, bioethanol carbon neutrality limits, and a reasoned judgement.", indicators: ["Explicitly weighs upstream H₂ production and bioethanol land/energy costs before concluding."] },
          ],
        },
      ],
    },

    // =========================================================================
    // PRACTICE PAPER P2: HL Born–Haber, Solution Cycles, Entropy & Gibbs (15 Qs)
    // =========================================================================
    {
      id: "r1-energetics-spontaneity-p2",
      title: "Practice Paper 2 · Born–Haber Cycles, Entropy & Gibbs (HL)",
      level: "HL",
      questions: [
        {
          id: "r1-energetics-spontaneity-p2-q01",
          kind: "written",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Define",
          guideRef: "born-haber-solution-hl",
          strategy: "Exact IB HL enthalpy definitions with state symbols",
          marks: 3,
          question:
            "Define each term and write a representative equation including **state symbols**: (a) lattice enthalpy (IB convention), (b) enthalpy of atomisation of chlorine, and (c) first electron affinity of chlorine.",
          hints: [
            "Remember the '1 mole' anchor in every definition!",
            "Check state symbols: `(s)` for ionic solid, `(g)` for gaseous atoms and gaseous ions.",
          ],
          modelAnswer:
            "(a) Lattice enthalpy: enthalpy change when 1 mole of a solid ionic compound is separated into its gaseous ions under standard conditions; e.g. NaCl(s) → Na⁺(g) + Cl⁻(g) (endothermic, > 0).\n" +
            "(b) Enthalpy of atomisation: enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state; ½Cl₂(g) → Cl(g).\n" +
            "(c) First electron affinity: enthalpy change when 1 mole of electrons is added to 1 mole of gaseous atoms to form 1 mole of gaseous 1− ions; Cl(g) + e⁻ → Cl⁻(g).",
          markScheme: [
            { point: "Lattice enthalpy: 1 mol solid ionic compound separated into gaseous ions + equation e.g. NaCl(s) → Na⁺(g) + Cl⁻(g).", keywords: ["gaseous ions", "separated", "nacl(s)"] },
            { point: "Enthalpy of atomisation: 1 mol gaseous atoms from element in standard state + ½Cl₂(g) → Cl(g).", keywords: ["gaseous atoms", "standard state", "½cl", "0.5cl"] },
            { point: "First electron affinity: adding 1 mol electrons to 1 mol gaseous atoms forming 1 mol gaseous 1− ions + Cl(g) + e⁻ → Cl⁻(g).", keywords: ["1− ions", "cl(g) + e", "gaseous atoms to form"] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "born-haber-solution-hl",
          strategy: "MX Born–Haber cycle",
          question:
            "Calculate the lattice enthalpy `ΔH_lat⊖` (IB endothermic dissociation convention, in **kJ mol⁻¹**, include sign) of `LiCl(s)` given (`kJ mol⁻¹`): `ΔH_f⊖(LiCl) = −409`, `ΔH_at⊖(Li) = +159`, `IE₁(Li) = +520`, `ΔH_at⊖(½Cl₂) = +121`, `EA₁(Cl) = −349`.",
          answer: { type: "number", value: 860, tolerance: 1, display: "+860 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -860, tolerance: 1 }, feedback: "Use the IB Data Booklet endothermic dissociation convention (ΔH_lat⊖ > 0)." },
            { spec: { type: "number", value: 42, tolerance: 1 }, feedback: "Check the sign of ΔH_f⊖ when rearranging: subtracting (−409) ADDS +409!" },
          ],
          hints: [
            "ΔH_f⊖ = ΔH_at(Li) + IE₁(Li) + ΔH_at(½Cl₂) + EA₁(Cl) − ΔH_lat⊖.",
            "Rearrange: ΔH_lat⊖ = (159 + 520 + 121 − 349) − (−409).",
          ],
          solution: [
            "Gaseous-ion sum = 159 + 520 + 121 − 349 = +451 kJ mol⁻¹.",
            "ΔH_lat⊖ = +451 − (−409) = **+860 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "born-haber-solution-hl",
          strategy: "MX₂ Born–Haber finding ΔH_f⊖",
          question:
            "Calculate `ΔH_f⊖` (in **kJ mol⁻¹**, include the sign) of `MgF₂(s)` using (`kJ mol⁻¹`): `ΔH_at⊖(Mg) = +147`, `IE₁(Mg) = +738`, `IE₂(Mg) = +1451`, `E(F−F) = +159`, `EA₁(F) = −328`, `ΔH_lat⊖(MgF₂) = +2961` (IB endothermic convention).",
          answer: { type: "number", value: -1122, tolerance: 1, display: "−1122 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -794, tolerance: 1 }, feedback: "You forgot to multiply EA₁(F) by 2 for the two F⁻(g) ions in MgF₂!" },
            { spec: { type: "number", value: -963, tolerance: 1 }, feedback: "Do NOT double E(F−F) — breaking 1 mol F₂ already produces 2 mol F(g) atoms!" },
          ],
          hints: [
            "Check stoichiometry: 1 mol F₂(g) → 2F(g) uses 1 × E(F−F) = +159, while 2F(g) + 2e⁻ → 2F⁻(g) uses 2 × EA₁(F) = −656.",
            "Subtract ΔH_lat⊖(+2961) to step down from gaseous ions to MgF₂(s).",
          ],
          solution: [
            "Gaseous-ion formation = 147 + 738 + 1451 + 159 + 2(−328) = 2495 − 656 = +1839 kJ mol⁻¹.",
            "ΔH_f⊖ = +1839 − 2961 = **−1122 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q04",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "born-haber-solution-hl",
          strategy: "Solving Born–Haber for 2nd electron affinity",
          question:
            "Use a Born–Haber cycle for `CaO(s)` to calculate the **second electron affinity of oxygen**, `EA₂(O)` (in **kJ mol⁻¹**, include the sign), given (`kJ mol⁻¹`): `ΔH_f⊖(CaO) = −635`, `ΔH_at⊖(Ca) = +178`, `IE₁(Ca) = +590`, `IE₂(Ca) = +1145`, `ΔH_at⊖(½O₂) = +249`, `EA₁(O) = −141`, `ΔH_lat⊖(CaO) = +3401` (IB endothermic convention).",
          answer: { type: "number", value: 745, tolerance: 1, display: "+745 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -745, tolerance: 1 }, feedback: "Second electron affinity must be ENDOTHERMIC (+) due to repulsion between O⁻ and e⁻!" },
          ],
          hints: [
            "Write −635 = 178 + 590 + 1145 + 249 − 141 + EA₂(O) − 3401.",
            "Combine all known constants first (they sum to −1380), then solve −635 = −1380 + EA₂(O).",
          ],
          solution: [
            "Sum of known steps = 178 + 590 + 1145 + 249 − 141 − 3401 = −1380 kJ mol⁻¹.",
            "−635 = −1380 + EA₂(O) ⇒ EA₂(O) = 1380 − 635 = **+745 kJ mol⁻¹** (endothermic as expected).",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "born-haber-solution-hl",
          strategy: "Coulomb scaling & covalent polarisation",
          marks: 4,
          question:
            "Explain why (a) `ΔH_lat⊖(MgO)` (`+3791 kJ mol⁻¹`) is more than four times larger than `ΔH_lat⊖(NaF)` (`+930 kJ mol⁻¹`), and (b) the experimental Born–Haber `ΔH_lat⊖` of `AgBr` (`+905 kJ mol⁻¹`) is significantly larger than the theoretical value from a purely ionic model (`+830 kJ mol⁻¹`), whereas `NaCl` matches within 1%.",
          hints: [
            "For (a), compare both ionic charge product (2×2 = 4 vs 1×1 = 1) and ionic radii (Mg²⁺ < Na⁺).",
            "For (b), explain how Ag⁺ polarises the large Br⁻ electron cloud to create covalent character.",
          ],
          modelAnswer:
            "(a) Electrostatic attraction between ions is proportional to (q₊ × q₋)/(r₊ + r₋). Mg²⁺ and O²⁻ carry double charges (product = 4) compared with Na⁺ and F⁻ (product = 1), giving roughly fourfold stronger attraction; in addition, Mg²⁺ has a smaller ionic radius than Na⁺, further shortening the inter-ionic distance and pushing the ratio above 4.\n" +
            "(b) The theoretical model assumes purely spherical, non-overlapping point-charge ions. In AgBr, the polarising Ag⁺ cation distorts the large, diffuse electron cloud of Br⁻, introducing significant covalent character and extra directional bond strength that raises the experimental ΔH_lat⊖ above the purely ionic prediction. In NaCl, Na⁺ has lower polarising power and Cl⁻ is smaller/less polarisable, so the bonding remains closely ionic.",
          markScheme: [
            { point: "Mg²⁺ and O²⁻ have 2+/2− charges (4× charge product) vs 1+/1− in NaF.", keywords: ["double", "fourfold", "product", "2+"] },
            { point: "Smaller ionic radius / shorter inter-ionic distance in MgO strengthens electrostatic attraction further.", keywords: ["smaller ionic radius", "inter-ionic", "shorter"] },
            { point: "Ag⁺ polarises / distorts the large Br⁻ electron cloud, introducing covalent character.", keywords: ["polaris", "polariz", "covalent character", "distort"] },
            { point: "Extra covalent bonding raises experimental ΔH_lat⊖ above the spherical point-charge model (unlike nearly pure ionic NaCl).", keywords: ["point-charge", "purely ionic", "bond strength", "less polaris"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid electrostatic or polarisation reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Addresses charge difference OR covalent character briefly without linking ionic radius or polarisability.", indicators: ["Mentions higher charge on MgO OR covalent character in AgBr only."] },
            { band: "3–4", marks: [3, 4], descriptor: "Fully integrates charge product, ionic radius, anion distortion/polarisability, and comparison with the purely ionic model.", indicators: ["Clearly contrasts MgO/NaF AND AgBr/NaCl using electrostatic and polarisation principles."] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "born-haber-solution-hl",
          strategy: "MX₂ enthalpy of solution",
          question:
            "Calculate `ΔH_sol⊖` (in **kJ mol⁻¹**, include the sign) for `CaCl₂(s)` given `ΔH_lat⊖(CaCl₂) = +2255 kJ mol⁻¹` (IB endothermic convention), `ΔH_hyd⊖(Ca²⁺) = −1616 kJ mol⁻¹`, and `ΔH_hyd⊖(Cl⁻) = −359 kJ mol⁻¹`.",
          answer: { type: "number", value: -79, tolerance: 1, display: "−79 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 280, tolerance: 1 }, feedback: "There are TWO Cl⁻ ions per formula unit of CaCl₂ — multiply ΔH_hyd⊖(Cl⁻) by 2!" },
          ],
          hints: [
            "Write ΔH_sol⊖ = ΔH_lat⊖(CaCl₂) + ΔH_hyd⊖(Ca²⁺) + 2 × ΔH_hyd⊖(Cl⁻).",
            "Compute +2255 − 1616 − 718.",
          ],
          solution: [
            "ΔH_sol⊖ = +2255 + (−1616) + 2(−359) = 2255 − 1616 − 718 = **−79 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "born-haber-solution-hl",
          strategy: "Rearranging solution cycle for ΔH_lat⊖",
          question:
            "Potassium bromide (`KBr`) has `ΔH_sol⊖ = +20 kJ mol⁻¹`, `ΔH_hyd⊖(K⁺) = −340 kJ mol⁻¹`, and `ΔH_hyd⊖(Br⁻) = −328 kJ mol⁻¹`. Calculate `ΔH_lat⊖(KBr)` (IB endothermic convention, in **kJ mol⁻¹**, include sign).",
          answer: { type: "number", value: 688, tolerance: 1, display: "+688 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 648, tolerance: 1 }, feedback: "Check the rearrangement: +20 = ΔH_lat − 668 ⇒ ΔH_lat = +20 + 668 = +688." },
          ],
          hints: [
            "Set +20 = ΔH_lat⊖ + (−340) + (−328).",
            "Add 668 to both sides.",
          ],
          solution: [
            "20 = ΔH_lat⊖ − 668 ⇒ ΔH_lat⊖ = 20 + 668 = **+688 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "born-haber-solution-hl",
          strategy: "Hydration enthalpy trend & entropy of solution",
          marks: 3,
          question:
            "Explain why `ΔH_hyd⊖` becomes less exothermic down Group 1 from `Li⁺` to `Cs⁺`, and explain why `NaCl(s)` dissolves spontaneously in water at 298 K even though `ΔH_sol⊖ = +7 kJ mol⁻¹`.",
          hints: [
            "All Group 1 ions carry +1 charge — what changes down the group?",
            "Link ΔG_sol⊖ = ΔH_sol⊖ − TΔS_sol⊖ to the disorder gained when solid salt separates into aqueous ions.",
          ],
          modelAnswer:
            "• Down Group 1, ionic charge remains +1 while ionic radius increases, lowering the cation's charge density and weakening the ion–dipole attraction to polar water molecules; thus less energy is released on hydration (less exothermic ΔH_hyd⊖).\n" +
            "• Dissolving crystalline NaCl into mobile hydrated Na⁺(aq) and Cl⁻(aq) ions substantially increases entropy (ΔS_sol⊖ > 0).\n" +
            "• At 298 K, the favourable TΔS_sol⊖ term exceeds +7 kJ mol⁻¹, making ΔG_sol⊖ = ΔH_sol⊖ − TΔS_sol⊖ < 0 (thermodynamically spontaneous).",
          markScheme: [
            { point: "Ionic radius increases down Group 1 (same +1 charge), decreasing charge density.", keywords: ["radius increases", "charge density"] },
            { point: "Weaker ion–dipole attraction to water releases less energy.", keywords: ["ion-dipole", "ion–dipole", "weaker"] },
            { point: "Entropy increases on dissolving (ΔS > 0) so TΔS outweighs +7 kJ mol⁻¹ and ΔG < 0.", keywords: ["tδs", "outweighs", "δg < 0", "entropy increases", "mobile"] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q09",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Computing ΔS⊖ from absolute entropies",
          question:
            "Calculate `ΔS⊖` (in **J K⁻¹ mol⁻¹**, include the sign) for `CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)` given `S⊖` (`J K⁻¹ mol⁻¹`): `CH₄(g) = 186`, `O₂(g) = 205`, `CO₂(g) = 214`, `H₂O(l) = 70`.",
          answer: { type: "number", value: -242, tolerance: 1, display: "−242 J K⁻¹ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: 242, tolerance: 1 }, feedback: "Use ΣS⊖(products) − ΣS⊖(reactants); 3 mol gas → 1 mol gas must be negative!" },
            { spec: { type: "number", value: -107, tolerance: 1 }, feedback: "Multiply both S⊖(O₂) and S⊖(H₂O) by their stoichiometric coefficient of 2." },
          ],
          hints: [
            "Compute ΣS⊖(products) = 214 + 2(70) and ΣS⊖(reactants) = 186 + 2(205).",
            "Subtract reactants from products.",
          ],
          solution: [
            "ΣS⊖(products) = 214 + 2(70) = 354 J K⁻¹ mol⁻¹.",
            "ΣS⊖(reactants) = 186 + 2(205) = 596 J K⁻¹ mol⁻¹.",
            "ΔS⊖ = 354 − 596 = **−242 J K⁻¹ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Gibbs free energy at 298 K",
          question:
            "Using `ΔH⊖ = −891 kJ mol⁻¹` and `ΔS⊖ = −242 J K⁻¹ mol⁻¹` for methane combustion, calculate `ΔG⊖` at **298 K** in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
          answer: { type: "number", value: -819, tolerance: 1.5, display: "−819 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -963, tolerance: 2 }, feedback: "Watch the double negative: −298 × (−0.242) = +72.1 kJ mol⁻¹!" },
            { spec: { type: "number", value: 71225, tolerance: 50 }, feedback: "Divide ΔS⊖ by 1000 to convert J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹." },
          ],
          hints: [
            "Convert ΔS⊖ = −0.242 kJ K⁻¹ mol⁻¹.",
            "Compute ΔG⊖ = −891 − (298 × −0.242).",
          ],
          solution: [
            "ΔS⊖ = −242 / 1000 = −0.242 kJ K⁻¹ mol⁻¹.",
            "ΔG⊖ = −891 − (298 × −0.242) = −891 + 72.1 = −818.9 ≈ **−819 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Non-standard temperature ΔG",
          question:
            "For the Contact process reaction `2SO₂(g) + O₂(g) ⇌ 2SO₃(g)`, `ΔH⊖ = −198 kJ mol⁻¹` and `ΔS⊖ = −188 J K⁻¹ mol⁻¹`. Assuming `ΔH` and `ΔS` do not vary with temperature, calculate `ΔG` at **527 °C** in **kJ mol⁻¹** (include the sign, to 1 decimal place).",
          answer: { type: "number", value: -47.6, tolerance: 0.3, display: "−47.6 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -98.9, tolerance: 0.3 }, feedback: "Convert 527 °C to Kelvin first: T = 527 + 273 = 800 K!" },
          ],
          hints: [
            "Convert temperature to Kelvin: T = 527 + 273 = 800 K.",
            "Convert ΔS = −0.188 kJ K⁻¹ mol⁻¹, then compute −198 − 800(−0.188).",
          ],
          solution: [
            "T = 527 + 273 = 800 K; ΔS = −0.188 kJ K⁻¹ mol⁻¹.",
            "ΔG = −198 − (800 × −0.188) = −198 + 150.4 = **−47.6 kJ mol⁻¹**.",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Maximum spontaneous temperature",
          question:
            "For the same Contact process reaction (`ΔH⊖ = −198 kJ mol⁻¹`, `ΔS⊖ = −188 J K⁻¹ mol⁻¹`), calculate the **maximum temperature** (in **K**, to 3 significant figures) at which the forward reaction remains thermodynamically spontaneous.",
          answer: { type: "number", value: 1050, tolerance: 6, display: "1050 K" },
          traps: [
            { spec: { type: "number", value: 1.05, tolerance: 0.05 }, feedback: "Unit mismatch! Convert −188 J K⁻¹ mol⁻¹ to −0.188 kJ K⁻¹ mol⁻¹ before dividing." },
          ],
          hints: [
            "Set ΔG = ΔH − TΔS = 0 ⇒ T = ΔH / ΔS.",
            "Compute (−198) / (−0.188).",
          ],
          solution: [
            "{{T = (-198) / (-0.188) = 1053.2}} K ≈ **1050 K** (3 s.f.).",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Hess's Law with ΔG_f⊖",
          question:
            "Calculate `ΔG⊖` at 298 K (in **kJ mol⁻¹**, include the sign) for `Fe₂O₃(s) + 3H₂(g) → 2Fe(s) + 3H₂O(g)` given `ΔG_f⊖` (`kJ mol⁻¹`): `Fe₂O₃(s) = −742`, `H₂O(g) = −229`.",
          answer: { type: "number", value: 55, tolerance: 0.5, display: "+55 kJ mol⁻¹" },
          traps: [
            { spec: { type: "number", value: -55, tolerance: 0.5 }, feedback: "Use ΣΔG_f⊖(products) − ΣΔG_f⊖(reactants): −687 − (−742) = +55." },
          ],
          hints: [
            "ΔG_f⊖ of elements H₂(g) and Fe(s) are 0 kJ mol⁻¹.",
            "Evaluate 3(−229) − (−742).",
          ],
          solution: [
            "ΔG⊖ = [2(0) + 3(−229)] − [−742 + 3(0)] = −687 + 742 = **+55 kJ mol⁻¹** (non-spontaneous at 298 K).",
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Haber process thermodynamics vs kinetics",
          marks: 4,
          question:
            "For the Haber process `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)`, `ΔH⊖ = −92.0 kJ mol⁻¹` and `ΔS⊖ = −198 J K⁻¹ mol⁻¹`. Explain: (a) why the forward reaction becomes non-spontaneous above `465 K`, (b) why negligible ammonia forms at `298 K` despite `ΔG⊖ = −33.0 kJ mol⁻¹`, and (c) the effect of an iron catalyst on both `ΔG⊖` and `E_a`.",
          hints: [
            "Show how −TΔS is positive and grows with T until it surpasses −92.0 kJ mol⁻¹ at T = 92/0.198 ≈ 465 K.",
            "Link the strong N≡N triple bond (945 kJ mol⁻¹) to high activation energy, and recall that catalysts alter kinetics only.",
          ],
          modelAnswer:
            "(a) Because ΔS⊖ is negative (4 mol gas → 2 mol gas), the −TΔS⊖ term is positive and increases linearly with temperature. Above T = ΔH⊖/ΔS⊖ = −92.0 / −0.198 = 465 K, the positive −TΔS⊖ term outweighs −92.0 kJ mol⁻¹, turning ΔG positive (non-spontaneous).\n" +
            "(b) At 298 K the synthesis is thermodynamically feasible (ΔG⊖ < 0), yet breaking the very strong N≡N triple bond imposes a very high activation energy, making the mixture kinetically stable with an extremely slow rate.\n" +
            "(c) The iron catalyst provides an alternative pathway with a lower activation energy (speeding up both forward and reverse rates), while leaving ΔH⊖, ΔS⊖, and ΔG⊖ completely unchanged.",
          markScheme: [
            { point: "Since ΔS⊖ < 0, −TΔS⊖ is positive and grows with T until exceeding |ΔH⊖| above 465 K, making ΔG > 0.", keywords: ["positive", "outweighs", "465", "δg > 0"] },
            { point: "High activation energy (strong N≡N triple bond) makes the mixture kinetically stable / very slow at 298 K.", keywords: ["activation energy", "triple bond", "kinetically stable", "slow"] },
            { point: "Catalyst lowers activation energy via an alternative pathway (increasing rate).", keywords: ["alternative pathway", "lower activation energy", "lowers activation"] },
            { point: "Catalyst has no effect on ΔG⊖ (nor ΔH⊖ or ΔS⊖).", keywords: ["unchanged", "no effect"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No creditworthy thermodynamic or kinetic explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Addresses one aspect accurately (e.g. high E_a or catalyst effect) but lacks mathematical/sign analysis of −TΔS.", indicators: ["Correctly notes kinetic stability or catalyst role without clear TΔS crossover argument."] },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains the −TΔS crossover above 465 K, N≡N kinetic stability at 298 K, and catalyst impact on E_a vs invariance of ΔG⊖.", indicators: ["Distinguishes thermodynamics from kinetics cleanly across all three parts."] },
          ],
        },
        {
          id: "r1-energetics-spontaneity-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "entropy-gibbs-spontaneity-hl",
          strategy: "Full synthesis of the 4 Gibbs regimes & ΔG vs T plots",
          marks: 6,
          question:
            "Discuss how enthalpy change (`ΔH⊖`), entropy change (`ΔS⊖`), and temperature (`T`) determine thermodynamic spontaneity across all **four sign combinations** of `ΔH⊖` and `ΔS⊖`. Explain how a linear graph of `ΔG` versus `T` reveals `ΔH⊖`, `ΔS⊖`, and the crossover temperature, and contrast thermodynamic feasibility with kinetic stability.",
          hints: [
            "Cover all four quadrants: (−,+), (+,−), (−,−), (+,+) with a brief chemical example for at least two.",
            "Map ΔG = ΔH − TΔS onto y = c + m x: y-intercept = ΔH, gradient = −ΔS, x-intercept = T* = ΔH/ΔS.",
            "Close with a clear distinction between ΔG < 0 (thermodynamics) and E_a (kinetics), e.g. diamond → graphite or H₂ + O₂.",
          ],
          modelAnswer:
            "1. Spontaneity criterion: Under constant T and P, a reaction is thermodynamically spontaneous when ΔG = ΔH − TΔS < 0, non-spontaneous when ΔG > 0, and at equilibrium when ΔG = 0.\n" +
            "2. Temperature-independent cases: When ΔH < 0 and ΔS > 0 (e.g. 2H₂O₂(l) → 2H₂O(l) + O₂(g)), both terms are negative so the reaction is spontaneous at ALL temperatures. When ΔH > 0 and ΔS < 0 (e.g. 3O₂ → 2O₃), both terms are positive so the reaction is NEVER spontaneous at any temperature.\n" +
            "3. Temperature-dependent cases: When ΔH < 0 and ΔS < 0 (e.g. Haber process), −TΔS is positive so spontaneity occurs only at LOW temperatures (T < ΔH/ΔS). When ΔH > 0 and ΔS > 0 (e.g. CaCO₃(s) → CaO(s) + CO₂(g)), −TΔS is negative so spontaneity occurs only at HIGH temperatures (T > ΔH/ΔS).\n" +
            "4. Linear graph analysis: Plotting ΔG (y-axis) against Kelvin temperature T (x-axis) yields a straight line y = c + mx (assuming constant ΔH and ΔS): the y-intercept at T = 0 K gives ΔH⊖, and the gradient equals −ΔS⊖ (so a downward slope indicates ΔS⊖ > 0).\n" +
            "5. Crossover temperature: Where the line crosses the horizontal axis (ΔG = 0) gives the equilibrium crossover temperature T* = ΔH⊖ / ΔS⊖ (with matching energy units, converting J to kJ).\n" +
            "6. Feasibility vs kinetics: Even when ΔG < 0 predicts spontaneity, a large activation energy barrier can render a reaction kinetically stable with negligible rate (such as diamond converting to graphite or H₂ + O₂ at room temperature).",
          markScheme: [
            { point: "States spontaneity condition ΔG < 0 (and ΔG = 0 at equilibrium, ΔG > 0 non-spontaneous).", keywords: ["equilibrium", "non-spontaneous", "δg < 0"] },
            { point: "Explains both temperature-independent cases: (−,+) always spontaneous; (+,−) never spontaneous.", keywords: ["all temperatures", "never spontaneous"] },
            { point: "Explains both temperature-dependent cases: (−,−) low T only; (+,+) high T only, with relevant examples.", keywords: ["low temperatures", "high temperatures", "caco"] },
            { point: "Maps linear ΔG vs T graph: y-intercept = ΔH⊖ and gradient = −ΔS⊖.", keywords: ["y-intercept", "gradient", "downward"] },
            { point: "Identifies x-intercept (ΔG = 0) as crossover temperature T* = ΔH/ΔS with matching kJ/J units.", keywords: ["horizontal axis", "matching energy", "t*"] },
            { point: "Contrasts thermodynamic feasibility (ΔG < 0) with kinetic stability (high activation energy barrier, e.g. diamond/graphite or H₂ + O₂).", keywords: ["activation energy", "diamond", "negligible rate"] },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant thermodynamic discussion." },
            { band: "1–2", marks: [1, 2], descriptor: "States ΔG < 0 or describes 1–2 sign combinations without graphical analysis or kinetic contrast.", indicators: ["Partial coverage of sign rules only."] },
            { band: "3–4", marks: [3, 4], descriptor: "Covers all four sign regimes accurately and identifies at least one graph feature (intercept or gradient) or kinetic stability.", indicators: ["All 4 quadrants right, plus partial graph/kinetics discussion."] },
            { band: "5–6", marks: [5, 6], descriptor: "Cohesive IB HL synthesis covering all four sign combinations with chemical examples, full ΔG vs T intercept/gradient/crossover-T analysis, and rigorous contrast between thermodynamic feasibility and kinetic stability.", indicators: ["Explicitly notes gradient = −ΔS (negative slope ⇒ ΔS > 0) and unit consistency."] },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "r1-energetics-spontaneity-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "enthalpy-calorimetry",
      strategy: "Calorimeter heat capacity correction",
      question:
        "**50.0 cm³** of `1.00 mol dm⁻³` HCl(aq) is mixed with **50.0 cm³** of `1.00 mol dm⁻³` NaOH(aq) inside a brass calorimeter whose own heat capacity is `C_cal = 65.0 J K⁻¹`. The temperature rises by **5.90 °C**. Given `c = 4.18 J g⁻¹ K⁻¹` and solution density `1.00 g cm⁻³`, calculate `ΔH_neut` in **kJ mol⁻¹** (include the sign, to 3 significant figures).",
      answer: { type: "number", value: -57.0, tolerance: 0.25, display: "−57.0 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: -49.3, tolerance: 0.3 }, feedback: "You included only the water heat (mcΔT) and omitted the heat absorbed by the brass calorimeter (C_cal ΔT)!" },
      ],
      hints: [
        "Total heat released warms BOTH the 100.0 g solution AND the brass calorimeter: q_total = (m c + C_cal) ΔT.",
        "Convert q_total to kJ and divide by n(H₂O) = 0.0500 mol with an exothermic negative sign.",
      ],
      solution: [
        "Total heat capacity = (100.0 × 4.18) + 65.0 = 418.0 + 65.0 = 483.0 J K⁻¹.",
        "q_total = 483.0 × 5.90 = 2849.7 J = 2.8497 kJ.",
        "n(H₂O) = 0.0500 mol ⇒ {{ΔH_neut = -2.8497 / 0.0500 = -56.99}} ≈ **−57.0 kJ mol⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "hess-bond-enthalpies-fuels",
      strategy: "Resonance stabilisation energy of benzene",
      question:
        "The hydrogenation of cyclohexene (`C₆H₁₀(l) + H₂(g) → C₆H₁₂(l)`) has `ΔH = −120 kJ mol⁻¹`, whereas the experimental complete hydrogenation of benzene (`C₆H₆(l) + 3H₂(g) → C₆H₁₂(l)`) has `ΔH = −208 kJ mol⁻¹`. Calculate the **delocalisation (resonance) stabilisation energy** of benzene (`|ΔH_predicted − ΔH_experimental|`) in **kJ mol⁻¹**.",
      answer: { type: "number", value: 152, tolerance: 0.5, display: "152 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 88, tolerance: 0.5 }, feedback: "Kekulé benzene has THREE C=C bonds, so multiply −120 by 3 before comparing with −208." },
      ],
      hints: [
        "If benzene behaved as hypothetical cyclohexa-1,3,5-triene with 3 isolated C=C bonds, what would ΔH of hydrogenation be?",
        "Find the magnitude of the difference between 3 × (−120) and −208.",
      ],
      solution: [
        "Predicted ΔH for 3 isolated C=C bonds = 3 × (−120) = −360 kJ mol⁻¹.",
        "Stabilisation energy = |−360 − (−208)| = **152 kJ mol⁻¹** (benzene is 152 kJ mol⁻¹ lower in enthalpy than the localised Kekulé model).",
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "born-haber-solution-hl",
      strategy: "M₂X₃ Born–Haber cycle stoichiometry",
      question:
        "Calculate the lattice enthalpy `ΔH_lat⊖` (IB endothermic dissociation convention, in **kJ mol⁻¹**, include sign) of aluminium oxide, `Al₂O₃(s)`, using (`kJ mol⁻¹`): `ΔH_f⊖(Al₂O₃) = −1676`, `ΔH_at⊖(Al) = +330`, `(IE₁ + IE₂ + IE₃)(Al) = +5139`, `ΔH_at⊖(½O₂) = +249`, `EA₁(O) = −141`, `EA₂(O) = +753`.",
      answer: { type: "number", value: 15197, tolerance: 10, display: "+15 197 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: 7758, tolerance: 10 }, feedback: "Check stoichiometry carefully: 1 mol Al₂O₃ contains 2 mol Al³⁺ and 3 mol O²⁻!" },
      ],
      hints: [
        "Formation equation: 2Al(s) + 3/2 O₂(g) → Al₂O₃(s) requires 2×(Al atomisation + IE sum) and 3×(O atomisation + EA₁ + EA₂).",
        "Sum gaseous ion steps = 2(330 + 5139) + 3(249 − 141 + 753), then subtract ΔH_f⊖(−1676).",
      ],
      solution: [
        "2Al(s) → 2Al³⁺(g) + 6e⁻: 2 × (330 + 5139) = +10 938 kJ mol⁻¹.",
        "3/2 O₂(g) + 6e⁻ → 3O²⁻(g): 3 × (249 − 141 + 753) = 3 × 861 = +2583 kJ mol⁻¹.",
        "Gaseous-ion sum = 10 938 + 2583 = +13 521 kJ mol⁻¹.",
        "ΔH_lat⊖ = 13 521 − (−1676) = **+15 197 kJ mol⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "born-haber-solution-hl",
      strategy: "Hess cycle for hydrated salt enthalpy",
      question:
        "Direct calorimetry of `CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)` is impossible because solid hydration occurs unevenly. Instead, dissolving anhydrous `CuSO₄(s)` in excess water gives `ΔH_sol⊖ = −66.5 kJ mol⁻¹`, while dissolving hydrated `CuSO₄·5H₂O(s)` gives `ΔH_sol⊖ = +11.7 kJ mol⁻¹`. Calculate `ΔH` (in **kJ mol⁻¹**, include sign) for `CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)`.",
      answer: { type: "number", value: -78.2, tolerance: 0.2, display: "−78.2 kJ mol⁻¹" },
      traps: [
        { spec: { type: "number", value: -54.8, tolerance: 0.2 }, feedback: "Both solids dissolve DOWN to the same CuSO₄(aq) box — subtract +11.7 rather than adding it!" },
      ],
      hints: [
        "Sketch a Hess triangle with CuSO₄(aq) at the bottom: both CuSO₄(s) + 5H₂O(l) and CuSO₄·5H₂O(s) dissolve to identical CuSO₄(aq).",
        "Follow the cycle: ΔH = ΔH_sol⊖(anhydrous) − ΔH_sol⊖(hydrated).",
      ],
      solution: [
        "Both reactants and product dissolve to the identical aqueous state CuSO₄(aq).",
        "ΔH = ΔH_sol⊖[CuSO₄(s)] − ΔH_sol⊖[CuSO₄·5H₂O(s)] = −66.5 − (+11.7) = **−78.2 kJ mol⁻¹**.",
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "entropy-gibbs-spontaneity-hl",
      strategy: "Combined Hess's Law + Gibbs crossover T",
      question:
        "For the carbothermic reduction `Fe₂O₃(s) + 3C(s) → 2Fe(s) + 3CO(g)`, standard enthalpies of formation are `ΔH_f⊖[Fe₂O₃(s)] = −824 kJ mol⁻¹` and `ΔH_f⊖[CO(g)] = −111 kJ mol⁻¹`, and `ΔS⊖ = +543 J K⁻¹ mol⁻¹`. Calculate the **minimum temperature** (in **K**, to 3 significant figures) above which this reduction becomes thermodynamically spontaneous.",
      answer: { type: "number", value: 904, tolerance: 3, display: "904 K" },
      traps: [
        { spec: { type: "number", value: 0.904, tolerance: 0.01 }, feedback: "Convert ΔS⊖ from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ (+0.543) before computing T = ΔH / ΔS." },
      ],
      hints: [
        "First find ΔH⊖ via Hess's Law: ΔH⊖ = 3(−111) − (−824).",
        "Then set ΔG = 0 ⇒ T = ΔH⊖ / (ΔS⊖ / 1000).",
      ],
      solution: [
        "ΔH⊖ = 3(−111) − (−824) = −333 + 824 = +491 kJ mol⁻¹.",
        "Convert ΔS⊖ = +0.543 kJ K⁻¹ mol⁻¹.",
        "{{T = 491 / 0.543 = 904.2}} ≈ **904 K** (3 s.f.).",
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "enthalpy-calorimetry",
      strategy: "Weak vs strong acid calorimetry design",
      marks: 4,
      question:
        "A student compares coffee-cup neutralisation of `1.00 mol dm⁻³ HCl` (`ΔH_neut = −57.3 kJ mol⁻¹`) and `1.00 mol dm⁻³ CH₃COOH` (`ΔH_neut = −55.2 kJ mol⁻¹`) using `1.00 mol dm⁻³ NaOH`. Explain (a) why ethanoic acid gives a less exothermic enthalpy of neutralisation, (b) why doubling all concentrations to `2.00 mol dm⁻³` reduces percentage uncertainty in `ΔT`, and (c) why polystyrene is preferred over a glass beaker.",
      hints: [
        "Strong acids are already 100% ionised; weak acids must absorb energy to dissociate unionised O−H bonds.",
        "Compare ΔT at 2.00 mol dm⁻³ (twice as large) against the fixed absolute thermometer uncertainty (±0.2 °C).",
        "Compare thermal conductivity and specific heat capacity of polystyrene vs glass.",
      ],
      modelAnswer:
        "(a) HCl is a strong acid and is completely ionised in water, so neutralisation is simply H⁺(aq) + OH⁻(aq) → H₂O(l). Ethanoic acid is a weak acid that is only partially dissociated, so endothermic energy (~+2.1 kJ mol⁻¹) is absorbed to break the unionised O−H bond and ionise CH₃COOH molecules, making the overall enthalpy change less exothermic.\n" +
        "(b) Doubling both concentrations to 2.00 mol dm⁻³ doubles the moles reacting in the same solution volume, doubling ΔT while the thermometer's absolute uncertainty stays constant; thus percentage uncertainty (δ(ΔT)/ΔT × 100%) is halved.\n" +
        "(c) Expanded polystyrene has very low thermal conductivity (minimising heat leakage to the room) and negligible heat capacity compared with a glass beaker, which would absorb a noticeable fraction of the released heat.",
      markScheme: [
        { point: "Weak acid CH₃COOH is only partially ionised/dissociated (unlike fully ionised HCl).", keywords: ["partially", "weak acid", "completely ionised", "completely ionized"] },
        { point: "Endothermic energy is absorbed to dissociate / break the O−H bond in CH₃COOH, lowering |ΔH|.", keywords: ["endothermic", "dissociat", "o-h", "o−h"] },
        { point: "Doubling concentration doubles ΔT while thermometer absolute uncertainty is unchanged, halving % uncertainty.", keywords: ["doubles", "halved", "percentage uncertainty", "absolute uncertainty"] },
        { point: "Polystyrene has lower thermal conductivity / better insulation AND lower heat capacity than glass.", keywords: ["conductivity", "heat capacity", "insulat"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid energetic or experimental reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "Explains one aspect (e.g. polystyrene insulation or weak-acid dissociation) without full quantitative/uncertainty justification.", indicators: ["Partial coverage of 1–2 parts."] },
        { band: "3–4", marks: [3, 4], descriptor: "Thoroughly explains endothermic weak-acid dissociation, percentage-uncertainty halving at higher ΔT, and both thermal-insulation and heat-capacity advantages of polystyrene.", indicators: ["Explicitly connects endothermic ionisation and fixed absolute thermometer uncertainty."] },
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "born-haber-solution-hl",
      strategy: "Solubility energetics & covalent amplification in silver halides",
      marks: 5,
      question:
        "Silver fluoride (`AgF`) is highly soluble in water (`ΔH_sol⊖ = −20 kJ mol⁻¹`), whereas silver iodide (`AgI`) is virtually insoluble (`ΔH_sol⊖ = +112 kJ mol⁻¹`). Analyse this trend using `ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖`, ionic radius, anion polarisability, and `ΔG_sol⊖`.",
      hints: [
        "Compare the hydration enthalpy of tiny F⁻ (−506 kJ mol⁻¹) vs huge I⁻ (−293 kJ mol⁻¹).",
        "Now ask why ΔH_lat⊖(AgI) does NOT drop as steeply as the pure ionic model predicts — covalent polarisation by Ag⁺!",
        "Tie the large positive ΔH_sol⊖ (+112 kJ mol⁻¹) into ΔG_sol⊖ = ΔH_sol⊖ − TΔS_sol⊖ > 0.",
      ],
      modelAnswer:
        "1. Solution cycle balance: ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(Ag⁺) + ΔH_hyd⊖(X⁻), where ΔH_hyd⊖(Ag⁺) is identical for both salts.\n" +
        "2. Hydration drop: Moving from small F⁻ to much larger I⁻ lowers anion charge density dramatically, weakening ion–dipole attractions to water and making ΔH_hyd⊖ far less exothermic (−506 kJ mol⁻¹ for F⁻ vs −293 kJ mol⁻¹ for I⁻).\n" +
        "3. Covalent lattice boost: In a purely ionic model, larger I⁻ would reduce ΔH_lat⊖ nearly as fast as |ΔH_hyd⊖|. However, Ag⁺ strongly polarises the large, diffuse electron cloud of I⁻, adding substantial covalent character that keeps ΔH_lat⊖(AgI) anomalously high (+889 kJ mol⁻¹).\n" +
        "4. Resulting enthalpy of solution: Because hydration releases far less energy for I⁻ while lattice enthalpy remains stubbornly high, ΔH_sol⊖ swings from exothermic (−20 kJ mol⁻¹ in AgF) to strongly endothermic (+112 kJ mol⁻¹ in AgI).\n" +
        "5. Gibbs spontaneity: For AgI, +112 kJ mol⁻¹ far exceeds TΔS_sol⊖ at 298 K, making ΔG_sol⊖ strongly positive and rendering AgI insoluble.",
      markScheme: [
        { point: "States ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(Ag⁺) + ΔH_hyd⊖(X⁻) (common Ag⁺ hydration).", keywords: ["common", "identical", "δh_hyd"] },
        { point: "Larger I⁻ has lower charge density than F⁻, giving weaker ion–dipole attraction and much less exothermic ΔH_hyd⊖.", keywords: ["charge density", "ion-dipole", "ion–dipole", "less exothermic"] },
        { point: "Ag⁺ polarises the large diffuse I⁻ electron cloud, introducing covalent character that keeps ΔH_lat⊖(AgI) high.", keywords: ["polaris", "polariz", "covalent character", "anomalously"] },
        { point: "Loss of exothermic hydration outpaces the small drop in ΔH_lat⊖, making ΔH_sol⊖(AgI) strongly endothermic.", keywords: ["strongly endothermic", "stubbornly", "outpaces"] },
        { point: "Links large positive ΔH_sol⊖ > TΔS_sol⊖ to ΔG_sol⊖ > 0 (non-spontaneous / insoluble).", keywords: ["tδs", "δg_sol", "non-spontaneous", "positive"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant lattice/hydration analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "States ΔH_sol formula or notes F⁻ is smaller than I⁻ without integrating covalent polarisation.", indicators: ["Omits covalent character or Gibbs free energy connection."] },
        { band: "3–4", marks: [3, 4], descriptor: "Explains both reduced hydration of I⁻ and covalent polarisation boosting ΔH_lat⊖(AgI), with partial ΔG connection.", indicators: ["Clearly links covalent character to AgI lattice strength."] },
        { band: "5", marks: [5, 5], descriptor: "Seamless HL analysis balancing ΔH_hyd⊖(F⁻ vs I⁻), covalent polarisation of AgI keeping ΔH_lat⊖ high, net endothermic swing, and ΔG_sol⊖ > 0.", indicators: ["All five analytical steps explicitly connected."] },
      ],
    },
    {
      id: "r1-energetics-spontaneity-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "entropy-gibbs-spontaneity-hl",
      strategy: "Metallurgical Hess + Gibbs crossover evaluation",
      marks: 6,
      question:
        "Consider extracting magnesium from `MgO(s)` using solid carbon (`2MgO(s) + 2C(s) → 2Mg(s) + 2CO(g)`), given:\n\n" +
        "• `2MgO(s) → 2Mg(s) + O₂(g)`: `ΔH⊖ = +1204 kJ mol⁻¹`, `ΔS⊖ = +216 J K⁻¹ mol⁻¹`\n" +
        "• `2C(s) + O₂(g) → 2CO(g)`: `ΔH⊖ = −222 kJ mol⁻¹`, `ΔS⊖ = +179 J K⁻¹ mol⁻¹`\n\n" +
        "Combine these reactions via Hess's Law to calculate `ΔH⊖`, `ΔS⊖`, and the theoretical minimum temperature (`T*`) for spontaneity, and evaluate why magnesium is extracted industrially by **electrolysis of molten MgCl₂** rather than carbon reduction in a blast furnace.",
      hints: [
        "Add the two equations directly so O₂(g) cancels: ΔH⊖ = +1204 − 222 = +982 kJ mol⁻¹ and ΔS⊖ = 216 + 179 = +395 J K⁻¹ mol⁻¹.",
        "Calculate T* = 982 / 0.395 ≈ 2486 K (~2213 °C) — far above the boiling point of magnesium (1363 K)!",
        "Discuss furnace energy cost, refractory limits, back-reaction on cooling (`Mg(g) + CO(g) → MgO + C`), and how electrolysis drives a non-spontaneous ΔG > 0 reaction electrically.",
      ],
      modelAnswer:
        "1. Hess combination: Adding the two equations cancels O₂(g) to yield 2MgO(s) + 2C(s) → 2Mg(s) + 2CO(g) with ΔH⊖ = +1204 + (−222) = +982 kJ mol⁻¹.\n" +
        "2. Entropy change: Entropy is also a state function, so ΔS⊖ = +216 + 179 = +395 J K⁻¹ mol⁻¹ (+0.395 kJ K⁻¹ mol⁻¹), reflecting the creation of 2 mol CO gas from solids.\n" +
        "3. Crossover temperature: Setting ΔG = ΔH − TΔS = 0 gives T* = 982 / 0.395 = 2486 K (~2213 °C, or 2490 K to 3 s.f.).\n" +
        "4. Thermodynamic feasibility: Because ΔH⊖ > 0 and ΔS⊖ > 0, carbon reduction is spontaneous ONLY above ~2490 K, whereas iron oxide reduction requires only ~900–1000 K.\n" +
        "5. Practical limitations: Sustaining ~2500 K demands immense energy and extreme refractory materials; moreover, Mg vaporises at 1363 K and rapidly re-oxidises with CO(g) back into MgO(s) + C(s) upon cooling.\n" +
        "6. Electrolytic alternative: Molten electrolysis of MgCl₂ (around 700 °C) uses electrical work to drive a non-spontaneous reduction directly without extreme furnace temperatures or CO back-reaction.",
      markScheme: [
        { point: "Calculates ΔH⊖ = +1204 − 222 = +982 kJ mol⁻¹ via Hess's Law.", keywords: ["982"] },
        { point: "Calculates ΔS⊖ = +216 + 179 = +395 J K⁻¹ mol⁻¹ (+0.395 kJ K⁻¹ mol⁻¹).", keywords: ["395", "0.395"] },
        { point: "Calculates crossover temperature T* = 982 / 0.395 ≈ 2486 K (2490 K).", keywords: ["2486", "2490", "2213"] },
        { point: "Explains high-T spontaneity regime (ΔH > 0, ΔS > 0 ⇒ feasible only above ~2490 K).", keywords: ["only above", "spontaneous only", "high-t"] },
        { point: "Identifies practical blast-furnace obstacles (extreme energy/refractory cost AND/OR re-oxidation of Mg vapour with CO on cooling).", keywords: ["refractory", "re-oxid", "vaporis", "back-reaction"] },
        { point: "Evaluates why molten electrolysis succeeds (electrical work drives ΔG > 0 reduction at much lower temperature ~700 °C).", keywords: ["electrical work", "lower temperature", "700", "non-spontaneous reduction"] },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid thermodynamic calculation or metallurgical evaluation." },
        { band: "1–2", marks: [1, 2], descriptor: "Computes ΔH⊖ or ΔS⊖ correctly but misses T* unit conversion or gives superficial industrial commentary.", indicators: ["Correctly finds +982 or +395 with incomplete crossover/evaluation."] },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly computes ΔH⊖, ΔS⊖, and T* (~2490 K) and gives one valid practical reason why carbon reduction is impractical.", indicators: ["Accurate T* calculation plus basic industrial comparison."] },
        { band: "5–6", marks: [5, 6], descriptor: "Complete quantitative Hess/Gibbs calculation (982 kJ mol⁻¹, 395 J K⁻¹ mol⁻¹, ~2490 K) paired with incisive engineering evaluation of extreme temperatures, Mg/CO back-reaction, and electrolytic feasibility.", indicators: ["Integrates thermodynamic numbers directly into the industrial evaluation."] },
      ],
    },
  ],
};
