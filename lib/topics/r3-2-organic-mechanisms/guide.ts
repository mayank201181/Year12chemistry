import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "r3-2-organic-mechanisms",
  title: "Reactivity 3.3–3.4: Organic Mechanisms & Synthesis",
  strand: "Reactivity 3: Reaction Mechanisms",
  icon: "🔄",
  level: "SL",
  summary:
    "Track how covalent bonds break and form — from UV-driven free-radical chains in alkanes to nucleophiles, electrophiles, SN1 vs SN2 stereochemistry, Markovnikov regioselectivity, benzene nitration, and multi-step retrosynthesis.",
  intro:
    "Every organic reaction is a story of electrons on the move. Once you can read two simple arrows — a **fish-hook half-arrow** for a single electron and a **curly full-arrow** for an electron pair — organic chemistry stops being a wall of memorised equations and becomes a predictable choreography of bond polarity, intermediate stability, and synthetic strategy.",
  guide: [
    // =========================================================================
    // SECTION 1: R3.3 Free-Radical Substitution [SL]
    // =========================================================================
    {
      id: "free-radical-substitution",
      heading: "R3.3 Homolytic Fission & Free-Radical Substitution of Alkanes",
      level: "SL",
      discovery: {
        problem:
          "Liquid hexane and orange-brown bromine dissolved in an inert solvent are mixed in a dark cupboard. Nothing happens for hours. The moment the flask is placed under a UV lamp, the orange colour fades and misty acidic fumes of HBr appear. Trace amounts of dodecane (C₁₂H₂₆) are also detected in the mixture! Why does UV light trigger the reaction, why does it keep going once started, and where on earth did a 12-carbon alkane come from?",
        idea:
          "Alkanes lack polar bonds or π electrons, so ionic reagents bounce straight off them. UV photons supply just enough energy to split the relatively weak Br−Br bond symmetrically (**homolytic fission**) into two neutral bromine free radicals (Br•). Each radical rips a hydrogen atom from hexane to form HBr and a hexyl radical (•C₆H₁₃), which then reacts with Br₂ to regenerate Br• in a self-sustaining chain. When two •C₆H₁₃ radicals happen to collide, they couple to form dodecane (C₁₂H₂₆) — smoking-gun proof that free radicals were present!",
      },
      body: `### Why Alkanes Are Kinetically Unreactive
Alkanes consist exclusively of strong single **σ (sigma) covalent bonds** — C−C (346 kJ mol⁻¹) and C−H (414 kJ mol⁻¹). Because carbon (χ = 2.6) and hydrogen (χ = 2.2) have very similar electronegativities, C−H bonds are essentially **non-polar**. Without a region of high electron density (no π bond or lone pairs) and without a δ⁺ carbon atom, alkanes are ignored by aqueous acids, alkalis, nucleophiles, and electrophiles under normal conditions. Apart from combustion, their signature reaction is **free-radical substitution** with halogens (Cl₂ or Br₂) under **UV light**.

### Homolytic Fission vs Heterolytic Fission
A covalent bond holds two shared electrons. It can cleave in two distinct ways:
- **Homolytic fission** (equal split): each bonded atom takes **one** electron from the shared pair, forming two electrically neutral **free radicals** — species containing an unpaired electron (indicated by a dot, e.g., Cl• or •CH₃). Electron movement is drawn with **single-headed (fish-hook) half-arrows**.
- **Heterolytic fission** (unequal split): both shared electrons move onto the more electronegative atom, forming a **cation** and an **anion**. Electron movement is drawn with **double-headed full curly arrows** (studied in Section 2).

### The Three Stages of Free-Radical Substitution (Methane + Cl₂)
The overall equation for monochlorination of methane is:
CH₄ + Cl₂ → CH₃Cl + HCl (condition: **UV light**)

1. **Initiation** (radicals created: 0 → 2)
   A UV photon provides the energy (≥ 242 kJ mol⁻¹) to cleave the weaker Cl−Cl bond homolytically (the C−H bond at 414 kJ mol⁻¹ is too strong to break directly):
   Cl₂ → Cl• + Cl• (UV light)

2. **Propagation** (chain reaction; radical count conserved: 1 → 1)
   Two alternating steps consume reactants and regenerate the Cl• radical so a single initiation event can convert thousands of molecules:
   - Step 1 (hydrogen abstraction): **CH₄ + Cl• → •CH₃ + HCl**
   - Step 2 (halogen abstraction): **•CH₃ + Cl₂ → CH₃Cl + Cl•**
   Notice that adding the two propagation steps cancels Cl• and •CH₃ and reproduces the exact overall equation CH₄ + Cl₂ → CH₃Cl + HCl!

3. **Termination** (radicals destroyed: 2 → 0)
   Whenever any two radicals collide, their unpaired electrons pair up to form a stable covalent bond and halt that chain:
   - **Cl• + Cl• → Cl₂**
   - **•CH₃ + Cl• → CH₃Cl**
   - **•CH₃ + •CH₃ → C₂H₆** (trace ethane — direct experimental evidence for methyl radicals!)

### Synthetic Limitations: Multi-Substitution & Isomer Mixtures
Free-radical substitution is notoriously unselective for laboratory synthesis:
- **Further substitution**: Once CH₃Cl forms, Cl• radicals can abstract another H atom from CH₃Cl to generate dichloromethane (CH₂Cl₂), trichloromethane (CHCl₃), and tetrachloromethane (CCl₄). Using a **large excess of alkane** minimizes further substitution, whereas **excess Cl₂** drives poly-substitution.
- **Positional isomers**: In longer alkanes like propane (CH₃CH₂CH₃), H abstraction can occur at either a terminal or middle carbon, yielding a mixture of 1-chloropropane and 2-chloropropane.

### Distinguishing Alkanes from Alkenes with Bromine
- **Alkane + Br₂(in hexane/organic solvent)**: stays **orange-brown in the dark**; slowly **decolourizes in UV light** with release of acidic HBr gas (turns damp blue litmus red).
- **Alkene + Br₂(aq) or Br₂(in organic solvent)**: **decolourizes rapidly in the dark** at room temperature via electrophilic addition (no HBr produced).`,
      diagram: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of homolytic fission with fish-hook half-arrows forming two free radicals versus heterolytic fission with a full curly arrow forming ions, alongside the three stages of methane chlorination">
  <rect x="8" y="8" width="624" height="254" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Bond Fission &amp; The Free-Radical Chain Mechanism</text>

  <!-- Left panel: Homolytic vs Heterolytic -->
  <rect x="22" y="46" width="286" height="96" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="165" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Homolytic Fission (UV Light · 1 e⁻ each)</text>
  <text x="72" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Cl</text>
  <line x1="87" y1="97" x2="123" y2="97" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="138" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Cl</text>
  <!-- Fish-hook half arrows -->
  <path d="M 103 94 Q 95 75 78 85" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <polyline points="82,80 77,85 83,86" fill="none" stroke="var(--brand)" stroke-width="1.8"/>
  <path d="M 107 94 Q 115 75 132 85" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <polyline points="128,80 133,85 127,86" fill="none" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="172" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">→</text>
  <text x="242" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">Cl• + Cl•</text>
  <text x="165" y="128" text-anchor="middle" font-size="11" fill="var(--ink-2)">Fish-hook half-arrows · Neutral radicals</text>

  <rect x="22" y="152" width="286" height="96" rx="10" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.4"/>
  <text x="165" y="171" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">Heterolytic Fission (Polar · 2 e⁻ pair)</text>
  <text x="68" y="208" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">C<tspan dy="-6" font-size="10" fill="var(--bad)">δ+</tspan></text>
  <line x1="88" y1="203" x2="122" y2="203" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="140" y="208" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">Br<tspan dy="-6" font-size="10" fill="var(--info)">δ−</tspan></text>
  <!-- Full curly arrow -->
  <path d="M 105 200 Q 120 176 138 190" fill="none" stroke="var(--info)" stroke-width="2.2"/>
  <polygon points="141,193 132,191 137,184" fill="var(--info)"/>
  <text x="176" y="208" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">→</text>
  <text x="246" y="208" text-anchor="middle" font-size="15" font-weight="700" fill="var(--info)">C⁺ + :Br⁻</text>
  <text x="165" y="234" text-anchor="middle" font-size="11" fill="var(--ink-2)">Full curly arrow · Cation + Anion</text>

  <!-- Right panel: 3 stages -->
  <rect x="322" y="46" width="296" height="202" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="470" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">3 Stages: CH₄ + Cl₂ → CH₃Cl + HCl</text>

  <rect x="334" y="76" width="272" height="42" rx="7" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.2"/>
  <text x="344" y="93" font-size="11" font-weight="700" fill="var(--accent)">1. INITIATION (0 → 2 radicals)</text>
  <text x="344" y="110" font-size="12" font-weight="600" fill="var(--ink)">Cl₂ —(UV)→ 2 Cl•</text>

  <rect x="334" y="126" width="272" height="56" rx="7" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="344" y="143" font-size="11" font-weight="700" fill="var(--brand)">2. PROPAGATION (1 → 1 radical, loops)</text>
  <text x="344" y="160" font-size="11.5" font-weight="600" fill="var(--ink)">CH₄ + Cl• → •CH₃ + HCl   (never H•!)</text>
  <text x="344" y="175" font-size="11.5" font-weight="600" fill="var(--ink)">•CH₃ + Cl₂ → CH₃Cl + Cl•</text>

  <rect x="334" y="190" width="272" height="48" rx="7" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.2"/>
  <text x="344" y="207" font-size="11" font-weight="700" fill="var(--bad)">3. TERMINATION (2 → 0 radicals)</text>
  <text x="344" y="224" font-size="11.5" font-weight="600" fill="var(--ink)">2Cl• → Cl₂ · •CH₃+Cl• → CH₃Cl · 2•CH₃ → C₂H₆</text>
</svg>`,
      diagramCaption:
        "Fish-hook half-arrows show single-electron homolytic cleavage (initiation), whereas full double-headed arrows show electron-pair heterolytic cleavage. Counting radicals on left vs right immediately classifies any step.",
      workedExamples: [
        {
          title: "Writing the Free-Radical Mechanism for Bromination of Ethane",
          problem:
            "Ethane (C₂H₆) reacts with bromine (Br₂) under UV light to form bromoethane (C₂H₅Br). Write equations for the initiation step, both propagation steps, and the termination step that produces butane (C₄H₁₀).",
          steps: [
            "**Initiation** (homolytic fission of the weaker Br−Br bond under UV light): Br₂ → 2 Br•",
            "**Propagation Step 1** (Br• abstracts an H atom from ethane to make HBr and an ethyl radical — never H•!): C₂H₆ + Br• → •C₂H₅ + HBr",
            "**Propagation Step 2** (ethyl radical reacts with Br₂ to yield the product and regenerate Br•): •C₂H₅ + Br₂ → C₂H₅Br + Br•",
            "**Termination giving butane** (two ethyl radicals couple): •C₂H₅ + •C₂H₅ → C₄H₁₀",
          ],
          answer:
            "Initiation: Br₂ → 2 Br•; Propagation: C₂H₆ + Br• → •C₂H₅ + HBr and •C₂H₅ + Br₂ → C₂H₅Br + Br•; Termination: 2 •C₂H₅ → C₄H₁₀.",
          yourTurn: {
            question:
              "When propane (C₃H₈) undergoes free-radical chlorination with Cl₂ in UV light, a trace alkane byproduct is formed by the coupling of two propyl radicals (•C₃H₇). How many carbon atoms are in one molecule of this termination byproduct?",
            answer: { type: "number", value: 6, display: "6" },
            solution:
              "Two propyl radicals (•C₃H₇ + •C₃H₇) combine in a termination step to form hexane (C₆H₁₄), which contains 3 + 3 = 6 carbon atoms.",
          },
        },
        {
          title: "Bond Enthalpy Explanation of Initiation",
          problem:
            "Given average bond enthalpies Cl−Cl = 242 kJ mol⁻¹ and C−H = 414 kJ mol⁻¹, calculate the maximum wavelength (in nm, to 3 s.f.) of UV light capable of initiating homolytic fission of Cl₂. (h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, N_A = 6.02 × 10²³ mol⁻¹).",
          steps: [
            "Energy needed to cleave ONE Cl−Cl bond: {{E = (242 * 10^3)/(6.02 * 10^23) = 4.02 * 10^(-19)}} J.",
            "Using {{E = (hc)/lambda}}, rearrange to {{lambda = (hc)/E}}.",
            "Substitute: {{lambda = (6.63 * 10^(-34) * 3.00 * 10^8)/(4.02 * 10^(-19)) = 4.95 * 10^(-7)}} m = **495 nm** (blue/violet border, easily supplied by UV light ≤ 400 nm).",
            "By contrast, cleaving C−H (414 kJ mol⁻¹) would require λ ≤ 289 nm, so Cl−Cl breaks selectively first.",
          ],
          answer: "495 nm",
        },
      ],
      keyPoints: [
        "Alkanes are unreactive because C−C and C−H σ bonds are strong and non-polar.",
        "Homolytic fission splits a shared pair evenly (1 e⁻ each) using fish-hook half-arrows, forming neutral free radicals.",
        "Count radicals to identify the stage: Initiation (0 → 2), Propagation (1 → 1), Termination (2 → 0).",
        "NEVER write a hydrogen radical (H•) in propagation — Cl• removes H to form HCl + an alkyl radical.",
        "Trace dimer alkanes (e.g., C₂H₆ during CH₄ chlorination) prove alkyl radicals exist via termination.",
        "Free-radical substitution gives mixtures of mono- and poly-substituted products plus positional isomers.",
      ],
      whyItWorks:
        "Why doesn't the first propagation step produce CH₃Cl + H• directly instead of •CH₃ + HCl? Compare the bond enthalpies! Breaking C−H (414 kJ mol⁻¹) and forming H−Cl (431 kJ mol⁻¹) is **exothermic** (ΔH ≈ −17 kJ mol⁻¹) with a tiny activation barrier. Breaking C−H and forming C−Cl (324 kJ mol⁻¹) while spitting out a high-energy H• radical would be endothermic by +90 kJ mol⁻¹ — thermodynamically and kinetically disfavoured!",
      strategies: [
        "**Radical-Counter Check**: Always count unpaired-electron dots on each side of an equation: 0 → 2 = initiation, 1 → 1 = propagation, 2 → 0 = termination.",
        "**Propagation Sum Check**: Add your two propagation equations together — both radical intermediates must cancel cleanly to leave the overall balanced equation.",
        "**Further Substitution Extension**: To write propagation steps from CH₃Cl → CH₂Cl₂, simply replace CH₄ with CH₃Cl and •CH₃ with •CH₂Cl.",
      ],
      thinkDeeper:
        "Why does chlorination of methane proceed explosively in bright UV light, whereas iodination of methane (CH₄ + I₂) does not occur spontaneously even under UV light? Hint: compare the H−I bond enthalpy (298 kJ mol⁻¹) with the C−H bond enthalpy (414 kJ mol⁻¹) in the first propagation step!",
    },

    // =========================================================================
    // SECTION 2: R3.4 Nucleophiles, Electrophiles & Core Reactions [SL]
    // =========================================================================
    {
      id: "nucleophiles-electrophiles-core",
      heading: "R3.4 Heterolytic Fission, Nucleophiles, Electrophiles & Core Reactions",
      level: "SL",
      discovery: {
        problem:
          "Compare ethane (CH₃−CH₃), ethene (CH₂=CH₂), and bromoethane (CH₃CH₂−Br). All three have two carbons, yet ethene instantly turns orange bromine water colourless, bromoethane reacts smoothly with warm NaOH(aq) to make ethanol, and ethane ignores both reagents completely. What structural feature turns each molecule into a chemical target — and is each target electron-rich or electron-poor?",
        idea:
          "Ethene has a **π bond** whose electron cloud bulges above and below the C=C plane, making it **electron-rich** and attractive to electron-seeking **electrophiles** (like Brδ⁺). Bromoethane has a polar **Cδ⁺−Brδ⁻** bond because electronegative bromine pulls electron density away from carbon, making that carbon **electron-deficient** and vulnerable to electron-rich **nucleophiles** (like OH⁻). Ethane has neither a π cloud nor a polar bond.",
      },
      body: `### Curly Full-Arrows & Heterolytic Fission
Most organic reactions proceed via **heterolytic fission**, where a bonding pair moves completely onto one atom (creating ions). Chemists track every electron pair with a **double-headed full curly arrow**:
- **Tail of the arrow**: starts precisely at a source of an electron pair — a **lone pair** (e.g., on :OH⁻ or :NH₃), a **negative charge**, or a **covalent bond** (such as a C=C π bond or a breaking C−Br σ bond).
- **Head of the arrow**: points to the atom receiving the electron pair (or to the region between two atoms where a new covalent bond forms).

### Nucleophiles vs Electrophiles (and Lewis Acids & Bases [HL])
| Property | Nucleophile ("nucleus-loving") | Electrophile ("electron-loving") |
|---|---|---|
| Electronic character | Electron-rich (has a lone pair; often − charge or δ⁻) | Electron-deficient (full + charge, δ⁺, or incomplete octet) |
| Role with electron pair | **Electron-pair donor** (Lewis base [HL]) | **Electron-pair acceptor** (Lewis acid [HL]) |
| Common IB examples | OH⁻, CN⁻, NH₃, H₂O, Cl⁻, Br⁻, I⁻, RO⁻ | H⁺, Hδ⁺ in HX, Brδ⁺ in Br₂, NO₂⁺, R₃C⁺, BF₃, AlCl₃ |
| Typical organic target | δ⁺ carbon of halogenoalkanes (R−X) or carbonyls (C=O) | Electron-rich π bond of alkenes (C=C) or benzene ring |

**[HL] Lewis Acid–Base Connection**: Under the Lewis definition, every **nucleophile** is a **Lewis base** (electron-pair donor) and every **electrophile** is a **Lewis acid** (electron-pair acceptor). This broader model explains reactions without proton transfer — such as BF₃ accepting a lone pair from NH₃ to form the coordinate adduct F₃B←NH₃, AlCl₃ activating Cl₂, and transition-metal ions (e.g., Fe³⁺, Cu²⁺) accepting lone pairs from ligands (H₂O, NH₃, Cl⁻, CN⁻) to form complex ions.

### Core SL Reaction 1: Nucleophilic Substitution of Halogenoalkanes
Because halogens (Cl, Br, I) are more electronegative than carbon, the **Cδ⁺−Xδ⁻** bond is polar. When warmed under reflux with **aqueous NaOH or KOH**, the hydroxide ion nucleophile (OH⁻) replaces the halide leaving group to form an alcohol:
**R−X + OH⁻(aq) → R−OH + X⁻** (condition: warm NaOH(aq), reflux)

For example: CH₃CH₂Br + NaOH(aq) → CH₃CH₂OH + NaBr.

### Core SL Reaction 2: Electrophilic Addition of Alkenes
The C=C double bond consists of one strong **σ bond** and one weaker, exposed **π bond**. Two reactants combine into a **single saturated product** (100% atom economy!) as the π bond breaks and two new σ bonds form:
1. **Halogenation (+ X₂)**: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane). Room temp, dark. **Bromine water test**: orange-brown → colourless instantly (unsaturation test).
2. **Hydrohalogenation (+ HX)**: CH₂=CH₂ + HBr → CH₃CH₂Br (bromoethane). Room temp.
3. **Hydrogenation (+ H₂)**: CH₂=CH₂ + H₂ → CH₃CH₃ (ethane). **Ni catalyst, 150 °C** (or Pt/Pd at room temp). Used industrially to harden vegetable oils into margarine.
4. **Hydration (+ H₂O steam)**: CH₂=CH₂ + H₂O(g) → CH₃CH₂OH (ethanol). **H₃PO₄ catalyst (on SiO₂), 300 °C, 60–70 atm** (or lab two-step: conc. H₂SO₄ then warm with H₂O).
5. **Addition polymerization**: n CH₂=CH₂ → −(CH₂−CH₂)ₙ− (poly(ethene)).`,
      diagram: `<svg viewBox="0 0 640 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curly arrow diagrams comparing nucleophilic substitution of bromoethane by hydroxide ion and electrophilic addition of bromine to ethene">
  <rect x="8" y="8" width="624" height="249" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Curly-Arrow Mastery: Nucleophilic Substitution vs Electrophilic Addition</text>

  <!-- Top box: Nucleophilic substitution -->
  <rect x="22" y="46" width="596" height="96" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="36" y="65" font-size="12" font-weight="700" fill="var(--brand)">Nucleophilic Substitution (R−X + OH⁻ → R−OH + X⁻)</text>
  <!-- OH- -->
  <text x="64" y="108" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">HO:<tspan dy="-6" font-size="11">−</tspan></text>
  <text x="64" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Nucleophile (e⁻ donor)</text>
  <!-- Curly arrow from HO: to C -->
  <path d="M 82 96 Q 120 68 158 94" fill="none" stroke="var(--brand)" stroke-width="2.2"/>
  <polygon points="162,97 152,96 157,89" fill="var(--brand)"/>
  <!-- CH3CH2-Br -->
  <text x="195" y="108" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">CH₃CH₂<tspan dy="-6" font-size="10" fill="var(--bad)">δ+</tspan></text>
  <line x1="238" y1="103" x2="274" y2="103" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="296" y="108" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Br<tspan dy="-6" font-size="10" fill="var(--info)">δ−</tspan></text>
  <!-- Curly arrow C-Br to Br -->
  <path d="M 256 99 Q 272 74 292 90" fill="none" stroke="var(--info)" stroke-width="2.2"/>
  <polygon points="295,93 286,91 291,84" fill="var(--info)"/>
  <text x="235" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Polar C−Br breaks heterolytically</text>
  <!-- Reaction arrow -->
  <text x="355" y="108" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink-2)">→</text>
  <!-- Products -->
  <text x="488" y="108" text-anchor="middle" font-size="14.5" font-weight="700" fill="var(--ink)">CH₃CH₂OH  +  :Br⁻</text>
  <text x="488" y="128" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Ethanol + Bromide leaving group</text>

  <!-- Bottom box: Electrophilic addition -->
  <rect x="22" y="152" width="596" height="94" rx="10" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1.4"/>
  <text x="36" y="171" font-size="12" font-weight="700" fill="var(--accent)">Electrophilic Addition (Alkene + H−Br → Halogenoalkane)</text>
  <!-- Ethene -->
  <text x="72" y="212" text-anchor="middle" font-size="14.5" font-weight="700" fill="var(--ink)">H₂C</text>
  <line x1="94" y1="204" x2="132" y2="204" stroke="var(--accent)" stroke-width="2.4"/>
  <line x1="94" y1="211" x2="132" y2="211" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="154" y="212" text-anchor="middle" font-size="14.5" font-weight="700" fill="var(--ink)">CH₂</text>
  <text x="113" y="233" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">e⁻-rich π bond</text>
  <!-- Arrow from pi bond to H -->
  <path d="M 113 200 Q 150 172 195 194" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <polygon points="199,196 190,196 194,189" fill="var(--accent)"/>
  <!-- H-Br -->
  <text x="215" y="212" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">H<tspan dy="-6" font-size="10" fill="var(--bad)">δ+</tspan></text>
  <line x1="230" y1="207" x2="258" y2="207" stroke="var(--ink)" stroke-width="2"/>
  <text x="278" y="212" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Br<tspan dy="-6" font-size="10" fill="var(--info)">δ−</tspan></text>
  <path d="M 244 203 Q 258 182 274 195" fill="none" stroke="var(--info)" stroke-width="2"/>
  <polygon points="277,198 268,196 273,190" fill="var(--info)"/>
  <text x="246" y="233" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Electrophile (Hδ⁺)</text>
  <!-- Arrow to carbocation then product -->
  <text x="322" y="212" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink-2)">→</text>
  <text x="415" y="212" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">CH₃−C⁺H₂  +  :Br⁻</text>
  <text x="415" y="233" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Carbocation intermediate</text>
  <text x="502" y="212" text-anchor="middle" font-size="17" font-weight="700" fill="var(--ink-2)">→</text>
  <text x="562" y="212" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">CH₃CH₂Br</text>
  <text x="562" y="233" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100% atom economy</text>
