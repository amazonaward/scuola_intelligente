TOPIC('de', {
  id: "l1-geo-popolazione",
  title: "Die Weltbevölkerung",
  intro: "Im November 2022 hat die Menschheit die Marke von <b>8 Milliarden</b> überschritten. Wie ist es dazu gekommen? Warum werden in einigen Ländern viele Kinder geboren und in anderen sehr wenige? Und warum lebt die Hälfte der Menschheit in wenigen sehr dicht besiedelten Gebieten? Die <b>Demografie</b> untersucht Zahlen, Alter und Verteilung der Menschen: Sie hilft dir, Wirtschaft, Schule, Gesundheitswesen und Zukunft zu verstehen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Wie viele wir sind und wie wir gewachsen sind",
      html: `<p>Die Weltbevölkerung brauchte fast die gesamte Menschheitsgeschichte, um die <b>erste Milliarde</b> zu erreichen (um <b>1804</b>), und beschleunigte dann schwindelerregend:</p>
<ul>
<li>1 Milliarde: etwa <b>1804</b></li>
<li>2 Milliarden: <b>1927</b> (123 Jahre später)</li>
<li>4 Milliarden: <b>1974</b></li>
<li>6 Milliarden: <b>1999</b></li>
<li>8 Milliarden: <b>November 2022</b> (UN-Schätzung)</li>
</ul>
<p>Die letzte Milliarde kam in nur <b>etwa 11-12 Jahren</b> hinzu. Die Ursache ist nicht, dass mehr Kinder pro Frau geboren werden (im Gegenteil, die weltweite <b>Fruchtbarkeit</b> ist gesunken), sondern dass <b>viel weniger Menschen sterben</b>: Hygiene, Impfstoffe, Antibiotika, Trinkwasser und mehr Nahrung haben die Sterblichkeit gesenkt, vor allem die Kindersterblichkeit. Die weltweite <b>Lebenserwartung</b> bei der Geburt ist von etwa 30-35 Jahren im Jahr 1800 auf über <b>70 Jahre</b> heute gestiegen.</p>
<p>Der Erste, der über das Bevölkerungswachstum nachdachte, war der englische Wirtschaftswissenschaftler <b>Thomas Malthus</b>, der <b>1798</b> behauptete, die Bevölkerung wachse geometrisch (1, 2, 4, 8 …) und die Nahrungsmittel nur arithmetisch (1, 2, 3, 4 …), sodass Hunger und Kriege unvermeidlich seien. Er hatte den technischen Fortschritt (Dünger, Maschinen, neues Saatgut) nicht vorhergesehen, der die Ernten vervielfacht hat. Das Problem ist heute häufiger die <b>Verteilung</b> der Nahrung als ihre Menge, und die ökologische <b>Nachhaltigkeit</b>.</p>`
    },
    {
      type: "widget",
      title: "Die Zeitleiste: die Milliarden",
      widget: "timeline",
      options: {
        unit: "Jahre",
        events: [
          { year: 1804, label: "1 Milliarde", icon: "👶" },
          { year: 1927, label: "2 Milliarden", icon: "👨‍👩‍👧" },
          { year: 1960, label: "3 Milliarden", icon: "🏙️" },
          { year: 1974, label: "4 Milliarden", icon: "🌍" },
          { year: 1987, label: "5 Milliarden", icon: "📈" },
          { year: 1999, label: "6 Milliarden", icon: "🌐" },
          { year: 2011, label: "7 Milliarden", icon: "📱" },
          { year: 2022, label: "8 Milliarden", icon: "🚀" }
        ]
      },
      caption: "Je näher man der Gegenwart kommt, desto schneller kommen die Milliarden: eine Beschleunigung ohne Beispiel in der Menschheitsgeschichte."
    },
    {
      type: "text",
      title: "2. Die demografischen Kennzahlen",
      html: `<p>Um eine Bevölkerung zu beschreiben, verwendet man einige grundlegende Kennzahlen:</p>
<ul>
<li><b>Geburtenrate</b>: Geburten pro 1.000 Einwohner in einem Jahr (z. B. Italien etwa 6-7 ‰; Niger etwa 45 ‰).</li>
<li><b>Sterberate</b>: Todesfälle pro 1.000 Einwohner in einem Jahr (Italien etwa 11-12 ‰).</li>
<li><b>Natürlicher Saldo</b> = Geburtenrate − Sterberate. In Italien ist er <b>negativ</b>: Es sterben mehr Menschen, als geboren werden (seit etwa 2015; 2023 gab es um die 380.000 Geburten, ein historischer Tiefstand).</li>
<li><b>Fruchtbarkeitsrate</b> (oder durchschnittliche Kinderzahl pro Frau). Um die Bevölkerung stabil zu halten, braucht es etwa <b>2,1 Kinder pro Frau</b> („Ersatzniveau“). Weltdurchschnitt: etwa 2,3. Italien: etwa <b>1,2</b>; Südkorea: unter <b>0,8</b>, der weltweit niedrigste Wert; Niger: über <b>6</b>.</li>
<li><b>Kindersterblichkeit</b>: Todesfälle im ersten Lebensjahr pro 1.000 Lebendgeburten (Italien etwa 2-3 ‰; Afrika südlich der Sahara im Durchschnitt über 50 ‰).</li>
<li><b>Lebenserwartung bei der Geburt</b>: Japan und Italien über 83-84 Jahre; Tschad, Nigeria und die Zentralafrikanische Republik etwa 53-55.</li>
<li><b>Alterungsindex</b>: Ältere (über 65) auf 100 Junge (0-14 Jahre). In Italien liegt er über 190: Es gibt fast doppelt so viele Ältere wie Junge.</li>
</ul>
<p>Das Gesamtwachstum hängt vom <b>natürlichen Saldo</b> und vom <b>Wanderungssaldo</b> (Zuwanderer − Abwanderer) ab.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: eine Rate berechnen",
      html: `<p>Ein Land hat <b>60 Millionen</b> Einwohner. In einem Jahr werden <b>420.000</b> Kinder geboren und es sterben <b>700.000</b> Menschen. Berechne Geburtenrate, Sterberate und natürlichen Saldo.</p>
<ul>
<li>Geburtenrate = 420.000 ÷ 60.000.000 × 1.000 = <b>7 ‰</b></li>
<li>Sterberate = 700.000 ÷ 60.000.000 × 1.000 ≈ <b>11,7 ‰</b></li>
<li>Natürlicher Saldo = 420.000 − 700.000 = <b>−280.000</b> Personen, also etwa −4,7 ‰</li>
</ul>
<p>Die Bevölkerung schrumpft aus natürlichen Gründen um 280.000 Personen im Jahr (als würde jedes Jahr eine Stadt mit 280.000 Einwohnern verschwinden). Um sie stabil zu halten, bräuchte es einen positiven Wanderungssaldo in gleicher Höhe oder mehr Geburten.</p>`
    },
    {
      type: "text",
      title: "3. Der demografische Übergang",
      html: `<p>Bei der Untersuchung der europäischen Länder haben die Demografen (Warren Thompson 1929, Frank Notestein 1945) ein Modell mit <b>vier Phasen</b> beschrieben, den <b>demografischen Übergang</b>, in dem ein Land von „viele Geburten und viele Todesfälle“ zu „wenige Geburten und wenige Todesfälle“ übergeht:</p>
<ol>
<li><b>Vorindustrielle Phase</b>: <b>hohe</b> Geburtenrate, <b>hohe</b> Sterberate. Die Bevölkerung wächst wenig (Europa bis zum 18. Jahrhundert, heute einige abgelegene Gebiete).</li>
<li><b>Expansionsphase</b>: Die Sterberate <b>sinkt</b> (Medizin, Hygiene), die Geburtenrate bleibt hoch: <b>Bevölkerungsexplosion</b> (Europa im 19. Jahrhundert; heute Afrika südlich der Sahara).</li>
<li><b>Verlangsamungsphase</b>: Auch die Geburtenrate <b>sinkt</b> (Verstädterung, Bildung der Frauen, Empfängnisverhütung, Kosten der Kinder): Das Wachstum verlangsamt sich (Lateinamerika, Indien, ein großer Teil Asiens).</li>
<li><b>Reife Phase</b>: <b>niedrige</b> Geburtenrate, <b>niedrige</b> Sterberate. Fast kein oder negatives Wachstum; Alterung (Europa, Japan, Korea).</li>
</ol>
<p>Einige Forscher schlagen eine fünfte Phase vor, in der die Geburtenrate <b>unter</b> die Sterberate sinkt und die Bevölkerung <b>abnimmt</b> (Italien, Japan, China seit 2022).</p>`
    },
    {
      type: "svg",
      title: "Das Modell des demografischen Übergangs",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="50" y1="250" x2="570" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="50" y1="30" x2="50" y2="250" stroke="#111827" stroke-width="2"/>
<path d="M50 60 L170 60 C220 60 250 100 300 150 C360 200 420 225 570 225" fill="none" stroke="#2563eb" stroke-width="5"/>
<path d="M50 65 L130 65 C180 65 200 150 250 200 C300 235 400 240 570 240" fill="none" stroke="#dc2626" stroke-width="5"/>
<path d="M170 60 C220 60 250 100 300 150 C360 200 420 225 570 225 L570 240 C400 240 300 235 250 200 C200 150 180 65 130 65 Z" fill="#fde68a" opacity="0.6"/>
<line x1="170" y1="250" x2="170" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="300" y1="250" x2="300" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="420" y1="250" x2="420" y2="30" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="6 5"/>
<text x="110" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 1</text>
<text x="235" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 2</text>
<text x="360" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 3</text>
<text x="495" y="280" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Phase 4</text>
<text x="60" y="48" font-size="15" fill="#2563eb" font-weight="bold">Geburtenrate</text>
<text x="100" y="95" font-size="15" fill="#dc2626" font-weight="bold">Sterberate</text>
<text x="240" y="150" font-size="14" fill="#92400e" font-weight="bold">Wachstum</text>
<text x="420" y="20" font-size="14" text-anchor="middle" fill="#111827">Zeit und Entwicklung →</text>
</svg>`,
      caption: "Die gelbe Zone zwischen den beiden Kurven ist das natürliche Wachstum: am größten in Phase 2, wenn die Sterberate schon gesunken, die Geburtenrate aber noch hoch ist."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Kennzahlen und Übergang",
      questions: [
        { type: "mc", q: "Wie viele Kinder pro Frau braucht es (etwa), um eine Bevölkerung stabil zu halten?", options: ["1,0", "2,1", "4,0"], answer: 1, explain: "Das Ersatzniveau liegt bei etwa 2,1: etwas mehr als 2, weil nicht alle Geborenen das Erwachsenenalter erreichen." },
        { type: "mc", q: "In welcher Phase des Übergangs ist das Wachstum am größten?", options: ["Phase 1", "Phase 2", "Phase 4"], answer: 1, explain: "In Phase 2 ist die Sterberate schon gesunken, die Geburtenrate aber noch hoch." },
        { type: "num", q: "In einem Land mit 10 Millionen Einwohnern werden in einem Jahr 150.000 Kinder geboren. Wie hoch ist die Geburtenrate (in ‰)?", answer: 15, tol: 0, unit: "‰", explain: "150.000 ÷ 10.000.000 × 1.000 = 15 Promille." }
      ]
    },
    {
      type: "text",
      title: "4. Die Alterspyramide",
      html: `<p>Die <b>Alterspyramide</b> ist ein Diagramm aus waagerechten Balken: Jeder Balken stellt eine Altersgruppe dar (meist in 5-Jahres-Gruppen), mit den Männern links und den Frauen rechts. Aus der Form erkennt man den demografischen Zustand eines Landes:</p>
<ul>
<li><b>Expansive Pyramide</b> (breite Basis, schmale Spitze): viele Junge, hohe Geburtenrate, hohe Sterblichkeit im Erwachsenenalter (Niger, Mali, Somalia, Afghanistan). Sehr junge Bevölkerung (Durchschnittsalter, Median, etwa 15-16 Jahre).</li>
<li><b>Stationäre Pyramide</b> (fast rechteckige Form): niedrige und ähnliche Geburten- und Sterberate.</li>
<li><b>Regressive Pyramide</b> (schmale Basis, Bauch in den mittleren bis höheren Altersgruppen): wenige Junge und viele Alte (Italien, Japan, Deutschland, Korea). Das Durchschnittsalter (Median) der Italiener liegt bei etwa <b>48 Jahren</b>, eines der höchsten der Welt.</li>
</ul>
<p>Die Folgen zeigen sich im wirklichen Leben: In einem jungen Land braucht man Schulen, Arbeit für Millionen von Jugendlichen (und es kann eine <b>demografische Dividende</b> entstehen, wenn die Jungen Arbeit finden); in einem alten Land wachsen <b>Renten und Gesundheitswesen</b>, es fehlen Arbeitskräfte, Schulen und Dörfer schließen.</p>`
    },
    {
      type: "svg",
      title: "Drei Alterspyramiden im Vergleich",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<text x="100" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Expansiv</text>
<text x="300" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Stationär</text>
<text x="500" y="22" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Regressiv</text>
<g fill="#38bdf8" stroke="#075985">
<rect x="30" y="230" width="140" height="20"/>
<rect x="45" y="205" width="110" height="20"/>
<rect x="58" y="180" width="84" height="20"/>
<rect x="70" y="155" width="60" height="20"/>
<rect x="78" y="130" width="44" height="20"/>
<rect x="86" y="105" width="28" height="20"/>
<rect x="92" y="80" width="16" height="20"/>
<rect x="96" y="55" width="8" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="235" y="230" width="130" height="20"/>
<rect x="232" y="205" width="136" height="20"/>
<rect x="230" y="180" width="140" height="20"/>
<rect x="232" y="155" width="136" height="20"/>
<rect x="236" y="130" width="128" height="20"/>
<rect x="244" y="105" width="112" height="20"/>
<rect x="256" y="80" width="88" height="20"/>
<rect x="276" y="55" width="48" height="20"/>
</g>
<g fill="#38bdf8" stroke="#075985">
<rect x="460" y="230" width="80" height="20"/>
<rect x="450" y="205" width="100" height="20"/>
<rect x="440" y="180" width="120" height="20"/>
<rect x="430" y="155" width="140" height="20"/>
<rect x="435" y="130" width="130" height="20"/>
<rect x="445" y="105" width="110" height="20"/>
<rect x="455" y="80" width="90" height="20"/>
<rect x="470" y="55" width="60" height="20"/>
</g>
<text x="100" y="275" font-size="14" text-anchor="middle" fill="#111827">Niger, Mali</text>
<text x="300" y="275" font-size="14" text-anchor="middle" fill="#111827">USA (ungefähr)</text>
<text x="500" y="275" font-size="14" text-anchor="middle" fill="#111827">Italien, Japan</text>
<text x="20" y="245" font-size="14" fill="#111827">0</text>
<text x="20" y="70" font-size="14" fill="#111827">80+</text>
</svg>`,
      caption: "Auf der senkrechten Achse steht das Alter (unten die Kinder, oben die Älteren), die Breite der Balken zeigt die Zahl der Menschen. Schematische Zeichnungen (nicht maßstabsgetreu)."
    },
    {
      type: "text",
      title: "5. Wo die Menschheit lebt: Verteilung und Dichte",
      html: `<p>Die Menschen sind nicht gleichmäßig verteilt. Die <b>Bevölkerungsdichte</b> berechnet man, indem man die Einwohnerzahl durch die Fläche teilt (Einwohner/km²):</p>
<ul>
<li>Weltdurchschnitt: etwa <b>60 Einw./km²</b> (auf die Landfläche bezogen);</li>
<li><b>Bangladesch</b>: über 1.100 Einw./km², eines der am dichtesten besiedelten großen Länder der Welt;</li>
<li><b>Italien</b>: etwa <b>195</b> Einw./km² (mit sehr unterschiedlichen Werten zwischen der Lombardei und Sardinien oder dem Aostatal);</li>
<li><b>Mongolei</b>: etwa <b>2</b> Einw./km²; <b>Grönland</b>: etwa 0,03; <b>Monaco</b>: fast 20.000.</li>
</ul>
<p>Mehr als die <b>Hälfte</b> der Menschheit lebt in Asien (etwa 59 %), Afrika beherbergt etwa 18 %, Europa weniger als 10 %. Die bevölkerungsreichsten Länder sind <b>Indien</b> (das 2023 China überholt hat, etwa 1,43 Milliarden), <b>China</b>, die USA, Indonesien, Pakistan, Nigeria, Brasilien.</p>
<p>Die am dichtesten <b>besiedelten</b> Gebiete liegen dort, wo es <b>fruchtbare Ebenen</b>, <b>Flüsse</b> und <b>mildes Klima</b> gibt: die Täler von Ganges, Gelbem Fluss und Jangtse, Java, die Poebene, der Nil (in Ägypten lebt <b>95 %</b> der Einwohner entlang des Flusses und im Delta). Die <b>unbewohnten</b> Gebiete sind Wüsten, kalte Wälder, Hochgebirge, Polarregionen. Heute lebt mehr als die Hälfte der Bevölkerung (etwa <b>57 %</b>) in <b>Städten</b>, und der Anteil steigt.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Dichte und Platz pro Person",
      html: `<p><b>Italien</b> hat etwa 59 Millionen Einwohner auf etwa 302.000 km². Dichte = 59.000.000 ÷ 302.000 ≈ <b>195 Einw./km²</b>. Im Durchschnitt stehen jedem Einwohner etwa 5.100 m² zur Verfügung (also fast ein halber Hektar).</p>
<p>Die <b>Lombardei</b> hat etwa 10 Millionen Einwohner auf etwa 23.900 km²: Dichte ≈ <b>420 Einw./km²</b>, mehr als das Doppelte des nationalen Durchschnitts. Das <b>Aostatal</b> hat etwa 123.000 Einwohner auf 3.260 km²: Dichte ≈ <b>38 Einw./km²</b>.</p>
<p>Vorsicht: Die Dichte ist ein <b>Durchschnitt</b> und kann täuschen. Ägypten hat etwa 100 Millionen Einwohner auf 1 Million km² (Dichte ≈ 100), aber fast alle leben auf weniger als 5 % des Gebiets: Die „physiologische“ Dichte (nur auf bewohntem oder bebautem Land) ist viel höher.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass China eine Ein-Kind-Politik hatte?",
      html: `<p>Von <b>1979</b> bis <b>2015</b> schrieb China fast allen Familien vor, nur <b>ein Kind</b> zu haben, um das Bevölkerungswachstum zu bremsen. Das Ergebnis war ein starker Rückgang der Geburtenrate, aber auch eine sehr schnelle Alterung: Heute hat die chinesische Bevölkerung begonnen zu <b>schrumpfen</b> (seit 2022), und viele junge Menschen müssen zwei Eltern und vier Großeltern unterstützen. Seit 2016 sind zwei Kinder erlaubt, seit 2021 drei.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass Japan 29 % über 65-Jährige hat?",
      html: `<p><b>Japan</b> ist das „älteste“ unter den großen Ländern: Etwa <b>29 %</b> der Einwohner sind über 65 (in Italien etwa 24 %, in Niger unter 3 %). In Japan werden mehr Erwachsenenwindeln verkauft als Babywindeln, und viele Dörfer werden leer. Die Antwort sind <b>Robotik</b> für die Pflege, die Verlängerung des Arbeitslebens und (mit Vorsicht) eine größere Offenheit für Einwanderung.</p>`
    },
    {
      type: "text",
      title: "6. Die Zukunft: Wie viele werden wir sein?",
      html: `<p>Die Prognosen der UNO (<i>World Population Prospects 2024</i>) deuten darauf hin, dass die Weltbevölkerung um die Mitte der <b>2080er-Jahre</b> dieses Jahrhunderts einen <b>Höchststand von etwa 10,3 Milliarden</b> erreichen und dann langsam abnehmen könnte. Der Grund: Die Fruchtbarkeit sinkt fast überall, auch in den ärmsten Ländern, schneller als gedacht.</p>
<p>Das künftige Wachstum wird sich auf <b>Afrika südlich der Sahara</b> konzentrieren, das im Jahr 2100 fast die Hälfte der Jugendlichen der Welt haben könnte, und auf Südasien; in vielen Ländern (Europa, Ostasien) wird die Bevölkerung <b>schrumpfen</b>. Die Herausforderungen: Arbeit für Hunderte Millionen junger Afrikaner schaffen, Renten und Pflege für die Älteren des globalen Nordens sichern, Ressourcen nachhaltig nutzen.</p>
<p>Vorsicht: Es sind <b>Projektionen</b>, keine sicheren Vorhersagen. Die Demografen berechnen verschiedene Szenarien (hoch, mittel, niedrig), je nach Entwicklung der Fruchtbarkeit.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Weltbevölkerung zu verstehen",
      intro: "Die Zahlen der Demografie sind gigantisch. So machst du sie greifbar.",
      tabs: [
        {
          label: "🏘️ Das Dorf mit 100 Menschen",
          html: `<p>Wenn die Welt ein Dorf mit <b>100 Menschen</b> wäre, mit den heutigen Verhältnissen: Etwa <b>59 würden in Asien leben</b> (davon etwa 17 in Indien und 17 in China), <b>18 in Afrika</b>, <b>9 in Europa</b>, <b>8 in Lateinamerika</b>, <b>5 in Nordamerika</b>, <b>weniger als 1</b> in Ozeanien. Etwa <b>57 würden in Städten leben</b>. Etwa <b>26 wären jünger als 15 Jahre</b> und <b>10 älter als 65</b>. So werden aus den Milliarden eine Geschichte, die du dir vorstellen kannst.</p>`
        },
        {
          label: "🛁 Die Wanne und die Hähne",
          html: `<p>Stell dir die Bevölkerung als Badewanne vor. Die <b>Geburten</b> sind der Wasserhahn, die <b>Todesfälle</b> der Abfluss. In Phase 1 ist der Hahn weit offen und der Abfluss auch: Der Pegel steigt kaum. In Phase 2 wird der <b>Abfluss verengt</b> (Medizin), aber der Hahn bleibt offen: Die Wanne füllt sich schnell. In Phase 3 wird auch der Hahn zugedreht: Der Pegel wird stabiler. In Phase 5 ist der Hahn stärker zugedreht als der Abfluss: Der Pegel sinkt. Die Migranten sind der zweite Hahn, der von außen zuläuft.</p>`
        },
        {
          label: "📊 Wie viel wiegen die Jungen?",
          html: `<p>Vergleiche die <b>Durchschnittsalter (Mediane)</b> (das Alter, das die Bevölkerung in zwei gleich große Hälften teilt): Niger etwa <b>15 Jahre</b> (die Hälfte der Bevölkerung ist jünger als 15!), Indien etwa 28, USA etwa 38, Italien etwa 48, Japan etwa 49. Stell dir eine Klasse mit 20 zufällig ausgewählten Personen vor: In Niger wären 10 von ihnen jünger als 15 Jahre; in Japan wären etwa 2 von 20 jünger als 15 Jahre und fast 6 älter als 65. Es ist ein einfacher Indikator, der die Pyramide zusammenfasst.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: die Dynamik der Bevölkerung",
      nodes: [
        { id: "natalita", label: "Geburtenrate und Fruchtbarkeit", x: 20, y: 8, color: "#2563eb", html: "Geburten pro 1.000 Einwohner; Kinder pro Frau.", why: "Die Fruchtbarkeit sinkt mit der Bildung der Frauen, der Verstädterung, der Empfängnisverhütung, den Kosten der Kinder und dem Rückgang der Kindersterblichkeit (man bekommt weniger Kinder, wenn man sicher ist, dass sie überleben)." },
        { id: "mortalita", label: "Sterblichkeit und Lebenserwartung", x: 80, y: 8, color: "#dc2626", html: "Todesfälle pro 1.000 Einwohner; durchschnittliche Lebensjahre.", why: "Der Rückgang der Sterblichkeit geht auf öffentliche Hygiene, Impfstoffe (der erste, gegen die Pocken, wurde 1796 von Edward Jenner entwickelt), Antibiotika (Penicillin 1928 von Fleming entdeckt) und bessere Ernährung zurück." },
        { id: "transizione", label: "Demografischer Übergang", x: 50, y: 32, color: "#a855f7", html: "Vom Modell „viele Geburten, viele Todesfälle“ zu „wenige Geburten, wenige Todesfälle“.", why: "Er beruht auf der Beobachtung Europas zwischen dem 19. und 20. Jahrhundert; er ist kein Gesetz, sondern ein Modell: Die Reihenfolge der Phasen wiederholt sich in vielen Ländern, aber die Zeiten unterscheiden sich (Südkorea hat ihn in 40 Jahren durchlaufen, Frankreich in 150)." },
        { id: "piramide", label: "Alterspyramide", x: 20, y: 58, color: "#f59e0b", html: "Verteilung nach Alter und Geschlecht.", why: "Die Form ist die „Erinnerung“ an die demografische Geschichte: Der Babyboom der Nachkriegszeit (1946-1964) oder der Geburtenrückgang der 1990er-Jahre bleiben jahrzehntelang als Ausbuchtungen oder Einkerbungen in der Pyramide sichtbar." },
        { id: "densita", label: "Verteilung und Dichte", x: 80, y: 58, color: "#16a34a", html: "Wo die Menschen leben: Ebenen, Flüsse, Küsten, Städte.", why: "Die ersten Hochkulturen entstanden an den großen Flüssen (Nil, Euphrat und Tigris, Indus, Gelber Fluss), weil die Bewässerungslandwirtschaft viele Menschen pro km² ernährt: Die Geografie der Bevölkerung bewahrt dieses Erbe." },
        { id: "migrazioni", label: "Migration", x: 50, y: 78, color: "#ec4899", html: "Bewegungen, die die Bevölkerung eines Ortes verändern.", why: "Wo die Bevölkerung schnell wächst und Arbeit und Ressourcen fehlen, oder wo sie altert und Arbeitskräfte gebraucht werden, entstehen Wanderungsströme: Die Demografie ist eine der Hauptursachen der Migration." },
        { id: "futuro", label: "Nachhaltigkeit und Zukunft", x: 50, y: 95, color: "#14b8a6", html: "Höchststand bei 10,3 Milliarden, dann Rückgang.", why: "Der Brundtland-Bericht (1987) und die Agenda 2030 (2015) verbinden die Demografie mit der Ressourcennutzung: Es zählt nicht nur, wie viele wir sind, sondern wie viel wir verbrauchen (ein US-Bürger verbraucht viel mehr Ressourcen als ein Bewohner Nigers)." }
      ],
      edges: [
        ["natalita", "transizione", "Geburtenrückgang →"],
        ["mortalita", "transizione", "Sterblichkeitsrückgang →"],
        ["transizione", "piramide", "verändert die"],
        ["transizione", "densita", "mit der Verstädterung"],
        ["piramide", "migrazioni", "Ungleichgewichte erzeugen"],
        ["densita", "migrazioni", "Ungleichgewichte erzeugen"],
        ["migrazioni", "futuro", "beeinflussen die"]
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>8 Milliarden Menschen (November 2022); sehr schnelles Wachstum seit 1800 durch den Rückgang der Sterblichkeit.</li>
<li><b>Geburtenrate</b> und <b>Sterberate</b> (pro Tausend); <b>natürlicher Saldo</b> und <b>Wanderungssaldo</b>; <b>Fruchtbarkeit</b> (Ersatzniveau = 2,1).</li>
<li><b>Demografischer Übergang</b>: 4 Phasen; Italien und Japan in reifer/regressiver Phase, Afrika südlich der Sahara in der Expansionsphase.</li>
<li><b>Pyramide</b>: expansiv (Niger), stationär, regressiv (Italien, Japan).</li>
<li><b>Dichte</b> = Einwohner ÷ km²; die Menschheit lebt vor allem in fruchtbaren Ebenen, in der Nähe von Flüssen und Küsten.</li>
<li>Geschätzter Höchststand bei etwa <b>10,3 Milliarden</b> in den 2080er-Jahren, dann Rückgang.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Dichte und Pyramiden",
      questions: [
        { type: "num", q: "Ein Land hat 2 Millionen Einwohner auf 40.000 km². Wie hoch ist die Dichte?", answer: 50, tol: 0, unit: "Einw./km²", explain: "2.000.000 ÷ 40.000 = 50 Einwohner pro km²." },
        { type: "mc", q: "Welche Form hat die Alterspyramide eines Landes mit wenigen Jungen und vielen Alten?", options: ["Expansiv", "Regressiv", "Gleichseitiges Dreieck"], answer: 1, explain: "Die regressive Pyramide hat eine schmale Basis: wenige Geburten, viele Ältere." },
        { type: "tf", q: "Italien hat einen positiven natürlichen Saldo.", answer: false, explain: "In Italien übersteigen die Todesfälle seit Jahren die Geburten: Der natürliche Saldo ist negativ." }
      ]
    }
  ],
  glossary: [
    { t: "Demografie", d: "Wissenschaft, die Größe, Struktur und Entwicklung menschlicher Bevölkerungen untersucht." },
    { t: "Geburtenrate", d: "Anzahl der Geburten pro 1.000 Einwohner in einem Jahr." },
    { t: "Sterberate", d: "Anzahl der Todesfälle pro 1.000 Einwohner in einem Jahr." },
    { t: "Natürlicher Saldo", d: "Unterschied zwischen Geburten und Todesfällen in einem Zeitraum." },
    { t: "Wanderungssaldo", d: "Unterschied zwischen Zuwanderern und Abwanderern in einem Zeitraum." },
    { t: "Fruchtbarkeitsrate", d: "Durchschnittliche Kinderzahl pro Frau im gebärfähigen Alter; das Ersatzniveau liegt bei etwa 2,1." },
    { t: "Lebenserwartung", d: "Durchschnittliche Zahl der Jahre, die ein Neugeborenes unter den heutigen Sterblichkeitsbedingungen zu leben erwarten kann." },
    { t: "Demografischer Übergang", d: "Übergang von hoher Geburtenrate und hoher Sterberate zu niedriger Geburtenrate und niedriger Sterberate." },
    { t: "Alterspyramide", d: "Diagramm, das die Bevölkerung nach Altersgruppen und Geschlecht darstellt." },
    { t: "Bevölkerungsdichte", d: "Verhältnis zwischen Einwohnerzahl und Fläche, in Einwohnern pro km²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche Hauptursache erklärt die Bevölkerungsexplosion des letzten Jahrhunderts?", options: ["Anstieg der Fruchtbarkeit pro Frau", "Starker Rückgang der Sterblichkeit", "Zunahme der Migration"], answer: 1, explain: "Medizin, Hygiene, Impfstoffe und Nahrung haben vor allem die Kindersterblichkeit gesenkt; die Fruchtbarkeit ist im Gegenteil gesunken." },
      { type: "num", q: "Ein Land hat 50 Millionen Einwohner; in einem Jahr werden 500.000 Kinder geboren. Wie hoch ist die Geburtenrate (‰)?", answer: 10, tol: 0, unit: "‰", explain: "500.000 ÷ 50.000.000 × 1.000 = 10 Promille." },
      { type: "mc", q: "Welche Phase des demografischen Übergangs ist durch hohe Geburtenrate und stark sinkende Sterberate gekennzeichnet?", options: ["Phase 1", "Phase 2", "Phase 4"], answer: 1, explain: "Es ist die Expansionsphase mit dem größten natürlichen Wachstum." },
      { type: "tf", q: "Thomas Malthus nahm an, dass die Bevölkerung schneller wächst als die Nahrungsmittel.", answer: true, explain: "1798 behauptete er, die Bevölkerung wachse geometrisch und die Nahrung arithmetisch. Er sah den technischen Fortschritt in der Landwirtschaft nicht voraus." },
      { type: "mc", q: "Welches dieser Länder hat eine expansive Alterspyramide?", options: ["Japan", "Deutschland", "Niger"], answer: 2, explain: "Niger hat eine Fruchtbarkeit von über 6 Kindern pro Frau und eine sehr junge Bevölkerung." },
      { type: "text", q: "Wie heißt das Verhältnis zwischen Einwohnerzahl und Fläche?", answer: ["Dichte", "Bevölkerungsdichte", "die Bevölkerungsdichte", "die Dichte"], explain: "Bevölkerungsdichte, in Einwohnern pro km²." },
      { type: "order", q: "Bringe das Erreichen dieser Meilensteine in die chronologische Reihenfolge.", items: ["1 Milliarde", "2 Milliarden", "4 Milliarden", "8 Milliarden"], explain: "1804, 1927, 1974, 2022." },
      { type: "mc", q: "Welche Weltregion wird in den kommenden Jahrzehnten das größte Bevölkerungswachstum haben?", options: ["Afrika südlich der Sahara", "Europa", "Japan"], answer: 0, explain: "Die Fruchtbarkeit in Afrika südlich der Sahara ist noch hoch, und die Bevölkerung wird weiter wachsen." },
      { type: "tf", q: "Die Bevölkerungsdichte eines Landes beschreibt immer gut, wie die Einwohner über das Gebiet verteilt sind.", answer: false, explain: "Sie ist ein Durchschnitt: Ägypten hat eine bescheidene Dichte, aber fast alle leben am Nil und im Delta." },
      { type: "mc", q: "Warum hat die chinesische Ein-Kind-Politik (1979-2015) Probleme geschaffen?", options: ["Sie hat die Alterung der Bevölkerung beschleunigt", "Sie hat die Geburtenrate zu stark steigen lassen", "Sie hat die Verstädterung verhindert"], answer: 0, explain: "Sie hat die Geburten rasch verringert; heute müssen wenige junge Arbeitskräfte viele Ältere versorgen." }
    ]
  }
});
