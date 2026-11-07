TOPIC('de', {
  id: "p2-sci-animali",
  title: "Die Tiere",
  intro: "Die Welt ist voller Tiere 🐘🐟🦅🐌! Manche rennen, andere fliegen oder schwimmen; manche fressen Gras, andere Fleisch. Wir entdecken, <b>wie sie sich bewegen</b>, <b>was sie fressen</b> und <b>wo sie leben</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Tiere sind Lebewesen",
      html: `<p>Tiere <b>werden geboren, wachsen, ernähren sich, atmen, pflanzen sich fort und sterben</b>, wie alle Lebewesen.</p>
<p>Aber anders als Pflanzen:</p>
<ul>
<li>🍽️ <b>können Tiere ihre Nahrung nicht selbst herstellen</b>: Sie müssen Pflanzen oder andere Tiere fressen;</li>
<li>🏃 fast alle <b>bewegen sich</b> von einem Ort zum anderen, um Futter, Wasser und Schutz zu suchen.</li>
</ul>`
    },
    {
      type: "text",
      title: "Wie bewegen sie sich?",
      html: `<ul>
<li>🐕 <b>Sie gehen und rennen</b> auf ihren Beinen: Hund, Pferd, Gepard.</li>
<li>🐸 <b>Sie hüpfen</b>: Frosch, Känguru, Heuschrecke.</li>
<li>🦅 <b>Sie fliegen</b> mit Flügeln: Vögel, Schmetterlinge, Fledermäuse, Bienen.</li>
<li>🐟 <b>Sie schwimmen</b> mit Flossen und Schwanz: Fische, Delfine, Wale.</li>
<li>🐍 <b>Sie kriechen</b> ohne Beine: Schlange, Regenwurm, Schnecke.</li>
</ul>
<p>Manche Tiere können mehrere Dinge: Die <b>Ente</b> 🦆 geht, schwimmt und fliegt!</p>`
    },
    {
      type: "widget",
      title: "Wie bewegt es sich?",
      widget: "classify",
      options: {
        groups: ["🦵 Geht/rennt", "🪽 Fliegt", "🌊 Schwimmt", "〰️ Kriecht"],
        items: [
          ["🐎 Pferd", 0],
          ["🦋 Schmetterling", 1],
          ["🐠 Clownfisch", 2],
          ["🐍 Schlange", 3],
          ["🐘 Elefant", 0],
          ["🐝 Biene", 1],
          ["🐙 Krake", 2],
          ["🐌 Schnecke", 3],
          ["🦇 Fledermaus", 1],
          ["🐬 Delfin", 2]
        ]
      },
      caption: "Vorsicht bei der Fledermaus: Sie ist kein Vogel, aber sie fliegt!"
    },
    {
      type: "text",
      title: "Was fressen sie?",
      html: `<ul>
<li>🐄 <b>Pflanzenfresser</b>: Sie fressen nur Pflanzen (Gras, Blätter, Früchte, Samen). Kuh, Kaninchen, Giraffe, Elefant.</li>
<li>🦁 <b>Fleischfresser</b>: Sie fressen andere Tiere. Löwe, Wolf, Hai, Adler, Spinne.</li>
<li>🐻 <b>Allesfresser</b>: Sie fressen von allem etwas. Bär, Schwein, Huhn, Igel … und auch wir Menschen!</li>
</ul>
<p>Schau dir die <b>Zähne</b> an: Pflanzenfresser haben flache Zähne zum Zermahlen von Gras, Fleischfresser spitze Zähne zum Abreißen von Fleisch.</p>`
    },
    {
      type: "svg",
      title: "Wer frisst wen: die Nahrungskette",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect x="0" y="230" width="600" height="70" fill="#a3e635"/>
<circle cx="90" cy="140" r="58" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/>
<circle cx="240" cy="140" r="58" fill="#fef9c3" stroke="#a16207" stroke-width="4"/>
<circle cx="390" cy="140" r="58" fill="#fed7aa" stroke="#c2410c" stroke-width="4"/>
<circle cx="530" cy="140" r="58" fill="#fecaca" stroke="#b91c1c" stroke-width="4"/>
<text x="90" y="155" font-size="44" text-anchor="middle">🌾</text>
<text x="240" y="155" font-size="44" text-anchor="middle">🦗</text>
<text x="390" y="155" font-size="44" text-anchor="middle">🐸</text>
<text x="530" y="155" font-size="44" text-anchor="middle">🐍</text>
<path d="M150 140 L175 140" stroke="#334155" stroke-width="5"/><polygon points="175,130 190,140 175,150" fill="#334155"/>
<path d="M300 140 L325 140" stroke="#334155" stroke-width="5"/><polygon points="325,130 340,140 325,150" fill="#334155"/>
<path d="M450 140 L462 140" stroke="#334155" stroke-width="5"/><polygon points="460,130 474,140 460,150" fill="#334155"/>
<text x="90" y="230" font-size="17" text-anchor="middle" fill="#14532d" font-weight="bold">Gras</text>
<text x="240" y="230" font-size="17" text-anchor="middle" fill="#713f12" font-weight="bold">Pflanzenfresser</text>
<text x="390" y="230" font-size="17" text-anchor="middle" fill="#7c2d12" font-weight="bold">Fleischfresser</text>
<text x="530" y="230" font-size="17" text-anchor="middle" fill="#7f1d1d" font-weight="bold">Fleischfresser</text>
<text x="300" y="45" font-size="22" text-anchor="middle" fill="#1e293b" font-weight="bold">der Pfeil bedeutet „wird gefressen von“</text>
</svg>`,
      caption: "Das Gras wird von der Heuschrecke gefressen, die Heuschrecke vom Frosch, der Frosch von der Schlange. Jedes Glied braucht das vorherige."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Bewegung und Nahrung",
      questions: [
        { type: "mc", q: "Das Kaninchen frisst nur Gras und Gemüse. Es ist ein …", options: ["Fleischfresser", "Pflanzenfresser", "Allesfresser"], answer: 1, explain: "Wer nur Pflanzen frisst, ist ein Pflanzenfresser." },
        { type: "tf", q: "Die Fledermaus fliegt.", answer: true, explain: "Die Fledermaus hat Flügel aus Haut und ist das einzige Säugetier, das richtig fliegen kann." },
        { type: "mc", q: "Wie bewegt sich der Regenwurm?", options: ["Er fliegt", "Er kriecht", "Er hüpft"], answer: 1, explain: "Der Regenwurm hat keine Beine: Er kriecht." }
      ]
    },
    {
      type: "text",
      title: "Wo leben sie?",
      html: `<p>Der Ort, an dem ein Tier lebt, heißt <b>Lebensraum</b> (oder Habitat). Jedes Tier ist für seinen Lebensraum „wie gemacht“:</p>
<ul>
<li>🌊 <b>Meer</b>: Fische, Kraken, Delfine, Wale, Quallen.</li>
<li>🌲 <b>Wald</b>: Eichhörnchen, Hirsch, Eule, Fuchs.</li>
<li>🏜️ <b>Wüste</b>: Kamel (speichert Fett im Höcker), Skorpion.</li>
<li>🧊 <b>Eis</b>: Eisbär (dichtes Fell und Fett), Pinguin.</li>
<li>⛰️ <b>Gebirge</b>: Steinbock, Gämse, Adler, Murmeltier.</li>
<li>🏡 <b>In der Nähe des Menschen</b>: Haustiere wie Hund, Katze, Kuh, Huhn.</li>
</ul>`
    },
    {
      type: "3d",
      title: "Die Tiere auf dem Globus",
      scene: "globe",
      options: {
        points: [
          { lat: -25, lon: 134, label: "🦘 Känguru (Australien)", color: "#f97316" },
          { lat: 31, lon: 104, label: "🐼 Großer Panda (China)", color: "#111827" },
          { lat: -75, lon: 0, label: "🐧 Kaiserpinguin (Antarktis)", color: "#0ea5e9" },
          { lat: 78, lon: 16, label: "🐻‍❄️ Eisbär (Arktis)", color: "#60a5fa" },
          { lat: -2, lon: 35, label: "🦁 Löwe (afrikanische Savanne)", color: "#eab308" },
          { lat: -3, lon: -60, label: "🦜 Ara-Papagei (Amazonas)", color: "#16a34a" },
          { lat: 46.5, lon: 7.5, label: "🐐 Steinbock (Alpen)", color: "#92400e" },
          { lat: 24, lon: 45, label: "🐪 Dromedar (arabische Wüste)", color: "#d97706" }
        ]
      },
      caption: "Dreh den Globus: Jedes Tier lebt in einem Lebensraum, der zu ihm passt. Das Känguru lebt nur in Australien, der Kaiserpinguin nur in der Antarktis!"
    },
    {
      type: "example",
      title: "Beispiel: die Hauskatze 🐱",
      html: `<ul>
<li><b>Wie bewegt sie sich?</b> Sie geht, rennt, springt und klettert.</li>
<li><b>Was frisst sie?</b> Sie ist ein <b>Fleischfresser</b>: Trockenfutter und Dosenfutter aus Fleisch und Fisch. Draußen jagt sie Mäuse und kleine Vögel.</li>
<li><b>Wo lebt sie?</b> Sie ist ein <b>Haustier</b>: Sie lebt bei den Menschen.</li>
<li><b>Wie wird sie geboren?</b> Aus dem Bauch der Mama: Sie ist ein <b>Säugetier</b> und trinkt Milch.</li>
</ul>`
    },
    {
      type: "example",
      title: "Beispiel: der Frosch 🐸",
      html: `<ul>
<li><b>Wie bewegt er sich?</b> Er hüpft mit seinen langen Hinterbeinen und schwimmt.</li>
<li><b>Was frisst er?</b> Insekten, die er mit der klebrigen Zunge fängt: Er ist ein <b>Fleischfresser</b>.</li>
<li><b>Wo lebt er?</b> In der Nähe von Teichen und Bächen: ein bisschen im Wasser, ein bisschen an Land.</li>
<li><b>Wie wird er geboren?</b> Aus einem <b>Ei</b>, das im Wasser gelegt wird: Zuerst ist er eine <b>Kaulquappe</b> mit Schwanz, dann wird er ein Frosch.</li>
</ul>`
    },
    {
      type: "text",
      title: "Wie werden sie geboren?",
      html: `<ul>
<li>🥚 <b>Eierlegende Tiere</b>: Sie schlüpfen aus einem <b>Ei</b>. Vögel, Fische, Frösche, Schildkröten, Schlangen, Insekten.</li>
<li>🤰 <b>Lebendgebärende Tiere</b>: Sie wachsen im <b>Bauch der Mama</b> heran und werden dann geboren. Hund, Katze, Kuh, Wal, Mensch. Diese Tiere (die <b>Säugetiere</b>) trinken die Milch der Mama.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Die Teile eines Vogels",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#e0f2fe"/>
<ellipse cx="300" cy="160" rx="120" ry="70" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
<circle cx="420" cy="100" r="45" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
<circle cx="435" cy="90" r="8" fill="#111827"/>
<polygon points="462,95 520,108 462,118" fill="#facc15" stroke="#a16207" stroke-width="3"/>
<path d="M240 140 Q300 60 360 140 Q300 120 240 140 Z" fill="#c2410c" stroke="#7c2d12" stroke-width="3"/>
<polygon points="185,150 90,120 100,170 90,210 185,175" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
<line x1="280" y1="225" x2="270" y2="280" stroke="#a16207" stroke-width="6"/>
<line x1="330" y1="225" x2="340" y2="280" stroke="#a16207" stroke-width="6"/>
<rect x="0" y="282" width="600" height="18" fill="#65a30d"/>
</svg>`,
        spots: [
          { x: 495, y: 107, label: "Schnabel" },
          { x: 300, y: 105, label: "Flügel" },
          { x: 115, y: 165, label: "Schwanz" },
          { x: 275, y: 260, label: "Beine" },
          { x: 435, y: 90, label: "Auge" },
          { x: 300, y: 190, label: "Federn" }
        ]
      },
      caption: "Klicke auf jeden Punkt und wähle den richtigen Namen. Federn haben nur Vögel!"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Die Geschwindigkeitsmeister",
      html: `<p>🐆 Der <b>Gepard</b> ist das schnellste Landtier: Im Lauf erreicht er etwa <b>100–110 km/h</b>, so schnell wie ein Auto auf der Schnellstraße!</p>
<p>🦅 Der <b>Wanderfalke</b> überschreitet im Sturzflug <b>300 km/h</b>: Er ist das schnellste Tier der Welt.</p>
<p>🐌 Die <b>Schnecke</b> dagegen schafft ungefähr 1 Meter in … 2 oder 3 Minuten!</p>`
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? Das größte Tier aller Zeiten",
      html: `<p>Der <b>Blauwal</b> 🐋 kann etwa <b>30 Meter</b> lang werden, so lang wie 3 Busse hintereinander, und so viel wiegen wie 25 Elefanten. Er ist sogar größer als die größten Dinosaurier!</p>
<p>Trotzdem frisst er winzige Tierchen, den <b>Krill</b>: kleine Krebstierchen, die er tonnenweise aus dem Wasser filtert.</p>`
    },
    {
      type: "alternatives",
      title: "Andere Wege, Tiere kennenzulernen",
      intro: "Man kann Tiere spielend, zeichnend oder als Forscherin und Forscher untersuchen.",
      tabs: [
        {
          label: "🃏 Der Steckbrief",
          html: `<p>Erfinde für jedes Tier einen <b>Steckbrief</b> mit 4 Feldern: <b>wie es sich bewegt</b> – <b>was es frisst</b> – <b>wo es lebt</b> – <b>wie es geboren wird</b>. Probiere es mit diesen Karten: Dreh sie um und prüfe nach!</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🐄 Kuh", back: "Geht · Pflanzenfresserin · Bauernhof · lebendgebärend (Säugetier)" },
              { front: "🦈 Hai", back: "Schwimmt · Fleischfresser · Meer · schlüpft aus Eiern oder wird lebend geboren, je nach Art" },
              { front: "🐔 Huhn", back: "Geht (fliegt kaum) · Allesfresserin · Bauernhof · eierlegend" },
              { front: "🐍 Viper", back: "Kriecht · Fleischfresserin · Wiesen und Berge · bringt fertig entwickelte Junge zur Welt" },
              { front: "🦋 Schmetterling", back: "Fliegt · trinkt den Nektar der Blüten · Wiesen · eierlegend (Ei → Raupe → Puppe → Schmetterling)" }
            ]
          }
        },
        {
          label: "🦴 Mit oder ohne Skelett?",
          html: `<p>Die Wissenschaftler teilen die Tiere in zwei große Familien ein:</p>
<ul>
<li><b>Wirbeltiere</b>: Sie haben das <b>Skelett</b> im Körperinneren, mit der <b>Wirbelsäule</b> (dem „Rückgrat“). Säugetiere, Vögel, Fische, Reptilien und Amphibien.</li>
<li><b>Wirbellose</b>: Sie haben keine Wirbelsäule. Insekten, Spinnen, Schnecken, Würmer, Kraken, Quallen. Sie sind die große Mehrheit der Tiere!</li>
</ul>
<p>Tast deinen Rücken ab: Spürst du die Wirbel? Dann bist du ein Wirbeltier!</p>`,
          widget: "classify",
          options: {
            groups: ["🦴 Wirbeltiere", "🐛 Wirbellose"],
            items: [["🐕 Hund", 0], ["🕷️ Spinne", 1], ["🐟 Forelle", 0], ["🐌 Schnecke", 1], ["🦎 Eidechse", 0], ["🐜 Ameise", 1], ["🦉 Eule", 0], ["🪼 Qualle", 1]]
          }
        },
        {
          label: "🔍 Zähne- und Pfoten-Detektiv",
          html: `<p>Der Körper eines Tieres „erzählt“, wie es lebt:</p>
<ul>
<li><b>Spitze Zähne und Krallen</b> → jagender Fleischfresser (Löwe, Katze).</li>
<li><b>Flache Zähne</b> → Pflanzenfresser, der Gras zermahlt (Kuh, Pferd).</li>
<li><b>Schwimmfüße</b> (mit Haut zwischen den Zehen) → schwimmt (Ente, Frosch).</li>
<li><b>Dichtes, weißes Fell</b> → lebt in der Kälte und ist im Schnee getarnt (Eisbär, Schneehase).</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fff7ed"/>
<rect x="40" y="40" width="220" height="110" rx="20" fill="#fecaca" stroke="#991b1b" stroke-width="3"/>
<polygon points="70,60 85,110 100,60" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<polygon points="200,60 215,110 230,60" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="110" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="130" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="150" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="170" y="60" width="18" height="25" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="340" y="40" width="220" height="110" rx="20" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>
<g fill="#ffffff" stroke="#475569" stroke-width="2">
<rect x="360" y="60" width="40" height="30"/><rect x="405" y="60" width="40" height="30"/><rect x="450" y="60" width="40" height="30"/><rect x="495" y="60" width="40" height="30"/>
</g>
<text x="150" y="180" font-size="20" text-anchor="middle" fill="#7f1d1d" font-weight="bold">🦁 spitze Eckzähne</text>
<text x="450" y="180" font-size="20" text-anchor="middle" fill="#14532d" font-weight="bold">🐄 flache Backenzähne</text>
<text x="300" y="212" font-size="16" text-anchor="middle" fill="#334155">Die Zähne verraten, was ein Tier frisst</text>
</svg>`
        },
        {
          label: "🌍 Rauf und runter um die Welt",
          html: `<p>Manche Tiere machen sehr weite Reisen: die <b>Wanderungen</b>. <b>Schwalben</b> verbringen den Sommer in Europa und den Winter in Afrika und fliegen dabei viele tausend Kilometer. Verfolge ihre Reise auf dem Globus.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 45, lon: 9, label: "Sommer: Italien", color: "#16a34a" },
              { lat: 37, lon: 12, label: "Sizilien", color: "#f59e0b" },
              { lat: 25, lon: 10, label: "Sahara", color: "#d97706" },
              { lat: 5, lon: 20, label: "Zentralafrika", color: "#f97316" },
              { lat: -26, lon: 28, label: "Winter: Südafrika", color: "#ef4444" }
            ],
            routes: [{ points: [0, 1, 2, 3, 4], color: "#2563eb" }]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Landkarte der Tiere: Tippe auf die Knoten und entdecke das Warum",
      nodes: [
        { id: "animali", label: "Die Tiere", x: 50, y: 6, color: "#f97316", html: "Lebewesen, die andere Lebewesen fressen müssen und sich fast immer fortbewegen.", why: "Schon der griechische Philosoph <b>Aristoteles</b> beobachtete vor mehr als 2300 Jahren Hunderte von Tieren und versuchte, sie in Gruppen einzuteilen. Im Jahr <b>1758</b> gab der Schwede <b>Carl von Linné</b> jedem Tier einen wissenschaftlichen Namen auf Latein: Die Katze heißt <i>Felis catus</i>." },
        { id: "movimento", label: "Bewegung", x: 15, y: 30, color: "#0ea5e9", html: "Gehen, hüpfen, fliegen, schwimmen, kriechen.", why: "Tiere bewegen sich, weil sie <b>Nahrung suchen</b> und vor Gefahren fliehen müssen: Pflanzen dagegen stellen ihre Nahrung selbst her, während sie stillstehen." },
        { id: "cibo", label: "Ernährung", x: 50, y: 30, color: "#ef4444", html: "Pflanzenfresser, Fleischfresser, Allesfresser.", why: "Tiere können das Sonnenlicht nicht nutzen, um Nahrung herzustellen, also holen sie sich Energie, indem sie Pflanzen oder andere Tiere fressen." },
        { id: "ambiente", label: "Lebensraum", x: 85, y: 30, color: "#16a34a", html: "Der Ort, an dem ein Tier lebt: Meer, Wald, Wüste, Eis …", why: "In Millionen von Jahren haben sich die Tiere nach und nach verändert und sich ihrem Lebensraum <b>angepasst</b>. Das erklärte der Engländer <b>Charles Darwin</b> im Jahr <b>1859</b>, nach einer langen Reise um die Welt." },
        { id: "catena", label: "Nahrungskette", x: 35, y: 55, color: "#eab308", html: "Wer frisst wen: Pflanze → Pflanzenfresser → Fleischfresser.", why: "Die Energie kommt von der Sonne, geht an die Pflanzen und dann an die Tiere. Wenn ein Glied verschwindet, hat die ganze Kette Probleme: Darum ist es wichtig, auch kleine Tiere zu schützen." },
        { id: "adattamenti", label: "Anpassungen", x: 75, y: 55, color: "#a855f7", html: "Körperteile, die „wie gemacht“ sind: Flossen, Flügel, dichtes Fell, Höcker.", why: "Tiere mit den Merkmalen, die am besten zum Lebensraum passen, überleben besser und haben mehr Junge, die diese Merkmale erben. So verändern sich die Körper von Generation zu Generation." },
        { id: "nascita", label: "Wie sie geboren werden", x: 20, y: 80, color: "#ec4899", html: "Eierlegend (aus einem Ei) und lebendgebärend (aus dem Bauch der Mama).", why: "Das Ei mit der Schale erlaubte den Reptilien vor Millionen von Jahren, weit weg vom Wasser zu leben. Säugetiere behalten das Junge im Bauch, um es besser zu schützen, und ernähren es dann mit Milch." },
        { id: "gruppi", label: "Wirbeltiere und Wirbellose", x: 65, y: 85, color: "#64748b", html: "Mit oder ohne Wirbelsäule.", why: "Das Wort „Wirbellose“ erfand der Franzose <b>Jean-Baptiste Lamarck</b> um 1800. Wirbellose machen mehr als 95 % aller Tierarten aus: vor allem Insekten!" }
      ],
      edges: [
        ["animali", "movimento", "bewegen sich durch"],
        ["animali", "cibo", "müssen fressen"],
        ["animali", "ambiente", "leben in einem"],
        ["cibo", "catena", "bildet die"],
        ["ambiente", "adattamenti", "führt zu"],
        ["adattamenti", "movimento", "Flügel, Flossen, Beine"],
        ["animali", "nascita", "pflanzen sich fort"],
        ["nascita", "gruppi", "hilft beim Einteilen in"],
        ["adattamenti", "gruppi", "Skelett"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: Lebensräume und Geburt",
      questions: [
        { type: "mc", q: "Wo lebt der Eisbär?", options: ["In der Wüste", "Im Eis", "Im Dschungel"], answer: 1, explain: "Er lebt am Nordpol, in der Arktis, im Eis." },
        { type: "tf", q: "Das Huhn ist eierlegend.", answer: true, explain: "Die Küken schlüpfen aus Eiern." },
        { type: "mc", q: "Welches Tier ist ein Säugetier?", options: ["Delfin", "Hai", "Forelle"], answer: 0, explain: "Der Delfin wird aus dem Bauch der Mama geboren, trinkt Milch und atmet Luft: Er ist ein Säugetier." }
      ]
    },
    {
      type: "remember",
      title: "Merke dir",
      html: `<ul>
<li>Tiere <b>bewegen sich</b>: Sie gehen, hüpfen, fliegen, schwimmen, kriechen.</li>
<li>Sie können <b>Pflanzenfresser</b>, <b>Fleischfresser</b> oder <b>Allesfresser</b> sein.</li>
<li>Jedes Tier lebt in seinem <b>Lebensraum</b> und ist an ihn angepasst.</li>
<li><b>Eierlegende</b> schlüpfen aus dem Ei, <b>Lebendgebärende</b> kommen aus dem Bauch der Mama.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Pflanzenfresser", d: "Tier, das nur Pflanzen frisst." },
    { t: "Fleischfresser", d: "Tier, das andere Tiere frisst." },
    { t: "Allesfresser", d: "Tier, das sowohl Pflanzen als auch Tiere frisst." },
    { t: "Lebensraum (Habitat)", d: "Der Ort, an dem ein Tier lebt." },
    { t: "Eierlegend", d: "Tier, das aus einem Ei schlüpft." },
    { t: "Lebendgebärend", d: "Tier, das im Bauch der Mama heranwächst und dann geboren wird." },
    { t: "Säugetier", d: "Tier, das als Junges die Milch der Mama trinkt." },
    { t: "Wirbeltier", d: "Tier mit einem inneren Skelett und einer Wirbelsäule." },
    { t: "Nahrungskette", d: "Reihenfolge, wer wen frisst, die bei den Pflanzen beginnt." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Wie heißt ein Tier, das nur Pflanzen frisst?", options: ["Fleischfresser", "Pflanzenfresser", "Allesfresser"], answer: 1, explain: "Pflanzenfresser: Er frisst Gras, Blätter, Früchte, Samen." },
      { type: "mc", q: "Welches Tier ist ein Fleischfresser?", options: ["Wolf", "Schaf", "Kaninchen"], answer: 0, explain: "Der Wolf jagt andere Tiere." },
      { type: "mc", q: "Wie bewegt sich die Schlange?", options: ["Sie fliegt", "Sie kriecht", "Sie hüpft"], answer: 1, explain: "Die Schlange hat keine Beine und kriecht." },
      { type: "tf", q: "Menschen sind Allesfresser.", answer: true, explain: "Wir essen pflanzliche Nahrung ebenso wie Fleisch, Fisch und Eier." },
      { type: "tf", q: "Der Hund schlüpft aus einem Ei.", answer: false, explain: "Der Hund ist ein lebendgebärendes Säugetier: Er wird aus dem Bauch der Mama geboren." },
      { type: "order", q: "Bring die Nahrungskette in die richtige Reihenfolge.", items: ["🌾 Gras", "🦗 Heuschrecke", "🐸 Frosch", "🐍 Schlange"], explain: "Das Gras wird von der Heuschrecke gefressen, die Heuschrecke vom Frosch, der Frosch von der Schlange." },
      { type: "text", q: "Wie heißt das Junge des Frosches, das im Wasser lebt und einen Schwanz hat?", answer: ["Kaulquappe", "die Kaulquappe"], explain: "Aus dem Ei schlüpft die Kaulquappe, die dann zum Frosch wird." },
      { type: "mc", q: "Wo lebt das Kamel?", options: ["In der Wüste", "Am Nordpol", "Auf dem Meeresgrund"], answer: 0, explain: "Das Kamel ist an Hitze und Wassermangel angepasst." },
      { type: "mc", q: "Welches ist das schnellste Landtier?", options: ["Das Pferd", "Der Gepard", "Die Schnecke"], answer: 1, explain: "Der Gepard erreicht etwa 100–110 km/h." },
      { type: "tf", q: "Der Schmetterling ist ein Wirbelloser.", answer: true, explain: "Insekten haben keine Wirbelsäule." },
      { type: "mc", q: "Was für Zähne hat ein Pflanzenfresser wie die Kuh?", options: ["Flache, zum Zermahlen", "Spitze, zum Abreißen", "Er hat keine Zähne"], answer: 0, explain: "Pflanzenfresser haben flache Backenzähne zum Zermahlen von Gras." }
    ]
  }
});
