TOPIC('de', {
  id: "m1-mat-triangoli",
  title: "Die Dreiecke",
  intro: "Das <b>Dreieck</b> ist das einfachste Vieleck: nur 3 Seiten und 3 Winkel. Und doch ist es die „stärkste“ Figur der Geometrie: Es ist starr, verformt sich nicht, und deshalb findest du es in Brücken, Kränen und Dächern. Wir entdecken, wie man es einteilt, warum seine Winkel immer 180° ergeben und welche <b>besonderen Punkte</b> es hat.",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "1. Was ist ein Dreieck?",
      html: `<p>Ein <b>Dreieck</b> ist ein Vieleck mit <b>3 Seiten</b>, <b>3 Ecken</b> und <b>3 Innenwinkeln</b>. Man bezeichnet es mit den Buchstaben der Ecken: Dreieck <b>ABC</b>.</p>
<ul>
<li>Die den Ecken A, B, C gegenüberliegenden Seiten bezeichnet man oft mit den Kleinbuchstaben <b>a, b, c</b>.</li>
<li>Die Innenwinkel bezeichnet man mit <b>α, β, γ</b> (oder Â, B̂, Ĉ).</li>
<li>Der <b>Umfang</b> ist die Summe der Seiten: u = a + b + c.</li>
</ul>
<p><b>Dreiecksungleichung.</b> Nicht alle Dreiergruppen von Strecken bilden ein Dreieck! Jede Seite muss <b>kleiner als die Summe</b> der beiden anderen sein (und größer als ihre Differenz).</p>
<p>Mit 3, 4 und 5 cm lässt sich das Dreieck konstruieren (5 &lt; 3 + 4). Mit 2, 3 und 7 cm nicht: 7 ist länger als 2 + 3 = 5, und die beiden kurzen Seiten können sich nicht „schließen“.</p>`
    },
    {
      type: "text",
      title: "2. Die Summe der Innenwinkel ist 180°",
      html: `<p>In <b>jedem</b> Dreieck, ob groß oder klein, ist die Summe der Innenwinkel immer <b>180°</b>, also ein gestreckter Winkel:</p>
<p style="text-align:center"><b>α + β + γ = 180°</b></p>
<p><b>Warum?</b> Zeichne durch die Ecke C die <b>Parallele</b> zur Seite AB. Um C herum entsteht ein gestreckter Winkel, der in drei Teile geteilt ist: Der mittlere ist γ, und die beiden äußeren sind kongruent zu α und β (es sind <i>Wechselwinkel</i> an parallelen Geraden). Also ist α + β + γ = ein gestreckter Winkel = 180°. Das ist Satz 32 im ersten Buch der <b>Elemente</b> von Euklid.</p>
<p><b>Nützliche Folgerungen:</b></p>
<ul>
<li>Wenn du zwei Winkel kennst, findest du den dritten: γ = 180° − α − β;</li>
<li>ein Dreieck kann höchstens <b>einen</b> rechten oder stumpfen Winkel haben;</li>
<li>der <b>Außenwinkel</b> (gebildet aus einer Seite und der Verlängerung einer anderen) ist gleich der <b>Summe der beiden nicht anliegenden Innenwinkel</b>.</li>
</ul>`
    },
    {
      type: "svg",
      title: "Der Beweis mit der Parallelen",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#fffbeb"/>
<line x1="40" y1="60" x2="560" y2="60" stroke="#16a34a" stroke-width="3" stroke-dasharray="10 6"/>
<polygon points="110,250 500,250 330,60" fill="#fde68a" stroke="#111827" stroke-width="4"/>
<path d="M160 250 A50 50 0 0 0 147 220" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M450 250 A50 50 0 0 1 468 214" stroke="#2563eb" stroke-width="5" fill="none"/>
<path d="M310 82 A30 30 0 0 0 350 83" stroke="#9333ea" stroke-width="5" fill="none"/>
<path d="M290 60 A40 40 0 0 0 300 87" stroke="#dc2626" stroke-width="5" fill="none"/>
<path d="M370 60 A40 40 0 0 1 356 89" stroke="#2563eb" stroke-width="5" fill="none"/>
<text x="175" y="238" font-size="22" fill="#dc2626" font-weight="bold">α</text>
<text x="420" y="238" font-size="22" fill="#2563eb" font-weight="bold">β</text>
<text x="322" y="115" font-size="22" fill="#9333ea" font-weight="bold">γ</text>
<text x="262" y="88" font-size="22" fill="#dc2626" font-weight="bold">α</text>
<text x="380" y="88" font-size="22" fill="#2563eb" font-weight="bold">β</text>
<text x="95" y="275" font-size="18" font-weight="bold">A</text>
<text x="505" y="275" font-size="18" font-weight="bold">B</text>
<text x="322" y="48" font-size="18" font-weight="bold">C</text>
<text x="60" y="40" font-size="16" fill="#16a34a">Parallele zu AB durch C</text>
<text x="300" y="295" font-size="18" text-anchor="middle" fill="#111827">α + γ + β = gestreckter Winkel = 180°</text>
</svg>`,
      caption: "Oben, um C herum, bilden die drei Winkel α, γ, β einen gestreckten Winkel."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Den fehlenden Winkel finden",
      html: `<p><b>1.</b> Ein Dreieck hat α = 48° und β = 67°. Dann ist γ = 180° − 48° − 67° = <b>65°</b>.</p>
<p><b>2.</b> In einem <b>gleichschenkligen</b> Dreieck misst der Winkel an der Spitze 40°. Die Basiswinkel sind gleich: (180° − 40°) : 2 = jeweils <b>70°</b>.</p>
<p><b>3.</b> In einem <b>rechtwinkligen</b> Dreieck ist ein spitzer Winkel 35°. Der andere ist 90° − 35° = <b>55°</b>: Die beiden spitzen Winkel eines rechtwinkligen Dreiecks sind immer <b>Komplementwinkel</b>.</p>
<p><b>4.</b> Außenwinkel: Wenn zwei Innenwinkel 50° und 60° sind, ist der Außenwinkel an der dritten Ecke 50° + 60° = <b>110°</b>.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Seiten und Winkel",
      questions: [
        { type: "num", q: "Zwei Winkel eines Dreiecks messen 72° und 38°. Wie groß ist der dritte?", answer: 70, unit: "°", explain: "180° − 72° − 38° = 70°." },
        { type: "tf", q: "Mit Strecken von 4 cm, 5 cm und 10 cm lässt sich ein Dreieck konstruieren.", answer: false, explain: "10 ist größer als 4 + 5 = 9: Die Dreiecksungleichung ist nicht erfüllt." },
        { type: "mc", q: "Wie viele stumpfe Winkel kann ein Dreieck höchstens haben?", options: ["0", "1", "2", "3"], answer: 1, explain: "Zwei stumpfe Winkel würden schon mehr als 180° ergeben." }
      ]
    },
    {
      type: "text",
      title: "3. Dreiecke einteilen",
      html: `<p><b>Nach den Seiten</b>:</p>
<ul>
<li><b>gleichseitig</b>: 3 kongruente Seiten und auch 3 kongruente Winkel von je <b>60°</b>;</li>
<li><b>gleichschenklig</b>: 2 kongruente Seiten (die <b>Schenkel</b>); die dritte ist die <b>Basis</b>. Die Basiswinkel sind kongruent;</li>
<li><b>ungleichseitig</b>: 3 verschiedene Seiten und 3 verschiedene Winkel.</li>
</ul>
<p><b>Nach den Winkeln</b>:</p>
<ul>
<li><b>spitzwinklig</b>: 3 spitze Winkel;</li>
<li><b>rechtwinklig</b>: ein rechter Winkel. Die Seiten, die ihn bilden, sind die <b>Katheten</b>, die gegenüberliegende Seite ist die <b>Hypotenuse</b> (immer die längste Seite);</li>
<li><b>stumpfwinklig</b>: ein stumpfer Winkel.</li>
</ul>
<p>Die beiden Einteilungen lassen sich kombinieren: Es gibt das <b>rechtwinklig-gleichschenklige</b> Dreieck (Winkel 90°, 45°, 45°: die Hälfte eines Quadrats), das <b>ungleichseitige stumpfwinklige</b> und so weiter. Aber ein gleichseitiges Dreieck ist immer spitzwinklig!</p>`
    },
    {
      type: "svg",
      title: "Die Familie der Dreiecke",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f0f9ff"/>
<text x="300" y="24" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">Nach den Seiten</text>
<polygon points="40,140 160,140 100,36" fill="#fca5a5" stroke="#991b1b" stroke-width="3"/>
<text x="100" y="164" font-size="16" text-anchor="middle" font-weight="bold">gleichseitig</text>
<polygon points="240,140 360,140 300,40" fill="#fde047" stroke="#854d0e" stroke-width="3"/>
<line x1="264" y1="92" x2="276" y2="86" stroke="#854d0e" stroke-width="3"/>
<line x1="324" y1="86" x2="336" y2="92" stroke="#854d0e" stroke-width="3"/>
<text x="300" y="164" font-size="16" text-anchor="middle" font-weight="bold">gleichschenklig</text>
<polygon points="420,140 580,140 460,50" fill="#86efac" stroke="#166534" stroke-width="3"/>
<text x="500" y="164" font-size="16" text-anchor="middle" font-weight="bold">ungleichseitig</text>
<text x="300" y="194" font-size="18" text-anchor="middle" font-weight="bold" fill="#0f172a">Nach den Winkeln</text>
<polygon points="40,295 170,295 120,215" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>
<text x="105" y="315" font-size="16" text-anchor="middle" font-weight="bold">spitzwinklig</text>
<polygon points="250,295 360,295 250,210" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3"/>
<rect x="250" y="279" width="16" height="16" fill="none" stroke="#1e3a8a" stroke-width="2"/>
<text x="300" y="315" font-size="16" text-anchor="middle" font-weight="bold">rechtwinklig</text>
<polygon points="420,295 580,295 450,250" fill="#fdba74" stroke="#9a3412" stroke-width="3"/>
<text x="500" y="315" font-size="16" text-anchor="middle" font-weight="bold">stumpfwinklig</text>
</svg>`,
      caption: "Die Striche auf den Seiten zeigen kongruente Seiten an; das Quadrätchen zeigt den rechten Winkel an."
    },
    {
      type: "widget",
      title: "Was für ein Dreieck ist das?",
      widget: "classify",
      options: {
        groups: ["Spitzwinklig", "Rechtwinklig", "Stumpfwinklig"],
        items: [
          ["60°, 60°, 60°", 0], ["90°, 45°, 45°", 1], ["120°, 30°, 30°", 2], ["70°, 60°, 50°", 0],
          ["90°, 30°, 60°", 1], ["100°, 50°, 30°", 2], ["80°, 80°, 20°", 0], ["Seiten 3, 4, 5 cm", 1], ["ein Winkel von 95°", 2]
        ]
      },
      caption: "Das Dreieck mit den Seiten 3, 4, 5 ist rechtwinklig, weil 3² + 4² = 5² (das siehst du später mit Pythagoras)."
    },
    {
      type: "text",
      title: "4. Höhen, Seitenhalbierende, Winkelhalbierende, Mittelsenkrechten",
      html: `<p>In jedem Dreieck kann man 4 Arten besonderer Strecken oder Geraden zeichnen, <b>drei pro Art</b>. Die drei Linien jeder Art treffen sich immer in <b>einem einzigen Punkt</b>: den <b>besonderen Punkten</b>.</p>
<table>
<tr><th>Linie</th><th>Was ist das?</th><th>Besonderer Punkt</th></tr>
<tr><td><b>Höhe</b></td><td>Strecke, die von der Ecke senkrecht zur gegenüberliegenden Seite (oder ihrer Verlängerung) verläuft</td><td><b>Höhenschnittpunkt</b></td></tr>
<tr><td><b>Seitenhalbierende</b> (Mediane)</td><td>Strecke von der Ecke zum <b>Mittelpunkt</b> der gegenüberliegenden Seite</td><td><b>Schwerpunkt</b>: teilt jede Seitenhalbierende in zwei Teile, von denen einer doppelt so lang ist wie der andere (2 : 1)</td></tr>
<tr><td><b>Winkelhalbierende</b></td><td>Halbgerade, die einen Winkel in zwei kongruente Winkel teilt</td><td><b>Inkreismittelpunkt</b>: Mittelpunkt des <b>Inkreises</b></td></tr>
<tr><td><b>Mittelsenkrechte</b></td><td>Gerade, die im Mittelpunkt einer Seite senkrecht auf ihr steht</td><td><b>Umkreismittelpunkt</b>: Mittelpunkt des <b>Umkreises</b></td></tr>
</table>
<p><b>Wo liegen sie?</b> Schwerpunkt und Inkreismittelpunkt liegen immer <b>innen</b>. Höhenschnittpunkt und Umkreismittelpunkt liegen im spitzwinkligen Dreieck innen; im rechtwinkligen liegt der Höhenschnittpunkt in der Ecke des rechten Winkels und der Umkreismittelpunkt im Mittelpunkt der Hypotenuse; im stumpfwinkligen liegen sie <b>außen</b>.</p>
<p>Im <b>gleichseitigen</b> Dreieck <b>fallen</b> die vier besonderen Punkte <b>zusammen</b>.</p>`
    },
    {
      type: "widget",
      title: "Erkenne die Linien des Dreiecks",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<polygon points="60,280 540,280 220,40" fill="#e0f2fe" stroke="#0f172a" stroke-width="4"/>
<line x1="220" y1="40" x2="220" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 5"/>
<rect x="220" y="264" width="16" height="16" fill="none" stroke="#dc2626" stroke-width="2"/>
<line x1="540" y1="280" x2="140" y2="160" stroke="#16a34a" stroke-width="3"/>
<circle cx="140" cy="160" r="6" fill="#16a34a"/>
<circle cx="300" cy="280" r="6" fill="#9333ea"/>
<text x="40" y="300" font-size="18" font-weight="bold">A</text>
<text x="548" y="300" font-size="18" font-weight="bold">B</text>
<text x="212" y="30" font-size="18" font-weight="bold">C</text>
</svg>`,
        spots: [
          { x: 220, y: 170, label: "Höhe" },
          { x: 340, y: 220, label: "Seitenhalbierende" },
          { x: 140, y: 160, label: "Mittelpunkt von AC" },
          { x: 220, y: 272, label: "Rechter Winkel" },
          { x: 300, y: 280, label: "Basis AB" }
        ]
      },
      caption: "Die Höhe bildet mit der Basis einen rechten Winkel; die Seitenhalbierende erreicht den Mittelpunkt der gegenüberliegenden Seite."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Der Schwerpunkt und der Umfang",
      html: `<p><b>Schwerpunkt im Gleichgewicht.</b> Schneide ein Dreieck aus Pappe aus, zeichne zwei Seitenhalbierende und finde ihren Schnittpunkt: den <b>Schwerpunkt</b>. Lege ihn auf die Spitze eines Bleistifts: Das Dreieck bleibt im <b>Gleichgewicht</b>! Der Schwerpunkt ist nämlich der „Massenmittelpunkt“ der Figur.</p>
<p>Wenn eine Seitenhalbierende 12 cm lang ist, teilt der Schwerpunkt sie in <b>8 cm</b> (auf der Seite der Ecke) und <b>4 cm</b> (auf der Seite der Dreiecksseite).</p>
<p><b>Umfang.</b> Ein gleichschenkliges Dreieck hat eine Basis von 10 cm und Schenkel von 13 cm: u = 10 + 13 + 13 = <b>36 cm</b>. Ein gleichseitiges Dreieck mit einem Umfang von 27 cm hat Seiten von 27 : 3 = <b>9 cm</b>.</p>`
    },
    {
      type: "3d",
      title: "Dreiecke im Raum: das Tetraeder",
      scene: "solid",
      options: { shape: "pyramid", n: 3, r: 1.2, h: 1.6, color: "#f97316", labels: true, shapes: ["pyramid", "prism"] },
      caption: "Eine Pyramide mit dreieckiger Grundfläche hat 4 Flächen, alles Dreiecke. Das dreiseitige Prisma hat zwei dreieckige Grundflächen: Du findest es in Campingzelten und in Prismen, die das Licht zerlegen."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … das Dreieck verformt sich nicht?",
      html: `<p>Nimm 4 Stäbe, die an den Ecken mit Musterklammern verbunden sind: Das Quadrat lässt sich leicht zusammendrücken und wird zu einer Raute. Mit 3 Stäben dagegen <b>bewegt sich</b> das Dreieck <b>nicht</b>: Drei Seiten bestimmen nur ein einziges Dreieck (das ist der dritte Kongruenzsatz).</p>
<p>Darum sind Dreiecke überall in <b>Tragwerken</b>: Der <b>Eiffelturm</b>, Kräne, Hochspannungsmasten, eiserne Brücken, Dachstühle und sogar Fahrradrahmen bestehen aus Dreiecken.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon … auf der Erde „schummeln“ die Dreiecke?",
      html: `<p>Die 180°-Regel gilt in der <b>Ebene</b>. Auf einer Kugel nicht! Starte am Nordpol, geh bis zum Äquator hinunter, lauf ein Viertel des Äquators entlang und kehre zum Pol zurück: Du hast ein Dreieck mit <b>drei rechten Winkeln</b> gezeichnet, also 270°!</p>
<p>Der große Mathematiker <b>Carl Friedrich Gauß</b> vermaß Anfang des 19. Jahrhunderts ein riesiges Dreieck zwischen drei deutschen Bergen (Brocken, Hoher Hagen und Inselsberg), um zu prüfen, ob der Raum wirklich „flach“ ist. Er fand 180°, im Rahmen der Messfehler.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Dreiecke zu verstehen",
      intro: "Wenn dich der Beweis mit den Parallelen nicht überzeugt, versuche es mit den Händen, mit dem Körper oder mit Technik.",
      tabs: [
        {
          label: "✂️ Winkel abreißen",
          html: `<p>Die Methode, die in Schulen auf der ganzen Welt am häufigsten benutzt wird, um die 180° zu <b>sehen</b>:</p>
<ol>
<li>Zeichne ein beliebiges Dreieck auf ein Blatt und male die drei Winkel in verschiedenen Farben an;</li>
<li>schneide es aus und <b>reiß</b> die drei Winkel ab;</li>
<li>lege sie mit den Spitzen an demselben Punkt aneinander: Sie bilden immer eine <b>gerade Linie</b>, also einen gestreckten Winkel!</li>
</ol>
<p>Probiere es mit verschiedenen Dreiecken: Es funktioniert immer.</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<polygon points="30,180 230,180 150,40" fill="#ffffff" stroke="#111827" stroke-width="3"/>
<path d="M30 180 L70 180 A40 40 0 0 0 64 160 Z" fill="#ef4444"/>
<path d="M230 180 L190 180 A40 40 0 0 1 210 145 Z" fill="#3b82f6"/>
<path d="M150 40 L132 72 A36 36 0 0 0 170 75 Z" fill="#22c55e"/>
<text x="280" y="120" font-size="30" fill="#111827">→</text>
<line x1="330" y1="160" x2="580" y2="160" stroke="#111827" stroke-width="3"/>
<path d="M455 160 L525 160 A70 70 0 0 0 516 125 Z" fill="#ef4444"/>
<path d="M455 160 L516 125 A70 70 0 0 0 420 99 Z" fill="#22c55e"/>
<path d="M455 160 L420 99 A70 70 0 0 0 385 160 Z" fill="#3b82f6"/>
<text x="455" y="200" font-size="18" text-anchor="middle" font-weight="bold">die drei Winkel = 180°</text>
</svg>`
        },
        {
          label: "🚶 Lauf um das Dreieck",
          html: `<p>Zeichne mit Kreide ein großes Dreieck auf den Schulhof. Starte an einer Ecke und schau entlang einer Seite, geh bis zur nächsten Ecke und <b>dreh dich</b>, um entlang der neuen Seite zu schauen. Mach dasselbe an den anderen Ecken, bis du wieder in die Startrichtung schaust.</p>
<p>Du hast eine <b>volle Drehung</b> gemacht: 360°. Die drei „Drehungen“ sind die <b>Außenwinkel</b>, also ist ihre Summe 360°. Jeder Außenwinkel + sein Innenwinkel = 180°: 3 × 180° − 360° = <b>180°</b> für die Innenwinkel. Diese Methode ist in den englischsprachigen Ländern sehr beliebt und ist die Grundlage der Programmierung mit der „Schildkröte“ (Logo, Scratch).</p>`
        },
        {
          label: "📐 Das interaktive rechtwinklige Dreieck",
          html: `<p>Bewege die Regler der Katheten: Das Dreieck ändert seine Form, bleibt aber immer <b>rechtwinklig</b>. Beobachte, dass die <b>Hypotenuse</b> immer die längste Seite ist und dass die beiden spitzen Winkel Komplementwinkel sind. Die Quadrate auf den Seiten bereiten dich auf den Satz des Pythagoras vor, den du später lernen wirst.</p>`,
          widget: "pythagoras",
          options: { a: 3, b: 4 }
        },
        {
          label: "🏗️ Vergleich: das Dreieck als Ingenieur",
          html: `<p>Stell dir die Dreiecke als die <b>Ingenieure</b> der Geometrie vor. Ein Rechteck aus Pappe verbiegt sich unter einem Gewicht; wenn du eine <b>Diagonale</b> hinzufügst, wird es zu zwei Dreiecken und verbiegt sich nicht mehr.</p>
<p>Der Landvermesser benutzt Dreiecke auch, um <b>Entfernungen zu messen</b>, die man nicht erreichen kann (Flüsse, Berge): Das ist die <b>Triangulation</b>, mit der die Landkarten ganz Europas gezeichnet wurden. Und das GPS deines Telefons berechnet deine Position nach einem ähnlichen Prinzip, der Trilateration.</p>`
        },
        {
          "label": "🇬🇷 Der Beweis des Euklid (die Parallele)",
          "html": "<p>Das Abreißen der Winkel lässt uns <b>sehen</b>, dass die Summe 180° ist, aber die <b>griechischen</b> Mathematiker wollten <b>sicher</b> sein, dass sie für <b>alle</b> Dreiecke gilt, auch für solche, die noch nie jemand gezeichnet hat. Hier der Beweis aus den <i>Elementen</i> des <b>Euklid</b> (Buch I, Satz 32):</p><ol><li>Nimm ein beliebiges Dreieck ABC mit den Winkeln α, β, γ.</li><li>Zeichne von der Ecke <b>C</b> aus die <b>Parallele</b> zur Seite AB.</li><li>Links von C entsteht ein Winkel, der <b>gleich α</b> ist: Es sind <b>Wechselwinkel</b> an zwei Parallelen, die von der Geraden AC geschnitten werden.</li><li>Rechts von C entsteht ein Winkel, der <b>gleich β</b> ist, aus demselben Grund mit der Geraden BC.</li><li>Nun liegen um C herum, auf der parallelen Geraden, α, γ und β nebeneinander: Zusammen bilden sie einen <b>gestreckten Winkel</b>, also <b>180°</b>.</li></ol><p>Also ist α + β + γ = 180° <b>immer</b>. Beachte, dass wir die Tatsache benutzt haben, dass es durch C <b>nur eine</b> Parallele zu AB gibt: Das ist das berühmte <b>fünfte Postulat</b>. Auf einer Kugel (wie der Erde) gilt dieses Postulat nicht, und dort ergeben die Winkel eines Dreiecks tatsächlich <b>mehr</b> als 180°!</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><polygon points=\"100,250 500,250 260,70\" fill=\"#e0f2fe\" stroke=\"#1e3a8a\" stroke-width=\"3\"/><line x1=\"30\" y1=\"70\" x2=\"570\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"3\" stroke-dasharray=\"10 6\"/><path d=\"M140,250 A40,40 0 0 0 126.6,220.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M460,250 A40,40 0 0 1 468,226\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><path d=\"M236.8,96.1 A35,35 0 0 0 288,91\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"7\"/><path d=\"M225,70 A35,35 0 0 0 236.8,96.1\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"7\"/><path d=\"M288,91 A35,35 0 0 0 295,70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"7\"/><text x=\"78\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">A</text><text x=\"508\" y=\"275\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">B</text><text x=\"252\" y=\"58\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">C</text><text x=\"150\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"430\" y=\"240\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"253\" y=\"125\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#16a34a\" font-weight=\"bold\">γ</text><text x=\"180\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"bold\">α</text><text x=\"315\" y=\"62\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"bold\">β</text><text x=\"400\" y=\"100\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\">Parallele zu AB</text><text x=\"300\" y=\"292\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">α + γ + β = gestreckter Winkel = 180°</text></svg>"
        },
        {
          "label": "𓂀 Das „Seked“ der alten Ägypter",
          "html": "<p>Im <b>Papyrus Rhind</b> (Ägypten, etwa 1550 v. Chr., vom Schreiber <b>Ahmes</b> abgeschrieben) gibt es Aufgaben zu Pyramiden. Um zu sagen, wie <b>steil</b> eine Seitenfläche ist, benutzten die Ägypter das <b>Seked</b>: um wie viele <b>Handbreiten</b> man sich <b>waagrecht</b> bewegt, wenn man <b>1 Elle</b> hinaufsteigt (1 Elle = 7 Handbreiten).</p><p>Das Seked beschreibt ein <b>rechtwinkliges Dreieck</b>: Die senkrechte Kathete ist immer 1 Elle, die waagrechte Kathete ist das Seked. Alle Pyramiden mit demselben Seked haben Seitenflächen mit der <b>gleichen Neigung</b>, ob sie groß oder klein sind: Ihre Dreiecke sind <b>ähnlich</b>. Die große Cheops-Pyramide hat ein Seked von 5 und einer halben Handbreite (Winkel von etwa 52°).</p><p><b>Aufgabe 56 des Papyrus</b>: Eine Pyramide hat eine Grundseite von <b>360</b> Ellen und eine Höhe von <b>250</b> Ellen. Wie groß ist das Seked?</p><ol><li>Nimm die <b>halbe Grundseite</b>: 360 : 2 = 180 Ellen (das ist die waagrechte Kathete des rechtwinkligen Dreiecks in der Pyramide).</li><li>Steigt man 250 Ellen hinauf, bewegt man sich um 180: Steigt man 1 Elle hinauf, bewegt man sich um 180 : 250 = 0,72 Ellen.</li><li>Rechne in Handbreiten um: 0,72 × 7 = <b>5,04 Handbreiten</b>. Ahmes schreibt „5 Handbreiten und 1/25“: Das ist genau 5,04!</li></ol><p>Achtung: <b>kleineres Seked = steilere Pyramide</b>.</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/><polygon points=\"200,260 200,50 365,260\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"3\"/><polygon points=\"200,260 200,50 35,260\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\" stroke-dasharray=\"8 6\"/><rect x=\"200\" y=\"240\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"2\"/><text x=\"190\" y=\"160\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\" font-weight=\"bold\">1 Elle</text><text x=\"190\" y=\"180\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"end\">= 7 Handbreiten</text><text x=\"282\" y=\"284\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">Seked = 5½ Handbreiten</text><text x=\"390\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" font-weight=\"bold\">Cheops-Pyramide:</text><text x=\"390\" y=\"115\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">pro Elle Anstieg bewegt man</text><text x=\"390\" y=\"137\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">sich um 5½ Handbreiten</text><text x=\"390\" y=\"159\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#1e293b\">waagrecht.</text><text x=\"390\" y=\"195\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#b45309\" font-weight=\"bold\">Winkel ≈ 52°</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Dreiecke: Tippe und entdecke das Warum",
      nodes: [
        { id: "tri", label: "Dreieck", x: 50, y: 6, color: "#f97316", html: "Vieleck mit 3 Seiten, 3 Ecken, 3 Winkeln.", why: "Es ist das Vieleck mit der kleinstmöglichen Zahl von Seiten: Mit 2 Strecken schließt sich keine Figur. Jedes andere Vieleck lässt sich mit Diagonalen in Dreiecke zerlegen." },
        { id: "disug", label: "Dreiecksungleichung", x: 16, y: 26, color: "#ef4444", html: "Jede Seite ist kleiner als die Summe der beiden anderen.", why: "Der gerade Weg ist der kürzeste: Von A nach B über C zu gehen ist immer länger als geradeaus. Euklid beweist das in Satz 20 des ersten Buches." },
        { id: "somma", label: "Winkelsumme = 180°", x: 50, y: 30, color: "#a855f7", html: "α + β + γ = 180° in jedem Dreieck der Ebene.", why: "Sie folgt aus dem fünften Postulat des Euklid (dem Parallelenpostulat): Zeichnet man durch die gegenüberliegende Ecke die Parallele zu einer Seite, setzen sich die drei Winkel zu einem gestreckten Winkel zusammen." },
        { id: "rigido", label: "Starrheit", x: 84, y: 26, color: "#64748b", html: "Das Dreieck verformt sich nicht, wenn die Seiten fest sind.", why: "Drei Seiten bestimmen nur ein Dreieck (Kongruenzsatz SSS). Darum bauen Ingenieure Fachwerke aus Dreiecken." },
        { id: "lati", label: "Einteilung nach Seiten", x: 25, y: 54, color: "#eab308", html: "Gleichseitig, gleichschenklig, ungleichseitig.", why: "Wenn zwei Seiten gleich sind, sind auch die gegenüberliegenden Winkel gleich (Satz vom gleichschenkligen Dreieck, im Mittelalter pons asinorum, die „Eselsbrücke“, genannt, weil er Schülern Schwierigkeiten machte)." },
        { id: "angoli", label: "Einteilung nach Winkeln", x: 75, y: 54, color: "#3b82f6", html: "Spitzwinklig, rechtwinklig, stumpfwinklig.", why: "Da die Summe 180° ist, kann höchstens ein Winkel recht oder stumpf sein: Die anderen beiden müssen sich den Rest teilen." },
        { id: "punti", label: "Besondere Punkte", x: 50, y: 74, color: "#16a34a", html: "Höhenschnittpunkt, Schwerpunkt, Inkreismittelpunkt, Umkreismittelpunkt.", why: "Die drei Höhen, Seitenhalbierenden, Winkelhalbierenden oder Mittelsenkrechten treffen sich immer in einem einzigen Punkt: Das ist beweisbar, kein Zufall. Die alten Griechen kannten Schwerpunkt, Inkreismittelpunkt und Umkreismittelpunkt schon." },
        { id: "eulero", label: "Euler'sche Gerade", x: 25, y: 94, color: "#14b8a6", html: "Höhenschnittpunkt, Schwerpunkt und Umkreismittelpunkt liegen immer auf derselben Geraden.", why: "Der Schweizer Mathematiker Leonhard Euler entdeckte sie 1765. Der Schwerpunkt liegt immer bei 1/3 des Abstands zwischen Umkreismittelpunkt und Höhenschnittpunkt." },
        { id: "pitagora", label: "Auf dem Weg zu Pythagoras", x: 75, y: 94, color: "#ec4899", html: "Im rechtwinkligen Dreieck: a² + b² = c².", why: "Du lernst ihn später. Babylonier und Chinesen kannten ihn schon; der Überlieferung nach stammt der erste Beweis von Pythagoras (6. Jahrhundert v. Chr.)." }
      ],
      edges: [
        ["tri", "disug", "existiert, wenn"],
        ["tri", "somma", "Eigenschaft"],
        ["tri", "rigido", "Eigenschaft"],
        ["tri", "lati", "wird eingeteilt"],
        ["tri", "angoli", "wird eingeteilt"],
        ["somma", "angoli", "begrenzt"],
        ["tri", "punti", "hat"],
        ["punti", "eulero", "liegen auf der"],
        ["angoli", "pitagora", "wenn rechtwinklig"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Einteilung und besondere Punkte",
      questions: [
        { type: "mc", q: "Wie heißt der Schnittpunkt der Seitenhalbierenden?", options: ["Höhenschnittpunkt", "Schwerpunkt", "Inkreismittelpunkt", "Umkreismittelpunkt"], answer: 1, explain: "Die Seitenhalbierenden schneiden sich im Schwerpunkt." },
        { type: "mc", q: "Ein Dreieck mit den Winkeln 90°, 45°, 45° ist …", options: ["rechtwinklig ungleichseitig", "rechtwinklig gleichschenklig", "gleichseitig", "stumpfwinklig"], answer: 1, explain: "Es hat einen rechten Winkel und zwei gleiche Winkel (und damit zwei gleiche Seiten)." },
        { type: "num", q: "In einem gleichschenkligen Dreieck ist der Winkel an der Spitze 50°. Wie groß ist jeder Basiswinkel?", answer: 65, unit: "°", explain: "(180° − 50°) : 2 = 65°." }
      ]
    },
    {
      type: "remember",
      title: "Zum Merken",
      html: `<ul>
<li>Jede Seite ist <b>kleiner als die Summe</b> der beiden anderen.</li>
<li>Die Summe der Innenwinkel ist <b>180°</b>; Außenwinkel = Summe der beiden nicht anliegenden Innenwinkel.</li>
<li>Seiten: <b>gleichseitig, gleichschenklig, ungleichseitig</b>. Winkel: <b>spitzwinklig, rechtwinklig, stumpfwinklig</b>.</li>
<li>Höhen → <b>Höhenschnittpunkt</b>; Seitenhalbierende → <b>Schwerpunkt</b> (2:1); Winkelhalbierende → <b>Inkreismittelpunkt</b>; Mittelsenkrechten → <b>Umkreismittelpunkt</b>.</li>
<li>Das Dreieck ist <b>starr</b>: Darum benutzt man es beim Bauen.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Dreieck", d: "Vieleck mit drei Seiten und drei Winkeln." },
    { t: "Dreiecksungleichung", d: "Jede Seite ist kleiner als die Summe der beiden anderen." },
    { t: "Außenwinkel", d: "Winkel zwischen einer Seite und der Verlängerung der benachbarten Seite." },
    { t: "Katheten", d: "Die beiden Seiten, die in einem rechtwinkligen Dreieck den rechten Winkel bilden." },
    { t: "Hypotenuse", d: "Die dem rechten Winkel gegenüberliegende Seite; sie ist die längste." },
    { t: "Höhe", d: "Senkrechte Strecke von einer Ecke zur gegenüberliegenden Seite." },
    { t: "Seitenhalbierende", d: "Strecke, die eine Ecke mit dem Mittelpunkt der gegenüberliegenden Seite verbindet." },
    { t: "Winkelhalbierende", d: "Halbgerade, die einen Winkel in zwei kongruente Teile teilt." },
    { t: "Mittelsenkrechte", d: "Gerade, die im Mittelpunkt einer Strecke senkrecht auf ihr steht." },
    { t: "Schwerpunkt", d: "Schnittpunkt der Seitenhalbierenden; Gleichgewichtspunkt des Dreiecks." },
    { t: "Höhenschnittpunkt, Inkreismittelpunkt, Umkreismittelpunkt", d: "Schnittpunkte der Höhen, Winkelhalbierenden und Mittelsenkrechten." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "Zwei Winkel eines Dreiecks messen 55° und 85°. Wie groß ist der dritte?", answer: 40, unit: "°", explain: "180° − 55° − 85° = 40°." },
      { type: "mc", q: "Mit welcher Dreiergruppe von Strecken lässt sich ein Dreieck konstruieren?", options: ["2, 3, 6 cm", "3, 4, 8 cm", "5, 6, 9 cm", "1, 1, 3 cm"], answer: 2, explain: "9 < 5 + 6 = 11: Es ist die einzige Dreiergruppe, die die Dreiecksungleichung erfüllt." },
      { type: "tf", q: "Ein gleichseitiges Dreieck hat lauter Winkel von 60°.", answer: true, explain: "Drei gleiche Winkel: 180° : 3 = 60°." },
      { type: "mc", q: "In einem rechtwinkligen Dreieck heißt die dem rechten Winkel gegenüberliegende Seite …", options: ["Kathete", "Basis", "Hypotenuse", "Seitenhalbierende"], answer: 2, explain: "Es ist die Hypotenuse, die längste Seite." },
      { type: "text", q: "Wie heißt der Schnittpunkt der drei Höhen?", answer: ["Höhenschnittpunkt", "der Höhenschnittpunkt", "höhenschnittpunkt"], explain: "Die Höhen schneiden sich im Höhenschnittpunkt." },
      { type: "mc", q: "Der Mittelpunkt des Inkreises eines Dreiecks ist …", options: ["der Schwerpunkt", "der Inkreismittelpunkt", "der Umkreismittelpunkt", "der Höhenschnittpunkt"], answer: 1, explain: "Der Inkreismittelpunkt, der Schnittpunkt der Winkelhalbierenden, hat von den drei Seiten denselben Abstand." },
      { type: "num", q: "Ein spitzer Winkel eines rechtwinkligen Dreiecks misst 28°. Wie groß ist der andere spitze Winkel?", answer: 62, unit: "°", explain: "Die spitzen Winkel eines rechtwinkligen Dreiecks sind Komplementwinkel: 90° − 28° = 62°." },
      { type: "num", q: "Zwei Innenwinkel messen 45° und 70°. Wie groß ist der Außenwinkel an der dritten Ecke?", answer: 115, unit: "°", explain: "Der Außenwinkel ist die Summe der beiden nicht anliegenden Innenwinkel: 45° + 70° = 115°." },
      { type: "num", q: "Eine Seitenhalbierende ist 18 cm lang. Wie lang ist der Teil zwischen der Ecke und dem Schwerpunkt?", answer: 12, unit: "cm", explain: "Der Schwerpunkt teilt die Seitenhalbierende im Verhältnis 2:1: 18 : 3 × 2 = 12 cm." },
      { type: "tf", q: "In einem stumpfwinkligen Dreieck liegt der Höhenschnittpunkt außerhalb des Dreiecks.", answer: true, explain: "Zwei Höhen fallen auf die Verlängerungen der Seiten, also liegt der Höhenschnittpunkt außen." },
      { type: "num", q: "Ein gleichschenkliges Dreieck hat die Basis 12 cm und den Schenkel 10 cm. Wie groß ist der Umfang?", answer: 32, unit: "cm", explain: "12 + 10 + 10 = 32 cm." },
      { type: "order", q: "Bringe die Schritte zum Finden des Schwerpunkts in die richtige Reihenfolge.", items: ["Finde den Mittelpunkt einer Seite", "Verbinde ihn mit der gegenüberliegenden Ecke (Seitenhalbierende)", "Wiederhole das mit einer anderen Seite", "Der Schnittpunkt der Seitenhalbierenden ist der Schwerpunkt"], explain: "Zwei Seitenhalbierende genügen: Die dritte geht durch denselben Punkt." }
    ],
    gen: [["triAngle", 3]]
  }
});
