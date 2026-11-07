TOPIC('de', {
  id: "p5-mat-percentuali",
  title: "Die Prozente",
  intro: "«Schlussverkauf: −30 %!», «Akku bei 15 %», «60 % der Klasse mögen Fußball am liebsten». <b>Prozente</b> sind überall. Das Zeichen <b>%</b> bedeutet einfach <b>„von hundert“</b>. Wir lernen, sie zu berechnen, sie für <b>Rabatte</b> und <b>Preiserhöhungen</b> zu benutzen und sie in <b>Kreisdiagrammen</b> zu lesen.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Was ist ein Prozentsatz?",
      html: `<p>Ein <b>Prozentsatz</b> ist ein <b>Bruch mit dem Nenner 100</b>, geschrieben mit dem Zeichen <b>%</b> („Prozent“).</p>
<ul>
<li><b>25 %</b> = 25/100 = 0,25 → 25 Teile von 100;</li>
<li><b>50 %</b> = 50/100 = 1/2 → <b>die Hälfte</b>;</li>
<li><b>100 %</b> = 100/100 = 1 → <b>alles</b>, das Ganze;</li>
<li><b>10 %</b> = 10/100 = 1/10 → ein Zehntel.</li>
</ul>
<p>Warum gerade 100? Weil man so sehr leicht <b>vergleichen</b> kann: „18 von 25“ und „35 von 50“ sind schwer zu vergleichen, aber „72 %“ und „70 %“ vergleicht man sofort!</p>`
    },
    {
      type: "svg",
      title: "Das Hunderterfeld",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<g transform="translate(30,30)">
<rect x="0" y="0" width="240" height="240" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<rect x="0" y="0" width="240" height="48" fill="#f97316"/>
<rect x="0" y="48" width="120" height="24" fill="#f97316"/>
<g stroke="#cbd5e1" stroke-width="1">
<line x1="24" y1="0" x2="24" y2="240"/><line x1="48" y1="0" x2="48" y2="240"/><line x1="72" y1="0" x2="72" y2="240"/><line x1="96" y1="0" x2="96" y2="240"/><line x1="120" y1="0" x2="120" y2="240"/><line x1="144" y1="0" x2="144" y2="240"/><line x1="168" y1="0" x2="168" y2="240"/><line x1="192" y1="0" x2="192" y2="240"/><line x1="216" y1="0" x2="216" y2="240"/>
<line x1="0" y1="24" x2="240" y2="24"/><line x1="0" y1="48" x2="240" y2="48"/><line x1="0" y1="72" x2="240" y2="72"/><line x1="0" y1="96" x2="240" y2="96"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="144" x2="240" y2="144"/><line x1="0" y1="168" x2="240" y2="168"/><line x1="0" y1="192" x2="240" y2="192"/><line x1="0" y1="216" x2="240" y2="216"/>
</g>
</g>
<text x="310" y="70" font-size="20" fill="#1f2937">100 Kästchen = <tspan font-weight="bold">100 %</tspan> (das Ganze)</text>
<text x="310" y="115" font-size="20" fill="#c2410c">25 gefärbte Kästchen</text>
<text x="310" y="150" font-size="26" fill="#c2410c" font-weight="bold">= 25/100 = 25 %</text>
<text x="310" y="190" font-size="20" fill="#1f2937">= 0,25 = 1/4</text>
<text x="310" y="235" font-size="17" fill="#475569">ein Viertel des Feldes!</text>
</svg>`,
      caption: "In einem Feld mit 100 Kästchen ist jedes Kästchen 1 %. 25 zu färben bedeutet, 25 % zu färben."
    },
    {
      type: "widget",
      title: "Baue den Prozentsatz auf den Kästchen",
      widget: "areaGrid",
      options: { w: 5, h: 4, max: 10 },
      caption: "Das 10 × 10-Feld hat 100 Kästchen: Die gefärbte Fläche ist der Prozentsatz. Mit 5 × 4 = 20 Kästchen hast du 20 %. Versuche, 30 %, 50 %, 64 % zu legen!"
    },
    {
      type: "text",
      title: "Den Prozentwert einer Zahl berechnen",
      html: `<p>Einen Prozentwert zu berechnen ist wie einen <b>Bruchteil einer Zahl</b> mit dem Nenner 100 zu berechnen:</p>
<ol>
<li><b>dividiere</b> die Zahl durch <b>100</b> (du findest 1 %);</li>
<li><b>multipliziere</b> mit dem Prozentsatz.</li>
</ol>
<p>Beispiel: 30 % von 250 → 250 : 100 = 2,5 → 2,5 · 30 = <b>75</b>.</p>
<p>Oder umgekehrt: 250 · 30 : 100 = 7500 : 100 = <b>75</b>.</p>
<p><b>„Freundliche“ Prozente</b> zum Merken: 50 % = Hälfte (: 2), 25 % = ein Viertel (: 4), 10 % = ein Zehntel (: 10), 20 % = ein Fünftel (: 5), 75 % = drei Viertel.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Klasse und der Sport",
      html: `<p>In der Klasse 5 A sind <b>20 Kinder</b>. <b>40 %</b> gehen zum Schwimmen. Wie viele sind das?</p>
<p>20 : 100 · 40 = <b>8 Kinder</b>. Trick: 10 % von 20 sind 2, also sind 40 % genau 2 · 4 = 8.</p>
<p>Und umgekehrt: <b>5 Kinder von 20</b> spielen ein Instrument. Wie viel Prozent sind das? 5/20 = 25/100 = <b>25 %</b> (ich habe Zähler und Nenner mit 5 multipliziert, um auf 100 zu kommen).</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Prozente berechnen",
      questions: [
        { type: "num", q: "Wie viel sind 50 % von 84?", answer: 42, explain: "50 % ist die Hälfte: 84 : 2 = 42." },
        { type: "num", q: "Wie viel sind 10 % von 350?", answer: 35, explain: "10 % ist ein Zehntel: 350 : 10 = 35." },
        { type: "mc", q: "25 % entsprechen dem Bruch …", options: ["1/2", "1/4", "1/25"], answer: 1, explain: "25/100 = 1/4." },
        { type: "num", q: "3 von 10 Kindern tragen eine Brille. Wie viel Prozent sind das?", answer: 30, unit: "%", explain: "3/10 = 30/100 = 30 %." }
      ]
    },
    {
      type: "text",
      title: "Rabatte und Preiserhöhungen",
      html: `<p><b>Rabatt</b>: Der Preis <b>sinkt</b> um einen Prozentsatz.</p>
<ol>
<li>berechne den Rabatt: Preis · % : 100;</li>
<li>ziehe den Rabatt vom Preis ab: <b>reduzierter Preis = Preis − Rabatt</b>.</li>
</ol>
<p>Schuhe für <b>60 €</b> mit <b>20 %</b> Rabatt: Rabatt = 60 · 20 : 100 = 12 € → Endpreis <b>60 − 12 = 48 €</b>.</p>
<p><b>Preiserhöhung</b>: Der Preis <b>steigt</b> um einen Prozentsatz. Ein Abo für <b>40 €</b>, um <b>5 %</b> erhöht: Erhöhung = 40 · 5 : 100 = 2 € → neuer Preis <b>42 €</b>.</p>
<p><b>Abkürzung</b>: Bei 20 % Rabatt zahlst du <b>80 %</b> des Preises: 60 · 80 : 100 = 48 €. Dasselbe Ergebnis!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Schlussverkauf",
      html: `<p>Ein Fahrrad kostet <b>180 €</b>. Im Schlussverkauf ist es um <b>30 %</b> reduziert.</p>
<ul>
<li>Rabatt: 180 : 100 · 30 = <b>54 €</b>.</li>
<li>Reduzierter Preis: 180 − 54 = <b>126 €</b>.</li>
<li>Kontrolle: 70 % von 180 = 18 · 7 = 126 € ✅.</li>
</ul>
<p>⚠️ <b>Achtung, Falle!</b> Wenn ein Preis um 10 % steigt und dann um 10 % sinkt, ist er <b>nicht</b> wieder gleich: 100 € → +10 % = 110 € → −10 % = 99 €! Weil die zweiten 10 % von 110 berechnet werden, nicht von 100.</p>`
    },
    {
      type: "text",
      title: "Die Kreisdiagramme (Tortendiagramme)",
      html: `<p>Das <b>Kreisdiagramm</b> (oder <b>Tortendiagramm</b>, <i>aerogramma</i>) ist ein in Stücke geteilter Kreis: <b>Der ganze Kreis ist 100 %</b> und jedes Stück zeigt einen Prozentsatz.</p>
<p>Der Kreis hat <b>360°</b>, also:</p>
<ul>
<li>100 % = 360°, 50 % = 180° (halber Kreis), 25 % = 90° (ein rechter Winkel), 10 % = 36°;</li>
<li><b>1 % = 3,6°</b>: Um ein Stück zu zeichnen, multipliziere den Prozentsatz mit 3,6.</li>
</ul>
<p>Die Summe aller Stücke muss immer <b>100 %</b> (und 360°) ergeben.</p>`
    },
    {
      type: "svg",
      title: "Das Lieblingsobst der 5 B",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<path d="M160,150 L160,30 A120,120 0 0,1 280,150 Z" fill="#ef4444"/>
<path d="M160,150 L280,150 A120,120 0 0,1 160,270 Z" fill="#facc15"/>
<path d="M160,150 L160,270 A120,120 0 0,1 62.9,220.5 Z" fill="#22c55e"/>
<path d="M160,150 L62.9,220.5 A120,120 0 0,1 160,30 Z" fill="#f97316"/>
<g font-size="20" font-weight="bold" text-anchor="middle" fill="#1f2937">
<text x="210" y="105">25%</text><text x="210" y="205">25%</text><text x="125" y="228">15%</text><text x="105" y="125">35%</text>
</g>
<g font-size="18" fill="#1f2937">
<rect x="340" y="50" width="24" height="24" fill="#f97316"/><text x="374" y="69">🍊 Orange 35 % (7 Kinder)</text>
<rect x="340" y="95" width="24" height="24" fill="#ef4444"/><text x="374" y="114">🍎 Apfel 25 % (5 Kinder)</text>
<rect x="340" y="140" width="24" height="24" fill="#facc15"/><text x="374" y="159">🍌 Banane 25 % (5 Kinder)</text>
<rect x="340" y="185" width="24" height="24" fill="#22c55e"/><text x="374" y="204">🍐 Birne 15 % (3 Kinder)</text>
<text x="340" y="250" font-weight="bold">Gesamt: 20 Kinder = 100 %</text>
</g>
</svg>`,
      caption: "Jedes Kind zählt 100 : 20 = 5 %. Der Apfel (25 %) nimmt einen Viertelkreis ein: 90°."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Woher das Zeichen % kommt",
      html: `<p>Das Zeichen <b>%</b> ist in <b>Italien</b> entstanden! In den Handschriften der Kaufleute des 15. Jahrhunderts schrieb man <i>„per cento“</i> abgekürzt als <b>„p cento“</b> oder <b>„p c°“</b>. Durch schnelles Schreiben wurden das „c“ und das Kringelchen zu einer Art Bruch mit zwei Kringeln: <b>%</b>. Es gibt auch das <b>Promille ‰</b> (mit drei Kringeln), das man zum Beispiel für den Salzgehalt des Meeres benutzt (etwa 35 ‰).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das erste Kreisdiagramm",
      html: `<p>Das erste bekannte Kreisdiagramm zeichnete im Jahr <b>1801</b> der schottische Ingenieur <b>William Playfair</b>, der auch das Balkendiagramm und das Liniendiagramm erfand. Später benutzte die Krankenschwester <b>Florence Nightingale</b> ein ähnliches Diagramm in „Rosenform“, um zu zeigen, dass im Krimkrieg (1853–1856) mehr Soldaten an Krankheiten als an Verwundungen starben: Dank ihrer Diagramme verbesserte sich die Hygiene in den Militärlazaretten!</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>% = von hundert</b>: 35 % = 35/100 = 0,35.</li>
<li>Prozentwert einer Zahl: <b>Zahl · % : 100</b>.</li>
<li><b>Rabatt</b>: Preis − Rabatt (oder du zahlst 100 % − Rabatt-%). <b>Erhöhung</b>: Preis + Erhöhung.</li>
<li>Kreisdiagramm: <b>100 % = 360°</b>, 1 % = 3,6°.</li>
<li>50 % = Hälfte, 25 % = ein Viertel, 10 % = ein Zehntel, 20 % = ein Fünftel.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Prozente zu verstehen",
      intro: "Prozente kann man mit der Torte, mit der in den angelsächsischen Ländern benutzten 10-%-Methode, mit dem Handy-Akku oder mit der Tabelle der Proportionen verstehen.",
      tabs: [
        {
          label: "🥧 Torte und Brüche",
          html: `<p>Prozente sind <b>verkleidete Brüche</b>! Bewege die Regler: Bei 1/4 ist die Torte bei <b>25 %</b>, bei 1/2 bei <b>50 %</b>, bei 3/4 bei <b>75 %</b>, bei 1/5 bei <b>20 %</b>, bei 1/10 bei <b>10 %</b>.</p>
<p>Um von einem Bruch zu einem Prozentsatz zu kommen, suche den gleichwertigen Bruch mit dem Nenner 100: 3/5 = 60/100 = <b>60 %</b>.</p>`,
          widget: "fractionPie",
          options: { n: 1, d: 4 }
        },
        {
          label: "🔟 Die 10-%-Methode",
          html: `<p>In England und vielen anderen Ländern lernt man, alles ausgehend von <b>10 %</b> zu berechnen, die man sofort durch Teilen durch 10 findet:</p>
<ul>
<li>10 % von 80 = <b>8</b></li>
<li>20 % = 8 · 2 = <b>16</b>;  30 % = 8 · 3 = <b>24</b></li>
<li>5 % = Hälfte von 10 % = <b>4</b></li>
<li>15 % = 10 % + 5 % = 8 + 4 = <b>12</b></li>
<li>1 % = 10 % : 10 = <b>0,8</b></li>
</ul>
<p>So sind 35 % von 80 = 30 % + 5 % = 24 + 4 = <b>28</b>. Alles im Kopf, ohne Papier! 🧠</p>`
        },
        {
          label: "🔋 Der Akku",
          html: `<p>Der <b>Handy-Akku</b> ist ein perfekter „Prozentmesser“: 100 % ist voll, 0 % ist leer, 50 % ist halb voll.</p>
<p>Wenn der Akku <b>20 Stunden</b> hält und du bei <b>25 %</b> bist, bleiben dir 20 · 25 : 100 = <b>5 Stunden</b>.</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="200" fill="#f1f5f9"/>
<g stroke="#1f2937" stroke-width="4">
<rect x="30" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="170" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="220" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="360" y="80" width="10" height="30" fill="#1f2937"/>
<rect x="410" y="60" width="140" height="70" rx="10" fill="#ffffff"/><rect x="550" y="80" width="10" height="30" fill="#1f2937"/>
</g>
<rect x="36" y="66" width="128" height="58" rx="6" fill="#22c55e"/>
<rect x="226" y="66" width="64" height="58" rx="6" fill="#facc15"/>
<rect x="416" y="66" width="32" height="58" rx="6" fill="#ef4444"/>
<g font-size="22" text-anchor="middle" font-weight="bold" fill="#1f2937">
<text x="100" y="165">100%</text><text x="290" y="165">50%</text><text x="480" y="165">25%</text>
</g>
<g font-size="15" text-anchor="middle" fill="#475569">
<text x="100" y="190">voll</text><text x="290" y="190">halb</text><text x="480" y="190">ein Viertel</text>
</g>
</svg>`
        },
        {
          label: "📊 Die Tabelle (Proportion)",
          html: `<p>Du kannst eine <b>Tabelle mit zwei Zeilen</b> benutzen: oben die Menge, unten der Prozentsatz. Was du mit einer Spalte machst, machst du auch mit der anderen.</p>
<table>
<tr><th>Menge</th><td>240</td><td>24</td><td>72</td></tr>
<tr><th>Prozentsatz</th><td>100 %</td><td>10 %</td><td>30 %</td></tr>
</table>
<p>Von 100 % zu 10 % teile ich durch 10 (auch 240 : 10 = 24); von 10 % zu 30 % multipliziere ich mit 3 (24 · 3 = 72). Also sind <b>30 % von 240 gleich 72</b>. In der weiterführenden Schule wird daraus eine <b>Proportion</b>: 240 : 100 = x : 30.</p>`
        },
        {
          label: "🇸🇬 Das Streifenmodell (Singapur)",
          html: "<p>In <b>Singapur</b> löst man Prozentaufgaben, indem man einen <b>Streifen</b> zeichnet: Der ganze Streifen ist <b>100 %</b> und wird in gleiche Teile geteilt.</p><p><b>Aufgabe 1</b>: Ein Fahrrad kostet <b>240 €</b> und ist um <b>25 %</b> reduziert. Wie viel zahlst du?</p><ol><li>Zeichne einen Streifen = 100 % = 240 €.</li><li>25 % ist ein Viertel: Teile den Streifen in <b>4 Teile</b>. Jeder Teil ist 240 : 4 = <b>60 €</b> wert.</li><li>Der Rabatt ist 1 Teil (60 €); du zahlst die anderen 3 Teile: 3 · 60 = <b>180 €</b>.</li></ol><p><b>Aufgabe 2</b> (umgekehrt!): <b>30 %</b> der Kinder einer Klasse sind <b>6</b>. Wie viele Kinder sind es insgesamt?</p><ol><li>Teile den Streifen in <b>10 Teile</b> zu je 10 %.</li><li>30 % = 3 Teile = 6 Kinder → 1 Teil = 6 : 3 = 2.</li><li>Der ganze Streifen = 10 Teile = <b>20 Kinder</b>.</li></ol><p>Die Zeichnung zeigt dir sofort, ob du multiplizieren oder dividieren musst.</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><text x=\"20\" y=\"30\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Fahrrad: 240 € — Rabatt 25 %</text><rect x=\"40\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"100\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"160\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"220\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"280\" y=\"45\" width=\"120\" height=\"44\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"340\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><rect x=\"400\" y=\"45\" width=\"120\" height=\"44\" fill=\"#fecaca\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"460\" y=\"73\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">25% = 60 €</text><text x=\"40\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">100% = 240 €  →  1 Teil = 240 : 4 = 60 €</text><text x=\"40\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#15803d\" font-weight=\"bold\">Du zahlst 3 Teile = 180 €</text><text x=\"400\" y=\"112\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">Rabatt</text><line x1=\"20\" y1=\"152\" x2=\"580\" y2=\"152\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><text x=\"20\" y=\"180\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">30 % der Klasse = 6 Kinder. Wie viele insgesamt?</text><rect x=\"40\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"65\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"90\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"115\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"140\" y=\"195\" width=\"50\" height=\"40\" fill=\"#bfdbfe\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"165\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><rect x=\"190\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"215\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"240\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"265\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"290\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"315\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"340\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"365\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"390\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"415\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"440\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"465\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><rect x=\"490\" y=\"195\" width=\"50\" height=\"40\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/><text x=\"515\" y=\"220\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">?</text><text x=\"40\" y=\"258\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">3 Teile zu 10 % = 6  →  1 Teil = 2</text><text x=\"40\" y=\"280\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">10 Teile = 100 % = 20 Kinder</text></svg>"
        },
        {
          label: "🇬🇧 Der englische „Multiplikator“",
          html: "<p>In den Schulen des <b>Vereinigten Königreichs</b> lernt man einen blitzschnellen Trick für Rabatte und Erhöhungen: den <b>multiplier</b>, also den <b>Multiplikator</b>. Die Idee: Statt den Rabatt zu berechnen und dann abzuziehen, berechnest du <b>sofort, wie viel du zahlst</b>.</p><ul><li>Rabatt von <b>20 %</b> → du zahlst <b>80 %</b> → 80/100 = <b>0,8</b> → multipliziere mit 0,8.<br>45 € · 0,8 = <b>36 €</b>.</li><li>Rabatt von <b>50 %</b> → du zahlst 50 % → · 0,5 (also die Hälfte).</li><li>Erhöhung um <b>10 %</b> → du zahlst <b>110 %</b> → · <b>1,1</b>.<br>50 € · 1,1 = <b>55 €</b>.</li></ul><p><b>So findest du den Multiplikator</b>: Starte bei 100 %, ziehe den Rabatt ab (oder addiere die Erhöhung) und teile durch 100.</p><p>⚠️ <b>Falle</b>: Eine Erhöhung um 10 %, gefolgt von einem Rabatt von 10 %, bringt dich <b>nicht</b> zum Ausgangspreis zurück! 100 € · 1,1 = 110 €; 110 € · 0,9 = <b>99 €</b>. Warum? Die zweiten 10 % werden von einer größeren Zahl berechnet.</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Prozente",
      nodes: [
        { id: "frazioni", label: "Dezimalbrüche", x: 50, y: 6, color: "#64748b", html: "Brüche mit dem Nenner 10, 100, 1000.", why: "Prozentsätze sind ein Sonderfall: Brüche mit dem Nenner 100. Deshalb gilt alles, was du über Brüche weißt, auch für Prozente." },
        { id: "percentuale", label: "Prozentsatz", x: 50, y: 28, color: "#2563eb", html: "Ein Bruch von 100, geschrieben mit %: 35 % = 35/100.", why: "Vom Lateinischen <i>per centum</i> = „pro hundert“. Schon die Römer kannten eine Steuer von 1/100 (<i>centesima rerum venalium</i>) auf bei Versteigerungen verkaufte Waren, eingeführt von Augustus." },
        { id: "simbolo", label: "Zeichen %", x: 15, y: 28, color: "#a855f7", html: "Das Zeichen, das „Prozent“ bedeutet.", why: "Entstanden aus den Abkürzungen der italienischen Kaufleute des 15. Jahrhunderts („p cento“ → „p c°“ → %). Immer 100 als Nenner zu benutzen macht Vergleiche leicht." },
        { id: "calcolo", label: "% einer Zahl", x: 22, y: 55, color: "#16a34a", html: "Zahl · Prozentsatz : 100.", why: "Es ist die Regel für den Bruchteil einer Zahl (geteilt durch den Nenner, mal den Zähler) mit dem Nenner 100." },
        { id: "decimale", label: "Dezimalform", x: 50, y: 55, color: "#eab308", html: "35 % = 0,35; 5 % = 0,05; 100 % = 1.", why: "Durch 100 zu teilen verschiebt das Komma um zwei Stellen nach links: Deshalb verwandeln Taschenrechner Prozente in Dezimalzahlen." },
        { id: "sconti", label: "Rabatte und Erhöhungen", x: 22, y: 82, color: "#dc2626", html: "Preis − Rabatt; Preis + Erhöhung.", why: "Sie entstanden mit dem Handel: Kaufleute berechneten Zinsen, Gewinne und Verluste „pro hundert“ in ihren Rechnungsbüchern, schon im Mittelalter (Fibonacci spricht davon im <i>Liber Abaci</i>, 1202)." },
        { id: "torta", label: "Kreisdiagramm", x: 78, y: 55, color: "#f97316", html: "In Stücke geteilter Kreis: 100 % = 360°.", why: "1801 von William Playfair erfunden. Es funktioniert, weil der ganze Kreis die Idee von „alles“ (100 %) gut darstellt." },
        { id: "gradi", label: "1 % = 3,6°", x: 78, y: 82, color: "#0ea5e9", html: "Um ein Stück zu zeichnen: Prozentsatz · 3,6.", why: "Der Kreis hat 360°, ein Erbe der Babylonier, die im 60er-System zählten: 360 : 100 = 3,6." },
        { id: "statistica", label: "Statistik", x: 50, y: 92, color: "#14b8a6", html: "Daten sammeln und mit Prozenten vergleichen.", why: "Prozente erlauben es, verschieden große Gruppen zu vergleichen (5 von 20 und 30 von 120 sind beide 25 %): Deshalb benutzen sie Statistikämter und Umfragen immer." }
      ],
      edges: [
        ["frazioni", "percentuale", "Sonderfall"],
        ["percentuale", "simbolo", "wird geschrieben mit"],
        ["percentuale", "calcolo", "wird berechnet"],
        ["percentuale", "decimale", "entspricht"],
        ["calcolo", "sconti", "dient für"],
        ["percentuale", "torta", "wird dargestellt mit"],
        ["torta", "gradi", "wird gezeichnet mit"],
        ["decimale", "statistica", "benutzt in der"],
        ["torta", "statistica", "benutzt in der"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Rabatte und Diagramme",
      questions: [
        { type: "num", q: "Ein Spiel kostet 50 € und ist um 10 % reduziert. Wie viel zahlst du?", answer: 45, unit: "€", explain: "Rabatt: 5 €; 50 − 5 = 45 €." },
        { type: "num", q: "Wie viele Grad misst in einem Kreisdiagramm das Stück für 50 %?", answer: 180, unit: "°", explain: "50 % von 360° = 180°." },
        { type: "tf", q: "In einem Kreisdiagramm muss die Summe der Prozentsätze 100 % ergeben.", answer: true, explain: "Der ganze Kreis stellt das Ganze dar, also 100 %." }
      ]
    }
  ],
  glossary: [
    { t: "Prozentsatz", d: "Bruch mit dem Nenner 100, angegeben mit dem Zeichen %." },
    { t: "Rabatt", d: "Senkung eines Preises, oft in Prozent angegeben." },
    { t: "Reduzierter Preis", d: "Ursprünglicher Preis minus Rabatt." },
    { t: "Preiserhöhung", d: "Anstieg eines Preises oder einer Menge, oft in Prozent angegeben." },
    { t: "Kreisdiagramm (aerogramma)", d: "In Stücke geteilter Kreis, proportional zu den Prozentsätzen; der ganze Kreis ist 100 %." },
    { t: "Promille (‰)", d: "Bruch mit dem Nenner 1000." },
    { t: "Gesamtmenge (Grundwert)", d: "Das Ganze, auf das man sich bezieht und das 100 % entspricht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was bedeutet 40 %?", options: ["40 von 10", "40 von 100", "40 von 1000"], answer: 1, explain: "Prozent = von hundert: 40/100." },
      { type: "num", q: "Wie viel sind 25 % von 120?", answer: 30, explain: "25 % ist ein Viertel: 120 : 4 = 30." },
      { type: "num", q: "Wie viel sind 15 % von 200?", answer: 30, explain: "200 · 15 : 100 = 30." },
      { type: "mc", q: "Welcher Prozentsatz entspricht 3/4?", options: ["34 %", "75 %", "43 %"], answer: 1, explain: "3/4 = 75/100 = 75 %." },
      { type: "num", q: "Ein T-Shirt kostet 30 € mit 20 % Rabatt. Wie viel zahlt man?", answer: 24, unit: "€", explain: "Rabatt: 30 · 20 : 100 = 6 €; 30 − 6 = 24 €." },
      { type: "num", q: "Das Abo kostet 200 € und wird um 5 % teurer. Wie hoch ist der neue Preis?", answer: 210, unit: "€", explain: "Erhöhung: 10 €; 200 + 10 = 210 €." },
      { type: "num", q: "In einer Klasse mit 25 Kindern haben 5 einen Hund. Wie viel Prozent sind das?", answer: 20, unit: "%", explain: "5/25 = 20/100 = 20 %." },
      { type: "num", q: "Wie viele Grad entsprechen in einem Kreisdiagramm 25 %?", answer: 90, unit: "°", explain: "360 · 25 : 100 = 90°." },
      { type: "tf", q: "0,07 und 7 % bezeichnen dieselbe Menge.", answer: true, explain: "7 % = 7/100 = 0,07." },
      { type: "tf", q: "Wenn ein Preis um 10 % steigt und dann um 10 % sinkt, ist er wieder der Ausgangspreis.", answer: false, explain: "100 → 110 → 99: Die zweiten 10 % werden von einer größeren Zahl berechnet." },
      { type: "order", q: "Ordne von der kleinsten zur größten Menge.", items: ["5 % von 100", "10 % von 100", "1/4 von 100", "50 % von 100"], explain: "5 < 10 < 25 < 50." },
      { type: "mc", q: "Wo ist das Zeichen % entstanden?", options: ["in den Handschriften italienischer Kaufleute", "in den ägyptischen Pyramiden", "in amerikanischen Computern"], answer: 0, explain: "Aus der Abkürzung von «per cento» in italienischen Handelshandschriften des 15. Jahrhunderts." }
    ],
    gen: [["percent", 3]]
  }
});
