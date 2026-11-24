// ---------------------------------------------------------------------------
// IB Diploma Chemistry (First Assessment 2025) — Paper 1B · Data-Based & Experimental
// 15 questions across 3 authentic IB lab datasets (11 SL + 4 HL sub-questions):
//   Dataset 1 (Q01–Q05): Calorimetry cooling-curve extrapolation & spirit-burner heat loss
//   Dataset 2 (Q06–Q10): Volumetric titration, glassware uncertainty & weak-acid pH curve [HL]
//   Dataset 3 (Q11–Q15): Colorimetry kinetics [HL], Arrhenius [HL], TLC & IR/MS analysis
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_CALORIMETRY_CURVE =
  '<svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Temperature versus time cooling curve for zinc added to aqueous copper(II) sulfate at 4.0 minutes, showing baseline 21.0 degrees Celsius, cooling points from 6 to 10 minutes, and linear extrapolation back to 33.2 degrees Celsius at 4.0 minutes">' +
  '<rect x="0" y="0" width="540" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="256" x2="490" y2="256"/><line x1="70" y1="232" x2="490" y2="232"/>' +
  '<line x1="70" y1="208" x2="490" y2="208"/><line x1="70" y1="184" x2="490" y2="184"/>' +
  '<line x1="70" y1="160" x2="490" y2="160"/><line x1="70" y1="136" x2="490" y2="136"/>' +
  '<line x1="70" y1="112" x2="490" y2="112"/><line x1="70" y1="88" x2="490" y2="88"/><line x1="70" y1="64" x2="490" y2="64"/>' +
  '<line x1="154" y1="40" x2="154" y2="280"/><line x1="238" y1="40" x2="238" y2="280"/>' +
  '<line x1="322" y1="40" x2="322" y2="280"/><line x1="406" y1="40" x2="406" y2="280"/><line x1="490" y1="40" x2="490" y2="280"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="280" x2="500" y2="280"/><line x1="70" y1="280" x2="70" y2="32"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="297">0</text><text x="154" y="297">2</text><text x="238" y="297">4</text>' +
  '<text x="322" y="297">6</text><text x="406" y="297">8</text><text x="490" y="297">10</text>' +
  '<text x="280" y="319" font-size="13" font-weight="600" fill="#0f172a">Time t / min</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="284">18</text><text x="62" y="260">20</text><text x="62" y="236">22</text>' +
  '<text x="62" y="212">24</text><text x="62" y="188">26</text><text x="62" y="164">28</text>' +
  '<text x="62" y="140">30</text><text x="62" y="116">32</text><text x="62" y="92">34</text><text x="62" y="68">36</text>' +
  "</g>" +
  '<text x="22" y="162" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 22 162)">Temperature T / °C</text>' +
  '<line x1="238" y1="97.6" x2="238" y2="244" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5,4"/>' +
  '<line x1="70" y1="244" x2="238" y2="244" stroke="#2563eb" stroke-width="2.2"/>' +
  '<line x1="238" y1="97.6" x2="322" y2="109.6" stroke="#059669" stroke-width="2.2" stroke-dasharray="6,4"/>' +
  '<line x1="322" y1="109.6" x2="490" y2="133.6" stroke="#059669" stroke-width="2.4"/>' +
  '<g fill="#0f172a">' +
  '<circle cx="70" cy="244" r="3.5"/><circle cx="112" cy="244" r="3.5"/><circle cx="154" cy="244" r="3.5"/><circle cx="196" cy="244" r="3.5"/>' +
  '<circle cx="259" cy="126.4" r="3.5"/><circle cx="280" cy="107.2" r="3.5"/>' +
  '<circle cx="322" cy="109.6" r="3.5"/><circle cx="364" cy="115.6" r="3.5"/><circle cx="406" cy="121.6" r="3.5"/>' +
  '<circle cx="448" cy="127.6" r="3.5"/><circle cx="490" cy="133.6" r="3.5"/>' +
  "</g>" +
  '<circle cx="238" cy="97.6" r="4.5" fill="#ffffff" stroke="#dc2626" stroke-width="2.2"/>' +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<rect x="82" y="48" width="218" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<text x="92" y="64" font-weight="600" fill="#dc2626">Extrapolated at t = 4.0 min: 33.2 °C</text>' +
  '<text x="92" y="80" fill="#334155">Baseline T_i = 21.0 °C · Max obs. = 32.4 °C</text>' +
  '<text x="245" y="182" font-weight="600" fill="#dc2626">Zn(s) added</text>' +
  '<text x="245" y="196" fill="#dc2626">at t = 4.0 min</text>' +
  "</g>" +
  "</svg>";