</svg>`,
      diagramCaption:
        "Every full curly arrow starts at an electron pair (lone pair or bond) and points toward the atom accepting those electrons. Never draw a curly arrow starting from a positive charge!",
      workedExamples: [
        {
          title: "Classifying Species as Nucleophiles, Electrophiles, or Free Radicals",
          problem:
            "Classify each of the following species as a **nucleophile**, an **electrophile**, or a **free radical**, giving an electronic reason: (a) NH₃, (b) NO₂⁺, (c) •CH₂CH₃, (d) CN⁻.",
          steps: [
            "(a) **NH₃**: Nitrogen has a non-bonding **lone pair** of electrons → **nucleophile** (and Lewis base).",
            "(b) **NO₂⁺**: Positively charged, electron-deficient nitrogen atom that accepts an electron pair → **electrophile** (and Lewis acid).",
            "(c) **•CH₂CH₃**: Electrically neutral species with a single **unpaired electron** → **free radical**.",
            "(d) **CN⁻**: Negatively charged ion with a lone pair on carbon (and nitrogen) → **nucleophile** (and Lewis base).",
          ],
          answer: "(a) Nucleophile, (b) Electrophile, (c) Free radical, (d) Nucleophile.",
          yourTurn: {
            question:
              "Is boron trifluoride (BF₃, which has only 6 valence electrons around boron) classified as a nucleophile or an electrophile?",
            answer: {
              type: "text",
              accept: ["electrophile", "an electrophile", "lewis acid"],
              display: "electrophile",
            },
            solution:
              "Boron in BF₃ has an incomplete octet (empty 2p orbital), so it accepts a lone pair of electrons — making it an electrophile (and a classic Lewis acid).",
          },
        },
        {
          title: "How Non-Polar Br₂ Acts as an Electrophile Toward Ethene",
          problem:
            "Bromine (Br₂) is a non-polar molecule. Explain how it acts as an electrophile when reacting with ethene in the dark.",
          steps: [
            "As a Br₂ molecule approaches the high electron density of ethene's **π bond**, electrons in the Br−Br bond are repelled away from the alkene.",
            "This induces a temporary dipole: **Brδ⁺−Brδ⁻**, with the nearer bromine atom becoming electron-deficient (Brδ⁺).",
            "The π bond donates an electron pair to **Brδ⁺** while the Br−Br bond undergoes **heterolytic fission** onto the further Br atom to form Br⁻.",
            "Finally, Br⁻ donates a lone pair to the positively charged carbocation carbon, producing 1,2-dibromoethane.",
          ],
          answer:
            "The alkene's π electron cloud induces a dipole (Brδ⁺−Brδ⁻) in Br₂; the nearer Brδ⁺ accepts the π electron pair as an electrophile.",
        },
      ],
      keyPoints: [
        "Curly full-arrows ALWAYS move from electron-rich source (lone pair or bond) → electron-poor sink (δ⁺/⁺ atom).",
        "Nucleophiles donate an electron pair (Lewis bases); electrophiles accept an electron pair (Lewis acids).",
        "Halogenoalkanes react by nucleophilic substitution because the polar Cδ⁺−Xδ⁻ bond creates an electrophilic carbon.",
        "Alkenes react by electrophilic addition because their exposed π electron cloud attracts electrophiles.",
        "Bromine water turns from orange-brown to colourless instantly in the dark ONLY when an unsaturated C=C (or C≡C) bond is present.",
      ],
      whyItWorks:
        "Why do alkenes undergo *addition* whereas alkanes undergo *substitution*? A C=C double bond has one σ bond (~346 kJ mol⁻¹) and one weaker π bond (~266 kJ mol⁻¹). Breaking that weaker π bond and forming two strong σ bonds (e.g., two C−Br bonds, 2 × 285 = 570 kJ mol⁻¹) releases substantial energy, making addition both fast and strongly exothermic!",
      strategies: [
        "**Arrow-Direction Sanity Check**: Before finalizing any mechanism diagram, verify that every arrow tail sits on a lone pair, negative charge, or bond line — NEVER on a `+` sign or `δ+` atom!",
        "**Charge Conservation Check**: Total net charge on the left of every step must equal total net charge on the right.",
        "**Reagent Conditions Flash-Check**: Always pair a reaction with its conditions (e.g., H₂/Ni 150 °C; H₂O(g)/H₃PO₄ 300 °C 60 atm; warm NaOH(aq) reflux).",
      ],
      thinkDeeper:
        "Water (H₂O) has two lone pairs on oxygen, so it is a nucleophile — yet aqueous H₂O does NOT add rapidly to pure ethene at room temperature without an acid catalyst (H₃PO₄ or H₂SO₄). Why can't neutral H₂O initiate addition on its own, and what exact role does H⁺ play?",
    },

    // =========================================================================
    // SECTION 3: R3.4 SN1 vs SN2, Markovnikov & Benzene Nitration [HL]
    // =========================================================================
    {
      id: "sn1-sn2-markovnikov-hl",
      heading: "R3.4 SN1 vs SN2 Mechanisms, Markovnikov's Rule & Benzene Nitration",
      level: "HL",
      discovery: {
        problem:
          "Two structural isomers of C₄H₉Br — 1-bromobutane (primary) and 2-bromo-2-methylpropane (tertiary) — are hydrolysed with NaOH(aq). When `[OH⁻]` is tripled, the hydrolysis rate of 1-bromobutane triples, but the hydrolysis rate of 2-bromo-2-methylpropane does NOT change at all! How can two nearly identical molecules obey completely different rate laws?",
        idea:
          "The bulky methyl groups on tertiary 2-bromo-2-methylpropane physically block OH⁻ from attacking from behind, so it must wait for the C−Br bond to break by itself first (the slow, unimolecular **SN1** step) to form a stabilized 3° carbocation — OH⁻ only enters in a fast second step, so `[OH⁻]` does not appear in the rate law! Primary 1-bromobutane has an open backside and an unstable 1° carbocation, so OH⁻ pushes Br⁻ out in one simultaneous bimolecular **SN2** collision.",
      },
      body: `### SN2 vs SN1 Nucleophilic Substitution [HL]
