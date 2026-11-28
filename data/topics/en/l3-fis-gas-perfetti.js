TOPIC('en', {
  id: "l3-fis-gas-perfetti",
  title: "Gases and kinetic theory",
  intro: "Why does tyre pressure go up in summer? Why is a syringe with its end blocked so hard to push in? Why does a balloon left in the fridge go limp? Gases behave much more simply than solids and liquids: <b>three quantities</b>, pressure, volume and temperature, and a single equation, <b>pV = nRT</b>, are enough to describe them. In this lesson we discover the <b>gas laws</b>, the <b>ideal gas</b> model and <b>kinetic theory</b>, which explains pressure and temperature through the random motion of molecules.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "The state of a gas: p, V, T",
      html: `<p>The <b>state</b> of a given quantity of gas is described by three <b>state variables</b>:</p>
<ul>
<li><b>pressure p</b>: the force per unit area that the gas exerts on the walls (Pa = N/m²; the atmosphere, 1 atm = 101 325 Pa, and the bar, 1 bar = 10⁵ Pa, are also used);</li>
<li><b>volume V</b>: the space occupied, equal to the volume of the container (m³; 1 L = 10⁻³ m³);</li>
<li><b>temperature T</b>: in formulas it must always be expressed in <b>kelvin</b>, the absolute scale: <b>T(K) = t(°C) + 273.15</b>.</li>
</ul>
<p>The Kelvin scale (William Thomson, later Lord Kelvin, 1848) starts from <b>absolute zero</b>, −273.15 °C, the lowest possible temperature, where thermal agitation is at a minimum. This is why degrees Celsius cannot be used in the gas laws: 20 °C is not "twice" 10 °C, and in fact 293 K is only a little more than 283 K.</p>
<p>The quantity of gas is measured in <b>moles</b> (n): one mole contains <b>N<sub>A</sub> = 6.022·10²³</b> particles (the Avogadro constant). One mole of any gas, at 0 °C and 1 atm (standard conditions), occupies about <b>22.4 litres</b> (molar volume).</p>`
    },
    {
      type: "text",
      title: "The gas laws",
      html: `<p>Three experimental laws describe how two variables change when the third is kept constant (for a fixed quantity of gas):</p>
<ol>
<li><b>Boyle's law (isothermal process, constant T)</b>, 1662 (Robert Boyle; independently Edme Mariotte in 1676): <b>p · V = constant</b>. If the volume is halved, the pressure doubles: p and V are <b>inversely proportional</b> (graph: hyperbola).</li>
<li><b>Gay-Lussac's first law (isobaric, constant p)</b>, 1802, also known as Charles's law: <b>V / T = constant</b>, with T in kelvin. Volume is <b>directly proportional</b> to absolute temperature (a straight line through the origin).</li>
<li><b>Gay-Lussac's second law (isochoric, constant V)</b>, the pressure law: <b>p / T = constant</b>. Pressure is proportional to absolute temperature.</li>
</ol>
<p>The three laws can be summed up in the <b>combined gas law</b> (for a fixed quantity of gas):</p>
<p style="text-align:center"><b>p<sub>1</sub>V<sub>1</sub> / T<sub>1</sub> = p<sub>2</sub>V<sub>2</sub> / T<sub>2</sub></b></p>
<p>Studying reactions between gases, Joseph Louis Gay-Lussac and Alexander von Humboldt also discovered that the volumes of reacting gases are in ratios of small whole numbers; to explain this, <b>Amedeo Avogadro</b> proposed in 1811 that <b>equal volumes of different gases, at the same temperature and pressure, contain the same number of molecules</b>. His hypothesis, ignored for almost fifty years, was rediscovered by Stanislao Cannizzaro at the Karlsruhe Congress in 1860.</p>`
    },
    {
      type: "svg",
      title: "Graphs of the processes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<text x="100" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isothermal (p,V)</text>
<line x1="30" y1="250" x2="180" y2="250" stroke="#334155" stroke-width="3"/><line x1="30" y1="250" x2="30" y2="40" stroke="#334155" stroke-width="3"/>
<path d="M50 60 Q 70 190 170 235" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="105" y="278" font-size="14" fill="#334155" text-anchor="middle">V</text>
<text x="14" y="150" font-size="14" fill="#334155" text-anchor="middle">p</text>
<text x="100" y="120" font-size="14" fill="#991b1b">p·V = const</text>
<text x="300" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isobaric (V,T)</text>
<line x1="230" y1="250" x2="380" y2="250" stroke="#334155" stroke-width="3"/><line x1="230" y1="250" x2="230" y2="40" stroke="#334155" stroke-width="3"/>
<line x1="230" y1="250" x2="370" y2="70" stroke="#2563eb" stroke-width="4"/>
<text x="305" y="278" font-size="14" fill="#334155" text-anchor="middle">T (K)</text>
<text x="214" y="150" font-size="14" fill="#334155" text-anchor="middle">V</text>
<text x="290" y="160" font-size="14" fill="#1e3a8a">V/T = const</text>
<text x="500" y="22" font-size="15" fill="#0f172a" text-anchor="middle" font-weight="bold">Isochoric (p,T)</text>
<line x1="430" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="3"/><line x1="430" y1="250" x2="430" y2="40" stroke="#334155" stroke-width="3"/>
<line x1="430" y1="250" x2="570" y2="70" stroke="#16a34a" stroke-width="4"/>
<text x="505" y="278" font-size="14" fill="#334155" text-anchor="middle">T (K)</text>
<text x="414" y="150" font-size="14" fill="#334155" text-anchor="middle">p</text>
<text x="490" y="160" font-size="14" fill="#166534">p/T = const</text>
</g>
</svg>`,
      caption: "Isothermal: a hyperbola. Isobaric and isochoric: straight lines through the origin if the temperature is in kelvin."
    },
    {
      type: "example",
      title: "Syringe, tyre and cylinder",
      html: `<p><b>Syringe (Boyle).</b> A syringe with its end blocked contains 20 mL of air at 1.0 atm. Pushing the plunger in to 5 mL (at constant temperature): p<sub>2</sub> = p<sub>1</sub>V<sub>1</sub>/V<sub>2</sub> = 1.0 × 20/5 = <b>4.0 atm</b>.</p>
<p><b>Tyre (Gay-Lussac, V almost constant).</b> A tyre at 20 °C (293 K) is at 2.00 bar. After a long drive it warms up to 50 °C (323 K): p<sub>2</sub> = 2.00 × 323/293 ≈ <b>2.20 bar</b>. This is why tyre pressure should be checked "cold".</p>
<p><b>A balloon in the freezer (Gay-Lussac).</b> A 3.0 L balloon at 27 °C (300 K) put in a freezer at −23 °C (250 K) shrinks to V<sub>2</sub> = 3.0 × 250/300 = <b>2.5 L</b>. It inflates again when it returns to room temperature.</p>
<p><b>Combined gas law.</b> An air bubble rises from a depth of 40 m (p = 5 atm, 4 °C = 277 K) to the surface (1 atm, 20 °C = 293 K), with an initial volume of 1.0 cm³: V<sub>2</sub> = 1.0 × 5 × 293/(1 × 277) ≈ <b>5.3 cm³</b>. This is why divers must breathe out as they come up: their lungs would expand and could be injured.</p>`
    },
    {
      type: "quiz",
      title: "Check: the gas laws",
      questions: [
        { type: "num", q: "A gas at 2 atm occupies 6 L. At constant temperature it is compressed to 3 L. What will the pressure be?", answer: 4, tol: 0, unit: "atm", explain: "p·V = constant: 2 × 6 = p × 3 ⟹ p = 4 atm." },
        { type: "num", q: "What is 27 °C in kelvin?", answer: 300, tol: 0.2, unit: "K", explain: "T = 27 + 273.15 ≈ 300 K." },
        { type: "mc", q: "In a closed rigid container the absolute temperature doubles. What happens to the pressure?", options: ["It doubles", "It halves", "It stays the same", "It quadruples"], answer: 0, explain: "Gay-Lussac's second law: p/T is constant at constant V." }
      ]
    },
    {
      type: "text",
      title: "The ideal gas and the equation of state",
      html: `<p>An <b>ideal gas</b> (or perfect gas) is a model: a collection of point-like molecules, <b>with no interactions</b> between them except in elastic collisions, occupying a negligible volume compared with the container. Real gases (air, nitrogen, helium…) behave like this to a very good approximation when they are <b>rarefied</b> (low pressure) and far from the temperature at which they liquefy.</p>
<p>Combining the laws of Boyle, Gay-Lussac and Avogadro gives the <b>ideal gas equation of state</b>:</p>
<p style="text-align:center"><b>p · V = n · R · T</b></p>
<p>with <b>R = 8.314 J/(mol·K)</b>, the universal gas constant. Writing the number of molecules as N = n·N<sub>A</sub> gives the equivalent form <b>p·V = N·k<sub>B</sub>·T</b>, where <b>k<sub>B</sub> = R/N<sub>A</sub> = 1.381·10⁻²³ J/K</b> is the <b>Boltzmann constant</b>.</p>
<p>The three laws are special cases: if n and T are constant, p·V = constant; if n and p are constant, V/T = constant; if n and V are constant, p/T = constant. The equation also gives back the molar volume: V = nRT/p = 1 × 8.314 × 273.15/101 325 = 0.0224 m³ = <b>22.4 L</b> ✓.</p>
<p><b>Example.</b> How many moles are there in a 10 L cylinder at 2.0·10⁵ Pa and 27 °C? n = pV/(RT) = (2.0·10⁵ × 0.010)/(8.314 × 300) = 2000/2494 ≈ <b>0.80 mol</b> (about 4.8·10²³ molecules).</p>`
    },
    {
      type: "widget",
      title: "Which quantity stays constant?",
      widget: "match",
      options: { pairs: [
        ["Isothermal", "T constant: p·V = const"],
        ["Isobaric", "p constant: V/T = const"],
        ["Isochoric", "V constant: p/T = const"],
        ["Combined gas law", "pV/T = const"]
      ] },
      caption: "Match the name of the process to the quantity that stays constant."
    },
    {
      type: "text",
      title: "The kinetic theory of gases",
      html: `<p>Why does a gas exert pressure? Because it is made of molecules in rapid random motion that hit the walls. <b>Kinetic theory</b> (Bernoulli, 1738; then Clausius, Maxwell and Boltzmann in the nineteenth century) explains macroscopic properties starting from the average behaviour of the molecules.</p>
<p>We assume: molecules of mass m, point-like, in random motion, with elastic collisions with the walls and with each other, and no other interactions. From the momentum transferred to the walls in the collisions we get the <b>pressure of the gas</b>:</p>
<p style="text-align:center"><b>p = (1/3) · (N/V) · m · ⟨v²⟩</b></p>
<p>where ⟨v²⟩ is the mean of the square of the speed of the molecules. Since the mean kinetic energy of a molecule is <b>⟨K⟩ = ½·m·⟨v²⟩</b>, it follows that p·V = (2/3)·N·⟨K⟩. Comparing with p·V = N·k<sub>B</sub>·T gives the fundamental result:</p>
<p style="text-align:center"><b>⟨K⟩ = (3/2) · k<sub>B</sub> · T</b></p>
<p><b>Absolute temperature is a measure of the mean kinetic energy of the molecules</b>: the higher the temperature, the faster the molecules move on average. And it does not depend on the type of gas: at a given T, all molecules have the same mean kinetic energy (the lighter ones are faster).</p>
<p>The <b>root mean square (rms) speed</b> is <b>v<sub>rms</sub> = √⟨v²⟩ = √(3·k<sub>B</sub>·T/m) = √(3RT/M)</b> (M = molar mass in kg/mol).</p>
<table>
<tr><th>Gas (at 300 K)</th><th>M (g/mol)</th><th>v<sub>rms</sub> (m/s)</th></tr>
<tr><td>Hydrogen H₂</td><td>2</td><td>≈ 1930</td></tr>
<tr><td>Helium He</td><td>4</td><td>≈ 1370</td></tr>
<tr><td>Nitrogen N₂</td><td>28</td><td>≈ 517</td></tr>
<tr><td>Oxygen O₂</td><td>32</td><td>≈ 483</td></tr>
<tr><td>Carbon dioxide CO₂</td><td>44</td><td>≈ 412</td></tr>
</table>
<p>The molecules of air travel at about 500 m/s (sound, at 340 m/s, is slower because it is a collective disturbance), but they collide billions of times a second and travel only about 70 nm between one collision and the next (the mean free path): this is why a perfume takes tens of seconds to spread through a room rather than an instant.</p>`
    },
    {
      type: "example",
      title: "How much energy does a molecule have?",
      html: `<p>At 300 K the mean (translational) kinetic energy of a molecule is ⟨K⟩ = (3/2) × 1.381·10⁻²³ × 300 = <b>6.2·10⁻²¹ J</b>: tiny, but there are an enormous number of molecules. A mole contains N<sub>A</sub> molecules: the total energy is U = (3/2)·n·R·T = 1.5 × 1 × 8.314 × 300 ≈ <b>3.7 kJ</b>.</p>
<p>To double the rms speed you have to <b>quadruple the absolute temperature</b> (v ∝ √T): from 300 K to 1200 K. Why does helium escape from the Earth's atmosphere while nitrogen does not? Because at the same T light molecules are much faster, and a small fraction of He molecules reaches the escape velocity (11.2 km/s). The Moon, with an escape velocity of 2.4 km/s, cannot hold on even to heavy gases.</p>`
    },
    {
      type: "svg",
      title: "Molecules in a container",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<defs>
<marker id="gpA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
</defs>
<g font-family="sans-serif">
<rect x="50" y="40" width="240" height="200" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<g fill="#2563eb">
<circle cx="90" cy="80" r="8"/><circle cx="140" cy="140" r="8"/><circle cx="200" cy="90" r="8"/><circle cx="250" cy="180" r="8"/><circle cx="110" cy="200" r="8"/><circle cx="180" cy="210" r="8"/><circle cx="240" cy="70" r="8"/>
</g>
<line x1="90" y1="80" x2="60" y2="60" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<line x1="250" y1="180" x2="280" y2="190" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<line x1="140" y1="140" x2="175" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#gpA)"/>
<text x="170" y="270" font-size="15" fill="#0f172a" text-anchor="middle">low T: slow molecules</text>
<rect x="330" y="40" width="240" height="200" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<g fill="#ea580c">
<circle cx="370" cy="80" r="8"/><circle cx="420" cy="140" r="8"/><circle cx="480" cy="90" r="8"/><circle cx="530" cy="180" r="8"/><circle cx="390" cy="200" r="8"/><circle cx="460" cy="210" r="8"/><circle cx="520" cy="70" r="8"/>
</g>
<line x1="370" y1="80" x2="338" y2="48" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<line x1="530" y1="180" x2="565" y2="200" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<line x1="420" y1="140" x2="490" y2="105" stroke="#dc2626" stroke-width="5" marker-end="url(#gpA)"/>
<text x="450" y="270" font-size="15" fill="#0f172a" text-anchor="middle">high T: fast molecules, more collisions</text>
</g>
</svg>`,
      caption: "The long arrows show faster molecules: collisions with the walls are more frequent and harder, so the pressure increases."
    },
    {
      type: "quiz",
      title: "Check: equation of state and kinetic theory",
      questions: [
        { type: "num", q: "How many moles of gas are there in 5 L at 1·10⁵ Pa and 300 K? (R = 8.31 J/mol·K)", answer: 0.2, tol: 0.01, unit: "mol", explain: "n = pV/(RT) = 10⁵ × 0.005/(8.31 × 300) ≈ 0.20 mol." },
        { type: "mc", q: "If the absolute temperature of an ideal gas quadruples, the rms speed of the molecules:", options: ["quadruples", "doubles", "stays the same", "halves"], answer: 1, explain: "v ∝ √T: √4 = 2." },
        { type: "tf", q: "At the same temperature, hydrogen molecules have a greater mean kinetic energy than nitrogen molecules.", answer: false, explain: "⟨K⟩ = (3/2)k_B·T depends only on T: H₂ molecules are faster, but they have the same mean kinetic energy." }
      ]
    },
    {
      type: "text",
      title: "Internal energy of an ideal gas",
      html: `<p>The <b>internal energy U</b> is the sum of the energies of the molecules. In a monatomic ideal gas (He, Ne, Ar) the molecules have only translational kinetic energy:</p>
<p style="text-align:center"><b>U = N · (3/2)·k<sub>B</sub>·T = (3/2) · n · R · T</b></p>
<p>The internal energy of an ideal gas <b>depends only on temperature</b> (not on p or V separately), because there are no forces between the molecules and therefore no potential energy. For diatomic gases (N₂, O₂) at room temperature, 2 rotations are added to the 3 translations and U = (5/2)·n·R·T. This result underlies the first law of thermodynamics, which we will study in the next lesson.</p>
<p>The number of independent ways in which a molecule can store energy is called the <b>number of degrees of freedom</b> f: U = (f/2)·n·R·T (Boltzmann's <b>equipartition theorem</b>): f = 3 for a monatomic gas, f = 5 for a diatomic gas at room temperature.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand gases",
      intro: "Behind the formulas there is a very simple picture: lots of little balls in motion.",
      tabs: [
        {
          label: "🏀 A room full of balls",
          html: "<p>Imagine a room full of ping-pong balls bouncing everywhere. <b>Pressure</b> = the number and violence of the collisions with the walls. If you <b>make the room smaller</b> (reduce V), the balls hit the walls more often: p increases (Boyle). If you <b>increase the speed</b> of the balls (higher T), the collisions are more frequent and harder: p goes up (Gay-Lussac). If you <b>add more balls</b> (larger n), there is more pressure. The equation pV = nRT sums all this up.</p>"
        },
        {
          label: "🧪 The bottle in the freezer",
          html: "<p>Experiment: screw the cap on an empty plastic bottle (full of air) at room temperature and put it in the freezer. After a while the bottle <b>gets squashed</b>: the air has cooled, the molecules are slower, the pressure inside has dropped and the atmospheric pressure outside has crushed the bottle. Bring it back into the warm and it returns to normal. It is Gay-Lussac's law, and you can see it with your own eyes!</p>"
        },
        {
          label: "🎬 From Celsius to kelvin",
          html: "<p>Convert from degrees Celsius to kelvin and compare the three most important temperatures: melting point of ice (0 °C = 273.15 K), room temperature (20 °C ≈ 293 K), boiling point of water (100 °C = 373.15 K). The \"zero point\" of the kelvin scale is absolute zero, at −273.15 °C: no temperature can be lower, because the mean kinetic energy cannot be negative.</p>",
          widget: "timeline",
          options: { unit: "K", events: [
            { year: 0, label: "Absolute zero", icon: "🧊" },
            { year: 77, label: "Liquid nitrogen", icon: "💧" },
            { year: 273, label: "Ice melts", icon: "❄️" },
            { year: 293, label: "Room temperature", icon: "🏠" },
            { year: 373, label: "Water boils", icon: "♨️" }
          ] }
        },
        {
          label: "🔗 Match the quantities",
          html: "<p>Match each quantity to its value or meaning.</p>",
          widget: "match",
          options: { pairs: [
            ["R", "8.314 J/(mol·K)"],
            ["k_B", "1.381·10⁻²³ J/K"],
            ["N_A", "6.022·10²³ mol⁻¹"],
            ["Molar volume (0 °C, 1 atm)", "22.4 L"],
            ["Mean kinetic energy", "(3/2)·k_B·T"]
          ] }
        }
      ]
    },
    {
      type: "curiosity",
      title: "Absolute zero cannot be reached (but you can get close)",
      html: `<p>The third law of thermodynamics states that absolute zero cannot be reached in a finite number of steps. Yet laboratories get very close: physicists have cooled gases of atoms to temperatures of <b>a few nanokelvin</b>, a few billionths of a kelvin above absolute zero, colder than any natural place in the universe (empty space is at 2.7 K, the temperature of the cosmic microwave background). In these ultracold gases spectacular states of matter appear, such as the <b>Bose–Einstein condensate</b>, first observed in 1995.</p>`
    },
    {
      type: "curiosity",
      title: "Brownian motion: seeing thermal agitation",
      html: `<p>In 1827 the botanist <b>Robert Brown</b> observed under the microscope that tiny particles from pollen grains in water moved in random jerks. In 1905 <b>Albert Einstein</b> explained that it is the continual impacts of water molecules, invisible but in thermal agitation, that push the particle first one way and then another. A few years later <b>Jean Perrin</b> confirmed the theory experimentally and obtained an estimate of the Avogadro constant, convincing even the sceptics that atoms really exist: for this Perrin was awarded the Nobel Prize in Physics in 1926.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of gases",
      nodes: [
        { id: "stato", label: "State variables p, V, T", x: 50, y: 8, color: "#2563eb", html: "Pressure, volume and absolute temperature describe the state of a gas.", why: "They are the macroscopic quantities that can be measured directly; the Kelvin scale (1848) makes T proportional to the energy of the molecules." },
        { id: "leggi", label: "Boyle's and Gay-Lussac's laws", x: 15, y: 42, color: "#16a34a", html: "Isothermal: pV = const; isobaric: V/T = const; isochoric: p/T = const.", why: "The result of experiments in the seventeenth and nineteenth centuries (Boyle 1662, Gay-Lussac 1802). They hold for all rarefied gases, whatever their chemical nature." },
        { id: "eq", label: "pV = nRT", x: 55, y: 42, color: "#ef4444", html: "The ideal gas equation of state.", why: "It is obtained by combining the experimental laws with Avogadro's hypothesis (1811) about the number of molecules in a given volume. The synthesis was made by Clapeyron in 1834." },
        { id: "cinetica", label: "Kinetic theory", x: 88, y: 42, color: "#f59e0b", html: "Pressure and temperature come from the collisions and energy of the molecules: ⟨K⟩ = (3/2)k_B T.", why: "Bernoulli (1738), Clausius, Maxwell and Boltzmann (nineteenth century) derived the macroscopic laws from the motion of molecules, strengthening the atomic hypothesis." },
        { id: "interna", label: "Internal energy U", x: 30, y: 82, color: "#8b5cf6", html: "For a monatomic gas U = (3/2)nRT: it depends only on T.", why: "In an ideal gas there are no forces between molecules, so no potential energy. For diatomic gases rotations count too (equipartition)." },
        { id: "reale", label: "Real gases", x: 75, y: 82, color: "#64748b", html: "At high pressures or low temperatures the interactions and the volume of the molecules matter: the ideal model fails.", why: "Van der Waals (1873) corrected the equation to include molecular volume and attractions, also predicting the liquefaction of gases (Nobel Prize 1910)." }
      ],
      edges: [["stato", "leggi", "linked by"], ["leggi", "eq", "summed up in"], ["eq", "cinetica", "explained by"], ["cinetica", "interna", "implies"], ["eq", "reale", "limiting model of"]]
    }
  ],
  glossary: [
    { t: "Ideal gas", d: "A model of a gas with point-like molecules and no interactions, which obeys pV = nRT." },
    { t: "Kelvin (K)", d: "The unit of absolute temperature: T(K) = t(°C) + 273.15." },
    { t: "Absolute zero", d: "0 K = −273.15 °C: the lowest temperature theoretically possible." },
    { t: "Mole", d: "The amount of substance containing N_A = 6.022·10²³ particles." },
    { t: "Gas constant R", d: "R = 8.314 J/(mol·K), in the law pV = nRT." },
    { t: "Boltzmann constant", d: "k_B = R/N_A = 1.381·10⁻²³ J/K: links temperature and molecular energy." },
    { t: "Isothermal / isobaric / isochoric", d: "Processes at constant temperature / pressure / volume." },
    { t: "Root mean square speed", d: "v_rms = √(3k_B T/m): a typical measure of the speed of molecules." },
    { t: "Internal energy", d: "The sum of the energies of the molecules in the system." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "What is a temperature of 127 °C in kelvin?", answer: 400, tol: 0.2, unit: "K", explain: "T = 127 + 273.15 ≈ 400 K." },
      { type: "num", q: "A gas at 1 atm occupies 12 L. At constant temperature it expands to 36 L. What will the pressure be?", answer: 0.333, tol: 0.005, unit: "atm", explain: "p = 1 × 12/36 = 1/3 atm ≈ 0.33 atm." },
      { type: "num", q: "A gas occupies 2.0 L at 300 K and constant pressure. What volume does it reach when heated to 450 K?", answer: 3, tol: 0.01, unit: "L", explain: "V2 = V1·T2/T1 = 2 × 450/300 = 3.0 L." },
      { type: "tf", q: "In the gas laws temperature can be used in degrees Celsius.", answer: false, explain: "You must use absolute temperature in kelvin, otherwise the ratios are wrong." },
      { type: "num", q: "Calculate the pressure of 0.50 mol of ideal gas in 10 L at 300 K. Use R = 8.31 J/mol·K.", answer: 124650, tol: 300, unit: "Pa", explain: "p = nRT/V = 0.50 × 8.31 × 300/0.010 ≈ 1.25·10⁵ Pa." },
      { type: "mc", q: "What does absolute temperature measure in an ideal gas?", options: ["The mass of the molecules", "The mean kinetic energy of the molecules", "The number of molecules", "The molecular volume"], answer: 1, explain: "⟨K⟩ = (3/2)·k_B·T." },
      { type: "mc", q: "If the absolute temperature of a gas quadruples, the rms speed of its molecules:", options: ["quadruples", "doubles", "stays the same", "becomes 16 times larger"], answer: 1, explain: "v_rms ∝ √T." },
      { type: "tf", q: "A monatomic ideal gas has internal energy U = (3/2)nRT.", answer: true, explain: "Only translational kinetic energy: three degrees of freedom." },
      { type: "mc", q: "Why does the pressure in a tyre increase after a long journey?", options: ["The air is compressed", "The air warms up and the molecules hit the walls more", "The air cools down", "The mass of air increases"], answer: 1, explain: "At almost constant volume p/T is constant: higher T, higher p." },
      { type: "order", q: "Put in increasing order of rms speed at 300 K.", items: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium", "Hydrogen"], explain: "At the same T, v ∝ 1/√M: CO₂ (412 m/s) < O₂ (483) < N₂ (517) < He (1370) < H₂ (1930)." }
    ]
  }
});
