TOPIC('en', {
  id: "m3-geo-africa",
  title: "Africa",
  intro: "Africa is the continent where humanity was born, the one with the largest hot desert in the world (the <b>Sahara</b>) and the longest river (the <b>Nile</b>), with <b>54 countries</b> and over <b>2000 languages</b>. It is also the youngest continent: the average age is about 19 years. Let's discover its environments, its peoples and its challenges.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. The continent in numbers",
      html: `<ul>
<li><b>Area</b>: about 30.4 million km² (about 100 times the size of Italy), the third largest continent.</li>
<li><b>Population</b>: about 1.5 billion, and growing fast: according to the UN it will be about 2.5 billion by 2050.</li>
<li><b>Countries</b>: 54 recognised by the UN. The largest is <b>Algeria</b>; the most populous is <b>Nigeria</b> (over 220 million inhabitants).</li>
<li><b>Natural borders</b>: the Mediterranean Sea to the north (the <b>Strait of Gibraltar</b> separates it from Europe by just 14 km), the Red Sea and the Suez Canal to the north-east, the Atlantic Ocean to the west, the Indian Ocean to the east.</li>
</ul>
<p>The equator cuts Africa almost in half: for this reason the climates and environments repeat in an almost <b>symmetrical</b> way to the north and to the south.</p>`
    },
    {
      type: "text",
      title: "2. The land",
      html: `<p>Africa is above all a large, ancient <b>plateau</b>: the coasts are not very indented and there are few large plains.</p>
<ul>
<li><b>Mountains</b>: in the north-west the <b>Atlas</b> range; in the east the <b>Rift Valley</b>, a gigantic crack thousands of km long where the African plate is slowly splitting apart; there rise the highest volcanoes, such as <b>Kilimanjaro</b> (5895 m, Tanzania), the highest peak in Africa.</li>
<li><b>Rivers</b>: the <b>Nile</b> (about 6650 km, flowing towards the Mediterranean), the <b>Congo</b> (the second river in the world for water volume), the <b>Niger</b>, the <b>Zambezi</b> with the Victoria Falls.</li>
<li><b>Lakes</b>: in the Rift Valley there are large lakes, such as <b>Victoria</b> (the largest in Africa) and <b>Tanganyika</b> (the second deepest in the world).</li>
<li><b>Islands</b>: the largest is <b>Madagascar</b>, the fourth largest island in the world.</li>
</ul>`
    },
    {
      type: "3d",
      title: "The African landscape in 3D",
      scene: "terrain",
      options: {
        features: {
          peak: { label: "Kilimanjaro", html: "5895 m, in Tanzania: an extinct volcano with its summit covered in ice, close to the equator. Its glaciers, however, have shrunk by more than 80% over the last century." },
          valley: { label: "Rift Valley", html: "A crack in the crust about 6000 km long, from the Red Sea to Mozambique. Some of the oldest fossils of our ancestors have been found here, such as \"Lucy\" (Ethiopia, about 3.2 million years ago)." },
          mountain: { label: "Atlas", html: "North-west mountain range (Morocco, Algeria, Tunisia), which separates the Mediterranean coasts from the Sahara." },
          river: { label: "Nile", html: "The longest river in Africa (about 6650 km). It rises from Lake Victoria (White Nile) and from Ethiopia (Blue Nile) and crosses the desert to the Mediterranean." },
          delta: { label: "Nile Delta", html: "One of the most fertile and populated areas in Africa: most of the roughly 110 million Egyptians live here." },
          lake: { label: "Lake Victoria", html: "The largest lake in Africa (about 68,000 km², more than a fifth of the size of Italy), shared by Uganda, Kenya and Tanzania." },
          plain: { label: "Savanna", html: "Wide expanses of tall grass with scattered trees (acacias, baobabs), with one dry season and one rainy season. They are home to lions, elephants, giraffes, zebras and wildebeest." },
          island: { label: "Madagascar", html: "The fourth largest island in the world. It broke away from Africa about 160 million years ago: this is why it has animals that exist nowhere else, such as the <b>lemurs</b>." },
          coast: { label: "Coasts", html: "African coasts are not very indented, with few natural harbours: one of the reasons why the interior of the continent was explored late by Europeans." },
          volcano: { label: "Rift volcanoes", html: "Along the Rift Valley there are many active volcanoes, such as Nyiragongo (Democratic Republic of the Congo), with a lava lake in its crater." }
        }
      },
      caption: "Rotate the landscape and touch the parts to learn about African environments."
    },
    {
      type: "text",
      title: "3. Climates and environments: a continent in bands",
      html: `<p>Starting from the equator and moving north (or south) you meet, in order:</p>
<ol>
<li>🌳 <b>Equatorial rainforest</b> (Congo basin, Gulf of Guinea): hot and rainy all year round, very tall trees, huge biodiversity. It is the second largest rainforest in the world after the Amazon.</li>
<li>🦒 <b>Savanna</b>: tropical climate with one rainy season and one dry season.</li>
<li>🌾 <b>Sahel</b> and steppe: a semi-arid transition belt between savanna and desert (\"sahel\" in Arabic means \"shore\", the shore of the desert).</li>
<li>🏜️ <b>Desert</b>: to the north the <b>Sahara</b> (about 9 million km², almost as large as the USA), to the south the <b>Kalahari</b> and the <b>Namib</b>.</li>
<li>🫒 <b>Mediterranean climate</b> at the two ends: the coasts of North Africa and the tip of South Africa (Cape Town).</li>
</ol>`
    },
    {
      type: "3d",
      title: "Africa's bands as layers",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#84cc16", label: "Mediterranean climate (northern and southern ends)" },
          { r: 0.82, color: "#fcd34d", label: "Desert (Sahara; Kalahari and Namib)" },
          { r: 0.64, color: "#d6d3d1", label: "Sahel and steppe" },
          { r: 0.47, color: "#a3e635", label: "Savanna" },
          { r: 0.3, color: "#166534", label: "Rainforest (equator)" }
        ]
      },
      caption: "Simplified model: the centre is the equator; moving north or south you cross the same bands. Mountains and ocean currents break this symmetry (for example, the Ethiopian and Kenyan highlands have cooler climates)."
    },
    {
      type: "quiz",
      title: "Mini-quiz: land and environments",
      questions: [
        { type: "mc", q: "What is the highest peak in Africa?", options: ["Mont Blanc", "Kilimanjaro", "Atlas"], answer: 1, explain: "Kilimanjaro, 5895 m, in Tanzania." },
        { type: "order", q: "Put the environments in order from the equator towards the Mediterranean.", items: ["Rainforest", "Savanna", "Sahel", "Sahara", "Mediterranean climate"], explain: "Moving away from the equator the rainfall decreases until the desert; then, on the coast, the Mediterranean climate returns." },
        { type: "tf", q: "The Rift Valley is a large crack in the Earth's crust.", answer: true, explain: "There the African plate is slowly splitting in two." }
      ]
    },
    {
      type: "text",
      title: "4. Peoples, languages, history",
      html: `<p>Africa is the <b>cradle of humanity</b>: the oldest fossils of <i>Homo sapiens</i>, about 300,000 years old, were found at Jebel Irhoud, in Morocco. From here our ancestors spread across the whole world.</p>
<p>Great civilisations arose in Africa: the <b>Egypt</b> of the pharaohs, the kingdom of <b>Aksum</b> (Ethiopia), the empires of <b>Mali</b> (with the city of Timbuktu, a centre of learning) and of <b>Great Zimbabwe</b>.</p>
<p>From the sixteenth to the nineteenth century about <b>12 million</b> Africans were deported as slaves to the Americas (the <b>Atlantic slave trade</b>). At the end of the nineteenth century almost the whole continent was divided among the European powers; independence came mainly between <b>1956 and 1975</b>.</p>
<p>Today:</p>
<ul>
<li><b>North Africa</b> (Morocco, Algeria, Tunisia, Libya, Egypt): Arab and Berber peoples, Arabic language, Muslim religion.</li>
<li><b>Sub-Saharan Africa</b>: hundreds of peoples (for example Yoruba, Igbo, Zulu, Maasai), African languages such as <b>Swahili</b> (spoken by over 100 million people in East Africa), Hausa, Amharic, Yoruba, together with European languages (English, French, Portuguese) used as official languages; Christian, Muslim and traditional religions.</li>
</ul>`
    },
    {
      type: "svg",
      title: "The age pyramid: Africa and Europe",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fffbeb"/>
<text x="150" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#9a3412">Niger (Africa)</text>
<text x="450" y="28" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Italy (Europe)</text>
<rect x="40" y="250" width="220" height="30" fill="#fb923c"/>
<rect x="60" y="220" width="180" height="30" fill="#fb923c"/>
<rect x="85" y="190" width="130" height="30" fill="#fdba74"/>
<rect x="105" y="160" width="90" height="30" fill="#fdba74"/>
<rect x="120" y="130" width="60" height="30" fill="#fed7aa"/>
<rect x="132" y="100" width="36" height="30" fill="#fed7aa"/>
<rect x="142" y="70" width="16" height="30" fill="#ffedd5"/>
<rect x="400" y="250" width="100" height="30" fill="#93c5fd"/>
<rect x="390" y="220" width="120" height="30" fill="#93c5fd"/>
<rect x="380" y="190" width="140" height="30" fill="#60a5fa"/>
<rect x="370" y="160" width="160" height="30" fill="#60a5fa"/>
<rect x="372" y="130" width="156" height="30" fill="#3b82f6"/>
<rect x="385" y="100" width="130" height="30" fill="#3b82f6"/>
<rect x="405" y="70" width="90" height="30" fill="#1d4ed8"/>
<text x="300" y="272" font-size="14" text-anchor="middle" fill="#111827">young</text>
<text x="300" y="90" font-size="14" text-anchor="middle" fill="#111827">elderly</text>
<path d="M300 250 L300 105" stroke="#111827" stroke-width="2" marker-end="url(#e)"/>
<defs><marker id="e" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#111827"/></marker></defs>
<text x="150" y="305" font-size="14" text-anchor="middle" fill="#9a3412">average age about 15 years</text>
<text x="450" y="305" font-size="14" text-anchor="middle" fill="#1e3a8a">average age about 48 years</text>
</svg>`,
      caption: "Simplified diagram. In Niger (about 6 children per woman) the pyramid has a very wide base: a huge number of children. In Italy (about 1.2 children per woman) the \"pyramid\" looks like a barrel: there are more adults and elderly people than children."
    },
    {
      type: "text",
      title: "5. Challenges and opportunities",
      html: `<p><b>Challenges</b>:</p>
<ul>
<li><b>Poverty</b>: about 4 people in 10 in sub-Saharan Africa live in extreme poverty; most of the countries with the lowest HDI are African.</li>
<li><b>Health</b>: malaria, HIV and malnutrition still cause many deaths; average life expectancy is about 64 years.</li>
<li><b>Conflicts</b> and instability (Sudan, the Sahel, the Democratic Republic of the Congo), often linked to artificial borders, contested resources and weak states.</li>
<li><b>Climate change</b>: Africa produces less than 4% of global CO₂ emissions, but it suffers from droughts and <b>desertification</b>, especially in the Sahel.</li>
<li><b>Economies dependent</b> on exporting raw materials (oil, gold, cobalt, cocoa), often sold without being processed on the spot.</li>
</ul>
<p><b>Opportunities</b>:</p>
<ul>
<li>a very <b>young</b> population that can become a great workforce;</li>
<li><b>resources</b> on a huge scale: about 70% of the world's cobalt (for batteries) comes from the Democratic Republic of the Congo; large reserves of sunshine for solar energy;</li>
<li><b>innovation</b>: in Kenya the mobile payment system <b>M-Pesa</b> (since 2007) has brought banking services to millions of people who did not have an account;</li>
<li>the <b>African Continental Free Trade Area</b> (AfCFTA, since 2021) to increase trade between African countries; the <b>African Union</b> (headquartered in Addis Ababa) brings together all 55 members of the continent.</li>
</ul>`
    },
    {
      type: "example",
      title: "Practical example: the Great Green Wall",
      html: `<p>To stop the advance of the desert, in <b>2007</b> the African Union launched the <b>Great Green Wall</b>: a belt of trees, gardens and restored land about <b>8000 km</b> long, from Senegal to Djibouti, across 11 Sahel countries.</p>
<p>It is not a continuous wall of trees: farmers plant drought-resistant species (such as the acacia that produces gum arabic), build small crescent-shaped earthworks to hold rainwater, and restore abandoned land. The goal is to restore 100 million hectares by 2030, but the work is still far from the target.</p>`
    },
    {
      type: "example",
      title: "Practical example: the cocoa in your snack",
      html: `<p>About <b>60%</b> of the world's cocoa comes from just two African countries: <b>Côte d'Ivoire</b> and <b>Ghana</b>. The farmer sells the dried beans; turning them into chocolate, which is worth much more, almost always happens in Europe (the Netherlands, Belgium, Switzerland, Germany, Italy).</p>
<p>It is an example of an economy that <b>exports raw materials</b> and <b>imports finished products</b>: for this reason many African governments are trying to build chocolate factories, refineries and industries on the spot, to keep more wealth at home.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… Africa is much bigger than it looks on a map?",
      html: `<p>On the Mercator map (the one often hung in classrooms) Africa looks as big as Greenland. In reality it is about <b>14 times bigger</b>! The <b>United States</b>, <b>China</b>, <b>India</b> and almost all of <b>Europe</b> would fit inside Africa together.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… the Sahara was once green?",
      html: `<p>Between about 11,000 and 5,000 years ago the Sahara was covered with savannas, lakes and rivers, with hippos, crocodiles and giraffes: this is the so-called <b>\"Green Sahara\"</b>. We know it from the rock paintings found in the middle of the desert, such as those of Tassili in Algeria, which show animals and herds grazing. A small change in the Earth's orbit shifted the monsoons and the Sahara turned into a desert.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to get to know Africa",
      intro: "If the names and numbers confuse you, try one of these routes.",
      tabs: [
        {
          label: "🌍 Journey around the globe",
          html: `<p>Take a journey from Cairo to Cape Town (about 7000 km as the crow flies) and cross all the bands of the continent.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 30.04, lon: 31.24, label: "Cairo", color: "#f59e0b" },
              { lat: 23.4, lon: 25.7, label: "Sahara", color: "#fbbf24" },
              { lat: 15.6, lon: 32.5, label: "Khartoum (Sahel)", color: "#a16207" },
              { lat: 9.03, lon: 38.74, label: "Addis Ababa", color: "#16a34a" },
              { lat: -1.29, lon: 36.82, label: "Nairobi (savanna)", color: "#84cc16" },
              { lat: -3.07, lon: 37.35, label: "Kilimanjaro", color: "#64748b" },
              { lat: -17.92, lon: 25.86, label: "Victoria Falls", color: "#0ea5e9" },
              { lat: -33.92, lon: 18.42, label: "Cape Town", color: "#7c3aed" },
              { lat: 6.52, lon: 3.38, label: "Lagos", color: "#dc2626" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4, 5, 6, 7], color: "#ea580c" }]
          }
        },
        {
          label: "🧩 Game: match the environment",
          html: `<p>Every animal or plant lives in its own environment: match them.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["🐪 Dromedary", "Sahara Desert"],
              ["🦒 Giraffe", "Savanna"],
              ["🦍 Gorilla", "Congo rainforest"],
              ["🐒 Lemur", "Madagascar"],
              ["🦛 Hippopotamus", "Rivers and lakes"],
              ["🫒 Olive tree", "Mediterranean coasts of North Africa"]
            ]
          }
        },
        {
          label: "🔢 Africa in 10 people",
          html: `<p>If Africa were a group of <b>10 people</b>:</p>
<ul>
<li>about <b>4</b> would be under 15 years old (in Italy: just over 1);</li>
<li>about <b>4–5</b> would live in cities (the urban population is growing very fast: <b>Lagos</b>, <b>Kinshasa</b> and <b>Cairo</b> each have over 15 million inhabitants);</li>
<li>about <b>5</b> would work in agriculture;</li>
<li>almost all of them would have a <b>mobile phone</b> in the family.</li>
</ul>`
        },
        {
          label: "🗺️ The \"right\" map",
          html: `<p>Geographic maps are not neutral: the <b>Mercator</b> projection (1569) enlarges the lands near the poles (Europe, North America) and shrinks those at the equator (Africa). In 2025 the African Union supported the campaign <b>\"Correct the Map\"</b> to use maps in schools that respect real areas, such as the <b>Equal Earth</b> projection (2018).</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#e0f2fe"/>
<text x="150" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">How it looks (Mercator)</text>
<rect x="60" y="45" width="80" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="100" y="92" font-size="14" text-anchor="middle" fill="#0f172a">Greenl.</text>
<rect x="155" y="55" width="90" height="100" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="200" y="110" font-size="14" text-anchor="middle" fill="#7c2d12">Africa</text>
<text x="450" y="26" font-size="17" text-anchor="middle" font-weight="bold" fill="#0f172a">How it really is (areas)</text>
<rect x="332" y="60" width="43" height="43" fill="#e2e8f0" stroke="#334155" stroke-width="2"/><text x="353" y="122" font-size="13" text-anchor="middle" fill="#0f172a">Greenl.</text>
<rect x="390" y="40" width="160" height="160" fill="#fb923c" stroke="#9a3412" stroke-width="2"/><text x="470" y="125" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">Africa ×14</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of Africa: tap the nodes and discover the why",
      nodes: [
        { id: "equatore", label: "Equator at the centre", x: 50, y: 6, color: "#ef4444", html: "Africa is cut in half by the equator.", why: "It is the only continent crossed by both the equator and both Tropics: for this reason it is the hottest continent, and its environments repeat symmetrically." },
        { id: "fasce", label: "Climate bands", x: 20, y: 25, color: "#16a34a", html: "Forest, savanna, Sahel, desert, Mediterranean.", why: "At the equator warm, moist air rises and forms rain almost every day; around the Tropics the air sinks dry, and this is where the great deserts form (Sahara, Kalahari). It is the atmospheric circulation described by the \"Hadley cells\" (George Hadley, 1735)." },
        { id: "rift", label: "Rift Valley", x: 80, y: 25, color: "#b45309", html: "A crack in the crust with volcanoes, lakes and fossils.", why: "Here the African plate is splitting (the Somali plate and the Nubian plate); in millions of years a new ocean could form. Erosion has brought very ancient layers to the surface, full of hominin fossils." },
        { id: "origini", label: "Cradle of humanity", x: 80, y: 50, color: "#a855f7", html: "The first hominins and Homo sapiens originated here.", why: "The fossils (Lucy, 1974, Ethiopia; Jebel Irhoud, Morocco) and DNA show it: all human populations descend from African ancestors." },
        { id: "colonie", label: "Slave trade and colonialism", x: 50, y: 45, color: "#64748b", html: "Atlantic slavery (16th–19th century) and European partition.", why: "The European powers sought labour for the American plantations and then raw materials for their industries; the Berlin Conference (1884–1885) set the rules for the partition." },
        { id: "stati", label: "54 independent countries", x: 20, y: 55, color: "#f59e0b", html: "Independence mainly between 1956 and 1975.", why: "After the Second World War the European powers were weakened and the liberation movements were strong; the new states nonetheless kept the colonial borders." },
        { id: "giovani", label: "Very young population", x: 35, y: 78, color: "#ec4899", html: "Average age about 19 years; rapid growth.", why: "Infant mortality has fallen thanks to vaccines and care, while the number of children per woman remains high (about 4): this is the stage of the \"demographic transition\" that Europe went through in the 19th century." },
        { id: "sfide", label: "Challenges", x: 65, y: 78, color: "#dc2626", html: "Poverty, conflicts, climate, raw-materials economy.", why: "These are intertwined effects of colonial history, artificial borders, weak institutions, and a climate made more extreme by global warming." },
        { id: "futuro", label: "Opportunities", x: 50, y: 95, color: "#22c55e", html: "Young people, resources, solar energy, digital innovation.", why: "Many economists think that in the 21st century Africa could grow the way Asia did in the 20th: by 2050 about one young person in three in the world will be African." }
      ],
      edges: [
        ["equatore", "fasce", "creates the"],
        ["rift", "origini", "preserves the fossils of the"],
        ["colonie", "stati", "leaves the borders to the"],
        ["fasce", "sfide", "droughts →"],
        ["stati", "sfide", "face"],
        ["colonie", "sfide", "legacy →"],
        ["giovani", "futuro", "are the"],
        ["sfide", "futuro", "to be turned into"]
      ]
    },
    {
      type: "remember",
      title: "To remember",
      html: `<ul>
<li><b>Africa</b>: 30.4 million km², about 1.5 billion inhabitants, <b>54 countries</b>. The most populous is <b>Nigeria</b>.</li>
<li>Land: ancient plateau, <b>Atlas</b>, <b>Rift Valley</b>, <b>Kilimanjaro</b> (5895 m); rivers <b>Nile</b>, <b>Congo</b>, <b>Niger</b>; <b>Victoria</b> lake; island <b>Madagascar</b>.</li>
<li>Environments in symmetrical bands: rainforest, savanna, Sahel, desert (<b>Sahara</b>, Kalahari), Mediterranean.</li>
<li>Cradle of humanity; slave trade and colonialism; independence 1956–1975.</li>
<li>Challenges: poverty, health, conflicts, desertification. Opportunities: young people, resources, innovation.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: peoples and challenges",
      questions: [
        { type: "mc", q: "Which is the most populous country in Africa?", options: ["Egypt", "Nigeria", "South Africa"], answer: 1, explain: "Nigeria, with over 220 million inhabitants." },
        { type: "text", q: "Which African language is spoken by over 100 million people in East Africa?", answer: ["swahili", "the swahili", "kiswahili"], explain: "Swahili (kiswahili)." },
        { type: "mc", q: "What is the Great Green Wall?", options: ["A wall built by the Romans", "A project to stop desertification in the Sahel", "A mountain range"], answer: 1, explain: "A belt of restored land and trees from Senegal to Djibouti." }
      ]
    }
  ],
  glossary: [
    { t: "Rift Valley", d: "Large tectonic trench in East Africa where the crust is splitting apart." },
    { t: "Savanna", d: "Tropical grassland with scattered trees, with one dry and one rainy season." },
    { t: "Sahel", d: "Semi-arid belt south of the Sahara, between desert and savanna." },
    { t: "Desertification", d: "Transformation of fertile land into arid land, due to climate and human activity." },
    { t: "Rainforest", d: "Equatorial forest with abundant rain all year round and very great biodiversity." },
    { t: "Atlantic slave trade", d: "Deportation of millions of enslaved Africans to the Americas (16th–19th century)." },
    { t: "Average age", d: "The age that divides the population into two halves: a younger half and an older half." },
    { t: "African Union", d: "Organisation of African states founded in 2002, headquartered in Addis Ababa." },
    { t: "Swahili", d: "Bantu language with many Arabic words, spoken in East Africa." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How many African countries are recognised by the UN?", options: ["27", "54", "100"], answer: 1, explain: "54 countries." },
      { type: "text", q: "What is the name of the largest hot desert in the world, in North Africa?", answer: ["sahara", "the sahara"], explain: "The Sahara, about 9 million km²." },
      { type: "mc", q: "Why do African environments repeat almost identically to the north and south?", options: ["Because the equator cuts Africa almost in half", "Because Africa is an island", "Because it is all desert"], answer: 0, explain: "Moving away from the equator in both directions you meet the same climate bands." },
      { type: "tf", q: "Kilimanjaro is the highest mountain in Africa.", answer: true, explain: "5895 m, in Tanzania." },
      { type: "mc", q: "Which African river crosses the desert and flows into the Mediterranean?", options: ["Congo", "Niger", "Nile"], answer: 2, explain: "The Nile, the longest river in Africa." },
      { type: "mc", q: "What is the Sahel?", options: ["A rainforest", "The semi-arid belt between the Sahara and the savanna", "An island in the Indian Ocean"], answer: 1, explain: "In Arabic \"sahel\" means shore: the shore of the desert." },
      { type: "text", q: "What is the large African island where lemurs live?", answer: ["madagascar", "the madagascar"], explain: "Madagascar, the fourth largest island in the world." },
      { type: "tf", q: "Africa is the continent with the oldest population.", answer: false, explain: "It is the youngest continent: average age about 19 years." },
      { type: "num", q: "How many times larger is Africa than Greenland (whole number)?", answer: 14, tol: 0, explain: "30.4 million km² ÷ about 2.2 million ≈ 14." },
      { type: "order", q: "Put in chronological order.", items: ["Homo sapiens at Jebel Irhoud", "Egyptian civilisation of the pharaohs", "Atlantic slave trade", "Berlin Conference", "Independence of Ghana"], explain: "300,000 years ago → 3100 BC → 16th–19th century → 1884–1885 → 1957." },
      { type: "mc", q: "From which country does about 70% of the world's cobalt, used in batteries, come?", options: ["Democratic Republic of the Congo", "Morocco", "Kenya"], answer: 0, explain: "The Democratic Republic of the Congo." },
      { type: "mc", q: "What is M-Pesa?", options: ["A river in Kenya", "A mobile phone payment system", "An ancient coin"], answer: 1, explain: "Born in Kenya in 2007, it brought financial services to millions of people." }
    ]
  }
});
