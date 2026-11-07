TOPIC('de', {
  id: "p4-mat-grandi-numeri",
  title: "Die großen Zahlen",
  intro: "Wie viele Menschen leben in Italien? Wie viele Kilometer trennen uns vom Mond? Um das zu beantworten, braucht man die <b>großen Zahlen</b>: die <b>Tausender</b> und die <b>Millionen</b>. Wir lernen, sie ohne Angst zu lesen, zu schreiben, zu zerlegen und zu vergleichen.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Von Tausend an aufwärts",
      html: `<p>Du kennst schon Einer (u), Zehner (da) und Hunderter (h). Erinnerst du dich an die goldene Regel unseres Systems? <b>10 Einheiten einer Stelle bilden 1 Einheit der nächsthöheren Stelle</b>:</p>
<ul>
<li>10 Einer = 1 Zehner</li>
<li>10 Zehner = 1 Hunderter</li>
<li>10 Hunderter = <b>1 Tausender</b> (1.000)</li>
</ul>
<p>Und so geht es immer weiter:</p>
<ul>
<li>10 Tausender = 1 <b>Zehntausender</b> (10.000)</li>
<li>10 Zehntausender = 1 <b>Hunderttausender</b> (100.000)</li>
<li>10 Hunderttausender = <b>1 Million</b> (1.000.000)</li>
</ul>
<p>Es ist ein <b>dezimales</b> System (zur Basis 10) und ein <b>Stellenwertsystem</b>: Der Wert einer Ziffer hängt von der <b>Stelle</b> ab, an der sie in der Zahl steht.</p>
<p>Die Abkürzungen in dieser Lektion bleiben die italienischen: u = Einer, da = Zehner, h = Hunderter, uk = Tausender, dak = Zehntausender, hk = Hunderttausender, uM = Millionen, daM = Zehnmillionen, hM = Hundertmillionen.</p>`
    },
    {
      type: "3d",
      title: "Tausend Würfelchen in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 10, b: 10, c: 10, max: 10 },
      caption: "Ein Würfel aus 10 × 10 × 10 Würfelchen enthält 1.000 Würfelchen: Das ist ein Tausender! Dreh das Modell und benutze die Regler, um zu sehen, wie viele Würfelchen es mit weniger Schichten sind."
    },
    {
      type: "text",
      title: "Schritt 1 – Die Klassen: Einer, Tausender, Millionen",
      html: `<p>Die Ziffern einer großen Zahl werden <b>zu je drei</b> gruppiert, von rechts beginnend. Jede Gruppe heißt <b>Klasse</b>:</p>
<table>
<tr><th colspan="3">Klasse der MILLIONEN</th><th colspan="3">Klasse der TAUSENDER</th><th colspan="3">Klasse der EINFACHEN EINER</th></tr>
<tr><td>hM</td><td>daM</td><td>uM</td><td>hk</td><td>dak</td><td>uk</td><td>h</td><td>da</td><td>u</td></tr>
<tr><td>Hundert-millionen</td><td>Zehn-millionen</td><td>Millionen</td><td>Hundert-tausender</td><td>Zehn-tausender</td><td>Tausender</td><td>Hunderter</td><td>Zehner</td><td>Einer</td></tr>
</table>
<p>Der Buchstabe <b>k</b> kommt vom griechischen <i>chílioi</i>, „tausend“ (wie in <b>k</b>m, <b>k</b>g); das <b>M</b> steht für „Mega“, Million.</p>
<p>Damit die Zahlen leichter lesbar sind, setzt man zwischen die Klassen einen <b>Punkt</b> oder einen kleinen <b>Abstand</b>: <b>3.408.215</b> oder <b>3 408 215</b>. (Nie das Komma: Im Deutschen wie im Italienischen dient das Komma für die Dezimalstellen!)</p>`
    },
    {
      type: "svg",
      title: "Die Klassentabelle",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f8fafc"/>
<rect x="15" y="20" width="185" height="40" fill="#a855f7"/><text x="107" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">MILLIONEN</text>
<rect x="208" y="20" width="185" height="40" fill="#3b82f6"/><text x="300" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">TAUSENDER</text>
<rect x="401" y="20" width="185" height="40" fill="#22c55e"/><text x="493" y="47" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">EINER</text>
<g font-size="16" text-anchor="middle" fill="#1f2937" font-weight="bold">
<text x="46" y="88">hM</text><text x="107" y="88">daM</text><text x="168" y="88">uM</text>
<text x="239" y="88">hk</text><text x="300" y="88">dak</text><text x="361" y="88">uk</text>
<text x="432" y="88">h</text><text x="493" y="88">da</text><text x="554" y="88">u</text>
</g>
<g stroke="#64748b" stroke-width="2" fill="#ffffff">
<rect x="15" y="100" width="61" height="70"/><rect x="76" y="100" width="62" height="70"/><rect x="138" y="100" width="62" height="70"/>
<rect x="208" y="100" width="61" height="70"/><rect x="269" y="100" width="62" height="70"/><rect x="331" y="100" width="62" height="70"/>
<rect x="401" y="100" width="61" height="70"/><rect x="462" y="100" width="62" height="70"/><rect x="524" y="100" width="62" height="70"/>
</g>
<g font-size="40" text-anchor="middle" font-weight="bold">
<text x="168" y="150" fill="#7e22ce">3</text>
<text x="239" y="150" fill="#1d4ed8">4</text><text x="300" y="150" fill="#1d4ed8">0</text><text x="361" y="150" fill="#1d4ed8">8</text>
<text x="432" y="150" fill="#15803d">2</text><text x="493" y="150" fill="#15803d">1</text><text x="554" y="150" fill="#15803d">5</text>
</g>
<text x="300" y="210" font-size="26" text-anchor="middle" fill="#1f2937" font-weight="bold">3.408.215</text>
<text x="300" y="242" font-size="15" text-anchor="middle" fill="#334155">drei Millionen vierhundertachttausendzweihundertfünfzehn</text>
</svg>`,
      caption: "Jede Klasse hat drei Stellen: Hunderter, Zehner und Einer. Die Null hält die Stelle der Zehntausender besetzt."
    },
    {
      type: "text",
      title: "Schritt 2 – Große Zahlen lesen und schreiben",
      html: `<p>Um eine große Zahl zu <b>lesen</b>:</p>
<ol>
<li>teile die Ziffern von <b>rechts</b> aus in Klassen zu je drei;</li>
<li>lies jede Klasse wie eine Zahl bis 999, von <b>links</b> beginnend, und füge den Namen der Klasse hinzu (<b>Millionen</b>, <b>tausend</b>).</li>
</ol>
<p>Beispiele:</p>
<ul>
<li><b>45.320</b> → fünfundvierzig<b>tausend</b>dreihundertzwanzig</li>
<li><b>702.009</b> → siebenhundertzwei<b>tausend</b>neun</li>
<li><b>2.500.000</b> → zwei <b>Millionen</b> fünfhundert<b>tausend</b></li>
</ul>
<p>Schreibregeln in Buchstaben:</p>
<ul>
<li>man sagt „ein<b>tausend</b>“, „zwei<b>tausend</b>, drei<b>tausend</b> …“;</li>
<li>„eine Million“, „zwei Millionen“ schreibt man <b>getrennt</b> vom Rest: <i>drei Millionen zweihunderttausend</i>;</li>
<li>die Zahlen unterhalb der Million schreibt man <b>zusammen</b>: <i>einhundertdreiundzwanzigtausendvierhundertsechsundfünfzig</i>.</li>
</ul>
<p>Achte auf die <b>Nullen</b>! In „siebzigtausendfünf“ sind Hunderter, Zehner und Tausender leer: Man schreibt <b>70.005</b>.</p>`
    },
    {
      type: "widget",
      title: "Der Abakus der Tausender",
      widget: "abacus",
      options: { columns: ["hk", "dak", "uk", "h", "da", "u"], value: 245367 },
      caption: "Füge Kugeln hinzu und nimm sie weg: Wenn eine Spalte 10 erreicht, ist die Spalte links dran (Umtausch)."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Klassen und Wert der Ziffern",
      questions: [
        { type: "num", q: "Wie viele Hunderter stecken in einem Tausender?", answer: 10, explain: "10 Hunderter = 1.000." },
        { type: "mc", q: "In der Zahl 586.214 hat die Ziffer 8 den Wert …", options: ["8 Tausender", "80 Tausender (80.000)", "800"], answer: 1, explain: "Die 8 steht an der Stelle der Zehntausender: 80.000." },
        { type: "mc", q: "Wie schreibt man „vierhundertausendsechs“ in Ziffern?", options: ["400.006", "40.006", "4.000.006"], answer: 0, explain: "400 Tausender und 6 Einer: 400.006." }
      ]
    },
    {
      type: "text",
      title: "Schritt 3 – Zerlegen und zusammensetzen",
      html: `<p>Eine Zahl <b>zerlegen</b> bedeutet zu sagen, was jede ihrer Ziffern wert ist.</p>
<p><b>3.408.215</b> =</p>
<ul>
<li>3 uM + 4 hk + 0 dak + 8 uk + 2 h + 1 da + 5 u</li>
<li>= 3.000.000 + 400.000 + 8.000 + 200 + 10 + 5 (<b>additive</b> Zerlegung)</li>
</ul>
<p><b>Zusammensetzen</b> ist das Gegenteil: <i>5 dak + 7 uk + 3 da</i> = 50.000 + 7.000 + 30 = <b>57.030</b> (Achtung auf die Nullen an den leeren Stellen: Hunderter und Einer).</p>
<p>Dieselbe Zahl kann man auch auf verschiedene Arten lesen: <b>57.030</b> = 57 Tausender und 30 Einer = 570 Hunderter und 3 Zehner = 5.703 Zehner.</p>`
    },
    {
      type: "text",
      title: "Schritt 4 – Vergleichen und ordnen",
      html: `<p>Um zwei große Zahlen zu <b>vergleichen</b>:</p>
<ol>
<li>zähle die <b>Ziffern</b>: Die Zahl mit mehr Ziffern ist die größere (<i>100.000 &gt; 99.999</i>);</li>
<li>wenn sie gleich viele Ziffern haben, vergleiche die Ziffern <b>von links</b>, eine nach der anderen, bis du die erste verschiedene findest: <i>452.<b>3</b>10 &gt; 452.<b>1</b>99</i>.</li>
</ol>
<p>Zeichen: <b>&gt;</b> größer, <b>&lt;</b> kleiner, <b>=</b> gleich.</p>
<p><b>Runden</b>: In Zeitungen werden große Zahlen gerundet. Um auf Tausender zu runden, schau auf die Ziffer der Hunderter: Ist sie 5 oder mehr, rundet man auf, sonst ab. <i>58.643 → etwa 59.000</i>; <i>58.432 → etwa 58.000</i>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Die Zahlen Italiens",
      html: `<ul>
<li>In Italien leben etwa <b>59 Millionen</b> Menschen: Laut ISTAT (dem italienischen Statistikamt) waren es Anfang 2025 etwa <b>58.934.000</b>.</li>
<li>Das Stadion San Siro in Mailand fasst etwa <b>75.000</b> Zuschauer. Um alle Italiener unterzubringen, bräuchte man fast <b>800</b> solche Stadien!</li>
<li>Der Montblanc ist etwa <b>4.805</b> Meter hoch (die neuesten Messungen schwanken um ein oder zwei Meter, weil der Gipfel aus Schnee und Eis besteht).</li>
<li>Der mittlere Abstand zwischen Erde und Mond beträgt etwa <b>384.400 km</b>: dreihundertvierundachtzigtausendvierhundert Kilometer.</li>
</ul>
<p>Versuche, laut zu lesen: <b>58.934.000</b> → <i>achtundfünfzig Millionen neunhundertvierunddreißigtausend</i>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Die Spardose der Klasse",
      html: `<p>Die Schule sammelt Plastikdeckel für einen guten Zweck. Jeder Sack fasst <b>1.000</b> Stück.</p>
<ul>
<li>Klasse 4 A: <b>12.450</b> Deckel → 12 volle Säcke und 450 lose Deckel.</li>
<li>Klasse 4 B: <b>12.540</b> Deckel.</li>
<li>Wer hat mehr? Gleiche Ziffern bis zu den Tausendern (12), dann die Hunderter: 5 &gt; 4 → <b>12.540 &gt; 12.450</b>. Die 4 B gewinnt!</li>
<li>Zusammen: 12.450 + 12.540 = <b>24.990</b> Deckel. Wie viele fehlen bis 25.000? <b>10</b>!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Lakh und Crore",
      html: `<p>In <b>Indien</b> werden große Zahlen anders gruppiert! Die ersten drei Ziffern von rechts gehören zusammen, danach gruppiert man <b>zu je zwei</b>: Eine Million schreibt man <b>10,00,000</b> und sagt „zehn <b>Lakh</b>“. Ein <b>Lakh</b> ist 100.000 und ein <b>Crore</b> ist 10.000.000.</p>
<p>In <b>China</b> und <b>Japan</b> gibt es dagegen ein eigenes Wort für <b>10.000</b> (<i>wàn</i> auf Chinesisch, <i>man</i> auf Japanisch), und die Zahlen werden <b>zu je vier</b> gruppiert.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du, dass …? Woher „Million“ kommt",
      html: `<p>Das Wort <b>Million</b> entstand in <b>Italien</b>, im Mittelalter: Es bedeutet „<b>großes Tausend</b>“ (mille + die Vergrößerungsendung <i>-one</i>), also „tausendmal tausend“. Von dort ging es in alle europäischen Sprachen: <i>million</i> im Englischen und Französischen, <i>Million</i> im Deutschen.</p>
<p>Und weißt du, dass das Reisebuch von <b>Marco Polo</b> <i>Il Milione</i> heißt? Vielleicht wegen des Spitznamens seiner Familie („Emilione“) oder vielleicht, weil es von „Millionen“ von Wundern erzählte!</p>`
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>10</b> Einheiten einer Stelle = <b>1</b> Einheit der nächsthöheren Stelle.</li>
<li>1.000 = eintausend; 10.000 = zehntausend; 100.000 = hunderttausend; <b>1.000.000 = eine Million</b>.</li>
<li>Die Ziffern werden in <b>Dreierklassen</b> gruppiert: Einer, Tausender, Millionen.</li>
<li>Der Wert einer Ziffer hängt von ihrer <b>Stelle</b> ab; die <b>Null</b> hält die leere Stelle besetzt.</li>
<li>Zum Vergleichen: zuerst die Anzahl der Ziffern, dann die Ziffern von links.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die großen Zahlen zu verstehen",
      intro: "Eine Million ist schwer vorstellbar. Hier sind andere Wege: Geld, 3D-Würfelchen, der Zahlenstrahl, die Zeitrechnung und die indische Methode.",
      tabs: [
        {
          label: "💶 Mit Geldscheinen",
          html: `<p>Stell dir vor, du hast nur Scheine und Münzen zu <b>1 €</b>, <b>10 €</b>, <b>100 €</b> … und musst <b>34.526 €</b> bezahlen (der Preis eines Autos).</p>
<ul>
<li>3 Bündel zu <b>10.000 €</b></li>
<li>4 Bündel zu <b>1.000 €</b></li>
<li>5 Scheine zu <b>100 €</b></li>
<li>2 Scheine zu <b>10 €</b></li>
<li>6 Münzen zu <b>1 €</b></li>
</ul>
<p>Jede Stelle der Zahl entspricht einem Schein, der 10-mal größer ist als der vorige. Eine <b>Million</b> Euro wären 100 Bündel zu 10.000 €!</p>`
        },
        {
          label: "🧊 Würfelchen: von 1 bis 1.000",
          html: `<p>Im System der <b>Basis-10-Blöcke</b> ist das Würfelchen der Einer, die Stange der Zehner, die Platte der Hunderter … und der <b>große Würfel</b> der Tausender. Hier siehst du eine Zahl bis 999: Schiebe den Regler bis <b>999</b> und stell dir vor, noch 1 Würfelchen hinzuzufügen. Mach die Umtausche: 10 Einer → 1 Zehner, 10 Zehner → 1 Hunderter, 10 Hunderter → <b>1 Tausenderwürfel</b>!</p>
<p>Und dann? 10 große Würfel in einer Reihe ergeben einen „Balken“ zu 10.000, 10 Balken eine „Platte“ zu 100.000 und 10 Platten einen Riesenwürfel zu <b>1.000.000</b>. Die Form wiederholt sich: Würfel, Balken, Platte … immer mal 10!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "⏱️ Wie lange dauert eine Million?",
          html: `<p>Versuche, eine Zahl pro Sekunde zu zählen, ohne dich je auszuruhen:</p>
<ul>
<li>bis <b>1.000</b>: etwa <b>17 Minuten</b>;</li>
<li>bis <b>100.000</b>: mehr als <b>27 Stunden</b>;</li>
<li>bis <b>1.000.000</b>: etwa <b>11 ½ Tage</b>, Tag und Nacht!</li>
</ul>
<p>Denn an einem Tag gibt es 24 × 60 × 60 = <b>86.400</b> Sekunden, und 1.000.000 : 86.400 ≈ 11,6 Tage.</p>
<p>Und eine <b>Milliarde</b> (tausend Millionen)? Das würde fast <b>32 Jahre</b> dauern!</p>`
        },
        {
          label: "📏 Auf dem Zahlenstrahl, mit Zoom",
          html: `<p>Der Zahlenstrahl funktioniert auch für große Zahlen: Man muss nur den Wert jedes Strichs ändern. Hier ist jeder Strich <b>1.000</b> wert: Der Strich 25 ist <b>25.000</b>, der 47 ist <b>47.000</b>.</p>
<p>Benutze die Sprünge: Springe von 30 (30.000) in Zehnerschritten (je 10.000). Wo kommst du nach 5 Sprüngen an? Bei 80, also <b>80.000</b>.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 100, step: 10, start: 30, marks: [25, 47] }
        },
        {
          label: "🇮🇳 Die indische Methode",
          html: `<p>Unsere Art, Zahlen zu schreiben (mit den Ziffern von 0 bis 9 und der Null), entstand tatsächlich in <b>Indien</b>, vor etwa 1500 Jahren, und kam über die arabischen Mathematiker und <b>Leonardo Fibonacci</b> (1202) nach Europa. Deshalb heißen sie <b>indisch-arabische Ziffern</b>.</p>
<p>Die Inder gruppieren die Ziffern allerdings anders:</p>
<table>
<tr><th>Zahl</th><th>In Italien und Deutschland</th><th>In Indien</th></tr>
<tr><td>hunderttausend</td><td>100.000</td><td>1,00,000 (1 Lakh)</td></tr>
<tr><td>eine Million</td><td>1.000.000</td><td>10,00,000 (10 Lakh)</td></tr>
<tr><td>zehn Millionen</td><td>10.000.000</td><td>1,00,00,000 (1 Crore)</td></tr>
</table>
<p>Die Zahl ist immer dieselbe: Es ändert sich nur die Art, zu <b>gruppieren</b> und zu benennen. Eine andere Gruppierung auszuprobieren hilft zu verstehen, dass die Klassen nur eine „Hilfe für die Augen“ sind.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der großen Zahlen",
      nodes: [
        { id: "base10", label: "Dezimalsystem", x: 50, y: 6, color: "#2563eb", html: "Wir zählen in Zehnergruppen: 10 Einheiten einer Stelle = 1 der nächsthöheren Stelle.", why: "Sehr wahrscheinlich, weil wir <b>10 Finger</b> haben! Viele alte Völker zählten in Zehnergruppen; die Maya benutzten die 20 (Finger der Hände und Füße), die Babylonier die 60." },
        { id: "posizione", label: "Stellenwert", x: 22, y: 28, color: "#16a34a", html: "Eine Ziffer ist mehr oder weniger wert, je nach der Stelle, an der sie steht.", why: "Das Stellenwertsystem mit der Null entstand in <b>Indien</b> (etwa 5.–6. Jahrhundert n. Chr.). Die Römer hatten es nicht: In MMXXV hat jedes Zeichen einen festen Wert, und das Rechnen war sehr schwierig." },
        { id: "zero", label: "Die Null", x: 50, y: 30, color: "#f59e0b", html: "Sie zeigt eine leere Stelle an: In 70.005 halten die Nullen die Stellen h, da, uk besetzt.", why: "Der indische Mathematiker <b>Brahmagupta</b> gab im Jahr 628 n. Chr. die ersten Regeln zum Rechnen mit der Null. Ohne Null könnte man 75 nicht von 705 oder 7.005 unterscheiden!" },
        { id: "classi", label: "Klassen", x: 78, y: 28, color: "#a855f7", html: "Gruppen aus drei Ziffern: Einer, Tausender, Millionen.", why: "Das Gruppieren zu dritt folgt den Namen: tausend, Million, Milliarde sind jeweils tausendmal das Vorige. Es ist nur eine Bequemlichkeit für die Augen: In Indien gruppiert man anders (Lakh, Crore)." },
        { id: "migliaia", label: "Tausender", x: 70, y: 55, color: "#3b82f6", html: "uk (1.000), dak (10.000), hk (100.000).", why: "„Mille“ kommt vom lateinischen <i>mille</i>; das Zeichen k kommt vom griechischen <i>chílioi</i>. Die Römer schrieben Tausend mit dem Buchstaben M." },
        { id: "milioni", label: "Millionen", x: 88, y: 78, color: "#7e22ce", html: "uM (1.000.000), daM, hM: tausendmal tausend.", why: "Das Wort ist italienisch („großes Tausend“) und taucht im Mittelalter auf, als italienische Kaufleute große Geldsummen zählen mussten." },
        { id: "leggere", label: "Lesen und schreiben", x: 22, y: 60, color: "#ef4444", html: "Klassen von rechts, Lesen von links; tausend, Millionen.", why: "Der Punkt oder Abstand zwischen den Klassen hilft, keine Fehler zu machen: Die internationale Norm (Internationales Einheitensystem, 1948–2003) empfiehlt den Abstand, weil in manchen Ländern der Punkt die Dezimalstellen anzeigt." },
        { id: "confronto", label: "Vergleichen", x: 30, y: 86, color: "#14b8a6", html: "Zuerst die Anzahl der Ziffern, dann die Ziffern von links.", why: "Es funktioniert dank des Stellenwerts: Die Ziffer ganz links „wiegt“ mehr als alle anderen zusammen (1.000 ist mehr als 999)." },
        { id: "abaco", label: "Abakus", x: 60, y: 82, color: "#64748b", html: "Rechengerät mit Stäben und Kugeln, um Zahlen darzustellen.", why: "Abakusse gibt es seit Tausenden von Jahren (Mesopotamien, Rom, China). Das chinesische <b>Suanpan</b> und das japanische <b>Soroban</b> benutzt man noch heute, um blitzschnell im Kopf zu rechnen." }
      ],
      edges: [
        ["base10", "posizione", "wird geschrieben mit"],
        ["posizione", "zero", "braucht die"],
        ["base10", "classi", "wird gruppiert in"],
        ["classi", "migliaia", ""],
        ["classi", "milioni", ""],
        ["posizione", "leggere", "ermöglicht das"],
        ["leggere", "confronto", "dann"],
        ["posizione", "abaco", "sieht man am"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vergleichen und Runden",
      questions: [
        { type: "mc", q: "Welche Zahl ist die größte?", options: ["98.999", "100.001", "99.990"], answer: 1, explain: "100.001 hat 6 Ziffern, die anderen 5." },
        { type: "num", q: "Runde 47.682 auf Tausender.", answer: 48000, explain: "Die Ziffer der Hunderter ist 6 (≥ 5): Man rundet auf 48.000 auf." },
        { type: "num", q: "Wie viel ist 999.999 + 1?", answer: 1000000, explain: "Alle 9 werden durch die Umtausche zu 0: eine Million!" }
      ]
    }
  ],
  glossary: [
    { t: "Tausender (migliaio)", d: "Gruppe von tausend Einheiten (1.000 = 10 Hunderter)." },
    { t: "Million (milione)", d: "Tausend Tausender: 1.000.000." },
    { t: "Klasse (classe)", d: "Gruppe aus drei Ziffern: einfache Einer, Tausender, Millionen." },
    { t: "Stelle (ordine)", d: "Position einer Ziffer: Einer, Zehner, Hunderter, Tausender …" },
    { t: "Stellenwert (valore posizionale)", d: "Der Wert einer Ziffer hängt von der Stelle ab, an der sie steht." },
    { t: "Zerlegen (scomporre)", d: "Eine Zahl als Summe der Werte ihrer Ziffern schreiben." },
    { t: "Runden (arrotondare)", d: "Eine Zahl durch eine andere, nahe und einfachere ersetzen (auf- oder abrunden)." },
    { t: "Dezimalsystem (sistema decimale)", d: "Zahlensystem zur Basis 10." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Wie viele Tausender stecken in einer Million?", answer: 1000, explain: "1.000 × 1.000 = 1.000.000." },
      { type: "mc", q: "Wie liest man 307.050?", options: ["dreihundertsiebentausendfünfzig", "siebenunddreißigtausendfünfhundert", "drei Millionen fünfundsiebzig"], answer: 0, explain: "307 tausend und 50 Einer." },
      { type: "num", q: "Schreibe in Ziffern: zwei Millionen vierhunderttausend.", answer: 2400000, explain: "2.400.000." },
      { type: "mc", q: "In 6.152.380 bedeutet die Ziffer 1 …", options: ["1 Hunderttausender (100.000)", "1 Zehntausender", "1 Million"], answer: 0, explain: "6 . 1 5 2 . 3 8 0: Die 1 steht an der Stelle hk." },
      { type: "num", q: "Setze zusammen: 4 hk + 2 uk + 9 da.", answer: 402090, explain: "400.000 + 2.000 + 90 = 402.090." },
      { type: "tf", q: "Um die Klassen einer großen Zahl zu trennen, darf man das Komma benutzen.", answer: false, explain: "Man benutzt den Punkt oder einen Abstand; das Komma ist für die Dezimalstellen." },
      { type: "order", q: "Ordne vom kleinsten zum größten.", items: ["9.999", "10.100", "10.010.000", "100.000.000"], explain: "Zuerst die Ziffern zählen, dann von links vergleichen." },
      { type: "mc", q: "Welches Zeichen gehört zwischen 345.120 ___ 345.210?", options: [">", "<", "="], answer: 1, explain: "Die Hunderter: 1 < 2, also 345.120 < 345.210." },
      { type: "num", q: "Wie viele Zehner stecken in 5.000?", answer: 500, explain: "5.000 : 10 = 500 Zehner." },
      { type: "text", q: "Wie heißt in Indien die Zahl 100.000?", answer: ["lakh", "un lakh", "ein lakh", "ein Lakh", "Lakh", "1 lakh"], explain: "1 Lakh = 100.000." }
    ],
    gen: [["placeValue", 3]]
  }
});
