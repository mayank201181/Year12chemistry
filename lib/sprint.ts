// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Chemistry recall across Structure 1–3
// and Reactivity 1–3 (moles, ideal gases, VSEPR, periodicity, IHD/spectroscopy,
// calorimetry, stoichiometry, equilibrium, pH & redox).
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "s1" | "s2" | "s3" | "r12" | "r3" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["s1", "s2", "s3", "r12", "r3", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  s1: "Structure 1: Particulate Matter",
  s2: "Structure 2: Bonding & Materials",
  s3: "Structure 3: Classification & Organic",
  r12: "Reactivity 1–2: Energetics, Rate & Extent",
  r3: "Reactivity 3: Reaction Mechanisms",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  s1: {
    label: "Structure 1: Matter & Moles",
    icon: "⚛️",
    description: "Relative atomic mass, subshells, moles, molarity, STP gas volume & pV = nRT.",
    example: "Moles in 250 cm³ of 0.40 mol dm⁻³ HCl · A_r from isotope abundances",
  },
  s2: {
    label: "Structure 2: Bonding & VSEPR",
    icon: "💎",
    description: "Ionic formulas, VSEPR bond angles & shapes, IMFs, formal charge & hybridization.",
    example: "Bond angle in trigonal pyramidal NH₃ · Hybridization of C in ethene",
  },
  s3: {
    label: "Structure 3: Periodic & Organic",
    icon: "🧬",
    description: "Periodic trends, oxidation states, IUPAC names, IHD, IR bands & ¹H NMR splitting.",
    example: "Oxidation state of Cr in Cr₂O₇²⁻ · IHD of C₆H₆",
  },
  r12: {
    label: "Reactivity 1–2: Energy & Rate",
    icon: "🔥",
    description: "Calorimetry q = mcΔT, Hess cycles, ΔG = ΔH − TΔS, limiting reagents, rate laws & K_c.",
    example: "Sign of ΔG when ΔH < 0 and ΔS > 0 · Atom economy of a synthesis step",
  },
  r3: {
    label: "Reactivity 3: Acids, Redox & Mechanisms",
    icon: "🔋",
    description: "Strong pH/pOH, buffers, E⊖_cell potentials, free-radical & SN1/SN2/Markovnikov rules.",
    example: "pH of 0.010 mol dm⁻³ HCl · E⊖_cell from two half-cell potentials",
  },
  mixed: {
    label: "Full IB Chemistry Mixed",
    icon: "🎲",
    description: "Structure 1–3 & Reactivity 1–3 interleaved — rapid IB Chemistry fluency in 60 seconds.",
    example: "Moles, VSEPR, oxidation states, calorimetry, pH & mechanisms in 60s",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  return {
    s1: sprintPool("s1", drills, ibLevel).length,
    s2: sprintPool("s2", drills, ibLevel).length,
    s3: sprintPool("s3", drills, ibLevel).length,
    r12: sprintPool("r12", drills, ibLevel).length,
    r3: sprintPool("r3", drills, ibLevel).length,
    mixed: sprintPool("mixed", drills, ibLevel).length,
  };
}

/**
 * Draw one quick-fire item from a pool (typically sprintPool(mode, ALL_DRILLS)).
 * Avoids repeating prompts already seen in `avoid` when the pool can offer something else.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng, avoid: ReadonlySet<string> = new Set()): SprintItem | null {
  if (!pool.length) return null;
  let fallback: SprintItem | null = null;
  const tries = Math.min(18, Math.max(8, pool.length * 3));
  for (let i = 0; i < tries; i++) {
    const drill = rng.pick(pool);
    try {
      const gen = drill.generate(rng, SPRINT_TIER);
      const key = `${drill.id}::${gen.prompt}`;
      const item: SprintItem = {
        key,
        prompt: gen.prompt,
        answer: gen.answer,
        answerText: displayAnswer(gen.answer),
        traps: gen.traps,
        diagram: gen.diagram,
        drillId: drill.id,
        topicId: drill.topicId,
      };
      if (!avoid.has(key)) return item;
      fallback ??= item;
    } catch {
      /* skip a broken generator rather than crashing the sprint */
    }
  }
  return fallback;
}
