TOPIC('en', {
  id: "l1-geo-citta",
  title: "Cities and urbanisation",
  intro: "Since 2007, for the first time in history, more people in the world live in <b>cities</b> than in the countryside. Cities take up very little space (less than 3% of the land surface) but consume most of the energy and produce most of the wealth and emissions. How are they born, how do they grow, how are they organised? And how can they become <b>sustainable</b>?",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What a city is and how it is born",
      html: `<p>There is no single definition of a city: statistics use different thresholds (in Denmark 200 inhabitants are enough, in Japan 50,000). In geography a <b>city</b> is defined as a permanent, high-density settlement with functions <b>other than agriculture</b> (trade, crafts, government, culture, services) that has influence over the surrounding area.</p>
<p>The first cities appeared about <b>5,000-6,000 years ago</b> in <b>Mesopotamia</b> (<b>Uruk</b>, in present-day Iraq, one of the oldest, with tens of thousands of inhabitants), and soon afterwards along the Nile, the Indus (Mohenjo-daro) and the Yellow River. A necessary condition: agriculture produced a food <b>surplus</b>, which allowed part of the population to do other things (craftsmen, priests, soldiers, scribes). Ancient cities grew up near water, at crossroads of trade routes, or on hills that could be defended.</p>
<p><b>Urbanisation</b> is the process by which the share of the population living in cities grows. It exploded with the <b>Industrial Revolution</b>: London, which had about 1 million inhabitants in 1800, had over 6 million by 1900. Today the fastest growth is in <b>Asia</b> and <b>Africa</b>: cities like Lagos (Nigeria) or Dhaka (Bangladesh) grow by hundreds of thousands of people every year.</p>`
    },
    {
      type: "text",
      title: "2. Urbanisation in numbers",
      html: `<ul>
<li>1950: about 30% of the world's population lives in cities. <b>2007</b>: it passes 50%. Today: about <b>57%</b>. UN forecast for <b>2050</b>: about <b>68%</b>.</li>
<li>North America, Western Europe, Latin America: over 80% urban. In <b>Italy</b> about 71%. Africa and South Asia: still around 45-50%, but urbanising very fast.</li>
<li><b>Metropolis</b>: a large city whose area of influence extends to nearby towns (a <b>metropolitan area</b>, or a <b>conurbation</b> when the centres merge with one another).</li>
<li><b>Megacity</b>: over <b>10 million</b> inhabitants. Today there are about 33-37. The largest: <b>Tokyo</b> (about 37 million in the metropolitan area), <b>Delhi</b> (over 30), <b>Shanghai</b>, <b>Dhaka</b>, <b>São Paulo</b>, <b>Mexico City</b>, <b>Cairo</b>, <b>Beijing</b>, <b>Mumbai</b>, <b>Osaka</b>. Most megacities are in Asia and in developing countries.</li>
<li><b>Megalopolis</b>: a vast urban region formed by several metropolises merged together. The term was made famous by the French geographer <b>Jean Gottmann</b> (1961) for the north-eastern coast of the USA from <b>Boston to Washington</b> (\"Boswash\"), with over 50 million inhabitants. Others: the <b>Tokyo-Osaka</b> belt (Tokaido), the <b>Pearl River Delta</b> in China, and in Europe the so-called <b>\"Blue Banana\"</b> (London-Benelux-Rhine-Milan).</li>
</ul>
<p>Cities grow through <b>natural increase</b> but above all through <b>rural exodus</b> (rural-urban migration): farmers leave the countryside (pushed by the mechanisation of agriculture and rural poverty, and attracted by wages and services) to move to the city.</p>`
    },
    {
      type: "3d",
      title: "On the globe: the megacities",
      scene: "globe",
      options: {
        points: [
          { lat: 35.7, lon: 139.7, label: "Tokyo", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "Delhi", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 23.8, lon: 90.4, label: "Dhaka", color: "#dc2626" },
          { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#f59e0b" },
          { lat: 19.4, lon: -99.1, label: "Mexico City", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Cairo", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Mumbai", color: "#dc2626" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 6.5, lon: 3.4, label: "Lagos (growing fast)", color: "#16a34a" },
          { lat: 41.9, lon: 12.5, label: "Rome", color: "#7c3aed" }
        ]
      },
      caption: "Red: Asian megacities; orange: Latin America and North Africa; green: Lagos, one of the most dynamic cities in the world. Notice how most of them are in Asia."
    },
    {
      type: "svg",
      title: "The growth of the urban population",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="250" stroke="#111827" stroke-width="2"/>
<rect x="85" y="190" width="70" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="185" y="160" width="70" height="90" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="285" y="125" width="70" height="125" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="385" y="95" width="70" height="155" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="485" y="60" width="70" height="190" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="120" y="183" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">30%</text>
<text x="220" y="153" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">36%</text>
<text x="320" y="118" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">43%</text>
<text x="420" y="88" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">51%</text>
<text x="520" y="53" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">57%</text>
<text x="120" y="272" font-size="15" text-anchor="middle" fill="#111827">1950</text>
<text x="220" y="272" font-size="15" text-anchor="middle" fill="#111827">1970</text>
<text x="320" y="272" font-size="15" text-anchor="middle" fill="#111827">1985</text>
<text x="420" y="272" font-size="15" text-anchor="middle" fill="#111827">2007</text>
<text x="520" y="272" font-size="15" text-anchor="middle" fill="#111827">today</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Share of the world population living in cities (rounded values)</text>
</svg>`,
      caption: "Urbanisation has grown steadily: the urban population overtook the rural population around 2007. The percentages are approximate, from UN estimates."
    },
    {
      type: "quiz",
      title: "Mini-quiz: numbers and definitions",
      questions: [
        { type: "mc", q: "When did the urban population first overtake the rural population?", options: ["1850", "1950", "Around 2007"], answer: 2, explain: "Around 2007, according to the UN, the urban population passed the 50% mark." },
        { type: "mc", q: "Roughly how many inhabitants must a megacity have?", options: ["More than 1 million", "More than 10 million", "More than 100 million"], answer: 1, explain: "By convention, a megacity has more than 10 million inhabitants." },
        { type: "text", q: "What do we call an urban region formed by several metropolises merged together (e.g. Boston-Washington)?", answer: ["megalopolis", "a megalopolis", "megalopolis (boswash)"], explain: "Megalopolis, a term made famous by Jean Gottmann in 1961." }
      ]
    },
    {
      type: "text",
      title: "3. How a city is organised",
      html: `<p>Geographers have proposed several <b>models</b> to describe the internal structure of cities:</p>
<ul>
<li><b>Concentric zone model</b> (Ernest Burgess, Chicago, 1925): at the centre the <b>CBD</b> (<i>Central Business District</i>), then a zone in transition, working-class neighbourhoods, middle-class residential areas and finally the commuter zone on the edges.</li>
<li><b>Sector model</b> (Homer Hoyt, 1939): the city develops in wedges along the main transport routes (roads, railways, rivers).</li>
<li><b>Multiple nuclei model</b> (Harris and Ullman, 1945): several centres (port, university, industrial area, shopping centre) with different functions.</li>
</ul>
<p>The main <b>urban functions</b> are housing, trade, industry, services (schools, healthcare, administration), culture and leisure, infrastructure and transport. The city is divided into <b>districts</b>: the historic centre, residential areas, suburbs and outskirts, industrial areas, green spaces.</p>
<p>The <b>historic centre</b> of Italian and European cities often keeps its medieval layout (narrow streets, squares, walls), often derived from the ancient <b>Roman castrum</b> (two perpendicular streets, the <i>cardo</i> and the <i>decumanus</i>, as in Turin or Florence). North American cities, by contrast, have a downtown with skyscrapers and a <b>grid</b> plan (Manhattan). Cities in the Islamic world often have a <b>medina</b> with narrow alleys around the mosque and the market (<i>souk</i>). Latin American cities were founded by the Spanish around a <b>plaza mayor</b> (main square).</p>`
    },
    {
      type: "svg",
      title: "Burgess's concentric zone model",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="130" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="100" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="170" cy="150" r="42" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
<circle cx="170" cy="150" r="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="170" y="155" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text>
<text x="170" y="115" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">2</text>
<text x="170" y="85" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">3</text>
<text x="170" y="52" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">4</text>
<text x="170" y="26" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">5</text>
<text x="340" y="55" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#dc2626">1</tspan> Central Business District (CBD)</text>
<text x="340" y="95" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#c2410c">2</tspan> Zone in transition (light industry)</text>
<text x="340" y="135" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#b45309">3</tspan> Working-class housing</text>
<text x="340" y="175" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">4</tspan> Middle-class residences</text>
<text x="340" y="215" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">5</tspan> Commuter zone</text>
<text x="340" y="265" font-size="14" fill="#6b7280">Theoretical model (Chicago, 1925): every real city has its own shape.</text>
</svg>`,
      caption: "The concentric model was based on observing Chicago: the city grows outwards from the centre, and social groups settle in rings. Today many cities have several centres."
    },
    {
      type: "text",
      title: "4. Problems and challenges of cities",
      html: `<ul>
<li><b>Slums</b> (<i>favelas</i>, <i>bidonvilles</i>, shanty towns): about <b>1.1 billion</b> people live in informal settlements, without drinking water, sewers or property rights. <b>Dharavi</b> (Mumbai), <b>Kibera</b> (Nairobi) and <b>Rocinha</b> (Rio de Janeiro) are among the best known. But they are also places of great economic vitality: in Dharavi thousands of small businesses work in recycling, leather and pottery.</li>
<li><b>Traffic and smog</b>: cities concentrate vehicles and emissions. Delhi, Lahore and Dhaka are among the most polluted in the world; in winter Italy's Po Valley often has fine particulate levels (PM10, PM2.5) above the limits, because the mountains and poor ventilation trap the air.</li>
<li><b>Urban heat island</b>: asphalt and concrete absorb heat and there is little greenery, so the city can be <b>2-5 °C</b> warmer than the countryside during the day and up to 8-10 °C warmer on some summer nights.</li>
<li><b>Land consumption</b> and <b>urban sprawl</b> (low-density expansion): building on farmland seals the soil and increases the risk of flooding; in Italy many hectares of soil are lost every day.</li>
<li><b>Inequality</b> and <b>segregation</b> (rich and poor neighbourhoods), <b>gentrification</b> (a neighbourhood is renovated and wealthier residents move in, while the previous ones are pushed out by high rents).</li>
<li><b>Waste, noise, housing</b>: waste disposal, the cost of rent, housing shortages.</li>
<li><b>Hazards</b>: earthquakes, floods, heatwaves; large coastal cities (Jakarta, Miami, Venice, Dhaka) are exposed to sea-level rise. Jakarta is sinking because of groundwater extraction, and Indonesia is building a new capital, Nusantara, on the island of Borneo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: traffic in a city",
      html: `<p>To bring 1,000 people into the city centre you need:</p>
<ul>
<li>about <b>800 cars</b> (with 1.2 people per car): they fill more than a kilometre of dual carriageway;</li>
<li>about <b>12 full buses</b>;</li>
<li>about <b>2 trams</b> (or a single 6-car underground train).</li>
</ul>
<p>These numbers are orders of magnitude, but they show why <b>public transport</b> is the most efficient tool for dense cities: it uses less space and less energy, and produces fewer emissions <i>per passenger</i>. A bicycle takes up about a tenth of the space of a moving car. That is why many cities (Copenhagen, Amsterdam, Utrecht, Paris) have expanded cycle lanes and pedestrian zones.</p>`
    },
    {
      type: "example",
      title: "Worked example: how dense is your city?",
      html: `<p>One city has <b>150,000 inhabitants</b> on <b>60 km²</b>; a neighbouring city has 150,000 on <b>240 km²</b>.</p>
<ul>
<li>Density of the first = 150,000 ÷ 60 = <b>2,500 inhabitants/km²</b>.</li>
<li>Density of the second = 150,000 ÷ 240 = <b>625 inhabitants/km²</b>.</li>
</ul>
<p>With the same number of inhabitants, the second uses <b>four times as much land</b>: it needs more roads, more pipes, more power lines and more kilometres to get to school or work. That is why many urban planners support the <b>compact city</b>. But density isn't everything: a dense city also needs parks and good-quality public space, otherwise life there is unpleasant.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… a city can live on the water?",
      html: `<p><b>Venice</b> is built on about 118 small islands in the lagoon, on wooden piles of alder, larch and oak driven into the mud. It has over 400 bridges. To protect it from the <i>acqua alta</i> (exceptionally high tides), the <b>MOSE</b> system of mobile flood barriers was built and came into operation in 2020. But global warming and subsidence (the sinking of the ground) remain a challenge: Venice is an <b>adaptation</b> laboratory for all coastal cities.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… some cities were built from scratch?",
      html: `<p>Some capitals were planned and built on the drawing board: <b>Brasília</b> (Brazil, inaugurated in 1960, designed by Lúcio Costa and Oscar Niemeyer in the shape of an aeroplane), <b>Canberra</b> in Australia (1913), <b>Washington</b> D.C., <b>Abuja</b> in Nigeria (from 1991). Not all of them work as planned: a city lives not only on plans, but on the habits of the people who live there.</p>`
    },
    {
      type: "text",
      title: "5. Towards sustainable cities",
      html: `<p>Cities cover about 3% of the land surface but consume over two thirds of the world's energy and produce about 70% of energy-related CO₂ emissions. That is exactly why they are the place where the ecological transition can work best: density means more efficient services, public transport and less waste of land.</p>
<p><b>Goal 11</b> of the UN 2030 Agenda is called \"<b>Sustainable cities and communities</b>\": making cities inclusive, safe, resilient and sustainable. Some strategies:</p>
<ul>
<li><b>Sustainable mobility</b>: underground railways, trams, electric buses, cycle lanes, limited traffic zones. Example: <b>Curitiba</b> (Brazil) invented dedicated lanes for rapid buses (BRT) in the 1970s, later copied by hundreds of cities.</li>
<li><b>Compact city</b> and <b>\"15-minute city\"</b> (proposed by professor Carlos Moreno and adopted in Paris): essential services (school, shops, doctor, green spaces) within 15 minutes on foot or by bike.</li>
<li><b>More greenery</b>: parks, green roofs, trees that reduce the heat island (a mature tree can absorb tens of kg of CO₂ a year and provide cool shade). In Milan the <b>Bosco Verticale</b> (\"Vertical Forest\", Stefano Boeri, 2014) has about 800 trees (and thousands of shrubs) on the façades of two towers.</li>
<li><b>Efficient buildings</b>: insulation, solar panels, district heating (in Turin and Brescia), energy retrofits.</li>
<li><b>Circular economy</b>: separate waste collection, recycling, reuse.</li>
<li><b>Participation</b>: citizens make decisions through participatory budgets and neighbourhood assemblies.</li>
<li><b>Smart cities</b> use sensors and data to manage traffic, waste, lighting and water, but they must also protect <b>privacy</b>.</li>
</ul>`
    },
    {
      type: "decision",
      title: "What should we do with the main square?",
      html: `<p>You are the councillor responsible for transport in a city of 300,000 inhabitants. The centre is congested with cars and the air is often polluted. You have the chance to transform the main square, which is currently a car park for 150 cars.</p>`,
      question: "Which choice seems best for a sustainable city?",
      options: [
        { label: "Build a bigger underground car park", outcome: "It attracts even more cars into the centre: traffic increases, emissions stay high and the cost is very high." },
        { label: "Pedestrianise it, with trees and benches, and improve buses and trams", outcome: "Many cities (Pontevedra in Spain, Oslo, Bologna with its 30 km/h zones) have seen traffic and accidents fall, while shops have stayed lively or even grown." },
        { label: "Do nothing so as not to upset anyone", outcome: "The problem remains and gets worse as the number of cars grows, and pollution affects people's health." }
      ],
      answer: 1,
      explain: "Studies of European cities show that offering alternatives to private cars (public transport, cycle lanes, pedestrian spaces) reduces traffic and pollution; shopkeepers often fear a drop in sales that then doesn't happen, because pedestrians spend more time and money in shops."
    },
    {
      type: "alternatives",
      title: "Other ways to understand cities",
      intro: "A city is a complex system: here are three ways of looking at it.",
      tabs: [
        {
          label: "🫀 The city as an organism",
          html: `<p>A city can be compared to a <b>body</b>: roads and railways are the <b>arteries</b> that carry people and goods; sewers and treatment plants are the <b>digestive system</b>; electricity and the internet are the <b>nervous system</b>; parks are the <b>lungs</b>; the centre is the economic <b>heart</b>. Like a body, a city consumes energy and produces waste (its <b>urban metabolism</b>): a sustainable city tries to reduce what it takes in and to recycle what it throws away.</p>`
        },
        {
          label: "🗺️ Reading a city map",
          html: `<p>The shape of the streets tells a story: <b>winding, narrow</b> streets are typical of medieval centres; <b>right-angled</b> (grid) streets of Roman castra or planned cities (central Turin, Barcelona's Eixample); wide <b>avenues</b> and <b>boulevards</b> are the legacy of 19th-century reforms (Haussmann's Paris); <b>herringbone</b> or <b>cul-de-sac</b> layouts are typical of 20th-century suburbs. Try it with a map of your town: how many of these shapes can you find?</p>`,
          widget: "match",
          options: { pairs: [["Winding streets and alleys", "Medieval centre"], ["Right-angled grid", "Roman castrum or planned city"], ["Wide tree-lined avenues", "19th-century reform"], ["Cul-de-sacs and detached houses", "20th-century suburb"]] }
        },
        {
          label: "🌡️ The heat island",
          html: `<p>An August day: the grass in a park is about 30 °C, asphalt in the sun can reach <b>60 °C</b>, a light-coloured concrete roof 45 °C. Asphalt absorbs light and releases it as heat at night, and concrete doesn't transpire like leaves do. That's why the city doesn't cool down at night. Solutions: light-coloured or green roofs, more trees, permeable paving, fountains, less air conditioning (which pumps heat outside).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fffbeb"/><polyline points="30,150 100,130 180,60 250,50 320,70 400,120 470,140" fill="none" stroke="#dc2626" stroke-width="4"/><text x="250" y="35" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">city centre (warmer)</text><text x="60" y="175" font-size="14" fill="#15803d" font-weight="bold">countryside</text><text x="400" y="175" font-size="14" fill="#15803d" font-weight="bold">park / countryside</text><text x="250" y="190" font-size="14" text-anchor="middle" fill="#111827">temperature profile from one side to the other</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the city, why it exists and how it changes",
      nodes: [
        { id: "surplus", label: "Agriculture and surplus", x: 20, y: 8, color: "#16a34a", html: "Producing more food than the farmers need.", why: "Without an agricultural surplus nobody could be a craftsman or a priest: the city was born after the agricultural revolution, about 5,000-6,000 years ago in Mesopotamia, thanks to irrigation and systems for storing grain." },
        { id: "funzioni", label: "Urban functions", x: 80, y: 8, color: "#2563eb", html: "Trade, government, culture, services.", why: "The city concentrates exchanges and information: more people close together means more encounters, more ideas and a bigger market (the 'agglomeration economies' studied by the economist Alfred Marshall in 1890)." },
        { id: "urbanizzazione", label: "Urbanisation", x: 50, y: 30, color: "#f59e0b", html: "The share of people living in cities grows.", why: "With the Industrial Revolution (from about 1760) factories concentrated work in cities; today urban growth is driven by Asia and Africa and by the mechanisation of agriculture, which frees up labour in the countryside." },
        { id: "struttura", label: "Structure and models", x: 20, y: 56, color: "#a855f7", html: "Centre, suburbs, districts, concentric and sector models.", why: "The models of Burgess, Hoyt, Harris and Ullman came out of the Chicago School, which in the 1920s studied the city as a social laboratory." },
        { id: "problemi", label: "Problems", x: 80, y: 56, color: "#dc2626", html: "Smog, traffic, slums, heat island.", why: "They are effects of concentration: more people and more activities in the same space, often growing faster than services. In many cities informal expansion comes before infrastructure." },
        { id: "sostenibilita", label: "Sustainable cities", x: 50, y: 80, color: "#14b8a6", html: "Mobility, greenery, efficient buildings, participation.", why: "Goal 11 of the 2030 Agenda and the New Urban Agenda (UN, Habitat III, Quito 2016) recognise that the future of the planet will largely be decided in cities." },
        { id: "futuro", label: "The urban future", x: 50, y: 96, color: "#ec4899", html: "About 2.5 billion new city dwellers by 2050.", why: "According to the UN, nearly 90% of urban growth will take place in Asia and Africa: the choices made now about housing and transport will determine resource consumption for decades." }
      ],
      edges: [
        ["surplus", "funzioni", "makes possible"],
        ["funzioni", "urbanizzazione", "attract →"],
        ["urbanizzazione", "struttura", "produces"],
        ["urbanizzazione", "problemi", "creates"],
        ["problemi", "sostenibilita", "call for"],
        ["struttura", "sostenibilita", "guides"],
        ["sostenibilita", "futuro", "prepares"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Since <b>2007</b> more people have lived in cities than in the countryside (about 57% today, about 68% in 2050).</li>
<li><b>Metropolis</b>, <b>megacity</b> (over 10 million), <b>megalopolis</b> (several merged metropolises: Boswash).</li>
<li>City models: <b>concentric</b> (Burgess), <b>sector</b> (Hoyt), <b>multiple nuclei</b> (Harris-Ullman).</li>
<li>Problems: slums (1.1 billion people), smog, traffic, heat island, land consumption, inequality.</li>
<li><b>Sustainable cities</b>: public transport, urban greenery, energy efficiency, circular economy, Goal 11 of the 2030 Agenda.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: structure and sustainability",
      questions: [
        { type: "mc", q: "What is the urban heat island?", options: ["An area of the city that is warmer than the surrounding countryside", "An island in the sea near the city", "A neighbourhood with lots of parks"], answer: 0, explain: "Asphalt and concrete store heat, so cities are warmer than the countryside, especially at night." },
        { type: "mc", q: "Which number is the 2030 Agenda Goal dedicated to sustainable cities?", options: ["Goal 2", "Goal 11", "Goal 17"], answer: 1, explain: "Goal 11 is \"Sustainable cities and communities\"." },
        { type: "tf", q: "Burgess's model describes the city as a series of concentric rings around the business district.", answer: true, explain: "It is the concentric zone model, developed in Chicago in 1925." }
      ]
    }
  ],
  glossary: [
    { t: "Urbanisation", d: "The increase in the share of the population living in cities and the growth of urban areas." },
    { t: "Metropolis", d: "A large city with important functions and an area of influence that includes nearby towns." },
    { t: "Megacity", d: "A city with more than 10 million inhabitants." },
    { t: "Megalopolis", d: "A vast urban region formed by several merged metropolises (e.g. Boston-Washington)." },
    { t: "Conurbation", d: "Several neighbouring urban centres that have merged into a single built-up area." },
    { t: "CBD", d: "Central Business District: the business centre of a city, with offices, banks and shops." },
    { t: "Rural exodus", d: "The movement of population from the countryside to cities." },
    { t: "Slum", d: "An informal, poor urban settlement with makeshift housing and few services (shanty town, favela)." },
    { t: "Heat island", d: "The phenomenon whereby urban areas have higher temperatures than the surrounding rural areas." },
    { t: "Gentrification", d: "The renovation of a working-class neighbourhood, with wealthier residents moving in and rents rising." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What condition made the birth of the first cities possible?", options: ["An agricultural surplus that freed people from farm work", "The invention of the car", "The discovery of America"], answer: 0, explain: "When farmers produced more food than they needed, other people could devote themselves to crafts, trade and government." },
      { type: "num", q: "If 57% of 8 billion people live in cities, how many billion people are urban (round to one decimal place)?", answer: 4.6, tol: 0.1, unit: "billion", explain: "8 × 0.57 = 4.56 ≈ 4.6 billion." },
      { type: "mc", q: "Who coined the term 'megalopolis' for the north-eastern coast of the USA?", options: ["Jean Gottmann", "Ernest Burgess", "Carlos Moreno"], answer: 0, explain: "The French geographer Jean Gottmann, in 1961." },
      { type: "mc", q: "In which zone of Burgess's model are the main offices, banks and shops?", options: ["Commuter zone", "The CBD, the business district", "Working-class housing"], answer: 1, explain: "The CBD occupies the heart of the city." },
      { type: "tf", q: "Slums are always places with no economic activity.", answer: false, explain: "Many (like Dharavi in Mumbai) are home to thousands of small businesses; what they lack is services and security." },
      { type: "order", q: "Put in chronological order.", items: ["First cities in Mesopotamia", "Industrial Revolution and the growth of London", "Urban population overtakes rural population (2007)", "Forecast of 68% urban (2050)"], explain: "From Mesopotamian origins, to industrial urbanisation, to 2007, to the 2050 forecasts." },
      { type: "mc", q: "Which measure reduces the urban heat island?", options: ["More trees and green roofs", "More dark asphalt", "More air conditioning blowing outside"], answer: 0, explain: "Vegetation provides shade and cools the air through transpiration." },
      { type: "mc", q: "What does the idea of the '15-minute city' propose?", options: ["Having essential services within 15 minutes on foot or by bike", "Building 15-lane motorways", "Limiting the population to 15,000"], answer: 0, explain: "The model reduces car journeys and makes neighbourhoods more liveable." },
      { type: "text", q: "What is the name of the phenomenon in which people leave the countryside to move to cities?", answer: ["rural exodus", "the rural exodus", "rural-urban migration", "rural to urban migration", "urbanisation", "urbanization"], explain: "Rural exodus (urbanisation is often its consequence)." },
      { type: "tf", q: "By 2050 almost all urban population growth will take place in Asia and Africa.", answer: true, explain: "According to UN projections, about 90% of urban growth will take place on these two continents." }
    ]
  }
});
