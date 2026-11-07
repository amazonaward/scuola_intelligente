TOPIC('de', {
  id: "p2-ing-animals-colours",
  title: "Animals and colours",
  intro: "Hello! 👋 Heute lernen wir auf Englisch die Namen vieler <b>Tiere</b> (animals) und der <b>Farben</b> (colours). Am Ende kannst du sagen: <i>„The cat is black!“</i> 🐈‍⬛",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Colours: die Farben",
      html: "<table><tr><th>Englisch</th><th>Aussprache</th><th>Deutsch</th></tr>" +
        "<tr><td>🔴 <b>red</b></td><td>red</td><td>rot</td></tr>" +
        "<tr><td>🔵 <b>blue</b></td><td>bluh</td><td>blau</td></tr>" +
        "<tr><td>🟡 <b>yellow</b></td><td>jelo</td><td>gelb</td></tr>" +
        "<tr><td>🟢 <b>green</b></td><td>griehn</td><td>grün</td></tr>" +
        "<tr><td>🟠 <b>orange</b></td><td>orindsch</td><td>orange</td></tr>" +
        "<tr><td>🟣 <b>purple</b></td><td>pörpl</td><td>lila</td></tr>" +
        "<tr><td>🩷 <b>pink</b></td><td>pink</td><td>rosa</td></tr>" +
        "<tr><td>🟤 <b>brown</b></td><td>braun</td><td>braun</td></tr>" +
        "<tr><td>⚫ <b>black</b></td><td>bläk</td><td>schwarz</td></tr>" +
        "<tr><td>⚪ <b>white</b></td><td>wait</td><td>weiß</td></tr>" +
        "<tr><td>🩶 <b>grey</b></td><td>grei</td><td>grau</td></tr></table>"
    },
    {
      type: "svg",
      title: "The rainbow 🌈",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="300" fill="#e0f2fe"/>' +
        '<g fill="none" stroke-width="22">' +
        '<path d="M60 280 A240 240 0 0 1 540 280" stroke="#ef4444"/>' +
        '<path d="M82 280 A218 218 0 0 1 518 280" stroke="#f97316"/>' +
        '<path d="M104 280 A196 196 0 0 1 496 280" stroke="#facc15"/>' +
        '<path d="M126 280 A174 174 0 0 1 474 280" stroke="#22c55e"/>' +
        '<path d="M148 280 A152 152 0 0 1 452 280" stroke="#3b82f6"/>' +
        '<path d="M170 280 A130 130 0 0 1 430 280" stroke="#a855f7"/></g>' +
        '<g font-size="18" font-weight="bold">' +
        '<text x="300" y="30" text-anchor="middle" fill="#b91c1c">red</text>' +
        '<text x="300" y="55" text-anchor="middle" fill="#c2410c">orange</text>' +
        '<text x="300" y="78" text-anchor="middle" fill="#a16207">yellow</text>' +
        '<text x="300" y="101" text-anchor="middle" fill="#15803d">green</text>' +
        '<text x="300" y="124" text-anchor="middle" fill="#1d4ed8">blue</text>' +
        '<text x="300" y="146" text-anchor="middle" fill="#7e22ce">purple</text></g>' +
        '<text x="300" y="250" font-size="30" text-anchor="middle" font-weight="bold" fill="#0f172a">RAINBOW</text>' +
        '</svg>',
      caption: "Die Farben des Regenbogens auf Englisch. Regenbogen heißt „rainbow“."
    },
    {
      type: "quiz",
      title: "Mini-Quiz: colours",
      questions: [
        { type: "mc", q: "Wie sagt man „grün“ auf Englisch?", options: ["green", "grey", "red"], answer: 0, explain: "Grün = green." },
        { type: "mc", q: "„Yellow“ ist …", options: ["blau", "gelb", "weiß"], answer: 1, explain: "Yellow = gelb, wie die Sonne ☀️." },
        { type: "text", q: "Schreib auf Englisch: schwarz", answer: ["black"], explain: "Schwarz = black." }
      ]
    },
    {
      type: "text",
      title: "Animals: die Tiere",
      html: "<p><b>Pets</b> (Haustiere) und <b>farm animals</b> (Tiere auf dem Bauernhof):</p>" +
        "<ul><li>🐶 <b>dog</b> – Hund · 🐱 <b>cat</b> – Katze · 🐟 <b>fish</b> – Fisch · 🐦 <b>bird</b> – Vogel · 🐰 <b>rabbit</b> – Kaninchen</li>" +
        "<li>🐮 <b>cow</b> – Kuh · 🐷 <b>pig</b> – Schwein · 🐴 <b>horse</b> – Pferd · 🐑 <b>sheep</b> – Schaf · 🐔 <b>hen</b> – Huhn · 🦆 <b>duck</b> – Ente</li></ul>" +
        "<p><b>Wild animals</b> (wilde Tiere):</p>" +
        "<ul><li>🦁 <b>lion</b> – Löwe · 🐘 <b>elephant</b> – Elefant · 🐒 <b>monkey</b> – Affe · 🦒 <b>giraffe</b> – Giraffe · 🐯 <b>tiger</b> – Tiger · 🐻 <b>bear</b> – Bär</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: Dreh die Karten um",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🐶 dog", back: "Hund" },
          { front: "🐱 cat", back: "Katze" },
          { front: "🐟 fish", back: "Fisch" },
          { front: "🐦 bird", back: "Vogel" },
          { front: "🐰 rabbit", back: "Kaninchen" },
          { front: "🐮 cow", back: "Kuh" },
          { front: "🐷 pig", back: "Schwein" },
          { front: "🐴 horse", back: "Pferd" },
          { front: "🐑 sheep", back: "Schaf" },
          { front: "🦁 lion", back: "Löwe" },
          { front: "🐘 elephant", back: "Elefant" },
          { front: "🐒 monkey", back: "Affe" }
        ]
      },
      caption: "Lies das englische Wort laut vor und dreh dann die Karte um, um zu prüfen."
    },
    {
      type: "remember",
      title: "So bildet man den Satz",
      html: "<p>Im Englischen steht die Farbe <b>vor</b> dem Tier:</p>" +
        "<p>🐈‍⬛ <b>a black cat</b> = eine schwarze Katze</p>" +
        "<p>🐸 <b>a green frog</b> = ein grüner Frosch</p>" +
        "<p>So sagt man, welche Farbe etwas hat: <b>The dog is brown.</b> = Der Hund ist braun. <br>So fragt man: <b>What colour is it?</b> = Welche Farbe hat es?</p>"
    },
    {
      type: "example",
      title: "Beispiel: im Park 🌳",
      html: "<p><b>Tom:</b> Look! A dog! 🐕<br><b>Anna:</b> What colour is it?<br><b>Tom:</b> It's brown and white.<br><b>Anna:</b> And the bird? 🐦<br><b>Tom:</b> The bird is blue!</p>"
    },
    {
      type: "example",
      title: "Beispiel: I like… 💖",
      html: "<p>So sagst du, was du magst: <b>I like</b> + Tier in der Mehrzahl.</p>" +
        "<p><b>I like cats.</b> = Ich mag Katzen. 🐱<br><b>My favourite colour is red.</b> = Meine Lieblingsfarbe ist Rot. ❤️</p>"
    },
    {
      type: "widget",
      title: "Ordne Wort und Bedeutung zu",
      widget: "match",
      options: {
        pairs: [
          ["dog", "Hund"],
          ["horse", "Pferd"],
          ["sheep", "Schaf"],
          ["red", "rot"],
          ["white", "weiß"],
          ["purple", "lila"]
        ]
      },
      caption: "Klicke auf ein englisches Wort und dann auf seine Übersetzung."
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🐑",
      html: "<p>Im Englischen bleiben <b>sheep</b> (Schaf) und <b>fish</b> (Fisch) auch in der Mehrzahl gleich: <i>one sheep, two sheep</i>; <i>one fish, three fish</i>!</p>"
    },
    {
      type: "curiosity",
      title: "Wusstest du schon …? 🐮",
      html: "<p>Auch die Tierlaute sind in jeder Sprache anders! Im Englischen macht der Hund <b>„woof woof“</b>, der Hahn <b>„cock-a-doodle-doo“</b> und die Kuh <b>„moo“</b>.</p>"
    },
    {
      type: "3d",
      title: "Where do they live? Wo leben sie? 🌍",
      scene: "globe",
      options: { points: [
        { lat: -24, lon: 31.5, label: "🦁 lion", color: "#f59e0b" },
        { lat: -25, lon: 134, label: "🦘 kangaroo", color: "#ef4444" },
        { lat: 31, lon: 103, label: "🐼 panda", color: "#111827" },
        { lat: 78, lon: 16, label: "🐻‍❄️ polar bear", color: "#e5e7eb" },
        { lat: -3, lon: -60, label: "🐒 monkey", color: "#a16207" },
        { lat: 1, lon: 37, label: "🦒 giraffe", color: "#eab308" },
        { lat: -75, lon: 0, label: "🐧 penguin", color: "#0f172a" }
      ] },
      caption: "Dreh den Globus und finde die wilden Tiere (wild animals): Jedes lebt in seiner eigenen Umgebung. Sprich ihre englischen Namen laut aus!"
    },
    {
      type: "alternatives",
      title: "Andere Wege, sich die Wörter zu merken 🌈",
      intro: "<p>Jeder lernt anders: Manche merken sich Dinge besser durchs Singen, andere durchs Anschauen von Bildern, wieder andere beim Spielen. Probier alle Wege aus!</p>",
      tabs: [
        {
          label: "🎵 Sing den Reim",
          html: "<p>Wörter mit Musik bleiben im Kopf! Sing diesen Reim und klatsch dazu in die Hände:</p><p style=\"font-size:1.2em\"><b>Red</b> is the ladybird 🐞,<br><b>Yellow</b> is the chick 🐥,<br><b>Green</b> is the little frog 🐸,<br>Jump, jump, quick, quick!</p><p><b>Blue</b> is the big whale 🐳,<br><b>Pink</b> is the pig 🐷,<br><b>Black</b> and <b>white</b> the zebra 🦓,<br>Dance a little jig!</p>"
        },
        {
          label: "🖼️ Anschauen und verbinden",
          html: "<p>Jedes Wort hat sein Bild. Schau dir das Bild an und sag das Wort auf Englisch, ohne an das Deutsche zu denken!</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f8fafc"/><g font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle"><circle cx="75" cy="80" r="50" fill="#ef4444"/><text x="75" y="95" font-size="44">🐞</text><text x="75" y="165" fill="#ef4444">red</text><circle cx="225" cy="80" r="50" fill="#facc15"/><text x="225" y="95" font-size="44">🐥</text><text x="225" y="165" fill="#a16207">yellow</text><circle cx="375" cy="80" r="50" fill="#22c55e"/><text x="375" y="95" font-size="44">🐸</text><text x="375" y="165" fill="#15803d">green</text><circle cx="525" cy="80" r="50" fill="#3b82f6"/><text x="525" y="95" font-size="44">🐳</text><text x="525" y="165" fill="#1d4ed8">blue</text><text x="300" y="215" fill="#334155">a red ladybird · a yellow chick · a green frog · a blue whale</text></g></svg>`
        },
        {
          label: "🔗 Zwillingswörter",
          html: "<p>Viele englische Wörter sehen deutschen Wörtern ähnlich, weil Englisch und Deutsch verwandte Sprachen sind (und manche Wörter aus dem <b>Lateinischen</b> kommen):</p><ul><li>🐘 <b>elephant</b> → Elefant</li><li>🦒 <b>giraffe</b> → Giraffe</li><li>🐟 <b>fish</b> → Fisch</li><li>🐯 <b>tiger</b> → Tiger</li><li>🐬 <b>dolphin</b> → Delfin</li></ul><p>Vorsicht vor <b>falschen Freunden</b>! <b>Gift</b> ist kein Gift, sondern ein „Geschenk“ 😄.</p>"
        },
        {
          label: "🕵️ Das Spiel „I spy“",
          html: "<p>In England spielen Kinder <b>I spy</b> (Ich spähe): Einer sagt <i>„I spy with my little eye something… <b>red</b>!“</i> und die anderen müssen einen roten Gegenstand im Zimmer erraten. Das ist wie unser „Ich sehe was, was du nicht siehst“.</p><p>Spiel es mit deiner Familie und benutze die Farben auf Englisch! Probier es dann mit Tieren: <i>„I spy an animal… it's <b>grey</b> and very big!“</i> → elephant 🐘</p>"
        },
        {
          label: "🃏 Karten zum Umdrehen",
          html: "<p>Schau dir das Bild an, sag das Wort und dreh dann die Karte um, um zu prüfen.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "🐄", back: "cow – Kuh" },
            { front: "🐑", back: "sheep – Schaf" },
            { front: "🐔", back: "hen – Huhn" },
            { front: "🐟", back: "fish – Fisch" },
            { front: "🟠", back: "orange – orange" },
            { front: "🟣", back: "purple – lila" },
            { front: "🟤", back: "brown – braun" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Die Landkarte von Animals and colours 🗺️",
      nodes: [
        { id: "english", label: "English words", x: 50, y: 6, color: "#8b5cf6", html: "<p>Heute haben wir zwei Wortgruppen gelernt: die <b>Tiere</b> und die <b>Farben</b>.</p>", why: "<p>Englisch wird auf der ganzen Welt gesprochen. Viele englische Wörter stammen aus alten germanischen Sprachen, andere aus dem Lateinischen und dem Französischen: Darum sehen manche Wörter dem Deutschen ähnlich!</p>" },
        { id: "animals", label: "Animals", x: 22, y: 30, color: "#f59e0b", html: "<p>Cat, dog, cow, horse, lion, elephant …</p>", why: "<p>Die Tiere auf dem Bauernhof haben sehr alte englische Namen (cow, pig, sheep). Interessant: Das Fleisch dagegen hat Namen aus dem Französischen (beef, pork), weil die Herren in England vor langer Zeit Französisch sprachen!</p>" },
        { id: "colours", label: "Colours", x: 78, y: 30, color: "#ef4444", html: "<p>Red, blue, green, yellow, black, white …</p>", why: "<p>In England schreibt man <b>colour</b>, in den Vereinigten Staaten <b>color</b>: Es ist dasselbe Wort, das vom lateinischen „color“ kommt.</p>" },
        { id: "pets", label: "Pets", x: 6, y: 55, color: "#fb923c", html: "<p>Haustiere: cat, dog, fish, rabbit.</p>", why: "<p>Pet bedeutet „Haustier“: Es lebt bei uns zu Hause.</p>" },
        { id: "farm", label: "Farm animals", x: 22, y: 60, color: "#84cc16", html: "<p>Tiere auf dem Bauernhof: cow, pig, hen, sheep, horse.</p>", why: "<p>Farm = Bauernhof. Diese Tiere helfen den Menschen oder liefern Nahrung wie Milch und Eier.</p>" },
        { id: "wild", label: "Wild animals", x: 38, y: 55, color: "#ca8a04", html: "<p>Wilde Tiere: lion, elephant, monkey, giraffe.</p>", why: "<p>Wild = wild: Sie leben frei in der Natur, in der Savanne, im Dschungel oder am Pol.</p>" },
        { id: "order", label: "a + colour + animal", x: 60, y: 62, color: "#0ea5e9", html: "<p>Im Englischen steht die Farbe <b>vor</b> dem Tier: <b>a black cat</b> = eine schwarze Katze.</p>", why: "<p>Jede Sprache hat ihre eigenen Regeln für die Wortstellung. Im Englischen steht das Adjektiv (das Wort, das beschreibt) fast immer <b>vor</b> dem Nomen. Im Deutschen ist es genauso: eine schwarze Katze.</p>" },
        { id: "question", label: "What colour is it?", x: 85, y: 62, color: "#ec4899", html: "<p>Frage: <b>What colour is it?</b> Antwort: <b>It's green.</b></p>", why: "<p>Im Englischen fragen Fragen mit „what“ nach einer Information: what colour = welche Farbe.</p>" },
        { id: "like", label: "I like…", x: 50, y: 90, color: "#22c55e", html: "<p><b>I like dogs</b> = Ich mag Hunde. <b>I don't like spiders</b> = Ich mag keine Spinnen.</p>", why: "<p>Mit „I like“ sprichst du über das, was du magst. Beachte, dass man „dogs“ in der Mehrzahl sagt, wenn man über Hunde im Allgemeinen spricht.</p>" }
      ],
      edges: [
        ["english", "animals", ""],
        ["english", "colours", ""],
        ["animals", "pets", "zu Hause"],
        ["animals", "farm", "auf dem Bauernhof"],
        ["animals", "wild", "in der Natur"],
        ["colours", "order", "vor dem Nomen"],
        ["animals", "order", ""],
        ["colours", "question", "fragt man mit"],
        ["order", "like", "um über Vorlieben zu sprechen"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-Quiz: animals",
      questions: [
        { type: "mc", q: "🐴 Auf Englisch sagt man …", options: ["horse", "house", "hen"], answer: 0, explain: "Pferd = horse." },
        { type: "mc", q: "Wie sagt man „eine schwarze Katze“?", options: ["a cat black", "a black cat", "black a cat"], answer: 1, explain: "Die Farbe steht vorn: a black cat." },
        { type: "tf", q: "„Elephant“ bedeutet Elefant.", answer: true, explain: "Genau! 🐘" }
      ]
    }
  ],
  glossary: [
    { t: "Animals", d: "Tiere." },
    { t: "Colours", d: "Farben (im amerikanischen Englisch schreibt man „colors“)." },
    { t: "Pets", d: "Haustiere." },
    { t: "Farm animals", d: "Tiere auf dem Bauernhof." },
    { t: "Wild animals", d: "Wilde Tiere." },
    { t: "What colour is it?", d: "Welche Farbe hat es?" },
    { t: "I like…", d: "Ich mag …" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🐷 heißt auf Englisch …", options: ["pig", "dog", "cow"], answer: 0, explain: "Schwein = pig." },
      { type: "mc", q: "„Blue“ bedeutet …", options: ["blau", "schwarz", "braun"], answer: 0, explain: "Blue = blau." },
      { type: "text", q: "Schreib auf Englisch: Hund", answer: ["dog", "a dog"], explain: "Hund = dog." },
      { type: "text", q: "Schreib auf Englisch: rot", answer: ["red"], explain: "Rot = red." },
      { type: "mc", q: "Wie sagt man „ein grüner Frosch“?", options: ["a green frog", "a frog green", "green a frog"], answer: 0, explain: "Farbe vor dem Tier: a green frog." },
      { type: "tf", q: "„Monkey“ bedeutet Affe.", answer: true, explain: "Ja, monkey = Affe 🐒." },
      { type: "tf", q: "„White“ bedeutet schwarz.", answer: false, explain: "Nein: white = weiß, black = schwarz." },
      { type: "mc", q: "Was bedeutet „What colour is it?“", options: ["Welches Tier ist es?", "Welche Farbe hat es?", "Wie alt bist du?"], answer: 1, explain: "What colour is it? = Welche Farbe hat es?" },
      { type: "mc", q: "Welches ist ein wildes Tier (wild)?", options: ["cat", "lion", "hen"], answer: 1, explain: "Der Löwe (lion) ist ein wildes Tier." },
      { type: "mc", q: "„I like dogs“ bedeutet …", options: ["Ich habe einen Hund", "Ich mag Hunde", "Der Hund ist groß"], answer: 1, explain: "I like = ich mag." }
    ]
  }
});
