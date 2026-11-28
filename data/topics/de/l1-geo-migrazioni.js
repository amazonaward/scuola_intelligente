TOPIC('de', {
  id: "l1-geo-migrazioni",
  title: "Migration",
  intro: "Menschen waren schon immer unterwegs: Die ersten <i>Homo sapiens</i> verließen Afrika vor Zehntausenden von Jahren, und heute leben weltweit etwa <b>280-300 Millionen</b> Menschen in einem anderen Land als dem, in dem sie geboren wurden. Warum bricht man auf? Wohin geht man? Was ändert sich für die, die gehen, für die, die ankommen, und für die, die bleiben? Wir lernen, Begriffe, Ursachen, Routen und Folgen zu unterscheiden, mit Daten statt mit Parolen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Die richtigen Wörter: Wer ist ein Migrant?",
      html: `<p>Im Alltag werden als Synonyme Wörter verwendet, die in Wirklichkeit unterschiedliche, auch rechtliche Bedeutungen haben. Sie zu unterscheiden ist der erste Schritt zu gutem Nachdenken.</p>
<ul>
<li><b>Migrant</b> (oder Auswanderer/Einwanderer): wer für einen bedeutenden Zeitraum an einen anderen Ort zieht. <b>Auswanderer (Emigrant)</b>, wenn wir ihn vom Herkunftsland aus betrachten, <b>Einwanderer (Immigrant)</b> vom Zielland aus. Die Wanderungen sind <b>intern</b> (innerhalb desselben Staates, wie vom Süden in den Norden Italiens in den 1950er-60er-Jahren) oder <b>international</b> (von einem Staat in einen anderen).</li>
<li><b>Wirtschaftsmigrant</b>: wer aufbricht, um Arbeit zu finden oder seine Lebensbedingungen zu verbessern.</li>
<li><b>Flüchtling</b>: nach der <b>Genfer Konvention von 1951</b> wer sich außerhalb seines Landes befindet und wegen der begründeten Furcht, aus Gründen der Rasse, Religion, Nationalität, Zugehörigkeit zu einer sozialen Gruppe oder wegen politischer Überzeugung verfolgt zu werden, nicht zurückkehren kann oder will. Er hat Anspruch auf <b>internationalen Schutz</b> und auf den Grundsatz der <b>Nichtzurückweisung</b> (<i>Non-Refoulement</i>): Er darf nicht dorthin zurückgeschickt werden, wo sein Leben in Gefahr ist.</li>
<li><b>Asylbewerber</b>: wer um Schutz ersucht hat und auf die Antwort des Staates wartet. Nicht alle Asylbewerber werden als Flüchtlinge anerkannt.</li>
<li><b>Binnenvertriebener</b> (<i>internally displaced person</i>): wer gezwungen ist, sein Zuhause zu verlassen, aber in seinem Land bleibt (oft die Mehrheit der Opfer von Kriegen und Überschwemmungen).</li>
<li><b>Irregulärer Migrant</b>: wer ohne die erforderlichen Papiere in ein Land einreist oder dort bleibt. Regularität ist ein rechtlicher Zustand, keine Eigenschaft der Person.</li>
</ul>
<p>Die italienische Verfassung sieht das Asylrecht in <b>Artikel 10</b> vor: Ein Ausländer, dem in seinem Land die tatsächliche Ausübung der von der italienischen Verfassung gewährleisteten demokratischen Freiheiten verwehrt ist, hat Anspruch auf Asyl.</p>`
    },
    {
      type: "text",
      title: "2. Warum man auswandert: Push- und Pull-Faktoren",
      html: `<p>1966 schlug der Geograf Everett Lee ein noch heute verwendetes Modell vor: Die Entscheidung zur Migration entsteht aus dem Vergleich zwischen den <b>Push-Faktoren</b> (<i>push</i>, die dazu bringen, den Herkunftsort zu verlassen) und den <b>Pull-Faktoren</b> (<i>pull</i>, die zum Zielort hinziehen), bei gleichzeitigem Vorhandensein von <b>Hindernissen</b> (Entfernung, Kosten, Gesetze, Sprache).</p>
<ul>
<li><b>Push</b>: Armut und Arbeitslosigkeit, Kriege und Verfolgung, autoritäre Regime, Naturkatastrophen und <b>Klimawandel</b> (Dürre, Wüstenbildung, Meeresspiegelanstieg), fehlende Dienste (Schulen, Gesundheitswesen).</li>
<li><b>Pull</b>: Arbeit und höhere Löhne, Sicherheit, Freiheit, Studium, Familienzusammenführung, Dienstleistungen und Lebensqualität.</li>
<li><b>Soziale Netzwerke</b>: Oft zieht man dorthin, wo schon Verwandte oder Landsleute sind, die bei der Suche nach Wohnung und Arbeit helfen (<b>Kettenmigration</b>). Deshalb konzentrierten sich die Italiener in bestimmten Vierteln von New York oder in bestimmten argentinischen Städten, und deshalb siedeln sich heute marokkanische oder chinesische Gemeinschaften in bestimmten Gebieten an.</li>
</ul>
<p><b>Eine falsche, aber verbreitete Vorstellung</b>: Der größte Teil der Migranten besteht <b>nicht</b> aus den Ärmsten der Armen. Auswandern kostet (Reise, Papiere, manchmal Tausende Euro), also bricht auf, wer etwas mehr Mittel hat. Außerdem <b>bleibt der größte Teil der afrikanischen Migranten in Afrika</b>, und die meisten Flüchtlinge der Welt werden in Ländern mit niedrigem und mittlerem Einkommen in der Nähe ihres Herkunftslandes aufgenommen (Türkei, Iran, Kolumbien, Uganda, Pakistan), nicht in Europa.</p>`
    },
    {
      type: "widget",
      title: "Aufgabe: Push oder Pull?",
      widget: "classify",
      options: {
        groups: ["Push-Faktor", "Pull-Faktor"],
        items: [
          ["💥 Krieg im Herkunftsland", 0],
          ["💼 Arbeitsangebot im Ausland", 1],
          ["🌵 Dürre und Ernteverluste", 0],
          ["🎓 Angesehene Universität", 1],
          ["👪 Bereits ausgewanderte Verwandte", 1],
          ["🚫 Politische Verfolgung", 0],
          ["🏥 Leistungsfähiges Gesundheitswesen", 1],
          ["📉 Sehr hohe Jugendarbeitslosigkeit", 0]
        ]
      },
      caption: "In Wirklichkeit ist jede Migrationsentscheidung fast immer eine Kombination mehrerer Faktoren."
    },
    {
      type: "svg",
      title: "Wer wandert: die großen Zahlen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="300" y="26" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Auf 100 Menschen weltweit (ungefähr)</text>
<g>
<rect x="40" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="75" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="110" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="145" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="180" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="215" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="250" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="285" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="320" y="50" width="30" height="30" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="355" y="50" width="30" height="30" fill="#f97316" stroke="#9a3412"/>
</g>
<text x="40" y="110" font-size="15" fill="#111827">Fast 96-97 von 100 Menschen leben in dem Land, in dem sie geboren wurden.</text>
<text x="40" y="136" font-size="15" fill="#9a3412" font-weight="bold">Etwa 3-4 von 100 sind internationale Migranten.</text>
<rect x="40" y="170" width="520" height="22" fill="#e5e7eb" stroke="#6b7280"/>
<rect x="40" y="170" width="94" height="22" fill="#ef4444" stroke="#7f1d1d"/>
<text x="40" y="215" font-size="15" fill="#111827">Unter ihnen (etwa 1 von 3 oder 4): Menschen auf der Flucht vor Krieg und Verfolgung.</text>
<text x="40" y="240" font-size="15" fill="#111827">Zwangsvertriebene weltweit (einschließlich Binnenvertriebener): über 120 Millionen.</text>
<text x="40" y="270" font-size="14" fill="#6b7280">Schätzungen UNO / UNHCR (gerundete Daten, jährlich aktualisiert).</text>
</svg>`,
      caption: "Die Zahl der Migranten (etwa 3,6-3,7 % der Weltbevölkerung) ist in absoluten Werten hoch, aber prozentual begrenzt: Die große Mehrheit der Menschen verlässt das Land, in dem sie geboren wurde, nicht."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Begriffe und Ursachen",
      questions: [
        { type: "mc", q: "Wer ist nach der Genfer Konvention ein Flüchtling?", options: ["Wer auswandert, um eine bessere Arbeit zu finden", "Wer sich aus begründeter Furcht vor Verfolgung außerhalb seines Landes befindet", "Wer innerhalb des eigenen Landes die Stadt wechselt"], answer: 1, explain: "Der Flüchtling flieht vor Verfolgung wegen Rasse, Religion, Nationalität, sozialer Gruppe oder politischer Überzeugung." },
        { type: "mc", q: "Welches dieser ist ein Push-Faktor?", options: ["Eine gut bezahlte Arbeit im Ausland", "Ein Krieg im Herkunftsland", "Eine angesehene Universität"], answer: 1, explain: "Kriege treiben Menschen dazu, den Herkunftsort zu verlassen; die anderen sind Pull-Faktoren." },
        { type: "tf", q: "Die meisten Flüchtlinge der Welt werden in Europa aufgenommen.", answer: false, explain: "Die meisten werden in Ländern mit niedrigem und mittlerem Einkommen in der Nähe der Herkunftsländer aufgenommen." }
      ]
    },
    {
      type: "text",
      title: "3. Eine Geschichte der Wanderungen",
      html: `<p>Migration ist kein neues Phänomen:</p>
<ul>
<li><b>Urgeschichte</b>: <i>Homo sapiens</i> breitet sich von Afrika aus (vor etwa 70-60.000 Jahren die Wanderungen, die den Rest der Welt besiedelten) und erreicht alle Kontinente außer der Antarktis.</li>
<li><b>Antike und Mittelalter</b>: griechische und phönizische Kolonisation des Mittelmeers, Wanderungen der germanischen Völker nach dem 4. Jahrhundert, arabische und mongolische Expansion.</li>
<li><b>Seit dem 16. Jahrhundert</b>: Eroberung Amerikas und <b>atlantischer Sklavenhandel</b>: Etwa <b>12,5 Millionen</b> Afrikaner wurden zwischen dem 16. und 19. Jahrhundert gewaltsam verschifft, von denen etwa 10,7 Millionen die Überfahrt überlebten. Es war eine <b>erzwungene</b> Wanderung.</li>
<li><b>1850-1914</b>: die <b>große europäische Auswanderung</b> über den Ozean: zwischen 50 und 60 Millionen Europäer (Iren, Deutsche, Italiener, Polen, Skandinavier, Juden aus Osteuropa) nach Nordamerika, Argentinien, Brasilien, Australien. Über Ellis Island in New York gingen zwischen 1892 und 1954 etwa 12 Millionen Menschen.</li>
<li><b>20. Jahrhundert</b>: Massenwanderungen durch Kriege (Bevölkerungsaustausch, Flüchtlinge des Zweiten Weltkriegs), Entkolonialisierung, Arbeitsmigration nach Westeuropa nach 1945 (<b>Gastarbeiter</b> in Deutschland), Great Migration der Afroamerikaner vom Süden in den Norden der USA (1916-1970, etwa 6 Millionen Menschen).</li>
<li><b>Heute</b>: Wanderungen in die Golfstaaten, in die USA, nach Europa; starke innerasiatische und innerafrikanische Migration; Klimamigration und Flüchtlinge (Syrien, Afghanistan, Ukraine, Sudan, Venezuela).</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Italiener, die auswanderten",
      html: `<p>Zwischen <b>1876</b> und <b>1976</b> verließen etwa <b>27 Millionen Italiener</b> das Land (einige kehrten später zurück). Die Ziele waren Amerika (Argentinien, Brasilien, USA), europäische Länder (Frankreich, Schweiz, Deutschland, Belgien) und Australien. Zuerst brachen die Venetier, Friauler und Piemontesen auf, dann immer mehr Süditaliener (Sizilien, Kampanien, Kalabrien, Apulien).</p>
<p>Im Jahr 1900 konnte ein Bauer aus dem Mezzogiorno in New York in wenigen Monaten mehr verdienen als in einem Jahr zu Hause: Der Push war der <b>Hunger nach Land und Arbeit</b>, der Pull die amerikanischen Löhne. 1946 schloss Italien ein Abkommen mit Belgien: Die Männer gingen im Bergwerk arbeiten, im Austausch gegen Kohle. Am 8. August 1956 starben im Bergwerk von <b>Marcinelle</b> 262 Bergleute, 136 davon Italiener. Auch die Italiener erlebten Vorurteile und Diskriminierung und wurden Opfer von Gewalt, wie der Lynchmord an elf Italienern in New Orleans 1891.</p>
<p>Heute leben über <b>6 Millionen italienische Staatsbürger</b> im Ausland (im AIRE, dem Register der Auslandsitaliener, eingetragen), und etwa <b>80 Millionen Menschen weltweit</b> haben italienische Wurzeln (vor allem in Brasilien und Argentinien). Seit den 2010er-Jahren gehen weiterhin viele junge Akademiker: der sogenannte <b>„Brain Drain“ (Abwanderung von Fachkräften)</b>.</p>`
    },
    {
      type: "3d",
      title: "Auf dem Globus: einige große Migrationsrouten",
      scene: "globe",
      options: {
        points: [
          { lat: 38.1, lon: 13.4, label: "Italien (Herkunft der Auswanderer des 19. Jh.)", color: "#16a34a" },
          { lat: 40.7, lon: -74.0, label: "New York (Ellis Island)", color: "#7c3aed" },
          { lat: -34.6, lon: -58.4, label: "Buenos Aires", color: "#0ea5e9" },
          { lat: 14.7, lon: -17.4, label: "Dakar (Westafrika)", color: "#f59e0b" },
          { lat: 33.9, lon: 10.1, label: "Tunesien (zentrale Mittelmeerroute)", color: "#dc2626" },
          { lat: 36.0, lon: 14.5, label: "Lampedusa", color: "#dc2626" },
          { lat: 25.3, lon: 55.3, label: "Emirate (Arbeiter aus Asien)", color: "#a16207" },
          { lat: 28.6, lon: 77.2, label: "Delhi (Indien)", color: "#ec4899" },
          { lat: 19.4, lon: -99.1, label: "Mexiko-Stadt", color: "#2563eb" },
          { lat: 33.7, lon: -118.2, label: "Los Angeles", color: "#2563eb" }
        ],
        routes: [
          { points: [0, 1], color: "#16a34a" },
          { points: [0, 2], color: "#16a34a" },
          { points: [4, 5, 0], color: "#dc2626" },
          { points: [7, 6], color: "#ec4899" },
          { points: [8, 9], color: "#2563eb" }
        ]
      },
      caption: "Grün: die historische italienische Auswanderung. Rot: die zentrale Mittelmeerroute. Rosa: asiatische Arbeiter in die Golfstaaten. Blau: Mexiko-USA."
    },
    {
      type: "text",
      title: "4. Heute: woher, wohin",
      html: `<p>Nach UN-Schätzungen gab es 2020 etwa <b>281 Millionen</b> internationale Migranten (3,6 % der Weltbevölkerung); 2024 sind es auf etwa <b>304 Millionen</b> (3,7 %) gestiegen.</p>
<ul>
<li><b>Zielländer</b>: Die <b>USA</b> (etwa 50 Millionen im Ausland Geborene) stehen an erster Stelle; es folgen <b>Deutschland</b>, <b>Saudi-Arabien</b>, <b>Russland</b>, das <b>Vereinigte Königreich</b>. In den Golfstaaten (Emirate, Katar, Kuwait) sind Ausländer die <b>Mehrheit</b> der Einwohner (zum Beispiel etwa 88 % in Katar), vor allem Bau- und Hausarbeiter aus Indien, Pakistan, Bangladesch, Nepal, den Philippinen.</li>
<li><b>Herkunftsländer</b>: <b>Indien</b> (etwa 18 Millionen Auswanderer, die größte Diaspora), <b>Mexiko</b>, <b>Russland</b>, <b>China</b>, <b>Syrien</b>, <b>Bangladesch</b>, <b>Pakistan</b>, <b>Ukraine</b>.</li>
<li><b>Hauptkorridore</b>: Mexiko → USA; Südasien → Golfstaaten; Syrien → Türkei, Libanon, Deutschland; Ukraine → Polen und EU (seit 2022); Venezuela → Kolumbien und Südamerika; Afrika südlich der Sahara → andere afrikanische Länder und, in geringerem Maß, Europa.</li>
<li><b>Flüchtlinge und Vertriebene</b> (UNHCR): über <b>120 Millionen</b> Menschen, die zur Flucht gezwungen sind (einschließlich Binnenvertriebener). Zu den Ländern, die die meisten Flüchtlinge aufnehmen, gehören: Iran, Türkei, Kolumbien, Deutschland, Uganda, Pakistan.</li>
</ul>
<p>Die <b>zentrale Mittelmeerroute</b> (Libyen und Tunesien nach Lampedusa und Sizilien) gehört zu den gefährlichsten: Seit 2014 wurden im Mittelmeer über 25.000 Tote und Vermisste gezählt. Die Europäische Union hat die <b>Dublin-Verordnung</b>, die (allgemein) festlegt, dass der Asylantrag vom ersten EU-Einreiseland geprüft wird, und einen neuen <b>Migrations- und Asylpakt</b> (2024).</p>
<p>In <b>Italien</b> leben über <b>5 Millionen</b> Ausländer (etwa 9 % der Bevölkerung), aus Rumänien, Marokko, Albanien, China, der Ukraine. Die <b>Staatsbürgerschaft</b> erwirbt man in der Regel durch <b>ius sanguinis</b> (Abstammung von italienischen Staatsbürgern) oder, für Ausländer, nach 10 Jahren Aufenthalt (4 für EU-Bürger, 5 für Staatenlose und Flüchtlinge) oder durch Heirat.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass Rücküberweisungen mehr wert sind als Hilfen?",
      html: `<p>Die Migranten schicken einen Teil ihres Verdienstes nach Hause: das sind die <b>Rücküberweisungen (Remittances)</b>. Nach Angaben der Weltbank erreichten sie 2023 etwa <b>650 Milliarden Dollar</b> in Länder mit niedrigem und mittlerem Einkommen, mehr als die Direktinvestitionen und viel mehr als die Entwicklungshilfe. In einigen Ländern (Tonga, Libanon, Tadschikistan, Nepal) machen sie über ein Viertel des BIP aus. Ein philippinischer Arbeiter in Dubai, der 300 Dollar im Monat nach Hause schickt, kann die Ausbildung von zwei Neffen bezahlen.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Migrationszahl lesen",
      html: `<p>Ein Land hat <b>10 Millionen</b> Einwohner, davon <b>1,2 Millionen</b> im Ausland geboren; in einem Jahr kommen 80.000 Menschen an und 30.000 gehen.</p>
<ul>
<li>Anteil der im Ausland Geborenen = 1.200.000 ÷ 10.000.000 = <b>12 %</b>.</li>
<li><b>Wanderungssaldo</b> = 80.000 − 30.000 = <b>+50.000</b> (etwa +5 Promille).</li>
<li>Wenn in diesem Jahr die Geburten die Todesfälle nur um 10.000 übersteigen, beträgt der Gesamtsaldo +60.000: <b>5/6 des Wachstums stammen aus der Migration</b>.</li>
</ul>
<p>Das ist der Fall in vielen europäischen Ländern: Die Bevölkerung wächst (oder schrumpft nicht) dank des Wanderungssaldos, nicht des natürlichen Saldos.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass Brasilien mehr „Italiener“ hat als Italien?",
      html: `<p>Schätzungen zufolge leben in <b>Brasilien</b> etwa <b>30 Millionen</b> Menschen mit italienischen Wurzeln (über 10 % der Bevölkerung), mehr als in jeder italienischen Region, und in <b>São Paulo</b> gibt es mehr Nachkommen von Italienern als in Rom. Auch in Argentinien hat etwa die Hälfte der Bevölkerung mindestens einen italienischen Vorfahren. Migrationen hinterlassen Spuren in Nachnamen, Speisen und Dialekten (das <i>Talian</i>, vom Venetischen abgeleitet, ist in einigen Gemeinden des Rio Grande do Sul anerkannte Sprache).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass auch Binnenwanderungen das Gesicht eines Landes verändern?",
      html: `<p>Zwischen den 1950er- und 1970er-Jahren zogen Millionen Italiener vom Süden in den Norden. <b>Turin</b> wurde als „dritte süditalienische Stadt Italiens“ bezeichnet (nach Neapel und Palermo), weil dort viele Jahre lang jeden Monat Tausende Menschen ankamen, um bei Fiat zu arbeiten. 1861 war Italien geeint, aber durch Sprachen und Gewohnheiten gespalten: Es waren die Binnenwanderungen, die zusammen mit Schule und Fernsehen das Italienische zu einer von allen gesprochenen Sprache machten.</p>`
    },
    {
      type: "text",
      title: "5. Folgen: für die, die gehen, die, die ankommen, die, die bleiben",
      html: `<p>Migration hat komplexe Wirkungen, die Studien mit Daten und nicht mit Eindrücken messen.</p>
<ul>
<li><b>In den Aufnahmeländern</b>: Migranten übernehmen Arbeiten, für die es an Kräften fehlt (Landwirtschaft, Altenpflege, Bau, Gastronomie, Gesundheitswesen) und <b>gleichen die Alterung aus</b>: In Italien zahlen ausländische Staatsbürger jedes Jahr mehr Beiträge, als sie an Leistungen erhalten (Schätzungen von Stiftungen und des INPS, der italienischen Rentenversicherung, zeigen einen positiven Saldo), und tragen etwa <b>9 %</b> zum BIP bei (Schätzungen von Forschungsstiftungen). Gleichzeitig gibt es Herausforderungen: schulische und sprachliche <b>Integration</b>, Konkurrenz in einigen gering qualifizierten Branchen, Spannungen, wenn die Ankunft sehr schnell und konzentriert erfolgt, Gefahr der Ausbeutung (Schwarzarbeit in der Landwirtschaft, <i>caporalato</i>).</li>
<li><b>In den Herkunftsländern</b>: Es kommen <b>Rücküberweisungen</b> und im Ausland erworbene Kompetenzen an (<i>Brain Circulation</i>), aber es kann auch einen <b>Brain Drain</b> geben: Ärzte, Ingenieure, Pflegekräfte, die abwandern und das Land ohne Fachleute zurücklassen.</li>
<li><b>Für die Migranten</b>: höhere Verdienste, aber auch Risiken (Reise, Ausbeutung, Diskriminierung) und Trennung von der Familie.</li>
<li><b>Kulturell</b>: Sprachen, Speisen, Musik, Religionen vermischen sich. Denk daran, wie viel von der „italienischen“ Küche (Tomate, Kartoffel, Mais) aus Amerika kommt, oder an die Pizza in den USA und in Brasilien.</li>
</ul>
<p>Die Gesellschaften folgen unterschiedlichen Modellen der Eingliederung: <b>Assimilation</b> (der Migrant übernimmt die vorherrschende Kultur und verliert seine eigene), <b>Multikulturalismus</b> (verschiedene Kulturen bestehen gleichberechtigt nebeneinander), <b>Integration</b> (der Migrant nimmt voll am gesellschaftlichen Leben teil, und alle achten die gemeinsamen Regeln, während sie ihre eigene Identität bewahren). Die italienische Verfassung schützt die unverletzlichen Rechte jedes Menschen, ob Staatsbürger oder nicht (Art. 2).</p>`
    },
    {
      type: "decision",
      title: "1905: gehen oder bleiben?",
      html: `<p>Es ist das Jahr 1905. Du bist ein junger Bauer aus einem Dorf in Kalabrien. Das Land ist knapp, die Weizenernte ist schlecht, du hast eine Frau und ein kleines Kind. Von einem Cousin kommt ein Brief: In Buenos Aires (oder New York) werden Landarbeiter, Bauarbeiter und Maurer gesucht, und der Lohn ist mindestens viermal so hoch. Die Schiffsreise in der dritten Klasse kostet fast einen ganzen Jahresverdienst. Die Zeitungen berichten von Betrügereien durch „Auswanderungsagenten“ und von harten Lebensbedingungen.</p>`,
      question: "Was hättest du getan?",
      options: [
        { label: "Bleiben und auf ein besseres Jahr hoffen", outcome: "Du bleibst nahe bei der Familie, aber die Daten zeigen, dass sich der Lebensstandard vieler Bauernfamilien im Süden verschlechterte; wer blieb, wanderte oft nach einigen Jahren doch aus." },
        { label: "Allein gehen und das Geld nach Hause schicken", outcome: "Das war die häufigste Entscheidung: Der Vater ging, arbeitete jahrelang und schickte Rücküberweisungen. Viele kehrten zurück (etwa die Hälfte der italienischen Auswanderer des 20. Jahrhunderts kam in die Heimat zurück)." },
        { label: "Mit der ganzen Familie gehen", outcome: "Seltener, aber mit sehr hohen Kosten verbunden: Man riskierte den völligen Bruch mit der Herkunft, auch wenn die Kinder bessere Möglichkeiten hätten." }
      ],
      answer: 1,
      explain: "Die Geschichte zeigt, dass viele Auswanderer allein gingen („Pendelmigration“ oder befristete Migration) und Rücküberweisungen schickten; die „Rückkehr“ gehörte zum Plan, und die Rücküberweisungen der Auswanderer waren jahrzehntelang ein wichtiger Posten der italienischen Wirtschaft. Keine Entscheidung war ohne Risiken."
    },
    {
      type: "alternatives",
      title: "Andere Wege, Migration zu verstehen",
      intro: "Migration wird oft mit Zahlen und Parolen erzählt: Hier andere Blickwinkel.",
      tabs: [
        {
          label: "🌊 Der Fluss und der Damm",
          html: `<p>Stell dir die Migration wie das Wasser eines Flusses vor: Es fließt von „hohen“ Orten (mit wenigen Möglichkeiten) zu „tiefen“ Orten (mit mehr Möglichkeiten) und findet immer einen Weg. Einen <b>Damm</b> zu bauen (Barrieren, geschlossene Grenzen) kann den Strom ablenken oder seinen Verlauf ändern (längere, gefährlichere Routen), stoppt ihn aber selten ganz: oft verwandelt er ihn von legal in irregulär. Wirksame Migrationspolitik versucht, den Strom über reguläre Kanäle zu <b>steuern</b> (Arbeitsvisa, humanitäre Korridore, Familiennachzug), so als würde man <b>Kanäle</b> bauen und nicht nur Dämme.</p>`
        },
        {
          label: "🧳 Die Geschichte einer Familie",
          html: `<p>Frag deine Großeltern und Urgroßeltern: Woher kommt deine Familie? Sehr viele italienische Familien haben einen Verwandten, der in einem anderen Land oder einer anderen Region gelebt hat. Du kannst einen <b>Migrationsstammbaum</b> zeichnen: eine Karte mit Pfeilen vom Geburtsort zum Wohnort, über drei Generationen. Du wirst entdecken, dass Migration, nah oder fern, zur Geschichte fast aller gehört. Auch das heutige Italien ist aus <b>Binnenwanderungen</b> entstanden: In der Nachkriegszeit gingen Millionen Süditaliener und Venetier zum Arbeiten nach Turin, Mailand, Genua.</p>`
        },
        {
          label: "📊 Ein anderer Maßstab",
          html: `<p>Eine Möglichkeit zum Messen: Die etwa <b>181.000</b> Anlandungen des Jahres 2016 in Italien (der historische Höchststand) entsprachen etwa <b>0,3 %</b> der italienischen Bevölkerung; der Libanon hat mehr als eine Million Syrer bei etwa 6 Millionen Einwohnern aufgenommen (über 15 %). Wenn man den <b>Maßstab</b> des Vergleichs (Land, Kontinent, Welt) ändert, ändert sich die Wahrnehmung. Ein weiterer nützlicher Maßstab: Weltweit leben etwa 3,7 von 100 Menschen außerhalb ihres Geburtslandes; <b>96,3 von 100 nicht</b>.</p>`,
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#fefce8"/><rect x="40" y="60" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="60" width="16" height="30" fill="#f97316" stroke="#9a3412"/><text x="40" y="45" font-size="15" fill="#111827" font-weight="bold">Internationale Migranten weltweit: 3,7 %</text><rect x="40" y="130" width="420" height="30" fill="#e5e7eb" stroke="#6b7280"/><rect x="40" y="130" width="38" height="30" fill="#ef4444" stroke="#7f1d1d"/><text x="40" y="115" font-size="15" fill="#111827" font-weight="bold">In Italien lebende Ausländer: etwa 9 %</text><text x="40" y="185" font-size="14" fill="#6b7280">maßstabsgetreue Balken (grau = der Rest der Bevölkerung)</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: warum und wie man sich bewegt",
      nodes: [
        { id: "spinta", label: "Push-Faktoren", x: 20, y: 8, color: "#dc2626", html: "Armut, Kriege, Verfolgung, Katastrophen, Klima.", why: "Es sind die Gründe, warum es schwer ist zu bleiben: Extreme Armut oder Kriege verringern die Wahlmöglichkeiten. Die Forschung zeigt aber, dass Armut allein die Abwanderung nicht erklärt: Es braucht auch Mittel und Bestrebungen." },
        { id: "attrazione", label: "Pull-Faktoren", x: 80, y: 8, color: "#16a34a", html: "Arbeit, Sicherheit, Studium, Freiheit.", why: "Die Löhne in Europa oder den USA können 5-10-mal höher sein als in vielen Herkunftsländern, und die Nachfrage nach Arbeitskräften entsteht auch durch die Alterung der reichen Länder: Die Demografie verbindet Nord und Süd." },
        { id: "reti", label: "Netzwerke und Hindernisse", x: 50, y: 30, color: "#a855f7", html: "Verwandte im Ausland, Gesetze, Kosten, Entfernung.", why: "Soziale Netzwerke erklären, warum sich die Migration auf wenige Korridore konzentriert (der Soziologe Douglas Massey hat sie für Mexiko-USA untersucht); Gesetze und Kosten entscheiden, ob die Reise regulär oder irregulär ist." },
        { id: "rotte", label: "Routen und Ströme", x: 20, y: 56, color: "#2563eb", html: "Mittelmeer, Mexiko-USA, Asien-Golf.", why: "Die Routen folgen der Geografie und der Politik: Wird ein Durchgang geschlossen (Balkan 2016), verlagert sich der Strom auf eine andere Route (zentrales Mittelmeer), oft riskanter." },
        { id: "diritto", label: "Internationales Recht", x: 80, y: 56, color: "#f59e0b", html: "Genfer Konvention 1951, Non-Refoulement, Asyl.", why: "Nach dem Zweiten Weltkrieg und der Erfahrung der Millionen Flüchtlinge und all derer, die zu den Regimen zurückgeschickt wurden, die sie verfolgten, beschlossen die Staaten, ein internationales Recht auf Schutz zu schaffen." },
        { id: "effetti", label: "Folgen", x: 50, y: 78, color: "#ec4899", html: "Demografische, wirtschaftliche, kulturelle.", why: "Die Auswirkungen hängen von der Geschwindigkeit, der Qualifikation der Migranten und der Integrationspolitik ab: Dieselbe Migration kann eine Ressource oder ein Problem sein, je nachdem, wie sie gesteuert wird." },
        { id: "gestione", label: "Migration steuern", x: 50, y: 95, color: "#14b8a6", html: "Reguläre Kanäle, Abkommen, Zusammenarbeit, Integration.", why: "Der Globale Pakt für eine sichere, geordnete und reguläre Migration (UNO, 2018) ist das erste internationale Abkommen zu diesem Thema: nicht bindend, aber er erkennt an, dass kein Land es allein bewältigen kann." }
      ],
      edges: [
        ["spinta", "reti", "plus"],
        ["attrazione", "reti", "plus"],
        ["reti", "rotte", "wählen die"],
        ["diritto", "rotte", "regelt die"],
        ["rotte", "effetti", "erzeugen"],
        ["diritto", "effetti", "schützt"],
        ["effetti", "gestione", "erfordern"]
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Etwa <b>280-300 Millionen</b> internationale Migranten, also etwa <b>3,6-3,7 %</b> der Menschheit.</li>
<li><b>Migrant</b> ≠ <b>Flüchtling</b> ≠ <b>Asylbewerber</b> ≠ <b>Binnenvertriebener</b>. Genfer Konvention: 1951.</li>
<li><b>Push</b> (Abstoßung) und <b>Pull</b> (Anziehung); soziale Netzwerke und Hindernisse.</li>
<li>Große europäische Auswanderung 1850-1914; Italiener im Ausland: etwa 27 Millionen zwischen 1876 und 1976.</li>
<li>Rücküberweisungen: etwa 650 Milliarden Dollar im Jahr in Länder mit niedrigem und mittlerem Einkommen.</li>
<li>Die Auswirkungen hängen stark davon ab, wie die Migration <b>gesteuert</b> wird.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Geschichte und Folgen",
      questions: [
        { type: "mc", q: "Welches historische Ereignis verursachte die erzwungene Wanderung von etwa 12,5 Millionen Afrikanern?", options: ["Der atlantische Sklavenhandel", "Die Industrielle Revolution", "Der Erste Weltkrieg"], answer: 0, explain: "Zwischen dem 16. und 19. Jahrhundert wurden etwa 12,5 Millionen Afrikaner gewaltsam nach Amerika verschifft." },
        { type: "text", q: "Wie heißt das Geld, das Migranten ihren Angehörigen im Herkunftsland schicken?", answer: ["Rücküberweisungen", "die Rücküberweisungen", "Rücküberweisung", "Remittances"], explain: "Rücküberweisungen sind für viele arme Länder eine wesentliche Ressource." },
        { type: "tf", q: "„Brain Drain“ (Abwanderung von Fachkräften) ist das Weggehen hochqualifizierter Personen aus dem Herkunftsland.", answer: true, explain: "Ja: Ärzte, Ingenieure, Forscher, die auswandern. Man sagt Brain Drain." }
      ]
    }
  ],
  glossary: [
    { t: "Migrant", d: "Person, die für einen bedeutenden Zeitraum an einen anderen Ort zieht, innerhalb des eigenen Landes oder ins Ausland." },
    { t: "Flüchtling", d: "Person, die ihr Land aus begründeter Furcht vor Verfolgung verlassen hat und Anspruch auf internationalen Schutz hat (Genfer Konvention, 1951)." },
    { t: "Asylbewerber", d: "Person, die um internationalen Schutz ersucht hat und auf die Entscheidung des Staates wartet." },
    { t: "Binnenvertriebener", d: "Person, die gezwungen ist, ihr Zuhause zu verlassen, aber innerhalb der Grenzen ihres Landes bleibt." },
    { t: "Push-Faktoren", d: "Bedingungen des Herkunftsortes, die zum Aufbruch drängen: Armut, Kriege, Verfolgung, Katastrophen." },
    { t: "Pull-Faktoren", d: "Bedingungen des Zielortes, die anziehen: Arbeit, Sicherheit, Studium, Freiheit." },
    { t: "Rücküberweisungen (Remittances)", d: "Geldbeträge, die Migranten an die im Herkunftsland gebliebenen Familien schicken." },
    { t: "Brain Drain", d: "Auswanderung hochqualifizierter Personen (Abwanderung von Fachkräften)." },
    { t: "Nichtzurückweisung (Non-Refoulement)", d: "Grundsatz des Völkerrechts: Niemand darf an einen Ort zurückgeschickt werden, an dem ihm Verfolgung oder Lebensgefahr drohen." },
    { t: "Integration", d: "Prozess, durch den Migranten voll am sozialen, wirtschaftlichen und kulturellen Leben des Ziellandes teilnehmen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher ungefähre Prozentsatz der Weltbevölkerung besteht aus internationalen Migranten?", options: ["Etwa 3,7 %", "Etwa 20 %", "Etwa 50 %"], answer: 0, explain: "Etwa 280-300 Millionen von 8 Milliarden: weniger als 4 %." },
      { type: "mc", q: "Was ist der Unterschied zwischen einem Flüchtling und einem Wirtschaftsmigranten?", options: ["Der Flüchtling flieht vor Verfolgung und hat Anspruch auf internationalen Schutz", "Es gibt keinen Unterschied", "Der Wirtschaftsmigrant reist nur mit dem Flugzeug"], answer: 0, explain: "Der Flüchtling ist durch die Genfer Konvention von 1951 geschützt; der Wirtschaftsmigrant bricht wegen Arbeit oder zur Verbesserung seiner Lage auf." },
      { type: "tf", q: "Die Mehrheit der Flüchtlinge der Welt wird von reichen europäischen Ländern aufgenommen.", answer: false, explain: "Die meisten werden von Ländern mit niedrigem und mittlerem Einkommen aufgenommen, oft Nachbarn des Herkunftslandes." },
      { type: "num", q: "Wie viele Italiener (in Millionen, ungefähr) wanderten zwischen 1876 und 1976 aus?", answer: 27, tol: 2, unit: "Millionen", explain: "Etwa 27 Millionen: eine der größten Auswanderungen der modernen Geschichte." },
      { type: "mc", q: "Was ist Kettenmigration?", options: ["Der Aufbruch von Menschen, die Verwandten und Freunden folgen, die schon ausgewandert sind", "Eine Schiffsreise unter Bedingungen der Sklaverei", "Eine Art Seeroute"], answer: 0, explain: "Soziale Netzwerke erleichtern die Wahl des Ziels: Oft geht man dorthin, wo man schon jemanden kennt." },
      { type: "text", q: "Wie heißt die Insel in der Bucht von New York, über die zwischen 1892 und 1954 etwa 12 Millionen Einwanderer gingen?", answer: ["Ellis Island", "ellis island", "Ellis"], explain: "Ellis Island, in der Bucht von New York." },
      { type: "order", q: "Bringe die Ereignisse in die chronologische Reihenfolge.", items: ["Atlantischer Sklavenhandel (ab dem 16. Jahrhundert)", "Große europäische Auswanderung (1850-1914)", "Gastarbeiter in Deutschland (nach 1945)", "Krise der syrischen Flüchtlinge (seit 2011)"], explain: "Vom atlantischen Sklavenhandel zur großen Auswanderung, dann zu den Gastarbeitern und den Flüchtlingen der jüngsten Konflikte." },
      { type: "mc", q: "Welche Wirkung kann das Weggehen von Ärzten und Ingenieuren aus dem Herkunftsland haben?", options: ["Brain Drain", "Demografische Dividende", "Anstieg des natürlichen Saldos"], answer: 0, explain: "Es ist der Brain Drain: Das Land verliert Kompetenzen, die teuer auszubilden sind." },
      { type: "tf", q: "Im Völkerrecht verbietet der Grundsatz der Nichtzurückweisung, eine Person dorthin zurückzuschicken, wo ihr Leben oder Verfolgung drohen.", answer: true, explain: "Er ist einer der Grundpfeiler der Genfer Konvention." },
      { type: "mc", q: "Warum gehen Migrationen aus armen Ländern nicht von den absolut ärmsten Menschen aus?", options: ["Weil Auswandern hohe Kosten hat und man einige Mittel braucht", "Weil die Ärmsten sich nicht bewegen wollen", "Weil es gesetzlich verboten ist"], answer: 0, explain: "Reise und Papiere kosten: Wer aufbricht, hat oft ein Minimum an Mitteln, Bildung oder ein Unterstützungsnetz." }
    ]
  }
});
