TOPIC('en', {
  id: `m2-geo-europa-mediterranea`,
  title: `Mediterranean and Balkan Europe`,
  intro: `Across from Italy, on the other shore of the Adriatic and Ionian Seas, stretches the <b>Balkan Peninsula</b>: rugged mountains, coasts full of islands, crystal-clear seas. Here are <b>Greece</b>, the cradle of Western civilisation, <b>Croatia</b> with its thousand islands, and the other states of the <b>Balkans</b>, born largely from the break-up of Yugoslavia. A region very close to us, rich in history, peoples and different languages.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. The Balkan Peninsula: mountains and seas`,
      html: `<p>The <b>Balkan Peninsula</b> is the easternmost of the three great peninsulas of Mediterranean Europe (Iberian, Italian, Balkan). It is washed by four seas: the <b>Adriatic</b>, the <b>Ionian</b>, the <b>Aegean</b> and the <b>Black Sea</b>. In the north its border is usually taken to be the Sava and Danube rivers.</p>
<p>The name comes from the <b>Balkan Mountains</b>, in Bulgaria: in Turkish <i>balkan</i> means "chain of wooded mountains". The peninsula is indeed very <b>mountainous</b>:</p>
<ul>
<li>along the Adriatic run the <b>Dinaric Alps</b>, limestone mountains that drop steeply to the sea;</li>
<li>in the centre and east the <b>Balkans</b> and the <b>Rhodopes</b>; the highest peak is <b>Musala</b> (2,925 m) in Bulgaria;</li>
<li>in the south the mountains of Greece, with <b>Olympus</b> (2,918 m), the "home of the gods".</li>
</ul>
<p><b>Climate</b>: <b>Mediterranean</b> on the coasts (hot, dry summers, mild, rainy winters), <b>continental</b> inland, where the mountains block the influence of the sea. On the Adriatic coast the <b>bora</b> often blows, a cold, violent wind that comes down from the mountains.</p>`
    },
    {
      type: `svg`,
      title: `The Balkan Peninsula and its seas (diagram)`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#7dd3fc"/>
<polygon points="40,20 600,20 600,110 520,110 500,150 470,180 440,175 430,210 455,240 420,260 400,300 360,320 330,290 300,250 270,215 230,180 180,140 130,95 80,60 40,50" fill="#bef264" stroke="#3f6212" stroke-width="3"/>
<polygon points="350,328 410,322 420,336 345,338" fill="#bef264" stroke="#3f6212" stroke-width="2"/>
<text x="385" y="318" font-size="12" text-anchor="middle">Crete</text>
<path d="M60 50 L200 160" stroke="#a16207" stroke-width="10" stroke-linecap="round" fill="none"/>
<text x="150" y="98" font-size="13" fill="#713f12" font-weight="bold" transform="rotate(38 150 98)">Dinaric Alps</text>
<text x="400" y="80" font-size="14" text-anchor="middle" font-weight="bold" fill="#3f6212">Danube and Sava (northern border)</text>
<path d="M120 40 C250 60 400 50 560 70" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="110" y="190" font-size="17" font-weight="bold" fill="#1e3a8a">Adriatic Sea</text>
<text x="180" y="290" font-size="17" font-weight="bold" fill="#1e3a8a">Ionian Sea</text>
<text x="500" y="250" font-size="17" font-weight="bold" fill="#1e3a8a">Aegean Sea</text>
<text x="555" y="140" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Black Sea</text>
<text x="330" y="150" font-size="18" text-anchor="middle" font-weight="bold" fill="#365314">BALKANS</text>
<text x="340" y="250" font-size="14" text-anchor="middle" fill="#365314">Greece</text>
<text x="495" y="182" font-size="12" fill="#7f1d1d">Bosphorus</text>
</svg>`,
      caption: `A simplified diagram, not to scale. The mountains near the Adriatic separate the coast from the interior: that is why the climates are so different.`
    },
    {
      type: `3d`,
      title: `The landscapes of the eastern Mediterranean in 3D`,
      scene: `terrain`,
      caption: `Rotate and touch the parts: each one has a real example in Greece or the Balkans.`,
      options: {
        features: {
          peninsula: { label: `Peninsula`, html: `The <b>Peloponnese</b>, in southern Greece, and the <b>Balkan Peninsula</b> itself. <b>Istria</b> (Croatia and Slovenia) is a peninsula too.` },
          isthmus: { label: `Isthmus`, html: `The <b>Isthmus of Corinth</b> joined the Peloponnese to the rest of Greece; in 1893 it was cut by a canal just over 20 m wide and 6.4 km long.` },
          island: { label: `Island`, html: `<b>Crete</b> is the largest island in Greece (about 8,300 km²), home to the ancient Minoan civilisation.` },
          archipelago: { label: `Archipelago`, html: `The <b>Cyclades</b> in Greece and the islands of <b>Dalmatia</b> in Croatia: hundreds of islands and rocks.` },
          strait: { label: `Strait`, html: `The <b>Bosphorus</b> and the <b>Dardanelles</b> link the Black Sea to the Aegean; the <b>Strait of Otranto</b> separates Italy from Albania (about 72 km).` },
          gulf: { label: `Gulf`, html: `The <b>Gulf of Corinth</b> almost completely separates the Peloponnese from mainland Greece.` },
          bay: { label: `Bay`, html: `The <b>Bay of Kotor</b> in Montenegro: a deep, winding inlet between steep mountains, which looks like a fjord.` },
          mountain: { label: `Mountain range`, html: `The limestone <b>Dinaric Alps</b> run along the whole Adriatic coast from Slovenia to Albania.` },
          peak: { label: `Peak`, html: `<b>Olympus</b> (2,918 m), the highest mountain in Greece, where according to myth Zeus and the other gods lived.` },
          volcano: { label: `Volcano`, html: `<b>Santorini</b> is what remains of a volcano that exploded about 3,600 years ago: its caldera is now a sea lagoon surrounded by cliffs.` },
          lake: { label: `Lake`, html: `<b>Lake Ohrid</b>, between North Macedonia and Albania, is one of the oldest lakes in Europe (over a million years). In Croatia there are the 16 <b>Plitvice lakes</b>, linked by waterfalls.` },
          beach: { label: `Beach`, html: `The beaches of Greece and Croatia attract tens of millions of tourists every year, a great many of them Italian.` },
          coast: { label: `Coast`, html: `The coastline of <b>Greece</b>, with its islands, is about 13,700 km long: one of the longest in Europe.` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Greece`,
      html: `<p><b>Capital</b>: Athens · <b>Inhabitants</b>: about 10.4 million · <b>Area</b>: about 132,000 km² · <b>Form of government</b>: parliamentary republic · <b>EU</b> since 1981, euro since 2001.</p>
<ul>
<li>About <b>80%</b> of the territory is mountainous; the rest is made up of small coastal plains and <b>islands</b>: about 6,000 islands and islets, of which just over 200 are inhabited (Crete, Euboea, Rhodes, Corfu, the Cyclades…).</li>
<li>No point in Greece is more than about 140 km from the sea. That is why the Greeks have always been a seafaring people: today Greek shipowners own the <b>largest merchant fleet in the world</b>.</li>
<li><b>Economy</b>: tourism (about 3 tourists for every inhabitant every year), shipping, agriculture (olives and olive oil, grapes, citrus fruit, cotton), feta cheese.</li>
<li>Ancient Greece left us <b>democracy</b>, philosophy, theatre, the Olympic Games and thousands of English words. Famous monuments: the <b>Acropolis</b> of Athens with the Parthenon, Delphi, Olympia, the palace of Knossos on Crete.</li>
<li>It is one of the most <b>seismic</b> areas in Europe: there the African plate slides under the Eurasian one.</li>
</ul>`
    },
    {
      type: `text`,
      title: `3. Croatia and Slovenia`,
      html: `<p><b>Croatia</b> – Capital: <b>Zagreb</b> · about 3.8 million inhabitants · about 56,600 km² · parliamentary republic.</p>
<ul>
<li>It has a curious "crescent" shape: a mainland, flat part in the north (towards the Danube) and a long coastal strip, <b>Dalmatia</b>, plus <b>Istria</b>.</li>
<li>Off the coast there are more than <b>1,200</b> islands, islets and rocks (the largest are Krk and Cres).</li>
<li>Historic towns: <b>Dubrovnik</b> (the old Republic of Ragusa), <b>Split</b> (built inside the palace of the Roman emperor Diocletian), Pula with its Roman arena. In Istria there lives an Italian-speaking minority.</li>
<li>It joined the EU in <b>2013</b>; since 1 January <b>2023</b> it has used the <b>euro</b> and is in the Schengen area. Economy: tourism, shipyards, agriculture.</li>
</ul>
<p><b>Slovenia</b> – Capital: <b>Ljubljana</b> · about 2.1 million inhabitants · about 20,300 km². It borders Italy (Friuli Venezia Giulia); it has a short stretch of coast (Koper, Piran). Highest peak: <b>Triglav</b> (2,864 m). It is famous for the caves of the <b>Karst</b>, such as those at Postojna. In the EU since 2004, euro since 2007.</p>`
    },
    {
      type: `quiz`,
      title: `Mini-quiz: Greece and Croatia`,
      questions: [
        { type: `mc`, q: `What is the largest island in Greece?`, options: [`Rhodes`, `Crete`, `Corfu`], answer: 1, explain: `Crete, about 8,300 km².` },
        { type: `text`, q: `What is the capital of Croatia?`, answer: [`zagreb`, `zagabria`], explain: `Zagreb.` },
        { type: `tf`, q: `Croatia has used the euro since 2023.`, answer: true, explain: `Since 1 January 2023, when it also joined the Schengen area.` }
      ]
    },
    {
      type: `text`,
      title: `4. The other states of the Balkans`,
      html: `<p>From 1918 to 1991 most of the western Balkans formed a single state, <b>Yugoslavia</b> ("land of the South Slavs"). After the death of Marshal Tito (1980) tensions grew between the different peoples; between <b>1991</b> and 2001 Yugoslavia broke up through a series of very bloody <b>wars</b>. The worst was in <b>Bosnia and Herzegovina</b> (1992-95), with the siege of Sarajevo and the genocide at <b>Srebrenica</b> (July 1995), where about 8,000 Bosnian Muslim men and boys were killed. Today those places are memorials and the region is working for reconciliation.</p>
<table>
<tr><th>State</th><th>Capital</th><th>Good to know</th></tr>
<tr><td><b>Bosnia and Herzegovina</b></td><td>Sarajevo</td><td>The bridge of Mostar (1566), destroyed in 1993 and rebuilt in 2004. In Sarajevo in 1914 the assassination that set off the First World War.</td></tr>
<tr><td><b>Serbia</b></td><td>Belgrade</td><td>Belgrade stands where the Sava flows into the Danube. Both the Cyrillic and the Latin alphabets are used.</td></tr>
<tr><td><b>Montenegro</b></td><td>Podgorica</td><td>Uses the euro although it is not in the EU. Bay of Kotor.</td></tr>
<tr><td><b>Albania</b></td><td>Tirana</td><td>Albanian is an Indo-European language with no "sisters". In Italy there have been Arbëreshë communities, of Albanian origin, for centuries.</td></tr>
<tr><td><b>North Macedonia</b></td><td>Skopje</td><td>Lake Ohrid; changed its name in 2019.</td></tr>
<tr><td><b>Kosovo</b></td><td>Pristina</td><td>Declared independence in 2008; Serbia and several other states do not recognise it.</td></tr>
<tr><td><b>Bulgaria</b></td><td>Sofia</td><td>In the EU since 2007, in the euro since 2026. Famous for rose oil.</td></tr>
</table>
<p>Albania, Bosnia and Herzegovina, North Macedonia, Montenegro and Serbia are <b>candidate countries</b> for joining the EU. In the Mediterranean two island states are also in the EU: <b>Malta</b> (the smallest state in the EU) and <b>Cyprus</b>.</p>`
    },
    {
      type: `widget`,
      title: `Match country and capital`,
      widget: `match`,
      options: {
        pairs: [
          [`🇬🇷 Greece`, `Athens`],
          [`🇭🇷 Croatia`, `Zagreb`],
          [`🇸🇮 Slovenia`, `Ljubljana`],
          [`🇧🇦 Bosnia and Herzegovina`, `Sarajevo`],
          [`🇷🇸 Serbia`, `Belgrade`],
          [`🇦🇱 Albania`, `Tirana`],
          [`🇧🇬 Bulgaria`, `Sofia`],
          [`🇲🇰 North Macedonia`, `Skopje`]
        ]
      },
      caption: `Eight states, eight capitals: some are very close to Italy as the crow flies (Tirana is about 200 km from Apulia).`
    },
    {
      type: `widget`,
      title: `In the EU or a candidate?`,
      widget: `classify`,
      options: {
        groups: [`EU member`, `Candidate country`],
        items: [
          [`🇬🇷 Greece`, 0],
          [`🇭🇷 Croatia`, 0],
          [`🇸🇮 Slovenia`, 0],
          [`🇧🇬 Bulgaria`, 0],
          [`🇲🇹 Malta`, 0],
          [`🇨🇾 Cyprus`, 0],
          [`🇦🇱 Albania`, 1],
          [`🇷🇸 Serbia`, 1],
          [`🇲🇪 Montenegro`, 1],
          [`🇲🇰 North Macedonia`, 1],
          [`🇧🇦 Bosnia and Herzegovina`, 1]
        ]
      },
      caption: `To join the EU a country must respect democracy, human rights and the rule of law, and adapt thousands of laws.`
    },
    {
      type: `svg`,
      title: `Karst: water carving the rock`,
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="90" width="600" height="230" fill="#d6d3d1"/>
<path d="M0 90 L150 90 Q190 135 230 90 L600 90" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>
<text x="190" y="80" font-size="15" text-anchor="middle" font-weight="bold">sinkhole</text>
<line x1="80" y1="20" x2="70" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="110" y1="20" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
<line x1="140" y1="20" x2="130" y2="55" stroke="#2563eb" stroke-width="3"/>
<text x="110" y="15" font-size="14" text-anchor="middle" fill="#1d4ed8">rain (with CO₂)</text>
<path d="M190 120 L200 170 L230 200" stroke="#2563eb" stroke-width="5" fill="none"/>
<ellipse cx="350" cy="225" rx="170" ry="55" fill="#57534e"/>
<polygon points="250,180 258,210 266,180" fill="#e7e5e4"/>
<polygon points="300,172 308,215 316,172" fill="#e7e5e4"/>
<polygon points="400,175 408,205 416,175" fill="#e7e5e4"/>
<polygon points="440,272 448,240 456,272" fill="#e7e5e4"/>
<polygon points="330,278 338,250 346,278" fill="#e7e5e4"/>
<path d="M190 255 Q350 285 520 250" stroke="#3b82f6" stroke-width="7" fill="none"/>
<text x="350" y="230" font-size="16" text-anchor="middle" font-weight="bold" fill="#ffffff">CAVE</text>
<text x="545" y="190" font-size="13" text-anchor="middle">stalactites</text>
<text x="545" y="206" font-size="13" text-anchor="middle">(from above)</text>
<text x="545" y="290" font-size="13" text-anchor="middle">stalagmites (from below)</text>
<text x="200" y="305" font-size="13" text-anchor="middle" fill="#1d4ed8">underground river</text>
<text x="450" y="120" font-size="15" text-anchor="middle" fill="#44403c">limestone rock</text>
</svg>`,
      caption: `Rainwater, slightly acidic, dissolves limestone: on the surface hollows form (sinkholes), underground caves and rivers. The phenomenon is named after the Karst, between Italy and Slovenia.`
    },
    {
      type: `example`,
      title: `Practical example: by ferry from Italy to the Balkans`,
      html: `<p>From the ports of the Adriatic, ferries leave every day for the other shore:</p>
<table>
<tr><th>Departure</th><th>Arrival</th><th>Approximate duration</th></tr>
<tr><td>Ancona</td><td>Split (Croatia)</td><td>about 10-11 hours (overnight)</td></tr>
<tr><td>Bari</td><td>Durrës (Albania)</td><td>about 9 hours</td></tr>
<tr><td>Brindisi</td><td>Igoumenitsa (Greece)</td><td>about 8 hours</td></tr>
<tr><td>Ancona / Bari</td><td>Patras (Greece)</td><td>about 16-22 hours</td></tr>
</table>
<p>On a map, measure with a ruler the distance Bari-Durrës: about 200 km as the crow flies. If the ferry travels at about 22 knots (about 40 km/h), how many hours does it take in theory? (200 ÷ 40 = 5 hours: the rest of the time is for manoeuvres, loading and a lower average speed.)</p>`
    },
    {
      type: `example`,
      title: `Practical example: you speak Greek without knowing it!`,
      html: `<p>A great many English words, especially scientific ones, come from ancient Greek. Try breaking them down:</p>
<ul>
<li><b>geo-graphy</b> = earth + writing (a description of the Earth);</li>
<li><b>demo-cracy</b> = people + power;</li>
<li><b>archipelago</b> = main sea (it was the name of the Aegean, full of islands);</li>
<li><b>tele-phone</b> = far + voice;</li>
<li><b>Mediterranean</b>, on the other hand, is Latin: "in the middle of the lands".</li>
</ul>
<p>Use the cards below to practise.</p>`
    },
    {
      type: `widget`,
      title: `Flashcards: Greek words in English`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🌍 geo-`, back: `earth (geography, geology)` },
          { front: `👥 demo-`, back: `people (democracy, demography)` },
          { front: `📞 tele-`, back: `far (telephone, television)` },
          { front: `🏙️ polis`, back: `city (metropolis, politics)` },
          { front: `📖 -logia`, back: `study, discourse (biology, zoology)` },
          { front: `🔊 phonè`, back: `voice, sound (telephone, microphone)` },
          { front: `🌊 pelagos`, back: `sea (archipelago, pelagic)` }
        ]
      },
      caption: `Flip the cards: guess the meaning before looking at the back.`
    },
    {
      type: `curiosity`,
      title: `Did you know… the cravat comes from Croatia?`,
      html: `<p>In the 17th century Croatian soldiers in the service of the King of France wore a knotted scarf around their necks. The Parisians liked it very much and called it <i>à la croate</i>, "in the Croatian style": hence the word <b>cravat</b>. On 18 October Croatia celebrates Cravat Day. And the Dalmatian, the dog with white and black spots, takes its name from Dalmatia itself!</p>`
    },
    {
      type: `curiosity`,
      title: `Did you know… in Bulgaria "yes" and "no" are done the other way round?`,
      html: `<p>In Bulgaria (and partly in Albania and North Macedonia) traditionally people <b>shake their head</b> from side to side to say <b>yes</b> and nod up and down to say <b>no</b>. Many Bulgarians today also use the "international" gestures, so… it is better to ask out loud! And the Cyrillic alphabet developed precisely in the schools of the First Bulgarian Empire, in the 9th-10th century.</p>`
    },
    {
      type: `decision`,
      title: `2018: Greece and Macedonia, a quarrel over a name`,
      html: `<p>Since 1991 a small Balkan state has been called the "Republic of Macedonia". But <b>Macedonia</b> is also the name of a large region of Greece, the land of Alexander the Great. Greece fears claims on its territory and its history, and for this reason blocks its neighbour's entry into NATO and the negotiations with the EU. You are one of the negotiators.</p>`,
      question: `What solution do you propose?`,
      options: [
        { label: `The neighbouring state must give up the word "Macedonia" entirely.`, outcome: `For its inhabitants, who have been called Macedonians for generations and speak the Macedonian language, this would be unacceptable: no government could sign it.` },
        { label: `A name with a geographical adjective that distinguishes it from the Greek region, plus mutual guarantees.`, outcome: `Both sides have to give up something and nationalists in both countries will protest. But a quarrel that has lasted 27 years is unblocked.` },
        { label: `We leave things as they are.`, outcome: `The block would continue: no NATO, no EU, tense relations between neighbours.` }
      ],
      answer: 1,
      explain: `With the <b>Prespa Agreement</b> (June 2018, named after the lake on the border between the two countries), Greece's neighbour took the name <b>Republic of North Macedonia</b> (in force from 2019), making clear it has no links with the ancient Macedonia of Alexander the Great; Greece lifted its veto. In 2020 North Macedonia joined NATO. The two prime ministers received various international awards: it is an example of how diplomacy can resolve conflicts linked to geography and identity.`
    },
    {
      type: `alternatives`,
      title: `Other ways to understand the Balkans`,
      intro: `A complex region: here are other keys to understanding it.`,
      tabs: [
        {
          label: `🧩 Yugoslavia like a mosaic`,
          html: `<p>Imagine a mosaic made of tiles of different colours, held together by a frame. The tiles were the peoples (Slovenes, Croats, Serbs, Bosnians, Montenegrins, Macedonians, Albanians of Kosovo…), with different languages, religions (Catholic, Orthodox, Muslim) and histories. The frame was the Yugoslav state led by Tito. When the frame broke, the tiles came apart, sadly with a great deal of violence.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f8fafc"/>
<rect x="20" y="20" width="250" height="160" fill="none" stroke="#334155" stroke-width="6"/>
<rect x="30" y="30" width="70" height="60" fill="#60a5fa"/>
<rect x="100" y="30" width="80" height="60" fill="#f87171"/>
<rect x="180" y="30" width="80" height="60" fill="#fbbf24"/>
<rect x="30" y="90" width="80" height="80" fill="#34d399"/>
<rect x="110" y="90" width="70" height="80" fill="#a78bfa"/>
<rect x="180" y="90" width="80" height="80" fill="#f472b6"/>
<text x="145" y="198" font-size="14" text-anchor="middle">Yugoslavia (until 1991)</text>
<text x="300" y="105" font-size="30" text-anchor="middle">→</text>
<rect x="340" y="25" width="60" height="50" fill="#60a5fa"/>
<rect x="420" y="20" width="65" height="50" fill="#f87171"/>
<rect x="505" y="30" width="65" height="50" fill="#fbbf24"/>
<rect x="345" y="105" width="65" height="60" fill="#34d399"/>
<rect x="430" y="110" width="60" height="60" fill="#a78bfa"/>
<rect x="510" y="115" width="60" height="55" fill="#f472b6"/>
<text x="455" y="198" font-size="14" text-anchor="middle">7 states today (with Kosovo)</text>
</svg>`
        },
        {
          label: `🍬 Karst with sugar`,
          html: `<p>Try an experiment: build a small tower with <b>sugar cubes</b> (they stand for limestone) and slowly pour a few drops of water on it with a dropper. You will see that the water "carves" channels and holes and the tower crumbles where the water passes.</p>
<p>Limestone dissolves much more slowly than sugar (it takes thousands of years), but the principle is the same: rainwater, made slightly acidic by carbon dioxide, dissolves the rock and creates sinkholes, caves and rivers that vanish underground. That is why on the Dalmatian coast and on the Karst there are few rivers on the surface.</p>`
        },
        {
          label: `🌍 On the globe`,
          html: `<p>Spin the globe and find the capitals and famous places of the region. Notice how close they are to Italy!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 37.98, lon: 23.73, label: `Athens`, color: `#2563eb` },
              { lat: 45.81, lon: 15.98, label: `Zagreb`, color: `#ef4444` },
              { lat: 42.65, lon: 18.09, label: `Dubrovnik`, color: `#f97316` },
              { lat: 43.86, lon: 18.41, label: `Sarajevo`, color: `#eab308` },
              { lat: 44.82, lon: 20.46, label: `Belgrade`, color: `#a855f7` },
              { lat: 41.33, lon: 19.82, label: `Tirana`, color: `#dc2626` },
              { lat: 42.7, lon: 23.32, label: `Sofia`, color: `#16a34a` },
              { lat: 40.09, lon: 22.36, label: `Mount Olympus`, color: `#64748b` },
              { lat: 36.4, lon: 25.43, label: `Santorini`, color: `#f97316` },
              { lat: 41.11, lon: 16.87, label: `Bari (Italy)`, color: `#0ea5e9` }
            ]
          }
        },
        {
          label: `📐 Compare with Italy`,
          html: `<table>
<tr><th></th><th>Greece</th><th>Italy</th></tr>
<tr><td>Area</td><td>132,000 km²</td><td>302,000 km²</td></tr>
<tr><td>Inhabitants</td><td>10.4 million</td><td>59 million</td></tr>
<tr><td>Islands</td><td>about 6,000 (about 200 inhabited)</td><td>about 800 (about 80 inhabited)</td></tr>
<tr><td>Highest peak</td><td>Olympus 2,918 m</td><td>Mont Blanc 4,806 m</td></tr>
<tr><td>Famous active volcanoes</td><td>Santorini</td><td>Etna, Vesuvius, Stromboli</td></tr>
<tr><td>Coastal climate</td><td>Mediterranean</td><td>Mediterranean</td></tr>
</table>
<p>Greece and Italy are two "sister" peninsulas: the same sea, the same climate, many earthquakes, a long shared history (Magna Graecia in southern Italy).</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Map of Mediterranean and Balkan Europe`,
      nodes: [
        { id: `placche`, label: `Collision of plates`, x: 50, y: 6, color: `#7c3aed`, html: `The African plate pushes against the Eurasian one.`, why: `This very slow movement (a few cm a year) raised the mountains of the region and still causes earthquakes and volcanoes, as in Greece and at Santorini.` },
        { id: `montagne`, label: `Limestone mountains`, x: 20, y: 25, color: `#a16207`, html: `Dinaric Alps, Balkans, Pindus: the peninsula is largely mountainous.`, why: `Limestone rocks formed on the floor of ancient seas from the shells and skeletons of marine organisms; then the collision of the plates raised them.` },
        { id: `carsismo`, label: `Karst`, x: 20, y: 55, color: `#57534e`, html: `Caves, sinkholes, underground rivers.`, why: `Rainwater, made acidic by carbon dioxide, dissolves limestone. The name comes from the Karst (Kras), between Trieste and Slovenia, where the phenomenon was first studied.` },
        { id: `coste`, label: `Coasts and islands`, x: 80, y: 25, color: `#0ea5e9`, html: `Indented coasts and thousands of islands in Greece and Croatia.`, why: `At the end of the last ice age the sea level rose by over 100 m and flooded the valleys between the coastal mountains: the peaks left above water became islands.` },
        { id: `clima`, label: `Mediterranean and continental climate`, x: 50, y: 40, color: `#eab308`, html: `Hot and dry on the coasts, cold in winter inland.`, why: `The mountains running parallel to the coast stop the sea's influence: a few km away the climate changes a great deal.` },
        { id: `turismo`, label: `Tourism and the sea`, x: 80, y: 55, color: `#f97316`, html: `Tourism, shipping and fishing are key activities.`, why: `Clear seas, sunny weather and historical heritage attract tens of millions of visitors; long coastlines have always pushed peoples to sail.` },
        { id: `popoli`, label: `Many peoples and religions`, x: 50, y: 70, color: `#a855f7`, html: `Greeks, South Slavs, Albanians; Orthodox, Catholics, Muslims.`, why: `The peninsula has been a crossroads: Greeks, Romans, Byzantines, Slavs (from the 6th-7th century), Venetians, Ottomans (for nearly 500 years) and Habsburgs left different languages, religions and cultures there.` },
        { id: `jugoslavia`, label: `Yugoslavia and wars`, x: 25, y: 90, color: `#7f1d1d`, html: `A united state (1918-1991), then dissolution and the wars of the 1990s.`, why: `After the end of the great empires there was an attempt to unite the South Slavs; the economic crisis and nationalism of the 1980s-90s led to violent division.` },
        { id: `ue`, label: `Towards a united Europe`, x: 75, y: 90, color: `#1d4ed8`, html: `Greece, Slovenia, Croatia, Bulgaria in the EU; other states are candidates.`, why: `Joining the EU is seen as a guarantee of peace, democracy and development; it requires reforms and the settlement of disputes between neighbours, as the Prespa Agreement shows.` }
      ],
      edges: [
        [`placche`, `montagne`, `raise the`],
        [`montagne`, `carsismo`, `of limestone → `],
        [`placche`, `coste`, `with the rising sea →`],
        [`montagne`, `clima`, `separate coast and interior`],
        [`coste`, `turismo`, `attract`],
        [`montagne`, `popoli`, `isolated valleys`],
        [`popoli`, `jugoslavia`, `united and then divided`],
        [`jugoslavia`, `ue`, `from war to integration`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-quiz: the Balkans`,
      questions: [
        { type: `mc`, q: `Where does the name "Balkans" come from?`, options: [`An ancient king`, `The Balkan Mountains: in Turkish "chain of wooded mountains"`, `A river`], answer: 1, explain: `The Balkan Mountains are in Bulgaria.` },
        { type: `mc`, q: `What causes karst?`, options: [`Wind smoothing the rocks`, `Water dissolving limestone and forming caves and sinkholes`, `Volcanoes`], answer: 1, explain: `It is named after the Karst, between Italy and Slovenia.` },
        { type: `text`, q: `What is the capital of Serbia?`, answer: [`belgrade`, `beograd`, `belgrado`], explain: `Belgrade, where the Sava and the Danube meet.` }
      ]
    }
  ],
  glossary: [
    { t: `Balkan Peninsula`, d: `A peninsula of south-eastern Europe between the Adriatic, Ionian, Aegean and Black Seas.` },
    { t: `Dinaric Alps`, d: `A limestone mountain range that runs along the eastern coast of the Adriatic.` },
    { t: `Karst`, d: `All the phenomena produced by water dissolving limestone rocks (caves, sinkholes, underground rivers).` },
    { t: `Sinkhole`, d: `A funnel-shaped hollow created by karst processes.` },
    { t: `Bora`, d: `A cold, violent wind that blows from the north-east over the Adriatic.` },
    { t: `Isthmus`, d: `A narrow strip of land that joins two landmasses and separates two seas, like the one at Corinth.` },
    { t: `Yugoslavia`, d: `The state of the South Slavs that existed from 1918 to 1991-92, then divided into several states.` },
    { t: `Caldera`, d: `A large hollow formed by the collapse of a volcano after an eruption, as at Santorini.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Which seas wash the Balkan Peninsula?`, options: [`Adriatic, Ionian, Aegean, Black Sea`, `Tyrrhenian, Ligurian, Baltic`, `North Sea and Atlantic`], answer: 0, explain: `Four seas: Adriatic, Ionian, Aegean and Black Sea.` },
      { type: `text`, q: `What is the capital of Greece?`, answer: [`athens`, `atene`, `athina`], explain: `Athens.` },
      { type: `mc`, q: `What is the highest mountain in Greece?`, options: [`Olympus`, `Triglav`, `Musala`], answer: 0, explain: `Olympus, 2,918 m. Triglav is in Slovenia, Musala in Bulgaria.` },
      { type: `tf`, q: `Greece has thousands of islands, but only just over 200 are inhabited.`, answer: true, explain: `About 6,000 islands and islets, just over 200 inhabited.` },
      { type: `mc`, q: `What does the Corinth Canal link?`, options: [`The Black Sea and the Aegean`, `The Gulf of Corinth and the Aegean Sea, cutting through the isthmus`, `The Adriatic and the Ionian`], answer: 1, explain: `It was dug in 1893 through the Isthmus of Corinth.` },
      { type: `num`, q: `In what year did Croatia join the European Union?`, answer: 2013, explain: `In 2013; since 2023 it has used the euro.` },
      { type: `mc`, q: `Which state uses the euro although it is not part of the EU?`, options: [`Montenegro`, `Serbia`, `Albania`], answer: 0, explain: `Montenegro adopted it unilaterally.` },
      { type: `order`, q: `Put these in chronological order.`, items: [`Assassination in Sarajevo`, `Birth of Yugoslavia`, `Death of Tito`, `Start of the break-up of Yugoslavia`, `Croatia in the EU`], explain: `1914, 1918, 1980, 1991, 2013.` },
      { type: `mc`, q: `Why are there few rivers on the surface of the Dalmatian coast?`, options: [`Because it never rains`, `Because of karst, water flows underground`, `Because the rivers have been diverted`], answer: 1, explain: `Limestone is dissolved by water, which seeps in and forms underground rivers.` },
      { type: `text`, q: `What is the state that changed its name with the Prespa Agreement called today? (… Macedonia)`, answer: [`north`, `north macedonia`, `nord`, `macedonia del nord`], explain: `Republic of North Macedonia, since 2019.` },
      { type: `tf`, q: `The climate of the interior of the Balkans is the same as that of the coast.`, answer: false, explain: `On the coasts it is Mediterranean; inland, sheltered by the mountains, it is continental.` },
      { type: `mc`, q: `Which state is the smallest in the European Union?`, options: [`Cyprus`, `Malta`, `Slovenia`], answer: 1, explain: `Malta, about 316 km².` }
    ]
  }
});
