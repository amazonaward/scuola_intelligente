TOPIC('de', {
  id: "p5-mat-cerchio",
  title: "Der Kreis",
  intro: "Räder, Pizzen, Uhren, Münzen: Der <b>Kreis</b> ist überall! Wir lernen den Unterschied zwischen <b>Kreis</b> und <b>Kreislinie</b> (Kreisumfang), was <b>Radius</b> und <b>Durchmesser</b> sind, und entdecken die berühmteste Zahl der Mathematik: <b>π (Pi)</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Kreislinie und Kreis: Das ist nicht dasselbe!",
      html: `<p>Nimm einen Zirkel, setze die Spitze auf ein Blatt und mache mit der Mine eine ganze Umdrehung.</p>
<ul>
<li>Die <b>geschlossene Kurve</b>, die du gezeichnet hast, ist die <b>Kreislinie</b> (<i>circonferenza</i>): Alle ihre Punkte haben den <b>gleichen Abstand</b> von dem Punkt, an dem du die Spitze eingesetzt hast.</li>
<li>Dieser Punkt heißt <b>Mittelpunkt</b>.</li>
<li>Die <b>Fläche</b> innerhalb der Kreislinie (die du ausmalen kannst) ist der <b>Kreis</b> (<i>cerchio</i>).</li>
</ul>
<p>Kurz: Die Kreislinie ist der <b>Rand</b> (wie der Pizzarand), der Kreis ist <b>die ganze Pizza</b>. Die Kreislinie hat eine <b>Länge</b>; der Kreis hat einen <b>Flächeninhalt</b>.</p>`
    },
    {
      type: "svg",
      title: "Die Teile des Kreises",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="200" cy="160" r="130" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="6"/>
<circle cx="200" cy="160" r="6" fill="#111827"/>
<line x1="200" y1="160" x2="292" y2="68" stroke="#dc2626" stroke-width="5"/>
<line x1="70" y1="160" x2="330" y2="160" stroke="#16a34a" stroke-width="5"/>
<line x1="110" y1="254" x2="310" y2="240" stroke="#9333ea" stroke-width="4"/>
<path d="M90 90 A130 130 0 0 1 150 40" fill="none" stroke="#f97316" stroke-width="9"/>
<text x="188" y="185" font-size="16" fill="#111827">Mittelpunkt</text>
<text x="252" y="108" font-size="18" fill="#dc2626" font-weight="bold">r</text>
<text x="128" y="152" font-size="18" fill="#16a34a" font-weight="bold">d</text>
<text x="360" y="60" font-size="20" fill="#dc2626">— Radius (r)</text>
<text x="360" y="95" font-size="20" fill="#16a34a">— Durchmesser (d = 2 · r)</text>
<text x="360" y="130" font-size="20" fill="#1d4ed8">— Kreislinie (der Rand)</text>
<text x="360" y="165" font-size="20" fill="#3b82f6">▇ Kreis (die Fläche)</text>
<text x="360" y="200" font-size="20" fill="#f97316">— Kreisbogen (Stück Rand)</text>
<text x="360" y="235" font-size="20" fill="#9333ea">— Sehne (verbindet 2 Punkte)</text>
</svg>`,
      caption: "Der Durchmesser ist die längste Sehne: Er geht durch den Mittelpunkt und ist zwei Radien lang."
    },
    {
      type: "text",
      title: "Radius, Durchmesser, Sehne und Kreisbogen",
      html: `<ul>
<li>Der <b>Radius</b> (r) ist die Strecke, die vom <b>Mittelpunkt</b> zu einem Punkt der Kreislinie geht. Alle Radien eines Kreises sind <b>gleich lang</b>.</li>
<li>Der <b>Durchmesser</b> (d) ist die Strecke, die zwei Punkte der Kreislinie <b>durch den Mittelpunkt</b> verbindet. Er ist <b>doppelt so lang</b> wie der Radius:
<br><b>d = r · 2</b> und <b>r = d : 2</b>.</li>
<li>Die <b>Sehne</b> ist eine Strecke, die zwei beliebige Punkte der Kreislinie verbindet. Der Durchmesser ist die längste Sehne.</li>
<li>Der <b>Kreisbogen</b> ist ein Stück der Kreislinie.</li>
<li>Der <b>Kreisausschnitt</b> (Sektor) ist ein „Stück“ des Kreises, begrenzt von zwei Radien und einem Bogen (genau wie ein Stück Pizza!).</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Teile des Kreises",
      questions: [
        { type: "mc", q: "Die Linie, die den Kreis umgibt, heißt …", options: ["Durchmesser", "Kreislinie", "Radius"], answer: 1, explain: "Die Kreislinie ist die geschlossene Kurve; der Kreis ist die Fläche darin." },
        { type: "num", q: "Ein Kreis hat den Radius 6 cm. Wie lang ist der Durchmesser?", answer: 12, unit: "cm", explain: "d = r · 2 = 6 · 2 = 12 cm." },
        { type: "num", q: "Ein Teller hat den Durchmesser 26 cm. Wie lang ist der Radius?", answer: 13, unit: "cm", explain: "r = d : 2 = 26 : 2 = 13 cm." },
        { type: "tf", q: "In einem Kreis sind alle Radien gleich lang.", answer: true, explain: "Ja: Das ist genau die Definition der Kreislinie (Punkte mit gleichem Abstand vom Mittelpunkt)." }
      ]
    },
    {
      type: "text",
      title: "Die magische Zahl π (Pi)",
      html: `<p>Mache ein Experiment: Nimm ein Glas, wickle einen Faden um den Rand und miss ihn. Dann miss den Durchmesser und teile <b>Umfang : Durchmesser</b>.</p>
<p>Bei jedem runden Gegenstand (Münze, Teller, Fahrradrad) bekommst du <b>immer ungefähr 3,14</b>!</p>
<p>Diese Zahl heißt <b>π</b> (man liest „Pi“, nach dem griechischen Buchstaben <i>pi</i>). Ihre Nachkommastellen hören nie auf und wiederholen sich nicht: π = 3,14159265358979 … Für die Rechnungen in der Schule benutzen wir <b>π ≈ 3,14</b>.</p>
<p>Also ist die Kreislinie <b>etwas mehr als 3-mal</b> so lang wie der Durchmesser.</p>`
    },
    {
      type: "remember",
      title: "Die Formeln für den Kreisumfang",
      html: `<ul>
<li><b>U = d · 3,14</b> (Durchmesser mal Pi)</li>
<li><b>U = r · 2 · 3,14</b> (Radius mal zwei mal Pi)</li>
<li>Umkehrformel: <b>d = U : 3,14</b> und dann <b>r = d : 2</b></li>
</ul>`
    },
    {
      type: "svg",
      title: "Das Rad abrollen",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<circle cx="80" cy="120" r="50" fill="#fde68a" stroke="#b45309" stroke-width="6"/>
<line x1="30" y1="120" x2="130" y2="120" stroke="#16a34a" stroke-width="5"/>
<text x="80" y="110" font-size="16" fill="#16a34a" text-anchor="middle">d</text>
<line x1="30" y1="200" x2="344" y2="200" stroke="#b45309" stroke-width="8"/>
<g stroke="#16a34a" stroke-width="5">
<line x1="30" y1="225" x2="130" y2="225"/><line x1="134" y1="225" x2="234" y2="225"/><line x1="238" y1="225" x2="338" y2="225"/>
</g>
<line x1="338" y1="225" x2="344" y2="225" stroke="#dc2626" stroke-width="5"/>
<text x="80" y="250" font-size="16" fill="#16a34a" text-anchor="middle">1 d</text>
<text x="184" y="250" font-size="16" fill="#16a34a" text-anchor="middle">2 d</text>
<text x="288" y="250" font-size="16" fill="#16a34a" text-anchor="middle">3 d</text>
<text x="370" y="232" font-size="16" fill="#dc2626">+ 0,14 d</text>
<path d="M80 172 Q80 195 40 198" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/>
<text x="360" y="120" font-size="22" fill="#78350f">Das Rad macht eine Umdrehung:</text>
<text x="360" y="150" font-size="22" fill="#78350f">der abgerollte Rand ist</text>
<text x="360" y="180" font-size="22" fill="#b45309" font-weight="bold">≈ 3,14 Durchmesser</text>
</svg>`,
      caption: "Wenn du ein Rad eine ganze Umdrehung abrollen lässt, legt es eine Strecke von etwa 3,14-mal seinem Durchmesser zurück."
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Fahrradrad",
      html: `<p>Das Rad von Annas Fahrrad hat einen Durchmesser von <b>60 cm</b>. Wie weit fährt das Fahrrad bei jeder Radumdrehung?</p>
<p>U = d · 3,14 = 60 · 3,14 = <b>188,4 cm</b>, also fast <b>1,9 Meter</b>.</p>
<p>Nach <b>100 Umdrehungen</b> des Rades ist Anna 188,4 · 100 = 18 840 cm = <b>188,4 Meter</b> gefahren. So funktioniert der Kilometerzähler am Fahrrad: Er zählt die Umdrehungen des Rades!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Band für die Torte",
      html: `<p>Mama will ein Band um eine runde Torte mit dem <b>Radius 12 cm</b> legen. Wie viel Band braucht sie?</p>
<ol>
<li>Durchmesser: 12 · 2 = 24 cm</li>
<li>Umfang: 24 · 3,14 = <b>75,36 cm</b></li>
</ol>
<p>Es lohnt sich, <b>mindestens 80 cm</b> Band zu kaufen, so bleibt auch ein Stückchen für die Schleife übrig 🎀.</p>`
    },
    {
      type: "text",
      title: "Für ganz Neugierige: der Flächeninhalt des Kreises",
      html: `<p>Auch der Flächeninhalt des Kreises wird mit π berechnet:</p>
<p><b>A = r · r · 3,14</b> (Radius mal Radius mal Pi)</p>
<p>Beispiel: Eine Pizza mit Radius 15 cm hat einen Flächeninhalt von 15 · 15 · 3,14 = 225 · 3,14 = <b>706,5 cm²</b>.</p>
<p>Warum? Schneide den Kreis in viele dünne Stücke und lege sie im Zickzack nebeneinander, eines mit der Spitze nach oben und eines nach unten: Du erhältst fast ein <b>Rechteck</b> mit der Länge halber Umfang (r · 3,14) und der Breite r. Sein Flächeninhalt ist r · 3,14 · r!</p>`
    },
    {
      type: "3d",
      title: "Der Kreis in den Körpern",
      scene: "solid",
      options: { shape: "cylinder", r: 1, h: 1.6, color: "#38bdf8", labels: true, shapes: ["cylinder", "cone", "sphere"] },
      caption: "Der Zylinder hat zwei kreisförmige Grundflächen; der Kegel hat eine. Wenn du eine Kugel mit einer Ebene durchschneidest, erhältst du immer einen Kreis!"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Der Pi-Tag",
      html: `<p>Am <b>14. März</b> wird auf der ganzen Welt der <b>Pi Day</b> gefeiert, der Tag der Kreiszahl Pi, weil man in den Vereinigten Staaten das Datum <b>3/14</b> schreibt. Seit 2020 hat die UNESCO ihn zum <b>Internationalen Tag der Mathematik</b> erklärt.</p>
<p>Zufall: Am 14. März 1879 wurde <b>Albert Einstein</b> geboren!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon? Ziffern ohne Ende",
      html: `<p>Mit Supercomputern wurden mehr als <b>100 000 Milliarden Ziffern</b> von π berechnet, aber es hört nie auf. Um Raumsonden ins All zu schicken, benutzt die NASA gerade einmal <b>15</b>!</p>
<p>Manche trainieren, sich so viele wie möglich zu merken: Der anerkannte Weltrekord liegt bei über <b>70 000 Ziffern</b>, die auswendig aufgesagt wurden.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, den Kreis zu verstehen",
      intro: "Den Kreis versteht man besser, wenn man ihn anfasst, misst und entdeckt, wie andere Völker ihn untersucht haben. Wähle den Weg, den du magst!",
      tabs: [
        {
          label: "🧵 Der Faden und das Glas",
          html: `<p>Mache du das Experiment, das die Menschheit vor Tausenden von Jahren gemacht hat:</p>
<ol>
<li>nimm 3 runde Gegenstände (ein Glas, eine Rolle Klebeband, eine große Münze);</li>
<li>wickle um jeden einen Faden, markiere und miss mit dem Lineal: Das ist der <b>Umfang</b>;</li>
<li>miss den <b>Durchmesser</b> durch den Mittelpunkt;</li>
<li>teile Umfang : Durchmesser.</li>
</ol>
<table><tr><th>Gegenstand</th><th>U</th><th>d</th><th>U : d</th></tr>
<tr><td>Glas</td><td>25,1 cm</td><td>8 cm</td><td>≈ 3,14</td></tr>
<tr><td>Klebeband</td><td>31,4 cm</td><td>10 cm</td><td>≈ 3,14</td></tr></table>
<p>Jedes Mal kommt ungefähr <b>3,14</b> heraus: Du hast π selbst entdeckt!</p>`
        },
        {
          label: "🍕 Zickzack-Stücke",
          html: `<p>Wie findet man den Flächeninhalt? Schneide eine Pizza in viele Stücke und lege sie in eine Reihe, eines mit der Spitze nach oben und eines mit der Spitze nach unten. Es entsteht fast ein <b>Rechteck</b>:</p>
<ul><li>die Länge ist der <b>halbe Umfang</b> = r · 3,14;</li><li>die Breite ist der <b>Radius</b> r.</li></ul>
<p>Flächeninhalt des Rechtecks = Länge · Breite = <b>r · 3,14 · r</b>. Je mehr Stücke du machst, desto perfekter ist das Rechteck!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<g stroke="#9a3412" stroke-width="2">
<path d="M40 180 L65 80 L90 180 Z" fill="#fbbf24"/><path d="M65 80 L90 180 L115 80 Z" fill="#f97316"/>
<path d="M90 180 L115 80 L140 180 Z" fill="#fbbf24"/><path d="M115 80 L140 180 L165 80 Z" fill="#f97316"/>
<path d="M140 180 L165 80 L190 180 Z" fill="#fbbf24"/><path d="M165 80 L190 180 L215 80 Z" fill="#f97316"/>
<path d="M190 180 L215 80 L240 180 Z" fill="#fbbf24"/><path d="M215 80 L240 180 L265 80 Z" fill="#f97316"/>
<path d="M240 180 L265 80 L290 180 Z" fill="#fbbf24"/><path d="M265 80 L290 180 L315 80 Z" fill="#f97316"/>
<path d="M290 180 L315 80 L340 180 Z" fill="#fbbf24"/><path d="M315 80 L340 180 L365 80 Z" fill="#f97316"/>
</g>
<line x1="40" y1="205" x2="340" y2="205" stroke="#1d4ed8" stroke-width="4"/>
<text x="190" y="230" font-size="18" fill="#1d4ed8" text-anchor="middle">halber Umfang = r · 3,14</text>
<line x1="380" y1="80" x2="380" y2="180" stroke="#dc2626" stroke-width="4"/>
<text x="392" y="136" font-size="20" fill="#dc2626">r</text>
<text x="430" y="110" font-size="20" fill="#78350f">≈ Rechteck</text>
<text x="430" y="145" font-size="20" fill="#78350f" font-weight="bold">A = r · r · 3,14</text>
</svg>`
        },
        {
          label: "🏛️ Archimedes und die Vielecke",
          html: `<p>Der große sizilianische Mathematiker <b>Archimedes von Syrakus</b> (etwa 287–212 v. Chr.) hatte keine Taschenrechner. Wie berechnete er π?</p>
<p>Er zeichnete ein <b>Sechseck</b> in den Kreis und eines außen herum. Der Umfang des Kreises musste <b>zwischen den beiden</b> liegen. Dann verdoppelte er die Seiten: 12, 24, 48, bis zu <b>96 Seiten</b>! Je mehr Seiten das Vieleck hat, desto mehr gleicht es dem Kreis.</p>
<p>Er fand, dass π zwischen <b>3 10/71</b> und <b>3 1/7</b> liegt, also zwischen 3,1408 und 3,1428. Ein außergewöhnliches Ergebnis vor 2200 Jahren!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f5f3ff"/>
<circle cx="150" cy="130" r="100" fill="#ddd6fe" stroke="#6d28d9" stroke-width="4"/>
<polygon points="250,130 200,216.6 100,216.6 50,130 100,43.4 200,43.4" fill="none" stroke="#dc2626" stroke-width="4"/>
<polygon points="265.5,130 207.7,230 92.3,230 34.5,130 92.3,30 207.7,30" fill="none" stroke="#16a34a" stroke-width="4"/>
<text x="320" y="80" font-size="20" fill="#dc2626">inneres Sechseck: Umfang = 6 r</text>
<text x="320" y="115" font-size="20" fill="#16a34a">äußeres Sechseck: Umfang ≈ 6,93 r</text>
<text x="320" y="150" font-size="20" fill="#6d28d9">Kreislinie: dazwischen!</text>
<text x="320" y="200" font-size="18" fill="#1f2937">Mit 96 Seiten: π ≈ 3,14</text>
</svg>`
        },
        {
          label: "🌍 π in der Antike",
          html: `<p>Viele Völker haben nach der Zahl des Kreises gesucht:</p>
<ul>
<li>🇪🇬 die <b>Ägypter</b> (Papyrus Rhind, etwa 1650 v. Chr.) benutzten einen Wert von etwa <b>3,16</b>;</li>
<li>🏺 die <b>Babylonier</b> benutzten <b>3</b> oder <b>3 + 1/8 = 3,125</b>;</li>
<li>🇬🇷 <b>Archimedes</b> schloss ihn zwischen 3,1408 und 3,1428 ein;</li>
<li>🇨🇳 der Chinese <b>Zu Chongzhi</b> (5. Jahrhundert n. Chr.) fand den Bruch <b>355/113 = 3,1415929 …</b>, richtig auf 6 Nachkommastellen: Fast 1000 Jahre lang machte es niemand besser!</li>
<li>🇬🇧 Das Zeichen <b>π</b> benutzte als Erster der Waliser William Jones im Jahr 1706, und berühmt machte es der Schweizer Leonhard Euler.</li>
</ul>`
        },
        {
          label: "🧭 Der Zirkel und das Seil",
          html: `<p>Du hast keinen Zirkel? Mach es wie die Gärtner: Stecke einen Pfahl in den Boden, binde ein Seil daran und am anderen Ende einen Stock. Halte das Seil gespannt und gehe ganz herum: Du zeichnest eine <b>perfekte Kreislinie</b>!</p>
<ul><li>Der Pfahl ist der <b>Mittelpunkt</b>.</li><li>Das gespannte Seil ist der <b>Radius</b>.</li><li>Die Spur auf dem Boden ist die <b>Kreislinie</b>.</li></ul>
<p>So zeichnet man runde Beete und den Mittelkreis auf Fußballfeldern (Radius 9,15 m).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte des Kreises: Tippe auf einen Knoten und entdecke das Warum",
      nodes: [
        { id: "centro", label: "Mittelpunkt", x: 50, y: 6, color: "#111827", html: "Der feste Punkt, von dem alle Radien ausgehen.", why: "Ohne Mittelpunkt gibt es keinen Kreis: Es ist der Punkt, in den du die Zirkelspitze einsetzt. <b>Euklid</b> definiert in seinen <i>Elementen</i> (etwa 300 v. Chr.) den Kreis genau vom Mittelpunkt aus." },
        { id: "circonf", label: "Kreislinie", x: 25, y: 30, color: "#1d4ed8", html: "Die geschlossene Kurve aus allen Punkten mit gleichem Abstand vom Mittelpunkt.", why: "Das ist die Definition von Euklid. Der italienische Name <i>circonferenza</i> kommt vom Lateinischen <i>circum ferre</i>, „herumtragen“: Es ist die Linie, die ganz um den Mittelpunkt herumläuft." },
        { id: "cerchio", label: "Kreis", x: 75, y: 30, color: "#3b82f6", html: "Der Teil der Ebene, der von der Kreislinie umschlossen wird.", why: "Vom Lateinischen <i>circulus</i>, „kleiner Ring“. Er gehört zu den ersten Formen, die der Mensch benutzt hat: Das <b>Rad</b> entstand vor etwa 5500 Jahren in Mesopotamien." },
        { id: "raggio", label: "Radius", x: 15, y: 55, color: "#dc2626", html: "Strecke vom Mittelpunkt zur Kreislinie.", why: "Alle Radien sind gleich, weil die Kreislinie genau aus den Punkten mit diesem Abstand zum Mittelpunkt besteht. Der Name erinnert an die Speichen des Rades und die Strahlen der Sonne (italienisch <i>raggio</i>)." },
        { id: "diametro", label: "Durchmesser", x: 45, y: 55, color: "#16a34a", html: "Sehne durch den Mittelpunkt: d = 2 · r.", why: "Aus dem Griechischen <i>diá</i> (durch) + <i>métron</i> (Maß): „Maß, das hindurchgeht“. Er besteht aus zwei hintereinanderliegenden Radien, einer auf der einen und einer auf der anderen Seite des Mittelpunkts." },
        { id: "pi", label: "π ≈ 3,14", x: 75, y: 55, color: "#a855f7", html: "Das Verhältnis von Umfang zu Durchmesser, gleich für alle Kreise.", why: "Alle Kreise sind „Vergrößerungen“ voneinander, also ändert sich das Verhältnis U : d nicht. Archimedes berechnete es mit Vielecken mit 96 Seiten; 1761 bewies der Schweizer <b>Lambert</b>, dass seine Ziffern nie enden und sich nicht wiederholen." },
        { id: "formulaC", label: "U = d · 3,14", x: 30, y: 82, color: "#f59e0b", html: "Formel für die Länge der Kreislinie.", why: "Sie folgt direkt aus π: Wenn U : d = π, dann ist U = d · π. Da d = 2 · r, kann man auch U = 2 · r · π schreiben." },
        { id: "area", label: "A = r · r · 3,14", x: 72, y: 82, color: "#14b8a6", html: "Formel für den Flächeninhalt des Kreises.", why: "Archimedes bewies, dass der Kreis denselben Flächeninhalt hat wie ein Dreieck mit dem Umfang als Grundseite und dem Radius als Höhe. Es ist derselbe Trick wie bei den Zickzack-Stücken, die ein Rechteck bilden." }
      ],
      edges: [
        ["centro", "circonf", "Punkte mit gleichem Abstand"],
        ["circonf", "cerchio", "umschließt den"],
        ["centro", "raggio", "von hier geht der aus:"],
        ["raggio", "diametro", "· 2"],
        ["diametro", "pi", "U : d ="],
        ["pi", "formulaC", "ergibt die"],
        ["pi", "area", "ergibt die"],
        ["raggio", "area", "wird benutzt bei der"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: den Kreisumfang berechnen",
      questions: [
        { type: "num", q: "Ein Kreis hat den Durchmesser 10 cm. Wie lang ist der Umfang? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "U = 10 · 3,14 = 31,4 cm." },
        { type: "num", q: "Ein Kreis hat den Radius 5 cm. Wie lang ist der Umfang? (π = 3,14)", answer: 31.4, tol: 0.01, unit: "cm", explain: "d = 10 cm; U = 10 · 3,14 = 31,4 cm." },
        { type: "mc", q: "Ungefähr wie viel mal länger als der Durchmesser ist der Umfang?", options: ["2-mal", "etwas mehr als 3-mal", "10-mal"], answer: 1, explain: "U : d = π ≈ 3,14." }
      ]
    }
  ],
  glossary: [
    { t: "Kreislinie (circonferenza)", d: "Geschlossene Kurve, deren Punkte alle den gleichen Abstand vom Mittelpunkt haben." },
    { t: "Kreis (cerchio)", d: "Teil der Ebene, der von der Kreislinie umschlossen wird." },
    { t: "Mittelpunkt", d: "Punkt, der von allen Punkten der Kreislinie gleich weit entfernt ist." },
    { t: "Radius", d: "Strecke, die den Mittelpunkt mit einem Punkt der Kreislinie verbindet." },
    { t: "Durchmesser", d: "Sehne durch den Mittelpunkt; er ist doppelt so lang wie der Radius." },
    { t: "Sehne", d: "Strecke, die zwei Punkte der Kreislinie verbindet." },
    { t: "Kreisbogen", d: "Teil der Kreislinie zwischen zwei Punkten." },
    { t: "Kreisausschnitt (Sektor)", d: "Teil des Kreises, begrenzt von zwei Radien und einem Bogen (ein „Stück“)." },
    { t: "π (Pi)", d: "Festes Verhältnis von Umfang zu Durchmesser: ungefähr 3,14." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist der Unterschied zwischen Kreis und Kreislinie?", options: ["Sie sind dasselbe", "Die Kreislinie ist der Rand, der Kreis ist die Fläche", "Der Kreis ist der Rand, die Kreislinie ist die Fläche"], answer: 1, explain: "Die Kreislinie ist die Linie; der Kreis ist der Teil der Ebene, den sie umschließt." },
      { type: "num", q: "Der Radius ist 9 cm. Wie lang ist der Durchmesser?", answer: 18, unit: "cm", explain: "9 · 2 = 18 cm." },
      { type: "num", q: "Der Durchmesser ist 50 cm. Wie lang ist der Radius?", answer: 25, unit: "cm", explain: "50 : 2 = 25 cm." },
      { type: "tf", q: "Der Durchmesser ist die längste Sehne einer Kreislinie.", answer: true, explain: "Er geht durch den Mittelpunkt: Keine Sehne kann länger sein." },
      { type: "text", q: "Wie heißt die Zahl, die man erhält, wenn man den Umfang durch den Durchmesser teilt?", answer: ["Pi", "pi", "π", "Kreiszahl", "die Kreiszahl", "Kreiszahl Pi", "pi greco", "pigreco"], explain: "Es ist π (Pi), ungefähr 3,14." },
      { type: "num", q: "Eine Münze hat den Durchmesser 2 cm. Wie lang ist ihr Umfang? (π = 3,14)", answer: 6.28, tol: 0.01, unit: "cm", explain: "2 · 3,14 = 6,28 cm." },
      { type: "num", q: "Ein rundes Becken hat den Radius 3 m. Wie lang ist sein Rand? (π = 3,14)", answer: 18.84, tol: 0.01, unit: "m", explain: "d = 6 m; U = 6 · 3,14 = 18,84 m." },
      { type: "mc", q: "Ein Stück Pizza in Form eines Spitzstücks ist …", options: ["ein Kreisausschnitt", "eine Sehne", "ein Durchmesser"], answer: 0, explain: "Es wird von zwei Radien und einem Bogen begrenzt: Kreisausschnitt." },
      { type: "num", q: "Ein Kreisumfang misst 31,4 cm. Wie lang ist der Durchmesser? (π = 3,14)", answer: 10, tol: 0.01, unit: "cm", explain: "d = U : 3,14 = 31,4 : 3,14 = 10 cm." },
      { type: "order", q: "Bringe die Schritte zur Berechnung des Umfangs ausgehend vom Radius in die richtige Reihenfolge.", items: ["Ich lese den Radius ab", "Ich multipliziere den Radius mit 2 und erhalte den Durchmesser", "Ich multipliziere den Durchmesser mit 3,14", "Ich schreibe das Ergebnis mit der Maßeinheit auf"], explain: "r → d = r · 2 → U = d · 3,14." },
      { type: "mc", q: "Wer berechnete π mithilfe von Vielecken mit 96 Seiten?", options: ["Pythagoras", "Archimedes", "Galilei"], answer: 1, explain: "Archimedes von Syrakus, im 3. Jahrhundert v. Chr." }
    ],
    gen: [["circle", 3]]
  }
});
