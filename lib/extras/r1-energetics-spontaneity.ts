import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Every diamond on Earth is thermodynamically destined to crumble into ordinary pencil graphite (`ΔG⊖ = −2.9 kJ mol⁻¹`) — yet your jeweller never worries! Meanwhile, an instant sports cold pack freezes your hand *spontaneously* even though it climbs uphill in enthalpy. Reactivity 1 reveals the twin engines of chemistry: **enthalpy (H)** and **entropy (S)**.",

  didYouKnow: [
    "[SL] **Coffee-cup sign trap:** When a thermometer rises during neutralisation, the *surroundings* gained heat — meaning the chemical *system* lost enthalpy (`ΔH < 0`, exothermic).",
    "[SL] **Bond breaking is ALWAYS endothermic:** Even in high-energy fuels like petrol or glucose, breaking reactant bonds absorbs energy; heat is only released when **stronger product bonds** (`C=O` and `O−H`) form.",
    "[SL] **Hydrogen's paradox:** Liquid/gaseous `H₂` delivers ~142 kJ g⁻¹ (~3× jet fuel's specific energy), making it a dream for rockets — yet at room pressure it packs tiny volumetric energy density, forcing fuel-cell vehicles to store H₂ at 700 atmospheres (70 MPa)!",
    "[SL] **Why burning natural gas emits less CO₂ per kJ than coal:** Methane (`CH₄`) has a 4 : 1 H : C ratio, so a large fraction of its combustion heat comes from forming `H₂O` rather than `CO₂`.",
    "[SL] **Weak acid neutralisation dip:** Neutralising ethanoic acid (`CH₃COOH`) with `NaOH` releases ~−55.2 kJ mol⁻¹ instead of −57.3 kJ mol⁻¹ because ~+2.1 kJ mol⁻¹ is absorbed to dissociate the unionised `O−H` bond.",
    "[SL] **Benzene's hidden 152 kJ mol⁻¹ shield:** Experimental hydrogenation of benzene (`−208 kJ mol⁻¹`) is 152 kJ mol⁻¹ less exothermic than three isolated `C=C` bonds (`−360 kJ mol⁻¹`), directly measuring π-electron delocalisation stability!",
    "[HL] **IB lattice enthalpy sign:** The IB Data Booklet defines `ΔH_lat⊖` as **endothermic dissociation** (`MX(s) → M⁺(g) + X⁻(g)`, always `+`), whereas many university books define lattice *formation* (`−`). Always check the arrow!",
    "[HL] **Why O²⁻ cannot survive alone in empty space:** Adding a second electron to `O⁻(g)` costs `+753 kJ mol⁻¹` (`EA₂ > 0`) due to electrostatic repulsion — oxide ions only exist stably inside solids like `MgO` because the massive `+3791 kJ mol⁻¹` lattice enthalpy pays the bill!",
    "[HL] **Covalent character detector:** When a salt's Born–Haber experimental `ΔH_lat⊖` far exceeds the pure point-charge electrostatic model (like `AgI`, +889 vs +808 kJ mol⁻¹), it exposes cation polarisation of a large, soft anion cloud.",
    "[HL] **Anhydrous vs hydrated CuSO₄:** White anhydrous `CuSO₄(s)` heats water strongly when dissolved (`ΔH_sol = −66.5 kJ mol⁻¹`), while blue `CuSO₄·5H₂O(s)` cools water slightly (`+11.7 kJ mol⁻¹`) because its `Cu²⁺` ions are already pre-hydrated!",
    "[HL] **Elements have NON-ZERO entropy:** `ΔH_f⊖[O₂(g)] = 0` and `ΔG_f⊖[O₂(g)] = 0`, yet `S⊖[O₂(g)] = +205 J K⁻¹ mol⁻¹`! Only a perfect crystal at absolute zero (`0 K`) has `S = 0`.",
    "[HL] **The #1 HL Paper 2 calculation save:** In `ΔG = ΔH − TΔS`, `ΔH` is in **kJ mol⁻¹** while `ΔS` is in **J K⁻¹ mol⁻¹** — divide `ΔS` by **1000** and convert `T` to **Kelvin** (`°C + 273`) every single time!",
  ],

  activities: [
    {
      title: "Kitchen Coffee-Cup Cooling Curve & Back-Extrapolation",
      emoji: "🌡️",
      materials: [
        "2 nested polystyrene/insulated cups + lid",
        "Digital thermometer (±0.1 °C) & stopwatch",
        "100 cm³ tap water & 10 g table salt or baking soda + vinegar",
      ],
      steps: [
        "Pour 100 cm³ of water (or vinegar) into the nested cup and record temperature every 30 s for 3 minutes to establish a flat baseline.",
        "At exactly t = 3.0 min, stir in the solid quickly and continue recording temperature every 30 s until t = 10.0 min.",
        "Plot T against t, draw a straight best-fit line through the steady post-reaction drift (minutes 5–10), and extend it backwards to t = 3.0 min.",
        "Compare the raw peak |ΔT| with your back-extrapolated |ΔT| to see how much heat escaped during mixing.",
      ],
      maths: "{{q = m c ΔT}}, with c = 4.18 J g⁻¹ K⁻¹ and {{ΔH = -q / (1000 * n)}} (in kJ mol⁻¹)",
    },
    {
      title: "Compare Fuel Labels: Specific Energy vs Energy Density",
      emoji: "⛽",
      materials: [
        "IB Chemistry Data Booklet Section 14 (ΔH_c⊖ values)",
        "Calculator",
        "Molar masses & liquid densities of H₂(g), CH₄(g), CH₃OH(l), C₂H₅OH(l), and C₈H₁₈(l)",
      ],
      steps: [
        "Calculate the specific energy (|ΔH_c⊖| / M in kJ g⁻¹) for hydrogen, methane, methanol, ethanol, and octane.",
        "Multiply specific energy by density ρ (g cm⁻³) for the three liquids (methanol 0.792, ethanol 0.789, octane 0.703) to find volumetric energy density in kJ cm⁻³.",
        "Rank the five fuels first for a **space rocket** (mass-limited) and then for a **compact car tank** (volume-limited).",
      ],
      maths: "{{Specific energy = |ΔH_c| / M}}  and  {{Energy density = (|ΔH_c| / M) * ρ}}",
    },
    {
      title: "Cold Pack vs Hand Warmer Spontaneity Audit [HL]",
      emoji: "🧊",
      materials: [
        "Instant cold pack (NH₄NO₃ or urea) or sodium ethanoate hand warmer (observation only)",
        "Data table of ΔH_sol⊖ and ΔS_sol⊖",
      ],
      steps: [
        "For NH₄NO₃(s) dissolving in water: ΔH_sol⊖ = +25.7 kJ mol⁻¹ and ΔS_sol⊖ = +108.7 J K⁻¹ mol⁻¹.",
        "Evaluate ΔG_sol⊖ = ΔH_sol⊖ − TΔS_sol⊖ at 298 K (remember ÷ 1000 for ΔS!).",
        "Find the theoretical freezing-out crossover temperature T* = ΔH_sol⊖ / ΔS_sol⊖ where dissolving ceases to be spontaneous.",
      ],
      maths: "{{ΔG = 25.7 - 298 * 0.1087 = -6.7}} kJ mol⁻¹ (spontaneous!), {{T = 25.7 / 0.1087 = 236}} K",
    },
  ],

  bonusDiagrams: [
    {
      title: "Master Sign & Arrow Cheat Sheet for All Four IB Enthalpy Cycles",
      caption:
        "Never mix up Products − Reactants vs Reactants − Products again: look at whether the cycle arrows point UP into the main equation or DOWN out of it.",
      svg:
        `<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-column cheat sheet summarizing arrow directions and formulas for Formation, Combustion, Bond Enthalpy, and Solution cycles" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="660" height="220" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<rect x="14" y="16" width="150" height="188" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.4"/>` +
        `<text x="89" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">Formation (ΔH_f⊖)</text>` +
        `<text x="89" y="56" text-anchor="middle" font-size="10.5" fill="#1d4ed8">Arrows UP ↑</text>` +
        `<text x="89" y="72" text-anchor="middle" font-size="10" fill="#475569">from Elements</text>` +
        `<text x="89" y="114" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">ΣP − ΣR</text>` +
        `<text x="89" y="142" text-anchor="middle" font-size="9.5" fill="#334155">Elements in std.</text>` +
        `<text x="89" y="156" text-anchor="middle" font-size="9.5" fill="#334155">state = 0 kJ mol⁻¹</text>` +
        `<text x="89" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e40af">SL &amp; HL</text>` +
        `<rect x="176" y="16" width="150" height="188" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.4"/>` +
        `<text x="251" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">Combustion (ΔH_c⊖)</text>` +
        `<text x="251" y="56" text-anchor="middle" font-size="10.5" fill="#b91c1c">Arrows DOWN ↓</text>` +
        `<text x="251" y="72" text-anchor="middle" font-size="10" fill="#475569">to CO₂ + H₂O</text>` +
        `<text x="251" y="114" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">ΣR − ΣP</text>` +
        `<text x="251" y="142" text-anchor="middle" font-size="9.5" fill="#334155">O₂(g), CO₂, H₂O</text>` +
        `<text x="251" y="156" text-anchor="middle" font-size="9.5" fill="#334155">do not burn (= 0)</text>` +
        `<text x="251" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="#991b1b">SL &amp; HL</text>` +
        `<rect x="338" y="16" width="150" height="188" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="1.4"/>` +
        `<text x="413" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#854d0e">Bond Enthalpies</text>` +
        `<text x="413" y="56" text-anchor="middle" font-size="10.5" fill="#a16207">Arrows UP to Atoms</text>` +
        `<text x="413" y="72" text-anchor="middle" font-size="10" fill="#475569">Gases ONLY</text>` +
        `<text x="413" y="114" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">ΣBroken − ΣFormed</text>` +
        `<text x="413" y="142" text-anchor="middle" font-size="9.5" fill="#334155">Same order as</text>` +
        `<text x="413" y="156" text-anchor="middle" font-size="9.5" fill="#334155">Reactants − Products</text>` +
        `<text x="413" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="#854d0e">SL &amp; HL</text>` +
        `<rect x="500" y="16" width="146" height="188" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.4"/>` +
        `<text x="573" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">Solution (ΔH_sol⊖)</text>` +
        `<text x="573" y="56" text-anchor="middle" font-size="10.5" fill="#047857">Solid → Gas Ions → aq</text>` +
        `<text x="573" y="72" text-anchor="middle" font-size="10" fill="#475569">IB: ΔH_lat⊖ &gt; 0</text>` +
        `<text x="573" y="114" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">ΔH_lat + ΣΔH_hyd</text>` +
        `<text x="573" y="142" text-anchor="middle" font-size="9.5" fill="#334155">Double ΔH_hyd(X⁻)</text>` +
        `<text x="573" y="156" text-anchor="middle" font-size="9.5" fill="#334155">for MX₂ salts!</text>` +
        `<text x="573" y="188" text-anchor="middle" font-size="9.5" font-weight="700" fill="#065f46">HL ONLY</text>` +
        `</svg>`,
    },
    {
      title: "The 4-Quadrant Gibbs Spontaneity Matrix [HL]",
      caption:
        "Check the signs of ΔH⊖ and ΔS⊖ first: opposite signs never flip with temperature; matching signs always have a crossover temperature T* = ΔH⊖ / ΔS⊖.",
      svg:
        `<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2 by 2 grid summarizing Gibbs spontaneity across all four sign combinations of delta H and delta S" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="640" height="215" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<text x="235" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">ΔS⊖ &gt; 0 (More disorder)</text>` +
        `<text x="490" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">ΔS⊖ &lt; 0 (Less disorder)</text>` +
        `<text x="56" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#047857">ΔH⊖ &lt; 0</text>` +
        `<text x="56" y="98" text-anchor="middle" font-size="10" fill="#475569">(Exothermic)</text>` +
        `<text x="56" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="#b91c1c">ΔH⊖ &gt; 0</text>` +
        `<text x="56" y="178" text-anchor="middle" font-size="10" fill="#475569">(Endothermic)</text>` +
        `<rect x="112" y="40" width="246" height="76" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="1.6"/>` +
        `<text x="235" y="66" text-anchor="middle" font-size="12.5" font-weight="700" fill="#065f46">ALWAYS Spontaneous</text>` +
        `<text x="235" y="85" text-anchor="middle" font-size="10.5" fill="#064e3b">ΔG &lt; 0 at ALL temperatures</text>` +
        `<text x="235" y="102" text-anchor="middle" font-size="10" fill="#047857">e.g. 2H₂O₂(l) → 2H₂O(l) + O₂(g)</text>` +
        `<rect x="372" y="40" width="246" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>` +
        `<text x="495" y="66" text-anchor="middle" font-size="12.5" font-weight="700" fill="#92400e">Spontaneous at LOW T</text>` +
        `<text x="495" y="85" text-anchor="middle" font-size="10.5" fill="#78350f">ΔG &lt; 0 when T &lt; ΔH/ΔS</text>` +
        `<text x="495" y="102" text-anchor="middle" font-size="10" fill="#b45309">e.g. N₂(g) + 3H₂(g) → 2NH₃(g)</text>` +
        `<rect x="112" y="126" width="246" height="76" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>` +
        `<text x="235" y="152" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1e3a8a">Spontaneous at HIGH T</text>` +
        `<text x="235" y="171" text-anchor="middle" font-size="10.5" fill="#1e40af">ΔG &lt; 0 when T &gt; ΔH/ΔS</text>` +
        `<text x="235" y="188" text-anchor="middle" font-size="10" fill="#1d4ed8">e.g. CaCO₃(s) → CaO(s) + CO₂(g)</text>` +
        `<rect x="372" y="126" width="246" height="76" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>` +
        `<text x="495" y="152" text-anchor="middle" font-size="12.5" font-weight="700" fill="#991b1b">NEVER Spontaneous</text>` +
        `<text x="495" y="171" text-anchor="middle" font-size="10.5" fill="#7f1d1d">ΔG &gt; 0 at ALL temperatures</text>` +
        `<text x="495" y="188" text-anchor="middle" font-size="10" fill="#b91c1c">e.g. 3O₂(g) → 2O₃(g)</text>` +
        `</svg>`,
    },
  ],

  history: {
    title: "From St Petersburg Calorimeters to Yale's Quiet Revolution: Hess, Born–Haber & Gibbs",
    story:
      "In 1840, Swiss-born Russian chemist **Germain Henri Hess** measured heat released when sulfuric acid reacted with water in one step versus several smaller steps — and discovered the total heat was identical regardless of the route. Remarkable because he published his law *before* physicists had even established conservation of energy!\n\n" +
      "Three decades later, in a quiet Connecticut study at Yale, mathematical physicist **Josiah Willard Gibbs** published *On the Equilibrium of Heterogeneous Substances* (1876–1878) in an obscure local journal so dense few chemists could read it at first. Yet buried inside was the single equation `ΔG = ΔH − TΔS` that solved chemistry's deepest riddle: why endothermic changes like melting ice and dissolving salts still happen spontaneously. James Clerk Maxwell was so awestruck he built a 3D plaster model of Gibbs's thermodynamic surface by hand and mailed it across the Atlantic!\n\n" +
      "Finally, in 1919, physicist **Max Born** and chemist **Fritz Haber** turned Hess's Law into a precision scalpel for ionic crystals — linking X-ray crystal radii, atomic spectra, and calorimetry to calculate lattice enthalpies no laboratory could directly measure, and revealing when supposedly 'ionic' salts secretly harbour covalent bonds.",
  },
};
