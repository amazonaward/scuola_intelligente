TOPIC('fr', {
  id: "p2-ing-food",
  title: "Food",
  intro: "Yummy ! 😋 Aujourd'hui, nous apprenons les noms des <b>aliments</b> (food, on dit <i>foud</i>) et des <b>boissons</b> (drinks) en anglais. Et nous apprenons à dire ce que nous aimons : <i>« I like pizza! »</i> 🍕 et ce que nous n'aimons pas : <i>« I don't like broccoli! »</i> 🥦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Fruit and vegetables : fruits et légumes 🍎🥕",
      html: "<table><tr><th>Anglais</th><th>Se prononce</th><th>Français</th></tr>" +
        "<tr><td>🍎 <b>apple</b></td><td>a-peul</td><td>pomme</td></tr>" +
        "<tr><td>🍌 <b>banana</b></td><td>beu-na-neu</td><td>banane</td></tr>" +
        "<tr><td>🍊 <b>orange</b></td><td>o-rindj</td><td>orange</td></tr>" +
        "<tr><td>🍓 <b>strawberry</b></td><td>stro-beu-ri</td><td>fraise</td></tr>" +
        "<tr><td>🍇 <b>grapes</b></td><td>grèïps</td><td>raisin</td></tr>" +
        "<tr><td>🥕 <b>carrot</b></td><td>ka-reut</td><td>carotte</td></tr>" +
        "<tr><td>🍅 <b>tomato</b></td><td>teu-ma-to</td><td>tomate</td></tr>" +
        "<tr><td>🥔 <b>potato</b></td><td>peu-tèï-to</td><td>pomme de terre</td></tr></table>" +
        "<p>💡 <b>Orange</b> veut dire à la fois le fruit <b>orange</b> et la couleur <b>orange</b> !</p>"
    },
    {
      type: "text",
      title: "Other food and drinks : autres aliments et boissons 🍞🥛",
      html: "<ul>" +
        "<li>🍞 <b>bread</b> (brèd) – pain</li>" +
        "<li>🧀 <b>cheese</b> (tchiz) – fromage</li>" +
        "<li>🥚 <b>egg</b> (èg) – œuf</li>" +
        "<li>🍗 <b>chicken</b> (tchi-keun) – poulet</li>" +
        "<li>🐟 <b>fish</b> (fiche) – poisson</li>" +
        "<li>🍝 <b>pasta</b> – pâtes · 🍕 <b>pizza</b> – pizza (ce sont des mots italiens !)</li>" +
        "<li>🍰 <b>cake</b> (kèïk) – gâteau · 🍦 <b>ice cream</b> (aïs krim) – glace · 🍫 <b>chocolate</b> (tcho-keu-leut) – chocolat · 🍪 <b>biscuit</b> (bis-keut) – biscuit</li>" +
        "</ul>" +
        "<p><b>Drinks</b> (boissons) :</p>" +
        "<ul><li>💧 <b>water</b> (wo-teur) – eau · 🥛 <b>milk</b> (milk) – lait · 🧃 <b>juice</b> (djouss) – jus · 🍵 <b>tea</b> (ti) – thé</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards : food",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🍎 apple", back: "pomme" },
          { front: "🍌 banana", back: "banane" },
          { front: "🍊 orange", back: "orange" },
          { front: "🍓 strawberry", back: "fraise" },
          { front: "🥕 carrot", back: "carotte" },
          { front: "🍅 tomato", back: "tomate" },
          { front: "🍞 bread", back: "pain" },
          { front: "🧀 cheese", back: "fromage" },
          { front: "🥚 egg", back: "œuf" },
          { front: "🍗 chicken", back: "poulet" },
          { front: "🍦 ice cream", back: "glace" },
          { front: "🥛 milk", back: "lait" },
          { front: "💧 water", back: "eau" },
          { front: "🧃 juice", back: "jus" }
        ]
      },
      caption: "Dis le mot en anglais à voix haute, puis retourne la carte pour vérifier."
    },
    {
      type: "quiz",
      title: "Mini-quiz : what's this?",
      questions: [
        { type: "mc", q: "🍞 Comment dit-on « pain » ?", options: ["bread", "cheese", "cake"], answer: 0, explain: "Bread = pain." },
        { type: "mc", q: "« Milk » veut dire…", options: ["eau", "lait", "jus"], answer: 1, explain: "Milk = lait 🥛." },
        { type: "text", q: "Écris en anglais : pomme 🍎", answer: ["apple", "an apple"], explain: "Pomme = apple." }
      ]
    },
    {
      type: "remember",
      title: "I like / I don't like 👍👎",
      html: "<p>👍 <b>I like</b> + aliment = J'aime…<br><i>I like pizza.</i> = J'aime la pizza. 🍕<br><i>I like apples.</i> = J'aime les pommes. 🍎</p>" +
        "<p>👎 <b>I don't like</b> + aliment = Je n'aime pas…<br><i>I don't like fish.</i> = Je n'aime pas le poisson. 🐟</p>" +
        "<p>❓ Pour demander : <b>Do you like…?</b> = Aimes-tu… ?<br><i>Do you like chocolate?</i> 🍫<br>✅ <b>Yes, I do!</b> ❌ <b>No, I don't.</b></p>" +
        "<p>💡 En anglais, on ne met pas « le, la » : on dit <b>I like pizza</b>, pas « I like the pizza ».</p>"
    },
    {
      type: "svg",
      title: "My plate : mon assiette 🍽️",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="600" height="300" fill="#fefce8"/>' +
        '<circle cx="230" cy="150" r="125" fill="#ffffff" stroke="#94a3b8" stroke-width="6"/>' +
        '<circle cx="230" cy="150" r="100" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
        '<path d="M230 150 L230 50 A100 100 0 0 1 330 150 Z" fill="#86efac"/>' +
        '<path d="M230 150 L330 150 A100 100 0 0 1 230 250 Z" fill="#fca5a5"/>' +
        '<path d="M230 150 L230 250 A100 100 0 0 1 130 150 Z" fill="#fde68a"/>' +
        '<path d="M230 150 L130 150 A100 100 0 0 1 230 50 Z" fill="#fdba74"/>' +
        '<text x="272" y="110" font-size="16" text-anchor="middle" fill="#14532d" font-weight="bold">vegetables</text>' +
        '<text x="275" y="200" font-size="16" text-anchor="middle" fill="#7f1d1d" font-weight="bold">fish, egg</text>' +
        '<text x="190" y="200" font-size="16" text-anchor="middle" fill="#78350f" font-weight="bold">bread</text>' +
        '<text x="190" y="115" font-size="16" text-anchor="middle" fill="#7c2d12" font-weight="bold">fruit</text>' +
        '<rect x="430" y="80" width="70" height="140" rx="10" fill="#bfdbfe" stroke="#1e40af" stroke-width="3"/>' +
        '<rect x="434" y="120" width="62" height="96" rx="6" fill="#60a5fa"/>' +
        '<text x="465" y="250" font-size="18" text-anchor="middle" fill="#1e3a8a" font-weight="bold">water</text>' +
        '<text x="300" y="25" font-size="20" text-anchor="middle" fill="#0f172a" font-weight="bold">A healthy lunch!</text>' +
        '</svg>',
      caption: "Un déjeuner sain (healthy) : légumes, fruits, pain ou pâtes, un peu de poisson ou d'œufs, et beaucoup d'eau."
    },
    {
      type: "example",
      title: "Exemple : à la cafétéria de l'école 🧃",
      html: "<p><b>Tom:</b> Hello! Can I have a juice, please? 🧃<br>" +
        "<b>Lady:</b> Orange juice or apple juice?<br>" +
        "<b>Tom:</b> Apple juice, please. And a biscuit! 🍪<br>" +
        "<b>Lady:</b> Here you are!<br>" +
        "<b>Tom:</b> Thank you! 😊</p>" +
        "<p>💡 <b>Can I have…, please?</b> = Puis-je avoir…, s'il vous plaît ? &nbsp; <b>Here you are</b> = Voilà pour toi.</p>"
    },
    {
      type: "example",
      title: "Exemple : qu'est-ce que tu aimes ? 🤔",
      html: "<p><b>Anna:</b> Do you like carrots? 🥕<br>" +
        "<b>Leo:</b> Yes, I do! I like carrots. And you?<br>" +
        "<b>Anna:</b> No, I don't. I don't like carrots. I like strawberries! 🍓<br>" +
        "<b>Leo:</b> Me too! 🙌</p>" +
        "<p>💡 <b>Me too!</b> = Moi aussi !</p>"
    },
    {
      type: "widget",
      title: "Fruit, vegetables or drinks?",
      widget: "classify",
      options: {
        groups: ["🍎 Fruit", "🥕 Vegetables", "🥤 Drinks"],
        items: [
          ["banana", 0],
          ["strawberry", 0],
          ["grapes", 0],
          ["carrot", 1],
          ["potato", 1],
          ["broccoli", 1],
          ["milk", 2],
          ["water", 2],
          ["juice", 2]
        ]
      },
      caption: "Mets chaque mot anglais dans le bon groupe."
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🍟",
      html: "<p>Les frites s'appellent <b>chips</b> en <b>Grande-Bretagne</b>, mais aux <b>États-Unis</b> elles s'appellent <b>fries</b> (ou French fries) ! Et les chips en sachet ? Les Anglais les appellent <b>crisps</b>, les Américains <b>chips</b>. Quelle confusion ! 😄 Un plat très célèbre en Angleterre est le <b>fish and chips</b> : du poisson frit avec des frites.</p>"
    },
    {
      type: "curiosity",
      title: "Le savais-tu ? 🍕",
      html: "<p>Beaucoup de mots anglais de la cuisine viennent de l'<b>italien</b> : <b>pizza</b>, <b>pasta</b>, <b>spaghetti</b>, <b>lasagne</b>, <b>broccoli</b>, <b>cappuccino</b>, <b>espresso</b>… La cuisine italienne est aimée dans le monde entier, et les noms ont voyagé avec les recettes ! Et la tomate ? Elle est arrivée en Europe depuis l'<b>Amérique</b> après le voyage de Christophe Colomb en 1492.</p>"
    },
    {
      type: "3d",
      title: "Food around the world 🌍",
      scene: "globe",
      options: {
        points: [
          { lat: 40.85, lon: 14.27, label: "🍕 pizza (Italy)", color: "#16a34a" },
          { lat: 51.5, lon: -0.1, label: "🐟🍟 fish and chips (UK)", color: "#2563eb" },
          { lat: 40.7, lon: -74, label: "🍔 hamburger (USA)", color: "#ef4444" },
          { lat: 19.4, lon: -99.1, label: "🌮 tacos (Mexico)", color: "#f59e0b" },
          { lat: 35.7, lon: 139.7, label: "🍣 sushi (Japan)", color: "#dc2626" },
          { lat: 48.9, lon: 2.35, label: "🥐 croissant (France)", color: "#1d4ed8" },
          { lat: 28.6, lon: 77.2, label: "🍛 curry (India)", color: "#ea580c" },
          { lat: 39.9, lon: 116.4, label: "🥟 dumplings (China)", color: "#be123c" }
        ]
      },
      caption: "Fais tourner le globe et découvre les plats typiques de nombreux pays. Lequel aimerais-tu goûter ? Dis-le en anglais : « I like sushi ! »"
    },
    {
      type: "alternatives",
      title: "D'autres façons d'apprendre la nourriture en anglais",
      intro: "<p>Chacun apprend à sa façon. Essaie tous ces jeux !</p>",
      tabs: [
        {
          label: "🛒 Jeu du supermarché",
          html: "<p>Prends dans la cuisine quelques vrais aliments (ou dessine-les). Un joueur fait le <b>caissier</b>, l'autre le <b>client</b>.</p>" +
            "<p>🧑 <i>« Can I have an apple, please? »</i><br>🧑‍🍳 <i>« Here you are! One euro, please. »</i><br>🧑 <i>« Thank you! »</i></p>" +
            "<p>Jouer la scène avec de vrais objets aide à retenir : le cerveau relie le mot à la <b>couleur</b>, à l'<b>odeur</b> et au <b>poids</b> de la chose !</p>"
        },
        {
          label: "😋 Les visages du goût",
          html: "<p>Utilise les visages pour retenir les phrases :</p>",
          svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="600" height="240" fill="#f0f9ff"/>' +
            '<circle cx="150" cy="100" r="70" fill="#facc15" stroke="#a16207" stroke-width="4"/>' +
            '<circle cx="125" cy="80" r="8" fill="#0f172a"/>' +
            '<circle cx="175" cy="80" r="8" fill="#0f172a"/>' +
            '<path d="M110 115 Q150 160 190 115" stroke="#7c2d12" stroke-width="6" fill="none"/>' +
            '<circle cx="450" cy="100" r="70" fill="#a3e635" stroke="#3f6212" stroke-width="4"/>' +
            '<circle cx="425" cy="80" r="8" fill="#0f172a"/>' +
            '<circle cx="475" cy="80" r="8" fill="#0f172a"/>' +
            '<path d="M410 140 Q450 105 490 140" stroke="#7c2d12" stroke-width="6" fill="none"/>' +
            '<text x="150" y="205" font-size="24" text-anchor="middle" fill="#15803d" font-weight="bold">I like it!</text>' +
            '<text x="450" y="205" font-size="24" text-anchor="middle" fill="#b91c1c" font-weight="bold">I don\'t like it!</text>' +
            '</svg>'
        },
        {
          label: "🎵 La chanson des fruits",
          html: "<p>Chante sur l'air de « Frère Jacques » :</p>" +
            "<p><i>🎶 Apples, bananas, apples, bananas,<br>I like them, I like them!<br>Carrots and tomatoes, carrots and tomatoes,<br>Yummy, yummy! Yummy, yummy! 🎶</i></p>" +
            "<p>Puis change les paroles avec tes aliments préférés. Les chansons font rester les mots dans la tête comme de la colle !</p>"
        },
        {
          label: "🃏 Associe les paires",
          html: "<p>Associe le mot anglais au mot français.</p>",
          widget: "match",
          options: { pairs: [["cheese", "fromage"], ["egg", "œuf"], ["chicken", "poulet"], ["cake", "gâteau"], ["juice", "jus"], ["ice cream", "glace"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Carte de la nourriture en anglais",
      nodes: [
        { id: "food", label: "Food", x: 50, y: 6, color: "#f97316", html: "<p><b>Food</b> = nourriture.</p>", why: "<p>C'est un mot très ancien de l'anglais, parent de <b>feed</b> (donner à manger). Il vient des langues germaniques, comme l'allemand.</p>" },
        { id: "fruit", label: "Fruit", x: 15, y: 30, color: "#ef4444", html: "<p>apple, banana, orange, strawberry, grapes</p>", why: "<p><b>Fruit</b> vient du latin <i>fructus</i>, comme le mot français « fruit » : c'est pour cela qu'ils se ressemblent !</p>" },
        { id: "veg", label: "Vegetables", x: 38, y: 30, color: "#22c55e", html: "<p>carrot, tomato, potato, broccoli</p>", why: "<p><b>Vegetable</b> vient du latin <i>vegetare</i>, « croître » : ce sont des plantes qui poussent au potager. Les pommes de terre et les tomates sont arrivées d'Amérique.</p>" },
        { id: "other", label: "Bread, cheese, egg…", x: 62, y: 30, color: "#eab308", html: "<p>bread, cheese, egg, chicken, fish, pasta, pizza</p>", why: "<p><b>Cheese</b> vient du latin <i>caseus</i>. <b>Pizza</b> et <b>pasta</b> sont des mots italiens entrés en anglais.</p>" },
        { id: "drinks", label: "Drinks", x: 85, y: 30, color: "#0ea5e9", html: "<p>water, milk, juice, tea</p>", why: "<p>Le <b>thé</b> (tea) est la boisson la plus célèbre de Grande-Bretagne : il est arrivé de Chine et est devenu à la mode en Angleterre au XVIIe siècle.</p>" },
        { id: "like", label: "I like…", x: 25, y: 65, color: "#16a34a", html: "<p>I like pizza = J'aime la pizza.</p>", why: "<p>En anglais, la phrase se construit comme en français : « <b>je</b> aime la pizza ». Le sujet est toujours <b>I</b>. (En italien, c'est l'inverse : « la pizza me plaît ».)</p>" },
        { id: "dont", label: "I don't like…", x: 50, y: 65, color: "#dc2626", html: "<p>I don't like fish = Je n'aime pas le poisson.</p>", why: "<p><b>Don't</b> est la forme courte de <b>do not</b>. En anglais, pour dire « ne… pas », il faut cet auxiliaire <b>do</b>.</p>" },
        { id: "do", label: "Do you like…?", x: 75, y: 65, color: "#8b5cf6", html: "<p>Do you like milk? Yes, I do / No, I don't.</p>", why: "<p>Pour poser une question, l'anglais met <b>do</b> au début. Dans la réponse courte, on répète seulement le « do » : <i>Yes, I do</i>.</p>" },
        { id: "please", label: "Can I have…, please?", x: 50, y: 92, color: "#ec4899", html: "<p>Pour demander poliment quelque chose à manger.</p>", why: "<p><b>Please</b> (s'il vous plaît) et <b>thank you</b> (merci) sont les « mots magiques » : en Grande-Bretagne, on les utilise énormément, même avec les amis.</p>" }
      ],
      edges: [
        ["food", "fruit", "il y a les"],
        ["food", "veg", "il y a les"],
        ["food", "other", "et puis"],
        ["food", "drinks", "avec les"],
        ["fruit", "like", "tu dis"],
        ["veg", "dont", "ou"],
        ["other", "do", "tu demandes"],
        ["drinks", "please", "commande avec"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz : I like!",
      questions: [
        { type: "mc", q: "Comment dit-on « Je n'aime pas le lait » ?", options: ["I like milk.", "I don't like milk.", "Do you like milk?"], answer: 1, explain: "I don't like milk." },
        { type: "mc", q: "« Do you like apples? » Tu aimes les pommes. Tu réponds…", options: ["Yes, I do!", "No, I don't.", "I am apple."], answer: 0, explain: "Yes, I do = Oui !" },
        { type: "tf", q: "« Me too! » veut dire « Moi aussi ! »", answer: true, explain: "Me too = moi aussi." }
      ]
    }
  ],
  glossary: [
    { t: "Food", d: "Nourriture." },
    { t: "Drinks", d: "Boissons." },
    { t: "Fruit", d: "Fruits." },
    { t: "Vegetables", d: "Légumes." },
    { t: "I like…", d: "J'aime…" },
    { t: "I don't like…", d: "Je n'aime pas…" },
    { t: "Do you like…?", d: "Aimes-tu… ?" },
    { t: "Please / Thank you", d: "S'il te plaît / merci." },
    { t: "Healthy", d: "Sain, qui fait du bien." },
    { t: "Yummy", d: "Délicieux ! (mot d'enfant)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🧀 Comment dit-on « fromage » ?", options: ["cheese", "chicken", "cake"], answer: 0, explain: "Cheese = fromage." },
      { type: "mc", q: "« Water » veut dire…", options: ["eau", "jus", "thé"], answer: 0, explain: "Water = eau 💧." },
      { type: "text", q: "Écris en anglais : œuf 🥚", answer: ["egg", "an egg"], explain: "Œuf = egg." },
      { type: "text", q: "Écris en anglais : glace 🍦", answer: ["ice cream", "icecream", "ice-cream"], explain: "Glace = ice cream." },
      { type: "mc", q: "Lequel de ces mots est un fruit (fruit) ?", options: ["carrot", "strawberry", "potato"], answer: 1, explain: "Strawberry = fraise, c'est un fruit." },
      { type: "mc", q: "Comment dit-on « J'aime la pizza » ?", options: ["I like pizza.", "I like the pizza is.", "Pizza me like."], answer: 0, explain: "I like pizza." },
      { type: "order", q: "Mets dans l'ordre la question « Aimes-tu le chocolat ? »", items: ["Do", "you", "like", "chocolate?"], explain: "Do you like chocolate?" },
      { type: "mc", q: "« Do you like fish? » Tu n'aimes pas ça. Tu réponds…", options: ["Yes, I do.", "No, I don't.", "No, I am."], answer: 1, explain: "No, I don't." },
      { type: "tf", q: "En anglais, « orange » peut vouloir dire à la fois le fruit et la couleur.", answer: true, explain: "Le fruit et la couleur ont le même nom." },
      { type: "mc", q: "À la cafétéria, tu demandes un jus poliment :", options: ["Juice!", "Can I have a juice, please?", "I don't like juice."], answer: 1, explain: "Can I have…, please? est la façon polie." },
      { type: "tf", q: "« Bread » veut dire « beurre ».", answer: false, explain: "Bread = pain. Beurre = butter." }
    ]
  }
});
