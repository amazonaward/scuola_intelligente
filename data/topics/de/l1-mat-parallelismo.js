TOPIC('de', {
  id: "l1-mat-parallelismo",
  title: "Parallelen und Vierecke",
  intro: "Zwei Eisenbahngleise verlaufen nebeneinander und treffen sich nie. Das scheint selbstverständlich, ist aber eine der feinsinnigsten Ideen der Mathematik: Zu beweisen, dass es Parallelen gibt, ist leicht, zu verstehen, wie viele es gibt, hat <b>zweitausend Jahre</b> gedauert und zur Entdeckung völlig neuer Geometrien geführt. In dieser Lektion behandeln wir die <b>Winkel an Parallelen</b>, die <b>Winkelsumme</b> im Dreieck und die Eigenschaften der <b>Vierecke</b> (Parallelogramme und Trapeze).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Parallele Geraden und Transversale",
      html: `<p>Zwei Geraden der Ebene sind <b>parallel</b>, wenn sie keinen gemeinsamen Punkt haben (oder zusammenfallen). Man schreibt <b>r ∥ s</b>. Zwei nicht parallele Geraden in der Ebene schneiden sich in einem Punkt.</p>
<p>Wenn eine dritte Gerade, die <b>Transversale</b> (Schnittgerade), zwei Geraden schneidet, entstehen acht Winkel. Die wichtigen Paare sind:</p>
<ul>
<li><b>Wechselwinkel (innen)</b>: liegen zwischen den beiden Geraden, auf verschiedenen Seiten der Transversalen;</li>
<li><b>Wechselwinkel (außen)</b>: liegen außerhalb der beiden Geraden, auf verschiedenen Seiten der Transversalen;</li>
<li><b>Stufenwinkel</b> (Gegenwinkel): liegen in derselben Lage bezüglich der beiden Geraden und der Transversalen;</li>
<li><b>Nebenwinkel an Parallelen</b> (konjugierte Winkel, „Co-interior“): auf derselben Seite der Transversalen, beide zwischen den Geraden (oder beide außerhalb).</li>
</ul>
<p><b>Satz.</b> Zwei von einer Transversalen geschnittene Geraden sind genau dann parallel, wenn eine dieser Bedingungen gilt:</p>
<ul>
<li>die <b>Wechselwinkel</b> (innen oder außen) sind <b>kongruent</b>;</li>
<li>die <b>Stufenwinkel</b> sind <b>kongruent</b>;</li>
<li>die <b>konjugierten Winkel</b> sind <b>supplementär</b> (Summe 180°).</li>
</ul>
<p>„Genau dann, wenn“ bedeutet, dass es in beide Richtungen gilt. Der Teil „wenn die Wechselwinkel kongruent sind, sind die Geraden parallel“ wird mit den ersten vier Postulaten allein bewiesen; die Umkehrung „wenn sie parallel sind, sind die Wechselwinkel kongruent“ <b>erfordert das fünfte Postulat</b>.</p>`
    },
    {
      type: "svg",
      title: "Die Winkel an zwei Parallelen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<line x1="40" y1="100" x2="560" y2="100" stroke="#1f2937" stroke-width="3"/>
<line x1="40" y1="200" x2="560" y2="200" stroke="#1f2937" stroke-width="3"/>
<line x1="200" y1="40" x2="400" y2="260" stroke="#6366f1" stroke-width="3"/>
<text x="500" y="90" font-size="16" fill="#1f2937">r</text>
<text x="500" y="190" font-size="16" fill="#1f2937">s</text>
<text x="420" y="268" font-size="16" fill="#4338ca">Transversale</text>
<circle cx="255" cy="100" r="5" fill="#1f2937"/><circle cx="345" cy="200" r="5" fill="#1f2937"/>
<text x="272" y="132" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="300" y="186" font-size="22" fill="#16a34a" font-weight="bold">α</text>
<text x="368" y="226" font-size="22" fill="#ea580c" font-weight="bold">α</text>
<text x="212" y="132" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="340" y="170" font-size="22" fill="#dc2626" font-weight="bold">β</text>
<text x="40" y="30" font-size="16" fill="#16a34a" font-weight="bold">grün: Wechselwinkel (gleich)</text>
<text x="40" y="52" font-size="16" fill="#ea580c" font-weight="bold">orange: Stufenwinkel (gleich)</text>
<text x="330" y="30" font-size="16" fill="#dc2626" font-weight="bold">β = 180° − α (konjugiert)</text>
</svg>`,
      caption: "Wenn r ∥ s: Die grünen Winkel (Wechselwinkel) und der orange (Stufenwinkel) sind gleich α; der rote Winkel β ist der Supplementwinkel."
    },
    {
      type: "example",
      title: "Beispiel: Winkel berechnen",
      html: `<p>Zwei parallele Geraden werden von einer Transversalen geschnitten; einer der acht Winkel misst <b>65°</b>. Wie groß sind die anderen?</p>
<ul>
<li>Jeder Winkel ist entweder <b>65°</b> oder sein Supplementwinkel <b>180° − 65° = 115°</b>.</li>
<li>Vier Winkel (die beiden Wechselwinkel, die Stufenwinkel, die Scheitelwinkel) sind 65°; die anderen vier sind 115°.</li>
<li>An jedem der beiden Schnittpunkte bilden zwei Nebenwinkel einen gestreckten Winkel (180°); Scheitelwinkel sind gleich.</li>
</ul>`
    },
    {
      type: "text",
      title: "Die Winkelsumme im Dreieck",
      html: `<p>Das erste große Ergebnis, das aus dem fünften Postulat folgt:</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>In jedem Dreieck beträgt die Summe der Innenwinkel 180°.</b></p>
<p><b>Beweis.</b> Sei ABC ein Dreieck. Durch die Ecke C ziehe ich die Parallele r zur Seite AB. Die Winkel, die r mit den Seiten CA und CB bildet, sind Wechselwinkel zu den Winkeln A und B des Dreiecks (bezüglich der Transversalen CA und CB): Sie sind also kongruent zu A und zu B. Zusammen mit dem Winkel C bilden diese Winkel einen <b>gestreckten Winkel</b>: A + B + C = 180°. ∎</p>
<p>Folgerungen:</p>
<ul>
<li><b>Außenwinkel</b>: In einem Dreieck ist ein Außenwinkel gleich der <b>Summe der beiden nicht anliegenden Innenwinkel</b> (weil 180° − C = A + B).</li>
<li><b>Vieleck mit n Seiten</b>: Man zerlegt es in (n − 2) Dreiecke, also ist die Summe der Innenwinkel <b>(n − 2) · 180°</b>. Viereck: 360°; Fünfeck: 540°; Sechseck: 720°.</li>
<li>Die Summe der <b>Außenwinkel</b> eines konvexen Vielecks (einer pro Ecke) beträgt immer <b>360°</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Parallelogramme",
      html: `<p>Ein <b>Parallelogramm</b> ist ein Viereck mit <b>parallelen Gegenseiten</b>. Allein aus dieser Definition lassen sich mit den Sätzen über Winkel an Parallelen und der Kongruenz von Dreiecken seine Eigenschaften beweisen:</p>
<ul>
<li>die Gegenseiten sind <b>kongruent</b>;</li>
<li>die gegenüberliegenden Winkel sind <b>kongruent</b>, die an einer Seite anliegenden sind <b>supplementär</b>;</li>
<li>die <b>Diagonalen</b> halbieren sich gegenseitig (in ihrem Mittelpunkt).</li>
</ul>
<p>Auch die Umkehrung gilt: Ein Viereck ist ein Parallelogramm, wenn es kongruente Gegenseiten hat, oder zwei parallele und kongruente Gegenseiten, oder sich halbierende Diagonalen.</p>
<p><b>Besondere Parallelogramme</b>:</p>
<ul>
<li><b>Rechteck</b>: vier rechte Winkel; die Diagonalen sind <b>kongruent</b>.</li>
<li><b>Raute</b> (Rhombus): vier kongruente Seiten; die Diagonalen stehen <b>senkrecht</b> aufeinander und halbieren die Winkel.</li>
<li><b>Quadrat</b>: Rechteck und Raute zugleich (vier kongruente Seiten und vier kongruente Winkel).</li>
</ul>
<p><b>Trapez</b>: Viereck mit <b>nur einem Paar paralleler Seiten</b> (den Grundseiten). Sind die Schenkel kongruent, ist es <b>gleichschenklig</b> (Basiswinkel kongruent, Diagonalen kongruent); steht ein Schenkel senkrecht auf den Grundseiten, ist es <b>rechtwinklig</b>. In jedem Trapez sind die an einem Schenkel anliegenden Winkel supplementär (konjugierte Innenwinkel).</p>`
    },
    {
      type: "widget",
      title: "Ordne die Eigenschaft dem Viereck zu",
      widget: "match",
      options: { pairs: [
        ["Gegenseiten parallel und kongruent", "Parallelogramm"],
        ["Kongruente Diagonalen, die sich halbieren", "Rechteck"],
        ["Senkrechte Diagonalen und vier gleiche Seiten", "Raute"],
        ["Vier kongruente Seiten und vier kongruente Winkel", "Quadrat"],
        ["Nur ein Paar paralleler Seiten", "Trapez"]
      ] },
      caption: "Jedes Viereck hat seine charakteristischen Eigenschaften."
    },
    {
      type: "svg",
      title: "Die Familie der Vierecke",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<g font-size="16" text-anchor="middle" font-weight="bold">
<rect x="210" y="14" width="180" height="40" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="300" y="40" fill="#312e81">Viereck</text>
<rect x="60" y="110" width="150" height="40" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="135" y="136" fill="#78350f">Trapez</text>
<rect x="390" y="110" width="170" height="40" rx="8" fill="#dcfce7" stroke="#166534" stroke-width="2"/><text x="475" y="136" fill="#14532d">Parallelogramm</text>
<rect x="290" y="210" width="110" height="40" rx="8" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/><text x="345" y="236" fill="#831843">Raute</text>
<rect x="450" y="210" width="130" height="40" rx="8" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="515" y="236" fill="#164e63">Rechteck</text>
<rect x="360" y="266" width="120" height="30" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/><text x="420" y="287" fill="#78350f">Quadrat</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none">
<line x1="270" y1="54" x2="150" y2="110"/><line x1="330" y1="54" x2="450" y2="110"/>
<line x1="440" y1="150" x2="365" y2="210"/><line x1="500" y1="150" x2="515" y2="210"/>
<line x1="365" y1="250" x2="400" y2="266"/><line x1="515" y1="250" x2="460" y2="266"/>
</g>
<text x="20" y="215" font-size="14" fill="#475569">jede untere Figur hat alle</text>
<text x="20" y="235" font-size="14" fill="#475569">Eigenschaften der oberen</text>
</svg>`,
      caption: "Das Quadrat ist eine Raute und ein Rechteck und ein Parallelogramm, aber nicht umgekehrt."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Der Pantograph und die Gelenklampe",
      html: `<p>Der <b>Pantograph</b> (Storchschnabel) ist ein Gerät aus gelenkig verbundenen Stäben, die ein Parallelogramm bilden: Man benutzte ihn, um Zeichnungen vergrößert oder verkleinert zu kopieren. Er funktioniert, weil beim Verformen des Parallelogramms die Gegenseiten <b>parallel und gleich lang</b> bleiben. Dieselben Gelenkparallelogramme siehst du bei Schreibtischlampen mit Armen, bei Hebebühnen für Autos und bei den Stromabnehmern elektrischer Züge: Der obere Teil bleibt parallel zur Basis, während er auf- und abwärts geht.</p>
<p>Hier ist die <b>Nicht-Starrheit</b> des Parallelogramms (anders als beim Dreieck) ein Vorteil: Es soll sich gerade die Form ändern können.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Winkel im Parallelogramm",
      html: `<p>In einem Parallelogramm ABCD misst der Winkel A <b>70°</b>. Wie groß sind die anderen Winkel und, wenn AB = 12 cm und BC = 8 cm, der Umfang?</p>
<ul>
<li>Der gegenüberliegende Winkel C ist kongruent zu A: <b>70°</b>.</li>
<li>Der Winkel B ist supplementär zu A: 180° − 70° = <b>110°</b>; auch D = 110°.</li>
<li>Kontrolle: 70 + 110 + 70 + 110 = 360° ✔️</li>
<li>Umfang: 2(12 + 8) = <b>40 cm</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Winkel und Parallelen",
      questions: [
        { type: "num", q: "Zwei parallele Geraden werden von einer Transversalen geschnitten. Ein Winkel misst 65°: Wie groß ist sein Wechselwinkel?", answer: 65, unit: "°", explain: "Wechselwinkel an Parallelen sind kongruent." },
        { type: "mc", q: "Zwei konjugierte Innenwinkel an Parallelen sind …", options: ["kongruent", "supplementär", "komplementär"], answer: 1, explain: "Ihre Summe ist 180° (gestreckter Winkel)." },
        { type: "tf", q: "Wenn zwei von einer Transversalen geschnittene Geraden kongruente Stufenwinkel bilden, dann sind sie parallel.", answer: true, explain: "Das ist eine der Bedingungen des Satzes über die Parallelität." }
      ]
    },
    {
      type: "decision",
      title: "Das Postulat, das niemand beweisen konnte",
      html: `<p>Du bist ein Mathematiker zu Beginn des 19. Jahrhunderts. Das fünfte Postulat Euklids („durch einen Punkt geht nur eine Parallele zu einer gegebenen Geraden“) kommt dir zu kompliziert für ein Postulat vor: Seit zweitausend Jahren haben Tausende von Gelehrten, von Proklos bis Saccheri, versucht, es aus den anderen vier zu <b>beweisen</b>, aber jeder „Beweis“ verbirgt einen Fehler.</p>`,
      question: "Was hättest du versucht?",
      options: [
        { label: "Weiter nach einem Beweis suchen", outcome: "Das ist der Weg, den man zwei Jahrtausende lang gegangen ist, ohne Erfolg: Jeder Versuch setzte (heimlich) etwas voraus, das dem Postulat selbst gleichwertig war." },
        { label: "Annehmen, es sei FALSCH, und sehen, ob man auf einen Widerspruch kommt", outcome: "Das ist die Idee des Widerspruchsbeweises: Führt seine Verneinung zu einem Widerspruch, ist das Postulat bewiesen. Aber was ist, wenn der Widerspruch nie kommt?" },
        { label: "Es als Postulat akzeptieren und weitermachen", outcome: "Das tat Euklid, zu Recht. Aber der Zweifel bleibt: Ist es wirklich die einzig mögliche Geometrie?" }
      ],
      answer: 1,
      explain: "Saccheri (1733) versuchte es genau mit dem Widerspruch, glaubte aber, einen Widerspruch gefunden zu haben, der gar nicht da war. Dann erkannten Gauß (privat), Lobatschewski (1829) und Bolyai (1832), dass bei der Verneinung des Postulats kein Widerspruch entsteht: Es entstehen nichteuklidische Geometrien, ebenso widerspruchsfrei wie die Euklids. Im 19. Jahrhundert erweiterte Riemann das Bild, und im 20. Jahrhundert benutzte Einstein eine nichteuklidische Geometrie, um in der Allgemeinen Relativitätstheorie die Gravitation zu beschreiben."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Dreiecke mit drei rechten Winkeln",
      html: `<p>Auf der Erdoberfläche kannst du ein Dreieck mit <b>drei rechten Winkeln</b> bauen: Starte am Nordpol, gehe auf einem Längengrad hinunter zum Äquator, lege ein Viertel des Äquators zurück und steige dann auf einem anderen Längengrad zum Pol auf. Die Winkelsumme beträgt 270°! Das ist kein Fehler: Auf der Kugel gelten die Postulate Euklids nicht, denn dort gibt es <b>keine parallelen Geraden</b> (zwei „Geraden“, also Großkreise, schneiden sich immer). Deshalb fliegen Piloten auf Bahnen, die auf der Karte gekrümmt aussehen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Logo-Schildkröte",
      html: `<p>Die Summe der <b>Außenwinkel</b> jedes konvexen Vielecks beträgt <b>360°</b>: Das versteht man, wenn man am Rand entlanggeht. An jeder Ecke drehst du dich um einen bestimmten Winkel, und wenn du zum Startpunkt zurückkehrst, hast du eine volle Drehung gemacht. Das ist die Idee hinter der Programmiersprache <i>Logo</i> (die „Schildkröte“ von Seymour Papert, 1960er Jahre): Um ein Quadrat zu zeichnen, geht die Schildkröte vorwärts und dreht sich 4-mal um 90°.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Parallelität und Vierecke zu verstehen",
      intro: "Wenn dich die Namen der Winkel verwirren, verankere sie in Bildern und Bewegungen.",
      tabs: [
        {
          label: "🚂 Gleise und Zebrastreifen",
          html: `<p>Die <b>Zebrastreifen</b> sind parallel; die <b>Straße</b>, die sie schneidet, ist die Transversale. Wenn du von einer Seite zur anderen gehst, drehst du dich bezüglich der Streifen immer um denselben Winkel. Deshalb sind Stufenwinkel gleich: „gleiche Lage = gleiche Neigung“. Wechselwinkel sind aus demselben Grund gleich (eine halbe Drehung um den Mittelpunkt des Transversalenstücks genügt). Die konjugierten Winkel ergeben zusammen einen gestreckten Winkel, 180°, wie die beiden Seiten einer offenen Tür.</p>`
        },
        {
          label: "🐢 Die gehende Schildkröte",
          html: `<p>Stell dir vor, du gehst am Rand eines Vielecks entlang und drehst dich an jeder Ecke um einen Winkel (den <b>Außenwinkel</b>). Wenn du zum Startpunkt zurückkommst und in die Anfangsrichtung blickst, hast du dich insgesamt um <b>360°</b> gedreht. Also ist die Summe der Außenwinkel 360° <b>unabhängig von der Anzahl der Seiten</b>.</p>
<p>Ein regelmäßiges Vieleck mit n Seiten hat n gleiche Außenwinkel: Jeder ist 360°/n. Der Innenwinkel ist 180° − 360°/n. Für das Sechseck: 180° − 60° = 120°; für das Achteck: 180° − 45° = 135°. Vergleiche mit der Formel (n − 2) · 180°/n: Man erhält dasselbe Ergebnis.</p>`
        },
        {
          label: "🌍 Auf der Kugel (3D)",
          html: `<p>Drehe den Globus: Das Dreieck, das am Nordpol startet, am Längengrad 0° zum Äquator hinabführt, auf dem Äquator bis 90° Ost verläuft und zum Pol zurückkehrt, hat <b>drei rechte Winkel</b>. Auf einer gekrümmten Fläche ist die Winkelsumme eines Dreiecks größer als 180°: Die Geometrie Euklids gilt für die Ebene, nicht für die Kugel.</p>`,
          scene: "globe",
          options: { points: [ { lat: 90, lon: 0, label: "Nordpol", color: "#ef4444" }, { lat: 0, lon: 0, label: "Äquator 0°", color: "#2563eb" }, { lat: 0, lon: 90, label: "Äquator 90° O", color: "#16a34a" } ], routes: [ { points: [0, 1, 2, 0], color: "#f97316" } ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Parallelität",
      nodes: [
        { id: "v", label: "Fünftes Postulat", x: 50, y: 6, color: "#ef4444", html: "Durch einen Punkt außerhalb einer Geraden geht genau eine Parallele.", why: "Euklid formulierte es lang und wenig „evident“; zwei Jahrtausende lang versuchte man, es aus den anderen herzuleiten. Playfair (1795) gab ihm die moderne Form." },
        { id: "par", label: "Parallele Geraden", x: 20, y: 28, color: "#6366f1", html: "Geraden in einer Ebene ohne gemeinsame Punkte.", why: "Die Existenz beweist man ohne das V. Postulat (kongruente Wechselwinkel); die Eindeutigkeit dagegen erfordert es." },
        { id: "ang", label: "Winkel an der Transversalen", x: 50, y: 40, color: "#16a34a", html: "Wechselwinkel, Stufenwinkel, konjugierte Winkel.", why: "Sie sind die „Übersetzung“ der Parallelität in Winkelmaße: Man kann beweisen, dass zwei Geraden parallel sind, indem man Winkel misst." },
        { id: "tri", label: "Winkelsumme = 180°", x: 80, y: 28, color: "#f59e0b", html: "In jedem Dreieck gilt A + B + C = 180°.", why: "Man beweist sie, indem man durch eine Ecke die Parallele zur gegenüberliegenden Seite zieht: Sie hängt vom V. Postulat ab (auf der Kugel ist die Summe größer als 180°)." },
        { id: "pol", label: "Winkel in Vielecken", x: 80, y: 55, color: "#a855f7", html: "Innenwinkelsumme (n − 2)·180°, Außenwinkelsumme 360°.", why: "Ein Vieleck zerlegt man in n − 2 Dreiecke; die Außenwinkelsumme ist eine volle Drehung." },
        { id: "parall", label: "Parallelogramme", x: 20, y: 62, color: "#0ea5e9", html: "Parallele Gegenseiten: Eigenschaften von Seiten, Winkeln, Diagonalen.", why: "Alle Eigenschaften folgen aus den Wechselwinkeln an Parallelen und der Kongruenz der Dreiecke, die eine Diagonale bildet." },
        { id: "part", label: "Rechteck, Raute, Quadrat", x: 20, y: 88, color: "#22c55e", html: "Parallelogramme mit zusätzlichen Eigenschaften.", why: "Fügt man eine Eigenschaft hinzu (rechte Winkel, gleiche Seiten), wird die Familie kleiner: Das ist die Logik von Klassifikationen." },
        { id: "trap", label: "Trapez", x: 55, y: 80, color: "#14b8a6", html: "Nur ein Paar paralleler Seiten.", why: "Die am Schenkel anliegenden Winkel sind konjugierte Innenwinkel zwischen den parallelen Grundseiten und daher supplementär." },
        { id: "non", label: "Nichteuklidische Geometrien", x: 85, y: 88, color: "#ec4899", html: "Geometrien, in denen das V. Postulat falsch ist.", why: "Lobatschewski (1829), Bolyai (1832) und Riemann (1854): Verneint man das V., entstehen widerspruchsfreie Geometrien. Einstein nutzt sie für die Gravitation." }
      ],
      edges: [
        ["v", "par", "regelt"],
        ["par", "ang", "übersetzt sich in"],
        ["ang", "tri", "beweist"],
        ["tri", "pol", "verallgemeinert zu"],
        ["par", "parall", "definiert"],
        ["parall", "part", "spezialisiert sich zu"],
        ["par", "trap", "definiert"],
        ["v", "non", "verneint durch"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vielecke",
      questions: [
        { type: "num", q: "Wie groß ist die Summe der Innenwinkel eines Sechsecks?", answer: 720, unit: "°", explain: "(6 − 2) · 180° = 720°." },
        { type: "num", q: "In einem Parallelogramm misst ein Winkel 70°. Wie groß ist ein anliegender Winkel?", answer: 110, unit: "°", explain: "Die an einer Seite anliegenden Winkel sind supplementär: 180° − 70° = 110°." },
        { type: "mc", q: "Die Diagonalen einer Raute sind …", options: ["senkrecht", "immer kongruent", "parallel"], answer: 0, explain: "In der Raute stehen die Diagonalen senkrecht aufeinander und halbieren die Winkel." }
      ]
    }
  ],
  glossary: [
    { t: "Parallele Geraden", d: "Geraden in einer Ebene, die keine gemeinsamen Punkte haben." },
    { t: "Transversale", d: "Gerade, die zwei oder mehr Geraden schneidet." },
    { t: "Wechselwinkel", d: "Winkel zwischen den beiden Geraden, auf verschiedenen Seiten der Transversalen." },
    { t: "Stufenwinkel", d: "Winkel in derselben Lage bezüglich der beiden Geraden und der Transversalen." },
    { t: "Konjugierte Winkel", d: "Winkel auf derselben Seite der Transversalen, beide innen oder beide außen." },
    { t: "Außenwinkel", d: "Winkel, der von einer Seite eines Vielecks und der Verlängerung der anliegenden Seite gebildet wird." },
    { t: "Parallelogramm", d: "Viereck mit parallelen Gegenseiten." },
    { t: "Trapez", d: "Viereck mit nur einem Paar paralleler Seiten (den Grundseiten)." },
    { t: "Nichteuklidische Geometrie", d: "Geometrie, in der das fünfte Postulat Euklids nicht gilt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Zwei parallele Geraden werden von einer Transversalen geschnitten. Zwei konjugierte Innenwinkel sind …", options: ["supplementär", "kongruent", "komplementär"], answer: 0, explain: "Sie liegen auf derselben Seite der Transversalen, und ihre Summe ist 180°." },
      { type: "num", q: "In einem Dreieck messen zwei Innenwinkel 50° und 60°. Wie groß ist der Außenwinkel am dritten Winkel?", answer: 110, unit: "°", explain: "Der Außenwinkel ist die Summe der beiden nicht anliegenden Innenwinkel: 50° + 60° = 110°." },
      { type: "num", q: "Wie groß ist die Summe der Innenwinkel eines Fünfecks?", answer: 540, unit: "°", explain: "(5 − 2) · 180° = 540°." },
      { type: "num", q: "Wie groß ist jeder Innenwinkel eines regelmäßigen Sechsecks?", answer: 120, unit: "°", explain: "720°/6 = 120°, oder 180° − 360°/6." },
      { type: "mc", q: "Welches Viereck hat kongruente Diagonalen, die sich gegenseitig halbieren?", options: ["Rechteck", "Raute (kein Quadrat)", "Ungleichschenkliges Trapez"], answer: 0, explain: "Das ist eine Eigenschaft des Rechtecks." },
      { type: "tf", q: "In jedem Parallelogramm sind die Diagonalen kongruent.", answer: false, explain: "Sie sind nur im Rechteck (und damit im Quadrat) kongruent. Im Allgemeinen halbieren sie sich, haben aber verschiedene Längen." },
      { type: "mc", q: "Das Viereck mit nur einem Paar paralleler Seiten heißt …", options: ["Trapez", "Parallelogramm", "Raute"], answer: 0, explain: "Die Grundseiten des Trapezes sind die parallelen Seiten." },
      { type: "num", q: "Ein Parallelogramm hat den Umfang 50 cm und eine Seite von 15 cm. Wie lang ist die anliegende Seite?", answer: 10, unit: "cm", explain: "Halber Umfang 25 cm: 25 − 15 = 10 cm." },
      { type: "order", q: "Bringe die Schritte des Beweises, dass die Winkelsumme im Dreieck 180° beträgt, in die richtige Reihenfolge.", items: ["Durch eine Ecke zeichne ich die Parallele zur gegenüberliegenden Seite", "Ich bestimme die Wechselwinkel, die zu den Dreieckswinkeln kongruent sind", "Die drei Winkel an dieser Ecke bilden einen gestreckten Winkel", "Ich folgere: Die Summe ist 180°"], explain: "Die Schlüsselidee ist die Parallele durch eine Ecke." },
      { type: "mc", q: "Auf einer Kugel ist die Winkelsumme eines Dreiecks …", options: ["größer als 180°", "genau 180°", "kleiner als 180°"], answer: 0, explain: "In der sphärischen (elliptischen) Geometrie übersteigt die Summe 180°: zum Beispiel 270° bei einem Dreieck mit drei rechten Winkeln." }
    ]
  }
});