The structure of the halogenoalkane dictates whether nucleophilic substitution follows a concerted one-step pathway (**SN2**) or a two-step carbocation pathway (**SN1**):

| Feature | SN2 (Bimolecular) | SN1 (Unimolecular) |
|---|---|---|
| Preferred substrate | **Primary (1°)** halogenoalkanes (& CH₃X) | **Tertiary (3°)** halogenoalkanes |
| Steps & RDS | **1 concerted step** (bond forming & breaking simultaneously) | **2 steps**: Step 1 slow C−X heterolysis (RDS); Step 2 fast Nu⁻ attack |
| Rate equation | **rate = k[RX][Nu⁻]** (2nd order overall) | **rate = k[RX]** (1st order overall; zero order in Nu⁻) |
| Key high-energy species | **5-coordinate transition state** [HO···C···X]⁻ (NOT isolable) | **Trigonal planar (120°) sp² carbocation intermediate** R₃C⁺ |
| Energy profile | **1 peak**, no intermediate well | **2 peaks** (E_a1 > E_a2) with carbocation well between them |
| Stereochemistry (chiral C) | **100% Walden inversion** (backside 180° attack, umbrella flip) | **Racemic mixture (50:50)** (equal attack from both planar faces) |
| Favoured solvent | **Polar aprotic** (propanone, DMSO, DMF) — leaves Nu⁻ unsolvated | **Polar protic** (H₂O, ethanol) — stabilizes R₃C⁺ & X⁻ via H-bonds/ion–dipole |
| Why favoured? | Minimal steric hindrance allows backside attack; 1° carbocation is too unstable | Steric crowding blocks backside attack; three +I alkyl groups stabilize 3° carbocation |

