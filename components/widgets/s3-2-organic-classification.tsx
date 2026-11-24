"use client";

import { useState } from "react";
import { M, Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const SUB_DIGITS = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
function toSub(n: number): string {
  if (n <= 1) return "";
  return String(n)
    .split("")
    .map((ch) => SUB_DIGITS[Number(ch)] ?? ch)
    .join("");
}

function formatFormula(c: number, h: number, n: number, o: number, x: number): string {
  const parts: string[] = [];
  if (c > 0) parts.push(`C${toSub(c)}`);
  if (h > 0) parts.push(`H${toSub(h)}`);
  if (n > 0) parts.push(`N${toSub(n)}`);
  if (o > 0) parts.push(`O${toSub(o)}`);
  if (x > 0) parts.push(`Cl${toSub(x)}`);
  return parts.join("") || "—";
}

// =============================================================================
// WIDGET 1: Interactive IHD & Functional Group Builder (SL)
// =============================================================================
interface IhDPreset {
  id: string;
  label: string;
  c: number;
  h: number;
  o: number;
  n: number;
  x: number;
  note: string;
}

const IHD_PRESETS: IhDPreset[] = [
  { id: "ethanol", label: "Ethanol", c: 2, h: 6, o: 1, n: 0, x: 0, note: "Saturated alcohol (IHD = 0): notice O adds 0 to IHD." },
  { id: "acid", label: "Ethanoic acid", c: 2, h: 4, o: 2, n: 0, x: 0, note: "One C=O π bond (IHD = 1); both O atoms are ignored." },
  { id: "nitrile", label: "Propanenitrile", c: 3, h: 5, o: 0, n: 1, x: 0, note: "One C≡N triple bond = 2 π bonds (IHD = 2); N adds +1!" },
  { id: "benzene", label: "Benzene", c: 6, h: 6, o: 0, n: 0, x: 0, note: "1 ring + 3 π bonds → IHD = 4 (classic aromatic fingerprint)." },
  { id: "aspirin", label: "Aspirin", c: 9, h: 8, o: 4, n: 0, x: 0, note: "Benzene ring (4) + ester C=O (1) + acid C=O (1) → IHD = 6." },
  { id: "caffeine", label: "Caffeine", c: 8, h: 10, o: 2, n: 4, x: 0, note: "2 fused rings + 2 C=O + 1 C=C + 1 C=N → IHD = 6." },
];

function IhDBuilderWidget() {
  const [c, setC] = useState(4);
  const [h, setH] = useState(8);
  const [o, setO] = useState(2);
  const [n, setN] = useState(0);
  const [x, setX] = useState(0);
  const [activePreset, setActivePreset] = useState<string>("");

  const applyPreset = (p: IhDPreset) => {
    setC(p.c);
    setH(p.h);
    setO(p.o);
    setN(p.n);
    setX(p.x);
    setActivePreset(p.id);
  };

  const updateAtom = (setter: (v: number) => void) => (v: number) => {
    setter(v);
    setActivePreset("");
  };

  const numerator = 2 * c + 2 + n - h - x;
  const isEven = numerator % 2 === 0;
  const ihd = numerator / 2;
  const isValid = isEven && ihd >= 0;
  const mr = 12 * c + h + 16 * o + 14 * n + 35 * x;
  const formula = formatFormula(c, h, n, o, x);

  // Suggest structurally plausible IB functional groups
  const feasible: string[] = [];
  if (isValid) {
    if (ihd === 0) {
      if (o === 0 && n === 0 && x === 0) feasible.push("Alkane (saturated acyclic)");
      if (x >= 1) feasible.push("Halogenoalkane (R−Cl)");
      if (o >= 1) feasible.push("Alcohol (−OH) or Ether (−O−)");
      if (n >= 1) feasible.push("Saturated Amine (−NH₂ / −NHR / −NR₂)");
    } else {
      if (ihd >= 1) feasible.push("Alkene (C=C) or Cycloalkane ring");
      if (ihd >= 1 && o >= 1) feasible.push("Aldehyde (−CHO) or Ketone (C=O)");
      if (ihd >= 1 && o >= 2) feasible.push("Carboxylic acid (−COOH) or Ester (−COO−)");
      if (ihd >= 1 && o >= 1 && n >= 1) feasible.push("Amide (−CONH₂)");
      if (ihd >= 2) feasible.push("Alkyne (C≡C) or 2 double bonds / ring + π");
      if (ihd >= 2 && n >= 1) feasible.push("Nitrile (−C≡N)");
      if (ihd >= 4 && c >= 6) feasible.push("Benzene / Phenyl ring (C₆H₅−, uses IHD = 4)");
    }
  }

  const presetNote = IHD_PRESETS.find((p) => p.id === activePreset)?.note;
  const barUnits = isValid ? Math.min(8, ihd) : 0;

  return (
    <WidgetFrame
      title="IHD & Functional Group Budget Builder"
      tryThis={[
        "Start from **Ethanol** (`C₂H₆O`), then increase **O** from `1` to `5`: verify that **IHD stays 0** because divalent oxygen is invisible in the IHD formula!",
        "Set `C = 4, H = 8, O = 2, N = 0, Cl = 0` (`IHD = 1`) and see which carbonyl functional groups are unlocked.",
        "Change **N** from `0` to `1` without changing `H`: notice why an odd `H + X − N` violates valence (the **Nitrogen Rule**).",
      ]}
      caption={
        isValid ? (
          <span>
            <M>{`IHD = (2(${c}) + 2 + ${n} - ${h} - ${x}) / 2 = ${numerator}/2 = ${ihd}`}</M>.{" "}
            {presetNote ??
              (ihd === 0
                ? "Fully saturated acyclic molecule — zero rings and zero π bonds."
                : ihd >= 4 && c >= 6
                  ? `An IHD of ${ihd} with ${c} carbons strongly suggests a benzene ring (4) plus ${ihd - 4} additional ring(s) or π bond(s).`
                  : `Total rings + π bonds = ${ihd}. Changing O (${o} present) leaves IHD unchanged.`)}
          </span>
        ) : (
          <span className="font-semibold text-bad">
            {numerator < 0
              ? `Too many monovalent atoms (H + Cl = ${h + x} exceeds saturated maximum ${2 * c + 2 + n}) — impossible neutral molecule!`
              : `Odd numerator (${numerator}) gives half-integer IHD (${ihd.toFixed(1)}): a valid neutral molecule must have an EVEN value of (2C + 2 + N − H − X)!`}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {IHD_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                activePreset === p.id
                  ? "border-brand bg-brand-soft text-brand"
                  : "border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Formula" value={formula} tone="ink" />
          <Readout
            label="IHD (rings + π)"
            value={isValid ? ihd : "Invalid"}
            tone={isValid ? "brand" : "bad"}
          />
          <Readout label="Integer M⁺" value={isValid ? `${mr}` : "—"} tone="good" />
        </div>

        <div className="grid gap-3 rounded-xl border border-line bg-surface-2/60 p-3 sm:grid-cols-2">
          <Stepper label="Carbon (C)" value={c} min={1} max={12} onChange={updateAtom(setC)} />
          <Stepper label="Hydrogen (H)" value={h} min={0} max={26} onChange={updateAtom(setH)} />
          <Stepper label="Oxygen (O — ignored!)" value={o} min={0} max={5} onChange={updateAtom(setO)} />
          <Stepper label="Nitrogen (N — adds +1)" value={n} min={0} max={4} onChange={updateAtom(setN)} />
          <Stepper label="Chlorine (Cl — subtracts 1)" value={x} min={0} max={4} onChange={updateAtom(setX)} />
        </div>

        {/* Visual IHD Unsaturation Budget SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 560 94"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label={`Visual IHD budget showing ${isValid ? ihd : 0} units of unsaturation`}
        >
          <text x="16" y="24" fontSize="12" fontWeight="700" fill="var(--ink)">
            Unsaturation Budget (Rings + π Bonds)
          </text>
          <text x="544" y="24" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--ink-2)">
            {isValid ? `${ihd} unit${ihd === 1 ? "" : "s"}` : "Adjust H, N or Cl"}
          </text>
          {Array.from({ length: 8 }, (_, idx) => {
            const filled = isValid && idx < barUnits;
            const isBenzeneBlock = isValid && ihd >= 4 && c >= 6 && idx < 4;
            const xPos = 16 + idx * 66;
            return (
              <g key={idx}>
                <rect
                  x={xPos}
                  y={36}
                  width={58}
                  height={32}
                  rx={7}
                  fill={
                    !filled
                      ? "var(--surface-2)"
                      : isBenzeneBlock
                        ? "var(--info)"
                        : "var(--brand)"
                  }
                  stroke={filled ? "none" : "var(--line)"}
                  strokeWidth={1.2}
                />
                <text
                  x={xPos + 29}
                  y={56}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={filled ? "#ffffff" : "var(--ink-2)"}
                >
                  {filled ? (isBenzeneBlock ? (idx === 0 ? "Ring" : `π${idx}`) : `#${idx + 1}`) : idx + 1}
                </text>
              </g>
            );
          })}
          <text x="16" y="84" fontSize="10.5" fill="var(--ink-2)">
            {isValid && ihd >= 4 && c >= 6
              ? "Blue block = 1 benzene ring (4 units) · Green = extra rings or π bonds"
              : "Each filled block = 1 ring OR 1 π bond (double bond = 1, triple bond = 2)"}
          </text>
        </svg>

        {feasible.length > 0 ? (
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Plausible IB Functional Groups for {formula} (IHD = {ihd})
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {feasible.map((fg) => (
                <span key={fg} className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
                  {fg}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Combined MS + IR + ¹H NMR Structure Detective [HL]
// =============================================================================
interface MsPeak {
  mz: number;
  height: number; // 0..100
  label?: string;
}

interface IrBand {
  cm: number; // wavenumber 4000..500
  width: number; // cm^-1 half-width
  depth: number; // 0..100 dip
  label: string;
}

interface NmrSignal {
  ppm: number;
  hCount: number;
  mult: 1 | 2 | 3 | 4 | 5 | 7; // 1=s, 2=d, 3=t, 4=q, 5=multiplet, 7=septet
  multLabel: string;
  broad?: boolean;
  assign: string;
}

interface MysteryCompound {
  id: string;
  code: string;
  formula: string;
  empirical: string;
  mr: number;
  ihd: number;
  correctId: string;
  irSummary: string;
  msSummary: string;
  nmrSummary: string;
  msPeaks: MsPeak[];
  irBands: IrBand[];
  nmrSignals: NmrSignal[];
  candidates: {
    id: string;
    name: string;
    condensed: string;
    feedback: string;
  }[];
}

const MYSTERIES: MysteryCompound[] = [
  {
    id: "A",
    code: "Mystery A",
    formula: "C₄H₈O₂",
    empirical: "C₂H₄O",
    mr: 88,
    ihd: 1,
    correctId: "ethyl-ethanoate",
    irSummary: "Sharp C=O at 1740 cm⁻¹ · C−O at 1240 cm⁻¹ · NO broad O−H above 2500 cm⁻¹",
    msSummary: "M⁺ = 88 · Base peak m/z = 43 (CH₃CO⁺, loss of C₂H₅O• = 45) · m/z = 73 (M − 15)",
    nmrSummary: "3 signals (2 : 3 : 3) — 4.1 ppm (2H quartet), 2.0 ppm (3H singlet), 1.25 ppm (3H triplet)",
    msPeaks: [
      { mz: 15, height: 18, label: "CH₃⁺" },
      { mz: 29, height: 36, label: "C₂H₅⁺" },
      { mz: 43, height: 100, label: "43 CH₃CO⁺" },
      { mz: 61, height: 22 },
      { mz: 70, height: 14 },
      { mz: 88, height: 28, label: "88 M⁺" },
    ],
    irBands: [
      { cm: 2980, width: 65, depth: 46, label: "C−H" },
      { cm: 1740, width: 35, depth: 88, label: "C=O (1740)" },
      { cm: 1240, width: 55, depth: 80, label: "C−O (1240)" },
      { cm: 1050, width: 45, depth: 55, label: "" },
    ],
    nmrSignals: [
      { ppm: 4.1, hCount: 2, mult: 4, multLabel: "2H quartet", assign: "−O−CH₂−CH₃" },
      { ppm: 2.0, hCount: 3, mult: 1, multLabel: "3H singlet", assign: "CH₃−C(=O)−" },
      { ppm: 1.25, hCount: 3, mult: 3, multLabel: "3H triplet", assign: "−O−CH₂−CH₃" },
    ],
    candidates: [
      {
        id: "ethyl-ethanoate",
        name: "Ethyl ethanoate",
        condensed: "CH₃COOCH₂CH₃",
        feedback:
          "Spot on! IR rules out carboxylic acids (no O−H), the 2H quartet at 4.1 ppm proves −O−CH₂CH₃, the 3H singlet at 2.0 ppm is CH₃CO−, and MS base peak m/z = 43 confirms CH₃CO⁺!",
      },
      {
        id: "methyl-propanoate",
        name: "Methyl propanoate",
        condensed: "CH₃CH₂COOCH₃",
        feedback:
          "Close isomer, but check ¹H NMR & MS! In methyl propanoate the 3H singlet (−O−CH₃) sits downfield at 3.7 ppm and the 2H quartet sits at 2.3 ppm, and MS gives m/z = 57 (C₂H₅CO⁺) rather than base peak 43.",
      },
      {
        id: "butanoic-acid",
        name: "Butanoic acid",
        condensed: "CH₃CH₂CH₂COOH",
        feedback:
          "Ruled out by both IR and ¹H NMR: there is NO very broad acid O−H trough (2500–3000 cm⁻¹) and no 1H peak at 10–12 ppm!",
      },
      {
        id: "2-methylpropanoic",
        name: "2-methylpropanoic acid",
        condensed: "(CH₃)₂CHCOOH",
        feedback:
          "Ruled out: carboxylic acids require a broad IR O−H band (2500–3000 cm⁻¹), and an isopropyl group would show a 6H doublet + 1H septet, not a quartet + triplet!",
      },
    ],
  },
  {
    id: "B",
    code: "Mystery B",
    formula: "C₄H₈O₂",
    empirical: "C₂H₄O",
    mr: 88,
    ihd: 1,
    correctId: "methyl-propanoate",
    irSummary: "Sharp C=O at 1740 cm⁻¹ · C−O at 1200 cm⁻¹ · NO broad O−H above 2500 cm⁻¹",
    msSummary: "M⁺ = 88 · Base peak m/z = 57 (C₂H₅CO⁺, M − 31) · m/z = 59 (COOCH₃⁺, M − 29)",
    nmrSummary: "3 signals (3 : 2 : 3) — 3.7 ppm (3H singlet), 2.3 ppm (2H quartet), 1.15 ppm (3H triplet)",
    msPeaks: [
      { mz: 29, height: 68, label: "29 C₂H₅⁺" },
      { mz: 57, height: 100, label: "57 C₂H₅CO⁺" },
      { mz: 59, height: 42, label: "59 COOCH₃⁺" },
      { mz: 88, height: 34, label: "88 M⁺" },
    ],
    irBands: [
      { cm: 2960, width: 65, depth: 45, label: "C−H" },
      { cm: 1740, width: 35, depth: 88, label: "C=O (1740)" },
      { cm: 1200, width: 55, depth: 78, label: "C−O (1200)" },
    ],
    nmrSignals: [
      { ppm: 3.7, hCount: 3, mult: 1, multLabel: "3H singlet", assign: "−O−CH₃" },
      { ppm: 2.3, hCount: 2, mult: 4, multLabel: "2H quartet", assign: "−CH₂−C(=O)−" },
      { ppm: 1.15, hCount: 3, mult: 3, multLabel: "3H triplet", assign: "CH₃−CH₂−" },
    ],
    candidates: [
      {
        id: "ethyl-ethanoate",
        name: "Ethyl ethanoate",
        condensed: "CH₃COOCH₂CH₃",
        feedback:
          "Compare the 3.7 ppm peak: here the 3H singlet is deshielded by −O− (−O−CH₃), whereas ethyl ethanoate puts the 2H quartet at 4.1 ppm and gives MS m/z = 43 (not 57)!",
      },
      {
        id: "methyl-propanoate",
        name: "Methyl propanoate",
        condensed: "CH₃CH₂COOCH₃",
        feedback:
          "Exact match! The 3H singlet at 3.7 ppm proves −O−CH₃, the 2H quartet (2.3 ppm) + 3H triplet (1.15 ppm) prove CH₃CH₂CO−, and MS confirms C₂H₅CO⁺ at m/z = 57!",
      },
      {
        id: "propyl-methanoate",
        name: "Propyl methanoate",
        condensed: "HCOOCH₂CH₂CH₃",
        feedback:
          "Propyl methanoate would display a 1H formate singlet near 8.1 ppm and four distinct ¹H NMR signals, not three!",
      },
      {
        id: "butanoic-acid",
        name: "Butanoic acid",
        condensed: "CH₃CH₂CH₂COOH",
        feedback:
          "No broad acid O−H absorption in IR (2500–3000 cm⁻¹) and no 1H −COOH peak near 11–12 ppm in NMR.",
      },
    ],
  },
  {
    id: "C",
    code: "Mystery C",
    formula: "C₄H₈O₂",
    empirical: "C₂H₄O",
    mr: 88,
    ihd: 1,
    correctId: "2-methylpropanoic",
    irSummary: "Sharp C=O at 1710 cm⁻¹ + VERY BROAD acid O−H trough (2500–3000 cm⁻¹)",
    msSummary: "M⁺ = 88 · m/z = 73 (M − 15, loss of CH₃•) · m/z = 43 (C₃H₇⁺) · m/z = 45 (COOH⁺)",
    nmrSummary: "3 signals (1 : 1 : 6) — 11.6 ppm (1H broad s), 2.6 ppm (1H septet), 1.2 ppm (6H doublet)",
    msPeaks: [
      { mz: 41, height: 35 },
      { mz: 43, height: 100, label: "43 C₃H₇⁺" },
      { mz: 45, height: 48, label: "45 COOH⁺" },
      { mz: 73, height: 64, label: "73 M−15" },
      { mz: 88, height: 22, label: "88 M⁺" },
    ],
    irBands: [
      { cm: 2880, width: 320, depth: 74, label: "Acid O−H (2500–3000)" },
      { cm: 1710, width: 36, depth: 90, label: "C=O (1710)" },
      { cm: 1245, width: 55, depth: 68, label: "C−O" },
    ],
    nmrSignals: [
      { ppm: 11.6, hCount: 1, mult: 1, multLabel: "1H broad s", broad: true, assign: "−COOH" },
      { ppm: 2.6, hCount: 1, mult: 7, multLabel: "1H septet", assign: "−CH(CH₃)₂" },
      { ppm: 1.2, hCount: 6, mult: 2, multLabel: "6H doublet", assign: "−CH(CH₃)₂" },
    ],
    candidates: [
      {
        id: "butanoic-acid",
        name: "Butanoic acid",
        condensed: "CH₃CH₂CH₂COOH",
        feedback:
          "Right functional group (carboxylic acid), wrong carbon chain! Straight-chain butanoic acid gives 4 NMR signals (including a 3H triplet), whereas here we have a 6H doublet + 1H septet.",
      },
      {
        id: "2-methylpropanoic",
        name: "2-methylpropanoic acid",
        condensed: "(CH₃)₂CHCOOH",
        feedback:
          "Nailed it! Very broad IR O−H (2500–3000 cm⁻¹) + 11.6 ppm singlet confirms −COOH, while the 6H doublet + 1H septet uniquely locks in the branched isopropyl chain!",
      },
      {
        id: "isopropyl-methanoate",
        name: "Propan-2-yl methanoate",
        condensed: "HCOOCH(CH₃)₂",
        feedback:
          "Esters lack the very broad 2500–3000 cm⁻¹ O−H band and the 11.6 ppm −COOH peak (methanoate would appear near 8.1 ppm and the septet near 5.0 ppm).",
      },
      {
        id: "ethyl-ethanoate",
        name: "Ethyl ethanoate",
        condensed: "CH₃COOCH₂CH₃",
        feedback:
          "Ruled out immediately by the strong broad acid O−H band in IR and the 11.6 ppm −COOH signal in ¹H NMR!",
      },
    ],
  },
  {
    id: "D",
    code: "Mystery D",
    formula: "C₃H₈O",
    empirical: "C₃H₈O",
    mr: 60,
    ihd: 0,
    correctId: "propan-2-ol",
    irSummary: "Strong BROAD alcohol O−H at 3350 cm⁻¹ · NO C=O near 1720 cm⁻¹",
    msSummary: "M⁺ = 60 · Base peak m/z = 45 (CH₃CHOH⁺, loss of CH₃• = 15) · m/z = 43",
    nmrSummary: "3 signals (1 : 1 : 6) — 4.0 ppm (1H septet), 2.3 ppm (1H broad s, D₂O), 1.2 ppm (6H doublet)",
    msPeaks: [
      { mz: 27, height: 22 },
      { mz: 43, height: 28 },
      { mz: 45, height: 100, label: "45 M−15" },
      { mz: 59, height: 12 },
      { mz: 60, height: 10, label: "60 M⁺" },
    ],
    irBands: [
      { cm: 3350, width: 220, depth: 78, label: "Alcohol O−H (3350)" },
      { cm: 2970, width: 65, depth: 56, label: "C−H" },
      { cm: 1130, width: 55, depth: 72, label: "C−O" },
    ],
    nmrSignals: [
      { ppm: 4.0, hCount: 1, mult: 7, multLabel: "1H septet", assign: "−CH(OH)−" },
      { ppm: 2.3, hCount: 1, mult: 1, multLabel: "1H broad s", broad: true, assign: "−OH (D₂O)" },
      { ppm: 1.2, hCount: 6, mult: 2, multLabel: "6H doublet", assign: "−(CH₃)₂" },
    ],
    candidates: [
      {
        id: "propan-1-ol",
        name: "Propan-1-ol",
        condensed: "CH₃CH₂CH₂OH",
        feedback:
          "Propan-1-ol has 4 distinct proton environments and forms its MS base peak at m/z = 31 (CH₂OH⁺, loss of C₂H₅•), not a 6H doublet + 1H septet with m/z = 45!",
      },
      {
        id: "propan-2-ol",
        name: "Propan-2-ol",
        condensed: "(CH₃)₂CHOH",
        feedback:
          "Brilliant! Broad 3350 cm⁻¹ O−H proves an alcohol, the 6H doublet + 1H septet proves a symmetric isopropyl group, and MS loses CH₃• (15) to give CH₃CHOH⁺ at m/z = 45!",
      },
      {
        id: "methoxyethane",
        name: "Methoxyethane",
        condensed: "CH₃OCH₂CH₃",
        feedback:
          "Ethers have NO O−H bond, so they cannot produce the strong broad 3350 cm⁻¹ IR band or the D₂O-exchangeable 2.3 ppm NMR peak.",
      },
      {
        id: "propanone",
        name: "Propanone",
        condensed: "CH₃COCH₃",
        feedback:
          "Wrong formula (C₃H₆O, M⁺ = 58, IHD = 1) and there is NO sharp C=O stretch at 1700–1750 cm⁻¹!",
      },
    ],
  },
  {
    id: "E",
    code: "Mystery E",
    formula: "C₃H₆O",
    empirical: "C₃H₆O",
    mr: 58,
    ihd: 1,
    correctId: "propanal",
    irSummary: "Strong SHARP C=O at 1730 cm⁻¹ · NO broad O−H above 2500 cm⁻¹",
    msSummary: "M⁺ = 58 · Strong m/z = 29 (CHO⁺ & C₂H₅⁺) · Weak/absent m/z = 43",
    nmrSummary: "3 signals (1 : 2 : 3) — 9.8 ppm (1H triplet), 2.45 ppm (2H quartet), 1.1 ppm (3H triplet)",
    msPeaks: [
      { mz: 28, height: 65, label: "28 CO/C₂H₄" },
      { mz: 29, height: 100, label: "29 CHO⁺/C₂H₅⁺" },
      { mz: 57, height: 26 },
      { mz: 58, height: 74, label: "58 M⁺" },
    ],
    irBands: [
      { cm: 2940, width: 70, depth: 50, label: "C−H" },
      { cm: 2720, width: 40, depth: 36, label: "Aldehyde C−H" },
      { cm: 1730, width: 35, depth: 92, label: "C=O (1730)" },
    ],
    nmrSignals: [
      { ppm: 9.8, hCount: 1, mult: 3, multLabel: "1H triplet", assign: "−CHO" },
      { ppm: 2.45, hCount: 2, mult: 4, multLabel: "2H quartet", assign: "−CH₂−CHO" },
      { ppm: 1.1, hCount: 3, mult: 3, multLabel: "3H triplet", assign: "CH₃−CH₂−" },
    ],
    candidates: [
      {
        id: "propanal",
        name: "Propanal",
        condensed: "CH₃CH₂CHO",
        feedback:
          "Spot on! The diagnostic 1H signal at 9.8 ppm proves an aldehyde (−CHO), the 2H quartet + 3H triplet confirm an ethyl chain, and MS m/z = 29 confirms CHO⁺/C₂H₅⁺!",
      },
      {
        id: "propanone",
        name: "Propanone",
        condensed: "CH₃COCH₃",
        feedback:
          "Propanone is completely symmetrical: it shows ONLY ONE ¹H NMR singlet at 2.1 ppm (no 9.8 ppm aldehyde peak!) and an MS base peak at m/z = 43 (CH₃CO⁺).",
      },
      {
        id: "prop-2-en-1-ol",
        name: "Prop-2-en-1-ol",
        condensed: "CH₂=CHCH₂OH",
        feedback:
          "Ruled out by IR: there is a sharp C=O peak at 1730 cm⁻¹ and NO broad alcohol O−H band at 3200–3600 cm⁻¹!",
      },
      {
        id: "propanoic-acid",
        name: "Propanoic acid",
        condensed: "CH₃CH₂COOH",
        feedback:
          "Wrong formula (C₃H₆O₂, M⁺ = 74) and no broad acid O−H band (2500–3000 cm⁻¹) or 11.5 ppm −COOH signal!",
      },
    ],
  },
  {
    id: "F",
    code: "Mystery F",
    formula: "C₈H₈O₂",
    empirical: "C₄H₄O",
    mr: 136,
    ihd: 5,
    correctId: "methyl-benzoate",
    irSummary: "Sharp C=O at 1725 cm⁻¹ · Strong C−O at 1280 cm⁻¹ · NO broad O−H",
    msSummary: "M⁺ = 136 · Base peak m/z = 105 (C₆H₅CO⁺, M − 31) · m/z = 77 (C₆H₅⁺)",
    nmrSummary: "2 regions (5 : 3) — 7.7 ppm (5H aromatic multiplet), 3.9 ppm (3H singlet)",
    msPeaks: [
      { mz: 51, height: 34 },
      { mz: 77, height: 68, label: "77 C₆H₅⁺" },
      { mz: 105, height: 100, label: "105 C₆H₅CO⁺" },
      { mz: 136, height: 38, label: "136 M⁺" },
    ],
    irBands: [
      { cm: 3060, width: 65, depth: 36, label: "Ar C−H" },
      { cm: 1725, width: 35, depth: 90, label: "C=O (1725)" },
      { cm: 1280, width: 55, depth: 84, label: "C−O (1280)" },
      { cm: 710, width: 40, depth: 70, label: "Ph bend" },
    ],
    nmrSignals: [
      { ppm: 7.7, hCount: 5, mult: 5, multLabel: "5H multiplet", assign: "C₆H₅− (phenyl)" },
      { ppm: 3.9, hCount: 3, mult: 1, multLabel: "3H singlet", assign: "−O−CH₃" },
    ],
    candidates: [
      {
        id: "methyl-benzoate",
        name: "Methyl benzoate",
        condensed: "C₆H₅COOCH₃",
        feedback:
          "Mastery! IHD = 5 = benzene (4) + C=O (1); IR confirms ester (no O−H); NMR shows monosubstituted C₆H₅− (5H) + −O−CH₃ (3H singlet at 3.9 ppm); MS confirms C₆H₅CO⁺ (105) and C₆H₅⁺ (77)!",
      },
      {
        id: "phenyl-ethanoate",
        name: "Phenyl ethanoate",
        condensed: "CH₃COOC₆H₅",
        feedback:
          "Check the 3H singlet chemical shift and MS! In phenyl ethanoate, CH₃−C(=O)− sits upfield at ~2.3 ppm (not 3.9 ppm!), and MS gives m/z = 43 (CH₃CO⁺) and 94 (C₆H₅OH⁺) rather than m/z = 105!",
      },
      {
        id: "4-methylbenzoic",
        name: "4-methylbenzoic acid",
        condensed: "CH₃C₆H₄COOH",
        feedback:
          "Ruled out on three counts: no broad acid O−H in IR (2500–3000 cm⁻¹), aromatic region integrates to 5H (monosubstituted, not 4H disubstituted), and no 11–12 ppm −COOH peak!",
      },
      {
        id: "phenylethanone",
        name: "Phenylethanone",
        condensed: "C₆H₅COCH₃",
        feedback:
          "Wrong formula (C₈H₈O, M⁺ = 120, only one O) and its CH₃CO− singlet would resonate at 2.6 ppm rather than 3.9 ppm!",
      },
    ],
  },
];

function MsSpectrumSvg({ peaks, mr }: { peaks: MsPeak[]; mr: number }) {
  const maxX = Math.max(mr + 12, 100);
  const toX = (mz: number) => 46 + (mz / maxX) * 488;
  const toY = (h: number) => 152 - (h / 100) * 116;
  const ticks = Array.from({ length: 6 }, (_, i) => Math.round((maxX * i) / 5));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 190"
      className="w-full rounded-xl border border-line bg-surface"
      role="img"
      aria-label={`Simulated mass spectrum with molecular ion at m/z ${mr}`}
    >
      <text x="280" y="19" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--ink)">
        Mass Spectrum (MS) — Relative Intensity (%) vs m/z
      </text>
      <line x1="46" y1="152" x2="540" y2="152" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="46" y1="30" x2="46" y2="152" stroke="var(--ink)" strokeWidth="1.5" />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={toX(t)} y1="152" x2={toX(t)} y2="157" stroke="var(--ink-2)" strokeWidth="1.2" />
          <text x={toX(t)} y="170" textAnchor="middle" fontSize="10" fill="var(--ink-2)">
            {t}
          </text>
        </g>
      ))}
      <text x="293" y="185" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
        m/z
      </text>
      {peaks.map((p) => {
        const x = toX(p.mz);
        const y = toY(p.height);
        const isM = p.mz === mr;
        const isBase = p.height === 100;
        const color = isM ? "var(--bad)" : isBase ? "var(--brand)" : "var(--info)";
        return (
          <g key={p.mz}>
            <line x1={x} y1="152" x2={x} y2={y} stroke={color} strokeWidth={isBase || isM ? 3 : 2.2} />
            {p.label ? (
              <text
                x={Math.min(516, Math.max(72, x))}
                y={Math.max(33, y - 5)}
                textAnchor="middle"
                fontSize="9.5"
                fontWeight="700"
                fill={color}
              >
                {p.label}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function IrSpectrumSvg({ bands }: { bands: IrBand[] }) {
  // x maps 4000 -> 46, 500 -> 536
  const toX = (cm: number) => 46 + ((4000 - cm) / 3500) * 490;
  // Build continuous transmittance path across 4000..500 in steps of 15 cm^-1
  const pts: string[] = [];
  for (let cm = 4000; cm >= 500; cm -= 15) {
    let dip = 0;
    for (const b of bands) {
      const z = (cm - b.cm) / b.width;
      dip = Math.max(dip, b.depth * Math.exp(-0.5 * z * z));
    }
    const x = toX(cm);
    const y = 38 + (dip / 100) * 110;
    pts.push(`${cm === 4000 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  const ticks = [4000, 3500, 3000, 2500, 2000, 1500, 1000, 500];
  const fpX = toX(1500);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 190"
      className="w-full rounded-xl border border-line bg-surface"
      role="img"
      aria-label="Simulated infrared transmittance spectrum from 4000 to 500 reciprocal centimetres"
    >
      <text x="280" y="19" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--ink)">
        Infrared (IR) Spectrum — Transmittance (%) vs Wavenumber (cm⁻¹)
      </text>
      <rect x={fpX} y="30" width={536 - fpX} height="122" fill="var(--surface-2)" opacity="0.6" />
      <text x={(fpX + 536) / 2} y="43" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink-2)">
        Fingerprint (&lt;1500)
      </text>
      <line x1="46" y1="152" x2="536" y2="152" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="46" y1="30" x2="46" y2="152" stroke="var(--ink)" strokeWidth="1.5" />
      <path d={pts.join(" ")} fill="none" stroke="var(--brand)" strokeWidth="2.2" />
      {bands
        .filter((b) => b.label)
        .map((b) => {
          const x = toX(b.cm);
          const y = 38 + (b.depth / 100) * 110;
          return (
            <text
              key={`${b.cm}-${b.label}`}
              x={Math.min(510, Math.max(82, x))}
              y={Math.min(148, y + 13)}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="700"
              fill={b.cm >= 1680 && b.cm <= 1760 ? "var(--bad)" : "var(--info)"}
            >
              {b.label}
            </text>
          );
        })}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={toX(t)} y1="152" x2={toX(t)} y2="157" stroke="var(--ink-2)" strokeWidth="1.2" />
          <text x={toX(t)} y="170" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
            {t}
          </text>
        </g>
      ))}
      <text x="291" y="185" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
        Wavenumber (cm⁻¹)
      </text>
    </svg>
  );
}

function NmrSpectrumSvg({ signals }: { signals: NmrSignal[] }) {
  const maxPpm = Math.max(6, Math.ceil(Math.max(...signals.map((s) => s.ppm)) + 1));
  const toX = (ppm: number) => 524 - (ppm / maxPpm) * 476;
  const ticks: number[] = [];
  const step = maxPpm > 8 ? 2 : 1;
  for (let p = 0; p <= maxPpm; p += step) ticks.push(p);

  const multipletRatios = (mult: NmrSignal["mult"]): number[] => {
    if (mult === 1) return [1];
    if (mult === 2) return [0.9, 0.9];
    if (mult === 3) return [0.5, 1, 0.5];
    if (mult === 4) return [0.35, 1, 1, 0.35];
    if (mult === 7) return [0.15, 0.45, 0.8, 1, 0.8, 0.45, 0.15];
    return [0.4, 0.85, 1, 0.7, 0.9, 0.45]; // aromatic multiplet
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 194"
      className="w-full rounded-xl border border-line bg-surface"
      role="img"
      aria-label="Simulated high-resolution proton NMR spectrum relative to TMS at 0 ppm"
    >
      <text x="280" y="19" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--ink)">
        High-Resolution ¹H NMR Spectrum [HL] — Chemical Shift δ (ppm)
      </text>
      <line x1="36" y1="152" x2="536" y2="152" stroke="var(--ink)" strokeWidth="1.5" />
      {/* TMS at 0 ppm */}
      <line x1={toX(0)} y1="152" x2={toX(0)} y2="122" stroke="var(--ink-2)" strokeWidth="2" />
      <text x={toX(0)} y="116" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink-2)">
        TMS
      </text>
      {signals.map((sig, idx) => {
        const cx = toX(sig.ppm);
        const ratios = multipletRatios(sig.mult);
        const maxH = 52 + Math.min(48, sig.hCount * 11);
        const spacing = sig.mult >= 7 ? 3.2 : 4.2;
        const startX = cx - ((ratios.length - 1) * spacing) / 2;
        const color = idx === 0 ? "var(--bad)" : idx === 1 ? "var(--info)" : "var(--brand)";
        return (
          <g key={`${sig.ppm}-${sig.multLabel}`}>
            {sig.broad ? (
              <path
                d={`M ${cx - 14} 152 Q ${cx} ${152 - maxH} ${cx + 14} 152`}
                fill="none"
                stroke={color}
                strokeWidth="2.4"
              />
            ) : (
              ratios.map((r, ri) => {
                const lx = startX + ri * spacing;
                return (
                  <line
                    key={ri}
                    x1={lx}
                    y1="152"
                    x2={lx}
                    y2={152 - r * maxH}
                    stroke={color}
                    strokeWidth="2"
                  />
                );
              })
            )}
            <text
              x={Math.min(495, Math.max(70, cx))}
              y={Math.max(36, 152 - maxH - 16)}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="700"
              fill={color}
            >
              {sig.multLabel}
            </text>
            <text
              x={Math.min(495, Math.max(70, cx))}
              y={Math.max(47, 152 - maxH - 5)}
              textAnchor="middle"
              fontSize="9"
              fill="var(--ink-2)"
            >
              {sig.ppm} ppm
            </text>
          </g>
        );
      })}
      {ticks.map((p) => (
        <g key={p}>
          <line x1={toX(p)} y1="152" x2={toX(p)} y2="157" stroke="var(--ink-2)" strokeWidth="1.2" />
          <text x={toX(p)} y="170" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
            {p}
          </text>
        </g>
      ))}
      <text x="286" y="186" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
        ← Downfield (deshielded) · δ (ppm) · Upfield (shielded) →
      </text>
    </svg>
  );
}

function StructureDetectiveWidget() {
  const [mysteryId, setMysteryId] = useState<string>("A");
  const [view, setView] = useState<"nmr" | "ir" | "ms" | "all">("all");
  const [pickedByMystery, setPickedByMystery] = useState<Record<string, string>>({});

  const mystery = MYSTERIES.find((m) => m.id === mysteryId) ?? MYSTERIES[0];
  const picked = pickedByMystery[mystery.id];
  const chosenCandidate = mystery.candidates.find((c) => c.id === picked);
  const solved = picked === mystery.correctId;

  const pickCandidate = (candId: string) => {
    setPickedByMystery((prev) => ({ ...prev, [mystery.id]: candId }));
  };

  return (
    <WidgetFrame
      title="Combined MS + IR + ¹H NMR Structure Detective [HL]"
      tryThis={[
        "Compare **Mystery A** and **Mystery B**: both are `C₄H₈O₂` esters with a singlet, quartet, and triplet—use the `3.7–4.1 ppm` NMR peak AND MS `43` vs `57` to tell them apart!",
        "Switch to **Mystery C** (`C₄H₈O₂`) and spot the `2500–3000 cm⁻¹` IR trough + `11.6 ppm` peak + isopropyl septet.",
        "Solve **Mystery F** (`IHD = 5`): combine `m/z = 105` (`C₆H₅CO⁺`), `m/z = 77` (`C₆H₅⁺`), and the `3.9 ppm` 3H singlet.",
      ]}
      caption={
        chosenCandidate ? (
          <div className="space-y-1">
            <div className={`font-extrabold ${solved ? "text-good" : "text-bad"}`}>
              {solved ? `✓ Correct: ${chosenCandidate.name} (${chosenCandidate.condensed})` : `✗ Not ${chosenCandidate.name} — check the spectra:`}
            </div>
            <p>{chosenCandidate.feedback}</p>
            {solved ? (
              <p className="text-xs text-ink-2">
                ¹H NMR assignments:{" "}
                {mystery.nmrSignals.map((s) => `${s.ppm} ppm (${s.multLabel}) = ${s.assign}`).join(" · ")}
              </p>
            ) : null}
          </div>
        ) : (
          <span>
            Inspect the formula, IHD, MS, IR, and ¹H NMR tabs for <strong>{mystery.code}</strong>, then pick the matching isomer below!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select mystery compound"
            value={mysteryId}
            onChange={setMysteryId}
            options={MYSTERIES.map((m) => ({
              value: m.id,
              label: pickedByMystery[m.id] === m.correctId ? `✓ ${m.id}` : m.id,
            }))}
          />
          <Segmented
            label="Spectrum view"
            value={view}
            onChange={setView}
            options={[
              { value: "all", label: "All 3" },
              { value: "ms", label: "MS" },
              { value: "ir", label: "IR" },
              { value: "nmr", label: "¹H NMR" },
            ]}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Formula" value={mystery.formula} tone="ink" />
          <Readout label="M⁺ (m/z)" value={mystery.mr} tone="brand" />
          <Readout label="IHD" value={mystery.ihd} tone="good" />
        </div>

        <div className="space-y-2.5">
          {view === "all" || view === "ms" ? (
            <div className="space-y-1">
              <MsSpectrumSvg peaks={mystery.msPeaks} mr={mystery.mr} />
              <p className="text-xs text-ink-2">
                <strong className="text-ink">MS:</strong> {mystery.msSummary}
              </p>
            </div>
          ) : null}

          {view === "all" || view === "ir" ? (
            <div className="space-y-1">
              <IrSpectrumSvg bands={mystery.irBands} />
              <p className="text-xs text-ink-2">
                <strong className="text-ink">IR:</strong> {mystery.irSummary}
              </p>
            </div>
          ) : null}

          {view === "all" || view === "nmr" ? (
            <div className="space-y-1">
              <NmrSpectrumSvg signals={mystery.nmrSignals} />
              <p className="text-xs text-ink-2">
                <strong className="text-ink">¹H NMR:</strong> {mystery.nmrSummary}
              </p>
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Deduce {mystery.code} (Empirical: {mystery.empirical})
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {mystery.candidates.map((cand) => {
              const isSelected = picked === cand.id;
              const isRight = cand.id === mystery.correctId;
              const style = !isSelected
                ? "border-line bg-surface hover:border-brand text-ink"
                : isRight
                  ? "border-good bg-good-soft text-good"
                  : "border-bad bg-bad-soft text-bad";
              return (
                <button
                  key={cand.id}
                  type="button"
                  onClick={() => pickCandidate(cand.id)}
                  className={`rounded-xl border p-3 text-left transition ${style}`}
                >
                  <div className="text-sm font-extrabold">{cand.name}</div>
                  <div className="mt-0.5 font-mono text-xs opacity-85">{cand.condensed}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ihd-functional-group-builder",
    title: "IHD & Functional Group Builder",
    blurb: "Adjust C, H, O, N, and Cl counts to watch `IHD = (2C + 2 + N − H − X)/2` update live and unlock possible IB functional groups.",
    Component: IhDBuilderWidget,
  },
  {
    id: "combined-spectroscopy-detective-hl",
    title: "Combined MS + IR + ¹H NMR Detective [HL]",
    blurb: "Solve six IB Paper 2 mystery compounds by cross-referencing live Mass Spec, IR, and high-resolution ¹H NMR spectra.",
    Component: StructureDetectiveWidget,
  },
];

export default function OrganicClassificationWidgets() {
  return (
    <div className="space-y-5">
      <IhDBuilderWidget />
      <StructureDetectiveWidget />
    </div>
  );
}
