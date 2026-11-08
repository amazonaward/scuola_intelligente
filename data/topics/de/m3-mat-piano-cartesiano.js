TOPIC('de', {
  id: "m3-mat-piano-cartesiano",
  title: "Das Koordinatensystem (kartesisches Koordinatensystem)",
  intro: "Schiffe versenken, Landkarten, GPS, Bildschirme von Videospielen: Um einen Punkt anzugeben, genügt ein <b>Zahlenpaar</b>. Das ist die geniale Idee des <b>kartesischen Koordinatensystems</b>, das Geometrie und Algebra verbindet. Wir lernen, mit Koordinaten umzugehen, Abstände zu berechnen und <b>Funktionen</b> und <b>Geraden</b> zu zeichnen.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Achsen, Ursprung, Koordinaten",
      html: `<p>Das <b>kartesische Koordinatensystem</b> besteht aus zwei <b>senkrecht</b> aufeinander stehenden Zahlengeraden:</p>
<ul>
<li>der <b>x-Achse</b> (Abszissenachse), waagerecht;</li>
<li>der <b>y-Achse</b> (Ordinatenachse), senkrecht;</li>
<li>sie schneiden sich im <b>Ursprung O(0; 0)</b>.</li>
</ul>
<p>Jeder Punkt P wird durch ein <b>geordnetes Zahlenpaar</b> festgelegt, seine <b>Koordinaten</b>: <b>P(x; y)</b>. Zuerst liest man die <b>Abszisse</b> (waagerechte Verschiebung) ab, dann die <b>Ordinate</b> (senkrechte Verschiebung). Die Reihenfolge zählt: A(2; 5) und B(5; 2) sind verschiedene Punkte!</p>
<p>Die Achsen teilen die Ebene in <b>vier Quadranten</b>, die gegen den Uhrzeigersinn nummeriert werden:</p>
<ul>
<li>I. Quadrant: x &gt; 0, y &gt; 0 &nbsp;(+; +)</li>
<li>II. Quadrant: x &lt; 0, y &gt; 0 &nbsp;(−; +)</li>
<li>III. Quadrant: x &lt; 0, y &lt; 0 &nbsp;(−; −)</li>
<li>IV. Quadrant: x &gt; 0, y &lt; 0 &nbsp;(+; −)</li>
</ul>
<p>Punkte auf der x-Achse haben y = 0; die auf der y-Achse haben x = 0.</p>`
    },
    {
      type: "svg",
      title: "Das Koordinatensystem und die vier Quadranten",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#ffffff"/>
<g stroke="#e2e8f0" stroke-width="1">
<line x1="140" y1="20" x2="140" y2="320"/><line x1="180" y1="20" x2="180" y2="320"/><line x1="220" y1="20" x2="220" y2="320"/><line x1="260" y1="20" x2="260" y2="320"/><line x1="300" y1="20" x2="300" y2="320"/><line x1="340" y1="20" x2="340" y2="320"/><line x1="380" y1="20" x2="380" y2="320"/><line x1="420" y1="20" x2="420" y2="320"/><line x1="460" y1="20" x2="460" y2="320"/><line x1="500" y1="20" x2="500" y2="320"/>
<line x1="100" y1="50" x2="540" y2="50"/><line x1="100" y1="90" x2="540" y2="90"/><line x1="100" y1="130" x2="540" y2="130"/><line x1="100" y1="210" x2="540" y2="210"/><line x1="100" y1="250" x2="540" y2="250"/><line x1="100" y1="290" x2="540" y2="290"/>
</g>
<line x1="100" y1="170" x2="545" y2="170" stroke="#1f2937" stroke-width="3"/>
<polygon points="550,170 538,164 538,176" fill="#1f2937"/>
<line x1="320" y1="325" x2="320" y2="15" stroke="#1f2937" stroke-width="3"/>
<polygon points="320,10 314,22 326,22" fill="#1f2937"/>
<text x="555" y="190" font-size="20" fill="#1f2937" font-weight="bold">x</text>
<text x="330" y="22" font-size="20" fill="#1f2937" font-weight="bold">y</text>
<text x="305" y="190" font-size="16" fill="#1f2937">O</text>
<text x="470" y="40" font-size="18" fill="#2563eb" font-weight="bold">I (+;+)</text>
<text x="120" y="40" font-size="18" fill="#16a34a" font-weight="bold">II (−;+)</text>
<text x="120" y="315" font-size="18" fill="#dc2626" font-weight="bold">III (−;−)</text>
<text x="460" y="315" font-size="18" fill="#a855f7" font-weight="bold">IV (+;−)</text>
<line x1="440" y1="170" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="320" y1="50" x2="440" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"/>
<circle cx="440" cy="50" r="7" fill="#2563eb"/>
<text x="450" y="75" font-size="17" fill="#2563eb" font-weight="bold">A(3; 3)</text>
<circle cx="200" cy="90" r="7" fill="#16a34a"/>
<text x="150" y="80" font-size="17" fill="#16a34a" font-weight="bold">B(−3; 2)</text>
<circle cx="240" cy="250" r="7" fill="#dc2626"/>
<text x="180" y="275" font-size="17" fill="#dc2626" font-weight="bold">C(−2; −2)</text>
<circle cx="480" cy="210" r="7" fill="#a855f7"/>
<text x="490" y="235" font-size="17" fill="#a855f7" font-weight="bold">D(4; −1)</text>
<g font-size="13" fill="#475569" text-anchor="middle"><text x="360" y="188">1</text><text x="400" y="188">2</text><text x="440" y="188">3</text><text x="480" y="188">4</text><text x="280" y="188">−1</text><text x="240" y="188">−2</text><text x="200" y="188">−3</text></g>
</svg>`,
      caption: "Jedes Kästchen des Gitters ist eine Einheit. Um A(3; 3) zu finden: 3 Schritte nach rechts, dann 3 nach oben."
    },
    {
      type: "text",
      title: "Abstand zweier Punkte und Mittelpunkt",
      html: `<ul>
<li><b>Waagerechte Strecke</b> (gleiches y): Abstand = Differenz der Abszissen im Betrag. A(1; 4), B(7; 4) → AB = |7 − 1| = <b>6</b>.</li>
<li><b>Senkrechte Strecke</b> (gleiches x): Differenz der Ordinaten. C(2; −3), D(2; 5) → CD = |5 − (−3)| = <b>8</b>.</li>
<li><b>Schräge Strecke</b>: Sie ist die Hypotenuse eines rechtwinkligen Dreiecks! Man benutzt den <b>Satz des Pythagoras</b>:<br><b>AB = √[(x₂ − x₁)² + (y₂ − y₁)²]</b>.<br>A(1; 2), B(4; 6) → AB = √(3² + 4²) = √25 = <b>5</b>.</li>
<li><b>Mittelpunkt</b> M von AB: der Mittelwert der Koordinaten: <b>M((x₁ + x₂)/2; (y₁ + y₂)/2)</b>. A(2; 1), B(8; 5) → M(5; 3).</li>
</ul>
<p>Mit Koordinaten kann man <b>Umfänge und Flächeninhalte</b> von Vielecken berechnen, die in der Ebene gezeichnet sind.</p>`
    },
    {
      type: "widget",
      title: "Pythagoras in der Ebene",
      widget: "pythagoras",
      options: {},
      caption: "Die Katheten sind die waagerechte (Δx) und die senkrechte (Δy) Verschiebung zwischen den beiden Punkten; die Hypotenuse ist ihr Abstand."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Koordinaten und Abstände",
      questions: [
        { type: "mc", q: "In welchem Quadranten liegt P(−4; 7)?", options: ["I", "II", "III", "IV"], answer: 1, explain: "x negativ und y positiv: II. Quadrant." },
        { type: "num", q: "Abstand zwischen A(−2; 3) und B(6; 3)?", answer: 8, explain: "Gleiche Ordinate: |6 − (−2)| = 8." },
        { type: "num", q: "Abstand zwischen O(0; 0) und P(6; 8)?", answer: 10, explain: "√(36 + 64) = √100 = 10." }
      ]
    },
    {
      type: "text",
      title: "Funktionen und ihre Graphen",
      html: `<p>Eine <b>Funktion</b> ist eine Beziehung, die jedem Wert von <b>x</b> <b>genau einen</b> Wert von <b>y</b> zuordnet. Man schreibt <b>y = f(x)</b>. Um sie zu zeichnen, stellst du eine <b>Wertetabelle</b> (x; y) auf, trägst die Punkte in die Ebene ein und verbindest sie.</p>
<ul>
<li><b>Direkte Proportionalität</b> <b>y = kx</b>: Wenn sich x verdoppelt, verdoppelt sich y. Der Graph ist eine <b>Gerade durch den Ursprung</b>. Beispiel: Kosten = 2 € × Anzahl der Hefte.</li>
<li><b>Indirekte (umgekehrte) Proportionalität</b> <b>y = k/x</b>: Wenn sich x verdoppelt, halbiert sich y (xy = k konstant). Der Graph ist ein <b>Ast einer Hyperbel</b>. Beispiel: Zeit für eine Fahrt von 120 km = 120 / Geschwindigkeit.</li>
<li><b>Lineare Funktion</b> <b>y = mx + q</b>: Der Graph ist eine <b>Gerade</b>. Beispiel: Taxi mit 3 € Grundgebühr und 1,50 € pro km → y = 1,5x + 3.</li>
<li><b>Quadratische Funktion</b> <b>y = ax²</b>: Der Graph ist eine <b>Parabel</b> mit dem Scheitel im Ursprung. Beispiel: Flächeninhalt des Quadrats in Abhängigkeit von der Seite.</li>
</ul>`
    },
    {
      type: "text",
      title: "Die Gerade: y = mx + q",
      html: `<ul>
<li><b>m</b> ist die <b>Steigung</b> (coefficiente angolare): um wie viel y steigt, wenn x um 1 wächst. Wenn m &gt; 0, <b>steigt</b> die Gerade, wenn m &lt; 0, <b>fällt</b> sie, wenn m = 0, ist sie <b>waagerecht</b>. Man berechnet sie mit zwei Punkten: <b>m = (y₂ − y₁) / (x₂ − x₁)</b>.</li>
<li><b>q</b> ist der <b>y-Achsenabschnitt</b>: der Punkt, in dem die Gerade die y-Achse schneidet, also (0; q).</li>
<li>Sonderfälle: <b>y = k</b> ist eine waagerechte Gerade; <b>x = k</b> ist eine senkrechte Gerade (keine Funktion!); die x-Achse hat die Gleichung y = 0, die y-Achse x = 0; <b>y = x</b> ist die Winkelhalbierende des I. und III. Quadranten.</li>
<li><b>Parallele</b> Geraden: gleiches m (y = 2x + 1 und y = 2x − 5).</li>
<li><b>Senkrecht aufeinander stehende</b> Geraden: m · m′ = −1 (y = 2x und y = −½x + 3).</li>
<li>Ein Punkt <b>liegt auf</b> einer Geraden, wenn seine Koordinaten ihre Gleichung erfüllen: Liegt P(2; 7) auf y = 3x + 1? 3·2 + 1 = 7 ✔️</li>
</ul>`
    },
    {
      type: "svg",
      title: "Geraden im Vergleich",
      svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="340" fill="#f8fafc"/>
<line x1="60" y1="190" x2="440" y2="190" stroke="#1f2937" stroke-width="2"/>
<line x1="250" y1="330" x2="250" y2="10" stroke="#1f2937" stroke-width="2"/>
<text x="445" y="195" font-size="16">x</text><text x="256" y="20" font-size="16">y</text>
<line x1="170" y1="350" x2="350" y2="-10" stroke="#2563eb" stroke-width="4"/>
<line x1="130" y1="350" x2="290" y2="30" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 6"/>
<line x1="60" y1="95" x2="440" y2="285" stroke="#dc2626" stroke-width="4"/>
<line x1="60" y1="110" x2="440" y2="110" stroke="#16a34a" stroke-width="4"/>
<circle cx="250" cy="190" r="6" fill="#1f2937"/>
<circle cx="250" cy="110" r="6" fill="#16a34a"/>
<text x="460" y="60" font-size="18" fill="#2563eb" font-weight="bold">y = 2x  (steigt, durch O)</text>
<text x="460" y="95" font-size="18" fill="#60a5fa" font-weight="bold">y = 2x + 2  (parallel)</text>
<text x="460" y="130" font-size="18" fill="#dc2626" font-weight="bold">y = −½x  (fällt,</text>
<text x="478" y="152" font-size="18" fill="#dc2626" font-weight="bold">senkrecht zu y = 2x)</text>
<text x="460" y="190" font-size="18" fill="#16a34a" font-weight="bold">y = 2  (waagerecht, m = 0)</text>
<text x="460" y="240" font-size="15" fill="#475569">1 Kästchen = 40 px</text>
</svg>`,
      caption: "Die beiden blauen Geraden haben dieselbe Steigung m = 2: Sie sind parallel. Die rote hat m = −½: 2 · (−½) = −1, also steht sie senkrecht auf der blauen."
    },
    {
      type: "example",
      title: "Praxisbeispiel: zwei Abonnements im Vergleich",
      html: `<p>Fitnessstudio A: <b>30 € Anmeldegebühr + 20 € im Monat</b>. Fitnessstudio B: <b>keine Anmeldegebühr, 26 € im Monat</b>.</p>
<ul>
<li>A: y = 20x + 30 &nbsp;&nbsp; B: y = 26x</li>
<li>Wann kosten sie gleich viel? 20x + 30 = 26x → 6x = 30 → <b>x = 5 Monate</b> (Kosten 130 €).</li>
<li>Im Graphen ist es der Punkt, in dem sich die beiden Geraden <b>schneiden</b>: (5; 130). Vor 5 Monaten lohnt sich B, danach A.</li>
</ul>
<table><tr><th>Monate</th><th>1</th><th>3</th><th>5</th><th>8</th><th>12</th></tr><tr><td>A</td><td>50</td><td>90</td><td>130</td><td>190</td><td>270</td></tr><tr><td>B</td><td>26</td><td>78</td><td>130</td><td>208</td><td>312</td></tr></table>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: ein Vieleck in der Ebene",
      html: `<p>Zeichne die Punkte A(1; 1), B(7; 1), C(7; 5), D(1; 5).</p>
<ul>
<li>Es ist ein <b>Rechteck</b>: AB = 7 − 1 = 6, BC = 5 − 1 = 4.</li>
<li>Umfang = 2·(6 + 4) = <b>20</b> Einheiten; Flächeninhalt = 6 · 4 = <b>24</b> Einheiten².</li>
<li>Diagonale AC = √(6² + 4²) = √52 ≈ <b>7,21</b>.</li>
<li>Mittelpunkt (Mittelpunkt von AC) = ((1 + 7)/2; (1 + 5)/2) = <b>(4; 3)</b>.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Descartes und die Fliege",
      html: `<p>Das Koordinatensystem trägt den Namen des französischen Philosophen und Mathematikers <b>René Descartes</b> (lateinisch <i>Cartesius</i>, 1596–1650), der es in der <i>Géométrie</i> beschrieb, einem Anhang zum <i>Discours de la méthode</i> (1637). Eine Legende erzählt, er habe die Idee im Bett gehabt, als er eine <b>Fliege</b> an der Decke beobachtete und sich fragte, wie man ihre Position mit zwei Zahlen beschreiben kann: mit den Abständen zu zwei Wänden! In denselben Jahren kam ein anderer Franzose unabhängig davon darauf: <b>Pierre de Fermat</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Koordinaten überall",
      html: `<ul>
<li>Der <b>Bildschirm</b>, auf dem du liest, ist ein Gitter aus Pixeln mit Koordinaten: Aber in Computern liegt der Ursprung <b>oben links</b>, und y wächst nach unten!</li>
<li>Das <b>GPS</b> benutzt Breiten- und Längengrad: Koordinaten auf einer Kugel. Rom liegt etwa bei (41,9° N; 12,5° O).</li>
<li>Das <b>Schach</b> benutzt Koordinaten: „Springer auf f3“ = Spalte f, Reihe 3.</li>
<li>Viele Städte sind gitterförmig gebaut, wie <b>Manhattan</b> (Plan von 1811) oder das Zentrum von <b>Turin</b>, das den rechtwinkligen Grundriss des römischen Castrums <i>Augusta Taurinorum</i> bewahrt.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>P(x; y): zuerst die Abszisse (waagerecht), dann die Ordinate (senkrecht).</li>
<li>Abstand: AB = √[(Δx)² + (Δy)²]; Mittelpunkt = Mittelwert der Koordinaten.</li>
<li>y = kx → Gerade durch den Ursprung (direkte Proportionalität); y = k/x → Hyperbel (indirekte Proportionalität).</li>
<li>y = mx + q: m = Steigung, q = y-Achsenabschnitt. Parallel: gleiches m. Senkrecht: m·m′ = −1.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Koordinatensystem zu verstehen",
      intro: "Wenn dir die Achsen und Formeln abstrakt vorkommen, versuche es mit einem Spiel, mit dem Globus oder mit einer Treppe.",
      tabs: [
        {
          label: "🚢 Schiffe versenken",
          html: `<p>Bei <b>Schiffe versenken</b> sagst du „B5“: eine <b>Spalte</b> (Buchstabe) und eine <b>Zeile</b> (Zahl). Das ist genau ein Koordinatenpaar!</p>
<p>Im Koordinatensystem ist es gleich, aber: Die Spalten sind Zahlen (auch negative), der Ursprung liegt in der Mitte, und man sagt zuerst <b>x</b> (Spalte) und dann <b>y</b> (Zeile). Eselsbrücke für die Reihenfolge: „<b>erst gehen, dann die Treppe hinaufsteigen</b>“ (erst waagerecht, dann senkrecht), oder „x kommt im Alphabet vor y“.</p>
<p>Spiele mit einem Freund: Zeichnet ein Gitter von −5 bis 5 und versteckt 3 Schiffe. „Schießt“ mit Paaren wie (−2; 3)!</p>`
        },
        {
          label: "🌍 Die Koordinaten der Erde",
          html: `<p>Die Erde benutzt ein „Koordinatensystem“, das um eine Kugel gewickelt ist: den <b>Längengrad</b> (Ost-West, wie die x) und den <b>Breitengrad</b> (Nord-Süd, wie die y). Der „Ursprung“ ist der Schnittpunkt von <b>Äquator</b> und <b>Nullmeridian von Greenwich</b>, mitten im Atlantischen Ozean, im Golf von Guinea.</p>
<p>Die vier „Quadranten“ sind: Nordost (Italien), Nordwest (USA), Südwest (Brasilien), Südost (Australien). Dreh den Globus und finde die Punkte.</p>`,
          scene: "globe",
          options: { points: [
            { lat: 0, lon: 0, label: "Ursprung (0°; 0°)", color: "#1f2937" },
            { lat: 41.9, lon: 12.5, label: "Rom (N; O)", color: "#2563eb" },
            { lat: 40.7, lon: -74, label: "New York (N; W)", color: "#16a34a" },
            { lat: -22.9, lon: -43.2, label: "Rio de Janeiro (S; W)", color: "#dc2626" },
            { lat: -33.9, lon: 151.2, label: "Sydney (S; O)", color: "#a855f7" }
          ] }
        },
        {
          label: "🪜 Die Steigung wie eine Treppe",
          html: `<p>Die Steigung <b>m</b> ist wie die <b>Steigung einer Treppe oder einer Straße</b>: „wie viel steigst du für jeden Schritt nach vorn“.</p>
<ul>
<li>m = 1: Für jeden Schritt nach vorn steigst du um 1 (Steigung von 100 %, 45°).</li>
<li>m = 0,1: Für jede 10 m nach vorn steigst du 1 m: Das ist die Steigung von <b>10 %</b> auf den Verkehrsschildern!</li>
<li>m negativ: Die Straße geht bergab.</li>
</ul>
<p>In den Vereinigten Staaten lernt man es mit der Formel „<b>rise over run</b>“: Anstieg geteilt durch Lauf, m = Δy / Δx.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f0fdf4"/>
<path d="M60 210 L140 210 L140 170 L220 170 L220 130 L300 130 L300 90 L380 90 L380 50" fill="none" stroke="#166534" stroke-width="5"/>
<line x1="60" y1="210" x2="380" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6"/>
<text x="100" y="232" font-size="16" text-anchor="middle" fill="#b45309">run = 2</text>
<text x="165" y="195" font-size="16" fill="#dc2626">rise = 1</text>
<text x="430" y="110" font-size="22" fill="#1f2937" font-weight="bold">m = rise / run</text>
<text x="430" y="145" font-size="22" fill="#2563eb" font-weight="bold">= 1/2</text>
</svg>`
        },
        {
          label: "🔗 Ordne Gleichung und Graph zu",
          html: `<p>Verbinde jede Gleichung mit der Beschreibung ihres Graphen.</p>`,
          widget: "match",
          options: { pairs: [
            ["y = 3x", "steigende Gerade durch den Ursprung"],
            ["y = −2x + 4", "fallende Gerade, die die y-Achse bei 4 schneidet"],
            ["y = 5", "waagerechte Gerade"],
            ["x = −1", "senkrechte Gerade"],
            ["y = 12/x", "Hyperbel (indirekte Proportionalität)"],
            ["y = x²", "Parabel mit dem Scheitel in O"]
          ] }
        },
        {
          label: "🇬🇧 «Along the corridor, then up the stairs» (England)",
          html: "<p>Was ist die x und was die y? In <b>England</b> merken sich die Schüler das mit einem Satz: <b>«along the corridor, then up the stairs»</b>, also <b>„erst den Flur entlang, dann die Treppe hinauf“</b>.</p><ol><li>Du startest im <b>Ursprung</b> O, als stündest du am Eingang eines Gebäudes.</li><li><b>Zuerst</b> gehst du den Flur entlang: Das ist die <b>x</b> (waagerecht). Beim Punkt (3; 5) machst du 3 Schritte nach rechts.</li><li><b>Dann</b> steigst du die Treppe hinauf: Das ist die <b>y</b> (senkrecht). Du steigst 5 Stufen.</li></ol><p>Du kannst die Treppe nicht hinaufsteigen, bevor du an der richtigen Stelle im Flur angekommen bist: Darum kommt die <b>x immer zuerst</b>. Und die negativen Zahlen? Beim Punkt (−2; −4) führt der Flur nach <b>links</b>, und die Treppe geht <b>hinunter in den Keller</b>!</p><p>🎯 Wo kommst du mit (−3; 2) an? Und mit (4; −1)? In welchem Quadranten liegt jeder Punkt?</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"98\" y1=\"20\" x2=\"98\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"132\" y1=\"20\" x2=\"132\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"166\" y1=\"20\" x2=\"166\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"234\" y1=\"20\" x2=\"234\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"268\" y1=\"20\" x2=\"268\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"302\" y1=\"20\" x2=\"302\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"336\" y1=\"20\" x2=\"336\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"370\" y1=\"20\" x2=\"370\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"404\" y1=\"20\" x2=\"404\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"438\" y1=\"20\" x2=\"438\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"472\" y1=\"20\" x2=\"472\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"506\" y1=\"20\" x2=\"506\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"540\" y1=\"20\" x2=\"540\" y2=\"290\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"284\" x2=\"560\" y2=\"284\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"216\" x2=\"560\" y2=\"216\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"182\" x2=\"560\" y2=\"182\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"148\" x2=\"560\" y2=\"148\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"114\" x2=\"560\" y2=\"114\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"80\" x2=\"560\" y2=\"80\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"46\" x2=\"560\" y2=\"46\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"20\" y1=\"250\" x2=\"560\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"200\" y1=\"290\" x2=\"200\" y2=\"20\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"565\" y=\"255\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">x</text><text x=\"206\" y=\"24\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">y</text><line x1=\"200\" y1=\"246\" x2=\"302\" y2=\"246\" stroke=\"#16a34a\" stroke-width=\"8\"/><line x1=\"302\" y1=\"250\" x2=\"302\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"5\"/><line x1=\"292\" y1=\"216\" x2=\"312\" y2=\"216\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"182\" x2=\"312\" y2=\"182\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"148\" x2=\"312\" y2=\"148\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"114\" x2=\"312\" y2=\"114\" stroke=\"#ea580c\" stroke-width=\"4\"/><line x1=\"292\" y1=\"80\" x2=\"312\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"4\"/><circle cx=\"302\" cy=\"80\" r=\"8\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"316\" y=\"74\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">(3; 5)</text><text x=\"222\" y=\"280\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">1) den Flur entlang →</text><text x=\"340\" y=\"150\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">2) die Treppe hinauf ↑</text><circle cx=\"200\" cy=\"250\" r=\"5\" fill=\"#334155\" stroke=\"none\" stroke-width=\"2\"/><text x=\"182\" y=\"270\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">O</text></svg>"
        },
        {
          label: "🇺🇸 Die Steigung «rise over run» (USA)",
          html: "<p>In den <b>Vereinigten Staaten</b> lernt man die Steigung m (englisch <i>slope</i>) mit einem Merkspruch: <b>«rise over run»</b>, also „Anstieg durch Lauf“.</p><ul><li><b>run</b> = um wie viel du dich waagerecht bewegst (Differenz der x);</li><li><b>rise</b> = um wie viel du senkrecht steigst (Differenz der y);</li><li><b>m = rise : run</b>.</li></ul><p><b>Beispiel</b>: Die Gerade geht durch A(1; 2) und B(5; 4).</p><ol><li>run = 5 − 1 = <b>4</b></li><li>rise = 4 − 2 = <b>2</b></li><li>m = 2 / 4 = <b>1/2</b>: Für jeden Schritt nach vorn steigst du ein halbes Kästchen.</li><li>Finde q mit dem Punkt A: 2 = ½ · 1 + q → q = 3/2. Die Gerade ist <b>y = ½x + 3/2</b>. Kontrolle mit B: ½ · 5 + 3/2 = 4 ✔</li></ol><p>Sonderfälle: Wenn die Gerade <b>fällt</b>, ist der rise <b>negativ</b> und m &lt; 0; wenn sie <b>waagerecht</b> ist, ist rise = 0 und m = 0; wenn sie <b>senkrecht</b> ist, ist run = 0, und man kann nicht durch null dividieren: Die Steigung existiert nicht.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"200\" y1=\"10\" x2=\"200\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"260\" y1=\"10\" x2=\"260\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"320\" y1=\"10\" x2=\"320\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"380\" y1=\"10\" x2=\"380\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"440\" y1=\"10\" x2=\"440\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"500\" y1=\"10\" x2=\"500\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"520\" y2=\"260\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"210\" x2=\"520\" y2=\"210\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"160\" x2=\"520\" y2=\"160\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"60\" x2=\"520\" y2=\"60\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"10\" x2=\"520\" y2=\"10\" stroke=\"#e5e7eb\" stroke-width=\"1\"/><line x1=\"80\" y1=\"260\" x2=\"530\" y2=\"260\" stroke=\"#334155\" stroke-width=\"2\"/><line x1=\"80\" y1=\"270\" x2=\"80\" y2=\"5\" stroke=\"#334155\" stroke-width=\"2\"/><text x=\"140\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">1</text><text x=\"200\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">2</text><text x=\"260\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">3</text><text x=\"320\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">4</text><text x=\"380\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">5</text><text x=\"440\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">6</text><text x=\"500\" y=\"280\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">7</text><text x=\"68\" y=\"215\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">1</text><text x=\"68\" y=\"165\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">2</text><text x=\"68\" y=\"115\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">3</text><text x=\"68\" y=\"65\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">4</text><text x=\"68\" y=\"15\" font-size=\"14\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">5</text><line x1=\"80\" y1=\"185\" x2=\"500\" y2=\"10\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"140\" y1=\"160\" x2=\"380\" y2=\"160\" stroke=\"#16a34a\" stroke-width=\"5\"/><line x1=\"380\" y1=\"160\" x2=\"380\" y2=\"60\" stroke=\"#ea580c\" stroke-width=\"5\"/><circle cx=\"140\" cy=\"160\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"380\" cy=\"60\" r=\"7\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><text x=\"130\" y=\"146\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">A(1; 2)</text><text x=\"366\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">B(5; 4)</text><text x=\"260\" y=\"184\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#16a34a\" text-anchor=\"middle\" font-weight=\"bold\">run = 4</text><text x=\"390\" y=\"115\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#ea580c\" font-weight=\"bold\">rise = 2</text><text x=\"380\" y=\"200\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">m = rise / run</text><text x=\"380\" y=\"226\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">m = 2 / 4 = 1/2</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Koordinatensystems",
      nodes: [
        { id: "retta", label: "Zahlengerade", x: 50, y: 6, color: "#64748b", html: "Eine Gerade mit Ursprung, Richtung und Einheit: Jeder Punkt ist eine Zahl.", why: "Sie stammt von den relativen Zahlen: Eine einzige Gerade genügt für eine Dimension. Für die Ebene braucht man zwei." },
        { id: "piano", label: "Koordinatensystem", x: 50, y: 26, color: "#2563eb", html: "Zwei senkrechte Zahlengeraden, die sich im Ursprung schneiden.", why: "Beschrieben von Descartes in der <i>Géométrie</i> (1637) und, unabhängig davon, von Fermat. Schon die Alten benutzten etwas Ähnliches: Ptolemäus (2. Jahrhundert) gab Breite und Länge von Städten an." },
        { id: "coordinate", label: "Koordinaten P(x; y)", x: 18, y: 46, color: "#16a34a", html: "Abszisse und Ordinate: der „Personalausweis“ eines Punktes.", why: "„Abszisse“ kommt vom lateinischen <i>abscissa</i>, „abgeschnitten“ (eine auf der Achse abgeschnittene Strecke); „Koordinaten“ wurde von Leibniz 1692 verwendet." },
        { id: "quadranti", label: "Quadranten", x: 10, y: 70, color: "#22c55e", html: "Die 4 Bereiche der Ebene, mit den Vorzeichen (+;+), (−;+), (−;−), (+;−).", why: "Sie sind eine Folge der relativen Zahlen auf den Achsen; sie werden gegen den Uhrzeigersinn nummeriert, in derselben Richtung, in der man in der Mathematik Winkel misst." },
        { id: "distanza", label: "Abstand und Mittelpunkt", x: 36, y: 72, color: "#f59e0b", html: "AB = √[(Δx)² + (Δy)²]; M = Mittelwert der Koordinaten.", why: "Die Abstandsformel ist der Satz des Pythagoras (6. Jahrhundert v. Chr.), angewandt auf das rechtwinklige Dreieck aus der waagerechten und senkrechten Verschiebung." },
        { id: "funzioni", label: "Funktionen y = f(x)", x: 72, y: 46, color: "#a855f7", html: "Jedem x entspricht genau ein y; der Graph ist die Menge der Punkte (x; f(x)).", why: "Der Begriff „Funktion“ wurde von Leibniz (1673) eingeführt und die Schreibweise f(x) von Euler (1734). Das Koordinatensystem erlaubt es, ein Zahlengesetz zu „sehen“." },
        { id: "rette", label: "Geraden y = mx + q", x: 64, y: 72, color: "#ef4444", html: "m = Steigung, q = y-Achsenabschnitt. Parallel: gleiches m; senkrecht: m·m′ = −1.", why: "Jede Gleichung ersten Grades in x und y hat eine Gerade als Graph: Das ist die große Entdeckung von Descartes, die geometrische Probleme in Gleichungen verwandelt." },
        { id: "proporzionalita", label: "Proportionalität", x: 88, y: 70, color: "#0ea5e9", html: "Direkt y = kx (Gerade durch O); indirekt y = k/x (Hyperbel).", why: "Sie verbindet das Koordinatensystem mit den Proportionen aus der zweiten Klasse: Die Konstante k ist der Quotient (direkt) oder das Produkt (indirekt) von x und y." },
        { id: "applicazioni", label: "Anwendungen", x: 50, y: 92, color: "#14b8a6", html: "GPS, Bildschirme, wissenschaftliche und wirtschaftliche Diagramme, Videospiele, Robotik.", why: "Immer wenn eine Position oder eine Beziehung zwischen zwei Größen mit Zahlen beschrieben werden soll, benutzt man Koordinaten: von Pixeln bis zu digitalen Karten." }
      ],
      edges: [
        ["retta", "piano", "zwei senkrechte"],
        ["piano", "coordinate", "jeder Punkt hat"],
        ["coordinate", "quadranti", "das Vorzeichen zeigt an"],
        ["coordinate", "distanza", "erlauben zu berechnen"],
        ["piano", "funzioni", "stellt dar"],
        ["funzioni", "rette", "lineare"],
        ["funzioni", "proporzionalita", "Fälle"],
        ["rette", "applicazioni", "modellieren"],
        ["distanza", "applicazioni", "verwendet in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Geraden und Funktionen",
      questions: [
        { type: "mc", q: "Die Gerade y = −3x + 2 schneidet die y-Achse im Punkt …", options: ["(0; 2)", "(2; 0)", "(0; −3)"], answer: 0, explain: "Der y-Achsenabschnitt ist q = 2: Punkt (0; 2)." },
        { type: "mc", q: "Welche Gerade ist parallel zu y = 4x − 1?", options: ["y = −4x + 1", "y = 4x + 7", "y = ¼x"], answer: 1, explain: "Parallele haben dieselbe Steigung m = 4." },
        { type: "tf", q: "Der Punkt P(3; 10) liegt auf der Geraden y = 3x + 1.", answer: true, explain: "3·3 + 1 = 10 ✔️" }
      ]
    }
  ],
  glossary: [
    { t: "Piano cartesiano (Koordinatensystem)", d: "Ebene mit zwei senkrechten Zahlenachsen, die sich im Ursprung schneiden." },
    { t: "Ascissa (Abszisse)", d: "Die erste Koordinate (x): waagerechte Verschiebung." },
    { t: "Ordinata (Ordinate)", d: "Die zweite Koordinate (y): senkrechte Verschiebung." },
    { t: "Origine (Ursprung)", d: "Der Punkt O(0; 0), Schnittpunkt der Achsen." },
    { t: "Quadrante (Quadrant)", d: "Jeder der vier Teile, in die die Achsen die Ebene teilen." },
    { t: "Funzione (Funktion)", d: "Beziehung, die jedem x genau ein y zuordnet." },
    { t: "Coefficiente angolare (Steigung)", d: "Die Zahl m in y = mx + q: gibt die Steigung der Geraden an." },
    { t: "Ordinata all'origine (y-Achsenabschnitt)", d: "Die Zahl q in y = mx + q: dort, wo die Gerade die y-Achse schneidet." },
    { t: "Iperbole (Hyperbel)", d: "Der Graph der indirekten Proportionalität y = k/x." },
    { t: "Parabola (Parabel)", d: "Der Graph von y = ax²." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Der Punkt (0; −5) liegt …", options: ["auf der x-Achse", "auf der y-Achse", "im IV. Quadranten"], answer: 1, explain: "x = 0: Der Punkt liegt auf der y-Achse." },
      { type: "mc", q: "In welchem Quadranten haben die Punkte x > 0 und y < 0?", options: ["I", "II", "III", "IV"], answer: 3, explain: "(+; −): IV. Quadrant." },
      { type: "num", q: "Abstand zwischen A(1; 1) und B(4; 5)?", answer: 5, explain: "√(3² + 4²) = √25 = 5." },
      { type: "mc", q: "Mittelpunkt von A(−2; 4) und B(6; 0)?", options: ["(2; 2)", "(4; 4)", "(2; 4)"], answer: 0, explain: "((−2 + 6)/2; (4 + 0)/2) = (2; 2)." },
      { type: "num", q: "Steigung der Geraden durch A(1; 3) und B(3; 11)?", answer: 4, explain: "m = (11 − 3)/(3 − 1) = 8/2 = 4." },
      { type: "tf", q: "Der Graph von y = 5x geht durch den Ursprung.", answer: true, explain: "Für x = 0 ist y = 0: direkte Proportionalität." },
      { type: "mc", q: "y = 24/x stellt dar …", options: ["eine direkte Proportionalität", "eine indirekte Proportionalität", "eine Parabel"], answer: 1, explain: "xy = 24 konstant: indirekte Proportionalität (Hyperbel)." },
      { type: "mc", q: "Welche Gerade steht senkrecht auf y = 3x?", options: ["y = 3x + 1", "y = −⅓x", "y = −3x"], answer: 1, explain: "3 · (−⅓) = −1." },
      { type: "num", q: "Für welchen Wert von x schneidet die Gerade y = 2x − 8 die x-Achse?", answer: 4, explain: "y = 0 → 2x = 8 → x = 4." },
      { type: "num", q: "Flächeninhalt des Dreiecks mit den Eckpunkten O(0; 0), A(6; 0), B(0; 4)?", answer: 12, explain: "Rechtwinkliges Dreieck mit den Katheten 6 und 4: 6·4/2 = 12." },
      { type: "text", q: "Wie heißt die erste Koordinate eines Punktes?", answer: ["abszisse", "die abszisse", "ascissa", "l'ascissa"], explain: "Abszisse (x); die zweite ist die Ordinate (y)." }
    ],
    gen: [["pythagoras", 2]]
  }
});
