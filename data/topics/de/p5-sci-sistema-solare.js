TOPIC('de', {
  id: "p5-sci-sistema-solare",
  title: "Das Sonnensystem",
  intro: "Das Sonnensystem ist unser „Zuhause“ im Weltraum: ein Stern, die <b>Sonne</b>, und alles, was sich um sie dreht. Wir entdecken Planeten, Monde, Asteroiden und Kometen und erfahren, warum es auf der Erde Tag, Nacht und Jahreszeiten gibt.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Was ist das Sonnensystem?",
      html: `<p>Das <b>Sonnensystem</b> besteht aus:</p>
<ul>
<li>der <b>Sonne</b>, einem Stern in der Mitte;</li>
<li><b>8 Planeten</b>, die um sie kreisen;</li>
<li>den <b>Zwergplaneten</b>, wie Pluto und Ceres;</li>
<li>mehr als 200 <b>Satelliten</b> (Monden), die um die Planeten kreisen;</li>
<li>Millionen von <b>Asteroiden</b>, <b>Kometen</b> und kleinen Bruchstücken aus Gestein und Eis.</li>
</ul>
<p>Alle diese Körper werden von einer unsichtbaren Kraft zusammengehalten: der <b>Schwerkraft</b> der Sonne. Es ist dieselbe Kraft, die einen Apfel zu Boden fallen lässt!</p>
<p>Das Sonnensystem entstand vor etwa <b>4,6 Milliarden Jahren</b> aus einer riesigen Wolke aus Gas und Staub.</p>`
    },
    {
      type: "text",
      title: "Die Sonne: unser Stern",
      html: `<p>Die Sonne ist ein <b>Stern</b>: eine gigantische Kugel aus glühend heißem Gas (vor allem Wasserstoff und Helium). In ihrem Zentrum erreicht die Temperatur etwa <b>15 Millionen Grad</b>!</p>
<p>Die Sonne erzeugt <b>Licht</b> und <b>Wärme</b>: Ohne sie gäbe es auf der Erde kein Leben. Die Pflanzen nutzen ihr Licht zum Wachsen, und wir essen die Pflanzen (oder Tiere, die sie fressen).</p>
<p>Die Sonne ist riesig: Ihr Durchmesser ist etwa <b>109-mal</b> so groß wie der der Erde. Allein sie enthält mehr als 99 % der gesamten Materie des Sonnensystems.</p>
<p><b>Achtung:</b> Man darf nie direkt in die Sonne schauen, nicht einmal mit Sonnenbrille: Die Augen werden geschädigt!</p>`
    },
    {
      type: "svg",
      title: "Die acht Planeten in der Reihenfolge",
      svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="260" fill="#0b1026"/>
<circle cx="20" cy="20" r="1.5" fill="#fff"/><circle cx="300" cy="30" r="1.2" fill="#fff"/><circle cx="520" cy="25" r="1.5" fill="#fff"/><circle cx="420" cy="230" r="1.2" fill="#fff"/><circle cx="180" cy="235" r="1.3" fill="#fff"/>
<circle cx="-40" cy="125" r="110" fill="#fbbf24"/>
<text x="10" y="130" font-size="16" fill="#7c2d12" font-weight="bold">Sonne</text>
<circle cx="95" cy="125" r="5" fill="#9ca3af"/>
<circle cx="125" cy="125" r="10" fill="#f5c76b"/>
<circle cx="163" cy="125" r="11" fill="#3b82f6"/>
<circle cx="163" cy="125" r="4" fill="#22c55e"/>
<circle cx="198" cy="125" r="7" fill="#dc4b2a"/>
<circle cx="268" cy="125" r="40" fill="#d6a46b"/>
<rect x="230" y="113" width="76" height="6" fill="#b4794a"/>
<rect x="232" y="130" width="72" height="6" fill="#c98b57"/>
<ellipse cx="385" cy="125" rx="62" ry="10" fill="none" stroke="#e8d18f" stroke-width="5"/>
<circle cx="385" cy="125" r="33" fill="#e8c77a"/>
<circle cx="485" cy="125" r="20" fill="#7dd3fc"/>
<circle cx="565" cy="125" r="19" fill="#3b5bdb"/>
<g font-size="14" fill="#fff" text-anchor="middle">
<text x="95" y="160">Merkur</text>
<text x="125" y="95">Venus</text>
<text x="163" y="160">Erde</text>
<text x="198" y="95">Mars</text>
<text x="268" y="190">Jupiter</text>
<text x="385" y="185">Saturn</text>
<text x="485" y="165">Uranus</text>
<text x="565" y="165">Neptun</text>
</g>
<text x="320" y="245" font-size="13" fill="#cbd5e1" text-anchor="middle">Die Größen stehen im richtigen Verhältnis zueinander, die Entfernungen nicht!</text>
</svg>`,
      caption: "Eselsbrücke für die Reihenfolge: „<b>M</b>ein <b>V</b>ater <b>e</b>rklärt <b>m</b>ir <b>j</b>eden <b>S</b>onntag <b>u</b>nsere <b>N</b>achbarplaneten“ (Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun)."
    },
    {
      type: "3d",
      title: "Das Sonnensystem in 3D",
      scene: "solar",
      options: { labels: true },
      caption: "Ziehe, um das Modell zu drehen. Beobachte: Die Planeten, die der Sonne näher sind, bewegen sich schneller!"
    },
    {
      type: "text",
      title: "Gesteinsplaneten und Gasplaneten",
      html: `<p>Die 8 Planeten teilen sich in zwei Gruppen:</p>
<ul>
<li><b>Innere Planeten oder Gesteinsplaneten</b>: Merkur, Venus, Erde und Mars. Sie sind klein, nah an der Sonne und haben eine feste Oberfläche aus Gestein und Metallen.</li>
<li><b>Äußere Planeten oder Gasriesen</b>: Jupiter, Saturn, Uranus und Neptun. Sie sind riesig, weit von der Sonne entfernt und bestehen vor allem aus Gas (Wasserstoff, Helium) und Eis. Sie haben keine Oberfläche, auf der man gehen könnte!</li>
</ul>
<p>Zwischen Mars und Jupiter liegt der <b>Asteroidengürtel</b>, ein „Gürtel“ aus Millionen von Gesteinsbrocken, die um die Sonne kreisen.</p>
<table>
<tr><th>Planet</th><th>Typ</th><th>Durchmesser (km)</th><th>Mittlere Entfernung von der Sonne (Millionen km)</th><th>Jahr (Umlauf um die Sonne)</th><th>Monde</th></tr>
<tr><td>Merkur</td><td>Gestein</td><td>4.879</td><td>58</td><td>88 Tage</td><td>0</td></tr>
<tr><td>Venus</td><td>Gestein</td><td>12.104</td><td>108</td><td>225 Tage</td><td>0</td></tr>
<tr><td>Erde</td><td>Gestein</td><td>12.742</td><td>150</td><td>365 Tage</td><td>1</td></tr>
<tr><td>Mars</td><td>Gestein</td><td>6.779</td><td>228</td><td>687 Tage</td><td>2</td></tr>
<tr><td>Jupiter</td><td>Gas</td><td>139.820</td><td>778</td><td>etwa 12 Jahre</td><td>mehr als 90</td></tr>
<tr><td>Saturn</td><td>Gas</td><td>116.460</td><td>1.430</td><td>etwa 29 Jahre</td><td>mehr als 140</td></tr>
<tr><td>Uranus</td><td>Gas (Eisriese)</td><td>50.724</td><td>2.870</td><td>etwa 84 Jahre</td><td>28</td></tr>
<tr><td>Neptun</td><td>Gas (Eisriese)</td><td>49.244</td><td>4.500</td><td>etwa 165 Jahre</td><td>16</td></tr>
</table>
<p><small>Die Zahl der Monde von Jupiter und Saturn wächst oft, weil die Astronomen neue entdecken!</small></p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon?",
      html: `<p>Die <b>Venus</b> ist der heißeste Planet, obwohl Merkur näher an der Sonne ist: Ihre dichte Atmosphäre aus Kohlendioxid hält die Wärme fest wie in einem Treibhaus. An ihrer Oberfläche herrschen etwa <b>460 °C</b>, genug, um Blei zu schmelzen!</p>
<p>Auf der Venus dauert außerdem ein Tag länger als ein Jahr: Der Planet dreht sich extrem langsam um sich selbst.</p>`
    },
    {
      type: "text",
      title: "Die Bewegungen der Erde: Rotation und Umlauf",
      html: `<p>Die Erde führt zwei Hauptbewegungen aus:</p>
<ul>
<li><b>Rotation</b>: Die Erde dreht sich um sich selbst, um eine gedachte Achse, die durch die Pole geht. Eine volle Drehung dauert etwa <b>24 Stunden</b>. Die Rotation verursacht den Wechsel von <b>Tag und Nacht</b>: Die der Sonne zugewandte Seite ist beleuchtet (Tag), die gegenüberliegende liegt im Dunkeln (Nacht).</li>
<li><b>Umlauf (Revolution)</b>: Die Erde kreist um die Sonne auf einer ellipsenförmigen Bahn, der <b>Umlaufbahn</b> (Orbit). Ein voller Umlauf dauert etwa <b>365 Tage und 6 Stunden</b>: Das ist ein <b>Jahr</b>.</li>
</ul>
<p>Die Erdachse ist <b>geneigt</b> (um etwa 23 Grad). Deshalb treffen die Sonnenstrahlen im Laufe des Jahres auf einen Teil der Erde steiler und auf den anderen schräger: So entstehen die <b>Jahreszeiten</b>.</p>`
    },
    {
      type: "svg",
      title: "Tag und Nacht: die Rotation",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#0f172a"/>
<circle cx="40" cy="130" r="70" fill="#fbbf24"/>
<text x="20" y="135" font-size="16" fill="#7c2d12" font-weight="bold">Sonne</text>
<g stroke="#fde68a" stroke-width="3">
<line x1="120" y1="80" x2="330" y2="80"/><line x1="120" y1="130" x2="330" y2="130"/><line x1="120" y1="180" x2="330" y2="180"/>
</g>
<circle cx="400" cy="130" r="80" fill="#1e3a8a"/>
<path d="M400 50 A80 80 0 0 0 400 210 Z" fill="#60a5fa"/>
<path d="M360 90 q20 -10 30 10 q10 20 -10 30 q-20 10 -20 -20z" fill="#22c55e"/>
<path d="M420 140 q25 -5 25 20 q-10 20 -30 5z" fill="#166534"/>
<line x1="380" y1="35" x2="420" y2="225" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/>
<path d="M455 60 a70 20 0 0 1 20 25" fill="none" stroke="#f472b6" stroke-width="3"/>
<polygon points="475,85 468,72 482,74" fill="#f472b6"/>
<text x="340" y="250" font-size="16" fill="#fde68a">TAG</text>
<text x="430" y="250" font-size="16" fill="#93c5fd">NACHT</text>
<text x="490" y="60" font-size="14" fill="#f9a8d4">Rotation</text>
<text x="490" y="78" font-size="14" fill="#f9a8d4">(24 Stunden)</text>
<text x="500" y="140" font-size="14" fill="#fff">Achse</text>
</svg>`,
      caption: "Die der Sonne zugewandte Hälfte der Erde ist beleuchtet: Dort ist Tag. Durch die Drehung wandert jeder Ort vom Licht ins Dunkel."
    },
    {
      type: "example",
      title: "Praxisbeispiel: Tag und Nacht mit einer Taschenlampe",
      html: `<p>Probiere es zu Hause in einem dunklen Zimmer aus:</p>
<ol>
<li>Schalte eine Taschenlampe an und stelle sie auf einen Tisch: Sie ist die <b>Sonne</b>.</li>
<li>Nimm eine Orange und stecke einen Stift von oben nach unten hindurch: Das ist die <b>Erde</b> mit ihrer Achse.</li>
<li>Klebe einen Aufkleber auf die Orange: Das ist deine Stadt.</li>
<li>Drehe den Stift langsam: Der Aufkleber wandert von der beleuchteten Seite (Tag) auf die dunkle (Nacht).</li>
</ol>
<p>Neige nun den Stift ein wenig und lass die Orange um die Taschenlampe kreisen: Du wirst sehen, dass die obere Hälfte manchmal mehr Licht bekommt, manchmal weniger. Das sind die Jahreszeiten!</p>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Planeten",
      questions: [
        { type: "mc", q: "Welcher Planet ist der Sonne am nächsten?", options: ["Venus", "Merkur", "Mars", "Erde"], answer: 1, explain: "Merkur ist der erste Planet, etwa 58 Millionen km von der Sonne entfernt." },
        { type: "mc", q: "Welcher ist der größte Planet des Sonnensystems?", options: ["Saturn", "Erde", "Jupiter", "Neptun"], answer: 2, explain: "Jupiter ist der Riese: Sein Durchmesser ist etwa 11-mal so groß wie der der Erde." },
        { type: "tf", q: "Mars ist ein Gasplanet.", answer: false, explain: "Mars ist ein Gesteinsplanet, der vierte von der Sonne: Er hat eine feste, rötliche Oberfläche." },
        { type: "order", q: "Bringe in die Reihenfolge vom nächsten zum am weitesten entfernten von der Sonne", items: ["Venus", "Erde", "Jupiter", "Uranus"], explain: "Die Reihenfolge ist Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun." }
      ]
    },
    {
      type: "text",
      title: "Der Mond und die anderen Himmelskörper",
      html: `<p>Der <b>Mond</b> ist der einzige natürliche Satellit der Erde. Er ist etwa <b>384.000 km</b> von uns entfernt und umkreist die Erde in etwa <b>27 Tagen</b>. Der Mond hat kein eigenes Licht: Er <b>spiegelt das Licht der Sonne wider</b>. Deshalb sehen wir, wie er seine Gestalt ändert: Das sind die <b>Mondphasen</b> (Neumond, erstes Viertel, Vollmond, letztes Viertel).</p>
<p>Weitere Körper des Sonnensystems:</p>
<ul>
<li><b>Asteroiden</b>: unregelmäßig geformte Gesteinsbrocken, von wenigen Metern bis zu hunderten Kilometern.</li>
<li><b>Kometen</b>: „schmutzige Schneebälle“ aus Eis und Staub. Wenn sie sich der Sonne nähern, verdampft das Eis, und es bildet sich ein langer leuchtender <b>Schweif</b>.</li>
<li><b>Meteore</b>: kleine Bruchstücke, die in die Atmosphäre eindringen und verglühen und so eine Lichtspur erzeugen: Wir nennen sie „Sternschnuppen“. Wenn ein Bruchstück bis zum Boden gelangt, heißt es <b>Meteorit</b>.</li>
<li><b>Zwergplaneten</b>: wie <b>Pluto</b>, der bis 2006 als neunter Planet galt.</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Sternschnuppen im August",
      html: `<p>Um den <b>10. August</b>, die Nacht des heiligen Laurentius, sieht man ganz viele „Sternschnuppen“. Das sind die <b>Perseiden</b>: winzige Körnchen, die der Komet Swift-Tuttle hinterlassen hat. Jedes Jahr durchquert die Erde diese „Staubspur“, und die Körnchen verglühen in der Atmosphäre mit über 200.000 km/h!</p>
<p>Und auf dem Mond? Die Fußabdrücke der Astronauten von Apollo 11 (1969) sind noch da: Auf dem Mond gibt es keinen Wind, der sie verwischen könnte.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: Wie weit ist die Sonne entfernt?",
      html: `<p>Das Licht legt etwa <b>300.000 km pro Sekunde</b> zurück. Um von der Sonne zur Erde zu gelangen (150 Millionen km), braucht es etwa <b>8 Minuten</b>.</p>
<p>Das heißt: Wenn du den Sonnenuntergang betrachtest, siehst du die Sonne so, wie sie 8 Minuten zuvor war!</p>
<p>Und wenn wir mit dem Auto fahren würden? Mit 100 km/h, ohne je anzuhalten, würde es etwa <b>171 Jahre</b> dauern, bis wir bei der Sonne sind. Vom Mond braucht das Licht dagegen etwas mehr als 1 Sekunde.</p>`
    },
    {
      type: "widget",
      title: "Ordne jedem Planeten seine Eigenschaft zu",
      widget: "match",
      options: {
        pairs: [
          ["Merkur", "Der Sonne am nächsten"],
          ["Venus", "Der heißeste"],
          ["Erde", "Der einzige mit flüssigem Wasser an der Oberfläche und bekanntem Leben"],
          ["Mars", "Der rote Planet"],
          ["Jupiter", "Der größte"],
          ["Saturn", "Berühmt für seine Ringe"],
          ["Uranus", "Dreht sich „liegend“ auf der Seite"],
          ["Neptun", "Der am weitesten entfernte, mit extrem starken Winden"]
        ]
      },
      caption: "Klicke auf einen Planeten und dann auf seine Eigenschaft."
    },
    {
      type: "alternatives",
      title: "Andere Wege, das Sonnensystem zu verstehen",
      intro: "Die Zahlen des Weltraums sind so groß, dass man sie sich schwer vorstellen kann. Probiere einen dieser Wege: Wähle den, bei dem du sagst: „Aha, so ist das!“",
      tabs: [
        {
          label: "⚽ Maßstabsmodell: das Fußballfeld",
          html: "<p>Verkleinern wir alles im selben Verhältnis. Wenn die <b>Sonne</b> ein <b>Fußball</b> (22 cm) in der Mitte des Spielfelds wäre:</p><table><tr><th>Himmelskörper</th><th>So groß wie …</th><th>Entfernung vom Ball</th></tr><tr><td>Merkur</td><td>ein Sandkorn (0,8 mm)</td><td>9 Meter</td></tr><tr><td>Erde</td><td>ein Pfefferkorn (2 mm)</td><td>24 Meter</td></tr><tr><td>Mond</td><td>ein Krümel (0,5 mm)</td><td>6 cm von der Erde</td></tr><tr><td>Mars</td><td>eine Bleistiftspitze (1 mm)</td><td>36 Meter</td></tr><tr><td>Jupiter</td><td>eine Haselnuss (2,2 cm)</td><td>123 Meter: außerhalb des Spielfelds!</td></tr><tr><td>Saturn</td><td>eine Erdnuss (1,8 cm)</td><td>227 Meter</td></tr><tr><td>Neptun</td><td>ein Maiskorn (8 mm)</td><td>mehr als 700 Meter</td></tr></table><p>Und der nächste Stern, Proxima Centauri? In diesem Modell läge er etwa <b>6000 km</b> entfernt: ungefähr die Entfernung zwischen Rom und New York! Der Weltraum ist vor allem … <b>leer</b>.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#4ade80"/><rect x="10" y="10" width="580" height="200" fill="none" stroke="#fff" stroke-width="3"/><line x1="300" y1="10" x2="300" y2="210" stroke="#fff" stroke-width="3"/><circle cx="300" cy="110" r="40" fill="none" stroke="#fff" stroke-width="3"/><circle cx="60" cy="110" r="22" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><text x="60" y="160" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Sonne = Ball</text><circle cx="230" cy="110" r="3" fill="#1d4ed8"/><text x="230" y="95" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">Erde</text><line x1="82" y1="125" x2="228" y2="125" stroke="#14532d" stroke-width="2" stroke-dasharray="6 4"/><text x="155" y="145" font-size="15" text-anchor="middle" fill="#14532d">24 Meter</text><text x="560" y="60" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Jupiter: 123 m →</text><text x="560" y="190" font-size="16" text-anchor="end" fill="#14532d" font-weight="bold">Neptun: über 700 m →</text></svg>`
        },
        {
          label: "🔦 Taschenlampe und Orange: Tag und Nacht",
          html: "<p>Schalte im Dunkeln eine Taschenlampe (die Sonne) an und richte sie auf eine Orange (die Erde), die auf einem Stift (der Achse) steckt. Drehe den Stift langsam: Die beleuchtete Seite ist der <b>Tag</b>, die im Schatten die <b>Nacht</b>. Jeder Punkt der Orange wandert vom Tag in die Nacht: Das ist die <b>Rotation</b>, die etwa 24 Stunden dauert.</p><p>Auf dem 3D-Globus unten findest du vier weit entfernte Städte: Wenn es in Italien Mittag ist, ist es in Japan Abend und in Brasilien früher Morgen. Wenn du den Globus drehst, verstehst du, warum.</p>",
          scene: "globe",
          options: { points: [ { lat: 41.9, lon: 12.5, label: "Rom", color: "#ef4444" }, { lat: 35.7, lon: 139.7, label: "Tokio", color: "#f59e0b" }, { lat: -23.5, lon: -46.6, label: "São Paulo", color: "#22c55e" }, { lat: 40.7, lon: -74.0, label: "New York", color: "#8b5cf6" } ] }
        },
        {
          label: "💃 Mit dem Körper: der Tanz der Planeten",
          html: "<p>Auf dem Hof: Ein Mitschüler ist die <b>Sonne</b> und steht still in der Mitte. Du bist die <b>Erde</b>: Drehe dich um dich selbst (<b>Rotation</b>) und gehe dabei im Kreis um die Sonne (<b>Umlauf</b>). Ein anderer Mitschüler, der <b>Mond</b>, kreist um dich.</p><ul><li>Wer Merkur spielt, geht auf einem kleinen, schnellen Kreis.</li><li>Wer Neptun spielt, geht sehr weit außen und sehr langsam: Für eine ganze Runde bräuchte er 165 unserer Jahre!</li></ul><p>So spürt man mit dem Körper, dass die Planeten nahe der Sonne schneller kreisen.</p>"
        },
        {
          label: "🪐 Schau selbst in 3D",
          html: "<p>Drehe das Sonnensystem, verlangsame (🐢) oder beschleunige (🐇) die Zeit. Beobachte: Merkur macht viele Runden, während Jupiter nur ein winziges Stück schafft. Probiere, es von oben und dann von der Seite zu betrachten: Die Bahnen liegen fast in derselben Ebene, wie Rennbahnen auf einem großen Tisch.</p>",
          scene: "solar",
          options: { labels: true }
        }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Die Sonne ist ein <b>Stern</b>; die Planeten haben kein eigenes Licht.</li>
<li>Die 8 Planeten: Merkur, Venus, Erde, Mars (Gestein) – Jupiter, Saturn, Uranus, Neptun (Gas).</li>
<li><b>Rotation</b> (24 Stunden) → Tag und Nacht. <b>Umlauf</b> (365 Tage) → Jahr; mit geneigter Achse → Jahreszeiten.</li>
<li>Der Mond ist der Satellit der Erde und spiegelt das Licht der Sonne wider.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Bewegungen der Erde",
      questions: [
        { type: "mc", q: "Was verursacht den Wechsel von Tag und Nacht?", options: ["Der Umlauf", "Die Rotation", "Der Mond", "Die Wolken"], answer: 1, explain: "Die Rotation der Erde um sich selbst bringt jeden Ort in etwa 24 Stunden erst ins Licht und dann ins Dunkel." },
        { type: "num", q: "Wie viele Tage dauert etwa ein Umlauf der Erde um die Sonne?", answer: 365, tol: 1, unit: "Tage", explain: "Der Umlauf dauert etwa 365 Tage und 6 Stunden: Alle 4 Jahre werden die 6 Stunden zu einem zusätzlichen Tag (Schaltjahr)." },
        { type: "tf", q: "Die Jahreszeiten hängen von der Neigung der Erdachse ab.", answer: true, explain: "Wegen der geneigten Achse treffen die Sonnenstrahlen im Laufe des Jahres mehr oder weniger direkt auf." }
      ]
    },
    {
      type: "3d",
      title: "Im Inneren der Sonne in 3D",
      scene: "layers",
      options: { layers: [ { r: 1, color: "#fde047", label: "Photosphäre (Oberfläche, etwa 5500 °C)" }, { r: 0.7, color: "#fb923c", label: "Konvektionszone" }, { r: 0.45, color: "#f97316", label: "Strahlungszone" }, { r: 0.25, color: "#dc2626", label: "Kern (etwa 15 Millionen °C)" } ] },
      caption: "Im Kern verwandelt sich Wasserstoff in Helium (Kernfusion) und setzt Energie frei. Diese Energie braucht Tausende von Jahren bis zur Oberfläche und dann nur 8 Minuten, um als Licht die Erde zu erreichen."
    },
    {
      type: "conceptMap",
      title: "Wie wir verstanden haben, dass die Erde um die Sonne kreist",
      nodes: [
        { id: "cielo", label: "Den Himmel beobachten", x: 50, y: 6, color: "#64748b", html: "Seit Tausenden von Jahren beobachten die Menschen Sonne, Mond, Sterne und die „Wanderer“ des Himmels: die Planeten.", why: "Babylonier und Ägypter notierten die Bewegungen der Gestirne, um Kalender zu machen und zu wissen, wann man säen muss oder wann die Nilflut kommt. Wiederholte Beobachtungen sind die Grundlage jeder Entdeckung." },
        { id: "geo", label: "Geozentrismus", x: 20, y: 24, color: "#ef4444", html: "Die Vorstellung, dass die Erde ruhig im Zentrum des Universums steht und sich alles um sie dreht. Aristoteles (4. Jh. v. Chr.) und später Ptolemäus (2. Jh. n. Chr.) machten sie berühmt.", why: "Es scheint selbstverständlich: Jeden Tag sehen wir die Sonne auf- und untergehen und spüren nicht, dass die Erde sich bewegt. Ptolemäus baute ein Modell mit Kreisen auf Kreisen (Epizykeln), das die Positionen der Planeten recht gut vorhersagte. Deshalb glaubte man es etwa 1400 Jahre lang." },
        { id: "aristarco", label: "Aristarch", x: 80, y: 24, color: "#a855f7", html: "Aristarch von Samos (3. Jh. v. Chr.) schlug schon vor, dass die Erde um die Sonne kreist.", why: "Indem er mit Geometrie die Entfernungen von Mond und Sonne maß, erkannte er, dass die Sonne viel größer ist als die Erde, und fand es seltsam, dass das Größere um das Kleinere kreisen sollte. Aber er hatte nicht genug Beweise, und seine Idee geriet in Vergessenheit." },
        { id: "copernico", label: "Kopernikus (1543)", x: 50, y: 42, color: "#f59e0b", html: "Nikolaus Kopernikus veröffentlichte ein heliozentrisches Modell: die Sonne im Zentrum, die Erde ein Planet wie die anderen.", why: "Das Modell des Ptolemäus war äußerst kompliziert geworden. Kopernikus bemerkte: Setzt man die Sonne in die Mitte, lassen sich viele seltsame Bewegungen der Planeten (etwa Mars, der scheinbar rückwärts läuft) einfacher erklären: Es ist die Erde, die ihn überholt." },
        { id: "galileo", label: "Galilei (1610)", x: 20, y: 62, color: "#3b82f6", html: "Galileo Galilei richtete das Fernrohr zum Himmel: Er sah die Monde des Jupiter, die Phasen der Venus, die Berge des Mondes.", why: "Die Jupitermonde zeigten, dass nicht alles um die Erde kreist. Die Phasen der Venus (wie die des Mondes) lassen sich nur erklären, wenn die Venus um die Sonne kreist. Das waren beobachtete Beweise, nicht nur Ideen." },
        { id: "keplero", label: "Kepler (1609)", x: 80, y: 62, color: "#14b8a6", html: "Johannes Kepler entdeckte, dass die Planetenbahnen keine Kreise, sondern Ellipsen sind und dass die Planeten, die der Sonne näher sind, schneller sind.", why: "Er nutzte die äußerst genauen Messungen seines Lehrers Tycho Brahe. Mit Kreisen stimmten die Rechnungen für den Mars um 8 Bogenminuten nicht: Statt den Fehler zu ignorieren, änderte Kepler die Form der Bahn, und alles passte." },
        { id: "newton", label: "Newton (1687)", x: 50, y: 80, color: "#22c55e", html: "Isaac Newton erklärte, warum die Planeten kreisen: die Schwerkraft.", why: "Dieselbe Kraft, die einen Apfel fallen lässt, hält den Mond um die Erde und die Planeten um die Sonne. Mit seinem Gesetz lassen sich die Gesetze Keplers herleiten: Zum ersten Mal folgen Himmel und Erde denselben Regeln." },
        { id: "oggi", label: "Das Sonnensystem heute", x: 50, y: 96, color: "#0ea5e9", html: "Heute wissen wir, dass es 8 Planeten gibt, Zwergplaneten wie Pluto, Asteroiden und Kometen; Sonden wie Voyager haben die Riesenplaneten besucht.", why: "Mit Newtons Schwerkraft wurde 1846 durch Rechnung vorhergesagt, wo Neptun steht, noch bevor man ihn sah. 2006 beschlossen die Astronomen eine genaue Definition von „Planet“: Pluto wurde zum „Zwergplaneten“." }
      ],
      edges: [ ["cielo", "geo", "erste Idee"], ["cielo", "aristarco", "alternative Idee"], ["geo", "copernico", "angezweifelt von"], ["aristarco", "copernico", "aufgegriffen von"], ["copernico", "galileo", "Beweise mit dem Fernrohr"], ["copernico", "keplero", "genauere Berechnungen"], ["galileo", "newton", "Bewegungsgesetze"], ["keplero", "newton", "elliptische Bahnen"], ["newton", "oggi", "ermöglicht Vorhersagen"] ]
    }
  ],
  glossary: [
    { t: "Stern", d: "Himmelskörper, der eigenes Licht und eigene Wärme erzeugt, wie die Sonne." },
    { t: "Planet", d: "Himmelskörper, der um einen Stern kreist und kein eigenes Licht hat." },
    { t: "Satellit", d: "Himmelskörper, der um einen Planeten kreist, wie der Mond." },
    { t: "Umlaufbahn", d: "Der Weg, dem ein Himmelskörper folgt, wenn er um einen anderen kreist." },
    { t: "Rotation", d: "Bewegung der Erde um sich selbst: Sie dauert etwa 24 Stunden." },
    { t: "Umlauf (Revolution)", d: "Bewegung der Erde um die Sonne: Sie dauert etwa 365 Tage." },
    { t: "Schwerkraft", d: "Kraft, die Körper gegenseitig anzieht." },
    { t: "Komet", d: "Körper aus Eis und Staub, der in der Nähe der Sonne einen leuchtenden Schweif bildet." },
    { t: "Asteroid", d: "Unregelmäßig geformter Gesteinsbrocken, der um die Sonne kreist." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Die Sonne ist …", options: ["ein Planet", "ein Stern", "ein Satellit", "ein Komet"], answer: 1, explain: "Die Sonne ist ein Stern: Sie erzeugt eigenes Licht und eigene Wärme." },
      { type: "num", q: "Wie viele Planeten hat das Sonnensystem?", answer: 8, tol: 0, explain: "Es sind 8: von Merkur bis Neptun. Pluto ist ein Zwergplanet." },
      { type: "mc", q: "Welcher dieser Planeten ist ein Gesteinsplanet?", options: ["Jupiter", "Saturn", "Mars", "Neptun"], answer: 2, explain: "Die Gesteinsplaneten sind Merkur, Venus, Erde und Mars." },
      { type: "text", q: "Wie heißt der Planet, der für seine großen Ringe berühmt ist?", answer: ["Saturn", "der Saturn", "saturno"], explain: "Saturn hat Ringe aus Milliarden von Eis- und Gesteinsstücken." },
      { type: "tf", q: "Der Mond erzeugt eigenes Licht.", answer: false, explain: "Der Mond spiegelt das Licht der Sonne wider." },
      { type: "mc", q: "Wo liegt der Asteroidengürtel?", options: ["Zwischen Erde und Mars", "Zwischen Mars und Jupiter", "Hinter Neptun", "Zwischen Venus und Erde"], answer: 1, explain: "Der Hauptgürtel der Asteroiden liegt zwischen Mars und Jupiter." },
      { type: "mc", q: "Wie lange dauert etwa die Rotation der Erde?", options: ["1 Stunde", "24 Stunden", "7 Tage", "365 Tage"], answer: 1, explain: "Die Erde dreht sich in etwa 24 Stunden um sich selbst." },
      { type: "order", q: "Bringe in die Reihenfolge vom nächsten zum am weitesten entfernten von der Sonne", items: ["Merkur", "Erde", "Mars", "Saturn", "Neptun"], explain: "Reihenfolge: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun." },
      { type: "tf", q: "Die Venus ist heißer als Merkur, obwohl sie weiter von der Sonne entfernt ist.", answer: true, explain: "Die dichte Atmosphäre der Venus hält die Wärme fest (Treibhauseffekt)." },
      { type: "mc", q: "„Sternschnuppen“ sind …", options: ["Sterne, die fallen", "Bruchstücke, die in der Atmosphäre verglühen", "künstliche Satelliten", "Zwergplaneten"], answer: 1, explain: "Es sind Meteore: kleine Bruchstücke, die beim Eintritt in die Atmosphäre verglühen." },
      { type: "num", q: "Wie viele Minuten braucht das Licht der Sonne etwa bis zur Erde?", answer: 8, tol: 1, unit: "Minuten", explain: "Etwa 8 Minuten (150 Millionen km bei 300.000 km/s)." },
      { type: "text", q: "Wie heißt die Bewegung der Erde um die Sonne?", answer: ["Umlauf", "der Umlauf", "Revolution", "die Revolution", "Erdumlauf", "der Erdumlauf", "Umlaufbewegung", "rivoluzione"], explain: "Es ist der Umlauf (die Revolution): Er dauert etwa ein Jahr." }
    ]
  }
});
