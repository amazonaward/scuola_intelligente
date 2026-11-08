TOPIC('en', {
  id: "m3-geo-globalizzazione",
  title: "Globalisation",
  intro: "Why are some countries rich and others poor? How do we measure <b>development</b>? Where are things produced, where are they consumed, where do the people who emigrate go? In this lesson we look at the <b>world economy</b> through a geographer's eyes: data, maps and indicators.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. The three sectors of the economy",
      html: `<p>Every economic activity belongs to one of three great <b>sectors</b>:</p>
<ul>
<li><b>Primary</b> 🌾: agriculture, livestock farming, fishing, forestry, mining. Resources are taken from nature.</li>
<li><b>Secondary</b> 🏭: industry, crafts, construction, energy. Raw materials are turned into products.</li>
<li><b>Tertiary</b> 💻: services, that is trade, transport, banks, education, healthcare, tourism, IT. Today we also speak of the <b>advanced tertiary</b> or <b>quaternary</b> sector for research, IT and high-knowledge services.</li>
</ul>
<p>As a country develops, it moves its workers from one sector to another: at first almost all are farmers, then many are factory workers, finally the majority are in services. In <b>Italy</b> today about <b>70%</b> of workers are in the tertiary sector, about <b>26%</b> in industry and less than <b>4%</b> in agriculture. In a country like <b>Ethiopia</b>, on the other hand, more than 60% still work in agriculture.</p>`
    },
    {
      type: "text",
      title: "2. How development is measured",
      html: `<p><b>GDP</b> (Gross Domestic Product): the value of all the goods and services produced in a country in a year. Divided by the number of inhabitants it gives the <b>GDP per capita</b>, that is the average wealth per person.</p>
<p>But GDP does not tell the whole story: it does not say how wealth is <b>distributed</b>, nor whether people live well. This is why since <b>1990</b> the UN has used the <b>Human Development Index</b> (<b>HDI</b>), devised by the Pakistani economist <b>Mahbub ul Haq</b> with the Indian <b>Amartya Sen</b>. It combines three dimensions:</p>
<ol>
<li>🩺 <b>health</b>: life expectancy at birth;</li>
<li>📚 <b>education</b>: years of schooling;</li>
<li>💶 <b>income</b>: national income per inhabitant.</li>
</ol>
<p>The HDI goes from 0 to 1. At the top are countries like Switzerland, Norway and Iceland (over 0.95); Italy is around <b>0.91</b>; at the bottom are countries of sub-Saharan Africa such as South Sudan, Somalia and Chad (below 0.4).</p>`
    },
    {
      type: "svg",
      title: "North and South of the world",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<path d="M40 50 L170 40 L190 90 L150 120 L130 140 L100 120 L60 90 Z" fill="#3b82f6"/>
<path d="M140 150 L190 160 L200 200 L170 270 L150 270 L145 210 Z" fill="#fbbf24"/>
<path d="M270 50 L330 45 L330 95 L280 100 Z" fill="#3b82f6"/>
<path d="M270 110 L340 105 L360 150 L340 230 L310 240 L290 180 L265 150 Z" fill="#ef4444"/>
<path d="M335 40 L450 35 L460 80 L400 95 L340 100 Z" fill="#a78bfa"/>
<path d="M400 95 L460 80 L540 90 L500 130 L430 140 Z" fill="#fbbf24"/>
<path d="M500 60 L530 55 L535 85 L510 90 Z" fill="#3b82f6"/>
<path d="M470 200 L540 195 L550 240 L490 250 Z" fill="#3b82f6"/>
<path d="M20 175 C150 120 300 110 400 150 C470 175 520 180 590 165" stroke="#111827" stroke-width="4" fill="none" stroke-dasharray="12 6"/>
<text x="560" y="158" font-size="13" text-anchor="end" fill="#111827" font-weight="bold">North / South line (Brandt, 1980)</text>
<rect x="20" y="276" width="18" height="18" fill="#3b82f6"/><text x="44" y="290" font-size="14" fill="#111827">very high development</text>
<rect x="215" y="276" width="18" height="18" fill="#a78bfa"/><text x="239" y="290" font-size="14" fill="#111827">high</text>
<rect x="285" y="276" width="18" height="18" fill="#fbbf24"/><text x="309" y="290" font-size="14" fill="#111827">medium / emerging</text>
<rect x="450" y="276" width="18" height="18" fill="#ef4444"/><text x="474" y="290" font-size="14" fill="#111827">low</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Human development (very simplified diagram)</text>
</svg>`,
      caption: "The \"Brandt line\" (from Willy Brandt's report, 1980) divides a rich North from a poorer South. Today it is less sharp: countries like China, Brazil, India and South Korea have grown a lot. Australia and Japan, to the south or east, belong to the \"North\"."
    },
    {
      type: "text",
      title: "3. Developed, emerging and developing countries",
      html: `<ul>
<li><b>Developed countries</b> (or the \"North of the world\"): Western Europe, USA, Canada, Japan, South Korea, Australia… High income, efficient services, long life expectancy (over 80 years).</li>
<li><b>Emerging countries</b>: they are growing rapidly thanks to industry and exports. The main ones are the <b>BRICS</b>: <b>B</b>razil, <b>R</b>ussia, <b>I</b>ndia, <b>C</b>hina, <b>S</b>outh Africa (since 2024 the group has expanded to other countries, such as Egypt, Ethiopia, Iran and the United Arab Emirates).</li>
<li><b>Developing</b> and <b>least developed countries</b>: mostly in sub-Saharan Africa and some parts of Asia. Many people live from subsistence farming, health and school services are scarce.</li>
</ul>
<p><b>Causes</b> of underdevelopment: the legacy of colonialism, economies based on a single raw material, wars and political instability, corruption, foreign debt, difficult climate and water scarcity. Often the causes are intertwined in a <b>vicious circle</b> (poverty → little schooling → few skilled jobs → poverty).</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: sectors and indicators",
      questions: [
        { type: "mc", q: "In which sector does a doctor work?", options: ["Primary", "Secondary", "Tertiary"], answer: 2, explain: "Healthcare is a service: tertiary sector." },
        { type: "mc", q: "Which three dimensions does the Human Development Index measure?", options: ["Health, education, income", "Army, territory, population", "Industry, agriculture, tourism"], answer: 0, explain: "Life expectancy, years of education and income per inhabitant." },
        { type: "text", q: "What does the \"C\" in BRICS stand for?", answer: ["china", "cina"], explain: "Brazil, Russia, India, China, South Africa." }
      ]
    },
    {
      type: "text",
      title: "4. The geography of production and trade",
      html: `<p>World trade is concentrated on a few great <b>routes</b>:</p>
<ul>
<li>between <b>East Asia</b> (China, Japan, Korea) and <b>Europe</b>, across the Indian Ocean, the <b>Suez</b> Canal and the Mediterranean;</li>
<li>across the <b>Pacific</b>, between Asia and the Americas;</li>
<li>across the <b>Atlantic</b>, between Europe and North America.</li>
</ul>
<p>Some narrow passages are vital (they are called <b>bottlenecks</b> or <b>chokepoints</b>): the <b>Strait of Malacca</b>, the <b>Suez Canal</b> (about 12% of world trade), the <b>Panama Canal</b>, the <b>Strait of Hormuz</b> (through which about a fifth of the world's oil passes).</p>
<p>The biggest ports in the world are in Asia: <b>Shanghai</b> is first by number of containers. In Europe the first is <b>Rotterdam</b> (Netherlands); in Italy <b>Genoa</b>, <b>Trieste</b> and <b>Gioia Tauro</b> stand out.</p>`
    },
    {
      type: "3d",
      title: "On the globe: the great trade routes",
      scene: "globe",
      options: {
        points: [
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 1.3, lon: 103.8, label: "Singapore / Strait of Malacca", color: "#f97316" },
          { lat: 30.0, lon: 32.55, label: "Suez Canal", color: "#f59e0b" },
          { lat: 44.4, lon: 8.9, label: "Genoa", color: "#16a34a" },
          { lat: 51.9, lon: 4.5, label: "Rotterdam", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 9.1, lon: -79.7, label: "Panama Canal", color: "#f59e0b" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#7c3aed" },
          { lat: 26.6, lon: 56.3, label: "Strait of Hormuz", color: "#a16207" }
        ],
        routes: [
          { points: [0, 1, 2, 3], color: "#dc2626" },
          { points: [2, 4], color: "#dc2626" },
          { points: [4, 5], color: "#2563eb" },
          { points: [0, 7], color: "#7c3aed" },
          { points: [7, 6, 5], color: "#7c3aed" }
        ]
      },
      caption: "Follow the route Shanghai → Malacca → Suez → Mediterranean: it is the path of Asian goods towards Europe, the modern heir of the Silk Road."
    },
    {
      type: "text",
      title: "5. Migrations",
      html: `<p>According to the UN there are about <b>280 million international migrants</b> in the world, that is people living in a country other than the one where they were born: about <b>3.6%</b> of the world's population.</p>
<p>People emigrate because of <b>push factors</b> (poverty, wars, persecution, environmental disasters) and <b>pull factors</b> (work, study, safety, family who have already emigrated). Those who flee wars and persecution have the right to protection as <b>refugees</b> (Geneva Convention, 1951).</p>
<p><b>Italy</b> for over a century was a country of <b>emigration</b>: between 1876 and 1976 about <b>27 million</b> Italians left for the Americas, Australia and Northern Europe. From the 1970s–80s it also became a country of <b>immigration</b>: today over <b>5 million</b> foreign citizens live in Italy (about 9% of the population), mainly from Romania, Albania, Morocco, China and Ukraine.</p>
<p>Migrants send home hundreds of billions of dollars every year (<b>remittances</b>): for many poor countries they are more important than international aid.</p>`
    },
    {
      type: "example",
      title: "Practical example: read data like a geographer",
      html: `<table>
<tr><th>Country</th><th>Life expectancy</th><th>% of workers in agriculture</th><th>HDI (approx.)</th></tr>
<tr><td>🇳🇴 Norway</td><td>83 years</td><td>2%</td><td>0.97</td></tr>
<tr><td>🇮🇹 Italy</td><td>83 years</td><td>4%</td><td>0.91</td></tr>
<tr><td>🇧🇷 Brazil</td><td>76 years</td><td>9%</td><td>0.76</td></tr>
<tr><td>🇮🇳 India</td><td>72 years</td><td>43%</td><td>0.64</td></tr>
<tr><td>🇳🇪 Niger</td><td>62 years</td><td>over 70%</td><td>0.39</td></tr>
</table>
<p>What do you notice? The more development grows, the <b>longer people live</b> and the <b>fewer people work in the fields</b>. A geographer looks for exactly these <b>relationships</b> between different data.</p>`
    },
    {
      type: "example",
      title: "Practical example: fair trade",
      html: `<p>When you buy a bar of chocolate, only a small part of the price reaches the farmer who grew the cocoa in Côte d'Ivoire or Ghana (often <b>5–7%</b>).</p>
<p><b>Fair trade</b> guarantees producers a <b>minimum price</b>, bans child labour and funds projects for communities (schools, wells). You recognise the products by the label on the packaging. It is an example of <b>responsible consumption</b>: even the choices of an Italian family have effects on the other side of the world.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… a country measures happiness?",
      html: `<p><b>Bhutan</b>, a small kingdom in the Himalayas, has said since 1972 that it wants to measure not only GDP but <b>Gross National Happiness</b>: health, environment, culture, leisure time, good governance. An idea that inspired the UN, which since 2012 has published the <b>World Happiness Report</b> every year (Finland is almost always near the top).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… half of the world's people live in a circle?",
      html: `<p>On maps you can draw a circle around Southeast Asia (with roughly Myanmar at the centre) that contains <b>more people than the whole rest of the world</b> put together: inside are China, India, Bangladesh, Indonesia, Japan… It is the <b>Valeriepieris circle</b>, named after the user who posted it online in 2013.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand development and globalisation",
      intro: "The numbers on the world economy are enormous: here are some ways to make them concrete.",
      tabs: [
        {
          label: "🍕 The world in 10 slices",
          html: `<p>Imagine that all the wealth produced in the world in a year is a pizza cut into 10 slices and that humanity is made up of <b>10 people</b>.</p>
<ul>
<li>The richest person takes about <b>5 slices</b>.</li>
<li>The next 4 people share about <b>4</b>.</li>
<li>The last 5 people (the poorer half of humanity) share about <b>1 slice</b>.</li>
</ul>
<p>According to the World Inequality Report 2022, the richest 10% receive about 52% of world income, the poorer half about 8.5%.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<circle cx="140" cy="120" r="100" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M140 120 L140 20 A100 100 0 0 1 140 220 Z" fill="#ef4444"/>
<path d="M140 120 L140 220 A100 100 0 0 1 81 39 Z" fill="#f59e0b"/>
<path d="M140 120 L81 39 A100 100 0 0 1 140 20 Z" fill="#84cc16"/>
<rect x="290" y="40" width="20" height="20" fill="#ef4444"/><text x="320" y="56" font-size="16" fill="#111827">richest 10%: about 5 slices</text>
<rect x="290" y="80" width="20" height="20" fill="#f59e0b"/><text x="320" y="96" font-size="16" fill="#111827">the next 40%: about 4 slices</text>
<rect x="290" y="120" width="20" height="20" fill="#84cc16"/><text x="320" y="136" font-size="16" fill="#111827">poorest 50%: about 1 slice</text>
<text x="290" y="190" font-size="14" fill="#78350f">Data: World Inequality Report 2022</text>
</svg>`
        },
        {
          label: "🧩 Game: which sector?",
          html: `<p>Put each job in its economic sector.</p>`,
          widget: "classify",
          options: {
            groups: ["🌾 Primary", "🏭 Secondary", "💻 Tertiary"],
            items: [["Fisherman", 0], ["Miner", 0], ["Winegrower", 0], ["Metalworker", 1], ["Bricklayer", 1], ["Tailor", 1], ["Teacher", 2], ["Programmer", 2], ["Tour guide", 2], ["Lorry driver", 2]]
          }
        },
        {
          label: "🔁 The vicious circle",
          html: `<p>Many problems of poor countries feed one another, as in a circle. To break the circle you must act on one point: <b>school</b> (especially for girls) and <b>health</b> are the ones that economists consider most effective.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<circle cx="300" cy="130" r="95" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="10 6"/>
<rect x="240" y="10" width="120" height="40" rx="8" fill="#ef4444"/><text x="300" y="36" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">Poverty</text>
<rect x="400" y="110" width="150" height="40" rx="8" fill="#f97316"/><text x="475" y="136" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">Little schooling</text>
<rect x="225" y="210" width="150" height="40" rx="8" fill="#eab308"/><text x="300" y="236" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">Poorly paid jobs</text>
<rect x="40" y="110" width="160" height="40" rx="8" fill="#a855f7"/><text x="120" y="136" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">Poor health</text>
<text x="300" y="135" font-size="15" text-anchor="middle" fill="#334155">vicious</text>
<text x="300" y="155" font-size="15" text-anchor="middle" fill="#334155">circle</text>
</svg>`
        },
        {
          label: "🌍 Words from other countries",
          html: `<p>The words used to describe development have changed over time:</p>
<ul>
<li>In the 1950s people said <b>\"Third World\"</b> (neither Western nor Soviet bloc).</li>
<li>Then <b>\"underdeveloped countries\"</b>, which however sounded like a judgement.</li>
<li>Today the UN and many books speak of the <b>\"Global South\"</b> or of <b>\"developing countries\"</b>; the World Bank divides countries by income (low, lower-middle, upper-middle, high).</li>
<li>The Swedish doctor <b>Hans Rosling</b> proposed abolishing the division into two and using <b>4 income levels</b>: most of humanity, he said, now lives in the middle levels.</li>
</ul>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: economy and development in the world",
      nodes: [
        { id: "risorse", label: "Resources and sectors", x: 15, y: 10, color: "#16a34a", html: "Primary, secondary, tertiary.", why: "The division into three sectors was proposed in the 1930s–40s by economists such as Allan Fisher and Colin Clark, who noticed how development shifts workers from agriculture to industry and then to services." },
        { id: "pil", label: "GDP and GDP per capita", x: 50, y: 10, color: "#2563eb", html: "Value of goods and services produced in a year.", why: "GDP was devised by the economist Simon Kuznets in the USA in the 1930s, during the Great Depression, to understand how far the economy had collapsed. He himself warned that it does not measure well-being." },
        { id: "isu", label: "Human Development Index", x: 85, y: 10, color: "#a855f7", html: "Health + education + income, from 0 to 1.", why: "Created in 1990 by Mahbub ul Haq and Amartya Sen (Nobel prize 1998) for the UN: development, they said, is increasing people's range of choices, not just money." },
        { id: "divario", label: "North and South of the world", x: 50, y: 35, color: "#ef4444", html: "Big differences in wealth and well-being between countries.", why: "The causes are historical (colonialism, the Industrial Revolution that began in Europe), geographical (climate, access to the sea, tropical diseases) and political (wars, weak institutions)." },
        { id: "emergenti", label: "Emerging countries", x: 15, y: 40, color: "#f59e0b", html: "BRICS and other fast-growing countries.", why: "The term BRIC was coined in 2001 by the economist Jim O'Neill of the bank Goldman Sachs; the countries adopted it and since 2009 they have met in official summits (South Africa joined in 2010)." },
        { id: "commercio", label: "Trade and routes", x: 85, y: 40, color: "#0ea5e9", html: "Goods travelling on great sea routes and through bottlenecks.", why: "About 80% of goods (by volume) travel by sea because the ship is the cheapest means for large quantities. The Suez (1869) and Panama (1914) canals shortened routes enormously." },
        { id: "migrazioni", label: "Migrations", x: 25, y: 68, color: "#ec4899", html: "About 280 million international migrants.", why: "People move because of push and pull factors; the differences in income and safety between countries are the strongest push." },
        { id: "disuguaglianza", label: "Inequality", x: 70, y: 68, color: "#dc2626", html: "Distances between countries and within each country.", why: "Between countries the gaps have narrowed a little (thanks to Asia's growth), while within many countries they have increased: this has been shown by the research of economists like Branko Milanović and Thomas Piketty." },
        { id: "sostenibile", label: "Sustainable development", x: 50, y: 92, color: "#22c55e", html: "Growing without taking resources from future generations. UN 2030 Agenda, 17 goals.", why: "The definition comes from the Brundtland Report (UN, 1987). In 2015 all UN countries approved the 2030 Agenda with 17 Sustainable Development Goals, from \"ending poverty\" to \"combating climate change\"." }
      ],
      edges: [
        ["risorse", "pil", "produce the"],
        ["pil", "isu", "isn't enough →"],
        ["pil", "divario", "measures the"],
        ["isu", "divario", "measures the"],
        ["divario", "emergenti", "narrows with the"],
        ["divario", "migrazioni", "pushes the"],
        ["commercio", "emergenti", "makes grow the"],
        ["divario", "disuguaglianza", "is part of the"],
        ["disuguaglianza", "sostenibile", "goal"],
        ["migrazioni", "sostenibile", "goal"]
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li>Sectors: <b>primary</b> (nature), <b>secondary</b> (industry), <b>tertiary</b> (services).</li>
<li><b>GDP per capita</b> = average wealth per person; <b>HDI</b> = health + education + income.</li>
<li><b>Developed</b>, <b>emerging</b> (BRICS) and <b>developing</b> countries; the North/South gap is partly historical (colonialism).</li>
<li>Trade on great <b>sea routes</b>; bottlenecks: Suez, Panama, Malacca, Hormuz.</li>
<li>About <b>280 million</b> migrants; Italy was a country of emigration and today is also one of immigration.</li>
<li><b>Sustainable development</b>: 2030 Agenda, 17 goals.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: trade and migrations",
      questions: [
        { type: "mc", q: "Which is the biggest port in Europe?", options: ["Genoa", "Rotterdam", "Marseille"], answer: 1, explain: "Rotterdam, in the Netherlands." },
        { type: "tf", q: "Between 1876 and 1976 about 27 million Italians emigrated abroad.", answer: true, explain: "It is one of the greatest emigrations in modern history." },
        { type: "mc", q: "Which of these is a pull factor for a migrant?", options: ["A war in his country", "A job offered in another country", "A drought"], answer: 1, explain: "Wars and droughts are push factors; work is a pull factor." }
      ]
    }
  ],
  glossary: [
    { t: "Primary sector", d: "Activities that draw resources from nature: agriculture, livestock farming, fishing, mining." },
    { t: "Secondary sector", d: "Transformation activities: industry, construction, energy." },
    { t: "Tertiary sector", d: "Services: trade, transport, healthcare, education, tourism, banks." },
    { t: "GDP", d: "Gross Domestic Product: the value of goods and services produced in a country in a year." },
    { t: "HDI", d: "The UN's Human Development Index: combines life expectancy, education and income." },
    { t: "Emerging countries", d: "Countries with rapid economic growth, like the BRICS." },
    { t: "Remittances", d: "Money that migrants send to their families in the country of origin." },
    { t: "Refugee", d: "A person who flees war or persecution and has the right to international protection." },
    { t: "Fair trade", d: "Trade that guarantees producers in poor countries a fair price and decent working conditions." },
    { t: "Sustainable development", d: "Development that meets the needs of today without compromising those of future generations." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "A company that makes cars belongs to the…", options: ["primary sector", "secondary sector", "tertiary sector"], answer: 1, explain: "Turning materials into products is industry: secondary sector." },
      { type: "tf", q: "GDP per capita says exactly how much each inhabitant earns.", answer: false, explain: "It is an average: it does not say how wealth is distributed." },
      { type: "mc", q: "Why did the UN create the Human Development Index?", options: ["To measure only wealth", "To measure health and education too, not just income", "To count inhabitants"], answer: 1, explain: "Development is not made of money alone." },
      { type: "text", q: "What is the group of emerging countries Brazil, Russia, India, China, South Africa called?", answer: ["brics", "the brics"], explain: "BRICS, from the initials of the countries." },
      { type: "mc", q: "Which canal links the Mediterranean Sea to the Red Sea?", options: ["Panama Canal", "Suez Canal", "Corinth Canal"], answer: 1, explain: "The Suez Canal, in Egypt, opened in 1869." },
      { type: "mc", q: "Where is the biggest port in the world by number of containers?", options: ["Shanghai", "Genoa", "New York"], answer: 0, explain: "Shanghai, in China." },
      { type: "num", q: "Roughly how many million international migrants are there in the world?", answer: 280, tol: 20, explain: "About 280 million according to the UN (2020 figure)." },
      { type: "tf", q: "Italy was a country of emigration for a century.", answer: true, explain: "From 1876 to 1976 about 27 million Italians left." },
      { type: "order", q: "Put the countries in order from highest HDI to lowest.", items: ["Norway", "Italy", "Brazil", "India", "Niger"], explain: "About 0.97 → 0.91 → 0.76 → 0.64 → 0.39." },
      { type: "mc", q: "What does fair trade guarantee?", options: ["Lower prices for buyers", "A fair price for producers and no child labour", "That all products are Italian"], answer: 1, explain: "It protects producers in the poorest countries." },
      { type: "text", q: "What is the money that migrants send to their families back home called?", answer: ["remittances", "the remittances", "remittance"], explain: "Remittances." },
      { type: "mc", q: "How many Sustainable Development Goals are there in the 2030 Agenda?", options: ["5", "10", "17"], answer: 2, explain: "17 goals approved by the UN in 2015." }
    ]
  }
});
