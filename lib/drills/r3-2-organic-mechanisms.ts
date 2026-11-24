import type { Drill, Rng } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Shared organic chemistry data pools (100% IB Chemistry FA2025 accurate)
// ---------------------------------------------------------------------------

interface AlkaneEntry {
  name: string;
  nC: number;
  formula: string;
  radical: string;
  haloPrefix: string;
  dimerName: string;
}

const ALKANES: readonly AlkaneEntry[] = [
  { name: "methane", nC: 1, formula: "CH₄", radical: "•CH₃", haloPrefix: "CH₃", dimerName: "ethane" },
  { name: "ethane", nC: 2, formula: "C₂H₆", radical: "•C₂H₅", haloPrefix: "C₂H₅", dimerName: "butane" },
  { name: "propane", nC: 3, formula: "C₃H₈", radical: "•C₃H₇", haloPrefix: "C₃H₇", dimerName: "hexane" },
  { name: "butane", nC: 4, formula: "C₄H₁₀", radical: "•C₄H₉", haloPrefix: "C₄H₉", dimerName: "octane" },
  { name: "pentane", nC: 5, formula: "C₅H₁₂", radical: "•C₅H₁₁", haloPrefix: "C₅H₁₁", dimerName: "decane" },
  { name: "hexane", nC: 6, formula: "C₆H₁₄", radical: "•C₆H₁₃", haloPrefix: "C₆H₁₃", dimerName: "dodecane" },
  { name: "heptane", nC: 7, formula: "C₇H₁₆", radical: "•C₇H₁₅", haloPrefix: "C₇H₁₅", dimerName: "tetradecane" },
  { name: "octane", nC: 8, formula: "C₈H₁₈", radical: "•C₈H₁₇", haloPrefix: "C₈H₁₇", dimerName: "hexadecane" },
];

const POLY_SUBS = [
  { sub: "CH₃Cl", rad: "•CH₂Cl", prod: "CH₂Cl₂", hal: "Cl" },
  { sub: "CH₂Cl₂", rad: "•CHCl₂", prod: "CHCl₃", hal: "Cl" },
  { sub: "CHCl₃", rad: "•CCl₃", prod: "CCl₄", hal: "Cl" },
  { sub: "CH₃Br", rad: "•CH₂Br", prod: "CH₂Br₂", hal: "Br" },
  { sub: "CH₂Br₂", rad: "•CHBr₂", prod: "CHBr₃", hal: "Br" },
  { sub: "C₂H₅Cl", rad: "•C₂H₄Cl", prod: "C₂H₄Cl₂", hal: "Cl" },
  { sub: "C₂H₅Br", rad: "•C₂H₄Br", prod: "C₂H₄Br₂", hal: "Br" },
  { sub: "C₃H₇Cl", rad: "•C₃H₆Cl", prod: "C₃H₆Cl₂", hal: "Cl" },
] as const;

const SUB_DIGITS = "₀₁₂₃₄₅₆₇₈₉";
function sub(n: number): string {
  return String(n)
    .split("")
    .map((d) => SUB_DIGITS[Number(d)] ?? d)
    .join("");
}

const HALOGENS = [
  { sym: "Cl", di: "Cl₂", rad: "Cl•", acid: "HCl", hxEnthalpy: 431, xxEnthalpy: 242, cxEnthalpy: 324, name: "chlorine", action: "chlorination" },
  { sym: "Br", di: "Br₂", rad: "Br•", acid: "HBr", hxEnthalpy: 366, xxEnthalpy: 193, cxEnthalpy: 285, name: "bromine", action: "bromination" },
] as const;

