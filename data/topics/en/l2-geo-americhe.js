TOPIC('en', {
  id: "l2-geo-americhe",
  title: "The Americas",
  intro: "From Alaska to Tierra del Fuego, the Americas stretch for more than 14,000 km along the meridians: one continent (or two, depending on how you count) that is home to the world's largest economy, megacities and tropical forests, ancient indigenous peoples and societies built by migration. Let's see how environments and colonial history explain the differences between Anglo-America and Latin America.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. A long, narrow continent: environments and relief",
      html: `<p>The Americas cover about <b>42.5 million km²</b> (about 28% of the world's land) and are home to about <b>1 billion</b> people (more than 12% of humanity). They are traditionally divided into <b>North America</b> (Canada, the United States, Mexico, Greenland), <b>Central America</b> with the Caribbean, and <b>South America</b>. The Panama Canal (opened in 1914) cuts through the isthmus that joins them, shortening the route between the Atlantic and the Pacific by more than 10,000 km.</p>
<p>Because the continent runs north to south, it crosses every climate zone: from Arctic tundra and ice, through temperate climates and tropical forests, down to cold, windy Patagonia.</p>
<ul>
<li><b>Western mountain system</b>: a long "backbone" formed by the <b>Rocky Mountains</b> (North America), the Sierra Madre (Mexico) and the <b>Andes</b> (about 7,000 km, the longest continental mountain range in the world; the highest peak is <b>Aconcagua</b>, 6,961 m, in Argentina). It is an area of volcanoes and earthquakes, on the edge of the Pacific Ring of Fire.</li>
<li><b>Interior plains</b>: the Great Plains of North America, the <b>Mississippi-Missouri</b> basin, the Amazon lowlands and the Argentine pampas. They are among the most fertile farming areas in the world (wheat, maize, soya, livestock).</li>
<li><b>Rivers and lakes</b>: the <b>Amazon</b> (the river with the greatest discharge in the world, about one fifth of all the fresh water that flows into the sea), the Mississippi-Missouri, the Paraná-Río de la Plata, the <b>Great Lakes</b> (Superior, Michigan, Huron, Erie, Ontario) between Canada and the USA, and Lake Titicaca in the Andes.</li>
<li><b>The Amazon rainforest</b>: about 5.5-6 million km² (about 60% in Brazil), the largest rainforest on the planet, which regulates climate and water; it is home to about 10% of all known species.</li>
<li><b>Extreme weather</b>: hurricanes in the Caribbean and the Gulf of Mexico (summer-autumn), tornadoes on the Great Plains ("Tornado Alley"), and El Niño, which every few years warms the Pacific Ocean and changes the climate across the continent.</li>
</ul>`
    },
    {
      type: "3d",
      title: "On the globe: places and cities of the Americas",
      scene: "globe",
      options: {
        points: [
          { lat: 38.9, lon: -77.0, label: "Washington D.C. (USA)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 37.8, lon: -122.4, label: "Silicon Valley / San Francisco", color: "#7c3aed" },
          { lat: 45.4, lon: -75.7, label: "Ottawa (Canada)", color: "#dc2626" },
          { lat: 19.4, lon: -99.1, label: "Mexico City", color: "#16a34a" },
          { lat: 9.0, lon: -79.5, label: "Panama Canal", color: "#f59e0b" },
          { lat: -3.1, lon: -60.0, label: "Manaus (Amazonia)", color: "#0ea5e9" },
          { lat: -15.8, lon: -47.9, label: "Brasília", color: "#16a34a" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#ec4899" },
          { lat: -33.4, lon: -70.7, label: "Santiago (Chile)", color: "#a16207" },
          { lat: -32.65, lon: -70.0, label: "Aconcagua (6,961 m)", color: "#6b7280" }
        ],
        routes: [
          { points: [1, 0, 4, 5, 6], color: "#2563eb" },
          { points: [8, 9], color: "#ec4899" }
        ]
      },
      caption: "The north-south axis of the Americas: from the rich, industrial North to Latin America, from the Rocky Mountains to the Andes."
    },
    {
      type: "text",
      title: "2. From pre-Columbian civilisations to independence",
      html: `<p>Before the Europeans arrived, the Americas were home to a great variety of peoples: the <b>Aztecs</b> (Mexico, capital Tenochtitlán, today Mexico City), the <b>Maya</b> (Yucatán and Central America, with a calendar and a writing system), the <b>Inca</b> (the Andes, capital Cuzco, with an empire linked by tens of thousands of kilometres of roads), together with dozens of peoples in the forests and plains. On 12 October <b>1492</b> Christopher Columbus reached the Caribbean islands, opening an age of conquest (Cortés in Mexico 1519-1521, Pizarro in Peru from 1532), violence, slavery and demographic catastrophe: diseases such as smallpox and measles, unknown on the continent, killed most of the population over the following centuries.</p>
<p>With the Treaty of <b>Tordesillas</b> (1494) Spain and Portugal divided the "discovered" lands between them: this is why people in Latin America speak <b>Spanish</b> (almost everywhere) and <b>Portuguese</b> (Brazil). North America was settled mainly by the English and the French. Millions of Africans were brought by force to work on the plantations (sugar, cotton, tobacco): hence the large population of African descent in Brazil, the Caribbean and the USA.</p>
<ul>
<li><b>The United States</b>: on 4 July <b>1776</b> the Thirteen British Colonies declared independence; the Constitution dates from <b>1787</b>. In the 19th century the country expanded westwards (the Louisiana Purchase in 1803, the war with Mexico in 1846-48), taking land from Native Americans. Slavery was abolished after the <b>Civil War</b> (1861-1865). From 1900 the USA became an industrial power, and after 1945 a superpower.</li>
<li><b>Latin America</b>: Haiti was the first to become independent (1804, after a slave revolt); the wars of liberation led by <b>Simón Bolívar</b> and <b>José de San Martín</b> brought independence to most of the Spanish territories (1810-1825); Brazil broke away from Portugal in 1822. But the unity Bolívar dreamed of never happened: many separate states were born.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Tordesillas: two empires divide the New World",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<text x="300" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">The Treaty of Tordesillas (1494), simplified diagram</text>
<rect x="60" y="50" width="480" height="190" rx="10" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
<polygon points="95,80 200,70 250,130 230,220 150,230 110,170" fill="#fcd34d" stroke="#92400e" stroke-width="2"/>
<polygon points="330,70 420,60 460,130 420,210 350,220 330,140" fill="#86efac" stroke="#166534" stroke-width="2"/>
<line x1="290" y1="45" x2="290" y2="245" stroke="#dc2626" stroke-width="4" stroke-dasharray="10 6"/>
<text x="150" y="150" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Spain</text>
<text x="150" y="170" font-size="14" text-anchor="middle" fill="#111827">to the west</text>
<text x="395" y="140" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Portugal</text>
<text x="395" y="160" font-size="14" text-anchor="middle" fill="#111827">to the east</text>
<text x="300" y="270" font-size="14" text-anchor="middle" fill="#475569">A line 370 leagues west of Cape Verde: hence Portuguese Brazil</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#475569">and Spanish America everywhere else.</text>
</svg>`,
      caption: "The diagram is not to scale: the line runs roughly near today's mouth of the Amazon, leaving the eastern part of South America to Portugal."
    },
    {
      type: "quiz",
      title: "Mini-quiz: environment and history",
      questions: [
        { type: "mc", q: "What is the longest mountain range in the Americas?", options: ["The Andes", "The Appalachians", "The Rocky Mountains"], answer: 0, explain: "The Andes stretch for about 7,000 km along the west coast of South America." },
        { type: "mc", q: "Why do people in Brazil speak Portuguese?", options: ["Because the Treaty of Tordesillas assigned those lands to Portugal", "Because it was a Spanish colony", "Because the Inca spoke it"], answer: 0, explain: "Brazil was a Portuguese colony until 1822." },
        { type: "tf", q: "The United States declared independence in 1776.", answer: true, explain: "On 4 July 1776." }
      ]
    },
    {
      type: "text",
      title: "3. The United States and Canada",
      html: `<p>The <b>United States</b> (50 states, about 9.8 million km², about <b>335 million</b> people, capital Washington D.C.) is the world's largest economy: its GDP is over 27 trillion dollars (more than a quarter of world GDP). It has a <b>federal</b> structure and one of the oldest constitutions still in force. Its environments are varied: coasts, the Appalachians, the Great Plains, the deserts of the South-West, the Rocky Mountains, the Pacific coast, Alaska and Hawaii.</p>
<ul>
<li><b>A society built by immigration</b>: from the 19th century millions of Europeans arrived (remembered at Ellis Island), followed by Asians and Latin Americans. <b>Hispanic Americans</b> are now almost 20% of the population and the largest minority; African Americans are about 13%. The <b>civil rights</b> movement (1950s and 1960s, with Martin Luther King) ended legal segregation, but racial and economic inequalities remain.</li>
<li><b>Economy</b>: a leader in high technology (<b>Silicon Valley</b> in California), finance (Wall Street in New York), film (Hollywood), mechanised agriculture (the Corn Belt and soya belt) and energy (oil and gas, including shale). The North-East and the Great Lakes, once the industrial heartland (the "Rust Belt"), have had to reinvent themselves; the "Sun Belt" of the South and South-West is growing fast.</li>
<li><b>Cities and land</b>: an urban society, with large metropolitan areas (New York, Los Angeles, Chicago) and heavy car use; the country is very exposed to hurricanes (Gulf Coast), tornadoes and wildfires (California).</li>
<li><b>World role</b>: after 1945 the USA led the West (the Marshall Plan, NATO, Bretton Woods); the dollar is the main reserve currency; the "soft power" of its films, music, universities and technology is enormous. At the same time, political polarisation and inequality are growing.</li>
</ul>
<p><b>Canada</b> (9.98 million km², the second-largest country in the world but with only about <b>40 million</b> people, concentrated near its southern border) is a federal democracy and constitutional monarchy, bilingual (English and French; Quebec is French-speaking), rich in resources (oil from the tar sands, forests, minerals, water) and open to migrants. <b>Mexico</b> (about 128 million people) is halfway between the two Americas: it has strong economic ties with the USA thanks to the <b>NAFTA</b> free-trade agreement (1994), replaced in 2020 by the <b>USMCA</b>.</p>`
    },
    {
      type: "text",
      title: "4. Latin America: great resources, great inequalities",
      html: `<p>"Latin America" means the part of the continent (Mexico, Central America, the Caribbean and South America) where languages of Latin origin are spoken: Spanish, Portuguese and French (Haiti, French Guiana). It has about <b>650 million</b> people, with indigenous cultures (Quechua, Aymara, Maya, Guaraní), European, African and mixed ones (<i>mestizos</i>).</p>
<ul>
<li><b>Early urbanisation</b>: more than 80% of the population lives in cities, one of the highest rates in the world: São Paulo, Mexico City, Buenos Aires, Lima, Bogotá, Rio de Janeiro. These megacities show extreme contrasts: wealthy neighbourhoods next to huge slums (<b>favelas</b> in Brazil, <i>villas miseria</i> in Argentina).</li>
<li><b>Inequality</b>: Latin America is the most unequal region in the world in terms of income distribution (high Gini index values). The causes: the colonial structure (huge estates, the <i>latifundia</i>), limited access to education and land, and economies based on a few products.</li>
<li><b>Export economies</b>: <b>Brazil</b> (about 213 million people; soya, coffee, meat, iron ore; the largest economy in the region), <b>Chile</b> (the top copper producer and a major lithium producer), <b>Argentina</b> (cereals, meat, wine), <b>Bolivia</b> (lithium, gas), <b>Venezuela</b> (huge oil reserves), <b>Colombia</b> (coffee, oil), <b>Mexico</b> (manufacturing for export, oil).</li>
<li><b>Politics</b>: after a period of military dictatorships (1960s-1980s: Pinochet's Chile, Argentina under the military junta, Brazil) almost every country has returned to democracy, but weaknesses remain: political instability and violence linked to drug trafficking (some countries have the highest murder rates in the world). There are organisations for regional integration: <b>Mercosur</b> (1991), the Andean Community, <b>CELAC</b> and the <b>OAS</b> (Organization of American States, 1948).</li>
<li><b>Environment</b>: the <b>deforestation</b> of the Amazon (for cattle ranching, soya and illegal mining) threatens biodiversity and the climate: the forest absorbs huge amounts of CO₂, but in some areas it risks turning into savanna once it passes a point of no return.</li>
<li><b>Indigenous peoples</b>: about 50 million people (across Latin America), increasingly recognised by constitutions and social movements, but often held back by poverty and land conflicts.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Activity: North or South?",
      widget: "classify",
      options: {
        groups: ["Anglo-America (USA, Canada)", "Latin America"],
        items: [
          ["🏙️ Wall Street", 0],
          ["🌳 Amazon rainforest", 1],
          ["🏔️ Andes", 1],
          ["🏔️ Rocky Mountains", 0],
          ["🌎 Mercosur", 1],
          ["🗽 Ellis Island", 0],
          ["⛏️ Chile's copper mines", 1],
          ["🎬 Hollywood", 0]
        ]
      },
      caption: "The division is also historical: English and French colonisation in the North, Spanish and Portuguese in the South."
    },
    {
      type: "example",
      title: "Soya that crosses the ocean",
      html: `<p>A farm in Mato Grosso (Brazil) grows soya on hundreds of hectares: it is loaded onto trucks and ships and arrives at ports in China or Europe, where it becomes feed for pigs and chickens. Brazil is the world's largest soya exporter. But this kind of farming has an environmental cost: many of the fields were once savanna (the Cerrado) or forest. It shows how the diet of another continent can change the landscape of a faraway country: a <b>global supply chain</b> links the field, the port and our plate.</p>`
    },
    {
      type: "example",
      title: "The Panama Canal",
      html: `<p>The Panama Canal (opened in 1914, enlarged in 2016) is about 80 km long and links the Atlantic to the Pacific through a system of locks. It saves ships the long voyage around Cape Horn: a ship sailing from New York to San Francisco saves about 15,000 km. About 5% of world sea trade passes through it. The drought of 2023-2024, partly linked to El Niño, lowered the level of Gatún Lake (which feeds the canal) and limited the number of ships that could pass: an example of how climate and global trade are connected.</p>`
    },
    {
      type: "curiosity",
      title: "Why \"America\"?",
      html: `<p>The name comes from <b>Amerigo Vespucci</b>, a Florentine navigator who was the first to argue (1501-1502) that the lands discovered to the west were a "New World" and not Asia. In 1507 the German cartographer <b>Martin Waldseemüller</b> printed a map on which the new continent was called "America" in his honour. Columbus died in 1506 convinced he had reached Asia.</p>`
    },
    {
      type: "curiosity",
      title: "The river that carries the most water in the world",
      html: `<p>The Amazon pours about 200,000 m³ of water per second into the Atlantic, more than any other river. Its mouth is over 300 km wide: its fresh water pushes tens of kilometres out into the ocean. About 1 in 10 of all known species on Earth lives in its basin.</p>`
    },
    {
      type: "decision",
      title: "Develop the Amazon or protect it?",
      html: `<p>You are the governor of a state in the Brazilian Amazon. The forest land could be used for cattle and soya, bringing jobs and quick wealth to a poor region. But deforestation reduces biodiversity, disrupts rainfall and releases carbon into the atmosphere; indigenous peoples have lived in the forest for thousands of years.</p>`,
      question: "What would you do?",
      options: [
        { label: "Allow large-scale clearing of the forest", outcome: "Quick wealth and jobs, but an irreversible loss of forest, climate stability and peoples, and a risk of water crises: studies suggest that losing more than 20-25% of the forest could push it towards a point of no return." },
        { label: "Protect the forest and encourage sustainable activities (agroforestry, nut harvesting, tourism, payments for environmental services)", outcome: "It protects the climate and biodiversity and gives many communities an income, but it needs funding, controls and international agreements; results come more slowly." },
        { label: "Do nothing and leave everything as it is", outcome: "Without controls, illegal activities (mining, logging) expand anyway: failing to govern is a choice in itself." }
      ],
      answer: 1,
      explain: "No solution comes without trade-offs, but the path most widely supported by scientists and many governments is to protect the forest and create economic alternatives. Between 2004 and 2012 Brazil cut deforestation by more than 80% through controls and incentives, showing that it can be done."
    },
    {
      type: "alternatives",
      title: "Other ways to understand the Americas",
      intro: "To avoid getting lost in such a huge continent, try looking at it from different angles.",
      tabs: [
        {
          label: "🌐 The three Americas on the map",
          html: `<p>Mentally cut the map into three pieces: the <b>North</b> (vast spaces, two enormous countries and Mexico), the <b>centre</b> (the isthmus and the Caribbean, small states and islands, swept by hurricanes) and the <b>South</b> (one huge country, Brazil, which on its own covers almost half the continent's area and has about half its population). Notice that most of South America lies <b>to the east</b> of the east coast of the United States: New York and Lima are almost on the same meridian.</p>`
        },
        {
          label: "🏔️ Altitude matters",
          html: `<p>In the Andes the climate depends on altitude more than latitude: tropical <b>altitudinal zones</b>. Low down (<i>tierra caliente</i>) people grow bananas and sugar cane; at 1,000-2,000 m (<i>tierra templada</i>) coffee and maize; higher up (<i>tierra fría</i>) potatoes and cereals; above 3,500 m there is only pasture for llamas and alpacas (<i>puna</i>); above 4,800 m, snow and ice. Potatoes and maize, first grown in the Andes and Mexico, reached Europe after Columbus and changed the world's diet.</p>`
        },
        {
          label: "📊 Inequality and income",
          html: `<p>The Gini index goes from 0 (everyone has the same income) to 1 (one person has everything). Approximate values: Denmark about 0.28; Italy about 0.33; United States about 0.40; Brazil about 0.52; Colombia about 0.53. Even though Latin America is not poorer than Asia or Africa, it is where the gap between the richest tenth and the poorest tenth of the population is greatest.</p>`,
          svg: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="230" fill="#fefce8"/><text x="250" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#111827">Gini index (approximate values)</text><text x="20" y="62" font-size="15" fill="#111827">Denmark</text><rect x="130" y="45" width="140" height="24" fill="#16a34a"/><text x="278" y="62" font-size="15" fill="#111827">0.28</text><text x="20" y="102" font-size="15" fill="#111827">Italy</text><rect x="130" y="85" width="165" height="24" fill="#f59e0b"/><text x="303" y="102" font-size="15" fill="#111827">0.33</text><text x="20" y="142" font-size="15" fill="#111827">USA</text><rect x="130" y="125" width="200" height="24" fill="#f97316"/><text x="338" y="142" font-size="15" fill="#111827">0.40</text><text x="20" y="182" font-size="15" fill="#111827">Brazil</text><rect x="130" y="165" width="260" height="24" fill="#dc2626"/><text x="398" y="182" font-size="15" fill="#111827">0.52</text><text x="20" y="215" font-size="14" fill="#475569">Bars proportional to the value (0-1 over a width of 500).</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why the Americas are the way they are",
      nodes: [
        { id: "ambiente", label: "Environments", x: 15, y: 8, color: "#16a34a", html: "Andes, plains, Amazonia, Great Lakes.", why: "The north-south axis, with great mountain ranges in the West and plains in the East, shapes rivers and climates: from the rich farming plains of the North to the rainforest. Geography favours intensive agriculture but also makes connections difficult." },
        { id: "colonizzazione", label: "European colonisation", x: 50, y: 8, color: "#a855f7", html: "Spain, Portugal, England, France.", why: "Colonial models differed: in the North, settler families with small farms and self-government; in the South, huge estates, mineral resources and forced indigenous and African labour. This early difference left very different institutions behind." },
        { id: "popoli", label: "Peoples and migration", x: 85, y: 8, color: "#f59e0b", html: "Indigenous peoples, Europeans, Africans, Asians.", why: "Since 1492 the continent has been reshaped by extermination, slavery and migration (European, African, Asian), right up to recent migration from Latin America to the USA." },
        { id: "usa", label: "US superpower", x: 20, y: 48, color: "#2563eb", html: "Economy, technology, finance, military strength.", why: "Abundant resources and land, stable institutions and immigration fuelled a long period of growth; the two world wars then handed the USA the leadership of the West." },
        { id: "latina", label: "Latin America", x: 80, y: 48, color: "#dc2626", html: "Resources, urbanisation, inequality.", why: "An economy built on exporting raw materials (silver, sugar, coffee, copper, soya) left deep inequalities and dependence on world prices; dictatorships and debt slowed development." },
        { id: "ambientale", label: "The environmental question", x: 50, y: 70, color: "#0ea5e9", html: "Amazonia, climate, water.", why: "The Amazon rainforest regulates the global climate: protecting it matters to the whole planet, but the responsibility and the costs fall mainly on countries that are still developing." },
        { id: "legami", label: "Integration and relations", x: 50, y: 95, color: "#14b8a6", html: "USMCA, Mercosur, OAS, CELAC.", why: "The idea of American unity goes back to Bolívar, but integration is only partial: trade with the USA and China wins out over trade between the countries of the region." }
      ],
      edges: [
        ["ambiente", "colonizzazione", "attracts"],
        ["colonizzazione", "popoli", "mixes"],
        ["colonizzazione", "usa", "shapes"],
        ["colonizzazione", "latina", "shapes"],
        ["latina", "ambientale", "includes"],
        ["usa", "legami", "leads"],
        ["latina", "legami", "seeks"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>The Americas: about 42.5 million km², about 1 billion people; the Andes (7,000 km, Aconcagua 6,961 m), the Rockies, Amazonia, the Mississippi-Missouri.</li>
<li><b>1492</b> Columbus; <b>1494</b> Tordesillas; <b>1776</b> US independence; <b>1810-1825</b> Latin American independence; <b>1822</b> Brazil.</li>
<li>USA: the world's leading power, about 335 million people, immigration, Silicon Valley, Constitution of 1787.</li>
<li>Latin America: urbanised, rich in resources, the most unequal region; Mercosur (1991); deforestation of the Amazon.</li>
<li>The USMCA (2020) replaced NAFTA (1994).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "mc", q: "Which is the largest country in Latin America by population and area?", options: ["Brazil", "Argentina", "Mexico"], answer: 0, explain: "Brazil has about 213 million people and 8.5 million km²." },
        { type: "tf", q: "NAFTA was replaced by the USMCA in 2020.", answer: true, explain: "The agreement between the USA, Canada and Mexico was renegotiated." },
        { type: "text", q: "What is the name of the canal in Central America that links the Atlantic and the Pacific?", answer: ["panama canal", "panama", "the panama canal"], explain: "The Panama Canal opened in 1914." }
      ]
    }
  ],
  glossary: [
    { t: "Andes", d: "A mountain range about 7,000 km long along the west coast of South America." },
    { t: "Treaty of Tordesillas", d: "The 1494 agreement in which Spain and Portugal divided the lands outside Europe between them." },
    { t: "Latifundium", d: "A huge agricultural estate, typical of colonial Latin America." },
    { t: "Favela", d: "A poor, densely populated neighbourhood, typical of Brazilian cities." },
    { t: "Mercosur", d: "The South American common market founded in 1991 (Argentina, Brazil, Paraguay, Uruguay)." },
    { t: "Gini index", d: "A measure of income inequality, from 0 (equality) to 1 (maximum inequality)." },
    { t: "Deforestation", d: "The cutting down and destruction of forests, often to make room for farming and cattle." },
    { t: "El Niño", d: "A periodic warming of the Pacific Ocean that disrupts the climate." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which pre-Columbian people had Cuzco as their capital?", options: ["The Inca", "The Aztecs", "The Maya"], answer: 0, explain: "The Inca Empire ruled the Andes, with its capital at Cuzco in Peru." },
      { type: "num", q: "In what year did the United States declare independence?", answer: 1776, tol: 0, explain: "On 4 July 1776." },
      { type: "mc", q: "What did the Treaty of Tordesillas establish?", options: ["The division of lands outside Europe between Spain and Portugal", "The end of slavery", "The independence of Brazil"], answer: 0, explain: "It was signed in 1494." },
      { type: "tf", q: "Latin America is the region of the world with the greatest income inequality.", answer: true, explain: "Its Gini indices are among the highest on the planet, for historical and structural reasons." },
      { type: "mc", q: "Which river has the greatest discharge of water in the world?", options: ["The Amazon", "The Mississippi", "The Nile"], answer: 0, explain: "The Amazon discharges about 200,000 m³ per second." },
      { type: "text", q: "What is the name of the free-trade agreement between the USA, Canada and Mexico that came into force in 2020?", answer: ["usmca", "t-mec", "cusma"], explain: "The USMCA replaced NAFTA." },
      { type: "order", q: "Put these in chronological order.", items: ["Columbus reaches the Caribbean (1492)", "US Declaration of Independence (1776)", "Independence of Brazil (1822)", "Opening of the Panama Canal (1914)"], explain: "Four milestones in the history of the Americas." },
      { type: "mc", q: "What is the main threat to the Amazon rainforest?", options: ["Deforestation for cattle, farming and mining", "Too much cold", "Too many rivers"], answer: 0, explain: "Deforestation threatens biodiversity and the climate." },
      { type: "mc", q: "What are latifundia?", options: ["Huge agricultural estates concentrated in the hands of a few", "Small urban vegetable gardens", "Underground rivers"], answer: 0, explain: "They are a colonial legacy and a historical cause of inequality." },
      { type: "tf", q: "Canada is the second-largest country in the world.", answer: true, explain: "It covers about 9.98 million km², but has only about 40 million people." }
    ]
  }
});
