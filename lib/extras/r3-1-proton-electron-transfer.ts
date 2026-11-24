import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every heartbeat keeps your arterial blood locked between **pH 7.35 and 7.45** via proton-transfer buffers, while the smartphone in your hand runs on reversible **electron-transfer** lithium-ion cells — welcome to the twin chemistry of protons and electrons!",
  didYouKnow: [
    "**[SL] Boiling pure water is NOT acidic even though its pH is 6.14!** Because `H₂O ⇌ H⁺ + OH⁻` is endothermic, heating water to 100 °C increases `K_w` from `1.00 × 10⁻¹⁴` to `5.13 × 10⁻¹³`, lifting `[H⁺]` and `[OH⁻]` equally to `7.16 × 10⁻⁷ mol dm⁻³`.",
    "**[SL] A 0.11-unit drop in ocean pH means 29% more H⁺ ions!** Since the Industrial Revolution, ocean surface pH has fallen from 8.21 to 8.10 — tiny on paper, huge on a base-10 logarithmic scale (`10^(0.11) = 1.29`), stripping `CO₃²⁻` needed by coral reefs.",
    "**[HL] Your blood buffer breaks the textbook `pK_a ± 1` rule — and wins anyway!** The `H₂CO₃ / HCO₃⁻` system has `pK_a = 6.10` at 37 °C, yet buffers blood at pH 7.40 (a 20 : 1 ratio) because your lungs continuously exhale `CO₂`, keeping `[H₂CO₃]` tightly controlled.",
    "**[SL] South American electric eels wire 6 000 living voltaic cells in series!** Each electrocyte generates only ~0.10 V via ion concentration gradients, but stacking thousands in series produces a 600 V pulse strong enough to stun prey.",
    "**[HL] Aluminium was once pricier than gold!** Before the Hall–Héroult molten electrolysis process (1886) reduced `Al³⁺` from molten cryolite–alumina, Emperor Napoleon III reserved aluminium cutlery for his most honoured guests while lesser royals ate with gold.",
    "**[SL] Singapore's PUB tracks reservoir health with Winkler redox chemistry!** Measuring 5-day Biochemical Oxygen Demand (BOD) via the `1 O₂ : 4 S₂O₃²⁻` thiosulfate titration flags organic runoff long before oxygen drops to levels lethal for fish.",
    "**[HL] Overpotential secretly runs the global chlor-alkali industry!** Standard `E⊖` predicts water (`+1.23 V`) should oxidise before `Cl⁻` (`+1.36 V`), yet kinetic oxygen overpotential plus high `[Cl⁻]` in concentrated brine delivers millions of tonnes of `Cl₂`, `H₂`, and `NaOH` every year.",
    "**[HL] Even a 0.30 V voltaic cell drives reactions virtually to completion!** Because `ΔG⊖ = −nFE⊖ = −RT ln K`, a modest 2-electron cell with `E⊖_cell = +0.30 V` at 298 K corresponds to an equilibrium constant `K ≈ 1.4 × 10¹⁰`.",
  ],
  activities: [
    {
      title: "Red-Cabbage Anthocyanin pH Indicator & Buffer Test",
      emoji: "🥬",
      materials: [
        "3–4 red cabbage leaves & hot water",
        "4 clear cups (vinegar, baking soda solution, tap water, and vinegar + baking soda buffer mix)",
        "Clean plastic dropper or teaspoon",
      ],
      steps: [
        "Steep shredded red cabbage in hot water for 10 minutes and strain off the deep purple **anthocyanin** extract — a natural weak-acid indicator (`HIn ⇌ H⁺ + In⁻`).",
        "Add a splash of extract to vinegar (ethanoic acid → bright pink-red, pH ~3), tap water (violet, pH ~7), and baking soda solution (`NaHCO₃` → teal-blue, pH ~8.5).",
        "Now make a rough ethanoic acid / ethanoate buffer by partially neutralising vinegar with a pinch of baking soda until fizzing stops and the indicator sits purplish-magenta.",
        "Add 5 drops of vinegar to plain water (instant colour jump to pink!) versus 5 drops of vinegar to your buffer cup (barely changes hue!).",
      ],
      maths:
        "Anthocyanin shifts structure as `[H⁺]` changes, behaving like an indicator with multiple `pK_In` transitions. In the buffer cup, `CH₃COO⁻ + H⁺ → CH₃COOH` absorbs added protons so `pH = pK_a + log₁₀([A⁻]/[HA])` barely shifts.",
    },
    {
      title: "Coin-Stack Voltaic Pile (Build Volta's 1800 Battery)",
      emoji: "🪙",
      materials: [
        "5–6 copper coins (or copper washers) & 5–6 zinc-plated washers",
        "Cardboard discs cut to coin size, soaked in salty vinegar",
        "Digital multimeter or a low-voltage red LED (~1.8 V)",
      ],
      steps: [
        "Soak the cardboard discs in warm salt water with a splash of vinegar — these act as BOTH the aqueous electrolyte and porous salt bridge.",
        "Stack alternating layers strictly in the same order: **Zn washer → wet cardboard → Cu coin → Zn washer → wet cardboard → Cu coin**.",
        "Measure the voltage across a single Zn/Cu cell (~0.8–0.9 V under real non-standard conditions), then across a 4-cell or 5-cell stack.",
        "Watch how stacking `N` cells in series multiplies voltage by `N` (`V_total ≈ N × V_cell`) — enough to dimly light a red LED!",
      ],
      maths:
        "At each zinc anode, `Zn(s) → Zn²⁺(aq) + 2e⁻` (`E⊖ = −0.76 V`). At each copper cathode, oxygen/protons reduce (`2H⁺ + 2e⁻ → H₂` or `O₂ + 4H⁺ + 4e⁻ → 2H₂O`). Wiring cells in series adds their individual cell potentials while keeping electron current identical through every layer.",
    },
  ],
  bonusDiagrams: [
    {
      title: "High-Yield Cram Map: Which Acid–Base pH Formula Do I Use? (SL & HL)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 270" role="img" aria-label="Decision flowchart for IB Chemistry pH calculations covering strong acids, strong bases, weak acids, weak bases, buffers, and salt hydrolysis">
  <rect width="640" height="270" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Acid–Base pH Calculation Decision Map (298 K, K_w = 1.00 × 10⁻¹⁴)</text>
  <rect x="20" y="42" width="186" height="96" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="113" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">1. Strong Acid / Base [SL]</text>
  <text x="32" y="80" font-size="9.5" fill="#334155">• HCl, HNO₃: [H⁺] = c</text>
  <text x="32" y="96" font-size="9.5" fill="#334155">• NaOH, KOH: [OH⁻] = c</text>
  <text x="32" y="112" font-size="9.5" font-weight="700" fill="#b91c1c">• Ba(OH)₂: [OH⁻] = 2c!</text>
  <text x="32" y="128" font-size="9.5" fill="#334155">pH = 14.00 − pOH</text>
  <rect x="227" y="42" width="186" height="96" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="320" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">2. Pure Weak Acid / Base [HL]</text>
  <text x="239" y="80" font-size="9.5" fill="#334155">• Acid: [H⁺] ≈ √(Kₐ × c)</text>
  <text x="239" y="96" font-size="9.5" fill="#334155">• Base: [OH⁻] ≈ √(K_b × c)</text>
  <text x="239" y="112" font-size="9.5" fill="#334155">• Valid when &lt; 5% ionised</text>
  <text x="239" y="128" font-size="9.5" font-weight="700" fill="#1d4ed8">pKₐ + pK_b = 14.00</text>
  <rect x="434" y="42" width="186" height="96" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="527" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">3. Buffer Mixture [HL]</text>
  <text x="446" y="80" font-size="9.5" fill="#334155">• HA + A⁻ (or excess HA + OH⁻)</text>
  <text x="446" y="96" font-size="9.5" font-weight="700" fill="#15803d">pH = pKₐ + log₁₀([A⁻]/[HA])</text>
  <text x="446" y="112" font-size="9.5" fill="#334155">• B + BH⁺: pOH = pK_b + log(BH⁺/B)</text>
  <text x="446" y="128" font-size="9.5" fill="#334155">• Half-equiv: pH = pKₐ</text>
  <rect x="20" y="156" width="290" height="96" rx="10" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="165" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">4. Equivalence Point Salt Hydrolysis [HL]</text>
  <text x="32" y="194" font-size="9.5" fill="#334155">• Divide moles by COMBINED volume (V₁ + V₂)!</text>
  <text x="32" y="210" font-size="9.5" fill="#334155">• Weak acid + Strong base → A⁻ basic: K_b = K_w / Kₐ</text>
  <text x="32" y="226" font-size="9.5" fill="#334155">• Strong acid + Weak base → BH⁺ acidic: Kₐ = K_w / K_b</text>
  <text x="32" y="242" font-size="9.5" font-weight="700" fill="#b45309">• Indicator: pK_In ± 1 inside vertical jump!</text>
  <rect x="330" y="156" width="290" height="96" rx="10" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="475" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">5. Temperature &amp; Neutrality Trap [SL]</text>
  <text x="342" y="194" font-size="9.5" fill="#334155">• H₂O(l) ⇌ H⁺(aq) + OH⁻(aq) is ENDOTHERMIC (ΔH &gt; 0)</text>
  <text x="342" y="210" font-size="9.5" fill="#334155">• Higher T → larger K_w → [H⁺] = [OH⁻] = √K_w rises</text>
  <text x="342" y="226" font-size="9.5" font-weight="700" fill="#6d28d9">• Neutral pH drops below 7.00, yet STILL NEUTRAL!</text>
  <text x="342" y="242" font-size="9.5" fill="#334155">• 298 K: 7.00 · 323 K: 6.63 · 373 K: 6.14</text>
</svg>`,
      caption:
        "Before touching your calculator on an IB R3.1 question, classify the flask into one of these 5 regimes so you pick the right equation first time.",
    },
    {
      title: "High-Yield Cram Sheet: Aqueous Electrolysis Selective Discharge & Faraday Steps (HL)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 264" role="img" aria-label="Cheat sheet summarizing aqueous electrolysis products for brine and copper sulfate with inert versus active electrodes plus Faraday stoichiometry chain">
  <rect width="640" height="264" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="320" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Aqueous Selective Discharge &amp; Faraday Stoichiometry Cheat-Sheet [HL]</text>
  <rect x="20" y="40" width="600" height="128" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
  <rect x="20" y="40" width="600" height="26" rx="10" fill="#1e293b"/>
  <text x="108" y="57" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Electrolyte &amp; Electrodes</text>
  <text x="275" y="57" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Cathode (−) Reduction</text>
  <text x="448" y="57" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Anode (+) Oxidation</text>
  <text x="568" y="57" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Bath Change</text>
  <line x1="20" y1="92" x2="620" y2="92" stroke="#e2e8f0"/><line x1="20" y1="118" x2="620" y2="118" stroke="#e2e8f0"/><line x1="20" y1="144" x2="620" y2="144" stroke="#e2e8f0"/>
  <text x="30" y="83" font-size="9.5" font-weight="700" fill="#0f172a">Conc. NaCl(aq) · Pt/C</text>
  <text x="202" y="83" font-size="9.5" fill="#15803d">H₂(g) + OH⁻ (H₂O beats Na⁺)</text>
  <text x="380" y="83" font-size="9.5" font-weight="700" fill="#b45309">Cl₂(g) (conc + O₂ overpot.)</text>
  <text x="530" y="83" font-size="9.5" fill="#1d4ed8">Turns alkaline</text>
  <text x="30" y="109" font-size="9.5" font-weight="700" fill="#0f172a">Dilute NaCl(aq) · Pt/C</text>
  <text x="202" y="109" font-size="9.5" fill="#15803d">H₂(g) + OH⁻</text>
  <text x="380" y="109" font-size="9.5" fill="#dc2626">O₂(g) + H⁺ (+1.23 &lt; +1.36)</text>
  <text x="530" y="109" font-size="9.5" fill="#334155">More conc. NaCl</text>
  <text x="30" y="135" font-size="9.5" font-weight="700" fill="#0f172a">CuSO₄(aq) · Inert Pt/C</text>
  <text x="202" y="135" font-size="9.5" fill="#15803d">Cu(s) plated (+0.34 beats H₂O)</text>
  <text x="380" y="135" font-size="9.5" fill="#dc2626">O₂(g) + H⁺ (SO₄²⁻ inert)</text>
  <text x="530" y="135" font-size="9.5" fill="#b91c1c">Fades; acidic</text>
  <text x="30" y="160" font-size="9.5" font-weight="700" fill="#0f172a">CuSO₄(aq) · Active Cu</text>
  <text x="202" y="160" font-size="9.5" fill="#15803d">Cu(s) plated (mass ↑)</text>
  <text x="380" y="160" font-size="9.5" font-weight="700" fill="#7c2d12">Cu → Cu²⁺ + 2e⁻ (mass ↓)</text>
  <text x="530" y="160" font-size="9.5" font-weight="700" fill="#1d4ed8">Blue constant!</text>
  <rect x="20" y="184" width="600" height="64" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="320" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">Faraday Electroplating Chain (F = 96 500 C mol⁻¹)</text>
  <text x="320" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">I (A) × t (s)  →  Q (C)  ÷ 96 500 →  n(e⁻)  ÷ z  →  n(product)  × M_r  →  mass (g)</text>
  <text x="320" y="241" text-anchor="middle" font-size="9.5" fill="#475569">Series cells share identical n(e⁻):  z₁ × n₁ = z₂ × n₂  (e.g. 2 mol Ag : 1 mol Cu : ⅔ mol Al : ½ mol O₂)</text>
</svg>`,
      caption:
        "Memorise the four canonical IB aqueous electrolysis cases and the 4-step Faraday stoichiometry chain — they appear almost every single HL Paper 2 exam session.",
    },
  ],
  history: {
    title: "From Twitching Frog Legs to Volta's Pile & Faraday's Laws (1780–1834)",
    story:
      "In 1780, Italian physician **Luigi Galvani** noticed dissected frog legs twitching whenever brass hooks touched an iron railing, attributing it to 'animal electricity'. His compatriot **Alessandro Volta** proved in 1800 that the frog was merely a moist electrolyte — stacking alternating zinc and copper discs separated by brine-soaked cardboard created the **Voltaic Pile**, humanity's first continuous electric battery! Within months, **Humphry Davy** wired massive piles at London's Royal Institution to drive molten electrolysis, violently isolating sodium, potassium, calcium, and magnesium for the first time. Davy's former bookbinder's apprentice, **Michael Faraday**, then discovered in 1833–1834 that the mass of metal plated at an electrode is directly proportional to electric charge passed and inversely proportional to ionic charge — giving us the **Faraday constant (`F = 96 500 C mol⁻¹`)** and coining the very words *anode*, *cathode*, *ion*, and *electrolyte*.",
  },
};
