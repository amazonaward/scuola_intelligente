TOPIC('en', {
  id: `m2-geo-europa-nordica`,
  title: `Northern Europe`,
  intro: `Fjords carved by glaciers, thousands of lakes, volcanoes under the ice, the midnight sun and the northern lights: <b>Northern Europe</b> includes the <b>Nordic countries</b> (Norway, Sweden, Finland, Denmark, Iceland) and the <b>British Isles</b> (the United Kingdom and Ireland). They are thinly populated countries but among the richest, best educated and most innovative in the world. Let's discover how latitude, ice and the sea have shaped their landscapes and their way of life.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. A region shaped by ice`,
      html: `<p>During the <b>ice ages</b> (the last one ended about 11,700 years ago) an enormous ice sheet, up to 3 km thick, covered Scandinavia and much of the British Isles. The ice left its traces everywhere:</p>
<ul>
<li>the <b>fjords</b> of Norway: valleys carved by glaciers and then flooded by the sea;</li>
<li>the tens of thousands of <b>lakes</b> of Finland and Sweden, in hollows scooped out by the ice;</li>
<li>smoothed rocks, hills of debris (moraines) and thin soils, not well suited to farming.</li>
</ul>
<p>The <b>Scandinavian Mountains</b> run along the Scandinavian Peninsula: high in the west (Norway), they slope gently down towards the east (Sweden) as far as the Baltic Sea. The British lands have ancient, low mountains in the north and west (Scotland, Wales) and plains in the south-east (England).</p>
<p>A geological curiosity: freed from the weight of the ice, Scandinavia is <b>still rising</b>, in some places by almost 1 cm a year!</p>`
    },
    {
      type: `svg`,
      title: `How a fjord is formed`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="100" y="28" font-size="16" text-anchor="middle" font-weight="bold">1. V-shaped valley</text>
<polygon points="20,60 90,200 110,200 180,60 180,240 20,240" fill="#a8a29e"/>
<path d="M95 195 L105 195" stroke="#2563eb" stroke-width="6"/>
<text x="100" y="268" font-size="14" text-anchor="middle">carved by a river</text>
<text x="300" y="28" font-size="16" text-anchor="middle" font-weight="bold">2. The glacier arrives</text>
<polygon points="220,60 245,215 355,215 380,60 380,240 220,240" fill="#a8a29e"/>
<polygon points="222,62 247,213 353,213 378,62" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="3"/>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#0369a1" font-weight="bold">ice</text>
<text x="300" y="268" font-size="14" text-anchor="middle">carves and widens: U-shaped valley</text>
<text x="500" y="28" font-size="16" text-anchor="middle" font-weight="bold">3. The sea comes in</text>
<polygon points="420,60 445,215 555,215 580,60 580,240 420,240" fill="#a8a29e"/>
<polygon points="434,130 445,213 555,213 566,130" fill="#2563eb"/>
<line x1="420" y1="130" x2="580" y2="130" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="500" y="180" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">FJORD</text>
<text x="500" y="268" font-size="14" text-anchor="middle">the ice melts,</text>
<text x="500" y="288" font-size="14" text-anchor="middle">the sea level rises</text>
</svg>`,
      caption: `The Sognefjord, in Norway, reaches about 204 km inland and in places is more than 1,300 metres deep.`
    },
    {
      type: `3d`,
      title: `The landscapes of the North in 3D`,
      scene: `terrain`,
      caption: `Rotate the landscape and touch each feature: discover a northern example for each one.`,
      options: {
        features: {
          bay: { label: `Fjord`, html: `A long, narrow inlet between steep walls: a glacial valley flooded by the sea. The Norwegian coasts are full of them; the <b>Geirangerfjord</b> is a UNESCO World Heritage Site.` },
          glacier: { label: `Glacier`, html: `<b>Vatnajökull</b> in Iceland is the largest glacier in Europe by volume; active volcanoes hide beneath it.` },
          volcano: { label: `Volcano`, html: `Iceland has about 30 active volcanic systems. In 2010 the eruption of <b>Eyjafjallajökull</b> grounded flights across half of Europe for days.` },
          mountain: { label: `Mountain range`, html: `The <b>Scandinavian Mountains</b> (in Norway Galdhøpiggen, 2,469 m) and the Scottish <b>Highlands</b>, with Ben Nevis (1,345 m), the highest peak in the British Isles.` },
          lake: { label: `Lake`, html: `Finland has about <b>188,000 lakes</b>; in Sweden <b>Vänern</b> (about 5,650 km²) is the largest lake in the European Union.` },
          island: { label: `Island`, html: `<b>Great Britain</b> is the largest island in Europe. <b>Greenland</b> (Denmark) is the largest island in the world.` },
          archipelago: { label: `Archipelago`, html: `The <b>Lofoten</b> islands in Norway, the <b>Faroe Islands</b> (Denmark) and the <b>Hebrides</b> in Scotland. Stockholm too stands on 14 islands.` },
          peninsula: { label: `Peninsula`, html: `The <b>Scandinavian Peninsula</b> (Norway and Sweden) is the largest in Europe; Denmark occupies the <b>Jutland</b> peninsula.` },
          strait: { label: `Strait`, html: `The <b>Strait of Dover</b> (33 km) separates England and France; the Channel Tunnel runs beneath it. The <b>Øresund</b> separates Denmark and Sweden and is crossed by a bridge-tunnel.` },
          cape: { label: `Cape`, html: `<b>North Cape</b>, in Norway, with its cliff over 300 m high, is considered the northernmost point in Europe that can be reached by car.` },
          coast: { label: `Coast`, html: `The <b>white cliffs of Dover</b>, made of chalk, are the symbol of the English coast on the Channel.` },
          river: { label: `River`, html: `The <b>Thames</b> (about 346 km) flows through London; the <b>Shannon</b> (about 360 km) is the longest river in Ireland and in the British Isles.` },
          plain: { label: `Plain`, html: `<b>Denmark</b> is almost entirely flat: its highest point is only just over 170 m!` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Climate, light and darkness`,
      html: `<p>Northern Europe lies at the same latitude as Alaska and Siberia, and yet it is habitable: thanks to the <b>North Atlantic Current</b> (the continuation of the Gulf Stream), which carries warm water along the coasts. This is why:</p>
<ul>
<li>the British Isles, Ireland, Denmark and the Norwegian coast have an <b>oceanic climate</b>: mild winters, cool summers, frequent rain; Norwegian ports do not freeze even beyond the Arctic Circle;</li>
<li>the interior of Sweden and Finland has a <b>cold continental</b> (subarctic) climate, with long, snowy winters;</li>
<li>the far north and the mountains have a <b>polar</b> climate, with tundra.</li>
</ul>
<p>Beyond the <b>Arctic Circle</b> (66°34' N) something special happens: in summer there is at least one day on which the Sun never sets (the <b>midnight sun</b>) and in winter at least one day on which it never rises (the <b>polar night</b>). On winter nights you can see the <b>northern lights</b>, light produced by particles of the solar wind hitting the atmosphere.</p>`
    },
    {
      type: `svg`,
      title: `Hours of daylight: Rome, Oslo and Tromsø`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="24" font-size="17" text-anchor="middle" font-weight="bold">Hours of daylight per day (approx.)</text>
<line x1="60" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<rect x="90" y="100" width="50" height="150" fill="#facc15"/>
<rect x="145" y="160" width="50" height="90" fill="#1e3a8a"/>
<text x="117" y="92" font-size="14" text-anchor="middle">15 h</text>
<text x="170" y="152" font-size="14" text-anchor="middle">9 h</text>
<text x="142" y="275" font-size="16" text-anchor="middle" font-weight="bold">Rome (42° N)</text>
<rect x="265" y="62" width="50" height="188" fill="#facc15"/>
<rect x="320" y="190" width="50" height="60" fill="#1e3a8a"/>
<text x="290" y="54" font-size="14" text-anchor="middle">19 h</text>
<text x="345" y="182" font-size="14" text-anchor="middle">6 h</text>
<text x="317" y="275" font-size="16" text-anchor="middle" font-weight="bold">Oslo (60° N)</text>
<rect x="440" y="10" width="50" height="240" fill="#facc15"/>
<rect x="495" y="248" width="50" height="2" fill="#1e3a8a"/>
<text x="465" y="45" font-size="14" text-anchor="middle" fill="#713f12" font-weight="bold">24 h</text>
<text x="520" y="240" font-size="14" text-anchor="middle">0 h</text>
<text x="492" y="275" font-size="16" text-anchor="middle" font-weight="bold">Tromsø (70° N)</text>
<rect x="70" y="285" width="14" height="12" fill="#facc15"/>
<text x="90" y="296" font-size="13">21 June</text>
<rect x="180" y="285" width="14" height="12" fill="#1e3a8a"/>
<text x="200" y="296" font-size="13">21 December</text>
</svg>`,
      caption: `The higher the latitude, the more extreme the difference between summer and winter. In Tromsø, beyond the Arctic Circle, the Sun does not set from about 20 May to 22 July.`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: ice and light`,
      questions: [
        { type: `mc`, q: `What is a fjord?`, options: [`An extinct volcano`, `A valley carved by a glacier and flooded by the sea`, `A salt lake`], answer: 1, explain: `First a river, then a glacier, then the sea enters the U-shaped valley.` },
        { type: `tf`, q: `Beyond the Arctic Circle, in summer, the Sun can stay above the horizon for 24 hours.`, answer: true, explain: `It is the midnight sun.` },
        { type: `mc`, q: `Why do the coasts of Norway not freeze in winter?`, options: [`Because of volcanoes`, `Because of the North Atlantic Current, which brings warm water`, `Because the water is very salty`], answer: 1, explain: `It is the continuation of the Gulf Stream.` }
      ]
    },
    {
      type: `text`,
      title: `3. The Nordic countries`,
      html: `<table>
<tr><th>Country</th><th>Capital</th><th>Inhabitants (approx.)</th><th>Area (approx.)</th><th>EU / currency</th></tr>
<tr><td><b>Norway</b></td><td>Oslo</td><td>5.6 million</td><td>385,000 km²</td><td>not EU · Norwegian krone</td></tr>
<tr><td><b>Sweden</b></td><td>Stockholm</td><td>10.5 million</td><td>450,000 km²</td><td>EU since 1995 · Swedish krona</td></tr>
<tr><td><b>Finland</b></td><td>Helsinki</td><td>5.6 million</td><td>338,000 km²</td><td>EU since 1995 · euro</td></tr>
<tr><td><b>Denmark</b></td><td>Copenhagen</td><td>6 million</td><td>43,000 km²</td><td>EU since 1973 · Danish krone</td></tr>
<tr><td><b>Iceland</b></td><td>Reykjavík</td><td>390,000</td><td>103,000 km²</td><td>not EU · Icelandic króna</td></tr>
</table>
<ul>
<li><b>Norway</b>: very long, indented coasts, fjords, fishing (salmon, cod), hydroelectric power (almost all its electricity) and above all North Sea <b>oil and gas</b>. It has twice chosen by referendum (1972 and 1994) not to join the EU.</li>
<li><b>Sweden</b>: the largest and most populous country in the region; forests (about two thirds of the territory), timber and paper, iron mines, industry (cars, telecommunications, furniture). In Stockholm the <b>Nobel Prizes</b> are awarded every 10 December (the Peace Prize in Oslo).</li>
<li><b>Finland</b>: "land of a thousand lakes" (in fact almost 188,000!), forests, technology. The Finnish language is not Indo-European: it is <b>Finno-Ugric</b>, like Hungarian and Estonian. Its school system is among the most studied in the world.</li>
<li><b>Denmark</b>: flat, with the Jutland peninsula and about 400 islands; modern farming and livestock, <b>wind power</b> (over half of its electricity), <b>Lego</b> (born in 1932). The Faroe Islands and <b>Greenland</b>, with wide autonomy, are also part of the Kingdom of Denmark.</li>
<li><b>Iceland</b>: an island on the Mid-Atlantic Ridge, where the North American and Eurasian plates are moving apart: volcanoes, geysers, hot springs. Almost all its electricity comes from <b>renewable</b> sources (hydro and geothermal).</li>
</ul>
<p>The Nordic countries are famous for the <b>welfare state</b> (high-quality schooling, healthcare and public services, funded by high taxes) and always appear at the top of quality-of-life rankings.</p>`
    },
    {
      type: `text`,
      title: `4. The British Isles: the United Kingdom and Ireland`,
      html: `<p><b>United Kingdom</b> – Capital: <b>London</b> · about 69 million inhabitants · about 244,000 km² · parliamentary monarchy · currency: <b>pound sterling</b>.</p>
<ul>
<li>It is made up of <b>four nations</b>: <b>England</b> (London), <b>Scotland</b> (Edinburgh), <b>Wales</b> (Cardiff) and <b>Northern Ireland</b> (Belfast). The full name is "United Kingdom of Great Britain and Northern Ireland".</li>
<li>Here, in the 18th century, the <b>first Industrial Revolution</b> began; in the 19th century the British Empire was the largest in the world. Today the economy is based on finance (the City of London), services, research, and the aerospace and pharmaceutical industries.</li>
<li>At <b>Greenwich</b>, in London, runs the <b>prime meridian</b>, from which longitudes and time zones are measured.</li>
<li>It left the European Union on <b>31 January 2020</b> (Brexit). Since 1994 it has been linked to France by the <b>Channel Tunnel</b> under the English Channel (about 50 km).</li>
</ul>
<p><b>Ireland</b> – Capital: <b>Dublin</b> · about 5.3 million inhabitants · about 70,000 km² · republic · euro.</p>
<ul>
<li>It occupies most of the island of Ireland (the north-east is Northern Ireland, British). It is called the <b>"Emerald Isle"</b> for its ever-green meadows, thanks to the mild, rainy climate.</li>
<li>Official languages: <b>Irish</b> (Gaelic) and English. In the EU since 1973.</li>
<li>During the <b>Great Famine</b> (1845-1849), caused by a potato disease, about a million people died and another million emigrated, mainly to the United States. Today it is a rich country, the European home of many big technology and pharmaceutical companies.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Match country and capital`,
      widget: `match`,
      options: {
        pairs: [
          [`🇳🇴 Norway`, `Oslo`],
          [`🇸🇪 Sweden`, `Stockholm`],
          [`🇫🇮 Finland`, `Helsinki`],
          [`🇩🇰 Denmark`, `Copenhagen`],
          [`🇮🇸 Iceland`, `Reykjavík`],
          [`🇬🇧 United Kingdom`, `London`],
          [`🇮🇪 Ireland`, `Dublin`]
        ]
      },
      caption: `Reykjavík (64° N) is the capital of the world's northernmost sovereign state.`
    },
    {
      type: `widget`,
      title: `In or out of the European Union?`,
      widget: `classify`,
      options: {
        groups: [`EU member`, `Not a member`],
        items: [
          [`🇸🇪 Sweden`, 0],
          [`🇫🇮 Finland`, 0],
          [`🇩🇰 Denmark`, 0],
          [`🇮🇪 Ireland`, 0],
          [`🇳🇴 Norway`, 1],
          [`🇮🇸 Iceland`, 1],
          [`🇬🇧 United Kingdom`, 1]
        ]
      },
      caption: `Norway and Iceland are not in the EU but are part of the European Economic Area and Schengen. The United Kingdom left in 2020.`
    },
    {
      type: `example`,
      title: `Practical example: why does almost everyone in Norway buy electric cars?`,
      html: `<p>In 2024 about <b>9 new cars out of 10</b> sold in Norway were fully electric: a world record. How come, in a country that sells oil?</p>
<ol>
<li>Norwegian electricity is almost all <b>hydroelectric</b> (mountains + lots of rain and snow = lots of rivers and waterfalls) and is clean and cheap.</li>
<li>For years the state removed many taxes on electric cars and raised them on petrol and diesel ones.</li>
<li>It built a dense network of charging points.</li>
</ol>
<p>It is an example of how <b>geography</b> (relief and rainfall) and <b>political choices</b> combine. Try thinking: in Italy, where electricity comes from more varied sources, would the effects be the same?</p>`
    },
    {
      type: `example`,
      title: `Practical example: from London to Edinburgh, across the United Kingdom`,
      html: `<p>By train from London to Edinburgh it takes about <b>4 and a half hours</b> for about 630 km. The landscape changes: first the plains and green hills of southern England, then the old industrial cities of the North (York, Newcastle), finally the Scottish coast.</p>
<p>In Edinburgh you will notice the signs in English, but in some parts of Scotland also in <b>Scottish Gaelic</b>; in Wales signs are always bilingual, English and <b>Welsh</b>. And remember: in the United Kingdom and Ireland people drive on the <b>left</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know… in Iceland the heating comes from the Earth?`,
      html: `<p>In Iceland about <b>9 houses out of 10</b> are heated with hot water that rises from underground, warmed by the heat of the volcanoes (<b>geothermal energy</b>). In Reykjavík, under some pavements, hot-water pipes run that melt the snow. And the word <b>geyser</b>, used all over the world, comes from the name of an Icelandic spring, <i>Geysir</i>, which means "gusher".</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know… English has words from the Vikings?`,
      html: `<p>Between the 8th and 11th centuries the <b>Vikings</b>, setting out from Norway, Denmark and Sweden, sailed as far as England, Ireland, Iceland, Greenland and even North America (around the year 1000). They also settled in England and left many words: <i>sky</i>, <i>egg</i>, <i>knife</i>, <i>window</i> (from "wind eye") and <i>Thursday</i>, the day of <b>Thor</b>! The Icelandic Althing, born in 930, is one of the oldest parliaments in the world.</p>`
    },
    {
      type: `decision`,
      title: `Norway, 1970s: you have found oil. What do you do?`,
      html: `<p>In 1969 the Ekofisk field is discovered under the North Sea: Norway, a country of fishermen and farmers, suddenly becomes rich in oil and gas. But oil will sooner or later run out, and its price rises and falls unpredictably.</p>`,
      question: `What do you do with the oil money?`,
      options: [
        { label: `We spend it all at once: lower taxes and higher wages for everyone.`, outcome: `Immediate prosperity… but when the oil price collapses or the fields run dry, the economy collapses with it. It has happened to several producing countries.` },
        { label: `We put most of the earnings into a fund invested abroad, for future generations.`, outcome: `You have to resist the temptation to spend today, but the country protects itself from crises and keeps its wealth when the oil runs out.` },
        { label: `We let foreign companies extract it and keep the profits, in return for a small rent.`, outcome: `No risk for the state, but the wealth would end up almost entirely abroad.` }
      ],
      answer: 1,
      explain: `Norway created a state oil company (today Equinor) and, from 1990, a <b>sovereign wealth fund</b> (the "oil fund"), into which it pays the oil earnings, investing them in companies all over the world. The government can use only a small part of the returns each year. Today it is the largest sovereign wealth fund in the world, worth over 1,500 billion dollars: about 300,000 dollars for every Norwegian. It is an example of managing a <b>non-renewable resource</b> with the future in mind.`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand Northern Europe`,
      intro: `If too many names and numbers confuse you, try these points of view.`,
      tabs: [
        {
          label: `🖐️ The glacier like a finger in sand`,
          html: `<p>Take a tray of wet sand and slowly drag a finger through it, pressing: you will leave a <b>U</b>-shaped groove, with a wide bottom and steep walls. Now pour in a little water: there is a fjord in miniature!</p>
<p>A river, on the other hand, digs only the bottom, like the tip of a pencil: it leaves a <b>V</b>-shaped groove. By looking at the shape of a valley, geographers can tell whether it was carved by a river or by a glacier.</p>`
        },
        {
          label: `🌍 On the globe`,
          html: `<p>Spin the globe: find the capitals, North Cape and Greenland. Notice how close Iceland is to the Arctic Circle.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 59.91, lon: 10.75, label: `Oslo`, color: `#ef4444` },
              { lat: 59.33, lon: 18.07, label: `Stockholm`, color: `#2563eb` },
              { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#0ea5e9` },
              { lat: 55.68, lon: 12.57, label: `Copenhagen`, color: `#dc2626` },
              { lat: 64.15, lon: -21.94, label: `Reykjavík`, color: `#7c3aed` },
              { lat: 51.51, lon: -0.13, label: `London`, color: `#1d4ed8` },
              { lat: 53.35, lon: -6.26, label: `Dublin`, color: `#16a34a` },
              { lat: 71.17, lon: 25.78, label: `North Cape`, color: `#f97316` },
              { lat: 72.0, lon: -40.0, label: `Greenland`, color: `#94a3b8` },
              { lat: 69.65, lon: 18.96, label: `Tromsø`, color: `#eab308` }
            ]
          }
        },
        {
          label: `🗣️ Sister languages and "foreign" languages`,
          html: `<p>Norwegian, Swedish and Danish are so similar that their speakers understand one another (with a little effort). They are <b>Germanic</b> languages like English and German. Icelandic is the most conservative: Icelanders can read the medieval sagas!</p>
<table>
<tr><th>English</th><th>Swedish</th><th>Norwegian</th><th>Danish</th><th>Finnish</th></tr>
<tr><td>thank you</td><td>tack</td><td>takk</td><td>tak</td><td>kiitos</td></tr>
<tr><td>house</td><td>hus</td><td>hus</td><td>hus</td><td>talo</td></tr>
<tr><td>water</td><td>vatten</td><td>vann</td><td>vand</td><td>vesi</td></tr>
</table>
<p><b>Finnish</b> belongs to another family (Finno-Ugric): that is why its words are so different. In the United Kingdom and Ireland, besides English, <b>Celtic</b> languages survive: Welsh, Scottish Gaelic, Irish.</p>`
        },
        {
          label: `☀️ Why isn't it dark in summer?`,
          html: `<p>The Earth's axis is <b>tilted</b> by about 23.4°. In June the North Pole is "bent" towards the Sun: as the Earth spins, the area near the pole always stays in the lit part, like a person sitting near the centre of a merry-go-round next to a lamp. In December the opposite happens: that area stays in darkness all the time.</p>
<p>The Arctic Circle (66°34' N) is precisely the limit beyond which this happens at least one day a year: 90° − 23.4° ≈ 66.6°.</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Map of Northern Europe`,
      nodes: [
        { id: `latitudine`, label: `High latitude`, x: 50, y: 6, color: `#1e3a8a`, html: `The region runs from about 50° to over 71° north latitude.`, why: `The closer you get to the pole, the more slanting the Sun's rays are and the less they warm; and because of the tilt of the Earth's axis the hours of daylight vary enormously between summer and winter.` },
        { id: `luce`, label: `Midnight sun and polar night`, x: 18, y: 22, color: `#eab308`, html: `Beyond the Arctic Circle the Sun does not set in summer and does not rise in winter for at least one day.`, why: `The Earth's axis is tilted by about 23.4°: 90° − 23.4° gives the latitude of the Arctic Circle (66°34').` },
        { id: `corrente`, label: `North Atlantic Current`, x: 82, y: 22, color: `#0ea5e9`, html: `Warm waters that make the climate milder than expected.`, why: `It is the continuation of the Gulf Stream, which begins in the Caribbean; westerly winds push mild, damp air onto the coasts.` },
        { id: `ghiaccio`, label: `Ice ages`, x: 50, y: 35, color: `#7dd3fc`, html: `An ice sheet covered the region until about 11,700 years ago.`, why: `Cyclical changes in the Earth's orbit (Milankovitch cycles) have alternated cold and warm periods over the last 2.6 million years.` },
        { id: `fiordi`, label: `Fjords and lakes`, x: 18, y: 55, color: `#2563eb`, html: `Fjords in Norway, lakes in Finland and Sweden.`, why: `The ice carved U-shaped valleys and hollows in the rock; when it melted, the sea flooded the coastal valleys and fresh water filled the inland hollows.` },
        { id: `vulcani`, label: `Volcanoes of Iceland`, x: 82, y: 50, color: `#dc2626`, html: `Volcanoes, geysers and hot springs.`, why: `Iceland stands on the Mid-Atlantic Ridge, where two plates move apart by about 2 cm a year and magma rises; beneath it there is also a mantle "hot spot".` },
        { id: `energia`, label: `Energy and resources`, x: 50, y: 70, color: `#16a34a`, html: `Oil and gas (North Sea), hydro, wind, geothermal, forests, fishing.`, why: `Rainy mountains give hydroelectric energy; Atlantic winds give wind power; volcanoes give geothermal; the sediments under the North Sea formed oil and gas.` },
        { id: `vichinghi`, label: `Vikings and navigators`, x: 18, y: 88, color: `#a16207`, html: `Seafaring peoples from the Middle Ages to the British Empire.`, why: `Poor lands and very long coasts pushed people towards the sea: the Vikings reached America around 1000; England, an island, built the most powerful fleet in the world.` },
        { id: `welfare`, label: `Prosperity and the welfare state`, x: 82, y: 85, color: `#a855f7`, html: `High incomes, strong public services, high quality of life.`, why: `Small, educated populations, natural resources managed by the state and a strong social agreement between workers and businesses have made it possible to fund schools, healthcare and pensions with high taxes.` }
      ],
      edges: [
        [`latitudine`, `luce`, `causes`],
        [`latitudine`, `ghiaccio`, `favours`],
        [`corrente`, `latitudine`, `softens the cold of`],
        [`ghiaccio`, `fiordi`, `carves`],
        [`vulcani`, `energia`, `geothermal`],
        [`fiordi`, `energia`, `hydroelectric`],
        [`energia`, `welfare`, `funds`],
        [`corrente`, `vichinghi`, `navigable seas`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: the Northern countries`,
      questions: [
        { type: `text`, q: `What is the capital of Sweden?`, answer: [`stockholm`, `stoccolma`], explain: `Stockholm, built on 14 islands.` },
        { type: `mc`, q: `What are the four nations of the United Kingdom?`, options: [`England, Scotland, Wales, Northern Ireland`, `England, Ireland, Iceland, Wales`, `London, Edinburgh, Cardiff, Dublin`], answer: 0, explain: `Ireland (with capital Dublin) is an independent state.` },
        { type: `tf`, q: `Finland uses the euro.`, answer: true, explain: `It is the only Nordic country to have adopted it.` }
      ]
    }
  ],
  glossary: [
    { t: `Fjord`, d: `A long, narrow, deep inlet: a glacial valley flooded by the sea.` },
    { t: `Ice age`, d: `A cold period in which glaciers expand and cover vast regions.` },
    { t: `Arctic Circle`, d: `The parallel at 66°34' N beyond which the midnight sun and the polar night occur.` },
    { t: `Midnight sun`, d: `The phenomenon whereby, in summer, at high latitudes the Sun stays above the horizon for 24 hours.` },
    { t: `Northern lights`, d: `Coloured lights in the polar night sky, produced by particles of the solar wind.` },
    { t: `Geothermal energy`, d: `Energy obtained from the Earth's internal heat.` },
    { t: `Sovereign wealth fund`, d: `An investment fund owned by a state, like the Norwegian one fed by oil.` },
    { t: `Welfare state`, d: `A system in which the state guarantees citizens services such as healthcare, schooling, pensions and benefits.` },
    { t: `Nordic countries`, d: `Norway, Sweden, Finland, Denmark and Iceland.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which countries make up the Scandinavian Peninsula?`, options: [`Norway and Sweden`, `Denmark and Iceland`, `Finland and Ireland`], answer: 0, explain: `Denmark occupies Jutland; Iceland is an island.` },
      { type: `order`, q: `Put the stages of the formation of a fjord in order.`, items: [`A river carves a V-shaped valley`, `A glacier occupies the valley and widens it into a U`, `The ice melts`, `The sea floods the valley`], explain: `River, glacier, melting, sea.` },
      { type: `mc`, q: `Which country is called the "land of a thousand lakes"?`, options: [`Norway`, `Finland`, `Denmark`], answer: 1, explain: `In fact Finland has about 188,000 lakes.` },
      { type: `text`, q: `What is the capital of Iceland?`, answer: [`reykjavik`, `reykjavík`], explain: `Reykjavík, the northernmost capital of a sovereign state.` },
      { type: `tf`, q: `Norway is part of the European Union.`, answer: false, explain: `In two referendums (1972 and 1994) Norwegians said no.` },
      { type: `mc`, q: `Where does most of Norway's electricity come from?`, options: [`From coal`, `From hydroelectric power stations`, `From nuclear power`], answer: 1, explain: `Mountains and plenty of rainfall: rivers and waterfalls everywhere.` },
      { type: `num`, q: `At roughly what latitude (in degrees) is the Arctic Circle?`, answer: 66.6, tol: 0.5, unit: `° N`, explain: `66°34' N, that is about 66.6°: 90° minus the tilt of the axis (23.4°).` },
      { type: `mc`, q: `Why does Iceland have so many volcanoes?`, options: [`Because it is near the pole`, `Because it lies on the Mid-Atlantic Ridge, where two plates move apart`, `Because it is small`], answer: 1, explain: `Magma rises where the plates separate.` },
      { type: `mc`, q: `Which language is NOT Germanic?`, options: [`Swedish`, `Danish`, `Finnish`], answer: 2, explain: `Finnish is a Finno-Ugric language.` },
      { type: `text`, q: `What is the prime meridian that passes through London called?`, answer: [`greenwich`, `greenwich meridian`, `meridiano di greenwich`], explain: `The Greenwich meridian.` },
      { type: `num`, q: `In what year did the United Kingdom leave the European Union?`, answer: 2020, explain: `On 31 January 2020 (Brexit).` },
      { type: `mc`, q: `What caused the Great Irish Famine (1845-1849)?`, options: [`A war`, `A potato disease`, `A volcanic eruption`], answer: 1, explain: `Potato blight destroyed the potato crops, the staple food of the peasants.` }
    ]
  }
});
