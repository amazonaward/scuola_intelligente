TOPIC('en', {
  id: "l2-dir-mercato",
  title: "Markets and prices",
  intro: "Why do concert tickets cost more when they sell out in a few minutes? Why does the price of strawberries fall in spring? Why can a single operator of a railway network charge different fares from those of many competing shops? Behind every price there is a meeting between those who want to buy and those who want to sell. In this lesson, after the needs and economic systems you studied last year, you will learn to read the <b>market</b>: <b>demand</b> and <b>supply</b>, the <b>equilibrium price</b>, the different types of <b>competition</b> and the role of the State when the market does not work.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What a market is",
      html: `<p>A <b>market</b> is the place, physical or virtual, where the <b>demand</b> for and <b>supply</b> of a good or service meet and a <b>price</b> is set. It can be the local street market, an online shop, a stock exchange, a classified ads website. There is not just one market: there are many, one for each good (the market for used cars, the market for rented homes, the labour market).</p>
<p>In a market economy the market has a fundamental function: it <b>coordinates millions of individual decisions</b> without anyone planning them. <b>Adam Smith</b>, in <i>The Wealth of Nations</i> (1776), observed that the baker does not bake bread out of kindness but out of self-interest; and yet everyone gets bread. He spoke of an «<b>invisible hand</b>» that, through prices, directs resources towards the uses people want most. This does not mean, however, that the market always works well on its own: we will look at its limits.</p>
<p>The main players are:</p>
<ul>
<li><b>consumers</b> (households), who demand goods to satisfy their needs;</li>
<li><b>firms</b>, which produce and supply goods and services to make a profit;</li>
<li>the <b>State</b>, which sets the rules and steps in when necessary.</li>
</ul>`
    },
    {
      type: "text",
      title: "2. Demand",
      html: `<p>The <b>demand</b> for a good is the quantity that consumers are willing and able to buy at a certain price, in a certain period. Wanting something is not enough: you also have to be able to pay (<i>demand</i> ≠ mere desire).</p>
<p>The <b>law of demand</b> states that, other things being equal (<i>ceteris paribus</i>), <b>if the price rises, the quantity demanded falls</b>, and vice versa. If an ice cream goes from 2 to 4 euros, you buy fewer. On a graph the demand curve has a <b>negative</b> slope: it goes down from left to right.</p>
<p>Price is not the only factor. The curve <b>shifts</b> when other conditions change:</p>
<ul>
<li>consumers' <b>income</b>: for <b>normal</b> goods demand rises when income rises; for <b>inferior</b> goods (such as low-quality products) it may fall;</li>
<li><b>tastes</b> and fashions (the demand for a certain smartphone after an advertising campaign);</li>
<li>the prices of <b>substitute goods</b> (if butter costs more, the demand for margarine rises) and of <b>complementary goods</b> (if the price of cars rises, the demand for petrol falls);</li>
<li><b>expectations</b> (if prices are expected to rise, people buy earlier) and the number of consumers.</li>
</ul>
<p>Note the difference: a <b>change in price</b> causes a movement <i>along</i> the curve; a change in income or tastes <i>shifts the whole curve</i>.</p>`
    },
    {
      type: "text",
      title: "3. Supply",
      html: `<p><b>Supply</b> is the quantity of a good that firms are willing to sell at a certain price. The <b>law of supply</b> states that, other things being equal, <b>if the price rises, the quantity supplied rises</b>: a higher price makes production more worthwhile. The supply curve has a <b>positive</b> slope.</p>
<p>It shifts when these change:</p>
<ul>
<li><b>production costs</b> (raw materials, energy, wages): if they rise, firms produce less at the same price;</li>
<li><b>technology</b>: a more efficient machine reduces costs and increases supply;</li>
<li>the <b>number of firms</b> in the market;</li>
<li><b>taxes and subsidies</b>, and natural conditions (a bad harvest reduces the supply of wheat).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Demand, supply and equilibrium",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demand and supply graph with equilibrium point">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="80" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2"/>
<line x1="80" y1="260" x2="80" y2="20" stroke="#334155" stroke-width="2"/>
<text x="560" y="266" text-anchor="end" font-size="14" fill="#334155">Quantity</text>
<text x="92" y="30" font-size="14" fill="#334155">Price</text>
<line x1="110" y1="50" x2="500" y2="230" stroke="#1d4ed8" stroke-width="4"/>
<text x="500" y="250" text-anchor="end" font-size="15" font-weight="bold" fill="#1d4ed8">Demand</text>
<line x1="110" y1="230" x2="500" y2="50" stroke="#dc2626" stroke-width="4"/>
<text x="500" y="44" text-anchor="end" font-size="15" font-weight="bold" fill="#dc2626">Supply</text>
<circle cx="305" cy="140" r="9" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
<line x1="80" y1="140" x2="305" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="305" y1="140" x2="305" y2="260" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/>
<text x="330" y="132" font-size="15" font-weight="bold" fill="#14532d">Equilibrium</text>
<text x="70" y="146" text-anchor="end" font-size="14" fill="#14532d">P*</text>
<text x="305" y="280" text-anchor="middle" font-size="14" fill="#14532d">Q*</text>
</svg>`,
      caption: "Where the two curves meet, you find the equilibrium price."
    },
    {
      type: "text",
      title: "4. The equilibrium price",
      html: `<p>The <b>equilibrium price</b> is the price at which the quantity demanded <b>equals</b> the quantity supplied: everything produced is sold, and anyone who wants to buy at that price finds the good. If the price is different, the market corrects itself:</p>
<ul>
<li>if the price is <b>too high</b>, supply exceeds demand: there is a <b>surplus</b> (unsold goods). Sellers lower their prices to get rid of the goods, and the price falls towards equilibrium;</li>
<li>if the price is <b>too low</b>, demand exceeds supply: there is a <b>shortage</b>. Buyers compete with each other, sellers can raise prices, and the price rises.</li>
</ul>
<p>When <b>demand increases</b> (the curve shifts right) the equilibrium moves towards <b>higher prices and quantities</b>; when <b>supply decreases</b> (the curve shifts left) the price rises and the quantity falls. This is what happens to the prices of out-of-season fruit, of tickets for big events, and of fuel when oil production falls.</p>`
    },
    {
      type: "example",
      title: "Let's calculate an equilibrium",
      html: `<p>In a market for T-shirts demand is <b>Qd = 100 − 2P</b> and supply is <b>Qs = 20 + 2P</b> (P in euros, Q in thousands of items).</p>
<p><b>Equilibrium</b>: Qd = Qs → 100 − 2P = 20 + 2P → 80 = 4P → <b>P = 20 euros</b>. Quantity: Q = 100 − 40 = <b>60</b> (thousand).</p>
<p>If the price were 30: Qd = 100 − 60 = 40, Qs = 20 + 60 = 80 → <b>surplus of 40</b>: sellers cut prices. If it were 10: Qd = 100 − 20 = 80, Qs = 20 + 20 = 40 → <b>shortage of 40</b>: buyers push the price up. In both cases the market returns to 20.</p>`
    },
    {
      type: "quiz",
      title: "Quick check",
      questions: [
        { type: "mc", q: "If the price of a good is above the equilibrium price, what happens?", options: ["Supply exceeds demand: there is a surplus and the price tends to fall", "Demand exceeds supply and the price rises", "Nothing happens"], answer: 0, explain: "Firms do not sell everything and lower their prices." },
        { type: "tf", q: "A rise in consumers' income shifts the demand curve for a normal good to the right.", answer: true, explain: "At every price, consumers buy more of it." },
        { type: "num", q: "With Qd = 100 − 2P and Qs = 20 + 2P, what is the equilibrium price (in euros)?", answer: 20, tol: 0, unit: "euros", explain: "100 − 2P = 20 + 2P → 4P = 80 → P = 20." }
      ]
    },
    {
      type: "text",
      title: "5. Elasticity: how much does demand react?",
      html: `<p>Not all goods react to price in the same way. The <b>price elasticity of demand</b> measures by how much, in percentage terms, the quantity demanded changes when the price changes by 1%:</p>
<p style="text-align:center"><b>E = (% change in quantity) / (% change in price)</b></p>
<ul>
<li><b>Elastic demand</b> (|E| &gt; 1): quantity reacts strongly to price. This happens with luxury goods, goods that are easy to replace or not necessary (a holiday, an ice cream of a particular brand).</li>
<li><b>Inelastic demand</b> (|E| &lt; 1): quantity changes little. This happens with necessary goods that have no substitutes, such as salt, life-saving medicines, petrol in the short term.</li>
</ul>
<p>Why does it matter? A firm that raises the price of an <b>inelastic</b> good sees its revenue increase (it loses few customers); if the good is <b>elastic</b>, it risks losing revenue. The State takes this into account too: it prefers to tax goods with inelastic demand (fuel, tobacco), because tax revenue stays stable.</p>
<p><b>Example</b>: if the price of a ticket rises by 10% and sales fall by 20%, E = −20/10 = −2: elastic demand.</p>`
    },
    {
      type: "text",
      title: "6. Market structures: competition and monopoly",
      html: `<p>The way the price is formed depends on <b>how many firms</b> there are and <b>how much power</b> they have. The main structures are:</p>
<ul>
<li><b>Perfect competition</b>: a great many sellers and buyers, identical goods, complete information, freedom to enter and leave the market. No one can influence the price alone: each is a «price taker». It is a theoretical model, approximated by some agricultural markets and by stock exchanges.</li>
<li><b>Monopolistic competition</b>: many firms, but the products are <b>differentiated</b> (brand, quality, design), so each firm has some power over its own price. Think of restaurants, clothes, hairdressers.</li>
<li><b>Oligopoly</b>: a few large sellers who influence each other (phone companies, car makers, banks, airlines). The risk is a <b>cartel</b>, that is a secret agreement to fix prices or share out markets, which is <b>forbidden</b> by law.</li>
<li><b>Monopoly</b>: a single seller, with no close substitutes, and barriers to entry. It can set a higher price and produce less than a competitive market would, to the detriment of consumers. There is also <b>natural monopoly</b>, when the costs of the network are so high that a single firm serves the market more efficiently (water supply, electricity grids, railways): in these cases the State regulates it or runs it directly.</li>
<li><b>Monopsony</b>: a single buyer (such as one large factory that employs all the workers in an area).</li>
</ul>
<p>Competition is good for consumers: it pushes firms to lower prices, improve quality and innovate. That is why the State protects it.</p>`
    },
    {
      type: "widget",
      title: "Which market structure is it?",
      widget: "classify",
      options: {
        groups: ["Competition (many firms)", "Oligopoly", "Monopoly"],
        items: [
          ["A local street market with lots of fruit stalls", 0],
          ["Three large national phone companies", 1],
          ["A city's single water network", 2],
          ["The stalls at a flea market", 0],
          ["A few oil companies that set prices", 1],
          ["The only railway on an isolated line", 2],
          ["Lots of restaurants with different menus", 0],
          ["Two makers of large commercial aircraft", 1]
        ]
      },
      caption: "Classify each situation according to the number of sellers."
    },
    {
      type: "text",
      title: "7. When the market fails and the State steps in",
      html: `<p>The market is very effective, but not perfect. Economists speak of <b>market failures</b> when market prices do not lead to a result that is desirable for society as a whole:</p>
<ul>
<li><b>Positions of power</b>: monopolies and cartels. In Italy <b>Law no. 287 of 1990</b> forbids anti-competitive agreements and abuses of a dominant position and set up the <b>Italian Competition Authority</b> (AGCM, known as the Antitrust Authority). In Europe the same aim is pursued by Articles 101 and 102 of the Treaty on the Functioning of the EU. The model originated in the United States with the <b>Sherman Act</b> of 1890.</li>
<li><b>Externalities</b>: costs or benefits that fall on third parties without passing through the price. Pollution is a <b>negative externality</b> (the factory does not pay for the damage to the environment); a vaccine is a <b>positive externality</b> (it also protects people who have not had it). The State steps in with taxes, bans and incentives.</li>
<li><b>Public goods</b>: such as street lighting or national defence, from which no one can be excluded: no one has an incentive to pay, so the market does not provide them on its own (the «free rider» problem).</li>
<li><b>Asymmetric information</b>: the seller knows more than the buyer (used cars, health services): the State imposes transparency rules.</li>
<li><b>Inequality</b>: the market does not in itself guarantee a fair distribution of income; the State steps in with progressive taxes (Art. 53 of the Constitution) and public services.</li>
</ul>
<p>The State can also influence prices directly with a <b>maximum price</b> (a price cap, for example on an essential good) or a <b>minimum price</b> (such as a guaranteed minimum price for farmers or a minimum wage). But be careful: a maximum price below equilibrium causes <b>shortages</b> and a black market; a minimum price above equilibrium causes <b>surpluses</b> and, if it concerns labour, unemployment. Policies must therefore be designed carefully: no intervention is free of costs.</p>
<p>The Italian Constitution protects <b>private economic initiative</b> (Art. 41: «is free»), but states that it may not be carried out in conflict with social utility or in a way that harms safety, freedom and human dignity, and that the law sets out programmes and controls for it. This is a model of <b>social market economy</b>.</p>`
    },
    {
      type: "svg",
      title: "What happens to prices?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Surplus and shortage compared with the equilibrium price">
<rect x="0" y="0" width="600" height="300" fill="#f8fafc"/>
<line x1="70" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2"/>
<line x1="70" y1="260" x2="70" y2="20" stroke="#334155" stroke-width="2"/>
<line x1="100" y1="40" x2="500" y2="230" stroke="#1d4ed8" stroke-width="4"/>
<text x="500" y="250" text-anchor="end" font-size="15" font-weight="bold" fill="#1d4ed8">Demand</text>
<line x1="100" y1="230" x2="500" y2="40" stroke="#dc2626" stroke-width="4"/>
<text x="500" y="34" text-anchor="end" font-size="15" font-weight="bold" fill="#dc2626">Supply</text>
<line x1="70" y1="85" x2="520" y2="85" stroke="#b45309" stroke-width="2" stroke-dasharray="7 5"/>
<text x="76" y="77" font-size="14" font-weight="bold" fill="#b45309">Price too high: surplus</text>
<line x1="70" y1="195" x2="520" y2="195" stroke="#7c3aed" stroke-width="2" stroke-dasharray="7 5"/>
<text x="76" y="187" font-size="14" font-weight="bold" fill="#6d28d9">Price too low: shortage</text>
<circle cx="300" cy="135" r="8" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
<text x="318" y="140" font-size="14" font-weight="bold" fill="#14532d">Equilibrium</text>
</svg>`,
      caption: "Above equilibrium there are unsold goods, below it there is a shortage: the price moves towards equilibrium."
    },
    {
      type: "example",
      title: "Concert tickets",
      html: `<p>A much-loved artist announces a concert in a stadium with 50,000 seats. The 60-euro tickets sell out in a few minutes: at that price <b>demand exceeds supply</b> (a shortage). Meanwhile online resellers offer the same tickets for 300 euros: the «secondary» market reveals the real equilibrium price. The organisers could raise prices (but would risk a backlash), add more dates (increasing supply) or restrict resale (by law). This is how demand, supply and possible State intervention come together in a real case.</p>`
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Demand</b>: the higher the price, the less people buy (downward-sloping curve). <b>Supply</b>: the higher the price, the more is offered (upward-sloping curve).</li>
<li><b>Equilibrium</b>: Qd = Qs. Above it → surplus, below it → shortage; the market readjusts.</li>
<li>Change in price = movement <i>along</i> the curve; other factors = <i>shift</i> of the curve.</li>
<li><b>Elasticity</b> = % change in quantity / % change in price.</li>
<li>Market structures: perfect competition, monopolistic competition, oligopoly, monopoly.</li>
<li>Market failures: monopolies, externalities, public goods, asymmetric information. The State steps in (antitrust, regulation, taxes).</li>
</ul>`
    },
    {
      type: "decision",
      title: "The price of bread: a cap or the market?",
      html: `<p>In a town it rains for weeks and the wheat harvest is halved: bread costs twice as much. Many families can no longer afford it. You are the mayor and you are considering two options: impose by law a <b>maximum price</b> equal to the old one, or let the market adjust.</p>`,
      question: "What do you decide?",
      options: [
        { label: "I impose a maximum price equal to the old price", outcome: "On paper bread becomes affordable again, but bakers, facing higher costs, produce less or close down: bread becomes scarce, queues and a black market appear. The price has not disappeared: it has moved elsewhere." },
        { label: "I leave the market free and do nothing", outcome: "The high price encourages people to import wheat and reduce waste, but the poorest families risk not being able to buy bread: the market does not take fairness into account." },
        { label: "I leave the price free and help families in difficulty with a subsidy", outcome: "The price keeps signalling the shortage (and encouraging new supplies), while the subsidy protects those who cannot afford bread." }
      ],
      answer: 2,
      explain: "Many economists prefer to support poor people's incomes without distorting prices: the price carries the information that wheat is scarce. A price cap, however, has been used in emergencies and can be justified for short periods, especially if accompanied by measures that increase supply."
    },
    {
      type: "alternatives",
      title: "Other ways to understand the market",
      intro: "The market can also be understood through everyday experiences.",
      tabs: [
        {
          label: "🛒 The school book sale",
          html: `<p>Imagine a second-hand book sale. If everyone is selling the same book for 20 euros and nobody buys, someone cuts the price to 15 and then to 12: the price falls until someone buys. If instead everyone wants that book and there is only one copy, buyers offer more, up to 30 euros. Nobody planned the price, but the meeting between sellers and buyers determined it.</p>`
        },
        {
          label: "🔨 The auction",
          html: `<p>An <b>auction</b> is a market in miniature: one good and many buyers; the price rises until only one bidder is left. The final price is the one the second-to-last bidder is no longer willing to beat. In «Dutch» (descending) auctions, used for example at the Aalsmeer flower market in the Netherlands, the auctioneer starts from a high price and lowers it until someone accepts.</p>`
        },
        {
          label: "📉 The supply game",
          html: `<p>Think of a flight booking website. When there are only a few seats left, the price rises (supply shrinking relative to demand); when the flight is half empty, the price falls. «Dynamic pricing» is the real-time version of the law of supply and demand: algorithms keep recalculating the equilibrium.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: the market",
      nodes: [
        { id: "mercato", label: "Market", x: 50, y: 6, color: "#2563eb", html: "The meeting between buyers and sellers that gives rise to the price.", why: "The market makes it possible to coordinate millions of choices without a planner. Adam Smith (1776) explained it with the «invisible hand»; Alfred Marshall (1890) with the graph of demand and supply curves." },
        { id: "dom", label: "Demand", x: 15, y: 35, color: "#16a34a", html: "The quantity consumers want to buy and can afford.", why: "It falls as the price rises because each extra purchase gives less satisfaction (diminishing marginal utility) and because substitutes exist." },
        { id: "off", label: "Supply", x: 85, y: 35, color: "#dc2626", html: "The quantity firms want to sell.", why: "It rises with the price because producing more costs more and more (rising marginal costs): higher prices are needed to justify the extra production." },
        { id: "eq", label: "Equilibrium", x: 50, y: 40, color: "#f59e0b", html: "The price at which Qd = Qs.", why: "It is a point the market tends towards, because surpluses and shortages push prices and quantities to correct themselves: it is a self-regulating mechanism." },
        { id: "forme", label: "Market structures", x: 25, y: 78, color: "#a855f7", html: "Competition, oligopoly, monopoly.", why: "Market power depends on the number of firms and on barriers to entry. The more concentrated it is, the smaller the advantage for consumers." },
        { id: "stato", label: "State intervention", x: 75, y: 78, color: "#0891b2", html: "Antitrust, regulation, taxes, public goods.", why: "Since the market fails when there are monopolies, externalities and public goods, the State is called on to correct it, as Article 41 of the Constitution provides and as history showed after the 1929 crisis." }
      ],
      edges: [["mercato", "dom", "has"], ["mercato", "off", "has"], ["dom", "eq", "meets"], ["off", "eq", "meets"], ["mercato", "forme", "takes the form of"], ["forme", "stato", "requires"]]
    },
    {
      type: "curiosity",
      title: "The most expensive tulip bulb in history",
      html: `<p>In the 17th-century Netherlands, around 1636-37, tulip bulbs reached extremely high prices: some rare specimens cost as much as a town house. Then, in February 1637, prices collapsed. It is one of the most famous examples of a <b>speculative bubble</b>: prices rise because people expect them to rise further, until confidence vanishes. It shows that prices depend not only on usefulness, but also on expectations.</p>`
    },
    {
      type: "curiosity",
      title: "The water and diamonds paradox",
      html: `<p>Water is essential to life but costs very little; diamonds are not needed to survive but cost a great deal. Adam Smith noticed this, distinguishing between a good's «value in use» and its «value in exchange»: the price does not depend on total usefulness. Today economists explain the paradox with <b>marginal utility</b> and <b>scarcity</b>: the last litre of water is worth little because there is plenty of it, while the last diamond is worth a lot because diamonds are rare. In a desert, though, a glass of water would be worth far more than a diamond.</p>`
    },
    {
      type: "quiz",
      title: "Second check",
      questions: [
        { type: "mc", q: "In a monopoly, compared with competition, usually…", options: ["The price is higher and the quantity produced is lower", "The price is lower", "The price is the same"], answer: 0, explain: "With no competitors, the monopolist can limit supply and set higher prices." },
        { type: "tf", q: "A cartel between firms to fix prices is forbidden by law.", answer: true, explain: "Law 287/1990 and Articles 101-102 TFEU forbid agreements that restrict competition." },
        { type: "mc", q: "A negative externality is…", options: ["A cost that falls on third parties without passing through the price (for example pollution)", "A very low price", "A tax on imports"], answer: 0, explain: "It is a market failure: the producer does not pay the full cost it generates." }
      ]
    }
  ],
  glossary: [
    { t: "Market", d: "Place (real or virtual) where the demand for and supply of a good meet and a price is formed." },
    { t: "Demand", d: "The quantity of a good that consumers are willing and able to buy at a certain price." },
    { t: "Supply", d: "The quantity of a good that firms are willing to sell at a certain price." },
    { t: "Equilibrium price", d: "The price at which the quantity demanded equals the quantity supplied." },
    { t: "Elasticity", d: "A measure of how sensitive the quantity demanded is to changes in price." },
    { t: "Substitute good", d: "A good that can take the place of another (butter and margarine)." },
    { t: "Complementary good", d: "A good used together with another (cars and petrol)." },
    { t: "Perfect competition", d: "A market with a great many sellers and buyers, none of whom can influence the price." },
    { t: "Oligopoly", d: "A market dominated by a few large sellers." },
    { t: "Monopoly", d: "A market with a single seller." },
    { t: "Cartel", d: "An agreement between firms to fix prices or share out the market, forbidden by law." },
    { t: "Externality", d: "A cost or benefit that falls on third parties without passing through the market price." },
    { t: "Antitrust", d: "The authority that oversees competition and markets; in Italy the AGCM." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What does the law of demand state?", options: ["If the price rises, the quantity demanded falls", "If the price rises, the quantity demanded rises", "Price does not affect demand"], answer: 0, explain: "Other things being equal, the demand curve slopes downwards." },
      { type: "tf", q: "The supply curve slopes upwards.", answer: true, explain: "At higher prices firms are willing to produce more." },
      { type: "num", q: "With Qd = 100 − 2P and Qs = 20 + 2P, what is the equilibrium quantity?", answer: 60, tol: 0, explain: "P = 20, so Q = 100 − 40 = 60." },
      { type: "mc", q: "If the price of a substitute good rises, the demand for the other good…", options: ["Rises", "Falls", "Does not change"], answer: 0, explain: "If butter costs more, people buy more margarine." },
      { type: "mc", q: "A good with inelastic demand is…", options: ["A good whose quantity demanded changes little when the price changes", "A good in great demand", "A luxury good"], answer: 0, explain: "Like life-saving medicines or salt." },
      { type: "text", q: "What is a market with only one seller called?", answer: ["monopoly", "a monopoly"], explain: "The monopolist can set a higher price than under competition." },
      { type: "mc", q: "Who oversees competition in Italy?", options: ["The Italian Competition Authority (AGCM)", "The Court of Audit", "The CSM"], answer: 0, explain: "It was set up by Law 287/1990." },
      { type: "order", q: "Put in order: what happens if the price is above equilibrium?", items: ["The price is too high", "Supply exceeds demand", "Firms have unsold goods", "The price falls towards equilibrium"], explain: "The market regulates itself." },
      { type: "tf", q: "Article 41 of the Constitution declares private economic initiative free, but it may not conflict with social utility.", answer: true, explain: "It is the basis of Italy's social market economy." },
      { type: "mc", q: "Which of these is an example of a public good?", options: ["National defence", "A pizza", "A phone"], answer: 0, explain: "No one can be excluded from the benefit." }
    ]
  }
});
