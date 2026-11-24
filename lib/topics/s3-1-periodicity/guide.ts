import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "s3-1-periodicity",
  title: "Structure 3.1: The Periodic Table — Classification of Elements",
  strand: "Structure 3: Classification & Organic",
  icon: "📊",
  level: "SL",
  summary:
    "Explain periodic and group trends from effective nuclear charge, predict Period 3 oxide acid–base chemistry and oxidation states, and master HL transition-metal complexes and crystal-field colour.",
  intro:
    "The periodic table is not a wall chart to memorize — it is a quantitative map of electrostatic forces. Once you track two competing quantities — **nuclear charge (`Z`)** pulling valence electrons inward and **inner-shell shielding (`S`)** pushing them outward — every trend in atomic radius, ionic radius, ionization energy, electronegativity, and Period 3 oxide acidity falls into place. At HL, those same electrostatic ideas explain why `3d` transition metals form coloured, catalytic, paramagnetic complex ions whose colours shift when you swap a single ligand.",
  guide: [
    // =========================================================================
    // SECTION 1: Effective Nuclear Charge & Periodic Trends [SL]
    // =========================================================================
    {
      id: "periodic-trends-nuclear-charge",
      heading: "S3.1 Effective Nuclear Charge & Periodic Trends",
      level: "SL",
      discovery: {
        problem:
          "Sodium (`Na`, `Z = 11`) and chlorine (`Cl`, `Z = 17`) sit in the same period, so both have valence electrons in the `n = 3` shell. Chlorine has **6 more protons** and **6 more electrons** than sodium. Before reading on: do you expect a chlorine atom to be **larger** (more particles!) or **smaller** than a sodium atom? And why does first ionization energy dip slightly from `Mg` to `Al`, and again from `P` to `S`?",
        idea:
          "Electrons added across a period enter the **same principal energy level (`n = 3`)**, so inner-shell shielding (`1s² 2s² 2p⁶`, 10 core electrons) stays almost constant while nuclear charge jumps from `+11` to `+17`. That stronger net pull (**effective nuclear charge**, `Z_eff`) pulls the `n = 3` shell dramatically closer — shrinking chlorine to `100 pm` versus sodium's `160 pm`! The tiny dips in `IE₁` at `Al` (`3p¹`) and `S` (`3p⁴`) reveal sublevel structure and spin–pair repulsion inside the `n = 3` shell.",
      },
      body: [
        "The periodic table organizes elements by **increasing atomic number (`Z`)** into four orbital blocks (**s**, **p**, **d**, **f**), horizontal **periods** (equal to the highest occupied principal energy level `n`), and vertical **groups** (elements with the same valence electron configuration and therefore similar chemical reactivity).",
        "",
        "### Effective Nuclear Charge (`Z_eff`) and Shielding",
        "A valence electron does not feel the full nuclear charge `+Z`. Inner-shell (core) electrons sit between the nucleus and the valence shell and repel the valence electron, **shielding** it from the nucleus:",
        "",
        "{{Z_eff ≈ Z - S}}",
        "",
        "where `Z` is the number of protons and `S` is the approximate number of inner-shell core electrons.",
        "- **Across a period (left → right):** `Z` increases by `+1` per element, while electrons enter the **same main energy level**, so inner-shell shielding `S` stays nearly constant. Therefore **`Z_eff` increases steadily**, pulling valence electrons closer and holding them more tightly.",
        "- **Down a group (top → bottom):** A new principal energy level (`n`) is added at each step. Both atomic distance and core-electron shielding increase markedly, so valence electrons experience a **weaker electrostatic attraction** to the nucleus despite larger `Z`.",
        "",
        "### Summary of Core Periodic Trends (Period 3: Na → Ar)",
        "",
        "| Element | `Z` | Config (`[Ne]…`) | Covalent radius (pm) | Common ion & radius (pm) | `IE₁` (kJ mol⁻¹) | Pauling `χ` |",
        "|---|---|---|---|---|---|---|",
        "| Na | 11 | `3s¹` | 160 | `Na⁺` (102) | 496 | 0.9 |",
        "| Mg | 12 | `3s²` | 140 | `Mg²⁺` (72) | 738 | 1.3 |",
        "| Al | 13 | `3s² 3p¹` | 124 | `Al³⁺` (54) | 578 | 1.6 |",
        "| Si | 14 | `3s² 3p²` | 114 | `Si⁴⁺` (40) | 787 | 1.9 |",
        "| P | 15 | `3s² 3p³` | 109 | `P³⁻` (212) | 1012 | 2.2 |",
        "| S | 16 | `3s² 3p⁴` | 104 | `S²⁻` (184) | 1000 | 2.6 |",
        "| Cl | 17 | `3s² 3p⁵` | 100 | `Cl⁻` (181) | 1251 | 3.2 |",
        "| Ar | 18 | `3s² 3p⁶` | — (no covalent bond) | — | 1521 | — |",
        "",
        "### Five Essential Trends to Explain with Electrostatic Language",
        "1. **Atomic radius:** Decreases across a period (increasing `Z_eff`, same shell) and increases down a group (more occupied shells, greater shielding). Noble gases lack covalent radii because they do not normally form covalent bonds.",
        "2. **Ionic radius & isoelectronic series:**",
        "   - **Cations are smaller than their parent atoms** because losing the entire valence shell removes one energy level, and the remaining electrons experience a higher proton-to-electron ratio (`Na` `160 pm` → `Na⁺` `102 pm`).",
        "   - **Anions are larger than their parent atoms** because added electrons increase inter-electronic repulsion in the valence shell while `Z` stays unchanged (`Cl` `100 pm` → `Cl⁻` `181 pm`).",
        "   - Across Period 3 ions, radius falls from `Na⁺` (`102 pm`) to `Al³⁺` (`54 pm`), then **jumps sharply** at `P³⁻` (`212 pm`, which has three occupied shells instead of two), before decreasing again from `P³⁻` to `Cl⁻` (`181 pm`).",
        "   - In any **isoelectronic series** (identical electron count, e.g., `N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺` all have `10 e⁻`), **higher nuclear charge (`Z`) = smaller ionic radius**.",
        "3. **First ionization energy (`IE₁`):** Energy required to remove 1 mole of electrons from 1 mole of gaseous atoms: `X(g) → X⁺(g) + e⁻`. Generally increases across a period (higher `Z_eff`, smaller radius) and decreases down a group (larger radius, more shielding).",
        "   - **Group 2 → 13 dip (`Be → B`, `Mg → Al`):** The outermost electron enters a `p` sublevel (`2p¹`/`3p¹`), which is slightly higher in energy and partially shielded by the filled `s²` sublevel, so it takes less energy to remove.",
        "   - **Group 15 → 16 dip (`N → O`, `P → S`):** The fourth `p` electron (`p⁴`) must pair up in an already singly occupied `p` orbital; **spin–pair electron repulsion** makes it slightly easier to remove than an unpaired electron from a half-filled `p³` sublevel.",
        "4. **Electron affinity (`EA₁`):** Enthalpy change when 1 mole of gaseous atoms gains 1 mole of electrons: `X(g) + e⁻ → X⁻(g)`. Generally becomes **more exothermic** (more negative) across a period as `Z_eff` increases. **Key exception:** `EA₁` of fluorine (`−328 kJ mol⁻¹`) is *less* exothermic than chlorine (`−349 kJ mol⁻¹`) because fluorine's compact `2p` shell causes strong electron–electron repulsion against the incoming electron. Second electron affinity (`O⁻(g) + e⁻ → O²⁻(g)`) is always **endothermic** due to repulsion between a negative ion and an incoming negative electron.",
        "5. **Electronegativity (`χ`) & metallic character:** Electronegativity (ability of an atom in a covalent bond to attract a shared pair of electrons) increases across a period and decreases down a group (peaking at `F = 4.0`). **Metallic character** follows the opposite pattern: strongest at the bottom-left (`Cs`, low `IE₁`, loses `e⁻` easily) and weakest at the top-right (`F`, high `χ`, gains `e⁻` easily).",
      ].join("\n"),
      diagram: `<svg viewBox="0 0 600 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Period 3 trends showing atomic radius shrinking from Na to Cl and first ionization energy rising with dips at Al and S">
  <rect x="0" y="0" width="600" height="285" rx="12" fill="#f8fafc"/>
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Period 3: Atomic Radius Contraction vs First Ionization Energy</text>
  <!-- Left panel: Atomic Radius -->
  <rect x="16" y="38" width="270" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="151" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#0f766e">Covalent Radius (pm) — Z_eff ↑, Radius ↓</text>
  <g font-size="10" fill="#334155" text-anchor="middle">
    <circle cx="52" cy="128" r="26" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/><text x="52" y="126" font-weight="700">Na</text><text x="52" y="139" font-size="9">160</text>
    <circle cx="110" cy="128" r="22.8" fill="#a7f3d0" stroke="#059669" stroke-width="2"/><text x="110" y="126" font-weight="700">Mg</text><text x="110" y="139" font-size="9">140</text>
    <circle cx="160" cy="128" r="20.2" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="160" y="126" font-weight="700">Al</text><text x="160" y="139" font-size="9">124</text>
    <circle cx="204" cy="128" r="18.5" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/><text x="204" y="126" font-weight="700">Si</text><text x="204" y="139" font-size="9">114</text>
    <circle cx="244" cy="128" r="16.2" fill="#fde68a" stroke="#d97706" stroke-width="2"/><text x="244" y="126" font-weight="700">Cl</text><text x="244" y="139" font-size="9">100</text>
  </g>
  <line x1="42" y1="180" x2="256" y2="180" stroke="#0f766e" stroke-width="2"/>
  <polygon points="256,175 266,180 256,185" fill="#0f766e"/>
  <text x="151" y="198" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">Same shell (n = 3), core shielding ≈ 10</text>
  <text x="151" y="214" text-anchor="middle" font-size="10" fill="#475569">Z increases +11 → +17 ⇒ stronger nuclear pull</text>
  <rect x="30" y="226" width="242" height="32" rx="6" fill="#f0fdfa" stroke="#99f6e4"/>
  <text x="151" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#115e59">Isoelectronic 10 e⁻ ionic radii (pm):</text>
  <text x="151" y="253" text-anchor="middle" font-size="9.5" fill="#134e4a">N³⁻(146) &gt; O²⁻(140) &gt; F⁻(133) &gt; Na⁺(102) &gt; Mg²⁺(72) &gt; Al³⁺(54)</text>
  <!-- Right panel: First Ionization Energy -->
  <rect x="302" y="38" width="282" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="443" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">First Ionization Energy IE₁ (kJ mol⁻¹)</text>
  <line x1="338" y1="74" x2="338" y2="232" stroke="#64748b" stroke-width="1.5"/>
  <line x1="338" y1="232" x2="568" y2="232" stroke="#64748b" stroke-width="1.5"/>
  <g font-size="9" fill="#64748b" text-anchor="end">
    <text x="333" y="84">1600</text><text x="333" y="122">1200</text><text x="333" y="160">800</text><text x="333" y="198">400</text>
  </g>
  <g stroke="#e2e8f0" stroke-width="1">
    <line x1="338" y1="80" x2="568" y2="80"/><line x1="338" y1="118" x2="568" y2="118"/>
    <line x1="338" y1="156" x2="568" y2="156"/><line x1="338" y1="194" x2="568" y2="194"/>
  </g>
  <!-- Plot points: y = 232 - (IE/1600)*152 => Na 496->184.9, Mg 738->161.9, Al 578->177.1, Si 787->157.2, P 1012->135.9, S 1000->137.0, Cl 1251->113.2, Ar 1521->87.5 -->
  <polyline fill="none" stroke="#2563eb" stroke-width="2.5" points="354,185 384,162 414,177 444,157 474,136 504,137 534,113 560,88"/>
  <g fill="#2563eb">
    <circle cx="354" cy="185" r="4"/><circle cx="384" cy="162" r="4"/><circle cx="444" cy="157" r="4"/>
    <circle cx="474" cy="136" r="4"/><circle cx="534" cy="113" r="4"/><circle cx="560" cy="88" r="4"/>
  </g>
  <circle cx="414" cy="177" r="5" fill="#dc2626"/><circle cx="504" cy="137" r="5" fill="#dc2626"/>
  <text x="414" y="201" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">3p¹ dip</text>
  <text x="506" y="160" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">3p⁴ pair</text>
  <text x="506" y="170" text-anchor="middle" font-size="8.5" fill="#dc2626">repulsion</text>
  <g font-size="9.5" font-weight="700" fill="#1e293b" text-anchor="middle">
    <text x="354" y="246">Na</text><text x="384" y="246">Mg</text><text x="414" y="246" fill="#dc2626">Al</text><text x="444" y="246">Si</text>
    <text x="474" y="246">P</text><text x="504" y="246" fill="#dc2626">S</text><text x="534" y="246">Cl</text><text x="560" y="246">Ar</text>
  </g>
  <text x="453" y="262" text-anchor="middle" font-size="9.5" fill="#475569">General rise across Period 3 with sublevel anomalies</text>
</svg>`,
      diagramCaption:
        "Across Period 3, rising effective nuclear charge contracts atomic radius while generally increasing first ionization energy — interrupted only by the 3p¹ sublevel jump at Al and 3p⁴ spin–pair repulsion at S.",
      workedExamples: [
        {
          title: "Explaining an Isoelectronic Radius Order",
          problem:
            "Arrange the ions `Mg²⁺`, `O²⁻`, `F⁻`, and `Na⁺` in order of **increasing** ionic radius and justify the order.",
          steps: [
            "Count electrons in every ion: `O²⁻` (`8 + 2 = 10`), `F⁻` (`9 + 1 = 10`), `Na⁺` (`11 − 1 = 10`), `Mg²⁺` (`12 − 2 = 10`). All four are **isoelectronic** (`1s² 2s² 2p⁶`).",
            "Because electron configuration and shielding are identical across all four ions, only **nuclear charge (`Z`)** distinguishes them: `Mg²⁺` (`+12`) > `Na⁺` (`+11`) > `F⁻` (`+9`) > `O²⁻` (`+8`).",
            "The highest nuclear charge attracts the 10 electrons most strongly, producing the smallest radius.",
          ],
          answer: "`Mg²⁺ < Na⁺ < F⁻ < O²⁻` (increasing ionic radius as nuclear charge decreases).",
          yourTurn: {
            question:
              "In the isoelectronic series `N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺`, what is the nuclear charge (number of protons) of the **smallest** ion?",
            answer: { type: "number", value: 13, display: "13" },
            solution:
              "All six ions have 10 electrons (`1s² 2s² 2p⁶`). The smallest ion has the greatest nuclear charge pulling those 10 electrons inward: `Al³⁺`, which has `Z = 13` protons.",
          },
        },
        {
          title: "Accounting for a First Ionization Energy Anomaly",
          problem:
            "Explain why the first ionization energy of sulfur (`1000 kJ mol⁻¹`) is lower than that of phosphorus (`1012 kJ mol⁻¹`), even though sulfur has a higher nuclear charge.",
          steps: [
            "Write valence orbital configurations: `P` is `[Ne] 3s² 3p³` (three unpaired electrons, one in each `3p` orbital: `↑  ↑  ↑`); `S` is `[Ne] 3s² 3p⁴` (one doubly occupied `3p` orbital: `↑↓  ↑  ↑`).",
            "In sulfur, the electron being removed comes from a **paired** `3p` orbital.",
            "Extra **electron–electron (spin–pair) repulsion** between the two electrons sharing the same `3p` orbital outweighs the `+1` increase in nuclear charge, reducing the energy needed to remove that electron.",
          ],
          answer:
            "Sulfur loses a paired `3p` electron experiencing spin–pair repulsion, whereas phosphorus loses an unpaired `3p` electron; this repulsion lowers `IE₁(S)` slightly below `IE₁(P)`.",
          yourTurn: {
            question:
              "Which Period 2 element has a LOWER first ionization energy than beryllium (`Be`), despite having one more proton? Type its chemical symbol.",
            answer: { type: "text", accept: ["B", "boron"], display: "B" },
            solution:
              "Boron (`B`, `1s² 2s² 2p¹`) has a lower `IE₁` (`801 kJ mol⁻¹`) than beryllium (`Be`, `1s² 2s²`, `900 kJ mol⁻¹`) because its outermost electron is in the higher-energy `2p` sublevel and partially shielded by the filled `2s²` sublevel.",
          },
        },
      ],
      keyPoints: [
        "Always anchor IB trend explanations in three variables: **nuclear charge (`Z`)**, **number of occupied energy levels / distance**, and **inner-shell shielding (`S`)**.",
        "Across a period: `Z` increases, same main shell, shielding stays nearly constant → `Z_eff` increases → smaller radius, higher `IE₁`, higher `χ`.",
        "Down a group: new main shell added, distance and shielding increase → weaker valence attraction → larger radius, lower `IE₁`, lower `χ`.",
        "Two classic `IE₁` dips across Periods 2 & 3: **Group 2 → 13** (`p¹` sublevel higher energy + `s²` shielding) and **Group 15 → 16** (`p⁴` spin–pair repulsion).",
      ],
      whyItWorks:
        "Coulomb's law tells us electrostatic attraction scales as {{F ∝ (Z_eff * e) / r^2}}. Adding protons inside the same shell boosts the numerator `Z_eff`, shrinking `r` and amplifying attraction even further. Moving down a group jumps to a larger principal shell `n`, rapidly increasing `r` (squared in the denominator!) and core shielding — overpowering the larger `Z`.",
      strategies: [
        "For any IB 'Explain the trend in…' prompt, write a 3-clause chain: **nuclear charge & shielding → strength of electrostatic attraction on valence/shared electrons → property change**.",
        "When comparing two ions, **always check their electron counts first**. If they are isoelectronic, cite nuclear charge (`Z`); if they differ by a full shell (like `Al³⁺` vs `P³⁻`), cite the extra energy level first!",
      ],
      thinkDeeper:
        "Why does atomic radius shrink dramatically from `Li` to `F` across Period 2, yet stay almost flat across the first-row `3d` transition metals (`Sc` to `Zn`)? Because added `3d` electrons enter an *inner* shell (`n = 3`) rather than the outer `4s` shell, so each extra `3d` electron partially shields the `+1` added proton — keeping `Z_eff` felt by the `4s` valence electrons nearly constant!",
    },

    // =========================================================================
    // SECTION 2: Group 1/17 Trends, Period 3 Oxides & Oxidation States [SL]
    // =========================================================================
    {
      id: "group-trends-period3-oxides",
      heading: "S3.1 Group 1/17 Trends, Period 3 Oxides & Oxidation States",
      level: "SL",
      discovery: {
        problem:
          "Drop a piece of potassium into water and it bursts into lilac flame; drop sodium and it fizzes vigorously. Yet when you bubble chlorine gas into potassium iodide solution, chlorine steals electrons from iodide — whereas iodine cannot displace bromide! Why does reactivity **increase** down Group 1 but **decrease** down Group 17?",
        idea:
          "Metals and non-metals react in opposite electronic directions! Group 1 metals react by **losing** a valence electron (`M → M⁺ + e⁻`), which gets easier down the group as atomic radius and shielding increase (`IE₁` drops). Group 17 halogens react by **gaining** an electron (`X₂ + 2e⁻ → 2X⁻`), which gets *harder* down the group as larger radius and shielding weaken the nucleus's pull on an incoming electron!",
      },
      body: [
        "### Group 1 (Alkali Metals) & Group 17 (Halogens)",
        "- **Group 1 with water:** `2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g)` (ionic: `2M(s) + 2H₂O(l) → 2M⁺(aq) + 2OH⁻(aq) + H₂(g)`). Produces an alkaline solution (`pH 12–14`) and hydrogen gas. Reactivity increases `Li < Na < K < Rb < Cs` as `IE₁` decreases down the group. Melting point *decreases* down Group 1 because larger `M⁺` cations weaken metallic bonding.",
        "- **Group 17 physical & chemical trends:**",
        "  - At 298 K: `F₂` (pale yellow gas) → `Cl₂` (pale green gas) → `Br₂` (red-brown liquid) → `I₂` (grey-black solid, violet vapour). Boiling point **increases** down Group 17 because larger electron clouds produce stronger **London dispersion forces**.",
        "  - **Oxidizing power decreases down the group** (`F₂ > Cl₂ > Br₂ > I₂`): a stronger halogen displaces a weaker halide ion from solution:",
        "    - `Cl₂(aq) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)` (orange solution)",
        "    - `Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)` (brown aqueous; violet in non-polar hexane)",
        "    - `Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq)` (brown aqueous)",
        "    - `I₂(aq) + 2Br⁻(aq) →` **no reaction** (`I₂` is a weaker oxidizing agent than `Br₂`).",
        "",
        "### Period 3 Oxides: Bonding, Structure & Acid–Base Behaviour",
        "Moving across Period 3, decreasing electronegativity difference `Δχ` between the element and oxygen shifts oxide bonding from **giant ionic** → **giant covalent** → **simple molecular covalent**, and transforms chemical character from **basic → amphoteric → acidic**:",
        "",
        "| Oxide | Bonding & structure | Acid–base nature | Reaction with water (or acid/base) & approx. pH |",
        "|---|---|---|---|",
        "| `Na₂O` | Giant ionic | Strongly basic | `Na₂O(s) + H₂O(l) → 2NaOH(aq)` (`pH ≈ 13–14`) |",
        "| `MgO` | Giant ionic | Weakly basic | `MgO(s) + H₂O(l) → Mg(OH)₂(aq)` (sparingly soluble, `pH ≈ 9–10`) |",
        "| `Al₂O₃` | Giant ionic (covalent character) | **Amphoteric** | Insoluble in water (`pH = 7`); reacts with acids (`Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O`) and bases (`Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄`) |",
        "| `SiO₂` | Giant covalent network | Acidic | Insoluble in water (`pH = 7`); reacts with hot conc. alkali (`SiO₂ + 2NaOH → Na₂SiO₃ + H₂O`) |",
        "| `P₄O₁₀` | Simple molecular covalent | Acidic | `P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)` (`pH ≈ 1–2`) |",
        "| `SO₂` | Simple molecular covalent | Acidic | `SO₂(g) + H₂O(l) ⇌ H₂SO₃(aq)` (`pH ≈ 2–3`) |",
        "| `SO₃` | Simple molecular covalent | Strongly acidic | `SO₃(l) + H₂O(l) → H₂SO₄(aq)` (`pH ≈ 0–1`) |",
        "",
        "- **Acid deposition & rainwater:** Natural rainwater has `pH ≈ 5.6` due to dissolved carbon dioxide (`CO₂ + H₂O ⇌ H₂CO₃`). **Acid rain (`pH < 5.6`)** forms when anthropogenic `SO₂`/`SO₃` (from coal combustion and smelting) and `NO₂` (from high-temperature engines: `2NO₂ + H₂O → HNO₂ + HNO₃`) dissolve in atmospheric water.",
        "",
        "### Assigning Oxidation States & IUPAC Nomenclature",
        "Oxidation states track formal electron ownership assuming every heteronuclear bond is 100% ionic toward the more electronegative atom:",
        "1. Uncombined element (`O₂`, `S₈`, `Fe`): **`0`**.",
        "2. Monoatomic ion (`Fe³⁺`, `S²⁻`): **equals ion charge** (`+3`, `−2`).",
        "3. Sum of oxidation states equals **`0`** (neutral compound) or the **overall ion charge** (polyatomic ion).",
        "4. Fixed benchmarks: Group 1 = **`+1`**, Group 2 = **`+2`**, `Al` = **`+3`**, `F` = **always `−1`**.",
        "5. **`H`** is **`+1`** with non-metals, but **`−1`** in metal hydrides (`NaH`, `CaH₂`, `LiAlH₄`).",
        "6. **`O`** is **`−2`** normally, but **`−1`** in peroxides (`H₂O₂`, `Na₂O₂`, `BaO₂`) and **`+2`** in `OF₂` (since `χ(F) > χ(O)`).",
        "7. **Sign convention:** Write the sign **before** the digit for oxidation states (`+6`, `−2`), and **after** for ionic charges (`2+`, `3−`). Use Roman numerals in IUPAC names: e.g. `K₂Cr₂O₇` is potassium dichromate(**VI**); `FeCl₃` is iron(**III**) chloride.",
      ].join("\n"),
      diagram: `<svg viewBox="0 0 600 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Period 3 oxides bonding, structure, and acid-base pH spectrum from Na2O to SO3">
  <rect x="0" y="0" width="600" height="265" rx="12" fill="#f8fafc"/>
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Period 3 Oxides: Bonding Shift &amp; Acid–Base Spectrum</text>
  <!-- pH colour gradient bar -->
  <defs>
    <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="28%" stop-color="#38bdf8"/>
      <stop offset="46%" stop-color="#10b981"/>
      <stop offset="65%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>
  <rect x="30" y="138" width="540" height="22" rx="11" fill="url(#phGrad)"/>
  <text x="48" y="153" font-size="10.5" font-weight="700" fill="#ffffff">BASIC (pH 13–14)</text>
  <text x="275" y="153" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">AMPHOTERIC / INSOLUBLE</text>
  <text x="552" y="153" text-anchor="end" font-size="10.5" font-weight="700" fill="#ffffff">ACIDIC (pH 0–2)</text>
  <!-- Oxide cards -->
  <g font-size="10" text-anchor="middle">
    <rect x="24" y="42" width="72" height="74" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="60" y="60" font-size="12" font-weight="700" fill="#1e3a8a">Na₂O</text>
    <text x="60" y="75" fill="#1e40af">Giant ionic</text>
    <text x="60" y="90" font-weight="700" fill="#1d4ed8">pH 13–14</text>
    <text x="60" y="105" font-size="9" fill="#334155">→ 2NaOH</text>
    <line x1="60" y1="116" x2="60" y2="138" stroke="#2563eb" stroke-width="1.5"/>

    <rect x="104" y="42" width="72" height="74" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <text x="140" y="60" font-size="12" font-weight="700" fill="#0c4a6e">MgO</text>
    <text x="140" y="75" fill="#0369a1">Giant ionic</text>
    <text x="140" y="90" font-weight="700" fill="#0284c7">pH 9–10</text>
    <text x="140" y="105" font-size="9" fill="#334155">→ Mg(OH)₂</text>
    <line x1="140" y1="116" x2="140" y2="138" stroke="#0284c7" stroke-width="1.5"/>

    <rect x="184" y="42" width="78" height="74" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>
    <text x="223" y="60" font-size="12" font-weight="700" fill="#065f46">Al₂O₃</text>
    <text x="223" y="75" fill="#047857">Ionic / cov.</text>
    <text x="223" y="90" font-weight="700" fill="#059669">Amphoteric</text>
    <text x="223" y="105" font-size="9" fill="#334155">Insol. H₂O</text>
    <line x1="223" y1="116" x2="223" y2="138" stroke="#059669" stroke-width="1.5"/>

    <rect x="270" y="42" width="74" height="74" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="307" y="60" font-size="12" font-weight="700" fill="#92400e">SiO₂</text>
    <text x="307" y="75" fill="#b45309">Giant cov.</text>
    <text x="307" y="90" font-weight="700" fill="#d97706">Acidic</text>
    <text x="307" y="105" font-size="9" fill="#334155">Insol. H₂O</text>
    <line x1="307" y1="116" x2="307" y2="138" stroke="#d97706" stroke-width="1.5"/>

    <rect x="352" y="42" width="74" height="74" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
    <text x="389" y="60" font-size="12" font-weight="700" fill="#9a3412">P₄O₁₀</text>
    <text x="389" y="75" fill="#c2410c">Simple mol.</text>
    <text x="389" y="90" font-weight="700" fill="#ea580c">pH 1–2</text>
    <text x="389" y="105" font-size="9" fill="#334155">→ 4H₃PO₄</text>
    <line x1="389" y1="116" x2="389" y2="138" stroke="#ea580c" stroke-width="1.5"/>

    <rect x="434" y="42" width="68" height="74" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="468" y="60" font-size="12" font-weight="700" fill="#991b1b">SO₂</text>
    <text x="468" y="75" fill="#b91c1c">Simple mol.</text>
    <text x="468" y="90" font-weight="700" fill="#dc2626">pH 2–3</text>
    <text x="468" y="105" font-size="9" fill="#334155">→ H₂SO₃</text>
    <line x1="468" y1="116" x2="468" y2="138" stroke="#dc2626" stroke-width="1.5"/>

    <rect x="510" y="42" width="68" height="74" rx="8" fill="#fecaca" stroke="#991b1b" stroke-width="1.5"/>
    <text x="544" y="60" font-size="12" font-weight="700" fill="#7f1d1d">SO₃</text>
    <text x="544" y="75" fill="#991b1b">Simple mol.</text>
    <text x="544" y="90" font-weight="700" fill="#991b1b">pH 0–1</text>
    <text x="544" y="105" font-size="9" fill="#334155">→ H₂SO₄</text>
    <line x1="544" y1="116" x2="544" y2="138" stroke="#991b1b" stroke-width="1.5"/>
  </g>
  <!-- Bottom summary boxes -->
  <rect x="24" y="176" width="268" height="72" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="158" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">Why Metallic Oxides Are Basic</text>
  <text x="158" y="213" text-anchor="middle" font-size="9.5" fill="#334155">Large Δχ → ionic lattice containing O²⁻ ions.</text>
  <text x="158" y="229" text-anchor="middle" font-size="9.5" fill="#334155">O²⁻ acts as a strong Brønsted base:</text>
  <text x="158" y="242" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1d4ed8">O²⁻(s) + H₂O(l) → 2OH⁻(aq)</text>

  <rect x="308" y="176" width="270" height="72" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="443" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Why Non-Metal Oxides Are Acidic</text>
  <text x="443" y="213" text-anchor="middle" font-size="9.5" fill="#334155">Small Δχ → polar covalent E−O bonds (no free O²⁻).</text>
  <text x="443" y="229" text-anchor="middle" font-size="9.5" fill="#334155">Water attacks δ+ non-metal to release H⁺(aq):</text>
  <text x="443" y="242" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">SO₃(l) + H₂O(l) → H₂SO₄(aq) → H⁺ + HSO₄⁻</text>
</svg>`,
      diagramCaption:
        "Across Period 3, electronegativity rises toward oxygen's 3.4, changing oxides from giant ionic bases (`Na₂O`, `MgO`) through amphoteric `Al₂O₃` to giant covalent `SiO₂` and molecular covalent acids (`P₄O₁₀`, `SO₂`, `SO₃`).",
      workedExamples: [
        {
          title: "Deducing Oxidation States in Polyatomic Ions & Peroxides",
          problem:
            "Determine the oxidation state of (a) sulfur in the thiosulfate ion `S₂O₃²⁻`, and (b) oxygen in sodium peroxide `Na₂O₂`.",
          steps: [
            "(a) Let `x` be the average oxidation state of `S`. Oxygen is `−2` (not a peroxide or fluoride). Sum equals ion charge `−2`: `2x + 3(−2) = −2`.",
            "Solve: `2x − 6 = −2` → `2x = +4` → `x = +2`.",
            "(b) In `Na₂O₂`, Group 1 `Na` is strictly `+1`. Let `y` be the oxidation state of `O`: `2(+1) + 2y = 0` → `2y = −2` → `y = −1` (characteristic of a peroxide).",
          ],
          answer: "(a) `S = +2` in `S₂O₃²⁻`; (b) `O = −1` in `Na₂O₂`.",
          yourTurn: {
            question:
              "Deduce the oxidation state of chromium in the dichromate(VI) ion, `Cr₂O₇²⁻`. Enter the integer value.",
            answer: { type: "number", value: 6, display: "+6" },
            solution:
              "Set `2x + 7(−2) = −2` → `2x − 14 = −2` → `2x = +12` → `x = +6`.",
          },
        },
        {
          title: "Writing Amphoteric Equations for Aluminium Oxide",
          problem:
            "Write balanced equations showing `Al₂O₃(s)` behaving as (a) a base with `HCl(aq)` and (b) an acid with `NaOH(aq)`.",
          steps: [
            "(a) As a base with strong acid: oxide ions accept protons to make water, forming `AlCl₃(aq)`. Balance Al (`2AlCl₃`), then Cl (`6HCl`), then H and O (`3H₂O`): `Al₂O₃(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂O(l)`.",
            "(b) As an acid with strong alkali: forms the soluble tetrahydroxoaluminate ion `[Al(OH)₄]⁻` (`NaAl(OH)₄`). Two `Al` atoms need `2NaAl(OH)₄` → `2NaOH` provides `2OH⁻`, and `3H₂O` supplies the remaining `6H` and `3O`: `Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2NaAl(OH)₄(aq)`.",
            "Verify atom counts for (b): Al = 2, Na = 2, O = 3 + 2 + 3 = 8 = 2 × 4, H = 2 + 6 = 8 = 2 × 4.",
          ],
          answer:
            "`Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O` and `Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄`.",
          yourTurn: {
            question:
              "What stoichiometric coefficient goes in front of `H₂O` in the balanced equation `P₄O₁₀(s) + __H₂O(l) → 4H₃PO₄(aq)`?",
            answer: { type: "number", value: 6, display: "6" },
            solution:
              "Four molecules of `H₃PO₄` contain `4 × 3 = 12` hydrogen atoms, which require `6 H₂O` molecules. Oxygen check: `10 + 6 = 16 = 4 × 4`.",
          },
        },
      ],
      keyPoints: [
        "Group 1 reactivity increases down the group (easier electron loss); Group 17 oxidizing power decreases down the group (harder electron gain).",
        "Period 3 oxides shift smoothly: `Na₂O` & `MgO` (basic) → `Al₂O₃` (amphoteric) → `SiO₂`, `P₄O₁₀`, `SO₂`, `SO₃` (acidic).",
        "Both `Al₂O₃` and `SiO₂` are **insoluble in water** (leaving water neutral at `pH 7`), yet `Al₂O₃` is amphoteric and `SiO₂` is acidic because of how they react with acids/alkalis.",
        "Always check priority rules for oxidation states: Group 1/2 metals and `F (−1)` override default values of `H (+1)` and `O (−2)` in hydrides, peroxides, and `OF₂`.",
      ],
      whyItWorks:
        "Whether an oxide produces `OH⁻` or `H⁺` in water depends on which bond breaks: ionic `Na₂O` releases bare `O²⁻` ions whose massive negative charge rips `H⁺` off water (`O²⁻ + H₂O → 2OH⁻`). In covalent `SO₃`, the electron-withdrawing oxygens leave sulfur strongly `δ+`; water donates a lone pair to sulfur and loses a proton, generating `H₂SO₄`.",
      strategies: [
        "Memorize the two exact stoichiometry anchors for Period 3 oxides: `P₄O₁₀ + 6H₂O → 4H₃PO₄` and `Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄` — these are among the most frequently tested IB Paper 2 equations.",
        "For halogen displacement questions, check whether the **free halogen (`X₂`)** is higher up Group 17 than the **halide ion (`Y⁻`)**. Higher halogen oxidizes lower halide; otherwise write 'No reaction'.",
      ],
      thinkDeeper:
        "Why is `SO₃` (`H₂SO₄`, strong acid) a much stronger acidic oxide than `SO₂` (`H₂SO₃`, weak acid), even though both are sulfur oxides? Higher oxidation state (`+6` vs `+4`) means more electronegative oxygen atoms pull electron density away from the `O−H` bond in the oxoacid, weakening `O−H` and stabilizing the conjugate base via more resonance structures!",
    },

    // =========================================================================
    // SECTION 3: Transition Metals: Variable OS & Complex Ions [HL]
    // =========================================================================
    {
      id: "transition-elements-complexes-hl",
      heading: "S3.1 Transition Metals: Variable Oxidation States & Complex Ions",
      level: "HL",
      discovery: {
        problem:
          "Calcium (`[Ar] 4s²`) only ever forms `Ca²⁺`, whereas iron (`[Ar] 3d⁶ 4s²`) readily forms both `Fe²⁺` and `Fe³⁺`, and manganese forms every oxidation state from `+2` up to `+7` (`MnO₄⁻`). Meanwhile, zinc sits right at the end of the `3d` block (`[Ar] 3d¹⁰ 4s²`), yet chemists refuse to call zinc a transition element! What single orbital fact explains both puzzles?",
        idea:
          "In `3d` transition metals, the **`4s` and `3d` sublevels lie very close in energy**, so successive ionization energies rise smoothly without an abrupt shell-boundary cliff — enabling multiple stable oxidation states. **Zinc** has a completely full `3d¹⁰` sublevel in both the neutral atom (`[Ar] 3d¹⁰ 4s²`) and its only ion `Zn²⁺` (`[Ar] 3d¹⁰`), so it lacks an **incomplete `d` sublevel** and exhibits none of the hallmark transition-metal properties!",
      },
      body: [
        "### Transition Elements vs d-Block Elements",
        "The **IB definition** of a **transition element** is an element whose atom has an **incomplete `d` sublevel**, or which can give rise to **cations with an incomplete `d` sublevel** (`d¹` to `d⁹`).",
        "",
        "- **Why `Zn` is NOT a transition element:** `Zn` (`[Ar] 3d¹⁰ 4s²`) and its only stable ion `Zn²⁺` (`[Ar] 3d¹⁰`) both have a completely filled `3d¹⁰` sublevel. Consequently, `Zn²⁺` compounds are colourless, diamagnetic, and show only one oxidation state (`+2`).",
        "- **Why `Sc³⁺` lacks transition properties:** Although neutral `Sc` is `[Ar] 3d¹ 4s²`, its only common ion `Sc³⁺` has an **empty `3d⁰`** sublevel (`[Ar]`), making `Sc³⁺` salts colourless and diamagnetic with a single oxidation state (`+3`).",
        "- **Why `Cu` IS a transition element:** Although `Cu` (`[Ar] 3d¹⁰ 4s¹`) and `Cu⁺` (`[Ar] 3d¹⁰`) have filled `3d` sublevels, `Cu²⁺` has **`[Ar] 3d⁹`** — an incomplete `d` sublevel!",
        "- **Ionization rule (critical!):** When ANY `3d` transition metal forms a cation, **`4s` electrons are always removed BEFORE `3d` electrons**:",
        "  - `Cr`: `[Ar] 3d⁵ 4s¹` → `Cr³⁺`: `[Ar] 3d³`",
        "  - `Fe`: `[Ar] 3d⁶ 4s²` → `Fe²⁺`: `[Ar] 3d⁶` → `Fe³⁺`: `[Ar] 3d⁵`",
        "  - `Cu`: `[Ar] 3d¹⁰ 4s¹` → `Cu⁺`: `[Ar] 3d¹⁰` → `Cu²⁺`: `[Ar] 3d⁹`",
        "",
        "### Characteristic Properties of First-Row Transition Metals",
        "1. **Variable oxidation states:** Because `4s` and `3d` orbitals are very close in energy, removing successive electrons requires gradually increasing energy (unlike `Ca`, where removing a `3p` core electron for `Ca³⁺` causes a massive ionization-energy spike). All elements from `Ti` to `Cu` exhibit `+2`, and maximum oxidation state peaks at **`Mn (+7)`** in `MnO₄⁻` (`[Ar] 3d⁵ 4s²` loses all 7 valence electrons).",
        "2. **Catalytic activity:**",
        "   - **Heterogeneous catalysts** (solid catalyst, gas/liquid reactants): `Fe(s)` in the Haber process (`N₂ + 3H₂ ⇌ 2NH₃`), `V₂O₅(s)` in the Contact process (`2SO₂ + O₂ ⇌ 2SO₃`), `Ni(s)` in alkene hydrogenation, `Pt/Pd/Rh` in catalytic converters, `MnO₂(s)` decomposing `H₂O₂`. Transition metals use partially filled/vacant `3d` orbitals to **adsorb** reactants onto the surface, weakening reactant bonds and lowering `E_a`.",
        "   - **Homogeneous catalysts** (same phase as reactants): `Fe²⁺/Fe³⁺` catalysing `S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂`, and biological metalloproteins (`Fe²⁺` in haemoglobin/cytochromes, `Co` in vitamin B₁₂). They operate by cycling rapidly between **variable oxidation states** along an alternative lower-`E_a` pathway.",
        "3. **Magnetic properties:**",
        "   - **Diamagnetism:** All electrons paired (`Sc³⁺`, `Cu⁺`, `Zn²⁺`); weakly repelled by a magnetic field.",
        "   - **Paramagnetism:** One or more unpaired `d` electrons; attracted into a magnetic field, scaling with unpaired-electron count (peaks at `d⁵`: `Mn²⁺` and `Fe³⁺` have 5 unpaired electrons; neutral `Cr` has 6).",
        "   - **Ferromagnetism:** Permanent magnetism retained after the field is removed because unpaired electron spins align cooperatively in long-range **magnetic domains** — uniquely observed in **iron (`Fe`), cobalt (`Co`), and nickel (`Ni`)**.",
        "",
        "### Complex Ions, Ligands & Coordination Number",
        "A **complex ion** consists of a central transition-metal ion acting as a **Lewis acid** (electron-pair acceptor) bonded via **coordinate (dative) covalent bonds** to surrounding **ligands** acting as **Lewis bases** (species with at least one lone pair of electrons).",
        "",
        "- **Coordination number (CN):** The total number of **coordinate bonds** attached to the central metal ion (not merely the number of ligand molecules if polydentate ligands are present!).",
        "- **Common ligands:**",
        "  - **Monodentate** (1 donor atom): neutral `H₂O`, `NH₃`, `CO`; anionic `Cl⁻`, `Br⁻`, `CN⁻`, `OH⁻`, `SCN⁻` (each `−1`).",
        "  - **Bidentate** (2 donor atoms): ethane-1,2-diamine `en` (`H₂NCH₂CH₂NH₂`, neutral); ethanedioate/oxalate `C₂O₄²⁻` (`−2`).",
        "  - **Hexadentate** (6 donor atoms): `EDTA⁴⁻` (2 N + 4 O⁻ donor atoms), forming ultra-stable 1:1 octahedral **chelates** such as `[Fe(EDTA)]⁻` (`CN = 6`).",
        "- **Common geometries:** `CN = 6` → **octahedral** (`90°`, e.g. `[Fe(H₂O)₆]²⁺`, `[Co(en)₃]³⁺`); `CN = 4` → **tetrahedral** (`109.5°`, e.g. `[CuCl₄]²⁻`, `[CoCl₄]²⁻`) or **square planar** (`90°`, e.g. cisplatin `[Pt(NH₃)₂Cl₂]`); `CN = 2` → **linear** (`180°`, e.g. `[Ag(NH₃)₂]⁺`).",
        "- **Charge balance:** {{q_complex = OS_metal + Σq_ligands}}.",
      ].join("\n"),
      diagram: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Complex ion geometries octahedral, tetrahedral, and linear with Lewis acid-base coordinate bonds">
  <rect x="0" y="0" width="600" height="270" rx="12" fill="#f8fafc"/>
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Transition-Metal Complex Ions: Coordinate Bonding &amp; Geometries [HL]</text>
  <!-- Panel 1: Octahedral CN=6 -->
  <rect x="16" y="40" width="182" height="214" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="107" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">Octahedral (CN = 6)</text>
  <text x="107" y="73" text-anchor="middle" font-size="9.5" fill="#475569">[Fe(H₂O)₆]²⁺ · 90°</text>
  <g stroke="#0d9488" stroke-width="2">
    <line x1="107" y1="104" x2="107" y2="188"/>
    <line x1="57" y1="146" x2="157" y2="146"/>
    <line x1="74" y1="126" x2="140" y2="166" stroke-dasharray="4,2"/>
  </g>
  <circle cx="107" cy="146" r="16" fill="#0d9488"/><text x="107" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Fe²⁺</text>
  <g font-size="9" font-weight="700" fill="#115e59" text-anchor="middle">
    <circle cx="107" cy="96" r="12" fill="#ccfbf1" stroke="#0d9488"/><text x="107" y="99">H₂O</text>
    <circle cx="107" cy="196" r="12" fill="#ccfbf1" stroke="#0d9488"/><text x="107" y="199">H₂O</text>
    <circle cx="48" cy="146" r="12" fill="#ccfbf1" stroke="#0d9488"/><text x="48" y="149">H₂O</text>
    <circle cx="166" cy="146" r="12" fill="#ccfbf1" stroke="#0d9488"/><text x="166" y="149">H₂O</text>
    <circle cx="67" cy="121" r="11" fill="#e0f2fe" stroke="#0284c7"/><text x="67" y="124" font-size="8">H₂O</text>
    <circle cx="147" cy="171" r="11" fill="#e0f2fe" stroke="#0284c7"/><text x="147" y="174" font-size="8">H₂O</text>
  </g>
  <text x="107" y="226" text-anchor="middle" font-size="9" fill="#334155">Also [Co(en)₃]³⁺ (3 × 2 = 6)</text>
  <text x="107" y="240" text-anchor="middle" font-size="9" fill="#334155">and [Fe(EDTA)]⁻ (1 × 6 = 6)</text>

  <!-- Panel 2: Tetrahedral CN=4 -->
  <rect x="209" y="40" width="182" height="214" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="300" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d4ed8">Tetrahedral (CN = 4)</text>
  <text x="300" y="73" text-anchor="middle" font-size="9.5" fill="#475569">[CuCl₄]²⁻ · 109.5°</text>
  <g stroke="#2563eb" stroke-width="2">
    <line x1="300" y1="146" x2="300" y2="100"/>
    <line x1="300" y1="146" x2="255" y2="178"/>
    <line x1="300" y1="146" x2="345" y2="178"/>
    <line x1="300" y1="146" x2="328" y2="128" stroke-dasharray="3,2"/>
  </g>
  <circle cx="300" cy="146" r="16" fill="#2563eb"/><text x="300" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Cu²⁺</text>
  <g font-size="9.5" font-weight="700" fill="#1e40af" text-anchor="middle">
    <circle cx="300" cy="94" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="300" y="98">Cl⁻</text>
    <circle cx="249" cy="182" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="249" y="186">Cl⁻</text>
    <circle cx="351" cy="182" r="12" fill="#dbeafe" stroke="#2563eb"/><text x="351" y="186">Cl⁻</text>
    <circle cx="336" cy="122" r="11" fill="#eff6ff" stroke="#3b82f6"/><text x="336" y="126">Cl⁻</text>
  </g>
  <text x="300" y="218" text-anchor="middle" font-size="9" fill="#334155">Bulky Cl⁻ ligands limit CN to 4</text>
  <text x="300" y="232" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Charge: (+2) + 4(−1) = −2</text>
  <text x="300" y="245" text-anchor="middle" font-size="8.5" fill="#64748b">(d⁸ Pt²⁺ gives square planar CN=4)</text>

  <!-- Panel 3: Linear CN=2 + Lewis Box -->
  <rect x="402" y="40" width="182" height="214" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="493" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="#7c3aed">Linear (CN = 2)</text>
  <text x="493" y="73" text-anchor="middle" font-size="9.5" fill="#475569">[Ag(NH₃)₂]⁺ · 180°</text>
  <line x1="436" y1="120" x2="550" y2="120" stroke="#7c3aed" stroke-width="2.2"/>
  <polygon points="471,116 479,120 471,124" fill="#7c3aed"/>
  <polygon points="515,116 507,120 515,124" fill="#7c3aed"/>
  <circle cx="493" cy="120" r="15" fill="#7c3aed"/><text x="493" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Ag⁺</text>
  <circle cx="430" cy="120" r="14" fill="#ede9fe" stroke="#7c3aed"/><text x="430" y="123" text-anchor="middle" font-size="9" font-weight="700" fill="#5b21b6">NH₃</text>
  <circle cx="556" cy="120" r="14" fill="#ede9fe" stroke="#7c3aed"/><text x="556" y="123" text-anchor="middle" font-size="9" font-weight="700" fill="#5b21b6">NH₃</text>

  <rect x="414" y="156" width="158" height="86" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
  <text x="493" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="#5b21b6">Lewis Acid–Base Rule</text>
  <text x="493" y="191" text-anchor="middle" font-size="9.2" fill="#334155">Ligand = Lewis base</text>
  <text x="493" y="203" text-anchor="middle" font-size="9" fill="#475569">(donates lone pair →)</text>
  <text x="493" y="220" text-anchor="middle" font-size="9.2" fill="#334155">Metal ion = Lewis acid</text>
  <text x="493" y="232" text-anchor="middle" font-size="9" fill="#475569">(accepts electron pairs)</text>
</svg>`,
      diagramCaption:
        "Ligands donate lone pairs (Lewis bases) into vacant metal orbitals (Lewis acids) to form coordinate bonds; bulky ligands like Cl⁻ typically favour tetrahedral CN = 4 over octahedral CN = 6.",
      workedExamples: [
        {
          title: "Deducing Metal Oxidation State, d-Electron Count & Coordination Number",
          problem:
            "For the complex ion `[Cr(en)₂Cl₂]⁺` (where `en = H₂NCH₂CH₂NH₂`), state (a) the coordination number, (b) the oxidation state of chromium, and (c) the `3d` electron configuration of the chromium ion.",
          steps: [
            "(a) Each `en` ligand is **bidentate** (2 N donor atoms) and each `Cl⁻` is **monodentate** (1 donor atom). Total coordinate bonds: `CN = 2(2) + 2(1) = 6` (octahedral).",
            "(b) `en` is neutral (`0`) and `Cl⁻` has charge `−1`. Using charge balance: `x + 2(0) + 2(−1) = +1` → `x − 2 = +1` → `x = +3` (`Cr³⁺`).",
            "(c) Neutral `Cr` (`Z = 24`) is `[Ar] 3d⁵ 4s¹`. Remove the `4s¹` electron first, then two `3d` electrons → `Cr³⁺` is `[Ar] 3d³` (three `3d` electrons).",
          ],
          answer: "(a) `CN = 6`; (b) `Cr = +3`; (c) `[Ar] 3d³`.",
          yourTurn: {
            question:
              "Deduce the coordination number of iron in the hexadentate chelate complex `[Fe(EDTA)]⁻`.",
            answer: { type: "number", value: 6, display: "6" },
            solution:
              "`EDTA⁴⁻` is a hexadentate ligand donating 6 lone pairs (2 from nitrogen atoms, 4 from carboxylate oxygen atoms) to the single `Fe³⁺` ion, giving `CN = 6`.",
          },
        },
        {
          title: "Explaining Paramagnetism & Transition-Element Status",
          problem:
            "Explain why `Cu²⁺` is classified as a transition-metal ion and is paramagnetic, whereas `Zn²⁺` is neither.",
          steps: [
            "Write full cation configurations (removing `4s` before `3d`): `Cu` (`Z = 29`) is `[Ar] 3d¹⁰ 4s¹` → `Cu²⁺` is `[Ar] 3d⁹`; `Zn` (`Z = 30`) is `[Ar] 3d¹⁰ 4s²` → `Zn²⁺` is `[Ar] 3d¹⁰`.",
            "`Cu²⁺` has an **incomplete `3d` sublevel** (`3d⁹`) with **1 unpaired electron**, satisfying the definition of a transition element and making `Cu²⁺` paramagnetic.",
            "`Zn` and `Zn²⁺` both have a **completely full `3d¹⁰` sublevel** with **0 unpaired electrons**, so zinc is not a transition element and `Zn²⁺` is diamagnetic.",
          ],
          answer:
            "`Cu²⁺` (`[Ar] 3d⁹`) has an incomplete `3d` sublevel with 1 unpaired electron (paramagnetic); `Zn²⁺` (`[Ar] 3d¹⁰`) has a full `3d` sublevel with all electrons paired (diamagnetic).",
          yourTurn: {
            question:
              "How many `3d` electrons are present in an `Fe³⁺` ion (atomic number of Fe = 26)?",
            answer: { type: "number", value: 5, display: "5" },
            solution:
              "Neutral Fe is `[Ar] 3d⁶ 4s²`. Removing the two `4s` electrons and one `3d` electron gives `Fe³⁺`: `[Ar] 3d⁵` — 5 `3d` electrons (all 5 unpaired in the free ion!).",
          },
        },
      ],
      keyPoints: [
        "Always remove **`4s` electrons before `3d` electrons** when writing transition-metal cation configurations (`Fe²⁺` is `[Ar] 3d⁶`, NOT `[Ar] 3d⁴ 4s²`).",
        "Remember the two Aufbau exceptions: `Cr = [Ar] 3d⁵ 4s¹` and `Cu = [Ar] 3d¹⁰ 4s¹`.",
        "Coordination number = **number of coordinate bonds** (`Σ denticity × ligand count`), NOT the number of ligand species.",
        "Complex formation is a **Lewis acid–base reaction**: ligand donates lone pair (Lewis base); central metal cation accepts it (Lewis acid).",
      ],
      whyItWorks:
        "In a neutral `3d` atom, `4s` penetrates closer to the nucleus and fills marginally before `3d`; once electrons populate `3d` and the atom is ionized, the higher net positive charge pulls the more compact `3d` orbitals lower in energy than `4s`. That near-degeneracy of `4s` and `3d` is simultaneously why `4s` leaves first and why multiple oxidation states exist.",
      strategies: [
        "When finding oxidation state inside `[M(L)ₐ(X)_b]^q`, list each ligand's exact charge first (`H₂O, NH₃, CO, en = 0`; `Cl⁻, CN⁻, OH⁻, SCN⁻ = −1`; `C₂O₄²⁻ = −2`; `EDTA⁴⁻ = −4`) before writing the algebraic sum.",
        "For catalysis questions, distinguish **heterogeneous** (surface adsorption using `3d` orbitals, different phase) from **homogeneous** (cycling through variable oxidation states, same phase) — and always state 'alternative pathway with lower activation energy `E_a`'.",
      ],
      thinkDeeper:
        "Why does replacing six `H₂O` ligands around `Fe³⁺` with a single `EDTA⁴⁻` ligand (`[Fe(H₂O)₆]³⁺ + EDTA⁴⁻ ⇌ [Fe(EDTA)]⁻ + 6H₂O`) proceed almost to completion? Look at the particle count: **2 species on the left become 7 species on the right**! That huge positive entropy change (`ΔS > 0`, the **chelate effect**) drives `ΔG = ΔH − TΔS` strongly negative!",
    },

    // =========================================================================
    // SECTION 4: Crystal Field Splitting & Colour of Transition Complexes [HL]
    // =========================================================================
    {
      id: "d-orbital-splitting-colour-hl",
      heading: "S3.1 Crystal Field Splitting & Colour of Transition Complexes",
      level: "HL",
      discovery: {
        problem:
          "Dissolve anhydrous white copper(II) sulfate in water and it turns **pale blue** (`[Cu(H₂O)₆]²⁺`). Add concentrated aqueous ammonia and it instantly shifts to **deep royal blue** (`[Cu(NH₃)₄(H₂O)₂]²⁺`). Add concentrated hydrochloric acid instead and it flips to **yellow-green** (`[CuCl₄]²⁻`)! Yet zinc sulfate stays **colourless** no matter which ligand you add. How can the same `Cu²⁺` ion display three different colours while `Zn²⁺` displays none?",
        idea:
          "Approaching ligand lone pairs do not repel all five `3d` orbitals equally — they **split** the degenerate `3d` sublevel into a lower-energy set and a higher-energy set separated by **`ΔE`**. Because `Cu²⁺` (`3d⁹`) has an incomplete `d` sublevel, a lower `d` electron can absorb a visible photon of energy `ΔE = hc/λ` and jump up (**d–d transition**), transmitting the **complementary colour**! Swapping `H₂O` for stronger-field `NH₃` widens `ΔE`, shifting absorption to shorter wavelength; `Zn²⁺` (`3d¹⁰`) has no vacant upper `d` orbital, so no d–d transition can occur!",
      },
      body: [
        "### Splitting of d Orbitals in an Octahedral Field",
        "In an isolated gaseous transition-metal ion, all five `3d` orbitals (`d_xy, d_xz, d_yz, d_x²−y², d_z²`) have identical energy — they are **degenerate**.",
        "",
        "When **six ligands** approach along the `±x`, `±y`, and `±z` axes to form an octahedral complex:",
        "- The `d_x²−y²` and `d_z²` orbitals (`e_g` set) have lobes pointing **directly at** the incoming ligand lone pairs → **stronger electrostatic repulsion** → **raised in energy**.",
        "- The `d_xy`, `d_xz`, and `d_yz` orbitals (`t_2g` set) have lobes pointing **between** the axes → **less repulsion** → **lower in energy**.",
        "",
        "The five `d` orbitals therefore split into **two energy levels** (3 lower, 2 higher) separated by the **crystal field splitting energy `ΔE`**.",
        "",
        "### Absorption, d–d Transitions & Complementary Colour",
        "1. When white light shines through a solution of a complex containing a **partially filled `d` sublevel (`d¹–d⁹`)**, an electron in a lower-energy `d` orbital absorbs a photon whose energy exactly equals `ΔE`:",
        "",
        "{{ΔE = h * ν = (h * c) / λ}}",
        "",
        "and for one mole of photons (in `J mol⁻¹`, divide by `1000` for `kJ mol⁻¹`):",
        "",
        "{{ΔE_molar = (N_A * h * c) / λ}}",
        "",
        "where `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`.",
        "2. The electron is promoted to a vacant space in a higher-energy `d` orbital (**d–d transition**).",
        "3. All other visible wavelengths are **transmitted**, so the eye perceives the **complementary colour** directly opposite the absorbed wavelength on the **IB Colour Wheel**:",
        "",
        "| Absorbed colour | Absorbed `λ` range (nm) | Observed (complementary) colour |",
        "|---|---|---|",
        "| Violet | `400–424` | **Yellow** |",
        "| Blue | `424–491` | **Orange** |",
        "| Green | `491–575` | **Red** |",
        "| Yellow | `575–585` | **Violet** |",
        "| Orange | `585–647` | **Blue** |",
        "| Red | `647–700` | **Green** |",
        "",
        "*(Remember: **`Sc³⁺` / `Ti⁴⁺` (`d⁰`)** have no `d` electrons to promote, and **`Cu⁺` / `Zn²⁺` (`d¹⁰`)** have no empty upper `d` orbitals to promote into — so their complexes are **colourless**!)*",
        "",
        "### Four Factors Controlling `ΔE` (and Therefore Colour)",
        "Because `ΔE = hc / λ`, **larger `ΔE` → absorbs higher frequency / shorter wavelength `λ`**; **smaller `ΔE` → absorbs lower frequency / longer wavelength `λ`**.",
        "",
        "1. **Identity of the ligand (Spectrochemical Series — IB Data Booklet):**",
        "   `I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CO ≈ CN⁻`",
        "   Stronger-field ligands (right side, e.g. `NH₃`, `CN⁻`) interact more strongly with `d` orbitals → **larger `ΔE`** → absorb **shorter `λ`**. Example: `[Cu(H₂O)₆]²⁺` (pale blue) + `4NH₃` → `[Cu(NH₃)₄(H₂O)₂]²⁺` (deep royal blue, absorbs shorter-wavelength orange/yellow light).",
        "2. **Oxidation state of the metal ion:** Higher oxidation state means greater charge density, pulling ligands closer → stronger repulsion → **larger `ΔE`**. Example: `[Fe(H₂O)₆]²⁺` (`Fe²⁺`, pale green) vs `[Fe(H₂O)₆]³⁺` (`Fe³⁺`, yellow-brown; larger `ΔE` absorbs violet/blue light).",
        "3. **Identity of the metal ion (nuclear charge & period):** Different nuclear charges and `d`-orbital sizes alter ligand attraction and splitting (e.g., `[Mn(H₂O)₆]²⁺` pale pink vs `[Ni(H₂O)₆]²⁺` green vs `[Cu(H₂O)₆]²⁺` pale blue; `4d`/`5d` ions split more than `3d`).",
        "4. **Coordination geometry / number of ligands:** Octahedral complexes (6 ligands pointing along axes) split `d` orbitals much more strongly than tetrahedral complexes (4 ligands between axes, `Δ_t ≈ 4/9 Δ_o`), e.g. octahedral `[Co(H₂O)₆]²⁺` (pink) vs tetrahedral `[CoCl₄]²⁻` (deep blue).",
      ].join("\n"),
      diagram: `<svg viewBox="0 0 600 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Octahedral d-orbital crystal field splitting diagram paired with the six-sector IB complementary colour wheel">
  <rect x="0" y="0" width="600" height="285" rx="12" fill="#f8fafc"/>
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Octahedral d-Orbital Splitting (ΔE) &amp; IB Colour Wheel [HL]</text>
  <!-- Left Panel: Crystal Field Splitting -->
  <rect x="16" y="38" width="296" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="164" y="57" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">d-Orbital Splitting in Octahedral Field</text>
  <!-- Energy axis -->
  <line x1="34" y1="234" x2="34" y2="74" stroke="#475569" stroke-width="1.8"/>
  <polygon points="30,78 34,68 38,78" fill="#475569"/>
  <text x="24" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#475569" transform="rotate(-90 24 156)">Energy</text>
  <!-- Free ion degenerate 5 d orbitals -->
  <text x="86" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Free ion</text>
  <text x="86" y="152" text-anchor="middle" font-size="8.5" fill="#64748b">(5 degenerate)</text>
  <g stroke="#334155" stroke-width="2.5">
    <line x1="48" y1="164" x2="60" y2="164"/><line x1="64" y1="164" x2="76" y2="164"/>
    <line x1="80" y1="164" x2="92" y2="164"/><line x1="96" y1="164" x2="108" y2="164"/>
    <line x1="112" y1="164" x2="124" y2="164"/>
  </g>
  <!-- Dashed splitting guides -->
  <line x1="126" y1="164" x2="178" y2="104" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <line x1="126" y1="164" x2="178" y2="202" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <!-- Upper set (eg) -->
  <text x="228" y="88" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Higher set (d_x²−y², d_z²)</text>
  <line x1="192" y1="104" x2="218" y2="104" stroke="#dc2626" stroke-width="3"/>
  <line x1="234" y1="104" x2="260" y2="104" stroke="#dc2626" stroke-width="3"/>
  <!-- Lower set (t2g) -->
  <line x1="178" y1="202" x2="202" y2="202" stroke="#2563eb" stroke-width="3"/>
  <line x1="212" y1="202" x2="236" y2="202" stroke="#2563eb" stroke-width="3"/>
  <line x1="246" y1="202" x2="270" y2="202" stroke="#2563eb" stroke-width="3"/>
  <text x="224" y="220" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1d4ed8">Lower set (d_xy, d_xz, d_yz)</text>
  <!-- Electron + promotion arrow -->
  <line x1="190" y1="200" x2="190" y2="184" stroke="#0f172a" stroke-width="2"/>
  <polygon points="187,187 190,180 193,187" fill="#0f172a"/>
  <line x1="205" y1="195" x2="205" y2="112" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="201,116 205,107 209,116" fill="#ea580c"/>
  <text x="256" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="#ea580c">ΔE = hc/λ</text>
  <text x="256" y="162" text-anchor="middle" font-size="8.8" fill="#9a3412">absorbs visible</text>
  <text x="256" y="173" text-anchor="middle" font-size="8.8" fill="#9a3412">photon (d–d)</text>
  <text x="164" y="254" text-anchor="middle" font-size="9" fill="#475569">Stronger ligand / higher OS ⇒ larger ΔE ⇒ shorter absorbed λ</text>

  <!-- Right Panel: 6-Sector IB Colour Wheel -->
  <rect x="324" y="38" width="260" height="232" rx="10" fill="#ffffff" stroke="#cbd5e1"/>
  <text x="454" y="57" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">IB Complementary Colour Wheel</text>
  <!-- 6 wedges centered at (454, 154), R=76 -->
  <!-- Red: -90 to -30 deg -->
  <path d="M454,154 L454,78 A76,76 0 0,1 519.8,116 Z" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <!-- Orange: -30 to 30 deg -->
  <path d="M454,154 L519.8,116 A76,76 0 0,1 519.8,192 Z" fill="#f97316" stroke="#ffffff" stroke-width="2"/>
  <!-- Yellow: 30 to 90 deg -->
  <path d="M454,154 L519.8,192 A76,76 0 0,1 454,230 Z" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
  <!-- Green: 90 to 150 deg -->
  <path d="M454,154 L454,230 A76,76 0 0,1 388.2,192 Z" fill="#22c55e" stroke="#ffffff" stroke-width="2"/>
  <!-- Blue: 150 to 210 deg -->
  <path d="M454,154 L388.2,192 A76,76 0 0,1 388.2,116 Z" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
  <!-- Violet: 210 to 270 deg -->
  <path d="M454,154 L388.2,116 A76,76 0 0,1 454,78 Z" fill="#8b5cf6" stroke="#ffffff" stroke-width="2"/>
  <!-- Center hole -->
  <circle cx="454" cy="154" r="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="454" y="151" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0f172a">Opposite</text>
  <text x="454" y="162" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0f172a">= Seen</text>
  <!-- Sector labels -->
  <g font-size="9" font-weight="700" text-anchor="middle">
    <text x="480" y="109" fill="#ffffff">Red</text><text x="480" y="119" font-size="7.5" fill="#fee2e2">647–700</text>
    <text x="506" y="153" fill="#ffffff">Orange</text><text x="506" y="163" font-size="7.5" fill="#ffedd5">585–647</text>
    <text x="480" y="201" fill="#422006">Yellow</text><text x="480" y="211" font-size="7.5" fill="#713f12">575–585</text>
    <text x="428" y="201" fill="#ffffff">Green</text><text x="428" y="211" font-size="7.5" fill="#dcfce7">491–575</text>
    <text x="402" y="153" fill="#ffffff">Blue</text><text x="402" y="163" font-size="7.5" fill="#dbeafe">424–491</text>
    <text x="428" y="109" fill="#ffffff">Violet</text><text x="428" y="119" font-size="7.5" fill="#ede9fe">400–424</text>
  </g>
  <text x="454" y="254" text-anchor="middle" font-size="9" fill="#475569">Wavelengths in nm · Absorbed ↔ Complementary</text>
</svg>`,
      diagramCaption:
        "Octahedral ligands split the five d orbitals by ΔE; absorption of a photon at λ = hc/ΔE transmits the complementary colour located directly opposite on the colour wheel.",
      workedExamples: [
        {
          title: "Calculating Molar ΔE from Maximum Absorption Wavelength",
          problem:
            "Aqueous `[Ti(H₂O)₆]³⁺` appears purple because it shows an absorption maximum at `λ = 510 nm`. Calculate the crystal field splitting energy `ΔE` in `kJ mol⁻¹` (3 s.f.), given `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`.",
          steps: [
            "Convert wavelength to metres: `λ = 510 nm = 510 × 10⁻⁹ m = 5.10 × 10⁻⁷ m`.",
            "Energy of one absorbed photon: {{E = (6.63 * 10^(-34) * 3.00 * 10^8) / (5.10 * 10^(-7)) = 3.90 * 10^(-19)}} `J`.",
            "Multiply by `N_A` and divide by `1000` to obtain `kJ mol⁻¹`: {{ΔE = (3.90 * 10^(-19) * 6.02 * 10^23) / 1000 = 234.8}} `kJ mol⁻¹` → `235 kJ mol⁻¹` (3 s.f.).",
            "Colour check: `510 nm` lies in the green band (`491–575 nm`), so the complementary observed colour is red-purple/violet — matching `[Ti(H₂O)₆]³⁺`!",
          ],
          answer: "`ΔE = 235 kJ mol⁻¹` (3 s.f.).",
          yourTurn: {
            question:
              "An octahedral transition-metal complex absorbs light maximally at `λ = 500 nm`. Using `h = 6.63 × 10⁻³⁴ J s`, `c = 3.00 × 10⁸ m s⁻¹`, and `N_A = 6.02 × 10²³ mol⁻¹`, calculate the molar crystal field splitting energy `ΔE` in `kJ mol⁻¹` (to 3 s.f.).",
            answer: { type: "number", value: 239, tolerance: 1.5, display: "239 kJ mol⁻¹" },
            solution:
              "{{E = (6.63 * 10^(-34) * 3.00 * 10^8) / (500 * 10^(-9)) = 3.978 * 10^(-19)}} `J`. Per mole: `3.978 × 10⁻¹⁹ × 6.02 × 10²³ / 1000 = 239.5 ≈ 239 kJ mol⁻¹`.",
          },
        },
        {
          title: "Predicting Colour Shifts via the Spectrochemical Series",
          problem:
            "When excess `NH₃(aq)` is added to pale blue `[Cu(H₂O)₆]²⁺(aq)`, the solution turns deep royal blue (`[Cu(NH₃)₄(H₂O)₂]²⁺`). Explain this colour change in terms of crystal field splitting and absorbed wavelength.",
          steps: [
            "Locate both ligands in the spectrochemical series: `NH₃` is a **stronger-field ligand** than `H₂O`.",
            "Replacing `H₂O` with `NH₃` increases electrostatic interaction with the `3d` orbitals, causing a **larger splitting energy `ΔE`**.",
            "Since `ΔE = hc / λ`, larger `ΔE` means the complex absorbs light of **higher frequency / shorter wavelength** (shifting from red-orange toward yellow-orange around `600 nm`).",
            "The transmitted complementary colour therefore shifts from pale blue to a **deeper blue / indigo-violet**.",
          ],
          answer:
            "`NH₃` produces a larger `ΔE` than `H₂O`, so `[Cu(NH₃)₄(H₂O)₂]²⁺` absorbs shorter-wavelength yellow-orange light and transmits deeper royal blue.",
          yourTurn: {
            question:
              "A complex ion absorbs maximally at `610 nm` (orange light). State the **observed** colour of the solution from the IB colour wheel.",
            answer: { type: "text", accept: ["blue"], display: "blue" },
            solution:
              "`610 nm` sits inside the orange sector (`585–647 nm`); directly opposite orange on the IB colour wheel is **blue**.",
          },
        },
      ],
      keyPoints: [
        "Every IB 'Explain why `[M(L)₆]^n+` is coloured' answer needs **four** steps: (1) partially filled `d` sublevel, (2) ligands split `d` orbitals into two energy levels (`ΔE`), (3) visible photon absorbed to promote a `d` electron (**d–d transition**), (4) **complementary** colour is **transmitted**.",
        "Never say the complex *emits* its observed colour — it **absorbs** one wavelength band and **transmits** the complementary wavelengths!",
        "Larger `ΔE` ↔ higher frequency `ν` ↔ **shorter** absorbed wavelength `λ`.",
        "Both `d⁰` (`Sc³⁺`, `Ti⁴⁺`) and `d¹⁰` (`Cu⁺`, `Zn²⁺`) complexes are colourless because no d–d electronic transition is possible.",
      ],
      whyItWorks:
        "Because visible photons carry energies between `170 kJ mol⁻¹` (`700 nm`, red) and `300 kJ mol⁻¹` (`400 nm`, violet), and typical octahedral `3d` crystal-field splittings happen to fall right inside `150–300 kJ mol⁻¹`, transition complexes selectively filter visible light. Main-group cations like `Na⁺` or `Mg²⁺` have huge `s–p` energy gaps that absorb only invisible UV radiation, leaving their aqueous solutions completely colourless.",
      strategies: [
        "For `ΔE` ↔ `λ` problems, remember the quick sanity-check shortcut: {{ΔE (kJ mol^(-1)) ≈ 119700 / λ(nm)}}! For `500 nm`, `119700 / 500 = 239.4 kJ mol⁻¹` — instantly catches factor-of-1000 (`J` vs `kJ`) or `nm → m` slips!",
        "Check whether a ligand change alters **coordination geometry** as well as ligand strength (e.g., `[Co(H₂O)₆]²⁺` pink octahedral → `[CoCl₄]²⁻` blue tetrahedral): weaker `Cl⁻` + tetrahedral geometry both shrink `ΔE` dramatically!",
      ],
      thinkDeeper:
        "Wait: if `d⁰` species are colourless, why is potassium manganate(VII) (`KMnO₄`, where `Mn` is `+7`, i.e., `3d⁰`!) one of the most intensely purple compounds in chemistry? Because `MnO₄⁻` does not rely on a `d–d` transition — instead, an electron jumps directly from a filled `O²⁻` ligand orbital into an empty `Mn` `3d` orbital (**ligand-to-metal charge transfer**, LMCT), a fully allowed transition ~1000× more intense than ordinary d–d bands!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Why does atomic radius decrease across Period 3 from Na to Cl?",
        back: "Nuclear charge (`Z`) increases across the period while electrons are added to the same principal shell (`n = 3`), so inner-shell shielding remains nearly constant. Effective nuclear charge (`Z_eff`) rises and pulls valence electrons closer.",
        level: "SL",
      },
      {
        front: "Explain the two dips in first ionization energy across Period 3 (Mg → Al and P → S).",
        back: "`Mg → Al`: Al's outermost electron is in a higher-energy `3p` sublevel partially shielded by `3s²`. `P → S`: S removes a **paired** `3p` electron experiencing **spin–pair repulsion**, unlike P's unpaired `3p³` electrons.",
        level: "SL",
      },
      {
        front: "Order the isoelectronic ions `O²⁻`, `F⁻`, `Na⁺`, `Mg²⁺`, `Al³⁺` from largest to smallest radius.",
        back: "`O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺`. All five have `10 e⁻` (`1s² 2s² 2p⁶`), so higher nuclear charge (`Z`) pulls the shell closer.",
        level: "SL",
      },
      {
        front: "Why is chlorine's first electron affinity (`−349 kJ mol⁻¹`) more exothermic than fluorine's (`−328 kJ mol⁻¹`)?",
        back: "Fluorine's tiny `2p` sublevel creates strong inter-electronic repulsion against an incoming electron, partially offsetting its greater nuclear attraction.",
        level: "SL",
      },
      {
        front: "Why does reactivity increase down Group 1 but decrease down Group 17?",
        back: "Down both groups, atomic radius and shielding increase. Group 1 metals react by **losing** an electron (easier as `IE₁` drops), whereas Group 17 halogens react by **gaining** an electron (harder as nuclear attraction weakens).",
        level: "SL",
      },
      {
        front: "Classify all seven Period 3 oxides (`Na₂O` through `SO₃`) as basic, amphoteric, or acidic.",
        back: "**Basic:** `Na₂O` (strong), `MgO` (weak). **Amphoteric:** `Al₂O₃` (insoluble in water). **Acidic:** `SiO₂` (insoluble in water), `P₄O₁₀`, `SO₂`, `SO₃`.",
        level: "SL",
      },
      {
        front: "Write the balanced reactions of `P₄O₁₀` and `SO₃` with water, and `Al₂O₃` with both `HCl` and `NaOH`.",
        back: "`P₄O₁₀ + 6H₂O → 4H₃PO₄`; `SO₃ + H₂O → H₂SO₄`; `Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O`; `Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄`.",
        level: "SL",
      },
      {
        front: "What are the exceptional oxidation states of oxygen in peroxides and `OF₂`, and hydrogen in metal hydrides?",
        back: "`O = −1` in peroxides (`H₂O₂`, `Na₂O₂`); `O = +2` in `OF₂` (F is `−1`); `H = −1` in metal hydrides (`NaH`, `CaH₂`).",
        level: "SL",
      },
      {
        front: "Why is zinc NOT a transition element, whereas copper IS?",
        back: "Neither `Zn` (`[Ar] 3d¹⁰ 4s²`) nor its only ion `Zn²⁺` (`[Ar] 3d¹⁰`) has an incomplete `d` sublevel. Copper forms `Cu²⁺` (`[Ar] 3d⁹`), which has an incomplete `3d` sublevel.",
        level: "HL",
      },
      {
        front: "Write the condensed electron configurations of `Cr`, `Cu`, `Fe²⁺`, and `Fe³⁺`.",
        back: "`Cr`: `[Ar] 3d⁵ 4s¹`; `Cu`: `[Ar] 3d¹⁰ 4s¹`; `Fe²⁺`: `[Ar] 3d⁶`; `Fe³⁺`: `[Ar] 3d⁵` (`4s` electrons are always lost before `3d`!).",
        level: "HL",
      },
      {
        front: "Define ligand and coordination number, and give the coordination number of `[Fe(EDTA)]⁻`.",
        back: "A **ligand** is a Lewis base that donates at least one lone pair to form a coordinate bond with a central metal ion (Lewis acid). **Coordination number** is the total number of coordinate bonds (`[Fe(EDTA)]⁻` has `CN = 6` because `EDTA⁴⁻` is hexadentate).",
        level: "HL",
      },
      {
        front: "State the four-step IB explanation for why aqueous `[Ti(H₂O)₆]³⁺` is purple.",
        back: "(1) `Ti³⁺` (`3d¹`) has an incomplete `d` sublevel. (2) `H₂O` ligands split the `3d` orbitals into two energy levels (`ΔE`). (3) An electron absorbs visible **green** light (`~510 nm`) to undergo a `d–d` transition. (4) The **complementary** purple/violet light is **transmitted**.",
        level: "HL",
      },
      {
        front: "Recall the IB spectrochemical series from weakest to strongest field ligand.",
        back: "`I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CO ≈ CN⁻`. Moving right increases `ΔE` and decreases absorbed wavelength `λ`.",
        level: "HL",
      },
      {
        front: "List the four factors that alter the crystal field splitting energy `ΔE` of a transition-metal complex.",
        back: "(1) **Identity of the metal ion** (nuclear charge / period), (2) **Oxidation state** of the metal ion, (3) **Identity of the ligand** (spectrochemical series), (4) **Coordination geometry** (e.g. octahedral vs tetrahedral).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Across a period: `Z` ↑, same shell, core shielding ≈ constant → `Z_eff` ↑ → radius ↓, `IE₁` ↑, `χ` ↑.",
      "Down a group: new shell added, distance & shielding ↑ → radius ↑, `IE₁` ↓, `χ` ↓.",
      "Isoelectronic ions have identical electron counts: the ion with the highest proton count (`Z`) is the smallest.",
      "Period 3 oxides: `Na₂O`/`MgO` basic → `Al₂O₃` amphoteric → `SiO₂`/`P₄O₁₀`/`SO₂`/`SO₃` acidic.",
      "Unpolluted rain is `pH ≈ 5.6` (`H₂CO₃`); acid rain (`pH < 5.6`) comes from `SO₂`/`SO₃` and `NO₂`.",
      "Group 1 reactivity increases down the group (`2M + 2H₂O → 2MOH + H₂`); Group 17 oxidizing power decreases down the group (`F₂ > Cl₂ > Br₂ > I₂`).",
      "[HL] Transition-metal cations ALWAYS lose `4s` electrons before `3d` electrons; `Zn²⁺` (`3d¹⁰`) and `Sc³⁺` (`3d⁰`) are colourless and diamagnetic.",
      "[HL] Complex formation is a Lewis acid (metal cation) + Lewis base (ligand lone pair) coordinate-bonding interaction.",
      "[HL] Colour of transition complexes arises from `d–d` absorption of visible light (`ΔE = hc/λ`) and **transmission** of the **complementary** colour.",
      "[HL] Stronger-field ligands (`CN⁻ > NH₃ > H₂O > Cl⁻`) and higher metal oxidation states increase `ΔE`, shifting absorption to **shorter** wavelengths.",
    ],
    misconceptions: [
      {
        wrong: "Atoms get larger across a period because they have more protons and electrons.",
        right: "Extra electrons enter the **same** outer shell, so shielding hardly increases while nuclear charge rises — pulling the electron cloud **closer** and making atoms **smaller** across a period.",
        level: "SL",
      },
      {
        wrong: "`Al₂O₃` and `SiO₂` are neutral oxides because they leave water at pH 7.",
        right: "They leave water at pH 7 only because they are **insoluble** in water. `Al₂O₃` is **amphoteric** (reacts with both acids and bases) and `SiO₂` is **acidic** (reacts with hot concentrated alkali).",
        level: "SL",
      },
      {
        wrong: "Oxygen ALWAYS has an oxidation state of −2 and hydrogen ALWAYS has +1.",
        right: "Oxygen is `−1` in peroxides (`H₂O₂`, `Na₂O₂`) and `+2` in `OF₂`; hydrogen is `−1` in metal hydrides (`NaH`, `CaH₂`).",
        level: "SL",
      },
      {
        wrong: "When iron (`[Ar] 3d⁶ 4s²`) forms `Fe²⁺`, it loses two `3d` electrons to become `[Ar] 3d⁴ 4s²`.",
        right: "**`4s` electrons are always removed before `3d` electrons**: `Fe²⁺` is `[Ar] 3d⁶` and `Fe³⁺` is `[Ar] 3d⁵`.",
        level: "HL",
      },
      {
        wrong: "The coordination number of `[Co(en)₃]³⁺` is 3 because there are 3 ligands.",
        right: "Coordination number counts **coordinate bonds**, not ligand molecules. Each `en` ligand is bidentate (2 donor atoms), so `CN = 3 × 2 = 6`.",
        level: "HL",
      },
      {
        wrong: "A blue copper(II) solution looks blue because excited `d` electrons fall back down and emit blue light.",
        right: "The complex **absorbs** complementary **orange** light during `d–d` excitation and **transmits** the remaining unabsorbed **blue** light; excited electrons relax predominantly by non-radiative vibrational heat loss, NOT visible emission!",
        level: "HL",
      },
      {
        wrong: "Stronger-field ligands produce a larger `ΔE` and therefore absorb a LONGER wavelength of light.",
        right: "Energy and wavelength are **inversely** proportional (`ΔE = hc/λ`): larger `ΔE` means **higher frequency** and **shorter** absorbed wavelength.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing 'nuclear charge increases' without also mentioning **constant shielding / same main energy level** — IB markschemes require both halves for full credit across a period.",
      "Writing `Na₂O + H₂O → NaOH` unbalanced instead of `Na₂O + H₂O → 2NaOH`, or writing `P₂O₅` when the IB syllabus specifies molecular `P₄O₁₀` (`P₄O₁₀ + 6H₂O → 4H₃PO₄`).",
      "Forgetting the sign **before** the number in oxidation states (write `+6`, not `6+`, which denotes an ionic charge) or omitting Roman numerals in IUPAC stock names.",
      "Explaining the `P → S` `IE₁` dip by saying 'half-filled `p³` is magically stable' without stating **spin–pair electron repulsion** in sulfur's doubly occupied `3p` orbital.",
      "[HL] Claiming 'transition metals have incomplete `d` orbitals' without clarifying that copper qualifies via its **`Cu²⁺` (`3d⁹`) cation**, whereas zinc fails in **both** `Zn` (`3d¹⁰ 4s²`) and `Zn²⁺` (`3d¹⁰`).",
      "[HL] Confusing the **absorbed** colour with the **observed** colour on the IB colour wheel — always cross straight through the centre to the opposite sector.",
      "[HL] Forgetting to convert `λ` from `nm` to `m` (`× 10⁻⁹`), or forgetting to multiply by `N_A` and divide by `1000` when asked for `ΔE` in `kJ mol⁻¹` instead of `J` per photon.",
      "[HL] Writing 'ligands cause colour because electrons emit light' — IB examiners penalize 'emit' immediately; always write **absorb** + **transmit complementary colour**.",
    ],
    mnemonics: [
      {
        topic: "Period 3 Oxide Acid–Base Trend",
        device: "**N**ice **M**etals **A**re **S**uddenly **P**roducing **S**trong **A**cids",
        explanation: "`Na₂O, MgO` (Basic) → `Al₂O₃` (Amphoteric) → `SiO₂, P₄O₁₀, SO₂/SO₃` (Acidic).",
        level: "SL",
      },
      {
        topic: "Transition-Metal Ionization Order",
        device: "**4s First In, 4s First Out (FIFO)**",
        explanation: "The `4s` sublevel fills before `3d` in the Aufbau sequence and is ALWAYS emptied before `3d` when forming transition-metal cations.",
        level: "HL",
      },
      {
        topic: "IB Colour Wheel Complementary Pairs",
        device: "**R**ed ↔ **G**reen · **O**range ↔ **B**lue · **Y**ellow ↔ **V**iolet (Christmas, Sunset Ocean, Bees on Violets)",
        explanation: "Each pair sits directly opposite on the 6-sector IB Data Booklet colour wheel: absorb one, transmit the other.",
        level: "HL",
      },
      {
        topic: "Spectrochemical Series Landmarks",
        device: "**Halides < OH⁻ < H₂O < NH₃ < en < CO ≈ CN⁻** ('Halides Wash Ammonia Clean')",
        explanation: "Weak-field π-donor halides on the left (`small ΔE`, long absorbed `λ`); neutral `H₂O`/`NH₃` in the middle; strong-field `CO`/`CN⁻` on the right (`large ΔE`, short absorbed `λ`).",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Acid Rain & Flue-Gas Desulfurization",
        detail: "Coal-fired power stations emit `SO₂` (acidic Period 3 oxide) that oxidizes to `SO₃` and dissolves to form `H₂SO₄` rain (`pH < 5.6`). Scrubbers spray basic `CaO`/`CaCO₃` slurry to neutralize `SO₂` into solid gypsum (`CaSO₄·2H₂O`).",
        emoji: "🌧️",
      },
      {
        title: "EDTA Chelation Therapy & Water Softening",
        detail: "Hexadentate `EDTA⁴⁻` wraps tightly around toxic heavy-metal ions (`Pb²⁺`, `Hg²⁺`) as a 1:1 water-soluble octahedral chelate for medical detoxification, and binds `Ca²⁺`/`Mg²⁺` in food preservatives and analytical hard-water titrations.",
        emoji: "🧪",
      },
      {
        title: "Cisplatin Chemotherapy (`[Pt(NH₃)₂Cl₂]`)",
        detail: "The square-planar `Pt(II)` complex cisplatin swaps its `Cl⁻` ligands inside tumour cells to form coordinate bonds with two adjacent guanine nitrogen atoms on DNA, kinking the helix and triggering cancer-cell death.",
        emoji: "💊",
      },
      {
        title: "Rubies vs Emeralds: Same `Cr³⁺` Ion, Different `ΔE`",
        detail: "Both ruby (red) and emerald (green) owe their vibrant colour to trace `Cr³⁺` (`3d³`) ions in octahedral oxide lattices! Because the `Al₂O₃` lattice in ruby squeezes oxide ligands tighter than the beryl silicate in emerald, ruby has a larger `ΔE`, shifting absorption from red-orange to green-violet!",
        emoji: "💎",
      },
      {
        title: "Haemoglobin & Carbon Monoxide Poisoning",
        detail: "Haemoglobin carries `O₂` reversibly on an octahedral `Fe²⁺` complex. Strong-field `CO` binds `Fe²⁺` ~200× more strongly than `O₂`, locking the coordination site and preventing oxygen transport to tissues.",
        emoji: "🩸",
      },
    ],
    videos: [
      {
        title: "IB Chemistry S3.1 — Periodic Trends & Effective Nuclear Charge",
        channel: "MSJChem / IB Chemistry Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+S3.1+periodic+trends+effective+nuclear+charge",
      },
      {
        title: "IB Chemistry S3.1 — Period 3 Oxides Acid-Base Reactions",
        channel: "Richard Thornley / MSJChem Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+Period+3+oxides+acid+base+reactions",
      },
      {
        title: "IB Chemistry HL — Transition Metals, Ligands & Complex Ions",
        channel: "MSJChem / IB Chemistry HL Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+transition+metals+complex+ions+ligands",
      },
      {
        title: "IB Chemistry HL — Crystal Field d-Orbital Splitting & Colour Wheel",
        channel: "IB Chemistry HL Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+d+orbital+splitting+colour+complex+ions",
      },
    ],
    formulas: [
      {
        name: "Effective nuclear charge (qualitative estimate)",
        formula: "{{Z_eff ≈ Z - S}}",
        note: "Z = proton number; S ≈ core inner-shell electrons.",
        level: "SL",
      },
      {
        name: "First ionization energy equation",
        formula: "X(g) → X⁺(g) + e⁻  (ΔH = IE₁ > 0)",
        note: "Must be gaseous atoms losing 1 mole of electrons.",
        level: "SL",
      },
      {
        name: "First electron affinity equation",
        formula: "X(g) + e⁻ → X⁻(g)  (ΔH = EA₁)",
        note: "Usually exothermic (negative); 2nd EA is always endothermic.",
        level: "SL",
      },
      {
        name: "Group 1 alkali metal + water",
        formula: "2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g)",
        note: "Reactivity increases Li < Na < K < Rb < Cs.",
        level: "SL",
      },
      {
        name: "Period 3 basic & acidic oxide hydrolyses",
        formula: "Na₂O + H₂O → 2NaOH  |  P₄O₁₀ + 6H₂O → 4H₃PO₄  |  SO₃ + H₂O → H₂SO₄",
        note: "Al₂O₃ and SiO₂ are insoluble in water.",
        level: "SL",
      },
      {
        name: "Amphoteric Al₂O₃ reactions",
        formula: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O  |  Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄",
        note: "Demonstrates both basic and acidic behaviour.",
        level: "SL",
      },
      {
        name: "Complex ion overall charge balance",
        formula: "{{q_complex = OS_metal + Σq_ligands}}",
        note: "Neutral ligands (H₂O, NH₃, CO, en) contribute 0; Cl⁻, CN⁻, OH⁻ contribute −1.",
        level: "HL",
      },
      {
        name: "Coordination number",
        formula: "CN = Σ (number of each ligand × denticity)",
        note: "en = 2, C₂O₄²⁻ = 2, EDTA⁴⁻ = 6.",
        level: "HL",
      },
      {
        name: "Crystal field photon absorption energy",
        formula: "{{ΔE = h * ν = (h * c) / λ}}",
        note: "h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, λ in metres.",
        level: "HL",
      },
      {
        name: "Molar crystal field splitting energy (kJ mol⁻¹)",
        formula: "{{ΔE_molar = (N_A * h * c) / (1000 * λ)}}",
        note: "N_A = 6.02 × 10²³ mol⁻¹; quick check: ΔE ≈ 119 700 / λ(nm).",
        level: "HL",
      },
    ],
  },
};
