import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "r1-energetics-spontaneity",
  title: "Reactivity 1: Energetics, Energy Cycles & Spontaneity",
  strand: "Reactivity 1–2: Energetics, Rate & Extent",
  icon: "🔥",
  level: "SL",
  summary:
    "Measure heat transfer with calorimetry, compute unseen enthalpy changes via bond enthalpies, Hess's Law and Born–Haber cycles [HL], evaluate fuels, and predict reaction spontaneity using entropy and Gibbs free energy [HL].",
  intro:
    "Why does burning a spoonful of ethanol warm a beaker of water while dissolving ammonium nitrate makes a cold pack turn icy — and why does that cold pack work **spontaneously** even though it absorbs heat from the surroundings? Reactivity 1 answers both questions by tracking **enthalpy (H)**, **entropy (S)**, and **Gibbs free energy (G)**. Every sign, unit conversion, and thermodynamic cycle here is core currency across IB Chemistry Paper 1A, Paper 1B, and Paper 2.",

  guide: [
    // =========================================================================
    // SECTION 1: R1.1 Enthalpy Profiles, Calorimetry & Standard Enthalpies [SL]
    // =========================================================================
    {
      id: "enthalpy-calorimetry",
      heading: "R1.1 Enthalpy Profiles, Calorimetry & Standard Enthalpies",
      level: "SL",
      discovery: {
        problem:
          "You dissolve 4.00 g of solid NaOH in 100 cm³ of water inside an insulated polystyrene cup. The thermometer rises from 22.0 °C to 32.5 °C. Your lab partner writes: “The temperature went up, so the NaOH gained energy and ΔH is positive.” Where is the hidden flaw in that argument?",
        idea:
          "The thermometer sits in the **surroundings** (the aqueous solution), NOT inside the chemical bonds of the **system**. Because the solution warmed up, heat flowed **out of the chemical system into the surroundings** — meaning the system *lost* enthalpy (**exothermic**, ΔH < 0). Always reverse the sign of the heat absorbed by the water: {{ΔH = -q / n}}.",
      },
      body:
        "### System, Surroundings & Enthalpy Change (ΔH)\n\n" +
        "Chemical energetics splits the universe into two parts: the **system** (the reacting particles and their chemical bonds) and the **surroundings** (the solvent, calorimeter, air, and thermometer). **Enthalpy (H)** is the heat content stored in a system at constant pressure. We cannot measure absolute H, only the **enthalpy change**, ΔH = H(products) − H(reactants), quoted in **kJ mol⁻¹**.\n\n" +
        "- **Exothermic reaction (ΔH < 0):** Energy is *released* from the system to the surroundings, so the surroundings heat up (ΔT > 0). Products sit **lower** in enthalpy and are **more energetically stable** (have stronger overall bonds) than reactants.\n" +
        "- **Endothermic reaction (ΔH > 0):** Energy is *absorbed* from the surroundings into the system, so the surroundings cool down (ΔT < 0). Products sit **higher** in enthalpy and are **less energetically stable** than reactants.\n\n" +
        "### Standard Conditions & Key Definitions\n\n" +
        "The Plimsoll symbol **⊖** denotes **standard conditions**: **298 K** (25 °C), **100 kPa**, **1.00 mol dm⁻³** for solutions, and all substances in their standard physical states.\n\n" +
        "| Standard enthalpy | Symbol | IB Definition (always per 1 mole specified!) |\n" +
        "|---|---|---|\n" +
        "| Enthalpy of combustion | ΔH_c⊖ | Enthalpy change when **1 mole of a substance** is burned completely in excess oxygen under standard conditions. |\n" +
        "| Enthalpy of formation | ΔH_f⊖ | Enthalpy change when **1 mole of a compound** is formed from its elements in their standard states under standard conditions. (ΔH_f⊖ of any element in its standard state = **0 kJ mol⁻¹**.) |\n" +
        "| Enthalpy of neutralisation | ΔH_neut⊖ | Enthalpy change when **1 mole of water** is formed by the reaction of an acid with a base under standard conditions (~−57.3 kJ mol⁻¹ for strong acid + strong base). |\n\n" +
        "### Calorimetry: Measuring q and Molar ΔH\n\n" +
        "In a **coffee-cup (solution) calorimeter** or **spirit-burner calorimeter**, heat transferred to or from the water/solution is calculated using:\n\n" +
        "{{q = m c ΔT}}\n\n" +
        "where **m** is the mass of the substance whose temperature changes (in g; for dilute aqueous solutions, assume density = 1.00 g cm⁻³ so 1 cm³ = 1 g), **c = 4.18 J g⁻¹ K⁻¹** is the specific heat capacity of water, and **ΔT = T_final − T_initial** (identical in °C or K because a 1 °C interval equals 1 K).\n\n" +
        "To obtain molar enthalpy change **ΔH** in kJ mol⁻¹:\n\n" +
        "1. Convert q from J to kJ by dividing by 1000.\n" +
        "2. Divide by **n**, the moles of the **limiting reactant** (or moles of fuel burnt, or moles of water formed in neutralisation).\n" +
        "3. Apply the thermodynamic sign: **ΔH = −q / n** (if T rises, q > 0 and ΔH < 0; if T falls, q < 0 and ΔH > 0).\n\n" +
        "### Cooling-Curve Extrapolation & Systematic Errors\n\n" +
        "Because reactions take finite time while heat leaks to the room, the peak thermometer reading underestimates the true ΔT. In IB Paper 1B/2 experiments, you record temperature every 30 s before mixing (baseline) and after mixing, then **extrapolate the linear cooling region back to the exact time of mixing** (t_mix) to read the theoretical maximum temperature **T_max**.\n\n" +
        "In spirit-burner calorimetry, experimental |ΔH_c| is almost always **far less exothermic** than the Data Booklet value because of: (1) heat loss to the surrounding air and copper can, (2) **incomplete combustion** producing soot C(s) and CO(g), (3) evaporation of volatile alcohol from the wick before weighing, and (4) non-standard conditions.",
      diagram:
        `<svg viewBox="0 0 680 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exothermic and endothermic enthalpy level diagrams alongside a coffee-cup calorimetry cooling curve with back-extrapolation to mixing time" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="680" height="265" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<text x="112" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Exothermic (ΔH &lt; 0)</text>` +
        `<line x1="28" y1="225" x2="28" y2="42" stroke="#334155" stroke-width="1.8"/>` +
        `<polygon points="28,36 24,45 32,45" fill="#334155"/>` +
        `<line x1="28" y1="225" x2="205" y2="225" stroke="#334155" stroke-width="1.8"/>` +
        `<text x="16" y="135" text-anchor="middle" font-size="11" fill="#475569" transform="rotate(-90 16 135)">Enthalpy, H</text>` +
        `<text x="116" y="245" text-anchor="middle" font-size="11" fill="#475569">Reaction pathway</text>` +
        `<line x1="42" y1="108" x2="96" y2="108" stroke="#2563eb" stroke-width="3"/>` +
        `<text x="69" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#1d4ed8">Reactants</text>` +
        `<line x1="140" y1="186" x2="196" y2="186" stroke="#059669" stroke-width="3"/>` +
        `<text x="168" y="178" text-anchor="middle" font-size="11" font-weight="600" fill="#047857">Products</text>` +
        `<path d="M96 108 C108 108, 110 56, 118 56 C126 56, 128 186, 140 186" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>` +
        `<line x1="96" y1="108" x2="148" y2="108" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>` +
        `<line x1="118" y1="108" x2="118" y2="61" stroke="#d97706" stroke-width="2"/>` +
        `<polygon points="118,56 114,64 122,64" fill="#d97706"/>` +
        `<text x="129" y="76" font-size="10.5" font-weight="700" fill="#b45309">Ea</text>` +
        `<line x1="148" y1="108" x2="148" y2="181" stroke="#dc2626" stroke-width="2.2"/>` +
        `<polygon points="148,186 144,178 152,178" fill="#dc2626"/>` +
        `<text x="172" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">ΔH &lt; 0</text>` +
        `<line x1="224" y1="22" x2="224" y2="250" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="328" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Endothermic (ΔH &gt; 0)</text>` +
        `<line x1="246" y1="225" x2="246" y2="42" stroke="#334155" stroke-width="1.8"/>` +
        `<polygon points="246,36 242,45 250,45" fill="#334155"/>` +
        `<line x1="246" y1="225" x2="418" y2="225" stroke="#334155" stroke-width="1.8"/>` +
        `<text x="332" y="245" text-anchor="middle" font-size="11" fill="#475569">Reaction pathway</text>` +
        `<line x1="260" y1="186" x2="312" y2="186" stroke="#2563eb" stroke-width="3"/>` +
        `<text x="286" y="203" text-anchor="middle" font-size="11" font-weight="600" fill="#1d4ed8">Reactants</text>` +
        `<line x1="356" y1="108" x2="412" y2="108" stroke="#059669" stroke-width="3"/>` +
        `<text x="384" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#047857">Products</text>` +
        `<path d="M312 186 C324 186, 328 56, 338 56 C346 56, 348 108, 356 108" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>` +
        `<line x1="312" y1="186" x2="366" y2="186" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>` +
        `<line x1="366" y1="186" x2="366" y2="113" stroke="#7c3aed" stroke-width="2.2"/>` +
        `<polygon points="366,108 362,116 370,116" fill="#7c3aed"/>` +
        `<text x="392" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">ΔH &gt; 0</text>` +
        `<line x1="436" y1="22" x2="436" y2="250" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="558" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Cooling-Curve Extrapolation</text>` +
        `<line x1="466" y1="220" x2="466" y2="44" stroke="#334155" stroke-width="1.8"/>` +
        `<polygon points="466,38 462,47 470,47" fill="#334155"/>` +
        `<line x1="466" y1="220" x2="664" y2="220" stroke="#334155" stroke-width="1.8"/>` +
        `<text x="454" y="132" text-anchor="middle" font-size="11" fill="#475569" transform="rotate(-90 454 132)">Temp, T (°C)</text>` +
        `<text x="565" y="245" text-anchor="middle" font-size="11" fill="#475569">Time, t (min)</text>` +
        `<line x1="528" y1="48" x2="528" y2="220" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>` +
        `<text x="528" y="233" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">t_mix</text>` +
        `<line x1="472" y1="196" x2="528" y2="196" stroke="#2563eb" stroke-width="2.5"/>` +
        `<circle cx="480" cy="196" r="3" fill="#2563eb"/><circle cx="496" cy="196" r="3" fill="#2563eb"/><circle cx="512" cy="196" r="3" fill="#2563eb"/><circle cx="528" cy="196" r="3" fill="#2563eb"/>` +
        `<path d="M528 196 Q542 114, 560 100" fill="none" stroke="#ea580c" stroke-width="2.2"/>` +
        `<line x1="560" y1="100" x2="652" y2="148" stroke="#059669" stroke-width="2.5"/>` +
        `<circle cx="560" cy="100" r="3" fill="#059669"/><circle cx="583" cy="112" r="3" fill="#059669"/><circle cx="606" cy="124" r="3" fill="#059669"/><circle cx="629" cy="136" r="3" fill="#059669"/><circle cx="652" cy="148" r="3" fill="#059669"/>` +
        `<line x1="528" y1="83" x2="560" y2="100" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/>` +
        `<circle cx="528" cy="83" r="4" fill="#dc2626"/>` +
        `<line x1="522" y1="83" x2="522" y2="194" stroke="#dc2626" stroke-width="1.6"/>` +
        `<polygon points="522,83 519,90 525,90" fill="#dc2626"/><polygon points="522,196 519,189 525,189" fill="#dc2626"/>` +
        `<text x="497" y="142" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">True ΔT</text>` +
        `<text x="582" y="76" font-size="10" font-weight="700" fill="#b91c1c">Extrapolated T_max</text>` +
        `<line x1="534" y1="82" x2="578" y2="74" stroke="#dc2626" stroke-width="1"/>` +
        `</svg>`,
      diagramCaption:
        "Left & centre: Enthalpy-level diagrams show relative bond stability (exothermic products sit lower; endothermic products sit higher). Right: Back-extrapolating the linear cooling line to t_mix corrects for heat lost during mixing.",
      workedExamples: [
        {
          title: "Solution Calorimetry with a Limiting Reactant",
          problem:
            "50.0 cm³ of 1.00 mol dm⁻³ HCl(aq) is mixed with 50.0 cm³ of 1.20 mol dm⁻³ NaOH(aq) in an insulated polystyrene cup. The initial temperature of both solutions is 21.4 °C and the maximum temperature reached is 28.2 °C. Calculate the enthalpy of neutralisation, ΔH_neut, in kJ mol⁻¹ (assume c = 4.18 J g⁻¹ K⁻¹ and density = 1.00 g cm⁻³).",
          steps: [
            "Total solution mass: m = 50.0 + 50.0 = 100.0 g (BOTH volumes warm up!).",
            "Temperature change: ΔT = 28.2 − 21.4 = +6.8 °C = +6.8 K.",
            "Heat absorbed by solution: q = m c ΔT = 100.0 × 4.18 × 6.8 = 2842.4 J = 2.8424 kJ.",
            "Identify the limiting reactant: n(HCl) = 0.0500 × 1.00 = 0.0500 mol; n(NaOH) = 0.0500 × 1.20 = 0.0600 mol. HCl is limiting, so n(H₂O formed) = 0.0500 mol.",
            "Molar enthalpy of neutralisation (temperature rose ⇒ exothermic ⇒ negative sign): {{ΔH = -2.8424 / 0.0500 = -56.85}} kJ mol⁻¹ ≈ −56.8 kJ mol⁻¹ (3 s.f.; or −57 kJ mol⁻¹ to 2 s.f. matching ΔT = 6.8 °C).",
          ],
          answer: "−56.8 kJ mol⁻¹ (or −57 kJ mol⁻¹ to 2 s.f.)",
          yourTurn: {
            question:
              "25.0 cm³ of 2.00 mol dm⁻³ HCl(aq) is mixed with 25.0 cm³ of 2.00 mol dm⁻³ NaOH(aq). The temperature rises by 13.5 °C. Using c = 4.18 J g⁻¹ K⁻¹ and density = 1.00 g cm⁻³, calculate ΔH_neut in kJ mol⁻¹ (include the sign, to 3 significant figures).",
            answer: { type: "number", value: -56.4, tolerance: 0.2, display: "−56.4 kJ mol⁻¹" },
            solution:
              "Total mass m = 25.0 + 25.0 = 50.0 g. q = 50.0 × 4.18 × 13.5 = 2821.5 J = 2.8215 kJ. n(H₂O) = 0.0250 × 2.00 = 0.0500 mol. ΔH = −2.8215 / 0.0500 = −56.43 ≈ −56.4 kJ mol⁻¹.",
          },
        },
        {
          title: "Spirit-Burner Calorimetry for Combustion",
          problem:
            "Burning 0.920 g of ethanol (C₂H₅OH, M = 46.08 g mol⁻¹) heats 200.0 g of water from 20.0 °C to 45.0 °C. Calculate the experimental enthalpy of combustion of ethanol (c = 4.18 J g⁻¹ K⁻¹).",
          steps: [
            "Notice which mass heats up: m(water) = 200.0 g — NEVER put the 0.920 g of fuel into q = mcΔT!",
            "Calculate heat absorbed by the water: ΔT = 45.0 − 20.0 = 25.0 K, so q = 200.0 × 4.18 × 25.0 = 20 900 J = 20.90 kJ.",
            "Calculate moles of ethanol burnt: {{n = 0.920 / 46.08 = 0.019965}} mol.",
            "Calculate ΔH_c (combustion is exothermic ⇒ negative): {{ΔH_c = -20.90 / 0.019965 = -1046.8}} ≈ −1050 kJ mol⁻¹ (3 s.f.).",
            "Compare with Data Booklet (−1367 kJ mol⁻¹): our value is less exothermic mainly due to heat loss to the air and incomplete combustion.",
          ],
          answer: "−1050 kJ mol⁻¹ (3 s.f.)",
        },
      ],
      keyPoints: [
        "Exothermic reactions release heat (ΔH < 0, surroundings warm, products more stable); endothermic reactions absorb heat (ΔH > 0, surroundings cool, reactants more stable).",
        "In q = mcΔT, m is ONLY the mass of the substance experiencing ΔT (total aqueous solution volume in coffee-cup calorimetry; water in the can for a spirit burner).",
        "Always divide q (converted to kJ!) by the moles of the **limiting reactant** and assign the thermodynamic sign from the direction of ΔT.",
        "Back-extrapolating a cooling curve to t_mix corrects for heat lost during the reaction, giving a larger, more accurate ΔT.",
        "ΔH_f⊖ of any element in its standard state (O₂(g), C(s, graphite), Br₂(l), I₂(s)) is strictly 0 kJ mol⁻¹.",
      ],
      whyItWorks:
        "Enthalpy H = U + pV is a **state function** designed for open benchtop flasks at constant atmospheric pressure: under constant pressure, the heat transferred equals ΔH exactly, even if gases expand and do pressure–volume work. Conservation of energy requires q_system + q_surroundings = 0, which is why ΔH carries the opposite sign to q_water.",
      strategies: [
        "Before touching your calculator, write two headings: **Mass heating up (for q)** and **Limiting moles reacting (for n)**. That single habit eliminates 80% of IB calorimetry mistakes.",
        "Always check significant figures: if ΔT = 6.8 °C (2 s.f.), check whether the question specifies 3 s.f. or expects rounding to the lowest s.f. in the data.",
        "In Paper 1B error questions, never write vague “human error” — name a specific systematic error (heat loss to surroundings, heat absorbed by the calorimeter/beaker, incomplete combustion) and state its exact directional effect on |ΔH|.",
      ],
      thinkDeeper:
        "Why is ΔH_neut⊖ for a weak acid like ethanoic acid (CH₃COOH) with NaOH slightly *less* exothermic (~−55 kJ mol⁻¹) than for HCl with NaOH (−57.3 kJ mol⁻¹)? Because extra endothermic energy is required to dissociate the unionised O−H bond in CH₃COOH before H⁺ and OH⁻ can combine.",
    },

    // =========================================================================
    // SECTION 2: R1.2–R1.3 Bond Enthalpies, Hess's Law & Energy from Fuels [SL]
    // =========================================================================
    {
      id: "hess-bond-enthalpies-fuels",
      heading: "R1.2–R1.3 Bond Enthalpies, Hess's Law & Energy from Fuels",
      level: "SL",
      discovery: {
        problem:
          "You want ΔH for turning solid graphite directly into carbon monoxide: C(s) + ½O₂(g) → CO(g). It is almost impossible to stop carbon burning partway to CO₂ in a calorimeter. Yet you *can* easily measure complete combustion of C(s) (−394 kJ mol⁻¹) and of CO(g) (−283 kJ mol⁻¹). How can those two numbers unlock the impossible reaction?",
        idea:
          "Both C(s) + O₂(g) and CO(g) + ½O₂(g) arrive at the exact same destination: CO₂(g)! Because enthalpy is path-independent (**Hess's Law**), going C → CO → CO₂ must equal going C → CO₂ directly: ΔH + (−283) = −394, so **ΔH = −394 − (−283) = −111 kJ mol⁻¹**.",
      },
      body:
        "### Hess's Law & Indirect Enthalpy Cycles\n\n" +
        "**Hess's Law** states that the total enthalpy change of a chemical reaction is **independent of the route taken**, provided the initial and final conditions are identical. This lets us compute ΔH for slow, explosive, or incomplete reactions in three equivalent ways:\n\n" +
        "1. **Algebraic manipulation:** Reverse an equation ⇒ flip the sign of ΔH; multiply an equation by k ⇒ multiply ΔH by k; add equations ⇒ add their ΔH values.\n" +
        "2. **From standard enthalpies of formation (ΔH_f⊖)** (arrows point **UP from elements** to reactants and products):\n" +
        "{{ΔH_r = Σ ΔH_f(products) - Σ ΔH_f(reactants)}}\n" +
        "3. **From standard enthalpies of combustion (ΔH_c⊖)** (arrows point **DOWN from reactants and products** to CO₂ + H₂O):\n" +
        "{{ΔH_r = Σ ΔH_c(reactants) - Σ ΔH_c(products)}}\n\n" +
        "Notice the crucial reversal! Formation cycles take **Products − Reactants**; combustion cycles take **Reactants − Products**. Never guess — sketch the two arrows so the vector head-to-tail sum tells you the sign automatically.\n\n" +
        "### Average Bond Enthalpies\n\n" +
        "**Bond enthalpy** is the enthalpy change when **1 mole of covalent bonds** is broken homolytically in the **gaseous state** (always **endothermic**, > 0). Breaking bonds costs energy (+); forming bonds releases energy (−):\n\n" +
        "{{ΔH ≈ Σ E(bonds broken) - Σ E(bonds formed)}}\n\n" +
        "**Two IB-examined limitations of average bond enthalpies:**\n" +
        "1. Data Booklet bond enthalpies are **average values** across many different molecular environments (except diatomic molecules like H−H or Cl−Cl, which have exact bond dissociation enthalpies).\n" +
        "2. Bond enthalpies strictly apply only when **all reactants and products are gases** — they ignore enthalpies of vaporisation/condensation if a liquid (such as H₂O(l) or ethanol(l)) is present.\n\n" +
        "### R1.3 Energy from Fuels, Specific Energy & Fuel Cells\n\n" +
        "- **Complete combustion** (excess O₂) of hydrocarbons yields **CO₂ + H₂O** and maximum heat; **incomplete combustion** (limited O₂) yields **CO(g)** (toxic — binds irreversibly to haemoglobin) and/or **C(s) soot** (particulate haze) with lower heat output.\n" +
        "- **Specific energy** = energy released per unit **mass** (`kJ g⁻¹` or `MJ kg⁻¹`): {{Specific energy = |ΔH_c| / M}}. Crucial for aviation/rocketry (H₂ has ~142 kJ g⁻¹, the highest of any chemical fuel!).\n" +
        "- **Energy density** = energy released per unit **volume** (`kJ dm⁻³` or `kJ cm⁻³`): {{Energy density = Specific energy * ρ}}. Crucial for compact car fuel tanks (liquid petrol/octane beats compressed H₂ gas by volume!).\n" +
        "- **Fossil fuels** (coal, crude oil, natural gas) are non-renewable and add ancient sequestered carbon to the atmosphere; **methane (natural gas)** emits less CO₂ per kJ than coal because it has a higher H : C ratio.\n" +
        "- **Biofuels** (bioethanol from fermented sugars, biodiesel from transesterified vegetable oils) absorb CO₂ during photosynthesis so are closer to **carbon neutral**, though land use, fertiliser energy, and food-vs-fuel competition reduce net sustainability.\n" +
        "- **Fuel cells** (e.g. H₂–O₂ PEM or alkaline fuel cell, and direct methanol fuel cell) convert chemical energy **directly to electrical energy** at higher efficiency (~50–60%) than combustion engines (~25–30%), with water as the only exhaust for H₂ cells:\n" +
        "  - Acidic PEM anode (oxidation): H₂(g) → 2H⁺(aq) + 2e⁻\n" +
        "  - Acidic PEM cathode (reduction): O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)",
      diagram:
        `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hess Law enthalpy cycles using enthalpies of formation and combustion side by side with arrow directions" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="680" height="260" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<text x="170" y="26" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Formation Cycle (Arrows UP)</text>` +
        `<rect x="28" y="54" width="112" height="36" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>` +
        `<text x="84" y="77" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1e3a8a">Reactants</text>` +
        `<rect x="202" y="54" width="112" height="36" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>` +
        `<text x="258" y="77" text-anchor="middle" font-size="12.5" font-weight="700" fill="#065f46">Products</text>` +
        `<line x1="140" y1="72" x2="195" y2="72" stroke="#0f172a" stroke-width="2.4"/>` +
        `<polygon points="202,72 193,67 193,77" fill="#0f172a"/>` +
        `<text x="171" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">ΔH_r</text>` +
        `<rect x="92" y="176" width="158" height="36" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>` +
        `<text x="171" y="199" text-anchor="middle" font-size="12" font-weight="700" fill="#92400e">Elements (std. states)</text>` +
        `<line x1="138" y1="176" x2="88" y2="96" stroke="#dc2626" stroke-width="2.2"/>` +
        `<polygon points="84,90 85,100 93,95" fill="#dc2626"/>` +
        `<text x="68" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">ΣΔH_f(R)</text>` +
        `<line x1="204" y1="176" x2="254" y2="96" stroke="#059669" stroke-width="2.2"/>` +
        `<polygon points="258,90 249,95 257,100" fill="#059669"/>` +
        `<text x="275" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">ΣΔH_f(P)</text>` +
        `<text x="171" y="240" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">ΔH_r = ΣΔH_f(P) − ΣΔH_f(R)</text>` +
        `<line x1="340" y1="20" x2="340" y2="246" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="510" y="26" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Combustion Cycle (Arrows DOWN)</text>` +
        `<rect x="368" y="54" width="112" height="36" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>` +
        `<text x="424" y="77" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1e3a8a">Reactants</text>` +
        `<rect x="542" y="54" width="112" height="36" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.8"/>` +
        `<text x="598" y="77" text-anchor="middle" font-size="12.5" font-weight="700" fill="#065f46">Products</text>` +
        `<line x1="480" y1="72" x2="535" y2="72" stroke="#0f172a" stroke-width="2.4"/>` +
        `<polygon points="542,72 533,67 533,77" fill="#0f172a"/>` +
        `<text x="511" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">ΔH_r</text>` +
        `<rect x="432" y="176" width="158" height="36" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>` +
        `<text x="511" y="199" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">CO₂(g) + H₂O(l)</text>` +
        `<line x1="424" y1="90" x2="474" y2="170" stroke="#059669" stroke-width="2.2"/>` +
        `<polygon points="478,176 477,166 469,171" fill="#059669"/>` +
        `<text x="406" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">ΣΔH_c(R)</text>` +
        `<line x1="598" y1="90" x2="548" y2="170" stroke="#dc2626" stroke-width="2.2"/>` +
        `<polygon points="544,176 553,171 545,166" fill="#dc2626"/>` +
        `<text x="616" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">ΣΔH_c(P)</text>` +
        `<text x="511" y="240" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">ΔH_r = ΣΔH_c(R) − ΣΔH_c(P)</text>` +
        `</svg>`,
      diagramCaption:
        "Follow the route from Reactants to Products via the bottom box: going WITH an arrow adds it (green); going AGAINST an arrow subtracts it (red).",
      workedExamples: [
        {
          title: "Hydrogenation of Ethene Using Average Bond Enthalpies",
          problem:
            "Estimate ΔH for C₂H₄(g) + H₂(g) → C₂H₆(g) using average bond enthalpies (kJ mol⁻¹): C=C = 614, C−C = 346, C−H = 414, H−H = 436.",
          steps: [
            "Sketch full structural formulas so not a single bond is missed: ethene has 1 C=C and 4 C−H; H₂ has 1 H−H; ethane has 1 C−C and 6 C−H.",
            "Method A (break all, form all): Bonds broken = 614 + 4(414) + 436 = 2706 kJ mol⁻¹. Bonds formed = 346 + 6(414) = 2830 kJ mol⁻¹.",
            "Method B (shortcut — cancel the 4 unchanged C−H bonds): Net broken = 1 C=C + 1 H−H = 614 + 436 = 1050 kJ mol⁻¹. Net formed = 1 C−C + 2 C−H = 346 + 2(414) = 1174 kJ mol⁻¹.",
            "ΔH = Σ(bonds broken) − Σ(bonds formed) = 1050 − 1174 = −124 kJ mol⁻¹.",
          ],
          answer: "−124 kJ mol⁻¹",
          yourTurn: {
            question:
              "Using average bond enthalpies (kJ mol⁻¹): H−H = 436, Cl−Cl = 242, H−Cl = 431, calculate ΔH (in kJ mol⁻¹, with sign) for H₂(g) + Cl₂(g) → 2HCl(g).",
            answer: { type: "number", value: -184, tolerance: 0.5, display: "−184 kJ mol⁻¹" },
            solution:
              "Bonds broken = 1(H−H) + 1(Cl−Cl) = 436 + 242 = 678 kJ mol⁻¹. Bonds formed = 2(H−Cl) = 2 × 431 = 862 kJ mol⁻¹. ΔH = 678 − 862 = −184 kJ mol⁻¹.",
          },
        },
        {
          title: "Hess's Law Combustion Cycle for ΔH_f⊖ of Ethanol",
          problem:
            "Calculate ΔH_f⊖ of liquid ethanol, 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l), given ΔH_c⊖ (kJ mol⁻¹): C(s) = −394, H₂(g) = −286, C₂H₅OH(l) = −1367.",
          steps: [
            "Combustion data are given, so use ΔH_r = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products). Note that O₂(g) does not burn (ΔH_c⊖ = 0).",
            "ΣΔH_c⊖(reactants) = 2(−394) + 3(−286) = −788 + (−858) = −1646 kJ mol⁻¹.",
            "ΣΔH_c⊖(products) = 1(−1367) = −1367 kJ mol⁻¹.",
            "ΔH_f⊖ = −1646 − (−1367) = −1646 + 1367 = −279 kJ mol⁻¹.",
          ],
          answer: "−279 kJ mol⁻¹",
        },
      ],
      keyPoints: [
        "Formation cycle: ΔH_r = ΣΔH_f⊖(products) − ΣΔH_f⊖(reactants). Combustion cycle: ΔH_r = ΣΔH_c⊖(reactants) − ΣΔH_c⊖(products).",
        "Bond enthalpy: ΔH ≈ Σ(bonds broken) − Σ(bonds formed) — remember it is Reactants minus Products, the opposite order from ΔH_f⊖!",
        "When comparing bond-enthalpy ΔH with Hess/calorimetry ΔH, always check two causes of discrepancy: (1) average bond enthalpies vs specific molecule, and (2) non-gaseous state (e.g. H₂O(l) vs H₂O(g)).",
        "Specific energy = |ΔH_c| / M (kJ g⁻¹); Energy density = Specific energy × density (kJ dm⁻³ or kJ cm⁻³).",
        "Hydrogen has unbeatable specific energy (~142 kJ g⁻¹), whereas liquid hydrocarbons have far higher energy density by volume.",
      ],
      whyItWorks:
        "Bond breaking requires lifting reactants up to separated gaseous atoms (an intermediate high-energy shelf), and bond forming drops those atoms down to gaseous products. That means bond-enthalpy calculations are secretly a special case of Hess's Law where the bottom/top reference box is **gaseous atoms**!",
      strategies: [
        "Always draw out full Lewis/displayed structures before counting bonds — students routinely forget that CO₂ has **two** C=O bonds and O₂ has a **double** O=O bond.",
        "If an equation has a liquid product like H₂O(l) instead of H₂O(g), the true ΔH is MORE exothermic than the bond-enthalpy estimate by n × ΔH_vap(H₂O) (~44 kJ mol⁻¹ per mole of water condensing).",
        "Check signs with double negatives explicitly written in brackets: `−1646 − (−1367)` prevents careless sign slips under exam pressure.",
      ],
      thinkDeeper:
        "Benzene (C₆H₆) has an experimental enthalpy of hydrogenation of −208 kJ mol⁻¹, whereas 3× the hydrogenation of cyclohexene (−120 kJ mol⁻¹ each) predicts −360 kJ mol⁻¹. What does the 152 kJ mol⁻¹ difference prove? Benzene is 152 kJ mol⁻¹ **lower in energy (more stable)** than hypothetical cyclohexa-1,3,5-triene due to π-electron delocalisation (resonance energy)!",
    },

    // =========================================================================
    // SECTION 3: R1.2 Born–Haber Cycles, Lattice & Solution Enthalpies [HL]
    // =========================================================================
    {
      id: "born-haber-solution-hl",
      heading: "R1.2 Born–Haber Cycles, Lattice & Solution Enthalpies",
      level: "HL",
      discovery: {
        problem:
          "Sodium chloride (NaCl) has an enormous lattice enthalpy of +790 kJ mol⁻¹ — breaking its ionic crystal requires far more energy than breaking a C−C covalent bond! So why does table salt dissolve effortlessly in cold tap water without needing a Bunsen burner?",
        idea:
          "As water molecules surround the freed Na⁺ and Cl⁻ ions, strong **ion–dipole attractions** release huge **enthalpies of hydration** (ΔH_hyd⊖(Na⁺) = −424 and ΔH_hyd⊖(Cl⁻) = −359, totalling **−783 kJ mol⁻¹**). Hydration pays back almost all of the +790 kJ mol⁻¹ lattice cost, leaving ΔH_sol⊖ = +7 kJ mol⁻¹ — tiny enough that the entropy gain of dissolving drives it spontaneously!",
      },
      body:
        "### The IB Convention for Lattice Enthalpy\n\n" +
        "In the IB Chemistry Data Booklet, **lattice enthalpy (ΔH_lat⊖)** is strictly defined in the **endothermic dissociation** direction:\n\n" +
        "**MX(s) → M⁺(g) + X⁻(g)    ΔH_lat⊖ > 0**\n\n" +
        "That is, the enthalpy change when **1 mole of a solid ionic compound is separated into its gaseous ions** under standard conditions. (Warning: some A-level or university textbooks define lattice *formation* as negative — always check arrow direction and stick to the IB Data Booklet positive convention!)\n\n" +
        "### Every Step in a Born–Haber Cycle\n\n" +
        "A Born–Haber cycle applies Hess's Law to relate ΔH_f⊖ of an ionic solid to its gaseous ions via five measurable atomic steps:\n\n" +
        "| Step | Equation (example: MgCl₂) | Sign | Watch out! |\n" +
        "|---|---|---|---|\n" +
        "| Atomisation of metal | Mg(s) → Mg(g) | **+** (endo) | Breaking metallic bonds (1 mol gaseous atoms). |\n" +
        "| Atomisation of non-metal | Cl₂(g) → 2Cl(g) | **+** (endo) | Equals **2 × ΔH_at⊖(Cl)** = 1 × E(Cl−Cl)! |\n" +
        "| Ionisation energy (IE₁, IE₂) | Mg(g) → Mg⁺(g) + e⁻ → Mg²⁺(g) + 2e⁻ | **+** (endo) | Must add **both** IE₁ and IE₂ for Group 2 cations! |\n" +
        "| Electron affinity (EA₁, EA₂) | Cl(g) + e⁻ → Cl⁻(g) | **EA₁: −** (exo), **EA₂: +** (endo) | Multiply EA₁(Cl) by **2** for MgCl₂. For O²⁻/S²⁻, **EA₂ is endothermic** (repulsion between X⁻ and incoming e⁻)! |\n" +
        "| Lattice enthalpy (ΔH_lat⊖) | MgCl₂(s) → Mg²⁺(g) + 2Cl⁻(g) | **+** (endo) | Going **down** from gaseous ions to solid uses **−ΔH_lat⊖**. |\n\n" +
        "Summing around the cycle (for MX):\n\n" +
        "{{ΔH_f = ΔH_at(M) + ΔH_at(X) + IE_1(M) + EA_1(X) - ΔH_lat(MX)}}\n\n" +
        "### Factors Controlling Lattice Enthalpy & Covalent Character\n\n" +
        "By Coulomb's law, electrostatic attraction between gaseous ions scales with **ionic charge product** and inversely with **sum of ionic radii**:\n\n" +
        "{{ΔH_lat ∝ (q_+ * q_-) / (r_+ + r_-)}}\n\n" +
        "- Higher charges produce dramatically larger ΔH_lat⊖ (MgO, 2+/2−, +3791 kJ mol⁻¹ vs NaF, 1+/1−, +930 kJ mol⁻¹).\n" +
        "- Smaller ionic radii give shorter inter-ionic distances and larger ΔH_lat⊖ (LiF > NaF > KF > RbF).\n" +
        "- **Experimental (Born–Haber) vs Theoretical (pure ionic model) ΔH_lat⊖:** For NaCl and KF, the two values agree within ~1%. For **AgI** or **MgI₂**, the experimental ΔH_lat⊖ is **significantly larger** than the theoretical value because a cation with high **charge density** (or non-noble-gas d-subshell like Ag⁺) **polarises** the large, soft I⁻ electron cloud, introducing **covalent character** that adds extra bond strength.\n\n" +
        "### Enthalpy of Solution & Enthalpy of Hydration\n\n" +
        "Dissolving an ionic salt can be split into (1) breaking the lattice into gaseous ions (+ΔH_lat⊖) and (2) hydrating every gaseous ion into aqueous ions (ΣΔH_hyd⊖, always **exothermic**, < 0):\n\n" +
        "{{ΔH_sol = ΔH_lat + Σ ΔH_hyd}}\n\n" +
        "Just like lattice enthalpy, **hydration enthalpy becomes more exothermic** (larger magnitude) as **ionic charge increases** and **ionic radius decreases** (higher charge density ⇒ stronger ion–dipole attraction to water).",
      diagram:
        `<svg viewBox="0 0 680 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Born-Haber energy level ladder for sodium chloride and enthalpy of solution cycle using IB endothermic lattice enthalpy convention" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="680" height="295" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<text x="215" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Born–Haber Ladder for NaCl(s) [HL]</text>` +
        `<line x1="36" y1="274" x2="36" y2="38" stroke="#334155" stroke-width="1.6"/>` +
        `<polygon points="36,32 32,41 40,41" fill="#334155"/>` +
        `<text x="21" y="158" text-anchor="middle" font-size="11" fill="#475569" transform="rotate(-90 21 158)">Enthalpy, H</text>` +
        `<line x1="62" y1="48" x2="236" y2="48" stroke="#0f172a" stroke-width="2.4"/>` +
        `<text x="149" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Na⁺(g) + e⁻ + Cl(g)</text>` +
        `<line x1="258" y1="106" x2="404" y2="106" stroke="#7c3aed" stroke-width="2.4"/>` +
        `<text x="331" y="99" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">Na⁺(g) + Cl⁻(g)</text>` +
        `<line x1="62" y1="126" x2="206" y2="126" stroke="#475569" stroke-width="2"/>` +
        `<text x="134" y="120" text-anchor="middle" font-size="10.5" fill="#334155">Na(g) + Cl(g)</text>` +
        `<line x1="62" y1="164" x2="206" y2="164" stroke="#475569" stroke-width="2"/>` +
        `<text x="134" y="158" text-anchor="middle" font-size="10.5" fill="#334155">Na(g) + ½Cl₂(g)</text>` +
        `<line x1="62" y1="202" x2="236" y2="202" stroke="#2563eb" stroke-width="2.6"/>` +
        `<text x="149" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Na(s) + ½Cl₂(g)</text>` +
        `<line x1="62" y1="266" x2="404" y2="266" stroke="#059669" stroke-width="2.8"/>` +
        `<text x="233" y="284" text-anchor="middle" font-size="11.5" font-weight="700" fill="#047857">NaCl(s)</text>` +
        `<line x1="80" y1="202" x2="80" y2="169" stroke="#d97706" stroke-width="2"/><polygon points="80,164 76,171 84,171" fill="#d97706"/>` +
        `<text x="90" y="187" font-size="9.5" font-weight="600" fill="#b45309">+108 ΔH_at(Na)</text>` +
        `<line x1="80" y1="164" x2="80" y2="131" stroke="#d97706" stroke-width="2"/><polygon points="80,126 76,133 84,133" fill="#d97706"/>` +
        `<text x="90" y="148" font-size="9.5" font-weight="600" fill="#b45309">+121 ΔH_at(Cl)</text>` +
        `<line x1="80" y1="126" x2="80" y2="53" stroke="#d97706" stroke-width="2"/><polygon points="80,48 76,55 84,55" fill="#d97706"/>` +
        `<text x="90" y="88" font-size="9.5" font-weight="600" fill="#b45309">+496 IE₁(Na)</text>` +
        `<line x1="274" y1="48" x2="274" y2="101" stroke="#059669" stroke-width="2"/><polygon points="274,106 270,99 278,99" fill="#059669"/>` +
        `<text x="282" y="79" font-size="9.5" font-weight="600" fill="#047857">−349 EA₁(Cl)</text>` +
        `<line x1="112" y1="202" x2="112" y2="261" stroke="#2563eb" stroke-width="2.2"/><polygon points="112,266 108,259 116,259" fill="#2563eb"/>` +
        `<text x="120" y="238" font-size="10" font-weight="700" fill="#1d4ed8">ΔH_f = −411</text>` +
        `<line x1="336" y1="266" x2="336" y2="111" stroke="#dc2626" stroke-width="2.4"/><polygon points="336,106 332,114 340,114" fill="#dc2626"/>` +
        `<text x="344" y="180" font-size="10" font-weight="700" fill="#b91c1c">ΔH_lat</text>` +
        `<text x="344" y="194" font-size="10" font-weight="700" fill="#b91c1c">= +787</text>` +
        `<text x="344" y="208" font-size="9" fill="#991b1b">(endo ↑)</text>` +
        `<line x1="422" y1="22" x2="422" y2="282" stroke="#e2e8f0" stroke-width="1.5"/>` +
        `<text x="550" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Solution Cycle</text>` +
        `<rect x="444" y="56" width="84" height="34" rx="7" fill="#dbeafe" stroke="#2563eb" stroke-width="1.6"/>` +
        `<text x="486" y="77" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e3a8a">MX(s)</text>` +
        `<rect x="572" y="56" width="92" height="34" rx="7" fill="#d1fae5" stroke="#059669" stroke-width="1.6"/>` +
        `<text x="618" y="77" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">M⁺(aq)+X⁻(aq)</text>` +
        `<line x1="528" y1="73" x2="566" y2="73" stroke="#0f172a" stroke-width="2.2"/><polygon points="572,73 564,68 564,78" fill="#0f172a"/>` +
        `<text x="550" y="64" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">ΔH_sol</text>` +
        `<rect x="486" y="182" width="128" height="36" rx="7" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>` +
        `<text x="550" y="204" text-anchor="middle" font-size="11.5" font-weight="700" fill="#991b1b">M⁺(g) + X⁻(g)</text>` +
        `<line x1="486" y1="90" x2="526" y2="176" stroke="#dc2626" stroke-width="2"/><polygon points="529,182 529,172 521,176" fill="#dc2626"/>` +
        `<text x="476" y="144" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">+ΔH_lat</text>` +
        `<line x1="572" y1="182" x2="612" y2="96" stroke="#059669" stroke-width="2"/><polygon points="615,90 607,95 615,99" fill="#059669"/>` +
        `<text x="626" y="144" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">ΣΔH_hyd</text>` +
        `<text x="550" y="252" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1e293b">ΔH_sol = ΔH_lat + ΣΔH_hyd</text>` +
        `</svg>`,
      diagramCaption:
        "Left: Born–Haber energy ladder for NaCl(s) showing IB's endothermic dissociation arrow (+787 kJ mol⁻¹ from inputs, ~790 kJ mol⁻¹ Data Booklet). Right: Solution cycle combining +ΔH_lat with exothermic ΣΔH_hyd.",
      workedExamples: [
        {
          title: "Born–Haber Cycle for MgO(s) with 2nd Electron Affinity",
          problem:
            "Calculate the lattice enthalpy ΔH_lat⊖ of MgO(s) (endothermic dissociation convention) using these values (kJ mol⁻¹): ΔH_f⊖[MgO(s)] = −602; ΔH_at⊖[Mg(s)] = +147; ΔH_at⊖[½O₂(g)] = +249; IE₁(Mg) = +738; IE₂(Mg) = +1451; EA₁(O) = −141; EA₂(O) = +753.",
          steps: [
            "Write the Hess equation from elements to MgO(s) via Mg²⁺(g) + O²⁻(g): ΔH_f⊖ = ΔH_at(Mg) + IE₁(Mg) + IE₂(Mg) + ΔH_at(O) + EA₁(O) + EA₂(O) − ΔH_lat⊖.",
            "Sum the gaseous-ion formation steps: 147 + 738 + 1451 + 249 + (−141) + 753 = +3197 kJ mol⁻¹.",
            "Rearrange for ΔH_lat⊖: ΔH_lat⊖ = +3197 − ΔH_f⊖ = 3197 − (−602) = +3799 kJ mol⁻¹.",
            "Sanity check: 2+/2− lattice should be ~4–5× larger than NaCl (+790 kJ mol⁻¹) — +3799 kJ mol⁻¹ fits perfectly!",
          ],
          answer: "+3799 kJ mol⁻¹",
          yourTurn: {
            question:
              "Calculate ΔH_sol⊖ (in kJ mol⁻¹, with sign) for magnesium chloride, MgCl₂(s), given ΔH_lat⊖(MgCl₂) = +2540 kJ mol⁻¹, ΔH_hyd⊖(Mg²⁺) = −1963 kJ mol⁻¹, and ΔH_hyd⊖(Cl⁻) = −359 kJ mol⁻¹.",
            answer: { type: "number", value: -141, tolerance: 0.5, display: "−141 kJ mol⁻¹" },
            solution:
              "Remember there are TWO Cl⁻ ions per mole of MgCl₂! ΔH_sol⊖ = ΔH_lat⊖ + ΔH_hyd⊖(Mg²⁺) + 2 × ΔH_hyd⊖(Cl⁻) = +2540 + (−1963) + 2(−359) = 2540 − 1963 − 718 = −141 kJ mol⁻¹.",
          },
        },
        {
          title: "Born–Haber Stoichiometry for CaCl₂(s) (Double-Halide Trap!)",
          problem:
            "Calculate ΔH_f⊖ of CaCl₂(s) given (kJ mol⁻¹): ΔH_at⊖(Ca) = +178, IE₁(Ca) = +590, IE₂(Ca) = +1145, E(Cl−Cl) = +242, EA₁(Cl) = −349, ΔH_lat⊖(CaCl₂) = +2255.",
          steps: [
            "Check stoichiometry for Ca(s) + Cl₂(g) → CaCl₂(s): we need 1 Ca²⁺(g) and 2 Cl⁻(g).",
            "Atomising 1 mol Cl₂(g) → 2Cl(g) breaks 1 mol of Cl−Cl bonds = +242 kJ mol⁻¹ (do NOT multiply E(Cl−Cl) by 2 — it already makes 2 Cl atoms!).",
            "Forming 2 Cl⁻(g) from 2 Cl(g) DOES multiply EA₁(Cl) by 2: 2 × (−349) = −698 kJ mol⁻¹.",
            "ΔH_f⊖ = 178 + 590 + 1145 + 242 + (−698) − 2255 = 1457 − 2255 = −798 kJ mol⁻¹.",
          ],
          answer: "−798 kJ mol⁻¹",
        },
      ],
      keyPoints: [
        "IB lattice enthalpy is **endothermic dissociation** (MX(s) → M⁺(g) + X⁻(g), ΔH_lat⊖ > 0); going down from gaseous ions to solid uses −ΔH_lat⊖.",
        "Always check stoichiometry in MX₂ or M₂X salts: multiply ΔH_at(X), EA₁(X), and ΔH_hyd(X⁻) by 2 when two X⁻ ions are formed — but note E(X−X) already yields 2 X(g) atoms!",
        "The second electron affinity (e.g. O⁻(g) + e⁻ → O²⁻(g)) is always **endothermic (+)** due to electrostatic repulsion between like negative charges.",
        "Higher ionic charge and smaller ionic radius increase both ΔH_lat⊖ (more positive) and |ΔH_hyd⊖| (more negative).",
        "When experimental (Born–Haber) ΔH_lat⊖ significantly exceeds the theoretical pure-ionic value, the bonding has substantial **covalent character** due to polarisation of the anion by the cation.",
      ],
      whyItWorks:
        "You cannot directly pack isolated gaseous Na⁺ and Cl⁻ ions into a calorimeter without huge electrostatic explosions. Max Born and Fritz Haber realised in 1919 that connecting the solid to its gaseous ions via spectroscopy (IE, EA) and thermochemistry (ΔH_at, ΔH_f) turns an unmeasurable quantity into simple arithmetic — and comparing it against Born–Landé electrostatic theory reveals how covalent a 'salt' really is.",
      strategies: [
        "Write state symbols on EVERY line of a Born–Haber diagram — IB examiners routinely dock a mark for omitting `(g)` or `(s)` or balancing electrons (`+ 2e⁻`).",
        "Check whether the prompt gives **bond enthalpy E(X−X)** (for X₂ → 2X) or **enthalpy of atomisation ΔH_at⊖(X)** (for ½X₂ → X) — they differ by a factor of 2!",
        "In ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖, remember ΔH_lat⊖ is positive and ΔH_hyd⊖ is negative, so ΔH_sol⊖ is the narrow balance between two huge opposing terms.",
      ],
      thinkDeeper:
        "Why is anhydrous CuSO₄(s) strongly exothermic when dissolved in water (ΔH_sol = −66 kJ mol⁻¹) whereas hydrated blue CuSO₄·5H₂O(s) is slightly endothermic (+11 kJ mol⁻¹)? Because in CuSO₄·5H₂O, the Cu²⁺ ion is already coordinated to water ligands inside the crystal — so most of the exothermic hydration energy has already been released!",
    },

    // =========================================================================
    // SECTION 4: R1.4 Entropy (ΔS⊖) & Gibbs Free Energy (ΔG⊖) [HL]
    // =========================================================================
    {
      id: "entropy-gibbs-spontaneity-hl",
      heading: "R1.4 Entropy (ΔS⊖) & Gibbs Free Energy (ΔG⊖)",
      level: "HL",
      discovery: {
        problem:
          "Ice melts spontaneously at 25 °C (ΔH = +6.0 kJ mol⁻¹), and ammonium nitrate dissolves spontaneously in water (ΔH = +25.7 kJ mol⁻¹). Both processes are **endothermic** — they climb *uphill* in enthalpy! What invisible driving force pushes an endothermic change forward?",
        idea:
          "Nature does not merely seek lower enthalpy — it spreads energy and matter over as many microstates as possible, measured by **entropy (S)**. Melting ice or dissolving a crystal increases disorder so strongly (**ΔS > 0**) that the **−TΔS** term outweighs the positive ΔH, making **Gibbs free energy ΔG = ΔH − TΔS negative**!",
      },
      body:
        "### Entropy (S) & Predicting the Sign of ΔS⊖\n\n" +
        "**Entropy (S)** measures the dispersal of energy and matter (number of accessible microstates) in a system, with units **J K⁻¹ mol⁻¹** (watch out: **Joules**, NOT kilojoules!). Unlike ΔH_f⊖, **elements in their standard states do NOT have S⊖ = 0** (only a perfect crystal at absolute zero, 0 K, has S = 0).\n\n" +
        "Standard entropy change of a reaction:\n\n" +
        "{{ΔS = Σ S(products) - Σ S(reactants)}}\n\n" +
        "**How to predict the sign of ΔS⊖ without data:**\n" +
        "1. **Change in moles of gas (Δn_gas)** dominates all other factors! More moles of gas on the product side ⇒ **ΔS > 0** (e.g. CaCO₃(s) → CaO(s) + CO₂(g), Δn_gas = +1 ⇒ ΔS > 0). Fewer moles of gas ⇒ **ΔS < 0** (e.g. N₂(g) + 3H₂(g) → 2NH₃(g), Δn_gas = −2 ⇒ ΔS < 0).\n" +
        "2. **State changes:** S(gas) ≫ S(liquid) > S(solid).\n" +
        "3. **Dissolving a solid** usually increases entropy (ΔS > 0), though highly charged small ions (like Mg²⁺ or Al³⁺) can order surrounding water shells so tightly that ΔS_sol is slightly negative.\n" +
        "4. **Temperature & molecular complexity:** Higher T or larger, more flexible molecules have higher absolute S⊖.\n\n" +
        "### Gibbs Free Energy (ΔG⊖) & Spontaneity\n\n" +
        "Combining enthalpy and entropy at constant T and P defines the **Gibbs free energy change**:\n\n" +
        "{{ΔG = ΔH - T ΔS}}\n\n" +
        "- **ΔG < 0:** Reaction is **spontaneous (thermodynamically feasible)** in the forward direction.\n" +
        "- **ΔG > 0:** Reaction is **non-spontaneous** in the forward direction (the reverse reaction is spontaneous).\n" +
        "- **ΔG = 0:** System is at **dynamic equilibrium** (this defines the **crossover temperature** {{T = ΔH / ΔS}}!).\n\n" +
        "**THE #1 HL EXAM TRAP — UNIT MISMATCH:** ΔH⊖ is given in **kJ mol⁻¹**, whereas ΔS⊖ is given in **J K⁻¹ mol⁻¹**, and T MUST be in **Kelvin** (K = °C + 273). Always convert ΔS⊖ to kJ K⁻¹ mol⁻¹ by **dividing by 1000** before computing {{ΔG = ΔH - T * (ΔS / 1000)}}!\n\n" +
        "### The Four Spontaneity Regimes\n\n" +
        "| ΔH⊖ | ΔS⊖ | −TΔS⊖ | Spontaneity (ΔG⊖ < 0) | Classic IB Example |\n" +
        "|---|---|---|---|---|\n" +
        "| **−** (exo) | **+** (more disorder) | **−** | **Always spontaneous** at all T | 2H₂O₂(l) → 2H₂O(l) + O₂(g) |\n" +
        "| **+** (endo) | **−** (less disorder) | **+** | **Never spontaneous** at any T | 3O₂(g) → 2O₃(g) |\n" +
        "| **−** (exo) | **−** (less disorder) | **+** | Spontaneous at **LOW T** (T < ΔH/ΔS) | N₂(g) + 3H₂(g) → 2NH₃(g) |\n" +
        "| **+** (endo) | **+** (more disorder) | **−** | Spontaneous at **HIGH T** (T > ΔH/ΔS) | CaCO₃(s) → CaO(s) + CO₂(g) |\n\n" +
        "### Thermodynamic Feasibility vs Kinetic Stability\n\n" +
        "A large negative ΔG⊖ means a reaction is **thermodynamically spontaneous**, NOT necessarily fast! For example, diamond → graphite (ΔG⊖ = −2.9 kJ mol⁻¹) and H₂(g) + ½O₂(g) → H₂O(l) (ΔG⊖ = −237 kJ mol⁻¹) are both spontaneous at 298 K, yet occur at negligible rates because they have a very high **activation energy (E_a)** — they are **kinetically stable**.",
      diagram:
        `<svg viewBox="0 0 680 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of Gibbs free energy delta G versus temperature T illustrating all four spontaneity sign regimes and the crossover temperature" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="680" height="275" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>` +
        `<text x="340" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">Gibbs Free Energy vs Temperature: ΔG = ΔH − TΔS (y = c + mx) [HL]</text>` +
        `<rect x="74" y="42" width="386" height="98" fill="#fef2f2"/>` +
        `<rect x="74" y="140" width="386" height="98" fill="#ecfdf5"/>` +
        `<text x="452" y="57" text-anchor="end" font-size="10.5" font-weight="700" fill="#b91c1c">Non-spontaneous (ΔG &gt; 0)</text>` +
        `<text x="452" y="230" text-anchor="end" font-size="10.5" font-weight="700" fill="#047857">Spontaneous (ΔG &lt; 0)</text>` +
        `<line x1="74" y1="242" x2="74" y2="40" stroke="#334155" stroke-width="2"/>` +
        `<polygon points="74,34 70,43 78,43" fill="#334155"/>` +
        `<line x1="74" y1="140" x2="466" y2="140" stroke="#0f172a" stroke-width="2"/>` +
        `<polygon points="472,140 463,136 463,144" fill="#0f172a"/>` +
        `<text x="464" y="156" text-anchor="end" font-size="11" font-weight="700" fill="#334155">T (K)</text>` +
        `<text x="54" y="144" text-anchor="end" font-size="11" font-weight="700" fill="#334155">0</text>` +
        `<text x="26" y="140" text-anchor="middle" font-size="11.5" font-weight="700" fill="#334155" transform="rotate(-90 26 140)">ΔG (kJ mol⁻¹)</text>` +
        `<line x1="74" y1="108" x2="444" y2="54" stroke="#dc2626" stroke-width="2.6"/>` +
        `<line x1="74" y1="176" x2="444" y2="226" stroke="#059669" stroke-width="2.6"/>` +
        `<line x1="74" y1="68" x2="444" y2="212" stroke="#2563eb" stroke-width="2.8"/>` +
        `<line x1="74" y1="204" x2="444" y2="78" stroke="#d97706" stroke-width="2.8"/>` +
        `<circle cx="259" cy="140" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/>` +
        `<text x="259" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">T* = ΔH/ΔS</text>` +
        `<rect x="480" y="44" width="186" height="196" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>` +
        `<text x="573" y="64" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Four Sign Cases</text>` +
        `<line x1="492" y1="84" x2="514" y2="84" stroke="#059669" stroke-width="3"/>` +
        `<text x="520" y="88" font-size="10.5" font-weight="700" fill="#047857">ΔH&lt;0, ΔS&gt;0</text>` +
        `<text x="520" y="101" font-size="9.5" fill="#475569">Always spontaneous</text>` +
        `<line x1="492" y1="122" x2="514" y2="122" stroke="#dc2626" stroke-width="3"/>` +
        `<text x="520" y="126" font-size="10.5" font-weight="700" fill="#b91c1c">ΔH&gt;0, ΔS&lt;0</text>` +
        `<text x="520" y="139" font-size="9.5" fill="#475569">Never spontaneous</text>` +
        `<line x1="492" y1="160" x2="514" y2="160" stroke="#2563eb" stroke-width="3"/>` +
        `<text x="520" y="164" font-size="10.5" font-weight="700" fill="#1d4ed8">ΔH&gt;0, ΔS&gt;0</text>` +
        `<text x="520" y="177" font-size="9.5" fill="#475569">Spontaneous at HIGH T</text>` +
        `<line x1="492" y1="198" x2="514" y2="198" stroke="#d97706" stroke-width="3"/>` +
        `<text x="520" y="202" font-size="10.5" font-weight="700" fill="#b45309">ΔH&lt;0, ΔS&lt;0</text>` +
        `<text x="520" y="215" font-size="9.5" fill="#475569">Spontaneous at LOW T</text>` +
        `<text x="340" y="262" text-anchor="middle" font-size="11" fill="#475569">y-intercept = ΔH⊖  ·  gradient = −ΔS⊖  ·  x-intercept (ΔG = 0) = crossover temperature T* = ΔH⊖/ΔS⊖</text>` +
        `</svg>`,
      diagramCaption:
        "Plotting ΔG against T produces a straight line with y-intercept ΔH⊖ and gradient −ΔS⊖. Where a line crosses the horizontal axis (ΔG = 0) marks the crossover temperature T* = ΔH⊖/ΔS⊖.",
      workedExamples: [
        {
          title: "Thermal Decomposition of Limestone & Minimum Temperature",
          problem:
            "For CaCO₃(s) → CaO(s) + CO₂(g), ΔH⊖ = +178 kJ mol⁻¹ and S⊖ values (J K⁻¹ mol⁻¹) are: CaCO₃(s) = 93, CaO(s) = 40, CO₂(g) = 214. (a) Calculate ΔG⊖ at 298 K. (b) Find the minimum temperature (in K) at which the decomposition becomes spontaneous.",
          steps: [
            "Calculate ΔS⊖ = ΣS⊖(products) − ΣS⊖(reactants) = (40 + 214) − 93 = +161 J K⁻¹ mol⁻¹ (positive as expected: 0 → 1 mol gas).",
            "Convert ΔS⊖ to kJ K⁻¹ mol⁻¹: {{ΔS = 161 / 1000 = +0.161}} kJ K⁻¹ mol⁻¹.",
            "(a) At 298 K: ΔG⊖ = ΔH⊖ − TΔS⊖ = +178 − (298 × 0.161) = 178 − 47.98 = +130 kJ mol⁻¹ (non-spontaneous at room temperature!).",
            "(b) At the crossover point, ΔG = 0 ⇒ T = ΔH / ΔS = {{178 / 0.161 = 1105.6}} K ≈ 1110 K (833 °C). Above 1106 K, ΔG < 0 and limestone decomposes spontaneously in a lime kiln.",
          ],
          answer: "(a) +130 kJ mol⁻¹ (non-spontaneous); (b) 1110 K (1106 K)",
          yourTurn: {
            question:
              "For the Haber process N₂(g) + 3H₂(g) → 2NH₃(g), ΔH⊖ = −92.0 kJ mol⁻¹ and ΔS⊖ = −198 J K⁻¹ mol⁻¹. Calculate ΔG⊖ at 298 K in kJ mol⁻¹ (include the sign, to 3 significant figures).",
            answer: { type: "number", value: -33.0, tolerance: 0.2, display: "−33.0 kJ mol⁻¹" },
            solution:
              "Convert ΔS⊖: −198 / 1000 = −0.198 kJ K⁻¹ mol⁻¹. ΔG⊖ = −92.0 − (298 × −0.198) = −92.0 + 59.004 = −32.996 ≈ −33.0 kJ mol⁻¹.",
          },
        },
        {
          title: "Calculating ΔG⊖ Directly from ΔG_f⊖ Values",
          problem:
            "Calculate ΔG⊖ for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) at 298 K given ΔG_f⊖ (kJ mol⁻¹): CH₄(g) = −51, CO₂(g) = −394, H₂O(l) = −237.",
          steps: [
            "Like ΔH_f⊖, the standard Gibbs free energy of formation of any element in its standard state is zero: ΔG_f⊖[O₂(g)] = 0 kJ mol⁻¹.",
            "Apply Hess's Law for Gibbs free energy: ΔG⊖ = ΣΔG_f⊖(products) − ΣΔG_f⊖(reactants).",
            "ΔG⊖ = [−394 + 2(−237)] − [−51 + 2(0)] = [−394 − 474] − (−51) = −868 + 51 = −817 kJ mol⁻¹.",
          ],
          answer: "−817 kJ mol⁻¹",
        },
      ],
      keyPoints: [
        "Entropy S has units **J K⁻¹ mol⁻¹** and is NEVER zero for elements at 298 K (unlike ΔH_f⊖ and ΔG_f⊖).",
        "Gas-mole change Δn_gas is the #1 predictor of the sign of ΔS⊖.",
        "Always divide ΔS⊖ by **1000** (J → kJ) and convert T to **Kelvin** (K = °C + 273) before using ΔG = ΔH − TΔS.",
        "Setting ΔG = 0 gives the crossover temperature T* = ΔH / ΔS (valid only when ΔH and ΔS have the **same sign**; we assume ΔH and ΔS are roughly constant with T).",
        "ΔG < 0 tells you a reaction is thermodynamically feasible — it says NOTHING about rate (a high E_a makes a spontaneous reaction kinetically stable).",
      ],
      whyItWorks:
        "The Second Law of Thermodynamics demands ΔS_universe = ΔS_system + ΔS_surroundings > 0 for every spontaneous process. At constant T and P, heat entering the surroundings is −ΔH_system, so ΔS_surroundings = −ΔH_system / T. Multiplying ΔS_universe = ΔS_system − ΔH_system / T by −T gives **−TΔS_universe = ΔH − TΔS = ΔG < 0**! Gibbs free energy is simply the Second Law rewritten using system variables alone.",
      strategies: [
        "Treat `ΔG = ΔH − TΔS` as the linear equation `y = c + m x`: y-intercept is `ΔH`, gradient is `−ΔS`. If an IB Paper 1B/2 graph plots ΔG against T, **negative gradient means ΔS > 0** and **positive gradient means ΔS < 0**!",
        "When calculating `T = ΔH / ΔS`, check units twice: if ΔH is in kJ mol⁻¹ and ΔS is in J K⁻¹ mol⁻¹, write `T = (ΔH × 1000) / ΔS` so you never get a silly 0.4 K crossover temperature.",
        "If an IB question asks why an exothermic, ΔG < 0 reaction does not happen on mixing at room temperature, your golden two-word answer is **high activation energy** (kinetically stable).",
      ],
      thinkDeeper:
        "Why is it valid to assume ΔH and ΔS are approximately independent of temperature over modest ranges, and when does that approximation break down sharply? It breaks down whenever a reactant or product undergoes a **phase change** (such as H₂O(l) boiling to H₂O(g) at 373 K), which introduces a sudden jump in both ΔH and ΔS — visible as a kink in the ΔG vs T straight line!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Why does an exothermic reaction have a negative ΔH even though the thermometer reading rises?",
        back: "The thermometer measures the **surroundings** (solution). Heat flows *out of* the chemical system into the surroundings, so the system's enthalpy decreases (ΔH < 0).",
        level: "SL",
      },
      {
        front: "What are the IB standard conditions denoted by the symbol ⊖?",
        back: "Temperature **298 K** (25 °C), pressure **100 kPa**, concentration **1.00 mol dm⁻³** for solutions, and all substances in their standard physical states.",
        level: "SL",
      },
      {
        front: "Define standard enthalpy of combustion (ΔH_c⊖).",
        back: "The enthalpy change when **1 mole of a substance** is completely burned in excess oxygen under standard conditions (298 K, 100 kPa).",
        level: "SL",
      },
      {
        front: "Define standard enthalpy of formation (ΔH_f⊖). What is ΔH_f⊖ for O₂(g)?",
        back: "The enthalpy change when **1 mole of a compound** is formed from its elements in their standard states under standard conditions. For any element in its standard state like O₂(g), ΔH_f⊖ = **0 kJ mol⁻¹**.",
        level: "SL",
      },
      {
        front: "Compare the sign order in Formation, Combustion, and Bond Enthalpy formulas.",
        back: "• Formation: ΣΔH_f(Products) − ΣΔH_f(Reactants)\n• Combustion: ΣΔH_c(Reactants) − ΣΔH_c(Products)\n• Bond enthalpy: ΣE(Bonds broken / Reactants) − ΣE(Bonds formed / Products)",
        level: "SL",
      },
      {
        front: "Give two reasons why ΔH calculated from average bond enthalpies differs from experimental Hess values.",
        back: "1. Average bond enthalpies are **means** across many different compounds rather than exact for the specific molecule.\n2. Bond enthalpies apply only to **gaseous** species and ignore phase-change enthalpies (e.g. liquid H₂O).",
        level: "SL",
      },
      {
        front: "Distinguish specific energy from energy density of a fuel.",
        back: "• **Specific energy** = energy per unit **mass** (`kJ g⁻¹`, |ΔH_c|/M).\n• **Energy density** = energy per unit **volume** (`kJ dm⁻³`, specific energy × density).",
        level: "SL",
      },
      {
        front: "State the IB Data Booklet definition and sign of lattice enthalpy (ΔH_lat⊖).",
        back: "The enthalpy change when **1 mole of a solid ionic compound** is separated into its **gaseous ions**: MX(s) → M⁺(g) + X⁻(g). Always **endothermic (+)**.",
        level: "HL",
      },
      {
        front: "Why is the first electron affinity of oxygen exothermic (−141 kJ mol⁻¹) while the second electron affinity is endothermic (+753 kJ mol⁻¹)?",
        back: "In EA₁, an electron is attracted to a neutral O atom (releases energy). In EA₂, energy must be supplied to overcome **electrostatic repulsion** between the negative O⁻ ion and the incoming negative electron.",
        level: "HL",
      },
      {
        front: "How do ionic charge and ionic radius affect lattice enthalpy and hydration enthalpy?",
        back: "Greater **ionic charge** and smaller **ionic radius** (higher charge density) strengthen electrostatic / ion–dipole attraction ⇒ **more positive ΔH_lat⊖** and **more negative (exothermic) ΔH_hyd⊖**.",
        level: "HL",
      },
      {
        front: "Why is the experimental (Born–Haber) ΔH_lat⊖ of AgI much larger than the theoretical pure-ionic value?",
        back: "The polarising Ag⁺ cation distorts the large, polarisable I⁻ electron cloud, giving the lattice significant **covalent character** and extra bond strength beyond the pure ionic model.",
        level: "HL",
      },
      {
        front: "Write the enthalpy of solution equation linking ΔH_sol⊖, ΔH_lat⊖, and ΔH_hyd⊖.",
        back: "**ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖** (using IB endothermic ΔH_lat⊖ > 0 and exothermic ΔH_hyd⊖ < 0; remember to multiply by ion stoichiometry for MX₂!).",
        level: "HL",
      },
      {
        front: "How do ΔH and ΔS determine the sign of ΔG = ΔH − TΔS when ΔH > 0 and ΔS > 0?",
        back: "Spontaneous (**ΔG < 0**) only at **high temperatures**, above the crossover temperature **T = ΔH / ΔS**, where the negative −TΔS term outweighs +ΔH.",
        level: "HL",
      },
      {
        front: "What does a negative ΔG⊖ tell you about reaction rate?",
        back: "**Nothing!** ΔG⊖ measures thermodynamic feasibility (position of equilibrium), whereas reaction rate depends on **activation energy (E_a)** (kinetics).",
        level: "HL",
      },
    ],
    mustKnow: [
      "q = mcΔT (c = 4.18 J g⁻¹ K⁻¹ for water) and ΔH = −q / n_limiting (convert J → kJ!).",
      "Cooling-curve back-extrapolation to t_mix gives a more accurate ΔT by correcting for heat loss during mixing.",
      "Hess's Law: enthalpy is a state function, so ΔH_r = ΣΔH_f(P) − ΣΔH_f(R) = ΣΔH_c(R) − ΣΔH_c(P).",
      "Bond enthalpies: ΔH ≈ Σ(bonds broken) − Σ(bonds formed), valid strictly for gaseous reactants and products.",
      "Specific energy (|ΔH_c|/M, per mass) vs Energy density (specific energy × ρ, per volume); fuel cells convert chemical energy directly into electricity.",
      "[HL] IB Lattice enthalpy is endothermic dissociation: MX(s) → M⁺(g) + X⁻(g), ΔH_lat⊖ > 0.",
      "[HL] Born–Haber cycle for MX₂ uses 1× E(X−X) (= 2× ΔH_at(X)), IE₁ + IE₂, and 2× EA₁(X).",
      "[HL] Solution enthalpy: ΔH_sol⊖ = ΔH_lat⊖ + ΣΔH_hyd⊖ (remember stoichiometry of hydrated ions).",
      "[HL] Entropy ΔS⊖ = ΣS⊖(products) − ΣS⊖(reactants) in J K⁻¹ mol⁻¹; S⊖(element) ≠ 0.",
      "[HL] Gibbs free energy ΔG⊖ = ΔH⊖ − TΔS⊖ (divide ΔS⊖ by 1000; T in K); ΔG < 0 spontaneous, ΔG = 0 equilibrium at T* = ΔH/ΔS.",
    ],
    misconceptions: [
      {
        wrong: "When burning ethanol under a beaker of water, plug the mass of ethanol burnt into q = mcΔT.",
        right: "Plug ONLY the mass of **water** (which undergoes ΔT) into q = mcΔT. Use the mass of ethanol only to find moles burnt: n = m_fuel / M.",
        level: "SL",
      },
      {
        wrong: "Bond breaking releases energy because ATP or fuels “store energy in bonds”.",
        right: "Breaking ANY chemical bond ALWAYS **absorbs energy** (endothermic). Reactions are exothermic only when **forming new stronger bonds** releases more energy than breaking the old bonds cost.",
        level: "SL",
      },
      {
        wrong: "ΔH_r from combustion data is ΣΔH_c(products) − ΣΔH_c(reactants), just like formation data.",
        right: "Combustion arrows point *down* to CO₂ + H₂O, reversing the cycle: **ΔH_r = ΣΔH_c(reactants) − ΣΔH_c(products)**.",
        level: "SL",
      },
      {
        wrong: "In a Born–Haber cycle for MgCl₂, multiply the Cl−Cl bond enthalpy by 2 because there are two Cl atoms.",
        right: "Breaking 1 mole of Cl−Cl bonds in Cl₂(g) ALREADY produces **2 moles of Cl(g) atoms** (`Cl₂ → 2Cl`). Multiply **ΔH_at⊖(Cl)** by 2, NOT E(Cl−Cl)!",
        level: "HL",
      },
      {
        wrong: "Standard entropy S⊖ of an element like O₂(g) or C(s) is 0 J K⁻¹ mol⁻¹.",
        right: "Only ΔH_f⊖ and ΔG_f⊖ are 0 for elements in their standard states. Absolute entropy S⊖ is **always positive** at 298 K (0 only for a perfect crystal at 0 K).",
        level: "HL",
      },
      {
        wrong: "In ΔG = ΔH − TΔS, substitute ΔS directly in J K⁻¹ mol⁻¹ and T in °C.",
        right: "That produces answers wrong by a factor of 1000! Always convert **ΔS to kJ K⁻¹ mol⁻¹ (÷ 1000)** and **T to Kelvin (+ 273)**.",
        level: "HL",
      },
      {
        wrong: "If ΔG⊖ = −500 kJ mol⁻¹, the reaction will explode immediately on mixing.",
        right: "ΔG⊖ predicts **thermodynamic spontaneity**, not speed. A high activation energy (E_a) can keep a very spontaneous reaction completely **kinetically stable**.",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting to add BOTH solution volumes (e.g. 50 cm³ acid + 50 cm³ alkali = 100 g total mass) in coffee-cup neutralisation calorimetry.",
      "Dividing q by the **excess** reactant moles instead of the **limiting** reactant moles (or forgetting the stoichiometric coefficient in the balanced equation).",
      "Omitting the **negative sign** on exothermic ΔH values or forgetting to convert q from J to kJ before dividing by n.",
      "Miscounting bonds in average bond enthalpy questions — especially forgetting that CO₂ has **2 × C=O** and that H₂O(l) vs H₂O(g) changes ΔH.",
      "[HL] Confusing the sign of lattice enthalpy: IB Data Booklet uses **endothermic dissociation (+)**, so moving *down* to the ionic solid subtracts ΔH_lat⊖.",
      "[HL] Forgetting to double EA₁(Cl) or ΔH_hyd⊖(Cl⁻) in CaCl₂ / MgCl₂ Born–Haber and solution cycles.",
      "[HL] Failing to divide ΔS⊖ (J K⁻¹ mol⁻¹) by 1000 when evaluating ΔG⊖ = ΔH⊖ − TΔS⊖ or T = ΔH / ΔS.",
      "[HL] Misreading the gradient of a ΔG vs T graph: gradient = **−ΔS**, NOT +ΔS (so a downward-sloping line means ΔS > 0!).",
    ],
    mnemonics: [
      {
        topic: "Bond Enthalpies",
        device: "B − F = Broken minus Formed (Be First!)",
        explanation: "Breaking bonds always comes first (endothermic, +) and Forming bonds is subtracted (exothermic, −): ΔH = ΣBroken − ΣFormed.",
        level: "SL",
      },
      {
        topic: "Exothermic vs Endothermic",
        device: "MEXO = Making bonds is EXO; BENDO = Breaking bonds is ENDO",
        explanation: "Instant anchor so you never flip the sign of bond breaking vs bond forming.",
        level: "SL",
      },
      {
        topic: "Formation vs Combustion Cycles",
        device: "Formation = Final − Initial (P − R); Combustion = C starts with Reactants (R − P)",
        explanation: "Formation arrows point up to products; combustion arrows point down to CO₂ + H₂O, flipping the subtraction.",
        level: "SL",
      },
      {
        topic: "Gibbs Free Energy Equation",
        device: "Good Honey Tastes Sweet (ΔG = ΔH − TΔS) — and Divide S by 1000!",
        explanation: "Locks the variable order and reminds you that ΔS is in Joules while ΔG and ΔH are in kilojoules.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Instant Cold Packs vs Hand Warmers",
        detail: "Sports cold packs dissolve NH₄NO₃(s) in water (ΔH_sol = +25.7 kJ mol⁻¹, endothermic yet spontaneous via ΔS > 0), while reusable hand warmers crystallise supersaturated sodium ethanoate (ΔH < 0, exothermic).",
        emoji: "🧊",
      },
      {
        title: "Hydrogen Fuel Cells in Zero-Emission Buses & Aviation",
        detail: "Hydrogen's huge specific energy (~142 kJ g⁻¹ vs ~46 kJ g⁻¹ for jet fuel) makes it prized for aerospace, while its low volumetric energy density demands cryogenic tanks or high-pressure 70 MPa cylinders.",
        emoji: "🚀",
      },
      {
        title: "Industrial Lime Kilns & Cement Decarbonisation",
        detail: "Calcining limestone (CaCO₃ → CaO + CO₂) has ΔH > 0 and ΔS > 0, so kilns must operate above its ~1110 K crossover temperature — making cement one of the hardest sectors to decarbonise.",
        emoji: "🏭",
      },
      {
        title: "Haber Process Thermodynamic Compromise",
        detail: "N₂ + 3H₂ ⇌ 2NH₃ has ΔH < 0 and ΔS < 0, so it is spontaneous only below ~465 K (192 °C) at standard pressure — yet industrial plants run at ~700 K with an iron catalyst and high pressure to achieve workable rates.",
        emoji: "🌾",
      },
      {
        title: "Flameless Ration Heaters (MREs)",
        detail: "Adding water to magnesium-iron alloy powder triggers Mg(s) + 2H₂O(l) → Mg(OH)₂(s) + H₂(g) (ΔH = −353 kJ mol⁻¹), boiling a meal pouch in minutes via galvanic-accelerated exothermic reaction.",
        emoji: "🍱",
      },
    ],
    videos: [
      {
        title: "IB Chemistry R1.1 Calorimetry & Measuring Enthalpy Changes",
        channel: "MSJChem / Richard Thornley (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R1.1+calorimetry+enthalpy+change",
      },
      {
        title: "IB Chemistry R1.2 Hess's Law & Bond Enthalpies Explained",
        channel: "MSJChem / Andrew Weng (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+R1.2+Hess+law+bond+enthalpy",
      },
      {
        title: "IB Chemistry HL Born–Haber Cycles & Enthalpy of Solution",
        channel: "MSJChem / Revision Village (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+Born+Haber+cycle+lattice+enthalpy+solution",
      },
      {
        title: "IB Chemistry HL R1.4 Entropy & Gibbs Free Energy (ΔG = ΔH − TΔS)",
        channel: "MSJChem / Richard Thornley (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Chemistry+HL+R1.4+entropy+Gibbs+free+energy",
      },
    ],
    formulas: [
      { name: "Heat energy transferred", formula: "{{q = m c ΔT}}", note: "c(water) = 4.18 J g⁻¹ K⁻¹; m is mass undergoing ΔT (in g)", level: "SL" },
      { name: "Molar enthalpy change", formula: "{{ΔH = -q / n}}", note: "Convert q from J to kJ (÷ 1000); n = limiting moles", level: "SL" },
      { name: "Hess's Law (formation)", formula: "{{ΔH_r = Σ ΔH_f(products) - Σ ΔH_f(reactants)}}", note: "ΔH_f⊖ = 0 for elements in standard states", level: "SL" },
      { name: "Hess's Law (combustion)", formula: "{{ΔH_r = Σ ΔH_c(reactants) - Σ ΔH_c(products)}}", note: "Arrows point down to CO₂(g) + H₂O(l)", level: "SL" },
      { name: "Average bond enthalpy", formula: "{{ΔH ≈ Σ E(bonds broken) - Σ E(bonds formed)}}", note: "Valid only when all reactants and products are gases", level: "SL" },
      { name: "Specific energy of fuel", formula: "{{Specific energy = |ΔH_c| / M}}", note: "Units: kJ g⁻¹ or MJ kg⁻¹ (energy per mass)", level: "SL" },
      { name: "Energy density of fuel", formula: "{{Energy density = Specific energy * ρ}}", note: "Units: kJ cm⁻³ or kJ dm⁻³ (energy per volume)", level: "SL" },
      { name: "Born–Haber cycle (MX)", formula: "{{ΔH_f = ΔH_at(M) + ΔH_at(X) + IE_1(M) + EA_1(X) - ΔH_lat(MX)}}", note: "IB Data Booklet convention: ΔH_lat⊖ > 0 (endothermic dissociation)", level: "HL" },
      { name: "Enthalpy of solution", formula: "{{ΔH_sol = ΔH_lat + Σ ΔH_hyd}}", note: "Multiply ΔH_hyd by stoichiometric count of each ion", level: "HL" },
      { name: "Standard entropy change", formula: "{{ΔS = Σ S(products) - Σ S(reactants)}}", note: "Units: J K⁻¹ mol⁻¹; S⊖(element) > 0 at 298 K", level: "HL" },
      { name: "Gibbs free energy change", formula: "{{ΔG = ΔH - T ΔS}}", note: "Divide ΔS by 1000 (J → kJ); T in Kelvin; ΔG < 0 spontaneous", level: "HL" },
      { name: "Crossover temperature", formula: "{{T = ΔH / ΔS}}", note: "Temperature where ΔG = 0 (convert both to kJ or both to J!)", level: "HL" },
    ],
  },
};
