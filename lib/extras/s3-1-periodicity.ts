import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Why does the exact same `Cr³⁺` ion paint a **ruby** blood-red and an **emerald** deep green — and why did Dmitri Mendeleev stake his entire reputation on predicting the exact density of an undiscovered metal before anyone ever held it? Both secrets live inside **Structure 3.1: Periodicity**.",

  didYouKnow: [
    "**[SL] Caesium melts in your palm:** Metallic bonding weakens so dramatically down Group 1 as atomic radius expands that caesium melts at just `28.5 °C` — and explodes violently on contact with cold water.",
    "**[SL] Fluorine is #1 for electronegativity (`4.0`), NOT #1 for electron affinity:** Chlorine (`−349 kJ mol⁻¹`) beats fluorine (`−328 kJ mol⁻¹`) because fluorine's tiny `2p` shell crowds incoming electrons with intense repulsion.",
    "**[SL] Rainwater is never pH 7:** Even in the cleanest Antarctic air, atmospheric `CO₂` dissolves to form weak carbonic acid (`H₂CO₃`), giving natural unpolluted rainwater `pH ≈ 5.6`. Acid rain is officially defined as `pH < 5.6`.",
    "**[SL] Glass dissolves in hot concentrated NaOH:** Ordinary window glass is largely giant covalent `SiO₂` — an acidic Period 3 oxide! That is why reagent bottles holding concentrated `NaOH` use plastic stoppers instead of ground-glass stoppers, which slowly fuse shut as `Na₂SiO₃` forms.",
    "**[HL] Why `Fe`, `Co`, and `Ni` are the only ferromagnetic 3d metals:** Although `Mn²⁺` has more unpaired electrons (`5`) than `Fe`, `Co`, or `Ni`, only iron, cobalt, and nickel have the exact interatomic spacing needed for neighbouring electron spins to lock together in permanent magnetic domains.",
    "**[HL] One ion, two crown jewels:** Both **ruby** (red) and **emerald** (green) contain trace octahedral `Cr³⁺` (`3d³`) ions surrounded by oxygen atoms! Ruby's tighter `Al₂O₃` crystal squeezes `O²⁻` ligands closer than emerald's silicate lattice, boosting `ΔE` so ruby absorbs shorter-wavelength green light while emerald absorbs longer-wavelength red light.",
    "**[HL] The `3d⁰` purple impostor:** `Mn(+7)` in `MnO₄⁻` has zero `3d` electrons, yet potassium permanganate is one of the most intensely purple substances in any school lab! Its colour comes from **ligand-to-metal charge transfer (LMCT)** — an oxygen electron leaping straight into an empty manganese `3d` orbital.",
    "**[HL] EDTA saves lives from heavy-metal poisoning:** A single hexadentate `EDTA⁴⁻` ion replaces six `H₂O` ligands around toxic `Pb²⁺` (`2 → 7` particles!), so the giant entropy surge (`ΔS > 0`, the **chelate effect**) locks lead inside a water-soluble octahedral cage that the kidneys safely excrete.",
  ],

  activities: [
    {
      title: "Period 3 Oxide pH Mystery Sort",
      emoji: "🧪",
      materials: [
        "7 index cards labelled `Na₂O`, `MgO`, `Al₂O₃`, `SiO₂`, `P₄O₁₀`, `SO₂`, `SO₃`",
        "A horizontal strip of paper marked from `pH 0` to `pH 14`",
        "Coloured pens (blue = basic, green = amphoteric/insoluble, red = acidic)",
      ],
      steps: [
        "Shuffle the 7 oxide cards face down and flip them one by one.",
        "For each card, place it on the pH strip at the approximate pH produced when shaken with pure water (`pH 7` for insoluble `Al₂O₃` and `SiO₂`!).",
        "Write the balanced water reaction (or acid/base reactions for `Al₂O₃` and `SiO₂`) on the back of each card without peeking at your notes.",
        "Mark the bonding boundary between giant ionic (`Na₂O–Al₂O₃`), giant covalent (`SiO₂`), and simple molecular (`P₄O₁₀–SO₃`).",
      ],
      maths:
        "Check your stoichiometry conservation on every card: `Na₂O` (`1 : 2` `OH⁻`), `P₄O₁₀` (`1 : 6 H₂O : 4 H₃PO₄`), and `Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄` (`8 H` and `8 O` on each side!).",
    },
    {
      title: "Smartphone Colour-Wheel Crystal Field Estimator [HL]",
      emoji: "🌈",
      materials: [
        "Photos or lab cuvettes of `[Cu(H₂O)₆]²⁺` (pale blue), `[Cu(NH₃)₄(H₂O)₂]²⁺` (royal blue), `[Ni(H₂O)₆]²⁺` (green), and `[Ti(H₂O)₆]³⁺` (purple)",
        "The IB 6-sector colour wheel (`400–700 nm`)",
        "Scientific calculator",
      ],
      steps: [
        "Observe each complex's transmitted colour and look straight across the colour wheel to estimate its absorbed wavelength `λ_max` (in `nm`).",
        "Rank the complexes from smallest `ΔE` (longest absorbed `λ`) to largest `ΔE` (shortest absorbed `λ`).",
        "Calculate each complex's approximate molar crystal field splitting energy `ΔE` in `kJ mol⁻¹`.",
        "Compare your ligand ranking for `[Cu(H₂O)₆]²⁺` vs `[Cu(NH₃)₄(H₂O)₂]²⁺` against the IB spectrochemical series.",
      ],
      maths:
        "Use {{ΔE (kJ mol^(-1)) = (N_A * h * c) / (1000 * λ) ≈ 119700 / λ(nm)}}. For example, absorbing `600 nm` orange light corresponds to `ΔE ≈ 200 kJ mol⁻¹` and transmits **blue** light.",
    },
    {
      title: "Isoelectronic Radius Contract-a-Cloud Challenge",
      emoji: "⚛️",
      materials: [
        "IB Data Booklet Section 9 (Atomic & Ionic Radii)",
        "Graph paper or spreadsheet",
      ],
      steps: [
        "List the 10-electron isoelectronic ions `N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺` with their atomic numbers `Z = 7, 8, 9, 11, 12, 13`.",
        "Plot ionic radius `r` (pm) on the vertical axis against nuclear charge `Z` on the horizontal axis.",
        "Overlay the 18-electron Period 3 anions `P³⁻, S²⁻, Cl⁻` (`Z = 15, 16, 17`) on the same graph.",
        "Explain visually why the curve drops smoothly within each series yet leaps vertically by `158 pm` between `Al³⁺` and `P³⁻`.",
      ],
      maths:
        "Notice the inverse-like drop: increasing `Z` from `8` (`O²⁻`, `140 pm`) to `13` (`Al³⁺`, `54 pm`) raises nuclear charge by `+62.5%` and shrinks ionic volume ({{V ∝ r^3}}) by more than **94%**!",
    },
  ],

  bonusDiagrams: [
    {
      title: "Isoelectronic 10-Electron Series: Same Shell, Stronger Pull",
      svg: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isoelectronic 10-electron ions shrinking smoothly from N3- at 146 pm to Al3+ at 54 pm as nuclear charge increases">
  <rect x="0" y="0" width="560" height="205" rx="12" fill="#f8fafc"/>
  <text x="280" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Isoelectronic Series (All 10 e⁻: 1s² 2s² 2p⁶) — Radius vs Nuclear Charge Z</text>
  <g text-anchor="middle">
    <circle cx="64" cy="108" r="36" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
    <text x="64" y="104" font-size="12" font-weight="700" fill="#7f1d1d">N³⁻</text>
    <text x="64" y="119" font-size="9.5" fill="#991b1b">Z = 7</text>
    <text x="64" y="162" font-size="10" font-weight="700" fill="#334155">146 pm</text>

    <circle cx="152" cy="108" r="34.5" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
    <text x="152" y="104" font-size="12" font-weight="700" fill="#7c2d12">O²⁻</text>
    <text x="152" y="119" font-size="9.5" fill="#9a3412">Z = 8</text>
    <text x="152" y="162" font-size="10" font-weight="700" fill="#334155">140 pm</text>

    <circle cx="238" cy="108" r="32.8" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <text x="238" y="104" font-size="12" font-weight="700" fill="#713f12">F⁻</text>
    <text x="238" y="119" font-size="9.5" fill="#854d0e">Z = 9</text>
    <text x="238" y="162" font-size="10" font-weight="700" fill="#334155">133 pm</text>

    <circle cx="328" cy="108" r="25.2" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
    <text x="328" y="104" font-size="11.5" font-weight="700" fill="#14532d">Na⁺</text>
    <text x="328" y="118" font-size="9" fill="#166534">Z = 11</text>
    <text x="328" y="162" font-size="10" font-weight="700" fill="#334155">102 pm</text>

    <circle cx="412" cy="108" r="17.8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
    <text x="412" y="105" font-size="10.5" font-weight="700" fill="#0c4a6e">Mg²⁺</text>
    <text x="412" y="117" font-size="8.5" fill="#0369a1">Z = 12</text>
    <text x="412" y="162" font-size="10" font-weight="700" fill="#334155">72 pm</text>

    <circle cx="488" cy="108" r="13.5" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
    <text x="488" y="112" font-size="9.5" font-weight="700" fill="#4c1d95">Al³⁺</text>
    <text x="488" y="138" font-size="8.5" fill="#5b21b6">Z = 13</text>
    <text x="488" y="162" font-size="10" font-weight="700" fill="#334155">54 pm</text>
  </g>
  <line x1="48" y1="184" x2="508" y2="184" stroke="#0f766e" stroke-width="2"/>
  <polygon points="508,179 518,184 508,189" fill="#0f766e"/>
  <text x="280" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">Identical shielding (10 e⁻) · Increasing proton pull ⇒ rapid radius contraction</text>
</svg>`,
      caption:
        "Every ion holds 10 electrons in `1s² 2s² 2p⁶`; climbing from `Z = 7` to `Z = 13` contracts ionic radius by nearly a factor of three.",
    },
    {
      title: "Spectrochemical Series: Ligand Strength, ΔE & Absorbed Wavelength [HL]",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrochemical series staircase showing crystal field splitting ΔE increasing and absorbed wavelength decreasing from I- to CN-">
  <rect x="0" y="0" width="560" height="190" rx="12" fill="#f8fafc"/>
  <text x="280" y="23" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">IB Spectrochemical Series: Weak-Field → Strong-Field Ligands [HL]</text>
  <g font-size="10.5" font-weight="700" text-anchor="middle">
    <rect x="24" y="116" width="56" height="28" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="52" y="134" fill="#991b1b">I⁻ / Br⁻</text>
    <rect x="92" y="106" width="52" height="28" rx="6" fill="#ffedd5" stroke="#ea580c"/><text x="118" y="124" fill="#9a3412">Cl⁻</text>
    <rect x="156" y="96" width="52" height="28" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="182" y="114" fill="#92400e">F⁻</text>
    <rect x="220" y="86" width="56" height="28" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="248" y="104" fill="#166534">OH⁻</text>
    <rect x="288" y="75" width="56" height="28" rx="6" fill="#ccfbf1" stroke="#0d9488"/><text x="316" y="93" fill="#115e59">H₂O</text>
    <rect x="356" y="64" width="56" height="28" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="384" y="82" fill="#1e40af">NH₃</text>
    <rect x="424" y="53" width="46" height="28" rx="6" fill="#e0e7ff" stroke="#4f46e5"/><text x="447" y="71" fill="#3730a3">en</text>
    <rect x="482" y="42" width="58" height="28" rx="6" fill="#ede9fe" stroke="#7c3aed"/><text x="511" y="60" fill="#5b21b6">CO, CN⁻</text>
  </g>
  <line x1="34" y1="160" x2="526" y2="160" stroke="#7c3aed" stroke-width="2.2"/>
  <polygon points="526,155 536,160 526,165" fill="#7c3aed"/>
  <text x="148" y="177" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b91c1c">Small ΔE · Absorbs longer λ (red/orange)</text>
  <text x="415" y="177" text-anchor="middle" font-size="9.5" font-weight="700" fill="#5b21b6">Large ΔE · Absorbs shorter λ (blue/violet)</text>
</svg>`,
      caption:
        "Moving right along the IB spectrochemical series widens octahedral splitting `ΔE` and shifts `d–d` light absorption toward shorter, higher-energy wavelengths.",
    },
  ],

  history: {
    title: "From Mendeleev's Blank Cards (1869) to Moseley's X-Ray Proof (1913)",
    story:
      "In February 1869, **Dmitri Mendeleev** wrote the 63 known elements onto cards and arranged them by atomic mass and repeating chemical properties — famously **leaving empty gaps** and even swapping tellurium (`127.6`) ahead of iodine (`126.9`) because chemical periodicity demanded iodine sit with the halogens. Skeptics laughed until French chemist Paul-Émile Lecoq de Boisbaudran discovered **gallium** in 1875: its measured density (`5.91 g cm⁻³`), low melting point (`29.8 °C`), and amphoteric oxide `Ga₂O₃` matched Mendeleev's predicted *eka-aluminium* (`5.9 g cm⁻³`) so eerily closely that Mendeleev wrote back telling him to re-measure his first density value — and Mendeleev was right!\n\nYet one puzzle lingered for forty years: why did `Ar`/`K` and `Te`/`I` break atomic-mass order? In 1913, 25-year-old British physicist **Henry Moseley** fired electrons at metallic targets and measured the frequencies of their emitted X-rays. Taking the square root of frequency gave a straight-line staircase stepping up by one integer per element — proving experimentally that **nuclear charge (`Z`, atomic number)**, NOT atomic mass, is the true organizing law of the periodic table. Tragically killed at Gallipoli in 1915 at age 27, Moseley left behind the law that underpins every single effective-nuclear-charge trend in IB Chemistry today.",
  },
};
