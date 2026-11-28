TOPIC('en', {
  id: "l2-geo-europa-ue",
  title: "Europe and the European Union",
  intro: "Europe is the smallest of the «large» continents, but it has an unmatched density of history, languages and cities. After two world wars that started right here, its states made a choice never tried before: to pool parts of their sovereignty so as never to go to war with each other again. Let's look at the land, the peoples, the institutions of the <b>European Union</b> and what it means, in practice, to be <b>European citizens</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. A continent made of peninsulas",
      html: `<p>Europe is, in reality, a large <b>peninsula of Eurasia</b>: the border with Asia is not clear-cut and by convention it runs along the <b>Ural Mountains</b>, the Ural River, the Caspian Sea and the Caucasus range. It covers about <b>10 million km²</b> (less than a quarter of Asia) and is home to about <b>745 million</b> people, in more than 40 states if European Russia and the microstates are included.</p>
<p>Its main geographical feature is its <b>indented coastline</b>: peninsulas (Scandinavian, Iberian, Italian, Balkan, Denmark), gulfs, islands. No point in Europe is very far from the sea, and for thousands of years this has encouraged trade, navigation and cultural exchange.</p>
<ul>
<li><b>Relief</b>: in the south, the belt of the <b>Alps</b> (Mont Blanc, 4,806 m, the highest peak in western Europe), the Pyrenees, the Apennines and the Carpathians; in the north, the ancient Scandinavian mountains. Using the Caucasus convention, the highest point in Europe is Mount Elbrus (5,642 m).</li>
<li><b>Plains</b>: the great <b>European Plain</b>, which stretches from western France to Russia through Germany and Poland; the Po Valley and the Hungarian (Pannonian) Plain.</li>
<li><b>Rivers</b>: the <b>Volga</b> (about 3,500 km, the longest in Europe), the <b>Danube</b> (about 2,850 km, crossing or bordering 10 countries from Germany to the Black Sea), the Rhine, the Elbe, the Vistula, the Po.</li>
<li><b>Climates</b>: Mediterranean in the south, oceanic in the west (influenced by the Gulf Stream), continental in the east, subarctic and tundra in the north.</li>
</ul>`
    },
    {
      type: "3d",
      title: "3D terrain: the landforms of Europe",
      scene: "terrain",
      options: {
        features: {
          peninsula: { label: "Peninsula", html: "<p>Italy, Spain and Greece are peninsulas: land surrounded by sea on three sides. This gives them ports, fishing and maritime trade.</p>" },
          mountain: { label: "Mountain range", html: "<p>The Alps were formed by the collision between the African and Eurasian plates, over tens of millions of years. They are Europe's great barrier, but also its water reservoir.</p>" },
          plain: { label: "Plain", html: "<p>The plains (the European Plain, the Po Valley) are the most fertile and densely populated areas: intensive farming, cities, industry, major transport routes.</p>" },
          river: { label: "River", html: "<p>The Rhine, the Danube and the Volga are true water highways. The Main-Danube Canal (1992) links the North Sea to the Black Sea.</p>" },
          delta: { label: "Delta", html: "<p>The Danube Delta (Romania-Ukraine) is one of the largest in Europe and a UNESCO World Heritage Site; the Po Delta is the largest in Italy.</p>" },
          gulf: { label: "Gulf", html: "<p>Gulfs such as the Gulf of Genoa or the Gulf of Bothnia encouraged the growth of ports and seafaring cities.</p>" },
          strait: { label: "Strait", html: "<p>Straits such as Gibraltar, the Bosporus and the Dardanelles are strategic passages: whoever controls them controls the routes.</p>" },
          glacier: { label: "Glacier", html: "<p>Alpine glaciers (such as the Aletsch in Switzerland) are retreating rapidly because of global warming.</p>" }
        }
      },
      caption: "Rotate the landscape and tap its parts: relief and coastlines explain much of Europe's history and economy."
    },
    {
      type: "text",
      title: "2. Peoples, languages, religions",
      html: `<p>More than <b>200 languages</b> are spoken in Europe (the EU recognises 24 as official), grouped mainly into three large Indo-European families: <b>Romance</b> (Italian, French, Spanish, Portuguese, Romanian), <b>Germanic</b> (German, English, Dutch, the Scandinavian languages) and <b>Slavic</b> (Russian, Polish, Czech, Serbo-Croatian, Bulgarian). There are also languages from other families: Hungarian, Finnish and Estonian (<i>Uralic</i>), Basque, and Maltese (of Arabic origin).</p>
<p>Religions also draw maps: <b>Catholicism</b> in the south and in Poland, <b>Protestantism</b> in the north, <b>Orthodox Christianity</b> in the east and the Balkans, <b>Islam</b> in Albania, Bosnia and Kosovo, as well as large immigrant communities in western Europe. Since the 20th century a growing share of Europeans say they are non-believers.</p>
<p><b>Demography</b>: Europe is the <b>oldest</b> continent: fertility rates are often below 1.5 children per woman (Italy about 1.2), far from the level of 2.1 that keeps the population stable. Without immigration, the working-age population would shrink rapidly. <b>Cities</b> are very numerous and linked in a network: from the «Blue Banana» (the London-Benelux-Rhine-Milan axis) to the Mediterranean axis.</p>
<p>History has also left <b>deep divisions</b>: after 1945 the «Iron Curtain» separated western Europe from the communist countries of the East until 1989 (fall of the Berlin Wall, 9 November 1989). In the 1990s the wars in Yugoslavia showed that nationalism and ethnic divisions could flare up again.</p>`
    },
    {
      type: "svg",
      title: "The stages of European integration",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#475569" stroke-width="4"/>
<g font-size="14" fill="#111827" text-anchor="middle">
<circle cx="70" cy="150" r="9" fill="#2563eb"/><text x="70" y="125" font-weight="bold">1951</text><text x="70" y="185">ECSC</text><text x="70" y="203">(6 states)</text>
<circle cx="170" cy="150" r="9" fill="#2563eb"/><text x="170" y="125" font-weight="bold">1957</text><text x="170" y="185">Treaties</text><text x="170" y="203">of Rome</text>
<circle cx="270" cy="150" r="9" fill="#16a34a"/><text x="270" y="125" font-weight="bold">1985</text><text x="270" y="185">Schengen</text><text x="270" y="203">(agreement)</text>
<circle cx="360" cy="150" r="9" fill="#16a34a"/><text x="360" y="125" font-weight="bold">1992</text><text x="360" y="185">Maastricht</text><text x="360" y="203">(in force '93)</text>
<circle cx="450" cy="150" r="9" fill="#f59e0b"/><text x="450" y="125" font-weight="bold">2002</text><text x="450" y="185">Euro notes</text><text x="450" y="203">and coins</text>
<circle cx="535" cy="150" r="9" fill="#dc2626"/><text x="535" y="125" font-weight="bold">2020</text><text x="535" y="185">Brexit</text><text x="535" y="203">(EU of 27)</text>
</g>
<text x="300" y="40" font-size="17" font-weight="bold" text-anchor="middle" fill="#111827">From coal and steel to the Union</text>
<text x="300" y="260" font-size="14" text-anchor="middle" fill="#475569">Other dates: 1973 first enlargement, 2004 10 countries join, 2009 Treaty of Lisbon</text>
</svg>`,
      caption: "Integration happened in small steps: first the economy (coal, steel, the market), then the currency, open borders and citizenship."
    },
    {
      type: "text",
      title: "3. From war to Union: the history",
      html: `<p>In 1945 Europe lies in ruins: millions dead, cities destroyed. On 9 May 1950 the French foreign minister <b>Robert Schuman</b> (inspired by <b>Jean Monnet</b>) proposes placing French and German <b>coal and steel</b> production under a common authority: they are the raw materials of war, and sharing them makes war «not merely unthinkable, but materially impossible». So in <b>1951</b> (Treaty of Paris) the <b>ECSC</b> (European Coal and Steel Community) is born, with six states: France, West Germany, Italy, Belgium, the Netherlands, Luxembourg.</p>
<p>On 25 March <b>1957</b> the same six sign in Rome the treaty establishing the <b>European Economic Community (EEC)</b>, a common market in which goods, people, services and capital move freely. Successive enlargements follow: in 1973 the United Kingdom, Ireland and Denmark; in the 1980s Greece, Spain and Portugal; in 1995 Austria, Finland and Sweden; in <b>2004</b> ten countries of the East and the Mediterranean (including Poland, Hungary, the Czech Republic, Slovakia, Slovenia, Estonia, Latvia, Lithuania, Cyprus and Malta), then Bulgaria and Romania (2007) and Croatia (2013).</p>
<p>The <b>Maastricht Treaty</b> (signed in 1992, in force from 1993) creates the <b>European Union</b> and <b>European citizenship</b>; <b>euro</b> notes and coins have circulated since 1 January 2002. In 2016 the United Kingdom votes in a referendum (23 June) to leave; <b>Brexit</b> takes effect on 31 January 2020 and the Union goes down from 28 to <b>27 states</b>. Today the EU has about <b>450 million</b> inhabitants. To join, a country must meet the <b>Copenhagen criteria</b> (1993): democracy and the rule of law, a functioning market economy, and the ability to adopt the common rules.</p>`
    },
    {
      type: "decision",
      title: "1950: share coal with the former enemy?",
      html: `<p>It is 1950. France came out of the war victorious but exhausted by the occupation; Germany is divided and under Allied control. German coal and steel production is starting up again, and in Paris many fear that Germany might rearm. The United States is pushing to revive the German economy as a bulwark against the Soviets. Minister Schuman has to choose how to deal with this problem.</p>`,
      question: "What would you have proposed?",
      options: [
        { label: "Limit German production by force", outcome: "This is the logic of 1919 (Versailles): humiliation and controls fuelled the desire for revenge. Keeping a large country under supervision is hard in the long run and breeds resentment." },
        { label: "Pool coal and steel under a supranational authority", outcome: "This is Schuman's proposal: neither country could rearm in secret, and economic interests become intertwined. It ties security to the economy." },
        { label: "Let each state go its own way", outcome: "It would mean returning to the competition between states that had led to two world wars in thirty years, with the Cold War on the doorstep." }
      ],
      answer: 1,
      explain: "Schuman proposed the second path, on 9 May 1950 (now «Europe Day»). In 1951 the ECSC was born: a new idea, cooperation as a guarantee of peace. It is the first brick of the whole European project."
    },
    {
      type: "quiz",
      title: "Mini-quiz: land and history",
      questions: [
        { type: "mc", q: "What is the longest river in Europe?", options: ["Danube", "Volga", "Rhine"], answer: 1, explain: "The Volga is about 3,500 km long; the Danube comes second, at about 2,850 km." },
        { type: "mc", q: "Which 1957 treaty established the EEC?", options: ["Maastricht Treaty", "Treaty of Rome", "Treaty of Versailles"], answer: 1, explain: "On 25 March 1957 the six founding countries signed in Rome the treaty creating the European Economic Community." },
        { type: "tf", q: "The ECSC dealt with the production of coal and steel.", answer: true, explain: "It was the first Community (1951): pooling the raw materials of war to make war impossible." }
      ]
    },
    {
      type: "text",
      title: "4. How the EU works: the institutions",
      html: `<p>The Union is neither a simple agreement between governments nor a federal state: it is a <b>sui generis</b> (one-of-a-kind) organisation to which the states have transferred some powers (the internal market, competition, foreign trade, the currency for euro countries) and with which they share others (agriculture, environment, transport, energy, cohesion). Other powers remain with the states (defence, taxation, health and education are largely national). The principle of <b>subsidiarity</b> applies: only what cannot be done better at local or national level is decided at European level.</p>
<table>
<tr><th>Institution</th><th>Role</th><th>Seat</th></tr>
<tr><td><b>European Parliament</b></td><td>Directly elected by citizens every 5 years (since 1979). Co-legislates with the Council, approves the budget, scrutinises the Commission. 720 MEPs after the 2024 elections.</td><td>Strasbourg and Brussels</td></tr>
<tr><td><b>European Council</b></td><td>Brings together the heads of state or government: sets the general political direction.</td><td>Brussels</td></tr>
<tr><td><b>Council of the European Union</b></td><td>Represents the governments of the 27: adopts laws together with Parliament.</td><td>Brussels</td></tr>
<tr><td><b>European Commission</b></td><td>The «executive»: proposes laws, manages the budget, makes sure the treaties are applied (it is called the «guardian of the treaties»).</td><td>Brussels</td></tr>
<tr><td><b>Court of Justice of the EU</b></td><td>Ensures that EU law is interpreted and applied in the same way everywhere.</td><td>Luxembourg</td></tr>
<tr><td><b>European Central Bank (ECB)</b></td><td>Runs the monetary policy of the euro, with the aim of price stability.</td><td>Frankfurt</td></tr>
</table>
<p>The main EU laws are <b>regulations</b> (directly valid in all states, with no need to be transposed) and <b>directives</b> (they set goals that each state achieves through its own laws). An example: the GDPR regulation (2018) on the protection of personal data applies throughout the Union.</p>`
    },
    {
      type: "widget",
      title: "Activity: match each institution to its function",
      widget: "match",
      options: {
        pairs: [
          ["European Parliament", "Elected by citizens, co-legislates"],
          ["European Commission", "Proposes laws, guardian of the treaties"],
          ["Court of Justice", "Ensures uniform interpretation of EU law"],
          ["ECB", "Monetary policy of the euro"],
          ["European Council", "Heads of state and government, political direction"]
        ]
      },
      caption: "If you get it wrong, try again: dividing tasks is how the Union balances powers and interests."
    },
    {
      type: "example",
      title: "What changes in everyday life",
      html: `<p>A 17-year-old Italian girl can spend a semester in Lisbon with the <b>Erasmus+</b> programme (launched in 1987 and used by millions of young people). A Polish electrician can work in Milan without a residence permit thanks to the free movement of workers. With the <b>European Health Insurance Card</b> you can get treatment in other EU countries. Since 2017 <b>roaming</b> charges have been abolished: calling from Spain costs the same as calling from home. With the <b>euro</b> (adopted by 20 countries between 1999 and 2023) there is no need to change money and prices can be compared. And <b>Schengen</b> (agreement 1985, convention 1990, applied from 1995) removes systematic checks at internal borders between the states in the area, which today includes 29 countries, some of them outside the EU, such as Switzerland and Norway.</p>`
    },
    {
      type: "example",
      title: "One product, many rules: the common charger",
      html: `<p>Since 28 December 2024 all new phones, tablets and headphones sold in the EU must have a <b>USB-C</b> port. A regulation, valid in all states, required manufacturers to adopt a common standard: less electronic waste, lower costs for families. It is a good example of how a single market of 450 million consumers allows Europe to set rules that then become a reference outside its borders too.</p>`
    },
    {
      type: "curiosity",
      title: "The flag and the anthem",
      html: `<p>The flag of Europe (twelve gold stars in a circle on a blue background) was chosen by the Council of Europe in 1955: the number twelve is a symbol of perfection and does not depend on the number of states. The <b>anthem</b> is the «Ode to Joy» from <b>Beethoven</b>'s Ninth Symphony (words by Schiller), with no official lyrics: the language of music is the same for everyone.</p>`
    },
    {
      type: "curiosity",
      title: "The smallest country and the most distant",
      html: `<p>The EU includes very different states: Germany has about 84 million inhabitants, Malta about half a million. Yet Malta elects 6 MEPs and Germany 96: a rule called <b>degressive proportionality</b> protects small countries without ignoring large ones. There are also EU territories very far from the continent: French Guiana in South America and Réunion in the Indian Ocean are part of the Union and use the euro.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the European Union",
      intro: "If treaties and acronyms seem abstract, try these images.",
      tabs: [
        {
          label: "🏠 The block of flats",
          html: `<p>Imagine a block of flats: each family (state) remains in charge of its own flat (taxes, schools, police), but decides common matters at the residents' meeting, such as the lift, the roof and the caretaker (the market, the currency, environmental rules). Some rules are voted by majority and others need <b>unanimity</b> (foreign policy, for example). Sometimes the meeting is slow, but living together costs less and protects everyone from conflict. The analogy has a limit: if you don't like it you can (as the United Kingdom did) sell up and leave, but at a price.</p>`
        },
        {
          label: "🌍 Other examples of unions",
          html: `<p>The EU is not the only experiment: the <b>African Union</b> (2002) has 55 members, <b>ASEAN</b> (1967) brings together ten Southeast Asian countries, <b>Mercosur</b> (1991) some South American countries, and the <b>USMCA</b> (2020, formerly NAFTA) links the USA, Canada and Mexico. None of them, however, has a directly elected parliament, a court with binding power over the states and a common currency like the EU: that is why it is considered the most advanced case of integration.</p>`
        },
        {
          label: "📊 In figures",
          html: `<p>The EU has about <b>6%</b> of the world's population, but produces about <b>15-17%</b> of world GDP and is the largest internal market on the planet. The common budget is about <b>1%</b> of the total income of its states (national budgets are worth between 40 and 55% of GDP). With <b>Next Generation EU</b> (2020, about 750 billion euros) the Union borrowed collectively for the first time to restart the economy after Covid-19; Italy received about 190 billion in grants and loans (its recovery plan, the PNRR).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#eff6ff"/><text x="30" y="40" font-size="15" font-weight="bold" fill="#1e3a8a">Share of world population: EU about 6%</text><rect x="30" y="50" width="440" height="22" fill="#e5e7eb" stroke="#6b7280"/><rect x="30" y="50" width="27" height="22" fill="#2563eb" stroke="#1e3a8a"/><text x="30" y="110" font-size="15" font-weight="bold" fill="#1e3a8a">Share of world GDP: EU about 15-17%</text><rect x="30" y="120" width="440" height="22" fill="#e5e7eb" stroke="#6b7280"/><rect x="30" y="120" width="72" height="22" fill="#2563eb" stroke="#1e3a8a"/><text x="30" y="180" font-size="14" fill="#475569">Bars to scale. Rounded estimates.</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why the European Union exists",
      nodes: [
        { id: "guerre", label: "Two world wars", x: 15, y: 8, color: "#dc2626", html: "1914-1918 and 1939-1945: tens of millions dead.", why: "The wars that began in Europe showed that nationalism and rivalry between states could destroy the continent. Hence the idea that peace is built through common interests, not just treaties." },
        { id: "schuman", label: "Schuman Plan and ECSC", x: 50, y: 28, color: "#a855f7", html: "1950-1951: coal and steel under a common authority.", why: "With the ECSC, France and Germany could no longer arm in secret: economic cooperation became a guarantee of security (Jean Monnet's «functionalist» idea: unite one step at a time)." },
        { id: "mercato", label: "Single market", x: 85, y: 28, color: "#16a34a", html: "Free movement of goods, people, services, capital.", why: "Bigger markets allow economies of scale and more competition: wealth grows and breaking with one's neighbours becomes costly. The Single European Act (1986) set the goal of an internal market by 1992." },
        { id: "moneta", label: "Euro and ECB", x: 20, y: 56, color: "#f59e0b", html: "Single currency since 1999 (notes and coins since 2002).", why: "After the end of the fixed exchange-rate system (1970s), competitive devaluations between countries threatened the single market. The common currency removes exchange-rate risk, but requires budget policies to be coordinated." },
        { id: "cittadinanza", label: "European citizenship", x: 80, y: 56, color: "#2563eb", html: "Vote for Parliament, free movement, consular protection.", why: "Introduced at Maastricht in 1992: it adds to (without replacing) national citizenship, and recognises rights for citizens, not only for states." },
        { id: "allargamento", label: "Enlargement", x: 50, y: 78, color: "#ec4899", html: "From 6 to 27 states, with the Copenhagen criteria.", why: "After 1989 the Union was a way for the countries of the East to consolidate democracy and the market. But enlarging also makes it harder to govern, because it is more diverse." },
        { id: "sfide", label: "Current challenges", x: 50, y: 95, color: "#14b8a6", html: "Migration, energy, defence, climate, populism.", why: "The EU keeps evolving: the 2008-2012 financial crisis, Brexit, the pandemic and the war in Ukraine since 2022 have pushed it to expand its powers (for example on vaccines, common debt and defence)." }
      ],
      edges: [
        ["guerre", "schuman", "leads to"],
        ["schuman", "mercato", "develops"],
        ["mercato", "moneta", "requires"],
        ["moneta", "cittadinanza", "strengthens"],
        ["cittadinanza", "allargamento", "and"],
        ["allargamento", "sfide", "creates"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Europe: about 10 million km², border with Asia along the Urals; the Volga (longest river), the Alps, the great European Plain.</li>
<li>Language families: Romance, Germanic, Slavic. The <b>oldest</b> continent in the world.</li>
<li><b>1950</b> Schuman Declaration; <b>1951</b> ECSC; <b>1957</b> Treaties of Rome; <b>1992/93</b> Maastricht; <b>2002</b> euro notes and coins; <b>2020</b> Brexit.</li>
<li>EU: <b>27 states</b>, about 450 million inhabitants.</li>
<li>Institutions: Parliament (elected), European Council, Council of the EU, Commission, Court of Justice, ECB.</li>
<li>Regulations apply everywhere; directives must be transposed. The principle of subsidiarity.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: institutions and citizenship",
      questions: [
        { type: "mc", q: "Which institution proposes EU laws?", options: ["The European Parliament", "The European Commission", "The European Central Bank"], answer: 1, explain: "As a rule, only the Commission has the power of legislative initiative." },
        { type: "tf", q: "An Italian citizen is also a European citizen.", answer: true, explain: "Since 1992, European citizenship belongs to anyone who holds the citizenship of a member state." },
        { type: "text", q: "What is the name of the agreement that removed systematic checks at internal borders?", answer: ["schengen", "schengen agreement", "the schengen agreement"], explain: "The Schengen Agreement (1985) and its implementing convention (1990) created the area without internal borders." }
      ]
    }
  ],
  glossary: [
    { t: "Subsidiarity", d: "The principle that decisions are taken at the level closest to citizens, and at European level only when really necessary." },
    { t: "Regulation", d: "An EU act that is binding in its entirety and directly applicable in every member state." },
    { t: "Directive", d: "An EU act that sets a result to be achieved, leaving states free to choose how to do it through their own laws." },
    { t: "Schengen", d: "Area of free movement without systematic checks at internal borders." },
    { t: "Eurozone", d: "The EU states that have adopted the euro as their currency." },
    { t: "Supranational", d: "Standing above national states, with powers in certain areas (like the European Commission)." },
    { t: "Copenhagen criteria", d: "Political, economic and legal conditions a country must meet to join the EU (1993)." },
    { t: "Brexit", d: "The United Kingdom's exit from the EU, on 31 January 2020, after the 2016 referendum." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which states signed the Treaties of Rome in 1957?", options: ["France, West Germany, Italy, Belgium, the Netherlands, Luxembourg", "Italy, Spain, Portugal, Greece, France, Austria", "All European countries"], answer: 0, explain: "The six founding countries of the ECSC established the EEC." },
      { type: "mc", q: "Where is the European Central Bank based?", options: ["Brussels", "Strasbourg", "Frankfurt"], answer: 2, explain: "The ECB is based in Frankfurt am Main, Germany." },
      { type: "tf", q: "The European Parliament is directly elected by the citizens of the Union.", answer: true, explain: "Since 1979 it has been elected by direct universal suffrage every five years." },
      { type: "num", q: "How many states make up the European Union today?", answer: 27, tol: 0, explain: "After the United Kingdom left (2020) there are 27 member states." },
      { type: "mc", q: "What are the Copenhagen criteria?", options: ["The conditions to be met to join the EU", "The rules for using the euro", "Fishing limits in European seas"], answer: 0, explain: "Set in 1993: democracy, rule of law, market economy, ability to apply the common rules." },
      { type: "order", q: "Put in chronological order.", items: ["ECSC (1951)", "Treaties of Rome (1957)", "Maastricht (1992)", "Euro notes and coins (2002)", "Brexit (2020)"], explain: "From the Coal and Steel Community to the United Kingdom's exit, by way of the market, the Union and the currency." },
      { type: "mc", q: "What is the difference between a regulation and a directive?", options: ["A regulation applies directly in all states; a directive sets goals to be transposed through national laws", "They are the same thing", "A directive applies only to Italy"], answer: 0, explain: "A regulation is directly applicable; a directive leaves states to choose the means." },
      { type: "text", q: "What is the name of the principle by which only what cannot be done better at national or local level is decided at European level?", answer: ["subsidiarity", "principle of subsidiarity", "the principle of subsidiarity"], explain: "It is subsidiarity, laid down in the treaties." },
      { type: "tf", q: "Europe has the highest fertility rate in the world.", answer: false, explain: "On the contrary: it is the oldest continent, with fertility often below 1.5 children per woman." },
      { type: "mc", q: "Why was the ECSC designed around coal and steel?", options: ["They were the raw materials of war: pooling them made a conflict harder", "Because they were the only goods sold in Europe", "Because they were only used in agriculture"], answer: 0, explain: "Schuman proposed it to make war between France and Germany «materially impossible»." }
    ]
  }
});
