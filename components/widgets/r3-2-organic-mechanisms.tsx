"use client";
import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type MechId = "sn2" | "sn1" | "markovnikov" | "nitration";

interface StageInfo {
  label: string;
  coord: number; // 0..100 along reaction coordinate
  headline: string;
  detail: string;
}

interface MechSpec {
  id: MechId;
  shortLabel: string;
  title: string;
  rateLaw: string;
  selectivity: string;
  conditions: string;
  twoPeak: boolean;
  stages: StageInfo[];
}

const MECHS: Record<MechId, MechSpec> = {
  sn2: {
    id: "sn2",
    shortLabel: "SN2 (1°)",
    title: "SN2: Bromoethane + OH⁻ (1 Concerted Step)",
    rateLaw: "rate = k[RX][OH⁻]",
    selectivity: "100% Walden inversion",
    conditions: "Polar aprotic (propanone)",
    twoPeak: false,
    stages: [
      {
        label: "1. Backside Approach",
        coord: 12,
        headline: "OH⁻ approaches Cδ⁺ at 180° opposite the C−Br bond",
        detail:
          "Primary bromoethane has minimal steric hindrance. The lone pair on :OH⁻ targets the electrophilic Cδ⁺ carbon from the backside while the polar Cδ⁺−Brδ⁻ bond begins to stretch.",
      },
      {
        label: "2. 5-Coord Transition State",
        coord: 50,
        headline: "Single energy peak: [HO···C(CH₃)(H)₂···Br]⁻ (NOT an intermediate)",
        detail:
          "Bond formation (HO···C) and heterolytic bond breaking (C···Br) happen simultaneously. The three non-reacting groups flatten into a 120° trigonal plane inside square brackets carrying an overall −1 charge.",
      },
      {
        label: "3. Inverted Product",
        coord: 88,
        headline: "Ethanol + Br⁻ formed with complete umbrella-flip inversion",
        detail:
          "The C−Br bond completes heterolytic fission onto :Br⁻, and the three groups flip past flat to the opposite side — giving 100% Walden inversion for any chiral substrate.",
      },
    ],
  },
  sn1: {
    id: "sn1",
    shortLabel: "SN1 (3°)",
    title: "SN1: 2-Bromo-2-methylpropane + OH⁻ (2 Steps)",
    rateLaw: "rate = k[RX]",
    selectivity: "50:50 Racemic mixture",
    conditions: "Polar protic (H₂O/EtOH)",
    twoPeak: true,
    stages: [
      {
        label: "1. Sterically Crowded 3° RX",
        coord: 10,
        headline: "Bulky CH₃ groups block backside attack",
        detail:
          "OH⁻ cannot reach Cδ⁺ from behind. The reaction waits for spontaneous heterolytic cleavage of C−Br (stabilized by polar protic solvent hydrogen bonds).",
      },
      {
        label: "2. TS1 (Slow RDS)",
        coord: 32,
        headline: "Rate-determining C−Br heterolysis (highest energy peak)",
        detail:
          "Only (CH₃)₃CBr participates in Step 1 (unimolecular), which is why [OH⁻] does not appear in the rate equation rate = k[RX].",
      },
      {
        label: "3. Planar 3° Carbocation",
        coord: 54,
        headline: "Energy-well intermediate: trigonal planar (120°) sp² (CH₃)₃C⁺",
        detail:
          "Three electron-donating methyl groups (+I inductive effect) disperse the positive charge. Both top and bottom faces of the empty 2p orbital are equally exposed to :OH⁻.",
      },
      {
        label: "4. Fast Capture → Racemate",
        coord: 88,
        headline: "Equal 50:50 top/bottom attack yields 2-methylpropan-2-ol",
        detail:
          "OH⁻ rapidly attacks either face over a tiny second energy barrier (TS2). For a chiral 3° halogenoalkane, this yields an optically inactive 50:50 racemic mixture.",
      },
    ],
  },
  markovnikov: {
    id: "markovnikov",
    shortLabel: "Markovnikov",
    title: "Electrophilic Addition: Propene + HBr (Markovnikov)",
    rateLaw: "2-step via 2° C⁺",
    selectivity: "Major: 2-bromopropane",
    conditions: "Room temp, HBr(g)",
    twoPeak: true,
    stages: [
      {
        label: "1. π-Cloud Meets Hδ⁺−Brδ⁻",
        coord: 10,
        headline: "Electron-rich C=C π bond targets electrophilic Hδ⁺",
        detail:
          "A full curly arrow starts from the exposed π bond of propene (CH₃CH=CH₂) and points to Hδ⁺ of polar HBr, while the H−Br bond breaks heterolytically onto Brδ⁻.",
      },
      {
        label: "2. TS1 (Regioselectivity Fork)",
        coord: 32,
        headline: "H⁺ bonds to C-1 (=CH₂) to follow the lower-E_a pathway",
        detail:
          "Protonating C-1 puts the positive charge on C-2 (2° carbocation, lower E_a), whereas protonating C-2 would create an unstable 1° carbocation at C-1 (higher E_a).",
      },
      {
        label: "3. 2° Carbocation Intermediate",
        coord: 54,
        headline: "CH₃−C⁺H−CH₃ stabilized by two +I methyl groups",
        detail:
          "Two alkyl groups donate electron density (+I inductive effect) toward C-2, dispersing the positive charge so the 2° intermediate dominates over the 1° alternative.",
      },
      {
        label: "4. Br⁻ Capture → Major Product",
        coord: 88,
        headline: ":Br⁻ attacks C-2 → 2-bromopropane (100% atom economy)",
        detail:
          "A curly arrow from a lone pair on :Br⁻ points to C⁺-2, forming 2-bromopropane as the major product (with trace 1-bromopropane as the minor product).",
      },
    ],
  },
  nitration: {
    id: "nitration",
    shortLabel: "Benzene NO₂⁺",
    title: "Electrophilic Aromatic Substitution: Benzene Nitration",
    rateLaw: "2-step via arenium ion",
    selectivity: "Preserves aromaticity",
    conditions: "conc. HNO₃/H₂SO₄, 50 °C",
    twoPeak: true,
    stages: [
      {
        label: "1. Generate NO₂⁺",
        coord: 10,
        headline: "HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O (HNO₃ acts as base)",
        detail:
          "Concentrated H₂SO₄ is the stronger acid and protonates HNO₃ to H₂NO₃⁺, which loses H₂O to form the linear nitronium ion electrophile NO₂⁺.",
      },
      {
        label: "2. π-Ring Attacks NO₂⁺ (RDS)",
        coord: 32,
        headline: "Curly arrow from delocalized benzene ring to N of NO₂⁺",
        detail:
          "This slow rate-determining step temporarily disrupts the 6-π-electron aromatic cloud (~152 kJ mol⁻¹ resonance stability), explaining the high first energy barrier.",
      },
      {
        label: "3. Arenium Ion Intermediate",
        coord: 54,
        headline: "Open 5-carbon horseshoe with + inside facing sp³ C(H)(NO₂)",
        detail:
          "The positive charge is delocalized across five ring carbons. Crucially, the ring refuses to undergo addition because losing H⁺ regains ~152 kJ mol⁻¹ of aromaticity!",
      },
      {
        label: "4. Rearomatization + Catalyst",
        coord: 88,
        headline: "C−H σ bond returns to ring → nitrobenzene + H⁺ (→ H₂SO₄)",
        detail:
          "A curly arrow from the C−H bond back into the ring expels H⁺, restoring full aromatic delocalization. HSO₄⁻ accepts H⁺ to regenerate H₂SO₄. Keep T ≈ 50 °C to prevent dinitration.",
      },
    ],
  },
};

