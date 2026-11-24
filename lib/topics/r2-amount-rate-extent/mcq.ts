import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "r2-amount-rate-extent-m1",
    title: "Paper 1A · Set 1: Stoichiometry & Collision Kinetics (SL)",
    level: "SL",
    questions: [
      {
        id: "r2-amount-rate-extent-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Limiting reactant quotient (n / coeff)",
        question:
          "Aluminium reacts with chlorine gas according to `2Al(s) + 3Cl₂(g) → 2AlCl₃(s)`. If `0.40 mol` of `Al` is mixed with `0.45 mol` of `Cl₂`, what is the maximum amount (in `mol`) of `AlCl₃` that can be formed?",
        options: ["0.40 mol", "0.45 mol", "0.30 mol", "0.23 mol"],
        answerIndex: 2,
        hints: [
          "Divide the moles of each reactant by its stoichiometric coefficient in the balanced equation.",
          "Compare `0.40 / 2` for `Al` against `0.45 / 3` for `Cl₂`; the smaller quotient gives the limiting reactant.",
        ],
        explanation:
          "For `Al`: `0.40 / 2 = 0.20`; for `Cl₂`: `0.45 / 3 = 0.15`. Therefore `Cl₂` is the limiting reactant, so `n(AlCl₃) = (2/3) × 0.45 = 0.30 mol`. Selecting `0.40 mol` wrongly assumes `Al` is limiting simply because `0.40 < 0.45`.",
      },
      {
        id: "r2-amount-rate-extent-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Theoretical and percentage yield",
        question:
          "Thermal decomposition of calcium carbonate follows `CaCO₃(s) → CaO(s) + CO₂(g)`. Heating `25.0 g` of pure `CaCO₃` (`M = 100.09 g mol⁻¹`) produces `11.2 g` of `CaO` (`M = 56.08 g mol⁻¹`). What is the percentage yield of `CaO`?",
        options: ["80.0%", "44.8%", "56.0%", "89.6%"],
        answerIndex: 0,
        hints: [
          "First find the moles of `CaCO₃` decomposed (`n = m / M`).",
          "Because the mole ratio `CaCO₃ : CaO` is `1 : 1`, multiply those moles by `56.08 g mol⁻¹` to get the theoretical mass of `CaO`.",
          "Divide the experimental mass (`11.2 g`) by the theoretical mass and multiply by 100%.",
        ],
        explanation:
          "`n(CaCO₃) = 25.0 / 100.09 = 0.2498 mol`, giving theoretical `m(CaO) = 0.2498 × 56.08 = 14.01 g`. Hence `% yield = (11.2 / 14.01) × 100% = 80.0%`. Dividing `11.2 / 25.0` directly ignores the different molar masses and gives the distractor `44.8%`.",
      },
      {
        id: "r2-amount-rate-extent-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Atom economy from balanced equation",
        question:
          "Hydrogen gas is produced industrially by steam reforming of methane: `CH₄(g) + 2H₂O(g) → CO₂(g) + 4H₂(g)`. Given `M(CH₄) = 16.05 g mol⁻¹`, `M(H₂O) = 18.02 g mol⁻¹`, and `M(H₂) = 2.02 g mol⁻¹`, what is the percentage atom economy for producing `H₂`?",
        options: ["3.88%", "23.7%", "50.3%", "15.5%"],
        answerIndex: 3,
        hints: [
          "Atom economy `= [total molar mass of desired product / total molar mass of all reactants] × 100%`.",
          "Include the stoichiometric coefficients: `4 × M(H₂)` in the numerator and `M(CH₄) + 2 × M(H₂O)` in the denominator.",
        ],
        explanation:
          "Desired product mass is `4 × 2.02 = 8.08 g mol⁻¹`; total reactant mass is `16.05 + 2(18.02) = 52.09 g mol⁻¹`. Thus atom economy `= (8.08 / 52.09) × 100% = 15.5%`. Omitting the coefficient `4` on `H₂` gives the distractor `3.88%`.",
      },
      {
        id: "r2-amount-rate-extent-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "stoichiometry-titrations",
        strategy: "Green chemistry atom economy",
        question: "Which chemical reaction has a theoretical atom economy of 100% for the indicated organic product?",
        options: [
          "CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g) (product: CH₃Cl)",
          "C₂H₄(g) + Br₂(l) → C₂H₄Br₂(l) (product: C₂H₄Br₂)",
          "C₆H₁₂O₆(aq) → 2C₂H₅OH(aq) + 2CO₂(g) (product: C₂H₅OH)",
          "C₂H₅Br(l) + NaOH(aq) → C₂H₅OH(aq) + NaBr(aq) (product: C₂H₅OH)",
        ],
        answerIndex: 1,
        hints: [
          "A 100% atom economy requires that every atom in the reactants ends up in the single desired product.",
          "Look for an addition reaction that produces zero co-products.",
        ],
        explanation:
          "The addition of bromine to ethene (`C₂H₄ + Br₂ → C₂H₄Br₂`) forms only one product, so 100% of reactant atoms are incorporated into the desired molecule. Substitution (`CH₃Cl + HCl`, `C₂H₅OH + NaBr`) and fermentation (`+ 2CO₂`) all generate waste co-products.",
      },
      {
        id: "r2-amount-rate-extent-m1-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Avogadro's law for reacting gases",
        question:
          "Ethane burns completely in oxygen: `2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(l)`. If `20 cm³` of `C₂H₆(g)` reacts with `100 cm³` of `O₂(g)` and the mixture is cooled to room temperature and pressure (where water is liquid), what is the total volume of gas remaining?",
        options: ["40 cm³", "60 cm³", "70 cm³", "130 cm³"],
        answerIndex: 2,
        hints: [
          "At constant `T` and `p`, gas volume ratios equal mole ratios (`2 : 7 : 4`).",
          "Find which gas is limiting, how much excess `O₂` remains unreacted, and how much `CO₂(g)` is formed.",
          "Remember `H₂O(l)` is a liquid at room temperature, so it contributes negligible gas volume.",
        ],
        explanation:
          "`20 cm³` of `C₂H₆` requires `(7/2) × 20 = 70 cm³` of `O₂`, leaving `100 − 70 = 30 cm³` of excess `O₂(g)`. It produces `(4/2) × 20 = 40 cm³` of `CO₂(g)`, while `H₂O(l)` condenses. Total remaining gas `= 30 + 40 = 70 cm³`. Choosing `40 cm³` forgets the unreacted excess `O₂`.",
      },
      {
        id: "r2-amount-rate-extent-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Volumetric titration stoichiometry",
        question:
          "In an acid–base titration, `25.0 cm³` of `0.160 mol dm⁻³ NaOH(aq)` exactly neutralises `20.0 cm³` of `H₂SO₄(aq)` according to `H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)`. What is the concentration of `H₂SO₄(aq)`?",
        options: ["0.100 mol dm⁻³", "0.200 mol dm⁻³", "0.400 mol dm⁻³", "0.064 mol dm⁻³"],
        answerIndex: 0,
        hints: [
          "Convert `25.0 cm³` to `dm³` and compute `n(NaOH) = c × V`.",
          "Use the `1 : 2` stoichiometric ratio to find `n(H₂SO₄)`, then divide by `0.0200 dm³`.",
        ],
        explanation:
          "`n(NaOH) = 0.160 × 0.0250 = 0.00400 mol`. Because `H₂SO₄` is diprotic (`1 : 2` ratio), `n(H₂SO₄) = 0.00200 mol`, giving `c = 0.00200 / 0.0200 = 0.100 mol dm⁻³`. Choosing `0.200 mol dm⁻³` forgets to divide by 2 for the diprotic stoichiometry.",
      },
      {
        id: "r2-amount-rate-extent-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "stoichiometry-titrations",
        strategy: "Spectator ions and net ionic equations",
        question:
          "When aqueous silver nitrate (`AgNO₃(aq)`) is mixed with aqueous sodium chloride (`NaCl(aq)`), a white precipitate of silver chloride forms. What is the balanced net ionic equation?",
        options: [
          "AgNO₃(aq) + Cl⁻(aq) → AgCl(s) + NO₃⁻(aq)",
          "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",
          "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(aq)",
          "Ag⁺(aq) + NaCl(aq) → AgCl(s) + Na⁺(aq)",
        ],
        answerIndex: 1,
        hints: [
          "Write all soluble ionic compounds (`AgNO₃`, `NaCl`, `NaNO₃`) as separated aqueous ions, keeping insoluble `AgCl(s)` intact.",
          "Cancel the spectator ions (`Na⁺` and `NO₃⁻`) that appear identically on both sides.",
        ],
        explanation:
          "Splitting strong electrolytes gives `Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)`. Cancelling spectator ions `Na⁺(aq)` and `NO₃⁻(aq)` leaves `Ag⁺(aq) + Cl⁻(aq) → AgCl(s)`. Soluble salts like `AgNO₃(aq)` and `NaCl(aq)` must be dissociated in ionic equations.",
      },
      {
        id: "r2-amount-rate-extent-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Back-titration subtraction",
        question:
          "A solid sample of a metal carbonate `MCO₃(s)` reacts with an excess `0.0200 mol` of `HCl(aq)` (`MCO₃ + 2HCl → MCl₂ + H₂O + CO₂`). The unreacted excess `HCl` is neutralised by `15.0 cm³` of `0.400 mol dm⁻³ NaOH(aq)`. How many moles of `MCO₃` were in the sample?",
        options: ["0.0140 mol", "0.00600 mol", "0.0100 mol", "0.00700 mol"],
        answerIndex: 3,
        hints: [
          "Calculate `n_excess(HCl) = n(NaOH) = c × V` (remember `15.0 cm³ = 0.0150 dm³`).",
          "Subtract `n_excess(HCl)` from `0.0200 mol` to find `n_reacted(HCl)`, then divide by `2` for the `1 : 2` ratio with `MCO₃`.",
        ],
        explanation:
          "`n_excess(HCl) = 0.400 × 0.0150 = 0.00600 mol`, so `n_reacted(HCl) = 0.0200 − 0.00600 = 0.0140 mol`. Since `1 mol MCO₃` consumes `2 mol HCl`, `n(MCO₃) = 0.0140 / 2 = 0.00700 mol`. Selecting `0.0140 mol` stops before applying the `1 : 2` mole ratio.",
      },
      {
        id: "r2-amount-rate-extent-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "collision-theory-kinetics",
        strategy: "Stoichiometric rate ratios",
        question:
          "In the catalytic oxidation of ammonia, `4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g)`, oxygen is consumed at an average rate of `0.15 mol dm⁻³ s⁻¹`. What is the average rate of formation of `H₂O(g)` during the same interval?",
        options: ["0.18 mol dm⁻³ s⁻¹", "0.13 mol dm⁻³ s⁻¹", "0.15 mol dm⁻³ s⁻¹", "0.90 mol dm⁻³ s⁻¹"],
        answerIndex: 0,
        hints: [
          "The rates of change of individual species are proportional to their balanced stoichiometric coefficients.",
          "Multiply the rate of `O₂` consumption by the ratio `6 / 5`.",
        ],
        explanation:
          "From `-(1/5)Δ[O₂]/Δt = +(1/6)Δ[H₂O]/Δt`, the rate of formation of `H₂O` is `(6/5) × 0.15 = 0.18 mol dm⁻³ s⁻¹`. Multiplying by `5/6` (`0.13`) inverts the stoichiometric ratio.",
      },
      {
        id: "r2-amount-rate-extent-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "collision-theory-kinetics",
        strategy: "Selecting an experimental rate method",
        question:
          "Why is monitoring mass loss on a `±0.01 g` top-pan balance generally unsuitable for tracking the rate of `Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)`?",
        options: [
          "Hydrogen gas dissolves rapidly in water, preventing any gas from escaping the flask.",
          "Magnesium chloride precipitates out of solution, increasing the total mass on the balance.",
          "Hydrogen gas has a very low molar mass, making the total mass change too small to resolve.",
          "Hydrochloric acid evaporates instantly at room temperature, halting the chemical reaction.",
        ],
        answerIndex: 2,
        hints: [
          "Compare the molar mass of `H₂` (`2.02 g mol⁻¹`) with `CO₂` (`44.01 g mol⁻¹`).",
          "Calculate the mass loss if `0.005 mol` of `H₂` escapes (`0.01 g` total across the whole run!).",
        ],
        explanation:
          "Because `H₂` has a molar mass of only `2.02 g mol⁻¹`, even `100 cm³` of `H₂` weighs less than `0.01 g`, yielding huge percentage uncertainty on a `±0.01 g` balance — a gas syringe is far more accurate. `H₂` is nearly insoluble in water and `MgCl₂` is soluble.",
      },
      {
        id: "r2-amount-rate-extent-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "collision-theory-kinetics",
        strategy: "Collision theory temperature effect",
        question:
          "What is the primary reason why raising the temperature of a reacting mixture by `10 K` often approximately doubles the rate of reaction?",
        options: [
          "The activation energy of the reaction decreases substantially as temperature rises.",
          "A much greater fraction of particles possess kinetic energy greater than or equal to E_a.",
          "The average speed of particles doubles, doubling the total collision frequency.",
          "The steric orientation requirement disappears once molecules gain thermal energy.",
        ],
        answerIndex: 1,
        hints: [
          "Does temperature change `E_a`, or does it change the energy distribution of the particles?",
          "Compare the tiny rise in collision speed (`∝ √T`) with the exponential expansion of the high-energy tail past `E_a`.",
        ],
        explanation:
          "Higher temperature shifts the Maxwell–Boltzmann distribution rightward, dramatically enlarging the fraction of particles with `E ≥ E_a`. Temperature does NOT lower `E_a` (only a catalyst does that), and collision speed grows by only ~1.6% for a `10 K` rise near `300 K`.",
      },
      {
        id: "r2-amount-rate-extent-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "collision-theory-kinetics",
        strategy: "Maxwell–Boltzmann curve transformation",
        question:
          "A fixed sample of gas molecules is heated from `T₁` to a higher temperature `T₂`. How does its Maxwell–Boltzmann kinetic energy distribution change?",
        options: [
          "The peak shifts to higher energy and rises taller, while the total area increases.",
          "The peak shifts to lower energy and drops lower, while the total area stays constant.",
          "The curve shape remains identical, while the vertical E_a marker moves to the left.",
          "The peak shifts to higher energy and drops lower, while the total area stays constant.",
        ],
        answerIndex: 3,
        hints: [
          "What does the total area under a Maxwell–Boltzmann curve represent for a fixed number of moles?",
          "If the curve spreads out to higher energies while keeping the same total area, what must happen to the peak height?",
        ],
        explanation:
          "Total area equals the total number of particles, so it stays constant. As mean kinetic energy rises, the peak shifts right (higher energy) and lowers so that the broadened high-energy tail conserves total area. Shifting `E_a` leftward describes a catalyst, not heating.",
      },
      {
        id: "r2-amount-rate-extent-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "collision-theory-kinetics",
        strategy: "Catalyst effect on energetics and kinetics",
        question:
          "How does adding an effective catalyst affect a reaction's activation energy (`E_a`), enthalpy change (`ΔH`), and Maxwell–Boltzmann energy distribution at constant temperature?",
        options: [
          "Lowers E_a, makes ΔH more negative, and shifts the curve peak to higher energy.",
          "Leaves E_a unchanged, leaves ΔH unchanged, and raises the curve peak higher.",
          "Lowers E_a via a new pathway, leaves ΔH unchanged, and leaves the curve unchanged.",
          "Lowers E_a via a new pathway, lowers ΔH equally, and leaves the curve unchanged.",
        ],
        answerIndex: 2,
        hints: [
          "Remember `ΔH` depends only on the initial reactants and final products (state function).",
          "At fixed temperature, does a catalyst change the kinetic energy distribution of the molecules?",
        ],
        explanation:
          "A catalyst provides an alternative pathway with a lower `E_a` without altering reactant or product enthalpies (`ΔH` unchanged) or particle kinetic energies (Maxwell–Boltzmann curve unchanged; only the vertical `E_a` threshold shifts leftward).",
      },
      {
        id: "r2-amount-rate-extent-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "collision-theory-kinetics",
        strategy: "Comparing volume–time curves",
        question:
          "In Run 1, excess `CaCO₃` chips react with `50.0 cm³` of `1.00 mol dm⁻³ HCl(aq)`. In Run 2 at the same temperature, excess `CaCO₃` chips of identical size react with `25.0 cm³` of `2.00 mol dm⁻³ HCl(aq)`. Compared to Run 1, how does Run 2's `CO₂` volume–time curve behave?",
        options: [
          "Steeper initial gradient and the same final volume of CO₂ gas.",
          "Steeper initial gradient and half the final volume of CO₂ gas.",
          "Same initial gradient and double the final volume of CO₂ gas.",
          "Gentler initial gradient and the same final volume of CO₂ gas.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the initial `[HCl]` in Run 2 vs Run 1 to predict the initial rate (gradient).",
          "Calculate `n(HCl) = c × V` in both runs (`HCl` is the limiting reactant) to compare the final plateau height.",
        ],
        explanation:
          "Both runs contain `0.0500 mol` of limiting `HCl` (`0.050 × 1.00 = 0.025 × 2.00`), so they produce the exact same final volume of `CO₂`. Because Run 2 starts at twice the `[HCl]` (`2.00 mol dm⁻³`), collision frequency is higher and the initial gradient is steeper.",
      },
      {
        id: "r2-amount-rate-extent-m1-q15",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "collision-theory-kinetics",
        strategy: "Reading concentration–time curves",
        question:
          "On a graph of reactant concentration `[R]` (y-axis) plotted against time `t` (x-axis) for a typical reaction going to completion, what does the magnitude of the gradient of the tangent at `t = 30 s` represent?",
        options: [
          "The average rate of reaction over the first 30 seconds.",
          "The instantaneous rate of reaction at exactly t = 30 s.",
          "The activation energy required for collisions at t = 30 s.",
          "The total amount of product formed by t = 30 s.",
        ],
        answerIndex: 1,
        hints: [
          "Recall the calculus/graphical meaning of a tangent line at a single point versus a chord joining `t = 0` to `t = 30 s`.",
        ],
        explanation:
          "The gradient of the tangent at a single instant `t = 30 s` gives `−d[R]/dt`, the instantaneous rate at `30 s`. The average rate over `0` to `30 s` would be the slope of the secant chord joining `(0, [R]₀)` and `(30, [R]₃₀)`.",
      },
    ],
  },
  {
    id: "r2-amount-rate-extent-m2",
    title: "Paper 1A · Set 2: Equilibrium, Titrations & Kinetics (SL)",
    level: "SL",
    questions: [
      {
        id: "r2-amount-rate-extent-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Criteria for dynamic equilibrium",
        question: "Which statement is ALWAYS true for a reversible chemical system at dynamic equilibrium in a closed container?",
        options: [
          "The concentrations of reactants and products are numerically equal.",
          "The forward and reverse reaction rates are equal and non-zero.",
          "Both the forward and reverse reactions have completely stopped.",
          "The value of K_c equals 1.0 regardless of the temperature.",
        ],
        answerIndex: 1,
        hints: [
          "Distinguish carefully between 'constant' concentrations and 'equal' concentrations.",
          "What does the word 'dynamic' signify about the microscopic forward and reverse processes?",
        ],
        explanation:
          "At dynamic equilibrium, forward and reverse reactions continue at equal non-zero rates, keeping macroscopic concentrations constant (though usually not equal, and `K_c` can be any positive number depending on the reaction and temperature).",
      },
      {
        id: "r2-amount-rate-extent-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Heterogeneous equilibrium expressions",
        question:
          "Calcium carbonate decomposes reversibly in a sealed kiln: `CaCO₃(s) ⇌ CaO(s) + CO₂(g)`. What is the correct equilibrium constant expression `K_c`?",
        options: [
          "K_c = ([CaO][CO₂]) / [CaCO₃]",
          "K_c = [CaCO₃] / ([CaO][CO₂])",
          "K_c = 1 / [CO₂]",
          "K_c = [CO₂]",
        ],
        answerIndex: 3,
        hints: [
          "Check the physical state symbols `(s)` and `(g)` in the equation.",
          "Pure solids and pure liquids have constant density/concentration and are omitted from `K_c`.",
        ],
        explanation:
          "Both `CaCO₃(s)` and `CaO(s)` are pure solids whose activities are constant and excluded from `K_c`. Only the gaseous product `CO₂(g)` appears, leaving `K_c = [CO₂]`. Including solids gives the first distractor.",
      },
      {
        id: "r2-amount-rate-extent-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Algebraic manipulation of K_c",
        question:
          "At a given temperature, `2SO₂(g) + O₂(g) ⇌ 2SO₃(g)` has `K_c = 16`. At the same temperature, what is the value of `K_c'` for `SO₃(g) ⇌ SO₂(g) + ½O₂(g)`?",
        options: ["0.25", "0.0625", "4.0", "0.50"],
        answerIndex: 0,
        hints: [
          "Notice two changes from the original equation: the equation is reversed AND all coefficients are multiplied by `1/2`.",
          "Reversing inverts `K_c` (`1 / 16`); multiplying coefficients by `1/2` takes the square root.",
        ],
        explanation:
          "Reversing the reaction gives `1 / K_c = 1/16`, and halving all stoichiometric coefficients raises the constant to the power `1/2`: `K_c' = (1/16)^(1/2) = 1/4 = 0.25`. Forgetting the square root gives `0.0625`; forgetting to invert gives `4.0`.",
      },
      {
        id: "r2-amount-rate-extent-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Le Chatelier pressure/volume stress",
        question:
          "Consider the gaseous equilibrium `N₂O₄(g) ⇌ 2NO₂(g)` inside a syringe at constant temperature. If the plunger is pushed in to halve the container volume, what happens to the equilibrium position and the value of `K_c`?",
        options: [
          "Shifts right toward NO₂ and K_c increases.",
          "Shifts left toward N₂O₄ and K_c decreases.",
          "Shifts left toward N₂O₄ and K_c stays unchanged.",
          "No shift occurs and K_c stays unchanged.",
        ],
        answerIndex: 2,
        hints: [
          "Halving the volume doubles total pressure; Le Chatelier says the system shifts toward fewer moles of gas.",
          "Compare gaseous moles on the left (`1 mol`) vs right (`2 mol`), and remember which single variable changes `K_c`.",
        ],
        explanation:
          "Increasing pressure favours the side with fewer moles of gas (`1 mol N₂O₄` vs `2 mol NO₂`), so the position shifts left. Because temperature is held constant, `K_c` remains completely unchanged.",
      },
      {
        id: "r2-amount-rate-extent-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Temperature effect on exothermic K_c",
        question:
          "For the exothermic equilibrium `2NO₂(g) ⇌ N₂O₄(g)`, `ΔH⊖ = −57 kJ mol⁻¹`. When the temperature of the sealed vessel is increased, how do the equilibrium position and `K_c` change?",
        options: [
          "Shifts right toward N₂O₄ and K_c increases.",
          "Shifts right toward N₂O₄ and K_c decreases.",
          "Shifts left toward NO₂ and K_c stays constant.",
          "Shifts left toward NO₂ and K_c decreases.",
        ],
        answerIndex: 3,
        hints: [
          "Increasing temperature favours the endothermic direction to absorb the added heat.",
          "Since the forward reaction is exothermic (`ΔH < 0`), the reverse reaction is endothermic — what does that do to `[products] / [reactants]`?",
        ],
        explanation:
          "Heating favours the endothermic reverse reaction (`N₂O₄ → 2NO₂`), shifting equilibrium left. Because `[N₂O₄]` decreases and `[NO₂]` increases, the ratio `K_c = [N₂O₄] / [NO₂]²` decreases.",
      },
      {
        id: "r2-amount-rate-extent-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Catalyst in reversible systems",
        question:
          "Iron powder is added as a catalyst to the Haber equilibrium `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)`. What is the effect of the iron catalyst on the system?",
        options: [
          "Increases only the forward rate, shifting equilibrium toward NH₃.",
          "Increases forward and reverse rates equally, leaving K_c unchanged.",
          "Lowers the enthalpy change ΔH, increasing the equilibrium yield.",
          "Increases the equilibrium constant K_c without altering reaction rates.",
        ],
        answerIndex: 1,
        hints: [
          "A catalyst lowers the transition-state barrier by the exact same energy `ΔE_a` for both the forward and reverse pathways.",
        ],
        explanation:
          "Lowering the activation energy barrier equally for both directions accelerates forward and reverse rates by the same factor. Thus equilibrium is attained faster, while both the equilibrium position and `K_c` remain unaltered.",
      },
      {
        id: "r2-amount-rate-extent-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Interpreting magnitude of K_c",
        question:
          "At `298 K`, a reversible reaction `A(g) + B(g) ⇌ 2C(g)` has `K_c = 4.2 × 10⁻¹²`. What can be validly concluded from this value alone?",
        options: [
          "The forward reaction proceeds at an extremely slow rate at 298 K.",
          "Products C strongly predominate over reactants A and B at equilibrium.",
          "Reactants A and B strongly predominate over product C at equilibrium.",
          "The forward reaction must be strongly exothermic under standard conditions.",
        ],
        answerIndex: 2,
        hints: [
          "Recall that `K_c = [products] / [reactants]` measures equilibrium extent, NOT reaction rate.",
          "If `K_c ≪ 1`, is the numerator or denominator much larger at equilibrium?",
        ],
        explanation:
          "Because `K_c = 4.2 × 10⁻¹² ≪ 1`, the denominator `[A][B]` is vastly larger than `[C]²`, meaning reactants strongly predominate at equilibrium. `K_c` gives no information about reaction rate or the sign of `ΔH`.",
      },
      {
        id: "r2-amount-rate-extent-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Haber process kinetics vs equilibrium compromise",
        question:
          "In the Haber process (`N₂(g) + 3H₂(g) ⇌ 2NH₃(g)`, `ΔH = −92 kJ mol⁻¹`), why is a compromise temperature of about `450 °C` used instead of `100 °C`?",
        options: [
          "At 100 °C the reaction rate is too slow for economical production despite a higher K_c.",
          "At 450 °C the exothermic forward reaction has a larger equilibrium constant K_c.",
          "At 100 °C nitrogen gas condenses to a liquid and stops colliding with hydrogen.",
          "At 450 °C the iron catalyst shifts the equilibrium position further toward ammonia.",
        ],
        answerIndex: 0,
        hints: [
          "Compare equilibrium yield (thermodynamics) with reaction speed (kinetics) at `100 °C` vs `450 °C`.",
          "Think about the huge bond enthalpy of the `N≡N` triple bond and how low temperature affects the activation-energy barrier.",
        ],
        explanation:
          "Although `100 °C` gives a higher equilibrium yield (larger `K_c`) for this exothermic synthesis, the high activation energy of breaking `N≡N` makes the rate unacceptably slow. Running at `450 °C` with an Fe catalyst balances fast rate with reasonable conversion.",
      },
      {
        id: "r2-amount-rate-extent-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Redox titration stoichiometry",
        question:
          "Acidified potassium manganate(VII) oxidises iron(II) ions: `MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)`. If `20.0 cm³` of `0.0200 mol dm⁻³ KMnO₄(aq)` exactly reacts with `25.0 cm³` of `Fe²⁺(aq)`, what is `[Fe²⁺]`?",
        options: ["0.0160 mol dm⁻³", "0.00320 mol dm⁻³", "0.0400 mol dm⁻³", "0.0800 mol dm⁻³"],
        answerIndex: 3,
        hints: [
          "Compute `n(MnO₄⁻) = 0.0200 × 0.0200 = 4.00 × 10⁻⁴ mol`.",
          "Multiply by `5` (from the `1 : 5` stoichiometry) to get `n(Fe²⁺)`, then divide by `0.0250 dm³`.",
        ],
        explanation:
          "`n(MnO₄⁻) = 0.0200 × 0.0200 = 4.00 × 10⁻⁴ mol`. From the `1 : 5` ratio, `n(Fe²⁺) = 5 × 4.00 × 10⁻⁴ = 2.00 × 10⁻³ mol`. Dividing by `0.0250 dm³` gives `[Fe²⁺] = 0.0800 mol dm⁻³`. Forgetting the factor of 5 yields `0.0160 mol dm⁻³`.",
      },
      {
        id: "r2-amount-rate-extent-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Molar gas volume at IB STP",
        question:
          "Magnesium reacts with excess hydrochloric acid: `Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)`. Using the IB STP molar gas volume (`22.7 dm³ mol⁻¹` at `273 K, 100 kPa`), what volume of `H₂(g)` is produced from `0.0500 mol` of `Mg`?",
        options: ["1.14 dm³", "2.27 dm³", "0.568 dm³", "1.20 dm³"],
        answerIndex: 0,
        hints: [
          "The mole ratio `Mg : H₂` is `1 : 1`, so `n(H₂) = 0.0500 mol`.",
          "Multiply `n(H₂)` by `22.7 dm³ mol⁻¹`.",
        ],
        explanation:
          "`n(H₂) = n(Mg) = 0.0500 mol`, so `V(H₂) = 0.0500 × 22.7 = 1.135 dm³ ≈ 1.14 dm³` to 3 s.f. Using `24.0 dm³ mol⁻¹` (RTP) gives `1.20 dm³`, whereas multiplying by `2` from the `HCl` coefficient wrongly gives `2.27 dm³`.",
      },
      {
        id: "r2-amount-rate-extent-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Calculating unreacted excess reactant",
        question:
          "Hydrogen and oxygen react according to `2H₂(g) + O₂(g) → 2H₂O(l)`. When `5.0 mol` of `H₂` reacts completely with `3.0 mol` of `O₂`, what amount of excess reactant remains unreacted?",
        options: ["2.0 mol of H₂", "1.0 mol of O₂", "0.5 mol of O₂", "0.5 mol of H₂"],
        answerIndex: 2,
        hints: [
          "Compare `5.0 / 2 = 2.5` (`H₂`) against `3.0 / 1 = 3.0` (`O₂`) to identify the limiting reactant.",
          "Calculate how many moles of `O₂` are consumed by `5.0 mol` of `H₂`, then subtract from `3.0 mol`.",
        ],
        explanation:
          "`H₂` is limiting (`5.0/2 = 2.5 < 3.0/1`). Consuming all `5.0 mol` of `H₂` uses `5.0 / 2 = 2.5 mol` of `O₂`, leaving `3.0 − 2.5 = 0.5 mol` of excess `O₂`. Subtracting `5.0 − 3.0 = 2.0` ignores stoichiometry completely.",
      },
      {
        id: "r2-amount-rate-extent-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "stoichiometry-titrations",
        strategy: "Selecting concordant titration volumes",
        question:
          "A student records five burette titres during a titration: `24.85 cm³` (rough), `24.20 cm³`, `24.15 cm³`, `24.55 cm³`, and `24.25 cm³`. Using concordant titres within `0.10 cm³`, what mean titre should be used in calculations?",
        options: ["24.40 cm³", "24.20 cm³", "24.29 cm³", "24.35 cm³"],
        answerIndex: 1,
        hints: [
          "Discard the rough trial (`24.85 cm³`) and any outlier that differs by more than `0.10 cm³` from the tightly clustered group.",
          "Average only `24.20`, `24.15`, and `24.25 cm³`.",
        ],
        explanation:
          "The concordant titres within `0.10 cm³` are `24.20`, `24.15`, and `24.25 cm³`; their mean is `(24.20 + 24.15 + 24.25) / 3 = 24.20 cm³`. Including the outlier `24.55 cm³` gives `24.29 cm³`, and including all five gives `24.40 cm³`.",
      },
      {
        id: "r2-amount-rate-extent-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "collision-theory-kinetics",
        strategy: "Clock reaction reciprocal time",
        question:
          "In the sodium thiosulfate–acid clock reaction (`S₂O₃²⁻(aq) + 2H⁺(aq) → S(s) + SO₂(g) + H₂O(l)`), students time how many seconds `t` it takes for a cross beneath the flask to vanish. Why is `1/t` used as a proxy for the initial rate of reaction?",
        options: [
          "Time t is directly proportional to the total activation energy of sulfur precipitation.",
          "The reciprocal 1/t equals the exact instantaneous rate at the end of the reaction.",
          "Doubling the concentration of thiosulfate always halves the final mass of sulfur formed.",
          "Each trial forms the same small fixed amount of sulfur, so average initial rate is proportional to 1/t.",
        ],
        answerIndex: 3,
        hints: [
          "Recall `average rate = Δ[S] / t`.",
          "What is held constant across every trial when the same cross disappears under the same flask?",
        ],
        explanation:
          "Obscuring the cross requires the exact same small fixed amount `Δn(S)` of suspended sulfur in every trial. Since `average rate = Δ[S] / t` and `Δ[S]` is constant, `rate ∝ 1/t`. It approximates the *initial* rate provided `Δn(S)` is a small fraction of total reactant.",
      },
      {
        id: "r2-amount-rate-extent-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "collision-theory-kinetics",
        strategy: "Inert gas at constant volume",
        question:
          "Argon gas (an inert gas) is pumped into a rigid, fixed-volume sealed vessel containing `H₂(g)` and `I₂(g)` reacting at constant temperature (`H₂(g) + I₂(g) → 2HI(g)`). How does the initial rate of reaction change?",
        options: [
          "Increases because the total pressure inside the container rises.",
          "Decreases because argon atoms block collisions between H₂ and I₂.",
          "Remains unchanged because the concentrations of H₂ and I₂ do not change.",
          "Increases because argon lowers the activation energy of the gaseous mixture.",
        ],
        answerIndex: 2,
        hints: [
          "Check whether the volume `V` or the moles of `H₂` and `I₂` changed.",
          "If `[H₂] = n(H₂)/V` and `[I₂] = n(I₂)/V` are unchanged at fixed `T`, how does the frequency of `H₂–I₂` collisions change?",
        ],
        explanation:
          "In a rigid constant-volume vessel, adding inert argon increases total pressure but leaves the molar concentrations (and partial pressures) of `H₂` and `I₂` completely unchanged. Hence the frequency of effective `H₂–I₂` collisions and the reaction rate are unchanged.",
      },
      {
        id: "r2-amount-rate-extent-m2-q15",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "collision-theory-kinetics",
        strategy: "Colorimetry rate monitoring",
        question:
          "Bromine reacts slowly with methanoic acid: `Br₂(aq) + HCOOH(aq) → 2Br⁻(aq) + 2H⁺(aq) + CO₂(g)`. Only `Br₂(aq)` is orange-brown while all other species are colourless. How does a colorimeter track the reaction rate?",
        options: [
          "Absorbance decreases over time in direct proportion to decreasing [Br₂].",
          "Absorbance increases over time as colourless bromide ions accumulate.",
          "Absorbance stays constant because total bromine atom count is conserved.",
          "Absorbance drops linearly to zero immediately when CO₂ gas forms.",
        ],
        answerIndex: 0,
        hints: [
          "Apply the Beer–Lambert law: absorbance `A` is directly proportional to the concentration of the coloured absorbing species.",
        ],
        explanation:
          "By the Beer–Lambert law, absorbance is proportional to `[Br₂(aq)]`. As brown `Br₂` is consumed into colourless `Br⁻`, absorbance falls smoothly over time, allowing `[Br₂]` vs `t` to be plotted directly.",
      },
    ],
  },
  {
    id: "r2-amount-rate-extent-m3",
    title: "Paper 1A · Set 3: HL Kinetics, Arrhenius, ICE & ΔG⊖–K",
    level: "HL",
    questions: [
      {
        id: "r2-amount-rate-extent-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Initial-rates table deduction",
        question:
          "For the reaction `2A + B → C`, doubling `[A]` at constant `[B]` leaves the initial rate unchanged, whereas tripling `[B]` at constant `[A]` increases the initial rate by a factor of `9`. What is the rate equation?",
        options: [
          "rate = k[A]²[B]",
          "rate = k[A][B]²",
          "rate = k[B]",
          "rate = k[B]²",
        ],
        answerIndex: 3,
        hints: [
          "If doubling `[A]` multiplies rate by `1 = 2⁰`, what is the order in `A`?",
          "If tripling `[B]` multiplies rate by `9 = 3²`, what is the order in `B`?",
        ],
        explanation:
          "Rate is independent of `[A]` (`2⁰ = 1`, zero order in `A`) and scales with `[B]²` (`3² = 9`, second order in `B`). Hence `rate = k[B]²`. Never copy the balanced equation's coefficient `2` onto `[A]`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Dimensional analysis of rate constant k",
        question:
          "An experimental rate equation is `rate = k[NO]²[O₂]`, where rate has units `mol dm⁻³ s⁻¹` and concentrations are in `mol dm⁻³`. What are the units of the rate constant `k`?",
        options: [
          "dm³ mol⁻¹ s⁻¹",
          "dm⁶ mol⁻² s⁻¹",
          "mol² dm⁻⁶ s⁻¹",
          "mol dm⁻³ s⁻¹",
        ],
        answerIndex: 1,
        hints: [
          "Rearrange for `k = rate / ([NO]²[O₂])`.",
          "Divide `mol dm⁻³ s⁻¹` by `(mol dm⁻³)³ = mol³ dm⁻⁹`.",
        ],
        explanation:
          "Overall order is `2 + 1 = 3`. Solving `k = (mol dm⁻³ s⁻¹) / (mol³ dm⁻⁹)` gives `mol⁻² dm⁶ s⁻¹` (`dm⁶ mol⁻² s⁻¹`). `dm³ mol⁻¹ s⁻¹` belongs to overall 2nd order.",
      },
      {
        id: "r2-amount-rate-extent-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Half-life test on concentration–time data",
        question:
          "During the decomposition of reactant `X`, `[X]` is measured at `20 s` intervals: `0.80` (`0 s`), `0.40` (`20 s`), `0.20` (`40 s`), and `0.10 mol dm⁻³` (`60 s`). What is the order of reaction with respect to `X`?",
        options: [
          "Zero order because concentration decreases at regular time intervals.",
          "Second order because the rate drops by a factor of four every 40 s.",
          "First order because the half-life remains constant at 20 s throughout.",
          "Third order because concentration halves three times in 60 seconds.",
        ],
        answerIndex: 2,
        hints: [
          "Measure the time taken for `[X]` to drop from `0.80 → 0.40`, then `0.40 → 0.20`, then `0.20 → 0.10`.",
          "Which single reaction order exhibits a constant half-life `t₁/₂` independent of concentration?",
        ],
        explanation:
          "Every halving (`0.80 → 0.40 → 0.20 → 0.10`) takes exactly `20 s`. A constant half-life (`t₁/₂ = ln 2 / k`) is the unique signature of a **first-order** reaction. Zero-order half-lives shorten as `[X]` drops, while second-order half-lives lengthen.",
      },
      {
        id: "r2-amount-rate-extent-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Scaling factors in a rate law",
        question:
          "A reaction has rate equation `rate = k[X][Y]²`. At constant temperature, `[X]` is halved and `[Y]` is tripled. By what factor does the initial reaction rate change?",
        options: ["4.5", "1.5", "3.0", "9.0"],
        answerIndex: 0,
        hints: [
          "Substitute `[X]_new = 0.5[X]` and `[Y]_new = 3[Y]` into `rate = k[X][Y]²`.",
          "Evaluate `0.5 × 3²`.",
        ],
        explanation:
          "`rate_new / rate_old = (0.5)¹ × (3)² = 0.5 × 9 = 4.5`. Choosing `1.5` forgets to square the scaling factor `3` for second-order reactant `Y`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Pre-equilibrium mechanism rate law",
        question:
          "Consider the two-step mechanism for `2NO(g) + Br₂(g) → 2NOBr(g)`:\nStep 1 (fast equilibrium): `NO(g) + Br₂(g) ⇌ NOBr₂(g)`\nStep 2 (slow): `NOBr₂(g) + NO(g) → 2NOBr(g)`\nWhich rate equation is consistent with this mechanism?",
        options: [
          "rate = k[NO][Br₂]",
          "rate = k[NO]²[Br₂]",
          "rate = k[NOBr₂][NO]",
          "rate = k[NO]²",
        ],
        answerIndex: 1,
        hints: [
          "Start from the slow rate-determining step (Step 2): `rate = k₂[NOBr₂][NO]`.",
          "Eliminate the intermediate `NOBr₂` using Step 1's equilibrium expression `K₁ = [NOBr₂] / ([NO][Br₂])`.",
        ],
        explanation:
          "From Step 2, `rate = k₂[NOBr₂][NO]`. Substituting `[NOBr₂] = K₁[NO][Br₂]` from the fast Step 1 pre-equilibrium gives `rate = k₂K₁[NO]²[Br₂] = k[NO]²[Br₂]`. Leaving the intermediate `NOBr₂` in the final rate law is invalid because experimental rate laws must be expressed in observable reactants.",
      },
      {
        id: "r2-amount-rate-extent-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Catalyst vs intermediate in elementary steps",
        question:
          "Stratospheric ozone depletion proceeds via:\nStep 1: `Cl•(g) + O₃(g) → ClO•(g) + O₂(g)`\nStep 2: `ClO•(g) + O•(g) → Cl•(g) + O₂(g)`\nWhich row correctly classifies `Cl•` and `ClO•`?",
        options: [
          "Cl• is an intermediate; ClO• is a homogeneous catalyst.",
          "Both Cl• and ClO• are reaction intermediates.",
          "Both Cl• and ClO• are homogeneous catalysts.",
          "Cl• is a homogeneous catalyst; ClO• is an intermediate.",
        ],
        answerIndex: 3,
        hints: [
          "A catalyst enters as a reactant in an earlier step and is regenerated as a product later.",
          "An intermediate is created as a product in an earlier step and consumed as a reactant later.",
        ],
        explanation:
          "`Cl•` is consumed in Step 1 and regenerated unchanged in Step 2, making it a homogeneous catalyst. `ClO•` is formed in Step 1 and destroyed in Step 2, making it a reactive intermediate.",
      },
      {
        id: "r2-amount-rate-extent-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Arrhenius plot gradient to E_a",
        question:
          "A linear Arrhenius plot of `ln k` (y-axis) against `1/T` (x-axis, in `K⁻¹`) has a gradient of `−1.00 × 10⁴ K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, what is the activation energy `E_a`?",
        options: ["1.20 kJ mol⁻¹", "8.31 kJ mol⁻¹", "83.1 kJ mol⁻¹", "831 kJ mol⁻¹"],
        answerIndex: 2,
        hints: [
          "From `ln k = −(E_a / R)(1/T) + ln A`, the gradient equals `−E_a / R`.",
          "Multiply `1.00 × 10⁴ K` by `8.31 J K⁻¹ mol⁻¹`, then divide by `1000` to convert `J` to `kJ`.",
        ],
        explanation:
          "`E_a = −(gradient) × R = 1.00 × 10⁴ × 8.31 = 83,100 J mol⁻¹ = 83.1 kJ mol⁻¹`. Dividing by `R` instead of multiplying gives `1.20 kJ mol⁻¹`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "rate-laws-mechanisms-arrhenius-hl",
        strategy: "Physical meaning of Arrhenius factor A",
        question:
          "In the Arrhenius equation `k = A e^(−E_a / RT)`, what does the pre-exponential factor `A` represent physically, and how is it obtained from a graph of `ln k` vs `1/T`?",
        options: [
          "Collision frequency with proper steric orientation; obtained as e^(y-intercept).",
          "Fraction of particles with energy ≥ E_a; obtained as e^(y-intercept).",
          "Activation energy of the catalysed pathway; obtained from the gradient.",
          "Equilibrium constant at standard temperature; obtained from the x-intercept.",
        ],
        answerIndex: 0,
        hints: [
          "Rewrite `k = A e^(−E_a/RT)` as `ln k = −(E_a/R)(1/T) + ln A`.",
          "Remember `e^(−E_a/RT)` is the energy fraction, so `A` accounts for the remaining collision-theory factors.",
        ],
        explanation:
          "The Arrhenius factor `A` reflects the frequency of collisions that have the correct steric orientation. Since the y-intercept of `ln k` vs `1/T` equals `ln A`, `A = e^(y-intercept)`. The energy fraction with `E ≥ E_a` is given by `e^(−E_a/RT)`, not `A`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Reaction quotient Q vs K_c",
        question:
          "For `PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)`, `K_c = 0.040` at `500 K`. At a certain instant, `[PCl₅] = 0.50`, `[PCl₃] = 0.20`, and `[Cl₂] = 0.20 mol dm⁻³`. What is `Q` and which way will the system shift?",
        options: [
          "Q = 0.080; system shifts right to form more PCl₃ and Cl₂.",
          "Q = 0.080; system shifts left to form more PCl₅.",
          "Q = 0.020; system shifts right to form more PCl₃ and Cl₂.",
          "Q = 0.040; system is already at dynamic equilibrium.",
        ],
        answerIndex: 1,
        hints: [
          "Evaluate `Q = ([PCl₃][Cl₂]) / [PCl₅]` using the instantaneous concentrations.",
          "Compare `Q` with `K_c = 0.040`: if `Q > K_c`, there is too much product relative to equilibrium.",
        ],
        explanation:
          "`Q = (0.20 × 0.20) / 0.50 = 0.040 / 0.50 = 0.080`. Because `Q (0.080) > K_c (0.040)`, product concentrations exceed equilibrium levels, so the system shifts left (reverse) to decrease `Q` until `Q = K_c`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "ICE table evaluation of K_c",
        question:
          "Initially `0.800 mol` of `HI(g)` is placed in a `2.00 dm³` flask and heated to establish `2HI(g) ⇌ H₂(g) + I₂(g)`. At equilibrium, `0.100 mol` of `I₂(g)` is present. What is the value of `K_c`?",
        options: ["0.111", "0.0156", "0.0278", "0.333"],
        answerIndex: 2,
        hints: [
          "Convert initial and equilibrium moles to concentrations in the `2.00 dm³` vessel: `[HI]₀ = 0.400`, `[I₂]_eq = [H₂]_eq = 0.050 mol dm⁻³`.",
          "From `2 HI → 1 H₂ + 1 I₂`, `[HI]_eq = 0.400 − 2(0.050) = 0.300 mol dm⁻³`.",
          "Evaluate `K_c = ([H₂][I₂]) / [HI]²`.",
        ],
        explanation:
          "Equilibrium concentrations are `[H₂] = [I₂] = 0.050 mol dm⁻³` and `[HI] = 0.400 − 2(0.050) = 0.300 mol dm⁻³`. Thus `K_c = (0.050 × 0.050) / (0.300)² = 0.0025 / 0.0900 = 0.0278`. Forgetting to square `[HI]` gives `0.111` (or `0.00833`).",
      },
      {
        id: "r2-amount-rate-extent-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Volume conversion in heterogeneous-mole K_c",
        question:
          "At equilibrium in a `2.00 dm³` container, `A(g) + B(g) ⇌ C(g)` contains `0.40 mol` of `A`, `0.40 mol` of `B`, and `0.80 mol` of `C`. What is the value of `K_c`?",
        options: ["2.5", "5.0", "20.0", "10.0"],
        answerIndex: 3,
        hints: [
          "Because `Δn_gas = 1 − 2 = −1 ≠ 0`, container volume does NOT cancel in `K_c`!",
          "Divide every mole count by `V = 2.00 dm³` BEFORE substituting into `K_c = [C] / ([A][B])`.",
        ],
        explanation:
          "Converting to `mol dm⁻³` gives `[A] = 0.20`, `[B] = 0.20`, and `[C] = 0.40 mol dm⁻³`. Therefore `K_c = 0.40 / (0.20 × 0.20) = 10.0`. Substituting raw moles directly (`0.80 / 0.16`) gives the classic volume-trap distractor `5.0`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Small-x ICE approximation",
        question:
          "For `N₂(g) + O₂(g) ⇌ 2NO(g)`, `K_c = 4.0 × 10⁻⁶` at `1800 K`. Starting with `[N₂]₀ = 0.50 mol dm⁻³`, `[O₂]₀ = 0.50 mol dm⁻³`, and `[NO]₀ = 0`, what is the equilibrium concentration `[NO]_eq`?",
        options: [
          "5.0 × 10⁻⁴ mol dm⁻³",
          "1.0 × 10⁻³ mol dm⁻³",
          "2.0 × 10⁻³ mol dm⁻³",
          "2.0 × 10⁻⁶ mol dm⁻³",
        ],
        answerIndex: 1,
        hints: [
          "Write `K_c = (2x)² / (0.50 − x)² = 4.0 × 10⁻⁶`.",
          "Since `K_c ≪ 1`, take the square root (`2x / (0.50 − x) = 2.0 × 10⁻³`) and apply `0.50 − x ≈ 0.50`.",
          "Remember `[NO]_eq = 2x`, NOT `x`!",
        ],
        explanation:
          "Taking the square root gives `2x / (0.50 − x) = √(4.0 × 10⁻⁶) = 2.0 × 10⁻³`. With `0.50 − x ≈ 0.50` (valid since `x/0.50 = 0.1% ≪ 5%`), `[NO]_eq = 2x = 0.50 × 2.0 × 10⁻³ = 1.0 × 10⁻³ mol dm⁻³`. Stopping at `x` gives `5.0 × 10⁻⁴ mol dm⁻³`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q13",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Sign link between ΔG⊖ and K",
        question:
          "At `298 K`, a reversible reaction has `ΔG⊖ = +12.4 kJ mol⁻¹`. Using `ΔG⊖ = −RT ln K`, what can be deduced about the equilibrium constant `K` at `298 K`?",
        options: [
          "0 < K < 1, so reactants are favoured at equilibrium.",
          "K < 0, so the reaction is physically impossible in both directions.",
          "K > 1, so products are favoured at equilibrium.",
          "K = 0, so zero product molecules exist at equilibrium.",
        ],
        answerIndex: 0,
        hints: [
          "If `ΔG⊖ > 0` and `ΔG⊖ = −RT ln K`, what is the sign of `ln K`?",
          "An equilibrium constant `K = e^(−ΔG⊖/RT)` is an exponential — can `K` ever be negative or zero?",
        ],
        explanation:
          "Positive `ΔG⊖` implies `ln K = −ΔG⊖ / RT < 0`, which means `0 < K < 1` (reactants dominate at equilibrium). Because `K = e^(ln K)` is always strictly positive, `K` can never be negative or zero.",
      },
      {
        id: "r2-amount-rate-extent-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Quantitative ΔG⊖ = −RT ln K",
        question:
          "At `298 K`, a weak-acid dissociation equilibrium has `K = 1.00 × 10⁻⁵`. Using `R = 8.31 J K⁻¹ mol⁻¹`, what is the value of `ΔG⊖` in `kJ mol⁻¹`?",
        options: ["−28.5 kJ mol⁻¹", "+12.4 kJ mol⁻¹", "+28.5 kJ mol⁻¹", "+28,500 kJ mol⁻¹"],
        answerIndex: 2,
        hints: [
          "Substitute into `ΔG⊖ = −R T ln K` using the natural logarithm `ln`, NOT base-10 `log₁₀`!",
          "Divide your result in `J mol⁻¹` by `1000` to obtain `kJ mol⁻¹`.",
        ],
        explanation:
          "`ΔG⊖ = −8.31 × 298 × ln(1.00 × 10⁻⁵) = −2476.38 × (−11.5129) = +28,510 J mol⁻¹ = +28.5 kJ mol⁻¹`. Using `log₁₀` instead of `ln` yields `+12.4 kJ mol⁻¹`, and forgetting `÷ 1000` gives `+28,500 kJ mol⁻¹`.",
      },
      {
        id: "r2-amount-rate-extent-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "equilibrium-ice-gibbs-hl",
        strategy: "Instantaneous ΔG vs standard ΔG⊖",
        question:
          "Which statement accurately compares the instantaneous Gibbs free-energy change `ΔG` and the standard Gibbs free-energy change `ΔG⊖` for a chemical system that has reached dynamic equilibrium (with `K ≠ 1`)?",
        options: [
          "Both ΔG and ΔG⊖ equal zero whenever the system is at equilibrium.",
          "ΔG equals −RT ln K (non-zero), whereas ΔG⊖ equals zero at equilibrium.",
          "Both ΔG and ΔG⊖ are negative because equilibrium is always spontaneous.",
          "ΔG equals zero at equilibrium, whereas ΔG⊖ equals −RT ln K (non-zero).",
        ],
        answerIndex: 3,
        hints: [
          "Remember `ΔG = ΔG⊖ + RT ln Q`.",
          "At equilibrium `Q = K`, so what happens to `ΔG`, and what must `ΔG⊖` equal if `K ≠ 1`?",
        ],
        explanation:
          "Equilibrium sits at the minimum of the Gibbs free-energy curve, so the instantaneous slope `ΔG = 0`. Meanwhile, `ΔG⊖ = −RT ln K` compares pure reactants to pure products under standard `1 mol dm⁻³` / `100 kPa` conditions and is non-zero whenever `K ≠ 1`.",
      },
    ],
  },
];
