TOPIC('de', {
  id: "p2-sci-piante-parti",
  title: "Die Teile der Pflanze",
  intro: "Eine Pflanze 🌻 ist wie eine kleine Fabrik: Jeder Teil hat seine Aufgabe. Wir lernen die <b>Wurzel</b>, den <b>Stängel</b>, die <b>Blätter</b>, die <b>Blüte</b> und die <b>Frucht</b> mit ihren <b>Samen</b> kennen.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Die fünf Teile",
      html: `<ul>
<li>🟫 <b>Wurzel</b>: Sie liegt unter der Erde. Sie <b>hält</b> die Pflanze fest und <b>trinkt</b> Wasser und Mineralsalze aus dem Boden.</li>
<li>🟩 <b>Stängel</b>: Er stützt die Pflanze und bringt das Wasser wie ein <b>Rohr</b> nach oben. Bei Bäumen heißt der Stängel <b>Stamm</b>.</li>
<li>🍃 <b>Blätter</b>: Sie sind die „Küche“ der Pflanze: Mit dem Licht der Sonne <b>stellen sie Nahrung her</b>.</li>
<li>🌸 <b>Blüte</b>: Sie sorgt dafür, dass <b>Samen</b> entstehen.</li>
<li>🍎 <b>Frucht</b>: Sie schützt die <b>Samen</b> und hilft ihnen, weit zu reisen.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Benenne die Teile",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="230" fill="#e0f2fe"/>
<rect y="230" width="600" height="110" fill="#a16207"/>
<circle cx="70" cy="60" r="35" fill="#fde047"/>
<path d="M300 230 L300 70" stroke="#16a34a" stroke-width="12"/>
<path d="M300 170 Q230 130 210 160 Q250 190 300 170 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<path d="M300 130 Q370 90 395 120 Q350 150 300 130 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<g fill="#f472b6" stroke="#be185d" stroke-width="2">
<circle cx="300" cy="40" r="18"/><circle cx="328" cy="60" r="18"/><circle cx="318" cy="92" r="18"/><circle cx="282" cy="92" r="18"/><circle cx="272" cy="60" r="18"/>
</g>
<circle cx="300" cy="66" r="15" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<path d="M300 230 L300 290 M300 250 L260 300 M300 250 L340 305 M300 270 L280 330 M300 270 L325 330" stroke="#fef3c7" stroke-width="6" fill="none"/>
<circle cx="470" cy="160" r="30" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
<path d="M470 130 L478 112" stroke="#15803d" stroke-width="4"/>
<ellipse cx="465" cy="165" rx="5" ry="8" fill="#451a03"/>
<ellipse cx="478" cy="160" rx="5" ry="8" fill="#451a03"/>
<text x="470" y="215" font-size="15" text-anchor="middle" fill="#334155">die Frucht, aufgeschnitten</text>
</svg>`,
        spots: [
          { x: 300, y: 300, label: "Wurzel" },
          { x: 300, y: 205, label: "Stängel" },
          { x: 360, y: 118, label: "Blatt" },
          { x: 300, y: 25, label: "Blüte" },
          { x: 445, y: 145, label: "Frucht" },
          { x: 478, y: 178, label: "Samen" }
        ]
      },
      caption: "Klicke auf jede Nummer und wähle den Namen des Teils."
    },
    {
      type: "text",
      title: "Wurzel und Stängel: trinken und transportieren",
      html: `<p>Die <b>Wurzel</b> breitet sich unter der Erde mit vielen ganz feinen <b>Härchen</b> aus, die das Wasser aufsaugen wie ein Schwamm. 💧</p>
<p>Das Wasser mit den Mineralsalzen heißt <b>Rohsaft</b>: Es steigt im <b>Stängel</b> durch winzig kleine Röhrchen bis zu den Blättern.</p>
<p>Der Stängel kann sein:</p>
<ul>
<li><b>krautig</b>: grün und weich (Gänseblümchen, Getreide);</li>
<li><b>holzig</b>: hart und braun, wie der <b>Stamm</b> der Bäume, bedeckt von der <b>Rinde</b>.</li>
</ul>`
    },
    {
      type: "example",
      title: "Beispiel: der gefärbte Sellerie 🎨",
      html: `<p>Probiere dieses Experiment:</p>
<ol>
<li>Stelle eine Selleriestange (oder eine weiße Nelke) in ein Glas Wasser mit ein paar Tropfen blauer oder roter <b>Lebensmittelfarbe</b>.</li>
<li>Warte einen Tag.</li>
<li>Die Blätter werden bunt! Wenn du die Stange durchschneidest, siehst du farbige Pünktchen: Das sind die <b>Röhrchen</b>, in denen das Wasser aufsteigt.</li>
</ol>`
    },
    {
      type: "text",
      title: "Die Blätter: die Küche der Pflanze",
      html: `<p>Die Blätter sind <b>grün</b>, weil sie das <b>Chlorophyll</b> enthalten.</p>
<p>Mit dem Chlorophyll nutzt das Blatt:</p>
<ul>
<li>☀️ das <b>Sonnenlicht</b>,</li>
<li>💧 das <b>Wasser</b>, das von der Wurzel kommt,</li>
<li>💨 ein Gas aus der Luft, das <b>Kohlenstoffdioxid</b>,</li>
</ul>
<p>um <b>Zucker</b> herzustellen, die Nahrung der Pflanze. Und dabei gibt es den <b>Sauerstoff</b> in die Luft ab, den wir atmen! 🫁</p>
<p>Diese Arbeit heißt <b>Fotosynthese</b> (das bedeutet „mit Licht zusammensetzen“).</p>`
    },
    {
      type: "svg",
      title: "Die Fotosynthese",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<circle cx="80" cy="70" r="42" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
<text x="80" y="80" font-size="28" text-anchor="middle">☀️</text>
<path d="M300 150 Q200 60 140 150 Q200 240 300 150 Z" fill="#4ade80" stroke="#15803d" stroke-width="4"/>
<path d="M140 150 L300 150" stroke="#15803d" stroke-width="3"/>
<path d="M125 95 L190 130" stroke="#eab308" stroke-width="5"/><polygon points="185,120 200,135 180,138" fill="#eab308"/>
<text x="20" y="140" font-size="17" fill="#854d0e" font-weight="bold">Licht</text>
<path d="M220 280 L220 210" stroke="#2563eb" stroke-width="5"/><polygon points="210,215 220,195 230,215" fill="#2563eb"/>
<text x="150" y="292" font-size="17" fill="#1d4ed8" font-weight="bold">Wasser aus der Wurzel</text>
<path d="M30 220 L130 175" stroke="#64748b" stroke-width="5"/><polygon points="122,168 142,172 128,186" fill="#64748b"/>
<text x="10" y="245" font-size="17" fill="#334155" font-weight="bold">Kohlenstoffdioxid</text>
<path d="M310 130 L420 90" stroke="#0ea5e9" stroke-width="5"/><polygon points="414,80 435,86 420,100" fill="#0ea5e9"/>
<text x="440" y="90" font-size="18" fill="#0369a1" font-weight="bold">Sauerstoff 🫁</text>
<path d="M310 170 L420 210" stroke="#d97706" stroke-width="5"/><polygon points="414,200 435,214 416,220" fill="#d97706"/>
<text x="440" y="222" font-size="18" fill="#b45309" font-weight="bold">Zucker 🍬</text>
<text x="220" y="156" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">Chlorophyll</text>
</svg>`,
      caption: "Ins Blatt gelangen Licht, Wasser und Kohlenstoffdioxid; heraus kommen Zucker (die Nahrung der Pflanze) und Sauerstoff."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Wurzel, Stängel, Blätter",
      questions: [
        { type: "mc", q: "Welcher Teil saugt das Wasser aus dem Boden auf?", options: ["Das Blatt", "Die Wurzel", "Die Blüte"], answer: 1, explain: "Die Wurzel trinkt das Wasser und die Mineralsalze." },
        { type: "mc", q: "Wie heißt der Stängel der Bäume?", options: ["Stamm", "Blütenblatt", "Pollen"], answer: 0, explain: "Der holzige Stängel der Bäume ist der Stamm." },
        { type: "tf", q: "Die Blätter erzeugen den Sauerstoff, den wir atmen.", answer: true, explain: "Bei der Fotosynthese geben die Blätter Sauerstoff ab." }
      ]
    },
    {
      type: "text",
      title: "Blüte, Frucht und Samen",
      html: `<ol>
<li>🌸 Die <b>Blüte</b> hat bunte, duftende <b>Blütenblätter</b>, die Bienen und Schmetterlinge anlocken. Innen befindet sich der <b>Pollen</b>, ein gelbes Pulver.</li>
<li>🐝 Wenn Bienen von Blüte zu Blüte fliegen, tragen sie den Pollen von einer Blüte zur anderen: Das ist die <b>Bestäubung</b>.</li>
<li>🍏 Die bestäubte Blüte verliert ihre Blütenblätter und ein Teil von ihr schwillt an und wird zur <b>Frucht</b>.</li>
<li>🌰 In der Frucht sind die <b>Samen</b>.</li>
<li>🌱 Wenn ein Samen auf guten Boden fällt, <b>keimt</b> er mit Wasser und Wärme und eine neue Pflanze entsteht!</li>
</ol>`
    },
    {
      type: "3d",
      title: "Im Inneren eines Pfirsichs 🍑",
      scene: "layers",
      options: {
        layers: [
          { r: 1, color: "#fb923c", label: "Schale (schützt)" },
          { r: 0.96, color: "#fdba74", label: "Fruchtfleisch (süß, um Tiere anzulocken)" },
          { r: 0.42, color: "#92400e", label: "Kern (hart, schützt den Samen)" },
          { r: 0.2, color: "#fef3c7", label: "Samen (die zukünftige Pflanze)" }
        ]
      },
      caption: "Dreh den Pfirsich: Das herausgeschnittene Stück zeigt die Schale, das Fruchtfleisch, den Kern und in der Mitte den Samen, aus dem ein neuer Pfirsichbaum entstehen kann."
    },
    {
      type: "widget",
      title: "Welchen Teil der Pflanze essen wir?",
      widget: "classify",
      options: {
        groups: ["🥕 Wurzel", "🥔 Stängel", "🥬 Blatt", "🥦 Blüte", "🍎 Frucht", "🫘 Samen"],
        items: [
          ["🥕 Karotte", 0],
          ["Radieschen", 0],
          ["🥔 Kartoffel", 1],
          ["Spargel", 1],
          ["🥬 Salat", 2],
          ["Spinat", 2],
          ["🥦 Blumenkohl", 3],
          ["Artischocke", 3],
          ["🍅 Tomate", 4],
          ["🍐 Birne", 4],
          ["🫘 Bohnen", 5],
          ["🌽 Maiskörner", 5]
        ]
      },
      caption: "Überraschung: Die Kartoffel ist ein Stück Stängel, das unter der Erde wächst, und die Tomate ist eine Frucht, weil sie Samen hat!"
    },
    {
      type: "example",
      title: "Beispiel: vom Samen zur Bohne 🌱",
      html: `<ul>
<li><b>Tag 1</b>: Leg eine getrocknete Bohne auf feuchte Watte, in die Nähe des Fensters.</li>
<li><b>Tag 3–4</b>: Der Samen schwillt an, die Schale platzt und das <b>Würzelchen</b> kommt heraus und wächst nach unten.</li>
<li><b>Tag 6–7</b>: Der kleine <b>Stängel</b> wächst nach oben, mit den ersten zwei Blättern.</li>
<li><b>Nach ein paar Wochen</b> (in einem Topf mit Erde): weiße Blüten, dann die <b>Hülsen</b> mit … neuen Bohnen darin!</li>
</ul>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Riesen und Rekorde",
      html: `<p>🌲 Der höchste Baum der Welt ist ein <b>Mammutbaum</b> in Kalifornien mit dem Spitznamen <b>Hyperion</b>: Er ist etwa <b>116 Meter</b> hoch, mehr als ein Hochhaus mit 35 Stockwerken!</p>
<p>🎋 Manche <b>Bambusarten</b> wachsen fast <b>einen Meter an einem Tag</b>: Wenn du dich daneben setzt, kannst du sie fast wachsen sehen!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die größte Blüte … und die stinkende",
      html: `<p>In den Wäldern der Insel Sumatra in Indonesien wächst die <b>Rafflesia</b>: Ihre Blüte ist etwa <b>1 Meter</b> breit und die größte Einzelblüte der Welt. 🌺</p>
<p>Aber sie stinkt nach verdorbenem Fleisch! So lockt sie Fliegen an, die sie bestäuben. 🪰</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, die Teile der Pflanze zu verstehen",
      intro: "Wenn du dir die Namen nicht merken kannst, probiere diese Ideen.",
      tabs: [
        {
          label: "🏠 Die Pflanze als Haus",
          html: `<p>Stell dir die Pflanze wie ein <b>Haus</b> vor:</p>
<ul>
<li>🟫 die <b>Wurzel</b> ist das <b>Fundament</b> und die <b>Wasserleitung</b>;</li>
<li>🟩 der <b>Stängel</b> sind die <b>Wände</b> und die <b>Rohre</b>, die das Wasser in die Stockwerke bringen;</li>
<li>🍃 die <b>Blätter</b> sind die <b>Solarpaneele</b> und die <b>Küche</b>;</li>
<li>🌸 die <b>Blüte</b> ist das <b>bunte Schaufenster</b>, das die Bienen einlädt;</li>
<li>🍎 die <b>Frucht</b> ist der <b>Koffer</b>, der die Samen auf die Reise bringt.</li>
</ul>`
        },
        {
          label: "🌳 Im Inneren des Stamms",
          html: `<p>Wenn du einen Stamm durchschneidest, siehst du viele <b>Kreise</b>: Sie heißen <b>Jahresringe</b>. Jedes Jahr fügt der Baum unter der Rinde einen neuen Ring hinzu. Wenn du die Ringe zählst, erfährst du, <b>wie alt</b> der Baum ist! Breite Ringe sind Jahre mit viel Regen, schmale Ringe trockene Jahre.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<circle cx="200" cy="130" r="110" fill="#78350f"/>
<circle cx="200" cy="130" r="98" fill="#fcd34d" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="82" fill="none" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="64" fill="none" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="50" fill="#d97706" stroke="#a16207" stroke-width="3"/>
<circle cx="200" cy="130" r="36" fill="none" stroke="#92400e" stroke-width="3"/>
<circle cx="200" cy="130" r="22" fill="none" stroke="#92400e" stroke-width="3"/>
<circle cx="200" cy="130" r="6" fill="#451a03"/>
<text x="350" y="60" font-size="18" fill="#451a03" font-weight="bold">Rinde</text>
<line x1="345" y1="55" x2="305" y2="80" stroke="#451a03" stroke-width="2"/>
<text x="350" y="120" font-size="18" fill="#a16207" font-weight="bold">junges Holz (hell)</text>
<text x="350" y="175" font-size="18" fill="#92400e" font-weight="bold">altes Holz (dunkel)</text>
<text x="350" y="230" font-size="18" fill="#1e293b" font-weight="bold">7 Ringe = 7 Jahre</text>
</svg>`
        },
        {
          label: "🍃 Die Fotosynthese in 3D",
          html: `<p>Die Blätter „fangen“ aus der Luft dieses kleine Molekül ein: das <b>Kohlenstoffdioxid</b> (CO₂), bestehend aus einem Kohlenstoffatom (schwarz) und zwei Sauerstoffatomen (rot). Es ist dasselbe Gas, das wir beim Atmen ausstoßen! Pflanzen benutzen es, um Zucker aufzubauen. Dreh es mit dem Finger.</p>`,
          scene: "molecule",
          options: {
            atoms: [
              { x: 0, y: 0, z: 0, r: 0.45, color: "#1f2937", label: "C (Kohlenstoff)" },
              { x: 1.1, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O (Sauerstoff)" },
              { x: -1.1, y: 0, z: 0, r: 0.5, color: "#ef4444", label: "O (Sauerstoff)" }
            ],
            bonds: [[0, 1], [0, 2]]
          }
        },
        {
          label: "🧩 Ordne Teil und Aufgabe zu",
          html: `<p>Jeder Teil hat eine andere Aufgabe. Ordne sie zu!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Wurzel", "saugt das Wasser auf und hält die Pflanze fest"],
              ["Stängel", "stützt und transportiert den Saft"],
              ["Blatt", "stellt mit Licht Nahrung her"],
              ["Blüte", "lockt Insekten an und bildet die Samen"],
              ["Frucht", "schützt die Samen und lässt sie reisen"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Pflanze: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "sole", label: "Sonnenlicht", x: 15, y: 8, color: "#eab308", html: "Die Energie, mit der die Pflanze arbeitet.", why: "Pflanzen fressen nicht: Sie fangen die Energie des Lichts ein. Darum wachsen sie zum Fenster hin, und junge Sonnenblumen folgen im Lauf des Tages der Sonne." },
        { id: "foglie", label: "Blätter", x: 50, y: 15, color: "#22c55e", html: "Stellen durch Fotosynthese Zucker und Sauerstoff her.", why: "Im Jahr <b>1771</b> stellte der Engländer <b>Joseph Priestley</b> ein Minzpflänzchen mit einer erloschenen Kerze unter eine Glasglocke: Nach einigen Tagen konnte die Kerze wieder brennen. Die Pflanze hatte die Luft „repariert“! Im Jahr <b>1779</b> entdeckte der Niederländer <b>Jan Ingenhousz</b>, dass man dafür <b>Licht</b> braucht." },
        { id: "fusto", label: "Stängel", x: 50, y: 42, color: "#15803d", html: "Stützt die Pflanze und transportiert den Saft.", why: "Im Stängel gibt es ganz feine Röhrchen: Manche bringen das Wasser nach oben, andere bringen den Zucker von den Blättern zur ganzen Pflanze. Der italienische Arzt <b>Marcello Malpighi</b> gehörte um 1670 zu den Ersten, die sie unter dem Mikroskop untersuchten." },
        { id: "radice", label: "Wurzel", x: 50, y: 70, color: "#92400e", html: "Verankert die Pflanze und saugt Wasser und Mineralsalze auf.", why: "Die Wurzel wächst immer nach unten, weil sie die Schwerkraft „spürt“, und sucht das Wasser. Die Wurzeln mancher Bäume sind so lang, wie der Baum hoch ist!" },
        { id: "fiore", label: "Blüte", x: 85, y: 30, color: "#ec4899", html: "Farben und Düfte, um Insekten anzulocken; enthält den Pollen.", why: "Blüten sind bunt und duften, um Bienen und Schmetterlinge „einzuladen“, die als Gegenleistung für den Nektar den Pollen transportieren. Ohne Bienen würden viele Pflanzen keine Früchte bilden." },
        { id: "frutto", label: "Frucht", x: 85, y: 58, color: "#ef4444", html: "Entsteht aus der Blüte und schützt die Samen.", why: "Das süße Fruchtfleisch lockt Tiere an, die die Frucht fressen und die Samen weit weg zurücklassen: So wächst die neue Pflanze nicht im Schatten der Mutterpflanze. Andere Früchte fliegen (die Pusteblume) oder schwimmen (die Kokosnuss)." },
        { id: "seme", label: "Samen", x: 85, y: 88, color: "#a16207", html: "Enthält die Pflanze im Miniformat und einen Nahrungsvorrat.", why: "Ein Samen kann sogar jahrelang auf den richtigen Moment warten. Einige Samen der Dattelpalme, die in Israel gefunden wurden und etwa <b>2000 Jahre</b> alt waren, konnten keimen!" },
        { id: "acqua", label: "Wasser und Salze", x: 15, y: 70, color: "#3b82f6", html: "Kommen aus dem Boden durch die Wurzeln.", why: "Ohne Wasser welkt die Pflanze: Die Zellen verlieren Wasser und der Stängel steht nicht mehr gerade. Die Mineralsalze sind wie die Vitamine der Pflanze." }
      ],
      edges: [
        ["sole", "foglie", "gibt Energie an die"],
        ["acqua", "radice", "gelangt in die"],
        ["radice", "fusto", "schickt den Saft zum"],
        ["fusto", "foglie", "bringt Wasser zu den"],
        ["fusto", "fiore", "trägt die"],
        ["fiore", "frutto", "wird zur"],
        ["frutto", "seme", "schützt den"],
        ["seme", "radice", "keimt: neue"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Blüten, Früchte und Samen",
      questions: [
        { type: "mc", q: "Wer trägt den Pollen von einer Blüte zur anderen?", options: ["Die Steine", "Die Bienen", "Die Regenwürmer"], answer: 1, explain: "Wenn Bienen von Blüte zu Blüte fliegen, transportieren sie den Pollen." },
        { type: "tf", q: "Die Tomate ist eine Frucht.", answer: true, explain: "Sie entsteht aus der Blüte und enthält die Samen: Für Wissenschaftler ist sie eine Frucht." },
        { type: "mc", q: "Woraus entsteht eine neue Pflanze?", options: ["Aus dem Samen", "Aus dem Blütenblatt", "Aus der Rinde"], answer: 0, explain: "Der Samen enthält die Pflanze im Miniformat." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li><b>Wurzel</b>: hält die Pflanze fest und trinkt Wasser.</li>
<li><b>Stängel</b>: stützt und transportiert den Saft.</li>
<li><b>Blätter</b>: stellen mit Licht Nahrung her (Fotosynthese) und geben Sauerstoff ab.</li>
<li><b>Blüte</b> → <b>Frucht</b> → <b>Samen</b> → neue Pflanze.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Wurzel", d: "Teil unter der Erde, der Wasser und Salze aufsaugt und die Pflanze festhält." },
    { t: "Stängel", d: "Teil, der die Pflanze stützt und den Saft transportiert; bei Bäumen ist es der Stamm." },
    { t: "Pflanzensaft", d: "Die Flüssigkeit, die in der Pflanze fließt." },
    { t: "Chlorophyll", d: "Grüner Stoff in den Blättern, der das Licht einfängt." },
    { t: "Fotosynthese", d: "Die Arbeit der Blätter, die mit Licht, Wasser und Kohlenstoffdioxid Zucker und Sauerstoff herstellen." },
    { t: "Pollen", d: "Gelbes Pulver der Blüte, das zur Bildung der Samen dient." },
    { t: "Bestäubung", d: "Der Transport des Pollens von einer Blüte zur anderen." },
    { t: "Samen", d: "Enthält die Pflanze im Miniformat, aus der eine neue Pflanze entsteht." },
    { t: "Keimen", d: "Der Samen öffnet sich und beginnt zu wachsen." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welcher Teil der Pflanze liegt unter der Erde?", options: ["Die Blüte", "Die Wurzel", "Das Blatt"], answer: 1, explain: "Die Wurzel liegt unter der Erde." },
      { type: "mc", q: "Wo findet die Fotosynthese statt?", options: ["In den Blättern", "In den Wurzeln", "In den Samen"], answer: 0, explain: "Die Blätter betreiben mit dem Chlorophyll die Fotosynthese." },
      { type: "text", q: "Wie heißt der grüne Stoff in den Blättern?", answer: ["Chlorophyll", "das Chlorophyll"], explain: "Das Chlorophyll fängt das Sonnenlicht ein." },
      { type: "tf", q: "Der Stängel transportiert das Wasser von der Wurzel zu den Blättern.", answer: true, explain: "Im Stängel gibt es Röhrchen, die den Saft transportieren." },
      { type: "tf", q: "Pflanzen brauchen kein Licht.", answer: false, explain: "Ohne Licht können die Blätter keine Nahrung herstellen." },
      { type: "order", q: "Bring das Leben der Pflanze in die richtige Reihenfolge.", items: ["Samen", "Keimling", "Pflanze mit Blättern", "Blüte", "Frucht mit Samen"], explain: "Aus dem Samen entsteht der Keimling, die Pflanze wächst, bildet die Blüte, die Blüte wird zur Frucht mit neuen Samen." },
      { type: "mc", q: "Die Karotte ist …", options: ["eine Wurzel", "eine Blüte", "eine Frucht"], answer: 0, explain: "Bei der Karotte essen wir die Wurzel." },
      { type: "mc", q: "Was geben die Blätter an die Luft ab?", options: ["Rauch", "Sauerstoff", "Staub"], answer: 1, explain: "Bei der Fotosynthese geben die Blätter Sauerstoff ab." },
      { type: "mc", q: "Wozu dienen die Farben und der Duft der Blüten?", options: ["Um Insekten anzulocken", "Um Vögel zu erschrecken", "Zu nichts"], answer: 0, explain: "Sie locken Bienen und Schmetterlinge an, die den Pollen transportieren." },
      { type: "text", q: "Wie heißt der holzige Stängel der Bäume?", answer: ["Stamm", "der Stamm"], explain: "Der Stamm." },
      { type: "mc", q: "Was befindet sich in der Frucht?", options: ["Die Samen", "Die Wurzeln", "Die Rinde"], answer: 0, explain: "Die Frucht schützt die Samen." }
    ]
  }
});
