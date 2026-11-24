import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, gcd, roundTo } from "./helpers.ts";

// =============================================================================
// SHARED DATA TABLES (IB Chemistry FA2025 Data Booklet exact values)
// =============================================================================

interface IonSpec {
  name: string;
  symbol: string;
  ascii: string;
  charge: number;
  polyatomic?: boolean;
}

const MONATOMIC_CATIONS: readonly IonSpec[] = [
  { name: "lithium", symbol: "Li⁺", ascii: "Li", charge: 1 },
  { name: "sodium", symbol: "Na⁺", ascii: "Na", charge: 1 },
  { name: "potassium", symbol: "K⁺", ascii: "K", charge: 1 },
  { name: "silver(I)", symbol: "Ag⁺", ascii: "Ag", charge: 1 },
  { name: "magnesium", symbol: "Mg²⁺", ascii: "Mg", charge: 2 },
  { name: "calcium", symbol: "Ca²⁺", ascii: "Ca", charge: 2 },
  { name: "barium", symbol: "Ba²⁺", ascii: "Ba", charge: 2 },
  { name: "zinc", symbol: "Zn²⁺", ascii: "Zn", charge: 2 },
  { name: "iron(II)", symbol: "Fe²⁺", ascii: "Fe", charge: 2 },
  { name: "aluminium", symbol: "Al³⁺", ascii: "Al", charge: 3 },
];

const POLY_CATIONS: readonly IonSpec[] = [
  ...MONATOMIC_CATIONS,
  { name: "iron(III)", symbol: "Fe³⁺", ascii: "Fe", charge: 3 },
  { name: "copper(II)", symbol: "Cu²⁺", ascii: "Cu", charge: 2 },
  { name: "ammonium", symbol: "NH₄⁺", ascii: "NH4", charge: 1, polyatomic: true },
];

const MONATOMIC_ANIONS: readonly IonSpec[] = [
  { name: "fluoride", symbol: "F⁻", ascii: "F", charge: 1 },
  { name: "chloride", symbol: "Cl⁻", ascii: "Cl", charge: 1 },
  { name: "bromide", symbol: "Br⁻", ascii: "Br", charge: 1 },
  { name: "iodide", symbol: "I⁻", ascii: "I", charge: 1 },
  { name: "oxide", symbol: "O²⁻", ascii: "O", charge: 2 },
  { name: "sulfide", symbol: "S²⁻", ascii: "S", charge: 2 },
  { name: "nitride", symbol: "N³⁻", ascii: "N", charge: 3 },
];

const POLYATOMIC_ANIONS: readonly IonSpec[] = [
  { name: "hydroxide", symbol: "OH⁻", ascii: "OH", charge: 1, polyatomic: true },
  { name: "nitrate", symbol: "NO₃⁻", ascii: "NO3", charge: 1, polyatomic: true },
  { name: "hydrogencarbonate", symbol: "HCO₃⁻", ascii: "HCO3", charge: 1, polyatomic: true },
  { name: "carbonate", symbol: "CO₃²⁻", ascii: "CO3", charge: 2, polyatomic: true },
  { name: "sulfate", symbol: "SO₄²⁻", ascii: "SO4", charge: 2, polyatomic: true },
  { name: "phosphate", symbol: "PO₄³⁻", ascii: "PO4", charge: 3, polyatomic: true },
];

const SUB_DIGITS: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
};

function toSub(s: string): string {
  return s.replace(/[0-9]/g, (d) => SUB_DIGITS[d] ?? d);
}

function buildSaltFormula(cat: IonSpec, an: IonSpec): { ascii: string; pretty: string; cCount: number; aCount: number } {
  const g = gcd(cat.charge, an.charge);
  const cCount = an.charge / g;
  const aCount = cat.charge / g;
  const cPart = cCount === 1 ? cat.ascii : cat.polyatomic ? `(${cat.ascii})${cCount}` : `${cat.ascii}${cCount}`;
  const aPart = aCount === 1 ? an.ascii : an.polyatomic ? `(${an.ascii})${aCount}` : `${an.ascii}${aCount}`;
  const ascii = `${cPart}${aPart}`;
  return { ascii, pretty: toSub(ascii), cCount, aCount };
}

// IB Data Booklet FA2025 Pauling electronegativities (Section 9)
interface ElemChi {
  symbol: string;
  name: string;
  chi: number;
}

const ELEMENTS_CHI: readonly ElemChi[] = [
  { symbol: "Cs", name: "caesium", chi: 0.8 },
  { symbol: "K", name: "potassium", chi: 0.8 },
  { symbol: "Na", name: "sodium", chi: 0.9 },
  { symbol: "Ba", name: "barium", chi: 0.9 },
  { symbol: "Li", name: "lithium", chi: 1.0 },
  { symbol: "Ca", name: "calcium", chi: 1.0 },
  { symbol: "Mg", name: "magnesium", chi: 1.3 },
  { symbol: "Al", name: "aluminium", chi: 1.6 },
  { symbol: "Be", name: "beryllium", chi: 1.6 },
  { symbol: "Zn", name: "zinc", chi: 1.7 },
  { symbol: "Fe", name: "iron", chi: 1.8 },
  { symbol: "Si", name: "silicon", chi: 1.9 },
  { symbol: "Cu", name: "copper", chi: 1.9 },
  { symbol: "B", name: "boron", chi: 2.0 },
  { symbol: "H", name: "hydrogen", chi: 2.2 },
  { symbol: "P", name: "phosphorus", chi: 2.2 },
  { symbol: "C", name: "carbon", chi: 2.6 },
  { symbol: "S", name: "sulfur", chi: 2.6 },
  { symbol: "I", name: "iodine", chi: 2.7 },
  { symbol: "N", name: "nitrogen", chi: 3.0 },
  { symbol: "Br", name: "bromine", chi: 3.0 },
  { symbol: "Cl", name: "chlorine", chi: 3.2 },
  { symbol: "O", name: "oxygen", chi: 3.4 },
  { symbol: "F", name: "fluorine", chi: 4.0 },
];

interface TriangleSpecies {
  label: string;
  elemA: string;
  chiA: number;
  elemB: string;
  chiB: number;
  region: "ionic" | "metallic" | "polar covalent" | "non-polar covalent";
}

