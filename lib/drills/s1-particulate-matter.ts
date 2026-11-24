import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const R_GAS = 8.31;
const V_STP = 22.7;
const H_PLANCK = 6.63e-34;
const C_LIGHT = 3.0e8;
const N_A = 6.02e23;

function safeTrap(traps: Trap[], ans: number, tol: number, wrongVal: number, feedback: string) {
  const w = clean(wrongVal);
  if (!Number.isFinite(w)) return;
  if (Math.abs(w - ans) <= Math.max(tol * 2.5, 0.05)) return;
  if (traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - w) <= 0.02)) return;
  traps.push({ spec: { type: "number", value: w, tolerance: Math.max(tol, 0.02) }, feedback });
}

interface IonSample {
  symbol: string;
  name: string;
  z: number;
  a: number;
  q: number;
  chargeLabel: string;
}

const ION_POOL: readonly IonSample[] = [
  { symbol: "Li", name: "lithium", z: 3, a: 7, q: 1, chargeLabel: "⁺" },
  { symbol: "N", name: "nitride", z: 7, a: 14, q: -3, chargeLabel: "³⁻" },
  { symbol: "O", name: "oxide", z: 8, a: 16, q: -2, chargeLabel: "²⁻" },
  { symbol: "F", name: "fluoride", z: 9, a: 19, q: -1, chargeLabel: "⁻" },
  { symbol: "Na", name: "sodium", z: 11, a: 23, q: 1, chargeLabel: "⁺" },
  { symbol: "Mg", name: "magnesium", z: 12, a: 24, q: 2, chargeLabel: "²⁺" },
  { symbol: "Mg", name: "magnesium-26", z: 12, a: 26, q: 2, chargeLabel: "²⁺" },
  { symbol: "Al", name: "aluminium", z: 13, a: 27, q: 3, chargeLabel: "³⁺" },
  { symbol: "P", name: "phosphide", z: 15, a: 31, q: -3, chargeLabel: "³⁻" },
  { symbol: "S", name: "sulfide", z: 16, a: 32, q: -2, chargeLabel: "²⁻" },
  { symbol: "S", name: "sulfide-34", z: 16, a: 34, q: -2, chargeLabel: "²⁻" },
  { symbol: "Cl", name: "chloride-35", z: 17, a: 35, q: -1, chargeLabel: "⁻" },
  { symbol: "Cl", name: "chloride-37", z: 17, a: 37, q: -1, chargeLabel: "⁻" },
  { symbol: "K", name: "potassium", z: 19, a: 39, q: 1, chargeLabel: "⁺" },
  { symbol: "Ca", name: "calcium", z: 20, a: 40, q: 2, chargeLabel: "²⁺" },
  { symbol: "Cr", name: "chromium(III)", z: 24, a: 52, q: 3, chargeLabel: "³⁺" },
  { symbol: "Mn", name: "manganese(II)", z: 25, a: 55, q: 2, chargeLabel: "²⁺" },
  { symbol: "Fe", name: "iron(II)", z: 26, a: 56, q: 2, chargeLabel: "²⁺" },
  { symbol: "Fe", name: "iron(III)", z: 26, a: 56, q: 3, chargeLabel: "³⁺" },
  { symbol: "Co", name: "cobalt(II)", z: 27, a: 59, q: 2, chargeLabel: "²⁺" },
  { symbol: "Ni", name: "nickel(II)", z: 28, a: 58, q: 2, chargeLabel: "²⁺" },
  { symbol: "Cu", name: "copper(II)", z: 29, a: 63, q: 2, chargeLabel: "²⁺" },
  { symbol: "Cu", name: "copper(II)-65", z: 29, a: 65, q: 2, chargeLabel: "²⁺" },
  { symbol: "Zn", name: "zinc", z: 30, a: 64, q: 2, chargeLabel: "²⁺" },
  { symbol: "Br", name: "bromide-79", z: 35, a: 79, q: -1, chargeLabel: "⁻" },
  { symbol: "Br", name: "bromide-81", z: 35, a: 81, q: -1, chargeLabel: "⁻" },
  { symbol: "Ag", name: "silver-107", z: 47, a: 107, q: 1, chargeLabel: "⁺" },
  { symbol: "I", name: "iodide", z: 53, a: 127, q: -1, chargeLabel: "⁻" },
];

interface ConfigSpecies {
  label: string;
  z: number;
  q: number;
  condensed: string;
  accepts: string[];
  dCount: number;
  s4Count: number;
  unpaired: number;
  valenceShell: number;
  outerSublevelE: number;
  outerSublevelName: string;
}