const SVG_TITRATION_CURVE =
  '<svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pH titration curve of 25.00 cubic centimetres of ethanoic acid against 0.1000 mol per cubic decimetre sodium hydroxide showing half-equivalence at 11.80 cubic centimetres and pH 4.76, equivalence point at 23.60 cubic centimetres and pH 8.72, and indicator transition bands for phenolphthalein and methyl orange">' +
  '<rect x="0" y="0" width="540" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<rect x="70" y="108" width="420" height="28.9" fill="#fce7f3" opacity="0.75"/>' +
  '<rect x="70" y="203.2" width="420" height="22.1" fill="#fef3c7" opacity="0.75"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="244" x2="490" y2="244"/><line x1="70" y1="210" x2="490" y2="210"/>' +
  '<line x1="70" y1="176" x2="490" y2="176"/><line x1="70" y1="142" x2="490" y2="142"/>' +
  '<line x1="70" y1="108" x2="490" y2="108"/><line x1="70" y1="74" x2="490" y2="74"/><line x1="70" y1="40" x2="490" y2="40"/>' +
  '<line x1="175" y1="40" x2="175" y2="278"/><line x1="280" y1="40" x2="280" y2="278"/>' +
  '<line x1="385" y1="40" x2="385" y2="278"/><line x1="490" y1="40" x2="490" y2="278"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="278" x2="500" y2="278"/><line x1="70" y1="278" x2="70" y2="32"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="295">0</text><text x="175" y="295">10</text><text x="280" y="295">20</text>' +
  '<text x="385" y="295">30</text><text x="490" y="295">40</text>' +
  '<text x="280" y="318" font-size="13" font-weight="600" fill="#0f172a">Volume of 0.1000 mol dm⁻³ NaOH(aq) added / cm³</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="282">0</text><text x="62" y="248">2</text><text x="62" y="214">4</text>' +
  '<text x="62" y="180">6</text><text x="62" y="146">8</text><text x="62" y="112">10</text>' +
  '<text x="62" y="78">12</text><text x="62" y="44">14</text>' +
  "</g>" +
  '<text x="24" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 24 160)">pH</text>' +
  '<polyline fill="none" stroke="#2563eb" stroke-width="2.6" points="70,228.9 91,214.6 133,205.1 193.9,197.1 259,188.4 301,177.7 313.6,167.0 317.8,129.8 322.0,92.5 343.0,79.6 385.0,73.0 437.5,69.2 490.0,67.2"/>' +
  '<line x1="193.9" y1="197.1" x2="193.9" y2="278" stroke="#059669" stroke-width="1.4" stroke-dasharray="4,4"/>' +
  '<line x1="70" y1="197.1" x2="193.9" y2="197.1" stroke="#059669" stroke-width="1.4" stroke-dasharray="4,4"/>' +
  '<line x1="317.8" y1="129.8" x2="317.8" y2="278" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="4,4"/>' +
  '<circle cx="193.9" cy="197.1" r="4.5" fill="#059669"/>' +
  '<circle cx="317.8" cy="129.8" r="4.5" fill="#dc2626"/>' +
  '<g font-family="system-ui, sans-serif" font-size="10.5">' +
  '<text x="330" y="126" font-weight="600" fill="#be185d">Phenolphthalein (pH 8.3–10.0)</text>' +
  '<text x="330" y="218" font-weight="600" fill="#b45309">Methyl orange (pH 3.1–4.4)</text>' +
  '<rect x="80" y="48" width="212" height="44" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<text x="90" y="65" font-weight="600" fill="#059669">Half-equiv.: V = 11.80 cm³, pH = 4.76</text>' +
  '<text x="90" y="82" font-weight="600" fill="#dc2626">Equivalence: V = 23.60 cm³, pH = 8.72</text>' +
  "</g>" +
  "</svg>";

