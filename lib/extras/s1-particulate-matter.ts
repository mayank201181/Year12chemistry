import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can astronomers tell what a star 10 000 light-years away is made of without ever touching it, how do anti-doping labs catch synthetic hormones using a difference of a single neutron, and why does a 2 g balloon of hydrogen hold the exact same number of molecules as a 44 g balloon of carbon dioxide? Welcome to Structure 1 — where quantized electron leaps, mass spectrometers and Avogadro's mole connect invisible atoms to every measurement in the chemistry lab.",
  didYouKnow: [
    "If you counted one atom every second since the Big Bang (13.8 billion years ago), you would have reached only {{4.35 * 10^{17}}} atoms — less than **one millionth** of a single mole ({{6.02 * 10^{23}}})! One mole of standard marbles would bury the entire surface of Earth more than 4 km deep.",
    "Helium was discovered in the Sun's emission spectrum during an 1868 solar eclipse (a mysterious bright yellow line at 587.6 nm) — **27 years before** chemists ever isolated helium gas on Earth! That is why it is named after *Helios*, the Greek word for the Sun.",
    "Isotopes have virtually identical chemical properties, yet heavy water (D₂O, made with deuterium ²H instead of ¹H) is about 11% denser than normal water — so an ice cube frozen from D₂O actually **sinks** straight to the bottom of a glass of ordinary tap water!",
    "Mass spectrometers used in Olympic anti-doping laboratories detect tiny shifts in the ¹³C/¹²C isotope ratio of urinary steroids: natural human hormones reflect a mixed diet, whereas plant-derived synthetic testosterone carries a slightly different ¹³C signature.",
    "One breath of air (~0.5 dm³ at 298 K and 100 kPa) contains roughly {{1.2 * 10^{22}}} gas molecules — yet more than 99.9% of that breath is empty space between furiously colliding nitrogen and oxygen molecules!",
  ],
  activities: [
    {
      title: "Paper Chromatography & R_f Lab with Washable Pens",
      emoji: "🎨",
      materials: [
        "Coffee filter strip or white kitchen paper towel (cut to 3 cm × 12 cm)",
        "A black or brown washable felt-tip marker and a graphite pencil",
        "A tall clear glass with 1 cm of tap water and a ruler",
      ],
      steps: [
        "Draw a light baseline in **pencil** (graphite is insoluble in water!) about 2 cm from the bottom edge of the paper strip.",
        "Place a tiny, concentrated dot of black marker ink directly on the pencil baseline and let it dry for 10 seconds.",
        "Suspend the strip vertically in the glass so the bottom tip dips into the water while the ink spot stays **above** the waterline.",
        "Watch the water (mobile phase) climb by capillary action and split the 'single' black ink into separate cyan, magenta and yellow bands. Remove before the solvent front hits the top, mark the solvent front in pencil, and measure distances.",
      ],
      maths:
        "Calculate the retention factor for each separated dye: {{R_f = (d_{dye})/(d_{solvent})}}, where both distances are measured from the pencil baseline. Dyes with higher {{R_f}} are more soluble in the polar water mobile phase and bind less strongly to the cellulose stationary phase.",
    },
    {
      title: "Count the Water Molecules in a Single Sip",
      emoji: "💧",
      materials: [
        "A kitchen digital balance (accurate to 1 g or 0.1 g)",
        "A drinking cup half-filled with tap water",
        "A calculator",
      ],
      steps: [
        "Weigh the cup of water on the digital balance and record the initial mass {{m_1}} in grams.",
        "Take one normal sip of water, place the cup back on the balance, and record the new mass {{m_2}}.",
        "Subtract to find the exact mass of water you just drank: {{m = m_1 - m_2}}.",
        "Divide by the molar mass of water ({{18.02}} g mol⁻¹) to find moles {{n}}, then multiply by Avogadro's constant ({{6.02 * 10^{23}}})!",
      ],
      maths:
        "For a typical 18.0 g sip: {{n = 18.0/18.02 ≈ 1.00}} mol, which equals {{6.02 * 10^{23}}} H₂O molecules — containing {{1.20 * 10^{24}}} hydrogen atoms and {{6.02 * 10^{23}}} oxygen atoms in a single swallow!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Aufbau Sublevel Filling Order vs Transition-Metal Ionization Order",
      caption:
        "Follow diagonal arrows to fill neutral atoms up to Kr (Z = 36), memorize the Cr (3d⁵ 4s¹) and Cu (3d¹⁰ 4s¹) exceptions, and always remove 4s before 3d when forming d-block cations.",
      svg: `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagonal Aufbau sublevel filling order chart for shells n=1 to 4 alongside a summary box contrasting 4s-first filling and 4s-first ionization">
  <rect x="0" y="0" width="520" height="220" fill="#ffffff"/>
  <text x="145" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1e293b">Diagonal Aufbau Filling Chart</text>
  <!-- Grid of sublevels -->
  <!-- Row n=1 -->
  <circle cx="52" cy="48" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
  <text x="52" y="52" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">1s</text>
  <!-- Row n=2 -->
  <circle cx="52" cy="94" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
  <text x="52" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">2s</text>
  <circle cx="110" cy="94" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="110" y="98" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">2p</text>
  <!-- Row n=3 -->
  <circle cx="52" cy="140" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>
  <text x="52" y="144" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">3s</text>
  <circle cx="110" cy="140" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="110" y="144" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">3p</text>
  <circle cx="168" cy="140" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
  <text x="168" y="144" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309">3d</text>
  <!-- Row n=4 -->
  <circle cx="52" cy="186" r="15" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="52" y="190" font-size="11" font-weight="700" text-anchor="middle" fill="#b91c1c">4s</text>
  <circle cx="110" cy="186" r="15" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/>
  <text x="110" y="190" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">4p</text>
  <circle cx="168" cy="186" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
  <text x="168" y="190" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309">4d</text>
  <circle cx="226" cy="186" r="15" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.6"/>
  <text x="226" y="190" font-size="11" font-weight="700" text-anchor="middle" fill="#6d28d9">4f</text>

  <!-- Diagonal filling lines -->
  <line x1="72" y1="36" x2="32" y2="62" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 2"/>
  <line x1="72" y1="80" x2="32" y2="108" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 2"/>
  <line x1="130" y1="78" x2="32" y2="154" stroke="#64748b" stroke-width="1.5"/>
  <line x1="130" y1="124" x2="32" y2="200" stroke="#dc2626" stroke-width="2"/>
  <line x1="188" y1="124" x2="90" y2="200" stroke="#d97706" stroke-width="1.8"/>

  <!-- Right summary panel -->
  <rect x="272" y="24" width="234" height="176" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4"/>
  <text x="389" y="46" font-size="11.5" font-weight="700" text-anchor="middle" fill="#1e293b">IB Exam Survival Rules (Z = 1–36)</text>
  <text x="286" y="70" font-size="10.5" font-weight="700" fill="#2563eb">1. Fill order (Aufbau):</text>
  <text x="286" y="86" font-size="10" fill="#334155">1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p</text>
  <text x="286" y="110" font-size="10.5" font-weight="700" fill="#d97706">2. Neutral exceptions:</text>
  <text x="286" y="126" font-size="10" fill="#334155">Cr (24): [Ar] 3d⁵ 4s¹   •   Cu (29): [Ar] 3d¹⁰ 4s¹</text>
  <text x="286" y="150" font-size="10.5" font-weight="700" fill="#dc2626">3. Cation ionization (FIFO-4s):</text>
  <text x="286" y="166" font-size="10" fill="#334155">Remove 4s electrons BEFORE 3d!</text>
  <text x="286" y="182" font-size="9.5" fill="#475569">e.g. Fe ([Ar] 3d⁶ 4s²) → Fe²⁺ ([Ar] 3d⁶)</text>
</svg>`,
    },
  ],
  history: {
    title: "From Dalton's Indivisible Spheres to Bohr's Quantum Leaps & Aston's Isotopes",
    story:
      "In 1808, **John Dalton** revived ancient atomic theory by arguing that every element consists of identical, indivisible billiard-ball atoms of fixed mass — and just three years later **Amedeo Avogadro** proposed that equal volumes of gases at the same temperature and pressure hold equal numbers of molecules (an idea ignored for nearly 50 years until Cannizzaro championed it in 1860!). Around the turn of the twentieth century, three experimental breakthroughs shattered Dalton's solid sphere forever: **J. J. Thomson** discovered the electron (1897), **Ernest Rutherford's** gold-foil experiment revealed a tiny dense nucleus surrounded by mostly empty space (1911), and **Niels Bohr** explained hydrogen's razor-sharp Balmer lines by quantizing electron orbits into fixed energy levels (1913). Finally, in 1919, **Francis Aston** built the first precision mass spectrograph and watched pure neon gas split into TWO distinct streaks at mass 20 and mass 22 — proving that atoms of the same element can have different masses (**isotopes**) and explaining why chlorine's relative atomic mass is 35.45 instead of a whole number!",
  },
};
