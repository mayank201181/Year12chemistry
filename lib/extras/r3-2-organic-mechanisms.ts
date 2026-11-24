import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Every pharmaceutical molecule on a pharmacy shelf — from ibuprofen to paracetamol — is built by choreographing tiny pairs of electrons. Master just two arrows (fish-hook half-arrows for single electrons, full curly arrows for electron pairs) and you unlock the exact language chemists use to predict, invert, and synthesize molecules from scratch!",
  didYouKnow: [
    "A single chlorine free radical (Cl•) released from a CFC molecule in the stratosphere can catalytically destroy up to 100,000 ozone (O₃) molecules before finally hitting a termination step!",
    "The Walden inversion in an SN2 reaction behaves just like an umbrella flipping inside-out in a strong gust of wind — in fact, Sir Christopher Ingold himself popularized the umbrella-flip analogy in the 1930s!",
    "When Vladimir Markovnikov published his famous addition rule in 1869, electrons and carbocations hadn't even been discovered yet (J. J. Thomson discovered the electron 28 years later in 1897)!",
    "In an SN2 transition state, carbon is momentarily surrounded by FIVE groups in a trigonal bipyramid for roughly 10⁻¹³ seconds — about the time it takes light to travel the width of a single bacterium.",
    "Because a planar SN1 carbocation forms a 50:50 racemic mixture, pharmaceutical companies go to extraordinary lengths to steer chiral drug syntheses down SN2 pathways so patients don't receive an inactive or harmful mirror-image enantiomer.",
    "Benzene's 152 kJ mol⁻¹ resonance stabilization energy is so powerful that even a super-electrophile like NO₂⁺ cannot force benzene into an addition reaction — the ring immediately kicks out H⁺ to snap its delocalized cloud right back into place.",
    "Industrial chemists use retrosynthesis software inspired by Nobel laureate E. J. Corey (1990 Chemistry Nobel Prize) to plan 10- to 30-step syntheses backwards from complex medicines to cheap petrochemical building blocks.",
    "Lithium aluminium hydride (LiAlH₄) is so violently reactive toward O−H protons that dropping a spatula tip into water ignites hydrogen gas immediately — which is why IB mark schemes always award a mark for specifying **dry ether**!",
  ],
  activities: [
    {
      title: "The Umbrella-Flip SN2 vs Flat-Pancake SN1 Molecular Model Lab",
      emoji: "☂️",
      materials: [
        "1 black tetrahedral modelling ball (carbon) and 4 differently coloured balls (e.g., white H, red Br, blue CH₃, green C₂H₅)",
        "1 extra yellow ball (incoming OH⁻ nucleophile) and 5 bond sticks",
        "Smartphone camera to photograph before & after mirror images",
      ],
      steps: [
        "Build a chiral tetrahedral model of (R)-2-bromobutane with four distinct colours around carbon.",
        "**SN2 Simulation**: Approach the yellow OH⁻ ball strictly at 180° opposite the red Br ball. Flatten the remaining three bonds into a 120° triangle (5-coordinate transition state), then pop Br off and push the three bonds past flat until they invert into the opposite umbrella!",
        "Compare your 'before' and 'after' photos: confirm they are non-superimposable mirror images (Walden inversion).",
        "**SN1 Simulation**: Pull Br off FIRST and rearrange the remaining three groups into a completely flat 120° trigonal planar triangle (sp² carbocation). Flip a coin to choose top face vs bottom face for OH⁻ attack — repeat 10 times to see a ~50:50 racemic mixture emerge!",
      ],
      maths:
        "SN2 keeps 100% enantiomeric excess (inverted sign of optical rotation α), whereas SN1 approaches {{50/100 = 1/2}} (R) and {{50/100 = 1/2}} (S), giving net optical rotation {{(+alpha) + (-alpha) = 0}}°.",
    },
    {
      title: "Radical Chain Dice: Why Termination Eventually Stops the Reaction",
      emoji: "🎲",
      materials: [
        "1 standard 6-sided die",
        "Pen and tally sheet tracking 'Active Radicals' and 'CH₃Cl Produced'",
      ],
      steps: [
        "Start with **2 active Cl• radicals** (representing 1 UV initiation event: Cl₂ → 2 Cl•).",
        "Roll the die for each active radical: **1–5 = Propagation** (CH₄ + Cl• → •CH₃ + HCl, then •CH₃ + Cl₂ → CH₃Cl + Cl•: add +1 to CH₃Cl produced; active radical count stays unchanged!). **6 = Termination** (two radicals meet: reduce active radicals by 2).",
        "Keep rolling until active radicals drop to 0. Record the **chain length** (total CH₃Cl molecules made per initiation photon).",
        "Repeat 5 times and compute your mean chain length — in real UV chlorination of methane, termination probability is tiny (~1 in 10,000), so one photon triggers thousands of CH₃Cl molecules!",
      ],
      maths:
        "If each radical has termination probability p per step, the expected geometric chain length scales as {{1/p}} (for p = {{10^(-4)}}, chain length ≈ 10,000 molecules per UV photon!).",
    },
    {
      title: "Retrosynthesis Relay: Four-Step Card Challenge",
      emoji: "🃏",
      materials: [
        "Index cards labelled: Alkane, Alkene, Halogenoalkane, 1° Alcohol, 2° Alcohol, Aldehyde, Ketone, Carboxylic Acid, Ester, Benzene, Nitrobenzene, Phenylamine",
        "Stopwatch set to 90 seconds",
      ],
      steps: [
        "Draw one **Start** card and one **Target** card (e.g., Start = *Propene*, Target = *Propanone*; or Start = *Benzene*, Target = *Phenylamine*; or Start = *Propanoic acid*, Target = *Propan-2-ol*).",
        "Work strictly **backwards** from Target using `⇒` arrows to lay out the shortest valid bridge of IB cards.",
        "For every gap between two adjacent cards, speak aloud the **exact reagent**, **temperature/apparatus condition** (reflux vs distillation vs UV vs 50 °C), and **mechanism class**.",
        "Score +2 points per error-free bridge, −1 point if you forget dry ether/H⁺(aq) on LiAlH₄ or NaOH(aq) after Sn/conc. HCl!",
      ],
      maths:
        "If a 3-step synthesis has per-step yields of 80%, 75%, and 90%, the overall percentage yield multiplies sequentially: {{0.80 * 0.75 * 0.90 = 0.54}} = 54% — proving why minimizing steps in retrosynthesis is essential!",
    },
  ],
  bonusDiagrams: [
    {
      title: "SN2 Walden Inversion vs SN1 Planar Carbocation Racemization [HL]",
      svg: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D stereochemical comparison showing SN2 180-degree backside attack causing Walden umbrella inversion versus SN1 planar carbocation attacked equally from top and bottom faces giving a 50:50 racemic mixture">
  <rect x="8" y="8" width="624" height="234" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">3D Stereochemistry: Walden Inversion (SN2) vs Racemization (SN1)</text>

  <!-- Left: SN2 -->
  <rect x="20" y="44" width="292" height="186" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.4"/>
  <text x="166" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SN2: 180° Backside Attack → Inversion</text>
  <!-- Incoming OH -->
  <text x="48" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">HO⁻</text>
  <line x1="68" y1="127" x2="104" y2="127" stroke="var(--brand)" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- Bracketed TS -->
  <text x="112" y="138" font-size="38" font-weight="300" fill="var(--ink-2)">[</text>
  <text x="166" y="132" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">C</text>
  <line x1="166" y1="115" x2="166" y2="85" stroke="var(--ink)" stroke-width="2"/>
  <text x="166" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R¹</text>
  <line x1="158" y1="138" x2="140" y2="164" stroke="var(--ink)" stroke-width="2.2"/>
  <text x="134" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R²</text>
  <line x1="174" y1="138" x2="192" y2="164" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="3 2"/>
  <text x="198" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R³</text>
  <line x1="180" y1="127" x2="214" y2="127" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="220" y="138" font-size="38" font-weight="300" fill="var(--ink-2)">]</text>
  <text x="234" y="108" font-size="14" font-weight="700" fill="var(--bad)">−</text>
  <text x="266" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="var(--bad)">Brδ⁻</text>
  <text x="166" y="202" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">5-coordinate TS · Umbrella flips!</text>
  <text x="166" y="218" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">100% opposite enantiomer (optically active)</text>

  <!-- Right: SN1 -->
  <rect x="328" y="44" width="292" height="186" rx="10" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.4"/>
  <text x="474" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">SN1: Planar R₃C⁺ → 50:50 Racemate</text>
  <!-- Planar ring/triangle -->
  <ellipse cx="474" cy="128" rx="54" ry="18" fill="var(--surface)" stroke="var(--info)" stroke-width="1.6"/>
  <text x="474" y="133" text-anchor="middle" font-size="15" font-weight="700" fill="var(--info)">C⁺</text>
  <text x="412" y="133" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R¹</text>
  <text x="536" y="133" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R²</text>
  <text x="474" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">R³ (120° flat)</text>
  <!-- Top and bottom attack arrows -->
  <text x="474" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">HO⁻ (50% top)</text>
  <line x1="474" y1="88" x2="474" y2="108" stroke="var(--brand)" stroke-width="2.2"/>
  <polygon points="474,112 469,104 479,104" fill="var(--brand)"/>
  <line x1="474" y1="186" x2="474" y2="167" stroke="var(--accent)" stroke-width="2.2"/>
  <polygon points="474,163 469,171 479,171" fill="var(--accent)"/>
  <text x="474" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">HO⁻ (50% bottom)</text>
  <text x="474" y="218" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Equal (R) + (S) → Optically inactive</text>
</svg>`,
      caption:
        "Exam diagram gold: always draw square brackets, dotted partial bonds, and the overall negative charge on the SN2 transition state, and emphasize the flat 120° trigonal planar geometry of the SN1 carbocation.",
    },
    {
      title: "Benzene Nitration Mechanism & Arenium Horseshoe Check [HL]",
      svg: `<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-step mechanism for electrophilic aromatic nitration of benzene showing curly arrow from delocalized ring to NO2 plus, the 5-carbon open horseshoe arenium ion, and C-H bond returning electrons to restore aromaticity">
  <rect x="8" y="8" width="624" height="209" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="320" y="29" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Electrophilic Aromatic Substitution: Nitration of Benzene (50 °C)</text>
  <text x="320" y="46" text-anchor="middle" font-size="11" font-weight="600" fill="var(--info)">Electrophile generation: HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O   (HNO₃ acts as a base!)</text>

  <!-- Step 1: Benzene ring + NO2+ -->
  <polygon points="88,78 118,95 118,130 88,147 58,130 58,95" fill="none" stroke="var(--ink)" stroke-width="2.2"/>
  <circle cx="88" cy="112.5" r="19" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <!-- Curly arrow from ring to NO2+ -->
  <path d="M 105 104 Q 134 74 156 95" fill="none" stroke="var(--brand)" stroke-width="2.2"/>
  <polygon points="159,98 150,96 156,89" fill="var(--brand)"/>
  <text x="178" y="106" text-anchor="middle" font-size="14" font-weight="700" fill="var(--bad)">NO₂⁺</text>
  <text x="115" y="172" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Step 1 (slow, RDS)</text>

  <!-- Arrow 1 -->
  <text x="234" y="118" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink-2)">→</text>

  <!-- Arenium Ion (open horseshoe facing top-right vertex!) -->
  <polygon points="320,78 350,95 350,130 320,147 290,130 290,95" fill="none" stroke="var(--ink)" stroke-width="2.2"/>
  <!-- Open horseshoe spanning 5 carbons, open toward top-right (350,95) -->
  <path d="M 320 93 A 19 19 0 1 0 338 122" fill="none" stroke="var(--accent)" stroke-width="2.4"/>
  <text x="319" y="118" text-anchor="middle" font-size="14" font-weight="800" fill="var(--accent)">+</text>
  <!-- Bonds at sp3 carbon (350,95) -->
  <line x1="350" y1="95" x2="378" y2="80" stroke="var(--ink)" stroke-width="2"/>
  <text x="394" y="82" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--bad)">NO₂</text>
  <line x1="350" y1="95" x2="378" y2="112" stroke="var(--ink)" stroke-width="2"/>
  <text x="389" y="118" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)">H</text>
  <!-- Curly arrow from C-H bond into ring -->
  <path d="M 366 105 Q 355 126 336 116" fill="none" stroke="var(--brand)" stroke-width="2.2"/>
  <polygon points="332,114 341,112 338,120" fill="var(--brand)"/>
  <text x="336" y="172" text-anchor="middle" font-size="10.5" fill="var(--accent)">Arenium ion (5-C horseshoe)</text>

  <!-- Arrow 2 -->
  <text x="438" y="118" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink-2)">→</text>

  <!-- Product: Nitrobenzene + H+ -->
  <polygon points="512,78 542,95 542,130 512,147 482,130 482,95" fill="none" stroke="var(--ink)" stroke-width="2.2"/>
  <circle cx="512" cy="112.5" r="19" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <line x1="542" y1="95" x2="566" y2="82" stroke="var(--ink)" stroke-width="2"/>
  <text x="585" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--bad)">NO₂</text>
  <text x="588" y="124" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">+ H⁺</text>
  <text x="536" y="172" text-anchor="middle" font-size="10.5" fill="var(--brand)">Aromaticity restored!</text>
  <text x="320" y="200" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Catalyst regeneration: HSO₄⁻ + H⁺ → H₂SO₄  ·  Keep T ≈ 50 °C to prevent dinitration</text>
