TOPIC('de', {
  id: "p2-sci-viventi-non-viventi",
  title: "Lebewesen und Nichtlebewesen",
  intro: "Eine Katze 🐱, ein Baum 🌳, ein Stein 🪨 und ein Roboter 🤖: Wer von ihnen <b>lebt</b>? Wir entdecken die „Regeln des Lebens“, um <b>Lebewesen</b> zu erkennen.",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Die Regeln des Lebens",
      html: `<p>Ein <b>Lebewesen</b> tut all diese Dinge:</p>
<ol>
<li>🐣 Es <b>wird geboren</b> von einem anderen Lebewesen.</li>
<li>📈 Es <b>wächst</b> und verändert sich.</li>
<li>🍎 Es <b>ernährt sich</b>: Es braucht Nahrung (Pflanzen stellen ihre Nahrung selbst her!).</li>
<li>🌬️ Es <b>atmet</b>.</li>
<li>👶 Es <b>pflanzt sich fort</b>: Es lässt andere Wesen entstehen, die ihm ähnlich sind.</li>
<li>🍂 Es <b>stirbt</b>.</li>
</ol>
<p>Ein <b>Nichtlebewesen</b> tut das alles nicht: Ein Stein stammt nicht von einem anderen Stein ab, er isst nicht und wächst nicht von allein.</p>`
    },
    {
      type: "svg",
      title: "Der Lebenskreislauf",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<circle cx="300" cy="150" r="105" fill="none" stroke="#86efac" stroke-width="14"/>
<circle cx="300" cy="45" r="34" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
<circle cx="400" cy="105" r="34" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<circle cx="400" cy="200" r="34" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
<circle cx="300" cy="255" r="34" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3"/>
<circle cx="200" cy="200" r="34" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<circle cx="200" cy="105" r="34" fill="#f3f4f6" stroke="#6b7280" stroke-width="3"/>
<text x="300" y="56" font-size="30" text-anchor="middle">🐣</text>
<text x="400" y="116" font-size="30" text-anchor="middle">📈</text>
<text x="400" y="211" font-size="30" text-anchor="middle">🍎</text>
<text x="300" y="266" font-size="30" text-anchor="middle">🌬️</text>
<text x="200" y="211" font-size="30" text-anchor="middle">👶</text>
<text x="200" y="116" font-size="30" text-anchor="middle">🍂</text>
<text x="345" y="30" font-size="18" fill="#854d0e" font-weight="bold">wird geboren</text>
<text x="445" y="100" font-size="18" fill="#166534" font-weight="bold">wächst</text>
<text x="445" y="210" font-size="18" fill="#991b1b" font-weight="bold">ernährt sich</text>
<text x="345" y="285" font-size="18" fill="#3730a3" font-weight="bold">atmet</text>
<text x="10" y="210" font-size="18" fill="#9d174d" font-weight="bold">pflanzt sich fort</text>
<text x="100" y="100" font-size="18" fill="#374151" font-weight="bold">stirbt</text>
<text x="300" y="158" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">Lebenslauf</text>
</svg>`,
      caption: "Alle Lebewesen folgen diesem Kreis: Sie werden geboren, wachsen, ernähren sich, atmen, pflanzen sich fort und sterben."
    },
    {
      type: "example",
      title: "Beispiel: die Bohne im Glas 🌱",
      html: `<p>Leg eine Bohne auf feuchte Watte:</p>
<ul>
<li>nach wenigen Tagen <b>entsteht</b> eine kleine Wurzel und ein Keim;</li>
<li>das Pflänzchen <b>wächst</b> zum Licht hin;</li>
<li>es <b>ernährt sich</b> von Wasser, Licht und Luft;</li>
<li>wenn du es einpflanzt, bildet es Blüten und neue Bohnen: Es <b>pflanzt sich fort</b>;</li>
<li>am Ende vertrocknet es und <b>stirbt</b>.</li>
</ul>
<p>Die Bohne ist ein Lebewesen! Ein Kieselstein auf feuchter Watte dagegen bleibt immer gleich.</p>`
    },
    {
      type: "widget",
      title: "Lebewesen oder Nichtlebewesen?",
      widget: "classify",
      options: {
        groups: ["🌱 Lebewesen", "🪨 Nichtlebewesen"],
        items: [
          ["🐱 Katze", 0],
          ["🪨 Stein", 1],
          ["🌳 Baum", 0],
          ["🤖 Roboter", 1],
          ["🍄 Pilz", 0],
          ["💧 Wasser", 1],
          ["🐛 Raupe", 0],
          ["🧸 Teddybär", 1],
          ["🌻 Sonnenblume", 0],
          ["☀️ Sonne", 1]
        ]
      },
      caption: "Geh die Regeln des Lebens für jeden Gegenstand noch einmal durch."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: die Regeln des Lebens",
      questions: [
        { type: "tf", q: "Ein Baum ist ein Lebewesen.", answer: true, explain: "Er entsteht aus einem Samen, wächst, ernährt sich, atmet, pflanzt sich fort und stirbt." },
        { type: "mc", q: "Welches davon ist KEIN Lebewesen?", options: ["Eine Ameise", "Ein Stein", "Ein Gänseblümchen"], answer: 1, explain: "Der Stein wird nicht geboren, ernährt sich nicht und pflanzt sich nicht fort." },
        { type: "mc", q: "Ernähren sich Pflanzen?", options: ["Nein, nie", "Ja, sie stellen ihre Nahrung mit Licht, Wasser und Luft her", "Nur im Winter"], answer: 1, explain: "Pflanzen stellen ihre Nahrung in den Blättern her." }
      ]
    },
    {
      type: "text",
      title: "Die Fallen: Es sieht lebendig aus … ist es aber nicht!",
      html: `<ul>
<li>🔥 Das <b>Feuer</b> bewegt sich, „frisst“ das Holz, wird größer … aber es besteht nicht aus <b>Zellen</b>, hat keinen Körper, der von innen wächst, und geht aus, wenn das Holz zu Ende ist: Es <b>lebt nicht</b>.</li>
<li>🤖 Der <b>Roboter</b> bewegt sich und spricht, aber er wurde von Menschen gebaut, wächst nicht und bekommt keine Roboter-Kinder: Er <b>lebt nicht</b>.</li>
<li>☁️ Die <b>Wolke</b> bewegt sich und wird größer, aber sie besteht aus Wassertröpfchen: Sie <b>lebt nicht</b>.</li>
<li>🌳 Der <b>Baum</b> wandert nicht von einem Ort zum anderen, aber er <b>lebt</b>!</li>
</ul>
<p>Sich zu bewegen <b>reicht nicht</b>, um zu leben: Man muss <b>alle</b> Regeln erfüllen.</p>`
    },
    {
      type: "text",
      title: "Woraus bestehen Lebewesen?",
      html: `<p>Alle Lebewesen bestehen aus <b>Zellen</b>: winzig kleinen „Bausteinen“, die man nur mit dem <b>Mikroskop</b> 🔬 sehen kann.</p>
<p>Manche Lebewesen bestehen aus <b>nur einer Zelle</b>, wie die Bakterien. Unser Körper dagegen besteht aus <b>Billionen</b> von Zellen!</p>
<p>Die Lebewesen teilen sich in große Gruppen: <b>Pflanzen</b> 🌿, <b>Tiere</b> 🐾, <b>Pilze</b> 🍄 und viele winzige Wesen (die <b>Mikroorganismen</b>).</p>`
    },
    {
      type: "3d",
      title: "Eine Zelle in 3D",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#86efac", label: "Zellmembran (die „Haut“ der Zelle)" },
          { r: 0.95, color: "#fef08a", label: "Zytoplasma (eine Art Gelee)" },
          { r: 0.4, color: "#a78bfa", label: "Zellkern (das „Gehirn“ der Zelle)" }
        ]
      },
      caption: "Dreh die Zelle: Das herausgeschnittene Stück zeigt die äußere Haut, das Gelee und in der Mitte den Zellkern. Jedes Lebewesen besteht aus Zellen wie dieser!"
    },
    {
      type: "example",
      title: "Beispiel: der Welpe und der Spielzeughund 🐶",
      html: `<p>Vergleichen wir einen echten Welpen mit einem Hund, der mit Batterien läuft:</p>
<table>
<tr><th></th><th>🐶 Welpe</th><th>🧸 Batterie-Hund</th></tr>
<tr><td>Wird geboren</td><td>✅ von der Hundemama</td><td>❌ in einer Fabrik</td></tr>
<tr><td>Wächst</td><td>✅</td><td>❌ bleibt immer gleich</td></tr>
<tr><td>Frisst</td><td>✅ Trockenfutter</td><td>❌ braucht Batterien</td></tr>
<tr><td>Atmet</td><td>✅</td><td>❌</td></tr>
<tr><td>Bekommt Welpen</td><td>✅</td><td>❌</td></tr>
</table>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Ein Baum, fast 5000 Jahre alt",
      html: `<p>In Kalifornien lebt eine Kiefer namens <b>Methusalem</b> 🌲: Sie ist etwa <b>4800 Jahre</b> alt! Sie war schon ein Bäumchen, als die Ägypter die Pyramiden bauten.</p>
<p>Manche kleinen Fliegen, die <b>Eintagsfliegen</b>, leben dagegen als erwachsene Tiere nur <b>einen Tag</b> oder noch kürzer.</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das Bärtierchen, der Widerstandsmeister",
      html: `<p>Das <b>Bärtierchen</b> ist ein Tierchen, das kürzer als ein Millimeter ist und 8 Beinchen hat: Man nennt es „Wasserbär“ 🐻💧.</p>
<p>Wenn es austrocknet, rollt es sich zu einem Kügelchen zusammen und kann so jahrelang bleiben. Es übersteht Frost, große Hitze und sogar die Reise ins <b>Weltall</b>! Wenn das Wasser zurückkehrt … erwacht es wieder.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege zu verstehen, wer lebt",
      intro: "Wenn dir die Regeln schwierig vorkommen, probiere diese anderen Wege.",
      tabs: [
        {
          label: "🕵️ Die 6 Detektivfragen",
          html: `<p>Stelle zu jedem Gegenstand 6 Fragen. Wenn die Antwort auf <b>alle</b> „Ja“ lautet, ist es ein Lebewesen!</p>
<ol>
<li>Ist es von einem anderen seiner Art geboren worden?</li>
<li>Wächst es?</li>
<li>Braucht es Nahrung oder Licht zum Leben?</li>
<li>Atmet es?</li>
<li>Kann es „Kinder“ bekommen?</li>
<li>Wird es eines Tages sterben?</li>
</ol>
<p>Probier es mit deiner Katze aus, dann mit deinem Fahrrad!</p>`
        },
        {
          label: "🔬 Unter dem Mikroskop",
          html: `<p>Wenn du ein dünnes Stück Blatt oder Zwiebelschale unter dem Mikroskop anschaust, siehst du viele kleine <b>Kämmerchen</b>, die aneinanderhängen wie die Fliesen eines Fußbodens. Schaust du dir ein Salzkorn an, siehst du einen Kristall, ohne Zellen.</p>
<p>Die Wissenschaftler sagen: <b>Wo es Zellen gibt, gibt es Leben</b>.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<circle cx="160" cy="120" r="95" fill="#dcfce7" stroke="#334155" stroke-width="6"/>
<g fill="#bbf7d0" stroke="#15803d" stroke-width="2">
<rect x="90" y="70" width="45" height="30"/><rect x="135" y="70" width="45" height="30"/><rect x="180" y="70" width="40" height="30"/>
<rect x="80" y="100" width="50" height="35"/><rect x="130" y="100" width="45" height="35"/><rect x="175" y="100" width="55" height="35"/>
<rect x="95" y="135" width="40" height="35"/><rect x="135" y="135" width="50" height="35"/><rect x="185" y="135" width="40" height="35"/>
</g>
<g fill="#7c3aed"><circle cx="110" cy="85" r="5"/><circle cx="155" cy="82" r="5"/><circle cx="200" cy="88" r="5"/><circle cx="105" cy="118" r="5"/><circle cx="150" cy="115" r="5"/><circle cx="205" cy="120" r="5"/><circle cx="115" cy="150" r="5"/><circle cx="160" cy="155" r="5"/><circle cx="205" cy="150" r="5"/></g>
<circle cx="440" cy="120" r="95" fill="#f1f5f9" stroke="#334155" stroke-width="6"/>
<polygon points="400,80 480,80 480,160 400,160" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>
<polygon points="400,80 425,60 505,60 480,80" fill="#f8fafc" stroke="#64748b" stroke-width="3"/>
<polygon points="480,80 505,60 505,140 480,160" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>
<text x="160" y="232" font-size="18" text-anchor="middle" fill="#166534" font-weight="bold">Blatt: Zellen = Lebewesen</text>
<text x="440" y="232" font-size="18" text-anchor="middle" fill="#334155" font-weight="bold">Salz: Kristall = Nichtlebewesen</text>
</svg>`
        },
        {
          label: "🧬 Ein Molekül des Lebens",
          html: `<p>Jedes Lebewesen besteht aus besonderen Stoffen, die <b>Kohlenstoff</b> enthalten. Hier ist ein ganz einfaches Molekül, das Methan: ein Kohlenstoffatom (schwarz), umgeben von 4 Wasserstoffatomen (weiß). Die Moleküle der Lebewesen sind wie dieses, aber sehr lang: manchmal mit Millionen von Atomen! Dreh es mit dem Finger.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.5, color: "#1f2937", label: "C (Kohlenstoff)" },
              { x: 0.63, y: 0.63, z: 0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: -0.63, y: -0.63, z: 0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: -0.63, y: 0.63, z: -0.63, r: 0.3, color: "#f1f5f9", label: "H" },
              { x: 0.63, y: -0.63, z: -0.63, r: 0.3, color: "#f1f5f9", label: "H" }
            ],
            bonds: [[0, 1], [0, 2], [0, 3], [0, 4]]
          }
        },
        {
          label: "🃏 Karten zum Umdrehen",
          html: `<p>Dreh die Karten um und wiederhole die Begriffe.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🐣 Geboren werden", back: "Von einem anderen Lebewesen zur Welt gebracht werden" },
              { front: "📈 Wachsen", back: "Größer werden und sich verändern" },
              { front: "🍎 Sich ernähren", back: "Nahrung aufnehmen, die Energie liefert" },
              { front: "🌬️ Atmen", back: "Gase (Luft) mit der Umgebung austauschen" },
              { front: "👶 Sich fortpflanzen", back: "Andere Wesen entstehen lassen, die einem selbst ähnlich sind" },
              { front: "🍂 Sterben", back: "Aufhören zu leben: das Ende des Lebenskreislaufs" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Lebewesen: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "vita", label: "Lebewesen", x: 50, y: 8, color: "#16a34a", html: "Ein Wesen, das geboren wird, wächst, sich ernährt, atmet, sich fortpflanzt und stirbt.", why: "Es ist nicht leicht zu sagen, was Leben ist! Die Wissenschaftler haben diese Merkmale gefunden, indem sie sehr viele verschiedene Wesen beobachtet haben: Alle Lebewesen haben sie, kein Gegenstand hat sie alle zusammen." },
        { id: "cellule", label: "Zellen", x: 20, y: 30, color: "#a855f7", html: "Die winzigen Bausteine, aus denen alle Lebewesen bestehen.", why: "Im Jahr <b>1665</b> betrachtete der Engländer <b>Robert Hooke</b> ein dünnes Stück Kork unter dem Mikroskop und sah viele kleine „Kämmerchen“: Er nannte sie <i>Zellen</i> (kleine Zellen im Sinne von Räumchen). 1839 verstanden die deutschen Wissenschaftler Schleiden und Schwann, dass alle Pflanzen und alle Tiere aus Zellen bestehen." },
        { id: "nascere", label: "Stammt von einem Lebewesen ab", x: 80, y: 30, color: "#eab308", html: "Jedes Lebewesen stammt von einem anderen Lebewesen ab.", why: "Früher glaubte man, dass Würmchen von allein aus verdorbenem Fleisch entstehen. Im Jahr <b>1668</b> deckte der Italiener <b>Francesco Redi</b> einige Gläser mit Fleisch mit Gaze ab: Die Fliegen konnten keine Eier legen und es entstanden keine Maden. So bewies er, dass Leben nur aus Leben entsteht." },
        { id: "nutrirsi", label: "Ernährt sich und atmet", x: 20, y: 60, color: "#ef4444", html: "Nimmt Energie aus der Nahrung auf und tauscht Gase mit der Luft oder dem Wasser aus.", why: "Zum Wachsen und Bewegen braucht man Energie. Tiere holen sie sich durch Fressen, Pflanzen fangen sie aus dem Sonnenlicht ein. Das Atmen dient dazu, die Nahrung in den Zellen zu „verbrennen“, um die Energie freizusetzen." },
        { id: "crescere", label: "Wächst und pflanzt sich fort", x: 80, y: 60, color: "#ec4899", html: "Wird größer und lässt andere ähnliche Wesen entstehen.", why: "Die Zellen teilen sich in zwei, und dann wieder in zwei: So wächst der Körper. Die Fortpflanzung erlaubt es der Art, weiterzubestehen, auch wenn die einzelnen Lebewesen sterben." },
        { id: "muore", label: "Stirbt", x: 50, y: 78, color: "#6b7280", html: "Jedes Lebewesen stirbt früher oder später.", why: "Mit der Zeit nutzen sich die Zellen ab. Was von toten Pflanzen und Tieren übrig bleibt, wird von Pilzen und Bakterien umgewandelt und kehrt als Nahrung für neue Lebewesen in den Boden zurück: ein großer Kreis." },
        { id: "nonvivente", label: "Nichtlebewesen", x: 50, y: 38, color: "#64748b", html: "Steine, Wasser, Luft, gebaute Gegenstände: Sie werden nicht geboren, wachsen nicht von allein und pflanzen sich nicht fort.", why: "Manche Nichtlebewesen sind natürlich (Stein, Wasser, Sonne), andere vom Menschen gebaut (Roboter, Stuhl). Sie sind für die Lebewesen sehr wichtig: Ohne Wasser, Luft und Licht gäbe es kein Leben!" },
        { id: "gruppi", label: "Pflanzen, Tiere, Pilze …", x: 50, y: 95, color: "#0ea5e9", html: "Die großen Gruppen der Lebewesen.", why: "Im Jahr <b>1735</b> erfand der Schwede <b>Carl von Linné</b> eine Möglichkeit, jedem Lebewesen einen Namen und einen Platz in einem großen „Baum“ aus Gruppen zu geben. Wir benutzen sie noch heute!" }
      ],
      edges: [
        ["vita", "cellule", "besteht aus"],
        ["vita", "nascere", "Regel 1"],
        ["vita", "nutrirsi", "Regel 2"],
        ["vita", "crescere", "Regel 3"],
        ["nutrirsi", "muore", "ohne Nahrung"],
        ["crescere", "muore", "am Ende"],
        ["vita", "nonvivente", "ist anders als"],
        ["muore", "gruppi", "ernährt andere Lebewesen:"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Fallen und Zellen",
      questions: [
        { type: "tf", q: "Feuer ist ein Lebewesen, weil es sich bewegt und wächst.", answer: false, explain: "Feuer besteht nicht aus Zellen: Es ist nur brennendes Holz. Um zu leben, muss man alle Regeln erfüllen." },
        { type: "mc", q: "Woraus bestehen alle Lebewesen?", options: ["Aus Zellen", "Aus Plastik", "Aus Kieselsteinen"], answer: 0, explain: "Alle Lebewesen bestehen aus Zellen." },
        { type: "tf", q: "Ein Baum wandert nicht, aber er lebt.", answer: true, explain: "Man muss sich nicht bewegen, um zu leben: Der Baum erfüllt alle Regeln des Lebens." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Ein <b>Lebewesen</b> wird geboren, wächst, ernährt sich, atmet, pflanzt sich fort und stirbt.</li>
<li><b>Nichtlebewesen</b> tun das alles nicht.</li>
<li>Sich zu bewegen reicht nicht, um zu leben!</li>
<li>Alle Lebewesen bestehen aus <b>Zellen</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Lebewesen", d: "Etwas, das geboren wird, wächst, sich ernährt, atmet, sich fortpflanzt und stirbt." },
    { t: "Nichtlebewesen", d: "Etwas, das die Merkmale des Lebens nicht hat: Steine, Wasser, Gegenstände." },
    { t: "Lebenskreislauf", d: "Die Stationen im Leben eines Lebewesens, von der Geburt bis zum Tod." },
    { t: "Sich fortpflanzen", d: "Neue Wesen derselben Art entstehen lassen." },
    { t: "Zelle", d: "Der winzig kleine „Baustein“, aus dem alle Lebewesen bestehen." },
    { t: "Mikroskop", d: "Gerät, das ganz kleine Dinge vergrößert." },
    { t: "Mikroorganismus", d: "Lebewesen, das so klein ist, dass man es nur unter dem Mikroskop sieht." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches davon ist ein Lebewesen?", options: ["Ein Ball", "Ein Pilz", "Eine Wolke"], answer: 1, explain: "Der Pilz wird geboren, wächst, ernährt sich und pflanzt sich fort." },
      { type: "mc", q: "Welches davon ist ein Nichtlebewesen?", options: ["Ein Fisch", "Eine Rose", "Ein Stuhl"], answer: 2, explain: "Der Stuhl ist ein vom Menschen gebauter Gegenstand." },
      { type: "tf", q: "Pflanzen atmen.", answer: true, explain: "Auch Pflanzen atmen, Tag und Nacht." },
      { type: "tf", q: "Ein Roboter, der läuft, ist ein Lebewesen.", answer: false, explain: "Der Roboter wird nicht geboren, wächst nicht und pflanzt sich nicht fort." },
      { type: "order", q: "Bring den Lebenskreislauf des Huhns in die richtige Reihenfolge.", items: ["Das Ei schlüpft: Das Küken wird geboren", "Das Küken wächst", "Es wird ein Huhn und legt Eier", "Es wird alt und stirbt"], explain: "Geboren werden, wachsen, sich fortpflanzen, sterben." },
      { type: "text", q: "Wie heißen die winzig kleinen Bausteine, aus denen Lebewesen bestehen?", answer: ["Zellen", "die Zellen", "Zelle"], explain: "Die Zellen." },
      { type: "mc", q: "Warum lebt Feuer NICHT?", options: ["Weil es heiß ist", "Weil es nicht aus Zellen besteht und sich nicht fortpflanzt", "Weil es orange ist"], answer: 1, explain: "Feuer hat keine Zellen: Es ist eine Reaktion des brennenden Holzes, kein Wesen, das von Eltern abstammt." },
      { type: "mc", q: "Was tut ein Stein NICHT?", options: ["Er ernährt sich nicht", "Er liegt still", "Er kann groß sein"], answer: 0, explain: "Der Stein ernährt sich nicht: Darum lebt er nicht." },
      { type: "tf", q: "Jedes Lebewesen stammt von einem anderen Lebewesen ab.", answer: true, explain: "Das bewies Francesco Redi im Jahr 1668." },
      { type: "mc", q: "Mit welchem Gerät kann man Zellen sehen?", options: ["Teleskop", "Mikroskop", "Thermometer"], answer: 1, explain: "Das Mikroskop vergrößert ganz kleine Dinge." },
      { type: "mc", q: "Was tut eine Pflanze, um sich zu ernähren?", options: ["Sie frisst jeden Tag Insekten", "Sie stellt Nahrung mit Licht, Wasser und Luft her", "Sie ernährt sich nie"], answer: 1, explain: "Pflanzen stellen ihre Nahrung in den Blättern her." }
    ]
  }
});
