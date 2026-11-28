TOPIC('de', {
  id: "l1-sci-idrosfera",
  title: "Die Hydrosphäre",
  intro: "Aus dem Weltraum gesehen ist unser Planet blau: Etwa <b>71 %</b> der Oberfläche sind mit Wasser bedeckt. Die <b>Hydrosphäre</b> ist die Gesamtheit allen Wassers der Erde in flüssigem, festem und dampfförmigem Zustand: Ozeane, Meere, Seen, Flüsse, Grundwasser, Gletscher und Wasserdampf in der Luft. Sie ist der Lebensraum, in dem das Leben entstanden ist, und sie regelt das Klima. In dieser Lektion folgen wir den Tropfen auf ihrem Weg durch den <b>Wasserkreislauf</b> und untersuchen Ozeane, Strömungen, Flüsse, Seen und Gletscher.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Wie viel Wasser gibt es, und wo ist es?",
      html: `<p>Das gesamte Wasservolumen der Erde beträgt etwa <b>1,4 Milliarden km³</b>. Doch fast alles davon ist nicht trinkbar:</p>
<table>
<tr><th>Wo</th><th>Anteil am gesamten Wasser</th></tr>
<tr><td>Ozeane und Meere (Salzwasser)</td><td>etwa <b>97,5 %</b></td></tr>
<tr><td>Süßwasser</td><td>etwa <b>2,5 %</b></td></tr>
</table>
<p>Und vom Süßwasser:</p>
<ul>
<li>etwa <b>69 %</b> sind in <b>Gletschern und Polkappen</b> gebunden;</li>
<li>etwa <b>30 %</b> sind <b>Grundwasser</b> (Aquifere);</li>
<li>weniger als <b>1 %</b> befinden sich in Seen, Flüssen, Boden und Atmosphäre: Das sind also etwa 0,01 % des gesamten Wassers, die leicht zugänglich sind.</li>
</ul>
<p>Würde man alles Wasser der Erde in einer Kugel sammeln, hätte sie einen Durchmesser von etwa 1400 km: die Größe eines Mondes wie Europa.</p>
<p>Das <b>Salzwasser</b> enthält Salze (vor allem Natriumchlorid, etwa 85 %), im Mittel <b>35 g pro kg</b>, also 35 ‰ <b>Salzgehalt</b>. Der Salzgehalt schwankt: niedriger dort, wo viele Flüsse münden oder viel Regen fällt (Ostsee: 5–10 ‰), höher dort, wo die Verdunstung stark ist (Rotes Meer: 40 ‰; Totes Meer: etwa 300 ‰, ein Salzsee).</p>`
    },
    {
      type: "widget",
      title: "Süßwasser oder Salzwasser?",
      widget: "classify",
      options: { groups: ["Salzwasser", "Süßwasser"], items: [
        ["Pazifischer Ozean", 0],
        ["Mittelmeer", 0],
        ["Gardasee", 1],
        ["Fluss Po", 1],
        ["Aletschgletscher", 1],
        ["Rotes Meer", 0],
        ["Grundwasserleiter", 1],
        ["Totes Meer", 0],
        ["Antarktisches Eis", 1],
        ["Bolsenasee", 1]
      ] },
      caption: "Das Tote Meer und das Kaspische Meer tragen zwar die Bezeichnung „Meer“, sind aber in Wirklichkeit Seen (das Kaspische Meer ist brackig). Beachte: Das Eis auf dem Festland ist Süßwasser."
    },
    {
      type: "text",
      title: "Der Wasserkreislauf",
      html: `<p>Das Wasser steht nie still: Der <b>hydrologische Kreislauf</b> lässt es zwischen Ozeanen, Atmosphäre und Landmassen zirkulieren, angetrieben von der Energie der Sonne und von der Schwerkraft. Die Etappen:</p>
<ol>
<li><b>Verdunstung</b>: Die Sonne erwärmt das Wasser von Meeren, Seen und Boden; etwa 86 % der Verdunstung stammen aus den Ozeanen.</li>
<li><b>Transpiration</b> der Pflanzen (die zusammen mit der Verdunstung die <b>Evapotranspiration</b> bildet).</li>
<li><b>Kondensation</b>: Beim Aufsteigen kühlt der Wasserdampf ab und kondensiert zu Tröpfchen: Wolken.</li>
<li><b>Niederschläge</b>: Regen, Schnee, Hagel.</li>
<li><b>Oberflächenabfluss</b> (Wasser, das an der Oberfläche zu Flüssen und Meeren fließt), <b>Versickerung</b> (Wasser, das in den Boden eindringt und das Grundwasser speist) und <b>Schmelzen</b> von Schnee und Eis.</li>
</ol>
<p>Ein wichtiger Gedanke: Das Wasser auf dem Planeten ist praktisch immer dasselbe. Das Wasser, das du heute trinkst, kann in einem Ozean, in einer Wolke, in einem Gletscher, im Körper eines Dinosauriers gewesen sein. Die Moleküle werden seit Milliarden von Jahren „recycelt“. Die <b>Verweildauer</b> ist sehr unterschiedlich: in der Atmosphäre nur etwa 9 Tage, in Flüssen einige Wochen, in den Ozeanen etwa 3000 Jahre, in den antarktischen Gletschern Zehntausende von Jahren.</p>`
    },
    {
      type: "svg",
      title: "Der Wasserkreislauf",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#e0f2fe"/>
<circle cx="560" cy="45" r="28" fill="#facc15"/>
<path d="M0 230 L120 190 L200 215 L300 140 L400 205 L640 205 L640 320 L0 320 Z" fill="#a3a38a"/>
<path d="M300 140 L275 168 L300 160 L325 170 Z" fill="#fff"/>
<rect x="0" y="260" width="640" height="60" fill="#38bdf8"/>
<ellipse cx="190" cy="70" rx="60" ry="26" fill="#f1f5f9" stroke="#94a3b8"/><ellipse cx="230" cy="64" rx="45" ry="22" fill="#f1f5f9" stroke="#94a3b8"/>
<g stroke="#1d4ed8" stroke-width="3"><line x1="180" y1="100" x2="170" y2="130"/><line x1="200" y1="100" x2="190" y2="130"/><line x1="220" y1="100" x2="210" y2="130"/></g>
<g stroke="#dc2626" stroke-width="3" fill="none"><path d="M480 255 C480 200 480 150 440 100"/><path d="M520 255 C530 210 530 160 500 110"/></g>
<text x="500" y="285" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Verdunstung</text>
<text x="135" y="160" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">Niederschläge</text>
<text x="230" y="30" font-size="14" fill="#334155" text-anchor="middle" font-weight="bold">Kondensation (Wolken)</text>
<text x="350" y="125" font-size="14" fill="#334155" font-weight="bold">Schnee und Gletscher</text>
<path d="M240 218 C210 232 170 250 150 262" fill="none" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="248" font-size="14" fill="#1e3a8a" font-weight="bold">Fluss</text>
<g stroke="#334155" stroke-width="2" stroke-dasharray="4 4"><line x1="90" y1="215" x2="90" y2="250"/><line x1="70" y1="215" x2="70" y2="250"/></g>
<text x="75" y="305" font-size="14" fill="#fff" font-weight="bold">Versickerung und Grundwasser</text>
<text x="440" y="305" font-size="16" fill="#fff" font-weight="bold">OZEAN</text>
</svg>`,
      caption: "Der Kreislauf wird von der Sonne (die das Wasser verdunsten lässt) und von der Schwerkraft (die das Wasser zurückfallen und fließen lässt) angetrieben."
    },
    {
      type: "example",
      title: "Wie viel Wasser fällt? Die Wasserbilanz",
      html: `<p>Ein Regen von <b>1 mm</b> entspricht <b>1 Liter Wasser pro m²</b>. Wenn an einem Gewittertag 50 mm auf ein Einzugsgebiet von <b>20 km²</b> fallen, wie viel Wasser kommt dann an?</p>
<ol>
<li>20 km² = 20 000 000 m².</li>
<li>50 mm = 50 L/m² → 50 × 20 000 000 = <b>1 000 000 000 L</b> = 10⁹ L = <b>1 Million m³</b>.</li>
</ol>
<p>Ein olympisches Schwimmbecken fasst 2500 m³: Das sind etwa <b>400 olympische Schwimmbecken</b>. Eine Wasserbilanz vergleicht Niederschläge (N), Evapotranspiration (V) und Abfluss (A): In einem stabilen Einzugsgebiet gilt N ≈ V + A. Wenn die Entnahmen die Neubildung übersteigen, sinkt der Grundwasserspiegel.</p>`
    },
    {
      type: "example",
      title: "Wie viel Salz steckt in einem Becken Meerwasser?",
      html: `<p>Meerwasser hat eine mittlere Dichte von etwa <b>1,025 kg/L</b> und einen Salzgehalt von <b>35 ‰</b>. Wie viel Salz erhält man, wenn man <b>200 L</b> Meerwasser verdunsten lässt?</p>
<ol>
<li>Masse des Wassers: 200 L × 1,025 kg/L = 205 kg.</li>
<li>Masse der Salze: 205 × 0,035 = <b>etwa 7,2 kg</b>.</li>
</ol>
<p>Nicht alle Salze sind Natriumchlorid: In der Praxis der Salinen gewinnt man zuerst den Gips und dann das Speisesalz (NaCl) und lässt die „Mutterlaugen“ zurück, die reich an Magnesium und Kalium sind.</p>`
    },
    {
      type: "text",
      title: "Ozeane und Meere",
      html: `<p>Die drei großen Ozeane sind der <b>Pazifik</b> (etwa 165 Millionen km², fast die Hälfte der Ozeanfläche und mehr als alle Landmassen zusammen), der <b>Atlantik</b> (etwa 106 Millionen km²) und der <b>Indische Ozean</b> (etwa 70 Millionen km²); das <b>Nordpolarmeer</b> und das <b>Südpolarmeer</b> (Antarktischer Ozean) sind kleiner. In Wirklichkeit bilden sie einen einzigen Weltozean. Die mittlere Tiefe beträgt etwa <b>3700 m</b>; die größte ist der <b>Marianengraben</b> (Challengertief) mit etwa <b>10 900 m</b>: Der Mount Everest (8849 m) würde hineinpassen, mit mehr als 2 km Wasser über dem Gipfel.</p>
<p>Die <b>Meeresböden</b> haben eine vielfältige Morphologie: <b>Kontinentalschelf</b> (bis etwa 200 m, reich an Leben und Fischerei), <b>Kontinentalhang</b>, <b>Tiefseebecken</b>, die <b>mittelozeanischen Rücken</b> (untermeerische Gebirgsketten, in denen neue Kruste entsteht) und die <b>Tiefseegräben</b> (wo die Kruste in den Mantel abtaucht): Themen im Zusammenhang mit der Plattentektonik.</p>
<p>Ein <b>Meer</b> ist ein kleinerer, vom Festland begrenzter Teil des Ozeans (ein Randmeer wie das Mittelmeer, das nur durch die Straße von Gibraltar mit dem Ozean verbunden ist; ein offenes Meer wie das Karibische Meer).</p>
<p>Die Temperatur nimmt mit der Tiefe ab: Die Oberflächenschicht (etwa 100–200 m), durch Wellen und Wind durchmischt, ist warm; unterhalb der <b>Sprungschicht</b> (Thermokline) sinkt die Temperatur rasch; ab mehr als 1000 m ist sie fast konstant, etwa 2–4 °C.</p>`
    },
    {
      type: "text",
      title: "Die Bewegungen des Meeres: Wellen, Gezeiten und Strömungen",
      html: `<ul>
<li><b>Wellen</b>: vom Wind verursacht. Das Wasser bewegt sich nicht vorwärts: Die Teilchen beschreiben Kreise, und die <b>Energie</b> breitet sich aus. Wellen wachsen mit Windgeschwindigkeit, Winddauer und <b>Fetch</b> (der Länge der Meeresfläche, über die der Wind weht). <b>Tsunamis</b> sind sehr lange Wellen (bis zu 100–200 km zwischen zwei Wellenbergen), ausgelöst durch Seebeben oder Erdrutsche: Auf offener See laufen sie mit etwa 800 km/h und sind weniger als einen Meter hoch, dann werden sie langsamer und türmen sich auf, wenn sie sich der Küste nähern.</li>
<li><b>Gezeiten</b>: zwei Fluten und zwei Ebben etwa alle 24 h 50 min, durch die Gravitationsanziehung von Mond und Sonne.</li>
<li><b>Strömungen</b>: große Flüsse im Meer.
<ul>
<li><b>Oberflächenströmungen</b>: von den <b>vorherrschenden Winden</b> verursacht und von der <b>Corioliskraft</b> abgelenkt; sie bilden große Wirbel (<b>Gyres</b>), die sich auf der Nordhalbkugel im Uhrzeigersinn und auf der Südhalbkugel gegen den Uhrzeigersinn drehen. Beispiel: der <b>Golfstrom</b>, der warmes Wasser vom Golf von Mexiko nach Nordeuropa bringt und das Klima der Britischen Inseln milder macht als das von Labrador auf derselben Breite.</li>
<li><b>Tiefenströmungen</b> (<b>thermohaline Zirkulation</b>): verursacht durch Unterschiede in <b>Temperatur</b> und <b>Salzgehalt</b>, also in der Dichte. Das kalte, salzhaltige Wasser nahe den Polen sinkt ab und fließt am Meeresboden zum Äquator: ein globales „Förderband“, das für einen vollen Umlauf etwa 1000 Jahre braucht.</li>
</ul></li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Die Plastikenten, die von den Strömungen erzählen",
      html: `<p>1992 verlor ein Frachter im Pazifik einen Container mit 28 800 Badespielzeugen aus Plastik (Enten, Schildkröten, Biber, Frösche). Ozeanografen verfolgten, wo die Spielzeuge an den Stränden von Alaska, Japan und Jahre später an anderen Küsten des Nordatlantiks angespült wurden, und rekonstruierten so die Oberflächenströmungen und die Wirbel der Gyres. Noch heute entstehen die großen Plastikmüllteppiche, wie der „Great Pacific Garbage Patch“, genau dort, wo die Strömungen der Gyres zusammenlaufen und das Wasser zum Stillstand kommt.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wasser und Ozeane",
      questions: [
        { type: "mc", q: "Wie viel Prozent des Wassers der Erde sind Süßwasser?", options: ["etwa 2,5 %", "etwa 25 %", "etwa 50 %"], answer: 0, explain: "97,5 % sind Salzwasser, und vom kleinen Süßwasseranteil befindet sich fast alles im Eis." },
        { type: "tf", q: "Der Golfstrom trägt dazu bei, das Klima Nordwesteuropas milder zu machen.", answer: true, explain: "Er transportiert warmes Wasser aus den Tropen nach Norden." },
        { type: "num", q: "Wie viele Liter Wasser bringt ein Regen von 25 mm auf ein Feld von 100 m²?", answer: 2500, unit: "L", explain: "1 mm = 1 L/m²: 25 × 100 = 2500 L." }
      ]
    },
    {
      type: "text",
      title: "Flüsse und Einzugsgebiete",
      html: `<p>Ein <b>Fluss</b> ist ein Gewässer, das in einem Flussbett von der <b>Quelle</b> zur <b>Mündung</b> fließt. Das Gebiet, das alles Wasser sammelt, das einen Fluss speist, ist sein <b>Einzugsgebiet</b>, von den Nachbargebieten durch die <b>Wasserscheide</b> getrennt. Der Hauptfluss nimmt die <b>Nebenflüsse</b> auf; ins Meer mündet er als <b>Delta</b> (mit Verzweigungen und abgelagertem Land: Po, Nil, Mississippi) oder als <b>Trichtermündung</b> (<b>Ästuar</b>, ein zum Meer offener Trichter, in dem die Gezeiten stark sind: Themse, Seine).</p>
<p>Der Flusslauf gliedert sich in drei Abschnitte:</p>
<ul>
<li><b>Oberlauf</b> (Gebirge): starkes Gefälle, schnelles Wasser, das <b>erodiert</b> und V-förmige Täler gräbt;</li>
<li><b>Mittellauf</b>: geringeres Gefälle, Transport von Geröll;</li>
<li><b>Unterlauf</b> (Ebene): langsam, bildet <b>Mäander</b> und <b>lagert</b> Sedimente <b>ab</b> (Schwemmland), bis zur Mündung.</li>
</ul>
<p>Der <b>Abfluss</b> ist das Wasservolumen, das in einer Sekunde durch einen Querschnitt fließt (m³/s). Das <b>Abflussregime</b> ist der Verlauf des Abflusses im Jahr: <b>pluvial</b> (hängt vom Regen ab: Apennin), <b>nival</b> oder <b>glazial</b> (Maximum im Frühling und Sommer durch die Schnee- und Eisschmelze: Alpen), <b>gemischt</b>.</p>
<p>Einige Zahlen: Der <b>Po</b> ist der längste Fluss Italiens (652 km) und der wasserreichste (mittlerer Abfluss an der Mündung um 1500 m³/s); der <b>Nil</b> (etwa 6650 km) und der <b>Amazonas</b> (etwa 6400 km) streiten um den Längenrekord; der Amazonas ist der erste beim Abfluss (etwa 200 000 m³/s, rund ein Fünftel des gesamten Süßwassers, das die Flüsse in die Ozeane leiten).</p>`
    },
    {
      type: "3d",
      title: "Die Wasserlandschaft",
      scene: "terrain",
      options: { features: {
        glacier: { label: "Gletscher", html: "<p>Eine Eismasse, die unter ihrem eigenen Gewicht langsam ins Tal fließt. Wenn sie schmilzt, speist sie Flüsse und bildet Gletscherseen.</p>" },
        source: { label: "Quelle", html: "<p>Der Punkt, an dem Grund- oder Schmelzwasser an die Oberfläche tritt und der Fluss beginnt.</p>" },
        river: { label: "Fluss", html: "<p>Ein Gewässer, das zum Meer oder in einen See fließt. Es erodiert im Gebirge und lagert in der Ebene ab.</p>" },
        valley: { label: "Tal", html: "<p>Vom Fluss (V-förmig) oder von einem Gletscher (U-förmig) ausgeformt.</p>" },
        lake: { label: "See", html: "<p>Ein von Land umgebenes Becken mit Süß- oder Salzwasser. Er kann glazial, vulkanisch, tektonisch oder ein Stausee sein.</p>" },
        delta: { label: "Delta", html: "<p>Das Gebiet an der Mündung, in dem der Fluss Sedimente ablagert und sich in mehrere Arme teilt.</p>" },
        sea: { label: "Meer", html: "<p>Wo der ganze Kreislauf endet ... und mit der Verdunstung wieder beginnt.</p>" },
        plain: { label: "Ebene", html: "<p>Aus den Sedimenten des Flusses entstanden (Schwemmlandebene): Die Po-Ebene ist die größte Italiens.</p>" }
      } },
      caption: "Tippe auf die Teile der Landschaft: Verfolge den Weg des Wassers von der Quelle bis zum Delta."
    },
    {
      type: "text",
      title: "Seen, Grundwasser und Gletscher",
      html: `<p><b>Seen</b>: Wassermassen, die sich in einer Senke sammeln. Nach ihrer Entstehung unterscheidet man:</p>
<ul>
<li><b>glaziale</b> Seen: von Gletschern ausgeschürft oder aufgestaut (die großen Voralpenseen: Lago Maggiore, Comer See, Gardasee; die Großen Seen Nordamerikas);</li>
<li><b>tektonische</b> Seen: in Senken, die durch Bewegungen der Kruste entstanden sind (Baikalsee, der tiefste mit 1642 m, der etwa 20 % des Süßwassers an der Oberfläche enthält);</li>
<li><b>vulkanische</b> Seen: in Kratern (Bolsena, Albano, Bracciano: Krater und Calderen alter Vulkane);</li>
<li><b>Stauseen</b> (durch Erdrutsche, Dämme), <b>Küstenseen</b> (Lagunen), <b>Karstseen</b>.</li>
</ul>
<p>Der flächenmäßig größte See Italiens ist der <b>Gardasee</b> (368 km²); der tiefste ist der Comer See (etwa 410 m).</p>
<p><b>Grundwasser</b>: Das versickernde Wasser füllt die Poren <b>durchlässiger</b> Gesteine (Sande, Kiese, zerklüftete Kalke), bis es auf eine <b>undurchlässige</b> Schicht (Ton) trifft: Es bildet ein <b>Grundwasservorkommen</b> (einen Aquifer). Tritt es an die Oberfläche, entsteht eine <b>Quelle</b> (in der Po-Ebene heißen sie <b>Risorgive</b> oder Fontanili). <b>Brunnen</b> erreichen es. In Kalkgebieten löst das Wasser das Gestein auf und erzeugt den <b>Karst</b>: Höhlen, Dolinen, unterirdische Flüsse.</p>
<p><b>Gletscher</b>: große Eismassen, die entstehen, wenn sich Schnee über Jahre oder Jahrhunderte verdichtet. Die <b>Eisschilde</b> (Antarktis und Grönland) enthalten etwa 99 % des Eises der Erde: Würde die gesamte Antarktis schmelzen, stiege der Meeresspiegel um etwa 58 m; bei Grönland um etwa 7 m. Die <b>Alpengletscher</b> (Talgletscher) fließen mit wenigen Metern pro Jahr und gelten als Wächter des Klimas: In 150 Jahren haben die alpinen mehr als die Hälfte ihres Volumens verloren.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Hydrosphäre zu verstehen",
      intro: "Wenn dir die Zahlen zum Wasser zu abstrakt vorkommen, versuche es mit diesen Darstellungen.",
      tabs: [
        {
          label: "🥤 Eine Wasserflasche",
          html: `<p>Stell dir das gesamte Wasser der Erde in einem großen Kanister von <b>100 Litern</b> vor. Die Ozeane nehmen 97,5 L ein. Nur 2,5 L sind Süßwasser. Davon befinden sich fast 1,7 L im Eis und etwa 0,75 L unter der Erde. Es bleiben etwa <b>0,03 L: ein Esslöffel</b> für alle Flüsse, Seen, den Boden und die Luftfeuchtigkeit. Das gesamte Leben im Süßwasser an der Oberfläche hängt von diesem Löffel ab, den der Wasserkreislauf ständig erneuert.</p>`
        },
        {
          label: "🧂 Warum ist das Meer salzig?",
          html: `<p>Die Flüsse lösen langsam das Gestein auf und tragen kleine Mengen von Mineralsalzen ins Meer; untermeerische Vulkane und hydrothermale Quellen fügen weitere hinzu. Das Wasser verdunstet und lässt die Salze zurück: Sie reichern sich über Millionen von Jahren an. Deshalb ist das Meer salzig und die Flüsse sind es nicht. Der Salzgehalt des Ozeans ist dennoch seit Hunderten von Millionen Jahren ungefähr konstant geblieben, weil die Salze auch wieder entfernt werden: Sie lagern sich als Gesteine (Evaporite) am Meeresboden ab oder werden von Organismen eingebaut.</p>`
        },
        {
          label: "🧊 Warum schwimmt Eis?",
          html: `<p>Wasser ist fast einzigartig: Als Flüssigkeit zieht es sich beim Abkühlen bis <b>4 °C</b> zusammen (größte Dichte, 1,000 g/cm³), dann dehnt es sich unter 4 °C aus und wird beim Gefrieren etwa 9 % weniger dicht (Eis 0,92 g/cm³). Schuld sind die <b>Wasserstoffbrückenbindungen</b>: Im Eis bilden die Moleküle eine sechseckige Struktur mit viel Leerraum. Deshalb schwimmt Eis, Seen frieren von der Oberfläche her zu, und unter der Eisdecke bleibt flüssiges Wasser von etwa 4 °C, in dem Fische und Pflanzen den Winter überleben. Würde Eis untergehen, würden Seen vom Grund her gefrieren, und das Leben sähe ganz anders aus.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Der Aralsee: das Wasser, das verschwand",
      html: `<p>Der Aralsee in Zentralasien war 1960 der viertgrößte See der Welt (etwa 68 000 km²). In den 1960er-Jahren leitete die UdSSR die Flüsse Amudarja und Syrdarja um, um Baumwollfelder zu bewässern: Der See hat mehr als 90 % seiner Fläche verloren, und der südliche Teil ist heute eine Salzwüste (Aralkum). Verrostete Schiffe liegen im Sand. Es ist eines der bekanntesten Beispiele dafür, wie stark menschliches Handeln die Wasserbilanz einer ganzen Region verändern kann, mit Folgen für Klima, Gesundheit und Fischerei.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap der Hydrosphäre: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "ciclo", label: "Wasserkreislauf", x: 50, y: 6, color: "#3b82f6", html: "Verdunstung, Kondensation, Niederschlag, Abfluss.", why: "Der Kreislauf wurde schon von den Griechen erahnt, doch jahrhundertelang glaubte man, die Quellen würden vom Meer durch unterirdische Kanäle gespeist. Im 17. Jahrhundert maßen <b>Pierre Perrault</b> und <b>Edme Mariotte</b> Regen und Abfluss der Seine und zeigten, dass die Niederschläge ausreichten, um die Flüsse zu speisen." },
        { id: "oceani", label: "Ozeane", x: 20, y: 30, color: "#0ea5e9", html: "97,5 % des Wassers, mittlerer Salzgehalt 35 ‰.", why: "Sie haben eine mittlere Tiefe von etwa 3700 m: Die Expedition des britischen Schiffes <b>Challenger</b> (1872–76) war die erste systematische ozeanografische Forschungsreise und entdeckte den Marianengraben." },
        { id: "correnti", label: "Strömungen", x: 20, y: 56, color: "#22c55e", html: "Oberflächenströmungen (Wind) und Tiefenströmungen (thermohalin).", why: "Die Oberflächenströmungen hängen von den Winden und vom Corioliseffekt ab, den <b>Coriolis</b> 1835 beschrieb; die thermohaline Zirkulation wurde 1797 von <b>Benjamin Thompson (Graf Rumford)</b> erahnt und von <b>Wallace Broecker</b> beschrieben, der in den 1980er-Jahren den Ausdruck „Förderband“ prägte." },
        { id: "fiumi", label: "Flüsse und Einzugsgebiete", x: 80, y: 30, color: "#f59e0b", html: "Sie bringen das Wasser von den Bergen zum Meer.", why: "Das Konzept des Einzugsgebiets erklärt, warum Überschwemmungen von dem abhängen, was flussaufwärts geschieht: Das Wasser eines weiten Gebiets konzentriert sich in einem einzigen Querschnitt des Flusses." },
        { id: "laghi", label: "Seen", x: 80, y: 56, color: "#a855f7", html: "Becken mit überwiegend Süßwasser.", why: "Ihre geologische Entstehung (glazial, tektonisch, vulkanisch) verbindet sie mit der Geschichte der Erde: Die Voralpenseen sind ein Erbe der Eiszeiten des Quartärs." },
        { id: "ghiacci", label: "Gletscher", x: 50, y: 70, color: "#06b6d4", html: "69 % des Süßwassers.", why: "Louis Agassiz (1837) schlug als Erster vor, dass große Eiszeiten Europa bedeckt hatten, und erklärte damit die Findlinge, die weit von ihrem Ursprungsgestein entfernt liegen. Heute sind die Gletscher ein Archiv: Die Luftblasen in den Eisbohrkernen der Antarktis erzählen vom Klima der letzten 800 000 Jahre." },
        { id: "falde", label: "Grundwasser", x: 20, y: 86, color: "#ef4444", html: "Unterirdisches Wasser (30 % des Süßwassers).", why: "Das <b>Darcy</b>-Gesetz (1856), gewonnen bei der Untersuchung der Brunnen von Dijon, beschreibt, wie sich Wasser in einem porösen Medium bewegt: Die Geschwindigkeit ist proportional zu Gefälle und Durchlässigkeit." },
        { id: "uomo", label: "Nutzung durch den Menschen", x: 80, y: 86, color: "#14b8a6", html: "Landwirtschaft (etwa 70 % der Entnahmen), Industrie, Haushalte.", why: "Nur ein kleiner Teil des Wassers ist zugänglich: Der nachhaltige Umgang mit der Ressource ist eine der großen Herausforderungen des Jahrhunderts; ein negatives Beispiel ist der Aralsee." }
      ],
      edges: [
        ["ciclo", "oceani", "aus dem Ozean"],
        ["ciclo", "fiumi", "speist"],
        ["oceani", "correnti", "beherbergen"],
        ["fiumi", "laghi", "speisen"],
        ["ghiacci", "fiumi", "speisen"],
        ["ciclo", "falde", "füllt auf"],
        ["falde", "uomo", "genutzt von"],
        ["fiumi", "uomo", "genutzt von"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Flüsse, Seen, Gletscher",
      questions: [
        { type: "mc", q: "Welcher ist der längste Fluss Italiens?", options: ["Tiber", "Po", "Etsch"], answer: 1, explain: "Der Po ist 652 km lang und hat auch den größten Abfluss." },
        { type: "tf", q: "Eis schwimmt, weil es weniger dicht ist als flüssiges Wasser.", answer: true, explain: "Eis 0,92 g/cm³ gegenüber 1,00 g/cm³ bei Wasser." },
        { type: "mc", q: "Wie nennt man das Gebiet, das die Gewässer eines Flusses sammelt?", options: ["Einzugsgebiet", "Delta", "Grundwasserleiter"], answer: 0, explain: "Es ist von den Nachbargebieten durch die Wasserscheide getrennt." }
      ]
    }
  ],
  glossary: [
    { t: "Hydrosphäre", d: "Gesamtheit allen Wassers der Erde in seinen verschiedenen Zuständen." },
    { t: "Hydrologischer Kreislauf", d: "Ständige Zirkulation des Wassers zwischen Ozeanen, Atmosphäre und Landmassen." },
    { t: "Salzgehalt", d: "Menge der gelösten Salze pro kg Wasser (im Mittel 35 ‰ in den Ozeanen)." },
    { t: "Meeresströmung", d: "Bewegung großer ozeanischer Wassermassen." },
    { t: "Thermohaline Zirkulation", d: "Tiefenzirkulation, verursacht durch Unterschiede in Temperatur und Salzgehalt." },
    { t: "Einzugsgebiet", d: "Gebiet, aus dem ein Fluss sein Wasser bezieht." },
    { t: "Abfluss", d: "Wasservolumen, das in einer Sekunde durch einen Querschnitt eines Flusses fließt." },
    { t: "Abflussregime", d: "Verlauf des Abflusses eines Flusses im Jahr." },
    { t: "Delta", d: "Mündung eines Flusses mit mehreren Armen und Sedimentablagerungen." },
    { t: "Grundwasserleiter (Aquifer)", d: "Wasser, das die Poren einer durchlässigen Schicht im Untergrund füllt." },
    { t: "Gletscher", d: "Dauerhafte Eismasse, die sich durch die Schwerkraft langsam bewegt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher Anteil des Süßwassers befindet sich in Gletschern?", options: ["Etwa 69 %", "Etwa 10 %", "Etwa 0,3 %"], answer: 0, explain: "Fast 70 % des Süßwassers sind Eis, vor allem in der Antarktis und auf Grönland." },
      { type: "tf", q: "Der größte Teil der Verdunstung auf der Erde findet über den Ozeanen statt.", answer: true, explain: "Etwa 86 % der gesamten Verdunstung." },
      { type: "mc", q: "Wie nennt man das Wasser, das in den Boden eindringt?", options: ["Oberflächenabfluss", "Versickerung", "Kondensation"], answer: 1, explain: "Die Versickerung speist das Grundwasser." },
      { type: "num", q: "Wie viele Liter bringt ein Regen von 10 mm auf ein Dach von 60 m²?", answer: 600, unit: "L", explain: "10 L/m² × 60 m² = 600 L." },
      { type: "mc", q: "Wie hoch ist der mittlere Salzgehalt der Ozeane?", options: ["3,5 ‰", "35 ‰", "350 ‰"], answer: 1, explain: "35 g Salz pro kg, also 35 ‰ (3,5 %)." },
      { type: "mc", q: "Die Oberflächenströmungen der Gyres drehen sich auf der Nordhalbkugel …", options: ["im Uhrzeigersinn", "gegen den Uhrzeigersinn", "zufällig"], answer: 0, explain: "Wegen der Corioliskraft, die nach rechts ablenkt." },
      { type: "tf", q: "Der Gardasee ist der flächenmäßig größte See Italiens.", answer: true, explain: "Etwa 368 km²." },
      { type: "order", q: "Bringe die Etappen des Wasserkreislaufs in die richtige Reihenfolge.", items: ["Verdunstung", "Kondensation", "Niederschlag", "Oberflächenabfluss oder Versickerung"], explain: "Das Wasser steigt auf, bildet Wolken, fällt zurück und fließt dann ab oder versickert." },
      { type: "text", q: "Wie nennt man die mehrarmige Mündung, die für Po und Nil typisch ist?", answer: ["Delta", "das Delta", "Flussdelta"], explain: "Das Delta entsteht dort, wo der Fluss Sedimente ablagert." },
      { type: "mc", q: "Warum sind die Wellen eines Tsunamis auf offener See kaum zu bemerken?", options: ["Sie sind weniger als einen Meter hoch, aber extrem lang", "Sie sind sehr langsam", "Es sind Schallwellen"], answer: 0, explain: "Sie türmen sich erst auf, wenn sie sich der Küste nähern, wo der Meeresboden den vorderen Teil abbremst." }
    ]
  }
});
