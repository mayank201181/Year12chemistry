import type { Drill, DrillItem, Rng } from "./types.ts";

const SUB = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
function sub(n: number): string {
  if (n <= 1) return "";
  return String(n)
    .split("")
    .map((d) => SUB[Number(d)] ?? d)
    .join("");
}

function formulaStr(parts: Array<[string, number]>): string {
  return parts
    .filter(([, n]) => n > 0)
    .map(([el, n]) => `${el}${sub(n)}`)
    .join("");
}

const ROOTS = ["", "meth", "eth", "prop", "but", "pent", "hex", "hept", "oct"];

function alkylCondensed(n: number): string {
  if (n === 1) return "CH₃";
  return "CH₃" + "CH₂".repeat(n - 1);
}

function alkylRight(n: number): string {
  if (n === 1) return "CH₃";
  return "CH₂".repeat(n - 1) + "CH₃";
}

function acidChain(n: number): string {
  if (n === 1) return "H";
  return alkylCondensed(n - 1);
}

// =============================================================================
// DRILL 1 (SL, Level 1): Index of Hydrogen Deficiency (IHD)
// =============================================================================
const ihdDrill: Drill = {
  id: "s3-2-organic-classification.ihd-calculation",
  topicId: "s3-2-organic-classification",
  title: "Index of Hydrogen Deficiency (IHD)",
  level: 1,
  ibLevel: "SL",
  guideRef: "ihd-ms-ir-spectroscopy",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const c = rng.int(2, 12);
      const maxIhd = Math.min(5, Math.floor((2 * c) / 2));
      const ihd = rng.int(0, maxIhd);
      const h = 2 * c + 2 - 2 * ihd;
      const o = rng.int(0, 4);
      const f = formulaStr([
        ["C", c],
        ["H", h],
        ["O", o],
      ]);
      const traps = [];
      if (o >= 2 && o % 2 === 0 && ihd - o / 2 >= 0) {
        traps.push({
          spec: { type: "number" as const, value: ihd - o / 2 },
          feedback: "Divalent oxygen (O) is omitted from the IHD formula—do not subtract oxygen atoms!",
        });
      }
      if (ihd > 0) {
        traps.push({
          spec: { type: "number" as const, value: ihd * 2 },
          feedback: "Remember to divide by 2 at the end of `IHD = (2C + 2 − H) / 2`.",
        });
      }
      return {
        prompt: `Calculate the Index of Hydrogen Deficiency (IHD) of \`${f}\`. Enter a whole number.`,
        answer: { type: "number", value: ihd, display: String(ihd) },
        hint: "Use `IHD = (2C + 2 + N − H − X) / 2`, remembering that oxygen atoms are excluded.",
        traps,
        solution: [
          "Formula: `IHD = (2C + 2 + N − H − X) / 2` (oxygen is omitted).",
          `Substitute \`C = ${c}\`, \`H = ${h}\`: \`IHD = (2(${c}) + 2 − ${h}) / 2 = ${2 * c + 2 - h} / 2 = ${ihd}\`.`,
        ],
      };
    }

    if (tier === 2) {
      const c = rng.int(3, 12);
      const n = rng.int(0, 3);
      const halogens = rng.pick(["Cl", "Br", "F"] as const);
      const x = rng.int(0, 3);
      const o = rng.int(0, 4);
      const maxIhd = Math.min(7, Math.floor((2 * c + 2 + n - x - 2) / 2));
      const ihd = rng.int(0, Math.max(0, maxIhd));
      const h = 2 * c + 2 + n - x - 2 * ihd;
      const f = formulaStr([
        ["C", c],
        ["H", h],
        ["N", n],
        ["O", o],
        [halogens, x],
      ]);
      const traps = [];
      if (n > 0 && ihd - n >= 0) {
        traps.push({
          spec: { type: "number" as const, value: ihd - n },
          feedback: "Nitrogen **adds** `+N` in the IHD numerator (unlike halogens, which subtract `X`).",
        });
      }
      if (x > 0) {
        traps.push({
          spec: { type: "number" as const, value: ihd + x },
          feedback: "Each halogen replaces one hydrogen, so **subtract** `X` in `2C + 2 + N − H − X`.",
        });
      }
      return {
        prompt: `Calculate the Index of Hydrogen Deficiency (IHD) of \`${f}\`. Enter a whole number.`,
        answer: { type: "number", value: ihd, display: String(ihd) },
        hint: "Apply `IHD = (2C + 2 + N − H − X) / 2`: add N, subtract H and halogens X, ignore O.",
        traps,
        solution: [
          `Identify \`C = ${c}\`, \`H = ${h}\`, \`N = ${n}\`, \`X = ${x}\` (ignore \`O = ${o}\`).`,
          `\`IHD = (2(${c}) + 2 + ${n} − ${h} − ${x}) / 2 = ${2 * ihd} / 2 = ${ihd}\`.`,
        ],
      };
    }

    // Tier 3: Mix complex polyfunctional IHD + reverse H-count deduction
    const reverseMode = rng.bool(0.45);
    const c = rng.int(5, 16);
    const n = rng.int(0, 4);
    const o = rng.int(0, 5);
    const hal = rng.pick(["Cl", "Br", "F"] as const);
    const x = rng.int(0, 3);
    const maxIhd = Math.min(10, Math.floor((2 * c + 2 + n - x - 2) / 2));
    const ihd = rng.int(1, Math.max(1, maxIhd));
    const h = 2 * c + 2 + n - x - 2 * ihd;

    if (reverseMode) {
      const rest = formulaStr([
        ["N", n],
        ["O", o],
        [hal, x],
      ]);
      const skeleton = `C${sub(c)}H_x${rest}`;
      return {
        prompt: `An organic molecule with formula \`${skeleton}\` has an Index of Hydrogen Deficiency of **${ihd}**. Determine the number of hydrogen atoms (\`x\`) in one molecule. Enter a whole number.`,
        answer: { type: "number", value: h, display: String(h) },
        hint: "Rearrange `IHD = (2C + 2 + N − H − X) / 2` to solve for `H = 2C + 2 + N − X − 2(IHD)`.",
        solution: [
          "Rearrange the IHD formula: `H = 2C + 2 + N − X − 2(IHD)` (oxygen does not enter).",
          `Substitute \`C = ${c}\`, \`N = ${n}\`, \`X = ${x}\`, \`IHD = ${ihd}\`: \`H = ${2 * c} + 2 + ${n} − ${x} − ${2 * ihd} = ${h}\`.`,
        ],
      };
    }

    const f = formulaStr([
      ["C", c],
      ["H", h],
      ["N", n],
      ["O", o],
      [hal, x],
    ]);
    return {
      prompt: `A pharmaceutical intermediate has molecular formula \`${f}\`. Calculate its Index of Hydrogen Deficiency (IHD). Enter a whole number.`,
      answer: { type: "number", value: ihd, display: String(ihd) },
      hint: "Oxygen is ignored; add `N` and subtract both `H` and halogens (`X`) before dividing by 2.",
      solution: [
        `Values: \`C = ${c}\`, \`H = ${h}\`, \`N = ${n}\`, \`X = ${x}\` (\`O = ${o}\` excluded).`,
        `\`IHD = (${2 * c} + 2 + ${n} − ${h} − ${x}) / 2 = ${2 * ihd} / 2 = ${ihd}\`.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 2 (SL, Level 1): Functional Groups & Systematic IUPAC Naming
// =============================================================================
const iupacDrill: Drill = {
  id: "s3-2-organic-classification.iupac-naming",
  topicId: "s3-2-organic-classification",
  title: "IUPAC Naming & Esters (C1–C6)",
  level: 1,
  ibLevel: "SL",
  guideRef: "homologous-series-iupac",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const kind = rng.pick(["aldehyde", "acid", "nitrile", "amide", "alcohol1", "halo1"] as const);
      if (kind === "aldehyde") {
        const c = rng.int(1, 6);
        const formula = c === 1 ? "HCHO" : `${alkylCondensed(c - 1)}CHO`;
        const name = `${ROOTS[c]}anal`;
        return {
          prompt: `State the IUPAC name of the aldehyde \`${formula}\`.`,
          answer: { type: "text", accept: [name, `${ROOTS[c]}an-1-al`], display: name },
          hint: "Count ALL carbons including the carbon inside `−CHO`, then add `-anal`.",
          solution: [
            `Terminal \`−CHO\` is an aldehyde at C-1; total carbons = ${c} (\`${ROOTS[c]}an-\`).`,
            `IUPAC name: **${name}**.`,
          ],
        };
      }
      if (kind === "acid") {
        const c = rng.int(1, 6);
        const formula = c === 1 ? "HCOOH" : `${alkylCondensed(c - 1)}COOH`;
        const name = `${ROOTS[c]}anoic acid`;
        return {
          prompt: `State the IUPAC name of the carboxylic acid \`${formula}\`.`,
          answer: { type: "text", accept: [name], display: name },
          hint: "Include the carboxyl carbon (`−COOH`) in the chain count and add `-anoic acid`.",
          solution: [
            `Terminal \`−COOH\` gives suffix \`-oic acid\`; total carbons = ${c} (\`${ROOTS[c]}an-\`).`,
            `IUPAC name: **${name}**.`,
          ],
        };
      }
      if (kind === "nitrile") {
        const c = rng.int(1, 6);
        const formula = c === 1 ? "HCN" : `${alkylCondensed(c - 1)}CN`;
        const name = `${ROOTS[c]}anenitrile`;
        return {
          prompt: `State the IUPAC name of the nitrile \`${formula}\`.`,
          answer: { type: "text", accept: [name], display: name },
          hint: "Include the carbon atom inside `−C≡N` in the total chain length and keep the `e` in `-anenitrile`.",
          solution: [
            `Total carbons including \`−CN\` = ${c} (\`${ROOTS[c]}ane-\`) + \`nitrile\`.`,
            `IUPAC name: **${name}**.`,
          ],
        };
      }
      if (kind === "amide") {
        const c = rng.int(1, 6);
        const formula = c === 1 ? "HCONH₂" : `${alkylCondensed(c - 1)}CONH₂`;
        const name = `${ROOTS[c]}anamide`;
        return {
          prompt: `State the IUPAC name of the primary amide \`${formula}\`.`,
          answer: { type: "text", accept: [name], display: name },
          hint: "Count the carbonyl carbon of `−CONH₂` in the parent chain and add `-anamide`.",
          solution: [
            `Total carbons including \`−CONH₂\` = ${c} → **${name}**.`,
          ],
        };
      }
      if (kind === "alcohol1") {
        const c = rng.int(1, 6);
        const formula = `${alkylCondensed(c)}OH`;
        const name = c <= 2 ? `${ROOTS[c]}anol` : `${ROOTS[c]}an-1-ol`;
        const accept = c <= 2 ? [name, `${ROOTS[c]}an-1-ol`] : [name, `1-${ROOTS[c]}anol`];
        return {
          prompt: `State the IUPAC name of the straight-chain alcohol \`${formula}\`.`,
          answer: { type: "text", accept, display: name },
          hint: c <= 2 ? "Count the carbons and add `-anol`." : "Number from the `−OH` carbon (C-1) so it receives the lowest locant.",
          solution: [
            `${c}-carbon chain carrying \`−OH\` at C-1 → **${name}**.`,
          ],
        };
      }
      // halo1
      const c = rng.int(2, 6);
      const hal = rng.pick([
        ["F", "fluoro"],
        ["Cl", "chloro"],
        ["Br", "bromo"],
        ["I", "iodo"],
      ] as const);
      const formula = `${alkylCondensed(c)}${hal[0]}`;
      const name = c === 2 ? `${hal[1]}ethane` : `1-${hal[1]}${ROOTS[c]}ane`;
      const accept = c === 2 ? [name, `1-${hal[1]}ethane`] : [name];
      return {
        prompt: `State the IUPAC name of the halogenoalkane \`${formula}\`.`,
        answer: { type: "text", accept, display: name },
        hint: `Number from the carbon carrying \`−${hal[0]}\` (locant 1 for chains ≥ 3 carbons).`,
        solution: [
          `Chain length = ${c} (\`${ROOTS[c]}ane\`) with \`${hal[1]}\` at C-1 → **${name}**.`,
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.pick(["ester", "ester", "ketone", "secAlcohol", "ether"] as const);
      if (mode === "ester") {
        const cAcid = rng.int(1, 6);
        const cAlc = rng.int(1, 6);
        const formula = `${acidChain(cAcid)}COO${alkylRight(cAlc)}`;
        const name = `${ROOTS[cAlc]}yl ${ROOTS[cAcid]}anoate`;
        const traps =
          cAcid !== cAlc
            ? [
                {
                  spec: { type: "text" as const, accept: [`${ROOTS[cAcid]}yl ${ROOTS[cAlc]}anoate`] },
                  feedback:
                    "Reversed halves! The `alkyl` prefix comes from `−O−R'` (single-bonded oxygen) and the `-oate` comes from `R−COO` (including `C=O`).",
                },
              ]
            : [];
        return {
          prompt: `Deduce the IUPAC name of the ester \`${formula}\`.`,
          answer: { type: "text", accept: [name], display: name },
          hint: "Slice `R−C(=O) | O−R'`: name the `−O−R'` alcohol half first (`alkyl`), then the `R−COO` acid half (`-oate`).",
          traps,
          solution: [
            `Alcohol-derived alkyl group bonded to \`−O−\` has ${cAlc} carbon(s) → **${ROOTS[cAlc]}yl**.`,
            `Acid-derived chain including \`C=O\` has ${cAcid} carbon(s) → **${ROOTS[cAcid]}anoate**.`,
            `IUPAC name: **${name}**.`,
          ],
        };
      }
      if (mode === "ketone") {
        const ketones = [
          { f: "CH₃COCH₃", name: "propanone", accept: ["propanone", "propan-2-one"] },
          { f: "CH₃COCH₂CH₃", name: "butanone", accept: ["butanone", "butan-2-one"] },
          { f: "CH₃COCH₂CH₂CH₃", name: "pentan-2-one", accept: ["pentan-2-one", "2-pentanone"] },
          { f: "CH₃CH₂COCH₂CH₃", name: "pentan-3-one", accept: ["pentan-3-one", "3-pentanone"] },
          { f: "CH₃COCH₂CH₂CH₂CH₃", name: "hexan-2-one", accept: ["hexan-2-one", "2-hexanone"] },
          { f: "CH₃CH₂COCH₂CH₂CH₃", name: "hexan-3-one", accept: ["hexan-3-one", "3-hexanone"] },
        ];
        const k = rng.pick(ketones);
        return {
          prompt: `State the IUPAC name of the ketone \`${k.f}\`.`,
          answer: { type: "text", accept: k.accept, display: k.name },
          hint: "Number from the end nearest the `C=O` carbon to give the carbonyl carbon the lowest locant.",
          solution: [`Numbering from the end closest to \`C=O\` gives **${k.name}**.`],
        };
      }
      if (mode === "secAlcohol") {
        const alc = rng.pick([
          { f: "CH₃CH(OH)CH₃", name: "propan-2-ol", accept: ["propan-2-ol", "2-propanol"] },
          { f: "CH₃CH(OH)CH₂CH₃", name: "butan-2-ol", accept: ["butan-2-ol", "2-butanol"] },
          { f: "CH₃CH(OH)CH₂CH₂CH₃", name: "pentan-2-ol", accept: ["pentan-2-ol", "2-pentanol"] },
          { f: "CH₃CH₂CH(OH)CH₂CH₃", name: "pentan-3-ol", accept: ["pentan-3-ol", "3-pentanol"] },
          { f: "CH₃CH(OH)CH₂CH₂CH₂CH₃", name: "hexan-2-ol", accept: ["hexan-2-ol", "2-hexanol"] },
          { f: "CH₃CH₂CH(OH)CH₂CH₂CH₃", name: "hexan-3-ol", accept: ["hexan-3-ol", "3-hexanol"] },
        ]);
        return {
          prompt: `State the IUPAC name of the secondary alcohol \`${alc.f}\`.`,
          answer: { type: "text", accept: alc.accept, display: alc.name },
          hint: "Find the longest carbon chain and number so the `−OH` carbon gets the lowest possible locant.",
          solution: [`Parent chain with \`−OH\` numbered from the nearer end → **${alc.name}**.`],
        };
      }
      // ether
      const a = rng.int(1, 3);
      const b = rng.int(a, 5);
      const swap = rng.bool();
      const formula = swap ? `${alkylCondensed(b)}O${alkylRight(a)}` : `${alkylCondensed(a)}O${alkylRight(b)}`;
      const name = b >= 3 ? `1-${ROOTS[a]}oxy${ROOTS[b]}ane` : `${ROOTS[a]}oxy${ROOTS[b]}ane`;
      const accept = b >= 3 ? [name, `${ROOTS[a]}oxy${ROOTS[b]}ane`] : [name];
      return {
        prompt: `State the IUPAC name of the ether \`${formula}\` (using alkoxyalkane nomenclature).`,
        answer: { type: "text", accept, display: name },
        hint: "Name the shorter chain + `oxy` as a substituent on the longer parent alkane chain.",
        solution: [
          `Shorter chain (${a} C) gives \`${ROOTS[a]}oxy-\`; longer chain (${b} C) gives \`${ROOTS[b]}ane\`.`,
          `IUPAC name: **${name}**.`,
        ],
      };
    }

    // Tier 3: Branched & halo-substituted chains (45+ distinct items)
    const pattern = rng.pick(["haloMethyl", "haloAlkene", "methylAlkanol"] as const);
    if (pattern === "haloMethyl") {
      const hal = rng.pick([
        ["F", "fluoro"],
        ["Cl", "chloro"],
        ["Br", "bromo"],
        ["I", "iodo"],
      ] as const);
      const chainLen = rng.int(4, 6);
      // Place halo at posH (2..chainLen-1) and methyl at posM (2..chainLen-1), posH !== posM
      const posH = rng.int(2, chainLen - 1);
      let posM = rng.int(2, chainLen - 1);
      while (posM === posH) posM = rng.int(2, chainLen - 1);
      // Build condensed string left-to-right (1..chainLen)
      const segs: string[] = [];
      for (let i = 1; i <= chainLen; i++) {
        if (i === 1 || i === chainLen) segs.push("CH₃");
        else if (i === posH) segs.push(`CH(${hal[0]})`);
        else if (i === posM) segs.push("CH(CH₃)");
        else segs.push("CH₂");
      }
      const formula = segs.join("");
      // Determine canonical numbering (left vs right)
      const revH = chainLen + 1 - posH;
      const revM = chainLen + 1 - posM;
      const fwdSet = [posH, posM].sort((a, b) => a - b);
      const revSet = [revH, revM].sort((a, b) => a - b);
      let useFwd = true;
      if (revSet[0] < fwdSet[0] || (revSet[0] === fwdSet[0] && revSet[1] < fwdSet[1])) {
        useFwd = false;
      } else if (revSet[0] === fwdSet[0] && revSet[1] === fwdSet[1]) {
        // Tie-break alphabetically: hal[1] vs "methyl"
        const halFirst = hal[1] < "methyl";
        useFwd = halFirst ? posH < revH : posM < revM;
      }
      const finalH = useFwd ? posH : revH;
      const finalM = useFwd ? posM : revM;
      const subs: Array<[string, number]> = [
        [hal[1], finalH] as [string, number],
        ["methyl", finalM] as [string, number],
      ].sort((a, b) => a[0].localeCompare(b[0]));
      const name = `${subs[0][1]}-${subs[0][0]}-${subs[1][1]}-${subs[1][0]}${ROOTS[chainLen]}ane`;
      return {
        prompt: `Deduce the full IUPAC name of \`${formula}\`.`,
        answer: { type: "text", accept: [name], display: name },
        hint: "Choose the numbering direction that gives the lowest locant set (alphabetical order breaks ties), then list substituents alphabetically.",
        solution: [
          `Longest chain = ${chainLen} carbons (\`${ROOTS[chainLen]}ane\`).`,
          `Optimal numbering assigns \`${hal[1]}\` to C-${finalH} and \`methyl\` to C-${finalM}.`,
          `Order alphabetically → **${name}**.`,
        ],
      };
    }

    if (pattern === "haloAlkene") {
      // X-CH2-CH=CH-R or CH3-CH(X)-CH=CH2 etc. — clean terminal halo-alk-1-enes: CH2=CH-(CH2)k-CH(X)-CH3
      const hal = rng.pick([
        ["F", "fluoro"],
        ["Cl", "chloro"],
        ["Br", "bromo"],
        ["I", "iodo"],
      ] as const);
      const c = rng.int(4, 6);
      const posX = rng.int(3, c);
      // C=C is at C1-C2 so it ALWAYS gets priority locant 1!
      const segs = ["CH₂=CH"];
      for (let i = 3; i <= c; i++) {
        if (i === c) segs.push(i === posX ? `CH₂${hal[0]}` : "CH₃");
        else segs.push(i === posX ? `CH(${hal[0]})` : "CH₂");
      }
      const formula = segs.join("");
      const name = `${posX}-${hal[1]}${ROOTS[c]}-1-ene`;
      return {
        prompt: `Deduce the IUPAC name of \`${formula}\`.`,
        answer: { type: "text", accept: [name], display: name },
        hint: "The `C=C` alkene double bond has higher priority than a halogen substituent, so number from the `C=C` end!",
        solution: [
          `Parent chain = ${c} carbons with \`C=C\` at C-1 (\`${ROOTS[c]}-1-ene\`).`,
          `Halogen sits at C-${posX} → **${name}**.`,
        ],
      };
    }

    // methylAlkanol: HO-CH2-... with methyl branch
    const c = rng.int(4, 6);
    const posM = rng.int(2, c - 1);
    const rev = rng.bool();
    const segs: string[] = [];
    for (let i = 1; i <= c; i++) {
      if (i === 1) segs.push("HOCH₂");
      else if (i === c) segs.push("CH₃");
      else if (i === posM) segs.push("CH(CH₃)");
      else segs.push("CH₂");
    }
    const formula = rev ? [...segs].reverse().join("").replace("HOCH₂", "CH₂OH") : segs.join("");
    const name = `${posM}-methyl${ROOTS[c]}an-1-ol`;
    return {
      prompt: `Deduce the IUPAC name of \`${formula}\`.`,
      answer: { type: "text", accept: [name], display: name },
      hint: "Number from the carbon bonded to `−OH` (principal functional group gets C-1).",
      solution: [
        `Longest chain containing \`−OH\` has ${c} carbons (\`${ROOTS[c]}an-1-ol\`), with a methyl branch at C-${posM}.`,
        `IUPAC name: **${name}**.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 3 (SL, Level 2): Mass Spectrometry M+ & Fragmentation
// =============================================================================
const msDrill: Drill = {
  id: "s3-2-organic-classification.mass-spec-fragments",
  topicId: "s3-2-organic-classification",
  title: "Mass Spectrometry: M⁺ & Fragment Losses",
  level: 2,
  ibLevel: "SL",
  guideRef: "ihd-ms-ir-spectroscopy",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const series = rng.pick([
        { label: "alkane", minC: 2, maxC: 9, fn: (c: number) => ({ h: 2 * c + 2, o: 0, n: 0, name: `${ROOTS[c] ?? `C${c}-`}ane` }) },
        { label: "alkene", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c, o: 0, n: 0, name: `${ROOTS[c]}-1-ene` }) },
        { label: "alcohol", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c + 2, o: 1, n: 0, name: `${ROOTS[c]}an-1-ol` }) },
        { label: "aldehyde", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c, o: 1, n: 0, name: `${ROOTS[c]}anal` }) },
        { label: "carboxylic acid", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c, o: 2, n: 0, name: `${ROOTS[c]}anoic acid` }) },
        { label: "primary amine", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c + 3, o: 0, n: 1, name: `${ROOTS[c]}an-1-amine` }) },
        { label: "nitrile", minC: 2, maxC: 8, fn: (c: number) => ({ h: 2 * c - 1, o: 0, n: 1, name: `${ROOTS[c]}anenitrile` }) },
      ]);
      const c = rng.int(series.minC, Math.min(series.maxC, 8));
      const { h, o, n } = series.fn(c);
      const f = formulaStr([
        ["C", c],
        ["H", h],
        ["N", n],
        ["O", o],
      ]);
      const mr = 12 * c + h + 14 * n + 16 * o;
      return {
        prompt: `Determine the \`m/z\` value of the molecular ion peak (\`M⁺\`) for the ${series.label} \`${f}\`. Use \`C = 12, H = 1, O = 16, N = 14\`.`,
        answer: { type: "number", value: mr, display: String(mr) },
        hint: "Sum the integer atomic masses of every atom in the molecular formula.",
        solution: [
          `\`M⁺ = 12(${c}) + 1(${h})${n ? ` + 14(${n})` : ""}${o ? ` + 16(${o})` : ""} = ${mr}\`.`,
        ],
      };
    }

    if (tier === 2) {
      const lossBank = [
        { radical: "CH₃•", loss: 15 },
        { radical: "OH•", loss: 17 },
        { radical: "H₂O", loss: 18 },
        { radical: "CO", loss: 28 },
        { radical: "C₂H₅•", loss: 29 },
        { radical: "CH₃O•", loss: 31 },
        { radical: "C₃H₇•", loss: 43 },
        { radical: "C₂H₅O•", loss: 45 },
        { radical: "COOH•", loss: 45 },
      ];
      const item = rng.pick(lossBank);
      const c = rng.int(4, 9);
      const o = item.radical.includes("O") ? rng.int(1, 2) : rng.int(0, 2);
      const ihd = rng.int(0, 2);
      const h = 2 * c + 2 - 2 * ihd;
      const mr = 12 * c + h + 16 * o;
      const frag = mr - item.loss;
      const f = formulaStr([
        ["C", c],
        ["H", h],
        ["O", o],
      ]);
      const askLoss = rng.bool();
      if (askLoss) {
        return {
          prompt: `A compound of molecular formula \`${f}\` produces a prominent fragment peak at \`m/z = ${frag}\`. Calculate the mass lost from \`M⁺\` (Use \`C = 12, H = 1, O = 16\`).`,
          answer: { type: "number", value: item.loss, display: String(item.loss) },
          hint: "First compute `M⁺` from the formula, then subtract the fragment `m/z`.",
          solution: [
            `\`M⁺(${f}) = 12(${c}) + ${h} + 16(${o}) = ${mr}\`.`,
            `Mass lost = \`${mr} − ${frag} = ${item.loss}\` (consistent with \`${item.radical}\`).`,
          ],
        };
      }
      return {
        prompt: `A compound of molecular formula \`${f}\` undergoes fragmentation from \`M⁺\` by losing \`${item.radical}\` (mass \`${item.loss}\`). Predict the \`m/z\` value of the resulting cation (Use \`C = 12, H = 1, O = 16\`).`,
        answer: { type: "number", value: frag, display: String(frag) },
        hint: "Compute `M⁺` first, then subtract the mass of the lost neutral species.",
        solution: [
          `\`M⁺(${f}) = 12(${c}) + ${h} + 16(${o}) = ${mr}\`.`,
          `Fragment cation \`m/z = ${mr} − ${item.loss} = ${frag}\`.`,
        ],
      };
    }

    // Tier 3: Empirical formula + M+ -> find molecular carbon count OR acylium -> CO loss cascade
    if (rng.bool()) {
      const ec = rng.int(1, 4);
      const eo = rng.int(1, 2);
      const eh = rng.int(Math.max(1, ec), 2 * ec + 1);
      const eMass = 12 * ec + eh + 16 * eo;
      const mult = rng.int(2, 5);
      const mr = eMass * mult;
      const empStr = formulaStr([
        ["C", ec],
        ["H", eh],
        ["O", eo],
      ]);
      const molC = ec * mult;
      return {
        prompt: `An unknown organic compound has empirical formula \`${empStr}\` and a molecular ion peak at \`m/z = ${mr}\`. How many **carbon atoms** are in one molecule? (Use \`C = 12, H = 1, O = 16\`.)`,
        answer: { type: "number", value: molC, display: String(molC) },
        hint: "Find the empirical formula mass, divide `M⁺` by it to get the whole-number multiplier, then multiply the empirical carbon count.",
        traps:
          mult !== molC
            ? [
                {
                  spec: { type: "number", value: mult },
                  feedback: `\`${mult}\` is the formula multiplier—multiply it by the \`${ec}\` carbon atom(s) in \`${empStr}\`!`,
                },
              ]
            : [],
        solution: [
          `Empirical formula mass of \`${empStr} = 12(${ec}) + ${eh} + 16(${eo}) = ${eMass}\`.`,
          `Multiplier = \`${mr} / ${eMass} = ${mult}\`.`,
          `Carbon atoms per molecule = \`${ec} × ${mult} = ${molC}\`.`,
        ],
      };
    }

    // Ester/ketone two-step fragmentation: R-CO-OR' -> R-CO+ -> R+ (loss of CO = 28)
    const cAcid = rng.int(2, 6);
    const cAlc = rng.int(1, 5);
    const mr = 12 * (cAcid + cAlc) + 2 * (cAcid + cAlc) + 32;
    const alcRad = 12 * cAlc + (2 * cAlc + 1) + 16; // R'O•
    const acylIon = mr - alcRad; // R-CO+
    const alkylIon = acylIon - 28; // R+ after CO loss
    const esterName = `${ROOTS[cAlc]}yl ${ROOTS[cAcid]}anoate`;
    return {
      prompt: `In the mass spectrum of \`${esterName}\` (\`M⁺ = ${mr}\`), cleavage of the \`C−O\` bond loses the alkoxy radical \`C${sub(cAlc)}H${sub(2 * cAlc + 1)}O•\` to form an acylium ion \`R−CO⁺\`, which then loses neutral \`CO\` (mass \`28\`) to give an alkyl cation \`R⁺\`. Calculate the \`m/z\` value of \`R⁺\` (Use \`C = 12, H = 1, O = 16\`).`,
      answer: { type: "number", value: alkylIon, display: String(alkylIon) },
      hint: "Subtract the alkoxy radical mass from `M⁺` to get `R−CO⁺`, then subtract `28` (`CO`).",
      traps: [
        {
          spec: { type: "number", value: acylIon },
          feedback: `\`${acylIon}\` is the acylium ion \`R−CO⁺\`—subtract \`28\` for the subsequent loss of \`CO\`!`,
        },
      ],
      solution: [
        `Alkoxy radical mass = \`12(${cAlc}) + ${2 * cAlc + 1} + 16 = ${alcRad}\`.`,
        `Acylium ion \`R−CO⁺ = ${mr} − ${alcRad} = ${acylIon}\`.`,
        `After losing \`CO\` (\`28\`): \`R⁺ = ${acylIon} − 28 = ${alkylIon}\`.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 4 (HL, Level 2): Stereoisomers & CIP E/Z Priority Rules
// =============================================================================
const CIP_GROUPS: Array<{ label: string; rank: number; reason: string }> = [
  { label: "−I", rank: 14, reason: "I (Z = 53)" },
  { label: "−Br", rank: 13, reason: "Br (Z = 35)" },
  { label: "−Cl", rank: 12, reason: "Cl (Z = 17)" },
  { label: "−F", rank: 11, reason: "F (Z = 9)" },
  { label: "−OCH₃", rank: 10, reason: "O bonded to C" },
  { label: "−OH", rank: 9, reason: "O bonded to H" },
  { label: "−NH₂", rank: 8, reason: "N (Z = 7)" },
  { label: "−CH₂Cl", rank: 7, reason: "C bonded to (Cl, H, H)" },
  { label: "−COOH", rank: 6, reason: "C bonded to (O, O, O)" },
  { label: "−CHO", rank: 5, reason: "C bonded to (O, O, H)" },
  { label: "−CH₂OH", rank: 4, reason: "C bonded to (O, H, H)" },
  { label: "−CH₂CH₃", rank: 3, reason: "C bonded to (C, H, H)" },
  { label: "−CH₃", rank: 2, reason: "C bonded to (H, H, H)" },
  { label: "−H", rank: 1, reason: "H (Z = 1)" },
];

const stereoDrill: Drill = {
  id: "s3-2-organic-classification.stereoisomers-cip-hl",
  topicId: "s3-2-organic-classification",
  title: "CIP E/Z Rules & Stereoisomer Counting [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "structural-isomers-stereoisomers-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      // Friendly CIP E/Z with clear atomic-number differences (no second-shell ties)
      const simple = CIP_GROUPS.filter((g) => [14, 13, 12, 11, 9, 8, 2, 1].includes(g.rank));
      const lPair = rng.shuffle(simple).slice(0, 2);
      const rPair = rng.shuffle(simple).slice(0, 2);
      const lTop = lPair[0];
      const lBot = lPair[1];
      const rTop = rPair[0];
      const rBot = rPair[1];
      const lHighIsTop = lTop.rank > lBot.rank;
      const rHighIsTop = rTop.rank > rBot.rank;
      const isZ = lHighIsTop === rHighIsTop;
      const ans = isZ ? "Z" : "E";
      const lHigh = lHighIsTop ? lTop : lBot;
      const rHigh = rHighIsTop ? rTop : rBot;
      return {
        prompt: `In an alkene \`(${lTop.label})(${lBot.label})C=C(${rTop.label})(${rBot.label})\`, \`${lTop.label}\` and \`${rTop.label}\` lie on the **same side** of the \`C=C\` double bond. Deduce whether this is the \`E\` or \`Z\` stereoisomer.`,
        answer: { type: "text", accept: [ans, `(${ans})`, `${ans}-isomer`], display: ans },
        hint: "Rank the two groups on each C=C carbon by the atomic number (`Z`) of the directly bonded atom: `Z` = same side, `E` = opposite sides.",
        solution: [
          `Left carbon: \`${lHigh.label}\` (${lHigh.reason}) has higher priority than \`${(lHighIsTop ? lBot : lTop).label}\`.`,
          `Right carbon: \`${rHigh.label}\` (${rHigh.reason}) has higher priority than \`${(rHighIsTop ? rBot : rTop).label}\`.`,
          `Higher-priority groups (\`${lHigh.label}\` and \`${rHigh.label}\`) lie on ${isZ ? "the **same side**" : "**opposite sides**"} → **(${ans})**.`,
        ],
      };
    }

    if (tier === 2) {
      // Full CIP pool including carbon-carbon second-shell tie-breakers!
      const lPair = rng.shuffle(CIP_GROUPS).slice(0, 2);
      const rPair = rng.shuffle(CIP_GROUPS).slice(0, 2);
      const [lTop, lBot] = lPair;
      const [rTop, rBot] = rPair;
      const lHighIsTop = lTop.rank > lBot.rank;
      const rHighIsTop = rTop.rank > rBot.rank;
      const sameSideMentioned = rng.bool();
      // If sameSideMentioned: lTop and rTop are on same side; else lTop and rTop are on opposite sides
      const isZ = sameSideMentioned ? lHighIsTop === rHighIsTop : lHighIsTop !== rHighIsTop;
      const ans = isZ ? "Z" : "E";
      const lHigh = lHighIsTop ? lTop : lBot;
      const rHigh = rHighIsTop ? rTop : rBot;
      return {
        prompt: `In the alkene \`(${lTop.label})(${lBot.label})C=C(${rTop.label})(${rBot.label})\`, \`${lTop.label}\` and \`${rTop.label}\` lie on **${sameSideMentioned ? "the same side" : "opposite sides"}** of the \`C=C\` bond. Assign \`E\` or \`Z\`.`,
        answer: { type: "text", accept: [ans, `(${ans})`, `${ans}-isomer`], display: ans },
        hint: "Compare atomic number `Z` of the directly bonded atom first; on a tie (e.g. two C atoms), compare the highest-`Z` atom attached to each tied atom.",
        solution: [
          `Left carbon priority 1: \`${lHigh.label}\` (${lHigh.reason}).`,
          `Right carbon priority 1: \`${rHigh.label}\` (${rHigh.reason}).`,
          `Relative positions place both priority-1 groups on ${isZ ? "the **same side**" : "**opposite sides**"} → **(${ans})**.`,
        ],
      };
    }

    // Tier 3: Mix tough carbon-only CIP tie-breakers + 2^(n+m) stereoisomer counts
    if (rng.bool(0.5)) {
      const cGroups = CIP_GROUPS.filter((g) => g.rank >= 2 && g.rank <= 7);
      const [lTop, lBot] = rng.shuffle(cGroups).slice(0, 2);
      const [rTop, rBot] = rng.shuffle(CIP_GROUPS.filter((g) => g.rank >= 2 && g.rank <= 10)).slice(0, 2);
      const lHighIsTop = lTop.rank > lBot.rank;
      const rHighIsTop = rTop.rank > rBot.rank;
      const same = rng.bool();
      const isZ = same ? lHighIsTop === rHighIsTop : lHighIsTop !== rHighIsTop;
      const ans = isZ ? "Z" : "E";
      const lHigh = lHighIsTop ? lTop : lBot;
      const rHigh = rHighIsTop ? rTop : rBot;
      return {
        prompt: `Apply CIP tie-breaking rules to \`(${lTop.label})(${lBot.label})C=C(${rTop.label})(${rBot.label})\`, where \`${lTop.label}\` and \`${rTop.label}\` sit on **${same ? "the same side" : "opposite sides"}** of \`C=C\`. Enter \`E\` or \`Z\`.`,
        answer: { type: "text", accept: [ans, `(${ans})`, `${ans}-isomer`], display: ans },
        hint: "List the three atoms bonded to each tied carbon in descending `Z` order (count double-bonded O twice) and compare the highest-`Z` atom first!",
        solution: [
          `Left carbon: \`${lHigh.label}\` (${lHigh.reason}) beats \`${(lHighIsTop ? lBot : lTop).label}\`.`,
          `Right carbon: \`${rHigh.label}\` (${rHigh.reason}) beats \`${(rHighIsTop ? rBot : rTop).label}\`.`,
          `Priority-1 groups sit on ${isZ ? "the **same side**" : "**opposite sides**"} → **(${ans})**.`,
        ],
      };
    }

    const chiral = rng.int(1, 5);
    const ez = rng.int(0, 3);
    const total = Math.pow(2, chiral + ez);
    const nameTag = rng.pick(["natural terpene", "synthetic drug candidate", "polyunsaturated fatty acid", "pharmaceutical ester", "chiral alkaloid"]);
    return {
      prompt: `An unsymmetrical ${nameTag} (with no internal plane of symmetry) contains **${chiral} chiral carbon${chiral === 1 ? "" : "s"}** and **${ez} E/Z-capable \`C=C\` double bond${ez === 1 ? "" : "s"}**. Calculate the total number of configurational stereoisomers possible. Enter a whole number.`,
      answer: { type: "number", value: total, display: String(total) },
      hint: "Each independent chiral centre and each E/Z double bond multiplies the stereoisomer count by 2: `2^(n + m)`.",
      traps:
        2 * (chiral + ez) !== total
          ? [
              {
                spec: { type: "number", value: 2 * (chiral + ez) },
                feedback: "Independent stereocentres multiply (`2^(n+m)`), rather than multiplying `2 × (n + m)`!",
              },
            ]
          : [],
      solution: [
        `Total independent stereogenic units = \`${chiral} + ${ez} = ${chiral + ez}\`.`,
        `Total stereoisomers = \`2^${chiral + ez} = ${total}\`.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 5 (HL, Level 3): ¹H NMR Environments & n + 1 Splitting
// =============================================================================
const nmrDrill: Drill = {
  id: "s3-2-organic-classification.proton-nmr-hl",
  topicId: "s3-2-organic-classification",
  title: "¹H NMR Environments & n + 1 Splitting [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "proton-nmr-combined-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      // Count distinct 1H NMR environments across combinatorial ketones, ethers, esters, and symmetry classics
      const kind = rng.pick(["ester", "ketone", "ether", "classic"] as const);
      if (kind === "ester") {
        // R-COO-R' where R has cAcid carbons (including C=O) and R' has cAlc carbons
        const cAcid = rng.int(1, 5);
        const cAlc = rng.int(1, 5);
        const formula = `${acidChain(cAcid)}COO${alkylRight(cAlc)}`;
        // Acid side has cAcid - 1 proton-bearing carbons (or 1 if HCOO-); alcohol side has cAlc proton-bearing carbons!
        // Because COO is unsymmetrical, acid side and alcohol side are NEVER equivalent!
        const acidEnv = cAcid === 1 ? 1 : cAcid - 1;
        const env = acidEnv + cAlc;
        return {
          prompt: `How many distinct signals (peaks) appear in the ¹H NMR spectrum of the ester \`${formula}\`? Enter a whole number.`,
          answer: { type: "number", value: env, display: String(env) },
          hint: "An ester linkage `−COO−` is unsymmetrical, so no protons on the acid side can be equivalent to protons on the alcohol side.",
          solution: [
            `Acid side (\`${acidChain(cAcid)}COO−\`) contributes ${acidEnv} proton environment(s).`,
            `Alcohol side (\`−O${alkylRight(cAlc)}\`) contributes ${cAlc} distinct environment(s).`,
            `Total ¹H NMR signals = \`${acidEnv} + ${cAlc} = ${env}\`.`,
          ],
        };
      }
      if (kind === "ketone") {
        const a = rng.int(1, 4);
        const b = rng.int(1, 4);
        const formula = `${alkylCondensed(a)}CO${alkylRight(b)}`;
        const env = a === b ? a : a + b;
        return {
          prompt: `How many distinct signals (peaks) appear in the ¹H NMR spectrum of the ketone \`${formula}\`? Enter a whole number.`,
          answer: { type: "number", value: env, display: String(env) },
          hint: a === b ? "Check whether the two alkyl chains flanking `C=O` are identical by mirror symmetry!" : "The two chains flanking `C=O` have different lengths, so there is no mirror symmetry.",
          solution: [
            a === b
              ? `Symmetric ketone: the two identical C${a} chains match by mirror symmetry → **${env}** signal(s).`
              : `Unsymmetrical ketone: C${a} left chain (${a} env) + C${b} right chain (${b} env) = **${env}** signals.`,
          ],
        };
      }
      if (kind === "ether") {
        const a = rng.int(1, 4);
        const b = rng.int(1, 4);
        const formula = `${alkylCondensed(a)}O${alkylRight(b)}`;
        const env = a === b ? a : a + b;
        return {
          prompt: `How many distinct signals (peaks) appear in the ¹H NMR spectrum of the ether \`${formula}\`? Enter a whole number.`,
          answer: { type: "number", value: env, display: String(env) },
          hint: "Check whether the two alkyl chains attached to `−O−` are identical (symmetric) or different lengths.",
          solution: [
            a === b
              ? `Symmetric ether across \`−O−\`: both C${a} chains are equivalent → **${env}** signal(s).`
              : `Unsymmetrical ether: ${a} + ${b} = **${env}** signals.`,
          ],
        };
      }
      const classics = [
        { name: "2,2-dimethylpropane, `C(CH₃)₄`", env: 1, why: "All 12 methyl protons are equivalent by tetrahedral symmetry." },
        { name: "2-methylpropan-2-ol, `(CH₃)₃COH`", env: 2, why: "9 equivalent methyl H + 1 hydroxyl H = 2 signals." },
        { name: "propan-2-ol, `(CH₃)₂CHOH`", env: 3, why: "6 equivalent methyl H + 1 methine H + 1 OH = 3 signals." },
        { name: "1,4-dimethylbenzene, `CH₃−C₆H₄−CH₃`", env: 2, why: "6 equivalent methyl H + 4 equivalent ring H = 2 signals." },
        { name: "1,3,5-trimethylbenzene, `C₆H₃(CH₃)₃`", env: 2, why: "9 equivalent methyl H + 3 equivalent ring H = 2 signals." },
        { name: "1,2-dichloroethane, `ClCH₂CH₂Cl`", env: 1, why: "Mirror symmetry makes all 4 CH₂ protons equivalent." },
        { name: "1,1-dichloroethane, `CH₃CHCl₂`", env: 2, why: "3 methyl H + 1 CHCl₂ proton = 2 signals." },
        { name: "2-chloropropane, `(CH₃)₂CHCl`", env: 2, why: "6 equivalent methyl H + 1 methine H = 2 signals." },
        { name: "2-methylpropanoic acid, `(CH₃)₂CHCOOH`", env: 3, why: "6 methyl H + 1 methine H + 1 COOH = 3 signals." },
        { name: "butan-1-ol, `CH₃CH₂CH₂CH₂OH`", env: 5, why: "4 distinct carbon-H environments + 1 OH = 5 signals." },
      ];
      const pick = rng.pick(classics);
      return {
        prompt: `How many distinct signals (peaks) appear in the ¹H NMR spectrum of ${pick.name}? Enter a whole number.`,
        answer: { type: "number", value: pick.env, display: String(pick.env) },
        hint: "Check for mirror or rotational symmetry before counting each proton environment.",
        solution: [pick.why],
      };
    }

    if (tier === 2) {
      // Predict n + 1 line count for a clearly highlighted environment across 40+ combinatorial molecules
      const families: Array<() => DrillItem> = [
        // 1. Haloalkane CH3-(CH2)k-CH2-X -> pick a carbon and count adjacent H
        () => {
          const hal = rng.pick(["Cl", "Br", "F", "I"]);
          const c = rng.int(2, 5);
          const pos = rng.int(1, c); // 1 = terminal CH3, c = CH2X
          const segs: string[] = [];
          for (let i = 1; i <= c; i++) {
            const label = i === 1 ? "CH₃" : i === c ? `CH₂${hal}` : "CH₂";
            segs.push(i === pos ? `[${label}]` : label);
          }
          const leftH = pos === 1 ? 0 : pos - 1 === 1 ? 3 : 2;
          const rightH = pos === c ? 0 : 2;
          const n = leftH + rightH;
          const lines = n + 1;
          return {
            prompt: `In high-resolution ¹H NMR of \`${segs.join("−")}\`, into how many lines does the bracketed proton group split? Enter a whole number.`,
            answer: { type: "number", value: lines, display: String(lines) },
            hint: "Count non-equivalent H atoms on the directly adjacent carbon(s) (`n`), then compute `n + 1`.",
            solution: [
              `Adjacent non-equivalent protons on neighbouring carbons: \`n = ${leftH} + ${rightH} = ${n}\`.`,
              `Number of split lines = \`n + 1 = ${lines}\`.`,
            ],
          };
        },
        // 2. Branched isopropyl / sec-butyl / tert-butyl haloalkanes & acids
        () => {
          const cases = [
            { f: "[(CH₃)₂]CHCl", n: 1, why: "Adjacent methine carbon has 1 H → doublet (2 lines)." },
            { f: "(CH₃)₂[CH]Cl", n: 6, why: "Adjacent two equivalent CH₃ groups carry 6 H → septet (7 lines)." },
            { f: "[(CH₃)₂]CHBr", n: 1, why: "Adjacent methine carbon has 1 H → doublet (2 lines)." },
            { f: "(CH₃)₂[CH]Br", n: 6, why: "Adjacent two equivalent CH₃ groups carry 6 H → septet (7 lines)." },
            { f: "[(CH₃)₃]CCl", n: 0, why: "Adjacent quaternary carbon carries 0 H → singlet (1 line)." },
            { f: "CH₃[CH(Cl)]CH₂CH₃", n: 5, why: "Adjacent CH₃ (3 H) + CH₂ (2 H) = 5 H → sextet (6 lines)." },
            { f: "CH₃CH(Cl)[CH₂]CH₃", n: 4, why: "Adjacent CHCl (1 H) + CH₃ (3 H) = 4 H → quintet (5 lines)." },
            { f: "(CH₃)₂[CH]COOH", n: 6, why: "Adjacent 6 methyl H (and carbonyl C has 0 H) → septet (7 lines)." },
            { f: "[(CH₃)₂]CHCOOH", n: 1, why: "Adjacent methine C carries 1 H → doublet (2 lines)." },
            { f: "CH₃[CH₂]COOCH₃", n: 3, why: "Adjacent CH₃ has 3 H; carbonyl C has 0 H → quartet (4 lines)." },
            { f: "CH₃CH₂COO[CH₃]", n: 0, why: "Adjacent oxygen atom has no C−H protons → singlet (1 line)." },
            { f: "[CH₃]COOCH₂CH₃", n: 0, why: "Adjacent carbonyl C carries 0 H → singlet (1 line)." },
            { f: "CH₃COO[CH₂]CH₃", n: 3, why: "Adjacent CH₃ has 3 H (ester oxygen blocks coupling) → quartet (4 lines)." },
            { f: "CH₃COOCH₂[CH₃]", n: 2, why: "Adjacent CH₂ carries 2 H → triplet (3 lines)." },
            { f: "Cl[CH₂]CH₂Cl", n: 0, why: "Symmetrical molecule: equivalent protons never split each other → singlet (1 line)." },
          ];
          const c = rng.pick(cases);
          const lines = c.n + 1;
          return {
            prompt: `In high-resolution ¹H NMR of \`${c.f}\`, into how many lines does the bracketed proton group split? Enter a whole number.`,
            answer: { type: "number", value: lines, display: String(lines) },
            hint: "Remember: count ONLY chemically non-equivalent protons on directly adjacent carbons (3 bonds away), then add 1.",
            solution: [c.why, `\`n + 1 = ${c.n} + 1 = ${lines}\`.`],
          };
        },
      ];
      return rng.pick(families)();
    }

    // Tier 3: Ester shift-orientation & combined splitting-ratio deductions (30+ unique prompts)
    const cAcid = rng.int(1, 5);
    const cAlc = rng.int(1, 5);
    const esterFormula = `${acidChain(cAcid)}COO${alkylRight(cAlc)}`;
    const askDownfieldLines = rng.bool();
    if (askDownfieldLines) {
      // The protons directly attached to single-bonded -O- sit at 3.7–4.8 ppm (or HCOO- at 8.1 ppm!)
      // Always ask specifically about the -O-CHn- group in 3.7–4.8 ppm!
      const nAdj = cAlc === 1 ? 0 : cAlc === 2 ? 3 : 2;
      const lines = nAdj + 1;
      const groupStr = cAlc === 1 ? "−O−CH₃" : "−O−CH₂−";
      return {
        prompt: `In the ¹H NMR spectrum of \`${esterFormula}\`, look at the signal in the \`3.7–4.8 ppm\` region arising from the protons bonded directly to the single-bonded ester oxygen (\`${groupStr}\`). Into how many lines does this signal split? Enter a whole number.`,
        answer: { type: "number", value: lines, display: String(lines) },
        hint: `Inspect the carbon directly adjacent to \`${groupStr}\` along the alcohol alkyl chain (ignore the ester oxygen side).`,
        solution: [
          `The alcohol chain is \`−O−${alkylRight(cAlc)}\`.`,
          `The carbon bonded to \`−O−\` has \`n = ${nAdj}\` adjacent C−H protons on the neighbouring carbon.`,
          `Splitting = \`n + 1 = ${nAdj} + 1 = ${lines}\` lines.`,
        ],
      };
    }

    // Ask for the splitting of the α-carbon next to C=O (2.0–2.7 ppm) when cAcid >= 2!
    const acidC = Math.max(2, cAcid);
    const f2 = `${acidChain(acidC)}COO${alkylRight(cAlc)}`;
    const nAdj = acidC === 2 ? 0 : acidC === 3 ? 3 : 2;
    const lines = nAdj + 1;
    return {
      prompt: `In the ¹H NMR spectrum of \`${f2}\`, consider the protons on the carbon directly adjacent to the carbonyl group (\`−CHₙ−C=O\`, resonating at \`2.0–2.7 ppm\`). Into how many lines does this signal split? Enter a whole number.`,
      answer: { type: "number", value: lines, display: String(lines) },
      hint: "Look at the alkyl chain attached to `C=O`: how many H atoms sit on the carbon directly next to that `α-carbon`?",
      solution: [
        `The acyl chain is \`${acidChain(acidC)}−C(=O)−\`.`,
        `Its α-carbon (next to \`C=O\`) has \`n = ${nAdj}\` protons on the adjacent alkyl carbon.`,
        `Splitting = \`n + 1 = ${nAdj} + 1 = ${lines}\` lines.`,
      ],
    };
  },
};

export const drills: Drill[] = [ihdDrill, iupacDrill, msDrill, stereoDrill, nmrDrill];
