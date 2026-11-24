"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: VSEPR 2–6 DOMAIN GEOMETRY & POLARITY EXPLORER
// =============================================================================

type DomainCount = "2" | "3" | "4" | "5" | "6";
type LigandMode = "identical" | "substituted";

interface BondDraw {
  dx: number;
  dy: number;
  style: "solid" | "wedge" | "dash";
  isSub?: boolean;
}

interface LonePairDraw {
  dx: number;
  dy: number;
  rot: number;
}

interface VseprConfig {
  edg: string;
  shape: string;
  angles: string;
  hybridization: string;
  symmetricPolar: boolean;
  examples: string;
  note: string;
  bonds: BondDraw[];
  lonePairs: LonePairDraw[];
  netDipole?: { dx: number; dy: number };
}

const MAX_LP: Record<DomainCount, number> = {
  "2": 0,
  "3": 1,
  "4": 2,
  "5": 3,
  "6": 2,
};

const VSEPR_TABLE: Record<string, VseprConfig> = {
  "2-0": {
    edg: "Linear",
    shape: "Linear",
    angles: "180°",
    hybridization: "sp",
    symmetricPolar: false,
    examples: "CO₂, CS₂, BeCl₂(g), HCN",
    note: "Two bonding domains sit 180° apart. Equal opposite dipoles cancel completely unless one ligand is substituted (e.g. O=C=S or H−C≡N).",
    bonds: [
      { dx: -95, dy: 0, style: "solid" },
      { dx: 95, dy: 0, style: "solid", isSub: true },
    ],
    lonePairs: [],
  },
  "3-0": {
    edg: "Trigonal planar",
    shape: "Trigonal planar",
    angles: "120°",
    hybridization: "sp²",
    symmetricPolar: false,
    examples: "BF₃, BCl₃, CO₃²⁻, NO₃⁻",
    note: "Three bonding domains lie flat at 120° in one plane. Identical bond dipoles cancel by 3-fold symmetry; substituting one ligand (e.g. H₂C=O) creates a net dipole.",
    bonds: [
      { dx: 0, dy: -82, style: "solid", isSub: true },
      { dx: -72, dy: 44, style: "solid" },
      { dx: 72, dy: 44, style: "solid" },
    ],
    lonePairs: [],
  },
  "3-1": {
    edg: "Trigonal planar",
    shape: "Bent (V-shaped)",
    angles: "~117° (<120°)",
    hybridization: "sp²",
    symmetricPolar: true,
    examples: "SO₂, O₃, NO₂⁻",
    note: "One lone pair pushes the two bonding domains slightly below 120° (~117°). The bent geometry is asymmetric, producing a net molecular dipole.",
    bonds: [
      { dx: -74, dy: 46, style: "solid" },
      { dx: 74, dy: 46, style: "solid", isSub: true },
    ],
    lonePairs: [{ dx: 0, dy: -56, rot: 0 }],
    netDipole: { dx: 0, dy: 54 },
  },
  "4-0": {
    edg: "Tetrahedral",
    shape: "Tetrahedral",
    angles: "109.5°",
    hybridization: "sp³",
    symmetricPolar: false,
    examples: "CH₄, CCl₄, NH₄⁺, SO₄²⁻",
    note: "Four bonding domains spread maximally in 3D at 109.5°. Identical ligands cancel symmetrically (non-polar); replacing one ligand (e.g. CH₃Cl) makes it polar.",
    bonds: [
      { dx: 0, dy: -82, style: "solid", isSub: true },
      { dx: -74, dy: 40, style: "solid" },
      { dx: 68, dy: 52, style: "wedge" },
      { dx: 64, dy: -16, style: "dash" },
    ],
    lonePairs: [],
  },
  "4-1": {
    edg: "Tetrahedral",
    shape: "Trigonal pyramidal",
    angles: "107° (<109.5°)",
    hybridization: "sp³",
    symmetricPolar: true,
    examples: "NH₃, PCl₃, H₃O⁺",
    note: "Greater LP–BP repulsion compresses the three bonds from 109.5° down to 107°. All three dipoles point slightly downwards away from the lone pair → polar.",
    bonds: [
      { dx: -72, dy: 44, style: "solid" },
      { dx: 68, dy: 52, style: "wedge", isSub: true },
      { dx: 18, dy: 58, style: "dash" },
    ],
    lonePairs: [{ dx: 0, dy: -56, rot: 0 }],
    netDipole: { dx: 0, dy: 58 },
  },
  "4-2": {
    edg: "Tetrahedral",
    shape: "Bent (V-shaped)",
    angles: "104.5°",
    hybridization: "sp³",
    symmetricPolar: true,
    examples: "H₂O, H₂S, OF₂",
    note: "Two bulky lone pairs exert LP–LP > LP–BP > BP–BP repulsion, compressing the angle to 104.5° and creating a strong net dipole moment (polar).",
    bonds: [
      { dx: -66, dy: 50, style: "solid" },
      { dx: 66, dy: 50, style: "solid", isSub: true },
    ],
    lonePairs: [
      { dx: -44, dy: -46, rot: -35 },
      { dx: 44, dy: -46, rot: 35 },
    ],
    netDipole: { dx: 0, dy: 58 },
  },
  "5-0": {
    edg: "Trigonal bipyramidal",
    shape: "Trigonal bipyramidal",
    angles: "90°, 120°, 180°",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: false,
    examples: "PCl₅, PF₅, AsF₅",
    note: "Two axial ligands (180° apart) and three equatorial ligands (120° apart) cancel symmetrically when identical; substituting one axial ligand breaks symmetry → polar.",
    bonds: [
      { dx: 0, dy: -82, style: "solid", isSub: true },
      { dx: 0, dy: 82, style: "solid" },
      { dx: -80, dy: 0, style: "solid" },
      { dx: 68, dy: 30, style: "wedge" },
      { dx: 64, dy: -26, style: "dash" },
    ],
    lonePairs: [],
  },
  "5-1": {
    edg: "Trigonal bipyramidal",
    shape: "Seesaw",
    angles: "<90°, <120°",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: true,
    examples: "SF₄, SeF₄, TeCl₄",
    note: "The lone pair occupies an **equatorial** site (only two 90° neighbours instead of three), bending axial and equatorial bonds away → asymmetric and polar.",
    bonds: [
      { dx: 8, dy: -80, style: "solid", isSub: true },
      { dx: 8, dy: 80, style: "solid" },
      { dx: 70, dy: 30, style: "wedge" },
      { dx: 66, dy: -28, style: "dash" },
    ],
    lonePairs: [{ dx: -60, dy: 0, rot: -90 }],
    netDipole: { dx: 60, dy: 0 },
  },
  "5-2": {
    edg: "Trigonal bipyramidal",
    shape: "T-shaped",
    angles: "<90° (~87.5°)",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: true,
    examples: "ClF₃, BrF₃, IF₃",
    note: "Both lone pairs sit in equatorial positions at 120°, leaving two axial and one equatorial bond in a polar T-shape bent slightly inward (<90°).",
    bonds: [
      { dx: 6, dy: -80, style: "solid" },
      { dx: 6, dy: 80, style: "solid" },
      { dx: 84, dy: 0, style: "solid", isSub: true },
    ],
    lonePairs: [
      { dx: -52, dy: -34, rot: -55 },
      { dx: -52, dy: 34, rot: 55 },
    ],
    netDipole: { dx: 64, dy: 0 },
  },
  "5-3": {
    edg: "Trigonal bipyramidal",
    shape: "Linear",
    angles: "180°",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: false,
    examples: "XeF₂, I₃⁻, ICl₂⁻",
    note: "All three lone pairs fill the equatorial belt at 120° to each other, locking the two bonding domains strictly 180° opposite → non-polar when ligands match!",
    bonds: [
      { dx: 0, dy: -82, style: "solid", isSub: true },
      { dx: 0, dy: 82, style: "solid" },
    ],
    lonePairs: [
      { dx: -58, dy: 0, rot: -90 },
      { dx: 54, dy: -22, rot: 68 },
      { dx: 54, dy: 22, rot: 112 },
    ],
  },
  "6-0": {
    edg: "Octahedral",
    shape: "Octahedral",
    angles: "90°, 180°",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: false,
    examples: "SF₆, PF₆⁻, SiF₆²⁻",
    note: "Six equivalent bonding domains point along ±x, ±y, ±z at exact 90° angles. Opposite pairs cancel completely unless one ligand is substituted.",
    bonds: [
      { dx: 0, dy: -80, style: "solid", isSub: true },
      { dx: 0, dy: 80, style: "solid" },
      { dx: -74, dy: 28, style: "wedge" },
      { dx: 74, dy: 28, style: "wedge" },
      { dx: -64, dy: -24, style: "dash" },
      { dx: 64, dy: -24, style: "dash" },
    ],
    lonePairs: [],
  },
  "6-1": {
    edg: "Octahedral",
    shape: "Square pyramidal",
    angles: "<90° (~85°)",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: true,
    examples: "BrF₅, IF₅, XeOF₄",
    note: "One lone pair pushes the four basal bonds slightly upwards (<90°), leaving an unpaired axial bond pointing opposite the lone pair → polar.",
    bonds: [
      { dx: 0, dy: -80, style: "solid", isSub: true },
      { dx: -74, dy: 22, style: "wedge" },
      { dx: 74, dy: 22, style: "wedge" },
      { dx: -64, dy: -28, style: "dash" },
      { dx: 64, dy: -28, style: "dash" },
    ],
    lonePairs: [{ dx: 0, dy: 58, rot: 180 }],
    netDipole: { dx: 0, dy: -62 },
  },
  "6-2": {
    edg: "Octahedral",
    shape: "Square planar",
    angles: "90°, 180°",
    hybridization: "Expanded octet [HL]",
    symmetricPolar: false,
    examples: "XeF₄, ICl₄⁻, BrF₄⁻",
    note: "Two lone pairs sit 180° opposite (trans) to minimize LP–LP repulsion, leaving four ligands in a flat 90° square whose identical bond dipoles cancel → non-polar!",
    bonds: [
      { dx: -74, dy: 28, style: "wedge" },
      { dx: 74, dy: 28, style: "wedge", isSub: true },
      { dx: -64, dy: -26, style: "dash" },
      { dx: 64, dy: -26, style: "dash" },
    ],
    lonePairs: [
      { dx: 0, dy: -56, rot: 0 },
      { dx: 0, dy: 56, rot: 180 },
    ],
  },
};

