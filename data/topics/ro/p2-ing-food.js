TOPIC('ro', {
  id: "p2-ing-food",
  title: "Food",
  intro: "Yummy! 😋 Astăzi învățăm numele <b>mâncărurilor</b> (food, se pronunță <i>fuud</i>) și ale <b>băuturilor</b> (drinks) în engleză. Și învățăm să spunem ce ne place: <i>«I like pizza!»</i> 🍕 și ce nu ne place: <i>«I don't like broccoli!»</i> 🥦",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Fruit and vegetables: fructe și legume 🍎🥕",
      html: "<table><tr><th>Engleză</th><th>Se pronunță</th><th>Română</th></tr>" +
        "<tr><td>🍎 <b>apple</b></td><td>ă-pl</td><td>măr</td></tr>" +
        "<tr><td>🍌 <b>banana</b></td><td>bă-na-nă</td><td>banană</td></tr>" +
        "<tr><td>🍊 <b>orange</b></td><td>o-rinj</td><td>portocală</td></tr>" +
        "<tr><td>🍓 <b>strawberry</b></td><td>stro-bă-ri</td><td>căpșună</td></tr>" +
        "<tr><td>🍇 <b>grapes</b></td><td>greips</td><td>struguri</td></tr>" +
        "<tr><td>🥕 <b>carrot</b></td><td>ca-rot</td><td>morcov</td></tr>" +
        "<tr><td>🍅 <b>tomato</b></td><td>tă-mei-tou</td><td>roșie</td></tr>" +
        "<tr><td>🥔 <b>potato</b></td><td>pă-tei-tou</td><td>cartof</td></tr></table>" +
        "<p>💡 <b>Orange</b> înseamnă și <b>portocală</b>, și culoarea <b>portocaliu</b>!</p>"
    },
    {
      type: "text",
      title: "Other food and drinks: alte mâncăruri și băuturi 🍞🥛",
      html: "<ul>" +
        "<li>🍞 <b>bread</b> (bred) – pâine</li>" +
        "<li>🧀 <b>cheese</b> (ciiz) – brânză</li>" +
        "<li>🥚 <b>egg</b> (eg) – ou</li>" +
        "<li>🍗 <b>chicken</b> (ci-chin) – pui</li>" +
        "<li>🐟 <b>fish</b> (fiș) – pește</li>" +
        "<li>🍝 <b>pasta</b> – paste · 🍕 <b>pizza</b> – pizza (sunt cuvinte italienești!)</li>" +
        "<li>🍰 <b>cake</b> (keik) – tort · 🍦 <b>ice cream</b> (ais criim) – înghețată · 🍫 <b>chocolate</b> (ciok-lăt) – ciocolată · 🍪 <b>biscuit</b> (bis-chit) – biscuit</li>" +
        "</ul>" +
        "<p><b>Drinks</b> (băuturi):</p>" +
        "<ul><li>💧 <b>water</b> (uo-tăr) – apă · 🥛 <b>milk</b> (milk) – lapte · 🧃 <b>juice</b> (giuus) – suc · 🍵 <b>tea</b> (tii) – ceai</li></ul>"
    },
    {
      type: "widget",
      title: "Flashcards: food",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🍎 apple", back: "măr" },
          { front: "🍌 banana", back: "banană" },
          { front: "🍊 orange", back: "portocală" },
          { front: "🍓 strawberry", back: "căpșună" },
          { front: "🥕 carrot", back: "morcov" },
          { front: "🍅 tomato", back: "roșie" },
          { front: "🍞 bread", back: "pâine" },
          { front: "🧀 cheese", back: "brânză" },
          { front: "🥚 egg", back: "ou" },
          { front: "🍗 chicken", back: "pui" },
          { front: "🍦 ice cream", back: "înghețată" },
          { front: "🥛 milk", back: "lapte" },
          { front: "💧 water", back: "apă" },
          { front: "🧃 juice", back: "suc" }
        ]
      },
      caption: "Spune cuvântul în engleză cu voce tare, apoi întoarce cartonașul ca să verifici."
    },
    {
      type: "quiz",
      title: "Mini-test: what's this?",
      questions: [
        { type: "mc", q: "🍞 Cum se spune „pâine”?", options: ["bread", "cheese", "cake"], answer: 0, explain: "Bread = pâine." },
        { type: "mc", q: "„Milk” înseamnă…", options: ["apă", "lapte", "suc"], answer: 1, explain: "Milk = lapte 🥛." },
        { type: "text", q: "Scrie în engleză: măr 🍎", answer: ["apple", "an apple"], explain: "Măr = apple." }
      ]
    },
    {
      type: "remember",
      title: "I like / I don't like 👍👎",
      html: "<p>👍 <b>I like</b> + mâncare = Îmi place / îmi plac…<br><i>I like pizza.</i> = Îmi place pizza. 🍕<br><i>I like apples.</i> = Îmi plac merele. 🍎</p>" +
        "<p>👎 <b>I don't like</b> + mâncare = Nu-mi place…<br><i>I don't like fish.</i> = Nu-mi place peștele. 🐟</p>" +
        "<p>❓ Ca să întrebi: <b>Do you like…?</b> = Îți place…?<br><i>Do you like chocolate?</i> 🍫<br>✅ <b>Yes, I do!</b> ❌ <b>No, I don't.</b></p>" +
        "<p>💡 În engleză nu se pune „the”: se spune <b>I like pizza</b>, nu «I like the pizza».</p>"
    },
    {
      type: "svg",
      title: "My plate: farfuria mea 🍽️",
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
      caption: "Un prânz sănătos (healthy): legume, fructe, pâine sau paste, puțin pește sau ouă și multă apă."
    },
    {
      type: "example",
      title: "Exemplu: la bufetul școlii 🧃",
      html: "<p><b>Tom:</b> Hello! Can I have a juice, please? 🧃<br>" +
        "<b>Lady:</b> Orange juice or apple juice?<br>" +
        "<b>Tom:</b> Apple juice, please. And a biscuit! 🍪<br>" +
        "<b>Lady:</b> Here you are!<br>" +
        "<b>Tom:</b> Thank you! 😊</p>" +
        "<p>💡 <b>Can I have…, please?</b> = Pot să primesc…, vă rog? &nbsp; <b>Here you are</b> = Poftim.</p>"
    },
    {
      type: "example",
      title: "Exemplu: ce îți place? 🤔",
      html: "<p><b>Anna:</b> Do you like carrots? 🥕<br>" +
        "<b>Leo:</b> Yes, I do! I like carrots. And you?<br>" +
        "<b>Anna:</b> No, I don't. I don't like carrots. I like strawberries! 🍓<br>" +
        "<b>Leo:</b> Me too! 🙌</p>" +
        "<p>💡 <b>Me too!</b> = Și mie!</p>"
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
      caption: "Pune fiecare cuvânt englezesc în grupul potrivit."
    },
    {
      type: "curiosity",
      title: "Știai că…? 🍟",
      html: "<p>Cartofii prăjiți se numesc în <b>Marea Britanie</b> <b>chips</b>, dar în <b>Statele Unite</b> se numesc <b>fries</b> (sau French fries)! Iar cartofii din pungă? Englezii îi numesc <b>crisps</b>, americanii <b>chips</b>. Ce încurcătură! 😄 Un fel de mâncare foarte faimos în Anglia este <b>fish and chips</b>: pește prăjit cu cartofi prăjiți.</p>"
    },
    {
      type: "curiosity",
      title: "Știai că…? 🍕",
      html: "<p>Multe cuvinte englezești despre mâncare vin din <b>italiană</b>: <b>pizza</b>, <b>pasta</b>, <b>spaghetti</b>, <b>lasagne</b>, <b>broccoli</b>, <b>cappuccino</b>, <b>espresso</b>… Mâncarea italiană este iubită în toată lumea, iar numele au călătorit împreună cu rețetele! Și roșia? A ajuns în Europa din <b>America</b>, după călătoria lui Cristofor Columb din 1492.</p>"
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
      caption: "Rotește globul și descoperă preparatele tipice din multe țări. Pe care ți-ar plăcea să-l guști? Spune în engleză: «I like sushi!»"
    },
    {
      type: "alternatives",
      title: "Alte moduri de a învăța mâncarea în engleză",
      intro: "<p>Fiecare învață în alt fel. Încearcă toate aceste jocuri!</p>",
      tabs: [
        {
          label: "🛒 Jocul supermarketului",
          html: "<p>Ia din bucătărie câteva alimente adevărate (sau desenează-le). Un jucător este <b>casierul</b>, celălalt <b>clientul</b>.</p>" +
            "<p>🧑 <i>«Can I have an apple, please?»</i><br>🧑‍🍳 <i>«Here you are! One euro, please.»</i><br>🧑 <i>«Thank you!»</i></p>" +
            "<p>A juca cu obiecte adevărate ajută să ții minte: creierul leagă cuvântul de <b>culoarea</b>, <b>mirosul</b> și <b>greutatea</b> lucrului!</p>"
        },
        {
          label: "😋 Fețele gustului",
          html: "<p>Folosește fețele ca să ții minte frazele:</p>",
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
          label: "🎵 Cântecul fructelor",
          html: "<p>Cântă pe melodia „Frère Jacques” (în Italia „Fra Martino”):</p>" +
            "<p><i>🎶 Apples, bananas, apples, bananas,<br>I like them, I like them!<br>Carrots and tomatoes, carrots and tomatoes,<br>Yummy, yummy! Yummy, yummy! 🎶</i></p>" +
            "<p>Apoi schimbă cuvintele cu mâncărurile tale preferate. Cântecele fac cuvintele să rămână în minte ca lipite cu clei!</p>"
        },
        {
          label: "🃏 Potrivește perechile",
          html: "<p>Potrivește cuvântul englezesc cu cel românesc.</p>",
          widget: "match",
          options: { pairs: [["cheese", "brânză"], ["egg", "ou"], ["chicken", "pui"], ["cake", "tort"], ["juice", "suc"], ["ice cream", "înghețată"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Harta mâncării în engleză",
      nodes: [
        { id: "food", label: "Food", x: 50, y: 6, color: "#f97316", html: "<p><b>Food</b> = mâncare.</p>", why: "<p>Este un cuvânt foarte vechi al englezei, înrudit cu <b>feed</b> (a hrăni). Vine din limbile germanice, ca germana.</p>" },
        { id: "fruit", label: "Fruit", x: 15, y: 30, color: "#ef4444", html: "<p>apple, banana, orange, strawberry, grapes</p>", why: "<p><b>Fruit</b> vine din latinescul <i>fructus</i>, ca și cuvântul românesc „fruct”: de aceea seamănă!</p>" },
        { id: "veg", label: "Vegetables", x: 38, y: 30, color: "#22c55e", html: "<p>carrot, tomato, potato, broccoli</p>", why: "<p><b>Vegetable</b> vine din latinescul <i>vegetare</i>, „a crește”: sunt plante care cresc în grădină. Cartofii și roșiile au venit din America.</p>" },
        { id: "other", label: "Bread, cheese, egg…", x: 62, y: 30, color: "#eab308", html: "<p>bread, cheese, egg, chicken, fish, pasta, pizza</p>", why: "<p><b>Cheese</b> vine din latinescul <i>caseus</i> (de unde și „caș” în română). <b>Pizza</b> și <b>pasta</b> sunt cuvinte italienești intrate în engleză.</p>" },
        { id: "drinks", label: "Drinks", x: 85, y: 30, color: "#0ea5e9", html: "<p>water, milk, juice, tea</p>", why: "<p><b>Ceaiul</b> (tea) este cea mai faimoasă băutură din Marea Britanie: a venit din China și a devenit la modă în Anglia în secolul al XVII-lea.</p>" },
        { id: "like", label: "I like…", x: 25, y: 65, color: "#16a34a", html: "<p>I like pizza = Îmi place pizza.</p>", why: "<p>În engleză fraza este pe dos față de română: în română „pizza îmi place mie”, în engleză este ca și cum ai spune «<b>eu</b> apreciez pizza». Subiectul este mereu <b>I</b>.</p>" },
        { id: "dont", label: "I don't like…", x: 50, y: 65, color: "#dc2626", html: "<p>I don't like fish = Nu-mi place peștele.</p>", why: "<p><b>Don't</b> este forma scurtă a lui <b>do not</b>. În engleză, ca să spui „nu”, ai nevoie de acest ajutor <b>do</b>.</p>" },
        { id: "do", label: "Do you like…?", x: 75, y: 65, color: "#8b5cf6", html: "<p>Do you like milk? Yes, I do / No, I don't.</p>", why: "<p>Ca să pună o întrebare, engleza pune <b>do</b> la început. În răspunsul scurt se repetă doar „do”: <i>Yes, I do</i>.</p>" },
        { id: "please", label: "Can I have…, please?", x: 50, y: 92, color: "#ec4899", html: "<p>Ca să ceri politicos ceva de mâncare.</p>", why: "<p><b>Please</b> (te rog) și <b>thank you</b> (mulțumesc) sunt „cuvintele magice”: în Marea Britanie se folosesc foarte mult, chiar și cu prietenii.</p>" }
      ],
      edges: [
        ["food", "fruit", "există"],
        ["food", "veg", "există"],
        ["food", "other", "și apoi"],
        ["food", "drinks", "împreună cu"],
        ["fruit", "like", "spui"],
        ["veg", "dont", "sau"],
        ["other", "do", "întrebi"],
        ["drinks", "please", "comandă cu"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-test: I like!",
      questions: [
        { type: "mc", q: "Cum se spune „Nu-mi place laptele”?", options: ["I like milk.", "I don't like milk.", "Do you like milk?"], answer: 1, explain: "I don't like milk." },
        { type: "mc", q: "«Do you like apples?» Îți plac. Răspunzi…", options: ["Yes, I do!", "No, I don't.", "I am apple."], answer: 0, explain: "Yes, I do = Da!" },
        { type: "tf", q: "«Me too!» înseamnă «Și mie!»", answer: true, explain: "Me too = și eu / și mie." }
      ]
    }
  ],
  glossary: [
    { t: "Food", d: "Mâncare." },
    { t: "Drinks", d: "Băuturi." },
    { t: "Fruit", d: "Fructe." },
    { t: "Vegetables", d: "Legume." },
    { t: "I like…", d: "Îmi place / îmi plac…" },
    { t: "I don't like…", d: "Nu-mi place / nu-mi plac…" },
    { t: "Do you like…?", d: "Îți place…?" },
    { t: "Please / Thank you", d: "Te rog / mulțumesc." },
    { t: "Healthy", d: "Sănătos, care face bine." },
    { t: "Yummy", d: "Delicios! (cuvânt al copiilor)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🧀 Cum se spune „brânză”?", options: ["cheese", "chicken", "cake"], answer: 0, explain: "Cheese = brânză." },
      { type: "mc", q: "„Water” înseamnă…", options: ["apă", "suc", "ceai"], answer: 0, explain: "Water = apă 💧." },
      { type: "text", q: "Scrie în engleză: ou 🥚", answer: ["egg", "an egg"], explain: "Ou = egg." },
      { type: "text", q: "Scrie în engleză: înghețată 🍦", answer: ["ice cream", "icecream", "ice-cream"], explain: "Înghețată = ice cream." },
      { type: "mc", q: "Care dintre acestea este un fruct (fruit)?", options: ["carrot", "strawberry", "potato"], answer: 1, explain: "Strawberry = căpșună, este un fruct." },
      { type: "mc", q: "Cum se spune „Îmi place pizza”?", options: ["I like pizza.", "I like the pizza is.", "Pizza me like."], answer: 0, explain: "I like pizza." },
      { type: "order", q: "Pune în ordine întrebarea „Îți place ciocolata?”", items: ["Do", "you", "like", "chocolate?"], explain: "Do you like chocolate?" },
      { type: "mc", q: "«Do you like fish?» Nu-ți place. Răspunzi…", options: ["Yes, I do.", "No, I don't.", "No, I am."], answer: 1, explain: "No, I don't." },
      { type: "tf", q: "În engleză «orange» poate însemna și portocală, și portocaliu.", answer: true, explain: "Fructul și culoarea au același nume." },
      { type: "mc", q: "La bufet ceri politicos un suc:", options: ["Juice!", "Can I have a juice, please?", "I don't like juice."], answer: 1, explain: "Can I have…, please? este modul politicos." },
      { type: "tf", q: "«Bread» înseamnă «unt».", answer: false, explain: "Bread = pâine. Unt = butter." }
    ]
  }
});
