TOPIC('de', {
  id: "p3-ita-fiaba-favola",
  title: "Fiaba e favola (Märchen und Fabel)",
  intro: "„Es war einmal …“ (it. «C'era una volta…») 🏰 Märchen und Fabeln gehören zu den ältesten Geschichten der Welt. Sie ähneln sich, sind aber nicht dasselbe! Wir entdecken, wie man sie erkennt: Im <b>Märchen</b> (it. <i>fiaba</i>) gibt es <b>Zauberei</b> ✨, in der <b>Fabel</b> (it. <i>favola</i>) <b>sprechen Tiere</b> 🦊 und am Ende steht eine <b>Moral</b>.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Das Märchen: Zauberei und Happy End",
      html: `<p>Das <b>Märchen</b> ist eine fantastische Erzählung, die vor langer Zeit entstanden ist und mündlich von den Großeltern an die Enkel weitergegeben wurde. Seine Merkmale:</p>
<ul>
<li>✨ <b>Zauberei</b>: Feen, Hexen, Menschenfresser, Drachen, Zaubergegenstände (der Schuh, die Lampe, die Siebenmeilenstiefel).</li>
<li>🕰️ <b>Unbestimmte Zeit</b>: „Es war einmal …“, „Vor langer Zeit …“.</li>
<li>🌲 <b>Unbestimmter Ort</b>: „in einem fernen Königreich“, „in einem dichten Wald“.</li>
<li>👑 <b>Feste Figuren</b>: der Protagonist (Held oder Heldin), der Antagonist (der Böse), der Helfer, der Zaubergegenstand.</li>
<li>⚔️ Der Protagonist muss schwierige <b>Prüfungen</b> bestehen.</li>
<li>😊 <b>Happy End</b>: „… und sie lebten glücklich und zufrieden“.</li>
</ul>
<p>Berühmte Märchen: <i>Aschenputtel</i>, <i>Schneewittchen</i>, <i>Hänsel und Gretel</i>, <i>Der gestiefelte Kater</i>, <i>Dornröschen</i>.</p>`
    },
    {
      type: "text",
      title: "Die Fabel: Tiere und Moral",
      html: `<p>Die <b>Fabel</b> ist eine <b>kurze</b> Erzählung, die <b>etwas lehren</b> will. Ihre Merkmale:</p>
<ul>
<li>🦊 Die Hauptfiguren sind fast immer <b>Tiere</b>, die sprechen und sich wie Menschen verhalten.</li>
<li>🎭 Jedes Tier steht für einen <b>Charakter</b>: Der Fuchs ist schlau, der Löwe stark und herrisch, die Ameise fleißig, der Esel dickköpfig, das Lamm wehrlos.</li>
<li>⚡ Die Geschichte ist <b>kurz</b>, mit wenigen Figuren (oft nur zwei) und oft einem Dialog.</li>
<li>📜 Am Ende steht die <b>Moral</b>: eine Lehre, wie man sich verhalten soll. Manchmal steht sie da, manchmal musst du sie selbst herausfinden.</li>
<li>❌ Es gibt keine Zauberei und nicht immer ein Happy End.</li>
</ul>
<p>Berühmte Fabeln: <i>Der Fuchs und die Trauben</i>, <i>Die Grille und die Ameise</i>, <i>Der Hase und die Schildkröte</i>, <i>Der Wolf und das Lamm</i>.</p>`
    },
    {
      type: "svg",
      title: "Märchen oder Fabel? Auf einen Blick",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#faf5ff"/>
<rect x="20" y="20" width="270" height="260" rx="20" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
<rect x="310" y="20" width="270" height="260" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
<text x="155" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#5b21b6">MÄRCHEN</text>
<text x="445" y="60" font-size="30" font-weight="bold" text-anchor="middle" fill="#92400e">FABEL</text>
<text x="155" y="105" font-size="34" text-anchor="middle">🧚 🐉 👑</text>
<text x="445" y="105" font-size="34" text-anchor="middle">🦊 🍇 🐢</text>
<g font-size="18" fill="#1f2937">
<text x="40" y="145">✨ Zauberei</text>
<text x="40" y="175">📖 lange Geschichte</text>
<text x="40" y="205">🧍 menschliche Figuren</text>
<text x="40" y="235">⚔️ Prüfungen</text>
<text x="40" y="265">😊 Happy End</text>
<text x="330" y="145">🚫 keine Zauberei</text>
<text x="330" y="175">⚡ kurze Geschichte</text>
<text x="330" y="205">🐾 sprechende Tiere</text>
<text x="330" y="235">🎭 eine Schwäche oder Stärke</text>
<text x="330" y="265">📜 Moral am Schluss</text>
</g>
</svg>`,
      caption: "Zwei verschiedene Gattungen: Das Märchen lässt träumen, die Fabel lässt nachdenken."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Märchen oder Fabel?",
      questions: [
        { type: "mc", q: "Eine Geschichte mit einer Fee, einem Prinzen und einem Zauber ist …", options: ["ein Märchen", "eine Fabel"], answer: 0, explain: "Zauberei und fantastische Figuren sind typisch für das Märchen." },
        { type: "mc", q: "Eine kurze Geschichte, in der ein Rabe und ein Fuchs sprechen und am Ende eine Lehre steht, ist …", options: ["ein Märchen", "eine Fabel"], answer: 1, explain: "Sprechende Tiere + Moral = Fabel." },
        { type: "tf", q: "In der Fabel steht der Fuchs gewöhnlich für Schlauheit.", answer: true, explain: "Die Tiere der Fabeln haben feste Charaktere: Der Fuchs ist schlau." }
      ]
    },
    {
      type: "text",
      title: "Die Autoren: Wer hat Märchen und Fabeln geschrieben?",
      html: `<p><b>Fabeln</b></p>
<ul>
<li><b>Äsop</b> 🇬🇷: lebte im <b>6. Jahrhundert v. Chr.</b> in Griechenland; nach der Überlieferung war er ein sehr weiser Sklave. Seine Fabeln (<i>Der Fuchs und die Trauben</i>, <i>Der Hase und die Schildkröte</i>) sind bis zu uns gekommen.</li>
<li><b>Phaedrus</b> 🏛️: lateinischer Dichter des <b>1. Jahrhunderts n. Chr.</b>, schrieb viele Fabeln Äsops in Versen neu (<i>Der Wolf und das Lamm</i>).</li>
<li><b>Jean de La Fontaine</b> 🇫🇷: veröffentlichte <b>1668</b> in Frankreich seine <i>Fabeln</i> in Versen (<i>Die Grille und die Ameise</i>).</li>
</ul>
<p><b>Märchen</b></p>
<ul>
<li><b>Giambattista Basile</b> 🇮🇹: Neapolitaner, schrieb <i>Lo cunto de li cunti</i> (veröffentlicht <b>1634–1636</b>), eine der ersten Märchensammlungen Europas, in der es schon <i>La gatta Cenerentola</i> gibt.</li>
<li><b>Charles Perrault</b> 🇫🇷: veröffentlichte <b>1697</b> <i>Rotkäppchen</i>, <i>Der gestiefelte Kater</i>, <i>Aschenputtel</i>.</li>
<li><b>Brüder Grimm</b> 🇩🇪: Jacob und Wilhelm sammelten die deutschen Volksmärchen und veröffentlichten sie ab <b>1812</b> (<i>Hänsel und Gretel</i>, <i>Schneewittchen</i>).</li>
<li><b>Hans Christian Andersen</b> 🇩🇰: schrieb ab <b>1835</b> neue Märchen: <i>Die kleine Meerjungfrau</i>, <i>Das hässliche junge Entlein</i>.</li>
<li><b>Italo Calvino</b> 🇮🇹: sammelte und schrieb <b>1956</b> 200 <i>Fiabe italiane</i> (Italienische Märchen) aus allen Regionen neu.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Die Zeitleiste von Märchen und Fabeln",
      widget: "timeline",
      options: {
        events: [
          { year: -550, label: "Äsop", icon: "🦊", text: "Griechische Fabeln, 6. Jahrhundert v. Chr. (ungefähre Zeitangabe)." },
          { year: 40, label: "Phaedrus", icon: "🐺", text: "Fabeln auf Latein, 1. Jahrhundert n. Chr. (ungefähre Zeitangabe)." },
          { year: 1634, label: "Basile", icon: "📜", text: "Lo cunto de li cunti, Neapel (1634–1636)." },
          { year: 1668, label: "La Fontaine", icon: "🦗", text: "Die Fabeln, Frankreich." },
          { year: 1697, label: "Perrault", icon: "🐈", text: "Rotkäppchen, Aschenputtel, Der gestiefelte Kater." },
          { year: 1812, label: "Brüder Grimm", icon: "🍬", text: "Märchen für Kinder und Familien: Hänsel und Gretel, Schneewittchen." },
          { year: 1835, label: "Andersen", icon: "🧜", text: "Erste Märchen; danach Die kleine Meerjungfrau, Das hässliche junge Entlein." },
          { year: 1956, label: "Calvino", icon: "📚", text: "Fiabe italiane: 200 Märchen aus den Regionen Italiens." }
        ]
      },
      caption: "Tipp einen Punkt an, um den Autor zu entdecken. Die Geschichten sind viel älter als die Bücher: Man erzählte sie mündlich."
    },
    {
      type: "text",
      title: "Der Aufbau des Märchens",
      html: `<p>Fast alle Märchen folgen demselben Weg in <b>fünf Stationen</b>:</p>
<ol>
<li><b>Ausgangssituation</b>: „Es war einmal ein gutes Mädchen, das bei seiner Stiefmutter lebte …“</li>
<li><b>Störung des Gleichgewichts</b> (das Problem): ein gebrochenes Verbot, ein Zauber, eine Entführung.</li>
<li><b>Abenteuer</b>: Der Protagonist zieht los, besteht Prüfungen, trifft Helfer und Gegner, bekommt einen Zaubergegenstand.</li>
<li><b>Auflösung</b>: Der Böse wird besiegt, der Zauber wird gebrochen.</li>
<li><b>Schlusssituation</b>: Der Protagonist ist glücklich (und heiratet oft oder wird König).</li>
</ol>
<p>Die Fabel ist dagegen einfacher: <b>Situation → Ereignis → Schluss → Moral</b>.</p>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: die Fabel «Der Fuchs und die Trauben» (Äsop)",
      html: `<p><i>Ein hungriger Fuchs sah reife Trauben an einem hohen Rebstock hängen. Er sprang einmal, zweimal, dreimal, doch er erreichte sie nicht. Da ging er weg und sagte: „Die Trauben sind ja ohnehin sauer!“</i></p>
<ul>
<li>Figur: der Fuchs (ein Tier, das spricht).</li>
<li>Situation: Er hat Hunger und sieht die Trauben.</li>
<li>Ereignis: Er versucht, sie zu pflücken, schafft es aber nicht.</li>
<li>Schluss: Er sagt, die Trauben seien nicht gut.</li>
<li><b>Moral</b>: Wer etwas nicht erreichen kann, tut oft so, als wolle er es gar nicht. Daher kommt die Redewendung „sauer sind die Trauben“.</li>
</ul>`
    },
    {
      type: "example",
      title: "Praxisbeispiel: das Märchen von Aschenputtel",
      html: `<ul>
<li><b>Ausgangssituation</b>: Aschenputtel lebt bei der Stiefmutter und den Stiefschwestern, die sie wie eine Magd behandeln.</li>
<li><b>Störung</b>: Der Prinz gibt einen Ball, aber sie darf nicht hingehen.</li>
<li><b>Helfer und Zaubergegenstände</b>: Die Patin, die Fee, verwandelt einen Kürbis in eine Kutsche und gibt ihr ein Kleid und gläserne Schuhe (in der Fassung von Perrault).</li>
<li><b>Prüfung</b>: Sie muss bis Mitternacht zurück sein; auf der Flucht verliert sie einen Schuh.</li>
<li><b>Gegner</b>: Stiefmutter und Stiefschwestern, die versuchen, den Prinzen zu täuschen.</li>
<li><b>Auflösung und Happy End</b>: Der Schuh passt nur ihr; sie heiratet den Prinzen.</li>
</ul>
<p>Dasselbe Märchen wird auf der ganzen Welt mit verschiedenen Namen erzählt: In China gibt es eine ähnliche Geschichte, <i>Ye Xian</i>, die schon im 9. Jahrhundert aufgeschrieben wurde!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die 31 „Züge“ des Märchens",
      html: `<p>Im Jahr <b>1928</b> las und verglich der russische Forscher <b>Vladimir Propp</b> etwa hundert russische Zaubermärchen und entdeckte, dass sie alle aus denselben „Bausteinen“ aufgebaut waren: <b>31 Funktionen</b>, also typischen Handlungen (Entfernung, Verbot, Verbotsübertretung, Schenkung des Zaubergegenstands, Kampf, Sieg, Hochzeit …). Die Märchen scheinen alle verschieden, haben aber im Grunde dasselbe Skelett!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Rodari und die Fabeln am Telefon",
      html: `<p>Der italienische Schriftsteller <b>Gianni Rodari</b> veröffentlichte <b>1962</b> <i>Favole al telefono</i> („Fabeln am Telefon“): die Geschichten, die der Buchhalter Bianchi, der beruflich immer unterwegs war, jeden Abend seiner Tochter am Telefon erzählte. Sie mussten kurz sein, weil er mit Münzen bezahlte! <b>1970</b> gewann Rodari den <b>Hans-Christian-Andersen-Preis</b>, den wichtigsten Preis der Welt für Kinder- und Jugendbuchautoren: Er ist der einzige italienische Schriftsteller, der ihn gewonnen hat.</p>`
    },
    {
      type: "remember",
      title: "Merk dir das",
      html: `<table>
<tr><th></th><th>MÄRCHEN (fiaba)</th><th>FABEL (favola)</th></tr>
<tr><td>Figuren</td><td>Menschen und fantastische Wesen (Feen, Menschenfresser)</td><td>sprechende Tiere</td></tr>
<tr><td>Zauberei</td><td>ja</td><td>nein</td></tr>
<tr><td>Länge</td><td>länger, mit vielen Prüfungen</td><td>kurz</td></tr>
<tr><td>Zeit und Ort</td><td>unbestimmt („es war einmal“)</td><td>unbestimmt</td></tr>
<tr><td>Schluss</td><td>Happy End</td><td>Moral</td></tr>
<tr><td>Autoren</td><td>Basile, Perrault, Grimm, Andersen, Calvino</td><td>Äsop, Phaedrus, La Fontaine</td></tr>
</table>`
    },
    {
      type: "widget",
      title: "Spiel: Figuren des Märchens",
      widget: "classify",
      options: {
        groups: ["Protagonist", "Antagonist", "Helfer", "Zaubergegenstand"],
        items: [
          ["👧 Rotkäppchen", 0], ["👸 Schneewittchen", 0], ["🧒 Hänsel", 0],
          ["🐺 der Wolf", 1], ["🧙‍♀️ die Hexe", 1], ["👹 der Menschenfresser", 1],
          ["🧚 die Fee, die Patin", 2], ["🪓 der Jäger", 2], ["🐦 die Vögelchen", 2],
          ["👠 der gläserne Schuh", 3], ["🪄 der Zauberstab", 3], ["👢 die Siebenmeilenstiefel", 3]
        ]
      },
      caption: "Jede Figur hat im Märchen eine feste Rolle: Leg sie an den richtigen Platz."
    },
    {
      type: "alternatives",
      title: "Andere Wege, Märchen und Fabeln zu verstehen",
      intro: "Du kannst den Unterschied auch mit einem Comic, mit den Karten von Propp, durch Zuordnen der Morale oder auf einer Reise um die Welt mit Aschenputtel verstehen.",
      tabs: [
        {
          label: "🎨 Das Märchen als Comic",
          html: `<p>Hier sind die fünf Stationen des Märchens als Comicstreifen gezeichnet. Versuch, <i>Hänsel und Gretel</i> anhand der Bilder zu erzählen!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<g stroke="#1f2937" stroke-width="3">
<rect x="10" y="20" width="108" height="150" fill="#dbeafe"/>
<rect x="128" y="20" width="108" height="150" fill="#fee2e2"/>
<rect x="246" y="20" width="108" height="150" fill="#fef3c7"/>
<rect x="364" y="20" width="108" height="150" fill="#dcfce7"/>
<rect x="482" y="20" width="108" height="150" fill="#fce7f3"/>
</g>
<g font-size="40" text-anchor="middle">
<text x="64" y="95">🏠</text><text x="182" y="95">🌲</text><text x="300" y="95">🍬</text><text x="418" y="95">🔥</text><text x="536" y="95">🤗</text>
</g>
<g font-size="14" text-anchor="middle" fill="#1f2937">
<text x="64" y="135">arme</text><text x="64" y="155">Familie</text>
<text x="182" y="135">im Wald</text><text x="182" y="155">ausgesetzt</text>
<text x="300" y="135">Haus aus</text><text x="300" y="155">Lebkuchen</text>
<text x="418" y="135">Gretel besiegt</text><text x="418" y="155">die Hexe</text>
<text x="536" y="135">sie kehren</text><text x="536" y="155">heim</text>
</g>
<g font-size="15" font-weight="bold" text-anchor="middle" fill="#7c3aed">
<text x="64" y="200">1. Anfang</text><text x="182" y="200">2. Problem</text><text x="300" y="200">3. Prüfungen</text><text x="418" y="200">4. Lösung</text><text x="536" y="200">5. Happy End</text>
</g>
</svg>`
        },
        {
          label: "🃏 Die Karten von Propp",
          html: `<p>Der Schriftsteller <b>Gianni Rodari</b> schlug im Buch <i>Grammatica della fantasia</i> („Grammatik der Fantasie“, 1973) vor, die Funktionen von Propp in <b>Spielkarten</b> zu verwandeln: Du ziehst der Reihe nach ein paar Karten und erfindest ein neues Märchen! Probier es mit diesen:</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "1. Entfernung", back: "Jemand verlässt das Haus (der Papa reist ab, der Held geht in den Wald)." },
              { front: "2. Verbot", back: "„Öffne diese Tür nicht!“, „Sprich nicht mit dem Wolf!“" },
              { front: "3. Übertretung", back: "Das Verbot wird gebrochen … und schon gibt es Ärger!" },
              { front: "4. Zaubergabe", back: "Ein Helfer schenkt dem Helden einen Zaubergegenstand." },
              { front: "5. Kampf", back: "Der Held stellt sich dem Gegner." },
              { front: "6. Sieg", back: "Der Böse ist besiegt." },
              { front: "7. Rückkehr", back: "Der Held kehrt heim." },
              { front: "8. Hochzeit", back: "Happy End: Der Held heiratet oder wird König." }
            ]
          }
        },
        {
          label: "🔗 Ordne Fabel und Moral zu",
          html: `<p>Verbinde jede Fabel mit ihrer Moral.</p>`,
          widget: "match",
          options: {
            pairs: [
              ["Der Hase und die Schildkröte", "Langsam und stetig kommt man weit"],
              ["Die Grille und die Ameise", "Man muss an die Zukunft denken"],
              ["Der Fuchs und die Trauben", "Wer etwas nicht erreicht, tut so, als wolle er es nicht"],
              ["Der Wolf und das Lamm", "Der Gewalttätige findet immer eine Ausrede"],
              ["Der Löwe und die Maus", "Auch die Kleinen können den Großen helfen"]
            ]
          }
        },
        {
          label: "🌍 Aschenputtel in der Welt (3D)",
          html: `<p>Dieselbe Geschichte reist um die Welt und wechselt das Gewand. Dreh den Globus und finde die Orte:</p>
<ul>
<li>🇨🇳 <b>Ye Xian</b> (China, 9. Jahrhundert): Der magische Helfer ist ein Fisch, und sie verliert einen goldenen Schuh.</li>
<li>🇮🇹 <b>La gatta Cenerentola</b> (Basile, Neapel, 1634): Die Hauptfigur heißt Zezolla.</li>
<li>🇫🇷 <b>Cendrillon</b> (Perrault, Paris, 1697): Es kommen die Fee, die Kürbiskutsche und der gläserne Schuh.</li>
<li>🇩🇪 <b>Aschenputtel</b> (Grimm, 1812): keine Fee; ihr helfen ein Zauberbaum und Vögelchen.</li>
</ul>
<p>Forscher haben Hunderte verschiedene Fassungen dieses Märchens auf der Welt gesammelt!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 23, lon: 109, label: "Ye Xian (China)", color: "#ef4444" },
              { lat: 40.85, lon: 14.27, label: "Basile (Neapel)", color: "#22c55e" },
              { lat: 48.86, lon: 2.35, label: "Perrault (Paris)", color: "#3b82f6" },
              { lat: 50.32, lon: 9.4, label: "Grimm (Deutschland)", color: "#f59e0b" }
            ]
          }
        },
        {
          label: "🎭 Die Tiermasken",
          html: `<p>In der Fabel ist jedes Tier wie eine <b>Maske</b> des Theaters: Sobald du es siehst, weißt du schon, wie es ist.</p>
<table>
<tr><th>Tier</th><th>Charakter</th></tr>
<tr><td>🦊 Fuchs</td><td>schlau, betrügerisch</td></tr>
<tr><td>🦁 Löwe</td><td>stark, mächtig, manchmal herrisch</td></tr>
<tr><td>🐺 Wolf</td><td>böse, gewalttätig</td></tr>
<tr><td>🐑 Lamm</td><td>unschuldig, wehrlos</td></tr>
<tr><td>🐜 Ameise</td><td>fleißig, vorausschauend</td></tr>
<tr><td>🦗 Grille</td><td>sorglos, faul</td></tr>
<tr><td>🐢 Schildkröte</td><td>langsam, aber beharrlich</td></tr>
</table>
<p>Mit Tieren konnten Äsop und Phaedrus die Mächtigen kritisieren … ohne sie beim Namen zu nennen!</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte von Märchen und Fabeln: Tipp einen Knoten an und entdecke das Warum",
      nodes: [
        { id: "racconto", label: "Fantastische Erzählung", x: 50, y: 6, color: "#2563eb", html: "Erfundene Geschichte mit Elementen, die es in Wirklichkeit nicht gibt.", why: "Die Menschen erzählen Geschichten, seit es Sprache gibt: Sie dienten zur Unterhaltung, zur Erklärung der Welt und dazu, den Jüngeren beizubringen, wie man sich verhält." },
        { id: "orale", label: "Mündliche Überlieferung", x: 50, y: 26, color: "#64748b", html: "Die Geschichten wurden mündlich von Generation zu Generation weitergegeben.", why: "Jahrhundertelang konnte fast niemand lesen: Die Geschichten erzählte man abends am Feuer. Um sie sich zu merken, benutzte man feste Formeln („Es war einmal“) und Wiederholungen (drei Prüfungen, drei Brüder)." },
        { id: "fiaba", label: "Märchen", x: 22, y: 45, color: "#7c3aed", html: "Erzählung mit Zauberei, Prüfungen und Happy End.", why: "Das Wort kommt vom lateinischen <i>fabula</i>, „Erzählung“. Märchen geben Hoffnung: Auch der Kleinste und Ärmste kann siegen, wenn er mutig und gut ist." },
        { id: "favola", label: "Fabel", x: 78, y: 45, color: "#d97706", html: "Kurze Erzählung mit sprechenden Tieren und einer Moral.", why: "Auch „Fabel“ kommt von <i>fabula</i>. In der Antike war sie ein Weg, zu lehren und die Mächtigen ohne Gefahr zu kritisieren, indem man Tiere statt Menschen sprechen ließ." },
        { id: "personaggi", label: "Rollen der Figuren", x: 10, y: 70, color: "#ec4899", html: "Protagonist, Antagonist, Helfer, Zaubergegenstand.", why: "Propp entdeckte, dass in Zaubermärchen die Figuren zwar den Namen wechseln, die <b>Rollen</b> aber immer dieselben sind: Er fand sieben (darunter den Helden, den Gegner, den Schenker und den Helfer)." },
        { id: "propp", label: "Die 31 Funktionen von Propp", x: 34, y: 70, color: "#a855f7", html: "Die typischen Handlungen, aus denen jedes Märchen gebaut ist.", why: "Vladimir Propp beschrieb sie im Buch <i>Morphologie des Märchens</i> (1928), indem er etwa hundert russische Zaubermärchen verglich. Seine Methode wurde später auch zur Untersuchung von Filmen und Romanen benutzt." },
        { id: "morale", label: "Moral", x: 66, y: 70, color: "#16a34a", html: "Die Lehre am Ende der Fabel.", why: "Äsop und Phaedrus schrieben, um das Leben zu lehren: Die Moral fasst die Lehre der Geschichte in einem Satz zusammen. Viele Redewendungen („sauer sind die Trauben“) stammen genau aus Fabeln." },
        { id: "animali", label: "Symboltiere", x: 90, y: 70, color: "#f59e0b", html: "Schlauer Fuchs, starker Löwe, fleißige Ameise.", why: "Tiere haben „feste“ Charaktere, die alle sofort erkennen: So kann die Fabel ganz kurz sein, weil man nicht erklären muss, wie die Figur ist." },
        { id: "autori", label: "Sammler und Autoren", x: 50, y: 92, color: "#0ea5e9", html: "Äsop, Phaedrus, Basile, Perrault, Grimm, Andersen, Calvino, Rodari.", why: "Viele von ihnen erfanden die Geschichten nicht: Sie <b>sammelten</b> sie aus dem Mund des Volkes und schrieben sie auf, und retteten sie so vor dem Vergessen. Andere, wie Andersen und Rodari, schrieben neue." }
      ],
      edges: [
        ["racconto", "orale", "entsteht aus der"],
        ["orale", "fiaba", "hat das Märchen hervorgebracht, das"],
        ["orale", "favola", "und die"],
        ["fiaba", "personaggi", "hat"],
        ["fiaba", "propp", "untersucht von"],
        ["favola", "morale", "endet mit der"],
        ["favola", "animali", "benutzt"],
        ["orale", "autori", "aufgeschrieben von"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Autoren und Aufbau",
      questions: [
        { type: "mc", q: "Wer ist der berühmteste griechische Fabelautor?", options: ["Äsop", "Andersen", "Perrault"], answer: 0, explain: "Äsop lebte im 6. Jahrhundert v. Chr. in Griechenland." },
        { type: "mc", q: "Wie heißt der „Böse“ im Märchen?", options: ["Helfer", "Antagonist", "Protagonist"], answer: 1, explain: "Der Antagonist stellt sich dem Protagonisten in den Weg." },
        { type: "order", q: "Bring den Aufbau des Märchens in die richtige Reihenfolge.", items: ["Ausgangssituation", "Störung des Gleichgewichts", "Abenteuer und Prüfungen", "Auflösung", "Schlusssituation"], explain: "Anfang, Problem, Prüfungen, Lösung, Happy End." }
      ]
    }
  ],
  glossary: [
    { t: "Fiaba", d: "Märchen: fantastische Erzählung mit Zauberei, Prüfungen und Happy End." },
    { t: "Favola", d: "Fabel: kurze Erzählung mit sprechenden Tieren, die mit einer Moral endet." },
    { t: "Morale", d: "Moral: die Lehre, die man aus einer Fabel zieht." },
    { t: "Protagonista", d: "Protagonist: die Hauptfigur der Geschichte." },
    { t: "Antagonista", d: "Antagonist: die Figur, die sich dem Protagonisten in den Weg stellt." },
    { t: "Aiutante", d: "Helfer: die Figur, die dem Protagonisten hilft (Fee, Zaubertier)." },
    { t: "Oggetto magico", d: "Zaubergegenstand: Gegenstand mit besonderen Kräften, der dem Helden hilft (Zauberstab, Stiefel)." },
    { t: "Lieto fine", d: "Happy End: glücklicher Schluss der Geschichte." },
    { t: "Tradizione orale", d: "Mündliche Überlieferung: Geschichten, die mündlich von Generation zu Generation weitergegeben werden." },
    { t: "Funzioni di Propp", d: "Funktionen von Propp: die 31 typischen Handlungen der Zaubermärchen, die Vladimir Propp (1928) herausgefunden hat." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Welches Element gibt es im Märchen, aber gewöhnlich nicht in der Fabel?", options: ["die Zauberei", "die Figuren", "einen Anfang"], answer: 0, explain: "Zauberei (Feen, Zauber, Zaubergegenstände) ist typisch für das Märchen." },
      { type: "mc", q: "„Die Grille und die Ameise“ ist …", options: ["ein Märchen", "eine Fabel"], answer: 1, explain: "Sprechende Tiere und Moral: Es ist eine Fabel (Äsop, dann La Fontaine)." },
      { type: "tf", q: "Märchen beginnen oft mit „Es war einmal“ (it. «C'era una volta»).", answer: true, explain: "Das ist die Formel, die eine unbestimmte Zeit anzeigt." },
      { type: "text", q: "Wie heißt die Lehre am Ende einer Fabel?", answer: ["moral", "die moral", "morale", "la morale"], explain: "Die Moral (it. morale)." },
      { type: "mc", q: "Im Märchen von Aschenputtel ist die Fee, die Patin, …", options: ["der Antagonist", "der Helfer", "der Protagonist"], answer: 1, explain: "Sie hilft Aschenputtel, zum Ball zu gehen." },
      { type: "mc", q: "Wer sammelte die deutschen Volksmärchen, wie Hänsel und Gretel?", options: ["die Brüder Grimm", "Äsop", "Phaedrus"], answer: 0, explain: "Jacob und Wilhelm Grimm, ab 1812." },
      { type: "tf", q: "In Fabeln steht jedes Tier für einen menschlichen Charakter.", answer: true, explain: "Zum Beispiel steht der Fuchs für Schlauheit, die Ameise für Fleiß." },
      { type: "order", q: "Bring die Autoren zeitlich in die Reihenfolge, vom ältesten an.", items: ["Äsop", "Phaedrus", "Perrault", "Brüder Grimm", "Italo Calvino"], explain: "6. Jh. v. Chr., 1. Jh. n. Chr., 1697, 1812, 1956." },
      { type: "mc", q: "Was ist die Moral von «Der Hase und die Schildkröte»?", options: ["Langsam und stetig kommt man weit", "Einigkeit macht stark", "Der Stärkste siegt immer"], answer: 0, explain: "Die Schildkröte, langsam, aber beharrlich, schlägt den überheblichen Hasen." },
      { type: "mc", q: "Welcher italienische Schriftsteller sammelte 1956 200 «Fiabe italiane»?", options: ["Gianni Rodari", "Italo Calvino", "Carlo Collodi"], answer: 1, explain: "Italo Calvino, aus allen Regionen Italiens." },
      { type: "tf", q: "In der Fabel gibt es immer ein Happy End.", answer: false, explain: "Nicht immer: Im «Wolf und das Lamm» wird das Lamm gefressen. Die Fabel hat immer eine Moral, aber nicht immer ein glückliches Ende." },
      { type: "mc", q: "Der Neapolitaner Giambattista Basile schrieb …", options: ["Lo cunto de li cunti", "Pinocchios Abenteuer", "Favole al telefono"], answer: 0, explain: "Eine der ersten Märchensammlungen Europas (1634–1636)." }
    ]
  }
});
