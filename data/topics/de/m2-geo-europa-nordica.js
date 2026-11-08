TOPIC('de', {
  id: `m2-geo-europa-nordica`,
  title: `Nordeuropa`,
  intro: `Von Gletschern ausgehobene Fjorde, Tausende von Seen, Vulkane unter dem Eis, die Mitternachtssonne und das Nordlicht: <b>Nordeuropa</b> umfasst die <b>nordischen Länder</b> (Norwegen, Schweden, Finnland, Dänemark, Island) und die <b>Britischen Inseln</b> (Vereinigtes Königreich und Irland). Es sind dünn besiedelte, aber zugleich einige der reichsten, gebildetsten und innovativsten Länder der Welt. Entdecken wir, wie Breitengrad, Eis und Meer ihre Landschaften und ihr Leben geformt haben.`,
  minutes: 40,
  sections: [
    {
      type: `text`,
      title: `1. Eine vom Eis geformte Region`,
      html: `<p>Während der <b>Eiszeiten</b> (die letzte endete vor etwa 11.700 Jahren) bedeckte ein riesiger Eisschild, bis zu 3 km dick, Skandinavien und einen großen Teil der Britischen Inseln. Das Eis hat überall Spuren hinterlassen:</p>
<ul>
<li>die <b>Fjorde</b> Norwegens: Täler, die von Gletschern ausgehobelt und dann vom Meer überflutet wurden;</li>
<li>die Zehntausende von <b>Seen</b> in Finnland und Schweden, in den vom Eis ausgehobenen Mulden;</li>
<li>glattgeschliffene Felsen, Hügel aus Geröll (Moränen) und dünne Böden, die sich schlecht für die Landwirtschaft eignen.</li>
</ul>
<p>Das <b>Skandinavische Gebirge</b> verläuft entlang der Skandinavischen Halbinsel: Im Westen (Norwegen) ist es hoch, nach Osten (Schweden) fällt es sanft bis zur Ostsee ab. Die britischen Länder haben im Norden und Westen (Schottland, Wales) alte, niedrige Berge und im Südosten (England) Ebenen.</p>
<p>Geologische Besonderheit: Vom Gewicht des Eises befreit, <b>hebt sich</b> Skandinavien noch immer, an manchen Stellen um fast 1 cm im Jahr!</p>`
    },
    {
      type: `svg`,
      title: `Wie ein Fjord entsteht`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="100" y="28" font-size="16" text-anchor="middle" font-weight="bold">1. V-Tal</text>
<polygon points="20,60 90,200 110,200 180,60 180,240 20,240" fill="#a8a29e"/>
<path d="M95 195 L105 195" stroke="#2563eb" stroke-width="6"/>
<text x="100" y="268" font-size="14" text-anchor="middle">von einem Fluss geschaffen</text>
<text x="300" y="28" font-size="16" text-anchor="middle" font-weight="bold">2. Der Gletscher kommt</text>
<polygon points="220,60 245,215 355,215 380,60 380,240 220,240" fill="#a8a29e"/>
<polygon points="222,62 247,213 353,213 378,62" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="3"/>
<text x="300" y="140" font-size="15" text-anchor="middle" fill="#0369a1" font-weight="bold">Eis</text>
<text x="300" y="268" font-size="14" text-anchor="middle">gräbt und weitet: U-Tal</text>
<text x="500" y="28" font-size="16" text-anchor="middle" font-weight="bold">3. Das Meer dringt ein</text>
<polygon points="420,60 445,215 555,215 580,60 580,240 420,240" fill="#a8a29e"/>
<polygon points="434,130 445,213 555,213 566,130" fill="#2563eb"/>
<line x1="420" y1="130" x2="580" y2="130" stroke="#1e3a8a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="500" y="180" font-size="15" text-anchor="middle" fill="#ffffff" font-weight="bold">FJORD</text>
<text x="500" y="268" font-size="14" text-anchor="middle">das Eis schmilzt,</text>
<text x="500" y="288" font-size="14" text-anchor="middle">der Meeresspiegel steigt</text>
</svg>`,
      caption: `Der Sognefjord in Norwegen reicht etwa 204 km ins Landesinnere und ist stellenweise über 1.300 Meter tief.`
    },
    {
      type: `3d`,
      title: `Die Landschaften des Nordens in 3D`,
      scene: `terrain`,
      caption: `Dreh die Landschaft und tippe jedes Element an: Du entdeckst jeweils ein nordisches Beispiel.`,
      options: {
        features: {
          bay: { label: `Fjord`, html: `Lange, schmale Meeresbucht zwischen steilen Wänden: ein vom Meer überflutetes Gletschertal. Die norwegischen Küsten sind voll davon; der <b>Geirangerfjord</b> ist UNESCO-Welterbe.` },
          glacier: { label: `Gletscher`, html: `Der <b>Vatnajökull</b> in Island ist dem Volumen nach der größte Gletscher Europas; unter ihm verbergen sich aktive Vulkane.` },
          volcano: { label: `Vulkan`, html: `Island hat etwa 30 aktive Vulkansysteme. 2010 legte der Ausbruch des <b>Eyjafjallajökull</b> tagelang die Flüge in halb Europa lahm.` },
          mountain: { label: `Gebirge`, html: `Das <b>Skandinavische Gebirge</b> (in Norwegen der Galdhøpiggen, 2.469 m) und die schottischen <b>Highlands</b> mit dem Ben Nevis (1.345 m), dem höchsten Gipfel der Britischen Inseln.` },
          lake: { label: `See`, html: `Finnland hat etwa <b>188.000 Seen</b>; in Schweden ist der <b>Vänern</b> (etwa 5.650 km²) der größte See der Europäischen Union.` },
          island: { label: `Insel`, html: `<b>Großbritannien</b> ist die größte Insel Europas. <b>Grönland</b> (Dänemark) ist die größte Insel der Welt.` },
          archipelago: { label: `Inselgruppe`, html: `Die <b>Lofoten</b> in Norwegen, die <b>Färöer</b> (Dänemark) und die <b>Hebriden</b> in Schottland. Auch Stockholm liegt auf 14 Inseln.` },
          peninsula: { label: `Halbinsel`, html: `Die <b>Skandinavische Halbinsel</b> (Norwegen und Schweden) ist die größte Europas; Dänemark nimmt die Halbinsel <b>Jütland</b> ein.` },
          strait: { label: `Meerenge`, html: `Die <b>Straße von Dover</b> (33 km) trennt England und Frankreich; darunter verläuft der Eurotunnel. Der <b>Öresund</b> trennt Dänemark und Schweden und wird von einer Brücken-Tunnel-Verbindung überquert.` },
          cape: { label: `Kap`, html: `Das <b>Nordkap</b> in Norwegen mit seiner über 300 m hohen Klippe gilt als der nördlichste Punkt Europas, den man mit dem Auto erreichen kann.` },
          coast: { label: `Küste`, html: `Die <b>weißen Kreidefelsen von Dover</b> sind das Symbol der englischen Küste am Ärmelkanal.` },
          river: { label: `Fluss`, html: `Die <b>Themse</b> (etwa 346 km) fließt durch London; der <b>Shannon</b> (etwa 360 km) ist der längste Fluss Irlands und der Britischen Inseln.` },
          plain: { label: `Ebene`, html: `<b>Dänemark</b> ist fast völlig flach: Der höchste Punkt liegt nur knapp über 170 m!` }
        }
      }
    },
    {
      type: `text`,
      title: `2. Klima, Licht und Dunkelheit`,
      html: `<p>Nordeuropa liegt auf derselben Breite wie Alaska und Sibirien und ist trotzdem bewohnbar: Das verdanken wir dem <b>Nordatlantikstrom</b> (der Fortsetzung des Golfstroms), der warmes Wasser an die Küsten bringt. Deshalb gilt:</p>
<ul>
<li>die Britischen Inseln, Irland, Dänemark und die norwegische Küste haben ein <b>ozeanisches Klima</b>: milde Winter, kühle Sommer, häufiger Regen; die norwegischen Häfen frieren selbst jenseits des Polarkreises nicht zu;</li>
<li>das Landesinnere von Schweden und Finnland hat ein <b>kaltes Kontinentalklima</b> (subarktisch) mit langen, schneereichen Wintern;</li>
<li>der äußerste Norden und die Berge haben ein <b>Polarklima</b> mit Tundra.</li>
</ul>
<p>Jenseits des <b>Nördlichen Polarkreises</b> (66°34' N) geschieht etwas Besonderes: Im Sommer gibt es mindestens einen Tag, an dem die Sonne nie untergeht (<b>Mitternachtssonne</b>), und im Winter mindestens einen Tag, an dem sie nie aufgeht (<b>Polarnacht</b>). In den Winternächten kann man das <b>Nordlicht</b> sehen, Licht, das entsteht, wenn Teilchen des Sonnenwinds auf die Atmosphäre treffen.</p>`
    },
    {
      type: `svg`,
      title: `Stunden Tageslicht: Rom, Oslo und Tromsø`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="300" y="24" font-size="17" text-anchor="middle" font-weight="bold">Stunden Tageslicht pro Tag (ungefähr)</text>
<line x1="60" y1="250" x2="580" y2="250" stroke="#334155" stroke-width="2"/>
<rect x="90" y="100" width="50" height="150" fill="#facc15"/>
<rect x="145" y="160" width="50" height="90" fill="#1e3a8a"/>
<text x="117" y="92" font-size="14" text-anchor="middle">15 h</text>
<text x="170" y="152" font-size="14" text-anchor="middle">9 h</text>
<text x="142" y="275" font-size="16" text-anchor="middle" font-weight="bold">Rom (42° N)</text>
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
<text x="90" y="296" font-size="13">21. Juni</text>
<rect x="180" y="285" width="14" height="12" fill="#1e3a8a"/>
<text x="200" y="296" font-size="13">21. Dezember</text>
</svg>`,
      caption: `Je weiter man nach Norden kommt, desto extremer wird der Unterschied zwischen Sommer und Winter. In Tromsø, jenseits des Polarkreises, geht die Sonne etwa vom 20. Mai bis zum 22. Juli nicht unter.`
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: Eis und Licht`,
      questions: [
        { type: `mc`, q: `Was ist ein Fjord?`, options: [`Ein erloschener Vulkan`, `Ein von einem Gletscher ausgehobenes Tal, das vom Meer überflutet wurde`, `Ein Salzsee`], answer: 1, explain: `Erst Fluss, dann Gletscher, dann dringt das Meer in das U-Tal ein.` },
        { type: `tf`, q: `Jenseits des Nördlichen Polarkreises kann die Sonne im Sommer 24 Stunden lang über dem Horizont bleiben.`, answer: true, explain: `Das ist die Mitternachtssonne.` },
        { type: `mc`, q: `Warum frieren die Küsten Norwegens im Winter nicht zu?`, options: [`Wegen der Vulkane`, `Wegen des Nordatlantikstroms, der warmes Wasser bringt`, `Weil das Wasser sehr salzig ist`], answer: 1, explain: `Er ist die Fortsetzung des Golfstroms.` }
      ]
    },
    {
      type: `text`,
      title: `3. Die nordischen Länder`,
      html: `<table>
<tr><th>Land</th><th>Hauptstadt</th><th>Einwohner (ca.)</th><th>Fläche (ca.)</th><th>EU / Währung</th></tr>
<tr><td><b>Norwegen</b></td><td>Oslo</td><td>5,6 Millionen</td><td>385.000 km²</td><td>nicht in der EU · Norwegische Krone</td></tr>
<tr><td><b>Schweden</b></td><td>Stockholm</td><td>10,5 Millionen</td><td>450.000 km²</td><td>EU seit 1995 · Schwedische Krone</td></tr>
<tr><td><b>Finnland</b></td><td>Helsinki</td><td>5,6 Millionen</td><td>338.000 km²</td><td>EU seit 1995 · Euro</td></tr>
<tr><td><b>Dänemark</b></td><td>Kopenhagen</td><td>6 Millionen</td><td>43.000 km²</td><td>EU seit 1973 · Dänische Krone</td></tr>
<tr><td><b>Island</b></td><td>Reykjavík</td><td>390.000</td><td>103.000 km²</td><td>nicht in der EU · Isländische Krone</td></tr>
</table>
<ul>
<li><b>Norwegen</b>: sehr lange, zerklüftete Küsten, Fjorde, Fischerei (Lachs, Kabeljau), Wasserkraft (fast der gesamte Strom) und vor allem <b>Erdöl und Erdgas</b> aus der Nordsee. In zwei Volksabstimmungen (1972 und 1994) hat es sich gegen den EU-Beitritt entschieden.</li>
<li><b>Schweden</b>: das größte und bevölkerungsreichste Land der Region; Wälder (etwa zwei Drittel der Landesfläche), Holz und Papier, Eisenerzminen, Industrie (Autos, Telekommunikation, Möbel). In Stockholm werden jedes Jahr am 10. Dezember die <b>Nobelpreise</b> überreicht (der Friedensnobelpreis in Oslo).</li>
<li><b>Finnland</b>: „Land der tausend Seen“ (in Wirklichkeit fast 188.000!), Wälder, Technologie. Die finnische Sprache ist nicht indoeuropäisch: Sie ist <b>finno-ugrisch</b>, wie das Ungarische und das Estnische. Sein Schulsystem gehört zu den am meisten untersuchten der Welt.</li>
<li><b>Dänemark</b>: flach, mit der Halbinsel Jütland und etwa 400 Inseln; moderne Land- und Viehwirtschaft, <b>Windenergie</b> (über die Hälfte des Stroms), <b>Lego</b> (1932 gegründet). Zum Königreich Dänemark gehören mit weitgehender Autonomie auch die Färöer und <b>Grönland</b>.</li>
<li><b>Island</b>: eine Insel auf dem Mittelatlantischen Rücken, wo sich die Nordamerikanische und die Eurasische Platte voneinander entfernen: Vulkane, Geysire, heiße Quellen. Fast der gesamte Strom stammt aus <b>erneuerbaren</b> Quellen (Wasserkraft und Erdwärme).</li>
</ul>
<p>Die nordischen Länder sind berühmt für ihren <b>Sozialstaat</b> (hochwertige Schulen, Gesundheitsversorgung und öffentliche Dienste, finanziert durch hohe Steuern) und stehen in den Rankings zur Lebensqualität immer ganz oben.</p>`
    },
    {
      type: `text`,
      title: `4. Die Britischen Inseln: Vereinigtes Königreich und Irland`,
      html: `<p><b>Vereinigtes Königreich</b> – Hauptstadt: <b>London</b> · etwa 69 Millionen Einwohner · etwa 244.000 km² · parlamentarische Monarchie · Währung: <b>Pfund Sterling</b>.</p>
<ul>
<li>Es besteht aus <b>vier Nationen</b>: <b>England</b> (London), <b>Schottland</b> (Edinburgh), <b>Wales</b> (Cardiff) und <b>Nordirland</b> (Belfast). Der vollständige Name lautet „Vereinigtes Königreich von Großbritannien und Nordirland“.</li>
<li>Hier begann im 18. Jahrhundert die <b>erste industrielle Revolution</b>; im 19. Jahrhundert war das Britische Empire das größte der Welt. Heute beruht die Wirtschaft auf Finanzwesen (die City of London), Dienstleistungen, Forschung, Luft- und Raumfahrt sowie Pharmaindustrie.</li>
<li>In <b>Greenwich</b>, einem Stadtteil von London, verläuft der <b>Nullmeridian</b>, von dem aus Längengrade und Zeitzonen gemessen werden.</li>
<li>Es hat die Europäische Union am <b>31. Januar 2020</b> verlassen (Brexit). Seit 1994 ist es durch den <b>Eurotunnel</b> unter dem Ärmelkanal (etwa 50 km) mit Frankreich verbunden.</li>
</ul>
<p><b>Irland</b> – Hauptstadt: <b>Dublin</b> · etwa 5,3 Millionen Einwohner · etwa 70.000 km² · Republik · Euro.</p>
<ul>
<li>Es nimmt den größten Teil der Insel Irland ein (der Nordosten ist Nordirland, britisch). Wegen seiner immergrünen Wiesen, dank des milden, regnerischen Klimas, nennt man es die <b>„Grüne Insel“</b>.</li>
<li>Amtssprachen: <b>Irisch</b> (Gälisch) und Englisch. In der EU seit 1973.</li>
<li>Während der <b>Großen Hungersnot</b> (1845–1849), die durch eine Kartoffelkrankheit verursacht wurde, starb etwa eine Million Menschen, und eine weitere Million wanderte aus, vor allem in die Vereinigten Staaten. Heute ist es ein reiches Land und der europäische Sitz vieler großer Technologie- und Pharmaunternehmen.</li>
</ul>`
    },
    {
      type: `widget`,
      title: `Ordne Land und Hauptstadt zu`,
      widget: `match`,
      options: {
        pairs: [
          [`🇳🇴 Norwegen`, `Oslo`],
          [`🇸🇪 Schweden`, `Stockholm`],
          [`🇫🇮 Finnland`, `Helsinki`],
          [`🇩🇰 Dänemark`, `Kopenhagen`],
          [`🇮🇸 Island`, `Reykjavík`],
          [`🇬🇧 Vereinigtes Königreich`, `London`],
          [`🇮🇪 Irland`, `Dublin`]
        ]
      },
      caption: `Reykjavík (64° N) ist die nördlichste Hauptstadt eines souveränen Staates der Welt.`
    },
    {
      type: `widget`,
      title: `In der Europäischen Union oder nicht?`,
      widget: `classify`,
      options: {
        groups: [`EU-Mitglied`, `Nicht Mitglied`],
        items: [
          [`🇸🇪 Schweden`, 0],
          [`🇫🇮 Finnland`, 0],
          [`🇩🇰 Dänemark`, 0],
          [`🇮🇪 Irland`, 0],
          [`🇳🇴 Norwegen`, 1],
          [`🇮🇸 Island`, 1],
          [`🇬🇧 Vereinigtes Königreich`, 1]
        ]
      },
      caption: `Norwegen und Island gehören nicht zur EU, sind aber Teil des Europäischen Wirtschaftsraums und von Schengen. Das Vereinigte Königreich ist 2020 ausgetreten.`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Warum kaufen in Norwegen fast alle Elektroautos?`,
      html: `<p>2024 waren etwa <b>9 von 10 Neuwagen</b>, die in Norwegen verkauft wurden, vollelektrisch: ein Weltrekord. Wie kommt das in einem Land, das Erdöl verkauft?</p>
<ol>
<li>Norwegischer Strom ist fast vollständig <b>Wasserkraft</b> (Berge + viel Regen und Schnee = viele Flüsse und Wasserfälle) und sauber und günstig.</li>
<li>Der Staat hat Elektroautos jahrelang von vielen Steuern befreit und die Steuern auf Benzin- und Dieselautos erhöht.</li>
<li>Er hat ein dichtes Netz von Ladesäulen gebaut.</li>
</ol>
<p>Das ist ein Beispiel dafür, wie sich <b>Geografie</b> (Relief und Regen) und <b>politische Entscheidungen</b> verbinden. Überleg einmal: Wären die Auswirkungen in Italien, wo der Strom aus vielfältigeren Quellen stammt, dieselben?</p>`
    },
    {
      type: `example`,
      title: `Praxisbeispiel: Von London nach Edinburgh quer durch das Vereinigte Königreich`,
      html: `<p>Mit dem Zug von London nach Edinburgh braucht man etwa <b>viereinhalb Stunden</b> für etwa 630 km. Die Landschaft ändert sich: zuerst die Ebenen und grünen Hügel Südenglands, dann die alten Industriestädte des Nordens (York, Newcastle), schließlich die schottische Küste.</p>
<p>In Edinburgh siehst du Schilder auf Englisch, in manchen Gegenden Schottlands aber auch auf <b>Schottisch-Gälisch</b>; in Wales sind die Schilder immer zweisprachig, Englisch und <b>Walisisch</b>. Und denk dran: Im Vereinigten Königreich und in Irland fährt man <b>links</b>!</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass in Island die Heizung aus der Erde kommt?`,
      html: `<p>In Island werden etwa <b>9 von 10 Häusern</b> mit heißem Wasser geheizt, das aus dem Untergrund aufsteigt und von der Hitze der Vulkane erwärmt wird (<b>Erdwärme</b>). In Reykjavík verlaufen unter manchen Gehwegen Heißwasserrohre, die den Schnee schmelzen. Und das Wort <b>Geysir</b>, das auf der ganzen Welt benutzt wird, kommt vom Namen einer isländischen Quelle, dem <i>Geysir</i>, was „Sprudler“ bedeutet.</p>`
    },
    {
      type: `curiosity`,
      title: `Wusstest du, dass das Englische Wörter der Wikinger hat?`,
      html: `<p>Zwischen dem 8. und dem 11. Jahrhundert segelten die <b>Wikinger</b> aus Norwegen, Dänemark und Schweden bis nach England, Irland, Island, Grönland und sogar Nordamerika (um das Jahr 1000). Sie ließen sich auch in England nieder und hinterließen viele Wörter: <i>sky</i> (Himmel), <i>egg</i> (Ei), <i>knife</i> (Messer), <i>window</i> (von „Windauge“) und <i>Thursday</i>, der Tag des <b>Thor</b>! Das isländische Althing, entstanden im Jahr 930, ist eines der ältesten Parlamente der Welt.</p>`
    },
    {
      type: `decision`,
      title: `Norwegen, 1970er-Jahre: Ihr habt Erdöl gefunden. Was tut ihr?`,
      html: `<p>1969 wird unter der Nordsee das Ölfeld Ekofisk entdeckt: Norwegen, ein Land von Fischern und Bauern, wird plötzlich reich an Erdöl und Erdgas. Aber das Erdöl wird irgendwann zu Ende gehen, und sein Preis steigt und fällt unberechenbar.</p>`,
      question: `Was machst du mit dem Geld aus dem Erdöl?`,
      options: [
        { label: `Wir geben sofort alles aus: niedrigere Steuern und höhere Gehälter für alle.`, outcome: `Sofortiger Wohlstand … aber wenn der Ölpreis abstürzt oder die Felder erschöpft sind, bricht die Wirtschaft mit ihm zusammen. Das ist mehreren Förderländern passiert.` },
        { label: `Wir legen den Großteil der Gewinne in einem Fonds an, der im Ausland investiert, für die künftigen Generationen.`, outcome: `Man muss der Versuchung widerstehen, heute auszugeben, aber das Land schützt sich vor Krisen und bewahrt seinen Reichtum, wenn das Erdöl zu Ende geht.` },
        { label: `Wir lassen ausländische Firmen fördern und die Gewinne behalten, gegen eine kleine Pacht.`, outcome: `Kein Risiko für den Staat, aber der Reichtum würde fast ganz ins Ausland fließen.` }
      ],
      answer: 1,
      explain: `Norwegen gründete ein staatliches Ölunternehmen (heute Equinor) und ab 1990 einen <b>Staatsfonds</b> (den „Ölfonds“), in den es die Erdöleinnahmen einzahlt und sie in Unternehmen auf der ganzen Welt investiert. Die Regierung darf jedes Jahr nur einen kleinen Teil der Erträge verwenden. Heute ist er der größte Staatsfonds der Welt, mit einem Wert von über 1.500 Milliarden Dollar: etwa 300.000 Dollar pro Norweger. Das ist ein Beispiel dafür, wie man eine <b>nicht erneuerbare Ressource</b> mit Blick auf die Zukunft verwaltet.`
    },
    {
      type: `alternatives`,
      title: `Weitere Wege, Nordeuropa zu verstehen`,
      intro: `Wenn dich viele Namen und Zahlen verwirren, probier diese Blickwinkel.`,
      tabs: [
        {
          label: `🖐️ Der Gletscher wie ein Finger im Sand`,
          html: `<p>Nimm eine Wanne mit feuchtem Sand und zieh langsam einen Finger durch, indem du drückst: Du hinterlässt eine <b>U</b>-förmige Rinne mit breitem Boden und steilen Wänden. Gieß jetzt etwas Wasser hinein: ein Fjord im Kleinen!</p>
<p>Ein Fluss dagegen gräbt nur den Boden aus, wie die Spitze eines Bleistifts: Er hinterlässt eine <b>V</b>-förmige Rinne. An der Form eines Tals erkennen Geografen, ob es von einem Fluss oder einem Gletscher geschaffen wurde.</p>`
        },
        {
          label: `🌍 Auf dem Globus`,
          html: `<p>Dreh den Globus: Finde die Hauptstädte, das Nordkap und Grönland. Sieh, wie nah Island am Nördlichen Polarkreis liegt.</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 59.91, lon: 10.75, label: `Oslo`, color: `#ef4444` },
              { lat: 59.33, lon: 18.07, label: `Stockholm`, color: `#2563eb` },
              { lat: 60.17, lon: 24.94, label: `Helsinki`, color: `#0ea5e9` },
              { lat: 55.68, lon: 12.57, label: `Kopenhagen`, color: `#dc2626` },
              { lat: 64.15, lon: -21.94, label: `Reykjavík`, color: `#7c3aed` },
              { lat: 51.51, lon: -0.13, label: `London`, color: `#1d4ed8` },
              { lat: 53.35, lon: -6.26, label: `Dublin`, color: `#16a34a` },
              { lat: 71.17, lon: 25.78, label: `Nordkap`, color: `#f97316` },
              { lat: 72.0, lon: -40.0, label: `Grönland`, color: `#94a3b8` },
              { lat: 69.65, lon: 18.96, label: `Tromsø`, color: `#eab308` }
            ]
          }
        },
        {
          label: `🗣️ Schwestersprachen und „fremde“ Sprachen`,
          html: `<p>Norwegisch, Schwedisch und Dänisch sind einander so ähnlich, dass ihre Sprecher sich gegenseitig verstehen (mit etwas Mühe). Es sind <b>germanische</b> Sprachen wie Englisch und Deutsch. Das Isländische ist die konservativste: Die Isländer können die mittelalterlichen Sagas lesen!</p>
<table>
<tr><th>Deutsch</th><th>Schwedisch</th><th>Norwegisch</th><th>Dänisch</th><th>Finnisch</th></tr>
<tr><td>danke</td><td>tack</td><td>takk</td><td>tak</td><td>kiitos</td></tr>
<tr><td>Haus</td><td>hus</td><td>hus</td><td>hus</td><td>talo</td></tr>
<tr><td>Wasser</td><td>vatten</td><td>vann</td><td>vand</td><td>vesi</td></tr>
</table>
<p>Das <b>Finnische</b> gehört zu einer anderen Familie (finno-ugrisch): Deshalb sind seine Wörter so anders. Im Vereinigten Königreich und in Irland leben neben dem Englischen <b>keltische</b> Sprachen weiter: Walisisch, Schottisch-Gälisch, Irisch.</p>`
        },
        {
          label: `☀️ Warum wird es im Sommer nicht dunkel?`,
          html: `<p>Die Erdachse ist um etwa 23,4° <b>geneigt</b>. Im Juni ist der Nordpol zur Sonne „hingeneigt“: Während sich die Erde dreht, bleibt das Gebiet nahe dem Pol immer im beleuchteten Teil, wie eine Person, die auf einem Karussell nahe der Mitte neben einer Lampe sitzt. Im Dezember ist es umgekehrt: Dieses Gebiet bleibt immer im Dunkeln.</p>
<p>Der Nördliche Polarkreis (66°34' N) ist genau die Grenze, jenseits derer das mindestens an einem Tag im Jahr passiert: 90° − 23,4° ≈ 66,6°.</p>`
        }
      ]
    },
    {
      type: `conceptMap`,
      title: `Landkarte der Begriffe: Nordeuropa`,
      nodes: [
        { id: `latitudine`, label: `Hohe Breite`, x: 50, y: 6, color: `#1e3a8a`, html: `Die Region reicht von etwa 50° bis über 71° nördlicher Breite.`, why: `Je näher man dem Pol kommt, desto schräger treffen die Sonnenstrahlen auf und desto weniger erwärmen sie; und wegen der Neigung der Erdachse schwankt die Tageslichtdauer zwischen Sommer und Winter enorm.` },
        { id: `luce`, label: `Mitternachtssonne und Polarnacht`, x: 18, y: 22, color: `#eab308`, html: `Jenseits des Polarkreises geht die Sonne im Sommer mindestens einen Tag lang nicht unter und im Winter nicht auf.`, why: `Die Erdachse ist um etwa 23,4° geneigt: 90° − 23,4° ergibt die Breite des Polarkreises (66°34').` },
        { id: `corrente`, label: `Nordatlantikstrom`, x: 82, y: 22, color: `#0ea5e9`, html: `Warmes Wasser, das das Klima milder macht als erwartet.`, why: `Er ist die Fortsetzung des Golfstroms, der in der Karibik entsteht; Westwinde treiben milde, feuchte Luft an die Küsten.` },
        { id: `ghiaccio`, label: `Eiszeiten`, x: 50, y: 35, color: `#7dd3fc`, html: `Ein Eisschild bedeckte die Region bis vor etwa 11.700 Jahren.`, why: `Zyklische Schwankungen der Erdbahn (Milanković-Zyklen) haben in den letzten 2,6 Millionen Jahren Kalt- und Warmzeiten abwechseln lassen.` },
        { id: `fiordi`, label: `Fjorde und Seen`, x: 18, y: 55, color: `#2563eb`, html: `Fjorde in Norwegen, Seen in Finnland und Schweden.`, why: `Das Eis hat U-Täler und Mulden in den Fels gegraben; beim Abschmelzen hat das Meer die Küstentäler überflutet, und Süßwasser hat die Mulden im Landesinneren gefüllt.` },
        { id: `vulcani`, label: `Vulkane Islands`, x: 82, y: 50, color: `#dc2626`, html: `Vulkane, Geysire und heiße Quellen.`, why: `Island liegt auf dem Mittelatlantischen Rücken, wo sich zwei Platten um etwa 2 cm pro Jahr voneinander entfernen und Magma aufsteigt; darunter liegt auch ein „Hotspot“ des Erdmantels.` },
        { id: `energia`, label: `Energie und Rohstoffe`, x: 50, y: 70, color: `#16a34a`, html: `Erdöl und Erdgas (Nordsee), Wasserkraft, Windkraft, Erdwärme, Wälder, Fischerei.`, why: `Regenreiche Berge liefern Wasserkraft; die Atlantikwinde Windkraft; die Vulkane Erdwärme; die Ablagerungen unter der Nordsee haben Erdöl und Erdgas gebildet.` },
        { id: `vichinghi`, label: `Wikinger und Seefahrer`, x: 18, y: 88, color: `#a16207`, html: `Seefahrervölker vom Mittelalter bis zum Britischen Empire.`, why: `Karge Länder und sehr lange Küsten trieben die Menschen aufs Meer: Die Wikinger erreichten Amerika um das Jahr 1000; England, eine Insel, baute die mächtigste Flotte der Welt.` },
        { id: `welfare`, label: `Wohlstand und Sozialstaat`, x: 82, y: 85, color: `#a855f7`, html: `Hohe Einkommen, starke öffentliche Dienste, hohe Lebensqualität.`, why: `Kleine, gebildete Bevölkerungen, vom Staat verwaltete Naturressourcen und ein starker sozialer Konsens zwischen Arbeitnehmern und Unternehmen haben es ermöglicht, Schule, Gesundheit und Renten mit hohen Steuern zu finanzieren.` }
      ],
      edges: [
        [`latitudine`, `luce`, `verursacht`],
        [`latitudine`, `ghiaccio`, `begünstigt`],
        [`corrente`, `latitudine`, `mildert die Kälte der`],
        [`ghiaccio`, `fiordi`, `gräbt`],
        [`vulcani`, `energia`, `Erdwärme`],
        [`fiordi`, `energia`, `Wasserkraft`],
        [`energia`, `welfare`, `finanziert`],
        [`corrente`, `vichinghi`, `schiffbare Meere`]
      ]
    },
    {
      type: `quiz`,
      title: `Mini-Quiz: die Länder des Nordens`,
      questions: [
        { type: `text`, q: `Wie heißt die Hauptstadt Schwedens?`, answer: [`stockholm`, `stoccolma`], explain: `Stockholm, auf 14 Inseln gebaut.` },
        { type: `mc`, q: `Welche sind die vier Nationen des Vereinigten Königreichs?`, options: [`England, Schottland, Wales, Nordirland`, `England, Irland, Island, Wales`, `London, Edinburgh, Cardiff, Dublin`], answer: 0, explain: `Irland (mit der Hauptstadt Dublin) ist ein unabhängiger Staat.` },
        { type: `tf`, q: `Finnland verwendet den Euro.`, answer: true, explain: `Es ist das einzige nordische Land, das ihn eingeführt hat.` }
      ]
    }
  ],
  glossary: [
    { t: `Fjord`, d: `Lange, schmale, tiefe Meeresbucht: ein vom Meer überflutetes Gletschertal.` },
    { t: `Eiszeit`, d: `Kaltzeit, in der sich die Gletscher ausdehnen und weite Gebiete bedecken.` },
    { t: `Nördlicher Polarkreis`, d: `Breitenkreis bei 66°34' N, jenseits dessen Mitternachtssonne und Polarnacht auftreten.` },
    { t: `Mitternachtssonne`, d: `Erscheinung, bei der die Sonne im Sommer in hohen Breiten 24 Stunden lang über dem Horizont bleibt.` },
    { t: `Nordlicht (Polarlicht)`, d: `Farbige Lichter am nächtlichen Polarhimmel, erzeugt von Teilchen des Sonnenwinds.` },
    { t: `Geothermie (Erdwärme)`, d: `Energie, die aus der inneren Wärme der Erde gewonnen wird.` },
    { t: `Staatsfonds`, d: `Investmentfonds im Besitz eines Staates, wie der norwegische, der vom Erdöl gespeist wird.` },
    { t: `Sozialstaat (Wohlfahrtsstaat)`, d: `System, in dem der Staat den Bürgern Leistungen wie Gesundheit, Schule, Renten und Unterstützung garantiert.` },
    { t: `Nordische Länder`, d: `Norwegen, Schweden, Finnland, Dänemark und Island.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Welche Länder bilden die Skandinavische Halbinsel?`, options: [`Norwegen und Schweden`, `Dänemark und Island`, `Finnland und Irland`], answer: 0, explain: `Dänemark nimmt Jütland ein; Island ist eine Insel.` },
      { type: `order`, q: `Bring die Schritte der Entstehung eines Fjords in die richtige Reihenfolge.`, items: [`Ein Fluss gräbt ein V-Tal`, `Ein Gletscher füllt das Tal aus und weitet es zum U`, `Das Eis schmilzt`, `Das Meer überflutet das Tal`], explain: `Fluss, Gletscher, Schmelze, Meer.` },
      { type: `mc`, q: `Welches Land nennt man „Land der tausend Seen“?`, options: [`Norwegen`, `Finnland`, `Dänemark`], answer: 1, explain: `In Wirklichkeit hat Finnland etwa 188.000 Seen.` },
      { type: `text`, q: `Wie heißt die Hauptstadt Islands?`, answer: [`reykjavik`, `reykjavík`], explain: `Reykjavík, die nördlichste Hauptstadt eines souveränen Staates.` },
      { type: `tf`, q: `Norwegen gehört zur Europäischen Union.`, answer: false, explain: `In zwei Volksabstimmungen (1972 und 1994) haben die Norweger Nein gesagt.` },
      { type: `mc`, q: `Woher stammt der größte Teil des Stroms in Norwegen?`, options: [`Aus Kohle`, `Aus Wasserkraftwerken`, `Aus Kernkraft`], answer: 1, explain: `Berge und viel Niederschlag: überall Flüsse und Wasserfälle.` },
      { type: `num`, q: `Auf welcher Breite (in Grad, ungefähr) liegt der Nördliche Polarkreis?`, answer: 66.6, tol: 0.5, unit: `° N`, explain: `66°34' N, also etwa 66,6°: 90° minus die Neigung der Achse (23,4°).` },
      { type: `mc`, q: `Warum hat Island so viele Vulkane?`, options: [`Weil es nahe am Pol liegt`, `Weil es auf dem Mittelatlantischen Rücken liegt, wo sich zwei Platten voneinander entfernen`, `Weil es klein ist`], answer: 1, explain: `Das Magma steigt dort auf, wo sich die Platten trennen.` },
      { type: `mc`, q: `Welche Sprache ist NICHT germanisch?`, options: [`Schwedisch`, `Dänisch`, `Finnisch`], answer: 2, explain: `Finnisch ist eine finno-ugrische Sprache.` },
      { type: `text`, q: `Wie heißt der Nullmeridian, der durch London verläuft?`, answer: [`greenwich`, `meridian von greenwich`, `greenwich-meridian`, `nullmeridian von greenwich`], explain: `Der Meridian von Greenwich.` },
      { type: `num`, q: `In welchem Jahr ist das Vereinigte Königreich aus der Europäischen Union ausgetreten?`, answer: 2020, explain: `Am 31. Januar 2020 (Brexit).` },
      { type: `mc`, q: `Was verursachte die Große Hungersnot in Irland (1845–1849)?`, options: [`Ein Krieg`, `Eine Kartoffelkrankheit`, `Ein Vulkanausbruch`], answer: 1, explain: `Die Kraut- und Knollenfäule vernichtete die Kartoffelernten, das Grundnahrungsmittel der Bauern.` }
    ]
  }
});
