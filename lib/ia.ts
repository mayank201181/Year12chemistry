// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Chemistry (First Assessment 2025).
// Scientific Investigation: 20% of final grade (SL & HL), max 3,000 words,
// 24 marks across 4 equal criteria (6 marks each).
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Chemistry Scientific Investigation (IA)",
  subtitle: "First Assessment 2025 · 20% of final grade (SL & HL) · 24 marks total · Max 3,000 words",
  hoursNote: "10 hours dedicated to the IA investigation within the statutory practical programme (40 h SL / 60 h HL total, including 10 h Collaborative Sciences Project).",
  wordLimit: 3000,
  totalMarks: 24,
  weightSL: "20%",
  weightHL: "20%",
  keyChanges2025: [
    "Old 'Personal Engagement' and 'Communication' standalone criteria are GONE — replaced by 4 equally weighted 6-mark criteria (A Research Design, B Data Analysis, C Conclusion, D Evaluation).",
    "Strict **3,000-word cap** replaces the old 12-page limit (data tables, graphs, chemical equations, sample calculations, citations, and bibliography are excluded; examiners stop reading at 3,000 words).",
    "Collaborative data collection (groups up to 3 sharing an experimental protocol) is allowed ONLY if every student has a distinct **independent or dependent variable** and writes a 100% independent report.",
    "Wet-lab investigations, validated simulations, or open chemical databases (e.g. NIST WebBook, Cambridge Structural Database, atmospheric CO₂ datasets) are all eligible.",
  ],
  criteria: [
    {
      code: "A",
      name: "Research Design",
      maxMarks: 6,
      summary: "Formulates a focused, measurable Research Question anchored in real chemical theory, with a reproducible procedure, explicit variable control, and authentic green-chemistry safety & disposal.",
      topBandMustHave: [
        "RQ explicitly states the Independent Variable (IV with concentrations/temperatures/units), Dependent Variable (DV with analytical method & units), and exact chemical system/reaction.",
        "Balanced chemical equation(s) and quantitative model (e.g. Arrhenius ln k vs 1/T, Beer–Lambert A = εlc, Henderson–Hasselbalch, or calorimetry q = mcΔT) predicting the expected relationship.",
        "Control variables table stating WHAT is controlled, HOW it is kept constant (e.g. thermostatted water bath, volumetric pipette, same reagent batch), and WHY varying it biases the DV.",
        "Sufficient range (≥ 5 IV increments spanning a chemically meaningful interval) and repeats (≥ 3–5 concordant titres/trials per IV value).",
        "Specific chemical hazard & disposal notes using real GHS risks (corrosive, oxidizer, irritant, aquatic toxicity) and safe neutralization/waste disposal — never generic 'wear goggles' filler.",
      ],
      bands: [
        { marks: "5–6", descriptor: "RQ is explained in a specific, appropriate chemical context; methodology gives complete, justified control of variables, safety/environmental considerations, and reproducible collection of sufficient relevant data." },
        { marks: "3–4", descriptor: "RQ is stated in a broad context; methodology allows collection of relevant data but omits key justifications, concentrations/apparatus uncertainties, or variable-control details." },
        { marks: "1–2", descriptor: "RQ is vague or unmeasurable; methodology lacks critical reagent quantities, controls, safety, or sufficient range/trials." },
      ],
    },
    {
      code: "B",
      name: "Data Analysis",
      maxMarks: 6,
      summary: "Records quantitative & qualitative lab data cleanly with glassware/balance uncertainties, propagates uncertainties accurately, and plots linearized graphs with error bars and max/min gradients.",
      topBandMustHave: [
        "Raw data table with column headings: quantity / symbol / unit / ± apparatus uncertainty (burette ±0.05 cm³ per reading → ±0.10 cm³ per titre; 25.0 cm³ pipette ±0.04 cm³; balance ±0.001 g) with matching decimal places.",
        "Qualitative observations recorded (colour change at endpoint, effervescence, precipitate turbidity, soot on calorimeter) that feed straight into Criterion D.",
        "One complete worked sample calculation for mean, molar conversion/processed value, AND percentage/absolute uncertainty propagation (show how glassware + random trial spread combine).",
        "Scatter/linearized graph with informative title, labelled axes + units, error bars, best-fit line (equation & R²), and max/min gradient lines where extracting a physical constant (e.g. E_a or ε).",
        "Final processed values rounded to match the decimal place of their 1 s.f. (or 2 s.f. if leading digit 1) uncertainty.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Recording and processing are clear, precise, and free of major errors; uncertainties are appropriately propagated and shown on graphs; impact of uncertainties on processing is accurately addressed." },
        { marks: "3–4", descriptor: "Data are processed appropriately with minor omissions or inconsistencies in significant figures, decimal places, or uncertainty propagation." },
        { marks: "1–2", descriptor: "Major stoichiometric or arithmetic errors, missing apparatus uncertainties, or inappropriate graphing." },
      ],
    },
    {
      code: "C",
      name: "Conclusion",
      maxMarks: 6,
      summary: "Answers the RQ directly using processed chemical results and uncertainties, then rigorously compares against accepted literature values (e.g. IB Data Booklet, NIST, IUPAC).",
      topBandMustHave: [
        "Direct quantitative answer to the RQ citing processed values ± uncertainty, trend direction, and graph gradient/intercept ± uncertainty.",
        "Comparison against a cited literature value: calculate **percentage error** and compare it explicitly with **total percentage uncertainty** (if % error > % uncertainty, systematic error dominates!).",
        "Check whether the line of best fit passes through all error bars and whether any non-zero y-intercept signals a specific systematic bias.",
        "Chemical explanation tying the observed value/trend back to underlying bonding, kinetics, equilibrium, or thermodynamic theory from Criterion A.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Conclusion is fully justified by processed data and uncertainties, directly addresses the RQ, and is rigorously compared with accepted scientific literature." },
        { marks: "3–4", descriptor: "Conclusion is relevant and uses processed data, but comparison with literature values or treatment of uncertainties is superficial." },
        { marks: "1–2", descriptor: "Conclusion merely restates raw observations without quantitative justification or chemical context." },
      ],
    },
    {
      code: "D",
      name: "Evaluation",
      maxMarks: 6,
      summary: "Critically evaluates specific methodological weaknesses (classifying random vs systematic errors and directional bias on the final value) and proposes realistic, targeted chemical improvements.",
      topBandMustHave: [
        "Identifies 3–5 specific methodological weaknesses tied directly to YOUR observations and % error vs % uncertainty gap (NEVER blame 'human error'!).",
        "Classifies each error as **systematic** (state direction! e.g. calorimeter heat loss makes measured |ΔH| systematically TOO SMALL / less exothermic; incomplete combustion lowers |ΔH|) or **random** (increases scatter/error bars).",
        "Ranks the **relative significance** of each source of error (e.g. heat loss ~15% dwarfs burette uncertainty ~0.4%).",
        "Proposes concrete, realistic lab improvements directly targeting each weakness (e.g. bomb calorimeter or cooling-curve extrapolation, spectrophotometer instead of visual endpoint, thermostatted water bath, analytical standardization of NaOH against KHP).",
        "Brief, realistic extension investigating a related chemical variable (within the 3,000-word limit).",
      ],
      bands: [
        { marks: "5–6", descriptor: "Specific methodological weaknesses and limitations are explained clearly with their relative impact and direction of effect; realistic, directly linked improvements are justified." },
        { marks: "3–4", descriptor: "Relevant weaknesses and improvements are identified, but explanation of relative significance or directional impact on results is incomplete." },
        { marks: "1–2", descriptor: "Generic remarks ('human error', 'be more careful', 'do more trials') with little link to actual data." },
      ],
    },
  ] as IaCriterion[],
  milestones: [
    {
      phase: "1. Proposal & Preliminary Trials",
      timing: "DP1 Term 3 (Apr–Jun)",
      tasks: [
        "Select a focused, safe chemical system with a clean quantitative analytical method (titration, colorimetry, pH/conductivity probe, gas syringe, or calorimetry).",
        "Run quick preliminary trials to confirm the IV range yields measurable, reproducible changes within class lab time.",
        "Complete full chemical risk & disposal assessment (MSDS/GHS) and obtain teacher sign-off.",
      ],
    },
    {
      phase: "2. Lab Data Collection",
      timing: "DP2 Term 1 Early (Aug–Sep)",
      tasks: [
        "Prepare/standardize solutions accurately using volumetric flasks & pipettes; record every balance/glassware ± uncertainty.",
        "Collect ≥ 5 IV levels × ≥ 3–5 concordant trials plus detailed qualitative observations.",
        "Plot a quick raw check before dismantling apparatus so you can repeat any clear outlier or extend your range immediately.",
      ],
    },
    {
      phase: "3. Processing, Analysis & First Draft",
      timing: "DP2 Term 1 Mid (Oct)",
      tasks: [
        "Process data, propagate uncertainties, build linearized graphs with error bars and max/min gradient lines.",
        "Compare your % error against total % uncertainty using a cited literature source (IB Data Booklet / NIST).",
        "Submit full first draft (≤ 3,000 words) for your single formal teacher feedback round.",
      ],
    },
    {
      phase: "4. Final Polish & Submission",
      timing: "DP2 Term 2 (Jan–Feb)",
      tasks: [
        "Verify decimal-place consistency, state symbols, signs (+/−) on ΔH/ΔG/E⊖, and exact chemical terminology.",
        "Confirm word count is safely under 3,000 words (tables, equations, graphs & references excluded).",
        "Complete final self-audit checklist below before uploading to ManageBac.",
      ],
    },
  ] as IaMilestone[],
  exemplarStructure: [
    { heading: "1. Research Question & Chemical Context", targetWords: "350–450 words", whatToInclude: "Focused RQ (IV, DV, units, chemical system), balanced reaction equations, theoretical model predicting the trend, and concise context." },
    { heading: "2. Variables, Apparatus, Method & Safety", targetWords: "650–800 words", whatToInclude: "IV/DV/Control table (what/how/why), exact reagent concentrations & glassware uncertainties, numbered reproducible steps, and specific GHS safety/environmental disposal." },
    { heading: "3. Raw & Processed Data + Uncertainties", targetWords: "450–600 words", whatToInclude: "Clean raw tables with ± uncertainties, qualitative observations, one full worked calculation + uncertainty propagation, and linearized graph with error bars + max/min gradients." },
    { heading: "4. Conclusion & Literature Comparison", targetWords: "450–550 words", whatToInclude: "Direct answer to RQ with values ± uncertainty, % error vs total % uncertainty comparison against a cited reference, and theoretical justification." },
    { heading: "5. Evaluation & Targeted Improvements", targetWords: "650–800 words", whatToInclude: "Ranked table/prose of 3–5 specific systematic & random errors (with direction of bias on the result!), realistic lab improvements targeting each, and a short extension." },
  ] as IaSectionGuide[],
  moderatorTraps: [
    "Writing 'human error' or 'parallax error' instead of quantifying specific chemical/instrumental systematic errors (like heat loss, CO₂ absorption by NaOH, or indicator overshoot).",
    "Forgetting to double the burette uncertainty (`±0.05 × 2 = ±0.10 cm³`) because every titre subtracts an initial AND a final reading.",
    "Mismatching decimal places between a mean value and its uncertainty (e.g. writing `12.345 ± 0.2` instead of `12.3 ± 0.2`).",
    "Exceeding 3,000 words — moderators literally stop reading at word 3,000, forfeiting Criterion D Evaluation marks!",
    "Comparing only qualitatively ('close to the literature value') instead of comparing `% error` directly against `% uncertainty`.",
  ],
  checklist: [
    "RQ specifies exact IV (range & units), DV (analytical method & units), and chemical system.",
    "Balanced chemical equation(s) and mathematical model link IV to DV.",
    "Control variables table covers WHAT, HOW controlled, and WHY it biases the DV.",
    "At least 5 IV values × 3–5 concordant repeats with justified range.",
    "Specific GHS chemical hazards, green-chemistry choices, and proper waste disposal included.",
    "Raw data tables include exact glassware/balance ± uncertainties and consistent d.p.",
    "Qualitative observations recorded (colour, bubbles, precipitate, soot, temperature drift).",
    "One complete worked sample calculation including full uncertainty propagation.",
    "Linearized graph includes labelled axes/units, error bars, best-fit, and max/min gradient lines.",
    "Conclusion compares % error against total % uncertainty using a cited literature value.",
    "Evaluation classifies systematic vs random errors, states direction of bias, and avoids 'human error'.",
    "Total prose word count verified ≤ 3,000 words (tables, equations, graphs & bibliography excluded).",
  ],
};
