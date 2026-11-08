TOPIC('de', {
  id: "m2-mat-frazioni-decimali",
  title: "Brüche und Dezimalzahlen",
  intro: "Jeder Bruch ist eine <b>Division</b>, die darauf wartet, ausgeführt zu werden. Wenn du sie ausrechnest, erhältst du eine <b>Dezimalzahl</b>: Manchmal hört sie auf (3/4 = 0,75), manchmal geht sie unendlich weiter und wiederholt immer dieselben Ziffern (1/3 = 0,333 …). Wir entdecken, <b>wann</b> das geschieht, <b>warum</b> und wie man von der Dezimalzahl mit dem <b>erzeugenden Bruch</b> zum Bruch zurückkommt.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Vom Bruch zur Dezimalzahl",
      html: `<p>Der Bruchstrich bedeutet <b>„geteilt“</b>: <b>a/b = a : b</b>.</p>
<p>Um einen Bruch in eine Dezimalzahl zu verwandeln, genügt es, den Zähler durch den Nenner zu teilen:</p>
<ul>
<li>3/4 = 3 : 4 = <b>0,75</b> → die Division <b>endet</b> (Rest 0): <b>endliche Dezimalzahl</b> (oder abbrechende);</li>
<li>1/3 = 1 : 3 = 0,3333 … → der Rest wird nie 0 und die Ziffern wiederholen sich: <b>unendliche periodische Dezimalzahl</b>.</li>
</ul>
<p>Die Ziffern, die sich wiederholen, bilden die <b>Periode</b>; man schreibt sie mit einem Strich darüber oder in Klammern: 0,333 … = <b>0,(3)</b> = 0,3̅.</p>`
    },
    {
      type: "text",
      title: "Drei Arten von Dezimalzahlen",
      html: `<table>
<tr><th>Art</th><th>Beispiel</th><th>Wie sie aufgebaut ist</th></tr>
<tr><td><b>Endliche Dezimalzahl</b></td><td>7/8 = 0,875</td><td>eine endliche Zahl von Ziffern nach dem Komma</td></tr>
<tr><td><b>Reinperiodisch</b> (einfach periodisch)</td><td>2/3 = 0,(6)<br>5/11 = 0,(45)</td><td>die Periode beginnt <b>sofort</b> nach dem Komma</td></tr>
<tr><td><b>Gemischtperiodisch</b></td><td>1/6 = 0,1(6)<br>7/12 = 0,58(3)</td><td>zwischen dem Komma und der Periode stehen Ziffern, die sich nicht wiederholen: die <b>Vorperiode</b></td></tr>
</table>
<p>In einer Zahl wie <b>2,1(36)</b>: <b>2</b> ist der ganzzahlige Teil, <b>1</b> ist die Vorperiode, <b>36</b> ist die Periode.</p>`
    },
    {
      type: "remember",
      title: "Die Regel des Nenners",
      html: `<p>Bevor du die Division ausführst, kannst du die Art der Dezimalzahl schon <b>vorhersagen</b>! Kürze den Bruch vollständig und zerlege den Nenner in Primfaktoren:</p>
<ul>
<li>nur die Faktoren <b>2</b> und/oder <b>5</b> → <b>endliche Dezimalzahl</b> (z. B. 3/20, weil 20 = 2² × 5);</li>
<li><b>kein</b> Faktor 2 oder 5 → <b>reinperiodisch</b> (z. B. 4/7, 5/9, 2/33);</li>
<li>die Faktoren 2 und/oder 5 <b>zusammen</b> mit anderen → <b>gemischtperiodisch</b> (z. B. 5/6, weil 6 = 2 × 3).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Warum 2 und 5?",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<rect x="30" y="30" width="250" height="110" rx="14" fill="#16a34a"/>
<text x="155" y="65" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">10 = 2 × 5</text>
<text x="155" y="95" font-size="16" fill="#dcfce7" text-anchor="middle">die Zehnerpotenzen enthalten</text>
<text x="155" y="118" font-size="16" fill="#dcfce7" text-anchor="middle">nur die Faktoren 2 und 5</text>
<rect x="320" y="30" width="250" height="110" rx="14" fill="#2563eb"/>
<text x="445" y="62" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">3/20 = 15/100</text>
<text x="445" y="92" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">= 0,15 ✓</text>
<text x="445" y="120" font-size="14" fill="#dbeafe" text-anchor="middle">20 = 2²×5 → es genügt ×5</text>
<rect x="30" y="165" width="540" height="110" rx="14" fill="#dc2626"/>
<text x="300" y="200" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">1/3 = ?/10 = ?/100 = ?/1000 …</text>
<text x="300" y="232" font-size="16" fill="#fee2e2" text-anchor="middle">keine Zehnerpotenz ist durch 3 teilbar:</text>
<text x="300" y="258" font-size="16" fill="#fee2e2" text-anchor="middle">die Division hört nie auf → 0,333 …</text>
</svg>`,
      caption: "Ein Bruch ist nur dann eine endliche Dezimalzahl, wenn man ihn in einen Dezimalbruch (mit Nenner 10, 100, 1000 …) verwandeln kann."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Division, die sich wiederholt",
      html: `<p>Berechnen wir <b>1/7</b> mit der schriftlichen Division und beobachten wir die <b>Reste</b>:</p>
<p>10 : 7 = 1 Rest <b>3</b> → 30 : 7 = 4 Rest <b>2</b> → 20 : 7 = 2 Rest <b>6</b> → 60 : 7 = 8 Rest <b>4</b> → 40 : 7 = 5 Rest <b>5</b> → 50 : 7 = 7 Rest <b>1</b> → es beginnt wieder bei 10!</p>
<p>Ergebnis: <b>1/7 = 0,(142857)</b>, eine Periode mit 6 Ziffern.</p>
<p><b>Warum wiederholt es sich?</b> Beim Teilen durch 7 gibt es nur die möglichen Reste 1, 2, 3, 4, 5, 6: Spätestens nach 6 Schritten muss ein Rest wiederkehren, und von da an wiederholen sich die Ziffern gleich. Allgemein ist beim Teilen durch <i>n</i> die Periode <b>höchstens n − 1</b> Ziffern lang.</p>`
    },
    {
      type: "widget",
      title: "Bruch und Dezimalzahl",
      widget: "fractionPie",
      options: { n: 3, d: 8 },
      caption: "Bewege die Regler: Versuche für jeden Bruch die Dezimalzahl zu berechnen. 3/8 = 0,375. Welche Nenner ergeben endliche Dezimalzahlen?"
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Was für eine Dezimalzahl ist das?",
      questions: [
        { type: "mc", q: "7/25 ist eine …", options: ["endliche Dezimalzahl", "reinperiodische Zahl", "gemischtperiodische Zahl"], answer: 0, explain: "25 = 5²: nur Faktoren 5, also endliche Dezimalzahl (7/25 = 0,28)." },
        { type: "mc", q: "5/6 ist eine …", options: ["endliche Dezimalzahl", "reinperiodische Zahl", "gemischtperiodische Zahl"], answer: 2, explain: "6 = 2 × 3: Es gibt den Faktor 2 zusammen mit der 3 → gemischtperiodisch (0,8(3))." },
        { type: "num", q: "Wie viel ist 3/8 als Dezimalzahl?", answer: 0.375, tol: 0.0001, explain: "3 : 8 = 0,375." }
      ]
    },
    {
      type: "text",
      title: "Von der Dezimalzahl zum Bruch: der erzeugende Bruch",
      html: `<p>Der <b>erzeugende Bruch</b> (<i>frazione generatrice</i>) ist der Bruch, der, wenn man ihn teilt, diese Dezimalzahl „erzeugt“.</p>
<p><b>1. Endliche Dezimalzahl</b>: In den Zähler kommt die Zahl ohne Komma, in den Nenner eine 1 mit so vielen Nullen, wie es Dezimalstellen gibt. Dann kürzen.<br>
0,75 = 75/100 = <b>3/4</b> &nbsp;&nbsp; 2,4 = 24/10 = <b>12/5</b></p>
<p><b>2. Reinperiodisch</b>: In den Zähler kommt die Zahl ohne Komma <b>minus</b> den ganzzahligen Teil; in den Nenner so viele <b>9</b>, wie die Periode Ziffern hat.<br>
0,(3) = 3/9 = <b>1/3</b> &nbsp;&nbsp; 1,(27) = (127 − 1)/99 = 126/99 = <b>14/11</b></p>
<p><b>3. Gemischtperiodisch</b>: In den Zähler kommt die Zahl ohne Komma <b>minus</b> die Zahl aus ganzzahligem Teil und Vorperiode; in den Nenner so viele <b>9</b>, wie die Periode Ziffern hat, gefolgt von so vielen <b>0</b>, wie die Vorperiode Ziffern hat.<br>
0,1(6) = (16 − 1)/90 = 15/90 = <b>1/6</b> &nbsp;&nbsp; 2,3(5) = (235 − 23)/90 = 212/90 = <b>106/45</b></p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Warum gerade die 9er?",
      html: `<p>Nehmen wir <b>x = 0,(45)</b> = 0,454545 …</p>
<ol>
<li>Die Periode hat 2 Ziffern: Ich multipliziere mit 100 → <b>100x = 45,4545 …</b></li>
<li>Ich ziehe x ab: 100x − x = 45,4545 … − 0,4545 … → <b>99x = 45</b> (der unendliche Teil hebt sich auf!)</li>
<li>Also x = 45/99 = <b>5/11</b>.</li>
</ol>
<p>Daher kommen die <b>9er</b>: 100 − 1 = 99. Bei einer Periode mit 3 Ziffern multipliziert man mit 1000 und erhält 999.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Kassenbon und das Geld",
      html: `<p>Drei Freunde müssen eine Rechnung von <b>10 €</b> teilen. Jeder müsste 10/3 € = <b>3,(3) €</b> = 3,333 … € zahlen.</p>
<p>Aber Cent kann man nicht unendlich teilen! Man <b>rundet</b>: Zwei Freunde zahlen 3,33 € und einer 3,34 € (3,33 + 3,33 + 3,34 = 10,00 €).</p>
<p>Bei <b>4 Freunden</b> dagegen: 10/4 = genau 2,5 €, weil 4 = 2² nur den Faktor 2 hat!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? 0,999 … = 1",
      html: `<p>Die Zahl <b>0,(9)</b> = 0,9999 … ist genau gleich <b>1</b>! Mit der Regel des erzeugenden Bruchs: 0,(9) = 9/9 = 1. Oder: 1/3 = 0,(3); mit 3 multipliziert: 3/3 = 0,(9), aber 3/3 = 1. Deshalb benutzt man die Periode 9 nicht: Man schreibt direkt die gerundete Zahl (2,4(9) = 2,5).</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Wer das Komma erfand",
      html: `<p>Die Dezimalzahlen wurden in Europa vom flämischen Mathematiker <b>Simon Stevin</b> im Büchlein <i>De Thiende</i> („Das Zehntel“, <b>1585</b>) verbreitet, aber er schrieb sie mit nummerierten Kreisen über den Ziffern. Die Trennung mit dem Punkt wurde von <b>John Napier</b> 1617 populär gemacht. Noch heute benutzen die angelsächsischen Länder den <b>Punkt</b> (3.14), Italien, Deutschland und ein großer Teil Europas das <b>Komma</b> (3,14).</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, periodische Dezimalzahlen zu verstehen",
      intro: "Wenn dir die Regel mit den 9ern und den Nullen wie Zauberei vorkommt, hier weitere Wege.",
      tabs: [
        {
          label: "🧊 Hundert Würfelchen",
          html: `<p>Hier ist ein Quadrat aus <b>10 × 10 = 100</b> Würfelchen: Der ganze Block ist <b>1</b> wert. Eine Reihe von 10 Würfelchen ist <b>0,1</b> wert (ein Zehntel); ein Würfelchen ist <b>0,01</b> wert (ein Hundertstel).</p>
<p>Probiere: 3/4 des Blocks = 75 Würfelchen = <b>0,75</b>. Aber 1/3 des Blocks? 100 Würfelchen lassen sich nicht in 3 gleiche Teile teilen: 33 Würfelchen für jeden und eines bleibt übrig, das du in immer kleinere Stückchen schneiden müsstest … unendlich weiter: 0,333 …</p>`,
          scene: "blocks",
          options: { mode: "array", a: 10, b: 10 }
        },
        {
          label: "📏 Der Zahlenstrahl mit Zoom",
          html: `<p>Stell dir vor, du suchst 1/3 auf dem Zahlenstrahl mit einer <b>Lupe</b>:</p>
<ul>
<li>zwischen 0 und 1, in Zehntel geteilt, liegt 1/3 zwischen 0,3 und 0,4;</li>
<li>du zoomst zwischen 0,3 und 0,4 in Hundertstel geteilt: Es liegt zwischen 0,33 und 0,34;</li>
<li>du zoomst noch einmal: zwischen 0,333 und 0,334 …</li>
</ul>
<p>Jedes Mal fällt 1/3 an <b>dieselbe Stelle</b> (etwa ein Drittel des Intervalls): Deshalb kommt immer die Ziffer <b>3</b> heraus. Du wirst nie genau auf einem Teilstrich landen!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eef2ff"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#1e1b4b" stroke-width="4"/>
<line x1="40" y1="48" x2="40" y2="72" stroke="#1e1b4b" stroke-width="3"/><line x1="560" y1="48" x2="560" y2="72" stroke="#1e1b4b" stroke-width="3"/>
<line x1="196" y1="50" x2="196" y2="70" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="50" x2="248" y2="70" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="60" r="7" fill="#dc2626"/>
<text x="40" y="35" font-size="16" text-anchor="middle">0</text><text x="560" y="35" font-size="16" text-anchor="middle">1</text>
<text x="196" y="95" font-size="15" text-anchor="middle">0,3</text><text x="248" y="95" font-size="15" text-anchor="middle">0,4</text>
<line x1="196" y1="70" x2="40" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="70" x2="560" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="150" x2="560" y2="150" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="140" x2="196" y2="160" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="140" x2="248" y2="160" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="150" r="7" fill="#dc2626"/>
<text x="40" y="185" font-size="15" text-anchor="middle">0,3</text><text x="560" y="185" font-size="15" text-anchor="middle">0,4</text>
<text x="196" y="185" font-size="15" text-anchor="middle">0,33</text><text x="252" y="185" font-size="15" text-anchor="middle">0,34</text>
<line x1="196" y1="160" x2="40" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/><line x1="248" y1="160" x2="560" y2="230" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="40" y1="240" x2="560" y2="240" stroke="#1e1b4b" stroke-width="4"/>
<line x1="196" y1="230" x2="196" y2="250" stroke="#1e1b4b" stroke-width="3"/><line x1="248" y1="230" x2="248" y2="250" stroke="#1e1b4b" stroke-width="3"/>
<circle cx="213" cy="240" r="7" fill="#dc2626"/>
<text x="40" y="275" font-size="15" text-anchor="middle">0,33</text><text x="560" y="275" font-size="15" text-anchor="middle">0,34</text>
<text x="196" y="275" font-size="15" text-anchor="middle">0,333</text><text x="256" y="275" font-size="15" text-anchor="middle">0,334</text>
<text x="420" y="110" font-size="16" fill="#dc2626" font-weight="bold">● = 1/3</text>
</svg>`
        },
        {
          label: "🇬🇧 Die englische Methode mit Algebra",
          html: `<p>In den angelsächsischen Ländern (und in vielen Schulen der Welt) lernt man nicht die „Regel mit den 9ern und den Nullen“, sondern den algebraischen Trick „<b>multiplizieren und subtrahieren</b>“:</p>
<p>x = 0,1666 … → 10x = 1,666 … und 100x = 16,666 …<br>100x − 10x = 16,666 … − 1,666 … → <b>90x = 15</b> → x = 15/90 = 1/6.</p>
<p>Man verschiebt das Komma so, dass die unendlichen Schwänze <b>gleich</b> sind, und beim Subtrahieren verschwinden sie. Die Regel, die wir lernen, ist nur diese Idee, schon „eingepackt“!</p>`
        },
        {
          label: "🎡 Die Runde der Reste",
          html: `<p>Stell dir die Division durch 7 wie ein <b>Riesenrad</b> mit 6 Gondeln vor (die möglichen Reste 1–6). Jeder Schritt der Division bringt dich zu einer Gondel: 1 → 3 → 2 → 6 → 4 → 5 → wieder 1. Wenn du zur Start-Gondel zurückkommst, beginnt die Runde von vorn und die Ziffern wiederholen sich. Wenn du dagegen bei der Gondel «0» ankommst, bist du ausgestiegen: Die Division ist zu Ende (endliche Dezimalzahl).</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fff7ed"/>
<circle cx="300" cy="150" r="110" fill="none" stroke="#9a3412" stroke-width="5"/>
<circle cx="300" cy="40" r="28" fill="#f97316"/><text x="300" y="47" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">1</text>
<circle cx="395" cy="95" r="28" fill="#fb923c"/><text x="395" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">3</text>
<circle cx="395" cy="205" r="28" fill="#f97316"/><text x="395" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">2</text>
<circle cx="300" cy="260" r="28" fill="#fb923c"/><text x="300" y="267" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">6</text>
<circle cx="205" cy="205" r="28" fill="#f97316"/><text x="205" y="212" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">4</text>
<circle cx="205" cy="95" r="28" fill="#fb923c"/><text x="205" y="102" font-size="20" text-anchor="middle" fill="#fff" font-weight="bold">5</text>
<text x="300" y="145" font-size="18" text-anchor="middle" fill="#7c2d12" font-weight="bold">Reste von 1 : 7</text>
<text x="300" y="170" font-size="16" text-anchor="middle" fill="#7c2d12">Ziffern: 1 4 2 8 5 7</text>
<text x="500" y="60" font-size="15" fill="#7c2d12">eine volle Runde</text>
<text x="500" y="80" font-size="15" fill="#7c2d12">= Periode</text>
</svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte: Brüche und Dezimalzahlen",
      nodes: [
        { id: "fraz", label: "Bruch a/b", x: 50, y: 6, color: "#2563eb", html: "Ein Quotient zweier ganzer Zahlen.", why: "Der Bruch entstand, um Mengen zu teilen; die Schreibweise «a/b» bedeutet genau die Division a : b. Jeder Bruch ist eine <b>rationale Zahl</b> (von <i>ratio</i>, «Verhältnis»)." },
        { id: "div", label: "Division", x: 50, y: 26, color: "#7c3aed", html: "Zähler : Nenner.", why: "Wenn man die schriftliche Division mit Dezimalstellen ausführt, macht man weiter, indem man dem Rest Nullen anhängt. Das ist die indisch-arabische Methode, die mit Fibonacci (1202) nach Europa kam." },
        { id: "lim", label: "Endliche Dezimalzahl", x: 16, y: 50, color: "#16a34a", html: "Hört nach endlich vielen Ziffern auf: 0,75.", why: "Das geschieht, wenn der (gekürzte) Nenner nur die Faktoren 2 und 5 hat, denn dann kann man den Bruch mit dem Nenner 10, 100, 1000 … schreiben, und 10 = 2 × 5." },
        { id: "sempl", label: "Reinperiodisch", x: 50, y: 52, color: "#ea580c", html: "Die Periode beginnt sofort: 0,(3).", why: "Das geschieht, wenn der Nenner weder 2 noch 5 hat. Die Reste wiederholen sich zwangsläufig, weil es nur endlich viele gibt (weniger als der Teiler): Das ist das <b>Schubfachprinzip</b>." },
        { id: "misto", label: "Gemischtperiodisch", x: 84, y: 50, color: "#dc2626", html: "Es gibt eine Vorperiode: 0,1(6).", why: "Der Nenner enthält 2 oder 5 zusammen mit anderen Faktoren: Der Teil «2 und 5» erzeugt die Vorperiode, die anderen Faktoren die Periode." },
        { id: "gen", label: "Erzeugender Bruch", x: 50, y: 76, color: "#0d9488", html: "Der Bruch, aus dem eine Dezimalzahl entsteht.", why: "Man beweist es mit Algebra: Man multipliziert die Zahl mit einer Zehnerpotenz und subtrahiert, so hebt sich der unendliche periodische Teil auf und es bleiben die 9er (z. B. 100x − x = 99x)." },
        { id: "irr", label: "Irrationale Zahlen", x: 84, y: 82, color: "#64748b", html: "Unendliche NICHT periodische Dezimalzahlen: √2, π.", why: "Sie sind keine Brüche: Sie haben keinen erzeugenden Bruch. Die Pythagoreer entdeckten im 5. Jahrhundert v. Chr., dass die Diagonale des Quadrats (√2) kein Verhältnis ganzer Zahlen ist: Das war ein Schock!" },
        { id: "stevin", label: "Dezimalschreibweise", x: 16, y: 82, color: "#ca8a04", html: "Zahlen mit dem Komma schreiben.", why: "Schon die arabischen Mathematiker (al-Kaschi, 15. Jahrhundert) benutzten Dezimalbrüche; in Europa verbreitete sie <b>Simon Stevin</b> 1585, um die Berechnungen von Kaufleuten und Ingenieuren zu vereinfachen." }
      ],
      edges: [
        ["fraz", "div", "bedeutet"],
        ["div", "lim", "Rest 0"],
        ["div", "sempl", "Reste, die sich wiederholen"],
        ["div", "misto", "Vorperiode + Periode"],
        ["sempl", "gen", "man kehrt zurück mit"],
        ["misto", "gen", "man kehrt zurück mit"],
        ["misto", "irr", "verschieden von"],
        ["lim", "stevin", "wird geschrieben mit"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: erzeugender Bruch",
      questions: [
        { type: "mc", q: "Der erzeugende Bruch von 0,(7) ist …", options: ["7/10", "7/9", "7/99"], answer: 1, explain: "Periode mit einer Ziffer: 7/9." },
        { type: "mc", q: "Der erzeugende Bruch von 0,1(6) ist …", options: ["16/90 = 8/45", "15/90 = 1/6", "16/99"], answer: 1, explain: "(16 − 1)/90 = 15/90 = 1/6." },
        { type: "num", q: "0,25 = 1/?", answer: 4, explain: "0,25 = 25/100 = 1/4." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>a/b = a : b. Die Dezimalzahl kann <b>endlich</b>, <b>reinperiodisch</b> oder <b>gemischtperiodisch</b> sein.</li>
<li>Nenner mit nur 2 und 5 → endlich; ohne 2 und 5 → reinperiodisch; gemischt → gemischtperiodisch.</li>
<li>Erzeugender Bruch: Zähler = Zahl ohne Komma − (ganzzahliger Teil und Vorperiode); Nenner = eine <b>9</b> für jede Ziffer der Periode und eine <b>0</b> für jede Ziffer der Vorperiode.</li>
<li>Kürze das Ergebnis immer!</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Endliche Dezimalzahl", d: "Zahl mit einer endlichen Zahl von Ziffern nach dem Komma." },
    { t: "Periodische Zahl", d: "Unendliche Dezimalzahl, in der sich eine Gruppe von Ziffern unendlich wiederholt." },
    { t: "Periode", d: "Die Gruppe von Ziffern, die sich wiederholt." },
    { t: "Vorperiode", d: "Die Dezimalziffern zwischen dem Komma und der Periode, die sich nicht wiederholen." },
    { t: "Erzeugender Bruch", d: "Der Bruch, der, wenn man die Division ausführt, eine Dezimalzahl erzeugt." },
    { t: "Dezimalbruch", d: "Bruch mit dem Nenner 10, 100, 1000 …" },
    { t: "Rationale Zahl", d: "Zahl, die sich als Bruch zweier ganzer Zahlen schreiben lässt." },
    { t: "Irrationale Zahl", d: "Unendliche nicht periodische Dezimalzahl, die kein Bruch ist (z. B. π, √2)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Schreibe 7/20 als Dezimalzahl.", answer: 0.35, tol: 0.0001, explain: "7/20 = 35/100 = 0,35." },
      { type: "mc", q: "Welcher Bruch ergibt eine reinperiodische Dezimalzahl?", options: ["3/8", "2/9", "1/6"], answer: 1, explain: "9 = 3²: kein 2 oder 5 → reinperiodisch (0,(2))." },
      { type: "mc", q: "In 3,4(12) ist die Vorperiode …", options: ["3", "4", "12"], answer: 1, explain: "3 ganzzahliger Teil, 4 Vorperiode, 12 Periode." },
      { type: "tf", q: "1/40 ist eine endliche Dezimalzahl.", answer: true, explain: "40 = 2³ × 5: nur 2 und 5 → endlich (0,025)." },
      { type: "mc", q: "Der erzeugende Bruch von 0,(12) ist …", options: ["12/100", "12/99 = 4/33", "12/90"], answer: 1, explain: "Zwei Ziffern in der Periode → 99: 12/99 = 4/33." },
      { type: "mc", q: "Der erzeugende Bruch von 1,2(3) ist …", options: ["(123 − 12)/90 = 37/30", "123/99", "(123 − 1)/99"], answer: 0, explain: "Zahl ohne Komma 123 minus ganzzahliger Teil + Vorperiode 12; Nenner 90." },
      { type: "num", q: "Wie viele Ziffern hat die Periode von 1/7?", answer: 6, explain: "1/7 = 0,(142857)." },
      { type: "tf", q: "0,(9) ist gleich 1.", answer: true, explain: "0,(9) = 9/9 = 1." },
      { type: "num", q: "Verwandle 0,6 in einen gekürzten Bruch: 3/?", answer: 5, explain: "0,6 = 6/10 = 3/5." },
      { type: "order", q: "Ordne vom kleinsten zum größten.", items: ["0,3", "1/3", "0,34", "0,(4)"], explain: "0,3 < 0,333 … < 0,34 < 0,444 …" },
      { type: "mc", q: "π = 3,14159 … ist …", options: ["reinperiodisch", "eine endliche Dezimalzahl", "irrational (nicht periodisch)"], answer: 2, explain: "π ist unendlich und nicht periodisch: Es ist kein Bruch." }
    ],
    gen: [["fracEquiv", 2], ["decAdd", 1]]
  }
});
