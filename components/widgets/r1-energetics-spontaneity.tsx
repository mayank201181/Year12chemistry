"use client";

import { useState } from "react";
import { M, PlaneGrid, Readout, Segmented, Slider, WidgetFrame, makePlane, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: Calorimetry & Cooling-Curve Extrapolation Lab (SL)
// =============================================================================

type ReactionKey = "neutralisation" | "mg-acid" | "cold-pack" | "ethanol";

interface CalorimetryPreset {
  key: ReactionKey;
  label: string;
  equation: string;
  dH: number; // kJ mol⁻¹
  defaultN: number; // mol
  maxN: number;
  minN: number;
  stepN: number;
  defaultM: number; // g
}

const CAL_PRESETS: Record<ReactionKey, CalorimetryPreset> = {
  neutralisation: {
    key: "neutralisation",
    label: "HCl + NaOH",
    equation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    dH: -57.3,
    defaultN: 0.05,
    minN: 0.01,
    maxN: 0.12,
    stepN: 0.005,
    defaultM: 100,
  },
  "mg-acid": {
    key: "mg-acid",
    label: "Mg + 2HCl",
    equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
    dH: -452,
    defaultN: 0.01,
    minN: 0.002,
    maxN: 0.025,
    stepN: 0.001,
    defaultM: 100,
  },
  "cold-pack": {
    key: "cold-pack",
    label: "NH₄NO₃(s)",
    equation: "NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq)",
    dH: 25.7,
    defaultN: 0.1,
    minN: 0.02,
    maxN: 0.25,
    stepN: 0.01,
    defaultM: 100,
  },
  ethanol: {
    key: "ethanol",
    label: "C₂H₅OH + O₂",
    equation: "C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)",
    dH: -1367,
    defaultN: 0.01,
    minN: 0.003,
    maxN: 0.02,
    stepN: 0.001,
    defaultM: 200,
  },
};

function CalorimetryWidget() {
  const [rxn, setRxn] = useState<ReactionKey>("neutralisation");
  const [mass, setMass] = useState<number>(CAL_PRESETS.neutralisation.defaultM);
  const [moles, setMoles] = useState<number>(CAL_PRESETS.neutralisation.defaultN);
  const [heatLossPct, setHeatLossPct] = useState<number>(14);

  const preset = CAL_PRESETS[rxn];
  const cWater = 4.18; // J g⁻¹ K⁻¹
  const tBase = 22.0; // °C

  const handleRxnChange = (next: ReactionKey) => {
    setRxn(next);
    setMass(CAL_PRESETS[next].defaultM);
    setMoles(CAL_PRESETS[next].defaultN);
  };

  // True adiabatic temperature change: q_true = -dH * n (kJ) -> * 1000 J
  const qTrueKJ = -preset.dH * moles; // positive if exo (solution warms), negative if endo (solution cools)
  const dTTrue = (qTrueKJ * 1000) / (mass * cWater);
  const tExtrap = tBase + dTTrue;

  // Heat loss attenuates the raw peak measured at t = 4.5 min and causes linear drift back toward ambient
  const lossFrac = heatLossPct / 100;
  const dTRaw = dTTrue * (1 - lossFrac);
  const tPeakRaw = tBase + dTRaw;
  const dTAt10 = dTRaw * (1 - 0.55 * lossFrac);
  const tAt10 = tBase + dTAt10;

  const qRawKJ = (mass * cWater * dTRaw) / 1000;
  const dHRaw = moles > 0 ? -qRawKJ / moles : 0;
  const isExo = preset.dH < 0;

  // SVG cooling-curve plot coordinates (right half: x from 268 to 580, y from 28 to 192)
  const plotLeft = 276;
  const plotRight = 576;
  const plotTop = 30;
  const plotBot = 186;
  const tMinPlot = Math.min(8, Math.floor(Math.min(tBase, tExtrap) - 4));
  const tMaxPlot = Math.max(42, Math.ceil(Math.max(tBase, tExtrap) + 5));
  const mapX = (timeMin: number) => plotLeft + (timeMin / 10) * (plotRight - plotLeft);
  const mapY = (tempC: number) => {
    const clamped = Math.max(tMinPlot, Math.min(tMaxPlot, tempC));
    return plotBot - ((clamped - tMinPlot) / (tMaxPlot - tMinPlot)) * (plotBot - plotTop);
  };

  // Extrapolate linear post-peak section from t = 4.5 min & t = 10 min back to t = 3.0 min
  const slopePerMin = (tAt10 - tPeakRaw) / (10.0 - 4.5);
  const tBackExtrap = tPeakRaw - slopePerMin * (4.5 - 3.0);

  const yBase = mapY(tBase);
  const yPeak = mapY(tPeakRaw);
  const y10 = mapY(tAt10);
  const yBack = mapY(tBackExtrap);
  const xMix = mapX(3.0);
  const xPeak = mapX(4.5);
  const xEnd = mapX(10.0);

  // Enthalpy level diagram coordinates (left half: x from 28 to 212)
  const reactY = isExo ? 78 : 148;
  const prodY = isExo ? 156 : 70;

  const fmtSigned = (v: number, dp = 1) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(dp)}`;

  return (
    <WidgetFrame
      title="Calorimetry & Cooling-Curve Extrapolation Lab (SL)"
      tryThis={[
        "Switch between **HCl + NaOH** (exothermic) and **NH₄NO₃(s)** (endothermic cold pack) to watch the sign of `ΔH` flip opposite to `ΔT`.",
        "Increase **heat loss** to 24%: compare the raw thermometer peak with the red dashed back-extrapolation line at `t_mix = 3.0 min`.",
        "Double BOTH mass and moles simultaneously — verify that `ΔT` stays unchanged!",
      ]}
      caption={
        <span>
          <strong>{preset.equation}</strong> · True <M>{"ΔH"}</M> ={" "}
          <strong>{fmtSigned(preset.dH, 1)} kJ mol⁻¹</strong>. Because heat leaks during mixing ({heatLossPct}% loss), the raw peak gives{" "}
          <strong>{fmtSigned(dHRaw, 1)} kJ mol⁻¹</strong> ({isExo ? "less exothermic" : "less endothermic"} than true), while linear back-extrapolation to{" "}
          <M>{"t_mix = 3.0"}</M> min recovers much of the lost temperature change.
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose a calorimetry reaction"
          value={rxn}
          onChange={handleRxnChange}
          options={Object.values(CAL_PRESETS).map((p) => ({ value: p.key, label: p.label }))}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="Water / solution mass m"
            value={mass}
            min={50}
            max={250}
            step={10}
            onChange={setMass}
            format={(v) => `${v} g`}
          />
          <Slider
            label="Limiting moles n"
            value={moles}
            min={preset.minN}
            max={preset.maxN}
            step={preset.stepN}
            onChange={setMoles}
            format={(v) => `${v.toFixed(3)} mol`}
          />
          <Slider
            label="Heat-loss factor"
            value={heatLossPct}
            min={0}
            max={30}
            step={2}
            onChange={setHeatLossPct}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2/40 p-2">
          <svg
            viewBox="0 0 600 220"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live enthalpy level diagram and coffee-cup temperature versus time cooling curve"
            className="h-auto w-full max-w-full"
          >
            {/* Left panel: Enthalpy profile */}
            <text x={115} y={18} textAnchor="middle" fontSize={12} fontWeight={700} className="fill-ink">
              Enthalpy Profile ({isExo ? "Exothermic" : "Endothermic"})
            </text>
            <line x1={30} y1={188} x2={30} y2={30} className="stroke-ink-2" strokeWidth={1.6} />
            <line x1={30} y1={188} x2={208} y2={188} className="stroke-ink-2" strokeWidth={1.6} />
            <text x={16} y={110} textAnchor="middle" fontSize={10} className="fill-ink-2" transform="rotate(-90 16 110)">
              Enthalpy H
            </text>
            <text x={118} y={206} textAnchor="middle" fontSize={10} className="fill-ink-2">
              Reaction pathway
            </text>
            <line x1={42} y1={reactY} x2={102} y2={reactY} stroke="#2563eb" strokeWidth={3} />
            <text x={72} y={reactY - 7} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#1d4ed8">
              Reactants
            </text>
            <line x1={134} y1={prodY} x2={196} y2={prodY} stroke="#059669" strokeWidth={3} />
            <text x={165} y={prodY - 7} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#047857">
              Products
            </text>
            <line x1={102} y1={reactY} x2={140} y2={reactY} className="stroke-line" strokeWidth={1.2} strokeDasharray="3 3" />
            <line
              x1={118}
              y1={reactY}
              x2={118}
              y2={prodY + (isExo ? -5 : 5)}
              stroke={isExo ? "#dc2626" : "#7c3aed"}
              strokeWidth={2.4}
            />
            <polygon
              points={isExo ? `118,${prodY} 113,${prodY - 8} 123,${prodY - 8}` : `118,${prodY} 113,${prodY + 8} 123,${prodY + 8}`}
              fill={isExo ? "#dc2626" : "#7c3aed"}
            />
            <text
              x={118}
              y={(reactY + prodY) / 2 + 4}
              textAnchor="middle"
              fontSize={10.5}
              fontWeight={700}
              fill={isExo ? "#b91c1c" : "#6d28d9"}
            >
              ΔH {isExo ? "< 0" : "> 0"}
            </text>

            {/* Divider */}
            <line x1={226} y1={14} x2={226} y2={208} className="stroke-line" strokeWidth={1.2} />

            {/* Right panel: Cooling curve */}
            <text x={426} y={18} textAnchor="middle" fontSize={12} fontWeight={700} className="fill-ink">
              Temperature vs Time (Mixing at t = 3.0 min)
            </text>
            <line x1={plotLeft} y1={plotBot} x2={plotLeft} y2={plotTop} className="stroke-ink-2" strokeWidth={1.6} />
            <line x1={plotLeft} y1={plotBot} x2={plotRight} y2={plotBot} className="stroke-ink-2" strokeWidth={1.6} />
            <text x={244} y={110} textAnchor="middle" fontSize={10} className="fill-ink-2" transform="rotate(-90 244 110)">
              Temp (°C)
            </text>
            <text x={426} y={208} textAnchor="middle" fontSize={10} className="fill-ink-2">
              Time (min)
            </text>

            {/* Mixing time vertical marker */}
            <line x1={xMix} y1={plotTop} x2={xMix} y2={plotBot} className="stroke-line" strokeWidth={1.4} strokeDasharray="4 3" />
            <text x={xMix} y={198} textAnchor="middle" fontSize={9.5} fontWeight={700} className="fill-ink-2">
              3.0
            </text>
            <text x={xPeak} y={198} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
              4.5
            </text>
            <text x={xEnd} y={198} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
              10.0
            </text>

            {/* Baseline T_i */}
            <line x1={plotLeft} y1={yBase} x2={xMix} y2={yBase} stroke="#2563eb" strokeWidth={2.5} />
            <text x={plotLeft - 5} y={yBase + 3} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#1d4ed8">
              22°
            </text>

            {/* Reaction curve to raw peak */}
            <path
              d={`M ${xMix} ${yBase} Q ${(xMix + xPeak) / 2} ${yPeak} ${xPeak} ${yPeak}`}
              fill="none"
              stroke="#ea580c"
              strokeWidth={2.4}
            />

            {/* Linear post-reaction drift */}
            <line x1={xPeak} y1={yPeak} x2={xEnd} y2={y10} stroke="#059669" strokeWidth={2.5} />
            <circle cx={xPeak} cy={yPeak} r={3.5} fill="#ea580c" />
            <circle cx={xEnd} cy={y10} r={3.5} fill="#059669" />

            {/* Back-extrapolated dashed line to t_mix */}
            <line x1={xMix} y1={yBack} x2={xPeak} y2={yPeak} stroke="#dc2626" strokeWidth={2} strokeDasharray="5 3" />
            <circle cx={xMix} cy={yBack} r={4} fill="#dc2626" />
            <text x={xMix - 6} y={yBack + (isExo ? 4 : 4)} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#b91c1c">
              Extrap: {tBackExtrap.toFixed(1)}°
            </text>
            <text x={xPeak + 8} y={yPeak + (isExo ? -5 : 12)} fontSize={9.5} fontWeight={600} fill="#c2410c">
              Peak: {tPeakRaw.toFixed(1)}°
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Ideal ΔT (0% loss)" value={`${fmtSigned(dTTrue, 1)} °C`} tone={isExo ? "bad" : "brand"} />
          <Readout label="Raw Peak ΔT" value={`${fmtSigned(dTRaw, 1)} °C`} tone="ink" />
          <Readout label="Heat q_ideal" value={`${Math.abs(qTrueKJ).toFixed(2)} kJ`} tone="brand" />
          <Readout label="Apparent ΔH_raw" value={`${fmtSigned(dHRaw, 1)} kJ mol⁻¹`} tone={isExo ? "good" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: ΔG = ΔH − TΔS Spontaneity Phase Explorer [HL]
// =============================================================================

type GibbsPresetKey = "custom" | "haber" | "limestone" | "peroxide" | "ozone";

const GIBBS_PRESETS: Record<Exclude<GibbsPresetKey, "custom">, { label: string; eq: string; dH: number; dS: number; T: number }> = {
  haber: { label: "Haber (NH₃)", eq: "N₂(g) + 3H₂(g) → 2NH₃(g)", dH: -92, dS: -198, T: 298 },
  limestone: { label: "Limestone", eq: "CaCO₃(s) → CaO(s) + CO₂(g)", dH: 178, dS: 161, T: 1200 },
  peroxide: { label: "2H₂O₂", eq: "2H₂O₂(l) → 2H₂O(l) + O₂(g)", dH: -196, dS: 126, T: 298 },
  ozone: { label: "3O₂ → 2O₃", eq: "3O₂(g) → 2O₃(g)", dH: 285, dS: -137, T: 298 },
};

function GibbsSpontaneityWidget() {
  const [preset, setPreset] = useState<GibbsPresetKey>("limestone");
  const [dH, setDH] = useState<number>(178); // kJ mol⁻¹
  const [dS, setDS] = useState<number>(161); // J K⁻¹ mol⁻¹
  const [tempK, setTempK] = useState<number>(1200); // K

  const applyPreset = (key: GibbsPresetKey) => {
    setPreset(key);
    if (key !== "custom") {
      setDH(GIBBS_PRESETS[key].dH);
      setDS(GIBBS_PRESETS[key].dS);
      setTempK(GIBBS_PRESETS[key].T);
    }
  };

  const minusTdS = -tempK * (dS / 1000);
  const dG = dH + minusTdS;
  const isSpontaneous = dG < -0.05;
  const isEquilibrium = Math.abs(dG) <= 0.05;

  // Crossover temperature T* = dH / (dS / 1000) when same non-zero sign
  const hasCrossover = (dH > 0 && dS > 0) || (dH < 0 && dS < 0);
  const tStar = hasCrossover ? (dH * 1000) / dS : null;

  let regime = "Equilibrium boundary";
  if (dH <= 0 && dS >= 0) regime = "Always spontaneous";
  else if (dH >= 0 && dS <= 0) regime = "Never spontaneous";
  else if (dH < 0 && dS < 0) regime = "Spontaneous at LOW T";
  else if (dH > 0 && dS > 0) regime = "Spontaneous at HIGH T";

  // SVG Coordinate mapping for T in [0, 1400], ΔG in [-350, +350]
  const plane = makePlane({ width: 580, height: 240, xMin: 0, xMax: 1400, yMin: -350, yMax: 350, pad: 36 });
  const { px, py } = plane;

  // Clip the line ΔG(T) = dH - T*(dS/1000) to y ∈ [-350, 350] and x ∈ [0, 1400]
  const evalG = (T: number) => dH - T * (dS / 1000);
  const sampleTs: number[] = [];
  for (let t = 0; t <= 1400; t += 20) sampleTs.push(t);
  const linePts = sampleTs
    .map((t) => ({ t, g: evalG(t) }))
    .filter((p) => p.g >= -350 && p.g <= 350);
  const linePath = linePts.length >= 2 ? `M ${linePts.map((p) => `${px(p.t).toFixed(1)} ${py(p.g).toFixed(1)}`).join(" L ")}` : "";

  const clampedG = Math.max(-350, Math.min(350, dG));
  const fmtSign = (v: number, dp = 1) => `${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(dp)}`;

  return (
    <WidgetFrame
      title="ΔG = ΔH − TΔS Spontaneity Phase Explorer [HL]"
      tryThis={[
        "Select **Limestone** (`ΔH > 0, ΔS > 0`) and drag **T** across `1106 K` to watch the reaction cross from non-spontaneous (`ΔG > 0`) into the green spontaneous zone (`ΔG < 0`).",
        "Select **Haber (NH₃)** (`ΔH < 0, ΔS < 0`) and notice why the line slopes **UPWARD** (`gradient = −ΔS > 0`) so ammonia synthesis loses spontaneity above `465 K`!",
        "Set `ΔH = −100` and `ΔS = +100`: verify the entire line stays below zero (**Always spontaneous**).",
      ]}
      caption={
        <span>
          {preset !== "custom" ? <><strong>{GIBBS_PRESETS[preset].eq}</strong> · </> : null}
          <M>{"ΔG = ΔH - T * (ΔS / 1000)"}</M> = {fmtSign(dH, 0)} {minusTdS >= 0 ? "+" : "−"} {Math.abs(minusTdS).toFixed(1)} ={" "}
          <strong>{fmtSign(dG, 1)} kJ mol⁻¹</strong> at {tempK} K ({tempK - 273} °C) →{" "}
          <strong>{isEquilibrium ? "At equilibrium (ΔG = 0)" : isSpontaneous ? "Spontaneous (ΔG < 0)" : "Non-spontaneous (ΔG > 0)"}</strong>.{" "}
          Notice how the line&apos;s y-intercept equals <M>{"ΔH"}</M> and its gradient equals <M>{"-ΔS"}</M>!
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose a Gibbs reaction preset"
          value={preset}
          onChange={applyPreset}
          options={[
            { value: "limestone", label: "Limestone" },
            { value: "haber", label: "Haber" },
            { value: "peroxide", label: "2H₂O₂" },
            { value: "ozone", label: "Ozone" },
            { value: "custom", label: "Custom" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="ΔH⊖ (kJ mol⁻¹)"
            value={dH}
            min={-250}
            max={300}
            step={5}
            onChange={(v) => {
              setPreset("custom");
              setDH(v);
            }}
            format={(v) => `${fmtSign(v, 0)} kJ mol⁻¹`}
          />
          <Slider
            label="ΔS⊖ (J K⁻¹ mol⁻¹)"
            value={dS}
            min={-250}
            max={250}
            step={5}
            onChange={(v) => {
              setPreset("custom");
              setDS(v);
            }}
            format={(v) => `${fmtSign(v, 0)} J K⁻¹ mol⁻¹`}
          />
          <Slider
            label="Temperature T"
            value={tempK}
            min={100}
            max={1400}
            step={10}
            onChange={setTempK}
            format={(v) => `${v} K (${v - 273} °C)`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2/40 p-2">
          <svg
            viewBox="0 0 580 240"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive Gibbs free energy delta G versus temperature T plot showing spontaneous and non-spontaneous regions"
            className="h-auto w-full max-w-full"
          >
            {/* Shaded zones */}
            <rect x={px(0)} y={py(350)} width={px(1400) - px(0)} height={py(0) - py(350)} fill="#fef2f2" />
            <rect x={px(0)} y={py(0)} width={px(1400) - px(0)} height={py(-350) - py(0)} fill="#ecfdf5" />

            {/* Subtle gridlines */}
            <PlaneGrid plane={plane} step={200} labels={false} />

            {/* Axes */}
            <line x1={px(0)} y1={py(-350)} x2={px(0)} y2={py(350)} className="stroke-ink" strokeWidth={1.8} />
            <line x1={px(0)} y1={py(0)} x2={px(1400)} y2={py(0)} className="stroke-ink" strokeWidth={1.8} />

            {/* Zone labels */}
            <text x={px(1380)} y={py(305)} textAnchor="end" fontSize={10.5} fontWeight={700} fill="#b91c1c">
              Non-spontaneous (ΔG &gt; 0)
            </text>
            <text x={px(1380)} y={py(-315)} textAnchor="end" fontSize={10.5} fontWeight={700} fill="#047857">
              Spontaneous (ΔG &lt; 0)
            </text>

            {/* Axis ticks & labels */}
            {[200, 400, 600, 800, 1000, 1200, 1400].map((t) => (
              <text key={`tx-${t}`} x={px(t)} y={py(0) + 14} textAnchor="middle" fontSize={9.5} className="fill-ink-2">
                {t}
              </text>
            ))}
            {[-300, -150, 150, 300].map((g) => (
              <text key={`ty-${g}`} x={px(0) - 6} y={py(g) + 3} textAnchor="end" fontSize={9.5} className="fill-ink-2">
                {g}
              </text>
            ))}
            <text x={px(1400)} y={py(0) - 6} textAnchor="end" fontSize={10} fontWeight={700} className="fill-ink">
              T (K)
            </text>
            <text x={px(0) + 6} y={py(350) + 12} fontSize={10} fontWeight={700} className="fill-ink">
              ΔG (kJ mol⁻¹)
            </text>

            {/* ΔG(T) straight line */}
            {linePath ? <path d={linePath} fill="none" stroke="#2563eb" strokeWidth={3} /> : null}

            {/* Crossover temperature marker */}
            {tStar !== null && tStar > 0 && tStar <= 1400 ? (
              <g>
                <circle cx={px(tStar)} cy={py(0)} r={5.5} fill="#d97706" stroke="#ffffff" strokeWidth={1.6} />
                <text
                  x={Math.min(px(1320), Math.max(px(120), px(tStar)))}
                  y={py(0) - 10}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={700}
                  fill="#b45309"
                >
                  T* = {Math.round(tStar)} K
                </text>
              </g>
            ) : null}

            {/* Live operating point (T, ΔG) */}
            <line x1={px(tempK)} y1={py(0)} x2={px(tempK)} y2={py(clampedG)} stroke="#64748b" strokeWidth={1.3} strokeDasharray="4 3" />
            <circle
              cx={px(tempK)}
              cy={py(clampedG)}
              r={6}
              fill={isSpontaneous ? "#059669" : "#dc2626"}
              stroke="#ffffff"
              strokeWidth={2}
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="ΔG at T" value={`${fmtSign(dG, 1)} kJ mol⁻¹`} tone={isSpontaneous ? "good" : "bad"} />
          <Readout label="−TΔS Term" value={`${fmtSign(minusTdS, 1)} kJ mol⁻¹`} tone={minusTdS < 0 ? "good" : "bad"} />
          <Readout
            label="Crossover T*"
            value={tStar !== null ? `${Math.round(tStar)} K` : "None"}
            tone="brand"
          />
          <Readout label="Regime" value={regime} tone={isSpontaneous ? "good" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "calorimetry-cooling-curve",
    title: "Calorimetry & Cooling-Curve Extrapolation Lab (SL)",
    blurb: "Explore exothermic & endothermic calorimetry, heat loss, and linear cooling-curve back-extrapolation.",
    Component: CalorimetryWidget,
  },
  {
    id: "gibbs-spontaneity-explorer",
    title: "ΔG = ΔH − TΔS Spontaneity Phase Explorer [HL]",
    blurb: "Drag ΔH⊖, ΔS⊖, and T across all four spontaneity quadrants and watch the crossover temperature T* = ΔH/ΔS move live.",
    Component: GibbsSpontaneityWidget,
  },
];

export default function R1EnergeticsWidgets() {
  return (
    <div className="space-y-6">
      {widgets.map((w) => {
        const Comp = w.Component;
        return <Comp key={w.id} />;
      })}
    </div>
  );
}
