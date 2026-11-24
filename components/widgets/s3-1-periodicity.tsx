"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Period 3 Trends & Oxide Acid–Base Explorer [SL]
// ============================================================================

type TrendMode = "radius" | "ie1" | "chi" | "oxide";

interface Period3Element {
  z: number;
  sym: string;
  name: string;
  config: string;
  radius: number | null; // covalent radius (pm); Ar has none
  ionFormula: string;
  ionRadius: number | null; // pm
  ie1: number; // kJ mol⁻¹
  chi: number | null; // Pauling electronegativity
  oxideFormula: string;
  oxideBonding: string;
  oxideNature: string;
  oxidePh: number | null;
  oxideEq: string;
  note: string;
}

const PERIOD3_DATA: Period3Element[] = [
  {
    z: 11,
    sym: "Na",
    name: "Sodium",
    config: "[Ne] 3s¹",
    radius: 160,
    ionFormula: "Na⁺",
    ionRadius: 102,
    ie1: 496,
    chi: 0.9,
    oxideFormula: "Na₂O",
    oxideBonding: "Giant ionic",
    oxideNature: "Strongly basic",
    oxidePh: 13.5,
    oxideEq: "Na₂O(s) + H₂O(l) → 2NaOH(aq)",
    note: "Lowest Z_eff in Period 3: largest covalent radius (160 pm), lowest IE₁ (496 kJ mol⁻¹), and strongly basic ionic oxide.",
  },
  {
    z: 12,
    sym: "Mg",
    name: "Magnesium",
    config: "[Ne] 3s²",
    radius: 140,
    ionFormula: "Mg²⁺",
    ionRadius: 72,
    ie1: 738,
    chi: 1.3,
    oxideFormula: "MgO",
    oxideBonding: "Giant ionic",
    oxideNature: "Weakly basic",
    oxidePh: 9.5,
    oxideEq: "MgO(s) + H₂O(l) → Mg(OH)₂(aq) (sparingly soluble)",
    note: "Higher nuclear charge (+12) pulls the n = 3 shell inward; Mg²⁺ (72 pm) is much smaller than Mg because it loses the entire 3s² shell.",
  },
  {
    z: 13,
    sym: "Al",
    name: "Aluminium",
    config: "[Ne] 3s² 3p¹",
    radius: 124,
    ionFormula: "Al³⁺",
    ionRadius: 54,
    ie1: 578,
    chi: 1.6,
    oxideFormula: "Al₂O₃",
    oxideBonding: "Giant ionic (covalent character)",
    oxideNature: "Amphoteric (insol. in H₂O)",
    oxidePh: 7.0,
    oxideEq: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O  |  Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄",
    note: "Classic IE₁ dip (578 < 738 kJ mol⁻¹): the outer 3p¹ electron is higher in energy and shielded by the filled 3s² sublevel. Al₂O₃ is amphoteric!",
  },
  {
    z: 14,
    sym: "Si",
    name: "Silicon",
    config: "[Ne] 3s² 3p²",
    radius: 114,
    ionFormula: "Si⁴⁺",
    ionRadius: 40,
    ie1: 787,
    chi: 1.9,
    oxideFormula: "SiO₂",
    oxideBonding: "Giant covalent network",
    oxideNature: "Acidic (insol. in H₂O)",
    oxidePh: 7.0,
    oxideEq: "SiO₂(s) + 2NaOH(conc.) → Na₂SiO₃(aq) + H₂O(l)",
    note: "Metalloid boundary: SiO₂ has a giant covalent network (m.p. 1710 °C), is insoluble in water (pH stays 7), yet reacts with hot concentrated NaOH.",
  },
  {
    z: 15,
    sym: "P",
    name: "Phosphorus",
    config: "[Ne] 3s² 3p³",
    radius: 109,
    ionFormula: "P³⁻",
    ionRadius: 212,
    ie1: 1012,
    chi: 2.2,
    oxideFormula: "P₄O₁₀",
    oxideBonding: "Simple molecular covalent",
    oxideNature: "Acidic",
    oxidePh: 1.5,
    oxideEq: "P₄O₁₀(s) + 6H₂O(l) → 4H₃PO₄(aq)",
    note: "Ionic radius leaps from Al³⁺ (54 pm, 2 shells) to P³⁻ (212 pm, 3 shells)! Three unpaired 3p³ electrons give a local IE₁ peak (1012 kJ mol⁻¹).",
  },
  {
    z: 16,
    sym: "S",
    name: "Sulfur",
    config: "[Ne] 3s² 3p⁴",
    radius: 104,
    ionFormula: "S²⁻",
    ionRadius: 184,
    ie1: 1000,
    chi: 2.6,
    oxideFormula: "SO₂ / SO₃",
    oxideBonding: "Simple molecular covalent",
    oxideNature: "Strongly acidic",
    oxidePh: 1.0,
    oxideEq: "SO₂ + H₂O ⇌ H₂SO₃  |  SO₃(l) + H₂O(l) → H₂SO₄(aq)",
    note: "Classic IE₁ dip (1000 < 1012 kJ mol⁻¹): removing a paired electron from a doubly occupied 3p⁴ orbital is eased by spin–pair repulsion.",
  },
  {
    z: 17,
    sym: "Cl",
    name: "Chlorine",
    config: "[Ne] 3s² 3p⁵",
    radius: 100,
    ionFormula: "Cl⁻",
    ionRadius: 181,
    ie1: 1251,
    chi: 3.2,
    oxideFormula: "Cl₂O₇",
    oxideBonding: "Simple molecular covalent",
    oxideNature: "Very strongly acidic",
    oxidePh: 0.5,
    oxideEq: "Cl₂O₇(l) + H₂O(l) → 2HClO₄(aq)",
    note: "Smallest covalent radius (100 pm) and highest Pauling electronegativity (3.2) in Period 3 due to maximum effective nuclear charge in the n = 3 shell.",
  },
  {
    z: 18,
    sym: "Ar",
    name: "Argon",
    config: "[Ne] 3s² 3p⁶",
    radius: null,
    ionFormula: "—",
    ionRadius: null,
    ie1: 1521,
    chi: null,
    oxideFormula: "None",
    oxideBonding: "Monoatomic noble gas",
    oxideNature: "Unreactive (filled octet)",
    oxidePh: null,
    oxideEq: "No stable oxide formed under standard conditions",
    note: "Highest IE₁ in Period 3 (1521 kJ mol⁻¹) due to Z = 18 pulling a filled 3p⁶ shell; covalent radius and electronegativity are omitted because Ar does not form covalent bonds.",
  },
];

