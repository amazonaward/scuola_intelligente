TOPIC('en', {
  id: "l2-geo-asia",
  title: "Asia",
  intro: "Asia is the continent of records: the largest, the most populous (about 60% of humanity), with the highest mountains, the driest deserts and some of the oldest civilisations. Today it is also the economic engine of the planet. In this lesson we try to understand how environments, history and economics explain three leading countries (China, India, Japan) and one crucial, troubled region, the Middle East.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. The giant of records",
      html: `<p>Asia covers about <b>44.6 million km²</b>, almost a third of the world's land, and has about <b>4.7 billion</b> inhabitants, almost 60% of humanity. It contains the planet's extremes: <b>Mount Everest</b> (8,849 m, between Nepal and Tibet), the <b>Dead Sea</b> depression (about 430 m below sea level, the lowest point on land), <b>Lake Baikal</b> (the deepest, over 1,600 m) and the Gobi Desert.</p>
<p>Its environmental variety is enormous. We can distinguish large regions:</p>
<ul>
<li><b>Northern Asia (Siberia)</b>: tundra and taiga, extremely cold climates, low population density, huge resources (oil, gas, minerals). Rivers such as the Ob, Yenisei and Lena flow here.</li>
<li><b>Central and Western Asia</b>: plateaus and steppes, deserts (Gobi, Karakum), ranges such as the Pamirs, the Caucasus and the Tian Shan. Most of the Middle East lies in South-West Asia.</li>
<li><b>South Asia</b>: the Indian subcontinent, separated from the rest by the <b>Himalayas</b>, the range formed by the collision of the Indian plate with the Eurasian plate (which is still going on: the Himalayas grow by a few millimetres a year).</li>
<li><b>East Asia</b>: China, Japan, Korea, Mongolia, Taiwan; this is the area of great industrial development.</li>
<li><b>South-East Asia</b>: the Indochinese peninsula and the archipelagos (Indonesia, the Philippines), a region of equatorial forests, rice paddies and volcanoes.</li>
</ul>
<p>A key element of Asia's climate is the <b>monsoons</b>, seasonal winds: in summer they blow from the ocean towards the continent bringing heavy rain, in winter from the continent towards the sea, dry and cold. The farming (especially <b>rice growing</b>) of hundreds of millions of people depends on them, but they also bring floods and droughts.</p>`
    },
    {
      type: "3d",
      title: "On the globe: key places in Asia",
      scene: "globe",
      options: {
        points: [
          { lat: 39.9, lon: 116.4, label: "Beijing (China)", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "New Delhi (India)", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Mumbai", color: "#f59e0b" },
          { lat: 35.7, lon: 139.7, label: "Tokyo (Japan)", color: "#ec4899" },
          { lat: 27.99, lon: 86.9, label: "Everest (8,849 m)", color: "#6b7280" },
          { lat: 24.7, lon: 46.7, label: "Riyadh (Saudi Arabia)", color: "#a16207" },
          { lat: 32.1, lon: 34.8, label: "Israel and the Palestinian Territories", color: "#7c3aed" },
          { lat: 35.7, lon: 51.4, label: "Tehran (Iran)", color: "#16a34a" },
          { lat: 1.35, lon: 103.8, label: "Singapore", color: "#0ea5e9" }
        ],
        routes: [
          { points: [0, 1, 9], color: "#dc2626" },
          { points: [2, 3, 9], color: "#f59e0b" },
          { points: [4, 1], color: "#ec4899" }
        ]
      },
      caption: "The great sea routes of Asian trade pass through the Strait of Malacca (Singapore), one of the busiest in the world."
    },
    {
      type: "text",
      title: "2. China: from communism to «market socialism»",
      html: `<p>The <b>People's Republic of China</b> was proclaimed by <b>Mao Zedong</b> on 1 October 1949 after the civil war won by the Communist Party. It has about <b>1.4 billion</b> inhabitants and 9.6 million km², the third or fourth largest area in the world. After the Maoist period (the Great Leap Forward, 1958-1961, with a devastating famine; the Cultural Revolution, 1966-1976) the turning point came with <b>Deng Xiaoping</b>'s reforms of <b>1978</b>: opening to the market and to foreign investment, and the creation of <b>Special Economic Zones</b> (the first was Shenzhen, 1980). China joined the <b>WTO in 2001</b>.</p>
<p>The result was one of the fastest growth spurts in history: for decades GDP grew by about 9-10% a year, and hundreds of millions of people escaped extreme poverty. China is today the <b>world's second-largest economy</b> after the USA and the <b>largest exporter</b>, the «workshop of the world». The big coastal cities (Shanghai, Shenzhen, Guangzhou) are among the most dynamic on the planet; the interior remains poorer.</p>
<ul>
<li><b>Politics</b>: a one-party system (the Communist Party), with strong limits on freedom of the press and of expression and digital surveillance; Hong Kong and Macau have special arrangements («one country, two systems»), but Hong Kong's autonomy has shrunk since 2020; Taiwan, which governs itself, is claimed by Beijing.</li>
<li><b>Demography</b>: the <b>one-child policy</b> (1979-2015) slowed growth but sped up ageing. The population began to fall in 2022.</li>
<li><b>Environment</b>: serious problems of air and water pollution; but China is also the world's largest producer of solar panels and electric cars, and the largest emitter of CO₂ in absolute terms.</li>
<li><b>Foreign policy</b>: the <b>New Silk Road</b> initiative (<i>Belt and Road</i>, launched in 2013) finances ports, railways and roads in Asia, Africa and Europe.</li>
</ul>`
    },
    {
      type: "svg",
      title: "China and India: two giants compared",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Population (billions, approx.)</text>
<rect x="150" y="50" width="280" height="34" fill="#dc2626"/>
<text x="20" y="73" font-size="15" fill="#111827">India</text>
<text x="440" y="73" font-size="15" fill="#111827">about 1.43</text>
<rect x="150" y="100" width="275" height="34" fill="#f59e0b"/>
<text x="20" y="123" font-size="15" fill="#111827">China</text>
<text x="440" y="123" font-size="15" fill="#111827">about 1.41</text>
<text x="300" y="175" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Area (million km²)</text>
<rect x="150" y="190" width="192" height="30" fill="#f59e0b"/>
<text x="20" y="212" font-size="15" fill="#111827">China</text>
<text x="350" y="212" font-size="15" fill="#111827">9.6</text>
<rect x="150" y="235" width="66" height="30" fill="#dc2626"/>
<text x="20" y="257" font-size="15" fill="#111827">India</text>
<text x="226" y="257" font-size="15" fill="#111827">3.3</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#475569">Rounded figures: India overtook China in population in 2023 (UN estimates).</text>
</svg>`,
      caption: "In 2023 India became the most populous country in the world: it has a very young population (median age about 28), while China is ageing."
    },
    {
      type: "quiz",
      title: "Mini-quiz: environment and China",
      questions: [
        { type: "mc", q: "What are the monsoons?", options: ["Seasonal winds that change direction between summer and winter", "Volcanoes in Japan", "Rivers in India"], answer: 0, explain: "They bring heavy rain in summer and are crucial for Asian farming." },
        { type: "mc", q: "Which leader launched economic reforms in China in 1978?", options: ["Mao Zedong", "Deng Xiaoping", "Sun Yat-sen"], answer: 1, explain: "Deng Xiaoping opened the economy to the market and to foreign investment." },
        { type: "tf", q: "China joined the WTO in 2001.", answer: true, explain: "Joining the World Trade Organization accelerated Chinese exports." }
      ]
    },
    {
      type: "text",
      title: "3. India: the world's largest democracy",
      html: `<p>India (about 3.3 million km², 1.4 billion inhabitants) became independent from the United Kingdom on <b>15 August 1947</b>, after the non-violent struggle led by <b>Mohandas Gandhi</b>. Independence came with <b>Partition</b>: two states were born, India and Pakistan (later, in 1971, East Pakistan became Bangladesh). It was a tragedy: about 15 million refugees and hundreds of thousands killed in the violence between Hindus, Muslims and Sikhs. The Constitution came into force on <b>26 January 1950</b> (Republic Day).</p>
<ul>
<li><b>Society</b>: an extraordinary diversity of languages (22 officially recognised at national level, with Hindi and English used as federal languages), religions (Hinduism about 80%, Islam about 14%, Christianity, Sikhism, Buddhism, Jainism) and cultures. The <b>caste</b> system, formally abolished, still affects people's opportunities.</li>
<li><b>Economy</b>: after the liberalisation of 1991 it grew rapidly. It has IT services (Bangalore, India's «Silicon Valley»), agriculture that is still essential (about 40% of workers) and a growing industry. It is among the world's top five economies by GDP. Strong inequalities and a large informal economy remain.</li>
<li><b>Demography</b>: a young population, but with major problems of employment, education and urbanisation (megacities such as Mumbai, Delhi, Kolkata).</li>
<li><b>Environment</b>: the monsoons determine harvests and daily life; the Ganges is sacred but heavily polluted; air pollution in Delhi is among the worst in the world; warming threatens the Himalayan glaciers on which the rivers depend.</li>
</ul>`
    },
    {
      type: "text",
      title: "4. Japan: an archipelago of mountains and volcanoes",
      html: `<p>Japan is an archipelago of about 14,000 islands, four of them main islands (<b>Honshu</b>, Hokkaido, Kyushu and Shikoku), with about <b>124 million</b> inhabitants on 378,000 km². The land is almost entirely mountainous and volcanic (Mount Fuji, 3,776 m): only about 13-15% of the territory is habitable and farmable. It lies on the <b>Pacific Ring of Fire</b>, where plates collide: earthquakes, <b>tsunamis</b> (from the Japanese for «harbour wave») and volcanic eruptions are frequent. On 11 March <b>2011</b> a magnitude 9 earthquake and a huge tsunami caused about 18,000 deaths and the accident at the <b>Fukushima</b> nuclear power plant.</p>
<p>Japan's modern history is a case of extremely rapid modernisation. With the <b>Meiji Restoration</b> (1868) the country, which had been isolated for over two centuries, opened up to the West, industrialised its economy and became a military and colonial power. Defeated in the Second World War (after the atomic bombs on <b>Hiroshima</b> on 6 August and <b>Nagasaki</b> on 9 August 1945), it adopted a pacifist Constitution (1947) and experienced an «<b>economic miracle</b>» from the 1950s to the 1980s: factory towns, <i>kaizen</i> (continuous improvement) and companies such as Toyota, Sony and Honda made it the world's second-largest economy until about 2010.</p>
<p>Today it is the world's fourth or fifth largest economy, with high technology (robotics, electronics, cars). Its biggest challenge is <b>demographic</b>: about <b>29%</b> of the population is over 65, the population has been falling since 2008 and the average age keeps rising. The country has a very high public debt (over 250% of GDP) and few energy resources, so it imports most of its oil and gas.</p>`
    },
    {
      type: "widget",
      title: "Activity: match each country to a feature",
      widget: "match",
      options: {
        pairs: [
          ["China", "Special Economic Zones and Deng's reforms (1978)"],
          ["India", "Independence 1947, Gandhi, Partition"],
          ["Japan", "Meiji Restoration and the Ring of Fire"],
          ["Saudi Arabia", "Major oil producer, home of Mecca"],
          ["Singapore", "City-state, major port and financial centre"]
        ]
      },
      caption: "Each country has a history and an economy rooted in its territory."
    },
    {
      type: "text",
      title: "5. The Middle East: oil, religions, conflicts",
      html: `<p>«Middle East» refers to the region between the eastern Mediterranean, the Arabian Peninsula, Iran and Turkey (the definition varies). It is the crossroads of three continents and the cradle of the first civilisations (Mesopotamia, the «land between the rivers» <b>Tigris</b> and <b>Euphrates</b>), of the three great monotheistic religions (Judaism, Christianity, Islam) and of <b>Jerusalem</b>, a holy city for all three.</p>
<ul>
<li><b>Environment</b>: largely arid or desert (the Arabian Desert, the Syrian Desert), with scarce water; its great resources are its <b>oil and gas reserves</b>, especially in the Persian Gulf area (about half of the world's oil reserves). The discovery of oil (early decades of the 20th century) transformed the economies of the Gulf countries, which have sovereign wealth funds, skyscrapers and ultra-modern cities (Dubai, Doha, Abu Dhabi).</li>
<li><b>OPEC</b>: the Organization of the Petroleum Exporting Countries, founded in Baghdad in 1960, coordinates production to influence the price. The oil crises of 1973 and 1979 showed how much the world depended on this region.</li>
<li><b>Main states</b>: <b>Saudi Arabia</b> (a monarchy, guardian of the holy places of Mecca and Medina), <b>Iran</b> (an Islamic Republic since the 1979 revolution, with a Shia majority), <b>Turkey</b> (a republic since 1923, a NATO member), <b>Israel</b> (founded in 1948), Iraq, Syria, Jordan, Lebanon, the United Arab Emirates, Qatar, Kuwait.</li>
<li><b>Conflicts</b>: the <b>Israeli-Palestinian</b> conflict (since 1948) is one of the longest and most sensitive; wars in Iraq (1991, 2003), the civil war in Syria (since 2011, with millions of refugees), conflicts in Yemen, tensions between Saudi Arabia and Iran (a Sunni-Shia opposition, but also a political rivalry). The causes are intertwined: borders drawn by the European powers after the First World War (the Sykes-Picot Agreement, 1916), competition for resources, ideologies, outside interference.</li>
</ul>
<p><b>Beware of stereotypes</b>: the Middle East is not the same as the Arab world (Iranians, Turks and Israelis are not Arabs) and the Islamic world is much larger: Indonesia has more Muslims than any Arab state.</p>`
    },
    {
      type: "example",
      title: "Singapore: a city-state that invented itself",
      html: `<p>Singapore covers little more than 700 km² (about four times the municipality of Milan) and has neither oil nor farmland. Independent since 1965, it has bet on its port, education, finance and technology and is today one of the richest countries in the world, with one of the highest GDPs per capita. It lies on the Strait of Malacca, through which a huge share of trade between East Asia and Europe passes: its <b>location</b>, exploited through targeted policies, is worth more than raw materials.</p>`
    },
    {
      type: "example",
      title: "The rice paddy and the monsoon",
      html: `<p>In many Asian regions <b>rice</b> is the staple food of billions of people. It is grown in flooded fields, where the seedlings grow during the rainy season; one harvest, or even two or three a year in tropical areas, supports very high population densities. When the monsoon arrives late or is weak, harvests fall and prices rise; when it is too strong, it causes floods: the lives of millions of farmers depend on the calendar of the wind.</p>`
    },
    {
      type: "curiosity",
      title: "The most populous city in the world",
      html: `<p>Of the ten most populous cities in the world, many are in Asia: Tokyo (the greater urban area has over 37 million inhabitants), Delhi, Shanghai, Dhaka, Mumbai. Asia is also the continent with the largest number of megacities (over 10 million inhabitants). But half of all Asians still live in rural areas or small towns.</p>`
    },
    {
      type: "curiosity",
      title: "The Great Wall cannot be seen from space",
      html: `<p>A common belief: «the Great Wall of China is the only human-made structure visible from the Moon». It is false: it is thousands of kilometres long (in total over 20,000 km of walls from different periods) but only a few metres wide and the same colour as the ground, and astronauts have confirmed they cannot see it with the naked eye from low orbit, let alone from the Moon.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to think about Asia",
      intro: "Three approaches to avoid getting lost in the vastness of the continent.",
      tabs: [
        {
          label: "👥 100 people of the world",
          html: `<p>Imagine the world reduced to 100 people. About <b>60</b> are Asian. Of these, about 18 are Chinese, 18 Indian, 3 Indonesian, 3 Pakistani, 2 Bangladeshi, 1.5 Japanese. When we talk about «the world» we often think of the West, but most human beings live in Asia: that is why every major issue (climate, economy, technology, health) is decided mainly here.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><text x="250" y="28" font-size="16" font-weight="bold" text-anchor="middle" fill="#111827">Out of 100 people in the world</text><rect x="40" y="50" width="420" height="34" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="50" width="252" height="34" fill="#f59e0b" stroke="#92400e"/><text x="165" y="73" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Asia: about 59</text><text x="376" y="73" font-size="15" text-anchor="middle" fill="#111827">Rest: 41</text><text x="40" y="125" font-size="15" fill="#111827">Africa about 18, Europe about 9, North America about 5,</text><text x="40" y="150" font-size="15" fill="#111827">Latin America and the Caribbean about 8, Oceania about 0.5.</text><text x="40" y="185" font-size="14" fill="#475569">Rounded figures (UN).</text></svg>`
        },
        {
          label: "🌊 Monsoons as breathing",
          html: `<p>Think of the continent as an enormous lung. In summer the land heats up more than the sea: the air over Asia rises, and moist air from the ocean flows in to fill the gap, bringing rain. In winter it is the opposite: the land cools, and cold, dry air flows down towards the sea. It is the <b>temperature difference</b> between sea and land (the sea warms up and cools down more slowly) that drives the monsoons, and the lives of billions of people depend on this seasonal breathing.</p>`
        },
        {
          label: "🛣️ The Silk Roads",
          html: `<p>For over 1,500 years caravans linked China and Europe through the oases of Central Asia: silk, spices, paper and gunpowder, but also religions (Buddhism, Islam), ideas and diseases (the Black Death of the 14th century). Today the «new silk roads» are railways, ports and pipelines. The geography of <b>chokepoints</b> (straits, mountain passes, oases) still explains much of international politics today.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the reasons behind today's Asia",
      nodes: [
        { id: "ambiente", label: "Environments and monsoons", x: 20, y: 8, color: "#16a34a", html: "Himalayas, river plains, deserts, monsoon forests.", why: "The great rivers (Ganges, Yangtze, Yellow River, Mekong) created fertile plains and ancient civilisations; the monsoon allows intensive rice growing and therefore high population densities." },
        { id: "popolazione", label: "Huge population", x: 80, y: 8, color: "#f59e0b", html: "About 60% of humanity; rapid urbanisation.", why: "For thousands of years irrigated farming supported many people; in the 20th century falling mortality produced a population explosion. Then birth rates fell (China, Japan, Korea)." },
        { id: "storia", label: "Colonialism and independence", x: 15, y: 40, color: "#a855f7", html: "The British Empire in India, imperial Japan, a divided China.", why: "In the 19th century the European powers, and later Japan, carved up Asia, drawing often arbitrary borders (India/Pakistan, the Middle East) that lie at the root of many conflicts." },
        { id: "sviluppo", label: "Models of development", x: 50, y: 50, color: "#2563eb", html: "Japan, the Asian tigers, China, India.", why: "First Japan, then South Korea, Taiwan, Singapore and Hong Kong, and finally China and India followed different paths with a common feature: export-oriented industry, heavy investment in education and a state that steers the economy." },
        { id: "petrolio", label: "Oil and the Middle East", x: 85, y: 50, color: "#a16207", html: "Huge reserves in the Persian Gulf.", why: "Resources have made these areas strategic and financially powerful, but they have also attracted outside interference and fuelled conflicts over control." },
        { id: "sfide", label: "Challenges", x: 50, y: 78, color: "#dc2626", html: "Climate, pollution, ageing, tensions.", why: "Japan is ageing, and so is China, while India has a demographic dividend; the Himalayan glaciers feed the rivers, and their retreat threatens the water supply of hundreds of millions of people." },
        { id: "mondo", label: "Centre of the world economy", x: 50, y: 96, color: "#14b8a6", html: "More than half of world trade has at least one end in Asia.", why: "After centuries in which Europe's economic weight was dominant, the centre of gravity is shifting towards East Asia: in some ways, a return to the situation before the 18th century." }
      ],
      edges: [
        ["ambiente", "popolazione", "supports"],
        ["storia", "sviluppo", "shapes"],
        ["popolazione", "sviluppo", "fuels"],
        ["petrolio", "sfide", "creates"],
        ["sviluppo", "mondo", "leads to"],
        ["sfide", "mondo", "influence"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Asia: about 44.6 million km², about 60% of the world's population; Everest 8,849 m; monsoons.</li>
<li><b>China</b>: 1949 Mao; 1978 Deng's reforms; WTO 2001; one-child policy 1979-2015; New Silk Road (2013).</li>
<li><b>India</b>: independence on 15 August 1947 (Gandhi, Partition); Constitution 1950; the most populous democracy; the most populous country since 2023.</li>
<li><b>Japan</b>: Meiji 1868; Hiroshima and Nagasaki 1945; economic miracle; Ring of Fire; ageing.</li>
<li><b>Middle East</b>: oil, OPEC (1960), the Israeli-Palestinian conflict, Sykes-Picot, regional tensions.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "mc", q: "In what year did India gain independence?", options: ["1947", "1950", "1971"], answer: 0, explain: "On 15 August 1947, with the Partition between India and Pakistan." },
        { type: "tf", q: "Japan lies on the Pacific Ring of Fire.", answer: true, explain: "It is an area with frequent earthquakes, tsunamis and volcanic eruptions." },
        { type: "text", q: "What is the name of the organisation of oil-exporting countries founded in Baghdad in 1960?", answer: ["opec", "the opec"], explain: "OPEC coordinates the oil production of its member countries." }
      ]
    }
  ],
  glossary: [
    { t: "Monsoon", d: "A seasonal wind that changes direction between summer and winter and brings heavy rain to Asia." },
    { t: "Special Economic Zone", d: "An area with rules that favour businesses and foreign investors (like Shenzhen in China)." },
    { t: "Partition", d: "The division of British India in 1947 into two states, India and Pakistan." },
    { t: "Ring of Fire", d: "The belt around the Pacific where volcanoes and earthquakes are concentrated." },
    { t: "OPEC", d: "Organization of the Petroleum Exporting Countries, founded in 1960." },
    { t: "Caste", d: "Traditional division of Indian society into hereditary groups, formally abolished but still influential." },
    { t: "Demographic dividend", d: "The economic advantage of a country with many young people of working age compared with dependants." },
    { t: "New Silk Road", d: "Chinese programme (since 2013) of infrastructure and investment along routes linking Asia, Africa and Europe." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the highest mountain on Earth?", options: ["K2", "Everest", "Kilimanjaro"], answer: 1, explain: "Everest is 8,849 m high, between Nepal and Tibet." },
      { type: "num", q: "In what year did China join the WTO?", answer: 2001, tol: 0, explain: "In 2001, after years of economic reforms." },
      { type: "tf", q: "India overtook China as the most populous country in the world in 2023.", answer: true, explain: "According to UN estimates, in 2023." },
      { type: "mc", q: "Which event of 1868 opened Japan to modernisation?", options: ["The Meiji Restoration", "The Pacific War", "The pacifist Constitution"], answer: 0, explain: "With the Meiji Restoration the country opened up to the West and industrialised." },
      { type: "mc", q: "Why is the Middle East so strategically important?", options: ["Because of its huge oil and gas reserves and its position between three continents", "Because it has the largest glaciers", "Because it is the most populous region"], answer: 0, explain: "Energy resources and geographical position make it a crucial area." },
      { type: "text", q: "What is the name of the mountain range that separates the Indian subcontinent from the rest of Asia?", answer: ["himalayas", "the himalayas", "himalaya", "the himalaya"], explain: "The Himalayas were formed by the collision between the Indian and Eurasian plates." },
      { type: "order", q: "Put in chronological order.", items: ["Meiji Restoration (1868)", "Independence of India (1947)", "Proclamation of the People's Republic of China (1949)", "Deng Xiaoping's reforms (1978)"], explain: "Four stages in modern Asian history." },
      { type: "mc", q: "What was the one-child policy?", options: ["A Chinese policy (1979-2015) to limit births", "A Japanese law on families", "An Indian tradition"], answer: 0, explain: "It slowed population growth but sped up ageing." },
      { type: "tf", q: "All the countries of the Middle East are Arab.", answer: false, explain: "Iran, Turkey and Israel are not Arab countries." },
      { type: "mc", q: "What demographic feature does Japan have today?", options: ["A very old and shrinking population", "A very young population", "Explosive population growth"], answer: 0, explain: "About 29% are over 65 and the population has been falling since 2008." }
    ]
  }
});
