TOPIC('en', {
  id: "m3-geo-america",
  title: "The Americas",
  intro: "The American continent stretches for about <b>14,000 km</b> from the Canadian Arctic to Tierra del Fuego, close to Antarctica: it crosses every climate on Earth. It is divided into <b>North America</b>, <b>Central America</b> (with the Caribbean) and <b>South America</b>. It is also the continent where millions of Italians emigrated.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. A very long continent",
      html: `<ul>
<li><b>Area</b>: about 42.5 million km² (North and Central about 24.7; South about 17.8).</li>
<li><b>Population</b>: about 1.05 billion.</li>
<li><b>Oceans</b>: Atlantic to the east, Pacific to the west, Arctic to the north.</li>
<li>North and South America are joined by the <b>Isthmus of Panama</b>, which at its narrowest point is less than 80 km wide and is cut by the <b>Panama Canal</b> (opened in 1914).</li>
</ul>
<p>Two ways of dividing the continent:</p>
<table>
<tr><th>Criterion</th><th>Division</th></tr>
<tr><td><b>Geographic</b></td><td>North America (Canada, USA, Mexico, Greenland), Central America and the Caribbean, South America</td></tr>
<tr><td><b>Cultural and linguistic</b></td><td><b>Anglo-America</b> (USA and Canada, English language) and <b>Latin America</b> (from Mexico southwards, Spanish and Portuguese languages, born from Latin)</td></tr>
</table>`
    },
    {
      type: "text",
      title: "2. The land: the \"backbone\" in the west",
      html: `<p>Along the whole Pacific coast runs a chain of young mountains, like a backbone:</p>
<ul>
<li>to the north the <b>Rocky Mountains</b> (Canada and USA);</li>
<li>to the south the <b>Andes</b>, the longest mountain range in the world (about <b>7000 km</b>), with <b>Aconcagua</b> (6961 m, Argentina), the highest peak in the Americas and in the whole world outside Asia.</li>
</ul>
<p>To the east there are older, lower mountains (the <b>Appalachians</b> in the USA, the plateaus of Guiana and Brazil).</p>
<p>In between, enormous <b>plains</b>: the <b>Great Plains</b> and the prairie of North America, the Argentine <b>Pampas</b>, the <b>Amazon</b> basin.</p>
<p><b>Rivers and lakes</b>: the <b>Amazon River</b> (about 6400–7000 km, the river with the most water in the world: on its own it carries to the sea about a fifth of all the fresh water from the world's rivers); the <b>Mississippi-Missouri</b> (the longest in North America); the <b>Paraná</b>. Between Canada and the USA lie the <b>Great Lakes</b> (Superior, Michigan, Huron, Erie, Ontario), with the <b>Niagara</b> Falls.</p>`
    },
    {
      type: "3d",
      title: "The landscapes of the Americas in 3D",
      scene: "terrain",
      options: {
        features: {
          mountain: { label: "Andes and Rocky Mountains", html: "The great Pacific range, formed by the collision between oceanic and continental plates. The Andes are about 7000 km long." },
          peak: { label: "Aconcagua", html: "6961 m, in Argentina: the highest peak in the world outside Asia." },
          volcano: { label: "Andean volcanoes", html: "The Americas are part of the Pacific Ring of Fire. Cotopaxi (Ecuador) is one of the highest active volcanoes in the world." },
          river: { label: "Amazon River", html: "The river with the most water in the world. At its mouth it is tens of kilometres wide and its fresh water pushes tens of kilometres into the ocean." },
          plain: { label: "Great Plains and Pampas", html: "Immense plains, among the most farmed in the world: wheat and maize in the USA and Canada, livestock and soya in the Argentine Pampas." },
          lake: { label: "Great Lakes", html: "Five lakes between Canada and the USA that hold about 20% of the planet's surface fresh water. Lake Superior is the largest freshwater lake in the world by surface area." },
          isthmus: { label: "Isthmus of Panama", html: "The strip of land that joins the two Americas, formed about 3 million years ago. The Panama Canal (82 km) lets ships avoid sailing around South America." },
          archipelago: { label: "Caribbean", html: "The Antilles: islands such as Cuba, Hispaniola (Haiti and the Dominican Republic), Jamaica, Puerto Rico. Christopher Columbus landed here in 1492." },
          glacier: { label: "Patagonia and Alaska", html: "Great glaciers to the south (Perito Moreno, in Argentina) and to the north (Alaska, Greenland)." },
          strait: { label: "Strait of Magellan", html: "The passage between the Atlantic and the Pacific at the far south, discovered by Ferdinand Magellan in 1520." }
        }
      },
      caption: "Touch the parts: from Alaska to Patagonia there are all the landscapes of the Earth."
    },
    {
      type: "text",
      title: "3. Climates and environments",
      html: `<p>Because it stretches from about 83° N to 56° S, the Americas have <b>every climate</b>:</p>
<ul>
<li>🧊 <b>polar</b> and tundra: northern Canada, Alaska, Greenland;</li>
<li>🌲 <b>cold</b> with taiga: Canada;</li>
<li>🌳 <b>temperate</b>: much of the USA, southern Brazil, Argentina, central Chile (which has a Mediterranean climate like Italy's);</li>
<li>🏜️ <b>arid</b>: the deserts of the south-west USA and Mexico; the <b>Atacama</b> desert in Chile, the driest in the world (in some weather stations no rain has ever been recorded);</li>
<li>🌴 <b>tropical and equatorial</b>: Central America, the Caribbean, the Amazon.</li>
</ul>
<p>The <b>Amazon</b> is the largest rainforest in the world (about 5.5 million km², 60% of it in Brazil): it is home to about 10% of the known living species. But it is threatened by <b>deforestation</b> to make room for cattle ranches, soya crops and mines.</p>
<p>In the Gulf of Mexico and the Caribbean, between June and November, <b>hurricanes</b> form: tropical cyclones with winds that can exceed 250 km/h.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: land and climates",
      questions: [
        { type: "mc", q: "What is the longest mountain range in the world?", options: ["Rocky Mountains", "Andes", "Appalachians"], answer: 1, explain: "The Andes, about 7000 km." },
        { type: "text", q: "What is the name of the river with the most water in the world?", answer: ["amazon river", "amazon", "the amazon river", "rio amazonas"], explain: "The Amazon River." },
        { type: "tf", q: "The Atacama Desert, in Chile, is one of the driest places in the world.", answer: true, explain: "It is considered the driest non-polar desert on Earth." }
      ]
    },
    {
      type: "text",
      title: "4. History and population",
      html: `<p>Before the arrival of the Europeans the Americas were inhabited by native peoples who had arrived from Asia, across the <b>Bering Strait</b>, at least 15,000–20,000 years ago. They developed great civilisations: the <b>Maya</b> (Central America), the <b>Aztecs</b> (Mexico) and the <b>Incas</b> (Andes).</p>
<p>After <b>1492</b> (Christopher Columbus) colonisers arrived: <b>Spanish</b> and <b>Portuguese</b> in the Centre and South, <b>English</b> and <b>French</b> in the North. Diseases brought from Europe (smallpox, measles) and wars caused the native populations to collapse. Millions of Africans were deported as slaves.</p>
<p>For this reason today the population is very <b>mixed</b>: descendants of the natives (\"Native Americans\"), of Europeans, of Africans, of Asians, and <b>mestizos</b> (of mixed origins).</p>
<p>Between 1876 and 1976 millions of <b>Italians</b> emigrated, mainly to the USA, <b>Argentina</b> and <b>Brazil</b>. Today in Argentina about half of the inhabitants have at least one Italian ancestor; in Brazil the descendants of Italians number tens of millions, concentrated mainly in the State of São Paulo.</p>`
    },
    {
      type: "text",
      title: "5. North America: USA and Canada",
      html: `<p><b>United States of America</b> 🇺🇸: capital <b>Washington</b>; about 335 million inhabitants; 50 federal states. It is the <b>world's first economy</b>: large technology companies (Silicon Valley in California), finance (Wall Street in New York), mechanised agriculture, industry, scientific research and Hollywood. Main cities: New York, Los Angeles, Chicago, Houston.</p>
<p><b>Canada</b> 🇨🇦: capital <b>Ottawa</b>; the world's second-largest country (about 10 million km²) but with only about 40 million inhabitants, almost all of them near the border with the USA. Two official languages: <b>English</b> and <b>French</b> (in Quebec). Very rich in resources: forests, oil, water, minerals.</p>
<p><b>Mexico</b> 🇲🇽: capital Mexico City (one of the largest metropolises in the world); about 130 million inhabitants; Spanish language. It is geographically in North America, but culturally it belongs to Latin America.</p>`
    },
    {
      type: "text",
      title: "6. Central and South America",
      html: `<p><b>Brazil</b> 🇧🇷: capital <b>Brasília</b> (built specifically for the purpose, inaugurated in 1960); about 210 million inhabitants; <b>Portuguese</b> language. The largest and most populous country in South America, a major exporter of soya, coffee, meat and iron. Large cities: São Paulo, Rio de Janeiro.</p>
<p><b>Argentina</b> 🇦🇷: capital Buenos Aires; about 46 million inhabitants; from the Pampas (beef, wheat, soya) to Patagonia.</p>
<p>Other countries: <b>Colombia</b>, <b>Peru</b> (Machu Picchu, the Inca city), <b>Chile</b> (very long and narrow: about 4300 km with an average width of 180 km), <b>Venezuela</b>, <b>Ecuador</b>, <b>Bolivia</b>, <b>Cuba</b>…</p>
<p><b>Problems</b> in Latin America: strong <b>inequality</b> (next to very rich neighbourhoods there are shanty towns, called <b>favelas</b> in Brazil), crime linked to drug trafficking in some areas, political instability, deforestation. Many people from Central America and Mexico emigrate towards the USA.</p>`
    },
    {
      type: "svg",
      title: "The Americas: the large regions",
      svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="360" fill="#bae6fd"/>
<path d="M90 30 L330 20 L360 60 L320 100 L300 140 L250 160 L230 175 L200 170 L160 140 L120 100 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="230" y="70" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Canada</text>
<text x="230" y="125" font-size="16" text-anchor="middle" font-weight="bold" fill="#1e3a8a">USA</text>
<path d="M200 170 L230 175 L250 160 L245 185 L265 210 L275 225 L255 220 L225 195 Z" fill="#fcd34d" stroke="#92400e" stroke-width="2"/>
<text x="210" y="200" font-size="14" text-anchor="end" font-weight="bold" fill="#78350f">Mexico and Centre</text>
<ellipse cx="320" cy="195" rx="28" ry="7" fill="#fcd34d" stroke="#92400e"/>
<text x="360" y="200" font-size="13" fill="#78350f">Caribbean</text>
<path d="M275 225 L330 230 L390 260 L370 300 L320 340 L300 350 L285 300 L270 250 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<text x="330" y="275" font-size="16" text-anchor="middle" font-weight="bold" fill="#14532d">South America</text>
<path d="M120 100 L160 140 L200 170" stroke="#78350f" stroke-width="6" fill="none"/>
<path d="M275 225 L270 250 L285 300 L300 350" stroke="#78350f" stroke-width="6" fill="none"/>
<text x="95" y="150" font-size="13" fill="#78350f" font-weight="bold">Rockies</text>
<text x="230" y="320" font-size="13" fill="#78350f" font-weight="bold">Andes</text>
<rect x="430" y="40" width="160" height="110" rx="8" fill="#ffffff" stroke="#334155"/>
<rect x="442" y="56" width="16" height="16" fill="#93c5fd"/><text x="466" y="70" font-size="13" fill="#111827">Anglo-America</text>
<rect x="442" y="86" width="16" height="16" fill="#fcd34d"/><text x="466" y="100" font-size="13" fill="#111827">Latin America (Centre)</text>
<rect x="442" y="116" width="16" height="16" fill="#86efac"/><text x="466" y="130" font-size="13" fill="#111827">Latin America (South)</text>
</svg>`,
      caption: "Not to scale. The brown line to the west represents the \"backbone\" of mountains along the Pacific."
    },
    {
      type: "widget",
      title: "Game: North, Centre or South?",
      widget: "classify",
      options: {
        groups: ["North America", "Central America and the Caribbean", "South America"],
        items: [["Canada", 0], ["United States", 0], ["Great Lakes", 0], ["Cuba", 1], ["Panama", 1], ["Guatemala (Maya)", 1], ["Brazil", 2], ["Argentina", 2], ["Machu Picchu (Peru)", 2], ["Aconcagua", 2]]
      },
      caption: "For simplicity Mexico is often studied with Central America, but geographically it belongs to the North."
    },
    {
      type: "example",
      title: "Practical example: how much the Panama Canal saves",
      html: `<p>A ship sails from <b>New York</b> to <b>San Francisco</b>.</p>
<ul>
<li>Going around South America (Cape Horn): about <b>22,500 km</b>.</li>
<li>Passing through the Panama Canal: about <b>9,500 km</b>.</li>
</ul>
<p>About <b>13,000 km</b> are saved, that is more than half of the journey (about 58%)! The canal uses a system of <b>locks</b> that lift ships by about 26 metres up to Gatún Lake and then lower them again. Every passage uses a huge amount of fresh water: in 2023 a drought forced the number of ships to be reduced.</p>`
    },
    {
      type: "example",
      title: "Practical example: \"Italians\" in Argentina",
      html: `<p>In <b>Buenos Aires</b> people say \"<i>chau</i>\" to say goodbye (from \"ciao\"), they eat \"<i>milanesa</i>\" (the cutlet) and \"<i>fainá</i>\" (the Ligurian chickpea flatbread), and on the <b>29th</b> of every month, by tradition, they eat <b>ñoquis</b> (gnocchi)!</p>
<p>The Spanish of Buenos Aires even has an intonation similar to southern Italian: many scholars explain this by the millions of Italian immigrants who arrived between the late 19th and early 20th centuries. Pope <b>Francis</b> (Jorge Mario Bergoglio, 1936–2025) was also the son of a Piedmontese emigrant.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… America is named after an Italian?",
      html: `<p>The name \"America\" comes from the Florentine navigator <b>Amerigo Vespucci</b>, who in the early years of the sixteenth century understood that the lands reached by Columbus were not Asia but a <b>\"New World\"</b>. In <b>1507</b> the German cartographer Martin Waldseemüller wrote \"America\" on one of his maps, and the name spread.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… Alaska and Russia are less than 4 km apart?",
      html: `<p>In the <b>Bering Strait</b> there are two small islands: Big Diomede (Russia) and Little Diomede (USA). They are about <b>3.8 km</b> apart. But between the two runs the <b>International Date Line</b>: on the big island it is already \"tomorrow\", while on the small one it is still \"today\"! This is why they are called the island of tomorrow and the island of yesterday.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to get to know the Americas",
      intro: "The Americas can also be explored by travelling, playing or comparing.",
      tabs: [
        {
          label: "🌍 Journey around the globe",
          html: `<p>Take the journey of the <b>Pan-American Highway</b>, the road network that runs from Alaska to Tierra del Fuego (about 30,000 km, interrupted only by the Darién jungle between Panama and Colombia).</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 70.2, lon: -148.5, label: "Prudhoe Bay (Alaska)", color: "#0ea5e9" },
              { lat: 49.3, lon: -123.1, label: "Vancouver", color: "#2563eb" },
              { lat: 34.05, lon: -118.24, label: "Los Angeles", color: "#2563eb" },
              { lat: 19.43, lon: -99.13, label: "Mexico City", color: "#f59e0b" },
              { lat: 8.98, lon: -79.52, label: "Panama", color: "#f59e0b" },
              { lat: -0.18, lon: -78.47, label: "Quito (equator)", color: "#16a34a" },
              { lat: -12.05, lon: -77.04, label: "Lima", color: "#16a34a" },
              { lat: -33.45, lon: -70.67, label: "Santiago de Chile", color: "#16a34a" },
              { lat: -54.8, lon: -68.3, label: "Ushuaia", color: "#7c3aed" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7, 8], color: "#dc2626" }]
          }
        },
        {
          label: "🔤 Trick: the languages",
          html: `<p>To understand Latin America remember: <b>\"everyone speaks Spanish… except Brazil\"</b>, where <b>Portuguese</b> is spoken. Why?</p>
<p>In <b>1494</b>, with the <b>Treaty of Tordesillas</b>, Spain and Portugal divided the new lands with an imaginary line in the Atlantic: Spain to the west, Portugal to the east. The eastern tip of South America, the future Brazil, fell in the Portuguese part!</p>
<p>Other exceptions: in Canada French is also spoken; in Haiti French and Creole; in Suriname Dutch; in Guyana and Jamaica English.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#bae6fd"/>
<path d="M200 40 L280 50 L340 90 L320 150 L270 220 L240 230 L225 170 L200 110 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<path d="M280 50 L340 90 L320 150 L290 170 L285 60 Z" fill="#86efac" stroke="#166534" stroke-width="2"/>
<line x1="285" y1="10" x2="285" y2="235" stroke="#dc2626" stroke-width="4" stroke-dasharray="10 6"/>
<text x="285" y="28" font-size="14" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Tordesillas line (1494)</text>
<text x="140" y="130" font-size="18" text-anchor="middle" fill="#92400e" font-weight="bold">Spain</text>
<text x="430" y="130" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Portugal</text>
<text x="310" y="120" font-size="14" text-anchor="middle" fill="#14532d" font-weight="bold">Brazil</text>
</svg>`
        },
        {
          label: "🧩 Match capital and country",
          html: `<p>Many American capitals are not the largest city of their country! Match them.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Washington", "United States"],
              ["Ottawa", "Canada"],
              ["Brasília", "Brazil"],
              ["Buenos Aires", "Argentina"],
              ["Mexico City", "Mexico"],
              ["Lima", "Peru"],
              ["Havana", "Cuba"]
            ]
          }
        },
        {
          label: "📊 Two Americas compared",
          html: `<p>Compare the two American \"worlds\" with the data:</p>
<table>
<tr><th></th><th>🇺🇸 USA</th><th>🇨🇦 Canada</th><th>🇧🇷 Brazil</th><th>🇭🇹 Haiti</th></tr>
<tr><td>Life expectancy</td><td>about 78 years</td><td>about 82 years</td><td>about 76 years</td><td>about 64 years</td></tr>
<tr><td>HDI</td><td>0.93</td><td>0.94</td><td>0.76</td><td>0.55</td></tr>
</table>
<p>The continent has both some of the richest countries in the world and one of the poorest, <b>Haiti</b>, which nonetheless in 1804 became the first republic founded by freed former slaves.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of the Americas: tap the nodes and discover the why",
      nodes: [
        { id: "placche", label: "Pacific plates", x: 20, y: 8, color: "#b45309", html: "Oceanic plates slide under the continent.", why: "The Nazca plate slides under the South American plate (subduction): the edge of the continent folds and rises, forming the Andes and their volcanoes. This is also how the Ring of Fire was born." },
        { id: "montagne", label: "Rockies and Andes", x: 20, y: 32, color: "#78716c", html: "Young mountains along the whole west coast.", why: "They are young (tens of millions of years old) and therefore high and sharp; the Appalachians to the east are very ancient (over 300 million years) and worn down by erosion." },
        { id: "estensione", label: "From 83° N to 56° S", x: 55, y: 8, color: "#ef4444", html: "The longest continent from north to south.", why: "It crosses all latitudes except the most extreme polar ones of the south: for this reason it contains every climate, from tundra to the equator." },
        { id: "climi", label: "All climates", x: 55, y: 32, color: "#16a34a", html: "Polar, cold, temperate, arid, tropical, equatorial.", why: "Besides latitude, the Andes matter, because they block humid winds (this is why the Atacama is so dry), and cold currents such as the Humboldt Current along Chile and Peru." },
        { id: "amazzonia", label: "Amazon", x: 85, y: 32, color: "#15803d", html: "The largest rainforest in the world.", why: "Constant heat and abundant rain at the equator; the rain is partly \"recycled\" by the forest itself, which transpires water. If too much is cut down, scientists fear that part of it could turn into savanna." },
        { id: "nativi", label: "Native peoples", x: 85, y: 55, color: "#a855f7", html: "Maya, Aztecs, Incas and hundreds of other peoples.", why: "They arrived from Asia across Beringia, a land bridge that emerged during the last ice age, when sea levels were lower." },
        { id: "colonizzazione", label: "European colonisation", x: 55, y: 58, color: "#64748b", html: "From 1492: Spain, Portugal, England, France.", why: "Columbus was seeking a westward route to Asia; after him the Europeans sought gold, silver and land for plantations. The Treaty of Tordesillas (1494) divided the lands between Spain and Portugal." },
        { id: "angloLatina", label: "Anglo and Latin", x: 25, y: 62, color: "#2563eb", html: "Two large cultural and linguistic areas.", why: "They depend on who colonised each territory: English in the north, Spanish and Portuguese in the south. The expression \"Latin America\" spread from France in the mid-19th century." },
        { id: "migrazioni", label: "Migrations", x: 40, y: 85, color: "#ec4899", html: "Europeans, deported Africans, Asians; today migration towards the USA.", why: "For centuries the Americas were a \"land of immigration\"; between 1880 and 1920 over 20 million Europeans arrived in the USA alone, many of them Italians." },
        { id: "sviluppo", label: "Wealth and inequality", x: 75, y: 85, color: "#f59e0b", html: "Rich USA and Canada; Latin America with strong inequality.", why: "The type of colonisation weighed heavily (large estates and mines in the south, small farms and industry in the north), as did the dictatorships of the 20th century and dependence on exporting raw materials." }
      ],
      edges: [
        ["placche", "montagne", "raise the"],
        ["estensione", "climi", "explains the"],
        ["montagne", "climi", "influence the"],
        ["climi", "amazzonia", "make the"],
        ["nativi", "colonizzazione", "suffer the"],
        ["colonizzazione", "angloLatina", "creates the areas of"],
        ["colonizzazione", "migrazioni", "starts the"],
        ["angloLatina", "sviluppo", "helps to understand"],
        ["migrazioni", "sviluppo", "linked to the"]
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li><b>Americas</b>: 42.5 million km², about 1 billion inhabitants; <b>North</b>, <b>Central and Caribbean</b>, <b>South</b>; joined by the <b>Isthmus of Panama</b>.</li>
<li>In the west the young mountains: <b>Rockies</b> and <b>Andes</b> (Aconcagua 6961 m); in the centre great plains; rivers: <b>Amazon</b>, <b>Mississippi</b>; <b>Great Lakes</b>.</li>
<li>Every climate: from the tundra to the <b>Amazon</b> (the largest rainforest).</li>
<li><b>Anglo-America</b> (USA, Canada) and <b>Latin America</b> (Spanish; Portuguese in Brazil).</li>
<li>USA the world's first economy; Brazil the giant of the south; strong inequality in Latin America.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: countries and peoples",
      questions: [
        { type: "mc", q: "What language is spoken in Brazil?", options: ["Spanish", "Portuguese", "English"], answer: 1, explain: "Portuguese, because of the Treaty of Tordesillas." },
        { type: "text", q: "What is the capital of Canada?", answer: ["ottawa"], explain: "Ottawa, not Toronto (the largest city)." },
        { type: "mc", q: "Who is America named after?", options: ["Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan"], answer: 1, explain: "After the Florentine navigator Amerigo Vespucci." }
      ]
    }
  ],
  glossary: [
    { t: "Latin America", d: "The American countries where languages derived from Latin are spoken (Spanish, Portuguese, French)." },
    { t: "Anglo-America", d: "The USA and Canada, colonised mainly by the English." },
    { t: "Isthmus", d: "A strip of land that joins two lands and separates two seas, such as the one of Panama." },
    { t: "Subduction", d: "The process in which one tectonic plate slides under another." },
    { t: "Pampas", d: "The large grassy plain of Argentina, used for livestock and farming." },
    { t: "Deforestation", d: "Cutting down forests to make room for crops, livestock, mines or cities." },
    { t: "Hurricane", d: "A tropical cyclone of the Atlantic with very strong winds." },
    { t: "Mestizo", d: "A person with ancestors of different origins, for example European and Native American." },
    { t: "Favela", d: "A poor, often unauthorised neighbourhood in the large Brazilian cities." },
    { t: "Federal state", d: "A state made up of several member states with a degree of autonomy, such as the USA (50 states)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What connects North America and South America?", options: ["The Strait of Magellan", "The Isthmus of Panama", "The Bering Strait"], answer: 1, explain: "The Isthmus of Panama, cut by the Canal (1914)." },
      { type: "text", q: "What is the highest peak in the Americas?", answer: ["aconcagua", "the aconcagua", "mount aconcagua"], explain: "Aconcagua, 6961 m, in Argentina." },
      { type: "tf", q: "The Rocky Mountains are on the Atlantic coast.", answer: false, explain: "They are in the west, along the Pacific; to the east are the Appalachians." },
      { type: "mc", q: "Where are the Great Lakes?", options: ["Between Canada and the United States", "In Brazil", "In Mexico"], answer: 0, explain: "Superior, Michigan, Huron, Erie and Ontario, on the border between Canada and the USA." },
      { type: "mc", q: "Why is Portuguese spoken in Brazil?", options: ["Because of the Treaty of Tordesillas of 1494", "Because the Maya chose it", "Because the UN imposed it"], answer: 0, explain: "The Tordesillas line assigned the eastern part of South America to Portugal." },
      { type: "num", q: "A ship saves about 13,000 km out of 22,500 by passing through Panama. How many km does it travel?", answer: 9500, tol: 0, unit: "km", explain: "22,500 − 13,000 = 9,500 km." },
      { type: "mc", q: "What is the largest rainforest in the world?", options: ["Congo Forest", "Amazon", "Canadian taiga"], answer: 1, explain: "The Amazon, about 5.5 million km²." },
      { type: "tf", q: "Canada has two official languages: English and French.", answer: true, explain: "French is spoken mainly in Quebec." },
      { type: "order", q: "Put in order from the most northern to the most southern.", items: ["Canada", "United States", "Mexico", "Panama", "Peru", "Argentina"], explain: "Going down the continent from north to south." },
      { type: "text", q: "What is the capital of Brazil?", answer: ["brasilia", "brasília"], explain: "Brasília, inaugurated in 1960." },
      { type: "mc", q: "Which of these peoples lived in the Andes?", options: ["Incas", "Aztecs", "Maya"], answer: 0, explain: "The Incas, with capital Cusco; the Aztecs were in Mexico and the Maya in Central America." },
      { type: "mc", q: "What is a typical problem of many large cities in Latin America?", options: ["A lack of inhabitants", "Strong inequality, with shanty towns next to rich neighbourhoods", "Ice all year round"], answer: 1, explain: "The Brazilian favelas are an example." }
    ]
  }
});
