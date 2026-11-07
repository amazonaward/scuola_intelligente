TOPIC('de', {
  id: "p3-mat-misure-lunghezza",
  title: "Längenmaße",
  intro: "Wie lang ist dein Tisch? Und wie groß bist du? 📏 Um das zu beantworten, benutzen wir den <b>Meter</b> und seine kleineren „Kinder“: <b>Dezimeter, Zentimeter und Millimeter</b>. Wir lernen, zu messen und von einer Einheit in die andere umzurechnen.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Warum man eine Maßeinheit braucht, die für alle gleich ist",
      html: `<p><b>Messen</b> heißt herausfinden, <b>wie oft</b> eine Maßeinheit in eine Länge passt.</p>
<p>Versuch, den Tisch mit <b>Handspannen</b> ✋ zu messen: Du kommst auf 6 Spannen, die Lehrerin auf 4! Wer hat recht? Beide … aber eure Hände sind verschieden.</p>
<p>Darum braucht man eine Einheit, die <b>für alle gleich</b> ist, auf der ganzen Welt: den <b>Meter</b> (Zeichen <b>m</b>). Man schreibt ihn ohne Punkt: 3 m, nicht 3 m. oder 3 mtr!</p>`
    },
    {
      type: "text",
      title: "Der Meter und seine kleineren Einheiten",
      html: `<p>Der Meter ist ein bisschen zu lang, um einen Bleistift zu messen. Also teilen wir ihn in kleinere Teile, die <b>Untereinheiten</b>:</p>
<ul>
<li>Teilt man den Meter in <b>10</b> gleiche Teile → <b>Dezimeter</b> (<b>dm</b>), ungefähr so breit wie deine Hand;</li>
<li>teilt man den Dezimeter in <b>10</b> Teile → <b>Zentimeter</b> (<b>cm</b>), ungefähr so breit wie deine kleine Fingerspitze;</li>
<li>teilt man den Zentimeter in <b>10</b> Teile → <b>Millimeter</b> (<b>mm</b>), so dick wie eine 1-Cent-Münze (sie ist etwa 1,7 mm dick).</li>
</ul>
<p>Also: <b>1 m = 10 dm = 100 cm = 1000 mm</b>.</p>
<p>Die Namen kommen aus dem Lateinischen: <i>deci</i> = 10, <i>centi</i> = 100, <i>milli</i> = 1000. Ein Dezimeter ist <b>der zehnte Teil</b> des Meters, ein Zentimeter <b>der hundertste</b>, ein Millimeter <b>der tausendste</b>.</p>`
    },
    {
      type: "svg",
      title: "Innerhalb eines Meters",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fefce8"/>
<rect x="40" y="40" width="500" height="50" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<text x="290" y="75" font-size="26" fill="#78350f" text-anchor="middle" font-weight="bold">1 Meter (m)</text>
<g stroke="#1e3a8a" stroke-width="3">
<rect x="40" y="120" width="50" height="40" fill="#93c5fd"/><rect x="90" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="140" y="120" width="50" height="40" fill="#93c5fd"/><rect x="190" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="240" y="120" width="50" height="40" fill="#93c5fd"/>
<rect x="290" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="340" y="120" width="50" height="40" fill="#93c5fd"/><rect x="390" y="120" width="50" height="40" fill="#bfdbfe"/><rect x="440" y="120" width="50" height="40" fill="#93c5fd"/><rect x="490" y="120" width="50" height="40" fill="#bfdbfe"/>
</g>
<text x="565" y="148" font-size="20" fill="#1e3a8a" font-weight="bold">10 dm</text>
<line x1="40" y1="160" x2="60" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="90" y1="160" x2="540" y2="215" stroke="#6b7280" stroke-width="2" stroke-dasharray="5 4"/>
<g stroke="#166534" stroke-width="2" fill="#bbf7d0">
<rect x="60" y="215" width="48" height="40"/><rect x="108" y="215" width="48" height="40"/><rect x="156" y="215" width="48" height="40"/><rect x="204" y="215" width="48" height="40"/><rect x="252" y="215" width="48" height="40"/>
<rect x="300" y="215" width="48" height="40"/><rect x="348" y="215" width="48" height="40"/><rect x="396" y="215" width="48" height="40"/><rect x="444" y="215" width="48" height="40"/><rect x="492" y="215" width="48" height="40"/>
</g>
<text x="300" y="285" font-size="20" fill="#166534" text-anchor="middle" font-weight="bold">1 dm = 10 cm (vergrößert)</text>
</svg>`,
      caption: "Jeder Schritt teilt in 10 gleiche Teile: Meter → Dezimeter → Zentimeter → Millimeter."
    },
    {
      type: "text",
      title: "Die Tabelle und die 10er-Regel",
      html: `<table>
<tr><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr>
<tr><td>Meter</td><td>Dezimeter</td><td>Zentimeter</td><td>Millimeter</td></tr>
<tr><td>1</td><td>10</td><td>100</td><td>1000</td></tr>
</table>
<p>Jede Einheit ist <b>10-mal</b> größer als die rechts von ihr. Also:</p>
<ul>
<li>von einer <b>größeren</b> zu einer <b>kleineren</b> Einheit (nach rechts) → <b>× 10</b> für jeden Schritt: 3 m = 30 dm = 300 cm.</li>
<li>von einer <b>kleineren</b> zu einer <b>größeren</b> Einheit (nach links) → <b>: 10</b> für jeden Schritt: 500 cm = 50 dm = 5 m.</li>
</ul>
<p>💡 Überleg so: <b>kleinere Einheiten → man braucht mehr Stücke → die Zahl wird größer</b>.</p>`
    },
    {
      type: "remember",
      title: "Und die langen Strecken? Die Vielfachen",
      html: `<p>Um Straßen und Reisen zu messen, ist der Meter zu klein. Man benutzt die <b>Vielfachen</b>:</p>
<ul>
<li><b>Dekameter</b> (dam) = 10 m</li>
<li><b>Hektometer</b> (hm) = 100 m</li>
<li><b>Kilometer</b> (km) = <b>1000 m</b> 🚗</li>
</ul>
<p>Am häufigsten braucht man den <b>Kilometer</b>: Von München nach Nürnberg sind es etwa 170 km Autobahn. In der 3. Klasse konzentrieren wir uns auf <b>m, dm, cm, mm</b>.</p>`
    },
    {
      type: "widget",
      title: "Ordne gleiche Maße zu",
      widget: "match",
      options: {
        pairs: [
          ["1 m", "100 cm"],
          ["1 dm", "10 cm"],
          ["1 cm", "10 mm"],
          ["5 dm", "50 cm"],
          ["2 m", "20 dm"],
          ["30 mm", "3 cm"]
        ]
      },
      caption: "Verbinde jedes Maß mit dem gleichen Maß in einer anderen Einheit."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Einheiten",
      questions: [
        { type: "num", q: "Wie viele Zentimeter sind 1 Meter?", answer: 100, unit: "cm", explain: "1 m = 10 dm = 100 cm." },
        { type: "mc", q: "Welche Einheit benutzt du, um die Länge einer Ameise zu messen?", options: ["Meter", "Millimeter", "Kilometer"], answer: 1, explain: "Eine Ameise ist nur wenige Millimeter lang." },
        { type: "num", q: "Wie viele cm sind 40 mm?", answer: 4, unit: "cm", explain: "Von mm zu cm rechnet man : 10 → 40 : 10 = 4 cm." }
      ]
    },
    {
      type: "text",
      title: "Maße mit mehreren Einheiten: die Stellentafel",
      html: `<p>Manchmal schreibt man ein Maß mit mehreren Einheiten: <b>1 m 3 dm 5 cm</b>. Das ist wie der Stellenwert bei Zahlen!</p>
<table>
<tr><th>m</th><th>dm</th><th>cm</th></tr>
<tr><td>1</td><td>3</td><td>5</td></tr>
</table>
<p>Liest man die ganze Zeile bis zu den Zentimetern: <b>135 cm</b>. Genau wie 1 Hunderter, 3 Zehner und 5 Einer 135 ergeben!</p>
<p>Umgekehrt: <b>247 cm</b> = 2 m 4 dm 7 cm.</p>`
    },
    {
      type: "3d",
      title: "Zentimeter als Würfelchen",
      scene: "blocks",
      options: { mode: "base10", value: 135 },
      caption: "Wenn jedes Würfelchen 1 cm ist: Eine Stange mit 10 ist 1 dm und eine Platte mit 100 ist 1 m (in einer Reihe gelegt). 135 cm = 1 m 3 dm 5 cm."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wie groß bist du?",
      html: `<p>Luca stellt sich an die Tür, um sich zu messen: Er ist <b>1 m und 32 cm</b> groß.</p>
<ul>
<li>In Zentimetern: 100 + 32 = <b>132 cm</b>.</li>
<li>Seine Schwester Emma ist <b>118 cm</b> groß. Wer ist größer? Luca, um 132 − 118 = <b>14 cm</b>.</li>
<li>Der Papa ist <b>178 cm</b> groß = 1 m 7 dm 8 cm. 👨</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Band für das Geschenk",
      html: `<p>Mama hat ein Band, das <b>2 m</b> lang ist. Sie braucht <b>65 cm</b> für ein Päckchen 🎁. Wie viel Band bleibt übrig?</p>
<ol>
<li>Zuerst rechne ich alles in dieselbe Einheit um: 2 m = <b>200 cm</b>.</li>
<li>200 − 65 = <b>135 cm</b> = 1 m 3 dm 5 cm.</li>
</ol>
<p>⚠️ Um mit Maßen zu rechnen, muss man immer <b>dieselbe Einheit</b> benutzen!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Der Meter entstand <b>1791</b> in <b>Frankreich</b>, während der Französischen Revolution. Die Wissenschaftler beschlossen, dass er <b>ein Zehnmillionstel</b> der Entfernung zwischen dem Nordpol und dem Äquator sein sollte! Zwei Astronomen, Delambre und Méchain, brauchten etwa 7 Jahre, um den Meridian von Dünkirchen bis Barcelona zu vermessen. Heute ist der Meter mit der <b>Lichtgeschwindigkeit</b> festgelegt.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …?",
      html: `<p>Vor dem Meter hatte jede Stadt ihre eigenen Maße! In Deutschland benutzte man die <b>Elle</b>, den <b>Fuß</b> und die <b>Rute</b>, und jede Stadt hatte ihre eigene Länge dafür. An den Mauern mancher mittelalterlicher Rathäuser und Kirchen sind noch die amtlichen Maße eingemeißelt, damit auf dem Markt niemand betrügen konnte. 🏛️</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Maße zu verstehen",
      intro: "Bringt dich das Umrechnen von einer Einheit in die andere durcheinander? Probier eine dieser Methoden!",
      tabs: [
        {
          label: "🪜 Die Treppe",
          html: `<p>Stell dir die Einheiten als <b>Stufen einer Treppe</b> vor: m oben, dann dm, cm und mm unten.</p>
<ul>
<li>Wenn du eine Stufe <b>hinuntergehst</b> → <b>× 10</b> (häng eine Null an).</li>
<li>Wenn du eine Stufe <b>hinaufgehst</b> → <b>: 10</b> (streich eine Null).</li>
</ul>
<p>Beispiel: 4 m → cm. Ich gehe 2 Stufen hinunter: × 10 × 10 → <b>400 cm</b>.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="40" y="30" width="130" height="50" fill="#fbbf24"/>
<rect x="160" y="90" width="130" height="50" fill="#60a5fa"/>
<rect x="280" y="150" width="130" height="50" fill="#4ade80"/>
<rect x="400" y="210" width="130" height="50" fill="#f472b6"/>
</g>
<text x="105" y="64" font-size="26" text-anchor="middle" font-weight="bold">m</text>
<text x="225" y="124" font-size="26" text-anchor="middle" font-weight="bold">dm</text>
<text x="345" y="184" font-size="26" text-anchor="middle" font-weight="bold">cm</text>
<text x="465" y="244" font-size="26" text-anchor="middle" font-weight="bold">mm</text>
<text x="200" y="60" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="320" y="120" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="440" y="180" font-size="20" fill="#dc2626" font-weight="bold">↘ × 10</text>
<text x="40" y="170" font-size="20" fill="#1d4ed8" font-weight="bold">hinauf ↖ : 10</text>
</svg>`
        },
        {
          label: "💶 Wie die Euro",
          html: `<p>Maße funktionieren wie Geld!</p>
<ul>
<li>1 € = 100 Cent ↔ 1 m = 100 <b>Zenti</b>meter. Dasselbe Wort: „hundert“ (lat. <i>centum</i>)!</li>
<li>10 Cent ↔ 10 cm = 1 dm.</li>
</ul>
<p>Wenn du weißt, dass 2 € 200 Cent sind, weißt du schon, dass 2 m 200 cm sind. 🪙</p>`
        },
        {
          label: "🇺🇸 Zoll und Fuß",
          html: `<p>In den <b>Vereinigten Staaten</b> benutzt man noch alte Einheiten: den <b>Zoll</b> (inch) und den <b>Fuß</b> (foot).</p>
<ul>
<li>1 Zoll = <b>2,54 cm</b> (ungefähr die Breite eines Daumens, wenn du erwachsen bist 👍)</li>
<li>1 Fuß = 12 Zoll = etwa <b>30 cm</b></li>
</ul>
<p>Die amerikanischen Maße gehen nicht in 10er-Schritten: 12 Zoll sind ein Fuß, 3 Fuß sind ein Yard … Das ist viel schwieriger! Deshalb benutzt fast die ganze Welt das <b>metrische System</b>. Auch Fernsehbildschirme misst man in Zoll: Ein 50-Zoll-Fernseher hat eine Diagonale von etwa 127 cm. 📺</p>`
        },
        {
          label: "✋ Der Körper als Lineal",
          html: `<p>Kenn dein „persönliches Lineal“, dann kannst du Maße ohne Werkzeug schätzen!</p>
<ul>
<li>Dein <b>kleiner Finger</b> ist ungefähr <b>1 cm</b> breit.</li>
<li>Deine geschlossene <b>Hand</b> (4 Finger) ist etwa <b>6–7 cm</b> breit; als Erwachsener wird sie etwa <b>1 dm</b> breit sein.</li>
<li>Ein langer <b>Schritt</b> eines Erwachsenen ist etwa <b>1 m</b>.</li>
</ul>
<p>Die alten Ägypter maßen mit der <b>Elle</b>: der Länge vom Ellbogen bis zur Spitze des Mittelfingers, etwa 52 cm bei der königlichen Elle.</p>`
        },
        {
          label: "📏 Auf dem Lineal",
          html: `<p>Schau dir dein Lineal an: Die <b>Zahlen</b> zeigen die Zentimeter, die <b>kleinen Striche</b> zwischen zwei Zahlen sind die <b>Millimeter</b> (es sind 10!).</p>
<p>Auf dem Zahlenstrahl hier unten ist jeder Sprung 1 cm: Versuch von 0 bis 10 cm zu zählen, also bis <b>1 dm</b>. Denk daran: Man misst immer ab der <b>0</b>, nicht ab dem Rand des Lineals!</p>`,
          widget: "numberLine",
          options: { min: 0, max: 15, step: 1, marks: [10] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Längenmaße: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "misurare", label: "Messen", x: 50, y: 6, color: "#64748b", html: "Eine Länge mit einer Einheit vergleichen und zählen, wie oft sie hineinpasst.", why: "Menschen messen seit Tausenden von Jahren, um Häuser zu bauen, Felder zu teilen und Handel zu treiben. Am Anfang benutzten sie Körperteile: Fuß, Handspanne, Elle." },
        { id: "unita", label: "Einheit für alle gleich", x: 50, y: 24, color: "#f59e0b", html: "Ein Maß, das überall gleich viel gilt.", why: "Mit Handspannen oder Füßen kam jeder auf andere Zahlen, und auf dem Markt gab es Streit und Betrug. Man brauchte ein einziges Normal." },
        { id: "metro", label: "Meter (m)", x: 50, y: 44, color: "#2563eb", html: "Die Grundeinheit der Länge.", why: "1791 in Frankreich entstanden als 1/10 000 000 der Entfernung Nordpol–Äquator. Der Name kommt vom griechischen <i>metron</i> = Maß. In Deutschland gilt er seit 1872. Seit 1983 ist er mit der Lichtgeschwindigkeit festgelegt." },
        { id: "sotto", label: "Untereinheiten", x: 22, y: 64, color: "#16a34a", html: "dm, cm, mm: Teile des Meters.", why: "Aus dem Lateinischen: <i>deci</i> = zehnter Teil, <i>centi</i> = hundertster, <i>milli</i> = tausendster." },
        { id: "multi", label: "Vielfache", x: 78, y: 64, color: "#dc2626", html: "dam, hm, km: größer als der Meter.", why: "Aus dem Griechischen: <i>deka</i> = 10, <i>hekto</i> = 100, <i>kilo</i> = 1000. Also: Latein für die kleinen Teile, Griechisch für die großen!" },
        { id: "dieci", label: "10er-Regel", x: 50, y: 78, color: "#a855f7", html: "Jede Einheit ist 10-mal die rechts von ihr.", why: "Das metrische System ist dezimal wie unsere Zahlen: Deshalb ist Umrechnen wie das Verschieben von Ziffern zwischen Hundertern, Zehnern und Einern." },
        { id: "conv", label: "Umrechnungen", x: 22, y: 92, color: "#14b8a6", html: "Dasselbe Maß mit einer anderen Einheit schreiben: 3 m = 300 cm.", why: "Man braucht sie zum Vergleichen und Rechnen: Addieren oder subtrahieren kann man nur Maße in derselben Einheit." },
        { id: "strumenti", label: "Messgeräte", x: 78, y: 92, color: "#ec4899", html: "Lineal, Schneidermaßband, Rollmaßband, Messrad.", why: "Jedes Gerät passt zu anderen Längen: das Lineal für das Heft, das Rollmaßband für das Zimmer." }
      ],
      edges: [
        ["misurare", "unita", "braucht eine"],
        ["unita", "metro", "ist der"],
        ["metro", "sotto", "wird geteilt in"],
        ["metro", "multi", "wird vervielfacht zu"],
        ["sotto", "dieci", "folgen der"],
        ["multi", "dieci", "folgen der"],
        ["dieci", "conv", "ermöglicht die"],
        ["dieci", "strumenti", "liest man ab an den"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Umrechnungen",
      questions: [
        { type: "num", q: "3 m = … dm", answer: 30, unit: "dm", explain: "Von m zu dm geht man eine Stufe hinunter: 3 × 10 = 30 dm." },
        { type: "num", q: "1 m 4 dm 6 cm = … cm", answer: 146, unit: "cm", explain: "100 + 40 + 6 = 146 cm." },
        { type: "mc", q: "Welches Maß ist das längste?", options: ["90 cm", "1 m", "9 dm"], answer: 1, explain: "1 m = 100 cm; 9 dm = 90 cm. Das längste ist 1 m." }
      ]
    }
  ],
  glossary: [
    { t: "Messen", d: "Herausfinden, wie oft eine Maßeinheit in eine Größe passt." },
    { t: "Meter (m)", d: "Grundeinheit zum Messen der Länge." },
    { t: "Dezimeter (dm)", d: "Der zehnte Teil des Meters: 1 m = 10 dm." },
    { t: "Zentimeter (cm)", d: "Der hundertste Teil des Meters: 1 m = 100 cm." },
    { t: "Millimeter (mm)", d: "Der tausendste Teil des Meters: 1 m = 1000 mm; 1 cm = 10 mm." },
    { t: "Kilometer (km)", d: "Vielfaches des Meters: 1 km = 1000 m." },
    { t: "Untereinheiten", d: "Einheiten, die kleiner sind als die Grundeinheit." },
    { t: "Vielfache", d: "Einheiten, die größer sind als die Grundeinheit." },
    { t: "Umrechnung", d: "Dasselbe Maß mit einer anderen Einheit geschrieben (z. B. 2 m = 200 cm)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "text", q: "Was ist die Grundeinheit zum Messen der Länge?", answer: ["meter", "der meter", "m", "metro"], explain: "Der Meter (m)." },
      { type: "num", q: "1 dm = … cm", answer: 10, unit: "cm", explain: "Der Dezimeter enthält 10 Zentimeter." },
      { type: "num", q: "5 cm = … mm", answer: 50, unit: "mm", explain: "Von cm zu mm: × 10 → 50 mm." },
      { type: "num", q: "700 cm = … m", answer: 7, unit: "m", explain: "Von cm zu m geht man zwei Stufen hinauf: 700 : 100 = 7 m." },
      { type: "mc", q: "Um die Länge des Klassenzimmers zu messen, benutzt du …", options: ["Millimeter", "Meter", "Kilometer"], answer: 1, explain: "Ein Klassenzimmer ist einige Meter lang." },
      { type: "tf", q: "1 m = 1000 mm.", answer: true, explain: "1 m = 10 dm = 100 cm = 1000 mm." },
      { type: "mc", q: "Die Vorsilbe „Zenti“ bedeutet …", options: ["zehnmal größer", "der hundertste Teil", "tausend"], answer: 1, explain: "Zenti = der hundertste Teil: 1 cm = 1/100 Meter." },
      { type: "num", q: "2 m 5 dm = … dm", answer: 25, unit: "dm", explain: "2 m = 20 dm; 20 + 5 = 25 dm." },
      { type: "order", q: "Ordne vom kürzesten zum längsten Maß.", items: ["8 mm", "3 cm", "5 dm", "90 cm", "2 m"], explain: "In mm: 8, 30, 500, 900, 2000." },
      { type: "num", q: "Ein Band ist 1 m lang. Du schneidest 35 cm ab. Wie viele cm bleiben übrig?", answer: 65, unit: "cm", explain: "1 m = 100 cm; 100 − 35 = 65 cm." },
      { type: "tf", q: "Um 1 m und 20 cm zu addieren, reicht es, 1 + 20 = 21 zu rechnen.", answer: false, explain: "Man muss dieselbe Einheit benutzen: 100 cm + 20 cm = 120 cm." },
      { type: "mc", q: "In welchem Jahr und in welchem Land entstand der Meter?", options: ["1791, in Frankreich", "1492, in Spanien", "1872, in Deutschland"], answer: 0, explain: "Er wurde 1791 in Frankreich festgelegt; Deutschland führte ihn 1872 gesetzlich ein." }
    ],
    gen: [["lengthConv", 3]]
  }
});
