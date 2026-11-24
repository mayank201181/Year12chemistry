import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["SI unit of amount of substance?", "mole"],
    ["Shape of CH4 with 4 bonding domains?", "tetrahedral"],
    ["Electrode where oxidation occurs?", "anode"],
    ["Sign of ΔH for an exothermic reaction?", "negative"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Chemistry drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.moles`,
    topicId,
    title: "Fake moles drill",
    level: 1,
    generate(rng) {
      const n = rng.int(2, 9);
      return {
        prompt: `Mass in grams of ${n} mol of helium (M = 4 g mol^-1)?`,
        answer: { type: "number", value: n * 4, tolerance: 0 },
        solution: [`m = nM = ${n} × 4 = ${n * 4}`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are Structure/Reactivity strands plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["s1", "s2", "s3", "r12", "r3", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper1"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tS1 = firstTopic("Structure 1: Particulate Matter");
  const tS2 = firstTopic("Structure 2: Bonding & Materials");
  const drills = [
    bankDrill(tS1, 1, "sl", "SL"),
    bankDrill(tS1, 2, "hl", "HL"),
    bankDrill(tS1, 3, "hard", "SL"),
    bankDrill(tS2, 2, "b", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("s1", drills, "HL").map((d) => d.id), [`${tS1}.sl`, `${tS1}.hl`]);
  assert.deepEqual(sprintPool("s1", drills, "SL").map((d) => d.id), [`${tS1}.sl`]);
  assert.deepEqual(sprintPool("s2", drills, "HL").map((d) => d.id), [`${tS2}.b`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tS1}.sl`, `${tS2}.b`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tS1 = firstTopic("Structure 1: Particulate Matter");
  const pool = [numberDrill(tS1), bankDrill(tS1, 2)];
  const rng = makeRng(42);
  const seen = new Set<string>();
  for (let i = 0; i < 20; i++) {
    const it = sprintItem(pool, rng, seen);
    assert.ok(it);
    seen.add(it.key);
    assert.ok(it.prompt.length > 0);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const tS1 = firstTopic("Structure 1: Particulate Matter");
  const broken: Drill = {
    id: `${tS1}.broken`,
    topicId: tS1,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  const it = sprintItem([broken, numberDrill(tS1)], makeRng(7));
  assert.ok(it && it.drillId === `${tS1}.moles`);
  assert.equal(sprintItem([broken], makeRng(7)), null);
});