const SVG_KINETICS_COLORIMETRY =
  '<svg viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Colorimetry graph of absorbance at 430 nanometres versus time from 0 to 240 seconds showing a linear decrease from absorbance 0.80 at 0 seconds to 0.20 at 240 seconds">' +
  '<rect x="0" y="0" width="540" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="232" x2="490" y2="232"/><line x1="70" y1="184" x2="490" y2="184"/>' +
  '<line x1="70" y1="136" x2="490" y2="136"/><line x1="70" y1="88" x2="490" y2="88"/><line x1="70" y1="40" x2="490" y2="40"/>' +
  '<line x1="140" y1="40" x2="140" y2="280"/><line x1="210" y1="40" x2="210" y2="280"/>' +
  '<line x1="280" y1="40" x2="280" y2="280"/><line x1="350" y1="40" x2="350" y2="280"/>' +
  '<line x1="420" y1="40" x2="420" y2="280"/><line x1="490" y1="40" x2="490" y2="280"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="280" x2="500" y2="280"/><line x1="70" y1="280" x2="70" y2="32"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="297">0</text><text x="140" y="297">40</text><text x="210" y="297">80</text>' +
  '<text x="280" y="297">120</text><text x="350" y="297">160</text><text x="420" y="297">200</text><text x="490" y="297">240</text>' +
  '<text x="280" y="319" font-size="13" font-weight="600" fill="#0f172a">Time t / s</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="284">0.00</text><text x="62" y="236">0.20</text><text x="62" y="188">0.40</text>' +
  '<text x="62" y="140">0.60</text><text x="62" y="92">0.80</text><text x="62" y="44">1.00</text>' +
  "</g>" +
  '<text x="20" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 20 160)">Absorbance A (430 nm)</text>' +
  '<line x1="70" y1="88" x2="490" y2="232" stroke="#2563eb" stroke-width="2.5"/>' +
  '<g stroke="#0f172a" stroke-width="1.4">' +
  '<line x1="70" y1="83.2" x2="70" y2="92.8"/><line x1="66" y1="83.2" x2="74" y2="83.2"/><line x1="66" y1="92.8" x2="74" y2="92.8"/>' +
  '<line x1="140" y1="107.2" x2="140" y2="116.8"/><line x1="136" y1="107.2" x2="144" y2="107.2"/><line x1="136" y1="116.8" x2="144" y2="116.8"/>' +
  '<line x1="210" y1="131.2" x2="210" y2="140.8"/><line x1="206" y1="131.2" x2="214" y2="131.2"/><line x1="206" y1="140.8" x2="214" y2="140.8"/>' +
  '<line x1="280" y1="155.2" x2="280" y2="164.8"/><line x1="276" y1="155.2" x2="284" y2="155.2"/><line x1="276" y1="164.8" x2="284" y2="164.8"/>' +
  '<line x1="350" y1="179.2" x2="350" y2="188.8"/><line x1="346" y1="179.2" x2="354" y2="179.2"/><line x1="346" y1="188.8" x2="354" y2="188.8"/>' +
  '<line x1="420" y1="203.2" x2="420" y2="212.8"/><line x1="416" y1="203.2" x2="424" y2="203.2"/><line x1="416" y1="212.8" x2="424" y2="212.8"/>' +
  '<line x1="490" y1="227.2" x2="490" y2="236.8"/><line x1="486" y1="227.2" x2="494" y2="227.2"/><line x1="486" y1="236.8" x2="494" y2="236.8"/>' +
  "</g>" +
  '<g fill="#1e293b">' +
  '<circle cx="70" cy="88" r="3.5"/><circle cx="140" cy="112" r="3.5"/><circle cx="210" cy="136" r="3.5"/>' +
  '<circle cx="280" cy="160" r="3.5"/><circle cx="350" cy="184" r="3.5"/><circle cx="420" cy="208" r="3.5"/><circle cx="490" cy="232" r="3.5"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<rect x="255" y="48" width="225" height="44" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<text x="265" y="65" font-weight="600" fill="#0f172a">Iodination of excess propanone</text>' +
  '<text x="265" y="82" fill="#334155">Beer–Lambert law: A = 500 [I₂] (430 nm)</text>' +
  "</g>" +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p1b",
  title: "Paper 1B · Data-Based & Experimental",
  paperType: "Paper 1B · Data-Based & Experimental",
  level: "SL",
  calculator: true,
  minutes: 45,
  questions: [
    // =========================================================================
    // DATASET 1 (Q01–Q05): CALORIMETRY COOLING CURVE & SPIRIT-BURNER ANALYSIS
    // =========================================================================

    // ===================== Q01: Cooling-Curve ΔH (SL) ========================
    {
      id: "exam-p1b-q01",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "enthalpy-calorimetry",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Read extrapolated ΔT at mixing time, compute q = mcΔT, and divide by n(CuSO₄) with sign",
      diagram: SVG_CALORIMETRY_CURVE,
      question:
        "**Dataset 1 — Calorimetry:** Excess zinc powder (`2.00 g`, `A_r = 65.38`) is added at `t = 4.0 min` to `50.0 cm³` of `0.250 mol dm⁻³ CuSO₄(aq)` in an insulated polystyrene cup (`Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)`). Assuming solution density `1.00 g cm⁻³` and `c = 4.18 J g⁻¹ K⁻¹`, use the extrapolated cooling curve to determine the experimental molar enthalpy change `ΔH` (in `kJ mol⁻¹`, to 3 significant figures, including the sign).",
      answer: { type: "number", value: -204, tolerance: 2, display: "-204 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 204, tolerance: 2 },
          feedback: "Temperature increased, so the reaction is exothermic and ΔH must carry a negative sign (−204 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: -191, tolerance: 2 },
          feedback: "You used the maximum observed temperature (32.4 °C, ΔT = 11.4 °C) instead of the extrapolated temperature at t = 4.0 min (33.2 °C, ΔT = 12.2 °C).",
        },
      ],
      hints: [
        "Read the extrapolated temperature rise at `t = 4.0 min`: `ΔT = 33.2 − 21.0 = 12.2 °C`.",
        "Calculate heat absorbed by the `50.0 g` solution: `q = 50.0 × 4.18 × 12.2` (convert J to kJ).",
        "Divide by the limiting amount `n(CuSO₄) = 0.0500 × 0.250 = 0.0125 mol` and attach a minus sign for an exothermic reaction.",
      ],
      solution: [
        "From the extrapolated line at `t = 4.0 min`, `ΔT = 33.2 − 21.0 = 12.2 °C`.",
        "Heat transferred to solution: `q = m c ΔT = 50.0 × 4.18 × 12.2 = 2549.8 J = 2.550 kJ`.",
        "Limiting reactant moles: `n(CuSO₄) = 0.0500 dm³ × 0.250 mol dm⁻³ = 0.0125 mol` (whereas `n(Zn) = 2.00 / 65.38 = 0.0306 mol` is in excess).",
        "Experimental molar enthalpy change: `ΔH = −q / n = −2.5498 / 0.0125 = −204 kJ mol⁻¹`.",
      ],
      commonError: "Using the raw peak reading (`32.4 °C`) instead of the extrapolated intersection (`33.2 °C`), or omitting the negative sign.",
    },

    // ===================== Q02: Thermometer Uncertainty Propagation (SL) =====
    {
      id: "exam-p1b-q02",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "enthalpy-calorimetry",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Add absolute uncertainties when subtracting two temperatures, then divide by ΔT",
      question:
        "**Dataset 1 (continued):** The digital thermometer used to record the baseline (`21.0 °C`) and cooling readings has a manufacturer uncertainty of `±0.1 °C` per reading. Because `ΔT = T_extrap − T_i` involves two temperature values, its absolute uncertainty is `±0.2 °C`. Calculate the percentage uncertainty in `ΔT = 12.2 °C` (in `%`, to 3 significant figures).",
      answer: { type: "number", value: 1.64, tolerance: 0.05, display: "1.64%" },
      traps: [
        {
          spec: { type: "number", value: 0.82, tolerance: 0.03 },
          feedback: "Subtracting two thermometer readings doubles the absolute uncertainty from ±0.1 °C to ±0.2 °C.",
        },
      ],
      hints: [
        "Percentage uncertainty equals `(absolute uncertainty / measured value) × 100`.",
        "Substitute `0.2 °C` and `12.2 °C` carefully.",
      ],
      solution: [
        "Absolute uncertainty in `ΔT = T_extrap − T_i`: `0.1 + 0.1 = ±0.2 °C`.",
        "Percentage uncertainty: `(0.2 / 12.2) × 100 = 1.639% ≈ 1.64%`.",
      ],
      commonError: "Forgetting to double `±0.1 °C` when computing a temperature difference `ΔT = T_final − T_initial`.",
    },

    // ===================== Q03: Systematic vs Random Error Critique (SL) =====
    {
      id: "exam-p1b-q03",
      kind: "written",
      topicId: "r1-energetics-spontaneity",
      guideRef: "enthalpy-calorimetry",
      level: "SL",
      difficulty: "core",
      commandTerm: "Evaluate",
      strategy: "Compare percentage error against random uncertainty, identify heat sinks, and justify cooling extrapolation",
      marks: 4,
      question:
        "**Dataset 1 (continued):** The accepted literature value for `Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)` is `−217 kJ mol⁻¹`, giving a percentage discrepancy of `6.0%` from the experimental result (`−204 kJ mol⁻¹`). Evaluate the accuracy of the investigation by comparing this discrepancy with the `1.6%` thermometer uncertainty, identifying two specific physical assumptions or losses responsible for the shortfall, and explaining why extrapolating the cooling line outperforms taking the maximum observed reading.",
      hints: [
        "When percentage discrepancy (`6.0%`) exceeds random measurement uncertainty (`1.6%`), what type of error dominates?",
        "Name concrete thermal sinks or approximation assumptions in `q = m c ΔT` (never write vague 'human error').",
        "Explain what happens to the solution temperature during the finite time the reaction takes to complete between `4.0` and `5.0 min`.",
      ],
      modelAnswer:
        "Because the `6.0%` discrepancy is far greater than the `1.6%` random uncertainty, systematic error dominates the experiment and makes the measured enthalpy less exothermic than the true value. First, thermal energy is absorbed by the polystyrene calorimeter, thermometer probe, and precipitated copper metal, and escapes by convection into the surrounding air. Second, the calculation assumes the aqueous salt mixture has the same specific heat capacity and density as pure water (`4.18 J g⁻¹ K⁻¹` and `1.00 g cm⁻³`). Extrapolating the linear cooling trend back to `t = 4.0 min` compensates for continuous heat loss occurring while the reaction is still taking place, recovering the idealized instantaneous temperature rise.",
      markScheme: [
        {
          point: "Concludes that systematic error dominates because the 6.0% discrepancy exceeds the 1.6% random uncertainty (giving a less exothermic result).",
          keywords: ["systematic error", "systematic"],
        },
        {
          point: "Identifies heat absorbed by the calorimeter/apparatus or heat lost to the surrounding air/environment.",
          keywords: ["absorbed by the polystyrene", "calorimeter", "surrounding air", "heat lost", "heat loss"],
        },
        {
          point: "Identifies the assumption that the solution has pure water's specific heat capacity (4.18) or density (1.00).",
          keywords: ["pure water", "specific heat capacity", "density"],
        },
        {
          point: "Explains that extrapolation compensates for heat lost during the finite reaction time to estimate the instantaneous temperature rise.",
          keywords: ["compensates", "instantaneous", "while the reaction"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No relevant chemical evaluation or relies solely on 'human error'.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Identifies systematic heat loss or one calorimetric assumption, but lacks quantitative comparison to random uncertainty or clear justification of extrapolation.",
          indicators: ["Mentions heat loss to surroundings without linking 6.0% vs 1.6%."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explicitly contrasts 6.0% discrepancy with 1.6% random uncertainty to diagnose systematic error, specifies two physical sources/assumptions, and clearly justifies cooling-curve extrapolation.",
          indicators: ["Links extrapolation to heat loss occurring during the reaction interval."],
        },
      ],
      commonError: "Blaming 'human error' or misreading the thermometer instead of diagnosing systematic heat sinks and aqueous heat-capacity assumptions.",
    },

    // ===================== Q04: Spirit-Burner Combustion ΔH_c (SL) ===========
    {
      id: "exam-p1b-q04",
      kind: "short",
      topicId: "r1-energetics-spontaneity",
      guideRef: "hess-bond-enthalpies-fuels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use water mass (not fuel mass) in q = mcΔT, then divide by moles of ethanol burned",
      question:
        "**Dataset 1 — Spirit-Burner Comparison:** In a parallel experiment, a student burns `0.850 g` of ethanol (`C₂H₅OH`, `M = 46.08 g mol⁻¹`) beneath a copper can holding `150.0 g` of water (`c = 4.18 J g⁻¹ K⁻¹`). The water temperature rises from `20.5 °C` to `48.0 °C`. Calculate the experimental enthalpy of combustion `ΔH_c` of ethanol (in `kJ mol⁻¹`, to 3 significant figures, including sign).",
      answer: { type: "number", value: -935, tolerance: 5, display: "-935 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 935, tolerance: 5 },
          feedback: "Combustion is exothermic — include the negative sign (−935 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: -5.3, tolerance: 0.2 },
          feedback: "Use the mass of WATER (150.0 g) in q = mcΔT, not the mass of ethanol (0.850 g).",
        },
      ],
      hints: [
        "Find `ΔT = 48.0 − 20.5 = 27.5 °C`, then compute `q = 150.0 × 4.18 × 27.5` (in J, convert to kJ).",
        "Find moles of ethanol burned: `n = 0.850 / 46.08`.",
        "Divide `−q` (in kJ) by `n` (in mol).",
      ],
      solution: [
        "Temperature rise: `ΔT = 48.0 − 20.5 = 27.5 °C`.",
        "Heat absorbed by water: `q = 150.0 × 4.18 × 27.5 = 17 242.5 J = 17.24 kJ`.",
        "Amount of ethanol burned: `n = 0.850 / 46.08 = 0.01845 mol`.",
        "Experimental `ΔH_c = −17.2425 / 0.018446 = −935 kJ mol⁻¹`.",
      ],
      commonError: "Substituting the fuel mass (`0.850 g`) instead of the water mass (`150.0 g`) into `q = mcΔT`.",
    },

    // ===================== Q05: Spirit-Burner Systematic Shortfall (SL) ======
    {
      id: "exam-p1b-q05",
      kind: "written",
      topicId: "r1-energetics-spontaneity",
      guideRef: "hess-bond-enthalpies-fuels",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Link three distinct physical factors (heat loss, incomplete combustion, evaporation) to smaller |ΔH|",
      marks: 3,
      question:
        "**Dataset 1 (continued):** The IB Data Booklet value for `ΔH_c⊖(C₂H₅OH)` is `−1367 kJ mol⁻¹`, yet the spirit-burner experiment yielded only `−935 kJ mol⁻¹`. Explain **three** distinct physical reasons why the spirit-burner value is much smaller in magnitude than the literature value.",
      hints: [
        "Consider where heat goes instead of into the water, what black deposit often coats the bottom of the can, and what happens to volatile liquid ethanol on an uncapped wick.",
        "Explain how each factor reduces the measured `q` or inflates the recorded mass loss `Δm` (and hence `n`).",
      ],
      modelAnswer:
        "First, large amounts of thermal energy escape into the surrounding air and heat the copper can rather than the water, reducing the measured temperature rise `ΔT`. Second, incomplete combustion occurs due to limited oxygen supply, forming black carbon soot (`C(s)`) or carbon monoxide (`CO`) and releasing less heat per mole than complete oxidation to `CO₂`. Third, volatile ethanol evaporates from the uncapped wick before or after burning, inflating the recorded mass loss `Δm` and overestimating the moles burned (`n`), which makes `|q / n|` smaller.",
      markScheme: [
        {
          point: "Significant heat loss to the surrounding air and/or heating of the copper can/calorimeter reduces measured ΔT.",
          keywords: ["surrounding air", "copper can", "escapes", "escape"],
        },
        {
          point: "Incomplete combustion produces carbon soot or carbon monoxide, releasing less energy per mole.",
          keywords: ["incomplete combustion", "soot", "carbon monoxide"],
        },
        {
          point: "Evaporation of volatile ethanol from the wick inflates recorded mass loss / moles burned (n).",
          keywords: ["evaporat", "volatile", "wick"],
        },
      ],
      commonError: "Listing three variations of heat loss instead of giving three distinct chemical/physical mechanisms (heat loss, incomplete combustion, fuel evaporation).",
    },

    // =========================================================================
    // DATASET 2 (Q06–Q10): VOLUMETRIC TITRATION, UNCERTAINTIES & pH CURVE [HL]
    // =========================================================================

    // ===================== Q06: Concordant Titres & [CH₃COOH] (SL) ===========
    {
      id: "exam-p1b-q06",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "stoichiometry-titrations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Average only concordant titres (within ±0.10 cm³), then solve 1 : 1 titration moles",
      question:
        "**Dataset 2 — Acid–Base Titration:** A student pipettes `25.00 cm³` (`±0.04 cm³`) aliquots of diluted aqueous ethanoic acid (`CH₃COOH`) into conical flasks and titrates against standard `0.1000 mol dm⁻³ NaOH(aq)` (`CH₃COOH + NaOH → CH₃COONa + H₂O`).\n\n| Trial | Rough | 1 | 2 | 3 |\n|---|---|---|---|---|\n| Initial burette reading / `cm³` (`±0.05`) | `0.20` | `0.15` | `1.10` | `0.40` |\n| Final burette reading / `cm³` (`±0.05`) | `24.50` | `23.70` | `24.75` | `24.00` |\n| Titre / `cm³` (`±0.10`) | `24.30` | `23.55` | `23.65` | `23.60` |\n\nUsing only the concordant titres (within `±0.10 cm³`), calculate the concentration of the ethanoic acid solution (in `mol dm⁻³`, to 3 significant figures).",
      answer: { type: "number", value: 0.0944, tolerance: 0.0005, display: "0.0944 mol dm⁻³" },
      traps: [
        {
          spec: { type: "number", value: 0.0951, tolerance: 0.0005 },
          feedback: "Exclude the rough trial (24.30 cm³) — it is not concordant with Trials 1–3 (23.55, 23.65, 23.60 cm³).",
        },
        {
          spec: { type: "number", value: 0.106, tolerance: 0.001 },
          feedback: "Check which volume belongs to NaOH (23.60 cm³) and which belongs to the acid (25.00 cm³): c_acid = c_NaOH × V_NaOH / V_acid.",
        },
      ],
      hints: [
        "Trials 1, 2, and 3 (`23.55`, `23.65`, `23.60 cm³`) agree within `0.10 cm³`; discard the rough trial (`24.30 cm³`).",
        "Calculate the mean concordant titre (`23.60 cm³`), convert to `dm³`, and multiply by `0.1000 mol dm⁻³` to get `n(NaOH)`.",
        "Since stoichiometry is `1 : 1`, divide `n(CH₃COOH)` by `0.02500 dm³`.",
      ],
      solution: [
        "Concordant titres (Trials 1–3): `V_mean = (23.55 + 23.65 + 23.60) / 3 = 23.60 cm³ = 0.02360 dm³`.",
        "Amount of `NaOH`: `n(NaOH) = 0.1000 × 0.02360 = 2.360 × 10⁻³ mol`.",
        "From `1 : 1` stoichiometry, `n(CH₃COOH) = 2.360 × 10⁻³ mol`.",
        "Concentration: `[CH₃COOH] = 2.360 × 10⁻³ / 0.02500 = 0.0944 mol dm⁻³`.",
      ],
      commonError: "Including the rough overshoot (`24.30 cm³`) in the mean titre.",
    },

    // ===================== Q07: Glassware Uncertainty Propagation (SL) =======
    {
      id: "exam-p1b-q07",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "stoichiometry-titrations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Sum percentage uncertainties of titre (±0.10 cm³) and pipette (±0.04 cm³)",
      question:
        "**Dataset 2 (continued):** Assume the standard `0.1000 mol dm⁻³ NaOH(aq)` concentration has negligible uncertainty. Using the burette titre `23.60 ± 0.10 cm³` (two burette readings of `±0.05 cm³` each) and pipette volume `25.00 ± 0.04 cm³`, calculate the total percentage uncertainty in `[CH₃COOH]` (in `%`, to 2 significant figures).",
      answer: { type: "number", value: 0.58, tolerance: 0.02, display: "0.58%" },
      traps: [
        {
          spec: { type: "number", value: 0.37, tolerance: 0.02 },
          feedback: "A burette titre subtracts two readings (final − initial), so its absolute uncertainty is 2 × 0.05 = ±0.10 cm³, not ±0.05 cm³.",
        },
      ],
      hints: [
        "When multiplying or dividing (`c_acid = c_NaOH × V_titre / V_pipette`), add the **percentage** uncertainties.",
        "Compute `(0.10 / 23.60) × 100` for the burette and `(0.04 / 25.00) × 100` for the pipette, then add them.",
      ],
      solution: [
        "Burette percentage uncertainty: `(0.10 / 23.60) × 100 = 0.424%`.",
        "Pipette percentage uncertainty: `(0.04 / 25.00) × 100 = 0.160%`.",
        "Total percentage uncertainty: `0.424% + 0.160% = 0.584% ≈ 0.58%` (giving `0.0944 ± 0.0006 mol dm⁻³`).",
      ],
      commonError: "Using `±0.05 cm³` instead of `±0.10 cm³` for a burette volume difference, or adding raw absolute uncertainties (`0.10 + 0.04`).",
    },

    // ===================== Q08: Titration Procedural Critique (SL) ===========
    {
      id: "exam-p1b-q08",
      kind: "written",
      topicId: "r2-amount-rate-extent",
      guideRef: "stoichiometry-titrations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      strategy: "Track how rinsing water or an air bubble changes moles vs concentration in each vessel",
      marks: 3,
      question:
        "**Dataset 2 (continued):** Explain the effect of each procedural detail on the calculated concentration of ethanoic acid:\n1. Why the burette must be rinsed with `NaOH(aq)` rather than left wet with distilled water.\n2. Why rinsing the conical flask walls with distilled water during the titration does **not** change the endpoint titre.\n3. How an air bubble trapped below the burette tap that dislodges mid-titration biases the calculated `[CH₃COOH]`.",
      hints: [
        "In the burette, leftover water dilutes the `NaOH` concentration (`mol dm⁻³`).",
        "In the conical flask, adding distilled water changes total volume, but does it change the fixed **moles** of acid pipetted?",
        "When an air bubble leaves the tip, the burette scale drops without delivering real `NaOH` — does the recorded titre become too large or too small?",
      ],
      modelAnswer:
        "1. Residual water inside the burette would dilute the `NaOH(aq)` titrant, lowering its true concentration and causing a larger volume to be required for neutralization. 2. Rinsing the conical flask with distilled water does not alter the fixed number of moles of `CH₃COOH` delivered by the pipette, so the same number of moles (and volume) of `NaOH` is needed at equivalence. 3. When a trapped air bubble dislodges, volume is registered on the burette scale without delivering `NaOH`, inflating the recorded titre and making the calculated acid concentration artificially too high (overestimated).",
      markScheme: [
        {
          point: "Water in the burette dilutes the NaOH titrant (lowering its concentration and increasing the titre).",
          keywords: ["dilute", "lowering its true concentration", "lower concentration"],
        },
        {
          point: "Water in the conical flask does not change the fixed number of moles of acid present.",
          keywords: ["fixed number of moles", "moles of", "does not alter"],
        },
        {
          point: "A dislodged air bubble inflates the recorded titre, causing the calculated acid concentration to be overestimated / too high.",
          keywords: ["overestimat", "too high", "inflat", "larger titre"],
        },
      ],
      commonError: "Claiming that rinsing the conical flask with water dilutes the acid and reduces the titre (forgetting that total moles of acid are conserved).",
    },

    // ===================== Q09: Half-Equivalence pK_a -> K_a (HL) ============
    {
      id: "exam-p1b-q09",
      kind: "short",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "weak-acids-buffers-titrations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "At half-equivalence [HA] = [A⁻] so pH = pK_a; invert via K_a = 10^(−pK_a)",
      diagram: SVG_TITRATION_CURVE,
      question:
        "**Dataset 2 (HL Extension):** The pH titration curve for this exact titration (`25.00 cm³` of the aqueous `CH₃COOH` sample with `0.1000 mol dm⁻³ NaOH`) was logged with a calibrated pH probe, as shown above. Using the half-equivalence point (`V = 11.80 cm³`, `pH = 4.76`), determine the acid dissociation constant `K_a` of ethanoic acid (give your answer in standard form to 3 significant figures, without units).",
      answer: { type: "number", value: 1.74e-5, tolerance: 0.05e-5, standardForm: true, display: "1.74 × 10⁻⁵" },
      traps: [
        {
          spec: { type: "number", value: 1.91e-9, tolerance: 0.1e-9 },
          feedback: "That uses the equivalence point pH (8.72) instead of the half-equivalence point pH (4.76 = pK_a).",
        },
      ],
      hints: [
        "At half-equivalence (`V = {{1/2}} V_eq = 11.80 cm³`), half of the weak acid has been neutralized, so `[CH₃COOH] = [CH₃COO⁻]`.",
        "By Henderson–Hasselbalch (`pH = pK_a + log([A⁻]/[HA])`), `pH = pK_a = 4.76`.",
        "Calculate `K_a = 10^(−4.76)` in standard form.",
      ],
      solution: [
        "At the half-equivalence point (`V = 11.80 cm³`), `[CH₃COO⁻] = [CH₃COOH]`, so `pK_a = pH = 4.76`.",
        "Therefore `K_a = 10^(−4.76) = 1.738 × 10⁻⁵ ≈ 1.74 × 10⁻⁵`.",
      ],
      commonError: "Reading the equivalence point pH (`8.72`) or the initial pH (`2.89`) as `pK_a` instead of the half-equivalence point (`4.76`).",
    },

    // ===================== Q10: Equivalence Salt Hydrolysis & Indicator (HL) =
    {
      id: "exam-p1b-q10",
      kind: "written",
      topicId: "r3-1-proton-electron-transfer",
      guideRef: "weak-acids-buffers-titrations-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Justify",
      strategy: "Explain conjugate-base hydrolysis for pH > 7 and match indicator range to steep vertical inflection",
      marks: 4,
      question:
        "**Dataset 2 (HL Extension):** Refer to the titration curve above (`V_eq = 23.60 cm³`, `pH_eq = 8.72`, steep vertical region `pH 7.0–10.5`). Explain why the equivalence point lies above `pH 7` (include an ionic equation), and justify choosing phenolphthalein (`pH 8.3–10.0`) rather than methyl orange (`pH 3.1–4.4`) to detect the endpoint.",
      hints: [
        "At equivalence, all `CH₃COOH` has been converted into its conjugate base `CH₃COO⁻(aq)`. How does `CH₃COO⁻` react with water?",
        "For a sharp endpoint within a single drop of `NaOH`, where must an indicator's transition range sit on the pH curve?",
        "Look at where the amber methyl orange band intersects the blue curve on the graph.",
      ],
      modelAnswer:
        "At equivalence, the solution contains sodium ethanoate (`CH₃COONa`), whose ethanoate conjugate base undergoes salt hydrolysis with water to produce hydroxide ions: `CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq)`. Because `[OH⁻] > [H⁺]`, the solution is basic (`pH = 8.72 > 7`). Phenolphthalein is suitable because its entire transition range (`8.3–10.0`) falls cleanly inside the steep vertical rise (`7.0–10.5`), producing an abrupt colour change within one drop of titrant. Methyl orange (`3.1–4.4`) is unsuitable because it changes colour gradually inside the gently sloping buffer region well before equivalence.",
      markScheme: [
        {
          point: "Identifies salt hydrolysis of the conjugate base CH₃COO⁻ releasing OH⁻ ions (making [OH⁻] > [H⁺]).",
          keywords: ["hydrolysis", "conjugate base", "hydroxide"],
        },
        {
          point: "Provides the balanced ionic equilibrium equation CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻.",
          keywords: ["ch₃coo⁻", "ch3coo-", "ch₃cooh + oh⁻", "ch3cooh + oh-"],
        },
        {
          point: "Justifies phenolphthalein because its transition range lies entirely within the steep vertical inflection (sharp endpoint).",
          keywords: ["entire", "steep vertical", "abrupt", "sharp"],
        },
        {
          point: "Rejects methyl orange because its range falls in the buffer region before equivalence, giving a gradual premature colour change.",
          keywords: ["buffer region", "before equivalence", "gradual", "premature"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid explanation of equivalence pH or indicator selection.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "States that the salt is basic or picks phenolphthalein correctly, but omits the hydrolysis equation or fails to contrast both indicator ranges against the curve.",
          indicators: ["Selects phenolphthalein without explaining why methyl orange fails."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Explains conjugate-base hydrolysis with a balanced ionic equation, matches phenolphthalein to the steep vertical region, and explains why methyl orange fails in the buffer region.",
          indicators: ["Clearly links both indicator bands to the slope of the pH curve."],
        },
      ],
      commonError: "Writing 'NaOH is a strong base so pH > 7' without explaining hydrolysis of the `CH₃COO⁻` conjugate base (there is NO excess `NaOH` at equivalence!).",
    },

    // =========================================================================
    // DATASET 3 (Q11–Q15): COLORIMETRY KINETICS, ARRHENIUS, TLC & IR/MS
    // =========================================================================

    // ===================== Q11: Colorimetry Rate Calculation (SL) ============
    {
      id: "exam-p1b-q11",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "collision-theory-kinetics",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert absorbance change to Δ[I₂] using Beer–Lambert law, then divide by Δt",
      diagram: SVG_KINETICS_COLORIMETRY,
      question:
        "**Dataset 3 — Colorimetry Kinetics:** The acid-catalysed iodination of excess propanone (`CH₃COCH₃ + I₂ → CH₃COCH₂I + H⁺ + I⁻`) is monitored in a colorimeter at `430 nm`. Using the Beer–Lambert calibration `A = 500 [I₂]` (where `[I₂]` is in `mol dm⁻³`) and the linear plot dropping from `A = 0.80` at `t = 0 s` to `A = 0.20` at `t = 240 s`, calculate the rate of consumption of `I₂` (in `mol dm⁻³ s⁻¹`, in standard form to 3 significant figures).",
      answer: { type: "number", value: 5.00e-6, tolerance: 0.1e-6, standardForm: true, display: "5.00 × 10⁻⁶ mol dm⁻³ s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 2.50e-3, tolerance: 0.05e-3 },
          feedback: "That is |ΔA / Δt| = 2.50 × 10⁻³ s⁻¹ — remember to divide by the Beer–Lambert constant 500 dm³ mol⁻¹ to convert absorbance into [I₂].",
        },
      ],
      hints: [
        "Find the initial and final iodine concentrations using `[I₂] = A / 500`: `[I₂]_0 = 0.80 / 500` and `[I₂]_{240} = 0.20 / 500`.",
        "Calculate the positive rate of consumption `−Δ[I₂] / Δt = ([I₂]_0 − [I₂]_{240}) / 240`.",
      ],
      solution: [
        "Initial concentration: `[I₂]_0 = 0.80 / 500 = 1.60 × 10⁻³ mol dm⁻³`.",
        "Concentration at `240 s`: `[I₂]_{240} = 0.20 / 500 = 0.40 × 10⁻³ mol dm⁻³`.",
        "Rate of consumption: `−Δ[I₂] / Δt = (1.60 − 0.40) × 10⁻³ / 240 = 1.20 × 10⁻³ / 240 = 5.00 × 10⁻⁶ mol dm⁻³ s⁻¹`.",
      ],
      commonError: "Reporting `|ΔA / Δt|` (`2.50 × 10⁻³ s⁻¹`) without dividing by `εl = 500 dm³ mol⁻¹`.",
    },

    // ===================== Q12: Zero Order in I₂ & RDS + Filter (HL) =========
    {
      id: "exam-p1b-q12",
      kind: "written",
      topicId: "r2-amount-rate-extent",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Deduce",
      strategy: "Link constant gradient of [I₂] vs t to zero order, exclude I₂ from RDS, and cite complementary colour",
      marks: 3,
      question:
        "**Dataset 3 (HL Extension):** From the linear absorbance–time plot above (where propanone and `H⁺` are in large excess): (a) deduce the reaction order with respect to `I₂` with graphical justification, (b) state what this implies about the involvement of `I₂` in the mechanism's rate-determining step (RDS), and (c) explain why a blue (`430 nm`) filter is chosen for yellow-brown aqueous iodine.",
      hints: [
        "Because `A ∝ [I₂]`, a straight line with constant negative gradient means the rate stays completely constant even as `[I₂]` falls.",
        "If changing `[I₂]` has zero effect on the rate, can `I₂` react during or before the slow rate-determining step?",
        "What is the colour relationship between blue light (`430 nm`) and yellow-brown iodine solution?",
      ],
      modelAnswer:
        "(a) Since `A ∝ [I₂]` and the plot is a straight line with a constant negative slope, the reaction rate stays unchanged as `[I₂]` falls, confirming a zero-order dependence on iodine. (b) Consequently, `I₂` does not participate in (or before) the slow rate-determining step — it reacts in a fast step after the RDS. (c) Blue (`430 nm`) is the complementary colour to yellow-brown iodine, maximizing light absorption and giving the greatest sensitivity to small changes in `[I₂]`.",
      markScheme: [
        {
          point: "Deduces zero order with respect to I₂ because the constant slope shows rate is independent of [I₂].",
          keywords: ["zero order", "zero-order", "0th order", "constant negative slope"],
        },
        {
          point: "States that I₂ is not involved in (or reacts in a fast step after) the rate-determining step.",
          keywords: ["not participate", "not involved", "fast step after", "after the rds"],
        },
        {
          point: "Explains that blue is the complementary colour to yellow-brown I₂, maximizing absorbance sensitivity.",
          keywords: ["complementary", "maximizing", "maximum absorbance", "sensitivity"],
        },
      ],
      commonError: "Confusing a straight concentration–time line (zero order) with a first-order exponential decay.",
    },

    // ===================== Q13: Arrhenius Plot Gradient -> E_a (HL) ==========
    {
      id: "exam-p1b-q13",
      kind: "short",
      topicId: "r2-amount-rate-extent",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Use Arrhenius linear gradient m = −E_a / R and convert joules to kilojoules",
      question:
        "**Dataset 3 (HL Extension):** Repeating the iodination experiment across five temperatures from `293 K` to `333 K` yields a linear Arrhenius graph of `ln k` against `1 / T` (`K⁻¹`) with a best-fit gradient of `−9.85 × 10³ K` (`R = 8.31 J K⁻¹ mol⁻¹`). Calculate the activation energy `E_a` for this reaction (in `kJ mol⁻¹`, to 3 significant figures).",
      answer: { type: "number", value: 81.9, tolerance: 0.4, display: "81.9 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 81900, tolerance: 400 },
          feedback: "Convert from J mol⁻¹ to kJ mol⁻¹ by dividing by 1000 (81.9 kJ mol⁻¹).",
        },
        {
          spec: { type: "number", value: -81.9, tolerance: 0.4 },
          feedback: "Gradient = −E_a / R, so the minus signs cancel — activation energy E_a is always positive (+81.9 kJ mol⁻¹).",
        },
      ],
      hints: [
        "Take the natural log of `k = A e^(−E_a / RT)`: `ln k = −(E_a / R)(1 / T) + ln A`.",
        "Equate the gradient `−E_a / R = −9.85 × 10³ K`, solve for `E_a` in `J mol⁻¹`, and divide by `1000`.",
      ],
      solution: [
        "From `ln k = −(E_a / R)(1 / T) + ln A`, gradient `= −E_a / R = −9.85 × 10³ K`.",
        "`E_a = 9.85 × 10³ × 8.31 = 81 853.5 J mol⁻¹ = 81.9 kJ mol⁻¹`.",
      ],
      commonError: "Forgetting to divide by `1000` to convert `J mol⁻¹` into `kJ mol⁻¹`, or quoting a negative activation energy.",
    },

    // ===================== Q14: TLC Retardation Factor R_f (SL) ==============
    {
      id: "exam-p1b-q14",
      kind: "short",
      topicId: "s2-bonding-materials",
      guideRef: "covalent-vsepr-imfs",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Divide distance travelled by spot from baseline by distance travelled by solvent front",
      question:
        "**Dataset 3 — Product Chromatography:** A student checks the purity of the organic extract by thin-layer chromatography (TLC) on a polar silica gel plate using a relatively non-polar hexane/ethyl acetate mobile phase. Measured from the pencil baseline, the solvent front travels `7.50 cm`, spot `P` travels `5.25 cm`, and spot `Q` travels `2.10 cm`. Calculate the retardation factor `R_f` of spot `P` (to 2 decimal places, without units).",
      answer: { type: "number", value: 0.7, tolerance: 0.01, display: "0.70" },
      traps: [
        {
          spec: { type: "number", value: 1.43, tolerance: 0.02 },
          feedback: "R_f is always ≤ 1: divide spot distance (5.25 cm) by solvent-front distance (7.50 cm), not the other way around.",
        },
        {
          spec: { type: "number", value: 0.28, tolerance: 0.01 },
          feedback: "0.28 is the R_f value of spot Q (2.10 / 7.50); the question asks for spot P (5.25 / 7.50).",
        },
      ],
      hints: [
        "Recall `R_f = (distance travelled by spot) / (distance travelled by solvent front)`.",
        "Divide `5.25 cm` by `7.50 cm`.",
      ],
      solution: [
        "`R_f(P) = 5.25 / 7.50 = 0.70` (dimensionless, and `R_f(Q) = 2.10 / 7.50 = 0.28`).",
      ],
      commonError: "Inverting the fraction (`7.50 / 5.25 > 1`) or adding units to the dimensionless `R_f` ratio.",
    },

    // ===================== Q15: TLC Polarity + Combined IR/MS Analysis (SL) ==
    {
      id: "exam-p1b-q15",
      kind: "written",
      topicId: "s3-2-organic-classification",
      guideRef: "ihd-ms-ir-spectroscopy",
      level: "SL",
      difficulty: "core",
      commandTerm: "Analyse",
      strategy: "Link stronger polar adsorption to lower R_f, then confirm propanone via M⁺, IR C=O, and m/z 43",
      marks: 4,
      question:
        "**Dataset 3 (continued):** On the polar silica TLC plate, spot `P` has `R_f = 0.70` and spot `Q` has `R_f = 0.28`. Separately, an organic starting sample is analysed by IR and mass spectrometry, showing a molecular ion `M⁺` at `m/z = 58`, a strong fragment at `m/z = 43`, no peak at `m/z = 29`, a sharp IR band at `1715 cm⁻¹`, and no broad IR absorption above `3100 cm⁻¹`. Analyse both datasets to: (a) explain which TLC spot (`P` or `Q`) is more polar, and (b) deduce the exact identity of the `m/z = 58` compound (citing IR and MS evidence).",
      hints: [
        "Silica gel (`SiO₂` with surface `−OH` groups) is polar — does a more polar molecule adsorb more strongly to the stationary phase or move faster with the non-polar solvent?",
        "For `m/z = 58`, compare `1715 cm⁻¹` (`C=O`), absence of `O−H` (`>3100 cm⁻¹`), and the loss `58 − 43 = 15` (`CH₃` radical).",
        "Why does the absence of `m/z = 29` (`CHO⁺` / `C₂H₅⁺`) distinguish propanone from propanal?",
      ],
      modelAnswer:
        "(a) Spot `Q` (`R_f = 0.28`) is more polar because it forms stronger dipole–dipole or hydrogen-bonding interactions with the polar silica stationary phase, adsorbing more tightly and travelling a shorter distance than the less polar spot `P`. (b) The sharp `1715 cm⁻¹` IR absorption confirms a `C=O` carbonyl group, while the lack of broad absorption above `3100 cm⁻¹` rules out an alcohol or carboxylic acid. The `m/z = 58` molecular ion corresponds to `C₃H₆O`, and the strong `m/z = 43` fragment corresponds to `CH₃CO⁺` after losing a `−CH₃` (`15`) group (whereas propanal would produce `m/z = 29` for `C₂H₅⁺`/`CHO⁺`). The compound is therefore propanone (`CH₃COCH₃`).",
      markScheme: [
        {
          point: "Identifies spot Q as more polar due to stronger intermolecular attraction/adsorption to the polar silica stationary phase.",
          keywords: ["spot q", "adsorb", "stationary phase"],
        },
        {
          point: "Assigns the 1715 cm⁻¹ IR peak to a C=O carbonyl bond and notes absence of an O−H group.",
          keywords: ["carbonyl", "c=o", "rules out an alcohol"],
        },
        {
          point: "Links m/z = 43 to CH₃CO⁺ (loss of 15 / CH₃) and uses absence of m/z = 29 to rule out propanal.",
          keywords: ["ch3co+", "loss of 15", "losing a -ch3", "propanal"],
        },
        {
          point: "Deduces the exact compound as propanone (CH₃COCH₃).",
          keywords: ["propanone", "ch3coch3"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "No valid polarity reasoning or spectroscopic assignment.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Correctly identifies spot Q or the C=O stretch, but does not explain stationary-phase adsorption or fails to distinguish propanone from propanal.",
          indicators: ["Names propanone without justifying m/z = 43 vs m/z = 29."],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Fully explains spot Q's lower R_f via polar silica adsorption and unambiguously confirms propanone by integrating C=O IR data, absence of O−H, M⁺ = 58, and the m/z = 43 fragment.",
          indicators: ["Uses both IR and MS fragmentation to rule out propanal and alcohols."],
        },
      ],
      commonError: "Thinking a higher `R_f` always means 'more polar' (on polar silica, more polar solutes are retained MORE strongly and therefore have a LOWER `R_f`).",
    },
  ],
};