// 48 unambiguous substances well inside their IB Section 17 bonding-triangle regions
const TRIANGLE_SPECIES: readonly TriangleSpecies[] = [
  // Ionic (Δχ >= 2.1)
  { label: "CsF", elemA: "Cs", chiA: 0.8, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "KF", elemA: "K", chiA: 0.8, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "NaF", elemA: "Na", chiA: 0.9, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "LiF", elemA: "Li", chiA: 1.0, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "CaF₂", elemA: "Ca", chiA: 1.0, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "MgF₂", elemA: "Mg", chiA: 1.3, elemB: "F", chiB: 4.0, region: "ionic" },
  { label: "CsCl", elemA: "Cs", chiA: 0.8, elemB: "Cl", chiB: 3.2, region: "ionic" },
  { label: "KCl", elemA: "K", chiA: 0.8, elemB: "Cl", chiB: 3.2, region: "ionic" },
  { label: "NaCl", elemA: "Na", chiA: 0.9, elemB: "Cl", chiB: 3.2, region: "ionic" },
  { label: "BaCl₂", elemA: "Ba", chiA: 0.9, elemB: "Cl", chiB: 3.2, region: "ionic" },
  { label: "CaO", elemA: "Ca", chiA: 1.0, elemB: "O", chiB: 3.4, region: "ionic" },
  { label: "MgO", elemA: "Mg", chiA: 1.3, elemB: "O", chiB: 3.4, region: "ionic" },
  { label: "Na₂O", elemA: "Na", chiA: 0.9, elemB: "O", chiB: 3.4, region: "ionic" },
  { label: "KBr", elemA: "K", chiA: 0.8, elemB: "Br", chiB: 3.0, region: "ionic" },
  // Metallic (low χ_avg <= 1.95, low Δχ <= 0.5)
  { label: "CuZn (brass)", elemA: "Cu", chiA: 1.9, elemB: "Zn", chiB: 1.7, region: "metallic" },
  { label: "CuSn (bronze)", elemA: "Cu", chiA: 1.9, elemB: "Sn", chiB: 2.0, region: "metallic" },
  { label: "FeCr (chromium steel)", elemA: "Fe", chiA: 1.8, elemB: "Cr", chiB: 1.7, region: "metallic" },
  { label: "NaK alloy", elemA: "Na", chiA: 0.9, elemB: "K", chiB: 0.8, region: "metallic" },
  { label: "MgAl (magnalium)", elemA: "Mg", chiA: 1.3, elemB: "Al", chiB: 1.6, region: "metallic" },
  { label: "AlZn alloy", elemA: "Al", chiA: 1.6, elemB: "Zn", chiB: 1.7, region: "metallic" },
  { label: "LiNa alloy", elemA: "Li", chiA: 1.0, elemB: "Na", chiB: 0.9, region: "metallic" },
  { label: "CaMg alloy", elemA: "Ca", chiA: 1.0, elemB: "Mg", chiB: 1.3, region: "metallic" },
  { label: "FeNi (invar)", elemA: "Fe", chiA: 1.8, elemB: "Ni", chiB: 1.9, region: "metallic" },
  { label: "CuNi (cupronickel)", elemA: "Cu", chiA: 1.9, elemB: "Ni", chiB: 1.9, region: "metallic" },
  // Polar covalent (χ_avg >= 2.3, 0.7 <= Δχ <= 1.6)
  { label: "HCl", elemA: "H", chiA: 2.2, elemB: "Cl", chiB: 3.2, region: "polar covalent" },
  { label: "HBr", elemA: "H", chiA: 2.2, elemB: "Br", chiB: 3.0, region: "polar covalent" },
  { label: "H₂O", elemA: "H", chiA: 2.2, elemB: "O", chiB: 3.4, region: "polar covalent" },
  { label: "NH₃", elemA: "N", chiA: 3.0, elemB: "H", chiB: 2.2, region: "polar covalent" },
  { label: "SiO₂", elemA: "Si", chiA: 1.9, elemB: "O", chiB: 3.4, region: "polar covalent" },
  { label: "AlCl₃", elemA: "Al", chiA: 1.6, elemB: "Cl", chiB: 3.2, region: "polar covalent" },
  { label: "BeCl₂", elemA: "Be", chiA: 1.6, elemB: "Cl", chiB: 3.2, region: "polar covalent" },
  { label: "PCl₃", elemA: "P", chiA: 2.2, elemB: "Cl", chiB: 3.2, region: "polar covalent" },
  { label: "SO₂", elemA: "S", chiA: 2.6, elemB: "O", chiB: 3.4, region: "polar covalent" },
  { label: "CO₂", elemA: "C", chiA: 2.6, elemB: "O", chiB: 3.4, region: "polar covalent" },
  { label: "NF₃", elemA: "N", chiA: 3.0, elemB: "F", chiB: 4.0, region: "polar covalent" },
  { label: "CF₄", elemA: "C", chiA: 2.6, elemB: "F", chiB: 4.0, region: "polar covalent" },
  { label: "SF₆", elemA: "S", chiA: 2.6, elemB: "F", chiB: 4.0, region: "polar covalent" },
  { label: "SiCl₄", elemA: "Si", chiA: 1.9, elemB: "Cl", chiB: 3.2, region: "polar covalent" },
  // Non-polar covalent (χ_avg >= 2.2, Δχ = 0)
  { label: "F₂", elemA: "F", chiA: 4.0, elemB: "F", chiB: 4.0, region: "non-polar covalent" },
  { label: "O₂", elemA: "O", chiA: 3.4, elemB: "O", chiB: 3.4, region: "non-polar covalent" },
  { label: "Cl₂", elemA: "Cl", chiA: 3.2, elemB: "Cl", chiB: 3.2, region: "non-polar covalent" },
  { label: "N₂", elemA: "N", chiA: 3.0, elemB: "N", chiB: 3.0, region: "non-polar covalent" },
  { label: "Br₂", elemA: "Br", chiA: 3.0, elemB: "Br", chiB: 3.0, region: "non-polar covalent" },
  { label: "I₂", elemA: "I", chiA: 2.7, elemB: "I", chiB: 2.7, region: "non-polar covalent" },
  { label: "S₈", elemA: "S", chiA: 2.6, elemB: "S", chiB: 2.6, region: "non-polar covalent" },
  { label: "C (diamond)", elemA: "C", chiA: 2.6, elemB: "C", chiB: 2.6, region: "non-polar covalent" },
  { label: "P₄", elemA: "P", chiA: 2.2, elemB: "P", chiB: 2.2, region: "non-polar covalent" },
  { label: "CS₂", elemA: "C", chiA: 2.6, elemB: "S", chiB: 2.6, region: "non-polar covalent" },
];

interface VseprEntry {
  formula: string;
  central: string;
  domains: number;
  bp: number;
  lp: number;
  edg: string;
  shape: string;
  accept: string[];
  canonicalAngle?: number;
}

