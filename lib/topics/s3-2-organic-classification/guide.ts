import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "s3-2-organic-classification",
  title: "Structure 3.2: Functional Groups & Organic Analysis",
  strand: "Structure 3: Classification & Organic",
  icon: "🧬",
  level: "SL",
  summary:
    "Classify and name organic families by IUPAC rules, distinguish structural isomers from E/Z and optical stereoisomers [HL], and deduce unknown molecular structures from IHD, mass spectrometry, infrared spectroscopy, and ¹H NMR [HL].",
  intro:
    "Carbon forms more known compounds than every other element combined, yet almost all of organic chemistry organizes around a compact toolkit of **functional groups** and a few clean analytical fingerprints. In this topic you will learn how to read and write every IB structural representation, master systematic IUPAC nomenclature, unlock 3D stereochemistry (E/Z and chirality at HL), and play molecular detective—combining **Index of Hydrogen Deficiency (IHD)**, **Mass Spectrometry (MS)**, **Infrared (IR) spectroscopy**, and **¹H NMR spectroscopy [HL]** to reconstruct unknown molecules from raw experimental spectra.",
  guide: [
    // =========================================================================
    // SECTION 1: Homologous Series, Functional Groups & IUPAC Naming (SL)
    // =========================================================================
    {
      id: "homologous-series-iupac",
      heading: "S3.2 Homologous Series, Functional Groups & IUPAC Naming",
      level: "SL",
      discovery: {
        problem:
          "Compare two molecules with the exact same molecular formula `C₂H₆O`: **ethanol** (`CH₃CH₂OH`, boiling point `78 °C`, completely miscible with water) and **methoxymethane** (`CH₃OCH₃`, boiling point `−24 °C`, a gas at room temperature). Both have identical molar mass (`46 g mol⁻¹`) and identical atoms—so why do their boiling points differ by over `100 °C`?",
        idea:
          "The atoms are connected differently, creating two different **functional groups**! Ethanol contains a **hydroxyl group (`−OH`)**, allowing strong **intermolecular hydrogen bonding** between molecules. Methoxymethane contains an **ether linkage (`−O−`)** with no `O−H` bond, so its molecules only experience weaker permanent dipole–dipole and London dispersion forces. Functional groups dictate both physical properties and chemical reactivity.",
      },
      body: [
        "Organic molecules are organized into **homologous series**—families of compounds sharing the same **general formula** and the same **functional group**. Successive members differ by a single methylene unit, **−CH₂−** (increasing molar mass by {{14.03}} g mol⁻¹).",
        "",
        "Because all members carry the same functional group, they show **similar chemical properties**, while their **physical properties** change gradually along the series:",
        "- **Boiling point rises** as carbon chain length increases, because larger electron clouds create stronger **London dispersion forces** (LDFs).",
        "- **Branching lowers boiling point** for isomers of the same chain length, because spherical branched chains pack less closely and have smaller surface contact area, weakening LDFs.",
        "- **Water solubility decreases** as the non-polar hydrophobic hydrocarbon chain lengthens—short-chain alcohols, carboxylic acids, and amines (C1–C3) are fully miscible via hydrogen bonding with water, whereas longer chains become insoluble.",
        "",
        "### Five Ways to Represent an Organic Molecule",
        "| Representation | Example (butan-2-ol) | What it shows |",
        "|---|---|---|",
        "| **Empirical formula** | `C₄H₁₀O` | Simplest whole-number ratio of atoms |",
        "| **Molecular formula** | `C₄H₁₀O` | Actual number of each atom in one molecule |",
        "| **Condensed structural** | `CH₃CH(OH)CH₂CH₃` | Atom-by-atom connectivity along the chain |",
        "| **Full structural** | Every C, H, O and covalent bond drawn | Complete 2D bonding layout (every atom shown) |",
        "| **Skeletal formula** | Zig-zag lines; vertices = C atoms, H on C omitted | Cleanest form for rings and large chains (heteroatom H like `−OH`, `−NH₂`, `−CHO` must still be written!) |",
        "",
        "### IB Core Organic Classes & Functional Groups",
        "IB examiners strictly distinguish between the **class** of a compound and the **name of its functional group**:",
        "",
        "| Compound Class | Functional Group Name | Structure | IUPAC Suffix / Prefix | Example |",
        "|---|---|---|---|---|",
        "| **Alkane** | *(saturated C−C, C−H)* | `R−CH₃` | `-ane` | propane |",
        "| **Alkene** | Alkenyl | `C=C` | `-ene` | but-2-ene |",
        "| **Alkyne** | Alkynyl | `C≡C` | `-yne` | propyne |",
        "| **Halogenoalkane** | Halogeno | `−F, −Cl, −Br, −I` | `fluoro-, chloro-, bromo-, iodo-` | 2-chloropropane |",
        "| **Alcohol** | Hydroxyl | `−OH` | `-ol` (prefix `hydroxy-`) | propan-2-ol |",
        "| **Ether** | Ether (`−O−`) | `R−O−R'` | `alkoxy-` + alkane | methoxyethane |",
        "| **Aldehyde** | Aldehyde (terminal carbonyl) | `−CHO` | `-al` | propanal |",
        "| **Ketone** | Ketone (internal carbonyl) | `R−CO−R'` | `-one` | propanone |",
        "| **Carboxylic acid** | Carboxyl | `−COOH` | `-oic acid` | ethanoic acid |",
        "| **Ester** | Ester | `R−COO−R'` | `alkyl alkanoate` | ethyl propanoate |",
        "| **Amine** | Amino | `−NH₂`, `−NHR`, `−NR₂` | `-amine` (prefix `amino-`) | propan-1-amine |",
        "| **Amide** | Carboxamide | `−CONH₂` | `-amide` | ethanamide |",
        "| **Nitrile** | Nitrile | `−C≡N` | `-nitrile` | propanenitrile |",
        "| **Arene** | Phenyl (benzene ring) | `−C₆H₅` | `benzene` / `phenyl-` | methylbenzene |",
        "",
        "### Primary (1°), Secondary (2°) & Tertiary (3°) Classification",
        "Watch the crucial rule difference between **alcohols/halogenoalkanes** and **amines**:",
        "- **Alcohols & halogenoalkanes**: count how many **carbon atoms are bonded to the carbon atom carrying the `−OH` or `−X` group**.",
        "  - 1° (primary): `CH₃CH₂OH` (C bonded to 1 C, or 0 C in methanol)",
        "  - 2° (secondary): `(CH₃)₂CHOH` (C bonded to 2 C atoms)",
        "  - 3° (tertiary): `(CH₃)₃COH` (C bonded to 3 C atoms)",
        "- **Amines**: count how many **carbon atoms are bonded directly to the nitrogen atom**.",
        "  - 1° amine: `R−NH₂` (1 C on N — even `(CH₃)₃CNH₂` is a **primary** amine!)",
        "  - 2° amine: `R₂NH` (2 C on N, e.g. `N`-methylmethanamine)",
        "  - 3° amine: `R₃N` (3 C on N, e.g. `N,N`-dimethylmethanamine)",
        "",
        "### Systematic IUPAC Naming Checklist (C1–C6)",
        "1. **Find the principal functional group** (highest priority sets the suffix: carboxylic acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > alkene/alkyne > halogeno/alkyl).",
        "2. **Choose the longest continuous carbon chain** containing the principal functional group (and multiple bonds where present). Roots: `meth-` (1), `eth-` (2), `prop-` (3), `but-` (4), `pent-` (5), `hex-` (6).",
        "3. **Number the chain** so the principal functional group gets the **lowest possible locant** (for aldehydes, carboxylic acids, amides, and nitriles, that carbon is automatically C-1 and `1` is omitted).",
        "4. **List substituents alphabetically** (ignoring multiplying prefixes `di-`, `tri-`, `tetra-`), separating numbers with commas and numbers from words with hyphens: e.g. `3-bromo-2,2-dimethylpentane`.",
        "5. **Esters (`R−COO−R'`)**: name the **alkyl group from the alcohol (`R'`, bonded to the single-bonded O)** first, followed by a space, then the **alkanoate from the carboxylic acid (`R−COO`, including the carbonyl carbon)**! For example, `CH₃CH₂COOCH₃` is **methyl propanoate** (not propyl ethanoate!).",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" role="img" aria-label="Functional group map comparing carbonyl families and primary, secondary, tertiary alcohols versus amines"><rect x="4" y="4" width="632" height="292" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="320" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Carbonyl Families &amp; 1° / 2° / 3° Classification Trap</text><rect x="18" y="42" width="144" height="106" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/><text x="90" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Aldehyde (-al)</text><text x="90" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">O</text><line x1="87" y1="88" x2="87" y2="103" stroke="var(--ink)" stroke-width="1.6"/><line x1="93" y1="88" x2="93" y2="103" stroke="var(--ink)" stroke-width="1.6"/><text x="90" y="117" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">R — C — H</text><text x="90" y="138" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Terminal C=O (C-1)</text><rect x="172" y="42" width="144" height="106" rx="10" fill="var(--surface)" stroke="var(--info)" stroke-width="1.5"/><text x="244" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--info)">Ketone (-one)</text><text x="244" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">O</text><line x1="241" y1="88" x2="241" y2="103" stroke="var(--ink)" stroke-width="1.6"/><line x1="247" y1="88" x2="247" y2="103" stroke="var(--ink)" stroke-width="1.6"/><text x="244" y="117" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">R — C — R'</text><text x="244" y="138" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Internal C=O (min C3)</text><rect x="326" y="42" width="144" height="106" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.5"/><text x="398" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Carboxylic Acid</text><text x="398" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">O</text><line x1="395" y1="88" x2="395" y2="103" stroke="var(--ink)" stroke-width="1.6"/><line x1="401" y1="88" x2="401" y2="103" stroke="var(--ink)" stroke-width="1.6"/><text x="398" y="117" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">R — C — OH</text><text x="398" y="138" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Carboxyl (-oic acid)</text><rect x="480" y="42" width="142" height="106" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/><text x="551" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--warn)">Ester (alkyl -oate)</text><text x="551" y="84" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">O</text><line x1="548" y1="88" x2="548" y2="103" stroke="var(--ink)" stroke-width="1.6"/><line x1="554" y1="88" x2="554" y2="103" stroke="var(--ink)" stroke-width="1.6"/><text x="551" y="117" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink)">R — C — O — R'</text><text x="551" y="138" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">R' = alkyl · R-COO = -oate</text><rect x="18" y="162" width="298" height="122" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="167" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Alcohols &amp; Halogenoalkanes: count C on α-Carbon</text><text x="68" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">1° Primary</text><text x="68" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R-CH₂-OH</text><text x="68" y="246" text-anchor="middle" font-size="10.5" fill="var(--brand)">1 C on C-OH</text><text x="167" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">2° Secondary</text><text x="167" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R₂CH-OH</text><text x="167" y="246" text-anchor="middle" font-size="10.5" fill="var(--brand)">2 C on C-OH</text><text x="266" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">3° Tertiary</text><text x="266" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R₃C-OH</text><text x="266" y="246" text-anchor="middle" font-size="10.5" fill="var(--brand)">3 C on C-OH</text><text x="167" y="272" text-anchor="middle" font-size="10.5" font-style="italic" fill="var(--ink-2)">Example: (CH₃)₃C-OH is a 3° alcohol</text><rect x="326" y="162" width="296" height="122" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="474" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Amines: count C directly on Nitrogen!</text><text x="376" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">1° Amine</text><text x="376" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R-NH₂</text><text x="376" y="246" text-anchor="middle" font-size="10.5" fill="var(--bad)">1 C on N</text><text x="474" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">2° Amine</text><text x="474" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R-NH-R'</text><text x="474" y="246" text-anchor="middle" font-size="10.5" fill="var(--bad)">2 C on N</text><text x="572" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">3° Amine</text><text x="572" y="228" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">R₃N</text><text x="572" y="246" text-anchor="middle" font-size="10.5" fill="var(--bad)">3 C on N</text><text x="474" y="272" text-anchor="middle" font-size="10.5" font-style="italic" fill="var(--ink-2)">Trap: (CH₃)₃C-NH₂ is still a 1° amine!</text></svg>`,
      diagramCaption:
        "Top: Four carbonyl-containing classes that differ only in the atom attached to C=O. Bottom: Why (CH₃)₃COH is tertiary whereas (CH₃)₃CNH₂ is primary.",
      workedExamples: [
        {
          title: "Naming a Branched Ester Correctly",
          problem: "Deduce the IUPAC name of the ester with condensed formula `CH₃CH₂COOCH(CH₃)₂`.",
          steps: [
            "Split the ester across the `C−O` single bond of the `−COO−` linkage: the acyl (acid) half is `CH₃CH₂COO−` and the alcohol-derived alkyl half is `−CH(CH₃)₂`.",
            "Count carbons in the acid half including the carbonyl carbon: 3 carbons → **propanoate**.",
            "Identify the alkyl group attached to the single-bonded oxygen: `−CH(CH₃)₂` is a 3-carbon chain attached at C-2 → **propan-2-yl** (commonly called isopropyl, though IB prefers **1-methylethyl** or **propan-2-yl**).",
            "Write the alkyl part first, a space, then the alkanoate part: **propan-2-yl propanoate** (or **1-methylethyl propanoate**).",
          ],
          answer: "propan-2-yl propanoate (1-methylethyl propanoate)",
          yourTurn: {
            question: "Give the IUPAC name of the ester `CH₃COOCH₂CH₂CH₃`.",
            answer: {
              type: "text",
              accept: ["propyl ethanoate", "propan-1-yl ethanoate", "1-propyl ethanoate"],
              display: "propyl ethanoate",
            },
            solution:
              "The `−CH₂CH₂CH₃` group attached to the single-bonded oxygen gives **propyl** (3 carbons), while the `CH₃COO−` acid half (2 carbons including C=O) gives **ethanoate** → **propyl ethanoate**.",
          },
        },
        {
          title: "Finding the True Longest Chain & Lowest Locants",
          problem: "Give the IUPAC name of `CH₃CH(Br)CH(CH₂CH₃)CH₂CH₃`.",
          steps: [
            "Trace all possible carbon chains—do not just read left to right! Starting from the left `CH₃`, going through `CH(Br)` and `CH`, then down either `−CH₂CH₃` gives a **5-carbon** parent chain (**pentane**).",
            "Identify substituents on the pentane chain: a **bromo** group at one carbon and an **ethyl** group at the adjacent carbon.",
            "Number from both ends: left-to-right gives locants `2-bromo, 3-ethyl` (locant set `2, 3`); right-to-left gives `4-bromo, 3-ethyl` (locant set `3, 4`). Choose the lower set `2, 3`.",
            "Order substituents alphabetically (`b` before `e`): **2-bromo-3-ethylpentane**.",
          ],
          answer: "2-bromo-3-ethylpentane",
        },
      ],
      keyPoints: [
        "Adjacent members of any homologous series differ by `−CH₂−` (`ΔM = 14.03 g mol⁻¹`), share a general formula and functional group, and show graduated physical properties.",
        "Always distinguish **compound class** (e.g. alcohol, carboxylic acid, amine) from **functional group name** (hydroxyl, carboxyl, amino).",
        "Alcohols and halogenoalkanes are classified 1°/2°/3° by carbons bonded to the α-carbon; amines are classified by carbons bonded directly to nitrogen.",
        "In esters `R−COO−R'`, `R'` (bonded to `−O−`) gives the `alkyl` prefix and `R−COO` (including C=O) gives the `alkanoate` suffix.",
      ],
      whyItWorks:
        "Carbon's tetravalency and strong C−C single bond (`346 kJ mol⁻¹`) allow stable skeletons of virtually unlimited length, while the polar electronegativity differences inside heteroatom functional groups (`O`, `N`, `X`) localize reactive electron-rich or electron-deficient sites so chemists can predict reactions without memorizing every individual molecule.",
      strategies: [
        "**Circle the functional group first**: identify the highest-priority group before tracing the longest carbon chain.",
        "**Highlight the carbonyl carbon in esters**: draw a vertical dashed line right after `C=O` (`R−C(=O) | O−R'`) so you never reverse the alkyl and alkanoate parts.",
        "**Check chain bends in condensed formulas**: expand brackets like `(CH₂CH₃)` visually so you never miss a longer bent chain.",
        "**Verify 4 bonds per carbon** in every full structural formula you draw.",
      ],
      thinkDeeper:
        "Why does pentan-1-ol (`bp 138 °C`) boil higher than 2-methylbutan-2-ol (`bp 102 °C`) even though both have the exact same formula `C₅H₁₂O` and both can form hydrogen bonds? Think about both surface-area LDFs and steric hindrance around the `−OH` group!",
    },

    // =========================================================================
    // SECTION 2: Structural Isomerism & Stereoisomerism (HL)
    // =========================================================================
    {
      id: "structural-isomers-stereoisomers-hl",
      heading: "S3.2 Structural Isomerism & Stereoisomerism (E/Z & Optical)",
      level: "HL",
      discovery: {
        problem:
          "Caraway seeds and spearmint leaves smell completely different, yet both owe their aroma to molecules with the exact same structural formula (`C₁₀H₁₄O`) and identical bond connectivity: **(+)-carvone** and **(−)-carvone**. How can two molecules with the exact same bonds in the exact same sequence trigger different scent receptors in your nose?",
        idea:
          "They are **non-superimposable mirror images** (**enantiomers**), just like your left and right hands! Because olfactory receptor proteins are themselves chiral (built from L-amino acids), a left-handed molecule fits one receptor pocket while its right-handed mirror image fits another.",
      },
      body: [
        "**Isomers** share the same molecular formula but differ in structure or 3D arrangement. Keep the IB isomerism tree sharply organized:",
        "",
        "### 1. Structural (Constitutional) Isomers *(SL & HL)*",
        "Same molecular formula, **different connectivity of atoms**:",
        "- **Chain isomers**: different carbon-skeleton branching (e.g. `butane` vs `2-methylpropane`; `pentane`, `2-methylbutane`, `2,2-dimethylpropane`).",
        "- **Position isomers**: same functional group at different positions on the same carbon chain (e.g. `propan-1-ol` vs `propan-2-ol`; `but-1-ene` vs `but-2-ene`).",
        "- **Functional-group isomers**: atoms arranged into different functional groups:",
        "  - Alcohol ↔ Ether (`CₙH₂ₙ₊₂O`: ethanol vs methoxymethane)",
        "  - Aldehyde ↔ Ketone (`CₙH₂ₙO`: propanal vs propanone)",
        "  - Carboxylic acid ↔ Ester (`CₙH₂ₙO₂`: propanoic acid vs methyl ethanoate)",
        "  - Alkene ↔ Cycloalkane (`CₙH₂ₙ`: but-1-ene vs cyclobutane)",
        "",
        "### 2. Configurational Stereoisomers *(HL)*",
        "Same structural formula (identical connectivity), **different 3D spatial arrangement** that **cannot interconvert without breaking a covalent bond** (unlike *conformational* isomers such as staggered/eclipsed ethane, which freely rotate around C−C single bonds).",
        "",
        "#### A. Cis–Trans and E/Z Isomerism",
        "Occurs whenever a molecule has:",
        "1. **Restricted rotation** (a `C=C` π bond or a **cyclic ring** such as 1,2-dichlorocyclopropane), **AND**",
        "2. **Two different groups attached to each** of the two carbons involved.",
        "",
        "When all four substituents around `C=C` differ (so *cis*/*trans* becomes ambiguous), use **Cahn–Ingold–Prelog (CIP) priority rules**:",
        "1. Compare the **atomic number (`Z`)** of the atoms directly bonded to each `C=C` carbon: higher `Z` = **higher priority** (`I > Br > Cl > S > F > O > N > C > H`).",
        "2. If the first atoms tie (e.g. `−CH₂CH₃` vs `−CH₃`), move outward to compare the list of atoms bonded to each tied atom in decreasing `Z` order (`−CH₂Cl` beats `−CH₂OH` beats `−CH₂CH₃` beats `−CH₃`). Double bonds count the bonded atom twice (`−CHO` has `C` bonded to `(O, O, H)`, beating `−CH₂OH` which is `(O, H, H)`).",
        "3. If the two higher-priority groups lie on the **same side** of the `C=C` plane → **`Z`** (*zusammen*, together). If on **opposite sides** → **`E`** (*entgegen*, opposite).",
        "",
        "**Watch out!** *cis* does **not** automatically mean *Z*! Always compare atomic numbers directly on both carbons rather than assuming.",
        "",
        "#### B. Optical Isomerism (Enantiomers & Diastereomers)",
        "- A carbon atom bonded to **four different atoms or groups** is a **chiral carbon** (asymmetric centre, marked `C*`).",
        "- A molecule with one chiral carbon exists as a pair of **enantiomers**—**non-superimposable mirror images**.",
        "- **Properties of enantiomers**:",
        "  - **Identical physical properties**: same melting point, boiling point, density, solubility, IR and NMR spectra.",
        "  - **Opposite optical activity**: in a **polarimeter**, one enantiomer rotates **plane-polarized light** clockwise (`+`) and the other rotates it by the **exact same angle** anticlockwise (`−`).",
        "  - **Different biological/chiral reactivity**: enantiomers interact differently with other chiral molecules (enzymes, drug receptors, chiral catalysts).",
        "- A **racemic mixture (racemate)** is an equimolar (`50 : 50`) mixture of both enantiomers; it is **optically inactive** because equal and opposite rotations cancel out.",
        "- **Diastereomers** are stereoisomers that are **not mirror images** of one another (this includes *E/Z* isomers as well as pairs of multi-chiral-centre stereoisomers where only some chiral centres are inverted). Unlike enantiomers, **diastereomers have different physical properties** (different melting/boiling points and solubilities), so they can be separated by standard distillation or recrystallization!",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="E and Z stereoisomerism using CIP priority rules on 1-bromo-2-chloropropene, alongside non-superimposable mirror-image enantiomers of butan-2-ol"><rect x="4" y="4" width="632" height="302" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="165" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">CIP E / Z Isomerism [HL]</text><rect x="16" y="40" width="298" height="252" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/><text x="90" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">(Z) — Same side</text><line x1="68" y1="115" x2="112" y2="115" stroke="var(--ink)" stroke-width="2"/><line x1="68" y1="121" x2="112" y2="121" stroke="var(--ink)" stroke-width="2"/><text x="61" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">C</text><text x="119" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">C</text><line x1="56" y1="108" x2="40" y2="86" stroke="var(--brand)" stroke-width="2"/><line x1="56" y1="128" x2="40" y2="150" stroke="var(--ink-2)" stroke-width="1.6"/><line x1="124" y1="108" x2="140" y2="86" stroke="var(--brand)" stroke-width="2"/><line x1="124" y1="128" x2="140" y2="150" stroke="var(--ink-2)" stroke-width="1.6"/><text x="34" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Br (1)</text><text x="34" y="164" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">H (2)</text><text x="144" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Cl (1)</text><text x="144" y="164" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">CH₃ (2)</text><text x="240" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">(E) — Opposite sides</text><line x1="218" y1="115" x2="262" y2="115" stroke="var(--ink)" stroke-width="2"/><line x1="218" y1="121" x2="262" y2="121" stroke="var(--ink)" stroke-width="2"/><text x="211" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">C</text><text x="269" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">C</text><line x1="206" y1="108" x2="190" y2="86" stroke="var(--bad)" stroke-width="2"/><line x1="206" y1="128" x2="190" y2="150" stroke="var(--ink-2)" stroke-width="1.6"/><line x1="274" y1="108" x2="290" y2="86" stroke="var(--ink-2)" stroke-width="1.6"/><line x1="274" y1="128" x2="290" y2="150" stroke="var(--bad)" stroke-width="2"/><text x="184" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Br (1)</text><text x="184" y="164" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">H (2)</text><text x="292" y="82" text-anchor="middle" font-size="11.5" fill="var(--ink-2)">CH₃ (2)</text><text x="292" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Cl (1)</text><rect x="28" y="184" width="274" height="94" rx="8" fill="var(--surface-2)"/><text x="165" y="204" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Priority by Atomic Number Z:</text><text x="165" y="224" text-anchor="middle" font-size="11" fill="var(--ink-2)">Left C: Br (Z=35) &gt; H (Z=1)</text><text x="165" y="242" text-anchor="middle" font-size="11" fill="var(--ink-2)">Right C: Cl (Z=17) &gt; C in CH₃ (Z=6)</text><text x="165" y="264" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Z = Zusammen (same) · E = Entgegen (opposite)</text><text x="476" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Optical Enantiomers: Butan-2-ol [HL]</text><rect x="326" y="40" width="298" height="252" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.4"/><line x1="475" y1="54" x2="475" y2="236" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6,4"/><text x="475" y="252" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--warn)">Mirror Plane</text><text x="404" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">C*</text><line x1="404" y1="134" x2="404" y2="88" stroke="var(--ink)" stroke-width="2"/><text x="404" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">OH</text><line x1="414" y1="150" x2="446" y2="164" stroke="var(--ink)" stroke-width="2"/><text x="456" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">H</text><polygon points="396,154 358,176 364,185" fill="var(--brand)"/><text x="348" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">C₂H₅</text><line x1="395" y1="142" x2="358" y2="128" stroke="var(--info)" stroke-width="2.2" stroke-dasharray="3,3"/><text x="347" y="125" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--info)">CH₃</text><text x="546" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">C*</text><line x1="546" y1="134" x2="546" y2="88" stroke="var(--ink)" stroke-width="2"/><text x="546" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">OH</text><line x1="536" y1="150" x2="504" y2="164" stroke="var(--ink)" stroke-width="2"/><text x="494" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">H</text><polygon points="554,154 592,176 586,185" fill="var(--brand)"/><text x="602" y="196" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">C₂H₅</text><line x1="555" y1="142" x2="592" y2="128" stroke="var(--info)" stroke-width="2.2" stroke-dasharray="3,3"/><text x="603" y="125" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--info)">CH₃</text><text x="475" y="274" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Solid wedge = out of page · Dashed bond = into page</text></svg>`,
      diagramCaption:
        "Left: Assigning (Z) and (E) to 1-bromo-2-chloropropene via CIP atomic-number priorities. Right: 3D wedge–dash mirror-image enantiomers of chiral butan-2-ol.",
      workedExamples: [
        {
          title: "Assigning (E) or (Z) When Carbon Atoms Tie",
          problem:
            "Determine whether the alkene `HOCH₂(CH₃)C=C(Cl)CH₂CH₃` with `−CH₂OH` and `−Cl` on the same side of the double bond is the **(E)** or **(Z)** isomer.",
          steps: [
            "Inspect the left `C=C` carbon: it is bonded to `−CH₂OH` and `−CH₃`. Both start with carbon (`Z = 6`), so move one bond outward.",
            "The carbon in `−CH₂OH` is bonded to `(O, H, H)`, whereas the carbon in `−CH₃` is bonded to `(H, H, H)`. Since `O (Z = 8) > H (Z = 1)`, **`−CH₂OH` is priority 1** on the left.",
            "Inspect the right `C=C` carbon: it is bonded to `−Cl (Z = 17)` and `−CH₂CH₃ (C, Z = 6)`. Therefore **`−Cl` is priority 1** on the right.",
            "Since both priority-1 groups (`−CH₂OH` and `−Cl`) are on the **same side** of the double bond, this isomer is **(Z)**.",
          ],
          answer: "(Z)-isomer",
          yourTurn: {
            question:
              "How many stereoisomers (including both E/Z and optical) exist for `pent-3-en-2-ol`, `CH₃CH(OH)CH=CHCH₃`? Enter a whole number.",
            answer: { type: "number", value: 4, display: "4" },
            solution:
              "`pent-3-en-2-ol` has one C=C bond with two different groups on each carbon (`E` or `Z`, 2 options) AND one chiral carbon at C-2 bonded to `−H`, `−OH`, `−CH₃`, and `−CH=CHCH₃` (`(+)` or `(−)`, 2 options). Total stereoisomers = `2 × 2 = 4`.",
          },
        },
        {
          title: "Spotting a Chiral Centre Inside a Chain",
          problem: "Identify which isomer of `C₄H₉Cl` exhibits optical isomerism and list the four different groups on its chiral carbon.",
          steps: [
            "List the four structural isomers of `C₄H₉Cl`: 1-chlorobutane, **2-chlorobutane**, 1-chloro-2-methylpropane, and 2-chloro-2-methylpropane.",
            "Test each carbon for four *different* attached groups. Any `−CH₃` or `−CH₂−` carbon has at least two identical H atoms, so it cannot be chiral.",
            "In `2-chloro-2-methylpropane`, `(CH₃)₃CCl`, the central carbon has three identical `−CH₃` groups—not chiral.",
            "In **2-chlorobutane**, `CH₃−C*H(Cl)−CH₂CH₃`, carbon-2 is bonded to four distinct groups: `−H`, `−Cl`, `−CH₃`, and `−CH₂CH₃`. Thus 2-chlorobutane is chiral and forms a pair of enantiomers.",
          ],
          answer: "2-chlorobutane (groups on C-2: −H, −Cl, −CH₃, −CH₂CH₃)",
        },
      ],
      keyPoints: [
        "Structural isomers differ in connectivity (chain, position, functional group); stereoisomers share connectivity but differ in 3D spatial orientation.",
        "E/Z isomerism requires restricted rotation (C=C or a ring) AND two different groups on each of the two carbons.",
        "CIP priority depends on the **atomic number (`Z`)** of the first atom directly bonded to the C=C carbon, NOT the total molar mass of the whole group (`−OH` beats `−CH₂CH₂CH₃` because `O = 8 > C = 6`!).",
        "Enantiomers rotate plane-polarized light equally in opposite directions and have identical physical properties; diastereomers are non-mirror-image stereoisomers with *different* physical properties.",
        "A 50:50 racemic mixture is optically inactive because the rotations of the two enantiomers cancel out.",
      ],
      whyItWorks:
        "A C=C double bond contains a side-on **π bond** formed by overlapping parallel p orbitals; twisting one carbon by `90°` destroys that overlap and costs ~`260 kJ mol⁻¹`, locking E and Z isomers apart at room temperature. Similarly, tetrahedral `sp³` geometry places four distinct substituents at the vertices of a tetrahedron, whose mirror image cannot be rotated in 3D space to align all four groups simultaneously.",
      strategies: [
        "**Quick chirality filter**: instantly cross out every `−CH₃`, `−CH₂−`, and `sp²`/`sp` unsaturated carbon—only an `sp³` carbon with ≤1 H can be chiral.",
        "**CIP tie-breaker table**: write the three atoms attached to each tied carbon in descending atomic number, e.g. `−COOH → (O, O, O)` > `−CHO → (O, O, H)` > `−CH₂OH → (O, H, H)` > `−CH₂CH₃ → (C, H, H)` > `−CH₃ → (H, H, H)`.",
        "**Drawing enantiomers cleanly**: draw one tetrahedron with two bonds in the plane (vertical + right), one solid wedge, and one dashed bond—then reflect horizontally across a dashed mirror line.",
        "**Count maximum stereoisomers**: with `n` chiral centres and `m` E/Z double bonds (and no internal symmetry), maximum stereoisomers = `2^(n+m)`.",
      ],
      thinkDeeper:
        "2,3-dichlorobutane has TWO chiral carbons (`C-2` and `C-3`), yet it only has **3** stereoisomers instead of `2² = 4`! Why does one of the stereoisomers (*meso*-2,3-dichlorobutane) fail to rotate plane-polarized light even though it contains chiral centres?",
    },

    // =========================================================================
    // SECTION 3: IHD, Mass Spectrometry & IR Spectroscopy (SL)
    // =========================================================================
    {
      id: "ihd-ms-ir-spectroscopy",
      heading: "S3.2 Index of Hydrogen Deficiency, Mass Spec & IR Spectroscopy",
      level: "SL",
      discovery: {
        problem:
          "An acyclic saturated alkane with `n` carbons has formula `CₙH₂ₙ₊₂`. Yet benzene (`C₆H₆`) is missing **8 hydrogen atoms** compared with hexane (`C₆H₁₄`). Every ring or every π bond removes exactly **2 hydrogen atoms**. How many rings + π bonds does benzene have—and why does inserting an oxygen atom (`C₆H₁₄O`, hexanol) not change the hydrogen count at all?",
        idea:
          "Missing 8 H atoms means `8 / 2 = 4` units of unsaturation (**IHD = 4**: 1 ring + 3 π bonds!). An oxygen atom is divalent (`−O−`), so slipping it between C and H (`C−H → C−O−H`) or between C and C (`C−C → C−O−C`) neither adds nor removes hydrogens—that is why `O` is completely absent from the IHD formula!",
      },
      body: [
        "### 1. Index of Hydrogen Deficiency (IHD)",
        "The **IHD** (degree of unsaturation) equals the total number of **rings plus π bonds** in a molecule:",
        "",
        "**{{IHD = (2C + 2 + N - H - X)/2}}**",
        "",
        "where `C` = carbons, `H` = hydrogens, `N` = nitrogens, and `X` = halogens (`F, Cl, Br, I`).",
        "- **Oxygen (O) and sulfur (S) are ignored** because divalent atoms do not alter the saturated hydrogen count.",
        "- **Halogens (`X`) subtract 1** because each monovalent halogen replaces one `H` atom.",
        "- **Nitrogen (`N`) adds 1** because trivalent nitrogen inserts as `−NH−`, adding one extra `H` to a saturated chain (compare ethane `C₂H₆` with methylamine `CH₃NH₂` → `C₁H₅N`: `IHD = (2 + 2 + 1 − 5)/2 = 0`).",
        "",
        "| Structural Feature | Contribution to IHD |",
        "|---|---|",
        "| One ring (e.g. cyclohexane) | `+1` |",
        "| One double bond (`C=C`, `C=O`, `C=N`) | `+1` |",
        "| One triple bond (`C≡C`, `C≡N`) | `+2` |",
        "| One benzene ring (`C₆H₅−`) | **`+4`** (1 ring + 3 π bonds) |",
        "",
        "### 2. Mass Spectrometry (MS)",
        "In a mass spectrometer, vaporized organic molecules are bombarded with high-energy electrons:",
        "`M(g) + e⁻ → M⁺•(g) + 2e⁻`",
        "- **Molecular ion peak (`M⁺`)**: the highest major `m/z` peak gives the **relative molecular mass (`M_r`)** of the compound. (Ignore the tiny `M+1` peak caused by the `1.1%` natural abundance of ¹³C.)",
        "- **Fragmentation**: `M⁺•` breaks into a positively charged **fragment ion** (which is accelerated and detected) plus an **uncharged radical** (not detected).",
        "- **Base peak**: the tallest peak (`100%` relative intensity), corresponding to the most stable/abundant fragment ion.",
        "",
        "| Mass Lost (`M_r − m/z`) or Fragment `m/z` | Species | Structural Clue |",
        "|---|---|---|",
        "| Loss of `15` (or `m/z = 15`) | `CH₃•` / `CH₃⁺` | Methyl group |",
        "| Loss of `17` (or `m/z = 17`) | `OH•` / `OH⁺` | Alcohol or carboxylic acid |",
        "| Loss of `18` | `H₂O` | Dehydration of alcohol / acid |",
        "| Loss of `28` | `CO` or `C₂H₄` | Carbonyl or ethyl group |",
        "| Loss of `29` (or `m/z = 29`) | `C₂H₅•` or `CHO•` | Ethyl group or aldehyde |",
        "| Loss of `31` (or `m/z = 31`) | `CH₃O•` or `CH₂OH•` | Methyl ester/ether or 1° alcohol |",
        "| **`m/z = 43`** (or loss of `43`) | `CH₃CO⁺` or `C₃H₇⁺` | Methyl ketone, ethanoate, or propyl |",
        "| **`m/z = 45`** (or loss of `45`) | `COOH⁺` or `C₂H₅O⁺` | Carboxylic acid or ethyl ester/ether |",
        "| **`m/z = 57`** | `C₂H₅CO⁺` or `C₄H₉⁺` | Propanoyl or butyl group |",
        "| **`m/z = 77`** | `C₆H₅⁺` | Phenyl (benzene) ring |",
        "",
        "### 3. Infrared (IR) Spectroscopy",
        "Infrared radiation (`400–4000 cm⁻¹`) has the exact photon energy to excite **bond stretching and bending vibrations**.",
        "- **Selection rule**: a vibrational mode absorbs IR radiation **only if it produces a change in the molecule's dipole moment**. Thus homonuclear diatomics (`N₂`, `O₂`, `H₂`) are IR-inactive, while asymmetric stretching and bending of `CO₂`, `H₂O`, and `CH₄` are IR-active (causing the greenhouse effect!).",
        "- **Key IB Data Booklet IR absorption bands** (memorize the big four!):",
        "  - **`O−H` (alcohols/phenols)**: **`3200–3600 cm⁻¹`** — strong and **broad** (rounded U-shape due to hydrogen bonding).",
        "  - **`O−H` (carboxylic acids)**: **`2500–3000 cm⁻¹`** — strong and **very broad** (ragged trough overlapping the `C−H` stretch at `2850–3090 cm⁻¹`!).",
        "  - **`C=O` (aldehydes, ketones, carboxylic acids, esters)**: **`1700–1750 cm⁻¹`** — **very strong, sharp** spike!",
        "  - **`N−H` (amines, amides)**: **`3300–3500 cm⁻¹`** — medium intensity (narrower than `O−H`).",
        "  - **`C≡C` (`2100–2260 cm⁻¹`)** and **`C≡N` (`2220–2260 cm⁻¹`)** — sharp bands in the otherwise quiet `2000–2500 cm⁻¹` window.",
        "  - **`C=C` (alkenes)**: `1620–1680 cm⁻¹` (weak–medium).",
        "  - **Fingerprint region (`< 1500 cm⁻¹`)**: dense, complex pattern of skeletal bending and `C−O`/`C−C` stretches unique to each molecule—matched against a reference library to confirm exact identity.",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 310" role="img" aria-label="Simulated IR transmittance spectra comparing ethanol, propanone, and propanoic acid across 4000 to 500 cm^-1"><rect x="4" y="4" width="632" height="302" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="320" y="25" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Diagnostic IR Spectra: Comparing O−H &amp; C=O Bands</text><rect x="52" y="38" width="566" height="226" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.3"/><rect x="424" y="39" width="193" height="224" fill="var(--surface-2)" opacity="0.65"/><text x="520" y="55" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Fingerprint (&lt;1500)</text><line x1="424" y1="38" x2="424" y2="264" stroke="var(--line)" stroke-width="1.2" stroke-dasharray="4,4"/><text x="20" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)" transform="rotate(-90 20 152)">Transmittance (%)</text><text x="335" y="294" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Wavenumber (cm⁻¹)  ← higher energy</text><text x="64" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">4000</text><text x="142" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">3500</text><text x="219" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">3000</text><text x="297" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">2500</text><text x="374" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">2000</text><text x="424" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">1500</text><text x="518" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">1000</text><text x="605" y="279" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">500</text><path d="M 60 58 L 118 58 Q 160 150 202 58 L 218 58 L 226 112 L 234 58 L 430 58 L 455 102 L 470 66 L 502 124 L 518 66 L 605 62" fill="none" stroke="var(--brand)" stroke-width="2.2"/><text x="160" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Alcohol O−H</text><text x="160" y="150" text-anchor="middle" font-size="9.5" fill="var(--brand)">3200–3600 (broad)</text><path d="M 60 162 L 215 162 L 224 198 L 233 162 L 386 162 L 396 254 L 406 162 L 448 162 L 468 206 L 495 168 L 545 196 L 605 165" fill="none" stroke="var(--info)" stroke-width="2.2"/><path d="M 60 174 L 188 174 Q 246 254 302 174 L 385 174 L 395 258 L 405 174 L 462 174 L 486 230 L 512 180 L 605 176" fill="none" stroke="var(--bad)" stroke-width="2.1" stroke-dasharray="6,3"/><text x="255" y="246" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Acid O−H 2500–3000</text><text x="364" y="244" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--info)">Sharp C=O</text><text x="364" y="256" text-anchor="end" font-size="9.5" fill="var(--info)">1700–1750</text><line x1="72" y1="48" x2="94" y2="48" stroke="var(--brand)" stroke-width="2.4"/><text x="100" y="51" font-size="10" font-weight="700" fill="var(--brand)">Ethanol</text><line x1="168" y1="48" x2="190" y2="48" stroke="var(--info)" stroke-width="2.4"/><text x="196" y="51" font-size="10" font-weight="700" fill="var(--info)">Propanone (ketone)</text><line x1="312" y1="48" x2="334" y2="48" stroke="var(--bad)" stroke-width="2.2" stroke-dasharray="5,2"/><text x="340" y="51" font-size="10" font-weight="700" fill="var(--bad)">Propanoic acid</text></svg>`,
      diagramCaption:
        "Transmittance dips downward at absorbed wavenumbers. Notice how alcohol O−H sits higher (3200–3600 cm⁻¹) than the very broad acid O−H (2500–3000 cm⁻¹), while ketones and acids both display a sharp C=O spike at 1700–1750 cm⁻¹.",
      workedExamples: [
        {
          title: "Computing IHD & Interpreting MS + IR Together",
          problem:
            "Compound **X** has molecular formula `C₃H₆O₂`. Its IR spectrum shows a strong sharp peak at `1740 cm⁻¹` and strong `C−O` absorption around `1240 cm⁻¹`, with **no broad absorption above `2500 cm⁻¹`**. Its mass spectrum shows major peaks at `m/z = 74`, `m/z = 59`, and `m/z = 43` (Use `C = 12, H = 1, O = 16`). Deduce the structure of **X**.",
          steps: [
            "Compute IHD: `IHD = (2×3 + 2 − 6) / 2 = 2 / 2 = 1` → one ring or one π bond (`C=O` or `C=C`).",
            "Read the IR spectrum: sharp peak at `1740 cm⁻¹` confirms `C=O` (accounting for the IHD of 1). Complete absence of broad `O−H` at `2500–3600 cm⁻¹` rules out propanoic acid and hydroxyketones → **X must be an ester**!",
            "Two esters fit `C₃H₆O₂`: **methyl ethanoate** (`CH₃COOCH₃`) and **ethyl methanoate** (`HCOOCH₂CH₃`).",
            "Check MS fragments (`M⁺ = 74`): `74 − 59 = 15` (loss of `CH₃•`, giving `CH₃COO⁺` or `COOCH₃⁺`) and **`m/z = 43`** corresponds to **`CH₃CO⁺`** (`12×2 + 3 + 16 = 43`, loss of `CH₃O• = 31`). Ethyl methanoate would instead lose `29` (`C₂H₅•`) to give `m/z = 45` (`HCOO⁺`) and show `m/z = 29` (`C₂H₅⁺`), not `m/z = 43`.",
            "Therefore **X** is **methyl ethanoate** (`CH₃COOCH₃`).",
          ],
          answer: "methyl ethanoate (CH₃COOCH₃)",
          yourTurn: {
            question:
              "Calculate the Index of Hydrogen Deficiency (IHD) of paracetamol, `C₈H₉NO₂`. Enter a whole number.",
            answer: { type: "number", value: 5, display: "5" },
            solution:
              "`IHD = (2C + 2 + N − H − X)/2 = (2×8 + 2 + 1 − 9 − 0)/2 = 10/2 = 5` (oxygen is ignored!). Physically, paracetamol has 1 benzene ring (`IHD = 4`) plus 1 amide `C=O` bond (`IHD = 1`), totalling `5`.",
          },
        },
        {
          title: "Distinguishing Butanal and Butanone by Mass Spectrometry",
          problem:
            "Both butanal (`CH₃CH₂CH₂CHO`) and butanone (`CH₃COCH₂CH₃`) have `M_r = 72` and an IR peak near `1720 cm⁻¹`. Explain how peaks at `m/z = 43` and `m/z = 57` distinguish them (Use `C = 12, H = 1, O = 16`).",
          steps: [
            "Both molecules have `M⁺` at `m/z = 72` (`4×12 + 8×1 + 16 = 72`).",
            "In **butanone** (`CH₃−CO−CH₂CH₃`), cleavage next to the carbonyl produces **`CH₃CO⁺` (`m/z = 43`)** (loss of `C₂H₅• = 29`) AND **`CH₃CH₂CO⁺` (`m/z = 57`)** (loss of `CH₃• = 15`).",
            "In **butanal** (`CH₃CH₂CH₂−CHO`), cleavage next to `CHO` produces **`C₃H₇⁺` (`m/z = 43`)** and **`CHO⁺` (`m/z = 29`)**, plus `M − 28` (`m/z = 44`, McLafferty rearrangement), whereas loss of `15` to give a strong `m/z = 57` acylium ion is NOT a favoured carbonyl cleavage.",
            "Specifically, **butanone** gives a prominent **`m/z = 57`** peak (`C₂H₅CO⁺`, `72 − 15`) and a base peak at **`m/z = 43`** (`CH₃CO⁺`, `72 − 29`), whereas butanal gives a strong **`m/z = 44`** peak and `m/z = 29` (`CHO⁺`).",
          ],
          answer: "Butanone shows strong m/z = 57 (C₂H₅CO⁺, M−15) and m/z = 43 (CH₃CO⁺, M−29).",
        },
      ],
      keyPoints: [
        "`IHD = (2C + 2 + N − H − X) / 2`: oxygen and sulfur do NOT enter the equation; halogens subtract 1; nitrogen adds 1.",
        "In MS, the `M⁺` peak gives `M_r`, and every fragment detected is a **positively charged ion** (always write the `+` charge on fragment formulas in IB exams!).",
        "IR absorption requires a **change in dipole moment** during vibration; wavenumber scales with bond strength (`C≡C > C=O > C−O`) and inversely with reduced atomic mass.",
        "Always check BOTH the **presence** and the **absence** of peaks in IR (e.g. `C=O` present + no `O−H` rules out carboxylic acids immediately).",
      ],
      whyItWorks:
        "A covalent bond behaves like a tiny quantum spring of stiffness `k` connecting masses `m₁` and `m₂`. Stronger bonds (higher `k`, such as `C=O` or `C≡N`) and lighter atoms (like hydrogen in `O−H` or `C−H`) vibrate at higher frequencies, absorbing higher-wavenumber IR photons; hydrogen bonding in alcohols and carboxylic acids creates a spread of instantaneous `O−H` bond strengths, smearing the absorption into a wide broad band.",
      strategies: [
        "**Run IHD before guessing any structure**: an IHD ≥ 4 strongly hints at a benzene ring (`C₆H₅−`), while `IHD = 0` instantly eliminates all rings, alkenes, and carbonyls.",
        "**Read IR from left to right**: check `3200–3600` (alcohol O−H / N−H), `2500–3000` (very broad acid O−H), `2100–2260` (triple bond), then `1700–1750` (sharp C=O).",
        "**Always put a `+` sign on MS fragment ions**: write `[CH₃CO]⁺` or `CH₃CO⁺`—writing `CH₃CO` without a charge loses marks on IB Paper 2!",
        "**Subtract `m/z` from `M⁺`**: if `M⁺ = 88` and a peak sits at `m/z = 43`, compute `88 − 43 = 45` (`C₂H₅O•` or `COOH•`)—sometimes the neutral loss is the biggest clue.",
      ],
      thinkDeeper:
        "Chloromethane (`CH₃Cl`) shows TWO molecular ion peaks of height ratio `3 : 1` at `m/z = 50` and `m/z = 52`, whereas bromomethane (`CH₃Br`) shows TWO equal-height peaks (`1 : 1`) at `m/z = 94` and `m/z = 96`. How do natural isotope abundances (`³⁵Cl : ³⁷Cl ≈ 3 : 1` and `⁷⁹Br : ⁸¹Br ≈ 1 : 1`) let chemists spot chlorine or bromine immediately in a mass spectrum?",
    },

    // =========================================================================
    // SECTION 4: ¹H NMR Spectroscopy & Combined Structure Elucidation (HL)
    // =========================================================================
    {
      id: "proton-nmr-combined-hl",
      heading: "S3.2 ¹H NMR Spectroscopy & Combined Structure Elucidation",
      level: "HL",
      discovery: {
        problem:
          "Methyl propanoate (`CH₃CH₂COOCH₃`) and ethyl ethanoate (`CH₃COOCH₂CH₃`) have the **exact same molecular formula (`C₄H₈O₂`)**, the **exact same IHD (`1`)**, almost identical IR spectra (`C=O` at `1740 cm⁻¹`, `C−O` at `1240 cm⁻¹`), AND the exact same `3 : 2 : 3` ¹H NMR splitting pattern (a singlet, a quartet, and a triplet!). How can high-resolution ¹H NMR tell them apart in three seconds?",
        idea:
          "Look at the **chemical shift (`δ`)** of the **singlet** vs the **quartet**! Oxygen pulls electron density away more strongly than a carbonyl carbon, shifting attached `−O−CHₙ` protons far downfield to **`δ = 3.7–4.8 ppm`**, whereas protons next to `C=O` (`−CO−CHₙ`) sit around **`δ = 2.0–2.7 ppm`**. In ethyl ethanoate (`CH₃CO−O−CH₂CH₃`), the **2H quartet (`−O−CH₂−`)** sits at **`4.1 ppm`** and the **3H singlet (`CH₃CO−`)** sits at **`2.0 ppm`**. In methyl propanoate (`CH₃CH₂CO−O−CH₃`), those shifts swap: the **3H singlet (`−O−CH₃`)** sits at **`3.7 ppm`** while the **2H quartet (`−CH₂CO−`)** sits at **`2.3 ppm`**!",
      },
      body: [
        "**Proton Nuclear Magnetic Resonance (¹H NMR)** probes the exact local electronic environment of every hydrogen atom in a molecule using **radio waves** in a strong magnetic field (`B₀`).",
        "",
        "### Why Tetramethylsilane (TMS, `Si(CH₃)₄`) Is the `δ = 0.0 ppm` Reference",
        "1. All **12 protons are chemically equivalent**, giving one intense, sharp peak even at tiny concentration.",
        "2. Silicon is less electronegative than carbon, so TMS protons are **strongly shielded**—its peak sits further upfield (right) than almost any organic proton.",
        "3. TMS is **chemically inert**, non-toxic, soluble in organic solvents, and **volatile** (bp `27 °C`), so it evaporates cleanly afterwards.",
        "",
        "### Four Pillars of High-Resolution ¹H NMR Analysis",
        "1. **Number of signals (peaks)** = number of **chemically distinct proton environments**. Always check for molecular symmetry!",
        "   - `CH₃COCH₃` (propanone): **1** signal (all 6 H equivalent).",
        "   - `CH₃CH₂OCH₂CH₃` (ethoxyethane): **2** signals (symmetric ether).",
        "   - `CH₃CH₂OH` (ethanol): **3** signals (`CH₃`, `CH₂`, `OH`).",
        "2. **Integration trace (area under each peak)** = **relative number of protons** in each environment (not necessarily the exact count—check against the molecular formula!).",
        "3. **Chemical shift `δ` (ppm)** = electron density shielding around the proton. Electronegative atoms (`O`, `Cl`, `F`, `C=O`) **deshield** nearby protons, shifting signals **downfield (left, higher `δ`)**:",
        "",
        "| Proton Environment | Typical IB Shift `δ` (ppm) | Quick Recognition Cue |",
        "|---|---|---|",
        "| `R−CH₃` | `0.9 – 1.0` | Saturated terminal methyl |",
        "| `R−CH₂−R` / `R₃CH` | `1.3 – 1.5` | Internal alkyl chain |",
        "| `R−CO−CH₃` / `R−CH₂−C=O` | `2.0 – 2.7` | Next to carbonyl (`C=O`) |",
        "| `R−O−CH₃` / `R−O−CH₂−R` / `−CH₂−OH` | `3.3 – 4.3` | Directly on carbon bonded to `−O−` |",
        "| `R−COO−CH₂−` (ester) | `3.7 – 4.8` | Alcohol side of an ester! |",
        "| `C=C−H` | `4.5 – 6.0` | Alkene proton |",
        "| `Ar−H` (benzene ring) | `6.9 – 9.0` | Aromatic ring (usually `7.0–7.5`) |",
        "| `R−CHO` | `9.4 – 10.0` | Aldehyde proton |",
        "| `R−COOH` | `9.0 – 13.0` | Carboxylic acid (broad singlet) |",
        "| `R−OH` (alcohol) | `1.0 – 6.0` | Variable broad singlet (vanishes with `D₂O`) |",
        "",
        "4. **Spin–spin splitting (`n + 1` rule)**:",
        "   If a proton environment has **`n` chemically non-equivalent protons on directly adjacent carbon atoms** (3 bonds away: `H−C−C−H`), its signal splits into **`n + 1` sub-peaks** with intensities following **Pascal's triangle**:",
        "   - `n = 0` → **singlet** (`1`)",
        "   - `n = 1` → **doublet** (`1 : 1`)",
        "   - `n = 2` → **triplet** (`1 : 2 : 1`)",
        "   - `n = 3` → **quartet** (`1 : 3 : 3 : 1`)",
        "   - `n = 6` → **septet** (`1 : 6 : 15 : 20 : 15 : 6 : 1`)",
        "",
        "   **Two golden splitting motifs to recognize on sight:**",
        "   - **Ethyl group (`−CH₂CH₃`)**: a **3H triplet** (coupled to 2 adjacent H) + a **2H quartet** (coupled to 3 adjacent H).",
        "   - **Isopropyl group (`−CH(CH₃)₂`)**: a **6H doublet** (coupled to 1 adjacent H) + a **1H septet** (coupled to 6 adjacent H).",
        "   - **Remember**: chemically equivalent protons **never** split each other (`CH₃−CH₃` is a singlet!), and `−OH` / `−NH` protons normally appear as **singlets** (do not split and are not split) due to rapid proton exchange.",
        "",
        "### Five-Step Combined Structure Elucidation Protocol",
        "1. **Empirical formula + `M⁺` (MS)** → exact **molecular formula**.",
        "2. **Calculate IHD** → count rings + π bonds.",
        "3. **IR spectrum** → lock in the functional group (`C=O`, `O−H` alcohol vs acid, or ester/ether absence of `O−H`).",
        "4. **¹H NMR** → count environments, apply integration + `n + 1` splitting + `δ` shifts to assemble all carbon–hydrogen fragments uniquely.",
        "5. **Cross-check with MS fragments** → confirm the final structure accounts for every major `m/z` peak!",
      ].join("\n"),
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 305" role="img" aria-label="Simulated high-resolution proton NMR spectrum of ethyl ethanoate showing a 2H quartet at 4.1 ppm, 3H singlet at 2.0 ppm, 3H triplet at 1.25 ppm, and TMS at 0 ppm"><rect x="4" y="4" width="632" height="297" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="320" y="26" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">High-Resolution ¹H NMR: Ethyl Ethanoate (CH₃COOCH₂CH₃)</text><rect x="24" y="40" width="592" height="218" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.3"/><line x1="46" y1="226" x2="594" y2="226" stroke="var(--ink)" stroke-width="1.8"/><text x="580" y="246" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">0</text><text x="490" y="246" text-anchor="middle" font-size="11" fill="var(--ink-2)">1</text><text x="400" y="246" text-anchor="middle" font-size="11" fill="var(--ink-2)">2</text><text x="310" y="246" text-anchor="middle" font-size="11" fill="var(--ink-2)">3</text><text x="220" y="246" text-anchor="middle" font-size="11" fill="var(--ink-2)">4</text><text x="130" y="246" text-anchor="middle" font-size="11" fill="var(--ink-2)">5</text><text x="320" y="286" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">← Downfield (deshielded)   Chemical Shift δ (ppm)   Upfield (shielded) →</text><line x1="580" y1="226" x2="580" y2="188" stroke="var(--ink-2)" stroke-width="2"/><text x="580" y="180" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">TMS</text><line x1="461" y1="226" x2="461" y2="162" stroke="var(--brand)" stroke-width="2.2"/><line x1="468" y1="226" x2="468" y2="108" stroke="var(--brand)" stroke-width="2.4"/><line x1="475" y1="226" x2="475" y2="162" stroke="var(--brand)" stroke-width="2.2"/><text x="468" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Triplet (3H)</text><text x="468" y="82" text-anchor="middle" font-size="10" fill="var(--ink-2)">−CH₂−CH₃ · 1.25 ppm</text><text x="468" y="68" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">n = 2 → 1:2:1</text><line x1="398" y1="226" x2="398" y2="86" stroke="var(--bad)" stroke-width="2.6"/><text x="398" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Singlet (3H)</text><text x="398" y="61" text-anchor="middle" font-size="10" fill="var(--ink-2)">CH₃−C=O · 2.0 ppm</text><line x1="201" y1="226" x2="201" y2="188" stroke="var(--info)" stroke-width="2.1"/><line x1="208" y1="226" x2="208" y2="124" stroke="var(--info)" stroke-width="2.3"/><line x1="215" y1="226" x2="215" y2="124" stroke="var(--info)" stroke-width="2.3"/><line x1="222" y1="226" x2="222" y2="188" stroke="var(--info)" stroke-width="2.1"/><text x="211" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--info)">Quartet (2H)</text><text x="211" y="98" text-anchor="middle" font-size="10" fill="var(--ink-2)">−O−CH₂−CH₃ · 4.1 ppm</text><text x="211" y="84" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">n = 3 → 1:3:3:1</text><rect x="44" y="138" width="128" height="72" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/><text x="108" y="156" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Integration Ratio</text><text x="108" y="175" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">2 : 3 : 3</text><text x="108" y="196" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Sum = 8 H (C₄H₈O₂)</text></svg>`,
      diagramCaption:
        "Ethyl ethanoate displays three ¹H NMR signals (integration 2 : 3 : 3): the strongly deshielded −O−CH₂− quartet at 4.1 ppm unambiguously distinguishes it from methyl propanoate.",
      workedExamples: [
        {
          title: "Full Combined Structure Elucidation (MS + IR + ¹H NMR)",
          problem:
            "Compound **Y** has empirical formula `C₂H₄O`. Its mass spectrum shows `M⁺` at `m/z = 88` and a major peak at `m/z = 43`. Its IR spectrum has a strong sharp peak at `1740 cm⁻¹` and no broad peak above `2500 cm⁻¹`. Its ¹H NMR spectrum shows three signals: `δ = 4.1 ppm` (quartet, 2H), `δ = 2.0 ppm` (singlet, 3H), and `δ = 1.25 ppm` (triplet, 3H). Deduce the exact structure of **Y** (Use `C = 12, H = 1, O = 16`).",
          steps: [
            "**Molecular formula**: Empirical mass of `C₂H₄O = 24 + 4 + 16 = 44`. Since `M⁺ = 88`, multiplier = `88 / 44 = 2`, so molecular formula = **`C₄H₈O₂`**.",
            "**IHD**: `(2×4 + 2 − 8) / 2 = 1` → one double bond (`C=O`) or ring.",
            "**IR**: Sharp `1740 cm⁻¹` = `C=O`; no broad `O−H` (`2500–3600 cm⁻¹`) rules out carboxylic acids → **ester** (`−COO−`).",
            "**¹H NMR**: Quartet (2H) at `4.1 ppm` + triplet (3H) at `1.25 ppm` proves an **ethyl group attached directly to the single-bonded ester oxygen (`−O−CH₂CH₃`)**. The 3H singlet at `2.0 ppm` has no adjacent H and sits next to `C=O` → **`CH₃−C(=O)−`**.",
            "**MS cross-check**: `CH₃COOCH₂CH₃` fragments cleanly to **`CH₃CO⁺` (`m/z = 43`)** by losing `C₂H₅O•` (`45`), confirming **ethyl ethanoate**.",
          ],
          answer: "ethyl ethanoate (CH₃COOCH₂CH₃)",
          yourTurn: {
            question:
              "How many distinct ¹H NMR signals (peaks) are observed in the spectrum of `butanone` (`CH₃COCH₂CH₃`)? Enter a whole number.",
            answer: { type: "number", value: 3, display: "3" },
            solution:
              "Butanone (`CH₃−CO−CH₂−CH₃`) is unsymmetrical: the methyl on C-1 (next to `C=O`), the `CH₂` on C-3, and the terminal methyl on C-4 are all chemically distinct → **3 signals** (a 3H singlet, a 2H quartet, and a 3H triplet).",
          },
        },
        {
          title: "Recognizing an Isopropyl Group from Splitting",
          problem:
            "An alcohol with molecular formula `C₃H₈O` shows **three** ¹H NMR signals: a `6H doublet` at `1.2 ppm`, a `1H broad singlet` at `2.4 ppm`, and a `1H septet` at `4.0 ppm`. Identify the alcohol and justify every splitting pattern.",
          steps: [
            "Two alcohols share formula `C₃H₈O`: `propan-1-ol` (`CH₃CH₂CH₂OH`, **4** proton environments) and `propan-2-ol` (`(CH₃)₂CHOH`, **3** proton environments because the two `−CH₃` groups are symmetric).",
            "The **6H doublet at `1.2 ppm`** arises from the six equivalent methyl protons; their adjacent methine carbon carries `n = 1` proton, so `n + 1 = 2` (doublet).",
            "The **1H septet at `4.0 ppm`** arises from the single `−CH(OH)−` proton (deshielded by `−OH`); it has `n = 6` adjacent methyl protons, so `n + 1 = 7` (septet).",
            "The **1H broad singlet at `2.4 ppm`** is the `−OH` proton (rapidly exchanging, so no splitting). Therefore the compound is **propan-2-ol**.",
          ],
          answer: "propan-2-ol ((CH₃)₂CHOH)",
        },
      ],
      keyPoints: [
        "TMS (`Si(CH₃)₄`, `δ = 0.0 ppm`) provides 12 equivalent, strongly shielded protons in an inert, volatile reference.",
        "Read four things from ¹H NMR: **number of signals** (environments), **chemical shift `δ`** (electronic deshielding), **integration** (H ratio), and **`n + 1` splitting** (non-equivalent H on adjacent carbons).",
        "Classic NMR fingerprints: **ethyl (`−CH₂CH₃`) = 3H triplet + 2H quartet**; **isopropyl (`−CH(CH₃)₂`) = 6H doublet + 1H septet**.",
        "Always distinguish isomeric esters (`RCOOR'`) by checking which group (`CH₂` or `CH₃`) sits downfield near `3.7–4.8 ppm` (attached to `−O−`) vs `2.0–2.7 ppm` (attached to `C=O`).",
      ],
      whyItWorks:
        "Surrounding valence electrons circulate in the applied magnetic field `B₀` and generate a small opposing local field that shields the proton nucleus. Electronegative neighbours (O, Cl, C=O) withdraw electron density, reducing shielding so the proton feels a stronger net field and resonates at a higher radio frequency—appearing further left (higher `δ` in ppm). Meanwhile, the up/down spin states of `n` neighbouring protons create `n + 1` slightly different local fields in binomial (Pascal's triangle) ratios, splitting the resonance into a multiplet.",
      strategies: [
        "**Check symmetry first**: draw the full molecule and test whether rotating or reflecting maps one `−CH₃` or `−CH₂−` onto another before counting signals.",
        "**Pair every multiplet**: a quartet MUST have a matching triplet partner (`−CH₂CH₃`), and a septet MUST have a matching doublet partner (`−CH(CH₃)₂`).",
        "**Never count protons on the SAME carbon for `n`**: `n` counts only non-equivalent protons on **adjacent** carbons (3 bonds away).",
        "**In ester questions, locate the `4.0 ppm` peak immediately**: whatever alkyl fragment appears near `3.7–4.8 ppm` is bonded directly to the single-bonded oxygen (`−O−R'`).",
      ],
      thinkDeeper:
        "Why does `1,2-dichloroethane` (`ClCH₂−CH₂Cl`) give ONLY ONE singlet in its ¹H NMR spectrum even though each `CH₂` carbon is right next to another `CH₂` carbon bearing two protons?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Define a homologous series (give 3 key features).",
        back: "A family of organic compounds with the **same general formula** and **same functional group**, where successive members differ by **−CH₂−** (`ΔM = 14.03 g mol⁻¹`), showing **similar chemical properties** and a **graduated trend in physical properties**.",
        level: "SL",
      },
      {
        front: "Why does `(CH₃)₃COH` count as a 3° alcohol whereas `(CH₃)₃CNH₂` counts as a 1° amine?",
        back: "Alcohols (and halogenoalkanes) are classified by the number of carbons bonded to the **α-carbon** carrying `−OH`/`−X` (3 carbons → 3°). Amines are classified by the number of carbons bonded **directly to nitrogen** (only 1 carbon bonded to N → 1° amine).",
        level: "SL",
      },
      {
        front: "How do you name an ester `R−COO−R'` by IUPAC rules?",
        back: "Name **`R'`** (from the alcohol, bonded to single-bonded `−O−`) first as an **alkyl** group, then a space, then **`R−COO`** (from the acid, including the carbonyl carbon) as an **alkanoate**. E.g. `CH₃CH₂COOCH₃` = **methyl propanoate**.",
        level: "SL",
      },
      {
        front: "What is the formula for Index of Hydrogen Deficiency (IHD), and what happens to O atoms?",
        back: "`IHD = (2C + 2 + N − H − X) / 2`. It equals **rings + π bonds**. Divalent **O and S atoms are omitted** because they do not alter the saturated H count.",
        level: "SL",
      },
      {
        front: "What is the IHD of a benzene ring (`C₆H₆`), a `C=O` bond, and a `C≡N` nitrile?",
        back: "Benzene ring = **4** (1 ring + 3 π bonds); `C=O` = **1** (1 π bond); `C≡N` = **2** (2 π bonds).",
        level: "SL",
      },
      {
        front: "What physical condition makes a molecular vibration IR-active?",
        back: "The stretching or bending vibration must cause a **change in the molecule's dipole moment**. (Homonuclear diatomics like `N₂` and `O₂` are IR-inactive.)",
        level: "SL",
      },
      {
        front: "How do IR spectra distinguish an alcohol `O−H` from a carboxylic acid `O−H`?",
        back: "Alcohol `O−H`: strong, broad band at **`3200–3600 cm⁻¹`** (no `C=O`). Carboxylic acid `O−H`: strong, **very broad** band at **`2500–3000 cm⁻¹`** (overlapping `C−H`) PLUS a sharp **`C=O` peak at `1700–1750 cm⁻¹`**.",
        level: "SL",
      },
      {
        front: "Identify the common MS fragment losses of `15`, `17`, `29`, and `45`, and fragment `m/z = 43`.",
        back: "Loss `15` = `CH₃•`; loss `17` = `OH•`; loss `29` = `C₂H₅•` or `CHO•`; loss `45` = `COOH•` or `C₂H₅O•`; fragment `m/z = 43` = `CH₃CO⁺` or `C₃H₇⁺`.",
        level: "SL",
      },
      {
        front: "State the two requirements for cis–trans / E–Z stereoisomerism.",
        back: "1) **Restricted rotation** (a `C=C` double bond or a cyclic ring) AND 2) **two different atoms or groups** attached to each of the two carbons involved.",
        level: "HL",
      },
      {
        front: "State the Cahn–Ingold–Prelog (CIP) rule for assigning `(E)` vs `(Z)`.",
        back: "Rank the two groups on each `C=C` carbon by the **atomic number (`Z`)** of the directly attached atom (moving outward on ties). Higher-priority groups on the **same side** = **`(Z)`** (*zusammen*); on **opposite sides** = **`(E)`** (*entgegen*).",
        level: "HL",
      },
      {
        front: "Compare enantiomers and diastereomers in physical properties and optical activity.",
        back: "**Enantiomers** are non-superimposable mirror images with **identical physical properties** that rotate plane-polarized light equally in **opposite directions**. **Diastereomers** are non-mirror-image stereoisomers with **different physical properties**.",
        level: "HL",
      },
      {
        front: "Why is TMS (`Si(CH₃)₄`) chosen as the `0.0 ppm` reference in ¹H NMR?",
        back: "12 chemically equivalent protons → single sharp peak; Si is less electronegative than C → strongly shielded (upfield of organic signals); chemically inert and volatile (`bp 27 °C`).",
        level: "HL",
      },
      {
        front: "What ¹H NMR splitting pattern identifies an ethyl group (`−CH₂CH₃`) vs an isopropyl group (`−CH(CH₃)₂`)?",
        back: "Ethyl = **3H triplet + 2H quartet**. Isopropyl = **6H doublet + 1H septet**.",
        level: "HL",
      },
      {
        front: "How does ¹H NMR distinguish `CH₃COOCH₂CH₃` (ethyl ethanoate) from `CH₃CH₂COOCH₃` (methyl propanoate)?",
        back: "Protons on the carbon bonded to single-bonded `−O−` appear downfield at **`3.7–4.8 ppm`**: in ethyl ethanoate that is the **2H quartet (`−O−CH₂−`)** at `4.1 ppm`, whereas in methyl propanoate it is the **3H singlet (`−O−CH₃`)** at `3.7 ppm`.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Successive homologous-series members differ by `−CH₂−` (`ΔM = 14.03`); boiling point rises with chain length (stronger LDFs) and falls with branching (less surface area).",
      "Know every IB class vs functional group name: alcohol (`hydroxyl`), carboxylic acid (`carboxyl`), amine (`amino`), amide (`carboxamide`), ester (`ester`), ether (`ether`), arene (`phenyl`), aldehyde/ketone (`carbonyl`).",
      "Ester naming: `alkyl` comes from the alcohol (`−O−R'`), `alkanoate` comes from the acid (`R−COO−`) including its carbonyl carbon.",
      "`IHD = (2C + 2 + N − H − X) / 2` counts rings + π bonds (oxygen is excluded; benzene = `IHD 4`).",
      "IR big four: alcohol `O−H` broad `3200–3600 cm⁻¹`; carboxylic acid `O−H` very broad `2500–3000 cm⁻¹`; sharp `C=O` `1700–1750 cm⁻¹`; fingerprint region `< 1500 cm⁻¹`.",
      "MS `M⁺` gives `M_r`; always write `+` charges on detected fragment ions (`CH₃CO⁺` at `m/z = 43`, `C₂H₅⁺`/`CHO⁺` at `m/z = 29`, `C₆H₅⁺` at `m/z = 77`).",
      "[HL] CIP E/Z priority uses **atomic number (`Z`)** of the directly bonded atom—not overall molar mass; `Z` = same side, `E` = opposite sides.",
      "[HL] A chiral carbon has 4 *different* groups, giving enantiomers (non-superimposable mirror images); a 50:50 racemic mixture is optically inactive.",
      "[HL] ¹H NMR gives environments (number of signals), deshielding (`δ` in ppm relative to TMS = 0), H ratio (integration), and adjacent non-equivalent H count (`n + 1` splitting).",
      "[HL] Rapidly exchanging `−OH` and `−NH` protons normally appear as broad singlets and do not cause splitting.",
    ],
    misconceptions: [
      {
        wrong: "`(CH₃)₃C−NH₂` is a tertiary amine because the carbon has three methyl groups.",
        right: "Amines are classified by how many carbons are bonded directly to **nitrogen**. Here N is bonded to only **one** carbon (and two H atoms), so it is a **primary (1°) amine**!",
        level: "SL",
      },
      {
        wrong: "In the ester `CH₃CH₂COOCH₃`, the left chain has 3 carbons so it is called `propyl ethanoate`.",
        right: "The alkyl prefix comes from the group bonded to the **single-bonded oxygen** (`−O−CH₃` = methyl), and the carbonyl carbon belongs to the acid (`CH₃CH₂COO−` = propanoate) → **methyl propanoate**.",
        level: "SL",
      },
      {
        wrong: "Oxygen must be subtracted in the IHD formula because it replaces hydrogen.",
        right: "Oxygen is divalent (`−O−`), so inserting it leaves the saturated hydrogen count unchanged—**O does not appear in `IHD = (2C + 2 + N − H − X)/2`**.",
        level: "SL",
      },
      {
        wrong: "A molecule with `C=O` at `1720 cm⁻¹` and `C−H` at `2950 cm⁻¹` must be a carboxylic acid.",
        right: "Carboxylic acids require a **very broad `O−H` trough spanning `2500–3000 cm⁻¹`** in addition to `C=O`. Without a broad `O−H` peak, it is an aldehyde, ketone, or ester.",
        level: "SL",
      },
      {
        wrong: "In CIP E/Z rules, `−CH₂CH₂CH₃` has higher priority than `−OH` because it has a larger molar mass (`43 > 17`).",
        right: "CIP compares **atomic number (`Z`) of the first directly bonded atom** first! Oxygen (`Z = 8`) beats carbon (`Z = 6`), so `−OH` has higher priority than any alkyl chain.",
        level: "HL",
      },
      {
        wrong: "All *cis* alkenes are automatically `(Z)` and all *trans* alkenes are `(E)`.",
        right: "Only when the two identical groups happen to be the priority-1 groups. In `2-bromobut-2-ene`, `−Br` outranks `−CH₃` on C-2, so placing the two `−CH₃` groups *cis* puts priority-1 `−Br` and `−CH₃` on opposite sides → **(E)**!",
        level: "HL",
      },
      {
        wrong: "In ¹H NMR, a `−CH₂−` group splits into a triplet because it has 2 protons.",
        right: "The `n + 1` rule counts **non-equivalent protons on ADJACENT carbons**, NOT on the same carbon! A `−CH₂−` bonded to `−CH₃` has `n = 3` neighbours → **quartet**.",
        level: "HL",
      },
      {
        wrong: "Enantiomers can be separated by fractional distillation because they are different isomers.",
        right: "Enantiomers have **identical boiling points, melting points, and solubilities**, so ordinary distillation cannot separate them (unlike diastereomers, which have different physical properties).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing **compound class** when the question asks for the **functional group** (e.g. writing 'alcohol' instead of 'hydroxyl', or 'carboxylic acid' instead of 'carboxyl').",
      "Omitting the **`+` charge** when identifying mass-spectrometry fragment ions (always write `CH₃CO⁺`, not `CH₃CO`).",
      "Forgetting to include the **carbonyl carbon** when counting the acid chain length in esters, aldehydes, carboxylic acids, amides, and nitriles (e.g. `CH₃CN` is **ethanenitrile**, 2 carbons, not methanenitrile!).",
      "Drawing skeletal formulas of aldehydes or alcohols and omitting the `H` on `−OH` or `−NH₂` (only C−H hydrogens are omitted in skeletal formulas).",
      "Quoting only a single number instead of linking **wavenumber + bond** in IR answers (e.g. state 'strong sharp peak at `1720 cm⁻¹` indicates `C=O`' AND mention absence of `O−H` if ruling out acids/alcohols).",
      "[HL] Saying enantiomers 'have different chemical properties' without specifying **towards other chiral molecules / biological receptors** (their reactions with achiral reagents are identical!).",
      "[HL] Confusing `n` in the `n + 1` NMR rule with the integration of the signal itself, or expecting symmetric `ClCH₂−CH₂Cl` to split (equivalent protons never split each other).",
      "[HL] Failing to state ALL THREE NMR pieces (shift `δ`, integration, and splitting) when an IB Paper 2 question asks you to deduce a structure from combined spectra.",
    ],
    mnemonics: [
      {
        topic: "CIP E/Z Stereoisomers",
        device: "Z = Zame Zide · E = Enemies (Opposite)",
        explanation:
          "After ranking each `C=C` carbon's two substituents by atomic number `Z`, priority-1 groups on the **Z**ame **Z**ide = `(Z)` (*zusammen*); across from each other like **E**nemies = `(E)` (*entgegen*).",
        level: "HL",
      },
      {
        topic: "Index of Hydrogen Deficiency (IHD)",
        device: "O is invisible, N adds, X subtracts",
        explanation:
          "Start from saturated `2C + 2`, ignore divalent `O`/`S`, **add `N`**, **subtract `H` and `X`**, then divide by `2`: `IHD = (2C + 2 + N − H − X)/2`.",
        level: "SL",
      },
      {
        topic: "Naming Esters (`R−COO−R'`)",
        device: "Alkyl from Alcohol First, Alkanoate from Acid Second",
        explanation:
          "Slice `R−C(=O) | O−R'` right after `C=O`: the oxygen side (`−O−R'`) is named first (`alkyl`), and the carbonyl side (`R−COO`) is named second (`-oate`).",
        level: "SL",
      },
      {
        topic: "¹H NMR Axis Direction",
        device: "D-D-L: Deshielded → Downfield → Left (higher δ)",
        explanation:
          "Electronegative atoms (`O`, `Cl`, `C=O`) **deshield** protons, moving signals **downfield** to the **left** (larger `δ` ppm, farther from TMS at `0 ppm` on the right).",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Chiral Pharmacology & The Thalidomide Tragedy",
        detail:
          "In the late 1950s, thalidomide was prescribed as a racemic mixture: the `(R)`-enantiomer relieved morning sickness while the `(S)`-enantiomer caused severe birth defects. Even pure `(R)`-thalidomide racemizes in vivo—today pharmaceutical chemists synthesize and test single enantiomers rigorously.",
        emoji: "💊",
      },
      {
        title: "Roadside Infrared Breathalysers",
        detail:
          "Evidential police breathalysers pass IR radiation through exhaled breath and measure absorption by ethanol's `C−H` (`~2950 cm⁻¹`) and `C−O` (`~1050 cm⁻¹`) stretching bands using the Beer–Lambert law, delivering instant quantitative blood-alcohol readings.",
        emoji: "🚔",
      },
      {
        title: "Hospital MRI Scanners Run on ¹H NMR",
        detail:
          "Magnetic Resonance Imaging (MRI) is medical ¹H NMR of water and lipid protons in human tissues! Gradient magnetic fields map proton density and relaxation times into millimeter-resolution 3D anatomical scans with zero ionizing radiation.",
        emoji: "🏥",
      },
      {
        title: "Anti-Doping GC–MS in Olympic Sport",
        detail:
          "Gas Chromatography–Mass Spectrometry separates complex urine mixtures and matches each molecule's exact `M⁺` peak and unique fragmentation fingerprint against banned-substance libraries down to parts-per-billion sensitivity.",
        emoji: "🏅",
      },
      {
        title: "Fruit Aromas: Esters in Food Chemistry",
        detail:
          "Tiny structural swaps in esters completely change aroma: `3-methylbutyl ethanoate` smells like ripe bananas, `ethyl butanoate` gives pineapple its tropical note, and `octyl ethanoate` produces fresh orange scent.",
        emoji: "🍌",
      },
    ],
    videos: [
      {
        title: "IB Chemistry S3.2 Functional Groups & IUPAC Nomenclature",
        channel: "MSJChem (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=MSJChem+IB+Chemistry+functional+groups+IUPAC+naming",
      },
      {
        title: "IB Chemistry HL Stereoisomerism: E/Z CIP Rules & Optical Enantiomers",
        channel: "Richard Thornley (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+stereoisomerism+EZ+CIP+enantiomers",
      },
      {
        title: "IB Chemistry IHD, Mass Spectrometry & Infrared Spectroscopy",
        channel: "MSJChem (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=MSJChem+IHD+mass+spectrometry+infrared+spectroscopy+IB",
      },
      {
        title: "IB Chemistry HL ¹H NMR Splitting & Combined Structure Elucidation",
        channel: "Professor Dave / IB Chemistry (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+proton+NMR+splitting+combined+spectroscopy",
      },
    ],
    formulas: [
      {
        name: "Index of Hydrogen Deficiency (IHD)",
        formula: "{{IHD = (2C + 2 + N - H - X)/2}}",
        note: "Equals rings + π bonds; O and S are excluded; X = F, Cl, Br, I.",
        level: "SL",
      },
      {
        name: "Homologous Series Step",
        formula: "Δ = −CH₂− (ΔM = 14.03 g mol⁻¹)",
        note: "Successive members share general formula & functional group.",
        level: "SL",
      },
      {
        name: "General Formulas (SL Core)",
        formula: "Alkane CₙH₂ₙ₊₂ · Alkene CₙH₂ₙ · Alkyne CₙH₂ₙ₋₂ · Alcohol/Ether CₙH₂ₙ₊₂O",
        note: "Aldehyde/Ketone: CₙH₂ₙO · Carboxylic acid/Ester: CₙH₂ₙO₂.",
        level: "SL",
      },
      {
        name: "IR Carbonyl Stretch (C=O)",
        formula: "1700 – 1750 cm⁻¹ (strong, sharp)",
        note: "Present in aldehydes, ketones, carboxylic acids, and esters.",
        level: "SL",
      },
      {
        name: "IR Hydroxyl Stretch (O−H)",
        formula: "Alcohol: 3200–3600 cm⁻¹ (broad) · Acid: 2500–3000 cm⁻¹ (very broad)",
        note: "Acid O−H overlaps C−H (2850–3090 cm⁻¹) and pairs with sharp C=O.",
        level: "SL",
      },
      {
        name: "Key MS Fragment Ions",
        formula: "15 (CH₃⁺) · 29 (C₂H₅⁺/CHO⁺) · 43 (CH₃CO⁺/C₃H₇⁺) · 45 (COOH⁺/C₂H₅O⁺) · 77 (C₆H₅⁺)",
        note: "M⁺ gives M_r; always include the + charge on fragment formulas.",
        level: "SL",
      },
      {
        name: "CIP Priority Rule (E/Z)",
        formula: "Priority ranked by atomic number Z (I > Br > Cl > F > O > N > C > H)",
        note: "Z = same side (zusammen); E = opposite sides (entgegen).",
        level: "HL",
      },
      {
        name: "Maximum Stereoisomers",
        formula: "{{N_max = 2^(n + m)}}",
        note: "n = chiral carbons, m = E/Z double bonds (fewer if meso symmetry exists).",
        level: "HL",
      },
      {
        name: "¹H NMR Spin–Spin Splitting (n + 1 Rule)",
        formula: "Number of sub-peaks = n + 1 (Pascal's triangle intensities)",
        note: "n = non-equivalent protons on directly adjacent carbons. TMS reference = 0.0 ppm.",
        level: "HL",
      },
      {
        name: "Diagnostic ¹H NMR Chemical Shifts",
        formula: "R−CH₃ (0.9) · −COCH₃ (2.1) · −OCH₂− (3.7–4.3) · Ar−H (7.2) · −CHO (9.8) · −COOH (11.5) ppm",
        note: "Higher δ = downfield (left) = more deshielded by electronegative atoms.",
        level: "HL",
      },
    ],
  },
};
