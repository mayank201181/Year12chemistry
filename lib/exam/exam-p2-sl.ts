// ---------------------------------------------------------------------------
// IB Diploma Chemistry (First Assessment 2025) — Paper 2 (SL)
// 15 structured & extended-response questions (ALL level: "SL", strictly SL
// FA2025 scope) spanning all 8 topics across Structure 1–3 & Reactivity 1–3.
// Calculator & Data Booklet permitted (FA2025).
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_HABER_PROFILE =
  '<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enthalpy level diagram for the exothermic Haber process showing uncatalysed activation energy hump, lower iron-catalysed activation energy hump, and enthalpy change of minus 92 kilojoules per mole">' +
  '<rect x="0" y="0" width="500" height="260" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="60" y1="220" x2="470" y2="220"/><line x1="60" y1="220" x2="60" y2="24"/>' +
  "</g>" +
  '<polygon points="474,220 465,215 465,225" fill="#0f172a"/>' +
  '<polygon points="60,18 55,27 65,27" fill="#0f172a"/>' +
  '<text x="265" y="246" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle">Reaction coordinate</text>' +
  '<text x="24" y="124" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 24 124)">Enthalpy H</text>' +
  '<line x1="78" y1="125" x2="178" y2="125" stroke="#0f172a" stroke-width="2.4"/>' +
  '<line x1="342" y1="188" x2="452" y2="188" stroke="#0f172a" stroke-width="2.4"/>' +
  '<line x1="178" y1="125" x2="405" y2="125" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>' +
  '<path d="M 168 125 C 210 125, 224 40, 260 40 C 296 40, 310 188, 352 188" fill="none" stroke="#2563eb" stroke-width="2.4"/>' +
  '<path d="M 168 125 C 212 125, 226 82, 260 82 C 294 82, 310 188, 352 188" fill="none" stroke="#059669" stroke-width="2.4" stroke-dasharray="6,4"/>' +
  '<line x1="238" y1="42" x2="238" y2="123" stroke="#2563eb" stroke-width="1.6"/>' +
  '<polygon points="238,40 234,49 242,49" fill="#2563eb"/>' +
  '<line x1="278" y1="84" x2="278" y2="123" stroke="#059669" stroke-width="1.6"/>' +
  '<polygon points="278,82 274,91 282,91" fill="#059669"/>' +
  '<line x1="395" y1="127" x2="395" y2="184" stroke="#dc2626" stroke-width="1.8"/>' +
  '<polygon points="395,187 391,178 399,178" fill="#dc2626"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11.5">' +
  '<text x="128" y="115" font-weight="600" fill="#0f172a" text-anchor="middle">N₂(g) + 3H₂(g)</text>' +
  '<text x="398" y="206" font-weight="600" fill="#0f172a" text-anchor="middle">2NH₃(g)</text>' +
  '<text x="190" y="66" font-weight="600" fill="#2563eb" text-anchor="end">E_a (uncatalysed)</text>' +
  '<text x="286" y="102" font-weight="600" fill="#059669">E_a (Fe catalyst)</text>' +
  '<text x="403" y="160" font-weight="600" fill="#dc2626">ΔH = −92 kJ mol⁻¹</text>' +
  "</g>" +
  "</svg>";

