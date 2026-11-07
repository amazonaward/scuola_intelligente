TOPIC('de', {
  id: "p2-sto-orologio",
  title: "Die Uhr",
  intro: "Um wie viel Uhr beginnt die Schule? Wie lange dauert es noch bis zur Pause? ⏰ Um das zu wissen, benutzen wir die <b>Uhr</b>. Wir lernen, die <b>Stunden</b> und <b>Minuten</b> abzulesen, und entdecken, wie die Menschen gelernt haben, die Zeit zu messen.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Wie eine Uhr aufgebaut ist",
      html: `<p>Die Uhr mit Zeigern hat:</p>
<ul>
<li>🔢 die <b>Zahlen von 1 bis 12</b> im Kreis;</li>
<li>⬛ den <b>kurzen Zeiger</b>: Er zeigt die <b>Stunden</b> an. Er ist langsam: Er braucht für eine Runde 12 Stunden;</li>
<li>➖ den <b>langen Zeiger</b>: Er zeigt die <b>Minuten</b> an. Er braucht für eine ganze Runde <b>1 Stunde</b> (60 Minuten);</li>
<li>🔴 manchmal gibt es auch den <b>dünnen Sekundenzeiger</b>, der in 1 Minute eine Runde macht.</li>
</ul>
<p>Die Zeiger drehen sich immer in dieselbe Richtung: im <b>Uhrzeigersinn</b> ↻.</p>`
    },
    {
      type: "svg",
      title: "Es ist genau 3 Uhr",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="170" cy="150" r="125" fill="#ffffff" stroke="#c2410c" stroke-width="8"/>
<g font-size="24" font-weight="bold" fill="#1e293b" text-anchor="middle">
<text x="170" y="52">12</text><text x="222" y="66">1</text><text x="258" y="102">2</text><text x="272" y="158">3</text><text x="258" y="212">4</text><text x="222" y="248">5</text>
<text x="170" y="262">6</text><text x="118" y="248">7</text><text x="82" y="212">8</text><text x="68" y="158">9</text><text x="82" y="102">10</text><text x="118" y="66">11</text>
</g>
<line x1="170" y1="150" x2="170" y2="60" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
<line x1="170" y1="150" x2="235" y2="150" stroke="#dc2626" stroke-width="11" stroke-linecap="round"/>
<circle cx="170" cy="150" r="9" fill="#1e293b"/>
<text x="330" y="80" font-size="22" fill="#dc2626" font-weight="bold">kurzer Zeiger → 3</text>
<text x="330" y="110" font-size="18" fill="#7f1d1d">(die Stunden)</text>
<text x="330" y="160" font-size="22" fill="#2563eb" font-weight="bold">langer Zeiger → 12</text>
<text x="330" y="190" font-size="18" fill="#1e3a8a">(die Minuten: „genau“)</text>
<text x="330" y="250" font-size="26" fill="#0f172a" font-weight="bold">Es ist 3:00 Uhr</text>
</svg>`,
      caption: "Wenn der lange Zeiger auf der 12 steht, ist es „genau“ die volle Stunde. Der kurze Zeiger sagt, welche Stunde."
    },
    {
      type: "text",
      title: "Die Minuten: Man zählt in Fünferschritten",
      html: `<p>Zwischen einer Zahl und der nächsten liegen <b>5 Minuten</b> (5 kleine Striche).</p>
<ul>
<li>Langer Zeiger auf der <b>1</b> → 5 Minuten; auf der <b>2</b> → 10; auf der <b>3</b> → 15 … auf der <b>6</b> → 30 … bis zur <b>12</b> → 60, also eine ganze Stunde!</li>
</ul>
<p>Um die Minuten abzulesen, zählst du einfach in Fünferschritten: Das ist die <b>5er-Reihe</b>! 🖐️</p>`
    },
    {
      type: "widget",
      title: "Spring in Fünf-Minuten-Schritten",
      widget: "numberLine",
      options: { min: 0, max: 60, step: 5, marks: [15, 30, 45, 60] },
      caption: "Jeder Sprung ist eine Zahl auf der Uhr. 3 Sprünge = 15 Minuten (eine Viertelstunde), 6 Sprünge = 30 Minuten (eine halbe Stunde), 12 Sprünge = 60 Minuten (eine Stunde)."
    },
    {
      type: "remember",
      title: "Die Wörter der Uhr",
      html: `<table>
<tr><th>Langer Zeiger auf der …</th><th>Man sagt</th><th>Beispiel</th></tr>
<tr><td><b>12</b></td><td>„genau“ / „Uhr“</td><td>8 Uhr (8:00)</td></tr>
<tr><td><b>3</b></td><td>„Viertel nach“ (15 Min.)</td><td>Viertel nach 8 (8:15)</td></tr>
<tr><td><b>6</b></td><td>„halb“ (30 Min.)</td><td>halb 9 (8:30)</td></tr>
<tr><td><b>9</b></td><td>„Viertel vor“ (45 Min.)</td><td>Viertel vor 9 (8:45)</td></tr>
</table>
<p>Achtung: „halb 9“ heißt 8:30, also die halbe Stunde <b>bis</b> 9 Uhr!</p>
<p>1 Stunde = <b>60 Minuten</b>. 1 Minute = <b>60 Sekunden</b>. 1 Tag = <b>24 Stunden</b>.</p>`
    },
    {
      type: "svg",
      title: "Viertel, halb, dreiviertel",
      svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="100" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M100 110 L100 35 A75 75 0 0 1 175 110 Z" fill="#fde047"/>
<circle cx="300" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M300 110 L300 35 A75 75 0 0 1 300 185 Z" fill="#86efac"/>
<circle cx="500" cy="110" r="75" fill="#ffffff" stroke="#334155" stroke-width="5"/>
<path d="M500 110 L500 35 A75 75 0 1 1 425 110 Z" fill="#93c5fd"/>
<line x1="100" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="300" y1="110" x2="300" y2="172" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<line x1="500" y1="110" x2="440" y2="110" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
<g fill="#1e293b"><circle cx="100" cy="110" r="6"/><circle cx="300" cy="110" r="6"/><circle cx="500" cy="110" r="6"/></g>
<text x="100" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#854d0e">Viertel nach = 15 Min.</text>
<text x="300" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#166534">halb = 30 Min.</text>
<text x="500" y="215" font-size="18" text-anchor="middle" font-weight="bold" fill="#1e40af">Viertel vor = 45 Min.</text>
</svg>`,
      caption: "Wie bei einer Pizza 🍕: Eine Viertelrunde des langen Zeigers sind 15 Minuten, eine halbe Runde 30, drei Viertel 45."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Uhr ablesen",
      questions: [
        { type: "mc", q: "Welcher Zeiger zeigt die Stunden an?", options: ["Der kurze Zeiger", "Der lange Zeiger", "Keiner"], answer: 0, explain: "Der kurze Zeiger zeigt die Stunden an, der lange die Minuten." },
        { type: "num", q: "Der lange Zeiger steht auf der 4. Wie viele Minuten sind das?", answer: 20, unit: "Min.", explain: "4 Sprünge zu je 5: 5, 10, 15, 20." },
        { type: "mc", q: "Der kurze Zeiger steht auf der 7, der lange auf der 6. Wie spät ist es?", options: ["6 Uhr 7", "Halb 8", "7 Uhr"], answer: 1, explain: "Langer Zeiger auf der 6 = 30 Minuten, also „halb“: Es ist 7:30 Uhr, also halb 8." }
      ]
    },
    {
      type: "text",
      title: "Die Digitaluhr und die 24 Stunden",
      html: `<p>Die <b>Digitaluhr</b> 📱 schreibt die Uhrzeit mit Zahlen: zuerst die <b>Stunden</b>, dann der Doppelpunkt, dann die <b>Minuten</b>. <b>08:30</b> = 8 Uhr 30 (halb 9).</p>
<p>Der Tag hat <b>24 Stunden</b>, aber die Uhr mit Zeigern zeigt nur 12: Der kurze Zeiger macht <b>2 Runden</b> am Tag!</p>
<ul>
<li>🌅 Die Stunden am Vormittag: von 0 bis 12.</li>
<li>🌇 Die Stunden am Nachmittag und Abend: von 13 bis 24. Um sie zu finden, rechne 12 dazu: <b>3 Uhr nachmittags</b> = 3 + 12 = <b>15:00</b>.</li>
</ul>
<p><b>12:00</b> ist <b>Mittag</b>; <b>24:00</b> (oder 00:00) ist <b>Mitternacht</b>.</p>`
    },
    {
      type: "example",
      title: "Beispiel: mein Tag ⏰",
      html: `<table>
<tr><td>🛏️ Ich stehe auf</td><td>7:00</td><td>7 Uhr</td></tr>
<tr><td>🏫 Ich gehe in die Schule</td><td>8:15</td><td>Viertel nach 8</td></tr>
<tr><td>🍎 Pause</td><td>10:30</td><td>halb 11</td></tr>
<tr><td>🍝 Mittagessen</td><td>12:45</td><td>Viertel vor 1</td></tr>
<tr><td>⚽ Training</td><td>17:00</td><td>5 Uhr nachmittags</td></tr>
<tr><td>🌙 Ins Bett</td><td>21:00</td><td>9 Uhr abends</td></tr>
</table>
<p>Von 7:00 bis 8:15 vergehen <b>1 Stunde und 15 Minuten</b>: die Zeit zum Anziehen, Frühstücken und zur Schule gehen.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Wie lange dauert der Zeichentrickfilm? 📺",
      html: `<p>Der Zeichentrickfilm beginnt um <b>16:00</b> und endet um <b>16:30</b>.</p>
<p>Der lange Zeiger geht von der 12 zur 6: <b>eine halbe Runde</b> = <b>30 Minuten</b>. Der Film dauert eine halbe Stunde!</p>`
    },
    {
      type: "widget",
      title: "Ordne die Uhrzeit in zwei Schreibweisen zu",
      widget: "match",
      options: {
        pairs: [
          ["9 Uhr", "9:00"],
          ["Viertel nach 4", "4:15"],
          ["halb 7", "6:30"],
          ["Viertel vor 11", "10:45"],
          ["2 Uhr nachmittags", "14:00"],
          ["Mitternacht", "00:00"]
        ]
      },
      caption: "Vorsicht bei „Viertel vor“: Viertel vor 11 ist noch 10 Uhr 45!"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Warum 60 Minuten und 24 Stunden?",
      html: `<p>Die Idee, den Tag in <b>24 Stunden</b> zu teilen, stammt von den <b>alten Ägyptern</b>: 12 Stunden für den Tag und 12 für die Nacht.</p>
<p>Die <b>60</b> dagegen stammt von den <b>Babyloniern</b>, die vor mehr als 4000 Jahren in Gruppen zu 60 zählten. Die 60 lässt sich auf viele Arten teilen (durch 2, 3, 4, 5, 6, 10, 12 …): sehr praktisch für halbe, drittel und viertel Stunden!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die genaueste Uhr",
      html: `<p><b>Atomuhren</b> messen die Zeit, indem sie die „Schwingungen“ von Atomen zählen. Die modernsten sind so genau, dass sie in Milliarden von Jahren um <b>weniger als 1 Sekunde</b> falsch gehen würden!</p>
<p>Dein Handy und das Navi im Auto benutzen Signale, die von Atomuhren auf Satelliten kommen. 🛰️</p>`
    },
    {
      type: "3d",
      title: "Reise durch die Zeit: die Geschichte der Uhr",
      scene: "spacetime",
      caption: "Die Karte ist die Grundfläche, die Höhe ist die Zeit: Je weiter oben ein Ereignis liegt, desto jünger ist es. Tippe auf ein Ereignis und folge den Pfeilen von den Ursachen zu den Wirkungen.",
      options: {
        lat: [20, 56],
        lon: [-10, 120],
        years: [-2100, 2000],
        places: [
          { lat: 32.54, lon: 44.42, label: "Babylon" },
          { lat: 25.7, lon: 32.64, label: "Theben (Ägypten)" },
          { lat: 31.2, lon: 29.92, label: "Alexandria" },
          { lat: 41.9, lon: 12.5, label: "Rom" },
          { lat: 51.5, lon: -0.12, label: "London" },
          { lat: 34.8, lon: 114.3, label: "Kaifeng (China)" }
        ],
        events: [
          { id: "babilonia", lat: 32.54, lon: 44.42, year: -2000, label: "Die Babylonier zählen zu 60", html: "In Mesopotamien zählen die Schreiber in Gruppen zu <b>60</b> und teilen den Kreis in 360 Grad. Daher stammen die <b>60 Minuten</b> der Stunde und die <b>60 Sekunden</b> der Minute." },
          { id: "meridiana", lat: 25.74, lon: 32.6, year: -1500, label: "Schattenuhren in Ägypten", html: "Die Ägypter benutzen einen Stab und seinen <b>Schatten</b>, um die Uhrzeit zu wissen: Das ist der Vorfahr der <b>Sonnenuhr</b>. Sie teilen den Tag in <b>12 Stunden</b> Licht und die Nacht in 12 Stunden Dunkelheit." },
          { id: "clessidra", lat: 25.72, lon: 32.66, year: -1400, label: "Die Wasseruhr", html: "Im Tempel von Karnak benutzt man ein Steinbecken mit einem winzigen Loch: Das Wasser läuft langsam heraus und der Wasserstand zeigt die Stunden an, auch in der <b>Nacht</b>, wenn die Sonnenuhr nicht funktioniert.", causes: ["meridiana"] },
          { id: "ctesibio", lat: 31.2, lon: 29.92, year: -250, label: "Ktesibios verbessert die Wasseruhr", html: "In Alexandria baut der griechische Erfinder <b>Ktesibios</b> sehr genaue Wasseruhren, mit Schwimmern und Zeigern, die sich von allein bewegen.", causes: ["clessidra", "babilonia"] },
          { id: "roma", lat: 41.9, lon: 12.5, year: -263, label: "Die erste Sonnenuhr in Rom", html: "Antiken Geschichtsschreibern zufolge kommt die erste Sonnenuhr als Kriegsbeute aus Sizilien nach Rom. Sie war aber für Catania gemacht: In Rom zeigte sie die falsche Zeit an, und jahrelang merkte es niemand!", causes: ["meridiana"] },
          { id: "susong", lat: 34.8, lon: 114.3, year: 1088, label: "Su Songs Uhrenturm", html: "In China baut der Wissenschaftler <b>Su Song</b> einen etwa 12 Meter hohen Turm mit einer Uhr, die von einem großen <b>Wasserrad</b> angetrieben wird, die Trommeln und Glocken schlägt und die Sterne zeigt.", causes: ["clessidra"] },
          { id: "padova", lat: 45.41, lon: 11.88, year: 1344, label: "Die Uhr von Padua", html: "<b>Mechanische</b> Uhren mit Zahnrädern und Gewichten tauchen Ende des 13. Jahrhunderts in Europa auf. In Padua baut <b>Jacopo Dondi</b> eine große astronomische Uhr für den Stadtturm: Die Glocken läuten die Stunden für alle.", causes: ["ctesibio"] },
          { id: "galileo", lat: 43.72, lon: 10.4, year: 1583, label: "Galilei und der Kronleuchter", html: "Man erzählt, dass der junge <b>Galileo Galilei</b> im Dom von <b>Pisa</b> einen schwingenden Kronleuchter beobachtete und die Schwingungen mit dem Schlag seines Pulses maß: Große oder kleine, sie dauerten immer gleich lang! Das ist das <b>Pendelgesetz</b>.", causes: ["padova"] },
          { id: "huygens", lat: 52.08, lon: 4.3, year: 1656, label: "Die Pendeluhr", html: "Der Niederländer <b>Christiaan Huygens</b> nutzt Galileis Idee und baut die erste <b>Pendeluhr</b>: Sie geht nicht mehr um 15 Minuten am Tag falsch, sondern um weniger als 1 Minute!", causes: ["galileo"] },
          { id: "greenwich", lat: 51.48, lon: 0, year: 1884, label: "Die Zeitzonen und Greenwich", html: "Mit Eisenbahn und Telegraf braucht man eine einheitliche Zeit für alle. 1884 wählen die Länder der Welt den Meridian von <b>Greenwich</b> (London) als Ausgangspunkt und teilen die Welt in <b>24 Zeitzonen</b>. In Italien kommt die Einheitszeit am 1. November 1893.", causes: ["huygens"] },
          { id: "atomico", lat: 51.42, lon: -0.33, year: 1955, label: "Die erste Atomuhr", html: "In England baut <b>Louis Essen</b> die erste genaue Atomuhr, die die Zeit mit den Schwingungen von Cäsiumatomen misst. Seit 1967 ist die <b>Sekunde</b> genau so definiert.", causes: ["greenwich", "babilonia"] }
        ]
      }
    },
    {
      type: "decision",
      title: "Jahr 1880: Du bist der Chef der italienischen Eisenbahnen",
      html: `<p>Früher stellte jede Stadt ihre Uhren nach der <b>Sonne</b>: Wenn die Sonne am höchsten am Himmel stand, war Mittag. Aber die Sonne kommt in Venedig (im Osten) früher an und in Turin (im Westen) später!</p>
<p>Wenn in Venedig Mittag war, fehlten in Turin also noch etwa <b>20 Minuten</b>. Mit Pferden war das niemandem wichtig … aber jetzt gibt es die <b>Eisenbahn</b>, und die Fahrpläne werden unübersichtlich.</p>`,
      question: "Was entscheidest du?",
      options: [
        { label: "Jede Stadt behält ihre Sonnenzeit.", outcome: "Jeder Bahnhof hätte eine andere Zeit: Die Reisenden würden ihre Züge verpassen, und zwei Züge auf demselben Gleis wüssten vielleicht nicht, wo der andere ist. Gefährlich!" },
        { label: "Eine einzige Zeit für das ganze Land, in jedem Bahnhof gleich.", outcome: "Der Mittag auf der Uhr stimmt nicht mehr in jeder Stadt genau mit der Sonne überein, aber alle Uhren in Italien zeigen dieselbe Zeit. Die Fahrpläne der Züge werden klar und sicher." },
        { label: "Keine Fahrpläne: Die Züge fahren los, wenn sie voll sind.", outcome: "Niemand wüsste, wann er von zu Hause losgehen soll: Man würde stundenlang am Bahnhof warten, und Waren und Post kämen zu spät an." }
      ],
      answer: 1,
      explain: "Die italienischen Eisenbahnen benutzten schon seit 1866 für alle Züge die Zeit von Rom. Dann wurde die Welt <b>1884</b> ausgehend von Greenwich in <b>24 Zeitzonen</b> geteilt, und seit dem <b>1. November 1893</b> übernahm ganz Italien eine einheitliche Zeit, die <b>mitteleuropäische</b>, die wir noch heute benutzen. Gerade die Eisenbahn machte eine für alle gleiche Zeit notwendig!"
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Uhr zu verstehen",
      intro: "Wenn dich die Zeiger verwirren, probiere diese anderen Wege.",
      tabs: [
        {
          label: "🇺🇸 AM und PM",
          html: `<p>Bei uns sagen wir „15:00 Uhr“. In den <b>Vereinigten Staaten</b> und in England benutzt man fast immer die 12-Stunden-Uhr mit zwei lateinischen Kürzeln:</p>
<ul>
<li><b>a.m.</b> (<i>ante meridiem</i> = „vor Mittag“): 9 a.m. = 9 Uhr morgens;</li>
<li><b>p.m.</b> (<i>post meridiem</i> = „nach Mittag“): 3 p.m. = 15:00 Uhr.</li>
</ul>
<p>Ordne zu!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["7 a.m.", "7:00 Uhr morgens"],
              ["7 p.m.", "19:00"],
              ["12 p.m. (noon)", "Mittag"],
              ["12 a.m. (midnight)", "Mitternacht"],
              ["4 p.m.", "16:00"]
            ]
          }
        },
        {
          label: "🍕 Die Pizza-Uhr",
          html: `<p>Stell dir die Uhr wie eine <b>Pizza</b> vor, die in <b>12 Stücke</b> geschnitten ist. Jedes Stück entspricht <b>5 Minuten</b>.</p>
<ul>
<li>3 Stücke = eine <b>Viertel</b>-Pizza = 15 Minuten;</li>
<li>6 Stücke = eine <b>halbe</b> Pizza = 30 Minuten;</li>
<li>9 Stücke = <b>drei Viertel</b> = 45 Minuten;</li>
<li>12 Stücke = die ganze Pizza = 60 Minuten = <b>1 Stunde</b>.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<circle cx="150" cy="120" r="100" fill="#fbbf24" stroke="#b45309" stroke-width="8"/>
<path d="M150 120 L150 20 A100 100 0 0 1 250 120 Z" fill="#ef4444" stroke="#b45309" stroke-width="3"/>
<g stroke="#b45309" stroke-width="2">
<line x1="150" y1="120" x2="150" y2="20"/><line x1="150" y1="120" x2="200" y2="33"/><line x1="150" y1="120" x2="237" y2="70"/><line x1="150" y1="120" x2="250" y2="120"/>
<line x1="150" y1="120" x2="237" y2="170"/><line x1="150" y1="120" x2="200" y2="207"/><line x1="150" y1="120" x2="150" y2="220"/><line x1="150" y1="120" x2="100" y2="207"/>
<line x1="150" y1="120" x2="63" y2="170"/><line x1="150" y1="120" x2="50" y2="120"/><line x1="150" y1="120" x2="63" y2="70"/><line x1="150" y1="120" x2="100" y2="33"/>
</g>
<text x="300" y="80" font-size="22" fill="#991b1b" font-weight="bold">3 rote Stücke</text>
<text x="300" y="115" font-size="22" fill="#991b1b" font-weight="bold">= 3 × 5 = 15 Minuten</text>
<text x="300" y="160" font-size="22" fill="#78350f" font-weight="bold">12 Stücke = 60 Minuten</text>
<text x="300" y="195" font-size="22" fill="#78350f" font-weight="bold">= 1 Stunde</text>
</svg>`
        },
        {
          label: "🌍 Wie spät ist es in der Welt?",
          html: `<p>Die Sonne beleuchtet nicht die ganze Erde gleichzeitig: Wenn es bei uns Tag ist, ist es auf der anderen Seite Nacht! Darum hat jede Gegend der Welt ihre eigene Zeit (ihre <b>Zeitzone</b>).</p>
<p>Wenn es in Italien <b>Mittag</b> ist (im Winter): In London ist es 11 Uhr, in New York 6 Uhr morgens, in Moskau 14 Uhr, in Peking 19 Uhr und in Tokio 20 Uhr. Dreh den Globus!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rom 12:00", color: "#16a34a" },
              { lat: 51.5, lon: -0.12, label: "London 11:00", color: "#2563eb" },
              { lat: 40.7, lon: -74, label: "New York 6:00", color: "#7c3aed" },
              { lat: 55.75, lon: 37.6, label: "Moskau 14:00", color: "#f97316" },
              { lat: 39.9, lon: 116.4, label: "Peking 19:00", color: "#ef4444" },
              { lat: 35.7, lon: 139.7, label: "Tokio 20:00", color: "#db2777" }
            ]
          }
        },
        {
          label: "🕰️ Die Zeitleiste der Uhren",
          html: `<p>Von den alten Stäben mit Schatten bis zu den Atomuhren: Fahre die Zeitleiste entlang.</p>`,
          widget: "timeline",
          options: {
            unit: "Jahre",
            events: [
              { year: -1500, label: "Ägyptische Schattenuhr", icon: "☀️" },
              { year: -1400, label: "Wasseruhr", icon: "💧" },
              { year: 1344, label: "Turmuhr von Padua", icon: "🏰" },
              { year: 1656, label: "Pendeluhr von Huygens", icon: "🕰️" },
              { year: 1884, label: "24 Zeitzonen", icon: "🌍" },
              { year: 1955, label: "Atomuhr", icon: "⚛️" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Uhr: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "sole", label: "Die Sonne", x: 50, y: 6, color: "#eab308", html: "Die erste „Uhr“ der Geschichte.", why: "Die Erde dreht sich in etwa 24 Stunden um sich selbst: Darum sehen wir die Sonne aufgehen, steigen und untergehen. Die ersten Menschen maßen die Zeit, indem sie auf Licht und Schatten schauten." },
        { id: "giorno", label: "Tag = 24 Stunden", x: 20, y: 28, color: "#f97316", html: "Eine ganze Drehung der Erde um sich selbst.", why: "Die <b>alten Ägypter</b> teilten den Tag in 12 Stunden Licht und die Nacht in 12 Stunden Dunkelheit: 12 + 12 = 24. Die 12 kam vielleicht vom Zählen der Fingerglieder mit dem Daumen (4 Finger × 3 Glieder = 12)." },
        { id: "sessanta", label: "60 Minuten, 60 Sekunden", x: 80, y: 28, color: "#a855f7", html: "Eine Stunde hat 60 Minuten, eine Minute hat 60 Sekunden.", why: "Das stammt von den <b>Babyloniern</b>, die in Gruppen zu 60 zählten. Die 60 lässt sich durch 2, 3, 4, 5, 6, 10, 12, 15, 20 und 30 teilen: perfekt für halbe und viertel Stunden." },
        { id: "lancette", label: "Die Zeiger", x: 50, y: 45, color: "#2563eb", html: "Kurz = Stunden, lang = Minuten, dünn = Sekunden.", why: "Die Zeiger drehen sich im „Uhrzeigersinn“, weil sie den Schatten der <b>Sonnenuhr</b> nachahmen: Auf der Nordhalbkugel, wo die Uhren erfunden wurden, wandert der Schatten genau in diese Richtung." },
        { id: "meccanico", label: "Mechanische Uhren", x: 20, y: 65, color: "#64748b", html: "Zahnräder, Gewichte und Federn, die die Zeiger drehen.", why: "Sie tauchten in Europa gegen Ende des 13. Jahrhunderts auf den Türmen der Städte und Klöster auf: Die Mönche mussten auch nachts zu genauen Zeiten beten. Das Pendel (Galilei, Huygens) machte sie viel genauer." },
        { id: "digitale", label: "Digitaluhr", x: 80, y: 65, color: "#16a34a", html: "Zeigt die Uhrzeit mit Ziffern: 14:30.", why: "Sie benutzt einen winzigen <b>Quarz</b>kristall, der mehr als 32.000-mal pro Sekunde schwingt: Ein Chip zählt die Schwingungen. Die erste Quarz-Armbanduhr kam 1969 heraus." },
        { id: "fusi", label: "Zeitzonen", x: 35, y: 88, color: "#ef4444", html: "Die Welt, in 24 Zonen geteilt, jede mit ihrer Zeit.", why: "Als die Eisenbahn das Reisen schnell machte, sorgte jede Stadt mit ihrer Sonnenzeit für Verwirrung. Im Jahr <b>1884</b> wurde Greenwich als Ausgangspunkt gewählt." },
        { id: "atomico", label: "Atomuhr", x: 70, y: 88, color: "#0ea5e9", html: "Die genaueste Uhr: Sie zählt die Schwingungen von Atomen.", why: "Seit 1967 ist die Sekunde mit <b>Cäsium</b>atomen definiert. Ohne Atomuhren würde das GPS deines Handys deinen Standort um Kilometer falsch anzeigen." }
      ],
      edges: [
        ["sole", "giorno", "gibt den"],
        ["giorno", "sessanta", "in Stunden geteilt zu"],
        ["sole", "lancette", "der Schatten inspiriert die"],
        ["sessanta", "lancette", "die Zahlen des Zifferblatts"],
        ["lancette", "meccanico", "bewegt von"],
        ["meccanico", "digitale", "dann der Quarz:"],
        ["giorno", "fusi", "anders auf der Welt:"],
        ["digitale", "atomico", "noch genauer:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: 24 Stunden und Geschichte",
      questions: [
        { type: "num", q: "4 Uhr nachmittags ist die Uhrzeit …", answer: 16, explain: "4 + 12 = 16: 16:00 Uhr." },
        { type: "mc", q: "Wer hat uns die 60 Minuten hinterlassen?", options: ["Die Babylonier", "Die Römer", "Die Amerikaner"], answer: 0, explain: "Die Babylonier zählten in Gruppen zu 60." },
        { type: "tf", q: "Die Sonnenuhr funktioniert auch nachts.", answer: false, explain: "Die Sonnenuhr benutzt den Schatten der Sonne: Nachts funktioniert sie nicht. Darum erfand man die Wasseruhr." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Kurzer Zeiger</b> = Stunden; <b>langer Zeiger</b> = Minuten.</li>
<li>Zwischen einer Zahl und der nächsten liegen <b>5 Minuten</b>.</li>
<li>15 Min. = <b>Viertelstunde</b>; 30 Min. = <b>halbe Stunde</b>; 45 Min. = <b>Dreiviertelstunde</b>.</li>
<li>1 Tag = 24 Stunden; 1 Stunde = 60 Minuten; 1 Minute = 60 Sekunden.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Stunde", d: "Jeder der 24 Teile des Tages; sie dauert 60 Minuten." },
    { t: "Minute", d: "Der sechzigste Teil der Stunde; sie dauert 60 Sekunden." },
    { t: "Zeiger", d: "Das Stäbchen, das sich auf dem Zifferblatt dreht und Stunden, Minuten oder Sekunden anzeigt." },
    { t: "Zifferblatt", d: "Der Kreis mit den Zahlen von 1 bis 12." },
    { t: "Uhrzeigersinn", d: "Die Richtung, in die sich die Zeiger drehen ↻." },
    { t: "Sonnenuhr", d: "Uhr, die die Zeit mit dem Schatten der Sonne anzeigt." },
    { t: "Wasseruhr", d: "Gerät, das die Zeit mit Wasser oder Sand misst, die langsam herabrinnen." },
    { t: "Zeitzone", d: "Gebiet der Erde, in dem alle dieselbe Uhrzeit haben." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher Zeiger zeigt die Minuten an?", options: ["Der kurze", "Der lange", "Das Zifferblatt"], answer: 1, explain: "Der lange Zeiger zeigt die Minuten an." },
      { type: "num", q: "Wie viele Minuten hat eine Stunde?", answer: 60, unit: "Min.", explain: "1 Stunde = 60 Minuten." },
      { type: "num", q: "Wie viele Stunden hat ein Tag?", answer: 24, explain: "Ein Tag hat 24 Stunden." },
      { type: "num", q: "Der lange Zeiger steht auf der 9. Wie viele Minuten zeigt er an?", answer: 45, unit: "Min.", explain: "9 × 5 = 45 Minuten." },
      { type: "mc", q: "8:30 Uhr kann man auch sagen …", options: ["Viertel nach 8", "halb 9", "Viertel vor 9"], answer: 1, explain: "30 Minuten = eine halbe Stunde: halb 9." },
      { type: "mc", q: "Viertel vor 9 ist …", options: ["9:15", "8:45", "9:45"], answer: 1, explain: "Es fehlt eine Viertelstunde bis 9: Es ist 8:45 Uhr." },
      { type: "tf", q: "Der Stundenzeiger macht 2 Runden am Tag.", answer: true, explain: "Das Zifferblatt hat 12 Stunden: In 24 Stunden macht der kurze Zeiger 2 Runden." },
      { type: "text", q: "15:00 Uhr ist … Uhr nachmittags. (schreibe die Zahl)", answer: ["3", "drei"], explain: "15 − 12 = 3: 3 Uhr nachmittags." },
      { type: "order", q: "Bring die Uhrzeiten des Tages in die richtige Reihenfolge.", items: ["7:00 Aufstehen", "8:15 Schulbeginn", "12:45 Mittagessen", "17:00 Sport", "21:00 Ins Bett"], explain: "Vom Morgen bis zum Abend." },
      { type: "mc", q: "Ein Zeichentrickfilm beginnt um 16:00 und endet um 16:30. Wie lange dauert er?", options: ["Eine Viertelstunde", "Eine halbe Stunde", "Eine Stunde"], answer: 1, explain: "Von 16:00 bis 16:30 vergehen 30 Minuten." },
      { type: "mc", q: "Welches Gerät benutzten die Menschen früher, um die Zeit am Schatten der Sonne abzulesen?", options: ["Die Sonnenuhr", "Das Thermometer", "Die Waage"], answer: 0, explain: "Die Sonnenuhr zeigt die Zeit mit dem Schatten an." },
      { type: "tf", q: "Galilei entdeckte das Pendelgesetz, als er einen Kronleuchter beobachtete.", answer: true, explain: "So erzählt es die Überlieferung: im Dom von Pisa, um 1583." }
    ]
  }
});