const CONFIG_SL_POOL: readonly ConfigSpecies[] = [
  { label: "C (Z = 6)", z: 6, q: 0, condensed: "[He] 2s² 2p²", accepts: ["[He] 2s2 2p2", "[He] 2s² 2p²", "1s2 2s2 2p2"], dCount: 0, s4Count: 0, unpaired: 2, valenceShell: 2, outerSublevelE: 2, outerSublevelName: "2p" },
  { label: "N (Z = 7)", z: 7, q: 0, condensed: "[He] 2s² 2p³", accepts: ["[He] 2s2 2p3", "[He] 2s² 2p³", "1s2 2s2 2p3"], dCount: 0, s4Count: 0, unpaired: 3, valenceShell: 2, outerSublevelE: 3, outerSublevelName: "2p" },
  { label: "O (Z = 8)", z: 8, q: 0, condensed: "[He] 2s² 2p⁴", accepts: ["[He] 2s2 2p4", "[He] 2s² 2p⁴", "1s2 2s2 2p4"], dCount: 0, s4Count: 0, unpaired: 2, valenceShell: 2, outerSublevelE: 4, outerSublevelName: "2p" },
  { label: "F (Z = 9)", z: 9, q: 0, condensed: "[He] 2s² 2p⁵", accepts: ["[He] 2s2 2p5", "[He] 2s² 2p⁵", "1s2 2s2 2p5"], dCount: 0, s4Count: 0, unpaired: 1, valenceShell: 2, outerSublevelE: 5, outerSublevelName: "2p" },
  { label: "Na (Z = 11)", z: 11, q: 0, condensed: "[Ne] 3s¹", accepts: ["[Ne] 3s1", "[Ne] 3s¹"], dCount: 0, s4Count: 0, unpaired: 1, valenceShell: 3, outerSublevelE: 1, outerSublevelName: "3s" },
  { label: "Mg (Z = 12)", z: 12, q: 0, condensed: "[Ne] 3s²", accepts: ["[Ne] 3s2", "[Ne] 3s²"], dCount: 0, s4Count: 0, unpaired: 0, valenceShell: 3, outerSublevelE: 2, outerSublevelName: "3s" },
  { label: "Al (Z = 13)", z: 13, q: 0, condensed: "[Ne] 3s² 3p¹", accepts: ["[Ne] 3s2 3p1", "[Ne] 3s² 3p¹"], dCount: 0, s4Count: 0, unpaired: 1, valenceShell: 3, outerSublevelE: 1, outerSublevelName: "3p" },
  { label: "Si (Z = 14)", z: 14, q: 0, condensed: "[Ne] 3s² 3p²", accepts: ["[Ne] 3s2 3p2", "[Ne] 3s² 3p²"], dCount: 0, s4Count: 0, unpaired: 2, valenceShell: 3, outerSublevelE: 2, outerSublevelName: "3p" },
  { label: "P (Z = 15)", z: 15, q: 0, condensed: "[Ne] 3s² 3p³", accepts: ["[Ne] 3s2 3p3", "[Ne] 3s² 3p³"], dCount: 0, s4Count: 0, unpaired: 3, valenceShell: 3, outerSublevelE: 3, outerSublevelName: "3p" },
  { label: "S (Z = 16)", z: 16, q: 0, condensed: "[Ne] 3s² 3p⁴", accepts: ["[Ne] 3s2 3p4", "[Ne] 3s² 3p⁴"], dCount: 0, s4Count: 0, unpaired: 2, valenceShell: 3, outerSublevelE: 4, outerSublevelName: "3p" },
  { label: "Cl (Z = 17)", z: 17, q: 0, condensed: "[Ne] 3s² 3p⁵", accepts: ["[Ne] 3s2 3p5", "[Ne] 3s² 3p⁵"], dCount: 0, s4Count: 0, unpaired: 1, valenceShell: 3, outerSublevelE: 5, outerSublevelName: "3p" },
  { label: "Ar (Z = 18)", z: 18, q: 0, condensed: "[Ne] 3s² 3p⁶", accepts: ["[Ne] 3s2 3p6", "[Ne] 3s² 3p⁶"], dCount: 0, s4Count: 0, unpaired: 0, valenceShell: 3, outerSublevelE: 6, outerSublevelName: "3p" },
  { label: "K (Z = 19)", z: 19, q: 0, condensed: "[Ar] 4s¹", accepts: ["[Ar] 4s1", "[Ar] 4s¹"], dCount: 0, s4Count: 1, unpaired: 1, valenceShell: 4, outerSublevelE: 1, outerSublevelName: "4s" },
  { label: "Ca (Z = 20)", z: 20, q: 0, condensed: "[Ar] 4s²", accepts: ["[Ar] 4s2", "[Ar] 4s²"], dCount: 0, s4Count: 2, unpaired: 0, valenceShell: 4, outerSublevelE: 2, outerSublevelName: "4s" },
  { label: "Ga (Z = 31)", z: 31, q: 0, condensed: "[Ar] 3d¹⁰ 4s² 4p¹", accepts: ["[Ar] 3d10 4s2 4p1", "[Ar] 4s2 3d10 4p1", "[Ar] 3d¹⁰ 4s² 4p¹"], dCount: 10, s4Count: 2, unpaired: 1, valenceShell: 4, outerSublevelE: 1, outerSublevelName: "4p" },
  { label: "Ge (Z = 32)", z: 32, q: 0, condensed: "[Ar] 3d¹⁰ 4s² 4p²", accepts: ["[Ar] 3d10 4s2 4p2", "[Ar] 4s2 3d10 4p2", "[Ar] 3d¹⁰ 4s² 4p²"], dCount: 10, s4Count: 2, unpaired: 2, valenceShell: 4, outerSublevelE: 2, outerSublevelName: "4p" },
  { label: "As (Z = 33)", z: 33, q: 0, condensed: "[Ar] 3d¹⁰ 4s² 4p³", accepts: ["[Ar] 3d10 4s2 4p3", "[Ar] 4s2 3d10 4p3", "[Ar] 3d¹⁰ 4s² 4p³"], dCount: 10, s4Count: 2, unpaired: 3, valenceShell: 4, outerSublevelE: 3, outerSublevelName: "4p" },
  { label: "Se (Z = 34)", z: 34, q: 0, condensed: "[Ar] 3d¹⁰ 4s² 4p⁴", accepts: ["[Ar] 3d10 4s2 4p4", "[Ar] 4s2 3d10 4p4", "[Ar] 3d¹⁰ 4s² 4p⁴"], dCount: 10, s4Count: 2, unpaired: 2, valenceShell: 4, outerSublevelE: 4, outerSublevelName: "4p" },
  { label: "Br (Z = 35)", z: 35, q: 0, condensed: "[Ar] 3d¹⁰ 4s² 4p⁵", accepts: ["[Ar] 3d10 4s2 4p5", "[Ar] 4s2 3d10 4p5", "[Ar] 3d¹⁰ 4s² 4p⁵"], dCount: 10, s4Count: 2, unpaired: 1, valenceShell: 4, outerSublevelE: 5, outerSublevelName: "4p" },
];

