import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, num, roundTo } from "./helpers.ts";

function sigFig(v: number, sf = 3): number {
  if (v === 0) return 0;
  return clean(Number(v.toPrecision(sf)));
}

function fmtDp(v: number, dp: number): string {
  return roundTo(v, dp).toFixed(dp).replace(/^-/, "−");
}

function cleanTol(v: number): number {
  if (v <= 0) return 0.001;
  return clean(Number(v.toPrecision(2)));
}

function safeTrap(traps: Trap[], ans: number, tol: number, wrong: number, feedback: string) {
  const w = clean(wrong);
  if (!Number.isFinite(w)) return;
  if (Math.abs(w - ans) <= Math.max(tol * 3, Math.abs(ans) * 0.03, 1e-6)) return;
  if (traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - w) <= 1e-6)) return;
  traps.push({ spec: { type: "number", value: w, tolerance: cleanTol(Math.max(tol, Math.abs(w) * 0.015)) }, feedback });
}

interface StoichRxn {
  eq: string;
  aName: string;
  aCoeff: number;
  aM: number;
  bName: string;
  bCoeff: number;
  bM: number;
  pName: string;
  pCoeff: number;
  pM: number;
}

const STOICH_RXNS: readonly StoichRxn[] = [
  { eq: "N₂(g) + 3H₂(g) → 2NH₃(g)", aName: "N₂", aCoeff: 1, aM: 28.02, bName: "H₂", bCoeff: 3, bM: 2.02, pName: "NH₃", pCoeff: 2, pM: 17.04 },
  { eq: "2Al(s) + 3Cl₂(g) → 2AlCl₃(s)", aName: "Al", aCoeff: 2, aM: 26.98, bName: "Cl₂", bCoeff: 3, bM: 70.90, pName: "AlCl₃", pCoeff: 2, pM: 133.33 },
  { eq: "2Mg(s) + O₂(g) → 2MgO(s)", aName: "Mg", aCoeff: 2, aM: 24.31, bName: "O₂", bCoeff: 1, bM: 32.00, pName: "MgO", pCoeff: 2, pM: 40.31 },
  { eq: "Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g)", aName: "Fe₂O₃", aCoeff: 1, aM: 159.70, bName: "CO", bCoeff: 3, bM: 28.01, pName: "Fe", pCoeff: 2, pM: 55.85 },
  { eq: "TiCl₄(l) + 2Mg(l) → Ti(s) + 2MgCl₂(l)", aName: "TiCl₄", aCoeff: 1, aM: 189.68, bName: "Mg", bCoeff: 2, bM: 24.31, pName: "Ti", pCoeff: 1, pM: 47.87 },
  { eq: "2H₂(g) + O₂(g) → 2H₂O(l)", aName: "H₂", aCoeff: 2, aM: 2.02, bName: "O₂", bCoeff: 1, bM: 32.00, pName: "H₂O", pCoeff: 2, pM: 18.02 },
];

