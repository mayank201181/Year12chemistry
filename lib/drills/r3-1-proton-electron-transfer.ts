import type { Drill, DrillItem, Rng } from "./types.ts";
import { clean, lcm, num, roundTo } from "./helpers.ts";

function fmtDp(x: number, dp: number): string {
  const r = roundTo(x, dp);
  return r.toFixed(dp).replace(/^-/, "−");
}

function fmtSci(mantissa: number, exp: number): string {
  const m = clean(mantissa, 4);
  const expStr = String(exp).replace("-", "−").split("").map((ch) => {
    const map: Record<string, string> = {
      "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
      "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "−": "⁻",
    };
    return map[ch] ?? ch;
  }).join("");
  return `${m.toFixed(2)} × 10${expStr}`;
}

function fmtSmall(x: number): string {
  const ax = Math.abs(x);
  if (ax === 0) return "0";
  if (ax < 1e-2) {
    const exp = Math.floor(Math.log10(ax));
    const mant = x / Math.pow(10, exp);
    return fmtSci(mant, exp);
  }
  return String(roundTo(x, 4));
}

// =============================================================================
// DRILL 1 (SL, level 1): Strong Acid/Base pH, pOH & Mixing
// =============================================================================
const strongPhPohDrill: Drill = {
  id: "r3-1-proton-electron-transfer.strong-ph-poh",
  topicId: "r3-1-proton-electron-transfer",
  title: "Strong Acid/Base pH, pOH & Neutralisation Mixtures",
  level: 1,
  ibLevel: "SL",
  guideRef: "bronsted-ph-strong-weak",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const mode = rng.int(0, 2);
      const mantissas = [1.0, 1.25, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.5, 8.0, 9.0];
      const m = rng.pick(mantissas);
      const exp = rng.int(1, 4);
      const c = clean(m * Math.pow(10, -exp), 6);
      const cDisp = fmtSci(m, -exp);

      if (mode === 0) {
        const acid = rng.pick(["HCl", "HNO₃", "HBr", "HClO₄"]);
        const ph = roundTo(-Math.log10(c), 2);
        return {
          prompt: `Calculate the pH of a ${cDisp} mol dm⁻³ aqueous solution of the strong monoprotic acid ${acid}(aq) at 298 K. Give your answer to 2 decimal places.`,
          answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
          hint: "For a strong monoprotic acid, [H⁺] equals the acid concentration; compute −log₁₀[H⁺].",
          solution: [
            `${acid} dissociates completely, so [H⁺] = ${cDisp} mol dm⁻³.`,
            `pH = −log₁₀(${cDisp}) = ${fmtDp(ph, 2)}.`,
          ],
        };
      }
      if (mode === 1) {
        const base = rng.pick(["NaOH", "KOH", "LiOH"]);
        const poh = roundTo(-Math.log10(c), 2);
        const ph = roundTo(14 - poh, 2);
        const traps = Math.abs(poh - ph) > 0.1
          ? [{ spec: { type: "number" as const, value: poh, tolerance: 0.02 }, feedback: `${fmtDp(poh, 2)} is the pOH — subtract from 14.00 at 298 K to get pH!` }]
          : undefined;
        return {
          prompt: `Calculate the pH of a ${cDisp} mol dm⁻³ aqueous solution of the strong base ${base}(aq) at 298 K (K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.`,
          answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
          traps,
          hint: "Find pOH = −log₁₀[OH⁻] first, then subtract from 14.00.",
          solution: [
            `${base} dissociates completely, so [OH⁻] = ${cDisp} mol dm⁻³.`,
            `pOH = −log₁₀(${cDisp}) = ${fmtDp(poh, 2)}.`,
            `pH = 14.00 − ${fmtDp(poh, 2)} = ${fmtDp(ph, 2)}.`,
          ],
        };
      }
      // pOH to pH direct conversion
      const pohVal = roundTo(rng.int(12, 128) / 10, 2);
      const phVal = roundTo(14 - pohVal, 2);
      return {
        prompt: `An aqueous solution at 298 K (K_w = 1.00 × 10⁻¹⁴) has pOH = ${fmtDp(pohVal, 2)}. Calculate its pH to 2 decimal places.`,
        answer: { type: "number", value: phVal, tolerance: 0.02, display: fmtDp(phVal, 2) },
        hint: "At 298 K, pH + pOH = 14.00.",
        solution: [
          `At 298 K, pH = 14.00 − pOH = 14.00 − ${fmtDp(pohVal, 2)} = ${fmtDp(phVal, 2)}.`,
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.int(0, 1);
      if (mode === 0) {
        // Strong diprotic base Ba(OH)2
        const m = rng.pick([1.0, 1.2, 1.5, 1.8, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.5, 8.0]);
        const exp = rng.int(2, 4);
        const c = clean(m * Math.pow(10, -exp), 6);
        const oh = clean(2 * c, 6);
        const poh = roundTo(-Math.log10(oh), 3);
        const ph = roundTo(14 - poh, 2);
        const trapNoDouble = roundTo(14 + Math.log10(c), 2);
        const cDisp = fmtSci(m, -exp);
        return {
          prompt: `Calculate the pH of a ${cDisp} mol dm⁻³ aqueous solution of barium hydroxide, Ba(OH)₂(aq), at 298 K (K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.`,
          answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
          traps: [
            {
              spec: { type: "number", value: trapNoDouble, tolerance: 0.02 },
              feedback: "Ba(OH)₂ releases 2 mol OH⁻ per mole of base — multiply the concentration by 2 first!",
            },
          ],
          hint: "Write Ba(OH)₂ → Ba²⁺ + 2OH⁻ so [OH⁻] = 2 × [Ba(OH)₂].",
          solution: [
            `[OH⁻] = 2 × ${cDisp} = ${fmtSci(clean(m * 2, 4), -exp)} mol dm⁻³.`,
            `pOH = −log₁₀([OH⁻]) = ${fmtDp(poh, 3)}.`,
            `pH = 14.00 − ${fmtDp(poh, 3)} = ${fmtDp(ph, 2)}.`,
          ],
        };
      }
      // Temperature-dependent neutral pH of pure water
      const kwMant = rng.int(15, 95) / 10;
      const kwExp = rng.pick([-14, -13]);
      const kw = clean(kwMant * Math.pow(10, kwExp), 6);
      const h = Math.sqrt(kw);
      const ph = roundTo(-Math.log10(h), 2);
      const tempK = kwExp === -14 ? rng.int(303, 333) : rng.int(340, 373);
      return {
        prompt: `At ${tempK} K, the ionic product of water is K_w = ${fmtSci(kwMant, kwExp)}. Calculate the pH of neutral pure water at ${tempK} K to 2 decimal places.`,
        answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
        hint: "In neutral pure water, [H⁺] = [OH⁻], so [H⁺] = √K_w.",
        solution: [
          `In pure water, [H⁺] = [OH⁻] = √K_w = √(${fmtSci(kwMant, kwExp)}).`,
          `pH = −log₁₀(√K_w) = −{{1/2}} log₁₀(K_w) = ${fmtDp(ph, 2)}.`,
        ],
      };
    }

    // Tier 3: Mixing strong acid + strong base (excess H+ or excess OH-)
    const acid = rng.pick(["HCl", "HNO₃"]);
    const base = rng.pick(["NaOH", "KOH"]);
    const va = rng.pick([15, 20, 25, 30, 35, 40, 50]);
    const vb = rng.pick([15, 20, 25, 30, 35, 40, 50]);
    const ca = roundTo(rng.int(10, 40) / 100, 2);
    let cb = roundTo(rng.int(10, 40) / 100, 2);
    // Avoid exact neutralisation or tiny residuals < 0.005 mol dm-3
    const na = clean((va / 1000) * ca, 6);
    let nb = clean((vb / 1000) * cb, 6);
    const vTot = clean((va + vb) / 1000, 6);
    if (Math.abs(na - nb) / vTot < 0.005) {
      cb = roundTo(ca + 0.12, 2);
      nb = clean((vb / 1000) * cb, 6);
    }
    const diff = clean(Math.abs(na - nb), 6);
    const excessConc = clean(diff / vTot, 6);
    let ph: number;
    let excessSpecies: string;
    if (na > nb) {
      ph = roundTo(-Math.log10(excessConc), 2);
      excessSpecies = "H⁺";
    } else {
      const poh = -Math.log10(excessConc);
      ph = roundTo(14 - poh, 2);
      excessSpecies = "OH⁻";
    }
    const solSteps = na > nb
      ? [
          `n(H⁺) = ${clean(va / 1000, 4)} × ${ca.toFixed(2)} = ${roundTo(na, 5)} mol; n(OH⁻) = ${clean(vb / 1000, 4)} × ${cb.toFixed(2)} = ${roundTo(nb, 5)} mol.`,
          `Excess n(H⁺) = ${roundTo(diff, 5)} mol in total volume ${roundTo(vTot, 4)} dm³ → [H⁺] = ${roundTo(excessConc, 4)} mol dm⁻³.`,
          `pH = −log₁₀(${roundTo(excessConc, 4)}) = ${fmtDp(ph, 2)}.`,
        ]
      : [
          `n(H⁺) = ${clean(va / 1000, 4)} × ${ca.toFixed(2)} = ${roundTo(na, 5)} mol; n(OH⁻) = ${clean(vb / 1000, 4)} × ${cb.toFixed(2)} = ${roundTo(nb, 5)} mol.`,
          `Excess n(OH⁻) = ${roundTo(diff, 5)} mol in total volume ${roundTo(vTot, 4)} dm³ → [OH⁻] = ${roundTo(excessConc, 4)} mol dm⁻³.`,
          `pOH = −log₁₀(${roundTo(excessConc, 4)}) = ${fmtDp(14 - ph, 2)} → pH = 14.00 − ${fmtDp(14 - ph, 2)} = ${fmtDp(ph, 2)}.`,
        ];

    return {
      prompt: `${va}.0 cm³ of ${ca.toFixed(2)} mol dm⁻³ ${acid}(aq) is mixed with ${vb}.0 cm³ of ${cb.toFixed(2)} mol dm⁻³ ${base}(aq) at 298 K (K_w = 1.00 × 10⁻¹⁴). Calculate the pH of the resulting solution to 2 decimal places.`,
      answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
      hint: `Find moles of H⁺ and OH⁻, subtract the smaller from the larger (${excessSpecies} is in excess), and divide by the combined volume (${va + vb}.0 cm³).`,
      solution: solSteps,
    };
  },
};

