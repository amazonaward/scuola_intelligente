TOPIC('de', {
  id: "p5-mat-potenze-intro",
  title: "Die Potenzen",
  intro: "Wie schreibt man schnell 10 · 10 · 10 · 10 · 10 · 10? Mit einer <b>Potenz</b>: 10<sup>6</sup>! Wir lernen, was <b>Basis</b> und <b>Exponent</b> sind, wie man Potenzen berechnet und warum die <b>Zehnerpotenzen</b> so nützlich sind, um riesige Zahlen zu schreiben.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Eine „abgekürzte“ Multiplikation",
      html: `<p>Wenn du <b>dieselbe Zahl</b> mehrmals mit sich selbst multiplizierst, kannst du das kurz als <b>Potenz</b> schreiben.</p>
<p>Beispiel: <b>2 · 2 · 2 · 2 = 2<sup>4</sup></b> und man liest „zwei <b>hoch vier</b>“.</p>
<ul>
<li>Die <b>Basis</b> (2) ist die Zahl, die sich wiederholt, also der Faktor, der multipliziert wird.</li>
<li>Der <b>Exponent</b> (4), klein oben rechts geschrieben, sagt, <b>wie oft</b> die Basis als Faktor vorkommt.</li>
<li>Das Ergebnis (16) heißt ebenfalls <b>Potenz</b>.</li>
</ul>
<p>Achtung beim häufigsten Fehler: 2<sup>4</sup> ist <b>nicht</b> 2 · 4 = 8! Es ist 2 · 2 · 2 · 2 = <b>16</b>.</p>`
    },
    {
      type: "svg",
      title: "Basis und Exponent",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="130" y="170" font-size="110" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text>
<text x="185" y="100" font-size="60" font-weight="bold" fill="#dc2626" text-anchor="middle">4</text>
<text x="300" y="150" font-size="44" fill="#1f2937" text-anchor="middle">=</text>
<text x="460" y="150" font-size="34" fill="#1f2937" text-anchor="middle"><tspan fill="#1d4ed8">3</tspan> · <tspan fill="#1d4ed8">3</tspan> · <tspan fill="#1d4ed8">3</tspan> · <tspan fill="#1d4ed8">3</tspan></text>
<text x="460" y="200" font-size="34" font-weight="bold" fill="#047857" text-anchor="middle">= 81</text>
<path d="M200 70 Q260 40 330 60" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="64" font-size="18" fill="#dc2626">Exponent: wie oft</text>
<path d="M120 190 Q130 240 180 255" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="190" y="262" font-size="18" fill="#1d4ed8">Basis: die Zahl, die sich wiederholt</text>
<path d="M375 165 L545 165" stroke="#dc2626" stroke-width="3"/>
<text x="460" y="110" font-size="16" fill="#dc2626" text-anchor="middle">4 gleiche Faktoren</text>
</svg>`,
      caption: "3⁴ liest man „drei hoch vier“: Die Basis 3 wird 4-mal mit sich selbst multipliziert."
    },
    {
      type: "text",
      title: "Wie man sie liest und berechnet",
      html: `<p>Man rechnet <b>Schritt für Schritt</b> und multipliziert das Ergebnis immer mit der Basis:</p>
<p>5<sup>3</sup> → 5 · 5 = 25 → 25 · 5 = <b>125</b></p>
<table>
<tr><th>Potenz</th><th>Man liest</th><th>Rechnung</th><th>Ergebnis</th></tr>
<tr><td>4<sup>2</sup></td><td>vier hoch zwei (vier im <b>Quadrat</b>)</td><td>4 · 4</td><td>16</td></tr>
<tr><td>2<sup>3</sup></td><td>zwei hoch drei (zwei zur <b>dritten Potenz</b>, im <b>Kubik</b>)</td><td>2 · 2 · 2</td><td>8</td></tr>
<tr><td>3<sup>4</sup></td><td>drei hoch vier</td><td>3 · 3 · 3 · 3</td><td>81</td></tr>
<tr><td>2<sup>5</sup></td><td>zwei hoch fünf</td><td>2 · 2 · 2 · 2 · 2</td><td>32</td></tr>
</table>
<p>Zwei Sonderfälle:</p>
<ul>
<li>mit Exponent <b>1</b> ist das Ergebnis die Basis selbst: 7<sup>1</sup> = 7;</li>
<li>mit Exponent <b>0</b> ist das Ergebnis immer <b>1</b> (wenn die Basis nicht 0 ist): 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>
</ul>
<p>Und wenn die Basis <b>1</b> ist? 1<sup>50</sup> = 1 · 1 · … · 1 = <b>1</b>!</p>`
    },
    {
      type: "3d",
      title: "Quadrat und Würfel in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 · 3 · 3 = 3³ = 27 Würfelchen: Deshalb heißt der Exponent 3 „Kubik“ (Würfel). Stelle die Höhe auf 1: Du siehst ein Quadrat aus 3 · 3 = 3² = 9 Würfelchen, das „Quadrat“."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Basis und Exponent",
      questions: [
        { type: "mc", q: "Was ist in 6<sup>3</sup> die Basis?", options: ["3", "6", "18"], answer: 1, explain: "Die Basis ist die große Zahl, die sich wiederholt: 6." },
        { type: "num", q: "Wie viel ist 2<sup>3</sup>?", answer: 8, explain: "2 · 2 · 2 = 8 (nicht 2 · 3!)." },
        { type: "tf", q: "5<sup>2</sup> = 10", answer: false, explain: "5<sup>2</sup> = 5 · 5 = 25. 10 wäre 5 · 2." },
        { type: "num", q: "Wie viel ist 8<sup>0</sup>?", answer: 1, explain: "Jede Zahl (außer 0) hoch 0 ergibt 1." }
      ]
    },
    {
      type: "text",
      title: "Die Zehnerpotenzen",
      html: `<p>Die bequemsten Potenzen von allen sind die mit der <b>Basis 10</b>. Schau:</p>
<table>
<tr><th>Potenz</th><th>Zahl</th><th>Name</th></tr>
<tr><td>10<sup>0</sup></td><td>1</td><td>Einer</td></tr>
<tr><td>10<sup>1</sup></td><td>10</td><td>Zehner</td></tr>
<tr><td>10<sup>2</sup></td><td>100</td><td>Hunderter</td></tr>
<tr><td>10<sup>3</sup></td><td>1 000</td><td>Tausender</td></tr>
<tr><td>10<sup>6</sup></td><td>1 000 000</td><td>Million</td></tr>
<tr><td>10<sup>9</sup></td><td>1 000 000 000</td><td>Milliarde</td></tr>
</table>
<p>Die magische Regel: <b>Der Exponent ist gleich der Anzahl der Nullen</b> nach der 1. 10<sup>5</sup> = 1 gefolgt von 5 Nullen = 100 000.</p>
<p>Jede Stelle in unserem Zahlensystem hat den Wert einer Zehnerpotenz: Deshalb heißt es <b>Dezimalsystem</b> (zur Basis 10).</p>`
    },
    {
      type: "text",
      title: "Eine Zahl in Summenform (Stellenwertform) schreiben",
      html: `<p>Mit den Zehnerpotenzen können wir eine Zahl in ihre Ziffern „zerlegen“. Das heißt <b>Zerlegung in Stellenwerte</b> (<i>scomposizione polinomiale</i>):</p>
<p><b>4 352</b> = 4 · 1000 + 3 · 100 + 5 · 10 + 2 · 1</p>
<p><b>4 352</b> = 4 · 10<sup>3</sup> + 3 · 10<sup>2</sup> + 5 · 10<sup>1</sup> + 2 · 10<sup>0</sup></p>
<p>Und riesige Zahlen schreibt man schneller: Der Abstand Erde–Sonne beträgt etwa <b>150 000 000 km</b>, also <b>15 · 10<sup>7</sup> km</b> (Wissenschaftler schreiben 1,5 · 10<sup>8</sup> km).</p>`
    },
    {
      type: "widget",
      title: "Die Potenzen am Abakus",
      widget: "abacus",
      options: { columns: ["uk", "h", "da", "u"], value: 4352 },
      caption: "Jeder Stab ist 10-mal so viel wert wie der rechts von ihm: E = 10⁰, Z = 10¹, H = 10², T = 10³. Ändere die Kugeln und schreibe die Zahl in Stellenwertform."
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Nachrichtenkette",
      html: `<p>Luca schickt eine Nachricht an <b>3 Freunde</b>. Jeder schickt sie an 3 weitere, und so weiter. Wie viele Personen erhalten sie in jeder „Runde“?</p>
<ul>
<li>1. Runde: 3 = <b>3<sup>1</sup></b></li>
<li>2. Runde: 3 · 3 = <b>3<sup>2</sup> = 9</b></li>
<li>3. Runde: 3 · 3 · 3 = <b>3<sup>3</sup> = 27</b></li>
<li>4. Runde: <b>3<sup>4</sup> = 81</b></li>
<li>10. Runde: <b>3<sup>10</sup> = 59 049</b> Personen!</li>
</ul>
<p>Deshalb verbreiten sich Nachrichten (auch falsche!) so schnell: Sie wachsen „potenziell“.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Fliesen und die Kartons",
      html: `<p>Der Boden des Kinderzimmers ist ein Quadrat mit <b>8 Fliesen pro Seite</b>. Wie viele Fliesen sind es insgesamt? 8 · 8 = <b>8<sup>2</sup> = 64</b>.</p>
<p>Ein Lager stapelt würfelförmige Kartons: <b>5</b> in der Länge, <b>5</b> in der Breite und <b>5</b> in der Höhe. Wie viele Kartons? 5 · 5 · 5 = <b>5<sup>3</sup> = 125</b>.</p>
<p>Deshalb heißt der Exponent 2 <b>Quadrat</b> und der Exponent 3 <b>Kubik</b> (Würfel)!</p>`
    },
    {
      type: "svg",
      title: "Die Verdoppelung: 2¹, 2², 2³, 2⁴",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<g fill="#f97316" stroke="#9a3412" stroke-width="2">
<rect x="40" y="170" width="24" height="24"/><rect x="40" y="198" width="24" height="24"/>
<rect x="130" y="142" width="24" height="24"/><rect x="130" y="170" width="24" height="24"/><rect x="158" y="142" width="24" height="24"/><rect x="158" y="170" width="24" height="24"/>
</g>
<g fill="#22c55e" stroke="#166534" stroke-width="2">
<rect x="240" y="114" width="24" height="24"/><rect x="268" y="114" width="24" height="24"/>
<rect x="240" y="142" width="24" height="24"/><rect x="268" y="142" width="24" height="24"/>
<rect x="240" y="170" width="24" height="24"/><rect x="268" y="170" width="24" height="24"/>
<rect x="240" y="198" width="24" height="24"/><rect x="268" y="198" width="24" height="24"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<rect x="360" y="114" width="24" height="24"/><rect x="388" y="114" width="24" height="24"/><rect x="416" y="114" width="24" height="24"/><rect x="444" y="114" width="24" height="24"/>
<rect x="360" y="142" width="24" height="24"/><rect x="388" y="142" width="24" height="24"/><rect x="416" y="142" width="24" height="24"/><rect x="444" y="142" width="24" height="24"/>
<rect x="360" y="170" width="24" height="24"/><rect x="388" y="170" width="24" height="24"/><rect x="416" y="170" width="24" height="24"/><rect x="444" y="170" width="24" height="24"/>
<rect x="360" y="198" width="24" height="24"/><rect x="388" y="198" width="24" height="24"/><rect x="416" y="198" width="24" height="24"/><rect x="444" y="198" width="24" height="24"/>
</g>
<text x="52" y="255" font-size="20" text-anchor="middle" font-weight="bold">2¹ = 2</text>
<text x="156" y="255" font-size="20" text-anchor="middle" font-weight="bold">2² = 4</text>
<text x="266" y="255" font-size="20" text-anchor="middle" font-weight="bold">2³ = 8</text>
<text x="414" y="255" font-size="20" text-anchor="middle" font-weight="bold">2⁴ = 16</text>
<text x="300" y="50" font-size="22" fill="#7c2d12" text-anchor="middle">Jedes Mal, wenn der Exponent um 1 wächst, verdoppeln sich die Kästchen</text>
<text x="540" y="180" font-size="26" fill="#7c2d12" text-anchor="middle">…2⁵ = 32</text>
</svg>`,
      caption: "1 zum Exponenten zu addieren heißt, noch einmal mit der Basis zu multiplizieren."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Die Schachlegende",
      html: `<p>Man erzählt, dass der Erfinder des <b>Schachspiels</b> vom König als Belohnung verlangte: 1 Reiskorn auf das erste Feld, 2 auf das zweite, 4 auf das dritte, 8 auf das vierte … immer verdoppelt bis zum 64. Feld. Der König lachte: „So wenig?“.</p>
<p>Aber auf dem letzten Feld waren <b>2<sup>63</sup></b> Körner nötig: etwa <b>9 Trillionen</b> (9 Milliarden Milliarden)! Viel mehr Reis, als in der ganzen Menschheitsgeschichte je angebaut wurde.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Das Googol",
      html: `<p>Eine Zahl aus einer 1 gefolgt von <b>100 Nullen</b>, also <b>10<sup>100</sup></b>, heißt <b>Googol</b>. Den Namen erfand 1938 ein 9-jähriger Junge, Milton Sirotta, der Neffe des Mathematikers Edward Kasner.</p>
<p>Der Name der Firma <b>Google</b> kommt genau daher (ein bisschen falsch geschrieben!). Stell dir vor: Die Atome im gesamten sichtbaren Universum sind „nur“ etwa 10<sup>80</sup>.</p>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Potenz = Multiplikation <b>gleicher Faktoren</b>: a<sup>n</sup> = a · a · … · a (n-mal).</li>
<li><b>Basis</b> = der Faktor, der sich wiederholt; <b>Exponent</b> = wie oft.</li>
<li>Exponent 2 = <b>Quadrat</b>; Exponent 3 = <b>Kubik</b> (Würfel).</li>
<li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (wenn a ungleich 0 ist); 1<sup>n</sup> = 1.</li>
<li>10<sup>n</sup> = 1 gefolgt von <b>n Nullen</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Potenzen zu verstehen",
      intro: "Wenn dir „Basis“ und „Exponent“ seltsam vorkommen, probiere einen dieser Wege: Bäume, Würfelchen, Papierfalten oder die Art, wie sie in anderen Ländern geschrieben werden.",
      tabs: [
        {
          label: "🌳 Der Astbaum",
          html: `<p>Stell dir einen Baum vor: Der Stamm teilt sich in <b>2 Äste</b>, jeder Ast in weitere 2, und so weiter.</p>
<ul>
<li>auf der 1. Ebene sind 2 Äste = 2<sup>1</sup>;</li>
<li>auf der 2. Ebene 4 Zweiglein = 2<sup>2</sup>;</li>
<li>auf der 3. Ebene 8 Zweiglein = 2<sup>3</sup>.</li>
</ul>
<p>Der <b>Exponent</b> ist die <b>Nummer der Ebene</b>, die <b>Basis</b> ist, <b>in wie viele Teile</b> sich jeder Ast teilt.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#78350f" stroke-width="6" fill="none">
<line x1="300" y1="270" x2="300" y2="220"/>
<line x1="300" y1="220" x2="180" y2="160"/><line x1="300" y1="220" x2="420" y2="160"/>
</g>
<g stroke="#92400e" stroke-width="4">
<line x1="180" y1="160" x2="120" y2="100"/><line x1="180" y1="160" x2="240" y2="100"/>
<line x1="420" y1="160" x2="360" y2="100"/><line x1="420" y1="160" x2="480" y2="100"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="120" y1="100" x2="95" y2="45"/><line x1="120" y1="100" x2="145" y2="45"/>
<line x1="240" y1="100" x2="215" y2="45"/><line x1="240" y1="100" x2="265" y2="45"/>
<line x1="360" y1="100" x2="335" y2="45"/><line x1="360" y1="100" x2="385" y2="45"/>
<line x1="480" y1="100" x2="455" y2="45"/><line x1="480" y1="100" x2="505" y2="45"/>
</g>
<g fill="#22c55e"><circle cx="95" cy="40" r="9"/><circle cx="145" cy="40" r="9"/><circle cx="215" cy="40" r="9"/><circle cx="265" cy="40" r="9"/><circle cx="335" cy="40" r="9"/><circle cx="385" cy="40" r="9"/><circle cx="455" cy="40" r="9"/><circle cx="505" cy="40" r="9"/></g>
<text x="530" y="170" font-size="20" fill="#1f2937">2¹ = 2</text>
<text x="530" y="110" font-size="20" fill="#1f2937">2² = 4</text>
<text x="530" y="50" font-size="20" fill="#1f2937">2³ = 8</text>
</svg>`
        },
        {
          label: "🧊 Würfelchen in 3D",
          html: `<p>Baue einen Würfel aus Würfelchen: <b>4</b> in der Breite, <b>4</b> in der Tiefe, <b>4</b> in der Höhe. Wie viele Würfelchen braucht man? <b>4 · 4 · 4 = 4<sup>3</sup> = 64</b>.</p>
<p>Drehe das Modell und zähle zuerst eine Schicht (4 · 4 = 4<sup>2</sup> = 16), dann multipliziere mit der Zahl der Schichten. Ändere die Regler, um 2<sup>3</sup>, 5<sup>3</sup> … zu sehen.</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 4, c: 4 }
        },
        {
          label: "📄 Falte das Blatt",
          html: `<p>Nimm ein Blatt und falte es in der Mitte: Du hast <b>2</b> Schichten. Falte es noch einmal: <b>4</b>. Noch einmal: <b>8</b> …</p>
<p>Nach <b>n</b> Faltungen hast du <b>2<sup>n</sup></b> Schichten. Nach 7 Faltungen (2<sup>7</sup> = 128 Schichten) ist es fast unmöglich, es noch einmal zu falten!</p>
<p>Wenn du ein dünnes Blatt von 0,1 mm <b>42-mal</b> falten könntest, würde die Dicke (2<sup>42</sup> Schichten) den Abstand von der Erde zum Mond übersteigen. Potenzen wachsen unglaublich!</p>`
        },
        {
          label: "🌍 Wie man es anderswo schreibt",
          html: `<p>Auf der ganzen Welt schreibt man den Exponenten oben rechts: 2<sup>4</sup>. Aber die Art, es zu lesen, ist verschieden:</p>
<ul>
<li>🇮🇹 „due <b>alla quarta</b>“ (zwei zur vierten)</li>
<li>🇬🇧🇺🇸 „two <b>to the power of</b> four“ oder „two to the fourth“</li>
<li>🇫🇷 „deux <b>puissance</b> quatre“</li>
<li>🇩🇪 „zwei <b>hoch</b> vier“ – so sagen wir es bei uns: Die vier steht <i>hoch</i> oben.</li>
</ul>
<p>Auf Taschenrechnern und in Computern, wo man nicht klein schreiben kann, benutzt man das Zeichen <b>^</b>: <code>2^4</code>. In vielen Programmiersprachen (wie Python) schreibt man <code>2**4</code>.</p>`
        },
        {
          label: "➕ Wiederholte Summe und wiederholtes Produkt",
          html: `<p>Erinnerst du dich an die Multiplikation? Sie ist eine <b>wiederholte Addition</b>: 3 · 4 = 3 + 3 + 3 + 3.</p>
<p>Die Potenz ist die nächste Stufe: eine <b>wiederholte Multiplikation</b>: 3<sup>4</sup> = 3 · 3 · 3 · 3.</p>
<table>
<tr><th>Rechenart</th><th>Was sie wiederholt</th><th>Beispiel</th></tr>
<tr><td>Multiplikation</td><td>Additionen</td><td>3 · 4 = 12</td></tr>
<tr><td>Potenz</td><td>Multiplikationen</td><td>3<sup>4</sup> = 81</td></tr>
</table>
<p>Deshalb ist 3<sup>4</sup> viel größer als 3 · 4!</p>`
        },
        {
          label: "🇮🇳 Die Schachbrett-Legende (Indien)",
          html: "<p>Eine berühmte <b>Legende</b> erzählt, dass in <b>Indien</b> der Erfinder des Schachspiels (in vielen Versionen heißt er <b>Sissa</b>) das Spiel dem König vorstellte. Der König, erfreut, sagte zu ihm: «Wünsche dir, was du willst!». Der Erfinder bat nur um Weizenkörner: <b>1</b> Korn auf das erste Feld, <b>2</b> auf das zweite, <b>4</b> auf das dritte, und so weiter, jedes Mal <b>verdoppelt</b> bis zum Feld 64. Der König lachte: «So wenig?». Die Legende wurde schon im Mittelalter von arabischen und persischen Schriftstellern erzählt.</p><p>Rechnen wir mit den <b>Zweierpotenzen</b>:</p><ul><li>Feld 1: 1 = 2<sup>0</sup>; Feld 2: 2 = 2<sup>1</sup>; Feld 3: 4 = 2<sup>2</sup> …</li><li>auf dem Feld <b>n</b> liegen <b>2<sup>n−1</sup></b> Körner;</li><li>Feld 11: 2<sup>10</sup> = 1024; Feld 21: 2<sup>20</sup> = mehr als <b>eine Million</b>;</li><li>Feld 64: 2<sup>63</sup>, eine Zahl mit 19 Ziffern!</li></ul><p>Insgesamt bräuchte man 2<sup>64</sup> − 1 = <b>18.446.744.073.709.551.615</b> Körner: viel mehr Weizen, als in der ganzen Welt in Hunderten von Jahren geerntet wird. Der König konnte nicht zahlen! Potenzen wachsen <b>blitzschnell</b>.</p>",
          svg: "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Feld n → 2 hoch (n − 1) Körner</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Feld 11 → 2¹⁰ = 1024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">Feld 21 → 2²⁰ = 1.048.576 (mehr als eine Million!)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Insgesamt: 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18.446.744.073.709.551.615 Körner</text></svg>"
        },
        {
          label: "🇨🇳 Das Yang-Hui-Dreieck (China)",
          html: "<p>Im Jahr <b>1261</b> veröffentlichte der <b>chinesische</b> Mathematiker <b>Yang Hui</b> ein Dreieck aus Zahlen, das in China schon seit etwa zwei Jahrhunderten bekannt war (Jia Xian benutzte es). In Italien nennen wir es <b>Tartaglia-Dreieck</b>, in Deutschland und Frankreich Pascal'sches Dreieck: Aber die Chinesen kannten es schon viel früher!</p><p>So wird es gebaut:</p><ol><li>Ganz oben schreibst du <b>1</b>.</li><li>Jede Zeile beginnt und endet mit <b>1</b>.</li><li>Jede andere Zahl ist die <b>Summe der beiden Zahlen über</b> ihr: 1 + 2 = 3, 3 + 3 = 6 …</li></ol><p>Nun <b>addiere die Zahlen jeder Zeile</b>: 1, 2, 4, 8, 16, 32 … Das sind die <b>Zweierpotenzen</b>! Die Zeile Nummer n (von 0 an gezählt) hat die Summe <b>2<sup>n</sup></b>.</p><p>Warum? Jede Zahl einer Zeile wird <b>zweimal</b> benutzt, um die nächste Zeile zu bauen (sie geht in die Zahl unten links und die unten rechts ein): Also hat jede Zeile eine <b>doppelt so große</b> Summe wie die vorige.</p><p>🎯 Schreibe du die nächste Zeile: Wie groß muss die Summe sein?</p>",
          svg: "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">Summe = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 oben → 6 unten</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Potenzen: Tippe auf einen Knoten und entdecke das Warum",
      nodes: [
        { id: "molt", label: "Multiplikation", x: 50, y: 6, color: "#2563eb", html: "Rechenart, die eine Addition wiederholt: 4 · 3 = 4 + 4 + 4.", why: "Die Potenzen entstehen aus der Multiplikation, genau wie die Multiplikation aus der Addition entsteht: Jede Rechenart ist eine Abkürzung der vorherigen, wiederholt." },
        { id: "potenza", label: "Potenz", x: 50, y: 30, color: "#16a34a", html: "Produkt aus lauter gleichen Faktoren: a<sup>n</sup>.", why: "Schon die <b>Babylonier</b> (vor etwa 4000 Jahren) hatten Tafeln der Quadrate und Kuben. Die moderne Schreibweise mit dem kleinen Exponenten oben führte der französische Philosoph und Mathematiker <b>René Descartes</b> 1637 ein." },
        { id: "base", label: "Basis", x: 18, y: 50, color: "#f59e0b", html: "Der Faktor, der sich wiederholt.", why: "Sie heißt Basis, weil sie die „Ausgangszahl“ ist, auf der die ganze Potenz aufgebaut wird, wie die Basis (das Fundament) eines Gebäudes." },
        { id: "esp", label: "Exponent", x: 82, y: 50, color: "#ef4444", html: "Die kleine Zahl oben: wie oft die Basis wiederholt wird.", why: "Vom Lateinischen <i>exponere</i>, „zur Schau stellen, ausstellen“: Es ist die oben hervorgehobene Zahl. Sie wächst um 1, jedes Mal wenn du noch einmal mit der Basis multiplizierst." },
        { id: "quadcubo", label: "Quadrat und Kubik", x: 18, y: 76, color: "#a855f7", html: "a<sup>2</sup> liest man „a im Quadrat“, a<sup>3</sup> „a im Kubik“.", why: "Die griechischen Mathematiker wie <b>Euklid</b> dachten sich die Zahlen als Figuren: Eine Zahl mit sich selbst multipliziert bildet ein Quadrat aus Punkten; dreimal bildet einen Würfel. Die geometrischen Namen sind geblieben." },
        { id: "zero", label: "Exponent 0 und 1", x: 50, y: 62, color: "#0ea5e9", html: "a<sup>1</sup> = a; a<sup>0</sup> = 1.", why: "Schau auf die Leiter 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2: Jedes Mal, wenn der Exponent um 1 sinkt, <b>teilt man durch die Basis</b>. Noch ein Schritt: 2 : 2 = 1, also 2<sup>0</sup> = 1. Das ist eine Festlegung, die so gewählt wurde, damit alle Regeln weiter funktionieren." },
        { id: "dieci", label: "Zehnerpotenzen", x: 82, y: 76, color: "#14b8a6", html: "10<sup>n</sup> = 1 gefolgt von n Nullen.", why: "Unser Zahlensystem ist <b>dezimal und stellenwertbasiert</b>: Jede Stelle ist 10-mal so viel wert wie die rechts davon. Wir benutzen wahrscheinlich die 10, weil wir 10 Finger haben! Die indisch-arabischen Ziffern und die Null kamen 1202 mit <b>Fibonacci</b> nach Europa." },
        { id: "scientifica", label: "Riesige Zahlen", x: 50, y: 92, color: "#64748b", html: "Zehnerpotenzen dienen dazu, riesige Zahlen auf wenig Platz zu schreiben.", why: "Schon <b>Archimedes</b> erfand im 3. Jahrhundert v. Chr. in seinem Buch <i>Sandrechner</i> (<i>Arenarius</i>) eine Zählweise mit „Myriaden von Myriaden“, um zu schätzen, wie viele Sandkörner nötig wären, um das Universum zu füllen. Heute benutzen Wissenschaftler die <b>wissenschaftliche Schreibweise</b> (z. B. 1,5 · 10<sup>8</sup> km)." }
      ],
      edges: [
        ["molt", "potenza", "wiederholt wird sie zur"],
        ["potenza", "base", "hat eine"],
        ["potenza", "esp", "hat einen"],
        ["base", "quadcubo", "mit sich selbst 2- oder 3-mal"],
        ["esp", "zero", "Sonderfälle"],
        ["esp", "dieci", "zählt die Nullen"],
        ["dieci", "scientifica", "dienen für"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Zehnerpotenzen und Aufgaben",
      questions: [
        { type: "num", q: "Wie viele Nullen hat 10<sup>6</sup> ausgeschrieben?", answer: 6, explain: "Der Exponent gibt die Zahl der Nullen an: 1 000 000." },
        { type: "mc", q: "Wie schreibt man 1000 als Zehnerpotenz?", options: ["10<sup>2</sup>", "10<sup>3</sup>", "3<sup>10</sup>"], answer: 1, explain: "1000 = 10 · 10 · 10 = 10<sup>3</sup>." },
        { type: "num", q: "Ein Quadrat hat 7 Fliesen pro Seite. Wie viele Fliesen sind es insgesamt?", answer: 49, explain: "7<sup>2</sup> = 7 · 7 = 49." }
      ]
    }
  ],
  glossary: [
    { t: "Potenz", d: "Multiplikation gleicher Faktoren, kurz geschrieben (z. B. 2⁵); auch ihr Ergebnis." },
    { t: "Basis", d: "Der Faktor, der sich in der Potenz wiederholt." },
    { t: "Exponent", d: "Die kleine Zahl oben: wie oft die Basis mit sich selbst multipliziert wird." },
    { t: "Quadrat", d: "Potenz mit Exponent 2: a · a." },
    { t: "Kubik (Würfel)", d: "Potenz mit Exponent 3: a · a · a." },
    { t: "Zehnerpotenz", d: "10 hoch einem Exponenten: 1 gefolgt von so vielen Nullen, wie der Exponent angibt." },
    { t: "Stellenwertform (forma polinomiale)", d: "Schreibweise einer Zahl als Summe von Ziffern mal Zehnerpotenzen." },
    { t: "Googol", d: "Die Zahl 10¹⁰⁰: 1 gefolgt von 100 Nullen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie schreibt man 7 · 7 · 7 · 7 als Potenz?", options: ["7<sup>4</sup>", "4<sup>7</sup>", "7 · 4"], answer: 0, explain: "Die Basis ist 7, die 4-mal vorkommt: 7<sup>4</sup>." },
      { type: "num", q: "Wie viel ist 3<sup>3</sup>?", answer: 27, explain: "3 · 3 · 3 = 27." },
      { type: "num", q: "Wie viel ist 10<sup>4</sup>?", answer: 10000, explain: "1 gefolgt von 4 Nullen: 10 000." },
      { type: "tf", q: "2<sup>5</sup> = 10", answer: false, explain: "2<sup>5</sup> = 2 · 2 · 2 · 2 · 2 = 32. Man multipliziert nicht Basis mit Exponent!" },
      { type: "text", q: "Wie heißt die kleine Zahl oben rechts?", answer: ["Exponent", "der Exponent", "esponente", "l'esponente"], explain: "Es ist der Exponent." },
      { type: "mc", q: "Wie viel ist 15<sup>1</sup>?", options: ["1", "15", "0"], answer: 1, explain: "Mit Exponent 1 ist das Ergebnis die Basis selbst." },
      { type: "tf", q: "Jede Zahl ungleich 0 hoch 0 ergibt 1.", answer: true, explain: "Per Festlegung ist a<sup>0</sup> = 1: Es ist der Schritt, der nach a<sup>1</sup> kommt, wenn man durch die Basis teilt." },
      { type: "mc", q: "Wie liest man 9<sup>2</sup>?", options: ["neun mal zwei", "neun im Quadrat", "neun im Kubik"], answer: 1, explain: "Exponent 2: „im Quadrat“." },
      { type: "order", q: "Ordne von der kleinsten zur größten.", items: ["2<sup>2</sup>", "3<sup>2</sup>", "2<sup>4</sup>", "10<sup>2</sup>"], explain: "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100." },
      { type: "num", q: "5 382 = 5 · 10<sup>3</sup> + 3 · 10<sup>?</sup> + 8 · 10 + 2. Welcher Exponent fehlt?", answer: 2, explain: "Die 3 steht an der Hunderterstelle: 100 = 10<sup>2</sup>." },
      { type: "num", q: "Ein Würfel aus Würfelchen hat 6 Würfelchen pro Kante. Wie viele Würfelchen enthält er?", answer: 216, explain: "6<sup>3</sup> = 6 · 6 · 6 = 36 · 6 = 216." }
    ],
    gen: [["power", 3]]
  }
});
