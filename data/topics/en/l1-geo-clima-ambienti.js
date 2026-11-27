TOPIC('en', {
  id: "l1-geo-clima-ambienti",
  title: "Climates and environments of the Earth",
  intro: "Why can you see glaciers at Quito, on the Equator? Why is Oslo milder than Anchorage even though they are at the same latitude? <b>Climate</b> depends on a few factors that combine in ever-different ways and, in turn, it shapes the <b>natural environments</b> (the <b>biomes</b>) where plants, animals and peoples live. What's more, today the climate is <b>changing</b>: let's understand how and why.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Weather and climate",
      html: `<p><b>Weather</b> is the state of the atmosphere in a certain place at a certain moment (today it is raining and it is 12 °C). <b>Climate</b>, on the other hand, is the <b>set of average conditions</b> of a place, calculated over a long period: by convention the World Meteorological Organization (WMO) uses periods of <b>at least thirty years</b> (the current reference period is 1991-2020). Climate is described by averages of <b>temperature</b>, <b>precipitation</b>, <b>humidity</b>, <b>pressure</b> and <b>winds</b>.</p>
<p>A saying helps: <i>\"climate is what you expect, weather is what you get\"</i>. One cold day does not disprove global warming, just as one cough does not disprove a person's good health.</p>
<p>Climate is studied using data from weather stations and is shown with a <b>climate graph</b> (climograph): <b>average monthly temperatures</b> are a line, and <b>monthly precipitation</b> is shown as bars. From a climate graph you can immediately read the <b>annual temperature range</b> (the difference between the warmest and coldest month), the total rainfall and whether there is a dry season.</p>`
    },
    {
      type: "text",
      title: "2. The factors that determine climate",
      html: `<p>The climate of a place depends on <b>astronomical factors</b> and <b>geographic factors</b>:</p>
<ul>
<li><b>Latitude</b> ☀️: the Sun's rays strike almost vertically near the Equator (lots of concentrated heat) and at a low angle near the poles (heat spread over a larger area, and more atmosphere to pass through). That is why the average temperature falls from the Equator to the poles.</li>
<li><b>Altitude</b> ⛰️: in the troposphere temperature drops by about <b>6.5 °C every 1,000 m</b> (the lapse rate). At 3,000 m it is about 20 °C colder than at sea level.</li>
<li><b>Distance from the sea</b> 🌊: water warms up and cools down more slowly than land (high specific heat capacity). Near the sea temperatures are moderated (a <b>maritime</b> climate, small temperature range); inland, in the middle of continents, there is a <b>continental</b> climate (hot summers, cold winters).</li>
<li><b>Ocean currents</b> 🌀: they carry heat. The <b>Gulf Stream</b> brings warm water from the Caribbean towards north-western Europe: thanks to it, Bergen (Norway, 60° N) has much milder winters than Labrador at the same latitude. Cold currents (such as the Humboldt Current, along Chile and Peru) cool the coasts and favour deserts like the <b>Atacama</b>.</li>
<li><b>Winds and air masses</b> 💨: prevailing winds bring moist or dry, warm or cold air. The <b>trade winds</b> blow from the east towards the Equator, the <b>westerlies</b> at mid-latitudes; the <b>monsoons</b> reverse direction between summer and winter and bring torrential rain to India and South-East Asia.</li>
<li><b>Relief and aspect</b> 🏔️: a mountain range stops the clouds on the windward side (<b>relief or orographic rainfall</b>) and leaves the other side in a dry \"rain shadow\". <b>Cherrapunji</b>, on the slopes of the Indian Himalayas, is one of the wettest places in the world (over 11,000 mm a year).</li>
<li><b>Ground cover (albedo)</b>: snow and ice reflect up to 80-90% of sunlight, while the dark sea reflects less than 10%.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: how cold is it at the top?",
      html: `<p>At Courmayeur, at about <b>1,200 m</b>, it is 14 °C at midday. At the same time, what temperature would you expect at Punta Helbronner, at about <b>3,460 m</b>?</p>
<p>Difference in height: 3,460 − 1,200 = 2,260 m. Drop: 2.26 × 6.5 ≈ <b>14.7 °C</b>. Expected temperature: 14 − 14.7 ≈ <b>−0.7 °C</b>, about zero degrees. The calculation is an average estimate (real air can vary with humidity and stability), but it explains why you wear a jacket on mountain tops in summer even if you are sweating in the valley, and why glaciers and permanent snow are found on mountains even near the Equator (Kilimanjaro, at 3° S, has a glacier on its summit).</p>`
    },
    {
      type: "svg",
      title: "Climate graph of a Mediterranean climate",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="70" y1="240" x2="560" y2="240" stroke="#111827" stroke-width="2"/>
<line x1="70" y1="40" x2="70" y2="240" stroke="#111827" stroke-width="2"/>
<g fill="#60a5fa" stroke="#1e3a8a" stroke-width="1">
<rect x="82" y="165" width="26" height="75"/>
<rect x="123" y="170" width="26" height="70"/>
<rect x="164" y="175" width="26" height="65"/>
<rect x="205" y="180" width="26" height="60"/>
<rect x="246" y="205" width="26" height="35"/>
<rect x="287" y="222" width="26" height="18"/>
<rect x="328" y="230" width="26" height="10"/>
<rect x="369" y="226" width="26" height="14"/>
<rect x="410" y="198" width="26" height="42"/>
<rect x="451" y="150" width="26" height="90"/>
<rect x="492" y="142" width="26" height="98"/>
<rect x="533" y="165" width="26" height="75"/>
</g>
<polyline points="95,178 136,172 177,160 218,148 259,128 300,105 341,92 382,95 423,112 464,138 505,160 546,172" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="300" y="25" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mediterranean climate (like Rome): hot, dry summer, mild, rainy winter</text>
<text x="95" y="262" font-size="14" text-anchor="middle" fill="#111827">J</text><text x="259" y="262" font-size="14" text-anchor="middle" fill="#111827">M</text><text x="341" y="262" font-size="14" text-anchor="middle" fill="#111827">J</text><text x="546" y="262" font-size="14" text-anchor="middle" fill="#111827">D</text>
<text x="76" y="285" font-size="14" fill="#dc2626" font-weight="bold">red line = temperature (max in summer)</text>
<text x="340" y="285" font-size="14" fill="#1e3a8a" font-weight="bold">blue bars = rainfall (min in summer)</text>
</svg>`,
      caption: "The temperature peak coincides with the rainfall minimum: this is the signature of the Mediterranean climate (a dry summer season). Values drawn for illustration."
    },
    {
      type: "quiz",
      title: "Mini-quiz: climate factors",
      questions: [
        { type: "mc", q: "On average, by how much does temperature fall when you climb 1,000 m in the troposphere?", options: ["About 0.65 °C", "About 6.5 °C", "About 65 °C"], answer: 1, explain: "The lapse rate is about 6.5 °C every 1,000 m (0.65 °C every 100 m)." },
        { type: "tf", q: "A particularly cold winter proves that the climate is not warming.", answer: false, explain: "Climate is the average over decades; a single winter is weather and can be cold even in a warming climate." },
        { type: "mc", q: "Which current makes north-western Europe milder than its latitude would suggest?", options: ["Humboldt Current", "Gulf Stream", "Labrador Current"], answer: 1, explain: "The Gulf Stream carries warm water from the Caribbean towards the North Atlantic." }
      ]
    },
    {
      type: "text",
      title: "3. The Köppen climate classification",
      html: `<p>There are a great many climates on Earth: to study them, we classify them. The most widely used classification, proposed by the Russian-German climatologist <b>Wladimir Köppen</b> (1884, later revised with Rudolf Geiger up to the 1930s), is based on temperature and precipitation and uses five groups, each shown by a letter:</p>
<ul>
<li><b>A – Tropical climates (hot and humid)</b>: every month above 18 °C. Includes the tropical rainforest climate (rain all year round) and tropical climates with a dry season (savanna, monsoon).</li>
<li><b>B – Dry climates</b>: evaporation exceeds precipitation. <b>Desert</b> (BW) and <b>steppe</b> (BS). They do not depend only on temperature: there are cold deserts, such as the Gobi.</li>
<li><b>C – Temperate climates</b>: the coldest month is between −3 and 18 °C. Includes the <b>Mediterranean</b> (dry summer), the <b>humid subtropical</b> and the <b>oceanic</b> climate (rain spread through the year, mild winters: Ireland, Brittany, the US Pacific Northwest).</li>
<li><b>D – Continental (cold) climates</b>: long, harsh winters (coldest month below −3 °C), hot or cool summers. They are widespread in the northern hemisphere (Russia, Canada).</li>
<li><b>E – Polar climates</b>: no month above 10 °C; tundra and ice caps.</li>
</ul>
<p>In Italy the climate is <b>Mediterranean</b> along the coasts, in the South and on the islands, <b>temperate sub-continental</b> in the Po Valley (cold, foggy winters, hot, muggy summers) and <b>alpine</b> in the mountains, with temperature falling with height.</p>`
    },
    {
      type: "svg",
      title: "The Earth's climate zones",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<rect x="40" y="30" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<rect x="40" y="60" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="90" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="120" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="150" width="520" height="30" fill="#86efac" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="180" width="520" height="30" fill="#fde68a" stroke="#b45309" stroke-width="1"/>
<rect x="40" y="210" width="520" height="30" fill="#bbf7d0" stroke="#15803d" stroke-width="1"/>
<rect x="40" y="240" width="520" height="30" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="50" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Polar (90°-66°N): tundra, ice</text>
<text x="300" y="80" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subpolar (66°-50°N): taiga</text>
<text x="300" y="110" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Temperate (50°-35°N): forests, Mediterranean</text>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropical/desert (35°-23°N)</text>
<text x="300" y="170" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Equatorial: rainforest</text>
<text x="300" y="200" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Subtropical/desert (23°-35°S)</text>
<text x="300" y="230" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Southern temperate</text>
<text x="300" y="260" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Southern polar: Antarctica</text>
<text x="30" y="150" font-size="14" text-anchor="end" fill="#111827">N</text>
<text x="30" y="215" font-size="14" text-anchor="end" fill="#111827">S</text>
</svg>`,
      caption: "Simplified diagram of the main climate groups by latitude band: between the Equator and the poles the sequence roughly follows these bands. Departures from it (seas, mountains, currents) make the real map much more complex."
    },
    {
      type: "text",
      title: "4. Biomes: natural environments",
      html: `<p>A <b>biome</b> is a large group of ecosystems with similar vegetation and wildlife, determined mainly by <b>temperature and precipitation</b>. The main ones are:</p>
<ul>
<li>🌴 <b>Tropical rainforest</b> (Amazon, Congo, Indonesia): always hot and wet, the <b>greatest biodiversity</b> on the planet; poor soils despite the lush vegetation, because the nutrients are in the living biomass rather than in the soil.</li>
<li>🦁 <b>Savanna</b> (East Africa, central Brazil, northern Australia): tall grass and scattered trees, a dry season and a rainy season; large herds of grazing animals.</li>
<li>🏜️ <b>Desert</b> (Sahara, Arabia, Atacama, Gobi, Australia): less than 250 mm of rain a year, big temperature differences between day and night; succulent plants, nocturnal animals.</li>
<li>🌾 <b>Steppe and prairie</b> (central Eurasia, the Great Plains, the Argentine pampas): grass, few trees, very fertile soils (the <i>chernozem</i> of Ukraine and Russia), today largely farmed for cereals.</li>
<li>🌿 <b>Mediterranean scrub</b> (Mediterranean coasts, California, central Chile, South Africa, south-western Australia): evergreen shrubs with tough, leathery leaves (holm oak, myrtle, mastic) adapted to summer drought and fire.</li>
<li>🍂 <b>Temperate forest</b> (Europe, eastern North America, East Asia): deciduous trees (oaks, beeches), with four seasons.</li>
<li>🌲 <b>Taiga</b> (Canada, Scandinavia, Siberia): coniferous forest, the largest in the world; long, extremely cold winters.</li>
<li>❄️ <b>Tundra</b>: mosses and lichens; <b>permafrost</b> (permanently frozen ground below the surface) that prevents trees from growing.</li>
<li>🏔️ <b>High-mountain environments</b>: vegetation changes with altitude in <b>altitudinal zones</b> (broadleaf trees, conifers, pastures, rock and ice), just as it would if you travelled towards the pole.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Activity: match each environment to its climate",
      widget: "classify",
      options: {
        groups: ["Hot and wet all year round", "Dry", "Cold"],
        items: [
          ["🌴 Rainforest", 0],
          ["🏜️ Sahara", 1],
          ["❄️ Tundra", 2],
          ["🌲 Taiga", 2],
          ["🐪 Gobi", 1],
          ["🌊 Congo Basin", 0],
          ["🧊 Antarctica", 2],
          ["🏜️ Atacama", 1]
        ]
      },
      caption: "Drag or select each environment into the right climate category."
    },
    {
      type: "curiosity",
      title: "Did you know… there are cold deserts and an ice desert?",
      html: `<p><b>Antarctica</b> is the largest desert in the world: it receives less than 200 mm of precipitation a year (on average, much less in the interior). A desert is defined not by heat but by <b>lack of rain</b>. Antarctica is also the coldest continent: in 1983 the Russian Vostok station recorded <b>−89.2 °C</b>, the official lowest temperature on Earth. The record heat (54.4 °C) was recorded in Death Valley, California (in 2020 and 2021).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… in the Atacama it can go years without raining?",
      html: `<p>The <b>Atacama Desert</b> (Chile) is the driest non-polar place in the world: in some inland areas there is almost no rain for years. There are two reasons: the <b>Andes</b> block the clouds coming from the Amazon, and the <b>cold Humboldt Current</b> cools the air over the Pacific, preventing rain from forming. NASA uses the Atacama to test instruments designed for Mars.</p>`
    },
    {
      type: "text",
      title: "5. Climate change",
      html: `<p><b>The climate has always changed</b>: ice ages and interglacial periods have alternated for natural reasons (changes in the Earth's orbit, the so-called <b>Milankovitch cycles</b>, solar activity, volcanic eruptions). But for about two centuries the change has been <b>too fast</b> to be explained by natural causes alone: the scientific community, gathered in the <b>IPCC</b> (Intergovernmental Panel on Climate Change, set up in 1988 by the UN and the WMO), concludes that <b>human activities</b> are responsible.</p>
<p>The mechanism is the <b>greenhouse effect</b>: some gases in the atmosphere (<b>water vapour</b>, <b>carbon dioxide CO₂</b>, <b>methane CH₄</b>, nitrous oxide N₂O) let sunlight through but trap part of the heat the Earth gives off as infrared radiation. The <b>natural</b> greenhouse effect is essential: without it the Earth's average temperature would be about <b>−18 °C</b> instead of about +15 °C. The problem is the <b>enhanced</b> greenhouse effect caused by human emissions.</p>
<ul>
<li>Burning <b>coal, oil and gas</b> (fossil fuels) releases CO₂ that built up over millions of years.</li>
<li><b>Deforestation</b> reduces the number of trees that absorb CO₂.</li>
<li><b>Livestock farming</b> and rice paddies produce methane, a much more powerful greenhouse gas than CO₂ (but shorter-lived in the atmosphere).</li>
</ul>
<p><b>The data</b>: the concentration of CO₂ has risen from about <b>280 ppm</b> (parts per million) before the Industrial Revolution to over <b>420 ppm</b> today, the highest level for at least 800,000 years (we know this from gases trapped in air bubbles in Antarctic ice, the <i>ice cores</i>). The global average temperature has risen by about <b>1.1-1.2 °C</b> compared with 1850-1900; recent years are the warmest ever measured. The average sea level has risen by about <b>20 cm</b> since 1900 (due to thermal expansion of water and melting ice).</p>`
    },
    {
      type: "svg",
      title: "How the greenhouse effect works",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="0" y="40" width="600" height="60" fill="#bfdbfe" opacity="0.7"/>
<text x="300" y="75" font-size="16" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Greenhouse gases (CO₂, CH₄, water vapour)</text>
<circle cx="70" cy="40" r="26" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
<line x1="90" y1="55" x2="200" y2="260" stroke="#f59e0b" stroke-width="5"/>
<polygon points="200,260 188,238 210,243" fill="#f59e0b"/>
<rect x="0" y="260" width="600" height="40" fill="#86efac"/>
<line x1="260" y1="255" x2="260" y2="120" stroke="#dc2626" stroke-width="4"/>
<polygon points="260,110 250,130 270,130" fill="#dc2626"/>
<path d="M260 118 C285 95 330 95 345 118" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="345,125 337,106 355,108" fill="#dc2626"/>
<line x1="420" y1="255" x2="420" y2="10" stroke="#dc2626" stroke-width="4" stroke-dasharray="8 6"/>
<polygon points="420,4 410,24 430,24" fill="#dc2626"/>
<text x="215" y="170" font-size="14" fill="#92400e" font-weight="bold">sunlight</text>
<text x="430" y="150" font-size="14" fill="#991b1b" font-weight="bold">heat (infrared)</text>
<text x="430" y="170" font-size="14" fill="#991b1b" font-weight="bold">escaping into space</text>
<text x="275" y="205" font-size="14" fill="#991b1b" font-weight="bold">trapped heat</text>
<text x="300" y="285" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Earth's surface</text>
</svg>`,
      caption: "Part of the heat given off by the Earth escapes into space, part is absorbed by greenhouse gases and sent back down. The more greenhouse gases there are, the more heat stays in."
    },
    {
      type: "example",
      title: "Worked example: the consequences in the Mediterranean and in Italy",
      html: `<p>The Mediterranean basin is considered a climate <b>\"hot spot\"</b>: it is warming faster than the global average. In Italy we can already see:</p>
<ul>
<li>more frequent and longer <b>heatwaves</b> (the summers of 2003 and 2022 are among the hottest);</li>
<li><b>droughts</b> and shrinking Alpine glaciers: the Marmolada has lost much of its glacier, and in July 2022 a collapse caused a tragedy;</li>
<li><b>intense rainfall</b> concentrated in a short time, causing floods (Emilia-Romagna, May 2023);</li>
<li><b>rising sea levels</b> and risk for low-lying coasts, such as the Venice lagoon and the Po delta;</li>
<li>changes for farming (earlier grape harvests, new plant diseases) and for health.</li>
</ul>
<p>We should not confuse <b>adaptation</b> (getting ready: flood defences, new crops, heatwave plans) with <b>mitigation</b> (cutting emissions to slow the process down): we need both.</p>`
    },
    {
      type: "decision",
      title: "What should we do? A choice for a coastal city",
      html: `<p>You are the mayor of a coastal city at risk from ever stronger storm surges. You have a limited budget and two priorities: <b>protecting the coast</b> and <b>cutting the city's emissions</b>.</p>`,
      question: "Which strategy seems most effective in the long run?",
      options: [
        { label: "Only sea walls and barriers", outcome: "It protects in the short term, but it does not stop the causes and can be extremely expensive; hard barriers sometimes damage nearby beaches." },
        { label: "Only cutting local emissions", outcome: "Useful, but one city alone cannot stop climate change: sea level is already rising anyway because of past emissions." },
        { label: "Both: adapt and mitigate", outcome: "This is the approach recommended by the IPCC: adapt to unavoidable changes and at the same time cut emissions to avoid the worst scenarios." }
      ],
      answer: 2,
      explain: "The Paris Agreement (2015) aims to keep the temperature rise \"well below\" 2 °C compared with pre-industrial times and to pursue efforts to limit it to 1.5 °C: mitigation and adaptation go hand in hand."
    },
    {
      type: "alternatives",
      title: "Other ways to understand climate and climate change",
      intro: "Climate is a complex system: here are three analogies to grasp how it works.",
      tabs: [
        {
          label: "🚗 The car in the sun",
          html: `<p>Leave a car in the sun with the windows closed: inside it gets much hotter than outside. Light comes in through the glass and heats the interior, which gives off infrared radiation that the glass <b>traps</b>. Greenhouse gases do the same to the atmosphere: they are the car's glass (even though the atmosphere is not a greenhouse with closed walls and the physics is a little different, the analogy gets the idea across). Adding CO₂ is like fitting thicker glass.</p>`
        },
        {
          label: "🛁 The bathtub",
          html: `<p>Carbon is like the water in a bathtub: the taps are emissions, the plughole is absorption by forests and oceans. Today the taps pour in more than the plughole can drain, so <b>the level rises</b>. If you halve emissions, the bath keeps filling, just more slowly: to stop it you need net zero emissions (as in Europe, which aims for climate neutrality by <b>2050</b>).</p>`
        },
        {
          label: "🧊 Ice cores",
          html: `<p>Scientists drill into the ice of Antarctica and Greenland and pull out cylinders of ice from depths of more than 3 km. The ice forms layer by layer like tree rings and traps tiny bubbles of ancient air: by measuring CO₂ and oxygen isotopes we can reconstruct <b>the temperature and atmosphere of hundreds of thousands of years ago</b>. The Vostok core and the EPICA (Dome C) core show that CO₂ and temperature have always moved together.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#f0f9ff"/><rect x="40" y="20" width="60" height="160" fill="#e0f2fe" stroke="#0369a1" stroke-width="3"/><line x1="40" y1="60" x2="100" y2="60" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="100" x2="100" y2="100" stroke="#0369a1" stroke-width="2"/><line x1="40" y1="140" x2="100" y2="140" stroke="#0369a1" stroke-width="2"/><text x="120" y="45" font-size="15" fill="#111827">recent layers (high CO₂)</text><text x="120" y="125" font-size="15" fill="#111827">ancient layers (lower CO₂)</text><text x="120" y="175" font-size="15" fill="#111827">back to 800,000 years ago</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why climate varies from place to place and over time",
      nodes: [
        { id: "sole", label: "Energy from the Sun", x: 50, y: 6, color: "#f59e0b", html: "The engine of climate: it heats the Earth unevenly.", why: "The Earth is a sphere tilted about 23.4° on its axis: the rays arrive at different angles, and the seasons come from the tilt, not from the distance to the Sun (in January the Earth is closer to the Sun, but it is winter in the northern hemisphere)." },
        { id: "lat", label: "Latitude and altitude", x: 18, y: 32, color: "#2563eb", html: "Further from the Equator and higher up = colder.", why: "At the poles the rays are oblique and pass through more atmosphere; at altitude the air is thinner and holds less heat. The 6.5 °C/km lapse rate comes from measurements made with weather balloons." },
        { id: "mare", label: "Seas and currents", x: 82, y: 32, color: "#0ea5e9", html: "They moderate temperatures and carry heat.", why: "Water has a specific heat capacity about four times that of dry air: it takes a lot of energy to warm it up or cool it down. Currents are driven by winds, the Earth's rotation and differences in temperature and salinity (thermohaline circulation)." },
        { id: "clima", label: "Climate and Köppen", x: 50, y: 52, color: "#16a34a", html: "Five groups: A, B, C, D, E.", why: "Köppen noticed that vegetation reflects climate and used the boundaries between biomes as a guide to define the boundaries between climates: the classification starts from plants." },
        { id: "bioma", label: "Biomes", x: 18, y: 76, color: "#84cc16", html: "Forests, savannas, deserts, steppes, tundra…", why: "Every plant has a range of temperature and water in which it can survive; a biome is the evolutionary response of vegetation and animals to the climate of that area." },
        { id: "serra", label: "Greenhouse effect", x: 82, y: 76, color: "#ef4444", html: "Greenhouse gases trap part of the heat.", why: "It was suggested by Joseph Fourier (1824), demonstrated in the laboratory by John Tyndall (1859) and calculated by Svante Arrhenius (1896), who estimated the effect of doubling CO₂ on temperature." },
        { id: "cc", label: "Climate change", x: 50, y: 94, color: "#dc2626", html: "Rapid warming caused by human emissions.", why: "CO₂ measurements on the Mauna Loa volcano (Hawaii), begun by Charles Keeling in 1958, show the continuous rise in CO₂ (the \"Keeling curve\"); since 1990 the IPCC has summarised the evidence in its reports." }
      ],
      edges: [
        ["sole", "lat", "depends on"],
        ["sole", "mare", "heats"],
        ["lat", "clima", "determine the"],
        ["mare", "clima", "determine the"],
        ["clima", "bioma", "shapes the"],
        ["sole", "serra", "trapped by the"],
        ["serra", "cc", "amplified → "],
        ["cc", "clima", "alters the"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Weather</b> = the state of the atmosphere at a given moment; <b>climate</b> = averages over many years.</li>
<li>Factors: latitude, altitude (−6.5 °C/1,000 m), distance from the sea, currents, winds, relief.</li>
<li>Köppen: A tropical, B dry, C temperate, D continental, E polar.</li>
<li>Biomes: rainforest, savanna, desert, steppe, Mediterranean scrub, temperate forest, taiga, tundra.</li>
<li>Natural <b>greenhouse effect</b> (+15 °C instead of −18 °C) and the <b>enhanced greenhouse effect</b> from human emissions (CO₂ from ~280 to over 420 ppm; +1.1-1.2 °C).</li>
<li>Responses: <b>mitigation</b> and <b>adaptation</b>; the 2015 Paris Agreement.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: biomes and climate change",
      questions: [
        { type: "mc", q: "Which biome has permanently frozen ground below the surface (permafrost)?", options: ["Savanna", "Tundra", "Mediterranean scrub"], answer: 1, explain: "The tundra has permafrost, which prevents trees from putting down deep roots." },
        { type: "tf", q: "Without the natural greenhouse effect the Earth would be warmer.", answer: false, explain: "Without natural greenhouse gases the average temperature would be around −18 °C: the natural greenhouse effect is essential for life." },
        { type: "mc", q: "Cutting greenhouse gas emissions to slow down warming is called…", options: ["Adaptation", "Mitigation", "Offsetting"], answer: 1, explain: "Mitigation = reducing the causes; adaptation = reducing the damage from effects already under way." }
      ]
    }
  ],
  glossary: [
    { t: "Climate", d: "The set of average atmospheric conditions of a place, assessed over a long period (at least 30 years)." },
    { t: "Weather", d: "The state of the atmosphere at a specific place and moment." },
    { t: "Climate graph", d: "Chart showing the average monthly temperatures (line) and precipitation (bars) of a place." },
    { t: "Temperature range", d: "Difference between the maximum and minimum temperature (daily or annual)." },
    { t: "Biome", d: "Large group of ecosystems with similar vegetation and wildlife, resulting from a particular climate." },
    { t: "Permafrost", d: "Ground that stays frozen all year round, typical of the tundra and northern taiga." },
    { t: "Greenhouse effect", d: "Process by which some atmospheric gases trap part of the heat given off by the Earth." },
    { t: "IPCC", d: "Intergovernmental Panel on Climate Change: collects and summarises scientific research on climate." },
    { t: "Mitigation", d: "Actions to cut greenhouse gas emissions and slow down climate change." },
    { t: "Adaptation", d: "Actions to reduce the damage from the effects of climate change already under way." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the difference between weather and climate?", options: ["None, they mean the same thing", "Weather is the state at a given moment, climate is the average over many years", "Climate changes every day, weather every year"], answer: 1, explain: "Climate describes the average conditions of a place over a long period; weather is what happens at a specific moment." },
      { type: "num", q: "In a place at sea level it is 24 °C. What temperature (°C) would you expect at 2,000 m (with a lapse rate of 6.5 °C/km)?", answer: 11, tol: 0.5, unit: "°C", explain: "Drop: 2 × 6.5 = 13 °C. Temperature: 24 − 13 = 11 °C." },
      { type: "mc", q: "Why does Bergen (Norway) have milder winters than places in Canada at the same latitude?", options: ["Because of the Gulf Stream", "Because of its higher altitude", "Because of the monsoons"], answer: 0, explain: "The Gulf Stream carries warm water into the North Atlantic, moderating Norway's climate." },
      { type: "mc", q: "The Mediterranean climate is characterised by…", options: ["a dry summer and a mild, rainy winter", "rain all year and cool summers", "extremely harsh winters"], answer: 0, explain: "Hot, dry summers and mild, wet winters: this is the climate of the Mediterranean coasts." },
      { type: "text", q: "What is the great coniferous forest biome of the northern hemisphere (Canada, Scandinavia, Siberia) called?", answer: ["taiga", "the taiga", "boreal forest"], explain: "The taiga is the largest forest in the world, made up of conifers." },
      { type: "tf", q: "The effects of climate change only affect the polar regions.", answer: false, explain: "There are effects everywhere: heatwaves, droughts, floods, rising seas, retreating Alpine glaciers." },
      { type: "order", q: "Put in order from the lowest to the highest concentration of CO₂ in the atmosphere.", items: ["Pre-industrial era (~280 ppm)", "1950s (~315 ppm)", "2000s (~370 ppm)", "Today (over 420 ppm)"], explain: "CO₂ has risen steadily since the Industrial Revolution; the Keeling curve has shown this since 1958." },
      { type: "mc", q: "Which Köppen group includes climates with no month above 10 °C?", options: ["A", "C", "E"], answer: 2, explain: "Group E is the polar climates: tundra and ice." },
      { type: "num", q: "What would the Earth's average temperature be without the natural greenhouse effect (in °C)?", answer: -18, tol: 1, unit: "°C", explain: "About −18 °C, compared with today's +15 °C: the natural greenhouse effect is worth about 33 °C." },
      { type: "mc", q: "Which of these actions is adaptation (and not mitigation)?", options: ["Building barriers against storm surges", "Switching to solar energy", "Planting forests to absorb CO₂"], answer: 0, explain: "Barriers reduce the damage from an effect already under way; the other two actions reduce CO₂ and so are mitigation." }
    ]
  }
});
