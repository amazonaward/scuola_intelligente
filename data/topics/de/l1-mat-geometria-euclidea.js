TOPIC('de', {
  id: "l1-mat-geometria-euclidea",
  title: "Euklidische Geometrie: Axiome und Dreiecke",
  intro: "Vor fast zweitausenddreihundert Jahren hatte Euklid in Alexandria in Ägypten eine revolutionäre Idee: von ganz wenigen ohne Beweis akzeptierten Aussagen auszugehen und alles Übrige mit strengen Überlegungen zu <b>folgern</b>. So entstand die hypothetisch-deduktive Methode, die Grundlage der gesamten Mathematik. In dieser Lektion siehst du, wie sie funktioniert: die <b>Grundbegriffe</b>, die <b>Axiome und Postulate</b> und das erste große Ergebnis, die <b>Kongruenzsätze für Dreiecke</b>.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "Euklid und die deduktive Methode",
      html: `<p><b>Euklid</b> lebte um 300 v. Chr. in Alexandria in Ägypten und schrieb die <b>Elemente</b> in 13 Büchern: eine Abhandlung, die die griechische Geometrie (und ein wenig Zahlentheorie) systematisch sammelt und ordnet. Über zweitausend Jahre lang war sie das Geometrie-Lehrbuch schlechthin, an Verbreitung nur von der Bibel übertroffen.</p>
<p>Die Methode ist diese:</p>
<ul>
<li><b>Grundbegriffe</b>: Begriffe, die man nicht definiert, weil jede Definition weitere Wörter bräuchte, die ihrerseits zu definieren wären, bis ins Unendliche. In der Geometrie: <b>Punkt, Gerade, Ebene</b> (und „zwischen liegen“). Wir beschreiben sie durch ihre Eigenschaften, nicht durch eine Definition.</li>
<li><b>Definitionen</b>: Die Bedeutung neuer Begriffe wird mit schon bekannten erklärt (Strecke, Winkel, Dreieck, Winkelhalbierende …).</li>
<li><b>Axiome und Postulate</b>: Aussagen, die man ohne Beweis als wahr akzeptiert. Euklid nannte <i>Gemeinsame Begriffe</i> jene, die überall gelten („Dinge, die demselben gleich sind, sind einander gleich“), und <i>Postulate</i> jene, die der Geometrie eigen sind.</li>
<li><b>Sätze (Theoreme)</b>: Aussagen, die man <b>beweist</b>, also mit Logik aus Axiomen, Postulaten und bereits bewiesenen Sätzen herleitet.</li>
</ul>
<p>Ein Satz wird mit einer <b>Voraussetzung</b> (was man als wahr annimmt) und einer <b>Behauptung</b> (was man beweisen will) formuliert. Ist V die Voraussetzung und B die Behauptung, sagt der Satz: „Wenn V, dann B.“</p>`
    },
    {
      type: "text",
      title: "Die fünf Postulate Euklids",
      html: `<ol>
<li>Durch zwei verschiedene Punkte geht eine (und nur eine) Gerade, das heißt, man kann zwischen zwei Punkten eine Strecke ziehen.</li>
<li>Eine Strecke lässt sich beliebig geradlinig verlängern.</li>
<li>Zu gegebenem Mittelpunkt und Radius lässt sich ein Kreis zeichnen.</li>
<li>Alle rechten Winkel sind einander gleich.</li>
<li><b>Das fünfte Postulat</b>: Wenn eine Gerade, die zwei andere schneidet, auf derselben Seite innere Winkel bildet, deren Summe kleiner als zwei Rechte ist, dann treffen sich die beiden Geraden, wenn man sie verlängert, auf dieser Seite. (In moderner Form gleichbedeutend mit: „Durch einen Punkt außerhalb einer Geraden geht <b>genau eine</b> Parallele zu ihr.“)</li>
</ol>
<p>Die ersten vier scheinen selbstverständlich. Das fünfte ist lang und kompliziert: Jahrhundertelang haben Mathematiker versucht, es aus den anderen zu beweisen, ohne Erfolg. Darüber sprechen wir in der Lektion über parallele Geraden.</p>`
    },
    {
      type: "svg",
      title: "Warum das Dreieck etwas Besonderes ist",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<text x="150" y="34" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Dreieck: starr</text>
<polygon points="50,240 250,240 150,80" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<circle cx="50" cy="240" r="8" fill="#166534"/><circle cx="250" cy="240" r="8" fill="#166534"/><circle cx="150" cy="80" r="8" fill="#166534"/>
<text x="150" y="272" font-size="16" text-anchor="middle" fill="#14532d">drei feste Seiten → feste Form (SSS)</text>
<text x="430" y="34" font-size="18" text-anchor="middle" fill="#9a3412" font-weight="bold">Viereck: verformbar</text>
<polygon points="340,240 520,240 520,100 340,100" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/>
<polygon points="340,240 520,240 560,100 380,100" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="340" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="240" r="8" fill="#9a3412"/><circle cx="520" cy="100" r="8" fill="#9a3412"/><circle cx="340" cy="100" r="8" fill="#9a3412"/>
<text x="430" y="272" font-size="16" text-anchor="middle" fill="#7c2d12">vier feste Seiten, veränderliche Form</text>
</svg>`,
      caption: "Deshalb bestehen Strommasten, Brücken und Kräne aus Dreiecken: Dreiecke verformen sich nicht."
    },
    {
      type: "text",
      title: "Das Dreieck und seine Elemente",
      html: `<p>Ein <b>Dreieck</b> ist der Teil der Ebene, der von drei Strecken (den <b>Seiten</b>) begrenzt wird, die drei nicht auf einer Geraden liegende Punkte (die <b>Ecken</b>) verbinden. Es hat drei <b>Innenwinkel</b>.</p>
<ul>
<li><b>Nach den Seiten</b>: <b>unregelmäßig</b> (ungleichseitig; drei verschiedene Seiten), <b>gleichschenklig</b> (zwei gleiche Seiten), <b>gleichseitig</b> (drei gleiche Seiten).</li>
<li><b>Nach den Winkeln</b>: <b>spitzwinklig</b>, <b>rechtwinklig</b> (ein rechter Winkel), <b>stumpfwinklig</b>.</li>
<li><b>Besondere Strecken</b>: Die <b>Seitenhalbierende</b> verbindet eine Ecke mit dem Mittelpunkt der gegenüberliegenden Seite; die <b>Winkelhalbierende</b> teilt den Winkel in zwei gleiche Hälften; die <b>Höhe</b> ist die Strecke, die von der Ecke senkrecht auf die Gerade der gegenüberliegenden Seite führt. Die drei Seitenhalbierenden schneiden sich im <b>Schwerpunkt</b>, die drei Winkelhalbierenden im <b>Inkreismittelpunkt</b>, die drei Höhen im <b>Höhenschnittpunkt</b>.</li>
</ul>
<p>Zwei Figuren sind <b>kongruent</b> (deckungsgleich), wenn man sie durch eine starre Bewegung (Verschiebung, Drehung, Spiegelung) zur Deckung bringen kann: gleiche Form und gleiche Größe. Bei einem Dreieck verlangt die Kongruenz 6 Übereinstimmungen (3 Seiten und 3 Winkel), aber die <b>Kongruenzsätze</b> sagen uns, dass bei geschickter Wahl <b>drei</b> genügen.</p>
<p><b>Dreiecksungleichung</b>: In jedem Dreieck ist jede Seite <b>kleiner als die Summe</b> der beiden anderen (und größer als ihre Differenz). Mit drei Stäbchen von 2, 3 und 7 cm kannst du kein Dreieck bauen: 2 + 3 &lt; 7!</p>`
    },
    {
      type: "remember",
      title: "Die drei Kongruenzsätze",
      html: `<p>Zwei Dreiecke sind kongruent, wenn sie der Reihe nach übereinstimmen in:</p>
<ol>
<li><b>1. Satz (SWS)</b>: zwei Seiten und dem von ihnen <b>eingeschlossenen Winkel</b>.</li>
<li><b>2. Satz (WSW)</b>: einer Seite und den <b>beiden anliegenden Winkeln</b>.</li>
<li><b>3. Satz (SSS)</b>: den <b>drei Seiten</b>.</li>
</ol>
<p>⚠️ <b>Keine Kongruenzsätze sind</b>: drei gleiche Winkel (ähnliche Dreiecke, aber mit verschiedener Größe), zwei Seiten und ein <b>nicht eingeschlossener</b> Winkel (SsW: Es kann mehr als ein mögliches Dreieck geben).</p>`
    },
    {
      type: "widget",
      title: "Welcher Satz?",
      widget: "classify",
      options: { groups: ["1. Satz (SWS)", "2. Satz (WSW)", "3. Satz (SSS)", "Reicht nicht"], items: [
        ["zwei Seiten und der eingeschlossene Winkel", 0],
        ["eine Seite und die beiden anliegenden Winkel", 1],
        ["die drei Seiten", 2],
        ["drei gleiche Winkel", 3],
        ["zwei Seiten und ein nicht eingeschlossener Winkel", 3],
        ["AB = DE, BC = EF und Winkel B = Winkel E", 0],
        ["AB = DE, Winkel A = D und Winkel B = E", 1]
      ] },
      caption: "Der Winkel muss zwischen den beiden Seiten liegen; die Seite muss an den beiden Winkeln anliegen."
    },
    {
      type: "example",
      title: "Ein Beweis: die Basiswinkel im gleichschenkligen Dreieck",
      html: `<p><b>Satz</b>: In einem gleichschenkligen Dreieck sind die Basiswinkel kongruent.</p>
<p><b>Voraussetzung</b>: ABC mit AC = BC. <b>Behauptung</b>: Winkel A = Winkel B.</p>
<p><b>Beweis</b>: Ich zeichne die Winkelhalbierende des Winkels C, die AB in D trifft. Ich betrachte die Dreiecke ACD und BCD:</p>
<ul>
<li>AC = BC nach Voraussetzung;</li>
<li>der Winkel ACD = Winkel BCD, weil CD Winkelhalbierende ist;</li>
<li>CD ist eine gemeinsame Seite.</li>
</ul>
<p>Sie stimmen in zwei Seiten und dem eingeschlossenen Winkel überein: Nach dem <b>1. Satz</b> ist ACD ≅ BCD. Also sind die entsprechenden Winkel bei A und bei B kongruent. <b>q. e. d.</b> (quod erat demonstrandum, „was zu beweisen war“)</p>
<p>Dieser Satz (Elemente, I.5) wurde im Mittelalter <i>pons asinorum</i>, „Eselsbrücke“, genannt, weil er das erste Hindernis war, an dem die weniger guten Schüler scheiterten.</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Axiome und Kongruenzsätze",
      questions: [
        { type: "mc", q: "Welche sind die Grundbegriffe der Geometrie?", options: ["Punkt, Gerade und Ebene", "Dreieck, Quadrat und Kreis", "Winkel, Strecke und Fläche"], answer: 0, explain: "Punkt, Gerade und Ebene werden nicht definiert: Sie werden durch die Axiome beschrieben." },
        { type: "tf", q: "Ein Postulat muss bewiesen werden, bevor man es verwenden kann.", answer: false, explain: "Ein Postulat ist eine ohne Beweis akzeptierte Aussage." },
        { type: "num", q: "Wie viele Postulate hat Euklid?", answer: 5, explain: "Fünf; das fünfte ist das berühmte Parallelenpostulat." }
      ]
    },
    {
      type: "example",
      title: "Praxisbeispiel: Einen Fluss messen, ohne ihn zu überqueren",
      html: `<p>Wie misst man die Breite AT eines Flusses? Du stehst am Ufer in A, gegenüber einem Baum T am anderen Ufer:</p>
<ol>
<li>Gehe am Ufer senkrecht zu AT bis zu einem Punkt B und stecke einen Pfahl ein;</li>
<li>gehe um dieselbe Länge weiter bis C (also AB = BC);</li>
<li>entferne dich von C senkrecht zum Ufer, bis beim Zurückblicken der Baum T und der Pfahl B in einer Linie mit dir liegen: Du bist in D.</li>
</ol>
<p>Die Dreiecke ABT und CBD haben AB = CB, rechte Winkel in A und in C und gleiche Winkel in B, weil sie Scheitelwinkel sind: Nach dem <b>2. Satz</b> sind sie kongruent. Also CD = AT: Die Strecke, die du am Boden gemessen hast, ist die Breite des Flusses. Die Zeichnung steht im Reiter „Der Fluss“ bei den alternativen Erklärungen.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Eselsbrücke und Thales",
      html: `<p>Der Überlieferung nach bewies als Erster Sätze der Geometrie <b>Thales von Milet</b> (7.–6. Jahrhundert v. Chr.). Man erzählt, er habe gerade die Kongruenz von Dreiecken benutzt, um die Entfernung eines Schiffes von der Küste zu berechnen, eine Anwendung, die dem Flussproblem sehr ähnlich ist. Euklid ordnete drei Jahrhunderte später alles in einem System.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Hilbert und die moderne Strenge",
      html: `<p>Die <i>Elemente</i> Euklids haben, so genial sie sind, einige logische Lücken: Euklid benutzt manchmal Dinge, die an der Zeichnung „offensichtlich“ sind, aber nicht in den Postulaten stehen. 1899 veröffentlichte der deutsche Mathematiker <b>David Hilbert</b> die <i>Grundlagen der Geometrie</i> mit einem vollständigen und lückenlosen Axiomensystem. Hilbert sagte, man könne statt Punkten, Geraden und Ebenen auch „Tische, Stühle und Bierseidel“ sagen: Was zählt, sind die Beziehungen zwischen den Objekten, nicht ihr Name.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die euklidische Geometrie zu verstehen",
      intro: "Geometrie versteht man am besten mit den Händen und mit Zeichnungen. Probiere diese Wege.",
      tabs: [
        {
          label: "📏 Lineal und Zirkel",
          html: `<p>Im ersten Satz der <i>Elemente</i> (I.1) konstruiert Euklid ein <b>gleichseitiges Dreieck</b> über einer Strecke AB und verwendet dazu nur die ersten drei Postulate. Mit dem Zirkel (Postulat 3) zeichnest du den Kreis um A mit dem Radius AB, dann den Kreis um B mit dem Radius AB. Sie schneiden sich in C, und AC = AB (Radien des ersten), BC = AB (Radien des zweiten): Die drei Seiten sind gleich. Keine Messung, nur Logik!</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<circle cx="225" cy="190" r="90" fill="none" stroke="#6366f1" stroke-width="3"/>
<circle cx="315" cy="190" r="90" fill="none" stroke="#f97316" stroke-width="3"/>
<polygon points="225,190 315,190 270,112" fill="#fde68a" stroke="#1f2937" stroke-width="4"/>
<circle cx="225" cy="190" r="6" fill="#1f2937"/><circle cx="315" cy="190" r="6" fill="#1f2937"/><circle cx="270" cy="112" r="6" fill="#1f2937"/>
<text x="212" y="212" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="322" y="212" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="262" y="100" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="470" y="140" font-size="16" fill="#4338ca">AC = Radius des Kreises um A</text>
<text x="470" y="170" font-size="16" fill="#c2410c">BC = Radius des Kreises um B</text>
<text x="470" y="200" font-size="16" fill="#1f2937">AB = Radius beider Kreise</text>
<text x="470" y="232" font-size="16" fill="#166534" font-weight="bold">→ ABC gleichseitig</text>
</svg>`
        },
        {
          label: "🌊 Der Fluss (mit Zeichnung)",
          html: `<p>Hier das Schema des Flussproblems: Die Dreiecke ABT und CBD sind „das Umgekehrte voneinander“, um B eine halbe Drehung gedreht. Lassen sich zwei Dreiecke durch eine Drehung zur Deckung bringen, sind sie kongruent.</p>`,
          svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="0" y="70" width="600" height="110" fill="#bae6fd"/>
<text x="500" y="125" font-size="18" fill="#0369a1" font-weight="bold">Fluss</text>
<circle cx="150" cy="70" r="9" fill="#16a34a"/><text x="130" y="60" font-size="18" fill="#166534" font-weight="bold">T (Baum)</text>
<line x1="150" y1="70" x2="150" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="180" x2="450" y2="180" stroke="#1f2937" stroke-width="3"/>
<line x1="450" y1="180" x2="450" y2="280" stroke="#1f2937" stroke-width="3"/>
<line x1="150" y1="70" x2="450" y2="280" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="150" cy="180" r="6" fill="#1f2937"/><circle cx="300" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="180" r="6" fill="#1f2937"/><circle cx="450" cy="280" r="6" fill="#1f2937"/>
<text x="128" y="206" font-size="18" fill="#1f2937" font-weight="bold">A</text>
<text x="293" y="206" font-size="18" fill="#1f2937" font-weight="bold">B</text>
<text x="458" y="206" font-size="18" fill="#1f2937" font-weight="bold">C</text>
<text x="458" y="285" font-size="18" fill="#1f2937" font-weight="bold">D</text>
<text x="225" y="228" font-size="16" text-anchor="middle" fill="#1f2937">AB = BC</text>
<text x="105" y="130" font-size="16" fill="#1f2937">AT</text>
<text x="470" y="240" font-size="16" fill="#1f2937">CD = AT</text>
</svg>`
        },
        {
          label: "🥢 Mit Stäbchen",
          html: `<p>Nimm Stäbchen oder Strohhalme der Länge 3, 4 und 5 cm und verbinde sie an den Enden mit etwas Knetmasse: Du erhältst <b>nur ein mögliches Dreieck</b> (abgesehen vom Spiegeln). Jedes andere Dreieck, das mit denselben drei Längen gebaut wird, deckt sich mit deinem: Das ist der 3. Satz. Verbinde nun vier Stäbchen: Das Viereck wird platt gedrückt und ändert seine Form. Deshalb genügt eine Diagonale (ein weiteres Stäbchen), um es zu versteifen, und deshalb sieht man bei Strommasten und Brücken überall Dreiecke.</p>
<p>Versuche auch, mit 2, 3 und 7 cm zu bauen: Es gelingt nicht, weil 2 + 3 &lt; 7 (Dreiecksungleichung).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der euklidischen Geometrie",
      nodes: [
        { id: "prim", label: "Grundbegriffe", x: 50, y: 6, color: "#6366f1", html: "Punkt, Gerade, Ebene: Man definiert sie nicht.", why: "Eine Definition verwendet andere Wörter, die ihrerseits definiert werden müssten: Um nicht ins Unendliche weiterzugehen, startet man mit einigen als bekannt angenommenen Begriffen. Hilbert (1899) ließ sie bewusst „namenlos“." },
        { id: "ass", label: "Axiome und Postulate", x: 20, y: 28, color: "#f59e0b", html: "Ohne Beweis akzeptierte Wahrheiten.", why: "Sie sind nötig, weil jeder Beweis von etwas bereits Zugestandenem ausgeht. Euklid wählte wenige und einfache: die fünf Postulate und die Gemeinsamen Begriffe." },
        { id: "def", label: "Definitionen", x: 80, y: 28, color: "#16a34a", html: "Neue Begriffe werden mit bereits bekannten erklärt.", why: "Sie geben genaue Namen (Dreieck, Winkelhalbierende …) und verwenden nur das, was schon eingeführt wurde." },
        { id: "teo", label: "Sätze und Beweise", x: 50, y: 52, color: "#a855f7", html: "Voraussetzung → Behauptung, mit logischen Schlüssen.", why: "Die hypothetisch-deduktive Methode, schon bei Thales und Pythagoras vorhanden und von Euklid zum System gemacht, garantiert, dass eine Wahrheit so sicher ist wie die Postulate, aus denen sie folgt." },
        { id: "cong", label: "Kongruenz", x: 20, y: 76, color: "#0ea5e9", html: "Gleiche Form und gleiche Größe: deckungsgleiche Figuren.", why: "Euklid führt sie über das „Aufeinanderlegen“ (eine starre Bewegung) ein; Hilbert nimmt sie als Grundrelation mit eigenen Axiomen." },
        { id: "crit", label: "Kongruenzsätze für Dreiecke", x: 50, y: 92, color: "#ef4444", html: "SWS, WSW, SSS.", why: "Sie folgen aus den Postulaten: Bei drei geeigneten Stücken ist das Dreieck eindeutig bestimmt. Sie sind die Grundlage der Triangulation, die Landvermesser und Seefahrer benutzen." },
        { id: "isos", label: "Gleichschenkliges Dreieck", x: 85, y: 76, color: "#22c55e", html: "Basiswinkel kongruent (und umgekehrt).", why: "Es ist der erste „echte“ Satz des ersten Buches (pons asinorum): Man beweist ihn mit dem 1. Satz." },
        { id: "v", label: "Fünftes Postulat", x: 85, y: 52, color: "#14b8a6", html: "Bedingung, unter der sich zwei Geraden treffen; gleichbedeutend mit der Eindeutigkeit der Parallelen.", why: "Verneint man es, gelangt man zu den nichteuklidischen Geometrien (Lobatschewski, Bolyai, Riemann im 19. Jahrhundert): eine andere, ebenso widerspruchsfreie Geometrie." }
      ],
      edges: [
        ["prim", "ass", "beschrieben durch"],
        ["prim", "def", "Grundlage von"],
        ["ass", "teo", "Voraussetzungen von"],
        ["def", "teo", "Sprache von"],
        ["teo", "cong", "untersucht"],
        ["cong", "crit", "wird überprüft mit"],
        ["crit", "isos", "beweisen"],
        ["ass", "v", "enthalten"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Dreiecke",
      questions: [
        { type: "mc", q: "Zwei Dreiecke stimmen in den drei Seiten der Reihe nach überein. Sie sind kongruent nach …", options: ["dem 1. Satz", "dem 2. Satz", "dem 3. Satz"], answer: 2, explain: "Drei kongruente Seiten: Satz SSS, der dritte." },
        { type: "tf", q: "Zwei Dreiecke mit drei der Reihe nach gleichen Winkeln sind immer kongruent.", answer: false, explain: "Sie können dieselbe Form, aber verschiedene Größen haben (sie sind ähnlich, nicht kongruent)." },
        { type: "num", q: "Ein gleichschenkliges Dreieck hat einen Winkel an der Spitze von 40°. Wie groß ist jeder Basiswinkel? (Die Summe der Innenwinkel ist 180°.)", answer: 70, unit: "°", explain: "(180 − 40)/2 = 70° jeweils." }
      ]
    }
  ],
  glossary: [
    { t: "Grundbegriff", d: "Begriff, der nicht definiert wird (Punkt, Gerade, Ebene)." },
    { t: "Axiom / Postulat", d: "Ohne Beweis akzeptierte Aussage." },
    { t: "Satz (Theorem)", d: "Aussage, die aus Axiomen und bereits bekannten Sätzen bewiesen wird." },
    { t: "Voraussetzung und Behauptung", d: "Die Voraussetzung ist das, was man als wahr annimmt; die Behauptung ist das, was man beweisen will." },
    { t: "Kongruenz", d: "Beziehung zwischen Figuren, die sich durch eine starre Bewegung zur Deckung bringen lassen." },
    { t: "Kongruenzsätze", d: "Minimale Bedingungen (SWS, WSW, SSS), die die Kongruenz zweier Dreiecke garantieren." },
    { t: "Gleichschenkliges Dreieck", d: "Dreieck mit mindestens zwei kongruenten Seiten." },
    { t: "Seitenhalbierende, Winkelhalbierende, Höhe", d: "Besondere Strecken eines Dreiecks: zum Mittelpunkt der gegenüberliegenden Seite, die den Winkel halbiert, senkrecht zur gegenüberliegenden Seite." },
    { t: "Dreiecksungleichung", d: "Jede Seite eines Dreiecks ist kleiner als die Summe der beiden anderen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Warum sind Punkt, Gerade und Ebene Grundbegriffe?", options: ["Weil man sie nicht definiert: Jede Definition würde weitere zu definierende Begriffe erfordern", "Weil sie am einfachsten zu zeichnen sind", "Weil sie als Erste bewiesen wurden"], answer: 0, explain: "Sie sind die Ausgangsbegriffe der Theorie, beschrieben durch die Axiome." },
      { type: "tf", q: "Ein Postulat ist eine ohne Beweis akzeptierte Aussage.", answer: true, explain: "Axiome und Postulate sind der Ausgangspunkt der Beweise." },
      { type: "text", q: "Wer schrieb um 300 v. Chr. die Elemente?", answer: ["Euklid", "euklid", "Euklid von Alexandria", "euklid von alexandria", "Euclid", "euclid"], explain: "Euklid, in Alexandria in Ägypten." },
      { type: "mc", q: "Der 1. Kongruenzsatz für Dreiecke verlangt …", options: ["zwei Seiten und den eingeschlossenen Winkel", "zwei Seiten und einen beliebigen Winkel", "drei Winkel"], answer: 0, explain: "SWS: zwei Seiten und der von ihnen eingeschlossene Winkel." },
      { type: "mc", q: "Der 2. Satz verlangt …", options: ["eine Seite und die beiden anliegenden Winkel", "drei Seiten", "zwei Winkel und zwei Seiten"], answer: 0, explain: "WSW: eine Seite und die beiden an ihr anliegenden Winkel." },
      { type: "num", q: "Ein gleichschenkliges Dreieck hat den Umfang 40 cm und die Basis 12 cm. Wie lang ist jeder Schenkel?", answer: 14, unit: "cm", explain: "(40 − 12)/2 = 14 cm." },
      { type: "order", q: "Bringe die Schritte eines Beweises in die richtige Reihenfolge.", items: ["Die Voraussetzung aufschreiben", "Die Behauptung aufschreiben", "Die Zeichnung anfertigen und die zu vergleichenden Dreiecke bestimmen", "Einen Kongruenzsatz anwenden", "Folgern"], explain: "Man beginnt mit Voraussetzung und Behauptung, dann baut man die Kette der Schlüsse auf." },
      { type: "mc", q: "Warum verwendet man bei Strommasten Dreiecke?", options: ["Weil bei drei festen Seiten die Form nicht verformbar ist (3. Satz)", "Weil sie billiger sind als Quadrate", "Weil sie die größeren Winkel haben"], answer: 0, explain: "Das Dreieck ist das einzige starre Vieleck." },
      { type: "tf", q: "In einem gleichschenkligen Dreieck sind die Basiswinkel kongruent.", answer: true, explain: "Man beweist es mit dem 1. Satz, indem man die Winkelhalbierende des Winkels an der Spitze zeichnet." },
      { type: "num", q: "Ein Dreieck hat zwei Seiten von 3 cm und 5 cm; die dritte ist eine ganze Zahl in cm. Was ist der größtmögliche Wert?", answer: 7, unit: "cm", explain: "Die dritte Seite muss kleiner als 3 + 5 = 8 und größer als 5 − 3 = 2 sein: Die größte ganze Zahl ist 7." }
    ]
  }
});
