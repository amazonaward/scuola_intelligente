TOPIC('en', {
  id: "m3-geo-oceania",
  title: "Oceania and the polar lands",
  intro: "At the \"edges\" of the world: <b>Oceania</b>, a continent made of an island-continent (Australia) and thousands of islands scattered across the Pacific, and the <b>polar lands</b>, the <b>Arctic</b> and the <b>Antarctic</b>, the coldest places on the planet. They are extreme environments but essential for understanding the Earth's climate.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Oceania: a continent of islands",
      html: `<ul>
<li><b>Area</b>: about 8.5 million km², the smallest continent.</li>
<li><b>Population</b>: about 46 million, the least populous inhabited continent.</li>
<li><b>Independent states</b>: 14, including <b>Australia</b>, <b>New Zealand</b>, <b>Papua New Guinea</b>, <b>Fiji</b>, <b>Samoa</b>, <b>Tonga</b>, <b>Kiribati</b>, <b>Tuvalu</b>.</li>
</ul>
<p>The Pacific islands are divided into three large groups:</p>
<table>
<tr><th>Region</th><th>Meaning of the name</th><th>Examples</th></tr>
<tr><td><b>Melanesia</b></td><td>\"black islands\"</td><td>Papua New Guinea, Fiji, Solomon Islands</td></tr>
<tr><td><b>Micronesia</b></td><td>\"small islands\"</td><td>Palau, Marshall Islands, Kiribati (in part)</td></tr>
<tr><td><b>Polynesia</b></td><td>\"many islands\"</td><td>Samoa, Tonga, Tahiti, Hawaii, New Zealand</td></tr>
</table>
<p>Many Pacific islands are <b>volcanic</b> (high, mountainous) or <b>atolls</b>: rings of <b>coral</b> that surround a lagoon, only a few metres above the sea.</p>`
    },
    {
      type: "text",
      title: "2. Australia",
      html: `<p><b>Capital</b>: <b>Canberra</b> (not Sydney!). <b>Inhabitants</b>: about 27 million. <b>Area</b>: about 7.7 million km² (about 25 times Italy). <b>Language</b>: English. <b>Currency</b>: Australian dollar.</p>
<p><b>Territory</b>: it is the most <b>flat</b> and most <b>dry</b> inhabited continent. About 70% is arid or semi-arid: this is the <b>outback</b>, the red desert interior. At the centre stands <b>Uluru</b> (Ayers Rock), an enormous sandstone monolith sacred to the Aboriginal peoples. Along the east coast runs the <b>Great Dividing Range</b>.</p>
<p>Along the north-east coast lies the <b>Great Barrier Reef</b>, the largest coral reef system in the world (about 2300 km), visible even from space.</p>
<p><b>Population</b>: over 85% live in cities, almost all on the coast, especially in the South-East (<b>Sydney</b>, <b>Melbourne</b>, Brisbane) and in Perth. The first inhabitants are the <b>Aboriginal</b> peoples and the islanders of the Torres Strait, who arrived at least <b>50,000–65,000 years ago</b>: one of the oldest cultures still alive. From <b>1788</b> British settlers arrived (at first many were convicts sent there).</p>
<p><b>Economy</b>: very rich in mineral resources (iron, coal, gold, lithium), a major producer of wool, wheat and meat; tourism and services. It is among the countries with the highest HDI in the world.</p>`
    },
    {
      type: "text",
      title: "3. New Zealand",
      html: `<p><b>Capital</b>: <b>Wellington</b>. <b>Inhabitants</b>: about 5.3 million. Two main islands (<b>North Island</b> and <b>South Island</b>), very mountainous and volcanic, with glaciers, fjords and geysers.</p>
<p>It was one of the last great lands settled by humans: the <b>Māori</b> arrived from Polynesia by canoe around <b>1250–1300</b>. The Māori language is an official language together with English.</p>
<p>In <b>1893</b> New Zealand was the <b>first country in the world</b> to give women the right to vote. Sheep far outnumber the people (about 24 million sheep). The national symbol is the <b>kiwi</b>, a bird that cannot fly.</p>`
    },
    {
      type: "3d",
      title: "The landscape of Oceania in 3D",
      scene: "terrain",
      options: {
        features: {
          plain: { label: "Outback", html: "Australia's arid interior: red deserts and steppes, almost uninhabited. Its farms (\"stations\") can be larger than entire Italian provinces." },
          mountain: { label: "Great Dividing Range", html: "Ancient mountains along Australia's east coast, which separate the rainy coast from the dry interior. The highest peak on the Australian mainland is Kosciuszko (2228 m)." },
          peak: { label: "Aoraki / Mount Cook", html: "3724 m, the highest peak in New Zealand, in the Southern Alps. \"Aoraki\" is the Māori name." },
          glacier: { label: "New Zealand glaciers", html: "On the South Island glaciers such as the Fox and the Franz Josef come down almost to the rainforest." },
          volcano: { label: "Volcanic islands", html: "Many Pacific islands are the peaks of undersea volcanoes. In New Zealand Ruapehu is an active volcano." },
          archipelago: { label: "Pacific archipelagos", html: "Thousands of islands grouped into Melanesia, Micronesia and Polynesia." },
          lagoon: { label: "Atoll and lagoon", html: "An atoll is a ring of coral around a lagoon. It forms when a volcanic island surrounded by a coral reef slowly sinks: the explanation was given by Charles Darwin in 1842." },
          coast: { label: "Great Barrier Reef", html: "About 2300 km of coral reefs and islands off Queensland. It was declared a UNESCO World Heritage Site in 1981." },
          river: { label: "Murray-Darling", html: "Australia's longest river system, in the South-East: essential for agriculture on such a dry continent." },
          lake: { label: "Lake Eyre", html: "A salt lake in the Australian desert, almost always dry: it fills with water only a handful of times in a century." }
        }
      },
      caption: "Rotate the landscape and touch the parts: from the Australian outback to the glaciers of New Zealand."
    },
    {
      type: "quiz",
      title: "Mini-quiz: Oceania",
      questions: [
        { type: "mc", q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra"], answer: 2, explain: "Canberra, built specifically as the capital (a compromise between Sydney and Melbourne)." },
        { type: "tf", q: "New Zealand was the first country to give women the vote.", answer: true, explain: "In 1893." },
        { type: "text", q: "What is the name of a ring of coral that surrounds a lagoon?", answer: ["atoll", "an atoll", "the atoll"], explain: "An atoll." }
      ]
    },
    {
      type: "text",
      title: "4. The polar lands: Arctic and Antarctic",
      html: `<p>The <b>polar lands</b> lie beyond the polar circles (about 66.5° N and S). There the Sun is always low: in summer it does not set for weeks (<b>polar day</b>, the \"midnight sun\") and in winter it does not rise (<b>polar night</b>).</p>
<table>
<tr><th></th><th>🧊 Arctic (North Pole)</th><th>🐧 Antarctic (South Pole)</th></tr>
<tr><td><b>What it is</b></td><td>an <b>ocean</b> (the Arctic Ocean) covered with sea ice, surrounded by land</td><td>a <b>continent</b> covered by an ice sheet</td></tr>
<tr><td><b>Ice thickness</b></td><td>pack ice a few metres thick</td><td>on average about <b>2 km</b>, up to nearly 5 km</td></tr>
<tr><td><b>Inhabitants</b></td><td>about 4 million (Inuit, Sami, Nenets and other peoples, Russian and Scandinavian towns)</td><td>no permanent inhabitants; from about 1000 (winter) to 5000 (summer) scientists</td></tr>
<tr><td><b>Symbolic animals</b></td><td>polar bear, walrus, reindeer</td><td>emperor penguin, Weddell seal, krill</td></tr>
<tr><td><b>Who owns it</b></td><td>neighbouring states (Canada, USA, Russia, Denmark/Greenland, Norway…)</td><td>nobody: the <b>Antarctic Treaty</b> (1959)</td></tr>
</table>
<p>Antarctica is the <b>coldest</b> continent (in 1983 at the Russian Vostok base <b>−89.2 °C</b> was measured), the <b>windiest</b>, the <b>highest</b> on average and, surprisingly, the <b>driest</b>: very little snow falls in the interior, so much that it is considered a desert. It holds about <b>70% of the planet's fresh water</b>, frozen: if all of it melted, sea level would rise by about <b>58 metres</b>.</p>`
    },
    {
      type: "svg",
      title: "Why it is so cold at the poles",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#0f172a"/>
<circle cx="380" cy="160" r="120" fill="#38bdf8" stroke="#e0f2fe" stroke-width="3"/>
<ellipse cx="380" cy="48" rx="55" ry="14" fill="#f8fafc"/>
<ellipse cx="380" cy="272" rx="55" ry="14" fill="#f8fafc"/>
<path d="M300 110 Q380 140 460 110" stroke="#16a34a" stroke-width="20" fill="none"/>
<line x1="260" y1="160" x2="500" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="60" cy="160" r="40" fill="#facc15"/>
<text x="60" y="220" font-size="16" text-anchor="middle" fill="#fde047" font-weight="bold">Sun</text>
<path d="M105 160 L255 160" stroke="#fde047" stroke-width="5" marker-end="url(#s)"/>
<path d="M105 120 L270 75" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<path d="M105 200 L270 245" stroke="#fde047" stroke-width="3" marker-end="url(#s)"/>
<defs><marker id="s" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#fde047"/></marker></defs>
<text x="520" y="40" font-size="15" fill="#e0f2fe" font-weight="bold">North Pole</text>
<text x="520" y="290" font-size="15" fill="#e0f2fe" font-weight="bold">South Pole</text>
<text x="510" y="166" font-size="15" fill="#fecaca">Equator</text>
<text x="300" y="312" font-size="14" fill="#e0f2fe" text-anchor="middle">At the poles the rays arrive grazing; white ice reflects up to 80–90% of the light</text>
</svg>`,
      caption: "Slanted rays + white ice that reflects light (albedo effect) + the long polar night = the most extreme cold on Earth."
    },
    {
      type: "text",
      title: "5. Exploration and science",
      html: `<p>The <b>South Pole</b> was reached for the first time on <b>14 December 1911</b> by the Norwegian <b>Roald Amundsen</b>, with sledges and dogs. The Briton <b>Robert Falcon Scott</b> arrived a month later and died with his companions on the return journey.</p>
<p>The <b>North Pole</b> was flown over in <b>1926</b> by the airship <b>Norge</b>, designed and piloted by the Italian <b>Umberto Nobile</b>, with Amundsen on board: it is considered the first certain arrival at the North Pole. In 1928 Nobile returned with the airship <b>Italia</b>, which however crashed on the ice (the famous \"red tent\").</p>
<p>Today Antarctica is a large <b>scientific laboratory</b>. The <b>Antarctic Treaty</b> (1959, in force from 1961) establishes that the continent be used only for <b>peaceful and scientific</b> purposes; since 1991 the Madrid Protocol has banned mining activities. Italy too has two bases: the <b>Mario Zucchelli Station</b> (since 1986) and, together with France, the <b>Concordia</b> base on the Antarctic plateau. From the Antarctic ice scientists have extracted <b>ice cores</b> containing air bubbles up to about <b>800,000 years</b> old: an archive of the past climate.</p>`
    },
    {
      type: "text",
      title: "6. The poles and climate change",
      html: `<p>The polar regions are the most affected by global warming: the <b>Arctic</b> is warming about <b>four times faster</b> than the planet's average.</p>
<ul>
<li>In summer the Arctic sea ice has shrunk by about <b>40%</b> compared with the 1980s: polar bears, which hunt seals from the ice, have less and less room.</li>
<li>The melting of the glaciers of <b>Greenland</b> and <b>Antarctica</b> raises sea level. Low Pacific islands, such as <b>Tuvalu</b> and <b>Kiribati</b>, risk becoming uninhabitable: in 2023 Australia signed an agreement with Tuvalu to take in its inhabitants as \"climate migrants\".</li>
<li>The <b>permafrost</b> (frozen ground) of Siberia and Canada is thawing and releasing greenhouse gases.</li>
<li>Warmer, more acidic water makes the corals of the Great Barrier Reef \"bleach\" and die.</li>
</ul>
<p>There is also a chain effect: less white ice → less light reflected → more heat absorbed by the dark sea → even less ice. Scientists call this the albedo <b>feedback</b> (feedback loop).</p>`
    },
    {
      type: "example",
      title: "Practical example: Christmas in summer",
      html: `<p>In Australia and New Zealand the seasons are <b>reversed</b> compared with Italy, because they are in the southern hemisphere. When it is winter here, it is summer there.</p>
<p>So in <b>Sydney</b> on <b>25 December</b> Christmas is celebrated with 30 °C, perhaps with a barbecue on the beach, and Santa Claus sometimes arrives… in surfing shorts! In July, by contrast, Australians go skiing in the mountains of the South-East.</p>`
    },
    {
      type: "example",
      title: "Practical example: why are Australian animals so strange?",
      html: `<p>Australia separated from the other continents about <b>35–45 million years ago</b> and remained isolated. Its animals evolved on their own: this is why there are species that exist nowhere else.</p>
<ul>
<li>🦘 the <b>marsupials</b> (kangaroo, koala, wombat), which carry their young in a pouch;</li>
<li>🦆 the <b>monotremes</b> (platypus, echidna): mammals that <b>lay eggs</b>!</li>
</ul>
<p>The <b>dingo</b>, the wild dog, was also brought by humans; rabbits, brought by Europeans in the 19th century, multiplied so much that they became an environmental disaster. It is an example of an <b>invasive species</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… Polynesians navigated without a compass?",
      html: `<p>More than 1000 years ago Polynesian navigators crossed thousands of km of ocean in large <b>double-hulled canoes</b>, without instruments. They found their way by the <b>stars</b>, the shape of the <b>waves</b>, the flight of <b>birds</b> and the colour of the clouds (above islands the clouds look different). In this way they colonised a triangle of ocean between Hawaii, New Zealand and Easter Island, with sides about 7000–8000 km long: the so-called <b>Polynesian triangle</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… there is a lake in Antarctica under 4 km of ice?",
      html: `<p>Beneath the Russian Vostok base, about <b>4 km deep</b> under the ice, lies <b>Lake Vostok</b>: a huge body of liquid water (about 12,500 km², more than 30 times the size of Lake Garda!), isolated from the rest of the world for millions of years. Scientists study it also to understand how life could exist beneath the ice of the moons of Jupiter and Saturn, such as Europa and Enceladus.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand Oceania and the poles",
      intro: "Very distant places: let's bring them closer with the globe, an analogy and a game.",
      tabs: [
        {
          label: "🌍 On the globe",
          html: `<p>Turn the globe from above and below: look at the North Pole (an ocean surrounded by land) and the South Pole (a land surrounded by ocean). Then follow the voyage of the Polynesians.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -35.28, lon: 149.13, label: "Canberra", color: "#2563eb" },
              { lat: -33.87, lon: 151.21, label: "Sydney", color: "#2563eb" },
              { lat: -25.34, lon: 131.04, label: "Uluru", color: "#dc2626" },
              { lat: -41.29, lon: 174.78, label: "Wellington", color: "#16a34a" },
              { lat: 21.3, lon: -157.86, label: "Hawaii", color: "#f59e0b" },
              { lat: -27.11, lon: -109.35, label: "Easter Island", color: "#f59e0b" },
              { lat: -8.52, lon: 179.2, label: "Tuvalu", color: "#0ea5e9" },
              { lat: -90, lon: 0, label: "South Pole", color: "#a855f7" },
              { lat: 90, lon: 0, label: "North Pole", color: "#a855f7" },
              { lat: -74.69, lon: 164.11, label: "Mario Zucchelli Base (Italy)", color: "#22c55e" }
            ],
            routes: [{ points: [4, 3, 5, 4], color: "#f97316" }]
          }
        },
        {
          label: "🍦 Analogy: the ice-cream cone",
          html: `<p>To remember the difference between the two poles:</p>
<ul>
<li>The <b>Arctic</b> is like a <b>glass of water with an ice cube floating in it</b>: if the sea ice melts, the water level in the glass does not change (but the planet heats up more, because the white surface disappears).</li>
<li>The <b>Antarctic</b> is like an <b>ice-cream scoop sitting on a rock</b>: if it melts, the ice cream runs onto the plate and the level rises! Ice resting on land (Antarctica and Greenland), when it melts, raises the sea.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0f9ff"/>
<path d="M60 60 L80 190 L200 190 L220 60" fill="none" stroke="#334155" stroke-width="4"/>
<rect x="72" y="110" width="137" height="80" fill="#7dd3fc"/>
<rect x="115" y="95" width="45" height="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
<text x="140" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Arctic: ice that floats</text>
<text x="140" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">the level does not change</text>
<rect x="360" y="170" width="200" height="20" fill="#7dd3fc"/>
<path d="M410 170 L430 120 L490 120 L510 170 Z" fill="#78716c"/>
<ellipse cx="460" cy="112" rx="40" ry="20" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
<text x="460" y="30" font-size="16" text-anchor="middle" font-weight="bold" fill="#0c4a6e">Antarctic: ice on rock</text>
<text x="460" y="212" font-size="14" text-anchor="middle" fill="#0c4a6e">if it melts, the sea rises</text>
</svg>`
        },
        {
          label: "🧩 Game: North Pole or South Pole?",
          html: `<p>Put each element at the right pole.</p>`,
          widget: "classify",
          options: {
            groups: ["🧊 Arctic (North)", "🐧 Antarctic (South)"],
            items: [["Polar bear", 0], ["Emperor penguin", 1], ["Inuit people", 0], ["Treaty of 1959", 1], ["Ocean covered with pack ice", 0], ["Continent covered by 2 km of ice", 1], ["Nobile's airship Norge", 0], ["Amundsen 1911", 1], ["Reindeer and Sami", 0], ["Concordia base", 1]]
          }
        },
        {
          label: "🃏 Flashcards: key words",
          html: `<p>Flip the cards to review the hardest words.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "Atoll", back: "A ring of coral that surrounds a lagoon" },
              { front: "Outback", back: "Australia's arid and almost uninhabited interior" },
              { front: "Pack ice", back: "Ice that forms when sea water freezes" },
              { front: "Ice sheet", back: "A huge layer of ice covering a continent (Antarctica, Greenland)" },
              { front: "Albedo", back: "How much light a surface reflects: ice a lot, the sea very little" },
              { front: "Permafrost", back: "Ground that is always frozen in cold regions" },
              { front: "Marsupial", back: "A mammal that carries its young in a pouch, like the kangaroo" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of Oceania and the polar lands",
      nodes: [
        { id: "isolamento", label: "Isolation", x: 20, y: 8, color: "#64748b", html: "Oceania far from the other continents.", why: "Australia broke away from Antarctica about 45–35 million years ago and drifted north on its own; the Pacific islands were born as volcanoes in the middle of the ocean." },
        { id: "fauna", label: "Unique fauna", x: 12, y: 32, color: "#f97316", html: "Marsupials (kangaroo, koala), monotremes (platypus), birds that cannot fly (kiwi, emu).", why: "Isolation allowed animals to evolve separately, as Charles Darwin already noted when he visited Australia in 1836 during the voyage of the Beagle." },
        { id: "australia", label: "Australia", x: 35, y: 30, color: "#dc2626", html: "Arid island-continent, population on the coasts, great resources.", why: "It lies beneath the belt of deserts of the Tropic of Capricorn, where dry air sinks: this is why the interior is a desert and the cities are on the rainier coasts." },
        { id: "popoli", label: "Peoples of the Pacific", x: 35, y: 55, color: "#a855f7", html: "Aboriginal peoples, Māori, Polynesians.", why: "Aboriginal peoples arrived in Australia from Asia at least 50,000 years ago, when the sea was lower; the Polynesians colonised the islands by canoe between about 1000 BC and 1300 AD." },
        { id: "latitudine", label: "High latitudes", x: 75, y: 8, color: "#0ea5e9", html: "Beyond the polar circles (about 66.5°).", why: "Because of the tilt of the Earth's axis (about 23.5°), beyond the polar circles there is at least one day a year when the Sun never sets and one when it never rises." },
        { id: "artide", label: "Arctic", x: 62, y: 32, color: "#38bdf8", html: "Frozen ocean surrounded by inhabited lands.", why: "The North Pole is in the middle of the Arctic Ocean: the ice is floating pack ice, only a few metres thick." },
        { id: "antartide", label: "Antarctic", x: 88, y: 32, color: "#6366f1", html: "Icy continent covered by an ice sheet averaging 2 km thick.", why: "It is isolated by the Antarctic Circumpolar Current, which circles the continent and keeps warm water away: this is why it froze about 34 million years ago." },
        { id: "trattato", label: "Antarctic Treaty", x: 88, y: 58, color: "#22c55e", html: "A continent for peace and science (1959).", why: "In the middle of the Cold War, after the International Geophysical Year (1957–1958), 12 countries including the USA and the USSR agreed to freeze territorial claims and to use Antarctica only for research. Italy joined in 1981." },
        { id: "clima", label: "Climate change", x: 62, y: 82, color: "#ef4444", html: "Melting ice, rising sea, corals bleaching.", why: "Rising greenhouse gases trap heat; at the poles the effect is amplified by the loss of white ice (albedo feedback)." },
        { id: "isolebasse", label: "Islands at risk", x: 30, y: 85, color: "#0891b2", html: "Tuvalu, Kiribati, Marshall Islands risk being submerged.", why: "Atolls are on average 2–3 metres above the sea: even a rise of a few decimetres brings storm surges, salt water in the wells and loss of farmable land." }
      ],
      edges: [
        ["isolamento", "fauna", "produces a"],
        ["isolamento", "australia", "characterises the"],
        ["australia", "popoli", "inhabited by"],
        ["latitudine", "artide", "defines the"],
        ["latitudine", "antartide", "defines the"],
        ["antartide", "trattato", "protected by the"],
        ["artide", "clima", "warms 4 times faster"],
        ["antartide", "clima", "ice that melts"],
        ["clima", "isolebasse", "threatens the"],
        ["popoli", "isolebasse", "live on the"]
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li><b>Oceania</b>: the smallest continent (8.5 million km²); Australia + the Pacific islands (<b>Melanesia</b>, <b>Micronesia</b>, <b>Polynesia</b>).</li>
<li><b>Australia</b>: capital <b>Canberra</b>; arid (<b>outback</b>), population on the coasts, <b>Great Barrier Reef</b>, Aboriginal peoples, unique fauna.</li>
<li><b>New Zealand</b>: capital <b>Wellington</b>; mountainous and volcanic islands; Māori; women's vote in 1893.</li>
<li><b>Arctic</b> = frozen ocean with peoples (Inuit). <b>Antarctic</b> = frozen continent with no permanent inhabitants, protected by the <b>Antarctic Treaty</b> (1959).</li>
<li>The polar regions are the most affected by <b>climate change</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: the polar lands",
      questions: [
        { type: "mc", q: "What is at the North Pole?", options: ["A continent", "An ocean covered with ice", "A sand desert"], answer: 1, explain: "The Arctic Ocean covered by pack ice." },
        { type: "mc", q: "Who was the first to reach the South Pole, in 1911?", options: ["Robert Scott", "Umberto Nobile", "Roald Amundsen"], answer: 2, explain: "The Norwegian Roald Amundsen, on 14 December 1911." },
        { type: "tf", q: "If Arctic sea ice melted, sea level would rise by many metres.", answer: false, explain: "Floating ice already occupies its own volume of water: it is the ice on land (Antarctica, Greenland) that raises the sea." }
      ]
    }
  ],
  glossary: [
    { t: "Oceania", d: "A continent formed by Australia and the Pacific islands." },
    { t: "Atoll", d: "A ring-shaped coral island that encloses a lagoon." },
    { t: "Outback", d: "Australia's arid and sparsely inhabited interior." },
    { t: "Aborigines", d: "The first inhabitants of Australia, present for at least 50,000 years." },
    { t: "Māori", d: "The Polynesian people who were the first to settle New Zealand." },
    { t: "Pack ice", d: "Sea ice that forms when the surface of the sea freezes." },
    { t: "Ice sheet", d: "A huge blanket of ice covering a continent or a large island." },
    { t: "Polar day/night", d: "Periods in which, beyond the polar circles, the Sun stays always above or always below the horizon." },
    { t: "Albedo", d: "The ability of a surface to reflect sunlight." },
    { t: "Antarctic Treaty", d: "The 1959 agreement that reserves Antarctica for peace and scientific research." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which is the smallest continent?", options: ["Europe", "Oceania", "Antarctica"], answer: 1, explain: "Oceania, about 8.5 million km²." },
      { type: "text", q: "What is the capital of Australia?", answer: ["canberra"], explain: "Canberra." },
      { type: "mc", q: "Where do most Australians live?", options: ["In the outback", "In cities on the coast", "In the mountains"], answer: 1, explain: "Over 85% live in cities, almost all on the coast." },
      { type: "tf", q: "The platypus is a mammal that lays eggs.", answer: true, explain: "It is a monotreme, like the echidna." },
      { type: "mc", q: "What is the name of the people who were the first to settle New Zealand?", options: ["Aborigines", "Māori", "Inuit"], answer: 1, explain: "The Māori, who arrived from Polynesia around 1250–1300." },
      { type: "mc", q: "What does the Antarctic Treaty establish?", options: ["That Antarctica belongs to Russia", "That Antarctica is used only for peace and science", "That oil can be extracted freely"], answer: 1, explain: "Signed in 1959; since 1991 mining activities have also been banned." },
      { type: "num", q: "What is the lowest temperature measured at Vostok in 1983 (in °C)?", answer: -89.2, tol: 0.2, unit: "°C", explain: "−89.2 °C, the official record for the lowest temperature measured on land." },
      { type: "text", q: "What is the name of the airship with which Umberto Nobile flew over the North Pole in 1926?", answer: ["norge", "the norge"], explain: "The Norge, which also had Roald Amundsen on board." },
      { type: "mc", q: "Why are islands such as Tuvalu in danger?", options: ["Because of earthquakes", "Because of rising sea level", "Because of desertification"], answer: 1, explain: "They are atolls only a few metres above the sea." },
      { type: "order", q: "Put in chronological order.", items: ["Arrival of the Aborigines in Australia", "Arrival of the Māori in New Zealand", "Arrival of British settlers in Australia", "Women's vote in New Zealand", "Amundsen at the South Pole", "Signing of the Antarctic Treaty"], explain: "More than 50,000 years ago → 1250–1300 → 1788 → 1893 → 1911 → 1959." },
      { type: "tf", q: "Millions of people live permanently in Antarctica.", answer: false, explain: "There are only scientists and technicians at the bases, for limited periods." },
      { type: "mc", q: "In which period of the year is it summer in Australia?", options: ["From June to August", "From December to February", "Always"], answer: 1, explain: "In the southern hemisphere the seasons are reversed compared with Italy." }
    ]
  }
});
