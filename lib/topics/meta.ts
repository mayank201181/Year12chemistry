// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Chemistry (SL & HL, First Assessment 2025).
// Pure data — safe to import from Node scripts.
//
// Covers all 2 Strands (Structure 1–3 & Reactivity 1–3) and all 22 official
// sub-topics (S1.1–R3.4). HL-only sections are explicitly tagged level: "HL".
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Structure 1: Particulate Matter",
  "Structure 2: Bonding & Materials",
  "Structure 3: Classification & Organic",
  "Reactivity 1–2: Energetics, Rate & Extent",
  "Reactivity 3: Reaction Mechanisms",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== STRUCTURE 1 =======================================
  {
    id: "s1-particulate-matter",
    title: "Structure 1: Models of the Particulate Nature of Matter",
    strand: "Structure 1: Particulate Matter",
    icon: "⚛️",
    level: "SL",
    curriculum: "IB Chemistry FA2025 S1.1 Particulate nature, S1.2 Nuclear atom, S1.3 Electron configurations [HL], S1.4 Mole, S1.5 Ideal gases",
    sections: [
      {
        id: "particulate-nuclear-atom",
        heading: "S1.1–S1.2 Particulate Nature, Isotopes & Mass Spectrometry",
        level: "SL",
        covers: "Elements, compounds, homogeneous vs heterogeneous mixtures, separation methods (filtration, distillation, paper chromatography, recrystallization), kinetic molecular theory & state changes, Kelvin scale; subatomic particles, nuclear notation, isotopes, mass spectra & relative atomic mass A_r calculations.",
      },
      {
        id: "electron-configurations",
        heading: "S1.3 Emission Spectra & Electron Configurations",
        level: "SL",
        covers: "Continuous vs line emission spectra, hydrogen line spectrum (Balmer/Lyman series), quantization of energy levels, main shells (n), sublevels (s, p, d, f), atomic orbitals, Aufbau principle, Pauli exclusion, Hund's rule, full & condensed configurations (incl. Cr and Cu exceptions, and transition-metal cations losing 4s before 3d).",
      },
      {
        id: "ionization-energy-hl",
        heading: "S1.3 Convergence Limit & Successive Ionization Energies",
        level: "HL",
        covers: "Photon energy E = hf = hc/λ, convergence limit of the Lyman series to calculate first ionization energy (in kJ mol⁻¹), trends & anomalies in first IE across Period 2/3 (Be/B, N/O), and interpreting logarithmic successive ionization energy graphs to deduce valence electrons and group number.",
      },
      {
        id: "mole-ideal-gases",
        heading: "S1.4–S1.5 The Mole, Empirical Formulas & Ideal Gases",
        level: "SL",
        covers: "Avogadro constant N_A, molar mass M, empirical vs molecular formulas (combustion & % composition), molar concentration (mol dm⁻³ & g dm⁻³), serial dilutions, Avogadro's law & molar gas volume at STP (22.7 dm³ mol⁻¹ at 273 K, 100 kPa), ideal gas equation pV = nRT, combined gas law, and deviations of real gases at high pressure & low temperature.",
      },
    ],
  },

  // ===================== STRUCTURE 2 =======================================
  {
    id: "s2-bonding-materials",
    title: "Structure 2: Models of Bonding & Structure",
    strand: "Structure 2: Bonding & Materials",
    icon: "💎",
    level: "SL",
    curriculum: "IB Chemistry FA2025 S2.1 Ionic, S2.2 Covalent [HL], S2.3 Metallic [HL], S2.4 Bonding Triangle & Polymers [HL]",
    sections: [
      {
        id: "ionic-metallic-bonding",
        heading: "S2.1 & S2.3 Ionic Lattices & Metallic Bonding",
        level: "SL",
        covers: "Cation/anion formation, polyatomic ions (NH₄⁺, OH⁻, NO₃⁻, HCO₃⁻, CO₃²⁻, SO₄²⁻, PO₄³⁻), 3D ionic crystal lattice, lattice enthalpy factors (ionic charge & radius), conductivity/brittleness/melting point; metallic bonding (delocalized valence electrons + cations), malleability, electrical/thermal conductivity, and transition-metal d-electron contribution [HL].",
      },
      {
        id: "covalent-vsepr-imfs",
        heading: "S2.2 Covalent Bonding, VSEPR (2–4 Domains), Polarity & IMFs",
        level: "SL",
        covers: "Lewis formulas, octet rule, coordinate (dative) covalent bonds, bond length vs bond strength (single/double/triple), VSEPR shapes & bond angles for 2–4 electron domains (linear, trigonal planar, bent, tetrahedral, trigonal pyramidal), molecular polarity, London dispersion, dipole–dipole, hydrogen bonding, covalent network solids (diamond, graphite, graphene, C₆₀, Si, SiO₂), and chromatography Rf/polarity.",
      },
      {
        id: "expanded-octets-hybridization-hl",
        heading: "S2.2 Expanded Octets, Resonance, Formal Charge & Hybridization",
        level: "HL",
        covers: "VSEPR for 5 & 6 electron domains (trigonal bipyramidal, seesaw, T-shaped, octahedral, square pyramidal, square planar), formal charge FC = V − N − ½B to select preferred Lewis structures, resonance & electron delocalization (CO₃²⁻, NO₃⁻, O₃, benzene, RCOO⁻), ozone depletion catalysis, σ vs π bonds, and sp / sp² / sp³ hybridization.",
      },
      {
        id: "bonding-triangle-polymers",
        heading: "S2.4 Bonding Triangle, Alloys & Addition / Condensation Polymers",
        level: "SL",
        covers: "Van Arkel–Ketelaar bonding triangle (Δχ vs average χ) classifying ionic, covalent, polar covalent & metallic bonding, alloys (substitutional vs interstitial), addition polymerization of alkenes (repeat units, monomers, properties); [HL] condensation polymers (polyesters & polyamides/nylon, amide/ester linkages, and hydrolysis of biological macromolecules).",
      },
    ],
  },

  // ===================== STRUCTURE 3 =======================================
  {
    id: "s3-1-periodicity",
    title: "Structure 3.1: The Periodic Table — Classification of Elements",
    strand: "Structure 3: Classification & Organic",
    icon: "📊",
    level: "SL",
    curriculum: "IB Chemistry FA2025 S3.1 Periodic trends, Period 3 oxides, oxidation states & Transition Metals [HL]",
    sections: [
      {
        id: "periodic-trends-nuclear-charge",
        heading: "S3.1 Effective Nuclear Charge & Periodic Trends",
        level: "SL",
        covers: "s/p/d/f blocks, groups & periods, shielding & effective nuclear charge Z_eff; trends down a group and across a period in atomic radius, ionic radius (isoelectronic series), first ionization energy, electron affinity, electronegativity, and metallic vs non-metallic character.",
      },
      {
        id: "group-trends-period3-oxides",
        heading: "S3.1 Group 1/17 Trends, Period 3 Oxides & Oxidation States",
        level: "SL",
        covers: "Alkali metals (Group 1) with water and halogens (Group 17) displacement reactions & halide oxidizing power; acid–base trend of Period 3 oxides across Na₂O, MgO (basic), Al₂O₃ (amphoteric), SiO₂, P₄O₁₀, SO₂/SO₃ (acidic) with balanced water reactions & rain acidity; assigning oxidation states (incl. peroxides, hydrides & IUPAC Roman numerals).",
      },
      {
        id: "transition-elements-complexes-hl",
        heading: "S3.1 Transition Metals: Variable Oxidation States & Complex Ions",
        level: "HL",
        covers: "Definition of d-block vs transition elements (Sc and Zn exceptions), small gap between 4s and 3d ionization energies giving variable oxidation states, heterogeneous & homogeneous catalysis, magnetic properties (paramagnetism/diamagnetism/ferromagnetism), Lewis acid–base coordinate bonding in complex ions, monodentate vs polydentate ligands (EDTA⁴⁻, H₂O, NH₃, Cl⁻, CN⁻), and coordination number.",
      },
      {
        id: "d-orbital-splitting-colour-hl",
        heading: "S3.1 Crystal Field Splitting & Colour of Transition Complexes",
        level: "HL",
        covers: "Splitting of five degenerate d orbitals into two energy levels in an octahedral ligand field (ΔE), d–d electronic transitions absorbing visible light of frequency ν = ΔE/h, complementary colour transmission via the colour wheel, and factors altering ΔE (identity of metal ion, oxidation state, ligand spectrochemical series, coordination geometry).",
      },
    ],
  },
  {
    id: "s3-2-organic-classification",
    title: "Structure 3.2: Functional Groups & Organic Analysis",
    strand: "Structure 3: Classification & Organic",
    icon: "🧬",
    level: "SL",
    curriculum: "IB Chemistry FA2025 S3.2 Homologous series, IUPAC naming, isomerism [HL], MS/IR/¹H NMR Spectroscopy [HL]",
    sections: [
      {
        id: "homologous-series-iupac",
        heading: "S3.2 Homologous Series, Functional Groups & IUPAC Naming",
        level: "SL",
        covers: "Empirical, molecular, full structural, condensed & skeletal formulas; homologous series trends in boiling point & solubility; naming & identifying alkanes, alkenes, alkynes, halogenoalkanes, alcohols (1°/2°/3°), ethers, aldehydes, ketones, carboxylic acids, esters, amines (1°/2°/3°), amides, nitriles & arenes.",
      },
      {
        id: "structural-isomers-stereoisomers-hl",
        heading: "S3.2 Structural Isomerism & Stereoisomerism (E/Z & Optical)",
        level: "HL",
        covers: "Chain, position & functional-group structural isomers (SL+HL); [HL] configurational stereoisomers: cis–trans and Cahn–Ingold–Prelog E/Z isomerism across restricted C=C or cyclic rings; chiral carbons, non-superimposable mirror-image enantiomers, optical activity (polarimeter rotation of plane-polarized light), racemic mixtures, and diastereomers.",
      },
      {
        id: "ihd-ms-ir-spectroscopy",
        heading: "S3.2 Index of Hydrogen Deficiency, Mass Spec & IR Spectroscopy",
        level: "SL",
        covers: "Calculating Index of Hydrogen Deficiency IHD = (2C + 2 + N − H − X)/2 to count rings + π bonds; Mass Spectrometry (molecular ion M⁺ peak for M_r, characteristic fragment losses like −15 CH₃, −17 OH, −29 C₂H₅/CHO, −45 COOH); Infrared spectroscopy (bond stretching/bending, dipole-moment change, identifying broad O−H, sharp C=O, N−H, C−H, and fingerprint region).",
      },
      {
        id: "proton-nmr-combined-hl",
        heading: "S3.2 ¹H NMR Spectroscopy & Combined Structure Elucidation",
        level: "HL",
        covers: "Proton NMR: TMS reference (0 ppm), number of chemical environments, chemical shift ranges (R−CH₃, R−CO−CH₃, R−O−CH₂−, Ar−H, −CHO, −COOH), integration ratios (relative number of H atoms), spin–spin n + 1 splitting patterns (singlet, doublet, triplet, quartet, septet), and solving full unknown organic structures combining empirical formula + IHD + MS + IR + ¹H NMR.",
      },
    ],
  },

  // ===================== REACTIVITY 1–2 ====================================
  {
    id: "r1-energetics-spontaneity",
    title: "Reactivity 1: Energetics, Energy Cycles & Spontaneity",
    strand: "Reactivity 1–2: Energetics, Rate & Extent",
    icon: "🔥",
    level: "SL",
    curriculum: "IB Chemistry FA2025 R1.1 Calorimetry, R1.2 Hess/Bond/Born–Haber [HL], R1.3 Fuels, R1.4 Entropy & Gibbs [HL]",
    sections: [
      {
        id: "enthalpy-calorimetry",
        heading: "R1.1 Enthalpy Profiles, Calorimetry & Standard Enthalpies",
        level: "SL",
        covers: "System vs surroundings, exothermic (ΔH < 0) vs endothermic (ΔH > 0) enthalpy-level diagrams, standard conditions (298 K, 100 kPa), coffee-cup & spirit-burner calorimetry q = mcΔT, ΔH = −q/n_limiting, temperature-time extrapolation cooling curves, and systematic heat-loss errors.",
      },
      {
        id: "hess-bond-enthalpies-fuels",
        heading: "R1.2–R1.3 Bond Enthalpies, Hess's Law & Energy from Fuels",
        level: "SL",
        covers: "Average bond enthalpies ΔH ≈ Σ(bonds broken) − Σ(bonds formed) and limitations (gaseous state, average values), Hess's Law algebraic manipulation & enthalpy cycles using ΔH_c⊖ and ΔH_f⊖; R1.3 complete vs incomplete combustion, fossil fuels (coal/oil/natural gas), specific energy & energy density, biofuels (bioethanol/photosynthesis), and hydrogen/methanol fuel cells.",
      },
      {
        id: "born-haber-solution-hl",
        heading: "R1.2 Born–Haber Cycles, Lattice & Solution Enthalpies",
        level: "HL",
        covers: "Defining enthalpy of atomization, ionization energy, electron affinity (1st exo vs 2nd endo), and lattice enthalpy (endothermic dissociation convention in IB Data Booklet); constructing & solving Born–Haber cycles (NaCl, MgO, CaCl₂), theoretical vs experimental lattice enthalpy (covalent character/polarization), and ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖.",
      },
      {
        id: "entropy-gibbs-spontaneity-hl",
        heading: "R1.4 Entropy (ΔS⊖) & Gibbs Free Energy (ΔG⊖)",
        level: "HL",
        covers: "Predicting sign of ΔS⊖ from state changes & Δn_gas, computing ΔS⊖ = ΣS⊖(products) − ΣS⊖(reactants), Gibbs free energy ΔG⊖ = ΔH⊖ − TΔS⊖ (unit trap: J → kJ!), spontaneity condition ΔG⊖ < 0, the 4 sign combinations of ΔH and ΔS, crossover temperature T = ΔH/ΔS, and thermodynamic feasibility vs kinetic stability.",
      },
    ],
  },
  {
    id: "r2-amount-rate-extent",
    title: "Reactivity 2: Stoichiometry, Kinetics & Chemical Equilibrium",
    strand: "Reactivity 1–2: Energetics, Rate & Extent",
    icon: "⚡",
    level: "SL",
    curriculum: "IB Chemistry FA2025 R2.1 Stoichiometry, R2.2 Kinetics & Arrhenius [HL], R2.3 Equilibrium & ICE/ΔG–K [HL]",
    sections: [
      {
        id: "stoichiometry-titrations",
        heading: "R2.1 Limiting Reactants, Yield, Atom Economy & Titrations",
        level: "SL",
        covers: "Balancing molecular & ionic equations with state symbols, identifying limiting vs excess reactants, theoretical & percentage yield, atom economy & green chemistry, reacting gas volumes, and acid–base/redox volumetric & back-titration calculations.",
      },
      {
        id: "collision-theory-kinetics",
        heading: "R2.2 Collision Theory, Maxwell–Boltzmann & Measuring Rate",
        level: "SL",
        covers: "Rate of reaction as −Δ[R]/Δt or +Δ[P]/Δt (gradient of concentration–time curve, initial vs instantaneous rate), experimental rate tracking (gas syringe, mass loss, colorimetry, clock reactions), collision geometry & E ≥ E_a, Maxwell–Boltzmann distribution shifts with temperature & catalysts (alternate pathway with lower E_a).",
      },
      {
        id: "rate-laws-mechanisms-arrhenius-hl",
        heading: "R2.2 Rate Equations, Mechanisms & The Arrhenius Equation",
        level: "HL",
        covers: "Deducing reaction orders (0, 1, 2) & rate constant k (with exact units!) from initial-rate data tables, concentration–time & rate–concentration graph shapes, molecularity vs order, rate-determining step (RDS) & pre-equilibrium intermediates, Arrhenius equation k = A e^(−E_a/RT), ln k vs 1/T graphs (gradient = −E_a/R), and two-temperature Arrhenius calculations.",
      },
      {
        id: "equilibrium-ice-gibbs-hl",
        heading: "R2.3 Dynamic Equilibrium, Le Chatelier, ICE Tables & ΔG⊖ = −RT ln K",
        level: "SL",
        covers: "Dynamic equilibrium (forward rate = reverse rate, constant concentrations), equilibrium constant K_c expression & magnitude meaning, Le Chatelier's principle (concentration, pressure/volume, temperature, catalyst — only T changes K!), Haber & Contact processes; [HL] reaction quotient Q vs K, ICE-table K_c calculations, and ΔG⊖ = −RT ln K.",
      },
    ],
  },

  // ===================== REACTIVITY 3 ======================================
  {
    id: "r3-1-proton-electron-transfer",
    title: "Reactivity 3.1–3.2: Acids, Bases & Redox Electrochemistry",
    strand: "Reactivity 3: Reaction Mechanisms",
    icon: "🔋",
    level: "SL",
    curriculum: "IB Chemistry FA2025 R3.1 Proton Transfer [HL] & R3.2 Electron Transfer / Electrochemistry [HL]",
    sections: [
      {
        id: "bronsted-ph-strong-weak",
        heading: "R3.1 Brønsted–Lowry Acids/Bases, pH Scale & Strong vs Weak",
        level: "SL",
        covers: "Brønsted–Lowry proton donors/acceptors, conjugate acid–base pairs, amphiprotic vs amphoteric species, ionic product of water K_w = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ at 298 K (and temperature dependence of neutral pH!), pH = −log[H⁺], pOH, distinguishing strong vs weak acids/bases (conductivity, reaction rate, pH, enthalpy of neutralisation), and acid rain / ocean acidification.",
      },
      {
        id: "weak-acids-buffers-titrations-hl",
        heading: "R3.1 Ka/Kb Calculations, Salt Hydrolysis, Buffers & Titration Curves",
        level: "HL",
        covers: "K_a, K_b, pK_a, pK_b & pK_a + pK_b = pK_w, weak acid/base pH calculations (small-x approximation), acidic/basic/neutral salt hydrolysis (e.g. NH₄Cl, CH₃COONa, FeCl₃), acidic & basic buffer mechanisms and Henderson–Hasselbalch pH calculations, pH titration curves (strong/strong, weak/strong, half-equivalence pH = pK_a), and selecting indicators (pK_In ± 1 within vertical jump).",
      },
      {
        id: "redox-voltaic-electrolytic",
        heading: "R3.2 Oxidation States, Half-Equations, Voltaic & Molten Cells",
        level: "SL",
        covers: "Redox electron transfer, oxidizing vs reducing agents, balancing ion-electron half-equations in acidic medium, activity series & halogen displacements, Winkler BOD dissolved-oxygen titration, voltaic (galvanic) cells (anode oxidation, cathode reduction, salt bridge, electron flow), rechargeable/primary & fuel cells, electrolysis of molten ionic salts, and organic oxidation/reduction of alcohols & carbonyls.",
      },
      {
        id: "electrode-potentials-aqueous-electrolysis-hl",
        heading: "R3.2 Standard Electrode Potentials, ΔG⊖ = −nFE⊖ & Aqueous Electrolysis",
        level: "HL",
        covers: "Standard Hydrogen Electrode (SHE: 0.00 V, 1.0 mol dm⁻³ H⁺, 100 kPa H₂, 298 K, Pt), calculating E⊖_cell = E⊖_cathode − E⊖_anode, predicting redox spontaneity, ΔG⊖ = −nFE⊖, selective discharge in aqueous electrolysis (E⊖, concentration/overpotential in brine NaCl(aq), active vs inert electrodes with CuSO₄(aq)), and quantitative Faraday electroplating (Q = It, n_e = Q/F).",
      },
    ],
  },
  {
    id: "r3-2-organic-mechanisms",
    title: "Reactivity 3.3–3.4: Organic Mechanisms & Synthesis",
    strand: "Reactivity 3: Reaction Mechanisms",
    icon: "🔄",
    level: "SL",
    curriculum: "IB Chemistry FA2025 R3.3 Free-Radical Substitution & R3.4 Nucleophilic/Electrophilic Mechanisms & Synthesis [HL]",
    sections: [
      {
        id: "free-radical-substitution",
        heading: "R3.3 Homolytic Fission & Free-Radical Substitution of Alkanes",
        level: "SL",
        covers: "Unreactivity of alkanes (strong non-polar C−C and C−H bonds), homolytic bond fission with UV light forming unpaired-electron free radicals (fish-hook half-arrows), initiation, propagation (two-step chain), and termination steps for chlorination/bromination of alkanes, plus multi-substitution mixtures.",
      },
      {
        id: "nucleophiles-electrophiles-core",
        heading: "R3.4 Heterolytic Fission, Nucleophiles, Electrophiles & Core Reactions",
        level: "SL",
        covers: "Heterolytic fission & curly full-arrows (movement of an electron pair), electron-rich nucleophiles (OH⁻, CN⁻, NH₃, H₂O) vs electron-deficient electrophiles (H⁺, Br₂, NO₂⁺), nucleophilic substitution of halogenoalkanes, electrophilic addition of alkenes (H₂, X₂, HX, H₂O/steam — bromine water test), and [HL] Lewis acids & bases (BF₃, AlCl₃, transition-metal complex formation).",
      },
      {
        id: "sn1-sn2-markovnikov-hl",
        heading: "R3.4 SN1 vs SN2 Mechanisms, Markovnikov's Rule & Benzene Nitration",
        level: "HL",
        covers: "SN2 concerted backside-attack mechanism for 1° halogenoalkanes (bimolecular rate = k[RX][Nu⁻], Walden inversion of stereochemistry, polar aprotic solvents) vs SN1 two-step carbocation mechanism for 3° halogenoalkanes (unimolecular rate = k[RX], racemic product, polar protic solvents) & leaving-group trend (C−I > C−Br > C−Cl); electrophilic addition of HX to unsymmetrical alkenes & Markovnikov's rule via carbocation inductive stability (3° > 2° > 1°); electrophilic aromatic substitution (nitration of benzene via HNO₃/H₂SO₄ generating NO₂⁺, preserving aromaticity).",
      },
      {
        id: "organic-synthesis-retrosynthesis-hl",
        heading: "R3.4 Multi-Step Organic Synthesis & Retrosynthesis Pathways",
        level: "HL",
        covers: "Chaining up to 4 reaction steps across alkanes, alkenes, halogenoalkanes, alcohols (oxidation via K₂Cr₂O₇/H⁺ distillation vs reflux), aldehydes/ketones (reduction via NaBH₄/LiAlH₄), carboxylic acids, esters, nitrobenzene → phenylamine (Sn/conc. HCl then NaOH), and working backwards via retrosynthesis to design high-yield, minimal-step routes with exact reagents & conditions.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
