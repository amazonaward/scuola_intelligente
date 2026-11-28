TOPIC('en', {
  id: "l2-dir-moneta-pil",
  title: "Money, inflation and GDP",
  intro: "With 10 euros today you buy less than you could ten years ago. Every so often you read in the papers that «GDP has grown by 0.5%» or that «the ECB has raised interest rates». What is <b>money</b> really? Who creates it? Why do prices, on average, go up (<b>inflation</b>)? And how do you measure the wealth produced by a whole country (<b>GDP</b>)? In this lesson, after markets and prices, you will build the tools to understand the economy as a whole: money, banks, the central bank, inflation, GDP and its limits.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What money is and what it is for",
      html: `<p>Before money there was <b>barter</b>: exchanging one good for another. It works badly, because it requires a <b>double coincidence of wants</b>: if you have wheat and want a pair of sandals, you have to find a shoemaker who wants precisely wheat. <b>Money</b> solves the problem: it is what everyone accepts in exchange for goods and services.</p>
<p>Money has three classic functions:</p>
<ul>
<li><b>medium of exchange</b>: it is used to buy and sell, avoiding barter;</li>
<li><b>unit of account</b>: it expresses the prices of all goods in the same measure (euros) so they can be compared;</li>
<li><b>store of value</b>: it lets you put off a purchase, keeping purchasing power over time (as long as it does not lose too much value).</li>
</ul>
<p>What gives value to today's money, which is made of paper and numbers on a screen? <b>Trust</b>: we accept it because we know others will accept it too, and because a central bank and a State guarantee it. This is called <b>fiat</b> or <b>fiduciary</b> money (from the Latin <i>fides</i>, «trust»). It cannot be converted into gold or silver.</p>`
    },
    {
      type: "widget",
      title: "A short history of money",
      widget: "timeline",
      options: {
        unit: "year",
        events: [
          { year: -650, label: "First coins minted in Lydia (Asia Minor)", icon: "🪙" },
          { year: 1000, label: "Banknotes in China (Song dynasty)", icon: "📜" },
          { year: 1661, label: "First European banknotes in Sweden", icon: "💴" },
          { year: 1944, label: "Bretton Woods: the dollar pegged to gold", icon: "🏦" },
          { year: 1971, label: "End of the dollar's convertibility into gold", icon: "❌" },
          { year: 1998, label: "The European Central Bank is founded", icon: "🇪🇺" },
          { year: 2002, label: "Euro cash", icon: "💶" }
        ]
      },
      caption: "From the first coins to fiat money."
    },
    {
      type: "text",
      title: "2. Forms of money and the role of banks",
      html: `<p>Money has taken different forms: <b>commodity money</b> (salt, shells, metals with intrinsic value), minted <b>coins</b> (the first coins in Lydia, around the 7th century BC), <b>paper money</b> (banknotes), and today above all <b>bank money</b>: the deposits in current accounts, which move by bank transfer and card, without cash. Most of the money in circulation today consists of simple electronic records.</p>
<p><b>Banks</b> collect <b>savings</b> (deposits) and lend them to firms and households, earning on the difference between the interest they pay savers and the interest they charge borrowers. They therefore act as <b>intermediaries</b> between those who have spare resources and those who need them. Under Article 47 of the Italian Constitution, the Republic «encourages and protects savings in all their forms; it regulates, coordinates and supervises the provision of credit».</p>
<p>Banks do not keep all deposits in their vaults: they keep only part of them (the <b>reserve</b>) and lend the rest. Whoever receives a loan in turn deposits it in a bank, which lends part of it again, and so on. This mechanism, called the <b>deposit multiplier</b>, means that banks create money through lending. It helps growth but makes the system vulnerable: if all account holders ask for their money back at once (a <b>bank run</b>), the bank cannot repay them all. That is why there is banking supervision and there are <b>deposit guarantee schemes</b>: in the EU deposits are protected up to <b>100,000 euros</b> per depositor per bank.</p>`
    },
    {
      type: "text",
      title: "3. The central bank and the ECB",
      html: `<p>At the top of the banking system is the <b>central bank</b>: a public or independent bank that issues money and steers the credit system. Its main functions are:</p>
<ul>
<li>it conducts <b>monetary policy</b>, that is it controls the quantity of money and the cost of borrowing (<b>interest rates</b>) in order to keep prices stable;</li>
<li>it is the «<b>bankers' bank</b>»: it lends money to commercial banks and holds their reserves;</li>
<li>it supervises the banking system and payments.</li>
</ul>
<p>In the <b>euro area</b> monetary policy is entrusted to the <b>European Central Bank (ECB)</b>, based in <b>Frankfurt</b> and set up on <b>1 June 1998</b>, which together with the national central banks (including the Bank of Italy, founded in 1893) forms the <b>Eurosystem</b>. Its main goal is <b>price stability</b>: the ECB aims for inflation of <b>2% a year over the medium term</b>. It also has other tasks, such as supervising the largest banks.</p>
<p>How does it act? Through its official <b>interest rate</b>: if the ECB <b>raises rates</b>, credit costs more, households and firms borrow less, demand cools and inflation falls. If it <b>lowers</b> them, credit is cheaper and the economy is stimulated. Another policy is the purchase of government bonds by the ECB (from 2015 to 2018 and again from 2019-2020), to inject money into the economy.</p>
<p>The ECB is <b>independent</b>: the treaties forbid governments to give it orders. Independence protects monetary decisions from short-term political pressure, such as printing money to pay for election promises, which in the long run produces inflation.</p>`
    },
    {
      type: "svg",
      title: "Banks, households and the central bank",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flows of money between households, banks, firms and the central bank">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<rect x="210" y="12" width="180" height="50" rx="10" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
<text x="300" y="36" text-anchor="middle" font-size="16" font-weight="bold" fill="#4c1d95">CENTRAL BANK</text>
<text x="300" y="54" text-anchor="middle" font-size="14" fill="#1e293b">sets interest rates</text>
<rect x="210" y="110" width="180" height="60" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="136" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e3a8a">BANKS</text>
<text x="300" y="156" text-anchor="middle" font-size="14" fill="#1e293b">deposits and loans</text>
<rect x="20" y="215" width="170" height="55" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="105" y="240" text-anchor="middle" font-size="16" font-weight="bold" fill="#14532d">HOUSEHOLDS</text>
<text x="105" y="258" text-anchor="middle" font-size="14" fill="#1e293b">save</text>
<rect x="410" y="215" width="170" height="55" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="495" y="240" text-anchor="middle" font-size="16" font-weight="bold" fill="#78350f">FIRMS</text>
<text x="495" y="258" text-anchor="middle" font-size="14" fill="#1e293b">invest</text>
<line x1="300" y1="62" x2="300" y2="110" stroke="#6d28d9" stroke-width="3"/>
<line x1="150" y1="215" x2="240" y2="170" stroke="#15803d" stroke-width="3"/>
<text x="140" y="188" text-anchor="middle" font-size="14" font-weight="bold" fill="#15803d">deposits</text>
<line x1="360" y1="170" x2="450" y2="215" stroke="#b45309" stroke-width="3"/>
<text x="470" y="190" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">loans</text>
</svg>`,
      caption: "Savers' money finances firms' investment; the central bank regulates its cost."
    },
    {
      type: "quiz",
      title: "Quick check",
      questions: [
        { type: "mc", q: "What are the three functions of money?", options: ["Medium of exchange, unit of account, store of value", "Production, consumption, saving", "Price, demand, supply"], answer: 0, explain: "These are the classic functions of money." },
        { type: "tf", q: "The ECB is based in Frankfurt.", answer: true, explain: "It was set up in 1998 and is based in Frankfurt am Main." },
        { type: "mc", q: "If the central bank raises interest rates, usually…", options: ["Credit costs more and inflation tends to fall", "Credit costs less and inflation rises", "Nothing happens"], answer: 0, explain: "More expensive loans cool demand." }
      ]
    },
    {
      type: "text",
      title: "4. Inflation",
      html: `<p><b>Inflation</b> is a general and continuous rise in the price level; as a result the <b>purchasing power</b> of money falls: the same amount buys fewer goods. It is measured with the <b>consumer price index</b>, calculated in Italy by ISTAT (the national statistics institute) by observing the prices of a «basket» of goods and services bought by households (food, rent, transport, energy, etc.).</p>
<p>The <b>inflation rate</b> is the percentage change in the index between two periods:</p>
<p style="text-align:center"><b>rate = (P₁ − P₀) / P₀ × 100</b></p>
<p><b>Example</b>: if a sandwich cost 2.00 euros and a year later costs 2.10 euros, inflation is (2.10 − 2.00) / 2.00 = 0.05, that is <b>5%</b>.</p>
<p>The main <b>causes</b>:</p>
<ul>
<li><b>demand-pull inflation</b>: too much money and too much demand compared with the goods available («too much money chasing too few goods»);</li>
<li><b>cost-push inflation</b>: production costs (energy, raw materials, wages) rise and firms pass them on in their prices: this happened in 1973-74 with the oil crisis and in 2021-22 with the rise in energy prices, after the pandemic and the invasion of Ukraine;</li>
<li><b>expectations</b>: if everyone expects higher prices, they ask for higher wages and firms raise their prices, setting off a spiral.</li>
</ul>
<p>Effects: <b>borrowers</b> gain (they repay in money that is worth less), while <b>people with cash savings</b> and <b>people on fixed incomes</b> (pensioners, workers whose pay is not adjusted) lose out. Excessive inflation also makes it hard to plan. The extreme case is <b>hyperinflation</b>: in Weimar Germany in 1923 prices doubled within a few days, and by November one dollar was worth about 4.2 trillion marks: a lifetime's savings became worthless, and the social and political consequences were very serious.</p>
<p>The opposite phenomenon, <b>deflation</b> (prolonged falling prices), is not good at all: people put off purchases waiting for lower prices, the economy slows down and debts weigh more heavily. That is why central banks aim for low and stable inflation, not zero. <b>Stagflation</b> (the 1970s) is the combination of weak growth and high inflation.</p>`
    },
    {
      type: "example",
      title: "What is my salary really worth?",
      html: `<p>Marco earns 1,500 euros a month. After a year of 4% inflation his salary has not changed. Prices are on average 4% higher: to buy the same basket he would need 1,500 × 1.04 = <b>1,560 euros</b>. His <b>purchasing power</b> has fallen: 1,500 / 1.04 ≈ <b>1,442 euros</b> in «old» money. This is the difference between <b>nominal</b> income (how much he is paid) and <b>real</b> income (how much he can buy). If his salary had risen by 4%, his purchasing power would have stayed the same; if it had risen by 1%, he would still have lost about 3% in real terms.</p>`
    },
    {
      type: "text",
      title: "5. GDP: measuring a country's wealth",
      html: `<p><b>Gross domestic product</b> (<b>GDP</b>) is the <b>market value of all final goods and services produced within a country in a given period</b> (usually a year or a quarter). GDP is the most widely used indicator of the size of an economy. Every word counts:</p>
<ul>
<li><b>market value</b>: prices are added up, so that different things (apples and computers) can be compared;</li>
<li><b>final</b>: only goods sold to those who use them are counted, not intermediate goods (the wheat that becomes flour is already counted in the price of bread), to avoid double counting;</li>
<li><b>domestic</b>: what counts is production on the country's territory, regardless of the nationality of the producer (a foreign factory in Italy is part of Italian GDP);</li>
<li><b>gross</b>: without subtracting the depreciation of machinery.</li>
</ul>
<p>It can be calculated in three equivalent ways: <b>output</b> (the sum of the value added by all firms), <b>income</b> (the sum of incomes: wages, profits, rents) and <b>expenditure</b>. Using the expenditure approach:</p>
<p style="text-align:center"><b>GDP = C + I + G + (X − M)</b></p>
<ul>
<li><b>C</b>: household consumption;</li>
<li><b>I</b>: business investment (machinery, buildings);</li>
<li><b>G</b>: government spending on goods and services;</li>
<li><b>X − M</b>: exports minus imports (the trade balance with other countries).</li>
</ul>
<p><b>Nominal GDP</b> and <b>real GDP</b>: the first is measured at current prices, so it grows even if prices alone rise; the second is adjusted for inflation and measures the actual change in output. To compare different countries, <b>GDP per capita</b> is used (GDP divided by the population).</p>
<p>The GDP <b>growth rate</b> measures the percentage increase: if GDP goes from 1,800 to 1,854 billion, it grows by <b>3%</b> (54/1,800 = 0.03). When GDP falls for two consecutive quarters we conventionally speak of a <b>recession</b>; in Italy, in 2020 with the pandemic, GDP fell by about 9%.</p>`
    },
    {
      type: "example",
      title: "Let's calculate a GDP",
      html: `<p>In a small country: consumption <b>C = 1,200</b>, investment <b>I = 300</b>, government spending <b>G = 400</b>, exports <b>X = 350</b>, imports <b>M = 300</b> (billions).</p>
<p>GDP = C + I + G + (X − M) = 1,200 + 300 + 400 + (350 − 300) = <b>1,950 billion</b>.</p>
<p>If the population is 50 million, GDP per capita is 1,950,000 million / 50 million = <b>39,000 per inhabitant</b>. If the following year C rises to 1,260 and the other items stay the same, GDP becomes 2,010: growth is (2,010 − 1,950) / 1,950 ≈ <b>3.1%</b>.</p>`
    },
    {
      type: "widget",
      title: "The components of GDP",
      widget: "classify",
      options: {
        groups: ["Consumption (C)", "Investment (I)", "Government spending (G)", "Net exports"],
        items: [
          ["A family buys a fridge", 0],
          ["A firm buys a new machine", 1],
          ["The State builds a school", 2],
          ["An Italian company sells wine to Japan", 3],
          ["Going out to a restaurant", 0],
          ["A firm builds a new warehouse", 1],
          ["The town council pays the local police officers' wages", 2],
          ["An Italian company buys gas from abroad (subtracted)", 3]
        ]
      },
      caption: "Which item does each purchase belong to?"
    },
    {
      type: "text",
      title: "6. The limits of GDP",
      html: `<p>GDP is useful, but it does not measure everything. It is not an indicator of <b>well-being</b>. What does it leave out?</p>
<ul>
<li>unpaid <b>housework and care work</b> (cooking at home, looking after children, volunteering);</li>
<li>the <b>distribution</b> of income: two countries with the same GDP per capita can be one very equal and the other very unequal;</li>
<li>the <b>environment</b>: an environmental disaster can make GDP <i>rise</i> (the money spent on cleaning up), and the depletion of resources is not subtracted;</li>
<li>the <b>shadow</b> and illegal <b>economy</b> (undeclared work), although some estimates include it;</li>
<li><b>quality of life</b>: health, education, free time, happiness, the quality of relationships.</li>
</ul>
<p><b>Simon Kuznets</b>, who developed the calculation for the United States in the 1930s, already warned that «the welfare of a nation can scarcely be inferred from a measurement of national income». And in 1968 Senator <b>Robert Kennedy</b> said that GDP «measures everything, in short, except that which makes life worthwhile».</p>
<p>That is why other indicators have been created:</p>
<ul>
<li>the <b>Human Development Index</b> (HDI), introduced by the UN (UNDP) in 1990 thanks to the economists <b>Mahbub ul Haq</b> and <b>Amartya Sen</b>: it combines income, education and life expectancy;</li>
<li>in Italy, the <b>BES</b> (<i>Benessere equo e sostenibile</i>, «equitable and sustainable well-being»), developed by ISTAT, which considers work, health, environment, safety and relationships;</li>
<li>the <b>Sustainable Development Goals</b> of the UN's 2030 Agenda (17 goals, 2015).</li>
</ul>
<p>Another indicator, this time of financial sustainability, is the <b>public debt-to-GDP ratio</b>: it compares the debt accumulated by the State with the wealth produced in one year. In the Maastricht Treaty the reference threshold is 60%, and the annual deficit should not exceed 3% of GDP; Italy, with a ratio well above 100%, is among the most indebted countries in the EU.</p>`
    },
    {
      type: "decision",
      title: "Raise rates or protect growth?",
      html: `<p>You sit on the central bank's governing council. Inflation is at 9%, well above the 2% target, because energy and food prices have risen. But the economy is weak: firms are struggling and unemployment could rise. If you raise rates, credit costs more and inflation falls, but you risk slowing down the economy. If you do not, inflation may become entrenched.</p>`,
      question: "What do you do?",
      options: [
        { label: "I do nothing: the inflation is temporary", outcome: "If expectations stay anchored, inflation may come down by itself. But if wages and prices chase inflation, it takes root and a tougher squeeze will be needed later." },
        { label: "I raise rates gradually", outcome: "This is the path the ECB followed in 2022-23: it costs a slowdown in the economy, but it protects confidence in purchasing power and brings inflation back towards 2%." },
        { label: "I raise rates suddenly and sharply", outcome: "It would cool inflation quickly, but it could cause a recession, business failures and difficulties for people with variable-rate mortgages." }
      ],
      answer: 1,
      explain: "Central banks must balance two opposite risks: too much inflation and too little growth. In 2022-2023 the ECB chose a series of rate rises, after years of rates close to zero, to bring inflation back towards 2%; it worked, at a cost for mortgages and investment. There is no choice without costs: every monetary policy is a compromise."
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li>Money: <b>medium of exchange, unit of account, store of value</b>; today it is based on trust.</li>
<li>Banks collect savings and make loans (fractional reserve); EU deposits are guaranteed up to 100,000 euros.</li>
<li><b>ECB</b> (Frankfurt, 1998): goal of <b>price stability</b>, inflation at 2% over the medium term. Raising rates = curbing inflation.</li>
<li><b>Inflation</b> = a general rise in prices; it reduces purchasing power. Rate = (P₁ − P₀)/P₀.</li>
<li><b>GDP</b> = value of the final goods and services produced in a country in a period = C + I + G + (X − M).</li>
<li>GDP <b>does not measure well-being</b>: the HDI, BES and other indicators complement it.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand money, inflation and GDP",
      intro: "Abstract concepts? Try these analogies.",
      tabs: [
        {
          label: "🍕 The cake and the slices",
          html: `<p><b>GDP</b> is the <b>cake</b> a country bakes in a year. Inflation is like its price tag: if the cake stays the same but prices rise, nominal GDP grows without there being any more cake. <b>Real GDP</b> tells you whether the cake has really got bigger. <b>Distribution</b> tells you who eats the slices: two countries with the same cake can have very different slices.</p>`
        },
        {
          label: "🏝️ An island that uses shells",
          html: `<p>On an island the inhabitants use shells as money. If one day someone discovers a huge pile of them and hands them out by the fistful, each shell is worth less: prices, expressed in shells, go up. This is <b>inflation caused by too much money</b>. If the island's central bank takes shells out of circulation, prices fall. That is why the quantity of money cannot be decided at will.</p>`
        },
        {
          label: "🌡️ The thermostat",
          html: `<p>The central bank is like a <b>thermostat</b>: the economy is the room and inflation is the temperature. If the room is too hot (high inflation), the thermostat raises rates to cool it down; if it is too cold (recession), it lowers them to warm it up. But the thermostat reacts with a delay, and so it can slightly overshoot.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: money and GDP",
      nodes: [
        { id: "moneta", label: "Money", x: 15, y: 10, color: "#2563eb", html: "Medium of exchange, unit of account, store of value.", why: "It was born to overcome the limits of barter. Today it is «fiat» money: it has value because others accept it and because a central bank and a State guarantee it." },
        { id: "banche", label: "Banks", x: 50, y: 10, color: "#16a34a", html: "They collect savings and make loans.", why: "They turn savings into investment, but with fractional reserves they also create money and remain exposed to the risk of bank runs: hence supervision and deposit guarantees." },
        { id: "bce", label: "ECB", x: 85, y: 10, color: "#a855f7", html: "Central bank of the euro area: price stability.", why: "After the experience of inflation in the 1970s it was decided to entrust money to a bank independent of governments, with a clear goal: 2% inflation over the medium term." },
        { id: "infl", label: "Inflation", x: 30, y: 52, color: "#dc2626", html: "A general rise in prices, loss of purchasing power.", why: "It can arise from excessive demand, higher costs or expectations. The central bank's interest rates are the main lever for fighting it." },
        { id: "pil", label: "GDP", x: 70, y: 52, color: "#f59e0b", html: "Value of the final goods and services produced in a year: C + I + G + (X − M).", why: "It became established after the 1929 crisis and the Second World War, because governments needed a measure to guide economic policy. It has limits: it does not measure well-being, the environment or distribution." },
        { id: "ben", label: "Well-being", x: 50, y: 88, color: "#0891b2", html: "HDI, BES, 2030 Agenda: beyond GDP.", why: "Economists such as Sen have shown that wealth and well-being are not the same thing: wealth is a means, not an end. That is why indicators of health, education and the environment are used alongside GDP." }
      ],
      edges: [["moneta", "banche", "is created by"], ["banche", "bce", "supervised by"], ["bce", "infl", "fights"], ["infl", "pil", "is stripped out of real"], ["pil", "ben", "is complemented by"]]
    },
    {
      type: "curiosity",
      title: "The 100-trillion-dollar banknote",
      html: `<p>At the beginning of 2009 Zimbabwe, because of terrifying hyperinflation, issued banknotes worth <b>100 trillion Zimbabwean dollars</b>, which could buy very little. In that same year, 2009, the country abandoned its own currency and adopted US dollars and other foreign currencies. It is an extreme example of how a currency that no one trusts loses all its value.</p>`
    },
    {
      type: "curiosity",
      title: "What is ISTAT's «basket»?",
      html: `<p>Every year ISTAT updates the <b>basket</b> it uses to calculate inflation: new products are added to the list (today, for example, online subscription services) and those that have disappeared are removed (such as old camera films). Every month thousands of price collectors gather prices in hundreds of towns, and today a lot of the data comes from electronic receipts and supermarket websites. That is why official inflation can differ from the inflation we «feel»: it depends on the goods each of us buys.</p>`
    },
    {
      type: "quiz",
      title: "Second check",
      questions: [
        { type: "mc", q: "What does GDP measure?", options: ["The value of the final goods and services produced in a country in a period", "The wealth accumulated by citizens", "The State's debt"], answer: 0, explain: "It is a flow (production over a period), not a stock of wealth." },
        { type: "num", q: "If a product costs 50 euros and a year later 52 euros, what is the inflation rate as a percentage?", answer: 4, tol: 0, unit: "%", explain: "(52 − 50) / 50 = 0.04 → 4%." },
        { type: "tf", q: "A higher GDP per capita always means greater well-being for everyone.", answer: false, explain: "GDP per capita says nothing about the distribution of income, nor about health, the environment or quality of life." }
      ]
    }
  ],
  glossary: [
    { t: "Money", d: "A generally accepted medium of exchange, unit of account and store of value." },
    { t: "Fiat money", d: "Money whose value is based on trust and not on a precious metal." },
    { t: "Central bank", d: "Institution that issues money and conducts monetary policy." },
    { t: "ECB", d: "European Central Bank, based in Frankfurt, responsible for monetary policy in the euro area." },
    { t: "Interest rate", d: "The price of money: the percentage paid to borrow a sum." },
    { t: "Inflation", d: "A general and continuous rise in prices." },
    { t: "Deflation", d: "A general and prolonged fall in prices." },
    { t: "Purchasing power", d: "The quantity of goods that can be bought with a sum of money." },
    { t: "GDP", d: "Gross domestic product: the value of the final goods and services produced in a country in a period." },
    { t: "Real GDP", d: "GDP adjusted for the effect of inflation." },
    { t: "Recession", d: "A period of prolonged decline in GDP, usually two consecutive quarters." },
    { t: "HDI", d: "Human Development Index, which combines income, education and life expectancy." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is the ECB's main goal?", options: ["Maintaining price stability", "Financing the States", "Increasing GDP at any cost"], answer: 0, explain: "With 2% inflation over the medium term." },
      { type: "tf", q: "Inflation reduces the purchasing power of money.", answer: true, explain: "The same amount buys fewer goods." },
      { type: "num", q: "If C = 500, I = 100, G = 150, X = 80, M = 60, what is GDP?", answer: 770, tol: 0, explain: "500 + 100 + 150 + (80 − 60) = 770." },
      { type: "mc", q: "Which of these is NOT a typical function of money?", options: ["Producing goods", "Medium of exchange", "Unit of account"], answer: 0, explain: "Money does not produce goods: it is used to exchange them and measure their value." },
      { type: "text", q: "What is the UN indicator that combines income, education and life expectancy called?", answer: ["human development index", "the human development index", "hdi", "the hdi"], explain: "Introduced in 1990 by the UNDP." },
      { type: "mc", q: "What usually happens if the central bank raises rates?", options: ["Credit costs more and inflation slows down", "Credit costs less", "The quantity of money increases"], answer: 0, explain: "More expensive loans reduce demand." },
      { type: "order", q: "Put these in chronological order.", items: ["First coins in Lydia", "Banknotes in China", "Bretton Woods", "Founding of the ECB", "Euro cash"], explain: "7th century BC, 10th-11th century, 1944, 1998, 2002." },
      { type: "mc", q: "Why are only final goods counted in GDP?", options: ["To avoid double counting", "Because intermediate goods are illegal", "Because they have no value"], answer: 0, explain: "The value of intermediate goods is already included in the price of the final good." },
      { type: "tf", q: "Nominal GDP measures the real growth of output.", answer: false, explain: "Nominal GDP is at current prices, so it includes the effect of inflation; real GDP removes it." },
      { type: "mc", q: "What limit does GDP have as a measure of well-being?", options: ["It does not take into account distribution, housework or the environment", "It does not include consumption", "It does not include firms"], answer: 0, explain: "That is why indicators such as the HDI and BES are also used." }
    ]
  }
});