const SVG_VOLTAIC_CELL_MGCU =
  '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voltaic cell diagram with a magnesium electrode in aqueous magnesium(II) ions on the left, a copper electrode in aqueous copper(II) ions on the right, a potassium nitrate salt bridge connecting the two beakers, and an external wire with a voltmeter">' +
  '<rect x="0" y="0" width="520" height="260" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<rect x="52" y="128" width="144" height="96" rx="4" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>' +
  '<rect x="324" y="128" width="144" height="96" rx="4" fill="#dbeafe" stroke="#334155" stroke-width="2"/>' +
  '<rect x="86" y="88" width="22" height="106" rx="2" fill="#94a3b8" stroke="#334155" stroke-width="1.6"/>' +
  '<rect x="412" y="88" width="22" height="106" rx="2" fill="#d97706" stroke="#78350f" stroke-width="1.6"/>' +
  '<path d="M 164 176 L 164 102 C 164 84, 356 84, 356 102 L 356 176" fill="none" stroke="#0f766e" stroke-width="16" stroke-linecap="round"/>' +
  '<path d="M 164 176 L 164 102 C 164 84, 356 84, 356 102 L 356 176" fill="none" stroke="#ccfbf1" stroke-width="11" stroke-linecap="round"/>' +
  '<polyline fill="none" stroke="#0f172a" stroke-width="2" points="97,88 97,36 240,36"/>' +
  '<polyline fill="none" stroke="#0f172a" stroke-width="2" points="280,36 423,36 423,88"/>' +
  '<circle cx="260" cy="36" r="20" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>' +
  '<text x="260" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">V</text>' +
  '<g font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">' +
  '<text x="260" y="112" font-weight="600" fill="#0f766e">KNO₃(aq) salt bridge</text>' +
  '<text x="97" y="148" font-weight="700" fill="#0f172a">Mg</text>' +
  '<text x="423" y="148" font-weight="700" fill="#ffffff">Cu</text>' +
  '<text x="124" y="214" font-weight="600" fill="#334155">Mg²⁺(aq)</text>' +
  '<text x="396" y="214" font-weight="600" fill="#1e40af">Cu²⁺(aq)</text>' +
  '<text x="124" y="244" font-size="11" fill="#475569">Left half-cell (Mg more reactive)</text>' +
  '<text x="396" y="244" font-size="11" fill="#475569">Right half-cell (Cu less reactive)</text>' +
  "</g>" +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p2-sl",
  title: "Paper 2 (SL) · Structured & Extended Response",
  paperType: "Paper 2 (SL) · Structured & Extended",
  level: "SL",
  calculator: true,
  minutes: 90,
  questions: [
    // ===================== Q01: S1.2 Silicon Isotopes A_r (SL) ===============
    {
      id: "exam-p2-sl-q01",
      kind: "short",
      topicId: "s1-particulate-matter",
      guideRef: "particulate-nuclear-atom",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Sum (relative isotopic mass × percentage abundance) / 100 across all three isotopes",
      question:
        "A mass spectrum of natural silicon shows three isotopes: `²⁸Si` (relative isotopic mass `28.00`, abundance `92.23%`), `²⁹Si` (`29.00`, `4.68%`), and `³⁰Si` (`30.00`, `3.09%`). Calculate the relative atomic mass `A_r` of silicon to 2 decimal places.",
      answer: { type: "number", value: 28.11, tolerance: 0.01, display: "28.11" },
      traps: [
        {
          spec: { type: "number", value: 29, tolerance: 0.05 },
          feedback: "Do not take an unweighted mean of 28, 29, and 30 — weight each isotopic mass by its percentage abundance.",
        },
      ],
      hints: [
        "Multiply each isotopic mass by its fractional abundance (`0.9223`, `0.0468`, `0.0309`).",
        "Sum the three contributions and round to 2 decimal places.",
      ],
      solution: [
        "`A_r(Si) = (28.00 × 92.23 + 29.00 × 4.68 + 30.00 × 3.09) / 100`.",
        "`A_r(Si) = (2582.44 + 135.72 + 92.70) / 100 = 2810.86 / 100 = 28.1086 ≈ 28.11`.",
      ],
      commonError: "Taking a simple arithmetic mean `(28 + 29 + 30) / 3 = 29.00` instead of a weighted average.",
    },

    // ===================== Q02: S1.5 Ideal Gas Molar Mass (SL) ===============
    {
      id: "exam-p2-sl-q02",
      kind: "short",
      topicId: "s1-particulate-matter",
      guideRef: "mole-ideal-gases",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Solve n = pV / (RT) using kPa and dm³, then compute M = m / n",
      question:
        "A rigid `0.450 dm³` cylinder contains `0.900 g` of an inert monatomic ideal gas at `298 K` and `125 kPa` (`R = 8.31 J K⁻¹ mol⁻¹`). Determine the molar mass `M` of the gas (in `g mol⁻¹`, to 3 significant figures).",
      answer: { type: "number", value: 39.6, tolerance: 0.3, display: "39.6 g mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.0396, tolerance: 0.001 },
          feedback: "Check your pressure and volume units: kPa × dm³ equals J directly, so do not divide again by 1000.",
        },
      ],
      hints: [
        "With `p` in `kPa` (`125`) and `V` in `dm³` (`0.450`), `pV` is already in joules (`Pa × m³`), matching `R = 8.31 J K⁻¹ mol⁻¹`.",
        "Calculate `n = (125 × 0.450) / (8.31 × 298)`, then find `M = 0.900 / n`.",
      ],
      solution: [
        "Amount of gas: `n = pV / (RT) = (125 × 0.450) / (8.31 × 298) = 56.25 / 2476.38 = 0.02271 mol`.",
        "Molar mass: `M = m / n = 0.900 / 0.02271 = 39.6 g mol⁻¹` (consistent with argon, `A_r = 39.95`).",
      ],
      commonError: "Converting `kPa` to `Pa` (`× 1000`) while forgetting to convert `dm³` to `m³` (`÷ 1000`), creating a `10³` error.",
    },

    // ===================== Q03: S1.3 Hydrogen Emission Spectrum (SL) =========
    {
      id: "exam-p2-sl-q03",
      kind: "written",
      topicId: "s1-particulate-matter",
      guideRef: "electron-configurations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Connect discrete lines to quantized transitions to n = 2, convergence to closer levels, and contrast continuous spectra",
      marks: 4,
      question:
        "When an electric discharge passes through low-pressure hydrogen gas, the emitted visible light produces a line emission spectrum (the Balmer series) rather than a continuous spectrum. Explain how these discrete lines are produced, why they converge at higher frequency, and how this provides evidence for the Bohr model of the atom.",
      hints: [
        "State what happens when excited electrons drop from higher energy levels (`n ≥ 3`) down to `n = 2`.",
        "Why do only specific discrete wavelengths appear instead of every colour of the rainbow?",
        "Why do the gaps between adjacent lines become smaller and smaller at the high-frequency (violet/UV) end?",
      ],
      modelAnswer:
        "Electrons excited to higher main energy levels fall back to the `n = 2` energy level, emitting visible photons whose energy equals the difference between the two levels. Because atomic energy levels are quantized (only discrete energy values are permitted), only specific photon frequencies are emitted, producing sharp coloured lines on a dark background rather than an unbroken band of all wavelengths. The spacing between consecutive energy levels decreases as the principal quantum number `n` increases, so transitions from higher levels have progressively closer energy gaps and the spectral lines converge toward the high-frequency limit.",
      markScheme: [
        {
          point: "Excited electrons fall from higher levels down to n = 2, emitting photons of energy equal to the level gap.",
          keywords: ["n = 2", "n=2", "fall back", "drop"],
        },
        {
          point: "Links sharp discrete lines to quantized energy levels in the hydrogen atom.",
          keywords: ["quantized", "quantised", "discrete energy"],
        },
        {
          point: "Contrasts discrete coloured lines on a dark background with a continuous spectrum containing all wavelengths.",
          keywords: ["unbroken", "all wavelengths", "dark background"],
        },
        {
          point: "Explains convergence because the energy spacing between adjacent shells decreases as n increases.",
          keywords: ["spacing", "closer", "decreases as"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid explanation of atomic emission spectra.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions electrons falling between energy levels to emit light, but omits n = 2, quantization, or why lines converge.",
          indicators: ["Describes light emission without explaining quantization or convergence."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly connects Balmer visible lines to transitions to n = 2, explains discrete lines via quantized levels vs continuous wavelengths, and accounts for convergence via narrowing shell gaps.",
          indicators: ["Explicitly links converging spectral lines to decreasing gaps at larger n."],
        },
      ],
      commonError: "Stating that photons are emitted when electrons *absorb* energy and jump UP (emission occurs during downward relaxation!).",
    },

    // ===================== Q04: S2.2 Diamond vs Graphite (SL) ================
    {
      id: "exam-p2-sl-q04",
      kind: "written",
      topicId: "s2-bonding-materials",
      guideRef: "covalent-vsepr-imfs",
      level: "SL",
      difficulty: "core",
      commandTerm: "Compare and contrast",
      strategy: "Compare covalent coordination (4 vs 3), geometry (109.5° vs 120°), delocalized electrons, interlayer IMFs, and melting point",
      marks: 5,
      question:
        "Diamond and graphite are two giant covalent allotropes of carbon with sharply contrasting electrical conductivity and mechanical hardness, yet both sublime only above `3500 °C`. Compare and contrast their bonding and structures to account for all three physical properties.",
      hints: [
        "State how many covalent bonds each carbon forms in diamond (`4`, tetrahedral `109.5°`) vs graphite (`3`, trigonal planar `120°` hexagonal layers).",
        "Explain what happens to the fourth valence electron per carbon in graphite and why that makes graphite electrically conductive while diamond insulates.",
        "Explain why graphite layers slide easily (lubricant) while diamond is rigid/hard, and why BOTH require extreme temperatures to melt/sublime.",
      ],
      modelAnswer:
        "In diamond, each carbon atom forms four strong covalent bonds in a rigid 3D tetrahedral network (`109.5°`), leaving no mobile electrons so diamond is an electrical insulator and extremely hard. In graphite, each carbon atom forms only three covalent bonds (`120°`) in flat hexagonal sheets; the fourth valence electron from each atom is delocalized across the layers and free to move along the sheets, allowing graphite to conduct electricity. Adjacent sheets in graphite are held together only by weak London dispersion forces, enabling layers to slide past one another easily (making graphite soft and lubricating). Both allotropes have very high sublimation points because breaking either lattice requires overcoming vast numbers of strong intramolecular covalent `C−C` bonds.",
      markScheme: [
        {
          point: "Diamond: each C forms 4 covalent bonds in a 3D tetrahedral network (109.5°).",
          keywords: ["four", "4", "tetrahedral", "109.5"],
        },
        {
          point: "Graphite: each C forms 3 covalent bonds (120°) in flat hexagonal layers/sheets.",
          keywords: ["three", "hexagonal", "120°", "120"],
        },
        {
          point: "Electrical conductivity: graphite has delocalized mobile fourth valence electrons along layers, whereas diamond has all electrons localized in bonds.",
          keywords: ["delocalized", "delocalised", "insulator"],
        },
        {
          point: "Hardness/lubrication: weak London dispersion forces between graphite layers allow sliding, unlike diamond's rigid 3D covalent lattice.",
          keywords: ["london dispersion", "slide", "weak"],
        },
        {
          point: "High sublimation point of both: requires breaking many strong covalent C−C bonds.",
          keywords: ["many strong", "vast numbers", "strong intramolecular covalent"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid structural comparison of diamond and graphite.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States basic property differences (e.g. graphite conducts, diamond is hard) with incomplete structural detail.",
          indicators: ["Omits bond counts, interlayer London forces, or covalent bond breaking at high T."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Accurately compares 4-bond tetrahedral vs 3-bond layered structures and accounts for two of the three properties clearly.",
          indicators: ["Explains conductivity and sliding but omits why both have very high sublimation points."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Comprehensive comparison covering bond counts, bond angles, delocalized electrons vs localized bonds, weak interlayer London dispersion forces, and breaking massive covalent networks on sublimation.",
          indicators: ["Clearly distinguishes intramolecular covalent bonds within sheets from weak London forces between sheets."],
        },
      ],
      commonError: "Saying graphite has a low melting point because of weak forces between layers (subliming graphite still breaks strong `C−C` covalent bonds inside the sheets!).",
    },

    // ===================== Q05: S2.1 Ionic Bonding MgO vs NaCl (SL) ==========
    {
      id: "exam-p2-sl-q05",
      kind: "written",
      topicId: "s2-bonding-materials",
      guideRef: "ionic-metallic-bonding",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Link melting point to ionic charge (2+/2− vs 1+/1−) and radius, and conductivity to mobile vs fixed ions",
      marks: 4,
      question:
        "Magnesium oxide (`MgO`, melting point `2852 °C`) and sodium chloride (`NaCl`, melting point `801 °C`) are both ionic solids. Explain why `MgO` melts at a much higher temperature than `NaCl`, and explain why solid `NaCl` does not conduct electricity whereas molten `NaCl(l)` and aqueous `NaCl(aq)` do.",
      hints: [
        "Define ionic bonding precisely: electrostatic attraction between oppositely charged cations and anions in a 3D crystal lattice.",
        "Compare BOTH the ionic charges (`Mg²⁺/O²⁻` vs `Na⁺/Cl⁻`) AND the ionic radii (`Mg²⁺ < Na⁺` and `O²⁻ < Cl⁻`).",
        "State clearly which charged particles carry current in molten/aqueous ionic compounds (never say 'free electrons'!).",
      ],
      modelAnswer:
        "Both compounds consist of 3D lattices held together by electrostatic attraction between oppositely charged ions. `MgO` contains doubly charged ions (`Mg²⁺` and `O²⁻`) whereas `NaCl` has singly charged ions (`Na⁺` and `Cl⁻`), and both `Mg²⁺` and `O²⁻` have smaller ionic radii than `Na⁺` and `Cl⁻`. The greater charge density and shorter interionic distance create much stronger electrostatic attraction (higher lattice enthalpy) in `MgO`, demanding far more thermal energy to melt. In solid `NaCl`, ions are fixed rigidly in the lattice and cannot move, whereas melting or dissolving in water frees the `Na⁺` and `Cl⁻` ions to migrate and carry electric charge.",
      markScheme: [
        {
          point: "Identifies electrostatic attraction between oppositely charged ions in a 3D lattice.",
          keywords: ["electrostatic attraction", "oppositely charged"],
        },
        {
          point: "Notes MgO has higher ionic charges (2+ and 2− vs 1+ and 1−) and smaller ionic radii.",
          keywords: ["doubly charged", "smaller ionic radii", "charge density", "2+"],
        },
        {
          point: "Concludes MgO has stronger electrostatic attraction / higher lattice enthalpy requiring more thermal energy.",
          keywords: ["lattice enthalpy", "much stronger", "more thermal energy"],
        },
        {
          point: "Explains solid NaCl has fixed ions that cannot move, while molten/aqueous NaCl contains mobile ions that carry charge.",
          keywords: ["mobile", "fixed", "carry electric charge", "migrate"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid ionic-bonding explanation or mistakenly attributes conductivity to free electrons.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Mentions stronger bonds in MgO or mobile ions in liquid NaCl, but lacks charge/radius justification or lattice detail.",
          indicators: ["States MgO has stronger bonds without citing 2+/2− charges and smaller radii."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Links both ionic charge and ionic radius to electrostatic attraction/lattice enthalpy and accurately contrasts fixed vs mobile ions for conductivity.",
          indicators: ["Explicitly avoids saying 'free electrons' and identifies mobile Na⁺/Cl⁻ ions."],
        },
      ],
      commonError: "Writing that molten `NaCl` conducts because of 'delocalized/free electrons' instead of **mobile ions**.",
    },

    // ===================== Q06: S3.1 Period 3 Trends & Oxides (SL) ===========
    {
      id: "exam-p2-sl-q06",
      kind: "written",
      topicId: "s3-1-periodicity",
      guideRef: "group-trends-period3-oxides",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Use effective nuclear charge (protons vs constant shielding) for radius/IE, then give balanced oxide water equations",
      marks: 4,
      question:
        "Across Period 3 from sodium (`Na`) to argon (`Ar`), atomic radius decreases while first ionization energy generally increases. (a) Explain both trends in terms of nuclear charge and electron shielding. (b) Contrast the acid–base character of `MgO` and `P₄O₁₀` by writing balanced equations for the reaction of each oxide with water.",
      hints: [
        "As you cross Period 3, protons are added to the nucleus while valence electrons enter the **same** outer shell (`n = 3`).",
        "Does inner-shell shielding change significantly across a period? What happens to effective nuclear charge?",
        "Write balanced equations: `MgO + H₂O → ...` (weakly alkaline) and `P₄O₁₀ + 6H₂O → ...` (acidic).",
      ],
      modelAnswer:
        "(a) Moving from `Na` to `Ar`, nuclear charge increases as protons are added while additional electrons enter the same principal energy level (`n = 3`), so inner-shell shielding remains nearly constant. The resulting higher effective nuclear charge pulls the valence shell closer to the nucleus (shrinking atomic radius) and holds outer electrons more tightly, requiring greater energy to remove one electron (higher first ionization energy). (b) `MgO` is a basic ionic oxide that reacts sparingly with water to form an alkaline solution: `MgO(s) + H₂O(l) → Mg(OH)₂(aq)`. By contrast, `P₄O₁₀` is an acidic covalent oxide that reacts with water to produce phosphoric(V) acid: `P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)`.",
      markScheme: [
        {
          point: "Notes increasing nuclear charge (more protons) with electrons added to the same outer shell (n = 3), keeping shielding roughly constant.",
          keywords: ["same principal energy level", "same outer shell", "nearly constant", "shielding remains"],
        },
        {
          point: "Links stronger effective nuclear charge to pulling valence electrons closer (smaller radius) and tighter binding (higher IE).",
          keywords: ["effective nuclear charge", "pulls", "more tightly"],
        },
        {
          point: "Identifies MgO as basic/alkaline and writes MgO + H₂O → Mg(OH)₂.",
          keywords: ["mg(oh)₂", "mg(oh)2", "basic", "alkaline"],
        },
        {
          point: "Identifies P₄O₁₀ as acidic and writes P₄O₁₀ + 6H₂O → 4H₃PO₄.",
          keywords: ["4h₃po₄", "4h3po4", "phosphoric"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid explanation of Period 3 trends or oxide equations.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Explains either the periodic trends OR the oxide reactions accurately, or gives unbalanced equations.",
          indicators: ["Mentions more protons without mentioning constant shielding/same shell."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains both radius and first IE via increasing Z_eff at constant shielding and provides correctly classified and balanced water reactions for MgO and P₄O₁₀.",
          indicators: ["Correctly balances P₄O₁₀ + 6H₂O → 4H₃PO₄."],
        },
      ],
      commonError: "Writing `P₄O₁₀ + H₂O → H₃PO₄` without balancing (`6H₂O → 4H₃PO₄`), or claiming shielding decreases across a period.",
    },

    // ===================== Q07: S3.2 IHD of Aspirin (SL) =====================
    {
      id: "exam-p2-sl-q07",
      kind: "short",
      topicId: "s3-2-organic-classification",
      guideRef: "ihd-ms-ir-spectroscopy",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Apply IHD = (2C + 2 + N − H − X) / 2, remembering that oxygen does not affect IHD",
      question:
        "Aspirin (acetylsalicylic acid) has the molecular formula `C₉H₈O₄`. Calculate the Index of Hydrogen Deficiency (`IHD`) of aspirin.",
      answer: { type: "number", value: 6, tolerance: 0, display: "6" },
      traps: [
        {
          spec: { type: "number", value: 4, tolerance: 0 },
          feedback: "Oxygen atoms are ignored in IHD = (2C + 2 + N − H − X) / 2 — do not subtract the 4 oxygen atoms.",
        },
      ],
      hints: [
        "Use `IHD = (2C + 2 + N − H − X) / 2`; oxygen atoms do not enter the formula.",
        "Substitute `C = 9`, `H = 8`, `N = 0`, `X = 0`.",
      ],
      solution: [
        "`IHD = (2 × 9 + 2 − 8) / 2 = (18 + 2 − 8) / 2 = 12 / 2 = 6`.",
        "Chemically, aspirin contains one benzene ring (`IHD = 4`) plus two `C=O` double bonds (one ester, one carboxylic acid, adding `2`), totalling `6`.",
      ],
      commonError: "Subtracting oxygen atoms as if they were halogens (`X`), which wrongly lowers IHD from `6` to `4`.",
    },

    // ===================== Q08: S3.2 SL Combined IHD + IR + MS (SL) ==========
    {
      id: "exam-p2-sl-q08",
      kind: "written",
      topicId: "s3-2-organic-classification",
      guideRef: "ihd-ms-ir-spectroscopy",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Combine IHD = 1, broad carboxylic O−H + C=O IR bands, and MS loss of 45 (COOH) to confirm propanoic acid",
      marks: 4,
      question:
        "An organic liquid `Y` has molecular formula `C₃H₆O₂`. Its infrared spectrum displays a sharp strong absorption at `1715 cm⁻¹` and a very broad absorption spanning `2500–3000 cm⁻¹`. Its mass spectrum shows a molecular ion peak at `m/z = 74` and a prominent fragment ion at `m/z = 29`. Deduce the structural formula and IUPAC name of `Y`, justifying your answer using IHD, IR, and mass-spectrometry evidence (and explaining why `methyl ethanoate` is eliminated).",
      hints: [
        "Calculate `IHD = (2×3 + 2 − 6) / 2 = 1`, which matches one `C=O` double bond.",
        "Which functional group exhibits BOTH a sharp `C=O` stretch (`~1715 cm⁻¹`) AND a very broad `O−H` stretch at `2500–3000 cm⁻¹`?",
        "Subtract the fragment from the molecular ion: `74 − 29 = 45`. What fragment has mass `45` (and what ion has `m/z = 29`)?",
      ],
      modelAnswer:
        "For `C₃H₆O₂`, `IHD = (2×3 + 2 − 6) / 2 = 1`, confirming one `π` bond (`C=O`). In the IR spectrum, the sharp `1715 cm⁻¹` peak indicates a `C=O` carbonyl bond and the very broad `2500–3000 cm⁻¹` band is diagnostic of a hydrogen-bonded carboxylic acid `O−H` stretch, which immediately eliminates the ester isomer `methyl ethanoate` (lacking any `O−H` bond). In the mass spectrum, the loss `74 − 29 = 45` corresponds to loss of a `−COOH` radical, leaving the ethyl cation `CH₃CH₂⁺` (`C₂H₅⁺`) at `m/z = 29`. Compound `Y` is therefore propanoic acid, `CH₃CH₂COOH`.",
      markScheme: [
        {
          point: "Calculates IHD = 1 (one C=O double bond) for C₃H₆O₂.",
          keywords: ["ihd = 1", "ihd=1", "one π bond", "double bond"],
        },
        {
          point: "Assigns 1715 cm⁻¹ to C=O and broad 2500–3000 cm⁻¹ to a carboxylic acid O−H bond, ruling out methyl ethanoate (no O−H).",
          keywords: ["carboxylic acid", "o−h", "o-h", "lacking any"],
        },
        {
          point: "Interprets m/z = 29 as C₂H₅⁺ (CH₃CH₂⁺) resulting from loss of 45 (−COOH) from M⁺ = 74.",
          keywords: ["45", "c₂h₅⁺", "c2h5+", "ethyl cation", "-cooh", "−cooh"],
        },
        {
          point: "States the IUPAC name propanoic acid and structural formula CH₃CH₂COOH.",
          keywords: ["propanoic acid", "ch₃ch₂cooh", "ch3ch2cooh"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Incorrect compound or no valid spectroscopic justification.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies carboxylic acid or propanoic acid from IR alone, but omits IHD, MS fragmentation (74 − 29 = 45), or explicit elimination of the ester.",
          indicators: ["Names propanoic acid without interpreting m/z = 29."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Integrates IHD = 1, both diagnostic IR bands (ruling out methyl ethanoate), and MS loss of 45 (−COOH) leaving C₂H₅⁺ to establish propanoic acid (CH₃CH₂COOH).",
          indicators: ["Cites every piece of spectral evidence clearly."],
        },
      ],
      commonError: "Confusing carboxylic acid `O−H` (`2500–3000 cm⁻¹`, very broad) with alcohol `O−H` (`3200–3600 cm⁻¹`), or forgetting that esters lack an `O−H` stretch.",
    },

    // ===================== Q09: R1.2 Bond Enthalpy Hydrogenation (SL) ========
    {
      id: "exam-p2-sl-q09",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "hess-bond-enthalpies-fuels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use ΔH = Σ(bonds broken) − Σ(bonds formed) carefully counting every bond in C₂H₂ and C₂H₆",
      question:
        "Ethyne undergoes complete hydrogenation to ethane: `H−C≡C−H(g) + 2H−H(g) → C₂H₆(g)`. Given average bond enthalpies (`kJ mol⁻¹`): `C≡C = 839`, `C−C = 346`, `C−H = 414`, and `H−H = 436`, calculate the enthalpy change `ΔH` for this reaction (in `kJ mol⁻¹`, including sign).",
      answer: { type: "number", value: -291, tolerance: 2, display: "-291 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 291, tolerance: 2 },
          feedback: "Check the bond-enthalpy formula: ΔH = Σ(bonds broken) − Σ(bonds formed), NOT formed minus broken.",
        },
        {
          spec: { type: "number", value: -727, tolerance: 3 },
          feedback: "Remember there are 2 mol of H−H bonds broken (2 × 436 kJ mol⁻¹), not 1 mol.",
        },
      ],
      hints: [
        "Count bonds broken: `1 × (C≡C)`, `2 × (C−H)`, and `2 × (H−H)`.",
        "Count bonds formed in `C₂H₆`: `1 × (C−C)` and `6 × (C−H)`.",
        "Subtract `Σ(bonds formed)` from `Σ(bonds broken)`.",
      ],
      solution: [
        "Bonds broken: `839 + 2(414) + 2(436) = 839 + 828 + 872 = 2539 kJ mol⁻¹`.",
        "Bonds formed: `346 + 6(414) = 346 + 2484 = 2830 kJ mol⁻¹`.",
        "`ΔH = Σ(broken) − Σ(formed) = 2539 − 2830 = −291 kJ mol⁻¹`.",
      ],
      commonError: "Subtracting bonds broken from bonds formed (getting `+291 kJ mol⁻¹`), or miscounting the six `C−H` bonds in ethane.",
    },

    // ===================== Q10: R1.2 Hess's Law ΔH_f⊖ Propane (SL) ===========
    {
      id: "exam-p2-sl-q10",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "hess-bond-enthalpies-fuels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Write formation equation 3C(s) + 4H₂(g) → C₃H₈(g) and apply ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)",
      question:
        "Standard enthalpies of combustion are `ΔH_c⊖[C(s)] = −394 kJ mol⁻¹`, `ΔH_c⊖[H₂(g)] = −286 kJ mol⁻¹`, and `ΔH_c⊖[C₃H₈(g)] = −2219 kJ mol⁻¹`. Using Hess's Law, calculate the standard enthalpy of formation `ΔH_f⊖[C₃H₈(g)]` for `3C(s) + 4H₂(g) → C₃H₈(g)` (in `kJ mol⁻¹`, including sign).",
      answer: { type: "number", value: -107, tolerance: 2, display: "-107 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 107, tolerance: 2 },
          feedback: "With combustion data, ΔH_rxn = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products), so reverse the sign to −107 kJ mol⁻¹.",
        },
      ],
      hints: [
        "Multiply `ΔH_c⊖(C)` by `3` and `ΔH_c⊖(H₂)` by `4` to match `3C(s) + 4H₂(g)`.",
        "Subtract `ΔH_c⊖(C₃H₈)` (taking careful account of subtracting a negative number).",
      ],
      solution: [
        "Combustion of reactants: `3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ mol⁻¹`.",
        "By Hess's Law: `ΔH_f⊖[C₃H₈(g)] = −2326 − (−2219) = −2326 + 2219 = −107 kJ mol⁻¹`.",
      ],
      commonError: "Using `products − reactants` (the formation-enthalpy rule) on combustion enthalpies, flipping the sign to `+107 kJ mol⁻¹`.",
    },

    // ===================== Q11: R2.1 Limiting Reactant & % Yield (SL) ========
    {
      id: "exam-p2-sl-q11",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "stoichiometry-titrations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Identify HCl as limiting reactant, compute theoretical STP volume of CO₂, then % yield",
      question:
        "Calcium carbonate (`10.0 g`, `M = 100.09 g mol⁻¹`) is added to `150.0 cm³` of `1.00 mol dm⁻³ HCl(aq)`: `CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)`. In an experiment, `1.45 dm³` of `CO₂(g)` is collected at STP (`V_m = 22.7 dm³ mol⁻¹`). Calculate the percentage yield of `CO₂` (in `%`, to 3 significant figures).",
      answer: { type: "number", value: 85.2, tolerance: 0.4, display: "85.2%" },
      traps: [
        {
          spec: { type: "number", value: 63.9, tolerance: 0.5 },
          feedback: "You assumed CaCO₃ (0.0999 mol) was limiting — check the 1 : 2 ratio: 0.0999 mol CaCO₃ requires 0.200 mol HCl, so HCl (0.150 mol) is limiting!",
        },
        {
          spec: { type: "number", value: 42.6, tolerance: 0.5 },
          feedback: "Check the 2 : 1 stoichiometry between HCl and CO₂: n(CO₂) = n(HCl) / 2 = 0.0750 mol, not 0.150 mol.",
        },
      ],
      hints: [
        "Calculate moles of both reactants: `n(CaCO₃) = 10.0 / 100.09 = 0.0999 mol` and `n(HCl) = 0.1500 × 1.00 = 0.150 mol`.",
        "Since `1 mol CaCO₃` needs `2 mol HCl`, `HCl` is limiting, so theoretical `n(CO₂) = 0.150 / 2 = 0.0750 mol`.",
        "Find theoretical `V(CO₂) = 0.0750 × 22.7`, then compute `(1.45 / V_theoretical) × 100`.",
      ],
      solution: [
        "`n(CaCO₃) = 10.0 / 100.09 = 0.09991 mol`; `n(HCl) = 0.1500 × 1.00 = 0.1500 mol`.",
        "Because `0.09991 mol CaCO₃` requires `0.1998 mol HCl`, `HCl` is the limiting reactant.",
        "Theoretical `n(CO₂) = 0.1500 / 2 = 0.07500 mol`; theoretical `V(CO₂) = 0.07500 × 22.7 = 1.7025 dm³`.",
        "Percentage yield `= (1.45 / 1.7025) × 100 = 85.2%`.",
      ],
      commonError: "Assuming the solid (`CaCO₃`) is automatically limiting without checking the `1 : 2` stoichiometric ratio.",
    },

    // ===================== Q12: R2.2–R2.3 Haber Process Trade-Off (SL) =======
    {
      id: "exam-p2-sl-q12",
      kind: "written",
      topicId: "r2-amount-rate-extent",
      guideRef: "equilibrium-ice-gibbs-hl",
      level: "SL",
      difficulty: "core",
      commandTerm: "Discuss",
      strategy: "Balance thermodynamic yield (Le Chatelier) vs kinetic rate (collision theory), pressure cost, and catalyst role",
      diagram: SVG_HABER_PROFILE,
      marks: 5,
      question:
        "Ammonia is manufactured industrially via the Haber process: `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)`, `ΔH = −92 kJ mol⁻¹`, operated at `450 °C`, `20 MPa`, and over a finely divided iron catalyst (enthalpy profile shown above). Discuss the industrial choice of temperature, pressure, and catalyst in terms of both equilibrium yield and reaction rate.",
      hints: [
        "Explain why low temperature favours equilibrium yield (exothermic forward reaction) yet makes the rate unacceptably slow (fewer particles with `E ≥ E_a`).",
        "Explain how high pressure shifts equilibrium toward fewer gas moles (`4 → 2`) and increases collision frequency, while noting practical cost/safety constraints.",
        "Explain how the iron catalyst lowers `E_a` equally for forward and reverse pathways without shifting equilibrium position or changing `K_c`.",
      ],
      modelAnswer:
        "Because the forward synthesis is exothermic (`ΔH < 0`), Le Chatelier's principle shows that a low temperature shifts equilibrium right and maximizes ammonia yield. However, at low temperatures fewer colliding molecules possess kinetic energy `E ≥ E_a`, making the rate uneconomically slow; `450 °C` is therefore a compromise balancing acceptable yield against a commercially viable rate. Since `4 mol` of gas form `2 mol` of gas, high pressure (`20 MPa`) shifts equilibrium right to raise yield and also increases gas concentration and collision frequency; higher pressures are avoided due to expensive thick-walled vessels and energy/safety costs. The iron catalyst provides an alternative pathway with lower activation energy `E_a`, speeding up forward and reverse reactions equally so equilibrium is reached faster without altering `K_c` or equilibrium yield.",
      markScheme: [
        {
          point: "Low temperature favours exothermic forward reaction (higher yield), whereas high temperature lowers equilibrium yield.",
          keywords: ["exothermic", "maximizes ammonia yield", "low temperature shifts"],
        },
        {
          point: "Compromise temperature (450 °C) is needed because too low a temperature gives too few collisions with E ≥ E_a (too slow).",
          keywords: ["compromise", "e ≥ e_a", "uneconomically slow", "viable rate"],
        },
        {
          point: "High pressure shifts equilibrium right because 4 mol gas → 2 mol gas (fewer gas moles) AND increases collision frequency.",
          keywords: ["4 mol", "fewer gas", "collision frequency"],
        },
        {
          point: "Practical pressure limit (20 MPa) due to high capital/equipment/energy costs or safety hazards of extreme pressures.",
          keywords: ["thick-walled", "safety", "cost", "expensive"],
        },
        {
          point: "Iron catalyst offers an alternative pathway with lower E_a, increasing forward and reverse rates equally without changing K_c or equilibrium yield.",
          keywords: ["alternative pathway", "equally", "without altering"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid kinetic or equilibrium analysis of the Haber process.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States the effect of one or two conditions correctly, but confuses rate with equilibrium yield or claims a catalyst increases yield.",
          indicators: ["Incorrectly states that the iron catalyst shifts equilibrium to the right."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly explains the temperature compromise, pressure shift (4 → 2 gas moles), and catalytic pathway, omitting only one economic/rate nuance.",
          indicators: ["Explains Le Chatelier and catalyst accurately but omits pressure equipment/safety cost."],
        },
        {
          band: "5",
          marks: [5, 5],
          descriptor: "Balanced, examiner-grade discussion integrating exothermic Le Chatelier shift vs E ≥ E_a kinetics, 4 → 2 mole pressure shift + cost/safety constraint, and equal catalytic rate enhancement leaving K_c unchanged.",
          indicators: ["Explicitly notes forward and reverse rates increase equally so equilibrium yield is unchanged."],
        },
      ],
      commonError: "Claiming that the iron catalyst increases the equilibrium yield of ammonia (a catalyst only speeds up attainment of equilibrium without changing `K_c`).",
    },

    // ===================== Q13: R3.1 Strong Acid Dilution pH (SL) ============
    {
      id: "exam-p2-sl-q13",
      kind: "short",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "bronsted-ph-strong-weak",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Apply c₁V₁ = c₂V₂ for strong monoprotic HNO₃, then compute pH = −log₁₀[H⁺]",
      question:
        "A `25.0 cm³` aliquot of `0.160 mol dm⁻³` nitric acid, `HNO₃(aq)` (a strong monoprotic acid), is transferred into a volumetric flask and diluted with distilled water to a total volume of `250.0 cm³`. Calculate the pH of the diluted solution at `298 K` (to 2 decimal places).",
      answer: { type: "number", value: 1.8, tolerance: 0.02, display: "1.80" },
      traps: [
        {
          spec: { type: "number", value: 0.8, tolerance: 0.02 },
          feedback: "0.80 is the pH of the UNDILUTED 0.160 mol dm⁻³ acid — tenfold dilution increases pH by 1.00 unit to 1.80.",
        },
      ],
      hints: [
        "Use `c₁V₁ = c₂V₂`: diluting `25.0 cm³` to `250.0 cm³` dilutes the acid by a factor of `10`.",
        "Since `HNO₃` dissociates completely, `[H⁺] = c₂ = 0.0160 mol dm⁻³`; compute `−log₁₀(0.0160)`.",
      ],
      solution: [
        "Diluted concentration: `c₂ = 0.160 × (25.0 / 250.0) = 0.0160 mol dm⁻³`.",
        "Since `HNO₃` is a strong monoprotic acid, `[H⁺] = 0.0160 mol dm⁻³`.",
        "`pH = −log₁₀(0.0160) = 1.796 ≈ 1.80` (exactly `1.00` unit higher than the undiluted `pH = 0.80`).",
      ],
      commonError: "Forgetting the `10×` dilution or thinking a `10×` dilution multiplies pH by `10` instead of adding `1.00` unit.",
    },

    // ===================== Q14: R3.2 Mg/Cu Voltaic Cell (SL) =================
    {
      id: "exam-p2-sl-q14",
      kind: "written",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "redox-voltaic-electrolytic",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Assign oxidation at negative Mg anode, reduction at positive Cu cathode, e⁻ flow, and salt-bridge ion drift",
      diagram: SVG_VOLTAIC_CELL_MGCU,
      marks: 4,
      question:
        "Magnesium is more reactive (a stronger reducing agent) than copper. Refer to the `Mg / Cu` voltaic cell above to: (a) write the half-equations at the anode and cathode (identifying each electrode's polarity), (b) state the direction of electron flow through the external wire, and (c) explain the purpose of the `KNO₃(aq)` salt bridge, specifying which way `K⁺` and `NO₃⁻` ions migrate.",
      hints: [
        "More reactive `Mg` loses electrons (oxidation) at the negative anode, while `Cu²⁺` gains electrons (reduction) at the positive cathode.",
        "Electrons always travel through the external metallic wire from anode to cathode (never through the solution!).",
        "As `Mg²⁺` ions enter the left beaker and `Cu²⁺` ions are removed from the right beaker, which counter-ion must flow into each beaker to maintain electrical neutrality?",
      ],
      modelAnswer:
        "(a) Oxidation occurs at the negative magnesium anode: `Mg(s) → Mg²⁺(aq) + 2e⁻`. Reduction occurs at the positive copper cathode: `Cu²⁺(aq) + 2e⁻ → Cu(s)`. (b) Electrons flow through the external wire from the magnesium anode to the copper cathode (left to right). (c) The `KNO₃(aq)` salt bridge completes the internal circuit and preserves electrical neutrality in both half-cells by allowing ions to migrate: negative `NO₃⁻` ions move into the `Mg` half-cell to balance newly formed `Mg²⁺`, while positive `K⁺` ions move into the `Cu` half-cell to replace reduced `Cu²⁺`.",
      markScheme: [
        {
          point: "Anode (negative, Mg): oxidation half-equation Mg(s) → Mg²⁺(aq) + 2e⁻.",
          keywords: ["mg²⁺", "mg2+", "negative magnesium anode", "negative anode"],
        },
        {
          point: "Cathode (positive, Cu): reduction half-equation Cu²⁺(aq) + 2e⁻ → Cu(s).",
          keywords: ["cu²⁺(aq) + 2e⁻", "cu2+ + 2e-", "positive copper cathode", "positive cathode"],
        },
        {
          point: "Electrons travel through the external wire from magnesium (anode) to copper (cathode).",
          keywords: ["magnesium anode to the copper cathode", "left to right", "anode to the cathode", "mg to cu"],
        },
        {
          point: "Salt bridge completes the circuit / maintains electrical neutrality with NO₃⁻ moving to the Mg half-cell and K⁺ moving to the Cu half-cell.",
          keywords: ["electrical neutrality", "neutrality", "no₃⁻", "no3-"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid redox half-equations or cell operation.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Gives correct half-equations OR electron direction, but reverses polarities or omits salt-bridge ion migration directions.",
          indicators: ["States 'salt bridge completes circuit' without specifying K⁺/NO₃⁻ directions."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Correctly writes both half-equations with voltaic polarities, specifies external electron flow Mg → Cu, and explains neutrality with exact K⁺ and NO₃⁻ migration.",
          indicators: ["Clearly distinguishes external electron conduction from internal ionic conduction."],
        },
      ],
      commonError: "Saying electrons flow through the salt bridge (ONLY ions move through the salt bridge; electrons move only through the external metallic circuit).",
    },

    // ===================== Q15: R3.3 Free-Radical Chlorination Ethane (SL) ===
    {
      id: "exam-p2-sl-q15",
      kind: "written",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "free-radical-substitution",
      level: "SL",
      difficulty: "core",
      commandTerm: "Outline",
      strategy: "Write UV homolytic initiation, both radical-regenerating propagation steps, and radical-coupling termination forming C₄H₁₀",
      marks: 4,
      question:
        "When ethane gas (`C₂H₆`) reacts with chlorine (`Cl₂`) under ultraviolet light, chloroethane (`C₂H₅Cl`) is formed together with hydrogen chloride and traces of butane (`C₄H₁₀`). Outline the free-radical substitution mechanism by writing balanced equations for initiation (naming the type of bond fission), both propagation steps, and the termination step that accounts for trace butane.",
      hints: [
        "Initiation: UV photons break the weaker `Cl−Cl` bond equally (`1` electron to each atom — what type of fission?).",
        "Propagation step 1: `Cl•` abstracts an H atom from `C₂H₆` (never forms `H•`!). Propagation step 2: the ethyl radical reacts with `Cl₂`.",
        "Termination: how do two radicals combine to produce a four-carbon alkane (`C₄H₁₀`)?",
      ],
      modelAnswer:
        "1. Initiation (homolytic fission of the `Cl−Cl` bond by UV light): `Cl₂ → 2Cl•` (each chlorine atom receives one bonding electron, forming two free radicals with unpaired electrons). 2. Propagation step 1: `C₂H₆ + Cl• → •C₂H₅ + HCl`. 3. Propagation step 2: `•C₂H₅ + Cl₂ → C₂H₅Cl + Cl•` (regenerating `Cl•` to sustain the chain). 4. Termination forming trace butane: `•C₂H₅ + •C₂H₅ → C₄H₁₀` (two ethyl radicals couple to form a new `C−C` bond).",
      markScheme: [
        {
          point: "Initiation equation Cl₂ → 2Cl• explicitly identified as homolytic fission.",
          keywords: ["homolytic", "2cl•", "2cl."],
        },
        {
          point: "Propagation step 1: C₂H₆ + Cl• → •C₂H₅ + HCl.",
          keywords: ["•c₂h₅ + hcl", "c2h5 + hcl", "c₂h₅• + hcl"],
        },
        {
          point: "Propagation step 2: •C₂H₅ + Cl₂ → C₂H₅Cl + Cl• (regenerating Cl•).",
          keywords: ["c₂h₅cl + cl•", "c2h5cl + cl", "regenerating"],
        },
        {
          point: "Termination equation showing two ethyl radicals combining to form butane: •C₂H₅ + •C₂H₅ → C₄H₁₀.",
          keywords: ["two ethyl radicals", "•c₂h₅ + •c₂h₅", "c2h5 + c2h5", "couple"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid radical mechanism steps.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Writes initiation or one propagation step correctly, but omits homolytic fission, forms H• radicals, or misses the butane termination step.",
          indicators: ["Writes C₂H₆ + Cl• → C₂H₅Cl + H• (a forbidden H• step)."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly identifies homolytic fission in initiation, writes both accurate chain-propagating equations (producing HCl and regenerating Cl•), and accounts for trace butane via ethyl-radical coupling.",
          indicators: ["Marks unpaired electrons cleanly and avoids generating H• radicals."],
        },
      ],
      commonError: "Writing `C₂H₆ + Cl• → C₂H₅Cl + H•` in propagation (atomic `H•` is never formed; `Cl•` always abstracts H to form `HCl` and `•C₂H₅`!).",
    },
  ],
};
