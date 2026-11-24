import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can pure carbon be both the hardest transparent insulator on Earth (diamond) and the slippery black conductor inside your pencil (graphite)? How does a Tokay gecko sprint upside down across a wet Singapore ceiling using the weakest intermolecular force in chemistry, while a 2 mm layer of Kevlar stops a bullet using the same amide hydrogen bonds found in silk? Welcome to Structure 2 — where electron domains, electronegativity continua, and 3D architecture turn atomic rules into real-world materials.",
  didYouKnow: [
    "A single Tokay gecko foot carries roughly 500,000 microscopic keratin hairs (setae), each splitting into hundreds of nanoscale spatulae. That astronomical surface area multiplies tiny London dispersion forces until one gecko could theoretically support over 100 kg on clean glass!",
    "Liquid water is denser than solid ice because tetrahedral hydrogen bonding (up to 4 H-bonds per H₂O) locks ice into an open hexagonal cage ~9% larger in volume. If ice sank like almost every other solid, Earth's oceans and lakes would freeze from the bottom up and complex aquatic life could never have evolved.",
    "Graphene — a single one-atom-thick sheet of sp²-hybridized carbon peeled off graphite with ordinary Scotch tape in 2004 — is ~200 times stronger than structural steel by weight and conducts electricity and heat faster than copper, earning Andre Geim and Konstantin Novoselov the 2010 Nobel Prize in Physics.",
    "Although stratospheric ozone (O₃) would form a layer barely 3 mm thick if compressed to sea-level pressure, its delocalized 1.5-order O–O bonds absorb over 97% of DNA-damaging UV-B radiation (240–330 nm) — while a single CFC-derived Cl• radical can catalytically destroy up to 100,000 O₃ molecules before termination.",
    "Pure 24-karat gold is so malleable that 1 gram can be beaten into a translucent sheet 1 m² wide — which is why jewellers alloy gold with copper and silver (18k = 75% Au) so differently sized substitutional atoms jam the sliding lattice planes and make rings scratch-resistant.",
  ],
  activities: [
    {
      title: "Bend a Stream of Water: Molecular Polarity in Action",
      emoji: "💧",
      materials: [
        "A kitchen tap adjusted to a thin, smooth, unbroken trickle of water",
        "A plastic comb, balloon, or PVC ruler",
        "A dry wool jumper, cotton towel, or dry hair to generate static charge",
      ],
      steps: [
        "Turn the tap on very gently until a steady, narrow laminar stream (about 2 mm wide) flows smoothly downwards.",
        "Rub the plastic comb briskly through dry hair or against a wool jumper for 10 seconds to build up a negative static charge.",
        "Slowly bring the charged comb within 1–2 cm of the side of the falling water stream (without touching the water) and watch the stream curve sharply toward the comb!",
        "Think like an IB chemist: what would happen if you repeated the same test in a fume hood with a thin stream of non-polar hexane (C₆H₁₄)?",
      ],
      maths:
        "Because H₂O has a bent 104.5° geometry (2 BP, 2 LP) and polar O−H bonds ({{Δχ = 3.4 - 2.2 = 1.2}}), each molecule carries a permanent dipole ({{δ^+}} on H, {{δ^-}} on O). The negatively charged comb rotates water dipoles so their {{δ^+}} hydrogens face the comb, creating a net attractive electrostatic force! Non-polar hexane ({{Δχ_\"C-H\" = 0.4}}, symmetric) passes straight down undeflected.",
    },
    {
      title: "Paper Chromatography: Polarity & R_f Detective",
      emoji: "🎨",
      materials: [
        "Coffee filter paper or kitchen paper towel cut into a 4 cm × 12 cm strip",
        "Water-soluble black or brown felt-tip marker + a graphite pencil",
        "A clear tall glass with 1 cm depth of water (mobile phase) and a ruler",
      ],
      steps: [
        "Draw a light horizontal baseline **in pencil** (why not pen? Graphite is an insoluble giant covalent network!) 2 cm above the bottom edge of the paper strip.",
        "Place a tiny concentrated dot of black marker ink right on the pencil baseline and let it dry for 30 seconds.",
        "Suspend the strip vertically in the glass so ONLY the bottom 0.5 cm dips into the water — keeping the ink dot strictly above the water level!",
        "When the water front nears the top, remove the strip, mark the solvent front in pencil immediately, and measure {{d_\"spot\"}} (to the centre of each separated colour) and {{d_\"solvent\"}}.",
      ],
      maths:
        "Calculate {{R_f = d_\"spot\" / d_\"solvent\"}} for each separated pigment (always between 0 and 1). Dyes that form stronger hydrogen bonds with the polar water mobile phase travel higher (larger {{R_f}}), while dyes that adsorb more strongly to the cellulose −OH stationary phase lag behind (smaller {{R_f}}).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why Ice Floats: Open Hexagonal Hydrogen-Bond Cage vs Liquid Water",
      svg:
        '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of open hexagonal hydrogen bonded ice lattice and more closely packed liquid water molecules">' +
        '<rect x="6" y="6" width="286" height="208" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>' +
        '<rect x="308" y="6" width="286" height="208" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="149" y="26" font-size="12.5" font-weight="800" text-anchor="middle" fill="#1d4ed8">Solid Ice (0.917 g cm⁻³) · Open Ring</text>' +
        '<text x="451" y="26" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f766e">Liquid Water (1.00 g cm⁻³) · Closer Packing</text>' +
        '<polygon points="149,54 205,84 205,144 149,174 93,144 93,84" fill="#ffffff" fill-opacity="0.7" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<text x="149" y="118" font-size="10.5" font-weight="800" text-anchor="middle" fill="#2563eb">Open cavity</text>' +
        '<circle cx="149" cy="54" r="10" fill="#ef4444"/><text x="149" y="58" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="205" cy="84" r="10" fill="#ef4444"/><text x="205" y="88" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="205" cy="144" r="10" fill="#ef4444"/><text x="205" y="148" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="149" cy="174" r="10" fill="#ef4444"/><text x="149" y="178" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="93" cy="144" r="10" fill="#ef4444"/><text x="93" y="148" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="93" cy="84" r="10" fill="#ef4444"/><text x="93" y="88" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<text x="149" y="201" font-size="10" font-weight="700" text-anchor="middle" fill="#1e3a8a">4 rigid H-bonds per H₂O → lower density</text>' +
        '<g transform="translate(330,45)">' +
        '<line x1="48" y1="36" x2="96" y2="54" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="96" y1="54" x2="148" y2="38" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="96" y1="54" x2="112" y2="96" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="112" y1="96" x2="62" y2="110" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="112" y1="96" x2="174" y2="108" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="148" y1="38" x2="196" y2="68" stroke="#0f766e" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<circle cx="48" cy="36" r="10" fill="#ef4444"/><text x="48" y="40" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="96" cy="54" r="10" fill="#ef4444"/><text x="96" y="58" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="148" cy="38" r="10" fill="#ef4444"/><text x="148" y="42" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="112" cy="96" r="10" fill="#ef4444"/><text x="112" y="100" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="62" cy="110" r="10" fill="#ef4444"/><text x="62" y="114" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="174" cy="108" r="10" fill="#ef4444"/><text x="174" y="112" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="196" cy="68" r="10" fill="#ef4444"/><text x="196" y="72" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '<circle cx="136" cy="134" r="10" fill="#ef4444"/><text x="136" y="138" font-size="9" font-weight="800" text-anchor="middle" fill="#fff">O</text>' +
        '</g>' +
        '<text x="451" y="201" font-size="10" font-weight="700" text-anchor="middle" fill="#134e4a">Transient H-bonds collapse cavities → higher density</text>' +
        '</svg>',
      caption:
        "Dashed lines show intermolecular hydrogen bonds (O···H−O). Melting collapses the open hexagonal cage so liquid water molecules pack closer together.",
    },
    {
      title: "Four Faces of Carbon: Allotrope Structure, Hybridization & Conductivity",
      svg:
        '<svg viewBox="0 0 600 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison cards of diamond, graphite, graphene, and C60 buckminsterfullerene showing bonding, hybridization, and conductivity">' +
        '<g transform="translate(8,8)">' +
        '<rect x="0" y="0" width="138" height="168" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<text x="69" y="22" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Diamond</text>' +
        '<line x1="69" y1="62" x2="69" y2="38" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="69" y1="62" x2="43" y2="82" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="69" y1="62" x2="95" y2="82" stroke="#334155" stroke-width="2.2"/>' +
        '<line x1="69" y1="62" x2="90" y2="50" stroke="#64748b" stroke-width="1.8" stroke-dasharray="3 2"/>' +
        '<circle cx="69" cy="62" r="7" fill="#1e293b"/><circle cx="69" cy="38" r="5" fill="#475569"/>' +
        '<circle cx="43" cy="82" r="5" fill="#475569"/><circle cx="95" cy="82" r="5" fill="#475569"/><circle cx="90" cy="50" r="5" fill="#94a3b8"/>' +
        '<text x="69" y="106" font-size="10" font-weight="800" text-anchor="middle" fill="#2563eb">3D Network · sp³</text>' +
        '<text x="69" y="122" font-size="9.5" text-anchor="middle" fill="#334155">4 C–C bonds (109.5°)</text>' +
        '<text x="69" y="138" font-size="9.5" text-anchor="middle" fill="#dc2626">Insulator · Ultra-hard</text>' +
        '<text x="69" y="155" font-size="9" text-anchor="middle" fill="#64748b">mp &gt; 3550 °C</text>' +
        '</g>' +
        '<g transform="translate(156,8)">' +
        '<rect x="0" y="0" width="138" height="168" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<text x="69" y="22" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Graphite</text>' +
        '<polygon points="48,40 90,40 104,54 90,68 48,68 34,54" fill="none" stroke="#334155" stroke-width="2"/>' +
        '<line x1="50" y1="73" x2="50" y2="83" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2"/>' +
        '<line x1="88" y1="73" x2="88" y2="83" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2 2"/>' +
        '<polygon points="48,84 90,84 104,92 34,92" fill="none" stroke="#64748b" stroke-width="1.6"/>' +
        '<text x="69" y="108" font-size="10" font-weight="800" text-anchor="middle" fill="#0f766e">2D Layers · sp²</text>' +
        '<text x="69" y="124" font-size="9.5" text-anchor="middle" fill="#334155">3 C–C + 1 deloc. e⁻</text>' +
        '<text x="69" y="140" font-size="9.5" text-anchor="middle" fill="#059669">Conducts along sheets</text>' +
        '<text x="69" y="155" font-size="9" text-anchor="middle" fill="#64748b">Soft (weak LDF gaps)</text>' +
        '</g>' +
        '<g transform="translate(304,8)">' +
        '<rect x="0" y="0" width="138" height="168" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<text x="69" y="22" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Graphene</text>' +
        '<polygon points="40,46 60,46 70,62 60,78 40,78 30,62" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="1.8"/>' +
        '<polygon points="78,46 98,46 108,62 98,78 78,78 68,62" fill="#dbeafe" fill-opacity="0.6" stroke="#2563eb" stroke-width="1.8"/>' +
        '<text x="69" y="106" font-size="10" font-weight="800" text-anchor="middle" fill="#2563eb">Single Monolayer · sp²</text>' +
        '<text x="69" y="122" font-size="9.5" text-anchor="middle" fill="#334155">1 atom thick (120°)</text>' +
        '<text x="69" y="138" font-size="9.5" text-anchor="middle" fill="#059669">Extreme conductor</text>' +
        '<text x="69" y="155" font-size="9" text-anchor="middle" fill="#64748b">Transparent &amp; flexible</text>' +
        '</g>' +
        '<g transform="translate(452,8)">' +
        '<rect x="0" y="0" width="138" height="168" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>' +
        '<text x="69" y="22" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Fullerene (C₆₀)</text>' +
        '<circle cx="69" cy="61" r="24" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>' +
        '<polygon points="69,48 80,56 76,69 62,69 58,56" fill="none" stroke="#6d28d9" stroke-width="1.5"/>' +
        '<line x1="69" y1="48" x2="69" y2="37" stroke="#6d28d9" stroke-width="1.3"/>' +
        '<line x1="80" y1="56" x2="91" y2="51" stroke="#6d28d9" stroke-width="1.3"/>' +
        '<line x1="58" y1="56" x2="47" y2="51" stroke="#6d28d9" stroke-width="1.3"/>' +
        '<text x="69" y="106" font-size="10" font-weight="800" text-anchor="middle" fill="#7c3aed">Discrete Molecule · sp²</text>' +
        '<text x="69" y="122" font-size="9.5" text-anchor="middle" fill="#334155">20 hex + 12 pentagons</text>' +
        '<text x="69" y="138" font-size="9.5" text-anchor="middle" fill="#d97706">Semiconductor</text>' +
        '<text x="69" y="155" font-size="9" text-anchor="middle" fill="#64748b">Soluble in non-polar</text>' +
        '</g>' +
        '</svg>',
      caption:
        "All four allotropes consist solely of carbon atoms, yet changing 3D coordination (4 vs 3) and network vs molecular scale transforms hardness, solubility, and electrical conductivity.",
    },
  ],
  history: {
    title: "From Lewis Dots to Pauling's Scale and the Bonding Triangle",
    story:
      "In 1916, **Gilbert N. Lewis** sketched cubes with electrons at their corners to explain how non-metals share electron pairs to complete octets — inventing the Lewis formulas still drawn in every IB Chemistry exam. Yet Lewis's static dots could not explain why BF₃ is flat while NH₃ is pyramidal, or why AlCl₃ refuses to behave like NaCl. In the 1930s, **Linus Pauling** revolutionized chemistry by introducing **electronegativity** (quantifying an atom's pull on shared electrons), **orbital hybridization** (sp, sp², sp³), and **resonance delocalization** in his landmark book *The Nature of the Chemical Bond* — earning him the 1954 Nobel Prize in Chemistry. Shortly after, **Anton Eduard van Arkel** (1941) and **Jan Ketelaar** (1947) plotted bonding on a continuous triangle connecting metallic, covalent, and ionic vertices, eliminating the false dichotomy between 'purely ionic' and 'purely covalent' compounds. Finally, in 1957, **Ronald Gillespie** and **Ronald Nyholm** distilled electron-pair repulsion into **VSEPR theory**, giving chemists a remarkably simple geometric rule that predicts 3D shapes from methane to xenon tetrafluoride in seconds.",
  },
};
