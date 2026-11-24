import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";
import type { Trap } from "../types.ts";

// IB Data Booklet constants (FA 2025)
const H_PLANCK = 6.63e-34;
const C_LIGHT = 3.0e8;
const N_AVOGADRO = 6.02e23;

function sig3(x: number): number {
  return parseFloat(x.toPrecision(3));
}

function fmtSigned(n: number): string {
  if (n === 0) return "0";
  return n > 0 ? `+${num(n)}` : num(n);
}

// ---------------------------------------------------------------------------
// DRILL 1: Oxidation States (SL, level 1 — Sprint-ready!)
// ---------------------------------------------------------------------------
interface OxEntry {
  formula: string;
  target: string;
  os: number;
  rule: string;
  trap?: { val: number; fb: string };
}

const OX_T1: OxEntry[] = [
  { formula: "CO₂", target: "C", os: 4, rule: "O = −2, neutral: x + 2(−2) = 0" },
  { formula: "CO", target: "C", os: 2, rule: "O = −2, neutral: x + (−2) = 0" },
  { formula: "SO₂", target: "S", os: 4, rule: "O = −2, neutral: x + 2(−2) = 0" },
  { formula: "SO₃", target: "S", os: 6, rule: "O = −2, neutral: x + 3(−2) = 0" },
  { formula: "NO₂", target: "N", os: 4, rule: "O = −2, neutral: x + 2(−2) = 0" },
  { formula: "NO", target: "N", os: 2, rule: "O = −2, neutral: x + (−2) = 0" },
  { formula: "N₂O", target: "N", os: 1, rule: "O = −2, neutral: 2x + (−2) = 0", trap: { val: 2, fb: "There are TWO nitrogen atoms in `N₂O` — divide `+2` by `2`." } },
  { formula: "N₂O₅", target: "N", os: 5, rule: "O = −2, neutral: 2x + 5(−2) = 0", trap: { val: 10, fb: "Divide by `2` for the two N atoms in `N₂O₅`." } },
  { formula: "PCl₃", target: "P", os: 3, rule: "Cl = −1, neutral: x + 3(−1) = 0" },
  { formula: "PCl₅", target: "P", os: 5, rule: "Cl = −1, neutral: x + 5(−1) = 0" },
  { formula: "SF₆", target: "S", os: 6, rule: "F = −1, neutral: x + 6(−1) = 0" },
  { formula: "NH₃", target: "N", os: -3, rule: "H = +1, neutral: x + 3(+1) = 0", trap: { val: 3, fb: "Check the sign: N is more electronegative than H, so `x + 3 = 0` gives `−3`." } },
  { formula: "CH₄", target: "C", os: -4, rule: "H = +1, neutral: x + 4(+1) = 0", trap: { val: 4, fb: "Check the sign: `x + 4(+1) = 0` gives `−4`." } },
  { formula: "H₂S", target: "S", os: -2, rule: "H = +1, neutral: 2(+1) + x = 0" },
  { formula: "HCl", target: "Cl", os: -1, rule: "H = +1, neutral: (+1) + x = 0" },
  { formula: "H₂SO₄", target: "S", os: 6, rule: "H = +1, O = −2: 2(+1) + x + 4(−2) = 0" },
  { formula: "H₂SO₃", target: "S", os: 4, rule: "H = +1, O = −2: 2(+1) + x + 3(−2) = 0" },
  { formula: "HNO₃", target: "N", os: 5, rule: "H = +1, O = −2: (+1) + x + 3(−2) = 0" },
  { formula: "HNO₂", target: "N", os: 3, rule: "H = +1, O = −2: (+1) + x + 2(−2) = 0" },
  { formula: "H₃PO₄", target: "P", os: 5, rule: "H = +1, O = −2: 3(+1) + x + 4(−2) = 0" },
  { formula: "H₂CO₃", target: "C", os: 4, rule: "H = +1, O = −2: 2(+1) + x + 3(−2) = 0" },
  { formula: "MgO", target: "Mg", os: 2, rule: "Group 2 metal / O = −2: x + (−2) = 0" },
  { formula: "Al₂O₃", target: "Al", os: 3, rule: "O = −2: 2x + 3(−2) = 0", trap: { val: 6, fb: "Divide `+6` by `2` for the two Al atoms." } },
  { formula: "SiO₂", target: "Si", os: 4, rule: "O = −2: x + 2(−2) = 0" },
  { formula: "P₄O₁₀", target: "P", os: 5, rule: "O = −2: 4x + 10(−2) = 0", trap: { val: 20, fb: "Divide `+20` by `4` phosphorus atoms." } },
  { formula: "P₄O₆", target: "P", os: 3, rule: "O = −2: 4x + 6(−2) = 0" },
  { formula: "FeCl₂", target: "Fe", os: 2, rule: "Cl = −1: x + 2(−1) = 0" },
  { formula: "FeCl₃", target: "Fe", os: 3, rule: "Cl = −1: x + 3(−1) = 0" },
  { formula: "Fe₂O₃", target: "Fe", os: 3, rule: "O = −2: 2x + 3(−2) = 0" },
  { formula: "FeO", target: "Fe", os: 2, rule: "O = −2: x + (−2) = 0" },
  { formula: "CuO", target: "Cu", os: 2, rule: "O = −2: x + (−2) = 0" },
  { formula: "Cu₂O", target: "Cu", os: 1, rule: "O = −2: 2x + (−2) = 0", trap: { val: 2, fb: "There are two Cu atoms in `Cu₂O`, so `2x = +2` → `+1`." } },
  { formula: "MnO₂", target: "Mn", os: 4, rule: "O = −2: x + 2(−2) = 0" },
  { formula: "Cr₂O₃", target: "Cr", os: 3, rule: "O = −2: 2x + 3(−2) = 0" },
  { formula: "TiO₂", target: "Ti", os: 4, rule: "O = −2: x + 2(−2) = 0" },
  { formula: "V₂O₅", target: "V", os: 5, rule: "O = −2: 2x + 5(−2) = 0" },
];

