import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";
import type { Trap } from "../types.ts";

function signedNum(n: number): string {
  const c = clean(n);
  if (c > 0) return `+${c}`;
  if (c < 0) return `−${Math.abs(c)}`;
  return "0";
}

function safeTraps(ans: number, tol: number, candidates: Array<{ value: number; feedback: string }>): Trap[] {
  const out: Trap[] = [];
  const used = new Set<number>();
  for (const c of candidates) {
    const v = clean(c.value);
    if (!Number.isFinite(v)) continue;
    if (Math.abs(v - ans) <= Math.max(tol * 2.5, 0.05)) continue;
    if (used.has(v)) continue;
    used.add(v);
    out.push({ spec: { type: "number", value: v, tolerance: Math.max(tol, 0.05) }, feedback: c.feedback });
  }
  return out;
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 (SL, level 1): Calorimetry q = mcΔT & Molar ΔH = −q / n
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity.calorimetry-q-dh",
    topicId: "r1-energetics-spontaneity",
    title: "Calorimetry: q = mcΔT & Molar ΔH",
    level: 1,
    ibLevel: "SL",
    guideRef: "enthalpy-calorimetry",
    generate(rng, tier) {
      const c = 4.18;

      if (tier === 1) {
        const m = rng.pick([50, 75, 100, 120, 125, 150, 175, 200, 225, 250]);
        const t1 = roundTo(rng.int(180, 240) / 10, 1);
        const dT = roundTo(rng.int(40, 240) / 10, 1);
        const t2 = roundTo(t1 + dT, 1);
        const qJ = clean(m * c * dT);
        const qkJ = roundTo(qJ / 1000, 2);
        return {
          prompt: `A sample of **${m}.0 g** of water warms from **${t1.toFixed(1)} °C** to **${t2.toFixed(1)} °C**. Given \`c = 4.18 J g⁻¹ K⁻¹\`, calculate the thermal energy \`q\` absorbed by the water in **kJ** (to 2 decimal places).`,
          answer: { type: "number", value: qkJ, tolerance: 0.03, display: `${num(qkJ)} kJ` },
          hint: "Find ΔT = T_final − T_initial, multiply m × c × ΔT (in J), then divide by 1000 for kJ.",
          traps: safeTraps(qkJ, 0.03, [
            { value: roundTo(qJ, 1), feedback: "That value is in Joules — divide by 1000 to convert to kJ!" },
            { value: roundTo((m * c * t2) / 1000, 2), feedback: "Use the temperature CHANGE ΔT = T₂ − T₁, not the final temperature T₂." },
          ]),
          solution: [
            `ΔT = ${t2.toFixed(1)} − ${t1.toFixed(1)} = ${dT.toFixed(1)} K.`,
            `{{q = m c ΔT = ${m} * 4.18 * ${dT.toFixed(1)} = ${roundTo(qJ, 1)}}} J.`,
            `Convert to kJ: {{${roundTo(qJ, 1)} / 1000 = ${qkJ}}} kJ.`,
          ],
        };
      }

      if (tier === 2) {
        const m = rng.pick([50, 80, 100, 120, 150, 200]);
        const exo = rng.bool(0.65);
        const absDT = roundTo(rng.int(30, 150) / 10, 1);
        const dT = exo ? absDT : -absDT;
        const n = roundTo(rng.int(20, 100) / 1000, 3);
        const qkJ = clean((m * c * dT) / 1000);
        const dH = roundTo(-qkJ / n, 1);
        const dirWord = exo ? `rises by **${absDT.toFixed(1)} °C**` : `falls by **${absDT.toFixed(1)} °C**`;
        return {
          prompt: `In a coffee-cup calorimeter, **${n.toFixed(3)} mol** of limiting reactant reacts inside **${m}.0 g** of aqueous solution (\`c = 4.18 J g⁻¹ K⁻¹\`). The solution temperature ${dirWord}. Calculate \`ΔH\` in **kJ mol⁻¹** (include the sign, to 1 decimal place).`,
          answer: { type: "number", value: dH, tolerance: 0.25, display: `${signedNum(dH)} kJ mol⁻¹` },
          hint: "Compute q = mcΔT in kJ, divide by n, and reverse the sign (temperature rise ⇒ exothermic −; fall ⇒ endothermic +).",
          traps: safeTraps(dH, 0.25, [
            { value: -dH, feedback: exo ? "Temperature rose ⇒ heat left the system ⇒ ΔH must be negative!" : "Temperature fell ⇒ heat entered the system ⇒ ΔH must be positive!" },
            { value: roundTo(dH * 1000, 0), feedback: "Convert q from Joules to kJ (÷ 1000) before dividing by moles!" },
          ]),
          solution: [
            `q = ${m}.0 × 4.18 × (${signedNum(dT)}) = ${roundTo(qkJ * 1000, 1)} J = ${signedNum(roundTo(qkJ, 4))} kJ.`,
            `{{ΔH = -q / n = ${signedNum(roundTo(-qkJ, 4))} / ${n.toFixed(3)} = ${dH}}} kJ mol⁻¹.`,
          ],
        };
      }

      // Tier 3: Limiting-reagent neutralisation OR spirit-burner combustion
      if (rng.bool(0.55)) {
        const vEach = rng.pick([25, 30, 40, 50, 60, 75]);
        const mTotal = vEach * 2;
        const cLim = roundTo(rng.int(8, 20) / 10, 1);
        const cExc = roundTo(cLim + rng.int(2, 6) / 10, 1);
        const acidLim = rng.bool(0.5);
        const cHCl = acidLim ? cLim : cExc;
        const cNaOH = acidLim ? cExc : cLim;
        const nLim = clean((vEach / 1000) * cLim);
        const nExc = clean((vEach / 1000) * cExc);
        const dHTrue = -rng.int(535, 585) / 10; // realistic −53.5 to −58.5 kJ mol⁻¹
        const dT = roundTo((-dHTrue * nLim * 1000) / (mTotal * c), 1);
        const qkJ = clean((mTotal * c * dT) / 1000);
        const dH = roundTo(-qkJ / nLim, 1);
        const wrongHalfM = roundTo(-((vEach * c * dT) / 1000) / nLim, 1);
        const wrongExc = roundTo(-qkJ / nExc, 1);
        return {
          prompt: `**${vEach}.0 cm³** of **${cHCl.toFixed(1)} mol dm⁻³** HCl(aq) is mixed with **${vEach}.0 cm³** of **${cNaOH.toFixed(1)} mol dm⁻³** NaOH(aq) in a polystyrene cup. The temperature rises by **${dT.toFixed(1)} °C**. Assuming density \`1.00 g cm⁻³\` and \`c = 4.18 J g⁻¹ K⁻¹\`, calculate \`ΔH_neut\` in **kJ mol⁻¹** (include the sign, to 1 decimal place).`,
          answer: { type: "number", value: dH, tolerance: 0.35, display: `${signedNum(dH)} kJ mol⁻¹` },
          hint: "Add BOTH volumes for total mass m, and divide q (in kJ) by the SMALLER (limiting) moles of acid/base.",
          traps: safeTraps(dH, 0.35, [
            { value: -dH, feedback: "Neutralisation warms the solution (exothermic), so ΔH_neut must be negative." },
            { value: wrongHalfM, feedback: "Both solutions warm up — use total mass m = V(acid) + V(base)!" },
            { value: wrongExc, feedback: "Divide by the LIMITING reactant moles, not the excess reactant moles!" },
          ]),
          solution: [
            `Total mass m = ${vEach}.0 + ${vEach}.0 = ${mTotal}.0 g.`,
            `q = ${mTotal}.0 × 4.18 × ${dT.toFixed(1)} = ${roundTo(qkJ * 1000, 1)} J = ${roundTo(qkJ, 4)} kJ.`,
            `Limiting reactant: n(H₂O) = ${(vEach / 1000).toFixed(3)} × ${cLim.toFixed(1)} = ${nLim} mol.`,
            `{{ΔH_neut = -${roundTo(qkJ, 4)} / ${nLim} = ${dH}}} kJ mol⁻¹.`,
          ],
        };
      }

      // Spirit burner combustion branch
      const fuels = [
        { name: "methanol (CH₃OH)", M: 32.04, dHRange: [520, 680] as const },
        { name: "ethanol (C₂H₅OH)", M: 46.08, dHRange: [950, 1250] as const },
        { name: "propan-1-ol (C₃H₇OH)", M: 60.10, dHRange: [1350, 1750] as const },
      ];
      const fuel = rng.pick(fuels);
      const mWater = rng.pick([150, 200, 250, 300]);
      const mFuel = roundTo(rng.int(45, 130) / 100, 2);
      const nFuel = clean(mFuel / fuel.M);
      const targetDH = -rng.int(fuel.dHRange[0], fuel.dHRange[1]);
      const dT = roundTo((-targetDH * nFuel * 1000) / (mWater * c), 1);
      const qkJ = clean((mWater * c * dT) / 1000);
      const dH = roundTo(-qkJ / nFuel, 0);
      return {
        prompt: `Burning **${mFuel.toFixed(2)} g** of ${fuel.name} (\`M = ${fuel.M.toFixed(2)} g mol⁻¹\`) in a spirit burner raises the temperature of **${mWater}.0 g** of water by **${dT.toFixed(1)} °C** (\`c = 4.18 J g⁻¹ K⁻¹\`). Calculate the experimental \`ΔH_c\` in **kJ mol⁻¹** (include the sign, to the nearest whole number).`,
        answer: { type: "number", value: dH, tolerance: 3, display: `${signedNum(dH)} kJ mol⁻¹` },
        hint: "Use ONLY the mass of water in q = mcΔT, and use the mass of fuel only to calculate n = m_fuel / M.",
        traps: safeTraps(dH, 3, [
          { value: -dH, feedback: "Combustion is exothermic — remember the negative sign!" },
        ]),
        solution: [
          `Heat absorbed by water: q = ${mWater}.0 × 4.18 × ${dT.toFixed(1)} = ${roundTo(qkJ * 1000, 1)} J = ${roundTo(qkJ, 3)} kJ.`,
          `Moles of fuel burnt: {{n = ${mFuel.toFixed(2)} / ${fuel.M.toFixed(2)} = ${roundTo(nFuel, 5)}}} mol.`,
          `{{ΔH_c = -${roundTo(qkJ, 3)} / ${roundTo(nFuel, 5)} = ${dH}}} kJ mol⁻¹.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 (SL, level 2): Bond Enthalpies & Hess's Law Cycles
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity.hess-bond-enthalpy",
    topicId: "r1-energetics-spontaneity",
    title: "Bond Enthalpies & Hess's Law Cycles",
    level: 2,
    ibLevel: "SL",
    guideRef: "hess-bond-enthalpies-fuels",
    generate(rng, tier) {
      if (tier === 1) {
        // Diatomic / simple gaseous bond-enthalpy reactions with high variety
        const pairs: Array<[string, string]> = [
          ["A", "B"], ["X", "Y"], ["D", "E"], ["P", "Q"], ["R", "T"],
        ];
        const [a, b] = rng.pick(pairs);
        const eAA = rng.int(160, 520);
        const eBB = rng.int(150, 500);
        let eAB = rng.int(240, 560);
        if (eAA + eBB === 2 * eAB) eAB += 15;
        const coeff = rng.pick([1, 2]);
        const broken = coeff * (eAA + eBB);
        const formed = coeff * 2 * eAB;
        const dH = broken - formed;
        const eq = coeff === 1 ? `${a}₂(g) + ${b}₂(g) → 2${a}${b}(g)` : `2${a}₂(g) + 2${b}₂(g) → 4${a}${b}(g)`;
        const formedCount = coeff * 2;
        return {
          prompt: `Estimate \`ΔH\` (in **kJ mol⁻¹**, include the sign) for \`${eq}\` given average bond enthalpies (\`kJ mol⁻¹\`): \`${a}−${a} = ${eAA}\`, \`${b}−${b} = ${eBB}\`, \`${a}−${b} = ${eAB}\`.`,
          answer: { type: "number", value: dH, tolerance: 0.5, display: `${signedNum(dH)} kJ mol⁻¹` },
          hint: "Use ΔH = Σ(bonds broken in reactants) − Σ(bonds formed in products).",
          traps: safeTraps(dH, 0.5, [
            { value: -dH, feedback: "Check the subtraction order: bond enthalpies use Σ(broken) − Σ(formed)!" },
            { value: broken - eAB, feedback: `Don't forget to multiply the ${a}−${b} bond enthalpy by ${formedCount}!` },
          ]),
          solution: [
            `Bonds broken = ${coeff === 1 ? `${eAA} + ${eBB}` : `2(${eAA}) + 2(${eBB})`} = ${broken} kJ mol⁻¹.`,
            `Bonds formed = ${formedCount} × ${eAB} = ${formed} kJ mol⁻¹.`,
            `ΔH = ${broken} − ${formed} = **${signedNum(dH)} kJ mol⁻¹**.`,
          ],
        };
      }

      if (tier === 2) {
        // Formation cycle vs Combustion cycle — tests the P−R vs R−P direction!
        const isFormation = rng.bool(0.5);
        const a = rng.pick([1, 2]);
        const b = rng.pick([1, 2, 3]);
        const c = rng.pick([1, 2, 3]);
        if (isFormation) {
          const hfR1 = -rng.int(40, 350);
          const hfP1 = -rng.int(120, 460);
          const hfP2 = -rng.int(80, 320);
          const sumP = b * hfP1 + c * hfP2;
          const sumR = a * hfR1;
          const dH = sumP - sumR;
          if (dH === 0) return this.generate(rng, tier);
          return {
            prompt: `For the reaction \`${a === 1 ? "" : a}X(g) + O₂(g) → ${b === 1 ? "" : b}Y(g) + ${c === 1 ? "" : c}Z(l)\`, standard enthalpies of formation \`ΔH_f⊖\` (\`kJ mol⁻¹\`) are: \`X = ${signedNum(hfR1)}\`, \`Y = ${signedNum(hfP1)}\`, \`Z = ${signedNum(hfP2)}\` (\`ΔH_f⊖[O₂] = 0\`). Calculate \`ΔH_r⊖\` in **kJ mol⁻¹** (include sign).`,
            answer: { type: "number", value: dH, tolerance: 0.5, display: `${signedNum(dH)} kJ mol⁻¹` },
            hint: "Formation arrows point UP from elements: ΔH_r⊖ = ΣΔH_f⊖(products) − ΣΔH_f⊖(reactants).",
            traps: safeTraps(dH, 0.5, [
              { value: -dH, feedback: "Formation cycles take Products minus Reactants (ΣΔH_f(P) − ΣΔH_f(R))!" },
              { value: sumP + sumR, feedback: "Watch the double negative when subtracting a negative ΔH_f⊖(X)!" },
            ]),
            solution: [
              `ΣΔH_f⊖(products) = ${b}(${hfP1}) + ${c}(${hfP2}) = ${signedNum(sumP)} kJ mol⁻¹.`,
              `ΣΔH_f⊖(reactants) = ${a}(${hfR1}) + 0 = ${signedNum(sumR)} kJ mol⁻¹.`,
              `ΔH_r⊖ = (${sumP}) − (${sumR}) = **${signedNum(dH)} kJ mol⁻¹**.`,
            ],
          };
        }

        // Combustion cycle: nC C(s) + nH2 H2(g) -> valid alkyne/alkene/alkane C_n H_{2*nH2}
        const nC = rng.int(2, 6);
        const nH2 = rng.pick([nC - 1, nC, nC + 1]);
        const hcC = -394;
        const hcH2 = -286;
        const sumR = nC * hcC + nH2 * hcH2;
        const offset = rng.nonZero(-180, 120);
        const hcProd = sumR - offset; // so dH_f = sumR - hcProd = offset
        const dH = sumR - hcProd;
        const formula = `C_${nC}H_${2 * nH2}`;
        return {
          prompt: `Use standard enthalpies of combustion \`ΔH_c⊖\` (\`kJ mol⁻¹\`) to calculate \`ΔH_f⊖\` (in **kJ mol⁻¹**, include sign) for \`${nC}C(s) + ${nH2}H₂(g) → ${formula}(g)\`, given: \`ΔH_c⊖(C) = −394\`, \`ΔH_c⊖(H₂) = −286\`, \`ΔH_c⊖(${formula}) = ${signedNum(hcProd)}\`.`,
          answer: { type: "number", value: dH, tolerance: 0.5, display: `${signedNum(dH)} kJ mol⁻¹` },
          hint: "Combustion arrows point DOWN to CO₂ + H₂O: ΔH_r⊖ = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products).",
          traps: safeTraps(dH, 0.5, [
            { value: -dH, feedback: "Combustion cycles use Reactants minus Products — the opposite order from formation cycles!" },
          ]),
          solution: [
            `ΣΔH_c⊖(reactants) = ${nC}(−394) + ${nH2}(−286) = ${signedNum(sumR)} kJ mol⁻¹.`,
            `ΔH_f⊖ = (${sumR}) − (${hcProd}) = **${signedNum(dH)} kJ mol⁻¹**.`,
          ],
        };
      }

      // Tier 3: Algebraic 2-step Hess's Law manipulation (reverse + scale)
      const h1 = rng.nonZero(-280, 240);
      const h2 = rng.nonZero(-280, 240);
      const rev2 = rng.bool(0.5);
      const mult = rng.pick([1, 2, 3]);
      if (!rev2) {
        // (1) A + B -> X   (h1)
        // (2) X + C -> D   (h2)
        // Target: mult A + mult B + mult C -> mult D   (ΔH = mult * (h1 + h2))
        const ans = mult * (h1 + h2);
        if (ans === 0) return this.generate(rng, tier);
        const s = mult === 1 ? "" : String(mult);
        return {
          prompt: `Given:\n1. \`A + B → X\`   \`ΔH₁ = ${signedNum(h1)} kJ\`\n2. \`X + C → D\`   \`ΔH₂ = ${signedNum(h2)} kJ\`\n\nCalculate \`ΔH\` (in **kJ**, include sign) for \`${s}A + ${s}B + ${s}C → ${s}D\`.`,
          answer: { type: "number", value: ans, tolerance: 0.5, display: `${signedNum(ans)} kJ` },
          hint: `Add equations (1) and (2) to cancel intermediate X${mult > 1 ? `, then multiply the result by ${mult}` : ""}.`,
          traps: safeTraps(ans, 0.5, [
            { value: h1 + h2, feedback: `Don't forget to multiply ΔH by the stoichiometric factor ${mult}!` },
            { value: mult * (h1 - h2), feedback: "Both equations run in the forward direction — add ΔH₁ and ΔH₂." },
          ]),
          solution: [
            `Add (1) + (2) so X cancels: A + B + C → D has ΔH = (${h1}) + (${h2}) = ${signedNum(h1 + h2)} kJ.`,
            ...(mult > 1 ? [`Multiply by ${mult}: ΔH = ${mult} × (${h1 + h2}) = **${signedNum(ans)} kJ**.`] : [`Therefore ΔH = **${signedNum(ans)} kJ**.`]),
          ],
        };
      }
      // Reversed second step:
      // (1) A + B -> X   (h1)
      // (2) D -> X + C   (h2)  => reverse (2): X + C -> D (-h2)
      // Target: mult A + mult B + mult C -> mult D   (ΔH = mult * (h1 - h2))
      const ans = mult * (h1 - h2);
      if (ans === 0) return this.generate(rng, tier);
      const s = mult === 1 ? "" : String(mult);
      return {
        prompt: `Given:\n1. \`A + B → X\`   \`ΔH₁ = ${signedNum(h1)} kJ\`\n2. \`D → X + C\`   \`ΔH₂ = ${signedNum(h2)} kJ\`\n\nCalculate \`ΔH\` (in **kJ**, include sign) for \`${s}A + ${s}B + ${s}C → ${s}D\`.`,
        answer: { type: "number", value: ans, tolerance: 0.5, display: `${signedNum(ans)} kJ` },
        hint: `Keep (1) forward, REVERSE (2) so X cancels (flipping the sign of ΔH₂)${mult > 1 ? `, then multiply by ${mult}` : ""}.`,
        traps: safeTraps(ans, 0.5, [
          { value: mult * (h1 + h2), feedback: "Equation (2) must be REVERSED so D is a product — flip the sign of ΔH₂!" },
          { value: h1 - h2, feedback: `Remember to scale the combined ΔH by ${mult}!` },
        ]),
        solution: [
          `Reverse (2): X + C → D has ΔH = ${signedNum(-h2)} kJ.`,
          `Add to (1) so X cancels: A + B + C → D has ΔH = (${h1}) + (${-h2}) = ${signedNum(h1 - h2)} kJ.`,
          ...(mult > 1 ? [`Multiply by ${mult}: ΔH = ${mult} × (${h1 - h2}) = **${signedNum(ans)} kJ**.`] : [`Therefore ΔH = **${signedNum(ans)} kJ**.`]),
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 (HL, level 3): Born–Haber & Solution Enthalpy Cycles [HL]
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity.born-haber-solution",
    topicId: "r1-energetics-spontaneity",
    title: "Born–Haber & Solution Cycles [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "born-haber-solution-hl",
    generate(rng, tier) {
      if (tier === 1) {
        // 1:1 salt solution cycle ΔH_sol = ΔH_lat + ΔH_hyd(M+) + ΔH_hyd(X-)
        const cations = [
          { sym: "Li⁺", hyd: -538 },
          { sym: "Na⁺", hyd: -424 },
          { sym: "K⁺", hyd: -340 },
          { sym: "Rb⁺", hyd: -315 },
          { sym: "Cs⁺", hyd: -291 },
        ];
        const anions = [
          { sym: "F⁻", hyd: -504 },
          { sym: "Cl⁻", hyd: -359 },
          { sym: "Br⁻", hyd: -328 },
          { sym: "I⁻", hyd: -293 },
        ];
        const cat = rng.pick(cations);
        const an = rng.pick(anions);
        const hydCat = cat.hyd + rng.int(-10, 10);
        const hydAn = an.hyd + rng.int(-10, 10);
        const dHLat = Math.abs(hydCat + hydAn) + rng.nonZero(-45, 55);
        const dHSol = dHLat + hydCat + hydAn;
        const salt = `${cat.sym.replace("⁺", "")}${an.sym.replace("⁻", "")}`;
        if (rng.bool(0.65)) {
          return {
            prompt: `Using the IB endothermic lattice enthalpy convention, calculate \`ΔH_sol⊖\` (in **kJ mol⁻¹**, include sign) for \`${salt}(s)\` given \`ΔH_lat⊖ = +${dHLat}\`, \`ΔH_hyd⊖(${cat.sym}) = ${signedNum(hydCat)}\`, and \`ΔH_hyd⊖(${an.sym}) = ${signedNum(hydAn)}\` (\`kJ mol⁻¹\`).`,
            answer: { type: "number", value: dHSol, tolerance: 0.5, display: `${signedNum(dHSol)} kJ mol⁻¹` },
            hint: "Use ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(cation) + ΔH_hyd⊖(anion).",
            traps: safeTraps(dHSol, 0.5, [
              { value: -dHSol, feedback: "Check the arithmetic sign: +ΔH_lat⊖ + (negative ΣΔH_hyd⊖)." },
              { value: dHLat - hydCat - hydAn, feedback: "Hydration enthalpies are exothermic (negative) and reduce +ΔH_lat⊖." },
            ]),
            solution: [
              `ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(${cat.sym}) + ΔH_hyd⊖(${an.sym})`,
              `ΔH_sol⊖ = +${dHLat} + (${hydCat}) + (${hydAn}) = **${signedNum(dHSol)} kJ mol⁻¹**.`,
            ],
          };
        }
        return {
          prompt: `For \`${salt}(s)\`, \`ΔH_sol⊖ = ${signedNum(dHSol)}\`, \`ΔH_hyd⊖(${cat.sym}) = ${signedNum(hydCat)}\`, and \`ΔH_hyd⊖(${an.sym}) = ${signedNum(hydAn)}\` (\`kJ mol⁻¹\`). Calculate \`ΔH_lat⊖(${salt})\` (IB endothermic convention, in **kJ mol⁻¹**, include sign).`,
          answer: { type: "number", value: dHLat, tolerance: 0.5, display: `+${dHLat} kJ mol⁻¹` },
          hint: "Rearrange ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖ to ΔH_lat⊖ = ΔH_sol⊖ − ΣΔH_hyd⊖.",
          traps: safeTraps(dHLat, 0.5, [
            { value: -dHLat, feedback: "IB lattice enthalpy is endothermic dissociation (+)." },
          ]),
          solution: [
            `ΣΔH_hyd⊖ = (${hydCat}) + (${hydAn}) = ${signedNum(hydCat + hydAn)} kJ mol⁻¹.`,
            `ΔH_lat⊖ = (${dHSol}) − (${hydCat + hydAn}) = **+${dHLat} kJ mol⁻¹**.`,
          ],
        };
      }

      if (tier === 2) {
        // MX Born-Haber cycle
        const metals = ["Li", "Na", "K", "Rb"];
        const halogens = ["F", "Cl", "Br", "I"];
        const M = rng.pick(metals);
        const X = rng.pick(halogens);
        const atM = rng.int(75, 165);
        const ie1 = rng.int(400, 530);
        const atX = rng.int(75, 130);
        const ea1 = -rng.int(290, 355);
        const dHf = -rng.int(310, 610);
        const gasSum = atM + ie1 + atX + ea1;
        const dHLat = gasSum - dHf;
        if (rng.bool(0.6)) {
          return {
            prompt: `Calculate \`ΔH_lat⊖\` (IB endothermic dissociation convention, in **kJ mol⁻¹**, include sign) of \`${M}${X}(s)\` given (\`kJ mol⁻¹\`): \`ΔH_f⊖ = ${signedNum(dHf)}\`, \`ΔH_at⊖(${M}) = +${atM}\`, \`IE₁(${M}) = +${ie1}\`, \`ΔH_at⊖(½${X}₂) = +${atX}\`, \`EA₁(${X}) = ${signedNum(ea1)}\`.`,
            answer: { type: "number", value: dHLat, tolerance: 1, display: `+${dHLat} kJ mol⁻¹` },
            hint: "ΔH_f⊖ = ΔH_at(M) + IE₁(M) + ΔH_at(X) + EA₁(X) − ΔH_lat⊖, so ΔH_lat⊖ = (gaseous-ion sum) − ΔH_f⊖.",
            traps: safeTraps(dHLat, 1, [
              { value: -dHLat, feedback: "Use IB's endothermic dissociation convention (ΔH_lat⊖ > 0)." },
              { value: gasSum + dHf, feedback: "Subtracting a negative ΔH_f⊖ ADDS |ΔH_f⊖|!" },
            ]),
            solution: [
              `Gaseous-ion sum = ${atM} + ${ie1} + ${atX} + (${ea1}) = +${gasSum} kJ mol⁻¹.`,
              `ΔH_lat⊖ = ${gasSum} − (${dHf}) = **+${dHLat} kJ mol⁻¹**.`,
            ],
          };
        }
        return {
          prompt: `Calculate \`ΔH_f⊖\` (in **kJ mol⁻¹**, include sign) of \`${M}${X}(s)\` given (\`kJ mol⁻¹\`): \`ΔH_at⊖(${M}) = +${atM}\`, \`IE₁(${M}) = +${ie1}\`, \`ΔH_at⊖(½${X}₂) = +${atX}\`, \`EA₁(${X}) = ${signedNum(ea1)}\`, \`ΔH_lat⊖(${M}${X}) = +${dHLat}\` (IB endothermic convention).`,
          answer: { type: "number", value: dHf, tolerance: 1, display: `${signedNum(dHf)} kJ mol⁻¹` },
          hint: "Sum all gaseous-ion formation steps, then SUBTRACT ΔH_lat⊖ to step down into the solid crystal.",
          traps: safeTraps(dHf, 1, [
            { value: gasSum + dHLat, feedback: "Forming the solid from gaseous ions is exothermic — SUBTRACT ΔH_lat⊖!" },
          ]),
          solution: [
            `Gaseous-ion sum = ${atM} + ${ie1} + ${atX} + (${ea1}) = +${gasSum} kJ mol⁻¹.`,
            `ΔH_f⊖ = ${gasSum} − ${dHLat} = **${signedNum(dHf)} kJ mol⁻¹**.`,
          ],
        };
      }

      // Tier 3: MX2 stoichiometry (Born-Haber OR Solution cycle)
      const M = rng.pick(["Mg", "Ca", "Sr", "Ba"]);
      const X = rng.pick(["F", "Cl", "Br"]);
      if (rng.bool(0.55)) {
        const atM = rng.int(140, 185);
        const ie1 = rng.int(500, 745);
        const ie2 = rng.int(960, 1460);
        const bondXX = rng.int(155, 250);
        const ea1 = -rng.int(320, 355);
        const dHf = -rng.int(650, 1150);
        const gasSum = atM + ie1 + ie2 + bondXX + 2 * ea1;
        const dHLat = gasSum - dHf;
        return {
          prompt: `Calculate \`ΔH_lat⊖\` (IB endothermic convention, in **kJ mol⁻¹**, include sign) of \`${M}${X}₂(s)\` given (\`kJ mol⁻¹\`): \`ΔH_f⊖ = ${signedNum(dHf)}\`, \`ΔH_at⊖(${M}) = +${atM}\`, \`IE₁(${M}) = +${ie1}\`, \`IE₂(${M}) = +${ie2}\`, \`E(${X}−${X}) = +${bondXX}\`, \`EA₁(${X}) = ${signedNum(ea1)}\`.`,
          answer: { type: "number", value: dHLat, tolerance: 1, display: `+${dHLat} kJ mol⁻¹` },
          hint: `1 mol ${X}₂ → 2${X}(g) uses 1 × E(${X}−${X}), while forming 2${X}⁻(g) uses 2 × EA₁(${X})!`,
          traps: safeTraps(dHLat, 1, [
            { value: dHLat - ea1, feedback: `You forgot to multiply EA₁(${X}) by 2 for the two ${X}⁻ ions!` },
            { value: dHLat + bondXX, feedback: `Do NOT double E(${X}−${X}) — breaking 1 mol of ${X}₂ already yields 2 mol of ${X}(g)!` },
          ]),
          solution: [
            `Gaseous-ion sum = ${atM} + ${ie1} + ${ie2} + ${bondXX} + 2(${ea1}) = +${gasSum} kJ mol⁻¹.`,
            `ΔH_lat⊖ = ${gasSum} − (${dHf}) = **+${dHLat} kJ mol⁻¹**.`,
          ],
        };
      }
      // MX2 solution enthalpy
      const hydM = -rng.int(1320, 1980);
      const hydX = -rng.int(320, 510);
      const dHLat = Math.abs(hydM + 2 * hydX) + rng.nonZero(-160, 90);
      const dHSol = dHLat + hydM + 2 * hydX;
      return {
        prompt: `Calculate \`ΔH_sol⊖\` (in **kJ mol⁻¹**, include sign) for \`${M}${X}₂(s)\` given \`ΔH_lat⊖ = +${dHLat}\` (IB endothermic convention), \`ΔH_hyd⊖(${M}²⁺) = ${signedNum(hydM)}\`, and \`ΔH_hyd⊖(${X}⁻) = ${signedNum(hydX)}\` (\`kJ mol⁻¹\`).`,
        answer: { type: "number", value: dHSol, tolerance: 1, display: `${signedNum(dHSol)} kJ mol⁻¹` },
        hint: `Remember there are TWO ${X}⁻ ions per mole of ${M}${X}₂: ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(${M}²⁺) + 2·ΔH_hyd⊖(${X}⁻).`,
        traps: safeTraps(dHSol, 1, [
          { value: dHLat + hydM + hydX, feedback: `Multiply ΔH_hyd⊖(${X}⁻) by 2 because 1 mol of ${M}${X}₂ releases 2 mol of ${X}⁻ ions!` },
        ]),
        solution: [
          `ΣΔH_hyd⊖ = (${hydM}) + 2(${hydX}) = ${signedNum(hydM + 2 * hydX)} kJ mol⁻¹.`,
          `ΔH_sol⊖ = +${dHLat} + (${hydM + 2 * hydX}) = **${signedNum(dHSol)} kJ mol⁻¹**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 (HL, level 2): Gibbs Free Energy ΔG = ΔH − TΔS & Crossover T [HL]
  // ===========================================================================
  {
    id: "r1-energetics-spontaneity.gibbs-spontaneity",
    topicId: "r1-energetics-spontaneity",
    title: "Gibbs Free Energy ΔG = ΔH − TΔS & Crossover T [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "entropy-gibbs-spontaneity-hl",
    generate(rng, tier) {
      if (tier === 1) {
        const T = rng.pick([250, 298, 300, 350, 400]);
        const dH = rng.nonZero(-180, 180);
        const dS = rng.nonZero(-24, 24) * 10; // −240 to +240 J K⁻¹ mol⁻¹
        const dG = roundTo(dH - T * (dS / 1000), 1);
        const unitTrap = roundTo(dH - T * dS, 1);
        const signTrap = roundTo(dH + T * (dS / 1000), 1);
        return {
          prompt: `A reaction has \`ΔH⊖ = ${signedNum(dH)} kJ mol⁻¹\` and \`ΔS⊖ = ${signedNum(dS)} J K⁻¹ mol⁻¹\`. Calculate \`ΔG\` at **${T} K** in **kJ mol⁻¹** (include the sign, to 1 decimal place).`,
          answer: { type: "number", value: dG, tolerance: 0.2, display: `${signedNum(dG)} kJ mol⁻¹` },
          hint: "Convert ΔS⊖ from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ (÷ 1000) before computing ΔG = ΔH − TΔS.",
          traps: safeTraps(dG, 0.2, [
            { value: unitTrap, feedback: "Unit mismatch! Divide ΔS⊖ (in J K⁻¹ mol⁻¹) by 1000 to convert to kJ K⁻¹ mol⁻¹ first." },
            { value: signTrap, feedback: "Check the minus sign in ΔG = ΔH − TΔS (a negative ΔS makes −TΔS positive!)." },
          ]),
          solution: [
            `Convert ΔS⊖: {{${dS} / 1000 = ${clean(dS / 1000)}}} kJ K⁻¹ mol⁻¹.`,
            `ΔG = (${dH}) − (${T} × ${clean(dS / 1000)}) = **${signedNum(dG)} kJ mol⁻¹**.`,
          ],
        };
      }

      if (tier === 2) {
        // Temperature given in °C (must add 273 to convert to Kelvin!)
        const tC = rng.pick([27, 77, 127, 177, 227, 327, 427, 527, 627]);
        const T = tC + 273; // exact multiple of 50 or 100 K (300..900 K)
        const dH = rng.nonZero(-220, 220);
        const dS = rng.nonZero(-26, 26) * 10;
        const dG = roundTo(dH - T * (dS / 1000), 1);
        const celsiusTrap = roundTo(dH - tC * (dS / 1000), 1);
        const unitTrap = roundTo(dH - T * dS, 1);
        return {
          prompt: `A reaction has \`ΔH⊖ = ${signedNum(dH)} kJ mol⁻¹\` and \`ΔS⊖ = ${signedNum(dS)} J K⁻¹ mol⁻¹\`. Assuming \`ΔH\` and \`ΔS\` remain constant with temperature, calculate \`ΔG\` at **${tC} °C** in **kJ mol⁻¹** (include the sign, to 1 decimal place; use \`T(K) = t(°C) + 273\`).`,
          answer: { type: "number", value: dG, tolerance: 0.25, display: `${signedNum(dG)} kJ mol⁻¹` },
          hint: `Convert ${tC} °C to Kelvin (+ 273) AND divide ΔS⊖ by 1000 before using ΔG = ΔH − TΔS.`,
          traps: safeTraps(dG, 0.25, [
            { value: celsiusTrap, feedback: `Always convert temperature to Kelvin first: T = ${tC} + 273 = ${T} K!` },
            { value: unitTrap, feedback: "Unit mismatch! Divide ΔS⊖ by 1000 to convert J K⁻¹ mol⁻¹ into kJ K⁻¹ mol⁻¹." },
          ]),
          solution: [
            `T = ${tC} + 273 = ${T} K; ΔS = ${clean(dS / 1000)} kJ K⁻¹ mol⁻¹.`,
            `ΔG = (${dH}) − (${T} × ${clean(dS / 1000)}) = **${signedNum(dG)} kJ mol⁻¹**.`,
          ],
        };
      }

      // Tier 3: Crossover temperature T* = ΔH/ΔS OR solving for ΔS
      if (rng.bool(0.6)) {
        const bothPos = rng.bool(0.5);
        const sign = bothPos ? 1 : -1;
        const absDH = rng.int(45, 240);
        const absDS = rng.int(80, 260);
        const dH = sign * absDH;
        const dS = sign * absDS;
        const Tstar = roundTo((absDH * 1000) / absDS, 0);
        const qualifier = bothPos ? "**minimum** temperature (in **K**, to the nearest whole number) above which" : "**maximum** temperature (in **K**, to the nearest whole number) below which";
        return {
          prompt: `A reaction has \`ΔH⊖ = ${signedNum(dH)} kJ mol⁻¹\` and \`ΔS⊖ = ${signedNum(dS)} J K⁻¹ mol⁻¹\`. Calculate the ${qualifier} this reaction is thermodynamically spontaneous.`,
          answer: { type: "number", value: Tstar, tolerance: 2, display: `${Tstar} K` },
          hint: "At the crossover point, ΔG = 0 ⇒ T = ΔH / ΔS (convert ΔS to kJ K⁻¹ mol⁻¹ first!).",
          traps: safeTraps(Tstar, 2, [
            { value: roundTo(absDH / absDS, 2), feedback: "Unit mismatch! Convert ΔS⊖ to kJ K⁻¹ mol⁻¹ (or ΔH⊖ to J mol⁻¹) before dividing." },
          ]),
          solution: [
            `Set ΔG = ΔH − TΔS = 0 ⇒ {{T = ΔH / ΔS}}.`,
            `Convert ΔS⊖ = ${clean(dS / 1000)} kJ K⁻¹ mol⁻¹.`,
            `{{T = ${dH} / ${clean(dS / 1000)} = ${roundTo((absDH * 1000) / absDS, 1)}}} ≈ **${Tstar} K**.`,
          ],
        };
      }

      // Solve for ΔS (exact integer J K⁻¹ mol⁻¹)
      const T = rng.pick([250, 300, 400, 500, 600]);
      const dS = rng.nonZero(-24, 24) * 10; // exact multiple of 10 J K⁻¹ mol⁻¹
      const dH = rng.nonZero(-180, 180);
      const dG = roundTo(dH - T * (dS / 1000), 1);
      return {
        prompt: `At **${T} K**, a reaction has \`ΔH⊖ = ${signedNum(dH)} kJ mol⁻¹\` and \`ΔG = ${signedNum(dG)} kJ mol⁻¹\`. Calculate \`ΔS⊖\` in **J K⁻¹ mol⁻¹** (include the sign).`,
        answer: { type: "number", value: dS, tolerance: 1, display: `${signedNum(dS)} J K⁻¹ mol⁻¹` },
        hint: "Rearrange ΔG = ΔH − TΔS to ΔS = (ΔH − ΔG) / T (in kJ K⁻¹ mol⁻¹), then multiply by 1000 for J K⁻¹ mol⁻¹.",
        traps: safeTraps(dS, 1, [
          { value: -dS, feedback: "Watch the sign when rearranging: TΔS = ΔH − ΔG, NOT ΔG − ΔH!" },
          { value: clean(dS / 1000), feedback: "Multiply by 1000 to convert from kJ K⁻¹ mol⁻¹ into J K⁻¹ mol⁻¹." },
        ]),
        solution: [
          `TΔS = ΔH − ΔG = (${dH}) − (${dG}) = ${signedNum(roundTo(dH - dG, 1))} kJ mol⁻¹.`,
          `ΔS = ${roundTo(dH - dG, 1)} / ${T} = ${clean(dS / 1000)} kJ K⁻¹ mol⁻¹ = **${signedNum(dS)} J K⁻¹ mol⁻¹**.`,
        ],
      };
    },
  },
];
