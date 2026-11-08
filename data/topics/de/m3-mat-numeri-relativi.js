TOPIC('de', {
  id: "m3-mat-numeri-relativi",
  title: "Die relativen Zahlen (positive und negative Zahlen)",
  intro: "Im Winter sinkt die Temperatur unter null, das Tote Meer liegt unter dem Meeresspiegel, das Bankkonto kann „ins Minus“ rutschen. Um diese Situationen zu beschreiben, brauchen wir die <b>relativen Zahlen</b>: Zahlen mit dem <b>Vorzeichen</b> + oder −. Wir lernen, sie zu vergleichen und mit ihnen alle vier Rechenarten auszuführen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "Was sind relative Zahlen?",
      html: `<p>Die <b>relativen Zahlen</b> sind Zahlen mit einem vorangestellten <b>Vorzeichen</b>:</p>
<ul>
<li><b>positive</b> (+): größer als null → +1, +5, +3,7, +2/3;</li>
<li><b>negative</b> (−): kleiner als null → −1, −8, −0,5, −3/4;</li>
<li>die <b>Null</b> ist weder positiv noch negativ.</li>
</ul>
<p>Sie heißen „relativ“, weil ihr Wert auf einen Ausgangspunkt bezogen (<i>relativ</i>) ist, die Null: 0 °C, der Meeresspiegel, das Erdgeschoss eines Hauses.</p>
<p>Die <b>ganzen Zahlen</b> bilden die Menge <b>ℤ</b> = {…, −3, −2, −1, 0, +1, +2, +3, …}. Der Buchstabe Z kommt vom deutschen Wort <i>Zahlen</i>. Wenn wir auch Brüche und Dezimalzahlen mit Vorzeichen dazunehmen, erhalten wir die <b>rationalen Zahlen ℚ</b>.</p>`
    },
    {
      type: "text",
      title: "Betrag, Gegenzahlen und gleiche/verschiedene Vorzeichen",
      html: `<ul>
<li>Der <b>Betrag</b> ist die Zahl ohne Vorzeichen: Er ist der <b>Abstand von null</b>. Man schreibt ihn zwischen senkrechten Strichen: |−7| = 7, |+7| = 7.</li>
<li>Zwei Zahlen sind <b>Gegenzahlen</b>, wenn sie denselben Betrag und verschiedene Vorzeichen haben: +5 und −5. Ihre Summe ist 0.</li>
<li>Zwei Zahlen haben <b>gleiche Vorzeichen</b> (concordi), wenn sie dasselbe Vorzeichen haben (+3 und +8; −2 und −9), und <b>verschiedene Vorzeichen</b> (discordi), wenn ihre Vorzeichen verschieden sind (+4 und −6).</li>
</ul>`
    },
    {
      type: "svg",
      title: "Der Zahlenstrahl (die orientierte Gerade)",
      svg: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="230" fill="#f8fafc"/>
<line x1="20" y1="120" x2="620" y2="120" stroke="#1f2937" stroke-width="4"/>
<polygon points="620,120 604,111 604,129" fill="#1f2937"/>
<g stroke="#1f2937" stroke-width="3">
<line x1="70" y1="110" x2="70" y2="130"/><line x1="120" y1="110" x2="120" y2="130"/><line x1="170" y1="110" x2="170" y2="130"/><line x1="220" y1="110" x2="220" y2="130"/><line x1="270" y1="110" x2="270" y2="130"/>
<line x1="320" y1="102" x2="320" y2="138"/>
<line x1="370" y1="110" x2="370" y2="130"/><line x1="420" y1="110" x2="420" y2="130"/><line x1="470" y1="110" x2="470" y2="130"/><line x1="520" y1="110" x2="520" y2="130"/><line x1="570" y1="110" x2="570" y2="130"/>
</g>
<g font-size="17" text-anchor="middle">
<text x="70" y="158" fill="#dc2626">−5</text><text x="120" y="158" fill="#dc2626">−4</text><text x="170" y="158" fill="#dc2626">−3</text><text x="220" y="158" fill="#dc2626">−2</text><text x="270" y="158" fill="#dc2626">−1</text>
<text x="320" y="160" fill="#1f2937" font-weight="bold">0</text>
<text x="370" y="158" fill="#2563eb">+1</text><text x="420" y="158" fill="#2563eb">+2</text><text x="470" y="158" fill="#2563eb">+3</text><text x="520" y="158" fill="#2563eb">+4</text><text x="570" y="158" fill="#2563eb">+5</text>
</g>
<text x="170" y="200" font-size="18" text-anchor="middle" fill="#dc2626" font-weight="bold">← NEGATIV</text>
<text x="470" y="200" font-size="18" text-anchor="middle" fill="#2563eb" font-weight="bold">POSITIV →</text>
<circle cx="170" cy="120" r="8" fill="#a855f7"/><circle cx="470" cy="120" r="8" fill="#a855f7"/>
<path d="M170 100 Q245 40 320 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<path d="M320 100 Q395 40 470 100" fill="none" stroke="#a855f7" stroke-width="3"/>
<text x="245" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">Abstand 3</text>
<text x="395" y="55" font-size="15" text-anchor="middle" fill="#7e22ce">Abstand 3</text>
<text x="320" y="30" font-size="16" text-anchor="middle" fill="#7e22ce">−3 und +3 sind Gegenzahlen: |−3| = |+3| = 3</text>
</svg>`,
      caption: "Je weiter rechts eine Zahl liegt, desto größer ist sie. Gegenzahlen liegen symmetrisch zur Null."
    },
    {
      type: "text",
      title: "Relative Zahlen vergleichen",
      html: `<p>Auf dem Zahlenstrahl <b>ist die Zahl größer, die weiter rechts liegt</b>. Daraus ergeben sich die Regeln:</p>
<ul>
<li>jede <b>positive</b> Zahl ist größer als null und größer als jede negative: +1 &gt; −100;</li>
<li>von zwei <b>positiven</b> Zahlen ist die mit dem größeren Betrag größer: +8 &gt; +3;</li>
<li>von zwei <b>negativen</b> Zahlen ist die mit dem <b>kleineren</b> Betrag größer: −3 &gt; −8 (bei −3 °C ist es „weniger kalt“ als bei −8 °C!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Spring auf dem Zahlenstrahl",
      widget: "numberLine",
      options: { min: -10, max: 10, step: 3, start: 2, marks: [-5, 0, 5] },
      caption: "Starte bei +2 und springe in Dreierschritten zurück: −1, −4, −7 … Jeder Sprung nach links ist, als würdest du −3 addieren."
    },
    {
      type: "text",
      title: "Addition und Subtraktion",
      html: `<p><b>Addition</b> (algebraische Summe):</p>
<ul>
<li><b>Zahlen mit gleichem Vorzeichen</b>: Man addiert die Beträge und setzt das <b>gemeinsame Vorzeichen</b>. (+3) + (+5) = +8; (−3) + (−5) = −8.</li>
<li><b>Zahlen mit verschiedenen Vorzeichen</b>: Man zieht den kleineren Betrag vom größeren ab und setzt das <b>Vorzeichen der Zahl mit dem größeren Betrag</b>. (+7) + (−4) = +3; (−9) + (+2) = −7.</li>
</ul>
<p><b>Subtraktion</b>: Eine Zahl abzuziehen ist dasselbe, wie ihre <b>Gegenzahl zu addieren</b>.</p>
<ul>
<li>(+5) − (+8) = (+5) + (−8) = −3</li>
<li>(−4) − (−6) = (−4) + (+6) = +2</li>
</ul>
<p>Dank der relativen Zahlen ist die Subtraktion <b>immer möglich</b>: 3 − 7 ist nicht mehr „unmöglich“, es ergibt −4!</p>
<p><b>Klammerregel</b>: Ein <b>+</b> vor der Klammer lässt sie wegfallen und die Vorzeichen bleiben; ein <b>−</b> davor lässt sie wegfallen und <b>kehrt</b> alle Vorzeichen um: −(+3 − 5) = −3 + 5.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vergleich und Summe",
      questions: [
        { type: "mc", q: "Welche Zahl ist die größte?", options: ["−12", "−2", "−7"], answer: 1, explain: "Von negativen Zahlen ist die größer, die näher an null liegt: −2." },
        { type: "num", q: "(−6) + (+10) = ?", answer: 4, explain: "Verschiedene Vorzeichen: 10 − 6 = 4, Vorzeichen der Zahl mit dem größeren Betrag (+): +4." },
        { type: "num", q: "(−3) − (+5) = ?", answer: -8, explain: "(−3) + (−5) = −8." }
      ]
    },
    {
      type: "text",
      title: "Multiplikation, Division und Potenzen",
      html: `<p>Man multipliziert (oder dividiert) die Beträge und wendet die <b>Vorzeichenregel</b> an:</p>
<table>
<tr><th>×  :</th><th>+</th><th>−</th></tr>
<tr><th>+</th><td>+</td><td>−</td></tr>
<tr><th>−</th><td>−</td><td>+</td></tr>
</table>
<p>Kurz: <b>gleiche Vorzeichen → +</b>, <b>verschiedene Vorzeichen → −</b>.</p>
<ul>
<li>(−4) × (−3) = +12 &nbsp; (+4) × (−3) = −12 &nbsp; (−20) : (+5) = −4 &nbsp; (−20) : (−5) = +4</li>
</ul>
<p><b>Potenzen</b>: Ist die Basis positiv, ist das Ergebnis immer positiv. Ist die Basis <b>negativ</b>:</p>
<ul>
<li><b>gerader</b> Exponent → <b>positives</b> Ergebnis: (−2)<sup>4</sup> = +16;</li>
<li><b>ungerader</b> Exponent → <b>negatives</b> Ergebnis: (−2)<sup>3</sup> = −8.</li>
</ul>
<p>⚠️ Achtung: (−3)<sup>2</sup> = +9, aber −3<sup>2</sup> = −9, denn ohne Klammer bezieht sich der Exponent nur auf die 3!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Thermometer",
      html: `<p>Um 6 Uhr morgens hat es in Cortina <b>−7 °C</b>. Mittags ist die Temperatur um <b>12 °C</b> gestiegen. Nachts sinkt sie gegenüber mittags um <b>9 °C</b>.</p>
<ul>
<li>Mittag: (−7) + (+12) = <b>+5 °C</b></li>
<li>Nacht: (+5) + (−9) = <b>−4 °C</b></li>
<li>Temperaturunterschied zwischen Höchst- und Tiefstwert: (+5) − (−7) = 5 + 7 = <b>12 °C</b></li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: der Aufzug und das Bankkonto",
      html: `<p><b>Aufzug</b>: Das Erdgeschoss ist 0, die Garagen liegen in den Stockwerken −1 und −2. Marta fährt vom Stockwerk −2 ins Stockwerk +5: Wie viele Stockwerke ist sie gefahren? (+5) − (−2) = <b>7 Stockwerke</b>.</p>
<p><b>Bankkonto</b>: Luca hat 40 €. Er bezahlt 3 Abos zu je 18 €: 40 + 3 × (−18) = 40 − 54 = <b>−14 €</b>. Das Konto ist um 14 € „im Minus“: Das ist eine <b>Schuld</b>.</p>
<p><b>Term</b>: −2 × (−3 + 5) − (−4)² : 8 = −2 × (+2) − 16 : 8 = −4 − 2 = <b>−6</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Rote und schwarze Stäbchen",
      html: `<p>Vor mehr als 2000 Jahren rechnete man im chinesischen Buch <i>Neun Kapitel der mathematischen Kunst</i> mit <b>Stäbchen</b>: den <b>roten</b> für die positiven und den <b>schwarzen</b> für die negativen Zahlen. In Indien schrieb der Mathematiker <b>Brahmagupta</b> im Jahr 628 n. Chr. die Vorzeichenregeln auf und sprach von <b>„Vermögen“</b> (positiv) und <b>„Schulden“</b> (negativ): <i>„eine Schuld von einer Schuld ist ein Vermögen“</i>. In Europa wurden die negativen Zahlen viel später akzeptiert: Noch im 16. Jahrhundert nannten manche sie „absurde Zahlen“.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Temperatur- und Höhenrekorde",
      html: `<ul>
<li>Die tiefste auf der Erde gemessene Temperatur beträgt <b>−89,2 °C</b>, an der Station Wostok in der Antarktis, am 21. Juli 1983.</li>
<li>Das Ufer des <b>Toten Meeres</b> ist der tiefste Punkt des Festlands auf dem Planeten: etwa <b>−430 m</b> unter dem Meeresspiegel (und es sinkt weiter).</li>
<li>Der <b>Marianengraben</b> reicht bis etwa <b>−10 900 m</b>, während der Everest bei <b>+8849 m</b> liegt: Zwischen beiden liegen fast 20 km!</li>
<li>Der Nullpunkt der <b>Kelvin</b>-Skala (absoluter Nullpunkt) entspricht <b>−273,15 °C</b>: Nichts kann kälter sein.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Betrag = Abstand von null. Gegenzahlen: gleicher Betrag, verschiedenes Vorzeichen.</li>
<li>Summe: <b>gleiche Vorzeichen</b> → addieren und das Vorzeichen behalten; <b>verschiedene Vorzeichen</b> → subtrahieren und das Vorzeichen des „Stärkeren“ nehmen.</li>
<li>Subtrahieren = die Gegenzahl addieren.</li>
<li>Produkt und Quotient: <b>gleiche Vorzeichen +</b>, <b>verschiedene Vorzeichen −</b>.</li>
<li>Negative Basis: gerader Exponent → +, ungerader → −.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die relativen Zahlen zu verstehen",
      intro: "Überzeugt dich die Vorzeichenregel nicht? Hier sind andere Arten, sie zu „sehen“: die chinesischen Stäbchen, Paare, die sich aufheben, der rückwärts laufende Film, der Zahlenstrahl zum Entlanggehen.",
      tabs: [
        {
          label: "🇨🇳 Rote und schwarze Stäbchen",
          html: `<p>Wie im alten China benutzt du zwei Farben: <b style="color:#dc2626">rot = +1</b> und <b>schwarz = −1</b>. Ein rotes und ein schwarzes zusammen <b>heben sich auf</b> (ergeben 0): Das ist ein „Nullpaar“.</p>
<p>(+5) + (−3): Lege 5 rote und 3 schwarze hin. Entferne 3 rot-schwarze Paare. Es bleiben <b>2 rote → +2</b>.</p>
<p>(+2) − (+5): Ich muss 5 rote wegnehmen, habe aber nur 2! Ich füge 3 Nullpaare hinzu (3 rote + 3 schwarze: der Wert ändert sich nicht), nun nehme ich 5 rote weg. Es bleiben <b>3 schwarze → −3</b>. Darum ist Subtrahieren = die Gegenzahl addieren!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fefce8"/>
<text x="20" y="35" font-size="20" fill="#1f2937" font-weight="bold">(+5) + (−3) = +2</text>
<g stroke-width="10" stroke-linecap="round">
<line x1="40" y1="60" x2="40" y2="140" stroke="#dc2626"/><line x1="70" y1="60" x2="70" y2="140" stroke="#dc2626"/><line x1="100" y1="60" x2="100" y2="140" stroke="#dc2626"/><line x1="130" y1="60" x2="130" y2="140" stroke="#dc2626"/><line x1="160" y1="60" x2="160" y2="140" stroke="#dc2626"/>
<line x1="100" y1="160" x2="100" y2="220" stroke="#111827"/><line x1="130" y1="160" x2="130" y2="220" stroke="#111827"/><line x1="160" y1="160" x2="160" y2="220" stroke="#111827"/>
</g>
<rect x="85" y="50" width="90" height="180" rx="12" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 5"/>
<text x="190" y="140" font-size="16" fill="#7c3aed">3 Paare rot+schwarz = 0</text>
<text x="20" y="235" font-size="15" fill="#dc2626">2 rote bleiben</text>
<text x="390" y="80" font-size="20" fill="#dc2626" font-weight="bold">rot = +1</text>
<text x="390" y="120" font-size="20" fill="#111827" font-weight="bold">schwarz = −1</text>
<text x="390" y="160" font-size="20" fill="#7c3aed" font-weight="bold">rot + schwarz = 0</text>
</svg>`
        },
        {
          label: "🎬 Der rückwärts laufende Film",
          html: `<p>Warum ergibt „minus mal minus“ plus? Stell dir ein Video von einem Auto vor:</p>
<ul>
<li>Geschwindigkeit <b>+</b> (vorwärts) × Zeit <b>+</b> (normales Video) → das Auto fährt vorwärts: <b>+</b></li>
<li>Geschwindigkeit <b>−</b> (Rückwärtsgang) × Zeit <b>+</b> → das Auto fährt rückwärts: <b>−</b></li>
<li>Geschwindigkeit <b>+</b> × Zeit <b>−</b> (rückwärts abgespieltes Video) → es sieht aus, als führe es rückwärts: <b>−</b></li>
<li>Geschwindigkeit <b>−</b> (Rückwärtsgang) × Zeit <b>−</b> (rückwärts abgespieltes Video) → es sieht aus, als führe es <b>vorwärts</b>: <b>+</b>!</li>
</ul>
<p>Zwei „Umkehrungen“ heben sich auf, wie im Deutschen „es ist nicht wahr, dass es nicht regnet“ bedeutet: „es regnet“.</p>`
        },
        {
          label: "🐸 Der Frosch auf dem Zahlenstrahl",
          html: `<p>Benutze den Zahlenstrahl: Der Frosch startet bei der ersten Zahl. <b>Eine positive Zahl addieren</b> = nach rechts springen; <b>eine negative Zahl addieren</b> = nach links springen. <b>Subtrahieren</b> = sich zur anderen Seite umdrehen, bevor man springt.</p>
<p>Probiere es aus: Starte bei −4 und springe zweimal um +3: Wo kommst du an? (−4) + 2 × (+3) = <b>+2</b>.</p>`,
          widget: "numberLine",
          options: { min: -12, max: 12, step: 3, start: -4 }
        },
        {
          label: "🇺🇸 Die Algebra-Plättchen",
          html: `<p>In amerikanischen Schulen benutzt man farbige Plättchen, die <b>algebra tiles</b> heißen: gelbe Quadrate (+1) und rote (−1). Die Methode ist dieselbe wie bei den chinesischen Stäbchen: Die <b>zero pairs</b> (Nullpaare) werden entfernt.</p>
<p>Für die Multiplikation: (−2) × (+3) = „nimm 3-mal 2 rote Plättchen“ = 6 rote = −6. Und (−2) × (−3)? „<b>Nimm</b> 3-mal 2 rote Plättchen <b>weg</b>“: Du startest bei null (mit vielen Nullpaaren), nimmst 6 rote weg … es bleiben 6 gelbe = <b>+6</b>!</p>
<p>Hier unten kannst du ein Rechteck aus Würfeln bauen: Zeilen × Spalten ist der Betrag des Produkts; das Vorzeichen liefert die Regel.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 2, b: 3 }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der relativen Zahlen",
      nodes: [
        { id: "naturali", label: "Natürliche Zahlen ℕ", x: 50, y: 6, color: "#64748b", html: "0, 1, 2, 3, … die Zahlen zum Zählen.", why: "Sie sind die ältesten: Sie entstehen, um Gegenstände zu zählen. Aber mit ihnen ist die Subtraktion nicht immer möglich (3 − 7 = ?)." },
        { id: "relativi", label: "Ganze Zahlen ℤ", x: 50, y: 28, color: "#2563eb", html: "…, −2, −1, 0, +1, +2, … Zahlen mit Vorzeichen.", why: "Sie entstehen, um die Subtraktion immer möglich zu machen und um Größen mit zwei Richtungen darzustellen (Schulden/Guthaben, oben/unten). Verwendet in China (Neun Kapitel) und Indien (Brahmagupta, 628); in Europa erst ab dem 17. Jahrhundert voll akzeptiert." },
        { id: "retta", label: "Zahlenstrahl", x: 15, y: 48, color: "#16a34a", html: "Eine Gerade mit Ursprung (0), Richtung und Maßeinheit.", why: "Die Idee, Zahlen als Punkte auf einer Geraden darzustellen, mit den negativen links, verbreitet sich im 17. Jahrhundert mit der analytischen Geometrie von Descartes und mit Mathematikern wie John Wallis (1685)." },
        { id: "assoluto", label: "Betrag", x: 85, y: 48, color: "#a855f7", html: "Der Abstand von null: |−5| = 5.", why: "Ein Abstand kann nicht negativ sein: Deshalb ist der Betrag immer ≥ 0. Das Symbol |x| wurde 1841 von Karl Weierstraß eingeführt." },
        { id: "somma", label: "Algebraische Summe", x: 25, y: 72, color: "#f59e0b", html: "Gleiche Vorzeichen: addieren und gemeinsames Vorzeichen. Verschiedene Vorzeichen: Differenz und Vorzeichen des größeren Betrags.", why: "Denke an Bewegungen auf dem Zahlenstrahl: Nach rechts und nach links gehen gleicht sich aus. Rote und schwarze Stäbchen heben sich paarweise auf." },
        { id: "sottrazione", label: "Subtraktion", x: 50, y: 60, color: "#ef4444", html: "a − b = a + (−b): Man addiert die Gegenzahl.", why: "Die Subtraktion in eine Addition zu verwandeln erlaubt es, eine einzige Regel zu benutzen; sie ist immer möglich, weil in ℤ jede Zahl ihre Gegenzahl hat." },
        { id: "segni", label: "Vorzeichenregel", x: 75, y: 72, color: "#0ea5e9", html: "Gleiche Vorzeichen → +; verschiedene Vorzeichen → −.", why: "Sie ist keine willkürliche Regel: Sie ist die einzige, die das Distributivgesetz gültig hält. Denn (−1)·(1 + (−1)) = (−1)·0 = 0, also (−1)·1 + (−1)·(−1) = 0 → (−1)·(−1) muss +1 sein." },
        { id: "potenze", label: "Potenzen", x: 75, y: 92, color: "#7c3aed", html: "Negative Basis: gerader Exponent → +, ungerader → −.", why: "Es ist die mehrfach angewandte Vorzeichenregel: Jedes Paar negativer Faktoren ergibt ein Positives; bleibt ein „ungepaarter“ Faktor übrig, ist das Ergebnis negativ." },
        { id: "realta", label: "In der Wirklichkeit", x: 25, y: 92, color: "#14b8a6", html: "Temperaturen, Höhen, Stockwerke, Kontostände, Zeitzonen, Jahre v. Chr.", why: "Überall dort, wo man einen Bezugspunkt (null) und zwei entgegengesetzte Richtungen braucht. Kuriosität: Bei den Jahreszahlen gibt es kein Jahr 0: Von 1 v. Chr. geht es zu 1 n. Chr." }
      ],
      edges: [
        ["naturali", "relativi", "werden erweitert zu"],
        ["relativi", "retta", "werden dargestellt auf dem"],
        ["relativi", "assoluto", "haben einen"],
        ["relativi", "sottrazione", "machen möglich"],
        ["sottrazione", "somma", "wird zur"],
        ["relativi", "segni", "werden multipliziert mit der"],
        ["segni", "potenze", "wiederholt ergibt"],
        ["retta", "realta", "bildet ab"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Produkte und Potenzen",
      questions: [
        { type: "num", q: "(−7) × (−6) = ?", answer: 42, explain: "Gleiche Vorzeichen → +; 7 × 6 = 42." },
        { type: "num", q: "(−2)⁵ = ?", answer: -32, explain: "Negative Basis, ungerader Exponent → −; 2⁵ = 32." },
        { type: "mc", q: "Wie viel ist −4² (ohne Klammer)?", options: ["+16", "−16", "−8"], answer: 1, explain: "Der Exponent bezieht sich nur auf die 4: −(4²) = −16." }
      ]
    }
  ],
  glossary: [
    { t: "Numero relativo (relative Zahl)", d: "Zahl mit vorangestelltem Vorzeichen + oder −." },
    { t: "ℤ", d: "Die Menge der ganzen Zahlen." },
    { t: "Valore assoluto (Betrag)", d: "Die Zahl ohne Vorzeichen, also ihr Abstand von null." },
    { t: "Numeri opposti (Gegenzahlen)", d: "Gleicher Betrag und verschiedenes Vorzeichen; ihre Summe ist 0." },
    { t: "Concordi / discordi (gleiche / verschiedene Vorzeichen)", d: "Zahlen mit demselben Vorzeichen / mit verschiedenen Vorzeichen." },
    { t: "Somma algebrica (algebraische Summe)", d: "Addition von relativen Zahlen (schließt auch Subtraktionen ein)." },
    { t: "Regola dei segni (Vorzeichenregel)", d: "Bei Produkt und Quotient: gleiche Vorzeichen ergeben +, verschiedene Vorzeichen ergeben −." },
    { t: "Retta orientata (Zahlenstrahl)", d: "Gerade mit Ursprung, Richtung und Maßeinheit, auf der man Zahlen darstellt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "|−15| = ?", answer: 15, explain: "Der Betrag ist der Abstand von null: 15." },
      { type: "mc", q: "Was ist die Gegenzahl von −9?", options: ["+9", "−9", "1/9"], answer: 0, explain: "Gleicher Betrag, entgegengesetztes Vorzeichen: +9." },
      { type: "order", q: "Ordne vom kleinsten zum größten.", items: ["−8", "−3", "0", "+2", "+5"], explain: "Auf dem Zahlenstrahl von links nach rechts." },
      { type: "num", q: "(+4) + (−11) = ?", answer: -7, explain: "Verschiedene Vorzeichen: 11 − 4 = 7, Vorzeichen der −11 → −7." },
      { type: "num", q: "(−5) − (−12) = ?", answer: 7, explain: "(−5) + (+12) = +7." },
      { type: "num", q: "(−36) : (+9) = ?", answer: -4, explain: "Verschiedene Vorzeichen → −; 36 : 9 = 4." },
      { type: "tf", q: "Das Produkt von drei negativen Zahlen ist positiv.", answer: false, explain: "(−)·(−) = +, dann (+)·(−) = −: Das Produkt ist negativ." },
      { type: "num", q: "(−3)⁴ = ?", answer: 81, explain: "Gerader Exponent → +; 3⁴ = 81." },
      { type: "num", q: "Nachts hat es −6 °C, tagsüber +9 °C. Um wie viele Grad ist die Temperatur gestiegen?", answer: 15, unit: "°C", explain: "(+9) − (−6) = 15." },
      { type: "num", q: "Berechne: −3 + 2 × (−4) − (−5)", answer: -6, explain: "−3 − 8 + 5 = −6 (zuerst die Multiplikation)." },
      { type: "mc", q: "Wenn a negativ ist, ist −a …", options: ["immer negativ", "immer positiv", "null"], answer: 1, explain: "−a ist die Gegenzahl von a: Wenn a = −4, dann ist −a = +4." }
    ],
    gen: [["intAdd", 2], ["intMul", 2]]
  }
});
