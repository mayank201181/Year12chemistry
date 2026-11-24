"use client";
import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: pH Titration Curve & Indicator Selector (Strong/Weak Combos) [HL]
// =============================================================================
type TitrationMode = "sa-sb" | "wa-sb" | "wb-sa" | "wa-wb";
type IndicatorId = "mo" | "mr" | "btb" | "phph";

interface IndicatorDef {
  id: IndicatorId;
  name: string;
  short: string;
  lo: number;
  hi: number;
  pKIn: number;
  colorHex: string;
  acidColor: string;
  baseColor: string;
}

const INDICATORS: readonly IndicatorDef[] = [
  { id: "mo", name: "Methyl orange", short: "Methyl orange", lo: 3.1, hi: 4.4, pKIn: 3.7, colorHex: "#fb923c", acidColor: "red", baseColor: "yellow" },
  { id: "mr", name: "Methyl red", short: "Methyl red", lo: 4.4, hi: 6.2, pKIn: 5.1, colorHex: "#f43f5e", acidColor: "red", baseColor: "yellow" },
  { id: "btb", name: "Bromothymol blue", short: "Bromothymol", lo: 6.0, hi: 7.6, pKIn: 7.0, colorHex: "#38bdf8", acidColor: "yellow", baseColor: "blue" },
  { id: "phph", name: "Phenolphthalein", short: "Phenolphthalein", lo: 8.3, hi: 10.0, pKIn: 9.3, colorHex: "#ec4899", acidColor: "colourless", baseColor: "pink" },
];

const KW = 1e-14;

/** Exact charge-balance solver via bisection on pH in [0, 14]. */
function solveTitrationPH(
  mode: TitrationMode,
  vAnalyte: number,
  cAnalyte: number,
  vTitrant: number,
  cTitrant: number,
  pKWeak: number,
): number {
  const vTot = vAnalyte + vTitrant;
  const cA = (cAnalyte * vAnalyte) / vTot;
  const cT = (cTitrant * vTitrant) / vTot;
  const Ka = Math.pow(10, -pKWeak);
  // For weak base mode or weak-weak mode, use pKb = pKWeak (wb-sa) or NH3 pKb = 4.75 (wa-wb)
  const Kb = mode === "wb-sa" ? Math.pow(10, -pKWeak) : Math.pow(10, -4.75);
  const KaConj = KW / Kb;

  const residual = (pH: number): number => {
    const h = Math.pow(10, -pH);
    const oh = KW / h;
    if (mode === "sa-sb") {
      // HCl analyte (cA) + NaOH titrant (cT)
      return h + cT - oh - cA;
    }
    if (mode === "wa-sb") {
      // Weak acid HA (cA, Ka) + NaOH titrant (cT)
      const aMinus = cA * (Ka / (h + Ka));
      return h + cT - oh - aMinus;
    }
    if (mode === "wb-sa") {
      // Weak base B (cA, Kb) + HCl titrant (cT)
      const bhPlus = cA * (h / (h + KaConj));
      return h + bhPlus - oh - cT;
    }
    // wa-wb: Weak acid HA (cA, Ka) + Weak base NH3 (cT, Kb)
    const aMinus = cA * (Ka / (h + Ka));
    const bhPlus = cT * (h / (h + KaConj));
    return h + bhPlus - oh - aMinus;
  };

  let lo = 0;
  let hi = 14;
  for (let i = 0; i < 48; i++) {
    const mid = 0.5 * (lo + hi);
    // residual(pH) is strictly decreasing in pH
    if (residual(mid) > 0) lo = mid;
    else hi = mid;
  }
  return 0.5 * (lo + hi);
}

