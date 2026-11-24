import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1 — Homologous Series, IUPAC Naming & Core SL Analysis
  // answerIndex spread: [4, 4, 4, 3]
  // ===========================================================================
  {
    id: "s3-2-organic-classification-m1",
    title: "Paper M1 · Homologous Series, Functional Groups & IUPAC [SL]",
    level: "SL",
    questions: [
      {
        id: "s3-2-organic-classification-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "homologous-series-iupac",
        strategy: "Homologous series definition",
        question: "Which statement correctly describes successive members of any homologous series?",
        options: [
          "They share identical boiling points and differ in molar mass by 12.01 g mol⁻¹.",
          "They share the same empirical formula and identical physical properties.",
          "They differ by a −CH₂− unit and show a gradual trend in physical properties.",
          "They contain different functional groups but the same general formula.",
        ],
        answerIndex: 2,
        hints: [
          "Compare methanol (`CH₃OH`), ethanol (`CH₃CH₂OH`), and propan-1-ol (`CH₃CH₂CH₂OH`).",
          "Each step adds one carbon and two hydrogens (`−CH₂−`), raising molar mass by `14.03 g mol⁻¹` and gradually changing boiling point and solubility.",
        ],
        explanation:
          "Successive members of a homologous series share the same general formula and functional group, differ by `−CH₂−` (`ΔM = 14.03 g mol⁻¹`), and display graduated physical properties (such as rising boiling points). Empirical formulas are NOT always identical (e.g. `CH₄`, `C₂H₆`, `C₃H₈`).",
      },
      {
        id: "s3-2-organic-classification-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "homologous-series-iupac",
        strategy: "Surface area and London dispersion forces",
        question:
          "Which sequence lists the three structural isomers of `C₅H₁₂` in order of **decreasing** boiling point (highest first)?",
        options: [
          "pentane > 2-methylbutane > 2,2-dimethylpropane",
          "2,2-dimethylpropane > 2-methylbutane > pentane",
          "2-methylbutane > pentane > 2,2-dimethylpropane",
          "pentane > 2,2-dimethylpropane > 2-methylbutane",
        ],
        answerIndex: 0,
        hints: [
          "All three isomers are non-polar alkanes with identical molar mass (`72.15 g mol⁻¹`), so only London dispersion forces act between molecules.",
          "More branching makes a molecule more compact and spherical, reducing surface contact area between neighbouring molecules.",
        ],
        explanation:
          "Unbranched **pentane** has the largest surface contact area and strongest London dispersion forces (`bp 36 °C`), followed by singly branched **2-methylbutane** (`28 °C`), and finally compact spherical **2,2-dimethylpropane** (`10 °C`).",
      },
      {
        id: "s3-2-organic-classification-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "homologous-series-iupac",
        strategy: "Class vs functional group name",
        question: "What is the official IB name of the functional group present in `CH₃CH₂COOH`?",
        options: ["Carboxylic acid group", "Carbonyl and ether group", "Hydroxyl and ester group", "Carboxyl functional group"],
        answerIndex: 3,
        hints: [
          "Distinguish the **class of compound** (carboxylic acid) from the **functional group** name.",
          "The combined `−COOH` unit is treated as a single functional group, not separate ketone + alcohol groups.",
        ],
        explanation:
          "`CH₃CH₂COOH` belongs to the *class* **carboxylic acid**, and its *functional group* is the **carboxyl** group (`−COOH`). Naming the class instead of the functional group is a common IB Paper 1/2 slip.",
      },
      {
        id: "s3-2-organic-classification-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "homologous-series-iupac",
        strategy: "Compare α-carbon rule vs nitrogen-atom rule",
        question:
          "How are the two compounds `(CH₃)₃C−OH` and `(CH₃)₃C−NH₂` correctly classified?",
        options: [
          "Both are tertiary compounds because the central carbon holds three methyls.",
          "`(CH₃)₃C−OH` is a tertiary alcohol; `(CH₃)₃C−NH₂` is a primary amine.",
          "`(CH₃)₃C−OH` is a primary alcohol; `(CH₃)₃C−NH₂` is a tertiary amine.",
          "Both are primary compounds because only one functional group is attached.",
        ],
        answerIndex: 1,
        hints: [
          "For alcohols, count carbons attached to the **carbon carrying `−OH`**.",
          "For amines, count carbons attached **directly to the nitrogen atom** (`R−NH₂`, `R₂NH`, `R₃N`).",
        ],
        explanation:
          "In `(CH₃)₃C−OH`, the carbon carrying `−OH` is bonded to **three** other carbons → **tertiary (3°) alcohol**. In `(CH₃)₃C−NH₂`, the nitrogen atom is bonded to only **one** carbon (and two H atoms) → **primary (1°) amine**.",
      },
      {
        id: "s3-2-organic-classification-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "homologous-series-iupac",
        strategy: "Principal functional group gets lowest locant",
        question: "What is the correct IUPAC name for the compound `CH₃CH(CH₃)CH₂CH₂OH`?",
        options: [
          "3-methylbutan-1-ol",
          "2-methylbutan-4-ol",
          "3-methylpropan-1-ol",
          "2-methylbutan-1-ol",
        ],
        answerIndex: 0,
        hints: [
          "Find the longest continuous chain containing the carbon bonded to `−OH` (4 carbons → `butan-`).",
          "Number from the end closest to the principal functional group (`−OH`), NOT closest to the methyl branch!",
        ],
        explanation:
          "The longest chain carrying `−OH` has 4 carbons (`butan-`). Numbering from the `−OH` end gives C-1 for `−OH` and C-3 for the methyl branch → **3-methylbutan-1-ol**. Numbering from the left (`2-methylbutan-4-ol`) wrongly gives the principal alcohol group a higher locant.",
      },
      {
        id: "s3-2-organic-classification-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "homologous-series-iupac",
        strategy: "Slice ester at C(=O) | O−R'",
        question: "What is the IUPAC name of the ester with condensed structural formula `CH₃CH₂COOCH₃`?",
        options: ["propyl methanoate", "ethyl ethanoate", "methyl propanoate", "propyl ethanoate"],
        answerIndex: 2,
        hints: [
          "Slice the ester right after the carbonyl carbon: `CH₃CH₂C(=O) | O−CH₃`.",
          "The group bonded to the single-bonded oxygen (`−O−CH₃`) gives the first word (`alkyl`); the carbonyl side (`CH₃CH₂COO−`, 3 carbons) gives the second word (`-oate`).",
        ],
        explanation:
          "The alcohol-derived group attached to `−O−` is `−CH₃` (**methyl**), and the acid-derived chain including the carbonyl carbon (`CH₃CH₂COO−`) has 3 carbons (**propanoate**) → **methyl propanoate**. Reversing the two halves gives the tempting trap `propyl ethanoate` (which has 5 carbons, not 4!).",
      },
      {
        id: "s3-2-organic-classification-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "homologous-series-iupac",
        strategy: "Trace bent longest chain and order alphabetically",
        question: "What is the IUPAC name of `CH₃CH(Cl)CH(CH₂CH₃)CH₂CH₃`?",
        options: [
          "2-chloro-3-ethylbutane",
          "2-chloro-3-ethylpentane",
          "4-chloro-3-ethylpentane",
          "3-ethyl-2-chloropentane",
        ],
        answerIndex: 1,
        hints: [
          "Count carbons carefully from the left `CH₃` through `CH(Cl)` and `CH` to the end of an ethyl branch: `1 + 1 + 1 + 2 = 5` carbons (`pentane`).",
          "Compare numbering from left (`2, 3`) vs right (`3, 4`), then order substituent prefixes alphabetically (`c` before `e`).",
        ],
        explanation:
          "The longest continuous chain contains 5 carbons (**pentane**). Numbering from the left places chlorine at C-2 and ethyl at C-3 (locant set `2, 3` < `3, 4`). Listing substituents alphabetically (`chloro` before `ethyl`) gives **2-chloro-3-ethylpentane**.",
      },
      {
        id: "s3-2-organic-classification-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Systematic isomer enumeration by carbon skeleton",
        question: "How many **structural isomers** with molecular formula `C₄H₁₀O` are **alcohols**?",
        options: ["2 alcohol isomers", "3 alcohol isomers", "5 alcohol isomers", "4 alcohol isomers"],
        answerIndex: 3,
        hints: [
          "First draw the two possible 4-carbon alkane skeletons: unbranched `butane` and branched `2-methylpropane`.",
          "Count distinct positions to attach `−OH` on each skeleton: 2 on butane + 2 on 2-methylpropane.",
        ],
        explanation:
          "On a straight `C₄` chain, `−OH` can sit at C-1 (**butan-1-ol**) or C-2 (**butan-2-ol**). On a `2-methylpropane` skeleton, `−OH` can sit on an outer carbon (**2-methylpropan-1-ol**) or the central carbon (**2-methylpropan-2-ol**). Total = **4** alcohol structural isomers (there are also 3 ether isomers).",
      },
      {
        id: "s3-2-organic-classification-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Match molecular formulas across functional groups",
        question: "Which pair of compounds are **functional-group isomers** of one another?",
        options: [
          "propan-1-ol and propan-2-ol",
          "butane and 2-methylpropane",
          "propanal and propanone",
          "ethanoic acid and ethanol",
        ],
        answerIndex: 2,
        hints: [
          "Functional-group isomers must have the **exact same molecular formula** but belong to **different organic classes**.",
          "Check formulas: propanal (`CH₃CH₂CHO`) and propanone (`CH₃COCH₃`) are both `C₃H₆O`.",
        ],
        explanation:
          "**Propanal** (aldehyde) and **propanone** (ketone) share molecular formula `C₃H₆O` with different functional groups. `Propan-1-ol`/`propan-2-ol` are position isomers; `butane`/`2-methylpropane` are chain isomers; `ethanoic acid` (`C₂H₄O₂`) and `ethanol` (`C₂H₆O`) are not isomers at all.",
      },
      {
        id: "s3-2-organic-classification-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "homologous-series-iupac",
        strategy: "Include the functional-group carbon in the chain count",
        question: "What is the correct IUPAC name of `CH₃CH₂CN`?",
        options: ["propanenitrile", "ethanenitrile", "ethylnitrile", "butanenitrile"],
        answerIndex: 0,
        hints: [
          "In nitriles (`R−C≡N`), the carbon atom inside `−C≡N` is carbon-1 of the parent chain.",
          "Count ALL carbon atoms in `CH₃−CH₂−C≡N`: `1 + 1 + 1 = 3` → `propane-` + `nitrile`.",
        ],
        explanation:
          "`CH₃CH₂CN` contains **three** carbon atoms including the nitrile carbon, so its IUPAC name is **propanenitrile** (note that the final `e` of `propane` is retained before the consonant `n`). Forgetting to count the `−CN` carbon leads to the common error `ethanenitrile` (`CH₃CN`).",
      },
      {
        id: "s3-2-organic-classification-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "homologous-series-iupac",
        strategy: "Hydrophilic head vs hydrophobic tail balance",
        question:
          "Why does the solubility of straight-chain primary alcohols in water decrease sharply from ethanol (`C₂H₅OH`) to hexan-1-ol (`C₆H₁₃OH`)?",
        options: [
          "Longer alcohols lose their −OH group and can no longer form hydrogen bonds.",
          "The growing non-polar alkyl chain disrupts water's hydrogen-bonding network.",
          "Hexan-1-ol has weaker London dispersion forces than ethanol molecules.",
          "Ethanol ionizes completely in water whereas hexan-1-ol remains molecular.",
        ],
        answerIndex: 1,
        hints: [
          "Every primary alcohol still contains one polar `−OH` group capable of hydrogen bonding with water.",
          "What happens energetically when a long non-polar hydrocarbon tail is forced between hydrogen-bonded water molecules?",
        ],
        explanation:
          "Although hexan-1-ol still has a polar `−OH` group, its large **non-polar hydrophobic alkyl chain** cannot hydrogen-bond with water and disrupts strong water–water hydrogen bonds, making dissolution energetically unfavourable.",
      },
      {
        id: "s3-2-organic-classification-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Apply IHD = (2C + 2 + N − H − X)/2",
        question: "What is the Index of Hydrogen Deficiency (IHD) of a compound with molecular formula `C₆H₈O₂`?",
        options: ["1", "2", "3", "4"],
        answerIndex: 2,
        hints: [
          "Use `IHD = (2C + 2 + N − H − X) / 2`.",
          "Remember that divalent oxygen (`O`) is NOT included in the IHD formula!",
        ],
        explanation:
          "Ignoring oxygen, `IHD = (2(6) + 2 − 8) / 2 = (14 − 8) / 2 = 3`. Subtracting the two oxygen atoms by mistake would wrongly give `2`.",
      },
      {
        id: "s3-2-organic-classification-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Nitrogen adds +1 in IHD formula",
        question: "Calculate the Index of Hydrogen Deficiency (IHD) of `C₅H₉N`.",
        options: ["0", "1", "3", "2"],
        answerIndex: 3,
        hints: [
          "Use `IHD = (2C + 2 + N − H − X) / 2` with `C = 5`, `H = 9`, `N = 1`.",
          "Notice that nitrogen **adds** `+1` in the numerator (unlike halogens, which subtract `1`).",
        ],
        explanation:
          "`IHD = (2(5) + 2 + 1 − 9) / 2 = 4 / 2 = 2` (for example, pentanenitrile `CH₃CH₂CH₂CH₂C≡N` has one triple bond = 2 π bonds). Subtracting `N` instead of adding it wrongly gives `1`.",
      },
      {
        id: "s3-2-organic-classification-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Dipole-moment change selection rule for IR",
        question: "Which gaseous molecule does **not** absorb infrared (IR) radiation?",
        options: ["Nitrogen, `N₂`", "Carbon dioxide, `CO₂`", "Methane, `CH₄`", "Hydrogen chloride, `HCl`"],
        answerIndex: 0,
        hints: [
          "A molecular vibration absorbs IR photons only if the vibration causes a **change in molecular dipole moment**.",
          "Even non-polar polyatomic molecules (`CO₂`, `CH₄`) have asymmetric stretching or bending modes that create a temporary dipole!",
        ],
        explanation:
          "**`N₂`** is a symmetric homonuclear diatomic molecule whose single stretching vibration leaves its dipole moment at zero throughout, so it is **IR-inactive**. `CO₂` and `CH₄` are non-polar at equilibrium yet undergo dipole-changing bends and asymmetric stretches (making them greenhouse gases).",
      },
      {
        id: "s3-2-organic-classification-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "homologous-series-iupac",
        strategy: "Combine carbon count with alkene general formula",
        question: "How many hydrogen atoms are present in one molecule of `2-methylpent-2-ene`?",
        options: ["10 hydrogen atoms", "12 hydrogen atoms", "14 hydrogen atoms", "8 hydrogen atoms"],
        answerIndex: 1,
        hints: [
          "Count total carbons: `pent-` (5) + `methyl` (1) = **6 carbons**.",
          "A non-cyclic alkene with one `C=C` bond follows the general formula `CₙH₂ₙ` (`IHD = 1`).",
        ],
        explanation:
          "`2-methylpent-2-ene` has formula `(CH₃)₂C=CHCH₂CH₃`, which totals `C₆H₁₂` (**12 hydrogen atoms**). Using `C₅H₁₀` (forgetting the methyl carbon) wrongly gives `10`; using the alkane formula `C₆H₁₄` wrongly gives `14`.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2 — IHD, Mass Spectrometry, IR Spectroscopy & Core HL Bridge
  // answerIndex spread: [4, 3, 4, 4]
  // ===========================================================================
  {
    id: "s3-2-organic-classification-m2",
    title: "Paper M2 · IHD, Mass Spec, IR & Stereochemistry Bridge [SL/HL]",
    questions: [
      {
        id: "s3-2-organic-classification-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Handle C, H, N, O, and X together in IHD",
        question: "What is the Index of Hydrogen Deficiency (IHD) of the molecule `C₇H₅NOCl₂`?",
        options: ["3", "4", "6", "5"],
        answerIndex: 3,
        hints: [
          "Substitute `C = 7`, `H = 5`, `N = 1`, `X = 2` (two Cl atoms), and ignore `O`.",
          "Evaluate `(2×7 + 2 + 1 − 5 − 2) / 2` carefully.",
        ],
        explanation:
          "`IHD = (14 + 2 + 1 − 5 − 2) / 2 = 10 / 2 = 5` (consistent with one benzene ring = 4 plus one `C=O` or `C=N` bond = 1). Adding `Cl` instead of subtracting it wrongly gives `7`; forgetting `N` gives `4.5`.",
      },
      {
        id: "s3-2-organic-classification-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Match high IHD (≥ 4) to a benzene ring",
        question:
          "An aromatic compound has molecular formula `C₇H₈O` and shows a broad IR absorption at `3350 cm⁻¹` with no peak near `1720 cm⁻¹`. Which structure fits this evidence?",
        options: [
          "Benzaldehyde, `C₆H₅CHO`",
          "Phenylmethanol, `C₆H₅CH₂OH`",
          "Methoxybenzene, `C₆H₅OCH₃`",
          "Benzoic acid, `C₆H₅COOH`",
        ],
        answerIndex: 1,
        hints: [
          "Check `IHD` of `C₇H₈O`: `(14 + 2 − 8) / 2 = 4` — completely accounted for by one benzene ring, so no `C=O` can exist!",
          "A broad IR peak at `3350 cm⁻¹` specifically confirms an alcohol/phenol `O−H` bond.",
        ],
        explanation:
          "`C₇H₈O` has `IHD = 4` (just a benzene ring, zero extra π bonds) and the broad `3350 cm⁻¹` band confirms an `O−H` bond, matching **phenylmethanol** (`C₆H₅CH₂OH`). Methoxybenzene lacks `O−H`, while benzaldehyde (`C₇H₆O`, IHD 5) and benzoic acid (`C₇H₆O₂`, IHD 5) both contain `C=O`.",
      },
      {
        id: "s3-2-organic-classification-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Subtract fragment m/z from molecular ion M+",
        question:
          "The mass spectrum of methyl ethanoate (`C₃H₆O₂`, `M⁺ = 74`) shows a fragment peak at `m/z = 59` (Use `C = 12, H = 1, O = 16`). Which uncharged species was lost from `M⁺•`?",
        options: ["`CH₃•` radical", "`OH•` radical", "`H₂O` molecule", "`C₂H₅•` radical"],
        answerIndex: 0,
        hints: [
          "Calculate the mass difference `M⁺ − fragment = 74 − 59`.",
          "Match the lost mass of `15` to an organic radical.",
        ],
        explanation:
          "`74 − 59 = 15`, which corresponds to loss of a **`CH₃•`** methyl radical (`12 + 3 = 15`) from the molecular ion. Note that mass spectrometry detects the remaining cation (`m/z = 59`), while the neutral radical is lost.",
      },
      {
        id: "s3-2-organic-classification-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Compare α-cleavage fragment ions of aldehyde vs ketone",
        question:
          "Propanal (`CH₃CH₂CHO`) and propanone (`CH₃COCH₃`) both have `M⁺ = 58` (Use `C = 12, H = 1, O = 16`). Which mass-spectrometry feature best distinguishes **propanal** from **propanone**?",
        options: [
          "Propanal has a higher `M⁺` peak at `m/z = 60`.",
          "Propanal has a prominent fragment at `m/z = 43` from `CH₃CO⁺`.",
          "Propanal gives a strong fragment at `m/z = 29` (`CHO⁺` and `C₂H₅⁺`).",
          "Propanal shows a base peak at `m/z = 45` from loss of a methyl group.",
        ],
        answerIndex: 2,
        hints: [
          "Split `CH₃CH₂−CHO` next to the carbonyl carbon: what are the masses of `CH₃CH₂⁺` and `CHO⁺`?",
          "`CH₃CH₂⁺ = 24 + 5 = 29` and `CHO⁺ = 12 + 1 + 16 = 29`! Can propanone (`CH₃−CO−CH₃`) form either fragment by single-bond cleavage?",
        ],
        explanation:
          "Cleaving the `C−C` bond next to the aldehyde group in **propanal** gives both `C₂H₅⁺` and `CHO⁺` at **`m/z = 29`**, whereas **propanone** loses `CH₃•` (`15`) to give a dominant `m/z = 43` (`CH₃CO⁺`) peak with essentially no `m/z = 29` signal.",
      },
      {
        id: "s3-2-organic-classification-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Verify fragment ion mass and positive charge",
        question:
          "Propanoic acid (`CH₃CH₂COOH`, `M_r = 74`) produces a prominent peak at `m/z = 45` in its mass spectrum (Use `C = 12, H = 1, O = 16`). Which fragment ion causes this peak?",
        options: ["`CH₃CO⁺`", "`CH₃CH₂O⁺`", "`CH₃CH₂⁺`", "`COOH⁺`"],
        answerIndex: 3,
        hints: [
          "Subtract `45` from `74`: `74 − 45 = 29`, which is loss of the ethyl radical `C₂H₅•`.",
          "Compute the mass of the remaining piece `COOH⁺`: `12 + 16 + 16 + 1 = 45`.",
        ],
        explanation:
          "Cleavage of the `C−C` bond between the ethyl chain and the carboxyl group loses `C₂H₅•` (`29`), leaving the **`COOH⁺`** ion (`12 + 32 + 1 = 45`). Notice `CH₃CH₂O⁺` also has mass `45`, but propanoic acid has no `CH₃CH₂O−` connectivity!",
      },
      {
        id: "s3-2-organic-classification-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Match broad 2500–3000 cm⁻¹ + sharp 1715 cm⁻¹ to carboxylic acid",
        question:
          "The IR spectrum of an unknown organic liquid displays a strong sharp absorption at `1715 cm⁻¹` and a **very broad** absorption spanning `2500–3000 cm⁻¹`. Which compound class is present?",
        options: ["Carboxylic acid", "Secondary alcohol", "Methyl ketone", "Saturated ester"],
        answerIndex: 0,
        hints: [
          "A sharp peak at `1700–1750 cm⁻¹` indicates a `C=O` double bond.",
          "Which `O−H` group forms very strong hydrogen-bonded dimers that pull its broad stretch down to `2500–3000 cm⁻¹`?",
        ],
        explanation:
          "The pairing of a sharp **`C=O` band (`1700–1750 cm⁻¹`)** with a **very broad `O−H` trough (`2500–3000 cm⁻¹`)** is the unmistakable IR signature of a **carboxylic acid**. Alcohols absorb higher (`3200–3600 cm⁻¹`) and lack `C=O`; ketones and esters lack `O−H`.",
      },
      {
        id: "s3-2-organic-classification-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Use absence of IR peaks to eliminate isomers",
        question:
          "A compound of molecular formula `C₄H₈O₂` exhibits a strong sharp IR absorption at `1740 cm⁻¹` and strong `C−O` bands around `1240 cm⁻¹`, with **no broad absorption between `2500` and `3600 cm⁻¹`**. What class of compound is it?",
        options: ["Carboxylic acid", "Hydroxyketone", "Ester", "Diol"],
        answerIndex: 2,
        hints: [
          "`IHD` of `C₄H₈O₂` is `(8 + 2 − 8)/2 = 1`, which is fully used by the `C=O` peak at `1740 cm⁻¹`.",
          "Zero broad absorption from `2500` to `3600 cm⁻¹` proves there is **no `O−H` bond** anywhere in the molecule.",
        ],
        explanation:
          "Presence of **`C=O` (`1740 cm⁻¹`)** and **`C−O` (`1240 cm⁻¹`)** combined with the complete **absence of `O−H`** eliminates carboxylic acids, hydroxyketones, and diols, confirming an **ester**.",
      },
      {
        id: "s3-2-organic-classification-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Link intermolecular H-bonding to IR band width",
        question:
          "Why is the `O−H` stretching absorption of liquid ethanol (`3200–3600 cm⁻¹`) much broader than the `C=O` stretching absorption of propanone (`1715 cm⁻¹`)?",
        options: [
          "The O−H bond is weaker than C=O, so it absorbs all infrared wavenumbers equally.",
          "Intermolecular hydrogen bonding produces a wide distribution of O−H bond strengths.",
          "Oxygen has three stable isotopes that split the O−H band into overlapping lines.",
          "Liquid ethanol rotates freely during IR irradiation whereas propanone cannot rotate.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what intermolecular force pulls on the H atom of an `O−H` bond in liquid ethanol.",
          "Because hydrogen-bond distances vary continuously in a liquid, `O−H` bonds stretch across a broad continuum of energies.",
        ],
        explanation:
          "Dynamic **hydrogen bonding** between neighbouring ethanol molecules weakens individual `O−H` bonds by varying amounts at any instant, producing a continuous spread of vibrational frequencies—a **broad** band.",
      },
      {
        id: "s3-2-organic-classification-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "State",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Purpose of IR fingerprint region (< 1500 cm⁻¹)",
        question: "What is the primary analytical use of the IR **fingerprint region** (below `1500 cm⁻¹`)?",
        options: [
          "Uniquely confirming a compound's identity by matching against a reference spectrum.",
          "Calculating the exact relative molecular mass (`M_r`) of an unknown molecule.",
          "Measuring the ratio of hydrogen atoms in each chemical environment.",
          "Determining the number of chiral centres present in an optical isomer.",
        ],
        answerIndex: 0,
        hints: [
          "Below `1500 cm⁻¹`, many bending and skeletal `C−C`/`C−O` vibrations overlap in a complex pattern.",
          "Even closely related isomers (like propan-1-ol and propan-2-ol) have totally distinct patterns below `1500 cm⁻¹`.",
        ],
        explanation:
          "Every compound produces a unique, intricate pattern of bending and skeletal vibrations below `1500 cm⁻¹`; comparing this **fingerprint region** with a spectral database confirms exact molecular identity.",
      },
      {
        id: "s3-2-organic-classification-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "ihd-ms-ir-spectroscopy",
        strategy: "Combine MS fragmentation with IR carbonyl check",
        question:
          "An unknown compound of formula `C₄H₈O` (`M_r = 72`; `C = 12, H = 1, O = 16`) shows a strong sharp IR peak at `1715 cm⁻¹` (no broad `O−H`), and major MS peaks at `m/z = 57` and `m/z = 43`. Which compound is it?",
        options: ["But-3-en-1-ol", "Ethoxyethene", "2-methylpropanal", "Butanone"],
        answerIndex: 3,
        hints: [
          "Sharp `1715 cm⁻¹` with no `O−H` rules out alcohols (`but-3-en-1-ol`) and ethers (`ethoxyethene`).",
          "Check `72 − 57 = 15` (`CH₃•` loss giving `C₂H₅CO⁺ = 57`) and `72 − 43 = 29` (`C₂H₅•` loss giving `CH₃CO⁺ = 43`).",
        ],
        explanation:
          "**Butanone** (`CH₃−CO−CH₂CH₃`, `M_r = 72`) contains a `C=O` group (`1715 cm⁻¹`) and undergoes α-cleavage on either side of the carbonyl to form **`C₂H₅CO⁺` (`m/z = 57`, `M − 15`)** and **`CH₃CO⁺` (`m/z = 43`, `M − 29`)**. `2-methylpropanal` (`(CH₃)₂CHCHO`) would instead give `m/z = 43` (`C₃H₇⁺`) and `m/z = 29` (`CHO⁺`) without acylium `m/z = 57`.",
      },
      {
        id: "s3-2-organic-classification-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Check both C=C carbons for two different substituents",
        question: "Which alkene exhibits **cis–trans (E/Z) stereoisomerism**?",
        options: ["Propene", "2-methylbut-2-ene", "Pent-2-ene", "2-methylpropene"],
        answerIndex: 2,
        hints: [
          "For E/Z isomerism, BOTH carbons of the `C=C` double bond must carry two *different* atoms or groups.",
          "Check each `C=C`: any `=CH₂` or `=C(CH₃)₂` carbon carries two identical groups and immediately fails!",
        ],
        explanation:
          "In **pent-2-ene** (`CH₃CH=CHCH₂CH₃`), C-2 holds `−H` and `−CH₃` (different) and C-3 holds `−H` and `−CH₂CH₃` (different), allowing `(E)` and `(Z)` stereoisomers. Propene and 2-methylpropene have `=CH₂`, while 2-methylbut-2-ene has `=C(CH₃)₂`.",
      },
      {
        id: "s3-2-organic-classification-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Cyclic rings also restrict C−C rotation",
        question: "Which saturated cyclic compound exhibits **cis–trans stereoisomerism**?",
        options: [
          "1,2-dichlorocyclopropane",
          "1,1-dichlorocyclopropane",
          "Chlorocyclopropane",
          "Cyclopropane",
        ],
        answerIndex: 0,
        hints: [
          "A ring prevents free rotation about C−C single bonds, just like a `C=C` π bond does.",
          "You need TWO different ring carbons each carrying two different groups (`H` and `Cl`) so the two `Cl` atoms can sit on the same face (*cis*) or opposite faces (*trans*).",
        ],
        explanation:
          "**1,2-dichlorocyclopropane** has restricted ring rotation with two different groups (`−H` and `−Cl`) on both C-1 and C-2, giving *cis* (both Cl on the same face) and *trans* (Cl on opposite faces) stereoisomers.",
      },
      {
        id: "s3-2-organic-classification-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Use symmetry planes to count chemical environments",
        question:
          "How many distinct signals (peaks) appear in the ¹H NMR spectrum of `1,4-dimethylbenzene` (`CH₃−C₆H₄−CH₃`, with methyl groups on opposite ring carbons)?",
        options: ["1 signal", "2 signals", "3 signals", "4 signals"],
        answerIndex: 1,
        hints: [
          "Draw the benzene ring with methyl groups at C-1 and C-4 and look for mirror planes of symmetry.",
          "Are the two `−CH₃` groups equivalent? Are all four ring `Ar−H` protons equivalent?",
        ],
        explanation:
          "Due to two perpendicular mirror planes, both `−CH₃` groups (6H) are chemically identical and all four aromatic ring protons (4H) are chemically identical, giving exactly **2 signals** (integration `6 : 4`, i.e. `3 : 2`).",
      },
      {
        id: "s3-2-organic-classification-m2-q14",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Recall all properties of TMS reference standard",
        question: "Which set of properties explains why tetramethylsilane (`Si(CH₃)₄`, TMS) is used as the `δ = 0.0 ppm` reference in ¹H NMR?",
        options: [
          "It has four different proton environments and reacts rapidly with alcohols.",
          "Silicon is more electronegative than carbon, giving a strong downfield signal.",
          "It has a very high boiling point so it remains permanently mixed with the product.",
          "It has 12 equivalent, strongly shielded protons and is chemically inert and volatile.",
        ],
        answerIndex: 3,
        hints: [
          "Compare electronegativity: Si (`1.9`) < C (`2.6`), so electron density stays high around the 12 equivalent methyl protons.",
          "TMS boils at `27 °C`, making sample recovery effortless.",
        ],
        explanation:
          "TMS has **12 chemically equivalent protons** (one intense sharp singlet), strong **shielding** from electropositive Si (placing it at `0.0 ppm`, upfield of nearly all organic signals), and is **inert and volatile** (`bp 27 °C`).",
      },
      {
        id: "s3-2-organic-classification-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Apply n + 1 rule using adjacent non-equivalent H",
        question:
          "What splitting pattern is observed in high-resolution ¹H NMR for the **`−CH₂−`** protons of chloroethane (`CH₃CH₂Cl`)?",
        options: [
          "Singlet (1 line)",
          "Triplet (1 : 2 : 1)",
          "Quartet (1 : 3 : 3 : 1)",
          "Doublet (1 : 1)",
        ],
        answerIndex: 2,
        hints: [
          "Do NOT count the 2 protons on the `−CH₂−` carbon itself!",
          "Count non-equivalent protons on the directly adjacent carbon (`CH₃` → `n = 3`), then calculate `n + 1`.",
        ],
        explanation:
          "The `−CH₂−` protons are adjacent to the `−CH₃` group (`n = 3` non-equivalent neighbouring protons), so they split into `n + 1 = 4` lines—a **quartet** with intensity ratio `1 : 3 : 3 : 1`. (The `−CH₃` signal is the matching 3H triplet.)",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3 — HL Stereoisomerism, High-Res ¹H NMR & Combined Elucidation
  // answerIndex spread: [3, 4, 4, 4]
  // ===========================================================================
  {
    id: "s3-2-organic-classification-m3",
    title: "Paper M3 · Stereoisomerism, ¹H NMR & Combined Analysis [HL]",
    level: "HL",
    questions: [
      {
        id: "s3-2-organic-classification-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "CIP priority by atomic number Z, then second-shell tie-break",
        question:
          "According to the Cahn–Ingold–Prelog (CIP) priority rules, which sequence ranks these four substituents from **highest** to **lowest** priority?",
        options: [
          "`−Br` > `−CHO` > `−CH₂OH` > `−OH`",
          "`−Br` > `−OH` > `−CHO` > `−CH₂OH`",
          "`−CHO` > `−Br` > `−CH₂OH` > `−OH`",
          "`−Br` > `−OH` > `−CH₂OH` > `−CHO`",
        ],
        answerIndex: 1,
        hints: [
          "First compare the **atomic number (`Z`)** of the single atom directly attached to the `C=C` carbon: `Br (35) > O (8) > C (6)`.",
          "Break the tie between `−CHO` and `−CH₂OH`: double-bonded `C=O` counts as bonded to `(O, O, H)`, whereas `−CH₂OH` is bonded to `(O, H, H)`.",
        ],
        explanation:
          "Directly bonded atoms give `Br (Z=35) > O (Z=8) > C (Z=6)`, so `−Br` is #1 and `−OH` is #2 (even though `−CHO` has higher molar mass!). Between the two carbon groups, `−CHO` connects to `(O, O, H)` while `−CH₂OH` connects to `(O, H, H)`, so `−CHO` outranks `−CH₂OH`.",
      },
      {
        id: "s3-2-organic-classification-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Never equate cis with (Z) without checking atomic numbers",
        question:
          "In a stereoisomer of `2-bromobut-2-ene` (`CH₃C(Br)=CHCH₃`), the two `−CH₃` groups lie on the **same side** of the `C=C` double bond. What is the correct IUPAC stereochemical designation?",
        options: [
          "`(Z)-2-bromobut-2-ene`, because both methyl groups are cis.",
          "`(Z)-2-bromobut-2-ene`, because Br and H lie on the same side.",
          "`(E)-2-bromobut-2-ene`, because both methyl groups are trans.",
          "`(E)-2-bromobut-2-ene`, because priority-1 Br and CH₃ lie opposite.",
        ],
        answerIndex: 3,
        hints: [
          "Rank C-2's substituents: `−Br (Z = 35)` vs `−CH₃ (C, Z = 6)` → **`−Br` is priority 1**.",
          "Rank C-3's substituents: `−CH₃ (C, Z = 6)` vs `−H (Z = 1)` → **`−CH₃` is priority 1**. If the two `−CH₃` groups are on the same side, where are priority-1 `−Br` and priority-1 `−CH₃`?",
        ],
        explanation:
          "On C-2, `−Br` outranks `−CH₃`; on C-3, `−CH₃` outranks `−H`. When the two methyl groups sit on the same side, priority-1 `−Br` (on C-2) and priority-1 `−CH₃` (on C-3) sit on **opposite sides** of the double bond → **`(E)-2-bromobut-2-ene`**!",
      },
      {
        id: "s3-2-organic-classification-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Check for an sp³ carbon with 4 distinct groups",
        question: "Which alcohol exhibits **optical isomerism** (contains a chiral carbon)?",
        options: ["Propan-2-ol", "Pentan-3-ol", "Butan-2-ol", "2-methylpropan-2-ol"],
        answerIndex: 2,
        hints: [
          "Check the four groups attached to the carbon bearing `−OH` in each molecule.",
          "In `pentan-3-ol` (`CH₃CH₂CH(OH)CH₂CH₃`), both alkyl chains attached to C-3 are identical ethyl groups!",
        ],
        explanation:
          "In **butan-2-ol** (`CH₃−C*H(OH)−CH₂CH₃`), C-2 is bonded to four different groups: `−H`, `−OH`, `−CH₃`, and `−CH₂CH₃`. Propan-2-ol (two `−CH₃`), pentan-3-ol (two `−C₂H₅`), and 2-methylpropan-2-ol (three `−CH₃`) each have identical groups on their α-carbon.",
      },
      {
        id: "s3-2-organic-classification-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Inspect every sp³ carbon with ≤1 H for 4 distinct groups",
        question: "How many **chiral carbon atoms** are present in one molecule of `2,3-dichloropentane` (`CH₃CH(Cl)CH(Cl)CH₂CH₃`)?",
        options: ["2 chiral carbons", "1 chiral carbon", "3 chiral carbons", "0 chiral carbons"],
        answerIndex: 0,
        hints: [
          "Cross out C-1 (`CH₃`), C-4 (`CH₂`), and C-5 (`CH₃`) immediately—each carries ≥2 identical H atoms.",
          "Check C-2 (`−H, −Cl, −CH₃, −CH(Cl)C₂H₅`) and C-3 (`−H, −Cl, −C₂H₅, −CH(Cl)CH₃`).",
        ],
        explanation:
          "Both **C-2** and **C-3** are bonded to four distinct atoms/groups, giving **2 chiral carbons** (and since the ends `−CH₃` and `−C₂H₅` differ, there is no meso symmetry, yielding `2² = 4` optical stereoisomers).",
      },
      {
        id: "s3-2-organic-classification-m3-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Cancellation of opposite optical rotations in a racemate",
        question: "Why is a **racemic mixture** of lactic acid optically inactive when tested in a polarimeter?",
        options: [
          "Lactic acid molecules lose their chiral centre when dissolved in water.",
          "Equal amounts of both enantiomers rotate plane-polarized light equally in opposite directions.",
          "The two enantiomers react with each other to form an achiral symmetrical dimer.",
          "Plane-polarized light cannot pass through mixtures containing two stereoisomers.",
        ],
        answerIndex: 1,
        hints: [
          "Recall the definition of a racemic mixture: an equimolar (`50 : 50`) mixture of `(+)` and `(−)` enantiomers.",
          "What is the net rotation when half the molecules rotate light by `+θ` and the other half rotate it by `−θ`?",
        ],
        explanation:
          "In a `50 : 50` racemic mixture, the clockwise (`+`) rotation caused by one enantiomer is exactly cancelled by the equal anticlockwise (`−`) rotation of the other enantiomer, resulting in **zero net optical rotation**.",
      },
      {
        id: "s3-2-organic-classification-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Enantiomers (identical physical) vs Diastereomers (different physical)",
        question: "Which statement accurately contrasts **enantiomers** with **diastereomers**?",
        options: [
          "Enantiomers have different boiling points, whereas diastereomers have identical boiling points.",
          "Both enantiomers and diastereomers are non-superimposable mirror images of each other.",
          "Diastereomers are non-mirror-image stereoisomers that possess different physical properties.",
          "Enantiomers have different IR spectra, whereas diastereomers share identical IR spectra.",
        ],
        answerIndex: 2,
        hints: [
          "Remember that cis/trans isomers (like *cis*-but-2-ene and *trans*-but-2-ene) are examples of diastereomers—do they have identical or different boiling points?",
          "Enantiomers have identical bond distances and identical dipole moments, so their melting points, boiling points, and IR spectra are identical.",
        ],
        explanation:
          "**Diastereomers** are stereoisomers that are **not mirror images** (such as E/Z isomers or partially inverted multi-chiral compounds) and have **different physical properties** (melting point, boiling point, solubility). **Enantiomers** are mirror images with identical physical properties.",
      },
      {
        id: "s3-2-organic-classification-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "structural-isomers-stereoisomers-hl",
        strategy: "Multiply independent E/Z and chiral-centre possibilities (2^(n+m))",
        question:
          "How many **configurational stereoisomers** exist in total for `hex-4-en-3-ol` (`CH₃CH=CHCH(OH)CH₂CH₃`)?",
        options: ["2 stereoisomers", "3 stereoisomers", "6 stereoisomers", "4 stereoisomers"],
        answerIndex: 3,
        hints: [
          "Check C2=C3 for E/Z isomerism: C-2 has `(H, CH₃)` and C-3 has `(H, CH(OH)C₂H₅)` → 2 options (`E` or `Z`).",
          "Check C-4 for chirality: C-4 has `(H, OH, C₂H₅, CH=CHCH₃)` → 2 options (`+` or `−`). Multiply the independent choices!",
        ],
        explanation:
          "`hex-2-en-4-ol` contains one E/Z double bond (`m = 1`) and one chiral carbon (`n = 1`), with no internal symmetry: total stereoisomers = `2^(1+1) = 4` (`(E,+), (E,−), (Z,+), (Z,−)`).",
      },
      {
        id: "s3-2-organic-classification-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Count proton environments and splitting in tert-butyl alcohol",
        question:
          "Which ¹H NMR spectrum is predicted for **2-methylpropan-2-ol**, `(CH₃)₃COH`?",
        options: [
          "Two signals: a 9H doublet and a 1H multiplet.",
          "Two signals: a 9H singlet and a 1H singlet.",
          "Four signals: three 3H singlets and one 1H singlet.",
          "Three signals: a 6H singlet, a 3H singlet, and a 1H singlet.",
        ],
        answerIndex: 1,
        hints: [
          "All three `−CH₃` groups are attached to the exact same central carbon — how many environments do those 9 protons form?",
          "Are there any protons on the central quaternary carbon adjacent to the `−CH₃` groups?",
        ],
        explanation:
          "All nine methyl protons are chemically equivalent and have zero H atoms on the adjacent quaternary carbon → a **9H singlet**. The `−OH` proton forms a separate **1H singlet** (ratio `9 : 1`).",
      },
      {
        id: "s3-2-organic-classification-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Recognize the isopropyl 6H doublet + 1H septet motif",
        question: "What ¹H NMR splitting pattern is observed for **2-chloropropane**, `(CH₃)₂CHCl`?",
        options: [
          "A 6H singlet and a 1H singlet",
          "A 6H triplet and a 1H quartet",
          "A 3H triplet, a 2H quartet, and a 2H triplet",
          "A 6H doublet and a 1H septet",
        ],
        answerIndex: 3,
        hints: [
          "The two `−CH₃` groups are symmetric (6 equivalent H) and sit next to `1` methine proton (`−CHCl−`).",
          "The single `−CHCl−` proton sits next to `6` equivalent methyl protons → apply `n + 1` to both environments!",
        ],
        explanation:
          "In `(CH₃)₂CHCl`, the 6 equivalent methyl protons see `n = 1` adjacent proton → **6H doublet**; the 1 methine proton sees `n = 6` adjacent protons → **1H septet** (the classic isopropyl signature).",
      },
      {
        id: "s3-2-organic-classification-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Equivalent protons never split each other",
        question:
          "Why does high-resolution ¹H NMR of `1,2-dichloroethane` (`ClCH₂−CH₂Cl`) show only a **single unsplit singlet** instead of a triplet?",
        options: [
          "Chlorine atoms absorb radio waves and suppress all spin–spin coupling.",
          "Rapid chlorine exchange averages the two `CH₂` carbons on the NMR timescale.",
          "All four protons are chemically equivalent, and equivalent protons do not split each other.",
          "Spin–spin splitting occurs only when protons are separated by four or more bonds.",
        ],
        answerIndex: 2,
        hints: [
          "Check the molecular symmetry of `ClCH₂−CH₂Cl`: are the two `−CH₂Cl` groups chemically different or identical?",
          "Recall the exact wording of the `n + 1` rule: `n` counts chemically **non-equivalent** adjacent protons.",
        ],
        explanation:
          "By symmetry, both `−CH₂Cl` groups in `1,2-dichloroethane` have the exact same chemical environment; chemically **equivalent protons do not split one another**, yielding a single 4H singlet.",
      },
      {
        id: "s3-2-organic-classification-m3-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Compare deshielding across propanal environments",
        question:
          "In the ¹H NMR spectrum of propanal (`CH₃CH₂CHO`), which proton environment resonates at the **highest chemical shift (`δ`, furthest downfield)**?",
        options: [
          "The aldehyde proton `−CHO` bonded directly to the carbonyl carbon",
          "The methylene protons `−CH₂−` adjacent to the carbonyl group",
          "The terminal methyl protons `−CH₃` furthest from the carbonyl group",
          "The twelve equivalent methyl protons of the TMS internal standard",
        ],
        answerIndex: 0,
        hints: [
          "Higher `δ` (downfield/left) corresponds to the most **deshielded** proton.",
          "Check IB Data Booklet chemical shifts: aldehyde `R−CHO` sits near `9.4–10.0 ppm`.",
        ],
        explanation:
          "The aldehyde **`−CHO`** proton is directly bonded to the electron-withdrawing carbonyl carbon (plus anisotropic magnetic deshielding from the `C=O` π bond), placing it far downfield at **`9.4–10.0 ppm`**.",
      },
      {
        id: "s3-2-organic-classification-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Locate the 3.7–4.8 ppm −O−CHₙ ester anchor peak",
        question:
          "An ester of molecular formula `C₄H₈O₂` produces three ¹H NMR signals: `δ = 3.7 ppm` (3H singlet), `δ = 2.3 ppm` (2H quartet), and `δ = 1.15 ppm` (3H triplet). Which ester is it?",
        options: [
          "Ethyl ethanoate, `CH₃COOCH₂CH₃`",
          "Propyl methanoate, `HCOOCH₂CH₂CH₃`",
          "Propan-2-yl methanoate, `HCOOCH(CH₃)₂`",
          "Methyl propanoate, `CH₃CH₂COOCH₃`",
        ],
        answerIndex: 3,
        hints: [
          "Which protons are bonded to the carbon directly attached to the single-bonded ester oxygen (`−O−`)? Those sit furthest downfield (`3.7–4.8 ppm`).",
          "Here the **`3H singlet`** sits at `3.7 ppm` (`−O−CH₃`), while the `2H quartet` sits at `2.3 ppm` (`−CH₂−C=O`).",
        ],
        explanation:
          "The **3H singlet at `3.7 ppm`** proves a `−O−CH₃` (methyl ester) group, while the **2H quartet at `2.3 ppm` + 3H triplet at `1.15 ppm`** proves a `CH₃CH₂−C(=O)−` propanoate chain → **methyl propanoate**. In ethyl ethanoate, the 2H quartet would sit downfield at `4.1 ppm` and the 3H singlet at `2.0 ppm`.",
      },
      {
        id: "s3-2-organic-classification-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Combine MS + IR + single-peak ¹H NMR symmetry",
        question:
          "Compound **Z** (`M⁺ = 58`; `C = 12, H = 1, O = 16`) has formula `C₃H₆O`, a strong sharp IR absorption at `1715 cm⁻¹` (no `O−H`), and a ¹H NMR spectrum containing **only one singlet** at `δ = 2.1 ppm`. What is **Z**?",
        options: [
          "Propanal, `CH₃CH₂CHO`",
          "Propanone, `CH₃COCH₃`",
          "Prop-2-en-1-ol, `CH₂=CHCH₂OH`",
          "Methoxyethene, `CH₃OCH=CH₂`",
        ],
        answerIndex: 1,
        hints: [
          "Sharp `1715 cm⁻¹` with no `O−H` narrows `C₃H₆O` to propanal or propanone.",
          "Only ONE ¹H NMR signal requires **all 6 protons to be chemically equivalent**!",
        ],
        explanation:
          "**Propanone** (`CH₃COCH₃`) has a sharp `C=O` stretch (`1715 cm⁻¹`) and complete mirror symmetry so all 6 protons resonate as a **single singlet at `2.1 ppm`**. Propanal would show 3 signals including an aldehyde signal near `9.8 ppm`.",
      },
      {
        id: "s3-2-organic-classification-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Combine acid IR signature with isopropyl ¹H NMR splitting",
        question:
          "An unknown compound (`C₄H₈O₂`, `M⁺ = 88`) shows a sharp IR peak at `1710 cm⁻¹` and a very broad band from `2500–3000 cm⁻¹`. Its ¹H NMR shows three signals: `11.6 ppm` (1H broad singlet), `2.6 ppm` (1H septet), and `1.2 ppm` (6H doublet). Identify the compound.",
        options: [
          "Butanoic acid, `CH₃CH₂CH₂COOH`",
          "Propan-2-yl methanoate, `HCOOCH(CH₃)₂`",
          "2-methylpropanoic acid, `(CH₃)₂CHCOOH`",
          "2-methylpropanal, `(CH₃)₂CHCHO`",
        ],
        answerIndex: 2,
        hints: [
          "Both the very broad `2500–3000 cm⁻¹` IR band AND the `11.6 ppm` 1H broad singlet prove a **carboxylic acid (`−COOH`)**.",
          "Between `butanoic acid` and `2-methylpropanoic acid`, which one has an isopropyl group (`6H doublet + 1H septet`)?",
        ],
        explanation:
          "IR (`1710 cm⁻¹` + very broad `2500–3000 cm⁻¹`) and ¹H NMR (`11.6 ppm` 1H broad singlet) confirm a carboxylic acid, while the **6H doublet (`1.2 ppm`) + 1H septet (`2.6 ppm`)** uniquely proves an isopropyl chain → **`(CH₃)₂CHCOOH` (2-methylpropanoic acid)**. Straight-chain butanoic acid would give 4 NMR signals (3H triplet, 2H sextet, 2H triplet, 1H singlet).",
      },
      {
        id: "s3-2-organic-classification-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "proton-nmr-combined-hl",
        strategy: "Full combined IHD + MS + IR + ¹H NMR aromatic deduction",
        question:
          "Compound **Q** (`C₈H₈O`, `M⁺ = 120`; `C = 12, H = 1, O = 16`) shows major MS peaks at `m/z = 105` and `m/z = 77`, a sharp IR peak at `1690 cm⁻¹` (no `O−H`), and ¹H NMR signals at `7.4–8.0 ppm` (5H multiplet) and `2.6 ppm` (3H singlet). Deduce the structure of **Q**.",
        options: [
          "Phenylethanone, `C₆H₅COCH₃`",
          "Phenylethanal, `C₆H₅CH₂CHO`",
          "4-methylbenzaldehyde, `CH₃C₆H₄CHO`",
          "Ethenyloxybenzene, `C₆H₅OCH=CH₂`",
        ],
        answerIndex: 0,
        hints: [
          "`IHD = (16 + 2 − 8)/2 = 5`, matching a benzene ring (`4`, confirmed by `m/z = 77` `C₆H₅⁺` and 5H at `7.4–8.0 ppm`) + one `C=O` (`1`, `1690 cm⁻¹`).",
          "A **5H** aromatic signal proves a **monosubstituted** benzene ring (`C₆H₅−`), while `120 − 105 = 15` (`CH₃•` loss) and a **3H singlet at `2.6 ppm`** prove `−COCH₃`!",
        ],
        explanation:
          "**Phenylethanone (`C₆H₅COCH₃`)** matches every datum: `IHD = 5` (benzene + `C=O`), monosubstituted ring (5H at `7.4–8.0 ppm`, `m/z = 77` `C₆H₅⁺`), ketone `C=O` (`1690 cm⁻¹`, no aldehyde proton at `9.5–10 ppm`), and `−COCH₃` (3H singlet at `2.6 ppm`, loss of `CH₃• = 15` giving `C₆H₅CO⁺` at `m/z = 105`).",
      },
    ],
  },
];