const CONFIG_D_BLOCK: readonly ConfigSpecies[] = [
  { label: "Sc (Z = 21)", z: 21, q: 0, condensed: "[Ar] 3d¹ 4s²", accepts: ["[Ar] 3d1 4s2", "[Ar] 4s2 3d1", "[Ar] 3d¹ 4s²"], dCount: 1, s4Count: 2, unpaired: 1, valenceShell: 4, outerSublevelE: 1, outerSublevelName: "3d" },
  { label: "Ti (Z = 22)", z: 22, q: 0, condensed: "[Ar] 3d² 4s²", accepts: ["[Ar] 3d2 4s2", "[Ar] 4s2 3d2", "[Ar] 3d² 4s²"], dCount: 2, s4Count: 2, unpaired: 2, valenceShell: 4, outerSublevelE: 2, outerSublevelName: "3d" },
  { label: "Ti²⁺ (Z = 22)", z: 22, q: 2, condensed: "[Ar] 3d²", accepts: ["[Ar] 3d2", "[Ar] 3d²"], dCount: 2, s4Count: 0, unpaired: 2, valenceShell: 3, outerSublevelE: 2, outerSublevelName: "3d" },
  { label: "Ti³⁺ (Z = 22)", z: 22, q: 3, condensed: "[Ar] 3d¹", accepts: ["[Ar] 3d1", "[Ar] 3d¹"], dCount: 1, s4Count: 0, unpaired: 1, valenceShell: 3, outerSublevelE: 1, outerSublevelName: "3d" },
  { label: "V (Z = 23)", z: 23, q: 0, condensed: "[Ar] 3d³ 4s²", accepts: ["[Ar] 3d3 4s2", "[Ar] 4s2 3d3", "[Ar] 3d³ 4s²"], dCount: 3, s4Count: 2, unpaired: 3, valenceShell: 4, outerSublevelE: 3, outerSublevelName: "3d" },
  { label: "V²⁺ (Z = 23)", z: 23, q: 2, condensed: "[Ar] 3d³", accepts: ["[Ar] 3d3", "[Ar] 3d³"], dCount: 3, s4Count: 0, unpaired: 3, valenceShell: 3, outerSublevelE: 3, outerSublevelName: "3d" },
  { label: "V³⁺ (Z = 23)", z: 23, q: 3, condensed: "[Ar] 3d²", accepts: ["[Ar] 3d2", "[Ar] 3d²"], dCount: 2, s4Count: 0, unpaired: 2, valenceShell: 3, outerSublevelE: 2, outerSublevelName: "3d" },
  { label: "Cr (Z = 24)", z: 24, q: 0, condensed: "[Ar] 3d⁵ 4s¹", accepts: ["[Ar] 3d5 4s1", "[Ar] 4s1 3d5", "[Ar] 3d⁵ 4s¹"], dCount: 5, s4Count: 1, unpaired: 6, valenceShell: 4, outerSublevelE: 5, outerSublevelName: "3d" },
  { label: "Cr²⁺ (Z = 24)", z: 24, q: 2, condensed: "[Ar] 3d⁴", accepts: ["[Ar] 3d4", "[Ar] 3d⁴"], dCount: 4, s4Count: 0, unpaired: 4, valenceShell: 3, outerSublevelE: 4, outerSublevelName: "3d" },
  { label: "Cr³⁺ (Z = 24)", z: 24, q: 3, condensed: "[Ar] 3d³", accepts: ["[Ar] 3d3", "[Ar] 3d³"], dCount: 3, s4Count: 0, unpaired: 3, valenceShell: 3, outerSublevelE: 3, outerSublevelName: "3d" },
  { label: "Mn (Z = 25)", z: 25, q: 0, condensed: "[Ar] 3d⁵ 4s²", accepts: ["[Ar] 3d5 4s2", "[Ar] 4s2 3d5", "[Ar] 3d⁵ 4s²"], dCount: 5, s4Count: 2, unpaired: 5, valenceShell: 4, outerSublevelE: 5, outerSublevelName: "3d" },
  { label: "Mn²⁺ (Z = 25)", z: 25, q: 2, condensed: "[Ar] 3d⁵", accepts: ["[Ar] 3d5", "[Ar] 3d⁵"], dCount: 5, s4Count: 0, unpaired: 5, valenceShell: 3, outerSublevelE: 5, outerSublevelName: "3d" },
  { label: "Mn³⁺ (Z = 25)", z: 25, q: 3, condensed: "[Ar] 3d⁴", accepts: ["[Ar] 3d4", "[Ar] 3d⁴"], dCount: 4, s4Count: 0, unpaired: 4, valenceShell: 3, outerSublevelE: 4, outerSublevelName: "3d" },
  { label: "Fe (Z = 26)", z: 26, q: 0, condensed: "[Ar] 3d⁶ 4s²", accepts: ["[Ar] 3d6 4s2", "[Ar] 4s2 3d6", "[Ar] 3d⁶ 4s²"], dCount: 6, s4Count: 2, unpaired: 4, valenceShell: 4, outerSublevelE: 6, outerSublevelName: "3d" },
  { label: "Fe²⁺ (Z = 26)", z: 26, q: 2, condensed: "[Ar] 3d⁶", accepts: ["[Ar] 3d6", "[Ar] 3d⁶"], dCount: 6, s4Count: 0, unpaired: 4, valenceShell: 3, outerSublevelE: 6, outerSublevelName: "3d" },
  { label: "Fe³⁺ (Z = 26)", z: 26, q: 3, condensed: "[Ar] 3d⁵", accepts: ["[Ar] 3d5", "[Ar] 3d⁵"], dCount: 5, s4Count: 0, unpaired: 5, valenceShell: 3, outerSublevelE: 5, outerSublevelName: "3d" },
  { label: "Co (Z = 27)", z: 27, q: 0, condensed: "[Ar] 3d⁷ 4s²", accepts: ["[Ar] 3d7 4s2", "[Ar] 4s2 3d7", "[Ar] 3d⁷ 4s²"], dCount: 7, s4Count: 2, unpaired: 3, valenceShell: 4, outerSublevelE: 7, outerSublevelName: "3d" },
  { label: "Co²⁺ (Z = 27)", z: 27, q: 2, condensed: "[Ar] 3d⁷", accepts: ["[Ar] 3d7", "[Ar] 3d⁷"], dCount: 7, s4Count: 0, unpaired: 3, valenceShell: 3, outerSublevelE: 7, outerSublevelName: "3d" },
  { label: "Co³⁺ (Z = 27)", z: 27, q: 3, condensed: "[Ar] 3d⁶", accepts: ["[Ar] 3d6", "[Ar] 3d⁶"], dCount: 6, s4Count: 0, unpaired: 4, valenceShell: 3, outerSublevelE: 6, outerSublevelName: "3d" },
  { label: "Ni (Z = 28)", z: 28, q: 0, condensed: "[Ar] 3d⁸ 4s²", accepts: ["[Ar] 3d8 4s2", "[Ar] 4s2 3d8", "[Ar] 3d⁸ 4s²"], dCount: 8, s4Count: 2, unpaired: 2, valenceShell: 4, outerSublevelE: 8, outerSublevelName: "3d" },
  { label: "Ni²⁺ (Z = 28)", z: 28, q: 2, condensed: "[Ar] 3d⁸", accepts: ["[Ar] 3d8", "[Ar] 3d⁸"], dCount: 8, s4Count: 0, unpaired: 2, valenceShell: 3, outerSublevelE: 8, outerSublevelName: "3d" },
  { label: "Cu (Z = 29)", z: 29, q: 0, condensed: "[Ar] 3d¹⁰ 4s¹", accepts: ["[Ar] 3d10 4s1", "[Ar] 4s1 3d10", "[Ar] 3d¹⁰ 4s¹"], dCount: 10, s4Count: 1, unpaired: 1, valenceShell: 4, outerSublevelE: 10, outerSublevelName: "3d" },
  { label: "Cu⁺ (Z = 29)", z: 29, q: 1, condensed: "[Ar] 3d¹⁰", accepts: ["[Ar] 3d10", "[Ar] 3d¹⁰"], dCount: 10, s4Count: 0, unpaired: 0, valenceShell: 3, outerSublevelE: 10, outerSublevelName: "3d" },
  { label: "Cu²⁺ (Z = 29)", z: 29, q: 2, condensed: "[Ar] 3d⁹", accepts: ["[Ar] 3d9", "[Ar] 3d⁹"], dCount: 9, s4Count: 0, unpaired: 1, valenceShell: 3, outerSublevelE: 9, outerSublevelName: "3d" },
  { label: "Zn (Z = 30)", z: 30, q: 0, condensed: "[Ar] 3d¹⁰ 4s²", accepts: ["[Ar] 3d10 4s2", "[Ar] 4s2 3d10", "[Ar] 3d¹⁰ 4s²"], dCount: 10, s4Count: 2, unpaired: 0, valenceShell: 4, outerSublevelE: 10, outerSublevelName: "3d" },
  { label: "Zn²⁺ (Z = 30)", z: 30, q: 2, condensed: "[Ar] 3d¹⁰", accepts: ["[Ar] 3d10", "[Ar] 3d¹⁰"], dCount: 10, s4Count: 0, unpaired: 0, valenceShell: 3, outerSublevelE: 10, outerSublevelName: "3d" },
];

