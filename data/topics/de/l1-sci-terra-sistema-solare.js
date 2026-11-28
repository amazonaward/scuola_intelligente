TOPIC('de', {
  id: "l1-sci-terra-sistema-solare",
  title: "Die Erde im Sonnensystem",
  intro: "Wir sind Passagiere einer Gesteinskugel, die mit etwa 30 km pro Sekunde um einen Stern rast. Woher wissen wir das? Jahrtausendelang glaubte die Menschheit das Gegenteil: dass die Erde unbewegt im Mittelpunkt des Kosmos ruhe. In dieser Lektion erfahren wir, wie das <b>Sonnensystem</b> aufgebaut ist, welche <b>keplerschen Gesetze</b> seine Bewegungen bestimmen und wie man mit ganz einfachen Mitteln die <b>Form und Größe der Erde</b> messen konnte.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Unsere Familie von Himmelskörpern",
      html: `<p>Das <b>Sonnensystem</b> entstand vor etwa <b>4,6 Milliarden Jahren</b> durch den Kollaps einer Wolke aus Gas und Staub (dem <b>Sonnennebel</b>). In der Mitte bildete sich die Sonne; das übrig gebliebene Material ballte sich, zu einer rotierenden Scheibe abgeplattet, zu Planeten, Monden, Asteroiden und Kometen zusammen.</p>
<ul>
<li>Die <b>Sonne</b> ist ein kleiner Stern (ein „Gelber Zwerg“), enthält aber <b>99,86 %</b> der Masse des Systems. Ihr Durchmesser beträgt etwa das 109-Fache des Erddurchmessers. Sie leuchtet, weil im Kern (etwa 15 Millionen Grad) Wasserstoff durch <b>Kernfusion</b> zu Helium verschmilzt.</li>
<li>Es gibt acht <b>Planeten</b>. Vier <b>terrestrische</b> (felsig, klein, dicht, nahe der Sonne): Merkur, Venus, Erde, Mars. Vier <b>Riesenplaneten</b>: die <b>Gasriesen</b> Jupiter und Saturn (Wasserstoff und Helium) und die <b>Eisriesen</b> Uranus und Neptun.</li>
<li>Der <b>Asteroidengürtel</b> zwischen Mars und Jupiter; der <b>Kuipergürtel</b> jenseits von Neptun; die sehr ferne <b>Oortsche Wolke</b>, ein Reservoir von Kometen.</li>
<li>Die <b>Zwergplaneten</b> (Pluto, Ceres, Eris ...): Seit 2006 definiert die Internationale Astronomische Union einen Planeten als einen Körper, der die Sonne umkreist, aufgrund seiner eigenen Schwerkraft kugelförmig ist und seine Umlaufbahn „leergeräumt“ hat. Pluto tut das nicht, also ist er ein Zwergplanet.</li>
</ul>
<p>Warum sind die sonnennahen Planeten felsig und die fernen gasförmig? In der Urscheibe war es nahe der Sonne zu heiß, als dass Gase und Eis kondensieren konnten: Es blieben nur Metalle und Gestein. Jenseits der „Eisgrenze“ (zwischen Mars und Jupiter) konnten die Protoplaneten Eis ansammeln und Wasserstoff und Helium einfangen.</p>`
    },
    {
      type: "3d",
      title: "Das Sonnensystem in Bewegung",
      scene: "solar",
      options: { labels: true },
      caption: "Drehe die Ansicht. Beachte, dass die Planeten fast in derselben Ebene und in derselben Richtung umlaufen: Das ist das Erbe der Scheibe, aus der sie entstanden sind."
    },
    {
      type: "svg",
      title: "Die Entfernungen von der Sonne",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#0f172a"/>
<circle cx="25" cy="150" r="22" fill="#facc15"/>
<g stroke="#334155" stroke-width="1" stroke-dasharray="4 4"><line x1="75" y1="40" x2="75" y2="260"/><line x1="105" y1="40" x2="105" y2="260"/><line x1="125" y1="40" x2="125" y2="260"/><line x1="170" y1="40" x2="170" y2="260"/></g>
<g>
<circle cx="75" cy="150" r="4" fill="#9ca3af"/><text x="75" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Me</text>
<circle cx="100" cy="150" r="7" fill="#fbbf24"/><text x="100" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ve</text>
<circle cx="130" cy="150" r="8" fill="#3b82f6"/><text x="130" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Er</text>
<circle cx="170" cy="150" r="5" fill="#ef4444"/><text x="170" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ma</text>
<circle cx="290" cy="150" r="22" fill="#d97706"/><text x="290" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ju</text>
<circle cx="400" cy="150" r="18" fill="#eab308"/><text x="400" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Sa</text>
<circle cx="520" cy="150" r="12" fill="#22d3ee"/><text x="520" y="190" font-size="14" text-anchor="middle" fill="#e2e8f0">Ur</text>
<circle cx="600" cy="150" r="12" fill="#2563eb"/><text x="600" y="212" font-size="14" text-anchor="middle" fill="#e2e8f0">Ne</text>
</g>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#f8fafc" font-weight="bold">Mittlere Entfernungen von der Sonne (Größen nicht maßstäblich)</text>
<text x="320" y="270" font-size="14" text-anchor="middle" fill="#cbd5e1">0,39 · 0,72 · 1 · 1,52 · 5,2 · 9,6 · 19,2 · 30 AE</text>
</svg>`,
      caption: "Entfernungen in Astronomischen Einheiten (AE). 1 AE = mittlere Entfernung Erde–Sonne ≈ 149,6 Millionen km. Das Sonnenlicht legt sie in etwa 8 Minuten und 20 Sekunden zurück."
    },
    {
      type: "example",
      title: "Wie weit ist die Sonne entfernt, in Lichtzeit gemessen?",
      html: `<p>Das Licht bewegt sich mit etwa <b>300 000 km/s</b>. Entfernung Erde–Sonne: <b>149,6 Millionen km</b>.</p>
<ol>
<li>t = s / v = 149 600 000 km / 300 000 km/s ≈ <b>499 s</b>.</li>
<li>499 s ≈ 8 Minuten und 19 Sekunden.</li>
</ol>
<p>Das heißt: Wenn du die Sonne betrachtest, siehst du sie so, wie sie vor mehr als 8 Minuten war. Für Neptun (30 AE) braucht das Licht etwa viereinhalb Stunden: Die Signale der Voyager-Sonden, die mehr als 20 Milliarden km entfernt sind, brauchen über 18 Stunden bis zu uns.</p>`
    },
    {
      type: "text",
      title: "Vom geozentrischen zum heliozentrischen Weltbild",
      html: `<p>Um zu sehen, wie sich die Denkweise ändert, verfolge die Etappen:</p>
<ul>
<li><b>Aristoteles</b> und dann <b>Ptolemäus</b> (2. Jh. n. Chr., <i>Almagest</i>): Die Erde steht unbewegt im Mittelpunkt, und alles dreht sich um sie. Um die „rückläufige“ Bewegung der Planeten zu erklären (die manchmal umzukehren scheinen), verwendete Ptolemäus Kreise auf Kreisen, die <b>Epizykel</b>.</li>
<li><b>Aristarch von Samos</b> (3. Jh. v. Chr.) hatte bereits ein System mit der Sonne in der Mitte vorgeschlagen, fand aber keine Gefolgschaft.</li>
<li><b>Kopernikus</b> (<i>De revolutionibus</i>, 1543): Die Sonne steht in der Mitte, und die Erde ist ein Planet, der sich um sich selbst und um die Sonne dreht. Die Rückläufigkeit wird zu einem perspektivischen Effekt: Die schnellere Erde überholt den Mars.</li>
<li><b>Galilei</b> (1610), mit dem Fernrohr: die vier Monde des Jupiter (die um Jupiter kreisen, nicht um die Erde), die Phasen der Venus, die Sonnenflecken, die Krater des Mondes.</li>
<li><b>Kepler</b> (1609–1619) und <b>Newton</b> (1687) gaben dem Modell die mathematischen Gesetze.</li>
</ul>`
    },
    {
      type: "decision",
      title: "Wir schreiben das Jahr 1610: Steht die Erde still oder bewegt sie sich?",
      html: `<p>Du hast gerade den <i>Sidereus Nuncius</i> von Galilei gelesen. Er sagt, er habe mit einem Fernrohr <b>vier „Sterne“ gesehen, die um Jupiter kreisen</b>, und dass die Venus Phasen zeige wie der Mond, von der „Sichel“ bis zur „Vollvenus“. Die Kirche und fast alle Universitätsprofessoren verteidigen das System des Ptolemäus, in dem sich alles um die Erde dreht. Was meinst du?</p>`,
      question: "Was hättest du gedacht?",
      options: [
        { label: "Galilei irrt sich: Das sind Fehler der Linsen", outcome: "Das war damals die Reaktion vieler. Aber andere Astronomen, auch Jesuiten des Collegio Romano, wiederholten die Beobachtungen und bestätigten sie." },
        { label: "Nicht alles dreht sich um die Erde, aber ich weiß nicht, ob die Sonne der Mittelpunkt ist", outcome: "Vernünftig: Die Jupitermonde zeigen, dass es andere Bewegungszentren als die Erde gibt. Auch das Mischsystem von Tycho Brahe (Planeten um die Sonne, die Sonne um die Erde) erklärte die Phasen der Venus." },
        { label: "Das kopernikanische Modell ist das einfachste und stimmigste", outcome: "Zu diesem Schluss kamen Galilei und Kepler, auch wenn der entscheidende Beweis (die Sternparallaxe) erst 1838 durch Bessel erbracht wurde." }
      ],
      answer: 2,
      explain: "Galileis Beobachtungen (1610) bewiesen den Heliozentrismus nicht allein, zeigten aber, dass das Modell des Ptolemäus nicht haltbar war. 1633 wurde Galilei von der Inquisition vor Gericht gestellt und zum Widerruf gezwungen. Das kopernikanische System wurde später durch die keplerschen Gesetze und Newtons Gravitation bewiesen."
    },
    {
      type: "text",
      title: "Die drei keplerschen Gesetze",
      html: `<p>Johannes <b>Kepler</b> (1571–1630) erbte die Marsbeobachtungen von <b>Tycho Brahe</b>, die von beispielloser Genauigkeit waren. Nach jahrelangen Berechnungen entdeckte er, dass die Bahnen keine Kreise sind:</p>
<ol>
<li><b>Erstes Gesetz (1609)</b>: Jeder Planet bewegt sich auf einer <b>Ellipse</b>, in deren einem <b>Brennpunkt</b> die Sonne steht.</li>
<li><b>Zweites Gesetz (1609)</b>: Die Verbindungslinie vom Planeten zur Sonne <b>überstreicht in gleichen Zeiten gleiche Flächen</b>. Folge: Der Planet ist schneller, wenn er der Sonne nahe ist (<b>Perihel</b>), und langsamer, wenn er weit entfernt ist (<b>Aphel</b>).</li>
<li><b>Drittes Gesetz (1619)</b>: Das Quadrat der Umlaufzeit ist proportional zur dritten Potenz der großen Halbachse der Bahn: <b>T² / a³ = konstant</b>. Mit T in Jahren und a in AE ist die Konstante 1: <b>T² = a³</b>.</li>
</ol>
<p>Newton zeigte 1687, dass die drei Gesetze die Folge einer einzigen Kraft sind: der <b>allgemeinen Gravitation</b>, F = G · m₁ · m₂ / r².</p>`
    },
    {
      type: "svg",
      title: "Die Ellipse und das Flächengesetz",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<ellipse cx="320" cy="150" rx="260" ry="100" fill="none" stroke="#2563eb" stroke-width="3"/>
<circle cx="220" cy="150" r="14" fill="#facc15" stroke="#b45309" stroke-width="2"/>
<circle cx="420" cy="150" r="4" fill="#475569"/>
<text x="220" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Sonne (Brennpunkt)</text>
<text x="420" y="170" font-size="14" text-anchor="middle" fill="#475569">anderer Brennpunkt</text>
<path d="M220 150 L560 150 A260 100 0 0 0 543 106 Z" fill="#fde68a" opacity="0.9" stroke="#b45309" stroke-width="1"/>
<path d="M220 150 L83 128 A260 100 0 0 0 80 175 Z" fill="#bbf7d0" opacity="0.9" stroke="#15803d" stroke-width="1"/>
<circle cx="580" cy="150" r="9" fill="#3b82f6"/>
<circle cx="60" cy="150" r="9" fill="#3b82f6"/>
<text x="580" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Aphel</text>
<text x="60" y="185" font-size="14" text-anchor="middle" fill="#1f2937">Perihel</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#0c4a6e" font-weight="bold">Die beiden farbigen Flächen sind gleich groß: gleiche Durchlaufzeit</text>
<text x="320" y="285" font-size="14" text-anchor="middle" fill="#475569">(die Exzentrizität ist stark übertrieben: Die Erdbahn ist fast ein Kreis)</text>
</svg>`,
      caption: "Je näher der Planet der Sonne ist, desto schneller bewegt er sich: Um dieselbe Fläche auf kürzerer Strecke zu überstreichen, braucht es mehr Geschwindigkeit, für die breitere genügt weniger."
    },
    {
      type: "example",
      title: "Das dritte Gesetz anwenden: die Umlaufzeit des Mars",
      html: `<p>Der Mars hat die große Halbachse <b>a = 1,52 AE</b>. Wie lang dauert sein Jahr?</p>
<ol>
<li>T² = a³ = 1,52³ ≈ 3,51</li>
<li>T = √3,51 ≈ <b>1,87 Erdjahre</b> (etwa 687 Tage).</li>
</ol>
<p>Für Jupiter, a = 5,2 AE: T² = 140,6 → T ≈ <b>11,9 Jahre</b>. Und für einen Asteroiden mit einer Umlaufzeit von 8 Jahren? a³ = 64 → a = <b>4 AE</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Sonnensystem und Kepler",
      questions: [
        { type: "mc", q: "An welchem Punkt der Bahn hat ein Planet die größte Geschwindigkeit?", options: ["Aphel", "Perihel", "Sie ist immer gleich"], answer: 1, explain: "Zweites Gesetz: Je näher an der Sonne, desto schneller." },
        { type: "num", q: "Ein Planet hat die große Halbachse a = 4 AE. Wie groß ist seine Umlaufzeit T (in Jahren)?", answer: 8, tol: 0.05, unit: "Jahre", explain: "T² = 4³ = 64 → T = 8 Jahre." },
        { type: "tf", q: "Die Sonne enthält etwa 99,86 % der Masse des Sonnensystems.", answer: true, explain: "Alle Planeten zusammen machen weniger als 0,2 % aus (allein Jupiter enthält davon mehr als zwei Drittel)." }
      ]
    },
    {
      type: "text",
      title: "Form und Größe der Erde",
      html: `<p>Dass die Erde eine Kugel ist, wusste man schon lange vor Kolumbus. Schon die griechischen Philosophen führten Beweise an:</p>
<ul>
<li>bei <b>Mondfinsternissen</b> ist der Erdschatten auf der Mondscheibe immer rund (<b>Aristoteles</b>, 4. Jh. v. Chr.);</li>
<li><b>Schiffe, die am Horizont verschwinden</b>, und zwar zuerst mit dem Rumpf: Erst verschwindet der Rumpf, dann die Segel;</li>
<li>wenn man nach Süden reist, tauchen neue Sterne auf, und die Höhe des Polarsterns ändert sich mit der Breite;</li>
<li>heute: Fotos aus dem Weltraum, die Weltumsegelung, das GPS.</li>
</ul>
<p>Genauer gesagt ist die Erde keine perfekte Kugel, sondern ein <b>Geoid</b>: Sie ist durch die Rotation an den Polen abgeplattet. Äquatorradius <b>6378 km</b>, Polradius <b>6357 km</b> (Unterschied etwa 21 km, also 0,3 %). Umfang am Äquator etwa <b>40 075 km</b>; entlang eines Meridians etwa 40 008 km. Ein Breitengrad misst etwa 111 km: Daraus entstand die ursprüngliche Definition des <b>Meters</b> (1791: ein Zehnmillionstel des Meridianquadranten vom Pol bis zum Äquator).</p>`
    },
    {
      type: "example",
      title: "Eratosthenes misst die Erde (um 240 v. Chr.)",
      html: `<p>Eratosthenes, der Leiter der Bibliothek von Alexandria, erfuhr, dass in <b>Syene</b> (heute Assuan) am Tag der Sommersonnenwende mittags die Sonne den Grund der Brunnen beleuchtete: Sie stand im <b>Zenit</b>. Im selben Augenblick warf in <b>Alexandria</b> ein senkrechter Stab (Gnomon) einen Schatten: Die Sonne bildete mit der Senkrechten einen Winkel von etwa <b>7,2°</b>, also 1/50 des Vollwinkels.</p>
<ol>
<li>Also ist die Entfernung Syene–Alexandria 1/50 des Erdumfangs.</li>
<li>Die Entfernung (gemessen von den „Bematisten“, die Schritte zählten) betrug etwa <b>5000 Stadien</b>.</li>
<li>Umfang = 5000 × 50 = <b>250 000 Stadien</b>.</li>
</ol>
<p>Bei einem Stadion zwischen 157 und 185 m liegt das Ergebnis zwischen 39 000 und 46 000 km: erstaunlich nah am wahren Wert von 40 000 km – mit einem Stab, einem Schatten und etwas Geometrie.</p>`
    },
    {
      type: "widget",
      title: "Der Globus",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f0f9ff"/><circle cx="200" cy="150" r="110" fill="#bae6fd" stroke="#0369a1" stroke-width="3"/><ellipse cx="200" cy="150" rx="110" ry="30" fill="none" stroke="#dc2626" stroke-width="2"/><ellipse cx="200" cy="150" rx="40" ry="110" fill="none" stroke="#16a34a" stroke-width="2"/><line x1="200" y1="20" x2="200" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="6 4"/><ellipse cx="200" cy="92" rx="70" ry="14" fill="none" stroke="#7c3aed" stroke-width="2"/></svg>`,
        spots: [
          { x: 200, y: 20, label: "Rotationsachse" },
          { x: 310, y: 150, label: "Äquator" },
          { x: 200, y: 78, label: "Breitenkreis" },
          { x: 160, y: 220, label: "Längenkreis (Meridian)" }
        ]
      },
      caption: "Das Gradnetz: Die Breitenkreise (Kreise parallel zum Äquator) messen die geografische Breite, die Meridiane (von Pol zu Pol) die geografische Länge."
    },
    {
      type: "3d",
      title: "Das Erdinnere",
      scene: "layers",
      options: { layers: [
        { r: 1, color: "#92400e", label: "Erdkruste (5–70 km)" },
        { r: 0.9, color: "#ea580c", label: "Erdmantel (bis 2900 km)" },
        { r: 0.55, color: "#f59e0b", label: "Äußerer Kern (flüssig)" },
        { r: 0.2, color: "#fef08a", label: "Innerer Kern (fest)" }
      ] },
      caption: "Der Erdradius beträgt etwa 6371 km. Wir kennen den Aufbau dank der seismischen Wellen von Erdbeben, die beim Durchlaufen verschiedener Materialien ihre Geschwindigkeit ändern (die Proportionen sind hier schematisch)."
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Größenordnungen zu begreifen",
      intro: "Astronomische Entfernungen entziehen sich der Anschauung. Versuche es mit diesen Maßstäben.",
      tabs: [
        {
          label: "⚽ Im Maßstab 1 : 10 Milliarden",
          html: `<p>Verkleinern wir alles um das Zehnmilliardenfache: Die Sonne wird zu einem Ball von etwa 14 cm, die Erde zu einem Körnchen von 1,3 mm in 15 m Entfernung. Jupiter ist eine Kugel von 1,4 cm in 78 m Entfernung; Neptun liegt bei 450 m. Der nächste Stern, Proxima Centauri, wäre mehr als 4000 km entfernt, etwa so weit wie von Rom nach Moskau und darüber hinaus. Das Sonnensystem ist fast ganz leer.</p>`
        },
        {
          label: "🏎️ Mit 100 km/h",
          html: `<p>Ein Auto mit 100 km/h bräuchte etwa <b>1,5 Millionen Stunden</b>, also etwa <b>170 Jahre</b>, um von der Erde zur Sonne zu fahren. Zum Mond (384 400 km) wären es etwa 160 Tage. Das Licht umrundet den Äquator in einer Sekunde 7,5-mal.</p>`
        },
        {
          label: "📅 Der kosmische Kalender",
          html: `<p>Pressen wir 13,8 Milliarden Jahre Geschichte des Universums in ein Jahr: Der Urknall ist am 1. Januar; das Sonnensystem entsteht um den 2. September; das Leben erscheint Mitte September; die Dinosaurier herrschen Ende Dezember; der <b>Homo sapiens</b> erscheint wenige Minuten vor Mitternacht am 31. Dezember. Die gesamte schriftlich überlieferte Menschheitsgeschichte fällt in die letzten Sekunden.</p>`
        }
      ]
    },
    {
      type: "curiosity",
      title: "Stehen wir auf dem Kopf?",
      html: `<p>Im Weltraum gibt es kein absolutes „Oben“: „Unten“ ist dort, wohin die Schwerkraft zeigt, also zum Erdmittelpunkt. Ein Australier steht gegenüber einem Europäer nur auf unseren Karten „auf dem Kopf“, die den Norden per Konvention oben darstellen (früher hatten viele mittelalterliche Karten den Osten oben, daher das Wort <b>Orientierung</b>). Noch eine Kuriosität: Die Erde bewegt sich nicht nur mit etwa 30 km/s um die Sonne: Die Sonne selbst umkreist das Zentrum der Milchstraße mit etwa 220 km/s und braucht für einen Umlauf etwa 230 Millionen Jahre.</p>`
    },
    {
      type: "curiosity",
      title: "Warum Pluto kein Planet mehr ist",
      html: `<p>Pluto wurde 1930 von <b>Clyde Tombaugh</b> entdeckt. In den 2000er-Jahren fand man jedoch im Kuipergürtel weitere Körper ähnlicher Größe: <b>Eris</b>, 2005, ist sogar etwas massereicher als Pluto. Entweder erklärte man Dutzende Objekte zu Planeten, oder man definierte die Kategorie neu. 2006 wählte die Internationale Astronomische Union den zweiten Weg und schuf die Kategorie der <b>Zwergplaneten</b>. 2015 schickte uns die Raumsonde <b>New Horizons</b> spektakuläre Bilder der Plutooberfläche, mit einer riesigen herzförmigen Ebene aus Stickstoffeis.</p>`
    },
    {
      type: "conceptMap",
      title: "Mindmap des Sonnensystems: Tippe auf die Knoten und finde heraus, warum",
      nodes: [
        { id: "nebulosa", label: "Sonnennebel", x: 50, y: 6, color: "#a855f7", html: "Die Gas- und Staubwolke, aus der alles vor 4,6 Milliarden Jahren entstand.", why: "Die Nebularhypothese wurde von <b>Kant</b> (1755) und <b>Laplace</b> (1796) aufgestellt, um zu erklären, warum alle Planeten in derselben Richtung und fast in derselben Ebene umlaufen; das Alter von 4,57 Milliarden Jahren stammt aus der radiometrischen Datierung der ältesten Meteoriten." },
        { id: "sole", label: "Sonne", x: 20, y: 28, color: "#facc15", html: "Der Zentralstern.", why: "Die Sonnenenergie entsteht durch die Fusion von Wasserstoff zu Helium: <b>Bethe</b> (1938/39) erklärte die Reaktionen. Deshalb hat die Sonne ein endliches Leben: Sie hat noch Brennstoff für etwa 5 Milliarden Jahre." },
        { id: "pianeti", label: "Planeten", x: 50, y: 40, color: "#3b82f6", html: "Vier terrestrische und vier Riesenplaneten.", why: "Der Unterschied in der Zusammensetzung hängt von der Temperatur der Scheibe ab: innerhalb der Eisgrenze nur Gestein und Metalle, außerhalb auch Eis und Gas." },
        { id: "keplero", label: "Keplersche Gesetze", x: 80, y: 28, color: "#22c55e", html: "Elliptische Bahnen, gleiche Flächen, T² ∝ a³.", why: "Kepler versuchte jahrelang, die Daten von Tycho Brahe mit Kreisbahnen in Einklang zu bringen, doch es blieb immer eine Abweichung von 8 Bogenminuten: Weil er den Daten mehr traute als der Tradition, entdeckte er die Ellipsen." },
        { id: "newton", label: "Allgemeine Gravitation", x: 80, y: 56, color: "#ef4444", html: "F = G·m₁·m₂/r².", why: "Newton (1687) zeigte, dass dieselbe Kraft, die einen Apfel fallen lässt, die Bewegung des Mondes und der Planeten bestimmt, und leitete daraus mathematisch die drei keplerschen Gesetze ab." },
        { id: "terra", label: "Form der Erde", x: 20, y: 62, color: "#06b6d4", html: "Ein an den Polen leicht abgeplattetes Geoid.", why: "Die Rotation erzeugt am Äquator die größte Fliehkraft, und das Gestein fließt zu einer Ausbuchtung. 1735 maßen französische Expeditionen in Lappland und Peru die Länge eines Meridiangrades und bestätigten die von Newton vorhergesagte Abplattung." },
        { id: "eratostene", label: "Eratosthenes", x: 20, y: 86, color: "#f59e0b", html: "Erste Messung des Erdumfangs.", why: "Er nutzte die Geometrie: Die Wechselwinkel bei parallelen Sonnenstrahlen und die Entfernung zwischen zwei Städten ergeben den Bruchteil des Umfangs." },
        { id: "geo", label: "Geozentrismus und Heliozentrismus", x: 55, y: 80, color: "#14b8a6", html: "Erde oder Sonne im Zentrum?", why: "Kopernikus (1543), Galilei (1610), Kepler (1609) und Newton (1687) bauten, einer auf dem anderen, das moderne Modell auf. Die Bestätigung des jährlichen Umlaufs der Erde durch Beobachtung, die Sternparallaxe, kam 1838 durch Bessel." }
      ],
      edges: [
        ["nebulosa", "sole", "bildet"],
        ["nebulosa", "pianeti", "bildet"],
        ["pianeti", "keplero", "beschrieben durch"],
        ["keplero", "newton", "erklärt durch"],
        ["pianeti", "terra", "darunter"],
        ["terra", "eratostene", "gemessen von"],
        ["geo", "keplero", "führt zu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Erde",
      questions: [
        { type: "mc", q: "Wer maß als Erster den Erdumfang mit Schatten und Geometrie?", options: ["Eratosthenes", "Ptolemäus", "Kepler"], answer: 0, explain: "Eratosthenes von Kyrene, Bibliothekar in Alexandria (3. Jh. v. Chr.)." },
        { type: "mc", q: "Die Form der Erde beschreibt man am besten als …", options: ["eine perfekte Kugel", "ein an den Polen abgeplattetes Geoid", "eine Scheibe"], answer: 1, explain: "Die Rotation lässt den Äquator anschwellen: Der Äquatorradius ist um 21 km größer als der Polradius." },
        { type: "tf", q: "Pluto ist ein Zwergplanet.", answer: true, explain: "Seit 2006 nach der Definition der IAU." }
      ]
    }
  ],
  glossary: [
    { t: "Sonnensystem", d: "Die Sonne und alle Körper, die sie umkreisen." },
    { t: "Astronomische Einheit (AE)", d: "Mittlere Entfernung Erde–Sonne, etwa 149,6 Millionen km." },
    { t: "Terrestrischer Planet", d: "Kleiner, felsiger Planet: Merkur, Venus, Erde, Mars." },
    { t: "Riesenplanet", d: "Großer Planet mit geringer Dichte: Jupiter, Saturn, Uranus, Neptun." },
    { t: "Zwergplanet", d: "Kugelförmiger Körper, der die Sonne umkreist, aber seine Bahn nicht leergeräumt hat (Pluto, Ceres)." },
    { t: "Ellipse", d: "Geschlossene Kurve, bei der die Summe der Abstände von den beiden Brennpunkten konstant ist." },
    { t: "Perihel / Aphel", d: "Der sonnennächste und der sonnenfernste Punkt der Bahn." },
    { t: "Drittes keplersches Gesetz", d: "T² / a³ ist für alle Planeten gleich." },
    { t: "Geoid", d: "Die wahre Form der Erde, an den Polen abgeplattet." },
    { t: "Geografische Breite / Länge", d: "Winkelkoordinaten, die einen Punkt der Erde in Bezug auf den Äquator und den Nullmeridian von Greenwich festlegen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher Körper des Sonnensystems hat die meiste Masse?", options: ["Jupiter", "Die Sonne", "Die Erde"], answer: 1, explain: "Die Sonne hat 99,86 % der Masse." },
      { type: "mc", q: "Welche Planeten sind Gasplaneten?", options: ["Jupiter und Saturn", "Uranus und Neptun", "Mars und Venus"], answer: 0, explain: "Jupiter und Saturn bestehen vor allem aus Wasserstoff und Helium; Uranus und Neptun sind Eisriesen." },
      { type: "tf", q: "Nach Kepler sind die Planetenbahnen Ellipsen, in deren einem Brennpunkt die Sonne steht.", answer: true, explain: "Das ist das erste keplersche Gesetz." },
      { type: "num", q: "Ein Planet hat die große Halbachse a = 9 AE. Wie groß ist die Umlaufzeit in Jahren?", answer: 27, unit: "Jahre", explain: "T² = 9³ = 729 → T = 27 Jahre." },
      { type: "mc", q: "Im Januar steht die Erde im Perihel, also …", options: ["bewegt sie sich schneller", "ist es auf der Nordhalbkugel wärmer", "ist sie weiter von der Sonne entfernt"], answer: 0, explain: "Nahe der Sonne ist sie schneller (zweites Gesetz). Die Jahreszeiten hängen nicht vom Abstand ab, sondern von der Neigung der Achse." },
      { type: "num", q: "Wenn das Licht 500 Sekunden braucht, um von der Sonne zur Erde zu gelangen, wie viele km ist die Sonne entfernt? (c = 300 000 km/s)", answer: 150000000, tol: 1000000, unit: "km", explain: "s = c · t = 300 000 × 500 = 150 Millionen km." },
      { type: "mc", q: "Welchen Beweis für die Kugelgestalt der Erde führte Aristoteles an?", options: ["Den kreisrunden Erdschatten bei Mondfinsternissen", "Fotos aus dem Weltraum", "Die Gezeiten"], answer: 0, explain: "Nur ein kugelförmiger Körper wirft immer einen kreisrunden Schatten." },
      { type: "text", q: "Wer schrieb 1543 das Werk De revolutionibus orbium coelestium?", answer: ["Kopernikus", "Nikolaus Kopernikus", "Nicolaus Copernicus", "Kopernikus Nikolaus", "Copernicus"], explain: "Nikolaus Kopernikus, der das heliozentrische System vorschlug." },
      { type: "order", q: "Ordne die Planeten nach zunehmender Entfernung von der Sonne.", items: ["Merkur", "Erde", "Mars", "Jupiter", "Saturn"], explain: "Merkur 0,39 AE, Erde 1, Mars 1,52, Jupiter 5,2, Saturn 9,6." },
      { type: "mc", q: "Wie konnte man den inneren Aufbau der Erde erforschen?", options: ["Mit seismischen Wellen", "Durch Graben bis zum Kern", "Mit Teleskopen"], answer: 0, explain: "Das tiefste Bohrloch (Kola, etwa 12 km) erreicht nicht einmal den Mantel: Das Erdinnere kennt man aus seismischen Wellen." }
    ]
  }
});
