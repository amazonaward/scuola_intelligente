TOPIC('de', {
  id: "p5-mat-perimetro-area",
  title: "Umfang und Flächeninhalt",
  intro: "Wie viel Band braucht man, um den Rand eines Bildes zu verzieren? Wie viele Fliesen braucht man, um den Boden zu bedecken? Um zu antworten, braucht man zwei verschiedene Maße: den <b>Umfang</b> und den <b>Flächeninhalt</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Umfang und Flächeninhalt: Was ist der Unterschied?",
      html: `<p>Jede ebene Figur hat zwei wichtige Maße:</p>
<ul>
<li>der <b>Umfang</b> ist die <b>Länge des Randes</b> der Figur. Er wird in Längeneinheiten gemessen: <b>cm, m, km …</b> Er wird mit <b>U</b> bezeichnet.</li>
<li>der <b>Flächeninhalt</b> ist das <b>Maß der Fläche</b>, also wie viel Platz die Figur „innerhalb“ des Randes einnimmt. Er wird in Quadrateinheiten gemessen: <b>cm², m², km² …</b> Er wird mit <b>A</b> bezeichnet.</li>
</ul>
<p>Stell dir ein Fußballfeld vor: Der <b>Umfang</b> ist die Länge der weißen Linie, die es umgibt; der <b>Flächeninhalt</b> ist der ganze Rasen, der gemäht werden muss.</p>
<p><b>1 cm²</b> (ein Quadratzentimeter) ist der Flächeninhalt eines Quadrats mit der Seitenlänge 1 cm. Einen Flächeninhalt zu berechnen heißt zählen, wie viele dieser Quadrätchen „in die Figur passen“.</p>`
    },
    {
      type: "svg",
      title: "Rand und Fläche",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#ffffff"/>
<text x="150" y="30" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">UMFANG = Rand</text>
<rect x="50" y="60" width="200" height="120" fill="#fff7ed" stroke="#dc2626" stroke-width="6"/>
<text x="150" y="55" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="150" y="200" font-size="15" text-anchor="middle" fill="#dc2626">5 cm</text>
<text x="40" y="125" font-size="15" text-anchor="end" fill="#dc2626">3 cm</text>
<text x="260" y="125" font-size="15" fill="#dc2626">3 cm</text>
<text x="150" y="235" font-size="16" text-anchor="middle" fill="#111">U = 5+3+5+3 = 16 cm</text>
<text x="450" y="30" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">FLÄCHE = Inhalt</text>
<g fill="#bfdbfe" stroke="#2563eb" stroke-width="2">
<rect x="350" y="60" width="40" height="40"/><rect x="390" y="60" width="40" height="40"/><rect x="430" y="60" width="40" height="40"/><rect x="470" y="60" width="40" height="40"/><rect x="510" y="60" width="40" height="40"/>
<rect x="350" y="100" width="40" height="40"/><rect x="390" y="100" width="40" height="40"/><rect x="430" y="100" width="40" height="40"/><rect x="470" y="100" width="40" height="40"/><rect x="510" y="100" width="40" height="40"/>
<rect x="350" y="140" width="40" height="40"/><rect x="390" y="140" width="40" height="40"/><rect x="430" y="140" width="40" height="40"/><rect x="470" y="140" width="40" height="40"/><rect x="510" y="140" width="40" height="40"/>
</g>
<text x="450" y="235" font-size="16" text-anchor="middle" fill="#111">A = 5 · 3 = 15 cm²</text>
</svg>`,
      caption: "Dasselbe Rechteck: Links messen wir den Rand (Umfang), rechts zählen wir die 1-cm²-Kästchen (Flächeninhalt)."
    },
    {
      type: "text",
      title: "Wie man den Umfang berechnet",
      html: `<p>Um den Umfang eines <b>Vielecks</b> zu berechnen, genügt es, <b>die Längen aller Seiten zu addieren</b>.</p>
<p>Für einige Figuren gibt es Abkürzungen:</p>
<table>
<tr><th>Figur</th><th>Umfang</th></tr>
<tr><td>Quadrat (4 gleiche Seiten)</td><td>U = Seite · 4</td></tr>
<tr><td>Rechteck</td><td>U = (a + b) · 2</td></tr>
<tr><td>Gleichseitiges Dreieck (3 gleiche Seiten)</td><td>U = Seite · 3</td></tr>
<tr><td>Raute (4 gleiche Seiten)</td><td>U = Seite · 4</td></tr>
<tr><td>Regelmäßiges Vieleck mit n Seiten</td><td>U = Seite · n</td></tr>
</table>
<p><b>Achtung:</b> Vor dem Addieren müssen alle Maße dieselbe <b>Einheit</b> haben (zum Beispiel alle in cm).</p>`
    },
    {
      type: "svg",
      title: "Die Flächenformeln",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#ffffff"/>
<g font-size="15" fill="#111">
<rect x="20" y="30" width="80" height="80" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<text x="60" y="130" text-anchor="middle" font-weight="bold">Quadrat</text>
<text x="60" y="150" text-anchor="middle">A = a · a</text>
<rect x="140" y="45" width="130" height="65" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="205" y="130" text-anchor="middle" font-weight="bold">Rechteck</text>
<text x="205" y="150" text-anchor="middle">A = a · b</text>
<polygon points="320,110 350,40 450,40 420,110" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<line x1="350" y1="40" x2="350" y2="110" stroke="#1d4ed8" stroke-dasharray="5 4" stroke-width="2"/>
<text x="356" y="85" font-size="13">h</text>
<text x="385" y="130" text-anchor="middle" font-weight="bold">Parallelogramm</text>
<text x="385" y="150" text-anchor="middle">A = g · h</text>
<polygon points="500,110 560,30 620,110" fill="#fbcfe8" stroke="#be185d" stroke-width="3"/>
<line x1="560" y1="30" x2="560" y2="110" stroke="#be185d" stroke-dasharray="5 4" stroke-width="2"/>
<text x="566" y="80" font-size="13">h</text>
<text x="560" y="130" text-anchor="middle" font-weight="bold">Dreieck</text>
<text x="560" y="150" text-anchor="middle">A = g · h : 2</text>
<polygon points="110,180 160,230 110,280 60,230" fill="#ddd6fe" stroke="#6d28d9" stroke-width="3"/>
<line x1="60" y1="230" x2="160" y2="230" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<line x1="110" y1="180" x2="110" y2="280" stroke="#6d28d9" stroke-dasharray="5 4" stroke-width="2"/>
<text x="250" y="220" font-weight="bold">Raute</text>
<text x="250" y="240">A = e · f : 2</text>
<text x="250" y="260" font-size="13">(e und f = Diagonalen)</text>
<polygon points="420,280 450,190 540,190 600,280" fill="#fed7aa" stroke="#c2410c" stroke-width="3"/>
<line x1="450" y1="190" x2="450" y2="280" stroke="#c2410c" stroke-dasharray="5 4" stroke-width="2"/>
<text x="510" y="235" text-anchor="middle" font-weight="bold">Trapez</text>
<text x="510" y="255" text-anchor="middle">A = (a + c) · h : 2</text>
</g>
</svg>`,
      caption: "g = Grundseite, h = Höhe, a, b, c = Seiten. Die Höhe (gestrichelt) steht immer senkrecht auf der Grundseite."
    },
    {
      type: "text",
      title: "Warum funktionieren die Formeln?",
      html: `<p>Die Formeln sind nicht magisch: Man versteht sie mit ein bisschen Schere!</p>
<ul>
<li><b>Rechteck</b>: Wenn die Länge 5 cm und die Breite 3 cm ist, gibt es 3 Reihen zu je 5 Kästchen: 5 · 3 = 15 cm².</li>
<li><b>Parallelogramm</b>: Schneide das Dreieck links ab und schiebe es nach rechts: Es wird ein Rechteck mit derselben Grundseite und derselben Höhe. Also A = g · h.</li>
<li><b>Dreieck</b>: Zwei gleiche Dreiecke zusammen bilden ein Parallelogramm. Also ist der Flächeninhalt des Dreiecks die <b>Hälfte</b>: A = g · h : 2.</li>
<li><b>Raute</b>: Sie ist die Hälfte des Rechtecks, dessen Seiten die beiden Diagonalen sind: A = e · f : 2.</li>
<li><b>Trapez</b>: Zwei gleiche Trapeze, eines umgedreht, bilden ein Parallelogramm mit der Grundseite a + c: A = (a + c) · h : 2.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Labor: Verändere das Rechteck",
      widget: "areaGrid",
      options: { w: 5, h: 3, max: 12 },
      caption: "Bewege die Regler und beobachte, wie sich Umfang und Flächeninhalt ändern. Findest du zwei Rechtecke mit demselben Flächeninhalt, aber verschiedenem Umfang?"
    },
    {
      type: "alternatives",
      title: "Andere Wege, Umfang und Flächeninhalt zu verstehen",
      intro: "Die Formeln wollen nicht in den Kopf? Kein Problem: Hier sind andere Wege, wirklich zu verstehen, was du berechnest.",
      tabs: [
        {
          label: "🐜 Die Ameise und der Maler",
          html: "<p>Stell dir eine Figur vor, die auf den Boden gezeichnet ist.</p><ul><li>Eine <b>Ameise</b> läuft am Rand entlang, bis sie wieder am Ausgangspunkt ist: Der Weg, den sie zurücklegt, ist der <b>Umfang</b>. Er wird in cm, m … gemessen (eine Länge).</li><li>Ein <b>Maler</b> muss das ganze Innere anstreichen: Die Menge Boden, die gestrichen werden muss, ist der <b>Flächeninhalt</b>. Er wird in cm², m² … gemessen (Quadrätchen).</li></ul><p>Deshalb kann man Umfang und Flächeninhalt nicht vergleichen: Das eine ist ein Weg, das andere eine Fläche!</p>"
        },
        {
          label: "🟦 Kästchen zählen",
          html: "<p>Benutze die Regler: Jedes Kästchen ist 1 cm². Zähle die Kästchen einer Reihe, dann wie viele Reihen es gibt. Reihen · Kästchen pro Reihe = Flächeninhalt. Du merkst, dass es genau <b>Länge · Breite</b> ist! Dann gehe um den Rand herum und zähle die Kästchenseiten: Das ist der Umfang.</p>",
          widget: "areaGrid",
          options: { w: 6, h: 4, max: 12 }
        },
        {
          label: "🧊 Mit 3D-Würfelchen",
          html: "<p>Lege die Würfelchen in ordentliche Reihen: 5 Würfelchen pro Reihe, 3 Reihen. Wie viele sind es? 5 · 3 = 15. Schau sie dir von oben an: Ihr „Fußabdruck“ ist ein Rechteck mit dem Flächeninhalt von 15 Kästchen. Ändere die Zahlen mit den Reglern und beobachte, wie das Rechteck wächst.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 3 }
        },
        {
          label: "✂️ Ausschneiden und neu zusammensetzen",
          html: "<p>Der Trick der Mathematiker: <b>eine Figur in eine andere verwandeln, die wir schon messen können</b>, ohne Papier zu verlieren oder hinzuzufügen.</p><ul><li><b>Parallelogramm</b>: Schneide das Dreieck links ab und schiebe es nach rechts: Es wird ein Rechteck mit derselben Grundseite und derselben Höhe. Fläche = g · h.</li><li><b>Dreieck</b>: Zwei gleiche Dreiecke zusammen bilden ein Parallelogramm. Also ist das Dreieck die Hälfte: Fläche = g · h : 2.</li><li><b>Trapez</b>: Zwei gleiche Trapeze, eines umgedreht, bilden ein Parallelogramm mit der Grundseite (a + c). Fläche = (a + c) · h : 2.</li></ul><p>Probiere es wirklich mit einem Blatt und einer Schere aus!</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><polygon points="40,200 100,80 260,80 200,200" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><line x1="100" y1="80" x2="100" y2="200" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4"/><polygon points="40,200 100,80 100,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="150" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Parallelogramm</text><text x="300" y="150" font-size="40" text-anchor="middle" fill="#334155">→</text><rect x="360" y="80" width="160" height="120" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/><polygon points="460,200 520,80 520,200" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><text x="440" y="235" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Rechteck: g · h</text><text x="130" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">ich schneide hier das rote Dreieck ab …</text><text x="470" y="40" font-size="16" text-anchor="middle" fill="#b91c1c">… und schiebe es hierher</text></svg>`
        },
        {
          label: "🏺 Die ägyptischen Landvermesser",
          html: "<p>Jedes Jahr trat der <b>Nil</b> über die Ufer und löschte die Grenzen der Felder aus. Die ägyptischen „Seilspanner“ (Landvermesser) mussten die Grundstücke neu vermessen, um zu wissen, wie viel Steuern jeder Bauer zahlen musste.</p><p>Sie benutzten ein <b>Seil mit 12 Knoten</b> im gleichen Abstand: Spannte man es zu einem Dreieck mit Seiten von 3, 4 und 5 Abschnitten, erhielt man einen perfekten <b>rechten Winkel</b>, und von dort aus zeichneten sie Rechtecke. Unregelmäßige Felder teilten sie dann in Rechtecke und Dreiecke, genau wie wir es tun!</p><p>Das Wort <b>Geometrie</b> kommt aus dem Griechischen und bedeutet genau „Erdmessung“.</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#fef3c7"/><polygon points="180,210 315,210 315,30" fill="none" stroke="#92400e" stroke-width="5"/><g fill="#78350f"><circle cx="180" cy="210" r="7"/><circle cx="225" cy="210" r="7"/><circle cx="270" cy="210" r="7"/><circle cx="315" cy="210" r="7"/><circle cx="315" cy="165" r="7"/><circle cx="315" cy="120" r="7"/><circle cx="315" cy="75" r="7"/><circle cx="315" cy="30" r="7"/><circle cx="288" cy="66" r="7"/><circle cx="261" cy="102" r="7"/><circle cx="234" cy="138" r="7"/><circle cx="207" cy="174" r="7"/></g><rect x="297" y="192" width="18" height="18" fill="none" stroke="#dc2626" stroke-width="3"/><text x="248" y="234" font-size="18" text-anchor="middle" fill="#78350f" font-weight="bold">3 Abschnitte</text><text x="330" y="125" font-size="18" fill="#78350f" font-weight="bold">4 Abschnitte</text><text x="225" y="95" font-size="18" text-anchor="end" fill="#78350f" font-weight="bold">5 Abschnitte</text><text x="470" y="205" font-size="16" text-anchor="middle" fill="#dc2626">rechter Winkel!</text><text x="470" y="60" font-size="16" text-anchor="middle" fill="#78350f">12 Knoten insgesamt</text></svg>`
        },
        {
          label: "📐 Die Formel von Heron",
          html: "<p>Und wenn du von einem Dreieck nur die <b>drei Seiten</b> kennst und nicht die Höhe? Heron von Alexandria (1. Jahrhundert n. Chr.) fand eine besondere Formel:</p><ol><li>berechne den halben Umfang: s = (a + b + c) : 2</li><li>Fläche = √( s · (s − a) · (s − b) · (s − c) )</li></ol><p><b>Beispiel</b>: Seiten 3, 4 und 5 cm → s = 6; Fläche = √(6 · 3 · 2 · 1) = √36 = <b>6 cm²</b>. Kontrolliere mit der üblichen Formel: Das Dreieck ist rechtwinklig, Grundseite 3 und Höhe 4 → 3 · 4 : 2 = 6 cm². Dasselbe Ergebnis auf zwei verschiedenen Wegen!</p>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Gleicher Flächeninhalt, anderer Umfang!",
      html: `<p>Ein Rechteck 6 × 2 und ein Quadrat 4 × 4 haben <b>gleiche</b> Umfänge (16 cm), aber verschiedene Flächeninhalte: 12 cm² und 16 cm²!</p>
<p>Und umgekehrt: Ein Rechteck 12 × 1 und eines 4 × 3 haben den <b>gleichen Flächeninhalt</b> (12 cm²), aber Umfänge von 26 cm und 14 cm.</p>
<p>Bei gleichem Umfang hat das Rechteck mit dem größten Flächeninhalt immer die Form des <b>Quadrats</b>. Deshalb bauen viele Bienen sechseckige Waben, und die Bauern suchten früher möglichst „quadratische“ Felder: weniger Zaun für mehr Land!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Umfang",
      questions: [
        { type: "num", q: "Ein Quadrat hat die Seitenlänge 7 cm. Wie groß ist der Umfang?", answer: 28, tol: 0, unit: "cm", explain: "U = 7 · 4 = 28 cm." },
        { type: "num", q: "Ein Rechteck hat die Länge 9 cm und die Breite 4 cm. Wie groß ist der Umfang?", answer: 26, tol: 0, unit: "cm", explain: "U = (9 + 4) · 2 = 26 cm." },
        { type: "mc", q: "In welcher Einheit wird der Umfang gemessen?", options: ["cm²", "cm", "kg", "Liter"], answer: 1, explain: "Der Umfang ist eine Länge: Er wird in cm, m, km … gemessen." }
      ]
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Zaun um den Gemüsegarten",
      html: `<p>Opa hat einen rechteckigen Gemüsegarten, <b>12 m</b> lang und <b>8 m</b> breit. Er will ihn mit einem Zaun umgeben, der <b>3 € pro Meter</b> kostet.</p>
<ol>
<li>Wie viel Zaun braucht er? Das ist der <b>Umfang</b>: U = (12 + 8) · 2 = <b>40 m</b>.</li>
<li>Wie viel gibt er aus? 40 · 3 = <b>120 €</b>.</li>
<li>Er will auch das ganze Land besäen: Wie groß ist die Fläche? Das ist der <b>Flächeninhalt</b>: A = 12 · 8 = <b>96 m²</b>.</li>
<li>Ein Tütchen Samen reicht für 8 m²: Man braucht 96 : 8 = <b>12 Tütchen</b>.</li>
</ol>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Fliesen im Kinderzimmer",
      html: `<p>Der Boden des Kinderzimmers ist ein Rechteck von <b>4 m · 3 m</b>. Wir wollen ihn mit quadratischen Fliesen mit <b>50 cm</b> Seitenlänge bedecken.</p>
<ol>
<li>Flächeninhalt des Bodens: 4 · 3 = <b>12 m²</b>.</li>
<li>Eine Fliese: 0,5 m · 0,5 m = <b>0,25 m²</b>.</li>
<li>Nötige Fliesen: 12 : 0,25 = <b>48 Fliesen</b>.</li>
</ol>
<p>Kontrolle mit einer anderen Methode: In 4 m passen 8 Fliesen, in 3 m passen 6. 8 · 6 = 48. ✔️</p>`
    },
    {
      type: "remember",
      title: "Die Einheiten der Flächenmaße",
      html: `<p>Die Flächenmaße „springen“ in <b>Hunderterschritten</b>, weil ein großes Quadrat 10 Reihen zu je 10 kleinen Quadraten enthält:</p>
<p><b>1 m² = 100 dm² = 10.000 cm²</b></p>
<p><b>1 dm² = 100 cm²</b> &nbsp;&nbsp; <b>1 cm² = 100 mm²</b></p>
<p>Für Grundstücke benutzt man auch den <b>Hektar</b> (1 ha = 10.000 m², etwa anderthalb Fußballfelder) und den <b>km²</b> (1 km² = 1.000.000 m²).</p>`
    },
    {
      type: "curiosity",
      title: "Wie groß ist Italien?",
      html: `<p>Italien hat eine Fläche von etwa <b>302.000 km²</b>. Die größte Region ist <b>Sizilien</b> (etwa 25.800 km²), die kleinste ist das <b>Aostatal</b> (etwa 3.260 km²).</p>
<p>Der kleinste Staat der Welt, die <b>Vatikanstadt</b>, misst nur 0,44 km²: weniger als 62 Fußballfelder!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Flächeninhalt",
      questions: [
        { type: "num", q: "Flächeninhalt eines Rechtecks mit Länge 8 cm und Breite 5 cm?", answer: 40, tol: 0, unit: "cm²", explain: "A = 8 · 5 = 40 cm²." },
        { type: "num", q: "Flächeninhalt eines Dreiecks mit Grundseite 10 cm und Höhe 6 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = 10 · 6 : 2 = 30 cm²." },
        { type: "tf", q: "Zwei Figuren mit gleichem Umfang haben immer den gleichen Flächeninhalt.", answer: false, explain: "Nein: Ein Rechteck 6 × 2 und ein Quadrat 4 × 4 haben denselben Umfang (16), aber verschiedene Flächeninhalte (12 und 16)." },
        { type: "num", q: "Wie viele cm² sind 1 dm²?", answer: 100, tol: 0, unit: "cm²", explain: "1 dm² = 10 cm · 10 cm = 100 cm²." }
      ]
    },
    {
      type: "3d",
      title: "Von der Fläche zum Volumen: Wir fügen Schichten hinzu",
      scene: "blocks",
      options: { mode: "volume", a: 4, b: 3, c: 2 },
      caption: "Ein Rechteck aus 4 · 3 = 12 Kästchen ist die Grundfläche. Wenn du 2 Schichten Würfelchen stapelst, erhältst du 12 · 2 = 24 Würfelchen: Das ist das Volumen, das du in der weiterführenden Schule lernen wirst. Die Fläche zählt Kästchen, das Volumen zählt Würfelchen."
    },
    {
      type: "conceptMap",
      title: "Landkarte: von den Maßeinheiten zu den Formeln",
      nodes: [
        { id: "unita", label: "Maßeinheiten", x: 50, y: 6, color: "#64748b", html: "Zum Messen braucht man ein für alle gleiches Maß: den Meter (m) und seine Vielfachen und Teile.", why: "Früher hatte jede Stadt ihre eigenen Maße (Fuß, Elle, Handbreit …) und es gab Streit im Handel. Während der Französischen Revolution (1791–1799) wurde der Meter erfunden, verbunden mit dem Maß der Erde, und seitdem hat sich das metrische System in fast der ganzen Welt verbreitet." },
        { id: "lunghezza", label: "Länge (cm, m)", x: 22, y: 26, color: "#3b82f6", html: "Maß einer Linie: eine Seite, ein Rand, eine Straße.", why: "Wir zählen, wie oft die Einheit (zum Beispiel 1 cm) entlang der Linie Platz hat." },
        { id: "quadratino", label: "Einheitsquadrat (cm²)", x: 78, y: 26, color: "#f59e0b", html: "Ein Quadrat mit der Seitenlänge 1 cm: Sein Flächeninhalt ist 1 cm².", why: "Um eine Fläche zu messen, brauchen wir ein Stückchen Fläche als Maß. Man wählt das Quadrat, weil es sich mit anderen Quadraten ohne Lücken zusammenfügt und die ganze Ebene bedeckt." },
        { id: "perimetro", label: "Umfang", x: 22, y: 48, color: "#2563eb", html: "Summe der Längen aller Seiten.", why: "Es ist die Länge des Randes: Man muss nur die Stücke addieren. Bei regelmäßigen Vielecken sind die Seiten gleich, also Seite · Anzahl der Seiten." },
        { id: "rettangolo", label: "Fläche des Rechtecks: a · b", x: 78, y: 48, color: "#ea580c", html: "Länge mal Breite.", why: "Im Rechteck ordnen sich die Quadrätchen in Reihen und Spalten an: Es gibt b Reihen mit a Quadrätchen, also a · b Quadrätchen insgesamt. Das ist die Multiplikation als Anordnung!" },
        { id: "parall", label: "Parallelogramm: g · h", x: 55, y: 68, color: "#16a34a", html: "Dieselbe Formel wie beim Rechteck.", why: "Wenn man ein Dreieck abschneidet und verschiebt, erhält man ein Rechteck mit derselben Grundseite und derselben Höhe: Der Flächeninhalt ändert sich nicht, weil nichts weggenommen oder hinzugefügt wird (Zerlegungsgleichheit)." },
        { id: "triangolo", label: "Dreieck: g · h : 2", x: 85, y: 76, color: "#dc2626", html: "Grundseite mal Höhe geteilt durch 2.", why: "Zwei gleiche Dreiecke bilden ein Parallelogramm: Das Dreieck ist seine Hälfte." },
        { id: "trapezio", label: "Trapez: (a + c) · h : 2", x: 30, y: 82, color: "#9333ea", html: "Summe der Grundseiten mal Höhe geteilt durch 2.", why: "Zwei gleiche Trapeze, eines umgedreht, bilden ein Parallelogramm mit der Grundseite a + c: Das Trapez ist die Hälfte." },
        { id: "rombo", label: "Raute: e · f : 2", x: 60, y: 94, color: "#0891b2", html: "Große Diagonale mal kleine Diagonale geteilt durch 2.", why: "Die Raute liegt in einem Rechteck, dessen Seiten so lang sind wie die Diagonalen, und nimmt genau die Hälfte davon ein (die 4 kleinen Dreiecke außen sind gleich den 4 innen)." }
      ],
      edges: [ ["unita", "lunghezza", "für die Linien"], ["unita", "quadratino", "für die Flächen"], ["lunghezza", "perimetro", "werden addiert"], ["quadratino", "rettangolo", "werden in Reihen gezählt"], ["rettangolo", "parall", "Ausschneiden"], ["parall", "triangolo", "Hälfte"], ["parall", "trapezio", "Hälfte von zwei Trapezen"], ["rettangolo", "rombo", "Hälfte"] ]
    }
  ],
  glossary: [
    { t: "Umfang", d: "Länge des Randes einer ebenen Figur." },
    { t: "Flächeninhalt", d: "Maß der Fläche, die von einer Figur eingeschlossen wird." },
    { t: "Vieleck", d: "Geschlossene ebene Figur, die von Strecken (Seiten) begrenzt wird." },
    { t: "Grundseite", d: "Die Seite, auf der die Figur „steht“." },
    { t: "Höhe", d: "Strecke, die senkrecht zur Grundseite bis zur gegenüberliegenden Seite oder Ecke reicht." },
    { t: "Diagonale", d: "Strecke, die zwei nicht benachbarte Ecken eines Vielecks verbindet." },
    { t: "Quadratmeter (m²)", d: "Flächeninhalt eines Quadrats mit der Seitenlänge 1 Meter." },
    { t: "Flächengleich", d: "Figuren, die denselben Flächeninhalt haben, auch wenn sie verschiedene Formen haben." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Der Umfang ist …", options: ["die Fläche der Figur", "die Länge des Randes", "die Anzahl der Seiten", "die Höhe der Figur"], answer: 1, explain: "Der Umfang ist die Länge des Randes." },
      { type: "mc", q: "Wie lautet die Formel für den Flächeninhalt des Dreiecks?", options: ["g · h", "g + h", "g · h : 2", "a · 3"], answer: 2, explain: "Das Dreieck ist die Hälfte eines Parallelogramms: A = g · h : 2." },
      { type: "num", q: "Umfang eines gleichseitigen Dreiecks mit der Seite 9 cm?", answer: 27, tol: 0, unit: "cm", explain: "U = 9 · 3 = 27 cm." },
      { type: "num", q: "Flächeninhalt eines Quadrats mit der Seite 6 m?", answer: 36, tol: 0, unit: "m²", explain: "A = 6 · 6 = 36 m²." },
      { type: "num", q: "Flächeninhalt einer Raute mit den Diagonalen 10 cm und 6 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = e · f : 2 = 10 · 6 : 2 = 30 cm²." },
      { type: "num", q: "Flächeninhalt eines Trapezes mit den Grundseiten 8 cm und 4 cm und der Höhe 5 cm?", answer: 30, tol: 0, unit: "cm²", explain: "A = (8 + 4) · 5 : 2 = 30 cm²." },
      { type: "tf", q: "Der Flächeninhalt wird in Quadrateinheiten gemessen, wie cm² oder m².", answer: true, explain: "Der Flächeninhalt misst eine Fläche: Man benutzt Quadrateinheiten." },
      { type: "num", q: "Ein Rechteck hat den Flächeninhalt 24 cm² und die Länge 6 cm. Wie groß ist die Breite?", answer: 4, tol: 0, unit: "cm", explain: "Umkehrformel: b = A : a = 24 : 6 = 4 cm." },
      { type: "num", q: "Ein Quadrat hat den Umfang 36 cm. Wie lang ist die Seite?", answer: 9, tol: 0, unit: "cm", explain: "Umkehrformel: a = U : 4 = 36 : 4 = 9 cm." },
      { type: "mc", q: "Welches Rechteck hat den größten Flächeninhalt?", options: ["10 × 1", "5 × 2", "4 × 3", "6 × 1"], answer: 2, explain: "Flächeninhalte: 10, 10, 12, 6. Das 4 × 3 gewinnt mit 12." },
      { type: "num", q: "Wie viele m² sind ein Hektar?", answer: 10000, tol: 0, unit: "m²", explain: "1 Hektar = 10.000 m² (ein Quadrat von 100 m × 100 m)." }
    ],
    gen: [["perimRect", 1], ["areaRect", 1], ["areaTri", 1]]
  }
});
