"use client";

import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const H_PLANCK = 6.63e-34;
const C_LIGHT = 3.0e8;
const N_A = 6.02e23;
const R_GAS = 8.31;
// IB Data Booklet first ionization energy of H = 1312 kJ mol^-1 (matches R_H * h * c * N_A / 1000)
const IE1_H_KJMOL = 1312.0;

// =============================================================================
// WIDGET 1: HYDROGEN EMISSION SPECTRUM & CONVERGENCE LIMIT EXPLORER (S1.3 SL+HL)
// =============================================================================
type SeriesKey = "lyman" | "balmer" | "paschen";

const SERIES_META: Record<
  SeriesKey,
  { nLower: number; name: string; region: string; accent: string; limitNm: number }
> = {
  lyman: { nLower: 1, name: "Lyman (to n = 1)", region: "Ultraviolet (UV)", accent: "#7c3aed", limitNm: 91.2 },
  balmer: { nLower: 2, name: "Balmer (to n = 2)", region: "Visible light", accent: "#2563eb", limitNm: 364.6 },
  paschen: { nLower: 3, name: "Paschen (to n = 3)", region: "Infrared (IR)", accent: "#b45309", limitNm: 820.4 },
};

function wavelengthColor(nm: number): { hex: string; label: string } {
  if (nm < 380) return { hex: "#7c3aed", label: "Ultraviolet (UV)" };
  if (nm < 425) return { hex: "#6d28d9", label: "Visible — Violet" };
  if (nm < 460) return { hex: "#2563eb", label: "Visible — Blue" };
  if (nm < 510) return { hex: "#0891b2", label: "Visible — Cyan" };
  if (nm < 570) return { hex: "#16a34a", label: "Visible — Green" };
  if (nm < 610) return { hex: "#d97706", label: "Visible — Orange" };
  if (nm <= 740) return { hex: "#dc2626", label: "Visible — Red" };
  return { hex: "#b45309", label: "Infrared (IR)" };
}

function transitionData(nLower: number, nUpper: number | "inf") {
  const eLower = -IE1_H_KJMOL / (nLower * nLower);
  const eUpper = nUpper === "inf" ? 0 : -IE1_H_KJMOL / (nUpper * nUpper);
  const deltaEKjMol = eUpper - eLower;
  const photonJ = (deltaEKjMol * 1000) / N_A;
  const freqHz = photonJ / H_PLANCK;
  const wavelengthNm = (C_LIGHT / freqHz) * 1e9;
  return { deltaEKjMol, photonJ, freqHz, wavelengthNm };
}

