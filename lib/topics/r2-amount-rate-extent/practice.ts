import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "r2-amount-rate-extent-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "stoichiometry-titrations",
      strategy: "Limiting reactant quotient (n / coeff)",
      question:
        "Ammonia is synthesised via `N₂(g) + 3H₂(g) → 2NH₃(g)`. If `2.0 mol` of `N₂` reacts with `4.5 mol` of `H₂`, what is the maximum amount of `NH₃` that can form?",
      options: ["4.0 mol", "4.5 mol", "3.0 mol", "1.5 mol"],
      answerIndex: 2,
      hints: [
        "Divide each reactant's moles by its stoichiometric coefficient (`2.0 / 1` vs `4.5 / 3`).",
        "Use the limiting reactant (`H₂`) with the `3 : 2` ratio to calculate `n(NH₃)`.",
      ],
      explanation:
        "Comparing `n / coeff`: `N₂` gives `2.0 / 1 = 2.0`, while `H₂` gives `4.5 / 3 = 1.5`. Hence `H₂` is limiting, and `n(NH₃) = (2/3) × 4.5 = 3.0 mol`. Using `N₂` wrongly gives `4.0 mol`.",
    },
    {
      id: "r2-amount-rate-extent-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "stoichiometry-titrations",
      strategy: "Percentage atom economy",
      question:
        "Magnesium chloride is prepared via `MgO(s) + 2HCl(aq) → MgCl₂(aq) + H₂O(l)`. Given `M(MgO) = 40.31 g mol⁻¹`, `M(HCl) = 36.46 g mol⁻¹`, and `M(MgCl₂) = 95.21 g mol⁻¹`, calculate the percentage atom economy for producing `MgCl₂` to 3 significant figures.",
      answer: { type: "number", value: 84.1, tolerance: 0.2, display: "84.1%" },
      traps: [
        {
          spec: { type: "number", value: 124.0, tolerance: 0.5 },
          feedback: "Include the stoichiometric coefficient `2` for `HCl` in the total reactant molar mass (`40.31 + 2 × 36.46`).",
        },
      ],
      hints: [
        "Atom economy `= [M(desired product) / ΣM(all reactants)] × 100%`.",
        "Remember to multiply `M(HCl)` by `2` in the denominator.",
      ],
      solution: [
        "Total molar mass of reactants `= 40.31 + 2(36.46) = 113.23 g mol⁻¹`.",
        "Percentage atom economy `= {{(95.21 / 113.23) * 100}} = 84.1%`.",
      ],
      commonError: "Forgetting the coefficient `2` on `HCl`, which produces an impossible atom economy above 100%.",
    },
    {
      id: "r2-amount-rate-extent-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "stoichiometry-titrations",
      strategy: "Direct acid–base titration",
      question:
        "In a titration (`HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l)`), `25.0 cm³` of `HNO₃(aq)` is neutralised exactly by `18.50 cm³` of `0.200 mol dm⁻³ KOH(aq)`. Calculate the concentration of `HNO₃(aq)` in `mol dm⁻³` to 3 significant figures.",
      answer: { type: "number", value: 0.148, tolerance: 0.002, display: "0.148 mol dm⁻³" },
      traps: [
        {
          spec: { type: "number", value: 0.27, tolerance: 0.005 },
          feedback: "Check which volume belongs to `KOH` (`18.50 cm³`) and which belongs to `HNO₃` (`25.0 cm³`).",
        },
      ],
      hints: [
        "Calculate `n(KOH) = c × V` using `V = 18.50 / 1000 dm³`.",
        "Since `HNO₃ : KOH = 1 : 1`, divide `n(HNO₃)` by `0.0250 dm³`.",
      ],
      solution: [
        "`n(KOH) = 0.200 × {{18.50 / 1000}} = 0.00370 mol`.",
        "`n(HNO₃) = n(KOH) = 0.00370 mol` (`1 : 1` stoichiometry).",
        "`c(HNO₃) = {{0.00370 / 0.0250}} = 0.148 mol dm⁻³`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "collision-theory-kinetics",
      strategy: "Collision theory fundamentals",
      question: "According to collision theory, what two conditions must be satisfied for a collision between reactant particles to result in a chemical reaction?",
      options: [
        "Kinetic energy greater than or equal to E_a and appropriate collision geometry.",
        "Kinetic energy equal to ΔH and presence of a heterogeneous solid catalyst.",
        "Kinetic energy greater than zero and equal concentrations of all reactants.",
        "Kinetic energy below E_a and high total pressure inside a closed container.",
      ],
      answerIndex: 0,
      hints: [
        "Think about both the energetic threshold and the spatial alignment needed for bonds to rearrange.",
      ],
      explanation:
        "A successful collision requires particles to collide with kinetic energy `E ≥ E_a` (to break/weaken reactant bonds) AND proper steric orientation (collision geometry) so reactive atoms come into contact.",
    },
    {
      id: "r2-amount-rate-extent-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "collision-theory-kinetics",
      strategy: "Stoichiometric average rate",
      question:
        "Hydrogen peroxide decomposes via `2H₂O₂(aq) → 2H₂O(l) + O₂(g)`. Over `30.0 s`, `[H₂O₂]` falls from `0.600 mol dm⁻³` to `0.420 mol dm⁻³`. Calculate the average rate of formation of `O₂` in `mol dm⁻³ s⁻¹` to 3 significant figures.",
      answer: { type: "number", value: 0.003, tolerance: 0.0001, display: "0.00300 mol dm⁻³ s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.006, tolerance: 0.0002 },
          feedback: "That is the rate of disappearance of `H₂O₂`. Look at the `2 : 1` mole ratio to find the rate of formation of `O₂`.",
        },
      ],
      hints: [
        "First find the rate of consumption of `H₂O₂`: `(0.600 − 0.420) / 30.0`.",
        "Since `2 mol H₂O₂` produce `1 mol O₂`, divide the `H₂O₂` consumption rate by `2`.",
      ],
      solution: [
        "`rate(H₂O₂ consumed) = {{(0.600 - 0.420) / 30.0}} = 0.00600 mol dm⁻³ s⁻¹`.",
        "From `2 H₂O₂ : 1 O₂`, `rate(O₂ formed) = {{0.00600 / 2}} = 0.00300 mol dm⁻³ s⁻¹`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Concentration–time graph shapes",
      question:
        "A graph of reactant concentration `[A]` against time `t` is a straight line with a constant negative gradient until `[A]` reaches zero. What is the order of reaction with respect to `A`?",
      options: [
        "First order, with a constant half-life.",
        "Second order, with an increasing half-life.",
        "Overall third order, with a negative rate constant.",
        "Zero order, because the rate is independent of [A].",
      ],
      answerIndex: 3,
      hints: [
        "The gradient of `[A]` vs `t` equals `−rate`.",
        "If the gradient is constant while `[A]` decreases, how does `rate` depend on `[A]`?",
      ],
      explanation:
        "A straight downward line on `[A]` vs `t` means `−d[A]/dt = rate = constant = k[A]⁰`, so the reaction is zero order in `A`. First- and second-order reactions both curve downward as `[A]` decreases.",
    },
    {
      id: "r2-amount-rate-extent-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Evaluating rate constant k",
      question:
        "A reaction obeys `rate = k[A]²[B]`. When `[A] = 0.10 mol dm⁻³` and `[B] = 0.25 mol dm⁻³`, the initial rate is `5.0 × 10⁻⁴ mol dm⁻³ s⁻¹`. Calculate the numerical value of `k` (in `dm⁶ mol⁻² s⁻¹`).",
      answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 dm⁶ mol⁻² s⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 0.02, tolerance: 0.001 },
          feedback: "Remember `[A]` is squared (`0.10² = 0.010`), not raised to the first power.",
        },
      ],
      hints: [
        "Rearrange `rate = k[A]²[B]` to isolate `k`.",
        "Evaluate `(5.0 × 10⁻⁴) / (0.10² × 0.25)` carefully.",
      ],
      solution: [
        "`k = {{(5.0 * 10^(-4)) / (0.10^2 * 0.25)}} = {{(5.0 * 10^(-4)) / 0.0025}} = 0.20 dm⁶ mol⁻² s⁻¹`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Arrhenius linear plot gradient",
      question:
        "An Arrhenius graph of `ln k` against `1/T` (in `K⁻¹`) has a gradient of `−7200 K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the activation energy `E_a` in `kJ mol⁻¹` to 3 significant figures.",
      answer: { type: "number", value: 59.8, tolerance: 0.2, display: "59.8 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 59832, tolerance: 200 },
          feedback: "That value is in `J mol⁻¹` — divide by `1000` to convert to `kJ mol⁻¹`.",
        },
      ],
      hints: [
        "In `ln k = −(E_a / R)(1/T) + ln A`, the gradient equals `−E_a / R`.",
        "Multiply `7200 K` by `8.31 J K⁻¹ mol⁻¹`, then convert from `J` to `kJ`.",
      ],
      solution: [
        "`E_a = −(gradient) × R = 7200 × 8.31 = 59,832 J mol⁻¹`.",
        "Convert to `kJ mol⁻¹`: `{{59832 / 1000}} = 59.8 kJ mol⁻¹`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Predict",
      guideRef: "equilibrium-ice-gibbs-hl",
      strategy: "Le Chatelier temperature stress on endothermic equilibrium",
      question:
        "The reversible reaction `PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)` is endothermic (`ΔH⊖ = +88 kJ mol⁻¹`). If the reaction vessel is cooled at constant volume, what happens to the equilibrium position and `K_c`?",
      options: [
        "Shifts right toward products and K_c increases.",
        "Shifts left toward reactant PCl₅ and K_c decreases.",
        "Shifts left toward reactant PCl₅ and K_c stays unchanged.",
        "Shifts right toward products and K_c stays unchanged.",
      ],
      answerIndex: 1,
      hints: [
        "Cooling removes thermal energy, so the system shifts in the exothermic direction to release heat.",
        "Since the forward reaction is endothermic, the reverse reaction is exothermic — what does shifting left do to `K_c`?",
      ],
      explanation:
        "Lowering temperature favours the exothermic reverse reaction (`PCl₃ + Cl₂ → PCl₅`), shifting equilibrium left. Because `[PCl₃]` and `[Cl₂]` fall while `[PCl₅]` rises, `K_c` decreases.",
    },
    {
      id: "r2-amount-rate-extent-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "equilibrium-ice-gibbs-hl",
      strategy: "Gibbs free energy from equilibrium constant",
      question:
        "At `298 K`, a reversible reaction has equilibrium constant `K = 2.50 × 10³`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate `ΔG⊖` in `kJ mol⁻¹` to 3 significant figures.",
      answer: { type: "number", value: -19.4, tolerance: 0.2, display: "−19.4 kJ mol⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 19.4, tolerance: 0.2 },
          feedback: "Check the negative sign in `ΔG⊖ = −RT ln K`: when `K > 1`, `ΔG⊖` must be negative.",
        },
        {
          spec: { type: "number", value: -8.41, tolerance: 0.1 },
          feedback: "Use the natural logarithm `ln(2500)`, not base-10 `log₁₀(2500)`.",
        },
      ],
      hints: [
        "Use `ΔG⊖ = −R T ln K` with `R = 8.31 J K⁻¹ mol⁻¹` and `T = 298 K`.",
        "Divide the answer in `J mol⁻¹` by `1000` to obtain `kJ mol⁻¹`.",
      ],
      solution: [
        "`ΔG⊖ = −8.31 × 298 × ln(2.50 × 10³) = −2476.38 × 7.8240 = −19,375 J mol⁻¹`.",
        "Converting to `kJ mol⁻¹`: `ΔG⊖ = −19.4 kJ mol⁻¹`.",
      ],
    },
  ],
  papers: [
    {
      id: "r2-amount-rate-extent-p1",
      title: "Paper 2 · Core Stoichiometry, Kinetics & Equilibrium (SL)",
      level: "SL",
      questions: [
        {
          id: "r2-amount-rate-extent-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Limiting reactant mass calculation",
          question:
            "Magnesium burns in oxygen according to `2Mg(s) + O₂(g) → 2MgO(s)`. Given `M(Mg) = 24.31 g mol⁻¹`, `M(O₂) = 32.00 g mol⁻¹`, and `M(MgO) = 40.31 g mol⁻¹`, calculate the maximum mass of `MgO` (in `g`, to 3 significant figures) formed when `4.86 g` of `Mg` reacts with `6.40 g` of `O₂`.",
          answer: { type: "number", value: 8.06, tolerance: 0.05, display: "8.06 g" },
          traps: [
            {
              spec: { type: "number", value: 16.1, tolerance: 0.1 },
              feedback: "Check which reactant is limiting: `n(Mg)/2 = 0.100 < n(O₂)/1 = 0.200`, so `Mg` limits the yield.",
            },
          ],
          hints: [
            "Convert both `4.86 g` of `Mg` and `6.40 g` of `O₂` to moles.",
            "Divide `n(Mg)` by `2` and `n(O₂)` by `1` to identify the limiting reactant.",
          ],
          solution: [
            "`n(Mg) = {{4.86 / 24.31}} = 0.1999 mol`; `n(O₂) = {{6.40 / 32.00}} = 0.2000 mol`.",
            "Compare `n / coeff`: `Mg`: `0.1999 / 2 = 0.100`; `O₂`: `0.2000 / 1 = 0.200`. Thus `Mg` is limiting.",
            "`n(MgO) = n(Mg) = 0.1999 mol` (`2 : 2` ratio), so `m(MgO) = 0.1999 × 40.31 = 8.06 g`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Percentage yield in organic synthesis",
          question:
            "Aspirin (`C₉H₈O₄`, `M = 180.16 g mol⁻¹`) is synthesised in a `1 : 1` molar ratio from salicylic acid (`C₇H₆O₃`, `M = 138.12 g mol⁻¹`) with excess ethanoic anhydride. If `10.0 g` of salicylic acid yields `9.90 g` of pure aspirin, calculate the percentage yield to 3 significant figures.",
          answer: { type: "number", value: 75.9, tolerance: 0.2, display: "75.9%" },
          traps: [
            {
              spec: { type: "number", value: 99, tolerance: 0.5 },
              feedback: "You cannot divide `9.90 g` by `10.0 g` directly — first compute the theoretical mass of aspirin from moles of salicylic acid.",
            },
          ],
          hints: [
            "Compute `n(salicylic acid) = 10.0 / 138.12`.",
            "Multiply those moles by `180.16 g mol⁻¹` to find the theoretical mass of aspirin, then divide `9.90 g` by it.",
          ],
          solution: [
            "`n(salicylic acid) = {{10.0 / 138.12}} = 0.07240 mol`.",
            "Theoretical mass of aspirin `= 0.07240 × 180.16 = 13.04 g`.",
            "`% yield = {{(9.90 / 13.04) * 100}} = 75.9%`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Atom economy of industrial metal extraction",
          question:
            "Titanium is extracted via the Kroll process: `TiCl₄(l) + 2Mg(l) → Ti(s) + 2MgCl₂(l)`. Given `M(TiCl₄) = 189.68 g mol⁻¹`, `M(Mg) = 24.31 g mol⁻¹`, and `M(Ti) = 47.87 g mol⁻¹`, calculate the percentage atom economy for titanium to 3 significant figures.",
          answer: { type: "number", value: 20.1, tolerance: 0.2, display: "20.1%" },
          hints: [
            "Find the total molar mass of reactants: `M(TiCl₄) + 2 × M(Mg)`.",
            "Divide `M(Ti)` by that sum and multiply by `100%`.",
          ],
          solution: [
            "Total reactant mass `= 189.68 + 2(24.31) = 238.30 g mol⁻¹`.",
            "`% atom economy = {{(47.87 / 238.30) * 100}} = 20.1%`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Reacting gas volumes with excess reactant",
          question:
            "Propane undergoes complete combustion: `C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)`. A mixture of `30.0 cm³` of `C₃H₈(g)` and `200.0 cm³` of `O₂(g)` is ignited and cooled back to room temperature and pressure (where `H₂O` is liquid). Calculate the total volume of gas remaining in `cm³`.",
          answer: { type: "number", value: 140, tolerance: 0.5, display: "140 cm³" },
          traps: [
            {
              spec: { type: "number", value: 90, tolerance: 0.5 },
              feedback: "`90 cm³` is the volume of `CO₂` produced — don't forget to add the unreacted excess `O₂`!",
            },
          ],
          hints: [
            "Use volume ratios `1 : 5 : 3` to find how much `O₂` reacts with `30.0 cm³` of `C₃H₈` and how much `CO₂` is formed.",
            "Add the excess unreacted `O₂` volume to the `CO₂` volume (ignoring liquid `H₂O`).",
          ],
          solution: [
            "`O₂` needed `= 5 × 30.0 = 150.0 cm³`, so `C₃H₈` is limiting and excess `O₂ = 200.0 − 150.0 = 50.0 cm³`.",
            "`CO₂` produced `= 3 × 30.0 = 90.0 cm³`; `H₂O(l)` condenses.",
            "Total remaining gas `= 50.0 + 90.0 = 140 cm³`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Redox volumetric titration",
          question:
            "Acidified `MnO₄⁻` reacts with ethanedioate ions: `2MnO₄⁻(aq) + 5C₂O₄²⁻(aq) + 16H⁺(aq) → 2Mn²⁺(aq) + 10CO₂(g) + 8H₂O(l)`. A `25.0 cm³` sample of `C₂O₄²⁻(aq)` requires `22.40 cm³` of `0.0250 mol dm⁻³ KMnO₄(aq)` to reach the pale-pink endpoint. Calculate `[C₂O₄²⁻]` in `mol dm⁻³` to 3 significant figures.",
          answer: { type: "number", value: 0.056, tolerance: 0.001, display: "0.0560 mol dm⁻³" },
          traps: [
            {
              spec: { type: "number", value: 0.0224, tolerance: 0.0005 },
              feedback: "Remember to apply the `2 : 5` molar ratio (`multiply by 5/2`) to convert `n(MnO₄⁻)` to `n(C₂O₄²⁻)`.",
            },
          ],
          hints: [
            "Compute `n(MnO₄⁻) = 0.0250 × (22.40 / 1000)`.",
            "Multiply by `5 / 2` to obtain `n(C₂O₄²⁻)`, then divide by `0.0250 dm³`.",
          ],
          solution: [
            "`n(MnO₄⁻) = 0.0250 × 0.02240 = 5.60 × 10⁻⁴ mol`.",
            "`n(C₂O₄²⁻) = {{5/2}} × 5.60 × 10⁻⁴ = 1.40 × 10⁻³ mol`.",
            "`[C₂O₄²⁻] = {{(1.40 * 10^(-3)) / 0.0250}} = 0.0560 mol dm⁻³`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "stoichiometry-titrations",
          strategy: "Designing a back-titration procedure",
          marks: 3,
          question:
            "Explain why an indirect method is required to measure the calcium carbonate content of crushed eggshell using hydrochloric acid, and outline the key quantitative calculation steps involved.",
          hints: [
            "Consider the solubility of `CaCO₃` in water and how rapidly it reacts near an endpoint.",
            "Describe reacting with a known excess of acid, titrating the leftover acid with standard base, and subtracting the two mole amounts.",
          ],
          modelAnswer:
            "Calcium carbonate is insoluble in water and reacts too slowly near equivalence for a sharp direct endpoint, so a back-titration is used. First, react the crushed shell with a known excess volume and concentration of standard HCl to obtain total moles added. Next, titrate the unreacted remaining HCl against a standard NaOH solution to determine the excess moles. Finally, subtract the excess moles from the initial total moles to get the reacted HCl, and divide by 2 using the 1:2 stoichiometry to obtain moles of CaCO₃.",
          markScheme: [
            {
              point: "States CaCO₃ is insoluble in water / reacts too slowly for a sharp direct endpoint, requiring a back-titration.",
              keywords: ["insoluble", "slowly", "sharp", "back-titration", "back titration"],
            },
            {
              point: "React sample with a known excess of standard HCl and titrate the unreacted leftover acid with standard NaOH.",
              keywords: ["known excess", "unreacted", "leftover", "naoh", "standard base"],
            },
            {
              point: "Subtract excess moles of HCl from total initial moles added, then apply the 1:2 mole ratio (divide by 2) to find moles of CaCO₃.",
              keywords: ["subtract", "difference", "divide by 2", "1:2", "stoichiometry"],
            },
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "collision-theory-kinetics",
          strategy: "Stoichiometric rate relation",
          question:
            "Nitric oxide reacts with hydrogen according to `2NO(g) + 2H₂(g) → N₂(g) + 2H₂O(g)`. At a given instant, `H₂` is consumed at `0.00480 mol dm⁻³ s⁻¹`. Calculate the instantaneous rate of formation of `N₂` in `mol dm⁻³ s⁻¹`.",
          answer: { type: "number", value: 0.0024, tolerance: 0.0001, display: "0.00240 mol dm⁻³ s⁻¹" },
          hints: [
            "Use the balanced coefficients `2 H₂ : 1 N₂`.",
            "For every `2 mol` of `H₂` consumed, `1 mol` of `N₂` forms.",
          ],
          solution: [
            "`rate(N₂) = {{1/2}} × rate(H₂) = {{1/2}} × 0.00480 = 0.00240 mol dm⁻³ s⁻¹`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "collision-theory-kinetics",
          strategy: "Maxwell–Boltzmann comparison of temperature vs catalyst",
          marks: 4,
          question:
            "Compare and contrast how raising temperature and adding a catalyst each accelerate a chemical reaction, referring explicitly to activation energy, particle kinetic energies, and the Maxwell–Boltzmann distribution.",
          hints: [
            "Explain how higher `T` reshapes the curve (peak shifts right and lowers, same area) while keeping `E_a` fixed.",
            "Explain how a catalyst leaves the curve unchanged but provides an alternative pathway with a lower `E_a`.",
            "Finish by identifying the common outcome: a higher frequency of successful collisions.",
          ],
          modelAnswer:
            "Both raising temperature and adding a catalyst increase the proportion of particles with energy equal to or greater than the activation energy, raising the frequency of successful collisions per unit time. Raising temperature increases the average kinetic energy of particles, shifting the Maxwell–Boltzmann peak lower and to the right while keeping total area constant and leaving E_a unchanged; collision frequency also increases slightly. In contrast, a catalyst leaves particle kinetic energies and the distribution curve completely unchanged, instead offering an alternative pathway with a lower activation energy that shifts the E_a threshold to the left without altering ΔH.",
          markScheme: [
            {
              point: "Similarity: both increase the proportion/fraction of particles with E ≥ E_a, increasing the frequency of successful collisions.",
              keywords: ["proportion", "fraction", "frequency of successful collisions", "effective collisions"],
            },
            {
              point: "Temperature increases average kinetic energy and shifts the Maxwell–Boltzmann peak right and lower (area constant, E_a unchanged).",
              keywords: ["average kinetic energy", "lower and to the right", "shifts right", "area constant"],
            },
            {
              point: "Catalyst provides an alternative pathway with a lower activation energy, shifting the E_a line leftward.",
              keywords: ["alternative pathway", "lower activation energy", "left"],
            },
            {
              point: "Catalyst does NOT change the Maxwell–Boltzmann curve shape (or kinetic energy distribution) or ΔH.",
              keywords: ["curve completely unchanged", "curve unchanged", "without altering", "unchanged"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant collision-theory or Maxwell–Boltzmann explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Mentions faster rate or lower E_a / higher energy, but confuses curve shift with catalyst or omits frequency of successful collisions." },
            { band: "3", marks: [3, 3], descriptor: "Accurately distinguishes temperature vs catalyst mechanisms on the distribution, missing one minor detail (e.g. peak lowering or unchanged curve)." },
            { band: "4", marks: [4, 4], descriptor: "Complete comparison covering proportion with E ≥ E_a, frequency of successful collisions, curve peak/area shift with T, and alternative lower-E_a pathway with unchanged curve for a catalyst." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "collision-theory-kinetics",
          strategy: "Gas-volume curve comparison (surface area + temperature + limiting reactant)",
          marks: 3,
          question:
            "In Trial 1, `1.00 g` of marble chips (`CaCO₃`, limiting reactant) reacts with excess `50.0 cm³` of `1.00 mol dm⁻³ HCl(aq)` at `293 K`. In Trial 2, `1.00 g` of powdered `CaCO₃` reacts with excess `50.0 cm³` of `1.00 mol dm⁻³ HCl(aq)` at `313 K`. Compare the gas volume–time curves for both trials in terms of initial gradient, time to reach the plateau, and final gas volume.",
          hints: [
            "Consider both increased surface area and higher temperature on initial collision rate.",
            "Check whether the moles of the limiting reactant (`CaCO₃`) changed between Trial 1 and Trial 2.",
          ],
          modelAnswer:
            "Trial 2 has a much steeper initial gradient because powdered CaCO₃ has a larger surface area and the higher temperature (313 K vs 293 K) increases both collision frequency and the fraction of particles with E ≥ E_a. Consequently, Trial 2 finishes and levels off at the plateau in a shorter time. However, because both trials use the exact same 1.00 g mass (same moles) of limiting CaCO₃, both curves reach the identical final volume of CO₂ gas (assuming gas volume is measured at the same final temperature).",
          markScheme: [
            {
              point: "Trial 2 has a steeper initial gradient due to greater surface area AND higher temperature (higher frequency of effective collisions).",
              keywords: ["steeper", "surface area", "higher temperature"],
            },
            {
              point: "Trial 2 reaches the horizontal plateau in a shorter time (finishes sooner).",
              keywords: ["shorter time", "sooner", "earlier", "levels off"],
            },
            {
              point: "Both curves reach the identical/same final CO₂ volume because the amount (1.00 g) of limiting CaCO₃ is unchanged.",
              keywords: ["identical", "same final volume", "same moles", "unchanged"],
            },
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q10",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Scaling K_c when coefficients are halved",
          question:
            "At a fixed temperature, `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)` has `K_c = 25.0`. Calculate `K_c'` at the same temperature for `½N₂(g) + 3/2 H₂(g) ⇌ NH₃(g)`.",
          answer: { type: "number", value: 5, tolerance: 0.05, display: "5.00" },
          traps: [
            {
              spec: { type: "number", value: 12.5, tolerance: 0.1 },
              feedback: "Halving equation coefficients takes the square root `(K_c)^(1/2)`, NOT dividing `K_c` by `2`!",
            },
          ],
          hints: [
            "Every stoichiometric coefficient is multiplied by `1/2`.",
            "Multiplying an equation by `n` raises `K_c` to the power `n`.",
          ],
          solution: [
            "`K_c' = (K_c)^(1/2) = {{sqrt(25.0)}} = 5.00`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Direct substitution into K_c",
          question:
            "At equilibrium for `2SO₂(g) + O₂(g) ⇌ 2SO₃(g)`, the concentrations are `[SO₂] = 0.40 mol dm⁻³`, `[O₂] = 0.25 mol dm⁻³`, and `[SO₃] = 0.60 mol dm⁻³`. Calculate `K_c` to 3 significant figures.",
          answer: { type: "number", value: 9, tolerance: 0.05, display: "9.00" },
          traps: [
            {
              spec: { type: "number", value: 6, tolerance: 0.05 },
              feedback: "Remember to square both `[SO₃]` and `[SO₂]` according to their stoichiometric coefficients of `2`.",
            },
          ],
          hints: [
            "Write `K_c = [SO₃]² / ([SO₂]²[O₂])`.",
            "Evaluate `0.60² / (0.40² × 0.25)`.",
          ],
          solution: [
            "`K_c = {{0.60^2 / (0.40^2 * 0.25)}} = {{0.36 / (0.16 * 0.25)}} = {{0.36 / 0.04}} = 9.00`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Predict",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Applying Le Chatelier's Principle systematically",
          marks: 3,
          question:
            "In the Contact process (`2SO₂(g) + O₂(g) ⇌ 2SO₃(g)`, `ΔH⊖ = −196 kJ mol⁻¹`), predict and justify the effect on BOTH equilibrium yield of `SO₃` and `K_c` of: (i) increasing pressure, (ii) increasing temperature, and (iii) adding a `V₂O₅` catalyst.",
          hints: [
            "Count gas moles (`3` left vs `2` right) for pressure, check exothermic/endothermic for temperature, and remember only `T` changes `K_c`.",
            "Remember a catalyst accelerates forward and reverse pathways equally.",
          ],
          modelAnswer:
            "(i) Increasing pressure shifts equilibrium right toward fewer moles of gas (3 mol → 2 mol), increasing SO₃ yield while K_c stays unchanged. (ii) Increasing temperature favours the endothermic reverse reaction, shifting equilibrium left so SO₃ yield decreases and K_c decreases. (iii) Adding V₂O₅ catalyst accelerates forward and reverse rates equally, reaching equilibrium faster with zero change in SO₃ yield or K_c.",
          markScheme: [
            {
              point: "Higher pressure shifts right (fewer gas moles: 3 → 2), increasing yield; K_c unchanged.",
              keywords: ["fewer moles of gas", "3 mol", "shifts right", "unchanged"],
            },
            {
              point: "Higher temperature favours endothermic reverse direction, shifting left; yield decreases AND K_c decreases.",
              keywords: ["endothermic", "shifts left", "k_c decreases", "decreases"],
            },
            {
              point: "V₂O₅ catalyst speeds forward and reverse rates equally; no change to yield or K_c.",
              keywords: ["rates equally", "faster", "zero change", "no change"],
            },
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "stoichiometry-titrations",
          strategy: "Back-titration percentage purity",
          question:
            "A `1.20 g` sample of impure magnesium carbonate (`MgCO₃`, `M = 84.31 g mol⁻¹`) reacts completely with `50.0 cm³` of `0.500 mol dm⁻³ HCl(aq)` (`MgCO₃ + 2HCl → MgCl₂ + H₂O + CO₂`). The unreacted acid requires `18.00 cm³` of `0.250 mol dm⁻³ NaOH(aq)` for neutralisation. Calculate the percentage purity of `MgCO₃` to 3 significant figures.",
          answer: { type: "number", value: 72.0, tolerance: 0.3, display: "72.0%" },
          traps: [
            {
              spec: { type: "number", value: 87.8, tolerance: 0.4 },
              feedback: "Did you forget to subtract the unreacted `HCl` (`0.00450 mol`) before computing `n(MgCO₃)`?",
            },
          ],
          hints: [
            "Calculate `n_total(HCl) = 0.500 × 0.0500` and `n_excess(HCl) = 0.250 × 0.01800`.",
            "Subtract to get `n_reacted(HCl)`, divide by `2` for `n(MgCO₃)`, multiply by `84.31 g mol⁻¹`, and divide by `1.20 g`.",
          ],
          solution: [
            "`n_total(HCl) = 0.500 × 0.0500 = 0.02500 mol`; `n_excess(HCl) = n(NaOH) = 0.250 × 0.01800 = 0.00450 mol`.",
            "`n_reacted(HCl) = 0.02500 − 0.00450 = 0.02050 mol`, so `n(MgCO₃) = {{0.02050 / 2}} = 0.01025 mol`.",
            "`m(MgCO₃) = 0.01025 × 84.31 = 0.8642 g` → `% purity = {{(0.8642 / 1.20) * 100}} = 72.0%`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Interpreting Le Chatelier concentration–time graphs",
          marks: 4,
          question:
            "A closed vessel containing `N₂(g) + 3H₂(g) ⇌ 2NH₃(g)` at constant temperature shows flat concentration–time lines until `t₁`, when ONLY `[H₂]` jumps sharply upward vertically, followed by smooth curves settling flat again by `t₂`. Identify the imposed disturbance, explain the direction of the shift, state the relative magnitudes of the concentration changes between `t₁` and `t₂`, and state what happens to `K_c`.",
          hints: [
            "A single vertical upward jump on one curve identifies injection of that species at constant volume.",
            "Use the balanced coefficients `1 : 3 : 2` to describe how much `[N₂]`, `[H₂]`, and `[NH₃]` change from `t₁` to `t₂`.",
          ],
          modelAnswer:
            "The isolated vertical jump indicates that extra H₂ gas was injected into the vessel at t₁. By Le Chatelier's Principle, the equilibrium shifts to the right (forward) to partially consume the added H₂. Between t₁ and t₂, [N₂] falls by x, [H₂] falls by 3x (ending higher than before t₁), and [NH₃] rises by 2x, following the 1 : 3 : 2 stoichiometric ratio. Because temperature remained unchanged throughout, K_c stays constant at its original value.",
          markScheme: [
            {
              point: "Identifies disturbance as injection/addition of H₂(g) at t₁.",
              keywords: ["injected", "added h2", "extra h2", "addition of h2"],
            },
            {
              point: "States equilibrium shifts right (forward) to partially oppose/consume the added H₂.",
              keywords: ["shifts to the right", "shifts right", "forward", "partially consume"],
            },
            {
              point: "Gives relative changes in 1 : 3 : 2 ratio ([N₂] −x, [H₂] −3x, [NH₃] +2x).",
              keywords: ["1 : 3 : 2", "1:3:2", "3x", "2x"],
            },
            {
              point: "States K_c remains constant because temperature did not change.",
              keywords: ["stays constant", "remains constant", "temperature remained unchanged", "unchanged"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid identification of the disturbance or shift." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies added H₂ and shift right, without stoichiometric proportions or K_c justification." },
            { band: "3", marks: [3, 3], descriptor: "Covers disturbance, shift direction, and either 1:3:2 proportions or constant K_c." },
            { band: "4", marks: [4, 4], descriptor: "Complete analysis: H₂ injection, shift right, exact 1:3:2 concentration changes (noting [H₂] ends above initial), and constant K_c due to fixed T." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Industrial kinetics–equilibrium–economics evaluation",
          marks: 6,
          question:
            "Evaluate the industrial operating conditions of the Haber process (`N₂(g) + 3H₂(g) ⇌ 2NH₃(g)`, `ΔH⊖ = −92 kJ mol⁻¹`; `450 °C`, `20 MPa`, iron catalyst, cooling to condense `NH₃(l)`, and recycling unreacted gases) with respect to reaction rate, equilibrium yield, capital/energy cost, and green-chemistry atom economy.",
          hints: [
            "Explain the temperature conflict (exothermic low-T yield vs high-T kinetic speed).",
            "Explain why `20 MPa` is a pressure compromise (yield & rate both benefit from higher `p`, but thick-walled reactors and compression are costly/hazardous).",
            "Include the iron catalyst, continuous removal of liquefied `NH₃`, recycling unreacted `N₂`/`H₂`, and the `100%` theoretical atom economy.",
          ],
          modelAnswer:
            "Because ammonia synthesis is exothermic, low temperatures maximise equilibrium yield (higher K_c), but the strong N≡N triple bond gives a large activation energy, making the rate uneconomically slow; 450 °C is therefore a kinetic–thermodynamic compromise. High pressure favours both faster collision frequency and higher equilibrium yield (4 mol gas → 2 mol gas), yet pressures above 20 MPa demand expensive thick-walled steel reactors, high compressor energy, and safety risks, so 20 MPa is an economic compromise. An iron catalyst lowers activation energy to achieve rapid rates at moderate temperature without altering equilibrium position. Cooling the exit stream condenses NH₃(l) to shift equilibrium right, while recycling unreacted N₂ and H₂ pushes overall conversion close to 98% despite a ~15% single-pass yield. Finally, since N₂ + 3H₂ → 2NH₃ forms a single product, the synthesis has 100% atom economy, though sourcing H₂ from methane steam reforming still incurs carbon emissions.",
          markScheme: [
            {
              point: "Explains temperature compromise: exothermic reaction favours low T for yield, but 450 °C is needed for an acceptable kinetic rate (high E_a / N≡N).",
              keywords: ["compromise", "slow", "activation energy", "kinetic"],
            },
            {
              point: "Explains pressure benefit: 4 mol gas → 2 mol gas means high pressure increases BOTH equilibrium yield and collision rate.",
              keywords: ["4 mol", "2 mol", "fewer", "both"],
            },
            {
              point: "Explains why pressure is capped at 20 MPa: high equipment/steel/energy costs and safety hazards.",
              keywords: ["expensive", "cost", "safety", "thick-walled", "compressor"],
            },
            {
              point: "Explains iron catalyst lowers E_a so equilibrium is reached faster without changing yield or K_c.",
              keywords: ["lowers activation energy", "iron catalyst", "rapid", "faster"],
            },
            {
              point: "Explains condensing NH₃(l) shifts equilibrium right and recycling unreacted gases raises overall conversion.",
              keywords: ["condenses", "recycling", "conversion", "single-pass"],
            },
            {
              point: "Notes 100% atom economy (single product) and/or evaluates environmental energy/H₂-source trade-off.",
              keywords: ["100%", "single product", "emissions", "steam reforming"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No relevant chemical or industrial evaluation." },
            { band: "1–2", marks: [1, 2], descriptor: "States conditions and basic Le Chatelier shifts, with little link to kinetics or economic constraints." },
            { band: "3–4", marks: [3, 4], descriptor: "Explains both temperature and pressure compromises and catalyst role clearly, but lacks recycling/condensation or atom-economy evaluation." },
            { band: "5–6", marks: [5, 6], descriptor: "Balanced, thorough evaluation integrating kinetics, Le Chatelier yield, safety/cost engineering limits, NH₃ liquefaction/recycling, and 100% atom economy." },
          ],
        },
      ],
    },
    {
      id: "r2-amount-rate-extent-p2",
      title: "Paper 2 · HL Rate Laws, Arrhenius, ICE Tables & ΔG⊖–K",
      level: "HL",
      questions: [
        {
          id: "r2-amount-rate-extent-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Initial-rates table to rate constant k",
          question:
            "For `2A(aq) + B(aq) → C(aq)` at `298 K`, initial-rate trials give:\n" +
            "| Trial | `[A]` / `mol dm⁻³` | `[B]` / `mol dm⁻³` | Initial rate / `mol dm⁻³ s⁻¹` |\n" +
            "|---|---|---|---|\n" +
            "| 1 | 0.10 | 0.10 | `2.0 × 10⁻⁴` |\n" +
            "| 2 | 0.20 | 0.10 | `4.0 × 10⁻⁴` |\n" +
            "| 3 | 0.20 | 0.30 | `3.6 × 10⁻³` |\n" +
            "Deduce the rate equation and calculate the numerical value of `k` (in `dm⁶ mol⁻² s⁻¹`).",
          answer: { type: "number", value: 0.2, tolerance: 0.005, display: "0.20 dm⁶ mol⁻² s⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 0.02, tolerance: 0.001 },
              feedback: "Check the order in `B`: tripling `[B]` multiplies rate by `9` (`3²`), so `B` is 2nd order (`rate = k[A][B]²`).",
            },
          ],
          hints: [
            "Compare Trials 1 and 2 to find the order in `A`, then Trials 2 and 3 to find the order in `B`.",
            "Substitute Trial 1 into `rate = k[A]^m[B]^n` and solve for `k`.",
          ],
          solution: [
            "Trials 1 → 2 (`[B]` constant): `[A] × 2`, `rate × 2` → 1st order in `A`.",
            "Trials 2 → 3 (`[A]` constant): `[B] × 3`, `rate × 9 = 3²` → 2nd order in `B`. Thus `rate = k[A][B]²`.",
            "`k = {{(2.0 * 10^(-4)) / (0.10 * 0.10^2)}} = 0.20 dm⁶ mol⁻² s⁻¹`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Predicting initial rate from rate law",
          question:
            "A reaction obeys `rate = k[P]²[Q]` with `k = 0.50 dm⁶ mol⁻² s⁻¹` at `300 K`. Calculate the initial rate (in `mol dm⁻³ s⁻¹`) when `[P] = 0.40 mol dm⁻³` and `[Q] = 0.25 mol dm⁻³`.",
          answer: { type: "number", value: 0.02, tolerance: 0.0005, display: "0.020 mol dm⁻³ s⁻¹" },
          hints: [
            "Square `[P] = 0.40` first (`0.16`), then multiply by `k = 0.50` and `[Q] = 0.25`.",
          ],
          solution: [
            "`rate = 0.50 × (0.40)² × 0.25 = 0.50 × 0.16 × 0.25 = 0.020 mol dm⁻³ s⁻¹`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Deduce",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Proposing a slow-first-step mechanism",
          marks: 4,
          question:
            "Below `500 K`, the reaction `NO₂(g) + CO(g) → NO(g) + CO₂(g)` has the experimental rate equation `rate = k[NO₂]²`. Explain why this reaction cannot occur in a single elementary step, propose a consistent two-step mechanism clearly labelling the rate-determining step and any intermediate, and show that your steps sum to the overall equation.",
          hints: [
            "Compare the stoichiometry of a single step (`1 NO₂ + 1 CO`) against the experimental rate law (`2 NO₂`, `0 CO`).",
            "Write a slow bimolecular Step 1 involving `NO₂ + NO₂ → NO₃ + NO`, then let intermediate `NO₃` react rapidly with `CO`.",
          ],
          modelAnswer:
            "A single elementary step would require one NO₂ and one CO molecule to collide, giving rate = k[NO₂][CO], which disagrees with the experimental second-order dependence on NO₂ and zero-order dependence on CO. A consistent mechanism is: Step 1 (slow, RDS): NO₂ + NO₂ → NO₃ + NO; Step 2 (fast): NO₃ + CO → NO₂ + CO₂. Here NO₃ is a reactive intermediate (formed in Step 1 and consumed in Step 2). Summing both steps cancels NO₃ and one NO₂ to regenerate the overall equation NO₂ + CO → NO + CO₂, while the slow bimolecular Step 1 directly yields rate = k[NO₂]².",
          markScheme: [
            {
              point: "Explains a single step would predict rate = k[NO₂][CO], disagreeing with zero order in CO and 2nd order in NO₂.",
              keywords: ["k[no2][co]", "zero-order", "disagrees", "one no2 and one co"],
            },
            {
              point: "Proposes slow RDS Step 1: NO₂ + NO₂ → NO₃ + NO (matching rate = k[NO₂]²).",
              keywords: ["slow", "rds", "no2 + no2", "no3 + no"],
            },
            {
              point: "Proposes fast Step 2: NO₃ + CO → NO₂ + CO₂ and identifies NO₃ as the intermediate.",
              keywords: ["fast", "no3 + co", "intermediate"],
            },
            {
              point: "Verifies summing Step 1 and Step 2 cancels NO₃ (and one NO₂) to give overall NO₂ + CO → NO + CO₂.",
              keywords: ["cancels", "summing", "overall equation"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid kinetic reasoning or mechanism." },
            { band: "1–2", marks: [1, 2], descriptor: "Notes single step fails OR writes unbalanced/inconsistent steps." },
            { band: "3", marks: [3, 3], descriptor: "Correct two-step mechanism and RDS, missing either intermediate identification or explicit cancellation check." },
            { band: "4", marks: [4, 4], descriptor: "Complete derivation: rejects single step, gives balanced slow RDS + fast step, identifies NO₃ intermediate, and proves overall sum." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Two-temperature Arrhenius E_a calculation",
          question:
            "A reaction has rate constant `k₁ = 2.50 × 10⁻⁴ s⁻¹` at `300 K` and `k₂ = 2.00 × 10⁻³ s⁻¹` at `320 K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the activation energy `E_a` in `kJ mol⁻¹` to 3 significant figures.",
          answer: { type: "number", value: 82.9, tolerance: 0.4, display: "82.9 kJ mol⁻¹" },
          traps: [
            {
              spec: { type: "number", value: 82900, tolerance: 500 },
              feedback: "Divide by `1000` to convert `E_a` from `J mol⁻¹` to `kJ mol⁻¹`.",
            },
          ],
          hints: [
            "Use `ln(k₂ / k₁) = (E_a / R)(1/T₁ − 1/T₂)`.",
            "Evaluate `ln(8)` and `1/300 − 1/320 = 2.0833 × 10⁻⁴ K⁻¹`, then solve for `E_a` in `kJ mol⁻¹`.",
          ],
          solution: [
            "`ln(k₂/k₁) = ln(2.00 × 10⁻³ / 2.50 × 10⁻⁴) = ln(8) = 2.0794`.",
            "`{{1/300 - 1/320}} = 2.0833 × 10⁻⁴ K⁻¹`.",
            "`E_a = {{(2.0794 * 8.31) / (2.0833 * 10^(-4))}} = 82,944 J mol⁻¹ = 82.9 kJ mol⁻¹`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q05",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Predicting k₂ at a higher temperature",
          question:
            "A first-order reaction has `E_a = 62.0 kJ mol⁻¹` and `k₁ = 1.50 × 10⁻³ s⁻¹` at `298 K`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate `k₂` (in `s⁻¹`, to 3 significant figures) at `318 K`.",
          answer: { type: "number", value: 0.00724, tolerance: 0.00015, display: "0.00724 s⁻¹" },
          hints: [
            "Convert `E_a` to `62,000 J mol⁻¹` before substituting into `ln(k₂ / k₁) = (E_a / R)(1/298 − 1/318)`.",
            "Exponentiate to get `k₂ / k₁`, then multiply by `1.50 × 10⁻³ s⁻¹`.",
          ],
          solution: [
            "`ln(k₂ / k₁) = {{(62000 / 8.31) * (1/298 - 1/318)}} = 7460.89 × 2.1105 × 10⁻⁴ = 1.5746`.",
            "`k₂ / k₁ = e^(1.5746) = 4.8289`.",
            "`k₂ = 1.50 × 10⁻³ × 4.8289 = 0.00724 s⁻¹` (`7.24 × 10⁻³ s⁻¹`).",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Activation energy from Arrhenius slope",
          question:
            "An Arrhenius plot of `ln k` against `1/T` (in `K⁻¹`) yields the regression line `ln k = −8400(1/T) + 18.4`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate `E_a` in `kJ mol⁻¹` to 3 significant figures.",
          answer: { type: "number", value: 69.8, tolerance: 0.2, display: "69.8 kJ mol⁻¹" },
          hints: [
            "Match `ln k = −(E_a / R)(1/T) + ln A` to identify `E_a / R = 8400 K`.",
            "Multiply by `8.31 J K⁻¹ mol⁻¹` and divide by `1000`.",
          ],
          solution: [
            "`E_a = 8400 × 8.31 = 69,804 J mol⁻¹ = 69.8 kJ mol⁻¹`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Graphical diagnostics for 0th, 1st, and 2nd order",
          marks: 4,
          question:
            "Compare and contrast how zero-, first-, and second-order single-reactant reactions behave on (a) concentration–time graphs (including half-life trends) and (b) rate–concentration graphs, and state the units of `k` for each order.",
          hints: [
            "Describe the shape of `[A]` vs `t` and whether `t₁/₂` shrinks, stays constant, or grows.",
            "Describe `rate` vs `[A]` (horizontal, linear through origin, upward parabola) and give units of `k` for orders 0, 1, and 2.",
          ],
          modelAnswer:
            "On a concentration–time graph, a zero-order reaction is a straight downward line (constant gradient −k) whose half-life shortens as concentration falls; a first-order reaction is an exponential decay curve with a strictly constant half-life; and a second-order reaction is a steeper curve that flattens more slowly with a lengthening half-life. On a rate–concentration graph, zero order is a horizontal line (rate = k), first order is a straight line through the origin (gradient k), and second order is an upward parabola (rate ∝ [A]²). The units of k are mol dm⁻³ s⁻¹ for zero order, s⁻¹ for first order, and dm³ mol⁻¹ s⁻¹ for second order.",
          markScheme: [
            {
              point: "Zero order: straight downward [A] vs t line (decreasing half-life) and horizontal rate vs [A] line.",
              keywords: ["straight downward", "horizontal", "shortens"],
            },
            {
              point: "First order: exponential decay [A] vs t with constant half-life, and linear rate vs [A] through origin.",
              keywords: ["constant half-life", "through the origin", "exponential"],
            },
            {
              point: "Second order: steeper curved [A] vs t with lengthening/increasing half-life, and upward parabola on rate vs [A].",
              keywords: ["lengthening", "parabola", "steeper curve"],
            },
            {
              point: "Correct units of k for all three: mol dm⁻³ s⁻¹ (0th), s⁻¹ (1st), dm³ mol⁻¹ s⁻¹ (2nd).",
              keywords: ["mol dm⁻³ s⁻¹", "s⁻¹", "dm³ mol⁻¹ s⁻¹"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No accurate graphical or unit comparisons." },
            { band: "1–2", marks: [1, 2], descriptor: "Describes one graph set partially or misassigns half-life/units." },
            { band: "3", marks: [3, 3], descriptor: "Accurate comparison of both graph families and half-lives, with one minor omission in units or shape." },
            { band: "4", marks: [4, 4], descriptor: "Complete, precise comparison of [A]–t shapes, half-life trends, rate–[A] shapes, and exact units of k for 0th, 1st, and 2nd order." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q08",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Derive",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Fast pre-equilibrium intermediate substitution",
          marks: 4,
          question:
            "For `2NO(g) + H₂(g) → N₂O(g) + H₂O(g)`, consider the proposed two-step mechanism:\nStep 1 (fast equilibrium): `2NO(g) ⇌ N₂O₂(g)`\nStep 2 (slow): `N₂O₂(g) + H₂(g) → N₂O(g) + H₂O(g)`\nDerive the rate law in terms of observable reactants only, explain why `N₂O₂` must be eliminated, and justify why this two-step pathway is more plausible than a single-step reaction.",
          hints: [
            "Write `rate = k₂[N₂O₂][H₂]` from the slow Step 2, then express `[N₂O₂]` using `K₁ = [N₂O₂] / [NO]²` from Step 1.",
            "Compare the collision probability of two bimolecular steps versus a simultaneous three-body (termolecular) collision.",
          ],
          modelAnswer:
            "Because Step 2 is the slow rate-determining step, rate = k₂[N₂O₂][H₂]. However, N₂O₂ is an unstable reactive intermediate whose concentration cannot be controlled directly, so it must be eliminated from the final rate law. From the fast pre-equilibrium in Step 1, K₁ = [N₂O₂] / [NO]², which rearranges to [N₂O₂] = K₁[NO]². Substituting gives rate = k₂K₁[NO]²[H₂] = k[NO]²[H₂]. This two-step bimolecular pathway is far more plausible than a single termolecular step because the probability of three gas molecules colliding simultaneously with correct geometry and sufficient energy is extremely low.",
          markScheme: [
            {
              point: "Writes RDS rate equation from Step 2: rate = k₂[N₂O₂][H₂].",
              keywords: ["k2[n2o2][h2]", "k₂[n₂o₂][h₂]", "rate-determining step"],
            },
            {
              point: "Explains N₂O₂ is an intermediate that must be eliminated using Step 1 equilibrium: [N₂O₂] = K₁[NO]².",
              keywords: ["intermediate", "eliminated", "k1[no]2", "k₁[no]²"],
            },
            {
              point: "Substitutes to derive overall rate = k[NO]²[H₂] (with k = k₂K₁).",
              keywords: ["k[no]²[h₂]", "k2k1", "k₂k₁"],
            },
            {
              point: "Justifies bimolecular steps over termolecular: simultaneous three-molecule collision with proper geometry/energy is statistically very improbable.",
              keywords: ["bimolecular", "termolecular", "three", "simultaneously", "improbable"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid derivation or mechanistic reasoning." },
            { band: "1–2", marks: [1, 2], descriptor: "Identifies Step 2 as RDS or states final rate law without showing pre-equilibrium substitution." },
            { band: "3", marks: [3, 3], descriptor: "Complete algebraic derivation eliminating N₂O₂, missing termolecular collision justification (or vice versa)." },
            { band: "4", marks: [4, 4], descriptor: "Rigorous derivation from RDS + pre-equilibrium substitution to k[NO]²[H₂], clearly identifying intermediate and justifying bimolecular vs termolecular collision probability." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q09",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Evaluating reaction quotient Q",
          question:
            "For `2NO(g) + Cl₂(g) ⇌ 2NOCl(g)`, instantaneous concentrations are `[NO] = 0.20 mol dm⁻³`, `[Cl₂] = 0.50 mol dm⁻³`, and `[NOCl] = 0.40 mol dm⁻³`. Calculate the reaction quotient `Q` to 3 significant figures.",
          answer: { type: "number", value: 8, tolerance: 0.05, display: "8.00" },
          hints: [
            "Write `Q = [NOCl]² / ([NO]²[Cl₂])`.",
            "Evaluate `0.40² / (0.20² × 0.50)`.",
          ],
          solution: [
            "`Q = {{0.40^2 / (0.20^2 * 0.50)}} = {{0.16 / (0.04 * 0.50)}} = {{0.16 / 0.02}} = 8.00`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "ICE table with non-unit container volume",
          question:
            "Methanol synthesis `CO(g) + 2H₂(g) ⇌ CH₃OH(g)` starts with `0.600 mol` of `CO` and `1.000 mol` of `H₂` in a `2.00 dm³` reactor. At equilibrium, `0.200 mol` of `CH₃OH` is present. Calculate `K_c` to 3 significant figures.",
          answer: { type: "number", value: 5.56, tolerance: 0.05, display: "5.56" },
          traps: [
            {
              spec: { type: "number", value: 1.39, tolerance: 0.03 },
              feedback: "You substituted equilibrium moles instead of concentrations! Divide every equilibrium mole amount by `V = 2.00 dm³` first.",
            },
          ],
          hints: [
            "Convert initial and equilibrium moles to concentrations by dividing by `2.00 dm³` (`[CO]₀ = 0.300`, `[H₂]₀ = 0.500`, `[CH₃OH]_eq = 0.100`).",
            "Find `[CO]_eq = 0.300 − 0.100` and `[H₂]_eq = 0.500 − 2(0.100)`, then evaluate `[CH₃OH] / ([CO][H₂]²)`.",
          ],
          solution: [
            "In `2.00 dm³`: `[CO]₀ = 0.300`, `[H₂]₀ = 0.500`, `[CH₃OH]_eq = 0.100 mol dm⁻³`.",
            "Using `1 : 2 : 1` stoichiometry: `[CO]_eq = 0.300 − 0.100 = 0.200`; `[H₂]_eq = 0.500 − 2(0.100) = 0.300 mol dm⁻³`.",
            "`K_c = {{0.100 / (0.200 * 0.300^2)}} = {{0.100 / 0.0180}} = 5.56`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "ICE table solved by square root",
          question:
            "For the water-gas shift reaction `CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g)`, `K_c = 9.00` at a certain temperature. Starting with `[CO]₀ = 0.400 mol dm⁻³`, `[H₂O]₀ = 0.400 mol dm⁻³`, and zero products, calculate `[H₂]_eq` in `mol dm⁻³` to 3 significant figures.",
          answer: { type: "number", value: 0.3, tolerance: 0.005, display: "0.300 mol dm⁻³" },
          hints: [
            "Set up ICE: `[CO] = [H₂O] = 0.400 − x`, `[CO₂] = [H₂] = x`, so `9.00 = x² / (0.400 − x)²`.",
            "Take the positive square root of both sides (`3.00 = x / (0.400 − x)`) and solve for `x`.",
          ],
          solution: [
            "`9.00 = {{x^2 / (0.400 - x)^2}}` → taking square root: `3.00 = {{x / (0.400 - x)}}`.",
            "`1.20 − 3.00x = x` → `4.00x = 1.20` → `x = [H₂]_eq = 0.300 mol dm⁻³`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q12",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Small-x approximation in ICE table",
          question:
            "For `2ICl(g) ⇌ I₂(g) + Cl₂(g)`, `K_c = 1.60 × 10⁻⁵`. Initially `[ICl]₀ = 0.500 mol dm⁻³` with no `I₂` or `Cl₂`. Calculate `[I₂]_eq` in `mol dm⁻³` to 3 significant figures.",
          answer: { type: "number", value: 0.002, tolerance: 0.00004, display: "0.00200 mol dm⁻³" },
          hints: [
            "Write `1.60 × 10⁻⁵ = x² / (0.500 − 2x)²` and take the square root: `4.00 × 10⁻³ = x / (0.500 − 2x)`.",
            "Either apply `0.500 − 2x ≈ 0.500` (since `K_c ≪ 1`) or solve the linear equation directly!",
          ],
          solution: [
            "Taking the square root: `{{x / (0.500 - 2x)}} = {{sqrt(1.60 * 10^(-5))}} = 4.00 × 10⁻³`.",
            "Using small-`x` (`0.500 − 2x ≈ 0.500`): `x ≈ 0.500 × 4.00 × 10⁻³ = 0.00200 mol dm⁻³` (exact value `0.00198 mol dm⁻³`; check `2x / 0.500 = 0.8% ≪ 5%`).",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Solving for K from ΔG⊖",
          question:
            "At `298 K`, a reversible reaction has `ΔG⊖ = −11.4 kJ mol⁻¹`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the equilibrium constant `K` to 3 significant figures.",
          answer: { type: "number", value: 99.8, tolerance: 0.6, display: "99.8" },
          traps: [
            {
              spec: { type: "number", value: 0.01, tolerance: 0.001 },
              feedback: "Watch the sign: negative `ΔG⊖` gives positive `ln K`, so `K` must be greater than `1`.",
            },
          ],
          hints: [
            "Convert `ΔG⊖` to `−11,400 J mol⁻¹` first!",
            "Compute `ln K = −ΔG⊖ / (RT) = 11400 / (8.31 × 298)`, then take `e^(ln K)`.",
          ],
          solution: [
            "`ΔG⊖ = −11,400 J mol⁻¹`.",
            "`ln K = {{11400 / (8.31 * 298)}} = {{11400 / 2476.38}} = 4.6035`.",
            "`K = e^(4.6035) = 99.8`.",
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "equilibrium-ice-gibbs-hl",
          strategy: "Thermodynamic meaning of ΔG⊖ = −RT ln K",
          marks: 5,
          question:
            "Explain how the equation `ΔG⊖ = −RT ln K` links standard Gibbs free energy to equilibrium position across the three cases `ΔG⊖ < 0`, `ΔG⊖ = 0`, and `ΔG⊖ > 0`, and clarify the distinction between `ΔG` and `ΔG⊖` once equilibrium is reached.",
          hints: [
            "Evaluate the sign of `ln K` and resulting range of `K` (`K > 1`, `K = 1`, `0 < K < 1`) for all three cases.",
            "Explain why `ΔG` equals zero at the minimum of the free-energy curve while `ΔG⊖` compares standard-state products to reactants.",
          ],
          modelAnswer:
            "Rearranging gives ln K = −ΔG⊖ / RT. When ΔG⊖ is negative, ln K is positive, so K > 1 and products are favoured at equilibrium. When ΔG⊖ equals zero, ln K = 0, so K = 1 and neither side dominates. When ΔG⊖ is positive, ln K is negative, giving 0 < K < 1 (still strictly positive) so reactants dominate at equilibrium. Once dynamic equilibrium is established, the mixture sits at the minimum of the Gibbs free-energy curve where the instantaneous reaction free energy ΔG = 0 (since ΔG = ΔG⊖ + RT ln Q and Q = K); in contrast, ΔG⊖ compares pure reactants to pure products under standard 1 mol dm⁻³ / 100 kPa conditions and remains non-zero whenever K ≠ 1.",
          markScheme: [
            {
              point: "ΔG⊖ < 0 gives ln K > 0, so K > 1 (products favoured at equilibrium).",
              keywords: ["k > 1", "products are favoured", "products favoured"],
            },
            {
              point: "ΔG⊖ = 0 gives ln K = 0, so K = 1 (comparable reactants and products).",
              keywords: ["k = 1", "neither side"],
            },
            {
              point: "ΔG⊖ > 0 gives ln K < 0, so 0 < K < 1 (reactants dominate; K remains positive).",
              keywords: ["0 < k < 1", "reactants dominate", "strictly positive"],
            },
            {
              point: "At equilibrium, instantaneous ΔG = 0 at the minimum of the free-energy curve (Q = K).",
              keywords: ["minimum", "instantaneous", "q = k"],
            },
            {
              point: "Standard ΔG⊖ refers to standard conditions (1 mol dm⁻³ / 100 kPa) and is non-zero whenever K ≠ 1.",
              keywords: ["standard", "100 kpa", "non-zero", "k ≠ 1"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No valid thermodynamic explanation." },
            { band: "1–2", marks: [1, 2], descriptor: "Correctly matches signs for one or two cases but confuses K < 0 or fails to distinguish ΔG and ΔG⊖." },
            { band: "3–4", marks: [3, 4], descriptor: "Covers all three ΔG⊖/K regimes accurately and begins explaining ΔG = 0 at equilibrium." },
            { band: "5", marks: [5, 5], descriptor: "Clear, rigorous analysis of all three regimes (noting 0 < K < 1) plus exact distinction between instantaneous ΔG = 0 at the curve minimum and standard-state ΔG⊖." },
          ],
        },
        {
          id: "r2-amount-rate-extent-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Design",
          guideRef: "rate-laws-mechanisms-arrhenius-hl",
          strategy: "Experimental design for Arrhenius determination of E_a",
          marks: 6,
          question:
            "Design a laboratory investigation and graphical analysis procedure using the Arrhenius equation to determine both `E_a` and `A` for the catalytic decomposition of aqueous hydrogen peroxide (`2H₂O₂(aq) → 2H₂O(l) + O₂(g)`), and explain how the Arrhenius plot would differ if a superior catalyst were substituted.",
          hints: [
            "Specify independent variable (at least 5 temperatures in a water bath), dependent variable (initial rate via gas syringe), and controlled variables (`[H₂O₂]`, volume, catalyst mass/surface area).",
            "Explain converting initial rate to `k`, converting `°C` to Kelvin, plotting `ln k` vs `1/T`, extracting `E_a = −R × gradient` and `A = e^(y-intercept)`.",
            "Explain how a better catalyst lowers `E_a`, making the line's negative slope gentler.",
          ],
          modelAnswer:
            "Measure initial rates of O₂ evolution using a sealed conical flask attached to a gas syringe across at least five controlled temperatures (for example 293 K to 333 K) using a thermostated water bath, allowing the H₂O₂ solution to equilibrate before adding a fixed mass and particle size of catalyst. Keep [H₂O₂], solution volume, and stirring speed constant across every trial. For each temperature, find the initial rate from the tangent at t = 0 on the volume–time graph and divide by [H₂O₂] (first order) to obtain k. Convert all temperatures to Kelvin and plot ln k on the y-axis against 1/T (in K⁻¹) on the x-axis. Since ln k = −(E_a/R)(1/T) + ln A, multiply the negative gradient by −R (8.31 J K⁻¹ mol⁻¹) and divide by 1000 to obtain E_a in kJ mol⁻¹, and take e^(y-intercept) to determine A. Substituting a superior catalyst lowers E_a via a lower-energy pathway, producing a straight line with a less steep (gentler) negative gradient and higher ln k values across the temperature range.",
          markScheme: [
            {
              point: "Measures O₂ evolution rate (gas syringe) across ≥5 controlled temperatures in a water bath with thermal equilibration.",
              keywords: ["gas syringe", "five", "water bath", "equilibrate"],
            },
            {
              point: "Specifies key controlled variables: constant [H₂O₂], volume, catalyst mass/surface area.",
              keywords: ["constant", "volume", "particle size", "fixed mass"],
            },
            {
              point: "Extracts initial rate (tangent at t = 0) and computes k at each temperature.",
              keywords: ["tangent", "initial rate", "obtain k"],
            },
            {
              point: "Converts T to Kelvin and plots ln k (y-axis) vs 1/T (x-axis).",
              keywords: ["kelvin", "ln k", "1/t"],
            },
            {
              point: "Extracts E_a = −R × gradient (converting J → kJ) and A = e^(y-intercept).",
              keywords: ["negative gradient", "8.31", "y-intercept"],
            },
            {
              point: "Explains a superior catalyst lowers E_a, making the negative gradient gentler (less steep).",
              keywords: ["less steep", "gentler", "lowers e_a", "higher ln k"],
            },
          ],
          markbands: [
            { band: "0", marks: [0, 0], descriptor: "No workable experimental or Arrhenius method." },
            { band: "1–2", marks: [1, 2], descriptor: "Basic idea of heating H₂O₂ and measuring gas, with vague controls or missing Arrhenius linearisation." },
            { band: "3–4", marks: [3, 4], descriptor: "Sound procedure and ln k vs 1/T plot, but misses Kelvin/unit conversion, extracting A, or catalyst slope comparison." },
            { band: "5–6", marks: [5, 6], descriptor: "Complete IB IA-grade experimental design with controls, initial-rate extraction of k, linear Arrhenius analysis for E_a and A, and accurate gentler-slope comparison for a better catalyst." },
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      id: "r2-amount-rate-extent-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "stoichiometry-titrations",
      strategy: "Back-titration with volumetric flask aliquot scaling",
      question:
        "A `2.50 g` sample of impure limestone (`CaCO₃`, `M = 100.09 g mol⁻¹`) reacts completely with `100.0 cm³` of `0.600 mol dm⁻³ HCl(aq)` (`CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂`). The resulting solution is diluted to `250.0 cm³` in a volumetric flask. A `25.0 cm³` aliquot of this diluted solution requires `14.00 cm³` of `0.150 mol dm⁻³ NaOH(aq)` for neutralisation. Calculate the percentage by mass of `CaCO₃` in the limestone to 3 significant figures.",
      answer: { type: "number", value: 78.1, tolerance: 0.3, display: "78.1%" },
      traps: [
        {
          spec: { type: "number", value: 116, tolerance: 1 },
          feedback: "Remember to scale the `25.0 cm³` aliquot titre up by a factor of `10` (`250.0 / 25.0`) to find total excess `HCl`!",
        },
      ],
      hints: [
        "Calculate `n(NaOH)` for the `25.0 cm³` aliquot, then multiply by `250.0 / 25.0 = 10` to find total unreacted `HCl` in the `250.0 cm³` flask.",
        "Subtract total excess `HCl` from `n_total(HCl) = 0.1000 × 0.600 = 0.0600 mol`.",
        "Divide `n_reacted(HCl)` by `2` to find `n(CaCO₃)`, convert to mass, and divide by `2.50 g`.",
      ],
      solution: [
        "`n(HCl in 25.0 cm³ aliquot) = n(NaOH) = 0.150 × 0.01400 = 0.00210 mol`.",
        "Scale to `250.0 cm³` flask (`× 10`): `n_excess(HCl) = 0.0210 mol`.",
        "`n_total(HCl) = 0.600 × 0.1000 = 0.0600 mol` → `n_reacted(HCl) = 0.0600 − 0.0210 = 0.0390 mol`.",
        "`n(CaCO₃) = {{0.0390 / 2}} = 0.0195 mol` → `m(CaCO₃) = 0.0195 × 100.09 = 1.952 g`.",
        "`% purity = {{(1.952 / 2.50) * 100}} = 78.1%`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Simultaneous ratio method when two concentrations change",
      question:
        "Initial-rate data for `A + 2B → products` at `298 K`:\n" +
        "| Trial | `[A]` / `mol dm⁻³` | `[B]` / `mol dm⁻³` | Initial rate / `mol dm⁻³ s⁻¹` |\n" +
        "|---|---|---|---|\n" +
        "| 1 | 0.10 | 0.10 | `1.50 × 10⁻³` |\n" +
        "| 2 | 0.20 | 0.10 | `6.00 × 10⁻³` |\n" +
        "| 3 | 0.30 | 0.20 | `2.70 × 10⁻²` |\n" +
        "Notice no two trials keep `[A]` constant while varying `[B]`. Deduce both orders and calculate the numerical value of `k` (in `dm⁶ mol⁻² s⁻¹`).",
      answer: { type: "number", value: 1.5, tolerance: 0.03, display: "1.50 dm⁶ mol⁻² s⁻¹" },
      hints: [
        "First compare Trials 1 and 2 (`[B]` constant) to find order `m` in `A` (`2^m = 4`).",
        "Next form the ratio Trial 3 / Trial 1: `(0.30 / 0.10)^m × (0.20 / 0.10)^n = (2.70 × 10⁻²) / (1.50 × 10⁻³) = 18`.",
        "Solve `3² × 2^n = 18` for `n`, then substitute Trial 1 to compute `k`.",
      ],
      solution: [
        "Trials 1 → 2 (`[B]` fixed): `[A] × 2`, `rate × 4 = 2²` → `m = 2`.",
        "Trials 1 → 3: `3² × 2^n = {{(2.70 * 10^(-2)) / (1.50 * 10^(-3))}} = 18` → `9 × 2^n = 18` → `2^n = 2` → `n = 1`.",
        "Thus `rate = k[A]²[B]`, and `k = {{(1.50 * 10^(-3)) / (0.10^2 * 0.10)}} = 1.50 dm⁶ mol⁻² s⁻¹`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Inverting two-temperature Arrhenius for T₂",
      question:
        "A reaction has activation energy `E_a = 80.0 kJ mol⁻¹`. At `T₁ = 300 K`, its rate constant is `k₁`. Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the temperature `T₂` (in Kelvin, to 3 significant figures) at which the rate constant is exactly triple `k₁` (`k₂ / k₁ = 3.00`).",
      answer: { type: "number", value: 311, tolerance: 1, display: "311 K" },
      hints: [
        "Start from `ln(3.00) = (80,000 / 8.31)(1/300 − 1/T₂)`.",
        "Isolate `1/T₂ = 1/300 − (8.31 × ln 3) / 80,000`, then take the reciprocal to find `T₂`.",
      ],
      solution: [
        "`ln(3.00) = 1.0986`; `(R ln 3) / E_a = {{(8.31 * 1.0986) / 80000}} = 1.1412 × 10⁻⁴ K⁻¹`.",
        "`{{1 / T_2}} = {{1 / 300}} − 1.1412 × 10⁻⁴ = 3.3333 × 10⁻³ − 1.1412 × 10⁻⁴ = 3.2192 × 10⁻³ K⁻¹`.",
        "`T₂ = {{1 / (3.2192 * 10^(-3))}} = 310.6 K ≈ 311 K`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "equilibrium-ice-gibbs-hl",
      strategy: "Q check followed by non-zero-product ICE table",
      question:
        "For `H₂(g) + I₂(g) ⇌ 2HI(g)`, `K_c = 49.0` at `700 K`. A mixture initially contains `[H₂]₀ = 0.200 mol dm⁻³`, `[I₂]₀ = 0.200 mol dm⁻³`, and `[HI]₀ = 0.500 mol dm⁻³`. Determine the shift direction using `Q` and calculate `[HI]_eq` in `mol dm⁻³` to 3 significant figures.",
      answer: { type: "number", value: 0.7, tolerance: 0.01, display: "0.700 mol dm⁻³" },
      hints: [
        "First evaluate `Q = 0.500² / (0.200 × 0.200) = 6.25`. Compare `Q` with `K_c = 49.0` to determine signs of `±x`.",
        "Since `Q < K_c`, `[H₂] = [I₂] = 0.200 − x` and `[HI] = 0.500 + 2x`. Take the positive square root of `49.0 = (0.500 + 2x)² / (0.200 − x)²`.",
      ],
      solution: [
        "`Q = {{0.500^2 / 0.200^2}} = 6.25 < K_c (49.0)`, so the reaction shifts **right**.",
        "`49.0 = {{(0.500 + 2x)^2 / (0.200 - x)^2}}` → taking square root: `7.00 = {{(0.500 + 2x) / (0.200 - x)}}`.",
        "`1.400 − 7.00x = 0.500 + 2.00x` → `9.00x = 0.900` → `x = 0.100 mol dm⁻³`.",
        "`[HI]_eq = 0.500 + 2(0.100) = 0.700 mol dm⁻³`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "equilibrium-ice-gibbs-hl",
      strategy: "Coupling ΔG⊖ = ΔH⊖ − TΔS⊖ with ΔG⊖ = −RT ln K",
      question:
        "For `N₂O₄(g) ⇌ 2NO₂(g)`, `ΔH⊖ = +57.2 kJ mol⁻¹` and `ΔS⊖ = +175.8 J K⁻¹ mol⁻¹` (assumed independent of temperature). Using `R = 8.31 J K⁻¹ mol⁻¹`, calculate the equilibrium constant `K` at `350 K` to 3 significant figures.",
      answer: { type: "number", value: 4.43, tolerance: 0.08, display: "4.43" },
      traps: [
        {
          spec: { type: "number", value: 0.226, tolerance: 0.01 },
          feedback: "Check the sign of `ΔG⊖`: at `350 K`, `TΔS⊖ = 61.53 kJ mol⁻¹ > ΔH⊖`, so `ΔG⊖` is negative and `K > 1`.",
        },
      ],
      hints: [
        "First calculate `ΔG⊖ = ΔH⊖ − TΔS⊖` in `J mol⁻¹`: `57,200 − 350 × 175.8`.",
        "Next substitute into `ln K = −ΔG⊖ / (RT)` with `R = 8.31` and `T = 350 K`, then compute `e^(ln K)`.",
      ],
      solution: [
        "`ΔG⊖ = 57,200 − 350(175.8) = 57,200 − 61,530 = −4330 J mol⁻¹`.",
        "`ln K = {{4330 / (8.31 * 350)}} = {{4330 / 2908.5}} = 1.4887`.",
        "`K = e^(1.4887) = 4.43`.",
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "rate-laws-mechanisms-arrhenius-hl",
      strategy: "Negative-order product inhibition from pre-equilibrium",
      marks: 5,
      question:
        "Thermal decomposition of ozone (`2O₃(g) → 3O₂(g)`) follows the two-step mechanism:\nStep 1 (fast equilibrium): `O₃(g) ⇌ O₂(g) + O(g)`\nStep 2 (slow): `O(g) + O₃(g) → 2O₂(g)`\nDerive the rate law in terms of `[O₃]` and `[O₂]`, state the order with respect to `O₂`, and explain physically using Le Chatelier's Principle why adding extra `O₂` slows down ozone decomposition.",
      hints: [
        "Write `rate = k₂[O][O₃]` from Step 2 and solve Step 1's equilibrium `K₁ = ([O₂][O]) / [O₃]` for the intermediate `[O]`.",
        "Explain how adding `O₂` pushes Step 1 backward, lowering the steady-state concentration of intermediate `O` atoms.",
      ],
      modelAnswer:
        "From the slow rate-determining step (Step 2), rate = k₂[O][O₃]. Eliminating the reactive intermediate O atom using Step 1's fast pre-equilibrium gives K₁ = ([O₂][O]) / [O₃], so [O] = K₁[O₃] / [O₂]. Substituting into Step 2 yields rate = k₂K₁[O₃]² / [O₂] = k[O₃]²[O₂]⁻¹. Thus the reaction is order −1 (inverse first order) with respect to O₂, meaning O₂ inhibits the reaction. Physically, by Le Chatelier's Principle, adding extra product O₂ shifts the Step 1 equilibrium to the left, decreasing the concentration of intermediate O atoms available for the slow Step 2 collision and thereby slowing the overall rate.",
      markScheme: [
        {
          point: "Writes rate = k₂[O][O₃] from slow Step 2 (RDS).",
          keywords: ["k2[o][o3]", "k₂[o][o₃]", "rate-determining step"],
        },
        {
          point: "Solves Step 1 equilibrium for intermediate [O] = K₁[O₃] / [O₂].",
          keywords: ["k1[o3] / [o2]", "k₁[o₃] / [o₂]", "intermediate"],
        },
        {
          point: "Derives rate = k[O₃]²[O₂]⁻¹ (or k[O₃]²/[O₂]).",
          keywords: ["[o₃]²[o₂]⁻¹", "[o3]2/[o2]", "k₂k₁"],
        },
        {
          point: "States order with respect to O₂ is −1 (inverse first order / product inhibition).",
          keywords: ["−1", "-1", "inhibits", "inverse"],
        },
        {
          point: "Explains via Le Chatelier that extra O₂ shifts Step 1 left, reducing [O] and slowing Step 2.",
          keywords: ["shifts", "left", "decreasing the concentration of intermediate o", "reducing"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid derivation or Le Chatelier explanation." },
        { band: "1–2", marks: [1, 2], descriptor: "Starts from Step 2 or notes O₂ inhibits, without algebraic elimination of [O]." },
        { band: "3–4", marks: [3, 4], descriptor: "Correctly derives rate = k[O₃]²[O₂]⁻¹ and identifies order −1, with partial physical explanation." },
        { band: "5", marks: [5, 5], descriptor: "Rigorous derivation eliminating intermediate O, exact −1 order, and clear Le Chatelier link showing lowered [O] slows the RDS." },
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Derive",
      guideRef: "equilibrium-ice-gibbs-hl",
      strategy: "Deriving the van 't Hoff equation from Gibbs relations",
      marks: 5,
      question:
        "By combining `ΔG⊖ = ΔH⊖ − TΔS⊖` and `ΔG⊖ = −RT ln K`, derive a linear expression for `ln K` as a function of `1/T`, identify the gradient and y-intercept of a plot of `ln K` against `1/T`, and prove mathematically why raising temperature increases `K` for an endothermic reaction and decreases `K` for an exothermic reaction.",
      hints: [
        "Set `−RT ln K = ΔH⊖ − TΔS⊖` and divide every term by `−RT`.",
        "Examine how `1/T` changes when `T` increases (it decreases!), and trace the sign of `−(ΔH⊖/R)(1/T)` for `ΔH⊖ > 0` vs `ΔH⊖ < 0`.",
      ],
      modelAnswer:
        "Equating both expressions gives −RT ln K = ΔH⊖ − TΔS⊖. Dividing throughout by −RT yields the van 't Hoff equation: ln K = −(ΔH⊖ / R)(1/T) + ΔS⊖ / R. Plotting ln K against 1/T gives a straight line with gradient = −ΔH⊖ / R and y-intercept = ΔS⊖ / R. When temperature T increases, 1/T decreases. For an endothermic reaction (ΔH⊖ > 0), the gradient −ΔH⊖/R is negative, so moving left to smaller 1/T moves up the line — ln K and K increase. Conversely, for an exothermic reaction (ΔH⊖ < 0), the gradient −ΔH⊖/R is positive, so decreasing 1/T moves down the line — ln K and K decrease.",
      markScheme: [
        {
          point: "Equates −RT ln K = ΔH⊖ − TΔS⊖ and divides by −RT to derive ln K = −(ΔH⊖/R)(1/T) + ΔS⊖/R.",
          keywords: ["van 't hoff", "-(δh", "−(δh", "dividing throughout by"],
        },
        {
          point: "Identifies gradient = −ΔH⊖ / R and y-intercept = ΔS⊖ / R.",
          keywords: ["gradient = −δh", "y-intercept = δs", "intercept"],
        },
        {
          point: "Notes that raising temperature T causes 1/T to decrease.",
          keywords: ["1/t decreases", "smaller 1/t", "decreasing 1/t"],
        },
        {
          point: "For endothermic (ΔH⊖ > 0), negative gradient means smaller 1/T gives larger ln K and larger K.",
          keywords: ["negative", "endothermic", "k increase"],
        },
        {
          point: "For exothermic (ΔH⊖ < 0), positive gradient means smaller 1/T gives smaller ln K and smaller K.",
          keywords: ["positive", "exothermic", "k decrease"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No valid derivation." },
        { band: "1–2", marks: [1, 2], descriptor: "Equates the two formulas with algebraic sign errors or omits graphical/temperature proof." },
        { band: "3–4", marks: [3, 4], descriptor: "Correct linear derivation and gradient/intercept, with partial sign proof for T changes." },
        { band: "5", marks: [5, 5], descriptor: "Clean derivation of van 't Hoff equation, exact slope and intercept, and rigorous sign proof for both endothermic and exothermic cases." },
      ],
    },
    {
      id: "r2-amount-rate-extent-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "stoichiometry-titrations",
      strategy: "Green chemistry & industrial route comparison",
      marks: 6,
      question:
        "Industrial ethanol is manufactured via two routes:\n- **Route 1 (Fermentation):** `C₆H₁₂O₆(aq) → 2C₂H₅OH(aq) + 2CO₂(g)` (yeast enzymes, `35 °C`, `100 kPa`, batch process, atom economy `51.1%`).\n- **Route 2 (Catalytic Hydration):** `C₂H₄(g) + H₂O(g) ⇌ C₂H₅OH(g)`, `ΔH⊖ = −45 kJ mol⁻¹` (`H₃PO₄` catalyst, `300 °C`, `6–7 MPa`, continuous process, atom economy `100%`).\nEvaluate both routes in terms of atom economy, equilibrium/kinetic operating trade-offs, feedstock sustainability, and product purity/separation energy.",
      hints: [
        "Contrast the `100%` addition atom economy of Route 2 against the `CO₂` co-product mass loss in Route 1.",
        "Analyse Route 2's exothermic reversible equilibrium (`2 mol gas → 1 mol gas`) vs Route 1's mild enzyme kinetics.",
        "Compare renewable biomass feedstock vs non-renewable crude-oil ethene, and distillation energy for dilute aqueous ethanol (~15%) vs high-purity continuous hydration.",
      ],
      modelAnswer:
        "In terms of atom economy, Route 2 (addition) achieves 100% with zero waste co-products, whereas Route 1 loses nearly half the glucose mass as CO₂ (51.1% atom economy), although the CO₂ can be captured for beverages. Kinetically and thermodynamically, Route 2 is a reversible exothermic reaction (2 mol gas → 1 mol gas), requiring a compromise temperature of 300 °C (fast rate with H₃PO₄ catalyst despite lower K_c) and high pressure (6–7 MPa) to boost both rate and equilibrium yield, with unreacted gases recycled continuously; Route 1 runs gently at 35 °C and 100 kPa using biological enzymes, keeping reactor energy low, though slow batch rates limit throughput. For sustainability, Route 1 uses renewable plant sugars (nearly carbon-neutral when CO₂ uptake by crops is counted), whereas Route 2 relies on non-renewable petroleum-derived ethene. Finally, Route 1 produces dilute aqueous ethanol (~15% before yeast die) requiring energy-intensive fractional distillation, whereas Route 2 yields concentrated, higher-purity ethanol continuously. Overall, hydration wins on atom economy and continuous purity, while fermentation wins on renewable feedstocks and mild reaction conditions.",
      markScheme: [
        {
          point: "Contrasts 100% addition atom economy (Route 2) vs 51.1% with CO₂ waste co-product (Route 1).",
          keywords: ["100%", "zero waste", "co2", "51.1%"],
        },
        {
          point: "Explains Route 2 exothermic equilibrium compromise (300 °C for rate with H₃PO₄ catalyst; 6–7 MPa favours 2 → 1 gas moles; recycling).",
          keywords: ["compromise", "2 mol gas", "recycled", "h₃po₄"],
        },
        {
          point: "Contrasts Route 1 mild enzyme conditions (low energy, slow batch) vs Route 2 fast continuous flow.",
          keywords: ["mild", "slow batch", "continuous", "enzymes"],
        },
        {
          point: "Evaluates feedstock sustainability: renewable plant sugars/biomass vs non-renewable crude-oil/petroleum ethene.",
          keywords: ["renewable", "non-renewable", "petroleum", "biomass", "plant sugars"],
        },
        {
          point: "Compares product purity/separation: fermentation yields dilute ~15% ethanol needing energy-intensive distillation vs purer hydration stream.",
          keywords: ["dilute", "distillation", "higher-purity", "concentrated"],
        },
        {
          point: "Provides a balanced summative judgment weighing green-chemistry trade-offs of both routes.",
          keywords: ["overall", "wins on", "trade-off", "whereas"],
        },
      ],
      markbands: [
        { band: "0", marks: [0, 0], descriptor: "No relevant comparison of the two routes." },
        { band: "1–2", marks: [1, 2], descriptor: "Restates data from prompt with minimal chemical evaluation." },
        { band: "3–4", marks: [3, 4], descriptor: "Evaluates atom economy, equilibrium/kinetics, and feedstocks clearly, lacking separation-energy analysis or balanced conclusion." },
        { band: "5–6", marks: [5, 6], descriptor: "Comprehensive IB evaluation integrating atom economy, Le Chatelier/kinetic compromises, renewable vs fossil feedstocks, distillation energy, and a justified conclusion." },
      ],
    },
  ],
};