const OX_T2: OxEntry[] = [
  { formula: "SO₄²⁻", target: "S", os: 6, rule: "x + 4(−2) = −2", trap: { val: 8, fb: "Set the sum to the ion charge `−2`, not `0`." } },
  { formula: "SO₃²⁻", target: "S", os: 4, rule: "x + 3(−2) = −2" },
  { formula: "S₂O₃²⁻", target: "S", os: 2, rule: "2x + 3(−2) = −2", trap: { val: 4, fb: "Divide `+4` by the `2` sulfur atoms." } },
  { formula: "HSO₃⁻", target: "S", os: 4, rule: "(+1) + x + 3(−2) = −1" },
  { formula: "NO₃⁻", target: "N", os: 5, rule: "x + 3(−2) = −1", trap: { val: 6, fb: "Set the sum equal to `−1`, not `0`." } },
  { formula: "NO₂⁻", target: "N", os: 3, rule: "x + 2(−2) = −1" },
  { formula: "NH₄⁺", target: "N", os: -3, rule: "x + 4(+1) = +1", trap: { val: -5, fb: "The overall charge is `+1`: `x + 4 = +1` → `x = −3`." } },
  { formula: "CO₃²⁻", target: "C", os: 4, rule: "x + 3(−2) = −2" },
  { formula: "HCO₃⁻", target: "C", os: 4, rule: "(+1) + x + 3(−2) = −1" },
  { formula: "C₂O₄²⁻", target: "C", os: 3, rule: "2x + 4(−2) = −2", trap: { val: 6, fb: "Divide by `2` for the two carbon atoms." } },
  { formula: "PO₄³⁻", target: "P", os: 5, rule: "x + 4(−2) = −3" },
  { formula: "HPO₄²⁻", target: "P", os: 5, rule: "(+1) + x + 4(−2) = −2" },
  { formula: "ClO⁻", target: "Cl", os: 1, rule: "x + (−2) = −1" },
  { formula: "ClO₂⁻", target: "Cl", os: 3, rule: "x + 2(−2) = −1" },
  { formula: "ClO₃⁻", target: "Cl", os: 5, rule: "x + 3(−2) = −1" },
  { formula: "ClO₄⁻", target: "Cl", os: 7, rule: "x + 4(−2) = −1" },
  { formula: "BrO₃⁻", target: "Br", os: 5, rule: "x + 3(−2) = −1" },
  { formula: "IO₃⁻", target: "I", os: 5, rule: "x + 3(−2) = −1" },
  { formula: "IO₄⁻", target: "I", os: 7, rule: "x + 4(−2) = −1" },
  { formula: "MnO₄⁻", target: "Mn", os: 7, rule: "x + 4(−2) = −1", trap: { val: 8, fb: "Account for the `−1` overall charge: `x − 8 = −1` → `+7`." } },
  { formula: "MnO₄²⁻", target: "Mn", os: 6, rule: "x + 4(−2) = −2" },
  { formula: "CrO₄²⁻", target: "Cr", os: 6, rule: "x + 4(−2) = −2" },
  { formula: "Cr₂O₇²⁻", target: "Cr", os: 6, rule: "2x + 7(−2) = −2", trap: { val: 12, fb: "Divide `+12` by `2` for the two Cr atoms." } },
  { formula: "VO₂⁺", target: "V", os: 5, rule: "x + 2(−2) = +1", trap: { val: 3, fb: "The overall charge is `+1` (`x − 4 = +1` → `+5`), not `−1`." } },
  { formula: "VO²⁺", target: "V", os: 4, rule: "x + (−2) = +2" },
  { formula: "FeO₄²⁻", target: "Fe", os: 6, rule: "x + 4(−2) = −2" },
  { formula: "H₂O₂", target: "O", os: -1, rule: "Peroxide! H = +1: 2(+1) + 2x = 0", trap: { val: -2, fb: "`H₂O₂` is a peroxide, so oxygen is `−1`, not `−2`." } },
  { formula: "Na₂O₂", target: "O", os: -1, rule: "Peroxide! Na = +1: 2(+1) + 2x = 0", trap: { val: -2, fb: "Group 1 `Na` is always `+1`, forcing `O = −1` in `Na₂O₂`." } },
  { formula: "BaO₂", target: "O", os: -1, rule: "Peroxide! Ba = +2: (+2) + 2x = 0", trap: { val: -2, fb: "Group 2 `Ba` is always `+2`, forcing `O = −1` in `BaO₂`." } },
  { formula: "OF₂", target: "O", os: 2, rule: "F is ALWAYS −1: x + 2(−1) = 0", trap: { val: -2, fb: "Fluorine (`−1`) is more electronegative than oxygen, forcing `O = +2`!" } },
  { formula: "NaH", target: "H", os: -1, rule: "Metal hydride! Na = +1: (+1) + x = 0", trap: { val: 1, fb: "In metal hydrides, Group 1 `Na` is `+1`, so `H` is `−1`." } },
  { formula: "CaH₂", target: "H", os: -1, rule: "Metal hydride! Ca = +2: (+2) + 2x = 0", trap: { val: 1, fb: "Group 2 `Ca` is `+2`, forcing `H = −1` in `CaH₂`." } },
  { formula: "KH", target: "H", os: -1, rule: "Metal hydride! K = +1: (+1) + x = 0", trap: { val: 1, fb: "In metal hydrides, `H = −1`." } },
  { formula: "LiH", target: "H", os: -1, rule: "Metal hydride! Li = +1: (+1) + x = 0", trap: { val: 1, fb: "In metal hydrides, `H = −1`." } },
];

const OX_T3: OxEntry[] = [
  { formula: "KMnO₄", target: "Mn", os: 7, rule: "K = +1, O = −2: (+1) + x + 4(−2) = 0" },
  { formula: "K₂MnO₄", target: "Mn", os: 6, rule: "K = +1, O = −2: 2(+1) + x + 4(−2) = 0" },
  { formula: "K₂Cr₂O₇", target: "Cr", os: 6, rule: "K = +1, O = −2: 2(+1) + 2x + 7(−2) = 0" },
  { formula: "K₂CrO₄", target: "Cr", os: 6, rule: "K = +1, O = −2: 2(+1) + x + 4(−2) = 0" },
  { formula: "NaClO", target: "Cl", os: 1, rule: "Na = +1, O = −2: (+1) + x + (−2) = 0" },
  { formula: "KClO₃", target: "Cl", os: 5, rule: "K = +1, O = −2: (+1) + x + 3(−2) = 0" },
  { formula: "KClO₄", target: "Cl", os: 7, rule: "K = +1, O = −2: (+1) + x + 4(−2) = 0" },
  { formula: "Ca(ClO)₂", target: "Cl", os: 1, rule: "Ca = +2, O = −2: (+2) + 2x + 2(−2) = 0" },
  { formula: "Na₂S₂O₃", target: "S", os: 2, rule: "Na = +1, O = −2: 2(+1) + 2x + 3(−2) = 0" },
  { formula: "Na₂SO₃", target: "S", os: 4, rule: "Na = +1, O = −2: 2(+1) + x + 3(−2) = 0" },
  { formula: "Na₂SO₄", target: "S", os: 6, rule: "Na = +1, O = −2: 2(+1) + x + 4(−2) = 0" },
  { formula: "KHSO₄", target: "S", os: 6, rule: "K = +1, H = +1, O = −2: 1 + 1 + x − 8 = 0" },
  { formula: "NaNO₂", target: "N", os: 3, rule: "Na = +1, O = −2: (+1) + x + 2(−2) = 0" },
  { formula: "KNO₃", target: "N", os: 5, rule: "K = +1, O = −2: (+1) + x + 3(−2) = 0" },
  { formula: "Mg(NO₃)₂", target: "N", os: 5, rule: "Mg = +2, O = −2: (+2) + 2x + 6(−2) = 0" },
  { formula: "Na₂C₂O₄", target: "C", os: 3, rule: "Na = +1, O = −2: 2(+1) + 2x + 4(−2) = 0" },
  { formula: "NaHCO₃", target: "C", os: 4, rule: "Na = +1, H = +1, O = −2: 1 + 1 + x − 6 = 0" },
  { formula: "KIO₃", target: "I", os: 5, rule: "K = +1, O = −2: (+1) + x + 3(−2) = 0" },
  { formula: "NaBrO₃", target: "Br", os: 5, rule: "Na = +1, O = −2: (+1) + x + 3(−2) = 0" },
  { formula: "Na₃PO₄", target: "P", os: 5, rule: "Na = +1, O = −2: 3(+1) + x + 4(−2) = 0" },
  { formula: "Na₂SiO₃", target: "Si", os: 4, rule: "Na = +1, O = −2: 2(+1) + x + 3(−2) = 0" },
  { formula: "NaAl(OH)₄", target: "Al", os: 3, rule: "Na = +1, OH⁻ = −1: (+1) + x + 4(−1) = 0" },
  { formula: "VOCl₃", target: "V", os: 5, rule: "O = −2, Cl = −1: x + (−2) + 3(−1) = 0" },
  { formula: "FeSO₄", target: "Fe", os: 2, rule: "SO₄²⁻ = −2: x + (−2) = 0" },
  { formula: "Fe₂(SO₄)₃", target: "Fe", os: 3, rule: "SO₄²⁻ = −2: 2x + 3(−2) = 0" },
  { formula: "CuSO₄", target: "Cu", os: 2, rule: "SO₄²⁻ = −2: x + (−2) = 0" },
  { formula: "[Fe(CN)₆]³⁻", target: "Fe", os: 3, rule: "CN⁻ = −1: x + 6(−1) = −3" },
  { formula: "[Fe(CN)₆]⁴⁻", target: "Fe", os: 2, rule: "CN⁻ = −1: x + 6(−1) = −4" },
  { formula: "[Cr(NH₃)₄Cl₂]⁺", target: "Cr", os: 3, rule: "NH₃ = 0, Cl⁻ = −1: x + 0 + 2(−1) = +1" },
  { formula: "[Co(NH₃)₅Cl]²⁺", target: "Co", os: 3, rule: "NH₃ = 0, Cl⁻ = −1: x + 0 + (−1) = +2" },
  { formula: "[PtCl₄]²⁻", target: "Pt", os: 2, rule: "Cl⁻ = −1: x + 4(−1) = −2" },
  { formula: "[Ni(CN)₄]²⁻", target: "Ni", os: 2, rule: "CN⁻ = −1: x + 4(−1) = −2" },
  { formula: "[CuCl₄]²⁻", target: "Cu", os: 2, rule: "Cl⁻ = −1: x + 4(−1) = −2" },
  { formula: "[Cr(C₂O₄)₃]³⁻", target: "Cr", os: 3, rule: "C₂O₄²⁻ = −2: x + 3(−2) = −3" },
];

