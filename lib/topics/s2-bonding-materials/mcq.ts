import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1A · SET 1: Ionic, Metallic & Covalent Core (SL)
  // answerIndex sequence: [2, 0, 3, 1, 2, 0, 1, 3, 0, 2, 1, 3, 2, 0, 1] -> [4,4,4,3]
  // ===========================================================================
  {
    id: "s2-bonding-materials-m1",
    title: "Paper 1A · Set 1: Ionic, Metallic & Covalent Core (SL)",
    level: "SL",
    questions: [
      {
        id: "s2-bonding-materials-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "ionic-metallic-bonding",
        question: "What is the correct chemical formula of iron(III) carbonate?",
        options: ["FeCO₃", "Fe₃(CO₃)₂", "Fe₂(CO₃)₃", "Fe₂CO₃"],
        answerIndex: 2,
        hints: [
          "The Roman numeral (III) gives the charge on the iron cation, and carbonate is one of the seven IB polyatomic ions.",
          "Iron(III) is Fe³⁺ and carbonate is CO₃²⁻; balance total positive and negative charge to zero.",
        ],
        explanation:
          "Iron(III) forms Fe³⁺ and carbonate is CO₃²⁻. To balance +6 and −6, two Fe³⁺ ions combine with three CO₃²⁻ ions, giving Fe₂(CO₃)₃ (parentheses are required around the polyatomic ion). Swapping the subscripts incorrectly gives Fe₃(CO₃)₂, which would have a net charge of +5.",
      },
      {
        id: "s2-bonding-materials-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "ionic-metallic-bonding",
        question:
          "Magnesium oxide (MgO, mp 2852 °C) and sodium fluoride (NaF, mp 993 °C) have the same crystal structure and very similar inter-ionic distances. Why is the melting point of MgO so much higher than that of NaF?",
        options: [
          "Mg²⁺ and O²⁻ carry double the ionic charges of Na⁺ and F⁻, creating much stronger electrostatic attractions in the lattice.",
          "Magnesium oxide forms a giant covalent network of shared electron pairs rather than an array of oppositely charged ions.",
          "Oxygen atoms have a higher electronegativity than fluorine atoms, producing a greater degree of electron transfer in MgO.",
          "Magnesium oxide molecules experience stronger intermolecular hydrogen bonding between adjacent formula units in the solid.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the ionic charges on the cations and anions in MgO versus NaF.",
          "Lattice enthalpy scales directly with the product of the ionic charges divided by inter-ionic distance.",
        ],
        explanation:
          "Both MgO and NaF are ionic lattices, but Mg²⁺ and O²⁻ carry ±2 charges compared with ±1 on Na⁺ and F⁻. Quadrupling the charge product dramatically increases lattice enthalpy, so far more thermal energy is required to overcome the electrostatic attractions. Fluorine is actually more electronegative than oxygen, and ionic solids contain neither covalent networks nor molecules.",
      },
      {
        id: "s2-bonding-materials-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ionic-metallic-bonding",
        question:
          "Which row correctly describes the electrical conductivity and mobile charge carriers of potassium bromide (KBr) and copper (Cu)?",
        options: [
          "Solid KBr conducts via mobile ions; molten KBr conducts via free electrons; solid Cu conducts via mobile cations.",
          "Solid KBr conducts via delocalized electrons; molten KBr is an insulator; solid Cu conducts via delocalized electrons.",
          "Solid KBr is an insulator; molten KBr conducts via delocalized electrons; solid Cu conducts via mobile copper ions.",
          "Solid KBr is an insulator; molten KBr conducts via mobile ions; solid Cu conducts via delocalized valence electrons.",
        ],
        answerIndex: 3,
        hints: [
          "Electrical conduction always requires mobile charged particles — either mobile ions or delocalized electrons.",
          "In solid ionic crystals, ions are locked in fixed lattice positions, whereas melting releases them to migrate.",
        ],
        explanation:
          "Solid KBr locks K⁺ and Br⁻ in fixed lattice sites so it does not conduct electricity; melting frees the ions to migrate toward electrodes. Solid copper conducts via its sea of delocalized valence electrons while its Cu²⁺ cations remain in lattice positions. Molten salts never conduct via delocalized electrons.",
      },
      {
        id: "s2-bonding-materials-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "ionic-metallic-bonding",
        question:
          "Why does a hammered bar of pure aluminium deform into a thin sheet, whereas a crystal of sodium chloride shatters along flat planes?",
        options: [
          "Aluminium atoms are linked by weak London dispersion forces that break easily, whereas NaCl has strong covalent bonds.",
          "Metallic attraction to delocalized electrons is non-directional during slip, whereas shifted ionic layers align like charges and repel.",
          "Aluminium cations are smaller than sodium cations, allowing planes to lock together tightly while Cl⁻ anions shatter on impact.",
          "Sodium chloride contains directional lone pairs that resist bending, whereas aluminium contains alternating cations and anions.",
        ],
        answerIndex: 1,
        hints: [
          "Picture what happens to adjacent ions when one plane of an ionic lattice slides by half an ion spacing.",
          "Compare that with what happens when one layer of identical metal cations slides through a surrounding electron sea.",
        ],
        explanation:
          "In pure metals, the electrostatic attraction between cations and the delocalized electron sea is non-directional, so layers slide without breaking metallic bonding (malleability). Shifting a plane in an ionic crystal aligns positive next to positive and negative next to negative, generating sudden repulsion that cleaves the crystal (brittleness).",
      },
      {
        id: "s2-bonding-materials-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "ionic-metallic-bonding",
        question:
          "Which sequence lists the Period 3 metals in order of **increasing** metallic bond strength and melting point, with the correct explanation?",
        options: [
          "Al < Mg < Na, because sodium has the largest atomic radius and lowest ionization energy in Period 3.",
          "Mg < Na < Al, because magnesium has a full 3s sublevel that prevents its valence electrons from delocalizing.",
          "Na < Mg < Al, because cation charge increases (+1 to +3), ionic radius decreases, and more valence electrons delocalize.",
          "Na < Al < Mg, because aluminium forms covalent clusters with fewer delocalized electrons per atom than magnesium.",
        ],
        answerIndex: 2,
        hints: [
          "Count how many valence electrons each atom contributes to the metallic electron sea across Na, Mg, and Al.",
          "Also check how the cation charge density changes from Na⁺ to Mg²⁺ to Al³⁺.",
        ],
        explanation:
          "Moving across Period 3 from Na (mp 98 °C), Mg (mp 650 °C), to Al (mp 660 °C), each atom contributes 1, 2, then 3 delocalized valence electrons while the cation charge rises (+1 → +2 → +3) and ionic radius decreases. Higher charge density produces stronger electrostatic attraction to the denser electron sea.",
      },
      {
        id: "s2-bonding-materials-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "ionic-metallic-bonding",
        question:
          "Which Group 1 halide has the **largest** (most endothermic) lattice enthalpy?",
        options: ["LiF", "NaCl", "KBr", "CsI"],
        answerIndex: 0,
        hints: [
          "All four compounds have identical +1 and −1 ionic charges, so ionic radius is the deciding factor.",
          "Smaller ions pack closer together, giving a smaller inter-ionic distance r and stronger Coulombic attraction.",
        ],
        explanation:
          "Since all four halides contain singly charged (+1 and −1) ions, lattice enthalpy depends inversely on the sum of ionic radii. Li⁺ and F⁻ are the smallest cation and anion in their respective groups, giving LiF the shortest inter-ionic distance and the highest lattice enthalpy (1049 kJ mol⁻¹).",
      },
      {
        id: "s2-bonding-materials-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Which species contains a **coordinate (dative) covalent bond**?",
        options: ["CH₄", "NH₄⁺", "CO₂", "C₂H₄"],
        answerIndex: 1,
        hints: [
          "In a coordinate bond, both shared electrons come from the same atom.",
          "Consider how ammonia (NH₃, which has a lone pair on N) reacts with an empty-orbital H⁺ ion.",
        ],
        explanation:
          "When NH₃ reacts with H⁺, nitrogen donates its lone pair to form a fourth N−H bond, so both electrons in that bond originate from nitrogen — a coordinate covalent bond. Once formed, all four N−H bonds in tetrahedral NH₄⁺ are identical. CH₄, CO₂, and C₂H₄ form solely via normal shared-electron covalent bonds.",
      },
      {
        id: "s2-bonding-materials-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "covalent-vsepr-imfs",
        question:
          "How do the carbon–carbon bond length and bond strength compare across ethane (C₂H₆), ethene (C₂H₄), and ethyne (C₂H₂)?",
        options: [
          "C₂H₆ has the shortest and strongest carbon–carbon bond because single bonds experience the least electron repulsion.",
          "C₂H₄ has the shortest carbon–carbon bond, while C₂H₂ has the weakest because triple bonds are highly strained.",
          "All three hydrocarbons have identical carbon–carbon bond lengths because carbon always forms four covalent bonds.",
          "C₂H₂ has the shortest and strongest carbon–carbon bond because three shared electron pairs pull the nuclei closest together.",
        ],
        answerIndex: 3,
        hints: [
          "Identify the carbon–carbon bond order in ethane (single), ethene (double), and ethyne (triple).",
          "More shared electron pairs between two nuclei increase electrostatic attraction, shortening and strengthening the bond.",
        ],
        explanation:
          "Increasing bond order from C−C (154 pm, 346 kJ mol⁻¹) to C=C (134 pm, 614 kJ mol⁻¹) to C≡C (120 pm, 839 kJ mol⁻¹) puts greater electron density between the two carbon nuclei, pulling them closer and making the triple bond in ethyne both the shortest and strongest.",
      },
      {
        id: "s2-bonding-materials-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "covalent-vsepr-imfs",
        question:
          "What are the **molecular geometry** and approximate **H−O−H bond angle** of the hydronium ion, H₃O⁺?",
        options: [
          "Trigonal pyramidal; approximately 107°",
          "Trigonal planar; exactly 120°",
          "Tetrahedral; exactly 109.5°",
          "Bent (V-shaped); approximately 104.5°",
        ],
        answerIndex: 0,
        hints: [
          "Count total valence electrons in H₃O⁺: 6 (O) + 3 × 1 (H) − 1 (positive charge) = 8 electrons.",
          "Oxygen forms 3 single O−H bonds (6 e⁻) and keeps 1 lone pair (2 e⁻), giving 4 electron domains.",
        ],
        explanation:
          "H₃O⁺ has 4 electron domains around oxygen (3 bonding pairs + 1 lone pair), giving a tetrahedral electron domain geometry and a **trigonal pyramidal** molecular geometry (isoelectronic with NH₃). Greater lone pair–bonding pair repulsion compresses the bond angle from 109.5° to ~107°. Choosing 'tetrahedral' confuses electron domain geometry with molecular geometry.",
      },
      {
        id: "s2-bonding-materials-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Which molecule contains polar covalent bonds yet is **non-polar** overall?",
        options: ["NH₃", "H₂O", "BF₃", "CHCl₃"],
        answerIndex: 2,
        hints: [
          "A molecule with polar bonds is non-polar only when its 3D geometry is completely symmetric so all bond dipoles cancel.",
          "Compare the geometries and outer-atom symmetries of NH₃, H₂O, BF₃, and CHCl₃.",
        ],
        explanation:
          "BF₃ has 3 bonding domains and 0 lone pairs around boron, giving a symmetric trigonal planar shape (120°) in which the three identical polar B−F dipoles cancel to zero net dipole. NH₃ (trigonal pyramidal) and H₂O (bent) have asymmetric lone pairs, while CHCl₃ has a tetrahedral shape with different outer atoms (1 H and 3 Cl) so dipoles do not cancel.",
      },
      {
        id: "s2-bonding-materials-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Which sequence arranges the molecules in order of **increasing** H−X−H (or F−B−F) bond angle?",
        options: [
          "CH₄ < NH₃ < H₂O < BF₃",
          "H₂O < NH₃ < CH₄ < BF₃",
          "H₂O < CH₄ < NH₃ < BF₃",
          "BF₃ < CH₄ < NH₃ < H₂O",
        ],
        answerIndex: 1,
        hints: [
          "CH₄, NH₃, and H₂O all have 4 electron domains, while BF₃ has only 3 electron domains.",
          "Among 4-domain species, each lone pair compresses the bond angle by ~2.5° due to LP–LP > LP–BP > BP–BP repulsion.",
        ],
        explanation:
          "Bond angles increase in the order H₂O (104.5°, 2 LP) < NH₃ (107°, 1 LP) < CH₄ (109.5°, 0 LP) < BF₃ (120°, 3 domains, 0 LP). Adding lone pairs to a tetrahedral centre compresses the bonding pairs closer together.",
      },
      {
        id: "s2-bonding-materials-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Which allotrope of carbon consists of discrete spherical molecules rather than a giant covalent network, allowing it to dissolve in non-polar solvents such as toluene?",
        options: [
          "Diamond (3D tetrahedral)",
          "Graphite (layered sheets)",
          "Graphene (single monolayer)",
          "Buckminsterfullerene (C₆₀)",
        ],
        answerIndex: 3,
        hints: [
          "Giant covalent networks (3D or extended 2D sheets) are insoluble in all ordinary solvents.",
          "Identify the carbon allotrope composed of 60-atom molecular cages held together by London dispersion forces.",
        ],
        explanation:
          "Buckminsterfullerene (C₆₀) is a molecular covalent substance made of discrete 60-carbon cages held together in the solid state by weak London dispersion forces, so it sublimes easily and dissolves in non-polar organic solvents. Diamond, graphite, and graphene are extended giant covalent structures.",
      },
      {
        id: "s2-bonding-materials-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Why does graphite conduct electricity parallel to its layers whereas diamond is an electrical insulator?",
        options: [
          "Graphite contains mobile carbon cations between layers, whereas diamond contains fixed neutral carbon atoms.",
          "Graphite has weaker London dispersion forces inside each hexagon, letting electrons tunnel between carbon nuclei.",
          "Each carbon in graphite bonds to three others leaving one delocalized electron, whereas diamond binds all four valence electrons.",
          "Diamond has a higher melting point than graphite, preventing thermal excitation of electrons across its tetrahedral bonds.",
        ],
        answerIndex: 2,
        hints: [
          "Compare how many covalent bonds each carbon atom forms in graphite (3) versus diamond (4).",
          "Ask what happens to carbon's fourth valence electron in each allotrope.",
        ],
        explanation:
          "In graphite, each carbon forms 3 covalent bonds in planar hexagonal layers, leaving 1 valence electron per atom delocalized across the entire sheet to carry current parallel to the layers. In diamond, all 4 valence electrons on every carbon are localized in strong tetrahedral covalent bonds, leaving no mobile charge carriers.",
      },
      {
        id: "s2-bonding-materials-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "covalent-vsepr-imfs",
        question:
          "At 298 K and 100 kPa, carbon dioxide (CO₂) is a gas whereas silicon dioxide (SiO₂) is a hard crystalline solid melting at 1713 °C. What accounts for this huge difference?",
        options: [
          "SiO₂ is a giant 3D covalent network requiring strong Si−O bonds to break on melting, whereas CO₂ has discrete molecules with weak London forces.",
          "SiO₂ forms an ionic lattice of Si⁴⁺ and O²⁻ ions, whereas CO₂ consists of covalent molecules linked by dipole–dipole attractions.",
          "Silicon has a much larger molar mass than carbon, making London dispersion forces between SiO₂ molecules strong enough to form a solid.",
          "The Si=O double bond in discrete SiO₂ molecules is far stronger than the C=O double bond in CO₂ molecules.",
        ],
        answerIndex: 0,
        hints: [
          "Check whether SiO₂ exists as discrete O=Si=O molecules or as an extended tetrahedral covalent network.",
          "Contrast the type of bonds or forces broken when melting SiO₂ versus subliming solid CO₂.",
        ],
        explanation:
          "SiO₂ (quartz) forms a giant covalent network in which each Si atom is tetrahedrally bonded to 4 O atoms and each O bridges 2 Si atoms; melting requires breaking strong covalent Si−O bonds throughout the lattice. CO₂ consists of discrete non-polar linear molecules held together solely by weak London dispersion forces.",
      },
      {
        id: "s2-bonding-materials-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "ionic-metallic-bonding",
        question:
          "What is the **total amount, in mol, of ions** (cations and anions combined) present in 0.50 mol of solid aluminium nitrate, Al(NO₃)₃?",
        options: ["1.5 mol", "2.0 mol", "2.5 mol", "4.0 mol"],
        answerIndex: 1,
        hints: [
          "Write the dissociation of one formula unit of Al(NO₃)₃ into Al³⁺ cations and NO₃⁻ polyatomic anions.",
          "Multiply the number of ions per formula unit by 0.50 mol.",
        ],
        explanation:
          "Each formula unit of Al(NO₃)₃ contains 1 Al³⁺ ion and 3 NO₃⁻ ions — a total of 4 ions per formula unit (polyatomic NO₃⁻ stays intact as a single ion!). Therefore 0.50 mol × 4 = 2.0 mol of ions. Counting 3 ions gives 1.5 mol, while forgetting to multiply by 0.50 gives 4.0 mol.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 1A · SET 2: VSEPR, IMFs, Bonding Triangle & Polymers (SL & HL)
  // answerIndex sequence: [1, 3, 0, 2, 3, 1, 0, 1, 3, 2, 0, 3, 1, 0, 2] -> [4,4,3,4]
  // ===========================================================================
  {
    id: "s2-bonding-materials-m2",
    title: "Paper 1A · Set 2: VSEPR, IMFs, Bonding Triangle & Polymers (SL & HL)",
    level: "SL",
    questions: [
      {
        id: "s2-bonding-materials-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Propan-1-ol (CH₃CH₂CH₂OH, M = 60.1 g mol⁻¹, bp 97 °C) and methoxyethane (CH₃OCH₂CH₃, M = 60.1 g mol⁻¹, bp 7 °C) are structural isomers. Why is the boiling point of propan-1-ol 90 °C higher?",
        options: [
          "Propan-1-ol has stronger intramolecular C−O covalent bonds that absorb more heat before vapourising.",
          "Propan-1-ol forms intermolecular hydrogen bonds via its −OH group, whereas methoxyethane only has dipole–dipole and London forces.",
          "Methoxyethane is completely non-polar so it experiences only London dispersion forces, whereas propan-1-ol is polar.",
          "Propan-1-ol contains more electrons per molecule than methoxyethane, greatly increasing its London dispersion forces.",
        ],
        answerIndex: 1,
        hints: [
          "Both isomers have the exact same formula C₃H₈O, so they have identical molar mass and identical electron count.",
          "Check which molecule has a hydrogen atom covalently bonded directly to oxygen.",
        ],
        explanation:
          "Both isomers have identical molar mass and electron count (similar London forces). Propan-1-ol has an −OH group allowing strong intermolecular hydrogen bonding, whereas methoxyethane has oxygen bonded only to carbons (no O−H bond), limiting it to weaker dipole–dipole and London forces. Boiling never breaks intramolecular covalent bonds.",
      },
      {
        id: "s2-bonding-materials-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Why do the boiling points of the halogens increase steadily down Group 17 from F₂ (−188 °C) to Cl₂ (−34 °C) to Br₂ (59 °C) to I₂ (184 °C)?",
        options: [
          "The covalent X−X single bond enthalpy increases steadily down Group 17 as atomic radius grows.",
          "Electronegativity increases down Group 17, producing stronger permanent dipole–dipole attractions between molecules.",
          "Hydrogen bonding becomes possible once halogen atoms acquire empty d orbitals in Periods 3 to 5.",
          "The total number of electrons per molecule increases, increasing polarizability and the strength of London dispersion forces.",
        ],
        answerIndex: 3,
        hints: [
          "All diatomic halogen molecules X₂ are completely non-polar, so only one type of intermolecular force operates.",
          "Recall how electron cloud size and polarizability affect instantaneous–induced dipole attractions.",
        ],
        explanation:
          "Diatomic X₂ molecules are non-polar, so the only intermolecular forces are London dispersion forces. Down Group 17, the number of electrons per molecule rises from 18 (F₂) to 106 (I₂), making electron clouds larger and more easily polarizable and strengthening London dispersion forces. Boiling breaks IMFs, not X−X covalent bonds.",
      },
      {
        id: "s2-bonding-materials-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Pentane (CH₃CH₂CH₂CH₂CH₃, bp 36 °C) and 2,2-dimethylpropane (C(CH₃)₄, bp 10 °C) have the same formula C₅H₁₂. Why does pentane have the higher boiling point?",
        options: [
          "Unbranched pentane molecules have a greater surface area of contact, giving stronger London dispersion forces than compact branched isomers.",
          "Pentane has a permanent molecular dipole along its zig-zag chain, whereas symmetrical 2,2-dimethylpropane is non-polar.",
          "Branching in 2,2-dimethylpropane weakens its intramolecular C−C single bonds, making the liquid easier to vapourise.",
          "Pentane contains more C−H bonds per molecule than 2,2-dimethylpropane, allowing weak hydrogen bonding between chains.",
        ],
        answerIndex: 0,
        hints: [
          "Both alkanes are non-polar with the exact same number of electrons (42 e⁻), so compare molecular shape.",
          "Think about how closely long straight rods can pack together compared with spheres.",
        ],
        explanation:
          "Both isomers are non-polar C₅H₁₂ molecules with identical electron counts. Straight-chain pentane has a larger surface area of contact between neighbouring molecules than nearly spherical 2,2-dimethylpropane, generating stronger London dispersion forces and a higher boiling point.",
      },
      {
        id: "s2-bonding-materials-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "covalent-vsepr-imfs",
        question:
          "In a thin-layer chromatography (TLC) separation of ink pigments, the solvent front advances 8.0 cm from the pencil baseline while a blue dye spot travels 5.2 cm. What is the retention factor, {{R_f}}, of the blue dye?",
        options: ["0.35", "0.52", "0.65", "1.54"],
        answerIndex: 2,
        hints: [
          "Recall that R_f is always the distance moved by the spot divided by the distance moved by the solvent front.",
          "A valid R_f value must always lie strictly between 0 and 1.",
        ],
        explanation:
          "Using R_f = d_spot / d_solvent = 5.2 cm / 8.0 cm = 0.65. Inverting the ratio gives 1.54 (impossible since a spot cannot outrun the solvent front), and subtracting from 1 gives 0.35.",
      },
      {
        id: "s2-bonding-materials-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Why does ice float on liquid water at 0 °C, unlike almost all other molecular substances whose solid phase is denser than their liquid phase?",
        options: [
          "The covalent O−H bond length increases sharply when water freezes, expanding each individual H₂O molecule.",
          "Air bubbles are chemically bonded inside every ice crystal during exothermic solidification.",
          "London dispersion forces repel water molecules further apart once kinetic energy falls below 273 K.",
          "Tetrahedral hydrogen bonding locks water molecules into an open lattice with more empty space than liquid water.",
        ],
        answerIndex: 3,
        hints: [
          "Count how many hydrogen bonds each H₂O molecule forms in solid ice (up to 4 in a tetrahedral network).",
          "Compare the packing efficiency of a rigid tetrahedral H-bonded framework versus a disordered liquid.",
        ],
        explanation:
          "In solid ice, each water molecule forms four directional hydrogen bonds in an open hexagonal tetrahedral lattice, creating cavities that increase volume and lower density (0.917 g cm⁻³) compared with liquid water (1.00 g cm⁻³), where molecules pack more closely as H-bonds continually break and reform.",
      },
      {
        id: "s2-bonding-materials-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "covalent-vsepr-imfs",
        question:
          "Which row correctly states the electron domain geometry, molecular geometry, and approximate bond angle of sulfur dioxide, SO₂?",
        options: [
          "Linear · Linear · 180°",
          "Trigonal planar · Bent (V-shaped) · ~117°",
          "Tetrahedral · Bent (V-shaped) · ~104.5°",
          "Trigonal planar · Trigonal planar · 120°",
        ],
        answerIndex: 1,
        hints: [
          "Count valence electrons in SO₂: 6 (S) + 2 × 6 (O) = 18 electrons.",
          "After bonding S to both O atoms and completing outer octets, 1 lone pair remains on S — giving 3 electron domains total.",
        ],
        explanation:
          "Sulfur in SO₂ has 2 bonding domains (to the two O atoms) plus 1 lone pair = 3 electron domains. Thus its electron domain geometry is trigonal planar, its molecular geometry is bent (V-shaped), and LP–BP repulsion compresses the O−S−O angle slightly below 120° to ~117° (actually 119°). Confusing SO₂ with H₂O (4 domains) gives the wrong 104.5° choice.",
      },
      {
        id: "s2-bonding-materials-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bonding-triangle-polymers",
        question:
          "Pauling electronegativities are Na = 0.9 and Cl = 3.2. What are the coordinates (average electronegativity {{χ_\"avg\"}}, electronegativity difference {{Δχ}}) of NaCl on the Van Arkel–Ketelaar bonding triangle?",
        options: [
          "χ_avg = 2.05, Δχ = 2.3",
          "χ_avg = 2.3, Δχ = 2.05",
          "χ_avg = 4.1, Δχ = 2.3",
          "χ_avg = 2.05, Δχ = 1.15",
        ],
        answerIndex: 0,
        hints: [
          "Compute the mean (χ_A + χ_B) / 2 for χ_avg and the absolute difference |χ_A − χ_B| for Δχ.",
          "Check (0.9 + 3.2) / 2 and |3.2 − 0.9| carefully.",
        ],
        explanation:
          "χ_avg = (0.9 + 3.2) / 2 = 4.1 / 2 = 2.05, and Δχ = |3.2 − 0.9| = 2.3. Since Δχ > 1.8, NaCl lies firmly inside the ionic region of the bonding triangle. Forgetting to divide by 2 gives χ_avg = 4.1, and halving Δχ gives 1.15.",
      },
      {
        id: "s2-bonding-materials-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "bonding-triangle-polymers",
        question:
          "Aluminium chloride (AlCl₃) consists of a metal (χ = 1.6) and a non-metal (χ = 3.2), yet it sublimes at 180 °C and barely conducts electricity when molten. How does the Van Arkel–Ketelaar bonding triangle account for this?",
        options: [
          "Its Δχ of 3.2 places it at the top ionic vertex, where lattice defects prevent conduction.",
          "Its coordinates (χ_avg = 2.4, Δχ = 1.6) place it in the polar covalent region rather than the ionic region.",
          "Its low χ_avg of 1.6 places it in the metallic region, forming a low-melting alloy with chlorine.",
          "Its Δχ of 0.8 places it in the pure non-polar covalent corner alongside F₂ and Cl₂.",
        ],
        answerIndex: 1,
        hints: [
          "Calculate χ_avg = (1.6 + 3.2) / 2 and Δχ = 3.2 − 1.6.",
          "Compare Δχ = 1.6 against the approximate ionic boundary near Δχ ≈ 1.8 on the IB bonding triangle.",
        ],
        explanation:
          "For AlCl₃, χ_avg = (1.6 + 3.2)/2 = 2.4 and Δχ = 3.2 − 1.6 = 1.6, placing it in the polar covalent region. High charge density on Al³⁺ strongly polarizes Cl⁻ electron clouds, yielding molecular Al₂Cl₆ dimers in the liquid/vapour phase with low sublimation point and negligible ionic conductivity.",
      },
      {
        id: "s2-bonding-materials-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "bonding-triangle-polymers",
        question:
          "Why is electronegativity difference ({{Δχ}}) **alone** insufficient to classify a substance's bonding type without also plotting average electronegativity ({{χ_\"avg\"}})?",
        options: [
          "Ionic compounds always have Δχ = 0, so χ_avg is needed to distinguish ionic lattices from alloys.",
          "Hydrogen-bonded liquids have negative Δχ values that only become positive when averaged.",
          "Covalent network solids have Δχ > 3.0, overlapping with ionic salts unless χ_avg separates them.",
          "Both pure metals (e.g. Na) and pure covalent elements (e.g. Cl₂) have Δχ = 0, so χ_avg separates metallic from covalent bonding.",
        ],
        answerIndex: 3,
        hints: [
          "Calculate Δχ for pure sodium metal (Na–Na) and for pure chlorine gas (Cl–Cl).",
          "Both give Δχ = 0, yet their bonding models are completely different — what property distinguishes Na from Cl?",
        ],
        explanation:
          "Any pure element — whether metallic Na (χ = 0.9) or covalent Cl₂ (χ = 3.2) — has Δχ = 0. Plotting χ_avg on the horizontal axis separates low-electronegativity metals (which delocalize electrons) on the bottom-left from high-electronegativity non-metals (which localize shared electron pairs) on the bottom-right.",
      },
      {
        id: "s2-bonding-materials-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "bonding-triangle-polymers",
        question:
          "High-carbon steel is an interstitial alloy containing roughly 1% carbon dispersed in iron. Why is steel much harder and less malleable than pure iron?",
        options: [
          "Carbon atoms react completely with iron to replace metallic bonding with a diamond-like covalent network.",
          "Carbon donates extra d electrons to the metallic sea, doubling iron's electrical conductivity and ductility.",
          "Smaller carbon atoms sit in gaps between iron cations, distorting regular planes so layers cannot slide easily.",
          "Carbon atoms replace half the iron cations with larger atoms, expanding the metallic lattice and preventing slip.",
        ],
        answerIndex: 2,
        hints: [
          "Remember that alloys are physical mixtures that retain metallic bonding rather than becoming giant covalent networks.",
          "Compare the atomic radius of carbon (much smaller) with iron and ask how interstitial atoms affect layer sliding.",
        ],
        explanation:
          "Carbon atoms are much smaller than iron atoms, so they occupy interstitial spaces within the iron cation lattice. This distorts the regular lattice planes and blocks dislocations from sliding smoothly under stress, greatly increasing hardness and reducing malleability while retaining metallic bonding.",
      },
      {
        id: "s2-bonding-materials-m2-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bonding-triangle-polymers",
        question:
          "Which repeat unit correctly represents **poly(propene)**, formed by addition polymerization of propene (CH₂=CHCH₃)?",
        options: [
          "−[CH₂−CH(CH₃)]−",
          "−[CH₂−CH₂−CH₂]−",
          "−[CH=CH−CH₃]−",
          "−[CH(CH₃)−CH(CH₃)]−",
        ],
        answerIndex: 0,
        hints: [
          "Only the two carbons of the C=C double bond become part of the polymer backbone!",
          "Redraw propene in an H-shape with CH₃ hanging off one of the two C=C carbons, then open the double bond.",
        ],
        explanation:
          "In addition polymerization, only the two carbons of the alkene C=C bond form the main backbone; the −CH₃ group remains a side branch attached to every second backbone carbon, giving −[CH₂−CH(CH₃)]−. Placing all three carbons in the backbone (−[CH₂−CH₂−CH₂]−) is the #1 SL exam mistake!",
      },
      {
        id: "s2-bonding-materials-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "bonding-triangle-polymers",
        question:
          "A chemically resistant fluoropolymer has the backbone section `−CH₂−CF₂−CH₂−CF₂−CH₂−CF₂−`. Which monomer underwent addition polymerization to form this polymer?",
        options: [
          "1,2-difluoroethene (CHF=CHF)",
          "Tetrafluoroethene (CF₂=CF₂)",
          "Fluoroethene (CH₂=CHF)",
          "1,1-difluoroethene (CH₂=CF₂)",
        ],
        answerIndex: 3,
        hints: [
          "Identify the smallest two-carbon repeat unit along the backbone.",
          "Remove the extension bonds from the two-carbon repeat unit and restore a C=C double bond between those two carbons.",
        ],
        explanation:
          "The two-carbon repeat unit is −[CH₂−CF₂]−. Removing the outer continuation bonds and restoring a C=C double bond between the two backbone carbons gives CH₂=CF₂ (1,1-difluoroethene). Polymerizing CHF=CHF would produce −[CHF−CHF]− instead.",
      },
      {
        id: "s2-bonding-materials-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "bonding-triangle-polymers",
        question:
          "Which pair of bifunctional monomers undergoes **condensation polymerization** to produce a **polyester** with elimination of water?",
        options: [
          "A diamine and a dicarboxylic acid",
          "A diol and a dicarboxylic acid",
          "A diol and a diamine",
          "An alkene and a halogenoalkane",
        ],
        answerIndex: 1,
        hints: [
          "Recall which two functional groups react during esterification to form an ester linkage (−COO−) and water.",
          "For a polymer chain to keep growing at both ends, each monomer needs two reactive functional groups.",
        ],
        explanation:
          "A diol (HO−R−OH) reacts with a dicarboxylic acid (HOOC−R′−COOH) to form repeating ester linkages (−COO−) and eliminate H₂O at each step, producing a polyester such as PET. A diamine + dicarboxylic acid forms a polyamide instead.",
      },
      {
        id: "s2-bonding-materials-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "bonding-triangle-polymers",
        question:
          "Why is nylon-6,6 (a polyamide) both much higher-melting than poly(ethene) of similar molar mass AND susceptible to chemical breakdown by hot aqueous acid?",
        options: [
          "Polar amide linkages (−CONH−) form strong inter-chain hydrogen bonds and can undergo hydrolysis, unlike inert non-polar C−C chains.",
          "Amide linkages contain ionic N⁺−O⁻ bonds that dissolve instantaneously in water while raising the polymer's lattice enthalpy.",
          "Polyamides contain residual C=C double bonds along the backbone that undergo rapid electrophilic addition with acid.",
          "Nylon-6,6 chains are cross-linked by covalent S−S bridges that resist melting until cleaved by strong hydrochloric acid.",
        ],
        answerIndex: 0,
        hints: [
          "Identify the intermolecular force between −N−H on one polyamide chain and C=O on an adjacent chain.",
          "Recall how condensation linkages (−CONH− and −COO−) react with water in acidic or alkaline conditions.",
        ],
        explanation:
          "Amide linkages (−CONH−) allow strong inter-chain hydrogen bonding (N−H···O=C), elevating melting point and tensile strength compared with poly(ethene)'s London forces. Simultaneously, polar C−N amide bonds can be cleaved by acid- or alkali-catalysed hydrolysis back to monomers, whereas poly(ethene)'s non-polar C−C backbone resists hydrolysis.",
      },
      {
        id: "s2-bonding-materials-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "ionic-metallic-bonding",
        question:
          "Why do first-row transition metals such as chromium (mp 1907 °C) and iron (mp 1538 °C) have far higher melting points than potassium (mp 64 °C) and calcium (mp 842 °C)?",
        options: [
          "Transition metals form directional covalent bonds between all neighbouring atoms rather than metallic lattices.",
          "Transition metals have much larger atomic radii than potassium and calcium, increasing London dispersion forces.",
          "Close energy spacing between 4s and 3d sublevels lets transition metals delocalize both 4s and unpaired 3d electrons.",
          "Potassium and calcium have fully filled 3d orbitals that shield their valence electrons from nuclear attraction.",
        ],
        answerIndex: 2,
        hints: [
          "Compare which valence sublevels contribute to the delocalized electron sea in s-block metals versus d-block metals.",
          "Remember how the 4s and 3d energies compare across the first transition series.",
        ],
        explanation:
          "Because the 3d and 4s sublevels are very close in energy, transition metals such as Cr and Fe delocalize both 4s and unpaired 3d electrons into the metallic sea alongside smaller ionic radii, creating much stronger metallic bonding than K (1 × 4s e⁻) or Ca (2 × 4s e⁻).",
      },
    ],
  },

  // ===========================================================================
  // PAPER 1A · SET 3: Expanded Octets, Resonance, Formal Charge & Hybridization (HL)
  // answerIndex sequence: [3, 1, 2, 0, 1, 3, 2, 0, 3, 1, 2, 3, 0, 2, 1] -> [3,4,4,4]
  // ===========================================================================
  {
    id: "s2-bonding-materials-m3",
    title: "Paper 1A · Set 3: Expanded Octets, Resonance & Hybridization (HL)",
    level: "HL",
    questions: [
      {
        id: "s2-bonding-materials-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "What are the **molecular geometry** and **overall polarity** of sulfur tetrafluoride, SF₄?",
        options: [
          "Tetrahedral and non-polar",
          "Square planar and non-polar",
          "Square pyramidal and polar",
          "Seesaw and polar",
        ],
        answerIndex: 3,
        hints: [
          "Count valence electrons in SF₄: 6 (S) + 4 × 7 (F) = 34 electrons.",
          "Four S−F bonds plus three lone pairs on each F use 32 e⁻, leaving 1 lone pair on S → 5 electron domains (4 BP, 1 LP).",
        ],
        explanation:
          "SF₄ has 5 electron domains around sulfur (4 bonding pairs + 1 lone pair). The electron domain geometry is trigonal bipyramidal; placing the lone pair in an equatorial position yields a **seesaw** molecular geometry. Because the structure is asymmetric, the four polar S−F dipoles do not cancel, making SF₄ **polar**.",
      },
      {
        id: "s2-bonding-materials-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "What are the **molecular geometry**, **F−Xe−F bond angle**, and **polarity** of xenon tetrafluoride, XeF₄?",
        options: [
          "Tetrahedral · 109.5° · non-polar",
          "Square planar · 90° · non-polar",
          "Seesaw · <90° and <120° · polar",
          "Square pyramidal · <90° · polar",
        ],
        answerIndex: 1,
        hints: [
          "Count valence electrons in XeF₄: 8 (Xe) + 4 × 7 (F) = 36 electrons.",
          "Four Xe−F bonds and 12 F lone pairs use 32 e⁻, leaving 2 lone pairs on Xe → 6 electron domains (4 BP, 2 LP).",
        ],
        explanation:
          "XeF₄ has 6 electron domains (octahedral electron domain geometry: 4 BP, 2 LP). To minimize LP–LP repulsion, the two lone pairs occupy opposite (trans, 180°) positions, leaving the four F atoms in a symmetric **square planar** geometry with 90° bond angles whose bond dipoles cancel completely (**non-polar**).",
      },
      {
        id: "s2-bonding-materials-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "What is the **molecular geometry** of the triiodide ion, I₃⁻?",
        options: [
          "Bent (~104.5°)",
          "Bent (~117°)",
          "Linear (180°)",
          "T-shaped (~88°)",
        ],
        answerIndex: 2,
        hints: [
          "Count valence electrons in I₃⁻: 3 × 7 + 1 (negative charge) = 22 electrons.",
          "After bonding two terminal I atoms (4 e⁻) and giving each 3 lone pairs (12 e⁻), 6 e⁻ (3 lone pairs) remain on the central I → 5 electron domains (2 BP, 3 LP).",
        ],
        explanation:
          "The central iodine in I₃⁻ has 2 bonding pairs and 3 lone pairs (5 electron domains, trigonal bipyramidal electron domain geometry). All three lone pairs occupy the three equatorial positions at 120° to each other, forcing the two bonding pairs into opposite axial positions to give a **linear (180°)** ion.",
      },
      {
        id: "s2-bonding-materials-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Which species has a **square pyramidal** molecular geometry?",
        options: ["BrF₅", "PCl₅", "SF₆", "ClF₃"],
        answerIndex: 0,
        hints: [
          "A square pyramidal geometry arises from 6 electron domains consisting of 5 bonding pairs and 1 lone pair.",
          "Count valence electrons on BrF₅: 7 + 5 × 7 = 42 electrons.",
        ],
        explanation:
          "BrF₅ has 42 valence electrons: 5 Br−F bonds + 15 F lone pairs use 40 e⁻, leaving 1 lone pair on Br → 6 electron domains (5 BP, 1 LP) = **square pyramidal**. PCl₅ is trigonal bipyramidal (5:0), SF₆ is octahedral (6:0), and ClF₃ is T-shaped (3:2).",
      },
      {
        id: "s2-bonding-materials-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Phosphorus forms phosphorus pentachloride (PCl₅), whereas nitrogen in the same group cannot form NCl₅. What is the fundamental reason?",
        options: [
          "Nitrogen has a lower electronegativity than chlorine and therefore cannot form polar covalent bonds with it.",
          "Nitrogen is in Period 2 (n = 2) with only four valence orbitals (2s and three 2p), so it cannot exceed an octet of eight electrons.",
          "Chlorine atoms repel each other more strongly around nitrogen because nitrogen has a larger atomic radius than phosphorus.",
          "Nitrogen forms metallic bonds with halogens at room temperature instead of discrete covalent molecules.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the principal energy levels (n = 2 vs n = 3) available for valence electrons in N and P.",
          "Count the maximum number of electrons that can fit in the n = 2 valence shell.",
        ],
        explanation:
          "Period 2 elements like nitrogen only have one 2s and three 2p orbitals in their valence shell (maximum 8 valence electrons — strict octet limit). Period 3 phosphorus is larger and has accessible n = 3 shell capacity to accommodate expanded-octet bonding (10 valence electrons in PCl₅).",
      },
      {
        id: "s2-bonding-materials-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Carbon monoxide is represented by the Lewis formula `:C≡O:` (one lone pair on C, one lone pair on O, and a triple bond between them). Using {{FC = V - N - (1/2)B}}, what are the formal charges on C and O respectively?",
        options: [
          "C = 0, O = 0",
          "C = +1, O = −1",
          "C = +2, O = −2",
          "C = −1, O = +1",
        ],
        answerIndex: 3,
        hints: [
          "For free atoms, carbon has V = 4 and oxygen has V = 6; each atom here has N = 2 non-bonding electrons and 3 bonds (½B = 3).",
          "Substitute carefully: carbon FC = 4 − 2 − 3 and oxygen FC = 6 − 2 − 3.",
        ],
        explanation:
          "For carbon: FC = 4 − 2 − 3 = −1. For oxygen: FC = 6 − 2 − 3 = +1 (sum = −1 + 1 = 0 ✓). This unexpected negative formal charge on C helps explain why CO has an unusually tiny dipole moment and coordinates to transition metals via its carbon atom! Reversing the signs confuses oxidation state (+2, −2) with formal charge.",
      },
      {
        id: "s2-bonding-materials-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Three valid octet Lewis structures for the linear thiocyanate ion (SCN⁻; Pauling χ: S = 2.6, C = 2.6, N = 3.0) are:\n- **I:** `[S=C=N]⁻` (2 lone pairs on S, 2 lone pairs on N)\n- **II:** `[S−C≡N]⁻` (3 lone pairs on S, 1 lone pair on N)\n- **III:** `[S≡C−N]⁻` (1 lone pair on S, 3 lone pairs on N)\n\nWhich structure is **most preferred** according to formal charge analysis?",
        options: [
          "Structure III, because nitrogen carries a −2 formal charge while carbon stays at 0.",
          "Structure II, because sulfur carries a −1 formal charge while nitrogen has a triple bond.",
          "Structure I, because all formal charges are 0 except −1 placed on the most electronegative atom (N).",
          "All three structures are equally preferred because every atom satisfies the octet rule in all three.",
        ],
        answerIndex: 2,
        hints: [
          "Calculate FC = V − N − ½B for S (V = 6), C (V = 4), and N (V = 5) in each of the three structures.",
          "Between two structures with the same set of formal charges (0, 0, −1), place the −1 on the more electronegative atom.",
        ],
        explanation:
          "Formal charges (S, C, N): Structure I = (0, 0, −1); Structure II = (−1, 0, 0); Structure III = (+1, 0, −2). Structure III has larger charge separation so it is disfavoured. Between I and II, N (χ = 3.0) is more electronegative than S (χ = 2.6), so placing −1 on N makes **Structure I** the preferred Lewis structure.",
      },
      {
        id: "s2-bonding-materials-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Which sequence correctly orders carbon–oxygen bond lengths from **shortest to longest** across CO, CO₂, CO₃²⁻, and CH₃OH?",
        options: [
          "CO < CO₂ < CO₃²⁻ < CH₃OH",
          "CH₃OH < CO₃²⁻ < CO₂ < CO",
          "CO < CO₃²⁻ < CO₂ < CH₃OH",
          "CO₂ < CO < CO₃²⁻ < CH₃OH",
        ],
        answerIndex: 0,
        hints: [
          "Determine the carbon–oxygen bond order in each species: triple (3), double (2), delocalized carbonate (4/3 = 1.33), single (1).",
          "Higher bond order pulls nuclei closer together, producing a shorter bond length.",
        ],
        explanation:
          "C–O bond orders decrease in the sequence CO (3.0) > CO₂ (2.0) > CO₃²⁻ (1.33, delocalized resonance hybrid) > CH₃OH (1.0). Because higher bond order gives a shorter bond, bond length increases from shortest to longest as CO < CO₂ < CO₃²⁻ < CH₃OH.",
      },
      {
        id: "s2-bonding-materials-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Why does stratospheric ozone (O₃) absorb **longer-wavelength** UV radiation (<330 nm) than diatomic oxygen (O₂, <242 nm)?",
        options: [
          "O₃ has a bond order of 2.5, requiring higher-energy, longer-wavelength photons for photodissociation.",
          "O₃ is a linear non-polar molecule whose vibrational modes directly convert infrared photons into UV absorption.",
          "O₂ contains three lone pairs per oxygen atom, creating greater repulsion and weaker bonds than in O₃.",
          "Delocalization gives O₃ a weaker bond order of 1.5 compared with 2.0 in O₂, so lower-energy, longer-wavelength UV dissociates it.",
        ],
        answerIndex: 3,
        hints: [
          "Recall how photon energy relates to wavelength: E = hc / λ (longer wavelength means LOWER photon energy).",
          "Compare the O–O bond order in O₂ (double bond, BO = 2.0) versus resonant O₃ (BO = 1.5).",
        ],
        explanation:
          "In O₃, delocalized π bonding yields two identical O–O bonds of bond order 1.5 (weaker than the bond order 2.0 double bond in O₂). Breaking a weaker bond requires lower photon energy E = hc/λ, which corresponds to **longer-wavelength** UV-B radiation (240–330 nm).",
      },
      {
        id: "s2-bonding-materials-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Which two propagation steps correctly represent the **catalytic** depletion of stratospheric ozone by chlorine radicals (Cl•) formed from CFCs?",
        options: [
          "Cl• + O₂ → ClO• + O•  followed by  ClO• + O₂ → Cl• + O₃",
          "Cl• + O₃ → ClO• + O₂  followed by  ClO• + O• → Cl• + O₂",
          "Cl₂ + O₃ → Cl₂O + O₂  followed by  Cl₂O + O₃ → Cl₂ + 2 O₂",
          "Cl• + O₃ → ClO₂• + O•  followed by  ClO₂• + O₃ → ClO• + 2 O₂",
        ],
        answerIndex: 1,
        hints: [
          "A catalyst must be consumed in Step 1 and regenerated unchanged in Step 2.",
          "Add both steps together: the net overall reaction must be O₃ + O• → 2 O₂.",
        ],
        explanation:
          "In Step 1, Cl• + O₃ → ClO• + O₂; in Step 2, ClO• + O• → Cl• + O₂. Adding both steps cancels Cl• and ClO• to give O₃ + O• → 2 O₂, regenerating the Cl• radical so a single radical catalytically destroys thousands of ozone molecules.",
      },
      {
        id: "s2-bonding-materials-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "How many **sigma (σ)** bonds and **pi (π)** bonds are present in one molecule of propyne, CH₃−C≡C−H?",
        options: [
          "5 σ bonds and 2 π bonds",
          "6 σ bonds and 1 π bond",
          "6 σ bonds and 2 π bonds",
          "8 σ bonds and 2 π bonds",
        ],
        answerIndex: 2,
        hints: [
          "Draw out every single C−H bond in CH₃−C≡C−H before counting!",
          "Every single bond = 1 σ; every triple bond = 1 σ + 2 π.",
        ],
        explanation:
          "Expanding CH₃−C≡C−H shows 4 C−H single bonds (4 σ), 1 C−C single bond (1 σ), and 1 C≡C triple bond (1 σ + 2 π). Total = 6 σ bonds and 2 π bonds (quick check for any acyclic molecule: σ bonds = total atoms − 1 = 7 − 1 = 6). Counting 8 σ double-counts the two π bonds as σ bonds.",
      },
      {
        id: "s2-bonding-materials-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "What is the hybridization of each carbon atom, reading from left to right as drawn, in but-2-enenitrile (`CH₃−CH=CH−C≡N`)?",
        options: [
          "sp³, sp³, sp², sp",
          "sp², sp², sp², sp",
          "sp³, sp, sp, sp²",
          "sp³, sp², sp², sp",
        ],
        answerIndex: 3,
        hints: [
          "Count electron domains around each carbon: 4 domains → sp³, 3 domains → sp², 2 domains → sp.",
          "Remember that a double or triple bond counts as ONE electron domain.",
        ],
        explanation:
          "C1 (CH₃−) has 4 single bonds (4 domains → sp³); C2 (−CH=) has 2 single + 1 double bond (3 domains → sp²); C3 (=CH−) has 1 double + 2 single bonds (3 domains → sp²); C4 (−C≡N) has 1 single + 1 triple bond (2 domains → sp). Sequence: sp³, sp², sp², sp.",
      },
      {
        id: "s2-bonding-materials-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "What is the hybridization of the central atom in **ammonia (NH₃)** and in **water (H₂O)** respectively?",
        options: [
          "sp³ in NH₃ and sp³ in H₂O",
          "sp² in NH₃ and sp in H₂O",
          "sp³ in NH₃ and sp² in H₂O",
          "sp² in NH₃ and sp³ in H₂O",
        ],
        answerIndex: 0,
        hints: [
          "Hybridization depends on the total number of electron domains (bonding pairs PLUS lone pairs!), not just attached atoms.",
          "Count total electron domains on N in NH₃ (3 BP + 1 LP) and on O in H₂O (2 BP + 2 LP).",
        ],
        explanation:
          "Both N in NH₃ (3 BP + 1 LP) and O in H₂O (2 BP + 2 LP) have **4 electron domains** arranged tetrahedrally, so both central atoms are **sp³ hybridized** (their lone pairs reside in sp³ hybrid orbitals). Answering sp² and sp forgets to include lone pairs as electron domains.",
      },
      {
        id: "s2-bonding-materials-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Which row correctly gives the carbon hybridization in **diamond**, **graphite**, and **buckminsterfullerene (C₆₀)**?",
        options: [
          "Diamond: sp³ · Graphite: sp² · C₆₀: sp",
          "Diamond: sp² · Graphite: sp³ · C₆₀: sp²",
          "Diamond: sp³ · Graphite: sp² · C₆₀: sp²",
          "Diamond: sp³ · Graphite: sp · C₆₀: sp²",
        ],
        answerIndex: 2,
        hints: [
          "Count how many neighbouring carbon atoms each carbon is bonded to in diamond (4), graphite (3), and C₆₀ (3).",
          "Three bonding domains with one delocalized p electron corresponds to sp² hybridization.",
        ],
        explanation:
          "In diamond, each carbon forms 4 σ bonds (4 domains → sp³). In both graphite and C₆₀ fullerene, each carbon is bonded to 3 neighbouring carbons (3 domains → sp²), leaving one unhybridized 2p orbital per atom for π delocalization (extended across sheets in graphite, or across the closed cage in C₆₀).",
      },
      {
        id: "s2-bonding-materials-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "expanded-octets-hybridization-hl",
        question:
          "Why is rotation around the C=C bond in but-2-ene restricted at 298 K, whereas rotation around the C−C single bond in butane occurs freely?",
        options: [
          "The C=C bond consists of two parallel σ bonds whose axial overlap locks the carbons in place.",
          "The C=C bond contains a π bond from sideways p-orbital overlap that would break on twisting, unlike an axially symmetric σ bond.",
          "sp² hybrid orbitals are too short to spin around the carbon–carbon axis without colliding with methyl hydrogens.",
          "Hydrogen bonding between adjacent methyl groups on C=C carbons prevents free rotation at room temperature.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the orbital overlap geometry of a σ bond (cylindrically symmetric along the axis) with a π bond (sideways overlap above and below the axis).",
          "Ask what happens to two parallel p orbitals if one carbon rotates by 90° relative to the other.",
        ],
        explanation:
          "A C−C σ bond has cylindrical electron density along the internuclear axis, so rotation preserves full overlap. A C=C double bond includes a π bond formed by sideways overlap of parallel unhybridized 2p orbitals; rotating by 90° twists the p orbitals perpendicular and breaks the π bond (~268 kJ mol⁻¹ barrier), restricting rotation.",
      },
    ],
  },
];