function TitrationExplorer() {
  const [mode, setMode] = useState<TitrationMode>("wa-sb");
  const [vTitrant, setVTitrant] = useState<number>(12.5);
  const [pKWeak, setPKWeak] = useState<number>(4.76);
  const [cAnalyte, setCAnalyte] = useState<number>(0.1);
  const [indId, setIndId] = useState<IndicatorId>("phph");

  const vAnalyte = 25.0;
  const cTitrant = 0.1;
  const vEq = +((vAnalyte * cAnalyte) / cTitrant).toFixed(2);
  const vHalf = +(vEq / 2).toFixed(2);
  const indicator = INDICATORS.find((x) => x.id === indId) ?? INDICATORS[3];

  const curveData = useMemo(() => {
    const pts: Array<{ v: number; ph: number }> = [];
    // Dense sampling around equivalence point for crisp vertical jump
    const vs = new Set<number>();
    for (let v = 0; v <= 50; v += 1) vs.add(v);
    for (let dv = -2.0; dv <= 2.0; dv += 0.1) {
      const vv = +(vEq + dv).toFixed(2);
      if (vv >= 0 && vv <= 50) vs.add(vv);
    }
    vs.add(vHalf);
    vs.add(vEq);
    const sorted = Array.from(vs).sort((a, b) => a - b);
    for (const v of sorted) {
      pts.push({ v, ph: solveTitrationPH(mode, vAnalyte, cAnalyte, v, cTitrant, pKWeak) });
    }
    const phEq = solveTitrationPH(mode, vAnalyte, cAnalyte, vEq, cTitrant, pKWeak);
    const phHalf = solveTitrationPH(mode, vAnalyte, cAnalyte, vHalf, cTitrant, pKWeak);
    const phBefore = solveTitrationPH(mode, vAnalyte, cAnalyte, Math.max(0, vEq - 0.5), cTitrant, pKWeak);
    const phAfter = solveTitrationPH(mode, vAnalyte, cAnalyte, Math.min(50, vEq + 0.5), cTitrant, pKWeak);
    const jumpLo = Math.min(phBefore, phAfter);
    const jumpHi = Math.max(phBefore, phAfter);
    return { pts, phEq, phHalf, jumpLo, jumpHi };
  }, [mode, cAnalyte, pKWeak, vEq, vHalf]);

  const currentPH = useMemo(
    () => solveTitrationPH(mode, vAnalyte, cAnalyte, vTitrant, cTitrant, pKWeak),
    [mode, cAnalyte, vTitrant, pKWeak],
  );

  const jumpSpan = curveData.jumpHi - curveData.jumpLo;
  const indicatorSuitable =
    mode !== "wa-wb" &&
    jumpSpan >= 2.2 &&
    indicator.lo >= curveData.jumpLo &&
    indicator.hi <= curveData.jumpHi;

  // SVG coordinate mapping
  const W = 460;
  const H = 264;
  const padL = 42;
  const padR = 16;
  const padT = 18;
  const padB = 38;
  const xOf = (v: number) => padL + (v / 50) * (W - padL - padR);
  const yOf = (ph: number) => padT + ((14 - ph) / 14) * (H - padT - padB);

  const pathD = curveData.pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${xOf(p.v).toFixed(1)},${yOf(p.ph).toFixed(1)}`)
    .join(" ");

  const titrantLabel = mode === "wb-sa" ? "0.10 M HCl" : mode === "wa-wb" ? "0.10 M NH₃" : "0.10 M NaOH";
  const hasWeakParam = mode !== "sa-sb";
  const weakParamLabel = mode === "wb-sa" ? "Weak base pK_b" : "Weak acid pK_a";

  return (
    <WidgetFrame
      title="pH Titration Curve & Indicator Selector [HL]"
      tryThis={[
        "Switch between **Weak acid + Strong base** and **Strong acid + Strong base** — watch how the equivalence pH jumps above 7.00 due to salt hydrolysis.",
        "Slide titrant volume to half-equivalence (`12.5 cm³` at `0.10 M`) and verify **`pH = pK_a`** (or `14 − pK_b` for a weak base).",
        "Test **Methyl orange** vs **Phenolphthalein** on Weak acid + Strong base, then check **Weak + Weak** to see why no indicator works.",
      ]}
      caption={
        indicatorSuitable ? (
          <span>
            <strong>{indicator.name}</strong> ({indicator.lo.toFixed(1)}–{indicator.hi.toFixed(1)}, {indicator.acidColor} → {indicator.baseColor}) lies cleanly inside the steep vertical jump ({curveData.jumpLo.toFixed(1)}–{curveData.jumpHi.toFixed(1)}), giving a sharp end-point at <strong>V_eq = {vEq.toFixed(1)} cm³</strong>.
          </span>
        ) : mode === "wa-wb" ? (
          <span>
            <strong>Weak acid + Weak base</strong> has no sharp vertical jump (only {jumpSpan.toFixed(1)} pH units over ±0.5 cm³) — <strong>no acid–base indicator is suitable</strong>; monitor equivalence with a pH meter instead.
          </span>
        ) : (
          <span>
            <strong>{indicator.name}</strong> ({indicator.lo.toFixed(1)}–{indicator.hi.toFixed(1)}) falls outside the vertical inflection ({curveData.jumpLo.toFixed(1)}–{curveData.jumpHi.toFixed(1)}), so it changes colour too gradually or too far from equivalence!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<TitrationMode>
          label="Titration combination"
          value={mode}
          onChange={setMode}
          options={[
            { value: "sa-sb", label: "Strong + Strong" },
            { value: "wa-sb", label: "Weak Acid + Strong Base" },
            { value: "wb-sa", label: "Weak Base + Strong Acid" },
            { value: "wa-wb", label: "Weak + Weak" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label={`Volume of ${titrantLabel} added`}
            value={vTitrant}
            min={0}
            max={50}
            step={0.5}
            onChange={setVTitrant}
            format={(v) => `${v.toFixed(1)} cm³`}
          />
          <Slider
            label="Analyte concentration (25.0 cm³)"
            value={cAnalyte}
            min={0.05}
            max={0.15}
            step={0.01}
            onChange={setCAnalyte}
            format={(c) => `${c.toFixed(2)} mol dm⁻³`}
          />
        </div>

        {hasWeakParam ? (
          <Slider
            label={weakParamLabel}
            value={pKWeak}
            min={3.0}
            max={6.0}
            step={0.04}
            onChange={setPKWeak}
            format={(v) => v.toFixed(2)}
          />
        ) : null}

        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Acid–base indicator overlay</div>
          <Segmented<IndicatorId>
            label="Select indicator"
            value={indId}
            onChange={setIndId}
            options={INDICATORS.map((ind) => ({ value: ind.id, label: ind.short }))}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Interactive pH titration curve with indicator transition band and equivalence point"
          >
            {/* Indicator band */}
            <rect
              x={padL}
              y={yOf(indicator.hi)}
              width={W - padL - padR}
              height={Math.max(2, yOf(indicator.lo) - yOf(indicator.hi))}
              fill={indicator.colorHex}
              opacity={0.22}
            />
            <text
              x={W - padR - 4}
              y={yOf((indicator.lo + indicator.hi) / 2) + 3}
              textAnchor="end"
              fontSize={9.5}
              fontWeight={700}
              fill={indicator.colorHex}
            >
              {indicator.name} ({indicator.lo}–{indicator.hi})
            </text>

            {/* Gridlines */}
            {[0, 2, 4, 6, 7, 8, 10, 12, 14].map((ph) => (
              <g key={`y-${ph}`}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={yOf(ph)}
                  y2={yOf(ph)}
                  stroke={ph === 7 ? "#94a3b8" : "#e2e8f0"}
                  strokeWidth={ph === 7 ? 1.2 : 0.8}
                  strokeDasharray={ph === 7 ? "4,3" : undefined}
                />
                {ph % 2 === 0 || ph === 7 ? (
                  <text x={padL - 6} y={yOf(ph) + 3} textAnchor="end" fontSize={9.5} className="fill-ink-2">
                    {ph}
                  </text>
                ) : null}
              </g>
            ))}
            {[0, 10, 20, 25, 30, 40, 50].map((v) => (
              <g key={`x-${v}`}>
                <line x1={xOf(v)} x2={xOf(v)} y1={padT} y2={H - padB} stroke="#e2e8f0" strokeWidth={0.8} />
                <text x={xOf(v)} y={H - padB + 14} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
                  {v}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={padL} x2={padL} y1={padT} y2={H - padB} stroke="#475569" strokeWidth={1.4} />
            <line x1={padL} x2={W - padR} y1={H - padB} y2={H - padB} stroke="#475569" strokeWidth={1.4} />
            <text x={13} y={(padT + H - padB) / 2} textAnchor="middle" fontSize={10.5} fontWeight={700} className="fill-ink" transform={`rotate(-90 13 ${(padT + H - padB) / 2})`}>
              pH
            </text>
            <text x={(padL + W - padR) / 2} y={H - 6} textAnchor="middle" fontSize={10.5} fontWeight={700} className="fill-ink">
              Volume of {titrantLabel} added (cm³)
            </text>

            {/* Half-equivalence & equivalence guides */}
            {vEq <= 50 ? (
              <line x1={xOf(vEq)} x2={xOf(vEq)} y1={padT} y2={H - padB} stroke="#2563eb" strokeWidth={1.2} strokeDasharray="3,3" />
            ) : null}
            {hasWeakParam && vHalf <= 50 ? (
              <g>
                <line x1={xOf(vHalf)} x2={xOf(vHalf)} y1={yOf(curveData.phHalf)} y2={H - padB} stroke="#6366f1" strokeWidth={1.1} strokeDasharray="3,3" />
                <circle cx={xOf(vHalf)} cy={yOf(curveData.phHalf)} r={4} fill="#6366f1" />
              </g>
            ) : null}

            {/* Titration curve */}
            <path d={pathD} fill="none" stroke="#2563eb" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />

            {/* Equivalence marker */}
            {vEq <= 50 ? <circle cx={xOf(vEq)} cy={yOf(curveData.phEq)} r={4.5} fill="#1d4ed8" stroke="#ffffff" strokeWidth={1.4} /> : null}

            {/* Live cursor marker */}
            <circle cx={xOf(vTitrant)} cy={yOf(currentPH)} r={6} fill="#e11d48" stroke="#ffffff" strokeWidth={2} />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label={`pH at ${vTitrant.toFixed(1)} cm³`} value={currentPH.toFixed(2)} tone="brand" />
          <Readout label={`Equiv. (${vEq.toFixed(1)} cm³)`} value={`pH ${curveData.phEq.toFixed(2)}`} tone="ink" />
          <Readout
            label={hasWeakParam ? `Half-eq (${vHalf.toFixed(1)} cm³)` : "Jump span"}
            value={hasWeakParam ? `pH ${curveData.phHalf.toFixed(2)}` : `${jumpSpan.toFixed(1)} pH`}
            tone="ink"
          />
          <Readout
            label="Indicator"
            value={indicatorSuitable ? "Suitable ✓" : "Unsuitable ✗"}
            tone={indicatorSuitable ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: Voltaic Cell E⊖ & ΔG⊖ Calculator [HL]
// =============================================================================
interface CellHalf {
  id: string;
  label: string;
  ox: string;
  red: string;
  electrode: string;
  ionLabel: string;
  e0: number;
  z: number;
  barColor: string;
  solColor: string;
}

const CELL_HALVES: readonly CellHalf[] = [
  { id: "mg", label: "Mg²⁺/Mg (−2.37 V)", ox: "Mg²⁺(aq)", red: "Mg(s)", electrode: "Mg", ionLabel: "Mg²⁺(aq)", e0: -2.37, z: 2, barColor: "#94a3b8", solColor: "#f1f5f9" },
  { id: "al", label: "Al³⁺/Al (−1.66 V)", ox: "Al³⁺(aq)", red: "Al(s)", electrode: "Al", ionLabel: "Al³⁺(aq)", e0: -1.66, z: 3, barColor: "#cbd5e1", solColor: "#f8fafc" },
  { id: "zn", label: "Zn²⁺/Zn (−0.76 V)", ox: "Zn²⁺(aq)", red: "Zn(s)", electrode: "Zn", ionLabel: "Zn²⁺(aq)", e0: -0.76, z: 2, barColor: "#64748b", solColor: "#eff6ff" },
  { id: "fe", label: "Fe²⁺/Fe (−0.45 V)", ox: "Fe²⁺(aq)", red: "Fe(s)", electrode: "Fe", ionLabel: "Fe²⁺(aq)", e0: -0.45, z: 2, barColor: "#475569", solColor: "#ecfdf5" },
  { id: "she", label: "2H⁺/H₂ (0.00 V · SHE)", ox: "2H⁺(aq)", red: "H₂(g)", electrode: "Pt", ionLabel: "1 M H⁺(aq)", e0: 0.0, z: 2, barColor: "#1e293b", solColor: "#fef9c3" },
  { id: "cu", label: "Cu²⁺/Cu (+0.34 V)", ox: "Cu²⁺(aq)", red: "Cu(s)", electrode: "Cu", ionLabel: "Cu²⁺(aq)", e0: 0.34, z: 2, barColor: "#d97706", solColor: "#dbeafe" },
  { id: "fe3", label: "Fe³⁺/Fe²⁺ (+0.77 V)", ox: "Fe³⁺(aq)", red: "Fe²⁺(aq)", electrode: "Pt", ionLabel: "Fe³⁺/Fe²⁺", e0: 0.77, z: 1, barColor: "#1e293b", solColor: "#fef3c7" },
  { id: "ag", label: "Ag⁺/Ag (+0.80 V)", ox: "Ag⁺(aq)", red: "Ag(s)", electrode: "Ag", ionLabel: "Ag⁺(aq)", e0: 0.8, z: 1, barColor: "#9ca3af", solColor: "#f3f4f6" },
];

function gcdInt(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function lcmInt(a: number, b: number): number {
  return Math.abs(a * b) / gcdInt(a, b);
}

function fmtSigned(v: number): string {
  return v >= 0 ? `+${v.toFixed(2)} V` : `−${Math.abs(v).toFixed(2)} V`;
}

function VoltaicCellCalculator() {
  const [leftId, setLeftId] = useState<string>("zn");
  const [rightId, setRightId] = useState<string>("cu");

  const h1 = CELL_HALVES.find((h) => h.id === leftId) ?? CELL_HALVES[2];
  const h2 = CELL_HALVES.find((h) => h.id === rightId) ?? CELL_HALVES[5];

  const same = h1.id === h2.id;
  // Spontaneous orientation: lower E0 is anode (−), higher E0 is cathode (+)
  const anode = h1.e0 <= h2.e0 ? h1 : h2;
  const cathode = h1.e0 <= h2.e0 ? h2 : h1;
  const eCell = same ? 0 : +(cathode.e0 - anode.e0).toFixed(2);
  const nElec = same ? 0 : lcmInt(anode.z, cathode.z);
  const dgKj = same ? 0 : +((-nElec * 96500 * eCell) / 1000).toFixed(1);
  // log10 K = (n * F * E) / (2.303 * R * T) at 298 K
  const log10K = same ? 0 : +((nElec * 96500 * eCell) / (Math.LN10 * 8.31 * 298)).toFixed(1);

  const cAn = same ? 1 : nElec / anode.z;
  const cCat = same ? 1 : nElec / cathode.z;
  const coef = (k: number) => (k === 1 ? "" : `${k}`);

  const overallEq = same
    ? "Identical half-cells — no net spontaneous reaction (at equilibrium)"
    : `${coef(cAn)}${anode.red} + ${coef(cCat)}${cathode.ox} → ${coef(cAn)}${anode.ox} + ${coef(cCat)}${cathode.red}`;

  return (
    <WidgetFrame
      title="Voltaic Cell E⊖ & ΔG⊖ = −nFE⊖ Builder [HL]"
      tryThis={[
        "Compare **Zn/Cu** (`n = 2`, `+1.10 V`) against **Zn/Ag** (`n = 2`, `+1.56 V`) — notice why `E⊖(Ag⁺/Ag)` is NEVER multiplied by 2!",
        "Try **Al³⁺/Al (−1.66 V)** with **Cu²⁺/Cu (+0.34 V)**: watch `n = lcm(3, 2) = 6` send `ΔG⊖` past **−1150 kJ mol⁻¹**.",
        "Connect **SHE (0.00 V)** to **Zn** vs **Cu** to see the SHE flip roles between cathode (+) and anode (−).",
      ]}
      caption={
        same ? (
          <span>Select two <strong>different</strong> half-cells to create a potential difference and drive spontaneous electron flow.</span>
        ) : (
          <span>
            Balanced cell equation: <strong>{overallEq}</strong>. Electrons flow externally from the negative <strong>{anode.electrode} anode</strong> ({fmtSigned(anode.e0)}) to the positive <strong>{cathode.electrode} cathode</strong> ({fmtSigned(cathode.e0)}), giving <strong>K ≈ 10<sup>{log10K}</sup></strong> at 298 K!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {[
            { label: "Daniell (Zn/Cu)", a: "zn", b: "cu" },
            { label: "Zn / Ag", a: "zn", b: "ag" },
            { label: "Al / Cu (n=6)", a: "al", b: "cu" },
            { label: "SHE / Cu", a: "she", b: "cu" },
            { label: "Mg / Fe³⁺", a: "mg", b: "fe3" },
          ].map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setLeftId(p.a);
                setRightId(p.b);
              }}
              className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink-2 transition hover:border-brand hover:text-brand"
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block space-y-1 text-sm">
            <span className="font-semibold text-ink-2">Half-cell 1</span>
            <select
              value={leftId}
              onChange={(e) => setLeftId(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {CELL_HALVES.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-1 text-sm">
            <span className="font-semibold text-ink-2">Half-cell 2</span>
            <select
              value={rightId}
              onChange={(e) => setRightId(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm font-bold text-ink"
            >
              {CELL_HALVES.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 480 248"
            className="h-auto w-full"
            role="img"
            aria-label="Live schematic of a spontaneous voltaic cell showing anode, cathode, voltmeter, electron direction, and salt bridge ion migration"
          >
            {/* Beakers */}
            <rect x="34" y="106" width="150" height="106" rx="8" fill={anode.solColor} stroke="#64748b" strokeWidth="1.5" />
            <rect x="296" y="106" width="150" height="106" rx="8" fill={cathode.solColor} stroke="#64748b" strokeWidth="1.5" />

            {/* Electrodes */}
            <rect x="64" y="76" width="24" height="104" rx="3" fill={anode.barColor} stroke="#1e293b" strokeWidth="1.2" />
            <text x="76" y="132" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">
              {anode.electrode}
            </text>
            <rect x="392" y="76" width="24" height="104" rx="3" fill={cathode.barColor} stroke="#1e293b" strokeWidth="1.2" />
            <text x="404" y="132" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#ffffff">
              {cathode.electrode}
            </text>

            {/* Salt bridge */}
            <path d="M 150 140 L 150 92 C 150 78, 330 78, 330 92 L 330 140" fill="none" stroke="#9333ea" strokeWidth="13" strokeLinecap="round" />
            <path d="M 150 140 L 150 92 C 150 78, 330 78, 330 92 L 330 140" fill="none" stroke="#f3e8ff" strokeWidth="9" strokeLinecap="round" />
            <text x="240" y="85" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#6b21a8">
              Salt bridge (KNO₃)
            </text>
            {!same ? (
              <>
                <text x="186" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7e22ce">
                  ← NO₃⁻
                </text>
                <text x="294" y="102" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7e22ce">
                  K⁺ →
                </text>
              </>
            ) : null}

            {/* External wire & voltmeter */}
            <path d="M 76 76 L 76 34 L 208 34" fill="none" stroke="#0f172a" strokeWidth="2" />
            <path d="M 272 34 L 404 34 L 404 76" fill="none" stroke="#0f172a" strokeWidth="2" />
            <rect x="208" y="16" width="64" height="36" rx="18" fill={same ? "#f1f5f9" : "#dcfce7"} stroke={same ? "#94a3b8" : "#16a34a"} strokeWidth="2" />
            <text x="240" y="38" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={same ? "#475569" : "#166534"}>
              {same ? "0.00 V" : `+${eCell.toFixed(2)} V`}
            </text>

            {!same ? (
              <>
                <text x="140" y="27" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626">
                  e⁻ flow →
                </text>
                <text x="340" y="27" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626">
                  e⁻ flow →
                </text>
              </>
            ) : null}

            {/* Solution & polarity labels */}
            <text x="109" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">
              {anode.ionLabel}
            </text>
            <text x="371" y="200" textAnchor="middle" fontSize="10" fontWeight="700" fill="#334155">
              {cathode.ionLabel}
            </text>
            <text x="109" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626">
              {same ? "Half-cell A" : `Anode (−) · Ox (${fmtSigned(anode.e0)})`}
            </text>
            <text x="371" y="228" textAnchor="middle" fontSize="10" fontWeight="700" fill="#15803d">
              {same ? "Half-cell B" : `Cathode (+) · Red (${fmtSigned(cathode.e0)})`}
            </text>
            <text x="109" y="242" textAnchor="middle" fontSize="9.2" fill="#475569">
              {anode.red} → {anode.ox} + {anode.z}e⁻
            </text>
            <text x="371" y="242" textAnchor="middle" fontSize="9.2" fill="#475569">
              {cathode.ox} + {cathode.z}e⁻ → {cathode.red}
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="E⊖_cell" value={same ? "0.00 V" : `+${eCell.toFixed(2)} V`} tone={same ? "ink" : "good"} />
          <Readout label="Electrons (n)" value={same ? "0" : `${nElec} mol e⁻`} tone="ink" />
          <Readout label="ΔG⊖ (kJ mol⁻¹)" value={same ? "0.0" : `−${Math.abs(dgKj).toFixed(1)}`} tone={same ? "ink" : "brand"} />
          <Readout label="Spontaneity" value={same ? "Equilibrium" : "Spontaneous ✓"} tone={same ? "ink" : "good"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ph-titration-indicator-explorer",
    title: "pH Titration Curve & Indicator Selector [HL]",
    blurb: "Explore all four IB strong/weak titration curves, verify pH = pKₐ at half-equivalence, and test indicator suitability against the vertical jump.",
    Component: TitrationExplorer,
  },
  {
    id: "voltaic-cell-e0-gibbs-builder",
    title: "Voltaic Cell E⊖ & ΔG⊖ Calculator [HL]",
    blurb: "Pair any two IB standard half-cells to predict cathode/anode polarity, salt-bridge ion flow, E⊖_cell, ΔG⊖ = −nFE⊖, and equilibrium constant K.",
    Component: VoltaicCellCalculator,
  },
];

export default function R31ProtonElectronWidgets() {
  return (
    <div className="space-y-6">
      <TitrationExplorer />
      <VoltaicCellCalculator />
    </div>
  );
}