const VSEPR_SL: readonly VseprEntry[] = [
  // 2 domains (2:0)
  { formula: "CO₂", central: "C", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "CS₂", central: "C", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "HCN", central: "C", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "BeCl₂(g)", central: "Be", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "BeF₂(g)", central: "Be", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "BeH₂(g)", central: "Be", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  { formula: "N₂O (N−N−O)", central: "central N", domains: 2, bp: 2, lp: 0, edg: "linear", shape: "linear", accept: ["linear"], canonicalAngle: 180 },
  // 3 domains (3:0)
  { formula: "BF₃", central: "B", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "BCl₃", central: "B", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "BBr₃", central: "B", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "BH₃", central: "B", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "SO₃", central: "S", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "H₂CO", central: "C", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"] },
  { formula: "COCl₂", central: "C", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"] },
  { formula: "NO₃⁻", central: "N", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  { formula: "CO₃²⁻", central: "C", domains: 3, bp: 3, lp: 0, edg: "trigonal planar", shape: "trigonal planar", accept: ["trigonal planar"], canonicalAngle: 120 },
  // 3 domains (2:1)
  { formula: "SO₂", central: "S", domains: 3, bp: 2, lp: 1, edg: "trigonal planar", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "O₃", central: "central O", domains: 3, bp: 2, lp: 1, edg: "trigonal planar", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "NO₂⁻", central: "N", domains: 3, bp: 2, lp: 1, edg: "trigonal planar", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "SnCl₂(g)", central: "Sn", domains: 3, bp: 2, lp: 1, edg: "trigonal planar", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  // 4 domains (4:0)
  { formula: "CH₄", central: "C", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "CCl₄", central: "C", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "CF₄", central: "C", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "SiH₄", central: "Si", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "SiCl₄", central: "Si", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "NH₄⁺", central: "N", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "SO₄²⁻", central: "S", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "PO₄³⁻", central: "P", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  { formula: "ClO₄⁻", central: "Cl", domains: 4, bp: 4, lp: 0, edg: "tetrahedral", shape: "tetrahedral", accept: ["tetrahedral"], canonicalAngle: 109.5 },
  // 4 domains (3:1)
  { formula: "NH₃", central: "N", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"], canonicalAngle: 107 },
  { formula: "H₃O⁺", central: "O", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"], canonicalAngle: 107 },
  { formula: "PCl₃", central: "P", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"] },
  { formula: "NF₃", central: "N", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"] },
  { formula: "NCl₃", central: "N", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"] },
  { formula: "SO₃²⁻", central: "S", domains: 4, bp: 3, lp: 1, edg: "tetrahedral", shape: "trigonal pyramidal", accept: ["trigonal pyramidal", "pyramidal"] },
  // 4 domains (2:2)
  { formula: "H₂O", central: "O", domains: 4, bp: 2, lp: 2, edg: "tetrahedral", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"], canonicalAngle: 104.5 },
  { formula: "H₂S", central: "S", domains: 4, bp: 2, lp: 2, edg: "tetrahedral", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "OF₂", central: "O", domains: 4, bp: 2, lp: 2, edg: "tetrahedral", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "SCl₂", central: "S", domains: 4, bp: 2, lp: 2, edg: "tetrahedral", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
  { formula: "NH₂⁻", central: "N", domains: 4, bp: 2, lp: 2, edg: "tetrahedral", shape: "bent", accept: ["bent", "v-shaped", "v shaped", "angular"] },
];

const VSEPR_HL: readonly VseprEntry[] = [
  // 5 domains (5:0)
  { formula: "PCl₅", central: "P", domains: 5, bp: 5, lp: 0, edg: "trigonal bipyramidal", shape: "trigonal bipyramidal", accept: ["trigonal bipyramidal"] },
  { formula: "PF₅", central: "P", domains: 5, bp: 5, lp: 0, edg: "trigonal bipyramidal", shape: "trigonal bipyramidal", accept: ["trigonal bipyramidal"] },
  { formula: "AsF₅", central: "As", domains: 5, bp: 5, lp: 0, edg: "trigonal bipyramidal", shape: "trigonal bipyramidal", accept: ["trigonal bipyramidal"] },
  { formula: "SbCl₅", central: "Sb", domains: 5, bp: 5, lp: 0, edg: "trigonal bipyramidal", shape: "trigonal bipyramidal", accept: ["trigonal bipyramidal"] },
  { formula: "PBr₅(g)", central: "P", domains: 5, bp: 5, lp: 0, edg: "trigonal bipyramidal", shape: "trigonal bipyramidal", accept: ["trigonal bipyramidal"] },
  // 5 domains (4:1)
  { formula: "SF₄", central: "S", domains: 5, bp: 4, lp: 1, edg: "trigonal bipyramidal", shape: "seesaw", accept: ["seesaw", "see-saw", "see saw"] },
  { formula: "SeF₄", central: "Se", domains: 5, bp: 4, lp: 1, edg: "trigonal bipyramidal", shape: "seesaw", accept: ["seesaw", "see-saw", "see saw"] },
  { formula: "TeCl₄", central: "Te", domains: 5, bp: 4, lp: 1, edg: "trigonal bipyramidal", shape: "seesaw", accept: ["seesaw", "see-saw", "see saw"] },
  { formula: "IF₄⁺", central: "I", domains: 5, bp: 4, lp: 1, edg: "trigonal bipyramidal", shape: "seesaw", accept: ["seesaw", "see-saw", "see saw"] },
  { formula: "XeO₂F₂", central: "Xe", domains: 5, bp: 4, lp: 1, edg: "trigonal bipyramidal", shape: "seesaw", accept: ["seesaw", "see-saw", "see saw"] },
  // 5 domains (3:2)
  { formula: "ClF₃", central: "Cl", domains: 5, bp: 3, lp: 2, edg: "trigonal bipyramidal", shape: "T-shaped", accept: ["t-shaped", "t shaped"] },
  { formula: "BrF₃", central: "Br", domains: 5, bp: 3, lp: 2, edg: "trigonal bipyramidal", shape: "T-shaped", accept: ["t-shaped", "t shaped"] },
  { formula: "IF₃", central: "I", domains: 5, bp: 3, lp: 2, edg: "trigonal bipyramidal", shape: "T-shaped", accept: ["t-shaped", "t shaped"] },
  { formula: "ICl₃", central: "I", domains: 5, bp: 3, lp: 2, edg: "trigonal bipyramidal", shape: "T-shaped", accept: ["t-shaped", "t shaped"] },
  // 5 domains (2:3)
  { formula: "XeF₂", central: "Xe", domains: 5, bp: 2, lp: 3, edg: "trigonal bipyramidal", shape: "linear", accept: ["linear"] },
  { formula: "I₃⁻", central: "central I", domains: 5, bp: 2, lp: 3, edg: "trigonal bipyramidal", shape: "linear", accept: ["linear"] },
  { formula: "ICl₂⁻", central: "I", domains: 5, bp: 2, lp: 3, edg: "trigonal bipyramidal", shape: "linear", accept: ["linear"] },
  { formula: "BrCl₂⁻", central: "Br", domains: 5, bp: 2, lp: 3, edg: "trigonal bipyramidal", shape: "linear", accept: ["linear"] },
  { formula: "IBr₂⁻", central: "I", domains: 5, bp: 2, lp: 3, edg: "trigonal bipyramidal", shape: "linear", accept: ["linear"] },
  // 6 domains (6:0)
  { formula: "SF₆", central: "S", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  { formula: "SeF₆", central: "Se", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  { formula: "TeF₆", central: "Te", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  { formula: "PF₆⁻", central: "P", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  { formula: "SiF₆²⁻", central: "Si", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  { formula: "PCl₆⁻", central: "P", domains: 6, bp: 6, lp: 0, edg: "octahedral", shape: "octahedral", accept: ["octahedral"] },
  // 6 domains (5:1)
  { formula: "BrF₅", central: "Br", domains: 6, bp: 5, lp: 1, edg: "octahedral", shape: "square pyramidal", accept: ["square pyramidal"] },
  { formula: "IF₅", central: "I", domains: 6, bp: 5, lp: 1, edg: "octahedral", shape: "square pyramidal", accept: ["square pyramidal"] },
  { formula: "ClF₅", central: "Cl", domains: 6, bp: 5, lp: 1, edg: "octahedral", shape: "square pyramidal", accept: ["square pyramidal"] },
  { formula: "XeOF₄", central: "Xe", domains: 6, bp: 5, lp: 1, edg: "octahedral", shape: "square pyramidal", accept: ["square pyramidal"] },
  // 6 domains (4:2)
  { formula: "XeF₄", central: "Xe", domains: 6, bp: 4, lp: 2, edg: "octahedral", shape: "square planar", accept: ["square planar"] },
  { formula: "ICl₄⁻", central: "I", domains: 6, bp: 4, lp: 2, edg: "octahedral", shape: "square planar", accept: ["square planar"] },
  { formula: "BrF₄⁻", central: "Br", domains: 6, bp: 4, lp: 2, edg: "octahedral", shape: "square planar", accept: ["square planar"] },
  { formula: "IF₄⁻", central: "I", domains: 6, bp: 4, lp: 2, edg: "octahedral", shape: "square planar", accept: ["square planar"] },
];

interface FcCase {
  atom: string;
  v: number;
  bonds: number;
  lp: number;
  context: string;
}

const FC_CASES: readonly FcCase[] = [
  { atom: "C", v: 4, bonds: 4, lp: 0, context: "methane (CH₄)" },
  { atom: "C", v: 4, bonds: 3, lp: 1, context: "carbon monoxide (:C≡O:)" },
  { atom: "C", v: 4, bonds: 3, lp: 0, context: "a carbocation (CH₃⁺)" },
  { atom: "C", v: 4, bonds: 2, lp: 1, context: "a singlet carbene (:CH₂)" },
  { atom: "C", v: 4, bonds: 2, lp: 2, context: "an unfavourable resonance form of CO" },
  { atom: "N", v: 5, bonds: 3, lp: 1, context: "ammonia (NH₃)" },
  { atom: "N", v: 5, bonds: 4, lp: 0, context: "ammonium (NH₄⁺) or nitrate (NO₃⁻)" },
  { atom: "N", v: 5, bonds: 2, lp: 2, context: "amide ion (NH₂⁻) or N=N=O terminal N" },
  { atom: "N", v: 5, bonds: 1, lp: 3, context: "minor resonance form [S≡C−N]⁻" },
  { atom: "N", v: 5, bonds: 3, lp: 0, context: "an electron-deficient nitrenium ion" },
  { atom: "O", v: 6, bonds: 2, lp: 2, context: "water (H₂O) or C=O" },
  { atom: "O", v: 6, bonds: 1, lp: 3, context: "hydroxide (OH⁻) or single-bonded O in CO₃²⁻" },
  { atom: "O", v: 6, bonds: 3, lp: 1, context: "hydronium (H₃O⁺) or central O in ozone (O₃)" },
  { atom: "O", v: 6, bonds: 4, lp: 0, context: "hypothetical hypervalent oxygen" },
  { atom: "F", v: 7, bonds: 1, lp: 3, context: "hydrogen fluoride (HF)" },
  { atom: "F", v: 7, bonds: 2, lp: 2, context: "a bridged fluoronium ion" },
  { atom: "B", v: 3, bonds: 3, lp: 0, context: "boron trifluoride (BF₃)" },
  { atom: "B", v: 3, bonds: 4, lp: 0, context: "tetrafluoroborate (BF₄⁻)" },
  { atom: "P", v: 5, bonds: 3, lp: 1, context: "phosphorus trichloride (PCl₃)" },
  { atom: "P", v: 5, bonds: 4, lp: 0, context: "phosphonium (PH₄⁺) or octet PO₄³⁻" },
  { atom: "P", v: 5, bonds: 5, lp: 0, context: "phosphorus pentachloride (PCl₅)" },
  { atom: "P", v: 5, bonds: 6, lp: 0, context: "hexafluorophosphate (PF₆⁻)" },
  { atom: "S", v: 6, bonds: 2, lp: 2, context: "hydrogen sulfide (H₂S)" },
  { atom: "S", v: 6, bonds: 3, lp: 1, context: "octet Lewis form of SO₂ (O=S−O)" },
  { atom: "S", v: 6, bonds: 4, lp: 1, context: "expanded-octet SO₂ (O=S=O) or SF₄" },
  { atom: "S", v: 6, bonds: 4, lp: 0, context: "octet-rule Lewis form of SO₄²⁻" },
  { atom: "S", v: 6, bonds: 6, lp: 0, context: "SF₆ or expanded-octet SO₄²⁻" },
  { atom: "S", v: 6, bonds: 1, lp: 3, context: "resonance form [S−C≡N]⁻" },
  { atom: "S", v: 6, bonds: 3, lp: 0, context: "minor resonance form [S≡C−N]⁻ with 0 LP" },
  { atom: "Cl", v: 7, bonds: 1, lp: 3, context: "hydrogen chloride (HCl)" },
  { atom: "Cl", v: 7, bonds: 3, lp: 2, context: "chlorine trifluoride (ClF₃)" },
  { atom: "Cl", v: 7, bonds: 5, lp: 1, context: "chlorine pentafluoride (ClF₅)" },
  { atom: "Cl", v: 7, bonds: 7, lp: 0, context: "expanded-octet perchlorate (ClO₄⁻)" },
  { atom: "Br", v: 7, bonds: 5, lp: 1, context: "bromine pentafluoride (BrF₅)" },
  { atom: "Br", v: 7, bonds: 4, lp: 2, context: "tetrafluorobromate (BrF₄⁻)" },
  { atom: "I", v: 7, bonds: 2, lp: 3, context: "central I in triiodide (I₃⁻)" },
  { atom: "I", v: 7, bonds: 4, lp: 2, context: "tetrachloroiodate (ICl₄⁻)" },
  { atom: "I", v: 7, bonds: 4, lp: 1, context: "tetrafluoroiodonium (IF₄⁺)" },
  { atom: "Xe", v: 8, bonds: 2, lp: 3, context: "xenon difluoride (XeF₂)" },
  { atom: "Xe", v: 8, bonds: 4, lp: 2, context: "xenon tetrafluoride (XeF₄)" },
  { atom: "Xe", v: 8, bonds: 6, lp: 0, context: "xenon trioxide (XeO₃, three Xe=O bonds)" },
];

interface HybCase {
  target: string;
  species: string;
  domains: number;
  hyb: "sp" | "sp²" | "sp³";
  accept: string[];
  note: string;
}

const HYB_CASES: readonly HybCase[] = [
  { target: "C", species: "methane (CH₄)", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "4 single bonds, 0 LP → 4 domains" },
  { target: "N", species: "ammonia (NH₃)", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "3 N−H bonds + 1 LP → 4 domains" },
  { target: "O", species: "water (H₂O)", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "2 O−H bonds + 2 LP → 4 domains" },
  { target: "N", species: "ammonium (NH₄⁺)", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "4 N−H bonds, 0 LP → 4 domains" },
  { target: "C", species: "diamond", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "4 C−C single bonds → 4 domains" },
  { target: "O", species: "methanol (CH₃OH)", domains: 4, hyb: "sp³", accept: ["sp3", "sp³", "sp^3"], note: "2 single bonds + 2 LP → 4 domains" },
  { target: "C", species: "ethene (CH₂=CH₂)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "2 C−H + 1 C=C → 3 domains" },
  { target: "C", species: "benzene (C₆H₆)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "2 ring bonds + 1 C−H → 3 domains" },
  { target: "C", species: "graphite", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "3 C−C bonds + 1 delocalized p e⁻ → 3 domains" },
  { target: "C", species: "buckminsterfullerene (C₆₀)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "3 C−C bonds per carbon → 3 domains" },
  { target: "C", species: "methanal (H₂C=O)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "2 C−H + 1 C=O → 3 domains" },
  { target: "C", species: "carbonate ion (CO₃²⁻)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "3 C–O bonding domains, 0 LP → 3 domains" },
  { target: "N", species: "nitrate ion (NO₃⁻)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "3 N–O bonding domains, 0 LP → 3 domains" },
  { target: "B", species: "boron trifluoride (BF₃)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "3 B−F bonds, 0 LP → 3 domains" },
  { target: "S", species: "sulfur dioxide (SO₂)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "2 S–O domains + 1 LP → 3 domains" },
  { target: "central O", species: "ozone (O₃)", domains: 3, hyb: "sp²", accept: ["sp2", "sp²", "sp^2"], note: "2 O–O domains + 1 LP → 3 domains" },
  { target: "C", species: "ethyne (HC≡CH)", domains: 2, hyb: "sp", accept: ["sp"], note: "1 C−H + 1 C≡C → 2 domains" },
  { target: "C", species: "carbon dioxide (CO₂)", domains: 2, hyb: "sp", accept: ["sp"], note: "2 C=O double bonds, 0 LP → 2 domains" },
  { target: "C", species: "hydrogen cyanide (H−C≡N)", domains: 2, hyb: "sp", accept: ["sp"], note: "1 C−H + 1 C≡N → 2 domains" },
  { target: "N", species: "hydrogen cyanide (H−C≡N:)", domains: 2, hyb: "sp", accept: ["sp"], note: "1 C≡N triple bond + 1 LP → 2 domains" },
  { target: "Be", species: "gaseous BeCl₂", domains: 2, hyb: "sp", accept: ["sp"], note: "2 Be−Cl bonds, 0 LP → 2 domains" },
];

const ALK_PREFIX = ["", "meth", "eth", "prop", "but", "pent", "hex", "hept", "oct", "non", "dec", "undec", "dodec"];

// =============================================================================
// DRILL 1: Ionic Formulas & Polyatomic Ion Counting [SL · Level 1]
// =============================================================================
const ionicFormulaDrill: Drill = {
  id: "s2-bonding-materials.ionic-formula-lattice",
  topicId: "s2-bonding-materials",
  title: "Ionic Formulas & Polyatomic Ion Counting",
  level: 1,
  ibLevel: "SL",
  guideRef: "ionic-metallic-bonding",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const cat = rng.pick(MONATOMIC_CATIONS);
      const an = rng.pick(MONATOMIC_ANIONS);
      const { ascii, pretty, cCount, aCount } = buildSaltFormula(cat, an);
      const traps =
        cCount !== aCount
          ? [
              {
                spec: { type: "text" as const, accept: [`${cat.ascii}${aCount === 1 ? "" : aCount}${an.ascii}${cCount === 1 ? "" : cCount}`] },
                feedback: "Check charge balance — you swapped the subscripts on the cation and anion!",
              },
            ]
          : undefined;
      return {
        prompt: `Write the chemical formula of **${cat.name} ${an.name}** formed from ${cat.symbol} and ${an.symbol} (use plain digits, no spaces).`,
        answer: { type: "text", accept: [ascii, pretty], display: pretty },
        traps,
        hint: `Balance charges (+${cat.charge} and −${an.charge}) using the lowest common multiple.`,
        solution: [
          `Cation = ${cat.symbol} (+${cat.charge}), anion = ${an.symbol} (−${an.charge}).`,
          `Combine ${cCount} ${cat.symbol} (+${cCount * cat.charge}) with ${aCount} ${an.symbol} (−${aCount * an.charge}) → **${pretty}**.`,
        ],
      };
    }

    if (tier === 2) {
      let cat = rng.pick(POLY_CATIONS);
      let an = rng.pick(POLYATOMIC_ANIONS);
      while (cat.ascii === "NH4" && an.ascii === "OH") {
        cat = rng.pick(POLY_CATIONS);
        an = rng.pick(POLYATOMIC_ANIONS);
      }
      const { ascii, pretty, cCount, aCount } = buildSaltFormula(cat, an);
      return {
        prompt: `Deduce the chemical formula of **${cat.name} ${an.name}** formed from ${cat.symbol} and ${an.symbol} (use parentheses when >1 polyatomic ion is needed).`,
        answer: { type: "text", accept: [ascii, pretty], display: pretty },
        hint: `Balance +${cat.charge} and −${an.charge}; wrap any polyatomic ion in brackets if its subscript is greater than 1.`,
        solution: [
          `Cation = ${cat.symbol} (+${cat.charge}), polyatomic anion = ${an.symbol} (−${an.charge}).`,
          `Lowest neutral ratio is ${cCount} : ${aCount}, giving **${pretty}**.`,
        ],
      };
    }

    // Tier 3: Total moles of ions in n mol of a salt
    let cat = rng.pick(POLY_CATIONS);
    let an = rng.bool(0.65) ? rng.pick(POLYATOMIC_ANIONS) : rng.pick(MONATOMIC_ANIONS);
    while (cat.ascii === "NH4" && an.ascii === "OH") {
      cat = rng.pick(POLY_CATIONS);
      an = rng.pick(POLYATOMIC_ANIONS);
    }
    const { pretty, cCount, aCount } = buildSaltFormula(cat, an);
    const ionsPerUnit = cCount + aCount;
    const moles = rng.pick([0.2, 0.25, 0.4, 0.5, 0.75, 1.5, 2.0, 2.5, 3.0]);
    const totalIonMol = clean(moles * ionsPerUnit);
    return {
      prompt: `Calculate the **total amount, in mol, of ions** (cations and anions combined) in **${moles} mol** of ${cat.name} ${an.name}, **${pretty}**.`,
      answer: { type: "number", value: totalIonMol, tolerance: 0.005, display: `${totalIonMol} mol` },
      traps: [
        {
          spec: { type: "number", value: ionsPerUnit },
          feedback: `${ionsPerUnit} is the number of ions per formula unit — multiply by ${moles} mol!`,
        },
      ],
      hint: `Count intact ions (${cat.symbol} and ${an.symbol}) per formula unit of ${pretty}, then multiply by ${moles} mol.`,
      solution: [
        `One formula unit of ${pretty} contains ${cCount} ${cat.symbol} + ${aCount} ${an.symbol} = ${ionsPerUnit} ions.`,
        `Total amount of ions = ${moles} mol × ${ionsPerUnit} = **${totalIonMol} mol**.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 2: Bonding Triangle Δχ, Average χ & Classification [SL · Level 1]
// =============================================================================
const bondingTriangleDrill: Drill = {
  id: "s2-bonding-materials.bonding-triangle",
  topicId: "s2-bonding-materials",
  title: "Bonding Triangle: Δχ, Average χ & Classification",
  level: 1,
  ibLevel: "SL",
  guideRef: "bonding-triangle-polymers",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const a = rng.pick(ELEMENTS_CHI);
      let b = rng.pick(ELEMENTS_CHI);
      while (b.symbol === a.symbol || b.chi === a.chi) b = rng.pick(ELEMENTS_CHI);
      const diff = roundTo(Math.abs(a.chi - b.chi), 1);
      const avg = roundTo((a.chi + b.chi) / 2, 2);
      return {
        prompt: `Given Pauling electronegativities **${a.symbol} = ${a.chi.toFixed(1)}** and **${b.symbol} = ${b.chi.toFixed(1)}**, calculate the electronegativity difference {{Δχ}} between ${a.symbol} and ${b.symbol}.`,
        answer: { type: "number", value: diff, tolerance: 0.005 },
        traps:
          Math.abs(avg - diff) > 0.05
            ? [
                {
                  spec: { type: "number", value: avg, tolerance: 0.01 },
                  feedback: `${avg} is the average electronegativity χ_avg — subtract the two Pauling values for Δχ!`,
                },
              ]
            : undefined,
        hint: "Use {{Δχ = |χ_A - χ_B|}} (always non-negative).",
        solution: [
          `{{Δχ = |${a.chi.toFixed(1)} - ${b.chi.toFixed(1)}| = ${diff.toFixed(1)}}}.`,
        ],
      };
    }

    if (tier === 2) {
      const a = rng.pick(ELEMENTS_CHI);
      let b = rng.pick(ELEMENTS_CHI);
      while (b.symbol === a.symbol) b = rng.pick(ELEMENTS_CHI);
      const avg = roundTo((a.chi + b.chi) / 2, 2);
      const sum = roundTo(a.chi + b.chi, 1);
      return {
        prompt: `Given Pauling electronegativities **${a.symbol} = ${a.chi.toFixed(1)}** and **${b.symbol} = ${b.chi.toFixed(1)}**, calculate the average electronegativity {{χ_"avg"}} for a binary substance of ${a.symbol} and ${b.symbol} (to 2 decimal places).`,
        answer: { type: "number", value: avg, tolerance: 0.005 },
        traps: [
          {
            spec: { type: "number", value: sum, tolerance: 0.01 },
            feedback: `You added the two electronegativities (${sum}) without dividing by 2!`,
          },
        ],
        hint: "Compute the arithmetic mean {{(χ_A + χ_B) / 2}}.",
        solution: [
          `{{χ_"avg" = (${a.chi.toFixed(1)} + ${b.chi.toFixed(1)}) / 2 = ${sum.toFixed(1)} / 2 = ${avg}}}.`,
        ],
      };
    }

    // Tier 3: Classify unambiguous binary substances on the IB Van Arkel-Ketelaar triangle
    const sp = rng.pick(TRIANGLE_SPECIES);
    const avg = roundTo((sp.chiA + sp.chiB) / 2, 2);
    const diff = roundTo(Math.abs(sp.chiA - sp.chiB), 1);
    const accept =
      sp.region === "non-polar covalent"
        ? ["non-polar covalent", "nonpolar covalent", "pure covalent", "covalent"]
        : [sp.region];
    return {
      prompt: `For **${sp.label}** (Pauling χ: ${sp.elemA} = ${sp.chiA.toFixed(1)}, ${sp.elemB} = ${sp.chiB.toFixed(1)}), classify its dominant bonding region on the Van Arkel–Ketelaar triangle as **ionic**, **metallic**, **polar covalent**, or **non-polar covalent**.`,
      answer: { type: "text", accept, display: sp.region },
      hint: `Calculate χ_avg = (${sp.chiA.toFixed(1)} + ${sp.chiB.toFixed(1)}) / 2 and Δχ = |${sp.chiA.toFixed(1)} − ${sp.chiB.toFixed(1)}|, then locate the point on the bonding triangle.`,
      solution: [
        `{{χ_"avg" = (${sp.chiA.toFixed(1)} + ${sp.chiB.toFixed(1)}) / 2 = ${avg}}}, {{Δχ = |${sp.chiA.toFixed(1)} - ${sp.chiB.toFixed(1)}| = ${diff.toFixed(1)}}}.`,
        `These coordinates fall cleanly in the **${sp.region}** region of the bonding triangle.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 3: VSEPR Electron Domains, Shapes & Bond Angles [SL · Level 2]
// =============================================================================
const vseprDrill: Drill = {
  id: "s2-bonding-materials.vsepr-angles-shapes",
  topicId: "s2-bonding-materials",
  title: "VSEPR Electron Domains, Shapes & Bond Angles",
  level: 2,
  ibLevel: "SL",
  guideRef: "covalent-vsepr-imfs",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const sp = rng.pick(VSEPR_SL);
      if (rng.bool(0.5)) {
        return {
          prompt: `How many **electron domains** (bonding domains + lone pairs) surround the ${sp.central} atom in **${sp.formula}**?`,
          answer: { type: "number", value: sp.domains },
          hint: "Each single, double, or triple bond counts as ONE bonding domain; each lone pair counts as ONE non-bonding domain.",
          solution: [
            `In ${sp.formula}, ${sp.central} has ${sp.bp} bonding domain${sp.bp === 1 ? "" : "s"} and ${sp.lp} lone pair${sp.lp === 1 ? "" : "s"}.`,
            `Total electron domains = ${sp.bp} + ${sp.lp} = **${sp.domains}** (${sp.edg} electron domain geometry).`,
          ],
        };
      }
      return {
        prompt: `How many **lone pairs** reside on the ${sp.central} atom in **${sp.formula}**?`,
        answer: { type: "number", value: sp.lp },
        hint: `Draw the Lewis structure of ${sp.formula}, complete outer octets, and count remaining non-bonding electron pairs on ${sp.central}.`,
        solution: [
          `In ${sp.formula}, ${sp.central} forms ${sp.bp} bonding domain${sp.bp === 1 ? "" : "s"} and holds **${sp.lp}** lone pair${sp.lp === 1 ? "" : "s"} (${sp.domains} electron domains total).`,
        ],
      };
    }

    if (tier === 2) {
      const sp = rng.pick(VSEPR_SL);
      if (sp.canonicalAngle !== undefined && rng.bool(0.35)) {
        return {
          prompt: `State the canonical IB VSEPR **bond angle**, in degrees, for **${sp.formula}** (central atom: ${sp.central}).`,
          answer: { type: "number", value: sp.canonicalAngle, tolerance: 0.5, display: `${sp.canonicalAngle}°` },
          hint: `Count electron domains (${sp.domains}) and lone pairs (${sp.lp}) on ${sp.central}, then apply lone-pair angle compression.`,
          solution: [
            `${sp.formula} has ${sp.domains} electron domains (${sp.bp} BP, ${sp.lp} LP) → ${sp.shape} molecular geometry.`,
            `Canonical IB bond angle = **${sp.canonicalAngle}°**.`,
          ],
        };
      }
      return {
        prompt: `Deduce the **molecular geometry** of **${sp.formula}** (central atom: ${sp.central}).`,
        answer: { type: "text", accept: sp.accept, display: sp.shape },
        hint: `Count bonding domains and lone pairs on ${sp.central}; molecular geometry describes atom positions only (ignoring lone pairs).`,
        solution: [
          `${sp.formula} has ${sp.domains} electron domains around ${sp.central} (${sp.bp} bonding, ${sp.lp} lone pair${sp.lp === 1 ? "" : "s"}), giving a ${sp.edg} electron domain geometry.`,
          `Molecular geometry = **${sp.shape}**.`,
        ],
      };
    }

    // Tier 3: HL 5- & 6-domain expanded octets
    const sp = rng.pick(VSEPR_HL);
    if (rng.bool(0.6)) {
      return {
        prompt: `[HL] Deduce the **molecular geometry** of the expanded-octet species **${sp.formula}** (central atom: ${sp.central}).`,
        answer: { type: "text", accept: sp.accept, display: sp.shape },
        hint: `Count total valence electrons to find bonding domains and lone pairs on ${sp.central} (5-domain LPs go equatorial; 6-domain 2 LPs go trans).`,
        solution: [
          `${sp.formula} has ${sp.domains} electron domains around ${sp.central} (${sp.bp} BP, ${sp.lp} LP → ${sp.edg} electron domain geometry).`,
          `Molecular geometry = **${sp.shape}**.`,
        ],
      };
    }
    return {
      prompt: `[HL] How many **lone pairs** reside on the ${sp.central} atom in the expanded-octet species **${sp.formula}**?`,
      answer: { type: "number", value: sp.lp },
      hint: `Sum valence electrons (adjusting for ionic charge if present), subtract bonds and outer-atom octets, and pair up the remaining electrons on ${sp.central}.`,
      solution: [
        `In ${sp.formula}, ${sp.central} has ${sp.bp} bonding domains and **${sp.lp}** lone pair${sp.lp === 1 ? "" : "s"} (${sp.domains} domains total → ${sp.shape}).`,
      ],
    };
  },
};

// =============================================================================
// DRILL 4: Formal Charge, σ/π Counting & Hybridization [HL · Level 3]
// =============================================================================
const formalChargeHybridizationDrill: Drill = {
  id: "s2-bonding-materials.formal-charge-hybridization",
  topicId: "s2-bonding-materials",
  title: "Formal Charge, σ/π Counting & Hybridization [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "expanded-octets-hybridization-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const c = rng.pick(FC_CASES);
      const nNonBond = 2 * c.lp;
      const fc = c.v - nNonBond - c.bonds;
      const wrongLp = c.v - c.lp - c.bonds;
      return {
        prompt: `[HL] Calculate the **formal charge** on **${c.atom}** (valence electrons V = ${c.v}) when it forms **${c.bonds} covalent bond${c.bonds === 1 ? "" : "s"}** and carries **${c.lp} lone pair${c.lp === 1 ? "" : "s"}** (as in ${c.context}).`,
        answer: { type: "number", value: fc, display: fc > 0 ? `+${fc}` : String(fc) },
        traps:
          c.lp > 0 && wrongLp !== fc
            ? [
                {
                  spec: { type: "number", value: wrongLp },
                  feedback: `Remember each lone pair has 2 non-bonding electrons (N = 2 × ${c.lp} = ${nNonBond}), not ${c.lp}!`,
                },
              ]
            : undefined,
        hint: "Use {{FC = V - N - (1/2)B}}, where N = 2 × (lone pairs) and ½B = number of covalent bonds.",
        solution: [
          `V = ${c.v}, N = 2 × ${c.lp} = ${nNonBond}, ½B = ${c.bonds}.`,
          `{{FC = ${c.v} - ${nNonBond} - ${c.bonds} = ${fc > 0 ? `+${fc}` : fc}}}.`,
        ],
      };
    }

    if (tier === 2) {
      const kind = rng.int(1, 6);
      if (kind === 1) {
        const n = rng.int(2, 10);
        const h = 2 * n + 2;
        const sigma = 3 * n + 1;
        return {
          prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the straight-chain alkane **${ALK_PREFIX[n]}ane** (C${toSub(String(n))}H${toSub(String(h))}).`,
          answer: { type: "number", value: sigma },
          hint: "Every C−C and C−H single bond is 1 σ bond; for any acyclic molecule, σ bonds = (total atoms) − 1.",
          solution: [
            `Carbon backbone has ${n - 1} C−C single bonds and there are ${h} C−H single bonds.`,
            `Total σ bonds = (${n - 1}) + ${h} = **${sigma}**.`,
          ],
        };
      }
      if (kind === 2) {
        const n = rng.int(2, 10);
        const h = 2 * n;
        const sigma = 3 * n - 1;
        const name = n <= 3 ? `${ALK_PREFIX[n]}ene` : `${ALK_PREFIX[n]}-1-ene`;
        return {
          prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the acyclic alkene **${name}** (C${toSub(String(n))}H${toSub(String(h))}, one C=C bond).`,
          answer: { type: "number", value: sigma },
          traps: [
            {
              spec: { type: "number", value: sigma + 1 },
              feedback: "You counted the π bond of C=C as a σ bond — a double bond has only 1 σ bond plus 1 π bond!",
            },
          ],
          hint: "Each C−C single bond AND the C=C double bond contributes exactly 1 σ bond; add all C−H single bonds.",
          solution: [
            `Backbone has ${n - 1} carbon–carbon σ links (${n - 2} single + 1 double) plus ${h} C−H σ bonds.`,
            `Total σ bonds = (${n - 1}) + ${h} = **${sigma}** (plus 1 π bond).`,
          ],
        };
      }
      if (kind === 3) {
        const n = rng.int(2, 10);
        const h = 2 * n - 2;
        const sigma = 3 * n - 3;
        const name = n <= 3 ? `${ALK_PREFIX[n]}yne` : `${ALK_PREFIX[n]}-1-yne`;
        return {
          prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the acyclic alkyne **${name}** (C${toSub(String(n))}H${toSub(String(h))}, one C≡C bond).`,
          answer: { type: "number", value: sigma },
          traps: [
            {
              spec: { type: "number", value: sigma + 2 },
              feedback: "A triple bond has 1 σ bond and 2 π bonds — do not include the 2 π bonds in the σ count!",
            },
          ],
          hint: "For any acyclic molecule, total σ bonds = total atoms − 1.",
          solution: [
            `Backbone has ${n - 1} carbon–carbon σ links plus ${h} C−H σ bonds.`,
            `Total σ bonds = (${n - 1}) + ${h} = **${sigma}** (plus 2 π bonds).`,
          ],
        };
      }
      if (kind === 4) {
        const n = rng.int(2, 10);
        const h = 2 * n;
        const sigma = 3 * n;
        return {
          prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the saturated aldehyde **${ALK_PREFIX[n]}anal** (C${toSub(String(n))}H${toSub(String(h))}O, one C=O bond).`,
          answer: { type: "number", value: sigma },
          hint: "Count C−C σ bonds, the 1 σ bond in C=O, and all C−H single bonds (or use total atoms − 1 for acyclic molecules).",
          solution: [
            `Acyclic C${toSub(String(n))}H${toSub(String(h))}O has ${n + h + 1} atoms → total σ bonds = (${n + h + 1}) − 1 = **${sigma}** (and 1 π bond in C=O).`,
          ],
        };
      }
      if (kind === 5) {
        const n = rng.int(1, 10);
        const h = 2 * n;
        const sigma = 3 * n + 1;
        return {
          prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the saturated carboxylic acid **${ALK_PREFIX[n]}anoic acid** (C${toSub(String(n))}H${toSub(String(h))}O₂, one −COOH group).`,
          answer: { type: "number", value: sigma },
          hint: "Remember the −COOH group has 1 C=O (1 σ + 1 π), 1 C−O (1 σ), and 1 O−H (1 σ); acyclic total σ = total atoms − 1.",
          solution: [
            `Acyclic C${toSub(String(n))}H${toSub(String(h))}O₂ has ${n + h + 2} atoms → total σ bonds = (${n + h + 2}) − 1 = **${sigma}** (and 1 π bond in C=O).`,
          ],
        };
      }
      const n = rng.int(2, 10);
      const h = 2 * n - 1;
      const sigma = 3 * n - 1;
      return {
        prompt: `[HL] Count the total number of **sigma (σ) bonds** in one molecule of the aliphatic nitrile **${ALK_PREFIX[n]}anenitrile** (C${toSub(String(n))}H${toSub(String(h))}N, one −C≡N group).`,
        answer: { type: "number", value: sigma },
        hint: "A −C≡N triple bond contains 1 σ bond and 2 π bonds; acyclic total σ = total atoms − 1.",
        solution: [
          `Acyclic C${toSub(String(n))}H${toSub(String(h))}N has ${n + h + 1} atoms → total σ bonds = (${n + h + 1}) − 1 = **${sigma}** (and 2 π bonds in C≡N).`,
        ],
      };
    }

    // Tier 3: Mixed hybridization deduction + cyclic/acyclic [σ, π] ordered lists
    if (rng.bool(0.4)) {
      const hc = rng.pick(HYB_CASES);
      return {
        prompt: `[HL] State the **hybridization** (sp, sp², or sp³) of the **${hc.target}** atom in **${hc.species}**.`,
        answer: { type: "text", accept: hc.accept, display: hc.hyb },
        hint: "Count total electron domains (bonding domains + lone pairs): 2 → sp, 3 → sp², 4 → sp³.",
        solution: [
          `${hc.target} in ${hc.species}: ${hc.note}.`,
          `${hc.domains} electron domains correspond to **${hc.hyb}** hybridization.`,
        ],
      };
    }

    const mode = rng.int(1, 4);
    if (mode === 1) {
      const n = rng.int(3, 10);
      const h = 2 * n;
      const sigma = 3 * n;
      return {
        prompt: `[HL] State the total number of **σ and π bonds** in one molecule of **cyclo${ALK_PREFIX[n]}ane** (monocyclic C${toSub(String(n))}H${toSub(String(h))}). Type two numbers as \`σ, π\`.`,
        answer: { type: "list", values: [sigma, 0], ordered: true, display: `${sigma}, 0` },
        traps: [
          {
            spec: { type: "list", values: [sigma - 1, 0], ordered: true },
            feedback: "Closing a ring adds 1 extra C−C σ bond compared with an open chain (monocyclic σ = total atoms)!",
          },
        ],
        hint: "In a closed ring of n carbons, there are n C−C σ bonds plus all C−H σ bonds.",
        solution: [
          `Ring has ${n} C−C single bonds and ${h} C−H single bonds → **${sigma} σ bonds** and **0 π bonds**.`,
        ],
      };
    }
    if (mode === 2) {
      const n = rng.int(3, 10);
      const h = 2 * n - 2;
      const sigma = 3 * n - 2;
      return {
        prompt: `[HL] State the total number of **σ and π bonds** in one molecule of **cyclo${ALK_PREFIX[n]}ene** (monocyclic C${toSub(String(n))}H${toSub(String(h))} with one ring C=C bond). Type two numbers as \`σ, π\`.`,
        answer: { type: "list", values: [sigma, 1], ordered: true, display: `${sigma}, 1` },
        hint: "Count n ring C–C σ bonds plus all C−H σ bonds; the single C=C bond adds 1 π bond.",
        solution: [
          `Ring skeleton has ${n} C–C σ bonds + ${h} C−H σ bonds = **${sigma} σ bonds**, and 1 C=C double bond gives **1 π bond**.`,
        ],
      };
    }
    if (mode === 3) {
      const n = rng.int(3, 10);
      const h = 2 * n - 2;
      const sigma = 3 * n - 3;
      return {
        prompt: `[HL] State the total number of **σ and π bonds** in an acyclic **alkadiene** of formula C${toSub(String(n))}H${toSub(String(h))} containing **two C=C double bonds**. Type two numbers as \`σ, π\`.`,
        answer: { type: "list", values: [sigma, 2], ordered: true, display: `${sigma}, 2` },
        hint: "Acyclic σ bonds = (total atoms) − 1; each C=C double bond contributes 1 π bond.",
        solution: [
          `Total atoms = ${n + h} (acyclic) → σ bonds = ${n + h} − 1 = **${sigma}**; two C=C bonds give **2 π bonds**.`,
        ],
      };
    }
    const n = rng.int(4, 10);
    const h = 2 * n - 4;
    const sigma = 3 * n - 5;
    return {
      prompt: `[HL] State the total number of **σ and π bonds** in an acyclic **enyne** of formula C${toSub(String(n))}H${toSub(String(h))} containing **one C=C and one C≡C bond**. Type two numbers as \`σ, π\`.`,
      answer: { type: "list", values: [sigma, 3], ordered: true, display: `${sigma}, 3` },
      hint: "Acyclic σ bonds = (total atoms) − 1; sum π bonds from one C=C (1 π) plus one C≡C (2 π).",
      solution: [
        `Total atoms = ${n + h} (acyclic) → σ bonds = ${n + h} − 1 = **${sigma}**; π bonds = 1 (C=C) + 2 (C≡C) = **3 π bonds**.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  ionicFormulaDrill,
  bondingTriangleDrill,
  vseprDrill,
  formalChargeHybridizationDrill,
];
