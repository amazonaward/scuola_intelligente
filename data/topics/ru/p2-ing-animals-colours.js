TOPIC('ru', {
  id: "p2-ing-animals-colours",
  title: "Animals and colours",
  intro: "Hello! 👋 Сегодня мы выучим по-английски названия многих <b>животных</b> (animals) и <b>цветов</b> (colours). В конце ты сможешь сказать: <i>«The cat is black!»</i> 🐈‍⬛",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "Colours: цвета",
      html: "<table><tr><th>По-английски</th><th>Произносится</th><th>По-русски</th></tr>" +
        "<tr><td>🔴 <b>red</b></td><td>ред</td><td>красный</td></tr>" +
        "<tr><td>🔵 <b>blue</b></td><td>блу</td><td>синий</td></tr>" +
        "<tr><td>🟡 <b>yellow</b></td><td>е́лоу</td><td>жёлтый</td></tr>" +
        "<tr><td>🟢 <b>green</b></td><td>грин</td><td>зелёный</td></tr>" +
        "<tr><td>🟠 <b>orange</b></td><td>о́риндж</td><td>оранжевый</td></tr>" +
        "<tr><td>🟣 <b>purple</b></td><td>пёпл</td><td>фиолетовый</td></tr>" +
        "<tr><td>🩷 <b>pink</b></td><td>пинк</td><td>розовый</td></tr>" +
        "<tr><td>🟤 <b>brown</b></td><td>браун</td><td>коричневый</td></tr>" +
        "<tr><td>⚫ <b>black</b></td><td>блэк</td><td>чёрный</td></tr>" +
        "<tr><td>⚪ <b>white</b></td><td>уайт</td><td>белый</td></tr>" +
        "<tr><td>🩶 <b>grey</b></td><td>грэй</td><td>серый</td></tr></table>"
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
      caption: "Цвета радуги по-английски. Радуга по-английски — «rainbow»."
    },
    {
      type: "quiz",
      title: "Мини-тест: colours",
      questions: [
        { type: "mc", q: "Как по-английски «зелёный»?", options: ["green", "grey", "red"], answer: 0, explain: "Зелёный = green." },
        { type: "mc", q: "«Yellow» — это…", options: ["синий", "жёлтый", "белый"], answer: 1, explain: "Yellow = жёлтый, как солнце ☀️." },
        { type: "text", q: "Напиши по-английски: чёрный", answer: ["black"], explain: "Чёрный = black." }
      ]
    },
    {
      type: "text",
      title: "Animals: животные",
      html: "<p><b>Pets</b> (домашние питомцы) и <b>farm animals</b> (животные на ферме):</p>" +
        "<ul><li>🐶 <b>dog</b> – собака · 🐱 <b>cat</b> – кошка · 🐟 <b>fish</b> – рыба · 🐦 <b>bird</b> – птица · 🐰 <b>rabbit</b> – кролик</li>" +
        "<li>🐮 <b>cow</b> – корова · 🐷 <b>pig</b> – свинья · 🐴 <b>horse</b> – лошадь · 🐑 <b>sheep</b> – овца · 🐔 <b>hen</b> – курица · 🦆 <b>duck</b> – утка</li></ul>" +
        "<p><b>Wild animals</b> (дикие животные):</p>" +
        "<ul><li>🦁 <b>lion</b> – лев · 🐘 <b>elephant</b> – слон · 🐒 <b>monkey</b> – обезьяна · 🦒 <b>giraffe</b> – жираф · 🐯 <b>tiger</b> – тигр · 🐻 <b>bear</b> – медведь</li></ul>"
    },
    {
      type: "widget",
      title: "Карточки: переверни их",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🐶 dog", back: "собака" },
          { front: "🐱 cat", back: "кошка" },
          { front: "🐟 fish", back: "рыба" },
          { front: "🐦 bird", back: "птица" },
          { front: "🐰 rabbit", back: "кролик" },
          { front: "🐮 cow", back: "корова" },
          { front: "🐷 pig", back: "свинья" },
          { front: "🐴 horse", back: "лошадь" },
          { front: "🐑 sheep", back: "овца" },
          { front: "🦁 lion", back: "лев" },
          { front: "🐘 elephant", back: "слон" },
          { front: "🐒 monkey", back: "обезьяна" }
        ]
      },
      caption: "Прочитай английское слово вслух, потом переверни карточку и проверь себя."
    },
    {
      type: "remember",
      title: "Как построить фразу",
      html: "<p>В английском цвет ставится <b>перед</b> животным:</p>" +
        "<p>🐈‍⬛ <b>a black cat</b> = чёрная кошка</p>" +
        "<p>🐸 <b>a green frog</b> = зелёная лягушка</p>" +
        "<p>Чтобы сказать, какого цвета животное: <b>The dog is brown.</b> = Собака коричневая. <br>Чтобы спросить: <b>What colour is it?</b> = Какого это цвета?</p>"
    },
    {
      type: "example",
      title: "Пример: в парке 🌳",
      html: "<p><b>Tom:</b> Look! A dog! 🐕<br><b>Anna:</b> What colour is it?<br><b>Tom:</b> It's brown and white.<br><b>Anna:</b> And the bird? 🐦<br><b>Tom:</b> The bird is blue!</p>"
    },
    {
      type: "example",
      title: "Пример: I like… 💖",
      html: "<p>Чтобы сказать, что тебе нравится: <b>I like</b> + животное во множественном числе.</p>" +
        "<p><b>I like cats.</b> = Я люблю кошек. 🐱<br><b>My favourite colour is red.</b> = Мой любимый цвет — красный. ❤️</p>"
    },
    {
      type: "widget",
      title: "Соедини слово и перевод",
      widget: "match",
      options: {
        pairs: [
          ["dog", "собака"],
          ["horse", "лошадь"],
          ["sheep", "овца"],
          ["red", "красный"],
          ["white", "белый"],
          ["purple", "фиолетовый"]
        ]
      },
      caption: "Нажми на английское слово, а потом на его перевод."
    },
    {
      type: "curiosity",
      title: "А ты знал, что…? 🐑",
      html: "<p>В английском <b>sheep</b> (овца) и <b>fish</b> (рыба) не меняются во множественном числе: <i>one sheep, two sheep</i>; <i>one fish, three fish</i>!</p>"
    },
    {
      type: "curiosity",
      title: "А ты знал, что…? 🐮",
      html: "<p>Звуки животных тоже звучат по-разному на разных языках! По-английски собака говорит <b>«woof woof»</b>, петух — <b>«cock-a-doodle-doo»</b>, а корова — <b>«moo»</b>.</p>"
    },
    {
      type: "3d",
      title: "Where do they live? Где они живут? 🌍",
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
      caption: "Поверни глобус и найди диких животных (wild animals): каждое живёт в своём месте. Попробуй вслух назвать их по-английски!"
    },
    {
      type: "alternatives",
      title: "Другие способы запомнить слова 🌈",
      intro: "<p>Все учатся по-разному: кто-то лучше запоминает с песней, кто-то — глядя на картинки, кто-то — играя. Попробуй все способы!</p>",
      tabs: [
        {
          label: "🎵 Спой стишок",
          html: "<p>Слова с музыкой легко остаются в голове! Спой этот стишок и хлопай в ладоши:</p><p style=\"font-size:1.2em\"><b>Red</b> is the ladybird 🐞,<br><b>Yellow</b> is the chick 🐥,<br><b>Green</b> is the little frog 🐸,<br>Jump, jump, quick, quick!</p><p><b>Blue</b> is the big whale 🐳,<br><b>Pink</b> is the pig 🐷,<br><b>Black</b> and <b>white</b> the zebra 🦓,<br>Dance a little jig!</p>"
        },
        {
          label: "🖼️ Смотри и соединяй",
          html: "<p>У каждого слова есть своя картинка. Посмотри на рисунок и скажи слово по-английски, не думая по-русски!</p>",
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="240" fill="#f8fafc"/><g font-family="sans-serif" font-weight="bold" font-size="22" text-anchor="middle"><circle cx="75" cy="80" r="50" fill="#ef4444"/><text x="75" y="95" font-size="44">🐞</text><text x="75" y="165" fill="#ef4444">red</text><circle cx="225" cy="80" r="50" fill="#facc15"/><text x="225" y="95" font-size="44">🐥</text><text x="225" y="165" fill="#a16207">yellow</text><circle cx="375" cy="80" r="50" fill="#22c55e"/><text x="375" y="95" font-size="44">🐸</text><text x="375" y="165" fill="#15803d">green</text><circle cx="525" cy="80" r="50" fill="#3b82f6"/><text x="525" y="95" font-size="44">🐳</text><text x="525" y="165" fill="#1d4ed8">blue</text><text x="300" y="215" fill="#334155">a red ladybird · a yellow chick · a green frog · a blue whale</text></g></svg>`
        },
        {
          label: "🔗 Похожие слова",
          html: "<p>Многие английские слова похожи на русские, потому что пришли из <b>латыни</b> и других языков:</p><ul><li>🦒 <b>giraffe</b> → жираф</li><li>🐯 <b>tiger</b> → тигр</li><li>🐬 <b>dolphin</b> → дельфин</li><li>🦘 <b>kangaroo</b> → кенгуру</li><li>🐼 <b>panda</b> → панда</li></ul><p>Осторожно, <b>ложные друзья</b>! <b>Fan</b> — это не животное: так говорят про «болельщика» или «вентилятор» 😄.</p>"
        },
        {
          label: "🕵️ Игра «I spy»",
          html: "<p>В Англии дети играют в <b>I spy</b> («Я шпион»): один говорит <i>«I spy with my little eye something… <b>red</b>!»</i>, а остальные должны угадать красный предмет в комнате.</p><p>Поиграй в неё с семьёй, называя цвета по-английски! Потом попробуй с животными: <i>«I spy an animal… it's <b>grey</b> and very big!»</i> → elephant 🐘</p>"
        },
        {
          label: "🃏 Карточки",
          html: "<p>Посмотри на картинку, скажи слово, а потом переверни карточку и проверь себя.</p>",
          widget: "flashcards",
          options: { cards: [
            { front: "🐄", back: "cow – корова" },
            { front: "🐑", back: "sheep – овца" },
            { front: "🐔", back: "hen – курица" },
            { front: "🐟", back: "fish – рыба" },
            { front: "🟠", back: "orange – оранжевый" },
            { front: "🟣", back: "purple – фиолетовый" },
            { front: "🟤", back: "brown – коричневый" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта темы Animals and colours 🗺️",
      nodes: [
        { id: "english", label: "English words", x: 50, y: 6, color: "#8b5cf6", html: "<p>Сегодня мы выучили две группы слов: <b>животные</b> и <b>цвета</b>.</p>", why: "<p>На английском говорят по всему миру. Многие его слова пришли из древнегерманского языка, другие — из латыни и французского: поэтому некоторые слова похожи на слова из других языков!</p>" },
        { id: "animals", label: "Animals", x: 22, y: 30, color: "#f59e0b", html: "<p>Cat, dog, cow, horse, lion, elephant…</p>", why: "<p>У животных на ферме очень древние английские названия (cow, pig, sheep). Интересно: а мясо называется словами из французского (beef, pork), потому что давным-давно знатные люди в Англии говорили по-французски!</p>" },
        { id: "colours", label: "Colours", x: 78, y: 30, color: "#ef4444", html: "<p>Red, blue, green, yellow, black, white…</p>", why: "<p>В Англии пишут <b>colour</b>, а в США — <b>color</b>: это одно и то же слово, оно пришло из латинского «color».</p>" },
        { id: "pets", label: "Pets", x: 6, y: 55, color: "#fb923c", html: "<p>Домашние питомцы: cat, dog, fish, rabbit.</p>", why: "<p>Pet значит «домашний любимец»: он живёт вместе с нами дома.</p>" },
        { id: "farm", label: "Farm animals", x: 22, y: 60, color: "#84cc16", html: "<p>Животные фермы: cow, pig, hen, sheep, horse.</p>", why: "<p>Farm = ферма. Эти животные помогают людям или дают еду: молоко и яйца.</p>" },
        { id: "wild", label: "Wild animals", x: 38, y: 55, color: "#ca8a04", html: "<p>Дикие животные: lion, elephant, monkey, giraffe.</p>", why: "<p>Wild = дикий: они живут на свободе в природе — в саванне, в джунглях или у полюса.</p>" },
        { id: "order", label: "a + colour + animal", x: 60, y: 62, color: "#0ea5e9", html: "<p>В английском цвет стоит <b>впереди</b>: <b>a black cat</b> = чёрная кошка.</p>", why: "<p>В каждом языке свои правила порядка слов. В английском прилагательное (слово, которое описывает) почти всегда стоит <b>перед</b> существительным. В русском обычно тоже!</p>" },
        { id: "question", label: "What colour is it?", x: 85, y: 62, color: "#ec4899", html: "<p>Вопрос: <b>What colour is it?</b> Ответ: <b>It's green.</b></p>", why: "<p>В английском вопросы со словом «what» спрашивают о чём-то: what colour = какой цвет.</p>" },
        { id: "like", label: "I like…", x: 50, y: 90, color: "#22c55e", html: "<p><b>I like dogs</b> = Я люблю собак. <b>I don't like spiders</b> = Я не люблю пауков.</p>", why: "<p>С помощью «I like» ты рассказываешь, что тебе нравится. Заметь: когда говоришь о собаках вообще, говоришь «dogs» во множественном числе.</p>" }
      ],
      edges: [
        ["english", "animals", ""],
        ["english", "colours", ""],
        ["animals", "pets", "дома"],
        ["animals", "farm", "на ферме"],
        ["animals", "wild", "в природе"],
        ["colours", "order", "перед словом"],
        ["animals", "order", ""],
        ["colours", "question", "спрашиваем так"],
        ["order", "like", "чтобы говорить о вкусах"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: animals",
      questions: [
        { type: "mc", q: "🐴 По-английски это…", options: ["horse", "house", "hen"], answer: 0, explain: "Лошадь = horse." },
        { type: "mc", q: "Как сказать «чёрная кошка»?", options: ["a cat black", "a black cat", "black a cat"], answer: 1, explain: "Цвет стоит впереди: a black cat." },
        { type: "tf", q: "«Elephant» значит слон.", answer: true, explain: "Верно! 🐘" }
      ]
    }
  ],
  glossary: [
    { t: "Animals", d: "Животные." },
    { t: "Colours", d: "Цвета (в американском английском пишут «colors»)." },
    { t: "Pets", d: "Домашние питомцы." },
    { t: "Farm animals", d: "Животные фермы." },
    { t: "Wild animals", d: "Дикие животные." },
    { t: "What colour is it?", d: "Какого это цвета?" },
    { t: "I like…", d: "Мне нравится / я люблю…" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "🐷 по-английски…", options: ["pig", "dog", "cow"], answer: 0, explain: "Свинья = pig." },
      { type: "mc", q: "«Blue» значит…", options: ["синий", "чёрный", "коричневый"], answer: 0, explain: "Blue = синий." },
      { type: "text", q: "Напиши по-английски: собака", answer: ["dog", "a dog"], explain: "Собака = dog." },
      { type: "text", q: "Напиши по-английски: красный", answer: ["red"], explain: "Красный = red." },
      { type: "mc", q: "Как сказать «зелёная лягушка»?", options: ["a green frog", "a frog green", "green a frog"], answer: 0, explain: "Цвет перед животным: a green frog." },
      { type: "tf", q: "«Monkey» значит обезьяна.", answer: true, explain: "Да, monkey = обезьяна 🐒." },
      { type: "tf", q: "«White» значит чёрный.", answer: false, explain: "Нет: white = белый, black = чёрный." },
      { type: "mc", q: "Что значит «What colour is it?»", options: ["Что это за животное?", "Какого это цвета?", "Сколько тебе лет?"], answer: 1, explain: "What colour is it? = Какого это цвета?" },
      { type: "mc", q: "Какое животное дикое (wild)?", options: ["cat", "lion", "hen"], answer: 1, explain: "Лев (lion) — дикое животное." },
      { type: "mc", q: "«I like dogs» значит…", options: ["У меня есть собака", "Я люблю собак", "Собака большая"], answer: 1, explain: "I like = мне нравится / я люблю." }
    ]
  }
});
