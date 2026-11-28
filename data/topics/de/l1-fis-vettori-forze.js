TOPIC('de', {
  id: "l1-fis-vettori-forze",
  title: "Vektoren und Kräfte",
  intro: "Wenn ich dir sage „geh 5 Meter“, reicht das nicht, damit du an einem bestimmten Punkt ankommst: Ich muss dir auch sagen, <b>in welche Richtung</b> und <b>in welchem Richtungssinn</b>. Manche physikalischen Größen, zum Beispiel die <b>Kraft</b>, brauchen diese Angaben und werden durch <b>Vektoren</b> beschrieben. In dieser Lektion lernen wir, Vektoren zu addieren, und lernen drei grundlegende Kräfte der Mechanik kennen: die <b>Gewichtskraft</b>, die <b>Federkraft</b> (Hookesches Gesetz) und die <b>Reibung</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Skalare und vektorielle Größen",
      html: `<p>Die physikalischen Größen teilen sich in zwei große Familien:</p>
<ul>
<li><b>Skalare Größen</b>: Sie werden durch eine <b>Zahl mit Maßeinheit</b> beschrieben. Beispiele: Masse (3 kg), Zeit (5 s), Temperatur (20 °C), Energie, Volumen.</li>
<li><b>Vektorielle Größen</b>: Man braucht einen <b>Betrag</b> (wie groß), eine <b>Richtung</b> (die Gerade, auf der sie wirken) und einen <b>Richtungssinn</b> (in welche Richtung), manchmal auch einen <b>Angriffspunkt</b>. Beispiele: Verschiebung, Geschwindigkeit, Beschleunigung, <b>Kraft</b>.</li>
</ul>
<p>Einen <b>Vektor</b> stellt man durch einen <b>Pfeil</b> dar: Die Länge ist proportional zum Betrag, die Gerade, auf der er liegt, ist die Richtung, die Spitze zeigt den Richtungssinn an. Man bezeichnet ihn mit einem Buchstaben mit Pfeil darüber (<b>v⃗</b>, <b>F⃗</b>); sein Betrag wird v oder |v⃗| geschrieben.</p>
<p>Zwei Vektoren sind <b>gleich</b>, wenn sie denselben Betrag, dieselbe Richtung und denselben Richtungssinn haben, auch wenn ihre Angriffspunkte verschieden sind. Der <b>Gegenvektor</b> von v⃗ hat denselben Betrag und dieselbe Richtung, aber den entgegengesetzten Richtungssinn (−v⃗).</p>`
    },
    {
      type: "widget",
      title: "Skalar oder Vektor?",
      widget: "classify",
      options: { groups: ["Skalar", "Vektor"], items: [
        ["Masse", 0],
        ["Kraft", 1],
        ["Zeit", 0],
        ["Geschwindigkeit", 1],
        ["Temperatur", 0],
        ["Verschiebung", 1],
        ["Volumen", 0],
        ["Beschleunigung", 1]
      ] },
      caption: "Wenn man auch „in welche Richtung und in welchem Richtungssinn“ wissen muss, ist es ein Vektor."
    },
    {
      type: "text",
      title: "Addition von Vektoren",
      html: `<p>Zwei Vektoren zu addieren heißt, die <b>Gesamtwirkung</b> (den <b>resultierenden Vektor</b>) zu finden. Man addiert nicht einfach die Beträge!</p>
<p><b>Spitze-an-Schaft-Methode.</b> Man zeichnet den ersten Vektor; von seiner Spitze aus zeichnet man den zweiten; der Summenvektor führt vom Anfang des ersten zur Spitze des zweiten.</p>
<p><b>Parallelogrammmethode.</b> Man zeichnet die beiden Vektoren mit demselben Ursprung und ergänzt das Parallelogramm: Die vom Ursprung ausgehende <b>Diagonale</b> ist die Summe.</p>
<p><b>Sonderfälle</b> (die wichtigsten in den ersten beiden Jahren):</p>
<table>
<tr><th>Situation</th><th>Betrag der Summe</th></tr>
<tr><td>Gleiche Richtung und gleicher Richtungssinn</td><td>die Beträge werden <b>addiert</b>: R = a + b</td></tr>
<tr><td>Gleiche Richtung, entgegengesetzter Richtungssinn</td><td>die Beträge werden <b>subtrahiert</b>: R = |a − b|, Richtungssinn des größeren</td></tr>
<tr><td>Senkrechte Richtungen</td><td><b>Satz des Pythagoras</b>: R = √(a² + b²)</td></tr>
</table>
<p>Die <b>Differenz</b> a⃗ − b⃗ berechnet man, indem man zu a⃗ den Gegenvektor von b⃗ addiert. Das Produkt eines Vektors mit einer <b>Zahl</b> k ändert seinen Betrag (multipliziert mit |k|) und, wenn k negativ ist, auch den Richtungssinn.</p>`
    },
    {
      type: "svg",
      title: "Addition zweier Vektoren",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<defs>
<marker id="aR" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#dc2626"/></marker>
<marker id="aB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#2563eb"/></marker>
<marker id="aG" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#16a34a"/></marker>
</defs>
<g font-family="sans-serif">
<text x="160" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Spitze an Schaft</text>
<line x1="40" y1="230" x2="180" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="180" y1="230" x2="250" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="40" y1="230" x2="250" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="110" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="235" y="190" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="120" y="160" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
<text x="480" y="28" font-size="16" text-anchor="middle" fill="#0f172a" font-weight="bold">Parallelogramm</text>
<line x1="360" y1="230" x2="500" y2="230" stroke="#dc2626" stroke-width="4" marker-end="url(#aR)"/>
<line x1="360" y1="230" x2="430" y2="130" stroke="#2563eb" stroke-width="4" marker-end="url(#aB)"/>
<line x1="500" y1="230" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="430" y1="130" x2="570" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 5"/>
<line x1="360" y1="230" x2="570" y2="130" stroke="#16a34a" stroke-width="5" marker-end="url(#aG)"/>
<text x="430" y="254" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">a</text>
<text x="385" y="175" font-size="16" fill="#2563eb" font-weight="bold">b</text>
<text x="480" y="165" font-size="16" fill="#16a34a" font-weight="bold">a + b</text>
</g>
</svg>`,
      caption: "Beide Methoden liefern dasselbe Ergebnis: Der Summenvektor ist die Diagonale des Parallelogramms."
    },
    {
      type: "example",
      title: "Das Tauziehen und das Boot auf dem Fluss",
      html: `<p><b>Tauziehen.</b> Mannschaft A zieht mit 800 N nach links, Mannschaft B mit 650 N nach rechts. Gleiche Richtung, entgegengesetzter Richtungssinn: Resultierende = 800 − 650 = <b>150 N nach links</b>. Das Seil bewegt sich zu A hin.</p>
<p><b>Das Boot.</b> Ein Boot hält mit einer Geschwindigkeit von 4,0 m/s <b>senkrecht</b> auf das Ufer eines Flusses zu, der mit 3,0 m/s fließt. Die Geschwindigkeit relativ zum Ufer beträgt: √(4² + 3²) = √25 = <b>5,0 m/s</b>, flussabwärts geneigt. Das Boot erreicht das andere Ufer weiter flussabwärts als der Punkt, von dem es gestartet ist.</p>
<p>Wären die beiden Vektoren dagegen parallel und gleichgerichtet, hättest du 4 + 3 = 7 m/s: Der Betrag der Summe hängt vom Winkel zwischen den Vektoren ab.</p>`
    },
    {
      type: "remember",
      title: "Komponenten eines Vektors",
      html: `<p>Einen Vektor kann man auch in zwei senkrechte Vektoren <b>zerlegen</b> (die <b>Komponenten</b>), meist längs der x- und y-Achse. Die Komponenten haben die Beträge v<sub>x</sub> = v · cos θ und v<sub>y</sub> = v · sin θ, wobei θ der Winkel mit der x-Achse ist (die Trigonometrie lernst du später genauer kennen). Das Zerlegen ist die Umkehrung der Addition und erlaubt es, viele Vektoren zu addieren: Man addiert getrennt die x-Komponenten und die y-Komponenten und setzt dann mit Pythagoras wieder zusammen.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Vektoren",
      questions: [
        { type: "num", q: "Zwei senkrechte Kräfte von 6 N und 8 N wirken auf denselben Punkt. Wie groß ist die Resultierende?", answer: 10, tol: 0, unit: "N", explain: "√(6² + 8²) = √100 = 10 N." },
        { type: "num", q: "Zwei Kräfte von 15 N und 9 N wirken auf derselben Geraden in entgegengesetztem Richtungssinn. Wie groß ist die Resultierende?", answer: 6, tol: 0, unit: "N", explain: "15 − 9 = 6 N, in Richtung der größeren Kraft." },
        { type: "tf", q: "Der Betrag der Summe zweier Vektoren ist immer die Summe ihrer Beträge.", answer: false, explain: "Das gilt nur, wenn sie dieselbe Richtung und denselben Richtungssinn haben." }
      ]
    },
    {
      type: "text",
      title: "Was ist eine Kraft?",
      html: `<p>Eine <b>Kraft</b> ist eine vektorielle Größe, die die Wechselwirkung zwischen Körpern beschreibt. Sie kann zwei Wirkungen haben:</p>
<ul>
<li>einen Körper <b>verformen</b> (eine Feder, die sich dehnt, eine Tonkugel, die flachgedrückt wird);</li>
<li>den <b>Bewegungszustand eines Körpers ändern</b>: ihn in Bewegung setzen, anhalten, seine Geschwindigkeit oder Richtung ändern (ein getretener Ball).</li>
</ul>
<p>Die Maßeinheit im Internationalen Einheitensystem ist das <b>Newton</b> (N), zu Ehren von Isaac Newton. Ein Newton entspricht etwa der Gewichtskraft eines Apfels von 100 g. Das Gerät zum Messen von Kräften ist der <b>Kraftmesser</b>, der auf der Dehnung einer Feder beruht.</p>
<p>Man unterscheidet <b>Kontaktkräfte</b> (Schub einer Hand, Reibung, Federkraft) und <b>Fernwirkungskräfte</b> (Gewichtskraft, magnetische Kraft, elektrische Kraft).</p>`
    },
    {
      type: "text",
      title: "Die Gewichtskraft",
      html: `<p>Die <b>Gewichtskraft</b> ist die Kraft, mit der ein Planet einen Körper zu seinem Mittelpunkt hin anzieht. Man berechnet sie mit:</p>
<p style="text-align:center"><b>F<sub>G</sub> = m · g</b></p>
<p>Dabei ist <b>m</b> die Masse (kg) und <b>g</b> die <b>Fallbeschleunigung</b>, die an der Erdoberfläche im Mittel <b>9,8 m/s²</b> beträgt (genau 9,81 in mittleren Breiten). Die Gewichtskraft ist ein <b>Vektor</b>: Richtung senkrecht, Richtungssinn nach unten (zum Erdmittelpunkt), Angriffspunkt im Schwerpunkt.</p>
<p><b>Masse und Gewichtskraft sind nicht dasselbe:</b></p>
<table>
<tr><th></th><th>Masse</th><th>Gewichtskraft</th></tr>
<tr><td>Was ist das?</td><td>Stoffmenge, Trägheit</td><td>Kraft der Gravitationsanziehung</td></tr>
<tr><td>Einheit</td><td>kg</td><td>N</td></tr>
<tr><td>Art</td><td>skalar</td><td>Vektor</td></tr>
<tr><td>Ortsabhängig?</td><td>nein</td><td>ja (hängt von g ab)</td></tr>
<tr><td>Messgerät</td><td>Balkenwaage</td><td>Kraftmesser</td></tr>
</table>
<p>Werte von g: Erde 9,8 m/s²; Mond ≈ 1,6 m/s²; Mars ≈ 3,7 m/s²; Jupiter ≈ 25 m/s². Eine Person von 60 kg wiegt auf der Erde etwa 588 N, auf dem Mond 97 N. Ihre <b>Masse</b> bleibt überall 60 kg.</p>`
    },
    {
      type: "widget",
      title: "Masse und Gewichtskraft im Sonnensystem",
      widget: "flashcards",
      options: { cards: [
        { front: "🌍 Erde, 60 kg", back: "g = 9,8 m/s² → F_G ≈ 588 N" },
        { front: "🌙 Mond, 60 kg", back: "g ≈ 1,6 m/s² → F_G ≈ 97 N" },
        { front: "🔴 Mars, 60 kg", back: "g ≈ 3,7 m/s² → F_G ≈ 222 N" },
        { front: "🪐 Jupiter, 60 kg", back: "g ≈ 25 m/s² → F_G ≈ 1500 N" },
        { front: "🚀 Tiefer Weltraum, 60 kg", back: "g ≈ 0 → Gewichtskraft ≈ 0, aber die Masse bleibt 60 kg" }
      ] },
      caption: "Die Gewichtskraft ändert sich, die Masse nicht. Dreh die Karten um, um die Werte zu sehen."
    },
    {
      type: "text",
      title: "Die Federkraft und das Hookesche Gesetz",
      html: `<p>Eine <b>Feder</b> (oder ein Gummiband), die gedehnt oder zusammengedrückt wird, strebt danach, zur ursprünglichen Länge zurückzukehren, indem sie eine <b>Rückstellkraft</b> ausübt, die sogenannte <b>Federkraft</b>. Der englische Physiker <b>Robert Hooke</b> entdeckte, dass die Kraft, solange die Verformung klein ist, <b>direkt proportional</b> zur Dehnung ist:</p>
<p style="text-align:center"><b>F = D · Δx</b></p>
<ul>
<li><b>Δx</b> ist die Dehnung (oder Stauchung) der Feder gegenüber der Länge im entspannten Zustand, in Metern;</li>
<li><b>D</b> ist die <b>Federkonstante</b> der Feder, in <b>N/m</b>: Eine harte Feder hat ein großes D, eine weiche ein kleines D;</li>
<li>die Kraft ist <b>immer der Verformung entgegengerichtet</b> (deshalb schreibt man oft F = −D·Δx).</li>
</ul>
<p>Jenseits der <b>Elastizitätsgrenze</b> verformt sich die Feder dauerhaft, und das Gesetz gilt nicht mehr. So funktioniert der Kraftmesser: Je schwerer der angehängte Körper, desto mehr dehnt sich die Feder; die Skala ist in Newton geeicht.</p>
<p><b>Beispiel.</b> Eine Feder mit D = 50 N/m wird um 0,20 m gedehnt: F = 50 × 0,20 = <b>10 N</b>. Um sie um 0,40 m zu dehnen, braucht man 20 N (das Doppelte).</p>`
    },
    {
      type: "svg",
      title: "Das Diagramm einer Feder",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fffbeb"/>
<g font-family="sans-serif">
<line x1="70" y1="250" x2="360" y2="250" stroke="#334155" stroke-width="3"/>
<line x1="70" y1="250" x2="70" y2="30" stroke="#334155" stroke-width="3"/>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#334155">Dehnung Δx (m)</text>
<text x="30" y="140" font-size="15" fill="#334155" transform="rotate(-90 30 140)" text-anchor="middle">Kraft F (N)</text>
<line x1="70" y1="250" x2="270" y2="80" stroke="#d97706" stroke-width="5"/>
<line x1="270" y1="80" x2="340" y2="60" stroke="#dc2626" stroke-width="5" stroke-dasharray="8 6"/>
<g fill="#334155" font-size="14" text-anchor="middle"><text x="120" y="270">0,1</text><text x="170" y="270">0,2</text><text x="220" y="270">0,3</text></g>
<g fill="#334155" font-size="14" text-anchor="end"><text x="62" y="208">5</text><text x="62" y="165">10</text><text x="62" y="122">15</text></g>
<text x="170" y="100" font-size="15" fill="#92400e" font-weight="bold">Steigung = D</text>
<text x="300" y="120" font-size="14" fill="#991b1b">jenseits der</text>
<text x="300" y="138" font-size="14" fill="#991b1b">Elastizitätsgrenze</text>
<rect x="420" y="50" width="26" height="30" fill="#94a3b8"/>
<path d="M433 80 l-14 8 l28 12 l-28 12 l28 12 l-28 12 l28 12 l-14 8" stroke="#d97706" stroke-width="4" fill="none"/>
<rect x="415" y="168" width="36" height="34" rx="4" fill="#2563eb"/>
<text x="433" y="190" font-size="14" fill="#fff" text-anchor="middle">m</text>
<line x1="500" y1="100" x2="500" y2="168" stroke="#16a34a" stroke-width="3"/>
<text x="540" y="140" font-size="15" fill="#166534">Δx</text>
<line x1="433" y1="202" x2="433" y2="248" stroke="#dc2626" stroke-width="4"/>
<text x="470" y="236" font-size="15" fill="#991b1b" font-weight="bold">F_G = m·g</text>
</g>
</svg>`,
      caption: "Im elastischen Bereich ist das Diagramm eine Gerade durch den Ursprung: Kraft und Dehnung sind direkt proportional."
    },
    {
      type: "text",
      title: "Die Reibung",
      html: `<p>Wenn zwei Oberflächen in Kontakt sind und die eine über die andere zu gleiten versucht, entsteht eine Kraft, die dem Gleiten <b>entgegenwirkt</b>: die <b>Reibung</b>. Sie verläuft parallel zu den Oberflächen und ist der Bewegung (oder der Bewegungstendenz) entgegengerichtet. Sie hängt von der <b>Beschaffenheit der Oberflächen</b> (Rauheit) und von der Kraft ab, mit der sie aufeinandergepresst werden (die <b>Normalkraft</b> F<sub>N</sub>, senkrecht zur Oberfläche). Auf einer horizontalen Ebene gilt F<sub>N</sub> = F<sub>G</sub> = m·g.</p>
<ul>
<li><b>Haftreibung</b> (ruhender Körper): Sie verhindert, dass sich der Körper in Bewegung setzt. Sie wächst mit der angreifenden Kraft bis zu einem Höchstwert: <b>F<sub>H,max</sub> = μ<sub>H</sub> · F<sub>N</sub></b>. Übersteigt die Kraft diesen Wert, setzt sich der Körper in Bewegung.</li>
<li><b>Gleitreibung</b> (bewegter Körper): Sie beträgt <b>F<sub>G</sub> = μ<sub>G</sub> · F<sub>N</sub></b>, konstant. In der Regel ist <b>μ<sub>G</sub> &lt; μ<sub>H</sub></b>: Es ist schwieriger, einen Schrank in Bewegung zu setzen, als ihn in Bewegung zu halten.</li>
<li><b>Rollreibung</b>: bei einem rollenden Körper (Rad, Kugel), viel kleiner als die Gleitreibung: Deshalb ist das Rad eine großartige Erfindung.</li>
</ul>
<p>μ (gesprochen „mü“) ist der <b>Reibungskoeffizient</b>, eine reine Zahl, die nur von den beiden Oberflächen abhängt. Im Modell der ersten beiden Jahre hängt die Reibung <b>weder von der Berührungsfläche</b> noch von der Geschwindigkeit ab.</p>
<p><b>Beispiel.</b> Eine Kiste von 20 kg auf einem horizontalen Boden mit μ<sub>H</sub> = 0,5 und μ<sub>G</sub> = 0,4. F<sub>N</sub> = 20 × 9,8 = 196 N. Um sie in Bewegung zu setzen, braucht man mehr als 0,5 × 196 = <b>98 N</b>; um sie mit konstanter Geschwindigkeit in Bewegung zu halten, genügen 0,4 × 196 ≈ <b>78 N</b>.</p>`
    },
    {
      type: "example",
      title: "Wiegen mit einer Feder",
      html: `<p>Ein Kraftmesser hat eine Feder mit D = 40 N/m. Du hängst einen Rucksack an, und die Feder dehnt sich um 0,25 m. Die Federkraft hält der Gewichtskraft das Gleichgewicht: F_G = D·Δx = 40 × 0,25 = <b>10 N</b>. Die Masse des Rucksacks ist m = F_G/g = 10/9,8 ≈ <b>1,0 kg</b>. Brächte man denselben Rucksack auf den Mond, würde sich die Feder nur um etwa 0,04 m dehnen (F_G ≈ 1,6 N): Der Kraftmesser misst die Gewichtskraft, nicht die Masse.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Gewichtskraft, Feder, Reibung",
      questions: [
        { type: "num", q: "Berechne die Gewichtskraft eines Körpers von 5 kg auf der Erde (g = 9,8 m/s²).", answer: 49, tol: 0.1, unit: "N", explain: "F_G = m · g = 5 × 9,8 = 49 N." },
        { type: "num", q: "Eine Feder mit D = 200 N/m wird um 5 cm gedehnt. Wie groß ist die Federkraft?", answer: 10, tol: 0.01, unit: "N", explain: "Δx = 0,05 m; F = 200 × 0,05 = 10 N." },
        { type: "mc", q: "Ein Block von 10 kg hat μ_H = 0,3. Mit g = 10 m/s²: Wie groß ist ungefähr die kleinste Kraft, um ihn in Bewegung zu setzen?", options: ["3 N", "30 N", "100 N", "300 N"], answer: 1, explain: "F_N = 100 N; F = 0,3 × 100 = 30 N." }
      ]
    },
    {
      type: "alternatives",
      title: "Andere Wege, Vektoren und Kräfte zu verstehen",
      intro: "Ein Vektor ist „ein Pfeil mit einer Bedeutung“. Betrachten wir ihn aus anderen Blickwinkeln.",
      tabs: [
        {
          label: "🗺️ Schatzsuche",
          html: "<p>Ein Vektor ist eine <b>Verschiebungsanweisung</b>: „Geh 3 Schritte nach Osten, dann 4 nach Norden.“ Der Summenvektor ist die <b>direkte</b> Anweisung: Du bist 5 Schritte nach Nordosten gelandet (Pythagoras: 3, 4, 5). Machst du dagegen 3 Schritte nach Osten und 3 nach Westen, bist du wieder am Ausgangspunkt: Summe null, auch wenn du 6 Schritte gegangen bist.</p>"
        },
        {
          label: "⚖️ Kräftegleichgewicht",
          html: "<p>Eine Lampe hängt an zwei Kabeln: Ihre Gewichtskraft nach unten wird durch die Summe der beiden Zugkräfte der Kabel ausgeglichen, die nach oben und ein wenig zur Seite zeigen. Wenn <b>die Vektorsumme aller Kräfte null ist</b>, ist der Körper im Gleichgewicht (das lernst du im nächsten Thema). Deshalb sind stark geneigte Kabel stärker gespannt als das Gewicht, das sie tragen.</p>"
        },
        {
          label: "🔗 Kraft und Formel zuordnen",
          html: "<p>Verbinde jede Kraft mit ihrer Formel.</p>",
          widget: "match",
          options: { pairs: [
            ["Gewichtskraft", "F_G = m · g"],
            ["Federkraft", "F = D · Δx"],
            ["Gleitreibung", "F = μG · F_N"],
            ["Maximale Haftreibung", "F = μH · F_N"]
          ] }
        },
        {
          label: "📊 Zeichnung der Reibung",
          html: "<p>Das Diagramm zeigt, wie die Haftreibung bis zum Höchstwert wächst und dann, sobald der Körper gleitet, auf den Wert der Gleitreibung sinkt.</p>",
          svg: "<svg viewBox='0 0 600 260' xmlns='http://www.w3.org/2000/svg'><rect width='600' height='260' fill='#f0fdf4'/><g font-family='sans-serif'><line x1='60' y1='220' x2='560' y2='220' stroke='#334155' stroke-width='3'/><line x1='60' y1='220' x2='60' y2='20' stroke='#334155' stroke-width='3'/><path d='M60 220 L240 60 L260 100 L540 100' stroke='#16a34a' stroke-width='5' fill='none'/><line x1='240' y1='60' x2='240' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='6 5'/><text x='300' y='248' font-size='14' fill='#334155' text-anchor='middle'>angreifende Kraft</text><text x='30' y='120' font-size='14' fill='#334155' transform='rotate(-90 30 120)' text-anchor='middle'>Reibung</text><text x='245' y='50' font-size='14' fill='#166534' text-anchor='middle'>maximale Haftreibung</text><text x='420' y='88' font-size='14' fill='#166534' text-anchor='middle'>Gleitreibung (konstant)</text><text x='150' y='170' font-size='14' fill='#166534'>Ruhe</text></g></svg>"
        }
      ]
    },
    {
      type: "curiosity",
      title: "Ut tensio, sic vis",
      html: `<p>Robert Hooke veröffentlichte seine Entdeckungen gern in Form von <b>Anagrammen</b>, damit sie ihm nicht gestohlen wurden. 1676 veröffentlichte er <i>ceiiinosssttuv</i>; erst 1678 enthüllte er die Lösung: <b>„Ut tensio, sic vis“</b>, also „wie die Dehnung, so die Kraft“. Das ist das Gesetz, das heute seinen Namen trägt. Er war auch der Mann, der als Erster den Begriff „Zelle“ verwendete, als er ein Stück Kork unter dem Mikroskop betrachtete.</p>`
    },
    {
      type: "curiosity",
      title: "Springen auf dem Mond",
      html: `<p>Auf dem Mond beträgt g etwa 1,6 m/s², also etwa <b>ein Sechstel</b> des irdischen Werts. Die Apollo-Astronauten wogen mit Anzug und Rucksack von vielen Dutzend kg ein Sechstel dessen, was sie auf der Erde gewogen hätten, aber ihre <b>Masse</b> war dieselbe: Deshalb kostete es dieselbe Anstrengung wie auf der Erde, einen Gegenstand in Bewegung zu setzen oder anzuhalten (die Masse misst die Trägheit), während das Anheben viel weniger erforderte.</p>`
    },
    {
      type: "conceptMap",
      title: "Begriffslandkarte der Vektoren und Kräfte",
      nodes: [
        { id: "vettore", label: "Vektor", x: 50, y: 8, color: "#2563eb", html: "Pfeil mit Betrag, Richtung und Richtungssinn.", why: "Manche Größen (Kräfte, Geschwindigkeiten) haben eine Ausrichtung, die das Ergebnis beeinflusst: Zwei entgegengesetzte Schübe heben sich auf, zwei gleichgerichtete addieren sich. Vektoren wurden erfunden, um diese Wirklichkeit geometrisch zu beschreiben." },
        { id: "somma", label: "Addition von Vektoren", x: 15, y: 42, color: "#16a34a", html: "Spitze an Schaft oder Parallelogramm; Pythagoras im senkrechten Fall.", why: "Die Parallelogrammregel war schon Newton und Stevin bekannt: Sie entspringt der experimentellen Beobachtung, dass zwei Kräfte, die am selben Punkt angreifen, einer einzigen „diagonalen“ Kraft entsprechen." },
        { id: "forza", label: "Kraft", x: 50, y: 42, color: "#ef4444", html: "Vektorielle Größe, die verformt oder den Bewegungszustand ändert (Newton).", why: "Newton machte die Kraft in den Principia (1687) zum zentralen Begriff der Dynamik: Sie ist die Ursache von Bewegungsänderungen. Vorher glaubte man, ein Körper brauche einen ständigen Schub, um sich zu bewegen." },
        { id: "peso", label: "Gewichtskraft", x: 85, y: 42, color: "#f59e0b", html: "F_G = m·g, zum Erdmittelpunkt gerichtet.", why: "Die Gewichtskraft ist ein Fall von Newtons allgemeiner Gravitationskraft: Alle Körper mit Masse ziehen sich an. Sie hängt von g ab und ändert sich daher von Planet zu Planet, während die Masse eine Eigenschaft des Körpers ist." },
        { id: "elastica", label: "Federkraft", x: 28, y: 80, color: "#8b5cf6", html: "F = D·Δx: Hookesches Gesetz.", why: "Hooke beobachtete (1676–78), dass die Rückstellkraft bei kleinen Verformungen proportional zur Dehnung wächst: Das ist das Prinzip des Kraftmessers und jeder Feder. Sie geht auf die elektrischen Kräfte zwischen den Atomen des Materials zurück." },
        { id: "attrito", label: "Reibung", x: 72, y: 80, color: "#64748b", html: "Kraft, die dem Gleiten entgegenwirkt: Haft-, Gleit-, Rollreibung.", why: "Auf mikroskopischer Ebene sind Oberflächen rau, und die Unebenheiten verhaken sich; außerdem wirken zwischen den Molekülen Haftkräfte. Deshalb hängt die Reibung von den Materialien und der Anpresskraft ab, nicht von der scheinbaren Fläche." }
      ],
      edges: [["vettore", "somma", "wird kombiniert mit"], ["vettore", "forza", "beschreibt"], ["forza", "peso", "umfasst"], ["forza", "elastica", "umfasst"], ["forza", "attrito", "umfasst"], ["somma", "forza", "liefert die Resultierende der"]]
    }
  ],
  glossary: [
    { t: "Skalare Größe", d: "Größe, die durch eine einzige Zahl mit Maßeinheit beschrieben wird." },
    { t: "Vektor", d: "Größe mit Betrag, Richtung und Richtungssinn, dargestellt durch einen Pfeil." },
    { t: "Betrag", d: "Stärke (Länge) eines Vektors." },
    { t: "Resultierende", d: "Summenvektor mehrerer Vektoren." },
    { t: "Newton (N)", d: "SI-Einheit der Kraft: 1 N = 1 kg·m/s²." },
    { t: "Gewichtskraft", d: "Kraft der Gravitationsanziehung auf einen Körper: F_G = m·g." },
    { t: "Federkonstante", d: "Verhältnis D von Federkraft und Dehnung der Feder, in N/m." },
    { t: "Reibung", d: "Kraft, die dem Gleiten zweier sich berührender Oberflächen entgegenwirkt." },
    { t: "Normalkraft", d: "Kraft senkrecht zur Auflagefläche, die die Fläche auf den Körper ausübt." },
    { t: "Kraftmesser", d: "Gerät, das Kräfte über die Dehnung einer Feder misst." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welche dieser Größen ist vektoriell?", options: ["Masse", "Temperatur", "Kraft", "Zeit"], answer: 2, explain: "Die Kraft hat Betrag, Richtung und Richtungssinn." },
      { type: "tf", q: "Zwei Vektoren mit demselben Betrag sind immer gleich.", answer: false, explain: "Sie müssen auch dieselbe Richtung und denselben Richtungssinn haben." },
      { type: "num", q: "Zwei senkrechte Kräfte von 9 N und 12 N wirken auf denselben Punkt. Berechne den Betrag der Resultierenden.", answer: 15, tol: 0, unit: "N", explain: "√(9² + 12²) = √225 = 15 N." },
      { type: "num", q: "Ein Körper von 8 kg: Berechne die Gewichtskraft auf der Erde (g = 9,8 m/s²).", answer: 78.4, tol: 0.1, unit: "N", explain: "F_G = 8 × 9,8 = 78,4 N." },
      { type: "mc", q: "Was ändert sich, wenn man einen Gegenstand auf den Mond bringt?", options: ["Weder Masse noch Gewichtskraft", "Die Masse, nicht die Gewichtskraft", "Die Gewichtskraft, nicht die Masse", "Sowohl Masse als auch Gewichtskraft"], answer: 2, explain: "Die Masse ist eine Eigenschaft des Körpers; die Gewichtskraft hängt von g ab, das auf dem Mond etwa ein Sechstel beträgt." },
      { type: "num", q: "Eine Feder dehnt sich unter einer Kraft von 6 N um 0,12 m. Berechne die Federkonstante.", answer: 50, tol: 0.1, unit: "N/m", explain: "D = F/Δx = 6/0,12 = 50 N/m." },
      { type: "tf", q: "Nach dem Hookeschen Gesetz verdoppelt sich die Federkraft, wenn man die Dehnung verdoppelt (innerhalb der Elastizitätsgrenze).", answer: true, explain: "F = D·Δx: Kraft und Dehnung sind direkt proportional." },
      { type: "mc", q: "Wie verhält sich die Gleitreibung in der Regel zur maximalen Haftreibung?", options: ["Sie ist größer", "Sie ist kleiner", "Sie ist immer gleich", "Sie ist null"], answer: 1, explain: "In der Regel gilt μ_G < μ_H: Es ist leichter, einen Gegenstand in Bewegung zu halten, als ihn in Bewegung zu setzen." },
      { type: "num", q: "Ein Block von 4 kg auf einer horizontalen Ebene (g = 9,8 m/s²) hat μ_G = 0,25. Berechne die Gleitreibungskraft.", answer: 9.8, tol: 0.1, unit: "N", explain: "F_N = 4 × 9,8 = 39,2 N; F = 0,25 × 39,2 = 9,8 N." },
      { type: "order", q: "Ordne die Gewichtskraft einer Person von 60 kg auf den folgenden Himmelskörpern aufsteigend.", items: ["Tiefer Weltraum", "Mond", "Mars", "Erde", "Jupiter"], explain: "Die Gewichtskraft wächst mit g: tiefer Weltraum (≈0) < Mond (1,6) < Mars (3,7) < Erde (9,8) < Jupiter (≈25 m/s²)." }
    ]
  }
});
