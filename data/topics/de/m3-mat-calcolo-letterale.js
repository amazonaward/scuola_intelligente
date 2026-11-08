TOPIC('de', {
  id: "m3-mat-calcolo-letterale",
  title: "Das Rechnen mit Buchstaben (Termumformungen)",
  intro: "Was haben die Formel für den Flächeninhalt des Rechtecks (A = b × h), der Preis von 3 Heften und eine Regel, die für alle Zahlen gilt, gemeinsam? Sie benutzen <b>Buchstaben</b> anstelle von Zahlen. Mit dem <b>Rechnen mit Buchstaben</b> lernen wir, Rechenoperationen mit <b>Monomen</b> und <b>Polynomen</b> auszuführen: Es ist das Eingangstor zur Algebra.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "Warum Buchstaben benutzen?",
      html: `<p>Ein <b>Buchstabe</b> steht in der Mathematik für eine <b>beliebige Zahl</b> (eine <b>Variable</b>) oder für eine Zahl, die wir noch nicht kennen (eine <b>Unbekannte</b>). Er dient dazu,</p>
<ul>
<li>eine Regel zu <b>verallgemeinern</b>: „Die Summe einer Zahl und ihrer Gegenzahl ist 0“ → <b>a + (−a) = 0</b>;</li>
<li><b>Formeln</b> zu schreiben: Umfang des Quadrats <b>U = 4a</b>; Flächeninhalt des Kreises <b>A = πr²</b>;</li>
<li>Aufgaben zu <b>übersetzen</b>: „das Doppelte einer Zahl, vermehrt um 5“ → <b>2x + 5</b>.</li>
</ul>
<p>Ein Ausdruck mit Zahlen und Buchstaben heißt <b>Term</b> (espressione letterale). Wenn du für die Buchstaben Zahlen einsetzt, kannst du seinen <b>Wert</b> berechnen: Für x = 3 ist 2x + 5 = 2·3 + 5 = 11.</p>
<p>Vereinbarungen: Das Zeichen × zwischen Zahl und Buchstabe lässt man weg (2·x = <b>2x</b>), und man schreibt zuerst die Zahl und dann die Buchstaben in alphabetischer Reihenfolge (<b>3ab²</b>, nicht b²3a).</p>`
    },
    {
      type: "text",
      title: "Die Monome",
      html: `<p>Ein <b>Monom</b> ist ein Term, in dem es <b>nur Multiplikationen</b> zwischen Zahlen und Buchstaben gibt (mit natürlichen Exponenten). Beispiele: <b>5x²</b>, <b>−3ab</b>, <b>¾y</b>, <b>7</b>.</p>
<ul>
<li><b>Koeffizient</b>: der Zahlenanteil, mit Vorzeichen (in −3ab ist es −3). Wenn nichts dasteht, ist er 1 (x²y = 1·x²y).</li>
<li><b>Variablenanteil (parte letterale)</b>: die Buchstaben mit ihren Exponenten (in −3ab ist es ab).</li>
<li><b>Grad</b>: die <b>Summe der Exponenten</b> der Buchstaben. 5x²y³ hat den Grad 2 + 3 = <b>5</b>. Eine Zahl allein hat den Grad 0.</li>
</ul>
<p>Zwei Monome sind:</p>
<ul>
<li><b>gleichartig</b> (simili), wenn sie den <b>gleichen Variablenanteil</b> haben: 4x²y und −7x²y;</li>
<li><b>gleich</b>, wenn sie gleichartig sind und denselben Koeffizienten haben;</li>
<li><b>entgegengesetzt</b>, wenn sie gleichartig sind und entgegengesetzte Koeffizienten haben: 3ab und −3ab.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Anatomie eines Monoms",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#f0fdf4"/>
<text x="320" y="130" font-size="78" text-anchor="middle" font-family="serif"><tspan fill="#dc2626">−5</tspan><tspan fill="#2563eb">a</tspan><tspan fill="#2563eb" font-size="42" dy="-34">3</tspan><tspan fill="#2563eb" dy="34">b</tspan><tspan fill="#2563eb" font-size="42" dy="-34">2</tspan></text>
<path d="M210 150 L210 175 L270 175 L270 150" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="240" y="205" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">Koeffizient</text>
<text x="240" y="228" font-size="15" text-anchor="middle" fill="#dc2626">(Zahl mit Vorzeichen)</text>
<path d="M285 150 L285 175 L440 175 L440 150" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="362" y="205" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">Variablenanteil</text>
<text x="362" y="228" font-size="15" text-anchor="middle" fill="#2563eb">a³b²</text>
<rect x="470" y="40" width="150" height="80" rx="10" fill="#a855f7"/>
<text x="545" y="72" font-size="18" text-anchor="middle" fill="#fff" font-weight="bold">Grad</text>
<text x="545" y="100" font-size="20" text-anchor="middle" fill="#fff">3 + 2 = 5</text>
<text x="545" y="150" font-size="14" text-anchor="middle" fill="#6b21a8">Grad bezüglich a: 3</text>
<text x="545" y="170" font-size="14" text-anchor="middle" fill="#6b21a8">Grad bezüglich b: 2</text>
</svg>`,
      caption: "Jedes Monom hat einen Koeffizienten, einen Variablenanteil und einen Grad."
    },
    {
      type: "text",
      title: "Rechnen mit Monomen",
      html: `<ul>
<li><b>Algebraische Summe</b>: Man kann <b>nur gleichartige Monome</b> addieren. Man addiert die Koeffizienten und behält den Variablenanteil: 3x² + 5x² − x² = <b>7x²</b>. Sind sie nicht gleichartig, bleibt die Summe stehen: 2a + 3b lässt sich nicht vereinfachen (es ist kein Monom, sondern ein <b>Polynom</b>).</li>
<li><b>Multiplikation</b>: Man multipliziert die Koeffizienten und multipliziert die Buchstaben, indem man die <b>Exponenten gleicher Buchstaben addiert</b>: (2a²b)·(−3ab³) = <b>−6a³b⁴</b>.</li>
<li><b>Division</b>: Man dividiert die Koeffizienten und <b>subtrahiert die Exponenten</b>: (12x⁵y²) : (4x²y) = <b>3x³y</b>. (Das Ergebnis ist nur dann ein Monom, wenn kein Exponent des Divisors größer ist als der des Dividenden.)</li>
<li><b>Potenz</b>: Man potenziert den Koeffizienten und <b>multipliziert die Exponenten</b>: (−2a³b)² = <b>4a⁶b²</b>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Monome",
      questions: [
        { type: "num", q: "Welchen Grad hat das Monom 7x³y⁴z?", answer: 8, explain: "3 + 4 + 1 = 8 (z hat den Exponenten 1)." },
        { type: "mc", q: "Welches Monom ist gleichartig zu −2ab²?", options: ["5a²b", "9ab²", "−2ab"], answer: 1, explain: "Es hat den gleichen Variablenanteil ab²." },
        { type: "mc", q: "(3x²)·(4x³) = ?", options: ["12x⁵", "12x⁶", "7x⁵"], answer: 0, explain: "3·4 = 12; x²·x³ = x⁵ (die Exponenten werden addiert)." }
      ]
    },
    {
      type: "text",
      title: "Polynome und ihre Rechenoperationen",
      html: `<p>Ein <b>Polynom</b> ist die <b>algebraische Summe von Monomen</b>, die untereinander nicht gleichartig sind (nachdem man es „vereinfacht“ hat). Mit 2 Gliedern ist es ein <b>Binom</b> (a + b), mit 3 ein <b>Trinom</b> (x² + 2x + 1).</p>
<ul>
<li><b>Vereinfachen</b>: Man addiert die gleichartigen Monome: 3x + 2y − x + 5y = <b>2x + 7y</b>.</li>
<li><b>Grad</b> des Polynoms: der <b>größte</b> Grad unter seinen Monomen. x³ + 4x² − 1 hat den Grad 3.</li>
<li><b>Ordnen</b>: Man schreibt die Glieder nach fallenden Potenzen eines Buchstabens.</li>
<li><b>Summe/Differenz</b> von Polynomen: Man löst die Klammern auf (Vorsicht, das − kehrt die Vorzeichen um!) und vereinfacht: (2x + 3) − (x − 5) = 2x + 3 − x + 5 = <b>x + 8</b>.</li>
<li><b>Monom × Polynom</b>: <b>Distributivgesetz</b>: 3a(2a − 4) = <b>6a² − 12a</b>.</li>
<li><b>Polynom × Polynom</b>: Jedes Glied des ersten mal jedes Glied des zweiten: (x + 2)(x + 3) = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b>.</li>
</ul>`
    },
    {
      type: "text",
      title: "Die binomischen Formeln (prodotti notevoli)",
      html: `<p>Manche Produkte begegnen uns so oft, dass man sie sich am besten auswendig merkt:</p>
<ul>
<li><b>Quadrat eines Binoms</b>: (a + b)² = <b>a² + 2ab + b²</b> &nbsp;&nbsp; (a − b)² = <b>a² − 2ab + b²</b></li>
<li><b>Summe mal Differenz</b>: (a + b)(a − b) = <b>a² − b²</b></li>
</ul>
<p>⚠️ Klassischer Fehler: (a + b)² ist <b>nicht</b> a² + b²! Es fehlt das „doppelte Produkt“ 2ab. Prüfe mit Zahlen: (3 + 2)² = 25, aber 3² + 2² = 13.</p>
<p>Trick fürs Kopfrechnen: 21 × 19 = (20 + 1)(20 − 1) = 400 − 1 = <b>399</b>.</p>`
    },
    {
      type: "svg",
      title: "Das Quadrat des Binoms, mit Flächen betrachtet",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#fff7ed"/>
<rect x="60" y="40" width="180" height="180" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<rect x="240" y="40" width="80" height="180" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="60" y="220" width="180" height="80" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="240" y="220" width="80" height="80" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
<text x="150" y="140" font-size="34" text-anchor="middle" fill="#fff" font-weight="bold">a²</text>
<text x="280" y="140" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="150" y="270" font-size="26" text-anchor="middle" fill="#78350f" font-weight="bold">ab</text>
<text x="280" y="270" font-size="26" text-anchor="middle" fill="#fff" font-weight="bold">b²</text>
<text x="150" y="30" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="280" y="30" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="40" y="135" font-size="20" text-anchor="middle" fill="#1f2937">a</text>
<text x="40" y="265" font-size="20" text-anchor="middle" fill="#1f2937">b</text>
<text x="480" y="130" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">(a + b)² =</text>
<text x="480" y="175" font-size="26" text-anchor="middle" fill="#1f2937"><tspan fill="#2563eb">a²</tspan> + <tspan fill="#b45309">2ab</tspan> + <tspan fill="#dc2626">b²</tspan></text>
<text x="480" y="230" font-size="16" text-anchor="middle" fill="#78350f">die beiden gelben Rechtecke</text>
<text x="480" y="252" font-size="16" text-anchor="middle" fill="#78350f">sind das „doppelte Produkt“</text>
</svg>`,
      caption: "Ein Quadrat mit der Seitenlänge a + b teilt sich in ein Quadrat a², ein Quadrat b² und zwei Rechtecke ab. Schon die Griechen wussten das: Es ist der Satz II.4 aus Euklids Elementen."
    },
    {
      type: "example",
      title: "Praxisbeispiel: von der Aufgabe zum Term",
      html: `<p>In der Bar kostet ein Croissant <b>c</b> Euro und ein Cappuccino <b>p</b> Euro. Eine Klasse bestellt 12 Croissants und 9 Cappuccini; die Lehrer 3 Croissants und 4 Cappuccini.</p>
<ul>
<li>Ausgabe der Klasse: <b>12c + 9p</b></li>
<li>Ausgabe der Lehrer: <b>3c + 4p</b></li>
<li>Gesamtausgabe: (12c + 9p) + (3c + 4p) = <b>15c + 13p</b> (man addiert die gleichartigen Monome: Croissants mit Croissants, Cappuccini mit Cappuccini!)</li>
<li>Wenn c = 1,20 € und p = 1,50 €: 15·1,20 + 13·1,50 = 18 + 19,50 = <b>37,50 €</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Beet mit Rand",
      html: `<p>Ein quadratisches Beet hat die Seitenlänge <b>x</b> Meter. Ringsherum wird ein 1 m breiter Kiesrand angelegt: Das neue Quadrat hat die Seitenlänge <b>x + 2</b>.</p>
<ul>
<li>Gesamtfläche: (x + 2)² = <b>x² + 4x + 4</b></li>
<li>Fläche des Kieses = Gesamtfläche − Fläche des Beets = x² + 4x + 4 − x² = <b>4x + 4</b></li>
<li>Wenn x = 5 m: Kies = 4·5 + 4 = <b>24 m²</b>. Probe: 7² − 5² = 49 − 25 = 24 ✔️</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Wer die Buchstaben in der Mathematik erfunden hat",
      html: `<p>Jahrhundertelang wurden Aufgaben <b>mit Worten</b> geschrieben („rhetorische“ Algebra). Der Grieche <b>Diophant</b> (3. Jahrhundert n. Chr.) benutzte die ersten Abkürzungen. Der Franzose <b>François Viète</b> hatte 1591 die Idee, Buchstaben systematisch zu benutzen: Vokale für die Unbekannten, Konsonanten für die bekannten Zahlen. Dann war es <b>Descartes</b>, der in der <i>Géométrie</i> von 1637 die letzten Buchstaben des Alphabets (<b>x, y, z</b>) für die Unbekannten und die ersten (<b>a, b, c</b>) für die bekannten Zahlen wählte: die Vereinbarung, die wir noch heute benutzen!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Der Name „Algebra“",
      html: `<p>Das Wort <b>Algebra</b> kommt vom Arabischen <i>al-dschabr</i>, „wieder einrenken, zusammenfügen“ (derselbe Begriff bezeichnete auch den, der gebrochene Knochen richtete!). Es steht im Titel des Buches des persischen Mathematikers <b>al-Chwarizmi</b>, das um 820 n. Chr. in Bagdad geschrieben wurde. Von seinem Namen leitet sich auch das Wort <b>Algorithmus</b> ab.</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Monom: nur Produkte. Grad = Summe der Exponenten.</li>
<li>Man addiert <b>nur gleichartige Monome</b> (gleicher Variablenanteil).</li>
<li>Produkt: Exponenten werden <b>addiert</b>; Quotient: werden <b>subtrahiert</b>; Potenz: werden <b>multipliziert</b>.</li>
<li>(a + b)² = a² + 2ab + b²; &nbsp;(a + b)(a − b) = a² − b².</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Rechnen mit Buchstaben zu verstehen",
      intro: "Verwirren dich die Buchstaben? Versuche, sie dir als Gegenstände, als Flächen oder als Bausteine vorzustellen.",
      tabs: [
        {
          label: "🍎 Äpfel und Birnen",
          html: `<p>Stell dir vor, <b>x</b> sei ein Apfel 🍎 und <b>y</b> eine Birne 🍐.</p>
<ul>
<li>3x + 2x = 🍎🍎🍎 + 🍎🍎 = <b>5x</b> (5 Äpfel).</li>
<li>3x + 2y = 🍎🍎🍎 + 🍐🍐: Ich kann nicht „5 Apfelbirnen“ sagen! Es bleibt <b>3x + 2y</b>. Darum addiert man nur <b>gleichartige</b> Monome.</li>
<li>Aber Vorsicht: x und x² sind verschiedene Dinge (ein Apfel und eine quadratische Kiste voller Äpfel), also ergibt x + x² <b>nicht</b> 2x³!</li>
</ul>
<p>Der Vergleich funktioniert für Summen und Differenzen; für Multiplikationen nimmt man besser Flächen (nächster Reiter).</p>`
        },
        {
          label: "🇺🇸 Algebra-Plättchen: die Flächen",
          html: `<p>In den Vereinigten Staaten benutzt man die <b>algebra tiles</b>: ein großes Quadrat = x², ein Rechteck = x, ein Quadrätchen = 1.</p>
<p>Zwei Polynome zu multiplizieren heißt, ein <b>Rechteck</b> mit diesen Seiten zu bauen und die Plättchen zu zählen. (x + 2)(x + 3):</p>
<ul><li>1 Quadrat x², 5 Rechtecke x (2 + 3), 6 Quadrätchen → <b>x² + 5x + 6</b>.</li></ul>
<p>In der Abbildung: Grundseite x + 3, Höhe x + 2. Zähle die Plättchen jeder Farbe!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="60" y="40" width="150" height="150" fill="#60a5fa" stroke="#1e3a8a" stroke-width="3"/>
<text x="135" y="125" font-size="30" text-anchor="middle" fill="#fff" font-weight="bold">x²</text>
<g fill="#4ade80" stroke="#166534" stroke-width="3">
<rect x="210" y="40" width="40" height="150"/><rect x="250" y="40" width="40" height="150"/><rect x="290" y="40" width="40" height="150"/>
<rect x="60" y="190" width="150" height="40"/><rect x="60" y="230" width="150" height="40"/>
</g>
<g fill="#facc15" stroke="#854d0e" stroke-width="3">
<rect x="210" y="190" width="40" height="40"/><rect x="250" y="190" width="40" height="40"/><rect x="290" y="190" width="40" height="40"/>
<rect x="210" y="230" width="40" height="40"/><rect x="250" y="230" width="40" height="40"/><rect x="290" y="230" width="40" height="40"/>
</g>
<text x="135" y="30" font-size="18" text-anchor="middle">x</text><text x="270" y="30" font-size="18" text-anchor="middle">+ 3</text>
<text x="40" y="120" font-size="18" text-anchor="middle">x</text><text x="40" y="235" font-size="18" text-anchor="middle">+2</text>
<text x="460" y="110" font-size="22" text-anchor="middle" fill="#1e3a8a">1 × x²</text>
<text x="460" y="150" font-size="22" text-anchor="middle" fill="#166534">5 × x</text>
<text x="460" y="190" font-size="22" text-anchor="middle" fill="#854d0e">6 × 1</text>
<text x="460" y="240" font-size="22" text-anchor="middle" fill="#1f2937" font-weight="bold">x² + 5x + 6</text>
</svg>`
        },
        {
          label: "🧊 Monome in 3D",
          html: `<p>Ein Monom vom <b>Grad 3</b> wie <b>abc</b> ist das <b>Volumen</b> einer Schachtel mit den Kanten a, b, c. Ein Monom vom Grad 2 (ab) ist eine Fläche, eines vom Grad 1 (a) eine Länge. Darum hängen „Grad“ und „Dimensionen“ zusammen!</p>
<p>Ändere die Maße: Wenn a = 4, b = 3, c = 2, ist das Volumen 4·3·2 = 24 Würfelchen. Wenn du nur a verdoppelst, verdoppelt sich das Volumen; wenn du alle drei verdoppelst, wird es 2³ = 8-mal so groß: (2a)(2b)(2c) = 8abc.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 3, c: 2 }
        },
        {
          label: "📐 Das wachsende Rechteck",
          html: `<p>Ein Rechteck mit der Grundseite <b>b</b> und der Höhe <b>h</b> hat den Flächeninhalt <b>bh</b> und den Umfang <b>2b + 2h</b>: zwei Polynome! Benutze das Widget: Vergrößere die Grundseite um 1. Der Flächeninhalt wächst um <b>h</b> (eine Spalte aus Kästchen) und der Umfang um <b>2</b>. In Buchstaben: (b + 1)h = bh + h.</p>`,
          widget: "areaGrid",
          options: { w: 5, h: 3, max: 12 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Rechnens mit Buchstaben",
      nodes: [
        { id: "lettere", label: "Buchstaben statt Zahlen", x: 50, y: 6, color: "#64748b", html: "Variablen und Unbekannte, die Zahlen darstellen.", why: "Von der „rhetorischen“ Algebra in Worten (Babylonier, al-Chwarizmi) ging man zur „synkopierten“ (Diophant) und dann zur „symbolischen“ mit Viète (1591) und Descartes (1637) über. Buchstaben erlauben es, Regeln zu schreiben, die für alle Zahlen gelten." },
        { id: "monomio", label: "Monom", x: 25, y: 28, color: "#2563eb", html: "Produkt aus einem Koeffizienten und Buchstaben mit natürlichen Exponenten.", why: "Vom griechischen <i>mónos</i>, „allein“, und <i>nómos</i>, „Teil“: ein einziges Glied. Es ist der „Baustein“ aller algebraischen Terme." },
        { id: "polinomio", label: "Polynom", x: 75, y: 28, color: "#16a34a", html: "Algebraische Summe von Monomen.", why: "Vom griechischen <i>polýs</i>, „viele“: viele Glieder. Jede im Zehnersystem geschriebene Zahl ist im Grunde ein Polynom: 345 = 3·10² + 4·10 + 5." },
        { id: "grado", label: "Grad", x: 10, y: 52, color: "#a855f7", html: "Summe der Exponenten (Monom) oder größter Grad (Polynom).", why: "Er verbindet die Algebra mit der Geometrie: Grad 1 = Länge, 2 = Fläche, 3 = Volumen. Die Griechen nannten x² daher „Quadrat“ und x³ „Würfel“." },
        { id: "simili", label: "Gleichartige Monome", x: 38, y: 52, color: "#f59e0b", html: "Gleicher Variablenanteil: Man kann sie addieren.", why: "Es ist das Distributivgesetz rückwärts: 3x + 5x = (3 + 5)x = 8x. Sind die Variablenanteile verschieden, gibt es keinen gemeinsamen Faktor zum Ausklammern." },
        { id: "potenze", label: "Potenzgesetze", x: 62, y: 52, color: "#ef4444", html: "aᵐ·aⁿ = aᵐ⁺ⁿ; aᵐ:aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ.", why: "Sie folgen aus der Definition der Potenz als wiederholte Multiplikation: a²·a³ = (a·a)·(a·a·a) = a⁵. Schon Nicolas Chuquet benutzte sie 1484; die Schreibweise mit hochgestelltem Exponenten geht auf Descartes zurück." },
        { id: "distributiva", label: "Distributivgesetz", x: 88, y: 52, color: "#0ea5e9", html: "a(b + c) = ab + ac: um Polynome zu multiplizieren.", why: "Es ist eine Eigenschaft der Zahlen, die man mit Flächen gut sieht: Ein Rechteck mit der Grundseite b + c und der Höhe a teilt sich in zwei Rechtecke ab und ac." },
        { id: "notevoli", label: "Binomische Formeln", x: 75, y: 80, color: "#14b8a6", html: "(a + b)² = a² + 2ab + b²; (a + b)(a − b) = a² − b².", why: "Euklid bewies sie mit Figuren in den Elementen (Buch II, um 300 v. Chr.), ohne algebraische Buchstaben: Für ihn waren es Eigenschaften von Quadraten und Rechtecken." },
        { id: "equazioni", label: "Auf dem Weg zu den Gleichungen", x: 30, y: 85, color: "#7c3aed", html: "Das Rechnen mit Buchstaben dient dazu, Gleichungen zu lösen und Formeln zu benutzen.", why: "Um eine Unbekannte zu finden, muss man Terme vereinfachen können: Das ist der nächste Schritt der Algebra." }
      ],
      edges: [
        ["lettere", "monomio", "bilden"],
        ["monomio", "polinomio", "addiert ergeben"],
        ["monomio", "grado", "hat einen"],
        ["monomio", "simili", "können sein"],
        ["monomio", "potenze", "werden multipliziert mit"],
        ["polinomio", "distributiva", "werden multipliziert mit"],
        ["distributiva", "notevoli", "Sonderfälle"],
        ["polinomio", "equazioni", "werden gebraucht für"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Polynome",
      questions: [
        { type: "mc", q: "Vereinfache: 4a + 3b − a + 2b", options: ["3a + 5b", "8ab", "5a + 5b"], answer: 0, explain: "4a − a = 3a; 3b + 2b = 5b." },
        { type: "mc", q: "(x + 5)² = ?", options: ["x² + 25", "x² + 10x + 25", "x² + 5x + 25"], answer: 1, explain: "Quadrat des Binoms: x² + 2·5·x + 25." },
        { type: "num", q: "Wie viel ist 31 × 29 mit „Summe mal Differenz“?", answer: 899, explain: "(30 + 1)(30 − 1) = 900 − 1 = 899." }
      ]
    }
  ],
  glossary: [
    { t: "Espressione letterale (Term)", d: "Ausdruck mit Zahlen und Buchstaben, verbunden durch Rechenoperationen." },
    { t: "Monomio (Monom)", d: "Term mit nur Multiplikationen zwischen Zahlen und Buchstaben." },
    { t: "Coefficiente (Koeffizient)", d: "Der Zahlenanteil eines Monoms, mit Vorzeichen." },
    { t: "Parte letterale (Variablenanteil)", d: "Die Buchstaben eines Monoms mit ihren Exponenten." },
    { t: "Grado (Grad)", d: "Summe der Exponenten der Buchstaben eines Monoms; bei einem Polynom der größte Grad seiner Glieder." },
    { t: "Monomi simili (gleichartige Monome)", d: "Monome mit dem gleichen Variablenanteil." },
    { t: "Polinomio (Polynom)", d: "Algebraische Summe von Monomen (Binom: 2 Glieder; Trinom: 3)." },
    { t: "Prodotti notevoli (binomische Formeln)", d: "Produkte mit bekanntem Ergebnis, wie das Quadrat des Binoms und Summe mal Differenz." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welchen Koeffizienten hat −x²y?", options: ["1", "−1", "2"], answer: 1, explain: "Wenn nur das Minuszeichen dasteht, ist der Koeffizient −1." },
      { type: "num", q: "Grad des Polynoms 3x⁴ − 2x²y³ + 5", answer: 5, explain: "Die Grade der Glieder sind 4, 5 und 0: Das Maximum ist 5." },
      { type: "mc", q: "5ab − 8ab = ?", options: ["−3ab", "3ab", "−3a²b²"], answer: 0, explain: "Gleichartige Monome: 5 − 8 = −3." },
      { type: "mc", q: "(−2x³)·(5x²y) = ?", options: ["−10x⁵y", "10x⁶y", "3x⁵y"], answer: 0, explain: "−2·5 = −10; x³·x² = x⁵; y bleibt." },
      { type: "mc", q: "(18a⁶b³) : (6a²b) = ?", options: ["3a³b³", "3a⁴b²", "12a⁴b²"], answer: 1, explain: "18 : 6 = 3; a⁶⁻² = a⁴; b³⁻¹ = b²." },
      { type: "mc", q: "(3a²)³ = ?", options: ["9a⁵", "27a⁶", "27a⁵"], answer: 1, explain: "3³ = 27; (a²)³ = a⁶." },
      { type: "tf", q: "(a + b)² = a² + b²", answer: false, explain: "Es fehlt das doppelte Produkt: (a + b)² = a² + 2ab + b²." },
      { type: "mc", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16"], answer: 0, explain: "Summe mal Differenz: x² − 4² = x² − 16." },
      { type: "num", q: "Berechne den Wert von 2x² − 3x + 1 für x = 3.", answer: 10, explain: "2·9 − 9 + 1 = 18 − 9 + 1 = 10." },
      { type: "mc", q: "Das Dreifache einer Zahl, vermindert um 7, schreibt man …", options: ["3(x − 7)", "3x − 7", "x³ − 7"], answer: 1, explain: "Zuerst das Dreifache (3x), dann zieht man 7 ab." },
      { type: "mc", q: "2a(3a − 5) = ?", options: ["6a² − 10a", "6a − 10", "5a² − 10a"], answer: 0, explain: "Distributivgesetz: 2a·3a − 2a·5." },
      { type: "text", q: "Wie nennt man ein Polynom aus zwei Gliedern?", answer: ["binom", "ein binom", "binomio", "un binomio"], explain: "Binom (bi = zwei)." }
    ],
    gen: [["power", 2]]
  }
});
