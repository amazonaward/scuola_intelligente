TOPIC('en', {
  id: `m1-geo-popolazione-citta`,
  title: `Population and Cities`,
  intro: `More than <b>8 billion</b> of us live on Earth, but we are not spread out evenly: there are crowded metropolises and almost empty deserts. In this lesson we learn to <b>measure</b> population (density, birth rate, death rate), to understand why people <b>move</b> (migration) and why more and more people live in <b>cities</b> (urbanization).`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. How many of us are there and how are we counted`,
      html: `<p><b>Demography</b> is the science that studies population: how many people there are, how old they are, where they live, how they change over time.</p>
<p>Data are collected mainly in two ways:</p>
<ul>
<li>the <b>census</b>: a big count of all the inhabitants. In Italy it is carried out by <b>ISTAT</b> (the National Institute of Statistics); since 2018 it has become <b>permanent</b>, that is, it is done every year on a sample of households;</li>
<li>the <b>civil registry</b> of the municipalities, which records births, deaths and changes of residence.</li>
</ul>
<p>Some numbers to remember (rounded data):</p>
<table>
<tr><th>Where</th><th>Inhabitants</th></tr>
<tr><td>🌍 World</td><td>about <b>8.2 billion</b> (2025)</td></tr>
<tr><td>🇪🇺 European Union</td><td>about <b>450 million</b></td></tr>
<tr><td>🇮🇹 Italy</td><td>about <b>59 million</b></td></tr>
<tr><td>🏙️ Rome (municipality)</td><td>about <b>2.75 million</b></td></tr>
</table>
<p>In <b>1800</b> there were about <b>1 billion</b> human beings; in <b>1960</b> there were 3 billion. The very rapid growth of the twentieth century is called the <b>population explosion</b> and is mainly due to the fall in mortality thanks to medicine, hygiene and food.</p>`
    },
    {
      type: `text`, title: `2. Population density`,
      html: `<p>Knowing how many inhabitants a country has is not enough: 59 million in a small territory is "a lot", in a huge one it is "a few". To compare, we use <b>population density</b>:</p>
<p style="font-size:1.2em;text-align:center"><b>density = inhabitants ÷ area (km²)</b></p>
<p>The result is read as "<b>inhabitants per square kilometre</b>" (inh/km²).</p>
<p><b>Step by step, Italy:</b></p>
<ol>
<li>inhabitants ≈ 59,000,000;</li>
<li>area ≈ 302,000 km²;</li>
<li>59,000,000 ÷ 302,000 ≈ <b>195 inh/km²</b>.</li>
</ol>
<p>It means that, if we spread all Italians out evenly, in every square 1 km on a side there would be about 195 people. Of course in reality it is not like that: the <b>Po Valley</b> and the coasts are crowded, the mountains much less so.</p>
<table>
<tr><th>Territory</th><th>Density (approx.)</th></tr>
<tr><td>Principality of Monaco</td><td>over 18,000 inh/km² (the densest in the world)</td></tr>
<tr><td>Bangladesh</td><td>about 1,200 inh/km²</td></tr>
<tr><td>Netherlands</td><td>about 530 inh/km²</td></tr>
<tr><td>Italy</td><td>about 195 inh/km²</td></tr>
<tr><td>Campania (the densest region of Italy)</td><td>about 410 inh/km²</td></tr>
<tr><td>Aosta Valley (the least dense)</td><td>about 38 inh/km²</td></tr>
<tr><td>Mongolia</td><td>about 2 inh/km²</td></tr>
</table>`
    },
    {
      type: `svg`, title: `Same area, different densities`,
      caption: `Three squares of the same size: only the number of people living there changes.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="40" width="170" height="170" fill="#dcfce7" stroke="#166534" stroke-width="3"/>
<rect x="215" y="40" width="170" height="170" fill="#fef9c3" stroke="#a16207" stroke-width="3"/>
<rect x="410" y="40" width="170" height="170" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
<g fill="#166534"><circle cx="60" cy="90" r="7"/><circle cx="150" cy="160" r="7"/></g>
<g fill="#a16207"><circle cx="245" cy="70" r="7"/><circle cx="300" cy="90" r="7"/><circle cx="350" cy="75" r="7"/><circle cx="260" cy="130" r="7"/><circle cx="330" cy="140" r="7"/><circle cx="280" cy="185" r="7"/><circle cx="360" cy="185" r="7"/><circle cx="305" cy="160" r="7"/></g>
<g fill="#b91c1c">
<circle cx="430" cy="60" r="7"/><circle cx="455" cy="60" r="7"/><circle cx="480" cy="60" r="7"/><circle cx="505" cy="60" r="7"/><circle cx="530" cy="60" r="7"/><circle cx="555" cy="60" r="7"/>
<circle cx="430" cy="90" r="7"/><circle cx="455" cy="90" r="7"/><circle cx="480" cy="90" r="7"/><circle cx="505" cy="90" r="7"/><circle cx="530" cy="90" r="7"/><circle cx="555" cy="90" r="7"/>
<circle cx="430" cy="120" r="7"/><circle cx="455" cy="120" r="7"/><circle cx="480" cy="120" r="7"/><circle cx="505" cy="120" r="7"/><circle cx="530" cy="120" r="7"/><circle cx="555" cy="120" r="7"/>
<circle cx="430" cy="150" r="7"/><circle cx="455" cy="150" r="7"/><circle cx="480" cy="150" r="7"/><circle cx="505" cy="150" r="7"/><circle cx="530" cy="150" r="7"/><circle cx="555" cy="150" r="7"/>
<circle cx="430" cy="180" r="7"/><circle cx="455" cy="180" r="7"/><circle cx="480" cy="180" r="7"/><circle cx="505" cy="180" r="7"/><circle cx="530" cy="180" r="7"/><circle cx="555" cy="180" r="7"/>
</g>
<text x="105" y="30" font-size="16" text-anchor="middle" fill="#166534" font-weight="bold">Mountains</text>
<text x="300" y="30" font-size="16" text-anchor="middle" fill="#a16207" font-weight="bold">Countryside</text>
<text x="495" y="30" font-size="16" text-anchor="middle" fill="#b91c1c" font-weight="bold">City</text>
<text x="105" y="240" font-size="15" text-anchor="middle" fill="#0f172a">2 people</text>
<text x="300" y="240" font-size="15" text-anchor="middle" fill="#0f172a">8 people</text>
<text x="495" y="240" font-size="15" text-anchor="middle" fill="#0f172a">30 people</text>
<text x="105" y="265" font-size="15" text-anchor="middle" fill="#166534" font-weight="bold">LOW density</text>
<text x="300" y="265" font-size="15" text-anchor="middle" fill="#a16207" font-weight="bold">MEDIUM density</text>
<text x="495" y="265" font-size="15" text-anchor="middle" fill="#b91c1c" font-weight="bold">HIGH density</text>
<text x="300" y="292" font-size="14" text-anchor="middle" fill="#334155">density = inhabitants ÷ area</text>
</svg>`
    },
    {
      type: `example`, title: `Practical example: the density of your classroom`,
      html: `<p>Your classroom measures 7 m × 8 m = <b>56 m²</b> and there are <b>24 pupils</b>.</p>
<ul>
<li>Density = 24 ÷ 56 ≈ <b>0.43 pupils per m²</b>.</li>
<li>In the playground (600 m²) the same 24 pupils have a density of 24 ÷ 600 = <b>0.04 pupils per m²</b>: ten times less crowded!</li>
</ul>
<p>Geographers do the same thing, but with inhabitants and km². Try it with your own town: look up the inhabitants and the area on the internet and divide.</p>`
    },
    {
      type: `text`, title: `3. Why is the population distributed this way?`,
      html: `<p>People gather where life is easier. The <b>factors</b> are of two kinds:</p>
<ul>
<li><b>Physical (natural) factors</b>: mild climate, fresh water, fertile soil, plains, coasts. On the other hand, deserts, ice, high mountains and very dense forests are sparsely populated.</li>
<li><b>Human (historical and economic) factors</b>: jobs, industries, ports, roads and railways, schools and hospitals, the ancient history of cities.</li>
</ul>
<p>About <b>half of humanity</b> lives in Asia, among China, India, Bangladesh, Pakistan and Indonesia. In Europe the densest areas form a "blue banana" that runs from England to northern Italy through the Netherlands and the Rhine valley.</p>`
    },
    {
      type: `text`, title: `4. Natural change: births and deaths`,
      html: `<p>A population changes for two reasons: <b>natural change</b> and <b>migration</b>.</p>
<ul>
<li><b>Birth rate</b>: births per 1,000 inhabitants in a year.</li>
<li><b>Death rate</b>: deaths per 1,000 inhabitants in a year.</li>
<li><b>Natural balance</b> = births − deaths. If it is negative the population, without immigration, shrinks.</li>
</ul>
<p>In Italy in 2024 about <b>370,000</b> children were born (the lowest number since the Unification of Italy) and about <b>650,000</b> people died: the natural balance is strongly <b>negative</b>. On average each woman has about <b>1.2 children</b>, while to keep the population stable about 2.1 would be needed.</p>
<p>At the same time people live longer: <b>life expectancy</b> in Italy is over <b>83 years</b>, one of the highest in the world. Result: Italy is one of the <b>oldest</b> countries on the planet (median age about 47).</p>`
    },
    {
      type: `svg`, title: `The age pyramid`,
      caption: `On the left a young country (wide base, many children); on the right an old country like Italy (narrow base, many adults and elderly people).`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<g fill="#3b82f6"><rect x="40" y="200" width="110" height="20"/><rect x="60" y="178" width="90" height="20"/><rect x="80" y="156" width="70" height="20"/><rect x="100" y="134" width="50" height="20"/><rect x="118" y="112" width="32" height="20"/><rect x="134" y="90" width="16" height="20"/></g>
<g fill="#ec4899"><rect x="150" y="200" width="110" height="20"/><rect x="150" y="178" width="90" height="20"/><rect x="150" y="156" width="70" height="20"/><rect x="150" y="134" width="50" height="20"/><rect x="150" y="112" width="32" height="20"/><rect x="150" y="90" width="16" height="20"/></g>
<g fill="#3b82f6"><rect x="390" y="200" width="40" height="20"/><rect x="378" y="178" width="52" height="20"/><rect x="370" y="156" width="60" height="20"/><rect x="365" y="134" width="65" height="20"/><rect x="372" y="112" width="58" height="20"/><rect x="388" y="90" width="42" height="20"/></g>
<g fill="#ec4899"><rect x="430" y="200" width="40" height="20"/><rect x="430" y="178" width="52" height="20"/><rect x="430" y="156" width="60" height="20"/><rect x="430" y="134" width="67" height="20"/><rect x="430" y="112" width="62" height="20"/><rect x="430" y="90" width="48" height="20"/></g>
<text x="150" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Young country</text>
<text x="150" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(e.g. Niger, Nigeria)</text>
<text x="430" y="40" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Old country</text>
<text x="430" y="62" font-size="14" text-anchor="middle" fill="#9a3412">(e.g. Italy, Japan)</text>
<text x="20" y="215" font-size="13" fill="#334155">0-14</text>
<text x="20" y="105" font-size="13" fill="#334155">80+</text>
<text x="85" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">males</text>
<text x="170" y="250" font-size="15" fill="#be185d" font-weight="bold">females</text>
<text x="365" y="250" font-size="15" fill="#1d4ed8" font-weight="bold">males</text>
<text x="440" y="250" font-size="15" fill="#be185d" font-weight="bold">females</text>
<text x="300" y="285" font-size="14" text-anchor="middle" fill="#334155">Each bar = one age group. The longer it is, the more people there are.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Mini-quiz: density and birth rate`,
      questions: [
        { type: `mc`, q: `How do you calculate population density?`, options: [`inhabitants × area`, `inhabitants ÷ area`, `area ÷ inhabitants`], answer: 1, explain: `You divide the number of inhabitants by the area in km².` },
        { type: `num`, q: `An island has 5,000 inhabitants and an area of 50 km². What is its density (inh/km²)?`, answer: 100, tol: 0, unit: `inh/km²`, explain: `5,000 ÷ 50 = 100 inh/km².` },
        { type: `tf`, q: `In Italy today more children are born than people die.`, answer: false, explain: `It is the opposite: deaths outnumber births, the natural balance is negative.` }
      ]
    },
    {
      type: `text`, title: `5. Migration`,
      html: `<p>A <b>migration</b> is the movement of people from one place to another to live there. Someone who leaves is an <b>emigrant</b> (seen from the country of departure), someone who arrives is an <b>immigrant</b> (seen from the country of arrival): it is the same person!</p>
<ul>
<li><b>Internal migration</b>: within the same country (e.g. from southern to northern Italy in the 1950s-60s).</li>
<li><b>International migration</b>: from one country to another.</li>
<li><b>Voluntary</b> (work, study, family) or <b>forced</b> (wars, persecution, disasters: those who flee can ask for protection as a <b>refugee</b>).</li>
</ul>
<p>Geographers speak of <b>push factors</b> (what pushes people to leave, like poverty or war) and <b>pull factors</b> (what attracts them, like jobs and safety).</p>
<p><b>Italian migrants.</b> Between 1876 and 1976 about <b>24 million</b> Italians emigrated to the Americas (United States, Argentina, Brazil), Australia and northern Europe. Today Italy is also a country of <b>immigration</b>: over <b>5 million</b> foreign citizens live here (about 9% of the population), and at the same time many young Italians leave to work abroad.</p>`
    },
    {
      type: `widget`, title: `Game: push or pull?`,
      widget: `classify`,
      caption: `Does each reason push people to leave their own country (push) or attract them to another (pull)?`,
      options: {
        groups: [`⬅️ Push factor`, `➡️ Pull factor`],
        items: [
          [`💣 War in one's own country`, 0], [`🏜️ Drought and lost harvests`, 0], [`📉 Unemployment`, 0], [`⛓️ Political persecution`, 0],
          [`💼 Job offers`, 1], [`🎓 Prestigious universities`, 1], [`🏥 Hospitals and services`, 1], [`👨‍👩‍👧 Relatives who have already emigrated`, 1]
        ]
      }
    },
    {
      type: `text`, title: `6. Urbanization: everyone to the city`,
      html: `<p><b>Urbanization</b> is the movement of population from the countryside to the cities and the growth of the cities themselves.</p>
<ul>
<li>In 1800 less than <b>10%</b> of humanity lived in cities.</li>
<li>In 1950 about <b>30%</b>.</li>
<li>Around <b>2007</b>, for the first time in history, city dwellers outnumbered those in the countryside.</li>
</ul>
<p>Words about cities:</p>
<ul>
<li><b>Metropolis</b>: a big city, a centre of services and activities.</li>
<li><b>Metropolitan area</b>: the city with all the surrounding municipalities, linked by commuters, roads and transport (e.g. Milan and its belt).</li>
<li><b>Megalopolis</b>: several metropolitan areas merged together (e.g. Boston-Washington in the USA, Tokyo-Osaka in Japan).</li>
<li><b>Megacity</b>: an urban area with more than <b>10 million</b> inhabitants. Today there are over 30, almost all in Asia, Africa and Latin America.</li>
</ul>
<p>Cities offer jobs and services, but they also have problems: traffic, pollution, the cost of housing, and in poor countries huge neighbourhoods of shacks (<b>slums</b>, <i>favelas</i> in Brazil, <i>bidonvilles</i> in French-speaking Africa).</p>`
    },
    {
      type: `3d`, title: `The world's big cities on the globe`,
      scene: `globe`,
      caption: `Rotate the globe: in orange some of the largest megacities, in green the main Italian cities.`,
      options: {
        points: [
          { lat: -6.2, lon: 106.8, label: `Jakarta`, color: `#f97316` },
          { lat: 23.8, lon: 90.4, label: `Dhaka`, color: `#f97316` },
          { lat: 35.7, lon: 139.7, label: `Tokyo`, color: `#f97316` },
          { lat: 28.6, lon: 77.2, label: `New Delhi`, color: `#f97316` },
          { lat: 31.2, lon: 121.5, label: `Shanghai`, color: `#f97316` },
          { lat: 30.0, lon: 31.2, label: `Cairo`, color: `#f97316` },
          { lat: 6.5, lon: 3.4, label: `Lagos`, color: `#f97316` },
          { lat: -23.5, lon: -46.6, label: `São Paulo`, color: `#f97316` },
          { lat: 19.4, lon: -99.1, label: `Mexico City`, color: `#f97316` },
          { lat: 40.7, lon: -74.0, label: `New York`, color: `#f97316` },
          { lat: 41.9, lon: 12.5, label: `Rome`, color: `#22c55e` },
          { lat: 45.46, lon: 9.19, label: `Milan`, color: `#22c55e` },
          { lat: 40.85, lon: 14.27, label: `Naples`, color: `#22c55e` },
          { lat: 45.07, lon: 7.69, label: `Turin`, color: `#22c55e` }
        ]
      }
    },
    {
      type: `example`, title: `Practical example: the most populous Italian cities`,
      html: `<table>
<tr><th>#</th><th>Municipality</th><th>Inhabitants (approx.)</th></tr>
<tr><td>1</td><td>Rome</td><td>2,750,000</td></tr>
<tr><td>2</td><td>Milan</td><td>1,370,000</td></tr>
<tr><td>3</td><td>Naples</td><td>910,000</td></tr>
<tr><td>4</td><td>Turin</td><td>850,000</td></tr>
<tr><td>5</td><td>Palermo</td><td>630,000</td></tr>
</table>
<p>Careful: if we count the <b>metropolitan area</b>, Milan exceeds 3 million people because every day hundreds of thousands of <b>commuters</b> arrive from the neighbouring towns. <b>Lombardy</b> is the most populous region (about 10 million), the <b>Aosta Valley</b> the least populous (about 123,000).</p>`
    },
    {
      type: `widget`, title: `Timeline: the history of cities`,
      widget: `timeline`,
      caption: `From the first cities of Mesopotamia to today's megacities.`,
      options: {
        unit: `years`,
        events: [
          { year: -3500, label: `Uruk, one of the first cities`, icon: `🏛️` },
          { year: 100, label: `Ancient Rome: about 1 million inhabitants`, icon: `🏟️` },
          { year: 1800, label: `Beijing and London approach a million`, icon: `🏭` },
          { year: 1804, label: `The world reaches 1 billion people`, icon: `🌍` },
          { year: 1950, label: `New York is the first megacity (over 10 million)`, icon: `🗽` },
          { year: 2007, label: `More people in cities than in the countryside`, icon: `🏙️` },
          { year: 2022, label: `The world passes 8 billion`, icon: `👥` }
        ]
      }
    },
    {
      type: `curiosity`, title: `Did you know… there is no countryside in the Principality of Monaco?`,
      html: `<p>Monaco is barely <b>2 km²</b> (less than a neighbourhood of Rome!) and about <b>38,000</b> people live there: the density exceeds <b>18,000 inh/km²</b>. To get more space, the Principality has built new districts by <b>taking land from the sea</b>, like the Fontvieille district and the new Mareterra.</p>`
    },
    {
      type: `curiosity`, title: `Did you know… the biggest cities change places in the ranking?`,
      html: `<p>For decades the largest city in the world was <b>Tokyo</b>. But the ranking depends on <b>where you draw the boundary</b> of the city! With a new method of calculation, in 2025 the UN put <b>Jakarta</b> (Indonesia, over 40 million) in first place, followed by <b>Dhaka</b> (Bangladesh) and Tokyo. And Jakarta is sinking by a few centimetres a year, so much so that Indonesia is building a new capital, <b>Nusantara</b>, on the island of Borneo.</p>`
    },
    {
      type: `alternatives`, title: `Other ways to understand it`,
      intro: `If density, natural balance and urbanization seem like just numbers, try these paths.`,
      tabs: [
        {
          label: `🚌 The bus`,
          html: `<p>Imagine a <b>bus</b> that is always the same size:</p>
<ul>
<li>at 6 in the morning there are 5 passengers: <b>low density</b>, you sit wherever you like;</li>
<li>at 8, school time, there are 90: <b>very high density</b>, you are squashed!</li>
</ul>
<p>The <b>balance</b> works like the stops: at each stop someone gets on (births, immigrants) and someone gets off (deaths, emigrants). If more people get off than get on, the bus empties.</p>`
        },
        {
          label: `🧮 With cubes`,
          html: `<p>An area of <b>4 × 5 = 20 squares</b> represents 20 km². Each cube is 10 people. Change the numbers with the sliders: with height 1 the density is 10 inh/km², if you stack the cubes (buildings!) the same area holds many more people. This is exactly what cities do: they <b>grow upwards</b> with skyscrapers.</p>`,
          scene: `blocks`,
          options: { mode: `volume`, a: 4, b: 5, c: 3 }
        },
        {
          label: `🇯🇵🇳🇬 Two countries compared`,
          html: `<p>Let's compare two countries with almost the same population in 2000 and opposite destinies:</p>
<ul>
<li>🇯🇵 <b>Japan</b>: very few births, the population has been <b>shrinking</b> since about 2010; almost 3 people in 10 are over 65. More adult nappies are sold than baby ones!</li>
<li>🇳🇬 <b>Nigeria</b>: many births, median age under <b>20</b>; the population is growing very fast and Lagos is one of the fastest-growing cities in the world.</li>
</ul>
<p>Italy looks a lot like Japan: that is why people talk about a <b>demographic winter</b>.</p>`
        },
        {
          label: `🌐 On the globe`,
          html: `<p>Look at the world as an astronaut would see it at night: the city lights show where we live. Here are the most populated areas (southern and eastern Asia, Europe, the American coasts) and some almost empty places (Sahara, Siberia, Amazon, inland Australia).</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 25, lon: 80, label: `Ganges Valley: very dense`, color: `#ef4444` },
              { lat: 32, lon: 115, label: `Eastern China: very dense`, color: `#ef4444` },
              { lat: 50, lon: 6, label: `Central Europe: dense`, color: `#f97316` },
              { lat: 23, lon: 10, label: `Sahara: almost empty`, color: `#22c55e` },
              { lat: 65, lon: 110, label: `Siberia: almost empty`, color: `#22c55e` },
              { lat: -25, lon: 130, label: `Inland Australia: almost empty`, color: `#22c55e` }
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Map: how a population changes`,
      nodes: [
        { id: `pop`, label: `Population`, x: 50, y: 8, color: `#0ea5e9`, html: `All the people who live in a territory.`, why: `It is studied by <b>demography</b>. The first to use statistics to study births and deaths was the Englishman <b>John Graunt</b> in 1662, analysing the death records of London. In Italy the first national census was in <b>1861</b>, right after Unification.` },
        { id: `dens`, label: `Density`, x: 15, y: 32, color: `#22c55e`, html: `Inhabitants ÷ km². It tells how "crowded" a territory is.`, why: `The number of inhabitants alone does not let us compare countries of different sizes: by dividing by the area we get a "per unit" value, like speed (km per hour) or price per kg.` },
        { id: `fatt`, label: `Physical and human factors`, x: 15, y: 62, color: `#16a34a`, html: `Climate, water, plains, coasts, jobs, transport.`, why: `The first civilizations arose along rivers (Nile, Tigris and Euphrates, Indus, Yellow River) because water made farming possible. Today's cities are often in the same place they have been for thousands of years.` },
        { id: `nat`, label: `Natural change`, x: 50, y: 35, color: `#ec4899`, html: `Births − deaths = natural balance.`, why: `For thousands of years births and deaths almost balanced out. With modern medicine (vaccines, antibiotics, hygiene) mortality dropped before the birth rate did: that is why the population exploded. Then, with education and women's work, births also fell: this is the <b>demographic transition</b>.` },
        { id: `mig`, label: `Migration`, x: 83, y: 35, color: `#f97316`, html: `Movements of people: migration balance = immigrants − emigrants.`, why: `Human beings have always migrated: <i>Homo sapiens</i> left Africa more than 60,000 years ago. The causes are explained by <b>push</b> and <b>pull</b> factors, a model proposed by the geographer <b>Ernst Ravenstein</b> in 1885.` },
        { id: `eta`, label: `Age structure`, x: 50, y: 65, color: `#a855f7`, html: `The age pyramid: young people, adults, elderly people.`, why: `It depends on births and on how long people live. Few births and long lives make a "spinning-top" or "urn" shaped pyramid, as in Italy: fewer young workers and more pensioners.` },
        { id: `urb`, label: `Urbanization`, x: 83, y: 65, color: `#ef4444`, html: `More and more people live in cities.`, why: `With the <b>Industrial Revolution</b> (from 1750 in England) work moved from the fields to the factories, which were in cities. Today the city attracts with services, universities and jobs in the service sector.` },
        { id: `mega`, label: `Metropolises and megacities`, x: 83, y: 92, color: `#b91c1c`, html: `Huge urban areas, over 10 million inhabitants.`, why: `When a city grows it "fuses" with the neighbouring towns and a metropolitan area is born; if several areas join together we speak of a <b>megalopolis</b>, a term made famous by the French geographer <b>Jean Gottmann</b> in 1961.` }
      ],
      edges: [
        [`pop`, `dens`, `is measured by`], [`dens`, `fatt`, `depends on`], [`pop`, `nat`, `changes through`], [`pop`, `mig`, `changes through`],
        [`nat`, `eta`, `shapes`], [`mig`, `urb`, `feeds`], [`urb`, `mega`, `creates`]
      ]
    },
    {
      type: `quiz`, title: `Mini-quiz: migration and cities`,
      questions: [
        { type: `mc`, q: `A city with more than 10 million inhabitants is called a…`, options: [`megacity`, `municipality`, `village`], answer: 0, explain: `Megacity: over 10 million inhabitants.` },
        { type: `tf`, q: `An emigrant and an immigrant can be the same person.`, answer: true, explain: `It depends on the point of view: emigrant for the country they leave, immigrant for the one they arrive in.` },
        { type: `mc`, q: `Around which year did the world's urban population overtake the rural one?`, options: [`1900`, `1950`, `2007`], answer: 2, explain: `Around 2007-2008, for the first time in history.` }
      ]
    }
  ],
  glossary: [
    { t: `Demography`, d: `The science that studies population and its changes.` },
    { t: `Census`, d: `A count of all the inhabitants of a country; in Italy it is run by ISTAT.` },
    { t: `Population density`, d: `The average number of inhabitants per km²: inhabitants ÷ area.` },
    { t: `Birth / death rate`, d: `Births / deaths in a year per 1,000 inhabitants.` },
    { t: `Natural balance`, d: `The difference between births and deaths.` },
    { t: `Migration balance`, d: `The difference between those who arrive (immigrants) and those who leave (emigrants).` },
    { t: `Life expectancy`, d: `The average number of years a person can expect to live at birth.` },
    { t: `Age pyramid`, d: `A graph that shows how many people there are in each age group, males and females.` },
    { t: `Migration`, d: `The movement of people from one place to another to live there.` },
    { t: `Refugee`, d: `A person forced to flee their country because of war or persecution, who receives international protection.` },
    { t: `Urbanization`, d: `The growth of the population living in cities.` },
    { t: `Metropolitan area`, d: `A large city together with the neighbouring municipalities connected to it.` },
    { t: `Megacity`, d: `An urban area with more than 10 million inhabitants.` },
    { t: `Commuter`, d: `Someone who travels every day from one town to another for work or study.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `About how many people live on Earth today?`, options: [`800 million`, `8 billion`, `80 billion`], answer: 1, explain: `We passed 8 billion in 2022.` },
      { type: `num`, q: `A region has 2,000,000 inhabitants and an area of 10,000 km². What is the density?`, answer: 200, tol: 0, unit: `inh/km²`, explain: `2,000,000 ÷ 10,000 = 200 inh/km².` },
      { type: `mc`, q: `Roughly what is the density of Italy?`, options: [`20 inh/km²`, `195 inh/km²`, `1,200 inh/km²`], answer: 1, explain: `59 million inhabitants over 302,000 km² ≈ 195 inh/km².` },
      { type: `tf`, q: `Mountain areas and deserts usually have a high density.`, answer: false, explain: `Difficult climate and terrain make these places sparsely populated: low density.` },
      { type: `mc`, q: `The natural balance is…`, options: [`immigrants − emigrants`, `births − deaths`, `inhabitants ÷ area`], answer: 1, explain: `Natural balance = births − deaths.` },
      { type: `num`, q: `In a town 30 children are born and 45 people die in a year. What is the natural balance?`, answer: -15, tol: 0, explain: `30 − 45 = −15: the balance is negative.` },
      { type: `mc`, q: `Which of these is a PUSH factor?`, options: [`A war`, `A job offer abroad`, `A good university`], answer: 0, explain: `War pushes people to leave; the other two attract them.` },
      { type: `text`, q: `What is an urban area with more than 10 million inhabitants called?`, answer: [`megacity`, `a megacity`, `mega city`, `mega-city`], explain: `A megacity, like Tokyo, Jakarta or Dhaka.` },
      { type: `mc`, q: `Which is the most populous municipality in Italy?`, options: [`Milan`, `Rome`, `Naples`], answer: 1, explain: `Rome, with about 2.75 million inhabitants.` },
      { type: `tf`, q: `Between the nineteenth and twentieth centuries millions of Italians emigrated to the Americas.`, answer: true, explain: `About 24 million between 1876 and 1976.` },
      { type: `order`, q: `Put in order from the LOWEST to the HIGHEST density.`, items: [`Mongolia`, `Italy`, `Bangladesh`, `Principality of Monaco`], explain: `Mongolia ~2, Italy ~195, Bangladesh ~1,200, Monaco over 18,000 inh/km².` },
      { type: `mc`, q: `Why is the Italian population getting older?`, options: [`Few births and ever longer lives`, `Many births`, `Nobody emigrates`], answer: 0, explain: `About 1.2 children per woman and a life expectancy above 83 years.` }
    ],
    gen: [[`percent`, 2]]
  }
});