const limitingYieldAtomEconomy: Drill = {
  id: "r2-amount-rate-extent.limiting-yield-atom-economy",
  topicId: "r2-amount-rate-extent",
  title: "Limiting Reactant, % Yield & Atom Economy",
  level: 1,
  ibLevel: "SL",
  guideRef: "stoichiometry-titrations",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const rxn = rng.pick(STOICH_RXNS);

    if (tier === 1) {
      // Limiting reactant in moles → max moles of product
      const kA = roundTo(rng.int(2, 12) * 0.1, 1);
      let kB = roundTo(rng.int(2, 12) * 0.1, 1);
      if (Math.abs(kA - kB) < 0.05) kB = roundTo(kA + 0.2, 1);
      const nA = roundTo(kA * rxn.aCoeff, 2);
      const nB = roundTo(kB * rxn.bCoeff, 2);
      const kLim = Math.min(kA, kB);
      const limName = kA < kB ? rxn.aName : rxn.bName;
      const nProd = roundTo(kLim * rxn.pCoeff, 2);
      const wrongProd = roundTo(Math.max(kA, kB) * rxn.pCoeff, 2);
      const traps: Trap[] = [];
      safeTrap(traps, nProd, 0.02, wrongProd, `Check which reactant has the smaller \`n / coeff\` — \`${limName}\` is the limiting reactant.`);
      return {
        prompt: `Consider \`${rxn.eq}\`. If \`${fmtDp(nA, 2)} mol\` of \`${rxn.aName}\` reacts with \`${fmtDp(nB, 2)} mol\` of \`${rxn.bName}\`, calculate the maximum amount of \`${rxn.pName}\` formed (in \`mol\`).`,
        answer: { type: "number", value: nProd, tolerance: 0.02, display: `${fmtDp(nProd, 2)} mol` },
        traps,
        hint: `Compare \`${fmtDp(nA, 2)} / ${rxn.aCoeff}\` for \`${rxn.aName}\` against \`${fmtDp(nB, 2)} / ${rxn.bCoeff}\` for \`${rxn.bName}\`.`,
        solution: [
          `Divide moles by coefficients: \`${rxn.aName}\` = \`${fmtDp(nA, 2)} / ${rxn.aCoeff} = ${fmtDp(kA, 2)}\`; \`${rxn.bName}\` = \`${fmtDp(nB, 2)} / ${rxn.bCoeff} = ${fmtDp(kB, 2)}\`.`,
          `Smallest quotient is \`${fmtDp(kLim, 2)}\`, so \`${limName}\` is limiting.`,
          `Maximum \`n(${rxn.pName}) = ${fmtDp(kLim, 2)} × ${rxn.pCoeff} = ${fmtDp(nProd, 2)} mol\`.`,
        ],
      };
    }

    if (tier === 2) {
      // Percentage yield from reactant mass (excess other reactant) and actual product mass
      const nLim = roundTo(rng.int(10, 45) * 0.02, 2);
      const mReact = roundTo(nLim * rxn.aM, 2);
      const nTheor = clean((nLim / rxn.aCoeff) * rxn.pCoeff);
      const mTheor = roundTo(nTheor * rxn.pM, 2);
      const pctTarget = rng.int(58, 94);
      const mActual = roundTo((mTheor * pctTarget) / 100, 2);
      const ans = sigFig((mActual / mTheor) * 100, 3);
      const tol = 0.4;
      const traps: Trap[] = [];
      safeTrap(traps, ans, tol, sigFig((mActual / mReact) * 100, 3), "Convert mass to moles first to find the theoretical mass of product — never divide product mass directly by reactant mass.");
      return {
        prompt: `In \`${rxn.eq}\`, \`${fmtDp(mReact, 2)} g\` of \`${rxn.aName}\` (\`M = ${fmtDp(rxn.aM, 2)} g mol⁻¹\`) reacts with excess \`${rxn.bName}\` to yield \`${fmtDp(mActual, 2)} g\` of \`${rxn.pName}\` (\`M = ${fmtDp(rxn.pM, 2)} g mol⁻¹\`). Calculate the percentage yield of \`${rxn.pName}\` to 3 s.f.`,
        answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)}%` },
        traps,
        hint: `Find \`n(${rxn.aName}) = m / M\`, apply the \`${rxn.aCoeff} : ${rxn.pCoeff}\` ratio to find theoretical mass of \`${rxn.pName}\`, then compute \`(actual / theoretical) × 100%\`.`,
        solution: [
          `\`n(${rxn.aName}) = ${fmtDp(mReact, 2)} / ${fmtDp(rxn.aM, 2)} = ${fmtDp(nLim, 2)} mol\`.`,
          `Theoretical \`n(${rxn.pName}) = ${fmtDp(nLim, 2)} × (${rxn.pCoeff}/${rxn.aCoeff}) = ${roundTo(nTheor, 4)} mol\`, so \`m_theor = ${fmtDp(mTheor, 2)} g\`.`,
          `\`% yield = (${fmtDp(mActual, 2)} / ${fmtDp(mTheor, 2)}) × 100% = ${num(ans)}%\`.`,
        ],
      };
    }

    // Tier 3: Two-mass limiting reactant + percentage yield
    const kA = roundTo(rng.int(10, 30) * 0.02, 2);
    let kB = roundTo(rng.int(10, 30) * 0.02, 2);
    if (Math.abs(kA - kB) < 0.06) kB = roundTo(kA + 0.08, 2);
    const nA = roundTo(kA * rxn.aCoeff, 3);
    const nB = roundTo(kB * rxn.bCoeff, 3);
    const mA = roundTo(nA * rxn.aM, 2);
    const mB = roundTo(nB * rxn.bM, 2);
    const kLim = Math.min(kA, kB);
    const limName = kA < kB ? rxn.aName : rxn.bName;
    const mTheor = roundTo(kLim * rxn.pCoeff * rxn.pM, 2);
    const pctTarget = rng.int(62, 92);
    const mActual = roundTo((mTheor * pctTarget) / 100, 2);
    const ans = sigFig((mActual / mTheor) * 100, 3);
    const tol = 0.5;
    const wrongTheor = roundTo(Math.max(kA, kB) * rxn.pCoeff * rxn.pM, 2);
    const traps: Trap[] = [];
    safeTrap(traps, ans, tol, sigFig((mActual / wrongTheor) * 100, 3), `You used the excess reactant instead of the limiting reactant (\`${limName}\`).`);
    return {
      prompt: `For \`${rxn.eq}\`, \`${fmtDp(mA, 2)} g\` of \`${rxn.aName}\` (\`M = ${fmtDp(rxn.aM, 2)}\`) reacts with \`${fmtDp(mB, 2)} g\` of \`${rxn.bName}\` (\`M = ${fmtDp(rxn.bM, 2)}\`), yielding \`${fmtDp(mActual, 2)} g\` of \`${rxn.pName}\` (\`M = ${fmtDp(rxn.pM, 2)} g mol⁻¹\`). Calculate the percentage yield of \`${rxn.pName}\` to 3 s.f.`,
      answer: { type: "number", value: ans, tolerance: tol, display: `${num(ans)}%` },
      traps,
      hint: "Convert both masses to moles, divide each by its coefficient to find the limiting reactant, then calculate theoretical mass of product.",
      solution: [
        `\`n(${rxn.aName}) = ${fmtDp(mA, 2)} / ${fmtDp(rxn.aM, 2)} = ${roundTo(nA, 3)} mol\` (\`÷ ${rxn.aCoeff} = ${fmtDp(kA, 2)}\`); \`n(${rxn.bName}) = ${fmtDp(mB, 2)} / ${fmtDp(rxn.bM, 2)} = ${roundTo(nB, 3)} mol\` (\`÷ ${rxn.bCoeff} = ${fmtDp(kB, 2)}\`).`,
        `Limiting reactant is \`${limName}\` (\`${fmtDp(kLim, 2)}\`), giving theoretical \`m(${rxn.pName}) = ${fmtDp(kLim, 2)} × ${rxn.pCoeff} × ${fmtDp(rxn.pM, 2)} = ${fmtDp(mTheor, 2)} g\`.`,
        `\`% yield = (${fmtDp(mActual, 2)} / ${fmtDp(mTheor, 2)}) × 100% = ${num(ans)}%\`.`,
      ],
    };
  },
};

