TOPIC('de', {
  id: "p3-mat-numeri-1000",
  title: "Die Zahlen bis 1000",
  intro: "Bis gestern hast du bis 100 gezählt. Heute machen wir einen riesigen Sprung: Wir kommen bis <b>1000</b>! 🚀 Wir entdecken die <b>Hunderter</b>, lernen dreistellige Zahlen zu lesen, zu schreiben, zu zerlegen und zu vergleichen, und lernen den großen <b>Tausender</b> kennen.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Von den Einern zu den Hundertern",
      html: `<p>Unser Zahlensystem heißt <b>Dezimalsystem</b>, weil es in Gruppen zu <b>zehn</b> arbeitet:</p>
<ul>
<li><b>10 Einer</b> (u) bilden <b>1 Zehner</b> (da) → 10</li>
<li><b>10 Zehner</b> bilden <b>1 Hunderter</b> (h) → 100</li>
<li><b>10 Hunderter</b> bilden <b>1 Tausender</b> (k) → 1000</li>
</ul>
<p>Immer wenn du 10 Stück einer Stelle hast, kannst du sie gegen 1 Stück der nächstgrößeren Stelle „tauschen“, wie wenn du 10 Münzen zu 10 Cent gegen 1 Euro tauschst! 💶</p>
<p>Der Buchstabe <b>h</b> der Hunderter kommt von <i>hecto</i>, einem griechischen Wort für „hundert“; das <b>k</b> des Tausenders kommt von <i>kilo</i>, „tausend“. (Im Deutschen schreibt man für Einer, Zehner, Hunderter, Tausender oft E, Z, H, T; hier bleiben wir bei den Buchstaben u, da, h, k, wie sie auch am Abakus stehen.)</p>`
    },
    {
      type: "3d",
      title: "Würfelchen, Stäbchen und Platten in 3D",
      scene: "blocks",
      options: { mode: "base10", value: 245 },
      caption: "Das Würfelchen ist 1 Einer, das Stäbchen (10 Würfelchen) ist 1 Zehner, die Platte (10 Stäbchen = 100 Würfelchen) ist 1 Hunderter. Bewege den Regler und dreh das Modell: 245 = 2 Platten, 4 Stäbchen, 5 Würfelchen."
    },
    {
      type: "text",
      title: "Der Stellenwert: Jede Ziffer hat ihren Platz",
      html: `<p>Eine Zahl bis 999 schreibt man höchstens mit <b>drei Ziffern</b>. Jede Ziffer hat je nach dem <b>Platz</b>, den sie einnimmt, einen anderen Wert:</p>
<table>
<tr><th>h (Hunderter)</th><th>da (Zehner)</th><th>u (Einer)</th></tr>
<tr><td style="color:#8b5cf6;font-weight:bold">3</td><td style="color:#3b82f6;font-weight:bold">5</td><td style="color:#22c55e;font-weight:bold">6</td></tr>
<tr><td>3 × 100 = 300</td><td>5 × 10 = 50</td><td>6 × 1 = 6</td></tr>
</table>
<p>356 liest man „<b>dreihundertsechsundfünfzig</b>“.</p>
<p>Achtung bei der Ziffer <b>0</b>: Sie ist ein „Platzhalter“ und sagt, dass an dieser Stelle nichts ist. <b>305</b> = 3 h, <b>0</b> da, 5 u (dreihundertfünf); <b>350</b> = 3 h, 5 da, <b>0</b> u (dreihundertfünfzig). Ohne die Null könnten wir sie nicht unterscheiden!</p>
<p>Dieselbe <b>3</b> ist 3 in 123, 30 in 132 und 300 in 312 wert: Der Platz zählt!</p>`
    },
    {
      type: "widget",
      title: "Der Abakus mit drei Stäben",
      widget: "abacus",
      options: { columns: ["h", "da", "u"], value: 356 },
      caption: "Jede Kugel auf dem Stab der h ist 100 wert, auf dem Stab der da 10, auf dem Stab der u 1. Versuch 407 und dann 999. Was passiert, wenn du noch 1 dazutust?"
    },
    {
      type: "text",
      title: "Zusammensetzen und Zerlegen",
      html: `<p>Eine Zahl <b>zerlegen</b> heißt, sie in ihre Teile aufzuteilen:</p>
<ul>
<li>472 = <b>4 h + 7 da + 2 u</b></li>
<li>472 = <b>400 + 70 + 2</b> (additive Zerlegung)</li>
<li>472 = <b>4 × 100 + 7 × 10 + 2 × 1</b></li>
</ul>
<p><b>Zusammensetzen</b> ist das Gegenteil: 6 h + 0 da + 8 u = <b>608</b>.</p>
<p>Dieselbe Zahl kann man auch auf andere Weisen zerlegen: 472 = 47 da + 2 u, oder 472 = 3 h + 17 da + 2 u (ich habe einen Hunderter in 10 Zehner „aufgebrochen“). Dieser Trick wird dir beim Subtrahieren mit Entbündeln („Borgen“) sehr helfen!</p>`
    },
    {
      type: "svg",
      title: "Die Stellenwerttafel",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<rect x="40" y="30" width="170" height="60" rx="8" fill="#8b5cf6"/>
<rect x="215" y="30" width="170" height="60" rx="8" fill="#3b82f6"/>
<rect x="390" y="30" width="170" height="60" rx="8" fill="#22c55e"/>
<text x="125" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">h</text>
<text x="300" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">da</text>
<text x="475" y="70" font-size="30" font-weight="bold" text-anchor="middle" fill="#ffffff">u</text>
<g stroke="#4c1d95" stroke-width="2" fill="#ffffff">
<rect x="40" y="95" width="170" height="80"/><rect x="215" y="95" width="170" height="80"/><rect x="390" y="95" width="170" height="80"/>
</g>
<text x="125" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#7c3aed">4</text>
<text x="300" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#2563eb">7</text>
<text x="475" y="155" font-size="56" font-weight="bold" text-anchor="middle" fill="#16a34a">2</text>
<text x="125" y="215" font-size="26" text-anchor="middle" fill="#7c3aed">400</text>
<text x="300" y="215" font-size="26" text-anchor="middle" fill="#2563eb">70</text>
<text x="475" y="215" font-size="26" text-anchor="middle" fill="#16a34a">2</text>
<text x="212" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="387" y="215" font-size="26" text-anchor="middle" fill="#1f2937">+</text>
<text x="300" y="270" font-size="24" font-weight="bold" text-anchor="middle" fill="#1f2937">vierhundertzweiundsiebzig</text>
</svg>`,
      caption: "Jede Ziffer in ihrem Kästchen: 472 = 400 + 70 + 2."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wert der Ziffern",
      questions: [
        { type: "num", q: "Wie viel ist die Ziffer 8 in 583 wert?", answer: 80, explain: "Die 8 steht an der Stelle der Zehner: 8 × 10 = 80." },
        { type: "num", q: "Setze die Zahl zusammen: 7 h + 0 da + 4 u", answer: 704, explain: "Siebenhundertvier: Die Null hält die Stelle der Zehner frei." },
        { type: "mc", q: "Wie schreibt man „zweihundertneunzehn“?", options: ["2019", "219", "209"], answer: 1, explain: "Zweihundert (200) + neunzehn (19) = 219." }
      ]
    },
    {
      type: "text",
      title: "Vergleichen und ordnen",
      html: `<p>Um zu erkennen, welche Zahl größer ist:</p>
<ol>
<li>Wenn sie verschieden viele Ziffern haben, ist die mit <b>mehr Ziffern</b> größer: 1000 &gt; 999, 105 &gt; 98.</li>
<li>Wenn sie gleich viele Ziffern haben, vergleiche die <b>Hunderter</b>: 512 &gt; 498 (5 h &gt; 4 h).</li>
<li>Wenn die Hunderter gleich sind, vergleiche die <b>Zehner</b>: 372 &gt; 365.</li>
<li>Wenn auch die Zehner gleich sind, vergleiche die <b>Einer</b>: 847 &gt; 843.</li>
</ol>
<p>Merk dir die Zeichen: <b>&gt;</b> größer, <b>&lt;</b> kleiner, <b>=</b> gleich. Das geöffnete „Maul“ zeigt immer zur größeren Zahl! 🐊</p>
<p><b>Vorgänger und Nachfolger</b>: Der Nachfolger von 399 ist <b>400</b> (+1); der Vorgänger von 700 ist <b>699</b> (−1).</p>`
    },
    {
      type: "widget",
      title: "Der Zahlenstrahl bis 1000",
      widget: "numberLine",
      options: { min: 0, max: 1000, step: 100, marks: [250, 500, 750, 1000] },
      caption: "Mach Hunderterschritte: 100, 200, 300 … Zehn Sprünge bringen dich zu 1000! Wo liegt 500? Genau in der Mitte."
    },
    {
      type: "text",
      title: "Der Tausender: 1000",
      html: `<p>Nach 999 kommt <b>1000</b> (tausend): 999 + 1 = 1000. Du hast alle Kästchen gefüllt und musst „tauschen“:</p>
<ul>
<li>10 Einer → 1 Zehner (die Einer werden wieder 0);</li>
<li>10 Zehner → 1 Hunderter (die Zehner werden wieder 0);</li>
<li>10 Hunderter → <b>1 Tausender</b> (die Hunderter werden wieder 0).</li>
</ul>
<p>Um 1000 zu schreiben, braucht man ein <b>viertes Kästchen</b>: <b>k</b> (Tausender). 1000 = 1 k, 0 h, 0 da, 0 u.</p>
<p>1000 = 10 Hunderter = 100 Zehner = 1000 Einer. Mehrere Tausender: zweitausend, dreitausend …</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Sammelbilder in der Schachtel",
      html: `<p>Luca sammelt Sammelbilder. Er bewahrt sie so auf: die losen Bilder (Einer), die Tütchen zu 10 (Zehner) und die Schachteln zu 100 (Hunderter).</p>
<p>Er hat <b>3 Schachteln</b>, <b>12 Tütchen</b> und <b>7 lose Bilder</b>. Wie viele Bilder hat er?</p>
<ul>
<li>12 Tütchen = 10 Tütchen + 2 Tütchen = 1 Schachtel + 2 Tütchen</li>
<li>Er hat also 4 Schachteln, 2 Tütchen, 7 lose</li>
<li>4 h + 2 da + 7 u = <b>427 Bilder</b></li>
</ul>
<p>Wie viele fehlen ihm bis 1000? Wir machen Sprünge zu den „runden“ Zahlen: 427 + 3 = 430, 430 + 70 = 500, 500 + 500 = 1000 → 3 + 70 + 500 = <b>573</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Geld in der Spardose",
      html: `<p>In Annas Spardose sind: 2 Scheine zu 100 €, 5 Scheine zu 10 €, 9 Münzen zu 1 €.</p>
<p>Insgesamt: 200 + 50 + 9 = <b>259 €</b>.</p>
<p>Anna will ein Fahrrad für <b>295 €</b> kaufen. 259 &lt; 295: Es reicht noch nicht! Ihr fehlen 295 − 259 = <b>36 €</b>.</p>
<p>Der Euro funktioniert genau wie h, da, u: 100 €, 10 €, 1 €.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Null kam spät",
      html: `<p>Die Ziffern, die wir benutzen (0, 1, 2 … 9), heißen <b>indisch-arabische Ziffern</b>: Sie wurden in <b>Indien</b> erfunden, dann machten arabische Mathematiker sie bekannt, und nach Europa kamen sie durch <b>Leonardo Fibonacci</b> aus Pisa mit seinem Buch <i>Liber Abaci</i> von <b>1202</b>. Die große Neuheit war die <b>Null</b>, die den Stellenwert möglich macht. Davor benutzte man in Europa die römischen Zahlen, die keine Null hatten!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das M der Römer und die Lotusblume der Ägypter",
      html: `<p>Die Römer schrieben <b>C</b> = 100 (von <i>centum</i>), <b>D</b> = 500 und <b>M</b> = 1000 (von <i>mille</i>). So wurde aus 356 <b>CCCLVI</b>: ganz schön lang! Die alten <b>Ägypter</b> dagegen zeichneten: einen Strich für 1, einen Bogen für 10, ein aufgerolltes Seil für 100 und eine <b>Lotusblume</b> 🪷 für 1000.</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<ul>
<li>10 u = 1 da · 10 da = 1 h · 10 h = 1 k (1000).</li>
<li>Der Wert einer Ziffer hängt vom <b>Platz</b> ab: h, da, u.</li>
<li>Die <b>0</b> hält die leere Stelle frei: 305 ≠ 35.</li>
<li>Zerlegen: 472 = 4 h + 7 da + 2 u = 400 + 70 + 2.</li>
<li>Vergleichen: zuerst die h, dann die da, dann die u.</li>
<li>999 + 1 = 1000 (tausend).</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Zahlen bis 1000 zu verstehen",
      intro: "Wenn dir der Abakus nicht reicht, versuch es mit Geld, mit chinesischen Zahlen, mit den Römern oder mit dem Kilometerzähler.",
      tabs: [
        {
          label: "💶 Das Geld",
          html: `<p>Euro sind ein perfekter Abakus:</p>
<ul>
<li>💵 Schein zu <b>100 €</b> = 1 Hunderter</li>
<li>💵 Schein zu <b>10 €</b> = 1 Zehner</li>
<li>🪙 Münze zu <b>1 €</b> = 1 Einer</li>
</ul>
<p>Um <b>638 €</b> mit möglichst wenigen Stücken zu bezahlen: 6 zu 100, 3 zu 10, 8 zu 1. Wenn das Geschäft kein Wechselgeld hat und dir statt eines 10-€-Scheins 10 Münzen zu 1 € gibt … ist das genau der „Tausch“ zwischen Zehnern und Einern!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f0fdf4"/>
<g fill="#86efac" stroke="#15803d" stroke-width="3">
<rect x="20" y="30" width="100" height="50" rx="6"/><rect x="30" y="40" width="100" height="50" rx="6"/><rect x="40" y="50" width="100" height="50" rx="6"/>
</g>
<text x="90" y="82" font-size="22" font-weight="bold" text-anchor="middle" fill="#14532d">100 €</text>
<text x="90" y="140" font-size="22" text-anchor="middle" fill="#14532d">× 6 = 600</text>
<g fill="#fca5a5" stroke="#b91c1c" stroke-width="3">
<rect x="230" y="40" width="90" height="45" rx="6"/><rect x="240" y="50" width="90" height="45" rx="6"/>
</g>
<text x="285" y="80" font-size="20" font-weight="bold" text-anchor="middle" fill="#7f1d1d">10 €</text>
<text x="285" y="140" font-size="22" text-anchor="middle" fill="#7f1d1d">× 3 = 30</text>
<g fill="#fde047" stroke="#a16207" stroke-width="3">
<circle cx="440" cy="60" r="22"/><circle cx="480" cy="60" r="22"/><circle cx="520" cy="60" r="22"/><circle cx="460" cy="95" r="22"/><circle cx="500" cy="95" r="22"/>
</g>
<text x="480" y="66" font-size="16" font-weight="bold" text-anchor="middle" fill="#713f12">1 €</text>
<text x="480" y="140" font-size="22" text-anchor="middle" fill="#713f12">× 8 = 8</text>
<text x="300" y="195" font-size="30" font-weight="bold" text-anchor="middle" fill="#1f2937">600 + 30 + 8 = 638 €</text>
</svg>`
        },
        {
          label: "🇨🇳 Wie in China und Japan",
          html: `<p>Auf Chinesisch (und auf Japanisch) spricht man die Zahlen ganz <b>regelmäßig</b>: Man sagt genau, wie viele Hunderter, wie viele Zehner und wie viele Einer es sind!</p>
<ul>
<li>356 = 三百五十六 = „<b>drei-hundert fünf-zehn sechs</b>“</li>
<li>11 = 十一 = „<b>zehn eins</b>“ (im Deutschen versteht man bei „elf“ nichts!)</li>
<li>20 = 二十 = „<b>zwei-zehn</b>“</li>
</ul>
<p>Versuch, die Zahlen „auf Chinesisch“ zu sagen: 472 = „vier-hundert sieben-zehn zwei“. Das ist ein wunderbarer Weg, den Stellenwert zu verstehen. Manche Forscher glauben, dass das den Kindern in Ostasien hilft, die Zahlen schneller zu lernen!</p>`
        },
        {
          label: "🧊 Würfelchen in 3D",
          html: `<p>Bau die Zahl mit den Blöcken: Die Platte ist 100, das Stäbchen ist 10, das Würfelchen ist 1. Versuch <b>999</b>: 9 Platten, 9 Stäbchen, 9 Würfelchen. Stell dir jetzt vor, du legst 1 Würfelchen dazu: 10 Würfelchen werden ein Stäbchen, 10 Stäbchen eine Platte, und 10 Platten, übereinander gelegt, bilden einen <b>großen Würfel zu 1000</b>!</p>`,
          scene: "blocks",
          options: { mode: "base10", value: 999 }
        },
        {
          label: "🚗 Der Kilometerzähler",
          html: `<p>Hast du schon einmal den Kilometerzähler eines alten Autos angeschaut? Er hat <b>Rädchen</b> mit den Ziffern von 0 bis 9.</p>
<p>Wenn das Rädchen der Einer von 9 auf 0 springt, schiebt es das Rädchen der Zehner um eins weiter. Wenn das der Zehner von 9 auf 0 springt, schiebt es die Hunderter weiter.</p>
<p>0 9 9 → 1 0 0 · 9 9 9 → 1 0 0 0: Alle Rädchen drehen sich zusammen! Das ist der „Tausch“ des Dezimalsystems, von einer Maschine gemacht.</p>`
        },
        {
          label: "🏛️ Römische Zahlen",
          html: `<p>Die Römer hatten keinen Stellenwert: Jedes Zeichen ist immer gleich viel wert, und die Werte werden addiert (oder subtrahiert, wenn ein kleines Zeichen vor einem großen steht).</p>
<table>
<tr><th>Zeichen</th><td>I</td><td>V</td><td>X</td><td>L</td><td>C</td><td>D</td><td>M</td></tr>
<tr><th>Wert</th><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>
</table>
<p>Beispiele: <b>CCXL</b> = 100 + 100 + (50 − 10) = 240 · <b>CMXCIX</b> = 999 · <b>M</b> = 1000.</p>
<p>Vergleiche: Wir schreiben 999 mit 3 Ziffern, die Römer mit 6 Zeichen!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Zahlen bis 1000: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "decimale", label: "Dezimalsystem", x: 50, y: 6, color: "#2563eb", html: "Wir zählen in Zehnergruppen.", why: "Fast sicher, weil wir <b>10 Finger</b> haben! Nicht alle Völker haben es so gemacht: Die Maya zählten zur Basis 20 (Finger und Zehen), die Babylonier zur Basis 60, daher kommen die 60 Minuten einer Stunde." },
        { id: "cifre", label: "10 Ziffern", x: 20, y: 26, color: "#f59e0b", html: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9.", why: "Das sind die indisch-arabischen Ziffern: in Indien erfunden, von arabischen Mathematikern (wie al-Chwarizmi, 9. Jahrhundert) verbreitet und 1202 von Fibonacci nach Europa gebracht." },
        { id: "zero", label: "Die Null", x: 20, y: 52, color: "#64748b", html: "Die Ziffer, die eine leere Stelle anzeigt.", why: "Der indische Mathematiker <b>Brahmagupta</b> war im Jahr 628 n. Chr. einer der Ersten, die die Null wie eine echte Zahl mit eigenen Regeln behandelten. Ohne Null könnte man 35 nicht von 305 unterscheiden." },
        { id: "posizione", label: "Stellenwert", x: 50, y: 40, color: "#a855f7", html: "Eine Ziffer ist je nach Platz mehr oder weniger wert.", why: "Das ist die geniale Idee, die das Rechnen leicht macht: Mit nur 10 Ziffern kann man jede Zahl schreiben. Wenn man eine Ziffer um eine Stelle nach links schiebt, wird ihr Wert 10-mal so groß." },
        { id: "unita", label: "Einer (u)", x: 82, y: 22, color: "#22c55e", html: "Das Würfelchen: Es ist 1 wert.", why: "Das ist der Ausgangspunkt: eins nach dem anderen zählen. Vom lateinischen Wort <i>unus</i>, eins." },
        { id: "decine", label: "Zehner (da)", x: 82, y: 46, color: "#3b82f6", html: "10 Einer = 1 Zehner.", why: "In Zehnergruppen zu bündeln erlaubt es, viele Dinge schnell zu zählen: Statt 30 Gegenstände zählst du 3 Gruppen." },
        { id: "centinaia", label: "Hunderter (h)", x: 82, y: 70, color: "#8b5cf6", html: "10 Zehner = 1 Hunderter = 100.", why: "Das Zeichen h kommt von der griechischen Vorsilbe <i>hecto-</i> (hundert), die wir auch im Hektoliter (100 Liter) und im Hektar benutzen." },
        { id: "migliaio", label: "Tausender (k)", x: 50, y: 92, color: "#ef4444", html: "10 Hunderter = 1000.", why: "„Mille“ kommt vom lateinischen <i>mille</i>. Das Zeichen k kommt vom griechischen <i>chílioi</i> (tausend), wie in Kilogramm und Kilometer." },
        { id: "confronto", label: "Vergleichen und zerlegen", x: 20, y: 80, color: "#14b8a6", html: "472 = 400 + 70 + 2; 512 &gt; 498.", why: "Weil jede Stelle 10-mal so viel wert ist wie die rechts von ihr, zählt ein einziger Hunderter mehr mehr als jede Anzahl von Zehnern und Einern: Darum vergleicht man zuerst die Hunderter." }
      ],
      edges: [
        ["decimale", "cifre", "benutzt"],
        ["cifre", "zero", "einschließlich der"],
        ["decimale", "posizione", "beruht auf dem"],
        ["posizione", "unita", "Stelle der"],
        ["unita", "decine", "×10"],
        ["decine", "centinaia", "×10"],
        ["centinaia", "migliaio", "×10"],
        ["zero", "posizione", "macht möglich den"],
        ["posizione", "confronto", "erlaubt das"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vergleichen und der Tausender",
      questions: [
        { type: "mc", q: "Welche Zahl ist größer?", options: ["689", "698", "669"], answer: 1, explain: "Gleiche Hunderter (6): Ich vergleiche die Zehner, 9 ist die größte → 698." },
        { type: "num", q: "Was ist der Nachfolger von 599?", answer: 600, explain: "599 + 1 = 600: Die Einer und die Zehner „tauschen“." },
        { type: "num", q: "Wie viele Hunderter gibt es in 1000?", answer: 10, explain: "10 × 100 = 1000." }
      ]
    }
  ],
  glossary: [
    { t: "Einer (u)", d: "Das einzelne Stück: Es ist 1 wert." },
    { t: "Zehner (da)", d: "Gruppe von 10 Einern." },
    { t: "Hunderter (h)", d: "Gruppe von 10 Zehnern, also 100 Einern." },
    { t: "Tausender (k)", d: "Gruppe von 10 Hundertern, also 1000 Einern." },
    { t: "Ziffer", d: "Jedes der 10 Zeichen, mit denen man Zahlen schreibt (0–9)." },
    { t: "Stellenwert", d: "Der Wert einer Ziffer hängt vom Platz ab, den sie in der Zahl einnimmt." },
    { t: "Zerlegen", d: "Eine Zahl in ihre Teile aufteilen: 472 = 400 + 70 + 2." },
    { t: "Zusammensetzen", d: "Eine Zahl aus ihren Teilen bilden: 4 h + 7 da + 2 u = 472." },
    { t: "Vorgänger", d: "Die Zahl, die direkt davor kommt (−1)." },
    { t: "Nachfolger", d: "Die Zahl, die direkt danach kommt (+1)." },
    { t: "Dezimalsystem", d: "Zahlensystem, das in Zehnergruppen bündelt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Setze die Zahl zusammen: 5 h + 3 da + 9 u", answer: 539, explain: "500 + 30 + 9 = 539." },
      { type: "num", q: "Wie viel ist die Ziffer 7 in 742 wert?", answer: 700, explain: "Sie steht an der Stelle der Hunderter: 7 × 100 = 700." },
      { type: "mc", q: "Wie schreibt man „neunhundertsechs“?", options: ["960", "906", "9006"], answer: 1, explain: "Neun Hunderter, null Zehner, sechs Einer: 906." },
      { type: "tf", q: "305 und 350 sind dieselbe Zahl.", answer: false, explain: "305 hat 0 Zehner und 5 Einer; 350 hat 5 Zehner und 0 Einer." },
      { type: "num", q: "Was ist der Vorgänger von 800?", answer: 799, explain: "800 − 1 = 799." },
      { type: "mc", q: "Welche Zerlegung stimmt für 608?", options: ["600 + 80", "600 + 8", "60 + 8"], answer: 1, explain: "6 h, 0 da, 8 u = 600 + 8." },
      { type: "order", q: "Bring in die Reihenfolge von der kleinsten zur größten.", items: ["98", "189", "198", "891", "1000"], explain: "Zuerst die zweistellige Zahl, dann vergleicht man die Hunderter, die Zehner, zuletzt 1000." },
      { type: "num", q: "Wie viele Zehner gibt es in 1000?", answer: 100, explain: "1000 : 10 = 100 Zehner." },
      { type: "mc", q: "Welches Zeichen gehört zwischen 457 … 475?", options: [">", "<", "="], answer: 1, explain: "Gleiche Hunderter; Zehner 5 < 7: 457 < 475." },
      { type: "text", q: "Schreib die Zahl 1000 in Buchstaben.", answer: ["tausend", "eintausend", "mille"], explain: "1000 liest man „tausend“ (auf Italienisch «mille»)." },
      { type: "num", q: "Luca hat 3 Schachteln zu 100 Sammelbildern, 4 Tütchen zu 10 und 6 lose Bilder. Wie viele Bilder hat er?", answer: 346, explain: "300 + 40 + 6 = 346." }
    ],
    gen: [["placeValue", 3]]
  }
});