const oxidationStatesDrill: Drill = {
  id: "s3-1-periodicity.oxidation-states",
  topicId: "s3-1-periodicity",
  title: "Oxidation States in Compounds & Ions",
  level: 1,
  ibLevel: "SL",
  guideRef: "group-trends-period3-oxides",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = tier === 1 ? OX_T1 : tier === 2 ? OX_T2 : OX_T3;
    const item = rng.pick(pool);
    const traps: Trap[] = [];
    if (item.trap && item.trap.val !== item.os) {
      traps.push({ spec: { type: "number", value: item.trap.val }, feedback: item.trap.fb });
    }
    if (item.os !== 0 && !traps.some((t) => t.spec.type === "number" && t.spec.value === -item.os)) {
      traps.push({
        spec: { type: "number", value: -item.os },
        feedback: `Check the sign: solving \`${item.rule}\` gives \`${fmtSigned(item.os)}\`.`,
      });
    }
    return {
      prompt: `Deduce the oxidation state of **${item.target}** in \`${item.formula}\`. Enter the integer value (include \`−\` if negative).`,
      answer: { type: "number", value: item.os, display: fmtSigned(item.os) },
      solution: [
        `Apply standard oxidation-state rules: \`${item.rule}\`.`,
        `Solving for **${item.target}** gives \`${fmtSigned(item.os)}\`.`,
      ],
      hint: "Sum all individual oxidation states to equal `0` (neutral compound) or the overall ion charge.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 2: Periodic Trends & Period 3 Oxide Stoichiometry (SL, level 2 — Sprint-ready!)
// ---------------------------------------------------------------------------
interface ElemData {
  sym: string;
  name: string;
  z: number;
  radius: number;
  chi: number;
  ie1: number;
}

const PERIOD3: ElemData[] = [
  { sym: "Na", name: "sodium", z: 11, radius: 160, chi: 0.9, ie1: 496 },
  { sym: "Mg", name: "magnesium", z: 12, radius: 140, chi: 1.3, ie1: 738 },
  { sym: "Al", name: "aluminium", z: 13, radius: 124, chi: 1.6, ie1: 578 },
  { sym: "Si", name: "silicon", z: 14, radius: 114, chi: 1.9, ie1: 787 },
  { sym: "P", name: "phosphorus", z: 15, radius: 109, chi: 2.2, ie1: 1012 },
  { sym: "S", name: "sulfur", z: 16, radius: 104, chi: 2.6, ie1: 1000 },
  { sym: "Cl", name: "chlorine", z: 17, radius: 100, chi: 3.2, ie1: 1251 },
];

const PERIOD2: ElemData[] = [
  { sym: "Li", name: "lithium", z: 3, radius: 130, chi: 1.0, ie1: 520 },
  { sym: "Be", name: "beryllium", z: 4, radius: 99, chi: 1.6, ie1: 900 },
  { sym: "B", name: "boron", z: 5, radius: 84, chi: 2.0, ie1: 801 },
  { sym: "C", name: "carbon", z: 6, radius: 75, chi: 2.6, ie1: 1086 },
  { sym: "N", name: "nitrogen", z: 7, radius: 71, chi: 3.0, ie1: 1402 },
  { sym: "O", name: "oxygen", z: 8, radius: 64, chi: 3.4, ie1: 1314 },
  { sym: "F", name: "fluorine", z: 9, radius: 60, chi: 4.0, ie1: 1681 },
];

const ISO10: Array<{ ion: string; accept: string[]; z: number; r: number }> = [
  { ion: "N³⁻", accept: ["N3-", "N³⁻", "N-3"], z: 7, r: 146 },
  { ion: "O²⁻", accept: ["O2-", "O²⁻", "O-2"], z: 8, r: 140 },
  { ion: "F⁻", accept: ["F-", "F⁻"], z: 9, r: 133 },
  { ion: "Na⁺", accept: ["Na+", "Na⁺"], z: 11, r: 102 },
  { ion: "Mg²⁺", accept: ["Mg2+", "Mg²⁺", "Mg+2"], z: 12, r: 72 },
  { ion: "Al³⁺", accept: ["Al3+", "Al³⁺", "Al+3"], z: 13, r: 54 },
];

interface OxideRxn {
  oxide: string;
  reagent: string;
  product: string;
  ratio: number;
  eq: string;
  ask: "reagent" | "product";
}

const OXIDE_RXNS: OxideRxn[] = [
  { oxide: "Na₂O", reagent: "H₂O", product: "NaOH", ratio: 2, eq: "Na₂O + H₂O → 2NaOH", ask: "product" },
  { oxide: "Na₂O", reagent: "HCl", product: "NaCl", ratio: 2, eq: "Na₂O + 2HCl → 2NaCl + H₂O", ask: "reagent" },
  { oxide: "MgO", reagent: "HCl", product: "MgCl₂", ratio: 2, eq: "MgO + 2HCl → MgCl₂ + H₂O", ask: "reagent" },
  { oxide: "Al₂O₃", reagent: "HCl", product: "AlCl₃", ratio: 6, eq: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O", ask: "reagent" },
  { oxide: "Al₂O₃", reagent: "NaOH", product: "NaAl(OH)₄", ratio: 2, eq: "Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄", ask: "reagent" },
  { oxide: "SiO₂", reagent: "NaOH", product: "Na₂SiO₃", ratio: 2, eq: "SiO₂ + 2NaOH → Na₂SiO₃ + H₂O", ask: "reagent" },
  { oxide: "P₄O₁₀", reagent: "H₂O", product: "H₃PO₄", ratio: 4, eq: "P₄O₁₀ + 6H₂O → 4H₃PO₄", ask: "product" },
  { oxide: "P₄O₁₀", reagent: "H₂O", product: "H₃PO₄", ratio: 6, eq: "P₄O₁₀ + 6H₂O → 4H₃PO₄", ask: "reagent" },
  { oxide: "SO₂", reagent: "NaOH", product: "Na₂SO₃", ratio: 2, eq: "SO₂ + 2NaOH → Na₂SO₃ + H₂O", ask: "reagent" },
  { oxide: "SO₃", reagent: "NaOH", product: "Na₂SO₄", ratio: 2, eq: "SO₃ + 2NaOH → Na₂SO₄ + H₂O", ask: "reagent" },
];

const periodicTrendsOxidesDrill: Drill = {
  id: "s3-1-periodicity.periodic-trends-oxides",
  topicId: "s3-1-periodicity",
  title: "Periodic Trends & Period 3 Oxide Reactions",
  level: 2,
  ibLevel: "SL",
  guideRef: "periodic-trends-nuclear-charge",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const series = rng.bool() ? PERIOD3 : PERIOD2;
        const i = rng.int(0, series.length - 1);
        let j = rng.int(0, series.length - 1);
        while (j === i) j = rng.int(0, series.length - 1);
        const a = series[i];
        const b = series[j];
        const prop = rng.pick(["radius", "chi", "ie1"] as const);
        const wantLarger = rng.bool();
        if (prop === "radius") {
          const win = wantLarger ? (a.radius > b.radius ? a : b) : a.radius < b.radius ? a : b;
          const lose = win === a ? b : a;
          return {
            prompt: `Which element has the **${wantLarger ? "larger" : "smaller"}** covalent atomic radius: **${a.sym}** or **${b.sym}**? Type the element symbol.`,
            answer: { type: "text", accept: [win.sym, win.name], display: win.sym },
            solution: [
              `Both **${a.sym}** (\`Z = ${a.z}\`) and **${b.sym}** (\`Z = ${b.z}\`) lie in the same period (same valence shell).`,
              `Higher nuclear charge increases \`Z_eff\` and shrinks radius: \`${a.sym} = ${a.radius} pm\`, \`${b.sym} = ${b.radius} pm\`, so **${win.sym}** is ${wantLarger ? "larger" : "smaller"}.`,
            ],
            hint: "Atomic radius decreases from left to right across a period as `Z_eff` increases.",
            traps: [{ spec: { type: "text", accept: [lose.sym, lose.name] }, feedback: "Remember atomic radius DECREASES across a period as nuclear charge pulls the same shell closer." }],
          };
        }
        if (prop === "chi") {
          const win = wantLarger ? (a.chi > b.chi ? a : b) : a.chi < b.chi ? a : b;
          const lose = win === a ? b : a;
          return {
            prompt: `Which element has the **${wantLarger ? "higher" : "lower"}** Pauling electronegativity: **${a.sym}** or **${b.sym}**? Type the element symbol.`,
            answer: { type: "text", accept: [win.sym, win.name], display: win.sym },
            solution: [
              `Across a period, effective nuclear charge rises and atomic radius decreases, so electronegativity increases left to right.`,
              `\`χ(${a.sym}) = ${a.chi}\` vs \`χ(${b.sym}) = ${b.chi}\` → **${win.sym}** has the ${wantLarger ? "higher" : "lower"} electronegativity.`,
            ],
            hint: "Electronegativity increases across a period toward Group 17.",
            traps: [{ spec: { type: "text", accept: [lose.sym, lose.name] }, feedback: "Electronegativity INCREASES left to right across a period." }],
          };
        }
        const win = wantLarger ? (a.ie1 > b.ie1 ? a : b) : a.ie1 < b.ie1 ? a : b;
        const lose = win === a ? b : a;
        return {
          prompt: `Which element has the **${wantLarger ? "higher" : "lower"}** first ionization energy (\`IE₁\`): **${a.sym}** or **${b.sym}**? Type the element symbol.`,
          answer: { type: "text", accept: [win.sym, win.name], display: win.sym },
          solution: [
            `Compare IB Data Booklet \`IE₁\` values: \`${a.sym} = ${a.ie1} kJ mol⁻¹\`, \`${b.sym} = ${b.ie1} kJ mol⁻¹\`.`,
            `Therefore **${win.sym}** has the ${wantLarger ? "higher" : "lower"} \`IE₁\` (watch for the Group 2→13 \`p¹\` and Group 15→16 \`p⁴\` dips!).`,
          ],
          hint: "`IE₁` rises across a period EXCEPT for the small dips at Group 13 (`B`, `Al`) and Group 16 (`O`, `S`).",
          traps: [{ spec: { type: "text", accept: [lose.sym, lose.name] }, feedback: `Check both the general upward trend and the Group 2→13 / 15→16 anomalies: \`${a.sym} = ${a.ie1}\`, \`${b.sym} = ${b.ie1} kJ mol⁻¹\`.` }],
        };
      }
      if (mode === 2) {
        const i = rng.int(0, ISO10.length - 1);
        let j = rng.int(0, ISO10.length - 1);
        while (j === i) j = rng.int(0, ISO10.length - 1);
        const a = ISO10[i];
        const b = ISO10[j];
        const wantSmaller = rng.bool();
        const win = wantSmaller ? (a.r < b.r ? a : b) : a.r > b.r ? a : b;
        return {
          prompt: `Both \`${a.ion}\` and \`${b.ion}\` are 10-electron isoelectronic ions. What is the atomic number (\`Z\`) of the **${wantSmaller ? "smaller" : "larger"}** ion?`,
          answer: { type: "number", value: win.z, display: String(win.z) },
          solution: [
            `Both ions have identical electron configuration (\`1s² 2s² 2p⁶\`) and shielding.`,
            `\`${a.ion}\` has \`Z = ${a.z}\` (\`${a.r} pm\`) and \`${b.ion}\` has \`Z = ${b.z}\` (\`${b.r} pm\`). Greater nuclear charge pulls the 10 electrons closer, so the ${wantSmaller ? "smaller" : "larger"} ion is \`${win.ion}\` with \`Z = ${win.z}\`.`,
          ],
          hint: "In an isoelectronic series, higher nuclear charge (`Z`) = smaller ionic radius.",
          traps: [
            {
              spec: { type: "number", value: win === a ? b.z : a.z },
              feedback: "Reverse check: more protons pulling the exact same 10 electrons produces a SMALLER radius.",
            },
          ],
        };
      }
      // Mode 3: Group 17 displacement yes/no? Better: Period 3 oxide classification!
      const OXIDES = [
        { f: "Na₂O", kind: "basic", note: "giant ionic metal oxide → NaOH (pH 13–14)" },
        { f: "MgO", kind: "basic", note: "giant ionic metal oxide → Mg(OH)₂ (pH 9–10)" },
        { f: "Al₂O₃", kind: "amphoteric", note: "reacts with both HCl and NaOH" },
        { f: "SiO₂", kind: "acidic", note: "giant covalent non-metal oxide; reacts with hot conc. NaOH" },
        { f: "P₄O₁₀", kind: "acidic", note: "covalent molecular oxide → H₃PO₄" },
        { f: "SO₂", kind: "acidic", note: "covalent molecular oxide → H₂SO₃" },
        { f: "SO₃", kind: "acidic", note: "covalent molecular oxide → H₂SO₄" },
      ];
      const ox = rng.pick(OXIDES);
      const accept = ox.kind === "basic" ? ["basic", "base", "alkaline"] : ox.kind === "amphoteric" ? ["amphoteric"] : ["acidic", "acid"];
      return {
        prompt: `Classify the Period 3 oxide \`${ox.f}\` as **basic**, **amphoteric**, or **acidic**.`,
        answer: { type: "text", accept, display: ox.kind },
        solution: [
          `Across Period 3, oxides change from basic (\`Na₂O, MgO\`) → amphoteric (\`Al₂O₃\`) → acidic (\`SiO₂, P₄O₁₀, SO₂, SO₃\`).`,
          `\`${ox.f}\` is **${ox.kind}** (${ox.note}).`,
        ],
        hint: "Recall that `SiO₂` is acidic (despite being insoluble in water) and `Al₂O₃` is amphoteric.",
      };
    }

    if (tier === 2) {
      const rxn = rng.pick(OXIDE_RXNS);
      const nOx = clean(rng.int(2, 40) * 0.05); // 0.10 to 2.00 mol -> 39 values × 10 rxns = 390 prompts!
      const ans = roundTo(nOx * rxn.ratio, 2);
      const prompt =
        rxn.ask === "product"
          ? `When \`${num(nOx)} mol\` of \`${rxn.oxide}\` reacts completely with excess \`${rxn.reagent}\`, how many **moles of \`${rxn.product}\`** are formed?`
          : `What is the minimum number of **moles of \`${rxn.reagent}\`** required to react completely with \`${num(nOx)} mol\` of \`${rxn.oxide}\`?`;
      return {
        prompt,
        answer: { type: "number", value: ans, tolerance: 0.02, display: `${num(ans)} mol` },
        solution: [
          `Balanced Period 3 oxide equation: \`${rxn.eq}\`.`,
          `Stoichiometric ratio is \`1 : ${rxn.ratio}\`, so moles = \`${num(nOx)} × ${rxn.ratio} = ${num(ans)} mol\`.`,
        ],
        hint: `First write the balanced equation for \`${rxn.oxide}\` reacting with \`${rxn.reagent}\`.`,
        traps: [
          {
            spec: { type: "number", value: nOx, tolerance: 0.01 },
            feedback: `Check the stoichiometric ratio in \`${rxn.eq}\` — it is \`1 : ${rxn.ratio}\`, not \`1 : 1\`.`,
          },
        ],
      };
    }

    // Tier 3: Concentration / Volume neutralization of Period 3 oxides
    if (rng.bool(0.4)) {
      // Dissolve n mol Na2O in V dm3 -> [OH-] in mol dm-3
      const nNa2O = clean(rng.int(2, 30) * 0.01); // 0.02 to 0.30 mol
      const vol = rng.pick([0.2, 0.25, 0.4, 0.5, 0.8, 1.0]);
      const conc = roundTo((2 * nNa2O) / vol, 3);
      return {
        prompt: `\`${num(nNa2O)} mol\` of solid \`Na₂O\` is dissolved completely in water to make \`${num(vol)} dm³\` of solution. Calculate the molar concentration of \`OH⁻(aq)\` in \`mol dm⁻³\` (to 3 s.f.).`,
        answer: { type: "number", value: conc, tolerance: roundTo(Math.max(0.005, conc * 0.015), 4), display: `${num(conc)} mol dm⁻³` },
        solution: [
          `Balanced equation: \`Na₂O(s) + H₂O(l) → 2NaOH(aq)\`.`,
          `Moles of \`OH⁻ = 2 × ${num(nNa2O)} = ${num(clean(2 * nNa2O))} mol\`.`,
          `\`[OH⁻] = ${num(clean(2 * nNa2O))} / ${num(vol)} = ${num(conc)} mol dm⁻³\`.`,
        ],
        hint: "Remember `1 mol Na₂O` produces `2 mol OH⁻(aq)` in water!",
        traps: [
          {
            spec: { type: "number", value: roundTo(nNa2O / vol, 3), tolerance: 0.004 },
            feedback: "Don't forget the factor of `2`: `Na₂O + H₂O → 2NaOH` produces TWO moles of `OH⁻` per mole of `Na₂O`.",
          },
        ],
      };
    }

    // Volume (cm³) of HCl or NaOH needed to react with n mol of Period 3 oxide
    const VOL_RXNS = [
      { oxide: "MgO", reagent: "HCl", ratio: 2, eq: "MgO + 2HCl → MgCl₂ + H₂O" },
      { oxide: "Na₂O", reagent: "HCl", ratio: 2, eq: "Na₂O + 2HCl → 2NaCl + H₂O" },
      { oxide: "Al₂O₃", reagent: "HCl", ratio: 6, eq: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O" },
      { oxide: "Al₂O₃", reagent: "NaOH", ratio: 2, eq: "Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄" },
      { oxide: "SiO₂", reagent: "NaOH", ratio: 2, eq: "SiO₂ + 2NaOH → Na₂SiO₃ + H₂O" },
      { oxide: "SO₃", reagent: "NaOH", ratio: 2, eq: "SO₃ + 2NaOH → Na₂SO₄ + H₂O" },
      { oxide: "SO₂", reagent: "NaOH", ratio: 2, eq: "SO₂ + 2NaOH → Na₂SO₃ + H₂O" },
    ];
    const r = rng.pick(VOL_RXNS);
    const nOx = clean(rng.int(1, 15) * 0.01); // 0.01 to 0.15 mol
    const cReag = rng.pick([0.5, 1.0, 1.5, 2.0, 2.5]);
    const volCm3 = roundTo(((nOx * r.ratio) / cReag) * 1000, 1);
    const volDm3 = roundTo((nOx * r.ratio) / cReag, 4);
    return {
      prompt: `Calculate the minimum volume (in \`cm³\`) of \`${num(cReag)} mol dm⁻³\` \`${r.reagent}(aq)\` required to react completely with \`${num(nOx)} mol\` of \`${r.oxide}\`.`,
      answer: { type: "number", value: volCm3, tolerance: roundTo(Math.max(0.5, volCm3 * 0.01), 2), display: `${num(volCm3)} cm³` },
      solution: [
        `Balanced equation: \`${r.eq}\` (ratio \`1 : ${r.ratio}\`).`,
        `\`n(${r.reagent}) = ${r.ratio} × ${num(nOx)} = ${num(clean(r.ratio * nOx))} mol\`.`,
        `\`V = n / c = ${num(clean(r.ratio * nOx))} / ${num(cReag)} = ${num(volDm3)} dm³ = ${num(volCm3)} cm³\`.`,
      ],
      hint: `Multiply moles of \`${r.oxide}\` by the stoichiometric ratio, divide by \`${num(cReag)} mol dm⁻³\`, and multiply by \`1000\` for \`cm³\`.`,
      traps: [
        {
          spec: { type: "number", value: volDm3, tolerance: 0.002 },
          feedback: "Convert from `dm³` to `cm³` by multiplying by `1000`!",
        },
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 3: Transition-Metal Complex Ions (HL, level 2)
// ---------------------------------------------------------------------------
interface ComplexSpec {
  formula: string;
  metal: string;
  z: number;
  os: number;
  cn: number;
  dCount: number;
  charge: number;
  ligandsDesc: string;
}

const COMPLEXES: ComplexSpec[] = [
  { formula: "[Ti(H₂O)₆]³⁺", metal: "Ti", z: 22, os: 3, cn: 6, dCount: 1, charge: 3, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[V(H₂O)₆]³⁺", metal: "V", z: 23, os: 3, cn: 6, dCount: 2, charge: 3, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[V(H₂O)₆]²⁺", metal: "V", z: 23, os: 2, cn: 6, dCount: 3, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Cr(H₂O)₆]³⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 3, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Cr(NH₃)₆]³⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 3, ligandsDesc: "6 neutral NH₃ (monodentate)" },
  { formula: "[Cr(H₂O)₄Cl₂]⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 1, ligandsDesc: "4 neutral H₂O + 2 Cl⁻ (−1)" },
  { formula: "[Cr(H₂O)₅Cl]²⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 2, ligandsDesc: "5 neutral H₂O + 1 Cl⁻ (−1)" },
  { formula: "[Cr(en)₃]³⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 3, ligandsDesc: "3 neutral bidentate en" },
  { formula: "[Cr(en)₂Cl₂]⁺", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: 1, ligandsDesc: "2 neutral bidentate en + 2 Cl⁻ (−1)" },
  { formula: "[Cr(C₂O₄)₃]³⁻", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: -3, ligandsDesc: "3 bidentate C₂O₄²⁻ (−2)" },
  { formula: "[Cr(C₂O₄)₂(H₂O)₂]⁻", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: -1, ligandsDesc: "2 bidentate C₂O₄²⁻ (−2) + 2 H₂O (0)" },
  { formula: "[Cr(CN)₆]³⁻", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: -3, ligandsDesc: "6 monodentate CN⁻ (−1)" },
  { formula: "[Cr(OH)₆]³⁻", metal: "Cr", z: 24, os: 3, cn: 6, dCount: 3, charge: -3, ligandsDesc: "6 monodentate OH⁻ (−1)" },
  { formula: "[Mn(H₂O)₆]²⁺", metal: "Mn", z: 25, os: 2, cn: 6, dCount: 5, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Mn(CN)₆]⁴⁻", metal: "Mn", z: 25, os: 2, cn: 6, dCount: 5, charge: -4, ligandsDesc: "6 monodentate CN⁻ (−1)" },
  { formula: "[Mn(CN)₆]³⁻", metal: "Mn", z: 25, os: 3, cn: 6, dCount: 4, charge: -3, ligandsDesc: "6 monodentate CN⁻ (−1)" },
  { formula: "[MnCl₄]²⁻", metal: "Mn", z: 25, os: 2, cn: 4, dCount: 5, charge: -2, ligandsDesc: "4 monodentate Cl⁻ (−1)" },
  { formula: "[Fe(H₂O)₆]²⁺", metal: "Fe", z: 26, os: 2, cn: 6, dCount: 6, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Fe(H₂O)₆]³⁺", metal: "Fe", z: 26, os: 3, cn: 6, dCount: 5, charge: 3, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Fe(H₂O)₅(SCN)]²⁺", metal: "Fe", z: 26, os: 3, cn: 6, dCount: 5, charge: 2, ligandsDesc: "5 H₂O (0) + 1 SCN⁻ (−1)" },
  { formula: "[Fe(CN)₆]⁴⁻", metal: "Fe", z: 26, os: 2, cn: 6, dCount: 6, charge: -4, ligandsDesc: "6 monodentate CN⁻ (−1)" },
  { formula: "[Fe(CN)₆]³⁻", metal: "Fe", z: 26, os: 3, cn: 6, dCount: 5, charge: -3, ligandsDesc: "6 monodentate CN⁻ (−1)" },
  { formula: "[Fe(C₂O₄)₃]³⁻", metal: "Fe", z: 26, os: 3, cn: 6, dCount: 5, charge: -3, ligandsDesc: "3 bidentate C₂O₄²⁻ (−2)" },
  { formula: "[Fe(EDTA)]⁻", metal: "Fe", z: 26, os: 3, cn: 6, dCount: 5, charge: -1, ligandsDesc: "1 hexadentate EDTA⁴⁻ (−4)" },
  { formula: "[FeCl₄]⁻", metal: "Fe", z: 26, os: 3, cn: 4, dCount: 5, charge: -1, ligandsDesc: "4 monodentate Cl⁻ (−1)" },
  { formula: "[Co(H₂O)₆]²⁺", metal: "Co", z: 27, os: 2, cn: 6, dCount: 7, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Co(NH₃)₆]³⁺", metal: "Co", z: 27, os: 3, cn: 6, dCount: 6, charge: 3, ligandsDesc: "6 neutral NH₃ (monodentate)" },
  { formula: "[Co(NH₃)₅Cl]²⁺", metal: "Co", z: 27, os: 3, cn: 6, dCount: 6, charge: 2, ligandsDesc: "5 NH₃ (0) + 1 Cl⁻ (−1)" },
  { formula: "[Co(NH₃)₄Cl₂]⁺", metal: "Co", z: 27, os: 3, cn: 6, dCount: 6, charge: 1, ligandsDesc: "4 NH₃ (0) + 2 Cl⁻ (−1)" },
  { formula: "[Co(en)₃]³⁺", metal: "Co", z: 27, os: 3, cn: 6, dCount: 6, charge: 3, ligandsDesc: "3 neutral bidentate en" },
  { formula: "[Co(en)₂(H₂O)Cl]²⁺", metal: "Co", z: 27, os: 3, cn: 6, dCount: 6, charge: 2, ligandsDesc: "2 bidentate en (0) + 1 H₂O (0) + 1 Cl⁻ (−1)" },
  { formula: "[CoCl₄]²⁻", metal: "Co", z: 27, os: 2, cn: 4, dCount: 7, charge: -2, ligandsDesc: "4 monodentate Cl⁻ (−1)" },
  { formula: "[Ni(H₂O)₆]²⁺", metal: "Ni", z: 28, os: 2, cn: 6, dCount: 8, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Ni(NH₃)₆]²⁺", metal: "Ni", z: 28, os: 2, cn: 6, dCount: 8, charge: 2, ligandsDesc: "6 neutral NH₃ (monodentate)" },
  { formula: "[Ni(en)₃]²⁺", metal: "Ni", z: 28, os: 2, cn: 6, dCount: 8, charge: 2, ligandsDesc: "3 neutral bidentate en" },
  { formula: "[Ni(CN)₄]²⁻", metal: "Ni", z: 28, os: 2, cn: 4, dCount: 8, charge: -2, ligandsDesc: "4 monodentate CN⁻ (−1)" },
  { formula: "[Ni(CO)₄]", metal: "Ni", z: 28, os: 0, cn: 4, dCount: 8, charge: 0, ligandsDesc: "4 neutral CO (monodentate)" },
  { formula: "[Cu(H₂O)₆]²⁺", metal: "Cu", z: 29, os: 2, cn: 6, dCount: 9, charge: 2, ligandsDesc: "6 neutral H₂O (monodentate)" },
  { formula: "[Cu(NH₃)₄(H₂O)₂]²⁺", metal: "Cu", z: 29, os: 2, cn: 6, dCount: 9, charge: 2, ligandsDesc: "4 NH₃ (0) + 2 H₂O (0)" },
  { formula: "[CuCl₄]²⁻", metal: "Cu", z: 29, os: 2, cn: 4, dCount: 9, charge: -2, ligandsDesc: "4 monodentate Cl⁻ (−1)" },
  { formula: "[Cu(EDTA)]²⁻", metal: "Cu", z: 29, os: 2, cn: 6, dCount: 9, charge: -2, ligandsDesc: "1 hexadentate EDTA⁴⁻ (−4)" },
  { formula: "[Zn(NH₃)₄]²⁺", metal: "Zn", z: 30, os: 2, cn: 4, dCount: 10, charge: 2, ligandsDesc: "4 neutral NH₃ (monodentate)" },
  { formula: "[Zn(OH)₄]²⁻", metal: "Zn", z: 30, os: 2, cn: 4, dCount: 10, charge: -2, ligandsDesc: "4 monodentate OH⁻ (−1)" },
];

// Exclude [Ni(CO)4] from Tier 3 d-count because neutral Ni(0) is 3d8 4s2 (ambiguous in complex)
const COMPLEXES_IONIC = COMPLEXES.filter((c) => c.os > 0);

const complexIonsDrill: Drill = {
  id: "s3-1-periodicity.complex-ions-hl",
  topicId: "s3-1-periodicity",
  title: "Complex Ion Charge, CN & 3d Count [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "transition-elements-complexes-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const c = rng.pick(COMPLEXES_IONIC);
      if (rng.bool()) {
        // Ask for overall charge q given metal OS and ligands
        const stripped = c.formula.replace(/\](\d*[⁺⁻])?$/, "]^q");
        return {
          prompt: `A complex ion has formula \`${stripped}\` where **${c.metal}** is in the \`${fmtSigned(c.os)}\` oxidation state (${c.ligandsDesc}). Deduce the overall charge \`q\` of the complex ion.`,
          answer: { type: "number", value: c.charge, display: fmtSigned(c.charge) },
          solution: [
            `Use charge balance: \`q = OS(${c.metal}) + Σ(ligand charges)\`.`,
            `With ${c.ligandsDesc} and \`${c.metal} = ${fmtSigned(c.os)}\`, \`q = ${fmtSigned(c.charge)}\` → \`${c.formula}\`.`,
          ],
          hint: "Neutral ligands (`H₂O, NH₃, CO, en`) add `0`; `Cl⁻, CN⁻, OH⁻, SCN⁻` add `−1`; `C₂O₄²⁻` adds `−2`; `EDTA⁴⁻` adds `−4`.",
        };
      }
      // Ask for coordination number CN
      return {
        prompt: `State the **coordination number** of **${c.metal}** in the complex ion \`${c.formula}\` (${c.ligandsDesc}).`,
        answer: { type: "number", value: c.cn, display: String(c.cn) },
        solution: [
          `Coordination number equals the total number of coordinate bonds to the central metal ion.`,
          `Counting donor atoms from ${c.ligandsDesc} gives \`CN = ${c.cn}\`.`,
        ],
        hint: "Multiply each ligand count by its denticity (`en = 2`, `C₂O₄²⁻ = 2`, `EDTA⁴⁻ = 6`).",
      };
    }

    if (tier === 2) {
      const c = rng.pick(COMPLEXES);
      const traps: Trap[] = [];
      if (c.charge !== c.os) {
        traps.push({
          spec: { type: "number", value: c.charge },
          feedback: `\`${fmtSigned(c.charge)}\` is the overall charge of the complex ion — account for the ligand charges (${c.ligandsDesc})!`,
        });
      }
      return {
        prompt: `Deduce the oxidation state of **${c.metal}** in the complex \`${c.formula}\`. Enter the integer value.`,
        answer: { type: "number", value: c.os, display: fmtSigned(c.os) },
        solution: [
          `Ligands present: ${c.ligandsDesc}.`,
          `Set \`OS(${c.metal}) + Σ(ligand charges) = ${fmtSigned(c.charge)}\` → \`OS(${c.metal}) = ${fmtSigned(c.os)}\`.`,
        ],
        hint: `Remember the charge on each ligand (${c.ligandsDesc}) and set the total equal to \`${fmtSigned(c.charge)}\`.`,
        traps,
      };
    }

    // Tier 3: Deduce the 3d electron count of the metal ion inside a complex!
    const c = rng.pick(COMPLEXES_IONIC);
    const wrongNo4s = c.z - 18 - c.os - 2; // if someone forgot 4s leaves first? Wait: total valence is z-18, cation has (z-18)-os total 3d electrons!
    const traps: Trap[] = [];
    if (wrongNo4s >= 0 && wrongNo4s !== c.dCount) {
      traps.push({
        spec: { type: "number", value: wrongNo4s },
        feedback: `Remember that \`4s\` electrons are ALWAYS lost before \`3d\` electrons! Neutral ${c.metal} has \`${c.z - 18}\` outer (\`3d + 4s\`) electrons; removing \`${c.os}\` leaves \`${c.dCount}\` in \`3d\`.`,
      });
    }
    return {
      prompt: `For the complex ion \`${c.formula}\` (atomic number of **${c.metal}**, \`Z = ${c.z}\`), deduce how many **\`3d\` electrons** are present on the central ${c.metal} cation.`,
      answer: { type: "number", value: c.dCount, display: `${c.dCount}` },
      solution: [
        `First find the oxidation state of ${c.metal} (${c.ligandsDesc}): \`${c.metal} = ${fmtSigned(c.os)}\`.`,
        `Neutral ${c.metal} (\`Z = ${c.z}\`) has \`${c.z} − 18 = ${c.z - 18}\` valence (\`3d + 4s\`) electrons beyond \`[Ar]\`.`,
        `Removing \`${c.os}\` electrons (starting with \`4s\`) leaves \`${c.z - 18} − ${c.os} = ${c.dCount}\` electrons in \`3d\` (\`[Ar] 3d${c.dCount}\`).`,
      ],
      hint: `Step 1: find the oxidation state of ${c.metal}. Step 2: compute \`(Z − 18) − OS\` because all \`4s\` electrons are lost before \`3d\`!`,
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 4: Crystal Field Splitting ΔE & Complementary Colour (HL, level 3)
// ---------------------------------------------------------------------------
interface Band {
  absorbed: string;
  observed: string;
  accept: string[];
  lambdas: number[];
}

const WHEEL_BANDS: Band[] = [
  { absorbed: "violet", observed: "yellow", accept: ["yellow"], lambdas: [404, 406, 408, 410, 412, 414, 416, 418, 420, 422] },
  { absorbed: "blue", observed: "orange", accept: ["orange"], lambdas: [430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485] },
  { absorbed: "green", observed: "red", accept: ["red"], lambdas: [500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565] },
  { absorbed: "yellow", observed: "violet", accept: ["violet", "purple"], lambdas: [576, 577, 578, 579, 580, 581, 582, 583, 584] },
  { absorbed: "orange", observed: "blue", accept: ["blue"], lambdas: [590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640] },
  { absorbed: "red", observed: "green", accept: ["green"], lambdas: [652, 656, 660, 664, 668, 672, 676, 680, 684, 688, 692, 696] },
];

function colourForLambda(nm: number): { absorbed: string; observed: string } {
  if (nm < 424) return { absorbed: "violet", observed: "yellow" };
  if (nm < 491) return { absorbed: "blue", observed: "orange" };
  if (nm < 575) return { absorbed: "green", observed: "red" };
  if (nm < 585) return { absorbed: "yellow", observed: "violet" };
  if (nm < 647) return { absorbed: "orange", observed: "blue" };
  return { absorbed: "red", observed: "green" };
}

const dSplittingColourDrill: Drill = {
  id: "s3-1-periodicity.d-splitting-colour-hl",
  topicId: "s3-1-periodicity",
  title: "Crystal Field ΔE & Complementary Colour [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "d-orbital-splitting-colour-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const band = rng.pick(WHEEL_BANDS);
      const lam = rng.pick(band.lambdas);
      return {
        prompt: `An octahedral transition-metal complex shows its maximum visible absorption at \`λ = ${lam} nm\`. Using the IB colour wheel, state the **observed** (transmitted) colour of the solution.`,
        answer: { type: "text", accept: band.accept, display: band.observed },
        solution: [
          `On the IB 6-sector colour wheel, \`${lam} nm\` lies in the **${band.absorbed}** region.`,
          `The solution transmits the complementary colour directly opposite ${band.absorbed}: **${band.observed}**.`,
        ],
        hint: "Find which colour band contains `λ`, then look directly across the wheel to its complementary colour.",
        traps: [
          {
            spec: { type: "text", accept: [band.absorbed] },
            feedback: `${band.absorbed[0].toUpperCase() + band.absorbed.slice(1)} is the ABSORBED wavelength — the observer sees the opposite complementary colour (**${band.observed}**)!`,
          },
        ],
      };
    }

    if (tier === 2) {
      const lam = rng.int(81, 139) * 5; // 405 to 695 nm in 5-nm steps (59 values)
      const exactKJ = (N_AVOGADRO * H_PLANCK * C_LIGHT) / (1000 * lam * 1e-9);
      const ans = sig3(exactKJ);
      const jMol = Math.round(exactKJ * 1000);
      const col = colourForLambda(lam);
      return {
        prompt: `A transition-metal complex absorbs light maximally at \`λ = ${lam} nm\`. Using \`h = 6.63 × 10⁻³⁴ J s\`, \`c = 3.00 × 10⁸ m s⁻¹\`, and \`N_A = 6.02 × 10²³ mol⁻¹\`, calculate the molar crystal field splitting energy \`ΔE\` in \`kJ mol⁻¹\` (to 3 s.f.).`,
        answer: { type: "number", value: ans, tolerance: 1.5, display: `${num(ans)} kJ mol⁻¹` },
        solution: [
          `Convert wavelength to metres: \`λ = ${lam} × 10⁻⁹ m\`.`,
          `Compute molar splitting energy: {{ΔE = (6.02 * 10^23 * 6.63 * 10^(-34) * 3.00 * 10^8) / (1000 * ${lam} * 10^(-9)) = ${num(ans)}}} \`kJ mol⁻¹\`.`,
          `(Check: \`${lam} nm\` is ${col.absorbed} absorbed → solution appears **${col.observed}**.)`,
        ],
        hint: "Use `ΔE = (N_A × h × c) / (1000 × λ)` with `λ` in metres (`nm × 10⁻⁹`).",
        traps: [
          {
            spec: { type: "number", value: jMol, tolerance: 2000 },
            feedback: "Divide `J mol⁻¹` by `1000` to obtain `kJ mol⁻¹`!",
          },
        ],
      };
    }

    // Tier 3: Given ΔE in kJ mol⁻¹ -> calculate absorbed λ in nm
    const dE = rng.int(87, 147) * 2; // 174 to 294 kJ mol⁻¹ in 2 kJ steps (61 values)
    const exactNm = ((N_AVOGADRO * H_PLANCK * C_LIGHT) / (dE * 1000)) * 1e9;
    const ans = sig3(exactNm);
    const col = colourForLambda(ans);
    return {
      prompt: `An octahedral transition-metal complex has a molar crystal field splitting energy \`ΔE = ${dE} kJ mol⁻¹\`. Using \`h = 6.63 × 10⁻³⁴ J s\`, \`c = 3.00 × 10⁸ m s⁻¹\`, and \`N_A = 6.02 × 10²³ mol⁻¹\`, calculate the absorbed wavelength \`λ\` in \`nm\` (to 3 s.f.).`,
      answer: { type: "number", value: ans, tolerance: 3, display: `${num(ans)} nm` },
      solution: [
        `Convert \`ΔE = ${dE} kJ mol⁻¹ = ${dE} × 10³ J mol⁻¹\`.`,
        `Rearrange \`ΔE = N_A h c / λ\`: {{λ = (6.02 * 10^23 * 6.63 * 10^(-34) * 3.00 * 10^8) / (${dE} * 10^3) = ${num(roundTo(exactNm / 100, 2))} * 10^(-7)}} \`m = ${num(ans)} nm\`.`,
        `(${num(ans)} nm is **${col.absorbed}** light absorbed → complementary observed colour is **${col.observed}**.)`,
      ],
      hint: "Convert `ΔE` to `J mol⁻¹` (`× 1000`), solve `λ = N_A h c / ΔE` in metres, then multiply by `10⁹` for `nm`.",
      traps: [
        {
          spec: { type: "number", value: roundTo(ans / 1000, 3), tolerance: 0.02 },
          feedback: "Did you forget to convert `kJ mol⁻¹` into `J mol⁻¹` (`× 1000`)?",
        },
      ],
    };
  },
};

export const drills: Drill[] = [
  oxidationStatesDrill,
  periodicTrendsOxidesDrill,
  complexIonsDrill,
  dSplittingColourDrill,
];
