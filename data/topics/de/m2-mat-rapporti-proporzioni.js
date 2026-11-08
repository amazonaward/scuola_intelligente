TOPIC('de', {
  id: "m2-mat-rapporti-proporzioni",
  title: "Verhältnisse und Proportionen",
  intro: "Der Maßstab einer Landkarte, das Rezept für 4 Personen, das auf 10 angepasst werden muss, die Geschwindigkeit eines Zuges, der 16:9-Bildschirm des Handys: Hinter all diesen Dingen stecken <b>Verhältnisse</b> und <b>Proportionen</b>. Wir lernen, was sie sind, welche <b>Eigenschaften</b> sie haben und wie man das <b>unbekannte Glied</b> findet.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Das Verhältnis zweier Zahlen",
      html: `<p>Das <b>Verhältnis</b> zweier Zahlen <i>a</i> und <i>b</i> (mit b ≠ 0) ist der <b>Quotient</b> der Division a : b. Man schreibt <b>a : b</b> oder <b>a/b</b>.</p>
<ul>
<li><i>a</i> heißt <b>Vorderglied</b>, <i>b</i> heißt <b>Hinterglied</b>.</li>
<li>Beispiel: Das Verhältnis von 12 zu 4 ist 12 : 4 = <b>3</b>; das Verhältnis von 4 zu 12 ist 4/12 = <b>1/3</b> (<b>umgekehrtes</b> Verhältnis).</li>
</ul>
<p>Eigenschaft: Wenn du Vorderglied und Hinterglied mit derselben <b>Zahl</b> (ungleich 0) multiplizierst oder dividierst, <b>ändert sich das Verhältnis nicht</b>: 12 : 4 = 24 : 8 = 6 : 2 = 3. (Das ist dieselbe Eigenschaft wie bei gleichwertigen Brüchen!)</p>`
    },
    {
      type: "text",
      title: "Verhältnisse zwischen Größen",
      html: `<p><b>Gleichartige Größen</b> (vom selben Typ, gleiche Maßeinheit): Das Verhältnis ist eine <b>reine Zahl</b> ohne Einheit.</p>
<ul>
<li><b>Maßstab</b> einer Karte: Entfernung auf der Karte / wirkliche Entfernung. Der Maßstab <b>1 : 100 000</b> bedeutet, dass 1 cm auf der Karte = 100 000 cm = <b>1 km</b> in Wirklichkeit sind.</li>
<li><b>Prozent</b>: ein Verhältnis mit dem Hinterglied 100 (15 % = 15/100).</li>
<li><b>Format</b> der Bildschirme: 16 : 9 (Breite : Höhe).</li>
</ul>
<p><b>Verschiedenartige Größen</b> (von verschiedenem Typ): Das Verhältnis ist eine <b>neue Größe</b> mit eigener Einheit.</p>
<ul>
<li><b>Geschwindigkeit</b> = Strecke / Zeit → 150 km in 2 h = <b>75 km/h</b>;</li>
<li><b>Dichte</b> = Masse / Volumen → Wasser: 1 g/cm³;</li>
<li><b>Preis pro Einheit</b> = Preis / Menge → 3 € für 2 kg = <b>1,50 €/kg</b>;</li>
<li><b>Bevölkerungsdichte</b> = Einwohner / Fläche (Italien: etwa 195 Einw./km²).</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Karte lesen",
      html: `<p>Auf einer Karte im Maßstab <b>1 : 25 000</b> (der der Bergwanderwege) liegen zwei Hütten <b>8 cm</b> auseinander. Wie weit sind sie wirklich voneinander entfernt?</p>
<ol>
<li>8 cm × 25 000 = 200 000 cm</li>
<li>200 000 cm = 2000 m = <b>2 km</b> (Luftlinie).</li>
</ol>
<p>Und umgekehrt: Ein See ist 3 km lang, wie viele Zentimeter sind das auf der Karte? 3 km = 300 000 cm → 300 000 : 25 000 = <b>12 cm</b>.</p>`
    },
    {
      type: "text",
      title: "Die Proportion",
      html: `<p>Eine <b>Proportion</b> ist eine <b>Gleichheit zweier Verhältnisse</b>:</p>
<p style="font-size:1.3em;text-align:center"><b>a : b = c : d</b></p>
<p>Man liest «<i>a verhält sich zu b wie c zu d</i>». Beispiel: <b>3 : 6 = 5 : 10</b> (beide Verhältnisse haben den Wert 0,5).</p>
<ul>
<li><b>a</b> und <b>d</b> (die äußeren Glieder) sind die <b>Außenglieder</b>;</li>
<li><b>b</b> und <b>c</b> (die inneren Glieder) sind die <b>Innenglieder</b>;</li>
<li>a und c sind die <b>Vorderglieder</b>; b und d die <b>Hinterglieder</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Außenglieder und Innenglieder",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#faf5ff"/>
<text x="110" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">3</text>
<text x="185" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="250" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">6</text>
<text x="315" y="135" font-size="56" fill="#1f2937" text-anchor="middle">=</text>
<text x="380" y="135" font-size="56" font-weight="bold" fill="#2563eb" text-anchor="middle">5</text>
<text x="440" y="135" font-size="56" fill="#1f2937" text-anchor="middle">:</text>
<text x="510" y="135" font-size="56" font-weight="bold" fill="#dc2626" text-anchor="middle">10</text>
<path d="M110 70 Q310 0 510 70" fill="none" stroke="#dc2626" stroke-width="4"/>
<text x="310" y="30" font-size="18" fill="#dc2626" text-anchor="middle" font-weight="bold">AUSSENGLIEDER: 3 × 10 = 30</text>
<path d="M250 155 Q315 210 380 155" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="315" y="235" font-size="18" fill="#2563eb" text-anchor="middle" font-weight="bold">INNENGLIEDER: 6 × 5 = 30</text>
</svg>`,
      caption: "Das Produkt der Außenglieder ist gleich dem Produkt der Innenglieder: Das ist die Grundeigenschaft."
    },
    {
      type: "remember",
      title: "Grundeigenschaft",
      html: `<p>In jeder Proportion ist <b>das Produkt der Innenglieder gleich dem Produkt der Außenglieder</b>:</p>
<p style="text-align:center;font-size:1.2em">a : b = c : d &nbsp;⟺&nbsp; <b>a × d = b × c</b></p>
<p>Sie dient dazu, zu <b>überprüfen</b>, ob vier Zahlen eine Proportion bilden: 4 : 5 = 12 : 15? 4 × 15 = 60 und 5 × 12 = 60 → <b>ja</b>.</p>`
    },
    {
      type: "text",
      title: "Die anderen Eigenschaften",
      html: `<p>Ausgehend von <b>3 : 6 = 5 : 10</b>:</p>
<ul>
<li><b>Umkehren</b> (<i>invertire</i>): Man vertauscht jedes Vorderglied mit seinem Hinterglied → 6 : 3 = 10 : 5.</li>
<li><b>Vertauschen</b> (<i>permutare</i>): Man vertauscht die Innenglieder (oder die Außenglieder) untereinander → 3 : 5 = 6 : 10 (oder 10 : 6 = 5 : 3).</li>
<li><b>Zusammensetzen</b> (<i>comporre</i>): (a + b) : a = (c + d) : c, oder (a + b) : b = (c + d) : d → (3 + 6) : 3 = (5 + 10) : 5 → 9 : 3 = 15 : 5 ✓</li>
<li><b>Zerlegen</b> (<i>scomporre</i>): (a − b) : a = (c − d) : c (mit a &gt; b, c &gt; d) → aus 6 : 3 = 10 : 5 → (6 − 3) : 6 = (10 − 5) : 10 → 3 : 6 = 5 : 10 ✓</li>
</ul>
<p>Zusammensetzen und Zerlegen sind sehr nützlich bei Aufgaben, in denen man die <b>Summe</b> oder die <b>Differenz</b> zweier Zahlen und ihr Verhältnis kennt.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Verhältnisse und Proportionen",
      questions: [
        { type: "mc", q: "Welche sind in 2 : 7 = 6 : 21 die Innenglieder?", options: ["2 und 21", "7 und 6", "2 und 6"], answer: 1, explain: "Die Innenglieder sind die inneren Glieder: 7 und 6." },
        { type: "tf", q: "4 : 6 = 10 : 15 ist eine Proportion.", answer: true, explain: "4 × 15 = 60 und 6 × 10 = 60." },
        { type: "num", q: "Ein Auto fährt 240 km in 3 Stunden. Wie groß ist die Durchschnittsgeschwindigkeit in km/h?", answer: 80, unit: "km/h", explain: "240 : 3 = 80 km/h." }
      ]
    },
    {
      type: "text",
      title: "Das unbekannte Glied berechnen",
      html: `<p>Aus der Grundeigenschaft gewinnen wir zwei Regeln:</p>
<ul>
<li><b>Unbekanntes Außenglied</b> = Produkt der Innenglieder : bekanntes Außenglied.<br>
<i>x : 4 = 15 : 12</i> → x = (4 × 15) : 12 = 60 : 12 = <b>5</b>.</li>
<li><b>Unbekanntes Innenglied</b> = Produkt der Außenglieder : bekanntes Innenglied.<br>
<i>8 : x = 6 : 9</i> → x = (8 × 9) : 6 = 72 : 6 = <b>12</b>.</li>
</ul>
<p><b>Stetige Proportion</b>: Die beiden Innenglieder sind gleich, a : x = x : d. Das Glied x heißt <b>mittlere Proportionale</b> und ist <b>x = √(a × d)</b>.<br>
<i>4 : x = x : 9</i> → x² = 36 → x = <b>6</b>.</p>
<p><b>Mit Zusammensetzen</b> (bekannte Summe): Zwei Zahlen haben die Summe 40 und stehen im Verhältnis 3 : 5. Welche sind es?<br>
(a + b) : a = (3 + 5) : 3 → 40 : a = 8 : 3 → a = 40 × 3 : 8 = <b>15</b>; b = 40 − 15 = <b>25</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Tiramisu-Rezept",
      html: `<p>Ein Rezept für <b>4 Personen</b> verwendet <b>250 g</b> Mascarpone. Wie viel braucht man für <b>10 Personen</b>?</p>
<p>4 : 250 = 10 : x → x = (250 × 10) : 4 = 2500 : 4 = <b>625 g</b>.</p>
<p>Mit derselben Methode: Wenn man <b>3 Eier</b> für 4 Personen braucht, dann für 10 Personen: 4 : 3 = 10 : x → x = 30 : 4 = 7,5 → in der Küche rundest du auf <b>7 oder 8 Eier</b>!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Der Goldene Schnitt",
      html: `<p>Eine Strecke ist nach dem <b>Goldenen Schnitt</b> geteilt, wenn sich das Ganze zum größeren Teil verhält wie der größere Teil zum kleineren. Ihr Verhältnis ist die <b>goldene Zahl φ ≈ 1,618</b>. Euklid beschrieb sie in den <i>Elementen</i> (3. Jahrhundert v. Chr.); Luca Pacioli nannte sie «göttliche Proportion» (1509), mit Zeichnungen von <b>Leonardo da Vinci</b>. Das Verhältnis zweier aufeinanderfolgender Zahlen der Fibonacci-Folge (1, 1, 2, 3, 5, 8, 13, 21 …) nähert sich immer mehr φ: 21 : 13 ≈ 1,615.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Eratosthenes misst die Erde",
      html: `<p>Um <b>240 v. Chr.</b> maß <b>Eratosthenes</b> den Erdumfang mit einer Proportion! Am Mittag der Sonnenwende stand die Sonne in Syene im Zenit, während in Alexandria die Strahlen einen Winkel von etwa <b>7,2°</b> bildeten, also 1/50 von 360°. Da die beiden Städte etwa 5000 Stadien auseinanderlagen: 7,2 : 360 = 5000 : x → x = <b>250 000 Stadien</b>, etwa 40 000 km. Der wahre Wert ist 40 075 km am Äquator!</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Proportionen zu verstehen",
      intro: "Wenn dich «Außenglieder» und «Innenglieder» verwirren, probiere diese Methoden, die in anderen Ländern benutzt werden.",
      tabs: [
        {
          label: "✖️ Kreuzprodukt (Frankreich, USA)",
          html: `<p>Schreibe die Proportion als <b>Gleichheit von Brüchen</b>:</p>
<p style="text-align:center;font-size:1.2em">a/b = c/d &nbsp;→&nbsp; a × d = b × c</p>
<p>Man multipliziert die Zahlen «über Kreuz» (in Form eines <b>X</b>): In Frankreich heißt das <i>produit en croix</i>, in den USA <i>cross multiplication</i>. Es ist dieselbe Grundeigenschaft, aber man sieht sie besser!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#ecfeff"/>
<text x="200" y="90" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">4</text>
<line x1="165" y1="110" x2="235" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="200" y="165" font-size="48" font-weight="bold" fill="#0e7490" text-anchor="middle">250</text>
<text x="300" y="125" font-size="48" fill="#1f2937" text-anchor="middle">=</text>
<text x="400" y="90" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">10</text>
<line x1="365" y1="110" x2="435" y2="110" stroke="#1f2937" stroke-width="5"/>
<text x="400" y="165" font-size="48" font-weight="bold" fill="#be185d" text-anchor="middle">x</text>
<line x1="230" y1="70" x2="375" y2="150" stroke="#f59e0b" stroke-width="5"/>
<line x1="240" y1="150" x2="370" y2="70" stroke="#f59e0b" stroke-width="5"/>
<text x="300" y="215" font-size="20" fill="#1f2937" text-anchor="middle" font-weight="bold">4 · x = 250 · 10 → x = 625</text>
</svg>`
        },
        {
          label: "📋 Tabelle und Rückführung auf die Einheit",
          html: `<p>In Deutschland und in England benutzt man oft die <b>Rückführung auf die Einheit</b> (<i>Dreisatz</i>): Zuerst berechnet man, wie viel <b>1</b> wert ist, dann multipliziert man.</p>
<table>
<tr><th>Personen</th><th>Mascarpone</th></tr>
<tr><td>4</td><td>250 g</td></tr>
<tr><td>1</td><td>250 : 4 = 62,5 g</td></tr>
<tr><td>10</td><td>62,5 × 10 = <b>625 g</b></td></tr>
</table>
<p>Keine Formel, die man sich merken muss: nur eine Division und eine Multiplikation!</p>`
        },
        {
          label: "🗺️ Der Zoom der Karten",
          html: `<p>Denk an eine Proportion wie an einen <b>Zoom</b>: Wenn du ein Foto auf dem Handy vergrößerst, werden alle Längen mit derselben Zahl multipliziert, also bleiben die <b>Verhältnisse gleich</b>. Ein Rechteck 3 × 6, vergrößert, wird zu 5 × 10: Die Form ist dieselbe, weil 3 : 6 = 5 : 10. Wären die Verhältnisse nicht gleich, würde sich das Foto «verzerren»!</p>`
        },
        {
          label: "🧊 Würfelchen im Maßstab",
          html: `<p>Hier ist ein Rechteck aus <b>2 × 3</b> Würfelchen. Versuche mit den Reglern, ein größeres «im gleichen Verhältnis» zu bauen: 4 × 6, 6 × 9 … Es funktioniert nur, wenn 2 : 3 = neue kurze Seite : neue lange Seite. Probiere 4 × 7: Die Form ändert sich!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Verhältnisse und Proportionen",
      nodes: [
        { id: "rapp", label: "Verhältnis a : b", x: 50, y: 6, color: "#2563eb", html: "Quotient zweier Zahlen.", why: "Auf Latein <i>ratio</i>, auf Griechisch <i>lógos</i>: Für die Griechen war das Verhältnis die Art, zwei Größen zu vergleichen. Von <i>ratio</i> kommt auch «rational»." },
        { id: "omog", label: "Gleichartige Größen", x: 18, y: 28, color: "#16a34a", html: "Gleiche Einheit: Maßstab, Prozent (reine Zahl).", why: "Wenn man cm durch cm teilt, «kürzt» sich die Einheit: Es bleibt eine reine Zahl, die sagt, «wie oft» eine Größe in die andere passt." },
        { id: "nonomog", label: "Verschiedenartige Größen", x: 82, y: 28, color: "#ea580c", html: "Verschiedene Einheiten: Geschwindigkeit, Dichte, Preis pro kg.", why: "Das Verhältnis erzeugt eine <b>abgeleitete Größe</b>: km/h, g/cm³, €/kg. Galilei benutzte diese Verhältnisse im 17. Jahrhundert, um die Bewegung zu untersuchen." },
        { id: "prop", label: "Proportion", x: 50, y: 46, color: "#7c3aed", html: "Gleichheit zweier Verhältnisse: a : b = c : d.", why: "Die Theorie der Proportionen wurde von <b>Eudoxos von Knidos</b> (4. Jahrhundert v. Chr.) entwickelt und steht im <b>5. Buch der Elemente des Euklid</b>. Sie funktionierte auch mit Größen wie √2, die keine Brüche sind." },
        { id: "fond", label: "Grundeigenschaft", x: 22, y: 66, color: "#dc2626", html: "Produkt der Innenglieder = Produkt der Außenglieder.", why: "Wenn a/b = c/d, erhält man durch Multiplikation beider Seiten mit b × d die Gleichung a × d = c × b: Das ist eine Folge der gleichwertigen Brüche." },
        { id: "altre", label: "Umkehren, Vertauschen, Zusammensetzen, Zerlegen", x: 78, y: 66, color: "#ca8a04", html: "Umformungen, die die Proportion erhalten.", why: "Alle beweist man aus der Grundeigenschaft. Sie standen schon im 5. Buch des Euklid mit griechischen Namen; im Mittelalter lehrten sie die «Abakusschulen» den Kaufmannssöhnen." },
        { id: "incog", label: "Unbekanntes Glied", x: 22, y: 88, color: "#0d9488", html: "Außenglied = Innenglieder : Außenglied; Innenglied = Außenglieder : Innenglied.", why: "Das ist der «Dreisatz», gelehrt in Rechenbüchern wie dem <i>Liber Abaci</i> von <b>Fibonacci</b> (1202), um Aufgaben zu Währungen, Waren und Preisen zu lösen." },
        { id: "continua", label: "Stetige Proportion", x: 78, y: 88, color: "#db2777", html: "a : x = x : d → x = √(a·d).", why: "Die mittlere Proportionale ist das <b>geometrische Mittel</b>. Sie taucht im zweiten Satz des Euklid über rechtwinklige Dreiecke und im Goldenen Schnitt auf." }
      ],
      edges: [
        ["rapp", "omog", "zwischen"],
        ["rapp", "nonomog", "zwischen"],
        ["rapp", "prop", "zwei gleiche Verhältnisse"],
        ["prop", "fond", "hat"],
        ["prop", "altre", "wird umgeformt mit"],
        ["fond", "incog", "ermöglicht das Finden"],
        ["altre", "continua", "Sonderfall"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: das unbekannte Glied",
      questions: [
        { type: "num", q: "x : 6 = 10 : 15. Wie groß ist x?", answer: 4, explain: "x = 6 × 10 : 15 = 60 : 15 = 4." },
        { type: "num", q: "9 : x = x : 4. Wie groß ist x (positiv)?", answer: 6, explain: "x = √(9 × 4) = √36 = 6." },
        { type: "num", q: "Auf einer Karte 1 : 50 000 liegen zwei Dörfer 6 cm auseinander. Wie viele km sind das in Wirklichkeit?", answer: 3, unit: "km", explain: "6 × 50 000 = 300 000 cm = 3 km." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Verhältnis = Quotient; gleichartig → reine Zahl; verschiedenartig → neue Größe.</li>
<li>Proportion a : b = c : d; <b>Außenglieder</b> a, d; <b>Innenglieder</b> b, c.</li>
<li><b>Innenglieder × Innenglieder = Außenglieder × Außenglieder</b> (gemeint: Produkt der Innenglieder = Produkt der Außenglieder).</li>
<li>x als Außenglied = multiplizierte Innenglieder : bekanntes Außenglied; x als Innenglied = multiplizierte Außenglieder : bekanntes Innenglied.</li>
<li>Mittlere Proportionale: x = √(a·d).</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Verhältnis", d: "Quotient zweier Zahlen oder Größen." },
    { t: "Vorderglied", d: "Das erste Glied eines Verhältnisses." },
    { t: "Hinterglied", d: "Das zweite Glied eines Verhältnisses." },
    { t: "Maßstab", d: "Verhältnis zwischen einer Entfernung auf der Karte und der entsprechenden wirklichen Entfernung." },
    { t: "Proportion", d: "Gleichheit zweier Verhältnisse." },
    { t: "Außenglieder", d: "Das erste und das vierte Glied einer Proportion." },
    { t: "Innenglieder", d: "Das zweite und das dritte Glied einer Proportion." },
    { t: "Stetige Proportion", d: "Proportion mit gleichen Innengliedern." },
    { t: "Mittlere Proportionale", d: "Das wiederholte Glied einer stetigen Proportion: √(a·d)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie groß ist das Verhältnis von 45 zu 9?", answer: 5, explain: "45 : 9 = 5." },
      { type: "mc", q: "In 5 : 8 = 15 : 24 sind die Außenglieder …", options: ["5 und 24", "8 und 15", "5 und 15"], answer: 0, explain: "Das erste und das letzte Glied." },
      { type: "tf", q: "3 : 4 = 9 : 16 ist eine Proportion.", answer: false, explain: "3 × 16 = 48, aber 4 × 9 = 36: verschieden." },
      { type: "num", q: "x : 12 = 5 : 3. Finde x.", answer: 20, explain: "x = 12 × 5 : 3 = 20." },
      { type: "num", q: "7 : x = 21 : 9. Finde x.", answer: 3, explain: "x = 7 × 9 : 21 = 3." },
      { type: "mc", q: "Wenn man die Innenglieder von 2 : 3 = 8 : 12 vertauscht, erhält man …", options: ["3 : 2 = 12 : 8", "2 : 8 = 3 : 12", "12 : 3 = 8 : 2"], answer: 1, explain: "Man vertauscht 3 und 8." },
      { type: "mc", q: "Das Verhältnis von 300 km zu 4 h ist …", options: ["75 (reine Zahl)", "75 km/h", "1200 km·h"], answer: 1, explain: "Verschiedenartige Größen: Man erhält eine Geschwindigkeit, 75 km/h." },
      { type: "num", q: "Zwei Zahlen haben die Summe 56 und stehen im Verhältnis 3 : 4. Welche ist die kleinere?", answer: 24, explain: "Zusammensetzen: 56 : a = 7 : 3 → a = 56 × 3 : 7 = 24 (die andere ist 32)." },
      { type: "num", q: "Finde die mittlere Proportionale zwischen 2 und 18.", answer: 6, explain: "√(2 × 18) = √36 = 6." },
      { type: "num", q: "Im Maßstab 1 : 200 ist ein Zimmer auf der Zeichnung 3 cm lang. Wie viele Meter lang ist es wirklich?", answer: 6, unit: "m", explain: "3 × 200 = 600 cm = 6 m." },
      { type: "order", q: "Bring die Schritte zum Finden eines unbekannten Außenglieds in die richtige Reihenfolge.", items: ["Ich bestimme die Innenglieder", "Ich multipliziere die Innenglieder", "Ich teile durch das bekannte Außenglied", "Ich überprüfe mit der Grundeigenschaft"], explain: "Innenglieder × Innenglieder : bekanntes Außenglied, dann überprüft man." }
    ],
    gen: [["proportion", 3]]
  }
});
