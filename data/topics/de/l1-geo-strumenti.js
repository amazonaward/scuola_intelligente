TOPIC('de', {
  id: "l1-geo-strumenti",
  title: "Die Werkzeuge der Geografie",
  intro: "Der Geograf beschreibt die Welt nicht nur: Er <b>misst</b>, <b>stellt</b> sie <b>dar</b> und <b>deutet</b> sie. In dieser Lektion lernst du, eine <b>Karte</b> zu lesen, den <b>Maßstab</b> und die <b>Koordinaten</b> zu verwenden, zu verstehen, warum jede Karte die Wirklichkeit verzerrt, und du erfährst, wie <b>GPS</b> und <b>GIS</b> die Art verändert haben, das Gelände zu erforschen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Die Erde darstellen: Karten, Pläne, Landkarten",
      html: `<p>Die Erde ist (fast) eine Kugel, aber wir müssen sie auf einem Blatt Papier oder einem flachen Bildschirm darstellen. Jede Darstellung ist eine <b>Verkleinerung</b> der Wirklichkeit, die einem Zweck dient. Die wichtigsten sind:</p>
<ul>
<li><b>Plan</b> 🏙️: stellt ein sehr kleines Gebiet (eine Stadt, ein Gebäude) mit sehr vielen Einzelheiten dar; typische Maßstäbe von 1:1.000 bis 1:10.000.</li>
<li><b>Topografische Karte</b> 🥾: zeigt ein Gebiet mit Straßen, Flüssen, Wäldern, Gebäuden und dem Relief, zum Beispiel die Karten des IGM (des italienischen Militärgeografischen Instituts) im Maßstab 1:25.000, wie sie Wanderer und Bergsteiger benutzen.</li>
<li><b>Geografische Karte</b> 🗺️: größeres Gebiet (eine Region, ein Staat), weniger Einzelheiten, Maßstab etwa 1:100.000–1:1.000.000.</li>
<li><b>Weltkarte</b> 🌍: die gesamte Erdoberfläche auf einer Ebene; Maßstäbe von Hunderten Millionen.</li>
<li><b>Thematische Karte</b> 📊: zeigt <b>nur eine Erscheinung</b> (Bevölkerungsdichte, Klima, Einkommen, Wahlergebnis) auf einer einfachen geografischen Grundlage.</li>
</ul>
<p>Jede Karte hat einige feste Bestandteile: <b>Titel</b>, <b>Orientierung</b> (meist Norden oben), <b>Maßstab</b>, <b>Legende</b> (die Symbole und Farben erklärt) und, wenn nötig, das <b>Gradnetz</b>.</p>`
    },
    {
      type: "text",
      title: "2. Der Maßstab: wie stark die Wirklichkeit verkleinert ist",
      html: `<p>Der <b>Maßstab</b> ist das Verhältnis zwischen einer auf der Karte gemessenen Strecke und der entsprechenden tatsächlichen Strecke. Er kann auf drei Arten angegeben werden:</p>
<ul>
<li><b>numerisch</b>: 1:50.000 bedeutet, dass 1 cm auf der Karte 50.000 cm (also <b>500 m</b>) in der Wirklichkeit entspricht;</li>
<li><b>grafisch</b>: eine Strecke mit Einteilung und den wirklichen Entfernungen (nützlich, weil sie sich nicht ändert, wenn du die Kopie vergrößerst oder verkleinerst);</li>
<li><b>in Worten</b>: „1 cm = 500 m“.</li>
</ul>
<p>Vorsicht, ein Paradox: Ein <b>großer</b> Maßstab wie 1:1.000 (großer Bruch, 1/1.000) zeigt ein <b>kleines</b> Gebiet mit vielen Einzelheiten; ein <b>kleiner</b> Maßstab wie 1:10.000.000 zeigt ein <b>großes</b> Gebiet mit wenigen Einzelheiten.</p>
<p><b>Nützliche Formeln</b> (mit D = Strecke auf der Karte, R = wirkliche Strecke, N = Nenner des Maßstabs):</p>
<p style="text-align:center"><b>R = D × N</b> &nbsp;&nbsp;&nbsp; <b>D = R ÷ N</b> &nbsp;&nbsp;&nbsp; <b>N = R ÷ D</b></p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: einen Weg messen",
      html: `<p>Auf einer Karte im Maßstab <b>1:50.000</b> misst der Pfad von der Hütte zum Gipfel <b>7,2 cm</b>. Wie lang ist er in der Wirklichkeit?</p>
<p>R = 7,2 cm × 50.000 = 360.000 cm = <b>3.600 m = 3,6 km</b>.</p>
<p>Wenn ein Wanderer in der Ebene 3 km/h geht, der Höhenunterschied ihn aber verlangsamt, kann er mit etwa 1 h 15 min rechnen. Achtung: Die Karte misst die Entfernung <b>in der Horizontalen</b>; steigt der Pfad steil an, ist der wirkliche Weg etwas länger, als das Lineal vermuten lässt.</p>
<p><b>Umgekehrt</b>: Zwei Dörfer liegen 12 km auseinander, und du möchtest eine Karte von 24 cm. Du brauchst N = 12 km ÷ 24 cm = 1.200.000 cm ÷ 24 cm = 50.000: Maßstab <b>1:50.000</b>.</p>`
    },
    {
      type: "text",
      title: "3. Das Gradnetz: Breite und Länge",
      html: `<p>Um einen Punkt auf der Erde genau anzugeben, benutzt man das <b>Gradnetz</b>, das aus zwei Scharen gedachter Kreise besteht:</p>
<ul>
<li>die <b>Breitenkreise</b>: Kreise parallel zum <b>Äquator</b> (0°). Sie messen die <b>geografische Breite</b>, also den Winkelabstand vom Äquator, von 0° bis <b>90° Nord</b> (Nordpol) und von 0° bis <b>90° Süd</b> (Südpol). Die wichtigsten Breitenkreise sind: Äquator, Wendekreis des Krebses (etwa 23°26′ N), Wendekreis des Steinbocks (etwa 23°26′ S), nördlicher und südlicher Polarkreis (etwa 66°34′ N und S).</li>
<li>die <b>Längenkreise (Meridiane)</b>: Halbkreise, die die Pole verbinden. Sie messen die <b>geografische Länge</b>, also den Winkelabstand vom <b>Meridian von Greenwich</b> (0°), von 0° bis <b>180° Ost</b> und von 0° bis <b>180° West</b>.</li>
</ul>
<p>Der Bezugsmeridian verläuft durch die Sternwarte von <b>Greenwich</b> in London: Er wurde 1884 von der Internationalen Konferenz in Washington gewählt. Koordinaten werden in Grad (°), Minuten (′) und Sekunden (″) geschrieben: <b>Rom</b> liegt bei etwa <b>41°54′ N, 12°30′ O</b>; Mailand bei etwa 45°28′ N, 9°11′ O.</p>
<p>Ein Breitengrad entspricht auf der Oberfläche immer etwa <b>111 km</b>. Ein Längengrad misst dagegen nur am Äquator 111 km und wird <b>kürzer</b>, je näher man den Polen kommt, wo sich die Meridiane treffen.</p>`
    },
    {
      type: "svg",
      title: "Das Gradnetz",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<circle cx="170" cy="150" r="115" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="170" cy="150" rx="115" ry="30" fill="none" stroke="#dc2626" stroke-width="3"/>
<ellipse cx="170" cy="95" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="205" rx="100" ry="22" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="35" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<ellipse cx="170" cy="150" rx="80" ry="115" fill="none" stroke="#1e3a8a" stroke-width="1.5"/>
<line x1="170" y1="25" x2="170" y2="275" stroke="#15803d" stroke-width="4"/>
<circle cx="214" cy="116" r="6" fill="#f59e0b" stroke="#111827" stroke-width="2"/>
<text x="170" y="20" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Nordpol 90°N</text>
<text x="170" y="294" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Südpol 90°S</text>
<text x="330" y="60" font-size="16" fill="#dc2626" font-weight="bold">Äquator = 0° (Breitenkreis)</text>
<text x="330" y="100" font-size="16" fill="#15803d" font-weight="bold">Meridian von Greenwich = 0°</text>
<text x="330" y="140" font-size="16" fill="#1e3a8a">Breitenkreise: Breite</text>
<text x="330" y="170" font-size="16" fill="#1e3a8a">Meridiane: Länge</text>
<text x="330" y="215" font-size="16" fill="#92400e" font-weight="bold">Ein Punkt = Breite + Länge</text>
<text x="330" y="245" font-size="15" fill="#111827">z. B. 45°N, 10°O (Poebene)</text>
</svg>`,
      caption: "Die Breitenkreise (waagerecht) geben die Breite an, die Meridiane (senkrecht) die Länge. Der Schnittpunkt beider bestimmt einen einzigen Punkt auf der Erde."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Maßstab und Koordinaten",
      questions: [
        { type: "num", q: "Auf einer Karte im Maßstab 1:25.000 liegen zwei Punkte 6 cm auseinander. Wie viele Kilometer sind das in der Wirklichkeit?", answer: 1.5, tol: 0.01, unit: "km", explain: "6 cm × 25.000 = 150.000 cm = 1.500 m = 1,5 km." },
        { type: "mc", q: "Welche Karte hat den kleinsten Maßstab?", options: ["1:1.000", "1:50.000", "1:10.000.000"], answer: 2, explain: "Je größer der Nenner, desto kleiner der Maßstab: 1:10.000.000 stellt ein sehr großes Gebiet mit wenigen Einzelheiten dar." },
        { type: "mc", q: "Was misst die geografische Breite?", options: ["Den Winkelabstand vom Äquator", "Den Winkelabstand von Greenwich", "Die Höhe über dem Meeresspiegel"], answer: 0, explain: "Die Breite reicht von 0° (Äquator) bis 90° N oder S (Pole). Der Abstand von Greenwich ist die Länge." }
      ]
    },
    {
      type: "text",
      title: "4. Jede Karte verzerrt: die Projektionen",
      html: `<p>Eine Kugel lässt sich nicht flachdrücken, ohne sie zu dehnen oder zu zerreißen (versuche es mit einer Orangenschale). Das mathematische Verfahren, das Gradnetz von der Kugel auf die Ebene zu übertragen, heißt <b>Kartenprojektion</b>. Keine Projektion erhält alle Eigenschaften zugleich: Man muss <b>wählen, was man opfert</b>.</p>
<ul>
<li><b>Winkeltreue (konforme) Projektionen</b>: erhalten die <b>Winkel</b> und die lokalen Formen, verzerren aber die Flächen. Die berühmteste ist die <b>Mercator-Projektion</b> (Gerardus Mercator, 1569), die für die <b>Navigation</b> entstand: Ein Kurs mit gleichbleibender Richtung (fester Kompasskurs) wird zu einer geraden Linie. Dafür vergrößert sie die Gebiete nahe den Polen enorm: <b>Grönland</b> scheint so groß wie Afrika, während Afrika etwa <b>14-mal größer</b> ist.</li>
<li><b>Flächentreue (äquivalente) Projektionen</b>: erhalten die <b>Flächen</b>, verzerren aber die Formen (zum Beispiel die <b>Gall-Peters-Projektion</b>, in den 1970er-Jahren durch Arno Peters bekannt geworden, oder die Mollweide-Projektion). Nützlich, um Ausdehnungen zu vergleichen, und für thematische Karten.</li>
<li><b>Vermittelnde (unechte) Projektionen</b>: Kompromisse, die nichts exakt erhalten, aber die Verzerrungen begrenzen (zum Beispiel die Robinson-Projektion, lange von National Geographic verwendet).</li>
</ul>
<p>Für Italien und das übrige Europa verwenden die amtlichen Karten winkeltreue Projektionen vom Typ <b>transversal-zylindrisch</b> (wie Gauß-Boaga und UTM), weil die Verzerrungen bei kleinen Gebieten vernachlässigbar werden.</p>`
    },
    {
      type: "svg",
      title: "Warum Grönland riesig aussieht",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Mercator (winkeltreu)</text>
<text x="450" y="30" font-size="16" text-anchor="middle" fill="#111827" font-weight="bold">Flächentreu (wahre Flächen)</text>
<ellipse cx="150" cy="95" rx="55" ry="38" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="150" y="100" font-size="15" text-anchor="middle" fill="#111827">Grönland</text>
<ellipse cx="150" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="150" y="220" font-size="15" text-anchor="middle" fill="#111827">Afrika</text>
<ellipse cx="450" cy="105" rx="20" ry="14" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2"/>
<text x="450" y="140" font-size="15" text-anchor="middle" fill="#111827">Grönland</text>
<ellipse cx="450" cy="215" rx="55" ry="62" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
<text x="450" y="220" font-size="15" text-anchor="middle" fill="#111827">Afrika</text>
<text x="300" y="290" font-size="14" text-anchor="middle" fill="#111827">Grönland: etwa 2,2 Mio. km². Afrika: etwa 30 Mio. km².</text>
</svg>`,
      caption: "Vereinfachtes Schema: In der Mercator-Projektion sind die Gebiete nahe den Polen vergrößert. In Wirklichkeit ist Afrika etwa 14-mal größer als Grönland."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass die Erde keine perfekte Kugel ist?",
      html: `<p>Die Erde ist ein <b>Geoid</b>: an den Polen abgeplattet und am Äquator ausgebuchtet, weil sie sich um sich selbst dreht. Der Äquatorradius beträgt etwa <b>6.378 km</b>, der Polradius etwa <b>6.357 km</b>: ein Unterschied von rund 21 km. Für gewöhnliche Messungen genügt die Kugel (Umfang etwa <b>40.000 km</b>: Nicht umsonst wurde der <b>Meter</b> Ende des 18. Jahrhunderts als der zehnmillionste Teil der Entfernung Nordpol–Äquator festgelegt); für Präzisionsberechnungen verwendet man ein Referenz-<b>Ellipsoid</b>.</p>`
    },
    {
      type: "text",
      title: "5. Relief und Zeichen lesen",
      html: `<p>Wie stellt man auf einem flachen Blatt die <b>dritte Dimension</b>, also die Höhe, dar? Die wichtigsten Methoden sind:</p>
<ul>
<li><b>Höhenlinien</b> (Isohypsen): Linien, die alle Punkte gleicher Höhe verbinden. Sie haben einen festen Abstand, die <b>Äquidistanz</b> (zum Beispiel 25 m). Wo die Linien <b>dicht</b> liegen, ist der Hang <b>steil</b>; wo sie <b>weit auseinander</b> liegen, ist er sanft. Konzentrische Kreise zeigen einen Hügel oder Gipfel an; „V“-förmige Linien zeigen in einem Tal nach oben.</li>
<li><b>Hypsometrische Farben</b>: Farbstufen für verschiedene Höhen (Grün für Ebenen, Braun für Berge, Weiß für Gipfel über einer bestimmten Höhe; immer dunkleres Blau für die Meerestiefen, mit den <b>Tiefenlinien</b> (Isobathen)).</li>
<li><b>Schummerung und 3D-Modelle</b>: erzeugen den Eindruck von Relief und werden heute aus <b>digitalen Geländemodellen</b> berechnet.</li>
</ul>
<p>Die <b>thematischen Karten</b> verwenden dagegen andere Ausdrucksformen: <b>Choroplethenkarten</b> (für jede Region eine andere Farbe je nach Wert, zum Beispiel der Dichte), Karten mit <b>proportionalen Symbolen</b> (ein größerer Kreis für eine bevölkerungsreichere Stadt), <b>Punktkarten</b> und Karten mit <b>Isolinien</b> (Isothermen für die Temperatur, Isobaren für den Luftdruck, Isohyeten für den Niederschlag).</p>`
    },
    {
      type: "svg",
      title: "Höhenlinien: ein Hügel von oben und von der Seite",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<ellipse cx="150" cy="150" rx="120" ry="95" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<ellipse cx="150" cy="150" rx="85" ry="65" fill="#86efac" stroke="#166534" stroke-width="2"/>
<ellipse cx="135" cy="148" rx="50" ry="38" fill="#4ade80" stroke="#166534" stroke-width="2"/>
<ellipse cx="125" cy="146" rx="18" ry="14" fill="#16a34a" stroke="#166534" stroke-width="2"/>
<text x="125" y="151" font-size="14" text-anchor="middle" fill="#ffffff" font-weight="bold">300</text>
<text x="45" y="153" font-size="14" fill="#111827">100</text>
<text x="80" y="153" font-size="14" fill="#111827">200</text>
<text x="150" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Von oben (Karte)</text>
<path d="M330 250 L400 230 L440 180 L470 120 L500 180 L540 230 L580 250 Z" fill="#86efac" stroke="#166534" stroke-width="3"/>
<line x1="320" y1="250" x2="590" y2="250" stroke="#111827" stroke-width="2"/>
<line x1="352" y1="236" x2="568" y2="236" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="423" y1="206" x2="518" y2="206" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="455" y="30" font-size="15" text-anchor="middle" fill="#111827" font-weight="bold">Von der Seite (Schnitt)</text>
<text x="470" y="108" font-size="14" text-anchor="middle" fill="#111827">Gipfel</text>
<text x="450" y="280" font-size="14" text-anchor="middle" fill="#111827">Linien alle 100 m: rechts steil, links sanft</text>
</svg>`,
      caption: "Jede Linie verbindet Punkte gleicher Höhe. Je näher die Linien beieinanderliegen, desto steiler ist der Hang."
    },
    {
      type: "text",
      title: "6. Sich orientieren und die Zeit messen: Kompass, GPS und Zeitzonen",
      html: `<p>Sich orientieren heißt, die Himmelsrichtungen zu finden. Jahrhundertelang benutzte man die <b>Sonne</b>, den <b>Polarstern</b> (er zeigt auf der Nordhalbkugel nach Norden) und den <b>Kompass</b>, der das Magnetfeld der Erde nutzt. Achtung: Die Nadel zeigt zum <b>magnetischen Nordpol</b>, der nicht mit dem geografischen Nordpol zusammenfällt (der Unterschied heißt <b>magnetische Missweisung (Deklination)</b>).</p>
<p>Heute wird am häufigsten das <b>GNSS</b> (Global Navigation Satellite System) verwendet, dessen Urvater das amerikanische <b>GPS</b> ist. Das Prinzip: Ein Empfänger (wie dein Handy) berechnet, wie lange das Funksignal von mehreren Satelliten zu ihm braucht, und leitet daraus den Abstand zu jedem ab; mit mindestens <b>vier Satelliten</b> (drei für die Position, einer zur Korrektur der Uhr) bestimmt er Breite, Länge und Höhe. Die wichtigsten Systeme sind GPS (USA), <b>Galileo</b> (Europäische Union), GLONASS (Russland) und BeiDou (China); jedes hat Dutzende Satelliten in etwa 20.000 km Höhe.</p>
<p>Auch die <b>Zeit</b> hängt vom Standort ab. Die Erde dreht sich in 24 Stunden einmal um 360°: Je <b>15° Länge</b> entsprechen <b>1 Stunde</b>. Der Globus ist in <b>24 Zeitzonen</b> eingeteilt; weltweit gibt es (aus politischen Gründen) tatsächlich mehr. Italien liegt in der Zeitzone Mitteleuropas (<b>UTC+1</b>, <b>UTC+2</b> mit der Sommerzeit). Wer die <b>Datumsgrenze</b> (nahe dem Meridian von 180°) überquert, gewinnt oder verliert einen Tag.</p>`
    },
    {
      type: "3d",
      title: "Auf dem Globus: Koordinaten einiger Städte",
      scene: "globe",
      options: {
        points: [
          { lat: 41.9, lon: 12.5, label: "Rom (41,9° N, 12,5° O)", color: "#dc2626" },
          { lat: 51.48, lon: 0, label: "Greenwich (0°)", color: "#16a34a" },
          { lat: 0, lon: -78.5, label: "Quito (fast am Äquator)", color: "#f59e0b" },
          { lat: -33.9, lon: 151.2, label: "Sydney (33,9° S)", color: "#2563eb" },
          { lat: 40.7, lon: -74.0, label: "New York", color: "#7c3aed" },
          { lat: 35.7, lon: 139.7, label: "Tokio", color: "#0ea5e9" }
        ],
        routes: [ { points: [0, 4], color: "#dc2626" }, { points: [0, 5], color: "#2563eb" } ]
      },
      caption: "Dreh den Globus: Beachte, dass Greenwich auf dem Meridian 0° liegt und Quito fast am Äquator (das Land Ecuador trägt den Namen des Äquators)."
    },
    {
      type: "text",
      title: "7. GIS, Fernerkundung und Daten: die digitale Geografie",
      html: `<p>Ein <b>GIS</b> (<i>Geographic Information System</i>, auf Deutsch Geoinformationssystem) ist ein Computersystem, das Daten mit Positionsbezug speichert, verknüpft und analysiert. Die Schlüsselidee sind die <b>übereinandergelegten Ebenen</b> (<i>Layer</i>): Straßen, Flüsse, Gebäude, Bodennutzung, Bevölkerung … jedes in einer eigenen Ebene, die man ein- und ausschalten und mit den anderen kombinieren kann. Es gibt zwei Arten von Daten: <b>Vektordaten</b> (Punkte, Linien, Polygone: eine Haltestelle, eine Straße, eine Gemeinde) und <b>Rasterdaten</b> (Pixelgitter: ein Satellitenfoto, ein Höhenmodell).</p>
<p>Ein historisches Beispiel für ein „GIS avant la lettre“: Im Jahr <b>1854</b>, während einer <b>Cholera</b>-Epidemie in London, trug der Arzt <b>John Snow</b> die Häuser der Toten in eine Karte ein und entdeckte, dass sie sich um eine Wasserpumpe in der Broad Street konzentrierten. Er ließ den Pumpenhebel entfernen, und die Fälle gingen zurück: Die <b>Karte</b> hatte die Ursache (verseuchtes Wasser) gezeigt, noch bevor man den Erreger kannte.</p>
<p>Die <b>Fernerkundung</b> gewinnt aus der Ferne Informationen über die Erdoberfläche, mit Satelliten und Drohnen. Programme wie <b>Copernicus</b> (EU, Sentinel-Satelliten) und Landsat (USA) liefern kostenlose Bilder, mit denen man Brände, Überschwemmungen, Gletscher, Ernten und das Wachstum der Städte verfolgt. Infrarotbilder zum Beispiel zeigen den Gesundheitszustand der Vegetation.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wo soll eine Schule gebaut werden?",
      html: `<p>Eine Gemeinde muss entscheiden, wo sie eine neue Schule baut. Mit einem GIS werden vier Ebenen übereinandergelegt:</p>
<ol>
<li>Wohnorte der Kinder im Schulalter (Meldedaten: Punkte);</li>
<li>Straßennetz und Haltestellen des öffentlichen Nahverkehrs (Linien und Punkte);</li>
<li>überschwemmungsgefährdete Zonen (Polygone);</li>
<li>freie Flächen in öffentlichem Besitz (Polygone).</li>
</ol>
<p>Das System berechnet die freien Flächen, die <b>außerhalb der Überschwemmungsgefahr</b> liegen, höchstens 500 m von einer Haltestelle entfernt sind und die <b>durchschnittliche Entfernung</b> von den Wohnungen der Kinder <b>minimieren</b>. In wenigen Sekunden schlägt es 2 oder 3 Standorte vor: Die Entscheidung bleibt bei den Menschen, stützt sich aber auf Daten und nicht auf Eindrücke. Mit derselben Methode plant man Krankenhäuser, Buslinien und Katastrophenschutzpläne.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … dass das GPS die Relativitätstheorie braucht?",
      html: `<p>Die Atomuhren auf den GPS-Satelliten gehen <b>etwas schneller</b> als die auf der Erde (die Schwerkraft ist in der Höhe schwächer: Allgemeine Relativitätstheorie) und etwas langsamer (weil sich die Satelliten schnell bewegen: Spezielle Relativitätstheorie). Das Nettoergebnis ist ein Vorgehen von etwa <b>38 Mikrosekunden pro Tag</b>. Ohne Korrektur würde der Positionsfehler um etwa <b>10 km pro Tag</b> wachsen! Jedes Mal, wenn du dein Smartphone zur Orientierung benutzt, nutzt du (ohne es zu wissen) die Theorie Einsteins.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Karten und Koordinaten zu verstehen",
      intro: "Wenn dir der Maßstab oder die Koordinaten nicht klar werden, betrachte sie aus einem anderen Blickwinkel.",
      tabs: [
        {
          label: "🏀 Die Orangenschale",
          html: `<p>Nimm eine Orangenschale und versuche, sie auf dem Tisch flachzudrücken: Sie reißt oder dehnt sich. Genau das ist das Problem der Projektionen! Um eine zusammenhängende Karte zu bekommen, musst du manche Bereiche <b>dehnen</b> (wie Mercator es mit den Polen macht) oder die Oberfläche in „Spalten“ <b>zerschneiden</b> (Karten mit Zipfeln, wie die von Goode). Deshalb ist keine flache Karte „richtig“: Jede ist eine Wahl zwischen Formen, Flächen, Entfernungen und Richtungen.</p>`
        },
        {
          label: "🧭 Adresse der Welt",
          html: `<p>Stell dir die Koordinaten wie eine <b>Adresse</b> der Art „Straße, Hausnummer“ in einer Stadt mit Raster (wie New York oder Turin) vor: Die <b>Breite</b> ist wie die „Zeile“ (wie weit du nördlich oder südlich des Äquators bist) und die <b>Länge</b> wie die „Spalte“ (wie weit du östlich oder westlich von Greenwich bist). Zwei Zahlen genügen, um einen Punkt zu bestimmen: Und ein Handy kann dir sogar sagen, wie viele Meter dich von der Post trennen.</p>`,
          widget: "labelDiagram",
          options: {
            svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="260" fill="#eff6ff"/><line x1="40" y1="130" x2="470" y2="130" stroke="#dc2626" stroke-width="3"/><line x1="250" y1="20" x2="250" y2="240" stroke="#15803d" stroke-width="3"/><circle cx="360" cy="70" r="8" fill="#f59e0b" stroke="#111827" stroke-width="2"/><circle cx="130" cy="190" r="8" fill="#2563eb" stroke="#111827" stroke-width="2"/></svg>`,
            spots: [
              { x: 120, y: 130, label: "Äquator (0° Breite)" },
              { x: 250, y: 40, label: "Meridian von Greenwich (0° Länge)" },
              { x: 360, y: 70, label: "Punkt im Norden und Osten" },
              { x: 130, y: 190, label: "Punkt im Süden und Westen" }
            ]
          }
        },
        {
          label: "👣 Das Schrittmaß",
          html: `<p>Ein einfacher Weg, den Maßstab zu spüren: Miss deinen <b>Schritt</b>. Ein Erwachsenenschritt beträgt etwa 70–75 cm; <b>1.000 Schritte</b> sind also etwa 700 m, und so kannst du die Entfernung zwischen Zuhause und Schule schätzen. Trage sie dann auf einer Stadtkarte im Maßstab 1:10.000 ein: Wenn du 7 cm erhältst, stimmt der Maßstab. Oder vergleiche mit dem „menschlichen Maß“: Auf einer Karte 1:25.000 sind 4 cm gleich 1 km, etwa 15 Minuten zu Fuß.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Karte: die Werkzeuge des Geografen",
      nodes: [
        { id: "carta", label: "Die Karte", x: 50, y: 8, color: "#2563eb", html: "Verkleinerte, symbolische und angenäherte Darstellung der Erdoberfläche.", why: "Die ersten bekannten Karten stammen aus Babylon (Tafel von Nippur und die „babylonische Weltkarte“, etwa 6. Jh. v. Chr.). Die Griechen maßen mit Eratosthenes (um 240 v. Chr.) den Erdumfang mit einer Abweichung von wenigen Prozentpunkten vom heutigen Wert, und Ptolemäus (2. Jh. n. Chr.) festigte die Idee eines Koordinatennetzes." },
        { id: "scala", label: "Maßstab", x: 15, y: 38, color: "#16a34a", html: "Verhältnis zwischen Strecke auf der Karte und wirklicher Strecke.", why: "Es ist ein einfaches Proportionalitätsverhältnis: Es dient dazu, auf der Karte zu messen und die wirklichen Größen zu erhalten. Der Maßstab ist der Grund, warum eine Karte immer eine Wahl zwischen Detail und Ausdehnung ist." },
        { id: "coordinate", label: "Koordinaten", x: 50, y: 38, color: "#dc2626", html: "Breite und Länge bestimmen jeden Punkt.", why: "Äquator und Pole sind durch die Erdrotation festgelegt, daher ist die Breite ein natürlicher Bezug. Die Länge dagegen hat keinen natürlichen Bezug: Sie ist eine Konvention, 1884 in Greenwich festgelegt. Sie auf See zu messen war jahrhundertelang ein Problem: Im 18. Jahrhundert löste es die Schiffsuhr (der Chronometer) von John Harrison." },
        { id: "proiezioni", label: "Projektionen", x: 85, y: 38, color: "#a855f7", html: "Wie man von der Kugel zur Ebene kommt.", why: "Ein Satz von Gauß (das Theorema Egregium, 1827) beweist, dass sich eine Kugel nicht ohne Verzerrung von Entfernungen oder Flächen auf eine Ebene ausbreiten lässt: Die Verzerrung ist kein Fehler der Kartografen, sondern eine mathematische Eigenschaft der Oberfläche." },
        { id: "rilievo", label: "Relief und Zeichen", x: 25, y: 68, color: "#f59e0b", html: "Höhenlinien, hypsometrische Farben, Legende.", why: "Die Höhenlinien wurden zwischen dem 18. und 19. Jahrhundert eingeführt, als die Heere Karten brauchten, mit denen sich Bewegungen im Gelände vorhersehen ließen. Noch heute gehen die topografischen Karten des IGM in Italien auf dieses militärische Bedürfnis zurück." },
        { id: "gps", label: "GPS und Satelliten", x: 60, y: 68, color: "#0ea5e9", html: "Position, berechnet aus dem Abstand zu mehreren Satelliten.", why: "Das GPS wurde vom US-Verteidigungsministerium für militärische Zwecke entwickelt (erste Satelliten in den 1970er-Jahren, vollständiges System in den 1990ern). Seit 2000 steht das zivile Signal mit deutlich höherer Genauigkeit zur Verfügung." },
        { id: "gis", label: "GIS und Daten", x: 50, y: 93, color: "#ec4899", html: "Übereinandergelegte Ebenen georeferenzierter Informationen.", why: "Das erste echte GIS war das Canada Geographic Information System, das Roger Tomlinson in den 1960er-Jahren ersann, um die Ressourcen des kanadischen Territoriums zu erfassen; deshalb gilt er als „Vater des GIS“." }
      ],
      edges: [
        ["carta", "scala", "hat einen"],
        ["carta", "coordinate", "hat das Gradnetz der"],
        ["carta", "proiezioni", "entsteht aus einer"],
        ["carta", "rilievo", "zeigt das"],
        ["coordinate", "gps", "werden berechnet durch das"],
        ["gps", "gis", "speist das"],
        ["proiezioni", "gis", "dient dem"]
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Maßstab</b> = Strecke auf der Karte ÷ wirkliche Strecke. R = D × N. Großer Maßstab = wenig Fläche, viele Einzelheiten.</li>
<li><b>Breite</b> (Breitenkreise, von 0° bis 90° N/S vom Äquator); <b>Länge</b> (Meridiane, von 0° bis 180° O/W von Greenwich).</li>
<li>Jede <b>Projektion</b> verzerrt: Mercator erhält die Winkel, Gall-Peters die Flächen.</li>
<li>Dichte <b>Höhenlinien</b> = steiler Hang.</li>
<li>Das <b>GPS</b> benutzt mindestens 4 Satelliten; das <b>GIS</b> legt Ebenen georeferenzierter Daten übereinander.</li>
<li>15° Länge = 1 Stunde Zeitunterschied.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Projektionen und GIS",
      questions: [
        { type: "mc", q: "Warum scheint Grönland in der Mercator-Projektion so groß wie Afrika?", options: ["Weil die Gebiete nahe den Polen vergrößert werden", "Weil Grönland wirklich sehr groß ist", "Weil der Maßstab falsch ist"], answer: 0, explain: "Mercator erhält die Winkel (nützlich für die Navigation), vergrößert aber die vom Äquator entfernten Gebiete stark." },
        { type: "tf", q: "Der von der Kompassnadel angezeigte Norden fällt genau mit dem geografischen Norden zusammen.", answer: false, explain: "Die Nadel zeigt nach Magnetisch-Nord, das sich vom geografischen Norden um einen Winkel unterscheidet, den man magnetische Missweisung (Deklination) nennt." },
        { type: "text", q: "Wie heißt das System, das Ebenen georeferenzierter Daten übereinanderlegt (Abkürzung aus drei Buchstaben)?", answer: ["GIS", "gis"], explain: "GIS: Geographic Information System, auf Deutsch Geoinformationssystem." }
      ]
    }
  ],
  glossary: [
    { t: "Maßstab", d: "Verhältnis zwischen einer auf der Karte gemessenen Strecke und der entsprechenden wirklichen Strecke (z. B. 1:50.000)." },
    { t: "Geografische Breite", d: "Winkelabstand eines Punktes vom Äquator, von 0° bis 90° Nord oder Süd; sie wird mit den Breitenkreisen gemessen." },
    { t: "Geografische Länge", d: "Winkelabstand eines Punktes vom Meridian von Greenwich, von 0° bis 180° Ost oder West; sie wird mit den Meridianen gemessen." },
    { t: "Kartenprojektion", d: "Mathematisches Verfahren, das das Gradnetz von der Erdkugel auf eine Ebene überträgt, immer mit gewissen Verzerrungen." },
    { t: "Höhenlinien", d: "Linien, die Punkte gleicher Höhe verbinden; sie erlauben es, das Relief auf der Karte zu lesen." },
    { t: "Thematische Karte", d: "Karte, die nur eine Erscheinung (Klima, Bevölkerung, Einkommen …) auf einer vereinfachten geografischen Grundlage zeigt." },
    { t: "GPS / GNSS", d: "Satellitengestütztes Positionierungssystem: Der Empfänger berechnet die Position aus dem Abstand zu mindestens vier Satelliten." },
    { t: "GIS", d: "Geoinformationssystem: speichert, überlagert und analysiert Daten mit Positionsbezug." },
    { t: "Fernerkundung", d: "Gewinnung von Informationen über die Erdoberfläche aus der Ferne, mit Satelliten, Flugzeugen oder Drohnen." },
    { t: "Zeitzone", d: "Jede der 24 Zonen von 15° Länge, in die die Erde eingeteilt ist, mit gleicher Einheitszeit." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Auf einer Karte im Maßstab 1:100.000 liegen zwei Städte 8,5 cm auseinander. Wie viele km trennen sie in der Wirklichkeit?", answer: 8.5, tol: 0.05, unit: "km", explain: "8,5 cm × 100.000 = 850.000 cm = 8.500 m = 8,5 km." },
      { type: "mc", q: "Welcher dieser Maßstäbe zeigt mehr Einzelheiten?", options: ["1:5.000", "1:500.000", "1:50.000.000"], answer: 0, explain: "Der Maßstab 1:5.000 ist der größte (kleinster Nenner): Er stellt ein kleines Gebiet mit vielen Einzelheiten dar." },
      { type: "mc", q: "In welchem Jahr wurde der Meridian von Greenwich als internationaler Bezugsmeridian gewählt?", options: ["1492", "1884", "1969", "1990"], answer: 1, explain: "Die Internationale Konferenz in Washington von 1884 wählte Greenwich als Meridian 0°." },
      { type: "tf", q: "Ein Längengrad misst überall auf der Erde immer etwa 111 km.", answer: false, explain: "Das gilt nur am Äquator: Die Meridiane laufen zu den Polen zusammen, daher nimmt der Abstand zwischen zwei Meridianen mit der Breite ab." },
      { type: "mc", q: "Welche Projektion erhält die Winkel und entstand für die Navigation?", options: ["Gall-Peters", "Mercator", "Mollweide"], answer: 1, explain: "Mercator (1569): Kurse mit gleichbleibender Richtung werden zu geraden Linien, aber die Flächen an den Polen sind riesig aufgebläht." },
      { type: "mc", q: "Auf einer topografischen Karte liegen die Höhenlinien sehr nah beieinander. Was bedeutet das?", options: ["Einen steilen Hang", "Eine Ebene", "Einen See"], answer: 0, explain: "Dichte Linien bedeuten eine starke Höhenänderung auf kurzer Strecke: einen steilen Hang." },
      { type: "order", q: "Ordne vom größten Maßstab (mehr Einzelheiten) zum kleinsten (weniger Einzelheiten).", items: ["1:1.000", "1:25.000", "1:500.000", "1:30.000.000"], explain: "Je kleiner der Nenner, desto größer der Maßstab: Plan, topografische Karte, Regionalkarte, Weltkarte." },
      { type: "num", q: "Wie viele Satelliten braucht ein GPS-Empfänger mindestens, um die Position zu berechnen und die Uhr zu korrigieren?", answer: 4, tol: 0, explain: "Drei werden für die Position im Raum gebraucht, der vierte zur Korrektur des Uhrenfehlers des Empfängers." },
      { type: "text", q: "Wie heißt die Linie, die auf einer Karte Punkte gleicher Höhe verbindet?", answer: ["Höhenlinie", "Höhenlinien", "die Höhenlinie", "Isohypse", "Isohypsen"], explain: "Höhenlinie (oder Isohypse)." },
      { type: "tf", q: "John Snow erkannte 1854, als er die Cholera-Todesfälle in London auf einer Karte untersuchte, die Pumpe in der Broad Street als Quelle der Ansteckung.", answer: true, explain: "Eines der ersten Beispiele für die räumliche Analyse von Daten: Die Häufung der Fälle um die Pumpe wies auf das verseuchte Wasser hin." }
    ]
  }
});
