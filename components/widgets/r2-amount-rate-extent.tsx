"use client";

import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

const R_KJ = 0.00831; // kJ K^-1 mol^-1 (matching IB R = 8.31 J K^-1 mol^-1)

/** Normalized 3D Maxwell–Boltzmann kinetic energy density f(E) in (kJ mol^-1)^-1. */
function mbPdf(e: number, tempK: number): number {
  if (e <= 0) return 0;
  const rt = R_KJ * tempK;
  return (2 / Math.sqrt(Math.PI)) * Math.pow(1 / rt, 1.5) * Math.sqrt(e) * Math.exp(-e / rt);
}

/** Numerically integrate tail fraction P(E >= ea) on [ea, eMax] via fine trapezoidal steps. */
function tailFraction(ea: number, tempK: number): number {
  const eMax = Math.max(ea + 25 * R_KJ * tempK, 60);
  const steps = 400;
  const h = (eMax - ea) / steps;
  let sum = 0.5 * (mbPdf(ea, tempK) + mbPdf(eMax, tempK));
  for (let i = 1; i < steps; i++) {
    sum += mbPdf(ea + i * h, tempK);
  }
  return Math.min(1, Math.max(0, sum * h));
}

function MaxwellBoltzmannWidget() {
  const [tempK, setTempK] = useState(300);
  const [eaBase, setEaBase] = useState(12);
  const [catalyst, setCatalyst] = useState<"none" | "cat">("none");

  const eaEff = catalyst === "cat" ? Math.max(4, eaBase - 3.5) : eaBase;

  const data = useMemo(() => {
    const W = 540;
    const H = 235;
    const padL = 44;
    const padR = 16;
    const padT = 18;
    const padB = 34;
    const eMaxPlot = 24;
    const yMaxPlot = 0.27;

    const sx = (e: number) => padL + (e / eMaxPlot) * (W - padL - padR);
    const sy = (y: number) => H - padB - Math.min(1, y / yMaxPlot) * (H - padT - padB);

    const buildCurve = (t: number) => {
      const pts: string[] = [];
      const n = 120;
      for (let i = 0; i <= n; i++) {
        const e = (i / n) * eMaxPlot;
        const cmd = i === 0 ? "M" : "L";
        pts.push(`${cmd} ${sx(e).toFixed(1)} ${sy(mbPdf(e, t)).toFixed(1)}`);
      }
      return pts.join(" ");
    };

    const buildTailArea = (eaStart: number, t: number) => {
      const pts: string[] = [`M ${sx(eaStart).toFixed(1)} ${sy(0).toFixed(1)}`];
      const n = 70;
      for (let i = 0; i <= n; i++) {
        const e = eaStart + (i / n) * (eMaxPlot - eaStart);
        pts.push(`L ${sx(e).toFixed(1)} ${sy(mbPdf(e, t)).toFixed(1)}`);
      }
      pts.push(`L ${sx(eMaxPlot).toFixed(1)} ${sy(0).toFixed(1)} Z`);
      return pts.join(" ");
    };

    const frac = tailFraction(eaEff, tempK);
    const fracBase = tailFraction(eaBase, 300);
    const relRate = fracBase > 1e-12 ? (frac / fracBase) * Math.sqrt(tempK / 300) : 1;
    const eMp = 0.5 * R_KJ * tempK;

    return {
      W,
      H,
      padL,
      padB,
      sx,
      sy,
      refPath: buildCurve(300),
      curPath: buildCurve(tempK),
      tailUncat: buildTailArea(eaBase, tempK),
      tailCat: catalyst === "cat" ? buildTailArea(eaEff, tempK) : "",
      fracPct: frac * 100,
      relRate,
      eMp,
    };
  }, [tempK, eaBase, eaEff, catalyst]);

  const rateText =
    data.relRate >= 100
      ? `${Math.round(data.relRate)}×`
      : data.relRate >= 10
        ? `${data.relRate.toFixed(1)}×`
        : `${data.relRate.toFixed(2)}×`;

  return (
    <WidgetFrame
      title="Maxwell–Boltzmann Distribution & Catalyst Simulator"
      tryThis={[
        "Raise **Temperature** from `300 K` to `400 K` and watch the peak drop lower and shift right while total area stays conserved.",
        "Switch **Catalyst** ON — notice the kinetic energy curve does **not** move; only the vertical `E_a` threshold shifts left!",
      ]}
      caption={
        <span>
          At <strong>{tempK} K</strong> ({catalyst === "cat" ? `catalysed Ea = ${eaEff.toFixed(1)} kJ mol⁻¹` : `uncatalysed Ea = ${eaBase.toFixed(1)} kJ mol⁻¹`}),{" "}
          <strong>{data.fracPct.toFixed(2)}%</strong> of colliding molecules satisfy <strong>E ≥ Ea</strong>, giving a relative rate of{" "}
          <strong>{rateText}</strong> compared to the 300 K uncatalysed baseline.
          {catalyst === "cat"
            ? " The catalyst provides an alternative pathway with a lower Ea without altering molecular kinetic energies or ΔH."
            : tempK > 300
              ? " Heating broadens the high-energy tail exponentially, boosting successful collisions far more than collision speed alone."
              : " Slide temperature up or enable the catalyst to expand the reactive shaded area."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Temperature (T)"
            value={tempK}
            min={250}
            max={600}
            step={10}
            onChange={setTempK}
            format={(v) => `${v} K`}
          />
          <Slider
            label="Uncatalysed Activation Energy (Ea)"
            value={eaBase}
            min={8}
            max={18}
            step={0.5}
            onChange={setEaBase}
            format={(v) => `${v.toFixed(1)} kJ mol⁻¹`}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ink-2">Pathway</span>
          <Segmented
            label="Catalyst pathway"
            value={catalyst}
            onChange={setCatalyst}
            options={[
              { value: "none", label: "Uncatalysed" },
              { value: "cat", label: "Catalysed (−3.5 kJ mol⁻¹)" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox={`0 0 ${data.W} ${data.H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive Maxwell-Boltzmann kinetic energy distribution curve"
            className="h-auto w-full"
          >
            <line x1={data.padL} y1={data.H - data.padB} x2={data.W - 14} y2={data.H - data.padB} stroke="#475569" strokeWidth={1.8} />
            <line x1={data.padL} y1={data.H - data.padB} x2={data.padL} y2={14} stroke="#475569" strokeWidth={1.8} />

            {/* Reference 300 K ghost curve */}
            {tempK !== 300 ? (
              <path d={data.refPath} fill="none" stroke="#94a3b8" strokeWidth={1.6} strokeDasharray="5 4" />
            ) : null}

            {/* Reactive tail shading */}
            {catalyst === "cat" ? <path d={data.tailCat} fill="#10b981" opacity={0.28} /> : null}
            <path d={data.tailUncat} fill="#ef4444" opacity={0.32} />

            {/* Current temperature curve */}
            <path d={data.curPath} fill="none" stroke="#2563eb" strokeWidth={2.6} />

            {/* Uncatalysed Ea marker */}
            <line
              x1={data.sx(eaBase)}
              y1={18}
              x2={data.sx(eaBase)}
              y2={data.H - data.padB}
              stroke="#dc2626"
              strokeWidth={1.8}
              strokeDasharray="5 4"
            />
            <text x={data.sx(eaBase)} y={data.H - 14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b91c1c">
              Ea ({eaBase.toFixed(1)})
            </text>

            {/* Catalysed Ea marker */}
            {catalyst === "cat" ? (
              <g>
                <line
                  x1={data.sx(eaEff)}
                  y1={18}
                  x2={data.sx(eaEff)}
                  y2={data.H - data.padB}
                  stroke="#059669"
                  strokeWidth={2}
                  strokeDasharray="4 3"
                />
                <text x={data.sx(eaEff)} y={30} textAnchor="middle" fontSize={10} fontWeight={700} fill="#047857">
                  Ea(cat)
                </text>
              </g>
            ) : null}

            {/* Axis labels */}
            <text x={data.W / 2 + 12} y={data.H - 2} textAnchor="middle" fontSize={11} fontWeight={700} fill="#334155">
              Kinetic Energy E (kJ mol⁻¹)
            </text>
            <text x={15} y={data.H / 2 - 8} textAnchor="middle" fontSize={11} fontWeight={700} fill="#334155" transform={`rotate(-90 15 ${data.H / 2 - 8})`}>
              Fraction f(E)
            </text>
            {tempK !== 300 ? (
              <text x={data.W - 22} y={30} textAnchor="end" fontSize={10} fill="#64748b">
                Dashed grey: 300 K reference
              </text>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Peak E_mp" value={`${data.eMp.toFixed(2)} kJ/mol`} tone="ink" />
          <Readout label="Active Ea" value={`${eaEff.toFixed(1)} kJ/mol`} tone={catalyst === "cat" ? "good" : "brand"} />
          <Readout label="Particles E ≥ Ea" value={`${data.fracPct.toFixed(2)}%`} tone="brand" />
          <Readout label="Relative Rate" value={rateText} tone={data.relRate >= 1 ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

/** Exothermic 2 NO2(g) [brown] ⇌ N2O4(g) [colourless], ΔH⊖ = −57.2 kJ mol⁻¹, K_c(298 K) = 4.00. */
function kcAtTemp(tempK: number): number {
  const dhJ = -57200;
  const R = 8.31;
  return 4.0 * Math.exp((-dhJ / R) * (1 / tempK - 1 / 298));
}

function EquilibriumSimulatorWidget() {
  const [no2Init, setNo2Init] = useState(0.6);
  const [n2o4Init, setN2o4Init] = useState(0.4);
  const [tempK, setTempK] = useState(298);
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const sim = useMemo(() => {
    const kc = kcAtTemp(tempK);
    const q = n2o4Init / (no2Init * no2Init);
    const nTot = no2Init + 2 * n2o4Init;
    // Exact positive root of 2 K u^2 + u - nTot = 0 where u = [NO2]_eq
    const no2Eq = (-1 + Math.sqrt(1 + 8 * kc * nTot)) / (4 * kc);
    const n2o4Eq = (nTot - no2Eq) / 2;
    const dGKj = (-8.31 * tempK * Math.log(kc)) / 1000;

    const ratio = q / kc;
    let direction: "right" | "left" | "eq" = "eq";
    if (ratio < 0.96) direction = "right";
    else if (ratio > 1.04) direction = "left";

    // Map log10(val) in [-2, 2] onto gauge x in [45, 495]
    const gaugeX = (v: number) => {
      const lg = Math.max(-2, Math.min(2, Math.log10(Math.max(1e-4, v))));
      return 45 + ((lg + 2) / 4) * 450;
    };

    return {
      kc,
      q,
      no2Eq,
      n2o4Eq,
      dGKj,
      direction,
      qX: gaugeX(q),
      kX: gaugeX(kc),
    };
  }, [no2Init, n2o4Init, tempK]);

  const applyInjectNo2 = () => {
    setNo2Init((v) => Math.min(2.0, +(v + 0.4).toFixed(2)));
    setStatusNote("Injected +0.40 mol dm⁻³ NO₂(g): Q drops below Kc, so equilibrium shifts RIGHT toward colourless N₂O₄ (Kc unchanged).");
  };

  const applyHalveVolume = () => {
    setNo2Init((v) => Math.min(2.0, +(v * 2).toFixed(2)));
    setN2o4Init((v) => Math.min(2.0, +(v * 2).toFixed(2)));
    setStatusNote("Volume halved (2× pressure): both concentrations double, cutting Q in half (Q < Kc) → shifts RIGHT toward fewer gas moles (2 → 1); Kc unchanged.");
  };

  const applyCatalyst = () => {
    setStatusNote("Catalyst added: forward and reverse rates increase equally, reaching equilibrium faster with ZERO change to Q, Kc, or equilibrium concentrations.");
  };

  const resetAll = () => {
    setNo2Init(0.6);
    setN2o4Init(0.4);
    setTempK(298);
    setStatusNote(null);
  };

  const maxBar = Math.max(1.2, no2Init, n2o4Init, sim.no2Eq, sim.n2o4Eq);
  const barH = (c: number) => Math.max(4, (c / maxBar) * 110);
  const dirLabel = sim.direction === "right" ? "Right (→ N₂O₄)" : sim.direction === "left" ? "Left (← NO₂)" : "At Equilibrium";
  const dirTone = sim.direction === "eq" ? "good" : "brand";
  const brownAlpha = Math.min(0.85, 0.12 + (sim.no2Eq / 1.8) * 0.72);

  return (
    <WidgetFrame
      title="Q vs Kc & Le Chatelier Simulator: 2NO₂(g) ⇌ N₂O₄(g)"
      tryThis={[
        "Press **Halve Volume (2× P)** to see why compressing `2 mol gas → 1 mol gas` cuts `Q` in half and shifts right without changing `Kc`.",
        "Drag **Temperature** from `298 K` up to `330 K` for this exothermic reaction (`ΔH⊖ = −57.2 kJ mol⁻¹`) and watch both `Kc` and `ΔG⊖` respond!",
      ]}
      caption={
        <span>
          {statusNote ? (
            <>
              <strong>Stress applied:</strong> {statusNote}{" "}
            </>
          ) : null}
          At <strong>{tempK} K</strong>, <strong>Kc = {sim.kc.toFixed(2)}</strong> and <strong>Q = {sim.q.toFixed(2)}</strong>.{" "}
          {sim.direction === "right"
            ? "Because Q < Kc, the forward reaction dominates until [NO₂] falls to "
            : sim.direction === "left"
              ? "Because Q > Kc, the reverse reaction dominates until [NO₂] rises to "
              : "Because Q ≈ Kc, the mixture is already at dynamic equilibrium with [NO₂] = "}
          <strong>{sim.no2Eq.toFixed(2)} mol dm⁻³</strong> and <strong>[N₂O₄] = {sim.n2o4Eq.toFixed(2)} mol dm⁻³</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="Initial [NO₂] (brown)"
            value={no2Init}
            min={0.1}
            max={2.0}
            step={0.05}
            onChange={(v) => {
              setNo2Init(v);
              setStatusNote(null);
            }}
            format={(v) => `${v.toFixed(2)} M`}
          />
          <Slider
            label="Initial [N₂O₄] (colourless)"
            value={n2o4Init}
            min={0.0}
            max={2.0}
            step={0.05}
            onChange={(v) => {
              setN2o4Init(v);
              setStatusNote(null);
            }}
            format={(v) => `${v.toFixed(2)} M`}
          />
          <Slider
            label="Temperature (T)"
            value={tempK}
            min={280}
            max={340}
            step={2}
            onChange={(v) => {
              setTempK(v);
              setStatusNote(null);
            }}
            format={(v) => `${v} K`}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={applyInjectNo2} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand">
            + Inject NO₂
          </button>
          <button type="button" onClick={applyHalveVolume} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand">
            Halve Volume (2× P)
          </button>
          <button type="button" onClick={applyCatalyst} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink hover:border-brand">
            Add Catalyst
          </button>
          <button type="button" onClick={resetAll} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-2 hover:text-ink">
            Reset
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 540 235"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Concentration bars comparing initial versus equilibrium mixtures and a log-scale Q versus Kc gauge"
            className="h-auto w-full"
          >
            {/* Bar chart: Initial vs Equilibrium */}
            <text x={150} y={18} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f172a">
              Initial vs Equilibrium Concentrations (mol dm⁻³)
            </text>
            <line x1={30} y1={142} x2={315} y2={142} stroke="#475569" strokeWidth={1.6} />

            {/* Initial NO2 */}
            <rect x={48} y={142 - barH(no2Init)} width={44} height={barH(no2Init)} rx={5} fill="#b45309" opacity={0.55} />
            <text x={70} y={137 - barH(no2Init)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#78350f">
              {no2Init.toFixed(2)}
            </text>
            <text x={70} y={156} textAnchor="middle" fontSize={10} fill="#334155">[NO₂]₀</text>

            {/* Equilibrium NO2 */}
            <rect x={100} y={142 - barH(sim.no2Eq)} width={44} height={barH(sim.no2Eq)} rx={5} fill="#b45309" />
            <text x={122} y={137 - barH(sim.no2Eq)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#78350f">
              {sim.no2Eq.toFixed(2)}
            </text>
            <text x={122} y={156} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f172a">[NO₂]eq</text>

            {/* Initial N2O4 */}
            <rect x={182} y={142 - barH(n2o4Init)} width={44} height={barH(n2o4Init)} rx={5} fill="#0284c7" opacity={0.45} />
            <text x={204} y={137 - barH(n2o4Init)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0369a1">
              {n2o4Init.toFixed(2)}
            </text>
            <text x={204} y={156} textAnchor="middle" fontSize={10} fill="#334155">[N₂O₄]₀</text>

            {/* Equilibrium N2O4 */}
            <rect x={234} y={142 - barH(sim.n2o4Eq)} width={44} height={barH(sim.n2o4Eq)} rx={5} fill="#0284c7" />
            <text x={256} y={137 - barH(sim.n2o4Eq)} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0369a1">
              {sim.n2o4Eq.toFixed(2)}
            </text>
            <text x={256} y={156} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f172a">[N₂O₄]eq</text>

            {/* Simulated sealed gas tube colour */}
            <text x={428} y={18} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f172a">
              Equilibrium Flask Colour
            </text>
            <rect x={368} y={32} width={120} height={106} rx={16} fill="#92400e" opacity={brownAlpha} stroke="#475569" strokeWidth={2} />
            <text x={428} y={82} textAnchor="middle" fontSize={11} fontWeight={700} fill={brownAlpha > 0.45 ? "#ffffff" : "#451a03"}>
              {brownAlpha > 0.55 ? "Deep Brown" : brownAlpha > 0.3 ? "Amber-Brown" : "Pale Yellow"}
            </text>
            <text x={428} y={100} textAnchor="middle" fontSize={10} fill={brownAlpha > 0.45 ? "#fef3c7" : "#78350f"}>
              ΔH⊖ = −57.2 kJ mol⁻¹
            </text>

            {/* Log-scale Q vs Kc Number Line */}
            <line x1={45} y1={198} x2={495} y2={198} stroke="#cbd5e1" strokeWidth={5} strokeLinecap="round" />
            {[-2, -1, 0, 1, 2].map((p) => {
              const x = 45 + ((p + 2) / 4) * 450;
              return (
                <g key={p}>
                  <line x1={x} y1={192} x2={x} y2={204} stroke="#64748b" strokeWidth={1.4} />
                  <text x={x} y={220} textAnchor="middle" fontSize={9.5} fill="#64748b">
                    {p === 0 ? "1" : p > 0 ? `${Math.pow(10, p)}` : `0.${"0".repeat(-p - 1)}1`}
                  </text>
                </g>
              );
            })}

            {/* Arrow connecting Q to Kc */}
            {Math.abs(sim.kX - sim.qX) > 10 ? (
              <line
                x1={sim.qX}
                y1={198}
                x2={sim.kX}
                y2={198}
                stroke={sim.direction === "right" ? "#16a34a" : "#dc2626"}
                strokeWidth={4}
              />
            ) : null}

            {/* Kc marker */}
            <circle cx={sim.kX} cy={198} r={7} fill="#0f172a" />
            <text x={sim.kX} y={184} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f172a">
              Kc
            </text>

            {/* Q marker */}
            <circle cx={sim.qX} cy={198} r={6} fill="#f97316" stroke="#ffffff" strokeWidth={1.5} />
            <text x={sim.qX} y={232} textAnchor="middle" fontSize={10} fontWeight={700} fill="#c2410c">
              Q
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Reaction Q" value={sim.q.toFixed(2)} tone="ink" />
          <Readout label="Equilibrium Kc" value={sim.kc.toFixed(2)} tone="brand" />
          <Readout label="ΔG⊖ (kJ/mol)" value={`${sim.dGKj >= 0 ? "+" : "−"}${Math.abs(sim.dGKj).toFixed(2)}`} tone={sim.dGKj < 0 ? "good" : "bad"} />
          <Readout label="Net Shift" value={dirLabel} tone={dirTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "maxwell-boltzmann-explorer",
    title: "Maxwell–Boltzmann & Catalyst Explorer",
    blurb: "See how raising temperature reshapes molecular kinetic energies while a catalyst leaves the curve unchanged and lowers Ea.",
    Component: MaxwellBoltzmannWidget,
  },
  {
    id: "equilibrium-q-kc-simulator",
    title: "Q vs Kc & Le Chatelier Simulator",
    blurb: "Disturb 2NO₂(g) ⇌ N₂O₄(g) with concentration, pressure, temperature, or a catalyst and watch Q chase Kc.",
    Component: EquilibriumSimulatorWidget,
  },
];

export default function R2AmountRateExtentWidgets() {
  return (
    <div className="space-y-6">
      {widgets.map((w) => (
        <w.Component key={w.id} />
      ))}
    </div>
  );
}
