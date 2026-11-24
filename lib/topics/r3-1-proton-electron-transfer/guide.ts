import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "r3-1-proton-electron-transfer",
  title: "Reactivity 3.1–3.2: Acids, Bases & Redox Electrochemistry",
  strand: "Reactivity 3: Reaction Mechanisms",
  icon: "🔋",
  level: "SL",
  summary:
    "Master the twin transfer reactions of IB Chemistry: proton transfer (Brønsted–Lowry acids/bases, pH, weak equilibria, buffers, titration curves) and electron transfer (oxidation states, half-equations, Winkler BOD, voltaic & electrolytic cells, E⊖, ΔG⊖ = −nFE⊖, and Faraday electroplating).",
  intro:
    "Two fundamental subatomic transfers drive almost all aqueous and electrochemical reactivity: **proton (H⁺) transfer** in acid–base chemistry (R3.1) and **electron (e⁻) transfer** in redox electrochemistry (R3.2). Both share the same core logic — a donor loses a particle and becomes a conjugate partner while an acceptor gains it, and equilibrium constants (`K_w`, `K_a`, `K_b`) or electrode potentials (`E⊖`) tell us which side wins.",
  guide: [
    // =========================================================================
    // SECTION 1 (SL): R3.1 Brønsted–Lowry Acids/Bases, pH Scale & Strong vs Weak
    // =========================================================================
    {
      id: "bronsted-ph-strong-weak",
      heading: "R3.1 Brønsted–Lowry Acids/Bases, pH Scale & Strong vs Weak",
      level: "SL",
      discovery: {
        problem:
          "At 50 °C (323 K), a sample of ultra-pure distilled water has a measured **pH of 6.63** — well below 7.00. Meanwhile, two flasks at 25 °C contain 25.0 cm³ of 0.100 mol dm⁻³ HCl (pH 1.00) and 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid, CH₃COOH (pH 2.88). Predict: (1) Is hot pure water acidic? (2) Which flask needs *more* 0.100 mol dm⁻³ NaOH to reach complete neutralisation?",
        idea:
          "(1) **No — hot pure water is strictly neutral!** Neutrality means `[H⁺] = [OH⁻]`, NOT `pH = 7`. Autoionization of water (`H₂O ⇌ H⁺ + OH⁻`) is endothermic, so raising temperature shifts equilibrium right, increasing both `[H⁺]` and `[OH⁻]` equally and lowering the neutral pH. (2) **Both flasks need the exact same 25.0 cm³ of NaOH!** As OH⁻ removes H⁺ from weak CH₃COOH, Le Chatelier's principle pulls the dissociation equilibrium forward until every single mole of acid has donated its proton.",
      },
      body: `### Brønsted–Lowry Proton Transfer & Conjugate Pairs
A **Brønsted–Lowry acid** is a proton (H⁺) donor, and a **Brønsted–Lowry base** is a proton acceptor. Every acid–base reaction forms two **conjugate acid–base pairs** whose formulas differ by exactly one H⁺ ion:

- Example: \`CH₃COOH(aq) + H₂O(l) ⇌ CH₃COO⁻(aq) + H₃O⁺(aq)\`
  - Acid 1 / Conjugate Base 1: **CH₃COOH / CH₃COO⁻**
  - Base 2 / Conjugate Acid 2: **H₂O / H₃O⁺**
- **Amphiprotic** species can both donate and accept a proton (they require at least one removable H atom and a lone pair of electrons), such as **H₂O**, **HCO₃⁻**, **HSO₄⁻**, and **H₂PO₄⁻**.
- **Amphoteric** is the broader term for any substance that reacts with both acids and bases — every amphiprotic species is amphoteric, but metal oxides like **Al₂O₃** and **ZnO** are amphoteric without being amphiprotic (they have no H⁺ to donate).

### The Ionic Product of Water & The pH Scale
Pure water undergoes slight endothermic autoionization: \`H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)\` (\`ΔH > 0\`). Its equilibrium expression is the ionic product of water:

- \`K_w = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴\` at **298 K** (25 °C), giving \`pK_w = 14.00\`.
- Logarithmic definitions: \`pH = −log₁₀[H⁺]\`, \`[H⁺] = 10^(−pH)\`, \`pOH = −log₁₀[OH⁻]\`, and \`pH + pOH = pK_w = 14.00\` (at 298 K).
- Because the scale is base-10 logarithmic, a **decrease of 1.0 pH unit** means a **10× increase** in \`[H⁺]\`; a decrease of 2.0 pH units means a **100× increase** in \`[H⁺]\`.
- **Temperature trap:** Raising temperature increases \`K_w\`, so \`[H⁺] = [OH⁻] = √K_w\` rises and **neutral pH falls below 7.00**, yet the water remains neutral because \`[H⁺] = [OH⁻]\`.

### Strong vs Weak Acids and Bases
Strength describes **extent of dissociation** in water, whereas concentration describes **moles of solute per dm³** — never confuse the two!

| Property (at equal concentration, 298 K) | Strong acid (e.g. HCl, HNO₃, H₂SO₄ 1st H⁺) | Weak acid (e.g. CH₃COOH, H₂CO₃, HCOOH) |
|---|---|---|
| Dissociation in water | Effectively 100% (single arrow \`→\`) | Partial, typically < 5% (equilibrium \`⇌\`) |
| \`[H⁺]\` & pH (0.10 mol dm⁻³) | \`0.10 mol dm⁻³\`, pH = 1.00 | Much lower (~0.0013 mol dm⁻³), pH ≈ 2.88 |
| Electrical conductivity | High (high concentration of mobile ions) | Low (few mobile ions; mostly neutral molecules) |
| Initial rate with Mg or CaCO₃ | Fast, vigorous effervescence | Slow, gentle effervescence |
| Volume of NaOH needed to neutralise | Identical (for same moles of monoprotic acid) | Identical (equilibrium shifts right until all HA reacts) |
| Enthalpy of neutralisation \`ΔH_neut⊖\` | ≈ −57.3 kJ mol⁻¹ | Slightly less exothermic (extra energy needed to dissociate HA) |

- **Strong bases** to memorise: Group 1 hydroxides (**LiOH, NaOH, KOH**) and soluble Group 2 hydroxides (**Ba(OH)₂**, which releases **2 mol OH⁻ per mol base**!).
- **Weak bases** to memorise: **NH₃** and organic amines (e.g. **CH₃NH₂**).

### Acid Deposition & Ocean Acidification
Natural unpolluted rainwater is slightly acidic (**pH ≈ 5.6**) because atmospheric \`CO₂\` dissolves to form weak carbonic acid (\`H₂O(l) + CO₂(g) ⇌ H₂CO₃(aq)\`). **Acid rain** is defined as precipitation with **pH < 5.6**, caused primarily by sulfur oxides (\`SO₂\`, \`SO₃\` from coal combustion forming \`H₂SO₃\` / \`H₂SO₄\`) and nitrogen oxides (\`NO\`, \`NO₂\` from internal combustion engines forming \`HNO₂\` / \`HNO₃\`). Rising atmospheric \`CO₂\` also drives **ocean acidification**, lowering seawater pH and reducing \`[CO₃²⁻]\` needed by corals and shellfish for \`CaCO₃\` calcification.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 280" role="img" aria-label="Comparison of strong acid complete dissociation versus weak acid partial dissociation alongside the logarithmic pH scale from 0 to 14 showing acid rain threshold at pH 5.6">
  <rect width="640" height="280" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">Strong vs Weak Acid Dissociation &amp; The Logarithmic pH Scale (298 K)</text>
  <rect x="24" y="42" width="280" height="122" rx="10" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
  <text x="164" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">Strong Acid: HCl → H⁺ + Cl⁻ (≈100%)</text>
  <circle cx="62" cy="96" r="13" fill="#e11d48"/><text x="62" y="100" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">H⁺</text>
  <circle cx="104" cy="118" r="15" fill="#475569"/><text x="104" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cl⁻</text>
  <circle cx="154" cy="90" r="13" fill="#e11d48"/><text x="154" y="94" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">H⁺</text>
  <circle cx="198" cy="118" r="15" fill="#475569"/><text x="198" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cl⁻</text>
  <circle cx="242" cy="94" r="13" fill="#e11d48"/><text x="242" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">H⁺</text>
  <circle cx="274" cy="126" r="15" fill="#475569"/><text x="274" y="130" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cl⁻</text>
  <text x="164" y="155" text-anchor="middle" font-size="10.5" fill="#881337">High [H⁺] · High conductivity · Fast reaction with Mg</text>
  <rect x="336" y="42" width="280" height="122" rx="10" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="476" y="61" text-anchor="middle" font-size="12" font-weight="700" fill="#92400e">Weak Acid: HA ⇌ H⁺ + A⁻ (~1% ions)</text>
  <g transform="translate(362,86)">
    <circle cx="14" cy="14" r="12" fill="#f59e0b"/><circle cx="32" cy="14" r="14" fill="#64748b"/>
    <text x="23" y="18" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">HA</text>
  </g>
  <g transform="translate(432,102)">
    <circle cx="14" cy="14" r="12" fill="#f59e0b"/><circle cx="32" cy="14" r="14" fill="#64748b"/>
    <text x="23" y="18" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">HA</text>
  </g>
  <g transform="translate(498,82)">
    <circle cx="14" cy="14" r="12" fill="#f59e0b"/><circle cx="32" cy="14" r="14" fill="#64748b"/>
    <text x="23" y="18" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">HA</text>
  </g>
  <circle cx="576" cy="95" r="12" fill="#e11d48"/><text x="576" y="99" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">H⁺</text>
  <circle cx="584" cy="128" r="14" fill="#475569"/><text x="584" y="132" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">A⁻</text>
  <text x="476" y="155" text-anchor="middle" font-size="10.5" fill="#78350f">Low [H⁺] · Low conductivity · Same moles to neutralise</text>
  <defs>
    <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="35%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#16a34a"/>
      <stop offset="70%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
  </defs>
  <rect x="40" y="196" width="560" height="22" rx="11" fill="url(#phGrad)"/>
  <text x="40" y="190" font-size="10.5" font-weight="700" fill="#b91c1c">pH 0 ([H⁺]=1 M)</text>
  <text x="264" y="190" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">5.6 Acid rain &lt; 5.6</text>
  <line x1="264" y1="194" x2="264" y2="224" stroke="#78350f" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="320" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">pH 7.00 Neutral ([H⁺] = [OH⁻] = 10⁻⁷ M)</text>
  <line x1="320" y1="194" x2="320" y2="222" stroke="#14532d" stroke-width="2"/>
  <text x="600" y="190" text-anchor="end" font-size="10.5" font-weight="700" fill="#5b21b6">pH 14 ([OH⁻]=1 M)</text>
  <text x="320" y="262" text-anchor="middle" font-size="11" fill="#334155">Each −1.0 change in pH multiplies [H⁺] by 10× · At 298 K: pH + pOH = 14.00</text>
</svg>`,
      diagramCaption:
        "Strong acids dissociate completely into ions; weak acids remain mostly intact molecules in dynamic equilibrium. Every single pH unit represents a tenfold shift in [H⁺].",
      workedExamples: [
        {
          title: "pH of a Strong Diprotic Base Ba(OH)₂",
          problem:
            "Calculate the pH of a 0.0250 mol dm⁻³ aqueous solution of barium hydroxide, Ba(OH)₂(aq), at 298 K (given K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.",
          steps: [
            "Write the complete dissociation equation: Ba(OH)₂(aq) → Ba²⁺(aq) + 2OH⁻(aq).",
            "Multiply concentration by 2 because each formula unit yields two hydroxide ions: [OH⁻] = 2 × 0.0250 = 0.0500 mol dm⁻³.",
            "Calculate pOH: pOH = −log₁₀(0.0500) = 1.301.",
            "Convert to pH at 298 K using pH = 14.00 − pOH = 14.00 − 1.301 = 12.699 → 12.70.",
          ],
          answer: "pH = 12.70",
          yourTurn: {
            question:
              "Calculate the pH of a 0.00400 mol dm⁻³ aqueous solution of Ba(OH)₂(aq) at 298 K (K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.",
            answer: { type: "number", value: 11.9, tolerance: 0.02, display: "11.90" },
            solution:
              "[OH⁻] = 2 × 0.00400 = 0.00800 mol dm⁻³. pOH = −log₁₀(0.00800) = 2.097, so pH = 14.00 − 2.097 = 11.90.",
          },
        },
        {
          title: "Neutral pH of Hot Water & Conjugate Pairs",
          problem:
            "At 323 K (50 °C), the ionic product of water is K_w = 5.48 × 10⁻¹⁴. Calculate the pH of pure water at 323 K to 2 decimal places, and state whether it is acidic, basic, or neutral.",
          steps: [
            "In pure water, autoionization produces equal concentrations of both ions: [H⁺] = [OH⁻].",
            "Substitute into K_w = [H⁺]² = 5.48 × 10⁻¹⁴, so [H⁺] = {{sqrt(5.48 * 10^(-14))}} = 2.341 × 10⁻⁷ mol dm⁻³.",
            "Take −log₁₀: pH = −log₁₀(2.341 × 10⁻⁷) = 6.6306 → 6.63.",
            "Because [H⁺] = [OH⁻], the solution is still strictly **neutral**, even though pH < 7.",
          ],
          answer: "pH = 6.63 (neutral)",
          yourTurn: {
            question:
              "At 313 K (40 °C), K_w = 2.92 × 10⁻¹⁴. Calculate the neutral pH of pure water at 313 K to 2 decimal places.",
            answer: { type: "number", value: 6.77, tolerance: 0.02, display: "6.77" },
            solution:
              "[H⁺] = √(2.92 × 10⁻¹⁴) = 1.709 × 10⁻⁷ mol dm⁻³. pH = −log₁₀(1.709 × 10⁻⁷) = 6.77.",
          },
        },
      ],
      keyPoints: [
        "Conjugate acid–base pairs ALWAYS differ by exactly one H⁺ (e.g. H₂CO₃ / HCO₃⁻, NOT H₂CO₃ / CO₃²⁻).",
        "Amphiprotic species (H₂O, HCO₃⁻, H₂PO₄⁻) can both donate and accept H⁺; all amphiprotic species are amphoteric, but not vice versa.",
        "For strong acids/bases, diluting by a factor of 10 shifts pH by 1.0 unit toward 7.0 (never past 7.0!).",
        "Autoionization of water is endothermic: higher T → larger K_w → lower neutral pH, while [H⁺] still equals [OH⁻].",
      ],
      whyItWorks:
        "Taking the negative base-10 logarithm compresses a 14-order-of-magnitude span of [H⁺] (from 1 mol dm⁻³ down to 10⁻¹⁴ mol dm⁻³) into a convenient 0–14 scale. Because `−log₁₀(a × b) = −log₁₀(a) + (−log₁₀(b))`, taking `−log₁₀` of both sides of `K_w = [H⁺][OH⁻]` turns multiplication directly into addition: `pK_w = pH + pOH`.",
      strategies: [
        "Always check stoichiometry first: `Ba(OH)₂` gives `2 OH⁻` per formula unit; `NaOH` gives `1 OH⁻`.",
        "When asked how to experimentally distinguish strong vs weak acid of identical concentration, quote measurable properties (pH meter, conductivity probe, rate of H₂ bubbling with Mg) — never say 'titrate with NaOH' because equivalence volumes are identical!",
        "Check significant figures: for logarithms (pH, pOH), the number of **decimal places** matches the number of significant figures in the concentration.",
      ],
      thinkDeeper:
        "If you dilute a 1.0 × 10⁻⁶ mol dm⁻³ HCl solution by a factor of 1000 to 1.0 × 10⁻⁹ mol dm⁻³, naive `−log₁₀(10⁻⁹)` predicts pH 9 — basic acid! Why is the true pH ≈ 6.998 instead? Because water's own autoionization supplies ≈ 10⁻⁷ mol dm⁻³ H⁺, which dominates once added acid falls below 10⁻⁶ mol dm⁻³.",
    },

    // =========================================================================
    // SECTION 2 (HL): R3.1 Ka/Kb, Salt Hydrolysis, Buffers & Titration Curves
    // =========================================================================
    {
      id: "weak-acids-buffers-titrations-hl",
      heading: "R3.1 Ka/Kb Calculations, Salt Hydrolysis, Buffers & Titration Curves",
      level: "HL",
      discovery: {
        problem:
          "You titrate 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (`pK_a = 4.76`) with 0.100 mol dm⁻³ NaOH. Halfway to equivalence (12.5 cm³ added), the pH is exactly 4.76 and barely moves when you add more NaOH. At equivalence (25.0 cm³ added), every mole of acid has reacted with every mole of NaOH — yet the pH meter reads **8.72**, not 7.00! Why is the equivalence point basic, and why does the curve flatten around pH 4.76?",
        idea:
          "At **half-equivalence**, `[CH₃COOH] = [CH₃COO⁻]` — a maximum-capacity **buffer** where both acid and conjugate base exist in equal reservoirs, so `K_a = [H⁺][A⁻]/[HA]` simplifies to `[H⁺] = K_a` and **`pH = pK_a = 4.76`**. At **equivalence**, the flask contains pure aqueous **CH₃COONa**; the conjugate base `CH₃COO⁻` hydrolyses water (`CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻`), producing excess OH⁻ and raising pH above 7!",
      },
      body: `### Weak Acid & Weak Base Equilibria (Kₐ, K_b, pKₐ, pK_b)
Weak acids and weak bases dissociate partially in water:
- Acid dissociation constant: \`K_a = {{([H^+] [A^-]) / [HA]}}\` and \`pK_a = −log₁₀(K_a)\`. **Larger \`K_a\` (smaller \`pK_a\`) = stronger weak acid.**
- Base dissociation constant: \`K_b = {{([BH^+] [OH^-]) / [B]}}\` and \`pK_b = −log₁₀(K_b)\`. **Larger \`K_b\` (smaller \`pK_b\`) = stronger weak base.**
- **Conjugate pair link (at 298 K):** \`K_a × K_b = K_w = 1.00 × 10⁻¹⁴\` and \`pK_a + pK_b = pK_w = 14.00\`. Thus, the stronger an acid is, the weaker its conjugate base!
- **Small-x approximation for weak acid pH:** Since \`[H⁺] ≈ [A⁻]\` and dissociation is small (\`[HA]_eq ≈ c\`, valid when < 5% dissociated):
  - \`[H⁺] ≈ {{sqrt(K_a * c)}}\`  or equivalently  \`pH ≈ {{1/2}}(pK_a − log₁₀ c)\`.
- Similarly for a weak base of concentration \`c\`: \`[OH⁻] ≈ {{sqrt(K_b * c)}}\`, then \`pOH = −log₁₀[OH⁻]\`, \`pH = 14.00 − pOH\`.

### Salt Hydrolysis — Why Salts Are Not Always Neutral
| Parent Acid + Parent Base | Example Salt | Hydrolysing Ion & Equation | Solution pH (298 K) |
|---|---|---|---|
| Strong acid + Strong base | NaCl, KNO₃ | Neither ion hydrolyses water | **Neutral (pH = 7)** |
| Weak acid + Strong base | CH₃COONa, NaHCO₃ | \`CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻\` | **Basic (pH > 7)** |
| Strong acid + Weak base | NH₄Cl, CH₃NH₃Cl | \`NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺\` | **Acidic (pH < 7)** |
| High charge-density metal ion | FeCl₃, Al(NO₃)₃ | \`[Fe(H₂O)₆]³⁺ ⇌ [Fe(H₂O)₅(OH)]²⁺ + H⁺\` | **Acidic (pH < 7)** |

Small, highly charged cations (\`Fe³⁺\`, \`Al³⁺\`, \`Cr³⁺\`) strongly polarise coordinated water O−H bonds, facilitating H⁺ loss.

### Buffer Solutions & Henderson–Hasselbalch
A **buffer solution** resists changes in pH upon addition of small amounts of strong acid or strong base (or upon modest dilution).
- **Acidic buffer** (e.g. \`CH₃COOH\` + \`CH₃COONa\`, made directly or by mixing **excess weak acid** with a strong base):
  - Added H⁺ is mopped up by the conjugate base reservoir: \`CH₃COO⁻(aq) + H⁺(aq) → CH₃COOH(aq)\`.
  - Added OH⁻ is neutralised by the weak acid reservoir: \`CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l)\`.
  - **Henderson–Hasselbalch:** \`pH = pK_a + log₁₀({{[A^-]/[HA]}})\` (moles may replace concentrations because both species share the same total volume!).
- **Basic buffer** (e.g. \`NH₃\` + \`NH₄Cl\`, or **excess weak base** + strong acid):
  - Added H⁺: \`NH₃(aq) + H⁺(aq) → NH₄⁺(aq)\`.
  - Added OH⁻: \`NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l)\`.
  - \`pOH = pK_b + log₁₀({{[BH^+]/[B]}})\`, then \`pH = 14.00 − pOH\`.

### pH Titration Curves & Acid–Base Indicators
- **Strong acid + Strong base:** Starts low (~pH 1), huge vertical jump (pH 3 → 11), equivalence at **pH = 7.00**. Both methyl orange and phenolphthalein work!
- **Weak acid + Strong base:** Starts higher (~pH 2.9), rises gradually through the **buffer region**, passes **half-equivalence where \`pH = pK_a\`**, shows a shorter vertical jump (pH 7 → 10.5) with **equivalence pH > 7** (e.g. 8.72). Choose **phenolphthalein** (range 8.3–10.0), NOT methyl orange!
- **Strong acid + Weak base:** Equivalence **pH < 7** (e.g. 5.28 for HCl + NH₃), vertical jump ~pH 3 → 7. Choose **methyl orange** (3.1–4.4) or **methyl red** (4.4–6.2), NOT phenolphthalein!
- **Weak acid + Weak base:** No sharp vertical jump — **no indicator is suitable**; use a pH meter instead.
- **Indicator theory:** An indicator is a weak acid \`HIn(aq) ⇌ H⁺(aq) + In⁻(aq)\` whose protonated (\`HIn\`) and deprotonated (\`In⁻\`) forms have distinct colours. Colour changes visibly over **\`pK_In ± 1\`**; an indicator is suitable when its entire transition range lies inside the vertical inflection of the titration curve.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="pH titration curves comparing 25 cm3 of 0.10 M HCl versus 0.10 M CH3COOH titrated with 0.10 M NaOH, marking the buffer region, half-equivalence point pH equals pKa 4.76, equivalence points at pH 7.0 and 8.72, and phenolphthalein versus methyl orange indicator bands">
  <rect width="640" height="310" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Titration Curves: Weak Acid (CH₃COOH) vs Strong Acid (HCl) + 0.10 M NaOH</text>
  <rect x="70" y="42" width="380" height="224" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
  <rect x="70" y="106" width="380" height="27" fill="#fce7f3" opacity="0.8"/>
  <text x="444" y="123" text-anchor="end" font-size="9.5" font-weight="700" fill="#be185d">Phenolphthalein (8.3–10.0) ✓</text>
  <rect x="70" y="195" width="380" height="21" fill="#ffedd5" opacity="0.8"/>
  <text x="444" y="209" text-anchor="end" font-size="9.5" font-weight="700" fill="#c2410c">Methyl orange (3.1–4.4) ✗ for weak acid</text>
  <line x1="70" y1="154" x2="450" y2="154" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="260" y1="42" x2="260" y2="266" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="165" y1="42" x2="165" y2="266" stroke="#6366f1" stroke-width="1" stroke-dasharray="3,3"/>
  <path d="M 70 250 L 165 245 L 235 234 L 254 218 L 260 154 L 266 90 L 285 74 L 355 64 L 450 58" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="6,4"/>
  <path d="M 70 220 C 100 202, 130 194, 165 190 C 200 185, 232 178, 252 162 L 260 126 L 268 88 C 282 74, 330 65, 450 58" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="165" cy="190" r="5" fill="#4f46e5"/>
  <circle cx="260" cy="126" r="5" fill="#2563eb"/>
  <circle cx="260" cy="154" r="4.5" fill="#64748b"/>
  <text x="64" y="47" text-anchor="end" font-size="10" fill="#334155">14</text>
  <text x="64" y="158" text-anchor="end" font-size="10" fill="#334155">7</text>
  <text x="64" y="268" text-anchor="end" font-size="10" fill="#334155">0</text>
  <text x="32" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a" transform="rotate(-90 32 158)">pH</text>
  <text x="70" y="282" text-anchor="middle" font-size="10" fill="#334155">0</text>
  <text x="165" y="282" text-anchor="middle" font-size="10" font-weight="700" fill="#4f46e5">12.5</text>
  <text x="260" y="282" text-anchor="middle" font-size="10" font-weight="700" fill="#2563eb">25.0</text>
  <text x="355" y="282" text-anchor="middle" font-size="10" fill="#334155">37.5</text>
  <text x="450" y="282" text-anchor="middle" font-size="10" fill="#334155">50.0</text>
  <text x="260" y="299" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Volume of 0.10 M NaOH added (cm³)</text>
  <rect x="466" y="42" width="156" height="224" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
  <text x="478" y="64" font-size="11" font-weight="700" fill="#1e3a8a">Key Landmarks</text>
  <line x1="478" y1="78" x2="504" y2="78" stroke="#2563eb" stroke-width="3"/><text x="510" y="82" font-size="10" fill="#0f172a">Weak + Strong</text>
  <line x1="478" y1="96" x2="504" y2="96" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="5,3"/><text x="510" y="100" font-size="10" fill="#0f172a">Strong + Strong</text>
  <text x="478" y="124" font-size="10" font-weight="700" fill="#4f46e5">● Half-equivalence:</text>
  <text x="478" y="138" font-size="9.5" fill="#334155">V = 12.5 cm³</text>
  <text x="478" y="151" font-size="9.5" fill="#334155">[HA] = [A⁻]</text>
  <text x="478" y="164" font-size="9.5" font-weight="700" fill="#312e81">pH = pKₐ = 4.76</text>
  <text x="478" y="188" font-size="10" font-weight="700" fill="#2563eb">● Equivalence point:</text>
  <text x="478" y="202" font-size="9.5" fill="#334155">V = 25.0 cm³</text>
  <text x="478" y="215" font-size="9.5" fill="#334155">Weak: pH = 8.72 (&gt;7)</text>
  <text x="478" y="228" font-size="9.5" fill="#334155">Strong: pH = 7.00</text>
  <text x="478" y="250" font-size="9.5" font-weight="700" fill="#0f172a">Buffer zone: 5–20 cm³</text>
</svg>`,
      diagramCaption:
        "Comparing strong vs weak monoprotic acid titrations with NaOH: weak acid starts higher, exhibits a flat buffer region centred at pH = pKₐ, and reaches equivalence above pH 7 due to conjugate-base hydrolysis.",
      workedExamples: [
        {
          title: "Calculating pH of a Weak Acid from Kₐ",
          problem:
            "Calculate the pH of a 0.200 mol dm⁻³ solution of ethanoic acid, CH₃COOH(aq), at 298 K given K_a = 1.74 × 10⁻⁵. State the two assumptions made.",
          steps: [
            "Write the equilibrium: CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq), so K_a = {{([H^+][CH_3COO^-]) / [CH_3COOH]}}.",
            "Assume [H⁺] = [CH₃COO⁻] = x (autoionization of water is negligible) and [CH₃COOH]_eq ≈ 0.200 mol dm⁻³ (dissociation is < 5%).",
            "Solve for x: x = {{sqrt(K_a * c)}} = {{sqrt(1.74 * 10^(-5) * 0.200)}} = 1.865 × 10⁻³ mol dm⁻³ (check: 0.93% dissociated, valid!).",
            "Compute pH: pH = −log₁₀(1.865 × 10⁻³) = 2.729 → 2.73.",
          ],
          answer: "pH = 2.73",
          yourTurn: {
            question:
              "Calculate the pH of a 0.250 mol dm⁻³ solution of propanoic acid at 298 K given K_a = 1.35 × 10⁻⁵. Give your answer to 2 decimal places.",
            answer: { type: "number", value: 2.74, tolerance: 0.02, display: "2.74" },
            solution:
              "[H⁺] = √(1.35 × 10⁻⁵ × 0.250) = 1.837 × 10⁻³ mol dm⁻³. pH = −log₁₀(1.837 × 10⁻³) = 2.74.",
          },
        },
        {
          title: "Buffer pH by Partial Neutralisation",
          problem:
            "40.0 cm³ of 0.250 mol dm⁻³ ethanoic acid (pK_a = 4.76) is mixed with 20.0 cm³ of 0.200 mol dm⁻³ NaOH(aq) at 298 K. Calculate the pH of the resulting buffer solution to 2 decimal places.",
          steps: [
            "Calculate initial moles: n(CH₃COOH) = 0.0400 × 0.250 = 0.0100 mol; n(OH⁻) = 0.0200 × 0.200 = 0.00400 mol.",
            "React limiting OH⁻ completely with CH₃COOH: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O.",
            "Remaining moles: n(CH₃COOH) = 0.0100 − 0.00400 = 0.00600 mol; formed n(CH₃COO⁻) = 0.00400 mol.",
            "Apply Henderson–Hasselbalch (total volume cancels in the ratio): pH = 4.76 + log₁₀({{0.00400 / 0.00600}}) = 4.76 − 0.176 = 4.58.",
          ],
          answer: "pH = 4.58",
          yourTurn: {
            question:
              "A buffer at 298 K contains 0.300 mol dm⁻³ CH₃COOH (pK_a = 4.76) and 0.450 mol dm⁻³ CH₃COONa. Calculate its pH to 2 decimal places.",
            answer: { type: "number", value: 4.94, tolerance: 0.02, display: "4.94" },
            solution:
              "pH = pK_a + log₁₀([A⁻]/[HA]) = 4.76 + log₁₀(0.450 / 0.300) = 4.76 + 0.176 = 4.94.",
          },
        },
      ],
      keyPoints: [
        "For any conjugate pair at 298 K: K_a × K_b = 1.00 × 10⁻¹⁴ and pK_a + pK_b = 14.00.",
        "Always check whether a weak base problem gives K_b (find [OH⁻] → pOH → pH = 14 − pOH) or pK_a of its conjugate acid.",
        "Buffer maximum capacity occurs at [HA] = [A⁻], where pH = pK_a; effective buffering spans pK_a ± 1.",
        "Salt hydrolysis determines equivalence pH: weak acid + strong base → pH > 7; strong acid + weak base → pH < 7.",
      ],
      whyItWorks:
        "Rearranging `K_a = [H⁺][A⁻]/[HA]` gives `[H⁺] = K_a × ([HA]/[A⁻])`. Taking `−log₁₀` yields Henderson–Hasselbalch: `pH = pK_a + log₁₀([A⁻]/[HA])`. Because pH depends only on the *ratio* `[A⁻]/[HA]` and both reservoirs are large, adding a small quantity of H⁺ or OH⁻ nudges the ratio barely at all, keeping `log₁₀([A⁻]/[HA])` — and hence pH — almost constant.",
      strategies: [
        "In partial-neutralisation buffer questions, always work in **moles** (not concentrations!) first to subtract limiting strong base/acid — total volume cancels out in `[A⁻]/[HA]`.",
        "If an IB question asks for the pH of a salt solution like `CH₃COONa(aq)` at equivalence, remember to divide total moles by the **combined** volume (`V_acid + V_base`) before computing `[OH⁻] = √(K_b × c)`!",
        "When justifying an indicator choice, explicitly link BOTH the indicator's `pK_In ± 1` transition range AND the vertical region of the titration curve.",
      ],
      thinkDeeper:
        "Human arterial blood is buffered at pH 7.40 by the `H₂CO₃ / HCO₃⁻` system whose `pK_a` at 37 °C is 6.10 — outside the normal `pK_a ± 1` rule! That gives a 20 : 1 `[HCO₃⁻] : [H₂CO₃]` ratio. Why does blood still stay rock-steady? Because it is an *open* buffer: your lungs rapidly exhale CO₂ to adjust `[H₂CO₃]` in seconds while kidneys regulate `[HCO₃⁻]`!",
    },

    // =========================================================================
    // SECTION 3 (SL): R3.2 Oxidation States, Half-Equations, Voltaic & Molten Cells
    // =========================================================================
    {
      id: "redox-voltaic-electrolytic",
      heading: "R3.2 Oxidation States, Half-Equations, Voltaic & Molten Cells",
      level: "SL",
      discovery: {
        problem:
          "Drop a strip of zinc into blue copper(II) sulfate solution: copper coats the zinc and the beaker gets warm, wasting all the reaction energy as heat. Now put the zinc rod in `ZnSO₄(aq)` and a copper rod in `CuSO₄(aq)`, connect the metals by an external wire with a voltmeter — nothing flows! Add a U-tube filled with `KNO₃(aq)` (a salt bridge), and instantly the voltmeter jumps to **+1.10 V**. Why does the current die the instant the salt bridge is lifted?",
        idea:
          "As Zn oxidises (`Zn → Zn²⁺ + 2e⁻`), the anode beaker builds up excess positive charge, while the cathode beaker loses positive `Cu²⁺` ions and becomes negatively charged. Without a **salt bridge** supplying counter-ions (`NO₃⁻` into the Zn beaker, `K⁺` into the Cu beaker), electrostatic charge build-up halts electron flow within microseconds!",
      },
      body: `### Oxidation States, Agents & Balancing Half-Equations
- **Oxidation** = loss of electrons / increase in oxidation state (**OIL**). The species oxidised is the **reducing agent** (reductant).
- **Reduction** = gain of electrons / decrease in oxidation state (**RIG**). The species reduced is the **oxidising agent** (oxidant).
- **Key oxidation-state rules:** Free elements = 0; monatomic ions = charge; F = −1 always; O = −2 (except **−1 in peroxides** like H₂O₂, and +2 in OF₂); H = +1 (except **−1 in metal hydrides** like NaH, LiAlH₄). Use Roman numerals in IUPAC names, e.g. iron(III) oxide, potassium manganate(VII).
- **Balancing acidic half-equations (4-step recipe):**
  1. Balance the main atom being oxidised or reduced.
  2. Balance **O** atoms by adding **H₂O**.
  3. Balance **H** atoms by adding **H⁺**.
  4. Balance net **charge** by adding **e⁻** to the more positive side; multiply both half-equations so electrons lost = electrons gained, then add and cancel.

### Activity Series, Displacements & Winkler BOD Method
- A more reactive metal displaces a less reactive metal ion from solution (e.g. \`Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\`). Among halogens, oxidising power decreases down Group 17: **Cl₂ > Br₂ > I₂** (so Cl₂ oxidises Br⁻ and I⁻, but I₂ cannot oxidise Br⁻ or Cl⁻).
- **Winkler method for Biochemical Oxygen Demand (BOD):** Measures dissolved \`O₂\` in water via three linked redox steps:
  1. \`2Mn²⁺(aq) + O₂(aq) + 4OH⁻(aq) → 2MnO₂(s) + 2H₂O(l)\`
  2. \`MnO₂(s) + 2I⁻(aq) + 4H⁺(aq) → Mn²⁺(aq) + I₂(aq) + 2H₂O(l)\`
  3. \`2S₂O₃²⁻(aq) + I₂(aq) → S₄O₆²⁻(aq) + 2I⁻(aq)\`
  - Overall mole ratio: **\`1 mol O₂ : 2 mol MnO₂ : 2 mol I₂ : 4 mol S₂O₃²⁻\`** → \`n(O₂) = {{1/4}} n(S₂O₃²⁻)\`.
  - **BOD** = \`[O₂]_day 0 − [O₂]_day 5\` (in mg dm⁻³ or ppm). High BOD signals heavy organic pollution and microbial oxygen depletion.

### Voltaic (Galvanic) Cells vs Electrolytic Cells
One golden rule NEVER changes across ALL electrochemical cells: **Oxidation ALWAYS occurs at the ANODE; Reduction ALWAYS occurs at the CATHODE (An Ox, Red Cat).** What flips is electrode polarity and energy direction:

| Feature | Voltaic (Galvanic) Cell | Electrolytic Cell (e.g. molten PbBr₂ or NaCl) |
|---|---|---|
| Energy conversion | Chemical → Electrical (**spontaneous**) | Electrical → Chemical (**non-spontaneous**) |
| Anode (Oxidation) | **Negative (−)** electrode | **Positive (+)** electrode |
| Cathode (Reduction) | **Positive (+)** electrode | **Negative (−)** electrode |
| External wire e⁻ flow | Anode (−) → Cathode (+) | Battery pushes e⁻ from (+) anode → (−) cathode |
| Internal ion movement | Salt bridge: anions → anode, cations → cathode | Molten electrolyte: anions → (+) anode, cations → (−) cathode |
| Cell notation (voltaic) | \`Anode | Anode ion || Cathode ion | Cathode\` | Single molten bath with inert Pt or graphite electrodes |

- **Batteries & Fuel Cells:** Primary cells (non-rechargeable) vs secondary rechargeable cells (e.g. Li-ion, lead-acid — discharging = voltaic, charging = electrolytic) vs **fuel cells** (continuous supply of H₂ or CH₃OH fuel and O₂ oxidant; alkaline/acidic PEM H₂ fuel cell produces only H₂O at high thermodynamic efficiency).
- **Organic Redox (SL link):** Primary alcohols oxidise via acidified \`K₂Cr₂O₇\` (orange Cr(VI) → green Cr(III)) to **aldehydes** (distillation) or **carboxylic acids** (reflux); secondary alcohols oxidise to **ketones**; tertiary alcohols resist oxidation. \`NaBH₄\` or \`LiAlH₄\` reduces aldehydes/ketones back to 1°/2° alcohols.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-label="Side-by-side comparison of a Daniell voltaic cell (Zn anode negative to Cu cathode positive with KNO3 salt bridge) and a molten PbBr2 electrolytic cell (external DC power supply driving oxidation at positive anode and reduction at negative cathode)">
  <rect width="640" height="300" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Voltaic Cell (Spontaneous) vs Molten Electrolytic Cell (Driven)</text>
  <rect x="16" y="38" width="350" height="248" rx="10" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="191" y="56" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d4ed8">Daniell Voltaic Cell · Zn | Zn²⁺ || Cu²⁺ | Cu</text>
  <rect x="38" y="138" width="116" height="106" rx="6" fill="#eff6ff" stroke="#64748b" stroke-width="1.5"/>
  <rect x="228" y="138" width="116" height="106" rx="6" fill="#dbeafe" stroke="#64748b" stroke-width="1.5"/>
  <rect x="64" y="106" width="22" height="104" rx="3" fill="#94a3b8" stroke="#334155" stroke-width="1.2"/>
  <text x="75" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">Zn</text>
  <rect x="296" y="106" width="22" height="104" rx="3" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
  <text x="307" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cu</text>
  <path d="M 122 170 L 122 122 C 122 108, 260 108, 260 122 L 260 170" fill="none" stroke="#a855f7" stroke-width="14" stroke-linecap="round"/>
  <path d="M 122 170 L 122 122 C 122 108, 260 108, 260 122 L 260 170" fill="none" stroke="#f3e8ff" stroke-width="10" stroke-linecap="round"/>
  <text x="191" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="#6b21a8">Salt bridge (KNO₃)</text>
  <text x="150" y="130" text-anchor="middle" font-size="8.5" font-weight="700" fill="#7e22ce">← NO₃⁻</text>
  <text x="232" y="130" text-anchor="middle" font-size="8.5" font-weight="700" fill="#7e22ce">K⁺ →</text>
  <path d="M 75 106 L 75 76 L 166 76" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 216 76 L 307 76 L 307 106" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="191" cy="76" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
  <text x="191" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">1.10 V</text>
  <text x="128" y="71" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">e⁻ →</text>
  <text x="256" y="71" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">e⁻ →</text>
  <text x="96" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e293b">Zn²⁺(aq)</text>
  <text x="286" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e3a8a">Cu²⁺(aq)</text>
  <text x="96" y="261" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Anode (−): Oxidation</text>
  <text x="96" y="274" text-anchor="middle" font-size="9" fill="#334155">Zn → Zn²⁺ + 2e⁻</text>
  <text x="286" y="261" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Cathode (+): Reduction</text>
  <text x="286" y="274" text-anchor="middle" font-size="9" fill="#334155">Cu²⁺ + 2e⁻ → Cu</text>
  <rect x="382" y="38" width="242" height="248" rx="10" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="503" y="56" text-anchor="middle" font-size="11.5" font-weight="700" fill="#b91c1c">Electrolytic Cell · Molten PbBr₂(l)</text>
  <rect x="406" y="138" width="194" height="106" rx="6" fill="#fef3c7" stroke="#64748b" stroke-width="1.5"/>
  <rect x="434" y="106" width="20" height="104" rx="3" fill="#334155"/>
  <rect x="552" y="106" width="20" height="104" rx="3" fill="#334155"/>
  <path d="M 444 106 L 444 76 L 484 76" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 522 76 L 562 76 L 562 106" fill="none" stroke="#0f172a" stroke-width="2"/>
  <rect x="484" y="64" width="38" height="24" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="503" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">+ DC −</text>
  <text x="464" y="71" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">e⁻ →</text>
  <text x="542" y="71" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">e⁻ →</text>
  <text x="478" y="186" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">← Br⁻</text>
  <text x="528" y="186" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e3a8a">Pb²⁺ →</text>
  <text x="503" y="232" text-anchor="middle" font-size="9.5" fill="#78350f">Molten PbBr₂(l) (free ions)</text>
  <text x="446" y="261" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">Anode (+): Ox</text>
  <text x="446" y="274" text-anchor="middle" font-size="9" fill="#334155">2Br⁻ → Br₂ + 2e⁻</text>
  <text x="560" y="261" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Cathode (−): Red</text>
  <text x="560" y="274" text-anchor="middle" font-size="9" fill="#334155">Pb²⁺ + 2e⁻ → Pb</text>
</svg>`,
      diagramCaption:
        "In BOTH cells, oxidation occurs at the anode and reduction at the cathode, and external electrons flow from anode to cathode. Only the electrode signs flip!",
      workedExamples: [
        {
          title: "Balancing a Redox Equation in Acidic Medium",
          problem:
            "Deduce the balanced ionic equation for the reaction of acidified manganate(VII) ions, MnO₄⁻(aq), with iron(II) ions, Fe²⁺(aq), forming Mn²⁺(aq) and Fe³⁺(aq).",
          steps: [
            "Write the reduction half-equation for MnO₄⁻ → Mn²⁺: Mn is balanced (1 each); add 4 H₂O on RHS to balance O; add 8 H⁺ on LHS to balance H.",
            "Balance charge on Mn half-equation: LHS is (−1) + (+8) = +7; RHS is +2. Add 5 e⁻ to LHS: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.",
            "Write the oxidation half-equation: Fe²⁺ → Fe³⁺ + e⁻.",
            "Multiply the Fe half-equation by 5 so electrons match (5 e⁻ lost = 5 e⁻ gained) and combine: MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l).",
          ],
          answer: "MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)",
          yourTurn: {
            question:
              "In the balanced acidic reduction half-equation converting Cr₂O₇²⁻(aq) into 2Cr³⁺(aq), how many moles of electrons (e⁻) are gained per mole of Cr₂O₇²⁻?",
            answer: { type: "number", value: 6, display: "6" },
            solution:
              "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. Each Cr drops from +6 to +3 (3 e⁻ each), so 2 Cr atoms gain 6 e⁻ total.",
          },
        },
        {
          title: "Winkler Method for Dissolved Oxygen",
          problem:
            "A 50.0 cm³ river water sample is analysed by the Winkler method. The liberated iodine requires 11.20 cm³ of 0.00500 mol dm⁻³ Na₂S₂O₃(aq) to reach the starch end-point. Calculate the dissolved O₂ concentration in mg dm⁻³ (ppm), given M(O₂) = 32.00 g mol⁻¹.",
          steps: [
            "Calculate moles of thiosulfate used: n(S₂O₃²⁻) = 0.01120 dm³ × 0.00500 mol dm⁻³ = 5.60 × 10⁻⁵ mol.",
            "Apply the overall Winkler mole ratio (1 mol O₂ : 4 mol S₂O₃²⁻): n(O₂) = {{(5.60 * 10^(-5)) / 4}} = 1.40 × 10⁻⁵ mol.",
            "Find molar concentration of O₂ in the 50.0 cm³ (0.0500 dm³) sample: [O₂] = {{(1.40 * 10^(-5)) / 0.0500}} = 2.80 × 10⁻⁴ mol dm⁻³.",
            "Convert to mg dm⁻³ (ppm): 2.80 × 10⁻⁴ mol dm⁻³ × 32.00 g mol⁻¹ × 1000 mg g⁻¹ = 8.96 mg dm⁻³.",
          ],
          answer: "8.96 mg dm⁻³ (ppm)",
          yourTurn: {
            question:
              "A 100.0 cm³ lake water sample treated by the Winkler method requires 18.00 cm³ of 0.00500 mol dm⁻³ Na₂S₂O₃(aq). Calculate the dissolved O₂ concentration in mg dm⁻³ (M(O₂) = 32.00 g mol⁻¹).",
            answer: { type: "number", value: 7.2, tolerance: 0.05, display: "7.20" },
            solution:
              "n(S₂O₃²⁻) = 0.01800 × 0.00500 = 9.00 × 10⁻⁵ mol. n(O₂) = 9.00 × 10⁻⁵ / 4 = 2.25 × 10⁻⁵ mol. [O₂] = 2.25 × 10⁻⁵ / 0.1000 = 2.25 × 10⁻⁴ mol dm⁻³ → × 32.00 × 1000 = 7.20 mg dm⁻³.",
          },
        },
      ],
      keyPoints: [
        "Oxidation is electron loss (increase in oxidation state); reduction is electron gain (decrease in oxidation state).",
        "An Ox / Red Cat holds in EVERY cell; only polarities swap (voltaic anode is −, electrolytic anode is +).",
        "Electrons NEVER swim through aqueous solutions or salt bridges — electrons travel in external wires while ions move through electrolytes.",
        "In the Winkler BOD method, always remember the 1 : 4 ratio: n(O₂) = n(S₂O₃²⁻) / 4.",
      ],
      whyItWorks:
        "A redox reaction is spontaneous when electrons drop from a higher chemical potential energy (a stronger reducing agent like Zn) to a lower energy state (a stronger oxidising agent like Cu²⁺). Separating the two half-cells forces those electrons to detour through an external circuit where their drop in energy does useful electrical work instead of merely heating the beaker.",
      strategies: [
        "When balancing half-equations, do a final **atom AND charge check** on both sides — charge imbalance is the #1 caught-in-2-seconds sanity check.",
        "In voltaic cell notation `Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)`, read alphabetically: **A**node on the left, **C**athode on the right; single `|` = phase boundary, double `||` = salt bridge.",
        "For molten electrolysis, remember solid ionic salts DO NOT conduct because ions are locked in the lattice — melting frees mobile ions to migrate to oppositely charged electrodes.",
      ],
      thinkDeeper:
        "Why is `KNO₃(aq)` preferred over `NaCl(aq)` in a salt bridge for a `Cu / Ag⁺` voltaic cell? Because `Cl⁻` ions diffusing into the `Ag⁺(aq)` half-cell would precipitate insoluble white `AgCl(s)`, dropping `[Ag⁺]` and altering the measured cell voltage!",
    },

    // =========================================================================
    // SECTION 4 (HL): R3.2 Standard Electrode Potentials, ΔG⊖ = −nFE⊖ & Aqueous Electrolysis
    // =========================================================================
    {
      id: "electrode-potentials-aqueous-electrolysis-hl",
      heading: "R3.2 Standard Electrode Potentials, ΔG⊖ = −nFE⊖ & Aqueous Electrolysis",
      level: "HL",
      discovery: {
        problem:
          "Look up standard reduction potentials for aqueous sodium chloride (brine): `O₂ + 4H⁺ + 4e⁻ ⇌ 2H₂O` (`+1.23 V`) and `Cl₂ + 2e⁻ ⇌ 2Cl⁻` (`+1.36 V`). Thermodynamically, oxidising water to O₂ takes LESS voltage than oxidising Cl⁻ to Cl₂. Yet in the industrial chlor-alkali process, electrolysing **concentrated** NaCl(aq) releases pale-green **Cl₂ gas** at the anode — whereas **dilute** NaCl(aq) releases **O₂ gas**. Why does concentration overturn the standard `E⊖` prediction?",
        idea:
          "Standard `E⊖` values apply ONLY at **1.0 mol dm⁻³** and ignore kinetics! In concentrated brine, two effects favour `2Cl⁻ → Cl₂ + 2e⁻`: (1) high `[Cl⁻]` lowers the actual potential needed for Cl⁻ oxidation via Le Chatelier's principle, and (2) oxygen evolution on graphite/Pt suffers a large kinetic **overpotential**, making Cl₂ formation faster!",
      },
      body: `### Standard Hydrogen Electrode (SHE) & Calculating E⊖_cell
You cannot measure the absolute potential of a single half-cell — only a potential *difference*. Chemists therefore define the **Standard Hydrogen Electrode (SHE)** as exactly **0.00 V** under standard conditions:
- \`2H⁺(aq) + 2e⁻ ⇌ H₂(g)\`, \`E⊖ = 0.00 V\`
- Conditions: **\`[H⁺] = 1.0 mol dm⁻³\`**, **\`H₂(g)\` at 100 kPa**, **298 K**, inert **platinised platinum** electrode (high surface area catalyst).

Every half-cell in the IB Data Booklet is written as a **reduction** (\`Ox + ne⁻ ⇌ Red\`):
- **More positive \`E⊖\`** → greater tendency to be reduced → species on the **left** is a stronger **oxidising agent** (e.g. \`MnO₄⁻\`, \`Cl₂\`, \`F₂\`).
- **More negative \`E⊖\`** → greater tendency to be oxidised → species on the **right** is a stronger **reducing agent** (e.g. \`Li\`, \`Mg\`, \`Zn\`).
- **Cell potential formula:** \`E⊖_cell = E⊖_cathode(reduction) − E⊖_anode(oxidation)\`.
- **Crucial rule:** \`E⊖\` is an **intensive property** (energy per coulomb of charge, \`J C⁻¹\`). **NEVER multiply \`E⊖\`** when multiplying a half-equation to balance electrons!

### Spontaneity & Gibbs Free Energy: ΔG⊖ = −nFE⊖
- \`ΔG⊖ = −n F E⊖_cell\`, where \`n\` = moles of electrons transferred in the **balanced** cell equation and \`F = 96 500 C mol⁻¹\`.
- Watch units carefully! \`n × F × E⊖\` gives **J mol⁻¹** — divide by **1000** for **kJ mol⁻¹**!
- **Thermodynamic link:**
  - \`E⊖_cell > 0\` ⇔ \`ΔG⊖ < 0\` ⇔ \`K_c > 1\` → **spontaneous** forward reaction under standard conditions.
  - \`E⊖_cell < 0\` ⇔ \`ΔG⊖ > 0\` ⇔ \`K_c < 1\` → **non-spontaneous** forward reaction.
  - Even when \`E⊖_cell > 0\`, a reaction may appear not to occur if its **activation energy is very high** (kinetic control) or concentrations are far from 1.0 mol dm⁻³.

### Selective Discharge in Aqueous Electrolysis
In aqueous solutions, water itself can be reduced at the cathode (\`2H₂O + 2e⁻ → H₂ + 2OH⁻\`, \`−0.83 V\` at pH 7/alkaline; \`2H⁺ + 2e⁻ → H₂\`, \`0.00 V\` in acid) or oxidised at the anode (\`2H₂O → O₂ + 4H⁺ + 4e⁻\`, \`+1.23 V\`). Three factors govern which species discharges:
1. **Position in the \`E⊖\` series:** At the cathode, the species with the **most positive \`E⊖\`** is reduced first (e.g. \`Cu²⁺\` at +0.34 V beats \`H₂O\`, whereas \`Na⁺\` at −2.71 V loses to \`H₂O\`, producing **H₂(g)** + alkaline **OH⁻**!). At the anode, the species with the **least positive (most negative) \`E⊖\`** is oxidised first.
2. **Concentration & overpotential:** In **concentrated NaCl(aq)**, \`Cl⁻\` oxidises to **Cl₂(g)** at the anode; in **dilute NaCl(aq)**, \`H₂O\` oxidises to **O₂(g)**. At the cathode, BOTH yield **H₂(g)** + **OH⁻(aq)**.
3. **Nature of electrodes (inert vs active):** Electrolysing \`CuSO₄(aq)\` with **inert graphite/Pt electrodes** deposits Cu at the cathode and evolves **O₂(g)** at the anode (solution fades from blue to colourless and turns acidic as H⁺ accumulates). With **active copper electrodes**, the Cu anode itself oxidises (\`Cu(s) → Cu²⁺(aq) + 2e⁻\`, \`+0.34 V\`, much easier than oxidising water at \`+1.23 V\`!), so \`[Cu²⁺]\` and blue colour stay constant — the basis of industrial **copper electrorefining**!

### Quantitative Electrolysis (Faraday's Laws)
- Total charge passed: \`Q = I × t\` (current \`I\` in amperes, time \`t\` in **seconds**!).
- Moles of electrons transferred: \`n(e⁻) = {{Q / F}} = {{(I * t) / 96500}}\`.
- Moles of product formed: \`n(product) = {{n(e^-) / z}}\`, where \`z\` is the electrons per mole of product (e.g. \`z = 1\` for Ag, \`z = 2\` for Cu/H₂/Cl₂, \`z = 3\` for Al, \`z = 4\` for O₂).
- **Cells connected in series** carry the exact same charge \`Q\` and hence the exact same \`n(e⁻)\`, so the mole ratio of deposited metals equals the **inverse ratio of their ionic charges** (e.g. \`2 mol Ag : 1 mol Cu\`).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 296" role="img" aria-label="Standard Hydrogen Electrode (SHE) at 0.00 V with 100 kPa H2 gas, platinised platinum electrode, and 1.0 M H+ connected via voltmeter (+0.34 V) and salt bridge to a Cu2+/Cu half-cell">
  <rect width="640" height="296" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Measuring E⊖ with the Standard Hydrogen Electrode (SHE = 0.00 V, 298 K)</text>
  <rect x="40" y="130" width="170" height="122" rx="8" fill="#fef9c3" stroke="#64748b" stroke-width="1.5"/>
  <rect x="330" y="130" width="150" height="122" rx="8" fill="#dbeafe" stroke="#64748b" stroke-width="1.5"/>
  <path d="M 96 96 L 96 196 L 154 196 L 154 96" fill="none" stroke="#475569" stroke-width="2"/>
  <path d="M 52 114 L 96 114" stroke="#0284c7" stroke-width="2.5"/>
  <text x="44" y="108" font-size="9.5" font-weight="700" fill="#0369a1">H₂(g)</text>
  <text x="44" y="122" font-size="8.5" fill="#0369a1">100 kPa</text>
  <rect x="118" y="148" width="14" height="58" rx="2" fill="#1e293b"/>
  <line x1="125" y1="68" x2="125" y2="148" stroke="#0f172a" stroke-width="2"/>
  <circle cx="110" cy="186" r="3" fill="#38bdf8"/><circle cx="140" cy="172" r="3" fill="#38bdf8"/><circle cx="136" cy="192" r="2.5" fill="#38bdf8"/>
  <text x="125" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#854d0e">1.0 mol dm⁻³ H⁺(aq)</text>
  <text x="125" y="245" text-anchor="middle" font-size="9" fill="#475569">Platinised Pt electrode</text>
  <rect x="398" y="106" width="22" height="106" rx="3" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
  <text x="409" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cu</text>
  <text x="405" y="232" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1e3a8a">1.0 mol dm⁻³ Cu²⁺(aq)</text>
  <text x="405" y="245" text-anchor="middle" font-size="9" fill="#475569">Cathode (+) · Reduction</text>
  <path d="M 184 174 L 184 118 C 184 104, 356 104, 356 118 L 356 174" fill="none" stroke="#a855f7" stroke-width="13" stroke-linecap="round"/>
  <path d="M 184 174 L 184 118 C 184 104, 356 104, 356 118 L 356 174" fill="none" stroke="#f3e8ff" stroke-width="9" stroke-linecap="round"/>
  <text x="270" y="111" text-anchor="middle" font-size="9" font-weight="700" fill="#6b21a8">Salt bridge (KNO₃)</text>
  <path d="M 125 68 L 242 68" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 298 68 L 409 68 L 409 106" fill="none" stroke="#0f172a" stroke-width="2"/>
  <circle cx="270" cy="68" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="270" y="72" text-anchor="middle" font-size="10.5" font-weight="700" fill="#166534">+0.34 V</text>
  <text x="184" y="61" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">e⁻ →</text>
  <text x="356" y="61" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">e⁻ →</text>
  <rect x="498" y="46" width="128" height="206" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2"/>
  <text x="562" y="68" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">HL Electrochem</text>
  <text x="562" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Core Equations</text>
  <text x="508" y="108" font-size="9.5" font-weight="700" fill="#1d4ed8">E⊖cell = E⊖cat − E⊖an</text>
  <text x="508" y="128" font-size="9.5" font-weight="700" fill="#b91c1c">ΔG⊖ = −n F E⊖cell</text>
  <text x="508" y="143" font-size="8.5" fill="#475569">F = 96 500 C mol⁻¹</text>
  <text x="508" y="156" font-size="8.5" fill="#475569">(÷1000 for kJ mol⁻¹)</text>
  <line x1="508" y1="168" x2="616" y2="168" stroke="#cbd5e1" stroke-width="1"/>
  <text x="508" y="186" font-size="9.5" font-weight="700" fill="#15803d">Faraday Laws:</text>
  <text x="508" y="202" font-size="9.5" fill="#334155">Q = I × t (t in s)</text>
  <text x="508" y="218" font-size="9.5" fill="#334155">n(e⁻) = Q / F</text>
  <text x="508" y="234" font-size="9.5" fill="#334155">n(M) = n(e⁻) / z</text>
  <text x="320" y="278" text-anchor="middle" font-size="10.5" fill="#334155">SHE acts as anode (−) vs Cu²⁺/Cu (+0.34 V), and as cathode (+) vs Zn²⁺/Zn (−0.76 V)</text>
</svg>`,
      diagramCaption:
        "The SHE is defined as 0.00 V under standard conditions (100 kPa H₂, 1.0 mol dm⁻³ H⁺, 298 K, platinised Pt). High-resistance voltmeters draw negligible current so standard concentrations remain intact.",
      workedExamples: [
        {
          title: "Calculating E⊖_cell and ΔG⊖ for a Zn / Ag⁺ Cell",
          problem:
            "Given E⊖(Zn²⁺/Zn) = −0.76 V, E⊖(Ag⁺/Ag) = +0.80 V, and F = 96 500 C mol⁻¹, calculate E⊖_cell and ΔG⊖ (in kJ mol⁻¹) for the spontaneous voltaic cell formed from these half-cells.",
          steps: [
            "Identify cathode (more positive E⊖) = Ag⁺/Ag (+0.80 V) and anode (more negative E⊖) = Zn²⁺/Zn (−0.76 V).",
            "Balance overall equation: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s), so n = 2 mol of electrons transferred.",
            "Calculate E⊖_cell WITHOUT multiplying +0.80 V by 2: E⊖_cell = (+0.80) − (−0.76) = +1.56 V.",
            "Calculate ΔG⊖ = −n F E⊖_cell = −(2)(96 500)(1.56) = −301 080 J mol⁻¹ = −301 kJ mol⁻¹ (3 s.f.).",
          ],
          answer: "E⊖_cell = +1.56 V; ΔG⊖ = −301 kJ mol⁻¹",
          yourTurn: {
            question:
              "Given E⊖(Al³⁺/Al) = −1.66 V, E⊖(Cu²⁺/Cu) = +0.34 V, and F = 96 500 C mol⁻¹, calculate ΔG⊖ in kJ mol⁻¹ for the balanced spontaneous reaction 2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s). Give your answer to 4 significant figures.",
            answer: { type: "number", value: -1158, tolerance: 2, display: "−1158 kJ mol⁻¹" },
            solution:
              "E⊖_cell = (+0.34) − (−1.66) = +2.00 V. In 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu, n = 6 mol e⁻. ΔG⊖ = −6 × 96 500 × 2.00 = −1 158 000 J mol⁻¹ = −1158 kJ mol⁻¹.",
          },
        },
        {
          title: "Quantitative Faraday Electroplating of Copper",
          problem:
            "A steady current of 2.50 A is passed through aqueous copper(II) sulfate, CuSO₄(aq), for 32.0 minutes. Calculate the mass of copper deposited at the cathode (M(Cu) = 63.55 g mol⁻¹, F = 96 500 C mol⁻¹).",
          steps: [
            "Convert time to seconds: t = 32.0 × 60 = 1920 s.",
            "Calculate total electric charge: Q = I × t = 2.50 A × 1920 s = 4800 C.",
            "Calculate moles of electrons: n(e⁻) = {{4800 / 96500}} = 0.04974 mol.",
            "From Cu²⁺(aq) + 2e⁻ → Cu(s), z = 2: n(Cu) = {{0.04974 / 2}} = 0.02487 mol → m(Cu) = 0.02487 × 63.55 = 1.58 g.",
          ],
          answer: "1.58 g",
          yourTurn: {
            question:
              "A current of 1.50 A is passed through AgNO₃(aq) for 25.0 minutes. Calculate the mass of silver (in g) deposited at the cathode (M(Ag) = 107.87 g mol⁻¹, F = 96 500 C mol⁻¹). Give your answer to 2 decimal places.",
            answer: { type: "number", value: 2.52, tolerance: 0.02, display: "2.52 g" },
            solution:
              "Q = 1.50 × (25.0 × 60) = 2250 C. n(e⁻) = 2250 / 96 500 = 0.02332 mol. Since Ag⁺ + e⁻ → Ag (z = 1), m(Ag) = 0.02332 × 107.87 = 2.52 g.",
          },
        },
      ],
      keyPoints: [
        "SHE conditions MUST all be specified: 1.0 mol dm⁻³ H⁺(aq), H₂(g) at 100 kPa, 298 K, platinised Pt electrode, E⊖ = 0.00 V.",
        "E⊖ is intensive: NEVER multiply E⊖ by stoichiometric coefficients — only n in ΔG⊖ = −nFE⊖ scales with the balanced equation.",
        "In aqueous electrolysis, active copper anodes dissolve (Cu → Cu²⁺ + 2e⁻), keeping [Cu²⁺] constant, whereas inert graphite anodes evolve O₂(g) and make the solution acidic.",
        "Always convert minutes/hours to seconds before using Q = It, and divide by 1000 when converting ΔG⊖ from J mol⁻¹ to kJ mol⁻¹.",
      ],
      whyItWorks:
        "Voltage is work per unit charge (`1 V = 1 J C⁻¹`), so the maximum electrical work per mole of reaction equals total charge transferred (`n × F` coulombs) multiplied by the cell voltage (`E⊖_cell`). Because spontaneous cells release free energy to do external work, `ΔG⊖ = −w_elec,max = −n F E⊖_cell` — seamlessly uniting thermodynamics (R1.4) and electrochemistry (R3.2)!",
      strategies: [
        "When testing whether a redox reaction is spontaneous, compute `E⊖_cell = E⊖(reduced species) − E⊖(oxidised species)` directly from the target direction — if positive, spontaneous!",
        "For cells in series, skip `Q` and `F` altogether if only comparing masses: `n(e⁻)` is identical in every cell, so `n₁ × z₁ = n₂ × z₂`.",
        "When predicting aqueous electrolysis products, always list ALL species present at each electrode (ions + H₂O + electrode material if active!) before comparing `E⊖` values and concentration.",
      ],
      thinkDeeper:
        "Combining `ΔG⊖ = −nFE⊖` with `ΔG⊖ = −RT ln K` gives `E⊖ = (RT / nF) ln K`. At 298 K, even a modest `E⊖_cell = +0.30 V` for a 2-electron transfer corresponds to `K ≈ 1.4 × 10¹⁰` — meaning almost every voltaic cell with `E⊖ > 0.3 V` drives its reaction essentially to completion!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Brønsted–Lowry acid vs base",
        back: "An acid is a proton (H⁺) donor; a base is a proton (H⁺) acceptor. Conjugate acid–base pairs differ by exactly one H⁺.",
        level: "SL",
      },
      {
        front: "Amphiprotic vs amphoteric",
        back: "Amphiprotic species can both donate and accept a proton (e.g. H₂O, HCO₃⁻). Amphoteric species react with both acids and bases (includes non-proton donors like Al₂O₃).",
        level: "SL",
      },
      {
        front: "Why is pure water at 50 °C (pH 6.63) still neutral?",
        back: "Water autoionization (H₂O ⇌ H⁺ + OH⁻) is endothermic. Heating raises K_w and [H⁺] = [OH⁻] equally, lowering pH while maintaining [H⁺] = [OH⁻].",
        level: "SL",
      },
      {
        front: "Four experimental tests to distinguish 0.1 M HCl from 0.1 M CH₃COOH",
        back: "1) Lower pH; 2) Higher electrical conductivity; 3) Faster initial rate with Mg/CaCO₃; 4) More exothermic enthalpy of neutralisation. (NOT titration volume with NaOH — identical!)",
        level: "SL",
      },
      {
        front: "Why is natural rain pH ≈ 5.6, and what defines acid rain?",
        back: "Atmospheric CO₂ dissolves to form weak H₂CO₃ (pH ≈ 5.6). Acid rain has pH < 5.6 due to dissolved SO₂/SO₃ (H₂SO₃/H₂SO₄) and NOₓ (HNO₂/HNO₃).",
        level: "SL",
      },
      {
        front: "Conjugate pair relationship between K_a, K_b, and K_w (298 K)",
        back: "K_a × K_b = K_w = 1.00 × 10⁻¹⁴ and pK_a + pK_b = pK_w = 14.00. Stronger acid → weaker conjugate base.",
        level: "HL",
      },
      {
        front: "How does an acidic buffer (CH₃COOH / CH₃COO⁻) resist added H⁺ and OH⁻?",
        back: "Added H⁺ reacts with conjugate base: CH₃COO⁻ + H⁺ → CH₃COOH. Added OH⁻ reacts with weak acid: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O. The [A⁻]/[HA] ratio barely changes.",
        level: "HL",
      },
      {
        front: "Two key landmarks on a weak acid + strong base titration curve",
        back: "1) Half-equivalence point: [HA] = [A⁻], so pH = pK_a (maximum buffer capacity). 2) Equivalence point: pH > 7 due to conjugate-base hydrolysis (A⁻ + H₂O ⇌ HA + OH⁻).",
        level: "HL",
      },
      {
        front: "Rule for selecting a suitable acid–base indicator",
        back: "The indicator's colour-change range (pK_In ± 1) must lie completely within the steep vertical jump around the equivalence point.",
        level: "HL",
      },
      {
        front: "Overall mole ratio in the Winkler BOD method",
        back: "1 mol O₂ : 2 mol MnO₂ : 2 mol I₂ : 4 mol S₂O₃²⁻, so n(O₂) = n(S₂O₃²⁻) / 4. BOD = [O₂]_initial − [O₂]_after 5 days (mg dm⁻³).",
        level: "SL",
      },
      {
        front: "Voltaic vs electrolytic cell: what stays the same and what flips?",
        back: "SAME: Anode = oxidation, Cathode = reduction, external e⁻ flow anode → cathode. FLIPS: Voltaic anode is (−) & cathode (+); Electrolytic anode is (+) & cathode (−).",
        level: "SL",
      },
      {
        front: "Four standard conditions of the Standard Hydrogen Electrode (SHE)",
        back: "1.0 mol dm⁻³ H⁺(aq), H₂(g) at 100 kPa, 298 K, platinised platinum electrode; defined as E⊖ = 0.00 V.",
        level: "HL",
      },
      {
        front: "Why do we NEVER multiply E⊖ when doubling a half-equation?",
        back: "Electrode potential E⊖ is an intensive property (energy per unit charge, J C⁻¹). Doubling moles doubles both ΔG⊖ and charge nF, leaving E⊖ = −ΔG⊖/(nF) unchanged.",
        level: "HL",
      },
      {
        front: "Anode products of concentrated vs dilute NaCl(aq) and CuSO₄(aq) with Cu vs Pt electrodes",
        back: "Conc. NaCl(aq) → Cl₂(g) (concentration + O₂ overpotential); Dilute NaCl(aq) → O₂(g). CuSO₄ with Pt → O₂(g) (blue fades); CuSO₄ with active Cu → Cu(s) oxidises to Cu²⁺ (blue stays constant).",
        level: "HL",
      },
    ],
    mustKnow: [
      "Neutrality means [H⁺] = [OH⁻] — at 298 K that corresponds to pH = 7.00, but at higher temperatures neutral pH drops below 7.00.",
      "pH = −log₁₀[H⁺] and pOH = −log₁₀[OH⁻]; at 298 K, pH + pOH = 14.00 and [H⁺][OH⁻] = 1.00 × 10⁻¹⁴.",
      "Diprotic strong base Ba(OH)₂ produces 2 mol OH⁻ per mole of base: always double its concentration before taking pOH!",
      "[HL] Weak acid approximation: [H⁺] ≈ √(K_a × c); conjugate pairs satisfy pK_a + pK_b = 14.00 at 298 K.",
      "[HL] Henderson–Hasselbalch: pH = pK_a + log₁₀([A⁻]/[HA]); at half-equivalence [A⁻] = [HA] so pH = pK_a.",
      "[HL] Salt hydrolysis: weak acid + strong base salt → basic (pH > 7); strong acid + weak base salt or Fe³⁺/Al³⁺ salt → acidic (pH < 7).",
      "In ALL electrochemical cells, oxidation happens at the anode and reduction happens at the cathode (An Ox, Red Cat).",
      "In a voltaic cell, electrons flow through the external wire from anode (−) to cathode (+), while ions flow through the salt bridge (anions to anode, cations to cathode).",
      "[HL] E⊖_cell = E⊖_cathode − E⊖_anode (never multiply E⊖!); ΔG⊖ = −nFE⊖_cell (divide J mol⁻¹ by 1000 for kJ mol⁻¹).",
      "[HL] Faraday's laws: Q = I × t (seconds!), n(e⁻) = Q / F (F = 96 500 C mol⁻¹), n(product) = n(e⁻) / z.",
    ],
    misconceptions: [
      {
        wrong: "Pure water at 60 °C has pH 6.51, so heating pure water makes it acidic.",
        right: "Heating shifts endothermic water autoionization right, raising BOTH [H⁺] and [OH⁻] equally. Since [H⁺] = [OH⁻], hot pure water is still strictly neutral.",
        level: "SL",
      },
      {
        wrong: "A weak acid needs less NaOH to neutralise than a strong acid of the same concentration and volume.",
        right: "Equivalence volume depends ONLY on total moles of ionisable H⁺. As OH⁻ removes H⁺, Le Chatelier's principle pulls HA ⇌ H⁺ + A⁻ forward until 100% of HA reacts.",
        level: "SL",
      },
      {
        wrong: "Every acid–base titration has its equivalence point at pH 7.00.",
        right: "Only strong acid + strong base hits equivalence at pH 7.00. Weak acid + strong base is basic (pH > 7) and strong acid + weak base is acidic (pH < 7) due to salt hydrolysis.",
        level: "HL",
      },
      {
        wrong: "Doubling a half-equation (like 2Ag⁺ + 2e⁻ → 2Ag) doubles its standard electrode potential from +0.80 V to +1.60 V.",
        right: "E⊖ is an intensive property (joules per coulomb) and NEVER changes with stoichiometric scaling. Only n in ΔG⊖ = −nFE⊖ changes.",
        level: "HL",
      },
      {
        wrong: "Electrons travel through the salt bridge to complete the circuit in a voltaic cell.",
        right: "Free electrons travel ONLY in external metal wires. Inside the salt bridge and solutions, charge is carried exclusively by migrating ions (anions → anode, cations → cathode).",
        level: "SL",
      },
      {
        wrong: "The anode is always the negative electrode and the cathode is always the positive electrode.",
        right: "That is true only for voltaic cells! In electrolytic cells, the external battery reverses polarity: anode is POSITIVE (+) and cathode is NEGATIVE (−), while An Ox / Red Cat still holds.",
        level: "SL",
      },
      {
        wrong: "Electrolysing aqueous NaCl produces sodium metal at the cathode.",
        right: "E⊖(Na⁺/Na) = −2.71 V is far more negative than water reduction (−0.83 V), so H₂O is reduced instead, producing H₂(g) and OH⁻(aq). Sodium metal requires MOLTEN NaCl(l).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to multiply [Ba(OH)₂] by 2 to get [OH⁻] before computing pOH and pH.",
      "Writing H₂CO₃ / CO₃²⁻ as a conjugate acid–base pair — they differ by TWO protons, not one!",
      "Forgetting to convert ΔG⊖ = −nFE⊖ from J mol⁻¹ to kJ mol⁻¹ (missing the ÷1000 factor) or dropping the minus sign.",
      "Using minutes instead of seconds in Q = I × t during Faraday electroplating calculations.",
      "Using the initial concentration of weak acid instead of dividing by the COMBINED volume (V_acid + V_base) when finding equivalence-point salt concentration.",
      "Forgetting the factor of 1/4 in Winkler BOD calculations (1 mol O₂ corresponds to 4 mol S₂O₃²⁻, NOT 1 : 1 or 1 : 2).",
      "Calling an oxidising agent 'the species that gets oxidised' — an oxidising agent oxidises something else, so it is ITSELF REDUCED.",
      "Omitting one of the four SHE conditions (1.0 mol dm⁻³ H⁺, 100 kPa H₂, 298 K, platinised Pt) on Paper 2 definition questions.",
    ],
    mnemonics: [
      {
        topic: "Redox electron transfer",
        device: "OIL RIG",
        explanation: "Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).",
        level: "SL",
      },
      {
        topic: "Electrode reactions in EVERY cell",
        device: "AN OX · RED CAT",
        explanation: "ANode = OXidation; REDuction = CAThode — true in both voltaic and electrolytic cells.",
        level: "SL",
      },
      {
        topic: "Electrolytic cell polarities",
        device: "PANIC",
        explanation: "Positive is Anode, Negative Is Cathode (applies specifically to electrolytic cells, opposite to voltaic!).",
        level: "SL",
      },
      {
        topic: "Buffer & half-equivalence shortcut",
        device: "HALF = pKₐ",
        explanation: "At the HALF-equivalence point of a weak-acid titration, [HA] = [A⁻] so log₁₀(1) = 0 and pH = pKₐ directly.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Human Blood Buffering (pH 7.35–7.45)",
        detail: "The carbonic acid / hydrogencarbonate buffer (H₂CO₃ / HCO₃⁻) paired with breathing rate prevents metabolic lactic acid from causing fatal acidosis.",
        emoji: "🩸",
      },
      {
        title: "Ocean Acidification & Coral Reefs",
        detail: "Absorption of excess atmospheric CO₂ lowers ocean pH and converts CO₃²⁻ into HCO₃⁻, starving reef-building corals of carbonate ions needed for CaCO₃ skeletons.",
        emoji: "🪸",
      },
      {
        title: "Winkler BOD Monitoring in Singapore Reservoirs",
        detail: "Water-quality labs use the Winkler redox titration to track dissolved O₂ and 5-day BOD, spotting algal blooms and organic runoff before aquatic life suffocates.",
        emoji: "💧",
      },
      {
        title: "Lithium-Ion Batteries & Hydrogen Fuel Cells",
        detail: "Smartphones and EVs cycle Li-ion cells between spontaneous voltaic discharge and driven electrolytic recharging; H₂ fuel cells generate clean electricity with only H₂O exhaust.",
        emoji: "⚡",
      },
      {
        title: "Chlor-Alkali Brine Electrolysis & Copper Electrorefining",
        detail: "Concentrated NaCl(aq) electrolysis supplies global Cl₂, H₂, and NaOH, while active-anode CuSO₄(aq) electrorefining purifies copper wiring to >99.99% conductivity.",
        emoji: "🏭",
      },
    ],
    videos: [
      {
        title: "IB Chemistry R3.1 Proton Transfer, pH & Strong vs Weak Acids",
        channel: "MSJChem / Richard Thornley",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R3.1+Bronsted+Lowry+pH+strong+weak+acids",
      },
      {
        title: "IB Chemistry HL Buffers, Salt Hydrolysis & Titration Curves",
        channel: "MSJChem / Organic Chemistry Tutor",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+buffers+Henderson+Hasselbalch+titration+curves",
      },
      {
        title: "IB Chemistry R3.2 Voltaic Cells, Winkler BOD & Electrolysis",
        channel: "MSJChem / Richard Thornley",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R3.2+voltaic+electrolytic+cells+Winkler+BOD",
      },
      {
        title: "IB Chemistry HL Standard Electrode Potentials, ΔG = −nFE & Faraday Electroplating",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+standard+electrode+potentials+Gibbs+Faraday+electrolysis",
      },
    ],
    formulas: [
      { name: "Ionic product of water (298 K)", formula: "K_w = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴", note: "Endothermic; increases with temperature", level: "SL" },
      { name: "pH and [H⁺]", formula: "pH = −log₁₀[H⁺]   ⇔   [H⁺] = 10^(−pH)", note: "Also pOH = −log₁₀[OH⁻]", level: "SL" },
      { name: "pH–pOH relationship (298 K)", formula: "pH + pOH = pK_w = 14.00", note: "Valid specifically at 298 K", level: "SL" },
      { name: "Acid dissociation constant", formula: "K_a = {{([H^+][A^-]) / [HA]}}   ;   pK_a = −log₁₀(K_a)", note: "Weak acid small-x: [H⁺] ≈ √(K_a c)", level: "HL" },
      { name: "Base dissociation constant", formula: "K_b = {{([BH^+][OH^-]) / [B]}}   ;   pK_b = −log₁₀(K_b)", note: "Weak base small-x: [OH⁻] ≈ √(K_b c)", level: "HL" },
      { name: "Conjugate pair constant link", formula: "K_a × K_b = K_w   ;   pK_a + pK_b = 14.00 (298 K)", note: "Applies ONLY to a conjugate acid–base pair", level: "HL" },
      { name: "Henderson–Hasselbalch (acidic buffer)", formula: "pH = pK_a + log₁₀({{[A^-]/[HA]}})", note: "At half-equivalence [A⁻] = [HA] → pH = pKₐ", level: "HL" },
      { name: "Henderson–Hasselbalch (basic buffer)", formula: "pOH = pK_b + log₁₀({{[BH^+]/[B]}})", note: "Convert via pH = 14.00 − pOH at 298 K", level: "HL" },
      { name: "Winkler BOD stoichiometry", formula: "n(O₂) = {{1/4}} n(S₂O₃²⁻)", note: "BOD = [O₂]_initial − [O₂]_day 5 (mg dm⁻³)", level: "SL" },
      { name: "Standard cell potential", formula: "E⊖_cell = E⊖_cathode − E⊖_anode", note: "Intensive — never multiply E⊖ by coefficients!", level: "HL" },
      { name: "Gibbs free energy & cell potential", formula: "ΔG⊖ = −n F E⊖_cell", note: "F = 96 500 C mol⁻¹; ÷1000 for kJ mol⁻¹", level: "HL" },
      { name: "Faraday's laws of electrolysis", formula: "Q = I t   ;   n(e⁻) = {{Q / F}}   ;   n(M) = {{n(e^-) / z}}", note: "t MUST be in seconds; z = ion charge", level: "HL" },
    ],
  },
};