function energyY(twoPeak: boolean, coord: number): number {
  // Maps reaction coordinate (0..100) to SVG y (lower y = higher energy, y in [22..136])
  const t = coord / 100;
  if (!twoPeak) {
    // Single Gaussian-like TS peak at t = 0.5, reactants y = 104, TS y = 26, products y = 122
    const base = 104 + 18 * (1 / (1 + Math.exp(-(t - 0.55) * 10)));
    const hump = 86 * Math.exp(-Math.pow((t - 0.5) / 0.17, 2));
    return Math.max(22, Math.min(134, base - hump));
  }
  // Two-peak profile: TS1 at 0.32 (highest, y~26), intermediate well at 0.54 (y~84), TS2 at 0.72 (y~58), products y~122
  const base = 104 + 18 * (1 / (1 + Math.exp(-(t - 0.65) * 10)));
  const hump1 = 80 * Math.exp(-Math.pow((t - 0.32) / 0.13, 2));
  const hump2 = 56 * Math.exp(-Math.pow((t - 0.72) / 0.11, 2));
  const wellLift = 20 * Math.exp(-Math.pow((t - 0.54) / 0.11, 2));
  return Math.max(22, Math.min(134, base - hump1 - hump2 - wellLift));
}

function buildEnergyPath(twoPeak: boolean): string {
  const pts: string[] = [];
  for (let c = 4; c <= 96; c += 2) {
    const x = 52 + (c / 100) * 516;
    const y = energyY(twoPeak, c);
    pts.push(`${c === 4 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

function MechanismScene({ mech, stageIdx }: { mech: MechId; stageIdx: number }) {
  if (mech === "sn2") {
    return (
      <svg viewBox="0 0 600 185" className="h-auto w-full" role="img" aria-label="Interactive SN2 curly-arrow reaction diagram">
        <rect x="4" y="4" width="592" height="177" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.2" />
        {stageIdx === 0 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brand)">
              Stage 1: Backside Approach (180° opposite C−Br)
            </text>
            <text x="112" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--brand)">
              HO:⁻
            </text>
            <text x="112" y="124" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">
              Nucleophile
            </text>
            {/* Curly arrow HO:- -> C */}
            <path d="M 136 92 Q 198 52 262 88" fill="none" stroke="var(--brand)" strokeWidth="2.5" />
            <polygon points="266,91 255,90 261,82" fill="var(--brand)" />
            {/* Tetrahedral C-Br (umbrella right) */}
            <text x="292" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--ink)">
              C<tspan dy="-8" fontSize="11" fill="var(--bad)">δ+</tspan>
            </text>
            <line x1="286" y1="84" x2="262" y2="54" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="252" y="49" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="285" y1="108" x2="254" y2="136" stroke="var(--ink)" strokeWidth="2.4" />
            <text x="246" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <line x1="294" y1="110" x2="282" y2="144" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="3 2" />
            <text x="280" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <line x1="312" y1="96" x2="386" y2="96" stroke="var(--ink)" strokeWidth="2.4" />
            <text x="414" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--info)">
              Br<tspan dy="-8" fontSize="11">δ−</tspan>
            </text>
            {/* Curly arrow C-Br -> Br */}
            <path d="M 350 92 Q 378 58 408 82" fill="none" stroke="var(--info)" strokeWidth="2.4" />
            <polygon points="411,86 401,83 407,76" fill="var(--info)" />
            <text x="414" y="124" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">
              Leaving group
            </text>
          </g>
        ) : stageIdx === 1 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)">
              Stage 2: 5-Coordinate Trigonal Bipyramidal Transition State (Peak)
            </text>
            <text x="160" y="114" fontSize="54" fontWeight="200" fill="var(--ink-2)">[</text>
            <text x="206" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--brand)">HO</text>
            <line x1="226" y1="96" x2="282" y2="96" stroke="var(--brand)" strokeWidth="2.4" strokeDasharray="5 4" />
            <text x="300" y="102" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--ink)">C</text>
            {/* Flat vertical trigonal plane */}
            <line x1="300" y1="82" x2="300" y2="50" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="300" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="292" y1="110" x2="274" y2="142" stroke="var(--ink)" strokeWidth="2.6" />
            <text x="268" y="156" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <line x1="308" y1="110" x2="326" y2="142" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="3 2" />
            <text x="332" y="156" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <line x1="318" y1="96" x2="374" y2="96" stroke="var(--info)" strokeWidth="2.4" strokeDasharray="5 4" />
            <text x="396" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--info)">Br</text>
            <text x="424" y="114" fontSize="54" fontWeight="200" fill="var(--ink-2)">]</text>
            <text x="446" y="70" fontSize="18" fontWeight="800" fill="var(--bad)">−</text>
            <text x="300" y="172" textAnchor="middle" fontSize="11" fill="var(--ink-2)">
              Partial bonds forming &amp; breaking simultaneously · No isolable intermediate
            </text>
          </g>
        ) : (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--good)">
              Stage 3: Inverted Product (Walden Umbrella Flip!)
            </text>
            <text x="192" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--brand)">HO</text>
            <line x1="212" y1="96" x2="276" y2="96" stroke="var(--brand)" strokeWidth="2.6" />
            <text x="296" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--ink)">C</text>
            {/* Flipped umbrella to the right */}
            <line x1="306" y1="84" x2="332" y2="54" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="342" y="49" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="306" y1="108" x2="336" y2="136" stroke="var(--ink)" strokeWidth="2.4" />
            <text x="346" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <line x1="296" y1="110" x2="308" y2="144" stroke="var(--ink)" strokeWidth="1.6" strokeDasharray="3 2" />
            <text x="312" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">H</text>
            <text x="424" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--info)">+   :Br⁻</text>
            <text x="300" y="173" textAnchor="middle" fontSize="11" fill="var(--good)">
              Ethanol + Bromide ion · Complete stereochemical inversion
            </text>
          </g>
        )}
      </svg>
    );
  }

  if (mech === "sn1") {
    return (
      <svg viewBox="0 0 600 185" className="h-auto w-full" role="img" aria-label="Interactive SN1 two-step carbocation diagram">
        <rect x="4" y="4" width="592" height="177" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.2" />
        {stageIdx <= 1 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill={stageIdx === 0 ? "var(--info)" : "var(--bad)"}>
              {stageIdx === 0
                ? "Stage 1: Bulky 3° Substrate Blocks Backside Attack"
                : "Stage 2 (Slow RDS): Unimolecular Heterolytic Fission of C−Br"}
            </text>
            {/* Blocked OH- */}
            <text x="86" y="102" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink-2)">HO:⁻</text>
            <line x1="114" y1="97" x2="152" y2="97" stroke="var(--bad)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="164" y="102" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--bad)">✕</text>
            <text x="122" y="122" textAnchor="middle" fontSize="10" fill="var(--bad)">Sterically blocked</text>
            {/* 3° RX */}
            <text x="292" y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--ink)">
              C<tspan dy="-8" fontSize="11" fill="var(--bad)">δ+</tspan>
            </text>
            <line x1="286" y1="84" x2="254" y2="54" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="236" y="49" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="284" y1="108" x2="246" y2="136" stroke="var(--ink)" strokeWidth="2.4" />
            <text x="230" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="292" y1="110" x2="278" y2="146" stroke="var(--ink)" strokeWidth="1.8" strokeDasharray="3 2" />
            <text x="276" y="162" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">CH₃</text>
            <line x1="312" y1="96" x2={stageIdx === 1 ? "406" : "382"} y2="96" stroke="var(--ink)" strokeWidth="2.4" strokeDasharray={stageIdx === 1 ? "5 4" : undefined} />
            <text x={stageIdx === 1 ? "432" : "408"} y="102" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--info)">
              Br<tspan dy="-8" fontSize="11">δ−</tspan>
            </text>
            <path d="M 352 91 Q 382 58 410 82" fill="none" stroke="var(--info)" strokeWidth="2.5" />
            <polygon points="414,85 404,83 410,76" fill="var(--info)" />
            <text x="355" y="164" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">
              Polar protic solvent stabilizes departing Br⁻ &amp; developing C⁺
            </text>
          </g>
        ) : stageIdx === 2 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--info)">
              Stage 3: Trigonal Planar (120°) sp² Carbocation Intermediate
            </text>
            <ellipse cx="300" cy="102" rx="88" ry="24" fill="var(--surface)" stroke="var(--info)" strokeWidth="2" />
            <text x="300" y="108" textAnchor="middle" fontSize="19" fontWeight="800" fill="var(--info)">C⁺</text>
            <text x="200" y="106" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)">CH₃ (+I)</text>
            <text x="402" y="106" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)">CH₃ (+I)</text>
            <text x="300" y="142" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)">CH₃ (+I)</text>
            {/* Top and bottom HO- attack */}
            <text x="300" y="48" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--brand)">HO:⁻ (50% top face)</text>
            <line x1="300" y1="54" x2="300" y2="76" stroke="var(--brand)" strokeWidth="2.4" />
            <polygon points="300,80 295,71 305,71" fill="var(--brand)" />
            <line x1="300" y1="164" x2="300" y2="148" stroke="var(--accent)" strokeWidth="2.4" />
            <polygon points="300,144 295,153 305,153" fill="var(--accent)" />
            <text x="300" y="176" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--accent)">HO:⁻ (50% bottom face)</text>
            <text x="515" y="106" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink-2)">+ :Br⁻</text>
          </g>
        ) : (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--good)">
              Stage 4: 2-Methylpropan-2-ol (50:50 Racemic Mixture for Chiral 3° RX)
            </text>
            <rect x="64" y="48" width="210" height="94" rx="10" fill="var(--surface)" stroke="var(--brand)" strokeWidth="1.5" />
            <text x="169" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brand)">50% Top Attack (Retention)</text>
            <text x="169" y="104" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)">(CH₃)₃C−OH</text>
            <text x="169" y="128" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">Equal (R) enantiomer</text>
            <rect x="326" y="48" width="210" height="94" rx="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="431" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)">50% Bottom Attack (Inversion)</text>
            <text x="431" y="104" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)">HO−C(CH₃)₃</text>
            <text x="431" y="128" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">Equal (S) enantiomer</text>
            <text x="300" y="168" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--ink)">
              Net optical rotation = 0° (optically inactive racemate)  ·  + :Br⁻
            </text>
          </g>
        )}
      </svg>
    );
  }

  if (mech === "markovnikov") {
    return (
      <svg viewBox="0 0 600 185" className="h-auto w-full" role="img" aria-label="Interactive Markovnikov electrophilic addition of HBr to propene">
        <rect x="4" y="4" width="592" height="177" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.2" />
        {stageIdx <= 1 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)">
              {stageIdx === 0
                ? "Stage 1: π Bond of Propene Attacks Electrophilic Hδ⁺ of HBr"
                : "Stage 2 (TS1): H⁺ Adds to C-1 (=CH₂) to Form Lower-Energy 2° Carbocation"}
            </text>
            <text x="130" y="104" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)">CH₃−CH</text>
            <line x1="176" y1="95" x2="226" y2="95" stroke="var(--accent)" strokeWidth="2.8" />
            <line x1="176" y1="103" x2="226" y2="103" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="256" y="104" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)">CH₂</text>
            <text x="150" y="124" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">C-2 (1 H)</text>
            <text x="256" y="124" textAnchor="middle" fontSize="10.5" fill="var(--brand)">C-1 (2 Hs — gets H⁺!)</text>
            {/* Arrow pi bond -> H */}
            <path d="M 202 90 Q 268 48 344 88" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
            <polygon points="348,90 338,89 343,81" fill="var(--accent)" />
            {/* H-Br */}
            <text x="368" y="104" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink)">
              H<tspan dy="-7" fontSize="10.5" fill="var(--bad)">δ+</tspan>
            </text>
            <line x1="388" y1="98" x2="438" y2="98" stroke="var(--ink)" strokeWidth="2.2" />
            <text x="462" y="104" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--info)">
              Br<tspan dy="-7" fontSize="10.5">δ−</tspan>
            </text>
            <path d="M 412 94 Q 436 62 458 84" fill="none" stroke="var(--info)" strokeWidth="2.3" />
            <polygon points="461,88 452,85 458,78" fill="var(--info)" />
            <text x="300" y="162" textAnchor="middle" fontSize="11" fill="var(--ink-2)">
              &ldquo;Hydrogen-rich C-1 gets richer&rdquo; because positive charge settles on better-stabilized C-2
            </text>
          </g>
        ) : stageIdx === 2 ? (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brand)">
              Stage 3: Comparing Competing Carbocation Intermediates (+I Effect)
            </text>
            {/* Major 2° box */}
            <rect x="36" y="46" width="260" height="108" rx="10" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
            <text x="166" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brand)">MAJOR: 2° Carbocation (More Stable)</text>
            <text x="166" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink)">CH₃ → C⁺H ← CH₃</text>
            <text x="166" y="126" textAnchor="middle" fontSize="10.5" fill="var(--brand)">Two +I methyl groups disperse + charge</text>
            <text x="166" y="143" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">Lower E_a · Forms rapidly</text>
            {/* Minor 1° box */}
            <rect x="316" y="46" width="248" height="108" rx="10" fill="var(--surface)" stroke="var(--bad)" strokeWidth="1.3" strokeDasharray="4 3" />
            <text x="440" y="68" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--bad)">MINOR: 1° Carbocation (Unstable)</text>
            <text x="440" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink-2)">CH₃CH₂ → C⁺H₂</text>
            <text x="440" y="126" textAnchor="middle" fontSize="10.5" fill="var(--bad)">Only one +I ethyl group</text>
            <text x="440" y="143" textAnchor="middle" fontSize="10.5" fill="var(--ink-2)">Higher E_a · Minor path</text>
          </g>
        ) : (
          <g>
            <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--good)">
              Stage 4: Nucleophilic Attack by :Br⁻ → 2-Bromopropane (Major)
            </text>
            <text x="174" y="102" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink)">CH₃−C⁺H−CH₃</text>
            <text x="174" y="150" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--info)">:Br⁻</text>
            <path d="M 174 134 L 174 114" fill="none" stroke="var(--info)" strokeWidth="2.5" />
            <polygon points="174,109 169,118 179,118" fill="var(--info)" />
            <text x="290" y="104" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--ink-2)">→</text>
            <rect x="332" y="58" width="224" height="82" rx="10" fill="var(--surface)" stroke="var(--good)" strokeWidth="1.8" />
            <text x="444" y="92" textAnchor="middle" fontSize="16" fontWeight="800" fill="var(--good)">CH₃−CH(Br)−CH₃</text>
            <text x="444" y="116" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">2-bromopropane (Major)</text>
            <text x="444" y="132" textAnchor="middle" fontSize="10" fill="var(--ink-2)">100% atom economy · electrophilic addition</text>
          </g>
        )}
      </svg>
    );
  }

  // Benzene Nitration
  return (
    <svg viewBox="0 0 600 185" className="h-auto w-full" role="img" aria-label="Interactive electrophilic aromatic nitration of benzene">
      <rect x="4" y="4" width="592" height="177" rx="12" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.2" />
      {stageIdx === 0 ? (
        <g>
          <text x="300" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--info)">
            Stage 1: Generating the Nitronium Ion Electrophile (NO₂⁺) at 50 °C
          </text>
          <rect x="44" y="54" width="512" height="62" rx="10" fill="var(--surface)" stroke="var(--info)" strokeWidth="1.6" />
          <text x="300" y="82" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--ink)">
            HNO₃ (base)  +  H₂SO₄ (stronger acid)  →  <tspan fill="var(--bad)">NO₂⁺</tspan>  +  HSO₄⁻  +  H₂O
          </text>
          <text x="300" y="104" textAnchor="middle" fontSize="11" fill="var(--ink-2)">
            Or complete equilibrium: HNO₃ + 2 H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2 HSO₄⁻
          </text>
          <text x="300" y="148" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="var(--brand)">
            Linear O=N⁺=O is a strong electrophile capable of polarizing benzene&apos;s delocalized π ring!
          </text>
        </g>
      ) : stageIdx === 1 ? (
        <g>
          <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--bad)">
            Stage 2 (Slow RDS): Delocalized Benzene π Ring Attacks NO₂⁺
          </text>
          <polygon points="210,58 248,79 248,122 210,143 172,122 172,79" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
          <circle cx="210" cy="100.5" r="24" fill="none" stroke="var(--brand)" strokeWidth="2.2" />
          <path d="M 232 90 Q 278 52 324 80" fill="none" stroke="var(--brand)" strokeWidth="2.6" />
          <polygon points="328,83 318,82 323,74" fill="var(--brand)" />
          <text x="364" y="92" textAnchor="middle" fontSize="17" fontWeight="800" fill="var(--bad)">NO₂⁺</text>
          <text x="300" y="168" textAnchor="middle" fontSize="11" fill="var(--ink-2)">
            Curly arrow ALWAYS starts from the benzene π ring and points to N of NO₂⁺
          </text>
        </g>
      ) : stageIdx === 2 ? (
        <g>
          <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)">
            Stage 3: Delocalized Arenium Ion (5-Carbon Open Horseshoe Intermediate)
          </text>
          <polygon points="260,58 298,79 298,122 260,143 222,122 222,79" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
          <path d="M 260 76 A 24 24 0 1 0 282 114" fill="none" stroke="var(--accent)" strokeWidth="2.8" />
          <text x="259" y="108" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--accent)">+</text>
          <line x1="298" y1="79" x2="334" y2="62" stroke="var(--ink)" strokeWidth="2.2" />
          <text x="356" y="64" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--bad)">NO₂</text>
          <line x1="298" y1="79" x2="334" y2="100" stroke="var(--ink)" strokeWidth="2.2" />
          <text x="348" y="106" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink)">H</text>
          <path d="M 318 92 Q 304 120 282 106" fill="none" stroke="var(--brand)" strokeWidth="2.6" />
          <polygon points="278,103 288,102 284,110" fill="var(--brand)" />
          <text x="300" y="168" textAnchor="middle" fontSize="11" fill="var(--ink-2)">
            Open horseshoe faces tetrahedral C(H)(NO₂); C−H σ bond returns electrons to restore aromaticity
          </text>
        </g>
      ) : (
        <g>
          <text x="300" y="26" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--good)">
            Stage 4: Nitrobenzene + H⁺ (Aromaticity Restored &amp; H₂SO₄ Regenerated!)
          </text>
          <polygon points="200,58 238,79 238,122 200,143 162,122 162,79" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
          <circle cx="200" cy="100.5" r="24" fill="none" stroke="var(--good)" strokeWidth="2.4" />
          <line x1="238" y1="79" x2="274" y2="62" stroke="var(--ink)" strokeWidth="2.2" />
          <text x="296" y="64" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--bad)">NO₂</text>
          <text x="384" y="106" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--ink)">+   H⁺   (+ HSO₄⁻ → H₂SO₄)</text>
          <text x="300" y="168" textAnchor="middle" fontSize="11" fill="var(--good)">
            Full ~152 kJ mol⁻¹ resonance stability recovered · Mononitration controlled at 50 °C
          </text>
        </g>
      )}
    </svg>
  );
}

function MechanismStepperWidget() {
  const [mech, setMech] = useState<MechId>("sn2");
  const [stageIdx, setStageIdx] = useState<number>(1);
  const [rxMult, setRxMult] = useState<number>(2);
  const [nuMult, setNuMult] = useState<number>(3);

  const spec = MECHS[mech];
  const safeIdx = Math.min(stageIdx, spec.stages.length - 1);
  const stage = spec.stages[safeIdx];
  const energyPath = buildEnergyPath(spec.twoPeak);
  const markerX = 52 + (stage.coord / 100) * 516;
  const markerY = energyY(spec.twoPeak, stage.coord);

  const handleMechChange = (next: MechId) => {
    setMech(next);
    setStageIdx(0);
  };

  const relRate = mech === "sn2" ? rxMult * nuMult : mech === "sn1" ? rxMult : null;

  return (
    <WidgetFrame
      title="Curly-Arrow Mechanism & Energy-Profile Stepper [HL]"
      tryThis={[
        "Compare **SN2** (1 single peak) vs **SN1** (2 peaks + carbocation well) as you step through every stage.",
        "In **SN1** mode, drag the **[OH⁻] multiplier** slider from 1× to 4× — watch why the relative rate never budges!",
        "Inspect **Markovnikov** Stage 3 and **Benzene NO₂⁺** Stage 3 to master the exact IB Paper 2 diagrams.",
      ]}
      caption={
        <div>
          <p className="font-bold text-ink">{stage.headline}</p>
          <p className="mt-1 text-ink-2">{stage.detail}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Select organic mechanism"
          value={mech}
          onChange={handleMechChange}
          options={[
            { value: "sn2", label: "SN2 (1°)" },
            { value: "sn1", label: "SN1 (3°)" },
            { value: "markovnikov", label: "Markovnikov" },
            { value: "nitration", label: "Benzene NO₂⁺" },
          ]}
        />

        {/* Stage selector buttons + stepper */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface-2/60 p-2.5">
          <div className="flex flex-wrap gap-1.5">
            {spec.stages.map((st, idx) => (
              <button
                key={st.label}
                type="button"
                onClick={() => setStageIdx(idx)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                  idx === safeIdx ? "bg-brand text-brand-ink shadow-sm" : "bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
          <Stepper
            label="Stage"
            value={safeIdx + 1}
            min={1}
            max={spec.stages.length}
            onChange={(v) => setStageIdx(v - 1)}
          />
        </div>

        {/* Live curly-arrow mechanism SVG */}
        <MechanismScene mech={mech} stageIdx={safeIdx} />

        {/* Synchronized Potential Energy Profile SVG */}
        <div className="rounded-xl border border-line bg-surface p-2">
          <svg viewBox="0 0 600 160" className="h-auto w-full" role="img" aria-label={`Potential energy profile for ${spec.title}`}>
            <line x1="48" y1="138" x2="576" y2="138" stroke="var(--ink-2)" strokeWidth="1.5" />
            <line x1="48" y1="16" x2="48" y2="138" stroke="var(--ink-2)" strokeWidth="1.5" />
            <text x="20" y="80" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink-2)" transform="rotate(-90 20 80)">
              Potential Energy
            </text>
            <text x="312" y="154" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink-2)">
              Reaction Coordinate ({spec.twoPeak ? "2 Transition States + Intermediate Well" : "1 Concerted Transition State"})
            </text>
            <path d={energyPath} fill="none" stroke={spec.twoPeak ? "var(--info)" : "var(--brand)"} strokeWidth="3" />
            {spec.stages.map((st, idx) => {
              const cx = 52 + (st.coord / 100) * 516;
              const cy = energyY(spec.twoPeak, st.coord);
              const active = idx === safeIdx;
              return (
                <g key={st.label}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={active ? 8 : 4.5}
                    fill={active ? "var(--accent)" : "var(--surface)"}
                    stroke={active ? "var(--ink)" : "var(--ink-2)"}
                    strokeWidth={active ? 2 : 1.5}
                  />
                  <text
                    x={cx}
                    y={cy < 42 ? cy + 20 : cy - 12}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight={active ? "800" : "600"}
                    fill={active ? "var(--ink)" : "var(--ink-2)"}
                  >
                    {idx + 1}
                  </text>
                </g>
              );
            })}
            <line x1={markerX} y1={markerY + 8} x2={markerX} y2="138" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Interactive Kinetics Lab for SN1 vs SN2 */}
        {relRate !== null ? (
          <div className="rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Live Rate-Law Simulator ({mech.toUpperCase()}: {spec.rateLaw})
            </div>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center">
              <Slider label="[RX] multiplier" value={rxMult} min={1} max={4} onChange={setRxMult} format={(v) => `${v}×`} />
              <Slider label="[OH⁻] multiplier" value={nuMult} min={1} max={4} onChange={setNuMult} format={(v) => `${v}×`} />
              <Readout
                label="Relative Rate"
                value={`${relRate}×`}
                tone={mech === "sn1" && nuMult > 1 ? "good" : "brand"}
              />
            </div>
          </div>
        ) : null}

        {/* Key readouts */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Rate / Pathway" value={<span className="text-sm sm:text-base">{spec.rateLaw}</span>} tone="brand" />
          <Readout label="Stereo / Regio" value={<span className="text-sm sm:text-base">{spec.selectivity}</span>} tone="ink" />
          <Readout label="Ideal Conditions" value={<span className="text-sm sm:text-base">{spec.conditions}</span>} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// WIDGET 2: Organic Synthesis & Retrosynthesis Pathway Navigator [HL]
// ---------------------------------------------------------------------------
type RouteId = "ester" | "ketone" | "isomer-switch" | "acid-to-sec" | "phenylamine" | "acid-to-ald";

interface RouteStep {
  from: string;
  to: string;
  reagents: string;
  conditions: string;
  rxnType: string;
  trap: string;
}

interface SynthRoute {
  id: RouteId;
  label: string;
  start: string;
  target: string;
  nodes: string[];
  steps: RouteStep[];
}

const ROUTES: Record<RouteId, SynthRoute> = {
  ester: {
    id: "ester",
    label: "Ethene → Ester",
    start: "Ethene",
    target: "Ethyl ethanoate",
    nodes: ["Ethene", "Ethanol", "Ethanoic acid", "Ethyl ethanoate"],
    steps: [
      {
        from: "Ethene",
        to: "Ethanol",
        reagents: "H₂O(g) (steam) + H₃PO₄ catalyst",
        conditions: "300 °C, 60–70 atm",
        rxnType: "Electrophilic addition (hydration)",
        trap: "100% atom economy! Keep half the ethanol aside for Step 3.",
      },
      {
        from: "Ethanol",
        to: "Ethanoic acid",
        reagents: "Excess acidified K₂Cr₂O₇ / H⁺ (dil. H₂SO₄)",
        conditions: "Heat under reflux (orange → green)",
        rxnType: "Complete oxidation of 1° alcohol",
        trap: "Must use REFLUX (distillation stops early at ethanal!).",
      },
      {
        from: "Ethanoic acid + Ethanol",
        to: "Ethyl ethanoate",
        reagents: "Ethanol + conc. H₂SO₄ catalyst",
        conditions: "Heat under reflux (+ H₂O byproduct)",
        rxnType: "Esterification (condensation)",
        trap: "Always state conc. H₂SO₄ catalyst and reflux for esterification.",
      },
    ],
  },
  ketone: {
    id: "ketone",
    label: "Propene → Ketone",
    start: "Propene",
    target: "Propanone",
    nodes: ["Propene", "Propan-2-ol", "Propanone"],
    steps: [
      {
        from: "Propene",
        to: "Propan-2-ol",
        reagents: "H₂O(g) (steam) + H₃PO₄ catalyst",
        conditions: "300 °C, 60 atm (Markovnikov 2° C⁺)",
        rxnType: "Electrophilic addition (hydration)",
        trap: "Markovnikov's rule places −OH on C-2 cleanly via the 2° carbocation.",
      },
      {
        from: "Propan-2-ol",
        to: "Propanone",
        reagents: "Acidified K₂Cr₂O₇ / H⁺ (dil. H₂SO₄)",
        conditions: "Heat under reflux (orange → green)",
        rxnType: "Oxidation of 2° alcohol",
        trap: "Ketones resist further dichromate oxidation, so reflux is completely safe!",
      },
    ],
  },
  "isomer-switch": {
    id: "isomer-switch",
    label: "1-ol → Propanone",
    start: "Propan-1-ol",
    target: "Propanone",
    nodes: ["Propan-1-ol", "Propene", "Propan-2-ol", "Propanone"],
    steps: [
      {
        from: "Propan-1-ol",
        to: "Propene",
        reagents: "Concentrated H₂SO₄ (or conc. H₃PO₄)",
        conditions: "Heat (~170 °C)",
        rxnType: "Dehydration (elimination of H₂O)",
        trap: "You cannot oxidize propan-1-ol directly to propanone — dehydrate to propene first!",
      },
      {
        from: "Propene",
        to: "Propan-2-ol",
        reagents: "Steam H₂O(g) + H₃PO₄ catalyst",
        conditions: "300 °C, 60 atm (Markovnikov)",
        rxnType: "Electrophilic addition",
        trap: "This relocates oxygen from C-1 to C-2 cleanly via the more stable 2° carbocation.",
      },
      {
        from: "Propan-2-ol",
        to: "Propanone",
        reagents: "Acidified K₂Cr₂O₇ / H⁺",
        conditions: "Heat under reflux (orange → green)",
        rxnType: "Oxidation of 2° alcohol",
        trap: "Always state both the oxidant (K₂Cr₂O₇/H⁺) and the heating condition (reflux).",
      },
    ],
  },
  "acid-to-sec": {
    id: "acid-to-sec",
    label: "Acid → 2° Alcohol",
    start: "Propanoic acid",
    target: "Propan-2-ol",
    nodes: ["Propanoic acid", "Propan-1-ol", "Propene", "2-Bromopropane", "Propan-2-ol"],
    steps: [
      {
        from: "Propanoic acid",
        to: "Propan-1-ol",
        reagents: "LiAlH₄ in dry ether, then H⁺(aq)",
        conditions: "Anhydrous dry ether, followed by dil. acid",
        rxnType: "Strong reduction",
        trap: "NaBH₄ FAILS on carboxylic acids! Never omit 'dry ether' and 'H⁺(aq)' with LiAlH₄.",
      },
      {
        from: "Propan-1-ol",
        to: "Propene",
        reagents: "Concentrated H₂SO₄",
        conditions: "Heat (~170 °C)",
        rxnType: "Dehydration",
        trap: "Eliminates H₂O to open up a Markovnikov switch to carbon-2.",
      },
      {
        from: "Propene",
        to: "2-Bromopropane",
        reagents: "HBr(g)",
        conditions: "Room temperature (Markovnikov 2° C⁺)",
        rxnType: "Electrophilic addition",
        trap: "2-bromopropane is the major regioisomer (via 2° carbocation).",
      },
      {
        from: "2-Bromopropane",
        to: "Propan-2-ol",
        reagents: "NaOH(aq) (or KOH(aq))",
        conditions: "Warm under reflux",
        rxnType: "Nucleophilic substitution",
        trap: "Use AQUEOUS NaOH (ethanolic NaOH would eliminate back to propene!).",
      },
    ],
  },
  phenylamine: {
    id: "phenylamine",
    label: "Benzene → Amine",
    start: "Benzene",
    target: "Phenylamine",
    nodes: ["Benzene", "Nitrobenzene", "C₆H₅NH₃⁺ → Phenylamine"],
    steps: [
      {
        from: "Benzene",
        to: "Nitrobenzene",
        reagents: "conc. HNO₃ + conc. H₂SO₄",
        conditions: "Warm at 50 °C (electrophile NO₂⁺)",
        rxnType: "Electrophilic aromatic substitution",
        trap: "Above 50 °C causes dinitration to 1,3-dinitrobenzene!",
      },
      {
        from: "Nitrobenzene",
        to: "Phenylamine (C₆H₅NH₂)",
        reagents: "Stage 1: Sn + conc. HCl · Stage 2: NaOH(aq)",
        conditions: "Reflux with Sn/conc. HCl, then add NaOH(aq)",
        rxnType: "Two-stage reduction + deprotonation",
        trap: "NEVER forget Stage 2 NaOH(aq) — conc. HCl traps phenylamine as C₆H₅NH₃⁺!",
      },
    ],
  },
  "acid-to-ald": {
    id: "acid-to-ald",
    label: "Acid → Aldehyde",
    start: "Butanoic acid",
    target: "Butanal",
    nodes: ["Butanoic acid", "Butan-1-ol", "Butanal"],
    steps: [
      {
        from: "Butanoic acid",
        to: "Butan-1-ol",
        reagents: "LiAlH₄ in dry ether, then H⁺(aq)",
        conditions: "Anhydrous dry ether, then aqueous acid work-up",
        rxnType: "Reduction (cannot stop at aldehyde)",
        trap: "LiAlH₄ reduces −COOH straight past the aldehyde to the 1° alcohol; NaBH₄ does nothing.",
      },
      {
        from: "Butan-1-ol",
        to: "Butanal",
        reagents: "Acidified K₂Cr₂O₇ / H⁺ (limiting)",
        conditions: "Warm gently with IMMEDIATE DISTILLATION",
        rxnType: "Controlled partial oxidation",
        trap: "Distilling immediately removes volatile butanal before it re-oxidizes back to butanoic acid!",
      },
    ],
  },
};

function SynthesisNavigatorWidget() {
  const [routeId, setRouteId] = useState<RouteId>("isomer-switch");
  const [direction, setDirection] = useState<"forward" | "retro">("retro");
  const [stepIdx, setStepIdx] = useState<number>(0);
  const [stepYield, setStepYield] = useState<number>(80);

  const route = ROUTES[routeId];
  const nSteps = route.steps.length;
  const safeStep = Math.min(stepIdx, nSteps - 1);
  // In retrosynthesis mode, display nodes reversed from Target => Start
  const activeStep = direction === "forward" ? route.steps[safeStep] : route.steps[nSteps - 1 - safeStep];
  const displayNodes = direction === "forward" ? route.nodes : [...route.nodes].reverse();
  const overallYield = Math.round(Math.pow(stepYield / 100, nSteps) * 1000) / 10;

  const handleRouteChange = (next: RouteId) => {
    setRouteId(next);
    setStepIdx(0);
  };

  return (
    <WidgetFrame
      title="Organic Synthesis & Retrosynthesis Pathway Navigator [HL]"
      tryThis={[
        "Switch between **Retrosynthesis (⇒)** and **Forward Synthesis (→)** to practise planning backwards from the target.",
        "Test **Acid → 2° Alcohol** (4 steps) with an 80% per-step yield — notice how multi-step overall yield drops to **41.0%**!",
        "Check **Benzene → Amine** and **Acid → Aldehyde** for the classic IB HL exam traps (NaOH work-up & immediate distillation).",
      ]}
      caption={
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
            <span>
              {direction === "retro" ? `Retrosynthetic Step ${safeStep + 1}` : `Forward Step ${safeStep + 1}`} of {nSteps}
            </span>
            <span>·</span>
            <span>{activeStep.rxnType}</span>
          </div>
          <p className="font-bold text-ink">
            {direction === "retro"
              ? `${activeStep.to}  ⇒  precursor: ${activeStep.from}`
              : `${activeStep.from}  →  ${activeStep.to}`}
          </p>
          <p className="text-ink-2">
            <strong>Reagents:</strong> {activeStep.reagents} · <strong>Conditions:</strong> {activeStep.conditions}
          </p>
          <p className="text-xs font-semibold text-bad">IB Trap Check: {activeStep.trap}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Synthesis direction"
            value={direction}
            onChange={(v) => {
              setDirection(v);
              setStepIdx(0);
            }}
            options={[
              { value: "retro", label: "Retrosynthesis (⇒)" },
              { value: "forward", label: "Forward Synthesis (→)" },
            ]}
          />
          <Stepper label="Inspect step" value={safeStep + 1} min={1} max={nSteps} onChange={(v) => setStepIdx(v - 1)} />
        </div>

        {/* Route mission buttons */}
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(ROUTES) as RouteId[]).map((rid) => (
            <button
              key={rid}
              type="button"
              onClick={() => handleRouteChange(rid)}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                rid === routeId
                  ? "border-brand bg-brand text-brand-ink shadow-sm"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {ROUTES[rid].label}
            </button>
          ))}
        </div>

        {/* Interactive SVG Pathway Diagram */}
        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg viewBox="0 0 600 135" className="h-auto w-full" role="img" aria-label={`Synthesis pathway ${route.start} to ${route.target}`}>
            {displayNodes.map((node, i) => {
              const count = displayNodes.length;
              const boxW = Math.min(130, Math.floor((560 - (count - 1) * 28) / count));
              const totalW = count * boxW + (count - 1) * 28;
              const startX = (600 - totalW) / 2;
              const x = startX + i * (boxW + 28);
              const isHighlightedNode = i === safeStep || i === safeStep + 1;
              return (
                <g key={`${node}-${i}`}>
                  <rect
                    x={x}
                    y={34}
                    width={boxW}
                    height={56}
                    rx={10}
                    fill={isHighlightedNode ? "var(--surface)" : "var(--surface-2)"}
                    stroke={
                      i === 0
                        ? direction === "retro"
                          ? "var(--accent)"
                          : "var(--info)"
                        : i === count - 1
                        ? direction === "retro"
                          ? "var(--info)"
                          : "var(--good)"
                        : isHighlightedNode
                        ? "var(--brand)"
                        : "var(--line)"
                    }
                    strokeWidth={isHighlightedNode ? 2.2 : 1.4}
                  />
                  <text
                    x={x + boxW / 2}
                    y={56}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="700"
                    fill="var(--ink-2)"
                  >
                    {i === 0
                      ? direction === "retro"
                        ? "TARGET"
                        : "START"
                      : i === count - 1
                      ? direction === "retro"
                        ? "START"
                        : "TARGET"
                      : `INTERM. ${i}`}
                  </text>
                  <text
                    x={x + boxW / 2}
                    y={74}
                    textAnchor="middle"
                    fontSize={boxW < 105 ? "9.5" : "10.8"}
                    fontWeight="700"
                    fill="var(--ink)"
                  >
                    {node.length > 16 ? `${node.slice(0, 15)}…` : node}
                  </text>
                  {i < count - 1 ? (
                    <g onClick={() => setStepIdx(i)} style={{ cursor: "pointer" }}>
                      <text
                        x={x + boxW + 14}
                        y={67}
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="800"
                        fill={i === safeStep ? "var(--brand)" : "var(--ink-2)"}
                      >
                        {direction === "retro" ? "⇒" : "→"}
                      </text>
                      <text
                        x={x + boxW + 14}
                        y={110}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight={i === safeStep ? "800" : "600"}
                        fill={i === safeStep ? "var(--brand)" : "var(--ink-2)"}
                      >
                        S{i + 1}
                      </text>
                    </g>
                  ) : null}
                </g>
              );
            })}
            <text x="300" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">
              {direction === "retro"
                ? `Working Backwards: ${route.target} ⇒ ${route.start} (${nSteps} steps)`
                : `Forward Route: ${route.start} → ${route.target} (${nSteps} steps)`}
            </text>
          </svg>
        </div>

        {/* Multi-step yield calculator */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-center">
          <Slider
            label="Assumed yield per step"
            value={stepYield}
            min={50}
            max={95}
            step={5}
            onChange={setStepYield}
            format={(v) => `${v}%`}
          />
          <Readout
            label={`Overall ${nSteps}-step yield`}
            value={`${overallYield}%`}
            tone={overallYield >= 50 ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sn1-sn2-electrophilic-stepper",
    title: "Curly-Arrow Mechanism & Energy-Profile Stepper [HL]",
    blurb: "Step through SN2, SN1, Markovnikov addition, and benzene nitration alongside live energy profiles and a rate-law simulator.",
    Component: MechanismStepperWidget,
  },
  {
    id: "organic-synthesis-navigator",
    title: "Organic Synthesis & Retrosynthesis Pathway Navigator [HL]",
    blurb: "Navigate classic 2- to 4-step IB synthesis routes forwards or backwards (⇒), inspecting reagents, IB traps, and cumulative % yield.",
    Component: SynthesisNavigatorWidget,
  },
];

export default function OrganicMechanismsWidgets() {
  return (
    <div className="space-y-6">
      {widgets.map((w) => (
        <div key={w.id}>{w.Component()}</div>
      ))}
    </div>
  );
}
