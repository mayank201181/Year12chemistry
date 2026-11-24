import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "s2-bonding-materials",
  title: "Structure 2: Models of Bonding & Structure",
  strand: "Structure 2: Bonding & Materials",
  icon: "💎",
  level: "SL",
  summary:
    "Connect electrostatic attractions to 3D structure and macroscopic properties across ionic lattices, metallic crystals, covalent molecules (VSEPR 2–6 domains), intermolecular forces, resonance, hybridization [HL], the bonding triangle, alloys, and polymers.",
  intro:
    "Why does table salt (NaCl) shatter when hit with a hammer while copper bends cleanly into a wire? Why does water boil 160 °C hotter than hydrogen sulfide despite being lighter, and why is diamond the hardest natural insulator while graphite conducts electricity? Every answer in Structure 2 comes from one unifying idea: **bonding is electrostatic attraction**, and a material's macroscopic behaviour follows directly from how its electrons and nuclei are arranged in 3D space.",
  guide: [
    // =========================================================================
    // SECTION 1: S2.1 & S2.3 Ionic Lattices & Metallic Bonding [SL]
    // =========================================================================
    {
      id: "ionic-metallic-bonding",
      heading: "S2.1 & S2.3 Ionic Lattices & Metallic Bonding",
      level: "SL",
      discovery: {
        problem:
          "Magnesium oxide (MgO) and sodium chloride (NaCl) have the exact same rock-salt crystal arrangement, yet NaCl melts at 801 °C while MgO does not melt until 2852 °C — making MgO ideal for lining blast furnaces. Meanwhile, solid sodium metal melts at just 98 °C yet conducts electricity effortlessly, whereas solid NaCl does not conduct at all. Before reading on, propose **two structural reasons** why MgO is so much harder to melt than NaCl, and explain why Na(s) conducts when NaCl(s) cannot.",
        idea:
          "MgO pairs doubly charged ions (**Mg²⁺** and **O²⁻**) instead of singly charged **Na⁺** and **Cl⁻**, AND both Mg²⁺ (72 pm) and O²⁻ (140 pm) are smaller than Na⁺ (102 pm) and Cl⁻ (181 pm). By Coulomb's law, quadrupling the charge product and shrinking inter-ionic distance multiplies electrostatic attraction drastically! As for conductivity, **electrical conduction requires mobile charge carriers**: solid NaCl locks ions in fixed lattice positions (it only conducts when molten or aqueous), whereas solid Na has a sea of **delocalized valence electrons** free to drift under a voltage.",
      },
      body:
        "### S2.1 The Ionic Model\n" +
        "When atoms with very different electronegativities react (typically metals with non-metals), electrons transfer to form **cations** (positive ions, smaller than their parent atom) and **anions** (negative ions, larger than their parent atom). An **ionic bond** is the strong electrostatic attraction between oppositely charged ions — **not** an isolated pair, but a giant, three-dimensional **ionic crystal lattice** extending in all directions.\n\n" +
        "You must know the formulas and charges of the seven core IB polyatomic ions:\n\n" +
        "| Ion Name | Formula | Charge | Common Salt Example |\n" +
        "|---|---|---|---|\n" +
        "| Ammonium | NH₄⁺ | +1 | NH₄NO₃, (NH₄)₂SO₄ |\n" +
        "| Hydroxide | OH⁻ | −1 | NaOH, Ca(OH)₂ |\n" +
        "| Nitrate | NO₃⁻ | −1 | KNO₃, Mg(NO₃)₂ |\n" +
        "| Hydrogencarbonate | HCO₃⁻ | −1 | NaHCO₃, Ca(HCO₃)₂ |\n" +
        "| Carbonate | CO₃²⁻ | −2 | Na₂CO₃, CaCO₃ |\n" +
        "| Sulfate | SO₄²⁻ | −2 | CuSO₄, Al₂(SO₄)₃ |\n" +
        "| Phosphate | PO₄³⁻ | −3 | Na₃PO₄, Ca₃(PO₄)₂ |\n\n" +
        "**Strength of ionic bonding (lattice enthalpy):** Lattice enthalpy measures the energy required to separate one mole of a solid ionic compound into gaseous ions. It increases when:\n" +
        "- **Ionic charge increases** (higher charge product {{|q_+ * q_-|}}): e.g. MgO (2+ / 2−) >> NaF (1+ / 1−).\n" +
        "- **Ionic radius decreases** (smaller inter-ionic separation {{r}}): e.g. LiF > NaF > KF > RbF.\n\n" +
        "**Physical properties explained by the ionic lattice:**\n" +
        "- **High melting/boiling points & low volatility:** Large amounts of thermal energy are required to overcome strong electrostatic attractions throughout the 3D lattice.\n" +
        "- **Electrical conductivity:** Insulators as **solids** (ions vibrate in fixed positions); conductors when **molten (l)** or **aqueous (aq)** because ions become mobile charge carriers.\n" +
        "- **Brittleness:** Applying a shear force shifts one lattice plane by half a unit cell, aligning like charges (+ next to +, − next to −). Sudden electrostatic repulsion cleaves the crystal.\n" +
        "- **Solubility:** Often soluble in polar solvents (like water) where ion–dipole attractions hydrate ions and offset lattice enthalpy; insoluble in non-polar solvents (like hexane).\n\n" +
        "### S2.3 The Metallic Model\n" +
        "A **metallic bond** is the electrostatic attraction between a regular lattice of **positive metal cations** and a surrounding sea of **delocalized valence electrons**. Because the attraction is non-directional (cations attract the electron cloud equally in every direction), layers of cations can slide past one another without breaking the metallic bond — making metals **malleable** (hammered into sheets) and **ductile** (drawn into wires).\n\n" +
        "**Factors increasing metallic bond strength (and melting point):**\n" +
        "1. **Higher cation charge / more delocalized electrons per atom:** Going across Period 3 (Na⁺ → Mg²⁺ → Al³⁺), each atom contributes 1, 2, then 3 valence electrons.\n" +
        "2. **Smaller ionic radius:** Higher charge density pulls the delocalized electrons more tightly (melting point falls down Group 1: Li > Na > K > Rb > Cs).\n" +
        "3. **[HL] Transition-metal d-electron delocalization:** Because the 3d and 4s sublevels are very close in energy, transition metals (such as Fe, Cr, W) can delocalize **both 4s and unpaired 3d electrons** into the electron sea. This generates much stronger metallic bonding, higher melting points, and greater electrical/thermal conductivity than s-block metals (though zinc, with a full 3d¹⁰ sublevel, mainly delocalizes its two 4s electrons and melts at a much lower 420 °C).",
      diagram:
        '<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of ionic lattice brittleness under shear stress and metallic lattice malleability with delocalized electrons">' +
        '<rect x="6" y="6" width="302" height="233" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="332" y="6" width="302" height="233" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="157" y="28" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">Ionic Lattice: Brittle Under Shear</text>' +
        '<text x="483" y="28" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">Metallic Lattice: Malleable</text>' +
        '<g transform="translate(26,48)">' +
        '<text x="58" y="10" font-size="10.5" font-weight="700" text-anchor="middle" fill="#475569">Undisturbed</text>' +
        '<circle cx="24" cy="40" r="14" fill="#3b82f6"/><text x="24" y="44" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="58" cy="40" r="17" fill="#10b981"/><text x="58" y="44" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<circle cx="92" cy="40" r="14" fill="#3b82f6"/><text x="92" y="44" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="24" cy="76" r="17" fill="#10b981"/><text x="24" y="80" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<circle cx="58" cy="76" r="14" fill="#3b82f6"/><text x="58" y="80" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="92" cy="76" r="17" fill="#10b981"/><text x="92" y="80" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<circle cx="24" cy="112" r="14" fill="#3b82f6"/><text x="24" y="116" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="58" cy="112" r="17" fill="#10b981"/><text x="58" y="116" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<circle cx="92" cy="112" r="14" fill="#3b82f6"/><text x="92" y="116" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '</g>' +
        '<path d="M 142 122 L 164 122" stroke="#dc2626" stroke-width="2.5"/>' +
        '<polygon points="164,117 173,122 164,127" fill="#dc2626"/>' +
        '<text x="157" y="113" font-size="9.5" font-weight="700" text-anchor="middle" fill="#dc2626">Force</text>' +
        '<g transform="translate(178,48)">' +
        '<text x="58" y="10" font-size="10.5" font-weight="700" text-anchor="middle" fill="#dc2626">Shifted → Repels!</text>' +
        '<circle cx="42" cy="40" r="14" fill="#3b82f6"/><text x="42" y="44" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="76" cy="40" r="17" fill="#10b981"/><text x="76" y="44" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<circle cx="42" cy="82" r="14" fill="#3b82f6"/><text x="42" y="86" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">+</text>' +
        '<circle cx="76" cy="82" r="17" fill="#10b981"/><text x="76" y="86" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">−</text>' +
        '<line x1="20" y1="61" x2="104" y2="61" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<text x="60" y="116" font-size="10" font-weight="700" text-anchor="middle" fill="#dc2626">+ faces + / − faces −</text>' +
        '<text x="60" y="131" font-size="10" font-weight="700" text-anchor="middle" fill="#dc2626">Crystal cleaves</text>' +
        '</g>' +
        '<text x="157" y="218" font-size="10.5" font-weight="700" text-anchor="middle" fill="#334155">Solid: ions fixed (non-conductor) · Molten/aq: mobile ions</text>' +
        '<g transform="translate(352,48)">' +
        '<rect x="6" y="22" width="250" height="122" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 3"/>' +
        '<circle cx="46" cy="54" r="16" fill="#d97706"/><text x="46" y="58" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="106" cy="54" r="16" fill="#d97706"/><text x="106" y="58" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="166" cy="54" r="16" fill="#d97706"/><text x="166" y="58" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="226" cy="54" r="16" fill="#d97706"/><text x="226" y="58" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="76" cy="112" r="16" fill="#d97706"/><text x="76" y="116" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="136" cy="112" r="16" fill="#d97706"/><text x="136" y="116" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="196" cy="112" r="16" fill="#d97706"/><text x="196" y="116" font-size="11" font-weight="800" text-anchor="middle" fill="#fff">Mⁿ⁺</text>' +
        '<circle cx="24" cy="84" r="5" fill="#2563eb"/><text x="24" y="87" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="76" cy="79" r="5" fill="#2563eb"/><text x="76" y="82" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="136" cy="74" r="5" fill="#2563eb"/><text x="136" y="77" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="196" cy="82" r="5" fill="#2563eb"/><text x="196" y="85" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="240" cy="112" r="5" fill="#2563eb"/><text x="240" y="115" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="44" cy="126" r="5" fill="#2563eb"/><text x="44" y="129" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<circle cx="108" cy="134" r="5" fill="#2563eb"/><text x="108" y="137" font-size="7.5" font-weight="800" text-anchor="middle" fill="#fff">e⁻</text>' +
        '<path d="M 16 14 L 78 14" stroke="#0f766e" stroke-width="2.2"/>' +
        '<polygon points="78,10 86,14 78,18" fill="#0f766e"/>' +
        '<text x="150" y="17" font-size="10" font-weight="700" fill="#0f766e">Top plane slides — e⁻ sea cushions cations</text>' +
        '</g>' +
        '<text x="483" y="218" font-size="10.5" font-weight="700" text-anchor="middle" fill="#334155">Non-directional bonding · Mobile delocalized e⁻</text>' +
        '</svg>',
      diagramCaption:
        "Left: Shifting an ionic crystal plane aligns like charges, causing brittle fracture. Right: Delocalized valence electrons maintain continuous non-directional attraction as metal cation planes slide.",
      workedExamples: [
        {
          title: "Formulas of Polyatomic Salts & Lattice Strength Ranking",
          problem:
            "(a) Deduce the chemical formula of aluminium sulfate. (b) Rank NaF, NaCl, and MgO in order of increasing melting point, justifying your order using ionic charge and radius.",
          steps: [
            "(a) Aluminium forms Al³⁺ (Group 13) and the sulfate polyatomic ion is SO₄²⁻.",
            "Balance total positive and negative charge using the lowest common multiple of 3 and 2 (which is 6): we need 2 × Al³⁺ (+6) and 3 × SO₄²⁻ (−6).",
            "Place parentheses around the polyatomic ion whenever more than one is needed: **Al₂(SO₄)₃**.",
            "(b) Compare charge product {{|q_+ * q_-|}} first: MgO has (2+)(2−) = 4, whereas both NaF and NaCl have (1+)(1−) = 1. Therefore MgO has by far the highest lattice enthalpy and melting point.",
            "Next compare NaF and NaCl (identical charges, same Na⁺ cation): F⁻ has fewer electron shells than Cl⁻ (ionic radius 133 pm vs 181 pm), so inter-ionic distance is smaller in NaF, giving stronger electrostatic attraction than in NaCl.",
          ],
          answer: "(a) Al₂(SO₄)₃; (b) NaCl (801 °C) < NaF (993 °C) < MgO (2852 °C).",
          yourTurn: {
            question:
              "How many total ions (cations + anions combined) are present in one formula unit of calcium phosphate, Ca₃(PO₄)₂?",
            answer: { type: "number", value: 5 },
            solution:
              "Ca²⁺ and PO₄³⁻ combine in a 3 : 2 ratio to balance +6 and −6. One formula unit Ca₃(PO₄)₂ contains 3 Ca²⁺ ions + 2 PO₄³⁻ ions = **5 ions**.",
          },
        },
        {
          title: "Explaining Period 3 & Transition-Metal Melting Point Trends [SL & HL]",
          problem:
            "Explain why the melting point of aluminium (660 °C) is higher than that of sodium (98 °C), and why iron (1538 °C) melts far higher than calcium (842 °C).",
          steps: [
            "Compare Na and Al: Sodium forms Na⁺ with 1 delocalized valence electron per atom, while aluminium forms Al³⁺ with 3 delocalized valence electrons per atom.",
            "In addition, Al³⁺ has a smaller ionic radius than Na⁺ (greater effective nuclear charge pulling remaining shells closer), giving Al³⁺ a much higher charge density.",
            "Stronger electrostatic attraction between Al³⁺ ions and the denser electron sea requires more thermal energy to overcome, raising the melting point.",
            "[HL] Compare Ca and Fe: Calcium only delocalizes its two 4s electrons, whereas iron (a d-block transition metal) has closely spaced 3d and 4s sublevels and delocalizes both 4s and unpaired 3d electrons, alongside a smaller ionic radius — yielding much stronger metallic bonding.",
          ],
          answer:
            "Al has higher cation charge (+3 vs +1), smaller ionic radius, and 3× more delocalized electrons per atom than Na; [HL] Fe also delocalizes 3d electrons in addition to 4s electrons.",
        },
      ],
      keyPoints: [
        "Ionic bonding is the strong electrostatic attraction between oppositely charged ions arranged in a 3D crystal lattice — never say ionic compounds form 'molecules'.",
        "Lattice enthalpy increases with **greater ionic charge** (dominant factor) and **smaller ionic radius**.",
        "Ionic compounds conduct electricity **only when molten or aqueous** (mobile ions), never as solids; metals conduct in both **solid and molten** states via delocalized electrons.",
        "Ionic crystals are **brittle** (shifted layers align like charges and repel); metals are **malleable and ductile** (non-directional attraction to the electron sea persists during slip).",
        "[HL] Transition metals exhibit high melting points and hardness because both **4s and unpaired 3d electrons** contribute to the delocalized electron sea.",
      ],
      whyItWorks:
        "Both ionic and metallic bond strengths obey Coulomb's electrostatic force law, {{F = k * |q_1 * q_2| / r^2}}. Increasing charge magnitude {{q}} increases force linearly per ion (and quadruples when both ions double, as in Mg²⁺O²⁻ vs Na⁺Cl⁻), while reducing radius {{r}} strengthens attraction inversely with {{r^2}}. Notice that an alloy or metal conducts via electrons moving through a stationary cation framework, whereas molten salt conducts via entire cations and anions migrating to opposite electrodes — which is why passing DC through molten salt causes chemical decomposition (electrolysis), while passing DC through copper causes no chemical change.",
      strategies: [
        "When comparing two ionic melting points on Paper 2, ALWAYS check **ionic charge first**, then **ionic radius** — state both explicitly alongside 'stronger electrostatic attraction between oppositely charged ions'.",
        "When explaining conductivity, ALWAYS name the **exact mobile charge carrier** ('mobile ions' for molten/aqueous ionic; 'delocalized electrons' for metals/graphite) — 'free electrons' in molten NaCl scores zero!",
        "Never refer to 'intermolecular forces' in an ionic lattice or a metal — ionic and metallic solids have continuous lattices, not discrete molecules.",
      ],
      thinkDeeper:
        "Mercury (Hg, [Xe] 4f¹⁴ 5d¹⁰ 6s²) is a liquid at room temperature (−39 °C) even though neighbouring gold melts at 1064 °C. Relativistic contraction stabilizes mercury's 6s² pair so strongly that Hg atoms hold onto their valence electrons tightly — behaving almost like a noble gas with very weak metallic bonding!",
    },

    // =========================================================================
    // SECTION 2: S2.2 Covalent Bonding, VSEPR (2–4 Domains), Polarity & IMFs [SL]
    // =========================================================================
    {
      id: "covalent-vsepr-imfs",
      heading: "S2.2 Covalent Bonding, VSEPR (2–4 Domains), Polarity & IMFs",
      level: "SL",
      discovery: {
        problem:
          "Carbon dioxide (CO₂) contains two strongly polar C=O bonds (Δχ = 0.8), yet CO₂ is a non-polar gas that sublimes at −78.5 °C. Water (H₂O) also has two polar bonds (O−H, Δχ = 1.2) and an even smaller molar mass (18 vs 44 g mol⁻¹), yet water is strongly polar and boils at +100 °C! Why do the two bond dipoles cancel completely in CO₂ but reinforce in H₂O?",
        idea:
          "Count **electron domains** around the central atom! Carbon in O=C=O has **2 electron domains** (two double bonds, zero lone pairs), so repulsion drives them 180° apart into a **linear** shape where equal and opposite bond dipoles cancel symmetrically. Oxygen in H₂O has **4 electron domains** (2 bonding pairs + 2 lone pairs), giving a tetrahedral electron arrangement and a **bent (104.5°)** molecular geometry where both O−H dipoles point toward the oxygen side, creating a large net dipole AND enabling strong intermolecular **hydrogen bonding**!",
      },
      body:
        "### Covalent & Coordinate (Dative) Bonding\n" +
        "A **covalent bond** is the electrostatic attraction between a shared pair of electrons and the positively charged nuclei of both bonded atoms. In a **coordinate (dative) covalent bond**, **both** shared electrons originate from the same atom (e.g., NH₃ donating its lone pair to H⁺ to form NH₄⁺, or CO forming a triple bond where one bond is dative from O to C, or Al₂Cl₆ dimer bridges). Once formed, a coordinate bond is identical in length and strength to an ordinary covalent bond.\n\n" +
        "**Bond order, length & strength:** Multiple bonds pack higher electron density between two nuclei, pulling them closer and increasing bond enthalpy:\n" +
        "- **Length:** Single > Double > Triple (e.g. C−C 154 pm > C=C 134 pm > C≡C 120 pm)\n" +
        "- **Strength:** Single < Double < Triple (e.g. C−C 346 < C=C 614 < C≡C 839 kJ mol⁻¹)\n\n" +
        "### VSEPR Theory (2–4 Electron Domains, SL)\n" +
        "Valence Shell Electron Pair Repulsion (VSEPR) states that **electron domains** (each single, double, or triple bond counts as **ONE** bonding domain; each lone pair counts as **ONE** non-bonding domain) repel each other and arrange as far apart as possible in 3D space. Because lone pairs are held closer to one nucleus and spread wider than bonding pairs, repulsion decreases in the order:\n" +
        "**Lone pair–lone pair (LP–LP) > Lone pair–bonding pair (LP–BP) > Bonding pair–bonding pair (BP–BP)**\n\n" +
        "| Total Domains | Bonding : Lone | Electron Domain Geometry | Molecular Geometry | Bond Angle | SL Examples |\n" +
        "|---|---|---|---|---|---|\n" +
        "| 2 | 2 : 0 | Linear | Linear | 180° | CO₂, HCN, BeCl₂, C₂H₂ |\n" +
        "| 3 | 3 : 0 | Trigonal planar | Trigonal planar | 120° | BF₃, BCl₃, H₂CO, CO₃²⁻, NO₃⁻ |\n" +
        "| 3 | 2 : 1 | Trigonal planar | Bent (V-shaped) | ~117° (<120°) | SO₂, O₃, NO₂⁻ |\n" +
        "| 4 | 4 : 0 | Tetrahedral | Tetrahedral | 109.5° | CH₄, CCl₄, NH₄⁺, SO₄²⁻ |\n" +
        "| 4 | 3 : 1 | Tetrahedral | Trigonal pyramidal | 107° | NH₃, PCl₃, H₃O⁺ |\n" +
        "| 4 | 2 : 2 | Tetrahedral | Bent (V-shaped) | 104.5° | H₂O, H₂S, OF₂ |\n\n" +
        "### Molecular Polarity & Intermolecular Forces (IMFs)\n" +
        "A molecule is **polar** if and only if (1) it contains polar bonds (Δχ > 0) AND (2) its 3D geometry is **asymmetric** so individual bond dipoles do **not** cancel. Symmetric molecules with identical outer atoms (CO₂, BF₃, CCl₄) are **non-polar** despite having polar bonds.\n\n" +
        "Intermolecular forces act **between** discrete molecules (far weaker than covalent bonds within molecules):\n" +
        "1. **London dispersion forces (LDF):** Present in **all** molecules/atoms. Temporary fluctuations in electron distribution create instantaneous dipoles that induce dipoles in neighbours. Strength increases with **total number of electrons (molar mass)** and **surface contact area** (unbranched pentane boils higher than spherical 2,2-dimethylpropane).\n" +
        "2. **Dipole–dipole attractions:** Permanent electrostatic attractions between δ⁺ and δ⁻ ends of polar molecules (e.g., HCl, propanone). Important when comparing molecules of **similar molar mass**.\n" +
        "3. **Hydrogen bonding:** An unusually strong dipole–dipole attraction occurring when **H is covalently bonded directly to F, O, or N** and attracted to a **lone pair on an F, O, or N atom** of a neighbouring molecule (e.g. H₂O, NH₃, HF, alcohols, carboxylic acids, DNA base pairs). Water forms up to **4 H-bonds per molecule** (2 H atoms + 2 lone pairs on O), explaining its abnormally high boiling point (100 °C) and lower density of ice.\n\n" +
        "### Covalent Network Solids & Chromatography\n" +
        "- **Diamond & Si / SiO₂:** Tetrahedral 3D covalent network (each C bonded to 4 C in diamond; each Si to 4 O and each O to 2 Si in quartz SiO₂). Very high melting point, hard, electrical insulator (no delocalized electrons).\n" +
        "- **Graphite & Graphene:** Planar hexagonal layers where each C bonds to **3 others** (120°), leaving 1 delocalized electron per C across the layer. Conducts electricity **parallel** to layers; graphite's layers slide due to weak London dispersion forces between planes (lubricant). **Graphene** is a single monolayer — ultra-strong, transparent, exceptional conductor.\n" +
        "- **Buckminsterfullerene (C₆₀):** Discrete spherical **molecular** cage of 60 C atoms (pentagons + hexagons), NOT a giant covalent network! It has a lower melting point, dissolves in non-polar solvents, and is a semiconductor because electrons only delocalize over individual cages.\n" +
        "- **Paper / Thin-Layer Chromatography (TLC):** Separates mixtures by differential attraction between a **polar stationary phase** (e.g. silica/cellulose with −OH groups) and a **mobile phase** (solvent). Retention factor {{R_f = d_\"spot\" / d_\"solvent\"}} (always between 0 and 1).",
      diagram:
        '<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="VSEPR geometries and bond angles for 2, 3, and 4 electron domains including lone pair compression">' +
        '<rect x="4" y="4" width="632" height="237" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="25" font-size="13" font-weight="800" text-anchor="middle" fill="#1e293b">VSEPR Geometries (2–4 Domains) &amp; Lone-Pair Angle Compression</text>' +
        '<g transform="translate(18,40)">' +
        '<rect x="0" y="0" width="188" height="86" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#2563eb">2 Domains · Linear (180°)</text>' +
        '<line x1="40" y1="45" x2="148" y2="45" stroke="#334155" stroke-width="3"/>' +
        '<line x1="40" y1="51" x2="148" y2="51" stroke="#334155" stroke-width="3"/>' +
        '<circle cx="40" cy="48" r="11" fill="#ef4444"/><text x="40" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="94" cy="48" r="12" fill="#1e293b"/><text x="94" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#fff">C</text>' +
        '<circle cx="148" cy="48" r="11" fill="#ef4444"/><text x="148" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<text x="94" y="77" font-size="9.5" font-weight="700" text-anchor="middle" fill="#475569">CO₂ · dipoles cancel (non-polar)</text>' +
        '</g>' +
        '<g transform="translate(226,40)">' +
        '<rect x="0" y="0" width="188" height="86" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#2563eb">3 Domains · Trig. Planar (120°)</text>' +
        '<line x1="94" y1="49" x2="94" y2="27" stroke="#334155" stroke-width="2.5"/>' +
        '<line x1="94" y1="49" x2="58" y2="68" stroke="#334155" stroke-width="2.5"/>' +
        '<line x1="94" y1="49" x2="130" y2="68" stroke="#334155" stroke-width="2.5"/>' +
        '<circle cx="94" cy="49" r="10" fill="#7c3aed"/><text x="94" y="53" font-size="9.5" font-weight="800" text-anchor="middle" fill="#fff">B</text>' +
        '<circle cx="94" cy="27" r="8.5" fill="#10b981"/><text x="94" y="30" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">F</text>' +
        '<circle cx="58" cy="68" r="8.5" fill="#10b981"/><text x="58" y="71" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">F</text>' +
        '<circle cx="130" cy="68" r="8.5" fill="#10b981"/><text x="130" y="71" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">F</text>' +
        '<text x="150" y="45" font-size="9" font-weight="700" fill="#475569">120°</text>' +
        '</g>' +
        '<g transform="translate(434,40)">' +
        '<rect x="0" y="0" width="188" height="86" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#0f766e">3 (2 BP, 1 LP) · Bent (~117°)</text>' +
        '<ellipse cx="94" cy="31" rx="11" ry="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.3"/>' +
        '<circle cx="90" cy="31" r="2" fill="#d97706"/><circle cx="98" cy="31" r="2" fill="#d97706"/>' +
        '<line x1="94" y1="50" x2="58" y2="70" stroke="#334155" stroke-width="2.5"/>' +
        '<line x1="94" y1="50" x2="130" y2="70" stroke="#334155" stroke-width="2.5"/>' +
        '<circle cx="94" cy="50" r="10" fill="#eab308"/><text x="94" y="54" font-size="9.5" font-weight="800" text-anchor="middle" fill="#fff">S</text>' +
        '<circle cx="58" cy="70" r="9" fill="#ef4444"/><text x="58" y="73" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="130" cy="70" r="9" fill="#ef4444"/><text x="130" y="73" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<text x="152" y="52" font-size="9" font-weight="700" fill="#0f766e">SO₂</text>' +
        '</g>' +
        '<g transform="translate(18,136)">' +
        '<rect x="0" y="0" width="188" height="94" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#2563eb">4 (4 BP, 0 LP) · Tetrahedral</text>' +
        '<line x1="94" y1="50" x2="94" y2="26" stroke="#334155" stroke-width="2.3"/>' +
        '<line x1="94" y1="50" x2="58" y2="66" stroke="#334155" stroke-width="2.3"/>' +
        '<polygon points="94,50 124,71 129,63" fill="#334155"/>' +
        '<line x1="94" y1="50" x2="128" y2="42" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>' +
        '<circle cx="94" cy="50" r="10" fill="#1e293b"/><text x="94" y="54" font-size="9.5" font-weight="800" text-anchor="middle" fill="#fff">C</text>' +
        '<circle cx="94" cy="26" r="7.5" fill="#64748b"/><text x="94" y="29" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="58" cy="66" r="7.5" fill="#64748b"/><text x="58" y="69" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="128" cy="68" r="7.5" fill="#64748b"/><text x="128" y="71" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="131" cy="41" r="7.5" fill="#94a3b8"/><text x="131" y="44" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<text x="94" y="86" font-size="9.5" font-weight="800" text-anchor="middle" fill="#1e293b">CH₄ · 109.5° (non-polar)</text>' +
        '</g>' +
        '<g transform="translate(226,136)">' +
        '<rect x="0" y="0" width="188" height="94" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#0f766e">4 (3 BP, 1 LP) · Trig. Pyramidal</text>' +
        '<ellipse cx="94" cy="31" rx="11" ry="7.5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.3"/>' +
        '<circle cx="90" cy="31" r="2" fill="#d97706"/><circle cx="98" cy="31" r="2" fill="#d97706"/>' +
        '<line x1="94" y1="50" x2="60" y2="68" stroke="#334155" stroke-width="2.3"/>' +
        '<polygon points="94,50 123,71 128,63" fill="#334155"/>' +
        '<line x1="94" y1="50" x2="104" y2="71" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>' +
        '<circle cx="94" cy="50" r="10" fill="#2563eb"/><text x="94" y="54" font-size="9.5" font-weight="800" text-anchor="middle" fill="#fff">N</text>' +
        '<circle cx="60" cy="68" r="7.5" fill="#64748b"/><text x="60" y="71" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="127" cy="68" r="7.5" fill="#64748b"/><text x="127" y="71" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="105" cy="72" r="7.5" fill="#94a3b8"/><text x="105" y="75" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<text x="94" y="88" font-size="9.5" font-weight="800" text-anchor="middle" fill="#0f766e">NH₃ · 107° (polar)</text>' +
        '</g>' +
        '<g transform="translate(434,136)">' +
        '<rect x="0" y="0" width="188" height="94" rx="8" fill="#ffffff" stroke="#e2e8f0"/>' +
        '<text x="94" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#dc2626">4 (2 BP, 2 LP) · Bent</text>' +
        '<ellipse cx="77" cy="34" rx="10" ry="7" transform="rotate(-25 77 34)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.3"/>' +
        '<circle cx="74" cy="34" r="1.8" fill="#d97706"/><circle cx="80" cy="34" r="1.8" fill="#d97706"/>' +
        '<ellipse cx="111" cy="34" rx="10" ry="7" transform="rotate(25 111 34)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.3"/>' +
        '<circle cx="108" cy="34" r="1.8" fill="#d97706"/><circle cx="114" cy="34" r="1.8" fill="#d97706"/>' +
        '<line x1="94" y1="52" x2="64" y2="71" stroke="#334155" stroke-width="2.5"/>' +
        '<line x1="94" y1="52" x2="124" y2="71" stroke="#334155" stroke-width="2.5"/>' +
        '<circle cx="94" cy="52" r="10.5" fill="#ef4444"/><text x="94" y="56" font-size="9.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="64" cy="71" r="7.5" fill="#64748b"/><text x="64" y="74" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<circle cx="124" cy="71" r="7.5" fill="#64748b"/><text x="124" y="74" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">H</text>' +
        '<text x="94" y="88" font-size="9.5" font-weight="800" text-anchor="middle" fill="#dc2626">H₂O · 104.5° (polar, H-bonds)</text>' +
        '</g>' +
        '</svg>',
      diagramCaption:
        "Across CH₄ → NH₃ → H₂O, the electron domain geometry stays tetrahedral (4 domains), but replacing each bonding pair with a wider lone pair compresses the H−X−H bond angle by ~2.5° per lone pair (109.5° → 107° → 104.5°).",
      workedExamples: [
        {
          title: "Predicting Molecular Shape, Bond Angle & Polarity",
          problem:
            "Deduce the Lewis formula, electron domain geometry, molecular geometry, approximate bond angle, and polarity of phosphorus trichloride, PCl₃ (Pauling χ: P = 2.2, Cl = 3.2).",
          steps: [
            "Count total valence electrons: P (Group 15) = 5; 3 × Cl (Group 17) = 21; total = 26 e⁻.",
            "Draw 3 single P−Cl bonds (uses 6 e⁻), complete octets on all three Cl atoms (uses 18 e⁻), and place the remaining 2 e⁻ as **1 lone pair on P**.",
            "Count electron domains around P: 3 bonding pairs + 1 lone pair = **4 electron domains** → **tetrahedral** electron domain geometry.",
            "Ignore the lone pair when naming molecular shape: **trigonal pyramidal**. Greater LP–BP repulsion compresses the Cl−P−Cl angle below 109.5° (approximately 107°, actually ~100° for Period 3).",
            "Polarity: Each P−Cl bond is polar (Δχ = 3.2 − 2.2 = 1.0, δ⁺ on P, δ⁻ on Cl). Because the trigonal pyramidal geometry is asymmetric, the three bond dipoles do not cancel → **polar molecule**.",
          ],
          answer:
            "4 domains (3 BP, 1 LP); tetrahedral electron domain geometry; trigonal pyramidal molecular geometry; bond angle <109.5° (~107°); polar.",
          yourTurn: {
            question:
              "How many electron domains surround the central carbon atom in methanal (formaldehyde), H₂C=O?",
            answer: { type: "number", value: 3 },
            solution:
              "Carbon forms two C−H single bonds and one C=O double bond, with zero lone pairs. A double bond counts as **one** electron domain, so total domains = 2 + 1 = **3** (trigonal planar, ~120°).",
          },
        },
        {
          title: "Comparing Boiling Points via Intermolecular Forces",
          problem:
            "Propan-1-ol (CH₃CH₂CH₂OH, M = 60.1 g mol⁻¹), propanal (CH₃CH₂CHO, M = 58.1 g mol⁻¹), and butane (CH₃CH₂CH₂CH₃, M = 58.1 g mol⁻¹) have almost identical molar masses, yet their boiling points are 97 °C, 49 °C, and −1 °C respectively. Explain this order.",
          steps: [
            "All three molecules have very similar molar masses (~58–60 g mol⁻¹) and numbers of electrons, so their **London dispersion forces** have similar magnitudes.",
            "Butane is non-polar (only C−C and nearly non-polar C−H bonds), so its molecules interact solely via **London dispersion forces** → lowest boiling point (−1 °C).",
            "Propanal contains a polar C=O carbonyl group (no H bonded directly to O), so it has **permanent dipole–dipole attractions** in addition to London dispersion forces → intermediate boiling point (49 °C).",
            "Propan-1-ol contains an −OH group (H covalently bonded to strongly electronegative O), enabling strong intermolecular **hydrogen bonding** alongside dipole–dipole and London forces → highest boiling point (97 °C).",
          ],
          answer:
            "Butane (LDF only) < propanal (LDF + dipole–dipole) < propan-1-ol (LDF + dipole–dipole + hydrogen bonding); more energy is required to overcome stronger IMFs.",
        },
      ],
      keyPoints: [
        "Every single, double, or triple bond counts as **one** electron domain; each lone pair counts as **one** electron domain.",
        "Always distinguish **electron domain geometry** (includes lone pairs) from **molecular geometry** (positions of atoms only).",
        "Repulsion hierarchy **LP–LP > LP–BP > BP–BP** compresses bond angles: 109.5° (CH₄) → 107° (NH₃) → 104.5° (H₂O).",
        "Boiling a molecular covalent liquid breaks **intermolecular forces**, NEVER the strong covalent bonds inside molecules — except in covalent network solids (diamond, SiO₂).",
        "Hydrogen bonding requires H bonded **directly to F, O, or N** interacting with a lone pair on an F, O, or N atom — propanone and ethoxyethane do NOT H-bond to themselves!",
        "London dispersion forces can beat dipole–dipole forces when molar mass is much larger (e.g. I₂ is a solid at 25 °C while polar HCl is a gas at −85 °C).",
      ],
      whyItWorks:
        "Why does a lone pair repel more strongly than a bonding pair? A bonding pair is stretched tightly between **two** positively charged nuclei, confining its electron cloud into a narrow cylinder. A lone pair is attracted by only **one** nucleus, so its electron cloud balloons closer to the central atom and spreads over a wider solid angle — pushing neighbouring bonding domains away and narrowing the bond angle.",
      strategies: [
        "Follow the 4-step VSEPR algorithm: (1) count valence e⁻ (add e⁻ for anions, subtract for cations), (2) draw Lewis structure & complete outer octets, (3) count domains on central atom (BP + LP), (4) state both electron-domain and molecular geometry + angle.",
        "In IMF questions, ALWAYS name **all** IMFs present in each substance AND explicitly state that stronger IMFs require **more thermal energy to overcome**.",
        "When comparing graphite vs diamond vs C₆₀, link three items in one sentence: **bonding/coordination number → presence or absence of delocalized electrons → macroscopic conductivity/hardness**.",
      ],
      thinkDeeper:
        "In Group 16 hydrides (H₂O, H₂S, H₂Se, H₂Te), boiling points drop sharply from H₂O (+100 °C) to H₂S (−60 °C) because H-bonding vanishes, then rise steadily through H₂Se (−41 °C) to H₂Te (−2 °C) because increasing electron count strengthens London dispersion forces!",
    },

    // =========================================================================
    // SECTION 3: S2.2 Expanded Octets, Resonance, Formal Charge & Hybridization [HL]
    // =========================================================================
    {
      id: "expanded-octets-hybridization-hl",
      heading: "S2.2 Expanded Octets, Resonance, Formal Charge & Hybridization",
      level: "HL",
      discovery: {
        problem:
          "If you draw a single Lewis structure for the carbonate ion (CO₃²⁻), it shows **one** C=O double bond (expected length 122 pm) and **two** C−O single bonds (expected length 143 pm). Yet X-ray diffraction reveals that **all three** carbon–oxygen bonds in CO₃²⁻ are identically **129 pm** long! Similarly, why can sulfur form SF₆ (12 valence electrons around S) while oxygen can never form OF₆?",
        idea:
          "In CO₃²⁻, the π electron pair is not trapped on one oxygen — it is **delocalized** equally across all three C−O bonds! The true ion is a single **resonance hybrid** with a carbon–oxygen **bond order of 4/3 = 1.33**, intermediate in length and strength between a single (1.0) and double (2.0) bond. And sulfur (Period 3, n = 3) has accessible outer-shell capacity and larger atomic size to accommodate 5 or 6 electron domains (an **expanded octet**), whereas Period 2 elements (C, N, O, F) only have n = 2 (one 2s and three 2p orbitals) and strictly obey the octet maximum of 8 valence electrons!",
      },
      body:
        "### Expanded Octets: VSEPR for 5 & 6 Electron Domains [HL]\n" +
        "Elements in **Period 3 and beyond** (e.g. P, S, Cl, Br, I, Xe) can expand their valence shell to **10 or 12 electrons** (5 or 6 electron domains):\n\n" +
        "| Total Domains | Bonding : Lone | Electron Domain Geometry | Molecular Geometry | Bond Angles | HL Examples |\n" +
        "|---|---|---|---|---|---|\n" +
        "| 5 | 5 : 0 | Trigonal bipyramidal | Trigonal bipyramidal | 90°, 120°, 180° | PCl₅, PF₅ |\n" +
        "| 5 | 4 : 1 | Trigonal bipyramidal | Seesaw | <90°, <120° | SF₄, XeO₂F₂ |\n" +
        "| 5 | 3 : 2 | Trigonal bipyramidal | T-shaped | <90° (~87.5°) | ClF₃, BrF₃ |\n" +
        "| 5 | 2 : 3 | Trigonal bipyramidal | Linear | 180° | XeF₂, I₃⁻, ICl₂⁻ |\n" +
        "| 6 | 6 : 0 | Octahedral | Octahedral | 90°, 180° | SF₆, PF₆⁻ |\n" +
        "| 6 | 5 : 1 | Octahedral | Square pyramidal | <90° (~85°) | BrF₅, IF₅, XeOF₄ |\n" +
        "| 6 | 4 : 2 | Octahedral | Square planar | 90°, 180° | XeF₄, ICl₄⁻ |\n\n" +
        "**Crucial 5-domain rule:** In a trigonal bipyramid, **lone pairs ALWAYS occupy equatorial positions** (where they have only **two** 90° neighbours instead of three in axial positions). In a 6-domain octahedron with 2 lone pairs (e.g. XeF₄), the two lone pairs sit **180° opposite (trans)** to minimize LP–LP repulsion, leaving a **square planar** non-polar molecule!\n\n" +
        "### Formal Charge & Preferred Lewis Structures [HL]\n" +
        "When multiple valid Lewis structures exist (e.g. SO₂, SO₄²⁻, N₂O, SCN⁻), calculate the **formal charge (FC)** on every atom:\n" +
        "{{FC = V - N - (1/2)B}}\n" +
        "where **V** = valence electrons of the free neutral atom (group unit digit), **N** = non-bonding (lone-pair) electrons, and **B** = total bonding electrons (so {{(1/2)B}} = number of covalent bonds drawn to that atom). Check: the sum of all formal charges MUST equal the overall charge of the species!\n\n" +
        "**Preferred Lewis structure rules:**\n" +
        "1. Formal charges closest to **zero** on all atoms.\n" +
        "2. Any remaining **negative formal charge** resides on the **most electronegative atom** (e.g. O or N rather than C or S).\n\n" +
        "### Resonance, Delocalization & Ozone Catalysis [HL]\n" +
        "- **Resonance hybrid:** Occurs whenever a molecule/ion has delocalized π electrons spread across ≥3 adjacent atoms (CO₃²⁻, NO₃⁻, O₃, RCOO⁻ carboxylate, C₆H₆ benzene). All equivalent bonds have identical intermediate length and **bond order = (total bonding pairs across equivalent bonds) / (number of bond positions)**:\n" +
        "  - O₃ (ozone) & RCOO⁻: 3 bonding pairs across 2 positions → **bond order = 1.5**\n" +
        "  - CO₃²⁻ & NO₃⁻: 4 bonding pairs across 3 positions → **bond order = 1.33**\n" +
        "  - Benzene (C₆H₆): 9 bonding pairs across 6 C–C links → **bond order = 1.5** (all 139 pm)\n" +
        "- **Ozone vs Oxygen UV absorption:** Because O₂ has a double bond (**bond order 2.0**, 498 kJ mol⁻¹) while O₃ has weaker delocalized bonds (**bond order 1.5**, ~364 kJ mol⁻¹), O₂ absorbs higher-energy shorter-wavelength UV (<242 nm) while O₃ absorbs lower-energy longer-wavelength UV-B (<330 nm). **CFC-derived Cl• radicals** and **NO• radicals** catalytically destroy stratospheric O₃:\n" +
        "  - Cl• + O₃ → ClO• + O₂, then ClO• + O• → Cl• + O₂ (net: O₃ + O• → 2 O₂; Cl• regenerated!)\n" +
        "  - NO• + O₃ → NO₂• + O₂, then NO₂• + O• → NO• + O₂ (net: O₃ + O• → 2 O₂; NO• regenerated!)\n\n" +
        "### Sigma (σ) Bonds, Pi (π) Bonds & Hybridization [HL]\n" +
        "- **Sigma (σ) bond:** Head-on (axial) overlap of orbitals along the internuclear axis; electron density is concentrated **between** the nuclei; allows free rotation.\n" +
        "- **Pi (π) bond:** Sideways (lateral) overlap of two parallel unhybridized **p orbitals**; electron density lies **above and below** the internuclear axis; restricts rotation (enabling E/Z isomerism!).\n" +
        "- Counting rule: **Single bond = 1 σ**; **Double bond = 1 σ + 1 π**; **Triple bond = 1 σ + 2 π**.\n" +
        "- **Hybridization** mixes s and p atomic orbitals on an atom into degenerate hybrid orbitals matching its **number of electron domains**:\n" +
        "  - **4 domains → sp³** (tetrahedral, 109.5°, 0 unhybridized p orbitals; e.g. CH₄, NH₃, H₂O, diamond)\n" +
        "  - **3 domains → sp²** (trigonal planar, 120°, 1 unhybridized p orbital for 1 π bond; e.g. C₂H₄, C₆H₆, graphite, CO₃²⁻)\n" +
        "  - **2 domains → sp** (linear, 180°, 2 unhybridized p orbitals for 2 π bonds; e.g. C₂H₂, CO₂, HCN)",
      diagram:
        '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five and six domain expanded octet VSEPR geometries and resonance delocalization in ozone and carbonate">' +
        '<rect x="5" y="5" width="386" height="240" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="401" y="5" width="234" height="240" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="198" y="25" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1e293b">Expanded Octet Shapes (5 &amp; 6 Domains · HL)</text>' +
        '<text x="518" y="25" font-size="12.5" font-weight="800" text-anchor="middle" fill="#7c3aed">Delocalized Resonance Hybrids</text>' +
        '<g transform="translate(16,38)">' +
        '<rect x="0" y="0" width="114" height="92" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#2563eb">Seesaw (4:1 · SF₄)</text>' +
        '<line x1="57" y1="50" x2="57" y2="25" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="57" y2="75" stroke="#334155" stroke-width="2"/>' +
        '<polygon points="57,50 85,61 88,54" fill="#334155"/>' +
        '<line x1="57" y1="50" x2="86" y2="41" stroke="#64748b" stroke-width="1.8" stroke-dasharray="3 2"/>' +
        '<ellipse cx="32" cy="50" rx="12" ry="7" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<circle cx="29" cy="50" r="1.7" fill="#d97706"/><circle cx="35" cy="50" r="1.7" fill="#d97706"/>' +
        '<circle cx="57" cy="50" r="8.5" fill="#eab308"/><text x="57" y="53" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">S</text>' +
        '<circle cx="57" cy="24" r="6.5" fill="#10b981"/><circle cx="57" cy="76" r="6.5" fill="#10b981"/>' +
        '<circle cx="88" cy="58" r="6.5" fill="#10b981"/><circle cx="88" cy="40" r="6.5" fill="#10b981"/>' +
        '<text x="57" y="88" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">LP equatorial!</text>' +
        '</g>' +
        '<g transform="translate(141,38)">' +
        '<rect x="0" y="0" width="114" height="92" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#0f766e">T-shaped (3:2 · ClF₃)</text>' +
        '<line x1="57" y1="50" x2="57" y2="25" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="57" y2="75" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="88" y2="50" stroke="#334155" stroke-width="2"/>' +
        '<ellipse cx="34" cy="39" rx="11" ry="6" transform="rotate(24 34 39)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<ellipse cx="34" cy="61" rx="11" ry="6" transform="rotate(-24 34 61)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<circle cx="57" cy="50" r="8.5" fill="#16a34a"/><text x="57" y="53" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">Cl</text>' +
        '<circle cx="57" cy="24" r="6.5" fill="#10b981"/><circle cx="57" cy="76" r="6.5" fill="#10b981"/><circle cx="88" cy="50" r="6.5" fill="#10b981"/>' +
        '<text x="57" y="88" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">&lt;90° · Polar</text>' +
        '</g>' +
        '<g transform="translate(266,38)">' +
        '<rect x="0" y="0" width="114" height="92" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#2563eb">Linear (2:3 · XeF₂)</text>' +
        '<line x1="57" y1="50" x2="57" y2="25" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="57" y1="50" x2="57" y2="75" stroke="#334155" stroke-width="2.2"/>' +
        '<ellipse cx="34" cy="50" rx="10" ry="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<ellipse cx="80" cy="43" rx="10" ry="5.5" transform="rotate(-15 80 43)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<ellipse cx="80" cy="57" rx="10" ry="5.5" transform="rotate(15 80 57)" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<circle cx="57" cy="50" r="8.5" fill="#6366f1"/><text x="57" y="53" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">Xe</text>' +
        '<circle cx="57" cy="24" r="6.5" fill="#10b981"/><circle cx="57" cy="76" r="6.5" fill="#10b981"/>' +
        '<text x="57" y="88" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">180° · Non-polar</text>' +
        '</g>' +
        '<g transform="translate(16,140)">' +
        '<rect x="0" y="0" width="114" height="94" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#2563eb">Octahedral (6:0 · SF₆)</text>' +
        '<line x1="57" y1="50" x2="57" y2="24" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="57" y2="76" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="31" y2="59" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="83" y2="59" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="35" y2="41" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<line x1="57" y1="50" x2="79" y2="41" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<circle cx="57" cy="50" r="8.5" fill="#eab308"/><text x="57" y="53" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">S</text>' +
        '<circle cx="57" cy="24" r="5.5" fill="#10b981"/><circle cx="57" cy="76" r="5.5" fill="#10b981"/>' +
        '<circle cx="31" cy="59" r="5.5" fill="#10b981"/><circle cx="83" cy="59" r="5.5" fill="#10b981"/>' +
        '<circle cx="35" cy="41" r="5.5" fill="#34d399"/><circle cx="79" cy="41" r="5.5" fill="#34d399"/>' +
        '<text x="57" y="90" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">90° · Non-polar</text>' +
        '</g>' +
        '<g transform="translate(141,140)">' +
        '<rect x="0" y="0" width="114" height="94" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#0f766e">Sq. Pyramidal (5:1)</text>' +
        '<line x1="57" y1="48" x2="57" y2="24" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="48" x2="31" y2="56" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="48" x2="83" y2="56" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="48" x2="35" y2="40" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<line x1="57" y1="48" x2="79" y2="40" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<ellipse cx="57" cy="71" rx="10" ry="6.5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<circle cx="57" cy="48" r="8.5" fill="#dc2626"/><text x="57" y="51" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">Br</text>' +
        '<circle cx="57" cy="24" r="5.5" fill="#10b981"/><circle cx="31" cy="56" r="5.5" fill="#10b981"/><circle cx="83" cy="56" r="5.5" fill="#10b981"/>' +
        '<circle cx="35" cy="40" r="5.5" fill="#34d399"/><circle cx="79" cy="40" r="5.5" fill="#34d399"/>' +
        '<text x="57" y="90" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">BrF₅ · &lt;90° · Polar</text>' +
        '</g>' +
        '<g transform="translate(266,140)">' +
        '<rect x="0" y="0" width="114" height="94" rx="8" fill="#fff" stroke="#e2e8f0"/>' +
        '<text x="57" y="14" font-size="9.5" font-weight="800" text-anchor="middle" fill="#2563eb">Sq. Planar (4:2 · XeF₄)</text>' +
        '<ellipse cx="57" cy="28" rx="9" ry="5.5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<ellipse cx="57" cy="72" rx="9" ry="5.5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<line x1="57" y1="50" x2="30" y2="59" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="84" y2="59" stroke="#334155" stroke-width="2"/>' +
        '<line x1="57" y1="50" x2="34" y2="41" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<line x1="57" y1="50" x2="80" y2="41" stroke="#64748b" stroke-width="1.6" stroke-dasharray="3 2"/>' +
        '<circle cx="57" cy="50" r="8.5" fill="#6366f1"/><text x="57" y="53" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">Xe</text>' +
        '<circle cx="30" cy="59" r="5.5" fill="#10b981"/><circle cx="84" cy="59" r="5.5" fill="#10b981"/>' +
        '<circle cx="34" cy="41" r="5.5" fill="#34d399"/><circle cx="80" cy="41" r="5.5" fill="#34d399"/>' +
        '<text x="57" y="90" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">90° · Non-polar</text>' +
        '</g>' +
        '<g transform="translate(415,40)">' +
        '<rect x="0" y="0" width="206" height="90" rx="8" fill="#fff" stroke="#ddd6fe"/>' +
        '<text x="103" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#6d28d9">Carbonate CO₃²⁻ (BO = 1.33)</text>' +
        '<line x1="103" y1="52" x2="103" y2="29" stroke="#334155" stroke-width="2.4"/>' +
        '<line x1="109" y1="50" x2="109" y2="30" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="3 2"/>' +
        '<line x1="103" y1="52" x2="72" y2="70" stroke="#334155" stroke-width="2.4"/>' +
        '<line x1="99" y1="47" x2="70" y2="64" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="3 2"/>' +
        '<line x1="103" y1="52" x2="134" y2="70" stroke="#334155" stroke-width="2.4"/>' +
        '<line x1="107" y1="47" x2="136" y2="64" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="3 2"/>' +
        '<circle cx="103" cy="52" r="9.5" fill="#1e293b"/><text x="103" y="55" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">C</text>' +
        '<circle cx="103" cy="28" r="8" fill="#ef4444"/><text x="103" y="31" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="71" cy="70" r="8" fill="#ef4444"/><text x="71" y="73" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="135" cy="70" r="8" fill="#ef4444"/><text x="135" y="73" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<text x="172" y="34" font-size="11" font-weight="800" fill="#6d28d9">2−</text>' +
        '<text x="103" y="86" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">All 3 C–O bonds equal (129 pm)</text>' +
        '</g>' +
        '<g transform="translate(415,140)">' +
        '<rect x="0" y="0" width="206" height="94" rx="8" fill="#fff" stroke="#ddd6fe"/>' +
        '<text x="103" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#6d28d9">Ozone O₃ (BO = 1.50 · Bent)</text>' +
        '<ellipse cx="103" cy="30" rx="10" ry="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>' +
        '<line x1="103" y1="48" x2="66" y2="68" stroke="#334155" stroke-width="2.4"/>' +
        '<line x1="103" y1="48" x2="140" y2="68" stroke="#334155" stroke-width="2.4"/>' +
        '<path d="M 69 61 Q 103 38 137 61" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<circle cx="103" cy="48" r="9.5" fill="#ef4444"/><text x="103" y="51" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="66" cy="68" r="8.5" fill="#ef4444"/><text x="66" y="71" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="140" cy="68" r="8.5" fill="#ef4444"/><text x="140" y="71" font-size="8.5" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<text x="103" y="88" font-size="8.5" font-weight="700" text-anchor="middle" fill="#475569">117° · Absorbs longer-λ UV-B</text>' +
        '</g>' +
        '</svg>',
      diagramCaption:
        "Left: Five- and six-domain VSEPR geometries (lone pairs occupy equatorial sites in 5-domain species and opposite trans sites in 6-domain XeF₄). Right: Delocalized π bonding produces identical intermediate bonds in CO₃²⁻ (BO 1.33) and O₃ (BO 1.50).",
      workedExamples: [
        {
          title: "Formal Charge to Select Preferred Lewis Structure of N₂O [HL]",
          problem:
            "Nitrous oxide (N₂O) has the connectivity N−N−O (16 valence electrons). Compare Structure A (:N≡N−O: with 3 lone pairs on O and 1 on terminal N) and Structure B (:N=N=O: with 2 lone pairs on terminal N and 2 on O) using formal charges to deduce the preferred structure.",
          steps: [
            "Recall {{FC = V - N - (1/2)B}} with V(N) = 5 and V(O) = 6.",
            "**Structure A (N≡N−O):**\n- Terminal N: 1 LP (N = 2), 3 bonds (½B = 3) → FC = 5 − 2 − 3 = **0**\n- Central N: 0 LP (N = 0), 4 bonds (½B = 4) → FC = 5 − 0 − 4 = **+1**\n- Oxygen: 3 LP (N = 6), 1 bond (½B = 1) → FC = 6 − 6 − 1 = **−1** (sum = 0 ✓)",
            "**Structure B (N=N=O):**\n- Terminal N: 2 LP (N = 4), 2 bonds (½B = 2) → FC = 5 − 4 − 2 = **−1**\n- Central N: 0 LP (N = 0), 4 bonds (½B = 4) → FC = 5 − 0 − 4 = **+1**\n- Oxygen: 2 LP (N = 4), 2 bonds (½B = 2) → FC = 6 − 4 − 2 = **0** (sum = 0 ✓)",
            "Both have formal charges of (−1, +1, 0), so compare electronegativity: O (χ = 3.4) is more electronegative than N (χ = 3.0). Placing the −1 formal charge on oxygen makes **Structure A (:N≡N⁺−O⁻)** the major contributor.",
          ],
          answer: "Structure A (:N≡N−O:) is preferred because the negative formal charge (−1) lies on the more electronegative oxygen atom.",
          yourTurn: {
            question:
              "In the expanded-octet Lewis structure of the sulfate ion (SO₄²⁻) drawn with TWO S=O double bonds and TWO S−O single bonds (and zero lone pairs on sulfur), what is the formal charge on the central sulfur atom?",
            answer: { type: "number", value: 0 },
            solution:
              "Sulfur (Group 16) has V = 6, N = 0 lone-pair electrons, and 6 covalent bonds (½B = 6). Therefore FC(S) = 6 − 0 − 6 = **0** (the two −1 formal charges sit on the two singly bonded O atoms).",
          },
        },
        {
          title: "Counting σ / π Bonds & Assigning Hybridization in Organic Molecules [HL]",
          problem:
            "Acrylonitrile has the structural formula CH₂=CH−C≡N. Determine (a) the total number of σ and π bonds, and (b) the hybridization of each carbon atom from left to right.",
          steps: [
            "Expand every bond: 3 C−H single bonds (3 σ), 1 C=C double bond (1 σ + 1 π), 1 C−C single bond (1 σ), and 1 C≡N triple bond (1 σ + 2 π).",
            "Total **σ bonds** = 3 + 1 + 1 + 1 = **6 σ bonds**. Total **π bonds** = 1 + 2 = **3 π bonds**.",
            "Hybridization by electron domains:\n- C1 (=CH₂): 2 C−H + 1 C=C = 3 domains → **sp²** (120°)\n- C2 (=CH−): 1 C=C + 1 C−H + 1 C−C = 3 domains → **sp²** (120°)\n- C3 (−C≡N): 1 C−C + 1 C≡N = 2 domains → **sp** (180°).",
          ],
          answer: "(a) 6 σ bonds and 3 π bonds; (b) C1: sp², C2: sp², C3: sp.",
        },
      ],
      keyPoints: [
        "In 5-domain VSEPR (trigonal bipyramidal), lone pairs ALWAYS occupy **equatorial** sites: 4:1 = seesaw, 3:2 = T-shaped, 2:3 = linear (180°).",
        "In 6-domain VSEPR (octahedral): 6:0 = octahedral, 5:1 = square pyramidal (<90°), 4:2 = **square planar** (90°, trans lone pairs → non-polar if ligands identical).",
        "Formal charge {{FC = V - N - (1/2)B}} selects the best Lewis structure: minimize |FC| and place negative FC on the **most electronegative** atom.",
        "Resonance structures do **not** flip back and forth — the actual molecule is a single, lower-energy **resonance hybrid** with delocalized π electrons and equal intermediate bond lengths.",
        "Hybridization matches electron domains: **2 domains → sp**, **3 domains → sp²**, **4 domains → sp³** (remember to count lone pairs as domains, so O in H₂O and N in NH₃ are **sp³**!).",
      ],
      whyItWorks:
        "Why do equatorial lone pairs in a trigonal bipyramid minimize repulsion? Look at the 90° neighbours (where repulsion decays steeply with distance): an **axial** position has **three** equatorial neighbours at 90°, whereas an **equatorial** position has only **two** axial neighbours at 90° (its other two equatorial neighbours are far away at 120°). Placing bulky lone pairs equatorially cuts the number of severe 90° LP–BP clashes from 3 down to 2!",
      strategies: [
        "When counting σ and π bonds in condensed formulas like CH₃COCH₃ or CH₃CN, **sketch out every C−H bond** first — forgetting C−H σ bonds is the #1 HL Paper 1 error!",
        "Check formal charge arithmetic instantly: the sum of all atomic formal charges MUST equal the overall molecular/ionic charge.",
        "Never confuse **formal charge** (assumes 100% equal covalent sharing) with **oxidation state** (assigns all bonding electrons to the more electronegative atom).",
      ],
      thinkDeeper:
        "Why does benzene (C₆H₆) prefer substitution reactions rather than addition reactions like alkenes? Delocalizing all six 2p electrons across the flat ring of six sp² carbons lowers benzene's energy by ~152 kJ mol⁻¹ (its resonance stabilization energy), which addition would destroy!",
    },

    // =========================================================================
    // SECTION 4: S2.4 Bonding Triangle, Alloys & Addition / Condensation Polymers [SL + HL]
    // =========================================================================
    {
      id: "bonding-triangle-polymers",
      heading: "S2.4 Bonding Triangle, Alloys & Addition / Condensation Polymers",
      level: "SL",
      discovery: {
        problem:
          "Pure iron is soft enough to bend easily, yet mixing just 1% carbon into iron creates high-carbon steel used for surgical scalpels and skyscraper beams. Meanwhile, aluminium chloride (AlCl₃) is made of a metal and a non-metal, yet it sublimes at just 180 °C and conducts no electricity when molten! How can bonding be a **continuum** rather than three rigid boxes, and why does adding tiny carbon atoms harden iron so dramatically?",
        idea:
          "Bonding sits on a 2D continuum — the **Van Arkel–Ketelaar bonding triangle** — mapped by both electronegativity difference (**Δχ**) and average electronegativity (**χ_avg**). AlCl₃ has χ_Al = 1.6 and χ_Cl = 3.2, giving Δχ = 1.6 and χ_avg = 2.4, placing it in the **polar covalent** region (forming molecular Al₂Cl₆ dimers in liquid/vapour!). And in steel, tiny carbon atoms fit into the **interstitial** gaps between iron cations, distorting the regular lattice planes so they can no longer slide smoothly — converting soft iron into hard steel!",
      },
      body:
        "### The Van Arkel–Ketelaar Bonding Triangle\n" +
        "Classifying compounds purely by 'metal + non-metal = ionic' fails for species like AlCl₃, BeCl₂, and SiO₂. Instead, plot any binary substance (or element) using two Pauling electronegativity coordinates (IB Data Booklet Section 17):\n" +
        "- **Horizontal axis (average electronegativity):** {{χ_\"avg\" = (χ_A + χ_B) / 2}}\n" +
        "- **Vertical axis (electronegativity difference):** {{Δχ = |χ_A - χ_B|}}\n\n" +
        "The three corners represent pure archetypes:\n" +
        "- **Bottom-left — Metallic** (low χ_avg, low Δχ): e.g. Cs (0.8, 0), Na (0.9, 0), CuZn brass (1.8, 0.2).\n" +
        "- **Bottom-right — Covalent** (high χ_avg, low Δχ): e.g. F₂ (4.0, 0), Cl₂ (3.2, 0), C/diamond (2.6, 0).\n" +
        "- **Top-centre — Ionic** (intermediate χ_avg, high Δχ > 1.8): e.g. CsF (2.4, 3.2), NaCl (2.05, 2.3), MgO (2.35, 2.1).\n" +
        "- **Middle-right — Polar Covalent** (high χ_avg, moderate Δχ ≈ 0.5–1.8): e.g. SiO₂ (2.65, 1.5), H₂O (2.8, 1.2), HCl (2.7, 1.0), AlCl₃ (2.4, 1.6).\n\n" +
        "### Alloys: Substitutional vs Interstitial\n" +
        "An **alloy** is a homogeneous **mixture** (solid solution) of a metal with one or more other metals or non-metals. Because bonding remains metallic and non-directional, alloys keep lustre and conductivity while gaining **hardness, tensile strength, and corrosion resistance** because foreign atoms of **different atomic radii** disrupt the regular cation layers and impede dislocation slip:\n" +
        "- **Substitutional alloys:** Solute atoms have a **similar radius** to host metal atoms and replace them in lattice sites (e.g. **brass** = Cu + Zn; **bronze** = Cu + Sn; **stainless steel** Cr/Ni in Fe).\n" +
        "- **Interstitial alloys:** Much **smaller** non-metal atoms squeeze into the spaces (interstices) between metal cations (e.g. **carbon steel** = C atoms in Fe lattice).\n\n" +
        "### Addition Polymers [SL]\n" +
        "**Polymers** are macromolecules built from thousands of covalently linked **monomer** repeat units. In **addition polymerization**, unsaturated **alkene** monomers open their C=C π bond to join end-to-end with **no by-product lost** (100% atom economy!):\n" +
        "- Ethene (CH₂=CH₂) → **poly(ethene)**, repeat unit `−[CH₂−CH₂]−` (HDPE = unbranched chains pack tightly → strong/higher mp; LDPE = branched chains → weaker LDF, flexible).\n" +
        "- Propene (CH₂=CHCH₃) → **poly(propene)**, repeat unit `−[CH₂−CH(CH₃)]−`.\n" +
        "- Chloroethene (CH₂=CHCl) → **poly(chloroethene) / PVC**, repeat unit `−[CH₂−CHCl]−` (polar C−Cl gives dipole–dipole forces → rigid pipes; plasticizers soften it).\n" +
        "- Tetrafluoroethene (CF₂=CF₂) → **PTFE (Teflon)**, repeat unit `−[CF₂−CF₂]−`.\n" +
        "- **Disposal challenge:** Strong, non-polar C−C and C−H σ-backbones resist hydrolysis and bacterial enzymes, making addition plastics **non-biodegradable**.\n\n" +
        "### Condensation Polymers & Biological Macromolecules [HL]\n" +
        "In **condensation polymerization**, bifunctional monomers react to form a polymer **plus a small molecule eliminated** (typically **H₂O** or HCl) at every linkage:\n" +
        "- **Polyesters** (dicarboxylic acid + diol, or hydroxycarboxylic acid): joined by **ester linkages (`−COO−`)** with loss of H₂O (e.g. **PET / Terylene** from benzene-1,4-dicarboxylic acid + ethane-1,2-diol).\n" +
        "- **Polyamides** (dicarboxylic acid + diamine, or amino acids): joined by **amide (peptide) linkages (`−CONH−`)** with loss of H₂O (e.g. **nylon-6,6** from hexanedioic acid + hexane-1,6-diamine; **Kevlar**; **proteins** from 2-amino acids). Inter-chain **hydrogen bonding** between `N−H` and `C=O` gives polyamides exceptional tensile strength!\n" +
        "- **Biodegradability & Hydrolysis:** Unlike inert poly(alkenes), polar ester (`−COO−`) and amide (`−CONH−`) linkages can be cleaved by **hydrolysis** (adding H₂O back in acidic, alkaline, or enzymatic conditions) — regenerating the monomers! The same condensation/hydrolysis chemistry builds and breaks down **polysaccharides** (glycosidic `−O−` links) and **polypeptides/proteins** (amide links).",
      diagram:
        '<svg viewBox="0 0 640 252" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Van Arkel-Ketelaar bonding triangle with example compounds and condensation ester and amide linkages">' +
        '<rect x="5" y="5" width="370" height="242" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="385" y="5" width="250" height="242" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="190" y="24" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1e293b">Van Arkel–Ketelaar Bonding Triangle</text>' +
        '<polygon points="62,208 338,208 200,48" fill="#eff6ff" stroke="#334155" stroke-width="1.8"/>' +
        '<polygon points="200,48 122,138 278,138" fill="#ede9fe" fill-opacity="0.85"/>' +
        '<polygon points="62,208 175,208 136,155 107,155" fill="#fef3c7" fill-opacity="0.9"/>' +
        '<polygon points="245,208 338,208 310,176 266,176" fill="#d1fae5" fill-opacity="0.9"/>' +
        '<line x1="122" y1="138" x2="278" y2="138" stroke="#7c3aed" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="175" y1="208" x2="136" y2="155" stroke="#d97706" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="245" y1="208" x2="266" y2="176" stroke="#059669" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<text x="200" y="96" font-size="11" font-weight="800" text-anchor="middle" fill="#6d28d9">IONIC</text>' +
        '<text x="116" y="192" font-size="10.5" font-weight="800" text-anchor="middle" fill="#b45309">METALLIC</text>' +
        '<text x="218" y="168" font-size="10" font-weight="800" text-anchor="middle" fill="#1d4ed8">POLAR COVALENT</text>' +
        '<text x="294" y="197" font-size="9.5" font-weight="800" text-anchor="middle" fill="#047857">COVALENT</text>' +
        '<circle cx="200" cy="48" r="4" fill="#6d28d9"/><text x="208" y="51" font-size="9" font-weight="700" fill="#1e293b">CsF (2.4, 3.2)</text>' +
        '<circle cx="170" cy="93" r="4" fill="#6d28d9"/><text x="108" y="96" font-size="9" font-weight="700" fill="#1e293b">NaCl (2.05, 2.3)</text>' +
        '<circle cx="196" cy="103" r="4" fill="#6d28d9"/><text x="203" y="106" font-size="9" font-weight="700" fill="#1e293b">MgO (2.35, 2.1)</text>' +
        '<circle cx="200" cy="128" r="4" fill="#1d4ed8"/><text x="207" y="131" font-size="9" font-weight="700" fill="#1e293b">AlCl₃ (2.4, 1.6)</text>' +
        '<circle cx="222" cy="133" r="4" fill="#1d4ed8"/><text x="229" y="146" font-size="9" font-weight="700" fill="#1e293b">SiO₂ (2.65, 1.5)</text>' +
        '<circle cx="62" cy="208" r="4" fill="#b45309"/><text x="58" y="222" font-size="9" font-weight="700" text-anchor="middle" fill="#1e293b">Cs (0.8)</text>' +
        '<circle cx="338" cy="208" r="4" fill="#047857"/><text x="338" y="222" font-size="9" font-weight="700" text-anchor="middle" fill="#1e293b">F₂ (4.0)</text>' +
        '<text x="200" y="238" font-size="10.5" font-weight="800" text-anchor="middle" fill="#334155">Average electronegativity χ_avg = (χ_A + χ_B) / 2</text>' +
        '<text x="20" y="130" font-size="10.5" font-weight="800" text-anchor="middle" transform="rotate(-90 20 130)" fill="#334155">Δχ = |χ_A − χ_B|</text>' +
        '<text x="510" y="24" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1e293b">Condensation Linkages [HL]</text>' +
        '<g transform="translate(398,38)">' +
        '<rect x="0" y="0" width="224" height="92" rx="8" fill="#fff" stroke="#bfdbfe"/>' +
        '<text x="112" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#1d4ed8">Polyester · Ester Link (−COO−)</text>' +
        '<text x="112" y="34" font-size="9.5" font-weight="700" text-anchor="middle" fill="#475569">−COOH + HO− → −COO− + H₂O</text>' +
        '<line x1="28" y1="64" x2="68" y2="64" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="88" y1="64" x2="128" y2="64" stroke="#1d4ed8" stroke-width="2.8"/>' +
        '<line x1="148" y1="64" x2="192" y2="64" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="75" y1="54" x2="75" y2="41" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="81" y1="54" x2="81" y2="41" stroke="#dc2626" stroke-width="2"/>' +
        '<rect x="66" y="36" width="84" height="40" rx="6" fill="none" stroke="#1d4ed8" stroke-width="1.3" stroke-dasharray="3 2"/>' +
        '<text x="18" y="68" font-size="11" font-weight="800" fill="#334155">R</text>' +
        '<text x="78" y="68" font-size="11" font-weight="800" text-anchor="middle" fill="#1e293b">C</text>' +
        '<text x="78" y="39" font-size="10.5" font-weight="800" text-anchor="middle" fill="#dc2626">O</text>' +
        '<text x="138" y="68" font-size="11" font-weight="800" text-anchor="middle" fill="#dc2626">O</text>' +
        '<text x="202" y="68" font-size="11" font-weight="800" fill="#334155">R′</text>' +
        '<text x="112" y="86" font-size="9" font-weight="700" text-anchor="middle" fill="#1d4ed8">Hydrolysable (e.g. PET)</text>' +
        '</g>' +
        '<g transform="translate(398,142)">' +
        '<rect x="0" y="0" width="224" height="94" rx="8" fill="#fff" stroke="#a7f3d0"/>' +
        '<text x="112" y="16" font-size="10.5" font-weight="800" text-anchor="middle" fill="#047857">Polyamide · Amide Link (−CONH−)</text>' +
        '<text x="112" y="34" font-size="9.5" font-weight="700" text-anchor="middle" fill="#475569">−COOH + H₂N− → −CONH− + H₂O</text>' +
        '<line x1="28" y1="64" x2="68" y2="64" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="88" y1="64" x2="128" y2="64" stroke="#047857" stroke-width="2.8"/>' +
        '<line x1="148" y1="64" x2="192" y2="64" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="75" y1="54" x2="75" y2="41" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="81" y1="54" x2="81" y2="41" stroke="#dc2626" stroke-width="2"/>' +
        '<line x1="138" y1="71" x2="138" y2="81" stroke="#334155" stroke-width="1.8"/>' +
        '<rect x="66" y="36" width="84" height="47" rx="6" fill="none" stroke="#047857" stroke-width="1.3" stroke-dasharray="3 2"/>' +
        '<text x="18" y="68" font-size="11" font-weight="800" fill="#334155">R</text>' +
        '<text x="78" y="68" font-size="11" font-weight="800" text-anchor="middle" fill="#1e293b">C</text>' +
        '<text x="78" y="39" font-size="10.5" font-weight="800" text-anchor="middle" fill="#dc2626">O</text>' +
        '<text x="138" y="68" font-size="11" font-weight="800" text-anchor="middle" fill="#2563eb">N</text>' +
        '<text x="150" y="84" font-size="9.5" font-weight="800" fill="#334155">H</text>' +
        '<text x="202" y="68" font-size="11" font-weight="800" fill="#334155">R′</text>' +
        '<text x="112" y="91" font-size="9" font-weight="700" text-anchor="middle" fill="#047857">Inter-chain H-bonds (Nylon, Kevlar)</text>' +
        '</g>' +
        '</svg>',
      diagramCaption:
        "Left: The Van Arkel–Ketelaar bonding triangle places every binary substance along a continuum of Δχ vs χ_avg. Right: Condensation polymers eliminate H₂O to form hydrolysable ester (−COO−) and amide (−CONH−) linkages.",
      workedExamples: [
        {
          title: "Classifying Compounds on the Bonding Triangle",
          problem:
            "Given Pauling electronegativities Mg = 1.3, Si = 1.9, O = 3.4, and Cu = 1.9, Zn = 1.7, calculate χ_avg and Δχ for (a) MgO, (b) SiO₂, and (c) CuZn (brass), and classify each dominant bonding type.",
          steps: [
            "**(a) MgO:** {{χ_\"avg\" = (1.3 + 3.4)/2 = 2.35}}, {{Δχ = |3.4 - 1.3| = 2.1}}. Because Δχ > 1.8, MgO sits solidly in the **ionic** region.",
            "**(b) SiO₂:** {{χ_\"avg\" = (1.9 + 3.4)/2 = 2.65}}, {{Δχ = |3.4 - 1.9| = 1.5}}. High χ_avg and moderate Δχ place SiO₂ in the **polar covalent** region (forming a giant covalent network solid).",
            "**(c) CuZn (brass):** {{χ_\"avg\" = (1.9 + 1.7)/2 = 1.80}}, {{Δχ = |1.9 - 1.7| = 0.2}}. Low χ_avg and very low Δχ place brass in the **metallic** region (a substitutional alloy).",
          ],
          answer: "(a) MgO (2.35, 2.1) = ionic; (b) SiO₂ (2.65, 1.5) = polar covalent; (c) CuZn (1.80, 0.2) = metallic.",
          yourTurn: {
            question:
              "Using Pauling electronegativities Al = 1.6 and Cl = 3.2, calculate the average electronegativity χ_avg of AlCl₃.",
            answer: { type: "number", value: 2.4, tolerance: 0.01 },
            solution:
              "{{χ_\"avg\" = (1.6 + 3.2)/2 = 4.8/2 = 2.4}} (with Δχ = 1.6, placing AlCl₃ in the polar covalent region!).",
          },
        },
        {
          title: "Deducing Monomers from Addition & Condensation Repeat Units [SL & HL]",
          problem:
            "(a) Identify the monomer of the addition polymer `−[CH(CH₃)−CHCl]−`. (b) [HL] A section of a condensation polymer is `−OC−(CH₂)₄−CO−NH−(CH₂)₆−NH−`. Name the linkage and deduce the two monomers formed upon complete hydrolysis.",
          steps: [
            "(a) For an **addition** repeat unit, remove the two trailing end-bonds and restore the C=C double bond between the two backbone carbons: `CH₃CH=CHCl` (**1-chloroprop-1-ene**).",
            "(b) [HL] Spot the `−CO−NH−` group: this is an **amide linkage** (forming a polyamide, specifically nylon-6,6).",
            "To reverse condensation by **hydrolysis**, break every `C−N` amide bond and add `−OH` to each `C=O` (giving `−COOH`) and `−H` to each `−NH−` (giving `−NH₂`).",
            "Monomer 1: `HOOC−(CH₂)₄−COOH` (**hexanedioic acid**). Monomer 2: `H₂N−(CH₂)₆−NH₂` (**hexane-1,6-diamine**).",
          ],
          answer:
            "(a) 1-chloroprop-1-ene (CH₃CH=CHCl); (b) Amide linkage; monomers: hexanedioic acid and hexane-1,6-diamine.",
        },
      ],
      keyPoints: [
        "Bonding is a continuum mapped by **average electronegativity** {{χ_\"avg\" = (χ_A + χ_B)/2}} and **electronegativity difference** {{Δχ = |χ_A - χ_B|}}.",
        "**Δχ alone is not enough!** Both Cs (metallic) and F₂ (covalent) have Δχ = 0 — you MUST use χ_avg to separate metallic (low χ_avg) from covalent (high χ_avg).",
        "Alloys are **mixtures** (not compounds) whose foreign atoms of different size distort regular cation planes, reducing malleability and increasing **hardness/strength**.",
        "**Addition polymers** form from C=C monomers with **100% atom economy** (no by-product) and have inert, non-biodegradable C−C backbones.",
        "[HL] **Condensation polymers** (polyesters with `−COO−`, polyamides with `−CONH−`) eliminate a small molecule (e.g. H₂O) per bond and can undergo **hydrolysis**.",
      ],
      whyItWorks:
        "Why does χ_avg separate metallic from covalent bonding when Δχ = 0? When two atoms have **low** electronegativity (like Na or Cu), neither atom holds its outer electrons tightly, so electrons escape into a **delocalized metallic sea**. When two atoms have **high** electronegativity (like Cl₂ or F₂), both nuclei pull strongly on valence electrons, trapping them in localized **shared covalent pairs** between specific nuclei.",
      strategies: [
        "To draw an **addition polymer** repeat unit cleanly, ALWAYS redraw the alkene monomer in an **H-shape** (`C=C` horizontal with all 4 substituents pointing straight up and straight down), then open the double bond to a single bond with extension lines!",
        "Never forget the **extension bonds** passing through the square brackets `−[ ... ]−` — IB examiners deduct a mark if the trailing bonds are missing on a repeat unit!",
        "[HL] To hydrolyse any condensation polymer on Paper 2, snip the **C−O** (ester) or **C−N** (amide) single bond, give **OH** to the carbonyl **C=O**, and give **H** to the **O** or **N**.",
      ],
      thinkDeeper:
        "Kevlar (poly-paraphenylene terephthalamide) is five times stronger than steel by weight because rigid benzene rings lock its polyamide chains flat, allowing dense sheets of intermolecular hydrogen bonds between `C=O` and `N−H` groups!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define an **ionic bond** and state the two factors that increase lattice enthalpy.",
        back: "The strong electrostatic attraction between oppositely charged ions in a 3D crystal lattice. Lattice enthalpy increases with **(1) higher ionic charge** and **(2) smaller ionic radius**.",
        level: "SL",
      },
      {
        front: "Why do ionic solids conduct electricity only when molten or aqueous, whereas metals conduct as solids?",
        back: "Conductivity requires **mobile charge carriers**. Solid ionic lattices lock ions in fixed positions; melting/dissolving frees **mobile ions**. Solid metals always have **delocalized valence electrons** free to move.",
        level: "SL",
      },
      {
        front: "List the formulas and charges of all seven IB polyatomic ions.",
        back: "Ammonium **NH₄⁺**, hydroxide **OH⁻**, nitrate **NO₃⁻**, hydrogencarbonate **HCO₃⁻**, carbonate **CO₃²⁻**, sulfate **SO₄²⁻**, phosphate **PO₄³⁻**.",
        level: "SL",
      },
      {
        front: "Explain why ionic crystals are brittle whereas pure metals are malleable.",
        back: "Shifting an ionic layer brings **like charges adjacent**, causing electrostatic repulsion and cleavage. In metals, **non-directional** attraction to the delocalized electron sea persists as cation layers slide.",
        level: "SL",
      },
      {
        front: "State the VSEPR repulsion hierarchy and the bond angles of CH₄, NH₃, and H₂O.",
        back: "**LP–LP > LP–BP > BP–BP**. All three have 4 domains (tetrahedral e⁻ geometry), compressing bond angles: **CH₄ = 109.5°**, **NH₃ = 107°** (trigonal pyramidal), **H₂O = 104.5°** (bent).",
        level: "SL",
      },
      {
        front: "What two conditions are required for a covalent molecule to be **polar**?",
        back: "(1) Polar covalent bonds (Δχ > 0) AND (2) an **asymmetric** 3D geometry so the individual bond dipoles do **not** cancel (e.g. H₂O, NH₃, CHCl₃ are polar; CO₂, BF₃, CCl₄ are non-polar).",
        level: "SL",
      },
      {
        front: "Compare the structure, bonding, and electrical conductivity of **diamond**, **graphite**, and **C₆₀ fullerene**.",
        back: "Diamond: each C bonded to 4 C (tetrahedral network, insulator). Graphite: each C bonded to 3 C in layers with 1 delocalized e⁻/C (conducts parallel to layers; weak LDF between layers). C₆₀: discrete molecular cage (low mp, semiconductor).",
        level: "SL",
      },
      {
        front: "What is required for intermolecular **hydrogen bonding**, and how many H-bonds can one H₂O molecule form?",
        back: "A hydrogen atom covalently bonded directly to **F, O, or N** attracted to a lone pair on an F, O, or N atom of another molecule. One H₂O molecule has 2 H atoms and 2 lone pairs → up to **4 H-bonds**.",
        level: "SL",
      },
      {
        front: "[HL] State the molecular geometries for 5 electron domains with 0, 1, 2, and 3 lone pairs.",
        back: "5:0 **trigonal bipyramidal** (90°, 120°); 4:1 **seesaw** (<90°, <120°); 3:2 **T-shaped** (<90°); 2:3 **linear** (180°). Lone pairs always take **equatorial** sites.",
        level: "HL",
      },
      {
        front: "[HL] State the molecular geometries for 6 electron domains with 0, 1, and 2 lone pairs.",
        back: "6:0 **octahedral** (90°); 5:1 **square pyramidal** (<90°); 4:2 **square planar** (90°, trans lone pairs, e.g. XeF₄ — non-polar).",
        level: "HL",
      },
      {
        front: "[HL] State the **formal charge** formula and the two rules for choosing the preferred Lewis structure.",
        back: "{{FC = V - N - (1/2)B}}. Preferred structure has (1) formal charges **closest to 0**, and (2) any **negative FC on the most electronegative atom**.",
        level: "HL",
      },
      {
        front: "[HL] Distinguish a **sigma (σ) bond** from a **pi (π) bond** and link hybridization to electron domains.",
        back: "**σ bond:** head-on overlap along internuclear axis (free rotation). **π bond:** sideways overlap of parallel p orbitals above/below axis (restricted rotation). Domains: **2 → sp**, **3 → sp²**, **4 → sp³**.",
        level: "HL",
      },
      {
        front: "Why are **alloys** harder and less malleable than pure metals?",
        back: "Foreign atoms of **different atomic radius** (substitutional or interstitial) distort the regular lattice planes of cations, making it much harder for layers to slide past each other.",
        level: "SL",
      },
      {
        front: "[HL] Contrast **addition polymerization** with **condensation polymerization** (by-products, linkages, biodegradability).",
        back: "Addition: alkene monomers join with **no by-product** → inert C−C chain (non-biodegradable). Condensation: bifunctional monomers eliminate **H₂O** (or HCl) forming **ester (−COO−)** or **amide (−CONH−)** links (hydrolysable).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Ionic lattices are giant 3D electrostatic arrays (never discrete molecules); lattice strength scales with charge product first, then inverse ionic radius.",
      "Metallic bonding is electrostatic attraction between metal cations and a sea of delocalized valence electrons (plus unpaired 3d electrons in transition metals [HL]).",
      "A double or triple covalent bond counts as ONE electron domain in VSEPR, but shortens and strengthens the bond compared with a single bond.",
      "Lone pairs repel more strongly than bonding pairs (LP–LP > LP–BP > BP–BP), compressing angles from 109.5° (CH₄) to 107° (NH₃) to 104.5° (H₂O).",
      "Molecular polarity requires BOTH polar bonds AND an asymmetric shape so dipoles do not cancel.",
      "Intermolecular force hierarchy (at comparable molar mass): London dispersion < dipole–dipole < hydrogen bonding; boiling molecular substances breaks IMFs, never covalent bonds.",
      "Van Arkel–Ketelaar bonding triangle uses BOTH Δχ = |χ_A − χ_B| and χ_avg = (χ_A + χ_B)/2 to distinguish ionic, metallic, polar covalent, and covalent bonding.",
      "[HL] Formal charge FC = V − N − ½B, resonance delocalization (O₃ BO 1.5; CO₃²⁻/NO₃⁻ BO 1.33; C₆H₆ BO 1.5), and σ/π hybridization (sp, sp², sp³).",
      "Addition polymers open alkene C=C bonds with 100% atom economy; repeat units MUST show trailing extension bonds through brackets.",
      "[HL] Condensation polymers eliminate H₂O to build hydrolysable polyester (−COO−) and polyamide (−CONH−) chains.",
    ],
    misconceptions: [
      {
        wrong: "Ionic compounds conduct electricity when molten because electrons become free to move.",
        right: "Molten and aqueous ionic compounds conduct via **mobile ions** (cations and anions), NEVER free electrons!",
        level: "SL",
      },
      {
        wrong: "Boiling water breaks the strong O−H covalent bonds to produce H₂ and O₂.",
        right: "Boiling water only overcomes **intermolecular hydrogen bonds** between intact H₂O molecules; the intramolecular O−H covalent bonds remain completely unbroken.",
        level: "SL",
      },
      {
        wrong: "A molecule with polar bonds (such as CO₂, BF₃, or CCl₄) must be a polar molecule.",
        right: "When identical polar bonds are arranged **symmetrically** around the central atom, their bond dipole vectors cancel to zero, making the molecule **non-polar**.",
        level: "SL",
      },
      {
        wrong: "All compounds containing a metal and a non-metal are 100% ionic.",
        right: "Bonding is a continuum on the Van Arkel–Ketelaar triangle: small, highly charged cations (like Al³⁺ in AlCl₃ or Be²⁺ in BeCl₂) polarize anions strongly, giving predominantly **polar covalent** character (Δχ < 1.8).",
        level: "SL",
      },
      {
        wrong: "Buckminsterfullerene (C₆₀) is a giant covalent network like diamond and graphite.",
        right: "C₆₀ consists of discrete 60-atom **molecules** held together in the solid state by weak London dispersion forces — giving it a much lower sublimation point and solubility in non-polar solvents.",
        level: "SL",
      },
      {
        wrong: "Resonance structures flip rapidly back and forth between single and double bonds.",
        right: "A resonant species (like O₃, CO₃²⁻, or benzene) exists permanently as a **single resonance hybrid** with delocalized π electrons and identical intermediate bonds.",
        level: "HL",
      },
      {
        wrong: "Formal charge and oxidation state are identical ways of labelling charge on an atom.",
        right: "Formal charge splits bonding electrons **equally** (100% covalent assumption), whereas oxidation state assigns all bonding electrons to the **more electronegative** atom (100% ionic assumption).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Naming **electron domain geometry** ('tetrahedral') when the Paper 2 question asks for **molecular geometry** of NH₃ ('trigonal pyramidal') or H₂O ('bent').",
      "Saying 'hydrogen bonds are covalent bonds between H and O' instead of **intermolecular attractions** between a δ⁺ H (bonded to F/O/N) and a lone pair on an F/O/N of a neighbouring molecule.",
      "Writing 'intermolecular forces' when explaining the high melting point of NaCl (ionic lattice), Mg (metallic lattice), or SiO₂ (covalent network).",
      "Forgetting to draw **lone pairs** on outer halogen/oxygen atoms in Lewis formulas — IB mark schemes deduct full credit if non-bonding pairs are omitted!",
      "Drawing a polymer repeat unit **without** the two horizontal continuation bonds extending past the brackets `−[ ... ]−`.",
      "[HL] Placing lone pairs in **axial** rather than **equatorial** sites of a 5-domain trigonal bipyramid (leading to wrong shapes for SF₄, ClF₃, or XeF₂).",
      "[HL] Forgetting to include **C−H single bonds** when counting total σ bonds in condensed organic formulas like CH₃CHO or CH₃CN.",
      "Claiming alloys are 'chemical compounds with stronger covalent bonds' instead of **homogeneous mixtures** where differently sized atoms disrupt sliding of metal cation planes.",
    ],
    mnemonics: [
      {
        topic: "Hydrogen Bonding Elements",
        device: "H loves FON (Phone home!)",
        explanation: "Hydrogen bonding ONLY occurs when H is covalently attached directly to **F**, **O**, or **N** — the three smallest, most electronegative elements with lone pairs.",
        level: "SL",
      },
      {
        topic: "VSEPR Repulsion Order",
        device: "Lonely Pairs Push Hardest (LP–LP > LP–BP > BP–BP)",
        explanation: "Every lone pair on a 4-domain centre squeezes the bond angle down by ~2.5°: 109.5° (0 LP) → 107° (1 LP) → 104.5° (2 LP).",
        level: "SL",
      },
      {
        topic: "Formal Charge Formula [HL]",
        device: "FC = Valence − Dots − Sticks",
        explanation: "In {{FC = V - N - (1/2)B}}, N is the count of non-bonding **dots** and ½B is the count of covalent bond **sticks** touching the atom!",
        level: "HL",
      },
      {
        topic: "5-Domain Lone Pair Placement [HL]",
        device: "Equatorial is Spacious (120° Waist)",
        explanation: "In a trigonal bipyramid, put lone pairs around the roomy 120° **equator** first → 1 LP = Seesaw, 2 LP = T-shaped, 3 LP = Linear.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Refractory Furnace Linings (MgO)",
        detail: "Magnesium oxide's +2/−2 ionic charges and small ionic radii produce a lattice enthalpy near 3791 kJ mol⁻¹ and a 2852 °C melting point, letting it line steelmaking furnaces safely.",
        emoji: "🏭",
      },
      {
        title: "Gecko Adhesion via London Dispersion",
        detail: "Millions of nanoscale keratin hairs (setae) on gecko toes maximize surface contact area with glass, turning tiny instantaneous-dipole London forces into enough adhesion to support the gecko's weight upside down.",
        emoji: "🦎",
      },
      {
        title: "Stratospheric Ozone UV-B Shield [HL]",
        detail: "Delocalized 1.5-order O–O bonds in O₃ absorb harmful UV-B radiation (240–330 nm) that O₂ (bond order 2.0) lets pass, protecting DNA on Earth — until CFC-derived Cl• radicals catalyse O₃ breakdown.",
        emoji: "🌍",
      },
      {
        title: "High-Carbon & Stainless Steels",
        detail: "Tiny interstitial carbon atoms lock iron lattice planes against slip (hardness), while substitutional chromium forms a self-healing Cr₂O₃ passivation film that resists tropical rust in Singapore's humidity.",
        emoji: "🏗️",
      },
      {
        title: "Kevlar Body Armour & Recyclable PET [HL]",
        detail: "Polyamide Kevlar stacks flat aromatic chains linked by dense intermolecular H-bonds for extreme tensile strength; polyester PET bottles can be chemically depolymerized via ester hydrolysis.",
        emoji: "🦺",
      },
    ],
    videos: [
      {
        title: "IB Chemistry Structure 2.1–2.3 Ionic, Covalent & Metallic Bonding",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=MSJChem+IB+Chemistry+Structure+2+bonding",
      },
      {
        title: "VSEPR Molecular Geometries, Polarity & Intermolecular Forces",
        channel: "Richard Thornley",
        url: "https://www.youtube.com/results?search_query=Richard+Thornley+IB+Chemistry+VSEPR+molecular+geometry",
      },
      {
        title: "IB Chemistry HL Formal Charge, Resonance & Hybridization",
        channel: "Andrew Weng IB Chemistry",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+formal+charge+resonance+hybridization",
      },
      {
        title: "Van Arkel–Ketelaar Bonding Triangle, Alloys & Polymers (S2.4)",
        channel: "OSC IB Chemistry",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+S2.4+bonding+triangle+polymers",
      },
    ],
    formulas: [
      {
        name: "Coulomb Electrostatic Lattice Trend",
        formula: "{{F ∝ |q_+ * q_-| / r^2}}",
        note: "Higher ionic charge and smaller ionic radius increase lattice enthalpy and melting point.",
        level: "SL",
      },
      {
        name: "Core Polyatomic Ions",
        formula: "NH₄⁺, OH⁻, NO₃⁻, HCO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻",
        note: "Memorize exact formulas and charges for balancing ionic equations and salt formulas.",
        level: "SL",
      },
      {
        name: "SL VSEPR Canonical Bond Angles",
        formula: "180° (2 dom) · 120° / ~117° (3 dom) · 109.5° / 107° / 104.5° (4 dom)",
        note: "LP–LP > LP–BP > BP–BP compresses angle by ~2.5° per lone pair on 4-domain centres.",
        level: "SL",
      },
      {
        name: "Chromatography Retention Factor",
        formula: "{{R_f = d_\"spot\" / d_\"solvent\"}}",
        note: "0 ≤ R_f ≤ 1; higher R_f means stronger affinity for the mobile phase than the stationary phase.",
        level: "SL",
      },
      {
        name: "Bonding Triangle Coordinates",
        formula: "{{Δχ = |χ_A - χ_B|}} and {{χ_\"avg\" = (χ_A + χ_B) / 2}}",
        note: "Ionic: Δχ > 1.8; Metallic: low χ_avg & low Δχ; Covalent: high χ_avg & low Δχ.",
        level: "SL",
      },
      {
        name: "Formal Charge",
        formula: "{{FC = V - N - (1/2)B}}",
        note: "V = free-atom valence e⁻, N = non-bonding e⁻, ½B = number of covalent bonds; ΣFC = ion charge.",
        level: "HL",
      },
      {
        name: "Delocalized Resonance Bond Order",
        formula: "{{BO = \"total shared pairs\" / \"equivalent bond sites\"}}",
        note: "O₃ & RCOO⁻ & C₆H₆ = 1.50; CO₃²⁻ & NO₃⁻ = 1.33.",
        level: "HL",
      },
      {
        name: "Hybridization ↔ Electron Domains",
        formula: "2 domains → sp (180°) · 3 domains → sp² (120°) · 4 domains → sp³ (109.5°)",
        note: "Single = 1σ; Double = 1σ + 1π; Triple = 1σ + 2π.",
        level: "HL",
      },
      {
        name: "Expanded-Octet VSEPR Shapes",
        formula: "5 dom: TBP, seesaw, T-shaped, linear · 6 dom: oct, sq. pyr, sq. planar",
        note: "5-domain lone pairs occupy equatorial sites; 6-domain 2 LPs sit trans (180°).",
        level: "HL",
      },
      {
        name: "Condensation Polymer Linkages",
        formula: "Ester: −COO− (−H₂O) · Amide: −CONH− (−H₂O)",
        note: "Reversible by hydrolysis (+H₂O), unlike inert addition poly(alkene) C−C chains.",
        level: "HL",
      },
    ],
  },
};
