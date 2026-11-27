TOPIC('en', {
  id: "l1-sci-idrosfera",
  title: "The hydrosphere",
  intro: "Seen from space our planet is blue: about <b>71%</b> of its surface is covered by water. The <b>hydrosphere</b> is all the water on Earth, as liquid, solid and vapour: oceans, seas, lakes, rivers, groundwater, glaciers and water vapour in the air. It is the environment where life began, and it regulates the climate. In this lesson we follow water droplets along the <b>water cycle</b> and study oceans, currents, rivers, lakes and glaciers.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "How much water there is, and where",
      html: `<p>The total volume of water on Earth is about <b>1.4 billion km³</b>. But almost all of it is undrinkable:</p>
<table>
<tr><th>Where</th><th>Percentage of total water</th></tr>
<tr><td>Oceans and seas (salt water)</td><td>about <b>97.5%</b></td></tr>
<tr><td>Fresh water</td><td>about <b>2.5%</b></td></tr>
</table>
<p>And of the fresh water:</p>
<ul>
<li>about <b>69%</b> is locked up in <b>glaciers and polar ice caps</b>;</li>
<li>about <b>30%</b> is <b>groundwater</b> (aquifers);</li>
<li>less than <b>1%</b> is in lakes, rivers, soil and the atmosphere: so only about 0.01% of all water is easily accessible.</li>
</ul>
<p>If all the water on Earth were gathered into a sphere, it would be about 1400 km across: the size of a moon like Europa.</p>
<p><b>Salt waters</b> contain salts (mainly sodium chloride, about 85%), on average <b>35 g per kg</b>, that is a <b>salinity</b> of 35‰. Salinity varies: lower where many rivers flow in or rainfall is heavy (Baltic Sea: 5-10‰), higher where evaporation is strong (Red Sea: 40‰; Dead Sea: about 300‰, a salt lake).</p>`
    },
    {
      type: "widget",
      title: "Fresh water or salt water?",
      widget: "classify",
      options: { groups: ["Salt water", "Fresh water"], items: [
        ["Pacific Ocean", 0],
        ["Mediterranean Sea", 0],
        ["Lake Garda", 1],
        ["River Po", 1],
        ["Aletsch Glacier", 1],
        ["Red Sea", 0],
        ["Aquifer", 1],
        ["Dead Sea", 0],
        ["Antarctic pack ice", 1],
        ["Lake Bolsena", 1]
      ] },
      caption: "The Dead Sea and the Caspian Sea are called \"seas\" but are actually lakes (the Caspian is brackish). Notice how ice, on land, is fresh water."
    },
    {
      type: "text",
      title: "The water cycle",
      html: `<p>Water is never still: the <b>hydrological cycle</b> moves it between the oceans, the atmosphere and the land, driven by the Sun's energy and by gravity. The stages:</p>
<ol>
<li><b>Evaporation</b>: the Sun heats the water of seas, lakes and soil; about 86% of evaporation comes from the oceans.</li>
<li><b>Transpiration</b> by plants (which together with evaporation makes up <b>evapotranspiration</b>).</li>
<li><b>Condensation</b>: as it rises, water vapour cools and condenses into droplets: clouds.</li>
<li><b>Precipitation</b>: rain, snow, hail.</li>
<li><b>Surface runoff</b> (water flowing over the surface towards rivers and seas), <b>infiltration</b> (water soaking into the ground and feeding aquifers) and <b>melting</b> of snow and ice.</li>
</ol>
<p>An important idea: the water on the planet is almost always the same. The water you drink today may have been in an ocean, in a cloud, in a glacier, in a dinosaur's body. The molecules have been "recycled" for billions of years. The <b>residence time</b> varies enormously: only about 9 days in the atmosphere, a few weeks in rivers, about 3000 years in the oceans, tens of thousands of years in Antarctic glaciers.</p>`
    },
    {
      type: "svg",
      title: "The water cycle",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#e0f2fe"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<path d="M0 230 L120 190 L200 215 L300 140 L400 205 L640 205 L640 320 L0 320 Z" fill="#a3a38a"/>
<path d="M300 140 L275 168 L300 160 L325 170 Z" fill="#fff"/>
<rect x="0" y="260" width="640" height="60" fill="#38bdf8"/>
<ellipse cx="190" cy="70" rx="60" ry="26" fill="#f1f5f9" stroke="#94a3b8"/><ellipse cx="230" cy="64" rx="45" ry="22" fill="#f1f5f9" stroke="#94a3b8"/>
<g stroke="#1d4ed8" stroke-width="3"><line x1="180" y1="100" x2="170" y2="130"/><line x1="200" y1="100" x2="190" y2="130"/><line x1="220" y1="100" x2="210" y2="130"/></g>
<g stroke="#dc2626" stroke-width="3" fill="none"><path d="M480 255 C480 200 480 150 440 100"/><path d="M520 255 C530 210 530 160 500 110"/></g>
<text x="500" y="285" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">evaporation</text>
<text x="135" y="160" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">precipitation</text>
<text x="230" y="30" font-size="14" fill="#334155" text-anchor="middle" font-weight="bold">condensation (clouds)</text>
<text x="350" y="125" font-size="14" fill="#334155" font-weight="bold">snow and glaciers</text>
<path d="M240 218 C210 232 170 250 150 262" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="248" font-size="14" fill="#1e3a8a" font-weight="bold">river</text>
<g stroke="#334155" stroke-width="2" stroke-dasharray="4 4"><line x1="90" y1="215" x2="90" y2="250"/><line x1="70" y1="215" x2="70" y2="250"/></g>
<text x="75" y="305" font-size="14" fill="#fff" font-weight="bold">infiltration and groundwater</text>
<text x="440" y="305" font-size="16" fill="#fff" font-weight="bold">OCEAN</text>
</svg>`,
      caption: "The cycle is powered by the Sun (which causes evaporation) and by gravity (which makes water fall and flow)."
    },
    {
      type: "example",
      title: "How much water falls? The water balance",
      html: `<p>A rainfall of <b>1 mm</b> is equal to <b>1 litre of water per m²</b>. If 50 mm fall in a stormy day on a catchment of <b>20 km²</b>, how much water arrives?</p>
<ol>
<li>20 km² = 20,000,000 m².</li>
<li>50 mm = 50 L/m² → 50 × 20,000,000 = <b>1,000,000,000 L</b> = 10⁹ L = <b>1 million m³</b>.</li>
</ol>
<p>An Olympic swimming pool holds 2500 m³: that is about <b>400 Olympic pools</b>. A water balance compares precipitation (P), evapotranspiration (E) and runoff (R): in a stable catchment, P ≈ E + R. If extraction exceeds recharge, the water table drops.</p>`
    },
    {
      type: "example",
      title: "How much salt is there in a tank of seawater?",
      html: `<p>Seawater has an average density of about <b>1.025 kg/L</b> and a salinity of <b>35‰</b>. How much salt do you get by evaporating <b>200 L</b> of seawater?</p>
<ol>
<li>Mass of the water: 200 L × 1.025 kg/L = 205 kg.</li>
<li>Mass of the salts: 205 × 0.035 = <b>about 7.2 kg</b>.</li>
</ol>
<p>Not all the salts are sodium chloride: in salt pans, gypsum is obtained first and then table salt (NaCl), leaving behind the "bitterns", rich in magnesium and potassium.</p>`
    },
    {
      type: "text",
      title: "Oceans and seas",
      html: `<p>The three great oceans are the <b>Pacific</b> (about 165 million km², almost half of the ocean surface and more than all the land put together), the <b>Atlantic</b> (about 106 million km²) and the <b>Indian</b> (about 70 million km²); the <b>Arctic</b> and <b>Southern</b> (Antarctic) oceans are smaller. In reality they form a single world ocean. The average depth is about <b>3700 m</b>; the greatest is the <b>Mariana Trench</b> (Challenger Deep), about <b>10,900 m</b>: Everest (8849 m) would fit inside with more than 2 km of water above its summit.</p>
<p>The <b>ocean floor</b> has varied landforms: the <b>continental shelf</b> (down to about 200 m, rich in life and fishing), the <b>continental slope</b>, the <b>abyssal plain</b>, the <b>mid-ocean ridges</b> (undersea mountain chains where new crust is formed) and the <b>trenches</b> (where crust sinks into the mantle): topics linked to plate tectonics.</p>
<p>A <b>sea</b> is a smaller part of an ocean, bounded by land (an enclosed sea like the Mediterranean, connected to the ocean only through the Strait of Gibraltar; an open sea like the Caribbean Sea).</p>
<p>Temperature falls with depth: the surface layer (about 100-200 m), mixed by waves and wind, is warm; below the <b>thermocline</b> the temperature drops quickly; below 1000 m it is almost constant, around 2-4 °C.</p>`
    },
    {
      type: "text",
      title: "Movements of the sea: waves, tides and currents",
      html: `<ul>
<li><b>Waves</b>: caused by wind. The water does not move forward: the particles move in circles and the <b>energy</b> travels. Waves grow with wind speed, duration and <b>fetch</b> (the stretch of sea over which the wind blows). <b>Tsunamis</b> are extremely long waves (even 100-200 km between two crests) caused by undersea earthquakes or landslides: in the open sea they travel at about 800 km/h and are less than a metre high, then they slow down and grow taller as they approach the coast.</li>
<li><b>Tides</b>: two high and two low tides about every 24 h 50 min, caused by the gravitational pull of the Moon and the Sun.</li>
<li><b>Currents</b>: great rivers within the sea.
<ul>
<li><b>Surface currents</b>: caused by the <b>prevailing winds</b> and deflected by the <b>Coriolis effect</b>; they form great circular systems (<b>gyres</b>) that turn clockwise in the northern hemisphere and anticlockwise in the southern. Example: the <b>Gulf Stream</b>, which carries warm water from the Gulf of Mexico towards northern Europe and makes the climate of the British Isles milder than that of Labrador at the same latitude.</li>
<li><b>Deep currents</b> (<b>thermohaline circulation</b>): caused by differences in <b>temperature</b> and <b>salinity</b>, that is in density. Cold, salty water near the poles sinks and flows along the bottom towards the equator: a global "conveyor belt" that takes about 1000 years to complete a loop.</li>
</ul></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "The plastic ducks that tell the story of currents",
      html: `<p>In 1992 a cargo ship lost a container in the Pacific with 28,800 plastic bath toys (ducks, turtles, beavers, frogs). By tracking where the toys washed up on the beaches of Alaska, Japan and, years later, other North Atlantic coasts, oceanographers reconstructed surface currents and the circulation of the gyres. Even today the great patches of plastic waste, such as the "Great Pacific Garbage Patch", form exactly where the gyre currents converge and the water stagnates.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: water and oceans",
      questions: [
        { type: "mc", q: "What percentage of the Earth's water is fresh?", options: ["about 2.5%", "about 25%", "about 50%"], answer: 0, explain: "97.5% is salt water, and of the small fresh part almost all is ice." },
        { type: "tf", q: "The Gulf Stream helps make the climate of north-western Europe milder.", answer: true, explain: "It carries warm water from the tropics northwards." },
        { type: "num", q: "How many litres of water does 25 mm of rain bring to a 100 m² field?", answer: 2500, unit: "L", explain: "1 mm = 1 L/m²: 25 × 100 = 2500 L." }
      ]
    },
    {
      type: "text",
      title: "Rivers and drainage basins",
      html: `<p>A <b>river</b> is a stream of water flowing in a channel from its <b>source</b> to its <b>mouth</b>. The area that collects all the water feeding a river is its <b>drainage basin</b>, separated from neighbouring basins by the <b>watershed</b> (divide). The main river receives <b>tributaries</b>; at the sea it ends in a <b>delta</b> (with branches and deposited land: the Po, the Nile, the Mississippi) or an <b>estuary</b> (a funnel open to the sea, where tides are strong: the Thames, the Seine).</p>
<p>A river's course is divided into three stretches:</p>
<ul>
<li><b>upper course</b> (mountain): steep gradient, fast water that <b>erodes</b> and cuts V-shaped valleys;</li>
<li><b>middle course</b>: gentler gradient, transport of sediment;</li>
<li><b>lower course</b> (plain): slow, forms <b>meanders</b> and <b>deposits</b> sediment (alluvium), down to the mouth.</li>
</ul>
<p>The <b>discharge</b> is the volume of water passing through a cross-section in one second (m³/s). The <b>regime</b> is how discharge changes during the year: <b>rain-fed</b> (depends on rainfall: the Apennines), <b>snow-fed</b> or <b>glacier-fed</b> (peak in spring-summer due to melting snow and ice: the Alps), <b>mixed</b>.</p>
<p>Some figures: the <b>Po</b> is Italy's longest river (652 km) and the one with the most water (average discharge at the mouth around 1500 m³/s); the <b>Nile</b> (about 6650 km) and the <b>Amazon</b> (about 6400 km) compete for the title of longest; the Amazon is first for discharge (about 200,000 m³/s, about a fifth of all the fresh water that rivers pour into the oceans).</p>`
    },
    {
      type: "3d",
      title: "The landscape of water",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Glacier", html: "<p>A mass of ice that slowly moves downhill under its own weight. When it melts it feeds rivers and forms glacial lakes.</p>" },
        source: { label: "Source", html: "<p>The point where groundwater or meltwater comes to the surface and the river begins.</p>" },
        river: { label: "River", html: "<p>A stream of water flowing towards the sea or into a lake. It erodes in the mountains and deposits in the plains.</p>" },
        valley: { label: "Valley", html: "<p>Carved by a river (V-shaped) or by a glacier (U-shaped).</p>" },
        lake: { label: "Lake", html: "<p>A body of fresh or salt water surrounded by land. It can be glacial, volcanic, tectonic or formed by a dam.</p>" },
        delta: { label: "Delta", html: "<p>An area at the mouth where the river deposits sediment and splits into several branches.</p>" },
        sea: { label: "Sea", html: "<p>Where the whole cycle ends... and starts again with evaporation.</p>" },
        plain: { label: "Plain", html: "<p>Formed from river sediment (alluvial plain): the Po Valley is the largest plain in Italy.</p>" }
      } },
      caption: "Tap the parts of the landscape: from the source to the delta, follow the path of the water."
    },
    {
      type: "text",
      title: "Lakes, groundwater and glaciers",
      html: `<p><b>Lakes</b>: bodies of water collected in a hollow. By origin:</p>
<ul>
<li><b>glacial</b>: carved or dammed by glaciers (the great lakes at the foot of the Alps: Maggiore, Como, Garda; the American Great Lakes);</li>
<li><b>tectonic</b>: in depressions caused by movements of the crust (Baikal, the deepest, 1642 m, holding about 20% of the world's surface fresh water);</li>
<li><b>volcanic</b>: in craters (Bolsena, Albano, Bracciano: craters and calderas of ancient volcanoes);</li>
<li><b>dammed</b> (landslides, dams), <b>coastal</b> (lagoons), <b>karst</b>.</li>
</ul>
<p>The largest lake in Italy is <b>Lake Garda</b> (368 km²); the deepest is Lake Como (about 410 m).</p>
<p><b>Groundwater</b>: water that infiltrates fills the pores of <b>permeable</b> rocks (sands, gravels, fractured limestones) until it meets an <b>impermeable</b> layer (clay): it forms an <b>aquifer</b>. Where the groundwater reaches the surface there is a <b>spring</b> (in the Po Valley these are called <i>risorgive</i> or <i>fontanili</i>). <b>Wells</b> reach it. In limestone regions water dissolves the rock and creates <b>karst</b> landscapes: caves, sinkholes, underground rivers.</p>
<p><b>Glaciers</b>: large masses of ice formed from snow compacted over years or centuries. The <b>ice sheets</b> (Antarctica and Greenland) contain about 99% of the Earth's ice: if all of Antarctica melted, sea level would rise by about 58 m; Greenland would add about 7 m. <b>Alpine (valley) glaciers</b> flow a few metres a year and are considered sentinels of climate: in 150 years the Alpine glaciers have lost more than half of their volume.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the hydrosphere",
      intro: "If water figures feel too abstract, try these representations.",
      tabs: [
        {
          label: "🥤 A bottle of water",
          html: `<p>Imagine all the water on Earth in a large <b>100-litre</b> tank. The oceans take up 97.5 L. Only 2.5 L are fresh. Of these, almost 1.7 L are ice and about 0.75 L are underground. That leaves about <b>0.03 L: one tablespoon</b> for all the rivers, lakes, soil and moisture in the air. All surface freshwater life depends on that tablespoon, which the water cycle constantly renews.</p>`
        },
        {
          label: "🧂 Why is the sea salty?",
          html: `<p>Rivers slowly dissolve rocks and carry small amounts of mineral salts into the sea; undersea volcanoes and hydrothermal vents add more. Water evaporates and leaves the salts behind: they build up over millions of years. That is why the sea is salty and rivers are not. Yet the salinity of the ocean has stayed roughly constant for hundreds of millions of years, because salts are also removed: deposited on the seabed as rocks (evaporites) or taken up by living things.</p>`
        },
        {
          label: "🧊 Why does ice float?",
          html: `<p>Water is almost unique: as a liquid, when it cools, it contracts down to <b>4 °C</b> (maximum density, 1.000 g/cm³), then below 4 °C it expands and, when it freezes, becomes about 9% less dense (ice 0.92 g/cm³). This is due to <b>hydrogen bonds</b>: in ice the molecules form a hexagonal structure with a lot of empty space. That is why ice floats, lakes freeze from the surface down, and under the ice crust liquid water stays at about 4 °C, where fish and plants survive the winter. If ice sank, lakes would freeze from the bottom up and life would be very different.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "The Aral Sea: the water that vanished",
      html: `<p>In 1960 the Aral Sea, in Central Asia, was the fourth largest lake in the world (about 68,000 km²). In the 1960s the USSR diverted the Amu Darya and Syr Darya rivers to irrigate cotton fields: the lake has lost more than 90% of its surface area and its southern part is now a salt desert (the Aralkum). Rusting ships lie in the sand. It is one of the best-known examples of how human activity can change the water balance of a whole region, with effects on climate, health and fishing.</p>`
    },
    {
      type: "conceptMap",
      title: "Map of the hydrosphere: tap the nodes and find out why",
      nodes: [
        { id: "ciclo", label: "Water cycle", x: 50, y: 6, color: "#3b82f6", html: "Evaporation, condensation, precipitation, runoff.", why: "The cycle was already sensed by the Greeks, but for centuries people thought springs were fed by the sea through underground channels. In the 17th century <b>Pierre Perrault</b> and <b>Edme Mariotte</b> measured rainfall and the discharge of the Seine and showed that precipitation was enough to feed rivers." },
        { id: "oceani", label: "Oceans", x: 20, y: 30, color: "#0ea5e9", html: "97.5% of the water, average salinity 35‰.", why: "Their average depth is about 3700 m: the expedition of the British ship <b>Challenger</b> (1872-76) was the first systematic oceanographic survey and discovered the Mariana Trench." },
        { id: "correnti", label: "Currents", x: 20, y: 56, color: "#22c55e", html: "Surface (wind) and deep (thermohaline).", why: "Surface currents depend on the winds and the Coriolis effect, described by <b>Coriolis</b> in 1835; thermohaline circulation was suggested by <b>Benjamin Thompson (Count Rumford)</b> in 1797 and described by <b>Wallace Broecker</b>, who coined the expression \"conveyor belt\" in the 1980s." },
        { id: "fiumi", label: "Rivers and basins", x: 80, y: 30, color: "#f59e0b", html: "They carry water from the mountains to the sea.", why: "The idea of a drainage basin explains why floods depend on what happens upstream: water from a large area is concentrated in a single section of the river." },
        { id: "laghi", label: "Lakes", x: 80, y: 56, color: "#a855f7", html: "Bodies of mostly fresh water.", why: "Their geological origin (glacial, tectonic, volcanic) ties them to the history of the Earth: the lakes at the foot of the Alps are a legacy of the Quaternary glaciations." },
        { id: "ghiacci", label: "Glaciers", x: 50, y: 70, color: "#06b6d4", html: "69% of fresh water.", why: "Louis Agassiz (1837) was the first to propose that great ice ages had covered Europe, explaining the erratic boulders found far from their parent rocks. Today glaciers are an archive: the air bubbles in Antarctic ice cores tell us about the climate of the last 800,000 years." },
        { id: "falde", label: "Aquifers", x: 20, y: 86, color: "#ef4444", html: "Groundwater (30% of fresh water).", why: "<b>Darcy</b>'s law (1856), worked out while studying the fountains of Dijon, describes how water moves through a porous medium: speed is proportional to the gradient and to the permeability." },
        { id: "uomo", label: "Human use", x: 80, y: 86, color: "#14b8a6", html: "Agriculture (about 70% of withdrawals), industry, domestic use.", why: "Only a small fraction of water is accessible: managing this resource sustainably is one of the great challenges of the century; the Aral Sea is a negative example." }
      ],
      edges: [
        ["ciclo", "oceani", "from the ocean"],
        ["ciclo", "fiumi", "feeds"],
        ["oceani", "correnti", "host"],
        ["fiumi", "laghi", "feed"],
        ["ghiacci", "fiumi", "feed"],
        ["ciclo", "falde", "recharges"],
        ["falde", "uomo", "used by"],
        ["fiumi", "uomo", "used by"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: rivers, lakes, glaciers",
      questions: [
        { type: "mc", q: "Which is the longest river in Italy?", options: ["Tiber", "Po", "Adige"], answer: 1, explain: "The Po is 652 km long and also has the greatest discharge." },
        { type: "tf", q: "Ice floats because it is less dense than liquid water.", answer: true, explain: "Ice 0.92 g/cm³ versus 1.00 g/cm³ for water." },
        { type: "mc", q: "What is the area that collects the water of a river called?", options: ["Drainage basin", "Delta", "Aquifer"], answer: 0, explain: "It is separated from neighbouring basins by the watershed." }
      ]
    }
  ],
  glossary: [
    { t: "Hydrosphere", d: "All the water on Earth in its various states." },
    { t: "Hydrological cycle", d: "The continuous circulation of water between oceans, atmosphere and land." },
    { t: "Salinity", d: "The amount of dissolved salts per kg of water (on average 35‰ in the oceans)." },
    { t: "Ocean current", d: "The movement of large masses of ocean water." },
    { t: "Thermohaline circulation", d: "Deep circulation caused by differences in temperature and salinity." },
    { t: "Drainage basin", d: "The area from which a river collects its water." },
    { t: "Discharge", d: "The volume of water passing through a cross-section of a river in one second." },
    { t: "Regime", d: "How a river's discharge changes over the year." },
    { t: "Delta", d: "A river mouth with several branches and deposits of sediment." },
    { t: "Aquifer", d: "Water that fills the pores of a permeable layer underground." },
    { t: "Glacier", d: "A mass of permanent ice that moves slowly under gravity." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What fraction of fresh water is in glaciers?", options: ["About 69%", "About 10%", "About 0.3%"], answer: 0, explain: "Almost 70% of fresh water is ice, mainly in Antarctica and Greenland." },
      { type: "tf", q: "Most of the Earth's evaporation takes place from the oceans.", answer: true, explain: "About 86% of total evaporation." },
      { type: "mc", q: "What is the water that soaks into the ground called?", options: ["Runoff", "Infiltration", "Condensation"], answer: 1, explain: "Infiltration feeds aquifers." },
      { type: "num", q: "How many litres does 10 mm of rain bring to a 60 m² roof?", answer: 600, unit: "L", explain: "10 L/m² × 60 m² = 600 L." },
      { type: "mc", q: "What is the average salinity of the oceans?", options: ["3.5‰", "35‰", "350‰"], answer: 1, explain: "35 g of salts per kg, that is 35‰ (3.5%)." },
      { type: "mc", q: "In the northern hemisphere, the surface currents of the gyres turn…", options: ["clockwise", "anticlockwise", "randomly"], answer: 0, explain: "Because of the Coriolis effect, which deflects to the right." },
      { type: "tf", q: "Lake Garda is the largest lake in Italy.", answer: true, explain: "About 368 km²." },
      { type: "order", q: "Put the stages of the water cycle in order.", items: ["Evaporation", "Condensation", "Precipitation", "Runoff or infiltration"], explain: "Water rises, forms clouds, falls back and then flows away or soaks in." },
      { type: "text", q: "What is the branching river mouth typical of the Po and the Nile called?", answer: ["delta", "a delta", "the delta"], explain: "A delta forms where the river deposits its sediment." },
      { type: "mc", q: "Why are tsunami waves in the open sea almost unnoticeable?", options: ["They are less than a metre high but enormously long", "They are very slow", "They are sound waves"], answer: 0, explain: "They only rise as they approach the coast, where the seabed slows down the front part." }
    ]
  }
});