const COMPOUNDS: readonly { formula: string; name: string; M: number }[] = [
  { formula: "H₂O", name: "water", M: 18.02 },
  { formula: "CO₂", name: "carbon dioxide", M: 44.01 },
  { formula: "NaCl", name: "sodium chloride", M: 58.44 },
  { formula: "NaOH", name: "sodium hydroxide", M: 40.00 },
  { formula: "CaCO₃", name: "calcium carbonate", M: 100.09 },
  { formula: "H₂SO₄", name: "sulfuric acid", M: 98.09 },
  { formula: "NH₃", name: "ammonia", M: 17.04 },
  { formula: "CH₄", name: "methane", M: 16.05 },
  { formula: "Na₂CO₃", name: "sodium carbonate", M: 105.99 },
  { formula: "MgO", name: "magnesium oxide", M: 40.31 },
  { formula: "HCl", name: "hydrogen chloride", M: 36.46 },
  { formula: "C₆H₁₂O₆", name: "glucose", M: 180.18 },
];

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: ISOTOPES, SUBATOMIC PARTICLES & RELATIVE ATOMIC MASS (Level 1 — SL)
  // ===========================================================================
  {
    id: "s1-particulate-matter.isotopes-ar",
    topicId: "s1-particulate-matter",
    title: "Subatomic Particles, Isotopes & Relative Atomic Mass",
    level: 1,
    ibLevel: "SL",
    guideRef: "particulate-nuclear-atom",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.75)) {
          const ion = rng.pick(ION_POOL);
          const ask = rng.pick(["protons", "neutrons", "electrons"] as const);
          const ans = ask === "protons" ? ion.z : ask === "neutrons" ? ion.a - ion.z : ion.z - ion.q;
          const traps: Trap[] = [];
          if (ask === "electrons") {
            safeTrap(traps, ans, 0, ion.z + ion.q, "Watch the sign of the ionic charge: cations LOSE electrons and anions GAIN electrons!");
            safeTrap(traps, ans, 0, ion.z, "Remember to adjust for the ionic charge — that is the electron count of a neutral atom.");
          } else if (ask === "neutrons") {
            safeTrap(traps, ans, 0, ion.a, "Mass number A is protons + neutrons — subtract Z to find neutrons.");
          }
          return {
            prompt: `How many **${ask}** are present in a single **${ion.name}** ion with mass number **${ion.a}**, atomic number **${ion.z}**, and symbol **${ion.symbol}${ion.chargeLabel}**?`,
            answer: { type: "number", value: ans, tolerance: 0, display: String(ans) },
            traps,
            hint: "Recall: protons = Z, neutrons = A − Z, electrons = Z − q (where q is the signed ionic charge).",
            solution: [
              `Given {{A = ${ion.a}}}, {{Z = ${ion.z}}}, charge {{q = ${ion.q > 0 ? "+" + ion.q : ion.q}}}.`,
              ask === "protons"
                ? `Protons = {{Z = ${ion.z}}}.`
                : ask === "neutrons"
                  ? `Neutrons = {{A - Z = ${ion.a} - ${ion.z} = ${ans}}}.`
                  : `Electrons = {{Z - q = ${ion.z} - (${ion.q}) = ${ans}}}.`,
            ],
          };
        }
        // Kelvin <-> Celsius
        const cTemp = rng.int(-80, 220);
        const kTemp = clean(cTemp + 273.15);
        if (rng.bool(0.5)) {
          const traps: Trap[] = [];
          safeTrap(traps, kTemp, 0.2, clean(cTemp - 273.15), "Add 273.15 to convert °C to K — never subtract!");
          return {
            prompt: `Convert **${num(cTemp)} °C** to kelvin using {{T(K) = t(°C) + 273.15}}. Give your answer to **2 decimal places**.`,
            answer: { type: "number", value: kTemp, tolerance: 0.2, display: `${kTemp.toFixed(2)} K` },
            traps,
            hint: "Add 273.15 to the Celsius value.",
            solution: [`{{T = ${num(cTemp)} + 273.15 = ${kTemp.toFixed(2)}}} K.`],
          };
        }
        const kGiven = rng.int(120, 650);
        const cAns = roundTo(kGiven - 273.15, 2);
        return {
          prompt: `Convert **${kGiven} K** to degrees Celsius using {{T(K) = t(°C) + 273.15}}. Give your answer to **2 decimal places**.`,
          answer: { type: "number", value: cAns, tolerance: 0.2, display: `${num(cAns)} °C` },
          hint: "Subtract 273.15 from the Kelvin temperature.",
          solution: [`{{t = ${kGiven} - 273.15 = ${num(cAns)}}} °C.`],
        };
      }

      if (tier === 2) {
        // Two-isotope A_r calculation
        const el = rng.pick([
          { sym: "B", m1: 10, m2: 11 },
          { sym: "Cl", m1: 35, m2: 37 },
          { sym: "Cu", m1: 63, m2: 65 },
          { sym: "Ga", m1: 69, m2: 71 },
          { sym: "Br", m1: 79, m2: 81 },
          { sym: "Rb", m1: 85, m2: 87 },
          { sym: "Ag", m1: 107, m2: 109 },
          { sym: "Sb", m1: 121, m2: 123 },
          { sym: "Re", m1: 185, m2: 187 },
          { sym: "Tl", m1: 203, m2: 205 },
        ]);
        const p1 = roundTo(rng.int(150, 850) / 10, 1);
        const p2 = roundTo(100 - p1, 1);
        const ar = roundTo((el.m1 * p1 + el.m2 * p2) / 100, 2);
        const swapped = roundTo((el.m1 * p2 + el.m2 * p1) / 100, 2);
        const traps: Trap[] = [];
        safeTrap(traps, ar, 0.02, swapped, "Check you multiplied each isotope mass by its OWN percentage abundance!");
        safeTrap(traps, ar, 0.02, roundTo((el.m1 + el.m2) / 2, 2), "Weight each mass by its abundance instead of taking a simple unweighted average.");
        return {
          prompt: `A sample of element **${el.sym}** contains **${num(p1)}%** of isotope **${el.m1}${el.sym}** and **${num(p2)}%** of isotope **${el.m2}${el.sym}**. Calculate its relative atomic mass ({{A_r}}) to **2 decimal places**.`,
          answer: { type: "number", value: ar, tolerance: 0.02, display: ar.toFixed(2) },
          traps,
          hint: "Compute A_r = [(m₁ × %₁) + (m₂ × %₂)] / 100.",
          solution: [
            `{{A_r = ((${el.m1} * ${num(p1)}) + (${el.m2} * ${num(p2)}))/100}}.`,
            `{{A_r = (${num(roundTo(el.m1 * p1, 2))} + ${num(roundTo(el.m2 * p2, 2))})/100 = ${ar.toFixed(2)}}}.`,
          ],
        };
      }

      // Tier 3: Reverse A_r OR non-percentage 3-isotope mass spectrum
      if (rng.bool(0.55)) {
        const el = rng.pick([
          { sym: "Cl", m1: 35, m2: 37 },
          { sym: "Cu", m1: 63, m2: 65 },
          { sym: "Ga", m1: 69, m2: 71 },
          { sym: "Br", m1: 79, m2: 81 },
          { sym: "Rb", m1: 85, m2: 87 },
          { sym: "Ag", m1: 107, m2: 109 },
          { sym: "Eu", m1: 151, m2: 153 },
        ]);
        const p1 = roundTo(rng.int(18, 82) + rng.pick([0, 0.5]), 1);
        const p2 = roundTo(100 - p1, 1);
        const ar = roundTo((el.m1 * p1 + el.m2 * p2) / 100, 3);
        const askLight = rng.bool(0.5);
        const ans = askLight ? p1 : p2;
        const other = askLight ? p2 : p1;
        const targetMass = askLight ? el.m1 : el.m2;
        const traps: Trap[] = [];
        safeTrap(traps, ans, 0.2, other, `That is the percentage of the OTHER isotope — re-read carefully: the question asks for ${targetMass}${el.sym}!`);
        return {
          prompt: `A sample of **${el.sym}** has relative atomic mass **${num(ar)}** and consists solely of **${el.m1}${el.sym}** and **${el.m2}${el.sym}**. Calculate the percentage abundance of **${targetMass}${el.sym}** to **1 decimal place**.`,
          answer: { type: "number", value: ans, tolerance: 0.2, display: `${num(ans)}%` },
          traps,
          hint: `Let x be the fractional abundance of ${el.m1}${el.sym} and (1 − x) that of ${el.m2}${el.sym}, then solve ${el.m1}x + ${el.m2}(1 − x) = ${num(ar)}.`,
          solution: [
            `Let {{x}} = fraction of ${el.m1}${el.sym}: {{${el.m1}x + ${el.m2}(1 - x) = ${num(ar)}}}.`,
            `{{${el.m2} - 2x = ${num(ar)}}} → {{x = ${num(roundTo(p1 / 100, 4))}}} (${num(p1)}% ${el.m1}${el.sym}, ${num(p2)}% ${el.m2}${el.sym}).`,
            `Percentage of **${targetMass}${el.sym}** = **${num(ans)}%**.`,
          ],
        };
      }

      // 3-isotope mass spectrum with non-percentage relative peak heights
      const base = rng.pick([20, 24, 28, 32, 36, 46, 54]);
      const h1 = 100;
      const h2 = rng.int(6, 38);
      const h3 = rng.int(5, 32);
      const totalH = h1 + h2 + h3;
      const weighted = base * h1 + (base + 1) * h2 + (base + 2) * h3;
      const ar = roundTo(weighted / totalH, 2);
      const wrong100 = roundTo(weighted / 100, 2);
      const traps: Trap[] = [];
      safeTrap(traps, ar, 0.02, wrong100, `The peak heights sum to ${totalH}, not 100 — divide by ${totalH}!`);
      return {
        prompt: `A mass spectrum of element X shows three isotope peaks with **relative peak heights** (not percentages): **${h1}** at m/z = ${base}, **${h2}** at m/z = ${base + 1}, and **${h3}** at m/z = ${base + 2}. Calculate {{A_r}} to **2 decimal places**.`,
        answer: { type: "number", value: ar, tolerance: 0.02, display: ar.toFixed(2) },
        traps,
        hint: `Sum the relative peak heights (${h1} + ${h2} + ${h3} = ${totalH}) and divide the weighted sum by that total.`,
        solution: [
          `Total relative height = {{${h1} + ${h2} + ${h3} = ${totalH}}}.`,
          `{{A_r = ((${base} * ${h1}) + (${base + 1} * ${h2}) + (${base + 2} * ${h3}))/${totalH} = ${weighted}/${totalH} = ${ar.toFixed(2)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: ELECTRON CONFIGURATIONS & ORBITAL OCCUPANCY (Level 1 — SL)
  // ===========================================================================
  {
    id: "s1-particulate-matter.electron-config",
    topicId: "s1-particulate-matter",
    title: "Electron Configurations, Unpaired Electrons & 3d Ions",
    level: 1,
    ibLevel: "SL",
    guideRef: "electron-configurations",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const sp = rng.pick(CONFIG_SL_POOL);
          return {
            prompt: `In a ground-state atom of **${sp.label}**, how many electrons occupy the **${sp.outerSublevelName}** sublevel?`,
            answer: { type: "number", value: sp.outerSublevelE, tolerance: 0, display: String(sp.outerSublevelE) },
            hint: `Write the ground-state condensed configuration of ${sp.label} first.`,
            solution: [
              `Ground-state configuration of ${sp.label}: **${sp.condensed}**.`,
              `Number of electrons in **${sp.outerSublevelName}** = **${sp.outerSublevelE}**.`,
            ],
          };
        }
        if (mode === 1) {
          const sp = rng.pick(CONFIG_SL_POOL);
          return {
            prompt: `How many **unpaired electrons** are present in a single ground-state atom of **${sp.label}**?`,
            answer: { type: "number", value: sp.unpaired, tolerance: 0, display: String(sp.unpaired) },
            hint: "Apply Hund's rule: fill degenerate p orbitals singly with parallel spins before pairing.",
            solution: [
              `Ground-state configuration of ${sp.label}: **${sp.condensed}**.`,
              `Applying Hund's rule to the valence sublevel gives **${sp.unpaired}** unpaired electron(s).`,
            ],
          };
        }
        // Main shell or sublevel capacity
        if (rng.bool(0.5)) {
          const n = rng.int(1, 5);
          const askOrbitals = rng.bool(0.5);
          const ans = askOrbitals ? n * n : 2 * n * n;
          return {
            prompt: askOrbitals
              ? `How many **individual atomic orbitals** exist in the **n = ${n}** main energy level?`
              : `What is the **maximum number of electrons** that can occupy the **n = ${n}** main energy level?`,
            answer: { type: "number", value: ans, tolerance: 0, display: String(ans) },
            hint: askOrbitals ? "Number of orbitals in main shell n equals n²." : "Maximum electrons in main shell n equals 2n².",
            solution: [
              askOrbitals
                ? `Number of orbitals = {{n^2 = ${n}^2 = ${ans}}}.`
                : `Maximum electrons = {{2n^2 = 2(${n})^2 = ${ans}}}.`,
            ],
          };
        }
        const sub = rng.pick([
          { name: "s", orb: 1, maxE: 2 },
          { name: "p", orb: 3, maxE: 6 },
          { name: "d", orb: 5, maxE: 10 },
          { name: "f", orb: 7, maxE: 14 },
        ]);
        const askOrb = rng.bool(0.5);
        const ans = askOrb ? sub.orb : sub.maxE;
        return {
          prompt: askOrb
            ? `How many **individual degenerate orbitals** make up any **${sub.name} sublevel**?`
            : `What is the **maximum number of electrons** that can occupy any **${sub.name} sublevel**?`,
          answer: { type: "number", value: ans, tolerance: 0, display: String(ans) },
          hint: "s, p, d, f have 1, 3, 5, 7 orbitals respectively, with max 2 electrons per orbital.",
          solution: [
            `A **${sub.name}** sublevel has **${sub.orb}** orbital(s) and holds up to **${sub.maxE}** electrons.`,
          ],
        };
      }

      if (tier === 2) {
        const sp = rng.pick(CONFIG_D_BLOCK);
        const ask = rng.pick(["dCount", "unpaired", "paired3d"] as const);
        if (ask === "dCount") {
          return {
            prompt: `How many electrons occupy the **3d sublevel** in ground-state **${sp.label}**?`,
            answer: { type: "number", value: sp.dCount, tolerance: 0, display: String(sp.dCount) },
            hint: "Remember Cr ([Ar] 3d⁵ 4s¹), Cu ([Ar] 3d¹⁰ 4s¹), and ALWAYS remove 4s electrons before 3d when forming cations!",
            solution: [
              `Condensed configuration of **${sp.label}**: **${sp.condensed}**.`,
              `Number of 3d electrons = **${sp.dCount}**.`,
            ],
          };
        }
        if (ask === "unpaired") {
          return {
            prompt: `How many **unpaired electrons** are present in ground-state **${sp.label}**?`,
            answer: { type: "number", value: sp.unpaired, tolerance: 0, display: String(sp.unpaired) },
            hint: "Write the condensed configuration first (removing 4s before 3d for cations), then apply Hund's rule across the five 3d orbitals (and check 4s¹ for Cr/Cu!).",
            solution: [
              `Condensed configuration of **${sp.label}**: **${sp.condensed}**.`,
              `Distributing electrons via Hund's rule gives **${sp.unpaired}** unpaired electron(s).`,
            ],
          };
        }
        const paired3d = Math.max(0, sp.dCount - 5);
        return {
          prompt: `How many **fully occupied (paired) 3d orbitals** are present in ground-state **${sp.label}**?`,
          answer: { type: "number", value: paired3d, tolerance: 0, display: String(paired3d) },
          hint: "There are five 3d orbitals. Electrons only start pairing once 5 electrons have filled all five orbitals singly (so paired 3d orbitals = max(0, d − 5)).",
          solution: [
            `Condensed configuration of **${sp.label}**: **${sp.condensed}** (${sp.dCount} electrons in 3d).`,
            `First 5 electrons enter separate 3d orbitals; the remaining ${paired3d} pair up → **${paired3d}** paired 3d orbital(s).`,
          ],
        };
      }

      // Tier 3: Condensed configuration text typing OR total electrons across all 3d/4s + ions
      const allPool = [...CONFIG_D_BLOCK, ...CONFIG_SL_POOL.slice(8)];
      const sp = rng.pick(allPool);
      if (rng.bool(0.6)) {
        return {
          prompt: `Write the **condensed (noble-gas core) ground-state electron configuration** of **${sp.label}** (use plain ASCII, e.g. [Ne] 3s2 3p1).`,
          answer: { type: "text", accept: sp.accepts, display: sp.condensed },
          hint: "Use [He], [Ne], or [Ar] for the noble-gas core; remember Cr/Cu exceptions and remove 4s before 3d for cations.",
          solution: [
            `Total electrons = {{${sp.z} - (${sp.q}) = ${sp.z - sp.q}}}.`,
            `Condensed ground-state configuration: **${sp.condensed}**.`,
          ],
        };
      }
      const totalE = sp.z - sp.q;
      const ask4s = rng.bool(0.5);
      const ans = ask4s ? sp.s4Count : totalE;
      return {
        prompt: ask4s
          ? `How many electrons occupy the **4s sublevel** in ground-state **${sp.label}**?`
          : `What is the **total number of electrons** present in a single **${sp.label}** species?`,
        answer: { type: "number", value: ans, tolerance: 0, display: String(ans) },
        hint: ask4s ? "Neutral Cr and Cu have 4s¹; ALL transition-metal cations (+1, +2, +3) lose 4s electrons FIRST!" : "Total electrons = Z − charge.",
        solution: [
          `Configuration of **${sp.label}**: **${sp.condensed}** (total electrons = ${totalE}).`,
          ask4s ? `Electrons in 4s = **${sp.s4Count}**.` : `Total electrons = **${totalE}**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: MOLE, SOLUTIONS & IDEAL GAS CALCULATIONS (Level 2 — SL)
  // ===========================================================================
  {
    id: "s1-particulate-matter.mole-gas",
    topicId: "s1-particulate-matter",
    title: "Mole Conversions, Dilutions & Ideal Gas Law (pV = nRT)",
    level: 2,
    ibLevel: "SL",
    guideRef: "mole-ideal-gases",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const cmp = rng.pick(COMPOUNDS);
          const n = roundTo(rng.int(2, 45) / 20, 2); // 0.10 to 2.25
          const m = roundTo(n * cmp.M, 2);
          if (rng.bool(0.5)) {
            const traps: Trap[] = [];
            safeTrap(traps, m, 0.1, roundTo(cmp.M / n, 2), "Multiply moles by molar mass: m = n × M.");
            return {
              prompt: `Calculate the mass in **grams** (to **2 decimal places**) of **${num(n)} mol** of ${cmp.name}, ${cmp.formula} ({{M = ${num(cmp.M)}}} g mol⁻¹).`,
              answer: { type: "number", value: m, tolerance: Math.max(0.05, roundTo(0.008 * m, 2)), display: `${m.toFixed(2)} g` },
              traps,
              hint: "Use m = n × M.",
              solution: [`{{m = n * M = ${num(n)} * ${num(cmp.M)} = ${m.toFixed(2)}}} g.`],
            };
          }
          const nCalc = roundTo(m / cmp.M, 3);
          return {
            prompt: `Calculate the amount in **moles** (to **3 decimal places**) present in **${m.toFixed(2)} g** of ${cmp.name}, ${cmp.formula} ({{M = ${num(cmp.M)}}} g mol⁻¹).`,
            answer: { type: "number", value: nCalc, tolerance: 0.006, display: `${nCalc.toFixed(3)} mol` },
            hint: "Use n = m / M.",
            solution: [`{{n = m/M = ${m.toFixed(2)}/${num(cmp.M)} = ${nCalc.toFixed(3)}}} mol.`],
          };
        }
        if (mode === 1) {
          // STP gas volume
          const n = roundTo(rng.int(3, 60) / 20, 2); // 0.15 to 3.00
          const v = roundTo(n * V_STP, 2);
          const traps: Trap[] = [];
          safeTrap(traps, v, 0.1, roundTo(n * 22.4, 2), "IB STP (273 K, 100 kPa) uses V_m = 22.7 dm³ mol⁻¹, NOT 22.4 dm³ mol⁻¹!");
          return {
            prompt: `Calculate the volume in **dm³** (to **2 decimal places**) occupied by **${num(n)} mol** of an ideal gas at IB STP (273 K, 100 kPa; {{V_m = 22.7}} dm³ mol⁻¹).`,
            answer: { type: "number", value: v, tolerance: Math.max(0.05, roundTo(0.008 * v, 2)), display: `${v.toFixed(2)} dm³` },
            traps,
            hint: "Multiply moles by 22.7 dm³ mol⁻¹.",
            solution: [`{{V = n * V_m = ${num(n)} * 22.7 = ${v.toFixed(2)}}} dm³.`],
          };
        }
        // Molarity c = n / V (with cm3 -> dm3 conversion)
        const vCm3 = rng.pick([50, 100, 125, 200, 250, 400, 500, 750, 800]);
        const c = roundTo(rng.int(4, 40) / 20, 2); // 0.20 to 2.00
        const n = roundTo((c * vCm3) / 1000, 4);
        const traps: Trap[] = [];
        safeTrap(traps, c, 0.02, roundTo(n / vCm3, 5), "Convert cm³ to dm³ by dividing by 1000 before computing c = n / V!");
        return {
          prompt: `A solution is prepared by dissolving **${num(n)} mol** of solute in distilled water to make **${vCm3} cm³** of solution. Calculate its molar concentration in **mol dm⁻³** (to **2 decimal places**).`,
          answer: { type: "number", value: c, tolerance: 0.02, display: `${c.toFixed(2)} mol dm⁻³` },
          traps,
          hint: "Convert volume from cm³ to dm³ (÷ 1000), then compute c = n / V.",
          solution: [
            `{{V = ${vCm3}/1000 = ${num(vCm3 / 1000)}}} dm³.`,
            `{{c = n/V = ${num(n)}/${num(vCm3 / 1000)} = ${c.toFixed(2)}}} mol dm⁻³.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          // Dilution: ask either c2 or water added V2 - V1
          const v1 = rng.pick([20, 25, 40, 50, 60, 75, 80]);
          const factor = rng.pick([2, 4, 5, 8, 10]);
          const v2 = v1 * factor;
          const c2 = roundTo(rng.int(2, 16) / 20, 2); // 0.10 to 0.80
          const c1 = roundTo(c2 * factor, 2);
          const water = v2 - v1;
          if (rng.bool(0.5)) {
            const traps: Trap[] = [];
            safeTrap(traps, water, 0.5, v2, `${v2} cm³ is the FINAL TOTAL volume V₂ — subtract the starting ${v1} cm³ to get the volume of water ADDED!`);
            return {
              prompt: `What volume of **distilled water (in cm³)** must be **added** to **${v1} cm³** of **${c1.toFixed(2)} mol dm⁻³** HCl(aq) to dilute it to **${c2.toFixed(2)} mol dm⁻³**? (Assume volumes are additive.)`,
              answer: { type: "number", value: water, tolerance: 0.5, display: `${water} cm³` },
              traps,
              hint: "Use c₁V₁ = c₂V₂ to find total final volume V₂, then subtract V₁.",
              solution: [
                `{{V_2 = (c_1 V_1)/c_2 = (${c1.toFixed(2)} * ${v1})/${c2.toFixed(2)} = ${v2}}} cm³.`,
                `Water added = {{V_2 - V_1 = ${v2} - ${v1} = ${water}}} cm³.`,
              ],
            };
          }
          return {
            prompt: `A **${v1} cm³** sample of **${c1.toFixed(2)} mol dm⁻³** NaOH(aq) is diluted with water to a total volume of **${v2} cm³**. Calculate the final concentration in **mol dm⁻³** (to **2 decimal places**).`,
            answer: { type: "number", value: c2, tolerance: 0.01, display: `${c2.toFixed(2)} mol dm⁻³` },
            hint: "Use c₂ = (c₁V₁) / V₂.",
            solution: [`{{c_2 = (${c1.toFixed(2)} * ${v1})/${v2} = ${c2.toFixed(2)}}} mol dm⁻³.`],
          };
        }
        if (mode === 1) {
          // Ideal gas equation pV = nRT (kPa, dm3, K)
          const n = roundTo(rng.int(2, 24) / 10, 1); // 0.2 to 2.4
          const tK = rng.int(260, 420);
          const v = roundTo(rng.int(15, 90) / 10, 1); // 1.5 to 9.0 dm3
          const p = roundTo((n * R_GAS * tK) / v, 1);
          return {
            prompt: `Calculate the pressure in **kPa** (to **1 decimal place**) exerted by **${num(n)} mol** of an ideal gas confined in a **${num(v)} dm³** flask at **${tK} K** (use {{R = 8.31}} J K⁻¹ mol⁻¹).`,
            answer: { type: "number", value: p, tolerance: Math.max(0.5, roundTo(0.01 * p, 1)), display: `${p.toFixed(1)} kPa` },
            hint: "Use p = (nRT)/V. With R = 8.31 J K⁻¹ mol⁻¹, pairing V in dm³ gives p directly in kPa!",
            solution: [
              `Consistent units: {{V = ${num(v)}}} dm³ → {{p}} directly in kPa.`,
              `{{p = (nRT)/V = (${num(n)} * 8.31 * ${tK})/${num(v)} = ${p.toFixed(1)}}} kPa.`,
            ],
          };
        }
        // Ion molarity in salt solution
        const salt = rng.pick([
          { formula: "CaCl₂", ion: "Cl⁻", mult: 2 },
          { formula: "FeCl₃", ion: "Cl⁻", mult: 3 },
          { formula: "Na₂SO₄", ion: "Na⁺", mult: 2 },
          { formula: "K₃PO₄", ion: "K⁺", mult: 3 },
          { formula: "Al₂(SO₄)₃", ion: "SO₄²⁻", mult: 3 },
          { formula: "Mg(NO₃)₂", ion: "NO₃⁻", mult: 2 },
        ]);
        const vCm3 = rng.pick([100, 200, 250, 400, 500]);
        const cSalt = roundTo(rng.int(2, 16) / 20, 2);
        const nSalt = roundTo((cSalt * vCm3) / 1000, 4);
        const cIon = roundTo(cSalt * salt.mult, 2);
        const traps: Trap[] = [];
        safeTrap(traps, cIon, 0.02, cSalt, `That is the concentration of ${salt.formula} — multiply by ${salt.mult} for [${salt.ion}]!`);
        return {
          prompt: `A solution contains **${num(nSalt)} mol** of completely dissociated **${salt.formula}** in **${vCm3} cm³** of aqueous solution. Calculate the molar concentration of **${salt.ion}(aq)** ions in **mol dm⁻³** (to **2 decimal places**).`,
          answer: { type: "number", value: cIon, tolerance: 0.02, display: `${cIon.toFixed(2)} mol dm⁻³` },
          traps,
          hint: `Find [${salt.formula}] = n / V (with V in dm³), then multiply by ${salt.mult} because each formula unit releases ${salt.mult} ${salt.ion} ions.`,
          solution: [
            `{{[${salt.formula}] = ${num(nSalt)}/${num(vCm3 / 1000)} = ${cSalt.toFixed(2)}}} mol dm⁻³.`,
            `{{[${salt.ion}] = ${salt.mult} * ${cSalt.toFixed(2)} = ${cIon.toFixed(2)}}} mol dm⁻³.`,
          ],
        };
      }

      // Tier 3: M = mRT/(pV) OR Combined Gas Law with °C
      if (rng.bool(0.5)) {
        const mTrue = rng.pick([28.0, 32.0, 44.0, 46.1, 58.1, 64.1, 72.1, 78.1, 86.2, 92.1]);
        const vCm3 = rng.pick([250, 300, 350, 400, 450, 500, 600]);
        const tC = rng.pick([25, 50, 75, 100, 120, 127]);
        const tK = clean(tC + 273);
        const pKpa = rng.pick([95, 100, 105, 110, 120]);
        const n = (pKpa * (vCm3 / 1000)) / (R_GAS * tK);
        const mass = roundTo(n * mTrue, 3);
        const mAns = roundTo((mass * R_GAS * tK) / (pKpa * (vCm3 / 1000)), 1);
        const traps: Trap[] = [];
        safeTrap(traps, mAns, 0.5, roundTo(mAns / 1000, 3), "Convert cm³ to dm³ (÷ 1000) when pressure is in kPa!");
        return {
          prompt: `A **${mass.toFixed(3)} g** sample of a volatile liquid vaporizes completely to occupy **${vCm3} cm³** at **${tC} °C** (use {{T(K) = t(°C) + 273}}) and **${pKpa} kPa** ({{R = 8.31}} J K⁻¹ mol⁻¹). Calculate its molar mass in **g mol⁻¹** to **1 decimal place**.`,
          answer: { type: "number", value: mAns, tolerance: 0.6, display: `${mAns.toFixed(1)} g mol⁻¹` },
          traps,
          hint: "Convert V to dm³ (÷ 1000) and T to kelvin (+ 273), then compute M = (mRT) / (pV).",
          solution: [
            `{{V = ${num(vCm3 / 1000)}}} dm³, {{T = ${tC} + 273 = ${tK}}} K, {{p = ${pKpa}}} kPa.`,
            `{{M = (mRT)/(pV) = (${mass.toFixed(3)} * 8.31 * ${tK})/(${pKpa} * ${num(vCm3 / 1000)}) = ${mAns.toFixed(1)}}} g mol⁻¹.`,
          ],
        };
      }

      // Combined gas law with Celsius temperatures
      const v1 = roundTo(rng.int(15, 60) / 10, 1);
      const p1 = rng.pick([80, 90, 100, 110, 120, 150]);
      const p2 = rng.pick([60, 75, 100, 125, 150, 200, 240]);
      const t1C = rng.pick([-23, 7, 17, 27, 47, 77]);
      const t2C = rng.pick([-13, 27, 57, 87, 127, 177, 227]);
      const t1K = t1C + 273;
      const t2K = t2C + 273;
      const v2 = roundTo(v1 * (p1 / p2) * (t2K / t1K), 2);
      return {
        prompt: `A fixed sample of ideal gas occupies **${num(v1)} dm³** at **${num(t1C)} °C** and **${p1} kPa**. Calculate its new volume in **dm³** (to **2 decimal places**) at **${num(t2C)} °C** and **${p2} kPa** (use {{T(K) = t(°C) + 273}}).`,
        answer: { type: "number", value: v2, tolerance: Math.max(0.05, roundTo(0.01 * v2, 2)), display: `${v2.toFixed(2)} dm³` },
        hint: "Convert BOTH temperatures to kelvin first, then apply V₂ = V₁ × (p₁/p₂) × (T₂/T₁).",
        solution: [
          `{{T_1 = ${num(t1C)} + 273 = ${t1K}}} K; {{T_2 = ${num(t2C)} + 273 = ${t2K}}} K.`,
          `{{V_2 = ${num(v1)} * (${p1}/${p2}) * (${t2K}/${t1K}) = ${v2.toFixed(2)}}} dm³.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: PHOTON ENERGY, CONVERGENCE LIMIT & SUCCESSIVE IE (Level 3 — HL)
  // ===========================================================================
  {
    id: "s1-particulate-matter.photon-ie-hl",
    topicId: "s1-particulate-matter",
    title: "Photon Energy, Convergence Limits & Successive IE [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "ionization-energy-hl",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.5)) {
          // Given frequency f in 10^14 s^-1, compute molar energy in kJ mol^-1
          const fMant = roundTo(rng.int(25, 95) / 10, 1); // 2.5 to 9.5
          const exp = rng.pick([14, 15]);
          const f = fMant * Math.pow(10, exp);
          const eMol = roundTo((H_PLANCK * f * N_A) / 1000, 1);
          const traps: Trap[] = [];
          safeTrap(traps, eMol, 2, roundTo(eMol * 1000, 0), "Divide J mol⁻¹ by 1000 to convert to kJ mol⁻¹!");
          return {
            prompt: `Photons in an atomic spectrum have frequency **{{${num(fMant)} * 10^{${exp}}}} s⁻¹**. Using {{h = 6.63 * 10^(-34)}} J s and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the molar photon energy in **kJ mol⁻¹** to **1 decimal place**.`,
            answer: { type: "number", value: eMol, tolerance: Math.max(1.5, roundTo(0.01 * eMol, 1)), display: `${eMol.toFixed(1)} kJ mol⁻¹` },
            traps,
            hint: "Use E_mol = (h × f × N_A) / 1000.",
            solution: [
              `Single photon: {{E = hf = (6.63 * 10^(-34)) * (${num(fMant)} * 10^{${exp}}) = ${roundTo(H_PLANCK * f * 1e19, 3)} * 10^(-19)}} J.`,
              `Molar energy: {{E_{mol} = (E * 6.02 * 10^{23})/1000 = ${eMol.toFixed(1)}}} kJ mol⁻¹.`,
            ],
          };
        }
        // Given wavelength in nm, compute molar energy in kJ mol^-1
        const lamNm = rng.int(110, 680);
        const eMol = roundTo(((H_PLANCK * C_LIGHT) / (lamNm * 1e-9)) * N_A / 1000, 1);
        return {
          prompt: `An emission line has wavelength **${lamNm} nm**. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the molar energy of these photons in **kJ mol⁻¹** to **1 decimal place**.`,
          answer: { type: "number", value: eMol, tolerance: Math.max(1.5, roundTo(0.01 * eMol, 1)), display: `${eMol.toFixed(1)} kJ mol⁻¹` },
          hint: "Convert wavelength to metres (× 10⁻⁹), then compute E_mol = (h × c × N_A) / (1000 × λ).",
          solution: [
            `{{λ = ${lamNm} * 10^(-9)}} m.`,
            `{{E_{mol} = (6.63 * 10^(-34) * 3.00 * 10^8 * 6.02 * 10^{23})/(1000 * ${lamNm} * 10^(-9)) = ${eMol.toFixed(1)}}} kJ mol⁻¹.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          // Given convergence wavelength (nm) -> IE1 in kJ mol^-1
          const lamNm = roundTo(rng.int(750, 3200) / 10, 1); // 75.0 to 320.0 nm
          const ie = roundTo(((H_PLANCK * C_LIGHT) / (lamNm * 1e-9)) * N_A / 1000, 0);
          return {
            prompt: `The ground-state ionization convergence limit of a gaseous element occurs at wavelength **${lamNm.toFixed(1)} nm**. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate its first ionization energy in **kJ mol⁻¹** to the **nearest whole number**.`,
            answer: { type: "number", value: ie, tolerance: Math.max(4, roundTo(0.01 * ie, 0)), display: `${ie} kJ mol⁻¹` },
            hint: "Compute E = hc/λ (with λ in metres), multiply by N_A, and divide by 1000.",
            solution: [
              `{{λ = ${lamNm.toFixed(1)} * 10^(-9)}} m.`,
              `{{IE_1 = (6.63 * 10^(-34) * 3.00 * 10^8 * 6.02 * 10^{23})/(1000 * ${lamNm.toFixed(1)} * 10^(-9)) = ${ie}}} kJ mol⁻¹.`,
            ],
          };
        }
        // Inverse: Given IE1 (kJ mol^-1) -> threshold wavelength in nm
        const ie = rng.int(42, 210) * 10; // 420 to 2100 kJ mol^-1
        const lamNm = roundTo(((H_PLANCK * C_LIGHT * N_A) / (ie * 1000)) * 1e9, 1);
        const traps: Trap[] = [];
        safeTrap(traps, lamNm, 1, roundTo(lamNm / 1000, 3), "Remember to multiply IE₁ (in kJ mol⁻¹) by 1000 to convert to J mol⁻¹ before finding λ!");
        return {
          prompt: `A gaseous element has a first ionization energy of **${ie} kJ mol⁻¹**. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the convergence-limit wavelength in **nm** to **1 decimal place**.`,
          answer: { type: "number", value: lamNm, tolerance: Math.max(1.0, roundTo(0.01 * lamNm, 1)), display: `${lamNm.toFixed(1)} nm` },
          traps,
          hint: "Convert kJ mol⁻¹ to J per atom via E = (IE₁ × 1000) / N_A, then compute λ = hc/E and convert m to nm (× 10⁹).",
          solution: [
            `Single-atom energy: {{E = (${ie} * 1000)/(6.02 * 10^{23}) = ${roundTo((ie * 1000 / N_A) * 1e19, 3)} * 10^(-19)}} J.`,
            `{{λ = (hc)/E = ${lamNm.toFixed(1)}}} nm.`,
          ],
        };
      }

      // Tier 3: Successive IE table -> IUPAC Group number OR two-transition energy addition
      if (rng.bool(0.55)) {
        const valence = rng.pick([1, 2, 3, 4, 5]);
        const group = valence <= 2 ? valence : valence + 10;
        const elemLabel = rng.pick(["E", "G", "J", "M", "Q", "R", "T", "X", "Y", "Z"]);
        const ies: number[] = [];
        let cur = rng.int(420, 980);
        ies.push(cur);
        for (let k = 2; k <= 6; k++) {
          if (k === valence + 1) {
            cur = Math.round(cur * (rng.int(42, 68) / 10));
          } else {
            cur = Math.round(cur * (rng.int(14, 21) / 10));
          }
          ies.push(cur);
        }
        const traps: Trap[] = [];
        if (valence >= 3) {
          safeTrap(traps, group, 0, valence, `${valence} is the number of valence electrons — main-group p-block elements use IUPAC Groups 13–18 (so Group ${group})!`);
        }
        return {
          prompt: `The first six successive ionization energies (in kJ mol⁻¹) of main-group Period 3 element **${elemLabel}** are: **${ies.join(", ")}**. Deduce the **IUPAC group number** (1–18) of **${elemLabel}**.`,
          answer: { type: "number", value: group, tolerance: 0, display: String(group) },
          traps,
          hint: "Locate the largest multiplicative jump (4×–7×). The number of electrons removed BEFORE that jump equals the valence electron count.",
          solution: [
            `The huge jump occurs between {{IE_${valence}}} (${ies[valence - 1]}) and {{IE_${valence + 1}}} (${ies[valence]}), showing **${valence}** valence electron(s).`,
            `In IUPAC numbering (1–18), a main-group Period 3 element with ${valence} valence electron(s) is in **Group ${group}**.`,
          ],
        };
      }

      // Stacked spectral transitions: E_total = hc/lam1 + hc/lam2 (kJ mol^-1)
      const lam1 = rng.int(115, 195); // UV lower jump
      const lam2 = rng.int(340, 660); // visible/near-UV upper jump
      const e1 = ((H_PLANCK * C_LIGHT) / (lam1 * 1e-9)) * N_A / 1000;
      const e2 = ((H_PLANCK * C_LIGHT) / (lam2 * 1e-9)) * N_A / 1000;
      const eTotal = roundTo(e1 + e2, 0);
      const wrongAddLam = roundTo(((H_PLANCK * C_LIGHT) / ((lam1 + lam2) * 1e-9)) * N_A / 1000, 0);
      const traps: Trap[] = [];
      safeTrap(traps, eTotal, 5, wrongAddLam, "Never add wavelengths directly — convert EACH wavelength to energy first, then add the two energies!");
      return {
        prompt: `In a gaseous atom, transition {{n = 2 → 1}} emits wavelength **${lam1} nm** and the convergence limit {{n = ∞ → 2}} occurs at **${lam2} nm**. Using {{h = 6.63 * 10^(-34)}} J s, {{c = 3.00 * 10^8}} m s⁻¹ and {{N_A = 6.02 * 10^{23}}} mol⁻¹, calculate the first ionization energy ({{n = 1 → ∞}}) in **kJ mol⁻¹** to the **nearest whole number**.`,
        answer: { type: "number", value: eTotal, tolerance: Math.max(5, roundTo(0.01 * eTotal, 0)), display: `${eTotal} kJ mol⁻¹` },
        traps,
        hint: "Add the two molar photon energies separately: IE₁ = E(n = 2 → 1) + E(n = ∞ → 2).",
        solution: [
          `{{E(2 → 1) = ${roundTo(e1, 1)}}} kJ mol⁻¹; {{E(∞ → 2) = ${roundTo(e2, 1)}}} kJ mol⁻¹.`,
          `Total {{IE_1 = ${roundTo(e1, 1)} + ${roundTo(e2, 1)} = ${eTotal}}} kJ mol⁻¹.`,
        ],
      };
    },
  },
];