function HydrogenSpectrumExplorer() {
  const [series, setSeries] = useState<SeriesKey>("balmer");
  // upperStep: integer nUpper up to 9, or 10 representing n = infinity (convergence limit)
  const [upperStep, setUpperStep] = useState<number>(3);

  const meta = SERIES_META[series];
  const minUpper = meta.nLower + 1;
  const clampedStep = Math.max(minUpper, upperStep);
  const isConvergence = clampedStep >= 10;
  const nUpperVal: number | "inf" = isConvergence ? "inf" : clampedStep;

  const current = useMemo(
    () => transitionData(meta.nLower, nUpperVal),
    [meta.nLower, nUpperVal],
  );
  const col = wavelengthColor(current.wavelengthNm);

  const handleSeriesChange = (next: SeriesKey) => {
    setSeries(next);
    const nextMin = SERIES_META[next].nLower + 1;
    setUpperStep((prev) => (prev < nextMin ? nextMin : prev));
  };

  // Energy-level y positions on SVG (true proportional -1/n^2 scaling!)
  const yTop = 36; // n = infinity (0 kJ mol^-1)
  const yBot = 216; // n = 1 (-1312 kJ mol^-1)
  const energyY = (n: number | "inf") => {
    if (n === "inf") return yTop;
    const frac = 1 / (n * n); // 1 at n=1, 0 at n=inf
    return yTop + frac * (yBot - yTop);
  };

  // Build all series lines on frequency strip (right panel)
  const seriesLines = useMemo(() => {
    const levels: Array<number | "inf"> = [];
    for (let k = meta.nLower + 1; k <= 9; k++) levels.push(k);
    levels.push("inf");
    const limitFreq = transitionData(meta.nLower, "inf").freqHz;
    const firstFreq = transitionData(meta.nLower, meta.nLower + 1).freqHz;
    return levels.map((u) => {
      const d = transitionData(meta.nLower, u);
      const frac = limitFreq > firstFreq ? (d.freqHz - firstFreq) / (limitFreq - firstFreq) : 1;
      return {
        u,
        ...d,
        frac,
        color: wavelengthColor(d.wavelengthNm).hex,
        selected: u === nUpperVal,
      };
    });
  }, [meta.nLower, nUpperVal]);

  const isIonizationLimit = series === "lyman" && isConvergence;
  const freqDisplay =
    current.freqHz >= 1e15
      ? `${(current.freqHz / 1e15).toFixed(2)} × 10¹⁵ Hz`
      : `${(current.freqHz / 1e14).toFixed(2)} × 10¹⁴ Hz`;

  return (
    <WidgetFrame
      title="Hydrogen Emission Spectrum & Convergence Limit Explorer"
      tryThis={[
        "In the **Balmer** series, step {{n_{upper}}} from 3 → 4 → 5 → 6 and watch the visible lines crowd closer together toward the violet end.",
        "Switch to **Lyman (to n = 1)** and step all the way to **n = ∞**: verify that the convergence limit gives hydrogen's first ionization energy (**1312 kJ mol⁻¹**).",
        "Compare the energy of {{n = 2 → 1}} (Lyman) with {{n = ∞ → 2}} (Balmer limit): notice their sum equals **1312 kJ mol⁻¹**!",
      ]}
      caption={
        isIonizationLimit ? (
          <span>
            <strong>HL Convergence Limit Reached!</strong> Falling from <M>{"n = ∞"}</M> to the ground state{" "}
            <M>{"n = 1"}</M> emits a UV photon at <strong>{current.wavelengthNm.toFixed(1)} nm</strong> ({freqDisplay}),
            which equals hydrogen&apos;s exact first ionization energy:{" "}
            <strong>{current.deltaEKjMol.toFixed(0)} kJ mol⁻¹</strong>.
          </span>
        ) : (
          <span>
            Transition{" "}
            <strong>
              n = {nUpperVal === "inf" ? "∞" : nUpperVal} → n = {meta.nLower}
            </strong>{" "}
            emits a <strong>{col.label}</strong> photon of wavelength{" "}
            <strong>{current.wavelengthNm.toFixed(1)} nm</strong>. Notice on the frequency strip how transitions from
            higher shells pile up tightly near the convergence limit ({meta.limitNm} nm) because energy-level spacing
            shrinks as <M>{"1/n^2"}</M>.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Hydrogen spectral series"
            value={series}
            onChange={handleSeriesChange}
            options={[
              { value: "lyman", label: "Lyman (n=1 · UV)" },
              { value: "balmer", label: "Balmer (n=2 · Vis)" },
              { value: "paschen", label: "Paschen (n=3 · IR)" },
            ]}
          />
          <Stepper
            label="Upper level"
            value={clampedStep}
            min={minUpper}
            max={10}
            onChange={setUpperStep}
            format={(v) => (v >= 10 ? "n = ∞" : `n = ${v}`)}
          />
        </div>

        {/* Responsive SVG */}
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 520 262"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Hydrogen energy level diagram and emission line spectrum highlighting n=${nUpperVal} to n=${meta.nLower}`}
          >
            <defs>
              <marker id="h-trans-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill={col.hex} />
              </marker>
            </defs>

            {/* Left panel: Energy ladder */}
            <text x="142" y="18" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#1e293b">
              Quantized Energy Levels (E ∝ −1/n²)
            </text>

            {(["inf", 6, 5, 4, 3, 2, 1] as const).map((lv) => {
              const y = energyY(lv);
              const isLower = lv === meta.nLower;
              const isUpper = lv === nUpperVal || (typeof nUpperVal === "number" && nUpperVal > 6 && lv === 6);
              return (
                <g key={String(lv)}>
                  <line
                    x1="56"
                    x2="236"
                    y1={y}
                    y2={y}
                    stroke={isLower ? meta.accent : isUpper ? col.hex : "#94a3b8"}
                    strokeWidth={isLower || isUpper ? 2.2 : 1.2}
                    strokeDasharray={lv === "inf" ? "5 3" : undefined}
                  />
                  <text
                    x="50"
                    y={y + 3.5}
                    fontSize="9.5"
                    fontWeight={isLower || isUpper ? "700" : "500"}
                    textAnchor="end"
                    fill={isLower ? meta.accent : "#334155"}
                  >
                    {lv === "inf" ? "n=∞" : `n=${lv}`}
                  </text>
                  {lv === 1 || lv === 2 || lv === 3 || lv === "inf" ? (
                    <text x="241" y={y + 3.5} fontSize="8.5" fill="#64748b">
                      {lv === "inf" ? "0" : `−${Math.round(IE1_H_KJMOL / (lv * lv))}`}
                    </text>
                  ) : null}
                </g>
              );
            })}

            {/* Active transition arrow */}
            {(() => {
              const yStart = energyY(nUpperVal);
              const yEnd = energyY(meta.nLower);
              const ax = 146;
              return (
                <g>
                  <line
                    x1={ax}
                    y1={yStart}
                    x2={ax}
                    y2={Math.max(yStart + 4, yEnd - 4)}
                    stroke={col.hex}
                    strokeWidth="3"
                    strokeDasharray={isConvergence ? "5 3" : undefined}
                    markerEnd="url(#h-trans-arrow)"
                  />
                  <rect
                    x={ax + 10}
                    y={(yStart + yEnd) / 2 - 11}
                    width="74"
                    height="20"
                    rx="5"
                    fill={col.hex}
                  />
                  <text
                    x={ax + 47}
                    y={(yStart + yEnd) / 2 + 2.5}
                    fontSize="9.5"
                    fontWeight="700"
                    textAnchor="middle"
                    fill="#ffffff"
                  >
                    {current.wavelengthNm.toFixed(0)} nm
                  </text>
                </g>
              );
            })()}
            <text x="242" y="238" fontSize="8.5" fill="#64748b">
              kJ mol⁻¹
            </text>

            {/* Right panel: Emission line spectrum converging toward high f */}
            <line x1="286" y1="16" x2="286" y2="246" stroke="#e2e8f0" strokeWidth="1.4" strokeDasharray="4 4" />
            <text x="404" y="18" fontSize="11.5" fontWeight="700" textAnchor="middle" fill="#1e293b">
              {meta.name} Line Spectrum
            </text>
            <text x="404" y="34" fontSize="9.5" textAnchor="middle" fill="#64748b">
              Lines converge at high frequency (short λ) →
            </text>

            {/* Dark spectroscope bar */}
            <rect x="302" y="54" width="204" height="106" rx="8" fill="#0f172a" />
            {seriesLines.map((ln) => {
              const x = 318 + ln.frac * 172;
              const isLim = ln.u === "inf";
              return (
                <g key={String(ln.u)}>
                  <line
                    x1={x}
                    y1={isLim ? 58 : 62}
                    x2={x}
                    y2={isLim ? 156 : 152}
                    stroke={ln.color}
                    strokeWidth={ln.selected ? 4 : isLim ? 1.5 : 1.8}
                    strokeDasharray={isLim ? "4 3" : undefined}
                    opacity={ln.selected ? 1 : 0.55}
                  />
                  {ln.selected ? (
                    <polygon points={`${x},162 ${x - 5},172 ${x + 5},172`} fill={ln.color} />
                  ) : null}
                </g>
              );
            })}
            <text x="316" y="188" fontSize="9" fill="#475569">
              Lower f (longer λ)
            </text>
            <text x="492" y="188" fontSize="9" fontWeight="700" textAnchor="end" fill="#475569">
              Convergence limit ({meta.limitNm} nm)
            </text>

            {/* Selected line callout card */}
            <rect x="302" y="202" width="204" height="44" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
            <text x="404" y="220" fontSize="10.5" fontWeight="700" textAnchor="middle" fill={col.hex}>
              {col.label}
            </text>
            <text x="404" y="236" fontSize="9.5" textAnchor="middle" fill="#334155">
              E = hf = {(current.photonJ * 1e19).toFixed(2)} × 10⁻¹⁹ J per photon
            </text>
          </svg>
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Transition"
            value={`n=${nUpperVal === "inf" ? "∞" : nUpperVal} → ${meta.nLower}`}
            tone="ink"
          />
          <Readout label="Wavelength λ" value={`${current.wavelengthNm.toFixed(1)} nm`} tone="brand" />
          <Readout label="Frequency f" value={freqDisplay} tone="ink" />
          <Readout
            label={isIonizationLimit ? "Molar ΔE (= IE₁)" : "Molar ΔE"}
            value={`${current.deltaEKjMol.toFixed(0)} kJ mol⁻¹`}
            tone={isIonizationLimit ? "good" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: IDEAL VS REAL GAS (pV/nRT) LAB (S1.5 SL)
// =============================================================================
type GasKey = "ideal" | "he" | "n2" | "co2" | "nh3";

interface GasSpec {
  id: GasKey;
  label: string;
  formula: string;
  a: number; // kPa dm^6 mol^-2
  b: number; // dm^3 mol^-1
  color: string;
  imfNote: string;
}

const GASES: Record<GasKey, GasSpec> = {
  ideal: {
    id: "ideal",
    label: "Ideal",
    formula: "Ideal gas",
    a: 0,
    b: 0,
    color: "#475569",
    imfNote: "Zero intermolecular forces and zero particle volume (pV/nRT = 1.00 always).",
  },
  he: {
    id: "he",
    label: "He",
    formula: "He",
    a: 3.46,
    b: 0.0238,
    color: "#15803d",
    imfNote: "Tiny monatomic noble gas with negligible London dispersion forces; finite atomic volume dominates almost immediately (Z > 1).",
  },
  n2: {
    id: "n2",
    label: "N₂",
    formula: "N₂",
    a: 137,
    b: 0.0387,
    color: "#2563eb",
    imfNote: "Non-polar diatomic molecule with weak London forces; slight dip near moderate pressure before finite volume pushes Z > 1.",
  },
  co2: {
    id: "co2",
    label: "CO₂",
    formula: "CO₂",
    a: 366,
    b: 0.0429,
    color: "#d97706",
    imfNote: "Larger electron cloud produces stronger London dispersion attractions, creating a deep Z < 1 dip before high-pressure volume takes over.",
  },
  nh3: {
    id: "nh3",
    label: "NH₃",
    formula: "NH₃",
    a: 423,
    b: 0.0371,
    color: "#dc2626",
    imfNote: "Polar molecule with strong hydrogen bonding! Exhibits the deepest Z < 1 negative deviation at low temperature and moderate pressure.",
  },
};

function calcCompressibilityZ(gas: GasSpec, pKpa: number, tempK: number): number {
  if (gas.id === "ideal") return 1;
  const rt = R_GAS * tempK;
  const bp = (gas.b * pKpa) / rt;
  return 1 + bp - (gas.a * pKpa) / (rt * rt * (1 + 2.6 * bp + 1.8 * bp * bp));
}

// Plot geometry for Widget 2: p in [0, 60 MPa], Z in [0.4, 1.7]
const GAS_W = 520;
const GAS_H = 250;
const GAS_PAD_L = 48;
const GAS_PAD_R = 24;
const GAS_PAD_T = 24;
const GAS_PAD_B = 38;
const GAS_P_MAX = 60;
const GAS_Z_MIN = 0.4;
const GAS_Z_MAX = 1.7;

function gasPx(mpa: number): number {
  return GAS_PAD_L + (mpa / GAS_P_MAX) * (GAS_W - GAS_PAD_L - GAS_PAD_R);
}

function gasPy(z: number): number {
  const clamped = Math.max(GAS_Z_MIN, Math.min(GAS_Z_MAX, z));
  return GAS_H - GAS_PAD_B - ((clamped - GAS_Z_MIN) / (GAS_Z_MAX - GAS_Z_MIN)) * (GAS_H - GAS_PAD_T - GAS_PAD_B);
}

function IdealRealGasLab() {
  const [gasKey, setGasKey] = useState<GasKey>("co2");
  const [tempK, setTempK] = useState<number>(320);
  const [pressMpa, setPressMpa] = useState<number>(15); // 0.1 to 60 MPa (1 MPa = 1000 kPa)

  const gas = GASES[gasKey];
  const pKpa = pressMpa * 1000;
  const zNow = calcCompressibilityZ(gas, pKpa, tempK);
  const vIdeal = (R_GAS * tempK) / pKpa; // dm^3 mol^-1
  const vReal = zNow * vIdeal;

  const curves = useMemo(() => {
    const keys: GasKey[] = ["he", "n2", "co2", "nh3"];
    return keys.map((k) => {
      const g = GASES[k];
      const pts: string[] = [];
      for (let i = 0; i <= 60; i++) {
        const mpa = (i / 60) * GAS_P_MAX;
        const z = calcCompressibilityZ(g, Math.max(100, mpa * 1000), tempK);
        pts.push(`${i === 0 ? "M" : "L"} ${gasPx(mpa).toFixed(1)} ${gasPy(z).toFixed(1)}`);
      }
      const endZ = calcCompressibilityZ(g, GAS_P_MAX * 1000, tempK);
      return { key: k, gas: g, d: pts.join(" "), endY: gasPy(endZ) };
    });
  }, [tempK]);

  const regime =
    Math.abs(zNow - 1) < 0.03
      ? { label: "Near-ideal", tone: "good" as const }
      : zNow < 1
        ? { label: "IMFs dominate", tone: "bad" as const }
        : { label: "Volume dominates", tone: "brand" as const };

  return (
    <WidgetFrame
      title="Ideal vs Real Gas (pV / nRT) Explorer"
      tryThis={[
        "Select **NH₃** at **320 K** and slide pressure across 5 → 25 → 60 MPa: watch hydrogen bonding pull {{(pV)/(nRT)}} well below 1 before finite particle volume pushes it back above 1.",
        "Raise temperature from **320 K** to **650 K**: watch ALL real-gas curves flatten toward the ideal dashed line {{(pV)/(nRT) = 1}}!",
        "Compare **He** vs **CO₂** at 15 MPa and 320 K — why does He never dip below 1.00?",
      ]}
      caption={
        <span>
          <strong>{gas.formula}</strong> at <strong>{tempK} K</strong> and <strong>{pressMpa.toFixed(1)} MPa</strong>{" "}
          ({Math.round(pKpa).toLocaleString("en-GB")} kPa): {gas.imfNote}{" "}
          {gasKey !== "ideal" ? (
            <span>
              Currently <M>{"(pV)/(nRT)"}</M> = <strong>{zNow.toFixed(2)}</strong> (
              {zNow < 0.97
                ? "intermolecular attractions pull molecules inward, reducing wall pressure"
                : zNow > 1.03
                  ? "finite particle volume reduces free space, making the gas less compressible"
                  : "closely approximating ideal gas behaviour"}
              ).
            </span>
          ) : null}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Select gas species"
          value={gasKey}
          onChange={setGasKey}
          options={[
            { value: "ideal", label: "Ideal" },
            { value: "he", label: "He" },
            { value: "n2", label: "N₂" },
            { value: "co2", label: "CO₂" },
            { value: "nh3", label: "NH₃" },
          ]}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Temperature T"
            value={tempK}
            min={280}
            max={700}
            step={10}
            onChange={setTempK}
            format={(v) => `${v} K (${v - 273} °C)`}
          />
          <Slider
            label="Pressure p"
            value={pressMpa}
            min={0.1}
            max={60}
            step={0.5}
            onChange={setPressMpa}
            format={(v) => `${v.toFixed(1)} MPa`}
          />
        </div>

        {/* SVG Graph */}
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox={`0 0 ${GAS_W} ${GAS_H}`}
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Compressibility factor pV over nRT versus pressure at ${tempK} K highlighting ${gas.formula}`}
          >
            {/* Horizontal grid & Z labels */}
            {[0.5, 0.75, 1.0, 1.25, 1.5].map((zTick) => (
              <g key={zTick}>
                <line
                  x1={GAS_PAD_L}
                  x2={GAS_W - GAS_PAD_R}
                  y1={gasPy(zTick)}
                  y2={gasPy(zTick)}
                  stroke={zTick === 1.0 ? "#334155" : "#e2e8f0"}
                  strokeWidth={zTick === 1.0 ? 1.8 : 1}
                  strokeDasharray={zTick === 1.0 ? "6 4" : "3 3"}
                />
                <text
                  x={GAS_PAD_L - 7}
                  y={gasPy(zTick) + 3.5}
                  fontSize="9.5"
                  fontWeight={zTick === 1.0 ? "700" : "500"}
                  textAnchor="end"
                  fill={zTick === 1.0 ? "#1e293b" : "#64748b"}
                >
                  {zTick.toFixed(2)}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={GAS_PAD_L} y1={GAS_H - GAS_PAD_B} x2={GAS_W - GAS_PAD_R} y2={GAS_H - GAS_PAD_B} stroke="#334155" strokeWidth="1.8" />
            <line x1={GAS_PAD_L} y1={GAS_H - GAS_PAD_B} x2={GAS_PAD_L} y2={GAS_PAD_T} stroke="#334155" strokeWidth="1.8" />

            {/* X ticks */}
            {[0, 15, 30, 45, 60].map((m) => (
              <g key={m}>
                <line x1={gasPx(m)} y1={GAS_H - GAS_PAD_B} x2={gasPx(m)} y2={GAS_H - GAS_PAD_B + 4} stroke="#334155" strokeWidth="1.2" />
                <text x={gasPx(m)} y={GAS_H - GAS_PAD_B + 16} fontSize="9.5" textAnchor="middle" fill="#475569">
                  {m}
                </text>
              </g>
            ))}

            <text x={(GAS_PAD_L + GAS_W - GAS_PAD_R) / 2} y={GAS_H - 5} fontSize="10.5" fontWeight="600" textAnchor="middle" fill="#334155">
              Pressure p (MPa; 1 MPa = 1000 kPa)
            </text>
            <text
              x="14"
              y={(GAS_PAD_T + GAS_H - GAS_PAD_B) / 2}
              fontSize="10.5"
              fontWeight="600"
              textAnchor="middle"
              fill="#334155"
              transform={`rotate(-90 14 ${(GAS_PAD_T + GAS_H - GAS_PAD_B) / 2})`}
            >
              pV / nRT
            </text>

            {/* Ideal label */}
            <text x={GAS_W - GAS_PAD_R - 4} y={gasPy(1.0) - 5} fontSize="9" fontWeight="700" textAnchor="end" fill="#475569">
              Ideal gas (Z = 1.00)
            </text>

            {/* Comparison gas curves */}
            {curves.map((c) => {
              const active = c.key === gasKey;
              return (
                <g key={c.key}>
                  <path
                    d={c.d}
                    fill="none"
                    stroke={c.gas.color}
                    strokeWidth={active ? 3 : 1.5}
                    opacity={active ? 1 : 0.3}
                  />
                  <text
                    x={GAS_W - GAS_PAD_R - 2}
                    y={Math.max(GAS_PAD_T + 10, Math.min(GAS_H - GAS_PAD_B - 6, c.endY - 4))}
                    fontSize="9.5"
                    fontWeight={active ? "700" : "600"}
                    textAnchor="end"
                    fill={c.gas.color}
                    opacity={active ? 1 : 0.5}
                  >
                    {c.gas.formula}
                  </text>
                </g>
              );
            })}

            {/* Vertical deviation marker at selected (p, Z) */}
            <line
              x1={gasPx(pressMpa)}
              y1={gasPy(1.0)}
              x2={gasPx(pressMpa)}
              y2={gasPy(zNow)}
              stroke={gas.color}
              strokeWidth="2"
              strokeDasharray="3 2"
            />
            <circle cx={gasPx(pressMpa)} cy={gasPy(zNow)} r="5.5" fill={gas.color} stroke="#ffffff" strokeWidth="1.8" />
          </svg>
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="pV / nRT" value={zNow.toFixed(2)} tone={regime.tone} />
          <Readout label="Ideal V_m" value={`${vIdeal.toFixed(2)} dm³`} tone="ink" />
          <Readout label="Real V_m" value={`${vReal.toFixed(2)} dm³`} tone="brand" />
          <Readout label="Dominant Effect" value={regime.label} tone={regime.tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hydrogen-spectrum-explorer",
    title: "Hydrogen Emission Spectrum & Convergence Limit Explorer",
    blurb:
      "Select Lyman, Balmer or Paschen transitions and step up to n = ∞ to see line convergence, photon wavelengths and hydrogen's first ionization energy.",
    Component: HydrogenSpectrumExplorer,
  },
  {
    id: "ideal-vs-real-gas-lab",
    title: "Ideal vs Real Gas (pV / nRT) Lab",
    blurb:
      "Compare He, N₂, CO₂ and NH₃ across pressure and temperature to see how intermolecular attractions (Z < 1) and finite particle volume (Z > 1) compete.",
    Component: IdealRealGasLab,
  },
];
