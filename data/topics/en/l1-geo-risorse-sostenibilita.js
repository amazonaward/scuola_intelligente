TOPIC('en', {
  id: "l1-geo-risorse-sostenibilita",
  title: "Resources and sustainable development",
  intro: "Water to drink, energy to switch on the light, food on the plate: these are the three resources on which every person's life depends. But they are unevenly distributed and consumed at a pace the planet struggles to sustain. In this lesson we look at where they are, who uses them, what problems they create and how the <b>2030 Agenda</b> proposes to reconcile development, justice and the environment.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. What a resource is",
      html: `<p>A <b>resource</b> is any element of nature that human beings use to meet their needs. There are two broad categories:</p>
<ul>
<li><b>Renewable resources</b>: they regenerate quickly compared with how fast we consume them, if used in moderation. Fresh water, wood, fertile soil, wind, sunlight, fish. Careful: renewable does not mean infinite. A forest cut down faster than it grows back, or an overfished fish stock, will run out.</li>
<li><b>Non-renewable resources</b>: they formed over millions of years and do not replenish on a human timescale. Oil, natural gas, coal, minerals (iron, copper, lithium, rare earths).</li>
</ul>
<p>Every resource has a <b>geographical distribution</b> that doesn't match that of the population: oil is concentrated in the Persian Gulf, Russia, North America and Venezuela; fresh water is abundant in Canada, Brazil and Russia but scarce in the Middle East and the Sahel; lithium is found in the Chile-Argentina-Bolivia \"triangle\" and in Australia; more than two thirds of cobalt is in the Democratic Republic of the Congo. These differences give rise to trade, dependence, conflict and cooperation.</p>`
    },
    {
      type: "widget",
      title: "Activity: renewable or non-renewable?",
      widget: "classify",
      options: {
        groups: ["Renewable", "Non-renewable"],
        items: [
          ["☀️ Sunlight", 0],
          ["🛢️ Oil", 1],
          ["💨 Wind", 0],
          ["⛏️ Coal", 1],
          ["🌊 Wave power", 0],
          ["⛽ Natural gas", 1],
          ["🌋 Earth's heat (geothermal)", 0],
          ["⚛️ Uranium", 1]
        ]
      },
      caption: "The dividing line is regeneration time: uranium is a mineral and does not regenerate; wood does, but only if we don't cut more than grows back."
    },
    {
      type: "text",
      title: "2. Water",
      html: `<p>The Earth is the \"blue planet\", but very little of its water is usable. <b>97.5%</b> of the planet's water is <b>salt water</b> (seas and oceans). The remaining <b>2.5%</b> is fresh, but about two thirds of it is locked up in <b>glaciers and ice caps</b>, and almost all the rest is in <b>groundwater aquifers</b>. Rivers, lakes and wetlands contain less than <b>0.01%</b> of all the Earth's water, yet they are the most accessible source.</p>
<p>The main <b>uses</b> of fresh water worldwide: about <b>70% for agriculture</b> (irrigation), about <b>20% for industry</b> and about <b>10% for domestic use</b> (drinking, cooking, washing). In Italy each person uses about 215-220 litres of water a day at home, one of the highest figures in Europe.</p>
<p><b>The problems</b>:</p>
<ul>
<li><b>Access</b>: worldwide about <b>2.2 billion</b> people lack safely managed drinking water and about <b>3.5 billion</b> lack safe sanitation (WHO/UNICEF). Every day children and women, especially in sub-Saharan Africa, walk for hours to fetch water.</li>
<li><b>Water stress</b>: when withdrawals use up a large share of the available resources. It affects the Middle East and North Africa, India, Central Asia, California and, increasingly, Mediterranean Europe.</li>
<li><b>Pollution</b>: industrial discharges, fertilisers, pesticides, plastic and untreated sewage.</li>
<li><b>Overexploitation</b>: the most dramatic case is the <b>Aral Sea</b> in Central Asia: from the 1960s the USSR diverted the Amu Darya and Syr Darya rivers to irrigate cotton, and the lake, once the fourth largest in the world, has shrunk to a small fraction of its size, leaving a salty desert.</li>
<li><b>Conflicts</b>: rivers that cross several countries (the Nile, Tigris and Euphrates, Jordan, Mekong, Indus) are often disputed. Ethiopia's great dam on the Blue Nile (GERD) is a source of tension with Egypt and Sudan.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Where the Earth's water is",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="300" y="24" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">All the water on Earth</text>
<rect x="40" y="40" width="520" height="34" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2"/>
<rect x="40" y="40" width="13" height="34" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
<text x="300" y="63" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">97.5% salt water (seas and oceans)</text>
<text x="40" y="100" font-size="15" fill="#0369a1" font-weight="bold">2.5% fresh</text>
<text x="300" y="130" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Of the fresh water</text>
<rect x="40" y="145" width="520" height="34" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/>
<rect x="40" y="145" width="360" height="34" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
<rect x="400" y="145" width="155" height="34" fill="#7dd3fc" stroke="#0369a1" stroke-width="2"/>
<rect x="555" y="145" width="5" height="34" fill="#1d4ed8"/>
<text x="220" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">about 69%: glaciers</text>
<text x="478" y="168" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">about 30%: aquifers</text>
<text x="560" y="205" font-size="14" text-anchor="end" fill="#1d4ed8" font-weight="bold">less than 1%: rivers, lakes, moisture</text>
<text x="40" y="250" font-size="15" fill="#111827">Easily accessible water (rivers, lakes, shallow aquifers)</text>
<text x="40" y="272" font-size="15" fill="#111827">is a tiny fraction of the total: that's why it matters not to waste it.</text>
</svg>`,
      caption: "Rounded figures (USGS and UNESCO). The bars are not perfectly to scale."
    },
    {
      type: "example",
      title: "Worked example: the water hidden in products",
      html: `<p>The <b>water footprint</b> measures the water used to produce a product, even if you can't see it. Orders of magnitude (Water Footprint Network estimates):</p>
<table>
<tr><th>Product</th><th>Water needed (approx.)</th></tr>
<tr><td>1 cup of coffee</td><td>140 litres</td></tr>
<tr><td>1 kg of bread</td><td>1,600 litres</td></tr>
<tr><td>1 kg of cheese</td><td>5,000 litres</td></tr>
<tr><td>1 kg of beef</td><td>over 15,000 litres</td></tr>
<tr><td>1 pair of jeans</td><td>7,000-10,000 litres</td></tr>
</table>
<p>A 5-minute shower uses about 50-60 litres; producing 1 kg of beef takes the water of about 250 showers. That doesn't mean never eating meat, but that food choices weigh heavily on water: a diet with more pulses, cereals and vegetables has a much lower water footprint.</p>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: resources and water",
      questions: [
        { type: "mc", q: "What percentage of the Earth's water is fresh?", options: ["About 2.5%", "About 25%", "About 50%"], answer: 0, explain: "97.5% is salt water; most of the fresh water is in glaciers and aquifers." },
        { type: "mc", q: "In which sector is most of the world's fresh water used?", options: ["Industry", "Agriculture", "Domestic use"], answer: 1, explain: "About 70% of withdrawals are used to irrigate fields." },
        { type: "tf", q: "Oil is a renewable resource because the Earth produces it continuously.", answer: false, explain: "It formed over millions of years: on a human timescale it is not renewable." }
      ]
    },
    {
      type: "text",
      title: "3. Energy",
      html: `<p>Energy powers industry, transport, homes and hospitals. Worldwide, <b>about 80%</b> of primary energy still comes from <b>fossil fuels</b>: <b>oil</b> (about 30%), <b>coal</b> (about 26%) and <b>natural gas</b> (about 23%). The rest is <b>hydroelectric</b>, <b>nuclear</b>, <b>solar</b>, <b>wind</b> and <b>biomass</b>.</p>
<p>Consumption is very unequal: on average a person in the United States or Canada uses <b>over five times</b> as much energy as someone in Africa or India. About <b>700 million</b> people in the world have no electricity and about <b>2 billion</b> cook with wood or charcoal in polluting ways, with serious harm to their health.</p>
<p><b>The problems</b>:</p>
<ul>
<li><b>Climate change</b>: burning fossil fuels releases CO₂ (about two thirds of greenhouse gas emissions come from energy).</li>
<li><b>Dependence and geopolitics</b>: importing countries depend on exporting ones. Italy imports about 75-80% of the energy it consumes. The <b>1973 oil crisis</b> (the embargo by the Arab OPEC countries) quadrupled the price of oil and led to austerity measures (in Italy, car-free \"walking Sundays\"); in 2022 Russia's invasion of Ukraine showed how dependent Europe was on Russian gas.</li>
<li><b>Depletion</b> of non-renewable resources and the environmental impact of extraction (oil spills, deforestation, mines).</li>
</ul>
<p>The <b>energy transition</b> is the shift from fossil fuels to renewable sources and to more efficient use. <b>Solar</b> and <b>wind</b> power have grown extremely fast: the cost of photovoltaics fell by over 80% in ten years (2010-2020) and renewables now produce about <b>30%</b> of the world's electricity (and over 40% in Italy, mainly from hydro, solar, wind and geothermal power in Tuscany, where in 1904 at Larderello the first light bulb powered by geothermal energy was switched on).</p>
<p>There is no \"perfect\" source: <b>solar</b> and <b>wind</b> are intermittent (they need storage and grids); <b>nuclear</b> emits no CO₂ but produces radioactive waste and is costly and slow to build (in Italy two referendums, in 1987 and 2011, said no to it); <b>hydroelectric</b> power alters rivers; <b>biomass</b> competes with food. That's why we talk about an <b>energy mix</b> and about <b>efficiency</b> (the cheapest energy is the energy that isn't wasted).</p>`
    },
    {
      type: "svg",
      title: "The global energy mix",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Where the world's primary energy comes from (rounded values)</text>
<rect x="40" y="50" width="300" height="30" fill="#1f2937"/>
<text x="350" y="72" font-size="15" fill="#111827">Oil ~30%</text>
<rect x="40" y="95" width="260" height="30" fill="#6b7280"/>
<text x="310" y="117" font-size="15" fill="#111827">Coal ~26%</text>
<rect x="40" y="140" width="230" height="30" fill="#f97316"/>
<text x="280" y="162" font-size="15" fill="#111827">Natural gas ~23%</text>
<rect x="40" y="185" width="70" height="30" fill="#2563eb"/>
<text x="120" y="207" font-size="15" fill="#111827">Hydroelectric ~7%</text>
<rect x="40" y="230" width="40" height="30" fill="#a855f7"/>
<text x="90" y="252" font-size="15" fill="#111827">Nuclear ~4%</text>
<rect x="300" y="230" width="90" height="30" fill="#16a34a"/>
<text x="400" y="252" font-size="15" fill="#111827">Other renewables ~10%</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#6b7280">Estimate: fossil fuels remain about 80% of the total; the percentages vary from year to year.</text>
</svg>`,
      caption: "Primary energy includes everything: electricity, transport, heating. The share of renewables in electricity alone is much higher (about 30%)."
    },
    {
      type: "text",
      title: "4. Food",
      html: `<p>The world produces enough food for everyone (in theory for about 10 billion people, according to the FAO), yet about <b>733 million</b> people (about 9% of humanity, FAO 2023 data) <b>suffer from hunger</b>, mainly in sub-Saharan Africa and South Asia, and almost <b>2.8 billion</b> cannot afford a healthy diet. At the same time more than <b>one adult in eight</b> in the world is obese. This is the paradox of <b>malnutrition</b>: not only hunger, but also deficiencies and excess. Hunger has <b>political and economic</b> causes more than agricultural ones: poverty, wars, unstable prices, extreme weather events (as Amartya Sen explained, showing that great famines often happen without a real shortage of food).</p>
<ul>
<li><b>Green Revolution</b> (1950s-70s): with selected seeds, fertilisers, pesticides and irrigation, the agronomist <b>Norman Borlaug</b> (Nobel Peace Prize 1970) and others greatly increased wheat and rice harvests in Mexico, India and Asia, preventing famine for hundreds of millions of people. But it also caused pollution from agrochemicals, loss of biodiversity and heavy water use.</li>
<li><b>Food waste</b>: according to UNEP, about <b>1 billion tonnes</b> of food were wasted in 2022, almost 19% of the food available to consumers (plus what is lost in the fields and along the supply chain). Wasting food also means wasting water, land and energy, and causing about 8-10% of global greenhouse gas emissions.</li>
<li><b>Livestock farming</b>: it needs a lot of land, water and feed, and emits methane; livestock is responsible for about 12-15% of global emissions.</li>
<li><b>Fishing</b>: more than a third of the world's fish stocks are fished beyond their biological limits of regeneration (overfishing). Aquaculture now supplies about half of the fish we eat.</li>
<li><b>Soil</b>: erosion, desertification, loss of fertility. A third of the world's soils are degraded; it takes centuries to form a few centimetres of fertile soil.</li>
<li><b>Land grabbing</b>: the purchase or lease of large areas of land in poor countries by foreign states or companies.</li>
</ul>
<p>Solutions revolve around <b>sustainable agriculture</b> (crop rotation, organic and precision farming, agroecology), reducing waste, diets richer in plants, short supply chains and support for small producers.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… what we eat has a geography?",
      html: `<p><b>Tomatoes</b>, <b>potatoes</b>, <b>maize</b>, cocoa and chilli peppers come from the <b>Americas</b>: before 1492 Italian cooking didn't know the tomato! <b>Coffee</b> comes from Ethiopia, <b>rice</b> from Asia, and <b>dried pasta</b> spread in Sicily and southern Italy from the Middle Ages. Today more than half of the world's calories come from just <b>three cereals</b>: rice, wheat and maize. A diet based on few varieties is fragile: a disease can destroy entire harvests, as <b>potato blight</b> did in Ireland (1845-1849), causing about a million deaths and over a million emigrants.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know… bottled water costs far more than tap water?",
      html: `<p>In Italy tap water costs on average about <b>2 euros per 1,000 litres</b> (1 m³), while bottled water can cost a thousand times more. Italy is one of the world's top countries for bottled water consumption (over 200 litres per person per year), with a big impact from plastic and transport, while tap water is tested very frequently. Public water dispensers (<i>case dell'acqua</i>) and refillable bottles are among the simplest ways to reduce waste and emissions.</p>`
    },
    {
      type: "text",
      title: "5. Sustainable development",
      html: `<p>In <b>1972</b> the report <i>The Limits to Growth</i> (commissioned by the Club of Rome, founded by the Italian <b>Aurelio Peccei</b>) warned that infinite growth on a finite planet is impossible. In <b>1987</b> the report <i>Our Common Future</i> (the <b>Brundtland Report</b>, named after the chair of the commission, the Norwegian Gro Harlem Brundtland) defined <b>sustainable development</b>: <i>\"development that meets the needs of the present without compromising the ability of future generations to meet their own needs\"</i>.</p>
<p>Three dimensions (<b>the three pillars</b>), which must be held together:</p>
<ul>
<li>🌍 <b>environmental</b>: don't consume resources faster than they regenerate, reduce pollution and emissions;</li>
<li>⚖️ <b>social</b>: fairness, decent work, health, education, equality;</li>
<li>💶 <b>economic</b>: lasting prosperity and employment.</li>
</ul>
<p><b>The milestones</b>: the UN Conference in <b>Rio de Janeiro</b> (1992, the \"Earth Summit\"), the <b>Kyoto Protocol</b> (1997), the Millennium Development Goals (2000-2015), the <b>Paris Agreement</b> on climate (2015) and, on 25 September 2015, the <b>2030 Agenda</b> for Sustainable Development, signed by <b>193</b> UN countries: <b>17 Goals</b> (SDGs, <i>Sustainable Development Goals</i>) and <b>169 targets</b> to be reached by <b>2030</b>.</p>
<p>A useful tool is the <b>ecological footprint</b>, the area of land and sea needed to produce the resources a person or a country consumes and to absorb their waste. <b>Earth Overshoot Day</b> marks the day of the year when humanity has already used up all the resources the Earth can regenerate in a year: in 2024 it fell on <b>1 August</b>. If everyone lived like an Italian we would need about 2.7 planets; like an average US citizen, about 5.</p>`
    },
    {
      type: "svg",
      title: "The 17 Goals of the 2030 Agenda",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="22" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">2030 Agenda: three groups of goals</text>
<rect x="20" y="40" width="175" height="240" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<text x="107" y="65" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">People</text>
<text x="30" y="92" font-size="14" fill="#111827">1 No poverty</text>
<text x="30" y="116" font-size="14" fill="#111827">2 Zero hunger</text>
<text x="30" y="140" font-size="14" fill="#111827">3 Health and well-being</text>
<text x="30" y="164" font-size="14" fill="#111827">4 Quality education</text>
<text x="30" y="188" font-size="14" fill="#111827">5 Gender equality</text>
<text x="30" y="212" font-size="14" fill="#111827">10 Reduced inequalities</text>
<text x="30" y="236" font-size="14" fill="#111827">16 Peace and justice</text>
<rect x="213" y="40" width="175" height="240" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="65" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Planet</text>
<text x="223" y="92" font-size="14" fill="#111827">6 Clean water</text>
<text x="223" y="116" font-size="14" fill="#111827">11 Sustainable cities</text>
<text x="223" y="140" font-size="14" fill="#111827">12 Responsible consumption</text>
<text x="223" y="164" font-size="14" fill="#111827">13 Climate action</text>
<text x="223" y="188" font-size="14" fill="#111827">14 Life below water</text>
<text x="223" y="212" font-size="14" fill="#111827">15 Life on land</text>
<rect x="406" y="40" width="175" height="240" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
<text x="493" y="65" font-size="15" text-anchor="middle" fill="#92400e" font-weight="bold">Prosperity and partnership</text>
<text x="416" y="92" font-size="14" fill="#111827">7 Clean energy</text>
<text x="416" y="116" font-size="14" fill="#111827">8 Decent work</text>
<text x="416" y="140" font-size="14" fill="#111827">9 Industry and innovation</text>
<text x="416" y="164" font-size="14" fill="#111827">17 Partnerships</text>
</svg>`,
      caption: "The 17 goals are interconnected: none can be achieved on its own (for example, educating girls reduces poverty, hunger and child mortality)."
    },
    {
      type: "example",
      title: "Worked example: your daily footprint",
      html: `<p>Try looking at your day through the eyes of sustainable development:</p>
<ul>
<li><b>Breakfast</b>: milk, coffee, bread: how much water and energy are behind them? Each cup of coffee \"is worth\" about 140 litres of water.</li>
<li><b>The journey to school</b>: on foot or by bike you emit no CO₂; by bus you emit about a third of what a car emits per person; in a car with only one person, much more.</li>
<li><b>Smartphones and computers</b>: they contain cobalt, lithium and rare earths; making them last one more year greatly reduces the impact (most of a smartphone's emissions happen during production, not use).</li>
<li><b>Clothes</b>: a pair of jeans requires 7,000-10,000 litres of water; buying second-hand or repairing reduces the impact.</li>
<li><b>Lunch</b>: waste or a clean plate? Almost a fifth of the food we buy ends up in the bin.</li>
</ul>
<p>It's not about feeling guilty but about choosing consciously: big changes require collective and political choices, but individual habits, multiplied by millions of people, matter.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand sustainability",
      intro: "Sustainability is an abstract idea: here are three images to help you grasp it.",
      tabs: [
        {
          label: "🏦 Nature's bank account",
          html: `<p>Nature is a <b>bank account</b>. Renewable resources are like the <b>interest</b> (forests that grow back, fish that reproduce, water that is recycled), non-renewable ones are the <b>capital</b> (oil, minerals). A sustainable lifestyle spends only the interest, without touching the capital. \"Overshoot Day\" is the moment when humanity has already spent all the year's interest and starts living \"in the red\": today we are consuming the capital our children would need.</p>`
        },
        {
          label: "🛁 The bathtub and the tap",
          html: `<p>An aquifer is like a <b>bathtub</b>: rain soaking into the ground is the tap, the wells pumping water out are the plughole. If more water is pumped out than flows in, the level drops; if this continues, the tub empties (as has happened in many areas of India, California and Italy's Po Valley). When the aquifer is near the sea, salt water flows into the empty space: the well becomes unusable. The idea of <b>sustainable</b> is to take out no more than nature puts back.</p>`
        },
        {
          label: "🌐 The sustainability game",
          html: `<p>Imagine a village of 10 fishermen who share a lake with 100 fish that reproduce. If each fisherman catches 5 a year, the lake loses 50 and the fish decline; if they catch 2, the lake recovers. The <b>\"tragedy of the commons\"</b> (described by the ecologist Garrett Hardin in 1968) arises when everyone thinks only of their own advantage. The Nobel Prize-winning economist <b>Elinor Ostrom</b> (2009) showed that many communities have managed shared resources (pastures, forests, water) well with <b>shared rules and mutual monitoring</b>.</p>`,
          widget: "match",
          options: { pairs: [["Brundtland Report", "1987: definition of sustainable development"], ["2030 Agenda", "2015: 17 goals for UN countries"], ["Paris Agreement", "2015: limiting warming to 1.5-2 °C"], ["Kyoto Protocol", "1997: first commitments on emissions"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: resources, needs and sustainability",
      nodes: [
        { id: "risorse", label: "Natural resources", x: 50, y: 6, color: "#16a34a", html: "Renewable and non-renewable.", why: "Resources are resources only in relation to technology: uranium was not a resource before nuclear physics, oil became one with the internal combustion engine in the 19th century. What society can use changes with knowledge." },
        { id: "acqua", label: "Water", x: 15, y: 32, color: "#2563eb", html: "Fresh, scarce and unevenly distributed.", why: "Accessible fresh water is less than 1% of the total: agriculture uses 70% of it, and global warming is shifting rainfall and melting the glaciers that feed Asia's great rivers." },
        { id: "energia", label: "Energy", x: 50, y: 32, color: "#f59e0b", html: "Fossil fuels ~80%; the transition is under way.", why: "Coal powered the Industrial Revolution (Watt's steam engine, 1769), oil powered the 20th century. Every energy transition has taken decades: today we have to do it faster, for the sake of the climate." },
        { id: "cibo", label: "Food", x: 85, y: 32, color: "#84cc16", html: "Enough is produced, but it is badly distributed.", why: "Modern famines are more often crises of access (income, conflict, prices) than of availability, as Amartya Sen showed in 1981 by studying the 1943 Bengal famine." },
        { id: "impatto", label: "Impacts and limits", x: 30, y: 62, color: "#dc2626", html: "Climate, pollution, biodiversity loss, overexploitation.", why: "Scientists (Johan Rockström, 2009) identified nine 'planetary boundaries' (climate, biodiversity, nitrogen and phosphorus cycles…) within which humanity can operate safely; some have already been crossed." },
        { id: "equita", label: "Fairness", x: 70, y: 62, color: "#a855f7", html: "Who consumes and who suffers the effects.", why: "Rich countries have historically emitted more CO₂, but the worst effects often hit the poorest: hence the principle of 'common but differentiated responsibilities' in climate treaties." },
        { id: "sostenibile", label: "Sustainable development", x: 50, y: 82, color: "#14b8a6", html: "Environment + society + economy.", why: "The Brundtland Report (1987) defined it to overcome the conflict between protecting the environment and economic development: the argument is that they are two sides of the same problem." },
        { id: "agenda", label: "2030 Agenda", x: 50, y: 96, color: "#ec4899", html: "17 goals, 169 targets, 193 countries.", why: "Adopted on 25 September 2015, it is the first universal programme: it applies to all countries, rich and poor. It rests on five 'P's: people, planet, prosperity, peace, partnership." }
      ],
      edges: [
        ["risorse", "acqua", "e.g."],
        ["risorse", "energia", "e.g."],
        ["risorse", "cibo", "e.g."],
        ["energia", "impatto", "causes"],
        ["acqua", "impatto", "suffers"],
        ["cibo", "equita", "raises the issue of"],
        ["impatto", "sostenibile", "calls for"],
        ["equita", "sostenibile", "calls for"],
        ["sostenibile", "agenda", "becomes"]
      ]
    },
    {
      type: "remember",
      title: "Key points",
      html: `<ul>
<li><b>Renewable</b> (they regenerate) and <b>non-renewable</b> resources (oil, coal, gas, minerals).</li>
<li><b>Water</b>: 97.5% salt; 2.5% fresh, almost all in glaciers and aquifers; 70% of withdrawals go to agriculture; 2.2 billion people without safe drinking water.</li>
<li><b>Energy</b>: ~80% fossil fuels; transition towards renewables and efficiency; no source is free of impacts.</li>
<li><b>Food</b>: enough for everyone but badly distributed (about 733 million hungry people); waste and the Green Revolution.</li>
<li><b>Sustainable development</b> (Brundtland, 1987): three pillars, environmental, social and economic; <b>2030 Agenda</b> (2015): 17 goals.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: energy, food and the 2030 Agenda",
      questions: [
        { type: "mc", q: "What share of the world's primary energy still comes from fossil fuels?", options: ["About 20%", "About 50%", "About 80%"], answer: 2, explain: "Oil, coal and gas still provide about 80% of primary energy." },
        { type: "mc", q: "Who chaired the commission that defined sustainable development in 1987?", options: ["Gro Harlem Brundtland", "Greta Thunberg", "Aurelio Peccei"], answer: 0, explain: "The Brundtland Report (1987), named after the chair of the commission." },
        { type: "num", q: "How many Sustainable Development Goals are there in the 2030 Agenda?", answer: 17, tol: 0, explain: "17 goals (SDGs) and 169 targets." }
      ]
    }
  ],
  glossary: [
    { t: "Renewable resource", d: "A resource that regenerates quickly (sun, wind, fresh water, wood), if used in moderation." },
    { t: "Non-renewable resource", d: "A resource formed over millions of years that cannot be replenished on a human timescale (oil, coal, minerals)." },
    { t: "Water stress", d: "A situation in which water withdrawals are very high compared with availability." },
    { t: "Water footprint", d: "The volume of water needed to produce a product or for a person's consumption." },
    { t: "Energy transition", d: "The shift from fossil fuels to renewable sources and to a more efficient use of energy." },
    { t: "Energy mix", d: "The combination of sources a country uses to produce energy." },
    { t: "Green Revolution", d: "The increase in harvests (1950s-70s) thanks to selected seeds, fertilisers, pesticides and irrigation." },
    { t: "Sustainable development", d: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Report, 1987)." },
    { t: "2030 Agenda", d: "UN programme (2015) with 17 Sustainable Development Goals to be achieved by 2030." },
    { t: "Ecological footprint", d: "The area of land and sea needed to produce the resources consumed and absorb the waste produced by a person or a country." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Which of these is a non-renewable resource?", options: ["Wind", "Natural gas", "Wood from a managed forest"], answer: 1, explain: "Natural gas formed over millions of years." },
      { type: "mc", q: "What share of the fresh water withdrawn worldwide is used for agriculture?", options: ["About 10%", "About 30%", "About 70%"], answer: 2, explain: "Irrigation accounts for about 70% of withdrawals." },
      { type: "tf", q: "The world doesn't produce enough food for everyone, and this is the main cause of hunger.", answer: false, explain: "Enough food is produced for everyone: hunger depends mainly on poverty, conflict, prices and distribution." },
      { type: "num", q: "A pair of jeans requires about 7,000 litres of water. How many 50-litre showers is that equivalent to?", answer: 140, tol: 0, explain: "7,000 ÷ 50 = 140 showers." },
      { type: "mc", q: "What are the three pillars of sustainable development?", options: ["Environmental, social, economic", "Political, military, religious", "Agricultural, industrial, services"], answer: 0, explain: "Environment, society and economy must be considered together." },
      { type: "text", q: "What is the name of the 2015 UN programme with the 17 Sustainable Development Goals?", answer: ["2030 agenda", "the 2030 agenda", "agenda 2030", "2030 agenda for sustainable development"], explain: "The 2030 Agenda for Sustainable Development, adopted by 193 countries." },
      { type: "order", q: "Put in chronological order.", items: ["Brundtland Report (1987)", "Rio Conference (1992)", "Kyoto Protocol (1997)", "2030 Agenda (2015)"], explain: "From the definition of sustainable development, to the climate treaties, to the 2030 Agenda." },
      { type: "mc", q: "Why do solar and wind power need storage systems and flexible grids?", options: ["They are intermittent", "They are too expensive", "They produce radioactive waste"], answer: 0, explain: "Sun and wind are not constantly available, so batteries, grids and a mix of sources are needed." },
      { type: "tf", q: "Earth Overshoot Day marks the day when humanity has already used up the resources the Earth can regenerate in a year.", answer: true, explain: "In 2024 it fell on 1 August: after that date we 'go into the red'." },
      { type: "mc", q: "What happened to the Aral Sea?", options: ["It shrank dramatically because the rivers that fed it were diverted", "It was filled by a dam", "It became the largest lake in the world"], answer: 0, explain: "From the 1960s, irrigation for cotton took water from the Amu Darya and Syr Darya rivers, and the lake almost dried up." }
    ]
  }
});
