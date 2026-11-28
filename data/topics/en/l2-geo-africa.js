TOPIC('en', {
  id: "l2-geo-africa",
  title: "Africa",
  intro: "Africa is often described as a single block of savannah, poverty and war. Reality is very different: 54 states, more than 2,000 languages, deserts, forests, big cities, fast-growing economies and the youngest continent on the planet. In this lesson we learn to see the diversity of its environments, the historical roots of today's problems, and the challenges and opportunities of development.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. One continent, many environments",
      html: `<p>Africa is the second-largest continent, covering about <b>30.3 million km²</b> (about 20% of the world's land), and the <b>Equator</b> runs almost through its middle. It is home to about <b>1.5 billion</b> people (almost 18% of humanity), but the population is growing fast: it is estimated to reach about 2.5 billion by 2050. There are <b>54</b> states recognised by the UN.</p>
<p>The climate belts are arranged almost symmetrically on either side of the Equator:</p>
<ul>
<li><b>Equatorial rainforest</b> (the <b>Congo</b> Basin, Central Africa and the Gulf of Guinea): heavy rain all year round, the second-largest tropical forest after the Amazon.</li>
<li><b>Savannah</b> on either side of the forest: two seasons, dry and rainy; large mammals (elephants, lions, giraffes) in the parks of East and Southern Africa.</li>
<li><b>Deserts</b>: the <b>Sahara</b> in the north (about 9 million km², almost the size of the USA, the largest hot desert in the world), the Kalahari and the Namib in the south.</li>
<li><b>Mediterranean climate</b> at the two ends, in the north (Morocco, Algeria, Tunisia) and in the far south (Cape Town).</li>
</ul>
<p>The relief is dominated by <b>plateaus</b>. One of the most important features is the <b>Rift Valley</b> (the Great Rift), a long fracture in the Earth's crust where deep lakes and volcanoes form; here stands <b>Kilimanjaro</b> (5,895 m, Tanzania), the highest peak on the continent, along with the Great Lakes: Victoria (the largest in Africa), Tanganyika, Malawi. The main rivers are the <b>Nile</b> (about 6,650 km, one of the longest in the world), the Congo, the Niger and the Zambezi (with the Victoria Falls). The Nile made the birth of Egyptian civilisation possible: even today, Egypt is almost entirely concentrated along its banks.</p>`
    },
    {
      type: "3d",
      title: "On the globe: key places in Africa",
      scene: "globe",
      options: {
        points: [
          { lat: 30.0, lon: 31.2, label: "Cairo (Egypt), on the Nile", color: "#a16207" },
          { lat: 23.0, lon: 12.0, label: "Sahara", color: "#f59e0b" },
          { lat: -3.07, lon: 37.35, label: "Kilimanjaro (5,895 m)", color: "#6b7280" },
          { lat: 6.5, lon: 3.4, label: "Lagos (Nigeria)", color: "#16a34a" },
          { lat: -4.3, lon: 15.3, label: "Kinshasa (DR Congo)", color: "#0ea5e9" },
          { lat: 9.0, lon: 38.7, label: "Addis Ababa (seat of the African Union)", color: "#7c3aed" },
          { lat: -33.9, lon: 18.4, label: "Cape Town", color: "#dc2626" },
          { lat: -26.2, lon: 28.0, label: "Johannesburg", color: "#dc2626" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Senegal, Sahel)", color: "#ec4899" },
          { lat: -1.3, lon: 36.8, label: "Nairobi (Kenya)", color: "#14b8a6" }
        ],
        routes: [
          { points: [0, 5, 9, 2], color: "#a16207" },
          { points: [8, 3, 4], color: "#16a34a" },
          { points: [4, 7, 6], color: "#dc2626" }
        ]
      },
      caption: "The lines link examples of different regions: the Nile and East Africa, West Africa, Central and Southern Africa."
    },
    {
      type: "text",
      title: "2. The roots of history: from civilisations to colonies",
      html: `<p>Africa is the <b>cradle of humanity</b>: the remains of the oldest <i>Homo sapiens</i> (about 300,000 years ago, in Morocco) and of our ancestors were found here. It saw important civilisations and kingdoms: the <b>Egypt</b> of the pharaohs, <b>Carthage</b>, the kingdom of <b>Aksum</b> (in Ethiopia), the <b>Mali</b> Empire (14th century) with Timbuktu, famous for its libraries and universities, and the kingdoms of <b>Zimbabwe</b> and <b>Benin</b>. Mansa Musa, emperor of Mali, was one of the richest people in history thanks to gold.</p>
<p>Between the 16th and 19th centuries about <b>12.5 million</b> Africans were deported as slaves to the Americas (the <b>Atlantic slave trade</b>), a demographic and economic drain on entire regions. In the 19th century came the scramble for Africa: the <b>Berlin Conference (1884-1885)</b> set the rules by which the European powers divided the continent among themselves, without consulting Africans. By around 1914 only <b>Ethiopia</b> and <b>Liberia</b> were independent (Ethiopia was occupied by Italy in 1936-1941). Borders were drawn with rulers and lines of latitude, dividing peoples (such as the Somalis or the Tuareg) and placing rival groups within the same states: a legacy that still weighs heavily.</p>
<p>After the Second World War <b>decolonisation</b> began: Ghana (1957) was the first independent state in sub-Saharan Africa; <b>1960</b> is called the «Year of Africa» because 17 countries gained independence. Algeria won its freedom in 1962 after a war with France; Angola and Mozambique from Portugal in 1975. In South Africa the regime of racial segregation (<b>apartheid</b>, from 1948) ended in 1994 with the first free elections and the election of <b>Nelson Mandela</b> as president. In 1963 the OAU was founded, which became the <b>African Union</b> in 2002, with its seat in Addis Ababa.</p>`
    },
    {
      type: "svg",
      title: "An African timeline",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">Some dates in modern African history</text>
<line x1="30" y1="130" x2="570" y2="130" stroke="#475569" stroke-width="4"/>
<g font-size="14" text-anchor="middle" fill="#111827">
<circle cx="60" cy="130" r="8" fill="#dc2626"/><text x="60" y="105" font-weight="bold">1500-1800</text><text x="60" y="160">Atlantic</text><text x="60" y="178">slave trade</text>
<circle cx="170" cy="130" r="8" fill="#a855f7"/><text x="170" y="105" font-weight="bold">1884-85</text><text x="170" y="160">Berlin</text><text x="170" y="178">Conference</text>
<circle cx="290" cy="130" r="8" fill="#16a34a"/><text x="290" y="105" font-weight="bold">1957</text><text x="290" y="160">Ghana</text><text x="290" y="178">independent</text>
<circle cx="380" cy="130" r="8" fill="#16a34a"/><text x="380" y="105" font-weight="bold">1960</text><text x="380" y="160">«Year</text><text x="380" y="178">of Africa»</text>
<circle cx="470" cy="130" r="8" fill="#2563eb"/><text x="470" y="105" font-weight="bold">1994</text><text x="470" y="160">End of</text><text x="470" y="178">apartheid</text>
<circle cx="545" cy="130" r="8" fill="#f59e0b"/><text x="545" y="105" font-weight="bold">2002</text><text x="545" y="160">African</text><text x="545" y="178">Union</text>
</g>
<text x="300" y="250" font-size="14" text-anchor="middle" fill="#475569">Time is not to scale: the dates are chosen to show the sequence.</text>
</svg>`,
      caption: "From the slave trade to colonisation, from decolonisation to continental union."
    },
    {
      type: "quiz",
      title: "Mini-quiz: environments and history",
      questions: [
        { type: "mc", q: "What is the highest mountain in Africa?", options: ["Kilimanjaro", "Mount Kenya", "Atlas"], answer: 0, explain: "Kilimanjaro (5,895 m) is in Tanzania." },
        { type: "mc", q: "Which conference regulated the colonial partition of Africa?", options: ["Berlin Conference (1884-85)", "Congress of Vienna", "Yalta Conference"], answer: 0, explain: "It set the rules for occupying the coasts and the interior of the continent." },
        { type: "tf", q: "In 1960, 17 African countries gained independence.", answer: true, explain: "That is why it is called the «Year of Africa»." }
      ]
    },
    {
      type: "text",
      title: "3. Population, cities and society",
      html: `<p>Africa is the <b>youngest</b> continent: the median age is around 19 (about 42 in Europe). About 60% of Africans are under 25. <b>Fertility</b> is still high (on average about 4.2 children per woman, with big differences: over 6 in Niger, under 2.5 in Tunisia or Mauritius), but it is falling as girls' education and urbanisation increase. If young people have education and jobs, Africa can benefit from a <b>demographic dividend</b>; if not, unemployment and instability will grow.</p>
<ul>
<li><b>Rapid urbanisation</b>: today about 45% live in cities; metropolises such as <b>Lagos</b> (Nigeria, over 15 million inhabitants), <b>Kinshasa</b> (DR Congo) and <b>Cairo</b> are growing fast, often with large shanty towns (slums) lacking adequate services.</li>
<li><b>Languages and peoples</b>: more than 2,000 languages are spoken (Swahili, Hausa, Arabic, Amharic, Yoruba; and colonial languages such as English, French and Portuguese as official languages). The main religions are Islam (in the North and the Sahel) and Christianity (in Central and Southern Africa), alongside traditional religions.</li>
<li><b>The most populous country</b> is <b>Nigeria</b> (over 220 million inhabitants), followed by Ethiopia (about 125 million) and Egypt (over 110 million). The largest is Algeria (2.38 million km²), while the Seychelles are among the smallest.</li>
<li><b>Health</b>: average life expectancy has risen (about 62-64 years) thanks to progress against malaria, HIV/AIDS and child mortality, but there is still much to do; <b>malaria</b> is a leading cause of death in children under five.</li>
</ul>`
    },
    {
      type: "text",
      title: "4. Resources and economy: wealth and «curse»",
      html: `<p>Africa is very rich in <b>natural resources</b>: oil and gas (Nigeria, Angola, Algeria, Libya), diamonds (Botswana), gold (South Africa, Ghana, Mali), platinum, copper (Zambia), <b>cobalt</b> (the Democratic Republic of the Congo produces about 70% of the world's supply, essential for batteries), coltan, rare earths, uranium. According to estimates, it has about 60% of the world's unused farmland and immense potential for solar energy. And yet Africa's share of world GDP is about 3%.</p>
<p>Why? Economists speak of the <b>«resource curse»</b>: when a country lives off a single raw material exported unprocessed, it risks staying poor and dependent on international prices, weakening other activities (agriculture, industry) and fuelling corruption and conflict over control of the revenues. Many African countries export <b>cocoa</b> (Côte d'Ivoire and Ghana produce about 60% of the world's supply), coffee and cotton, but the biggest profits are made in processing and selling, usually elsewhere.</p>
<ul>
<li><b>Agriculture</b>: employs about half of all workers; it is often low-yield, dependent on rainfall, with little investment in irrigation and supply chains.</li>
<li><b>Services and technology</b>: Africa «skipped» landlines: <b>mobile money</b> (such as <b>M-Pesa</b>, launched in Kenya in 2007) lets millions of people without a bank account pay and save by phone. Cities such as Nairobi, Lagos and Kigali are start-up hubs.</li>
<li><b>Regional integration</b>: the <b>AfCFTA</b>, the African Continental Free Trade Area (agreement of 2018, operational since 2021), is one of the largest in the world by number of countries and aims to increase trade among Africans, which is currently low (about 15% of their trade).</li>
<li><b>Growing economies</b>: some countries (Rwanda, Ethiopia, Côte d'Ivoire, Ghana, Senegal, Egypt) have had GDP growth above 5% in several years; but foreign debt remains high and extreme poverty still affects over 400 million people, mainly in sub-Saharan Africa.</li>
<li><b>The role of other countries</b>: China, the European Union, the USA, Russia, Turkey and the Gulf states invest and trade: China is today the continent's largest trading partner.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Activity: resource and country",
      widget: "match",
      options: {
        pairs: [
          ["Cobalt", "Democratic Republic of the Congo"],
          ["Diamonds", "Botswana"],
          ["Oil", "Nigeria"],
          ["Cocoa", "Côte d'Ivoire and Ghana"],
          ["Mobile money (M-Pesa)", "Kenya"]
        ]
      },
      caption: "Resources are concentrated in a few areas: but their value depends on who processes and sells them."
    },
    {
      type: "example",
      title: "The Sahel and the Great Green Wall",
      html: `<p>The <b>Sahel</b> is the semi-arid belt south of the Sahara, from Senegal to Sudan. Rainfall here is scarce and irregular, desertification is advancing, and drought, population growth, conflict and insecurity combine. In 2007 the African Union launched the <b>Great Green Wall</b>: an initiative to restore degraded land with trees, sustainable farming and water management from Dakar to Djibouti (about 8,000 km). Progress has been partial (it is more a mosaic of local projects than a real barrier), but in some areas of Niger and Senegal agroforestry has brought back greenery and harvests.</p>`
    },
    {
      type: "example",
      title: "The mobile phone and the bank in your pocket",
      html: `<p>A vegetable seller in Nairobi has never had a bank account. With <b>M-Pesa</b> (since 2007) she can receive payments from customers by text message, send money to her sister in the village and ask for small loans. Today the vast majority of adults in Kenya use this kind of service. It is an example of <b>leapfrogging</b>: instead of first building bank branches and landlines, people jump straight to a tool better suited to local conditions.</p>`
    },
    {
      type: "curiosity",
      title: "The most genetically diverse continent",
      html: `<p>African human beings have greater <b>genetic diversity</b> than the rest of the world put together: all non-Africans descend from small groups that left the continent about 70,000-60,000 years ago, taking only part of the variability with them. From a biological point of view, the concept of «race» has no scientific meaning: two people from East Africa can differ genetically more than a European and an Asian.</p>`
    },
    {
      type: "curiosity",
      title: "The misleading map",
      html: `<p>Many world maps use the <b>Mercator projection</b>, which enlarges areas far from the Equator: so Africa looks only a little bigger than Greenland. In reality Africa covers 30.3 million km²; Greenland about 2.2 million, i.e. <b>14 times less</b>. Africa could contain the United States, China, India and Japan together, with room to spare. In 2020 the African Union supported the «Correct the map» campaign to show the real proportions.</p>`
    },
    {
      type: "decision",
      title: "How to finance development?",
      html: `<p>You are the economy minister of an African country that mainly exports raw copper (or cocoa). The international price fluctuates a lot and half of the revenue goes to paying off debt. An offer arrives: a foreign company will build a large mine and a railway at its own expense, but asks for 30-year concessions on favourable tax terms.</p>`,
      question: "What would you do?",
      options: [
        { label: "Accept unconditionally: investment is needed now", outcome: "You get infrastructure and jobs right away, but most of the profits leave the country and you remain dependent on the price of a single raw material." },
        { label: "Accept only if at least part of the ore is processed in the country and local workers are trained", outcome: "This is the path many economists recommend: more value added, new skills, links with other industries. It is harder to negotiate and may put off some investors." },
        { label: "Refuse and wait for your own resources", outcome: "It avoids dependence, but without capital and technology it is hard to exploit resources, and the country remains short of infrastructure." }
      ],
      answer: 1,
      explain: "There is no single answer, but the experience of countries like Botswana (diamonds managed with solid institutions) or Morocco (which attracts manufacturing industries) shows that what matters most is negotiating so as to keep more value added, investing revenues in education and infrastructure, and strengthening institutions."
    },
    {
      type: "alternatives",
      title: "Other ways to understand Africa",
      intro: "To get past stereotypes, change your point of view.",
      tabs: [
        {
          label: "🗺️ The true proportions",
          html: `<p>Imagine cutting out of the map the countries that fit «inside» Africa: the United States (9.8 million km²), China (9.6), India (3.3), Japan (0.38) and Mexico (1.96) add up to about 25 million km², and there is still room left in Africa (30.3). This idea makes it clear that «Africa» is not a country: it is a continent with huge internal differences.</p>`,
          svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="220" fill="#fefce8"/><text x="250" y="26" font-size="16" font-weight="bold" text-anchor="middle" fill="#111827">Areas in million km²</text><rect x="120" y="45" width="300" height="24" fill="#16a34a"/><text x="20" y="63" font-size="15" fill="#111827">Africa</text><text x="428" y="63" font-size="15" fill="#111827">30.3</text><rect x="120" y="80" width="97" height="24" fill="#6b7280"/><text x="20" y="98" font-size="15" fill="#111827">USA</text><text x="225" y="98" font-size="15" fill="#111827">9.8</text><rect x="120" y="115" width="95" height="24" fill="#dc2626"/><text x="20" y="133" font-size="15" fill="#111827">China</text><text x="223" y="133" font-size="15" fill="#111827">9.6</text><rect x="120" y="150" width="33" height="24" fill="#f59e0b"/><text x="20" y="168" font-size="15" fill="#111827">India</text><text x="161" y="168" font-size="15" fill="#111827">3.3</text><text x="20" y="205" font-size="14" fill="#475569">Bars to scale. USA+China+India together make 22.7.</text></svg>`
        },
        {
          label: "🚚 From bean to chocolate",
          html: `<p>Follow the <b>chocolate</b> supply chain: cocoa beans are grown mainly by small farmers in Côte d'Ivoire and Ghana; they are sold to traders and processed in large plants in Europe and North America; the finished product is sold at much higher prices. Only a small share (usually a few percentage points) of the price of a chocolate bar goes to the growers. There are alternatives: <b>fair trade</b>, producer cooperatives, local processing of cocoa: each tries to shift a larger share of the value towards those who grow it.</p>`
        },
        {
          label: "📱 The connected continent",
          html: `<p>Since the 2000s Africa has become the continent with the fastest growth in mobile phones and internet. Drones delivering blood and medicines in Rwanda (since 2016), home solar panels paid for in instalments in Kenya and Tanzania, payment start-ups in Nigeria and Ghana, coding hubs in Kigali, Lagos, Cape Town and Nairobi. <b>Digital education</b> is also a way of overcoming distances in regions with few schools.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the causes of development challenges",
      nodes: [
        { id: "storia", label: "Colonial legacy", x: 15, y: 8, color: "#a855f7", html: "Borders drawn from outside, export-oriented economies.", why: "The colonies were organised to export raw materials to Europe, not to develop internal markets or infrastructure between neighbouring countries: today many railways run from the mines to the coast, not from one country to another." },
        { id: "istituzioni", label: "Institutions and stability", x: 55, y: 8, color: "#dc2626", html: "Democracy, corruption, armed conflict.", why: "Where the state is weak or resource revenues are controlled by a few, corruption and wars increase. Countries with stable institutions (Botswana, Mauritius, Ghana) have developed more." },
        { id: "risorse", label: "Natural resources", x: 85, y: 30, color: "#f59e0b", html: "Minerals, oil, farmland, sunshine.", why: "Resources can finance development if the revenues are invested; otherwise they create dependence (the «resource curse»)." },
        { id: "demografia", label: "Young population", x: 15, y: 40, color: "#16a34a", html: "Median age about 19.", why: "The demographic transition is behind that of other continents: mortality fell before birth rates did. With education and jobs young people are an opportunity; without them, a risk." },
        { id: "clima", label: "Climate and environment", x: 55, y: 50, color: "#0ea5e9", html: "Droughts, desertification, floods, cyclones.", why: "Africa produces less than 4% of global emissions, but suffers serious effects of climate change: smaller harvests, displacement, conflicts over water and pasture." },
        { id: "sviluppo", label: "Paths to development", x: 85, y: 70, color: "#2563eb", html: "Education, infrastructure, integration, technology.", why: "Regional markets (AfCFTA), energy (solar), digital tools (mobile money) and modern agriculture are the levers for creating jobs and value added in Africa." },
        { id: "futuro", label: "The future", x: 45, y: 92, color: "#14b8a6", html: "The continent with the most young people in the 21st century.", why: "By the end of the century a third of all human beings could be African (about 3.8 billion in 2100 according to UN projections): today's choices will decide much of the global future." }
      ],
      edges: [
        ["storia", "istituzioni", "has left"],
        ["istituzioni", "risorse", "manage"],
        ["demografia", "sviluppo", "gives strength to"],
        ["clima", "sviluppo", "constrains it"],
        ["risorse", "sviluppo", "finance it"],
        ["sviluppo", "futuro", "builds"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Africa: about 30.3 million km², <b>54 states</b>, about 1.5 billion inhabitants, median age about 19.</li>
<li>Sahara, Rift Valley, Kilimanjaro (5,895 m), Nile (about 6,650 km), Congo Basin.</li>
<li>Atlantic slave trade; Berlin Conference 1884-85; Ghana 1957; <b>1960</b> «Year of Africa»; end of apartheid 1994; African Union 2002.</li>
<li>Abundant resources (cobalt, oil, gold, diamonds, cocoa) but economies often dependent on raw materials.</li>
<li>Opportunities: young people, urbanisation, mobile money, renewable energy, AfCFTA.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Final mini-quiz",
      questions: [
        { type: "mc", q: "What is the most populous country in Africa?", options: ["Nigeria", "Egypt", "South Africa"], answer: 0, explain: "Nigeria has over 220 million inhabitants." },
        { type: "tf", q: "Africa has the highest median age of all the continents.", answer: false, explain: "On the contrary: it is the youngest continent, with a median age of about 19." },
        { type: "text", q: "What is the name of the semi-arid belt south of the Sahara?", answer: ["sahel", "the sahel"], explain: "The Sahel stretches from Senegal to Sudan and is highly exposed to drought and desertification." }
      ]
    }
  ],
  glossary: [
    { t: "Sahel", d: "Semi-arid belt south of the Sahara, from Senegal to Sudan." },
    { t: "Apartheid", d: "Regime of racial segregation in South Africa (1948-1994)." },
    { t: "Decolonisation", d: "The process by which colonies gained independence, mainly between the 1950s and the 1970s." },
    { t: "Resource curse", d: "A situation in which wealth in raw materials leads not to development but to dependence, corruption or conflict." },
    { t: "Demographic dividend", d: "The economic advantage when there are many young people of working age with education and jobs." },
    { t: "Mobile money", d: "Financial services via mobile phone, such as M-Pesa." },
    { t: "African Union", d: "Continental organisation founded in 2002, based in Addis Ababa." },
    { t: "Rift Valley", d: "A great fracture in the Earth's crust in East Africa, with lakes and volcanoes." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "How many African states are recognised by the UN?", options: ["54", "30", "80"], answer: 0, explain: "Africa has 54 states." },
      { type: "mc", q: "Which river made the birth of Egyptian civilisation possible?", options: ["The Nile", "The Niger", "The Zambezi"], answer: 0, explain: "The Nile floods made the valley fertile in the middle of the desert." },
      { type: "tf", q: "By around 1914 only Ethiopia and Liberia were still independent states.", answer: true, explain: "The rest of the continent had been divided up by the European powers." },
      { type: "num", q: "In what year did apartheid formally end with the first free elections in South Africa?", answer: 1994, tol: 0, explain: "Nelson Mandela became president in 1994." },
      { type: "mc", q: "What is M-Pesa?", options: ["A mobile phone payment system launched in Kenya", "A nature park", "A single African currency"], answer: 0, explain: "Launched in 2007, it is the best-known example of mobile money." },
      { type: "mc", q: "What does «resource curse» mean?", options: ["Countries rich in raw materials that remain poor and fragile", "A famine", "A plant disease"], answer: 0, explain: "Dependence on a single raw material can hold back development and encourage corruption and conflict." },
      { type: "order", q: "Put in chronological order.", items: ["Berlin Conference (1884-85)", "Independence of Ghana (1957)", "End of apartheid (1994)", "Founding of the African Union (2002)"], explain: "From colonial partition to continental union." },
      { type: "text", q: "What is the name of the highest mountain in Africa?", answer: ["kilimanjaro", "mount kilimanjaro", "mt kilimanjaro"], explain: "Kilimanjaro (5,895 m), in Tanzania." },
      { type: "tf", q: "Africa produces most of the world's greenhouse gas emissions.", answer: false, explain: "It produces less than 4% of global emissions, but suffers many of the consequences of climate change." },
      { type: "mc", q: "Why is Africa's population growth both an opportunity and a challenge?", options: ["Because many young people can drive development if they have education and jobs", "Because there are no young people", "Because the population is shrinking"], answer: 0, explain: "This is the idea of the demographic dividend: investment in schools, health and employment is needed." }
    ]
  }
});
