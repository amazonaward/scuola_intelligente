TOPIC('de', {
  id: "l1-geo-citta",
  title: "Städte und Urbanisierung",
  intro: "Seit 2007 leben zum ersten Mal in der Geschichte mehr Menschen in <b>Städten</b> als auf dem Land. Städte nehmen sehr wenig Platz ein (weniger als 3 % der Landfläche), verbrauchen aber den größten Teil der Energie, erwirtschaften den größten Teil des Wohlstands und verursachen den größten Teil der Emissionen. Wie entstehen Städte, wie wachsen sie, wie sind sie aufgebaut? Und wie können sie <b>nachhaltig</b> werden?",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Was eine Stadt ist und wie sie entsteht",
      html: `<p>Es gibt keine einheitliche Definition der Stadt: Die Statistiken verwenden unterschiedliche Schwellenwerte (in Dänemark genügen 200 Einwohner, in Japan 50.000). In der Geografie ist eine <b>Stadt</b> eine dauerhafte, dicht besiedelte Siedlung mit <b>nichtlandwirtschaftlichen</b> Funktionen (Handel, Handwerk, Verwaltung, Kultur, Dienstleistungen), die auf das umliegende Gebiet ausstrahlt.</p>
<p>Die ersten Städte entstanden vor etwa <b>5.000-6.000 Jahren</b> in <b>Mesopotamien</b> (<b>Uruk</b> im heutigen Irak, eine der ältesten, mit Zehntausenden Einwohnern) und wenig später am Nil, am Indus (Mohenjo-Daro) und am Gelben Fluss. Voraussetzung: Die Landwirtschaft erzeugte einen <b>Überschuss</b> an Nahrung, sodass ein Teil der Bevölkerung etwas anderes tun konnte (Handwerker, Priester, Soldaten, Schreiber). Die antiken Städte lagen in der Nähe von Wasser, an Kreuzungen von Verkehrswegen oder auf leicht zu verteidigenden Anhöhen.</p>
<p>Die <b>Urbanisierung</b> ist der Prozess, bei dem der Anteil der Bevölkerung wächst, der in Städten lebt. Sie setzte mit der <b>Industriellen Revolution</b> richtig ein: London hatte 1800 etwa 1 Million Einwohner, 1900 über 6 Millionen. Heute wachsen die Städte am schnellsten in <b>Asien</b> und <b>Afrika</b>: Städte wie Lagos (Nigeria) oder Dhaka (Bangladesch) wachsen jedes Jahr um Hunderttausende Menschen.</p>`
    },
    {
      type: "text",
      title: "2. Die Zahlen der Urbanisierung",
      html: `<ul>
<li>1950: etwa 30 % der Weltbevölkerung leben in Städten. <b>2007</b>: über 50 %. Heute: etwa <b>57 %</b>. Prognose der UNO für <b>2050</b>: etwa <b>68 %</b>.</li>
<li>Nordamerika, Westeuropa, Lateinamerika: über 80 % städtisch. In <b>Italien</b> etwa 71 %. Afrika und Südasien: noch etwa 45-50 %, aber mit sehr rascher Urbanisierung.</li>
<li><b>Metropole</b>: große Stadt mit einem Einflussbereich, der sich auf die Nachbargemeinden erstreckt (<b>Metropolregion</b>, oder <b>Konurbation</b>, wenn die Siedlungen zusammenwachsen).</li>
<li><b>Megastadt</b>: über <b>10 Millionen</b> Einwohner. Heute gibt es etwa 33-37. Die größten: <b>Tokio</b> (etwa 37 Millionen, im Ballungsraum), <b>Delhi</b> (über 30), <b>Shanghai</b>, <b>Dhaka</b>, <b>São Paulo</b>, <b>Mexiko-Stadt</b>, <b>Kairo</b>, <b>Peking</b>, <b>Mumbai</b>, <b>Osaka</b>. Die meisten Megastädte liegen in Asien und in Entwicklungsländern.</li>
<li><b>Megalopolis</b>: große Stadtregionen, die aus mehreren zusammengewachsenen Metropolen bestehen. Der Begriff wurde vom französischen Geografen <b>Jean Gottmann</b> (1961) für die Nordostküste der USA von <b>Boston bis Washington</b> (\"Boswash\") bekannt gemacht, mit über 50 Millionen Einwohnern. Weitere: der Streifen <b>Tokio-Osaka</b> (Tokaido), das <b>Perlflussdelta</b> in China und in Europa die sogenannte <b>\"Blaue Banane\"</b> (London-Benelux-Rhein-Mailand).</li>
</ul>
<p>Städte wachsen durch den <b>Geburtenüberschuss</b>, vor allem aber durch die <b>Landflucht</b>: Die Menschen verlassen das Land (getrieben von der Mechanisierung der Landwirtschaft und der ländlichen Armut, angezogen von Löhnen und Dienstleistungen) und ziehen in die Stadt.</p>`
    },
    {
      type: "3d",
      title: "Auf dem Globus: die Megastädte",
      scene: "globe",
      options: {
        points: [
          { lat: 35.7, lon: 139.7, label: "Tokio", color: "#dc2626" },
          { lat: 28.6, lon: 77.2, label: "Delhi", color: "#dc2626" },
          { lat: 31.2, lon: 121.5, label: "Shanghai", color: "#dc2626" },
          { lat: 23.8, lon: 90.4, label: "Dhaka", color: "#dc2626" },
          { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#f59e0b" },
          { lat: 19.4, lon: -99.1, label: "Mexiko-Stadt", color: "#f59e0b" },
          { lat: 30.0, lon: 31.2, label: "Kairo", color: "#f59e0b" },
          { lat: 19.1, lon: 72.9, label: "Mumbai", color: "#dc2626" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#2563eb" },
          { lat: 6.5, lon: 3.4, label: "Lagos (schnell wachsend)", color: "#16a34a" },
          { lat: 41.9, lon: 12.5, label: "Rom", color: "#7c3aed" }
        ]
      },
      caption: "Rot: asiatische Megastädte; orange: Lateinamerika und Nordafrika; grün: Lagos, eine der dynamischsten Städte der Welt. Beachte, dass die meisten in Asien liegen."
    },
    {
      type: "svg",
      title: "Das Wachstum der Stadtbevölkerung",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="60" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="60" y1="30" x2="60" y2="250" stroke="#111827" stroke-width="2"/>
<rect x="85" y="190" width="70" height="60" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="185" y="160" width="70" height="90" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="285" y="125" width="70" height="125" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
<rect x="385" y="95" width="70" height="155" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<rect x="485" y="60" width="70" height="190" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="120" y="183" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">30%</text>
<text x="220" y="153" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">36%</text>
<text x="320" y="118" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">43%</text>
<text x="420" y="88" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">51%</text>
<text x="520" y="53" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">57%</text>
<text x="120" y="272" font-size="15" text-anchor="middle" fill="#111827">1950</text>
<text x="220" y="272" font-size="15" text-anchor="middle" fill="#111827">1970</text>
<text x="320" y="272" font-size="15" text-anchor="middle" fill="#111827">1985</text>
<text x="420" y="272" font-size="15" text-anchor="middle" fill="#111827">2007</text>
<text x="520" y="272" font-size="15" text-anchor="middle" fill="#111827">heute</text>
<text x="300" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Anteil der Weltbevölkerung in Städten (gerundete Werte)</text>
</svg>`,
      caption: "Die Urbanisierung ist stetig gewachsen: Die Stadtbevölkerung hat die Landbevölkerung etwa 2007 überholt. Die Prozentwerte sind gerundet und stammen aus UN-Schätzungen."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Zahlen und Definitionen",
      questions: [
        { type: "mc", q: "Wann hat die Stadtbevölkerung die Landbevölkerung zum ersten Mal überholt?", options: ["1850", "1950", "Etwa 2007"], answer: 2, explain: "Etwa 2007 wurde laut UNO die Schwelle von 50 % Stadtbevölkerung überschritten." },
        { type: "mc", q: "Wie viele Einwohner muss eine Megastadt (ungefähr) haben?", options: ["Mehr als 1 Million", "Mehr als 10 Millionen", "Mehr als 100 Millionen"], answer: 1, explain: "Per Konvention hat eine Megastadt mehr als 10 Millionen Einwohner." },
        { type: "text", q: "Wie heißt die Stadtregion, die aus mehreren zusammengewachsenen Metropolen besteht (z. B. Boston-Washington)?", answer: ["Megalopolis", "Megalopolis (Boswash)", "die Megalopolis", "Megalopole", "die Megalopole"], explain: "Megalopolis, ein Begriff, den Jean Gottmann 1961 bekannt gemacht hat." }
      ]
    },
    {
      type: "text",
      title: "3. Wie eine Stadt aufgebaut ist",
      html: `<p>Geografen haben einige <b>Modelle</b> entwickelt, um die innere Struktur der Städte zu beschreiben:</p>
<ul>
<li><b>Modell der konzentrischen Zonen</b> (Ernest Burgess, Chicago, 1925): in der Mitte das <b>CBD</b> (<i>Central Business District</i>, das Geschäftszentrum), dann eine Übergangszone, Arbeiterviertel, Wohnviertel der Mittelschicht und schließlich am Rand die Viertel der Pendler.</li>
<li><b>Sektorenmodell</b> (Homer Hoyt, 1939): Die Stadt entwickelt sich keilförmig entlang der großen Verkehrswege (Straßen, Bahnlinien, Flüsse).</li>
<li><b>Mehrkernmodell</b> (Harris und Ullman, 1945): mehrere Zentren (Hafen, Universität, Industriegebiet, Einkaufszentrum) mit unterschiedlichen Funktionen.</li>
</ul>
<p>Die wichtigsten <b>Stadtfunktionen</b> sind Wohnen, Handel, Industrie, Dienstleistungen (Schule, Gesundheit, Verwaltung), Kultur und Freizeit, Infrastruktur und Verkehr. Die Stadt gliedert sich in <b>Stadtviertel</b>: Altstadt, Wohngebiete, Randgebiete, Industriegebiete, Grünflächen.</p>
<p>Die <b>Altstadt</b> italienischer und europäischer Städte bewahrt oft den mittelalterlichen Grundriss (enge Gassen, Plätze, Mauern), der häufig aus dem antiken <b>römischen Castrum</b> hervorgegangen ist (zwei sich kreuzende Straßen, <i>cardo</i> und <i>decumanus</i>, wie in Turin oder Florenz). Nordamerikanische Städte haben dagegen ein Zentrum mit Wolkenkratzern und einen <b>Schachbrett</b>-Grundriss (Manhattan). Städte der islamischen Welt haben oft eine <b>Medina</b> mit engen Gassen rund um Moschee und Markt (<i>Suq</i>). Lateinamerikanische Städte wurden von den Spaniern rund um eine <b>Plaza Mayor</b> angelegt.</p>`
    },
    {
      type: "svg",
      title: "Das Modell der konzentrischen Zonen von Burgess",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="170" cy="150" r="130" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="100" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
<circle cx="170" cy="150" r="70" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<circle cx="170" cy="150" r="42" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
<circle cx="170" cy="150" r="18" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
<text x="170" y="155" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">1</text>
<text x="170" y="115" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">2</text>
<text x="170" y="85" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">3</text>
<text x="170" y="52" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">4</text>
<text x="170" y="26" font-size="14" text-anchor="middle" fill="#111827" font-weight="bold">5</text>
<text x="340" y="55" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#dc2626">1</tspan> Geschäftszentrum (CBD)</text>
<text x="340" y="95" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#c2410c">2</tspan> Übergangszone (Kleingewerbe)</text>
<text x="340" y="135" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#b45309">3</tspan> Arbeiterviertel</text>
<text x="340" y="175" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">4</tspan> Wohnviertel der Mittelschicht</text>
<text x="340" y="215" font-size="16" fill="#111827"><tspan font-weight="bold" fill="#15803d">5</tspan> Pendlerzone</text>
<text x="340" y="265" font-size="14" fill="#6b7280">Theoretisches Modell (Chicago, 1925): In Wirklichkeit hat jede Stadt ihre eigene Form.</text>
</svg>`,
      caption: "Das konzentrische Modell war eine Beobachtung an Chicago: Die Stadt wächst vom Zentrum nach außen, und die sozialen Gruppen ordnen sich in Ringen an. Heute haben viele Städte mehrere Zentren."
    },
    {
      type: "text",
      title: "4. Probleme und Herausforderungen der Städte",
      html: `<ul>
<li><b>Slums</b> (<i>Slum</i>, <i>Favelas</i>, <i>Bidonvilles</i>): etwa <b>1,1 Milliarden</b> Menschen leben in informellen Siedlungen, ohne Trinkwasser, Kanalisation oder Eigentumsnachweis. <b>Dharavi</b> (Mumbai), <b>Kibera</b> (Nairobi) und <b>Rocinha</b> (Rio de Janeiro) gehören zu den bekanntesten. Es sind aber auch Orte mit großer wirtschaftlicher Lebendigkeit: In Dharavi arbeiten Tausende kleiner Betriebe in den Bereichen Recycling, Leder und Keramik.</li>
<li><b>Verkehr und Smog</b>: Die Städte bündeln Fahrzeuge und Emissionen. Delhi, Lahore und Dhaka gehören zu den am stärksten verschmutzten Städten der Welt; in der Poebene liegen die Feinstaubwerte (PM10, PM2,5) im Winter oft über den Grenzwerten, weil die Berge und die geringe Belüftung die Luft stagnieren lassen.</li>
<li><b>Städtische Wärmeinsel</b>: Asphalt und Beton nehmen Wärme auf und es gibt wenig Grün, sodass die Stadt tagsüber um <b>2-5 °C</b> und in manchen Sommernächten um bis zu 8-10 °C wärmer sein kann als das Umland.</li>
<li><b>Flächenverbrauch</b> und <b>Urban Sprawl</b> (Zersiedelung, Ausdehnung mit geringer Dichte): Das Bauen auf landwirtschaftlichen Flächen versiegelt den Boden und erhöht das Hochwasserrisiko; in Italien gehen jeden Tag viele Hektar Boden verloren.</li>
<li><b>Ungleichheit</b> und <b>Segregation</b> (reiche und arme Viertel), <b>Gentrifizierung</b> (ein Viertel wird aufgewertet und wohlhabendere Bewohner ziehen zu, während die früheren durch hohe Mieten verdrängt werden).</li>
<li><b>Abfall, Lärm, Wohnen</b>: Entsorgung, hohe Mieten, Wohnungsmangel.</li>
<li><b>Risiken</b>: Erdbeben, Überschwemmungen, Hitze; große Küstenstädte (Jakarta, Miami, Venedig, Dhaka) sind vom Meeresspiegelanstieg bedroht. Jakarta sinkt, weil Grundwasser entnommen wird, und Indonesien baut eine neue Hauptstadt, Nusantara, auf der Insel Borneo.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Verkehr in einer Stadt",
      html: `<p>Um 1.000 Menschen ins Zentrum zu bringen, braucht man:</p>
<ul>
<li>etwa <b>800 Autos</b> (mit 1,2 Personen pro Auto): sie bedecken mehr als einen Kilometer zweispurige Straße;</li>
<li>etwa <b>12 volle Busse</b>;</li>
<li>etwa <b>2 Straßenbahnen</b> (oder einen einzigen U-Bahn-Zug mit 6 Wagen).</li>
</ul>
<p>Diese Zahlen sind Größenordnungen, zeigen aber, warum der <b>öffentliche Verkehr</b> das effizienteste Mittel für dichte Städte ist: Er braucht weniger Platz, weniger Energie und verursacht weniger Emissionen <i>pro Fahrgast</i>. Ein Fahrrad belegt etwa ein Zehntel des Platzes eines fahrenden Autos. Deshalb haben viele Städte (Kopenhagen, Amsterdam, Utrecht, Paris) Radwege und Fußgängerzonen ausgebaut.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wie dicht ist deine Stadt?",
      html: `<p>Eine Stadt hat <b>150.000 Einwohner</b> auf <b>60 km²</b>; eine Nachbarstadt hat 150.000 Einwohner auf <b>240 km²</b>.</p>
<ul>
<li>Dichte der ersten = 150.000 ÷ 60 = <b>2.500 Einw./km²</b>.</li>
<li>Dichte der zweiten = 150.000 ÷ 240 = <b>625 Einw./km²</b>.</li>
</ul>
<p>Bei gleicher Einwohnerzahl braucht die zweite <b>viermal so viel Boden</b>: Es braucht mehr Straßen, mehr Rohre, mehr Stromleitungen und mehr Kilometer zur Schule oder zur Arbeit. Deshalb treten viele Stadtplaner für die <b>kompakte Stadt</b> ein. Dichte ist aber nicht alles: Eine dichte Stadt braucht auch Parks und hochwertigen öffentlichen Raum, sonst lebt es sich schlecht.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass eine Stadt auf dem Wasser leben kann?",
      html: `<p><b>Venedig</b> steht auf etwa 118 kleinen Inseln der Lagune, auf Holzpfählen aus Erle, Lärche und Eiche, die in den Schlamm gerammt wurden. Es hat über 400 Brücken. Zum Schutz vor dem \"Hochwasser\" (<i>acqua alta</i>) wurde das System beweglicher Sperrwerke <b>MOSE</b> gebaut, das 2020 in Betrieb ging. Doch die globale Erwärmung und die Bodensenkung (Subsidenz) bleiben eine Herausforderung: Venedig ist ein Labor der <b>Anpassung</b> für alle Küstenstädte.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass es Städte gibt, die auf dem Reißbrett entstanden sind?",
      html: `<p>Einige Hauptstädte wurden am Reißbrett geplant und gebaut: <b>Brasília</b> (Brasilien, 1960 eingeweiht, entworfen von Lúcio Costa und Oscar Niemeyer, in Form eines Flugzeugs), <b>Canberra</b> in Australien (1913), <b>Washington</b> D.C., <b>Abuja</b> in Nigeria (seit 1991). Nicht alle funktionieren wie geplant: Eine Stadt lebt nicht nur von Plänen, sondern von den Gewohnheiten ihrer Bewohner.</p>`
    },
    {
      type: "text",
      title: "5. Auf dem Weg zu nachhaltigen Städten",
      html: `<p>Städte nehmen etwa 3 % der Landfläche ein, verbrauchen aber über zwei Drittel der weltweiten Energie und verursachen etwa 70 % der energiebedingten CO₂-Emissionen. Gerade deshalb ist die Stadt der Ort, an dem die ökologische Wende am besten gelingen kann: Dichte bedeutet effizientere Dienstleistungen, öffentlichen Verkehr und weniger Flächenverbrauch.</p>
<p>Das <b>Ziel 11</b> der Agenda 2030 der UNO trägt genau diesen Titel: \"<b>Nachhaltige Städte und Gemeinden</b>\": Städte inklusiv, sicher, widerstandsfähig und nachhaltig machen. Einige Strategien:</p>
<ul>
<li><b>Nachhaltige Mobilität</b>: U-Bahnen, Straßenbahnen, Elektrobusse, Radwege, verkehrsberuhigte Zonen. Beispiel: <b>Curitiba</b> (Brasilien) erfand in den 1970er-Jahren Sonderspuren für Schnellbusse (BRT), die später Hunderte Städte übernahmen.</li>
<li><b>Kompakte Stadt</b> und <b>\"15-Minuten-Stadt\"</b> (vorgeschlagen von Professor Carlos Moreno und in Paris übernommen): Die wichtigsten Einrichtungen (Schule, Geschäfte, Arzt, Grün) sind zu Fuß oder mit dem Rad in 15 Minuten erreichbar.</li>
<li><b>Mehr Grün</b>: Parks, begrünte Dächer, Bäume, die die Wärmeinsel verringern (ein ausgewachsener Baum kann pro Jahr mehrere Dutzend kg CO₂ aufnehmen und kühlen Schatten spenden). In Mailand hat der <b>Bosco Verticale</b> (Stefano Boeri, 2014) etwa 800 Bäume (und Tausende Sträucher) an den Fassaden zweier Türme.</li>
<li><b>Effiziente Gebäude</b>: Dämmung, Solarmodule, Fernwärme (in Turin und Brescia), energetische Sanierung.</li>
<li><b>Kreislaufwirtschaft</b>: Mülltrennung, Recycling, Wiederverwendung.</li>
<li><b>Beteiligung</b>: Die Bürger entscheiden mit Bürgerhaushalten und Stadtteilversammlungen mit.</li>
<li>Intelligente Städte (<b>Smart Cities</b>) nutzen Sensoren und Daten, um Verkehr, Abfall, Beleuchtung und Wasser zu steuern, müssen aber auch den <b>Datenschutz</b> wahren.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Was soll mit dem Hauptplatz geschehen?",
      html: `<p>Du bist Verkehrsdezernent einer Stadt mit 300.000 Einwohnern. Das Zentrum ist von Autos verstopft und die Luft oft verschmutzt. Du hast die Möglichkeit, den Hauptplatz umzugestalten, der heute ein Parkplatz für 150 Autos ist.</p>`,
      question: "Welche Entscheidung scheint dir für eine nachhaltige Stadt die beste?",
      options: [
        { label: "Eine größere Tiefgarage bauen", outcome: "Sie zieht noch mehr Autos ins Zentrum: Der Verkehr nimmt zu, die Emissionen bleiben hoch und die Kosten sind sehr hoch." },
        { label: "Den Platz zur Fußgängerzone mit Bäumen und Bänken machen und Busse und Straßenbahnen ausbauen", outcome: "In vielen Städten (Pontevedra in Spanien, Oslo, Bologna mit den Tempo-30-Zonen) sind Verkehr und Unfälle zurückgegangen, während die Geschäfte weiter florierten oder sogar wuchsen." },
        { label: "Nichts tun, um niemanden zu verärgern", outcome: "Das Problem bleibt und verschärft sich mit der Zunahme der Autos, und die Luftverschmutzung schadet der Gesundheit der Bürger." }
      ],
      answer: 1,
      explain: "Studien zu europäischen Städten zeigen, dass Alternativen zum Privatverkehr (öffentlicher Verkehr, Radwege, Fußgängerbereiche) Verkehr und Luftverschmutzung verringern; Händler befürchten oft Umsatzeinbußen, die dann nicht eintreten, weil Fußgänger mehr Zeit und Geld in den Geschäften lassen."
    },
    {
      type: "alternatives",
      title: "Weitere Wege, Städte zu verstehen",
      intro: "Eine Stadt ist ein komplexes System: Hier sind drei Arten, sie zu betrachten.",
      tabs: [
        {
          label: "🫀 Die Stadt als Organismus",
          html: `<p>Eine Stadt lässt sich mit einem <b>Körper</b> vergleichen: Straßen und Eisenbahnen sind die <b>Arterien</b>, die Menschen und Waren transportieren; Kanalisation und Kläranlagen sind der <b>Verdauungsapparat</b>; Strom und Internet sind das <b>Nervensystem</b>; die Parks sind die <b>Lungen</b>; das Zentrum ist das wirtschaftliche <b>Herz</b>. Wie ein Körper verbraucht die Stadt Energie und erzeugt Abfall (ihr <b>urbaner Stoffwechsel</b>): Eine nachhaltige Stadt versucht, weniger zu verbrauchen und das Ausgeschiedene zu recyceln.</p>`
        },
        {
          label: "🗺️ Den Stadtplan lesen",
          html: `<p>Die Form der Straßen erzählt Geschichte: <b>Gebogene und enge</b> Straßen sind typisch für mittelalterliche Zentren; <b>rechtwinklige</b> Straßen (schachbrettartig) für römische Castra oder geplante Städte (Turiner Zentrum, Barcelonas Eixample); große <b>Alleen</b> und <b>Boulevards</b> sind das Erbe der Reformen des 19. Jahrhunderts (das Paris Haussmanns); <b>fischgrätenartige</b> Straßen oder <b>Sackgassen</b> sind typisch für die Vorstädte des 20. Jahrhunderts. Probiere es mit einem Plan deiner Stadt: Wie viele dieser Formen findest du?</p>`,
          widget: "match",
          options: { pairs: [["Gebogene Straßen und Gassen", "Mittelalterliches Zentrum"], ["Rechtwinkliges Raster", "Römisches Castrum oder geplante Stadt"], ["Große Alleen mit Bäumen", "Reform des 19. Jahrhunderts"], ["Sackgassen und Einfamilienhäuser", "Vorort des 20. Jahrhunderts"]] }
        },
        {
          label: "🌡️ Die Wärmeinsel",
          html: `<p>Ein Augusttag: Die Wiese eines Parks misst etwa 30 °C, der Asphalt in der Sonne bis zu <b>60 °C</b>, ein helles Betondach 45 °C. Asphalt nimmt Licht auf, gibt es nachts als Wärme wieder ab, und Beton verdunstet nicht wie Blätter. Deshalb kühlt die Stadt nachts nicht ab. Lösungen: helle oder begrünte Dächer, mehr Bäume, wasserdurchlässige Beläge, Brunnen, weniger Klimaanlagen (die Wärme nach außen abgeben).</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fffbeb"/><polyline points="30,150 100,130 180,60 250,50 320,70 400,120 470,140" fill="none" stroke="#dc2626" stroke-width="4"/><text x="250" y="35" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">Stadtzentrum (wärmer)</text><text x="60" y="175" font-size="14" fill="#15803d" font-weight="bold">Land</text><text x="400" y="175" font-size="14" fill="#15803d" font-weight="bold">Park / Land</text><text x="250" y="190" font-size="14" text-anchor="middle" fill="#111827">Temperaturverlauf von einer Seite zur anderen</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: die Stadt, warum es sie gibt und wie sie sich verändert",
      nodes: [
        { id: "surplus", label: "Landwirtschaft und Überschuss", x: 20, y: 8, color: "#16a34a", html: "Mehr Nahrung erzeugen, als die Bauern brauchen.", why: "Ohne landwirtschaftlichen Überschuss könnte niemand Handwerker oder Priester sein: Die Stadt entsteht nach der landwirtschaftlichen Revolution, vor etwa 5.000-6.000 Jahren in Mesopotamien, dank Bewässerung und Systemen zur Getreidelagerung." },
        { id: "funzioni", label: "Stadtfunktionen", x: 80, y: 8, color: "#2563eb", html: "Handel, Verwaltung, Kultur, Dienstleistungen.", why: "Die Stadt bündelt Austausch und Informationen: Mehr Menschen auf engem Raum bedeuten mehr Begegnungen, mehr Ideen und mehr Markt (die 'Agglomerationsvorteile', die der Ökonom Alfred Marshall 1890 untersuchte)." },
        { id: "urbanizzazione", label: "Urbanisierung", x: 50, y: 30, color: "#f59e0b", html: "Der Anteil der Bewohner, die in Städten leben, wächst.", why: "Mit der Industriellen Revolution (ab etwa 1760) konzentrieren die Fabriken die Arbeit in den Städten; heute wird das Stadtwachstum von Asien und Afrika und von der Mechanisierung der Landwirtschaft getrieben, die auf dem Land Arbeitskräfte freisetzt." },
        { id: "struttura", label: "Struktur und Modelle", x: 20, y: 56, color: "#a855f7", html: "Zentrum, Randgebiete, Viertel, konzentrische Modelle und Sektorenmodelle.", why: "Die Modelle von Burgess, Hoyt, Harris und Ullman stammen aus der Chicagoer Schule, die in den 1920er-Jahren die Stadt als soziales Labor untersuchte." },
        { id: "problemi", label: "Probleme", x: 80, y: 56, color: "#dc2626", html: "Smog, Verkehr, Slums, Wärmeinsel.", why: "Sie sind Folgen der Konzentration: mehr Menschen und mehr Aktivitäten auf demselben Raum, oft schneller gewachsen als die Dienstleistungen. In vielen Städten geht die informelle Ausdehnung der Infrastruktur voraus." },
        { id: "sostenibilita", label: "Nachhaltige Städte", x: 50, y: 80, color: "#14b8a6", html: "Mobilität, Grün, effiziente Gebäude, Beteiligung.", why: "Ziel 11 der Agenda 2030 und die Neue Urbane Agenda (UNO, Habitat III, Quito 2016) erkennen an, dass sich die Zukunft des Planeten zu einem großen Teil in den Städten entscheidet." },
        { id: "futuro", label: "Die urbane Zukunft", x: 50, y: 96, color: "#ec4899", html: "Etwa 2,5 Milliarden neue Stadtbewohner bis 2050.", why: "Laut UNO findet fast 90 % des Stadtwachstums in Asien und Afrika statt: Die Entscheidungen, die jetzt über Wohnraum und Verkehr getroffen werden, bestimmen den Ressourcenverbrauch für Jahrzehnte." }
      ],
      edges: [
        ["surplus", "funzioni", "ermöglicht"],
        ["funzioni", "urbanizzazione", "ziehen an →"],
        ["urbanizzazione", "struttura", "bringt hervor"],
        ["urbanizzazione", "problemi", "erzeugt"],
        ["problemi", "sostenibilita", "erfordern"],
        ["struttura", "sostenibilita", "leitet die"],
        ["sostenibilita", "futuro", "bereitet die"]
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Seit <b>2007</b> leben mehr Menschen in Städten als auf dem Land (heute etwa 57 %, 2050 etwa 68 %).</li>
<li><b>Metropole</b>, <b>Megastadt</b> (über 10 Millionen), <b>Megalopolis</b> (mehrere zusammengewachsene Metropolen: Boswash).</li>
<li>Stadtmodelle: <b>konzentrisch</b> (Burgess), <b>Sektoren</b> (Hoyt), <b>mehrere Kerne</b> (Harris-Ullman).</li>
<li>Probleme: Slums (1,1 Milliarden Menschen), Smog, Verkehr, Wärmeinsel, Flächenverbrauch, Ungleichheit.</li>
<li><b>Nachhaltige Städte</b>: gemeinsame Mobilität, Stadtgrün, Energieeffizienz, Kreislaufwirtschaft, Ziel 11 der Agenda 2030.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Struktur und Nachhaltigkeit",
      questions: [
        { type: "mc", q: "Was ist die städtische Wärmeinsel?", options: ["Ein Gebiet der Stadt, das wärmer ist als das umliegende Land", "Eine Insel im Meer in der Nähe der Stadt", "Ein Viertel mit vielen Parks"], answer: 0, explain: "Asphalt und Beton speichern Wärme, und die Städte sind wärmer als das Land, vor allem nachts." },
        { type: "mc", q: "Welche Nummer hat das Ziel der Agenda 2030, das den nachhaltigen Städten gewidmet ist?", options: ["Ziel 2", "Ziel 11", "Ziel 17"], answer: 1, explain: "Ziel 11 lautet \"Nachhaltige Städte und Gemeinden\"." },
        { type: "tf", q: "Das Modell von Burgess beschreibt die Stadt als eine Reihe konzentrischer Ringe um das Geschäftszentrum.", answer: true, explain: "Es ist das Modell der konzentrischen Zonen, 1925 in Chicago entwickelt." }
      ]
    }
  ],
  glossary: [
    { t: "Urbanisierung", d: "Zunahme des Anteils der Bevölkerung, der in Städten lebt, und Wachstum der städtischen Gebiete." },
    { t: "Metropole", d: "Große Stadt mit wichtigen Funktionen und einem Einflussbereich, der die Nachbarorte einschließt." },
    { t: "Megastadt", d: "Stadt mit mehr als 10 Millionen Einwohnern." },
    { t: "Megalopolis", d: "Große Stadtregion aus mehreren zusammengewachsenen Metropolen (z. B. Boston-Washington)." },
    { t: "Konurbation", d: "Zusammenwachsen mehrerer benachbarter Siedlungen zu einem einzigen Ganzen." },
    { t: "CBD", d: "Central Business District: das Geschäftszentrum der Stadt mit Büros, Banken und Handel." },
    { t: "Landflucht", d: "Abwanderung der Bevölkerung vom Land in die Städte." },
    { t: "Slum", d: "Informelle, arme städtische Siedlung mit provisorischen Behausungen und wenigen Dienstleistungen (Slum, Favela)." },
    { t: "Wärmeinsel", d: "Phänomen, bei dem städtische Gebiete höhere Temperaturen haben als das ländliche Umland." },
    { t: "Gentrifizierung", d: "Aufwertung eines Arbeiterviertels mit dem Zuzug wohlhabenderer Bewohner und steigenden Mieten." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Voraussetzung hat die Entstehung der ersten Städte ermöglicht?", options: ["Ein landwirtschaftlicher Überschuss, der Menschen von der Feldarbeit freistellte", "Die Erfindung des Automobils", "Die Entdeckung Amerikas"], answer: 0, explain: "Als die Bauern mehr Nahrung erzeugten als nötig, konnten sich andere Menschen dem Handwerk, dem Handel und der Verwaltung widmen." },
      { type: "num", q: "Wenn 57 % von 8 Milliarden Menschen in Städten leben, wie viele Milliarden Menschen sind städtisch (auf eine Dezimalstelle gerundet)?", answer: 4.6, tol: 0.1, unit: "Milliarden", explain: "8 × 0,57 = 4,56 ≈ 4,6 Milliarden." },
      { type: "mc", q: "Wer prägte den Begriff 'Megalopolis' für die Nordostküste der USA?", options: ["Jean Gottmann", "Ernest Burgess", "Carlos Moreno"], answer: 0, explain: "Der französische Geograf Jean Gottmann, 1961." },
      { type: "mc", q: "In welcher Zone des Burgess-Modells liegen Büros, Banken und die wichtigsten Geschäfte?", options: ["Pendlerzone", "CBD, das Geschäftszentrum", "Arbeiterviertel"], answer: 1, explain: "Das CBD nimmt das Herz der Stadt ein." },
      { type: "tf", q: "Slums sind immer Orte ohne wirtschaftliche Aktivität.", answer: false, explain: "Viele (wie Dharavi in Mumbai) beherbergen Tausende kleiner Betriebe; es fehlen jedoch Dienstleistungen und Sicherheit." },
      { type: "order", q: "Bringe in die zeitliche Reihenfolge.", items: ["Erste Städte in Mesopotamien", "Industrielle Revolution und Wachstum Londons", "Stadtbevölkerung überholt Landbevölkerung (2007)", "Prognose 68 % Stadtbevölkerung (2050)"], explain: "Von den mesopotamischen Anfängen über die industrielle Urbanisierung und 2007 bis zu den Prognosen für 2050." },
      { type: "mc", q: "Welche Maßnahme verringert die städtische Wärmeinsel?", options: ["Mehr Bäume und begrünte Dächer", "Mehr dunkler Asphalt", "Mehr Klimaanlagen, die nach außen abstrahlen"], answer: 0, explain: "Vegetation spendet Schatten und kühlt durch Verdunstung." },
      { type: "mc", q: "Was schlägt die Idee der '15-Minuten-Stadt' vor?", options: ["Die wichtigsten Einrichtungen sind zu Fuß oder mit dem Rad in 15 Minuten erreichbar", "Autobahnen mit 15 Fahrspuren bauen", "Die Einwohnerzahl auf 15.000 begrenzen"], answer: 0, explain: "Das Modell verringert Autofahrten und macht die Viertel lebenswerter." },
      { type: "text", q: "Wie nennt man das Phänomen, bei dem die Bevölkerung das Land verlässt und in die Städte zieht?", answer: ["Landflucht", "die Landflucht", "Urbanisierung", "Verstädterung"], explain: "Landflucht (oft ist die Urbanisierung ihre Folge)." },
      { type: "tf", q: "Bis 2050 wird fast das gesamte Wachstum der Stadtbevölkerung in Asien und Afrika stattfinden.", answer: true, explain: "Laut UN-Prognosen werden etwa 90 % des Stadtwachstums auf diesen beiden Kontinenten stattfinden." }
    ]
  }
});