**Secondary (2°) halogenoalkanes** lie in the middle and react by a **mixture of SN1 and SN2** depending on solvent polarity and nucleophile strength.

### Leaving-Group Trend & Nucleophile Strength
- **Halogen identity (BOTH SN1 and SN2)**: Reactivity follows **R−I > R−Br > R−Cl > R−F**. Even though C−F is the most polar bond, **C−X bond enthalpy controls the rate** (C−I = 228 kJ mol⁻¹ is the weakest and breaks fastest in the RDS; C−Cl = 324 kJ mol⁻¹ is stronger). Warming with aqueous AgNO₃ in ethanol confirms this visually: yellow **AgI** precipitates fastest, cream **AgBr** next, white **AgCl** slowest.
- **Nucleophile strength**: Negatively charged nucleophiles (e.g., OH⁻) are stronger than neutral ones (H₂O), accelerating **SN2** (where [Nu⁻] is in the rate equation) but having **no effect** on the rate of **SN1**.

### Markovnikov's Rule & Electrophilic Addition to Unsymmetrical Alkenes [HL]
When an unsymmetrical reagent like **HBr** adds to an unsymmetrical alkene like **propene (CH₃CH=CH₂)**, two products are possible:
- **Major product**: **2-bromopropane** (CH₃CHBrCH₃)
- **Minor product**: **1-bromopropane** (CH₃CH₂CH₂Br)

**Markovnikov's Rule**: The hydrogen of H−X bonds preferentially to the alkene carbon that already bears the **greater number of hydrogen atoms** ("the rich get richer").

**Electronic Explanation (Inductive Effect)**:
Alkyl groups are electron-donating (**positive inductive effect, +I**), pushing electron density toward the positively charged carbocation carbon and dispersing the positive charge. Therefore carbocation stability follows:
**Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl**
For propene + HBr, protonating C-1 generates a more stable **secondary carbocation** (CH₃−C⁺H−CH₃, two +I methyl groups), which has a lower activation energy and forms much faster than the **primary carbocation** (CH₃−CH₂−C⁺H₂, one +I ethyl group).

### Electrophilic Aromatic Substitution: Nitration of Benzene [HL]
Although benzene (C₆H₆) has three double bonds in its Kekulé formula, its six π electrons are **delocalized** across all six carbon atoms, granting ~150 kJ mol⁻¹ of resonance stabilization energy. Addition would permanently break this delocalized ring, so benzene reacts instead by **electrophilic substitution**, restoring aromaticity at the end!

1. **Generating the electrophile (NO₂⁺, nitronium ion)** using **conc. HNO₃ + conc. H₂SO₄ at 50 °C**:
   HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O (or HNO₃ + 2 H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2 HSO₄⁻)
   Here, concentrated H₂SO₄ is the stronger acid and protonates HNO₃ (which acts as a Brønsted–Lowry base!).
