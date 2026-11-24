// ---------------------------------------------------------------------------
// IB Diploma Chemistry (First Assessment 2025) — Paper 1A · Multiple Choice
// 25 MCQs spanning all 8 topics (17 SL core + 8 HL extension tagged level: "HL").
// Calculator & Data Booklet permitted (FA2025). Balanced answerIndex: [6,6,6,7].
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1a",
  title: "Paper 1A · Multiple Choice (SL & HL)",
  paperType: "Paper 1A · Multiple Choice (SL & HL)",
  level: "SL",
  calculator: true,
  minutes: 45,
  questions: [
    // ===================== Q01: S1.2 Isotopes & A_r (SL) ====================
    {
      id: "exam-p1a-q01",
      kind: "mcq",
      topicId: "s1-particulate-matter",
      guideRef: "particulate-nuclear-atom",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Set isotopic fraction of ¹⁰B as x and solve weighted average A_r",
      question:
        "A natural sample of boron contains only two isotopes, `¹⁰B` (relative isotopic mass `10.00`) and `¹¹B` (relative isotopic mass `11.00`). If the sample has a relative atomic mass `A_r` of `10.80`, what is the percentage abundance of `¹⁰B`?",
      options: ["10.8%", "40.0%", "20.0%", "80.0%"],
      answerIndex: 2,
      hints: [
        "Let the fractional abundance of `¹⁰B` be `x`, so the fractional abundance of `¹¹B` is `1 − x`.",
        "Solve `10.00x + 11.00(1 − x) = 10.80` for `x`, then multiply by `100`.",
      ],
      explanation:
        "Setting the fractional abundance of `¹⁰B` to `x` gives `10.00x + 11.00(1 − x) = 10.80`, so `11.00 − x = 10.80` and `x = 0.200`, which is `20.0%`. Because `A_r = 10.80` lies much closer to `11.00` than `10.00`, `¹¹B` is the major isotope (`80.0%`) and `¹⁰B` is the minor isotope (`20.0%`). Quoting `80.0%` reverses the two isotopes.",
    },

    // ===================== Q02: S1.3 Transition-Metal Cation Config (SL) ====
    {
      id: "exam-p1a-q02",
      kind: "mcq",
      topicId: "s1-particulate-matter",
      guideRef: "electron-configurations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Remove 4s electrons before 3d electrons when forming d-block cations",
      question:
        "Iron has atomic number `Z = 26`. What is the condensed ground-state electron configuration of the iron(III) ion, `Fe³⁺`?",
      options: ["[Ar] 3d⁵", "[Ar] 3d³ 4s²", "[Ar] 3d⁶", "[Ar] 3d⁴ 4s¹"],
      answerIndex: 0,
      hints: [
        "First write the neutral iron atom configuration for 26 electrons: `[Ar] 3d⁶ 4s²`.",
        "When transition metals ionize, electrons are always lost from the `4s` sublevel before the `3d` sublevel.",
      ],
      explanation:
        "A neutral `Fe` atom (`26 e⁻`) has configuration `[Ar] 3d⁶ 4s²`. Forming `Fe³⁺` removes three electrons: both `4s` electrons are removed first, followed by one `3d` electron, leaving `[Ar] 3d⁵`. Writing `[Ar] 3d³ 4s²` mistakenly removes electrons from `3d` first, while `[Ar] 3d⁶` is the configuration of `Fe²⁺`.",
    },

    // ===================== Q03: S1.5 Ideal Gas Molar Mass (SL) ==============
    {
      id: "exam-p1a-q03",
      kind: "mcq",
      topicId: "s1-particulate-matter",
      guideRef: "mole-ideal-gases",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert volume to dm³ (matching kPa) and apply M = mRT / (pV)",
      question:
        "A `1.16 g` sample of a vaporized organic compound occupies `582 cm³` at `350 K` and `100 kPa` (take `R = 8.31 J K⁻¹ mol⁻¹`). Assuming ideal gas behaviour, what is the molar mass of the compound?",
      options: ["29.0 g mol⁻¹", "46.0 g mol⁻¹", "72.0 g mol⁻¹", "58.0 g mol⁻¹"],
      answerIndex: 3,
      hints: [
        "Convert `582 cm³` to `0.582 dm³` so that `p` in `kPa` and `V` in `dm³` match `R = 8.31 J K⁻¹ mol⁻¹`.",
        "Calculate `n = pV / (RT)` and then divide the sample mass `m = 1.16 g` by `n`.",
      ],
      explanation:
        "Using `V = 0.582 dm³` with `p = 100 kPa`, the amount of gas is `n = (100 × 0.582) / (8.31 × 350) = 58.2 / 2908.5 = 0.02001 mol`. The molar mass is therefore `M = m / n = 1.16 / 0.02001 = 58.0 g mol⁻¹`. Failing to convert `cm³` to `dm³` introduces a factor-of-1000 error, while halving the temperature or inverting `pV/(RT)` gives `29.0 g mol⁻¹`.",
    },

    // ===================== Q04: S1.3 Successive Ionization Energies (HL) ====
    {
      id: "exam-p1a-q04",
      kind: "mcq",
      topicId: "s1-particulate-matter",
      guideRef: "ionization-energy-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Locate the largest jump in successive ionization energies to find valence electrons",
      question:
        "The first five successive ionization energies of a Period 3 element `X` are `738`, `1451`, `7733`, `10543`, and `13630 kJ mol⁻¹`. What is the formula of the oxide formed by element `X`?",
      options: ["X₂O", "XO", "X₂O₃", "XO₂"],
      answerIndex: 1,
      hints: [
        "Look for the sudden large jump between consecutive ionization energies — that marks removal from an inner core shell.",
        "The jump occurs between `IE₂` (`1451`) and `IE₃` (`7733`), so `X` has two valence electrons and forms `X²⁺`.",
      ],
      explanation:
        "The fivefold jump between `IE₂` (`1451 kJ mol⁻¹`) and `IE₃` (`7733 kJ mol⁻¹`) shows that the third electron is removed from an inner, much more tightly held shell closer to the nucleus. Element `X` therefore has 2 valence electrons (Group 2, specifically Mg), forms `X²⁺` ions, and combines with `O²⁻` in a `1 : 1` ratio to give `XO`. Choosing `X₂O₃` misreads the jump as occurring after the third electron.",
    },

    // ===================== Q05: S2.2 VSEPR Molecular Geometry (SL) ==========
    {
      id: "exam-p1a-q05",
      kind: "mcq",
      topicId: "s2-bonding-materials",
      guideRef: "covalent-vsepr-imfs",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Count bonding and lone electron domains around the central sulfur atom",
      question:
        "Which description correctly identifies the molecular geometry and approximate `O−S−O` bond angle of sulfur dioxide, `SO₂`?",
      options: [
        "Linear with an O−S−O bond angle of 180°",
        "Trigonal planar with an O−S−O angle of 120°",
        "Bent (V-shaped) with an O−S−O angle of 119°",
        "Bent (V-shaped) with an O−S−O angle of 104.5°",
      ],
      answerIndex: 2,
      hints: [
        "Draw the Lewis formula of `SO₂`: sulfur has 6 valence electrons and forms two sulfur–oxygen bonding domains plus one non-bonding lone pair.",
        "Three electron domains give a trigonal planar electron-domain geometry (`120°`), compressed slightly by the lone pair.",
      ],
      explanation:
        "Sulfur in `SO₂` is surrounded by 3 electron domains (2 bonding domains and 1 lone pair), giving a trigonal planar electron-domain arrangement. Greater lone-pair–bonding-pair repulsion compresses the `O−S−O` angle slightly below `120°` to about `119°`, yielding a bent molecular geometry. An angle of `104.5°` applies to 4 electron domains with 2 lone pairs (`H₂O`), whereas `180°` applies to 2 electron domains (`CO₂`).",
    },

    // ===================== Q06: S2.4 Bonding Triangle (SL) ==================
    {
      id: "exam-p1a-q06",
      kind: "mcq",
      topicId: "s2-bonding-materials",
      guideRef: "bonding-triangle-polymers",
      level: "SL",
      difficulty: "core",
      commandTerm: "Identify",
      strategy: "Compute Δχ and average χ to locate each substance on the Van Arkel–Ketelaar triangle",
      question:
        "Using Pauling electronegativity values (`Na = 0.9`, `Mg = 1.3`, `P = 2.2`, `Cl = 3.2`, `F = 4.0`), which substance lies in the polar covalent region of the bonding triangle (moderate `Δχ` and high average electronegativity `χ_avg`)?",
      options: [
        "Sodium fluoride, NaF",
        "Magnesium chloride, MgCl₂",
        "A sodium–magnesium alloy, NaMg",
        "Phosphorus trichloride, PCl₃",
      ],
      answerIndex: 3,
      hints: [
        "Calculate `Δχ = |χ_A − χ_B|` and `χ_avg = (χ_A + χ_B) / 2` for each pair.",
        "Ionic compounds have large `Δχ` (`≥ 1.8`), metallic alloys have small `Δχ` and low `χ_avg`, while polar covalent compounds have moderate `Δχ` and high `χ_avg`.",
      ],
      explanation:
        "For `PCl₃`, `Δχ = 3.2 − 2.2 = 1.0` and `χ_avg = 2.7`, placing it clearly in the polar covalent region. By contrast, `NaF` (`Δχ = 3.1`) and `MgCl₂` (`Δχ = 1.9`) have large electronegativity differences characteristic of ionic lattices, while `NaMg` has both a small `Δχ` (`0.4`) and a low `χ_avg` (`1.1`), placing it in the metallic bonding corner.",
    },

    // ===================== Q07: S2.2 Expanded Octets & VSEPR (HL) ===========
    {
      id: "exam-p1a-q07",
      kind: "mcq",
      topicId: "s2-bonding-materials",
      guideRef: "expanded-octets-hybridization-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Count all 6 electron domains on xenon and place lone pairs opposite each other",
      question:
        "Xenon tetrafluoride, `XeF₄`, has four `Xe−F` single bonds and two non-bonding lone pairs on the central xenon atom. What are its molecular geometry, `F−Xe−F` bond angle, and overall molecular polarity?",
      options: [
        "Square planar, 90° bond angles, non-polar overall",
        "Tetrahedral, 109.5° bond angles, non-polar overall",
        "Seesaw, ~90° and ~120° bond angles, polar overall",
        "Square pyramidal, ~89° bond angles, polar overall",
      ],
      answerIndex: 0,
      hints: [
        "Four bonding pairs plus two lone pairs give 6 electron domains around Xe, corresponding to an octahedral electron-domain geometry.",
        "To minimize lone-pair–lone-pair repulsion, the two lone pairs occupy opposite (180° trans) positions.",
      ],
      explanation:
        "With 6 electron domains (4 bonding + 2 lone pairs), `XeF₄` adopts an octahedral electron-domain geometry. Placing the two lone pairs `180°` apart minimizes repulsion and leaves the four fluorine atoms in one plane at `90°` — a square planar geometry. Because the four identical `Xe−F` bond dipoles are arranged symmetrically in a square, they cancel completely, making `XeF₄` non-polar. Choosing tetrahedral ignores the two lone pairs on xenon.",
    },

    // ===================== Q08: S3.1 Isoelectronic Ionic Radii (SL) =========
    {
      id: "exam-p1a-q08",
      kind: "mcq",
      topicId: "s3-1-periodicity",
      guideRef: "periodic-trends-nuclear-charge",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Compare",
      strategy: "Compare nuclear charge across species sharing the same 10-electron configuration",
      question:
        "The ions `O²⁻`, `F⁻`, `Na⁺`, and `Mg²⁺` are isoelectronic (`1s² 2s² 2p⁶`). Which sequence arranges these four ions in order of **decreasing** ionic radius (largest first)?",
      options: [
        "Mg²⁺ > Na⁺ > F⁻ > O²⁻",
        "O²⁻ > F⁻ > Na⁺ > Mg²⁺",
        "Na⁺ > Mg²⁺ > O²⁻ > F⁻",
        "F⁻ > O²⁻ > Mg²⁺ > Na⁺",
      ],
      answerIndex: 1,
      hints: [
        "All four ions contain exactly 10 electrons in the same two shells, so electron shielding is essentially identical.",
        "Compare the number of protons (`O = 8`, `F = 9`, `Na = 11`, `Mg = 12`): higher nuclear charge pulls the 10 electrons closer.",
      ],
      explanation:
        "All four ions have 10 electrons (`1s² 2s² 2p⁶`), but their nuclear charges increase from `+8` (`O²⁻`) to `+9` (`F⁻`) to `+11` (`Na⁺`) to `+12` (`Mg²⁺`). Stronger electrostatic attraction between the nucleus and the identical electron cloud contracts the radius progressively, giving `O²⁻ > F⁻ > Na⁺ > Mg²⁺`. Listing `Mg²⁺` largest confuses atomic number with ionic radius.",
    },

    // ===================== Q09: S3.1 Period 3 Oxides (SL) ===================
    {
      id: "exam-p1a-q09",
      kind: "mcq",
      topicId: "s3-1-periodicity",
      guideRef: "group-trends-period3-oxides",
      level: "SL",
      difficulty: "core",
      commandTerm: "Predict",
      strategy: "Classify Period 3 oxides as basic, amphoteric, or acidic and check water solubility",
      question:
        "Which pair of Period 3 oxides consists of **one amphoteric oxide** and **one acidic oxide that reacts readily with water** to yield a strongly acidic solution (`pH < 2`)?",
      options: [
        "Magnesium oxide (MgO) and silicon dioxide (SiO₂)",
        "Sodium oxide (Na₂O) and aluminium oxide (Al₂O₃)",
        "Aluminium oxide (Al₂O₃) and silicon dioxide (SiO₂)",
        "Aluminium oxide (Al₂O₃) and sulfur trioxide (SO₃)",
      ],
      answerIndex: 3,
      hints: [
        "Across Period 3, oxides change from basic (`Na₂O`, `MgO`) to amphoteric (`Al₂O₃`) to acidic (`SiO₂`, `P₄O₁₀`, `SO₂`, `SO₃`).",
        "Check solubility: giant covalent `SiO₂` is acidic (reacts with hot concentrated alkali) but is insoluble in water.",
      ],
      explanation:
        "Aluminium oxide (`Al₂O₃`) is amphoteric, reacting with both acids and alkalis. Sulfur trioxide (`SO₃`) is a covalent acidic oxide that reacts vigorously with water to form strong sulfuric acid (`SO₃ + H₂O → H₂SO₄`, `pH < 2`). Although `SiO₂` is classified as an acidic oxide, its strong giant covalent network makes it insoluble in water, so it does not form an acidic solution on adding water.",
    },

    // ===================== Q10: S3.1 Crystal Field Splitting (HL) ===========
    {
      id: "exam-p1a-q10",
      kind: "mcq",
      topicId: "s3-1-periodicity",
      guideRef: "d-orbital-splitting-colour-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Link stronger-field ligands to larger ΔE, shorter absorbed λ, and complementary colour",
      question:
        "When excess aqueous ammonia is added to pale-blue `[Cu(H₂O)₆]²⁺(aq)`, ligand exchange forms deep royal-blue `[Cu(NH₃)₄(H₂O)₂]²⁺(aq)`. Given that `NH₃` lies above `H₂O` in the spectrochemical series, which statement correctly explains this colour shift?",
      options: [
        "NH₃ decreases ΔE, so longer-wavelength light is absorbed during d–d transitions.",
        "NH₃ oxidizes Cu²⁺ to Cu³⁺, eliminating d–d transitions in the visible spectrum.",
        "NH₃ increases ΔE, so higher-frequency visible light is absorbed during d–d transitions.",
        "NH₃ emits royal-blue photons directly when electrons fall from 4s to 3d orbitals.",
      ],
      answerIndex: 2,
      hints: [
        "A ligand higher in the spectrochemical series causes a greater energy splitting `ΔE` between the two sets of `3d` orbitals.",
        "Use `ΔE = hν = hc / λ`: larger `ΔE` means higher frequency (shorter wavelength) light is absorbed, changing the transmitted complementary colour.",
      ],
      explanation:
        "Because `NH₃` is a stronger-field ligand than `H₂O`, substituting `NH₃` into the coordination sphere increases the d-orbital splitting `ΔE`. By `ΔE = hν`, electrons undergoing `d–d` transitions absorb higher-frequency (shorter-wavelength, orange-yellow instead of red) visible light, shifting the complementary transmitted colour from pale blue to deep royal blue. Transition-metal solution colours arise from light absorption and complementary transmission, not emission.",
    },

    // ===================== Q11: S3.2 IUPAC Nomenclature (SL) ================
    {
      id: "exam-p1a-q11",
      kind: "mcq",
      topicId: "s3-2-organic-classification",
      guideRef: "homologous-series-iupac",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "State",
      strategy: "Number the longest carbon chain from the end nearest the principal carbonyl group",
      question:
        "What is the correct IUPAC name for the compound with the condensed structural formula `CH₃CH(CH₃)CH₂COCH₃`?",
      options: [
        "4-methylpentan-2-one",
        "2-methylpentan-4-one",
        "4-methylpentanal",
        "2-methylbutan-3-one",
      ],
      answerIndex: 0,
      hints: [
        "Identify the functional group (`−CO−` inside the chain = ketone) and find the longest continuous carbon chain containing it (5 carbons = pentan-).",
        "Give the principal functional group (the ketone carbonyl) the lowest possible locant number.",
      ],
      explanation:
        "The longest continuous chain containing the ketone group has 5 carbons (`pentan-2-one`). Numbering from the right-hand end gives the carbonyl carbon locant `2` (rather than `4`), which places the methyl branch at carbon `4`: `4-methylpentan-2-one`. Calling it `2-methylpentan-4-one` mistakenly gives priority to the alkyl substituent over the principal functional group, while `pentanal` describes a terminal aldehyde.",
    },

    // ===================== Q12: S3.2 IHD & IR Spectroscopy (SL) =============
    {
      id: "exam-p1a-q12",
      kind: "mcq",
      topicId: "s3-2-organic-classification",
      guideRef: "ihd-ms-ir-spectroscopy",
      level: "SL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Match molecular formula IHD against diagnostic IR stretches (C=O vs O−H)",
      question:
        "An organic liquid with molecular formula `C₃H₆O` exhibits a strong, sharp infrared absorption at `1715 cm⁻¹` and shows **no** broad absorption between `3200` and `3600 cm⁻¹`. Which compound is consistent with these data?",
      options: [
        "Propan-1-ol, CH₃CH₂CH₂OH",
        "Propanone, CH₃COCH₃",
        "Prop-2-en-1-ol, CH₂=CHCH₂OH",
        "Propanoic acid, CH₃CH₂COOH",
      ],
      answerIndex: 1,
      hints: [
        "Check the molecular formula `C₃H₆O` and calculate its Index of Hydrogen Deficiency: `IHD = (2×3 + 2 − 6)/2 = 1`.",
        "A strong sharp band near `1715 cm⁻¹` indicates `C=O`, while the absence of broad absorption above `3200 cm⁻¹` rules out an `O−H` group.",
      ],
      explanation:
        "The formula `C₃H₆O` has `IHD = 1` (one `π` bond or ring). The sharp absorption at `1715 cm⁻¹` is diagnostic of a `C=O` stretch, and the absence of any broad `O−H` band (`3200–3600 cm⁻¹`) eliminates alcohols such as `prop-2-en-1-ol`. `Propan-1-ol` has formula `C₃H₈O` (`IHD = 0`) and an `O−H` bond, while `propanoic acid` has two oxygen atoms (`C₃H₆O₂`). Only `propanone` (`CH₃COCH₃`) fits every datum.",
    },

    // ===================== Q13: S3.2 ¹H NMR Splitting & Shifts (HL) =========
    {
      id: "exam-p1a-q13",
      kind: "mcq",
      topicId: "s3-2-organic-classification",
      guideRef: "proton-nmr-combined-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Use n + 1 splitting and ester-oxygen deshielding (~4.1 ppm) to distinguish isomers",
      question:
        "Which structural isomer of `C₄H₈O₂` produces a high-resolution `¹H NMR` spectrum containing three signals: a triplet at `δ = 1.26 ppm` (integration `3`), a singlet at `δ = 2.04 ppm` (integration `3`), and a quartet at `δ = 4.12 ppm` (integration `2`)?",
      options: [
        "Methyl propanoate, CH₃CH₂COOCH₃",
        "Butanoic acid, CH₃CH₂CH₂COOH",
        "Propan-2-yl methanoate, HCOOCH(CH₃)₂",
        "Ethyl ethanoate, CH₃COOCH₂CH₃",
      ],
      answerIndex: 3,
      hints: [
        "A quartet (2H) coupled to a triplet (3H) signals an ethyl group (`−CH₂CH₃`), while a singlet (3H) near `2.0 ppm` indicates `CH₃−C=O`.",
        "Check which group sits directly next to the electronegative ester oxygen (`−O−`, shifting protons to `3.7–4.3 ppm`): here it is the `CH₂` quartet at `4.12 ppm`!",
      ],
      explanation:
        "The `3H` triplet (`1.26 ppm`) and `2H` quartet (`4.12 ppm`) reveal an `−OCH₂CH₃` ethyl group whose `CH₂` protons are strongly deshielded to `~4.1 ppm` by the adjacent ester oxygen, while the `3H` singlet at `2.04 ppm` belongs to `CH₃−C=O`. This uniquely identifies `ethyl ethanoate` (`CH₃COOCH₂CH₃`). In `methyl propanoate` (`CH₃CH₂COOCH₃`), the `−OCH₃` singlet appears around `3.7 ppm` and the `−COCH₂−` quartet around `2.3 ppm`.",
    },

    // ===================== Q14: R1.1 Coffee-Cup Calorimetry (SL) ============
    {
      id: "exam-p1a-q14",
      kind: "mcq",
      topicId: "r1-energetics-spontaneity",
      guideRef: "enthalpy-calorimetry",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use total solution mass in q = mcΔT, then divide by moles of H₂O formed with minus sign",
      question:
        "When `50.0 cm³` of `1.00 mol dm⁻³ HCl(aq)` is mixed with `50.0 cm³` of `1.00 mol dm⁻³ NaOH(aq)` in an insulated cup, the temperature of the `100.0 g` mixture rises by `6.80 °C` (take `c = 4.18 J g⁻¹ K⁻¹`). What is the enthalpy change of neutralization, `ΔH_neut`, per mole of water formed?",
      options: ["−56.8 kJ mol⁻¹", "+56.8 kJ mol⁻¹", "−28.4 kJ mol⁻¹", "−114 kJ mol⁻¹"],
      answerIndex: 0,
      hints: [
        "Calculate heat absorbed by the total `100.0 g` solution: `q = m c ΔT = 100.0 × 4.18 × 6.80` (in joules, then convert to kJ).",
        "Find moles of water formed (`n = 0.0500 dm³ × 1.00 mol dm⁻³ = 0.0500 mol`) and apply a negative sign because the temperature increased (exothermic).",
      ],
      explanation:
        "The thermal energy absorbed by the solution is `q = 100.0 × 4.18 × 6.80 = 2842.4 J = 2.842 kJ`. Neutralizing `0.0500 mol HCl` with `0.0500 mol NaOH` forms `0.0500 mol H₂O`, so `ΔH = −q / n = −2.842 / 0.0500 = −56.8 kJ mol⁻¹`. Writing `+56.8 kJ mol⁻¹` omits the exothermic negative sign, while `−28.4 kJ mol⁻¹` wrongly uses only `50.0 g` of solution or divides by `0.100 mol` total reactants.",
    },

    // ===================== Q15: R1.2 Hess's Law Combustion Cycle (SL) =======
    {
      id: "exam-p1a-q15",
      kind: "mcq",
      topicId: "r1-energetics-spontaneity",
      guideRef: "hess-bond-enthalpies-fuels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Apply ΔH⊖_rxn = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)",
      question:
        "Standard enthalpies of combustion are: `ΔH_c⊖[C₂H₄(g)] = −1411 kJ mol⁻¹`, `ΔH_c⊖[H₂(g)] = −286 kJ mol⁻¹`, and `ΔH_c⊖[C₂H₆(g)] = −1560 kJ mol⁻¹`. What is the standard enthalpy change for the hydrogenation `C₂H₄(g) + H₂(g) → C₂H₆(g)`?",
      options: ["+137 kJ mol⁻¹", "−3257 kJ mol⁻¹", "−137 kJ mol⁻¹", "−435 kJ mol⁻¹"],
      answerIndex: 2,
      hints: [
        "When using combustion data, all arrows point downward to the same combustion products (`2CO₂ + 3H₂O`), so reverse the product combustion arrow.",
        "Evaluate `ΔH⊖ = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products)` carefully with negative signs.",
      ],
      explanation:
        "By Hess's Law with combustion data, `ΔH⊖ = [ΔH_c⊖(C₂H₄) + ΔH_c⊖(H₂)] − ΔH_c⊖(C₂H₆) = [(−1411) + (−286)] − (−1560) = −1697 + 1560 = −137 kJ mol⁻¹`. Calculating products minus reactants (the formula for formation enthalpies, not combustion enthalpies) gives the sign-flipped trap `+137 kJ mol⁻¹`, while adding all three values gives `−3257 kJ mol⁻¹`.",
    },

    // ===================== Q16: R1.4 Gibbs Spontaneity Crossover (HL) =======
    {
      id: "exam-p1a-q16",
      kind: "mcq",
      topicId: "r1-energetics-spontaneity",
      guideRef: "entropy-gibbs-spontaneity-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert ΔS⊖ from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ before solving T = ΔH⊖ / ΔS⊖",
      question:
        "An endothermic decomposition has `ΔH⊖ = +90.0 kJ mol⁻¹` and `ΔS⊖ = +150 J K⁻¹ mol⁻¹`. Assuming `ΔH⊖` and `ΔS⊖` are independent of temperature, above what minimum temperature `T` does the reaction become thermodynamically spontaneous (`ΔG⊖ < 0`)?",
      options: ["0.600 K", "600 K", "327 K", "1670 K"],
      answerIndex: 1,
      hints: [
        "Convert `ΔS⊖` into kilojoules: `+150 J K⁻¹ mol⁻¹ = +0.150 kJ K⁻¹ mol⁻¹`.",
        "At the crossover point `ΔG⊖ = 0`, so `ΔH⊖ − TΔS⊖ = 0` and `T = ΔH⊖ / ΔS⊖` (directly in kelvin).",
      ],
      explanation:
        "Converting `ΔS⊖` to `kJ K⁻¹ mol⁻¹` gives `+0.150 kJ K⁻¹ mol⁻¹`. Setting `ΔG⊖ = ΔH⊖ − TΔS⊖ = 0` yields `T = 90.0 / 0.150 = 600 K`. Above `600 K`, the `−TΔS⊖` term exceeds `+ΔH⊖`, making `ΔG⊖ < 0`. Forgetting the `J → kJ` conversion gives the impossible trap `0.600 K`, while subtracting `273` converts `600 K` to `327 °C` (not `327 K`).",
    },

    // ===================== Q17: R2.1 Limiting Reactant & STP Gas (SL) =======
    {
      id: "exam-p1a-q17",
      kind: "mcq",
      topicId: "r2-amount-rate-extent",
      guideRef: "stoichiometry-titrations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Compare moles of Mg and HCl against the 1 : 2 ratio before multiplying by V_m",
      question:
        "A `0.243 g` ribbon of magnesium (`A_r = 24.31`) is added to `30.0 cm³` of `0.500 mol dm⁻³ HCl(aq)`: `Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)`. Taking the molar gas volume at STP as `V_m = 22.7 dm³ mol⁻¹`, what volume of `H₂(g)` is produced at STP?",
      options: ["227 cm³", "341 cm³", "114 cm³", "170 cm³"],
      answerIndex: 3,
      hints: [
        "Calculate both reactant amounts: `n(Mg) = 0.243 / 24.31 = 0.0100 mol` and `n(HCl) = 0.0300 × 0.500 = 0.0150 mol`.",
        "Because `1 mol Mg` requires `2 mol HCl`, `0.0100 mol Mg` would need `0.0200 mol HCl` — so `HCl` is limiting!",
        "Use `n(H₂) = {{1/2}} n(HCl)` and multiply by `22.7 dm³ mol⁻¹` (`22 700 cm³ mol⁻¹`).",
      ],
      explanation:
        "We have `n(Mg) = 0.243 / 24.31 = 0.0100 mol` and `n(HCl) = 0.0300 × 0.500 = 0.0150 mol`. Complete reaction of the magnesium would require `0.0200 mol HCl`, so `HCl` is the limiting reactant. From the `2 : 1` mole ratio, `n(H₂) = 0.0150 / 2 = 0.00750 mol`, giving `V(H₂) = 0.00750 × 22.7 = 0.170 dm³ = 170 cm³`. Assuming `Mg` is limiting gives `227 cm³`, while ignoring the `2 : 1` ratio for `HCl` gives `341 cm³`.",
    },

    // ===================== Q18: R2.2 Maxwell–Boltzmann Distribution (SL) ====
    {
      id: "exam-p1a-q18",
      kind: "mcq",
      topicId: "r2-amount-rate-extent",
      guideRef: "collision-theory-kinetics",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Recall how total area, peak position, and E_a threshold behave when T increases",
      question:
        "A sealed gas sample at constant concentration is heated by `20 K`. How does its Maxwell–Boltzmann kinetic energy distribution curve change?",
      options: [
        "Total area increases, peak shifts right, and activation energy E_a decreases.",
        "Total area stays constant, peak shifts left and rises, and E_a increases.",
        "Total area stays constant, peak shifts right and lowers, and E_a is unchanged.",
        "Total area decreases, peak shifts right and lowers, and E_a shifts left.",
      ],
      answerIndex: 2,
      hints: [
        "The total area under a Maxwell–Boltzmann curve equals the total number of particles — does heating a sealed vessel change particle count?",
        "Does raising temperature change the activation energy `E_a`, or only the fraction of particles possessing `E ≥ E_a`?",
      ],
      explanation:
        "In a sealed vessel, the total number of particles is fixed, so the total area under the curve stays constant. Increasing temperature broadens the distribution, shifting the most probable peak to higher energy (right) and lowering its height so that a much larger fraction of particles exceed `E_a`. Temperature does **not** alter `E_a` itself — only a catalyst lowers `E_a` via an alternative pathway.",
    },

    // ===================== Q19: R2.3 Le Chatelier & K_c (SL) ================
    {
      id: "exam-p1a-q19",
      kind: "mcq",
      topicId: "r2-amount-rate-extent",
      guideRef: "equilibrium-ice-gibbs-hl",
      level: "SL",
      difficulty: "core",
      commandTerm: "Predict",
      strategy: "Remember that only temperature changes K_c; heating favours the endothermic direction",
      question:
        "Consider the exothermic equilibrium `2SO₂(g) + O₂(g) ⇌ 2SO₃(g)` with `ΔH⊖ = −197 kJ mol⁻¹`. What is the effect of increasing the temperature at constant volume on the equilibrium position and on the value of `K_c`?",
      options: [
        "Position shifts towards reactants (left) and the value of K_c decreases.",
        "Position shifts towards reactants (left) and the value of K_c stays constant.",
        "Position shifts towards products (right) and the value of K_c increases.",
        "Position shifts towards products (right) and the value of K_c stays constant.",
      ],
      answerIndex: 0,
      hints: [
        "The forward reaction is exothermic (`ΔH < 0`), so the reverse reaction is endothermic.",
        "Increasing temperature favours the endothermic direction and is the one stress that alters `K_c`.",
      ],
      explanation:
        "By Le Chatelier's principle, raising temperature favours the endothermic reverse direction, shifting the equilibrium position to the left (towards `SO₂` and `O₂`). Because the numerator `[SO₃]²` decreases while the denominator `[SO₂]²[O₂]` increases, the equilibrium constant `K_c` decreases. Unlike pressure or concentration changes, temperature always changes `K_c`.",
    },

    // ===================== Q20: R2.2 Rate Law & Units of k (HL) =============
    {
      id: "exam-p1a-q20",
      kind: "mcq",
      topicId: "r2-amount-rate-extent",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Halving volume doubles every gas concentration; substitute into third-order rate law",
      question:
        "The gas-phase reaction `2NO(g) + O₂(g) → 2NO₂(g)` obeys the rate equation `rate = k[NO]²[O₂]`. If the container volume is halved at constant temperature, by what factor does the initial rate increase, and what are the units of `k`?",
      options: [
        "Factor of 4, with units dm³ mol⁻¹ s⁻¹",
        "Factor of 6, with units dm⁶ mol⁻² s⁻¹",
        "Factor of 8, with units dm³ mol⁻¹ s⁻¹",
        "Factor of 8, with units dm⁶ mol⁻² s⁻¹",
      ],
      answerIndex: 3,
      hints: [
        "Halving the container volume doubles both `[NO]` and `[O₂]` simultaneously (`2 ×` each).",
        "Substitute `2[NO]` and `2[O₂]` into `rate = k[NO]²[O₂]` to get the rate factor, then rearrange `k = rate / ([NO]²[O₂])` for units.",
      ],
      explanation:
        "Halving the volume doubles both `[NO]` and `[O₂]`, so the new rate is `k(2[NO])²(2[O₂]) = 2² × 2 × k[NO]²[O₂] = 8 × initial rate`. For a third-order reaction overall (`2 + 1 = 3`), the units of `k` are `(mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = dm⁶ mol⁻² s⁻¹`. Multiplying `2 × 3 = 6` mistakes exponents for multiplication, while `dm³ mol⁻¹ s⁻¹` corresponds to second order.",
    },

    // ===================== Q21: R3.1 Strong Base pH (SL) ====================
    {
      id: "exam-p1a-q21",
      kind: "mcq",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "bronsted-ph-strong-weak",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Account for 2 OH⁻ ions per Ba(OH)₂ formula unit, then use pH = 14.00 − pOH",
      question:
        "Barium hydroxide, `Ba(OH)₂`, is a strong base that dissociates completely in water. What is the pH of a `0.0050 mol dm⁻³ Ba(OH)₂(aq)` solution at `298 K` (`K_w = 1.00 × 10⁻¹⁴`)?",
      options: ["11.70", "12.00", "2.00", "12.30"],
      answerIndex: 1,
      hints: [
        "Each mole of `Ba(OH)₂` releases **two** moles of `OH⁻` ions: `[OH⁻] = 2 × 0.0050 mol dm⁻³`.",
        "Calculate `pOH = −log₁₀[OH⁻]` and subtract from `pK_w = 14.00` at `298 K`.",
      ],
      explanation:
        "Complete dissociation of `Ba(OH)₂ → Ba²⁺ + 2OH⁻` produces `[OH⁻] = 2 × 0.0050 = 0.010 mol dm⁻³ = 1.0 × 10⁻² mol dm⁻³`. Therefore `pOH = −log₁₀(1.0 × 10⁻²) = 2.00`, and `pH = 14.00 − 2.00 = 12.00`. Giving `2.00` forgets to convert `pOH` to `pH`, while `11.70` forgets the stoichiometric factor of `2` for `OH⁻`.",
    },

    // ===================== Q22: R3.1–3.2 Voltaic Cell Operation (SL) ========
    {
      id: "exam-p1a-q22",
      kind: "mcq",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "redox-voltaic-electrolytic",
      level: "SL",
      difficulty: "core",
      commandTerm: "Identify",
      strategy: "Match oxidation at the negative anode with electron flow and salt-bridge anion drift",
      question:
        "A voltaic cell operates according to the spontaneous reaction `Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)` using a `KNO₃(aq)` salt bridge. Which statement correctly describes the operating cell?",
      options: [
        "Zn is oxidized at the negative anode and NO₃⁻ ions migrate into the Zn half-cell.",
        "Zn is oxidized at the positive anode and K⁺ ions migrate into the Zn half-cell.",
        "Cu²⁺ is reduced at the negative cathode and electrons flow from Cu to Zn in the wire.",
        "Cu is oxidized at the positive cathode and NO₃⁻ ions migrate into the Cu half-cell.",
      ],
      answerIndex: 0,
      hints: [
        "In a voltaic cell, oxidation always occurs at the **negative anode** (`Zn → Zn²⁺ + 2e⁻`) and reduction at the **positive cathode**.",
        "As `Zn²⁺` ions build up in the anode half-cell, negative counter-ions (`NO₃⁻`) must enter from the salt bridge to maintain electrical neutrality.",
      ],
      explanation:
        "In a voltaic cell, the more reactive metal (`Zn`) is oxidized at the negative anode (`Zn → Zn²⁺ + 2e⁻`), sending electrons through the external wire to the positive copper cathode where `Cu²⁺` is reduced. To neutralize the excess `Zn²⁺` generated in the anode compartment, `NO₃⁻` anions flow from the salt bridge into the `Zn` half-cell (while `K⁺` moves into the `Cu` half-cell). Assigning the anode a positive sign confuses voltaic cells with electrolytic cells.",
    },

    // ===================== Q23: R3.2 Standard Cell Potential & ΔG⊖ (HL) =====
    {
      id: "exam-p1a-q23",
      kind: "mcq",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "electrode-potentials-aqueous-electrolysis-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      strategy: "Never multiply E⊖ by stoichiometric coefficients; use n = 2 in ΔG⊖ = −nFE⊖",
      question:
        "Given standard electrode potentials `E⊖(Cu²⁺/Cu) = +0.34 V` and `E⊖(Ag⁺/Ag) = +0.80 V`, and `F = 96 500 C mol⁻¹`, what is `ΔG⊖` for the spontaneous reaction `Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)`?",
      options: ["−44.4 kJ mol⁻¹", "−243 kJ mol⁻¹", "−88.8 kJ mol⁻¹", "+88.8 kJ mol⁻¹"],
      answerIndex: 2,
      hints: [
        "Standard electrode potentials are intensive properties: `E⊖_cell = E⊖_cathode − E⊖_anode = +0.80 − (+0.34) = +0.46 V` (do NOT double `+0.80 V`!).",
        "Here `n = 2 mol` of electrons are transferred per mole of reaction, so compute `ΔG⊖ = −nFE⊖` and divide by `1000` to obtain `kJ mol⁻¹`.",
      ],
      explanation:
        "Silver ions have the more positive `E⊖`, so `Ag⁺` is reduced at the cathode and `Cu` is oxidized at the anode: `E⊖_cell = +0.80 − (+0.34) = +0.46 V`. With `n = 2` electrons transferred, `ΔG⊖ = −nFE⊖ = −2 × 96 500 × 0.46 = −88 780 J mol⁻¹ = −88.8 kJ mol⁻¹`. Doubling `+0.80 V` to `+1.60 V` produces the classic trap `−243 kJ mol⁻¹`, while taking `n = 1` gives `−44.4 kJ mol⁻¹`.",
    },

    // ===================== Q24: R3.3 Free-Radical Propagation (SL) ==========
    {
      id: "exam-p1a-q24",
      kind: "mcq",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "free-radical-substitution",
      level: "SL",
      difficulty: "core",
      commandTerm: "Identify",
      strategy: "Propagation steps consume one radical and generate a new radical to sustain the chain",
      question:
        "Methane reacts with chlorine gas under ultraviolet light via a free-radical substitution mechanism. Which equation represents a **propagation** step in this mechanism?",
      options: [
        "Cl₂ → 2Cl•",
        "•CH₃ + Cl₂ → CH₃Cl + Cl•",
        "•CH₃ + •CH₃ → C₂H₆",
        "•CH₃ + Cl• → CH₃Cl",
      ],
      answerIndex: 1,
      hints: [
        "Initiation creates radicals from a neutral molecule (`0 → 2` radicals), while termination destroys two radicals (`2 → 0` radicals).",
        "Propagation steps have exactly one radical on the reactant side and one radical on the product side.",
      ],
      explanation:
        "A propagation step reacts a free radical with a neutral molecule to form a product molecule and regenerate a radical (`•CH₃ + Cl₂ → CH₃Cl + Cl•`), sustaining the chain reaction. `Cl₂ → 2Cl•` is the UV initiation step (homolytic fission), whereas `•CH₃ + •CH₃ → C₂H₆` and `•CH₃ + Cl• → CH₃Cl` combine two radicals and are termination steps.",
    },

    // ===================== Q25: R3.4 SN1 vs SN2 Mechanisms (HL) =============
    {
      id: "exam-p1a-q25",
      kind: "mcq",
      topicId: "r3-2-organic-mechanisms",
      guideRef: "sn1-sn2-markovnikov-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Deduce",
      strategy: "Tertiary halogenoalkanes react via unimolecular SN1 through a planar carbocation",
      question:
        "Which combination correctly describes the nucleophilic substitution of the tertiary halogenoalkane `2-bromo-2-methylpropane`, `(CH₃)₃CBr`, with aqueous hydroxide ions (`OH⁻`)?",
      options: [
        "SN2 mechanism, rate = k[(CH₃)₃CBr][OH⁻], single concerted transition state",
        "SN2 mechanism, rate = k[(CH₃)₃CBr], trigonal planar carbocation intermediate",
        "SN1 mechanism, rate = k[(CH₃)₃CBr][OH⁻], concerted backside inversion step",
        "SN1 mechanism, rate = k[(CH₃)₃CBr], trigonal planar carbocation intermediate",
      ],
      answerIndex: 3,
      hints: [
        "Three bulky methyl groups sterically block backside attack by `OH⁻` and inductively stabilize a positive charge on the central carbon.",
        "In the unimolecular `SN1` pathway, only the halogenoalkane participates in the slow `C−Br` bond-breaking step, so `OH⁻` does not appear in the rate law.",
      ],
      explanation:
        "Steric hindrance from the three methyl groups prevents concerted backside attack (`SN2`), while their positive inductive effect stabilizes the tertiary carbocation `(CH₃)₃C⁺`. The reaction therefore proceeds by `SN1`: slow heterolytic fission of `C−Br` forms a trigonal planar carbocation intermediate, giving the first-order rate equation `rate = k[(CH₃)₃CBr]` independent of `[OH⁻]`. Including `[OH⁻]` in the rate equation wrongly assigns bimolecular `SN2` kinetics.",
    },
  ],
};
