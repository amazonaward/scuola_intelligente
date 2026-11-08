TOPIC('en', {
  id: "m2-tec-energia",
  title: "Energy and Power Plants",
  intro: "Press a switch and the light comes on: behind that simple action is a very long journey. Electricity starts in a <b>power plant</b>, where a source of energy (water, wind, sun, gas, heat from the Earth…) is <b>transformed</b>, then travels hundreds of kilometres along cables to the socket in your home. Let's find out how it works.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Energy: nothing is created, everything is transformed",
      html: `<p><b>Energy</b> is the ability to do work: to move, heat or light things up. It is measured in <b>joules</b> (J); for electricity we use the <b>kilowatt-hour</b> (kWh).</p>
<p>There are many <b>forms</b> of energy: <b>mechanical</b> (movement and position), <b>thermal</b> (heat), <b>chemical</b> (in fuels and food), <b>electrical</b>, <b>light</b> (radiant), <b>nuclear</b>.</p>
<p>Golden rule (the principle of conservation of energy): energy is <b>never created or destroyed</b>, it is <b>transformed</b> from one form into another. Power plants do not «produce» energy out of nothing: they transform it into electrical energy.</p>
<p>In every transformation some of the energy is lost, almost always as heat. The <b>efficiency</b> tells us how much useful energy we get:</p>
<p style="text-align:center"><b>efficiency = useful energy ÷ energy used × 100</b></p>`
    },
    {
      type: "text",
      title: "Sources of energy",
      html: `<table>
<tr><th><b>Non-renewable</b> sources</th><th><b>Renewable</b> sources</th></tr>
<tr><td>They formed over millions of years and run out: <b>oil</b>, <b>coal</b>, <b>natural gas</b> (fossil fuels), <b>uranium</b> (nuclear).</td><td>They are constantly renewed thanks to the Sun or the Earth: <b>solar</b>, <b>wind</b>, <b>hydroelectric</b> (water), <b>geothermal</b> (internal heat), <b>biomass</b> (wood, plant waste), <b>sea</b> energy.</td></tr>
<tr><td>Burning fossil fuels releases <b>carbon dioxide</b> (CO₂), the main gas responsible for global warming, and polluting substances.</td><td>They give off very little CO₂ while operating, but some depend on the weather (sun, wind) and need <b>storage</b> systems.</td></tr>
</table>`
    },
    {
      type: "text",
      title: "The heart of almost every plant: turbine + alternator",
      html: `<p>In <b>1831</b> the Englishman <b>Michael Faraday</b> discovered <b>electromagnetic induction</b>: if a magnet moves near a coil of copper wire, an electric current appears in the wire. This is the principle of the bicycle dynamo and of almost all power plants.</p>
<ol>
<li>The energy source sets a <b>turbine</b> (a big wheel with blades) in motion: it is pushed by water, wind or steam.</li>
<li>The turbine spins the <b>alternator</b>: magnets rotating inside copper coils → <b>alternating current</b> is produced.</li>
<li>The <b>transformer</b> raises the voltage (up to 380,000 volts in Italy) to carry the energy with fewer losses.</li>
<li>The <b>power lines</b> (the pylons) carry the energy far away; <b>substations</b> lower the voltage down to the <b>230 volts</b> of household sockets, at <b>50 hertz</b>.</li>
</ol>
<p>The exception is <b>photovoltaic</b> power: the panels turn light <b>directly</b> into electricity, with no turbines. The current produced is direct, and an <b>inverter</b> turns it into alternating current.</p>`
    },
    {
      type: "svg",
      title: "From the power plant to the socket at home",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfeff"/>
<rect x="0" y="240" width="600" height="60" fill="#bbf7d0"/>
<rect x="20" y="130" width="90" height="110" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
<rect x="40" y="80" width="22" height="50" fill="#64748b"/>
<circle cx="51" cy="65" r="12" fill="#e2e8f0"/>
<circle cx="62" cy="48" r="15" fill="#f1f5f9"/>
<circle cx="65" cy="185" r="26" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<line x1="65" y1="159" x2="65" y2="211" stroke="#92400e" stroke-width="3"/>
<line x1="39" y1="185" x2="91" y2="185" stroke="#92400e" stroke-width="3"/>
<text x="65" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">1 power plant</text>
<rect x="140" y="180" width="60" height="60" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<text x="170" y="218" font-size="22" fill="#ffffff" text-anchor="middle">⚡</text>
<text x="170" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">2 transformer</text>
<text x="170" y="286" font-size="13" fill="#7c2d12" text-anchor="middle">raises to 380 kV</text>
<polygon points="260,240 280,90 300,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="255" y1="110" x2="305" y2="110" stroke="#334155" stroke-width="4"/>
<polygon points="380,240 400,90 420,240" fill="none" stroke="#334155" stroke-width="4"/>
<line x1="375" y1="110" x2="425" y2="110" stroke="#334155" stroke-width="4"/>
<path d="M200 195 Q 230 120 258 110 Q 340 140 378 110 Q 430 140 460 190" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">3 power line</text>
<rect x="450" y="190" width="40" height="50" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="470" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">4 substation</text>
<polygon points="510,180 550,145 590,180" fill="#ef4444"/>
<rect x="515" y="180" width="70" height="60" fill="#fef3c7" stroke="#92400e" stroke-width="3"/>
<circle cx="550" cy="205" r="10" fill="#fde047"/>
<line x1="490" y1="210" x2="515" y2="210" stroke="#dc2626" stroke-width="3"/>
<text x="550" y="268" font-size="14" font-weight="bold" fill="#1f2937" text-anchor="middle">5 home</text>
<text x="550" y="286" font-size="13" fill="#92400e" text-anchor="middle">230 V</text>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#0e7490" text-anchor="middle">The journey of electricity</text>
</svg>`,
      caption: "The voltage is raised for transport (fewer losses along the cables) and lowered before it enters our homes."
    },
    {
      type: "text",
      title: "The main types of power plant",
      html: `<ul>
<li><b>Thermoelectric</b>: burns gas, coal or oil in a boiler; the heat turns water into high-pressure <b>steam</b> that spins the turbine. Chain: chemical → thermal → mechanical → electrical.</li>
<li><b>Hydroelectric</b>: water from a reservoir (often created by a <b>dam</b>) flows down the <b>penstocks</b> (pressure pipes) and hits the turbine. Chain: potential → kinetic → electrical.</li>
<li><b>Wind</b>: the wind spins the blades of a <b>wind turbine</b>, connected to the alternator in the nacelle at the top of the tower.</li>
<li><b>Photovoltaic</b>: <b>silicon</b> cells turn light into current (the photovoltaic effect, discovered by Edmond Becquerel in 1839).</li>
<li><b>Geothermal</b>: uses the hot steam that rises from underground in volcanic areas.</li>
<li><b>Nuclear</b>: the <b>fission</b> (splitting) of uranium nuclei releases a huge amount of heat, which makes steam as in a thermoelectric plant. It does not emit CO₂, but it produces <b>radioactive waste</b> that must be kept safe for extremely long times. In Italy, after the 1987 referendum, the nuclear power plants were shut down.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Explore a hydroelectric power plant",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Glacier", html: "Glaciers and snow are water «reserves»: as they melt in spring and summer they feed Alpine rivers and lakes." },
        mountain: { label: "Mountain", html: "Hydroelectric plants are built in the mountains because they need a big <b>drop in height</b>: the higher the water falls from, the more energy it has." },
        lake: { label: "Reservoir (artificial lake)", html: "The <b>dam</b> blocks a valley and creates a lake: the water held high up has <b>potential energy</b>. The reservoir is also a «battery»: it can be released whenever energy is needed." },
        valley: { label: "Valley with the power plant", html: "At the bottom of the valley is the <b>power plant</b>: the water arrives through the penstocks, hits the turbine and spins the alternator." },
        river: { label: "River", html: "After the turbine the water returns to the river: it is neither used up nor polluted. «Run-of-river» plants use the river's current directly, without big dams." },
        plain: { label: "Plain", html: "Power lines carry the energy towards the cities and factories of the plain, where most of it is used." }
      } },
      caption: "Tap the parts of the landscape to follow the path of the water from the mountain to the electric current."
    },
    {
      type: "quiz",
      title: "Mini-quiz: sources and transformations",
      questions: [
        { type: "mc", q: "Which source is renewable?", options: ["Coal", "Wind", "Natural gas"], answer: 1, explain: "Wind is constantly renewed: it is a renewable source." },
        { type: "mc", q: "Which machine turns movement into electrical energy?", options: ["Transformer", "Alternator", "Boiler"], answer: 1, explain: "The alternator uses the electromagnetic induction discovered by Faraday." },
        { type: "tf", q: "Photovoltaic panels need a turbine.", answer: false, explain: "Photovoltaic power turns light directly into electricity, with no moving parts." }
      ]
    },
    {
      type: "widget",
      title: "Renewable or not?",
      widget: "classify",
      options: {
        groups: ["Renewable", "Non-renewable"],
        items: [
          ["☀️ Sun", 0], ["🌬️ Wind", 0], ["💧 River water", 0], ["🌋 Heat from the Earth", 0],
          ["🪵 Biomass", 0], ["🛢️ Oil", 1], ["⚫ Coal", 1], ["🔥 Natural gas", 1], ["☢️ Uranium", 1]
        ]
      },
      caption: "Fossil fuels and uranium are limited: one day they will run out."
    },
    {
      type: "example",
      title: "Practical example: reading the electricity bill",
      html: `<p>The <b>power</b> of an appliance (in watts, W, or kilowatts, kW) tells us how much energy it uses <b>every hour</b>. The energy used is:</p>
<p style="text-align:center"><b>energy (kWh) = power (kW) × time (h)</b></p>
<ul>
<li>A <b>2 kW</b> oven switched on for <b>1.5 hours</b> uses 2 × 1.5 = <b>3 kWh</b>.</li>
<li>A <b>10 W</b> LED bulb (= 0.01 kW) on for <b>5 hours</b> a day for 30 days: 0.01 × 5 × 30 = <b>1.5 kWh</b> a month.</li>
<li>An old <b>60 W</b> incandescent bulb giving the same light: 0.06 × 5 × 30 = <b>9 kWh</b>, six times more!</li>
</ul>
<p>If a kWh costs about €0.30, the LED costs €0.45 a month and the old bulb €2.70. Saving energy is good for the environment and for your wallet.</p>`
    },
    {
      type: "example",
      title: "Practical example: efficiency",
      html: `<p>A thermoelectric plant receives <b>100</b> units of energy from the fuel and turns <b>40</b> of them into electricity: its efficiency is 40 ÷ 100 × 100 = <b>40%</b>. The rest is lost as heat (that is why they have the big cooling towers).</p>
<p>Modern <b>combined-cycle</b> plants recover the heat of the exhaust gases to make more steam and reach about <b>60%</b>. A hydroelectric plant can exceed <b>85–90%</b>, while an ordinary photovoltaic panel turns about <b>20%</b> of the light it receives into electricity.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? Italy switched on the first geothermal light bulb",
      html: `<p>In <b>1904</b>, at <b>Larderello</b> in Tuscany, Prince <b>Piero Ginori Conti</b> used the natural steam coming out of the ground to spin a small dynamo and lit <b>5 light bulbs</b>: it was the first time in the world that electricity was produced from the Earth's heat.</p>
<p>In 1913 the world's first commercial geothermal power plant started working at Larderello. Even today Tuscany produces geothermal electricity.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? «Water batteries»",
      html: `<p>The sun and the wind do not always produce when we need them. A clever solution is <b>pumped-storage</b> plants: they have two lakes, one high up and one lower down. When there is surplus energy (for example at midday with lots of sun), it is used to <b>pump</b> water up into the upper lake; in the evening, when everyone switches the lights on, the water flows down and produces electricity.</p>
<p>It is like recharging a gigantic battery… made of water and mountains!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>Energy is neither created nor destroyed: it is <b>transformed</b>. Efficiency measures how much energy is useful.</li>
<li><b>Non-renewable</b> sources: fossil fuels and uranium. <b>Renewable</b> sources: sun, wind, water, geothermal, biomass.</li>
<li>Almost all power plants: source → <b>turbine</b> → <b>alternator</b> → <b>transformer</b> → grid. Photovoltaic power uses no turbines.</li>
<li>Energy (kWh) = power (kW) × time (h).</li>
<li>At home: 230 V, 50 Hz, alternating current.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand power plants",
      intro: "If energy transformations confuse you, try an analogy, some history, or an interactive timeline.",
      tabs: [
        {
          label: "🚲 The bike dynamo",
          html: `<p>An old bicycle with a <b>dynamo</b> is a miniature power plant!</p>
<ul>
<li>You are the <b>energy source</b> (chemical energy from food → muscles).</li>
<li>The turning wheel is the <b>turbine</b>.</li>
<li>The dynamo, with a magnet rotating inside a coil, is the <b>alternator</b>.</li>
<li>The lamp that lights up is the <b>home</b> that uses the energy.</li>
</ul>
<p>If you pedal harder the light is brighter; if you stop it goes out: no movement, no current. In a thermoelectric plant, instead of your legs there is steam; in a hydroelectric plant, falling water.</p>`
        },
        {
          label: "🔗 The chain of transformations",
          html: `<p>Every power plant is a <b>chain</b> of transformations. Follow it like a relay race in which the energy is passed from hand to hand:</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fff7ed"/>
<text x="300" y="30" font-size="18" font-weight="bold" fill="#9a3412" text-anchor="middle">Thermoelectric plant</text>
<rect x="15" y="45" width="125" height="60" rx="12" fill="#a16207"/>
<text x="77" y="82" font-size="16" fill="#ffffff" text-anchor="middle">chemical 🔥</text>
<rect x="160" y="45" width="125" height="60" rx="12" fill="#dc2626"/>
<text x="222" y="82" font-size="16" fill="#ffffff" text-anchor="middle">thermal ♨️</text>
<rect x="305" y="45" width="125" height="60" rx="12" fill="#2563eb"/>
<text x="367" y="82" font-size="16" fill="#ffffff" text-anchor="middle">mechanical ⚙️</text>
<rect x="450" y="45" width="135" height="60" rx="12" fill="#16a34a"/>
<text x="517" y="82" font-size="16" fill="#ffffff" text-anchor="middle">electrical ⚡</text>
<text x="150" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="295" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="440" y="82" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="150" font-size="18" font-weight="bold" fill="#1e40af" text-anchor="middle">Hydroelectric plant</text>
<rect x="60" y="165" width="140" height="60" rx="12" fill="#0ea5e9"/>
<text x="130" y="202" font-size="16" fill="#ffffff" text-anchor="middle">potential 🏔️</text>
<rect x="230" y="165" width="140" height="60" rx="12" fill="#2563eb"/>
<text x="300" y="202" font-size="16" fill="#ffffff" text-anchor="middle">kinetic 💧</text>
<rect x="400" y="165" width="140" height="60" rx="12" fill="#16a34a"/>
<text x="470" y="202" font-size="16" fill="#ffffff" text-anchor="middle">electrical ⚡</text>
<text x="215" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="385" y="202" font-size="20" fill="#1f2937" text-anchor="middle">→</text>
<text x="300" y="262" font-size="15" fill="#7c2d12" text-anchor="middle">at every step a little energy is lost as heat</text>
</svg>`
        },
        {
          label: "🌍 How other countries do it",
          html: `<p>Every country produces electricity with the resources it has:</p>
<ul>
<li>🇳🇴 <b>Norway</b>: full of mountains and rivers, it produces about <b>90%</b> of its electricity from <b>hydroelectric</b> power.</li>
<li>🇫🇷 <b>France</b>: about two thirds of its electricity comes from <b>nuclear</b> power.</li>
<li>🇮🇸 <b>Iceland</b>: a volcanic island, it uses <b>hydroelectric and geothermal</b> power almost 100%.</li>
<li>🇩🇰 <b>Denmark</b>: flat and windy land, over half of its electricity comes from the <b>wind</b>.</li>
<li>🇮🇹 <b>Italy</b>: uses mostly <b>natural gas</b>, but renewables (hydroelectric, solar, wind, geothermal, biomass) now cover about two fifths of electricity consumption, and solar grows every year.</li>
</ul>
<p>Geography and energy are closely connected!</p>`
        },
        {
          label: "⏳ Timeline",
          html: `<p>Scroll the timeline: from Faraday's induction to solar panels on rooftops.</p>`,
          widget: "timeline",
          options: { unit: "years", events: [
            { year: 1831, label: "Faraday discovers electromagnetic induction", icon: "🧲" },
            { year: 1839, label: "Becquerel discovers the photovoltaic effect", icon: "☀️" },
            { year: 1879, label: "Edison's incandescent light bulb", icon: "💡" },
            { year: 1882, label: "First power plants in London and New York", icon: "🏭" },
            { year: 1883, label: "The Santa Radegonda Street power plant in Milan", icon: "🇮🇹" },
            { year: 1904, label: "Larderello: first geothermal electricity", icon: "🌋" },
            { year: 1954, label: "First silicon solar panels (Bell Labs)", icon: "🔋" },
            { year: 1987, label: "Referendum: Italy gives up nuclear power", icon: "🗳️" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Electricity map",
      nodes: [
        { id: "energia", label: "Energy", x: 50, y: 7, color: "#7c3aed", html: "The ability to do work. Measured in joules (J) or kWh.", why: "The principle of conservation of energy was formulated in the mid-1800s by scientists such as Julius Robert Mayer, James Prescott Joule and Hermann von Helmholtz: energy is transformed but the total stays constant." },
        { id: "fonti", label: "Sources", x: 50, y: 27, color: "#2563eb", html: "Where we get energy from: renewable and non-renewable.", why: "Almost all of them come from the Sun: fossil fuels are the remains of plants and animals that stored solar energy millions of years ago; wind and rain come from the Sun heating the air and the sea. Geothermal and nuclear are the exceptions." },
        { id: "rinn", label: "Renewables", x: 20, y: 45, color: "#16a34a", html: "Sun, wind, water, geothermal, biomass.", why: "They are renewed on human timescales: the Sun will shine for billions of years and the water cycle always brings rain back to the mountains." },
        { id: "nonrinn", label: "Non-renewables", x: 80, y: 45, color: "#64748b", html: "Oil, coal, gas, uranium.", why: "Fossil fuels formed over millions of years: we use them up in a few centuries. By burning them we release CO₂, which traps heat in the atmosphere." },
        { id: "turbina", label: "Turbine", x: 35, y: 65, color: "#0ea5e9", html: "A bladed wheel driven by water, steam or wind.", why: "It descends from the water mills and windmills used for centuries. The modern steam turbine was invented by Charles Parsons in 1884." },
        { id: "alternatore", label: "Alternator", x: 65, y: 65, color: "#f59e0b", html: "Turns movement into alternating current.", why: "It is based on the electromagnetic induction discovered by Michael Faraday in 1831: a moving magnet near a coil generates current." },
        { id: "fv", label: "Photovoltaic", x: 10, y: 82, color: "#eab308", html: "Silicon cells that turn light into electricity.", why: "The photovoltaic effect was observed by Edmond Becquerel in 1839; Albert Einstein explained the related phenomenon (the photoelectric effect) in 1905 and received the Nobel Prize for it." },
        { id: "rete", label: "Power grid", x: 65, y: 85, color: "#ef4444", html: "Transformers, power lines, substations: they carry the energy into homes.", why: "Alternating current is used because transformers make it easy to raise and lower the voltage: high voltage = fewer losses on the cables. In the late 1800s the «war of the currents» was fought between Edison (direct) and Tesla/Westinghouse (alternating)." },
        { id: "kwh", label: "kWh", x: 90, y: 92, color: "#a855f7", html: "Unit of electrical energy: power (kW) × time (h).", why: "The watt is named after James Watt, the Scottish engineer who improved the steam engine. 1 kWh = 3,600,000 joules." }
      ],
      edges: [
        ["energia", "fonti", "comes from"],
        ["fonti", "rinn", "type"],
        ["fonti", "nonrinn", "type"],
        ["rinn", "turbina", "water, wind drive"],
        ["nonrinn", "turbina", "steam drives"],
        ["turbina", "alternatore", "spins"],
        ["rinn", "fv", "the Sun powers"],
        ["alternatore", "rete", "feeds into"],
        ["fv", "rete", "with inverter"],
        ["rete", "kwh", "is measured in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: calculations with energy",
      questions: [
        { type: "num", q: "A 2 kW hairdryer stays on for 0.5 hours. How many kWh does it use?", answer: 1, unit: "kWh", explain: "2 × 0.5 = 1 kWh." },
        { type: "num", q: "A power plant receives 200 units of energy and turns 70 of them into electricity. What is the efficiency in %?", answer: 35, unit: "%", explain: "70 ÷ 200 × 100 = 35%." },
        { type: "mc", q: "Why is electricity transported at very high voltage?", options: ["To make it arrive faster", "To reduce losses on the cables", "To make it safer at home"], answer: 1, explain: "At high voltage less current is needed to carry the same power, so the cables heat up less and less energy is wasted." }
      ]
    }
  ],
  glossary: [
    { t: "Energy", d: "The ability to do work; measured in joules (J) or kilowatt-hours (kWh)." },
    { t: "Renewable source", d: "A source that is renewed in a short time: sun, wind, water, geothermal, biomass." },
    { t: "Fossil fuel", d: "Oil, coal or gas, formed over millions of years from the remains of organisms." },
    { t: "Turbine", d: "A bladed wheel set spinning by water, steam or wind." },
    { t: "Alternator", d: "A machine that turns movement into alternating electric current." },
    { t: "Transformer", d: "A device that raises or lowers the electrical voltage." },
    { t: "Power line", d: "A line of cables and pylons that carries energy at high voltage." },
    { t: "Photovoltaic effect", d: "The direct conversion of light into electricity in silicon cells." },
    { t: "Nuclear fission", d: "The splitting of heavy nuclei (uranium) that releases large amounts of heat." },
    { t: "Efficiency", d: "The ratio between the useful energy obtained and the energy used, as a percentage." },
    { t: "Kilowatt-hour (kWh)", d: "The energy used by a 1 kW appliance switched on for one hour." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "tf", q: "According to the principle of conservation, energy is transformed but not created out of nothing.", answer: true, explain: "Energy is neither created nor destroyed, it is transformed." },
      { type: "mc", q: "Which of these is a non-renewable source?", options: ["Geothermal", "Uranium", "Biomass"], answer: 1, explain: "Uranium is a mineral that exists in limited amounts." },
      { type: "mc", q: "Who discovered electromagnetic induction in 1831?", options: ["Thomas Edison", "Michael Faraday", "Alessandro Volta"], answer: 1, explain: "Michael Faraday, an English scientist." },
      { type: "order", q: "Put the working of a thermoelectric plant in order.", items: ["The fuel burns in the boiler", "The water turns into steam", "The steam spins the turbine", "The alternator produces current", "The transformer raises the voltage"], explain: "Chemical → thermal → mechanical → electrical, then the grid." },
      { type: "num", q: "A 0.1 kW television stays on for 4 hours. How many kWh does it use?", answer: 0.4, tol: 0.001, unit: "kWh", explain: "0.1 × 4 = 0.4 kWh." },
      { type: "mc", q: "In which type of plant is there no turbine?", options: ["Wind", "Photovoltaic", "Hydroelectric"], answer: 1, explain: "Photovoltaic power turns light directly into electricity." },
      { type: "text", q: "What is the name of the Tuscan place where geothermal electricity was first produced in 1904?", answer: ["larderello"], explain: "Larderello, in the province of Pisa." },
      { type: "num", q: "What is the voltage (in volts) of household sockets in Italy?", answer: 230, unit: "V", explain: "In Italy (and in Europe) the household grid is 230 V, 50 Hz." },
      { type: "tf", q: "Hydroelectric plants use up the water, which never returns to the river.", answer: false, explain: "The water passes through the turbine and returns to the river: it is used, not consumed." },
      { type: "mc", q: "What is the main disadvantage of fossil fuels for the climate?", options: ["They make too much noise", "They release CO₂, which contributes to global warming", "They only work during the day"], answer: 1, explain: "Burning them releases carbon dioxide, a greenhouse gas." },
      { type: "num", q: "A panel receives 1000 W of light and produces 200 W of electricity. What is the efficiency in %?", answer: 20, unit: "%", explain: "200 ÷ 1000 × 100 = 20%." },
      { type: "mc", q: "What is a pumped-storage plant for?", options: ["To store energy by pumping water uphill when there is a surplus", "To pump oil from underground", "To cool nuclear power plants"], answer: 0, explain: "It works like a big battery: it stores energy in the form of water at height." }
    ],
    gen: [["percent", 2]]
  }
});
