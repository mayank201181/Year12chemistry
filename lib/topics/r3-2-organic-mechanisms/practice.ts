import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 questions: 4 balanced MCQs + 6 crisp ShortQs; 5 SL + 5 HL)
  // ===========================================================================
  quiz: [
    {
      id: "r3-2-organic-mechanisms-quiz-q01",
      kind: "mcq",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "free-radical-substitution",
      strategy: "Radical count rule: 0→2, 1→1, 2→0",
      question:
        "In the free-radical chlorination of ethane, which elementary step is classified as an **initiation** step?",
      options: [
        "Cl₂ → Cl• + Cl• (UV light)",
        "C₂H₆ + Cl• → •C₂H₅ + HCl",
        "•C₂H₅ + Cl₂ → C₂H₅Cl + Cl•",
        "•C₂H₅ + •C₂H₅ → C₄H₁₀",
      ],
      answerIndex: 0,
      hints: [
        "Count free radicals on the left and right of each equation: initiation creates radicals from a neutral molecule (0 → 2).",
      ],
      explanation:
        "Cl₂ → 2 Cl• under UV light breaks the weak Cl−Cl bond homolytically, turning 0 radicals into 2 radicals (initiation). The equations with 1 → 1 radicals are propagation, and 2 → 0 is termination.",
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q02",
      kind: "short",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "State",
      guideRef: "free-radical-substitution",
      strategy: "Homolytic vs heterolytic fission",
      question:
        "What term describes covalent bond cleavage in which each atom retains one electron from the shared pair, forming two neutral free radicals?",
      answer: {
        type: "text",
        accept: ["homolytic fission", "homolytic", "homolytic cleavage", "homolysis"],
        display: "homolytic fission",
      },
      traps: [
        {
          spec: { type: "text", accept: ["heterolytic fission", "heterolytic", "heterolytic cleavage"] },
          feedback: "Heterolytic fission gives BOTH electrons to one atom (making ions). Equal 1-and-1 splitting is homolytic fission.",
        },
      ],
      hints: [
        "Think of the Greek prefix meaning 'same' or 'equal' combined with '-lytic' (splitting).",
      ],
      solution: [
        "Equal splitting of a bonding pair (1 e⁻ to each atom) is **homolytic fission** (shown with single-headed fish-hook arrows).",
      ],
      commonError: "Confusing homolytic fission (radicals) with heterolytic fission (ions).",
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q03",
      kind: "short",
      level: "SL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "nucleophiles-electrophiles-core",
      strategy: "Nucleophile vs electrophile classification",
      question:
        "State whether the cyanide ion (`CN⁻`) acts as a **nucleophile** or an **electrophile** when it reacts with bromoethane.",
      answer: {
        type: "text",
        accept: ["nucleophile", "a nucleophile"],
        display: "nucleophile",
      },
      traps: [
        {
          spec: { type: "text", accept: ["electrophile", "an electrophile"] },
          feedback: "CN⁻ carries a negative charge and a lone pair — it is electron-rich and donates an electron pair, so it is a nucleophile.",
        },
      ],
      hints: [
        "Inspect the charge and lone pair on `CN⁻`: is it electron-rich or electron-deficient?",
        "An electron-rich species that donates an electron pair to a δ⁺ carbon is 'nucleus-loving'.",
      ],
      solution: [
        "`CN⁻` has a negative charge and an available lone pair of electrons, so it donates an electron pair to the Cδ⁺ of bromoethane — making it a **nucleophile**.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q04",
      kind: "mcq",
      level: "SL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "nucleophiles-electrophiles-core",
      strategy: "Core alkene electrophilic addition products",
      question:
        "Propene (CH₃CH=CH₂) is bubbled through bromine water in the dark. Which observation and reaction type occur?",
      options: [
        "Stays orange-brown; no reaction occurs without ultraviolet light.",
        "Rapidly turns from orange-brown to colourless; electrophilic addition.",
        "Slowly turns from colourless to orange-brown; free-radical substitution.",
        "Rapidly turns from orange to green; nucleophilic oxidation.",
      ],
      answerIndex: 1,
      hints: [
        "Propene contains an electron-rich C=C π bond.",
        "Does bromine addition to an alkene need UV light, and what colour change happens?",
      ],
      explanation:
        "Propene's π bond polarizes Br₂ and undergoes rapid electrophilic addition in the dark, instantly decolourizing orange-brown bromine water. Orange-to-green is the dichromate test for alcohols, not the bromine test.",
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q05",
      kind: "short",
      level: "SL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "nucleophiles-electrophiles-core",
      strategy: "Atom economy of addition reactions",
      question:
        "What is the percentage atom economy (as a whole number) of the electrophilic addition of HBr to ethene: C₂H₄ + HBr → C₂H₅Br?",
      answer: { type: "number", value: 100, display: "100%" },
      hints: [
        "Count how many product species appear on the right-hand side of the equation.",
        "Atom economy = (molar mass of desired product / total molar mass of reactants) × 100%.",
      ],
      solution: [
        "Because C₂H₅Br is the ONLY product formed, every reactant atom is incorporated into the desired product.",
        "Atom economy = **100%**.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Identify",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Substrate degree maps to SN1 vs SN2",
      question:
        "State whether 1-iodopropane (CH₃CH₂CH₂I) reacts with NaOH(aq) predominantly by the **SN1** or **SN2** mechanism.",
      answer: {
        type: "text",
        accept: ["SN2", "sn2", "S_N2"],
        display: "SN2",
      },
      traps: [
        {
          spec: { type: "text", accept: ["SN1", "sn1", "S_N1"] },
          feedback: "1-iodopropane is a primary (1°) halogenoalkane — its low steric hindrance favours concerted backside SN2 attack, and a 1° carbocation would be far too unstable for SN1.",
        },
      ],
      hints: [
        "Count how many carbon atoms are directly bonded to the C−I carbon (primary, secondary, or tertiary).",
      ],
      solution: [
        "1-iodopropane is a primary (1°) halogenoalkane, which reacts predominantly via the concerted bimolecular **SN2** pathway.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q07",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Predict",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "SN1 rate equation independence from nucleophile concentration",
      question:
        "Tertiary 2-bromo-2-methylpropane hydrolyses via SN1. If `[2-bromo-2-methylpropane]` is doubled and `[OH⁻]` is quadrupled, by what factor does the initial rate change?",
      options: [
        "Increases by a factor of 8",
        "Increases by a factor of 4",
        "Increases by a factor of 2",
        "Remains completely unchanged",
      ],
      answerIndex: 2,
      hints: [
        "Write the unimolecular SN1 rate equation: does `[OH⁻]` appear in it?",
        "Only species involved in the rate-determining step (Step 1) determine the rate law.",
      ],
      explanation:
        "For SN1, rate = k[(CH₃)₃CBr] (first order in halogenoalkane, zero order in OH⁻). Doubling `[(CH₃)₃CBr]` doubles the rate, while changing `[OH⁻]` has zero effect — overall factor = 2.",
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q08",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Predict",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Markovnikov major product naming",
      question:
        "Give the IUPAC name of the **major** organic product formed when propene (CH₃CH=CH₂) reacts with HCl.",
      answer: {
        type: "text",
        accept: ["2-chloropropane", "2 chloropropane"],
        display: "2-chloropropane",
      },
      traps: [
        {
          spec: { type: "text", accept: ["1-chloropropane", "1 chloropropane"] },
          feedback: "1-chloropropane is the MINOR product (formed via the less stable 1° carbocation). By Markovnikov's rule, H adds to C-1 and Cl attaches to C-2.",
        },
      ],
      hints: [
        "Apply Markovnikov's rule: H⁺ bonds to the C=C carbon that already has more H atoms.",
        "Which carbocation is more stable: secondary (at C-2) or primary (at C-1)?",
      ],
      solution: [
        "H⁺ attaches to C-1 (=CH₂) to produce the more stable 2° carbocation `CH₃−C⁺H−CH₃`.",
        "Cl⁻ then attacks C-2 to give **2-chloropropane** as the major product.",
      ],
      commonError: "Naming the minor 1-substituted isomer instead of applying Markovnikov's rule.",
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q09",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Electrophile formula in benzene nitration",
      question:
        "Write the formula (including charge) of the electrophile generated from concentrated HNO₃ and concentrated H₂SO₄ during the nitration of benzene.",
      answer: {
        type: "text",
        accept: ["NO2+", "NO₂+", "NO₂⁺", "NO2^+", "nitronium ion", "nitronium"],
        display: "NO₂⁺",
      },
      traps: [
        {
          spec: { type: "text", accept: ["NO3-", "NO₃⁻", "NO2", "NO₂"] },
          feedback: "NO₃⁻ is negatively charged and NO₂ is neutral; the true electrophile is the positively charged nitronium cation NO₂⁺.",
        },
      ],
      hints: [
        "Recall the equation: HNO₃ + H₂SO₄ → electrophile + HSO₄⁻ + H₂O.",
        "An electrophile substituting onto benzene carries a `+` charge and adds an `−NO₂` group.",
      ],
      solution: [
        "HNO₃ + H₂SO₄ → **NO₂⁺** + HSO₄⁻ + H₂O. The electrophile is the **nitronium ion (NO₂⁺)**.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-quiz-q10",
      kind: "mcq",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      guideRef: "organic-synthesis-retrosynthesis-hl",
      strategy: "Reagent matching for carboxylic acid reduction",
      question:
        "Which reagent reduces **propanoic acid** (CH₃CH₂COOH) directly to **propan-1-ol** (CH₃CH₂CH₂OH)?",
      options: [
        "NaBH₄ in aqueous methanol at room temperature",
        "Acidified K₂Cr₂O₇/H⁺ heated gently with distillation",
        "Sn and concentrated HCl under reflux, then NaOH(aq)",
        "LiAlH₄ in dry ether, followed by dilute aqueous acid H⁺(aq)",
      ],
      answerIndex: 3,
      hints: [
        "Check whether NaBH₄ is powerful enough to reduce carboxylic acids.",
        "Remember which strong hydride reducing agent requires an anhydrous ether solvent followed by acid work-up.",
      ],
      explanation:
        "Carboxylic acids are not reduced by NaBH₄; they require the strong reducing agent LiAlH₄ in dry ether followed by H⁺(aq) work-up. K₂Cr₂O₇/H⁺ is an oxidizing agent, and Sn/conc. HCl reduces nitrobenzene.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (p1: 15 Qs SL/Core; p2: 15 Qs HL Mechanisms & Synthesis)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: CORE MECHANISMS & STRUCTURED PRACTICE (15 Questions)
    // -------------------------------------------------------------------------
    {
      id: "r3-2-organic-mechanisms-p1",
      title: "Practice Paper 1: Free-Radical Substitution, Nucleophiles & Core Reactions",
      questions: [
        {
          id: "r3-2-organic-mechanisms-p1-q01",
          kind: "short",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "free-radical-substitution",
          strategy: "Stage identification by radical count",
          question:
            "Classify the following elementary equation as **initiation**, **propagation**, or **termination**:\n`•C₂H₅ + Br₂ → C₂H₅Br + Br•`",
          answer: {
            type: "text",
            accept: ["propagation", "propagation step"],
            display: "propagation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["initiation", "termination"] },
              feedback: "Count the radicals: 1 radical on the left (•C₂H₅) and 1 radical on the right (Br•). A 1 → 1 step keeps the chain going — propagation!",
            },
          ],
          hints: [
            "Count the number of species carrying an unpaired electron (•) on each side of the arrow.",
          ],
          solution: [
            "Left side has 1 radical (`•C₂H₅`); right side has 1 radical (`Br•`).",
            "A 1 → 1 radical balance identifies a **propagation** step.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q02",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Deduce",
          guideRef: "free-radical-substitution",
          strategy: "Counting dimer carbons in radical termination",
          question:
            "During the free-radical bromination of butane (C₄H₁₀) under UV light, a trace higher-molar-mass alkane forms when two butyl radicals (`•C₄H₉`) combine in a termination step. State the total number of hydrogen atoms in one molecule of this alkane.",
          answer: { type: "number", value: 18, display: "18" },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "Each butyl radical is •C₄H₉ (not C₄H₁₀), so coupling two of them gives C₈H₁₈, not C₈H₂₀.",
            },
          ],
          hints: [
            "Write the termination equation: •C₄H₉ + •C₄H₉ → ?",
            "Sum the atoms directly: 4 + 4 carbons and 9 + 9 hydrogens.",
          ],
          solution: [
            "Termination: •C₄H₉ + •C₄H₉ → C₈H₁₈ (octane).",
            "One molecule of C₈H₁₈ contains **18** hydrogen atoms.",
          ],
          commonError: "Adding hydrogens from neutral butane (10 + 10 = 20) instead of butyl radicals (9 + 9 = 18).",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q03",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Describe",
          guideRef: "free-radical-substitution",
          strategy: "Full 3-stage free-radical mechanism with correct conditions",
          marks: 4,
          question:
            "Methane reacts with chlorine to form chloromethane (CH₃Cl) and hydrogen chloride.\n\n(a) State the essential condition required to start this reaction and explain why it cleaves Cl−Cl rather than C−H. [1]\n(b) Write equations for the initiation step, both propagation steps, and one termination step that forms a hydrocarbon byproduct. [3]",
          modelAnswer:
            "(a) **Ultraviolet (UV) light** is required because the **Cl−Cl bond enthalpy (242 kJ mol⁻¹) is lower** than C−H (414 kJ mol⁻¹), allowing homolytic cleavage of Cl₂.\n(b) **Initiation**: Cl₂ → 2 Cl• (UV light).\n**Propagation**: CH₄ + Cl• → •CH₃ + HCl  and  •CH₃ + Cl₂ → CH₃Cl + Cl•.\n**Hydrocarbon termination**: •CH₃ + •CH₃ → C₂H₆ (ethane).",
          markScheme: [
            {
              point: "States UV light is required and identifies that Cl−Cl is weaker / has a lower bond enthalpy than C−H.",
              keywords: ["uv", "ultraviolet", "weaker", "lower bond enthalpy", "242"],
            },
            {
              point: "Correct initiation equation: Cl₂ → 2 Cl• (or Cl• + Cl•).",
              keywords: ["cl2 → 2 cl•", "cl2 -> 2 cl•", "cl• + cl•", "2 cl•", "2cl•"],
            },
            {
              point: "Both propagation steps correct without H•: CH₄ + Cl• → •CH₃ + HCl AND •CH₃ + Cl₂ → CH₃Cl + Cl•.",
              keywords: ["•ch3 + hcl", "ch3• + hcl", "•ch₃ + hcl", "ch₃• + hcl", "•ch3 + cl2", "•ch₃ + cl₂"],
            },
            {
              point: "Correct termination equation producing ethane: •CH₃ + •CH₃ → C₂H₆.",
              keywords: ["c2h6", "ethane", "c₂h₆"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid condition or radical equations given." },
            { band: "1–2", marks: [1, 2], descriptor: "States UV light or initiation correctly, but includes H• in propagation or omits termination." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains UV cleavage of weaker Cl−Cl bond and writes all four balanced radical equations accurately without H•." },
          ],
          hints: [
            "Compare Cl−Cl (242 kJ mol⁻¹) vs C−H (414 kJ mol⁻¹) for part (a).",
            "For propagation, remember Cl• abstracts H to form HCl + •CH₃ — NEVER form H•!",
            "Which termination collision creates a 2-carbon alkane containing only C and H?",
          ],
          commonError: "Writing CH₄ + Cl• → CH₃Cl + H• in propagation (producing an H• radical always loses the propagation mark in IB exams).",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q04",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "free-radical-substitution",
          strategy: "Thermochemical ΔH of first propagation step using bond enthalpies",
          question:
            "Using average bond enthalpies (C−H = 414 kJ mol⁻¹, H−Cl = 431 kJ mol⁻¹), calculate the enthalpy change ΔH (in kJ mol⁻¹, include the sign) for the first propagation step: `CH₄(g) + Cl•(g) → •CH₃(g) + HCl(g)`.",
          answer: { type: "number", value: -17, display: "−17 kJ mol⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 17 },
              feedback: "Check the sign: ΔH = Σ(bonds broken) − Σ(bonds formed) = 414 − 431 = −17 kJ mol⁻¹ (exothermic!).",
            },
          ],
          hints: [
            "Identify the single bond broken (C−H) and the single bond formed (H−Cl).",
            "Apply ΔH = Σ(bonds broken) − Σ(bonds formed).",
          ],
          solution: [
            "Bond broken: 1 × C−H = 414 kJ mol⁻¹.",
            "Bond formed: 1 × H−Cl = 431 kJ mol⁻¹.",
            "ΔH = 414 − 431 = **−17 kJ mol⁻¹** (exothermic, which explains why hydrogen abstraction is fast).",
          ],
          commonError: "Subtracting bonds broken from bonds formed, reversing the sign to +17 kJ mol⁻¹.",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q05",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "free-radical-substitution",
          strategy: "Minimum photon energy / max wavelength for Br−Br homolysis",
          question:
            "The Br−Br bond enthalpy is 193 kJ mol⁻¹. Calculate the maximum wavelength (in nm, to 3 significant figures) of electromagnetic radiation capable of cleaving Br₂ homolytically. (Use h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, N_A = 6.02 × 10²³ mol⁻¹).",
          answer: { type: "number", value: 620, tolerance: 5, display: "620 nm" },
          traps: [
            {
              spec: { type: "number", value: 0.62, tolerance: 0.02 },
              feedback: "Check unit conversion: 1 m = 10⁹ nm, and remember to convert 193 kJ mol⁻¹ into 193 × 10³ J mol⁻¹ before dividing by N_A.",
            },
          ],
          hints: [
            "First find the energy required to break ONE Br−Br bond in joules: E = (193 × 10³) / (6.02 × 10²³).",
            "Rearrange E = hc / λ to λ = hc / E, then convert metres to nanometres (× 10⁹).",
          ],
          solution: [
            "Energy per bond: {{E = (193 * 10^3)/(6.02 * 10^23) = 3.206 * 10^(-19)}} J.",
            "Wavelength: {{lambda = (6.63 * 10^(-34) * 3.00 * 10^8)/(3.206 * 10^(-19)) = 6.204 * 10^(-7)}} m.",
            "Convert to nm: {{6.204 * 10^(-7) * 10^9 = 620}} nm (orange visible light — explaining why Br₂ can even initiate slowly in bright sunlight!).",
          ],
          commonError: "Forgetting to convert kJ to J (giving a wavelength off by a factor of 1000) or forgetting to divide by Avogadro's constant.",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q06",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Distinguish",
          guideRef: "free-radical-substitution",
          strategy: "Chemical test differentiating saturated and unsaturated hydrocarbons",
          marks: 3,
          question:
            "Describe a chemical test (reagent, dark vs UV observations, and reaction types) to distinguish between **hexane** and **hex-1-ene**.",
          modelAnswer:
            "Add **bromine water** (or Br₂ dissolved in an organic solvent) to both liquids **in the dark**. **Hex-1-ene** immediately **decolourizes** the orange-brown bromine via **electrophilic addition** across its C=C π bond. **Hexane remains orange-brown in the dark** because it is saturated (only decolourizing slowly if exposed to **UV light** via **free-radical substitution**).",
          markScheme: [
            {
              point: "Names bromine / bromine water (Br₂) as the reagent.",
              keywords: ["bromine", "br2", "br₂"],
            },
            {
              point: "States hex-1-ene decolourizes (orange-brown to colourless) immediately in the dark via electrophilic addition.",
              keywords: ["decolouri", "decolori", "colourless", "colorless", "electrophilic addition"],
            },
            {
              point: "States hexane stays orange-brown in the dark (reacts only in UV light via free-radical substitution).",
              keywords: ["remains orange", "stays orange", "no colour change", "no color change", "free-radical substitution", "free radical substitution"],
            },
          ],
          hints: [
            "Name the standard orange-brown halogen reagent used to test for C=C unsaturation.",
            "Specify what happens to each liquid specifically in the dark, and name the mechanism for each.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q07",
          kind: "short",
          level: "SL",
          difficulty: "warmup",
          commandTerm: "Identify",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Classify species using lone-pair availability",
          question:
            "State whether ammonia (`:NH₃`) acts as a **nucleophile** or an **electrophile** when it reacts with 1-bromobutane.",
          answer: {
            type: "text",
            accept: ["nucleophile", "a nucleophile"],
            display: "nucleophile",
          },
          traps: [
            {
              spec: { type: "text", accept: ["electrophile", "an electrophile"] },
              feedback: "Ammonia has a non-bonding lone pair on nitrogen — it donates an electron pair, so it is a nucleophile (even though it is electrically neutral!).",
            },
          ],
          hints: [
            "Does a nucleophile have to be negatively charged, or is having a lone pair sufficient?",
          ],
          solution: [
            "Ammonia has a lone pair of electrons on nitrogen and donates it to the δ⁺ carbon of 1-bromobutane, so it acts as a **nucleophile**.",
          ],
          commonError: "Assuming neutral molecules like NH₃ and H₂O cannot be nucleophiles because they lack a negative charge.",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q08",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Naming halogenation product of alkenes",
          question:
            "Give the IUPAC name of the organic product formed when but-2-ene (`CH₃CH=CHCH₃`) reacts with bromine (`Br₂`) at room temperature in the dark.",
          answer: {
            type: "text",
            accept: ["2,3-dibromobutane", "2,3 dibromobutane"],
            display: "2,3-dibromobutane",
          },
          traps: [
            {
              spec: { type: "text", accept: ["2-bromobutane", "1,2-dibromobutane"] },
              feedback: "Br₂ adds ONE bromine atom to EACH carbon of the C=C bond (C-2 and C-3 of but-2-ene), giving 2,3-dibromobutane.",
            },
          ],
          hints: [
            "Locate the C=C bond in but-2-ene: it lies between carbon-2 and carbon-3.",
            "Electrophilic addition of Br₂ attaches one Br atom to each carbon of the double bond.",
          ],
          solution: [
            "The π bond between C-2 and C-3 breaks and a Br atom bonds to each of C-2 and C-3, forming **2,3-dibromobutane**.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q09",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Induced dipole & curly-arrow mechanism of Br₂ addition to ethene",
          marks: 4,
          question:
            "Explain step-by-step how non-polar bromine (`Br₂`) undergoes electrophilic addition with **ethene** (`CH₂=CH₂`) to produce 1,2-dibromoethane. Include the cause of dipole induction, curly-arrow directions, and the intermediate formed.",
          modelAnswer:
            "1. As Br₂ approaches the electron-rich **π bond** of ethene, electron repulsion induces a temporary dipole (**Brδ⁺−Brδ⁻**).\n2. A curly arrow moves from the **C=C π bond to Brδ⁺**, while a second curly arrow moves from the **Br−Br bond onto Brδ⁻** (heterolytic fission), forming a **carbocation intermediate** (`CH₂Br−C⁺H₂`) and a bromide ion (`:Br⁻`).\n3. Finally, a curly arrow from a **lone pair on `:Br⁻` points to the positively charged carbon** (`C⁺`) of the carbocation to form **1,2-dibromoethane** (`CH₂BrCH₂Br`).",
          markScheme: [
            {
              point: "Explains that the electron-rich π bond induces a dipole (Brδ⁺−Brδ⁻) in Br₂.",
              keywords: ["induced dipole", "induces a", "temporary dipole", "brδ+"],
            },
            {
              point: "Curly arrow from C=C π bond to Brδ⁺ AND heterolytic cleavage arrow from Br−Br bond to Brδ⁻.",
              keywords: ["heterolytic", "π bond to br", "pi bond to br", "br-br bond"],
            },
            {
              point: "Identifies the carbocation intermediate (CH₂Br−C⁺H₂) and bromide ion (:Br⁻).",
              keywords: ["carbocation", "br-", "br⁻", "bromide"],
            },
            {
              point: "Curly arrow from lone pair on Br⁻ to the positively charged carbocation carbon forming 1,2-dibromoethane.",
              keywords: ["lone pair", "positively charged carbon", "c+", "c⁺"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid description of electrophilic addition or curly arrows." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions induced dipole or carbocation but reverses arrow direction or omits heterolytic cleavage." },
            { band: "3–4", marks: [3, 4], descriptor: "Clearly explains induced dipole, exact electron-pair arrow origins/destinations, carbocation intermediate, and nucleophilic attack by Br⁻." },
          ],
          hints: [
            "Start by explaining why a symmetrical non-polar Br₂ molecule becomes polarized near a C=C double bond.",
            "Remember every curly arrow begins on an electron pair (π bond, σ bond, or lone pair) and ends on an atom.",
            "After the first step, what two ionic species exist and how do they combine?",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q10",
          kind: "short",
          level: "SL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Naming hydrolysis product of halogenoalkane",
          question:
            "1-chlorobutane is warmed under reflux with aqueous potassium hydroxide. Give the IUPAC name of the organic product formed.",
          answer: {
            type: "text",
            accept: ["butan-1-ol", "1-butanol", "butan 1 ol"],
            display: "butan-1-ol",
          },
          traps: [
            {
              spec: { type: "text", accept: ["but-1-ene", "1-butene", "butanal"] },
              feedback: "Aqueous KOH causes nucleophilic substitution (−Cl replaced by −OH on carbon-1), producing the alcohol butan-1-ol.",
            },
          ],
          hints: [
            "Aqueous OH⁻ acts as a nucleophile and substitutes for the halogen atom at carbon-1.",
            "Replacing −Cl with −OH on a 4-carbon chain produces a primary alcohol.",
          ],
          solution: [
            "CH₃CH₂CH₂CH₂Cl + OH⁻(aq) → CH₃CH₂CH₂CH₂OH + Cl⁻. The product is **butan-1-ol**.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q11",
          kind: "written",
          level: "SL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Structured comparison of homolytic vs heterolytic cleavage",
          marks: 4,
          question:
            "Compare and contrast **homolytic fission** and **heterolytic fission** of a covalent bond in terms of electron distribution, arrow notation, products formed, and typical organic reactions.",
          modelAnswer:
            "**Similarity**: Both processes involve breaking a covalent bond (a shared pair of electrons).\n**Electron distribution**: Homolytic breaks the pair **equally** (one electron to each atom), whereas heterolytic breaks it **unequally** (both electrons move onto the more electronegative atom).\n**Arrow notation**: Homolytic uses **single-headed (fish-hook) half-arrows**; heterolytic uses a **double-headed full curly arrow**.\n**Products & reactions**: Homolytic creates two neutral **free radicals** (typical of **free-radical substitution** of alkanes under UV light), whereas heterolytic creates a **cation and an anion** (typical of **nucleophilic substitution** and **electrophilic addition**).",
          markScheme: [
            {
              point: "Similarity: both involve breaking a shared covalent bond.",
              keywords: ["breaking a covalent", "both", "shared pair", "cleaving"],
            },
            {
              point: "Distribution contrast: equal (1 e⁻ each) vs unequal (both e⁻ to one/more electronegative atom).",
              keywords: ["equally", "one electron", "both electrons", "unequally", "electronegative"],
            },
            {
              point: "Arrow notation contrast: fish-hook/half-arrows vs full/double-headed curly arrow.",
              keywords: ["fish-hook", "half-arrow", "single-headed", "double-headed", "full curly"],
            },
            {
              point: "Products & reactions contrast: neutral free radicals (alkane substitution) vs ions/cation & anion (nucleophilic substitution / electrophilic addition).",
              keywords: ["free radicals", "cation", "anion", "ions"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid comparison or contrast." },
            { band: "1–2", marks: [1, 2], descriptor: "Correctly distinguishes electron sharing or products, but omits similarity or arrow notation." },
            { band: "3–4", marks: [3, 4], descriptor: "Addresses similarity plus all three contrasts (electron distribution, arrows, and products/reactions) accurately." },
          ],
          hints: [
            "For 'Compare and contrast', IB examiners always expect at least ONE explicit similarity as well as contrasts!",
            "Contrast electron split (1+1 vs 2+0), arrow head type, and charged ions vs neutral radicals.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q12",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "nucleophiles-electrophiles-core",
          strategy: "Lewis acid vs Lewis base in transition-metal complexes",
          question:
            "In the formation of the hexaaquacopper(II) complex ion, `Cu²⁺(aq) + 6 H₂O(l) → [Cu(H₂O)₆]²⁺(aq)`, state whether `Cu²⁺` acts as a **Lewis acid** or a **Lewis base**.",
          answer: {
            type: "text",
            accept: ["Lewis acid", "lewis acid", "a lewis acid"],
            display: "Lewis acid",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Lewis base", "lewis base"] },
              feedback: "H₂O ligands donate lone pairs (Lewis bases), while the metal cation Cu²⁺ accepts those electron pairs — making Cu²⁺ the Lewis acid.",
            },
          ],
          hints: [
            "Which species donates the lone pairs to form the coordinate covalent bonds?",
            "An electron-pair acceptor is a Lewis acid.",
          ],
          solution: [
            "Each H₂O ligand donates a lone pair of electrons (Lewis base) into vacant orbitals of `Cu²⁺`, so `Cu²⁺` is the electron-pair acceptor (**Lewis acid**).",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "SN2 kinetic rate scaling calculation",
          question:
            "Bromoethane reacts with aqueous NaOH via an SN2 mechanism with initial rate {{3.5 * 10^(-4)}} mol dm⁻³ s⁻¹. If `[CH₃CH₂Br]` is multiplied by 2.5 and `[OH⁻]` is multiplied by 4.0 at the same temperature, calculate the new initial rate in {{10^(-3)}} mol dm⁻³ s⁻¹ (give just the number to 2 significant figures, e.g., if {{2.4 * 10^(-3)}}, enter 2.4).",
          answer: { type: "number", value: 3.5, tolerance: 0.05, display: "3.5" },
          traps: [
            {
              spec: { type: "number", value: 0.875, tolerance: 0.03 },
              feedback: "That only scales by 2.5 (as if SN1). Bromoethane is primary and follows SN2 (rate = k[RX][OH⁻]), so multiply by BOTH 2.5 and 4.0!",
            },
          ],
          hints: [
            "Write the SN2 rate equation: rate = k[CH₃CH₂Br][OH⁻].",
            "Multiply the original rate by (2.5 × 4.0 = 10), then express in units of 10⁻³ mol dm⁻³ s⁻¹.",
          ],
          solution: [
            "Rate factor = {{2.5 * 4.0 = 10}}.",
            "New rate = {{10 * 3.5 * 10^(-4) = 3.5 * 10^(-3)}} mol dm⁻³ s⁻¹ → **3.5** (× 10⁻³ mol dm⁻³ s⁻¹).",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Bond enthalpy vs polarity in C−X leaving-group trend",
          marks: 3,
          question:
            "Equal amounts of 1-chlorobutane, 1-bromobutane, and 1-iodobutane are warmed with ethanol and aqueous silver nitrate. Explain the observed order of precipitate appearance using relevant bonding data.",
          modelAnswer:
            "The order from fastest to slowest precipitate is **1-iodobutane (yellow AgI) > 1-bromobutane (cream AgBr) > 1-chlorobutane (white AgCl)**. Although C−Cl is the most polar bond, the rate of nucleophilic substitution is controlled by **C−X bond enthalpy** because the C−X bond breaks in the rate-determining step. The **C−I bond is the weakest** (lowest bond enthalpy, ~228 kJ mol⁻¹ vs C−Br 285 and C−Cl 324 kJ mol⁻¹), so it requires the **lowest activation energy** to cleave.",
          markScheme: [
            {
              point: "Correct rate order: iodo > bromo > chloro (or yellow AgI fastest, white AgCl slowest).",
              keywords: ["iodobutane", "agi", "iodo > bromo", "fastest"],
            },
            {
              point: "Identifies C−X bond enthalpy / bond strength (not polarity) as the controlling factor.",
              keywords: ["bond enthalpy", "bond strength", "weakest", "weaker"],
            },
            {
              point: "Links weakest C−I bond to the lowest activation energy for bond breaking in the rate-determining step.",
              keywords: ["activation energy", "rate-determining", "cleave", "breaks"],
            },
          ],
          hints: [
            "Does bond polarity (C−Cl most polar) or bond enthalpy (C−I weakest) determine the experimental rate?",
            "Link the weakest bond directly to activation energy in the rate-determining step.",
          ],
          commonError: "Predicting that 1-chlorobutane reacts fastest because Cl is the most electronegative halogen.",
        },
        {
          id: "r3-2-organic-mechanisms-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Outline",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Distillation vs reflux apparatus & colour observation",
          marks: 3,
          question:
            "Outline how **ethanol** can be selectively oxidized to (i) **ethanal** and (ii) **ethanoic acid**, stating the reagent, apparatus/conditions, and colour observation.",
          modelAnswer:
            "Use **acidified potassium dichromate(VI)** (`K₂Cr₂O₇ / H⁺` with dilute H₂SO₄); in both cases the solution turns from **orange to green** as Cr₂O₇²⁻ is reduced to Cr³⁺. For **(i) ethanal**, warm ethanol with limiting oxidant and **distil off** the lower-boiling ethanal immediately so it cannot oxidize further. For **(ii) ethanoic acid**, heat ethanol with **excess** acidified dichromate under **reflux** so any ethanal condenses back for complete oxidation.",
          markScheme: [
            {
              point: "States acidified K₂Cr₂O₇ / H⁺ and observes orange to green colour change.",
              keywords: ["orange to green", "cr3+", "cr³⁺", "dichromate"],
            },
            {
              point: "Immediate distillation to isolate ethanal (lower boiling point / no H-bonding).",
              keywords: ["distil", "distillation"],
            },
            {
              point: "Excess oxidant and heating under reflux to obtain ethanoic acid.",
              keywords: ["reflux", "excess"],
            },
          ],
          hints: [
            "State the oxidizing agent and the chromium colour change (Cr(VI) → Cr(III)).",
            "Contrast the two heating techniques used to stop at the aldehyde versus driving all the way to the carboxylic acid.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: HL MECHANISMS, STEREOCHEMISTRY & RETROSYNTHESIS (15 Questions)
    // -------------------------------------------------------------------------
    {
      id: "r3-2-organic-mechanisms-p2",
      title: "Practice Paper 2: SN1/SN2, Markovnikov, Benzene & Retrosynthesis [HL]",
      level: "HL",
      questions: [
        {
          id: "r3-2-organic-mechanisms-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "State",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Carbocation hybridization and geometry",
          question:
            "State the **bond angle** (in degrees) around the positively charged carbon atom of the trigonal planar carbocation intermediate formed in an SN1 reaction.",
          answer: { type: "number", value: 120, display: "120°" },
          traps: [
            {
              spec: { type: "number", value: 109.5, tolerance: 0.5 },
              feedback: "109.5° is tetrahedral (sp³) for the starting halogenoalkane. After X⁻ leaves, only 3 bonding domains remain around C⁺ — trigonal planar (sp², 120°)!",
            },
          ],
          hints: [
            "Count the number of electron domains around the central carbon in `R₃C⁺` (no lone pair!).",
          ],
          solution: [
            "`R₃C⁺` has 3 bonding domains and 0 lone pairs (sp² hybridized) → trigonal planar geometry with a **120°** bond angle.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Solvent matching for SN1 vs SN2",
          question:
            "Classify **propanone** (`CH₃COCH₃`) as a **polar protic** or **polar aprotic** solvent, and state which nucleophilic substitution mechanism (**SN1** or **SN2**) it favours (answer in the format: `polar ..., SN...`).",
          answer: {
            type: "text",
            accept: [
              "polar aprotic, SN2",
              "polar aprotic SN2",
              "polar aprotic, sn2",
              "aprotic, SN2",
            ],
            display: "polar aprotic, SN2",
          },
          traps: [
            {
              spec: { type: "text", accept: ["polar protic, SN1", "polar protic, SN2", "polar aprotic, SN1"] },
              feedback: "Propanone has a polar C=O bond but NO O−H or N−H bond, so it is polar APROTIC — leaving anionic nucleophiles unsolvated to accelerate SN2.",
            },
          ],
          hints: [
            "Check whether propanone contains an O−H or N−H bond capable of donating hydrogen bonds.",
            "Does leaving an anionic nucleophile 'naked' speed up SN1 or SN2?",
          ],
          solution: [
            "Propanone has a permanent dipole (C=O) but no O−H/N−H bond → **polar aprotic**, which favours **SN2**.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q03",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Structured 6-mark comparison of SN1 and SN2",
          marks: 6,
          question:
            "Compare and contrast the **SN2** hydrolysis of 1-bromobutane and the **SN1** hydrolysis of 2-bromo-2-methylpropane with aqueous hydroxide ions. Address: (i) rate equations, (ii) number of steps and key transition state/intermediate, (iii) stereochemical outcome for a chiral analogue, and (iv) preferred solvent class.",
          modelAnswer:
            "**Similarity**: Both reactions involve **heterolytic fission** of a polar C−Br bond and substitution of Br⁻ by the OH⁻ nucleophile to produce an alcohol.\n(i) **Rate equations**: 1-bromobutane (SN2) obeys **rate = k[RX][OH⁻]** (second-order overall), whereas 2-bromo-2-methylpropane (SN1) obeys **rate = k[RX]** (first-order overall; independent of `[OH⁻]`).\n(ii) **Steps & species**: SN2 proceeds in **one concerted step** via a **5-coordinate trigonal bipyramidal transition state** `[HO···C···Br]⁻` with no intermediate; SN1 proceeds in **two steps** via a **trigonal planar (120°) tertiary carbocation intermediate** (`(CH₃)₃C⁺`) formed in the slow rate-determining first step.\n(iii) **Stereochemistry**: Backside 180° attack in SN2 causes complete **Walden inversion** of configuration, whereas equal attack on either face of SN1's planar carbocation produces an optically inactive **50:50 racemic mixture**.\n(iv) **Solvent**: SN2 is accelerated by **polar aprotic solvents** (e.g., propanone, DMSO) that leave OH⁻ unsolvated; SN1 is accelerated by **polar protic solvents** (e.g., water, ethanol) that stabilize the carbocation and departing Br⁻ via ion–dipole and hydrogen-bonding interactions.",
          markScheme: [
            {
              point: "Similarity: both involve heterolytic C−Br cleavage / nucleophilic substitution of Br⁻ by OH⁻ to form an alcohol.",
              keywords: ["heterolytic", "alcohol", "similarity", "both"],
            },
            {
              point: "Rate laws: SN2 is rate = k[RX][OH⁻] (2nd order) vs SN1 is rate = k[RX] (1st order / zero order in OH⁻).",
              keywords: ["second-order", "second order", "first-order", "first order", "k[rx][oh", "independent of"],
            },
            {
              point: "SN2 is 1 concerted step through a 5-coordinate transition state with no intermediate.",
              keywords: ["concerted", "transition state", "5-coordinate", "five-coordinate"],
            },
            {
              point: "SN1 is 2 steps with slow C−Br cleavage forming a trigonal planar carbocation intermediate.",
              keywords: ["planar", "carbocation", "two steps", "intermediate"],
            },
            {
              point: "Stereochemistry: SN2 gives Walden inversion (backside attack) vs SN1 gives a racemic (50:50) mixture.",
              keywords: ["inversion", "walden", "racemic", "50:50"],
            },
            {
              point: "Solvent: polar aprotic favours SN2 (unsolvated Nu⁻) vs polar protic favours SN1 (stabilizes ions/carbocation).",
              keywords: ["aprotic", "protic"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid mechanistic comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies 1–2 isolated features (e.g., rate laws or step counts) without clear contrast or explanation." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly contrasts rate laws, steps/species, and at least one of stereochemistry or solvent." },
            { band: "5–6", marks: [5, 6], descriptor: "Thorough, accurate comparison addressing similarity, rate laws, TS vs planar carbocation, Walden inversion vs racemic mixture, and aprotic vs protic solvents." },
          ],
          hints: [
            "Remember 'Compare and contrast' requires at least one explicit similarity as well as contrasts across all four requested dimensions.",
            "Distinguish clearly between a transition state (SN2 peak, dotted partial bonds) and an intermediate (SN1 planar carbocation in an energy well).",
            "Explain WHY polar aprotic helps SN2 and WHY polar protic helps SN1.",
          ],
          commonError: "Calling the SN2 5-coordinate species an 'intermediate' instead of a transition state, or swapping polar protic and polar aprotic solvents.",
        },
        {
          id: "r3-2-organic-mechanisms-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Predict",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Markovnikov addition to branched alkene",
          question:
            "Give the IUPAC name of the **major** product formed when 2-methylbut-1-ene (`CH₂=C(CH₃)CH₂CH₃`) reacts with HBr.",
          answer: {
            type: "text",
            accept: ["2-bromo-2-methylbutane", "2 bromo 2 methylbutane"],
            display: "2-bromo-2-methylbutane",
          },
          traps: [
            {
              spec: { type: "text", accept: ["1-bromo-2-methylbutane", "1 bromo 2 methylbutane"] },
              feedback: "Adding H⁺ to C-2 gives a 1° carbocation (minor). Adding H⁺ to C-1 (=CH₂) gives a much more stable 3° carbocation at C-2, yielding 2-bromo-2-methylbutane.",
            },
          ],
          hints: [
            "Compare the number of H atoms on C-1 (2 H atoms) vs C-2 (0 H atoms).",
            "Which carbon forms a tertiary (3°) carbocation when the other carbon is protonated?",
          ],
          solution: [
            "H⁺ adds to C-1 (`=CH₂`) to generate the tertiary carbocation `CH₃−C⁺(CH₃)−CH₂CH₃`.",
            "Br⁻ attacks C-2 to form **2-bromo-2-methylbutane**.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q05",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Inductive-effect explanation of Markovnikov's rule",
          marks: 4,
          question:
            "When **but-1-ene** (`CH₃CH₂CH=CH₂`) reacts with hydrogen iodide (`HI`), 2-iodobutane is formed in much greater yield than 1-iodobutane. Explain this regioselectivity using the reaction mechanism and carbocation stability.",
          modelAnswer:
            "In Step 1 (electrophilic attack), the π electrons of but-1-ene attack `Hδ⁺` of polar `Hδ⁺−Iδ⁻`, cleaving H−I heterolytically to form a carbocation intermediate and `I⁻`. Adding H⁺ to **C-1** generates a **secondary (2°) carbocation** (`CH₃CH₂C⁺HCH₃`), whereas adding H⁺ to C-2 generates a **primary (1°) carbocation** (`CH₃CH₂CH₂C⁺H₂`). Because alkyl groups exert a **positive inductive effect (+I)**, pushing electron density toward the positively charged carbon and dispersing its charge, the **2° carbocation (two alkyl groups) is more stable** than the 1° carbocation (one alkyl group). Therefore the 2° pathway has a **lower activation energy** and forms faster, so `I⁻` attacks C-2 to give 2-iodobutane as the major product.",
          markScheme: [
            {
              point: "Describes π bond attacking Hδ⁺ of HI (heterolytic cleavage) forming two alternative carbocations.",
              keywords: ["heterolytic", "π electrons", "pi electrons", "hδ+", "protonation"],
            },
            {
              point: "Identifies the secondary (2°) carbocation at C-2 vs the primary (1°) carbocation at C-1.",
              keywords: ["secondary", "2°", "primary", "1°"],
            },
            {
              point: "Explains greater stability of 2° carbocation via electron-donating / positive inductive (+I) effect of alkyl groups dispersing positive charge.",
              keywords: ["inductive", "+i", "electron-donating", "dispers"],
            },
            {
              point: "Links more stable carbocation to lower activation energy / faster formation followed by I⁻ attack at C-2.",
              keywords: ["activation energy", "faster", "attacks c-2", "lower energy"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Only restates the product without electronic reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Quotes Markovnikov's rule ('H goes to C with more Hs') or names 2° carbocation without explaining the inductive effect." },
            { band: "3–4", marks: [3, 4], descriptor: "Accurately compares 2° vs 1° carbocations using the +I electron-donating inductive effect, lower activation energy, and I⁻ capture." },
          ],
          hints: [
            "Simply stating 'H adds to the carbon with more H atoms' earns at most 1 mark — IB HL examiners require the electronic reason!",
            "Name both competing carbocation classes (2° vs 1°) and explain HOW alkyl groups stabilize positive charge.",
            "Connect carbocation stability to activation energy and reaction rate.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "State",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Reaction temperature for mononitration of benzene",
          question:
            "State the standard reaction temperature (in °C) maintained during the laboratory mononitration of benzene with concentrated HNO₃ and concentrated H₂SO₄ to minimize dinitration.",
          answer: { type: "number", value: 50, tolerance: 5, display: "50 °C" },
          hints: [
            "Too cold and nitration is too slow; above 55–60 °C, 1,3-dinitrobenzene starts forming.",
            "Recall the standard water-bath temperature taught in IB HL benzene nitration (a neat multiple of 10 °C).",
          ],
          solution: [
            "Benzene nitration is kept at **50 °C** (50–55 °C) to ensure a clean yield of mononitrobenzene.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Describe",
          guideRef: "sn1-sn2-markovnikov-hl",
          strategy: "Complete IB Paper 2 benzene nitration mechanism",
          marks: 5,
          question:
            "Describe the mechanism for the nitration of benzene (`C₆H₆`) to nitrobenzene (`C₆H₅NO₂`). Include: (a) the equation generating the electrophile and the acid–base role of HNO₃, (b) Step 1 curly-arrow attack and structure of the intermediate, (c) Step 2 restoration of aromaticity and catalyst regeneration.",
          modelAnswer:
            "(a) **Electrophile generation**: `HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O` (or `HNO₃ + 2 H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2 HSO₄⁻`). Concentrated H₂SO₄ is the stronger acid and protonates **HNO₃**, which acts as a **Brønsted–Lowry base**.\n(b) **Step 1 (slow, RDS)**: A curly arrow moves from the **delocalized π ring of benzene to the nitrogen atom of NO₂⁺**, creating a positively charged **arenium ion (carbocation) intermediate**. Its delocalized partial horseshoe spans **five carbons** with the open side facing the tetrahedral sp³ carbon bonded to both H and NO₂, and a `+` charge inside.\n(c) **Step 2 (fast)**: A curly arrow moves from the **C−H σ bond back into the ring**, expelling **H⁺** to **restore the delocalized aromatic π system** (nitrobenzene). Finally, **HSO₄⁻** accepts H⁺ to **regenerate the H₂SO₄ catalyst**.",
          markScheme: [
            {
              point: "Balanced equation forming NO₂⁺: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O (or 2 H₂SO₄ form).",
              keywords: ["no2+", "no₂⁺", "hso4-", "hso₄⁻"],
            },
            {
              point: "States HNO₃ acts as a Brønsted–Lowry base (accepts a proton from stronger acid H₂SO₄).",
              keywords: ["base", "protonates hno", "accepts a proton"],
            },
            {
              point: "Step 1: curly arrow from delocalized benzene π ring to NO₂⁺ forming the arenium/carbocation intermediate.",
              keywords: ["arenium", "carbocation", "ring to"],
            },
            {
              point: "Correct description of horseshoe spanning 5 carbons open toward the C(H)(NO₂) carbon with + inside.",
              keywords: ["horseshoe", "five carbons", "5 carbons", "open"],
            },
            {
              point: "Step 2: curly arrow from C−H bond back into ring expelling H⁺ to restore aromaticity and regenerate H₂SO₄ via HSO₄⁻.",
              keywords: ["c-h", "restore", "regenerate", "aromatic"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No correct electrophile or aromatic mechanism details." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies NO₂⁺ or general substitution, but omits electrophile equation, horseshoe structure, or arrow directions." },
            { band: "3–4", marks: [3, 4], descriptor: "Gives electrophile equation and mostly accurate 2-step mechanism with one minor omission (e.g., HNO₃ base role or H₂SO₄ regeneration)." },
            { band: "5", marks: [5, 5], descriptor: "Complete, exam-perfect mechanism: balanced NO₂⁺ equation, HNO₃ as base, π-ring attack, exact 5-carbon horseshoe arenium ion, C−H return arrow, and H₂SO₄ regeneration." },
          ],
          hints: [
            "Always start benzene nitration answers with the electrophile-generation equation!",
            "Specify which acid acts as the Brønsted–Lowry base when HNO₃ meets conc. H₂SO₄.",
            "In Step 2, remember the arrow starts on the C−H bond and goes INTO the ring — never draw an arrow from H⁺!",
          ],
          commonError: "Drawing the curly arrow from NO₂⁺ toward the benzene ring (wrong direction!) or drawing a closed circle instead of an open 5-carbon horseshoe in the arenium ion.",
        },
        {
          id: "r3-2-organic-mechanisms-p2-q08",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Identify",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Matching reducing agent to carbonyl functional group",
          question:
            "Give the formula of the milder hydride reducing agent used in aqueous ethanol to reduce **propanone** (`CH₃COCH₃`) to **propan-2-ol** (`CH₃CH(OH)CH₃`).",
          answer: {
            type: "text",
            accept: ["NaBH4", "NaBH₄", "sodium borohydride", "sodium tetrahydridoborate"],
            display: "NaBH₄",
          },
          traps: [
            {
              spec: { type: "text", accept: ["LiAlH4", "LiAlH₄"] },
              feedback: "LiAlH₄ is the STRONGER reagent and reacts violently with water/ethanol (must use dry ether). The milder reagent safe in aqueous ethanol is NaBH₄.",
            },
          ],
          hints: [
            "Compare the two IB hydride reagents: one reacts violently with water and requires dry ether, while the milder one works safely in aqueous ethanol.",
            "Which boron-based hydride reagent reduces aldehydes and ketones smoothly?",
          ],
          solution: [
            "**NaBH₄** (sodium borohydride / sodium tetrahydridoborate) reduces aldehydes and ketones smoothly in aqueous ethanol.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Deduce",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Identifying the intermediate salt in nitrobenzene reduction",
          question:
            "When nitrobenzene (`C₆H₅NO₂`) is refluxed with tin (`Sn`) and concentrated hydrochloric acid, before any NaOH(aq) is added, write the formula (including charge) of the organic cation present in the acidic reaction mixture.",
          answer: {
            type: "text",
            accept: ["C6H5NH3+", "C₆H₅NH₃+", "C₆H₅NH₃⁺", "C6H5NH3^+", "phenylammonium ion", "phenylammonium"],
            display: "C₆H₅NH₃⁺",
          },
          traps: [
            {
              spec: { type: "text", accept: ["C6H5NH2", "C₆H₅NH₂", "phenylamine"] },
              feedback: "In concentrated HCl, basic phenylamine is immediately protonated to the phenylammonium cation C₆H₅NH₃⁺ — that is why Stage 2 NaOH(aq) is mandatory!",
            },
          ],
          hints: [
            "Phenylamine (`C₆H₅NH₂`) is a weak Brønsted–Lowry base with a lone pair on nitrogen.",
            "What positively charged ammonium ion forms when `C₆H₅NH₂` accepts an H⁺ ion in concentrated HCl?",
          ],
          solution: [
            "In strongly acidic HCl, phenylamine accepts H⁺ to form the **phenylammonium ion (`C₆H₅NH₃⁺`)**.",
          ],
          commonError: "Writing neutral C₆H₅NH₂ as the direct product of refluxing with Sn and conc. HCl before adding alkali.",
        },
        {
          id: "r3-2-organic-mechanisms-p2-q10",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Design",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "2-step synthesis of propanoic acid from 1-bromopropane",
          marks: 4,
          question:
            "Design a two-step synthesis of **propanoic acid** (`CH₃CH₂COOH`) starting from **1-bromopropane** (`CH₃CH₂CH₂Br`). State the intermediate formed, exact reagents, conditions, and reaction type for each step.",
          modelAnswer:
            "**Step 1 (Nucleophilic substitution / SN2)**: Warm 1-bromopropane under **reflux** with **aqueous NaOH (or KOH)** to produce the intermediate **propan-1-ol** (`CH₃CH₂CH₂OH`).\n**Step 2 (Complete oxidation)**: Heat **propan-1-ol** under **reflux** with **excess acidified K₂Cr₂O₇ / H⁺** (dilute H₂SO₄) to oxidize it completely to propanoic acid (colour changes from orange to green).",
          markScheme: [
            {
              point: "Step 1 reagent & condition: warm aqueous NaOH (or KOH) under reflux.",
              keywords: ["naoh", "koh", "aqueous", "reflux"],
            },
            {
              point: "Correct intermediate identified: propan-1-ol (CH₃CH₂CH₂OH), via nucleophilic substitution.",
              keywords: ["propan-1-ol", "1-propanol", "nucleophilic substitution", "sn2"],
            },
            {
              point: "Step 2 reagent: excess acidified K₂Cr₂O₇ / H⁺ (or H₂SO₄).",
              keywords: ["k2cr2o7", "k₂cr₂o₇", "dichromate", "acidified"],
            },
            {
              point: "Step 2 condition & type: heat under reflux (oxidation) to prevent stopping at propanal.",
              keywords: ["oxidation", "oxidize", "oxidise", "excess"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid synthetic pathway." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies propan-1-ol intermediate but omits key reagents or reflux conditions." },
            { band: "3–4", marks: [3, 4], descriptor: "Specifies both steps cleanly with propan-1-ol intermediate, exact reagents, reflux conditions, and reaction types." },
          ],
          hints: [
            "Work backwards: what primary alcohol oxidizes completely to propanoic acid?",
            "How do you convert 1-bromopropane into that primary alcohol in one step?",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q11",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Deduce",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Counting steps in an ester synthesis from a single alkene",
          question:
            "Starting solely from **ethene** (`CH₂=CH₂`) and inorganic reagents, a chemist synthesizes the ester **ethyl ethanoate** (`CH₃COOCH₂CH₃`). State the **minimum number of distinct reaction steps** required.",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "You need 3 steps: (1) hydrate ethene → ethanol, (2) oxidize half the ethanol → ethanoic acid, (3) esterify ethanoic acid + remaining ethanol → ethyl ethanoate.",
            },
          ],
          hints: [
            "Break ethyl ethanoate retrosynthetically into ethanol + ethanoic acid.",
            "Count the steps: ethene → ethanol (1), ethanol → ethanoic acid (2), ethanol + ethanoic acid → ester (3).",
          ],
          solution: [
            "Step 1: Ethene + H₂O(g) (H₃PO₄, 300 °C, 60 atm) → ethanol.",
            "Step 2: Half of ethanol + excess K₂Cr₂O₇/H⁺ (reflux) → ethanoic acid.",
            "Step 3: Ethanol + ethanoic acid (conc. H₂SO₄, reflux) → ethyl ethanoate.",
            "Total = **3** steps.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q12",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Design",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "3-step retrosynthesis from benzene to N-phenylethanamide / phenylamine",
          marks: 4,
          question:
            "Outline a two-step synthesis of **phenylamine** (`C₆H₅NH₂`) from **benzene** (`C₆H₆`). State the intermediate, all reagents, reaction conditions, and explain why the final step requires two distinct stages.",
          modelAnswer:
            "**Step 1 (Electrophilic aromatic substitution / Nitration)**: React benzene with **concentrated HNO₃ and concentrated H₂SO₄ at 50 °C** to form **nitrobenzene** (`C₆H₅NO₂`).\n**Step 2 (Reduction — two stages)**: Stage 2a: heat nitrobenzene under **reflux with tin (`Sn`) and concentrated HCl**; because phenylamine is a weak base, strongly acidic HCl protonates it to the **phenylammonium ion (`C₆H₅NH₃⁺`)**. Stage 2b: add **aqueous NaOH** to **deprotonate** `C₆H₅NH₃⁺` and liberate free phenylamine.",
          markScheme: [
            {
              point: "Step 1 reagents & condition: conc. HNO₃ + conc. H₂SO₄ at 50 °C.",
              keywords: ["hno3", "hno₃", "h2so4", "h₂so₄", "50"],
            },
            {
              point: "Identifies nitrobenzene (C₆H₅NO₂) as the intermediate.",
              keywords: ["nitrobenzene", "c6h5no2", "c₆h₅no₂"],
            },
            {
              point: "Step 2a: Sn + conc. HCl under reflux; Step 2b: add NaOH(aq).",
              keywords: ["sn", "tin", "conc. hcl", "concentrated hcl", "naoh"],
            },
            {
              point: "Explains that acidic HCl protonates basic phenylamine to phenylammonium ion (C₆H₅NH₃⁺), so NaOH(aq) is required to deprotonate/neutralize it.",
              keywords: ["phenylammonium", "c6h5nh3+", "c₆h₅nh₃⁺", "deprotonat", "protonat"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid aromatic pathway." },
            { band: "1–2", marks: [1, 2], descriptor: "Names nitrobenzene or Sn/HCl but misses temperature (50 °C) or the NaOH(aq) stage." },
            { band: "3–4", marks: [3, 4], descriptor: "Complete reagents, 50 °C, nitrobenzene intermediate, Sn/conc. HCl reflux, NaOH(aq), and acid–base explanation of C₆H₅NH₃⁺." },
          ],
          hints: [
            "What functional group must be introduced onto benzene first via electrophilic substitution?",
            "Remember the 50 °C temperature cap for mononitration.",
            "Think about what happens to a basic amine sitting in concentrated hydrochloric acid!",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Predict",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Chemoselective reduction of keto-acid with NaBH₄",
          question:
            "4-oxopentanoic acid (`CH₃COCH₂CH₂COOH`) is treated with **NaBH₄** in aqueous ethanol. State the IUPAC name of the organic product (a hydroxy-substituted carboxylic acid).",
          answer: {
            type: "text",
            accept: ["4-hydroxypentanoic acid", "4 hydroxypentanoic acid"],
            display: "4-hydroxypentanoic acid",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pentane-1,4-diol", "1,4-pentanediol"] },
              feedback: "NaBH₄ is too mild to reduce the carboxylic acid group! Only the ketone at C-4 is reduced to −OH, giving 4-hydroxypentanoic acid.",
            },
          ],
          hints: [
            "Remember NaBH₄ reduces aldehydes and ketones ONLY, leaving −COOH completely intact.",
            "Number from the carboxylic acid carbon (C-1): what substituent sits at C-4 after the ketone is reduced?",
          ],
          solution: [
            "NaBH₄ selectively reduces the C-4 ketone (`−CO−`) to a secondary alcohol (`−CH(OH)−`) while leaving C-1 `−COOH` untouched → **4-hydroxypentanoic acid**.",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Design",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "3-step positional isomer switch: propan-1-ol to propanone",
          marks: 4,
          question:
            "Use retrosynthesis to design a clean 3-step pathway converting **propan-1-ol** into **propanone**. Show the retrosynthetic chain (`⇒`) and state exact reagents, conditions, and intermediates for all three forward steps.",
          modelAnswer:
            "**Retrosynthesis**: propanone ⇒ **propan-2-ol** ⇒ **propene** ⇒ propan-1-ol.\n**Step 1 (Dehydration)**: Heat propan-1-ol with **concentrated H₂SO₄** (or conc. H₃PO₄, ~170 °C) to form **propene** (`CH₃CH=CH₂`).\n**Step 2 (Markovnikov Hydration)**: React propene with **steam (`H₂O(g)`) over an H₃PO₄ catalyst at 300 °C and 60 atm** (or conc. H₂SO₄ then warm H₂O) to yield **propan-2-ol** (`CH₃CH(OH)CH₃`) as the major product via the 2° carbocation.\n**Step 3 (Oxidation)**: Heat propan-2-ol under **reflux with acidified K₂Cr₂O₇ / H⁺** to produce propanone.",
          markScheme: [
            {
              point: "Correct retrosynthetic / intermediate chain: propene and propan-2-ol.",
              keywords: ["propene", "propan-2-ol", "2-propanol"],
            },
            {
              point: "Step 1 dehydration: conc. H₂SO₄ (or conc. H₃PO₄ / Al₂O₃) with heat to give propene.",
              keywords: ["dehydration", "conc. h2so4", "concentrated h2so4", "conc. h₂so₄", "concentrated h₂so₄", "h3po4"],
            },
            {
              point: "Step 2 Markovnikov hydration: H₂O(g) / steam + H₃PO₄ (300 °C, 60 atm) [or HBr then NaOH(aq)] giving propan-2-ol via 2° carbocation.",
              keywords: ["markovnikov", "steam", "h2o(g)", "h₂o(g)", "2° carbocation", "secondary carbocation"],
            },
            {
              point: "Step 3 oxidation: acidified K₂Cr₂O₇ / H⁺ heated under reflux giving propanone.",
              keywords: ["k2cr2o7", "k₂cr₂o₇", "dichromate", "reflux"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "Attempts direct oxidation of propan-1-ol to propanone (chemically impossible)." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies propene or propan-2-ol but omits reagents/conditions or Markovnikov justification." },
            { band: "3–4", marks: [3, 4], descriptor: "Clear 3-step retrosynthesis and forward route through propene and propan-2-ol with exact reagents and conditions." },
          ],
          hints: [
            "Propan-1-ol cannot oxidize directly to propanone — you must relocate the oxygen from C-1 to C-2.",
            "Walk backwards: propanone comes from propan-2-ol; propan-2-ol comes from Markovnikov hydration of propene.",
            "How do you turn propan-1-ol into propene?",
          ],
        },
        {
          id: "r3-2-organic-mechanisms-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Evaluate",
          guideRef: "organic-synthesis-retrosynthesis-hl",
          strategy: "Comparing two competing synthetic routes (yield, selectivity, atom economy)",
          marks: 4,
          question:
            "A chemist compares two routes to synthesize **2-bromopropane**:\n- **Route A**: Propane + Br₂ under UV light.\n- **Route B**: Propene + HBr at room temperature.\n\nEvaluate both routes in terms of mechanism, selectivity/side products, and atom economy, justifying which route is superior.",
          modelAnswer:
            "**Route A (Free-radical substitution)** is **unselective**: UV homolysis generates a mixture of **positional isomers** (1-bromopropane and 2-bromopropane), **poly-brominated** byproducts (dibromo-/tribromopropanes), trace dimer hexane, and waste **HBr** gas, resulting in poor yield and low atom economy.\n**Route B (Electrophilic addition)** proceeds via the more stable **secondary carbocation** (**Markovnikov's rule**), producing 2-bromopropane selectively as the **major product** in one clean step with **100% atom economy** (zero stoichiometric byproducts) and mild room-temperature conditions.\nTherefore **Route B is strongly superior** for laboratory and industrial synthesis.",
          markScheme: [
            {
              point: "Identifies Route A as free-radical substitution producing unselective mixtures (1- and 2-isomers and/or poly-substitution).",
              keywords: ["free-radical", "free radical", "poly", "mixture", "1-bromopropane", "unselective"],
            },
            {
              point: "Notes Route A loses HBr as waste (lower atom economy).",
              keywords: ["waste", "lower atom economy", "byproduct"],
            },
            {
              point: "Identifies Route B as electrophilic addition giving 2-bromopropane selectively via Markovnikov / 2° carbocation.",
              keywords: ["electrophilic addition", "markovnikov", "secondary carbocation", "2° carbocation"],
            },
            {
              point: "Justifies Route B as superior due to 100% atom economy (single product) and higher selectivity/milder conditions.",
              keywords: ["100%", "superior", "better", "single product"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid evaluation of either route." },
            { band: "1–2", marks: [1, 2], descriptor: "Correctly selects Route B with one basic reason (e.g., fewer byproducts) without mechanism or atom economy." },
            { band: "3–4", marks: [3, 4], descriptor: "Evaluates both mechanisms (FRS vs electrophilic addition), regioselectivity (Markovnikov vs isomer/poly-bromo mixtures), and atom economy (100% vs HBr waste) to justify Route B." },
          ],
          hints: [
            "Name the mechanism of Route A and Route B explicitly.",
            "Compare product purity (positional isomers + multi-substitution in A vs Markovnikov selectivity in B) and atom economy.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 IB HL/SL Stretch Problems — all difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "r3-2-organic-mechanisms-ch-q01",
      kind: "short",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "free-radical-substitution",
      strategy: "Isomer counting on a branched alkane under free-radical chlorination",
      question:
        "How many distinct **structural isomers** of monochloro-2-methylbutane (`C₅H₁₁Cl`) are possible when **2-methylbutane**, `(CH₃)₂CHCH₂CH₃`, undergoes free-radical monochlorination with Cl₂ under UV light?",
      answer: { type: "number", value: 4, display: "4" },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "The two methyl groups attached to C-2 of 2-methylbutane are chemically identical by symmetry — substituting either gives 1-chloro-2-methylbutane!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Check C-4 (the ethyl CH₃ end) separately from the two methyls on C-2 — C-4 gives 1-chloro-3-methylbutane!",
        },
      ],
      hints: [
        "Draw the carbon skeleton of 2-methylbutane: `(CH₃)₂−CH−CH₂−CH₃`.",
        "Check symmetry: the two CH₃ groups bonded to C-2 are equivalent, while C-2 (CH), C-3 (CH₂), and C-4 (CH₃) are each unique.",
        "List every distinct IUPAC monochloro isomer and count them.",
      ],
      solution: [
        "1. Substitute on either CH₃ attached to C-2 → **1-chloro-2-methylbutane**.",
        "2. Substitute on C-2 (CH) → **2-chloro-2-methylbutane**.",
        "3. Substitute on C-3 (CH₂) → **2-chloro-3-methylbutane**.",
        "4. Substitute on C-4 (CH₃) → **1-chloro-3-methylbutane**.",
        "Total = **4** distinct structural isomers.",
      ],
      commonError: "Double-counting the two equivalent methyl groups on C-2 (giving 5 instead of 4).",
    },
    {
      id: "r3-2-organic-mechanisms-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Deduce order & calculate SN2 rate constant k with correct units",
      question:
        "An unknown primary halogenoalkane `R−Br` reacts with `OH⁻` via SN2. When `[R−Br] = 0.040 mol dm⁻³` and `[OH⁻] = 0.050 mol dm⁻³`, the initial rate is {{6.4 * 10^(-5)}} mol dm⁻³ s⁻¹. Calculate the numerical value of the rate constant `k` (in `dm³ mol⁻¹ s⁻¹`, to 2 significant figures).",
      answer: { type: "number", value: 0.032, tolerance: 0.001, display: "0.032 dm³ mol⁻¹ s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.0016, tolerance: 0.0001 },
          feedback: "That divides only by [R−Br] (SN1 formula). Because this is SN2, rate = k[R−Br][OH⁻], so divide by BOTH concentrations!",
        },
      ],
      hints: [
        "Write the SN2 rate equation: rate = k[R−Br][OH⁻].",
        "Rearrange for k: k = rate / ([R−Br][OH⁻]).",
        "Compute `0.040 × 0.050 = 0.0020`, then divide `6.4 × 10⁻⁵` by `2.0 × 10⁻³`.",
      ],
      solution: [
        "For SN2: `rate = k[R−Br][OH⁻]`.",
        "{{k = (6.4 * 10^(-5))/(0.040 * 0.050) = (6.4 * 10^(-5))/(2.0 * 10^(-3)) = 0.032}} dm³ mol⁻¹ s⁻¹.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q03",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Experimental design using polarimetry & solvent shift for a 2° chiral substrate",
      marks: 5,
      question:
        "Optically pure `(R)-2-bromobutane` (a secondary halogenoalkane) is hydrolysed under two sets of conditions:\n- **Trial 1**: Concentrated NaOH in **propanone** (polar aprotic).\n- **Trial 2**: Boiling **water/ethanol** (polar protic, no added NaOH).\n\nPredict and explain the dominant mechanism, rate dependence on `[OH⁻]`, and polarimeter optical-activity result for each trial.",
      modelAnswer:
        "**Trial 1 (conc. NaOH in propanone)** strongly favours **SN2**: high concentration of the strong anionic nucleophile `OH⁻` is left **unsolvated** (no hydrogen-bond cage) in polar aprotic propanone, accelerating backside attack. The rate depends directly on **`[OH⁻]`** (`rate = k[RX][OH⁻]`). Complete **Walden inversion** yields optically active **`(S)-butan-2-ol`** rotating plane-polarized light in the opposite direction.\n**Trial 2 (water/ethanol, neutral H₂O nucleophile)** favours **SN1**: `H₂O` is a weak neutral nucleophile, while the **polar protic** solvent stabilizes the developing secondary carbocation and departing `Br⁻` via hydrogen bonding and ion–dipole forces. The rate is **independent of nucleophile concentration** (`rate = k[RX]`). Attack on both faces of the **trigonal planar carbocation** yields a **racemic (50:50) mixture** with **zero net optical rotation** (optically inactive).",
      markScheme: [
        {
          point: "Trial 1 favours SN2 because OH⁻ is a strong nucleophile left unsolvated in polar aprotic propanone.",
          keywords: ["sn2", "unsolvated", "strong nucleophile", "aprotic"],
        },
        {
          point: "Trial 1 rate law depends on [OH⁻] (rate = k[RX][OH⁻]) and produces inverted optically active (S)-butan-2-ol.",
          keywords: ["inversion", "walden", "optically active", "(s)-butan-2-ol", "opposite"],
        },
        {
          point: "Trial 2 favours SN1 because H₂O is a weak nucleophile and polar protic solvent stabilizes carbocation & Br⁻.",
          keywords: ["sn1", "stabilizes", "weak", "hydrogen bond"],
        },
        {
          point: "Trial 2 rate is independent of nucleophile concentration (rate = k[RX]).",
          keywords: ["independent", "k[rx]", "first order", "first-order"],
        },
        {
          point: "Trial 2 forms a planar carbocation attacked equally from both sides → racemic mixture / optically inactive (zero rotation).",
          keywords: ["planar", "racemic", "optically inactive", "zero"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No correct prediction of mechanisms or optical activity." },
        { band: "1–2", marks: [1, 2], descriptor: "Correctly assigns SN2 to Trial 1 and SN1 to Trial 2 with limited justification." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains solvent/nucleophile effects and predicts inversion vs racemization, missing one kinetic or geometric link." },
        { band: "5", marks: [5, 5], descriptor: "Integrates solvent solvation, nucleophile strength, rate equations, planar carbocation vs backside attack, and polarimeter readings cleanly." },
      ],
      hints: [
        "Secondary halogenoalkanes sit on the borderline — external conditions (nucleophile strength + solvent polarity) tip the balance!",
        "Compare strong unsolvated OH⁻ (Trial 1) against weak neutral H₂O in a hydrogen-bonding solvent (Trial 2).",
        "Translate Walden inversion and 50:50 racemization into what a polarimeter actually measures.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q04",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Analyse",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Comparing enthalpy of hydrogenation to explain benzene's resistance to addition",
      marks: 4,
      question:
        "The enthalpy of hydrogenation of cyclohexene (`C₆H₁₀ + H₂ → C₆H₁₂`) is `−120 kJ mol⁻¹`, whereas the experimental enthalpy of hydrogenation of benzene (`C₆H₆ + 3 H₂ → C₆H₁₂`) is `−208 kJ mol⁻¹`.\n\n(a) Calculate the resonance (delocalization) stabilization energy of benzene. [2]\n(b) Use this value to explain why benzene reacts with `NO₂⁺` via electrophilic **substitution** rather than electrophilic **addition**. [2]",
      modelAnswer:
        "(a) Theoretical hydrogenation enthalpy for Kekulé cyclohexa-1,3,5-triene (3 localized C=C bonds) = `3 × (−120) = −360 kJ mol⁻¹`. Because real benzene releases only `208 kJ mol⁻¹`, benzene lies lower in energy by `360 − 208 =` **152 kJ mol⁻¹** (resonance stabilization energy).\n(b) Electrophilic **addition** across the ring would permanently destroy the delocalized 6-π-electron system and forfeit that **152 kJ mol⁻¹ of stability**, making addition thermodynamically unfavourable. Instead, the arenium ion loses **H⁺** in Step 2 to **restore aromatic delocalization**, making electrophilic **substitution** strongly preferred.",
      markScheme: [
        {
          point: "Computes theoretical value for 3 localized double bonds: 3 × (−120) = −360 kJ mol⁻¹.",
          keywords: ["-360", "360"],
        },
        {
          point: "Subtracts experimental value to obtain 152 kJ mol⁻¹ stabilization energy.",
          keywords: ["152"],
        },
        {
          point: "Explains addition would permanently break the delocalized π ring and lose this stabilization energy.",
          keywords: ["destroy", "break", "forfeit", "lose", "delocalized"],
        },
        {
          point: "Explains losing H⁺ from the arenium intermediate restores aromaticity / delocalization.",
          keywords: ["restore", "loses h+", "loses h⁺", "arenium", "aromatic"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid calculation or thermodynamic explanation." },
        { band: "1–2", marks: [1, 2], descriptor: "Calculates 152 kJ mol⁻¹ OR explains preservation of aromaticity qualitatively, but not both." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately calculates −360 and 152 kJ mol⁻¹ and quantitatively links loss/restoration of delocalization energy to substitution over addition." },
      ],
      hints: [
        "Multiply the cyclohexene value by 3 to predict what hypothetical cyclohexa-1,3,5-triene would release.",
        "Find the gap between −360 kJ mol⁻¹ and −208 kJ mol⁻¹.",
        "Connect that energy bonus to what happens after NO₂⁺ attaches to the ring.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q05",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Predict",
      guideRef: "sn1-sn2-markovnikov-hl",
      strategy: "Applying Markovnikov regioselectivity to a cyclic alkene",
      question:
        "1-methylcyclohexene reacts with hydrogen chloride (`HCl`) at room temperature. Give the IUPAC name of the **major** organic product.",
      answer: {
        type: "text",
        accept: ["1-chloro-1-methylcyclohexane", "1 chloro 1 methylcyclohexane"],
        display: "1-chloro-1-methylcyclohexane",
      },
      traps: [
        {
          spec: { type: "text", accept: ["1-chloro-2-methylcyclohexane", "2-chloro-1-methylcyclohexane"] },
          feedback: "C-1 of 1-methylcyclohexene is bonded to a methyl group and has 0 H atoms, while C-2 has 1 H atom. Adding H⁺ to C-2 creates a 3° carbocation at C-1, so Cl⁻ attacks C-1!",
        },
      ],
      hints: [
        "Count hydrogens on C-1 (bonded to CH₃: 0 H atoms) and C-2 (CH: 1 H atom) of the ring double bond.",
        "Protonating C-2 places the `+` charge on C-1 — a tertiary (3°) carbocation!",
        "Alphabetize the substituents (`chloro` before `methyl`), both located on carbon-1.",
      ],
      solution: [
        "H⁺ adds to C-2 (which bears 1 H) to form the tertiary carbocation at C-1.",
        "Cl⁻ attacks C-1, yielding **1-chloro-1-methylcyclohexane**.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      guideRef: "organic-synthesis-retrosynthesis-hl",
      strategy: "4-step retrosynthesis converting a carboxylic acid into a secondary alcohol",
      marks: 5,
      question:
        "Design a **4-step synthesis** to convert **propanoic acid** (`CH₃CH₂COOH`) into **propan-2-ol** (`CH₃CH(OH)CH₃`). Show your retrosynthetic plan (`⇒`), all three intermediates, and exact reagents and conditions for every step.",
      modelAnswer:
        "**Retrosynthesis**: propan-2-ol ⇒ **propene** ⇒ **propan-1-ol** ⇒ propanoic acid (3 steps! Or via 2-bromopropane for 4 steps).\n**Clean 3-step or 4-step forward route**:\n- **Step 1 (Reduction)**: Reduce propanoic acid with **LiAlH₄ in dry ether**, followed by dilute aqueous acid **H⁺(aq)** → **propan-1-ol** (`CH₃CH₂CH₂OH`). (NaBH₄ will not work!).\n- **Step 2 (Dehydration)**: Heat propan-1-ol with **concentrated H₂SO₄** (~170 °C) → **propene** (`CH₃CH=CH₂`).\n- **Step 3 (Markovnikov Addition)**: Add **HBr** at room temperature → **2-bromopropane** (`CH₃CHBrCH₃`, major product via 2° carbocation).\n- **Step 4 (Nucleophilic substitution)**: Warm 2-bromopropane under **reflux with NaOH(aq)** → **propan-2-ol**. *(Note: Steps 3–4 may also be combined into direct Markovnikov hydration with steam/H₃PO₄ at 300 °C, 60 atm!)*",
      markScheme: [
        {
          point: "Step 1 uses LiAlH₄ in dry ether followed by H⁺(aq) (NOT NaBH₄) to yield propan-1-ol.",
          keywords: ["lialh4", "lialh₄", "dry ether", "propan-1-ol"],
        },
        {
          point: "Step 2 dehydrates propan-1-ol with hot conc. H₂SO₄ (or conc. H₃PO₄) to form propene.",
          keywords: ["propene", "dehydration", "h2so4", "h₂so₄", "h3po4"],
        },
        {
          point: "Step 3 applies Markovnikov electrophilic addition (HBr → 2-bromopropane OR steam/H₃PO₄ directly to propan-2-ol).",
          keywords: ["markovnikov", "2-bromopropane", "hbr", "steam"],
        },
        {
          point: "Step 4 hydrolyses 2-bromopropane with warm NaOH(aq) under reflux (or completes hydration to propan-2-ol).",
          keywords: ["naoh", "reflux", "nucleophilic substitution", "hydration"],
        },
        {
          point: "Mentions 2° carbocation stability or retrosynthetic logic guiding regioselectivity to C-2.",
          keywords: ["retrosynthesis", "carbocation", "2°", "secondary"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No feasible sequence or uses NaBH₄ to reduce propanoic acid with no isomer switch." },
        { band: "1–2", marks: [1, 2], descriptor: "Reduces propanoic acid to propan-1-ol correctly but fails to move the −OH group to C-2." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct overall intermediate chain (propan-1-ol → propene → [2-bromopropane] → propan-2-ol) with one missing condition (e.g., dry ether or H⁺ work-up)." },
        { band: "5", marks: [5, 5], descriptor: "Flawless retrosynthesis and forward route with LiAlH₄/dry ether/H⁺(aq), dehydration to propene, Markovnikov addition (via 2° carbocation), and hydrolysis/hydration." },
      ],
      hints: [
        "Step 1 must reduce a carboxylic acid — which hydride reagent is mandatory, and what solvent/work-up must you write?",
        "Once you have propan-1-ol, how do you switch a functional group cleanly from carbon-1 to carbon-2?",
        "Can you reach propan-2-ol from propene via HBr + NaOH(aq) (4 steps total) or via direct hydration (3 steps)?",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Design",
      guideRef: "organic-synthesis-retrosynthesis-hl",
      strategy: "Convergent ester retrosynthesis from two simple starting materials",
      marks: 5,
      question:
        "Design a multi-step synthesis of **1-methylethyl ethanoate** (isopropyl ethanoate, `CH₃COOCH(CH₃)₂`) starting from **ethene** and **propene** plus inorganic reagents. Clearly identify the two alcohol/acid fragments from retrosynthesis and give full reagents and conditions for every step.",
      modelAnswer:
        "**Retrosynthesis**: `CH₃COOCH(CH₃)₂` ⇒ **ethanoic acid** (`CH₃COOH`, from ethene) + **propan-2-ol** (`CH₃CH(OH)CH₃`, from propene).\n- **Branch A (Ethene → Ethanoic acid)**:\n  - Step 1: Hydrate ethene with **steam (`H₂O(g)`), H₃PO₄ catalyst, 300 °C, 60 atm** → **ethanol** (`CH₃CH₂OH`).\n  - Step 2: Oxidize ethanol with **excess acidified K₂Cr₂O₇ / H⁺ heated under reflux** → **ethanoic acid** (`CH₃COOH`).\n- **Branch B (Propene → Propan-2-ol)**:\n  - Step 3: Hydrate propene with **steam (`H₂O(g)`), H₃PO₄ catalyst, 300 °C, 60 atm** (Markovnikov major product via 2° carbocation) → **propan-2-ol**.\n- **Final Coupling (Esterification)**:\n  - Step 4: Heat **ethanoic acid + propan-2-ol** under **reflux with concentrated H₂SO₄ catalyst** → 1-methylethyl ethanoate + H₂O.",
      markScheme: [
        {
          point: "Retrosynthetic cleavage into ethanoic acid (2C) and propan-2-ol (3C).",
          keywords: ["ethanoic acid", "propan-2-ol", "2-propanol"],
        },
        {
          point: "Ethene → ethanol via steam (H₂O(g)), H₃PO₄, 300 °C, 60 atm (or HBr then NaOH(aq)).",
          keywords: ["ethanol", "h3po4", "h₃po₄", "steam"],
        },
        {
          point: "Ethanol → ethanoic acid via excess acidified K₂Cr₂O₇ / H⁺ under reflux.",
          keywords: ["k2cr2o7", "k₂cr₂o₇", "dichromate", "reflux"],
        },
        {
          point: "Propene → propan-2-ol via Markovnikov hydration (steam/H₃PO₄) or HBr + NaOH(aq).",
          keywords: ["markovnikov", "2° carbocation", "secondary carbocation", "hydrate propene"],
        },
        {
          point: "Final esterification: ethanoic acid + propan-2-ol with conc. H₂SO₄ catalyst heated under reflux.",
          keywords: ["esterification", "conc. h2so4", "concentrated h2so4", "conc. h₂so₄", "concentrated h₂so₄"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Misidentifies the ester fragments or provides no valid steps." },
        { band: "1–2", marks: [1, 2], descriptor: "Correctly splits ester into ethanoic acid + propan-2-ol but omits reagents/conditions in multiple steps." },
        { band: "3–4", marks: [3, 4], descriptor: "Constructs both branches and esterification accurately, missing one specific condition (e.g., catalyst or reflux)." },
        { band: "5", marks: [5, 5], descriptor: "Complete convergent synthesis with retrosynthetic split, hydration/Markovnikov selectivity, reflux oxidation, and conc. H₂SO₄ esterification." },
      ],
      hints: [
        "Split the ester at its C−O single bond next to C=O: the acyl half (`CH₃CO−`) has 2 carbons; the alkoxy half (`−OCH(CH₃)₂`) has 3 carbons branched at C-2.",
        "Build the 2-carbon carboxylic acid from ethene (2 steps) and the 3-carbon secondary alcohol from propene (1 Markovnikov step).",
        "Join them in the final step using an acid-catalysed condensation under reflux.",
      ],
    },
    {
      id: "r3-2-organic-mechanisms-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      guideRef: "free-radical-substitution",
      strategy: "Connecting bond enthalpy thermochemistry to radical chain feasibility (Cl₂ vs I₂)",
      marks: 4,
      question:
        "Free-radical chlorination of methane (`CH₄ + Cl₂ → CH₃Cl + HCl`) proceeds rapidly in UV light, whereas free-radical iodination (`CH₄ + I₂ → CH₃I + HI`) does not occur spontaneously even though the I−I bond (151 kJ mol⁻¹) breaks more easily than Cl−Cl (242 kJ mol⁻¹).\n\nUsing average bond enthalpies (C−H = 414, H−Cl = 431, H−I = 298 kJ mol⁻¹), calculate ΔH for the **first propagation step** of iodination and explain why the chain fails to propagate.",
      modelAnswer:
        "First propagation step for iodination: `CH₄ + I• → •CH₃ + HI`.\n**Bond broken**: C−H = `414 kJ mol⁻¹`; **Bond formed**: H−I = `298 kJ mol⁻¹`.\n**ΔH = 414 − 298 = +116 kJ mol⁻¹** (strongly **endothermic**, compared with `414 − 431 = −17 kJ mol⁻¹` exothermic for chlorination).\nBecause the activation energy must be at least as large as ΔH (`E_a ≥ +116 kJ mol⁻¹`), very few collisions possess sufficient energy to abstract H from methane. Thus `I•` radicals simply recombine (`2 I• → I₂`) in **termination** instead of sustaining the propagation chain.",
      markScheme: [
        {
          point: "Writes first propagation step for iodination: CH₄ + I• → •CH₃ + HI.",
          keywords: ["•ch3 + hi", "ch3• + hi", "hi"],
        },
        {
          point: "Calculates ΔH = 414 − 298 = +116 kJ mol⁻¹ (strongly endothermic).",
          keywords: ["116", "+116", "endothermic"],
        },
        {
          point: "Contrasts with chlorination (ΔH = −17 kJ mol⁻¹, exothermic) or links large +ΔH to a very high activation energy (E_a ≥ 116 kJ mol⁻¹).",
          keywords: ["activation energy", "-17", "−17", "exothermic"],
        },
        {
          point: "Concludes that I• radicals fail to abstract H and instead recombine / terminate back to I₂.",
          keywords: ["recombine", "terminat", "too high", "very few collisions"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "Incorrect bond enthalpy math and no kinetic/thermodynamic reasoning." },
        { band: "1–2", marks: [1, 2], descriptor: "Calculates +116 kJ mol⁻¹ correctly, or qualitatively notes H−I is weak without quantitative calculation." },
        { band: "3–4", marks: [3, 4], descriptor: "Accurately calculates +116 kJ mol⁻¹ for CH₄ + I• → •CH₃ + HI, links to huge minimum E_a vs exothermic chlorination, and explains termination back to I₂." },
      ],
      hints: [
        "Even though initiation (`I₂ → 2 I•`) is super easy, a chain reaction lives or dies by its propagation steps!",
        "Compute ΔH = (C−H broken) − (H−I formed) for `CH₄ + I• → •CH₃ + HI`.",
        "Remember that for an endothermic elementary step, activation energy `E_a` MUST be greater than or equal to `+ΔH`.",
      ],
    },
  ],
};
