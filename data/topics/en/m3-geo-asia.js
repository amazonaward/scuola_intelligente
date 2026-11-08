TOPIC('en', {
  id: "m3-geo-asia",
  title: "Asia",
  intro: "Asia is the continent of records: the largest, the most populated, with the highest mountain (Everest) and the lowest point of the dry land (the Dead Sea). Almost <b>6 people in 10</b> in the world live here. In this lesson we cross it and stop in three giants: <b>China</b>, <b>India</b> and <b>Japan</b>.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. The largest continent",
      html: `<ul>
<li><b>Area</b>: about 44.6 million km² (about 30% of the dry land).</li>
<li><b>Inhabitants</b>: about 4.8 billion (about 59% of humanity).</li>
<li><b>Borders</b>: to the west with Europe along the <b>Ural</b> mountains, the Ural river, the Caspian Sea and the <b>Caucasus</b>; to the south-west with Africa along the isthmus and the Suez Canal. It is washed by three oceans: <b>Arctic</b>, <b>Pacific</b> and <b>Indian</b>.</li>
</ul>
<p>It is usually divided into five large regions:</p>
<table>
<tr><th>Region</th><th>Main countries</th></tr>
<tr><td>Western Asia (Near and Middle East)</td><td>Turkey, Israel, Saudi Arabia, Iran, Iraq</td></tr>
<tr><td>Central Asia</td><td>Kazakhstan, Uzbekistan, Afghanistan</td></tr>
<tr><td>South Asia</td><td>India, Pakistan, Bangladesh, Nepal, Sri Lanka</td></tr>
<tr><td>East Asia</td><td>China, Japan, South and North Korea, Mongolia</td></tr>
<tr><td>Southeast Asia</td><td>Indonesia, Vietnam, Thailand, the Philippines, Malaysia</td></tr>
</table>
<p><b>Siberian Russia</b> (east of the Urals) is also geographically Asia, even though Russia is considered a European state.</p>`
    },
    {
      type: "text",
      title: "2. Relief, rivers and climates",
      html: `<p><b>Relief</b>: in the centre is the \"roof of the world\": the <b>Himalayas</b> with 10 of the 14 peaks above 8,000 m, including <b>Everest</b> (8,849 m), and the <b>Tibetan</b> plateau (on average over 4,500 m). It was born from the collision of the Indian plate and the Eurasian plate, which began about 50 million years ago: the Himalayas still grow by a few millimetres a year.</p>
<p><b>Rivers</b>: from the Tibetan plateau rise the great rivers of Asia: the <b>Yangtze</b> (Blue River, about 6,300 km, the longest in Asia), the <b>Huang He</b> (Yellow River), the <b>Mekong</b>, the <b>Ganges</b>, the <b>Brahmaputra</b>, the <b>Indus</b>. Further west, the <b>Tigris</b> and <b>Euphrates</b>, cradle of Mesopotamia.</p>
<p><b>Climates</b>: all of them! <b>Polar</b> and cold in Siberia (about −67.7 °C has been recorded at Oymyakon); <b>arid</b> in the Arabian and <b>Gobi</b> deserts; <b>temperate</b> in China and Japan; <b>tropical monsoon</b> in India and Southeast Asia; <b>equatorial</b> in Indonesia.</p>
<p><b>Monsoons</b> are winds that change direction with the seasons: in summer they blow from the ocean towards the land and bring very heavy rains; in winter they blow from the land towards the sea and the climate is dry. The <b>rice</b> harvest for billions of people depends on them.</p>`
    },
    {
      type: "3d",
      title: "The Asian landscape in 3D",
      scene: "terrain",
      options: {
        features: {
          peak: { label: "Everest", html: "8,849 m, between Nepal and China (Tibet): the highest peak on the planet. In Nepali it is called <b>Sagarmatha</b>, in Tibetan <b>Chomolungma</b>. It was first climbed in 1953 by Edmund Hillary and the Sherpa Tenzing Norgay." },
          mountain: { label: "Himalayas", html: "A range about 2,400 km long. It is home to 10 of the 14 peaks above 8,000 metres." },
          glacier: { label: "Himalayan glaciers", html: "They are called the \"third pole\": after Antarctica and the Arctic they hold the largest reserve of ice. They feed the rivers on which almost 2 billion people depend, but with global warming they are shrinking." },
          plain: { label: "Ganges plain", html: "One of the most fertile and populated plains in the world, formed by the debris carried by the Himalayan rivers." },
          river: { label: "Yangtze", html: "The longest river in Asia (about 6,300 km). On its course is the <b>Three Gorges Dam</b>, the most powerful hydroelectric plant in the world." },
          delta: { label: "Ganges-Brahmaputra delta", html: "The largest delta in the world, in Bangladesh and India; here is the Sundarbans mangrove forest, home of the Bengal tiger." },
          volcano: { label: "Mount Fuji", html: "The volcano that symbolises Japan (3,776 m), still active: the last eruption was in 1707." },
          archipelago: { label: "Archipelagos", html: "<b>Indonesia</b> is made up of over 17,000 islands; <b>Japan</b> of 4 main islands and thousands of smaller ones; the <b>Philippines</b> of over 7,000." },
          lake: { label: "Baikal", html: "In Siberia: the deepest lake (about 1,640 m) and the oldest in the world (about 25 million years). It holds about 20% of the planet's liquid surface fresh water." },
          peninsula: { label: "Peninsulas", html: "Asia has enormous peninsulas: <b>Arabian</b> (the largest in the world), <b>Indian</b> (the \"subcontinent\"), <b>Indochinese</b>, <b>Korean</b>, <b>Anatolia</b>." }
        }
      },
      caption: "Tap the parts of the landscape to discover Asia's records."
    },
    {
      type: "svg",
      title: "How the monsoon works",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f766e">Summer (June–September)</text>
<rect x="20" y="200" width="130" height="70" fill="#38bdf8"/><text x="85" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Ocean</text>
<rect x="150" y="190" width="130" height="80" fill="#a3e635"/><text x="215" y="240" font-size="15" text-anchor="middle" fill="#365314" font-weight="bold">India</text>
<ellipse cx="215" cy="110" rx="60" ry="28" fill="#64748b"/>
<path d="M190 140 L185 165 M215 140 L210 165 M240 140 L235 165" stroke="#2563eb" stroke-width="4"/>
<path d="M50 170 L170 170" stroke="#0f766e" stroke-width="6" marker-end="url(#m)"/>
<text x="85" y="160" font-size="14" text-anchor="middle" fill="#0f766e">moist wind</text>
<text x="215" y="70" font-size="14" text-anchor="middle" fill="#334155">heavy rain 🌧️</text>
<text x="450" y="26" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">Winter (December–February)</text>
<rect x="320" y="200" width="130" height="70" fill="#38bdf8"/><text x="385" y="245" font-size="15" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Ocean</text>
<rect x="450" y="190" width="130" height="80" fill="#fde68a"/><text x="515" y="240" font-size="15" text-anchor="middle" fill="#78350f" font-weight="bold">India</text>
<circle cx="515" cy="100" r="26" fill="#facc15"/>
<path d="M560 170 L440 170" stroke="#b45309" stroke-width="6" marker-end="url(#n)"/>
<text x="515" y="160" font-size="14" text-anchor="middle" fill="#b45309">dry wind</text>
<text x="515" y="60" font-size="14" text-anchor="middle" fill="#334155">dry weather ☀️</text>
<defs>
<marker id="m" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#0f766e"/></marker>
<marker id="n" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#b45309"/></marker>
</defs>
</svg>`,
      caption: "In summer the land heats up more than the sea: the air rises and draws in moist wind from the ocean, which brings the rains. In winter the opposite happens."
    },
    {
      type: "quiz",
      title: "Mini-quiz: the continent",
      questions: [
        { type: "mc", q: "Which mountains mark the border between Europe and Asia?", options: ["Alps", "Urals", "Andes"], answer: 1, explain: "The Ural mountains, together with the Ural river, the Caspian Sea and the Caucasus." },
        { type: "num", q: "How high is Everest (in metres)?", answer: 8849, tol: 1, unit: "m", explain: "8,849 m, according to the 2020 Chinese-Nepali measurement." },
        { type: "tf", q: "Monsoons are winds that change direction with the seasons.", answer: true, explain: "In summer they bring rain, in winter dry weather." }
      ]
    },
    {
      type: "text",
      title: "3. China",
      html: `<p><b>Capital</b>: Beijing. <b>Inhabitants</b>: about 1.41 billion. <b>Area</b>: about 9.6 million km² (about 32 times Italy). <b>Language</b>: Mandarin Chinese. <b>Currency</b>: yuan (renminbi).</p>
<p><b>Territory</b>: the West is made of mountains, plateaus (Tibet) and almost uninhabited deserts (Gobi, Taklamakan); almost all Chinese live in the <b>East</b>, in the plains and along the coasts and the great rivers.</p>
<p><b>Economy</b>: since the reforms of Deng Xiaoping (1978) China has become the <b>\"factory of the world\"</b> and today it is the planet's <b>second-largest economy</b> and the <b>biggest exporter</b>. It is a leader in solar panels, batteries and electric cars. Big metropolises: <b>Shanghai</b> (over 24 million inhabitants), Beijing, Shenzhen, Guangzhou, Chongqing.</p>
<p><b>Problems</b>: heavy pollution (China is the world's largest CO₂ emitter), differences between the rich coasts and the poor interior, an ageing population after the <b>one-child policy</b> (1980–2015), lack of political freedoms (single party).</p>`
    },
    {
      type: "text",
      title: "4. India",
      html: `<p><b>Capital</b>: New Delhi. <b>Inhabitants</b>: over 1.43 billion: since <b>2023</b> it has been the <b>most populous country in the world</b>, having overtaken China. <b>Area</b>: about 3.3 million km². <b>Languages</b>: Hindi and English are official, plus 22 languages recognised by the Constitution. <b>Currency</b>: rupee.</p>
<p>It is the <b>largest democracy in the world</b>: at the 2024 elections about <b>970 million</b> voters were called to vote.</p>
<p><b>Territory</b>: in the north the Himalayas; in the centre the great plain of the <b>Ganges</b>, a river sacred to Hindus; in the south the <b>Deccan</b> plateau.</p>
<p><b>Economy</b>: many people still work in the fields (rice, tea, cotton, spices), but India is a power in <b>IT services</b> (Bangalore is called the \"Indian Silicon Valley\"), in pharmaceuticals and in space (in 2023 the <b>Chandrayaan-3</b> probe landed near the Moon's south pole). <b>Bollywood</b>, in Mumbai, makes more films than any other country.</p>
<p><b>Problems</b>: poverty is still widespread, overcrowded cities, pollution, social differences also linked to the <b>caste</b> system (abolished by the 1950 Constitution, but still present in society).</p>`
    },
    {
      type: "text",
      title: "5. Japan",
      html: `<p><b>Capital</b>: Tokyo. <b>Inhabitants</b>: about 124 million. <b>Area</b>: about 378,000 km² (a little more than Italy). <b>Currency</b>: yen.</p>
<p><b>Territory</b>: an archipelago of 4 main islands (<b>Honshū</b>, Hokkaidō, Kyūshū, Shikoku) and thousands of smaller ones. About <b>70%</b> is mountainous: the population is concentrated on the narrow coastal plains. It lies in the Pacific <b>Ring of Fire</b>, where four plates meet: it has more than 100 active volcanoes and frequent earthquakes and <b>tsunamis</b> (like the one of <b>11 March 2011</b>, which damaged the Fukushima nuclear power plant).</p>
<p><b>Economy</b>: with almost no raw materials, Japan became a power thanks to high-technology industry (cars, robots, electronics, video games). The <b>Tokyo</b> area is the largest urban agglomeration in the world, with about 37 million inhabitants.</p>
<p><b>Problems</b>: Japan is the <b>oldest</b> country in the world: almost <b>30%</b> of its inhabitants are over 65 and the population is falling.</p>`
    },
    {
      type: "widget",
      title: "Game: China, India or Japan?",
      widget: "classify",
      options: {
        groups: ["🇨🇳 China", "🇮🇳 India", "🇯🇵 Japan"],
        items: [["Beijing", 0], ["Yangtze River", 0], ["Gobi Desert", 0], ["Ganges River", 1], ["Bollywood", 1], ["Deccan Plateau", 1], ["Mount Fuji", 2], ["Island of Honshū", 2], ["Yen", 2], ["Most populous country since 2023", 1], ["Rupee", 1], ["Three Gorges Dam", 0]]
      },
      caption: "Drag each item into the right country."
    },
    {
      type: "example",
      title: "Practical example: compare with Italy",
      html: `<table>
<tr><th></th><th>🇮🇹 Italy</th><th>🇨🇳 China</th><th>🇮🇳 India</th><th>🇯🇵 Japan</th></tr>
<tr><td>Inhabitants</td><td>59 million</td><td>1.41 billion</td><td>1.43 billion</td><td>124 million</td></tr>
<tr><td>Area (km²)</td><td>302,000</td><td>9.6 million</td><td>3.3 million</td><td>378,000</td></tr>
<tr><td>Density (inh./km²)</td><td>about 196</td><td>about 147</td><td>about 430</td><td>about 330</td></tr>
<tr><td>Life expectancy</td><td>83 years</td><td>78 years</td><td>72 years</td><td>84 years</td></tr>
</table>
<p>Calculate: density is <b>inhabitants ÷ area</b>. India has more than double Italy's density: on average, about 430 people live on every km². Yet China, with so many inhabitants, has an average density lower than Italy's: because it has huge empty areas (Tibet, deserts).</p>`
    },
    {
      type: "example",
      title: "Practical example: a day in Tokyo",
      html: `<p>A 13-year-old boy in Tokyo goes to school by metro on his own, even though there are millions of people. The <b>Shinkansen</b> high-speed trains (since 1964) have an average delay of less than a minute.</p>
<p>At school he does earthquake drills and at the end of lessons, with his classmates, he <b>cleans the classroom</b> (it's called <i>o-sōji</i>). At lunch he eats rice, fish and vegetables: fish is very important in a country surrounded by sea with little land to cultivate.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… China has only one time zone?",
      html: `<p>China is almost 5,000 km wide from east to west and \"should\" have 5 time zones. Instead it uses <b>a single time</b>, that of Beijing. So in the far west, in the Xinjiang region, in winter the Sun can rise at around <b>10 in the morning</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… chess and numbers come from India?",
      html: `<p>The digits we use (0, 1, 2… 9) are called \"Arabic\", but they were invented in <b>India</b>, including <b>zero</b> as a number (the mathematician Brahmagupta wrote down its rules in 628). The Arabs brought them to the West, and in Italy <b>Leonardo Fibonacci</b> made them known in 1202. The game of <b>chess</b> too was born in India, around the 6th century, under the name <i>chaturanga</i>.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to get to know Asia",
      intro: "Asia is so big that it is easy to get lost: here are other ways to find your bearings.",
      tabs: [
        {
          label: "🌍 On the globe",
          html: `<p>Turn the globe and follow the <b>Silk Road</b>, the ancient network of roads that linked China to the Mediterranean (Marco Polo travelled it in the 13th century). Today China has launched a \"New Silk Road\" of railways, ports and roads.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 34.3, lon: 108.9, label: "Xi'an", color: "#dc2626" },
              { lat: 39.5, lon: 76.0, label: "Kashgar", color: "#f59e0b" },
              { lat: 39.65, lon: 66.96, label: "Samarkand", color: "#f59e0b" },
              { lat: 35.7, lon: 51.4, label: "Tehran", color: "#f59e0b" },
              { lat: 41.0, lon: 28.97, label: "Istanbul", color: "#7c3aed" },
              { lat: 45.44, lon: 12.33, label: "Venice", color: "#16a34a" },
              { lat: 28.6, lon: 77.2, label: "New Delhi", color: "#f97316" },
              { lat: 35.68, lon: 139.69, label: "Tokyo", color: "#ef4444" },
              { lat: 27.99, lon: 86.93, label: "Everest", color: "#64748b" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5], color: "#d97706" }]
          }
        },
        {
          label: "🧠 Trick: 3 giants, 3 words",
          html: `<p>To remember the three countries, link each one with a word and an image:</p>
<ul>
<li>🇨🇳 <b>China = FACTORY</b>: imagine an enormous factory along a river (the Yangtze) shipping containers from the port of Shanghai.</li>
<li>🇮🇳 <b>India = CROWD</b>: the biggest crowd in the world, bathing in the Ganges and working at a computer in Bangalore.</li>
<li>🇯🇵 <b>Japan = EARTHQUAKE + ROBOT</b>: an archipelago that trembles, inhabited by robots and very fast trains.</li>
</ul>`
        },
        {
          label: "🧩 Match capital and country",
          html: `<p>The capitals of Asia: match them to their country.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Beijing", "China"],
              ["New Delhi", "India"],
              ["Tokyo", "Japan"],
              ["Seoul", "South Korea"],
              ["Jakarta", "Indonesia"],
              ["Bangkok", "Thailand"],
              ["Riyadh", "Saudi Arabia"]
            ]
          }
        },
        {
          label: "📏 Comparing sizes",
          html: `<p>If Italy were a little square, how big would the other countries be?</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<rect x="20" y="200" width="20" height="20" fill="#16a34a"/>
<text x="30" y="245" font-size="14" text-anchor="middle" fill="#111827">Italy 1</text>
<rect x="70" y="199" width="22" height="22" fill="#ef4444"/>
<text x="81" y="245" font-size="14" text-anchor="middle" fill="#111827">Japan 1.25</text>
<rect x="160" y="153" width="67" height="67" fill="#f97316"/>
<text x="193" y="245" font-size="14" text-anchor="middle" fill="#111827">India about 11</text>
<rect x="300" y="107" width="113" height="113" fill="#dc2626"/>
<text x="356" y="245" font-size="14" text-anchor="middle" fill="#111827">China about 32</text>
<text x="300" y="30" font-size="17" text-anchor="middle" font-weight="bold" fill="#111827">Areas compared (area of the squares)</text>
<text x="500" y="160" font-size="14" text-anchor="middle" fill="#334155">All of Asia</text>
<text x="500" y="180" font-size="14" text-anchor="middle" fill="#334155">≈ 148 Italies!</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of Asia: tap the nodes and find out why",
      nodes: [
        { id: "placche", label: "Collision of plates", x: 50, y: 6, color: "#b45309", html: "The Indian plate pushes against the Eurasian one.", why: "India was an island-continent detached from the ancient Gondwana; it moved north at a record speed (up to 15 cm a year) and about 50 million years ago it hit Asia, raising the Himalayas." },
        { id: "himalaya", label: "Himalayas and Tibet", x: 20, y: 25, color: "#64748b", html: "The \"roof of the world\", with Everest (8,849 m).", why: "On the Himalayan peaks there are fossils of marine animals: the rocks were once the floor of an ocean, the Tethys, lifted by the collision of the plates." },
        { id: "fiumi", label: "Great rivers", x: 50, y: 30, color: "#2563eb", html: "Yangtze, Huang He, Ganges, Brahmaputra, Mekong, Indus.", why: "They rise from the glaciers and snows of the Tibetan plateau and run down to the sea carrying water and fertile silt." },
        { id: "monsoni", label: "Monsoons", x: 82, y: 25, color: "#0ea5e9", html: "Seasonal winds that bring the summer rains.", why: "The land heats up and cools down faster than the sea: in summer a low-pressure zone forms over Asia that draws in moist air from the ocean. The Himalayas act as a barrier and make the rain fall on India." },
        { id: "riso", label: "Rice paddies and population", x: 50, y: 52, color: "#16a34a", html: "The river plains are among the most populated on Earth.", why: "Rice, grown in China for about 9,000 years, yields a great deal per hectare if there is plenty of water: this is why an enormous population could grow on the plains of the monsoon rivers." },
        { id: "cina", label: "China", x: 18, y: 75, color: "#dc2626", html: "1.41 billion inhabitants, second-largest economy in the world.", why: "A civilisation united for over 2,000 years (since the first emperor Qin Shi Huang, 221 BC); after 1978 Deng Xiaoping's reforms turned it into the \"factory of the world\"." },
        { id: "india", label: "India", x: 50, y: 78, color: "#f97316", html: "The most populous country and the largest democracy in the world.", why: "Independent since 1947, with a democratic Constitution (1950) written by B. R. Ambedkar; recent growth is based on IT services and a young population." },
        { id: "giappone", label: "Japan", x: 82, y: 75, color: "#e11d48", html: "A mountainous, seismic archipelago, a technological power.", why: "In the Meiji era (from 1868) Japan modernised rapidly by copying and improving Western technology; after the defeat of 1945 it rebuilt its economy by focusing on quality industry." },
        { id: "sfide", label: "Challenges", x: 50, y: 95, color: "#a855f7", html: "Pollution, melting glaciers, ageing, inequality.", why: "Very rapid growth has consumed resources and produced emissions; rising life expectancy and falling births are ageing China and Japan." }
      ],
      edges: [
        ["placche", "himalaya", "raises the"],
        ["himalaya", "fiumi", "gives birth to the"],
        ["himalaya", "monsoni", "blocks the"],
        ["fiumi", "riso", "irrigate the"],
        ["monsoni", "riso", "bring water to the"],
        ["riso", "cina", "feeds"],
        ["riso", "india", "feeds"],
        ["placche", "giappone", "earthquakes and volcanoes in"],
        ["cina", "sfide", "faces"],
        ["giappone", "sfide", "faces"]
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li><b>Asia</b> is the largest continent (44.6 million km²) and the most populated (4.8 billion). Border with Europe: <b>Urals, Caspian, Caucasus</b>.</li>
<li>The <b>Himalayas</b> with <b>Everest</b> (8,849 m); great rivers: Yangtze, Huang He, Ganges, Mekong.</li>
<li>All climates; in India and Southeast Asia the <b>monsoon</b> dominates.</li>
<li><b>China</b>: \"factory of the world\", second-largest economy. <b>India</b>: most populous country since 2023, largest democracy. <b>Japan</b>: seismic archipelago, high technology, ageing population.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: China, India, Japan",
      questions: [
        { type: "mc", q: "Which country has been the most populous in the world since 2023?", options: ["China", "India", "Indonesia"], answer: 1, explain: "India overtook China in 2023 according to UN estimates." },
        { type: "text", q: "What is the capital of Japan?", answer: ["tokyo", "tokio"], explain: "Tokyo." },
        { type: "mc", q: "Why does Japan have many earthquakes?", options: ["Because it is very flat", "Because it lies where several plates meet, in the Ring of Fire", "Because it has many factories"], answer: 1, explain: "Four tectonic plates meet under Japan." }
      ]
    }
  ],
  glossary: [
    { t: "Monsoon", d: "A seasonal wind that in summer blows from the sea towards the land (rain) and in winter the other way (dry)." },
    { t: "Plateau", d: "A flat area of land at high altitude, like Tibet." },
    { t: "Indian subcontinent", d: "The great peninsula of South Asia (India, Pakistan, Bangladesh…), separated from the rest of Asia by the Himalayas." },
    { t: "Ring of Fire", d: "A belt around the Pacific Ocean with many volcanoes and earthquakes." },
    { t: "Tsunami", d: "A giant sea wave caused by an earthquake or an underwater eruption." },
    { t: "Population density", d: "Number of inhabitants per km²: inhabitants ÷ area." },
    { t: "One-child policy", d: "A Chinese law (1980–2015) that in most cases limited couples to one child." },
    { t: "Castes", d: "An ancient hereditary division of Indian society, abolished by law but still present." },
    { t: "Silk Road", d: "An ancient network of trade routes between China, Central Asia and the Mediterranean." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Roughly how many people out of 10 in the world live in Asia?", options: ["2", "4", "6"], answer: 2, explain: "About 59% of humanity." },
      { type: "text", q: "What is the mountain range with the highest peak in the world called?", answer: ["himalaya", "the himalaya", "himalayas", "the himalayas"], explain: "The Himalayas, with Everest." },
      { type: "mc", q: "Which is the longest river in Asia?", options: ["Ganges", "Yangtze", "Mekong"], answer: 1, explain: "The Yangtze, or Blue River, about 6,300 km." },
      { type: "tf", q: "Japan is an archipelago with 4 main islands.", answer: true, explain: "Honshū, Hokkaidō, Kyūshū and Shikoku." },
      { type: "mc", q: "What do the summer monsoons bring to India?", options: ["Snow", "Heavy rain", "Desert sand"], answer: 1, explain: "Moist winds from the Indian Ocean." },
      { type: "mc", q: "Why is China called the \"factory of the world\"?", options: ["Because it produces and exports enormous quantities of goods", "Because it has many gold mines", "Because it is the smallest country"], answer: 0, explain: "It is the world's biggest exporter of goods." },
      { type: "num", q: "A country has 120 million inhabitants and 400,000 km². What is its density (inh./km²)?", answer: 300, tol: 0, unit: "inh./km²", explain: "120,000,000 ÷ 400,000 = 300 inhabitants per km²." },
      { type: "text", q: "What is the capital of India?", answer: ["new delhi", "delhi", "nuova delhi"], explain: "New Delhi." },
      { type: "tf", q: "Japan is one of the countries with the youngest population in the world.", answer: false, explain: "It is the oldest country: almost 30% are over 65." },
      { type: "order", q: "Sort from most populous to least populous.", items: ["India", "China", "Japan", "Italy"], explain: "1.43 billion → 1.41 billion → 124 million → 59 million." },
      { type: "mc", q: "In which country is Lake Baikal, the deepest in the world?", options: ["China", "Mongolia", "Russia"], answer: 2, explain: "In Siberia, Russia." },
      { type: "mc", q: "Which mathematical invention was born in India?", options: ["Zero as a number", "Roman numerals", "Pi"], answer: 0, explain: "Brahmagupta described its rules in 628." }
    ]
  }
});
