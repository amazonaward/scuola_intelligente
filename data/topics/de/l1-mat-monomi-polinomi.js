TOPIC('de', {
  id: "l1-mat-monomi-polinomi",
  title: "Monome und Polynome",
  intro: "Wie groß ist die Fläche eines quadratischen Gartens mit der Seitenlänge <i>a</i>, wenn wir jede Seite um <i>b</i> Meter verlängern? Und wie schreiben wir das ein für alle Mal auf, für beliebige a und b? Das <b>Buchstabenrechnen</b> erlaubt es, Buchstaben statt Zahlen zu verwenden, um allgemeine Regeln aufzuschreiben. Wir lernen sein „Alphabet“ (die <b>Monome</b>), seine „Wörter“ (die <b>Polynome</b>) und einige „Zauberformeln“, die stundenlanges Rechnen sparen: die <b>Binomischen Formeln</b> (die <b>bemerkenswerten Produkte</b>).",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Warum Buchstaben verwenden?",
      html: `<p>Ein <b>Term</b> (Buchstabenausdruck) enthält Zahlen, Buchstaben und Rechenoperationen. Die Buchstaben stehen für beliebige Zahlen (Variablen) und erlauben es, eine Regel zu formulieren, die für unendlich viele Fälle gilt. Zum Beispiel:</p>
<ul>
<li>Der Umfang eines Rechtecks mit Grundseite b und Höhe h ist 2b + 2h, für <i>jedes</i> Rechteck;</li>
<li>Eine beliebige gerade Zahl schreibt man 2n, eine ungerade 2n + 1 (n ∈ ℤ), drei aufeinanderfolgende Zahlen n, n + 1, n + 2.</li>
</ul>
<p>Der <b>Wert</b> eines Terms ergibt sich, indem man für die Buchstaben Zahlen einsetzt: Für 3a − 2b mit a = 4 und b = −1 erhält man 3·4 − 2·(−1) = 14.</p>
<p>Die Buchstaben folgen denselben Gesetzen wie die Zahlen (Kommutativ-, Assoziativ-, Distributivgesetz); deshalb hat das Buchstabenrechnen keine „neuen Regeln“, sondern ist eine <b>Erweiterung</b> der Arithmetik. Der französische Mathematiker François Viète (1540–1603) führte den systematischen Gebrauch von Buchstaben ein, und Descartes legte die moderne Konvention fest: die ersten Buchstaben (a, b, c …) für bekannte Werte, die letzten (x, y, z) für die Unbekannten.</p>`
    },
    {
      type: "text",
      title: "Die Monome",
      html: `<p>Ein <b>Monom</b> ist ein Term, in dem nur <b>Multiplikationen</b> (und Potenzen mit natürlichem Exponenten) von Zahlen und Buchstaben vorkommen. Beispiele: 5a²b, −x, 3/4 xy³, 7. Keine Monome sind: a + b (Summe), 1/x (Buchstabe im Nenner), √x.</p>
<p>An einem Monom in <b>Normalform</b> (vereinfacht) unterscheiden wir:</p>
<ul>
<li>den <b>Koeffizienten</b>: den Zahlenfaktor (im Monom −3x²y ist er −3; in xy ist er 1);</li>
<li>den <b>Buchstabenteil</b>: die Buchstaben mit ihren Exponenten (x²y);</li>
<li>den <b>Gesamtgrad</b>: die Summe der Exponenten (x²y hat den Grad 3);</li>
<li>den <b>Grad bezüglich eines Buchstabens</b>: den Exponenten dieses Buchstabens (x²y hat den Grad 2 bezüglich x und 1 bezüglich y).</li>
</ul>
<p>Zwei Monome sind <b>ähnlich</b> (gleichartig), wenn sie den <b>gleichen Buchstabenteil</b> haben (beliebige Koeffizienten): 3x²y, −5x²y und (1/2)yx² sind ähnlich. Sie sind <b>entgegengesetzt</b>, wenn sie ähnlich sind und entgegengesetzte Koeffizienten haben (4ab und −4ab). Ein Monom mit dem Koeffizienten 0 ist das Nullmonom (Grad nicht definiert); eine Zahl ungleich null ist ein Monom vom Grad 0.</p>
<p><b>Rechenoperationen</b>:</p>
<ul>
<li><b>Algebraische Summe</b>: <i>nur</i> zwischen ähnlichen Monomen: Man addiert die Koeffizienten und lässt den Buchstabenteil unverändert. 5x²y − 8x²y + x²y = −2x²y. Nicht ähnliche Monome bleiben als angedeutete Summe stehen (3x + 2y lässt sich nicht zusammenfassen).</li>
<li><b>Produkt</b>: Man multipliziert die Koeffizienten und addiert die Exponenten gleicher Buchstaben: (3a²b)·(−2ab³) = −6a³b⁴.</li>
<li><b>Potenz</b>: (−2x²y)³ = (−2)³·x⁶·y³ = −8x⁶y³.</li>
<li><b>Quotient</b>: Man dividiert die Koeffizienten und subtrahiert die Exponenten: 12a⁵b² : (−4a²b) = −3a³b. Das Ergebnis ist nur dann ein Monom, wenn jeder Buchstabe des Divisors im Dividenden mit einem nicht kleineren Exponenten vorkommt (sonst ergibt die Division einen Bruchterm).</li>
<li><b>ggT und kgV</b>: Der ggT hat die <i>gemeinsamen</i> Buchstaben mit dem <i>kleineren</i> Exponenten und den ggT der Koeffizienten; das kgV hat alle Buchstaben mit dem <i>größeren</i> Exponenten und das kgV der Koeffizienten. Für 12a³b und 18a²b²: ggT = 6a²b, kgV = 36a³b².</li>
</ul>`
    },
    {
      type: "widget",
      title: "Ähnlich oder nicht?",
      widget: "classify",
      options: { groups: ["Ähnlich zu 3x²y", "Nicht ähnlich zu 3x²y"], items: [
        ["−5x²y", 0], ["x²y", 0], ["7yx²", 0], ["(2/3)x²y", 0],
        ["3xy²", 1], ["3x²", 1], ["2x²y²", 1], ["3x + y", 1], ["4xy", 1]
      ] },
      caption: "Es zählen die Buchstaben und ihre Exponenten, nicht die Koeffizienten und nicht die Reihenfolge der Buchstaben (7yx² = 7x²y)."
    },
    {
      type: "example",
      title: "Beispiel: Einen Term mit Monomen vereinfachen",
      html: `<p>Vereinfache: <b>2a²b · (−3ab²) − 5a³b³ + (4a⁶b⁶) : (2a³b³)</b></p>
<ol>
<li>Erstes Produkt: 2·(−3) = −6; a²·a = a³; b·b² = b³ → −6a³b³.</li>
<li>Quotient: 4 : 2 = 2; a⁶ : a³ = a³; b⁶ : b³ = b³ → 2a³b³.</li>
<li>Summe der ähnlichen Monome (alle a³b³): −6 − 5 + 2 = −9 → <b>−9a³b³</b>.</li>
</ol>
<p>Kontrolle mit a = 1, b = 1: 2·(−3) − 5 + 4/2 = −6 − 5 + 2 = −9 ✔. Einfache Werte einzusetzen ist ein schneller Weg, ein Ergebnis zu überprüfen (es beweist es nicht vollständig, entdeckt aber viele Fehler).</p>`
    },
    {
      type: "text",
      title: "Die Polynome",
      html: `<p>Ein <b>Polynom</b> ist eine <b>algebraische Summe von Monomen</b>. Die Monome, aus denen es besteht, heißen <b>Glieder</b>. Ein Polynom mit zwei Gliedern heißt <b>Binom</b>, mit drei Gliedern <b>Trinom</b>. Zum Beispiel ist 3x²y − 5xy + 7 ein Trinom.</p>
<p>Das Polynom ist in <b>Normalform</b> (vereinfacht), wenn es keine ähnlichen Monome (die zusammengefasst werden müssten) und keine auszuführenden Operationen enthält. Man definiert:</p>
<ul>
<li>den <b>Grad des Polynoms</b>: das Maximum der Grade seiner Glieder (3x²y − 5xy + 7 hat den Grad 3);</li>
<li>den <b>Grad bezüglich eines Buchstabens</b>: den größten Exponenten dieses Buchstabens (in x²y: Grad 2 in x);</li>
<li><b>geordnet</b> nach fallenden (oder steigenden) Potenzen eines Buchstabens;</li>
<li><b>vollständig</b> bezüglich eines Buchstabens, wenn alle Potenzen von 0 bis zum Grad vorkommen (x³ − 2x² + x − 5 ist vollständig; x³ + 4 nicht);</li>
<li><b>homogen</b>, wenn alle Glieder denselben Grad haben (a² + 3ab − b² ist homogen vom Grad 2);</li>
<li><b>konstantes Glied</b>: das Glied vom Grad 0, ohne Buchstaben.</li>
</ul>
<p>Zwei Polynome sind <b>gleich</b>, wenn sie in Normalform dieselben Glieder haben. Ein Polynom heißt <b>identisch null</b>, wenn es vereinfacht 0 ist.</p>
<p>Bei einem Polynom in einer Variablen, P(x) = aₙxⁿ + … + a₁x + a₀, berechnet man den <b>Funktionswert</b> P(k) durch Einsetzen von x = k. Ist P(k) = 0, dann ist k eine <b>Nullstelle</b> des Polynoms (eine Lösung der Gleichung P(x) = 0): Das ist die Verbindung zu den Gleichungen.</p>`
    },
    {
      type: "text",
      title: "Rechenoperationen mit Polynomen",
      html: `<p><b>Summe und Differenz</b>: Man löst die Klammern auf (und kehrt die Vorzeichen um, wenn ein Minus davorsteht) und fasst die ähnlichen Glieder zusammen.</p>
<p>(3x² − 2x + 1) − (x² − 5x − 4) = 3x² − 2x + 1 − x² + 5x + 4 = <b>2x² + 3x + 5</b>.</p>
<p><b>Produkt eines Monoms mit einem Polynom</b> (Distributivgesetz): 2x · (3x² − x + 4) = 6x³ − 2x² + 8x.</p>
<p><b>Produkt zweier Polynome</b>: Man multipliziert <b>jedes Glied des ersten mit jedem Glied des zweiten</b> und fasst dann die ähnlichen zusammen.</p>
<p>(x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = <b>2x² + x − 15</b>.</p>
<p>Der Grad des Produkts ist die <b>Summe</b> der Grade (bei Koeffizienten ungleich null): 1 + 1 = 2. Die Anzahl der auszuführenden Teilprodukte ist das Produkt der Gliederzahlen: 2 × 2 = 4.</p>
<p><b>Quotient eines Polynoms durch ein Monom</b>: Man dividiert jedes Glied: (6x³ − 9x² + 3x) : (3x) = 2x² − 3x + 1.</p>
<p>Die <b>Division zweier Polynome</b> ist komplizierter: Zu gegebenen A(x) (Dividend) und B(x) (Divisor, ungleich null) gibt es zwei Polynome Q(x) (Quotient) und R(x) (Rest), wobei der Grad von R kleiner ist als der Grad von B, mit <b>A = B · Q + R</b>. Ist R = 0, ist das Polynom <b>teilbar</b>. Das Verfahren (ähnlich der schriftlichen Division von Zahlen) und das Horner-Schema (die Regel von Ruffini) kommen in der Lektion über die Faktorisierung vor.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Die Fläche eines wachsenden Gartens",
      html: `<p>Ein rechteckiger Garten hat die Seiten x und x + 4 Meter. Du verbreiterst jede Seite um 2 m. Um wie viel wächst die Fläche?</p>
<ol>
<li>Anfangsfläche: x(x + 4) = x² + 4x.</li>
<li>Neue Seiten: (x + 2) und (x + 6). Fläche: (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12.</li>
<li>Zuwachs: (x² + 8x + 12) − (x² + 4x) = <b>4x + 12</b> m².</li>
</ol>
<p>Für x = 10 m: ursprünglicher Garten 10 × 14 = 140 m²; neuer 12 × 16 = 192 m²; Zuwachs 52 m². Probe: 4·10 + 12 = 52 ✔. Eine einzige Formel beschreibt alle möglichen Gärten: Das ist die Stärke des Buchstabenrechnens.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Monome und Polynome",
      questions: [
        { type: "mc", q: "Welchen Gesamtgrad hat das Monom −7a²b³c?", options: ["3", "6", "7"], answer: 1, explain: "Man addiert die Exponenten: 2 + 3 + 1 = 6." },
        { type: "num", q: "Berechne den Koeffizienten des Monoms (−2x²y)·(3xy³) · (1/6).", answer: -1, explain: "(−2)·3·(1/6) = −1: Das Monom ist −x³y⁴." },
        { type: "num", q: "Das Polynom 5x³ − 2x + x⁴ − 7 hat den Grad …", answer: 4, explain: "Das Glied mit dem höchsten Grad ist x⁴." },
        { type: "num", q: "Wie viele Glieder hat das nicht vereinfachte Produkt (a + b + c)(x + y), bevor man ähnliche Glieder zusammenfasst?", answer: 6, explain: "Jedes Glied des ersten (3) mit jedem Glied des zweiten (2): 3 × 2 = 6." }
      ]
    },
    {
      type: "svg",
      title: "(a + b)² ist nicht a² + b²",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="30" width="170" height="170" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="3"/>
<rect x="230" y="30" width="70" height="170" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="60" y="200" width="170" height="70" fill="#fde68a" stroke="#b45309" stroke-width="3"/>
<rect x="230" y="200" width="70" height="70" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="145" y="122" font-size="26" text-anchor="middle" fill="#1e3a8a" font-weight="bold">a²</text>
<text x="265" y="122" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="145" y="242" font-size="22" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="265" y="242" font-size="22" text-anchor="middle" fill="#14532d" font-weight="bold">b²</text>
<text x="145" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="265" y="22" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="40" y="120" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text>
<text x="40" y="240" font-size="18" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text>
<text x="330" y="100" font-size="20" fill="#1f2937" font-weight="bold">(a + b)² = a² + 2ab + b²</text>
<text x="330" y="140" font-size="17" fill="#475569">Das große Quadrat zerfällt in:</text>
<text x="330" y="168" font-size="17" fill="#1d4ed8">ein Quadrat mit Seite a (a²),</text>
<text x="330" y="194" font-size="17" fill="#15803d">ein Quadrat mit Seite b (b²),</text>
<text x="330" y="220" font-size="17" fill="#b45309">und zwei Rechtecke a × b (2ab).</text>
</svg>`,
      caption: "Das „doppelte Produkt“ 2ab ist genau die Fläche der beiden übrig bleibenden Rechtecke: Es zu vergessen ist der häufigste Fehler."
    },
    {
      type: "text",
      title: "Die Binomischen Formeln und weitere bemerkenswerte Produkte",
      html: `<p>Manche Produkte von Polynomen kommen so oft vor, dass es sich lohnt, das Ergebnis zu kennen:</p>
<table>
<tr><th>Name</th><th>Formel</th></tr>
<tr><td><b>Quadrat eines Binoms</b></td><td>(a + b)² = a² + 2ab + b² &nbsp;&nbsp; (a − b)² = a² − 2ab + b²</td></tr>
<tr><td><b>Summe mal Differenz</b></td><td>(a + b)(a − b) = a² − b²</td></tr>
<tr><td><b>Quadrat eines Trinoms</b></td><td>(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td></tr>
<tr><td><b>Kubus eines Binoms</b></td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³ &nbsp;&nbsp; (a − b)³ = a³ − 3a²b + 3ab² − b³</td></tr>
<tr><td><b>Summe und Differenz von Kuben (zum Faktorisieren)</b></td><td>(a + b)(a² − ab + b²) = a³ + b³ &nbsp;&nbsp; (a − b)(a² + ab + b²) = a³ − b³</td></tr>
</table>
<p>Das Quadrat eines Binoms merkt man sich mit dem Satz: „das Quadrat des ersten, plus das Doppelte des Produkts, plus das Quadrat des zweiten“. Das Vorzeichen des doppelten Produkts ist das des Binoms; die anderen beiden Glieder sind immer positiv.</p>
<p>Beispiele:</p>
<ul>
<li>(2x + 3y)² = 4x² + 12xy + 9y²;</li>
<li>(5a − 1)² = 25a² − 10a + 1;</li>
<li>(3x + 2)(3x − 2) = 9x² − 4;</li>
<li>(x − 2)³ = x³ − 6x² + 12x − 8.</li>
</ul>
<p><b>Fürs Kopfrechnen</b>: 51² = (50 + 1)² = 2500 + 100 + 1 = 2601; 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499; 99² = (100 − 1)² = 10 000 − 200 + 1 = 9801.</p>
<p><b>Koeffizienten der Potenzen eines Binoms</b>: (a + b)ⁿ hat als Koeffizienten die Zeile n des <b>Pascalschen Dreiecks</b> (in Italien nach Tartaglia benannt; in China nach Yang Hui): Jede Zahl ist die Summe der beiden darüber.</p>
<p style="text-align:center;font-family:monospace;line-height:1.6">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>
<p>Also ist (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴ und (a + b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵.</p>`
    },
    {
      type: "example",
      title: "Beispiel: Von einem Fehler zu einem Beweis",
      html: `<p>Ein klassischer Fehler: (x + 3)² = x² + 9. Für x = 2 ergäbe das 4 + 9 = 13, aber (2 + 3)² = 25. Dieselbe Rechnung mit der richtigen Formel: x² + 6x + 9 = 4 + 12 + 9 = 25 ✔.</p>
<p>Das Buchstabenrechnen dient auch zum <b>Beweisen</b>. Zum Beispiel: Die Differenz der Quadrate zweier aufeinanderfolgender Zahlen n und n + 1 ist immer ungerade.</p>
<ol>
<li>(n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.</li>
<li>2n + 1 ist per Definition eine ungerade Zahl. ∎</li>
</ol>
<p>Probe: 5² − 4² = 25 − 16 = 9, das ist ungerade. Jetzt wissen wir aber, dass es für <i>alle</i> aufeinanderfolgenden Zahlen gilt, nicht nur für die ausprobierten.</p>`
    },
    {
      type: "curiosity",
      title: "Al-Chwarizmi und die „quadratische Ergänzung“",
      html: `<p>Der persische Mathematiker Muhammad ibn Musa al-Chwarizmi (ca. 780–850), der am Haus der Weisheit in Bagdad arbeitete, schrieb um 820 die Abhandlung <i>al-Kitab al-mukhtasar fi hisab al-jabr wa-l-muqabala</i> („Das kurzgefasste Buch über das Rechnen durch Ergänzen und Ausgleichen“). Vom Wort <i>al-jabr</i> stammt das Wort <b>Algebra</b>, und von seinem Namen das Wort <b>Algorithmus</b>. Al-Chwarizmi löste quadratische Gleichungen mit geometrischen Figuren, indem er ein fehlendes kleines Quadrat hinzufügte, um ein Quadrat zu „ergänzen“: Das war genau das Quadrat eines Binoms (a + b)² = a² + 2ab + b², geometrisch gelesen. Auch Euklid beweist im Buch II der <i>Elemente</i> (ca. 300 v. Chr.) die Identität für das Quadrat eines Binoms mit Figuren.</p>`
    },
    {
      type: "curiosity",
      title: "Warum „Monom“ und „Polynom“?",
      html: `<p>Die Wörter stammen aus dem Griechischen: <i>monos</i> (nur einer), <i>polys</i> (viele) und aus dem Lateinischen <i>nomen</i> (Name, Glied). „Monom“ bedeutet also „ein einziges Glied“, „Polynom“ „viele Glieder“, „Binom“ „zwei Glieder“. Der Begriff <i>Polynom</i> verbreitete sich im Europa des 16. Jahrhunderts, in der Zeit, als italienische Mathematiker wie Cardano, Tartaglia und Ferrari die Lösungsformeln für Gleichungen dritten und vierten Grades fanden. Ein Wettstreit zwischen Tartaglia und Antonio Maria Fior im Jahr 1535 über Gleichungen dritten Grades ist eine der berühmtesten mathematischen Herausforderungen der Geschichte.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Polynome zu multiplizieren",
      intro: "Jedes Glied mit jedem Glied zu multiplizieren ist leicht gesagt, aber leicht falsch gemacht. Hier sind alternative Methoden, die in anderen Ländern verwendet werden.",
      tabs: [
        {
          label: "🔲 Die Tabellenmethode (Box)",
          html: `<p>Viele Lehrkräfte in angelsächsischen Ländern verwenden die <b>Flächentabelle</b>: Du schreibst die Glieder des einen Polynoms in die Zeilen, die des anderen in die Spalten und füllst jede Zelle mit dem Produkt. Dann addierst du die ähnlichen Zellen.</p>
<p>(x + 3)(2x − 5):</p>
<table>
<tr><th></th><th>2x</th><th>−5</th></tr>
<tr><th>x</th><td>2x²</td><td>−5x</td></tr>
<tr><th>+3</th><td>6x</td><td>−15</td></tr>
</table>
<p>Summe: 2x² + (−5x + 6x) − 15 = <b>2x² + x − 15</b>. Die Methode verhindert, dass man Produkte auslässt, und macht deutlich, warum es so viele Teilprodukte gibt wie Zeilen × Spalten.</p>`
        },
        {
          label: "📐 Das gezeichnete Quadrat",
          html: `<p>Zeichne ein Quadrat mit der Seitenlänge a + b und teile es wie in der Abbildung: Die Gesamtfläche (a + b)² ist die Summe der vier Teile a², ab, ab, b². Dieser geometrische Beweis war schon Euklid bekannt. Mit dem Widget unten baust du ein 5 × 5-Quadrat: Es ist (3 + 2)² und zerfällt in 3² + 3·2 + 2·3 + 2² = 9 + 6 + 6 + 4 = 25 Kästchen.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 5, max: 12 }
        },
        {
          label: "🧊 Der Kubus eines Binoms",
          html: `<p>(a + b)³ ist das Volumen eines Würfels mit der Kantenlänge a + b. Mit a = 3 und b = 2 enthält der Würfel mit Kantenlänge 5 insgesamt 125 Einheitswürfel, die sich aufteilen in: einen großen Würfel a³ = 27, drei Platten a²b (3·9·2 = 54), drei Stäbe ab² (3·3·4 = 36) und einen kleinen Würfel b³ = 8. Summe: 27 + 54 + 36 + 8 = 125 ✔. Drehe das 3D-Modell und zähle die Würfelchen.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 5, b: 5, c: 5 }
        },
        {
          label: "🔢 Mit Zahlen (zerlegen und multiplizieren)",
          html: `<p>Das Produkt von Polynomen ist eine Erweiterung der schriftlichen Multiplikation. Denke an 23 × 14: Das ist (2·10 + 3)(1·10 + 4). Das Produkt (2x + 3)(x + 4) mit x = 10 ergibt genau dieselbe Rechnung: 2x² + 11x + 12 → 200 + 110 + 12 = 322. Das Polynom ist wie eine „Zahl zur Basis x“, und Polynome zu multiplizieren ist wie schriftlich zu multiplizieren, nur ohne Überträge.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Buchstabenrechnens",
      nodes: [
        { id: "letterale", label: "Buchstabenrechnen", x: 50, y: 6, color: "#64748b", html: "Buchstaben statt Zahlen verwenden.", why: "Viète (1591) führte Buchstaben für beliebige Zahlen ein und ging damit von der Algebra der Einzelfälle zu der der allgemeinen Regeln über. Descartes (1637) legte die moderne Konvention fest." },
        { id: "monomio", label: "Monom", x: 20, y: 28, color: "#2563eb", html: "Koeffizient × Buchstabenteil; Grad = Summe der Exponenten.", why: "Es ist das „Atom“ des Buchstabenrechnens. Zum Addieren braucht man Ähnlichkeit (gleicher Buchstabenteil), weil die Buchstaben für verschiedene Zahlen stehen und man sie nicht „mischen“ kann." },
        { id: "polinomio", label: "Polynom", x: 80, y: 28, color: "#16a34a", html: "Algebraische Summe von Monomen.", why: "Flächen und Volumina sind Polynome in den Seitenlängen. Später wird es der Weg sein, jede Funktion anzunähern (Taylor-Polynome)." },
        { id: "proprieta", label: "Rechengesetze", x: 50, y: 50, color: "#f59e0b", html: "Kommutativ-, Assoziativ-, Distributivgesetz.", why: "Es sind dieselben wie in ℤ und ℚ: Jede Buchstabenformel gilt, weil sie für Zahlen gilt. Deshalb kann man (a + b)² immer als (a + b)(a + b) ausmultiplizieren." },
        { id: "prodotto", label: "Produkt von Polynomen", x: 18, y: 68, color: "#9333ea", html: "Jedes Glied mit jedem Glied.", why: "Es ist das zweimal angewandte Distributivgesetz: (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd." },
        { id: "notevoli", label: "Binomische Formeln", x: 55, y: 80, color: "#ef4444", html: "Quadrat eines Binoms, Summe mal Differenz, Kubus.", why: "Man beweist sie mit dem Distributivgesetz und liest sie an geometrischen Figuren ab (Euklid, Buch II; al-Chwarizmi). Sie dienen dazu, Rechnungen zu vereinfachen und zu faktorisieren." },
        { id: "tartaglia", label: "Pascalsches Dreieck", x: 85, y: 62, color: "#0ea5e9", html: "Koeffizienten von (a + b)ⁿ.", why: "Jeder Koeffizient zählt, auf wie viele Arten man aus jeder Klammer a oder b wählt: Es ist ein Binomialkoeffizient, und jede Zahl ist die Summe der beiden darüber, weil (a + b)ⁿ = (a + b)(a + b)ⁿ⁻¹." },
        { id: "applicazioni", label: "Beweise und Probleme", x: 82, y: 92, color: "#22c55e", html: "Allgemeine Wahrheiten, Flächen, Volumina, Gleichungen.", why: "Mit Buchstaben beweist man, dass eine Aussage für alle Zahlen gilt. Das ist der Schritt, der die Mathematik von der Arithmetik trennt." }
      ],
      edges: [["letterale", "monomio", "Bausteine"], ["letterale", "polinomio", "bestehen aus"], ["monomio", "polinomio", "Summe von"], ["proprieta", "prodotto", "garantieren"], ["polinomio", "prodotto", "Operation"], ["prodotto", "notevoli", "häufige Fälle"], ["notevoli", "tartaglia", "verallgemeinert durch"], ["notevoli", "applicazioni", "verwendet in"]]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Monom = Zahl × Buchstaben. Man <b>addiert</b> nur ähnliche Monome; beim <b>Produkt</b> werden die Exponenten <b>addiert</b>, beim <b>Quotienten</b> <b>subtrahiert</b>.</li>
<li>Grad des Polynoms = höchster Grad seiner Glieder; Grad des Produkts = Summe der Grade.</li>
<li>(a ± b)² = a² ± 2ab + b² — <b>nicht</b> a² ± b².</li>
<li>(a + b)(a − b) = a² − b² (die Differenz der Quadrate).</li>
<li>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³; Koeffizienten aus dem Pascalschen Dreieck.</li>
<li>Um ein Ergebnis zu kontrollieren, setze einfache Werte für die Buchstaben ein.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Binomische Formeln",
      questions: [
        { type: "num", q: "Berechne mit einer Binomischen Formel: 103 · 97.", answer: 9991, explain: "(100 + 3)(100 − 3) = 100² − 3² = 10 000 − 9 = 9991." },
        { type: "mc", q: "Welcher Term ist gleich (x − 4)²?", options: ["x² − 16", "x² − 8x + 16", "x² + 8x + 16"], answer: 1, explain: "Quadrat des ersten, minus das Doppelte des Produkts (2·x·4 = 8x), plus das Quadrat des zweiten (16)." },
        { type: "mc", q: "Welchen Koeffizienten hat a²b in der Entwicklung von (a + b)³?", options: ["1", "3", "6"], answer: 1, explain: "(a + b)³ = a³ + 3a²b + 3ab² + b³: die Zeile 1-3-3-1 des Pascalschen Dreiecks." },
        { type: "tf", q: "(x + y)² ist immer gleich x² + y².", answer: false, explain: "Es fehlt das doppelte Produkt 2xy: Die Gleichheit gilt nur, wenn xy = 0." }
      ]
    }
  ],
  glossary: [
    { t: "Monom", d: "Term, der nur Produkte von Zahlen und Buchstaben (mit natürlichen Exponenten) enthält." },
    { t: "Koeffizient", d: "Der Zahlenteil eines Monoms." },
    { t: "Buchstabenteil", d: "Die Menge der Buchstaben mit ihren Exponenten in einem Monom." },
    { t: "Ähnliche Monome", d: "Monome mit demselben Buchstabenteil." },
    { t: "Grad eines Monoms", d: "Summe der Exponenten der Buchstaben (Gesamtgrad)." },
    { t: "Polynom", d: "Algebraische Summe von Monomen." },
    { t: "Normalform", d: "Schreibweise eines Polynoms ohne ähnliche Glieder und ohne auszuführende Operationen." },
    { t: "Homogenes Polynom", d: "Polynom, dessen Glieder alle denselben Grad haben." },
    { t: "Binomische Formel (bemerkenswertes Produkt)", d: "Produkt von Polynomen mit einem Ergebnis in Standardform, etwa (a + b)²." },
    { t: "Pascalsches Dreieck (Tartaglia-Dreieck)", d: "Tabelle der Binomialkoeffizienten; die Zeile n liefert die Koeffizienten von (a + b)ⁿ." },
    { t: "Nullstelle eines Polynoms", d: "Wert k der Variablen, für den P(k) = 0 gilt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches der folgenden ist kein Monom?", options: ["−5x²y", "3/x", "(2/3)ab"], answer: 1, explain: "Ein Buchstabe im Nenner ist bei Monomen nicht erlaubt: 3/x ist ein Bruchterm." },
      { type: "num", q: "Welchen Gesamtgrad hat 4a³b²c?", answer: 6, explain: "3 + 2 + 1 = 6." },
      { type: "mc", q: "Vereinfache: 7x²y − 3xy² + 2x²y − xy²", options: ["9x²y − 4xy²", "9x²y + 4xy²", "5x²y − 2xy²"], answer: 0, explain: "Ähnliche Glieder: x²y: 7 + 2 = 9; xy²: −3 − 1 = −4." },
      { type: "mc", q: "Wie groß ist (−2a²b)³?", options: ["−8a⁶b³", "−6a⁶b³", "8a⁵b³"], answer: 0, explain: "(−2)³ = −8; (a²)³ = a⁶; b³." },
      { type: "num", q: "Berechne den Wert von 3x² − 2x + 1 für x = −2.", answer: 17, explain: "3·4 − 2·(−2) + 1 = 12 + 4 + 1 = 17." },
      { type: "mc", q: "Multipliziere aus: (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15"], answer: 0, explain: "x² − 5x + 3x − 15 = x² − 2x − 15." },
      { type: "mc", q: "Multipliziere aus: (2a − 3b)².", options: ["4a² − 9b²", "4a² − 12ab + 9b²", "4a² + 12ab + 9b²"], answer: 1, explain: "(2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b²." },
      { type: "num", q: "Berechne mit einer Binomischen Formel: 62². Gib das Ergebnis an.", answer: 3844, explain: "(60 + 2)² = 3600 + 240 + 4 = 3844." },
      { type: "tf", q: "(a + b)(a − b) = a² − 2ab + b².", answer: false, explain: "Summe mal Differenz ergibt a² − b²: Die gemischten Glieder heben sich auf." },
      { type: "order", q: "Bringe die Schritte zum Multiplizieren von (x + 2)(3x − 1) in die richtige Reihenfolge.", items: ["x mit 3x und mit −1 multiplizieren", "2 mit 3x und mit −1 multiplizieren", "Alle Produkte aufschreiben: 3x² − x + 6x − 2", "Ähnliche Glieder zusammenfassen", "Ergebnis: 3x² + 5x − 2"], explain: "Jedes Glied mit jedem Glied, dann werden die ähnlichen addiert: −x + 6x = 5x." },
      { type: "text", q: "Wie heißt das Zahlendreieck (in Italien nach Tartaglia benannt), das die Koeffizienten von (a + b)ⁿ liefert?", answer: ["Pascalsches Dreieck", "Pascal'sches Dreieck", "das Pascalsche Dreieck", "Pascal-Dreieck", "Pascaldreieck", "Dreieck von Pascal", "Tartaglia-Dreieck", "Dreieck von Tartaglia", "Pascal", "Tartaglia", "pascalsches dreieck", "das pascalsche dreieck", "pascal'sches dreieck", "tartaglia-dreieck", "dreieck von pascal", "dreieck von tartaglia", "pascal", "tartaglia"], explain: "In Deutschland heißt es Pascalsches Dreieck, in Italien Triangolo di Tartaglia." }
    ]
  }
});
