import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "s1-particulate-matter",
  title: "Structure 1: Models of the Particulate Nature of Matter",
  strand: "Structure 1: Particulate Matter",
  icon: "⚛️",
  level: "SL",
  summary:
    "Connect the macroscopic world of mixtures, states of matter, gases and solutions to the microscopic world of isotopes, quantized electron shells, ionization energies and Avogadro's mole.",
  intro:
    "Structure 1 is the foundation of the entire IB Diploma Chemistry course: every reaction equation, enthalpy calculation, periodic trend and spectroscopic puzzle later in the syllabus depends on how fluently you translate between **macroscopic lab measurements** (mass, volume, pressure, temperature, light colour) and **particulate models** (atoms, isotopes, orbitals, photons and moles). You will build four linked pillars: **matter & the nuclear atom** (S1.1–S1.2), **emission spectra & electron configurations** (S1.3 SL), **photon energy, convergence limits & ionization energies** (S1.3 HL), and **the mole, empirical formulas & ideal vs real gases** (S1.4–S1.5).",
  guide: [
    // =========================================================================
    // SECTION 1: S1.1–S1.2 PARTICULATE NATURE, ISOTOPES & MASS SPECTROMETRY
    // =========================================================================
    {
      id: "particulate-nuclear-atom",
      heading: "S1.1–S1.2 Particulate Nature, Isotopes & Mass Spectrometry",
      level: "SL",
      discovery: {
        problem:
          "You heat a beaker of pure crushed ice steadily on a hotplate at 100 kPa and record the temperature every 15 seconds. Between 2 minutes and 6 minutes, the hotplate pumps thousands of joules of thermal energy into the beaker — yet the thermometer stays stuck at exactly 0.0 °C! Where did all that energy go, and why didn't the temperature rise?",
        idea:
          "Temperature measures the **average kinetic energy** of particles ({{T ∝ E_k}}), not total energy. During melting (and boiling), the supplied thermal energy is converted into **potential energy** as it overcomes the intermolecular attractions holding water molecules in the rigid ice lattice. Because the average speed of the molecules does not increase until every last ice crystal has melted, the thermometer reads a flat plateau at 0.0 °C.",
      },
      body: `**1. Classification of matter & separation techniques (S1.1)**
- **Pure substances** have a fixed composition and sharp, fixed melting and boiling points: **elements** contain only one type of atom (same atomic number {{Z}}), whereas **compounds** contain two or more elements chemically bonded in a fixed stoichiometric ratio (e.g. H₂O, NaCl) with properties entirely different from their constituent elements.
- **Mixtures** contain two or more substances physically combined in variable proportions; components retain their chemical identities and melt/boil over a temperature range.
  - **Homogeneous mixtures** have uniform composition and a single phase throughout (e.g. NaCl(aq), clean dry air, brass alloy).
  - **Heterogeneous mixtures** have non-uniform composition and visible phase boundaries (e.g. sand in water, oil and water, granite).
- Choose a physical separation method by targeting a difference in **physical properties**:

| Technique | Property exploited | Classic IB example |
|---|---|---|
| Filtration | Particle size / solubility (insoluble solid vs liquid) | Separating sand from aqueous NaCl |
| Evaporation / Crystallization | Volatility / solubility change with temperature | Obtaining hydrated CuSO₄·5H₂O crystals from solution |
| Simple distillation | Large boiling-point difference (volatile liquid + non-volatile solute) | Pure water from seawater |
| Fractional distillation | Smaller boiling-point difference between miscible liquids | Ethanol (78 °C) from water (100 °C) |
| Paper chromatography | Differential affinity for stationary vs mobile phase | Separating food dyes (measured by {{R_f}}) |

**2. Kinetic molecular theory, state changes & the Kelvin scale**
- **Solids:** particles vibrate about fixed positions in an ordered lattice; strong attractions; fixed shape and volume.
- **Liquids:** particles stay closely packed but slide past one another; moderate attractions; fixed volume, takes container shape.
- **Gases:** particles move rapidly and randomly with huge spaces between them; negligible attractions; compressible, fills container.
- **Absolute temperature** in kelvin is directly proportional to average particle kinetic energy: {{T(K) = t(°C) + 273.15}} (often {{+ 273}} when data are given to the nearest degree; note that a temperature *change* {{ΔT}} has the exact same numerical size in K and °C).

**3. The nuclear atom & isotopes (S1.2)**
An atom consists of a tiny, dense, positively charged **nucleus** (protons + neutrons = nucleons) surrounded by electrons in shells.

| Subatomic particle | Relative mass | Relative charge | Location |
|---|---|---|---|
| Proton ({{p^+}}) | 1 | +1 | Nucleus |
| Neutron ({{n^0}}) | 1 | 0 | Nucleus |
| Electron ({{e^-}}) | {{1/1836}} (≈ 0.0005) | −1 | Energy levels outside nucleus |

- In nuclear symbol notation **ᴬ_Z X^q**:
  - **Atomic number ({{Z}})** = number of protons (defines the element).
  - **Mass number ({{A}})** = protons + neutrons, so neutrons = {{A - Z}}.
  - **Electrons** = {{Z - q}} (for a cation like Al³⁺, {{q = +3}} so electrons = {{13 - 3 = 10}}; for an anion like S²⁻, {{q = -2}} so electrons = {{16 - (-2) = 18}}).
- **Isotopes** are atoms of the same element (same {{Z}}, same number of protons) with different numbers of neutrons (different {{A}}). Because chemical reactions involve electrons and isotopes have **identical electron configurations**, isotopes have the **same chemical properties** — but slightly **different physical properties** (mass, density, melting/boiling point, rate of diffusion).

**4. Mass spectrometry & relative atomic mass ({{A_r}})**
- **Relative atomic mass ({{A_r}})** is the weighted average mass of the naturally occurring isotopes of an element relative to {{1/12}} of the mass of an atom of carbon-12 ({{^{12}C}}). It has **no units**.
- A **mass spectrometer** vaporizes a sample, ionizes atoms into gaseous cations (typically {{X^+}}), separates them by their **mass-to-charge ratio ({{m/z}})**, and records each isotope's relative abundance as a peak height.
- Calculate {{A_r}} from percentage abundances ({{%}}) or arbitrary peak heights:
  - {{A_r = (m_1 a_1 + m_2 a_2 + ...)/(a_1 + a_2 + ...)}} (when abundances are percentages summing to 100, divide by 100).`,
      diagram: `<svg viewBox="0 0 540 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side heating curve of water showing flat phase-change plateaus and a mass spectrum of boron showing B-10 at 19.9 percent and B-11 at 80.1 percent">
  <rect x="0" y="0" width="540" height="245" fill="#ffffff"/>
  <!-- Left panel: Heating curve -->
  <text x="135" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Heating Curve (Constant Heat Supply)</text>
  <line x1="36" y1="205" x2="248" y2="205" stroke="#334155" stroke-width="1.8"/>
  <line x1="36" y1="205" x2="36" y2="34" stroke="#334155" stroke-width="1.8"/>
  <text x="142" y="226" font-size="11" text-anchor="middle" fill="#475569">Time / Heat Added</text>
  <text x="16" y="122" font-size="11" text-anchor="middle" fill="#475569" transform="rotate(-90 16 122)">Temp (K)</text>
  <!-- Curve: solid -> melt -> liquid -> boil -> gas -->
  <polyline points="40,192 70,152 115,152 152,88 212,88 242,46" fill="none" stroke="#2563eb" stroke-width="2.8"/>
  <!-- Plateau callouts -->
  <rect x="72" y="158" width="60" height="16" rx="4" fill="#dbeafe"/>
  <text x="102" y="170" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Melting (PE↑)</text>
  <rect x="150" y="64" width="66" height="16" rx="4" fill="#dbeafe"/>
  <text x="183" y="76" font-size="9.5" font-weight="700" text-anchor="middle" fill="#1d4ed8">Boiling (PE↑)</text>
  <text x="48" y="180" font-size="9.5" font-weight="600" fill="#334155">Solid</text>
  <text x="116" y="126" font-size="9.5" font-weight="600" fill="#334155">Liquid</text>
  <text x="216" y="52" font-size="9.5" font-weight="600" fill="#334155">Gas</text>
  <text x="135" y="142" font-size="8.5" fill="#0f766e">KE↑ on slopes</text>

  <!-- Divider -->
  <line x1="270" y1="16" x2="270" y2="232" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Right panel: Mass Spectrum of Boron -->
  <text x="408" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Mass Spectrum of Boron (A_r = 10.80)</text>
  <line x1="316" y1="205" x2="516" y2="205" stroke="#334155" stroke-width="1.8"/>
  <line x1="316" y1="205" x2="316" y2="38" stroke="#334155" stroke-width="1.8"/>
  <!-- Y ticks -->
  <line x1="312" y1="165" x2="316" y2="165" stroke="#334155" stroke-width="1.2"/>
  <text x="308" y="168" font-size="9.5" text-anchor="end" fill="#475569">25</text>
  <line x1="312" y1="125" x2="316" y2="125" stroke="#334155" stroke-width="1.2"/>
  <text x="308" y="128" font-size="9.5" text-anchor="end" fill="#475569">50</text>
  <line x1="312" y1="85" x2="316" y2="85" stroke="#334155" stroke-width="1.2"/>
  <text x="308" y="88" font-size="9.5" text-anchor="end" fill="#475569">75</text>
  <line x1="312" y1="45" x2="316" y2="45" stroke="#334155" stroke-width="1.2"/>
  <text x="308" y="48" font-size="9.5" text-anchor="end" fill="#475569">100</text>
  <text x="288" y="122" font-size="10.5" text-anchor="middle" fill="#475569" transform="rotate(-90 288 122)">Abundance (%)</text>
  <text x="416" y="226" font-size="11" text-anchor="middle" fill="#475569">Mass-to-charge ratio (m/z)</text>
  <!-- Gridlines -->
  <line x1="316" y1="125" x2="514" y2="125" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="316" y1="45" x2="514" y2="45" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- Peak 1: B-10 at 19.9% -> height = 19.9 * 1.6 = 31.8 px (y = 205 - 31.8 = 173.2) -->
  <rect x="372" y="173" width="14" height="32" rx="2" fill="#0d9488"/>
  <text x="379" y="167" font-size="10" font-weight="700" text-anchor="middle" fill="#0f766e">19.9%</text>
  <text x="379" y="216" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e293b">10</text>
  <!-- Peak 2: B-11 at 80.1% -> height = 80.1 * 1.6 = 128.2 px (y = 205 - 128.2 = 76.8) -->
  <rect x="442" y="77" width="14" height="128" rx="2" fill="#2563eb"/>
  <text x="449" y="70" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">80.1%</text>
  <text x="449" y="216" font-size="10.5" font-weight="700" text-anchor="middle" fill="#1e293b">11</text>
  <!-- Weighted average marker at 10.80 -> x = 379 + 0.80 * 70 = 435 -->
  <line x1="435" y1="196" x2="435" y2="208" stroke="#dc2626" stroke-width="2.2"/>
  <text x="435" y="191" font-size="9" font-weight="700" text-anchor="middle" fill="#dc2626">A_r=10.80</text>
</svg>`,
      diagramCaption:
        "Left: flat plateaus on a heating curve occur because added thermal energy increases potential energy (breaking attractions) while average kinetic energy stays constant. Right: mass spectrum of boron — A_r lies much closer to 11 than to 10 because ¹¹B is ~4× more abundant.",
      workedExamples: [
        {
          title: "Calculating A_r from a Mass Spectrum",
          problem:
            "Naturally occurring boron consists of 19.9% ¹⁰B and 80.1% ¹¹B. Calculate the relative atomic mass ({{A_r}}) of boron to two decimal places.",
          steps: [
            "Write the weighted-average formula: {{A_r = ((10 * 19.9) + (11 * 80.1))/100}}.",
            "Evaluate numerator: {{199.0 + 881.1 = 1080.1}}.",
            "Divide by 100: {{1080.1 / 100 = 10.801}} → **10.80** (2 d.p.). Sanity check: 10.80 lies between 10 and 11, four-fifths of the way to 11.",
          ],
          answer: "10.80",
          yourTurn: {
            question:
              "Naturally occurring gallium contains 60.1% ⁶⁹Ga and 39.9% ⁷¹Ga. Calculate the relative atomic mass A_r of gallium to 2 decimal places.",
            answer: { type: "number", value: 69.8, tolerance: 0.02, display: "69.80" },
            solution:
              "{{A_r = ((69 * 60.1) + (71 * 39.9))/100 = (4146.9 + 2832.9)/100 = 6979.8/100 = 69.798 ≈ 69.80}}.",
          },
        },
        {
          title: "Reverse A_r Problem: Finding Percentage Abundances",
          problem:
            "Chlorine has a relative atomic mass of 35.45 and consists of two stable isotopes, ³⁵Cl and ³⁷Cl. Deduce the percentage abundance of ³⁵Cl.",
          steps: [
            "Let the fractional abundance of ³⁵Cl be {{x}}; then the fractional abundance of ³⁷Cl is {{1 - x}}.",
            "Set up the weighted average: {{35x + 37(1 - x) = 35.45}}.",
            "Expand and solve: {{37 - 2x = 35.45}}, so {{2x = 1.55}} and {{x = 0.775}}.",
            "Convert to percentage: **77.5%** ³⁵Cl (and 22.5% ³⁷Cl — roughly a 3 : 1 ratio).",
          ],
          answer: "77.5%",
        },
      ],
      keyPoints: [
        "During any phase change (melting, freezing, boiling, condensing), temperature and average kinetic energy remain constant while potential energy changes.",
        "Always convert temperatures to kelvin ({{T = t + 273.15}}) before using gas laws or comparing average kinetic energies.",
        "For an ion ᴬ_Z X^q: protons = {{Z}}, neutrons = {{A - Z}}, electrons = {{Z - q}} (positive charge means fewer electrons; negative charge means more).",
        "Isotopes have identical chemical properties (same electron configuration) but different physical properties (mass, density, diffusion rate).",
        "Relative atomic mass {{A_r}} is dimensionless and MUST lie strictly between the lightest and heaviest isotope masses.",
      ],
      whyItWorks:
        "Why do isotopes react identically even though one nucleus is heavier? Chemical bonding and reactivity depend on electrostatic interactions involving valence electrons, which are governed by nuclear charge (+Z) and electron configuration. Adding neutral neutrons changes nuclear mass without altering the positive charge pulling on the electron cloud.",
      strategies: [
        "Sanity-check every {{A_r}} calculation: if isotope A has 80% abundance and isotope B has 20%, {{A_r}} must sit 80% of the way from B to A.",
        "When mass-spectrum peaks do not sum to 100 (e.g. relative peak heights 30 and 10), divide by the **sum of peak heights** (40), not by 100!",
        "For diatomic molecules like Cl₂ (³⁵Cl : ³⁷Cl ≈ 3 : 1), list all combinations (35+35=70, 35+37=72, 37+35=72, 37+37=74) to see the 9 : 6 : 1 molecular peak ratio.",
      ],
      thinkDeeper:
        "In a mass spectrum of chlorine gas (Cl₂), why do peaks appear at m/z = 35, 37, 70, 72 and 74 — and why is the m/z = 72 peak twice as tall as you might first guess from multiplying (3/4)(1/4)? Because two distinct molecular isotopologues give mass 72: ³⁵Cl—³⁷Cl and ³⁷Cl—³⁵Cl!",
    },

    // =========================================================================
    // SECTION 2: S1.3 EMISSION SPECTRA & ELECTRON CONFIGURATIONS
    // =========================================================================
    {
      id: "electron-configurations",
      heading: "S1.3 Emission Spectra & Electron Configurations",
      level: "SL",
      discovery: {
        problem:
          "Pass white sunlight through a glass prism and you see an unbroken rainbow (a continuous spectrum). Now pass the pinkish-purple glow from an electrically excited hydrogen discharge tube through the exact same prism — instead of a rainbow, you see just **four razor-sharp coloured lines** (red, cyan, blue, violet) separated by pitch-black gaps! What does this prove about how electrons are allowed to store energy inside a hydrogen atom?",
        idea:
          "If an electron could have *any* energy, excited atoms could emit photons of *every* wavelength and produce a smooth rainbow. Seeing only discrete wavelengths proves that electron energies inside an atom are **quantized** — restricted to specific allowed energy levels ({{n = 1, 2, 3, ...}}). Each bright line is a single photon released when an electron drops between two fixed levels, with {{ΔE = hf = hc/λ}}.",
      },
      body: `**1. Continuous spectra vs line emission spectra**
- Electromagnetic radiation travels at {{c = 3.00 * 10^8}} m s⁻¹ with {{c = fλ}}. Higher frequency {{f}} means shorter wavelength {{λ}} and **higher photon energy** (Gamma > X-ray > UV > Visible [Violet → Red] > IR > Microwave > Radio).
- **Continuous spectrum:** contains all wavelengths in a region with no gaps (e.g. white light from a glowing filament).
- **Line emission spectrum:** discrete bright coloured lines on a dark background, unique to each element (an atomic "fingerprint"). Produced when excited electrons **fall** from a higher energy level ({{n_2}}) to a lower energy level ({{n_1}}), emitting a photon whose energy exactly matches the gap {{ΔE}}.
- **Hydrogen emission series:**
  - **Lyman series** (drops to {{n = 1}}): largest energy gaps → **ultraviolet (UV)** radiation.
  - **Balmer series** (drops to {{n = 2}}): intermediate gaps → **visible** light (red 656 nm for {{3 → 2}}, cyan 486 nm for {{4 → 2}}, blue 434 nm for {{5 → 2}}, violet 410 nm for {{6 → 2}}).
  - **Paschen series** (drops to {{n = 3}}): smallest gaps → **infrared (IR)** radiation.
- **Convergence:** within every series, lines get **closer together at higher frequency / shorter wavelength** (higher energy) because the spacing between adjacent main energy levels decreases as {{n}} increases, converging to a limit at {{n = ∞}}.

**2. Main shells, sublevels & atomic orbitals**
- Main energy level {{n}} contains {{n}} sublevels, {{n^2}} orbitals, and holds a maximum of **{{2n^2}} electrons** (n=1 → 2; n=2 → 8; n=3 → 18; n=4 → 32).
- An **atomic orbital** is a region of space around the nucleus with a high probability (typically 90–95%) of finding an electron. Every single orbital holds at most **2 electrons**.
  - **s sublevel:** 1 spherical orbital → max 2 electrons.
  - **p sublevel:** 3 degenerate dumbbell-shaped orbitals ({{p_x, p_y, p_z}}) oriented along orthogonal axes → max 6 electrons.
  - **d sublevel:** 5 orbitals → max 10 electrons.
  - **f sublevel:** 7 orbitals → max 14 electrons.

**3. Three rules for ground-state electron configurations (Z = 1 to 36)**
1. **Aufbau principle:** fill sublevels in order of increasing energy: **1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p**. (Note: 4s fills before 3d in neutral K and Ca because 4s is slightly lower in energy when empty!)
2. **Pauli exclusion principle:** a maximum of **two electrons** may occupy any single orbital, and they must have **opposite spins** (drawn as ↑↓ in orbital box diagrams).
3. **Hund's rule:** when filling degenerate (equal-energy) orbitals (such as the three 2p or five 3d orbitals), electrons occupy **separate orbitals singly with parallel spins** before pairing up, minimizing electron–electron repulsion.

**4. Two mandatory exceptions & the transition-metal ion rule!**
- **Chromium (Cr, Z = 24):** {{1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1}} or **[Ar] 3d⁵ 4s¹** (NOT 3d⁴ 4s² — a half-filled 3d⁵ sublevel has extra exchange stability and lower electron–electron repulsion).
- **Copper (Cu, Z = 29):** {{1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^1}} or **[Ar] 3d¹⁰ 4s¹** (NOT 3d⁹ 4s² — a completely filled 3d¹⁰ sublevel is lower in energy).
- **Cations of d-block metals:** once 3d orbitals are occupied, **4s is higher in energy than 3d**, so **always remove 4s electrons FIRST** before removing any 3d electrons!
  - Example: Fe (Z = 26) is **[Ar] 3d⁶ 4s²** → Fe²⁺ is **[Ar] 3d⁶** → Fe³⁺ is **[Ar] 3d⁵**.`,
      diagram: `<svg viewBox="0 0 540 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen atom energy level diagram showing converging levels n=1 to infinity with Lyman UV and Balmer visible transitions, plus orbital box diagram for Cr showing [Ar] 3d5 4s1">
  <rect x="0" y="0" width="540" height="250" fill="#ffffff"/>
  <defs>
    <marker id="ar-uv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed"/>
    </marker>
    <marker id="ar-vis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="ar-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
    </marker>
    <marker id="ar-ir" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309"/>
    </marker>
  </defs>

  <!-- Left panel: Hydrogen Energy Levels (converging spacing!) -->
  <text x="155" y="19" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Hydrogen Energy Levels (Converging)</text>
  <!-- Energy lines: n=inf y=38, n=5 y=46, n=4 y=56, n=3 y=72, n=2 y=110, n=1 y=218 -->
  <line x1="48" y1="38" x2="262" y2="38" stroke="#64748b" stroke-width="1.4" stroke-dasharray="5 3"/>
  <text x="42" y="42" font-size="10" font-weight="700" text-anchor="end" fill="#475569">n=∞</text>
  <text x="266" y="42" font-size="9" fill="#475569">Convergence</text>

  <line x1="48" y1="48" x2="262" y2="48" stroke="#334155" stroke-width="1.3"/>
  <text x="42" y="51" font-size="9.5" text-anchor="end" fill="#334155">n=5</text>

  <line x1="48" y1="59" x2="262" y2="59" stroke="#334155" stroke-width="1.5"/>
  <text x="42" y="63" font-size="9.5" text-anchor="end" fill="#334155">n=4</text>

  <line x1="48" y1="76" x2="262" y2="76" stroke="#334155" stroke-width="1.7"/>
  <text x="42" y="80" font-size="10" font-weight="600" text-anchor="end" fill="#334155">n=3</text>

  <line x1="48" y1="114" x2="262" y2="114" stroke="#334155" stroke-width="2"/>
  <text x="42" y="118" font-size="10" font-weight="700" text-anchor="end" fill="#1e293b">n=2</text>

  <line x1="48" y1="216" x2="262" y2="216" stroke="#1e293b" stroke-width="2.4"/>
  <text x="42" y="220" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">n=1</text>

  <!-- Lyman arrows (UV) -->
  <line x1="74" y1="114" x2="74" y2="213" stroke="#7c3aed" stroke-width="1.9" marker-end="url(#ar-uv)"/>
  <line x1="92" y1="76" x2="92" y2="213" stroke="#7c3aed" stroke-width="1.9" marker-end="url(#ar-uv)"/>
  <line x1="110" y1="38" x2="110" y2="213" stroke="#7c3aed" stroke-width="1.9" stroke-dasharray="3 2" marker-end="url(#ar-uv)"/>
  <text x="92" y="236" font-size="10" font-weight="700" text-anchor="middle" fill="#6d28d9">Lyman (UV)</text>

  <!-- Balmer arrows (Visible) -->
  <line x1="158" y1="76" x2="158" y2="111" stroke="#dc2626" stroke-width="2" marker-end="url(#ar-vis)"/>
  <line x1="176" y1="59" x2="176" y2="111" stroke="#0284c7" stroke-width="2" marker-end="url(#ar-cyan)"/>
  <line x1="194" y1="48" x2="194" y2="111" stroke="#4f46e5" stroke-width="2" marker-end="url(#ar-uv)"/>
  <text x="176" y="132" font-size="10" font-weight="700" text-anchor="middle" fill="#b91c1c">Balmer (Visible)</text>

  <!-- Paschen arrow (IR) -->
  <line x1="236" y1="59" x2="236" y2="73" stroke="#b45309" stroke-width="1.8" marker-end="url(#ar-ir)"/>
  <text x="236" y="92" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">Paschen (IR)</text>

  <!-- Right panel: Orbital Boxes for Cr (Z=24) & Fe2+ (Z=26) -->
  <line x1="316" y1="16" x2="316" y2="236" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="428" y="19" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Key Orbital-Box Rules</text>

  <!-- Cr: [Ar] 3d5 4s1 -->
  <text x="332" y="48" font-size="11" font-weight="700" fill="#1e293b">Cr (Z = 24): [Ar] 3d⁵ 4s¹</text>
  <text x="332" y="63" font-size="9.5" fill="#475569">Exception — 6 unpaired e⁻ (half-filled 3d)</text>
  <!-- 5 boxes for 3d -->
  <rect x="332" y="72" width="26" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="358" y="72" width="26" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="384" y="72" width="26" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="410" y="72" width="26" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <rect x="436" y="72" width="26" height="26" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="345" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">↑</text>
  <text x="371" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">↑</text>
  <text x="397" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">↑</text>
  <text x="423" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">↑</text>
  <text x="449" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#1d4ed8">↑</text>
  <text x="397" y="112" font-size="10" font-weight="700" text-anchor="middle" fill="#2563eb">3d⁵</text>
  <!-- 1 box for 4s -->
  <rect x="480" y="72" width="26" height="26" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="493" y="90" font-size="14" font-weight="700" text-anchor="middle" fill="#b45309">↑</text>
  <text x="493" y="112" font-size="10" font-weight="700" text-anchor="middle" fill="#b45309">4s¹</text>

  <!-- Fe2+: [Ar] 3d6 4s0 -->
  <text x="332" y="148" font-size="11" font-weight="700" fill="#1e293b">Fe²⁺ (Z = 26): [Ar] 3d⁶</text>
  <text x="332" y="163" font-size="9.5" fill="#475569">Remove 4s² FIRST → 4 unpaired e⁻</text>
  <rect x="332" y="172" width="26" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <rect x="358" y="172" width="26" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <rect x="384" y="172" width="26" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <rect x="410" y="172" width="26" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <rect x="436" y="172" width="26" height="26" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="345" y="190" font-size="13" font-weight="700" text-anchor="middle" fill="#15803d">↑↓</text>
  <text x="371" y="190" font-size="14" font-weight="700" text-anchor="middle" fill="#15803d">↑</text>
  <text x="397" y="190" font-size="14" font-weight="700" text-anchor="middle" fill="#15803d">↑</text>
  <text x="423" y="190" font-size="14" font-weight="700" text-anchor="middle" fill="#15803d">↑</text>
  <text x="449" y="190" font-size="14" font-weight="700" text-anchor="middle" fill="#15803d">↑</text>
  <text x="397" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">3d⁶</text>
  <!-- Empty 4s box -->
  <rect x="480" y="172" width="26" height="26" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 2"/>
  <text x="493" y="212" font-size="10" font-weight="700" text-anchor="middle" fill="#64748b">4s⁰ (empty)</text>
</svg>`,
      diagramCaption:
        "Left: quantized hydrogen energy levels converge toward n = ∞, causing spectral lines to crowd together at higher frequency. Right: Hund's rule and the Cr / transition-metal cation rules in orbital-box form.",
      workedExamples: [
        {
          title: "Electron Configurations of Transition Metals & Ions",
          problem:
            "Write the condensed electron configurations of (a) Cu (Z = 29), (b) Cu²⁺, and (c) Fe³⁺ (Z = 26), and state the number of unpaired electrons in Fe³⁺.",
          steps: [
            "(a) Cu (Z = 29) is one of the two IB exceptions: promoting one 4s electron completes the 3d sublevel → **[Ar] 3d¹⁰ 4s¹**.",
            "(b) To form Cu²⁺, remove 2 electrons starting from the **4s** sublevel first (1 electron from 4s, then 1 from 3d) → **[Ar] 3d⁹**.",
            "(c) Neutral Fe (Z = 26) is [Ar] 3d⁶ 4s². To form Fe³⁺, remove both 4s electrons first and then one 3d electron → **[Ar] 3d⁵**. By Hund's rule, all five 3d orbitals hold one parallel electron → **5 unpaired electrons**.",
          ],
          answer: "(a) [Ar] 3d¹⁰ 4s¹; (b) [Ar] 3d⁹; (c) [Ar] 3d⁵ (5 unpaired electrons)",
          yourTurn: {
            question:
              "How many unpaired electrons are present in a ground-state manganese(II) ion, Mn²⁺ (Z = 25)?",
            answer: { type: "number", value: 5, tolerance: 0, display: "5" },
            solution:
              "Neutral Mn (Z = 25) has configuration [Ar] 3d⁵ 4s². Removing two electrons from the 4s sublevel first leaves Mn²⁺ with [Ar] 3d⁵. By Hund's rule, each of the five 3d orbitals holds one unpaired electron → 5.",
          },
        },
        {
          title: "Comparing Transitions on the Hydrogen Spectrum",
          problem:
            "Between the transitions n = 3 → n = 2 and n = 5 → n = 2 in the hydrogen Balmer series, which emits light of (a) higher frequency and (b) longer wavelength?",
          steps: [
            "Both transitions end on n = 2 (visible Balmer series), so compare the starting levels: n = 5 sits higher above n = 2 than n = 3 does.",
            "Therefore n = 5 → n = 2 releases a **larger energy packet** ({{ΔE}}), which means **higher frequency** ({{f = ΔE/h}}) — violet-blue light.",
            "Since {{λ = c/f}}, wavelength is inversely proportional to energy. The smaller energy jump n = 3 → n = 2 emits the **longer wavelength** (red light, 656 nm).",
          ],
          answer: "(a) n = 5 → n = 2; (b) n = 3 → n = 2",
        },
      ],
      keyPoints: [
        "Emission lines arise when electrons **fall** to lower energy levels (releasing photons); absorption lines arise when electrons **jump** up (absorbing photons of identical {{ΔE}}).",
        "Lyman (to {{n=1}}) = UV; Balmer (to {{n=2}}) = visible; Paschen (to {{n=3}}) = IR. All series converge at **high frequency / short wavelength**.",
        "Maximum electrons per main shell = {{2n^2}}; maximum per single orbital = 2 (opposite spins, Pauli exclusion).",
        "Memorize the two neutral exceptions: Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹.",
        "When ionizing ANY 3d-block atom, **always remove 4s electrons before 3d electrons**.",
      ],
      whyItWorks:
        "Why do spectral lines converge at high energy? The electrostatic potential energy of a hydrogen electron scales as {{-1/n^2}}. Jumping from n = 1 to n = 2 uses 75% of the entire ionization energy, whereas the gap between n = 5 and n = 6 is tiny. As n → ∞, the levels crowd asymptotically toward zero binding energy.",
      strategies: [
        "Write sublevels in shell order ([Ar] 3d⁶ 4s²) rather than filling order ([Ar] 4s² 3d⁶) — it visually reminds you that 4s is outermost and lost first during ionization!",
        "Never confuse **sublevel** (e.g. 2p holds 6 electrons) with **orbital** (e.g. 2p_x holds 2 electrons).",
        "Count electrons twice on every condensed configuration: [Ne] = 10, [Ar] = 18; sum core + superscripts and verify it equals {{Z - q}}.",
      ],
      thinkDeeper:
        "Why does helium's line emission spectrum look completely different from hydrogen's, even though both atoms have only 1s electrons in their ground state? Helium has a +2 nuclear charge and electron–electron repulsion, shifting every single energy level and creating a totally distinct set of allowed {{ΔE}} transitions.",
    },

    // =========================================================================
    // SECTION 3: S1.3 CONVERGENCE LIMIT & SUCCESSIVE IONIZATION ENERGIES [HL]
    // =========================================================================
    {
      id: "ionization-energy-hl",
      heading: "S1.3 Convergence Limit & Successive Ionization Energies",
      level: "HL",
      discovery: {
        problem:
          "Across Period 2 from lithium (Z = 3) to neon (Z = 10), nuclear charge increases steadily while electrons enter the same n = 2 shell — so you would expect first ionization energy to climb in a smooth straight line. Instead, experimental data show TWO mysterious dips: boron (801 kJ mol⁻¹) drops *below* beryllium (900 kJ mol⁻¹), and oxygen (1314 kJ mol⁻¹) drops *below* nitrogen (1402 kJ mol⁻¹)! How can a heavier nucleus with more protons hold its outermost electron *more weakly*?",
        idea:
          "Those two dips are the smoking-gun experimental proof of **sublevels (s vs p)** and **electron pairing inside orbitals**! Boron's outermost electron enters the higher-energy **2p** sublevel, which sits slightly further from the nucleus and is partially shielded by the filled 2s² pair. Oxygen's fourth 2p electron is forced to **pair up** inside an already half-occupied 2p orbital, introducing extra **electron–electron repulsion** that lowers the energy needed to remove it.",
      },
      body: `**1. Photon energy & the convergence limit (S1.3 HL)**
- The energy of a single photon is directly proportional to its frequency {{f}} and inversely proportional to its wavelength {{λ}}:
  - {{E = hf = (hc)/λ}}
  - IB Data Booklet constants: Planck constant {{h = 6.63 * 10^(-34)}} J s, speed of light {{c = 3.00 * 10^8}} m s⁻¹, Avogadro constant {{N_A = 6.02 * 10^{23}}} mol⁻¹.
- At the **convergence limit** of the Lyman series (transitions ending on the ground state {{n = 1}}), the emitted photon corresponds to an electron falling from {{n = ∞}} to {{n = 1}}. The reverse process — promoting an electron from {{n = 1}} to {{n = ∞}} — completely removes the electron from the gaseous atom, which is the **first ionization energy ({{IE_1}})**!
- Converting single-atom ionization energy (J) to molar ionization energy (kJ mol⁻¹):
  - {{IE_1 = (hf_{limit} * N_A)/1000 = (hc N_A)/(1000 λ_{limit})}}

**2. Defining ionization energy & Period 2/3 anomalies**
- **First ionization energy ({{IE_1}}):** the minimum energy required to remove one mole of electrons from one mole of **gaseous** atoms in their ground state to form one mole of gaseous 1+ ions:
  - **X(g) → X⁺(g) + e⁻** (state symbols **(g)** are strictly required for full IB credit!).
- **General trend across a period (e.g. Li → Ne or Na → Ar):** {{IE_1}} increases because nuclear charge ({{Z}}) increases while electrons are added to the **same main energy level**, so inner-shell shielding remains approximately constant and atomic radius decreases → stronger electrostatic attraction to the valence electron.
- **Two systematic dips (anomalies):**
  1. **Group 2 → Group 13 (Be → B; Mg → Al):** the outermost electron of B (2s² 2p¹) or Al (3s² 3p¹) lies in a **higher-energy p sublevel** that is slightly further from the nucleus and shielded by the filled s² sublevel → easier to remove than an s electron from Be or Mg.
  2. **Group 15 → Group 16 (N → O; P → S):** N (2p³) and P (3p³) have three singly occupied p orbitals; O (2p⁴) and S (3p⁴) contain **paired electrons in one p orbital**, creating extra **electron–electron repulsion** that lowers the energy needed to remove one of the paired electrons.

**3. Successive ionization energies & log plots**
- Removing a second, third, fourth electron from the same atom always requires **more energy** ({{IE_1 < IE_2 < IE_3 < ...}}) because the same nuclear charge pulls on fewer remaining electrons (greater effective nuclear charge per electron, reduced electron–electron repulsion, smaller ionic radius).
- Because successive ionization energies span several orders of magnitude (e.g. 500 to > 100 000 kJ mol⁻¹), chemists plot **{{log_{10}(IE)}}** against ionization number.
- **Reading the jump:** a **very large jump** in successive IE indicates that the next electron is being removed from a **closer inner main energy level** (significantly less shielding and smaller distance to nucleus).
  - If the first large jump occurs between {{IE_k}} and {{IE_{k+1}}}, the atom has **{{k}} valence electrons** (so {{k = 1}} → Group 1; {{k = 2}} → Group 2; {{k = 3}} → Group 13; {{k = 4}} → Group 14; {{k = 5}} → Group 15; etc.).
  - A **smaller intermediate jump** within the same main shell reveals crossing from a **p sublevel into an s sublevel** (for example, in Group 13 Al, {{IE_1}} removes 3p¹, then a smaller step appears before removing 3s², followed by a huge jump between {{IE_3}} and {{IE_4}} into the n = 2 shell!).`,
      diagram: `<svg viewBox="0 0 540 248" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: First ionization energy across Period 2 highlighting the Be to B sublevel dip and N to O orbital-pairing dip. Right: Logarithmic successive ionization energy plot for aluminium showing the huge jump between IE3 and IE4">
  <rect x="0" y="0" width="540" height="248" fill="#ffffff"/>
  <!-- Left panel: Period 2 First IE -->
  <text x="136" y="19" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">Period 2 First IE: Two Sublevel Dips</text>
  <line x1="42" y1="204" x2="252" y2="204" stroke="#334155" stroke-width="1.8"/>
  <line x1="42" y1="204" x2="42" y2="34" stroke="#334155" stroke-width="1.8"/>
  <text x="147" y="232" font-size="10.5" text-anchor="middle" fill="#475569">Element (Period 2)</text>
  <text x="14" y="120" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 14 120)">IE₁ (kJ mol⁻¹)</text>
  <!-- Y ticks: 0 at 204, 2400 at 36 -> scale 168/2400 = 0.07 px per kJ/mol -->
  <text x="37" y="165" font-size="8.5" text-anchor="end" fill="#64748b">600</text>
  <text x="37" y="123" font-size="8.5" text-anchor="end" fill="#64748b">1200</text>
  <text x="37" y="81" font-size="8.5" text-anchor="end" fill="#64748b">1800</text>
  <line x1="42" y1="120" x2="250" y2="120" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
  <!-- Data points: Li 520(168), Be 900(141), B 801(148), C 1086(128), N 1402(106), O 1314(112), F 1681(86), Ne 2081(58) -->
  <polyline points="56,168 82,141 108,148 134,128 160,106 186,112 212,86 238,58" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <!-- Highlight dips -->
  <circle cx="56" cy="168" r="3.5" fill="#2563eb"/>
  <circle cx="82" cy="141" r="3.5" fill="#2563eb"/>
  <circle cx="108" cy="148" r="4.5" fill="#dc2626"/>
  <circle cx="134" cy="128" r="3.5" fill="#2563eb"/>
  <circle cx="160" cy="106" r="3.5" fill="#2563eb"/>
  <circle cx="186" cy="112" r="4.5" fill="#dc2626"/>
  <circle cx="212" cy="86" r="3.5" fill="#2563eb"/>
  <circle cx="238" cy="58" r="3.5" fill="#2563eb"/>
  <!-- Element labels -->
  <text x="56" y="216" font-size="9.5" text-anchor="middle" fill="#334155">Li</text>
  <text x="82" y="216" font-size="9.5" text-anchor="middle" fill="#334155">Be</text>
  <text x="108" y="216" font-size="9.5" font-weight="700" text-anchor="middle" fill="#dc2626">B</text>
  <text x="134" y="216" font-size="9.5" text-anchor="middle" fill="#334155">C</text>
  <text x="160" y="216" font-size="9.5" text-anchor="middle" fill="#334155">N</text>
  <text x="186" y="216" font-size="9.5" font-weight="700" text-anchor="middle" fill="#dc2626">O</text>
  <text x="212" y="216" font-size="9.5" text-anchor="middle" fill="#334155">F</text>
  <text x="238" y="216" font-size="9.5" text-anchor="middle" fill="#334155">Ne</text>
  <!-- Dip annotations -->
  <text x="108" y="167" font-size="8.5" font-weight="700" text-anchor="middle" fill="#b91c1c">2p¹ dip</text>
  <text x="190" y="131" font-size="8.5" font-weight="700" text-anchor="middle" fill="#b91c1c">2p⁴ pair</text>
  <text x="190" y="141" font-size="8.5" font-weight="700" text-anchor="middle" fill="#b91c1c">repulsion</text>

  <!-- Divider -->
  <line x1="270" y1="16" x2="270" y2="236" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Right panel: log10(IE) for Al (1s2 2s2 2p6 3s2 3p1) -->
  <text x="408" y="19" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">Successive log₁₀(IE) for Aluminium (Group 13)</text>
  <line x1="316" y1="204" x2="520" y2="204" stroke="#334155" stroke-width="1.8"/>
  <line x1="316" y1="204" x2="316" y2="34" stroke="#334155" stroke-width="1.8"/>
  <text x="418" y="232" font-size="10.5" text-anchor="middle" fill="#475569">Electron Removed (Ionization Number)</text>
  <text x="288" y="120" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 288 120)">log₁₀(IE / kJ mol⁻¹)</text>
  <!-- Y ticks: log=2.5 (204) to log=5.5 (36) -> 56 px per log unit -->
  <text x="311" y="179" font-size="8.5" text-anchor="end" fill="#64748b">3.0</text>
  <text x="311" y="123" font-size="8.5" text-anchor="end" fill="#64748b">4.0</text>
  <text x="311" y="67" font-size="8.5" text-anchor="end" fill="#64748b">5.0</text>
  <!-- Al log10(IE) for 1..13: 2.76, 3.26, 3.44, 4.06, 4.17, 4.26, 4.37, 4.44, 4.50, 4.58, 4.63, 5.30, 5.35 -->
  <!-- x = 328 + (k-1)*15.5; y = 204 - (log - 2.5)*56 -->
  <polyline points="328,189 343.5,161 359,151 374.5,117 390,110 405.5,105 421,99 436.5,95 452,92 467.5,88 483,85 498.5,47 514,44" fill="none" stroke="#0d9488" stroke-width="2.2"/>
  <circle cx="328" cy="189" r="3" fill="#0d9488"/>
  <circle cx="343.5" cy="161" r="3" fill="#0d9488"/>
  <circle cx="359" cy="151" r="3.5" fill="#0d9488"/>
  <circle cx="374.5" cy="117" r="3.5" fill="#dc2626"/>
  <circle cx="390" cy="110" r="2.8" fill="#0d9488"/>
  <circle cx="405.5" cy="105" r="2.8" fill="#0d9488"/>
  <circle cx="421" cy="99" r="2.8" fill="#0d9488"/>
  <circle cx="436.5" cy="95" r="2.8" fill="#0d9488"/>
  <circle cx="452" cy="92" r="2.8" fill="#0d9488"/>
  <circle cx="467.5" cy="88" r="2.8" fill="#0d9488"/>
  <circle cx="483" cy="85" r="3.5" fill="#0d9488"/>
  <circle cx="498.5" cy="47" r="3.5" fill="#dc2626"/>
  <circle cx="514" cy="44" r="3" fill="#0d9488"/>
  <!-- Shell brackets / labels -->
  <text x="344" y="199" font-size="8.5" font-weight="700" text-anchor="middle" fill="#0f766e">n=3 (3 e⁻)</text>
  <text x="428" y="128" font-size="8.5" font-weight="700" text-anchor="middle" fill="#0f766e">n=2 (8 e⁻)</text>
  <text x="506" y="36" font-size="8.5" font-weight="700" text-anchor="middle" fill="#0f766e">n=1 (2 e⁻)</text>
  <text x="386" y="146" font-size="8.5" font-weight="700" fill="#dc2626">Big jump 3→4</text>
  <text x="328" y="216" font-size="8.5" text-anchor="middle" fill="#475569">1</text>
  <text x="359" y="216" font-size="8.5" text-anchor="middle" fill="#475569">3</text>
  <text x="421" y="216" font-size="8.5" text-anchor="middle" fill="#475569">7</text>
  <text x="483" y="216" font-size="8.5" text-anchor="middle" fill="#475569">11</text>
  <text x="514" y="216" font-size="8.5" text-anchor="middle" fill="#475569">13</text>
</svg>`,
      diagramCaption:
        "Left: Period 2 first ionization energies reveal sublevel splitting (Be → B) and orbital-pairing repulsion (N → O). Right: Aluminium's 13 successive log₁₀(IE) values show exact shell capacities 3, 8, 2 from outside in.",
      workedExamples: [
        {
          title: "First Ionization Energy from a Convergence Limit [HL]",
          problem:
            "The convergence limit of the Lyman series in the hydrogen emission spectrum occurs at frequency {{f = 3.29 * 10^{15}}} s⁻¹. Using {{h = 6.63 * 10^(-34)}} J s and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the first ionization energy of hydrogen in kJ mol⁻¹ to 3 significant figures.",
          steps: [
            "Energy of one convergence-limit photon (= ionization energy of 1 H atom): {{E = hf = (6.63 * 10^(-34)) * (3.29 * 10^{15}) = 2.181 * 10^(-18)}} J.",
            "Multiply by Avogadro's constant for 1 mole of atoms: {{E_{mol} = (2.181 * 10^(-18)) * (6.02 * 10^{23}) = 1.313 * 10^6}} J mol⁻¹.",
            "Divide by 1000 to convert J to kJ: **1310 kJ mol⁻¹** (3 s.f.; Data Booklet value is 1312 kJ mol⁻¹).",
          ],
          answer: "1310 kJ mol⁻¹",
          yourTurn: {
            question:
              "The convergence limit of the Lyman series of hydrogen has wavelength 91.2 nm (9.12 × 10⁻⁸ m). Using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ and N_A = 6.02 × 10²³ mol⁻¹, calculate the first ionization energy in kJ mol⁻¹ (to 3 significant figures).",
            answer: { type: "number", value: 1310, tolerance: 15, display: "1310 kJ mol⁻¹" },
            solution:
              "{{E = (hc)/λ = (6.63 * 10^(-34) * 3.00 * 10^8)/(9.12 * 10^(-8)) = 2.181 * 10^(-18)}} J per atom. Multiplying by {{6.02 * 10^{23}}} and dividing by 1000 gives {{1313 ≈ 1310}} kJ mol⁻¹.",
          },
        },
        {
          title: "Deducing Group Number from Successive Ionization Energies [HL]",
          problem:
            "The first five successive ionization energies of a Period 3 element X are 738, 1451, 7733, 10543 and 13630 kJ mol⁻¹. Deduce the group number and identity of X, justifying your answer.",
          steps: [
            "Calculate the ratios between consecutive IEs: {{IE_2/IE_1 = 1451/738 = 1.97}}, {{IE_3/IE_2 = 7733/1451 = 5.33}}, {{IE_4/IE_3 = 10543/7733 = 1.36}}.",
            "The largest jump (over 5×!) occurs between {{IE_2}} and {{IE_3}}, meaning the 3rd electron is removed from a much closer inner main shell ({{n = 2}}) with less shielding.",
            "Hence element X has **2 valence electrons** → **Group 2**. In Period 3, Group 2 is **magnesium (Mg)**.",
          ],
          answer: "Group 2 (Magnesium, Mg)",
        },
      ],
      keyPoints: [
        "Always check units in {{E = hc/λ}}: convert wavelength from nm to m by multiplying by {{10^(-9)}}, and convert J mol⁻¹ to kJ mol⁻¹ by dividing by 1000.",
        "Only the convergence limit of the **Lyman series** (ground state {{n = 1}}) gives the **first ionization energy** of hydrogen; the Balmer convergence limit gives the energy needed to ionize from {{n = 2}}.",
        "State symbols **(g)** are mandatory in every ionization energy equation: X(g) → X⁺(g) + e⁻ and X⁺(g) → X²⁺(g) + e⁻.",
        "Be → B (and Mg → Al) dip proves **p sublevels are higher in energy** than s sublevels; N → O (and P → S) dip proves **electron-pair repulsion** inside a single p orbital.",
        "Count electrons removed *before* the first huge jump in successive IEs to find the number of valence electrons.",
      ],
      whyItWorks:
        "Why is a logarithmic scale used for successive ionization energies? Removing an inner 1s electron from aluminium takes over 220 000 kJ mol⁻¹ compared with just 578 kJ mol⁻¹ for its outer 3p electron — a 380-fold span! Plotting {{log_{10}(IE)}} compresses orders of magnitude onto one readable vertical axis so both shell jumps and smaller subshell steps stand out clearly.",
      strategies: [
        "When writing an IB explanation for the N → O dip, never write 'half-filled stability' alone — examiners specifically award marks for **paired electrons in the same 2p orbital** experiencing **greater electron–electron repulsion**.",
        "When comparing successive IEs in a table, compute **ratios** ({{IE_{n+1}/IE_n}}) rather than raw differences — raw differences always grow even within the same shell!",
        "Check whether the question gives a Period 2 or Period 3 element before translating valence electrons into IUPAC group number (3 valence e⁻ → Group **13**, NOT Group 3!).",
      ],
      thinkDeeper:
        "Look closely at the Group 15 → 16 dip across Periods 2, 3 and 4: why is the drop smaller from P to S (1012 → 1000 kJ mol⁻¹) than from N to O (1402 → 1314 kJ mol⁻¹)? Because 3p orbitals are larger and more diffuse than compact 2p orbitals, so pairing two electrons in a 3p orbital creates less intense electron–electron repulsion!",
    },

    // =========================================================================
    // SECTION 4: S1.4–S1.5 THE MOLE, EMPIRICAL FORMULAS & IDEAL GASES
    // =========================================================================
    {
      id: "mole-ideal-gases",
      heading: "S1.4–S1.5 The Mole, Empirical Formulas & Ideal Gases",
      level: "SL",
      discovery: {
        problem:
          "You inflate two identical 22.7 dm³ balloons at 273 K and 100 kPa: Balloon A contains 2.02 g of hydrogen gas (H₂), while Balloon B contains 44.01 g of carbon dioxide (CO₂) — more than 21 times heavier! Which balloon contains more gas molecules?",
        idea:
          "They contain the **exact same number of molecules** — {{6.02 * 10^{23}}} molecules (1.00 mol) each! In a gas, the molecules themselves occupy less than 0.1% of the container volume; almost all the volume is empty space maintained by molecular collisions. According to **Avogadro's law**, equal volumes of any ideal gases at the same temperature and pressure contain equal numbers of particles, regardless of molecular mass.",
      },
      body: `**1. The mole, Avogadro constant & molar mass (S1.4)**
- One **mole (mol)** contains exactly the Avogadro constant of elementary entities (atoms, molecules, ions, or formula units): {{N_A = 6.02 * 10^{23}}} mol⁻¹.
- Core mole conversions:
  - Number of particles: {{N = n * N_A}}
  - From mass: {{n = m/M}} where {{M}} is molar mass in g mol⁻¹ (numerically equal to {{A_r}} or {{M_r}}).
- **Empirical formula** = simplest whole-number ratio of atoms of each element in a compound; **molecular formula** = actual number of each atom in a molecule ({{k = M / M_{emp}}}).
  - Step-by-step recipe: **(1) Mass (or %) → (2) Divide by {{A_r}} to get moles → (3) Divide all by smallest mole value → (4) Scale to integers** (if you see .5 multiply by 2; .33/.67 multiply by 3; .25/.75 multiply by 4).
  - In **combustion analysis** of a C, H, O compound: find mass of C from {{CO_2}} ({{12.01/44.01}}), mass of H from {{H_2O}} ({{2.02/18.02}}), and **mass of O by subtracting C and H from the original sample mass**!

**2. Solutions, molar concentration & dilution**
- **Molar concentration (molarity):** {{c = n/V}} in **mol dm⁻³**, where volume {{V}} MUST be in **dm³** ({{1 dm^3 = 1000 cm^3 = 1 L}}).
- **Mass concentration:** {{ρ = m/V = c * M}} in **g dm⁻³**.
- **Dilution:** adding pure solvent leaves moles of solute unchanged ({{n_1 = n_2}}), giving **{{c_1 V_1 = c_2 V_2}}** (any matching volume units work on both sides!).
- **Standard solution preparation:** weigh exact mass of primary standard, dissolve in a small volume of distilled water in a beaker, transfer quantitatively (with rinsings!) to a **volumetric flask**, make up to the graduation mark so the bottom of the meniscus sits on the line, stopper and invert thoroughly.

**3. Ideal gas laws & molar gas volume (S1.5)**
- **STP (IB FA2025 standard):** **273 K (0 °C)** and **100 kPa** → molar volume of an ideal gas is **{{V_m = 22.7}} dm³ mol⁻¹** ({{n = V/V_m}}). *(Do NOT use the outdated 22.4 dm³ mol⁻¹ from 101.3 kPa!)*
- **Combined gas law** (for a fixed amount {{n}} of gas): {{(p_1 V_1)/T_1 = (p_2 V_2)/T_2}} with {{T}} strictly in **kelvin**. Special cases: Boyle's law ({{p ∝ 1/V}} at constant {{T}}), Charles's law ({{V ∝ T}} at constant {{p}}), Gay-Lussac's law ({{p ∝ T}} at constant {{V}}).
- **Ideal gas equation:** **{{pV = nRT}}** with {{R = 8.31}} J K⁻¹ mol⁻¹.
  - **SI unit set:** {{p}} in **Pa**, {{V}} in **m³** ({{1 m^3 = 1000 dm^3 = 10^6 cm^3}}), {{T}} in **K**.
  - **Equivalently (handy IB shortcut):** {{p}} in **kPa** and {{V}} in **dm³** (because {{1 kPa * 1 dm^3 = 10^3 Pa * 10^(-3) m^3 = 1 J}}!).
  - Substituting {{n = m/M}} gives molar mass directly: **{{M = (mRT)/(pV)}}**.

**4. Real gases vs ideal gases**
An **ideal gas** obeys two key kinetic assumptions: (1) gas particles have **negligible volume** compared with the container volume, and (2) there are **zero intermolecular forces** between particles (all collisions are perfectly elastic).
- Real gases behave **most ideally** at **low pressure** and **high temperature** (particles far apart and moving too fast for attractions to matter).
- Real gases **deviate most** at **high pressure** and **low temperature**:
  - At **low temperature / moderate pressure**, intermolecular attractions pull molecules slightly inward, reducing wall collision force → measured pressure is lower than ideal → **{{(pV)/(nRT) < 1}}** (negative dip; strongest for polar/H-bonding gases like NH₃ or large molecules like CO₂).
  - At **very high pressure**, finite particle volume leaves less free space to move in → gas is less compressible than predicted → **{{(pV)/(nRT) > 1}}** (positive upward rise).`,
      diagram: `<svg viewBox="0 0 540 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: The Mole Hub connecting mass, particle count, solution concentration, STP gas volume and ideal gas law. Right: Compressibility factor pV over nRT versus pressure graph comparing ideal gas, H2, N2 and CO2">
  <rect x="0" y="0" width="540" height="245" fill="#ffffff"/>
  <!-- Left panel: Mole Hub -->
  <text x="134" y="19" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">The Central Mole Hub (n)</text>
  <!-- Center circle -->
  <circle cx="134" cy="126" r="32" fill="#2563eb"/>
  <text x="134" y="123" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">MOLES</text>
  <text x="134" y="139" font-size="12" font-weight="700" text-anchor="middle" fill="#dbeafe">n (mol)</text>
  <!-- Top box: Mass -->
  <rect x="78" y="32" width="112" height="34" rx="7" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="134" y="47" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">Mass m (g)</text>
  <text x="134" y="60" font-size="9.5" text-anchor="middle" fill="#334155">n = m / M</text>
  <line x1="134" y1="66" x2="134" y2="94" stroke="#2563eb" stroke-width="1.8"/>
  <!-- Bottom box: Particles -->
  <rect x="74" y="186" width="120" height="36" rx="7" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="134" y="201" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">Particles N</text>
  <text x="134" y="215" font-size="9.5" text-anchor="middle" fill="#334155">N = n × 6.02×10²³</text>
  <line x1="134" y1="158" x2="134" y2="186" stroke="#15803d" stroke-width="1.8"/>
  <!-- Left box: Solution -->
  <rect x="6" y="102" width="84" height="48" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="48" y="119" font-size="9.5" font-weight="700" text-anchor="middle" fill="#b45309">Solution</text>
  <text x="48" y="132" font-size="9.5" text-anchor="middle" fill="#334155">n = c × V</text>
  <text x="48" y="144" font-size="8.5" text-anchor="middle" fill="#64748b">(V in dm³)</text>
  <line x1="90" y1="126" x2="102" y2="126" stroke="#d97706" stroke-width="1.8"/>
  <!-- Right box: Gas -->
  <rect x="178" y="98" width="84" height="56" rx="7" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="220" y="114" font-size="9.5" font-weight="700" text-anchor="middle" fill="#6d28d9">Ideal Gas</text>
  <text x="220" y="128" font-size="9" text-anchor="middle" fill="#334155">n = pV / RT</text>
  <text x="220" y="142" font-size="8.5" text-anchor="middle" fill="#64748b">STP: V / 22.7</text>
  <line x1="166" y1="126" x2="178" y2="126" stroke="#7c3aed" stroke-width="1.8"/>

  <!-- Divider -->
  <line x1="274" y1="16" x2="274" y2="232" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Right panel: pV/nRT vs P real gas deviation -->
  <text x="410" y="19" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">Real vs Ideal Gas: pV / nRT vs Pressure</text>
  <line x1="316" y1="205" x2="520" y2="205" stroke="#334155" stroke-width="1.8"/>
  <line x1="316" y1="205" x2="316" y2="34" stroke="#334155" stroke-width="1.8"/>
  <text x="418" y="226" font-size="10.5" text-anchor="middle" fill="#475569">Pressure p (increasing →)</text>
  <text x="290" y="120" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 290 120)">pV / nRT</text>
  <!-- Ideal line at y=132 (Z = 1.0) -->
  <line x1="316" y1="132" x2="516" y2="132" stroke="#475569" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="311" y="135" font-size="9.5" font-weight="700" text-anchor="end" fill="#1e293b">1.0</text>
  <text x="478" y="125" font-size="9" font-weight="700" fill="#475569">Ideal gas</text>
  <!-- H2 curve: stays above 1.0 (tiny IMFs, particle volume dominates) -->
  <path d="M 316 132 Q 410 114, 512 66" fill="none" stroke="#15803d" stroke-width="2.2"/>
  <text x="494" y="60" font-size="9.5" font-weight="700" fill="#15803d">H₂</text>
  <!-- N2 curve: small dip then rises -->
  <path d="M 316 132 C 350 144, 405 130, 512 84" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <text x="502" y="96" font-size="9.5" font-weight="700" fill="#1d4ed8">N₂</text>
  <!-- CO2 curve: deep dip from IMFs, then steep volume rise -->
  <path d="M 316 132 C 362 192, 428 190, 512 106" fill="none" stroke="#dc2626" stroke-width="2.4"/>
  <text x="424" y="186" font-size="9.5" font-weight="700" fill="#dc2626">CO₂ (IMFs pull Z &lt; 1)</text>
  <!-- High-P callout -->
  <text x="415" y="54" font-size="8.5" font-weight="600" fill="#334155">Particle volume → Z &gt; 1</text>
</svg>`,
      diagramCaption:
        "Left: every stoichiometry calculation passes through moles n. Right: real gases dip below pV/nRT = 1 when intermolecular attractions dominate, then rise above 1 at high pressure as finite molecular volume becomes significant.",
      workedExamples: [
        {
          title: "Empirical & Molecular Formula from Percentage Composition",
          problem:
            "A carbohydrate contains 40.00% C, 6.71% H and 53.29% O by mass ({{A_r}}: C = 12.01, H = 1.01, O = 16.00) and has molar mass {{M = 180.18}} g mol⁻¹. Determine its empirical and molecular formulas.",
          steps: [
            "Assume a 100 g sample and convert masses to moles: C = {{40.00/12.01 = 3.331}} mol; H = {{6.71/1.01 = 6.644}} mol; O = {{53.29/16.00 = 3.331}} mol.",
            "Divide all mole values by the smallest (3.331): C = {{1.00}}, H = {{1.995 ≈ 2}}, O = {{1.00}} → empirical formula **CH₂O**.",
            "Compute empirical molar mass: {{M_{emp} = 12.01 + 2(1.01) + 16.00 = 30.03}} g mol⁻¹.",
            "Find integer multiplier: {{k = 180.18/30.03 = 6}} → molecular formula **C₆H₁₂O₆** (glucose).",
          ],
          answer: "Empirical: CH₂O; Molecular: C₆H₁₂O₆",
        },
        {
          title: "Finding Molar Mass with the Ideal Gas Equation",
          problem:
            "A 0.880 g sample of an unknown gas occupies 496 cm³ at 25.0 °C (298.15 K) and 100.0 kPa ({{R = 8.31}} J K⁻¹ mol⁻¹). Calculate the molar mass of the gas to 3 significant figures.",
          steps: [
            "Convert to consistent SI units (or kPa + dm³): {{p = 100.0}} kPa, {{V = 496/1000 = 0.496}} dm³, {{T = 298.15}} K.",
            "Calculate moles: {{n = (pV)/(RT) = (100.0 * 0.496)/(8.31 * 298.15) = 49.6/2477.63 = 0.02002}} mol.",
            "Calculate molar mass: {{M = m/n = 0.880/0.02002 = 43.96 ≈ 44.0}} g mol⁻¹ (consistent with CO₂ or C₃H₈).",
          ],
          answer: "44.0 g mol⁻¹",
          yourTurn: {
            question:
              "Calculate the volume in dm³ (to 3 significant figures) occupied by 0.250 mol of an ideal gas at 300 K and 125 kPa (use R = 8.31 J K⁻¹ mol⁻¹).",
            answer: { type: "number", value: 4.99, tolerance: 0.03, display: "4.99 dm³" },
            solution:
              "Using {{p}} in kPa and {{V}} in dm³: {{V = (nRT)/p = (0.250 * 8.31 * 300)/125 = 623.25/125 = 4.986 ≈ 4.99}} dm³.",
          },
        },
      ],
      keyPoints: [
        "Always check unit pairs in {{pV = nRT}}: **(Pa, m³, K)** OR **(kPa, dm³, K)** — never mix kPa with cm³ or °C!",
        "IB FA2025 STP is **273 K and 100 kPa**, giving molar volume **{{V_m = 22.7}} dm³ mol⁻¹**.",
        "Empirical formula = simplest ratio; molecular formula = integer multiple {{k = M/M_{emp}}}.",
        "Dilution conserves solute moles: {{c_1 V_1 = c_2 V_2}} (remember {{V_2}} is the **final total volume**, not the volume of water added!).",
        "Real gases deviate most at **high pressure** (finite particle volume) and **low temperature** (intermolecular attractions).",
      ],
      whyItWorks:
        "Why does the kPa + dm³ shortcut work seamlessly with {{R = 8.31}} J K⁻¹ mol⁻¹? Because {{1 J = 1 Pa * m^3}}. Multiplying pressure by 1000 (Pa → kPa) and dividing volume by 1000 (m³ → dm³) cancels out identically: {{1 kPa * 1 dm^3 = 10^3 Pa * 10^(-3) m^3 = 1 J}}!",
      strategies: [
        "Write out a tiny unit-check box before substituting into {{pV = nRT}}: p (kPa) | V (dm³) | T (K) | R (8.31). Nine out of ten gas-law errors are unit slips!",
        "In combustion analysis, never forget to test whether **oxygen** is present by subtracting {{m_C + m_H}} from the total sample mass.",
        "When asked 'what volume of water must be added to dilute 25.0 cm³ of 2.00 mol dm⁻³ HCl to 0.500 mol dm⁻³?', find {{V_2 = 100.0}} cm³ and then subtract {{V_1}}: water added = {{100.0 - 25.0 = 75.0}} cm³!",
      ],
      thinkDeeper:
        "In a flask containing 1.0 mol of H₂ and 1.0 mol of N₂ at the same temperature, which molecules move faster on average — and which have higher average kinetic energy? Both have the **exact same average kinetic energy** because {{T}} is identical! Since {{E_k = (1/2)mv^2}} and N₂ is 14× heavier than H₂, H₂ molecules zip around {{sqrt(14) ≈ 3.7}} times faster!",
    },
  ],

  // ===========================================================================
  // LEARN SMART PANEL
  // ===========================================================================
  learn: {
    flashcards: [
      {
        front: "Distinguish between a homogeneous mixture and a heterogeneous mixture, giving one example of each.",
        back: "A homogeneous mixture has uniform composition and a single phase throughout (e.g. NaCl(aq) or air). A heterogeneous mixture has non-uniform composition with distinct phase boundaries (e.g. sand in water or oil and water).",
        level: "SL",
      },
      {
        front: "Why does temperature remain constant during melting even though heat is continuously supplied?",
        back: "Added thermal energy increases the potential energy of the particles as intermolecular attractions are overcome; average kinetic energy (and therefore temperature) remains constant until the phase change finishes.",
        level: "SL",
      },
      {
        front: "Define the term isotopes and compare their chemical and physical properties.",
        back: "Isotopes are atoms of the same element (same number of protons, Z) with different numbers of neutrons (different mass number, A). They have identical chemical properties (same electron configuration) but different physical properties (mass, density, diffusion rate).",
        level: "SL",
      },
      {
        front: "Define relative atomic mass (A_r).",
        back: "The weighted average mass of the naturally occurring isotopes of an element relative to 1/12 of the mass of an atom of carbon-12 (¹²C). It has no units.",
        level: "SL",
      },
      {
        front: "How is a line emission spectrum produced, and what does it prove about atomic structure?",
        back: "Excited electrons fall from higher to lower energy levels, emitting photons of discrete energy ΔE = hf = hc/λ. Because only specific wavelengths appear, electron energy levels must be quantized.",
        level: "SL",
      },
      {
        front: "Match the Lyman, Balmer and Paschen series of hydrogen to their destination shell and EM region.",
        back: "Lyman: drops to n = 1 (ultraviolet). Balmer: drops to n = 2 (visible). Paschen: drops to n = 3 (infrared). All converge at higher frequency / shorter wavelength.",
        level: "SL",
      },
      {
        front: "State the Aufbau principle, Pauli exclusion principle and Hund's rule.",
        back: "Aufbau: fill lowest-energy sublevels first (4s before 3d). Pauli: max 2 electrons per orbital with opposite spins (↑↓). Hund: occupy degenerate orbitals singly with parallel spins before pairing.",
        level: "SL",
      },
      {
        front: "Write the condensed electron configurations of Cr (Z = 24), Cu (Z = 29) and Fe²⁺ (Z = 26).",
        back: "Cr: [Ar] 3d⁵ 4s¹; Cu: [Ar] 3d¹⁰ 4s¹; Fe²⁺: [Ar] 3d⁶ (always remove 4s electrons before 3d when forming transition-metal cations!).",
        level: "SL",
      },
      {
        front: "How do you calculate the first ionization energy (in kJ mol⁻¹) from the Lyman convergence limit frequency f? [HL]",
        back: "Compute single-atom ionization energy E = hf (in J), multiply by N_A (6.02 × 10²³ mol⁻¹) to get J mol⁻¹, and divide by 1000 to convert to kJ mol⁻¹.",
        level: "HL",
      },
      {
        front: "Explain why the first ionization energy of boron (or aluminium) is lower than beryllium (or magnesium). [HL]",
        back: "Boron's outermost electron is in a higher-energy 2p sublevel (3p for Al), which is slightly further from the nucleus and partially shielded by the filled 2s² (3s²) sublevel, requiring less energy to remove.",
        level: "HL",
      },
      {
        front: "Explain why the first ionization energy of oxygen (or sulfur) is lower than nitrogen (or phosphorus). [HL]",
        back: "In oxygen (2p⁴) / sulfur (3p⁴), two electrons are paired in the same p orbital. Extra electron–electron repulsion between the paired electrons makes removing one easier than removing an unpaired electron from half-filled 2p³ / 3p³.",
        level: "HL",
      },
      {
        front: "How do you deduce an element's group number from a successive ionization energy table or log₁₀(IE) graph? [HL]",
        back: "Locate the first very large jump in successive IE (removal from a closer inner main energy level). The number of electrons removed BEFORE that jump equals the number of valence electrons (1→Gp 1, 2→Gp 2, 3→Gp 13, …, 7→Gp 17).",
        level: "HL",
      },
      {
        front: "State IB FA2025 STP conditions and the molar volume of an ideal gas at STP.",
        back: "STP = 273 K (0 °C) and 100 kPa; molar volume V_m = 22.7 dm³ mol⁻¹.",
        level: "SL",
      },
      {
        front: "Distinguish between empirical formula and molecular formula.",
        back: "Empirical formula shows the simplest whole-number ratio of atoms of each element in a compound; molecular formula shows the actual number of atoms of each element in one molecule (an integer multiple of the empirical formula).",
        level: "SL",
      },
      {
        front: "State the two main assumptions of the ideal gas model that break down for real gases.",
        back: "(1) Gas particles occupy negligible volume compared with the container volume; (2) there are negligible intermolecular forces between gas particles.",
        level: "SL",
      },
      {
        front: "Under what conditions do real gases deviate MOST from ideal behaviour, and how does pV/nRT change?",
        back: "High pressure (finite particle volume makes pV/nRT > 1) and low temperature (intermolecular attractions reduce wall collision pressure, making pV/nRT < 1). Polar/large molecules like NH₃ and CO₂ deviate much more than He or H₂.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Nuclear notation ᴬ_Z X^q: protons = Z, neutrons = A − Z, electrons = Z − q.",
      "Isotopes have identical chemical properties (same electron configuration) and different physical properties (mass, density, diffusion rate).",
      "Hydrogen spectrum: Lyman (to n = 1, UV), Balmer (to n = 2, visible), Paschen (to n = 3, IR); spectral lines converge at high frequency / short wavelength.",
      "Neutral configuration exceptions: Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹. Transition-metal cations ALWAYS lose 4s electrons before 3d electrons.",
      "[HL] First ionization energy equation MUST include gaseous state symbols: X(g) → X⁺(g) + e⁻.",
      "[HL] Period 2/3 IE₁ dips: Group 2 → 13 (higher-energy p sublevel + s² shielding) and Group 15 → 16 (electron–electron repulsion of paired electrons in one p orbital).",
      "[HL] Convergence limit of the Lyman series gives IE₁ = (hf × N_A)/1000 = (hc × N_A)/(1000λ) in kJ mol⁻¹.",
      "IB STP = 273 K and 100 kPa, where V_m = 22.7 dm³ mol⁻¹ (NOT 22.4 dm³ mol⁻¹!).",
      "Ideal gas equation pV = nRT (R = 8.31 J K⁻¹ mol⁻¹): use (Pa, m³, K) OR (kPa, dm³, K).",
      "Real gases approach ideal behaviour at LOW pressure and HIGH temperature, and deviate most at HIGH pressure and LOW temperature.",
    ],
    misconceptions: [
      {
        wrong: "When transition-metal atoms form ions (e.g. Fe²⁺), electrons are removed from 3d first because 3d was filled last.",
        right: "Once 3d orbitals contain electrons, 4s sits slightly higher in energy than 3d — so 4s electrons are ALWAYS removed before 3d electrons (Fe²⁺ = [Ar] 3d⁶, NOT [Ar] 3d⁴ 4s²).",
        level: "SL",
      },
      {
        wrong: "Spectral lines in the hydrogen emission spectrum converge at long wavelength (the red end).",
        right: "Lines converge at HIGH frequency / SHORT wavelength (high energy), because higher main shells (n = 4, 5, 6, …) get closer together in energy.",
        level: "SL",
      },
      {
        wrong: "The molar volume of an ideal gas at IB STP is 22.4 dm³ mol⁻¹.",
        right: "Since IUPAC redefined standard pressure to 100 kPa (at 273 K), the IB Data Booklet molar volume at STP is 22.7 dm³ mol⁻¹ (22.4 dm³ mol⁻¹ belongs to the obsolete 101.3 kPa definition).",
        level: "SL",
      },
      {
        wrong: "Oxygen has a lower first ionization energy than nitrogen simply because nitrogen has a 'magic half-filled shell stability'.",
        right: "IB mark schemes require the physical cause: oxygen (2p⁴) has two electrons paired in the same 2p orbital, creating extra electron–electron repulsion that lowers the energy required to remove one electron.",
        level: "HL",
      },
      {
        wrong: "In pV = nRT, you can plug pressure in kPa and volume in cm³ directly, or temperature in °C.",
        right: "Temperature MUST be in kelvin (K = °C + 273.15). With R = 8.31 J K⁻¹ mol⁻¹, pair Pa with m³, OR pair kPa with dm³ (1 dm³ = 1000 cm³).",
        level: "SL",
      },
      {
        wrong: "An emission line is created when an electron absorbs energy and jumps UP to a higher shell.",
        right: "Jumping UP produces an ABSORPTION line (dark line on continuous background). EMISSION lines are produced when an excited electron FALLS down to a lower energy level and releases a photon.",
        level: "SL",
      },
      {
        wrong: "In dilution calculations c₁V₁ = c₂V₂, V₂ is the volume of distilled water you add.",
        right: "V₂ is the FINAL TOTAL volume of the diluted solution. The volume of water to add is V_water = V₂ − V₁.",
        level: "SL",
      },
      {
        wrong: "A gas with molar mass 44 g mol⁻¹ (CO₂) has a higher average kinetic energy at 300 K than H₂ (2 g mol⁻¹).",
        right: "Average kinetic energy depends ONLY on absolute temperature (T in K). Both gases have identical average kinetic energy at 300 K; H₂ simply moves faster to compensate for its tiny mass.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Omitting the gaseous state symbol (g) in ionization energy equations — X(s) → X⁺(g) + e⁻ loses the mark immediately!",
      "Forgetting to convert cm³ to dm³ (÷ 1000) in c = n/V or V/22.7 calculations, making the answer off by a factor of 1000.",
      "Converting temperature to kelvin by adding 273 to a temperature *difference* ΔT (never add 273 to ΔT — only to individual temperatures!).",
      "Forgetting to multiply by N_A or divide by 1000 when turning single-photon energy E = hf (J) into molar ionization energy (kJ mol⁻¹).",
      "Forgetting to convert wavelength from nm to m (× 10⁻⁹) before using E = hc/λ.",
      "Writing 'Group 3' instead of 'Group 13' when an element has 3 valence electrons in a main-group successive IE table.",
      "Rounding intermediate mole values too aggressively in empirical formula tables (e.g. rounding 1.33 to 1 instead of multiplying all ratios by 3!).",
      "Forgetting to divide by the sum of relative abundances when mass-spectrum peak heights do not sum to 100 (e.g. base peak set to 100).",
    ],
    mnemonics: [
      {
        topic: "Hydrogen Spectral Series",
        device: "Lyman = 1 (UV), Balmer = 2 (Visible), Paschen = 3 (IR) — 'L-B-P = 1-2-3 = U-V-I'",
        explanation:
          "Matches destination shell (n = 1, 2, 3) in order of decreasing energy: Ultraviolet → Visible → Infrared.",
        level: "SL",
      },
      {
        topic: "Transition-Metal Ionization Rule",
        device: "'First In, First Out' for 4s (FIFO-4s)",
        explanation:
          "The 4s sublevel fills BEFORE 3d (first in) and empties BEFORE 3d when forming transition-metal cations (first out)!",
        level: "SL",
      },
      {
        topic: "Empirical Formula Four-Step Rhythm",
        device: "'Percent to Mass → Mass to Mole → Divide by Small → Multiply 'til Whole'",
        explanation:
          "Prevents skipping the division by A_r or forgetting to scale 1 : 1.5 up to 2 : 3.",
        level: "SL",
      },
      {
        topic: "Ideal Gas Conditions",
        device: "'PLIGHT' — Real gases behave ideally at Pressure Low, Ideal Gas, High Temperature",
        explanation:
          "Low pressure keeps particle volume negligible; high temperature keeps kinetic energy high enough to overcome intermolecular attractions.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Radiocarbon & Forensic Isotope Mass Spectrometry",
        detail:
          "Food-authenticity labs and anti-doping agencies use high-resolution mass spectrometry to measure tiny shifts in ¹³C/¹²C and ²H/¹H isotope ratios — distinguishing synthetic testosterone from natural hormones and verifying single-origin honey or coffee.",
        emoji: "🔬",
      },
      {
        title: "Reading the Chemistry of Distant Stars",
        detail:
          "Astronomers never need to scoop a sample of a star to know what it is made of: every element absorbs and emits a unique barcode of spectral lines. Helium was literally discovered in the Sun's spectrum in 1868 — 27 years before it was isolated on Earth!",
        emoji: "✨",
      },
      {
        title: "Airbag Stoichiometry & Ideal Gas Inflation",
        detail:
          "Automotive airbags rely on rapid decomposition of sodium azide (2NaN₃ → 2Na + 3N₂) engineered via pV = nRT so a precisely weighed ~130 g pellet generates ~60–70 dm³ of N₂ gas in under 40 milliseconds.",
        emoji: "🚗",
      },
      {
        title: "Deep-Sea Scuba Diving & Real Gas Mixtures",
        detail:
          "At 100 m depth (~1100 kPa), compressed air deviates noticeably from ideal behaviour and nitrogen causes narcosis. Technical divers switch to 'Trimix' containing tiny, non-polar helium atoms — which behave far closer to an ideal gas even at extreme pressures.",
        emoji: "🤿",
      },
      {
        title: "Quantum LEDs & Neon Street Signs",
        detail:
          "High-voltage discharge tubes excite neon, argon or mercury vapour electrons to higher shells; their crisp emission transitions give neon signs their signature red-orange glow, while modern white LEDs combine narrow blue photon emission with phosphor down-conversion.",
        emoji: "💡",
      },
    ],
    videos: [
      {
        title: "IB Chemistry Structure 1.1–1.2: Particulate Nature, Isotopes & Mass Spectrometry",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=MSJChem+IB+Chemistry+Structure+1.1+1.2+isotopes+mass+spectrometry",
      },
      {
        title: "IB Chemistry Structure 1.3: Emission Spectra & Electron Configurations (SL + HL)",
        channel: "Richard Thornley",
        url: "https://www.youtube.com/results?search_query=Richard+Thornley+IB+Chemistry+emission+spectrum+electron+configuration",
      },
      {
        title: "IB Chemistry Structure 1.3 HL: Convergence Limit & Successive Ionization Energies",
        channel: "MSJChem",
        url: "https://www.youtube.com/results?search_query=MSJChem+convergence+limit+ionization+energy+IB+Chemistry+HL",
      },
      {
        title: "IB Chemistry Structure 1.4–1.5: The Mole, Empirical Formula & Ideal Gases",
        channel: "Organic Chemistry Tutor",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+Structure+1.4+1.5+mole+ideal+gas+equation+real+gases",
      },
    ],
    formulas: [
      {
        name: "Kelvin–Celsius conversion",
        formula: "{{T(K) = t(°C) + 273.15}}",
        note: "Use +273 when data are given to the nearest integer °C; ΔT is identical in K and °C.",
        level: "SL",
      },
      {
        name: "Relative atomic mass",
        formula: "{{A_r = (m_1 a_1 + m_2 a_2 + ...)/(a_1 + a_2 + ...)}}",
        note: "Weighted average of isotope masses relative to 1/12 of ¹²C; dimensionless.",
        level: "SL",
      },
      {
        name: "Wave equation (EM radiation)",
        formula: "{{c = fλ}}",
        note: "c = 3.00 × 10⁸ m s⁻¹; convert λ from nm to m (× 10⁻⁹).",
        level: "SL",
      },
      {
        name: "Maximum electrons per main shell",
        formula: "{{N_{max} = 2n^2}}",
        note: "n = 1 → 2; n = 2 → 8; n = 3 → 18; n = 4 → 32.",
        level: "SL",
      },
      {
        name: "Photon energy (Planck relation)",
        formula: "{{E = hf = (hc)/λ}}",
        note: "h = 6.63 × 10⁻³⁴ J s; gives energy of ONE photon in joules.",
        level: "HL",
      },
      {
        name: "First ionization energy from convergence limit",
        formula: "{{IE_1 = (hf_{limit} N_A)/1000 = (hc N_A)/(1000 λ_{limit})}}",
        note: "In kJ mol⁻¹ using Lyman series convergence limit; N_A = 6.02 × 10²³ mol⁻¹.",
        level: "HL",
      },
      {
        name: "Moles from mass",
        formula: "{{n = m/M}}",
        note: "m in g, molar mass M in g mol⁻¹.",
        level: "SL",
      },
      {
        name: "Number of particles",
        formula: "{{N = n * N_A}}",
        note: "N_A = 6.02 × 10²³ mol⁻¹ (distinguish atoms vs molecules vs ions!).",
        level: "SL",
      },
      {
        name: "Molar concentration & mass concentration",
        formula: "{{c = n/V}}  and  {{ρ = c * M}}",
        note: "V in dm³ (1 dm³ = 1000 cm³); c in mol dm⁻³, ρ in g dm⁻³.",
        level: "SL",
      },
      {
        name: "Dilution equation",
        formula: "{{c_1 V_1 = c_2 V_2}}",
        note: "V₂ is total final volume; water added = V₂ − V₁.",
        level: "SL",
      },
      {
        name: "Molar gas volume at IB STP",
        formula: "{{n = V/22.7}}",
        note: "V in dm³ at STP (273 K, 100 kPa); V_m = 22.7 dm³ mol⁻¹.",
        level: "SL",
      },
      {
        name: "Ideal gas equation & combined gas law",
        formula: "{{pV = nRT}}  and  {{(p_1 V_1)/T_1 = (p_2 V_2)/T_2}}",
        note: "R = 8.31 J K⁻¹ mol⁻¹; pair (Pa, m³, K) OR (kPa, dm³, K).",
        level: "SL",
      },
    ],
  },
};