// =============================================================================
// DRILL 2 (SL, level 2): Oxidation States, Redox Stoichiometry & Winkler BOD
// =============================================================================
interface OxCase {
  species: string;
  element: string;
  ox: number;
  work: string;
}

const OX_CASES: readonly OxCase[] = [
  { species: "MnO₄⁻", element: "Mn", ox: 7, work: "x + 4(−2) = −1 → x = +7" },
  { species: "MnO₂", element: "Mn", ox: 4, work: "x + 2(−2) = 0 → x = +4" },
  { species: "MnO₄²⁻", element: "Mn", ox: 6, work: "x + 4(−2) = −2 → x = +6" },
  { species: "Cr₂O₇²⁻", element: "Cr", ox: 6, work: "2x + 7(−2) = −2 → x = +6" },
  { species: "CrO₄²⁻", element: "Cr", ox: 6, work: "x + 4(−2) = −2 → x = +6" },
  { species: "Cr₂O₃", element: "Cr", ox: 3, work: "2x + 3(−2) = 0 → x = +3" },
  { species: "H₂SO₄", element: "S", ox: 6, work: "2(+1) + x + 4(−2) = 0 → x = +6" },
  { species: "SO₃²⁻", element: "S", ox: 4, work: "x + 3(−2) = −2 → x = +4" },
  { species: "S₂O₃²⁻", element: "S", ox: 2, work: "2x + 3(−2) = −2 → x = +2" },
  { species: "H₂S", element: "S", ox: -2, work: "2(+1) + x = 0 → x = −2" },
  { species: "SF₆", element: "S", ox: 6, work: "x + 6(−1) = 0 → x = +6" },
  { species: "NO₃⁻", element: "N", ox: 5, work: "x + 3(−2) = −1 → x = +5" },
  { species: "NO₂⁻", element: "N", ox: 3, work: "x + 2(−2) = −1 → x = +3" },
  { species: "NH₄⁺", element: "N", ox: -3, work: "x + 4(+1) = +1 → x = −3" },
  { species: "N₂O", element: "N", ox: 1, work: "2x + (−2) = 0 → x = +1" },
  { species: "N₂H₄", element: "N", ox: -2, work: "2x + 4(+1) = 0 → x = −2" },
  { species: "ClO₄⁻", element: "Cl", ox: 7, work: "x + 4(−2) = −1 → x = +7" },
  { species: "ClO₃⁻", element: "Cl", ox: 5, work: "x + 3(−2) = −1 → x = +5" },
  { species: "ClO⁻", element: "Cl", ox: 1, work: "x + (−2) = −1 → x = +1" },
  { species: "IO₃⁻", element: "I", ox: 5, work: "x + 3(−2) = −1 → x = +5" },
  { species: "IO₄⁻", element: "I", ox: 7, work: "x + 4(−2) = −1 → x = +7" },
  { species: "H₂O₂", element: "O", ox: -1, work: "Peroxide: 2(+1) + 2x = 0 → x = −1" },
  { species: "Na₂O₂", element: "O", ox: -1, work: "Peroxide: 2(+1) + 2x = 0 → x = −1" },
  { species: "OF₂", element: "O", ox: 2, work: "F is always −1: x + 2(−1) = 0 → x = +2" },
  { species: "NaH", element: "H", ox: -1, work: "Metal hydride: (+1) + x = 0 → x = −1" },
  { species: "CaH₂", element: "H", ox: -1, work: "Metal hydride: (+2) + 2x = 0 → x = −1" },
  { species: "C₂O₄²⁻", element: "C", ox: 3, work: "2x + 4(−2) = −2 → x = +3" },
  { species: "HCO₃⁻", element: "C", ox: 4, work: "(+1) + x + 3(−2) = −1 → x = +4" },
  { species: "CH₄", element: "C", ox: -4, work: "x + 4(+1) = 0 → x = −4" },
  { species: "CH₃OH", element: "C", ox: -2, work: "x + 4(+1) + (−2) = 0 → x = −2" },
  { species: "HCHO", element: "C", ox: 0, work: "x + 2(+1) + (−2) = 0 → x = 0" },
  { species: "HCOOH", element: "C", ox: 2, work: "x + 2(+1) + 2(−2) = 0 → x = +2" },
  { species: "PO₄³⁻", element: "P", ox: 5, work: "x + 4(−2) = −3 → x = +5" },
  { species: "PCl₃", element: "P", ox: 3, work: "x + 3(−1) = 0 → x = +3" },
  { species: "VO₂⁺", element: "V", ox: 5, work: "x + 2(−2) = +1 → x = +5" },
  { species: "[Fe(CN)₆]³⁻", element: "Fe", ox: 3, work: "Each CN⁻ is −1: x + 6(−1) = −3 → x = +3" },
];

