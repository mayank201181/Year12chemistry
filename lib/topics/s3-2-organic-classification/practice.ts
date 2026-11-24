import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ — 10 Questions (SL & HL core checkpoint across all 4 sections)
  // ===========================================================================
  quiz: [
    {
      id: "s3-2-organic-classification-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "homologous-series-iupac",
      strategy: "Compute the molar mass of one −CH₂− step",
      question:
        "Calculate the difference in molar mass (in `g mol⁻¹`, to 2 decimal places) between successive members of any homologous series. Use `C = 12.01` and `H = 1.01`.",
      answer: { type: "number", value: 14.03, tolerance: 0.02, display: "14.03 g mol⁻¹" },
      hints: [
        "Adjacent members of a homologous series differ by one `−CH₂−` unit.",
        "Add `12.01 + 2 × 1.01`.",
      ],
      traps: [
        {
          spec: { type: "number", value: 13.02, tolerance: 0.02 },
          feedback: "Each homologous step adds `−CH₂−` (two hydrogens, not one!).",
        },
      ],
      solution: [
        "Successive members differ by `−CH₂−`.",
        "`ΔM = 12.01 + 2(1.01) = 14.03 g mol⁻¹`.",
      ],
      commonError: "Adding only one hydrogen (`CH = 13.02`) instead of `CH₂` (`14.03`).",
    },
    {
      id: "s3-2-organic-classification-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "homologous-series-iupac",
      strategy: "Count all carbons including the aldehyde −CHO carbon",
      question: "State the IUPAC name of `CH₃CH₂CH₂CHO`.",
      answer: { type: "text", accept: ["butanal", "butan-1-al"], display: "butanal" },
      hints: [
        "The terminal `−CHO` group identifies an aldehyde (suffix `-al`).",
        "Include the carbonyl carbon when counting the chain length (`4` carbons).",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["propanal"] },
          feedback: "Remember to include the carbon atom inside `−CHO`—there are 4 carbons in total, not 3.",
        },
      ],
      solution: [
        "The molecule contains a terminal aldehyde group (`−CHO`) at C-1.",
        "Total carbon chain length = 4 (`butan-`) + `-al` → **butanal**.",
      ],
      commonError: "Omitting the carbonyl carbon and naming `CH₃CH₂CH₂CHO` as propanal.",
    },
    {
      id: "s3-2-organic-classification-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Deduce",
      guideRef: "homologous-series-iupac",
      strategy: "Slice ester at C(=O) | O−R'",
      question: "Deduce the IUPAC name of the ester `CH₃COOCH₂CH₃`.",
      answer: { type: "text", accept: ["ethyl ethanoate"], display: "ethyl ethanoate" },
      hints: [
        "Split across the single `C−O` bond: `CH₃C(=O) | O−CH₂CH₃`.",
        "Name the `−O−R'` alcohol half first (`alkyl`), then the `R−COO` acid half (`-oate`).",
      ],
      solution: [
        "Alcohol-derived alkyl group bonded to `−O−` is `−CH₂CH₃` (**ethyl**).",
        "Acid-derived acyl group including `C=O` is `CH₃COO−` (2 carbons → **ethanoate**).",
        "IUPAC name: **ethyl ethanoate**.",
      ],
    },
    {
      id: "s3-2-organic-classification-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "ihd-ms-ir-spectroscopy",
      strategy: "Use IHD = (2C + 2 − H)/2",
      question: "Calculate the Index of Hydrogen Deficiency (IHD) of benzene, `C₆H₆`. Enter a whole number.",
      answer: { type: "number", value: 4, display: "4" },
      hints: [
        "Apply `IHD = (2C + 2 + N − H − X) / 2` with `C = 6` and `H = 6`.",
        "Check structurally: benzene has 1 ring + 3 π bonds.",
      ],
      solution: [
        "`IHD = (2(6) + 2 − 6) / 2 = 8 / 2 = 4`.",
        "A benzene ring always contributes `4` to the IHD (1 ring + 3 π bonds).",
      ],
    },
    {
      id: "s3-2-organic-classification-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "ihd-ms-ir-spectroscopy",
      strategy: "Exclude divalent oxygen from the IHD equation",
      question: "Calculate the Index of Hydrogen Deficiency (IHD) of `C₅H₈O₂`. Enter a whole number.",
      answer: { type: "number", value: 2, display: "2" },
      hints: [
        "Use `IHD = (2C + 2 + N − H − X) / 2`.",
        "Divalent oxygen (`O`) is omitted from the formula!",
      ],
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Do not subtract oxygen atoms in the IHD formula—divalent O does not alter the saturated H count.",
        },
      ],
      solution: [
        "Omit oxygen: `IHD = (2(5) + 2 − 8) / 2 = 4 / 2 = 2`.",
      ],
      commonError: "Subtracting oxygen atoms from the numerator when calculating IHD.",
    },
    {
      id: "s3-2-organic-classification-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "ihd-ms-ir-spectroscopy",
      strategy: "M+ peak equals integer relative molecular mass",
      question:
        "Determine the `m/z` value of the molecular ion peak (`M⁺`) for pentan-2-one (`C₅H₁₀O`). Use `C = 12, H = 1, O = 16`.",
      answer: { type: "number", value: 86, display: "86" },
      hints: [
        "The molecular ion `M⁺` has the same mass as the neutral molecule (losing one electron has negligible mass).",
        "Sum `5 × 12 + 10 × 1 + 16`.",
      ],
      solution: [
        "`M_r(C₅H₁₀O) = 5(12) + 10(1) + 16 = 60 + 10 + 16 = 86`.",
        "Therefore `M⁺` appears at **`m/z = 86`**.",
      ],
    },
    {
      id: "s3-2-organic-classification-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "structural-isomers-stereoisomers-hl",
      strategy: "Count sp³ carbons attached to 4 different groups",
      question:
        "How many chiral carbon atoms are present in one molecule of `2-chlorobutane` (`CH₃CH(Cl)CH₂CH₃`)? Enter a whole number.",
      answer: { type: "number", value: 1, display: "1" },
      hints: [
        "Eliminate any `−CH₃` or `−CH₂−` carbon since they carry at least two identical H atoms.",
        "Inspect C-2: it is bonded to `−H`, `−Cl`, `−CH₃`, and `−CH₂CH₃`.",
      ],
      solution: [
        "Only carbon-2 is bonded to four different atoms/groups (`−H`, `−Cl`, `−CH₃`, `−C₂H₅`).",
        "Number of chiral carbons = **1**.",
      ],
    },
    {
      id: "s3-2-organic-classification-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "proton-nmr-combined-hl",
      strategy: "Use molecular symmetry to count distinct proton environments",
      question:
        "How many distinct signals (peaks) appear in the ¹H NMR spectrum of ethoxyethane (`CH₃CH₂OCH₂CH₃`)? Enter a whole number.",
      answer: { type: "number", value: 2, display: "2" },
      hints: [
        "Look for a mirror plane passing through the central oxygen atom.",
        "Both ethyl groups are completely equivalent by symmetry.",
      ],
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Ethoxyethane is symmetrical across the central `−O−`: the two `−CH₂−` groups are equivalent and the two `−CH₃` groups are equivalent.",
        },
      ],
      solution: [
        "By symmetry across `−O−`, the two `−CH₂−` groups form 1 environment (4H quartet) and the two `−CH₃` groups form 1 environment (6H triplet).",
        "Total ¹H NMR signals = **2**.",
      ],
    },
    {
      id: "s3-2-organic-classification-quiz-q09",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "ihd-ms-ir-spectroscopy",
      strategy: "Cite specific wavenumber ranges for both present and absent bands",
      marks: 3,
      question:
        "Explain how infrared (IR) spectroscopy can be used to distinguish samples of **ethanol**, **ethanoic acid**, and **propanone**.",
      hints: [
        "Compare the `O−H` stretching regions of alcohols (`3200–3600 cm⁻¹`) and carboxylic acids (`2500–3000 cm⁻¹`).",
        "State which compounds exhibit the sharp `C=O` stretch at `1700–1750 cm⁻¹` and which lack `O−H`.",
      ],
      modelAnswer:
        "Ethanol shows a broad O−H band between 3200 and 3600 cm⁻¹ with no C=O absorption near 1700–1750 cm⁻¹. Ethanoic acid displays both a very broad O−H trough spanning 2500–3000 cm⁻¹ and a strong sharp C=O peak at 1700–1750 cm⁻¹. Propanone gives a strong sharp C=O peak at 1700–1750 cm⁻¹ with no broad O−H absorption above 2500 cm⁻¹.",
      markScheme: [
        {
          point: "Alcohol shows broad O−H at 3200–3600 cm⁻¹ and lacks a C=O peak around 1700–1750 cm⁻¹.",
          keywords: ["3200", "3600"],
        },
        {
          point: "Carboxylic acid shows a very broad O−H at 2500–3000 cm⁻¹ together with a sharp C=O at 1700–1750 cm⁻¹.",
          keywords: ["2500", "3000"],
        },
        {
          point: "Ketone shows a sharp C=O peak at 1700–1750 cm⁻¹ with absence of any broad O−H absorption.",
          keywords: ["1700", "1750", "sharp c=o"],
        },
      ],
      commonError: "Saying 'both ethanol and ethanoic acid have O−H' without giving the distinct wavenumber ranges (`3200–3600` vs `2500–3000 cm⁻¹`).",
    },
    {
      id: "s3-2-organic-classification-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "proton-nmr-combined-hl",
      strategy: "State 3 independent chemical/spectroscopic advantages of TMS",
      marks: 3,
      question:
        "Give **three** distinct reasons why tetramethylsilane (`Si(CH₃)₄`, TMS) is used as the `δ = 0.0 ppm` reference standard in ¹H NMR spectroscopy.",
      hints: [
        "Think about the number of equivalent protons in `Si(CH₃)₄` and the resulting peak intensity.",
        "Compare the electronegativity of Si vs C (shielding position) and consider TMS's chemical reactivity and boiling point.",
      ],
      modelAnswer:
        "First, all 12 protons are chemically equivalent, producing one strong, sharp singlet even in tiny concentration. Second, silicon is less electronegative than carbon, leaving the protons strongly shielded so the reference resonates upfield of almost all organic peaks. Third, TMS is chemically unreactive (inert) and volatile (low boiling point of 27 °C), so it does not react with the sample and is easily evaporated afterwards.",
      markScheme: [
        {
          point: "12 chemically equivalent protons producing a single strong, sharp signal.",
          keywords: ["12", "equivalent", "single"],
        },
        {
          point: "Silicon is less electronegative than carbon, strongly shielding the protons so the signal lies upfield of organic signals.",
          keywords: ["shielded", "upfield", "electronegative"],
        },
        {
          point: "Chemically inert (unreactive) and volatile (low boiling point, easily removed).",
          keywords: ["inert", "unreactive", "volatile"],
        },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS — p1 (15 Qs, SL Core) & p2 (15 Qs, HL + Combined Analysis)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER P1 — 15 Questions (SL Core: Functional Groups, IUPAC, IHD, MS, IR)
    // -------------------------------------------------------------------------
    {
      id: "s3-2-organic-classification-p1",
      title: "Practice Paper 1 · Functional Groups, IUPAC, IHD, MS & IR [SL]",
      level: "SL",
      questions: [
        {
          id: "s3-2-organic-classification-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "homologous-series-iupac",
          strategy: "Distinguish functional group name from compound class",
          question: "State the official IB name of the **functional group** (not the compound class) present in `CH₃CH₂NH₂`.",
          answer: { type: "text", accept: ["amino", "amino group"], display: "amino" },
          hints: [
            "The compound belongs to the *class* amine; what is the *functional group* name for `−NH₂`?",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["amine", "primary amine"] },
              feedback: "Amine is the *compound class*—IB exams specifically name the `−NH₂` functional group **amino**.",
            },
          ],
          solution: [
            "Compound class: primary amine; functional group name: **amino** (`−NH₂`).",
          ],
          commonError: "Writing the compound class ('amine' or 'alcohol') instead of the functional group name ('amino' or 'hydroxyl').",
        },
        {
          id: "s3-2-organic-classification-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "homologous-series-iupac",
          strategy: "Number to give the hydroxyl carbon the lowest locant",
          question: "Give the IUPAC name of `CH₃CH(OH)CH₂CH₃`.",
          answer: { type: "text", accept: ["butan-2-ol", "2-butanol"], display: "butan-2-ol" },
          hints: [
            "Longest chain has 4 carbons (`butan-`) and the principal group is `−OH` (`-ol`).",
            "Number from the left so `−OH` is on C-2 rather than C-3.",
          ],
          solution: [
            "4-carbon chain (`butan-`) with `−OH` at C-2 → **butan-2-ol**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "homologous-series-iupac",
          strategy: "Split ester across C(=O) | O−R'",
          question: "Deduce the IUPAC name of the ester `CH₃CH₂CH₂COOCH₃`.",
          answer: { type: "text", accept: ["methyl butanoate"], display: "methyl butanoate" },
          hints: [
            "Identify the alkyl group attached to the single-bonded oxygen: `−O−CH₃`.",
            "Count all carbons on the carbonyl (acid) side including `C=O`: `CH₃CH₂CH₂COO−` has 4 carbons.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["propyl methanoate", "butyl methanoate"] },
              feedback: "Check which side holds the `C=O`! The `−CH₃` is on the single-bonded oxygen (`methyl`), and the 4-carbon chain contains `C=O` (`butanoate`).",
            },
          ],
          solution: [
            "Alcohol side `−O−CH₃` → **methyl**.",
            "Acid side `CH₃CH₂CH₂COO−` (4 carbons including `C=O`) → **butanoate**.",
            "IUPAC name: **methyl butanoate**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "homologous-series-iupac",
          strategy: "Alphabetical priority breaks a numbering locant tie",
          question: "Give the IUPAC name of `CH₃CH(CH₃)CH(Br)CH₃`.",
          answer: { type: "text", accept: ["2-bromo-3-methylbutane"], display: "2-bromo-3-methylbutane" },
          hints: [
            "Longest chain = 4 carbons (`butane`), carrying one `bromo` and one `methyl` substituent.",
            "Numbering from either end gives the same locant set `{2, 3}`—break the tie alphabetically (`b` before `m`)!",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["3-bromo-2-methylbutane"] },
              feedback: "Both directions give locant set `{2, 3}`, so give the lower number to the alphabetically earlier substituent (`bromo` before `methyl`).",
            },
          ],
          solution: [
            "Longest chain: 4 carbons (`butane`).",
            "Substituents sit at C-2 and C-3 from either end; alphabetical tie-break assigns C-2 to `bromo` and C-3 to `methyl`.",
            "IUPAC name: **2-bromo-3-methylbutane**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q05",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Determine",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Systematically shorten the parent chain to count chain isomers",
          question: "How many structural isomers exist for the alkane with molecular formula `C₅H₁₂`? Enter a whole number.",
          answer: { type: "number", value: 3, display: "3" },
          hints: [
            "Start with a 5-carbon chain (`pentane`), then shorten to a 4-carbon chain with 1 methyl, then a 3-carbon chain with 2 methyls.",
          ],
          solution: [
            "5-C chain: `pentane` (1).",
            "4-C chain: `2-methylbutane` (1; C-2 and C-3 are identical).",
            "3-C chain: `2,2-dimethylpropane` (1).",
            "Total structural isomers = **3**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Apply IHD with C, H, N, and ignored O",
          question: "Caffeine has molecular formula `C₈H₁₀N₄O₂`. Calculate its Index of Hydrogen Deficiency (IHD). Enter a whole number.",
          answer: { type: "number", value: 6, display: "6" },
          hints: [
            "Use `IHD = (2C + 2 + N − H − X) / 2` with `C = 8`, `H = 10`, `N = 4`, and ignore `O = 2`.",
            "Evaluate `(16 + 2 + 4 − 10) / 2`.",
          ],
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Remember nitrogen **adds** `+N` in the IHD formula (`+4`, not `−4`).",
            },
          ],
          solution: [
            "Oxygen is omitted; `IHD = (2(8) + 2 + 4 − 10) / 2 = 12 / 2 = 6`.",
            "Structurally, caffeine contains 2 fused rings + 2 `C=O` bonds + 1 `C=C` bond + 1 `C=N` bond = 6.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Add N and subtract halogens X in IHD",
          question: "Calculate the Index of Hydrogen Deficiency (IHD) of `C₄H₅Cl₂N`. Enter a whole number.",
          answer: { type: "number", value: 2, display: "2" },
          hints: [
            "Identify `C = 4`, `H = 5`, `N = 1`, and halogens `X = 2`.",
            "Compute `(2×4 + 2 + 1 − 5 − 2) / 2`.",
          ],
          solution: [
            "`IHD = (2(4) + 2 + 1 − 5 − 2) / 2 = (11 − 7) / 2 = 4 / 2 = 2`.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Mass lost = M+ − fragment m/z",
          question:
            "In the mass spectrum of propanoic acid (`C₃H₆O₂`), the molecular ion peak `M⁺` fragments to form the `COOH⁺` cation at `m/z = 45`. Calculate the relative mass of the uncharged radical lost. Use `C = 12, H = 1, O = 16`.",
          answer: { type: "number", value: 29, display: "29" },
          hints: [
            "First calculate `M_r` of `C₃H₆O₂`: `3(12) + 6(1) + 2(16)`.",
            "Subtract the fragment ion mass (`45`) from `M⁺`.",
          ],
          solution: [
            "`M⁺(C₃H₆O₂) = 36 + 6 + 32 = 74`.",
            "Mass lost = `74 − 45 = 29` (the ethyl radical, `C₂H₅•`).",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Sum atomic masses of the acylium fragment ion",
          question:
            "Methyl benzoate (`C₆H₅COOCH₃`) forms a strong acylium fragment ion `C₆H₅CO⁺` in its mass spectrum. Calculate the `m/z` value of this ion using `C = 12, H = 1, O = 16`.",
          answer: { type: "number", value: 105, display: "105" },
          hints: [
            "Count all atoms in `C₆H₅CO⁺`: 7 carbons, 5 hydrogens, and 1 oxygen.",
            "Evaluate `7 × 12 + 5 × 1 + 16`.",
          ],
          solution: [
            "`C₆H₅CO⁺` has formula `C₇H₅O⁺`.",
            "`m/z = 7(12) + 5(1) + 16 = 84 + 5 + 16 = 105`.",
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "homologous-series-iupac",
          strategy: "Compare strongest intermolecular force in each similarly-sized molecule",
          marks: 3,
          question:
            "Pentane (`M_r = 72`, `bp 36 °C`), butanal (`M_r = 72`, `bp 75 °C`), and butan-1-ol (`M_r = 74`, `bp 118 °C`) have almost identical molar masses. Explain the trend in their boiling points.",
          hints: [
            "Since all three have nearly equal molar masses, London dispersion forces are comparable—so look at the *strongest* intermolecular force in each liquid.",
            "Link non-polar alkane → polar carbonyl → hydroxyl group (`O−H`).",
          ],
          modelAnswer:
            "All three molecules have similar molar masses and therefore comparable London dispersion forces. Pentane is non-polar and experiences only weak London dispersion forces, giving the lowest boiling point. Butanal contains a polar C=O bond and experiences stronger permanent dipole–dipole attractions, raising its boiling point. Butan-1-ol contains an −OH group capable of strong intermolecular hydrogen bonding, requiring the most thermal energy to separate molecules and giving the highest boiling point.",
          markScheme: [
            {
              point: "Pentane is non-polar with only weak London dispersion forces (lowest boiling point).",
              keywords: ["london", "dispersion", "non-polar"],
            },
            {
              point: "Butanal is polar (C=O) and has stronger permanent dipole–dipole attractions.",
              keywords: ["dipole"],
            },
            {
              point: "Butan-1-ol forms strong intermolecular hydrogen bonds via its −OH group (highest boiling point).",
              keywords: ["hydrogen bond"],
            },
          ],
          commonError: "Saying 'covalent bonds break during boiling' instead of comparing intermolecular forces.",
        },
        {
          id: "s3-2-organic-classification-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "homologous-series-iupac",
          strategy: "Contrast α-carbon rule (alcohols) with N-atom rule (amines)",
          marks: 3,
          question:
            "Classify `2-methylpropan-2-ol`, `(CH₃)₃COH`, and `2-methylpropan-2-amine`, `(CH₃)₃CNH₂`, as primary, secondary, or tertiary, and explain why their classifications differ.",
          hints: [
            "For alcohols, count carbons bonded to the α-carbon carrying `−OH`.",
            "For amines, count carbons bonded **directly to the nitrogen atom** (`R−NH₂`, `R₂NH`, `R₃N`).",
          ],
          modelAnswer:
            "2-methylpropan-2-ol is a tertiary (3°) alcohol because the α-carbon atom carrying the hydroxyl group is bonded directly to three other carbon atoms. In contrast, 2-methylpropan-2-amine is a primary (1°) amine because amines are classified by the number of carbon atoms bonded directly to the nitrogen atom, and here nitrogen is attached to only one carbon atom (and two hydrogen atoms).",
          markScheme: [
            {
              point: "Identifies (CH₃)₃COH as a tertiary (3°) alcohol because the C−OH carbon is bonded to three carbons.",
              keywords: ["tertiary", "three"],
            },
            {
              point: "Identifies (CH₃)₃CNH₂ as a primary (1°) amine.",
              keywords: ["primary"],
            },
            {
              point: "Explains that amine degree counts carbons bonded directly to the nitrogen atom (only one carbon on N).",
              keywords: ["nitrogen", "one carbon"],
            },
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Enumerate carboxylic acid and ester functional isomers then pair IR + MS tests",
          marks: 4,
          question:
            "Give the IUPAC names and condensed structural formulas of **three** structural isomers with molecular formula `C₃H₆O₂` (one carboxylic acid and two esters), and outline how **IR spectroscopy** separates the acid from the esters.",
          hints: [
            "For `C₃H₆O₂`, the 3-carbon carboxylic acid is propanoic acid (`CH₃CH₂COOH`).",
            "Split the 3 carbons across `R−COO−R'` in two ways: `C2 + C1` (`CH₃COOCH₃`) and `C1 + C2` (`HCOOCH₂CH₃`).",
            "Compare the broad `2500–3000 cm⁻¹` `O−H` trough in the acid with its complete absence in both esters.",
          ],
          modelAnswer:
            "The three isomers are: (1) propanoic acid, CH₃CH₂COOH; (2) methyl ethanoate, CH₃COOCH₃; and (3) ethyl methanoate, HCOOCH₂CH₃. While all three display a strong sharp C=O peak at 1700–1750 cm⁻¹ in their IR spectra, only propanoic acid exhibits a very broad O−H stretching absorption across 2500–3000 cm⁻¹; both esters completely lack any broad O−H band above 2500 cm⁻¹.",
          markScheme: [
            {
              point: "Correctly names and writes propanoic acid (CH₃CH₂COOH).",
              keywords: ["propanoic acid", "ch3ch2cooh"],
            },
            {
              point: "Correctly names and writes methyl ethanoate (CH₃COOCH₃).",
              keywords: ["methyl ethanoate", "ch3cooch3"],
            },
            {
              point: "Correctly names and writes ethyl methanoate (HCOOCH₂CH₃).",
              keywords: ["ethyl methanoate", "hcooch2ch3"],
            },
            {
              point: "Uses IR: acid shows very broad O−H at 2500–3000 cm⁻¹ whereas esters lack any O−H absorption.",
              keywords: ["2500", "3000", "lack"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant isomers or IR reasoning provided." },
            { band: "1–2", marks: [1, 2], descriptor: "Correctly gives 1–2 isomers or incomplete IR distinction without wavenumber ranges." },
            { band: "3", marks: [3, 3], descriptor: "All three isomers correct but IR explanation omits wavenumber range or ester absence of O−H." },
            { band: "4", marks: [4, 4], descriptor: "All three isomers named accurately with condensed formulas plus precise IR distinction citing 2500–3000 cm⁻¹ O−H." },
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Connect vibrational modes directly to net dipole moment change",
          marks: 3,
          question:
            "Even though both `CO₂` and `N₂` are non-polar linear molecules, `CO₂` strongly absorbs infrared radiation whereas `N₂` is completely IR-transparent. Explain this difference.",
          hints: [
            "State the fundamental selection rule for IR absorption (change in dipole moment).",
            "Contrast `N₂`'s single symmetric bond stretch with `CO₂`'s asymmetric stretch and bending vibrations.",
          ],
          modelAnswer:
            "A molecular vibration absorbs infrared radiation only if it causes a change in the molecule's overall dipole moment. In homonuclear N₂, the single stretching mode keeps the bond completely symmetrical so the dipole moment remains zero at all times, making N₂ IR-inactive. In linear CO₂, although the symmetric stretch is IR-inactive, the asymmetric stretching and bending vibrations create temporary unequal charge distributions that change the net dipole moment, allowing CO₂ to absorb IR photons.",
          markScheme: [
            {
              point: "IR absorption requires a vibrational mode that produces a change in molecular dipole moment.",
              keywords: ["change", "dipole moment"],
            },
            {
              point: "N₂ is homonuclear and its only stretch keeps dipole moment zero throughout (IR-inactive).",
              keywords: ["homonuclear", "zero", "ir-inactive"],
            },
            {
              point: "CO₂ undergoes asymmetric stretching and/or bending vibrations that generate a changing dipole moment.",
              keywords: ["asymmetric", "bending"],
            },
          ],
        },
        {
          id: "s3-2-organic-classification-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Deduce",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Empirical formula → M+ → IHD → IR functional group → MS fragments",
          marks: 4,
          question:
            "Compound **A** contains `54.5% C`, `9.1% H`, and `36.4% O` by mass (`C = 12, H = 1, O = 16`). Its mass spectrum shows `M⁺ = 88` alongside major fragments at `m/z = 73` and `m/z = 45`. Its IR spectrum shows a sharp band at `1715 cm⁻¹` and a very broad band from `2500–3000 cm⁻¹`. Deduce the empirical formula, molecular formula, IHD, and functional group of **A**, and identify the `m/z = 45` ion.",
          hints: [
            "Divide `%` by `A_r`: `54.5/12 = 4.54`, `9.1/1 = 9.10`, `36.4/16 = 2.275`, then divide all three by the smallest (`2.275`).",
            "Compare empirical formula mass (`44`) with `M⁺ = 88` to get the molecular formula.",
            "Combine IHD (`1`) with the `1715 cm⁻¹` + `2500–3000 cm⁻¹` IR bands and verify `m/z = 45` (`COOH⁺`).",
          ],
          modelAnswer:
            "Mole ratio C : H : O = 54.5/12 : 9.1/1 : 36.4/16 = 4.54 : 9.10 : 2.275, dividing by 2.275 gives 2 : 4 : 1, so the empirical formula is C₂H₄O (mass 44). Since M⁺ = 88, the multiplier is 88/44 = 2, giving molecular formula C₄H₈O₂ with IHD = (2×4 + 2 − 8)/2 = 1. The sharp 1715 cm⁻¹ (C=O) and very broad 2500–3000 cm⁻¹ (O−H) IR absorptions confirm a carboxyl functional group (carboxylic acid: butanoic or 2-methylpropanoic acid). The m/z = 45 peak corresponds to the COOH⁺ fragment ion (loss of C₃H₇• = 43; and m/z = 73 is M − 15, loss of CH₃•).",
          markScheme: [
            {
              point: "Calculates empirical formula C₂H₄O from % composition.",
              keywords: ["c2h4o", "c₂h₄o", "44"],
            },
            {
              point: "Deduces molecular formula C₄H₈O₂ (88/44 = 2) and IHD = 1.",
              keywords: ["c4h8o2", "c₄h₈o₂", "ihd = 1"],
            },
            {
              point: "Identifies carboxyl functional group / carboxylic acid from IR C=O and broad acid O−H.",
              keywords: ["carboxyl", "carboxylic acid"],
            },
            {
              point: "Identifies the m/z = 45 fragment ion as COOH⁺ (with positive charge).",
              keywords: ["cooh+", "cooh⁺"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid formula or spectroscopic deductions." },
            { band: "1–2", marks: [1, 2], descriptor: "Finds empirical or molecular formula correctly, or identifies carboxylic acid from IR without completing calculations." },
            { band: "3", marks: [3, 3], descriptor: "Correct formulas, IHD, and carboxylic acid class, but omits charge on COOH⁺ or omits IHD." },
            { band: "4", marks: [4, 4], descriptor: "Complete, rigorous chain: C₂H₄O → C₄H₈O₂ (IHD = 1) → carboxylic acid from IR → COOH⁺ fragment ion." },
          ],
          commonError: "Writing `COOH` without the `+` charge when identifying the `m/z = 45` fragment ion.",
        },
        {
          id: "s3-2-organic-classification-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "ihd-ms-ir-spectroscopy",
          strategy: "Stage 1: IR splits alcohol from carbonyls; Stage 2: MS splits aldehyde from ketone",
          marks: 5,
          question:
            "Three isomers share molecular formula `C₃H₆O` (`M_r = 58`; `C = 12, H = 1, O = 16`): **propanal**, **propanone**, and **prop-2-en-1-ol** (`CH₂=CHCH₂OH`). Explain how **infrared spectroscopy** and **mass spectrometry** together uniquely identify each isomer.",
          hints: [
            "First use IR: which single isomer has `O−H` (`3200–3600 cm⁻¹`) and `C=C` (`1620–1680 cm⁻¹`) instead of `C=O` (`1700–1750 cm⁻¹`)?",
            "Next separate propanal (`CH₃CH₂CHO`) from propanone (`CH₃COCH₃`) by comparing their key α-cleavage ions in MS (`m/z = 43` vs `m/z = 29`).",
          ],
          modelAnswer:
            "First, infrared spectroscopy immediately separates prop-2-en-1-ol from the two carbonyl isomers: prop-2-en-1-ol exhibits a strong broad O−H band at 3200–3600 cm⁻¹ and a C=C band at 1620–1680 cm⁻¹, with no C=O absorption near 1700–1750 cm⁻¹. Both propanal and propanone display a strong sharp C=O peak at 1700–1750 cm⁻¹ and no broad O−H absorption. Second, mass spectrometry distinguishes the two carbonyls (both M⁺ = 58): propanone loses CH₃• (15) to give a prominent base peak at m/z = 43 due to CH₃CO⁺, whereas propanal cleaves next to the aldehyde carbon to produce a strong peak at m/z = 29 due to C₂H₅⁺ and/or CHO⁺ (loss of 29).",
          markScheme: [
            {
              point: "IR identifies prop-2-en-1-ol via broad O−H (3200–3600 cm⁻¹) and/or C=C (1620–1680 cm⁻¹) with no C=O.",
              keywords: ["3200", "3600", "1620"],
            },
            {
              point: "IR groups propanal and propanone together via strong sharp C=O at 1700–1750 cm⁻¹ (no O−H).",
              keywords: ["1700", "1750"],
            },
            {
              point: "MS identifies propanone via loss of 15 (CH₃•) producing a dominant m/z = 43 peak.",
              keywords: ["43", "ch3co+"],
            },
            {
              point: "MS identifies propanal via cleavage producing a strong m/z = 29 peak.",
              keywords: ["29", "cho+", "c2h5+"],
            },
            {
              point: "Clearly links charged fragment ion formulas (with +) and absence of conflicting bands to all three isomers.",
              keywords: ["loss of 29", "base peak", "no c=o"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid spectroscopic separation described." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies one functional-group IR difference or one MS peak without linking clearly to all three isomers." },
            { band: "3–4", marks: [3, 4], descriptor: "Distinguishes all three isomers logically using IR and MS, with minor omissions in wavenumber ranges or ion charges." },
            { band: "5", marks: [5, 5], descriptor: "Complete, rigorous two-stage separation citing exact IR ranges and charged MS fragment ions (CH₃CO⁺ at 43; C₂H₅⁺/CHO⁺ at 29)." },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER P2 — 15 Questions (HL Stereoisomerism, ¹H NMR & Combined Analysis)
    // -------------------------------------------------------------------------
    {
      id: "s3-2-organic-classification-p2",
      title: "Practice Paper 2 · Stereoisomerism, ¹H NMR & Combined Analysis [HL]",
      level: "HL",
      questions: [
        {
          id: "s3-2-organic-classification-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Identify",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "CIP atomic number priority: Z = same side, E = opposite sides",
          question:
            "In an isomer of `1-bromo-2-chloroethene` (`BrHC=CHCl`), the `−Br` and `−Cl` atoms lie on **opposite sides** of the `C=C` bond. State whether this is the `E` or `Z` isomer.",
          answer: { type: "text", accept: ["E", "(E)", "E-isomer"], display: "E" },
          hints: [
            "On C-1, `Br (Z=35) > H (Z=1)`. On C-2, `Cl (Z=17) > H (Z=1)`.",
            "Higher-priority groups on opposite sides = `E` (*entgegen*).",
          ],
          solution: [
            "Priority 1 on C-1 is `−Br`; priority 1 on C-2 is `−Cl`.",
            "Since they sit on opposite sides of the double bond, the isomer is **`(E)`**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Check atomic number Z carefully when halogen competes with methyl",
          question:
            "In a stereoisomer of `2-chlorobut-2-ene` (`CH₃C(Cl)=CHCH₃`), the two `−CH₃` groups lie on the **same side** of the `C=C` bond. State whether this is the `E` or `Z` isomer.",
          answer: { type: "text", accept: ["E", "(E)", "E-isomer"], display: "E" },
          hints: [
            "On C-2, compare `−Cl (Z=17)` vs `−CH₃ (C, Z=6)` → `−Cl` is priority 1.",
            "On C-3, compare `−CH₃ (C, Z=6)` vs `−H (Z=1)` → `−CH₃` is priority 1. Now locate `−Cl` relative to the C-3 `−CH₃`!",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["Z", "(Z)", "Z-isomer"] },
              feedback: "Careful! Although both `−CH₃` groups are *cis*, `−Cl` outranks `−CH₃` on C-2, putting the two priority-1 groups (`−Cl` and C-3 `−CH₃`) on **opposite** sides → `(E)`!",
            },
          ],
          solution: [
            "On C-2: `−Cl` (1) > `−CH₃` (2). On C-3: `−CH₃` (1) > `−H` (2).",
            "With both `−CH₃` groups on the same side, priority-1 `−Cl` and priority-1 `−CH₃` lie on opposite sides → **`(E)`**.",
          ],
          commonError: "Assuming *cis* identical groups automatically give a `(Z)` stereoisomer without applying CIP atomic-number rankings.",
        },
        {
          id: "s3-2-organic-classification-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Check for 4 distinct groups on each chain carbon",
          question:
            "How many chiral carbon atoms are present in `3-methylhexane`, `CH₃CH₂CH(CH₃)CH₂CH₂CH₃`? Enter a whole number.",
          answer: { type: "number", value: 1, display: "1" },
          hints: [
            "Every `−CH₃` and `−CH₂−` carbon has ≥2 identical H atoms and cannot be chiral.",
            "Inspect C-3: it is bonded to `−H`, `−CH₃`, `−CH₂CH₃` (ethyl), and `−CH₂CH₂CH₃` (propyl).",
          ],
          solution: [
            "C-3 is bonded to four distinct groups (`−H`, `−CH₃`, `−C₂H₅`, `−C₃H₇`).",
            "Total chiral carbons = **1**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Maximum stereoisomers = 2^n for n asymmetric chiral centres",
          question:
            "An acyclic carbohydrate molecule has **3** chiral carbon atoms and no internal plane of symmetry. Calculate the total number of optical stereoisomers possible. Enter a whole number.",
          answer: { type: "number", value: 8, display: "8" },
          hints: [
            "Each independent chiral centre can adopt 2 configurations (`+` or `−`, i.e. `R` or `S`).",
            "Compute `2³`.",
          ],
          solution: [
            "With `n = 3` chiral centres and no meso symmetry, total optical isomers = `2³ = 8` (4 pairs of enantiomers).",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q05",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "State",
          guideRef: "proton-nmr-combined-hl",
          strategy: "High symmetry collapses all protons into one environment",
          question:
            "How many signals appear in the ¹H NMR spectrum of `2,2-dimethylpropane`, `C(CH₃)₄`? Enter a whole number.",
          answer: { type: "number", value: 1, display: "1" },
          hints: [
            "All four `−CH₃` groups are bonded identically to the central tetrahedral carbon.",
          ],
          solution: [
            "All 12 protons are chemically equivalent by tetrahedral symmetry → **1** singlet signal.",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Check left vs right symmetry around C=O",
          question:
            "How many distinct ¹H NMR signals appear for `pentan-2-one`, `CH₃COCH₂CH₂CH₃`? Enter a whole number.",
          answer: { type: "number", value: 4, display: "4" },
          hints: [
            "Is the molecule symmetric around the `C=O` carbon (C-2)? No: methyl on the left, propyl on the right!",
            "Count the distinct proton-bearing carbons: C-1 (`CH₃`), C-3 (`CH₂`), C-4 (`CH₂`), and C-5 (`CH₃`).",
          ],
          solution: [
            "C-1 (`3H` singlet), C-3 (`2H` triplet), C-4 (`2H` sextet), and C-5 (`3H` triplet) are all non-equivalent → **4** signals.",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Predict",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Apply n + 1 counting adjacent C−H protons (excluding rapidly exchanging −OH)",
          question:
            "In high-resolution ¹H NMR of `propan-2-ol`, `(CH₃)₂CHOH` (ignoring coupling with the rapidly exchanging `−OH` proton), into how many lines does the single **`−CH(OH)−`** proton signal split? Enter a whole number.",
          answer: { type: "number", value: 7, display: "7" },
          hints: [
            "Count the non-equivalent protons on the carbon atoms directly adjacent to `−CH(OH)−`.",
            "Two equivalent `−CH₃` groups give `n = 6` adjacent protons → evaluate `n + 1`.",
          ],
          solution: [
            "The methine proton `−CH(OH)−` has `n = 6` equivalent adjacent methyl protons.",
            "`n + 1 = 6 + 1 = 7` lines (a **septet**).",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Count protons in each symmetric environment and simplify ratio",
          question:
            "In the ¹H NMR spectrum of `1,3,5-trimethylbenzene` (`C₆H₃(CH₃)₃`), give the simplest whole-number integration ratio of **methyl protons to aromatic ring protons** (write as `a : b`).",
          answer: { type: "ratio", parts: [3, 1], simplest: true, display: "3 : 1" },
          hints: [
            "Count total methyl protons (`3 × 3 = 9`) and total aromatic ring protons (`3`).",
            "Simplify `9 : 3` to lowest whole numbers.",
          ],
          solution: [
            "By three-fold symmetry, all 9 methyl protons are equivalent and all 3 ring protons are equivalent.",
            "Integration ratio (methyl : aromatic) = `9 : 3` = **`3 : 1`**.",
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Check both conditions: restricted rotation AND two different groups on each C",
          marks: 3,
          question:
            "Explain why **but-2-ene** exhibits cis–trans (E/Z) stereoisomerism whereas **but-1-ene** and **2-methylpropene** do not.",
          hints: [
            "First state why `C=C` restricts rotation (π bond).",
            "Then inspect the two groups attached to C-1 in `but-1-ene` and `2-methylpropene` (`=CH₂`) vs both carbons in `but-2-ene`.",
          ],
          modelAnswer:
            "Cis–trans (E/Z) stereoisomerism requires restricted rotation around the C=C double bond (due to the π bond) AND two different atoms or groups attached to each carbon of the double bond. In but-2-ene (CH₃CH=CHCH₃), both C-2 and C-3 carry two different groups (−H and −CH₃), allowing (E) and (Z) arrangements. In both but-1-ene (CH₂=CHCH₂CH₃) and 2-methylpropene (CH₂=C(CH₃)₂), carbon-1 is bonded to two identical hydrogen atoms, so swapping substituents produces the identical molecule.",
          markScheme: [
            {
              point: "Restricted rotation about the C=C double bond due to the π bond.",
              keywords: ["restricted rotation", "π bond", "pi bond"],
            },
            {
              point: "But-2-ene has two different groups (−H and −CH₃) on each C=C carbon.",
              keywords: ["two different", "each carbon"],
            },
            {
              point: "But-1-ene and 2-methylpropene each have two identical H atoms on C-1 (so no stereoisomers).",
              keywords: ["identical", "two identical"],
            },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "structural-isomers-stereoisomers-hl",
          strategy: "Contrast structural relationship, physical properties, polarimeter rotation, and chiral reactivity",
          marks: 4,
          question:
            "Compare and contrast **enantiomers** and **diastereomers** in terms of mirror-image relationship, physical properties, and behaviour towards plane-polarized light and chiral reagents, and explain why a **racemic mixture** is optically inactive.",
          hints: [
            "Mirror image? Physical properties (bp/mp/solubility)?",
            "Opposite equal rotations of plane-polarized light; reactivity towards chiral enzymes/receptors; 50:50 cancellation in a racemate.",
          ],
          modelAnswer:
            "Enantiomers are non-superimposable mirror images of each other, whereas diastereomers are stereoisomers that are not mirror images. Enantiomers share identical physical properties (melting point, boiling point, solubility) and identical reactivity with achiral reagents, whereas diastereomers have different physical properties. Pure enantiomers rotate plane-polarized light by equal angles in opposite directions and react differently with other chiral molecules such as enzymes. A racemic mixture contains an equimolar (50:50) blend of both enantiomers, so their equal and opposite rotations cancel out, rendering it optically inactive.",
          markScheme: [
            {
              point: "Enantiomers are non-superimposable mirror images; diastereomers are non-mirror-image stereoisomers.",
              keywords: ["mirror image", "non-superimposable"],
            },
            {
              point: "Enantiomers have identical physical properties, whereas diastereomers have different physical properties.",
              keywords: ["identical physical", "different physical"],
            },
            {
              point: "Enantiomers rotate plane-polarized light equally in opposite directions and interact differently with chiral molecules/enzymes.",
              keywords: ["opposite directions", "chiral", "enzymes"],
            },
            {
              point: "Racemic mixture is 50:50 / equimolar so equal and opposite optical rotations cancel out.",
              keywords: ["equimolar", "50:50", "cancel"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate stereochemical comparison." },
            { band: "1–2", marks: [1, 2], descriptor: "States basic definition of enantiomers or racemic mixture without contrasting diastereomers clearly." },
            { band: "3", marks: [3, 3], descriptor: "Accurate comparison of enantiomers and diastereomers plus racemate cancellation, omitting one detail (e.g. chiral reactivity)." },
            { band: "4", marks: [4, 4], descriptor: "Thorough, precise contrast across mirror relationship, physical properties, optical/chiral behaviour, and racemate cancellation." },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Predict",
          guideRef: "proton-nmr-combined-hl",
          strategy: "State number of signals, integration, δ shifts, splitting, and OH exchange",
          marks: 4,
          question:
            "Predict the high-resolution ¹H NMR spectrum of **ethanol** (`CH₃CH₂OH`), stating the number of signals, relative integration, approximate chemical shift (`δ`) ranges, and splitting pattern for each environment.",
          hints: [
            "List the 3 environments: `−CH₃`, `−CH₂−`, and `−OH`.",
            "Give `δ` ranges (`~1.2`, `~3.7`, variable `1–6 ppm`) and apply `n + 1` (remember rapid exchange keeps `−OH` a singlet!).",
          ],
          modelAnswer:
            "Ethanol produces 3 distinct signals with relative integration 3 : 2 : 1. The −CH₃ protons (3H) appear upfield around δ = 0.9–1.3 ppm as a triplet (1:2:1) because of 2 adjacent protons on −CH₂−. The −CH₂− protons (2H) are deshielded by oxygen to δ = 3.3–4.0 ppm and split into a quartet (1:3:3:1) by the 3 adjacent −CH₃ protons. The −OH proton (1H) appears as a broad singlet at a variable shift between 1.0 and 6.0 ppm (typically ~2–5 ppm) because rapid intermolecular proton exchange prevents spin–spin splitting.",
          markScheme: [
            {
              point: "States 3 signals with relative integration 3 : 2 : 1.",
              keywords: ["3 : 2 : 1", "3:2:1"],
            },
            {
              point: "Assigns −CH₃ (3H) as a triplet around 0.9–1.3 ppm (2 adjacent H).",
              keywords: ["triplet", "0.9"],
            },
            {
              point: "Assigns −CH₂− (2H) as a quartet around 3.3–4.0 ppm (3 adjacent H, deshielded by O).",
              keywords: ["quartet", "3.3"],
            },
            {
              point: "Assigns −OH (1H) as a broad singlet (variable 1–6 ppm) due to rapid proton exchange.",
              keywords: ["singlet", "exchange"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid NMR predictions." },
            { band: "1–2", marks: [1, 2], descriptor: "Correct number of signals and integration, with partial splitting or chemical shifts." },
            { band: "3", marks: [3, 3], descriptor: "Correct signals, shifts, and triplet/quartet splitting, omitting why −OH is an unsplit singlet." },
            { band: "4", marks: [4, 4], descriptor: "Complete high-resolution prediction covering all 3 signals, 3:2:1 integration, IB shifts, triplet/quartet, and exchanging OH singlet." },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Contrast number of signals, aldehyde δ ~9.8 ppm, and splitting",
          marks: 4,
          question:
            "Explain how high-resolution ¹H NMR spectroscopy distinguishes **propanal** (`CH₃CH₂CHO`) from its functional-group isomer **propanone** (`CH₃COCH₃`).",
          hints: [
            "Count environments first: propanone is symmetric (`1` signal), while propanal is unsymmetrical (`3` signals).",
            "Mention propanal's diagnostic aldehyde peak (`9.4–10.0 ppm`) and splitting patterns vs propanone's single singlet (`~2.1 ppm`).",
          ],
          modelAnswer:
            "Propanone is completely symmetrical and gives only 1 signal—a 6H singlet around δ = 2.0–2.2 ppm because all six methyl protons are chemically equivalent with no adjacent protons. In contrast, propanal gives 3 signals with integration ratio 1 : 2 : 3. Propanal features a highly diagnostic aldehyde (−CHO) signal far downfield at δ = 9.4–10.0 ppm (1H, triplet or narrow multiplet), alongside a −CH₂− signal near 2.2–2.7 ppm (2H, quartet/multiplet) and a −CH₃ triplet near 0.9–1.2 ppm (3H).",
          markScheme: [
            {
              point: "Propanone produces only 1 signal (6H singlet) due to symmetry.",
              keywords: ["1 signal", "6h singlet"],
            },
            {
              point: "Propanone signal appears around δ = 2.0–2.2 ppm (R−CO−CH₃).",
              keywords: ["2.0", "2.2"],
            },
            {
              point: "Propanal produces 3 signals with integration 1 : 2 : 3.",
              keywords: ["3 signals", "1 : 2 : 3", "3:2:1"],
            },
            {
              point: "Propanal shows a diagnostic aldehyde −CHO signal at 9.4–10.0 ppm (plus triplet/quartet ethyl peaks).",
              keywords: ["9.4", "10.0", "aldehyde"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid NMR distinction." },
            { band: "1–2", marks: [1, 2], descriptor: "States difference in number of peaks (1 vs 3) without chemical shifts or splitting." },
            { band: "3", marks: [3, 3], descriptor: "Includes peak counts, integration, and aldehyde shift, with minor detail missing." },
            { band: "4", marks: [4, 4], descriptor: "Complete contrast of symmetry, peak count, integration, diagnostic δ ranges, and splitting." },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Combine IHD, IR ester confirmation, ¹H NMR −O−CH₃ anchor at 3.7 ppm, and MS m/z = 57",
          marks: 5,
          question:
            "Compound **B** has molecular formula `C₄H₈O₂` (`M⁺ = 88`; `C = 12, H = 1, O = 16`). Its IR spectrum shows a strong sharp band at `1740 cm⁻¹` and no broad band between `2500` and `3600 cm⁻¹`. Its mass spectrum has prominent fragments at `m/z = 57` and `m/z = 59`. Its ¹H NMR spectrum displays three peaks: `δ = 3.7 ppm` (3H singlet), `δ = 2.3 ppm` (2H quartet), and `δ = 1.15 ppm` (3H triplet). Deduce the structure of **B** and explain why it cannot be ethyl ethanoate.",
          hints: [
            "Calculate IHD (`1`) and use IR (`1740 cm⁻¹`, no `O−H`) to prove **B** is an ester.",
            "Look at which peak lies furthest downfield (`3.7 ppm` → bonded directly to `−O−`): it is the **3H singlet** (`−O−CH₃`), NOT the 2H quartet!",
            "Check `m/z = 57` (`C₂H₅CO⁺`, `88 − 31` loss of `CH₃O•`) vs ethyl ethanoate (`m/z = 43` `CH₃CO⁺`).",
          ],
          modelAnswer:
            "From C₄H₈O₂, IHD = (2×4 + 2 − 8)/2 = 1. The sharp IR peak at 1740 cm⁻¹ confirms C=O, and the complete absence of broad O−H absorption (2500–3600 cm⁻¹) rules out carboxylic acids, proving an ester. In the ¹H NMR spectrum, the 2H quartet (2.3 ppm) and 3H triplet (1.15 ppm) show an ethyl group (−CH₂CH₃) next to C=O, while the strongly deshielded 3H singlet at 3.7 ppm proves a methyl group bonded directly to the single-bonded oxygen (−O−CH₃). Thus B is methyl propanoate (CH₃CH₂COOCH₃). This is confirmed by MS: loss of CH₃O• (31) gives C₂H₅CO⁺ at m/z = 57 (and loss of C₂H₅• = 29 gives COOCH₃⁺ at m/z = 59). Ethyl ethanoate (CH₃COOCH₂CH₃) is ruled out because its −O−CH₂− quartet would sit downfield at ~4.1 ppm (with a 3H singlet at 2.0 ppm) and its MS base peak would be m/z = 43 (CH₃CO⁺), not 57.",
          markScheme: [
            {
              point: "Computes IHD = 1 and deduces ester from IR C=O (1740 cm⁻¹) plus absence of O−H.",
              keywords: ["ihd = 1", "ester"],
            },
            {
              point: "Assigns 3H singlet at 3.7 ppm to −O−CH₃ (deshielded by single-bonded ester oxygen).",
              keywords: ["-o-ch3", "−o−ch₃", "3.7"],
            },
            {
              point: "Assigns 2H quartet (2.3 ppm) + 3H triplet (1.15 ppm) to CH₃CH₂−C(=O)− ethyl acyl chain.",
              keywords: ["ethyl", "2.3", "quartet"],
            },
            {
              point: "Identifies compound B as methyl propanoate (CH₃CH₂COOCH₃).",
              keywords: ["methyl propanoate", "ch3ch2cooch3"],
            },
            {
              point: "Rules out ethyl ethanoate using NMR shift swap (~4.1 ppm quartet / 2.0 ppm singlet) and/or MS m/z = 57 (C₂H₅CO⁺) vs 43.",
              keywords: ["4.1", "c2h5co+", "57"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid deduction." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies ester from IR or ethyl group from NMR, but reaches wrong isomer or lacks justification." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly deduces methyl propanoate with NMR/IR evidence, but omits MS fragment assignment or explicit comparison with ethyl ethanoate." },
            { band: "5", marks: [5, 5], descriptor: "Complete, airtight deduction linking IHD, IR, NMR shift assignment, MS ions (C₂H₅CO⁺ at 57), and explicit refutation of ethyl ethanoate." },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Combine broad alcohol O−H IR, MS M−15, and isopropyl 6H doublet + 1H septet NMR",
          marks: 5,
          question:
            "Unknown liquid **C** has molecular formula `C₃H₈O` (`M⁺ = 60`; `C = 12, H = 1, O = 16`). Its IR spectrum shows a strong broad band at `3350 cm⁻¹` and no peak near `1720 cm⁻¹`. Its mass spectrum has a base peak at `m/z = 45`. Its ¹H NMR shows three signals: `δ = 4.0 ppm` (1H septet), `δ = 2.3 ppm` (1H broad singlet that disappears on shaking with `D₂O`), and `δ = 1.2 ppm` (6H doublet). Deduce the exact structure of **C**, justifying every analytical clue.",
          hints: [
            "Check `IHD = 0` and broad `3350 cm⁻¹` (alcohol `O−H`, ruling out methoxyethane).",
            "Between `propan-1-ol` and `propan-2-ol`, which has 3 signals with a 6H doublet + 1H septet and loses `CH₃•` (`60 − 15 = 45`) to give `CH₃CH(OH)⁺`?",
          ],
          modelAnswer:
            "IHD = (2×3 + 2 − 8)/2 = 0, so C is saturated with no rings or π bonds. The strong broad IR band at 3350 cm⁻¹ (with no C=O) confirms an alcohol hydroxyl (−OH) group, ruling out methoxyethane. In ¹H NMR, the 1H broad singlet at 2.3 ppm that vanishes with D₂O confirms the exchangeable −OH proton. The 6H doublet (1.2 ppm) coupled to a 1H septet (4.0 ppm, deshielded by −OH) is the unmistakable signature of an isopropyl group, −CH(CH₃)₂, proving C is propan-2-ol ((CH₃)₂CHOH) rather than propan-1-ol (which would show 4 signals). In MS, loss of a methyl radical (60 − 45 = 15, CH₃•) forms the stabilized CH₃CHOH⁺ base peak at m/z = 45.",
          markScheme: [
            {
              point: "Computes IHD = 0 and identifies alcohol O−H from broad 3350 cm⁻¹ IR band (ruling out ether).",
              keywords: ["ihd = 0", "alcohol", "hydroxyl"],
            },
            {
              point: "Assigns 2.3 ppm broad singlet disappearing with D₂O to the exchangeable −OH proton.",
              keywords: ["exchangeable", "d2o", "hydroxyl"],
            },
            {
              point: "Assigns 6H doublet (1.2 ppm) + 1H septet (4.0 ppm) to symmetric isopropyl −CH(CH₃)₂.",
              keywords: ["isopropyl", "septet", "doublet"],
            },
            {
              point: "Explains MS base peak m/z = 45 as loss of CH₃• (15) forming CH₃CHOH⁺.",
              keywords: ["ch3choh+", "loss of a methyl", "15"],
            },
            {
              point: "Identifies C unambiguously as propan-2-ol ((CH₃)₂CHOH).",
              keywords: ["propan-2-ol"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid identification or reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies alcohol from IR or names propan-2-ol without explaining splitting and MS." },
            { band: "3–4", marks: [3, 4], descriptor: "Names propan-2-ol with strong NMR and IR reasoning, missing either IHD or MS m/z = 45 justification." },
            { band: "5", marks: [5, 5], descriptor: "Full, cohesive justification across IHD, IR, D₂O-exchangeable −OH, isopropyl splitting, and MS CH₃CHOH⁺ (45)." },
          ],
        },
        {
          id: "s3-2-organic-classification-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "proton-nmr-combined-hl",
          strategy: "Full 5-step IB Paper 2 capstone: % composition → M+ → IHD=5 → IR → MS + ¹H NMR",
          marks: 6,
          question:
            "A fragrant liquid **D** contains `70.6% C`, `5.9% H`, and `23.5% O` by mass (`C = 12, H = 1, O = 16`). Its mass spectrum shows `M⁺ = 136`, a base peak at `m/z = 105`, and a strong peak at `m/z = 77`. Its IR spectrum exhibits a strong sharp band at `1725 cm⁻¹` and strong `C−O` bands around `1280 cm⁻¹`, with no broad absorption above `2500 cm⁻¹`. Its ¹H NMR spectrum displays only two regions: `δ = 7.4–8.1 ppm` (5H multiplet) and `δ = 3.9 ppm` (3H singlet). Deduce the exact identity of **D**, showing full step-by-step working.",
          hints: [
            "Divide `%` by `A_r`: `70.6/12 = 5.88`, `5.9/1 = 5.90`, `23.5/16 = 1.47` → divide by `1.47` to get `C₄H₄O` (`mass = 68`). Compare with `M⁺ = 136`!",
            "Compute `IHD` of `C₈H₈O₂`: `(16 + 2 − 8)/2 = 5` (benzene ring `4` + `C=O` `1`).",
            "IR has `C=O` and no `O−H` → ester! NMR shows 5H monosubstituted benzene (`C₆H₅−`) + 3H singlet at `3.9 ppm` (`−O−CH₃`). Verify `136 − 31 = 105` (`C₆H₅CO⁺`) and `m/z = 77` (`C₆H₅⁺`)!",
          ],
          modelAnswer:
            "1. Empirical & molecular formula: C : H : O = 70.6/12 : 5.9/1 : 23.5/16 = 5.88 : 5.90 : 1.47; dividing by 1.47 gives 4 : 4 : 1, so the empirical formula is C₄H₄O (mass 68). Since M⁺ = 136, multiplier = 136/68 = 2, giving molecular formula C₈H₈O₂.\n2. IHD = (2×8 + 2 − 8)/2 = 5, consistent with one benzene ring (IHD = 4) plus one carbonyl C=O double bond (IHD = 1).\n3. IR: strong sharp C=O at 1725 cm⁻¹ and C−O at 1280 cm⁻¹ with complete absence of broad O−H (2500–3600 cm⁻¹) proves an ester.\n4. ¹H NMR: the 5H multiplet at 7.4–8.1 ppm confirms a monosubstituted phenyl ring (C₆H₅−), while the strongly deshielded 3H singlet at 3.9 ppm proves a methoxy ester group (−O−CH₃) with no adjacent protons.\n5. MS confirmation: loss of CH₃O• (136 − 105 = 31) generates the benzoyl acylium ion C₆H₅CO⁺ at m/z = 105, which loses CO (28) to yield the phenyl cation C₆H₅⁺ at m/z = 77.\n6. Therefore D is methyl benzoate (C₆H₅COOCH₃).",
          markScheme: [
            {
              point: "Determines empirical formula C₄H₄O (68) and molecular formula C₈H₈O₂ (from M⁺ = 136).",
              keywords: ["c4h4o", "c₄h₄o", "c8h8o2", "c₈h₈o₂"],
            },
            {
              point: "Calculates IHD = 5 and interprets it as benzene ring (4) + C=O (1).",
              keywords: ["ihd = 5", "benzene ring"],
            },
            {
              point: "Deduces ester functional group from IR C=O (1725 cm⁻¹) and absence of O−H.",
              keywords: ["ester", "absence"],
            },
            {
              point: "Assigns ¹H NMR: 5H at 7.4–8.1 ppm = monosubstituted phenyl (C₆H₅−) and 3H singlet at 3.9 ppm = −O−CH₃.",
              keywords: ["phenyl", "-o-ch3", "−o−ch₃"],
            },
            {
              point: "Assigns MS peaks: m/z = 105 as C₆H₅CO⁺ (loss of CH₃O• = 31) and m/z = 77 as C₆H₅⁺.",
              keywords: ["c6h5co+", "c₆h₅co⁺", "c6h5+", "c₆h₅⁺"],
            },
            {
              point: "Correctly names and writes methyl benzoate (C₆H₅COOCH₃).",
              keywords: ["methyl benzoate", "c6h5cooch3", "c₆h₅cooch₃"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No coherent spectroscopic deduction." },
            { band: "1–2", marks: [1, 2], descriptor: "Finds empirical/molecular formula or identifies benzene ring without assembling the ester." },
            { band: "3–4", marks: [3, 4], descriptor: "Correctly deduces methyl benzoate using most spectra, but misses MS fragment charges or omits IHD/empirical working." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete, exam-standard HL Paper 2 synthesis integrating % composition, M⁺, IHD = 5, IR, ¹H NMR, and MS ions cleanly into methyl benzoate." },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — 8 Hard Multi-Step & Combined Structure Elucidation Problems
  // ===========================================================================
  challenge: [
    {
      id: "s3-2-organic-classification-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "ihd-ms-ir-spectroscopy",
      strategy: "Count rings + π bonds via IHD formula on a real pharmaceutical",
      question:
        "Aspirin (2-acetoxybenzoic acid) has molecular formula `C₉H₈O₄`. Calculate its Index of Hydrogen Deficiency (IHD). Enter a whole number.",
      answer: { type: "number", value: 6, display: "6" },
      hints: [
        "Ignore all four divalent oxygen atoms in the IHD formula.",
        "Evaluate `(2 × 9 + 2 − 8) / 2` and cross-check structurally: 1 benzene ring (`4`) + 1 ester `C=O` (`1`) + 1 carboxyl `C=O` (`1`).",
      ],
      solution: [
        "`IHD = (2(9) + 2 − 8) / 2 = 12 / 2 = 6`.",
        "Structural check: benzene ring (`4`) + ester `C=O` (`1`) + carboxylic acid `C=O` (`1`) = **6**.",
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "structural-isomers-stereoisomers-hl",
      strategy: "Account for end-to-end symmetry when counting conjugated diene stereoisomers",
      question:
        "How many distinct configurational stereoisomers exist for the symmetrical conjugated diene **`hexa-2,4-diene`**, `CH₃−CH=CH−CH=CH−CH₃`? Enter a whole number.",
      answer: { type: "number", value: 3, display: "3" },
      hints: [
        "Each double bond can be `E` or `Z`, giving 4 formal combinations: `(2E, 4E)`, `(2Z, 4Z)`, `(2E, 4Z)`, and `(2Z, 4E)`.",
        "Now rotate `(2E, 4Z)` by `180°` in the plane of the page—what molecule do you get?",
      ],
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Watch for symmetry! Because both ends of `hexa-2,4-diene` carry identical `−CH₃` groups, `(2E, 4Z)` and `(2Z, 4E)` are the **exact same molecule** rotated end-for-end!",
        },
      ],
      solution: [
        "The two `C=C` bonds give combinations `(E,E)`, `(Z,Z)`, `(E,Z)`, and `(Z,E)`.",
        "Because the molecule is symmetric end-to-end, flipping `(2E, 4Z)` gives `(2Z, 4E)` identically.",
        "Therefore there are **3** distinct stereoisomers: `(2E,4E)`, `(2Z,4Z)`, and `(2E,4Z)`.",
      ],
      commonError: "Applying `2^m = 4` blindly without checking whether molecular symmetry makes `(E,Z)` identical to `(Z,E)`.",
    },
    {
      id: "s3-2-organic-classification-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "structural-isomers-stereoisomers-hl",
      strategy: "CIP first point of difference compares single highest atomic number Z first",
      question:
        "Consider the tetrasubstituted alkene `HOOC(HOCH₂)C=C(CHO)CH₂Cl`. If the `−COOH` group and the `−CHO` group are on the **same side** of the `C=C` double bond, is this the `E` or `Z` isomer?",
      answer: { type: "text", accept: ["E", "(E)", "E-isomer"], display: "E" },
      hints: [
        "On the left carbon, both `−COOH` and `−CH₂OH` attach via C: compare `(O, O, O)` vs `(O, H, H)` → `−COOH` is priority 1.",
        "On the right carbon, compare the bonded-atom lists for `−CHO` = `(O, O, H)` vs `−CH₂Cl` = `(Cl, H, H)`. Which single atom has the highest atomic number (`Cl = 17` vs `O = 8`)?",
        "Since `Cl (17) > O (8)`, **`−CH₂Cl` outranks `−CHO`**! Now locate priority-1 `−COOH` relative to priority-1 `−CH₂Cl`.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["Z", "(Z)", "Z-isomer"] },
          feedback: "CIP does NOT sum atomic numbers! At the first point of difference, `−CH₂Cl` `(Cl, H, H)` beats `−CHO` `(O, O, H)` because one `Cl (Z = 17)` outranks `O (Z = 8)`.",
        },
      ],
      solution: [
        "Left carbon: `−COOH` connects to `(O, O, O)` > `−CH₂OH` `(O, H, H)` → **`−COOH` = priority 1**.",
        "Right carbon: `−CH₂Cl` connects to `(Cl, H, H)` vs `−CHO` `(O, O, H)`. Comparing highest atomic number first: `Cl (Z = 17) > O (Z = 8)` → **`−CH₂Cl` = priority 1**.",
        "Because `−COOH` and `−CHO` (priority 2) sit on the same side, priority-1 `−COOH` and priority-1 `−CH₂Cl` lie on **opposite sides** → **`(E)`**.",
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "proton-nmr-combined-hl",
      strategy: "Scale simplified NMR integration ratio to molecular H count via symmetry",
      question:
        "A ketone of formula `C₅H₁₀O` (`M⁺ = 86`; `C = 12, H = 1, O = 16`) shows a base peak in MS at `m/z = 57` (with almost no peak at `m/z = 43`), and its ¹H NMR spectrum has **only two signals**: a quartet at `δ = 2.4 ppm` and a triplet at `δ = 1.05 ppm` in relative area ratio `2 : 3`. Give the IUPAC name of this ketone.",
      answer: { type: "text", accept: ["pentan-3-one", "3-pentanone"], display: "pentan-3-one" },
      hints: [
        "The molecule has 10 hydrogens, yet its two NMR signals integrate `2 : 3` (sum 5) → multiply by 2 to get `4H : 6H`, indicating two identical ethyl groups!",
        "Check MS: `86 − 57 = 29` (loss of `C₂H₅•` leaving `C₂H₅CO⁺ = 57`), and absence of `m/z = 43` rules out any `CH₃CO−` ketone.",
      ],
      solution: [
        "Only 2 ¹H NMR signals (quartet + triplet, ratio `2 : 3` = `4H : 6H`) proves two chemically equivalent ethyl groups (`−CH₂CH₃`) attached symmetrically to `C=O`.",
        "MS confirms cleavage to `C₂H₅CO⁺` (`m/z = 57`, loss of `C₂H₅• = 29`) and no `CH₃CO⁺` (`m/z = 43`).",
        "Structure: `CH₃CH₂COCH₂CH₃` = **pentan-3-one**.",
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Explain",
      guideRef: "structural-isomers-stereoisomers-hl",
      strategy: "Apply internal mirror plane symmetry to explain meso optical inactivity",
      marks: 5,
      question:
        "`2,3-dichlorobutane` (`CH₃CH(Cl)CH(Cl)CH₃`) contains **two** chiral carbon atoms, yet it exists as only **three** stereoisomers instead of `2² = 4`, and one of those three stereoisomers is optically inactive. Explain these observations and state the stereochemical relationship between the optically inactive isomer and either optically active isomer.",
      hints: [
        "Label the two chiral centres `(R/S)` or `(A/B)`: both C-2 and C-3 carry the exact same set of groups (`−H`, `−Cl`, `−CH₃`, and `−CH(Cl)CH₃`).",
        "Consider the `(2R, 3S)` stereoisomer: draw an internal plane of symmetry bisecting the C2−C3 bond—its mirror image is **superimposable** on itself (*meso* compound)!",
        "What do we call stereoisomers that are NOT mirror images of one another?",
      ],
      modelAnswer:
        "Both C-2 and C-3 are bonded to identical substituent sets (−H, −Cl, −CH₃, and the adjacent −CH(Cl)CH₃ unit). Two of the stereoisomers—(2R,3R) and (2S,3S)—have no internal symmetry, are non-superimposable mirror images (a pair of optically active enantiomers), and rotate plane-polarized light in opposite directions. The third stereoisomer—(2R,3S), identical to (2S,3R)—possesses an internal plane of symmetry bisecting the C2–C3 bond, making it superimposable on its own mirror image. This achiral meso compound is optically inactive because opposite rotations from its two halves cancel internally, reducing the stereoisomer count from 4 to 3. Since the meso isomer and either optically active isomer are stereoisomers that are not mirror images, they are diastereomers (with different physical properties).",
      markScheme: [
        {
          point: "Recognizes that C-2 and C-3 carry identical sets of substituents.",
          keywords: ["identical", "c-2 and c-3", "substituents"],
        },
        {
          point: "Identifies one pair of optically active non-superimposable mirror-image enantiomers ((2R,3R) and (2S,3S)).",
          keywords: ["enantiomers", "non-superimposable"],
        },
        {
          point: "Explains the third isomer has an internal plane of symmetry making it superimposable on its mirror image (meso compound).",
          keywords: ["plane of symmetry", "superimposable", "meso"],
        },
        {
          point: "Explains why the meso isomer is optically inactive (internal cancellation / achiral) so total = 3 instead of 4.",
          keywords: ["achiral", "cancel", "optically inactive"],
        },
        {
          point: "States that the meso isomer and either active isomer are diastereomers (not mirror images).",
          keywords: ["diastereomers"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid explanation of symmetry or stereoisomer count." },
        { band: "1–2", marks: [1, 2], descriptor: "Mentions symmetry or meso compound without clearly linking to superimposability and diastereomers." },
        { band: "3–4", marks: [3, 4], descriptor: "Explains enantiomer pair and meso symmetry clearly, missing either internal cancellation or diastereomer relationship." },
        { band: "5", marks: [5, 5], descriptor: "Complete, crystal-clear stereochemical proof covering enantiomer pair, internal mirror plane, superimposable achiral meso isomer, and diastereomer link." },
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "proton-nmr-combined-hl",
      strategy: "Combine IHD, ester IR, deshielded 1H septet at 5.0 ppm, and MS m/z = 43",
      marks: 6,
      question:
        "Compound **E** has molecular formula `C₅H₁₀O₂` (`M⁺ = 102`; `C = 12, H = 1, O = 16`). Its IR spectrum shows a strong sharp band at `1740 cm⁻¹` and strong `C−O` absorption at `1245 cm⁻¹`, with no broad absorption above `2500 cm⁻¹`. Its mass spectrum has strong peaks at `m/z = 87` and `m/z = 43`. Its ¹H NMR shows three signals: `δ = 5.0 ppm` (1H septet), `δ = 2.0 ppm` (3H singlet), and `δ = 1.25 ppm` (6H doublet). Deduce the full IUPAC name and structural formula of **E**, justifying every piece of data.",
      hints: [
        "Compute `IHD` (`1`) and use IR (`1740 cm⁻¹`, no `O−H`) to establish an ester.",
        "Look at the `1H septet` at **`5.0 ppm`** paired with the `6H doublet` at `1.25 ppm`: that is an isopropyl group (`−CH(CH₃)₂`) attached directly to the **single-bonded ester oxygen** (`−O−CH(CH₃)₂`, strongly deshielded to `5.0 ppm`!).",
        "The `3H singlet` at `2.0 ppm` is `CH₃−C(=O)−`. Confirm MS peaks: `102 − 87 = 15` (`CH₃•` loss) and `m/z = 43` (`CH₃CO⁺` and `C₃H₇⁺`).",
      ],
      modelAnswer:
        "1. IHD = (2×5 + 2 − 10)/2 = 1, indicating one ring or π bond.\n2. IR: sharp C=O at 1740 cm⁻¹ and C−O at 1245 cm⁻¹ with complete absence of broad O−H (2500–3600 cm⁻¹) rules out carboxylic acids and confirms an ester.\n3. ¹H NMR: the 6H doublet (1.25 ppm) and 1H septet (5.0 ppm) form an isopropyl motif, −CH(CH₃)₂. Because the single methine proton sits far downfield at 5.0 ppm, this isopropyl group must be attached directly to the single-bonded ester oxygen: −O−CH(CH₃)₂ (rather than to C=O, which would sit near 2.5 ppm).\n4. The 3H singlet at 2.0 ppm (no adjacent H, shift characteristic of R−CO−CH₃) establishes the ethanoyl group CH₃−C(=O)−.\n5. MS check: M⁺ = 102 loses CH₃• (15) to give m/z = 87, and cleaves across the ester linkage to yield CH₃CO⁺ (and C₃H₇⁺) at m/z = 43.\n6. Therefore E is propan-2-yl ethanoate (1-methylethyl ethanoate), CH₃COOCH(CH₃)₂.",
      markScheme: [
        {
          point: "Computes IHD = 1 and establishes an ester from IR C=O (1740 cm⁻¹) and lack of O−H.",
          keywords: ["ihd = 1", "ester"],
        },
        {
          point: "Identifies isopropyl group −CH(CH₃)₂ from 6H doublet (1.25 ppm) + 1H septet.",
          keywords: ["isopropyl", "septet"],
        },
        {
          point: "Uses high chemical shift (5.0 ppm) to place isopropyl on the single-bonded oxygen (−O−CH(CH₃)₂).",
          keywords: ["5.0", "single-bonded", "oxygen"],
        },
        {
          point: "Assigns 3H singlet at 2.0 ppm to CH₃−C(=O)−.",
          keywords: ["2.0", "ch3-c(=o)", "ethanoyl"],
        },
        {
          point: "Explains MS fragments: m/z = 87 (M − 15, loss of CH₃•) and m/z = 43 (CH₃CO⁺ / C₃H₇⁺).",
          keywords: ["ch3co+", "87", "15"],
        },
        {
          point: "Gives correct name/formula: propan-2-yl ethanoate (or 1-methylethyl / isopropyl ethanoate), CH₃COOCH(CH₃)₂.",
          keywords: ["propan-2-yl ethanoate", "1-methylethyl ethanoate", "ch3cooch(ch3)2"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid spectroscopic deduction." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies ester or isopropyl group without determining ester orientation." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct structure deduced with solid NMR/IR logic, but omits MS peak justifications or shift explanation for 5.0 ppm." },
        { band: "5–6", marks: [5, 6], descriptor: "Exemplary combined elucidation clearly justifying ester orientation via 5.0 ppm septet, 2.0 ppm singlet, IR, IHD, and MS fragments." },
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "proton-nmr-combined-hl",
      strategy: "Unite empirical formula, MS, IR, ¹H NMR, and optical activity in one capstone deduction",
      marks: 6,
      question:
        "An optically active biological acid **F** has percentage composition `40.0% C`, `6.7% H`, and `53.3% O` (`C = 12, H = 1, O = 16`). Its mass spectrum shows `M⁺ = 90` and a dominant peak at `m/z = 45`. Its IR spectrum shows a sharp `1720 cm⁻¹` peak and a huge broad band spanning `2500–3500 cm⁻¹`. Its ¹H NMR shows four signals: `11.5 ppm` (1H broad singlet), `4.3 ppm` (1H quartet), `3.6 ppm` (1H broad singlet that disappears on shaking with `D₂O`), and `1.4 ppm` (3H doublet). Deduce the structure and IUPAC name of **F**, and identify its chiral carbon.",
      hints: [
        "Divide `%` by `A_r`: `40.0/12 = 3.33`, `6.7/1 = 6.7`, `53.3/16 = 3.33` → empirical `CH₂O` (`30`). With `M⁺ = 90`, molecular formula = `C₃H₆O₃` (`IHD = 1`)!",
        "The `11.5 ppm` 1H broad singlet + `1720 cm⁻¹` + `2500–3000` proves `−COOH`; the `3.6 ppm` `D₂O`-exchangeable 1H singlet + `3200–3500` proves an alcohol `−OH`!",
        "Assemble the remaining `CH` + `CH₃`: `4.3 ppm` (1H quartet) coupled to `1.4 ppm` (3H doublet) = `CH₃−CH(OH)−`! Check C-2 for four distinct groups.",
      ],
      modelAnswer:
        "1. Formula & IHD: C : H : O = 40.0/12 : 6.7/1 : 53.3/16 = 3.33 : 6.70 : 3.33 = 1 : 2 : 1, giving empirical formula CH₂O (mass 30). Since M⁺ = 90, multiplier = 90/30 = 3 → molecular formula C₃H₆O₃ with IHD = (2×3 + 2 − 6)/2 = 1.\n2. Functional groups (IR + NMR): sharp C=O at 1720 cm⁻¹ plus broad acid O−H and the 1H broad singlet at 11.5 ppm confirm a carboxyl group (−COOH, using the IHD of 1). The extra D₂O-exchangeable 1H broad singlet at 3.6 ppm (and IR band extending to 3500 cm⁻¹) confirms an alcohol hydroxyl group (−OH).\n3. Carbon skeleton (¹H NMR): the 3H doublet (1.4 ppm, adjacent to 1 H) coupled to the 1H quartet at 4.3 ppm (deshielded by −OH and −COOH, adjacent to 3 H) uniquely establishes the CH₃−CH(OH)− fragment.\n4. MS confirmation: C−C cleavage between C-1 and C-2 splits the molecule cleanly in half to yield both COOH⁺ and CH₃CHOH⁺ at m/z = 45.\n5. Identity & chirality: F is 2-hydroxypropanoic acid (lactic acid), CH₃C*H(OH)COOH. Carbon-2 is the chiral centre, bonded to four different groups (−H, −OH, −CH₃, and −COOH), accounting for its optical activity.",
      markScheme: [
        {
          point: "Calculates empirical formula CH₂O (30), molecular formula C₃H₆O₃ (M⁺ = 90), and IHD = 1.",
          keywords: ["ch2o", "ch₂o", "c3h6o3", "c₃h₆o₃", "ihd = 1"],
        },
        {
          point: "Identifies −COOH from 1720 cm⁻¹ IR, broad acid O−H, and 11.5 ppm 1H singlet.",
          keywords: ["carboxyl", "11.5", "-cooh", "−cooh"],
        },
        {
          point: "Identifies alcohol −OH from 3.6 ppm D₂O-exchangeable singlet and IR up to 3500 cm⁻¹.",
          keywords: ["hydroxyl", "3.6", "exchangeable"],
        },
        {
          point: "Assigns 3H doublet (1.4 ppm) + 1H quartet (4.3 ppm) to CH₃−CH(OH)−.",
          keywords: ["quartet", "doublet", "4.3"],
        },
        {
          point: "Accounts for m/z = 45 via COOH⁺ and/or CH₃CHOH⁺ cleavage ions.",
          keywords: ["cooh+", "cooh⁺", "ch3choh+", "ch₃choh⁺"],
        },
        {
          point: "Names 2-hydroxypropanoic acid (lactic acid) and identifies C-2 as chiral (bonded to −H, −OH, −CH₃, −COOH).",
          keywords: ["2-hydroxypropanoic acid", "lactic acid", "carbon-2"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid molecular formula or structural analysis." },
        { band: "1–2", marks: [1, 2], descriptor: "Determines C₃H₆O₃ or identifies −COOH without assembling the full hydroxyacid." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly identifies 2-hydroxypropanoic acid from NMR/IR, missing either chiral-centre justification or MS m/z = 45." },
        { band: "5–6", marks: [5, 6], descriptor: "Masterful synthesis integrating formula, IHD, bifunctional IR/NMR shifts, splitting, MS cleavage (45), and chirality at C-2." },
      ],
    },
    {
      id: "s3-2-organic-classification-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Deduce",
      guideRef: "proton-nmr-combined-hl",
      strategy: "Distinguish aromatic ester connectivity via 4.4 ppm quartet and MS m/z = 105 & 77",
      marks: 6,
      question:
        "Aromatic ester **G** has molecular formula `C₉H₁₀O₂` (`M⁺ = 150`; `C = 12, H = 1, O = 16`). Its mass spectrum shows strong fragments at `m/z = 105` and `m/z = 77`. Its IR spectrum shows a sharp `1720 cm⁻¹` peak and `C−O` at `1275 cm⁻¹`, with no broad `O−H`. Its ¹H NMR shows three regions: `7.4–8.1 ppm` (5H multiplet), `4.4 ppm` (2H quartet), and `1.4 ppm` (3H triplet). Deduce the structure of **G** and explain why it cannot be **phenyl propanoate** (`CH₃CH₂COOC₆H₅`) or **benzyl ethanoate** (`CH₃COOCH₂C₆H₅`).",
      hints: [
        "Compute `IHD = (18 + 2 − 10)/2 = 5` (benzene ring `4` + `C=O` `1`).",
        "In ¹H NMR, the `2H quartet` at **`4.4 ppm`** + `3H triplet` at `1.4 ppm` proves an **`−O−CH₂CH₃`** ethyl group attached directly to the ester oxygen (`−O−`), NOT next to `C=O`!",
        "In MS, `150 − 105 = 45` (loss of `C₂H₅O•` leaving **`C₆H₅CO⁺` at `m/z = 105`**), followed by loss of `CO` (`28`) to give `C₆H₅⁺` (`77`). Compare what `phenyl propanoate` and `benzyl ethanoate` would give!",
      ],
      modelAnswer:
        "1. IHD = (2×9 + 2 − 10)/2 = 5, corresponding to one benzene ring (4) plus one ester C=O bond (1, confirmed by sharp 1720 cm⁻¹ and C−O at 1275 cm⁻¹ with no O−H).\n2. ¹H NMR: the 5H multiplet at 7.4–8.1 ppm proves a monosubstituted phenyl ring (C₆H₅−). The 2H quartet at 4.4 ppm coupled to the 3H triplet at 1.4 ppm proves an ethyl group attached directly to the single-bonded ester oxygen (−O−CH₂CH₃), because −O−CH₂− is strongly deshielded into the 3.7–4.8 ppm window.\n3. MS confirmation: loss of C₂H₅O• (150 − 105 = 45) generates the benzoyl cation C₆H₅CO⁺ at m/z = 105, which loses CO (28) to give C₆H₅⁺ at m/z = 77.\n4. Thus G is ethyl benzoate (C₆H₅COOCH₂CH₃).\n5. Refuting isomers: phenyl propanoate (CH₃CH₂COOC₆H₅) would place its 2H quartet upfield near 2.5 ppm (−CH₂−C=O) and form C₂H₅CO⁺ at m/z = 57 instead of m/z = 105. Benzyl ethanoate (CH₃COOCH₂C₆H₅) lacks any ethyl triplet/quartet—it would instead show a 2H singlet (~5.1 ppm) and a 3H singlet (~2.1 ppm), plus m/z = 43 (CH₃CO⁺) and m/z = 91 (C₇H₇⁺).",
      markScheme: [
        {
          point: "Computes IHD = 5 (benzene ring + C=O) and confirms ester from IR.",
          keywords: ["ihd = 5", "ester"],
        },
        {
          point: "Assigns 5H at 7.4–8.1 ppm to monosubstituted phenyl ring (C₆H₅−).",
          keywords: ["monosubstituted", "phenyl"],
        },
        {
          point: "Assigns 2H quartet at 4.4 ppm + 3H triplet at 1.4 ppm specifically to −O−CH₂CH₃ (deshielded by O).",
          keywords: ["-o-ch2ch3", "−o−ch₂ch₃", "4.4"],
        },
        {
          point: "Assigns MS m/z = 105 as C₆H₅CO⁺ (loss of C₂H₅O• = 45) and m/z = 77 as C₆H₅⁺.",
          keywords: ["c6h5co+", "c₆h₅co⁺", "c6h5+", "c₆h₅⁺"],
        },
        {
          point: "Identifies G as ethyl benzoate (C₆H₅COOCH₂CH₃).",
          keywords: ["ethyl benzoate", "c6h5cooch2ch3", "c₆h₅cooch₂ch₃"],
        },
        {
          point: "Rules out phenyl propanoate (quartet ~2.5 ppm, m/z = 57) AND benzyl ethanoate (2H + 3H singlets, no triplet/quartet).",
          keywords: ["2.5", "57", "singlet"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid identification or isomer comparison." },
        { band: "1–2", marks: [1, 2], descriptor: "Identifies benzene + ethyl group without proving connectivity or ruling out isomers." },
        { band: "3–4", marks: [3, 4], descriptor: "Deduces ethyl benzoate cleanly using NMR and MS, but only partially refutes the two distractor isomers." },
        { band: "5–6", marks: [5, 6], descriptor: "Complete HL mastery: proves ethyl benzoate via IHD, IR, 4.4 ppm −O−CH₂− quartet, C₆H₅CO⁺ (105), and definitively refutes both phenyl propanoate and benzyl ethanoate." },
      ],
    },
  ],
};
