TOPIC('en', {
  id: "p2-ing-food",
  title: "Food",
  intro: "Yummy! 😋 Today we learn the names of <b>food</b> (say <i>food</i>) and <b>drinks</b> in English. And we learn to say what we like: <i>“I like pizza!”</i> 🍕 and what we do not like: <i>“I don't like broccoli!”</i> 🥦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Fruit and vegetables: frutta e verdura 🍎🥕",
      html: "<table><tr><th>English</th><th>How to say it</th><th>Italian</th></tr>" +
        "<tr><td>🍎 <b>apple</b></td><td>AP-ul</td><td>mela</td></tr>" +
        "<tr><td>🍌 <b>banana</b></td><td>buh-NAH-nuh</td><td>banana</td></tr>" +
        "<tr><td>🍊 <b>orange</b></td><td>OR-inj</td><td>arancia</td></tr>" +
        "<tr><td>🍓 <b>strawberry</b></td><td>STRAW-buh-ree</td><td>fragola</td></tr>" +
        "<tr><td>🍇 <b>grapes</b></td><td>grayps</td><td>uva</td></tr>" +
        "<tr><td>🥕 <b>carrot</b></td><td>KA-rut</td><td>carota</td></tr>" +
        "<tr><td>🍅 <b>tomato</b></td><td>tuh-MAH-toh</td><td>pomodoro</td></tr>" +
        "<tr><td>🥔 <b>potato</b></td><td>puh-TAY-toh</td><td>patata</td></tr></table>" +
        "<p>💡 <b>Orange</b> means both the fruit <b>arancia</b> and the colour <b>arancione</b>!</p>"
    },
    {
      type: "text",
      title: "Other food and drinks: altri cibi e bevande 🍞🥛",
      html: "<ul>" +
        "<li>🍞 <b>bread</b> (bred) – pane</li>" +
        "<li>🧀 <b>cheese</b> (cheez) – formaggio</li>" +
        "<li>🥚 <b>egg</b> (eg) – uovo</li>" +
        "<li>🍗 <b>chicken</b> (CHIK-in) – pollo</li>" +
        "<li>🐟 <b>fish</b> (fish) – pesce</li>" +
        "<li>🍝 <b>pasta</b> – pasta · 🍕 <b>pizza</b> – pizza (they are Italian words!)</li>" +
        "<li>🍰 <b>cake</b> (kayk) – torta · 🍦 <b>ice cream</b> (ice kreem) – gelato · 🍫 <b>chocolate</b> (CHOK-lit) – cioccolato · 🍪 <b>biscuit</b> (BIS-kit) – biscotto</li>" +
        "</ul>" +
        "<p><b>Drinks</b> (bevande):</p>" +
        "<ul><li>💧 <b>water</b> (WAW-ter) – acqua · 🥛 <b>milk</b> (milk) – latte · 🧃 <b>juice</b> (joos) – succo · 🍵 <b>tea</b> (tee) – tè</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: food",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🍎 apple", back: "mela" },
          { front: "🍌 banana", back: "banana" },
          { front: "🍊 orange", back: "arancia" },
          { front: "🍓 strawberry", back: "fragola" },
          { front: "🥕 carrot", back: "carota" },
          { front: "🍅 tomato", back: "pomodoro" },
          { front: "🍞 bread", back: "pane" },
          { front: "🧀 cheese", back: "formaggio" },
          { front: "🥚 egg", back: "uovo" },
          { front: "🍗 chicken", back: "pollo" },
          { front: "🍦 ice cream", back: "gelato" },
          { front: "🥛 milk", back: "latte" },
          { front: "💧 water", back: "acqua" },
          { front: "🧃 juice", back: "succo" }
        ]
      },
      caption: "Say the English word aloud, then flip the card to check."
    },
    {
      type: "quiz",
      title: "Mini-quiz: what's this?",
      questions: [
        { type: "mc", q: "🍞 How do you say “pane”?", options: ["bread", "cheese", "cake"], answer: 0, explain: "Bread = pane." },
        { type: "mc", q: "“Milk” means…", options: ["acqua", "latte", "succo"], answer: 1, explain: "Milk = latte 🥛." },
        { type: "text", q: "Write in English: mela 🍎", answer: ["apple", "an apple"], explain: "Mela = apple." }
      ]
    },
    {
      type: "remember",
      title: "I like / I don't like 👍👎",
      html: "<p>👍 <b>I like</b> + food = Mi piace / mi piacciono…<br><i>I like pizza.</i> = Mi piace la pizza. 🍕<br><i>I like apples.</i> = Mi piacciono le mele. 🍎</p>" +
        "<p>👎 <b>I don't like</b> + food = Non mi piace…<br><i>I don't like fish.</i> = Non mi piace il pesce. 🐟</p>" +
        "<p>❓ To ask: <b>Do you like…?</b> = Ti piace…?<br><i>Do you like chocolate?</i> 🍫<br>✅ <b>Yes, I do!</b> ❌ <b>No, I don't.</b></p>" +
        "<p>💡 In English we do not put “the” (il, la) here: we say <b>I like pizza</b>, not “I like the pizza”.</p>"
    },
    {
      type: "svg",
      title: "My plate: il mio piatto 🍽️",
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
      caption: "A healthy lunch: vegetables, fruit, bread or pasta, a little fish or eggs, and lots of water."
    },
    {
      type: "example",
      title: "Example: at the school café 🧃",
      html: "<p><b>Tom:</b> Hello! Can I have a juice, please? 🧃<br>" +
        "<b>Lady:</b> Orange juice or apple juice?<br>" +
        "<b>Tom:</b> Apple juice, please. And a biscuit! 🍪<br>" +
        "<b>Lady:</b> Here you are!<br>" +
        "<b>Tom:</b> Thank you! 😊</p>" +
        "<p>💡 <b>Can I have…, please?</b> = Posso avere…, per favore? &nbsp; <b>Here you are</b> = Ecco a te.</p>"
    },
    {
      type: "example",
      title: "Example: what do you like? 🤔",
      html: "<p><b>Anna:</b> Do you like carrots? 🥕<br>" +
        "<b>Leo:</b> Yes, I do! I like carrots. And you?<br>" +
        "<b>Anna:</b> No, I don't. I don't like carrots. I like strawberries! 🍓<br>" +
        "<b>Leo:</b> Me too! 🙌</p>" +
        "<p>💡 <b>Me too!</b> = Anche a me!</p>"
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
      caption: "Put each English word in the right group."
    },
    {
      type: "curiosity",
      title: "Did you know…? 🍟",
      html: "<p>Fried potato sticks in <b>Great Britain</b> are called <b>chips</b>, but in the <b>United States</b> they are called <b>fries</b> (or French fries)! And what about the crunchy ones in a bag? The British call them <b>crisps</b>, the Americans <b>chips</b>. What a mix-up! 😄 A very famous dish in England is <b>fish and chips</b>: fried fish with fried potatoes.</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 🍕",
      html: "<p>Lots of English food words come from <b>Italian</b>: <b>pizza</b>, <b>pasta</b>, <b>spaghetti</b>, <b>lasagne</b>, <b>broccoli</b>, <b>cappuccino</b>, <b>espresso</b>… Italian food is loved all over the world, and the names have travelled together with the recipes! And the tomato? It arrived in Europe from <b>America</b> after Christopher Columbus's voyage of 1492.</p>"
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
      caption: "Spin the globe and discover typical dishes from many countries. Which one would you like to taste? Say it in English: “I like sushi!”"
    },
    {
      type: "alternatives",
      title: "Other ways to learn food in English",
      intro: "<p>Everyone learns in a different way. Try all these games!</p>",
      tabs: [
        {
          label: "🛒 The supermarket game",
          html: "<p>Take some real food from the kitchen (or draw it). One player is the <b>cashier</b>, the other is the <b>customer</b>.</p>" +
            "<p>🧑 <i>“Can I have an apple, please?”</i><br>🧑‍🍳 <i>“Here you are! One euro, please.”</i><br>🧑 <i>“Thank you!”</i></p>" +
            "<p>Acting with real objects helps you remember: your brain links the word to the <b>colour</b>, the <b>smell</b> and the <b>weight</b> of the thing!</p>"
        },
        {
          label: "😋 Taste faces",
          html: "<p>Use the faces to remember the sentences:</p>",
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
          label: "🎵 The fruit song",
          html: "<p>Sing to the tune of “Frère Jacques” (“Fra Martino” in Italian):</p>" +
            "<p><i>🎶 Apples, bananas, apples, bananas,<br>I like them, I like them!<br>Carrots and tomatoes, carrots and tomatoes,<br>Yummy, yummy! Yummy, yummy! 🎶</i></p>" +
            "<p>Then change the words to your favourite foods. Songs make words stick in your head like glue!</p>"
        },
        {
          label: "🃏 Match the pairs",
          html: "<p>Match the English word with the Italian word.</p>",
          widget: "match",
          options: { pairs: [["cheese", "formaggio"], ["egg", "uovo"], ["chicken", "pollo"], ["cake", "torta"], ["juice", "succo"], ["ice cream", "gelato"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of food in English",
      nodes: [
        { id: "food", label: "Food", x: 50, y: 6, color: "#f97316", html: "<p><b>Food</b> = cibo.</p>", why: "<p>It is a very old English word, related to <b>feed</b> (to give food). It comes from the Germanic languages, like German.</p>" },
        { id: "fruit", label: "Fruit", x: 15, y: 30, color: "#ef4444", html: "<p>apple, banana, orange, strawberry, grapes</p>", why: "<p><b>Fruit</b> comes from the Latin <i>fructus</i>, like the Italian word “frutto”: that is why they look alike!</p>" },
        { id: "veg", label: "Vegetables", x: 38, y: 30, color: "#22c55e", html: "<p>carrot, tomato, potato, broccoli</p>", why: "<p><b>Vegetable</b> comes from the Latin <i>vegetare</i>, “to grow”: they are plants that grow in the vegetable garden. Potatoes and tomatoes came from America.</p>" },
        { id: "other", label: "Bread, cheese, egg…", x: 62, y: 30, color: "#eab308", html: "<p>bread, cheese, egg, chicken, fish, pasta, pizza</p>", why: "<p><b>Cheese</b> comes from the Latin <i>caseus</i> (which also gives Italian “cacio”). <b>Pizza</b> and <b>pasta</b> are Italian words that entered English.</p>" },
        { id: "drinks", label: "Drinks", x: 85, y: 30, color: "#0ea5e9", html: "<p>water, milk, juice, tea</p>", why: "<p><b>Tea</b> is the most famous drink of Great Britain: it came from China and became fashionable in England in the 1600s.</p>" },
        { id: "like", label: "I like…", x: 25, y: 65, color: "#16a34a", html: "<p>I like pizza = Mi piace la pizza.</p>", why: "<p>In English the sentence is the other way round from Italian: in Italian “la pizza piace a me”, in English it is like saying “<b>I</b> enjoy pizza”. The subject is always <b>I</b>.</p>" },
        { id: "dont", label: "I don't like…", x: 50, y: 65, color: "#dc2626", html: "<p>I don't like fish = Non mi piace il pesce.</p>", why: "<p><b>Don't</b> is the short form of <b>do not</b>. In English, to say “not” you need this helper <b>do</b>.</p>" },
        { id: "do", label: "Do you like…?", x: 75, y: 65, color: "#8b5cf6", html: "<p>Do you like milk? Yes, I do / No, I don't.</p>", why: "<p>To ask a question English puts <b>do</b> at the beginning. In the short answer only the “do” is repeated: <i>Yes, I do</i>.</p>" },
        { id: "please", label: "Can I have…, please?", x: 50, y: 92, color: "#ec4899", html: "<p>To politely ask for something to eat.</p>", why: "<p><b>Please</b> and <b>thank you</b> are the “magic words”: in Great Britain they are used a lot, even with friends.</p>" }
      ],
      edges: [
        ["food", "fruit", "there is"],
        ["food", "veg", "there are"],
        ["food", "other", "and then"],
        ["food", "drinks", "together with"],
        ["fruit", "like", "you say"],
        ["veg", "dont", "or"],
        ["other", "do", "you ask"],
        ["drinks", "please", "order with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: I like!",
      questions: [
        { type: "mc", q: "How do you say “Non mi piace il latte”?", options: ["I like milk.", "I don't like milk.", "Do you like milk?"], answer: 1, explain: "I don't like milk." },
        { type: "mc", q: "“Do you like apples?” You like them. You answer…", options: ["Yes, I do!", "No, I don't.", "I am apple."], answer: 0, explain: "Yes, I do = Sì!" },
        { type: "tf", q: "“Me too!” means “Anche a me!”", answer: true, explain: "Me too = anche io / anche a me." }
      ]
    }
  ],
  glossary: [
    { t: "Food", d: "Cibo." },
    { t: "Drinks", d: "Bevande." },
    { t: "Fruit", d: "Frutta." },
    { t: "Vegetables", d: "Verdura, ortaggi." },
    { t: "I like…", d: "Mi piace / mi piacciono…" },
    { t: "I don't like…", d: "Non mi piace / non mi piacciono…" },
    { t: "Do you like…?", d: "Ti piace…?" },
    { t: "Please / Thank you", d: "Per favore / grazie." },
    { t: "Healthy", d: "Sano, che fa bene." },
    { t: "Yummy", d: "Buonissimo! (a children's word)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🧀 How do you say “formaggio”?", options: ["cheese", "chicken", "cake"], answer: 0, explain: "Cheese = formaggio." },
      { type: "mc", q: "“Water” means…", options: ["acqua", "succo", "tè"], answer: 0, explain: "Water = acqua 💧." },
      { type: "text", q: "Write in English: uovo 🥚", answer: ["egg", "an egg"], explain: "Uovo = egg." },
      { type: "text", q: "Write in English: gelato 🍦", answer: ["ice cream", "icecream", "ice-cream"], explain: "Gelato = ice cream." },
      { type: "mc", q: "Which of these is a fruit?", options: ["carrot", "strawberry", "potato"], answer: 1, explain: "Strawberry = fragola, it is a fruit." },
      { type: "mc", q: "How do you say “Mi piace la pizza”?", options: ["I like pizza.", "I like the pizza is.", "Pizza me like."], answer: 0, explain: "I like pizza." },
      { type: "order", q: "Put the question “Ti piace il cioccolato?” in order.", items: ["Do", "you", "like", "chocolate?"], explain: "Do you like chocolate?" },
      { type: "mc", q: "“Do you like fish?” You do not like it. You answer…", options: ["Yes, I do.", "No, I don't.", "No, I am."], answer: 1, explain: "No, I don't." },
      { type: "tf", q: "In English “orange” can mean both the fruit and the colour.", answer: true, explain: "The fruit and the colour have the same name." },
      { type: "mc", q: "At the café you ask politely for a juice:", options: ["Juice!", "Can I have a juice, please?", "I don't like juice."], answer: 1, explain: "Can I have…, please? is the polite way." },
      { type: "tf", q: "“Bread” means “burro”.", answer: false, explain: "Bread = pane. Burro = butter." }
    ]
  }
});
