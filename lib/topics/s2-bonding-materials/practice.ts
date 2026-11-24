import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK DIAGNOSTIC QUIZ (10 questions: 4 balanced MCQs + 6 ShortQs)
  // MCQ answerIndex spread: [1, 3, 0, 2] -> [1,1,1,1]
  // ===========================================================================
  quiz: [
    {
      id: "s2-bonding-materials-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "ionic-metallic-bonding",
      question:
        "How many total ions (cations and anions combined) are present in one formula unit of ammonium carbonate, (NH₄)₂CO₃?",
      answer: { type: "number", value: 3 },
      traps: [
        {
          spec: { type: "number", value: 14 },
          feedback: "14 is the total number of atoms — count intact polyatomic ions (NH₄⁺ and CO₃²⁻) instead.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "Remember the subscript 2 outside (NH₄) gives two NH₄⁺ ions plus one CO₃²⁻ ion.",
        },
      ],
      hints: [
        "Identify the polyatomic cation (NH₄⁺) and polyatomic anion (CO₃²⁻) inside the formula.",
      ],
      solution: [
        "One formula unit of (NH₄)₂CO₃ contains 2 NH₄⁺ cations and 1 CO₃²⁻ anion.",
        "Total ions = 2 + 1 = **3**.",
      ],
      commonError: "Counting individual atoms inside polyatomic ions (14) instead of counting intact ions (3).",
    },
    {
      id: "s2-bonding-materials-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "ionic-metallic-bonding",
      question:
        "Why does an aqueous solution of magnesium chloride, MgCl₂(aq), conduct an electric current?",
      options: [
        "Magnesium atoms release delocalized valence electrons into the water.",
        "Hydrated Mg²⁺ and Cl⁻ ions are free to move toward opposite electrodes.",
        "Water molecules break into H₂ and O₂ gas molecules that carry charge.",
        "Covalent MgCl₂ molecules align their permanent dipoles along the wire.",
      ],
      answerIndex: 1,
      hints: [
        "Ionic compounds dissociate into mobile cations and anions when dissolved in water.",
      ],
      explanation:
        "Dissolving MgCl₂ in water breaks the crystal lattice and frees hydrated Mg²⁺ and Cl⁻ ions, which act as mobile charge carriers. Aqueous salts conduct via mobile ions, never delocalized electrons.",
    },
    {
      id: "s2-bonding-materials-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "covalent-vsepr-imfs",
      question:
        "State the ideal H−C−H bond angle, in degrees, in a methane (CH₄) molecule.",
      answer: { type: "number", value: 109.5, tolerance: 0.1, display: "109.5°" },
      traps: [
        {
          spec: { type: "number", value: 90 },
          feedback: "90° assumes a flat 2D square — methane adopts a 3D tetrahedral geometry.",
        },
        {
          spec: { type: "number", value: 120 },
          feedback: "120° is for 3 electron domains (trigonal planar); CH₄ has 4 electron domains.",
        },
      ],
      hints: [
        "Carbon in CH₄ has 4 bonding domains and 0 lone pairs, adopting a 3D tetrahedral geometry.",
      ],
      solution: [
        "Four identical bonding domains minimize repulsion in 3D space at the corners of a regular tetrahedron.",
        "The tetrahedral bond angle is **109.5°**.",
      ],
    },
    {
      id: "s2-bonding-materials-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "covalent-vsepr-imfs",
      question:
        "Which liquid forms intermolecular **hydrogen bonds** between its own molecules?",
      options: [
        "Propanone (CH₃COCH₃)",
        "Methoxymethane (CH₃OCH₃)",
        "Ethanal (CH₃CHO)",
        "Ethanol (CH₃CH₂OH)",
      ],
      answerIndex: 3,
      hints: [
        "Hydrogen bonding between identical molecules requires an H atom covalently bonded directly to F, O, or N.",
        "Check whether the oxygen atom in each molecule is attached to a hydrogen atom or only to carbon atoms.",
      ],
      explanation:
        "Only ethanol (CH₃CH₂OH) has a hydrogen atom covalently bonded directly to oxygen (−O−H), allowing strong intermolecular hydrogen bonding. Propanone, methoxymethane, and ethanal have oxygen bonded only to carbon, so their pure liquids cannot hydrogen-bond to themselves.",
    },
    {
      id: "s2-bonding-materials-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "covalent-vsepr-imfs",
      question:
        "In a paper chromatography experiment, the solvent front travels 7.5 cm from the origin and a yellow dye spot travels 4.5 cm. Calculate the retention factor, {{R_f}}, of the yellow dye (to 2 decimal places).",
      answer: { type: "number", value: 0.6, tolerance: 0.01, display: "0.60" },
      traps: [
        {
          spec: { type: "number", value: 1.67, tolerance: 0.05 },
          feedback: "You inverted the formula — R_f is spot distance divided by solvent-front distance, always ≤ 1.",
        },
      ],
      hints: [
        "Use the chromatography formula {{R_f = d_\"spot\" / d_\"solvent\"}}.",
        "Divide 4.5 cm by 7.5 cm.",
      ],
      solution: [
        "{{R_f = 4.5 / 7.5 = 0.60}}.",
      ],
    },
    {
      id: "s2-bonding-materials-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "bonding-triangle-polymers",
      question:
        "Using Pauling electronegativities K = 0.8 and Br = 3.0, in which region of the Van Arkel–Ketelaar bonding triangle does potassium bromide (KBr) lie?",
      options: [
        "Ionic (χ_avg = 1.9, Δχ = 2.2)",
        "Polar covalent (χ_avg = 1.9, Δχ = 2.2)",
        "Metallic (χ_avg = 2.2, Δχ = 1.9)",
        "Non-polar covalent (χ_avg = 3.8, Δχ = 0.8)",
      ],
      answerIndex: 0,
      hints: [
        "Calculate {{χ_\"avg\" = (0.8 + 3.0)/2}} and {{Δχ = |3.0 - 0.8|}}.",
        "Compare Δχ against the ionic threshold of ~1.8 on the bonding triangle.",
      ],
      explanation:
        "For KBr, χ_avg = (0.8 + 3.0)/2 = 1.9 and Δχ = 3.0 − 0.8 = 2.2. Because Δχ = 2.2 > 1.8, KBr lies squarely in the **ionic** region of the Van Arkel–Ketelaar bonding triangle.",
    },
    {
      id: "s2-bonding-materials-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "bonding-triangle-polymers",
      question:
        "Given Pauling electronegativities Si = 1.9 and C = 2.6, calculate the average electronegativity, {{χ_\"avg\"}}, of silicon carbide (SiC) to 2 decimal places.",
      answer: { type: "number", value: 2.25, tolerance: 0.01 },
      traps: [
        {
          spec: { type: "number", value: 0.7, tolerance: 0.01 },
          feedback: "0.7 is the electronegativity difference Δχ; this question asks for the average (χ_Si + χ_C) / 2.",
        },
        {
          spec: { type: "number", value: 4.5, tolerance: 0.01 },
          feedback: "Remember to divide the sum (1.9 + 2.6 = 4.5) by 2 to obtain the average.",
        },
      ],
      hints: [
        "Average electronegativity is the mean of the two Pauling values: {{(χ_A + χ_B)/2}}.",
        "Compute (1.9 + 2.6) / 2.",
      ],
      solution: [
        "{{χ_\"avg\" = (1.9 + 2.6) / 2 = 4.5 / 2 = 2.25}}.",
      ],
    },
    {
      id: "s2-bonding-materials-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "expanded-octets-hybridization-hl",
      question:
        "Chlorine trifluoride (ClF₃) has 5 electron domains around the central chlorine atom (3 bonding pairs and 2 lone pairs). What is its **molecular geometry**?",
      options: [
        "Trigonal planar",
        "Trigonal pyramidal",
        "T-shaped",
        "Seesaw",
      ],
      answerIndex: 2,
      hints: [
        "In a 5-domain trigonal bipyramid, lone pairs always occupy equatorial positions first.",
        "Removing two equatorial positions from a trigonal bipyramid leaves two axial F atoms and one equatorial F atom.",
      ],
      explanation:
        "Placing both lone pairs in equatorial positions of the trigonal bipyramid minimizes 90° repulsions, leaving two axial F atoms and one equatorial F atom arranged in a **T-shaped** molecular geometry (F−Cl−F ≈ 87.5°). Seesaw has 4 bonding pairs and 1 lone pair.",
    },
    {
      id: "s2-bonding-materials-quiz-q09",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "expanded-octets-hybridization-hl",
      question:
        "In one resonance structure of ozone (O₃), the central oxygen atom forms one double bond, one single bond, and carries one lone pair. Using {{FC = V - N - (1/2)B}}, calculate the formal charge on the central oxygen atom.",
      answer: { type: "number", value: 1, display: "+1" },
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "Check V = 6, N = 2 non-bonding electrons, and 3 covalent bonds (½B = 3): 6 − 2 − 3 ≠ 0.",
        },
        {
          spec: { type: "number", value: -1 },
          feedback: "−1 is the formal charge on the singly bonded terminal oxygen atom, not the central oxygen.",
        },
      ],
      hints: [
        "Oxygen is in Group 16, so V = 6 valence electrons.",
        "Count N = 2 (one lone pair) and ½B = 3 (one double bond + one single bond = 3 bonding pairs).",
      ],
      solution: [
        "For central O: V = 6, N = 2 (1 lone pair), ½B = 3 (3 covalent bonds).",
        "{{FC = 6 - 2 - 3 = +1}}.",
      ],
    },
    {
      id: "s2-bonding-materials-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "expanded-octets-hybridization-hl",
      question:
        "How many **sigma (σ) bonds** in total are present in one molecule of ethanenitrile, `CH₃−C≡N`?",
      answer: { type: "number", value: 5 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "Do not forget the three C−H single bonds on the methyl group!",
        },
        {
          spec: { type: "number", value: 7 },
          feedback: "7 counts the two π bonds in C≡N as σ bonds — a triple bond has only 1 σ bond (plus 2 π bonds).",
        },
      ],
      hints: [
        "Expand the −CH₃ group into three individual C−H single bonds first.",
        "Count 1 σ bond for every single bond and 1 σ bond for the C≡N triple bond.",
      ],
      solution: [
        "Expand `CH₃−C≡N`: 3 C−H single bonds (3 σ) + 1 C−C single bond (1 σ) + 1 C≡N triple bond (1 σ + 2 π).",
        "Total σ bonds = 3 + 1 + 1 = **5**.",
      ],
      commonError: "Forgetting C−H σ bonds in condensed organic formulas or counting π bonds as σ bonds.",
    },
  ],

  // ===========================================================================
  // STRUCTURED PRACTICE PAPERS (p1: 15 Qs SL; p2: 15 Qs HL/SL)
  // ===========================================================================
  papers: [
    {
      id: "s2-bonding-materials-p1",
      title: "Paper 2 · Core Structured Practice (SL)",
      level: "SL",
      questions: [
        {
          id: "s2-bonding-materials-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "ionic-metallic-bonding",
          question:
            "Deduce the empirical chemical formula of the ionic compound formed between magnesium (Group 2) and nitrogen (Group 15). Type plain digits without spaces.",
          answer: { type: "text", accept: ["Mg3N2", "Mg₃N₂"], display: "Mg₃N₂" },
          traps: [
            {
              spec: { type: "text", accept: ["Mg2N3", "Mg₂N₃"] },
              feedback: "Check charge balance: 2 × Mg²⁺ (+4) and 3 × N³⁻ (−9) does not equal zero — swap the subscripts!",
            },
            {
              spec: { type: "text", accept: ["MgN"] },
              feedback: "Magnesium forms Mg²⁺ and nitride is N³⁻, so a 1 : 1 ratio is not electrically neutral.",
            },
          ],
          hints: [
            "Determine the ion charges from group numbers: Group 2 loses 2 e⁻, Group 15 gains 3 e⁻.",
          ],
          solution: [
            "Magnesium forms Mg²⁺ and nitrogen forms the nitride ion N³⁻.",
            "Balancing charges to the lowest common multiple 6 requires 3 Mg²⁺ (+6) and 2 N³⁻ (−6) → **Mg₃N₂**.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q02",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "ionic-metallic-bonding",
          marks: 3,
          question:
            "Calcium oxide (CaO, mp 2613 °C) and potassium chloride (KCl, mp 770 °C) both adopt the rock-salt crystal lattice with comparable inter-ionic distances. Explain why CaO has a much higher melting point than KCl.",
          hints: [
            "State the exact charges on the ions in CaO versus KCl.",
            "Link ionic charge (and smaller ionic radii of Ca²⁺ and O²⁻) to stronger electrostatic attraction and higher lattice enthalpy.",
          ],
          modelAnswer:
            "Calcium oxide consists of doubly charged Ca²⁺ and O²⁻ ions, whereas potassium chloride contains singly charged K⁺ and Cl⁻ ions. In addition, Ca²⁺ and O²⁻ have smaller ionic radii than K⁺ and Cl⁻, producing higher charge density. Consequently, the electrostatic attraction between oppositely charged ions (lattice enthalpy) is much stronger in CaO, requiring far more thermal energy to overcome during melting.",
          markScheme: [
            {
              point: "CaO has 2+/2− ions (Ca²⁺, O²⁻) whereas KCl has 1+/1− ions (K⁺, Cl⁻).",
              keywords: ["doubly charged", "2+", "ca2+", "singly charged"],
            },
            {
              point: "Smaller ionic radii / greater charge density in CaO (Ca²⁺ and O²⁻ are smaller than K⁺ and Cl⁻).",
              keywords: ["smaller ionic radi", "charge density", "shorter distance"],
            },
            {
              point: "Stronger electrostatic attraction between oppositely charged ions (higher lattice enthalpy), requiring more energy to overcome.",
              keywords: ["stronger electrostatic", "lattice enthalpy", "more thermal energy"],
            },
          ],
          commonError: "Referring to 'intermolecular forces' or 'covalent bonds' inside an ionic crystal lattice.",
        },
        {
          id: "s2-bonding-materials-p1-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "ionic-metallic-bonding",
          marks: 3,
          question:
            "Compare and contrast the electrical conductivity of solid sodium chloride, molten sodium chloride, and solid sodium metal by identifying the mobile charge carriers in each case.",
          hints: [
            "Electrical conductivity always depends on whether charged particles are free to move.",
            "Distinguish mobile ions (in molten ionic salts) from delocalized electrons (in metals).",
          ],
          modelAnswer:
            "Solid sodium chloride does not conduct electricity because its Na⁺ and Cl⁻ ions are held rigidly in fixed lattice positions and cannot move. Molten sodium chloride conducts electricity because thermal energy breaks down the lattice, freeing mobile Na⁺ and Cl⁻ ions to migrate to opposite electrodes. Solid sodium metal conducts electricity because its valence electrons are delocalized throughout the metallic lattice and drift freely under an applied potential difference.",
          markScheme: [
            {
              point: "Solid NaCl is an insulator because ions are fixed in the lattice and cannot move.",
              keywords: ["fixed", "cannot move", "rigidly", "insulator"],
            },
            {
              point: "Molten NaCl conducts via mobile ions (Na⁺ and Cl⁻).",
              keywords: ["mobile", "ions"],
            },
            {
              point: "Solid Na conducts via delocalized (mobile) valence electrons.",
              keywords: ["delocalized", "delocalised", "sea of electrons"],
            },
          ],
          commonError: "Claiming molten NaCl conducts electricity because of 'free electrons' rather than mobile ions.",
        },
        {
          id: "s2-bonding-materials-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "ionic-metallic-bonding",
          question:
            "Calculate the total amount, in mol, of ions (cations and anions combined) present in 0.25 mol of calcium phosphate, Ca₃(PO₄)₂.",
          answer: { type: "number", value: 1.25, tolerance: 0.01, display: "1.25 mol" },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "5 is the number of ions per formula unit — multiply by 0.25 mol!",
            },
            {
              spec: { type: "number", value: 3.25, tolerance: 0.01 },
              feedback: "Do not break the polyatomic PO₄³⁻ ions into individual P and O atoms!",
            },
          ],
          hints: [
            "Count the total number of Ca²⁺ and PO₄³⁻ ions in one formula unit of Ca₃(PO₄)₂.",
            "Multiply the ion count per formula unit (5) by 0.25 mol.",
          ],
          solution: [
            "One formula unit of Ca₃(PO₄)₂ dissociates into 3 Ca²⁺ + 2 PO₄³⁻ = 5 ions.",
            "Total amount of ions = 0.25 mol × 5 = **1.25 mol**.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q05",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "covalent-vsepr-imfs",
          question:
            "How many **lone pairs** of electrons are located on the central phosphorus atom in a molecule of phosphorus trichloride, PCl₃?",
          answer: { type: "number", value: 1 },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "10 is the total number of lone pairs across the entire molecule (including the 9 on the three Cl atoms); focus on the central P atom only.",
            },
            {
              spec: { type: "number", value: 2 },
              feedback: "2 is the number of non-bonding electrons on P, which equals 1 lone pair.",
            },
          ],
          hints: [
            "Phosphorus is in Group 15 (5 valence electrons) and forms 3 single covalent bonds with Cl.",
          ],
          solution: [
            "P has 5 valence electrons; 3 are used to form three P−Cl single bonds.",
            "Remaining non-bonding electrons on P = 5 − 3 = 2 electrons = **1 lone pair**.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "covalent-vsepr-imfs",
          question:
            "State the **molecular geometry** of carbon disulfide, CS₂.",
          answer: { type: "text", accept: ["linear"], display: "linear" },
          traps: [
            {
              spec: { type: "text", accept: ["bent", "v-shaped", "angular"] },
              feedback: "Check the valence electrons on carbon: S=C=S has zero lone pairs on carbon, unlike H₂O or SO₂.",
            },
          ],
          hints: [
            "Sulfur is in Group 16 (just like oxygen), so CS₂ has the same Lewis structure as CO₂.",
            "Count electron domains on the central carbon atom (each C=S double bond counts as one domain).",
          ],
          solution: [
            "CS₂ has Lewis structure :S=C=S: with 2 bonding domains and 0 lone pairs on carbon.",
            "Two domains arrange 180° apart, giving a **linear** molecular geometry.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "covalent-vsepr-imfs",
          marks: 4,
          question:
            "Methane (CH₄), ammonia (NH₃), and water (H₂O) have bond angles of 109.5°, 107°, and 104.5° respectively. Explain this progression using VSEPR theory, naming the molecular geometry of each species and identifying which molecules are polar.",
          hints: [
            "Start by stating that all three have 4 electron domains (tetrahedral electron domain geometry).",
            "Distinguish the number of bonding pairs and lone pairs in CH₄ (4:0), NH₃ (3:1), and H₂O (2:2), and apply LP–LP > LP–BP > BP–BP.",
            "Connect each molecular geometry to whether bond dipoles cancel or reinforce.",
          ],
          modelAnswer:
            "All three molecules have 4 electron domains around their central atom and therefore share a tetrahedral electron domain geometry. CH₄ has 4 bonding pairs and 0 lone pairs (tetrahedral molecular geometry, 109.5°), NH₃ has 3 bonding pairs and 1 lone pair (trigonal pyramidal, 107°), and H₂O has 2 bonding pairs and 2 lone pairs (bent / V-shaped, 104.5°). Because lone pairs are held closer to one nucleus and occupy more space than bonding pairs, repulsion decreases in the order LP–LP > LP–BP > BP–BP, compressing the H−X−H bond angle by ~2.5° per lone pair. Symmetric CH₄ is non-polar because its bond dipoles cancel, whereas asymmetric NH₃ and H₂O are polar with net dipole moments.",
          markScheme: [
            {
              point: "All three species have 4 electron domains (tetrahedral electron domain geometry).",
              keywords: ["4 electron domains", "four electron domains", "tetrahedral electron"],
            },
            {
              point: "Correct molecular geometries: CH₄ tetrahedral (0 LP), NH₃ trigonal pyramidal (1 LP), H₂O bent / V-shaped (2 LP).",
              keywords: ["trigonal pyramidal", "bent"],
            },
            {
              point: "Repulsion hierarchy LP–LP > LP–BP > BP–BP causes lone pairs to compress bonding angles.",
              keywords: ["lp-lp", "lp–lp", "lone pairs repel more", "greater repulsion"],
            },
            {
              point: "Polarity deduced from symmetry: CH₄ non-polar (dipoles cancel); NH₃ and H₂O polar (asymmetric, net dipole).",
              keywords: ["non-polar", "nonpolar", "dipoles cancel", "asymmetric"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies 4 electron domains or names shapes/polarity partially, without linking lone-pair repulsion cleanly to angle compression.",
              indicators: ["Mentions lone pairs or tetrahedral arrangement", "Incomplete molecular geometry or polarity reasoning"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Clearly links 4 domains, exact molecular geometries (tetrahedral, trigonal pyramidal, bent), LP–LP > LP–BP > BP–BP repulsion, and symmetry-based polarity.",
              indicators: ["Distinguishes electron domain geometry from molecular geometry", "Explicitly explains dipole cancellation vs net dipole"],
            },
          ],
          commonError: "Calling the molecular geometry of NH₃ or H₂O 'tetrahedral' instead of trigonal pyramidal and bent.",
        },
        {
          id: "s2-bonding-materials-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "covalent-vsepr-imfs",
          marks: 3,
          question:
            "Ethanol (CH₃CH₂OH, M = 46.1 g mol⁻¹, bp 78 °C) is completely miscible with water and boils 102 °C higher than its isomer methoxymethane (CH₃OCH₃, M = 46.1 g mol⁻¹, bp −24 °C). Account for both differences in terms of intermolecular forces.",
          hints: [
            "Note that both isomers have the same molar mass, so their London dispersion forces are comparable.",
            "Identify which isomer can form intermolecular hydrogen bonds between its own molecules and with water.",
          ],
          modelAnswer:
            "Both isomers have the same molar mass (46.1 g mol⁻¹), so their London dispersion forces are similar. Ethanol has a hydroxyl (−OH) group with H bonded directly to electronegative O, enabling strong intermolecular hydrogen bonds between ethanol molecules that require much more thermal energy to overcome than the weaker permanent dipole–dipole attractions in methoxymethane (which lacks an O−H bond). Furthermore, ethanol's −OH group forms strong hydrogen bonds with water molecules, making ethanol completely miscible with water.",
          markScheme: [
            {
              point: "Ethanol forms intermolecular hydrogen bonds via its −OH group (H bonded directly to O).",
              keywords: ["hydrogen bond", "hydroxyl", "-oh"],
            },
            {
              point: "Methoxymethane lacks O−H so only has weaker dipole–dipole (and London) forces; breaking ethanol's stronger IMFs needs more thermal energy.",
              keywords: ["dipole-dipole", "dipole–dipole", "lacks an o-h", "no o-h"],
            },
            {
              point: "Miscibility arises because ethanol forms hydrogen bonds directly with water molecules.",
              keywords: ["with water", "miscible", "hydrogen bonds with water"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "covalent-vsepr-imfs",
          marks: 4,
          question:
            "Compare and contrast the structure, bonding, electrical conductivity, and hardness of **diamond** and **graphite**.",
          hints: [
            "Begin with their shared feature: both are giant covalent network allotropes of carbon with very high melting points.",
            "Contrast coordination number (4 vs 3), 3D tetrahedral network vs 2D hexagonal layers with weak inter-layer London forces, and delocalized electrons.",
          ],
          modelAnswer:
            "Both diamond and graphite are giant covalent network allotropes of carbon with very high melting/sublimation points because strong C−C covalent bonds must be broken. In diamond, each carbon is covalently bonded to 4 other carbons in a rigid 3D tetrahedral network (109.5°), making it extremely hard and an electrical insulator because all 4 valence electrons are localized in bonds. In graphite, each carbon bonds to 3 other carbons in planar hexagonal layers (120°), leaving 1 delocalized valence electron per atom that conducts electricity parallel to the layers; weak London dispersion forces between layers allow sheets to slide over each other, making graphite soft and slippery.",
          markScheme: [
            {
              point: "Both are giant covalent structures of carbon with strong C−C covalent bonds and very high melting/sublimation points.",
              keywords: ["giant covalent", "allotropes"],
            },
            {
              point: "Diamond: each C bonded to 4 C in a 3D tetrahedral lattice → extremely hard, no delocalized electrons (insulator).",
              keywords: ["tetrahedral", "4 other", "four other", "insulator", "localized"],
            },
            {
              point: "Graphite: each C bonded to 3 C in hexagonal layers leaving 1 delocalized electron per C → conducts electricity along layers.",
              keywords: ["hexagonal", "3 other", "three other", "delocalized", "delocalised"],
            },
            {
              point: "Graphite is soft/lubricating because weak London dispersion forces between layers allow layers to slide.",
              keywords: ["london dispersion", "layers slide", "slide over", "soft"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States macroscopic properties (hard/soft, conductor/insulator) with partial structural explanation.",
              indicators: ["Mentions layers in graphite or tetrahedral diamond", "Omits inter-layer London forces or localized vs delocalized electrons"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Provides a complete structural comparison linking coordination number (4 vs 3), localized vs delocalized electrons, and 3D network vs sliding layers with London forces.",
              indicators: ["Explicitly includes both similarities and contrasts", "Correctly explains conductivity and hardness from structure"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "covalent-vsepr-imfs",
          question:
            "On a thin-layer chromatography (TLC) plate, the solvent front moves 9.6 cm from the origin. A pharmaceutical compound X has a known retention factor of {{R_f = 0.75}} in this solvent. Calculate the distance, in cm, that spot X travels from the origin.",
          answer: { type: "number", value: 7.2, tolerance: 0.05, display: "7.2 cm" },
          traps: [
            {
              spec: { type: "number", value: 12.8, tolerance: 0.1 },
              feedback: "You divided 9.6 by 0.75 — a spot cannot travel farther than the solvent front! Multiply R_f × d_solvent.",
            },
          ],
          hints: [
            "Rearrange {{R_f = d_\"spot\" / d_\"solvent\"}} to solve for {{d_\"spot\"}}.",
            "Multiply 0.75 × 9.6 cm.",
          ],
          solution: [
            "{{d_\"spot\" = R_f * d_\"solvent\" = 0.75 * 9.6 = 7.2}} cm.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bonding-triangle-polymers",
          question:
            "Given Pauling electronegativities Be = 1.6 and Cl = 3.2, calculate the electronegativity difference, {{Δχ}}, for beryllium chloride (BeCl₂) to 1 decimal place.",
          answer: { type: "number", value: 1.6, tolerance: 0.01 },
          traps: [
            {
              spec: { type: "number", value: 2.4, tolerance: 0.01 },
              feedback: "2.4 is the average electronegativity χ_avg; this question asks for the difference Δχ = |χ_Cl − χ_Be|.",
            },
          ],
          hints: [
            "Use {{Δχ = |χ_\"Cl\" - χ_\"Be\"|}} — do not multiply χ_Cl by the subscript 2!",
            "Subtract 1.6 from 3.2.",
          ],
          solution: [
            "{{Δχ = |3.2 - 1.6| = 1.6}} (placing BeCl₂ in the polar covalent region despite containing a metal and non-metal).",
          ],
          commonError: "Multiplying electronegativity values by stoichiometric subscripts (e.g. 2 × 3.2) when calculating Δχ or χ_avg.",
        },
        {
          id: "s2-bonding-materials-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bonding-triangle-polymers",
          question:
            "Bronze is an alloy of copper (Pauling χ = 1.9) and tin (Pauling χ = 2.0). Calculate the average electronegativity, {{χ_\"avg\"}}, of bronze to 2 decimal places.",
          answer: { type: "number", value: 1.95, tolerance: 0.01 },
          hints: [
            "Compute the arithmetic mean of the two Pauling values: {{(1.9 + 2.0)/2}}.",
            "Check 3.9 / 2.",
          ],
          solution: [
            "{{χ_\"avg\" = (1.9 + 2.0) / 2 = 3.9 / 2 = 1.95}} (with Δχ = 0.1, placing bronze in the metallic region).",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "bonding-triangle-polymers",
          marks: 3,
          question:
            "Bronze is a substitutional alloy of copper and tin. Explain why bronze is significantly harder and less malleable than pure copper while still conducting electricity.",
          hints: [
            "Compare the atomic radii of tin and copper and describe what happens to the regular cation layers.",
            "Remember that metallic bonding and delocalized electrons remain intact in an alloy.",
          ],
          modelAnswer:
            "Tin atoms have a larger atomic radius than copper atoms and substitute into sites within the copper lattice. This size mismatch distorts the regular planes of metal cations, making it much more difficult for layers to slide past each other under stress and thus increasing hardness while reducing malleability. Because bronze remains a metallic mixture with a continuous sea of delocalized valence electrons, it still conducts electricity.",
          markScheme: [
            {
              point: "Tin atoms have a different (larger) atomic radius than copper atoms.",
              keywords: ["different", "larger", "atomic radi", "size"],
            },
            {
              point: "Distorts the regular lattice planes so layers cannot slide easily, increasing hardness / reducing malleability.",
              keywords: ["distort", "layers", "slide", "disrupt"],
            },
            {
              point: "Retains metallic bonding with delocalized valence electrons, allowing electrical conductivity.",
              keywords: ["delocalized", "delocalised", "metallic bonding"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p1-q14",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "bonding-triangle-polymers",
          question:
            "Poly(chloroethene) (PVC) is made by addition polymerization of chloroethene (`CH₂=CHCl`). Using relative atomic masses C = 12.01, H = 1.01, and Cl = 35.45, calculate the molar mass, in g mol⁻¹, of **one repeat unit** of PVC to 2 decimal places.",
          answer: { type: "number", value: 62.5, tolerance: 0.05, display: "62.50 g mol⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 26.04, tolerance: 0.1 },
              feedback: "You subtracted HCl as if it were a condensation polymer — addition polymerization loses NO atoms!",
            },
          ],
          hints: [
            "In addition polymerization, no small molecule is eliminated, so the repeat unit `−[CH₂−CHCl]−` has the exact same empirical formula (`C₂H₃Cl`) as the monomer.",
            "Sum 2(12.01) + 3(1.01) + 35.45.",
          ],
          solution: [
            "Repeat unit formula = `C₂H₃Cl` (100% atom economy — no by-product lost).",
            "{{M = 2(12.01) + 3(1.01) + 35.45 = 24.02 + 3.03 + 35.45 = 62.50}} g mol⁻¹.",
          ],
        },
        {
          id: "s2-bonding-materials-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "bonding-triangle-polymers",
          marks: 4,
          question:
            "Compare high-density poly(ethene) (HDPE) and low-density poly(ethene) (LDPE) in terms of chain branching, packing, intermolecular forces, and melting point, and explain why poly(ethene) waste persists in landfills.",
          hints: [
            "Link unbranched chains (HDPE) vs branched chains (LDPE) to how closely chains pack.",
            "Closer packing increases contact surface area and London dispersion forces.",
            "For persistence in landfills, identify the exact strength and polarity of the C−C and C−H bonds in the backbone.",
          ],
          modelAnswer:
            "HDPE consists of unbranched linear chains that pack closely together in crystalline regions, maximizing surface contact area and producing stronger London dispersion forces, higher density, greater rigidity, and a higher melting point. LDPE has many side branches along its chains that prevent close packing, resulting in weaker London dispersion forces, lower density, greater flexibility, and a lower melting point. Both forms persist in landfills because their backbone consists of strong, non-polar C−C and C−H single covalent bonds that resist hydrolysis and enzymatic degradation, making them non-biodegradable.",
          markScheme: [
            {
              point: "HDPE has unbranched chains that pack closely; LDPE has branched chains that cannot pack closely.",
              keywords: ["unbranched", "branched", "pack closely", "close packing"],
            },
            {
              point: "Closer packing in HDPE gives stronger London dispersion forces between chains.",
              keywords: ["stronger london", "london dispersion", "contact"],
            },
            {
              point: "Stronger IMFs give HDPE higher melting point / density / rigidity than LDPE.",
              keywords: ["higher melting point", "higher density", "more rigid"],
            },
            {
              point: "Non-biodegradable in landfills because strong, non-polar C−C and C−H bonds resist hydrolysis / microbial attack.",
              keywords: ["non-biodegradable", "non-polar", "strong c-c", "resist hydrolysis"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Identifies branching difference or landfill persistence without connecting packing to London dispersion forces and bond inertness.",
              indicators: ["Mentions HDPE is denser/stronger", "Omits London dispersion forces or C−C bond inertness"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Fully connects branching → packing → London dispersion strength → melting point/density, and explains non-biodegradability via strong non-polar C−C/C−H bonds.",
              indicators: ["Explicitly names London dispersion forces", "Explains chemical resistance to hydrolysis/enzymes"],
            },
          ],
        },
      ],
    },

    // =========================================================================
    // PAPER 2: Extended & Higher Level Structured Practice (HL & SL, 15 Qs)
    // =========================================================================
    {
      id: "s2-bonding-materials-p2",
      title: "Paper 2 · Extended & Higher Level Practice (SL & HL)",
      level: "HL",
      questions: [
        {
          id: "s2-bonding-materials-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "How many **lone pairs** of electrons reside on the central xenon atom in xenon difluoride, XeF₂?",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 9 },
              feedback: "9 includes the 6 lone pairs on the two F atoms — count lone pairs on the central Xe atom only.",
            },
            {
              spec: { type: "number", value: 2 },
              feedback: "Xenon is a Group 18 noble gas with 8 valence electrons; using 2 for two Xe−F bonds leaves 6 non-bonding electrons (3 lone pairs).",
            },
          ],
          hints: [
            "Total valence electrons = 8 (Xe) + 2 × 7 (F) = 22 e⁻.",
            "Subtract 4 bonding electrons and 12 lone-pair electrons on the two fluorines to find non-bonding electrons on Xe.",
          ],
          solution: [
            "Total valence e⁻ = 8 + 14 = 22. Two Xe−F single bonds (4 e⁻) plus three lone pairs on each F (12 e⁻) use 16 e⁻.",
            "Remaining electrons on Xe = 22 − 16 = 6 e⁻ = **3 lone pairs** (5 domains total → linear molecular geometry).",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "Deduce the **molecular geometry** of the tetrachloroiodate(III) ion, ICl₄⁻.",
          answer: { type: "text", accept: ["square planar"], display: "square planar" },
          traps: [
            {
              spec: { type: "text", accept: ["tetrahedral"] },
              feedback: "Count all valence electrons including the −1 charge (36 e⁻): iodine has 4 bonding pairs AND 2 lone pairs (6 domains total, not 4!).",
            },
            {
              spec: { type: "text", accept: ["octahedral"] },
              feedback: "Octahedral is the electron domain geometry; ignoring the two trans lone pairs gives the molecular geometry.",
            },
          ],
          hints: [
            "Total valence electrons = 7 (I) + 4 × 7 (Cl) + 1 (negative charge) = 36 e⁻.",
            "Four I−Cl bonds + 12 Cl lone pairs use 32 e⁻, leaving 2 lone pairs on I (6 domains: 4 BP, 2 LP).",
          ],
          solution: [
            "ICl₄⁻ has 6 electron domains around I (4 bonding pairs + 2 lone pairs → octahedral electron domain geometry).",
            "Placing the 2 lone pairs 180° opposite (trans) leaves four Cl atoms in a **square planar** molecular geometry.",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "expanded-octets-hybridization-hl",
          marks: 3,
          question:
            "Explain using VSEPR theory why sulfur tetrafluoride (SF₄) adopts a **seesaw** molecular geometry with F−S−F angles slightly less than 90° and 120°, and deduce whether SF₄ is polar.",
          hints: [
            "Count bonding pairs and lone pairs around S (4 BP + 1 LP = 5 domains → trigonal bipyramidal).",
            "Explain WHY the lone pair occupies an equatorial site (only two 90° neighbours instead of three).",
            "Relate the asymmetric geometry to net molecular dipole.",
          ],
          modelAnswer:
            "Sulfur in SF₄ has 5 electron domains (4 bonding pairs and 1 lone pair), giving a trigonal bipyramidal electron domain geometry. The lone pair occupies an equatorial position rather than an axial one because an equatorial site experiences only two severe 90° repulsions instead of three, yielding a seesaw molecular geometry in which greater LP–BP repulsion compresses bond angles below 90° and 120°. Because this seesaw arrangement is asymmetric, the four polar S−F bond dipoles do not cancel, so SF₄ is a polar molecule.",
          markScheme: [
            {
              point: "5 electron domains (4 BP + 1 LP) → trigonal bipyramidal electron domain geometry.",
              keywords: ["5 electron domains", "five electron domains", "trigonal bipyramidal"],
            },
            {
              point: "Lone pair occupies an equatorial position to minimize 90° repulsions (only 2 axial neighbours at 90°) and compresses angles via LP–BP repulsion.",
              keywords: ["equatorial", "90°", "lp-bp", "lp–bp"],
            },
            {
              point: "Asymmetric geometry means polar S−F bond dipoles do not cancel → polar molecule.",
              keywords: ["asymmetric", "do not cancel", "polar molecule"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "In the strict-octet Lewis structure of the sulfate ion (SO₄²⁻), sulfur forms four single S−O bonds and has zero lone pairs. Using {{FC = V - N - (1/2)B}}, calculate the formal charge on sulfur in this structure.",
          answer: { type: "number", value: 2, display: "+2" },
          traps: [
            {
              spec: { type: "number", value: 0 },
              feedback: "0 is the formal charge on sulfur in the expanded-octet structure (with two S=O double bonds), not the 4-single-bond octet structure.",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "+6 is the oxidation state of sulfur in SO₄²⁻, not its formal charge (formal charge splits bonding pairs equally).",
            },
          ],
          hints: [
            "Sulfur (Group 16) has V = 6 valence electrons, N = 0 lone-pair electrons, and 4 single bonds (½B = 4).",
            "Evaluate 6 − 0 − 4.",
          ],
          solution: [
            "For S with 4 single bonds and 0 lone pairs: V = 6, N = 0, ½B = 4.",
            "{{FC(S) = 6 - 0 - 4 = +2}} (while each of the 4 O atoms has FC = −1, summing to −2; expanding S to two S=O double bonds reduces FC(S) to 0).",
          ],
          commonError: "Confusing oxidation state (+6) with formal charge (+2) on sulfur in the single-bonded SO₄²⁻ structure.",
        },
        {
          id: "s2-bonding-materials-p2-q05",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "expanded-octets-hybridization-hl",
          marks: 4,
          question:
            "Sulfur dioxide (SO₂, 18 valence electrons) can be drawn as Structure I (`O=S−O` with 1 lone pair on S, 2 on the doubly bonded O, and 3 on the singly bonded O) or Structure II (`O=S=O` with 1 lone pair on S and 2 on each O). Calculate the formal charges on every atom in both structures, deduce which is preferred by formal charge, and comment on the actual S–O bond lengths in SO₂.",
          hints: [
            "Remember V = 6 for both sulfur and oxygen (both Group 16).",
            "Calculate FC = V − N − ½B for every atom in I and II; check that each structure sums to 0.",
            "Remember that experimentally both S–O bonds in SO₂ are identical and intermediate in length.",
          ],
          modelAnswer:
            "In Structure I (`O=S−O`), the doubly bonded O has FC = 6 − 4 − 2 = 0, the central S has FC = 6 − 2 − 3 = +1, and the singly bonded O has FC = 6 − 6 − 1 = −1 (total = 0). In Structure II (`O=S=O`), both doubly bonded O atoms have FC = 6 − 4 − 2 = 0 and the central S has FC = 6 − 2 − 4 = 0 (total = 0). Because Structure II minimizes all formal charges to zero (expanding sulfur's octet to 10 electrons), Structure II is preferred by formal charge analysis. Experimentally, both S–O bonds are completely identical in length (143 pm, shorter than a single bond), consistent with equal resonance / delocalized π bonding across both S–O links.",
          markScheme: [
            {
              point: "Structure I formal charges correctly computed: O(=) = 0, S = +1, O(−) = −1.",
              keywords: ["+1", "-1", "s = +1"],
            },
            {
              point: "Structure II formal charges correctly computed: all atoms = 0 (S = 0, both O = 0).",
              keywords: ["s = 0", "all formal charges to zero", "zero"],
            },
            {
              point: "Structure II is preferred by formal charge because all formal charges are minimized to zero (expanded octet on Period 3 S).",
              keywords: ["structure ii is preferred", "minimizes", "expanded octet"],
            },
            {
              point: "Actual molecule has two equal S–O bond lengths due to resonance / delocalization of π electrons.",
              keywords: ["identical", "equal", "delocalized", "resonance"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Computes formal charges for one structure accurately or selects Structure II without full arithmetic and bond-length reasoning.",
              indicators: ["Partial FC calculation", "Does not discuss equal experimental bond lengths"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately calculates all formal charges for both structures, justifies Structure II via minimized FC, and connects to equal experimental S–O bond lengths.",
              indicators: ["Verifies sum of FCs = 0", "Explains equal S–O bond length via resonance/delocalization"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "State the exact carbon–oxygen **bond order** in the delocalized resonance hybrid of the carbonate ion, CO₃²⁻. Give your answer as an exact simplified improper fraction.",
          answer: { type: "fraction", n: 4, d: 3, simplest: true, form: "improper" },
          traps: [
            {
              spec: { type: "fraction", n: 3, d: 2 },
              feedback: "3/2 (1.5) is the bond order in ozone (O₃) or carboxylate (RCOO⁻), which have 2 equivalent bonds — carbonate has 3 equivalent C–O bonds!",
            },
          ],
          hints: [
            "In any resonance contributor of CO₃²⁻, there is 1 C=O double bond and 2 C−O single bonds (4 shared bonding pairs total).",
            "Divide the total number of shared bonding pairs (4) equally among the 3 equivalent C–O bond positions.",
          ],
          solution: [
            "CO₃²⁻ has 4 carbon–oxygen bonding pairs (3 σ + 1 delocalized π) shared equally across 3 C–O bond sites.",
            "Bond order = **{{4/3}}** (≈ 1.33).",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "expanded-octets-hybridization-hl",
          marks: 4,
          question:
            "Compare the oxygen–oxygen bonding in O₂ and O₃, explain why stratospheric ozone absorbs longer-wavelength UV radiation than O₂, and write the two balanced radical propagation steps showing how nitrogen monoxide (NO•) catalytically depletes ozone.",
          hints: [
            "State the exact bond order of O₂ (2.0) versus O₃ (1.5 due to delocalized π electrons).",
            "Relate weaker bond enthalpy in O₃ to lower photon energy {{E = hc / λ}} → longer wavelength λ.",
            "Write Step 1 (NO• + O₃ → ...) and Step 2 (NO₂• + O• → ...) ensuring NO• is regenerated.",
          ],
          modelAnswer:
            "O₂ contains a localized double bond with a bond order of 2.0, whereas ozone (O₃) is a resonance hybrid with delocalized π electrons giving two equal O–O bonds of bond order 1.5. Because O₃ has weaker O–O bonds than O₂, less photon energy is needed to dissociate O₃; since photon energy is inversely proportional to wavelength (E = hc/λ), O₃ absorbs lower-energy, longer-wavelength UV-B radiation (<330 nm vs <242 nm for O₂). Nitrogen monoxide radicals catalytically destroy ozone in two steps: Step 1: NO• + O₃ → NO₂• + O₂; Step 2: NO₂• + O• → NO• + O₂ (overall: O₃ + O• → 2 O₂, regenerating the NO• catalyst).",
          markScheme: [
            {
              point: "O₂ has bond order 2.0 (double bond) whereas O₃ has delocalized bonding with bond order 1.5.",
              keywords: ["1.5", "2.0", "bond order", "delocalized"],
            },
            {
              point: "Weaker O–O bond in O₃ requires lower photon energy, corresponding to longer wavelength (E = hc/λ).",
              keywords: ["weaker", "lower", "energy", "hc/"],
            },
            {
              point: "Step 1 balanced: NO• + O₃ → NO₂• + O₂ (radical dot optional in text).",
              keywords: ["no2", "no₂", "no2•", "no₂•"],
            },
            {
              point: "Step 2 balanced: NO₂• + O• → NO• + O₂, regenerating NO• as a catalyst.",
              keywords: ["regenerat", "catalyst", "no + o2", "no• + o₂"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly contrasts O₂ vs O₃ bond strength OR writes one catalytic step, with gaps in energy–wavelength logic or catalyst regeneration.",
              indicators: ["Mentions weaker bonds in O₃", "Missing second propagation step or regeneration explanation"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Links bond order (2.0 vs 1.5) to E = hc/λ wavelength absorption and gives both balanced NO• catalytic steps with regeneration.",
              indicators: ["States exact bond orders 2.0 and 1.5", "Both propagation steps balanced and catalyst regeneration noted"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "Determine the total number of **sigma (σ) bonds** and **pi (π) bonds** in one molecule of propenal (`CH₂=CH−CH=O`). Give your answer as two numbers separated by a comma in the order `σ, π`.",
          answer: { type: "list", values: [7, 2], ordered: true, display: "7, 2" },
          traps: [
            {
              spec: { type: "list", values: [9, 2], ordered: true },
              feedback: "9 counts the two π bonds as σ bonds too — each double bond contains only 1 σ bond and 1 π bond.",
            },
            {
              spec: { type: "list", values: [3, 2], ordered: true },
              feedback: "Do not forget the four C−H single bonds (4 σ bonds)!",
            },
          ],
          hints: [
            "Expand all four C−H single bonds in `CH₂=CH−CH=O` before counting.",
            "Every single bond = 1 σ; every double bond (C=C and C=O) = 1 σ + 1 π.",
          ],
          solution: [
            "Bonds in `CH₂=CH−CH=O`: 4 C−H single bonds (4 σ), 1 C−C single bond (1 σ), 1 C=C double bond (1 σ + 1 π), and 1 C=O double bond (1 σ + 1 π).",
            "Total = **7 σ bonds** and **2 π bonds** (`7, 2`).",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "expanded-octets-hybridization-hl",
          question:
            "State the **hybridization** of the nitrogen atom in hydrogen cyanide, `H−C≡N:`.",
          answer: { type: "text", accept: ["sp"], display: "sp" },
          traps: [
            {
              spec: { type: "text", accept: ["sp3", "sp³", "sp^3"] },
              feedback: "sp³ requires 4 electron domains; N in H−C≡N: has 1 triple bond (1 domain) + 1 lone pair (1 domain) = 2 domains.",
            },
            {
              spec: { type: "text", accept: ["sp2", "sp²", "sp^2"] },
              feedback: "sp² corresponds to 3 electron domains; a triple bond counts as ONE domain, giving 2 domains total on N.",
            },
          ],
          hints: [
            "Count total electron domains on nitrogen: 1 bonding domain (the triple bond) + 1 lone pair.",
            "Match total electron domains (2) to hybridization (sp / sp² / sp³).",
          ],
          solution: [
            "Nitrogen in `H−C≡N:` has 1 triple bond (1 domain) and 1 lone pair (1 domain) = 2 electron domains.",
            "Two electron domains require **sp** hybridization (leaving 2 unhybridized p orbitals for the two π bonds).",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "expanded-octets-hybridization-hl",
          marks: 4,
          question:
            "Compare the carbon hybridization, H−C−C bond angles, and σ/π orbital overlap in ethane (C₂H₆), ethene (C₂H₄), and ethyne (C₂H₂), explaining why rotation about the carbon–carbon bond is free in ethane but restricted in ethene.",
          hints: [
            "Assign carbon hybridization and bond angles across all three molecules (sp³ 109.5°, sp² 120°, sp 180°).",
            "Define head-on σ overlap versus sideways p-orbital π overlap.",
            "Explain how twisting around a C=C double bond destroys parallel p-orbital overlap.",
          ],
          modelAnswer:
            "In ethane (C₂H₆), each carbon has 4 electron domains and is sp³ hybridized (109.5°), forming a C−C single bond consisting of 1 σ bond. In ethene (C₂H₄), each carbon has 3 domains and is sp² hybridized (120°), forming a C=C double bond made of 1 σ bond plus 1 π bond; in ethyne (C₂H₂), each carbon has 2 domains and is sp hybridized (180°), forming a C≡C triple bond made of 1 σ bond plus 2 π bonds. A σ bond arises from head-on orbital overlap along the internuclear axis with cylindrical symmetry, allowing free rotation in ethane. A π bond arises from sideways overlap of parallel unhybridized p orbitals above and below the internuclear axis; rotating ethene breaks this sideways overlap, restricting rotation.",
          markScheme: [
            {
              point: "Correct hybridizations and angles: ethane sp³ (109.5°), ethene sp² (120°), ethyne sp (180°).",
              keywords: ["sp3", "sp²", "sp2", "109.5", "120", "180"],
            },
            {
              point: "Correct σ/π counts for C–C bonds: ethane 1σ; ethene 1σ + 1π; ethyne 1σ + 2π.",
              keywords: ["1 σ", "1 π", "2 π", "one pi", "two pi"],
            },
            {
              point: "σ bond = head-on axial overlap along internuclear axis (cylindrical symmetry → free rotation).",
              keywords: ["head-on", "internuclear axis", "cylindrical"],
            },
            {
              point: "π bond = sideways overlap of parallel unhybridized p orbitals; twisting breaks overlap, restricting rotation in ethene.",
              keywords: ["sideways", "parallel", "unhybridized", "breaks"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "States hybridizations or angles accurately with incomplete orbital overlap or rotation explanation.",
              indicators: ["Identifies sp³/sp²/sp", "Does not clearly contrast head-on σ and sideways π overlap"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Fully integrates hybridization, bond angles, σ/π counts, head-on vs sideways p-orbital overlap, and why π overlap restricts rotation.",
              indicators: ["Mentions parallel unhybridized p orbitals", "Links axial symmetry of σ bond to free rotation"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "ionic-metallic-bonding",
          marks: 3,
          question:
            "Explain why iron (mp 1538 °C) has a much higher melting point than calcium (mp 842 °C), yet zinc ([Ar] 3d¹⁰ 4s², mp 420 °C) melts at a much lower temperature than iron.",
          hints: [
            "Compare which electrons delocalize in s-block Ca (4s only) versus transition metal Fe (4s + unpaired 3d).",
            "Look at zinc's completely full 3d¹⁰ sublevel — do paired 3d electrons contribute effectively to metallic bonding?",
          ],
          modelAnswer:
            "Calcium can only delocalize its two 4s valence electrons, whereas iron has closely spaced 4s and 3d sublevels and delocalizes both 4s and unpaired 3d electrons into the metallic sea, alongside a smaller ionic radius — producing far stronger electrostatic attraction and a higher melting point. In zinc ([Ar] 3d¹⁰ 4s²), the 3d sublevel is completely filled and tightly held by the nucleus, so its 3d electrons do not delocalize effectively; zinc mainly delocalizes only its two 4s electrons, resulting in much weaker metallic bonding and a low melting point.",
          markScheme: [
            {
              point: "Fe delocalizes both 4s and (unpaired) 3d electrons because 4s and 3d energies are close, whereas Ca only delocalizes 4s electrons.",
              keywords: ["4s and", "3d electrons", "unpaired 3d", "closely spaced"],
            },
            {
              point: "Greater electron density and smaller ionic radius in Fe yield stronger electrostatic metallic attraction.",
              keywords: ["stronger electrostatic", "smaller ionic radi", "stronger metallic"],
            },
            {
              point: "Zn has a full 3d¹⁰ sublevel whose electrons are tightly held and do not delocalize effectively, leaving mainly the two 4s electrons.",
              keywords: ["completely filled", "full 3d", "do not delocalize", "two 4s"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "bonding-triangle-polymers",
          question:
            "Poly(ethylene terephthalate) (PET) is formed by condensation polymerization of ethane-1,2-diol (`HOCH₂CH₂OH`, M = 62.08 g mol⁻¹) and benzene-1,4-dicarboxylic acid (`HOOC−C₆H₄−COOH`, M = 166.14 g mol⁻¹). Forming each continuous repeat unit eliminates two water molecules (`H₂O`, M = 18.02 g mol⁻¹). Calculate the molar mass, in g mol⁻¹, of **one repeat unit** of PET to 2 decimal places.",
          answer: { type: "number", value: 192.18, tolerance: 0.05, display: "192.18 g mol⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 210.2, tolerance: 0.05 },
              feedback: "You subtracted only ONE water molecule (18.02) — forming both ester linkages of a continuous repeat unit eliminates TWO H₂O molecules (36.04)!",
            },
            {
              spec: { type: "number", value: 228.22, tolerance: 0.05 },
              feedback: "228.22 is the sum of the two monomers before eliminating water during condensation.",
            },
          ],
          hints: [
            "Add the molar masses of both monomers first: 62.08 + 166.14.",
            "Subtract the mass of TWO eliminated H₂O molecules: 2 × 18.02 = 36.04 g mol⁻¹.",
          ],
          solution: [
            "Sum of monomers = 62.08 + 166.14 = 228.22 g mol⁻¹.",
            "Mass of 2 H₂O eliminated per repeat unit = 2 × 18.02 = 36.04 g mol⁻¹.",
            "Repeat unit molar mass (`C₁₀H₈O₄`) = 228.22 − 36.04 = **192.18 g mol⁻¹**.",
          ],
          commonError: "Subtracting only 1 H₂O instead of 2 H₂O per A–B condensation polymer repeat unit.",
        },
        {
          id: "s2-bonding-materials-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "bonding-triangle-polymers",
          marks: 4,
          question:
            "Compare and contrast the polymerization reaction, backbone linkages, inter-chain intermolecular forces, and chemical biodegradability of **poly(ethene)** and **nylon-6,6** (formed from hexanedioic acid and hexane-1,6-diamine).",
          hints: [
            "Contrast addition polymerization (alkene C=C, 100% atom economy, no by-product) vs condensation polymerization (bifunctional monomers, eliminates H₂O).",
            "Identify the non-polar C−C backbone vs polar amide (−CONH−) linkages.",
            "Link London dispersion forces vs inter-chain hydrogen bonding, and inertness vs hydrolysis.",
          ],
          modelAnswer:
            "Poly(ethene) forms by addition polymerization of ethene (C=C opening with no by-product and 100% atom economy), whereas nylon-6,6 forms by condensation polymerization of a dicarboxylic acid and a diamine with elimination of water (H₂O) at every bond. Poly(ethene) has an entirely non-polar C−C backbone interacting only via London dispersion forces, whereas nylon-6,6 contains polar amide linkages (−CONH−) that form strong inter-chain hydrogen bonds between N−H and C=O groups, giving high tensile strength and melting point. Because poly(ethene)'s strong non-polar C−C bonds resist chemical attack it is non-biodegradable, whereas nylon-6,6's polar amide linkages can be cleaved by hydrolysis (in acid, alkali, or by enzymes) back to its monomers.",
          markScheme: [
            {
              point: "Addition (no by-product, alkene C=C opens) for poly(ethene) vs condensation (eliminates H₂O) for nylon-6,6.",
              keywords: ["addition", "condensation", "eliminat", "no by-product"],
            },
            {
              point: "Non-polar C−C backbone in poly(ethene) vs polar amide (−CONH−) linkages in nylon-6,6.",
              keywords: ["amide", "-conh-", "non-polar c-c"],
            },
            {
              point: "Poly(ethene) has only London dispersion forces whereas nylon-6,6 forms strong inter-chain hydrogen bonds.",
              keywords: ["london dispersion", "hydrogen bond"],
            },
            {
              point: "Nylon-6,6 can undergo hydrolysis at polar amide bonds (biodegradable/chemically recyclable), whereas poly(ethene) resists hydrolysis.",
              keywords: ["hydrolysis", "non-biodegradable", "cleaved"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Correctly distinguishes addition vs condensation OR London vs H-bonding, with gaps in linkage naming or hydrolysis.",
              indicators: ["Identifies water elimination", "Omits amide linkage or hydrolysis contrast"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Thoroughly contrasts mechanism (by-product), linkages (−CONH− vs C−C), IMFs (H-bonding vs LDF), and susceptibility to hydrolysis.",
              indicators: ["Explicitly names amide linkage (−CONH−)", "Links polar bond to hydrolysis susceptibility"],
            },
          ],
        },
        {
          id: "s2-bonding-materials-p2-q14",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "covalent-vsepr-imfs",
          question:
            "What is the **maximum number of hydrogen bonds** that a single water (H₂O) molecule can simultaneously form with neighbouring water molecules in solid ice?",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Water has 2 δ⁺ H atoms (2 H-bond donors) PLUS 2 lone pairs on O (2 H-bond acceptors) = 4 hydrogen bonds total!",
            },
          ],
          hints: [
            "Count BOTH the δ⁺ hydrogen atoms available to donate H-bonds AND the lone pairs on oxygen available to accept H-bonds.",
          ],
          solution: [
            "Each H₂O molecule has 2 δ⁺ hydrogen atoms and 2 lone pairs on oxygen.",
            "Thus each H₂O molecule forms up to 2 + 2 = **4** tetrahedral hydrogen bonds in ice.",
          ],
        },
        {
          id: "s2-bonding-materials-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "bonding-triangle-polymers",
          marks: 5,
          question:
            "Three Period 3 chlorides have the following data (Pauling χ: Na = 0.9, Al = 1.6, Si = 1.9, Cl = 3.2):\n\n| Chloride | Melting / Sublimation Point | Molten Electrical Conductivity |\n|---|---|---|\n| NaCl | 801 °C (mp) | High |\n| AlCl₃ | 180 °C (sublimes) | Negligible |\n| SiCl₄ | −69 °C (mp) | Zero |\n\nCalculate {{(χ_\"avg\", Δχ)}} for each chloride and evaluate how the bonding triangle and 3D structure explain this progression across Period 3.",
          hints: [
            "Compute χ_avg and Δχ for NaCl (2.05, 2.3), AlCl₃ (2.40, 1.6), and SiCl₄ (2.55, 1.3).",
            "Classify NaCl as ionic (Δχ > 1.8) vs AlCl₃ and SiCl₄ as polar covalent (Δχ < 1.8).",
            "Explain the sharp drop in mp and conductivity via giant ionic lattice (mobile ions when molten) → molecular Al₂Cl₆ dimers → discrete symmetric tetrahedral SiCl₄ molecules with weak London dispersion forces.",
          ],
          modelAnswer:
            "Bonding triangle coordinates (χ_avg, Δχ): NaCl = (2.05, 2.3), AlCl₃ = (2.40, 1.6), and SiCl₄ = (2.55, 1.3). With Δχ = 2.3 > 1.8, NaCl lies solidly in the ionic region: it forms a giant 3D ionic lattice with strong electrostatic attractions between Na⁺ and Cl⁻, giving a high melting point (801 °C) and high molten conductivity due to mobile ions. Both AlCl₃ (Δχ = 1.6) and SiCl₄ (Δχ = 1.3) fall in the polar covalent region because increasing nuclear charge and electronegativity across Period 3 shrink Δχ and increase covalent character. AlCl₃ sublimes at 180 °C into discrete covalent Al₂Cl₆ dimers containing no mobile ions, giving negligible molten conductivity. SiCl₄ forms discrete symmetric tetrahedral non-polar molecules held together only by weak London dispersion forces, producing a very low melting point (−69 °C) and zero electrical conductivity.",
          markScheme: [
            {
              point: "Correct (χ_avg, Δχ) for all three: NaCl (2.05, 2.3), AlCl₃ (2.40, 1.6), SiCl₄ (2.55, 1.3).",
              keywords: ["2.05", "2.3", "1.6", "1.3"],
            },
            {
              point: "NaCl classified as ionic (Δχ > 1.8) with a giant ionic lattice (high mp) and mobile ions when molten.",
              keywords: ["ionic lattice", "mobile ions", "ionic region"],
            },
            {
              point: "AlCl₃ and SiCl₄ classified as polar covalent (Δχ < 1.8) as covalent character increases across Period 3.",
              keywords: ["polar covalent", "covalent character"],
            },
            {
              point: "AlCl₃ forms discrete covalent dimers (Al₂Cl₆) on subliming with negligible mobile ions / low mp.",
              keywords: ["al2cl6", "al₂cl₆", "dimer"],
            },
            {
              point: "SiCl₄ consists of discrete tetrahedral non-polar molecules with weak London dispersion forces and zero charge carriers.",
              keywords: ["tetrahedral", "london dispersion", "discrete"],
            },
          ],
          markbands: [
            {
              band: "0",
              marks: [0, 0],
              descriptor: "Response does not reach a standard described by the descriptors below.",
            },
            {
              band: "1–2",
              marks: [1, 2],
              descriptor: "Calculates some (χ_avg, Δχ) values correctly or states ionic-to-covalent trend superficially.",
              indicators: ["Identifies NaCl as ionic and SiCl₄ as covalent", "Missing AlCl₃ dimer or London force detail"],
            },
            {
              band: "3–4",
              marks: [3, 4],
              descriptor: "Accurately calculates coordinates and classifies all three chlorides, explaining most melting-point and conductivity differences.",
              indicators: ["All coordinates correct", "Explains mobile ions vs neutral molecules clearly"],
            },
            {
              band: "5",
              marks: [5, 5],
              descriptor: "Fully integrates exact bonding-triangle coordinates, ionic lattice → covalent Al₂Cl₆ dimer → non-polar tetrahedral SiCl₄ (London forces), and molten charge-carrier analysis.",
              indicators: ["Explicitly names Al₂Cl₆ dimers", "Links tetrahedral symmetry of SiCl₄ to non-polar molecules and London forces"],
            },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 questions, all difficulty: "challenge", 3-step hint ladders)
  // ===========================================================================
  challenge: [
    {
      id: "s2-bonding-materials-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "expanded-octets-hybridization-hl",
      question:
        "Paracetamol (`C₈H₉NO₂`) consists of a benzene ring (`C₆H₄`) bonded to a hydroxyl group (`−OH`) at C1 and an ethanamide group (`−NH−C(=O)−CH₃`) at C4. Calculate the **percentage** of carbon atoms in paracetamol that are **sp²-hybridized** (give your answer to 1 decimal place).",
      answer: { type: "number", value: 87.5, tolerance: 0.1, display: "87.5%" },
      traps: [
        {
          spec: { type: "number", value: 75, tolerance: 0.1 },
          feedback: "6/8 = 75% counts only the benzene ring carbons — remember the carbonyl carbon in −C(=O)− also has 3 electron domains (sp²)!",
        },
        {
          spec: { type: "number", value: 12.5, tolerance: 0.1 },
          feedback: "12.5% (1/8) is the percentage of sp³-hybridized carbons (just the −CH₃ group), not sp²!",
        },
      ],
      hints: [
        "Count the total number of carbon atoms in `C₈H₉NO₂`: 6 in the benzene ring + 1 in `−C(=O)−` + 1 in `−CH₃` = 8 carbons.",
        "Determine the electron domains on each carbon type: benzene ring C = 3 domains, carbonyl C = 3 domains, methyl C = 4 domains.",
        "Divide the number of sp² carbons (7) by total carbons (8) and multiply by 100.",
      ],
      solution: [
        "Carbons in paracetamol (8 total): 6 benzene ring carbons (each 3 domains → sp²), 1 carbonyl `C=O` carbon (3 domains → sp²), 1 methyl `−CH₃` carbon (4 domains → sp³).",
        "Total sp² carbons = 6 + 1 = 7 out of 8.",
        "Percentage = {{(7 / 8) * 100 = 87.5%}}.",
      ],
    },
    {
      id: "s2-bonding-materials-ch-q02",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "expanded-octets-hybridization-hl",
      marks: 5,
      question:
        "In ethanoic acid (`CH₃COOH`), the two carbon–oxygen bond lengths are unequal (121 pm and 136 pm). Upon deprotonation to the ethanoate ion (`CH₃COO⁻`), both carbon–oxygen bonds become identically 126 pm long. Evaluate how hybridization, resonance delocalization, bond order, and formal charge explain both this geometric change and the stability of the ethanoate ion.",
      hints: [
        "Contrast localized C=O (BO 2.0) and C−O (BO 1.0) in CH₃COOH with the delocalized π system across O−C−O in CH₃COO⁻.",
        "State the hybridization of the carboxylate carbon (sp²) and its unhybridized p orbital overlapping sideways with both oxygens.",
        "Connect spreading the −1 negative charge equally (−½ on each electronegative O) to resonance stabilization of the conjugate base.",
      ],
      modelAnswer:
        "In ethanoic acid (CH₃COOH), the C=O double bond (bond order 2.0, 121 pm) and the C−OH single bond (bond order 1.0, 136 pm) are localized and therefore unequal in length. After losing H⁺ to form the ethanoate ion (CH₃COO⁻), the sp²-hybridized carboxylate carbon retains one unhybridized 2p orbital that overlaps sideways with p orbitals on BOTH oxygen atoms simultaneously. This delocalizes the π electron pair and negative charge equally across the O−C−O unit, creating a single resonance hybrid with two identical C–O bonds of bond order 1.5 and intermediate length (126 pm). Spreading the −1 formal charge equally over two strongly electronegative oxygen atoms (−½ each) lowers the ion's potential energy (resonance stabilization), explaining why carboxylic acids are far more acidic than alcohols.",
      markScheme: [
        {
          point: "In CH₃COOH, C=O (double, BO 2.0) and C−OH (single, BO 1.0) are localized and therefore different lengths.",
          keywords: ["localized", "localised", "double", "single"],
        },
        {
          point: "In CH₃COO⁻, the carboxylate carbon is sp² hybridized with an unhybridized p orbital overlapping sideways with both O atoms.",
          keywords: ["sp2", "sp²", "p orbital", "sideways"],
        },
        {
          point: "Delocalization produces a resonance hybrid with two equal C–O bonds of bond order 1.5 (intermediate length 126 pm).",
          keywords: ["1.5", "resonance hybrid", "bond order"],
        },
        {
          point: "The −1 negative charge is shared equally across both electronegative oxygen atoms (−0.5 each).",
          keywords: ["both oxygen", "equally", "electronegative oxygen", "spread"],
        },
        {
          point: "Delocalization lowers energy (resonance stabilization), stabilizing the conjugate base / promoting acidity.",
          keywords: ["stabiliz", "stabilis", "lowers", "conjugate base"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies resonance in CH₃COO⁻ giving equal bond lengths without full orbital, bond-order, or stabilization explanation.",
              indicators: ["Mentions delocalization or equal bonds", "Omits bond order 1.5 or sp² p-orbital overlap"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains localized vs delocalized bonding, bond order 1.5, and negative charge spreading clearly, with minor omissions in hybridization or energetic stability.",
              indicators: ["States bond order 1.5", "Explains charge shared over two O atoms"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Synthesizes sp² sideways p-orbital overlap, resonance hybrid bond order 1.5, charge delocalization across two electronegative O atoms, and resonance stabilization.",
              indicators: ["Links sp² carbon p orbital to both oxygens", "Explicitly evaluates stability of the conjugate base"],
        },
      ],
    },
    {
      id: "s2-bonding-materials-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "expanded-octets-hybridization-hl",
      question:
        "Cyclohexa-1,3-diene (`C₆H₈`) consists of a six-membered carbon ring containing two `C=C` double bonds and eight attached hydrogen atoms. Calculate the **total number of sigma (σ) bonds** in one molecule of cyclohexa-1,3-diene.",
      answer: { type: "number", value: 14 },
      traps: [
        {
          spec: { type: "number", value: 13 },
          feedback: "13 uses the acyclic shortcut (N_atoms − 1) — closing a 6-membered ring adds 1 extra C−C σ bond!",
        },
        {
          spec: { type: "number", value: 16 },
          feedback: "16 double-counts the two π bonds of the C=C double bonds as σ bonds.",
        },
      ],
      hints: [
        "Count the carbon–carbon σ bonds around the closed 6-membered ring (every single OR double bond in the ring has exactly 1 σ bond).",
        "Add the 8 single C−H σ bonds attached around the ring.",
        "Remember: a monocyclic molecule always has σ bonds = total atoms (unlike acyclic molecules which have total atoms − 1).",
      ],
      solution: [
        "Ring carbon–carbon skeleton: 6 links around the closed hexagon (4 single + 2 double) → 6 σ bonds (plus 2 π bonds).",
        "Hydrogen attachments: 8 C−H single bonds → 8 σ bonds.",
        "Total σ bonds = 6 + 8 = **14**.",
      ],
    },
    {
      id: "s2-bonding-materials-ch-q04",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "covalent-vsepr-imfs",
      marks: 5,
      question:
        "The standard boiling points of the Group 16 hydrides are: H₂O (+100 °C), H₂S (−60 °C), H₂Se (−41 °C), and H₂Te (−2 °C). Discuss the molecular geometry, polarity, and competing intermolecular forces responsible for BOTH the sharp drop from H₂O to H₂S and the steady rise from H₂S to H₂Te.",
      hints: [
        "Identify the shared VSEPR geometry (4 domains: 2 BP, 2 LP → bent) and polarity of all four hydrides.",
        "Explain the anomalously high bp of H₂O via strong intermolecular hydrogen bonding (up to 4 H-bonds per molecule due to small, highly electronegative O).",
        "Explain why boiling point rises from H₂S → H₂Se → H₂Te even though bond polarity (Δχ) actually DECREASES down the group!",
      ],
      modelAnswer:
        "All four Group 16 hydrides have 4 electron domains (2 bonding pairs and 2 lone pairs) around the central atom, adopting a bent (V-shaped) polar molecular geometry. Water (H₂O) has an anomalously high boiling point (+100 °C) because oxygen is small and strongly electronegative, enabling extensive intermolecular hydrogen bonding (up to 4 H-bonds per H₂O molecule) that requires a large amount of thermal energy to overcome. Moving to H₂S, sulfur is larger and much less electronegative so hydrogen bonding disappears, causing the boiling point to plummet to −60 °C despite higher molar mass. Descending from H₂S to H₂Se to H₂Te, although electronegativity difference and dipole–dipole attractions decrease, the total number of electrons and molar mass increase substantially, increasing electron-cloud polarizability and strengthening London dispersion forces so that more thermal energy is needed to boil the liquids.",
      markScheme: [
        {
          point: "All four hydrides have bent molecular geometry (2 BP, 2 LP) and are polar molecules.",
          keywords: ["bent", "polar"],
        },
        {
          point: "H₂O has an unusually high boiling point due to strong intermolecular hydrogen bonding (up to 4 per molecule).",
          keywords: ["hydrogen bond", "anomalous", "4 h-bonds", "four"],
        },
        {
          point: "Drop from H₂O to H₂S occurs because sulfur cannot form hydrogen bonds (lower electronegativity / larger atom).",
          keywords: ["disappears", "cannot form hydrogen", "no hydrogen bond", "less electronegative"],
        },
        {
          point: "From H₂S to H₂Te, increasing electron count / molar mass increases polarizability and strengthens London dispersion forces.",
          keywords: ["number of electrons", "polarizability", "london dispersion", "molar mass"],
        },
        {
          point: "Notes explicitly that strengthening London forces outweighs decreasing dipole–dipole polarity down the group.",
          keywords: ["dipole-dipole", "dipole–dipole", "decrease", "outweigh"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Explains H-bonding in water OR rising London forces down the group, with little discussion of geometry or competing IMFs.",
          indicators: ["Mentions H-bonding in H₂O", "Does not contrast decreasing dipole–dipole with rising London forces"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains both trends clearly (H-bonding drop + rising London dispersion forces via electron count), with minor omission of shape/polarity trade-off.",
          indicators: ["Both drop and rise clearly explained", "Names bent geometry"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Completely integrates bent polar VSEPR geometry, extensive H-bonding in H₂O, absence of H-bonding in H₂S, and rising London forces outweighing falling dipole–dipole polarity down the group.",
          indicators: ["Addresses the paradox of decreasing Δχ alongside rising bp", "Links polarizability to electron count"],
        },
      ],
    },
    {
      id: "s2-bonding-materials-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "ionic-metallic-bonding",
      question:
        "According to Coulomb's law, electrostatic lattice energy scales approximately with the charge-to-distance ratio {{|q_+ * q_-| / r_0}}, where {{r_0 = r_+ + r_-}} is the inter-ionic distance. Given {{r_0(\"MgO\") = 210}} pm and {{r_0(\"NaCl\") = 282}} pm, calculate the ratio {{(|q_+ * q_-| / r_0)_\"MgO\" / (|q_+ * q_-| / r_0)_\"NaCl\"}} to **2 significant figures**.",
      answer: { type: "number", value: 5.4, tolerance: 0.15, display: "5.4" },
      traps: [
        {
          spec: { type: "number", value: 4, tolerance: 0.05 },
          feedback: "4 accounts only for the charge product (2×2 vs 1×1) and ignores the smaller inter-ionic distance in MgO (210 pm vs 282 pm)!",
        },
        {
          spec: { type: "number", value: 2.98, tolerance: 0.1 },
          feedback: "You inverted the distance ratio (210/282 instead of 282/210) — a smaller distance r₀ makes lattice attraction STRONGER, not weaker!",
        },
      ],
      hints: [
        "Compute the charge product |q₊ × q₋| for MgO (2 × 2 = 4) and for NaCl (1 × 1 = 1).",
        "Divide each charge product by its inter-ionic distance r₀: (4 / 210) for MgO and (1 / 282) for NaCl.",
        "Take the ratio (4 / 210) ÷ (1 / 282) = (4 × 282) / 210 and round to 2 significant figures.",
      ],
      solution: [
        "For MgO: {{|q_+ * q_-| / r_0 = 4 / 210}} pm⁻¹.",
        "For NaCl: {{|q_+ * q_-| / r_0 = 1 / 282}} pm⁻¹.",
        "Ratio = {{(4 / 210) / (1 / 282) = 1128 / 210 = 5.37...}} ≈ **5.4** (matching the ~4.8× higher experimental lattice enthalpy of MgO vs NaCl!).",
      ],
    },
    {
      id: "s2-bonding-materials-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "expanded-octets-hybridization-hl",
      marks: 6,
      question:
        "Xenon forms the fluorides XeF₂ and XeF₄. Evaluate the electron domain geometry, lone-pair placement, molecular geometry, F−Xe−F bond angles, and overall polarity of **both** XeF₂ and XeF₄ using VSEPR theory, and explain why oxygen forms OF₂ yet cannot form OF₄ or OF₆.",
      hints: [
        "Count valence electrons carefully: XeF₂ has 22 e⁻ (5 domains: 2 BP, 3 LP) and XeF₄ has 36 e⁻ (6 domains: 4 BP, 2 LP).",
        "Justify exact lone-pair placements: all 3 LPs equatorial in XeF₂; 2 LPs trans (180° opposite) in XeF₄.",
        "Explain the Period 2 octet limit for oxygen (only 2s and three 2p orbitals in n = 2) versus Period 5 Xe.",
      ],
      modelAnswer:
        "In XeF₂ (22 valence e⁻), xenon has 5 electron domains (2 bonding pairs and 3 lone pairs), giving a trigonal bipyramidal electron domain geometry. All 3 lone pairs occupy the equatorial positions (120° apart) to minimize 90° repulsions, leaving the two F atoms in opposite axial positions to form a linear molecular geometry with an exact 180° F−Xe−F bond angle; the equal opposite Xe−F dipoles cancel, so XeF₂ is non-polar. In XeF₄ (36 valence e⁻), xenon has 6 electron domains (4 bonding pairs and 2 lone pairs), giving an octahedral electron domain geometry. The 2 lone pairs sit trans (180° opposite) to minimize LP–LP repulsion, producing a square planar molecular geometry with 90° (and 180°) F−Xe−F angles; all four Xe−F dipoles cancel symmetrically, so XeF₄ is also non-polar. Oxygen (Period 2, n = 2) has only four valence orbitals (one 2s and three 2p), strictly limiting it to an octet of 8 valence electrons (forming OF₂) so it cannot expand its octet to 10 or 12 electrons like Period 5 xenon.",
      markScheme: [
        {
          point: "XeF₂: 5 domains (2 BP, 3 LP), trigonal bipyramidal electron domain geometry, all 3 LPs equatorial.",
          keywords: ["5 electron domains", "3 lone pairs", "equatorial"],
        },
        {
          point: "XeF₂ molecular geometry is linear (180°) and non-polar because opposite Xe−F dipoles cancel.",
          keywords: ["linear", "180", "dipoles cancel"],
        },
        {
          point: "XeF₄: 6 domains (4 BP, 2 LP), octahedral electron domain geometry, 2 LPs trans (180° opposite).",
          keywords: ["6 electron domains", "octahedral", "trans"],
        },
        {
          point: "XeF₄ molecular geometry is square planar (90°) and non-polar due to symmetric cancellation of dipoles.",
          keywords: ["square planar", "90°", "non-polar"],
        },
        {
          point: "Oxygen is in Period 2 (n = 2) with only 2s and 2p orbitals (maximum 8 valence electrons).",
          keywords: ["period 2", "2s and", "2p", "octet"],
        },
        {
          point: "Therefore oxygen cannot form expanded octets (10 or 12 valence electrons) required for OF₄ or OF₆.",
          keywords: ["cannot expand", "expanded octet", "exceed"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies one geometry or Period 2 octet rule with major omissions in lone-pair placement or polarity.",
          indicators: ["States linear or square planar without justifying lone-pair positions"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly deduces both geometries and angles with mostly accurate lone-pair placement, polarity, or oxygen octet reasoning.",
          indicators: ["Includes 5 and 6 domains", "Explains non-polarity of at least one species"],
        },
        {
          band: "5–6",
          marks: [5, 6],
          descriptor: "Comprehensively evaluates XeF₂ (5 domains, equatorial LPs, linear 180°, non-polar), XeF₄ (6 domains, trans LPs, square planar 90°, non-polar), and oxygen's n = 2 orbital octet limit.",
          indicators: ["Explicitly justifies equatorial and trans LP placements", "Links n = 2 (2s + three 2p) to strict 8-electron maximum"],
        },
      ],
    },
    {
      id: "s2-bonding-materials-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "bonding-triangle-polymers",
      marks: 5,
      question:
        "Kevlar is an aromatic polyamide synthesized by condensation polymerization of benzene-1,4-diamine (`H₂N−C₆H₄−NH₂`) and benzene-1,4-dicarbonyl dichloride (`ClOC−C₆H₄−COCl`). Identify the small molecule eliminated and the polymer linkage formed, analyse how chain structure and intermolecular forces give Kevlar exceptional tensile strength, and predict the chemical effect of immersing Kevlar in hot concentrated sulfuric acid.",
      hints: [
        "Look at the reactive groups `−NH₂` and `−COCl` — instead of water, what H–X molecule leaves when they condense?",
        "Notice the rigid flat para-substituted benzene rings aligned along the polymer backbone alongside amide groups (`−CONH−`).",
        "Predict what hot concentrated acid does to polar amide linkages (hydrolysis) and what happens to tensile strength.",
      ],
      modelAnswer:
        "Condensation between `−NH₂` and `−COCl` eliminates hydrogen chloride (HCl) as the small by-product molecule and creates repeating amide linkages (`−CONH−`), forming the repeat unit `−[HN−C₆H₄−NH−CO−C₆H₄−CO]−`. The rigid, planar 1,4-disubstituted benzene rings keep Kevlar chains straight and rod-like so neighbouring chains align closely in flat sheets. This tight alignment maximizes dense, regular networks of strong inter-chain hydrogen bonds between `N−H` and `C=O` groups of adjacent chains (reinforced by π–π / London interactions between aromatic rings), giving Kevlar an extraordinary strength-to-weight ratio. Immersing Kevlar in hot concentrated sulfuric acid causes acid-catalysed hydrolysis of the polar `C−N` amide linkages, breaking the polymer chains back into monomers/oligomers and destroying its tensile strength.",
      markScheme: [
        {
          point: "Small molecule eliminated is hydrogen chloride (HCl).",
          keywords: ["hcl", "hydrogen chloride"],
        },
        {
          point: "Forms repeating amide linkages (−CONH−).",
          keywords: ["amide", "-conh-"],
        },
        {
          point: "Rigid planar benzene rings keep chains straight/aligned in closely packed sheets.",
          keywords: ["planar", "rigid", "align", "sheets"],
        },
        {
          point: "Extensive inter-chain hydrogen bonding between N−H and C=O groups provides extreme tensile strength.",
          keywords: ["hydrogen bond", "n-h", "c=o", "inter-chain"],
        },
        {
          point: "Hot concentrated acid causes hydrolysis of the amide linkages, breaking chains and reducing tensile strength.",
          keywords: ["hydrolysis", "breaking the polymer", "cleav", "destroying"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies amide linkage or H-bonding, possibly misidentifying H₂O instead of HCl or omitting acid hydrolysis.",
          indicators: ["Mentions polyamide or hydrogen bonding", "Misses HCl elimination or hydrolysis effect"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly identifies HCl and amide linkage, explains inter-chain H-bonding and hydrolysis, with minor omission of benzene ring planarity/alignment.",
          indicators: ["Identifies HCl correctly", "Explains hydrolysis in hot acid"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Thoroughly analyses HCl elimination, −CONH− linkages, rigid planar benzene alignment maximizing inter-chain H-bonding, and chain cleavage via acid hydrolysis.",
          indicators: ["Connects 1,4-benzene rigidity directly to close sheet alignment", "Links amide cleavage to loss of strength"],
        },
      ],
    },
    {
      id: "s2-bonding-materials-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "covalent-vsepr-imfs",
      marks: 5,
      question:
        "Four unknown solids (A, B, C, and D) were tested in the laboratory with the results below:\n\n| Solid | Melting / Sublimation Point | Solubility | Mechanical Behaviour | Conductivity (Solid / Molten) |\n|---|---|---|---|---|\n| A | 801 °C (mp) | Soluble in water | Brittle | Insulator / High |\n| B | 1713 °C (mp) | Insoluble in water & hexane | Hard, brittle | Insulator / Insulator |\n| C | 660 °C (mp) | Insoluble in water & hexane | Malleable | High / High |\n| D | 114 °C (sublimes) | Soluble in hexane | Soft, flaky | Insulator / Insulator |\n\nDeduce the **structure and bonding model** of each solid (A–D) and justify your assignments using the experimental evidence.",
      hints: [
        "Match conductivity first: High solid + molten = metallic; Insulator solid + High molten = ionic; Insulator both = covalent (network vs molecular).",
        "Separate covalent network (B: 1713 °C, hard, insoluble) from molecular covalent (D: 114 °C, soft, soluble in non-polar hexane).",
        "Make sure your justification explicitly connects each physical property (mp, conductivity, solubility, brittleness/malleability) to the microscopic particles and forces.",
      ],
      modelAnswer:
        "Solid A is a **giant ionic lattice** (e.g. NaCl): strong electrostatic attractions between oppositely charged ions give a high melting point (801 °C) and brittleness (shifted layers align like charges), ions are fixed in the solid (insulator) but become mobile when molten (high conductivity), and polar water hydrates the ions. Solid B is a **giant covalent network** (e.g. SiO₂): strong directional covalent bonds throughout a 3D lattice explain its very high melting point (1713 °C), hardness, insolubility, and lack of mobile charge carriers in both solid and molten states. Solid C is a **metallic lattice** (e.g. Al): cations attracted non-directionally to a sea of delocalized valence electrons explain high conductivity in both solid and molten states, malleability, insolubility, and moderately high melting point. Solid D is a **non-polar molecular covalent solid** (e.g. I₂): discrete neutral molecules held together only by weak London dispersion forces explain its low sublimation point (114 °C), softness, solubility in non-polar hexane, and absence of mobile charge carriers.",
      markScheme: [
        {
          point: "Solid A = giant ionic lattice justified by high mp, brittleness, water solubility, and solid insulator → molten mobile-ion conductor.",
          keywords: ["ionic lattice", "mobile", "water hydrates", "brittleness"],
        },
        {
          point: "Solid B = giant covalent network justified by very high mp (1713 °C), hardness, insolubility, and zero mobile electrons/ions.",
          keywords: ["covalent network", "directional covalent", "insolub"],
        },
        {
          point: "Solid C = metallic lattice justified by malleability (non-directional) and high conductivity in both solid and molten states via delocalized electrons.",
          keywords: ["metallic", "delocalized", "delocalised", "non-directional"],
        },
        {
          point: "Solid D = non-polar molecular covalent solid justified by low sublimation point (114 °C), softness, and hexane solubility via weak London dispersion forces.",
          keywords: ["molecular covalent", "london dispersion", "discrete", "hexane"],
        },
        {
          point: "Explicitly links conductivity differences across all four solids to presence or absence of mobile charge carriers (ions vs delocalized electrons).",
          keywords: ["charge carriers", "fixed", "neutral molecules"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly classifies 2–3 solids with brief or incomplete justification from the table.",
          indicators: ["Names ionic/metallic/covalent", "Omits explanation of solubility or mechanical properties"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly classifies all four solids with solid reasoning covering melting point and conductivity, with minor gaps in solubility or brittleness/malleability.",
          indicators: ["All 4 bonding types identified accurately", "Distinguishes covalent network from molecular covalent"],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Accurately classifies all four solids and systematically links every tabulated property (mp, solubility, mechanics, solid/molten conductivity) to microscopic bonding models.",
          indicators: ["Explicitly names mobile ions vs delocalized electrons vs neutral molecules", "Connects non-polar hexane solubility to London dispersion forces"],
        },
      ],
    },
  ],
};
