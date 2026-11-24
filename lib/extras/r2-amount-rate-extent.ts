import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Nearly half of the nitrogen atoms inside your DNA and proteins once passed through a `450 °C`, `200-atmosphere` steel reactor packed with iron catalyst. Reactivity 2 is the quantitative playbook behind every real chemical reactor on Earth: **how much** product the atoms allow, **how fast** collisions clear the energy barrier, and **how far** reversible bonds travel before dynamic equilibrium calls a truce.",
  didYouKnow: [
    "**Diamond is thermodynamically unstable relative to graphite** at `298 K` (`ΔG⊖ = −2.9 kJ mol⁻¹`, so `K > 1`), yet diamonds last forever because breaking rigid `sp³` carbon networks requires an enormous activation energy `E_a` — a textbook case of **kinetic stability** overriding thermodynamic spontaneity.",
    "**Redesigning ibuprofen is a green-chemistry triumph:** the original 1960s Boots synthesis took 6 steps with `40%` atom economy, discarding 60% of reactant mass as waste. In the 1990s, the BHC catalytic route cut it to 3 steps at `77%` atom economy (`99%` with acetic acid recycled), preventing tens of thousands of tonnes of chemical waste.",
    "**A `10 K` temperature rise near room temperature** raises average gas molecular speed by less than `2%`, yet typically **doubles** reaction rate because the exponential Boltzmann factor `e^(−E_a/RT)` in the high-energy tail expands dramatically.",
    "**Singapore's Jurong Island petrochemical hub** and maritime decarbonisation trials rely heavily on heterogeneous catalysis and ammonia synthesis (`N₂ + 3H₂ ⇌ 2NH₃`): liquid ammonia is emerging as a zero-carbon marine fuel because it stores hydrogen densely and achieves `100%` theoretical atom economy.",
    "**Biological enzymes are nature's ultimate Arrhenius hackers:** catalase decomposes hydrogen peroxide (`2H₂O₂ → 2H₂O + O₂`) by slashing `E_a` from `~75 kJ mol⁻¹` to `~8 kJ mol⁻¹`, accelerating turnover by more than a billion times at `310 K`.",
    "**Haber–Bosch reactors achieve only ~15% single-pass yield** per trip across the iron catalyst bed — yet condensing `NH₃(l)` and continuously recycling unreacted `N₂` and `H₂` drives overall plant conversion above `98%`.",
    "**Living at high altitude shifts your blood's equilibrium:** lower atmospheric `O₂` partial pressure shifts `Hb + 4O₂ ⇌ Hb(O₂)₄` left; over days, the human body compensates by synthesising more red blood cells (increasing `[Hb]`) to push oxygen delivery back right.",
    "**No catalyst can rescue an impossible equilibrium:** because a catalyst lowers forward and reverse transition states by the exact same `ΔE_a`, the ratio `k_f / k_r = K_c` remains mathematically invariant.",
  ],
  activities: [
    {
      title: "Effervescent Tablet Kinetics & Arrhenius Estimate",
      emoji: "🧪",
      materials: [
        "4 identical effervescent vitamin C or antacid tablets (`NaHCO₃` + citric acid)",
        "Clear glass, thermometer, stopwatch, and clean spoon for crushing",
        "Water at `15 °C` (chilled), `25 °C` (room), and `45 °C` (warm tap)",
      ],
      steps: [
        "Drop one whole tablet into `150 cm³` of `25 °C` water and time `t_whole` until fizzing stops completely.",
        "Crush an identical tablet into fine powder, tip into fresh `150 cm³` of `25 °C` water, and time `t_powder`. Compare `1/t_powder` vs `1/t_whole` to quantify the surface-area effect.",
        "Repeat with whole tablets at `15 °C` (`288 K`) and `45 °C` (`318 K`), recording `t₁` and `t₂`.",
        "Use `1/t` as a proxy for `k` and plug into the two-temperature Arrhenius equation to estimate the effective activation energy `E_a` of the reaction!",
      ],
      maths:
        "`E_a ≈ {{ (R * ln(t_1 / t_2)) / (1/T_1 - 1/T_2) }}` (using `R = 8.31 J K⁻¹ mol⁻¹` and `T` in Kelvin). Notice `k₂ / k₁ ≈ t₁ / t₂` because rate is inversely proportional to completion time!",
    },
    {
      title: "The Coin-Transfer Dynamic Equilibrium Game",
      emoji: "🪙",
      materials: [
        "40 coins (or beads/Lego bricks) and a sheet of paper split into **Reactants (R)** and **Products (P)**",
        "Notebook to log `(R, P)` after every round",
      ],
      steps: [
        "Start with all `40` coins on side **R** and `0` on side **P**.",
        "Each round, move `25%` of **R** (rounded to nearest coin) to **P** (`k_f = 0.25`) AND simultaneously move `50%` of **P** back to **R** (`k_r = 0.50`).",
        "Repeat for 8 rounds and record `(R, P)` and the numbers transferred each way. Notice both sides stop changing around `R = 27, P = 13` even though `7` coins still cross in BOTH directions every single round!",
        "Now apply a **Le Chatelier stress:** drop `12` extra coins onto **R** (`R = 39, P = 13`), run 5 more rounds, and compute the new ratio `P / R` to verify `K_c = k_f / k_r = 0.25 / 0.50 = 0.50` is restored!",
      ],
      maths:
        "At equilibrium, `rate_forward = k_f[R] = rate_reverse = k_r[P]`, which rearranges directly to `{{ K_c = [\"P\"] / [\"R\"] = k_f / k_r = 0.25 / 0.50 = 0.50 }}` — proving why equilibrium concentrations are constant yet unequal!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Multi-Step Mechanism Energy Profile: RDS, Intermediate & Catalyst",
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 265" role="img" aria-label="Reaction coordinate energy profile comparing an uncatalysed two-step mechanism with intermediate and high second transition state against a lower-activation-energy catalysed pathway">' +
        '<rect width="640" height="265" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Two-Step Mechanism Profile: Intermediate, RDS &amp; Catalyst</text>' +
        '<line x1="60" y1="226" x2="604" y2="226" stroke="#334155" stroke-width="2"/>' +
        '<line x1="60" y1="226" x2="60" y2="42" stroke="#334155" stroke-width="2"/>' +
        '<text x="330" y="252" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155">Reaction Coordinate</text>' +
        '<text x="22" y="136" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 22 136)">Potential Energy</text>' +
        '<line x1="60" y1="150" x2="585" y2="150" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
        '<line x1="470" y1="196" x2="585" y2="196" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
        '<path d="M 80 150 L 140 150 C 172 150, 185 96, 215 96 C 245 96, 260 132, 290 132 C 325 132, 345 56, 385 56 C 425 56, 448 196, 488 196 L 570 196" fill="none" stroke="#2563eb" stroke-width="3"/>' +
        '<path d="M 140 150 C 210 150, 265 112, 335 112 C 405 112, 445 196, 488 196" fill="none" stroke="#059669" stroke-width="2.6" stroke-dasharray="7 4"/>' +
        '<text x="110" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">Reactants</text>' +
        '<text x="530" y="188" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f172a">Products</text>' +
        '<text x="215" y="86" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">TS₁ (fast)</text>' +
        '<text x="290" y="147" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">Intermediate I</text>' +
        '<text x="385" y="46" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#dc2626">TS₂ (slow RDS)</text>' +
        '<text x="332" y="104" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#047857">Catalysed pathway (lower Ea)</text>' +
        '<line x1="556" y1="150" x2="556" y2="196" stroke="#7c3aed" stroke-width="2"/>' +
        '<polygon points="552,188 556,196 560,188" fill="#7c3aed"/>' +
        '<text x="572" y="177" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#6d28d9">ΔH</text>' +
        '<text x="572" y="190" font-family="system-ui,sans-serif" font-size="9" fill="#6d28d9">(unchanged)</text>' +
        '</svg>',
      caption:
        "The highest transition-state peak (TS₂) marks the rate-determining step (RDS); the valley between peaks is a reactive intermediate. A catalyst introduces a lower-barrier pathway without changing ΔH.",
    },
    {
      title: "Haber–Bosch Industrial Process: Turning 15% Single-Pass into 98% Yield",
      svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 230" role="img" aria-label="Flow diagram of the Haber-Bosch ammonia plant showing compressor, iron catalyst bed, ammonia condenser, and gas recycle loop">' +
        '<rect width="640" height="230" rx="14" fill="#f8fafc" stroke="#cbd5e1"/>' +
        '<text x="320" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#0f172a">Haber–Bosch Process: Kinetics, Equilibrium &amp; Continuous Recycling</text>' +
        '<rect x="20" y="56" width="128" height="64" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>' +
        '<text x="84" y="79" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0369a1">1. Compressor</text>' +
        '<text x="84" y="96" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#0f172a">N₂ : 3H₂ feed</text>' +
        '<text x="84" y="111" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#0f172a">20 MPa (200 atm)</text>' +
        '<line x1="148" y1="88" x2="188" y2="88" stroke="#334155" stroke-width="2"/>' +
        '<polygon points="188,83 198,88 188,93" fill="#334155"/>' +
        '<rect x="200" y="48" width="176" height="80" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
        '<text x="288" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#92400e">2. Catalytic Converter</text>' +
        '<text x="288" y="87" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">Fe catalyst · 450 °C</text>' +
        '<text x="288" y="103" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">N₂ + 3H₂ ⇌ 2NH₃ (ΔH &lt; 0)</text>' +
        '<text x="288" y="118" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b45309">~15% per pass</text>' +
        '<line x1="376" y1="88" x2="416" y2="88" stroke="#334155" stroke-width="2"/>' +
        '<polygon points="416,83 426,88 416,93" fill="#334155"/>' +
        '<rect x="428" y="56" width="190" height="64" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.6"/>' +
        '<text x="523" y="78" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#15803d">3. Cooling Condenser</text>' +
        '<text x="523" y="95" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#0f172a">NH₃(l) liquefied &amp; tapped</text>' +
        '<text x="523" y="111" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#166534">Shifts equilibrium right</text>' +
        '<path d="M 523 120 L 523 176 L 84 176 L 84 128" fill="none" stroke="#2563eb" stroke-width="2.4"/>' +
        '<polygon points="79,130 84,120 89,130" fill="#2563eb"/>' +
        '<rect x="195" y="160" width="248" height="32" rx="8" fill="#dbeafe" stroke="#2563eb"/>' +
        '<text x="319" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e40af">4. Recycle unreacted N₂ &amp; H₂ → ~98% overall</text>' +
        '<text x="320" y="214" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Atom Economy = 100% (single product NH₃) · Balanced kinetics + Le Chatelier engineering</text>' +
        '</svg>',
      caption:
        "Continuous liquefaction of NH₃ and recycling of unreacted N₂ and H₂ overcome the low ~15% single-pass equilibrium conversion imposed by running at 450 °C for fast kinetics.",
    },
  ],
  history: {
    title: "Svante Arrhenius, Fritz Haber & Carl Bosch: Quantifying Speed and Conquering Nitrogen",
    story:
      "In 1889, Swedish physical chemist **Svante Arrhenius** was puzzled by why sucrose inverted roughly twice as fast when heated by just `10 °C` — far too steep to be explained by faster molecular collisions alone. He proposed that molecules must cross an energy threshold he called the *activation energy* (`E_a`), publishing `k = A e^(−E_a/RT)` and establishing modern chemical kinetics.\n\n" +
      "Two decades later, Europe faced a looming fertiliser crisis: natural nitrate mines in Chile were running dry, and `78%` of the atmosphere was inert `N₂` locked behind a `945 kJ mol⁻¹` triple bond. Applying Le Chatelier's Principle and Arrhenius kinetics simultaneously, **Fritz Haber** (1909) demonstrated that high pressure (`20 MPa`), moderate heat (`450–500 °C`), and a transition-metal catalyst could synthesise liquid ammonia drop by drop on a lab bench. **Carl Bosch** then engineered double-walled steel reactors capable of surviving hot high-pressure hydrogen without embrittling, while **Alwin Mittasch** screened over `2,500` catalysts before finding promoted iron.\n\n" +
      "The resulting **Haber–Bosch process** won Nobel Prizes in 1918 and 1931 and today sustains roughly half of humanity's food supply — while reminding chemists that stoichiometry, kinetics, and equilibrium carry profound ethical and environmental responsibilities, from fertiliser runoff to industrial carbon emissions.",
  },
};