</svg>`,
      caption:
        "Check the three guaranteed IB marks: (1) arrow from ring to N of NO₂⁺, (2) open horseshoe covering 5 carbons with `+` inside facing the C(H)(NO₂) carbon, and (3) arrow from the C−H bond back into the ring.",
    },
  ],
  history: {
    title: "The Rivalry That Invented Curly Arrows & SN1/SN2 (Robinson vs Ingold)",
    story:
      "Before the 1920s, organic chemistry felt like memorizing thousands of disconnected recipes — even Vladimir Markovnikov's famous 1869 addition rule was purely empirical guesswork! Everything changed when two brilliant British chemists, **Sir Robert Robinson** (Oxford) and **Sir Christopher Ingold** (University College London), revolutionized how we visualize reactions. In 1922, Robinson introduced the **curly arrow** to show electron pairs migrating from one atom to another during bond making and breaking. Soon after, Ingold and Edward Hughes ran meticulous kinetic and polarimetry experiments on primary and tertiary halogenoalkanes, coining the exact vocabulary every IB student uses today: **nucleophile**, **electrophile**, **inductive effect (+I)**, **SN1**, and **SN2**! Though Robinson and Ingold engaged in a fierce, decades-long priority feud in chemical journals, their combined framework turned organic chemistry from rote memorization into a predictive, logical science — earning Robinson the 1947 Nobel Prize and making Ingold the founding architect of physical organic chemistry.",
  },
};
