import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "r2-amount-rate-extent",
  title: "Reactivity 2: Stoichiometry, Kinetics & Chemical Equilibrium",
  strand: "Reactivity 1–2: Energetics, Rate & Extent",
  icon: "⚡",
  level: "SL",
  summary:
    "Master how much product a reaction can yield (stoichiometry, limiting reactants, atom economy, titrations), how fast it runs (collision theory, Maxwell–Boltzmann, HL rate laws, mechanisms & Arrhenius), and how far it goes (dynamic equilibrium, Le Chatelier, HL ICE tables & ΔG⊖ = −RT ln K).",
  intro:
    "Every chemical process — from manufacturing fertiliser in the Haber process to digesting a meal — raises three quantitative questions: **how much** product is possible (R2.1), **how fast** it forms (R2.2), and **how far** the reaction proceeds before stopping at equilibrium (R2.3). Reactivity 2 unites these three pillars so you can predict yields, decode reaction mechanisms, and optimise industrial reactors with precision.",
  guide: [
    {
      id: "stoichiometry-titrations",
      heading: "R2.1 Limiting Reactants, Yield, Atom Economy & Titrations",
      level: "SL",
      discovery: {
        problem:
          "An engineer mixes `10.0 g` of nitrogen gas (`N₂`, `M = 28.02 g mol⁻¹`) with `10.0 g` of hydrogen gas (`H₂`, `M = 2.02 g mol⁻¹`) to make ammonia (`N₂(g) + 3H₂(g) → 2NH₃(g)`). Why is it mathematically impossible to obtain `20.0 g` of `NH₃`, even if the reaction went 100% to completion? And why can a synthesis achieve a 100% percentage yield yet still waste half its starting mass as unwanted by-products?",
        idea:
          "Chemical equations count **moles**, never grams. `10.0 g` of `N₂` is only `0.357 mol`, whereas `10.0 g` of `H₂` is `4.95 mol` — far more than the `3 × 0.357 = 1.07 mol` required. Once `N₂` runs out, excess `H₂` is left unreacted, capping the maximum ammonia mass at `0.714 mol × 17.04 g mol⁻¹ = 12.2 g`. Separately, **percentage yield** compares actual vs theoretical product, whereas **atom economy** measures what percentage of reactant atoms are built into the *desired* product rather than co-products.",
      },
      body:
        "### Balancing Equations & Net Ionic Equations\n" +
        "A balanced chemical equation conserves both **atoms** and **total charge**, and specifies physical states: `(s)`, `(l)`, `(g)`, `(aq)`. In aqueous reactions, ions that remain unchanged on both sides are **spectator ions**; cancelling them leaves the **net ionic equation**, e.g. `H⁺(aq) + OH⁻(aq) → H₂O(l)` for any strong acid–strong base neutralisation.\n\n" +
        "### Limiting Reactant, Theoretical Yield & Percentage Yield\n" +
        "When reactants are not mixed in exact stoichiometric proportions, the **limiting reactant** is consumed completely first and determines the **theoretical yield** of every product.\n\n" +
        "- **Quick identification test:** convert each reactant to moles `n` and divide by its stoichiometric coefficient (`{{n / \"coeff\"}}`). The reactant with the **smallest quotient** is limiting.\n" +
        "- **Percentage yield:** `{{ \"% yield\" = (\"experimental yield\" / \"theoretical yield\") * 100% }}`.\n" +
        "- Practical yields are usually below 100% because of incomplete reaction (reversible equilibrium), competing side reactions, impure reagents, or mechanical losses during filtration, transfer, and recrystallisation.\n\n" +
        "### Atom Economy & Green Chemistry\n" +
        "Industrial chemists minimise waste by maximising **percentage atom economy**, calculated purely from the balanced equation and molar masses:\n\n" +
        "`{{ \"% atom economy\" = (\"total molar mass of desired product\" / \"total molar mass of all reactants\") * 100% }}`\n\n" +
        "- **Addition reactions** (e.g. `CH₂=CH₂ + H₂O → CH₃CH₂OH`) form a single product and therefore have **100% atom economy**.\n" +
        "- **Substitution, elimination, and fermentation** reactions generate stoichiometric co-products (`CO₂`, `NaBr`, `H₂O`), lowering atom economy even if percentage yield is 100%.\n\n" +
        "### Reacting Gas Volumes (Avogadro's Law)\n" +
        "At constant temperature and pressure, equal volumes of any ideal gases contain equal numbers of moles (`V ∝ n`). Therefore, for gases measured under the same `T` and `p`, the **volume ratio equals the mole ratio**. At IB STP (`273 K` and `100 kPa`), the molar volume of an ideal gas is `V_m = 22.7 dm³ mol⁻¹`.\n\n" +
        "### Volumetric Analysis: Direct & Back-Titrations\n" +
        "In a **titration**, a solution of accurately known concentration (**standard solution**) is delivered from a burette into a measured pipette aliquot until the equivalence point is signalled by an indicator or pH meter. Always average only **concordant titres** (within `0.10 cm³`) and convert volumes from `cm³` to `dm³` by dividing by `1000`:\n\n" +
        "`{{n = c * V}}` (with `c` in `mol dm⁻³` and `V` in `dm³`).\n\n" +
        "Use a **back-titration** when a sample is insoluble (e.g. `CaCO₃` in limestone or antacid tablets), reacts too slowly for a direct endpoint, or is volatile:\n" +
        "1. React the sample with a **known excess** of standard reagent A (`n_total(A)`).\n" +
        "2. Titrate the **unreacted excess** of A with standard reagent B to find `n_excess(A)`.\n" +
        "3. Subtract: `n_reacted(A) = n_total(A) − n_excess(A)`, then apply the mole ratio to find moles of analyte.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 265" role="img" aria-label="Stoichiometry mole bridge and back-titration pathway diagram">' +
        '<rect width="640" height="265" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">The Stoichiometry Mole Bridge &amp; Back-Titration Subtraction</text>' +
        '<rect x="20" y="42" width="142" height="72" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>' +
        '<text x="91" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0369a1">Known Substance A</text>' +
        '<text x="91" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">m / M  |  c × V(dm³)</text>' +
        '<text x="91" y="99" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">V_gas / 22.7 (STP)</text>' +
        '<line x1="162" y1="78" x2="210" y2="78" stroke="#0284c7" stroke-width="2.2"/>' +
        '<polygon points="210,73 220,78 210,83" fill="#0284c7"/>' +
        '<rect x="222" y="46" width="196" height="64" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
        '<text x="320" y="69" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#92400e">Stoichiometric Mole Bridge</text>' +
        '<text x="320" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#78350f">n(A) → multiply by (b / a) → n(B)</text>' +
        '<text x="320" y="102" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#92400e">Limiting = smallest n / coeff</text>' +
        '<line x1="418" y1="78" x2="466" y2="78" stroke="#059669" stroke-width="2.2"/>' +
        '<polygon points="466,73 476,78 466,83" fill="#059669"/>' +
        '<rect x="478" y="42" width="142" height="72" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.6"/>' +
        '<text x="549" y="64" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d">Target Substance B</text>' +
        '<text x="549" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">m = n × M  |  c = n / V</text>' +
        '<text x="549" y="99" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">% Yield = exp / theor × 100</text>' +
        '<line x1="20" y1="134" x2="620" y2="134" stroke="#cbd5e1" stroke-dasharray="5 4"/>' +
        '<text x="320" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Back-Titration Bar Model (Excess Reagent A)</text>' +
        '<rect x="40" y="170" width="560" height="34" rx="6" fill="#e2e8f0" stroke="#64748b"/>' +
        '<rect x="40" y="170" width="350" height="34" rx="6" fill="#3b82f6" opacity="0.88"/>' +
        '<rect x="390" y="170" width="210" height="34" rx="6" fill="#f97316" opacity="0.88"/>' +
        '<text x="215" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#ffffff">n_reacted(A) — consumed by sample</text>' +
        '<text x="495" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#ffffff">n_excess(A) — found by titration</text>' +
        '<text x="320" y="226" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#0f172a">Total added n_total(A) = n_reacted(A) + n_excess(A)  ⇒  n_reacted(A) = n_total(A) − n_excess(A)</text>' +
        '<text x="320" y="248" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#475569">Atom Economy = [Σ M(desired) / Σ M(all reactants)] × 100%  (100% for addition reactions)</text>' +
        '</svg>',
      diagramCaption:
        "Every stoichiometry problem crosses the mole bridge via balanced coefficients; back-titrations split a known excess of reagent into the reacted fraction and the titrated leftover.",
      workedExamples: [
        {
          title: "Limiting Reactant, Percentage Yield & Atom Economy in Iron Extraction",
          problem:
            "Iron(III) oxide reacts with carbon monoxide in a blast furnace: `Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)`. A mixture of `31.94 g` of `Fe₂O₃` (`M = 159.70 g mol⁻¹`) and `14.01 g` of `CO` (`M = 28.01 g mol⁻¹`) produces `15.83 g` of `Fe` (`M = 55.85 g mol⁻¹`). Identify the limiting reactant, calculate the percentage yield of `Fe`, and calculate the percentage atom economy for iron production.",
          steps: [
            "Convert each reactant to moles: `n(Fe₂O₃) = {{31.94 / 159.70}} = 0.2000 mol`; `n(CO) = {{14.01 / 28.01}} = 0.5002 mol`.",
            "Divide by stoichiometric coefficients: `Fe₂O₃`: `{{0.2000 / 1}} = 0.2000`; `CO`: `{{0.5002 / 3}} = 0.1667`. Since `0.1667 < 0.2000`, `CO` is the **limiting reactant**.",
            "Calculate theoretical moles and mass of `Fe` from `CO` (`3 CO : 2 Fe`): `n(Fe) = {{(2/3) * 0.5002}} = 0.3335 mol`; `m_theor(Fe) = 0.3335 × 55.85 = 18.62 g`.",
            "Percentage yield: `{{(15.83 / 18.62) * 100}} = 85.0%`.",
            "Percentage atom economy: total reactant molar mass `= 159.70 + 3(28.01) = 243.73 g mol⁻¹`; desired product `2 Fe = 2(55.85) = 111.70 g mol⁻¹`; atom economy `= {{(111.70 / 243.73) * 100}} = 45.8%`.",
          ],
          answer: "Limiting reactant = CO; percentage yield = 85.0%; atom economy = 45.8%",
          yourTurn: {
            question:
              "Calculate the percentage atom economy for producing ethanol by glucose fermentation: `C₆H₁₂O₆(aq) → 2C₂H₅OH(aq) + 2CO₂(g)`, given `M(C₆H₁₂O₆) = 180.18 g mol⁻¹` and `M(C₂H₅OH) = 46.08 g mol⁻¹`. Give your answer to 3 significant figures (without the % sign).",
            answer: { type: "number", value: 51.1, tolerance: 0.2, display: "51.1%" },
            solution:
              "Desired product mass per mole of glucose `= 2 × 46.08 = 92.16 g mol⁻¹`. Atom economy `= (92.16 / 180.18) × 100% = 51.1%`.",
          },
        },
        {
          title: "Back-Titration of Impure Limestone",
          problem:
            "A `0.600 g` sample of impure limestone (`CaCO₃`, `M = 100.09 g mol⁻¹`) is dissolved in `50.0 cm³` of `0.250 mol dm⁻³ HCl(aq)` (excess). The unreacted acid requires `22.50 cm³` of `0.100 mol dm⁻³ NaOH(aq)` for complete neutralisation. Calculate the percentage by mass of `CaCO₃` in the limestone sample.",
          steps: [
            "Write balanced equations: `CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)` and `HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)`.",
            "Total initial moles of `HCl`: `n_total(HCl) = 0.250 × {{50.0 / 1000}} = 0.01250 mol`.",
            "Excess `HCl` titrated (`1:1` with `NaOH`): `n_excess(HCl) = n(NaOH) = 0.100 × {{22.50 / 1000}} = 0.002250 mol`.",
            "Moles of `HCl` that reacted with `CaCO₃`: `n_reacted(HCl) = 0.01250 − 0.002250 = 0.01025 mol`.",
            "From the `1:2` mole ratio: `n(CaCO₃) = {{0.01025 / 2}} = 0.005125 mol`, so `m(CaCO₃) = 0.005125 × 100.09 = 0.5130 g`.",
            "Percentage purity `= {{(0.5130 / 0.600) * 100}} = 85.5%`.",
          ],
          answer: "85.5% CaCO₃",
          yourTurn: {
            question:
              "In a direct titration, `25.0 cm³` of `H₂SO₄(aq)` is completely neutralised by `32.0 cm³` of `0.125 mol dm⁻³ NaOH(aq)` according to `H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)`. Calculate the concentration of `H₂SO₄(aq)` in `mol dm⁻³` to 3 significant figures.",
            answer: { type: "number", value: 0.08, tolerance: 0.001, display: "0.0800 mol dm⁻³" },
            solution:
              "`n(NaOH) = 0.125 × 0.0320 = 0.00400 mol`. Mole ratio `H₂SO₄ : NaOH = 1 : 2`, so `n(H₂SO₄) = 0.00200 mol`. `c(H₂SO₄) = 0.00200 / 0.0250 = 0.0800 mol dm⁻³`.",
          },
        },
      ],
      keyPoints: [
        "Always divide moles by the stoichiometric coefficient (`n / coeff`) to find the limiting reactant — never compare raw masses.",
        "Percentage yield evaluates practical efficiency (`exp / theor × 100%`), whereas atom economy evaluates theoretical green-chemistry efficiency (`ΣM_desired / ΣM_reactants × 100%`).",
        "For gases at identical temperature and pressure, volume ratios equal mole ratios (Avogadro's Law).",
        "In back-titrations, always subtract `n_excess` from `n_total` BEFORE applying the stoichiometric ratio to the analyte.",
      ],
      whyItWorks:
        "Mass conservation demands that atoms are rearranged rather than created or destroyed. Every stoichiometric ratio is simply a book-keeping identity enforcing atom balance, while atom economy highlights how much conserved reactant mass ends up inside useful bonds rather than waste co-products.",
      strategies: [
        "Write the balanced equation first and list given values underneath each species so coefficients cannot be missed.",
        "Convert `cm³` to `dm³` immediately (`÷ 1000`) and keep extra guard digits until the final rounding step.",
        "Check if your final percentage yield or purity is `≤ 100%`; a value above 100% flags either an inverted fraction or wet/impure product.",
      ],
      thinkDeeper:
        "If an industrial process has a low atom economy (say 45%) because it produces a valuable co-product that can be sold or recycled into another reactor, why might green chemists still prefer it over a 100% atom-economy route that requires toxic solvents and huge energy inputs?",
    },
    {
      id: "collision-theory-kinetics",
      heading: "R2.2 Collision Theory, Maxwell–Boltzmann & Measuring Rate",
      level: "SL",
      discovery: {
        problem:
          "Raising a gas mixture from `300 K` to `310 K` increases the average kinetic energy of molecules by only `3.3%` (`310 / 300`) and their average speed by only `1.6%` (`√(310/300)`). Yet many reactions **double** in rate for every `10 K` rise! How can a tiny `1.6%` increase in collision frequency double the reaction rate?",
        idea:
          "Only a tiny high-energy tail of molecules has kinetic energy `E ≥ E_a`. Raising the temperature flattens and shifts the Maxwell–Boltzmann energy distribution to the right, causing the **fraction of particles with `E ≥ E_a`** in that exponential tail to roughly double — a far bigger effect than the modest rise in total collision frequency.",
      },
      body:
        "### Defining & Measuring Reaction Rate\n" +
        "The **rate of reaction** is the change in concentration of a reactant or product per unit time (always expressed as a positive quantity, units `mol dm⁻³ s⁻¹`):\n\n" +
        "`{{ \"rate\" = - (Delta [\"R\"]) / (Delta t) = + (Delta [\"P\"]) / (Delta t) }}`\n\n" +
        "For a balanced reaction `aA + bB → cC + dD`, the rates of individual species scale with their coefficients: `{{ -(1/a) (Delta [\"A\"])/(Delta t) = +(1/c) (Delta [\"C\"])/(Delta t) }}`. On a concentration–time (or gas volume–time) graph:\n" +
        "- The **instantaneous rate** at time `t` is the magnitude of the **gradient of the tangent** at `t`.\n" +
        "- The **initial rate** is the gradient of the tangent at `t = 0` (steepest, because reactant concentration is highest).\n" +
        "- As reactants are consumed, the gradient decreases until the curve flattens horizontally when the limiting reactant runs out.\n\n" +
        "### Choosing an Experimental Rate Technique\n" +
        "| Property Measured | Best Used When… | Key Precaution |\n" +
        "|---|---|---|\n" +
        "| Gas volume (gas syringe) | Any reaction evolving a gas | Prevent leaks; note `CO₂` is slightly soluble in water |\n" +
        "| Mass loss on top-pan balance | A dense gas (`CO₂`, `O₂`) escapes | Loose cotton-wool plug stops acid spray; unsuitable for light `H₂` |\n" +
        "| Colorimetry (absorbance) | A coloured reactant/product (`I₂`, `Br₂`, `MnO₄⁻`) changes | Use complementary filter; calibrate via Beer–Lambert law (`A ∝ c`) |\n" +
        "| Electrical conductivity | Total concentration/mobility of ions changes | Keep temperature constant (ion mobility depends on `T`) |\n" +
        "| Clock reaction (`1/t` proxy) | Sharp visual endpoint (`S` precipitate or blue-black starch–`I₂`) | Measures *average* initial rate only if endpoint represents `< 10%` reaction |\n\n" +
        "### Collision Theory & The Five Rate Factors\n" +
        "Particles react only during **successful (effective) collisions**, which require BOTH:\n" +
        "1. Kinetic energy equal to or greater than the **activation energy** (`E ≥ E_a`), to break/weaken reactant bonds and form the transition state.\n" +
        "2. Appropriate **collision geometry (steric orientation)** so reactive sites align.\n\n" +
        "- **Concentration / gas pressure:** more particles per unit volume → higher frequency of collisions → proportionally higher frequency of successful collisions.\n" +
        "- **Surface area (solids):** grinding a solid into powder exposes more surface particles → higher collision frequency.\n" +
        "- **Temperature:** increases average kinetic energy (`E_k ∝ T`), raising collision frequency slightly AND dramatically increasing the **proportion of particles with `E ≥ E_a`** (dominant effect).\n" +
        "- **Catalyst:** provides an **alternative reaction pathway with a lower activation energy (`E_a(cat) < E_a`)**, increasing the fraction of particles with `E ≥ E_a(cat)` without being chemically consumed.\n\n" +
        "### Features of the Maxwell–Boltzmann Distribution\n" +
        "- Starts at the origin `(0, 0)` — zero particles have zero kinetic energy.\n" +
        "- Asymmetric curve with a peak at the **most probable energy (`E_mp`)**; the **mean energy** lies slightly to the right of `E_mp`.\n" +
        "- Approaches the energy axis asymptotically at high energy (never touches it).\n" +
        "- **Total area under the curve** equals the total number of particles (remains constant when `T` changes at fixed `n`).\n" +
        "- **Temperature increase (`T₂ > T₁`):** peak shifts right and **drops lower** (to preserve area), while the high-energy tail rises so the area past `E_a` grows sharply.\n" +
        "- **Catalyst:** leaves the curve completely unchanged and shifts the vertical `E_a` line to the **left**, increasing the shaded reactive area.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 275" role="img" aria-label="Maxwell-Boltzmann kinetic energy distribution at T1 and higher temperature T2 with catalysed and uncatalysed activation energies">' +
        '<rect width="640" height="275" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Maxwell–Boltzmann Distribution: Temperature &amp; Catalyst Effects</text>' +
        '<line x1="68" y1="228" x2="600" y2="228" stroke="#334155" stroke-width="2"/>' +
        '<line x1="68" y1="228" x2="68" y2="42" stroke="#334155" stroke-width="2"/>' +
        '<polygon points="600,224 610,228 600,232" fill="#334155"/>' +
        '<polygon points="64,42 68,32 72,42" fill="#334155"/>' +
        '<text x="340" y="258" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Kinetic Energy (E)</text>' +
        '<text x="24" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 24 138)">Number of particles</text>' +
        '<path d="M 355 228 L 355 156 C 400 176, 465 206, 588 221 L 588 228 Z" fill="#10b981" opacity="0.22"/>' +
        '<path d="M 445 228 L 445 186 C 485 202, 535 215, 588 221 L 588 228 Z" fill="#ef4444" opacity="0.30"/>' +
        '<path d="M 68 228 C 102 224, 138 64, 192 64 C 248 64, 295 162, 375 204 C 440 222, 515 225, 588 226" fill="none" stroke="#2563eb" stroke-width="2.8"/>' +
        '<path d="M 68 228 C 118 225, 178 106, 258 106 C 335 106, 395 170, 468 199 C 515 214, 555 219, 588 222" fill="none" stroke="#ea580c" stroke-width="2.8"/>' +
        '<line x1="355" y1="54" x2="355" y2="228" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<line x1="445" y1="54" x2="445" y2="228" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<text x="355" y="244" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#047857">Ea (catalysed)</text>' +
        '<text x="445" y="244" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Ea (uncat.)</text>' +
        '<text x="192" y="54" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">T₁ (cooler)</text>' +
        '<text x="275" y="96" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#c2410c">T₂ &gt; T₁ (hotter)</text>' +
        '<rect x="462" y="48" width="142" height="58" rx="8" fill="#ffffff" stroke="#cbd5e1"/>' +
        '<rect x="472" y="59" width="12" height="12" rx="2" fill="#10b981" opacity="0.45"/>' +
        '<text x="490" y="69" font-family="system-ui,sans-serif" font-size="10" fill="#0f172a">Extra particles (cat.)</text>' +
        '<rect x="472" y="79" width="12" height="12" rx="2" fill="#ef4444" opacity="0.50"/>' +
        '<text x="490" y="89" font-family="system-ui,sans-serif" font-size="10" fill="#0f172a">Particles E ≥ Ea (T₂)</text>' +
        '<text x="68" y="243" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#334155">0</text>' +
        '</svg>',
      diagramCaption:
        "Raising T shifts the Maxwell–Boltzmann peak lower and rightward (same total area), enlarging the tail past E_a. A catalyst leaves the curve unchanged and shifts E_a leftward.",
      workedExamples: [
        {
          title: "Stoichiometric Reaction Rates from Concentration Data",
          problem:
            "Dinitrogen pentoxide decomposes according to `2N₂O₅(g) → 4NO₂(g) + O₂(g)`. Over an interval of `60.0 s`, `[N₂O₅]` decreases from `0.400 mol dm⁻³` to `0.280 mol dm⁻³`. Calculate the average rate of consumption of `N₂O₅`, the average rate of formation of `NO₂`, and the average rate of formation of `O₂`.",
          steps: [
            "Rate of consumption of `N₂O₅`: `{{ -Delta [\"N₂O₅\"] / Delta t = -(0.280 - 0.400) / 60.0 = 0.120 / 60.0 = 2.00 * 10^(-3) }}` `mol dm⁻³ s⁻¹`.",
            "Use stoichiometric coefficients (`2 N₂O₅ : 4 NO₂ : 1 O₂`): `NO₂` forms at twice the rate of `N₂O₅` disappearance → `2 × 2.00 × 10⁻³ = 4.00 × 10⁻³ mol dm⁻³ s⁻¹`.",
            "`O₂` forms at half the rate of `N₂O₅` disappearance → `0.5 × 2.00 × 10⁻³ = 1.00 × 10⁻³ mol dm⁻³ s⁻¹`.",
          ],
          answer: "N₂O₅: 2.00 × 10⁻³; NO₂: 4.00 × 10⁻³; O₂: 1.00 × 10⁻³ mol dm⁻³ s⁻¹",
          yourTurn: {
            question:
              "Marble chips react with excess acid: `CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)`. During the first `40.0 s`, `80.0 cm³` of `CO₂(g)` is collected in a gas syringe. Calculate the average rate of `CO₂` production in `cm³ s⁻¹`.",
            answer: { type: "number", value: 2, tolerance: 0.02, display: "2.00" },
            solution: "Average rate `= ΔV / Δt = 80.0 cm³ / 40.0 s = 2.00 cm³ s⁻¹`.",
          },
        },
        {
          title: "Comparing Gas-Volume Curves When Limiting Reactant Matches",
          problem:
            "Experiment 1 reacts excess magnesium ribbon with `50.0 cm³` of `1.00 mol dm⁻³ HCl(aq)` at `298 K`. Experiment 2 reacts excess magnesium ribbon with `25.0 cm³` of `2.00 mol dm⁻³ HCl(aq)` at `298 K`. Compare the initial gradient and final volume of `H₂(g)` on a volume–time graph.",
          steps: [
            "Calculate moles of limiting reactant `HCl` in both runs: Exp 1: `0.0500 × 1.00 = 0.0500 mol`; Exp 2: `0.0250 × 2.00 = 0.0500 mol`.",
            "Because `n(HCl)` is identical and `Mg` is in excess, both curves plateau at the **exact same final volume** of `H₂(g)`.",
            "However, Exp 2 has **double the initial `[HCl]`** (`2.00` vs `1.00 mol dm⁻³`), so particles collide more frequently and Exp 2 has a **steeper initial gradient**, reaching the plateau sooner.",
          ],
          answer: "Exp 2 has a steeper initial gradient and reaches the same final H₂ volume earlier",
        },
      ],
      keyPoints: [
        "Effective collisions require BOTH `E ≥ E_a` AND correct collision geometry (steric orientation).",
        "Higher temperature speeds up reactions primarily by increasing the **fraction of particles with `E ≥ E_a`**, not just collision frequency.",
        "Always check the **limiting reactant moles** before sketching the final plateau height of a product–time curve.",
        "A catalyst offers an **alternative pathway with a lower `E_a`**; it never alters `ΔH` or shifts the Maxwell–Boltzmann curve itself.",
      ],
      whyItWorks:
        "Thermal kinetic energy is randomly distributed among trillions of colliding particles according to statistical mechanics (`P(E ≥ E_a) ≈ e^(−E_a/RT)`). Because `E_a` sits far out in the exponential tail, even a small rightward shift of the distribution multiplies the reactive fraction dramatically.",
      strategies: [
        "When explaining rate changes in IB Paper 2, always write **frequency of successful collisions** (never just 'more collisions' without 'per unit time' or 'frequency').",
        "When sketching two Maxwell–Boltzmann curves, verify four examiner marks: both start at `(0,0)`, hotter peak is lower AND further right, curves cross once, and neither touches the x-axis.",
        "For curve-comparison questions (`V` vs `t`), answer TWO separate things: initial gradient (kinetics) and final plateau height (stoichiometry of limiting reactant).",
      ],
      thinkDeeper:
        "Why do solid catalysts (heterogeneous catalysis, such as Pt/Rh in catalytic converters or Fe in the Haber process) lose effectiveness if trace sulfur compounds adsorb irreversibly onto their active sites?",
    },
    {
      id: "rate-laws-mechanisms-arrhenius-hl",
      heading: "R2.2 Rate Equations, Mechanisms & The Arrhenius Equation",
      level: "HL",
      discovery: {
        problem:
          "Nitrogen dioxide reacts with fluorine gas: `2NO₂(g) + F₂(g) → 2NO₂F(g)`. Looking at the equation, you might expect `rate = k[NO₂]²[F₂]`. Yet experiments show `rate = k[NO₂][F₂]` — first order in `NO₂`, not second! How can two molecules of `NO₂` appear in the balanced equation while only one controls the rate?",
        idea:
          "The reaction does **not** occur in a single three-body collision! It proceeds in two elementary steps: a slow first step `NO₂ + F₂ → NO₂F + F•` (the **rate-determining step**), followed by a fast second step `NO₂ + F• → NO₂F`. The second `NO₂` reacts after the bottleneck, so it has zero effect on the overall speed.",
      },
      body:
        "### Rate Equations, Orders & Units of `k`\n" +
        "For `aA + bB → products`, the experimental **rate equation (rate law)** has the form:\n\n" +
        "`{{ \"rate\" = k [\"A\"]^m [\"B\"]^n }}`\n\n" +
        "- Exponents `m` and `n` are the **orders of reaction** with respect to `A` and `B`, determined **exclusively by experiment** (not from balanced coefficients). The **overall order** is `p = m + n`.\n" +
        "- The **rate constant `k`** is independent of concentration and changes ONLY with **temperature** or the addition of a **catalyst**.\n" +
        "- Units of `k` depend on overall order `p`: `mol^(1−p) dm^(3p−3) s⁻¹`:\n" +
        "  - `p = 0`: `mol dm⁻³ s⁻¹`  |  `p = 1`: `s⁻¹`  |  `p = 2`: `dm³ mol⁻¹ s⁻¹`  |  `p = 3`: `dm⁶ mol⁻² s⁻¹`.\n\n" +
        "### Graphical Signatures of 0th, 1st & 2nd Order\n" +
        "| Order `m` | `[A]` vs `t` Graph | `rate` vs `[A]` Graph | Half-life `t₁/₂` |\n" +
        "|---|---|---|---|\n" +
        "| Zero (`m = 0`) | Straight line downward (constant gradient `−k`) | Horizontal line (`rate = k`) | Decreases as `[A]` drops |\n" +
        "| First (`m = 1`) | Smooth exponential decay | Straight line through origin (gradient `k`) | **Constant** (`t₁/₂ = ln 2 / k`) |\n" +
        "| Second (`m = 2`) | Steeper curve flattening slowly | Upward parabola (`rate ∝ [A]²`) | Increases (doubles each half-life) |\n\n" +
        "### Reaction Mechanisms, Molecularity & Rate-Determining Step (RDS)\n" +
        "A reaction mechanism is a sequence of **elementary steps** whose sum equals the overall balanced equation. **Molecularity** (unimolecular, bimolecular, rarely termolecular) is the number of colliding species in a single elementary step.\n" +
        "- **Intermediates** are produced in an earlier step and consumed in a later step (never appear in the overall equation or final rate law).\n" +
        "- **Catalysts** are consumed in an earlier step and regenerated later (absent from the overall equation, but CAN appear in the rate law).\n" +
        "- **Case 1 (Slow Step 1 = RDS):** the rate law equals the rate of Step 1 directly.\n" +
        "- **Case 2 (Fast pre-equilibrium Step 1, Slow Step 2 = RDS):** write `rate = k₂[intermediate][reactant]`, then replace `[intermediate]` using Step 1's equilibrium expression `K₁ = [intermediate] / [reactants]`. The experimental orders match the stoichiometry of ALL species entering up to and including the RDS!\n\n" +
        "### The Arrhenius Equation & Graphical Determination of `E_a`\n" +
        "Svante Arrhenius quantified how `k` grows exponentially with absolute temperature `T` (in **Kelvin**):\n\n" +
        "`{{ k = A * e^(-E_a / (R T)) }}`\n\n" +
        "- `A` is the **Arrhenius (pre-exponential) factor**, incorporating total collision frequency and the steric/orientation probability (same units as `k`).\n" +
        "- `e^(−E_a/RT)` is the fraction of collisions possessing `E ≥ E_a` (`R = 8.31 J K⁻¹ mol⁻¹`, `E_a` in **`J mol⁻¹`**!).\n" +
        "- Taking natural logarithms gives the straight-line form `y = mx + c`:\n\n" +
        "`{{ ln(k) = -(E_a / R) * (1 / T) + ln(A) }}`\n\n" +
        "Plotting `ln k` against `1/T` (in `K⁻¹`) yields a straight line of **gradient `= −E_a / R`** (so `E_a = −R × gradient`) and **y-intercept `= ln A`**. Comparing two temperatures `T₁` and `T₂` eliminates `A`:\n\n" +
        "`{{ ln(k_2 / k_1) = (E_a / R) * (1/T_1 - 1/T_2) }}`",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 275" role="img" aria-label="Rate versus concentration graphs for 0th, 1st and 2nd order alongside an Arrhenius plot of ln k versus 1 over T">' +
        '<rect width="640" height="275" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="165" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">Rate vs [A] Order Signatures</text>' +
        '<line x1="48" y1="226" x2="290" y2="226" stroke="#334155" stroke-width="2"/>' +
        '<line x1="48" y1="226" x2="48" y2="44" stroke="#334155" stroke-width="2"/>' +
        '<text x="170" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">[A] / mol dm⁻³</text>' +
        '<text x="20" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90 20 138)">Rate</text>' +
        '<line x1="48" y1="176" x2="276" y2="176" stroke="#0284c7" stroke-width="2.6"/>' +
        '<text x="235" y="168" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0369a1">0th order</text>' +
        '<line x1="48" y1="226" x2="276" y2="86" stroke="#16a34a" stroke-width="2.6"/>' +
        '<text x="220" y="102" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d">1st order</text>' +
        '<path d="M 48 226 Q 170 222 252 52" fill="none" stroke="#dc2626" stroke-width="2.6"/>' +
        '<text x="186" y="64" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b91c1c">2nd order</text>' +
        '<line x1="316" y1="22" x2="316" y2="256" stroke="#cbd5e1" stroke-dasharray="4 4"/>' +
        '<text x="480" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">Arrhenius Plot: ln k vs 1/T</text>' +
        '<line x1="366" y1="226" x2="612" y2="226" stroke="#334155" stroke-width="2"/>' +
        '<line x1="366" y1="226" x2="366" y2="44" stroke="#334155" stroke-width="2"/>' +
        '<text x="490" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">1/T (K⁻¹)</text>' +
        '<text x="340" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155" transform="rotate(-90 340 138)">ln k</text>' +
        '<line x1="366" y1="68" x2="594" y2="206" stroke="#7c3aed" stroke-width="2.8"/>' +
        '<line x1="366" y1="68" x2="594" y2="146" stroke="#059669" stroke-width="2.4" stroke-dasharray="6 4"/>' +
        '<circle cx="366" cy="68" r="4" fill="#0f172a"/>' +
        '<text x="374" y="62" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">intercept = ln A</text>' +
        '<text x="494" y="198" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#6d28d9">slope = −Ea / R</text>' +
        '<text x="496" y="106" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#047857">Catalysed (gentler slope)</text>' +
        '<polygon points="434,109 494,145 434,145" fill="#7c3aed" opacity="0.16" stroke="#7c3aed" stroke-width="1"/>' +
        '</svg>',
      diagramCaption:
        "Left: rate–concentration curves uniquely separate 0th, 1st, and 2nd order. Right: ln k vs 1/T linearises the Arrhenius equation with gradient −E_a/R and intercept ln A.",
      workedExamples: [
        {
          title: "Deducing a Rate Equation, Units of k & Pre-Equilibrium Mechanism",
          problem:
            "For `2NO(g) + O₂(g) → 2NO₂(g)` at `298 K`, initial-rate experiments give:\n" +
            "| Trial | `[NO]` / `mol dm⁻³` | `[O₂]` / `mol dm⁻³` | Initial rate / `mol dm⁻³ s⁻¹` |\n" +
            "|---|---|---|---|\n" +
            "| 1 | 0.010 | 0.010 | `7.1 × 10⁻⁶` |\n" +
            "| 2 | 0.020 | 0.010 | `2.84 × 10⁻⁵` |\n" +
            "| 3 | 0.020 | 0.020 | `5.68 × 10⁻⁵` |\n" +
            "Deduce the rate equation, calculate `k` with units, and show how a two-step mechanism with a fast pre-equilibrium explains this rate law.",
          steps: [
            "Compare Trials 1 and 2 (`[O₂]` constant): `[NO]` doubles (`×2`) and rate quadruples (`2.84 × 10⁻⁵ / 7.1 × 10⁻⁶ = 4 = 2²`), so **2nd order in `NO`**.",
            "Compare Trials 2 and 3 (`[NO]` constant): `[O₂]` doubles (`×2`) and rate doubles (`5.68 / 2.84 = 2 = 2¹`), so **1st order in `O₂`**. Rate equation: `rate = k[NO]²[O₂]` (overall order `3`).",
            "Substitute Trial 1: `k = {{(7.1 * 10^(-6)) / (0.010^2 * 0.010)}} = {{(7.1 * 10^(-6)) / 10^(-6)}} = 7.1 dm⁶ mol⁻² s⁻¹`.",
            "Mechanism: Step 1 (fast equilibrium) `2NO ⇌ N₂O₂` (`K₁ = [N₂O₂]/[NO]²`, so `[N₂O₂] = K₁[NO]²`); Step 2 (slow RDS) `N₂O₂ + O₂ → 2NO₂`. Then `rate = k₂[N₂O₂][O₂] = k₂K₁[NO]²[O₂] = k[NO]²[O₂]`, matching experiment without requiring an unlikely 3-body collision!",
          ],
          answer: "rate = k[NO]²[O₂]; k = 7.1 dm⁶ mol⁻² s⁻¹",
          yourTurn: {
            question:
              "A reaction obeys `rate = k[X][Y]²`. When `[X] = 0.20 mol dm⁻³` and `[Y] = 0.10 mol dm⁻³`, the initial rate is `4.0 × 10⁻⁴ mol dm⁻³ s⁻¹`. Calculate the numerical value of `k` (in `dm⁶ mol⁻² s⁻¹`).",
            answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 dm⁶ mol⁻² s⁻¹" },
            solution: "`k = rate / ([X][Y]²) = (4.0 × 10⁻⁴) / (0.20 × 0.10²) = (4.0 × 10⁻⁴) / (2.0 × 10⁻³) = 0.20 dm⁶ mol⁻² s⁻¹`.",
          },
        },
        {
          title: "Calculating Activation Energy from Two Temperatures (Arrhenius)",
          problem:
            "A first-order decomposition has `k₁ = 1.20 × 10⁻³ s⁻¹` at `300 K` and `k₂ = 9.60 × 10⁻³ s⁻¹` at `330 K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the activation energy `E_a` in `kJ mol⁻¹` to 3 significant figures.",
          steps: [
            "Use the two-temperature Arrhenius equation: `{{ ln(k_2 / k_1) = (E_a / R) * (1/T_1 - 1/T_2) }}`.",
            "Compute the ratio logarithm: `ln(9.60 × 10⁻³ / 1.20 × 10⁻³) = ln(8) = 2.0794`.",
            "Compute the reciprocal temperature difference: `{{1/300 - 1/330}} = 3.0303 × 10⁻⁴ K⁻¹`.",
            "Solve for `E_a`: `E_a = {{(2.0794 * 8.31) / (3.0303 * 10^(-4))}} = 57,025 J mol⁻¹ = 57.0 kJ mol⁻¹`.",
          ],
          answer: "E_a = 57.0 kJ mol⁻¹",
          yourTurn: {
            question:
              "An Arrhenius plot of `ln k` against `1/T` (in `K⁻¹`) has a gradient of `−6500 K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the activation energy `E_a` in `kJ mol⁻¹` to 3 significant figures.",
            answer: { type: "number", value: 54.0, tolerance: 0.2, display: "54.0 kJ mol⁻¹" },
            solution:
              "`gradient = −E_a / R`, so `E_a = −(−6500 K) × 8.31 J K⁻¹ mol⁻¹ = 54,015 J mol⁻¹ = 54.0 kJ mol⁻¹`.",
          },
        },
      ],
      keyPoints: [
        "Reaction orders are empirical — NEVER read them from the overall balanced chemical equation.",
        "In a valid mechanism, the elementary steps must sum to the overall equation AND the rate law derived from the RDS (plus any pre-equilibrium) must match experiment.",
        "Always check Arrhenius units: `T` in Kelvin (`°C + 273.15` or `+ 273`), `R = 8.31 J K⁻¹ mol⁻¹`, and convert `E_a` between `J mol⁻¹` and `kJ mol⁻¹` (`÷ 1000`).",
        "A constant half-life `t₁/₂` on a concentration–time curve is the unmistakable fingerprint of a **first-order** reaction.",
      ],
      whyItWorks:
        "Taking the natural log of `k = A e^(−E_a/RT)` converts an exponential curve into a linear model (`ln k` vs `1/T`). Because `−E_a/R` is negative, a steeper downward Arrhenius line immediately reveals a higher activation energy and greater temperature sensitivity.",
      strategies: [
        "When no two trials hold a reactant constant, form the full ratio `r₂/r₁ = ([A]₂/[A]₁)^m ([B]₂/[B]₁)^n` after finding one order first.",
        "Check your units of `k` by substituting `mol dm⁻³ s⁻¹` for rate and `mol dm⁻³` for each concentration, then cancelling powers.",
        "Sanity-check Arrhenius answers: typical covalent chemical reactions have `E_a` between `30` and `250 kJ mol⁻¹`; getting `0.057 kJ mol⁻¹` means you forgot to divide `J` by `1000` or inverted `1/T`.",
      ],
      thinkDeeper:
        "Can an experimental reaction order ever be fractional (such as `0.5`) or negative (such as `−1`)? Explain what a negative order in a product tells you about a reversible pre-equilibrium step before the RDS.",
    },
    {
      id: "equilibrium-ice-gibbs-hl",
      heading: "R2.3 Dynamic Equilibrium, Le Chatelier, ICE Tables & ΔG⊖ = −RT ln K",
      level: "SL",
      discovery: {
        problem:
          "The Haber synthesis `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)` is exothermic (`ΔH⊖ = −92 kJ mol⁻¹`), so Le Chatelier's Principle says low temperatures give the highest equilibrium yield of ammonia. Yet industrial plants run at `450 °C`! Why would engineers deliberately choose a temperature that lowers the equilibrium constant `K_c`?",
        idea:
          "Equilibrium tells you **how far** a reaction goes, NOT **how fast** it gets there. At room temperature `K_c` is huge, but the strong `N≡N` triple bond gives a massive activation energy, making the rate essentially zero. Running at `450 °C` with an iron catalyst is an economic compromise: fast enough kinetics with an acceptable equilibrium conversion (plus continuous removal of liquefied `NH₃` and recycling of unreacted gases).",
      },
      body:
        "### Dynamic Equilibrium & The Equilibrium Constant `K_c`\n" +
        "In a **closed system**, a reversible reaction reaches **dynamic equilibrium** when:\n" +
        "1. The rate of the forward reaction equals the rate of the reverse reaction (both continue occurring microscopically).\n" +
        "2. Macroscopic properties (concentrations, pressure, colour) remain **constant** (not necessarily equal!).\n\n" +
        "For `aA + bB ⇌ cC + dD`, the equilibrium law is:\n\n" +
        "`{{ K_c = ([\"C\"]^c [\"D\"]^d) / ([\"A\"]^a [\"B\"]^b) }}`\n\n" +
        "- Pure solids `(s)` and pure liquids `(l)` are omitted from heterogeneous `K_c` expressions because their concentration/activity is constant.\n" +
        "- **Magnitude of `K_c`:** `K_c ≫ 1` means products dominate (lies to the right); `K_c ≪ 1` means reactants dominate (lies to the left).\n" +
        "- **Algebra of `K_c`:** reversing an equation inverts `K_c → {{1 / K_c}}`; multiplying coefficients by `n` raises `K_c → (K_c)^n`; adding two equilibria multiplies their constants (`K_total = K₁ × K₂`).\n\n" +
        "### Le Chatelier's Principle & Industrial Compromises\n" +
        "When an equilibrium system is disturbed, its position shifts to **partially oppose** the imposed change:\n" +
        "- **Concentration:** adding a reactant shifts right; removing a product shifts right. **`K_c` is unchanged.**\n" +
        "- **Pressure / volume (gases):** increasing pressure (decreasing volume) shifts toward the side with **fewer moles of gas**. **`K_c` is unchanged.** Adding an inert gas at constant volume does not change partial pressures or equilibrium position.\n" +
        "- **Temperature:** increasing `T` shifts in the **endothermic** direction; decreasing `T` shifts in the **exothermic** direction. **Temperature is the ONLY factor that changes the value of `K_c`** (for exothermic forward reactions, ↑T decreases `K_c`; for endothermic forward reactions, ↑T increases `K_c`).\n" +
        "- **Catalyst:** speeds up forward and reverse reactions equally — equilibrium is reached **faster**, with **no change** in position or `K_c`.\n\n" +
        "### [HL] Reaction Quotient `Q` & ICE Tables\n" +
        "The **reaction quotient `Q`** has the exact same expression as `K_c` but uses concentrations at *any* non-equilibrium instant:\n" +
        "- `Q < K_c` → too much reactant → net shift **forward (right)**.\n" +
        "- `Q = K_c` → system is **at equilibrium**.\n" +
        "- `Q > K_c` → too much product → net shift **reverse (left)**.\n\n" +
        "To compute unknown equilibrium concentrations or `K_c`, build an **ICE table** (**I**nitial, **C**hange in stoichiometric multiples of `x`, **E**quilibrium), converting moles to `mol dm⁻³` via `c = n / V` before plugging into `K_c`. When `K_c ≪ 1` (typically `K_c < 10⁻⁴`), you may test the small-`x` approximation (`c₀ − x ≈ c₀`), valid if `x / c₀ < 5%`.\n\n" +
        "### [HL] Gibbs Free Energy & Equilibrium: `ΔG⊖ = −RT ln K`\n" +
        "Thermodynamics and equilibrium are linked quantitatively by:\n\n" +
        "`{{ Delta G^⊖ = -R T ln(K) }}`\n\n" +
        "- Use `R = 8.31 J K⁻¹ mol⁻¹`, `T` in Kelvin, and convert `ΔG⊖` from `kJ mol⁻¹` to **`J mol⁻¹`** (`× 1000`) before solving for `ln K`!\n" +
        "- `ΔG⊖ < 0` ⇔ `ln K > 0` ⇔ `K > 1` (products favoured at equilibrium).\n" +
        "- `ΔG⊖ = 0` ⇔ `ln K = 0` ⇔ `K = 1` (neither side favoured).\n" +
        "- `ΔG⊖ > 0` ⇔ `ln K < 0` ⇔ `K < 1` (reactants favoured at equilibrium).\n" +
        "- Note the subtle distinction: at equilibrium, the *instantaneous* free-energy change is `ΔG = 0`, whereas the *standard* free-energy change `ΔG⊖` is generally non-zero and determines the magnitude of `K`.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 265" role="img" aria-label="Concentration versus time graph showing Le Chatelier response when N2 is injected into an N2 plus 3H2 equilibrium with 2NH3">' +
        '<rect width="640" height="265" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Le Chatelier Response: Injecting N₂(g) into N₂ + 3H₂ ⇌ 2NH₃</text>' +
        '<line x1="62" y1="224" x2="604" y2="224" stroke="#334155" stroke-width="2"/>' +
        '<line x1="62" y1="224" x2="62" y2="42" stroke="#334155" stroke-width="2"/>' +
        '<text x="335" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Time</text>' +
        '<text x="22" y="135" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 22 135)">Concentration</text>' +
        '<line x1="220" y1="46" x2="220" y2="224" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/>' +
        '<line x1="430" y1="46" x2="430" y2="224" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/>' +
        '<text x="140" y="58" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#475569">Equilibrium 1</text>' +
        '<text x="325" y="58" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">Shift right (Q &lt; Kc)</text>' +
        '<text x="515" y="58" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#475569">Equilibrium 2 (same Kc)</text>' +
        '<path d="M 62 128 L 220 128 L 220 68 C 260 90, 340 104, 430 106 L 594 106" fill="none" stroke="#2563eb" stroke-width="2.8"/>' +
        '<text x="546" y="99" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">[N₂] (−x)</text>' +
        '<path d="M 62 96 L 220 96 C 275 112, 345 142, 430 148 L 594 148" fill="none" stroke="#dc2626" stroke-width="2.8"/>' +
        '<text x="540" y="164" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b91c1c">[H₂] (−3x)</text>' +
        '<path d="M 62 188 L 220 188 C 275 174, 345 132, 430 126 L 594 126" fill="none" stroke="#16a34a" stroke-width="2.8"/>' +
        '<text x="536" y="121" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d">[NH₃] (+2x)</text>' +
        '<text x="220" y="239" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">t₁ (N₂ spike)</text>' +
        '<text x="430" y="239" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">t₂ (new eq.)</text>' +
        '</svg>',
      diagramCaption:
        "A sudden vertical spike identifies added N₂ at t₁. The system shifts right to partially oppose the spike (−x, −3x, +2x), settling at a new equilibrium with the same K_c.",
      workedExamples: [
        {
          title: "[HL] Solving an Equilibrium ICE Table Using a Perfect Square",
          problem:
            "At `700 K`, `K_c = 49.0` for `H₂(g) + I₂(g) ⇌ 2HI(g)`. Initially `0.400 mol` of `H₂(g)` and `0.400 mol` of `I₂(g)` are sealed in a `2.00 dm³` flask with no `HI`. Calculate the equilibrium concentration of `HI(g)`.",
          steps: [
            "Convert initial moles to concentrations: `[H₂]₀ = [I₂]₀ = {{0.400 / 2.00}} = 0.200 mol dm⁻³`; `[HI]₀ = 0`.",
            "Set up ICE concentrations: `[H₂]_eq = 0.200 − x`, `[I₂]_eq = 0.200 − x`, `[HI]_eq = 2x`.",
            "Substitute into `K_c`: `49.0 = {{ (2x)^2 / (0.200 - x)^2 }}`.",
            "Take the positive square root of both sides: `7.00 = {{ (2x) / (0.200 - x) }}` → `1.40 − 7.00x = 2.00x` → `9.00x = 1.40` → `x = 0.1556 mol dm⁻³`.",
            "Therefore `[HI]_eq = 2x = 2 × 0.1556 = 0.311 mol dm⁻³`.",
          ],
          answer: "[HI]_eq = 0.311 mol dm⁻³",
          yourTurn: {
            question:
              "For `H₂(g) + I₂(g) ⇌ 2HI(g)`, `K_c = 64.0`. Starting with `[H₂]₀ = 0.500 mol dm⁻³`, `[I₂]₀ = 0.500 mol dm⁻³`, and `[HI]₀ = 0`, calculate `[HI]_eq` in `mol dm⁻³` to 3 significant figures.",
            answer: { type: "number", value: 0.8, tolerance: 0.01, display: "0.800 mol dm⁻³" },
            solution:
              "`64.0 = (2x)² / (0.500 − x)²` → `8.00 = 2x / (0.500 − x)` → `4.00 − 8x = 2x` → `10x = 4.00` → `x = 0.400`, so `[HI]_eq = 2x = 0.800 mol dm⁻³`.",
          },
        },
        {
          title: "[HL] Linking Standard Gibbs Free Energy ΔG⊖ and Equilibrium Constant K",
          problem:
            "At `298 K`, a reversible reaction has `ΔG⊖ = −16.5 kJ mol⁻¹`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the equilibrium constant `K` to 3 significant figures.",
          steps: [
            "Convert `ΔG⊖` to `J mol⁻¹`: `ΔG⊖ = −16.5 × 1000 = −16,500 J mol⁻¹`.",
            "Rearrange `ΔG⊖ = −RT ln K`: `ln K = {{ -Delta G^⊖ / (R T) }} = {{ 16500 / (8.31 * 298) }} = {{ 16500 / 2476.38 }} = 6.663`.",
            "Exponentiate: `K = e^(6.663) = 783` (since `ΔG⊖ < 0`, `K > 1` as expected!).",
          ],
          answer: "K = 783",
          yourTurn: {
            question:
              "At `298 K`, a reversible reaction has equilibrium constant `K = 1.00 × 10⁴`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate `ΔG⊖` in `kJ mol⁻¹` to 3 significant figures.",
            answer: { type: "number", value: -22.8, tolerance: 0.2, display: "−22.8 kJ mol⁻¹" },
            solution:
              "`ΔG⊖ = −RT ln K = −8.31 × 298 × ln(1.00 × 10⁴) = −2476.38 × 9.2103 = −22,808 J mol⁻¹ = −22.8 kJ mol⁻¹`.",
          },
        },
      ],
      keyPoints: [
        "At dynamic equilibrium, forward and reverse **rates** are equal, while reactant and product **concentrations** are constant (rarely equal).",
        "ONLY **temperature** alters `K_c`; concentration, pressure, and catalysts leave `K_c` unchanged.",
        "[HL] Compare `Q` to `K_c`: `Q < K_c` shifts right; `Q > K_c` shifts left; `Q = K_c` is at equilibrium.",
        "[HL] In `ΔG⊖ = −RT ln K`, convert `ΔG⊖` to `J mol⁻¹` (`× 1000`) to match `R = 8.31 J K⁻¹ mol⁻¹`.",
      ],
      whyItWorks:
        "Equilibrium sits at the minimum of the Gibbs free-energy curve (`ΔG = 0`). At that minimum, the chemical potentials of reactants and products balance exactly, forcing the ratio of product to reactant activities (`K`) to satisfy `ln K = −ΔG⊖ / RT`.",
      strategies: [
        "For pressure shifts, count ONLY **gaseous** moles on each side (`(g)`); ignore solids `(s)` and liquids `(l)`.",
        "In ICE tables, always check whether the container volume is `1.00 dm³` — if not, divide every equilibrium mole count by `V` before substituting into `K_c`!",
        "Check signs in `ΔG⊖ = −RT ln K`: negative `ΔG⊖` MUST give `K > 1`, and positive `ΔG⊖` MUST give `0 < K < 1`.",
      ],
      thinkDeeper:
        "If `K_c` for an exothermic reaction drops as temperature rises, yet `ΔG⊖ = ΔH⊖ − TΔS⊖ = −RT ln K`, what does plotting `ln K` against `1/T` (the van 't Hoff plot) reveal about the sign of its gradient?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you identify the limiting reactant quickly when given masses of two reactants?",
        back: "Convert each mass to moles (`n = m/M`) and divide by its balanced stoichiometric coefficient (`n / coeff`). The smallest quotient identifies the limiting reactant.",
        level: "SL",
      },
      {
        front: "Distinguish between **percentage yield** and **percentage atom economy**.",
        back: "Percentage yield `= (experimental / theoretical yield) × 100%` (practical efficiency). Atom economy `= (ΣM_desired / ΣM_reactants) × 100%` (theoretical green-chemistry proportion of reactant atoms incorporated into the desired product).",
        level: "SL",
      },
      {
        front: "Why do addition reactions always have 100% atom economy?",
        back: "All atoms from all reactants are incorporated into a single desired product with zero stoichiometric co-products.",
        level: "SL",
      },
      {
        front: "When is a **back-titration** preferred over a direct titration?",
        back: "When the analyte is insoluble (e.g. `CaCO₃`), reacts too slowly for a sharp endpoint, or is volatile. Add known excess reagent A, titrate leftover A with B, and compute `n_reacted(A) = n_total(A) − n_excess(A)`.",
        level: "SL",
      },
      {
        front: "State the two requirements of collision theory for a **successful (effective) collision**.",
        back: "1. Kinetic energy `E ≥ E_a` (activation energy). 2. Correct collision geometry (steric orientation).",
        level: "SL",
      },
      {
        front: "Why does increasing temperature dramatically increase reaction rate?",
        back: "Mainly because a much larger **fraction of particles have `E ≥ E_a`** (exponential tail of the Maxwell–Boltzmann distribution), plus a smaller increase in total collision frequency.",
        level: "SL",
      },
      {
        front: "How does a **catalyst** change a Maxwell–Boltzmann distribution diagram?",
        back: "It does NOT change the curve shape or area; it provides an alternative pathway with a lower `E_a`, shifting the vertical `E_a` line to the left so a larger shaded fraction of particles have `E ≥ E_a(cat)`.",
        level: "SL",
      },
      {
        front: "What are the units of the rate constant `k` for 0th, 1st, 2nd, and 3rd overall order?",
        back: "0th: `mol dm⁻³ s⁻¹`; 1st: `s⁻¹`; 2nd: `dm³ mol⁻¹ s⁻¹`; 3rd: `dm⁶ mol⁻² s⁻¹` (general formula: `mol^(1−p) dm^(3p−3) s⁻¹`).",
        level: "HL",
      },
      {
        front: "How does a concentration–time (`[A]` vs `t`) graph distinguish 0th, 1st, and 2nd order?",
        back: "0th order = straight downward line; 1st order = exponential decay with **constant half-life `t₁/₂`**; 2nd order = steeper curve whose half-life increases over time.",
        level: "HL",
      },
      {
        front: "In a multi-step mechanism, what distinguishes an **intermediate** from a **catalyst**?",
        back: "An intermediate is formed in an early step and consumed later (cannot appear in the final rate law). A catalyst is consumed in an early step and regenerated later (can appear in the rate law).",
        level: "HL",
      },
      {
        front: "What are the gradient and y-intercept of an Arrhenius plot (`ln k` vs `1/T`)?",
        back: "From `ln k = −(E_a/R)(1/T) + ln A`: gradient `= −E_a / R` (so `E_a = −R × gradient`, in `J mol⁻¹`), and y-intercept `= ln A`.",
        level: "HL",
      },
      {
        front: "Which single stress changes the numerical value of `K_c`, and in what direction?",
        back: "ONLY **temperature** changes `K_c`. Raising `T` increases `K_c` for an endothermic forward reaction (`ΔH > 0`) and decreases `K_c` for an exothermic forward reaction (`ΔH < 0`).",
        level: "SL",
      },
      {
        front: "How does the reaction quotient `Q` predict the direction of net shift?",
        back: "`Q < K_c` → shifts right (forward) to make more products; `Q > K_c` → shifts left (reverse) to make more reactants; `Q = K_c` → at equilibrium.",
        level: "HL",
      },
      {
        front: "State `ΔG⊖ = −RT ln K` and the sign correspondence between `ΔG⊖` and `K`.",
        back: "`ΔG⊖ < 0` ↔ `K > 1` (products favoured); `ΔG⊖ = 0` ↔ `K = 1`; `ΔG⊖ > 0` ↔ `0 < K < 1` (reactants favoured). Remember to convert `ΔG⊖` to `J mol⁻¹` (`× 1000`) when using `R = 8.31 J K⁻¹ mol⁻¹`.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Limiting reactant test: compute `n / coeff` for each reactant; the smallest value controls theoretical yield.",
      "Percentage yield `= (experimental / theoretical) × 100%`; Atom economy `= (ΣM_desired / ΣM_reactants) × 100%`.",
      "At IB STP (`273 K`, `100 kPa`), `1 mol` of any ideal gas occupies `22.7 dm³`; gas volume ratios equal mole ratios at fixed `T, p`.",
      "Titration concordant titres agree within `0.10 cm³`; always convert `cm³ → dm³` (`÷ 1000`) in `n = cV`.",
      "Collision theory requires BOTH `E ≥ E_a` and correct orientation; temperature primarily expands the Maxwell–Boltzmann tail beyond `E_a`.",
      "A catalyst lowers `E_a` via an alternative pathway, boosting forward and reverse rates equally without changing `ΔH` or `K_c`.",
      "[HL] Rate orders come strictly from experiment (`rate = k[A]^m[B]^n`), and `k` depends only on temperature and catalysts.",
      "[HL] The Arrhenius equation `ln k = −(E_a/R)(1/T) + ln A` uses `T` in Kelvin and `E_a` in `J mol⁻¹` with `R = 8.31 J K⁻¹ mol⁻¹`.",
      "Dynamic equilibrium requires a closed system with equal forward/reverse rates and constant macroscopic concentrations.",
      "[HL] In ICE tables, convert equilibrium moles to concentrations (`n/V`) before evaluating `K_c`, and link equilibrium to spontaneity via `ΔG⊖ = −RT ln K`.",
    ],
    misconceptions: [
      {
        wrong: "The reactant with the smaller mass in grams is always the limiting reactant.",
        right: "Stoichiometry counts moles divided by coefficients (`n / coeff`), not grams; a light reagent like `H₂` (`M = 2.02`) can be in massive molar excess even at a smaller mass.",
        level: "SL",
      },
      {
        wrong: "A high percentage yield automatically guarantees a high atom economy.",
        right: "A reaction can achieve 100% yield yet have low atom economy if its balanced equation produces heavy waste co-products (e.g. `CO₂` or salt by-products).",
        level: "SL",
      },
      {
        wrong: "Adding a catalyst shifts the Maxwell–Boltzmann curve to the right or increases the kinetic energy of particles.",
        right: "A catalyst leaves the kinetic energy distribution unchanged; it provides an alternative pathway with a lower `E_a`, shifting the vertical `E_a` line leftward.",
        level: "SL",
      },
      {
        wrong: "The exponents in the rate equation `rate = k[A]^m[B]^n` are simply the stoichiometric coefficients `a` and `b`.",
        right: "Exponents match stoichiometric coefficients ONLY for a single elementary step; overall reaction orders must be determined experimentally.",
        level: "HL",
      },
      {
        wrong: "Increasing concentration increases the rate constant `k`.",
        right: "Concentration increases the *rate*, NOT `k`. The rate constant `k` changes only with temperature or a catalyst.",
        level: "HL",
      },
      {
        wrong: "At equilibrium, the concentrations of reactants and products are equal, and the reaction has stopped.",
        right: "At dynamic equilibrium, forward and reverse *rates* are equal (both continue occurring), while concentrations are *constant* and usually unequal.",
        level: "SL",
      },
      {
        wrong: "Increasing pressure or adding reactant increases `K_c`, and adding a catalyst increases the equilibrium yield.",
        right: "ONLY temperature changes `K_c`. Pressure/concentration shifts restore the same `K_c`, and catalysts only shorten the time needed to reach equilibrium.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Forgetting to divide `cm³` by `1000` when computing `n = cV`, making titration answers off by a factor of `1000`.",
      "Including rough (non-concordant) titres when averaging burette readings instead of averaging only concordant titres within `0.10 cm³`.",
      "Writing 'more collisions' instead of 'higher **frequency** of **successful** collisions' on collision-theory questions.",
      "Drawing a higher-temperature Maxwell–Boltzmann curve with a taller peak or touching the x-axis — both lose marks immediately.",
      "[HL] Plugging Celsius instead of Kelvin into the Arrhenius equation or forgetting to convert `E_a` between `J mol⁻¹` and `kJ mol⁻¹`.",
      "[HL] Leaving an intermediate inside a mechanism-derived rate law instead of eliminating it via the fast pre-equilibrium expression.",
      "[HL] Substituting equilibrium **moles** instead of equilibrium **concentrations** (`n / V`) into `K_c` when container volume `V ≠ 1.00 dm³`.",
      "[HL] Forgetting the `× 1000` unit conversion between `kJ mol⁻¹` (`ΔG⊖`) and `J K⁻¹ mol⁻¹` (`R = 8.31`) in `ΔG⊖ = −RT ln K`.",
    ],
    mnemonics: [
      {
        topic: "Limiting Reactant",
        device: "M-D-S (Moles → Divide by coeff → Smallest wins)",
        explanation: "Never eyeball grams: convert to Moles, Divide by balanced coefficient, and the Smallest quotient is the limiting reactant.",
        level: "SL",
      },
      {
        topic: "Collision Theory Marks",
        device: "F-E-O (Frequency · Energy ≥ Ea · Orientation)",
        explanation: "Every full-mark IB kinetics explanation mentions collision **F**requency, fraction with **E**nergy `≥ E_a`, and steric **O**rientation.",
        level: "SL",
      },
      {
        topic: "Only Temperature Changes K",
        device: "T-Rex Controls K",
        explanation: "**T**emperature is the ONLY king that changes `K_c`; concentration, pressure, and catalysts cannot alter `K_c`.",
        level: "SL",
      },
      {
        topic: "Q vs K Direction",
        device: "Alphabetical Pac-Man (Q < K → right; K < Q → left)",
        explanation: "Write `Q` and `K` in alphabetical order (`Q` vs `K`): the inequality arrow `<` or `>` literally points in the direction the reaction shifts! (`Q < K` shifts right; `Q > K` shifts left — or put `K` on the number line and move `Q` toward `K`!)",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Haber–Bosch Ammonia Synthesis",
        detail: "Produces over 150 million tonnes of `NH₃` per year for fertilisers, balancing exothermic equilibrium yield against kinetics at `450 °C`, `20 MPa`, and an iron catalyst.",
        emoji: "🌾",
      },
      {
        title: "Three-Way Catalytic Converters",
        detail: "Honeycomb monoliths coated with Pt, Pd, and Rh lower `E_a` to rapidly convert toxic `CO`, `NO_x`, and unburnt hydrocarbons into `N₂`, `CO₂`, and `H₂O` inside car exhausts.",
        emoji: "🚗",
      },
      {
        title: "Green Chemistry Ibuprofen Synthesis",
        detail: "Redesigning the industrial ibuprofen route from 6 steps (Boots process, 40% atom economy) to 3 catalytic steps (BHC process, 77% atom economy — 99% with acetic acid recovery) eliminated thousands of tonnes of chemical waste annually.",
        emoji: "💊",
      },
      {
        title: "Haemoglobin–Oxygen Dynamic Equilibrium",
        detail: "Oxygen binds reversibly to haemoglobin (`Hb + 4O₂ ⇌ Hb(O₂)₄`): high `O₂` partial pressure in lung alveoli drives binding forward, while low `O₂` in respiring muscle shifts equilibrium left to release oxygen.",
        emoji: "🩸",
      },
      {
        title: "Enzyme Catalysis & Fever",
        detail: "Biological enzymes lower activation energies by `40–100 kJ mol⁻¹` via precise active-site orientation, accelerating cellular reactions by factors exceeding `10⁶` at `310 K`.",
        emoji: "🧬",
      },
    ],
    videos: [
      {
        title: "IB Chemistry R2.1 Stoichiometry, Limiting Reactants & Atom Economy",
        channel: "MSJChem / Richard Thornley Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R2.1+limiting+reactant+atom+economy+titration",
      },
      {
        title: "IB Chemistry R2.2 Collision Theory & Maxwell-Boltzmann Distribution",
        channel: "IB Chemistry Kinetics Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R2.2+Maxwell+Boltzmann+collision+theory",
      },
      {
        title: "IB Chemistry HL R2.2 Rate Equations, Mechanisms & Arrhenius Equation",
        channel: "IB Chemistry HL Kinetics Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+rate+equation+Arrhenius+mechanism",
      },
      {
        title: "IB Chemistry R2.3 Le Chatelier, ICE Tables & Delta G = -RT ln K",
        channel: "IB Chemistry Equilibrium Search",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R2.3+ICE+table+equilibrium+Gibbs+ln+K",
      },
    ],
    formulas: [
      {
        name: "Moles from Mass",
        formula: "{{n = m / M}}",
        note: "`m` in `g`, molar mass `M` in `g mol⁻¹`",
        level: "SL",
      },
      {
        name: "Moles in Solution",
        formula: "{{n = c * V}}",
        note: "`c` in `mol dm⁻³`, `V` in `dm³` (`cm³ ÷ 1000`)",
        level: "SL",
      },
      {
        name: "Moles of Gas at STP",
        formula: "{{n = V / 22.7}}",
        note: "IB STP: `273 K`, `100 kPa`, `V` in `dm³`",
        level: "SL",
      },
      {
        name: "Percentage Yield",
        formula: "{{\"% yield\" = (\"experimental yield\" / \"theoretical yield\") * 100}}",
        note: "Always use the limiting reactant for theoretical yield",
        level: "SL",
      },
      {
        name: "Percentage Atom Economy",
        formula: "{{\"% atom economy\" = (\"M(desired product)\" / \"M(all reactants)\") * 100}}",
        note: "Include stoichiometric coefficients in both numerator and denominator",
        level: "SL",
      },
      {
        name: "Average Rate of Reaction",
        formula: "{{\"rate\" = -Delta [\"R\"] / Delta t = +Delta [\"P\"] / Delta t}}",
        note: "Units `mol dm⁻³ s⁻¹` (always positive)",
        level: "SL",
      },
      {
        name: "Rate Equation (Rate Law)",
        formula: "{{\"rate\" = k [\"A\"]^m [\"B\"]^n}}",
        note: "Orders `m, n` determined by experiment only; overall order `p = m + n`",
        level: "HL",
      },
      {
        name: "Arrhenius Equation (Exponential)",
        formula: "{{k = A * e^(-E_a / (R T))}}",
        note: "`R = 8.31 J K⁻¹ mol⁻¹`, `T` in `K`, `E_a` in `J mol⁻¹`",
        level: "HL",
      },
      {
        name: "Arrhenius Equation (Linear Plot)",
        formula: "{{ln(k) = -(E_a / R) * (1 / T) + ln(A)}}",
        note: "Plot `ln k` vs `1/T`: gradient `= −E_a / R`, y-intercept `= ln A`",
        level: "HL",
      },
      {
        name: "Arrhenius Equation (Two Temperatures)",
        formula: "{{ln(k_2 / k_1) = (E_a / R) * (1/T_1 - 1/T_2)}}",
        note: "Eliminates `A`; check `T₁ < T₂` gives `k₂ > k₁`",
        level: "HL",
      },
      {
        name: "Equilibrium Constant Expression",
        formula: "{{K_c = ([\"C\"]^c [\"D\"]^d) / ([\"A\"]^a [\"B\"]^b)}}",
        note: "Omit pure solids `(s)` and pure liquids `(l)`; only `T` changes `K_c`",
        level: "SL",
      },
      {
        name: "Gibbs Free Energy & Equilibrium Constant",
        formula: "{{Delta G^⊖ = -R T ln(K)}}",
        note: "Convert `ΔG⊖` to `J mol⁻¹` (`× 1000`) to match `R = 8.31 J K⁻¹ mol⁻¹`",
        level: "HL",
      },
    ],
  },
};