const titrationStoichiometry: Drill = {
  id: "r2-amount-rate-extent.titration-stoichiometry",
  topicId: "r2-amount-rate-extent",
  title: "Volumetric & Back-Titration Stoichiometry",
  level: 2,
  ibLevel: "SL",
  guideRef: "stoichiometry-titrations",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const pairs = [
        { eq: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)", a: "HCl", b: "NaOH" },
        { eq: "HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l)", a: "HNO₃", b: "KOH" },
        { eq: "CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)", a: "CH₃COOH", b: "NaOH" },
      ] as const;
      const p = rng.pick(pairs);
      const vA = rng.pick([20.0, 25.0]);
      const cB = roundTo(rng.int(8, 25) * 0.01, 2);
      const vB = roundTo(rng.int(120, 320) * 0.1, 1);
      const nB = clean(cB * (vB / 1000));
      const cA = sigFig(nB / (vA / 1000), 3);
      const tol = cleanTol(Math.max(0.002, cA * 0.012));
      const traps: Trap[] = [];
      safeTrap(traps, cA, tol, sigFig((cB * vA) / vB, 3), "Check which volume belongs to the analyte and which belongs to the titrant.");
      return {
        prompt: `In the titration \`${p.eq}\`, \`${fmtDp(vA, 1)} cm³\` of \`${p.a}(aq)\` is neutralised by \`${fmtDp(vB, 1)} cm³\` of \`${fmtDp(cB, 2)} mol dm⁻³ ${p.b}(aq)\`. Calculate the concentration of \`${p.a}(aq)\` in \`mol dm⁻³\` to 3 s.f.`,
        answer: { type: "number", value: cA, tolerance: tol, display: `${num(cA)} mol dm⁻³` },
        traps,
        hint: `Compute \`n(${p.b}) = c × V\` in \`dm³\` (divide \`cm³\` by \`1000\`), then divide by \`${fmtDp(vA / 1000, 4)} dm³\`.`,
        solution: [
          `\`n(${p.b}) = ${fmtDp(cB, 2)} × (${fmtDp(vB, 1)} / 1000) = ${roundTo(nB, 5)} mol\`.`,
          `Mole ratio is \`1 : 1\`, so \`n(${p.a}) = ${roundTo(nB, 5)} mol\`.`,
          `\`c(${p.a}) = ${roundTo(nB, 5)} / ${fmtDp(vA / 1000, 4)} = ${num(cA)} mol dm⁻³\`.`,
        ],
      };
    }

    if (tier === 2) {
      const rxns = [
        { eq: "H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)", target: "H₂SO₄", tCoeff: 1, titrant: "NaOH", bCoeff: 2, cRange: [10, 28] as const },
        { eq: "Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)", target: "Na₂CO₃", tCoeff: 1, titrant: "HCl", bCoeff: 2, cRange: [10, 28] as const },
        { eq: "MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)", target: "Fe²⁺", tCoeff: 5, titrant: "MnO₄⁻", bCoeff: 1, cRange: [1, 4] as const },
        { eq: "2MnO₄⁻(aq) + 5C₂O₄²⁻(aq) + 16H⁺(aq) → 2Mn²⁺(aq) + 10CO₂(g) + 8H₂O(l)", target: "C₂O₄²⁻", tCoeff: 5, titrant: "MnO₄⁻", bCoeff: 2, cRange: [1, 4] as const },
      ];
      const r = rng.pick(rxns);
      const vTarget = rng.pick([20.0, 25.0]);
      const cTitrant = roundTo(rng.int(r.cRange[0], r.cRange[1]) * 0.01, 3);
      const vTitrant = roundTo(rng.int(140, 310) * 0.1, 1);
      const nTitrant = clean(cTitrant * (vTitrant / 1000));
      const nTarget = clean((nTitrant * r.tCoeff) / r.bCoeff);
      const cTarget = sigFig(nTarget / (vTarget / 1000), 3);
      const tol = cleanTol(Math.max(0.002, cTarget * 0.015));
      const traps: Trap[] = [];
      safeTrap(traps, cTarget, tol, sigFig(nTitrant / (vTarget / 1000), 3), `Remember to apply the \`${r.tCoeff} : ${r.bCoeff}\` mole ratio from the balanced equation.`);
      return {
        prompt: `For \`${r.eq}\`, \`${fmtDp(vTarget, 1)} cm³\` of \`${r.target}(aq)\` reacts completely with \`${fmtDp(vTitrant, 1)} cm³\` of \`${num(cTitrant)} mol dm⁻³ ${r.titrant}(aq)\`. Calculate \`[${r.target}]\` in \`mol dm⁻³\` to 3 s.f.`,
        answer: { type: "number", value: cTarget, tolerance: tol, display: `${num(cTarget)} mol dm⁻³` },
        traps,
        hint: `Find \`n(${r.titrant}) = c × V\`, multiply by \`${r.tCoeff} / ${r.bCoeff}\` to get \`n(${r.target})\`, then divide by \`${fmtDp(vTarget / 1000, 4)} dm³\`.`,
        solution: [
          `\`n(${r.titrant}) = ${num(cTitrant)} × ${fmtDp(vTitrant / 1000, 4)} = ${roundTo(nTitrant, 6)} mol\`.`,
          `\`n(${r.target}) = (${r.tCoeff} / ${r.bCoeff}) × ${roundTo(nTitrant, 6)} = ${roundTo(nTarget, 6)} mol\`.`,
          `\`[${r.target}] = ${roundTo(nTarget, 6)} / ${fmtDp(vTarget / 1000, 4)} = ${num(cTarget)} mol dm⁻³\`.`,
        ],
      };
    }

    // Tier 3: Back-titration purity of CaCO3 or MgCO3
    const salts = [
      { name: "CaCO₃", M: 100.09, eq: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)" },
      { name: "MgCO₃", M: 84.31, eq: "MgCO₃(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l) + CO₂(g)" },
    ];
    const salt = rng.pick(salts);
    const vAcid = 50.0;
    const cAcid = rng.pick([0.4, 0.5, 0.6]);
    const nTotal = clean(cAcid * (vAcid / 1000));
    const cBase = rng.pick([0.1, 0.2, 0.25]);
    const vBase = roundTo(rng.int(120, 280) * 0.1, 1);
    const nExcess = clean(cBase * (vBase / 1000));
    const nReacted = clean(nTotal - nExcess);
    const nSalt = clean(nReacted / 2);
    const mPure = clean(nSalt * salt.M);
    const purityTarget = rng.int(62, 92);
    const mSample = roundTo((mPure * 100) / purityTarget, 2);
    const purity = sigFig((mPure / mSample) * 100, 3);
    const tol = 0.5;
    const traps: Trap[] = [];
    safeTrap(traps, purity, tol, sigFig(((nTotal / 2) * salt.M / mSample) * 100, 3), "Subtract the unreacted excess `HCl` titrated by `NaOH` from total `HCl` before calculating moles of carbonate.");
    return {
      prompt: `A \`${fmtDp(mSample, 2)} g\` sample of impure \`${salt.name}\` (\`M = ${fmtDp(salt.M, 2)} g mol⁻¹\`) reacts with \`${fmtDp(vAcid, 1)} cm³\` of \`${fmtDp(cAcid, 2)} mol dm⁻³ HCl(aq)\` (\`${salt.eq}\`). Unreacted \`HCl\` requires \`${fmtDp(vBase, 1)} cm³\` of \`${fmtDp(cBase, 2)} mol dm⁻³ NaOH(aq)\`. Calculate the percentage purity of \`${salt.name}\` to 3 s.f.`,
      answer: { type: "number", value: purity, tolerance: tol, display: `${num(purity)}%` },
      traps,
      hint: "Compute `n_total(HCl) − n(NaOH)`, divide by `2` for moles of carbonate, convert to mass, and divide by sample mass.",
      solution: [
        `\`n_total(HCl) = ${fmtDp(cAcid, 2)} × 0.0500 = ${roundTo(nTotal, 5)} mol\`; \`n_excess(HCl) = ${fmtDp(cBase, 2)} × ${fmtDp(vBase / 1000, 4)} = ${roundTo(nExcess, 5)} mol\`.`,
        `\`n_reacted(HCl) = ${roundTo(nReacted, 5)} mol\` → \`n(${salt.name}) = ${roundTo(nSalt, 5)} mol\` → \`m = ${roundTo(mPure, 3)} g\`.`,
        `\`% purity = (${roundTo(mPure, 3)} / ${fmtDp(mSample, 2)}) × 100% = ${num(purity)}%\`.`,
      ],
    };
  },
};

