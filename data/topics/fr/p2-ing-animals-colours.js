TOPIC('fr', {
  id: "p2-ing-animals-colours",
  title: "Animals and colours",
  intro: "Hello ! 👋 Aujourd'hui, on apprend en anglais les noms de plein d'<b>animaux</b> (animals) et de <b>couleurs</b> (colours). À la fin, tu sauras dire : <i>« The cat is black! »</i> 🐈‍⬛",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Colours : les couleurs",
      html: "<table><tr><th>Anglais</th><th>Ça se prononce</th><th>Français</th></tr>" +
        "<tr><td>🔴 <b>red</b></td><td>rèd</td><td>rouge</td></tr>" +
        "<tr><td>🔵 <b>blue</b></td><td>blou</td><td>bleu</td></tr>" +
        "<tr><td>🟡 <b>yellow</b></td><td>yè-lo</td><td>jaune</td></tr>" +
        "<tr><td>🟢 <b>green</b></td><td>griine</td><td>vert</td></tr>" +
        "<tr><td>🟠 <b>orange</b></td><td>o-rinj</td><td>orange</td></tr>" +
        "<tr><td>🟣 <b>purple</b></td><td>peur-peul</td><td>violet</td></tr>" +
        "<tr><td>🩷 <b>pink</b></td><td>pink</td><td>rose</td></tr>" +
        "<tr><td>🟤 <b>brown</b></td><td>braoune</td><td>marron</td></tr>" +
        "<tr><td>⚫ <b>black</b></td><td>blak</td><td>noir</td></tr>" +
        "<tr><td>⚪ <b>white</b></td><td>ouaït</td><td>blanc</td></tr>" +
        "<tr><td>🩶 <b>grey</b></td><td>grèï</td><td>gris</td></tr></table>"
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
      caption: "Les couleurs de l'arc-en-ciel en anglais. Arc-en-ciel se dit « rainbow »."
    },
    {
      type: "quiz",
      title: "Mini-quiz : colours",
      questions: [
        { type: "mc", q: "Comment dit-on « vert » en anglais ?", options: ["green", "grey", "red"], answer: 0, explain: "Vert = green." },
        { type: "mc", q: "« Yellow », c'est…", options: ["bleu", "jaune", "blanc"], answer: 1, explain: "Yellow = jaune, comme le soleil ☀️." },
        { type: "text", q: "Écris en anglais : noir", answer: ["black"], explain: "Noir = black." }
      ]
    },
    {
      type: "text",
      title: "Animals : les animaux",
      html: "<p><b>Pets</b> (animaux de compagnie) et <b>farm animals</b> (animaux de la ferme) :</p>" +
        "<ul><li>🐶 <b>dog</b> – chien · 🐱 <b>cat</b> – chat · 🐟 <b>fish</b> – poisson · 🐦 <b>bird</b> – oiseau · 🐰 <b>rabbit</b> – lapin</li>" +
        "<li>🐮 <b>cow</b> – vache · 🐷 <b>pig</b> – cochon · 🐴 <b>horse</b> – cheval · 🐑 <b>sheep</b> – mouton · 🐔 <b>hen</b> – poule · 🦆 <b>duck</b> – canard</li></ul>" +
        "<p><b>Wild animals</b> (animaux sauvages) :</p>" +
        "<ul><li>🦁 <b>lion</b> – lion · 🐘 <b>elephant</b> – éléphant · 🐒 <b>monkey</b> – singe · 🦒 <b>giraffe</b> – girafe · 🐯 <b>tiger</b> – tigre · 🐻 <b>bear</b> – ours</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards : retourne les cartes",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🐶 dog", back: "chien" },
          { front: "🐱 cat", back: "chat" },
          { front: "🐟 fish", back: "poisson" },
          { front: "🐦 bird", back: "oiseau" },
          { front: "🐰 rabbit", back: "lapin" },
          { front: "🐮 cow", back: "vache" },
          { front: "🐷 pig", back: "cochon" },
          { front: "🐴 horse", back: "cheval" },
          { front: "🐑 sheep", back: "mouton" },
          { front: "🦁 lion", back: "lion" },
          { front: "🐘 elephant", back: "éléphant" },
          { front: "🐒 monkey", back: "singe" }
        ]
      },
      caption: "Lis le mot anglais à voix haute, puis retourne la carte pour vérifier."
    },
    {
      type: "remember",
      title: "Comment faire la phrase",
      html: "<p>En anglais, la couleur se place <b>avant</b> l'animal :</p>" +
        "<p>🐈‍⬛ <b>a black cat</b> = un chat noir</p>" +
        "<p>🐸 <b>a green frog</b> = une grenouille verte</p>" +
        "<p>Pour dire de quelle couleur il est : <b>The dog is brown.</b> = Le chien est marron. <br>Pour demander : <b>What colour is it?</b> = De quelle couleur est-il ?</p>"
    },
    {
      type: "example",
      title: "Exemple : au parc 🌳",
      html: "<p><b>Tom:</b> Look! A dog! 🐕<br><b>Anna:</b> What colour is it?<br><b>Tom:</b> It's brown and white.<br><b>Anna:</b> And the bird? 🐦<br><b>Tom:</b> The bird is blue!</p>"
    },
    {
      type: "example",
      title: "Exemple : I like… 💖",
      html: "<p>Pour dire ce que tu aimes : <b>I like</b> + animal au pluriel.</p>" +
        "<p><b>I like cats.</b> = J'aime les chats. 🐱<br><b>My favourite colour is red.</b> = Ma couleur préférée est le rouge. ❤️</p>"
    },
    {
      type: "widget",
      title: "Associe le mot et sa signification",
      widget: "match",
      options: {
        pairs: [
          ["dog", "chien"],
          ["horse", "cheval"],
          ["sheep", "mouton"],
          ["red", "rouge"],
          ["white", "blanc"],
          ["purple", "violet"]
        ]
      },
      caption: "Clique sur un mot anglais, puis sur sa traduction."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🐑",
      html: "<p>En anglais, <b>sheep</b> (mouton) et <b>fish</b> (poisson) restent pareils au pluriel : <i>one sheep, two sheep</i> ; <i>one fish, three fish</i> !</p>"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🐮",
      html: "<p>Les cris des animaux changent aussi de langue ! En anglais, le chien fait <b>« woof woof »</b>, le coq fait <b>« cock-a-doodle-doo »</b> et la vache fait <b>« moo »</b>.</p>"
    },
    {
      type: "3d",
      title: "Where do they live? Où vivent-ils ? 🌍",
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
      caption: "Fais tourner le globe et trouve les animaux sauvages (wild animals) : chacun vit dans son milieu. Essaie de dire leur nom en anglais à voix haute !"
    },
    {
      type: "alternatives",
      title: "D'autres façons de retenir les mots 🌈",
      intro: "<p>Chacun apprend à sa manière : certains retiennent mieux en chantant, d'autres en regardant des images, d'autres en jouant. Essaie toutes les façons !</p>",
      tabs: [
        {
          label: "🎵 Chante la comptine",
          html: "<p>Les mots en musique restent dans la tête ! Chante cette comptine en tapant dans tes mains :</p><p style=\"font-size:1.2em\"><b>Red</b> is the ladybird 🐞,<br><b>Yellow</b> is the chick 🐥,<br><b>Green</b> is the little frog 🐸,<br>Jump, jump, quick, quick!</p><p><b>Blue</b> is the big whale 🐳,<br><b>Pink</b> is the pig 🐷,<br><b>Black</b> and <b>white</b> the zebra 🦓,<br>Dance a little jig!</p>"
        },
        {
          label: "🖼️ Regarde et relie",
          html: "<p>Chaque mot a son dessin. Regarde l'image et dis le mot en anglais, sans penser au français !</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f8fafc"/><g font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle"><circle cx="75" cy="80" r="50" fill="#ef4444"/><text x="75" y="95" font-size="44">🐞</text><text x="75" y="165" fill="#ef4444">red</text><circle cx="225" cy="80" r="50" fill="#facc15"/><text x="225" y="95" font-size="44">🐥</text><text x="225" y="165" fill="#a16207">yellow</text><circle cx="375" cy="80" r="50" fill="#22c55e"/><text x="375" y="95" font-size="44">🐸</text><text x="375" y="165" fill="#15803d">green</text><circle cx="525" cy="80" r="50" fill="#3b82f6"/><text x="525" y="95" font-size="44">🐳</text><text x="525" y="165" fill="#1d4ed8">blue</text><text x="300" y="215" fill="#334155">a red ladybird · a yellow chick · a green frog · a blue whale</text></g></svg>`
        },
        {
          label: "🔗 Mots jumeaux",
          html: "<p>Beaucoup de mots anglais ressemblent au français, parce qu'ils viennent du <b>latin</b> ou même du français :</p><ul><li>🐘 <b>elephant</b> → éléphant</li><li>🦒 <b>giraffe</b> → girafe</li><li>🦁 <b>lion</b> → lion</li><li>🐯 <b>tiger</b> → tigre</li><li>🐬 <b>dolphin</b> → dauphin</li></ul><p>Attention aux <b>faux amis</b> ! <b>Fan</b> n'est pas un animal : ça veut dire « supporter » ou « ventilateur » 😄.</p>"
        },
        {
          label: "🕵️ Jeu « I spy »",
          html: "<p>En Angleterre, les enfants jouent à <b>I spy</b> (J'espionne) : l'un dit <i>« I spy with my little eye something… <b>red</b>! »</i> et les autres doivent deviner un objet rouge dans la pièce.</p><p>Joue avec ta famille en utilisant les couleurs en anglais ! Puis essaie avec les animaux : <i>« I spy an animal… it's <b>grey</b> and very big! »</i> → elephant 🐘</p>"
        },
        {
          label: "🃏 Cartes à retourner",
          html: "<p>Regarde l'image, dis le mot, puis retourne la carte pour vérifier.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "🐄", back: "cow – vache" },
            { front: "🐑", back: "sheep – mouton" },
            { front: "🐔", back: "hen – poule" },
            { front: "🐟", back: "fish – poisson" },
            { front: "🟠", back: "orange – orange" },
            { front: "🟣", back: "purple – violet" },
            { front: "🟤", back: "brown – marron" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "La carte de Animals and colours 🗺️",
      nodes: [
        { id: "english", label: "English words", x: 50, y: 6, color: "#8b5cf6", html: "<p>Aujourd'hui, nous avons appris deux groupes de mots : les <b>animaux</b> et les <b>couleurs</b>.</p>", why: "<p>L'anglais est parlé dans le monde entier. Beaucoup de ses mots viennent de l'ancien allemand, d'autres du latin et du français : c'est pour ça que certains mots ressemblent au français !</p>" },
        { id: "animals", label: "Animals", x: 22, y: 30, color: "#f59e0b", html: "<p>Cat, dog, cow, horse, lion, elephant…</p>", why: "<p>Les animaux de la ferme ont des noms anglais très anciens (cow, pig, sheep). Curiosité : la viande, elle, a des noms qui viennent du français (beef = bœuf, pork = porc), parce qu'il y a très longtemps, en Angleterre, les seigneurs parlaient français !</p>" },
        { id: "colours", label: "Colours", x: 78, y: 30, color: "#ef4444", html: "<p>Red, blue, green, yellow, black, white…</p>", why: "<p>En Angleterre on écrit <b>colour</b>, aux États-Unis <b>color</b> : c'est le même mot, qui vient du latin « color ».</p>" },
        { id: "pets", label: "Pets", x: 6, y: 55, color: "#fb923c", html: "<p>Animaux de compagnie : cat, dog, fish, rabbit.</p>", why: "<p>Pet veut dire « animal de compagnie » : il vit avec nous à la maison.</p>" },
        { id: "farm", label: "Farm animals", x: 22, y: 60, color: "#84cc16", html: "<p>Animaux de la ferme : cow, pig, hen, sheep, horse.</p>", why: "<p>Farm = ferme. Ces animaux aident les gens ou donnent de la nourriture comme le lait et les œufs.</p>" },
        { id: "wild", label: "Wild animals", x: 38, y: 55, color: "#ca8a04", html: "<p>Animaux sauvages : lion, elephant, monkey, giraffe.</p>", why: "<p>Wild = sauvage : ils vivent libres dans la nature, dans la savane, dans la jungle ou au pôle.</p>" },
        { id: "order", label: "a + colour + animal", x: 60, y: 62, color: "#0ea5e9", html: "<p>En anglais, la couleur vient <b>avant</b> : <b>a black cat</b> = un chat noir.</p>", why: "<p>Chaque langue a ses règles d'ordre. En anglais, l'adjectif (le mot qui décrit) se place presque toujours <b>avant</b> le nom. En français, il se place souvent après.</p>" },
        { id: "question", label: "What colour is it?", x: 85, y: 62, color: "#ec4899", html: "<p>Question : <b>What colour is it?</b> Réponse : <b>It's green.</b></p>", why: "<p>En anglais, les questions avec « what » demandent une information : what colour = quelle couleur.</p>" },
        { id: "like", label: "I like…", x: 50, y: 90, color: "#22c55e", html: "<p><b>I like dogs</b> = J'aime les chiens. <b>I don't like spiders</b> = Je n'aime pas les araignées.</p>", why: "<p>Avec « I like », tu parles de tes goûts. Remarque qu'on dit « dogs » au pluriel quand on parle des chiens en général.</p>" }
      ],
      edges: [
        ["english", "animals", ""],
        ["english", "colours", ""],
        ["animals", "pets", "à la maison"],
        ["animals", "farm", "à la ferme"],
        ["animals", "wild", "dans la nature"],
        ["colours", "order", "avant le nom"],
        ["animals", "order", ""],
        ["colours", "question", "on demande avec"],
        ["order", "like", "pour parler de ses goûts"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : animals",
      questions: [
        { type: "mc", q: "🐴 En anglais, on dit…", options: ["horse", "house", "hen"], answer: 0, explain: "Cheval = horse." },
        { type: "mc", q: "Comment dit-on « un chat noir » ?", options: ["a cat black", "a black cat", "black a cat"], answer: 1, explain: "La couleur vient avant : a black cat." },
        { type: "tf", q: "« Elephant » veut dire éléphant.", answer: true, explain: "Exact ! 🐘" }
      ]
    }
  ],
  glossary: [
    { t: "Animals", d: "Animaux." },
    { t: "Colours", d: "Couleurs (en américain, on écrit « colors »)." },
    { t: "Pets", d: "Animaux de compagnie." },
    { t: "Farm animals", d: "Animaux de la ferme." },
    { t: "Wild animals", d: "Animaux sauvages." },
    { t: "What colour is it?", d: "De quelle couleur est-il ?" },
    { t: "I like…", d: "J'aime…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🐷 se dit…", options: ["pig", "dog", "cow"], answer: 0, explain: "Cochon = pig." },
      { type: "mc", q: "« Blue » signifie…", options: ["bleu", "noir", "marron"], answer: 0, explain: "Blue = bleu." },
      { type: "text", q: "Écris en anglais : chien", answer: ["dog", "a dog"], explain: "Chien = dog." },
      { type: "text", q: "Écris en anglais : rouge", answer: ["red"], explain: "Rouge = red." },
      { type: "mc", q: "Comment dit-on « une grenouille verte » ?", options: ["a green frog", "a frog green", "green a frog"], answer: 0, explain: "La couleur avant l'animal : a green frog." },
      { type: "tf", q: "« Monkey » veut dire singe.", answer: true, explain: "Oui, monkey = singe 🐒." },
      { type: "tf", q: "« White » veut dire noir.", answer: false, explain: "Non : white = blanc, black = noir." },
      { type: "mc", q: "Que veut dire « What colour is it? » ?", options: ["Quel animal est-ce ?", "De quelle couleur est-il ?", "Quel âge as-tu ?"], answer: 1, explain: "What colour is it? = De quelle couleur est-il ?" },
      { type: "mc", q: "Lequel est un animal sauvage (wild) ?", options: ["cat", "lion", "hen"], answer: 1, explain: "Le lion (lion) est un animal sauvage." },
      { type: "mc", q: "« I like dogs » signifie…", options: ["J'ai un chien", "J'aime les chiens", "Le chien est grand"], answer: 1, explain: "I like = j'aime." }
    ]
  }
});