2. **Step 1 (slow, RDS — electrophilic attack)**: A curly arrow from the benzene π ring to N of **NO₂⁺** forms a delocalized **arenium ion (carbocation) intermediate** — drawn with a broken horseshoe spanning 5 carbons and a + sign inside, open toward the sp³ carbon bonded to both H and NO₂.
3. **Step 2 (fast — deprotonation & rearomatization)**: A curly arrow from the C−H σ bond returns the electron pair to the ring, expelling **H⁺** (which combines with HSO₄⁻ to regenerate the H₂SO₄ catalyst) and yielding **nitrobenzene (C₆H₅NO₂)**. Keeping T ≈ **50 °C** prevents further substitution to 1,3-dinitrobenzene.`,
      diagram: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Potential energy profiles comparing one-step SN2 via a single transition state versus two-step SN1 via a carbocation intermediate well, plus carbocation stability order">
  <rect x="8" y="8" width="624" height="264" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">SN2 vs SN1 Energy Profiles &amp; Carbocation Stability [HL]</text>

  <!-- Left chart: SN2 -->
  <rect x="20" y="44" width="292" height="170" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="166" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SN2 (1° RX · 1 Concerted Step)</text>
  <line x1="48" y1="192" x2="294" y2="192" stroke="var(--ink-2)" stroke-width="1.4"/>
  <line x1="48" y1="74" x2="48" y2="192" stroke="var(--ink-2)" stroke-width="1.4"/>
  <text x="38" y="135" text-anchor="middle" font-size="10" fill="var(--ink-2)" transform="rotate(-90 38 135)">Potential Energy</text>
  <text x="172" y="206" text-anchor="middle" font-size="10" fill="var(--ink-2)">Reaction Coordinate</text>
  <!-- SN2 single hump curve -->
  <path d="M 56 150 L 96 150 C 126 150, 142 84, 170 84 C 198 84, 214 172, 244 172 L 284 172" fill="none" stroke="var(--brand)" stroke-width="2.8"/>
  <circle cx="170" cy="84" r="4" fill="var(--brand)"/>
  <text x="170" y="75" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">TS: [HO···C···X]⁻</text>
  <text x="76" y="143" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink)">R−X + OH⁻</text>
  <text x="262" y="165" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ink)">R−OH + X⁻</text>
  <text x="170" y="128" text-anchor="middle" font-size="10" fill="var(--ink-2)">Rate = k[RX][OH⁻]</text>
  <text x="170" y="142" text-anchor="middle" font-size="10" fill="var(--ink-2)">Walden Inversion</text>

  <!-- Right chart: SN1 -->
  <rect x="328" y="44" width="292" height="170" rx="10" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.4"/>
  <text x="474" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">SN1 (3° RX · 2 Steps + Intermediate)</text>
  <line x1="356" y1="192" x2="602" y2="192" stroke="var(--ink-2)" stroke-width="1.4"/>
  <line x1="356" y1="74" x2="356" y2="192" stroke="var(--ink-2)" stroke-width="1.4"/>
  <text x="346" y="135" text-anchor="middle" font-size="10" fill="var(--ink-2)" transform="rotate(-90 346 135)">Potential Energy</text>
  <text x="480" y="206" text-anchor="middle" font-size="10" fill="var(--ink-2)">Reaction Coordinate</text>
  <!-- SN1 double hump curve -->
  <path d="M 364 152 L 392 152 C 410 152, 418 82, 438 82 C 458 82, 464 134, 480 134 C 496 134, 504 108, 522 108 C 540 108, 548 174, 568 174 L 594 174" fill="none" stroke="var(--info)" stroke-width="2.8"/>
  <circle cx="438" cy="82" r="4" fill="var(--bad)"/>
  <text x="436" y="75" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">TS1 (RDS)</text>
  <circle cx="480" cy="134" r="4" fill="var(--info)"/>
  <text x="480" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="var(--info)">Planar R₃C⁺</text>
  <circle cx="522" cy="108" r="3.5" fill="var(--info)"/>
  <text x="530" y="100" text-anchor="middle" font-size="10" font-weight="700" fill="var(--info)">TS2 (fast)</text>
  <text x="480" y="168" text-anchor="middle" font-size="10" fill="var(--ink-2)">Rate = k[RX] · Racemic 50:50</text>

  <!-- Bottom stability strip -->
  <rect x="20" y="224" width="600" height="38" rx="9" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1.3"/>
  <text x="320" y="247" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Carbocation Stability (+I inductive effect):  <tspan fill="var(--brand)">3° (R₃C⁺)</tspan>  &gt;  <tspan fill="var(--info)">2° (R₂CH⁺)</tspan>  &gt;  <tspan fill="var(--accent)">1° (RCH₂⁺)</tspan>  &gt;  <tspan fill="var(--bad)">CH₃⁺</tspan></text>
</svg>`,
      diagramCaption:
        "SN2 crosses a single transition-state peak with no intermediate; SN1 crosses a high RDS peak into a planar carbocation well before a smaller second peak. The exact same 3° > 2° > 1° carbocation stability drives both SN1 and Markovnikov's rule.",
      workedExamples: [
        {
          title: "Predicting SN1 vs SN2 Kinetics & Stereochemistry",
          problem:
            "Optically active (R)-2-bromobutane is warmed with aqueous NaOH in propanone (a polar aprotic solvent), predominantly following an SN2 pathway. (a) Write the rate equation. (b) Predict what happens to the rate if `[2-bromobutane]` is doubled and `[OH⁻]` is tripled. (c) State the stereochemical outcome.",
          steps: [
            "(a) Because the reaction proceeds via **SN2**, both the halogenoalkane and the nucleophile collide in the single rate-determining step: **rate = k[C₄H₉Br][OH⁻]**.",
            "(b) Multiplying `[C₄H₉Br]` by 2 and `[OH⁻]` by 3 multiplies the rate by {{2 * 3 = 6}} (a 6-fold increase).",
            "(c) Backside attack by OH⁻ causes **Walden inversion** of configuration, forming optically active **(S)-butan-2-ol** (note: in polar protic water, competing SN1 would partially racemize the product).",
          ],
          answer: "rate = k[C₄H₉Br][OH⁻]; rate increases by a factor of 6; inversion of configuration to (S)-butan-2-ol.",
          yourTurn: {
            question:
              "2-chloro-2-methylpropane (a tertiary halogenoalkane) reacts with aqueous NaOH via an SN1 mechanism. If `[2-chloro-2-methylpropane]` is tripled and `[OH⁻]` is quadrupled, by what factor does the initial reaction rate increase?",
            answer: { type: "number", value: 3, display: "3" },
            solution:
              "For SN1, rate = k[(CH₃)₃CCl] (zero order in OH⁻). Tripling the halogenoalkane triples the rate, while quadrupling [OH⁻] has no effect — factor = 3.",
          },
        },
        {
          title: "Applying Markovnikov's Rule to 2-Methylbut-2-ene + HCl",
          problem:
            "Predict the major organic product when 2-methylbut-2-ene, (CH₃)₂C=CHCH₃, reacts with HCl, and justify your answer mechanistically.",
          steps: [
            "Inspect the two C=C carbons: C-2 has **0 H atoms** (bonded to two CH₃ groups); C-3 has **1 H atom** (bonded to one CH₃ and one H).",
            "Pathway A (H⁺ adds to C-3): forms `(CH₃)₂C⁺−CH₂CH₃`, a **tertiary (3°) carbocation** stabilized by three electron-donating (+I) alkyl groups.",
            "Pathway B (H⁺ adds to C-2): forms `(CH₃)₂CH−C⁺HCH₃`, a less stable **secondary (2°) carbocation** (only two +I alkyl groups).",
            "Pathway A has a lower activation energy and dominates. Cl⁻ attacks C-2 to give **2-chloro-2-methylbutane** as the major product.",
          ],
          answer: "2-chloro-2-methylbutane (via the more stable tertiary carbocation intermediate).",
        },
      ],
      keyPoints: [
        "1° RX → SN2 (1 step, 5-coordinate TS, rate = k[RX][Nu⁻], Walden inversion, polar aprotic solvent).",
        "3° RX → SN1 (2 steps, planar R₃C⁺ intermediate, rate = k[RX], racemic mixture, polar protic solvent).",
        "Leaving-group rate order is ALWAYS R−I > R−Br > R−Cl > R−F because weaker C−X bonds cleave faster.",
        "Markovnikov's rule arises because 3° > 2° > 1° carbocations are stabilized by the +I inductive effect of alkyl groups.",
        "Benzene nitration uses conc. HNO₃ + conc. H₂SO₄ at 50 °C to generate NO₂⁺ and proceeds via an arenium ion to preserve aromatic delocalization.",
      ],
      whyItWorks:
        "Notice the deep unity across HL organic mechanisms: **SN1 hydrolysis** and **Markovnikov electrophilic addition** are controlled by the exact same electronic law — alkyl groups release electron density through σ bonds (**+I effect**), lowering the energy of a positively charged carbocation and its preceding transition state (Hammond's postulate). Meanwhile, **benzene nitration** refuses to stop after Step 1 because regaining 150 kJ mol⁻¹ of delocalization energy by losing H⁺ is far more favourable than trapping HSO₄⁻ to form a non-aromatic addition product!",
      strategies: [
        "**SN1 vs SN2 4-Column Anchor**: Memorize the paired keywords: *1°–SN2–2nd order–Inversion–Aprotic* vs *3°–SN1–1st order–Racemic–Protic*.",
        "**Drawing the SN2 Transition State**: Always include square brackets `[ ... ]⁻`, dotted partial bonds `HO···C···X`, the 3 other groups in a trigonal plane (flat umbrella), and NO full `+` charge on carbon.",
        "**Drawing Benzene's Arenium Ion**: Draw the inner horseshoe spanning the 5 remaining carbons with its open gap pointing directly at the carbon attached to both H and NO₂, and place `+` inside the horseshoe.",
      ],
      thinkDeeper:
        "When 1-bromo-1-phenylethane (a secondary benzylic halogenoalkane) reacts with water, it reacts almost as fast via SN1 as a tertiary halogenoalkane! Why is a benzylic carbocation (C₆H₅−C⁺H−CH₃) unusually stable despite being secondary?",
    },

    // =========================================================================
    // SECTION 4: R3.4 Multi-Step Organic Synthesis & Retrosynthesis [HL]
    // =========================================================================
    {
      id: "organic-synthesis-retrosynthesis-hl",
      heading: "R3.4 Multi-Step Organic Synthesis & Retrosynthesis Pathways",
      level: "HL",
      discovery: {
        problem:
          "You have a bottle of **propan-1-ol** (CH₃CH₂CH₂OH), but you need to synthesize **propanone** (CH₃COCH₃) in three clean steps. Direct oxidation of propan-1-ol only gives propanal or propanoic acid — never propanone! How can you move the oxygen atom from carbon-1 to carbon-2 without breaking the carbon chain?",
        idea:
          "Use **retrosynthesis** (working backwards)! Propanone comes from oxidizing **propan-2-ol**. Where does propan-2-ol come from? **Markovnikov hydration** (or HBr addition then NaOH(aq) hydrolysis) of **propene**! And propene comes from **dehydrating propan-1-ol** with hot conc. H₂SO₄! Walking backwards unlocks a clean 3-step isomer-switching highway: propan-1-ol → propene → propan-2-ol → propanone.",
      },
      body: `### What Is Retrosynthesis?
Rather than guessing blindly forward from a starting material, synthetic chemists start at the **target molecule (TM)** and work **backwards** using open **retrosynthetic arrows (⇒)** to identify a **precursor** one functional-group interconversion away. Repeating this up to 4 steps bridges the target back to the given starting material.

### Master IB Organic Functional-Group Toolkit (Up to 4 Steps)
| Conversion | Exact Reagents & Conditions | Reaction Type / Notes |
|---|---|---|
| Alkane → Halogenoalkane | Cl₂ or Br₂, **UV light** | Free-radical substitution (avoid if alkene route exists!) |
| Alkene → Alkane | H₂, **Ni catalyst, 150 °C** | Electrophilic addition / hydrogenation |
| Alkene → Halogenoalkane | HCl or HBr, **room temp** | Electrophilic addition (**Markovnikov** major product!) |
| Alkene → Dihalogenoalkane | Br₂ or Cl₂, **room temp, dark** | Electrophilic addition (orange → colourless) |
| Alkene → Alcohol | H₂O(g) (steam), **H₃PO₄, 300 °C, 60 atm** (or conc. H₂SO₄ then H₂O) | Electrophilic addition (hydration; Markovnikov!) |
| Alcohol → Alkene | **conc. H₂SO₄ or conc. H₃PO₄, heat** (~170 °C) | Dehydration (elimination of H₂O) |
| Halogenoalkane → Alcohol | **NaOH(aq) / KOH(aq), warm under reflux** | Nucleophilic substitution (SN1 or SN2) |
| 1° Alcohol → Aldehyde | **K₂Cr₂O₇ / H⁺ (dil. H₂SO₄), warm & distil immediately** | Partial oxidation (orange → green) |
| 1° Alcohol → Carboxylic acid | **Excess K₂Cr₂O₇ / H⁺, heat under reflux** | Complete oxidation (orange → green) |
| 2° Alcohol → Ketone | **K₂Cr₂O₇ / H⁺, heat under reflux** | Oxidation (orange → green); 3° alcohols do NOT oxidize |
| Aldehyde → 1° Alcohol | **NaBH₄** (in aq. ethanol/methanol) OR **LiAlH₄** (dry ether, then H⁺(aq)) | Reduction (+ 2[H]) |
| Ketone → 2° Alcohol | **NaBH₄** (in aq. ethanol/methanol) OR **LiAlH₄** (dry ether, then H⁺(aq)) | Reduction (+ 2[H]) |
| Carboxylic acid → 1° Alcohol | **LiAlH₄ in dry ether**, then **H⁺(aq)** | Strong reduction (**NaBH₄ does NOT work!**) |
| Carboxylic acid + Alcohol → Ester | **conc. H₂SO₄ catalyst, heat under reflux** | Esterification / condensation (+ H₂O) |
| Benzene → Nitrobenzene | **conc. HNO₃ + conc. H₂SO₄, 50 °C** | Electrophilic aromatic substitution |
| Nitrobenzene → Phenylamine | **1. Sn + conc. HCl, reflux**; **2. NaOH(aq)** | Reduction (Stage 1 forms C₆H₅NH₃⁺; Stage 2 liberates C₆H₅NH₂) |

### Crucial Selectivity & Condition Rules Examiners Test
1. **Distillation vs Reflux**: Oxidizing a 1° alcohol with K₂Cr₂O₇/H⁺ gives an **aldehyde** ONLY if you **distil off** the lower-boiling aldehyde immediately (it lacks hydrogen bonding, so its boiling point is much lower than the alcohol or carboxylic acid). Heating under **reflux** with excess oxidant traps the aldehyde in the flask until it oxidizes completely to the **carboxylic acid**.
2. **NaBH₄ vs LiAlH₄**:
   - **NaBH₄** is milder, safe in aqueous/alcoholic solvents, and reduces **aldehydes and ketones ONLY** — it cannot reduce carboxylic acids or esters.
   - **LiAlH₄** is far more reactive, reacts violently with water (must use **dry ether** followed by aqueous acid work-up **H⁺(aq)**), and reduces **carboxylic acids, aldehydes, and ketones** all the way to alcohols. (Remember: carboxylic acid → aldehyde cannot be stopped cleanly in one step; reduce to 1° alcohol with LiAlH₄, then gently oxidize with K₂Cr₂O₇/H⁺ + distillation!).
3. **Two-Stage Nitrobenzene Reduction**: Never stop after writing **Sn / conc. HCl, reflux**! Because phenylamine (C₆H₅NH₂) is a weak base, strongly acidic HCl protonates it into the water-soluble **phenylammonium ion (C₆H₅NH₃⁺)**. Adding **NaOH(aq)** in Stage 2 is mandatory to deprotonate C₆H₅NH₃⁺ and release free phenylamine.
4. **Designing High-Yield Routes**: Prefer routes with fewer steps, avoid free-radical halogenation when alkene addition gives a single clean regioisomer, and check carbon count carefully (esterification combines an alcohol chain + a carboxylic acid chain!).`,
      diagram: `<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IB Chemistry organic synthesis reaction roadmap linking alkanes, alkenes, halogenoalkanes, alcohols, aldehydes, ketones, carboxylic acids, esters, benzene, nitrobenzene, and phenylamine">
  <rect x="8" y="8" width="624" height="294" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Master Organic Synthesis Roadmap (SL + HL)</text>

  <!-- Node boxes -->
  <!-- Row 1: Alkane, Alkene, Halogenoalkane -->
  <rect x="24" y="48" width="112" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>
  <text x="80" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Alkane</text>

  <rect x="200" y="48" width="118" height="36" rx="8" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1.6"/>
  <text x="259" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Alkene (C=C)</text>

  <rect x="394" y="48" width="132" height="36" rx="8" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.6"/>
  <text x="460" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">Halogenoalkane</text>

  <!-- Row 2: Alcohol -->
  <rect x="258" y="132" width="146" height="38" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="2"/>
  <text x="331" y="155" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">Alcohol (1° / 2°)</text>

  <!-- Row 3: Aldehyde, Ketone, Carboxylic Acid, Ester -->
  <rect x="24" y="214" width="118" height="36" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="83" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Aldehyde</text>

  <rect x="166" y="214" width="128" height="36" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.4"/>
  <text x="230" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Carboxylic Acid</text>

  <rect x="318" y="214" width="108" height="36" rx="8" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.4"/>
  <text x="372" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Ketone</text>

  <rect x="454" y="132" width="156" height="38" rx="8" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="532" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Ester (RCOOR')</text>

  <!-- Aromatic strip at bottom -->
  <rect x="24" y="262" width="592" height="30" rx="8" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.3"/>
  <text x="320" y="281" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Aromatic Route [HL]:  <tspan fill="var(--info)">Benzene</tspan> —(conc. HNO₃/H₂SO₄, 50 °C)→ <tspan fill="var(--accent)">Nitrobenzene</tspan> —(1. Sn/conc. HCl reflux; 2. NaOH)→ <tspan fill="var(--brand)">Phenylamine</tspan></text>

  <!-- Arrows Row 1 -->
  <!-- Alkene -> Alkane -->
  <line x1="200" y1="62" x2="140" y2="62" stroke="var(--ink-2)" stroke-width="1.6"/>
  <polygon points="136,62 143,58 143,66" fill="var(--ink-2)"/>
  <text x="168" y="55" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--ink-2)">H₂, Ni, 150°C</text>

  <!-- Alkane -> RX (arc above or bottom) -->
  <path d="M 80 84 Q 80 112 435 112 Q 445 112 445 88" fill="none" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="4 3"/>
  <polygon points="445,84 441,91 449,91" fill="var(--ink-2)"/>
  <text x="148" y="106" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--ink-2)">X₂, UV (FRS)</text>

  <!-- Alkene -> RX -->
  <line x1="318" y1="66" x2="390" y2="66" stroke="var(--accent)" stroke-width="1.8"/>
  <polygon points="394,66 387,62 387,70" fill="var(--accent)"/>
  <text x="356" y="58" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">HX (Markov.)</text>

  <!-- Alkene <-> Alcohol -->
  <line x1="259" y1="84" x2="292" y2="129" stroke="var(--brand)" stroke-width="1.8"/>
  <polygon points="295,132 287,129 293,124" fill="var(--brand)"/>
  <text x="235" y="119" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--brand)">H₂O(g), H₃PO₄</text>

  <!-- RX -> Alcohol -->
  <line x1="452" y1="84" x2="380" y2="129" stroke="var(--info)" stroke-width="1.8"/>
  <polygon points="376,132 380,124 385,130" fill="var(--info)"/>
  <text x="456" y="114" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--info)">NaOH(aq), reflux</text>

  <!-- Alcohol -> Aldehyde -->
  <line x1="264" y1="170" x2="105" y2="212" stroke="var(--brand)" stroke-width="1.6"/>
  <polygon points="101,213 107,207 109,215" fill="var(--brand)"/>
  <text x="146" y="186" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--brand)">K₂Cr₂O₇/H⁺, distil</text>
  <text x="168" y="201" text-anchor="middle" font-size="9" fill="var(--ink-2)">(back: NaBH₄)</text>

  <!-- Alcohol <-> Carboxylic acid -->
  <line x1="296" y1="170" x2="246" y2="211" stroke="var(--bad)" stroke-width="1.6"/>
  <polygon points="242,214 245,206 250,212" fill="var(--bad)"/>
  <text x="292" y="196" text-anchor="middle" font-size="9" font-weight="600" fill="var(--bad)">reflux / LiAlH₄</text>

  <!-- Alcohol <-> Ketone -->
  <line x1="354" y1="170" x2="370" y2="210" stroke="var(--info)" stroke-width="1.6"/>
  <polygon points="372,214 366,208 373,206" fill="var(--info)"/>
  <text x="414" y="196" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--info)">2°: Cr₂O₇²⁻ / NaBH₄</text>

  <!-- Alcohol + Acid -> Ester -->
  <line x1="404" y1="151" x2="450" y2="151" stroke="var(--accent)" stroke-width="1.8"/>
  <polygon points="454,151 447,147 447,155" fill="var(--accent)"/>
  <text x="532" y="186" text-anchor="middle" font-size="9.5" font-weight="600" fill="var(--accent)">+ RCOOH, conc. H₂SO₄, reflux</text>
</svg>`,
      diagramCaption:
        "Alcohols sit at the central hub of IB organic synthesis — connecting alkenes and halogenoalkanes above to aldehydes, ketones, carboxylic acids, and esters below.",
      workedExamples: [
        {
          title: "3-Step Retrosynthesis: Ethene → Ethyl Ethanoate",
          problem:
            "Design a synthesis of **ethyl ethanoate** (CH₃COOCH₂CH₃) starting solely from **ethene** (CH₂=CH₂) and inorganic reagents. State the reagents and conditions for every step.",
          steps: [
            "**Retrosynthesis**: Ethyl ethanoate ⇒ **ethanoic acid** (CH₃COOH) + **ethanol** (CH₃CH₂OH) via esterification.",
            "Ethanoic acid ⇒ **ethanol** via complete oxidation (excess K₂Cr₂O₇/H⁺, reflux). Both ester halves therefore come from ethanol!",
            "**Step 1 (Ethene → Ethanol)**: CH₂=CH₂ + H₂O(g) → CH₃CH₂OH using **steam, H₃PO₄ catalyst, 300 °C, 60 atm** (hydration).",
            "**Step 2 (Portion of Ethanol → Ethanoic acid)**: CH₃CH₂OH + 2[O] → CH₃COOH + H₂O using **excess acidified K₂Cr₂O₇ / H⁺, heat under reflux**.",
            "**Step 3 (Ethanoic acid + remaining Ethanol → Ethyl ethanoate)**: CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O using **conc. H₂SO₄ catalyst, heat under reflux**.",
          ],
          answer:
            "Step 1: H₂O(g), H₃PO₄, 300 °C, 60 atm → ethanol; Step 2: oxidize half with excess K₂Cr₂O₇/H⁺ under reflux → ethanoic acid; Step 3: combine both with conc. H₂SO₄ under reflux → ethyl ethanoate.",
          yourTurn: {
            question:
              "To convert **butanoic acid** (CH₃CH₂CH₂COOH) directly into **butan-1-ol** (CH₃CH₂CH₂CH₂OH), which hydride reducing agent must be used (followed by aqueous acid work-up): NaBH₄ or LiAlH₄?",
            answer: {
              type: "text",
              accept: ["LiAlH4", "LiAlH₄", "lithium aluminium hydride", "lithium aluminum hydride"],
              display: "LiAlH₄",
            },
            solution:
              "Carboxylic acids require the powerful reducing agent LiAlH₄ in dry ether (followed by H⁺(aq)). NaBH₄ is too mild and only reduces aldehydes and ketones.",
          },
        },
        {
          title: "2-Step Aromatic Synthesis: Benzene → Phenylamine",
          problem:
            "Outline a 2-step synthesis of **phenylamine** (C₆H₅NH₂) from **benzene** (C₆H₆), specifying all reagents, conditions, and why the final alkali addition is required.",
          steps: [
            "**Step 1 (Nitration)**: Benzene + **conc. HNO₃ + conc. H₂SO₄ at 50 °C** → **nitrobenzene** (C₆H₅NO₂) + H₂O (electrophilic aromatic substitution).",
            "**Step 2a (Reduction)**: Nitrobenzene + **Sn + conc. HCl, heat under reflux** → **phenylammonium ion** (C₆H₅NH₃⁺).",
            "**Step 2b (Neutralization)**: Add **NaOH(aq)** to deprotonate C₆H₅NH₃⁺ + OH⁻ → **phenylamine (C₆H₅NH₂)** + H₂O.",
          ],
          answer:
            "Step 1: conc. HNO₃ + conc. H₂SO₄, 50 °C → nitrobenzene; Step 2: Sn + conc. HCl under reflux, followed by NaOH(aq) → phenylamine.",
        },
      ],
      keyPoints: [
        "Always start multi-step synthesis problems by writing the retrosynthetic chain backwards (`⇒`) from target to starting material.",
        "Alcohols are the master hub connecting alkenes, halogenoalkanes, aldehydes, ketones, carboxylic acids, and esters.",
        "1° alcohol + K₂Cr₂O₇/H⁺: immediate **distillation** stops at the aldehyde; **reflux** with excess oxidant drives all the way to the carboxylic acid.",
        "**NaBH₄** reduces aldehydes/ketones only; **LiAlH₄ in dry ether (then H⁺(aq))** is required to reduce carboxylic acids.",
        "Reducing nitrobenzene with **Sn / conc. HCl (reflux)** produces C₆H₅NH₃⁺ — ALWAYS add **NaOH(aq)** afterwards to obtain free phenylamine!",
      ],
      whyItWorks:
        "Why does retrosynthesis beat guessing forward? From any simple starting material like ethene, there are 6+ reactions in Step 1, 30+ paths by Step 2, and hundreds by Step 3 — a combinatorial explosion. Working backwards from a specific target functional group (like a ketone or phenylamine) typically leaves only 1 or 2 valid IB precursors at each step, collapsing the search space straight to the cleanest route!",
      strategies: [
        "**4-Check Synthesis Audit**: For every step in your route, state (1) intermediate name/formula, (2) exact reagent, (3) exact condition (reflux/distil/UV/50 °C/catalyst), and (4) any mandatory work-up (H⁺(aq) after LiAlH₄; NaOH(aq) after Sn/HCl).",
        "**Carbon-Count Check**: Compare the carbon count of starting material and target. If it stays equal, you only need functional-group interconversions; if it doubles or sums two fragments, look for esterification.",
        "**Avoid Radical Traps**: Never use `alkane + Cl₂/UV` if you can reach the exact halogenoalkane cleanly via `alkene + HX`!",
      ],
      thinkDeeper:
        "How could you convert **propanoic acid** (CH₃CH₂COOH) into **propanal** (CH₃CH₂CHO) in two high-yielding steps using only IB syllabus reagents, given that LiAlH₄ reduces carboxylic acids directly past the aldehyde all the way to the primary alcohol?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Why are alkanes unreactive toward acids, bases, nucleophiles, and electrophiles?",
        back: "Their C−C and C−H σ bonds are strong and essentially non-polar (Δχ ≈ 0.4), with no π electron cloud or δ⁺ carbon atom.",
        level: "SL",
      },
      {
        front: "Distinguish homolytic fission from heterolytic fission (products + arrow type).",
        back: "**Homolytic**: 1 e⁻ to each atom → two neutral **free radicals** (**fish-hook half-arrows**).\n**Heterolytic**: both e⁻ to one atom → **cation + anion** (**full curly arrow**).",
        level: "SL",
      },
      {
        front: "How do you instantly tell Initiation, Propagation, and Termination apart in a radical mechanism?",
        back: "Count free radicals (dots): **Initiation** 0 → 2 · **Propagation** 1 → 1 (chain loops) · **Termination** 2 → 0.",
        level: "SL",
      },
      {
        front: "Write both propagation steps for the monochlorination of methane.",
        back: "1. CH₄ + Cl• → •CH₃ + HCl (never H•!)\n2. •CH₃ + Cl₂ → CH₃Cl + Cl•",
        level: "SL",
      },
      {
        front: "Define nucleophile and electrophile, and give three IB examples of each.",
        back: "**Nucleophile**: electron-rich e⁻-pair donor (OH⁻, CN⁻, NH₃, H₂O, I⁻).\n**Electrophile**: electron-deficient e⁻-pair acceptor (H⁺, Br₂/Brδ⁺, NO₂⁺, BF₃, R₃C⁺).",
        level: "SL",
      },
      {
        front: "What is the bromine water test for alkenes vs alkanes?",
        back: "**Alkene**: decolourizes orange-brown Br₂(aq) **rapidly in the dark** (electrophilic addition).\n**Alkane**: stays orange-brown in the dark; slowly fades only in **UV light** (free-radical substitution, producing HBr).",
        level: "SL",
      },
      {
        front: "State the conditions for hydrogenation and hydration of ethene.",
        back: "**Hydrogenation (+ H₂)**: Ni catalyst, 150 °C (or Pt/Pd room temp).\n**Hydration (+ H₂O steam)**: H₃PO₄ catalyst, 300 °C, 60–70 atm.",
        level: "SL",
      },
      {
        front: "Compare SN2 and SN1: substrate class, rate equation, and stereochemistry.",
        back: "**SN2**: 1° RX · rate = k[RX][Nu⁻] · 1 step (5-coord TS) · **Walden inversion**.\n**SN1**: 3° RX · rate = k[RX] · 2 steps (planar R₃C⁺) · **racemic (50:50)** mixture.",
        level: "HL",
      },
      {
        front: "Which solvent type favours SN2 vs SN1, and why?",
        back: "**SN2 → polar aprotic** (propanone, DMSO): avoids H-bonding to Nu⁻, keeping it reactive.\n**SN1 → polar protic** (H₂O, ethanol): stabilizes carbocation & X⁻ via ion–dipole/H-bonds, lowering E_a1.",
        level: "HL",
      },
      {
        front: "Why is the rate of nucleophilic substitution R−I > R−Br > R−Cl > R−F even though C−F is the most polar bond?",
        back: "**Bond enthalpy dominates** over polarity: C−I (228 kJ mol⁻¹) is the weakest bond and requires the lowest activation energy to break in the rate-determining step.",
        level: "HL",
      },
      {
        front: "Explain Markovnikov's rule using carbocation stability.",
        back: "Alkyl groups donate electron density via the **+I inductive effect**, stabilizing carbocations in order **3° > 2° > 1°**. H⁺ adds to the C=C carbon with more H atoms to generate the more stable carbocation intermediate (lower E_a → major product).",
        level: "HL",
      },
      {
        front: "State the reagents, conditions, electrophile, and electrophile-generation equation for nitration of benzene.",
        back: "**conc. HNO₃ + conc. H₂SO₄ at 50 °C**; electrophile is **NO₂⁺** (nitronium ion); equation: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O (or HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻).",
        level: "HL",
      },
      {
        front: "Distinguish NaBH₄ and LiAlH₄ in organic synthesis reductions.",
        back: "**NaBH₄** (aq. ethanol): milder, reduces **aldehydes & ketones only**.\n**LiAlH₄** (dry ether, then H⁺(aq)): powerful, reduces **carboxylic acids**, aldehydes, and ketones to alcohols.",
        level: "HL",
      },
      {
        front: "How is nitrobenzene reduced to phenylamine, and why are TWO stages essential?",
        back: "**Stage 1**: Sn + conc. HCl, reflux → forms protonated **C₆H₅NH₃⁺** in strong acid.\n**Stage 2**: add **NaOH(aq)** to deprotonate C₆H₅NH₃⁺ and liberate free phenylamine (C₆H₅NH₂).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Fish-hook half-arrows show 1 electron moving (homolytic fission); full curly arrows show 2 electrons moving (heterolytic fission).",
      "In free-radical substitution, UV light breaks the weak X−X bond first; propagation NEVER produces an H• radical.",
      "Every curly arrow starts at an electron pair (lone pair, negative charge, or bond) and points to an electron-deficient atom.",
      "Alkenes undergo electrophilic addition (100% atom economy); halogenoalkanes undergo nucleophilic substitution.",
      "[HL] SN2 = 1° RX, 1 step, 5-coordinate TS, rate = k[RX][Nu⁻], Walden inversion, polar aprotic solvent.",
      "[HL] SN1 = 3° RX, 2 steps, planar R₃C⁺ intermediate, rate = k[RX], racemic product, polar protic solvent.",
      "[HL] Leaving-group hydrolysis speed is ALWAYS R−I > R−Br > R−Cl > R−F (C−X bond enthalpy controls the rate).",
      "[HL] Carbocation stability 3° > 2° > 1° (+I inductive effect) explains BOTH SN1 preference and Markovnikov's major product.",
      "[HL] Benzene undergoes electrophilic substitution (NOT addition) to preserve its delocalized π electron system (~150 kJ mol⁻¹ resonance stability).",
      "[HL] 1° alcohol oxidation: K₂Cr₂O₇/H⁺ + distillation → aldehyde; excess K₂Cr₂O₇/H⁺ + reflux → carboxylic acid. Carboxylic acid reduction requires LiAlH₄ in dry ether (then H⁺(aq)), NOT NaBH₄.",
    ],
    misconceptions: [
      {
        wrong: "In the first propagation step of CH₄ + Cl₂, the chlorine radical directly replaces H to give CH₃Cl + H•.",
        right: "Cl• abstracts H to give **HCl + •CH₃**. Forming a high-energy H• radical is strongly endothermic and never occurs in the IB mechanism.",
        level: "SL",
      },
      {
        wrong: "Curly arrows point from a positive charge (δ⁺ or ⁺) toward a negative charge (δ⁻ or ⁻).",
        right: "Curly arrows ALWAYS track **electron pairs**, so they start at an electron-rich lone pair or bond and point **toward** the δ⁺ or ⁺ atom.",
        level: "SL",
      },
      {
        wrong: "Fluoroalkanes hydrolyse fastest because C−F is the most polar bond with the largest δ⁺ on carbon.",
        right: "**Iodoalkanes (R−I)** hydrolyse fastest! The C−F bond enthalpy (467 kJ mol⁻¹) is far too strong to break easily; the much weaker C−I bond (228 kJ mol⁻¹) has the lowest activation energy.",
        level: "HL",
      },
      {
        wrong: "The 5-coordinate species in SN2 is an isolable intermediate sitting in an energy well.",
        right: "It is a **transition state** at the maximum energy peak (lifetime ~10⁻¹³ s, partial dotted bonds) — only SN1 has an energy-well **carbocation intermediate**.",
        level: "HL",
      },
      {
        wrong: "Concentrated HNO₃ acts as the acid and H₂SO₄ acts as the base when generating NO₂⁺.",
        right: "H₂SO₄ is the **stronger acid** and protonates HNO₃; therefore **HNO₃ acts as a Brønsted–Lowry base** to form H₂NO₃⁺, which loses H₂O to give NO₂⁺.",
        level: "HL",
      },
      {
        wrong: "NaBH₄ can reduce carboxylic acids directly to primary alcohols.",
        right: "NaBH₄ is too mild for carboxylic acids — you MUST use **LiAlH₄ in dry ether** followed by dilute aqueous acid **H⁺(aq)**.",
        level: "HL",
      },
      {
        wrong: "Refluxing nitrobenzene with Sn and conc. HCl directly isolates neutral phenylamine (C₆H₅NH₂).",
        right: "In concentrated HCl, basic phenylamine is protonated to the **phenylammonium ion (C₆H₅NH₃⁺)**. You MUST add **NaOH(aq)** afterwards to liberate free phenylamine.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Drawing double-headed curly arrows instead of single-headed fish-hook arrows when showing homolytic cleavage in free-radical initiation.",
      "Omitting partial charges (Cδ⁺−Brδ⁻, Hδ⁺−Brδ⁻) or lone pairs on nucleophiles (`:OH⁻`) in IB Paper 2 curly-arrow mechanisms — each missing detail costs a mark!",
      "Forgetting to draw square brackets and the overall negative charge `[HO···C···Br]⁻` on the SN2 transition state (or drawing solid lines instead of dotted partial bonds).",
      "Drawing the SN1 carbocation as tetrahedral instead of **trigonal planar (120°)** — examiners require planarity to explain racemic 50:50 attack from both sides.",
      "Drawing the benzene arenium-ion horseshoe pointing the wrong way (the open end MUST face the tetrahedral sp³ carbon bonded to H and NO₂) or closing it into a full circle.",
      "Forgetting **50 °C** in benzene nitration (higher temperature gives dinitration) or forgetting **reflux vs distillation** when oxidizing primary alcohols.",
      "Writing `LiAlH₄ in water` — LiAlH₄ reacts explosively with water and MUST be used in **dry ether** followed by an **aqueous acid (H⁺(aq)) work-up**.",
      "Omitting the **NaOH(aq)** neutralization step after `Sn / conc. HCl, reflux` in the reduction of nitrobenzene to phenylamine.",
    ],
    mnemonics: [
      {
        topic: "SN1 vs SN2 Quick Profile",
        device: "SN2 = 1 step, 2 molecules, 1° RX, Inverts, Aprotic ('2-1-2-I-A'); SN1 = 2 steps, 1 molecule, 3° RX, Racemic, Protic ('1-2-1-R-P')",
        explanation: "Notice the clean flip: SN**2** happens in **1** step (molecularity 2); SN**1** happens in **2** steps (molecularity 1). Aprotic pairs with SN2; Protic pairs with SN1.",
        level: "HL",
      },
      {
        topic: "Markovnikov's Rule",
        device: "The Hydrogen-Rich Get Richer",
        explanation: "When H−X adds to an unsymmetrical alkene, H bonds to the C=C carbon that already holds more H atoms, placing the positive charge on the more substituted carbon (more +I alkyl groups).",
        level: "HL",
      },
      {
        topic: "Free-Radical Substitution Stages",
        device: "I-P-T Radical Count: 0→2, 1→1, 2→0",
        explanation: "**I**nitiation creates 2 radicals from 0; **P**ropagation keeps 1 radical going to 1; **T**ermination kills 2 radicals down to 0.",
        level: "SL",
      },
      {
        topic: "Curly Arrow Direction",
        device: "Pair to Poor (Never Plus to Minus!)",
        explanation: "Every full curly arrow starts on an electron **pair** (lone pair or bond) and points directly to an electron-**poor** atom (δ⁺ or ⁺).",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Stratospheric Ozone Depletion (CFC Free-Radical Chains)",
        detail: "UV radiation breaks C−Cl bonds in chlorofluorocarbons homolytically to release Cl• radicals. Just like alkane propagation, a single Cl• catalytically destroys tens of thousands of O₃ molecules via Cl• + O₃ → ClO• + O₂ and ClO• + O• → Cl• + O₂.",
        emoji: "🌍",
      },
      {
        title: "Chiral Drug Synthesis & Walden Inversion",
        detail: "Pharmaceutical enantiomers often have dramatically different biological activities (e.g., (S)-ibuprofen relieves pain while (R)-ibuprofen is inactive). Choosing SN2 (clean inversion) vs SN1 (racemic 50:50 mixture) determines whether a drug synthesis is stereochemically pure.",
        emoji: "💊",
      },
      {
        title: "Industrial Hydration of Ethene to Ethanol",
        detail: "Millions of tonnes of industrial ethanol for solvents and fuel additives are manufactured by electrophilic addition of steam to ethene over an H₃PO₄/SiO₂ catalyst at 300 °C and 60–70 atm — achieving 100% atom economy.",
        emoji: "🏭",
      },
      {
        title: "Paracetamol & Azo Dyes from Phenylamine",
        detail: "Benzene nitration followed by reduction to phenylamine (aniline) is the classic aromatic gateway to pharmaceuticals (paracetamol/acetaminophen), polyurethane foams, and vivid azo textile dyes.",
        emoji: "🎨",
      },
      {
        title: "Antioxidants (Vitamin E & C) as Radical Terminators",
        detail: "Free radicals formed by UV skin exposure or cellular respiration damage cell-membrane lipids via propagation chains. Antioxidants act as radical scavengers, safely terminating chains before DNA or lipid membranes degrade.",
        emoji: "🍊",
      },
    ],
    videos: [
      {
        title: "IB Chemistry R3.3 Free-Radical Substitution Mechanism",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=MSJChem+free+radical+substitution+alkanes+IB+chemistry",
      },
      {
        title: "IB Chemistry R3.4 SN1 and SN2 Nucleophilic Substitution Mechanisms",
        channel: "Richard Thornley",
        url: "https://www.youtube.com/results?search_query=Richard+Thornley+SN1+SN2+mechanism+IB+chemistry",
      },
      {
        title: "Markovnikov's Rule & Electrophilic Addition of Alkenes (IB HL)",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=MSJChem+Markovnikov+rule+electrophilic+addition+IB+chemistry",
      },
      {
        title: "Electrophilic Substitution of Benzene & Organic Synthesis Pathways (IB HL)",
        channel: "Organic Chemistry Tutor / IB Chem",
        url: "https://www.youtube.com/results?search_query=IB+chemistry+nitration+of+benzene+organic+synthesis+retrosynthesis",
      },
    ],
    formulas: [
      {
        name: "Free-Radical Initiation",
        formula: "Cl₂ —(UV)→ 2 Cl•",
        note: "Homolytic fission (0 → 2 radicals); fish-hook half-arrows; breaks weakest bond (Cl−Cl = 242 kJ mol⁻¹).",
        level: "SL",
      },
      {
        name: "Free-Radical Propagation (CH₄ + Cl₂)",
        formula: "CH₄ + Cl• → •CH₃ + HCl  ;  •CH₃ + Cl₂ → CH₃Cl + Cl•",
        note: "1 → 1 radical count; never form H•; steps sum to CH₄ + Cl₂ → CH₃Cl + HCl.",
        level: "SL",
      },
      {
        name: "Nucleophilic Substitution (Core)",
        formula: "R−X + OH⁻(aq) —(warm, reflux)→ R−OH + X⁻",
        note: "Heterolytic fission of polar Cδ⁺−Xδ⁻ bond; OH⁻ donates lone pair.",
        level: "SL",
      },
      {
        name: "Electrophilic Addition (Alkene Hydration)",
        formula: "CₙH₂ₙ + H₂O(g) —(H₃PO₄, 300 °C, 60 atm)→ CₙH₂ₙ₊₁OH",
        note: "100% atom economy; Br₂(aq) decolourizes rapidly in dark as unsaturation test.",
        level: "SL",
      },
      {
        name: "SN2 Rate Law (1° Halogenoalkane)",
        formula: "rate = k[RX][Nu⁻]",
        note: "2nd order overall; 1 concerted step, 5-coordinate TS, Walden inversion, polar aprotic solvent.",
        level: "HL",
      },
      {
        name: "SN1 Rate Law (3° Halogenoalkane)",
        formula: "rate = k[RX]",
        note: "1st order overall (zero order in Nu⁻); 2 steps via planar R₃C⁺, racemic 50:50, polar protic solvent.",
        level: "HL",
      },
      {
        name: "Halogenoalkane Reactivity Trend",
        formula: "R−I > R−Br > R−Cl > R−F",
        note: "Controlled by C−X bond enthalpy (C−I weakest at 228 kJ mol⁻¹), valid for BOTH SN1 and SN2.",
        level: "HL",
      },
      {
        name: "Carbocation Stability Order",
        formula: "3° (R₃C⁺) > 2° (R₂CH⁺) > 1° (RCH₂⁺) > CH₃⁺",
        note: "Positive inductive effect (+I) of alkyl groups disperses positive charge; drives SN1 & Markovnikov's rule.",
        level: "HL",
      },
      {
        name: "Nitronium Electrophile Generation",
        formula: "HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O",
        note: "conc. HNO₃ + conc. H₂SO₄ at 50 °C; H₂SO₄ is stronger acid (catalyst), HNO₃ acts as base.",
        level: "HL",
      },
      {
        name: "1° Alcohol Oxidation Control",
        formula: "RCH₂OH —(K₂Cr₂O₇/H⁺, distil)→ RCHO  |  (excess, reflux)→ RCOOH",
        note: "Orange Cr₂O₇²⁻ → green Cr³⁺; 2° alcohol → ketone (reflux); 3° alcohol unreactive.",
        level: "HL",
      },
      {
        name: "Carbonyl & Carboxylic Acid Reduction",
        formula: "Aldehyde/Ketone: NaBH₄(aq/EtOH)  |  RCOOH: LiAlH₄(dry ether), then H⁺(aq)",
        note: "NaBH₄ cannot reduce carboxylic acids; LiAlH₄ reacts violently with water.",
        level: "HL",
      },
      {
        name: "Nitrobenzene to Phenylamine",
        formula: "C₆H₅NO₂ —(1. Sn/conc. HCl reflux; 2. NaOH(aq))→ C₆H₅NH₂",
        note: "Stage 1 yields C₆H₅NH₃⁺ in strong acid; Stage 2 NaOH(aq) deprotonates to free phenylamine.",
        level: "HL",
      },
    ],
  },
};
