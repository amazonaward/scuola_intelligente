TOPIC('en', {
  id: "l2-fis-temperatura-calore",
  title: "Temperature and heat",
  intro: "\"It's so hot!\", \"this iron is boiling hot\", \"the coffee has gone cold\": we use the words <b>temperature</b> and <b>heat</b> every day, often as if they meant the same thing. In physics they are two distinct concepts, and telling them apart is the first step to understanding why the sea warms up more slowly than the sand in summer, how a vacuum flask works, why railway tracks have joints and why sweating cools us down. In this lesson we connect macroscopic quantities (temperature, heat) to the invisible motion of atoms and molecules.",
  minutes: 55,
  sections: [
    {
      type: "text",
      title: "Temperature and its scales",
      html: `<p><b>Temperature</b> measures how "hot" or "cold" a body is, but our sense of touch is deceptive (a metal door handle feels colder than wood at the same temperature, because it conducts heat better). At the microscopic level, temperature is linked to the <b>average kinetic energy</b> of the particles (atoms and molecules) that make up the body, which are always in random thermal motion: the more agitated they are, the hotter the body.</p>
<p>It is measured with <b>thermometers</b>, which use a property that changes with temperature: the expansion of a liquid (mercury, coloured alcohol), electrical resistance, emitted infrared radiation. The main scales:</p>
<table>
<tr><th>Scale</th><th>Reference points</th><th>Conversions</th></tr>
<tr><td><b>Celsius (°C)</b></td><td>0 °C melting ice, 100 °C boiling water (at a pressure of 1 atm)</td><td>T(K) = T(°C) + 273.15</td></tr>
<tr><td><b>Kelvin (K)</b></td><td>0 K = absolute zero (−273.15 °C)</td><td>SI unit; ΔT in K and in °C are the same</td></tr>
<tr><td><b>Fahrenheit (°F)</b></td><td>32 °F melting ice, 212 °F boiling water</td><td>T(°F) = 1.8 · T(°C) + 32</td></tr>
</table>
<p>The Celsius scale is named after Anders Celsius (1742); the absolute scale was proposed by William Thomson, Lord Kelvin, in the mid-19th century. <b>Absolute zero</b> is the lowest conceivable temperature, at which thermal motion would be at a minimum; it cannot actually be reached (third law of thermodynamics). That is why the Kelvin scale has no negative values.</p>`
    },
    {
      type: "example",
      title: "Converting temperatures",
      html: `<p>Body temperature: 37 °C = 310.15 K = 1.8 · 37 + 32 = <b>98.6 °F</b>. Water at 20 °C = 293.15 K. A day at 77 °F is (77 − 32)/1.8 = <b>25 °C</b>. Liquid nitrogen boils at −196 °C, i.e. about 77 K. A difference of 10 °C is a difference of 10 K, but of 18 °F.</p>`
    },
    {
      type: "text",
      title: "Thermal expansion",
      html: `<p>When a body is heated, the motion of its particles increases and on average they move slightly further apart: the body <b>expands</b>. For small changes in temperature:</p>
<ul>
<li><b>linear expansion</b> (bars, wires): <b>ΔL = λ · L₀ · ΔT</b>, with λ the coefficient of linear expansion (K⁻¹). Typical values: steel ≈ 12·10⁻⁶ K⁻¹, aluminium ≈ 23·10⁻⁶ K⁻¹, ordinary glass ≈ 9·10⁻⁶ K⁻¹;</li>
<li><b>volume expansion</b>: ΔV = β · V₀ · ΔT; for isotropic solids β ≈ 3λ. Liquids expand more than solids, and gases even more.</li>
</ul>
<p>Practical consequences: expansion joints in bridges and railway tracks, power lines left slightly slack in summer, floors with gaps between tiles. Bimetallic strips (two metals with different λ bonded together) bend as T changes and control many thermostats.</p>
<p><b>An important exception: water.</b> Between 0 °C and 4 °C water <i>contracts</i> as it warms up: its density is greatest at about 4 °C. That is why ice floats and in winter lakes freeze from the surface down, leaving liquid water (at 4 °C) at the bottom, where life survives.</p>`
    },
    {
      type: "example",
      title: "The rail and the bridge",
      html: `<p>A 100 m steel rail goes from −10 °C in winter to +30 °C in summer: ΔT = 40 K. ΔL = 12·10⁻⁶ · 100 · 40 = 0.048 m = <b>4.8 cm</b>. If the tracks had no joints or were not welded using pre-tensioning techniques, they would buckle in summer (so-called "sun kinks"). A 500 m aluminium bridge would lengthen by 23·10⁻⁶ · 500 · 40 = 0.46 m for the same temperature jump.</p>`
    },
    {
      type: "curiosity",
      title: "The tower that grows in summer",
      html: `<p>The Eiffel Tower is about 330 m tall and made of iron: between winter and summer its height changes by a few centimetres (according to estimates, about 15 cm between the extreme values). Pyrex is famous precisely for its low coefficient of expansion, which means it does not break when it goes from the fridge to the oven: ordinary glass, heated unevenly, expands non-uniformly and cracks.</p>`
    },
    {
      type: "quiz",
      title: "Check: temperature and expansion",
      questions: [
        { type: "num", q: "Convert 27 °C into kelvin (use 273).", answer: 300, tol: 0.5, unit: "K", explain: "T(K) = 27 + 273 = 300 K." },
        { type: "tf", q: "A temperature of −300 °C is physically possible.", answer: false, explain: "Absolute zero is −273.15 °C: there are no lower temperatures." },
        { type: "num", q: "A 2 m bar with λ = 20·10⁻⁶ K⁻¹ is heated by 50 K. By how many millimetres does it lengthen?", answer: 2, tol: 0.05, unit: "mm", explain: "ΔL = 20·10⁻⁶ · 2 · 50 = 2·10⁻³ m = 2 mm." }
      ]
    },
    {
      type: "text",
      title: "What heat is",
      html: `<p><b>Heat</b> is not a "thing" contained in bodies: it is <b>energy in transit</b> that passes from a body at a higher temperature to one at a lower temperature. A body does not "have" heat: it has internal energy (the sum of the energies of its particles); heat Q is the amount of energy transferred because of a temperature difference. It is measured in <b>joules</b>, although the <b>calorie</b> is still used (1 cal = 4.186 J, the amount of heat that raises 1 g of water from 14.5 to 15.5 °C).</p>
<p>If we put two bodies at different temperatures in contact, heat flows from the hotter to the colder one until <b>thermal equilibrium</b> is reached: the same temperature (zeroth law of thermodynamics).</p>
<p><b>Heat capacity and specific heat capacity.</b> Heating different bodies by the same amount requires more or less energy. The relation is:</p>
<p style="text-align:center"><b>Q = m · c · ΔT</b></p>
<p>where <b>c</b> is the <b>specific heat capacity</b>, in J/(kg·K): the energy needed to raise the temperature of 1 kg of a substance by 1 K. Typical values: <b>water 4186</b>, ice ≈ 2100, aluminium ≈ 900, iron ≈ 450, copper ≈ 385, lead ≈ 130 J/(kg·K). Water has a very high specific heat capacity: it heats up and cools down slowly, and that is why the sea moderates the climate of coastal areas.</p>
<p><b>Latent heat.</b> During a change of state (melting, evaporation...) the temperature stays constant: the heat is used to break the bonds between particles. The relation is <b>Q = m · L</b>. For water: fusion <b>L = 3.34·10⁵ J/kg</b>, vaporisation <b>L = 2.26·10⁶ J/kg</b>.</p>`
    },
    {
      type: "svg",
      title: "Heating 1 kg of ice all the way to steam",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g font-family="sans-serif">
<line x1="60" y1="260" x2="610" y2="260" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="260" x2="60" y2="20" stroke="#475569" stroke-width="2"/>
<polyline points="60,230 140,200" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="140" y1="200" x2="260" y2="200" stroke="#dc2626" stroke-width="5"/>
<polyline points="260,200 340,120" fill="none" stroke="#2563eb" stroke-width="4"/>
<line x1="340" y1="120" x2="540" y2="120" stroke="#dc2626" stroke-width="5"/>
<polyline points="540,120 580,50" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="62" y="278" font-size="15" fill="#0f172a">Heat supplied Q →</text>
<text x="70" y="38" font-size="15" fill="#0f172a">T</text>
<text x="40" y="204" font-size="15" fill="#0f172a" text-anchor="end">0 °C</text>
<text x="40" y="124" font-size="15" fill="#0f172a" text-anchor="end">100 °C</text>
<text x="150" y="222" font-size="15" fill="#dc2626" font-weight="bold">melting</text>
<text x="395" y="140" font-size="15" fill="#dc2626" font-weight="bold">boiling</text>
<text x="85" y="250" font-size="14" fill="#0f172a">ice</text>
<text x="255" y="170" font-size="14" fill="#0f172a">water</text>
<text x="545" y="105" font-size="14" fill="#0f172a">steam</text>
</g>
</svg>`,
      caption: "In the horizontal stretches (red) the heat does not raise the temperature: it is used to change the state of matter."
    },
    {
      type: "example",
      title: "Water, ice and mixtures",
      html: `<p><b>Heating water.</b> To bring 1 kg of water from 20 °C to 100 °C: Q = 1 · 4186 · 80 ≈ <b>335 kJ</b>. To then evaporate all of it you need another Q = 1 · 2.26·10⁶ = 2260 kJ, almost seven times as much.</p>
<p><b>Thermal equilibrium.</b> You mix 200 g of water at 80 °C with 300 g of water at 20 °C. The heat given out by the hot water equals the heat absorbed by the cold water: 0.2 · c · (80 − T<sub>f</sub>) = 0.3 · c · (T<sub>f</sub> − 20), giving T<sub>f</sub> = (0.2·80 + 0.3·20)/0.5 = 22/0.5 = <b>44 °C</b>. The value of c cancels out because it is the same liquid.</p>
<p><b>Sweat.</b> Evaporating 1 g of sweat takes about 2.3 kJ from the body (L·m = 2.26·10⁶ · 0.001): it is our natural air conditioner.</p>`
    },
    {
      type: "text",
      title: "How heat travels",
      html: `<p>Heat passes from one body to another in three ways:</p>
<ul>
<li><b>Conduction</b>: in solids (and to some extent in all bodies) the agitation of particles is passed on from collision to collision, without the matter itself moving. Metals are excellent conductors (free electrons carry energy); wood, polystyrene and still air are insulators. The heat flow is proportional to the temperature difference and the cross-section, and inversely proportional to the thickness (Fourier's law);</li>
<li><b>Convection</b>: in fluids (liquids and gases) heat is carried by the movement of the matter itself. Hot fluid expands, becomes less dense and rises; cold fluid sinks: currents form. This is the principle behind radiators, sea breezes and the motion of the atmosphere;</li>
<li><b>Radiation</b>: heat is carried by <b>electromagnetic waves</b> (mainly infrared) and needs no matter. It is the only way the Sun's energy reaches us through the vacuum of space. Every body emits thermal radiation, which is more intense the hotter the body is.</li>
</ul>
<p>A <b>vacuum flask</b> uses all three principles: a double wall with a vacuum in between (no conduction or convection) and silvered surfaces that reflect radiation.</p>`
    },
    {
      type: "widget",
      title: "Conduction, convection or radiation?",
      widget: "classify",
      options: { groups: ["Conduction", "Convection", "Radiation"], items: [
        ["The handle of a spoon in the pan gets hot", 0],
        ["The Sun's heat reaches the Earth", 2],
        ["Water in a pan swirls around as it boils", 1],
        ["The heat of a campfire on your face from a distance", 2],
        ["The radiator warms the air in the room", 1],
        ["An iron frying pan heating up on the hob", 0]
      ] },
      caption: "Ask yourself whether it needs contact, movement of matter or no matter at all."
    },
    {
      type: "remember",
      title: "Formulas to remember",
      html: `<p><b>T(K) = T(°C) + 273.15</b> · <b>ΔL = λ·L₀·ΔT</b> · <b>Q = m·c·ΔT</b> · <b>Q = m·L</b> (changes of state, constant T) · at equilibrium: <b>Σ heat given out = Σ heat absorbed</b>.</p>
<p>Temperature = average agitation of the particles; heat = energy that flows because of a temperature difference. An ice cube and a bath of lukewarm water: the bath has a higher temperature but also an enormously greater internal energy.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "Temperature and heat are easy to confuse: here are three analogies.",
      tabs: [
        { label: "💧 The two tanks", html: "<p>Imagine two water tanks connected by a pipe: water flows from the higher level to the lower one until the levels are equal. The <b>level</b> is the temperature; the <b>amount of water flowing</b> is the heat. The big tank needs more water (heat) to change its level (temperature): this is the heat capacity m·c. And that is why the sea changes temperature much more slowly than a puddle.</p>" },
        { label: "🔬 The molecules", html: "<p>In the kinetic model a gas is a collection of particles moving randomly and colliding. If you heat the container, the particles get faster; the <b>absolute temperature is proportional to the average kinetic energy</b> (average Ek = 3/2 k_B T for an ideal gas). Heat is the exchange of energy that happens when fast particles hit the walls of a body with slow particles.</p>", scene: "molecule", options: { atoms: [ { x: 0, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O" }, { x: 0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" }, { x: -0.9, y: 0.6, z: 0, r: 0.3, color: "#e2e8f0", label: "H" } ], bonds: [[0, 1], [0, 2]] } },
        { label: "🧊 The ice cube in the cup", html: "<p>Put an ice cube (0 °C) in a cup of hot tea. The tea gives out heat, the cube absorbs it; but for quite a while the temperature of the ice does not rise: the energy is used for <b>melting</b> (latent heat), not for warming. Only when all the ice has turned to liquid does the temperature start to rise. That is why a drink with ice stays cool longer than one at 0 °C without ice.</p>" }
      ]
    },
    {
      type: "quiz",
      title: "Check: heat",
      questions: [
        { type: "num", q: "How much heat is needed to warm 2 kg of water by 10 K? (c = 4186 J/(kg·K))", answer: 83720, tol: 100, unit: "J", explain: "Q = 2 · 4186 · 10 = 83 720 J." },
        { type: "mc", q: "Why does the temperature stay at 0 °C while ice is melting?", options: ["Ice does not absorb heat", "The heat is used to break bonds, not to increase agitation", "The thermometer is faulty", "The heat is reflected"], answer: 1, explain: "Latent heat increases the potential energy of the particles, not their kinetic energy." },
        { type: "tf", q: "A vacuum insulates against conduction and convection but not against radiation.", answer: true, explain: "Conduction and convection need matter; radiation travels even through a vacuum." }
      ]
    },
    {
      type: "curiosity",
      title: "Why does coffee in a metal cup burn your lips?",
      html: `<p>A ceramic cup and an aluminium cup with the same coffee at 70 °C: the second burns your lips more and cools down faster. Metal conducts heat better, so it carries it quickly to your hand or the surroundings. In the same way, at −10 °C a woollen glove keeps heat in because the air trapped in the fibres is an excellent insulator. Another historical curiosity: before Joule, heat was thought of as an invisible fluid ("caloric"), an idea later abandoned when it was understood that heat could be produced endlessly by friction, as Benjamin Thompson (Count Rumford) had already noticed at the end of the 18th century while boring cannon barrels.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of temperature and heat",
      nodes: [
        { id: "temp", label: "Temperature", x: 15, y: 12, color: "#ef4444", html: "Measure of the average thermal agitation of particles (K, °C, °F).", why: "It is defined operationally by thermometers; kinetic theory (Maxwell, Boltzmann, second half of the 19th century) showed that it is proportional to the average kinetic energy of the molecules of a gas." },
        { id: "calore", label: "Heat", x: 50, y: 12, color: "#f59e0b", html: "Energy flowing from a hot body to a cold one.", why: "In the 1840s Joule demonstrated the mechanical equivalent of heat: dissipating mechanical work produces a fixed amount of heat. Heat is therefore a form of energy transfer, not a substance." },
        { id: "dil", label: "Expansion", x: 85, y: 12, color: "#2563eb", html: "ΔL = λL₀ΔT: bodies expand when heated.", why: "Atoms in a solid vibrate around equilibrium positions; since the force between atoms is not perfectly symmetrical, with more agitation the average distance increases. In water, hydrogen bonds cause the anomaly at 4 °C." },
        { id: "spec", label: "Specific heat capacity", x: 20, y: 52, color: "#16a34a", html: "Q = m·c·ΔT: how much energy is needed to heat something.", why: "Black (18th century) distinguished between quantity of heat and temperature by observing that equal masses of different substances need different amounts of heat to rise by 1 degree. Water has a high c because of its strong hydrogen bonds." },
        { id: "lat", label: "Latent heat", x: 52, y: 62, color: "#a855f7", html: "Q = m·L: the energy of changes of state.", why: "This too was discovered by Joseph Black (around 1760): when melting ice is heated its temperature does not rise; the heat is used to change state. It was crucial for Watt's steam engine." },
        { id: "prop", label: "Heat transfer", x: 85, y: 52, color: "#0ea5e9", html: "Conduction, convection, radiation.", why: "Fourier (1822) formulated the mathematical law of conduction; Stefan (1879) and Boltzmann (1884) that of black-body radiation, which paved the way for quantum physics with Planck (1900)." },
        { id: "eq", label: "Thermal equilibrium", x: 50, y: 90, color: "#64748b", html: "Bodies in contact reach the same temperature.", why: "It is the zeroth law of thermodynamics: if A and B are each in equilibrium with C, they are in equilibrium with each other. It underlies the very definition of temperature and how thermometers work." }
      ],
      edges: [["temp", "calore", "a difference in T drives"], ["calore", "spec", "quantified by"], ["calore", "lat", "in changes of state"], ["temp", "dil", "causes"], ["calore", "prop", "happens by"], ["calore", "eq", "leads to"]]
    }
  ],
  glossary: [
    { t: "Temperature", d: "Quantity linked to the average kinetic energy of the particles of a body." },
    { t: "Kelvin (K)", d: "SI unit of temperature; 0 K is absolute zero." },
    { t: "Thermal expansion", d: "Change in the size of a body as its temperature changes." },
    { t: "Heat", d: "Energy transferred from a body at a higher temperature to one at a lower temperature." },
    { t: "Specific heat capacity", d: "Energy needed to raise the temperature of 1 kg of a substance by 1 K." },
    { t: "Latent heat", d: "Energy per unit mass needed for a change of state at constant temperature." },
    { t: "Thermal equilibrium", d: "Situation in which bodies in contact have the same temperature." },
    { t: "Conduction, convection, radiation", d: "The three ways heat is transferred." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What Kelvin temperature corresponds to 0 °C (approximately)?", options: ["0 K", "100 K", "273 K", "373 K"], answer: 2, explain: "T(K) = T(°C) + 273.15." },
      { type: "num", q: "Convert 50 °F into degrees Celsius.", answer: 10, tol: 0.1, unit: "°C", explain: "T(°C) = (50 − 32)/1.8 = 10 °C." },
      { type: "num", q: "A 10 m steel bar (λ = 12·10⁻⁶ K⁻¹) is heated by 50 K. By how many millimetres does it lengthen?", answer: 6, tol: 0.1, unit: "mm", explain: "ΔL = 12·10⁻⁶ · 10 · 50 = 6·10⁻³ m = 6 mm." },
      { type: "tf", q: "At 4 °C liquid water has its maximum density.", answer: true, explain: "Between 0 and 4 °C water contracts as it warms up: that is why ice floats and lakes freeze from the top." },
      { type: "num", q: "How much heat is needed to warm 500 g of copper (c = 385 J/(kg·K)) by 40 K?", answer: 7700, tol: 10, unit: "J", explain: "Q = 0.5 · 385 · 40 = 7700 J." },
      { type: "num", q: "You mix 1 kg of water at 90 °C with 1 kg of water at 10 °C (no heat loss). What is the final temperature?", answer: 50, tol: 0.5, unit: "°C", explain: "Equal masses and the same c: the average of the temperatures, 50 °C." },
      { type: "num", q: "How much energy is needed to melt 2 kg of ice already at 0 °C (L = 3.34·10⁵ J/kg)?", answer: 668000, tol: 1000, unit: "J", explain: "Q = m·L = 2 · 3.34·10⁵ = 6.68·10⁵ J." },
      { type: "mc", q: "How does the Sun's energy reach the Earth?", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 2, explain: "In empty space energy travels only as electromagnetic waves." },
      { type: "tf", q: "Heat is a substance contained in hot bodies.", answer: false, explain: "It is energy in transit; what a body possesses is internal energy." },
      { type: "order", q: "Put in order of increasing specific heat capacity.", items: ["Lead", "Copper", "Aluminium", "Water"], explain: "Lead ≈ 130 < copper ≈ 385 < aluminium ≈ 900 < water 4186 J/(kg·K)." }
    ]
  }
});