function Period3TrendsExplorer() {
  const [mode, setMode] = useState<TrendMode>("ie1");
  const [z, setZ] = useState<number>(13); // Start on Al to spotlight the dip & amphoteric oxide!

  const el = PERIOD3_DATA[z - 11];
  const deltaChiO = el.chi !== null ? +(3.4 - el.chi).toFixed(1) : null;

  return (
    <WidgetFrame
      title="Period 3 Trends & Oxide Acid–Base Explorer [SL]"
      tryThis={[
        "Switch to **1st IE** and click **Mg → Al** and **P → S** to inspect the two IB ionization-energy anomalies.",
        "Switch to **Radius** and step from **Al³⁺** (`54 pm`) to **P³⁻** (`212 pm`) to see the extra-shell jump.",
        "Switch to **Oxides & pH** and compare insoluble **Al₂O₃** and **SiO₂** (`pH 7` in water) with **Na₂O** and **SO₃**.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            {el.name} ({el.sym}, Z = {el.z}) · {el.config}
          </div>
          <p className="text-ink-2">{el.note}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<TrendMode>
            label="Property to explore"
            value={mode}
            onChange={setMode}
            options={[
              { value: "radius", label: "Radius" },
              { value: "ie1", label: "1st IE" },
              { value: "chi", label: "Electroneg." },
              { value: "oxide", label: "Oxides & pH" },
            ]}
          />
        </div>

        {/* Element picker grid (4 cols on mobile 390px, 8 cols on desktop) */}
        <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
          {PERIOD3_DATA.map((item) => {
            const active = item.z === z;
            return (
              <button
                key={item.sym}
                type="button"
                aria-pressed={active}
                onClick={() => setZ(item.z)}
                className={`rounded-xl border px-2 py-1.5 text-center transition ${
                  active
                    ? "border-brand bg-brand text-brand-ink shadow-sm"
                    : "border-line bg-surface-2 text-ink hover:border-brand"
                }`}
              >
                <div className="text-[10px] font-bold opacity-80">{item.z}</div>
                <div className="text-sm font-extrabold">{item.sym}</div>
              </button>
            );
          })}
        </div>

        <Slider
          label="Atomic number (Z)"
          value={z}
          min={11}
          max={18}
          step={1}
          onChange={setZ}
          format={(v) => `${v} (${PERIOD3_DATA[v - 11].sym})`}
        />

        {/* Dynamic SVG visualization */}
        <div className="rounded-xl border border-line bg-white p-2.5 text-slate-900">
          {mode === "ie1" ? (
            <svg viewBox="0 0 540 210" className="h-auto w-full" role="img" aria-label="Period 3 first ionization energy plot highlighting the selected element">
              <text x="270" y="18" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
                Period 3 First Ionization Energy IE₁ (kJ mol⁻¹)
              </text>
              <line x1="48" y1="30" x2="48" y2="174" stroke="#64748b" strokeWidth="1.5" />
              <line x1="48" y1="174" x2="518" y2="174" stroke="#64748b" strokeWidth="1.5" />
              {[400, 800, 1200, 1600].map((v) => {
                const y = 174 - (v / 1600) * 136;
                return (
                  <g key={v}>
                    <line x1="48" y1={y} x2="518" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                    <text x="42" y={y + 3} fontSize="9.5" textAnchor="end" fill="#64748b">
                      {v}
                    </text>
                  </g>
                );
              })}
              <polyline
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                points={PERIOD3_DATA.map((d, i) => {
                  const x = 78 + i * 60;
                  const y = 174 - (d.ie1 / 1600) * 136;
                  return `${x},${y.toFixed(1)}`;
                }).join(" ")}
              />
              {PERIOD3_DATA.map((d, i) => {
                const x = 78 + i * 60;
                const y = 174 - (d.ie1 / 1600) * 136;
                const active = d.z === z;
                const isDip = d.sym === "Al" || d.sym === "S";
                return (
                  <g key={d.sym} onClick={() => setZ(d.z)} className="cursor-pointer">
                    <circle
                      cx={x}
                      cy={y}
                      r={active ? 7 : isDip ? 5 : 4}
                      fill={active ? "#047857" : isDip ? "#dc2626" : "#059669"}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text x={x} y={y - 10} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={active ? "#047857" : "#334155"}>
                      {d.ie1}
                    </text>
                    {isDip ? (
                      <text x={x} y={y + 18} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#dc2626">
                        {d.sym === "Al" ? "3p¹ dip" : "3p⁴ pair"}
                      </text>
                    ) : null}
                    <text x={x} y="192" textAnchor="middle" fontSize="11" fontWeight={active ? "800" : "600"} fill={active ? "#047857" : "#1e293b"}>
                      {d.sym}
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : null}

          {mode === "radius" ? (
            <svg viewBox="0 0 540 215" className="h-auto w-full" role="img" aria-label="Period 3 covalent atomic radii and ionic radii comparison">
              <text x="270" y="18" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
                Atomic Covalent Radius (teal) vs Common Ionic Radius (amber/red) in pm
              </text>
              <line x1="42" y1="30" x2="42" y2="174" stroke="#64748b" strokeWidth="1.5" />
              <line x1="42" y1="174" x2="520" y2="174" stroke="#64748b" strokeWidth="1.5" />
              {[60, 120, 180, 240].map((v) => {
                const y = 174 - (v / 240) * 136;
                return (
                  <g key={v}>
                    <line x1="42" y1={y} x2="520" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                    <text x="36" y={y + 3} fontSize="9.5" textAnchor="end" fill="#64748b">
                      {v}
                    </text>
                  </g>
                );
              })}
              {PERIOD3_DATA.map((d, i) => {
                const cx = 74 + i * 60;
                const active = d.z === z;
                const rH = d.radius ? (d.radius / 240) * 136 : 0;
                const iH = d.ionRadius ? (d.ionRadius / 240) * 136 : 0;
                return (
                  <g key={d.sym} onClick={() => setZ(d.z)} className="cursor-pointer">
                    {active ? <rect x={cx - 24} y="30" width="48" height="144" rx="6" fill="#d1fae5" fillOpacity="0.45" /> : null}
                    {d.radius ? (
                      <>
                        <rect x={cx - 17} y={174 - rH} width="15" height={rH} rx="3" fill={active ? "#047857" : "#14b8a6"} />
                        <text x={cx - 9.5} y={170 - rH} textAnchor="middle" fontSize="8" fontWeight="700" fill="#0f766e">
                          {d.radius}
                        </text>
                      </>
                    ) : (
                      <text x={cx} y="156" textAnchor="middle" fontSize="8.5" fill="#64748b">
                        N/A
                      </text>
                    )}
                    {d.ionRadius ? (
                      <>
                        <rect
                          x={cx + 2}
                          y={174 - iH}
                          width="15"
                          height={iH}
                          rx="3"
                          fill={d.z >= 15 ? (active ? "#b91c1c" : "#ef4444") : active ? "#d97706" : "#f59e0b"}
                        />
                        <text x={cx + 9.5} y={170 - iH} textAnchor="middle" fontSize="8" fontWeight="700" fill={d.z >= 15 ? "#b91c1c" : "#b45309"}>
                          {d.ionRadius}
                        </text>
                      </>
                    ) : null}
                    <text x={cx} y="190" textAnchor="middle" fontSize="10.5" fontWeight={active ? "800" : "600"} fill={active ? "#047857" : "#1e293b"}>
                      {d.sym}
                    </text>
                    <text x={cx} y="203" textAnchor="middle" fontSize="8.5" fill="#64748b">
                      {d.ionFormula}
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : null}

          {mode === "chi" ? (
            <svg viewBox="0 0 540 205" className="h-auto w-full" role="img" aria-label="Period 3 Pauling electronegativity bar chart">
              <text x="270" y="18" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#0f172a">
                Pauling Electronegativity (χ) Across Period 3 (Oxygen Reference = 3.4)
              </text>
              <line x1="44" y1="30" x2="44" y2="168" stroke="#64748b" strokeWidth="1.5" />
              <line x1="44" y1="168" x2="518" y2="168" stroke="#64748b" strokeWidth="1.5" />
              {[1, 2, 3, 4].map((v) => {
                const y = 168 - (v / 4) * 130;
                return (
                  <g key={v}>
                    <line x1="44" y1={y} x2="518" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                    <text x="38" y={y + 3} fontSize="9.5" textAnchor="end" fill="#64748b">
                      {v.toFixed(1)}
                    </text>
                  </g>
                );
              })}
              {/* Oxygen reference line at 3.4 */}
              <line x1="44" y1={168 - (3.4 / 4) * 130} x2="518" y2={168 - (3.4 / 4) * 130} stroke="#dc2626" strokeWidth="1.4" strokeDasharray="5,3" />
              <text x="514" y={168 - (3.4 / 4) * 130 - 4} textAnchor="end" fontSize="9" fontWeight="700" fill="#dc2626">
                χ(O) = 3.4
              </text>
              {PERIOD3_DATA.map((d, i) => {
                const cx = 76 + i * 60;
                const active = d.z === z;
                const h = d.chi ? (d.chi / 4) * 130 : 0;
                return (
                  <g key={d.sym} onClick={() => setZ(d.z)} className="cursor-pointer">
                    {d.chi !== null ? (
                      <>
                        <rect x={cx - 16} y={168 - h} width="32" height={h} rx="5" fill={active ? "#2563eb" : "#93c5fd"} />
                        <text x={cx} y={162 - h} textAnchor="middle" fontSize="10" fontWeight="700" fill={active ? "#1d4ed8" : "#334155"}>
                          {d.chi.toFixed(1)}
                        </text>
                      </>
                    ) : (
                      <text x={cx} y="150" textAnchor="middle" fontSize="9" fill="#64748b">
                        None
                      </text>
                    )}
                    <text x={cx} y="186" textAnchor="middle" fontSize="11" fontWeight={active ? "800" : "600"} fill={active ? "#1d4ed8" : "#1e293b"}>
                      {d.sym}
                    </text>
                  </g>
                );
              })}
            </svg>
          ) : null}

          {mode === "oxide" ? (
            <svg viewBox="0 0 540 190" className="h-auto w-full" role="img" aria-label="Period 3 oxide aqueous pH scale and bonding summary">
              <defs>
                <linearGradient id="p3PhBar" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="25%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="75%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <text x="270" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
                Period 3 Oxide: {el.oxideFormula} ({el.oxideNature})
              </text>
              <rect x="30" y="64" width="480" height="22" rx="11" fill="url(#p3PhBar)" />
              {[0, 2, 4, 6, 7, 8, 10, 12, 14].map((p) => {
                const x = 30 + (p / 14) * 480;
                return (
                  <text key={p} x={x} y="102" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569">
                    {p}
                  </text>
                );
              })}
              <text x="30" y="116" fontSize="9" fontWeight="700" fill="#b91c1c">
                Strongly Acidic
              </text>
              <text x="270" y="116" textAnchor="middle" fontSize="9" fontWeight="700" fill="#047857">
                Neutral / Insoluble (pH 7)
              </text>
              <text x="510" y="116" textAnchor="end" fontSize="9" fontWeight="700" fill="#1d4ed8">
                Strongly Basic
              </text>
              {el.oxidePh !== null ? (
                <g>
                  <line
                    x1={30 + (el.oxidePh / 14) * 480}
                    y1="38"
                    x2={30 + (el.oxidePh / 14) * 480}
                    y2="64"
                    stroke="#0f172a"
                    strokeWidth="2.5"
                  />
                  <polygon
                    points={`${30 + (el.oxidePh / 14) * 480 - 6},58 ${30 + (el.oxidePh / 14) * 480 + 6},58 ${30 + (el.oxidePh / 14) * 480},67`}
                    fill="#0f172a"
                  />
                  <text x={30 + (el.oxidePh / 14) * 480} y="34" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#0f172a">
                    pH ≈ {el.oxidePh}
                  </text>
                </g>
              ) : (
                <text x="270" y="48" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#64748b">
                  Argon is a noble gas — no oxide formed
                </text>
              )}
              <rect x="24" y="132" width="492" height="46" rx="8" fill="#f1f5f9" stroke="#cbd5e1" />
              <text x="270" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f766e">
                Bonding &amp; Structure: {el.oxideBonding}
              </text>
              <text x="270" y="168" textAnchor="middle" fontSize="9.8" fontWeight="700" fill="#1e293b">
                {el.oxideEq}
              </text>
            </svg>
          ) : null}
        </div>

        {/* Live numeric readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Covalent Radius" value={el.radius ? `${el.radius} pm` : "N/A"} />
          <Readout label={`Ion (${el.ionFormula})`} value={el.ionRadius ? `${el.ionRadius} pm` : "—"} tone="ink" />
          <Readout label="1st IE" value={`${el.ie1} kJ`} tone="good" />
          <Readout
            label={mode === "oxide" ? "Oxide Δχ(O−E)" : "Pauling χ"}
            value={mode === "oxide" ? (deltaChiO !== null ? `${deltaChiO}` : "—") : el.chi !== null ? `${el.chi}` : "—"}
            tone="ink"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Octahedral d-Orbital Splitting & Colour Wheel [HL]
// ============================================================================

const H_C_NA_KJ_NM = (6.63e-34 * 3.0e8 * 6.02e23 * 1e9) / 1000; // ≈ 119737.8 kJ mol⁻¹·nm

interface MetalPreset {
  id: string;
  label: string;
  dCount: number;
  baseDelta: number; // baseline octahedral splitting with H2O in kJ mol⁻¹
  note: string;
}

const METALS: MetalPreset[] = [
  { id: "Ti3+", label: "Ti³⁺ (d¹)", dCount: 1, baseDelta: 235, note: "One 3d electron in t₂g absorbs green light → purple/violet solution." },
  { id: "Cr3+", label: "Cr³⁺ (d³)", dCount: 3, baseDelta: 208, note: "Three unpaired t₂g electrons; strong ligand shifts move Cr(III) from violet to yellow." },
  { id: "Fe2+", label: "Fe²⁺ (d⁶)", dCount: 6, baseDelta: 178, note: "Lower +2 charge density gives smaller ΔE than Fe³⁺; absorbs red → pale green." },
  { id: "Fe3+", label: "Fe³⁺ (d⁵)", dCount: 5, baseDelta: 252, note: "Higher +3 charge pulls ligands closer, widening ΔE relative to Fe²⁺." },
  { id: "Cu2+", label: "Cu²⁺ (d⁹)", dCount: 9, baseDelta: 194, note: "One vacancy in e_g allows d–d absorption in orange-red → classic blue copper(II)!" },
  { id: "Zn2+", label: "Zn²⁺ (d¹⁰)", dCount: 10, baseDelta: 220, note: "Completely full 3d¹⁰ sublevel: no vacant upper d orbital, so NO d–d transition (colourless)!" },
];

interface LigandPreset {
  id: string;
  label: string;
  shift: number; // kJ mol⁻¹ relative to H2O
  desc: string;
}

const LIGANDS: LigandPreset[] = [
  { id: "Cl-", label: "Cl⁻", shift: -26, desc: "Weak-field halide ligand (smaller ΔE, longer absorbed λ)." },
  { id: "H2O", label: "H₂O", shift: 0, desc: "Mid-series neutral aqua ligand." },
  { id: "NH3", label: "NH₃", shift: 34, desc: "Stronger-field ammine ligand (larger ΔE, shorter absorbed λ)." },
  { id: "CN-", label: "CN⁻", shift: 62, desc: "Very strong-field ligand near top of spectrochemical series (largest ΔE)." },
];

interface ColourSector {
  name: string;
  compName: string;
  hex: string;
  compHex: string;
  minNm: number;
  maxNm: number;
  midDeg: number;
}

const SECTORS: ColourSector[] = [
  { name: "Red", compName: "Green", hex: "#ef4444", compHex: "#22c55e", minNm: 647, maxNm: 700, midDeg: -60 },
  { name: "Orange", compName: "Blue", hex: "#f97316", compHex: "#3b82f6", minNm: 585, maxNm: 647, midDeg: 0 },
  { name: "Yellow", compName: "Violet", hex: "#facc15", compHex: "#8b5cf6", minNm: 575, maxNm: 585, midDeg: 60 },
  { name: "Green", compName: "Red", hex: "#22c55e", compHex: "#ef4444", minNm: 491, maxNm: 575, midDeg: 120 },
  { name: "Blue", compName: "Orange", hex: "#3b82f6", compHex: "#f97316", minNm: 424, maxNm: 491, midDeg: 180 },
  { name: "Violet", compName: "Yellow", hex: "#8b5cf6", compHex: "#facc15", minNm: 400, maxNm: 424, midDeg: 240 },
];

function sectorForLambda(nm: number): ColourSector {
  if (nm < 424) return SECTORS[5];
  if (nm < 491) return SECTORS[4];
  if (nm < 575) return SECTORS[3];
  if (nm < 585) return SECTORS[2];
  if (nm < 647) return SECTORS[1];
  return SECTORS[0];
}

function clampDelta(v: number): number {
  return Math.max(174, Math.min(296, Math.round(v)));
}

/** High-spin octahedral d-orbital occupancy (t2g [3 boxes], eg [2 boxes]) for visual clarity. */
function orbitalOccupancy(dCount: number): { t2g: number[]; eg: number[] } {
  const t2g = [0, 0, 0];
  const eg = [0, 0];
  let rem = dCount;
  for (let i = 0; i < 3 && rem > 0; i++, rem--) t2g[i]++;
  for (let i = 0; i < 2 && rem > 0; i++, rem--) eg[i]++;
  for (let i = 0; i < 3 && rem > 0; i++, rem--) t2g[i]++;
  for (let i = 0; i < 2 && rem > 0; i++, rem--) eg[i]++;
  return { t2g, eg };
}

function CrystalFieldColourLab() {
  const [metalId, setMetalId] = useState<string>("Cu2+");
  const [ligandId, setLigandId] = useState<string>("H2O");
  const [deltaE, setDeltaE] = useState<number>(194);

  const metal = METALS.find((m) => m.id === metalId) ?? METALS[4];
  const ligand = LIGANDS.find((l) => l.id === ligandId) ?? LIGANDS[1];

  const selectMetal = (id: string) => {
    setMetalId(id);
    const m = METALS.find((x) => x.id === id) ?? METALS[0];
    setDeltaE(clampDelta(m.baseDelta + ligand.shift));
  };

  const selectLigand = (id: string) => {
    setLigandId(id);
    const l = LIGANDS.find((x) => x.id === id) ?? LIGANDS[1];
    setDeltaE(clampDelta(metal.baseDelta + l.shift));
  };

  const isColourless = metal.dCount === 0 || metal.dCount === 10;
  const lambdaNm = Math.round(H_C_NA_KJ_NM / deltaE);
  const sector = sectorForLambda(lambdaNm);
  const occ = orbitalOccupancy(metal.dCount);

  // Scale vertical splitting in SVG smoothly from 42px (ΔE=174) to 108px (ΔE=296)
  const gapPx = 42 + ((deltaE - 174) / (296 - 174)) * 66;
  const midY = 122;
  const egY = midY - gapPx * 0.58;
  const t2gY = midY + gapPx * 0.42;

  // Polar helper for 6-sector colour wheel centred at (110, 118), radius 72
  const cx = 110;
  const cy = 118;
  const r = 72;
  const pt = (deg: number, rad: number) => {
    const a = (deg * Math.PI) / 180;
    return [cx + rad * Math.cos(a), cy + rad * Math.sin(a)] as const;
  };
  const wedgePath = (startDeg: number, endDeg: number) => {
    const [x1, y1] = pt(startDeg, r);
    const [x2, y2] = pt(endDeg, r);
    return `M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0,1 ${x2.toFixed(1)},${y2.toFixed(1)} Z`;
  };

  const absPt = pt(sector.midDeg, 48);
  const compPt = pt(sector.midDeg + 180, 48);

  return (
    <WidgetFrame
      title="Octahedral d-Orbital Splitting & Colour Wheel [HL]"
      tryThis={[
        "Start with **Cu²⁺ + H₂O** (orange absorbed → blue), then swap ligand to **NH₃** and **CN⁻** to watch `ΔE` widen and `λ_abs` shorten.",
        "Compare **Fe²⁺ (d⁶)** with **Fe³⁺ (d⁵)** using **H₂O** to see how a higher oxidation state increases `ΔE`.",
        "Select **Zn²⁺ (d¹⁰)** to verify why a full `3d¹⁰` sublevel blocks `d–d` transitions and turns the solution colourless.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            {metal.label} with {ligand.label} ligands ·{" "}
            {isColourless
              ? "Colourless (no d–d absorption possible)"
              : `Absorbs ${sector.name.toLowerCase()} (${lambdaNm} nm) → transmits complementary ${sector.compName.toLowerCase()}`}
          </div>
          <p className="text-ink-2">
            {metal.note} {ligand.desc}
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Central Metal Ion</div>
          <Segmented
            label="Central metal ion"
            value={metalId}
            onChange={selectMetal}
            options={METALS.map((m) => ({ value: m.id, label: m.label }))}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Ligand (Spectrochemical Series: Weak → Strong)</div>
          <Segmented
            label="Ligand"
            value={ligandId}
            onChange={selectLigand}
            options={LIGANDS.map((l) => ({ value: l.id, label: l.label }))}
          />
        </div>

        <Slider
          label="Crystal field splitting energy ΔE"
          value={deltaE}
          min={174}
          max={296}
          step={1}
          onChange={setDeltaE}
          format={(v) => `${v} kJ mol⁻¹`}
        />

        {/* Dual SVG panels: stack on 390px mobile, side-by-side on sm+ */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Left: Octahedral d-Orbital Splitting Diagram */}
          <div className="rounded-xl border border-line bg-white p-2.5 text-slate-900">
            <svg viewBox="0 0 280 228" className="h-auto w-full" role="img" aria-label="Dynamic octahedral d-orbital crystal field splitting energy diagram">
              <text x="140" y="18" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
                Octahedral d-Orbital Splitting ({metal.label})
              </text>
              {/* Energy axis */}
              <line x1="22" y1="204" x2="22" y2="38" stroke="#475569" strokeWidth="1.6" />
              <polygon points="18,42 22,33 26,42" fill="#475569" />
              <text x="14" y="122" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#475569" transform="rotate(-90 14 122)">
                Energy
              </text>
              {/* Barycentre dashed line */}
              <line x1="36" y1={midY} x2="262" y2={midY} stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4,3" />
              {/* Upper eg orbitals (2 lines) */}
              <text x="150" y={egY - 18} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#dc2626">
                Higher d set (d_x²−y², d_z²)
              </text>
              {[108, 166].map((x, idx) => (
                <g key={`eg-${idx}`}>
                  <line x1={x} y1={egY} x2={x + 36} y2={egY} stroke="#dc2626" strokeWidth="3" />
                  {occ.eg[idx] >= 1 ? (
                    <text x={x + 12} y={egY - 4} fontSize="14" fontWeight="700" fill="#0f172a">
                      ↑
                    </text>
                  ) : null}
                  {occ.eg[idx] >= 2 ? (
                    <text x={x + 21} y={egY - 4} fontSize="14" fontWeight="700" fill="#0f172a">
                      ↓
                    </text>
                  ) : null}
                </g>
              ))}
              {/* Lower t2g orbitals (3 lines) */}
              {[66, 126, 186].map((x, idx) => (
                <g key={`t2g-${idx}`}>
                  <line x1={x} y1={t2gY} x2={x + 36} y2={t2gY} stroke="#2563eb" strokeWidth="3" />
                  {occ.t2g[idx] >= 1 ? (
                    <text x={x + 12} y={t2gY - 4} fontSize="14" fontWeight="700" fill="#0f172a">
                      ↑
                    </text>
                  ) : null}
                  {occ.t2g[idx] >= 2 ? (
                    <text x={x + 21} y={t2gY - 4} fontSize="14" fontWeight="700" fill="#0f172a">
                      ↓
                    </text>
                  ) : null}
                </g>
              ))}
              <text x="148" y={t2gY + 18} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1d4ed8">
                Lower d set (d_xy, d_xz, d_yz)
              </text>

              {/* Splitting gap arrow or blocked notice */}
              {!isColourless ? (
                <g>
                  <line x1="244" y1={t2gY - 3} x2="244" y2={egY + 5} stroke={sector.hex} strokeWidth="2.4" strokeDasharray="4,2" />
                  <polygon points={`240,${egY + 8} 244,${egY + 1} 248,${egY + 8}`} fill={sector.hex} />
                  <text x="244" y={midY - 3} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#0f172a">
                    ΔE
                  </text>
                  <text x="244" y={midY + 9} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#475569">
                    {deltaE}
                  </text>
                </g>
              ) : (
                <g>
                  <rect x="44" y="196" width="212" height="22" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
                  <text x="150" y="211" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#334155">
                    3d¹⁰ FULL — No vacant orbital for d–d jump!
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Right: 6-Sector IB Colour Wheel + Live Solution Cuvette */}
          <div className="rounded-xl border border-line bg-white p-2.5 text-slate-900">
            <svg viewBox="0 0 280 228" className="h-auto w-full" role="img" aria-label="Six-sector IB complementary colour wheel and live solution colour preview">
              <text x="140" y="18" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0f172a">
                IB Colour Wheel &amp; Observed Solution
              </text>
              {SECTORS.map((s) => {
                const start = s.midDeg - 30;
                const end = s.midDeg + 30;
                const isAbs = !isColourless && s.name === sector.name;
                const isObs = !isColourless && s.name === sector.compName;
                const [lx, ly] = pt(s.midDeg, 50);
                return (
                  <g key={s.name}>
                    <path
                      d={wedgePath(start, end)}
                      fill={s.hex}
                      fillOpacity={isColourless ? 0.25 : isAbs || isObs ? 1 : 0.45}
                      stroke={isAbs ? "#0f172a" : isObs ? "#047857" : "#ffffff"}
                      strokeWidth={isAbs || isObs ? 3 : 1.5}
                    />
                    <text
                      x={lx}
                      y={ly + 3}
                      textAnchor="middle"
                      fontSize="8.5"
                      fontWeight="700"
                      fill={s.name === "Yellow" ? "#422006" : "#ffffff"}
                    >
                      {s.name}
                    </text>
                  </g>
                );
              })}
              <circle cx={cx} cy={cy} r="20" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              {!isColourless ? (
                <g>
                  <line x1={absPt[0]} y1={absPt[1]} x2={compPt[0]} y2={compPt[1]} stroke="#0f172a" strokeWidth="2" strokeDasharray="3,2" />
                  <circle cx={absPt[0]} cy={absPt[1]} r="4" fill="#0f172a" />
                  <circle cx={compPt[0]} cy={compPt[1]} r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
                </g>
              ) : null}
              <text x={cx} y={cy + 3} textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#0f172a">
                {isColourless ? "NONE" : "ABS→SEEN"}
              </text>

              {/* Solution test-tube / cuvette preview on right */}
              <rect x="206" y="54" width="52" height="120" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
              <rect
                x="210"
                y="84"
                width="44"
                height="86"
                rx="7"
                fill={isColourless ? "#f1f5f9" : sector.compHex}
                fillOpacity={isColourless ? 0.5 : 0.78}
              />
              <text x="232" y="192" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#0f172a">
                {isColourless ? "Colourless" : sector.compName}
              </text>
              <text x="232" y="205" textAnchor="middle" fontSize="8.5" fill="#475569">
                Solution
              </text>
              <text x="110" y="210" textAnchor="middle" fontSize="8.5" fill="#475569">
                {isColourless ? "All visible λ transmitted" : `λ_abs = ${lambdaNm} nm (${sector.name})`}
              </text>
            </svg>
          </div>
        </div>

        {/* Live numeric readouts */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Splitting ΔE" value={`${deltaE} kJ`} />
          <Readout label="Absorbed λ" value={isColourless ? "None" : `${lambdaNm} nm`} tone="ink" />
          <Readout label="Absorbed Light" value={isColourless ? "None" : sector.name} tone="bad" />
          <Readout label="Observed Colour" value={isColourless ? "Colourless" : sector.compName} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "period3-trends-explorer",
    title: "Period 3 Trends & Oxide Acid–Base Explorer [SL]",
    blurb: "Explore atomic/ionic radii, IE₁ dips at Al and S, Pauling electronegativity, and Period 3 oxide pH across Na → Ar.",
    Component: Period3TrendsExplorer,
  },
  {
    id: "crystal-field-colour-lab",
    title: "Octahedral d-Orbital Splitting & Colour Wheel [HL]",
    blurb: "Swap central transition-metal ions and spectrochemical ligands to see ΔE, absorbed wavelength λ, and complementary colour shift live.",
    Component: CrystalFieldColourLab,
  },
];

export default function PeriodicityWidgets() {
  return (
    <div className="space-y-6">
      <Period3TrendsExplorer />
      <CrystalFieldColourLab />
    </div>
  );
}