// ---------------------------------------------------------------------------
// DRILL 1 (SL, Level 1): Free-Radical Substitution Step & Thermochemistry ID
// ---------------------------------------------------------------------------
const radicalStepId: Drill = {
  id: "r3-2-organic-mechanisms.radical-step-id",
  topicId: "r3-2-organic-mechanisms",
  title: "Free-Radical Substitution: Steps, Dimers & Bond Enthalpy",
  level: 1,
  ibLevel: "SL",
  guideRef: "free-radical-substitution",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const alk = rng.pick(ALKANES);
      const hal = rng.pick(HALOGENS);
      const stepKind = rng.int(0, 4);
      if (stepKind === 0) {
        return {
          prompt: `During the photochemical ${hal.action} of **${alk.name}** (${alk.formula}), classify this elementary step as **initiation**, **propagation**, or **termination**:\n\`${hal.di} —(UV)→ ${hal.rad} + ${hal.rad}\``,
          answer: { type: "text", accept: ["initiation", "initiation step"], display: "initiation" },
          traps: [
            {
              spec: { type: "text", accept: ["propagation", "termination"] },
              feedback: "Count radicals on each side: 0 on the left → 2 on the right. Creating radicals from a neutral molecule is initiation.",
            },
          ],
          hint: "Count free radicals (dots) on the left vs right: 0 → 2 is initiation, 1 → 1 is propagation, 2 → 0 is termination.",
          solution: [
            `UV light cleaves the ${hal.sym}−${hal.sym} bond homolytically (0 radicals → 2 radicals).`,
            "This is the **initiation** step.",
          ],
        };
      }
      if (stepKind === 1) {
        return {
          prompt: `During the UV ${hal.action} of **${alk.name}**, classify this elementary step as **initiation**, **propagation**, or **termination**:\n\`${alk.formula} + ${hal.rad} → ${alk.radical} + ${hal.acid}\``,
          answer: { type: "text", accept: ["propagation", "propagation step"], display: "propagation" },
          traps: [
            {
              spec: { type: "text", accept: ["initiation", "termination"] },
              feedback: "There is 1 radical on the left and 1 radical on the right (1 → 1), keeping the chain alive: propagation.",
            },
          ],
          hint: "Count radicals on both sides: 1 radical enters and 1 radical exits.",
          solution: [
            `One radical (${hal.rad}) is consumed and one new radical (${alk.radical}) is produced (1 → 1).`,
            "This is **propagation** (Step 1: hydrogen abstraction).",
          ],
        };
      }
      if (stepKind === 2) {
        return {
          prompt: `During the UV ${hal.action} of **${alk.name}**, classify this elementary step as **initiation**, **propagation**, or **termination**:\n\`${alk.radical} + ${hal.di} → ${alk.haloPrefix}${hal.sym} + ${hal.rad}\``,
          answer: { type: "text", accept: ["propagation", "propagation step"], display: "propagation" },
          traps: [
            {
              spec: { type: "text", accept: ["initiation", "termination"] },
              feedback: "1 radical on the left becomes 1 regenerated halogen radical on the right (1 → 1) — propagation.",
            },
          ],
          hint: "Notice that the halogen radical is regenerated on the right so the chain keeps looping.",
          solution: [
            `1 radical (${alk.radical}) reacts and 1 radical (${hal.rad}) is regenerated (1 → 1).`,
            "This is **propagation** (Step 2).",
          ],
        };
      }
      if (stepKind === 3) {
        return {
          prompt: `During the UV ${hal.action} of **${alk.name}**, classify this elementary step as **initiation**, **propagation**, or **termination**:\n\`${alk.radical} + ${hal.rad} → ${alk.haloPrefix}${hal.sym}\``,
          answer: { type: "text", accept: ["termination", "termination step"], display: "termination" },
          traps: [
            {
              spec: { type: "text", accept: ["initiation", "propagation"] },
              feedback: "Two radicals combine into zero radicals (2 → 0), stopping the chain — termination.",
            },
          ],
          hint: "Count unpaired-electron dots on left vs right: 2 radicals combine to leave 0 radicals.",
          solution: [
            `Two radicals (${alk.radical} and ${hal.rad}) pair up to form a neutral molecule (2 → 0).`,
            "This is a **termination** step.",
          ],
        };
      }
      const dimerH = 2 * (2 * alk.nC + 1);
      const dimerFormula = `C${sub(2 * alk.nC)}H${sub(dimerH)}`;
      return {
        prompt: `During the UV ${hal.action} of **${alk.name}**, classify this elementary step as **initiation**, **propagation**, or **termination**:\n\`${alk.radical} + ${alk.radical} → ${dimerFormula}\``,
        answer: { type: "text", accept: ["termination", "termination step"], display: "termination" },
        traps: [
          {
            spec: { type: "text", accept: ["initiation", "propagation"] },
            feedback: "Two alkyl radicals combine into a neutral dimer alkane (2 → 0 radicals) — termination.",
          },
        ],
        hint: "Two radicals collide and leave zero radicals on the product side.",
        solution: [
          `Two ${alk.radical} radicals couple into ${alk.dimerName} (2 radicals → 0 radicals).`,
          "This is a **termination** step.",
        ],
      };
    }

    if (tier === 2) {
      const mode = rng.int(0, 2);
      if (mode === 0) {
        // Further multi-substitution step classification
        const p = rng.pick(POLY_SUBS);
        const isProp1 = rng.bool();
        if (isProp1) {
          const isStep1 = rng.bool();
          if (isStep1) {
            return {
              prompt: `In **further substitution** of ${p.sub} with ${p.hal}₂ under UV light, classify this step as **initiation**, **propagation**, or **termination**:\n\`${p.sub} + ${p.hal}• → ${p.rad} + H${p.hal}\``,
              answer: { type: "text", accept: ["propagation", "propagation step"], display: "propagation" },
              hint: "Check the radical count on left vs right even during multi-substitution.",
              solution: [
                `1 radical (${p.hal}•) on the left → 1 radical (${p.rad}) on the right (1 → 1).`,
                "This is a **propagation** step in further substitution.",
              ],
            };
          }
          return {
            prompt: `In **further substitution** of ${p.sub} with ${p.hal}₂ under UV light, classify this step as **initiation**, **propagation**, or **termination**:\n\`${p.rad} + ${p.hal}₂ → ${p.prod} + ${p.hal}•\``,
            answer: { type: "text", accept: ["propagation", "propagation step"], display: "propagation" },
            hint: "Count unpaired electrons on both sides: does the halogen radical regenerate?",
            solution: [
              `1 radical (${p.rad}) → 1 radical (${p.hal}•): radical count stays 1 → 1.`,
              "This is a **propagation** step.",
            ],
          };
        }
        return {
          prompt: `In **further substitution** of ${p.sub} with ${p.hal}₂ under UV light, classify this step as **initiation**, **propagation**, or **termination**:\n\`${p.rad} + ${p.hal}• → ${p.prod}\``,
          answer: { type: "text", accept: ["termination", "termination step"], display: "termination" },
          hint: "Two radicals combine to leave zero radicals on the product side.",
          solution: [
            `2 radicals (${p.rad} + ${p.hal}•) combine into 0 radicals (${p.prod}).`,
            "This is a **termination** step.",
          ],
        };
      }
      if (mode === 1) {
        // Dimer termination carbon or hydrogen count
        const nC = rng.int(1, 10);
        const askH = rng.bool();
        const hal = rng.pick(HALOGENS);
        const radH = 2 * nC + 1;
        const dimerC = 2 * nC;
        const dimerH = 2 * radH;
        const alkFormula = `C${nC === 1 ? "" : sub(nC)}H${sub(2 * nC + 2)}`;
        const radFormula = `•C${nC === 1 ? "" : sub(nC)}H${sub(radH)}`;
        const dimerFormula = `C${sub(dimerC)}H${sub(dimerH)}`;
        return {
          prompt: `When the alkane ${alkFormula} reacts with ${hal.di} under UV light, two alkyl radicals (${radFormula}) combine in a termination step to form a trace alkane dimer. How many **${askH ? "hydrogen" : "carbon"} atoms** are in one molecule of this dimer?`,
          answer: { type: "number", value: askH ? dimerH : dimerC, display: String(askH ? dimerH : dimerC) },
          traps: askH
            ? [{ spec: { type: "number", value: 2 * (2 * nC + 2) }, feedback: "Each alkyl radical lost 1 H during propagation (•CₙH₂ₙ₊₁), so the dimer has 2(2n+1) = 4n+2 hydrogens, not 4n+4!" }]
            : [{ spec: { type: "number", value: nC }, feedback: "Two radicals couple together, doubling the carbon chain from n to 2n." }],
          hint: `Write the coupling equation: ${radFormula} + ${radFormula} → ${dimerFormula}.`,
          solution: [
            `Termination dimerization: ${radFormula} + ${radFormula} → ${dimerFormula}.`,
            `Each molecule contains **${askH ? dimerH : dimerC}** ${askH ? "hydrogen" : "carbon"} atoms.`,
          ],
        };
      }
      // Bond fission type (homolytic vs heterolytic)
      const alk = rng.pick(ALKANES);
      const hal = rng.pick(HALOGENS);
      const isHom = rng.bool();
      if (isHom) {
        return {
          prompt: `During UV ${hal.action} of ${alk.name}, ${hal.di} breaks into two neutral ${hal.rad} radicals using fish-hook half-arrows. State whether this is **homolytic** or **heterolytic** fission.`,
          answer: { type: "text", accept: ["homolytic", "homolytic fission"], display: "homolytic" },
          hint: "Each atom keeps 1 electron from the shared pair (neutral radicals, fish-hook arrows).",
          solution: [
            `Equal cleavage forming two neutral ${hal.rad} radicals is **homolytic** fission.`,
          ],
        };
      }
      return {
        prompt: `When ${alk.haloPrefix}${hal.sym} is warmed with aqueous NaOH, the C−${hal.sym} bond breaks so both electrons move onto ${hal.sym} to form ${hal.sym}⁻. State whether this is **homolytic** or **heterolytic** fission.`,
        answer: { type: "text", accept: ["heterolytic", "heterolytic fission"], display: "heterolytic" },
        hint: "Both electrons go to one atom, forming charged ions (full curly arrow).",
        solution: [
          `Unequal cleavage giving both shared electrons to ${hal.sym} (forming ${hal.sym}⁻) is **heterolytic** fission.`,
        ],
      };
    }

    // Tier 3: Thermochemistry ΔH of propagation step 1 or step 2
    const alk = rng.pick(ALKANES);
    const chBond = rng.pick([402, 406, 410, 412, 414, 418, 422, 426, 430, 435]);
    const halChoice = rng.pick([
      { sym: "Cl", di: "Cl₂", rad: "Cl•", acid: "HCl", hx: 431, xx: 242, cx: 324 },
      { sym: "Br", di: "Br₂", rad: "Br•", acid: "HBr", hx: 366, xx: 193, cx: 285 },
      { sym: "I", di: "I₂", rad: "I•", acid: "HI", hx: 298, xx: 151, cx: 228 },
    ]);
    const isStep1 = rng.bool();
    if (isStep1) {
      const dh = chBond - halChoice.hx;
      return {
        prompt: `For ${alk.name} (${alk.formula}) reacting with ${halChoice.rad}, the broken C−H bond enthalpy is **${chBond} kJ mol⁻¹** and the H−${halChoice.sym} bond enthalpy is **${halChoice.hx} kJ mol⁻¹**. Calculate ΔH (in kJ mol⁻¹, with sign) for propagation Step 1:\n\`${alk.formula} + ${halChoice.rad} → ${alk.radical} + ${halChoice.acid}\``,
        answer: { type: "number", value: dh, display: `${num(dh)} kJ mol⁻¹` },
        traps: [
          {
            spec: { type: "number", value: -dh },
            feedback: "Check the sign! ΔH = Σ(bonds broken) − Σ(bonds formed), NOT formed minus broken.",
          },
        ],
        hint: "Use ΔH = E(bond broken) − E(bond formed) = E(C−H) − E(H−X).",
        solution: [
          `Bond broken: C−H = ${chBond} kJ mol⁻¹; bond formed: H−${halChoice.sym} = ${halChoice.hx} kJ mol⁻¹.`,
          `ΔH = ${chBond} − ${halChoice.hx} = **${num(dh)} kJ mol⁻¹**.`,
        ],
      };
    }
    const cxShift = rng.pick([-8, -4, 0, 4, 8]);
    const cxVal = halChoice.cx + cxShift;
    const dh2 = halChoice.xx - cxVal;
    return {
      prompt: `For ${alk.radical} reacting with ${halChoice.di} in propagation Step 2 (\`${alk.radical} + ${halChoice.di} → ${alk.haloPrefix}${halChoice.sym} + ${halChoice.rad}\`), the ${halChoice.sym}−${halChoice.sym} bond enthalpy is **${halChoice.xx} kJ mol⁻¹** and the C−${halChoice.sym} bond enthalpy is **${cxVal} kJ mol⁻¹**. Calculate ΔH (in kJ mol⁻¹, with sign).`,
      answer: { type: "number", value: dh2, display: `${num(dh2)} kJ mol⁻¹` },
      traps: [
        {
          spec: { type: "number", value: -dh2 },
          feedback: "Remember ΔH = (bond broken) − (bond formed). Breaking X−X and forming stronger C−X is exothermic (negative ΔH).",
        },
      ],
      hint: "Use ΔH = E(X−X broken) − E(C−X formed).",
      solution: [
        `Bond broken: ${halChoice.sym}−${halChoice.sym} = ${halChoice.xx} kJ mol⁻¹; bond formed: C−${halChoice.sym} = ${cxVal} kJ mol⁻¹.`,
        `ΔH = ${halChoice.xx} − ${cxVal} = **${num(dh2)} kJ mol⁻¹**.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 2 (SL, Level 2): Nucleophiles, Electrophiles, Reaction Types & Atom Economy
// ---------------------------------------------------------------------------
const NUCLEOPHILES = [
  { formula: "OH⁻", name: "hydroxide ion", reason: "carries a negative charge and lone pairs on oxygen" },
  { formula: "CN⁻", name: "cyanide ion", reason: "carries a negative charge and a lone pair on carbon" },
  { formula: "NH₃", name: "ammonia", reason: "has a non-bonding lone pair on nitrogen" },
  { formula: "H₂O", name: "water", reason: "has two lone pairs on oxygen" },
  { formula: "I⁻", name: "iodide ion", reason: "is a negatively charged halide ion with lone pairs" },
  { formula: "Br⁻", name: "bromide ion", reason: "is a negatively charged halide ion with lone pairs" },
  { formula: "Cl⁻", name: "chloride ion", reason: "is a negatively charged halide ion with lone pairs" },
  { formula: "CH₃O⁻", name: "methoxide ion", reason: "carries a negative charge and lone pairs on oxygen" },
  { formula: "CH₃NH₂", name: "methylamine", reason: "has a lone pair on nitrogen" },
] as const;

const ELECTROPHILES = [
  { formula: "H⁺", name: "hydrogen ion", reason: "is positively charged with an empty 1s orbital" },
  { formula: "NO₂⁺", name: "nitronium ion", reason: "is positively charged and electron-deficient at nitrogen" },
  { formula: "BF₃", name: "boron trifluoride", reason: "has an incomplete octet (6 valence e⁻) around boron" },
  { formula: "AlCl₃", name: "aluminium chloride", reason: "has an incomplete octet (6 valence e⁻) around aluminium" },
  { formula: "Brδ⁺ (in polarized Br₂)", name: "polarized bromine", reason: "has an induced partial positive charge that accepts π electrons" },
  { formula: "Hδ⁺ (in HBr)", name: "hydrogen in HBr", reason: "has a partial positive charge due to polar H−Br" },
  { formula: "CH₃⁺", name: "methyl carbocation", reason: "has a positively charged carbon with only 6 valence electrons" },
  { formula: "(CH₃)₃C⁺", name: "tertiary carbocation", reason: "has a positively charged carbon with an empty 2p orbital" },
] as const;

const RXN_SUBSTRATES = [
  { name: "ethene", kind: "alkene", addBr2: "1,2-dibromoethane", hyd: "ethane" },
  { name: "propene", kind: "alkene", addBr2: "1,2-dibromopropane", hyd: "propane" },
  { name: "but-1-ene", kind: "alkene", addBr2: "1,2-dibromobutane", hyd: "butane" },
  { name: "but-2-ene", kind: "alkene", addBr2: "2,3-dibromobutane", hyd: "butane" },
  { name: "pent-1-ene", kind: "alkene", addBr2: "1,2-dibromopentane", hyd: "pentane" },
  { name: "pent-2-ene", kind: "alkene", addBr2: "2,3-dibromopentane", hyd: "pentane" },
  { name: "hex-1-ene", kind: "alkene", addBr2: "1,2-dibromohexane", hyd: "hexane" },
  { name: "cyclohexene", kind: "alkene", addBr2: "1,2-dibromocyclohexane", hyd: "cyclohexane" },
] as const;

const HALO_HYDROLYSIS = [
  { sub: "chloromethane", nC: 1, hal: "Cl", halMr: 35.45, alc: "methanol" },
  { sub: "bromomethane", nC: 1, hal: "Br", halMr: 79.90, alc: "methanol" },
  { sub: "chloroethane", nC: 2, hal: "Cl", halMr: 35.45, alc: "ethanol" },
  { sub: "bromoethane", nC: 2, hal: "Br", halMr: 79.90, alc: "ethanol" },
  { sub: "iodoethane", nC: 2, hal: "I", halMr: 126.90, alc: "ethanol" },
  { sub: "1-chloropropane", nC: 3, hal: "Cl", halMr: 35.45, alc: "propan-1-ol" },
  { sub: "1-bromopropane", nC: 3, hal: "Br", halMr: 79.90, alc: "propan-1-ol" },
  { sub: "1-iodopropane", nC: 3, hal: "I", halMr: 126.90, alc: "propan-1-ol" },
  { sub: "1-chlorobutane", nC: 4, hal: "Cl", halMr: 35.45, alc: "butan-1-ol" },
  { sub: "1-bromobutane", nC: 4, hal: "Br", halMr: 79.90, alc: "butan-1-ol" },
  { sub: "1-iodobutane", nC: 4, hal: "I", halMr: 126.90, alc: "butan-1-ol" },
  { sub: "1-chloropentane", nC: 5, hal: "Cl", halMr: 35.45, alc: "pentan-1-ol" },
  { sub: "1-bromopentane", nC: 5, hal: "Br", halMr: 79.90, alc: "pentan-1-ol" },
] as const;

const nucleophileElectrophileRxn: Drill = {
  id: "r3-2-organic-mechanisms.nucleophile-electrophile-rxn",
  topicId: "r3-2-organic-mechanisms",
  title: "Nucleophiles, Electrophiles & Core Organic Reaction Types",
  level: 2,
  ibLevel: "SL",
  guideRef: "nucleophiles-electrophiles-core",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const isNuc = rng.bool();
      if (isNuc) {
        const sp = rng.pick(NUCLEOPHILES);
        const sub = rng.pick(HALO_HYDROLYSIS);
        return {
          prompt: `When **${sp.name} (${sp.formula})** reacts with **${sub.sub}**, state whether **${sp.formula}** acts as a **nucleophile** or an **electrophile**.`,
          answer: { type: "text", accept: ["nucleophile", "a nucleophile"], display: "nucleophile" },
          traps: [
            {
              spec: { type: "text", accept: ["electrophile", "an electrophile"] },
              feedback: `${sp.formula} ${sp.reason}, so it DONATES an electron pair — making it a nucleophile!`,
            },
          ],
          hint: "Does this species donate an electron pair (electron-rich) or accept an electron pair (electron-deficient)?",
          solution: [
            `${sp.formula} ${sp.reason}.`,
            "Because it donates an electron pair to Cδ⁺, it acts as a **nucleophile**.",
          ],
        };
      }
      const sp = rng.pick(ELECTROPHILES);
      const sub = rng.pick(RXN_SUBSTRATES);
      return {
        prompt: `When **${sp.name} (${sp.formula})** interacts with an electron-rich π bond such as **${sub.name}** (or an aromatic ring), state whether **${sp.formula}** acts as a **nucleophile** or an **electrophile**.`,
        answer: { type: "text", accept: ["electrophile", "an electrophile"], display: "electrophile" },
        traps: [
          {
            spec: { type: "text", accept: ["nucleophile", "a nucleophile"] },
            feedback: `${sp.formula} ${sp.reason}, so it ACCEPTS an electron pair — making it an electrophile!`,
          },
        ],
        hint: "Is this species electron-deficient (positive charge, δ⁺, or incomplete octet)?",
        solution: [
          `${sp.formula} ${sp.reason}.`,
          "Because it accepts an electron pair, it acts as an **electrophile**.",
        ],
      };
    }

    if (tier === 2) {
      const kind = rng.int(0, 2);
      if (kind === 0) {
        const sub = rng.pick(RXN_SUBSTRATES);
        const reag = rng.pick([
          "Br₂(aq) at room temperature in the dark",
          "HBr gas at room temperature",
          "steam H₂O(g) with H₃PO₄ catalyst at 300 °C and 60 atm",
          "H₂ gas over a Ni catalyst at 150 °C",
        ]);
        return {
          prompt: `Classify the reaction mechanism when **${sub.name}** reacts with **${reag}** (**electrophilic addition**, **nucleophilic substitution**, or **free-radical substitution**).`,
          answer: {
            type: "text",
            accept: ["electrophilic addition", "addition"],
            display: "electrophilic addition",
          },
          traps: [
            {
              spec: { type: "text", accept: ["nucleophilic substitution", "free-radical substitution", "free radical substitution"] },
              feedback: `${sub.name} is an alkene with an electron-rich C=C π bond — its hallmark reaction is electrophilic addition.`,
            },
          ],
          hint: "Identify the functional group of the organic reactant: C=C double bonds undergo addition.",
          solution: [
            `${sub.name} contains an electron-rich C=C π bond that attracts electrophiles across the double bond.`,
            "Mechanism class: **electrophilic addition**.",
          ],
        };
      }
      if (kind === 1) {
        const sub = rng.pick(HALO_HYDROLYSIS);
        const nuc = rng.pick(["warm aqueous NaOH under reflux", "warm aqueous KOH under reflux", "aqueous KCN in ethanol under reflux"]);
        return {
          prompt: `Classify the reaction mechanism when **${sub.sub}** reacts with **${nuc}** (**electrophilic addition**, **nucleophilic substitution**, or **free-radical substitution**).`,
          answer: {
            type: "text",
            accept: ["nucleophilic substitution", "substitution"],
            display: "nucleophilic substitution",
          },
          traps: [
            {
              spec: { type: "text", accept: ["electrophilic addition", "free-radical substitution", "free radical substitution"] },
              feedback: `${sub.sub} has a polar Cδ⁺−${sub.hal}δ⁻ bond attacked by a lone-pair donor — nucleophilic substitution!`,
            },
          ],
          hint: "Check the bond polarity Cδ⁺−Xδ⁻ and the anionic lone-pair donor reagent.",
          solution: [
            `${sub.sub} has an electrophilic Cδ⁺ atom attacked by the electron-rich nucleophile, displacing ${sub.hal}⁻.`,
            "Mechanism class: **nucleophilic substitution**.",
          ],
        };
      }
      const alk = rng.pick(ALKANES);
      const hal = rng.pick(HALOGENS);
      return {
        prompt: `Classify the reaction mechanism when **${alk.name} (${alk.formula})** reacts with **${hal.di} under UV light** (**electrophilic addition**, **nucleophilic substitution**, or **free-radical substitution**).`,
        answer: {
          type: "text",
          accept: ["free-radical substitution", "free radical substitution"],
          display: "free-radical substitution",
        },
        hint: "Alkanes have strong non-polar σ bonds and react with halogens only via UV-generated radicals.",
        solution: [
          `UV light initiates homolytic cleavage of ${hal.di} to substitute H atoms on saturated ${alk.name}.`,
          "Mechanism class: **free-radical substitution**.",
        ],
      };
    }

    // Tier 3: Atom economy calculations & core product naming
    const mode = rng.int(0, 2);
    if (mode === 0) {
      // Exact % atom economy of R-X + NaOH -> R-OH + NaX (using IB standard Ar: C=12.01, H=1.01, O=16.00, Na=22.99)
      const h = rng.pick(HALO_HYDROLYSIS);
      const mrAlc = roundTo(h.nC * 12.01 + (2 * h.nC + 2) * 1.01 + 16.00, 2);
      const mrRx = roundTo(h.nC * 12.01 + (2 * h.nC + 1) * 1.01 + h.halMr, 2);
      const mrNaOH = 40.00;
      const totalReactants = roundTo(mrRx + mrNaOH, 2);
      const ae = roundTo((mrAlc / totalReactants) * 100, 1);
      return {
        prompt: `**${h.sub}** (M_r = ${mrRx}) is hydrolysed with **NaOH(aq)** (M_r = 40.00) to produce **${h.alc}** (M_r = ${mrAlc}) and Na${h.hal}. Calculate the **percentage atom economy** to **1 decimal place** (enter number only, e.g. 52.4).`,
        answer: { type: "number", value: ae, tolerance: 0.2, display: `${ae}%` },
        traps: [
          {
            spec: { type: "number", value: roundTo((mrAlc / mrRx) * 100, 1), tolerance: 0.3 },
            feedback: "Include BOTH reactants (halogenoalkane + NaOH) in the total reactant molar mass denominator!",
          },
        ],
        hint: "Atom economy = [M_r(desired alcohol) / (M_r(halogenoalkane) + M_r(NaOH))] × 100%.",
        solution: [
          `Total M_r of reactants = ${mrRx} + 40.00 = ${totalReactants}.`,
          `Atom economy = {{(${mrAlc}/${totalReactants}) * 100}} = **${ae}%**.`,
        ],
      };
    }
    if (mode === 1) {
      const sub = rng.pick(RXN_SUBSTRATES);
      const askBr = rng.bool();
      if (askBr) {
        return {
          prompt: `Give the IUPAC name of the single product formed when **${sub.name}** undergoes electrophilic addition with **Br₂** in the dark.`,
          answer: { type: "text", accept: [sub.addBr2, sub.addBr2.replace(/-/g, " ")], display: sub.addBr2 },
          hint: "Attach one bromine atom to each carbon of the C=C double bond.",
          solution: [
            `Breaking the π bond of ${sub.name} and adding one Br to each double-bond carbon gives **${sub.addBr2}**.`,
          ],
        };
      }
      return {
        prompt: `Give the IUPAC name of the single saturated product formed when **${sub.name}** undergoes catalytic hydrogenation with **H₂ over Ni at 150 °C**.`,
        answer: { type: "text", accept: [sub.hyd], display: sub.hyd },
        hint: "Hydrogenation saturates the C=C double bond into a single C−C bond with the same carbon skeleton.",
        solution: [
          `Adding H₂ across the C=C bond of ${sub.name} yields **${sub.hyd}** (100% atom economy).`,
        ],
      };
    }
    // Atom economy of alkene addition vs haloalkane substitution (100% check)
    const sub = rng.pick(RXN_SUBSTRATES);
    const reag = rng.pick(["Br₂", "Cl₂", "HBr", "HCl", "H₂", "steam H₂O(g)"]);
    return {
      prompt: `**${sub.name}** reacts with **${reag}** via electrophilic addition to form a single saturated organic product. State the exact **percentage atom economy** (whole number).`,
      answer: { type: "number", value: 100, display: "100%" },
      hint: "How many byproduct molecules are formed in an addition reaction?",
      solution: [
        `Every atom of ${sub.name} and ${reag} is incorporated into the single addition product → **100%** atom economy.`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 3 (HL, Level 2): SN1 vs SN2 Kinetics, Rate Factors & Stereochemistry
// ---------------------------------------------------------------------------
interface HaloSubstrate {
  name: string;
  formula: string;
  degree: "1°" | "3°";
  mech: "SN2" | "SN1";
  stereo: string;
  solvent: string;
}

const SN_SUBSTRATES: readonly HaloSubstrate[] = [
  { name: "bromomethane", formula: "CH₃Br", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "chloromethane", formula: "CH₃Cl", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "iodomethane", formula: "CH₃I", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "bromoethane", formula: "CH₃CH₂Br", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "chloroethane", formula: "CH₃CH₂Cl", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "iodoethane", formula: "CH₃CH₂I", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-chloropropane", formula: "CH₃CH₂CH₂Cl", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-bromopropane", formula: "CH₃CH₂CH₂Br", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-iodopropane", formula: "CH₃CH₂CH₂I", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-chlorobutane", formula: "CH₃(CH₂)₃Cl", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-bromobutane", formula: "CH₃(CH₂)₃Br", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "1-bromopentane", formula: "CH₃(CH₂)₄Br", degree: "1°", mech: "SN2", stereo: "inversion", solvent: "polar aprotic" },
  { name: "2-chloro-2-methylpropane", formula: "(CH₃)₃CCl", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "2-bromo-2-methylpropane", formula: "(CH₃)₃CBr", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "2-iodo-2-methylpropane", formula: "(CH₃)₃CI", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "2-chloro-2-methylbutane", formula: "(CH₃)₂C(Cl)C₂H₅", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "2-bromo-2-methylbutane", formula: "(CH₃)₂C(Br)C₂H₅", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "2-iodo-2-methylbutane", formula: "(CH₃)₂C(I)C₂H₅", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "3-chloro-3-methylpentane", formula: "(C₂H₅)₂C(Cl)CH₃", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
  { name: "3-bromo-3-methylpentane", formula: "(C₂H₅)₂C(Br)CH₃", degree: "3°", mech: "SN1", stereo: "racemic", solvent: "polar protic" },
];

const sn1Sn2Predictor: Drill = {
  id: "r3-2-organic-mechanisms.sn1-sn2-predictor",
  topicId: "r3-2-organic-mechanisms",
  title: "SN1 vs SN2: Kinetics, Rate Factors & Stereochemistry [HL]",
  level: 2,
  ibLevel: "HL",
  guideRef: "sn1-sn2-markovnikov-hl",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const sub = rng.pick(SN_SUBSTRATES);
      const qType = rng.int(0, 2);
      if (qType === 0) {
        return {
          prompt: `State whether **${sub.name}** (${sub.formula}) undergoes hydrolysis with OH⁻ predominantly by **SN1** or **SN2**.`,
          answer: { type: "text", accept: [sub.mech, sub.mech.toLowerCase()], display: sub.mech },
          traps: [
            {
              spec: { type: "text", accept: [sub.mech === "SN1" ? "SN2" : "SN1"] },
              feedback: `${sub.name} is a ${sub.degree} halogenoalkane, so it reacts via ${sub.mech}!`,
            },
          ],
          hint: "Classify the halogen-bearing carbon as primary/methyl (SN2) or tertiary (SN1).",
          solution: [
            `${sub.name} (${sub.formula}) is a **${sub.degree}** halogenoalkane.`,
            `Therefore it reacts predominantly by **${sub.mech}**.`,
          ],
        };
      }
      if (qType === 1) {
        const order = sub.mech === "SN2" ? 2 : 1;
        return {
          prompt: `**${sub.name}** (${sub.formula}) reacts with aqueous NaOH via its dominant mechanism. What is the **overall reaction order** (1 or 2)?`,
          answer: { type: "number", value: order, display: String(order) },
          traps: [
            {
              spec: { type: "number", value: order === 2 ? 1 : 2 },
              feedback: `${sub.name} is ${sub.degree} (${sub.mech}), so rate = ${sub.mech === "SN2" ? "k[RX][OH⁻] (order 2)" : "k[RX] (order 1)"}.`,
            },
          ],
          hint: "First identify whether the substrate is primary/methyl (SN2, bimolecular) or tertiary (SN1, unimolecular).",
          solution: [
            `${sub.name} is ${sub.degree} → **${sub.mech}**.`,
            `Rate equation: ${sub.mech === "SN2" ? "rate = k[RX][OH⁻]" : "rate = k[RX]"} → overall order = **${order}**.`,
          ],
        };
      }
      const steps = sub.mech === "SN2" ? 1 : 2;
      return {
        prompt: `How many **elementary steps** (and transition-state peaks on the energy profile) occur in the dominant hydrolysis mechanism of **${sub.name}** (${sub.formula})?`,
        answer: { type: "number", value: steps, display: String(steps) },
        traps: [
          {
            spec: { type: "number", value: steps === 1 ? 2 : 1 },
            feedback: "Remember the flip: SN2 has 1 concerted step (1 peak); SN1 has 2 steps via a carbocation intermediate (2 peaks)!",
          },
        ],
        hint: "Determine SN1 vs SN2 from the substrate structure, then recall: SN2 = 1 step; SN1 = 2 steps.",
        solution: [
          `${sub.name} is ${sub.degree} → **${sub.mech}**.`,
          `${sub.mech} proceeds in **${steps}** elementary step${steps > 1 ? "s" : ""}.`,
        ],
      };
    }

    if (tier === 2) {
      const sub = rng.pick(SN_SUBSTRATES);
      const a = rng.pick([2, 3, 4, 5]);
      const b = rng.pick([2, 3, 4, 5, 6]);
      const factor = sub.mech === "SN2" ? a * b : a;
      const wrongOther = sub.mech === "SN2" ? a : a * b;
      return {
        prompt: `**${sub.name}** (${sub.formula}) reacts with aqueous NaOH via its dominant substitution mechanism. If **[${sub.name}]** is multiplied by **${a}** and **[OH⁻]** is multiplied by **${b}** at constant temperature, by what **factor** does the initial rate increase?`,
        answer: { type: "number", value: factor, display: String(factor) },
        traps: [
          {
            spec: { type: "number", value: wrongOther },
            feedback: `${sub.name} is ${sub.degree} and obeys **${sub.mech}** (${sub.mech === "SN2" ? "rate = k[RX][OH⁻]" : "rate = k[RX] — zero order in OH⁻"})!`,
          },
        ],
        hint: `Classify ${sub.name} (${sub.degree}) → write its rate equation (${sub.mech === "SN2" ? "includes [OH⁻]" : "independent of [OH⁻]"}) → plug in the multipliers.`,
        solution: [
          `${sub.name} is a ${sub.degree} halogenoalkane, so it follows **${sub.mech}**.`,
          sub.mech === "SN2"
            ? `rate = k[RX][OH⁻] → factor = {{${a} * ${b} = ${factor}}}.`
            : `rate = k[RX] (zero order in OH⁻) → factor = **${factor}** (changing [OH⁻] has no effect).`,
        ],
      };
    }

    // Tier 3: Quantitative rate constant k calculation OR solvent/leaving-group kinetic comparison
    const mode = rng.int(0, 2);
    if (mode <= 1) {
      const sub = rng.pick(SN_SUBSTRATES);
      const rxConc = rng.pick([0.02, 0.04, 0.05, 0.08, 0.10, 0.20, 0.25]);
      const ohConc = rng.pick([0.05, 0.10, 0.20, 0.25, 0.40, 0.50]);
      const kVal = rng.pick([0.012, 0.015, 0.020, 0.024, 0.025, 0.030, 0.040, 0.050, 0.060, 0.080]);
      const rate = sub.mech === "SN2" ? clean(kVal * rxConc * ohConc) : clean(kVal * rxConc);
      const units = sub.mech === "SN2" ? "dm³ mol⁻¹ s⁻¹" : "s⁻¹";
      const wrongK = sub.mech === "SN2" ? clean(rate / rxConc) : clean(rate / (rxConc * ohConc));
      return {
        prompt: `**${sub.name}** (${sub.formula}) reacts with NaOH via its dominant mechanism. When **[RX] = ${rxConc} mol dm⁻³** and **[OH⁻] = ${ohConc} mol dm⁻³**, the initial rate is **${rate} mol dm⁻³ s⁻¹**. Calculate the rate constant **k** (in ${units}).`,
        answer: { type: "number", value: kVal, tolerance: clean(kVal * 0.01), display: `${kVal} ${units}` },
        traps: [
          {
            spec: { type: "number", value: wrongK, tolerance: clean(wrongK * 0.015) },
            feedback: `Check the mechanism: ${sub.name} is ${sub.degree} (${sub.mech}), so ${sub.mech === "SN2" ? "divide by BOTH [RX] and [OH⁻]" : "divide ONLY by [RX] (zero order in OH⁻)"}!`,
          },
        ],
        hint: `Identify ${sub.name} as ${sub.degree} → ${sub.mech}, then solve ${sub.mech === "SN2" ? "k = rate / ([RX][OH⁻])" : "k = rate / [RX]"}.`,
        solution: [
          `${sub.name} is ${sub.degree} → **${sub.mech}** (${sub.mech === "SN2" ? "rate = k[RX][OH⁻]" : "rate = k[RX]"}).`,
          sub.mech === "SN2"
            ? `{{k = (${rate}) / (${rxConc} * ${ohConc}) = ${kVal}}} ${units}.`
            : `{{k = (${rate}) / (${rxConc}) = ${kVal}}} ${units}.`,
        ],
      };
    }
    // Fastest leaving-group selector across varied chains
    const chain = rng.pick([
      { pre: "1-", stem: "propane", sub: "primary" },
      { pre: "1-", stem: "butane", sub: "primary" },
      { pre: "1-", stem: "pentane", sub: "primary" },
      { pre: "1-", stem: "hexane", sub: "primary" },
      { pre: "2-", stem: "methylpropane", sub: "tertiary", mid: "-2-" },
      { pre: "2-", stem: "methylbutane", sub: "tertiary", mid: "-2-" },
    ]);
    const mkName = (hal: string) =>
      "mid" in chain && chain.mid ? `${chain.pre}${hal}${chain.mid}${chain.stem}` : `${chain.pre}${hal}${chain.stem}`;
    const cName = mkName("chloro");
    const bName = mkName("bromo");
    const iName = mkName("iodo");
    const orderList = rng.shuffle([cName, bName, iName]);
    return {
      prompt: `Three ${chain.sub} halogenoalkanes — **${orderList[0]}**, **${orderList[1]}**, and **${orderList[2]}** — are warmed separately with ethanol and aqueous AgNO₃. Give the IUPAC name of the compound that forms a silver halide precipitate **fastest**.`,
      answer: { type: "text", accept: [iName, iName.replace(/-/g, " ")], display: iName },
      traps: [
        {
          spec: { type: "text", accept: [cName] },
          feedback: "C−Cl is more polar, but C−X bond enthalpy controls hydrolysis rate! The much weaker C−I bond breaks fastest.",
        },
      ],
      hint: "Does C−X bond polarity or C−X bond enthalpy govern the rate of nucleophilic substitution?",
      solution: [
        "C−X bond enthalpy controls the rate-determining C−X bond cleavage: C−I (228) < C−Br (285) < C−Cl (324 kJ mol⁻¹).",
        `Therefore **${iName}** breaks fastest (forming yellow AgI precipitate first).`,
      ],
    };
  },
};

// ---------------------------------------------------------------------------
// DRILL 4 (HL, Level 3): Markovnikov Products & Multi-Step Synthesis Router
// ---------------------------------------------------------------------------
interface MarkovAlkene {
  alkene: string;
  formula: string;
  carbocation: "2°" | "3°";
  major: (halWord: string) => string;
  minor: (halWord: string) => string;
}

const MARKOV_ALKENES: readonly MarkovAlkene[] = [
  { alkene: "propene", formula: "CH₃CH=CH₂", carbocation: "2°", major: (h) => `2-${h}propane`, minor: (h) => `1-${h}propane` },
  { alkene: "but-1-ene", formula: "CH₃CH₂CH=CH₂", carbocation: "2°", major: (h) => `2-${h}butane`, minor: (h) => `1-${h}butane` },
  { alkene: "pent-1-ene", formula: "CH₃(CH₂)₂CH=CH₂", carbocation: "2°", major: (h) => `2-${h}pentane`, minor: (h) => `1-${h}pentane` },
  { alkene: "hex-1-ene", formula: "CH₃(CH₂)₃CH=CH₂", carbocation: "2°", major: (h) => `2-${h}hexane`, minor: (h) => `1-${h}hexane` },
  { alkene: "hept-1-ene", formula: "CH₃(CH₂)₄CH=CH₂", carbocation: "2°", major: (h) => `2-${h}heptane`, minor: (h) => `1-${h}heptane` },
  { alkene: "oct-1-ene", formula: "CH₃(CH₂)₅CH=CH₂", carbocation: "2°", major: (h) => `2-${h}octane`, minor: (h) => `1-${h}octane` },
  { alkene: "2-methylpropene", formula: "(CH₃)₂C=CH₂", carbocation: "3°", major: (h) => `2-${h}-2-methylpropane`, minor: (h) => `1-${h}-2-methylpropane` },
  { alkene: "2-methylbut-1-ene", formula: "CH₂=C(CH₃)CH₂CH₃", carbocation: "3°", major: (h) => `2-${h}-2-methylbutane`, minor: (h) => `1-${h}-2-methylbutane` },
  { alkene: "2-methylbut-2-ene", formula: "(CH₃)₂C=CHCH₃", carbocation: "3°", major: (h) => `2-${h}-2-methylbutane`, minor: (h) => `2-${h}-3-methylbutane` },
  { alkene: "2-methylpent-1-ene", formula: "CH₂=C(CH₃)(CH₂)₂CH₃", carbocation: "3°", major: (h) => `2-${h}-2-methylpentane`, minor: (h) => `1-${h}-2-methylpentane` },
  { alkene: "2-methylpent-2-ene", formula: "(CH₃)₂C=CHCH₂CH₃", carbocation: "3°", major: (h) => `2-${h}-2-methylpentane`, minor: (h) => `3-${h}-2-methylpentane` },
  { alkene: "1-methylcyclohexene", formula: "C₆H₉(CH₃)", carbocation: "3°", major: (h) => `1-${h}-1-methylcyclohexane`, minor: (h) => `1-${h}-2-methylcyclohexane` },
  { alkene: "1-methylcyclopentene", formula: "C₅H₇(CH₃)", carbocation: "3°", major: (h) => `1-${h}-1-methylcyclopentane`, minor: (h) => `1-${h}-2-methylcyclopentane` },
];

const HX_LIST = [
  { formula: "HCl", word: "chloro" },
  { formula: "HBr", word: "bromo" },
  { formula: "HI", word: "iodo" },
] as const;

interface SynthStep {
  start: string;
  target: string;
  reagentAccept: string[];
  display: string;
  trapAccept?: string[];
  trapMsg?: string;
  note: string;
}

const SYNTH_CHAINS = [
  { root: "eth", alc1: "ethanol", ald: "ethanal", acid: "ethanoic acid", alkene: "ethene", bromo1: "bromoethane" },
  { root: "prop", alc1: "propan-1-ol", ald: "propanal", acid: "propanoic acid", alkene: "propene", bromo1: "1-bromopropane", alc2: "propan-2-ol", ket: "propanone" },
  { root: "but", alc1: "butan-1-ol", ald: "butanal", acid: "butanoic acid", alkene: "but-1-ene", bromo1: "1-bromobutane", alc2: "butan-2-ol", ket: "butanone" },
  { root: "pent", alc1: "pentan-1-ol", ald: "pentanal", acid: "pentanoic acid", alkene: "pent-1-ene", bromo1: "1-bromopentane", alc2: "pentan-2-ol", ket: "pentan-2-one" },
  { root: "hex", alc1: "hexan-1-ol", ald: "hexanal", acid: "hexanoic acid", alkene: "hex-1-ene", bromo1: "1-bromohexane", alc2: "hexan-2-ol", ket: "hexan-2-one" },
] as const;

function buildSynthBank(): SynthStep[] {
  const out: SynthStep[] = [];
  for (const c of SYNTH_CHAINS) {
    out.push({
      start: c.acid,
      target: c.alc1,
      reagentAccept: ["LiAlH4", "LiAlH₄", "lithium aluminium hydride", "lithium aluminum hydride"],
      display: "LiAlH₄",
      trapAccept: ["NaBH4", "NaBH₄"],
      trapMsg: "NaBH₄ is too mild to reduce carboxylic acids! You MUST use LiAlH₄ in dry ether (followed by H⁺(aq)).",
      note: "Carboxylic acids require LiAlH₄ in dry ether followed by dilute aqueous acid H⁺(aq).",
    });
    out.push({
      start: c.ald,
      target: c.alc1,
      reagentAccept: ["NaBH4", "NaBH₄", "LiAlH4", "LiAlH₄", "sodium borohydride"],
      display: "NaBH₄",
      note: "Aldehydes are reduced smoothly to primary alcohols by NaBH₄ in aqueous ethanol (or LiAlH₄ in dry ether).",
    });
    out.push({
      start: c.bromo1,
      target: c.alc1,
      reagentAccept: ["NaOH", "NaOH(aq)", "KOH", "KOH(aq)", "OH-", "OH⁻"],
      display: "NaOH(aq)",
      note: "Warm aqueous NaOH or KOH under reflux converts a primary halogenoalkane into a primary alcohol via SN2.",
    });
    out.push({
      start: c.alc1,
      target: c.alkene,
      reagentAccept: ["H2SO4", "H₂SO₄", "conc H2SO4", "conc. H2SO4", "conc. H₂SO₄", "H3PO4", "H₃PO₄"],
      display: "conc. H₂SO₄",
      note: "Heating a primary alcohol with concentrated H₂SO₄ (~170 °C) dehydrates it to an alkene.",
    });
    out.push({
      start: c.alc1,
      target: c.ald,
      reagentAccept: ["distillation", "distil", "distill", "immediate distillation"],
      display: "distillation",
      trapAccept: ["reflux", "heating under reflux"],
      trapMsg: "Heating under reflux oxidizes a primary alcohol all the way to the carboxylic acid! Immediate distillation isolates the aldehyde.",
      note: "Distilling off the lower-boiling aldehyde immediately stops oxidation before the carboxylic acid forms.",
    });
    out.push({
      start: c.alc1,
      target: c.acid,
      reagentAccept: ["reflux", "heating under reflux", "heat under reflux"],
      display: "reflux",
      trapAccept: ["distillation", "distil", "distill"],
      trapMsg: "Distillation stops at the aldehyde! Complete oxidation to the carboxylic acid requires excess K₂Cr₂O₇/H⁺ heated under reflux.",
      note: "Refluxing with excess acidified K₂Cr₂O₇/H⁺ ensures complete oxidation to the carboxylic acid.",
    });
    if ("ket" in c && c.ket && "alc2" in c && c.alc2) {
      out.push({
        start: c.ket,
        target: c.alc2,
        reagentAccept: ["NaBH4", "NaBH₄", "LiAlH4", "LiAlH₄", "sodium borohydride"],
        display: "NaBH₄",
        note: "Ketones are reduced smoothly to secondary alcohols by NaBH₄ in aqueous ethanol.",
      });
    }
  }
  return out;
}

const SYNTH_BANK = buildSynthBank();

const markovnikovSynthesisRouter: Drill = {
  id: "r3-2-organic-mechanisms.markovnikov-synthesis-router",
  topicId: "r3-2-organic-mechanisms",
  title: "Markovnikov Major Products & Multi-Step Synthesis Router [HL]",
  level: 3,
  ibLevel: "HL",
  guideRef: "organic-synthesis-retrosynthesis-hl",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    if (tier === 1) {
      const a = rng.pick(MARKOV_ALKENES);
      const hx = rng.pick(HX_LIST);
      const maj = a.major(hx.word);
      const min = a.minor(hx.word);
      return {
        prompt: `Apply Markovnikov's rule to give the IUPAC name of the **major** organic product when **${a.alkene}** (${a.formula}) reacts with **${hx.formula}**.`,
        answer: { type: "text", accept: [maj, maj.replace(/-/g, " ")], display: maj },
        traps: [
          {
            spec: { type: "text", accept: [min, min.replace(/-/g, " ")] },
            feedback: `${min} is the MINOR product! H⁺ bonds to the C=C carbon with MORE hydrogens to form the more stable ${a.carbocation} carbocation.`,
          },
        ],
        hint: `H⁺ attaches to the double-bond carbon carrying more H atoms, generating a ${a.carbocation} carbocation stabilized by +I alkyl groups.`,
        solution: [
          `Protonating the less-substituted C=C carbon of ${a.alkene} forms the more stable **${a.carbocation} carbocation**.`,
          `Nucleophilic capture by ${hx.formula.slice(1)}⁻ gives **${maj}** as the major product.`,
        ],
      };
    }

    if (tier === 2) {
      const s = rng.pick(SYNTH_BANK);
      const isApparatus = s.display === "distillation" || s.display === "reflux";
      const prompt = isApparatus
        ? `To oxidize **${s.start}** into **${s.target}** using acidified K₂Cr₂O₇/H⁺, state the essential heating technique required (**distillation** or **reflux**).`
        : `Give the formula of the key reagent required to convert **${s.start}** directly into **${s.target}** in a single IB syllabus step.`;
      return {
        prompt,
        answer: { type: "text", accept: s.reagentAccept, display: s.display },
        traps: s.trapAccept && s.trapMsg ? [{ spec: { type: "text", accept: s.trapAccept }, feedback: s.trapMsg }] : undefined,
        hint: isApparatus
          ? "Aldehydes boil much lower than alcohols/carboxylic acids because they lack O−H hydrogen bonds."
          : "Match the exact functional-group change: reduction (NaBH₄ vs LiAlH₄), hydrolysis (NaOH), or dehydration (conc. H₂SO₄).",
        solution: [s.note, `Answer: **${s.display}**.`],
      };
    }

    // Tier 3: Multi-step synthesis overall % yield + retrosynthesis precursor matching
    const doYield = rng.bool(0.75);
    if (doYield) {
      const routes = [
        "ethene → ethanol → ethanoic acid → ethyl ethanoate",
        "benzene → nitrobenzene → phenylammonium ion → phenylamine",
        "propan-1-ol → propene → propan-2-ol → propanone",
        "propanoic acid → propan-1-ol → propene → 2-bromopropane",
        "but-1-ene → 2-bromobutane → butan-2-ol → butanone",
        "1-bromopropane → propan-1-ol → propanal",
        "butanoic acid → butan-1-ol → butanal",
        "propene → 2-bromopropane → propan-2-ol → propanone",
      ];
      const route = rng.pick(routes);
      const isThreeStep = route.split("→").length >= 4;
      const y1 = rng.pick([60, 65, 70, 75, 80, 85, 90, 95]);
      const y2 = rng.pick([60, 65, 70, 75, 80, 85, 90]);
      if (isThreeStep) {
        const y3 = rng.pick([50, 60, 70, 75, 80, 90]);
        const overall = roundTo((y1 / 100) * (y2 / 100) * (y3 / 100) * 100, 1);
        return {
          prompt: `A 3-step retrosynthesis follows the pathway:\n**${route}**\nThe percentage yields of the three consecutive steps are **${y1}%**, **${y2}%**, and **${y3}%**. Calculate the **overall percentage yield** to **1 decimal place** (number only).`,
          answer: { type: "number", value: overall, tolerance: 0.15, display: `${overall}%` },
          traps: [
            {
              spec: { type: "number", value: roundTo((y1 + y2 + y3) / 3, 1), tolerance: 0.2 },
              feedback: "Never average consecutive yields! Multiply the fractional yields: (y₁/100) × (y₂/100) × (y₃/100) × 100%.",
            },
          ],
          hint: "Convert each step yield to a decimal fraction, multiply all three together, then multiply by 100%.",
          solution: [
            `Fractional yields: ${y1 / 100}, ${y2 / 100}, ${y3 / 100}.`,
            `Overall yield = {{${y1 / 100} * ${y2 / 100} * ${y3 / 100} * 100}} = **${overall}%**.`,
          ],
        };
      }
      const overall2 = roundTo((y1 / 100) * (y2 / 100) * 100, 1);
      return {
        prompt: `A 2-step synthesis follows the pathway:\n**${route}**\nThe percentage yields of the two steps are **${y1}%** and **${y2}%**. Calculate the **overall percentage yield** to **1 decimal place** (number only).`,
        answer: { type: "number", value: overall2, tolerance: 0.15, display: `${overall2}%` },
        traps: [
          {
            spec: { type: "number", value: roundTo((y1 + y2) / 2, 1), tolerance: 0.2 },
            feedback: "Multiply consecutive fractional yields rather than averaging them!",
          },
        ],
        hint: "Multiply (y₁/100) × (y₂/100) × 100%.",
        solution: [
          `Overall yield = {{${y1 / 100} * ${y2 / 100} * 100}} = **${overall2}%**.`,
        ],
      };
    }

    // Retrosynthesis ester precursor or benzene-to-phenylamine check
    const esters = [
      { ester: "methyl ethanoate", acid: "ethanoic acid", alc: "methanol" },
      { ester: "ethyl ethanoate", acid: "ethanoic acid", alc: "ethanol" },
      { ester: "propyl ethanoate", acid: "ethanoic acid", alc: "propan-1-ol" },
      { ester: "butyl ethanoate", acid: "ethanoic acid", alc: "butan-1-ol" },
      { ester: "methyl propanoate", acid: "propanoic acid", alc: "methanol" },
      { ester: "ethyl propanoate", acid: "propanoic acid", alc: "ethanol" },
      { ester: "propyl propanoate", acid: "propanoic acid", alc: "propan-1-ol" },
      { ester: "methyl butanoate", acid: "butanoic acid", alc: "methanol" },
      { ester: "ethyl butanoate", acid: "butanoic acid", alc: "ethanol" },
      { ester: "propyl methanoate", acid: "methanoic acid", alc: "propan-1-ol" },
      { ester: "butyl methanoate", acid: "methanoic acid", alc: "butan-1-ol" },
    ];
    const e = rng.pick(esters);
    const askAcid = rng.bool();
    return {
      prompt: `Working backwards by retrosynthesis from the ester **${e.ester}**, give the IUPAC name of the **${askAcid ? "carboxylic acid" : "primary alcohol"}** precursor required for acid-catalysed esterification.`,
      answer: {
        type: "text",
        accept: [askAcid ? e.acid : e.alc],
        display: askAcid ? e.acid : e.alc,
      },
      hint: "In an ester name ('alkyl alkanoate'), the '-yl' prefix comes from the alcohol and the '-oate' suffix comes from the carboxylic acid.",
      solution: [
        `${e.ester} ⇒ **${e.acid}** + **${e.alc}**.`,
        `Required ${askAcid ? "carboxylic acid" : "primary alcohol"}: **${askAcid ? e.acid : e.alc}**.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  radicalStepId,
  nucleophileElectrophileRxn,
  sn1Sn2Predictor,
  markovnikovSynthesisRouter,
];
