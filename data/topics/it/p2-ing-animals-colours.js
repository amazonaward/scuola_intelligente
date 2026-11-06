TOPIC('it', {
  id: "p2-ing-animals-colours",
  title: "Animals and colours",
  intro: "Hello! 👋 Oggi impariamo in inglese i nomi di tanti <b>animali</b> (animals) e dei <b>colori</b> (colours). Alla fine saprai dire: <i>«The cat is black!»</i> 🐈‍⬛",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Colours: i colori",
      html: "<table><tr><th>Inglese</th><th>Si pronuncia</th><th>Italiano</th></tr>" +
        "<tr><td>🔴 <b>red</b></td><td>red</td><td>rosso</td></tr>" +
        "<tr><td>🔵 <b>blue</b></td><td>blu</td><td>blu</td></tr>" +
        "<tr><td>🟡 <b>yellow</b></td><td>iè-lou</td><td>giallo</td></tr>" +
        "<tr><td>🟢 <b>green</b></td><td>griin</td><td>verde</td></tr>" +
        "<tr><td>🟠 <b>orange</b></td><td>ò-rinj</td><td>arancione</td></tr>" +
        "<tr><td>🟣 <b>purple</b></td><td>pèr-pol</td><td>viola</td></tr>" +
        "<tr><td>🩷 <b>pink</b></td><td>pink</td><td>rosa</td></tr>" +
        "<tr><td>🟤 <b>brown</b></td><td>braun</td><td>marrone</td></tr>" +
        "<tr><td>⚫ <b>black</b></td><td>blek</td><td>nero</td></tr>" +
        "<tr><td>⚪ <b>white</b></td><td>uait</td><td>bianco</td></tr>" +
        "<tr><td>🩶 <b>grey</b></td><td>grei</td><td>grigio</td></tr></table>"
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
      caption: "I colori dell'arcobaleno in inglese. Arcobaleno si dice «rainbow»."
    },
    {
      type: "quiz",
      title: "Mini-quiz: colours",
      questions: [
        { type: "mc", q: "Come si dice «verde» in inglese?", options: ["green", "grey", "red"], answer: 0, explain: "Verde = green." },
        { type: "mc", q: "«Yellow» è…", options: ["blu", "giallo", "bianco"], answer: 1, explain: "Yellow = giallo, come il sole ☀️." },
        { type: "text", q: "Scrivi in inglese: nero", answer: ["black"], explain: "Nero = black." }
      ]
    },
    {
      type: "text",
      title: "Animals: gli animali",
      html: "<p><b>Pets</b> (animali di casa) e <b>farm animals</b> (animali della fattoria):</p>" +
        "<ul><li>🐶 <b>dog</b> – cane · 🐱 <b>cat</b> – gatto · 🐟 <b>fish</b> – pesce · 🐦 <b>bird</b> – uccello · 🐰 <b>rabbit</b> – coniglio</li>" +
        "<li>🐮 <b>cow</b> – mucca · 🐷 <b>pig</b> – maiale · 🐴 <b>horse</b> – cavallo · 🐑 <b>sheep</b> – pecora · 🐔 <b>hen</b> – gallina · 🦆 <b>duck</b> – anatra</li></ul>" +
        "<p><b>Wild animals</b> (animali selvatici):</p>" +
        "<ul><li>🦁 <b>lion</b> – leone · 🐘 <b>elephant</b> – elefante · 🐒 <b>monkey</b> – scimmia · 🦒 <b>giraffe</b> – giraffa · 🐯 <b>tiger</b> – tigre · 🐻 <b>bear</b> – orso</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: gira le carte",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🐶 dog", back: "cane" },
          { front: "🐱 cat", back: "gatto" },
          { front: "🐟 fish", back: "pesce" },
          { front: "🐦 bird", back: "uccello" },
          { front: "🐰 rabbit", back: "coniglio" },
          { front: "🐮 cow", back: "mucca" },
          { front: "🐷 pig", back: "maiale" },
          { front: "🐴 horse", back: "cavallo" },
          { front: "🐑 sheep", back: "pecora" },
          { front: "🦁 lion", back: "leone" },
          { front: "🐘 elephant", back: "elefante" },
          { front: "🐒 monkey", back: "scimmia" }
        ]
      },
      caption: "Leggi la parola inglese ad alta voce, poi gira la carta per controllare."
    },
    {
      type: "remember",
      title: "Come si fa la frase",
      html: "<p>In inglese il colore va <b>prima</b> dell'animale:</p>" +
        "<p>🐈‍⬛ <b>a black cat</b> = un gatto nero</p>" +
        "<p>🐸 <b>a green frog</b> = una rana verde</p>" +
        "<p>Per dire di che colore è: <b>The dog is brown.</b> = Il cane è marrone. <br>Per chiedere: <b>What colour is it?</b> = Di che colore è?</p>"
    },
    {
      type: "example",
      title: "Esempio: al parco 🌳",
      html: "<p><b>Tom:</b> Look! A dog! 🐕<br><b>Anna:</b> What colour is it?<br><b>Tom:</b> It's brown and white.<br><b>Anna:</b> And the bird? 🐦<br><b>Tom:</b> The bird is blue!</p>"
    },
    {
      type: "example",
      title: "Esempio: I like… 💖",
      html: "<p>Per dire cosa ti piace: <b>I like</b> + animale al plurale.</p>" +
        "<p><b>I like cats.</b> = Mi piacciono i gatti. 🐱<br><b>My favourite colour is red.</b> = Il mio colore preferito è il rosso. ❤️</p>"
    },
    {
      type: "widget",
      title: "Abbina parola e significato",
      widget: "match",
      options: {
        pairs: [
          ["dog", "cane"],
          ["horse", "cavallo"],
          ["sheep", "pecora"],
          ["red", "rosso"],
          ["white", "bianco"],
          ["purple", "viola"]
        ]
      },
      caption: "Clicca una parola inglese e poi la sua traduzione."
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐑",
      html: "<p>In inglese <b>sheep</b> (pecora) e <b>fish</b> (pesce) restano uguali anche al plurale: <i>one sheep, two sheep</i>; <i>one fish, three fish</i>!</p>"
    },
    {
      type: "curiosity",
      title: "Lo sapevi che…? 🐮",
      html: "<p>Anche i versi degli animali cambiano lingua! In inglese il cane fa <b>«woof woof»</b>, il gallo fa <b>«cock-a-doodle-doo»</b> e la mucca fa <b>«moo»</b>.</p>"
    },
    {
      type: "3d",
      title: "Where do they live? Dove vivono? 🌍",
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
      caption: "Gira il globo e trova gli animali selvatici (wild animals): ognuno vive nel suo ambiente. Prova a dire ad alta voce il loro nome in inglese!"
    },
    {
      type: "alternatives",
      title: "Altri modi per ricordare le parole 🌈",
      intro: "<p>Ognuno impara in modo diverso: c'è chi ricorda meglio cantando, chi guardando le immagini, chi giocando. Prova tutti i modi!</p>",
      tabs: [
        {
          label: "🎵 Canta la rima",
          html: "<p>Le parole con la musica restano in testa! Canta questa filastrocca battendo le mani:</p><p style=\"font-size:1.2em\"><b>Red</b> is the ladybird 🐞,<br><b>Yellow</b> is the chick 🐥,<br><b>Green</b> is the little frog 🐸,<br>Jump, jump, quick, quick!</p><p><b>Blue</b> is the big whale 🐳,<br><b>Pink</b> is the pig 🐷,<br><b>Black</b> and <b>white</b> the zebra 🦓,<br>Dance a little jig!</p>"
        },
        {
          label: "🖼️ Guarda e collega",
          html: "<p>Ogni parola ha il suo disegno. Guarda l'immagine e di' la parola in inglese, senza pensare all'italiano!</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f8fafc"/><g font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle"><circle cx="75" cy="80" r="50" fill="#ef4444"/><text x="75" y="95" font-size="44">🐞</text><text x="75" y="165" fill="#ef4444">red</text><circle cx="225" cy="80" r="50" fill="#facc15"/><text x="225" y="95" font-size="44">🐥</text><text x="225" y="165" fill="#a16207">yellow</text><circle cx="375" cy="80" r="50" fill="#22c55e"/><text x="375" y="95" font-size="44">🐸</text><text x="375" y="165" fill="#15803d">green</text><circle cx="525" cy="80" r="50" fill="#3b82f6"/><text x="525" y="95" font-size="44">🐳</text><text x="525" y="165" fill="#1d4ed8">blue</text><text x="300" y="215" fill="#334155">a red ladybird · a yellow chick · a green frog · a blue whale</text></g></svg>`
        },
        {
          label: "🔗 Parole gemelle",
          html: "<p>Molte parole inglesi somigliano all'italiano perché vengono dal <b>latino</b>:</p><ul><li>🐘 <b>elephant</b> → elefante</li><li>🦒 <b>giraffe</b> → giraffa</li><li>🦁 <b>lion</b> → leone</li><li>🐯 <b>tiger</b> → tigre</li><li>🐬 <b>dolphin</b> → delfino</li></ul><p>Attenzione ai <b>falsi amici</b>! <b>Fan</b> non è un animale: vuol dire «tifoso» o «ventilatore» 😄.</p>"
        },
        {
          label: "🕵️ Gioco «I spy»",
          html: "<p>In Inghilterra i bambini giocano a <b>I spy</b> (Io spio): uno dice <i>«I spy with my little eye something… <b>red</b>!»</i> e gli altri devono indovinare un oggetto rosso nella stanza.</p><p>Giocalo con la tua famiglia usando i colori in inglese! Poi prova con gli animali: <i>«I spy an animal… it's <b>grey</b> and very big!»</i> → elephant 🐘</p>"
        },
        {
          label: "🃏 Carte da girare",
          html: "<p>Guarda l'immagine, di' la parola e poi gira la carta per controllare.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "🐄", back: "cow – mucca" },
            { front: "🐑", back: "sheep – pecora" },
            { front: "🐔", back: "hen – gallina" },
            { front: "🐟", back: "fish – pesce" },
            { front: "🟠", back: "orange – arancione" },
            { front: "🟣", back: "purple – viola" },
            { front: "🟤", back: "brown – marrone" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La mappa di Animals and colours 🗺️",
      nodes: [
        { id: "english", label: "English words", x: 50, y: 6, color: "#8b5cf6", html: "<p>Oggi abbiamo imparato due gruppi di parole: gli <b>animali</b> e i <b>colori</b>.</p>", why: "<p>L'inglese è parlato in tutto il mondo. Molte sue parole vengono dal tedesco antico, altre dal latino e dal francese: per questo alcune parole somigliano all'italiano!</p>" },
        { id: "animals", label: "Animals", x: 22, y: 30, color: "#f59e0b", html: "<p>Cat, dog, cow, horse, lion, elephant…</p>", why: "<p>Gli animali della fattoria hanno nomi inglesi molto antichi (cow, pig, sheep). Curiosità: la carne invece ha nomi che vengono dal francese (beef, pork), perché tanto tempo fa in Inghilterra i signori parlavano francese!</p>" },
        { id: "colours", label: "Colours", x: 78, y: 30, color: "#ef4444", html: "<p>Red, blue, green, yellow, black, white…</p>", why: "<p>In Inghilterra si scrive <b>colour</b>, negli Stati Uniti <b>color</b>: sono la stessa parola, che viene dal latino «color».</p>" },
        { id: "pets", label: "Pets", x: 6, y: 55, color: "#fb923c", html: "<p>Animali di casa: cat, dog, fish, rabbit.</p>", why: "<p>Pet vuol dire «animale da compagnia»: vive con noi in casa.</p>" },
        { id: "farm", label: "Farm animals", x: 22, y: 60, color: "#84cc16", html: "<p>Animali della fattoria: cow, pig, hen, sheep, horse.</p>", why: "<p>Farm = fattoria. Questi animali aiutano le persone o danno cibo come latte e uova.</p>" },
        { id: "wild", label: "Wild animals", x: 38, y: 55, color: "#ca8a04", html: "<p>Animali selvatici: lion, elephant, monkey, giraffe.</p>", why: "<p>Wild = selvatico: vivono liberi nella natura, nella savana, nella giungla o al Polo.</p>" },
        { id: "order", label: "a + colour + animal", x: 60, y: 62, color: "#0ea5e9", html: "<p>In inglese il colore va <b>prima</b>: <b>a black cat</b> = un gatto nero.</p>", why: "<p>Ogni lingua ha le sue regole d'ordine. In inglese l'aggettivo (la parola che descrive) sta quasi sempre <b>prima</b> del nome. In italiano di solito sta dopo.</p>" },
        { id: "question", label: "What colour is it?", x: 85, y: 62, color: "#ec4899", html: "<p>Domanda: <b>What colour is it?</b> Risposta: <b>It's green.</b></p>", why: "<p>In inglese le domande con «what» chiedono un'informazione: what colour = che colore.</p>" },
        { id: "like", label: "I like…", x: 50, y: 90, color: "#22c55e", html: "<p><b>I like dogs</b> = Mi piacciono i cani. <b>I don't like spiders</b> = Non mi piacciono i ragni.</p>", why: "<p>Con «I like» parli dei tuoi gusti. Nota che si dice «dogs» al plurale quando parli dei cani in generale.</p>" }
      ],
      edges: [
        ["english", "animals", ""],
        ["english", "colours", ""],
        ["animals", "pets", "a casa"],
        ["animals", "farm", "in fattoria"],
        ["animals", "wild", "nella natura"],
        ["colours", "order", "prima del nome"],
        ["animals", "order", ""],
        ["colours", "question", "si chiede con"],
        ["order", "like", "per parlare dei gusti"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: animals",
      questions: [
        { type: "mc", q: "🐴 In inglese si dice…", options: ["horse", "house", "hen"], answer: 0, explain: "Cavallo = horse." },
        { type: "mc", q: "Come si dice «un gatto nero»?", options: ["a cat black", "a black cat", "black a cat"], answer: 1, explain: "Il colore va prima: a black cat." },
        { type: "tf", q: "«Elephant» vuol dire elefante.", answer: true, explain: "Esatto! 🐘" }
      ]
    }
  ],
  glossary: [
    { t: "Animals", d: "Animali." },
    { t: "Colours", d: "Colori (in americano si scrive «colors»)." },
    { t: "Pets", d: "Animali domestici." },
    { t: "Farm animals", d: "Animali della fattoria." },
    { t: "Wild animals", d: "Animali selvatici." },
    { t: "What colour is it?", d: "Di che colore è?" },
    { t: "I like…", d: "Mi piace / mi piacciono…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🐷 si dice…", options: ["pig", "dog", "cow"], answer: 0, explain: "Maiale = pig." },
      { type: "mc", q: "«Blue» significa…", options: ["blu", "nero", "marrone"], answer: 0, explain: "Blue = blu." },
      { type: "text", q: "Scrivi in inglese: cane", answer: ["dog", "a dog"], explain: "Cane = dog." },
      { type: "text", q: "Scrivi in inglese: rosso", answer: ["red"], explain: "Rosso = red." },
      { type: "mc", q: "Come si dice «una rana verde»?", options: ["a green frog", "a frog green", "green a frog"], answer: 0, explain: "Colore prima dell'animale: a green frog." },
      { type: "tf", q: "«Monkey» vuol dire scimmia.", answer: true, explain: "Sì, monkey = scimmia 🐒." },
      { type: "tf", q: "«White» vuol dire nero.", answer: false, explain: "No: white = bianco, black = nero." },
      { type: "mc", q: "Cosa vuol dire «What colour is it?»", options: ["Che animale è?", "Di che colore è?", "Quanti anni hai?"], answer: 1, explain: "What colour is it? = Di che colore è?" },
      { type: "mc", q: "Quale è un animale selvatico (wild)?", options: ["cat", "lion", "hen"], answer: 1, explain: "Il leone (lion) è un animale selvatico." },
      { type: "mc", q: "«I like dogs» significa…", options: ["Ho un cane", "Mi piacciono i cani", "Il cane è grande"], answer: 1, explain: "I like = mi piace / mi piacciono." }
    ]
  }
});