const averageRateStoichiometry: Drill = {
  id: "r2-amount-rate-extent.average-rate-stoichiometry",
  topicId: "r2-amount-rate-extent",
  title: "Average Rate & Stoichiometric Rate Ratios",
  level: 1,
  ibLevel: "SL",
  guideRef: "collision-theory-kinetics",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const c1 = roundTo(rng.int(40, 95) * 0.01, 2);
      const drop = roundTo(rng.int(8, 32) * 0.01, 2);
      const c2 = roundTo(c1 - drop, 2);
      const dt = rng.pick([10, 20, 25, 40, 50, 80, 100]);
      const rate = sigFig(drop / dt, 3);
      const tol = cleanTol(Math.max(0.0001, rate * 0.015));
      return {
        prompt: `During a reaction, the concentration of reactant \`A\` decreases from \`${fmtDp(c1, 2)} mol dm⁻³\` to \`${fmtDp(c2, 2)} mol dm⁻³\` in \`${dt} s\`. Calculate the average rate of consumption of \`A\` in \`mol dm⁻³ s⁻¹\` to 3 s.f.`,
        answer: { type: "number", value: rate, tolerance: tol, display: `${num(rate)} mol dm⁻³ s⁻¹` },
        hint: "Use `rate = −Δ[A] / Δt = ([A]_initial − [A]_final) / Δt` (always positive).",
        solution: [
          `\`Δ[A] = ${fmtDp(c1, 2)} − ${fmtDp(c2, 2)} = ${fmtDp(drop, 2)} mol dm⁻³\`.`,
          `\`rate = ${fmtDp(drop, 2)} / ${dt} = ${num(rate)} mol dm⁻³ s⁻¹\`.`,
        ],
      };
    }

    const rateRxns = [
      { eq: "2N₂O₅(g) → 4NO₂(g) + O₂(g)", r: "N₂O₅", rc: 2, p: "NO₂", pc: 4 },
      { eq: "2N₂O₅(g) → 4NO₂(g) + O₂(g)", r: "N₂O₅", rc: 2, p: "O₂", pc: 1 },
      { eq: "4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g)", r: "O₂", rc: 5, p: "H₂O", pc: 6 },
      { eq: "N₂(g) + 3H₂(g) → 2NH₃(g)", r: "H₂", rc: 3, p: "NH₃", pc: 2 },
      { eq: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)", r: "H₂O₂", rc: 2, p: "O₂", pc: 1 },
      { eq: "2NO(g) + 2H₂(g) → N₂(g) + 2H₂O(g)", r: "NO", rc: 2, p: "N₂", pc: 1 },
    ];
    const rxn = rng.pick(rateRxns);

    if (tier === 2) {
      const rRate = roundTo(rng.int(10, 60) * 0.005, 4);
      const pRate = sigFig((rRate * rxn.pc) / rxn.rc, 3);
      const tol = cleanTol(Math.max(0.0005, pRate * 0.015));
      const traps: Trap[] = [];
      safeTrap(traps, pRate, tol, sigFig((rRate * rxn.rc) / rxn.pc, 3), `Check the direction of the ratio: multiply by \`${rxn.pc} / ${rxn.rc}\`, not \`${rxn.rc} / ${rxn.pc}\`.`);
      return {
        prompt: `For \`${rxn.eq}\`, \`${rxn.r}\` is consumed at \`${num(rRate)} mol dm⁻³ s⁻¹\`. Calculate the rate of formation of \`${rxn.p}\` in \`mol dm⁻³ s⁻¹\` to 3 s.f.`,
        answer: { type: "number", value: pRate, tolerance: tol, display: `${num(pRate)} mol dm⁻³ s⁻¹` },
        traps,
        hint: `Apply \`(1/${rxn.rc}) rate(${rxn.r}) = (1/${rxn.pc}) rate(${rxn.p})\`.`,
        solution: [
          `From the balanced coefficients \`${rxn.rc} ${rxn.r} : ${rxn.pc} ${rxn.p}\`:`,
          `\`rate(${rxn.p}) = (${rxn.pc} / ${rxn.rc}) × ${num(rRate)} = ${num(pRate)} mol dm⁻³ s⁻¹\`.`,
        ],
      };
    }

    // Tier 3: Combine Δ[R]/Δt with stoichiometric scaling to find rate of formation of P
    const c1 = roundTo(rng.int(50, 96) * 0.01, 2);
    const drop = roundTo(rng.int(12, 36) * 0.01, 2);
    const c2 = roundTo(c1 - drop, 2);
    const dt = rng.pick([20, 30, 40, 50, 60, 80]);
    const rRate = clean(drop / dt);
    const pRate = sigFig((rRate * rxn.pc) / rxn.rc, 3);
    const tol = cleanTol(Math.max(0.0001, pRate * 0.015));
    const traps: Trap[] = [];
    safeTrap(traps, pRate, tol, sigFig(rRate, 3), `That is the rate of consumption of \`${rxn.r}\` — scale by \`${rxn.pc} / ${rxn.rc}\` to find the rate of formation of \`${rxn.p}\`.`);
    return {
      prompt: `For \`${rxn.eq}\`, \`[${rxn.r}]\` falls from \`${fmtDp(c1, 2)}\` to \`${fmtDp(c2, 2)} mol dm⁻³\` in \`${dt} s\`. Calculate the average rate of formation of \`${rxn.p}\` in \`mol dm⁻³ s⁻¹\` to 3 s.f.`,
      answer: { type: "number", value: pRate, tolerance: tol, display: `${num(pRate)} mol dm⁻³ s⁻¹` },
      traps,
      hint: `First compute \`rate(${rxn.r}) = (${fmtDp(c1, 2)} − ${fmtDp(c2, 2)}) / ${dt}\`, then multiply by \`${rxn.pc} / ${rxn.rc}\`.`,
      solution: [
        `\`rate(${rxn.r}) = (${fmtDp(c1, 2)} − ${fmtDp(c2, 2)}) / ${dt} = ${sigFig(rRate, 3)} mol dm⁻³ s⁻¹\`.`,
        `\`rate(${rxn.p}) = (${rxn.pc} / ${rxn.rc}) × ${sigFig(rRate, 3)} = ${num(pRate)} mol dm⁻³ s⁻¹\`.`,
      ],
    };
  },
};

