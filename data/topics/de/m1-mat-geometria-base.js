TOPIC('de', {
  id: "m1-mat-geometria-base",
  title: "Geometrische Grundbegriffe",
  intro: "Die ganze Geometrie entsteht aus drei ganz einfachen Ideen: dem <b>Punkt</b>, der <b>Geraden</b> und der <b>Ebene</b>. Daraus baut man Halbgeraden, Strecken und <b>Winkel</b> auf, die Bausteine jeder Figur. Wir lernen, sie zu erkennen, zu messen und zu vergleichen.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "1. Die Grundbegriffe: Punkt, Gerade, Ebene",
      html: `<p>In der Geometrie gibt es einige Ideen, die man <b>nicht definiert</b>: Sie sind so einfach, dass wir sie mit der Anschauung verstehen. Man nennt sie <b>Grundbegriffe</b>.</p>
<ul>
<li><b>Punkt</b>: gibt eine Position an. Er hat keine Ausdehnung (weder Länge noch Breite noch Dicke). Man bezeichnet ihn mit einem <b>Großbuchstaben</b>: A, B, P.</li>
<li><b>Gerade</b>: eine gerade Linie, die in beide Richtungen <b>unbegrenzt</b> ist. Sie hat nur eine Dimension, die Länge. Man bezeichnet sie mit einem <b>Kleinbuchstaben</b>: r, s, t.</li>
<li><b>Ebene</b>: eine flache Fläche, die in alle Richtungen <b>unbegrenzt</b> ist und keine Dicke hat. Man bezeichnet sie mit einem griechischen Buchstaben: α (Alpha), β (Beta), π (Pi).</li>
</ul>
<p>Der <b>Raum</b> ist die Menge aller Punkte: Er ist der „Behälter“ aller Figuren.</p>
<p>Die Eigenschaften der Grundbegriffe legen die <b>Postulate</b> (oder Axiome) fest: Aussagen, die man ohne Beweis als wahr annimmt. Hier die wichtigsten:</p>
<ol>
<li>Durch <b>einen Punkt</b> gehen <b>unendlich viele Geraden</b> (man nennt sie ein <i>Geradenbüschel</i>).</li>
<li>Durch <b>zwei verschiedene Punkte</b> geht <b>genau eine Gerade</b>.</li>
<li>Eine Gerade enthält unendlich viele Punkte; zwischen zwei beliebigen Punkten einer Geraden liegen immer unendlich viele weitere.</li>
<li>Durch <b>drei Punkte, die nicht auf einer Geraden liegen</b>, geht <b>genau eine Ebene</b>.</li>
</ol>`
    },
    {
      type: "svg",
      title: "Punkt, Gerade, Halbgerade, Strecke",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<circle cx="70" cy="50" r="6" fill="#dc2626"/>
<text x="84" y="44" font-size="18" fill="#dc2626" font-weight="bold">A</text>
<text x="200" y="56" font-size="17" fill="#334155">Punkt: nur eine Position</text>
<line x1="20" y1="110" x2="580" y2="110" stroke="#2563eb" stroke-width="4"/>
<polygon points="580,110 566,102 566,118" fill="#2563eb"/>
<polygon points="20,110 34,102 34,118" fill="#2563eb"/>
<text x="40" y="100" font-size="18" fill="#2563eb" font-weight="bold">r</text>
<text x="200" y="140" font-size="17" fill="#334155">Gerade: nach beiden Seiten unendlich</text>
<line x1="120" y1="190" x2="580" y2="190" stroke="#16a34a" stroke-width="4"/>
<polygon points="580,190 566,182 566,198" fill="#16a34a"/>
<circle cx="120" cy="190" r="6" fill="#16a34a"/>
<text x="104" y="182" font-size="18" fill="#16a34a" font-weight="bold">O</text>
<text x="200" y="220" font-size="17" fill="#334155">Halbgerade: hat einen Anfangspunkt O und endet nie</text>
<line x1="150" y1="270" x2="420" y2="270" stroke="#9333ea" stroke-width="4"/>
<circle cx="150" cy="270" r="6" fill="#9333ea"/>
<circle cx="420" cy="270" r="6" fill="#9333ea"/>
<text x="136" y="262" font-size="18" fill="#9333ea" font-weight="bold">A</text>
<text x="426" y="262" font-size="18" fill="#9333ea" font-weight="bold">B</text>
<text x="200" y="305" font-size="17" fill="#334155">Strecke AB: hat zwei Endpunkte und lässt sich messen</text>
</svg>`,
      caption: "Gerade und Halbgerade kann man nicht messen (sie sind unendlich); die Strecke schon."
    },
    {
      type: "text",
      title: "2. Halbgeraden und Strecken",
      html: `<p>Ein Punkt O auf einer Geraden teilt sie in zwei Teile: Jeder davon ist zusammen mit O eine <b>Halbgerade</b> mit dem <b>Anfangspunkt</b> O.</p>
<p>Zwei Punkte A und B auf einer Geraden legen die <b>Strecke AB</b> fest: Sie ist der Teil der Geraden zwischen A und B, den <b>Endpunkten</b>. Anders als Geraden und Halbgeraden hat die Strecke eine <b>Länge</b>, die wir mit dem Lineal messen können.</p>
<table>
<tr><th>Art von Strecken</th><th>Was es bedeutet</th></tr>
<tr><td><b>Aufeinanderfolgend</b></td><td>haben nur einen Endpunkt gemeinsam (wie die Seiten eines Streckenzugs)</td></tr>
<tr><td><b>Benachbart</b></td><td>sind aufeinanderfolgend <b>und</b> liegen auf derselben Geraden</td></tr>
<tr><td><b>Kongruent</b> (≅)</td><td>lassen sich genau aufeinanderlegen: Sie sind gleich lang</td></tr>
<tr><td><b>Sich schneidend</b></td><td>kreuzen sich in einem inneren Punkt</td></tr>
</table>
<p>Der <b>Mittelpunkt</b> M einer Strecke AB ist der Punkt, der sie in zwei kongruente Strecken teilt: AM ≅ MB.</p>
<p>Mehrere aufeinanderfolgende Strecken bilden einen <b>Streckenzug</b>; fällt der letzte Endpunkt mit dem ersten zusammen, ist der Streckenzug <b>geschlossen</b> und umschließt ein <b>Vieleck</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Strecken addieren und vergleichen",
      html: `<p>Auf einer Geraden liegen der Reihe nach die Punkte A, B, C. Wir wissen, dass <b>AB = 7 cm</b> und <b>BC = 5 cm</b>.</p>
<ul>
<li>Die Strecken AB und BC sind <b>benachbart</b> (aufeinanderfolgend und auf derselben Geraden), also ist AC = AB + BC = 7 + 5 = <b>12 cm</b>.</li>
<li>Der Mittelpunkt M von AC ist von A entfernt: 12 : 2 = <b>6 cm</b>.</li>
<li>Wie weit ist M von B entfernt? AB − AM = 7 − 6 = <b>1 cm</b>.</li>
</ul>
<p>Aufgabe „umgekehrt“: Wenn AC = 20 cm ist und AB um 4 cm länger ist als BC, dann ist BC = (20 − 4) : 2 = <b>8 cm</b> und AB = 8 + 4 = <b>12 cm</b>. Das ist die Methode von <b>Summe und Differenz</b>, die bei Aufgaben sehr nützlich ist!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Punkte, Geraden und Strecken",
      questions: [
        { type: "mc", q: "Wie viele Geraden gehen durch zwei verschiedene Punkte?", options: ["Keine", "Genau eine", "Zwei", "Unendlich viele"], answer: 1, explain: "Das ist ein Postulat von Euklid: Durch zwei verschiedene Punkte geht genau eine Gerade." },
        { type: "tf", q: "Eine Halbgerade kann man mit dem Lineal messen.", answer: false, explain: "Die Halbgerade ist auf einer Seite unbegrenzt: Sie hat keine endliche Länge. Nur die Strecke lässt sich messen." },
        { type: "num", q: "A, B, C liegen in dieser Reihenfolge auf einer Geraden. AB = 9 cm und BC = 6 cm. Wie lang ist AC?", answer: 15, unit: "cm", explain: "AB und BC sind benachbart: AC = 9 + 6 = 15 cm." }
      ]
    },
    {
      type: "text",
      title: "3. Geraden in der Ebene und im Raum",
      html: `<p>Zwei Geraden derselben Ebene können sein:</p>
<ul>
<li><b>sich schneidend</b>: Sie haben <b>genau einen Punkt</b> gemeinsam;</li>
<li><b>senkrecht</b> (⊥): Sie schneiden sich und bilden <b>4 rechte Winkel</b> (90°);</li>
<li><b>parallel</b> (∥): Sie haben <b>keinen gemeinsamen Punkt</b>, egal wie weit wir sie verlängern. Sie behalten immer denselben Abstand.</li>
</ul>
<p>Der <b>Abstand eines Punktes von einer Geraden</b> ist die Länge der <b>senkrechten</b> Strecke vom Punkt zur Geraden: Es ist der kürzeste Weg.</p>
<p>Im <b>Raum</b> gibt es einen weiteren Fall: zwei Geraden, die sich nicht treffen, aber <b>nicht parallel sind</b>, weil sie nicht in derselben Ebene liegen. Sie heißen <b>windschiefe Geraden</b>. Denk an eine Straße und eine Brücke, die sie quer überquert!</p>`
    },
    {
      type: "svg",
      title: "Die Lagen zweier Geraden in der Ebene",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<line x1="20" y1="40" x2="180" y2="190" stroke="#2563eb" stroke-width="4"/>
<line x1="20" y1="190" x2="180" y2="40" stroke="#dc2626" stroke-width="4"/>
<circle cx="100" cy="115" r="6" fill="#111827"/>
<text x="100" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">sich schneidend</text>
<line x1="300" y1="30" x2="300" y2="200" stroke="#2563eb" stroke-width="4"/>
<line x1="220" y1="115" x2="380" y2="115" stroke="#dc2626" stroke-width="4"/>
<rect x="300" y="95" width="20" height="20" fill="none" stroke="#111827" stroke-width="2"/>
<text x="300" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">senkrecht</text>
<line x1="420" y1="70" x2="590" y2="40" stroke="#2563eb" stroke-width="4"/>
<line x1="420" y1="170" x2="590" y2="140" stroke="#dc2626" stroke-width="4"/>
<line x1="490" y1="58" x2="508" y2="155" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
<text x="525" y="112" font-size="15" fill="#16a34a">Abstand</text>
<text x="505" y="235" font-size="18" text-anchor="middle" font-weight="bold" fill="#111827">parallel</text>
</svg>`,
      caption: "Parallele Geraden behalten immer denselben Abstand; senkrechte Geraden bilden vier rechte Winkel."
    },
    {
      type: "3d",
      title: "Geraden und Ebenen in 3D: Finde die windschiefen Geraden",
      scene: "solid",
      options: { shape: "box", w: 2, h: 1.2, d: 1.4, color: "#38bdf8", labels: true },
      caption: "Jede Fläche des Quaders liegt in einer Ebene, jede Kante auf einer Geraden. Drehe ihn: Finde zwei parallele Kanten, zwei senkrechte und zwei windschiefe (sie berühren sich nicht und sind nicht parallel)."
    },
    {
      type: "text",
      title: "4. Der Winkel",
      html: `<p>Zwei Halbgeraden mit demselben Anfangspunkt teilen die Ebene in zwei Teile. Jeder Teil ist zusammen mit den Halbgeraden ein <b>Winkel</b>.</p>
<ul>
<li>Die Halbgeraden sind die <b>Schenkel</b> des Winkels; der gemeinsame Anfangspunkt ist der <b>Scheitel</b>.</li>
<li>Einen Winkel bezeichnet man mit dem Scheitel und je einem Punkt auf den Schenkeln, so: <b>AÔB</b>, oder mit einem griechischen Buchstaben: α, β, γ.</li>
<li>Ein Winkel ist <b>konvex</b>, wenn er die Verlängerungen seiner Schenkel nicht enthält, und <b>konkav</b>, wenn er sie enthält.</li>
</ul>
<p>Winkel misst man in <b>Grad</b> (°) mit dem <b>Winkelmesser</b>. Eine ganze Umdrehung beträgt <b>360°</b>. Jedes Grad wird in <b>60 Minuten</b> (′) geteilt und jede Minute in <b>60 Sekunden</b> (″): Das ist das <b>Sexagesimalsystem</b>, ein Erbe der Babylonier.</p>
<table>
<tr><th>Winkel</th><th>Weite</th></tr>
<tr><td><b>Nullwinkel</b></td><td>0° (die Schenkel fallen zusammen)</td></tr>
<tr><td><b>Spitzer Winkel</b></td><td>zwischen 0° und 90°</td></tr>
<tr><td><b>Rechter Winkel</b></td><td>90° (eine Vierteldrehung)</td></tr>
<tr><td><b>Stumpfer Winkel</b></td><td>zwischen 90° und 180°</td></tr>
<tr><td><b>Gestreckter Winkel</b></td><td>180° (die Schenkel bilden eine Gerade)</td></tr>
<tr><td><b>Vollwinkel</b></td><td>360°</td></tr>
</table>`
    },
    {
      type: "svg",
      title: "Die Winkelarten",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<line x1="30" y1="120" x2="150" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="30" y1="120" x2="130" y2="50" stroke="#111827" stroke-width="4"/>
<path d="M75 120 A45 45 0 0 0 67 94" stroke="#dc2626" stroke-width="4" fill="none"/>
<text x="90" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#dc2626">spitz</text>
<line x1="230" y1="120" x2="350" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="230" y1="120" x2="230" y2="30" stroke="#111827" stroke-width="4"/>
<rect x="230" y="96" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="3"/>
<text x="290" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#2563eb">rechter 90°</text>
<line x1="450" y1="120" x2="570" y2="120" stroke="#111827" stroke-width="4"/>
<line x1="450" y1="120" x2="390" y2="40" stroke="#111827" stroke-width="4"/>
<path d="M490 120 A40 40 0 0 0 426 88" stroke="#9333ea" stroke-width="4" fill="none"/>
<text x="490" y="160" font-size="17" text-anchor="middle" font-weight="bold" fill="#9333ea">stumpf</text>
<line x1="40" y1="240" x2="260" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="150" cy="240" r="5" fill="#111827"/>
<path d="M190 240 A40 40 0 0 0 110 240" stroke="#ea580c" stroke-width="4" fill="none"/>
<text x="150" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#ea580c">gestreckt 180°</text>
<line x1="420" y1="240" x2="540" y2="240" stroke="#111827" stroke-width="4"/>
<circle cx="420" cy="240" r="5" fill="#111827"/>
<circle cx="420" cy="240" r="34" stroke="#16a34a" stroke-width="4" fill="none"/>
<text x="470" y="285" font-size="17" text-anchor="middle" font-weight="bold" fill="#16a34a">voll 360°</text>
</svg>`,
      caption: "Der farbige Bogen zeigt, welchen Teil der Ebene wir messen."
    },
    {
      type: "widget",
      title: "Ordne die Winkel ein",
      widget: "classify",
      options: {
        groups: ["Spitz", "Recht", "Stumpf", "Gestreckt oder mehr"],
        items: [
          ["35°", 0], ["90°", 1], ["120°", 2], ["180°", 3], ["89°", 0], ["91°", 2], ["270°", 3],
          ["🕒 Zeiger um 3:00 Uhr", 1], ["🕐 Zeiger um 1:00 Uhr", 0], ["🕔 Zeiger um 5:00 Uhr", 2], ["🕕 Zeiger um 6:00 Uhr", 3], ["📐 Ecke des Geodreiecks", 1]
        ]
      },
      caption: "Denk daran: Jede Stunde auf dem Zifferblatt entspricht 360° : 12 = 30°."
    },
    {
      type: "text",
      title: "5. Winkelpaare",
      html: `<ul>
<li><b>Aufeinanderfolgend</b>: haben den Scheitel und einen Schenkel gemeinsam.</li>
<li><b>Nebenwinkel</b>: aufeinanderfolgend, und ihre beiden anderen Schenkel liegen auf derselben Geraden: Zusammen bilden sie einen <b>gestreckten</b> Winkel (180°).</li>
<li><b>Komplementwinkel</b>: Ihre Summe ist <b>90°</b>. Der Komplementwinkel von 30° ist 60°.</li>
<li><b>Supplementwinkel</b>: Ihre Summe ist <b>180°</b>. Der Supplementwinkel von 130° ist 50°.</li>
<li><b>Explementwinkel</b>: Ihre Summe ist <b>360°</b>. Der Explementwinkel von 100° ist 260°.</li>
<li><b>Scheitelwinkel</b>: Wenn sich zwei Geraden schneiden, sind die sich „gegenüberliegenden“ Winkel immer <b>kongruent</b>.</li>
</ul>
<p>Warum sind Scheitelwinkel gleich? Nennen wir α und β die beiden Scheitelwinkel und γ den Winkel dazwischen. α + γ = 180° und auch β + γ = 180°, weil sie Nebenwinkel sind. Dann ist α = 180° − γ = β. Das ist ein echter <b>Beweis</b>: der erste Satz, dem man in der Geometrie begegnet!</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Rechnen mit Graden und Minuten",
      html: `<p><b>Summe.</b> 35°40′ + 20°30′ = 55°70′. Aber 70′ = 1° 10′, also ist das Ergebnis <b>56°10′</b>.</p>
<p><b>Komplementwinkel.</b> Der Komplementwinkel von 52°25′ ist 90° − 52°25′. Wir schreiben 90° als 89°60′: 89°60′ − 52°25′ = <b>37°35′</b>.</p>
<p><b>Uhr.</b> Um 2:00 Uhr bilden die Zeiger 2 × 30° = <b>60°</b>; um 4:00 Uhr bilden sie 4 × 30° = <b>120°</b> (stumpf). Um 9:00 Uhr bilden sie 90°: einen rechten Winkel!</p>
<p><b>Navigation.</b> Piloten und Seeleute geben die Richtung mit einem Winkel an, der von Norden im Uhrzeigersinn gemessen wird: Osten = 90°, Süden = 180°, Westen = 270°.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … 360 kommt aus Babylon?",
      html: `<p>Der in <b>360 Grad</b> geteilte Kreis sowie die <b>Minuten</b> und <b>Sekunden</b> zu je 60 stammen von den alten <b>Babyloniern</b>, die im Sechzigersystem zählten. 60 lässt sich durch 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 teilen: sehr praktisch, um ohne Kommazahlen zu rechnen!</p>
<p>Und die Namen? Im mittelalterlichen Latein sprach man von <i>pars minuta prima</i> („erster kleiner Teil“) und <i>pars minuta secunda</i> („zweiter kleiner Teil“): Daher kommen <b>Minute</b> und <b>Sekunde</b>, dieselben Namen, die wir auch für die Uhrzeit benutzen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … das berühmteste Geometriebuch ist 2300 Jahre alt?",
      html: `<p>Um <b>300 v. Chr.</b> schrieb in Alexandria in Ägypten der griechische Mathematiker <b>Euklid</b> die <b>Elemente</b>, 13 Bücher, die von wenigen Definitionen und 5 <b>Postulaten</b> ausgehen und daraus Hunderte von Sätzen beweisen. Mehr als 2000 Jahre lang war es das Buch, mit dem man Geometrie lernte: Nach der Bibel ist es vielleicht das Buch mit den meisten Ausgaben der Geschichte.</p>
<p>Sein fünftes Postulat, das <b>Parallelenpostulat</b>, ließ Mathematiker jahrhundertelang diskutieren. Im 19. Jahrhundert entdeckten Lobatschewski, Bolyai und Riemann, dass man <b>nichteuklidische Geometrien</b> erhält, wenn man es ändert: genau jene, die Einstein später benutzen sollte, um den gekrümmten Raum des Universums zu beschreiben!</p>`
    },
    {
      type: "widget",
      title: "Ordne den Begriff der Definition zu",
      widget: "match",
      options: {
        pairs: [
          ["Komplementwinkel", "Summe 90°"],
          ["Supplementwinkel", "Summe 180°"],
          ["Explementwinkel", "Summe 360°"],
          ["Parallele", "kein gemeinsamer Punkt, gleiche Ebene"],
          ["Windschiefe", "treffen sich nicht, verschiedene Ebenen"],
          ["Mittelpunkt", "teilt die Strecke in zwei gleiche Teile"]
        ]
      }
    },
    {
      type: "alternatives",
      title: "Andere Wege, die geometrischen Grundbegriffe zu verstehen",
      intro: "Die abstrakten Definitionen überzeugen dich nicht? Versuche, sie mit Gegenständen, mit dem Körper oder in 3D zu sehen.",
      tabs: [
        {
          label: "🧵 Mit Schnur und Körper",
          html: `<p>Spanne eine <b>Schnur</b> zwischen zwei Nägeln: Das ist eine <b>Strecke</b>. Wenn du sie nach beiden Seiten ins Unendliche verlängern könntest, wäre sie eine <b>Gerade</b>. Eine eingeschaltete <b>Taschenlampe</b> im Dunkeln ist eine tolle Halbgerade: Sie geht von einem Punkt aus und reicht unendlich weit.</p>
<p>Jetzt benutze deine <b>Arme</b>: Halte sie vor dir zusammen (Nullwinkel), dann öffne einen nach oben, bis ein „L“ entsteht (rechter Winkel), dann breite sie in einer Linie aus (gestreckter Winkel). Dreh dich einmal um dich selbst: Du hast einen <b>Vollwinkel</b> gemacht!</p>
<p>Der Boden im Klassenzimmer ist ein Stück <b>Ebene</b>; die Linien der Fliesen sind parallele und senkrechte Geraden.</p>`
        },
        {
          label: "🕐 Die Winkel der Uhr",
          html: `<p>Das Zifferblatt ist ein versteckter Winkelmesser! Der Vollwinkel (360°) ist in 12 Stunden geteilt, also ist jede Stunde <b>30°</b> wert. Sieh dir die Zeiger an: Um 3 Uhr bilden sie einen rechten Winkel, um 6 Uhr einen gestreckten Winkel, um 1 Uhr einen spitzen Winkel von 30°.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<circle cx="150" cy="140" r="110" fill="#ffffff" stroke="#1e3a8a" stroke-width="6"/>
<text x="150" y="55" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">12</text>
<text x="242" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">3</text>
<text x="150" y="240" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">6</text>
<text x="58" y="147" font-size="20" text-anchor="middle" fill="#1e3a8a" font-weight="bold">9</text>
<line x1="150" y1="140" x2="150" y2="62" stroke="#dc2626" stroke-width="6"/>
<line x1="150" y1="140" x2="215" y2="140" stroke="#111827" stroke-width="8"/>
<rect x="150" y="118" width="22" height="22" fill="none" stroke="#16a34a" stroke-width="3"/>
<text x="400" y="80" font-size="20" fill="#1e3a8a" font-weight="bold">3:00 Uhr = 90°</text>
<text x="400" y="120" font-size="18" fill="#334155">1 Stunde = 30°</text>
<text x="400" y="155" font-size="18" fill="#334155">1:00 Uhr = 30°</text>
<text x="400" y="190" font-size="18" fill="#334155">4:00 Uhr = 120°</text>
<text x="400" y="225" font-size="18" fill="#334155">6:00 Uhr = 180°</text>
</svg>`
        },
        {
          label: "🧊 Der Würfel in 3D",
          html: `<p>An einem Würfel findest du alles: Die <b>Ecken</b> sind Punkte, die <b>Kanten</b> liegen auf Geraden, die <b>Flächen</b> in Ebenen. Dreh ihn und suche:</p>
<ul><li><b>parallele</b> Kanten (gleiche Richtung);</li><li><b>senkrechte</b> Kanten (sie treffen sich unter 90°);</li><li><b>windschiefe</b> Kanten (sie berühren sich nicht und sind nicht parallel: Sie gibt es nur im Raum!).</li></ul>`,
          scene: "solid",
          options: { shape: "cube", color: "#a78bfa", labels: true }
        },
        {
          label: "🌍 Grad in anderen Ländern und Berufen",
          html: `<p>Nicht alle messen Winkel auf dieselbe Weise:</p>
<ul>
<li><b>Mathematiker</b> und Physiker benutzen oft das <b>Bogenmaß</b> (Radiant): Ein Vollwinkel beträgt 2π ≈ 6,28 Radiant;</li>
<li>In <b>Frankreich</b> versuchte man nach der Revolution, die <b>Neugrad</b> (oder Gon) einzuführen: ein rechter Winkel = 100 gon, ein Vollwinkel = 400. Landvermesser benutzen sie noch heute, und du findest sie auf Taschenrechnern mit der Taste „GRAD“;</li>
<li>Armeen benutzen die <b>Strich</b> (mil): ein Vollwinkel = 6400 mil;</li>
<li>In den englischsprachigen Ländern schreibt man die Gerade durch A und B mit einem Doppelpfeil darüber: <b>AB</b> mit ↔.</li>
</ul>
<p>Das Sexagesimalsystem (360°) bleibt das am weitesten verbreitete der Welt, weil sich 360 auf so viele Arten teilen lässt.</p>`
        },
        {
          "label": "🇬🇷 Lineal und Zirkel, wie die Griechen",
          "html": "<p>Die alten <b>Griechen</b> (zum Beispiel <b>Euklid</b>, um 300 v. Chr. in Alexandria) konstruierten Figuren nur mit <b>zwei Werkzeugen</b>: einem <b>Lineal ohne Skala</b> (um Geraden zu zeichnen) und dem <b>Zirkel</b> (um Kreise zu zeichnen). Kein Lineal mit Zentimetern, kein Winkelmesser! So findet man den <b>Mittelpunkt</b> einer Strecke und ihre <b>Senkrechte</b> (sie heißt <b>Mittelsenkrechte</b>):</p><ol><li>Zeichne die Strecke <b>AB</b>.</li><li>Steche den Zirkel in <b>A</b> ein, mit einer Öffnung, die <b>größer als die Hälfte</b> von AB ist, und zeichne einen Bogen oberhalb und einen unterhalb der Strecke.</li><li><b>Ohne die Öffnung zu ändern</b>, steche in <b>B</b> ein und zeichne zwei weitere Bögen: Sie schneiden die ersten in den Punkten <b>C</b> und <b>D</b>.</li><li>Verbinde C und D mit dem Lineal: Die Gerade CD steht <b>senkrecht</b> auf AB und schneidet sie genau im <b>Mittelpunkt M</b>.</li></ol><p><b>Warum funktioniert das?</b> C hat von A und von B denselben Abstand (die Zirkelöffnung war dieselbe), und D ebenso. Alle Punkte, die <b>von A und B gleich weit entfernt</b> sind, liegen auf einer einzigen Geraden: der Mittelsenkrechten. Es ist Satz 10 im ersten Buch der <i>Elemente</i>.</p><p>🎯 <b>Versuch es auch selbst</b>, die <b>Winkelhalbierende</b> eines Winkels zu konstruieren: Steche im Scheitel ein und zeichne einen Bogen, der beide Schenkel schneidet; zeichne von diesen beiden Punkten aus zwei gleiche Bögen, die sich kreuzen; verbinde den Scheitel mit dem Kreuzungspunkt. Du hast den Winkel in zwei gleiche Teile geteilt, ohne ihn zu messen!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"150\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><circle cx=\"450\" cy=\"150\" r=\"200\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"6 6\"/><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"4\"/><line x1=\"300\" y1=\"8\" x2=\"300\" y2=\"292\" stroke=\"#dc2626\" stroke-width=\"3\"/><circle cx=\"150\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"450\" cy=\"150\" r=\"6\" fill=\"#1e3a8a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"17.7\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"282.3\" r=\"6\" fill=\"#16a34a\" stroke=\"none\" stroke-width=\"2\"/><circle cx=\"300\" cy=\"150\" r=\"6\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"2\"/><text x=\"128\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"458\" y=\"140\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"310\" y=\"30\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">C</text><text x=\"310\" y=\"290\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">D</text><text x=\"308\" y=\"172\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">M</text><rect x=\"8\" y=\"8\" width=\"150\" height=\"50\" fill=\"#ffffff\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"16\" y=\"30\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">Nur Lineal</text><text x=\"16\" y=\"50\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">und Zirkel!</text></svg>"
        },
        {
          "label": "🇨🇳 Winkel und Zirkel in China",
          "html": "<p>In <b>China</b> werden auf alten Gemälden und Skulpturen von vor etwa 2000 Jahren (Han-Dynastie) die beiden legendären Urahnen <b>Fuxi</b> und <b>Nüwa</b> mit einem <b>Winkelmaß</b> (矩, <i>ju</i>) und einem <b>Zirkel</b> (规, <i>gui</i>) in der Hand dargestellt. Zusammen bilden die beiden Wörter <b>规矩</b> (<i>guīju</i>), was auf Chinesisch … <b>„Regeln“</b> bedeutet! Für die alten Chinesen konnte derjenige, der mit Winkelmaß und Zirkel umgehen kann, Ordnung in die Welt bringen.</p><p>Mit diesen beiden Werkzeugen kannst du alles machen, was du in diesem Kapitel lernst:</p><ul><li><b>Senkrechte</b>: Lege eine Kathete des Geodreiecks an eine Gerade und zeichne entlang der anderen Kathete. Die beiden Geraden bilden einen <b>rechten Winkel</b> (90°).</li><li><b>Parallele</b> (die Methode des „gleitenden Dreiecks“): Lege das Lineal auf das Blatt und halte es fest; lass das Dreieck am Lineal entlang <b>gleiten</b> und zeichne eine Gerade, dann eine weitere ein Stück weiter. Alle Geraden haben dieselbe <b>Richtung</b>: Sie sind parallel, weil sie alle denselben Winkel mit dem Lineal bilden.</li><li><b>Abstand Punkt–Gerade</b>: Zeichne vom Punkt P mit dem Geodreieck die Senkrechte zur Geraden: Die senkrechte Strecke ist der kürzeste <b>Abstand</b>.</li><li><b>Kreis</b>: mit dem Zirkel, alle Punkte mit demselben Abstand vom Mittelpunkt.</li></ul><p>🎯 Versuch: Zeichne eine Gerade und einen Punkt außerhalb davon. Zeichne mit dem gleitenden Dreieck die <b>Parallele</b> durch den Punkt. Wie viele kannst du zeichnen? Nur eine (das ist genau das fünfte Postulat von Euklid!).</p>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der geometrischen Grundbegriffe: Tippe und entdecke das Warum",
      nodes: [
        { id: "postulati", label: "Postulate", x: 50, y: 6, color: "#a855f7", html: "Aussagen, die ohne Beweis als wahr angenommen werden und beschreiben, wie sich Punkte, Geraden und Ebenen verhalten.", why: "Man kann nicht alles beweisen: Jede Überlegung muss von etwas ausgehen. Euklid wählte um 300 v. Chr. wenige einleuchtende Postulate und baute daraus mit strengen Beweisen die ganze Geometrie auf. 1899 schrieb David Hilbert sie noch genauer neu." },
        { id: "punto", label: "Punkt", x: 18, y: 26, color: "#dc2626", html: "Gibt eine Position an; hat keine Ausdehnung.", why: "Euklid definierte ihn als „das, was keine Teile hat“. Es ist eine abstrakte Idee: Der Punkt, den du mit dem Bleistift zeichnest, ist nur ein Modell, weil er immer eine kleine Dicke hat." },
        { id: "retta", label: "Gerade", x: 50, y: 30, color: "#2563eb", html: "Unbegrenzte gerade Linie mit nur einer Dimension.", why: "Durch zwei Punkte geht nur eine: Darum ist der gespannte Faden zwischen zwei Punkten immer gerade, und die Gerade ist der kürzeste Weg in der Ebene." },
        { id: "piano", label: "Ebene", x: 82, y: 26, color: "#0ea5e9", html: "Unbegrenzte flache Fläche mit zwei Dimensionen.", why: "Drei Punkte, die nicht auf einer Geraden liegen, bestimmen genau eine Ebene: Deshalb wackelt ein Hocker mit 3 Beinen nie, ein Stuhl mit 4 Beinen manchmal schon!" },
        { id: "semiretta", label: "Halbgerade und Strecke", x: 30, y: 54, color: "#16a34a", html: "Teile einer Geraden: Die Halbgerade hat einen Anfangspunkt, die Strecke zwei Endpunkte.", why: "Sie entstehen, wenn man die Gerade mit einem oder zwei Punkten „zerschneidet“. Die Strecke ist endlich und lässt sich daher vergleichen und messen: Daraus entstehen die Längenmaße." },
        { id: "parallele", label: "Parallele und Senkrechte", x: 72, y: 54, color: "#f59e0b", html: "Gegenseitige Lagen zweier Geraden.", why: "Das fünfte Postulat von Euklid besagt im Wesentlichen, dass es durch einen Punkt außerhalb einer Geraden nur eine Parallele gibt. Als man es im 19. Jahrhundert änderte, entstanden die nichteuklidischen Geometrien." },
        { id: "angolo", label: "Winkel", x: 30, y: 80, color: "#ef4444", html: "Teil der Ebene zwischen zwei Halbgeraden mit demselben Anfangspunkt.", why: "Zwei Halbgeraden vom selben Punkt aus teilen die Ebene in zwei Teile: Jeder davon ist ein Winkel. Er misst, wie stark eine Richtung gegenüber einer anderen „gedreht“ ist." },
        { id: "gradi", label: "Sexagesimale Grad", x: 70, y: 82, color: "#14b8a6", html: "Maßeinheit der Winkel: Der Vollwinkel hat 360°, 1° = 60′, 1′ = 60″.", why: "Sie stammt von den Babyloniern, die im Sechzigersystem zählten und beobachteten, dass die Sonne etwa 360 Tage braucht, um den Himmel zu durchlaufen. 360 hat sehr viele Teiler." },
        { id: "teorema", label: "Scheitelwinkel", x: 50, y: 96, color: "#6366f1", html: "Scheitelwinkel sind kongruent.", why: "Man kann es beweisen: Jeder ist der Supplementwinkel desselben Winkels, also sind sie gleich. Der Überlieferung nach bewies es als Erster Thales von Milet (6. Jahrhundert v. Chr.)." }
      ],
      edges: [
        ["postulati", "punto", "beschreiben"],
        ["postulati", "retta", "beschreiben"],
        ["postulati", "piano", "beschreiben"],
        ["retta", "semiretta", "wird geteilt in"],
        ["retta", "parallele", "zwei Geraden können sein"],
        ["semiretta", "angolo", "zwei Halbgeraden bilden"],
        ["angolo", "gradi", "wird gemessen in"],
        ["angolo", "teorema", "wir beweisen"],
        ["piano", "parallele", "in derselben"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Winkel",
      questions: [
        { type: "num", q: "Wie groß ist der Supplementwinkel eines Winkels von 125°?", answer: 55, unit: "°", explain: "180° − 125° = 55°." },
        { type: "mc", q: "Zwei Scheitelwinkel: Einer misst 40°. Wie groß ist der andere?", options: ["140°", "40°", "50°", "320°"], answer: 1, explain: "Scheitelwinkel sind immer kongruent." },
        { type: "mc", q: "Ein Winkel von 100° ist …", options: ["spitz", "recht", "stumpf", "gestreckt"], answer: 2, explain: "Er ist größer als 90° und kleiner als 180°: stumpf." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li><b>Punkt, Gerade, Ebene</b> sind Grundbegriffe: Man definiert sie nicht, man beschreibt sie mit den <b>Postulaten</b>.</li>
<li>Durch zwei Punkte geht <b>genau eine Gerade</b>; durch drei Punkte, die nicht auf einer Geraden liegen, <b>genau eine Ebene</b>.</li>
<li>Die <b>Strecke</b> hat zwei Endpunkte und lässt sich messen; Gerade und Halbgerade nicht.</li>
<li>Geraden in der Ebene: <b>sich schneidend, senkrecht, parallel</b>; im Raum auch <b>windschief</b>.</li>
<li>Winkel: spitz (&lt;90°), recht (90°), stumpf, gestreckt (180°), voll (360°).</li>
<li>Komplementwinkel 90°, Supplementwinkel 180°, Explementwinkel 360°; Scheitelwinkel = kongruent.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Grundbegriff", d: "Grundlegendes Konzept, das nicht definiert wird (Punkt, Gerade, Ebene)." },
    { t: "Postulat", d: "Aussage, die ohne Beweis als wahr angenommen wird." },
    { t: "Halbgerade", d: "Jeder der beiden Teile, in die ein Punkt eine Gerade teilt." },
    { t: "Strecke", d: "Teil einer Geraden zwischen zwei Punkten, den Endpunkten." },
    { t: "Mittelpunkt", d: "Punkt, der eine Strecke in zwei kongruente Teile teilt." },
    { t: "Kongruent", d: "Figuren, die sich Punkt für Punkt aufeinanderlegen lassen (gleiche Form und Größe)." },
    { t: "Windschiefe Geraden", d: "Geraden im Raum, die sich nicht treffen und nicht parallel sind." },
    { t: "Winkel", d: "Teil der Ebene zwischen zwei Halbgeraden mit demselben Anfangspunkt." },
    { t: "Winkelmesser", d: "Werkzeug, um Winkel in Grad zu messen." },
    { t: "Sexagesimalsystem", d: "System zur Basis 60: 1° = 60 Minuten, 1 Minute = 60 Sekunden." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher dieser Begriffe wird mit einem Kleinbuchstaben bezeichnet?", options: ["Der Punkt", "Die Gerade", "Die Ebene"], answer: 1, explain: "Geraden bezeichnet man mit Kleinbuchstaben (r, s), Punkte mit Großbuchstaben, Ebenen mit griechischen Buchstaben." },
      { type: "tf", q: "Durch drei Punkte, die nicht auf einer Geraden liegen, geht genau eine Ebene.", answer: true, explain: "Das ist ein Postulat: Deshalb wackelt ein Hocker mit 3 Beinen nicht." },
      { type: "mc", q: "Zwei aufeinanderfolgende Strecken, die auf derselben Geraden liegen, nennt man …", options: ["kongruent", "benachbart", "sich schneidend", "parallel"], answer: 1, explain: "Sie sind benachbart: aufeinanderfolgend und auf einer Geraden." },
      { type: "num", q: "Die Strecke AB ist 18 cm lang. Wie lang ist AM, wenn M der Mittelpunkt ist?", answer: 9, unit: "cm", explain: "Der Mittelpunkt teilt die Strecke in der Mitte: 18 : 2 = 9 cm." },
      { type: "num", q: "AB + BC = 30 cm und AB ist um 6 cm länger als BC. Wie lang ist BC?", answer: 12, unit: "cm", explain: "BC = (30 − 6) : 2 = 12 cm; AB = 18 cm." },
      { type: "text", q: "Wie nennt man zwei Geraden im Raum, die sich nicht treffen und nicht parallel sind?", answer: ["windschief", "windschiefe", "windschiefe Geraden", "windschiefe Gerade", "Windschiefe", "Windschiefe Geraden"], explain: "Das sind windschiefe Geraden: Sie liegen nicht in derselben Ebene." },
      { type: "num", q: "Wie groß ist der Komplementwinkel eines Winkels von 37°?", answer: 53, unit: "°", explain: "90° − 37° = 53°." },
      { type: "num", q: "Wie groß ist der Explementwinkel eines Winkels von 210°?", answer: 150, unit: "°", explain: "360° − 210° = 150°." },
      { type: "mc", q: "Wie viel ist 25°50′ + 14°20′?", options: ["39°70′", "40°10′", "39°10′", "40°70′"], answer: 1, explain: "25°50′ + 14°20′ = 39°70′ = 40°10′, weil 60′ = 1°." },
      { type: "num", q: "Wie viel Grad bilden die Zeiger einer Uhr um 4:00 Uhr?", answer: 120, unit: "°", explain: "Jede Stunde ist 30° wert: 4 × 30° = 120°." },
      { type: "tf", q: "Zwei senkrechte Geraden bilden vier spitze Winkel.", answer: false, explain: "Sie bilden vier rechte Winkel (90°)." },
      { type: "order", q: "Ordne die Winkel vom kleinsten zum größten.", items: ["spitz", "recht", "stumpf", "gestreckt", "voll"], explain: "Spitz (<90°), recht (90°), stumpf (90°–180°), gestreckt (180°), voll (360°)." }
    ]
  }
});
