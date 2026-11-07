TOPIC('en', {
  id: `m1-geo-clima-ambienti`,
  title: `Climates and environments`,
  intro: `Why can you walk around in a T-shirt in Palermo in winter while in Moscow people ski on ice? Why do fir trees grow in the Alps and olive trees in Sicily? It all depends on <b>climate</b>, which in turn depends on latitude, altitude, the sea and the winds. Europe has very different climates, and each one has its own natural <b>environments</b>, with plants and animals adapted to them.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Weather and climate`,
      html: `<p>Be careful not to mix them up:</p><ul><li><b>weather</b> is the state of the atmosphere in a place at a precise <b>moment</b> ("today in Turin it is raining and it is 12 °C");</li><li><b>climate</b> is the set of <b>average</b> conditions of a place, calculated over a long period, usually <b>30 years</b> ("in Turin winters are cold and summers are hot and muggy").</li></ul><p>The <b>elements</b> of climate are the things we measure: <b>temperature</b> (thermometer), <b>precipitation</b> (rain gauge, in mm), <b>humidity</b> (hygrometer), <b>pressure</b> (barometer), <b>winds</b> (anemometer and wind vane).</p><p>An important figure is the <b>annual temperature range</b>: the difference between the average temperature of the hottest month and that of the coldest month.</p>`
    },
    {
      type: `text`,
      title: `2. Climate factors: why climates are different`,
      html: `<ol><li><b>Latitude</b>: near the Equator the Sun's rays arrive almost perpendicular and heat a lot; towards the poles they arrive slanted and the same energy is spread over a larger surface. That is why the further north you go, the colder it gets.</li><li><b>Altitude</b>: as you go up the air is thinner and holds less heat. The temperature drops on average by about <b>0.6 °C every 100 m</b> (about 6 °C every 1,000 m).</li><li><b>Distance from the sea</b>: water heats up and cools down more slowly than land. The sea <b>moderates</b> the climate: milder winters, cooler summers, small temperature range. Inside the continents the range is large.</li><li><b>Ocean currents</b>: the <b>Gulf Stream</b> (with its continuation, the North Atlantic Current) carries warm water from the Caribbean to the coasts of western Europe and Norway, making them much milder than other areas at the same latitude.</li><li>Prevailing <b>winds</b>: in Europe mostly <b>westerly winds</b> blow from the Atlantic, moist and mild.</li><li><b>Relief</b>: mountains act as a barrier. The Alps shelter Italy from the cold northern winds; the side facing the moist winds gets more rain.</li></ol>`
    },
    {
      type: `svg`,
      title: `Why is it colder at the poles?`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#0f172a"/><circle cx="420" cy="160" r="130" fill="#38bdf8"/><path d="M420 30 A130 130 0 0 1 525 85 L420 160 Z" fill="#e0f2fe" opacity="0.6"/><ellipse cx="420" cy="160" rx="130" ry="14" fill="none" stroke="#f97316" stroke-width="3"/><text x="430" y="182" font-size="15" font-family="sans-serif" fill="#7c2d12" font-weight="bold">Equator</text><g stroke="#fde047" stroke-width="5"><line x1="20" y1="145" x2="290" y2="145"/><line x1="20" y1="175" x2="290" y2="175"/><line x1="20" y1="45" x2="359" y2="45"/><line x1="20" y1="75" x2="322" y2="75"/></g><text x="40" y="130" font-size="15" font-family="sans-serif" fill="#fde047">almost perpendicular rays:</text><text x="40" y="205" font-size="15" font-family="sans-serif" fill="#fde047">concentrated energy → hot</text><rect x="288" y="145" width="6" height="30" fill="#ef4444"/><path d="M359 45 L322 75" stroke="#3b82f6" stroke-width="8"/><text x="40" y="30" font-size="15" font-family="sans-serif" fill="#93c5fd">slanted rays: energy spread over more space → cold</text><text x="420" y="300" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#e2e8f0">same amount of rays, different surfaces</text></svg>`,
      caption: `Two identical beams of rays: at the Equator they hit a small surface (in red), near the pole a much larger surface (in blue). Each square metre receives less energy.`
    },
    {
      type: `example`,
      title: `Worked example: climbing a mountain`,
      html: `<p>In <b>Courmayeur</b> (about 1,200 m) it is 20 °C. How many degrees will it be at <b>Punta Helbronner</b> (about 3,460 m), which you can reach by cable car?</p><ol><li>Difference in height: 3,460 − 1,200 = 2,260 m</li><li>Temperature drop: 2,260 : 100 × 0.6 ≈ 13.6 °C</li><li>Temperature at the top: 20 − 13.6 ≈ <b>6 °C</b></li></ol><p>That is why in the mountains, even in midsummer, you always need a jacket!</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 1`,
      questions: [
        { type: `tf`, q: `Climate is the state of the atmosphere today.`, answer: false, explain: `That is the weather; climate is the average over at least 30 years.` },
        { type: `num`, q: `By about how many degrees does the temperature drop when you climb 1,000 m?`, answer: 6, tol: 0.5, unit: `°C`, explain: `About 0.6 °C every 100 m, so about 6 °C every 1,000 m.` },
        { type: `mc`, q: `Which current makes the coasts of Norway mild?`, options: [`Labrador Current`, `Gulf Stream (North Atlantic)`, `Humboldt Current`, `None`], answer: 1, explain: `It carries warm water from the Caribbean towards north-western Europe.` }
      ]
    },
    {
      type: `text`,
      title: `3. The climate zones of the Earth and of Europe`,
      html: `<p>The tropics and the polar circles divide the Earth into <b>astronomical zones</b>: a <b>torrid</b> zone (between the tropics), two <b>temperate</b> zones and two <b>polar</b> zones. Europe lies almost entirely in the <b>northern temperate</b> zone, with the far north in the polar zone. Within it we find these climates:</p><table><tr><th>Climate</th><th>Where</th><th>Features</th></tr><tr><td><b>Oceanic (Atlantic)</b></td><td>Ireland, Great Britain, western France, Belgium, the Netherlands, Norwegian coasts</td><td>Mild winters, cool summers, frequent rain all year round, small temperature range</td></tr><tr><td><b>Continental</b></td><td>Central and eastern Europe (eastern Germany, Poland, Ukraine, European Russia)</td><td>Long, very cold winters, hot summers, rain mostly in summer, large range</td></tr><tr><td><b>Mediterranean</b></td><td>Coasts of Spain, southern France, Italy, Greece, Croatia</td><td>Hot, dry summers, mild, rainy winters</td></tr><tr><td><b>Alpine (mountain)</b></td><td>Alps, Pyrenees, Carpathians, Caucasus</td><td>Cold, snowy winters, cool summers; changes with altitude</td></tr><tr><td><b>Subarctic (boreal)</b></td><td>Inland Scandinavia, Finland, northern Russia</td><td>Very long, freezing winters, short summers</td></tr><tr><td><b>Polar (tundra)</b></td><td>Northern Iceland, far north of Scandinavia and Russia, Svalbard</td><td>Cold almost all year, frozen ground (permafrost)</td></tr><tr><td><b>Steppe (semi-arid)</b></td><td>Southern Russia, Caspian coasts, part of inland Spain</td><td>Little rain, hot summers, cold winters</td></tr></table>`
    },
    {
      type: `3d`,
      title: `The zones on the globe`,
      scene: `globe`,
      options: {
        points: [
          { lat: 53.35, lon: -6.26, label: `Dublin – oceanic`, color: `#0ea5e9` },
          { lat: 55.76, lon: 37.62, label: `Moscow – continental`, color: `#7c3aed` },
          { lat: 38.12, lon: 13.36, label: `Palermo – Mediterranean`, color: `#f59e0b` },
          { lat: 46.0, lon: 7.75, label: `Zermatt – alpine`, color: `#78716c` },
          { lat: 65.0, lon: 25.47, label: `Oulu (Finland) – subarctic`, color: `#15803d` },
          { lat: 78.22, lon: 15.65, label: `Svalbard – polar`, color: `#e2e8f0` },
          { lat: 46.35, lon: 48.04, label: `Astrakhan – steppe`, color: `#ca8a04` },
          { lat: 69.65, lon: 18.96, label: `Tromsø – mild for its latitude (Gulf Stream)`, color: `#06b6d4` }
        ]
      },
      caption: `Rotate the globe: Tromsø is beyond the Arctic Circle, but thanks to the Gulf Stream its harbour does not freeze in winter.`
    },
    {
      type: `text`,
      title: `4. The natural environments of Europe`,
      html: `<p>Each climate favours certain <b>vegetation</b> and certain <b>animals</b>: together they form an <b>environment</b> (or biome).</p><ul><li><b>Tundra</b> (polar climate): no trees, only mosses, lichens and dwarf shrubs. Animals: reindeer, arctic foxes, lemmings, migratory birds.</li><li><b>Taiga</b> or coniferous forest (subarctic climate): huge forests of <b>firs, pines, larches, birches</b>. Animals: elks, wolves, brown bears, lynxes.</li><li><b>Broadleaf forest</b> (oceanic and humid continental climate): <b>oaks, beeches, chestnuts, hornbeams</b> that lose their leaves in autumn. Today largely replaced by fields and cities. Animals: deer, wild boars, squirrels, foxes.</li><li><b>Prairie and steppe</b> (dry continental and steppe climate): vast grasslands; today farmed with cereals (Ukraine's "breadbasket"). Animals: rodents, birds of prey, saigas.</li><li><b>Mediterranean scrub (maquis)</b> (Mediterranean climate): evergreen shrubs with small, tough leaves to resist drought: <b>holm oak, strawberry tree, myrtle, mastic, broom, rosemary</b>, and crops of olives, vines, citrus fruits.</li><li><b>Alpine environment</b>: vegetation changes as you go up, in <b>belts</b> (see below). Animals: ibexes, chamois, marmots, golden eagles.</li></ul>`
    },
    {
      type: `svg`,
      title: `Climbing a mountain is like travelling towards the Pole`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#e0f2fe"/><polygon points="60,300 300,20 540,300" fill="#a3a3a3"/><polygon points="250,78 300,20 350,78" fill="#ffffff"/><polygon points="215,118 250,78 350,78 385,118" fill="#a8a29e"/><polygon points="170,170 215,118 385,118 430,170" fill="#86efac"/><polygon points="120,228 170,170 430,170 480,228" fill="#15803d"/><polygon points="60,300 120,228 480,228 540,300" fill="#65a30d"/><g font-family="sans-serif" font-size="14" fill="#0f172a"><text x="345" y="45">permanent snow ≈ pole</text><text x="345" y="62">(above 2,800–3,000 m)</text><text x="375" y="100">rocks and lichens</text><text x="375" y="116">≈ tundra</text><text x="440" y="150">alpine meadows</text><text x="440" y="166">(2,000–2,500 m)</text><text x="470" y="205" fill="#14532d">conifers ≈ taiga</text><text x="470" y="221" fill="#14532d">(1,000–2,000 m)</text><text x="10" y="270" fill="#14532d">broadleaf trees and crops</text><text x="10" y="286" fill="#14532d">(up to 1,000 m)</text></g><text x="300" y="316" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">approximate heights, in the Alps; they change with exposure to the sun</text></svg>`,
      caption: `The vegetation belts on a mountain repeat, in a few kilometres of climbing, what you would meet travelling thousands of kilometres north.`
    },
    {
      type: `widget`,
      title: `Match the environment to its inhabitant`,
      widget: `match`,
      options: { pairs: [ [`Tundra`, `🦌 Reindeer`], [`Taiga`, `🫎 Elk`], [`Broadleaf forest`, `🐗 Wild boar`], [`Mediterranean scrub`, `🌿 Strawberry tree and myrtle`], [`Alpine environment`, `🐐 Ibex`], [`Steppe`, `🌾 Grasslands and cereals`] ] },
      caption: `Every environment has its own plants and animals.`
    },
    {
      type: `text`,
      title: `5. The climates of Italy`,
      html: `<p>Italy is long and narrow, crossed by mountains and surrounded by the sea: that is why it has different climates in a small space.</p><ul><li><b>Alpine</b>: in the Alps, cold, snowy winters, cool summers.</li><li><b>Po Valley</b> (continental): in the Po Valley, cold winters with fog, hot and muggy summers, large temperature range. The Alps block the cold winds, but also the exchange of air (and pollution stagnates).</li><li><b>Apennine</b>: on the central-southern mountains, cold, snowy winters, fairly cool summers.</li><li><b>Mediterranean</b>: on the coasts and islands, mild winters, hot, dry summers. On the <b>Adriatic</b> coast winters are colder (the <b>bora</b> wind from the north-east), on the <b>Tyrrhenian</b> coast milder.</li></ul>`
    },
    {
      type: `example`,
      title: `Worked example: reading a climate graph`,
      html: `<p>A <b>climate graph</b> shows the average monthly temperatures (line) and precipitation (columns). Let's compare three cities (approximate average values):</p><table><tr><th></th><th>January</th><th>July</th><th>Range</th><th>Rain/year</th></tr><tr><td><b>Rome</b> (Mediterranean)</td><td>≈ 8 °C</td><td>≈ 25 °C</td><td>≈ 17 °C</td><td>≈ 800 mm, little in summer</td></tr><tr><td><b>Moscow</b> (continental)</td><td>≈ −6 °C</td><td>≈ 19 °C</td><td>≈ 25 °C</td><td>≈ 700 mm, mostly in summer</td></tr><tr><td><b>London</b> (oceanic)</td><td>≈ 5 °C</td><td>≈ 19 °C</td><td>≈ 14 °C</td><td>≈ 600 mm, spread over the whole year</td></tr></table><p>Calculation for Moscow: 19 − (−6) = 19 + 6 = <b>25 °C</b> range. The further you get from the sea, the larger the range.</p>`
    },
    {
      type: `svg`,
      title: `Climate graph of Rome`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="320" fill="#ffffff"/><line x1="60" y1="270" x2="560" y2="270" stroke="#334155" stroke-width="2"/><line x1="60" y1="30" x2="60" y2="270" stroke="#dc2626" stroke-width="2"/><line x1="560" y1="30" x2="560" y2="270" stroke="#2563eb" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#dc2626" text-anchor="end"><text x="55" y="274">0 °C</text><text x="55" y="194">10</text><text x="55" y="114">20</text><text x="55" y="34">30</text></g><g font-family="sans-serif" font-size="12" fill="#2563eb"><text x="565" y="274">0 mm</text><text x="565" y="194">40</text><text x="565" y="114">80</text><text x="565" y="34">120</text></g><g fill="#93c5fd"><rect x="70" y="136" width="28" height="134"/><rect x="111" y="124" width="28" height="146"/><rect x="152" y="154" width="28" height="116"/><rect x="193" y="108" width="28" height="162"/><rect x="234" y="164" width="28" height="106"/><rect x="275" y="202" width="28" height="68"/><rect x="316" y="232" width="28" height="38"/><rect x="357" y="196" width="28" height="74"/><rect x="398" y="124" width="28" height="146"/><rect x="439" y="44" width="28" height="226"/><rect x="480" y="48" width="28" height="222"/><rect x="521" y="108" width="28" height="162"/></g><polyline points="84,206 125,198 166,182 207,158 248,126 289,94 330,70 371,70 412,102 453,134 494,174 535,198" fill="none" stroke="#dc2626" stroke-width="4"/><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="84" y="288">J</text><text x="125" y="288">F</text><text x="166" y="288">M</text><text x="207" y="288">A</text><text x="248" y="288">M</text><text x="289" y="288">J</text><text x="330" y="288">J</text><text x="371" y="288">A</text><text x="412" y="288">S</text><text x="453" y="288">O</text><text x="494" y="288">N</text><text x="535" y="288">D</text></g><text x="300" y="20" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#0f172a" font-weight="bold">Rome: hot, dry summer, rainy autumn</text><text x="310" y="312" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#475569">red line = average temperature · blue columns = rain</text></svg>`,
      caption: `Approximate average values. Look at July: highest temperature and lowest rainfall. That is the signature of the Mediterranean climate.`
    },
    {
      type: `curiosity`,
      title: `Palm trees in Ireland?`,
      html: `<p>On the south-western coasts of <b>Ireland</b> and <b>Cornwall</b> (England), at the same latitude as southern Canada, palm trees and subtropical plants grow in gardens! Thanks to the <b>Gulf Stream</b>, it rarely freezes there in winter. Labrador, in Canada, at the same latitude, is covered in snow for months.</p>`
    },
    {
      type: `curiosity`,
      title: `Glaciers as thermometers`,
      html: `<p>Alpine glaciers are climate "thermometers": they grow longer in cold years and retreat in warm ones. Today they are retreating quickly because of <b>global warming</b>: Europe is warming faster than the world average. In 2022, an exceptionally hot summer, the collapse of a serac of the <b>Marmolada</b> glacier caused a tragedy. Glaciologists photograph glaciers every year to measure how they change.</p>`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand it`,
      intro: `If the climate factors seem like a lot, try these paths.`,
      tabs: [
        { label: `🔦 The torch`, html: `<p>In a dark room, point a torch straight at a sheet of paper: you see a small, very bright circle. Now tilt it: the light spreads into a larger, weaker ellipse. The amount of light is the same, but it is spread over more space. That is what happens to the Sun's rays towards the poles: that is why <b>latitude</b> is the first climate factor.</p>` },
        { label: `🍲 The pot of water`, html: `<p>Put an empty pot and a pot of water on the stove: the empty pot (the <b>land</b>) gets scorching hot in a moment and cools down at once; the water (the <b>sea</b>) heats up slowly and stays warm for a long time. That is why cities near the sea have less scorching summers and less cold winters: the sea acts as a "radiator" in winter and an "air conditioner" in summer.</p>` },
        { label: `🏔️ The mountain in 3D`, html: `<p>Rotate the landscape and tap the parts: from the sea to the summit the climate changes as if you were travelling towards the Pole.</p>`, scene: `terrain`, options: { features: { sea: { label: `Sea`, html: `It moderates the climate: mild winters, less hot summers. On the coasts: <b>Mediterranean</b> climate, scrub, olive trees.` }, plain: { label: `Plain`, html: `Far from the sea (like the Po Valley) the range increases: cold winters with fog, muggy summers.` }, hill: { label: `Hill`, html: `<b>Broadleaf</b> woods (oaks, chestnuts) and vineyards.` }, mountain: { label: `Mountain`, html: `The higher you go, the colder it gets (−0.6 °C every 100 m): <b>coniferous</b> woods, like in the taiga.` }, peak: { label: `Peak`, html: `Rocks, mosses, lichens: a landscape similar to the <b>tundra</b>.` }, glacier: { label: `Glacier`, html: `Permanent snow: like at the <b>poles</b>. But glaciers are retreating because of global warming.` } } } },
        { label: `🌍 Humboldt's journey`, html: `<p>In 1802 the German naturalist <b>Alexander von Humboldt</b> climbed the Chimborazo volcano in Ecuador and noticed that plants changed as he went up exactly as they change when you move from the Equator towards the poles. He drew a famous chart, the "Naturgemälde", which is at the origin of the study of environments and of ecology.</p>`, scene: `globe`, options: { points: [ { lat: -1.47, lon: -78.82, label: `Chimborazo (Humboldt, 1802)`, color: `#dc2626` }, { lat: 0, lon: -50, label: `Torrid zone`, color: `#f97316` }, { lat: 45, lon: 10, label: `Temperate zone`, color: `#16a34a` }, { lat: 75, lon: 20, label: `Polar zone`, color: `#0ea5e9` } ] } }
      ]
    },
    {
      type: `widget`,
      title: `What climate does this city have?`,
      widget: `classify`,
      options: { groups: [`Oceanic`, `Continental`, `Mediterranean`], items: [ [`Dublin`, 0], [`London`, 0], [`Brest (France)`, 0], [`Moscow`, 1], [`Warsaw`, 1], [`Kyiv`, 1], [`Athens`, 2], [`Palermo`, 2], [`Seville`, 2] ] },
      caption: `Think about how close it is to the Atlantic, inside the continent or by the Mediterranean.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz 2`,
      questions: [
        { type: `mc`, q: `Which environment is made up of large coniferous forests?`, options: [`Tundra`, `Taiga`, `Steppe`, `Mediterranean scrub`], answer: 1, explain: `The taiga, typical of the subarctic climate.` },
        { type: `num`, q: `In Warsaw the January average is −2 °C and the July average is 19 °C. What is the annual temperature range?`, answer: 21, tol: 0, unit: `°C`, explain: `19 − (−2) = 19 + 2 = 21 °C.` },
        { type: `tf`, q: `The Mediterranean climate has hot, dry summers and mild, rainy winters.`, answer: true, explain: `It is the climate of the Italian coasts.` }
      ]
    },
    {
      type: `conceptMap`,
      title: `Concept map: from the Sun to environments`,
      nodes: [
        { id: `sole`, label: `Energy from the Sun`, x: 50, y: 6, color: `#f59e0b`, html: `<p>The engine of the whole climate.</p>`, why: `<p>The Earth is a sphere and its axis is tilted by about 23.4°: so the rays arrive at different angles depending on latitude and season.</p>` },
        { id: `latitudine`, label: `Latitude`, x: 15, y: 28, color: `#dc2626`, html: `<p>Torrid, temperate and polar zones.</p>`, why: `<p>The Greeks (Parmenides, Aristotle) already divided the Earth into zones (klimata = "inclinations"): the word <b>climate</b> comes from the Greek <i>klíma</i>, the "inclination" of the Sun's rays!</p>` },
        { id: `altitudine`, label: `Altitude`, x: 38, y: 30, color: `#78716c`, html: `<p>About −0.6 °C every 100 m.</p>`, why: `<p>Rising air expands because the pressure is lower, and as it expands it cools. Also, high up the air is thinner and holds less heat.</p>` },
        { id: `mare`, label: `Sea and currents`, x: 62, y: 30, color: `#0ea5e9`, html: `<p>They moderate the climate; Gulf Stream.</p>`, why: `<p>Water has a high <b>specific heat</b>: it takes a lot of energy to heat it and it releases it slowly. The Gulf Stream was described and mapped by Benjamin Franklin in 1770.</p>` },
        { id: `venti`, label: `Winds and relief`, x: 85, y: 28, color: `#475569`, html: `<p>Westerly winds, the Alps as a barrier.</p>`, why: `<p>Winds are caused by differences in pressure between warm and cold areas; mountains force moist air to rise, cool down and drop rain on one side.</p>` },
        { id: `climi`, label: `European climates`, x: 50, y: 55, color: `#7c3aed`, html: `<p>Oceanic, continental, Mediterranean, alpine, subarctic, polar, steppe.</p>`, why: `<p>The most widely used classification is the one by climatologist Wladimir Köppen (1900, later updated), based on temperatures, rainfall and vegetation.</p>` },
        { id: `ambienti`, label: `Environments (biomes)`, x: 25, y: 82, color: `#16a34a`, html: `<p>Tundra, taiga, broadleaf forest, steppe, scrub, alpine environment.</p>`, why: `<p>Plants and animals adapted over the course of evolution: the needle-shaped leaves of conifers resist frost, the small, tough leaves of the scrub hold on to water.</p>` },
        { id: `uomo`, label: `Humans and climate change`, x: 75, y: 82, color: `#be123c`, html: `<p>Farming, cities, CO₂ emissions, global warming.</p>`, why: `<p>Since the Industrial Revolution we have been burning coal, oil and gas, which release carbon dioxide: the greenhouse effect increases. Data from thermometers, satellites and ice cores show that the Earth has warmed by more than 1 °C.</p>` }
      ],
      edges: [ [`sole`, `latitudine`, `inclination`], [`latitudine`, `climi`, ``], [`altitudine`, `climi`, ``], [`mare`, `climi`, ``], [`venti`, `climi`, ``], [`climi`, `ambienti`, `determine`], [`ambienti`, `uomo`, `resources`], [`uomo`, `climi`, `changes`] ]
    }
  ],
  glossary: [
    { t: `Weather`, d: `Conditions of the atmosphere in a precise place and moment.` },
    { t: `Climate`, d: `Average conditions of the atmosphere of a place, calculated over at least 30 years.` },
    { t: `Temperature range`, d: `Difference between the highest and the lowest temperature in a period.` },
    { t: `Precipitation`, d: `Water falling from the atmosphere: rain, snow, hail; measured in mm.` },
    { t: `Gulf Stream`, d: `Warm ocean current that flows from the Gulf of Mexico to north-western Europe.` },
    { t: `Climate graph`, d: `Graph showing the average monthly temperatures and precipitation of a place.` },
    { t: `Tundra`, d: `Polar environment without trees, with mosses and lichens.` },
    { t: `Taiga`, d: `Great coniferous forest of the subarctic regions.` },
    { t: `Mediterranean scrub`, d: `Vegetation of evergreen shrubs adapted to summer drought.` },
    { t: `Permafrost`, d: `Permanently frozen ground.` },
    { t: `Biome`, d: `Large natural environment with a typical climate, vegetation and wildlife.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Over how many years are the averages that define a climate usually calculated?`, options: [`1 year`, `5 years`, `30 years`, `1,000 years`], answer: 2, explain: `At least 30 years.` },
      { type: `mc`, q: `Which of these is NOT a climate factor?`, options: [`Latitude`, `Altitude`, `Distance from the sea`, `Number of inhabitants of a city`], answer: 3, explain: `The factors are latitude, altitude, sea, currents, winds, relief.` },
      { type: `tf`, q: `The sea makes the temperature range larger.`, answer: false, explain: `The sea reduces it: milder winters and cooler summers.` },
      { type: `num`, q: `At the foot of a mountain (500 m) it is 18 °C. About how many degrees is it at 1,500 m?`, answer: 12, tol: 0.5, unit: `°C`, explain: `1,000 m of height difference → about −6 °C: 18 − 6 = 12 °C.` },
      { type: `mc`, q: `What climate does Moscow have?`, options: [`Oceanic`, `Continental`, `Mediterranean`, `Polar`], answer: 1, explain: `Very cold winters and hot summers, far from the sea.` },
      { type: `text`, q: `What is the name of the polar environment without trees, with mosses and lichens?`, answer: [`tundra`, `the tundra`], explain: `The tundra.` },
      { type: `mc`, q: `Which plant is typical of the Mediterranean scrub?`, options: [`Norway spruce`, `Strawberry tree`, `Dwarf birch`, `Larch`], answer: 1, explain: `The strawberry tree, together with holm oak, myrtle and mastic.` },
      { type: `order`, q: `Put the vegetation belts in order from the foot to the summit of an alpine mountain`, items: [`Broadleaf trees and crops`, `Conifers`, `Alpine meadows`, `Rocks, mosses and lichens`, `Permanent snow`], explain: `As you go up the climate gets colder and colder.` },
      { type: `num`, q: `In Moscow the January average is −6 °C and the July average is 19 °C. What is the annual temperature range?`, answer: 25, tol: 0, unit: `°C`, explain: `19 − (−6) = 25 °C.` },
      { type: `mc`, q: `What climate does the Po Valley have?`, options: [`Mediterranean`, `Po Valley/continental, with cold, foggy winters`, `Polar`, `Oceanic`], answer: 1, explain: `Far from the sea and enclosed by mountains, it has a large temperature range.` },
      { type: `tf`, q: `The word "climate" comes from Greek and means "inclination".`, answer: true, explain: `It refers to the inclination of the Sun's rays.` }
    ],
    gen: [ [`intAdd`, 2] ]
  }
});