const rateLawArrhenius: Drill = {
  id: "r2-amount-rate-extent.rate-law-arrhenius",
  topicId: "r2-amount-rate-extent",
  title: "Rate Laws, Rate Constant k & Arrhenius E_a [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "rate-laws-mechanisms-arrhenius-hl",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      // Rate scaling or solving k
      const m = rng.pick([0, 1, 2]);
      const n = rng.pick([1, 2]);
      const fA = rng.pick([2, 3, 4, 0.5]);
      const fB = rng.pick([2, 3, 0.5]);
      const factor = clean(Math.pow(fA, m) * Math.pow(fB, n));
      const law = m === 0 ? `rate = k[B]${n === 2 ? "²" : ""}` : `rate = k[A]${m === 2 ? "²" : ""}[B]${n === 2 ? "²" : ""}`;
      const r0 = roundTo(rng.int(2, 15) * 0.001, 4);
      const rNew = sigFig(r0 * factor, 3);
      const tol = cleanTol(Math.max(0.0001, rNew * 0.015));
      return {
        prompt: `A reaction obeys \`${law}\` and has an initial rate of \`${num(r0)} mol dm⁻³ s⁻¹\`. At constant temperature, \`[A]\` is multiplied by \`${num(fA)}\` and \`[B]\` is multiplied by \`${num(fB)}\`. Calculate the new initial rate in \`mol dm⁻³ s⁻¹\` to 3 s.f.`,
        answer: { type: "number", value: rNew, tolerance: tol, display: `${num(rNew)} mol dm⁻³ s⁻¹` },
        hint: `Multiply the original rate by \`(${num(fA)})^${m} × (${num(fB)})^${n}\`.`,
        solution: [
          `Rate scaling factor \`= (${num(fA)})^${m} × (${num(fB)})^${n} = ${num(factor)}\`.`,
          `New rate \`= ${num(r0)} × ${num(factor)} = ${num(rNew)} mol dm⁻³ s⁻¹\`.`,
        ],
      };
    }

    if (tier === 2) {
      // 3-trial initial-rate table → deduce orders & compute k
      const m = rng.pick([0, 1, 2]);
      const n = rng.pick([0, 1, 2]);
      const ordA = m === 0 && n === 0 ? 1 : m;
      const ordB = n;
      const kTrue = roundTo(rng.int(2, 25) * 0.1, 2);
      const a1 = roundTo(rng.int(1, 3) * 0.1, 2);
      const b1 = roundTo(rng.int(1, 3) * 0.1, 2);
      const multA = rng.pick([2, 3]);
      const multB = rng.pick([2, 3]);
      const a2 = roundTo(a1 * multA, 2);
      const b3 = roundTo(b1 * multB, 2);
      const r1 = sigFig(kTrue * Math.pow(a1, ordA) * Math.pow(b1, ordB), 4);
      const r2 = sigFig(kTrue * Math.pow(a2, ordA) * Math.pow(b1, ordB), 4);
      const r3 = sigFig(kTrue * Math.pow(a2, ordA) * Math.pow(b3, ordB), 4);
      const p = ordA + ordB;
      const unitMap: Record<number, string> = {
        1: "s⁻¹",
        2: "dm³ mol⁻¹ s⁻¹",
        3: "dm⁶ mol⁻² s⁻¹",
        4: "dm⁹ mol⁻³ s⁻¹",
      };
      const unitStr = unitMap[p] ?? "s⁻¹";
      const tol = cleanTol(Math.max(0.02, kTrue * 0.02));
      return {
        prompt:
          `Initial-rate data for \`A + B → products\`:\n` +
          `| Trial | \`[A]\` / \`mol dm⁻³\` | \`[B]\` / \`mol dm⁻³\` | Rate / \`mol dm⁻³ s⁻¹\` |\n` +
          `|---|---|---|---|\n` +
          `| 1 | ${fmtDp(a1, 2)} | ${fmtDp(b1, 2)} | ${num(r1)} |\n` +
          `| 2 | ${fmtDp(a2, 2)} | ${fmtDp(b1, 2)} | ${num(r2)} |\n` +
          `| 3 | ${fmtDp(a2, 2)} | ${fmtDp(b3, 2)} | ${num(r3)} |\n` +
          `Deduce both orders and calculate the numerical value of \`k\` (in \`${unitStr}\`) to 3 s.f.`,
        answer: { type: "number", value: kTrue, tolerance: tol, display: `${num(kTrue)}` },
        hint: "Compare Trials 1 & 2 for the order in `A`, and Trials 2 & 3 for the order in `B`, then substitute Trial 1 to solve for `k`.",
        solution: [
          `Trials 1 → 2: \`[A] × ${multA}\`, \`rate × ${Math.pow(multA, ordA)}\` → order in \`A = ${ordA}\`.`,
          `Trials 2 → 3: \`[B] × ${multB}\`, \`rate × ${Math.pow(multB, ordB)}\` → order in \`B = ${ordB}\`.`,
          `Substitute Trial 1: \`k = ${num(r1)} / (${fmtDp(a1, 2)}^${ordA} × ${fmtDp(b1, 2)}^${ordB}) = ${num(kTrue)} ${unitStr}\`.`,
        ],
      };
    }

    // Tier 3: Arrhenius two-temperature E_a calculation (R = 8.31 J K^-1 mol^-1)
    const R = 8.31;
    const t1 = rng.int(290, 315);
    const dt = rng.pick([15, 20, 25, 30, 35]);
    const t2 = t1 + dt;
    const ratio = rng.pick([2, 3, 4, 5, 6, 8, 10]);
    const k1Base = roundTo(rng.int(10, 45) * 0.0001, 5);
    const k2Val = clean(k1Base * ratio);
    const eaJ = (R * Math.log(ratio)) / (1 / t1 - 1 / t2);
    const eaKj = sigFig(eaJ / 1000, 3);
    const tol = cleanTol(Math.max(0.4, eaKj * 0.015));
    const traps: Trap[] = [];
    safeTrap(traps, eaKj, tol, sigFig(eaJ, 3), "Convert `E_a` from `J mol⁻¹` to `kJ mol⁻¹` by dividing by `1000`.");
    return {
      prompt: `A first-order reaction has \`k₁ = ${num(k1Base)} s⁻¹\` at \`${t1} K\` and \`k₂ = ${num(k2Val)} s⁻¹\` at \`${t2} K\`. Using \`R = 8.31 J K⁻¹ mol⁻¹\`, calculate the activation energy \`E_a\` in \`kJ mol⁻¹\` to 3 s.f.`,
      answer: { type: "number", value: eaKj, tolerance: tol, display: `${num(eaKj)} kJ mol⁻¹` },
      traps,
      hint: "Use `ln(k₂ / k₁) = (E_a / R)(1/T₁ − 1/T₂)` and divide the result in `J mol⁻¹` by `1000`.",
      solution: [
        `\`ln(k₂ / k₁) = ln(${ratio}) = ${roundTo(Math.log(ratio), 4)}\`.`,
        `\`1/${t1} − 1/${t2} = ${sigFig(1 / t1 - 1 / t2, 4)} K⁻¹\`.`,
        `\`E_a = (8.31 × ${roundTo(Math.log(ratio), 4)}) / ${sigFig(1 / t1 - 1 / t2, 4)} = ${Math.round(eaJ)} J mol⁻¹ = ${num(eaKj)} kJ mol⁻¹\`.`,
      ],
    };
  },
};

