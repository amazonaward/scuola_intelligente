TOPIC('en', {
  id: "l1-sci-materia-miscugli",
  title: "Matter: substances and mixtures",
  intro: "Everything around us, from the air you breathe to the screen you are looking at, is <b>matter</b>: it has mass and takes up space. But not all matter is the same: tap water, the gold of a ring and the sand on the beach are very different things. In this lesson we learn how to classify it (<b>states of matter</b>, <b>pure substances</b> and <b>mixtures</b>) and how to separate what nature has mixed, as a chemistry lab does every day.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What is matter?",
      html: `<p><b>Matter</b> is anything that has <b>mass</b> and takes up a <b>volume</b>. Air, which we cannot see, is matter: an inflated ball weighs more than a flat one.</p>
<p>The physical properties of a body are divided into two families:</p>
<ul>
<li><b>extensive properties</b>: they depend on the amount of matter (mass, volume);</li>
<li><b>intensive properties</b>: they do not depend on the amount but are characteristic of the substance (density, melting point, boiling point, colour).</li>
</ul>
<p>A very useful intensive property is <b>density</b>: d = m / V. It is measured in g/cm³ (or kg/m³). Water at 4 °C has a density of 1.00 g/cm³; iron about 7.9 g/cm³; gold about 19.3 g/cm³. If two objects are made of the same material they have the same density, even if one is large and the other small.</p>
<p>Remember the difference between <b>mass</b> (the amount of matter, in kg, the same everywhere) and <b>weight</b> (the force with which gravity pulls the body, in newtons: on the Moon it is about 1/6 of that on Earth).</p>`
    },
    {
      type: "example",
      title: "Float or sink? Calculating density",
      html: `<p>A small cube of an unknown material has a mass of <b>54 g</b> and a volume of <b>20 cm³</b>. What is its density? Does it float in water?</p>
<ol>
<li>d = m / V = 54 g / 20 cm³ = <b>2.7 g/cm³</b> (this is the density of aluminium).</li>
<li>Water has a density of 1 g/cm³: a body with a higher density <b>sinks</b>, one with a lower density <b>floats</b>.</li>
<li>2.7 &gt; 1: the cube sinks.</li>
</ol>
<p>An iron ship floats because it is hollow: its <i>average</i> density (steel + air inside) is less than that of water.</p>`
    },
    {
      type: "text",
      title: "The three states of matter",
      html: `<p>Depending on temperature and pressure, the same substance can exist in three main states. To tell them apart we look at <b>shape</b> and <b>volume</b> and, at the microscopic level, at how the particles (atoms, molecules or ions) move.</p>
<table>
<tr><th>State</th><th>Shape</th><th>Volume</th><th>Particles</th></tr>
<tr><td><b>Solid</b></td><td>fixed</td><td>fixed</td><td>very close together, in fixed positions (they only vibrate); ordered in crystalline solids</td></tr>
<tr><td><b>Liquid</b></td><td>takes the shape of the container</td><td>fixed</td><td>close together but free to slide over one another</td></tr>
<tr><td><b>Gas</b> (gas or vapour)</td><td>takes the shape of the container</td><td>fills the container</td><td>far apart, moving quickly and randomly</td></tr>
</table>
<p>The <b>kinetic particle (kinetic-molecular) model</b> explains everything with two ideas: particles are always moving, and their <b>average kinetic energy</b> increases with temperature. A gas can be compressed because there is almost nothing but empty space between its particles; a liquid cannot, because its particles are already touching.</p>`
    },
    {
      type: "svg",
      title: "The particles in the three states",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<rect x="15" y="40" width="190" height="190" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="225" y="40" width="190" height="190" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<rect x="435" y="40" width="190" height="190" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<g fill="#0369a1">
<circle cx="45" cy="70" r="12"/><circle cx="75" cy="70" r="12"/><circle cx="105" cy="70" r="12"/><circle cx="135" cy="70" r="12"/><circle cx="165" cy="70" r="12"/>
<circle cx="45" cy="100" r="12"/><circle cx="75" cy="100" r="12"/><circle cx="105" cy="100" r="12"/><circle cx="135" cy="100" r="12"/><circle cx="165" cy="100" r="12"/>
<circle cx="45" cy="130" r="12"/><circle cx="75" cy="130" r="12"/><circle cx="105" cy="130" r="12"/><circle cx="135" cy="130" r="12"/><circle cx="165" cy="130" r="12"/>
<circle cx="45" cy="160" r="12"/><circle cx="75" cy="160" r="12"/><circle cx="105" cy="160" r="12"/><circle cx="135" cy="160" r="12"/><circle cx="165" cy="160" r="12"/>
<circle cx="45" cy="190" r="12"/><circle cx="75" cy="190" r="12"/><circle cx="105" cy="190" r="12"/><circle cx="135" cy="190" r="12"/><circle cx="165" cy="190" r="12"/>
</g>
<g fill="#15803d">
<circle cx="250" cy="170" r="12"/><circle cx="276" cy="196" r="12"/><circle cx="302" cy="170" r="12"/><circle cx="330" cy="200" r="12"/><circle cx="358" cy="178" r="12"/><circle cx="386" cy="200" r="12"/>
<circle cx="262" cy="144" r="12"/><circle cx="292" cy="120" r="12"/><circle cx="330" cy="150" r="12"/><circle cx="364" cy="128" r="12"/><circle cx="392" cy="152" r="12"/><circle cx="318" cy="118" r="12"/>
</g>
<g fill="#b45309">
<circle cx="470" cy="75" r="12"/><circle cx="560" cy="62" r="12"/><circle cx="600" cy="120" r="12"/><circle cx="520" cy="130" r="12"/><circle cx="465" cy="180" r="12"/><circle cx="585" cy="195" r="12"/><circle cx="530" cy="205" r="12"/>
</g>
<g stroke="#b45309" stroke-width="2"><line x1="470" y1="75" x2="500" y2="95"/><line x1="560" y1="62" x2="535" y2="45"/><line x1="585" y1="195" x2="560" y2="215"/></g>
<text x="110" y="30" font-size="20" text-anchor="middle" fill="#0c4a6e" font-weight="bold">SOLID</text>
<text x="320" y="30" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">LIQUID</text>
<text x="530" y="30" font-size="20" text-anchor="middle" fill="#78350f" font-weight="bold">GAS</text>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="#1f2937">ordered and close</text>
<text x="320" y="256" font-size="15" text-anchor="middle" fill="#1f2937">close but disordered</text>
<text x="530" y="256" font-size="15" text-anchor="middle" fill="#1f2937">far apart and fast</text>
<text x="320" y="287" font-size="15" text-anchor="middle" fill="#334155">The lines show the motion of the gas particles</text>
</svg>`,
      caption: "Same substance, three arrangements of particles: what changes is the distance between them and their freedom of movement."
    },
    {
      type: "curiosity",
      title: "The fourth state: plasma",
      html: `<p>Over 99% of the visible matter in the Universe is neither solid, nor liquid, nor gas: it is <b>plasma</b>, a gas so hot that its atoms lose electrons and become ions free to move. The Sun and the stars, lightning, the polar auroras and neon lamps are all plasma. There is even a fifth state, the <b>Bose–Einstein condensate</b>, observed in 1995 by cooling atoms to a few billionths of a degree above absolute zero.</p>`
    },
    {
      type: "text",
      title: "Pure substances and mixtures",
      html: `<p>A <b>pure substance</b> has a definite composition and constant intensive properties (for example a precise boiling point). It can be:</p>
<ul>
<li>an <b>element</b>: made of only one type of atom (oxygen O₂, iron Fe, gold Au);</li>
<li>a <b>compound</b>: made of atoms of different elements in a fixed ratio (water H₂O, table salt NaCl); it can only be broken down by chemical reactions.</li>
</ul>
<p>A <b>mixture</b> is made of two or more substances (the <b>components</b>) mixed together without reacting, in <b>variable</b> proportions. Each component keeps its own properties and can be separated by <b>physical</b> methods.</p>
<ul>
<li><b>Homogeneous</b> (<b>solution</b>): it has a single phase, uniform in appearance even under a light microscope. Examples: salt water, air, bronze (an alloy of copper and tin), vinegar.</li>
<li><b>Heterogeneous</b>: it has two or more distinguishable phases. Examples: water and sand (suspension), oil and water (an emulsion if shaken), granite, fog (liquid in gas), smoke (solid in gas).</li>
</ul>
<p>A <b>phase</b> is a portion of matter with uniform properties. Water with three ice cubes is a <b>two-phase</b> system even though it is a single substance: careful, phase and substance are not the same thing.</p>`
    },
    {
      type: "widget",
      title: "Classify the matter",
      widget: "classify",
      options: { groups: ["Pure substance", "Homogeneous mixture", "Heterogeneous mixture"], items: [
        ["24-carat gold", 0],
        ["Distilled water", 0],
        ["Clean air", 1],
        ["Water with dissolved sugar", 1],
        ["Water and sand", 2],
        ["Granite", 2],
        ["Oxygen", 0],
        ["Bronze", 1],
        ["Milk", 2],
        ["Oil and water", 2]
      ] },
      caption: "Milk looks uniform, but under the microscope it has droplets of fat suspended in water: it is an emulsion, so heterogeneous."
    },
    {
      type: "remember",
      title: "Pure substance or mixture? A practical test",
      html: `<p>During a change of state, a pure substance keeps a <b>constant temperature</b> (pure water boils at 100 °C at sea level and stays at 100 °C as long as there is liquid left). A mixture changes temperature during a change of state: salt water starts to boil a little above 100 °C and the temperature rises as the water evaporates and the solution becomes more concentrated. This difference makes it possible to tell them apart in the laboratory.</p>`
    },
    {
      type: "text",
      title: "Solutions and concentration",
      html: `<p>In a <b>solution</b> the component present in the smaller amount is the <b>solute</b>, the one in the larger amount the <b>solvent</b>. The most important solvent is water.</p>
<p>The <b>concentration</b> tells you how much solute there is. The most common ways of expressing it:</p>
<ul>
<li><b>percentage by mass</b> (% m/m) = (mass of solute / mass of solution) × 100;</li>
<li><b>percentage by volume</b> (% V/V), used for alcohol in drinks;</li>
<li><b>mass/volume</b> (g/L).</li>
</ul>
<p>At a given temperature a solvent can dissolve a maximum amount of solute: its <b>solubility</b>. Beyond that limit the solution is <b>saturated</b> and the extra solute stays at the bottom. In general the solubility of solids increases with temperature; that of <b>gases</b> decreases (which is why a warm fizzy drink quickly loses its carbon dioxide).</p>`
    },
    {
      type: "example",
      title: "How much salt is there?",
      html: `<p>You dissolve <b>30 g</b> of salt in <b>220 g</b> of water. What is the percentage by mass?</p>
<ol>
<li>Mass of the solution: 30 + 220 = 250 g.</li>
<li>% m/m = 30 / 250 × 100 = <b>12%</b>.</li>
</ol>
<p>For comparison, sea water contains on average about <b>3.5%</b> dissolved salts (about 35 g per kg), while the Dead Sea has over 30%: that is why it is so easy to float in it, because the density of the water is much higher.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: classifying and calculating",
      questions: [
        { type: "mc", q: "Which of these is a pure substance?", options: ["Sea water", "Distilled water", "Air", "Milk"], answer: 1, explain: "Distilled water is made only of H₂O. The others are mixtures." },
        { type: "num", q: "An object has a mass of 120 g and a volume of 15 cm³. What is its density?", answer: 8, unit: "g/cm³", explain: "d = m/V = 120/15 = 8 g/cm³." },
        { type: "tf", q: "In a mixture the components lose their own properties.", answer: false, explain: "In mixtures the components keep their properties: they can be separated by physical methods." }
      ]
    },
    {
      type: "text",
      title: "How mixtures are separated",
      html: `<p>Since the substances in a mixture have not reacted, they are separated by <b>physical methods</b>, which make use of a difference in properties. The method is chosen according to the type of mixture.</p>
<table>
<tr><th>Method</th><th>Mixture</th><th>Property used</th></tr>
<tr><td><b>Filtration</b></td><td>insoluble solid + liquid (water and sand)</td><td>particle size</td></tr>
<tr><td><b>Decanting</b></td><td>solid + liquid, or two immiscible liquids (oil and water, with a separating funnel)</td><td>density</td></tr>
<tr><td><b>Centrifugation</b></td><td>fine suspensions (blood: plasma and cells)</td><td>density, speeded up by rotation</td></tr>
<tr><td><b>Sieving</b></td><td>solids with different grain sizes (sand and gravel)</td><td>size</td></tr>
<tr><td><b>Magnetic separation</b></td><td>iron + other solids</td><td>magnetism</td></tr>
<tr><td><b>Evaporation</b></td><td>solid solute + solvent (salt and water)</td><td>volatility</td></tr>
<tr><td><b>Distillation</b></td><td>miscible liquids or solutions (water and alcohol)</td><td>boiling point</td></tr>
<tr><td><b>Chromatography</b></td><td>mixtures of dyes or complex substances</td><td>different affinity for a stationary phase and a mobile phase</td></tr>
<tr><td><b>Solvent extraction</b></td><td>solute dissolved in a solvent</td><td>solubility in another solvent</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Match the method to the mixture",
      widget: "match",
      options: { pairs: [
        ["Water and sand", "Filtration"],
        ["Oil and water", "Decanting (separating funnel)"],
        ["Salt dissolved in water", "Evaporation"],
        ["Water and ethanol", "Distillation"],
        ["Iron filings and sulfur", "Magnet"],
        ["Pigments in an ink", "Chromatography"],
        ["Blood plasma and blood cells", "Centrifugation"]
      ] },
      caption: "For each mixture, find the property that makes it possible to separate it."
    },
    {
      type: "alternatives",
      title: "Other ways to understand distillation",
      intro: "Distillation is based on a difference in boiling points. If it isn't clear, try these pictures.",
      tabs: [
        {
          label: "🔬 Diagram of the apparatus",
          html: `<p>The mixture is heated in the flask: the component with the lower boiling point (for example ethanol, 78 °C, compared with water, 100 °C) evaporates first. The vapour rises, passes into the <b>condenser</b> (a tube cooled by cold water flowing around it) and <b>condenses</b>: the pure liquid drips into the collecting vessel and is called the <b>distillate</b>.</p>`,
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<circle cx="110" cy="190" r="60" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<path d="M56 205 A60 60 0 0 0 164 205 Z" fill="#7dd3fc"/>
<rect x="100" y="95" width="20" height="45" fill="#e0f2fe" stroke="#334155" stroke-width="3"/>
<rect x="60" y="255" width="100" height="20" rx="4" fill="#f59e0b"/>
<text x="110" y="270" font-size="14" text-anchor="middle" fill="#1f2937">burner</text>
<line x1="110" y1="95" x2="250" y2="95" stroke="#334155" stroke-width="3"/>
<line x1="250" y1="95" x2="470" y2="160" stroke="#334155" stroke-width="3"/>
<rect x="300" y="100" width="130" height="38" transform="rotate(16 365 119)" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<text x="365" y="75" font-size="16" text-anchor="middle" fill="#0369a1" font-weight="bold">condenser</text>
<path d="M470 160 L470 215" stroke="#334155" stroke-width="3"/>
<path d="M440 220 L500 220 L492 280 L448 280 Z" fill="#dcfce7" stroke="#334155" stroke-width="3"/>
<text x="470" y="298" font-size="14" text-anchor="middle" fill="#14532d">distillate</text>
<text x="110" y="75" font-size="14" text-anchor="middle" fill="#7c2d12">vapour rises</text>
<text x="560" y="150" font-size="14" text-anchor="middle" fill="#0369a1">cold water</text>
</svg>`
        },
        {
          label: "☕ The coffee-pot analogy",
          html: `<p>In a stovetop coffee pot (the Italian <i>moka</i>) you heat water: the steam pushes the liquid upwards through the filter. In a still, too, heat moves a substance from the liquid to the vapour, but here the vapour then <b>cools down and turns back into liquid</b>: you see this every time the steam from a saucepan condenses on the lid and drips back. Distillation is exactly this, done in a controlled way.</p>`
        },
        {
          label: "🧪 A speed race",
          html: `<p>Imagine two runners: ethanol is the faster one at turning into vapour, water is slower. If you heat carefully and stop the race at the right moment, almost only the fast ones arrive in the collecting vessel. Since the separation is never perfect at the first attempt, industry uses <b>fractional distillation</b> (columns with many \"trays\"), which is like repeating the race many times: this is how petrol, diesel, kerosene and other products are obtained from crude oil.</p>`
        }
      ]
    },
    {
      type: "example",
      title: "Problem: separating sand, salt and iron filings",
      html: `<p>You have a mixture of <b>sand, salt and iron filings</b>. How do you obtain the three pure components?</p>
<ol>
<li><b>Magnet</b>: it attracts the iron filings, which are removed while dry.</li>
<li><b>Water</b>: add water and stir; the salt dissolves, the sand doesn't.</li>
<li><b>Filtration</b>: the sand stays on the filter paper (and is left to dry).</li>
<li><b>Evaporation</b> of the filtrate: the water goes away, the salt crystallises.</li>
</ol>
<p>The order matters: if you added water before using the magnet, the iron might rust. Thinking out a \"separation plan\" is typical reasoning in analytical chemistry.</p>`
    },
    {
      type: "curiosity",
      title: "Salt pans and chromatography",
      html: `<p>Table salt is still obtained today, in many Italian salt pans such as those of Trapani or Cervia, by <b>evaporation</b> of sea water in shallow pools, heated by the sun and the wind. As for chromatography, the name means \"writing with colours\": it was used by the Russian botanist <b>Mikhail Tsvet</b> around 1900 to separate the pigments of leaves. Today it is the tool used to look for doping substances, drugs and pollutants. You can try it at home: a strip of filter paper, a dot of washable black felt-tip pen and a little water rising by capillary action will separate the mixed colours.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of matter: tap the nodes and find out why",
      nodes: [
        { id: "materia", label: "Matter", x: 50, y: 6, color: "#a855f7", html: "Anything that has mass and volume.", why: "The definition goes back to the Greek philosophers: <b>Democritus</b> (5th century BC) imagined matter made of indivisible atoms, <b>Aristotle</b> of four continuous elements. Only in the 1800s did <b>Dalton</b>'s atomic theory make it scientific." },
        { id: "stati", label: "States of matter", x: 18, y: 28, color: "#3b82f6", html: "Solid, liquid, gas.", why: "They are explained by the <b>kinetic-molecular model</b>, developed in the 19th century by Clausius, Maxwell and Boltzmann: what changes with temperature is the energy of motion of the particles and the strength of the forces holding them together." },
        { id: "pura", label: "Pure substances", x: 50, y: 32, color: "#22c55e", html: "Elements and compounds with a definite composition.", why: "The idea of a definite composition comes from <b>Proust's law</b> (1799): a compound always contains the same elements in the same proportions by mass." },
        { id: "miscugli", label: "Mixtures", x: 82, y: 28, color: "#f97316", html: "Several substances mixed together, in variable proportions.", why: "If the substances reacted with each other and the proportions were fixed, we would have compounds, not mixtures: that is why mixtures are recognised by the fact that the amounts can vary and the components can be separated by physical methods." },
        { id: "omo", label: "Homogeneous (solutions)", x: 68, y: 56, color: "#0ea5e9", html: "A single phase: air, bronze, salt water.", why: "The solute particles are dispersed as single molecules or ions, too small to be seen or held back by a filter: that is why distillation or evaporation is needed." },
        { id: "etero", label: "Heterogeneous", x: 92, y: 56, color: "#ef4444", html: "Several visible phases: water and sand, granite.", why: "The dispersed particles are large or clumped together, so denser or bigger than the medium: they are separated by decanting, filtration or sieving." },
        { id: "metodi", label: "Separation methods", x: 76, y: 82, color: "#14b8a6", html: "Filtration, distillation, chromatography…", why: "Each method makes use of a different <b>intensive</b> property of the components (density, boiling point, solubility, size): that is why the choice depends on the mixture." },
        { id: "densita", label: "Density", x: 28, y: 62, color: "#eab308", html: "d = m/V, an intensive property.", why: "It is said that <b>Archimedes</b> (3rd century BC) discovered the principle of buoyancy while looking for a way to check whether Hiero's crown was pure gold, by comparing densities without damaging the object." }
      ],
      edges: [
        ["materia", "stati", "exists in"],
        ["materia", "pura", "is classified into"],
        ["materia", "miscugli", "is classified into"],
        ["miscugli", "omo", "can be"],
        ["miscugli", "etero", "can be"],
        ["omo", "metodi", "is separated by"],
        ["etero", "metodi", "is separated by"],
        ["pura", "densita", "has its own"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: separations",
      questions: [
        { type: "mc", q: "To separate oil and water you use…", options: ["distillation", "a separating funnel (decanting)", "a magnet"], answer: 1, explain: "The two liquids don't mix and have different densities: the oil, being less dense, floats on top." },
        { type: "mc", q: "Air is…", options: ["a pure substance", "a homogeneous mixture of gases", "a heterogeneous mixture"], answer: 1, explain: "It is a mixture of nitrogen (78%), oxygen (21%) and other gases: a single phase." },
        { type: "tf", q: "While a pure substance is boiling, its temperature stays constant.", answer: true, explain: "The heat supplied is used to change state, not to raise the temperature." }
      ]
    }
  ],
  glossary: [
    { t: "Matter", d: "Anything that has mass and takes up a volume." },
    { t: "Density", d: "The ratio of the mass of a body to its volume: d = m/V." },
    { t: "Intensive property", d: "A property that does not depend on the amount of matter (density, boiling point)." },
    { t: "State of matter", d: "The way the particles are arranged: solid, liquid, gas." },
    { t: "Pure substance", d: "Matter with a definite composition: an element or a compound." },
    { t: "Mixture", d: "A combination of several substances not chemically combined, in variable proportions." },
    { t: "Phase", d: "A portion of matter with uniform properties, separated from the rest by a boundary surface." },
    { t: "Solution", d: "A homogeneous mixture of a solute in a solvent." },
    { t: "Solubility", d: "The maximum amount of solute that dissolves in a given amount of solvent at a given temperature." },
    { t: "Distillation", d: "Separation of liquids based on their different boiling points." },
    { t: "Chromatography", d: "A separation technique based on the different affinity of the components for a stationary phase and a mobile phase." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which property does NOT depend on the amount of matter?", options: ["Mass", "Volume", "Density"], answer: 2, explain: "Density is an intensive property: it is the same for a gram and for a kilo of the same material." },
      { type: "num", q: "A block has a mass of 540 g and a volume of 200 cm³. What is its density?", answer: 2.7, tol: 0.01, unit: "g/cm³", explain: "d = 540/200 = 2.7 g/cm³." },
      { type: "mc", q: "In which state are the particles far apart and moving quickly and randomly?", options: ["Solid", "Liquid", "Gas"], answer: 2, explain: "In gases the forces between particles are negligible and the volume is that of the container." },
      { type: "tf", q: "Bronze, an alloy of copper and tin, is a homogeneous mixture.", answer: true, explain: "It has a single phase and variable proportions of its components." },
      { type: "tf", q: "A mixture always has a constant boiling point.", answer: false, explain: "Only pure substances keep a constant temperature during a change of state." },
      { type: "mc", q: "To obtain drinking water from sea water, making use of the difference in volatility, you use…", options: ["filtration", "distillation", "sieving"], answer: 1, explain: "The water evaporates and then condenses, leaving the salts behind: this is the principle of thermal desalination plants." },
      { type: "num", q: "You dissolve 15 g of sugar in 135 g of water. What is the % m/m?", answer: 10, unit: "%", explain: "15 / (15 + 135) × 100 = 10%." },
      { type: "order", q: "Put in order the steps for separating sand, salt and iron.", items: ["Use the magnet", "Add water and stir", "Filter", "Evaporate the filtrate"], explain: "First remove the iron while dry, then dissolve the salt, filter out the sand and finally recover the salt." },
      { type: "text", q: "What is the component present in the larger amount in a solution called?", answer: ["solvent", "the solvent"], explain: "The solvent is the main component; the solute is the one that dissolves." },
      { type: "mc", q: "A suspension of red blood cells in plasma is separated by…", options: ["centrifugation", "evaporation", "chromatography"], answer: 0, explain: "Fast rotation enhances the difference in density and the cells settle at the bottom." }
    ]
  }
});
