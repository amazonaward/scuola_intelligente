TOPIC('de', {
  id: "l1-mat-scomposizione",
  title: "Faktorisierung von Polynomen",
  intro: "So wie sich eine Zahl wie 84 als 2·2·3·7 schreiben lässt, kann man auch ein Polynom in ein <b>Produkt</b> einfacherer <b>Faktoren</b> zerlegen. <b>Faktorisieren</b> ist das Gegenteil von Ausmultiplizieren: Es ist das Werkzeug, das Bruchterme, Gleichungen höheren als ersten Grades und fast die gesamte Algebra der nächsten Jahre möglich macht. In dieser Lektion lernen wir die grundlegenden Techniken kennen: Ausklammern, Binomische Formeln, das spezielle Trinom und das Verfahren von Ruffini (Horner-Schema).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Was bedeutet Faktorisieren?",
      html: `<p>Ein Polynom <b>faktorisieren</b> (in Faktoren zerlegen) heißt, es als <b>Produkt von Polynomen</b> niedrigeren Grades (den <b>Faktoren</b>) zu schreiben. Es ist die Umkehroperation der Multiplikation:</p>
<p style="text-align:center"><b>(x + 2)(x + 3) = x² + 5x + 6</b><br>ausmultiplizieren →<br>← faktorisieren</p>
<p>Ein Polynom, das sich nicht weiter in Faktoren niedrigeren Grades zerlegen lässt (mit rationalen Koeffizienten), heißt <b>irreduzibel</b>, wie die Primzahlen: x + 1 und x² + 1 sind irreduzibel. „Vollständig“ faktorisieren heißt, erst aufzuhören, wenn alle Faktoren irreduzibel sind.</p>
<p>Wozu dient das? Ein Produkt ist nur dann <b>null</b>, wenn ein Faktor null ist (Satz vom Nullprodukt); hat man ein Polynom faktorisiert, sieht man also sofort die Werte, die es null machen. Außerdem kann man gemeinsame Faktoren in Brüchen <b>kürzen</b>. Faktorisieren ist der Schlüssel zu allem.</p>`
    },
    {
      type: "text",
      title: "1) Das vollständige Ausklammern",
      html: `<p>Es ist die „umgekehrte“ Anwendung des Distributivgesetzes: a·b + a·c = <b>a(b + c)</b>. Man sucht den <b>größten gemeinsamen Teiler</b> (ggT) aller Glieder: den größten Zahlenkoeffizienten, der alle teilt, und die gemeinsamen Buchstaben mit dem <b>kleinsten Exponenten</b>.</p>
<p>Beispiel: <b>6x³ − 9x² + 3x</b>. Der ggT der Koeffizienten 6, 9, 3 ist 3; der Buchstabe x kommt in allen mit dem kleinsten Exponenten 1 vor. Also:</p>
<p style="text-align:center">6x³ − 9x² + 3x = <b>3x(2x² − 3x + 1)</b></p>
<p>Probe: Multipliziere 3x mit jedem Glied der Klammer, und du erhältst das Original. Achtung: Stimmt ein Glied mit dem ggT überein, bleibt in der Klammer <b>1</b> stehen (nicht null!): 3x : 3x = 1.</p>
<p><b>Teilweises Ausklammern (Ausklammern in Gruppen)</b>: Bei vier Gliedern klammert man gruppenweise aus, in der Hoffnung, dass in den Klammern derselbe Faktor übrig bleibt:</p>
<p style="text-align:center">ax + ay + bx + by = a(x + y) + b(x + y) = <b>(x + y)(a + b)</b></p>`
    },
    {
      type: "svg",
      title: "Faktorisieren heißt ein Rechteck rekonstruieren",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="50" width="160" height="150" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="220" y="50" width="90" height="150" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="60" y="200" width="160" height="60" fill="#fde68a" stroke="#92400e" stroke-width="3"/>
<rect x="220" y="200" width="90" height="60" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="140" y="132" font-size="26" text-anchor="middle" fill="#1e1b4b" font-weight="bold">x²</text>
<text x="265" y="132" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">3x</text>
<text x="140" y="238" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">2x</text>
<text x="265" y="238" font-size="22" text-anchor="middle" fill="#7f1d1d" font-weight="bold">6</text>
<text x="140" y="38" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="265" y="38" font-size="18" text-anchor="middle" fill="#334155">3</text>
<text x="42" y="130" font-size="18" text-anchor="middle" fill="#334155">x</text>
<text x="42" y="237" font-size="18" text-anchor="middle" fill="#334155">2</text>
<text x="340" y="100" font-size="18" fill="#1f2937" font-weight="bold">Gesamtfläche:</text>
<text x="340" y="130" font-size="18" fill="#1f2937">x² + 3x + 2x + 6 = x² + 5x + 6</text>
<text x="340" y="170" font-size="18" fill="#1f2937" font-weight="bold">Seiten: (x + 3) und (x + 2)</text>
<text x="340" y="210" font-size="20" fill="#4338ca" font-weight="bold">x² + 5x + 6 = (x + 2)(x + 3)</text>
</svg>`,
      caption: "Ein Polynom zweiten Grades als Fläche: Es zu faktorisieren heißt, die Seitenlängen des Rechtecks zu finden."
    },
    {
      type: "text",
      title: "2) Faktorisieren mit den Binomischen Formeln",
      html: `<p>Liest man die Binomischen Formeln „rückwärts“, erhält man die nützlichsten Faktorisierungen:</p>
<table>
<tr><th>Polynom</th><th>Faktorisierung</th><th>Name</th></tr>
<tr><td>A² − B²</td><td>(A + B)(A − B)</td><td>Differenz von Quadraten (3. Binomische Formel)</td></tr>
<tr><td>A² + 2AB + B²</td><td>(A + B)²</td><td>Quadrat eines Binoms (1. Binomische Formel)</td></tr>
<tr><td>A² − 2AB + B²</td><td>(A − B)²</td><td>Quadrat eines Binoms (2. Binomische Formel)</td></tr>
<tr><td>A³ + 3A²B + 3AB² + B³</td><td>(A + B)³</td><td>Kubus eines Binoms</td></tr>
<tr><td>A³ + B³</td><td>(A + B)(A² − AB + B²)</td><td>Summe von Kuben</td></tr>
<tr><td>A³ − B³</td><td>(A − B)(A² + AB + B²)</td><td>Differenz von Kuben</td></tr>
</table>
<p><b>Beispiele.</b></p>
<ul>
<li>4x² − 25 = (2x)² − 5² = <b>(2x + 5)(2x − 5)</b></li>
<li>9x² + 12x + 4: Die Quadrate sind (3x)² und 2²; das doppelte Produkt 2·3x·2 = 12x ✔ → <b>(3x + 2)²</b></li>
<li>x⁴ − 16 = (x²)² − 4² = (x² + 4)(x² − 4) = <b>(x² + 4)(x + 2)(x − 2)</b>: Der Faktor x² + 4 ist irreduzibel, aber x² − 4 lässt sich noch weiter zerlegen!</li>
<li>x³ + 8 = x³ + 2³ = <b>(x + 2)(x² − 2x + 4)</b></li>
</ul>
<p>⚠️ Die <b>Summe</b> zweier Quadrate (x² + 9) lässt sich <b>nicht</b> faktorisieren: (x + 3)² ergibt x² + 6x + 9, nicht x² + 9.</p>`
    },
    {
      type: "example",
      title: "Kopfrechnen mit der Differenz von Quadraten",
      html: `<p>Wie viel ist <b>99 × 101</b> ohne Taschenrechner? Schreibe 99 = 100 − 1 und 101 = 100 + 1: Das ist (a − b)(a + b) = a² − b².</p>
<p>99 × 101 = 100² − 1² = 10 000 − 1 = <b>9 999</b>.</p>
<p>Genauso 48 × 52 = (50 − 2)(50 + 2) = 2 500 − 4 = <b>2 496</b>. Eine algebraische Identität, die zum Trick für Kopfrechen-Meister wird.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Ausklammern und Binomische Formeln",
      questions: [
        { type: "num", q: "6x + 12 = 6(x + ?). Welche Zahl steht anstelle des Fragezeichens?", answer: 2, explain: "12 : 6 = 2, also 6x + 12 = 6(x + 2)." },
        { type: "mc", q: "Wie faktorisiert man x² − 49?", options: ["(x − 7)²", "(x + 7)(x − 7)", "(x + 49)(x − 1)"], answer: 1, explain: "Das ist eine Differenz von Quadraten: x² − 7² = (x + 7)(x − 7)." },
        { type: "tf", q: "x² + 9 = (x + 3)².", answer: false, explain: "(x + 3)² = x² + 6x + 9: Das doppelte Produkt fehlt. Die Summe von Quadraten x² + 9 ist irreduzibel." }
      ]
    },
    {
      type: "text",
      title: "3) Das spezielle Trinom x² + sx + p",
      html: `<p>Ein Trinom zweiten Grades mit dem Koeffizienten 1 vor x² faktorisiert man, wenn möglich, indem man <b>zwei Zahlen m und n</b> sucht mit:</p>
<p style="text-align:center">m + n = s (Koeffizient von x) &nbsp;&nbsp; und &nbsp;&nbsp; m · n = p (konstantes Glied)</p>
<p>Dann gilt <b>x² + sx + p = (x + m)(x + n)</b>. Der Grund ist einfach: (x + m)(x + n) = x² + (m + n)x + m·n. (Das ist der Satz von Vieta.)</p>
<p><b>Beispiel 1</b>: x² − 5x + 6. Ich suche zwei Zahlen mit dem Produkt 6 und der Summe −5: Das sind −2 und −3. Also <b>(x − 2)(x − 3)</b>.</p>
<p><b>Beispiel 2</b>: x² + x − 12. Produkt −12 (verschiedene Vorzeichen), Summe +1: Faktorpaare von 12 sind (1,12), (2,6), (3,4); das Paar mit der Differenz 1 ist 3 und 4, und die größere Zahl muss positiv sein: +4 und −3. Also <b>(x + 4)(x − 3)</b>.</p>
<p><b>Vorzeichentrick</b>: Ist p &gt; 0, haben die beiden Zahlen dasselbe Vorzeichen (das von s); ist p &lt; 0, haben sie verschiedene Vorzeichen, und die betragsmäßig größere hat das Vorzeichen von s. Gibt es keine passenden ganzen Zahlen, ist das Trinom (in der Regel) irreduzibel.</p>`
    },
    {
      type: "widget",
      title: "Welche Technik verwende ich?",
      widget: "classify",
      options: { groups: ["Ausklammern", "Differenz von Quadraten", "Spezielles Trinom", "Quadrat eines Binoms"], items: [
        ["6x² + 9x", 0],
        ["x² − 36", 1],
        ["x² + 5x + 6", 2],
        ["4x² + 12x + 9", 3],
        ["4a² − 9b²", 1],
        ["x² − x − 12", 2],
        ["9x² − 6x + 1", 3],
        ["ab + ac", 0]
      ] },
      caption: "Erkenne zuerst die Form, bevor du rechnest: Das ist die halbe Arbeit."
    },
    {
      type: "text",
      title: "4) Die Regel von Ruffini (Horner-Schema)",
      html: `<p>Für Polynome vom Grad 3 oder höher ohne eine „besondere“ Form verwendet man den <b>Satz von Ruffini</b> (Linearfaktorabspaltung):</p>
<p style="background:#eef2ff;padding:10px;border-radius:8px"><b>Ein Polynom P(x) ist genau dann durch (x − a) teilbar, wenn P(a) = 0 ist.</b></p>
<p>Es genügt also, eine Zahl <b>a</b> zu finden, die das Polynom null macht: Dann ist (x − a) ein Faktor. Bei einem Polynom mit ganzzahligen Koeffizienten und Leitkoeffizient 1 sind die möglichen ganzzahligen Kandidaten die <b>Teiler des konstanten Glieds</b> (mit beiden Vorzeichen).</p>
<p><b>Beispiel</b>: P(x) = x³ − 2x² − 5x + 6. Konstantes Glied 6, Teiler ±1, ±2, ±3, ±6.</p>
<ul>
<li>P(1) = 1 − 2 − 5 + 6 = 0 ✔ → (x − 1) ist ein Faktor.</li>
<li>Division mit dem <b>Horner-Schema (Ruffini)</b>: Ich schreibe die Koeffizienten 1, −2, −5, 6; ich übernehme die 1; multipliziere mit a = 1 und addiere spaltenweise: 1 → (−2 + 1) = −1 → (−5 − 1) = −6 → (6 − 6) = 0 (Rest null ✔).</li>
<li>Der Quotient hat die Koeffizienten 1, −1, −6: x² − x − 6.</li>
<li>Das ist ein spezielles Trinom: Summe −1, Produkt −6 → −3 und +2: (x − 3)(x + 2).</li>
</ul>
<p>Ergebnis: <b>x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)</b>. Die Nullstellen (1, 3, −2) sind genau die Werte, die das Polynom null machen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Paolo Ruffini",
      html: `<p><b>Paolo Ruffini</b> (1765–1822) war ein italienischer Arzt und Mathematiker, geboren in Valentano und in Modena lebend. Er entwickelte das nach ihm benannte Divisionsverfahren zu Beginn des 19. Jahrhunderts, ist aber noch berühmter dafür, schon 1799 versucht zu haben zu beweisen, dass die allgemeine Gleichung <b>fünften Grades nicht durch Wurzelausdrücke lösbar ist</b>: Der Beweis war unvollständig, bahnte aber den Weg für Abel und dann Galois, die die Frage abschlossen. Eine Regel für Schüler der neunten Klasse stammt also aus einer großen Geschichte der Mathematik.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Der Garten mit dem Beet",
      html: `<p>Ein quadratischer Garten mit der Seitenlänge x Meter hat in der Mitte ein quadratisches Beet mit der Seitenlänge 3 m. Die Rasenfläche ist x² − 9. Faktorisiert: <b>(x + 3)(x − 3)</b>. Das heißt, du kannst dir den Rasen als Rechteck mit den Seiten (x + 3) und (x − 3) vorstellen. Für x = 13 m: 16 · 10 = 160 m², dasselbe wie 169 − 9 = 160 m², aber mit der schnelleren Rechnung.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Fermat und die großen Zahlen",
      html: `<p>Der französische Mathematiker <b>Pierre de Fermat</b> (1601–1665) nutzte die Differenz von Quadraten, um ganze Zahlen zu zerlegen: Lässt sich eine Zahl N als a² − b² schreiben, dann ist N = (a + b)(a − b). Seine Methode funktioniert gut, wenn die beiden Faktoren nahe beieinander liegen. Auch die Sicherheit vieler moderner Verschlüsselungssysteme beruht darauf, dass es sehr schwierig ist, riesige Zahlen in Primfaktoren zu zerlegen.</p>`
    },
    {
      type: "remember",
      title: "Die Strategie: in welcher Reihenfolge probieren",
      html: `<ol>
<li><b>Vollständiges Ausklammern</b>: Gibt es einen gemeinsamen Faktor aller Glieder? Klammere ihn immer zuerst aus.</li>
<li>Zähle die Glieder: <b>2</b> → Differenz von Quadraten oder Kuben; <b>3</b> → Quadrat eines Binoms oder spezielles Trinom; <b>4</b> → teilweises Ausklammern oder Kubus eines Binoms.</li>
<li>Erkennst du keine Form und ist der Grad ≥ 3: <b>Ruffini</b>.</li>
<li><b>Prüfe</b>, ob sich ein Faktor noch weiter zerlegen lässt (wie x² − 4).</li>
<li><b>Probe</b> durch Ausmultiplizieren der Faktoren: Du musst das Ausgangspolynom wiederfinden.</li>
</ol>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Faktorisieren zu verstehen",
      intro: "Wenn dir das Faktorisieren wie eine Sammlung auswendig zu lernender Formeln vorkommt, probiere diese anderen Wege.",
      tabs: [
        {
          label: "📐 Mit Flächen",
          html: `<p>Die Differenz von Quadraten kann man „sehen“. Nimm ein Quadrat mit der Seitenlänge <b>a</b> und entferne in einer Ecke ein kleines Quadrat mit der Seitenlänge <b>b</b>: Es bleibt ein „L“ mit der Fläche <b>a² − b²</b>. Schneide das L auseinander und setze die Teile neu zusammen: Es wird ein <b>Rechteck</b> mit den Seiten <b>(a + b)</b> und <b>(a − b)</b>. Gleiche Fläche, also <b>a² − b² = (a + b)(a − b)</b>.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="30" y="60" width="160" height="160" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="130" y="60" width="60" height="60" fill="#ffffff" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
<text x="160" y="97" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">b²</text>
<text x="80" y="150" font-size="20" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a² − b²</text>
<text x="110" y="248" font-size="18" text-anchor="middle" fill="#334155">Seite a</text>
<text x="270" y="150" font-size="34" text-anchor="middle" fill="#334155" font-weight="bold">→</text>
<rect x="330" y="90" width="160" height="100" fill="#a5b4fc" stroke="#312e81" stroke-width="3"/>
<rect x="490" y="90" width="60" height="100" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="410" y="145" font-size="18" text-anchor="middle" fill="#1e1b4b" font-weight="bold">a · (a − b)</text>
<text x="520" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">b·(a−b)</text>
<text x="440" y="75" font-size="18" text-anchor="middle" fill="#334155">Grundseite a + b</text>
<text x="440" y="220" font-size="18" text-anchor="middle" fill="#334155">Höhe a − b</text>
</svg>`
        },
        {
          label: "🇨🇳 Das Kreuz (Kreuzmultiplikation)",
          html: `<p>In China benutzt man seit Jahrhunderten die <b>Kreuzmultiplikation</b> (十字相乘) für das Trinom. Schreibe die zwei Zahlen m und n in ein „X“ und prüfe zwei Dinge:</p>
<ul>
<li><b>senkrecht</b> (Produkt m·n) musst du das konstante Glied erhalten;</li>
<li><b>diagonal</b> (Summe m + n) musst du den Koeffizienten von x erhalten.</li>
</ul>
<p>Für x² − 5x + 6: Produkt 6, Summe −5. Du probierst (−1, −6): Summe −7 ✗. Du probierst (−2, −3): Summe −5 ✔. Also (x − 2)(x − 3). In den USA heißt dasselbe Spiel <i>diamond problem</i>. Gleiche Idee, andere Namen: die Suche nach zwei Zahlen mit gegebenem Produkt und gegebener Summe.</p>`
        },
        {
          label: "🔢 Wie bei den Primzahlen",
          html: `<p>84 = 2 · 2 · 3 · 7 erhält man, indem man durch Primzahlen teilt, solange es geht. Polynome verhalten sich genauso: Die „Bausteine“ sind die irreduziblen Polynome.</p>
<p>x² − 1 = (x − 1)(x + 1) ist wie 15 = 3 · 5. Und so wie sich 15 nur auf eine Weise als Produkt von Primzahlen schreiben lässt (bis auf die Reihenfolge), hat auch ein Polynom eine <b>eindeutige Zerlegung</b> in irreduzible Faktoren. Das Ausklammern entspricht der Suche nach dem ggT, die vollständige Faktorisierung der Primfaktorzerlegung: gleiche Struktur, in einer anderen Welt.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Faktorisierung",
      nodes: [
        { id: "scomp", label: "Faktorisierung", x: 50, y: 6, color: "#6366f1", html: "Ein Polynom als Produkt irreduzibler Faktoren schreiben.", why: "Sie ist nützlich, weil ein Produkt nur null wird, wenn ein Faktor null ist: So löst man Gleichungen und kürzt Bruchterme." },
        { id: "distrib", label: "Distributivgesetz", x: 15, y: 30, color: "#64748b", html: "a(b + c) = ab + ac.", why: "Es ist das Axiom, aus dem alles entsteht: von rechts nach links gelesen ist es das Ausklammern. Jede Faktorisierung ist eine rückwärts gelesene Multiplikation." },
        { id: "racc", label: "Ausklammern", x: 15, y: 55, color: "#16a34a", html: "Man zieht den ggT der Glieder heraus.", why: "Es überträgt die Idee des ggT von Zahlen auf das Buchstabenrechnen: Man zieht heraus, was allen Gliedern gemeinsam ist." },
        { id: "notevoli", label: "Binomische Formeln", x: 50, y: 32, color: "#f59e0b", html: "Quadrat eines Binoms, Differenz von Quadraten, Kuben.", why: "Es sind Identitäten, die man durch Ausmultiplizieren erhält. Schon Euklid (Elemente, Buch II) bewies mit Flächen und Rechtecken das Quadrat einer Summe." },
        { id: "trin", label: "Spezielles Trinom", x: 50, y: 58, color: "#a855f7", html: "x² + sx + p = (x + m)(x + n).", why: "Es entsteht aus dem Ausmultiplizieren (x + m)(x + n) = x² + (m + n)x + mn: die Beziehungen zwischen Summe und Produkt der Nullstellen (Satz von Vieta)." },
        { id: "ruff", label: "Satz von Ruffini", x: 85, y: 40, color: "#ef4444", html: "P(a) = 0 ⟺ (x − a) teilt P(x).", why: "Teilst du P(x) durch (x − a), erhältst du einen Quotienten Q und einen konstanten Rest R: P(x) = (x − a)Q(x) + R. Mit x = a ergibt sich P(a) = R, also ist der Rest genau dann null, wenn P(a) = 0." },
        { id: "irr", label: "Irreduzible Faktoren", x: 50, y: 88, color: "#0ea5e9", html: "Faktoren, die sich nicht weiter zerlegen lassen.", why: "Sie sind die „Primzahlen“ der Polynome: Wie bei Zahlen ist die vollständige Zerlegung bis auf die Reihenfolge eindeutig." },
        { id: "uso", label: "Gleichungen und Brüche", x: 85, y: 78, color: "#14b8a6", html: "Anwendungen: Gleichungen lösen, Bruchterme kürzen.", why: "In Brüchen kürzt man nur Faktoren, nicht Summanden: Deshalb muss man vorher faktorisieren." }
      ],
      edges: [
        ["distrib", "racc", "rückwärts gelesen"],
        ["notevoli", "scomp", "werden erkannt"],
        ["racc", "scomp", "erster Versuch"],
        ["trin", "scomp", "für Trinome"],
        ["ruff", "scomp", "Grad ≥ 3"],
        ["scomp", "irr", "bis zu"],
        ["irr", "uso", "dient zu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Trinom und Ruffini",
      questions: [
        { type: "num", q: "x² − 7x + 10 = (x − 2)(x − k). Wie groß ist k?", answer: 5, explain: "Gesucht sind zwei Zahlen mit der Summe −7 und dem Produkt 10: −2 und −5." },
        { type: "num", q: "Für P(x) = x³ − 7x + 6: Wie groß ist P(1)?", answer: 0, explain: "1 − 7 + 6 = 0: also teilt (x − 1) das Polynom P(x)." },
        { type: "mc", q: "Welches dieser Polynome ist durch (x − 2) teilbar?", options: ["x³ − 8", "x³ + 8", "x² + 4"], answer: 0, explain: "Für x = 2: 2³ − 8 = 0. Tatsächlich ist x³ − 8 = (x − 2)(x² + 2x + 4)." }
      ]
    }
  ],
  glossary: [
    { t: "Faktorisierung", d: "Schreibweise eines Polynoms als Produkt von Faktoren niedrigeren Grades." },
    { t: "Faktor", d: "Jedes der Polynome, die in einem Produkt multipliziert werden." },
    { t: "Irreduzibles Polynom", d: "Polynom, das sich nicht als Produkt von Polynomen niedrigeren Grades schreiben lässt." },
    { t: "Vollständiges Ausklammern", d: "Herausziehen des größten gemeinsamen Teilers aus allen Gliedern." },
    { t: "Teilweises Ausklammern", d: "Ausklammern in Gruppen von Gliedern, gefolgt vom Ausklammern eines gemeinsamen Faktors." },
    { t: "Differenz von Quadraten", d: "A² − B² = (A + B)(A − B)." },
    { t: "Spezielles Trinom", d: "Trinom x² + sx + p, zerlegbar in (x + m)(x + n) mit m + n = s und m·n = p." },
    { t: "Satz von Ruffini", d: "P(x) ist genau dann durch (x − a) teilbar, wenn P(a) = 0." },
    { t: "Nullstelle", d: "Wert der Variablen, der das Polynom null macht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie lautet das vollständige Ausklammern von 4x²y − 6xy²?", options: ["2xy(2x − 3y)", "4xy(x − y)", "2x²y²(2 − 3)"], answer: 0, explain: "Der ggT der Koeffizienten 4 und 6 ist 2; die gemeinsamen Buchstaben mit dem kleinsten Exponenten sind x und y. 4x²y : 2xy = 2x; 6xy² : 2xy = 3y." },
      { type: "mc", q: "Die Faktorisierung von 9x² + 12x + 4 ist …", options: ["(3x + 2)²", "(9x + 4)²", "(3x + 4)(3x + 1)"], answer: 0, explain: "(3x)² + 2·3x·2 + 2² = (3x + 2)²." },
      { type: "num", q: "x² − 3x − 10 = (x + 2)(x − k). Bestimme k.", answer: 5, explain: "Summe −3, Produkt −10: Die Zahlen sind +2 und −5." },
      { type: "num", q: "Berechne im Kopf 98 × 102 mit der Differenz von Quadraten.", answer: 9996, explain: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
      { type: "tf", q: "Wenn P(3) = 0, dann ist (x − 3) ein Faktor von P(x).", answer: true, explain: "Das ist der Satz von Ruffini." },
      { type: "order", q: "Bringe die Strategie zum Faktorisieren in die richtige Reihenfolge.", items: ["Vollständiges Ausklammern", "Binomische Formeln oder spezielles Trinom erkennen", "Teilweises Ausklammern oder Ruffini", "Prüfen, ob die Faktoren irreduzibel sind", "Probe durch Ausmultiplizieren"], explain: "Man beginnt immer mit dem vollständigen Ausklammern und endet mit der Probe." },
      { type: "text", q: "Welcher italienische Mathematiker gibt einer Regel zum Teilen eines Polynoms durch x − a den Namen?", answer: ["Ruffini", "Paolo Ruffini", "ruffini", "paolo ruffini"], explain: "Paolo Ruffini (1765–1822)." },
      { type: "num", q: "Faktorisiere 2x³ − 8x = 2x(x − 2)(x + 2) und berechne den Wert für x = 3.", answer: 30, explain: "2·3·1·5 = 30. Direkt: 2·27 − 24 = 30." },
      { type: "mc", q: "Die vollständige Faktorisierung von x⁴ − 1 ist …", options: ["(x² + 1)(x + 1)(x − 1)", "(x² − 1)²", "(x + 1)⁴"], answer: 0, explain: "x⁴ − 1 = (x² + 1)(x² − 1) = (x² + 1)(x + 1)(x − 1); x² + 1 ist irreduzibel." },
      { type: "mc", q: "Warum ist das Faktorisieren nützlich, um Bruchterme zu kürzen?", options: ["Weil man nur Faktoren kürzen kann, nicht Glieder einer Summe", "Weil es die Polynome länger macht", "Weil es die Buchstaben beseitigt"], answer: 0, explain: "Man kürzt nur gemeinsame Faktoren von Zähler und Nenner." }
    ]
  }
});