const equilibriumIceGibbs: Drill = {
  id: "r2-amount-rate-extent.equilibrium-ice-gibbs",
  topicId: "r2-amount-rate-extent",
  title: "Equilibrium K_c, ICE Tables & ΔG⊖ = −RT ln K [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "equilibrium-ice-gibbs-hl",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      // Evaluate K_c directly from concentrations
      const eqType = rng.pick([0, 1, 2]);
      if (eqType === 0) {
        const a = roundTo(rng.int(10, 50) * 0.02, 2);
        const b = roundTo(rng.int(10, 50) * 0.02, 2);
        const c = roundTo(rng.int(15, 70) * 0.02, 2);
        const kc = sigFig((c * c) / (a * b), 3);
        const tol = cleanTol(Math.max(0.03, kc * 0.015));
        return {
          prompt: `At equilibrium for \`H₂(g) + I₂(g) ⇌ 2HI(g)\`, \`[H₂] = ${fmtDp(a, 2)}\`, \`[I₂] = ${fmtDp(b, 2)}\`, and \`[HI] = ${fmtDp(c, 2)} mol dm⁻³\`. Calculate \`K_c\` to 3 s.f.`,
          answer: { type: "number", value: kc, tolerance: tol, display: `${num(kc)}` },
          hint: "Write `K_c = [HI]² / ([H₂][I₂])` — remember to square `[HI]`.",
          solution: [`\`K_c = (${fmtDp(c, 2)})² / (${fmtDp(a, 2)} × ${fmtDp(b, 2)}) = ${num(kc)}\`.`],
        };
      }
      if (eqType === 1) {
        const so2 = roundTo(rng.int(10, 45) * 0.02, 2);
        const o2 = roundTo(rng.int(10, 40) * 0.02, 2);
        const so3 = roundTo(rng.int(15, 65) * 0.02, 2);
        const kc = sigFig((so3 * so3) / (so2 * so2 * o2), 3);
        const tol = cleanTol(Math.max(0.05, kc * 0.015));
        return {
          prompt: `At equilibrium for \`2SO₂(g) + O₂(g) ⇌ 2SO₃(g)\`, \`[SO₂] = ${fmtDp(so2, 2)}\`, \`[O₂] = ${fmtDp(o2, 2)}\`, and \`[SO₃] = ${fmtDp(so3, 2)} mol dm⁻³\`. Calculate \`K_c\` to 3 s.f.`,
          answer: { type: "number", value: kc, tolerance: tol, display: `${num(kc)}` },
          hint: "Write `K_c = [SO₃]² / ([SO₂]²[O₂])`.",
          solution: [`\`K_c = (${fmtDp(so3, 2)})² / ((${fmtDp(so2, 2)})² × ${fmtDp(o2, 2)}) = ${num(kc)}\`.`],
        };
      }
      const pcl5 = roundTo(rng.int(15, 60) * 0.02, 2);
      const pcl3 = roundTo(rng.int(5, 35) * 0.02, 2);
      const cl2 = roundTo(rng.int(5, 35) * 0.02, 2);
      const kc = sigFig((pcl3 * cl2) / pcl5, 3);
      const tol = cleanTol(Math.max(0.005, kc * 0.015));
      return {
        prompt: `At equilibrium for \`PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\`, \`[PCl₅] = ${fmtDp(pcl5, 2)}\`, \`[PCl₃] = ${fmtDp(pcl3, 2)}\`, and \`[Cl₂] = ${fmtDp(cl2, 2)} mol dm⁻³\`. Calculate \`K_c\` to 3 s.f.`,
        answer: { type: "number", value: kc, tolerance: tol, display: `${num(kc)}` },
        hint: "Write `K_c = ([PCl₃][Cl₂]) / [PCl₅]`.",
        solution: [`\`K_c = (${fmtDp(pcl3, 2)} × ${fmtDp(cl2, 2)}) / ${fmtDp(pcl5, 2)} = ${num(kc)}\`.`],
      };
    }

    if (tier === 2) {
      // Perfect-square ICE table: H2 + I2 ⇌ 2HI  OR  CO + H2O ⇌ CO2 + H2
      const rootK = rng.pick([2, 3, 4, 5, 6, 7, 8, 9]);
      const kc = rootK * rootK;
      const c0 = roundTo(rng.int(15, 65) * 0.02, 2);
      if (rng.bool()) {
        // H2 + I2 ⇌ 2HI: rootK = 2x / (c0 - x) => x = (rootK * c0) / (rootK + 2), [HI] = 2x
        const x = (rootK * c0) / (rootK + 2);
        const hi = sigFig(2 * x, 3);
        const tol = cleanTol(Math.max(0.005, hi * 0.015));
        const traps: Trap[] = [];
        safeTrap(traps, hi, tol, sigFig(x, 3), "Remember `[HI]_eq = 2x`, not `x`!");
        return {
          prompt: `For \`H₂(g) + I₂(g) ⇌ 2HI(g)\`, \`K_c = ${kc}.0\`. Starting with \`[H₂]₀ = ${fmtDp(c0, 2)} mol dm⁻³\`, \`[I₂]₀ = ${fmtDp(c0, 2)} mol dm⁻³\`, and \`[HI]₀ = 0\`, calculate \`[HI]_eq\` in \`mol dm⁻³\` to 3 s.f.`,
          answer: { type: "number", value: hi, tolerance: tol, display: `${num(hi)} mol dm⁻³` },
          traps,
          hint: `Take the positive square root of \`${kc} = (2x)² / (${fmtDp(c0, 2)} − x)²\`, solve for \`x\`, then multiply by \`2\`.`,
          solution: [
            `\`${kc} = (2x)² / (${fmtDp(c0, 2)} − x)²\` → taking square root: \`${rootK} = 2x / (${fmtDp(c0, 2)} − x)\`.`,
            `\`${roundTo(rootK * c0, 3)} − ${rootK}x = 2x\` → \`${rootK + 2}x = ${roundTo(rootK * c0, 3)}\` → \`x = ${sigFig(x, 4)} mol dm⁻³\`.`,
            `\`[HI]_eq = 2x = ${num(hi)} mol dm⁻³\`.`,
          ],
        };
      }
      // CO + H2O ⇌ CO2 + H2: rootK = x / (c0 - x) => x = (rootK * c0) / (rootK + 1)
      const x = sigFig((rootK * c0) / (rootK + 1), 3);
      const tol = cleanTol(Math.max(0.005, x * 0.015));
      return {
        prompt: `For \`CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g)\`, \`K_c = ${kc}.0\`. Starting with \`[CO]₀ = ${fmtDp(c0, 2)} mol dm⁻³\`, \`[H₂O]₀ = ${fmtDp(c0, 2)} mol dm⁻³\`, and zero products, calculate \`[H₂]_eq\` in \`mol dm⁻³\` to 3 s.f.`,
        answer: { type: "number", value: x, tolerance: tol, display: `${num(x)} mol dm⁻³` },
        hint: `Take the positive square root of \`${kc} = x² / (${fmtDp(c0, 2)} − x)²\` and solve for \`x\`.`,
        solution: [
          `\`${kc} = x² / (${fmtDp(c0, 2)} − x)²\` → taking square root: \`${rootK} = x / (${fmtDp(c0, 2)} − x)\`.`,
          `\`${roundTo(rootK * c0, 3)} − ${rootK}x = x\` → \`${rootK + 1}x = ${roundTo(rootK * c0, 3)}\` → \`[H₂]_eq = x = ${num(x)} mol dm⁻³\`.`,
        ],
      };
    }

    // Tier 3: ΔG⊖ = −RT ln K (R = 8.31 J K^-1 mol^-1)
    const R = 8.31;
    const T = rng.pick([288, 298, 300, 310, 320, 350, 400]);
    if (rng.bool()) {
      // Find ΔG⊖ (kJ mol^-1) from K
      const mant = roundTo(rng.int(12, 95) * 0.1, 1);
      const exp = rng.pick([-4, -3, -2, 2, 3, 4, 5]);
      const kVal = clean(mant * Math.pow(10, exp));
      const dGJ = -R * T * Math.log(kVal);
      const dGKj = sigFig(dGJ / 1000, 3);
      const tol = cleanTol(Math.max(0.2, Math.abs(dGKj) * 0.015));
      const traps: Trap[] = [];
      safeTrap(traps, dGKj, tol, -dGKj, "Check the minus sign in `ΔG⊖ = −RT ln K`: `K > 1` gives negative `ΔG⊖`, while `K < 1` gives positive `ΔG⊖`.");
      return {
        prompt: `At \`${T} K\`, a reversible reaction has \`K = ${num(mant)} × 10^${exp < 0 ? `(${exp})` : exp}\`. Using \`R = 8.31 J K⁻¹ mol⁻¹\`, calculate \`ΔG⊖\` in \`kJ mol⁻¹\` to 3 s.f.`,
        answer: { type: "number", value: dGKj, tolerance: tol, display: `${num(dGKj)} kJ mol⁻¹` },
        traps,
        hint: "Use `ΔG⊖ = −R T ln K` (natural log `ln`, NOT `log₁₀`) and divide by `1000` for `kJ mol⁻¹`.",
        solution: [
          `\`ln K = ln(${num(mant)} × 10^${exp}) = ${roundTo(Math.log(kVal), 4)}\`.`,
          `\`ΔG⊖ = −8.31 × ${T} × (${roundTo(Math.log(kVal), 4)}) = ${Math.round(dGJ)} J mol⁻¹ = ${num(dGKj)} kJ mol⁻¹\`.`,
        ],
      };
    }

    // Find K from ΔG⊖ (kJ mol^-1)
    const dGKj = roundTo(rng.nonZero(-16, 10) + rng.int(1, 9) * 0.1, 1);
    const lnK = (-dGKj * 1000) / (R * T);
    const kVal = sigFig(Math.exp(lnK), 3);
    const tol = cleanTol(Math.max(0.002, kVal * 0.025));
    const traps: Trap[] = [];
    safeTrap(traps, kVal, tol, sigFig(Math.exp(-lnK), 3), "Check the minus sign in `ln K = −ΔG⊖ / (RT)`!");
    return {
      prompt: `At \`${T} K\`, a reversible reaction has \`ΔG⊖ = ${num(dGKj)} kJ mol⁻¹\`. Using \`R = 8.31 J K⁻¹ mol⁻¹\`, calculate the equilibrium constant \`K\` to 3 s.f.`,
      answer: { type: "number", value: kVal, tolerance: tol, display: `${num(kVal)}` },
      traps,
      hint: "Convert `ΔG⊖` to `J mol⁻¹` (`× 1000`), calculate `ln K = −ΔG⊖ / (RT)`, then evaluate `e^(ln K)`.",
      solution: [
        `\`ΔG⊖ = ${num(roundTo(dGKj * 1000, 0))} J mol⁻¹\`.`,
        `\`ln K = −(${num(roundTo(dGKj * 1000, 0))}) / (8.31 × ${T}) = ${roundTo(lnK, 4)}\`.`,
        `\`K = e^(${roundTo(lnK, 4)}) = ${num(kVal)}\`.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  limitingYieldAtomEconomy,
  titrationStoichiometry,
  averageRateStoichiometry,
  rateLawArrhenius,
  equilibriumIceGibbs,
];
