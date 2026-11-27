TOPIC('en', {
  id: "l1-geo-migrazioni",
  title: "Migration",
  intro: "Human beings have always moved: the first <i>Homo sapiens</i> left Africa tens of thousands of years ago, and today about <b>280-300 million</b> people in the world live in a country other than the one where they were born. Why do people leave? Where do they go? What changes for those who leave, those who arrive and those who stay behind? Let's learn to tell apart the terms, causes, routes and consequences, using data rather than slogans.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. The right words: who is a migrant?",
      html: `<p>In everyday language, words that actually have different meanings, including legal ones, are used as if they were the same. Telling them apart is the first step to thinking clearly.</p>
<ul>
<li><b>Migrant</b>: someone who moves to another place for a significant period. An <b>emigrant</b> when seen from the country they leave, an <b>immigrant</b> when seen from the country they arrive in. Migration can be <b>internal</b> (within the same state, like the move from southern to northern Italy in the 1950s-60s) or <b>international</b> (from one state to another).</li>
<li><b>Economic migrant</b>: someone who leaves to find work or improve their living conditions.</li>
<li><b>Refugee</b>: according to the <b>1951 Geneva Convention</b>, someone who is outside their own country and cannot or will not return because of a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a social group or political opinion. They are entitled to <b>international protection</b> and to the principle of <b>non-refoulement</b>: they cannot be sent back to a place where their life is at risk.</li>
<li><b>Asylum seeker</b>: someone who has applied for protection and is waiting for the state's decision. Not all asylum seekers are recognised as refugees.</li>
<li><b>Internally displaced person</b> (IDP): someone forced to leave home who stays within their own country (often the majority of the victims of wars and floods).</li>
<li><b>Irregular migrant</b>: someone who enters or stays in a country without the required documents. Being regular or irregular is a legal status, not a quality of the person.</li>
</ul>
<p>The Italian Constitution provides for the right of asylum in <b>Article 10</b>: a foreigner who is denied, in their own country, the actual exercise of the democratic freedoms guaranteed by the Italian Constitution is entitled to asylum.</p>`
    },
    {
      type: "text",
      title: "2. Why people migrate: push and pull factors",
      html: `<p>In 1966 the geographer Everett Lee proposed a model that is still used today: the decision to migrate comes from weighing up <b>push factors</b> (which make people leave their place of origin) against <b>pull factors</b> (which attract them to their destination), in the presence of <b>obstacles</b> (distance, costs, laws, language).</p>
<ul>
<li><b>Push</b>: poverty and unemployment, wars and persecution, authoritarian regimes, natural disasters and <b>climate change</b> (drought, desertification, rising seas), lack of services (schools, healthcare).</li>
<li><b>Pull</b>: work and higher wages, safety, freedom, study, being reunited with family, services and quality of life.</li>
<li><b>Social networks</b>: people often go where relatives or people from their home town already live, who help them find housing and work (<b>chain migration</b>). This is why Italians clustered in certain New York neighbourhoods or certain Argentine cities, and why today Moroccan or Chinese communities settle in particular areas.</li>
</ul>
<p><b>A common misconception</b>: most migrants are <b>not</b> the poorest of the poor. Emigrating is expensive (travel, documents, sometimes thousands of euros), so those who leave tend to have a few more resources. Moreover, <b>most African migrants move within Africa</b>, and most of the world's refugees are hosted in low- and middle-income countries close to their own (Turkey, Iran, Colombia, Uganda, Pakistan), not in Europe.</p>`
    },
    {
      type: "widget",
      title: "Activity: push or pull?",
      widget: "classify",
      options: {
        groups: ["Push factor", "Pull factor"],
        items: [
          ["💥 War in the home country", 0],
          ["💼 A job offer abroad", 1],
          ["🌵 Drought and failed harvests", 0],
          ["🎓 A prestigious university", 1],
          ["👪 Relatives who have already emigrated", 1],
          ["🚫 Political persecution", 0],
          ["🏥 Efficient healthcare", 1],
          ["📉 Very high youth unemployment", 0]
        ]
      },
      caption: "In reality, every decision to migrate is almost always a combination of several factors."
    },
    {
      type: "svg",
      title: "Who migrates: the big numbers",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Out of 100 people in the world (roughly)</text>
<g>
<rect x="40" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="75" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="110" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="145" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="180" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="215" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="250" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="285" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="320" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="355" y="50" width="30" height="30" fill="#f97316" stroke="#9a3412"/>
</g>
<text x="40" y="110" font-size="15" fill="#111827">Nearly 96-97 people out of 100 live in the country where they were born.</text>
<text x="40" y="136" font-size="15" fill="#9a3412" font-weight="bold">About 3-4 out of 100 are international migrants.</text>
<rect x="40" y="170" width="520" height="22" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="40" y="170" width="94" height="22" fill="#ef4444" stroke="#7f1d1d"/>
<text x="40" y="215" font-size="15" fill="#111827">Among them (about 1 in 3 or 4): people fleeing war and persecution.</text>
<text x="40" y="240" font-size="15" fill="#111827">Forcibly displaced people worldwide (including IDPs): over 120 million.</text>
<text x="40" y="270" font-size="14" fill="#6b7280">UN / UNHCR estimates (rounded figures, updated every year).</text>
</svg>`,
      caption: "The number of migrants (about 3.6-3.7% of the world population) is high in absolute terms but small as a percentage: the vast majority of people never leave the country where they were born."
    },
    {
      type: "quiz",
      title: "Mini-quiz: terms and causes",
      questions: [
        { type: "mc", q: "Who is a refugee according to the Geneva Convention?", options: ["Someone who emigrates to find a better job", "Someone outside their country because of a well-founded fear of persecution", "Someone who moves to another city in their own country"], answer: 1, explain: "A refugee flees persecution on grounds of race, religion, nationality, social group or political opinion." },
        { type: "mc", q: "Which of these is a push factor?", options: ["A well-paid job abroad", "A war in the home country", "A prestigious university"], answer: 1, explain: "Wars push people to leave their place of origin; the others are pull factors." },
        { type: "tf", q: "Most of the world's refugees are hosted in Europe.", answer: false, explain: "Most are hosted in low- and middle-income countries near their countries of origin." }
      ]
    },
    {
      type: "text",
      title: "3. A history of movement",
      html: `<p>Migration is not a recent phenomenon:</p>
<ul>
<li><b>Prehistory</b>: <i>Homo sapiens</i> spreads out of Africa (the migrations that populated the rest of the world began about 70,000-60,000 years ago) and reaches every continent except Antarctica.</li>
<li><b>Ancient and medieval times</b>: Greek and Phoenician colonisation of the Mediterranean, the migrations of the Germanic peoples after the 4th century, the Arab and Mongol expansions.</li>
<li><b>From the 16th century</b>: the conquest of the Americas and the <b>Atlantic slave trade</b>: about <b>12.5 million</b> Africans were forcibly shipped between the 16th and 19th centuries, of whom about 10.7 million survived the crossing. It was a <b>forced</b> migration.</li>
<li><b>1850-1914</b>: the <b>great European emigration</b> overseas: between 50 and 60 million Europeans (Irish, Germans, Italians, Poles, Scandinavians, Eastern European Jews) went to North America, Argentina, Brazil and Australia. About 12 million people passed through Ellis Island, in New York, between 1892 and 1954.</li>
<li><b>20th century</b>: mass movements caused by wars (population exchanges, refugees of the Second World War), decolonisation, labour migration to Western Europe after 1945 (the <b>Gastarbeiter</b>, \"guest workers\", in Germany), the Great Migration of African Americans from the southern to the northern USA (1916-1970, about 6 million people).</li>
<li><b>Today</b>: migration to the Gulf states, the USA and Europe; large-scale migration within Asia and within Africa; climate migration and refugee flows (Syria, Afghanistan, Ukraine, Sudan, Venezuela).</li>
</ul>`
    },
    {
      type: "example",
      title: "Worked example: the Italians who left",
      html: `<p>Between <b>1876</b> and <b>1976</b> about <b>27 million Italians</b> left the country (some later returned). They went to the Americas (Argentina, Brazil, the United States), to other European countries (France, Switzerland, Germany, Belgium) and to Australia. At first it was mainly people from the Veneto, Friuli and Piedmont who left, then more and more southerners (Sicily, Campania, Calabria, Apulia).</p>
<p>In 1900 a peasant from southern Italy could earn more in a few months in New York than in a year at home: the push was the <b>hunger for land and work</b>, the pull was American wages. In 1946 Italy signed an agreement with Belgium: Italian men went to work in the mines in exchange for coal. On 8 August 1956, 262 miners died in the <b>Marcinelle</b> mine, 136 of them Italian. Italians too suffered prejudice and discrimination, and were victims of violence, such as the lynching of eleven Italians in New Orleans in 1891.</p>
<p>Today over <b>6 million Italian citizens</b> live abroad (registered with AIRE, the official register of Italians resident abroad), and about <b>80 million people worldwide</b> have Italian origins (above all in Brazil and Argentina). Since the 2010s many young graduates have continued to leave: this is the so-called <b>\"brain drain\"</b>.</p>`
    },
    {
      type: "3d",
      title: "On the globe: some major migration routes",
      scene: "globe",
      options: {
        points: [
          { lat: 38.1, lon: 13.4, label: "Italy (departure point of 19th-century migrants)", color: "#16a34a" },
          { lat: 40.7, lon: -74.0, label: "New York (Ellis Island)", color: "#7c3aed" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 14.7, lon: -17.4, label: "Dakar (West Africa)", color: "#f59e0b" },
          { lat: 33.9, lon: 10.1, label: "Tunisia (central Mediterranean route)", color: "#dc2626" },
          { lat: 36.0, lon: 14.5, label: "Lampedusa", color: "#dc2626" },
          { lat: 25.3, lon: 55.3, label: "UAE (workers from Asia)", color: "#a16207" },
          { lat: 28.6, lon: 77.2, label: "Delhi (India)", color: "#ec4899" },
          { lat: 19.4, lon: -99.1, label: "Mexico City", color: "#2563eb" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#2563eb" }
        ],
        routes: [
          { points: [0, 1], color: "#16a34a" },
          { points: [0, 2], color: "#16a34a" },
          { points: [4, 5, 0], color: "#dc2626" },
          { points: [7, 6], color: "#ec4899" },
          { points: [8, 9], color: "#2563eb" }
        ]
      },
      caption: "Green: historical Italian emigration. Red: the central Mediterranean route. Pink: Asian workers heading to the Gulf states. Blue: Mexico-USA."
    },
    {
      type: "text",
      title: "4. Today: where from, where to",
      html: `<p>According to UN estimates, in 2020 there were about <b>281 million</b> international migrants (3.6% of the world population); by 2024 the number had risen to about <b>304 million</b> (3.7%).</p>
<ul>
<li><b>Destination countries</b>: the <b>United States</b> (about 50 million people born abroad) is first; next come <b>Germany</b>, <b>Saudi Arabia</b>, <b>Russia</b> and the <b>United Kingdom</b>. In the Gulf states (UAE, Qatar, Kuwait) foreigners are the <b>majority</b> of the population (for example about 88% in Qatar), mostly construction and domestic workers from India, Pakistan, Bangladesh, Nepal and the Philippines.</li>
<li><b>Countries of origin</b>: <b>India</b> (about 18 million emigrants, the largest diaspora), <b>Mexico</b>, <b>Russia</b>, <b>China</b>, <b>Syria</b>, <b>Bangladesh</b>, <b>Pakistan</b>, <b>Ukraine</b>.</li>
<li><b>Main corridors</b>: Mexico → United States; South Asia → Gulf states; Syria → Turkey, Lebanon, Germany; Ukraine → Poland and the EU (since 2022); Venezuela → Colombia and South America; sub-Saharan Africa → other African countries and, to a lesser extent, Europe.</li>
<li><b>Refugees and displaced people</b> (UNHCR): over <b>120 million</b> people forced to flee (including internally displaced people). Among the countries hosting the most refugees: Iran, Turkey, Colombia, Germany, Uganda, Pakistan.</li>
</ul>
<p>The <b>central Mediterranean route</b> (Libya and Tunisia to Lampedusa and Sicily) is one of the most dangerous: since 2014 over 25,000 people have been recorded as dead or missing in the Mediterranean. The European Union has the <b>Dublin Regulation</b>, which (in general) states that an asylum application is examined by the first EU country the person enters, and a recent <b>Pact on Migration and Asylum</b> (2024).</p>
<p>Over <b>5 million</b> foreign nationals live in <b>Italy</b> (about 9% of the population), from Romania, Morocco, Albania, China and Ukraine. Italian <b>citizenship</b> is normally acquired by <b>ius sanguinis</b> (descent from Italian citizens) or, for foreigners, after 10 years of residence (4 for EU citizens, 5 for stateless people and refugees) or through marriage.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… remittances are worth more than aid?",
      html: `<p>Migrants send part of their earnings home: these are <b>remittances</b>. According to the World Bank, in 2023 they reached about <b>650 billion dollars</b> to low- and middle-income countries, more than foreign direct investment and far more than development aid. In some countries (Tonga, Lebanon, Tajikistan, Nepal) they are worth over a quarter of GDP. A Filipino worker in Dubai who sends home 300 dollars a month can pay for the education of two nieces or nephews.</p>`
    },
    {
      type: "example",
      title: "Worked example: reading migration data",
      html: `<p>A country has <b>10 million</b> inhabitants, of whom <b>1.2 million</b> were born abroad; in one year 80,000 people arrive and 30,000 leave.</p>
<ul>
<li>Share born abroad = 1,200,000 ÷ 10,000,000 = <b>12%</b>.</li>
<li><b>Net migration</b> = 80,000 − 30,000 = <b>+50,000</b> (about +5 per thousand).</li>
<li>If that year births exceed deaths by only 10,000, total change is +60,000: <b>5/6 of the growth comes from migration</b>.</li>
</ul>
<p>This is the situation in many European countries: the population grows (or does not fall) thanks to net migration, not natural change.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… Brazil has more \"Italians\" than Italy?",
      html: `<p>Estimates suggest that about <b>30 million</b> people of Italian origin live in <b>Brazil</b> (over 10% of the population), more than live in any Italian region, and that there are more people of Italian descent in <b>São Paulo</b> than in Rome. In Argentina too, about half the population has at least one Italian ancestor. Migration leaves traces in surnames, food and dialects (<i>talian</i>, derived from the Venetian dialect, is a recognised language in some municipalities of Rio Grande do Sul).</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… internal migration can change the face of a country too?",
      html: `<p>Between the 1950s and the 1970s millions of Italians moved from the South to the North. <b>Turin</b> came to be called \"Italy's third southern city\" (after Naples and Palermo), because for many years thousands of people arrived every month to work at Fiat. In 1861 Italy was united but divided by languages and customs: it was internal migration, together with schools and television, that made Italian a language spoken by everyone.</p>`
    },
    {
      type: "text",
      title: "5. Consequences: for those who leave, those who arrive and those who stay",
      html: `<p>Migration has complex effects, which research measures with data rather than impressions.</p>
<ul>
<li><b>In destination countries</b>: migrants fill jobs that would otherwise go unfilled (farming, elderly care, construction, catering, healthcare) and <b>offset population ageing</b>: in Italy foreign nationals pay more in social security contributions each year than they receive in benefits (estimates by research foundations and INPS, Italy's national social security agency, show a positive balance), and contribute about <b>9%</b> of GDP (estimates by research foundations). At the same time there are challenges: <b>integration</b> at school and in learning the language, competition in some low-skilled sectors, tensions when arrivals are very rapid and concentrated, and the risk of exploitation (illegal gangmaster labour, <i>caporalato</i>, in farming).</li>
<li><b>In countries of origin</b>: <b>remittances</b> arrive, along with skills gained abroad (<i>brain circulation</i>), but there may be a <b>brain drain</b>: doctors, engineers and nurses leave, leaving the country short of professionals.</li>
<li><b>For migrants</b>: higher earnings, but also risks (the journey, exploitation, discrimination) and distance from family.</li>
<li><b>Cultural</b>: languages, food, music and religions mix. Think how much of \"Italian\" cooking (tomatoes, potatoes, maize) came from the Americas, or of pizza in the USA and Brazil.</li>
</ul>
<p>Societies follow different models of inclusion: <b>assimilation</b> (the migrant adopts the dominant culture and loses their own), <b>multiculturalism</b> (different cultures coexist with equal dignity), <b>integration</b> (the migrant takes full part in society, and everyone respects shared rules while keeping their own identity). The Italian Constitution protects the inviolable rights of every person, whether a citizen or not (Art. 2).</p>`
    },
    {
      type: "decision",
      title: "1905: leave or stay?",
      html: `<p>It is 1905. You are a young peasant in a village in Calabria. There is little land, the wheat harvest is poor, and you have a wife and a small child. A letter arrives from a cousin: in Buenos Aires (or New York) they are looking for farmhands, builders and bricklayers, and the wages are at least four times higher. A third-class ticket on the ship costs almost a year's earnings. The newspapers talk about scams by \"emigration agents\" and harsh living conditions.</p>`,
      question: "What would you have done?",
      options: [
        { label: "Stay and hope for a better year", outcome: "You stay close to your family, but the data show that many peasant families in the South saw their living standards fall; those who stayed often ended up emigrating a few years later." },
        { label: "Leave alone and send money home", outcome: "This was the most common choice: the father left, worked for years and sent remittances. Many came back (about half of Italian emigrants in the 20th century returned home)." },
        { label: "Leave with the whole family", outcome: "Less common, and very expensive: it meant risking a complete break with your roots, although the children would have better opportunities." }
      ],
      answer: 1,
      explain: "History shows that many emigrants left alone (\"circular\" or temporary migration) and sent remittances home; 'returning' was part of the plan, and emigrants' remittances were an important part of the Italian economy for decades. No choice was free of risk."
    },
    {
      type: "alternatives",
      title: "Other ways to understand migration",
      intro: "Migration is often described with numbers and slogans: here are some different perspectives.",
      tabs: [
        {
          label: "🌊 The river and the dam",
          html: `<p>Imagine migration as the water of a river: it flows from \"high\" places (with few opportunities) to \"low\" places (with more opportunities), and always finds a way. Building a <b>dam</b> (barriers, closed borders) can divert the flow or change its course (longer and more dangerous routes), but rarely stops it completely: it often turns it from legal to irregular. Effective migration policies try to <b>manage</b> the flow through regular channels (work visas, humanitarian corridors, family reunification), as if building <b>canals</b> and not just dams.</p>`
        },
        {
          label: "🧳 A family's story",
          html: `<p>Ask your grandparents and great-grandparents: where does your family come from? A great many Italian families have a relative who lived in another country or another region. You can draw a <b>migration family tree</b>: a map with arrows from place of birth to place of residence, over three generations. You will discover that migration, near or far, is part of almost everyone's history. Modern Italy itself was shaped by <b>internal migration</b>: after the war millions of people from the South and the Veneto went to work in Turin, Milan and Genoa.</p>`
        },
        {
          label: "📊 A different scale",
          html: `<p>One way to measure: the roughly <b>181,000</b> sea arrivals in Italy in 2016 (the all-time peak) were about <b>0.3%</b> of Italy's population; Lebanon took in more than a million Syrians with a population of about 6 million (over 15%). Changing the <b>scale</b> of comparison (country, continent, world) changes the perception. Another useful scale: worldwide about 3.7 people in 100 live outside their country of birth; <b>96.3 in 100 do not</b>.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><rect x="40" y="60" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="60" width="16" height="30" fill="#f97316" stroke="#9a3412"/><text x="40" y="45" font-size="15" fill="#111827" font-weight="bold">International migrants worldwide: 3.7%</text><rect x="40" y="130" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="130" width="38" height="30" fill="#ef4444" stroke="#7f1d1d"/><text x="40" y="115" font-size="15" fill="#111827" font-weight="bold">Foreign residents in Italy: about 9%</text><text x="40" y="185" font-size="14" fill="#6b7280">bars to scale (grey = the rest of the population)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why and how people move",
      nodes: [
        { id: "spinta", label: "Push factors", x: 20, y: 8, color: "#dc2626", html: "Poverty, wars, persecution, disasters, climate.", why: "These are the reasons why it is hard to stay: extreme poverty or war reduce people's choices. Research shows, however, that poverty alone does not explain departures: people also need resources and aspirations." },
        { id: "attrazione", label: "Pull factors", x: 80, y: 8, color: "#16a34a", html: "Work, safety, study, freedom.", why: "Wages in Europe or the USA can be 5-10 times higher than in many countries of origin, and the demand for labour also comes from the ageing of rich countries: demography links North and South." },
        { id: "reti", label: "Networks and obstacles", x: 50, y: 30, color: "#a855f7", html: "Relatives abroad, laws, costs, distance.", why: "Social networks explain why migration is concentrated along a few corridors (the sociologist Douglas Massey studied them for Mexico-USA); laws and costs decide whether the journey is regular or irregular." },
        { id: "rotte", label: "Routes and flows", x: 20, y: 56, color: "#2563eb", html: "Mediterranean, Mexico-USA, Asia-Gulf.", why: "Routes follow geography and policy: if one gateway closes (the Balkans in 2016), the flow shifts to another route (the central Mediterranean), often a riskier one." },
        { id: "diritto", label: "International law", x: 80, y: 56, color: "#f59e0b", html: "1951 Geneva Convention, non-refoulement, asylum.", why: "After the Second World War and the experience of millions of refugees, and of those who were turned back to the regimes persecuting them, countries decided to establish an international right to protection." },
        { id: "effetti", label: "Consequences", x: 50, y: 78, color: "#ec4899", html: "Demographic, economic, cultural.", why: "The effects depend on the speed of arrivals, the migrants' skills and integration policies: the same migration can be an asset or a problem depending on how it is managed." },
        { id: "gestione", label: "Managing migration", x: 50, y: 95, color: "#14b8a6", html: "Regular channels, agreements, cooperation, integration.", why: "The Global Compact for Safe, Orderly and Regular Migration (UN, 2018) is the first international agreement on this subject: it is not binding, but it recognises that no country can manage migration alone." }
      ],
      edges: [
        ["spinta", "reti", "plus"],
        ["attrazione", "reti", "plus"],
        ["reti", "rotte", "shape the"],
        ["diritto", "rotte", "regulates the"],
        ["rotte", "effetti", "produce"],
        ["diritto", "effetti", "protects"],
        ["effetti", "gestione", "call for"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>About <b>280-300 million</b> international migrants, that is about <b>3.6-3.7%</b> of humanity.</li>
<li><b>Migrant</b> ≠ <b>refugee</b> ≠ <b>asylum seeker</b> ≠ <b>internally displaced person</b>. Geneva Convention: 1951.</li>
<li><b>Push</b> and <b>pull</b> factors; social networks and obstacles.</li>
<li>Great European emigration 1850-1914; Italians abroad: about 27 million between 1876 and 1976.</li>
<li>Remittances: about 650 billion dollars a year to low- and middle-income countries.</li>
<li>The effects depend greatly on how migration is <b>managed</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: history and consequences",
      questions: [
        { type: "mc", q: "Which historical event caused the forced migration of about 12.5 million Africans?", options: ["The Atlantic slave trade", "The Industrial Revolution", "The First World War"], answer: 0, explain: "Between the 16th and 19th centuries about 12.5 million Africans were forcibly shipped to the Americas." },
        { type: "text", q: "What is the money that migrants send to their families in their home country called?", answer: ["remittances", "remittance"], explain: "Remittances are an essential resource for many poor countries." },
        { type: "tf", q: "The \"brain drain\" is the departure of highly qualified people from their home country.", answer: true, explain: "Yes: doctors, engineers and researchers who emigrate." }
      ]
    }
  ],
  glossary: [
    { t: "Migrant", d: "A person who moves to another place, within their own country or abroad, for a significant period." },
    { t: "Refugee", d: "A person who has left their country because of a well-founded fear of persecution and is entitled to international protection (Geneva Convention, 1951)." },
    { t: "Asylum seeker", d: "A person who has applied for international protection and is waiting for the state's decision." },
    { t: "Internally displaced person", d: "A person forced to leave their home who remains within the borders of their own country." },
    { t: "Push factors", d: "Conditions in the place of origin that push people to leave: poverty, wars, persecution, disasters." },
    { t: "Pull factors", d: "Conditions in the destination that attract people: work, safety, study, freedom." },
    { t: "Remittances", d: "Sums of money that migrants send to the families they left behind in their home country." },
    { t: "Brain drain", d: "Emigration of highly qualified people." },
    { t: "Non-refoulement", d: "Principle of international law: no one may be sent back to a place where they risk persecution or death." },
    { t: "Integration", d: "Process by which migrants take full part in the social, economic and cultural life of the host country." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Roughly what percentage of the world population are international migrants?", options: ["About 3.7%", "About 20%", "About 50%"], answer: 0, explain: "About 280-300 million out of 8 billion: less than 4%." },
      { type: "mc", q: "What is the difference between a refugee and an economic migrant?", options: ["A refugee is fleeing persecution and is entitled to international protection", "There is no difference", "An economic migrant only travels by plane"], answer: 0, explain: "Refugees are protected by the 1951 Geneva Convention; an economic migrant leaves to work or improve their living conditions." },
      { type: "tf", q: "Most of the world's refugees are hosted by rich European countries.", answer: false, explain: "Most are hosted by low- and middle-income countries, often bordering the country of origin." },
      { type: "num", q: "Roughly how many Italians (in millions) emigrated between 1876 and 1976?", answer: 27, tol: 2, unit: "million", explain: "About 27 million: one of the largest emigrations in modern history." },
      { type: "mc", q: "What is chain migration?", options: ["People leaving to follow relatives and friends who have already emigrated", "A sea voyage in conditions of slavery", "A type of sea route"], answer: 0, explain: "Social networks make it easier to choose a destination: people often go where they already know someone." },
      { type: "text", q: "What is the name of the island in New York Harbor through which about 12 million immigrants passed between 1892 and 1954?", answer: ["ellis island", "ellis"], explain: "Ellis Island, in New York Harbor." },
      { type: "order", q: "Put in chronological order.", items: ["Atlantic slave trade (from the 16th century)", "Great European emigration (1850-1914)", "Gastarbeiter in Germany (after 1945)", "Syrian refugee crisis (from 2011)"], explain: "From the Atlantic slave trade to the great emigration, then guest workers and refugees from recent conflicts." },
      { type: "mc", q: "What effect can the departure of doctors and engineers have on their home country?", options: ["Brain drain", "Demographic dividend", "Higher natural change"], answer: 0, explain: "This is the brain drain: the country loses skills that are expensive to train." },
      { type: "tf", q: "In international law, the principle of non-refoulement forbids sending a person back to where they risk death or persecution.", answer: true, explain: "It is one of the cornerstones of the Geneva Convention." },
      { type: "mc", q: "Why do migrants from poor countries not come from the very poorest people?", options: ["Because emigrating is expensive and requires some resources", "Because the poorest do not want to move", "Because it is forbidden by law"], answer: 0, explain: "The journey and documents cost money: those who leave often have at least some resources, education or a support network." }
    ]
  }
});
