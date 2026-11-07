TOPIC('de', {
  id: "p2-tec-algoritmi",
  title: "Algorithmen im Alltag",
  intro: "Weißt du, dass du jeden Morgen <b>Algorithmen</b> befolgst? 🪥 Zähne putzen, die Schultasche packen 🎒, einen Kuchen backen 🎂 … Ein <b>Algorithmus</b> ist eine Liste von <b>Anweisungen in der richtigen Reihenfolge</b>, um zu einem Ergebnis zu kommen. Computer und Roboter 🤖 funktionieren genau so!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Was ist ein Algorithmus? 📝",
      html: `<p>Ein <b>Algorithmus</b> ist eine <b>Folge von Anweisungen</b> (Schritten), die ein Problem löst, wenn man sie von Anfang bis Ende befolgt.</p>
<p>Ein guter Algorithmus ist:</p>
<ul>
<li>🔢 <b>geordnet</b>: Die Schritte stehen in einer Reihe, einer nach dem anderen;</li>
<li>🎯 <b>genau</b>: Jede Anweisung versteht man ohne Zweifel;</li>
<li>🏁 <b>endlich</b>: Er kommt irgendwann zu einem Ende.</li>
</ul>
<p>Beispiel: <b>Hände waschen</b> 🧼</p>
<ol>
<li>Dreh das Wasser auf 🚰</li>
<li>Mach die Hände nass</li>
<li>Nimm Seife 🧼</li>
<li>Reib 20 Sekunden lang</li>
<li>Spül ab</li>
<li>Dreh das Wasser zu</li>
<li>Trockne die Hände ab 🧻</li>
</ol>`
    },
    {
      type: "text",
      title: "Die Reihenfolge ist wichtig! 🔀",
      html: `<p>Wenn du die Reihenfolge der Schritte änderst, kann das Ergebnis ein Desaster werden! 😱</p>
<table>
<tr><th>✅ Richtige Reihenfolge</th><th>❌ Falsche Reihenfolge</th></tr>
<tr><td>1. Ich ziehe die Socken an 🧦<br>2. Ich ziehe die Schuhe an 👟</td><td>1. Ich ziehe die Schuhe an 👟<br>2. Ich ziehe die Socken an 🧦<br><i>… die Socken über den Schuhen?!</i></td></tr>
<tr><td>1. Ich spanne den Regenschirm auf ☂️<br>2. Ich gehe in den Regen hinaus</td><td>1. Ich gehe in den Regen hinaus<br>2. Ich spanne den Regenschirm auf<br><i>… ich bin schon nass!</i></td></tr>
</table>
<p>Ein Computer führt die Anweisungen <b>genau</b> in der Reihenfolge aus, in der du sie schreibst: Er merkt nicht, wenn ein Fehler drin ist!</p>`
    },
    {
      type: "svg",
      title: "Der Algorithmus für den Kuchen 🎂",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<rect x="200" y="10" width="200" height="40" rx="20" fill="#22c55e"/>
<text x="300" y="37" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">START</text>
<line x1="300" y1="50" x2="300" y2="65" stroke="#334155" stroke-width="3"/>
<polygon points="293,62 307,62 300,70" fill="#334155"/>
<rect x="160" y="70" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#713f12">1. Schlag 3 Eier in die Schüssel</text>
<line x1="300" y1="108" x2="300" y2="120" stroke="#334155" stroke-width="3"/>
<polygon points="293,117 307,117 300,125" fill="#334155"/>
<rect x="160" y="125" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="150" font-size="16" text-anchor="middle" fill="#713f12">2. Gib Zucker und Mehl dazu</text>
<line x1="300" y1="163" x2="300" y2="175" stroke="#334155" stroke-width="3"/>
<polygon points="293,172 307,172 300,180" fill="#334155"/>
<rect x="160" y="180" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="205" font-size="16" text-anchor="middle" fill="#713f12">3. Rühr gut um</text>
<line x1="300" y1="218" x2="300" y2="230" stroke="#334155" stroke-width="3"/>
<polygon points="293,227 307,227 300,235" fill="#334155"/>
<rect x="160" y="235" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#713f12">4. Back ihn 30 Minuten im Ofen</text>
<line x1="300" y1="273" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="280" width="200" height="36" rx="18" fill="#ef4444"/>
<text x="300" y="304" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">ENDE: Kuchen!</text>
<text x="80" y="160" font-size="50" text-anchor="middle">🥚</text>
<text x="520" y="200" font-size="50" text-anchor="middle">🎂</text>
</svg>`,
      caption: "Einen Algorithmus kann man als Diagramm zeichnen: Man beginnt bei START, folgt den Pfeilen und kommt bei ENDE an."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: in der richtigen Reihenfolge!",
      questions: [
        { type: "order", q: "Bring in die richtige Reihenfolge: Zähne putzen 🪥", items: ["Ich nehme die Zahnbürste", "Ich gebe Zahnpasta darauf", "Ich putze die Zähne", "Ich spüle den Mund aus"], explain: "Zuerst bereitet man die Zahnbürste vor, dann putzt man, dann spült man aus." },
        { type: "tf", q: "Bei einem Algorithmus spielt die Reihenfolge der Schritte keine Rolle.", answer: false, explain: "Die Reihenfolge ist sehr wichtig: Socken vor den Schuhen!" },
        { type: "mc", q: "Ein Algorithmus ist …", options: ["eine Liste von Anweisungen in der richtigen Reihenfolge", "eine Tierart", "ein Kartenspiel"], answer: 0, explain: "Er ist eine geordnete Folge von Anweisungen." }
      ]
    },
    {
      type: "text",
      title: "Genaue Anweisungen für einen Roboter 🤖",
      html: `<p>Ein Roboter ist nicht so schlau wie du: Er macht <b>nur</b>, was du ihm sagst, <b>Wort für Wort</b>.</p>
<p>Wenn du dem Roboter sagst: «<i>Mach das Pausenbrot</i>», weiß er nicht, wo er anfangen soll! 🤷 Du musst jeden Schritt erklären:</p>
<ol>
<li>Öffne den Schrank.</li>
<li>Nimm das Brot.</li>
<li>Nimm das Streichmesser.</li>
<li>Streich die Marmelade auf das Brot.</li>
</ol>
<p>Um einen Roboter auf einem Spielfeld zu bewegen, benutzt man einfache Pfeile:</p>
<p style="font-size:1.2em">⬆️ <b>1 vor</b> &nbsp; ↪️ <b>nach rechts drehen</b> &nbsp; ↩️ <b>nach links drehen</b></p>
<p>Anweisungen für einen Computer oder einen Roboter zu schreiben, heißt <b>programmieren</b> (oder <b>Coding</b> machen).</p>`
    },
    {
      type: "svg",
      title: "Hilf dem Roboter, den Apfel zu erreichen 🍎",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" fill="#e0f2fe">
<rect x="40" y="20" width="70" height="70"/><rect x="110" y="20" width="70" height="70"/><rect x="180" y="20" width="70" height="70"/><rect x="250" y="20" width="70" height="70"/>
<rect x="40" y="90" width="70" height="70"/><rect x="110" y="90" width="70" height="70"/><rect x="180" y="90" width="70" height="70"/><rect x="250" y="90" width="70" height="70"/>
<rect x="40" y="160" width="70" height="70"/><rect x="110" y="160" width="70" height="70"/><rect x="180" y="160" width="70" height="70"/><rect x="250" y="160" width="70" height="70"/>
<rect x="40" y="230" width="70" height="70"/><rect x="110" y="230" width="70" height="70"/><rect x="180" y="230" width="70" height="70"/><rect x="250" y="230" width="70" height="70"/>
</g>
<rect x="55" y="245" width="40" height="40" rx="8" fill="#64748b"/>
<circle cx="68" cy="260" r="5" fill="#facc15"/>
<circle cx="82" cy="260" r="5" fill="#facc15"/>
<rect x="66" y="272" width="18" height="4" fill="#facc15"/>
<circle cx="285" cy="55" r="20" fill="#ef4444"/>
<rect x="283" y="30" width="4" height="10" fill="#78350f"/>
<path d="M75 245 L75 125 L285 125 L285 80" stroke="#f97316" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="460" y="60" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">Das Programm:</text>
<text x="460" y="95" font-size="17" text-anchor="middle" fill="#0f172a">vor, vor</text>
<text x="460" y="125" font-size="17" text-anchor="middle" fill="#0f172a">nach rechts drehen</text>
<text x="460" y="155" font-size="17" text-anchor="middle" fill="#0f172a">vor, vor, vor</text>
<text x="460" y="185" font-size="17" text-anchor="middle" fill="#0f172a">nach links drehen</text>
<text x="460" y="215" font-size="17" text-anchor="middle" fill="#0f172a">vor</text>
<text x="460" y="260" font-size="18" text-anchor="middle" fill="#15803d" font-weight="bold">Apfel erreicht!</text>
</svg>`,
      caption: "Der Roboter startet unten links und schaut nach oben. Folge dem orangefarbenen Weg mit dem Finger und prüfe jede Anweisung."
    },
    {
      type: "widget",
      title: "Genaue oder unklare Anweisung?",
      widget: "classify",
      options: {
        groups: ["🎯 Genau: Der Roboter versteht", "🤷 Unklar: Der Roboter versteht nicht"],
        items: [
          ["Mach 2 Schritte vor", 0],
          ["Geh ein Stück weiter", 1],
          ["Dreh dich nach rechts", 0],
          ["Mach etwas Schönes", 1],
          ["Nimm den roten Ball", 0],
          ["Räum alles auf", 1],
          ["Wiederhole 3-mal: spring", 0],
          ["Mach, was du willst", 1]
        ]
      },
      caption: "Eine Anweisung ist genau, wenn sie sagt, was man tun soll, wie viel und womit."
    },
    {
      type: "text",
      title: "Zwei Tricks der Algorithmen: WIEDERHOLE und WENN 🔁❓",
      html: `<p><b>🔁 WIEDERHOLE (Schleife)</b><br>Statt «vor, vor, vor, vor» zu schreiben, schreibe ich: <b>«wiederhole 4-mal: vor»</b>. Kürzer und klarer!</p>
<p>Beispiel: Um die Treppe hinaufzusteigen 🪜 → <i>wiederhole, bis du oben bist: steig eine Stufe hinauf</i>.</p>
<p><b>❓ WENN… DANN… SONST (Bedingung)</b><br>Manchmal muss man wählen:</p>
<p>☔ <i><b>WENN</b> es regnet, <b>DANN</b> nehme ich den Regenschirm, <b>SONST</b> nehme ich die Kappe.</i></p>
<p>🚦 <i><b>WENN</b> die Ampel grün ist, <b>DANN</b> gehe ich hinüber, <b>SONST</b> warte ich.</i></p>
<p>Mit <b>Folgen</b>, <b>Schleifen</b> und <b>Bedingungen</b> kann man alle Programme der Welt bauen, sogar Videospiele! 🎮</p>`
    },
    {
      type: "3d",
      title: "WIEDERHOLE mit Würfelchen 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "Der Algorithmus lautet: «WIEDERHOLE 3-mal: lege eine Reihe aus 4 Würfelchen». Bewege die Regler, um zu ändern, wie oft wiederholt wird und wie viele Würfelchen du jedes Mal legst. Wie viele Würfelchen sind es insgesamt?"
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Schultasche 🎒",
      html: `<p>Jeden Abend befolgt Tommaso seinen Algorithmus:</p>
<ol>
<li>📅 Er schaut auf den Stundenplan für morgen.</li>
<li>🔁 <b>Wiederhole</b> für jedes Fach: Leg das Buch und das Heft in die Tasche.</li>
<li>✏️ Er kontrolliert das Federmäppchen.</li>
<li>❓ <b>Wenn</b> morgen Sport ist, <b>dann</b> legt er die Turnschuhe bereit 👟.</li>
<li>🚪 Er stellt die Tasche neben die Tür.</li>
</ol>
<p>Hier gibt es eine <b>Folge</b>, eine <b>Schleife</b> (wiederhole) und eine <b>Bedingung</b> (wenn)! So vergisst er nichts.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Spiel „Menschlicher Roboter“ 🧍‍♂️🤖",
      html: `<p>In der Klasse spielt man zu zweit: Einer ist der <b>Programmierer</b>, der andere der <b>Roboter</b>.</p>
<ul>
<li>Der Programmierer schreibt auf ein Blatt die Pfeile, um den Roboter vom Tisch zur Tafel zu bringen: ⬆️⬆️↪️⬆️⬆️⬆️</li>
<li>Der Roboter führt <b>nur</b> aus, was dort steht, ohne nachzudenken.</li>
<li>Wenn der Roboter gegen einen Stuhl stößt … steckt ein <b>Fehler</b> im Programm! Den nennt man <b>Bug</b> 🐞.</li>
<li>Der Programmierer findet den Fehler und verbessert ihn: Das nennt man <b>Debuggen</b>.</li>
</ul>
<p>Fehler zu machen ist völlig in Ordnung: Auch die besten Programmierer finden und verbessern jeden Tag Fehler!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 📜",
      html: `<p>Das Wort <b>Algorithmus</b> kommt vom Namen eines großen Mathematikers, <b>al-Chwarizmi</b>, der vor etwa <b>1200 Jahren</b> in <b>Bagdad</b> (heute im Irak) lebte. Er schrieb ein Buch, in dem er erklärte, wie man mit den Zahlen rechnet, die wir noch heute benutzen: 0 1 2 3 … Als das Buch ins Lateinische übersetzt wurde, wurde sein Name zu «Algoritmi»!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🦋",
      html: `<p>Warum heißt ein Fehler in Programmen <b>Bug</b> (auf Englisch „Insekt“)? Im Jahr <b>1947</b> ging in den Vereinigten Staaten ein riesiger Computer kaputt: Darin fanden die Wissenschaftler um <b>Grace Hopper</b> eine eingeklemmte <b>Motte</b>! Sie klebten sie mit Klebeband in ihr Heft und schrieben dazu, dass sie den ersten echten „Bug“ gefunden hatten. Das Heft mit der Motte liegt noch heute in einem Museum!</p>`
    },
    {
      type: "widget",
      title: "Die Geschichte der Algorithmen",
      widget: "timeline",
      options: {
        unit: "Jahre",
        events: [
          { year: -300, label: "Euklid schreibt einen Algorithmus für Zahlen", icon: "📐" },
          { year: 825, label: "Al-Chwarizmi in Bagdad", icon: "📜" },
          { year: 1843, label: "Ada Lovelace schreibt das erste Programm", icon: "👩‍💻" },
          { year: 1947, label: "Der erste „Bug“: eine Motte!", icon: "🦋" },
          { year: 2007, label: "Scratch entsteht, Coding mit Blöcken", icon: "🐱" },
          { year: 2013, label: "Erste Europe Code Week", icon: "🇪🇺" }
        ]
      },
      caption: "Algorithmen gibt es schon viel länger als Computer!"
    },
    {
      type: "alternatives",
      title: "Andere Wege, Algorithmen zu verstehen",
      intro: "Algorithmen kann man auch ohne Computer lernen: mit dem Körper, mit Musik, mit Karten!",
      tabs: [
        {
          label: "🃏 CodyRoby, das italienische Spiel",
          html: `<p><b>CodyRoby</b> ist ein Kartenspiel, das in <b>Italien</b> von Professor <b>Alessandro Bogliolo</b> von der Universität Urbino für die <b>Code Week</b> erfunden wurde.</p>
<ul>
<li>Es gibt Karten mit <b>drei Pfeilen</b>: ⬆️ vor, ↩️ nach links drehen, ↪️ nach rechts drehen.</li>
<li>Auf einem Spielfeld, das auf den Boden oder auf ein Blatt gezeichnet ist, ist ein Kind (oder eine Spielfigur) der Roboter <b>Roby</b>.</li>
<li>Man legt die Karten in einer Reihe aus, das ist das <b>Programm</b>, dann führt Roby es aus.</li>
</ul>
<p>Man spielt ohne Bildschirme: Das nennt man <b>Coding unplugged</b> („Programmieren ohne Stecker“) 🔌.</p>`
        },
        {
          label: "💃 Tanzen ist ein Algorithmus",
          html: `<p>Jeder Tanz ist ein Algorithmus! Probier das aus:</p>
<p>🎵 <b>WIEDERHOLE 2-mal:</b><br>👏 klatsch in die Hände<br>🦶 stampf mit dem rechten Fuß<br>🔄 dreh dich um dich selbst<br><b>ENDE WIEDERHOLE</b><br>🙌 heb die Arme!</p>
<p>Auch <b>Lieder</b> funktionieren so: Der <b>Refrain</b> ist eine Schleife, die sich wiederholt. Auch Gruppentänze und Handspiele (wie „Backe, backe Kuchen“) sind Algorithmen!</p>`
        },
        {
          label: "🔢 Hüpfen auf dem Zahlenstrahl",
          html: `<p>Hier ist ein Algorithmus mit Zahlen: <b>Starte bei 0. WIEDERHOLE 5-mal: spring 3 vor.</b> Wo kommst du an?</p>
<p>Probier es auf dem Zahlenstrahl unten: 0 → 3 → 6 → 9 → 12 → <b>15</b>. Das ist die Dreierreihe! Die Einmaleinsreihen sind Algorithmen, die eine Addition wiederholen.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 6, 9, 12, 15] }
        },
        {
          label: "🍝 Rezepte in der Welt",
          html: `<p><b>Rezepte</b> sind die ältesten und beliebtesten Algorithmen der Welt!</p>
<ul>
<li>🇮🇹 Die <b>Pasta mit Tomatensauce</b>: Zutaten (= die Daten) + Schritte in der richtigen Reihenfolge (= die Anweisungen).</li>
<li>🇯🇵 Die japanischen <b>Origami</b>: genaue Anweisungen, um Papier Schritt für Schritt zu falten, bis zu einem Papierkranich 🦢.</li>
<li>🧶 Die <b>Stricknadeln</b>: «wiederhole 20-mal: eine rechte Masche, eine linke Masche» ist genau eine Schleife!</li>
</ul>
<p>Eine Tontafel aus <b>Babylon</b> von vor etwa 3700 Jahren enthält aufgeschriebene Rezepte: einige der ältesten der Welt.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Algorithmen",
      nodes: [
        { id: "algoritmo", label: "Algorithmus", x: 50, y: 6, color: "#6366f1", html: "<p>Eine Folge von geordneten, genauen und endlichen Anweisungen, um ein Problem zu lösen.</p>", why: "<p>Der Name kommt von <b>al-Chwarizmi</b>, einem Mathematiker aus Bagdad im 9. Jahrhundert. Aber der erste berühmte Algorithmus ist noch älter: der von <b>Euklid</b> (etwa 300 v. Chr.), um den größten gemeinsamen Teiler zweier Zahlen zu finden.</p>" },
        { id: "sequenza", label: "Folge", x: 18, y: 32, color: "#22c55e", html: "<p>Die Schritte nacheinander, in der richtigen Reihenfolge.</p>", why: "<p>Viele Handlungen hängen von den vorherigen ab: Du kannst den Kuchen nicht backen, wenn du die Zutaten nicht gemischt hast. Darum ist die Reihenfolge wichtig.</p>" },
        { id: "ciclo", label: "Schleife (WIEDERHOLE)", x: 50, y: 32, color: "#f59e0b", html: "<p>Dieselben Anweisungen mehrmals wiederholen.</p>", why: "<p>Maschinen sind sehr gut darin, ohne Ermüdung zu wiederholen. Mit einer Schleife kann ein kurzes Programm sehr viel Arbeit erledigen: Der Computer wiederholt Millionen Mal, ohne sich zu langweilen!</p>" },
        { id: "condizione", label: "Bedingung (WENN)", x: 82, y: 32, color: "#ef4444", html: "<p>Je nach Situation wählen, was man tut.</p>", why: "<p>Die Welt verändert sich (es regnet, es regnet nicht) und das Programm muss sich anpassen. Mit dem <b>WENN</b> prüft der Computer, ob etwas wahr oder falsch ist, und entscheidet dann.</p>" },
        { id: "preciso", label: "Genaue Anweisungen", x: 18, y: 62, color: "#0ea5e9", html: "<p>Jede Anweisung muss klar sein, ohne Zweifel.</p>", why: "<p>Der Computer kann nicht „erraten“, was wir wollen: Er führt alles wortwörtlich aus. Darum haben Programmiersprachen sehr strenge Regeln.</p>" },
        { id: "programma", label: "Programm", x: 50, y: 62, color: "#a855f7", html: "<p>Ein Algorithmus, der in einer Sprache geschrieben ist, die der Computer versteht.</p>", why: "<p>Die erste Person, die ein Programm schrieb, war <b>Ada Lovelace</b> im Jahr <b>1843</b>, für eine Rechenmaschine, die Charles Babbage erdacht hatte und die nie fertig wurde. Darum erinnert man sich an sie als die erste Programmiererin der Geschichte.</p>" },
        { id: "bug", label: "Bug und Debug", x: 82, y: 62, color: "#64748b", html: "<p>Bug = Fehler. Debug = den Fehler finden und verbessern.</p>", why: "<p>1947 fand die Gruppe um Grace Hopper eine echte Motte in einem Computer. Seitdem ist „Bug“ der Name für alle Fehler in Programmen.</p>" },
        { id: "coding", label: "Coding", x: 50, y: 92, color: "#14b8a6", html: "<p>Programmieren lernen, auch spielerisch, mit oder ohne Computer.</p>", why: "<p>Coding lehrt, ein großes Problem in kleine Teile zu zerlegen: Diese Art zu denken nennt man <b>computational thinking</b> (informatisches Denken). Die italienischen Lehrpläne sehen es schon in der Grundschule vor.</p>" }
      ],
      edges: [
        ["algoritmo", "sequenza", "besteht aus"],
        ["algoritmo", "ciclo", "kann benutzen"],
        ["algoritmo", "condizione", "kann benutzen"],
        ["sequenza", "preciso", "aus"],
        ["algoritmo", "programma", "für den PC geschrieben ="],
        ["programma", "bug", "kann haben"],
        ["programma", "coding", "lernt man beim"],
        ["ciclo", "programma", "steckt im"],
        ["condizione", "programma", "steckt im"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: wiederhole und wenn",
      questions: [
        { type: "mc", q: "«Wiederhole 3-mal: spring». Wie oft springst du?", options: ["1", "3", "6"], answer: 1, explain: "Die Schleife wiederholt den Sprung 3-mal." },
        { type: "mc", q: "«WENN es regnet DANN nehme ich den Regenschirm». Heute scheint die Sonne. Nehme ich den Regenschirm?", options: ["Ja", "Nein"], answer: 1, explain: "Die Bedingung «es regnet» ist falsch, also nehme ich den Regenschirm nicht." },
        { type: "text", q: "Wie heißt auf Englisch ein Fehler in einem Programm?", answer: ["bug", "ein bug", "der bug"], explain: "Bug, wie das Insekt, das 1947 gefunden wurde!" }
      ]
    },
    {
      type: "remember",
      title: "Merk dir das 📌",
      html: `<ul>
<li>Ein <b>Algorithmus</b> ist eine Liste von <b>geordneten</b>, <b>genauen</b> und <b>endlichen</b> Anweisungen.</li>
<li>Rezepte und Routinen im Alltag sind Algorithmen.</li>
<li>🔁 <b>Wiederhole</b> = Schleife; ❓ <b>Wenn… dann… sonst</b> = Bedingung.</li>
<li>Ein Algorithmus, der für den Computer geschrieben ist, ist ein <b>Programm</b>; ein Fehler ist ein <b>Bug</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Algorithmus", d: "Geordnete Folge von genauen Anweisungen, um ein Problem zu lösen." },
    { t: "Anweisung", d: "Ein einzelner Schritt, der sagt, was zu tun ist." },
    { t: "Folge", d: "Schritte in der richtigen Reihenfolge, einer nach dem anderen." },
    { t: "Schleife", d: "Anweisungen, die sich mehrmals wiederholen (WIEDERHOLE)." },
    { t: "Bedingung", d: "Eine Wahl: WENN etwas passiert DANN tu dies, SONST das." },
    { t: "Programm", d: "Ein Algorithmus, der in einer Sprache geschrieben ist, die der Computer versteht." },
    { t: "Coding", d: "Programmieren; auch spielerisch, ohne Computer." },
    { t: "Bug", d: "Ein Fehler in einem Programm." },
    { t: "Debug", d: "Fehler finden und verbessern." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Was ist ein Algorithmus?", options: ["Eine Folge von Anweisungen in der richtigen Reihenfolge", "Eine zufällige Zeichnung", "Eine Art von Computer"], answer: 0, explain: "Geordnete, genaue und endliche Anweisungen." },
      { type: "order", q: "Bring in die richtige Reihenfolge: sich zum Rausgehen anziehen.", items: ["Ich ziehe die Socken an", "Ich ziehe die Schuhe an", "Ich binde die Schuhe zu", "Ich verlasse das Haus"], explain: "Die Socken kommen vor die Schuhe!" },
      { type: "order", q: "Bring in die richtige Reihenfolge: einen Tee zubereiten.", items: ["Ich erhitze das Wasser", "Ich gieße das Wasser in die Tasse", "Ich hänge den Teebeutel hinein", "Ich warte ein paar Minuten", "Ich nehme den Teebeutel heraus und trinke"], explain: "Jeder Schritt hängt vom vorherigen ab." },
      { type: "tf", q: "Ein Roboter versteht die Anweisung «Mach etwas Schönes».", answer: false, explain: "Das ist eine unklare Anweisung: Der Roboter braucht genaue Anweisungen." },
      { type: "mc", q: "Welche Anweisung ist GENAU?", options: ["Geh dorthin", "Mach 3 Schritte vor", "Beweg dich ein bisschen"], answer: 1, explain: "Sie sagt genau, was zu tun ist und wie viel." },
      { type: "num", q: "«Wiederhole 4-mal: Lege 2 Bonbons in die Tüte». Wie viele Bonbons sind am Ende drin?", answer: 8, tol: 0, unit: "Bonbons", explain: "4-mal 2 = 8." },
      { type: "mc", q: "«WENN die Ampel rot ist DANN bleibe ich stehen SONST gehe ich hinüber». Die Ampel ist grün: Was tue ich?", options: ["Ich bleibe stehen", "Ich gehe hinüber", "Ich gehe nach Hause zurück"], answer: 1, explain: "Die Bedingung «rot» ist falsch: Es gilt SONST." },
      { type: "text", q: "Wie nennt man es, Fehler in einem Programm zu finden und zu verbessern?", answer: ["debug", "debugging", "debuggen", "das debuggen", "der debug"], explain: "Debug: die Bugs entfernen." },
      { type: "mc", q: "Woher kommt das Wort «Algorithmus»?", options: ["Vom Namen eines Mathematikers aus Bagdad", "Von einem japanischen Roboter", "Von einem Videospiel"], answer: 0, explain: "Vom Namen al-Chwarizmis." },
      { type: "tf", q: "Man kann Coding auch ohne Computer machen.", answer: true, explain: "Das nennt man Coding unplugged: mit Karten, Pfeilen, Spielen." },
      { type: "num", q: "Du startest bei 0 und «wiederholst 5-mal: spring 2 vor». Bei welcher Zahl kommst du an?", answer: 10, tol: 0, explain: "0 → 2 → 4 → 6 → 8 → 10." },
      { type: "mc", q: "Wer gilt als die erste Programmiererin der Geschichte?", options: ["Ada Lovelace", "Kleopatra", "Grace Kelly"], answer: 0, explain: "Ada Lovelace schrieb 1843 das erste Programm." }
    ]
  }
});
