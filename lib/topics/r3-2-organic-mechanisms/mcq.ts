import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — SL CORE MECHANISMS (R3.3 & R3.4 Core)
  // ===========================================================================
  {
    id: "r3-2-organic-mechanisms-m1",
    title: "MCQ Paper 1: Free-Radical Substitution & Core Mechanisms [SL]",
    level: "SL",
    questions: [
      {
        id: "r3-2-organic-mechanisms-m1-q01",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Explain",
        guideRef: "free-radical-substitution",
        strategy: "Bond polarity and bond strength in alkanes",
        question:
          "Why are alkanes generally unreactive toward aqueous acids, alkalis, and nucleophiles at room temperature?",
        options: [
          "They contain delocalized π electrons that repel incoming polar reagents.",
          "Their C−H bonds are ionic and dissolve only in non-polar hydrocarbon solvents.",
          "Their C−C and C−H σ bonds are strong and essentially non-polar with no π bonds.",
          "Their carbon atoms have incomplete octets and cannot accept additional electrons.",
        ],
        answerIndex: 2,
        hints: [
          "Check the electronegativity difference between carbon (2.6) and hydrogen (2.2) and the bond enthalpies of C−C and C−H.",
          "Without a polar δ⁺ carbon or an exposed π electron cloud, ionic reagents have no point of attack.",
        ],
        explanation:
          "Alkanes contain only strong σ bonds (C−C ≈ 346 kJ mol⁻¹, C−H ≈ 414 kJ mol⁻¹) with negligible bond polarity and no π electron cloud, so nucleophiles and electrophiles cannot attack them. Delocalized π electrons describe benzene rather than alkanes, and alkane carbons already have full octets.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q02",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "free-radical-substitution",
        strategy: "Homolytic vs heterolytic cleavage definitions",
        question:
          "Which statement correctly describes homolytic fission of a covalent Cl−Cl bond under ultraviolet light?",
        options: [
          "Each chlorine atom receives one shared electron, forming two neutral Cl• free radicals.",
          "One chlorine atom receives both shared electrons, forming a Cl⁺ cation and a Cl⁻ anion.",
          "Both shared electrons are ejected completely, leaving two positively charged Cl⁺ ions.",
          "One chlorine atom loses a core electron, forming a negatively charged radical ion Cl₂⁻.",
        ],
        answerIndex: 0,
        hints: [
          "Recall the Greek root 'homo' (same): both atoms leave with the exact same share of the bonding pair.",
        ],
        explanation:
          "Homolytic fission splits the bonding pair evenly (1 electron to each atom, drawn with fish-hook half-arrows), creating two electrically neutral Cl• radicals. Unequal splitting of both electrons onto one atom is heterolytic fission.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q03",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "free-radical-substitution",
        strategy: "Compare bond enthalpies in initiation",
        question:
          "In the photochemical chlorination of methane (CH₄ + Cl₂ → CH₃Cl + HCl), why does UV light cleave the Cl−Cl bond rather than a C−H bond in the initiation step?",
        options: [
          "The Cl−Cl bond is more polar than the C−H bond, so photons interact with its dipole.",
          "Methane molecules are transparent because carbon atoms cannot absorb any UV photons.",
          "Chlorine atoms are heavier, so their bonds always vibrate faster than C−H bonds.",
          "The Cl−Cl bond enthalpy (242 kJ mol⁻¹) is much lower than the C−H bond enthalpy (414 kJ mol⁻¹).",
        ],
        answerIndex: 3,
        hints: [
          "Compare the average bond enthalpies of Cl−Cl and C−H.",
          "Initiation occurs at the weakest covalent bond in the reaction mixture.",
        ],
        explanation:
          "The Cl−Cl bond (242 kJ mol⁻¹) is significantly weaker than the C−H bond (414 kJ mol⁻¹), so lower-energy UV photons easily supply enough energy for homolytic cleavage of Cl₂. Cl−Cl is completely non-polar, ruling out dipole interaction.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q04",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "free-radical-substitution",
        strategy: "Propagation steps never form H•",
        question:
          "Which pair of equations represents the two propagation steps in the free-radical bromination of ethane (C₂H₆) to bromoethane (C₂H₅Br)?",
        options: [
          "C₂H₆ + Br• → C₂H₅Br + H•   and   H• + Br₂ → HBr + Br•",
          "C₂H₆ + Br• → •C₂H₅ + HBr   and   •C₂H₅ + Br₂ → C₂H₅Br + Br•",
          "Br₂ → 2 Br•   and   •C₂H₅ + Br• → C₂H₅Br",
          "C₂H₆ + Br₂ → •C₂H₅ + HBr + Br•   and   •C₂H₅ + Br• → C₂H₅Br",
        ],
        answerIndex: 1,
        hints: [
          "In every propagation step, exactly one radical reacts on the left and one radical is produced on the right (1 → 1).",
          "Check whether H• is ever formed in alkane halogenation — remember hydrogen abstraction makes HBr + an alkyl radical.",
        ],
        explanation:
          "Br• first abstracts a hydrogen atom from ethane to produce •C₂H₅ + HBr (avoiding formation of the high-energy H• radical); •C₂H₅ then reacts with Br₂ to yield C₂H₅Br and regenerate Br•. Equations containing Br₂ → 2Br• or •C₂H₅ + Br• → C₂H₅Br are initiation and termination steps.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q05",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "free-radical-substitution",
        strategy: "Trace alkane dimer proves alkyl radical termination",
        question:
          "Analysis of the product mixture from the UV chlorination of ethane (C₂H₆) reveals a small trace of butane (C₄H₁₀). Which elementary step accounts for the formation of butane?",
        options: [
          "Termination step: •C₂H₅ + •C₂H₅ → C₄H₁₀",
          "Propagation step: C₂H₆ + •C₂H₅ → C₄H₁₀ + H•",
          "Initiation step: 2 C₂H₆ → C₄H₁₀ + H₂",
          "Nucleophilic substitution: C₂H₅Cl + C₂H₆ → C₄H₁₀ + HCl",
        ],
        answerIndex: 0,
        hints: [
          "Count the carbon atoms: 2 + 2 = 4 carbons.",
          "Which stage of free-radical substitution joins two radicals into a single non-radical molecule (2 → 0)?",
        ],
        explanation:
          "Two ethyl radicals (•C₂H₅) colliding and sharing their unpaired electrons form butane (C₄H₁₀) in a termination step (2 radicals → 0 radicals). Observing trace butane is classic experimental evidence that ethyl radicals are intermediates in the chain.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q06",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "free-radical-substitution",
        strategy: "Control mono- vs poly-substitution using reactant excess",
        question:
          "How should the mole ratio of methane to chlorine be adjusted to maximize the yield of chloromethane (CH₃Cl) and minimize further substitution to CH₂Cl₂, CHCl₃, and CCl₄?",
        options: [
          "Use a large excess of chlorine gas with high-intensity UV radiation.",
          "Use an exact 1 : 4 molar ratio of methane to chlorine under reflux.",
          "Use a large excess of methane relative to chlorine under UV light.",
          "Add aqueous sodium hydroxide to neutralize all chlorine radicals.",
        ],
        answerIndex: 2,
        hints: [
          "Further substitution happens when Cl• collides with CH₃Cl instead of unreacted CH₄.",
          "How can you make Cl• far more likely to collide with CH₄ than with CH₃Cl?",
        ],
        explanation:
          "A large excess of methane ensures that Cl• radicals are overwhelmingly more likely to collide with unreacted CH₄ molecules than with newly formed CH₃Cl molecules, suppressing multi-substitution. Excess Cl₂ instead drives complete chlorination toward CCl₄.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q07",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Distinguish",
        guideRef: "free-radical-substitution",
        strategy: "Bromine test: dark vs UV light",
        question:
          "Two unlabelled test tubes contain liquid cyclohexane (C₆H₁₂) and liquid cyclohexene (C₆H₁₀). Bromine dissolved in an organic solvent is added to both tubes in complete darkness. What is observed?",
        options: [
          "Both tubes rapidly turn from orange-brown to colourless with evolution of HBr gas.",
          "Cyclohexene rapidly decolourizes the bromine; cyclohexane remains orange-brown.",
          "Cyclohexane rapidly decolourizes the bromine; cyclohexene remains orange-brown.",
          "Neither tube shows any colour change until both are exposed to ultraviolet light.",
        ],
        answerIndex: 1,
        hints: [
          "Does electrophilic addition of Br₂ to a C=C double bond require UV light?",
          "What happens to an alkane + Br₂ when there is NO UV light?",
        ],
        explanation:
          "Cyclohexene contains a reactive C=C π bond that undergoes rapid electrophilic addition with Br₂ in the dark, immediately decolourizing the orange-brown solution. Cyclohexane is a saturated cycloalkane and cannot undergo free-radical substitution without UV light.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q08",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Full curly arrow tracks an electron pair",
        question:
          "In an organic reaction mechanism, what does a double-headed (full) curly arrow specifically represent?",
        options: [
          "The movement of a single unpaired electron during homolytic bond fission.",
          "The movement of a positively charged proton from an acid to a base.",
          "The transfer of thermal energy from an exothermic bond formation step.",
          "The movement of a pair of electrons from an electron-rich site to an electron-poor site.",
        ],
        answerIndex: 3,
        hints: [
          "Compare a fish-hook half-arrow (1 electron) with a full double-headed curly arrow (2 electrons).",
        ],
        explanation:
          "A full double-headed curly arrow represents the movement of a pair of electrons, starting at a lone pair, negative charge, or covalent bond and pointing toward an electron-deficient atom. Single-electron movement uses a single-headed fish-hook arrow.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q09",
        kind: "mcq",
        level: "SL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Classify nucleophiles by lone pair availability",
        question:
          "Which list contains ONLY species that act as nucleophiles?",
        options: [
          "OH⁻, CN⁻, NH₃, H₂O",
          "H⁺, NO₂⁺, BF₃, AlCl₃",
          "OH⁻, Cl•, H⁺, NH₃",
          "Br₂, CH₃⁺, CN⁻, H₂O",
        ],
        answerIndex: 0,
        hints: [
          "A nucleophile must possess a non-bonding lone pair of electrons that it can donate to form a covalent bond.",
          "Eliminate any list containing positively charged cations (H⁺, NO₂⁺, CH₃⁺) or free radicals (Cl•).",
        ],
        explanation:
          "OH⁻, CN⁻, NH₃, and H₂O all possess available lone pairs of electrons and are electron-rich nucleophiles (electron-pair donors). H⁺, NO₂⁺, BF₃, AlCl₃, Br₂, and CH₃⁺ are electrophiles, while Cl• is a free radical.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q10",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Identify electrophiles as electron-pair acceptors",
        question:
          "Which species acts as an electrophile when reacting with an alkene?",
        options: [
          "Hydroxide ion (OH⁻) donating a lone pair from oxygen.",
          "Cyanide ion (CN⁻) donating a lone pair from carbon.",
          "Hydrogen bromide (Hδ⁺−Brδ⁻) accepting π electrons at Hδ⁺.",
          "Ammonia (NH₃) donating a lone pair from nitrogen.",
        ],
        answerIndex: 2,
        hints: [
          "An electrophile is electron-deficient ('electron-loving') and accepts an electron pair from the alkene's π bond.",
          "Which molecule has an electron-deficient δ⁺ atom ready to accept electrons?",
        ],
        explanation:
          "Because Br is more electronegative than H, the H atom in H−Br carries a partial positive charge (Hδ⁺) and acts as an electrophile, accepting the π electron pair from the alkene. OH⁻, CN⁻, and NH₃ are all electron-rich nucleophiles.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q11",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "State",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Hydrolysis of halogenoalkanes to alcohols",
        question:
          "When 1-bromopropane (CH₃CH₂CH₂Br) is warmed under reflux with aqueous sodium hydroxide, what is the organic product and the type of reaction?",
        options: [
          "Propene via electrophilic elimination of hydrogen bromide.",
          "Propan-1-ol via nucleophilic substitution of bromide by hydroxide.",
          "Propanal via free-radical oxidation of the primary carbon.",
          "1,2-dibromopropane via electrophilic addition across the chain.",
        ],
        answerIndex: 1,
        hints: [
          "What role does aqueous OH⁻ play toward the polar Cδ⁺−Brδ⁻ carbon?",
          "Replacing −Br with −OH converts a halogenoalkane into which homologous series?",
        ],
        explanation:
          "Aqueous OH⁻ acts as a nucleophile, attacking the electrophilic Cδ⁺ atom of 1-bromopropane and displacing Br⁻ to form propan-1-ol (CH₃CH₂CH₂OH) via nucleophilic substitution.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q12",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "State",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Industrial catalytic hydration of ethene",
        question:
          "Which set of reagents and conditions is used industrially to convert ethene into ethanol in a single step?",
        options: [
          "Steam (H₂O(g)), H₃PO₄ catalyst, 300 °C, and 60–70 atm pressure.",
          "Hydrogen gas (H₂), finely divided Ni catalyst, and 150 °C.",
          "Aqueous sodium hydroxide (NaOH(aq)), warmed under reflux.",
          "Acidified potassium dichromate (K₂Cr₂O₇/H⁺), heated under reflux.",
        ],
        answerIndex: 0,
        hints: [
          "Converting C₂H₄ to C₂H₅OH adds the elements of H₂O across the C=C double bond.",
          "Recall the industrial acid catalyst and temperature/pressure conditions for hydration.",
        ],
        explanation:
          "Industrial hydration of ethene adds steam (H₂O(g)) across the C=C bond over a solid phosphoric(V) acid (H₃PO₄) catalyst at 300 °C and 60–70 atm. H₂/Ni gives ethane (hydrogenation), while NaOH(aq) hydrolyses halogenoalkanes rather than alkenes.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q13",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Induced dipole mechanism of Br₂ with alkenes",
        question:
          "Why does non-polar bromine (Br₂) react readily with ethene (CH₂=CH₂) at room temperature in the dark?",
        options: [
          "Room-temperature collisions supply enough kinetic energy to cleave Br−Br homolytically.",
          "Ethene donates a proton to Br₂, creating HBr and an anionic alkene intermediate.",
          "Water present in the air converts Br₂ into free bromine radicals before collision.",
          "Ethene's high π electron density induces a temporary Brδ⁺−Brδ⁻ dipole in approaching Br₂.",
        ],
        answerIndex: 3,
        hints: [
          "What happens to the electron cloud of Br₂ as it approaches the electron-rich π bond of ethene?",
          "Does the reaction proceed via radicals or via an electrophile?",
        ],
        explanation:
          "As Br₂ approaches the electron-rich π cloud of ethene, electron–electron repulsion pushes electrons toward the farther Br atom, inducing a temporary Brδ⁺−Brδ⁻ dipole. The nearer Brδ⁺ then accepts the π electron pair as an electrophile.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q14",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Hydrogenation of alkenes",
        question:
          "But-2-ene (CH₃CH=CHCH₃) is passed with excess hydrogen gas over a nickel catalyst at 150 °C. Which statement about this reaction is correct?",
        options: [
          "It is a nucleophilic substitution producing butan-2-ol.",
          "It is an addition reaction producing saturated butane with 100% atom economy.",
          "It is a free-radical substitution producing 2-methylpropane and H₂.",
          "It is an elimination reaction producing but-1-yne and water.",
        ],
        answerIndex: 1,
        hints: [
          "How many products are formed when H₂ adds across the C=C bond of but-2-ene?",
          "Recall that every atom in the reactants ends up in the single alkane product.",
        ],
        explanation:
          "Hydrogenation adds H₂ across the C=C π bond of but-2-ene over a Ni catalyst at 150 °C to produce a single product, butane (C₄H₁₀). Because there are no byproducts, the atom economy is 100%.",
      },
      {
        id: "r3-2-organic-mechanisms-m1-q15",
        kind: "mcq",
        level: "SL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "free-radical-substitution",
        strategy: "Counting constitutional mono-substituted isomers in radical halogenation",
        question:
          "How many distinct structural isomers of monochloropentane (C₅H₁₁Cl) can be formed when pentane (CH₃CH₂CH₂CH₂CH₃) reacts with chlorine under UV light?",
        options: [
          "1 structural isomer",
          "2 structural isomers",
          "3 structural isomers",
          "5 structural isomers",
        ],
        answerIndex: 2,
        hints: [
          "Check the symmetry of the 5-carbon straight chain: C1−C2−C3−C2−C1.",
          "How many chemically distinct carbon positions exist along pentane?",
        ],
        explanation:
          "Pentane is symmetrical: substituting an H at C-1 or C-5 gives 1-chloropentane; substituting at C-2 or C-4 gives 2-chloropentane; substituting at C-3 gives 3-chloropentane. That yields exactly 3 structural isomers (not 5, because C-4 ≡ C-2 and C-5 ≡ C-1).",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — HL MECHANISMS (SN1, SN2, Markovnikov, Benzene Nitration)
  // ===========================================================================
  {
    id: "r3-2-organic-mechanisms-m2",
    title: "MCQ Paper 2: SN1 vs SN2, Markovnikov & Benzene Nitration [HL]",
    level: "HL",
    questions: [
      {
        id: "r3-2-organic-mechanisms-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Lewis acid vs Lewis base definitions",
        question:
          "In the coordinate reaction BF₃ + :NH₃ → F₃B←NH₃, how are BF₃ and NH₃ classified under the Lewis acid–base theory?",
        options: [
          "BF₃ is a Lewis base (electron-pair donor); NH₃ is a Lewis acid (electron-pair acceptor).",
          "BF₃ is a Lewis acid (electron-pair acceptor); NH₃ is a Lewis base (electron-pair donor).",
          "Both BF₃ and NH₃ act as Brønsted–Lowry acids by exchanging a proton.",
          "BF₃ is a nucleophile with a lone pair; NH₃ is an electrophile with an empty orbital.",
        ],
        answerIndex: 1,
        hints: [
          "Count valence electrons on boron in BF₃ (6 electrons — incomplete octet) versus nitrogen in NH₃ (lone pair).",
          "A Lewis acid accepts an electron pair; a Lewis base donates an electron pair.",
        ],
        explanation:
          "Boron in BF₃ has an empty 2p orbital and accepts the lone pair from nitrogen, making BF₃ a Lewis acid (and electrophile) and NH₃ a Lewis base (and nucleophile). No proton is transferred, so this is outside the Brønsted–Lowry model.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Substrate class dictates SN1 vs SN2",
        question:
          "Which halogenoalkane reacts predominantly via an SN1 mechanism when warmed with aqueous sodium hydroxide?",
        options: [
          "Bromomethane, CH₃Br",
          "1-bromobutane, CH₃CH₂CH₂CH₂Br",
          "1-bromo-2-methylpropane, (CH₃)₂CHCH₂Br",
          "2-bromo-2-methylpropane, (CH₃)₃CBr",
        ],
        answerIndex: 3,
        hints: [
          "Classify the carbon attached to Br in each option as methyl, primary (1°), secondary (2°), or tertiary (3°).",
          "SN1 is strongly favoured by tertiary (3°) halogenoalkanes.",
        ],
        explanation:
          "2-bromo-2-methylpropane is a tertiary (3°) halogenoalkane: steric hindrance blocks backside SN2 attack, while three electron-donating methyl groups (+I effect) strongly stabilize the tertiary carbocation intermediate. The other three choices are methyl or primary (1°) substrates that react by SN2.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "SN2 rate law and reaction order",
        question:
          "1-chlorobutane undergoes hydrolysis with aqueous NaOH via an SN2 mechanism. If the concentration of 1-chlorobutane is doubled and the concentration of NaOH is tripled at constant temperature, by what factor does the initial rate increase?",
        options: [
          "The initial rate increases by a factor of 6.",
          "The initial rate increases by a factor of 2.",
          "The initial rate increases by a factor of 3.",
          "The initial rate increases by a factor of 5.",
        ],
        answerIndex: 0,
        hints: [
          "Write the bimolecular SN2 rate law: rate = k[C₄H₉Cl][OH⁻].",
          "Substitute 2 × [C₄H₉Cl] and 3 × [OH⁻] into the rate law.",
        ],
        explanation:
          "In an SN2 reaction, both the halogenoalkane and the nucleophile appear to the first power in the rate equation: rate = k[RX][OH⁻]. Multiplying [RX] by 2 and [OH⁻] by 3 multiplies the rate by 2 × 3 = 6 (not 2 + 3 = 5, and not 2 as in SN1).",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Compare",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "SN2 transition state vs SN1 carbocation intermediate",
        question:
          "Which statement accurately compares the potential energy profile of an SN2 reaction with that of an SN1 reaction?",
        options: [
          "SN2 has two energy peaks separated by a carbocation well; SN1 has one energy peak.",
          "Both SN1 and SN2 have one energy peak, but SN1 has a higher activation energy.",
          "SN2 has one transition-state peak with no intermediate; SN1 has two peaks with a carbocation well.",
          "SN2 has a trigonal planar carbocation intermediate; SN1 has a 5-coordinate transition state.",
        ],
        answerIndex: 2,
        hints: [
          "Remember the 'flip' rule: SN2 happens in 1 concerted step; SN1 happens in 2 elementary steps.",
          "Each elementary step crosses one transition-state peak; an intermediate sits in a valley between peaks.",
        ],
        explanation:
          "SN2 is a single concerted step with one 5-coordinate transition-state peak and no isolable intermediate. SN1 is a two-step mechanism with two transition states separated by a local energy minimum corresponding to the trigonal planar carbocation intermediate.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Stereochemical outcome of SN1 vs SN2",
        question:
          "A single pure enantiomer of a chiral tertiary halogenoalkane undergoes hydrolysis exclusively by an SN1 mechanism. What is the optical activity of the resulting alcohol product?",
        options: [
          "Optically active with 100% inversion of configuration compared to the starting enantiomer.",
          "Optically active with 100% retention of configuration compared to the starting enantiomer.",
          "Optically active because the departing halide blocks attack from the front face.",
          "Optically inactive because a 50:50 racemic mixture of both enantiomers is formed.",
        ],
        answerIndex: 3,
        hints: [
          "What is the 3D geometry of the sp²-hybridized carbocation intermediate formed in Step 1 of SN1?",
          "From which face(s) can the nucleophile attack a flat trigonal planar intermediate?",
        ],
        explanation:
          "Step 1 of SN1 forms a flat, trigonal planar (120°) sp² carbocation. The nucleophile attacks both faces with equal probability, yielding a 50:50 racemic mixture whose equal and opposite rotations cancel to give zero net optical activity. Complete inversion occurs in SN2, not SN1.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Polar aprotic vs polar protic solvent effects",
        question:
          "Why does switching from a polar protic solvent (ethanol) to a polar aprotic solvent (propanone/DMSO) dramatically accelerate an SN2 reaction involving an anionic nucleophile such as OH⁻ or CN⁻?",
        options: [
          "Polar aprotic solvents cannot hydrogen-bond to the anion, leaving the nucleophile unsolvated and more reactive.",
          "Polar aprotic solvents donate protons to the leaving group, pulling the halide off before nucleophilic attack.",
          "Polar aprotic solvents stabilize a planar carbocation intermediate via strong hydrogen bonding.",
          "Polar aprotic solvents prevent the halogenoalkane from dissolving, concentrating the nucleophile on the surface.",
        ],
        answerIndex: 0,
        hints: [
          "What does a polar protic solvent (containing O−H bonds) form around a small negative ion like OH⁻?",
          "Does a tight cage of hydrogen-bonded solvent molecules make a nucleophile faster or slower in SN2?",
        ],
        explanation:
          "Polar protic solvents (e.g., H₂O, ethanol) form a tight hydrogen-bonded solvation shell around anionic nucleophiles, lowering their reactivity. Polar aprotic solvents (propanone, DMSO) lack O−H/N−H bonds, so they solvate the counter-cation (Na⁺/K⁺) while leaving the anionic nucleophile 'naked' and far more reactive in SN2.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "C−X bond enthalpy governs leaving-group rate",
        question:
          "Three 1-halogenobutanes — CH₃(CH₂)₃Cl, CH₃(CH₂)₃Br, and CH₃(CH₂)₃I — are warmed separately with ethanol and aqueous AgNO₃. Which order of precipitate formation (fastest to slowest) is observed, and why?",
        options: [
          "Cl > Br > I, because C−Cl is the most polar bond and gives the largest δ⁺ charge on carbon.",
          "Br > I > Cl, because bromine has an intermediate atomic radius ideal for backside attack.",
          "I > Br > Cl, because C−I has the lowest bond enthalpy and breaks with the smallest activation energy.",
          "Cl > I > Br, because AgCl has the smallest molar mass and precipitates immediately.",
        ],
        answerIndex: 2,
        hints: [
          "Compare bond enthalpy vs bond polarity: C−I = 228 kJ mol⁻¹, C−Br = 285 kJ mol⁻¹, C−Cl = 324 kJ mol⁻¹.",
          "Which bond requires the least energy to break in the rate-determining step?",
        ],
        explanation:
          "In both SN1 and SN2, C−X bond breaking occurs in the rate-determining step, so bond enthalpy dominates over bond polarity. Because C−I (228 kJ mol⁻¹) is the weakest bond, 1-iodobutane reacts fastest (yellow AgI ppt), followed by 1-bromobutane (cream AgBr), and 1-chlorobutane slowest (white AgCl).",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Markovnikov addition to unsymmetrical alkenes",
        question:
          "What is the major organic product formed when pent-1-ene (CH₃CH₂CH₂CH=CH₂) reacts with hydrogen bromide (HBr) at room temperature?",
        options: [
          "1-bromopentane",
          "2-bromopentane",
          "3-bromopentane",
          "1,2-dibromopentane",
        ],
        answerIndex: 1,
        hints: [
          "Look at C-1 (=CH₂, two H atoms) and C-2 (−CH=, one H atom).",
          "Apply Markovnikov's rule: where does H⁺ attach to produce the more stable carbocation?",
        ],
        explanation:
          "Protonation of C-1 (which has more H atoms) generates the more stable secondary carbocation `CH₃CH₂CH₂C⁺HCH₃` (stabilized by two +I alkyl groups), rather than the unstable primary carbocation at C-1. Br⁻ then attacks C-2 to give 2-bromopentane as the major product.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Inductive stabilization of carbocations",
        question:
          "Why does 2-methylpropene, (CH₃)₂C=CH₂, react with HCl to give predominantly 2-chloro-2-methylpropane rather than 1-chloro-2-methylpropane?",
        options: [
          "Chloride ions are too bulky to approach the less hindered terminal CH₂ carbon.",
          "The terminal CH₂ carbon carries a stronger negative inductive effect than the central carbon.",
          "HCl undergoes homolytic fission to place Cl• selectively onto the tertiary carbon.",
          "Protonating the CH₂ carbon yields a tertiary carbocation stabilized by three +I methyl groups.",
        ],
        answerIndex: 3,
        hints: [
          "Compare the two possible carbocation intermediates: `(CH₃)₃C⁺` (3°) vs `(CH₃)₂CH−C⁺H₂` (1°).",
          "How do alkyl groups stabilize a positive charge on an adjacent carbon?",
        ],
        explanation:
          "Adding H⁺ to the =CH₂ carbon forms a tertiary carbocation `(CH₃)₃C⁺`, in which three electron-donating methyl groups (+I inductive effect) disperse the positive charge, lowering the activation energy relative to the primary carbocation pathway.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Electrophile generation in benzene nitration",
        question:
          "In the nitration of benzene using a mixture of concentrated HNO₃ and concentrated H₂SO₄ at 50 °C, which species acts as the electrophile and what role does HNO₃ play when generating it?",
        options: [
          "Electrophile: NO₂⁺; HNO₃ acts as a Brønsted–Lowry base accepting a proton from H₂SO₄.",
          "Electrophile: NO₃⁻; HNO₃ acts as a Brønsted–Lowry acid donating a proton to H₂SO₄.",
          "Electrophile: NO₂•; HNO₃ undergoes homolytic cleavage catalysed by H₂SO₄.",
          "Electrophile: HSO₄⁻; HNO₃ acts as a reducing agent to generate sulfur trioxide.",
        ],
        answerIndex: 0,
        hints: [
          "Write the electrophile-generation equation: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O.",
          "Which acid is stronger, H₂SO₄ or HNO₃? The weaker one gets protonated!",
        ],
        explanation:
          "Concentrated H₂SO₄ is a stronger acid than HNO₃, so it donates a proton to HNO₃ (making HNO₃ act as a Brønsted–Lowry base) to form H₂NO₃⁺, which loses H₂O to yield the linear nitronium ion electrophile, NO₂⁺.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Aromatic resonance energy favours substitution over addition",
        question:
          "Why does benzene undergo electrophilic substitution with NO₂⁺ rather than electrophilic addition like an alkene?",
        options: [
          "Benzene has no π electrons available to react with positively charged electrophiles.",
          "The C−H bonds in benzene are weaker than the C−C bonds, so hydrogen always leaves first.",
          "Substitution restores the delocalized π electron ring, preserving ~150 kJ mol⁻¹ of resonance stability.",
          "The nitronium ion is too large to fit onto two adjacent carbons in an addition reaction.",
        ],
        answerIndex: 2,
        hints: [
          "What happens to the delocalized 6-π-electron aromatic ring if an addition product forms?",
          "What happens when the arenium ion intermediate loses H⁺ instead?",
        ],
        explanation:
          "Electrophilic addition would permanently disrupt benzene's delocalized π ring, forfeiting ~150 kJ mol⁻¹ of resonance stabilization energy. Losing H⁺ from the arenium ion intermediate restores the intact aromatic ring, making electrophilic substitution far more thermodynamically favourable.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Transition-metal complexes as Lewis acid–base adducts",
        question:
          "Which statement correctly describes the role of concentrated H₂SO₄ after Step 2 (deprotonation of the arenium ion) in the nitration of benzene?",
        options: [
          "It is permanently consumed as a stoichiometric reactant forming benzene sulfonic acid.",
          "It acts as a nucleophile attacking the arenium ion to expel a water molecule.",
          "It is reduced to SO₂ gas while oxidizing the expelled H⁺ ion to H₂.",
          "HSO₄⁻ removes the expelled H⁺ ion to regenerate H₂SO₄, confirming its catalytic role.",
        ],
        answerIndex: 3,
        hints: [
          "Track HSO₄⁻ from electrophile generation and H⁺ released in Step 2.",
          "Combine HSO₄⁻ + H⁺: what molecule is reformed?",
        ],
        explanation:
          "In Step 2, the C−H bond electrons return to the ring and H⁺ is expelled. HSO₄⁻ (formed during NO₂⁺ generation) accepts that H⁺ to regenerate H₂SO₄, demonstrating that concentrated sulfuric acid acts as a true catalyst.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Experimental kinetics to identify SN1 vs SN2",
        question:
          "A halogenoalkane R−Br is hydrolysed in aqueous ethanol at 50 °C. Experiment 1: [R−Br] = 0.10, [OH⁻] = 0.10 → rate = 2.4 × 10⁻⁴. Experiment 2: [R−Br] = 0.20, [OH⁻] = 0.10 → rate = 4.8 × 10⁻⁴. Experiment 3: [R−Br] = 0.20, [OH⁻] = 0.30 → rate = 4.8 × 10⁻⁴ mol dm⁻³ s⁻¹. What is the most likely structure of R−Br?",
        options: [
          "CH₃CH₂CH₂CH₂Br (1-bromobutane)",
          "(CH₃)₃CBr (2-bromo-2-methylpropane)",
          "CH₃CH₂Br (bromoethane)",
          "CH₃Br (bromomethane)",
        ],
        answerIndex: 1,
        hints: [
          "Compare Experiments 1 and 2 to find the order with respect to [R−Br].",
          "Compare Experiments 2 and 3 to find the order with respect to [OH⁻]. Which mechanism has order 0 in [OH⁻]?",
        ],
        explanation:
          "Doubling [R−Br] doubles the rate (1st order in R−Br), while tripling [OH⁻] leaves the rate unchanged (0th order in OH⁻). Therefore rate = k[R−Br], which is the unimolecular SN1 rate law characteristic of a tertiary halogenoalkane like (CH₃)₃CBr.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Predict",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Identify Lewis acids in inorganic and organic mechanisms",
        question:
          "Which set consists ENTIRELY of Lewis acids?",
        options: [
          "AlCl₃, BF₃, Fe³⁺, NO₂⁺",
          "NH₃, Cl⁻, H₂O, CN⁻",
          "BF₃, OH⁻, H⁺, CH₃NH₂",
          "AlCl₃, H₂O, Cu²⁺, OH⁻",
        ],
        answerIndex: 0,
        hints: [
          "A Lewis acid is an electron-pair acceptor (incomplete octet, positive ion, or electrophile).",
          "Eliminate any set containing lone-pair donors like NH₃, H₂O, OH⁻, Cl⁻, or CN⁻.",
        ],
        explanation:
          "AlCl₃ and BF₃ have incomplete octets (6 valence electrons), Fe³⁺ has vacant d orbitals that accept ligand lone pairs, and NO₂⁺ is a positively charged electrophile — all four are electron-pair acceptors (Lewis acids). Every other list contains at least one Lewis base.",
      },
      {
        id: "r3-2-organic-mechanisms-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Analyse",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Symmetrical vs unsymmetrical alkenes with HX",
        question:
          "Which alkene yields ONLY ONE single monobromoalkane product (no constitutional regioisomers) upon electrophilic addition of HBr?",
        options: [
          "Propene, CH₃CH=CH₂",
          "But-1-ene, CH₃CH₂CH=CH₂",
          "But-2-ene, CH₃CH=CHCH₃",
          "2-methylbut-2-ene, (CH₃)₂C=CHCH₃",
        ],
        answerIndex: 2,
        hints: [
          "Check whether the two carbons of the C=C double bond are chemically identical by symmetry.",
          "If adding H to either carbon gives the exact same carbocation, only one structural product can form.",
        ],
        explanation:
          "But-2-ene is symmetrical across the C=C bond: adding H⁺ to C-2 or C-3 produces the exact same secondary carbocation (`CH₃C⁺HCH₂CH₃`), yielding exclusively 2-bromobutane. Propene, but-1-ene, and 2-methylbut-2-ene are all unsymmetrical and produce a major/minor pair of constitutional isomers.",
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — SYNTHESIS, RETROSYNTHESIS & INTEGRATED MECHANISMS [SL + HL]
  // ===========================================================================
  {
    id: "r3-2-organic-mechanisms-m3",
    title: "MCQ Set 3: Organic Synthesis, Retrosynthesis & Integrated Mechanisms [SL + HL]",
    level: "HL",
    questions: [
      {
        id: "r3-2-organic-mechanisms-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Control oxidation of 1° alcohols: distillation vs reflux",
        question:
          "To convert propan-1-ol into propanal (with minimal conversion to propanoic acid), which reagents and apparatus setup are required?",
        options: [
          "Excess acidified K₂Cr₂O₇/H⁺ heated strongly under reflux for 30 minutes.",
          "Aqueous NaBH₄ in ethanol warmed gently in a sealed flask.",
          "Concentrated H₂SO₄ heated to 170 °C with continuous vapour collection.",
          "Acidified K₂Cr₂O₇/H⁺ heated gently with immediate distillation of the product.",
        ],
        answerIndex: 3,
        hints: [
          "Compare the boiling points of propanal, around 49 °C, and propan-1-ol, around 97 °C.",
          "How do you stop propanal from staying in contact with hot dichromate and oxidizing further?",
        ],
        explanation:
          "Propanal lacks O−H hydrogen bonding and boils far lower than propan-1-ol or propanoic acid, so warming with acidified K₂Cr₂O₇/H⁺ and **immediately distilling off** the propanal prevents further oxidation to propanoic acid. Heating under reflux instead forces complete oxidation to propanoic acid.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Identify",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "NaBH₄ vs LiAlH₄ selectivity",
        question:
          "Which reducing agent and solvent conditions are required to reduce ethanoic acid (CH₃COOH) to ethanol (CH₃CH₂OH)?",
        options: [
          "NaBH₄ in aqueous ethanol at room temperature.",
          "LiAlH₄ in dry ether, followed by dilute aqueous acid H⁺(aq).",
          "H₂ gas over a nickel catalyst at 150 °C.",
          "Tin (Sn) and concentrated HCl heated under reflux.",
        ],
        answerIndex: 1,
        hints: [
          "Remember that carboxylic acids are harder to reduce than aldehydes or ketones.",
          "Which hydride reagent reacts violently with water and requires dry ether + acid work-up?",
        ],
        explanation:
          "Carboxylic acids are not reduced by NaBH₄ or H₂/Ni; they require the powerful reducing agent **LiAlH₄ in dry ether**, followed by hydrolysis with dilute aqueous acid H⁺(aq). Sn/conc. HCl is used specifically for reducing nitrobenzene to phenylamine.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Reducing a bifunctional molecule selectively with NaBH₄",
        question:
          "Compound X, HOOC−CH₂−CO−CH₃ (3-oxobutanoic acid), contains both a carboxylic acid group and a ketone group. It is treated with aqueous NaBH₄ in methanol. What is the organic product?",
        options: [
          "HOCH₂−CH₂−CO−CH₃ (only the carboxylic acid is reduced)",
          "HOCH₂−CH₂−CH(OH)−CH₃ (both functional groups are reduced)",
          "HOOC−CH₂−CH(OH)−CH₃ (only the ketone group is reduced)",
          "No reaction occurs because the acid neutralizes NaBH₄ completely",
        ],
        answerIndex: 2,
        hints: [
          "Recall which carbonyl functional groups NaBH₄ is strong enough to reduce.",
          "Ketones are reduced to secondary alcohols by NaBH₄; what happens to −COOH?",
        ],
        explanation:
          "NaBH₄ is a chemoselective reducing agent that reduces aldehydes and ketones (here converting the ketone −CO− to a secondary alcohol −CH(OH)−) while leaving carboxylic acids (−COOH) untouched. Reducing both groups would require LiAlH₄ in dry ether.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Explain",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Two-stage reduction of nitrobenzene to phenylamine",
        question:
          "In the reduction of nitrobenzene to phenylamine using tin (Sn) and concentrated HCl under reflux, why must aqueous NaOH be added at the end of the reaction?",
        options: [
          "To deprotonate the phenylammonium ion (C₆H₅NH₃⁺) formed in acid and liberate free C₆H₅NH₂.",
          "To act as a nucleophilic catalyst that removes the remaining oxygen atoms from −NO₂.",
          "To oxidize unreacted tin metal back into insoluble SnO₂ so it can be filtered.",
          "To hydrolyse the aromatic ring and prevent dinitration byproducts from forming.",
        ],
        answerIndex: 0,
        hints: [
          "Phenylamine (C₆H₅NH₂) is a weak Brønsted–Lowry base; what happens to a base in concentrated HCl?",
          "How do you convert a protonated ammonium salt back into the neutral free amine?",
        ],
        explanation:
          "Under strongly acidic reflux conditions (conc. HCl), basic phenylamine is protonated to the water-soluble phenylammonium ion (C₆H₅NH₃⁺). Adding NaOH(aq) neutralizes the acid and deprotonates C₆H₅NH₃⁺ + OH⁻ → C₆H₅NH₂ + H₂O to release free phenylamine.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Design",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Retrosynthesis from propene to propanone",
        question:
          "Which 2-step synthesis cleanly converts propene (CH₃CH=CH₂) into propanone (CH₃COCH₃) as the major product?",
        options: [
          "Step 1: H₂/Ni, 150 °C → Step 2: K₂Cr₂O₇/H⁺, reflux.",
          "Step 1: Br₂(dark) → Step 2: NaOH(aq), reflux.",
          "Step 1: H₂O(g)/H₃PO₄, 300 °C, 60 atm → Step 2: K₂Cr₂O₇/H⁺, reflux.",
          "Step 1: Cl₂/UV light → Step 2: NaBH₄ in aqueous ethanol.",
        ],
        answerIndex: 2,
        hints: [
          "Work backwards from propanone: which alcohol oxidizes to a ketone?",
          "How does Markovnikov hydration convert propene into that secondary alcohol?",
        ],
        explanation:
          "Work backwards: propanone comes from oxidizing secondary propan-2-ol (K₂Cr₂O₇/H⁺, reflux). Propan-2-ol is the Markovnikov major product of hydrating propene with steam and an H₃PO₄ catalyst (300 °C, 60 atm). Hydrogenating propene gives unreactive propane; Br₂ addition gives a dibromoalkane.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Design",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Two-step synthesis of phenylamine from benzene",
        question:
          "What is the correct sequence of reagents to synthesize phenylamine (C₆H₅NH₂) starting from benzene (C₆H₆)?",
        options: [
          "Step 1: NH₃(aq), reflux → Step 2: conc. H₂SO₄, 50 °C.",
          "Step 1: conc. HNO₃ + conc. H₂SO₄, 50 °C → Step 2: Sn + conc. HCl (reflux), then NaOH(aq).",
          "Step 1: Cl₂ + UV light → Step 2: NH₃ in dry ether, followed by H⁺(aq).",
          "Step 1: dil. HNO₃, 100 °C → Step 2: NaBH₄ in methanol at room temperature.",
        ],
        answerIndex: 1,
        hints: [
          "Benzene does not react directly with nucleophiles like NH₃; you must first introduce a nitrogen functional group via electrophilic aromatic substitution.",
          "Which intermediate sits between benzene and phenylamine?",
        ],
        explanation:
          "Step 1 nitrates benzene to nitrobenzene (C₆H₅NO₂) using conc. HNO₃ and conc. H₂SO₄ at 50 °C. Step 2 reduces nitrobenzene with Sn and conc. HCl under reflux, followed by NaOH(aq) to liberate free phenylamine. NaBH₄ cannot reduce nitro groups.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q07",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Esterification precursor identification",
        question:
          "Propyl methanoate (HCOOCH₂CH₂CH₃) is synthesized by refluxing a carboxylic acid and an alcohol with a concentrated H₂SO₄ catalyst. Which pair of starting reactants is required?",
        options: [
          "Propanoic acid and methanol",
          "Ethanoic acid and ethanol",
          "Methanoic acid and propan-2-ol",
          "Methanoic acid and propan-1-ol",
        ],
        answerIndex: 3,
        hints: [
          "In ester nomenclature, the '-yl' prefix comes from the alcohol and the '-oate' suffix comes from the carboxylic acid.",
          "Check the straight-chain structure −CH₂CH₂CH₃: is it primary (propan-1-ol) or secondary (propan-2-ol)?",
        ],
        explanation:
          "'Methanoate' derives from methanoic acid (HCOOH), and 'propyl' (−CH₂CH₂CH₃) derives from the primary alcohol propan-1-ol (CH₃CH₂CH₂OH). Propanoic acid + methanol would instead form methyl propanoate.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Oxidation resistance of tertiary alcohols",
        question:
          "When 2-methylpropan-2-ol, (CH₃)₃COH, is refluxed with excess acidified potassium dichromate(VI), what colour change and organic product are observed?",
        options: [
          "No colour change (stays orange) and no oxidation product is formed.",
          "Orange to green, forming 2-methylpropanal.",
          "Orange to green, forming 2-methylpropanoic acid.",
          "Orange to colourless, forming 2-methylpropanone.",
        ],
        answerIndex: 0,
        hints: [
          "Classify 2-methylpropan-2-ol as a primary, secondary, or tertiary alcohol.",
          "Does the carbon attached to −OH carry any hydrogen atom that can be removed during oxidation?",
        ],
        explanation:
          "2-methylpropan-2-ol is a tertiary (3°) alcohol: the carbon bonded to −OH is attached to three other carbons and carries NO hydrogen atoms. Because oxidation to a carbonyl requires breaking a C−H bond on that carbon (without cleaving C−C bonds), tertiary alcohols resist acidified dichromate and the solution stays orange.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Design",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Two-step carboxylic acid to aldehyde workaround",
        question:
          "Carboxylic acids cannot be reduced directly to aldehydes in one step with IB syllabus reagents. Which 2-step pathway successfully converts butanoic acid (CH₃CH₂CH₂COOH) into butanal (CH₃CH₂CH₂CHO)?",
        options: [
          "Step 1: NaBH₄(aq/EtOH) → Step 2: K₂Cr₂O₇/H⁺, reflux.",
          "Step 1: LiAlH₄ in dry ether, then H⁺(aq) → Step 2: K₂Cr₂O₇/H⁺, warm and distil.",
          "Step 1: conc. H₂SO₄, 170 °C → Step 2: H₂O(g)/H₃PO₄, 300 °C.",
          "Step 1: LiAlH₄ in dry ether, then H⁺(aq) → Step 2: excess K₂Cr₂O₇/H⁺, reflux.",
        ],
        answerIndex: 1,
        hints: [
          "First reduce the carboxylic acid all the way down to the primary alcohol (butan-1-ol) using the right hydride reagent.",
          "Then perform controlled partial oxidation of butan-1-ol so it stops at butanal.",
        ],
        explanation:
          "Step 1 reduces butanoic acid to butan-1-ol using LiAlH₄ in dry ether followed by H⁺(aq) (NaBH₄ will not reduce a carboxylic acid). Step 2 partially oxidizes butan-1-ol to butanal using acidified K₂Cr₂O₇/H⁺ with immediate distillation (reflux would oxidize it straight back to butanoic acid!).",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q10",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Identify",
        guideRef: "free-radical-substitution",
        strategy: "Identifying a termination step from radical counts",
        question:
          "During the chlorination of methane under UV light, which equation represents a termination step?",
        options: [
          "Cl₂ → Cl• + Cl•",
          "CH₄ + Cl• → •CH₃ + HCl",
          "•CH₃ + Cl₂ → CH₃Cl + Cl•",
          "•CH₃ + Cl• → CH₃Cl",
        ],
        answerIndex: 3,
        hints: [
          "Use the radical-count rule: Initiation = 0 → 2, Propagation = 1 → 1, Termination = 2 → 0.",
          "Find the equation where two free radicals combine to leave zero unpaired electrons on the right.",
        ],
        explanation:
          "In •CH₃ + Cl• → CH₃Cl, two free radicals combine to leave zero radicals (2 → 0), terminating the chain. Cl₂ → 2 Cl• is initiation (0 → 2), and the two reactions with one radical on each side (1 → 1) are propagation steps.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Design",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "3-step positional isomer switch via elimination + Markovnikov addition",
        question:
          "What is the shortest clean route to convert 1-bromopropane into propan-2-ol without losing carbon atoms?",
        options: [
          "1-bromopropane →(NaOH(aq))→ propan-1-ol →(K₂Cr₂O₇/H⁺, reflux)→ propanoic acid →(NaBH₄)→ propan-2-ol.",
          "1-bromopropane →(H₂/Ni)→ propane →(Br₂/UV)→ 2-bromopropane →(NaOH(aq))→ propan-2-ol.",
          "1-bromopropane →(NaOH(aq))→ propan-1-ol →(conc. H₂SO₄, heat)→ propene →(H₂O(g)/H₃PO₄)→ propan-2-ol.",
          "1-bromopropane →(conc. HNO₃/H₂SO₄)→ 2-nitropropane →(Sn/HCl)→ propan-2-ol.",
        ],
        answerIndex: 2,
        hints: [
          "To shift a functional group cleanly from C-1 to C-2, pass through the alkene (propene) and let Markovnikov's rule place the −OH at C-2.",
          "Avoid free-radical bromination of propane, which produces an unselective mixture of isomers and poly-brominated byproducts.",
        ],
        explanation:
          "Hydrolysing 1-bromopropane with NaOH(aq) gives propan-1-ol; dehydrating propan-1-ol with hot conc. H₂SO₄ yields propene; Markovnikov hydration of propene (H₂O(g), H₃PO₄, 300 °C, 60 atm) selectively yields propan-2-ol via the secondary carbocation.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q12",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Compare",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Match reaction type to functional group class",
        question:
          "Which row correctly matches the characteristic reaction mechanism for an alkane, an alkene, and a halogenoalkane?",
        options: [
          "Alkane: free-radical substitution · Alkene: electrophilic addition · Halogenoalkane: nucleophilic substitution",
          "Alkane: electrophilic substitution · Alkene: nucleophilic addition · Halogenoalkane: free-radical addition",
          "Alkane: nucleophilic substitution · Alkene: free-radical substitution · Halogenoalkane: electrophilic addition",
          "Alkane: free-radical addition · Alkene: nucleophilic substitution · Halogenoalkane: electrophilic substitution",
        ],
        answerIndex: 0,
        hints: [
          "Check each class: alkanes have non-polar σ bonds, alkenes have electron-rich π bonds, and halogenoalkanes have polar Cδ⁺−Xδ⁻ bonds.",
          "Match each bonding feature to free-radical substitution, electrophilic addition, or nucleophilic substitution.",
        ],
        explanation:
          "Alkanes undergo free-radical substitution (UV + X₂), alkenes undergo electrophilic addition across their electron-rich π bond, and halogenoalkanes undergo nucleophilic substitution at their polar Cδ⁺−Xδ⁻ carbon.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "organic-synthesis-retrosynthesis-hl",
        strategy: "Counting steps and checking ester carbon chains in retrosynthesis",
        question:
          "A student wants to synthesize **butyl ethanoate** (CH₃COOCH₂CH₂CH₂CH₃) from **ethanol** and **1-chlorobutane**. Which sequence of reactions is required?",
        options: [
          "Reduce ethanol with LiAlH₄, oxidize 1-chlorobutane with K₂Cr₂O₇/H⁺, then reflux with NaOH(aq).",
          "Dehydrate ethanol to ethene, add HCl, and reflux directly with 1-chlorobutane and conc. H₂SO₄.",
          "Hydrolyse ethanol with NaOH(aq), oxidize 1-chlorobutane to butanoic acid, then distil with H₂SO₄.",
          "Oxidize ethanol to ethanoic acid (K₂Cr₂O₇/H⁺, reflux), hydrolyse 1-chlorobutane to butan-1-ol (NaOH(aq)), then reflux both with conc. H₂SO₄.",
        ],
        answerIndex: 3,
        hints: [
          "Break butyl ethanoate retrosynthetically into its carboxylic acid (2 carbons) and alcohol (4 carbons).",
          "Match the 2-carbon precursor (ethanol → ethanoic acid) and 4-carbon precursor (1-chlorobutane → butan-1-ol).",
        ],
        explanation:
          "Butyl ethanoate requires ethanoic acid (2 carbons) + butan-1-ol (4 carbons). Ethanol is oxidized under reflux with excess K₂Cr₂O₇/H⁺ to ethanoic acid; 1-chlorobutane is hydrolysed with warm NaOH(aq) under reflux to butan-1-ol; both are then esterified under reflux with conc. H₂SO₄ catalyst.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Deduce",
        guideRef: "sn1-sn2-markovnikov-hl",
        strategy: "Temperature control in benzene nitration",
        question:
          "During the nitration of benzene with concentrated HNO₃ and concentrated H₂SO₄, the reaction flask is carefully maintained at 50 °C rather than 100 °C. What is the main consequence of allowing the temperature to rise to 100 °C?",
        options: [
          "The benzene ring breaks open via electrophilic addition to give hexanitrocyclohexane.",
          "The nitronium ion (NO₂⁺) decomposes immediately into nitrogen gas and oxygen gas.",
          "Further electrophilic substitution occurs, producing significant amounts of dinitrobenzenes.",
          "The reaction reverses completely back to benzene because nitration is strongly endothermic.",
        ],
        answerIndex: 2,
        hints: [
          "Compare this to free-radical substitution with excess reagent: what happens when more thermal energy is supplied after the first −NO₂ attaches?",
          "Does benzene lose aromaticity at 100 °C, or does it undergo a second substitution?",
        ],
        explanation:
          "Higher temperatures above 50–55 °C provide sufficient activation energy for a second nitronium ion to substitute onto nitrobenzene, forming dinitrobenzene (predominantly 1,3-dinitrobenzene) and lowering the yield of pure mononitrobenzene.",
      },
      {
        id: "r3-2-organic-mechanisms-m3-q15",
        kind: "mcq",
        level: "SL",
        difficulty: "core",
        commandTerm: "Deduce",
        guideRef: "nucleophiles-electrophiles-core",
        strategy: "Atom economy of addition vs substitution",
        question:
          "Why does the industrial synthesis of bromoethane from ethene + HBr have a higher atom economy than synthesizing bromoethane from ethane + Br₂ under UV light?",
        options: [
          "Ethene has a lower molar mass than ethane, so less bromine is required per mole.",
          "Electrophilic addition yields bromoethane as the sole product (100%), whereas substitution also produces HBr waste.",
          "Free-radical substitution requires a toxic nickel catalyst that contaminates the final product.",
          "HBr is an ionic salt with zero molar mass in the atom-economy denominator.",
        ],
        answerIndex: 1,
        hints: [
          "Write both balanced equations: C₂H₄ + HBr → C₂H₅Br vs C₂H₆ + Br₂ → C₂H₅Br + HBr.",
          "Recall atom economy = (M_r of desired product / Σ M_r of all reactants) × 100%.",
        ],
        explanation:
          "In C₂H₄ + HBr → C₂H₅Br, all reactant atoms are incorporated into the single desired product (100% atom economy). In C₂H₆ + Br₂ → C₂H₅Br + HBr, half the bromine atoms are lost as byproduct HBr (plus poly-brominated side products), giving a much lower atom economy (~57% at best).",
      },
    ],
  },
];