const REDOX_TITRATIONS = [
  { eq: "MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O", titrant: "KMnO₄", analyte: "Fe²⁺", ratio: 5, ratioText: "5 : 1" },
  { eq: "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O", titrant: "K₂Cr₂O₇", analyte: "Fe²⁺", ratio: 6, ratioText: "6 : 1" },
  { eq: "2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O", titrant: "KMnO₄", analyte: "C₂O₄²⁻", ratio: 2.5, ratioText: "5 : 2" },
  { eq: "Cr₂O₇²⁻ + 3H₂O₂ + 8H⁺ → 2Cr³⁺ + 3O₂ + 7H₂O", titrant: "K₂Cr₂O₇", analyte: "H₂O₂", ratio: 3, ratioText: "3 : 1" },
  { eq: "2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻", titrant: "Na₂S₂O₃", analyte: "I₂", ratio: 0.5, ratioText: "1 : 2" },
];

const redoxWinklerDrill: Drill = {
  id: "r3-1-proton-electron-transfer.redox-states-winkler",
  topicId: "r3-1-proton-electron-transfer",
  title: "Oxidation States, Redox Titrations & Winkler BOD",
  level: 2,
  ibLevel: "SL",
  guideRef: "redox-voltaic-electrolytic",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const c = rng.pick(OX_CASES);
      const disp = c.ox > 0 ? `+${c.ox}` : num(c.ox);
      return {
        prompt: `Deduce the oxidation state of **${c.element}** in \`${c.species}\`. Enter an integer (include − for negative values).`,
        answer: { type: "number", value: c.ox, display: disp },
        hint: "Sum all oxidation states to equal the overall charge of the molecule or ion; watch for peroxides (O = −1) and metal hydrides (H = −1).",
        solution: [c.work],
      };
    }

    if (tier === 2) {
      const rxn = rng.pick(REDOX_TITRATIONS);
      const vAnalyte = rng.pick([20, 25, 50]);
      const vTitrant = roundTo(rng.int(100, 320) / 10, 1);
      const cTitrant = rng.pick([0.01, 0.015, 0.02, 0.025, 0.04, 0.05]);
      const nTitrant = clean((vTitrant / 1000) * cTitrant, 6);
      const nAnalyte = clean(nTitrant * rxn.ratio, 6);
      const cAnalyte = roundTo(nAnalyte / (vAnalyte / 1000), 4);
      const tol = Math.max(0.0005, roundTo(cAnalyte * 0.015, 4));
      return {
        prompt: `A ${vAnalyte}.0 cm³ sample of ${rxn.analyte}(aq) reacts completely with ${vTitrant.toFixed(1)} cm³ of ${cTitrant.toFixed(3)} mol dm⁻³ ${rxn.titrant}(aq) according to \`${rxn.eq}\`. Calculate [${rxn.analyte}] in mol dm⁻³ to 3 significant figures.`,
        answer: { type: "number", value: roundTo(cAnalyte, 4), tolerance: tol, display: `${clean(cAnalyte, 3)}` },
        hint: `Compute n(${rxn.titrant}) = c × V, multiply by the stoichiometric ratio (${rxn.ratioText}), and divide by ${clean(vAnalyte / 1000, 4)} dm³.`,
        solution: [
          `n(${rxn.titrant}) = ${roundTo(vTitrant / 1000, 4)} × ${cTitrant.toFixed(3)} = ${fmtSmall(nTitrant)} mol.`,
          `Using mole ratio ${rxn.ratioText}: n(${rxn.analyte}) = ${rxn.ratio} × ${fmtSmall(nTitrant)} = ${fmtSmall(nAnalyte)} mol.`,
          `[${rxn.analyte}] = ${fmtSmall(nAnalyte)} / ${clean(vAnalyte / 1000, 4)} = ${clean(cAnalyte, 3)} mol dm⁻³.`,
        ],
      };
    }

    // Tier 3: Winkler dissolved O2 (or 5-day BOD) in mg dm-3
    const vSample = rng.pick([50, 100, 200, 250]);
    const cThio = rng.pick([0.002, 0.004, 0.005, 0.008, 0.01]);
    const isBod = rng.bool(0.45);
    if (!isBod) {
      const vThio = roundTo(rng.int(60, 260) / 10, 1);
      const nThio = clean((vThio / 1000) * cThio, 7);
      const nO2 = clean(nThio / 4, 7);
      const cO2Mol = clean(nO2 / (vSample / 1000), 7);
      const mgDm3 = roundTo(cO2Mol * 32.0 * 1000, 2);
      const tol = Math.max(0.05, roundTo(mgDm3 * 0.015, 2));
      return {
        prompt: `A ${vSample}.0 cm³ river water sample is analysed by the Winkler method. Liberated I₂ requires ${vThio.toFixed(1)} cm³ of ${cThio.toFixed(4)} mol dm⁻³ Na₂S₂O₃(aq). Calculate the dissolved O₂ concentration in mg dm⁻³ (ppm) to 2 decimal places (M(O₂) = 32.00 g mol⁻¹).`,
        answer: { type: "number", value: mgDm3, tolerance: tol, display: fmtDp(mgDm3, 2) },
        hint: "Use the overall Winkler mole ratio 1 mol O₂ : 4 mol S₂O₃²⁻, divide by sample volume in dm³, then multiply by 32 000 mg mol⁻¹.",
        solution: [
          `n(S₂O₃²⁻) = ${roundTo(vThio / 1000, 4)} × ${cThio.toFixed(4)} = ${fmtSmall(nThio)} mol.`,
          `Winkler ratio (1 O₂ : 4 S₂O₃²⁻): n(O₂) = ${fmtSmall(nO2)} mol.`,
          `[O₂] = ${fmtSmall(cO2Mol)} mol dm⁻³ → × 32.00 × 1000 = ${fmtDp(mgDm3, 2)} mg dm⁻³.`,
        ],
      };
    }

    const vDay5 = roundTo(rng.int(40, 120) / 10, 1);
    const dv = roundTo(rng.int(30, 120) / 10, 1);
    const vDay0 = roundTo(vDay5 + dv, 1);
    const dnThio = clean((dv / 1000) * cThio, 7);
    const dnO2 = clean(dnThio / 4, 7);
    const bod = roundTo((dnO2 / (vSample / 1000)) * 32.0 * 1000, 2);
    const tol = Math.max(0.05, roundTo(bod * 0.015, 2));
    return {
      prompt: `In a Winkler BOD test on ${vSample}.0 cm³ water samples, Day 0 requires ${vDay0.toFixed(1)} cm³ and Day 5 requires ${vDay5.toFixed(1)} cm³ of ${cThio.toFixed(4)} mol dm⁻³ Na₂S₂O₃(aq). Calculate the 5-day BOD in mg dm⁻³ to 2 decimal places (M(O₂) = 32.00 g mol⁻¹).`,
      answer: { type: "number", value: bod, tolerance: tol, display: fmtDp(bod, 2) },
      hint: "Compute ΔV = V(Day 0) − V(Day 5), apply n(O₂) = n(S₂O₃²⁻)/4, divide by sample volume in dm³, and multiply by 32 000.",
      solution: [
        `ΔV(S₂O₃²⁻) = ${vDay0.toFixed(1)} − ${vDay5.toFixed(1)} = ${dv.toFixed(1)} cm³ → Δn(S₂O₃²⁻) = ${fmtSmall(dnThio)} mol.`,
        `Δn(O₂) = Δn(S₂O₃²⁻) / 4 = ${fmtSmall(dnO2)} mol in ${clean(vSample / 1000, 4)} dm³.`,
        `BOD = (${fmtSmall(dnO2)} / ${clean(vSample / 1000, 4)}) × 32.00 × 1000 = ${fmtDp(bod, 2)} mg dm⁻³.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 3 (HL, level 2): Weak Acids/Bases & Henderson–Hasselbalch Buffers
// =============================================================================
interface WeakSpecies {
  name: string;
  formula: string;
  conj: string;
  kind: "acid" | "base";
  pK: number;
  K: number;
  kDisp: string;
}

const WEAK_SPECIES: readonly WeakSpecies[] = [
  { name: "ethanoic acid", formula: "CH₃COOH", conj: "CH₃COO⁻", kind: "acid", pK: 4.76, K: 1.74e-5, kDisp: "1.74 × 10⁻⁵" },
  { name: "propanoic acid", formula: "CH₃CH₂COOH", conj: "CH₃CH₂COO⁻", kind: "acid", pK: 4.87, K: 1.35e-5, kDisp: "1.35 × 10⁻⁵" },
  { name: "benzoic acid", formula: "C₆H₅COOH", conj: "C₆H₅COO⁻", kind: "acid", pK: 4.2, K: 6.31e-5, kDisp: "6.31 × 10⁻⁵" },
  { name: "methanoic acid", formula: "HCOOH", conj: "HCOO⁻", kind: "acid", pK: 3.75, K: 1.78e-4, kDisp: "1.78 × 10⁻⁴" },
  { name: "hydrocyanic acid", formula: "HCN", conj: "CN⁻", kind: "acid", pK: 9.21, K: 6.17e-10, kDisp: "6.17 × 10⁻¹⁰" },
  { name: "ammonia", formula: "NH₃", conj: "NH₄⁺", kind: "base", pK: 4.75, K: 1.78e-5, kDisp: "1.78 × 10⁻⁵" },
  { name: "methylamine", formula: "CH₃NH₂", conj: "CH₃NH₃⁺", kind: "base", pK: 3.34, K: 4.57e-4, kDisp: "4.57 × 10⁻⁴" },
  { name: "ethylamine", formula: "C₂H₅NH₂", conj: "C₂H₅NH₃⁺", kind: "base", pK: 3.35, K: 4.47e-4, kDisp: "4.47 × 10⁻⁴" },
];

const weakAcidBufferDrill: Drill = {
  id: "r3-1-proton-electron-transfer.weak-acid-buffer-hl",
  topicId: "r3-1-proton-electron-transfer",
  title: "Weak Acid/Base pH & Buffer Henderson–Hasselbalch [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "weak-acids-buffers-titrations-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const sp = rng.pick(WEAK_SPECIES);
      // Choose concentration high enough so dissociation < 3.5% (exact quadratic == small-x to 2 d.p.)
      const minC = sp.K > 1e-4 ? 0.25 : 0.05;
      const c = roundTo(minC + rng.int(0, 35) * 0.02, 2);
      if (sp.kind === "acid") {
        const h = Math.sqrt(sp.K * c);
        const ph = roundTo(-Math.log10(h), 2);
        return {
          prompt: `Calculate the pH of a ${c.toFixed(2)} mol dm⁻³ solution of ${sp.name}, ${sp.formula}(aq), at 298 K given K_a = ${sp.kDisp}. Give your answer to 2 decimal places.`,
          answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
          hint: "Use the weak-acid approximation [H⁺] ≈ √(K_a × [HA]), then compute −log₁₀[H⁺].",
          solution: [
            `[H⁺] ≈ √(${sp.kDisp} × ${c.toFixed(2)}) = ${fmtSmall(h)} mol dm⁻³.`,
            `pH = −log₁₀(${fmtSmall(h)}) = ${fmtDp(ph, 2)}.`,
          ],
        };
      }
      const oh = Math.sqrt(sp.K * c);
      const poh = roundTo(-Math.log10(oh), 3);
      const ph = roundTo(14 - poh, 2);
      return {
        prompt: `Calculate the pH of a ${c.toFixed(2)} mol dm⁻³ aqueous solution of the weak base ${sp.name}, ${sp.formula}(aq), at 298 K given K_b = ${sp.kDisp} (K_w = 1.00 × 10⁻¹⁴). Give your answer to 2 decimal places.`,
        answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
        traps: [
          {
            spec: { type: "number", value: roundTo(poh, 2), tolerance: 0.02 },
            feedback: `${fmtDp(poh, 2)} is the pOH — subtract from 14.00 to get the pH!`,
          },
        ],
        hint: "Find [OH⁻] ≈ √(K_b × [B]), compute pOH, and subtract from 14.00.",
        solution: [
          `[OH⁻] ≈ √(${sp.kDisp} × ${c.toFixed(2)}) = ${fmtSmall(oh)} mol dm⁻³.`,
          `pOH = −log₁₀(${fmtSmall(oh)}) = ${fmtDp(poh, 3)}.`,
          `pH = 14.00 − ${fmtDp(poh, 3)} = ${fmtDp(ph, 2)}.`,
        ],
      };
    }

    if (tier === 2) {
      const sp = rng.pick(WEAK_SPECIES);
      const c1 = roundTo(rng.int(10, 50) / 100, 2);
      const c2 = roundTo(rng.int(10, 50) / 100, 2);
      if (sp.kind === "acid") {
        const ph = roundTo(sp.pK + Math.log10(c2 / c1), 2);
        const inv = roundTo(sp.pK + Math.log10(c1 / c2), 2);
        const traps = Math.abs(inv - ph) > 0.08
          ? [{ spec: { type: "number" as const, value: inv, tolerance: 0.02 }, feedback: "Check the log fraction: Henderson–Hasselbalch uses log₁₀([A⁻]/[HA]), not [HA]/[A⁻]." }]
          : undefined;
        return {
          prompt: `An acidic buffer at 298 K contains ${c1.toFixed(2)} mol dm⁻³ ${sp.formula} (pK_a = ${sp.pK.toFixed(2)}) and ${c2.toFixed(2)} mol dm⁻³ ${sp.conj}. Calculate its pH to 2 decimal places.`,
          answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
          traps,
          hint: "Apply Henderson–Hasselbalch: pH = pK_a + log₁₀([conjugate base]/[weak acid]).",
          solution: [
            `pH = ${sp.pK.toFixed(2)} + log₁₀({{${c2.toFixed(2)} / ${c1.toFixed(2)}}}) = ${fmtDp(ph, 2)}.`,
          ],
        };
      }
      const poh = roundTo(sp.pK + Math.log10(c2 / c1), 3);
      const ph = roundTo(14 - poh, 2);
      return {
        prompt: `A basic buffer at 298 K contains ${c1.toFixed(2)} mol dm⁻³ ${sp.formula} (pK_b = ${sp.pK.toFixed(2)}) and ${c2.toFixed(2)} mol dm⁻³ ${sp.conj} (K_w = 1.00 × 10⁻¹⁴). Calculate its pH to 2 decimal places.`,
        answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
        traps: [
          {
            spec: { type: "number", value: roundTo(poh, 2), tolerance: 0.02 },
            feedback: `${fmtDp(poh, 2)} is the pOH — subtract from 14.00 to convert to pH!`,
          },
        ],
        hint: "Use pOH = pK_b + log₁₀([BH⁺]/[B]), then pH = 14.00 − pOH.",
        solution: [
          `pOH = ${sp.pK.toFixed(2)} + log₁₀({{${c2.toFixed(2)} / ${c1.toFixed(2)}}}) = ${fmtDp(poh, 3)}.`,
          `pH = 14.00 − ${fmtDp(poh, 3)} = ${fmtDp(ph, 2)}.`,
        ],
      };
    }

    // Tier 3: Partial neutralisation buffer (excess weak acid + limiting NaOH)
    const acids = WEAK_SPECIES.filter((s) => s.kind === "acid" && s.pK < 6);
    const sp = rng.pick(acids);
    const va = rng.pick([30, 40, 50, 60, 80]);
    const ca = roundTo(rng.int(20, 50) / 100, 2);
    const na = clean((va / 1000) * ca, 6);
    const vb = rng.pick([15, 20, 25, 30]);
    // Pick fraction of acid neutralised between 0.25 and 0.75
    const fracNeut = rng.pick([0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.65, 0.7, 0.75]);
    const nbRaw = na * fracNeut;
    const cb = roundTo(nbRaw / (vb / 1000), 2);
    const nb = clean((vb / 1000) * cb, 6);
    const nHaRem = clean(na - nb, 6);
    const ph = roundTo(sp.pK + Math.log10(nb / nHaRem), 2);
    return {
      prompt: `${va}.0 cm³ of ${ca.toFixed(2)} mol dm⁻³ ${sp.formula} (pK_a = ${sp.pK.toFixed(2)}) is mixed with ${vb}.0 cm³ of ${cb.toFixed(2)} mol dm⁻³ NaOH(aq) at 298 K. Calculate the pH of the resulting buffer mixture to 2 decimal places.`,
      answer: { type: "number", value: ph, tolerance: 0.02, display: fmtDp(ph, 2) },
      hint: "Compute initial moles of HA and OH⁻, subtract n(OH⁻) from n(HA) to find remaining HA and formed A⁻, then use Henderson–Hasselbalch.",
      solution: [
        `Initial n(${sp.formula}) = ${roundTo(na, 5)} mol; n(OH⁻) = ${roundTo(nb, 5)} mol.`,
        `After neutralisation: remaining n(${sp.formula}) = ${roundTo(nHaRem, 5)} mol; formed n(${sp.conj}) = ${roundTo(nb, 5)} mol.`,
        `pH = ${sp.pK.toFixed(2)} + log₁₀({{${roundTo(nb, 5)} / ${roundTo(nHaRem, 5)}}}) = ${fmtDp(ph, 2)}.`,
      ],
    };
  },
};

// =============================================================================
// DRILL 4 (HL, level 3): Standard Cell Potential E⊖, ΔG⊖ = −nFE⊖ & Faraday Laws
// =============================================================================
interface HalfCell {
  label: string;
  eq: string;
  e0: number;
  z: number;
}

const HALF_CELLS: readonly HalfCell[] = [
  { label: "Mg²⁺/Mg", eq: "Mg²⁺(aq) + 2e⁻ ⇌ Mg(s)", e0: -2.37, z: 2 },
  { label: "Al³⁺/Al", eq: "Al³⁺(aq) + 3e⁻ ⇌ Al(s)", e0: -1.66, z: 3 },
  { label: "Zn²⁺/Zn", eq: "Zn²⁺(aq) + 2e⁻ ⇌ Zn(s)", e0: -0.76, z: 2 },
  { label: "Cr³⁺/Cr", eq: "Cr³⁺(aq) + 3e⁻ ⇌ Cr(s)", e0: -0.74, z: 3 },
  { label: "Fe²⁺/Fe", eq: "Fe²⁺(aq) + 2e⁻ ⇌ Fe(s)", e0: -0.45, z: 2 },
  { label: "Ni²⁺/Ni", eq: "Ni²⁺(aq) + 2e⁻ ⇌ Ni(s)", e0: -0.26, z: 2 },
  { label: "Sn²⁺/Sn", eq: "Sn²⁺(aq) + 2e⁻ ⇌ Sn(s)", e0: -0.14, z: 2 },
  { label: "Cu²⁺/Cu", eq: "Cu²⁺(aq) + 2e⁻ ⇌ Cu(s)", e0: 0.34, z: 2 },
  { label: "I₂/I⁻", eq: "I₂(s) + 2e⁻ ⇌ 2I⁻(aq)", e0: 0.54, z: 2 },
  { label: "Fe³⁺/Fe²⁺", eq: "Fe³⁺(aq) + e⁻ ⇌ Fe²⁺(aq)", e0: 0.77, z: 1 },
  { label: "Ag⁺/Ag", eq: "Ag⁺(aq) + e⁻ ⇌ Ag(s)", e0: 0.8, z: 1 },
  { label: "Br₂/Br⁻", eq: "Br₂(l) + 2e⁻ ⇌ 2Br⁻(aq)", e0: 1.09, z: 2 },
];

interface PlateMetal {
  name: string;
  symbol: string;
  ion: string;
  z: number;
  M: number;
}

const PLATE_METALS: readonly PlateMetal[] = [
  { name: "copper", symbol: "Cu", ion: "Cu²⁺", z: 2, M: 63.55 },
  { name: "silver", symbol: "Ag", ion: "Ag⁺", z: 1, M: 107.87 },
  { name: "zinc", symbol: "Zn", ion: "Zn²⁺", z: 2, M: 65.38 },
  { name: "nickel", symbol: "Ni", ion: "Ni²⁺", z: 2, M: 58.69 },
  { name: "aluminium", symbol: "Al", ion: "Al³⁺", z: 3, M: 26.98 },
  { name: "chromium", symbol: "Cr", ion: "Cr³⁺", z: 3, M: 52.0 },
];

function fmtSignedV(v: number): string {
  return v >= 0 ? `+${v.toFixed(2)} V` : `−${Math.abs(v).toFixed(2)} V`;
}

const cellPotentialFaradayDrill: Drill = {
  id: "r3-1-proton-electron-transfer.cell-potential-faraday-hl",
  topicId: "r3-1-proton-electron-transfer",
  title: "Cell Potential E⊖, ΔG⊖ = −nFE⊖ & Faraday Electroplating [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "electrode-potentials-aqueous-electrolysis-hl",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1 || tier === 2) {
      const i1 = rng.int(0, HALF_CELLS.length - 1);
      let i2 = rng.int(0, HALF_CELLS.length - 2);
      if (i2 >= i1) i2++;
      const a = HALF_CELLS[i1];
      const b = HALF_CELLS[i2];
      const cat = a.e0 > b.e0 ? a : b;
      const an = a.e0 > b.e0 ? b : a;
      const eCell = roundTo(cat.e0 - an.e0, 2);

      if (tier === 1) {
        return {
          prompt: `Given E⊖(${a.label}) = ${fmtSignedV(a.e0)} and E⊖(${b.label}) = ${fmtSignedV(b.e0)}, calculate the standard cell potential E⊖_cell (in V) for the spontaneous voltaic cell combining these half-cells. Give your answer to 2 decimal places.`,
          answer: { type: "number", value: eCell, tolerance: 0.01, display: `${eCell.toFixed(2)} V` },
          hint: "The more positive E⊖ half-cell is the cathode; compute E⊖_cell = E⊖_cathode − E⊖_anode (never multiply E⊖!).",
          solution: [
            `Cathode (higher E⊖): ${cat.label} (${fmtSignedV(cat.e0)}); Anode (lower E⊖): ${an.label} (${fmtSignedV(an.e0)}).`,
            `E⊖_cell = (${fmtSignedV(cat.e0)}) − (${fmtSignedV(an.e0)}) = +${eCell.toFixed(2)} V.`,
          ],
        };
      }

      // Tier 2: ΔG⊖ = −nFE⊖ in kJ mol⁻¹
      const n = lcm(cat.z, an.z);
      const dgKj = roundTo((-n * 96500 * eCell) / 1000, 1);
      const tol = Math.max(0.5, roundTo(Math.abs(dgKj) * 0.01, 1));
      return {
        prompt: `A spontaneous voltaic cell combines \`${a.eq}\` (E⊖ = ${fmtSignedV(a.e0)}) and \`${b.eq}\` (E⊖ = ${fmtSignedV(b.e0)}). Calculate ΔG⊖ in **kJ mol⁻¹** for the balanced cell equation (F = 96 500 C mol⁻¹). Give your answer to 1 decimal place.`,
        answer: { type: "number", value: dgKj, tolerance: tol, display: `${fmtDp(dgKj, 1)} kJ mol⁻¹` },
        traps: [
          {
            spec: { type: "number", value: Math.abs(dgKj), tolerance: tol },
            feedback: "A spontaneous voltaic cell has a NEGATIVE ΔG⊖ — include the minus sign!",
          },
        ],
        hint: `Find E⊖_cell = E⊖_cathode − E⊖_anode, determine balanced electrons n = ${n}, then compute ΔG⊖ = −n F E⊖_cell / 1000.`,
        solution: [
          `E⊖_cell = (${fmtSignedV(cat.e0)}) − (${fmtSignedV(an.e0)}) = +${eCell.toFixed(2)} V.`,
          `Lowest common multiple of electrons transferred: n = lcm(${cat.z}, ${an.z}) = ${n} mol e⁻.`,
          `ΔG⊖ = −${n} × 96 500 × ${eCell.toFixed(2)} / 1000 = ${fmtDp(dgKj, 1)} kJ mol⁻¹.`,
        ],
      };
    }

    // Tier 3: Quantitative Faraday electroplating mass
    const metal = rng.pick(PLATE_METALS);
    const current = roundTo(rng.int(8, 50) / 10, 1);
    const mins = rng.int(12, 85);
    const sec = mins * 60;
    const Q = clean(current * sec, 6);
    const ne = clean(Q / 96500, 6);
    const nM = clean(ne / metal.z, 6);
    const mass = roundTo(nM * metal.M, 2);
    const tol = Math.max(0.02, roundTo(mass * 0.015, 2));
    const traps = metal.z > 1
      ? [{
          spec: { type: "number" as const, value: roundTo(mass * metal.z, 2), tolerance: roundTo(tol * metal.z, 2) },
          feedback: `Remember ${metal.ion} + ${metal.z}e⁻ → ${metal.symbol} requires dividing n(e⁻) by z = ${metal.z}!`,
        }]
      : undefined;

    return {
      prompt: `A steady current of ${current.toFixed(1)} A is passed through an electrolyte containing ${metal.ion} ions for ${mins} minutes. Calculate the mass (in g) of ${metal.name} (${metal.symbol}) deposited at the cathode (M(${metal.symbol}) = ${metal.M.toFixed(2)} g mol⁻¹, F = 96 500 C mol⁻¹). Give your answer to 2 decimal places.`,
      answer: { type: "number", value: mass, tolerance: tol, display: `${fmtDp(mass, 2)} g` },
      traps,
      hint: `Convert ${mins} min to seconds, find Q = I × t, divide by 96 500 to get n(e⁻), divide by z = ${metal.z}, then multiply by ${metal.M.toFixed(2)}.`,
      solution: [
        `t = ${mins} × 60 = ${sec} s → Q = ${current.toFixed(1)} × ${sec} = ${Q} C.`,
        `n(e⁻) = ${Q} / 96 500 = ${roundTo(ne, 5)} mol.`,
        `Since ${metal.ion} + ${metal.z}e⁻ → ${metal.symbol}: n(${metal.symbol}) = ${roundTo(ne, 5)} / ${metal.z} = ${roundTo(nM, 5)} mol.`,
        `m(${metal.symbol}) = ${roundTo(nM, 5)} × ${metal.M.toFixed(2)} = ${fmtDp(mass, 2)} g.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  strongPhPohDrill,
  redoxWinklerDrill,
  weakAcidBufferDrill,
  cellPotentialFaradayDrill,
];
