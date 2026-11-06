TOPIC('en', {
  id: "p2-ing-animals-colours",
  title: "Animals and colours",
  intro: "Hello! 👋 Today we learn the English names of lots of <b>animals</b> and <b>colours</b>, with their Italian translation. By the end you will be able to say: <i>«The cat is black!»</i> 🐈‍⬛",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Colours",
      html: "<table><tr><th>English</th><th>How to say it</th><th>Italian</th></tr>" +
        "<tr><td>🔴 <b>red</b></td><td>red</td><td>rosso</td></tr>" +
        "<tr><td>🔵 <b>blue</b></td><td>bloo</td><td>blu</td></tr>" +
        "<tr><td>🟡 <b>yellow</b></td><td>yel-oh</td><td>giallo</td></tr>" +
        "<tr><td>🟢 <b>green</b></td><td>green</td><td>verde</td></tr>" +
        "<tr><td>🟠 <b>orange</b></td><td>or-inj</td><td>arancione</td></tr>" +
        "<tr><td>🟣 <b>purple</b></td><td>pur-pul</td><td>viola</td></tr>" +
        "<tr><td>🩷 <b>pink</b></td><td>pink</td><td>rosa</td></tr>" +
        "<tr><td>🟤 <b>brown</b></td><td>brown</td><td>marrone</td></tr>" +
        "<tr><td>⚫ <b>black</b></td><td>black</td><td>nero</td></tr>" +
        "<tr><td>⚪ <b>white</b></td><td>wite</td><td>bianco</td></tr>" +
        "<tr><td>🩶 <b>grey</b></td><td>gray</td><td>grigio</td></tr></table>"
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
      caption: "The colours of the rainbow in English. In Italian a rainbow is called «arcobaleno»."
    },
    {
      type: "quiz",
      title: "Mini-quiz: colours",
      questions: [
        { type: "mc", q: "How do you say «verde» in English?", options: ["green", "grey", "red"], answer: 0, explain: "Verde = green." },
        { type: "mc", q: "«Yellow» in Italian is…", options: ["blu", "giallo", "bianco"], answer: 1, explain: "Yellow = giallo, like the sun ☀️." },
        { type: "text", q: "Write in English: nero", answer: ["black"], explain: "Nero = black." }
      ]
    },
    {
      type: "text",
      title: "Animals",
      html: "<p><b>Pets</b> and <b>farm animals</b>:</p>" +
        "<ul><li>🐶 <b>dog</b> – cane · 🐱 <b>cat</b> – gatto · 🐟 <b>fish</b> – pesce · 🐦 <b>bird</b> – uccello · 🐰 <b>rabbit</b> – coniglio</li>" +
        "<li>🐮 <b>cow</b> – mucca · 🐷 <b>pig</b> – maiale · 🐴 <b>horse</b> – cavallo · 🐑 <b>sheep</b> – pecora · 🐔 <b>hen</b> – gallina · 🦆 <b>duck</b> – anatra</li></ul>" +
        "<p><b>Wild animals</b>:</p>" +
        "<ul><li>🦁 <b>lion</b> – leone · 🐘 <b>elephant</b> – elefante · 🐒 <b>monkey</b> – scimmia · 🦒 <b>giraffe</b> – giraffa · 🐯 <b>tiger</b> – tigre · 🐻 <b>bear</b> – orso</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: flip the cards",
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
      caption: "Read the English word out loud, then flip the card to see the Italian word."
    },
    {
      type: "remember",
      title: "How to build the sentence",
      html: "<p>In English the colour comes <b>before</b> the animal (in Italian it comes after):</p>" +
        "<p>🐈‍⬛ <b>a black cat</b> = un gatto nero</p>" +
        "<p>🐸 <b>a green frog</b> = una rana verde</p>" +
        "<p>To say what colour it is: <b>The dog is brown.</b> = Il cane è marrone. <br>To ask: <b>What colour is it?</b> = Di che colore è?</p>"
    },
    {
      type: "example",
      title: "Example: at the park 🌳",
      html: "<p><b>Tom:</b> Look! A dog! 🐕<br><b>Anna:</b> What colour is it?<br><b>Tom:</b> It's brown and white.<br><b>Anna:</b> And the bird? 🐦<br><b>Tom:</b> The bird is blue!</p>"
    },
    {
      type: "example",
      title: "Example: I like… 💖",
      html: "<p>To say what you like: <b>I like</b> + the animal in the plural.</p>" +
        "<p><b>I like cats.</b> = Mi piacciono i gatti. 🐱<br><b>My favourite colour is red.</b> = Il mio colore preferito è il rosso. ❤️</p>"
    },
    {
      type: "widget",
      title: "Match the word and its meaning",
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
      caption: "Click an English word and then its Italian translation."
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐑",
      html: "<p>In English <b>sheep</b> and <b>fish</b> stay the same in the plural: <i>one sheep, two sheep</i>; <i>one fish, three fish</i>!</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐮",
      html: "<p>Animal sounds change with the language too! In English a dog goes <b>«woof woof»</b>, a rooster goes <b>«cock-a-doodle-doo»</b> and a cow goes <b>«moo»</b>. In Italian the dog says «bau bau» and the rooster «chicchirichì».</p>"
    },
    {
      type: "3d",
      title: "Where do they live? 🌍",
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
      caption: "Turn the globe and find the wild animals: each one lives in its own habitat. Try saying their names out loud!"
    },
    {
      type: "alternatives",
      title: "Other ways to remember the words 🌈",
      intro: "<p>Everyone learns in a different way: some remember better by singing, some by looking at pictures, some by playing. Try them all!</p>",
      tabs: [
        {
          label: "🎵 Sing the rhyme",
          html: "<p>Words with music stay in your head! Sing this rhyme while clapping your hands:</p><p style=\"font-size:1.2em\"><b>Red</b> is the ladybird 🐞,<br><b>Yellow</b> is the chick 🐥,<br><b>Green</b> is the little frog 🐸,<br>Jump, jump, quick, quick!</p><p><b>Blue</b> is the big whale 🐳,<br><b>Pink</b> is the pig 🐷,<br><b>Black</b> and <b>white</b> the zebra 🦓,<br>Dance a little jig!</p>"
        },
        {
          label: "🖼️ Look and connect",
          html: "<p>Every word has its own picture. Look at the picture and say the word in English, without thinking of another language!</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f8fafc"/><g font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle"><circle cx="75" cy="80" r="50" fill="#ef4444"/><text x="75" y="95" font-size="44">🐞</text><text x="75" y="165" fill="#ef4444">red</text><circle cx="225" cy="80" r="50" fill="#facc15"/><text x="225" y="95" font-size="44">🐥</text><text x="225" y="165" fill="#a16207">yellow</text><circle cx="375" cy="80" r="50" fill="#22c55e"/><text x="375" y="95" font-size="44">🐸</text><text x="375" y="165" fill="#15803d">green</text><circle cx="525" cy="80" r="50" fill="#3b82f6"/><text x="525" y="95" font-size="44">🐳</text><text x="525" y="165" fill="#1d4ed8">blue</text><text x="300" y="215" fill="#334155">a red ladybird · a yellow chick · a green frog · a blue whale</text></g></svg>`
        },
        {
          label: "🔗 Twin words",
          html: "<p>Many English words look like Italian words because they come from <b>Latin</b>:</p><ul><li>🐘 <b>elephant</b> → elefante</li><li>🦒 <b>giraffe</b> → giraffa</li><li>🦁 <b>lion</b> → leone</li><li>🐯 <b>tiger</b> → tigre</li><li>🐬 <b>dolphin</b> → delfino</li></ul><p>Watch out for <b>false friends</b>! <b>Fan</b> is not an animal: it means a supporter or a machine that blows air 😄.</p>"
        },
        {
          label: "🕵️ «I spy» game",
          html: "<p>In England children play <b>I spy</b>: one says <i>«I spy with my little eye something… <b>red</b>!»</i> and the others must guess a red object in the room.</p><p>Play it with your family using colours! Then try with animals: <i>«I spy an animal… it's <b>grey</b> and very big!»</i> → elephant 🐘</p>"
        },
        {
          label: "🃏 Flip cards",
          html: "<p>Look at the picture, say the word and then flip the card to check.</p>",
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
      title: "The map of Animals and colours 🗺️",
      nodes: [
        { id: "english", label: "English words", x: 50, y: 6, color: "#8b5cf6", html: "<p>Today we learnt two groups of words: <b>animals</b> and <b>colours</b>.</p>", why: "<p>English is spoken all over the world. Many of its words come from old German, others from Latin and French: that's why some words look like Italian ones!</p>" },
        { id: "animals", label: "Animals", x: 22, y: 30, color: "#f59e0b", html: "<p>Cat, dog, cow, horse, lion, elephant…</p>", why: "<p>Farm animals have very old English names (cow, pig, sheep). Fun fact: their meat has names that come from French (beef, pork), because long ago the lords in England spoke French!</p>" },
        { id: "colours", label: "Colours", x: 78, y: 30, color: "#ef4444", html: "<p>Red, blue, green, yellow, black, white…</p>", why: "<p>In Britain you write <b>colour</b>, in the United States <b>color</b>: it is the same word, which comes from the Latin «color».</p>" },
        { id: "pets", label: "Pets", x: 6, y: 55, color: "#fb923c", html: "<p>Animals that live at home: cat, dog, fish, rabbit.</p>", why: "<p>A pet is an animal kept for company: it lives with us in our home.</p>" },
        { id: "farm", label: "Farm animals", x: 22, y: 60, color: "#84cc16", html: "<p>Farm animals: cow, pig, hen, sheep, horse.</p>", why: "<p>These animals help people or give food like milk and eggs.</p>" },
        { id: "wild", label: "Wild animals", x: 38, y: 55, color: "#ca8a04", html: "<p>Wild animals: lion, elephant, monkey, giraffe.</p>", why: "<p>Wild means they live free in nature: in the savannah, in the jungle or at the Pole.</p>" },
        { id: "order", label: "a + colour + animal", x: 60, y: 62, color: "#0ea5e9", html: "<p>In English the colour comes <b>first</b>: <b>a black cat</b> = un gatto nero.</p>", why: "<p>Every language has its own word-order rules. In English the adjective (the describing word) almost always comes <b>before</b> the noun. In Italian it usually comes after.</p>" },
        { id: "question", label: "What colour is it?", x: 85, y: 62, color: "#ec4899", html: "<p>Question: <b>What colour is it?</b> Answer: <b>It's green.</b></p>", why: "<p>In English, questions with «what» ask for information: what colour = which colour.</p>" },
        { id: "like", label: "I like…", x: 50, y: 90, color: "#22c55e", html: "<p><b>I like dogs</b> = Mi piacciono i cani. <b>I don't like spiders</b> = Non mi piacciono i ragni.</p>", why: "<p>With «I like» you talk about your tastes. Notice that you say «dogs» in the plural when you talk about dogs in general.</p>" }
      ],
      edges: [
        ["english", "animals", ""],
        ["english", "colours", ""],
        ["animals", "pets", "at home"],
        ["animals", "farm", "on the farm"],
        ["animals", "wild", "in nature"],
        ["colours", "order", "before the noun"],
        ["animals", "order", ""],
        ["colours", "question", "asked with"],
        ["order", "like", "to talk about tastes"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: animals",
      questions: [
        { type: "mc", q: "🐴 In English it's called…", options: ["horse", "house", "hen"], answer: 0, explain: "Cavallo = horse." },
        { type: "mc", q: "How do you say «un gatto nero»?", options: ["a cat black", "a black cat", "black a cat"], answer: 1, explain: "The colour comes first: a black cat." },
        { type: "tf", q: "«Elephant» means elefante.", answer: true, explain: "Right! 🐘" }
      ]
    }
  ],
  glossary: [
    { t: "Animals", d: "Animali." },
    { t: "Colours", d: "Colori (in American English it's spelt «colors»)." },
    { t: "Pets", d: "Animals kept at home (animali domestici)." },
    { t: "Farm animals", d: "Animals living on a farm (animali della fattoria)." },
    { t: "Wild animals", d: "Animals living free in nature (animali selvatici)." },
    { t: "What colour is it?", d: "Di che colore è?" },
    { t: "I like…", d: "Mi piace / mi piacciono…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🐷 is called…", options: ["pig", "dog", "cow"], answer: 0, explain: "Maiale = pig." },
      { type: "mc", q: "«Blue» in Italian is…", options: ["blu", "nero", "marrone"], answer: 0, explain: "Blue = blu." },
      { type: "text", q: "Write in English: cane", answer: ["dog", "a dog"], explain: "Cane = dog." },
      { type: "text", q: "Write in English: rosso", answer: ["red"], explain: "Rosso = red." },
      { type: "mc", q: "How do you say «una rana verde»?", options: ["a green frog", "a frog green", "green a frog"], answer: 0, explain: "Colour before the animal: a green frog." },
      { type: "tf", q: "«Monkey» means scimmia.", answer: true, explain: "Yes, monkey = scimmia 🐒." },
      { type: "tf", q: "«White» means nero.", answer: false, explain: "No: white = bianco, black = nero." },
      { type: "mc", q: "What does «What colour is it?» mean?", options: ["Che animale è?", "Di che colore è?", "Quanti anni hai?"], answer: 1, explain: "What colour is it? = Di che colore è?" },
      { type: "mc", q: "Which one is a wild animal?", options: ["cat", "lion", "hen"], answer: 1, explain: "The lion is a wild animal." },
      { type: "mc", q: "«I like dogs» means…", options: ["Ho un cane", "Mi piacciono i cani", "Il cane è grande"], answer: 1, explain: "I like = mi piace / mi piacciono." }
    ]
  }
});