function VseprExplorer() {
  const [domains, setDomains] = useState<DomainCount>("4");
  const [lonePairs, setLonePairs] = useState<number>(1);
  const [ligandMode, setLigandMode] = useState<LigandMode>("identical");

  const handleDomainChange = (next: DomainCount) => {
    setDomains(next);
    setLonePairs((prev) => Math.min(prev, MAX_LP[next]));
  };

  const maxLp = MAX_LP[domains];
  const safeLp = Math.min(lonePairs, maxLp);
  const cfg = VSEPR_TABLE[`${domains}-${safeLp}`];
  const bondingDomains = Number(domains) - safeLp;
  const isPolar = cfg.symmetricPolar || ligandMode === "substituted";

  const cx = 215;
  const cy = 126;

  // Compute an illustrative net dipole direction when substituted turns a symmetric molecule polar
  const subBond = cfg.bonds.find((b) => b.isSub) ?? cfg.bonds[0];
  const dipoleVec =
    cfg.netDipole ??
    (ligandMode === "substituted" && subBond
      ? { dx: subBond.dx * 0.7, dy: subBond.dy * 0.7 }
      : undefined);

  return (
    <WidgetFrame
      title="VSEPR 2–6 Domain Geometry & Polarity Explorer"
      tryThis={[
        "Keep **4 domains** and step lone pairs from {{0 -> 1 -> 2}} to watch CH₄ (109.5°) compress into NH₃ (107°) and H₂O (104.5°).",
        "Switch to **5 domains [HL]** and add lone pairs 1, 2, then 3: notice every lone pair takes an **equatorial** site until XeF₂ becomes linear & non-polar!",
        "Select **6 domains, 2 lone pairs** (XeF₄) or **4 domains, 0 lone pairs** (CH₄), then toggle **1 Substituted ligand** to see how symmetry breaking creates a polar molecule.",
      ]}
      caption={
        <>
          <strong>
            {cfg.shape} ({bondingDomains} BP, {safeLp} LP · {domains} domains)
          </strong>{" "}
          — Exemplars: <strong>{cfg.examples}</strong>. {cfg.note}
        </>
      }
    >
      <div className="space-y-4">
        {/* Live SVG Molecule */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 460 250"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`${cfg.shape} molecular geometry with ${bondingDomains} bonding pairs and ${safeLp} lone pairs`}
            className="mx-auto block h-auto w-full max-w-[520px]"
          >
            <defs>
              <marker id="vsepr-dipole" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
              </marker>
            </defs>

            {/* Polarity status pill top-right */}
            <rect
              x={318}
              y={12}
              width={130}
              height={26}
              rx={13}
              fill={isPolar ? "#fee2e2" : "#dcfce7"}
              stroke={isPolar ? "#ef4444" : "#16a34a"}
              strokeWidth={1.3}
            />
            <text
              x={383}
              y={29}
              fontSize={11}
              fontWeight={800}
              textAnchor="middle"
              fill={isPolar ? "#b91c1c" : "#15803d"}
            >
              {isPolar ? "Polar (net dipole ≠ 0)" : "Non-polar (μ = 0)"}
            </text>

            {/* Level tag top-left */}
            <rect
              x={12}
              y={12}
              width={92}
              height={24}
              rx={12}
              fill={Number(domains) >= 5 ? "#ede9fe" : "#dbeafe"}
              stroke={Number(domains) >= 5 ? "#7c3aed" : "#2563eb"}
              strokeWidth={1.2}
            />
            <text
              x={58}
              y={28}
              fontSize={10.5}
              fontWeight={800}
              textAnchor="middle"
              fill={Number(domains) >= 5 ? "#6d28d9" : "#1d4ed8"}
            >
              {Number(domains) >= 5 ? `${domains} Domains · HL` : `${domains} Domains · SL`}
            </text>

            {/* Dashed bonds (behind central atom) */}
            {cfg.bonds
              .filter((b) => b.style === "dash")
              .map((b, i) => (
                <line
                  key={`dash-${i}`}
                  x1={cx}
                  y1={cy}
                  x2={cx + b.dx}
                  y2={cy + b.dy}
                  stroke="#64748b"
                  strokeWidth={3.2}
                  strokeDasharray="5 4"
                />
              ))}

            {/* Solid in-plane bonds */}
            {cfg.bonds
              .filter((b) => b.style === "solid")
              .map((b, i) => (
                <line
                  key={`sol-${i}`}
                  x1={cx}
                  y1={cy}
                  x2={cx + b.dx}
                  y2={cy + b.dy}
                  stroke="#334155"
                  strokeWidth={3.8}
                  strokeLinecap="round"
                />
              ))}

            {/* Wedge bonds (pointing toward viewer) */}
            {cfg.bonds
              .filter((b) => b.style === "wedge")
              .map((b, i) => {
                const len = Math.hypot(b.dx, b.dy) || 1;
                const px = (-b.dy / len) * 6.5;
                const py = (b.dx / len) * 6.5;
                const tx = cx + b.dx;
                const ty = cy + b.dy;
                return (
                  <polygon
                    key={`wdg-${i}`}
                    points={`${cx},${cy} ${(tx + px).toFixed(1)},${(ty + py).toFixed(1)} ${(tx - px).toFixed(1)},${(ty - py).toFixed(1)}`}
                    fill="#1e293b"
                  />
                );
              })}

            {/* Lone pair lobes */}
            {cfg.lonePairs.map((lp, i) => {
              const lx = cx + lp.dx;
              const ly = cy + lp.dy;
              return (
                <g key={`lp-${i}`} transform={`translate(${lx.toFixed(1)}, ${ly.toFixed(1)}) rotate(${lp.rot})`}>
                  <ellipse cx={0} cy={0} rx={20} ry={13} fill="#fef3c7" fillOpacity={0.92} stroke="#f59e0b" strokeWidth={1.8} />
                  <circle cx={-5} cy={0} r={3} fill="#d97706" />
                  <circle cx={5} cy={0} r={3} fill="#d97706" />
                </g>
              );
            })}

            {/* Central atom A */}
            <circle cx={cx} cy={cy} r={20} fill="#2563eb" stroke="#ffffff" strokeWidth={2.2} />
            <text x={cx} y={cy + 5} fontSize={14} fontWeight={800} textAnchor="middle" fill="#ffffff">
              A
            </text>

            {/* Terminal ligands X / Y */}
            {cfg.bonds.map((b, i) => {
              const sub = ligandMode === "substituted" && Boolean(b.isSub);
              const lx = cx + b.dx;
              const ly = cy + b.dy;
              return (
                <g key={`lig-${i}`}>
                  <circle
                    cx={lx}
                    cy={ly}
                    r={sub ? 16 : 14.5}
                    fill={sub ? "#e11d48" : b.style === "dash" ? "#64748b" : "#10b981"}
                    stroke="#ffffff"
                    strokeWidth={1.8}
                  />
                  <text x={lx} y={ly + 4.5} fontSize={12} fontWeight={800} textAnchor="middle" fill="#ffffff">
                    {sub ? "Y" : "X"}
                  </text>
                </g>
              );
            })}

            {/* Net molecular dipole indicator on right side when polar */}
            {isPolar && dipoleVec ? (
              <g transform="translate(382, 128)">
                <text x={0} y={-52} fontSize={10} fontWeight={800} textAnchor="middle" fill="#dc2626">
                  Net dipole μ
                </text>
                <line
                  x1={-dipoleVec.dx * 0.35}
                  y1={-dipoleVec.dy * 0.35}
                  x2={dipoleVec.dx * 0.45}
                  y2={dipoleVec.dy * 0.45}
                  stroke="#dc2626"
                  strokeWidth={2.8}
                  markerEnd="url(#vsepr-dipole)"
                />
              </g>
            ) : (
              <g transform="translate(382, 128)">
                <text x={0} y={0} fontSize={10.5} fontWeight={700} textAnchor="middle" fill="#15803d">
                  Symmetric:
                </text>
                <text x={0} y={15} fontSize={10} fontWeight={700} textAnchor="middle" fill="#15803d">
                  dipoles cancel
                </text>
              </g>
            )}

            {/* Angle badge bottom-left */}
            <text x={14} y={236} fontSize={11.5} fontWeight={800} className="fill-ink">
              Bond angle: {cfg.angles}
            </text>
            <text x={446} y={236} fontSize={10} fontWeight={700} textAnchor="end" className="fill-ink-2">
              Wedge = toward · Dash = away · Gold = lone pair
            </text>
          </svg>
        </div>

        {/* Controls */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold text-ink-2">Electron domains</span>
            <Segmented<DomainCount>
              label="Number of electron domains"
              value={domains}
              onChange={handleDomainChange}
              options={[
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5 [HL]" },
                { value: "6", label: "6 [HL]" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Stepper
              label={`Lone pairs (max ${maxLp})`}
              value={safeLp}
              min={0}
              max={maxLp}
              step={1}
              onChange={setLonePairs}
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-ink-2">Outer atoms</span>
              <Segmented<LigandMode>
                label="Outer ligand symmetry"
                value={ligandMode}
                onChange={setLigandMode}
                options={[
                  { value: "identical", label: "All X" },
                  { value: "substituted", label: "1 Y (sub)" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Domain Geometry" value={cfg.edg} tone="ink" />
          <Readout label="Molecular Shape" value={cfg.shape} tone="brand" />
          <Readout label="Bond Angle" value={cfg.angles} tone="ink" />
          <Readout label="Hybridization" value={cfg.hybridization} tone={isPolar ? "bad" : "good"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: VAN ARKEL–KETELAAR BONDING TRIANGLE PLOTTER
// =============================================================================

interface PresetPoint {
  label: string;
  chiA: number;
  chiB: number;
}

const PRESETS: readonly PresetPoint[] = [
  { label: "CsF", chiA: 0.8, chiB: 4.0 },
  { label: "NaCl", chiA: 0.9, chiB: 3.2 },
  { label: "MgO", chiA: 1.3, chiB: 3.4 },
  { label: "AlCl₃", chiA: 1.6, chiB: 3.2 },
  { label: "SiO₂", chiA: 1.9, chiB: 3.4 },
  { label: "H₂O", chiA: 2.2, chiB: 3.4 },
  { label: "Cl₂", chiA: 3.2, chiB: 3.2 },
  { label: "Brass (CuZn)", chiA: 1.9, chiB: 1.7 },
];

const LANDMARKS: readonly { label: string; avg: number; diff: number; dx?: number; dy?: number }[] = [
  { label: "CsF", avg: 2.4, diff: 3.2, dx: 8, dy: 3 },
  { label: "NaCl", avg: 2.05, diff: 2.3, dx: -32, dy: 3 },
  { label: "MgO", avg: 2.35, diff: 2.1, dx: 8, dy: 4 },
  { label: "AlCl₃", avg: 2.4, diff: 1.6, dx: 8, dy: 3 },
  { label: "SiO₂", avg: 2.65, diff: 1.5, dx: 8, dy: 5 },
  { label: "HCl", avg: 2.7, diff: 1.0, dx: 8, dy: 3 },
  { label: "Si", avg: 1.9, diff: 0.0, dx: 0, dy: -8 },
  { label: "CuZn", avg: 1.8, diff: 0.2, dx: -34, dy: -4 },
  { label: "Cs", avg: 0.8, diff: 0.0, dx: -6, dy: 14 },
  { label: "F₂", avg: 4.0, diff: 0.0, dx: 4, dy: 14 },
];

const CHI_REF: readonly [number, string][] = [
  [0.8, "Cs / K"],
  [0.9, "Na / Ba"],
  [1.0, "Li / Ca"],
  [1.3, "Mg"],
  [1.6, "Al / Be"],
  [1.7, "Zn"],
  [1.8, "Fe"],
  [1.9, "Cu / Si"],
  [2.0, "B / Sn"],
  [2.2, "H / P"],
  [2.6, "C / S"],
  [2.7, "I"],
  [3.0, "N / Br"],
  [3.2, "Cl"],
  [3.4, "O"],
  [4.0, "F"],
];

function nearestElem(chi: number): string {
  let best = CHI_REF[0];
  let bestD = Math.abs(chi - best[0]);
  for (const item of CHI_REF) {
    const d = Math.abs(chi - item[0]);
    if (d < bestD) {
      best = item;
      bestD = d;
    }
  }
  return bestD <= 0.06 ? best[1] : "~";
}

function classifyBonding(avg: number, diff: number): {
  region: "Ionic" | "Metallic" | "Polar Covalent" | "Non-polar Covalent";
  tone: "brand" | "good" | "bad" | "ink";
  summary: string;
} {
  if (diff >= 1.8) {
    return {
      region: "Ionic",
      tone: "bad",
      summary:
        "Large Δχ drives electron transfer into a 3D lattice of cations and anions: high melting point, brittle, conducts only when molten or aqueous.",
    };
  }
  if (avg <= 2.05 && diff <= 0.85) {
    return {
      region: "Metallic",
      tone: "brand",
      summary:
        "Low χ_avg and low Δχ mean valence electrons delocalize freely across a cation lattice: malleable, lustrous, conducts electricity in solid and molten states.",
    };
  }
  if (diff < 0.45) {
    return {
      region: "Non-polar Covalent",
      tone: "good",
      summary:
        "High χ_avg with near-zero Δχ localizes equally shared electron pairs: electrical insulator (discrete low-mp molecules with London forces, or hard 3D network like diamond).",
    };
  }
  return {
    region: "Polar Covalent",
    tone: "ink",
    summary:
      "High χ_avg and intermediate Δχ produce unequal covalent sharing (δ⁺/δ⁻ dipoles): either polar molecular liquids/gases (H₂O, HCl, Al₂Cl₆) or polar covalent networks (SiO₂).",
  };
}

function BondingTrianglePlotter() {
  const [chiA, setChiA] = useState<number>(1.6);
  const [chiB, setChiB] = useState<number>(3.2);

  const avg = (chiA + chiB) / 2;
  const diff = Math.abs(chiA - chiB);
  const pctIonic = 100 * (1 - Math.exp(-0.25 * diff * diff));
  const cls = classifyBonding(avg, diff);

  const W = 480;
  const H = 266;
  const padL = 48;
  const padR = 24;
  const padT = 22;
  const padB = 42;

  const px = (x: number) => padL + ((x - 0.8) / (4.0 - 0.8)) * (W - padL - padR);
  const py = (y: number) => H - padB - (y / 3.2) * (H - padT - padB);

  const mx = px(avg);
  const my = py(diff);

  return (
    <WidgetFrame
      title="Van Arkel–Ketelaar Bonding Triangle Plotter"
      tryThis={[
        "Click **AlCl₃** (Al 1.6, Cl 3.2) and compare its coordinates with **NaCl** (0.9, 3.2): why does AlCl₃ sublime as covalent dimers?",
        "Set both sliders to {{0.9}} (Na) and then both to {{3.2}} (Cl₂): both have {{Δχ = 0}}, proving why {{χ_\"avg\"}} is essential!",
        "Move the sliders from **Brass (CuZn)** toward **SiO₂** and watch `% Ionic Character` and bonding type shift continuously.",
      ]}
      caption={
        <>
          At{" "}
          <strong className="tabular-nums">
            (χ_avg = {avg.toFixed(2)}, Δχ = {diff.toFixed(1)})
          </strong>{" "}
          — Region: <strong>{cls.region}</strong> (<M>{`% ionic ≈ ${Math.round(pctIonic)}%`}</M>). {cls.summary}
        </>
      }
    >
      <div className="space-y-4">
        {/* Preset pills */}
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((p) => {
            const active = Math.abs(chiA - p.chiA) < 0.01 && Math.abs(chiB - p.chiB) < 0.01;
            return (
              <button
                key={p.label}
                type="button"
                onClick={() => {
                  setChiA(p.chiA);
                  setChiB(p.chiB);
                }}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  active
                    ? "border-brand bg-brand text-white shadow-sm"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Live SVG Bonding Triangle */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Van Arkel-Ketelaar bonding triangle plotting average electronegativity ${avg.toFixed(2)} and difference ${diff.toFixed(1)} in the ${cls.region} region`}
            className="mx-auto block h-auto w-full max-w-[540px]"
          >
            {/* Outer triangle base fill (polar covalent) */}
            <polygon
              points={`${px(0.8)},${py(0)} ${px(4.0)},${py(0)} ${px(2.4)},${py(3.2)}`}
              fill="#eff6ff"
              stroke="#334155"
              strokeWidth={1.8}
            />

            {/* Ionic upper cap (Δχ >= 1.8) */}
            <polygon
              points={`${px(2.4)},${py(3.2)} ${px(1.7)},${py(1.8)} ${px(3.1)},${py(1.8)}`}
              fill="#ede9fe"
              fillOpacity={0.9}
            />

            {/* Metallic bottom-left zone */}
            <polygon
              points={`${px(0.8)},${py(0)} ${px(2.05)},${py(0)} ${px(1.9)},${py(0.85)} ${px(1.225)},${py(0.85)}`}
              fill="#fef3c7"
              fillOpacity={0.92}
            />

            {/* Non-polar covalent bottom-right zone */}
            <polygon
              points={`${px(2.25)},${py(0)} ${px(4.0)},${py(0)} ${px(3.775)},${py(0.45)} ${px(2.35)},${py(0.45)}`}
              fill="#d1fae5"
              fillOpacity={0.92}
            />

            {/* Region dividers */}
            <line x1={px(1.7)} y1={py(1.8)} x2={px(3.1)} y2={py(1.8)} stroke="#7c3aed" strokeWidth={1.3} strokeDasharray="4 3" />
            <line x1={px(2.05)} y1={py(0)} x2={px(1.9)} y2={py(0.85)} stroke="#d97706" strokeWidth={1.3} strokeDasharray="4 3" />
            <line x1={px(1.225)} y1={py(0.85)} x2={px(1.9)} y2={py(0.85)} stroke="#d97706" strokeWidth={1.3} strokeDasharray="4 3" />
            <line x1={px(2.35)} y1={py(0.45)} x2={px(3.775)} y2={py(0.45)} stroke="#059669" strokeWidth={1.3} strokeDasharray="4 3" />

            {/* Re-stroke triangle outline crisply */}
            <polygon
              points={`${px(0.8)},${py(0)} ${px(4.0)},${py(0)} ${px(2.4)},${py(3.2)}`}
              fill="none"
              stroke="#334155"
              strokeWidth={1.8}
            />

            {/* Region labels */}
            <text x={px(2.4)} y={py(2.35)} fontSize={11.5} fontWeight={800} textAnchor="middle" fill="#6d28d9">
              IONIC
            </text>
            <text x={px(1.42)} y={py(0.32)} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#b45309">
              METALLIC
            </text>
            <text x={px(2.58)} y={py(1.12)} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#1d4ed8">
              POLAR COVALENT
            </text>
            <text x={px(3.18)} y={py(0.16)} fontSize={9.5} fontWeight={800} textAnchor="middle" fill="#047857">
              COVALENT
            </text>

            {/* Axes */}
            <line x1={padL} x2={W - padR} y1={py(0)} y2={py(0)} className="stroke-ink-2" strokeWidth={1.4} />
            <line x1={padL} x2={padL} y1={padT} y2={py(0)} className="stroke-ink-2" strokeWidth={1.4} />

            {[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0].map((xt) => (
              <g key={`tx-${xt}`}>
                <line x1={px(xt)} x2={px(xt)} y1={py(0)} y2={py(0) + 4} className="stroke-ink-2" strokeWidth={1.2} />
                <text x={px(xt)} y={py(0) + 15} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
                  {xt.toFixed(1)}
                </text>
              </g>
            ))}
            {[0, 0.8, 1.6, 2.4, 3.2].map((yt) => (
              <g key={`ty-${yt}`}>
                <line x1={padL - 4} x2={padL} y1={py(yt)} y2={py(yt)} className="stroke-ink-2" strokeWidth={1.2} />
                <text x={padL - 8} y={py(yt) + 3.5} fontSize={9.5} textAnchor="end" className="fill-ink-2">
                  {yt.toFixed(1)}
                </text>
              </g>
            ))}

            <text x={(padL + W - padR) / 2} y={H - 7} fontSize={10.5} fontWeight={800} textAnchor="middle" className="fill-ink">
              Average electronegativity χ_avg = (χ_A + χ_B) / 2
            </text>
            <text
              x={14}
              y={(padT + py(0)) / 2}
              fontSize={10.5}
              fontWeight={800}
              textAnchor="middle"
              transform={`rotate(-90 14 ${(padT + py(0)) / 2})`}
              className="fill-ink"
            >
              Δχ = |χ_A − χ_B|
            </text>

            {/* Reference landmark dots */}
            {LANDMARKS.map((lm) => (
              <g key={lm.label}>
                <circle cx={px(lm.avg)} cy={py(lm.diff)} r={2.8} fill="#475569" fillOpacity={0.75} />
                <text
                  x={px(lm.avg) + (lm.dx ?? 6)}
                  y={py(lm.diff) + (lm.dy ?? 3)}
                  fontSize={8.8}
                  fontWeight={700}
                  fill="#334155"
                >
                  {lm.label}
                </text>
              </g>
            ))}

            {/* Crosshair projections for active point */}
            <line x1={mx} x2={mx} y1={my} y2={py(0)} stroke="#dc2626" strokeWidth={1.3} strokeDasharray="3 3" />
            <line x1={padL} x2={mx} y1={my} y2={my} stroke="#dc2626" strokeWidth={1.3} strokeDasharray="3 3" />

            {/* Live user point */}
            <circle cx={mx} cy={my} r={10} fill="#dc2626" fillOpacity={0.2} />
            <circle cx={mx} cy={my} r={5.5} fill="#dc2626" stroke="#ffffff" strokeWidth={2} />
          </svg>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="Element A electronegativity χ_A"
            value={chiA}
            min={0.8}
            max={4.0}
            step={0.1}
            onChange={setChiA}
            format={(v) => `${v.toFixed(1)} (${nearestElem(v)})`}
          />
          <Slider
            label="Element B electronegativity χ_B"
            value={chiB}
            min={0.8}
            max={4.0}
            step={0.1}
            onChange={setChiB}
            format={(v) => `${v.toFixed(1)} (${nearestElem(v)})`}
          />
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Average χ_avg" value={avg.toFixed(2)} tone="ink" />
          <Readout label="Difference Δχ" value={diff.toFixed(1)} tone="brand" />
          <Readout label="% Ionic (Pauling)" value={`${Math.round(pctIonic)}%`} tone="ink" />
          <Readout label="Bonding Region" value={cls.region} tone={cls.tone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "vsepr-explorer",
    title: "VSEPR 2–6 Domain Geometry & Polarity Explorer",
    blurb: "Adjust electron domains (2–6), lone pairs, and ligand symmetry to inspect 3D geometries, bond angles, hybridization, and net dipoles.",
    Component: VseprExplorer,
  },
  {
    id: "bonding-triangle-plotter",
    title: "Van Arkel–Ketelaar Bonding Triangle Plotter",
    blurb: "Plot any binary substance by χ_A and χ_B to map Δχ vs χ_avg across ionic, metallic, polar covalent, and covalent bonding.",
    Component: BondingTrianglePlotter,
  },
];

export default function S2BondingMaterialsWidgets() {
  return (
    <div className="space-y-6">
      <VseprExplorer />
      <BondingTrianglePlotter />
    </div>
  );
}
