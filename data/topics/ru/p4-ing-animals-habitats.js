TOPIC('ru', {
  id: "p4-ing-animals-habitats",
  title: "Wild animals",
  intro: "Львы в саванне, пингвины на льду, верблюды в пустыне… 🦁🐧🐫 <b>Wild animals</b> (дикие животные) живут в разных местах, которые называются <b>habitats</b> (среда обитания). Давай выучим по-английски названия животных и их мест обитания и научимся их описывать: <i>«Polar bears live in the Arctic. They can swim. They eat fish.»</i>",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "1. Habitats: где живут животные",
      html: `<p><b>Habitat</b> — это место, где животное живёт, находит еду и растит детёнышей. Вот основные:</p>
<table>
<tr><th>Английский</th><th>Произношение</th><th>Русский</th></tr>
<tr><td>🌳 <b>forest</b></td><td>фо́рест</td><td>лес</td></tr>
<tr><td>🌴 <b>rainforest</b> / jungle</td><td>ре́йнфорест / джа́нгл</td><td>тропический лес / джунгли</td></tr>
<tr><td>🦒 <b>savannah</b></td><td>сава́на</td><td>саванна</td></tr>
<tr><td>🏜️ <b>desert</b></td><td>де́зерт</td><td>пустыня</td></tr>
<tr><td>🌊 <b>ocean</b> / sea</td><td>о́ушн / си</td><td>океан / море</td></tr>
<tr><td>🧊 <b>polar regions</b> (Arctic, Antarctica)</td><td>по́улар ри́джнз</td><td>полярные регионы (Арктика, Антарктида)</td></tr>
<tr><td>🏔️ <b>mountains</b></td><td>ма́унтинз</td><td>горы</td></tr>
<tr><td>🏞️ <b>river</b></td><td>ри́вер</td><td>река</td></tr>
</table>
<p>Чтобы сказать, где живёт животное: <b>Lions live in the savannah.</b> = Львы живут в саванне. Если животное одно: <b>A camel lives in the desert.</b> (с окончанием -s, потому что это «it»).</p>`
    },
    {
      type: "text",
      title: "2. Wild animals: дикие животные",
      html: `<ul>
<li>🦒 <b>Savannah</b>: lion (лев), zebra (зебра), giraffe (жираф), elephant (слон), cheetah (гепард)</li>
<li>🌴 <b>Rainforest</b>: monkey (обезьяна), parrot (попугай), snake (змея), tiger (тигр), frog (лягушка)</li>
<li>🏜️ <b>Desert</b>: camel (верблюд), scorpion (скорпион), lizard (ящерица)</li>
<li>🧊 <b>Polar regions</b>: polar bear (белый медведь), penguin (пингвин), seal (тюлень)</li>
<li>🌊 <b>Ocean</b>: whale (кит), dolphin (дельфин), shark (акула), octopus (осьминог)</li>
<li>🌳 <b>Forest</b>: bear (медведь), wolf (волк), deer (олень), owl (сова), fox (лиса)</li>
<li>🏔️ <b>Mountains</b>: eagle (орёл), goat (коза), marmot (сурок)</li>
<li>🏞️ <b>River</b>: crocodile (крокодил), hippo (бегемот), beaver (бобр)</li>
</ul>
<p>⚠️ Необычные множественные числа: one <b>wolf</b> → two <b>wolves</b>; one <b>deer</b> → two <b>deer</b> (так же!); one <b>fish</b> → two <b>fish</b>; one <b>mouse</b> → two <b>mice</b>.</p>`
    },
    {
      type: "widget",
      title: "Карточки: wild animals",
      widget: "flashcards",
      options: {
        cards: [
          { front: "🦁 lion", back: "лев" },
          { front: "🦓 zebra", back: "зебра" },
          { front: "🐆 cheetah", back: "гепард" },
          { front: "🐒 monkey", back: "обезьяна" },
          { front: "🦜 parrot", back: "попугай" },
          { front: "🐍 snake", back: "змея" },
          { front: "🐫 camel", back: "верблюд" },
          { front: "🐻‍❄️ polar bear", back: "белый медведь" },
          { front: "🐧 penguin", back: "пингвин" },
          { front: "🐋 whale", back: "кит" },
          { front: "🦈 shark", back: "акула" },
          { front: "🐺 wolf", back: "волк" },
          { front: "🦉 owl", back: "сова" },
          { front: "🦅 eagle", back: "орёл" },
          { front: "🐊 crocodile", back: "крокодил" },
          { front: "🦛 hippo", back: "бегемот" }
        ]
      },
      caption: "Прочитай слово вслух и попробуй вспомнить перевод, прежде чем перевернуть карточку."
    },
    {
      type: "widget",
      title: "Who lives where? Кто где живёт?",
      widget: "classify",
      options: {
        groups: ["🦒 savannah", "🌴 rainforest", "🏜️ desert", "🧊 polar regions", "🌊 ocean"],
        items: [
          ["🦁 lion", 0], ["🦓 zebra", 0], ["🦒 giraffe", 0],
          ["🐒 monkey", 1], ["🦜 parrot", 1], ["🐸 frog", 1],
          ["🐫 camel", 2], ["🦂 scorpion", 2],
          ["🐻‍❄️ polar bear", 3], ["🐧 penguin", 3], ["🦭 seal", 3],
          ["🐬 dolphin", 4], ["🦈 shark", 4], ["🐙 octopus", 4]
        ]
      },
      caption: "Нажми на животное, а потом на его среду обитания."
    },
    {
      type: "quiz",
      title: "Мини-тест: животные и места обитания",
      questions: [
        { type: "mc", q: "«Desert» означает…", options: ["dessert (десерт)", "пустыня", "лес"], answer: 1, explain: "Desert (одна s) = пустыня. Dessert (две s) = десерт, сладкое!" },
        { type: "mc", q: "Где живёт пингвин?", options: ["in the desert", "in Antarctica", "in the rainforest"], answer: 1, explain: "Пингвины живут в основном в Южном полушарии: в Антарктиде и на холодных побережьях." },
        { type: "text", q: "Как по-английски «кит»?", answer: ["whale", "a whale"], explain: "Кит = whale." },
        { type: "mc", q: "Множественное число слова «wolf» — это…", options: ["wolfs", "wolves", "wolf"], answer: 1, explain: "Неправильное множественное число: wolf → wolves." }
      ]
    },
    {
      type: "text",
      title: "3. Как описать животное",
      html: `<p>Несколькими фразами можно описать любое животное:</p>
<ul>
<li>🏠 <b>Где живёт</b>: <i>It lives in the rainforest.</i></li>
<li>📏 <b>Какое оно</b>: <i>It's big / small / fast / slow / dangerous / beautiful.</i></li>
<li>🎨 <b>Что у него есть</b>: <i>It has got</i> (у него есть) <i>a long neck / big ears / sharp teeth / stripes / a long tail.</i></li>
<li>💪 <b>Что оно умеет</b>: <i>It <b>can</b> run fast. It <b>can</b> swim. It <b>can't</b> fly.</i> (can = умеет / может; can't = не умеет / не может)</li>
<li>🍖 <b>Что оно ест</b>: <i>It eats meat</i> (мясо) / <i>grass</i> (трава) / <i>leaves</i> (листья) / <i>fish</i> (рыба) / <i>insects</i> (насекомые).</li>
</ul>
<p>После <b>can</b> глагол всегда остаётся без изменений, даже с he/she/it: <i>It can swim</i> (а не «it can swims»).</p>`
    },
    {
      type: "svg",
      title: "Портрет жирафа",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fef3c7"/>
<rect y="260" width="600" height="60" fill="#bef264"/>
<ellipse cx="170" cy="200" rx="80" ry="38" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<polygon points="215,180 240,175 275,50 255,45" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<ellipse cx="275" cy="45" rx="30" ry="16" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<line x1="262" y1="32" x2="258" y2="16" stroke="#92400e" stroke-width="4"/>
<line x1="274" y1="31" x2="274" y2="15" stroke="#92400e" stroke-width="4"/>
<circle cx="285" cy="40" r="4" fill="#1e293b"/>
<g stroke="#92400e" stroke-width="8"><line x1="115" y1="225" x2="115" y2="290"/><line x1="140" y1="230" x2="140" y2="292"/><line x1="200" y1="230" x2="200" y2="292"/><line x1="225" y1="225" x2="225" y2="290"/></g>
<g fill="#b45309"><circle cx="140" cy="195" r="9"/><circle cx="175" cy="185" r="8"/><circle cx="205" cy="205" r="9"/><circle cx="160" cy="215" r="7"/><circle cx="250" cy="120" r="6"/><circle cx="262" cy="80" r="6"/><circle cx="238" cy="160" r="7"/></g>
<path d="M92 195 Q70 215 78 240" stroke="#92400e" stroke-width="4" fill="none"/>
<g font-size="18" fill="#1e293b">
<text x="340" y="50" font-weight="bold" font-size="24" fill="#92400e">The giraffe</text>
<text x="340" y="85">🏠 It lives in the savannah.</text>
<text x="340" y="115">📏 It's very tall.</text>
<text x="340" y="145">🦒 It has got a long neck.</text>
<text x="340" y="175">🟤 It has got brown spots.</text>
<text x="340" y="205">🍃 It eats leaves.</text>
<text x="340" y="235">💪 It can run fast.</text>
</g>
<text x="300" y="305" font-size="16" fill="#3f6212" text-anchor="middle">Это самое высокое животное в мире: до 5,5 метров!</text>
</svg>`,
      caption: "Пятью-шестью простыми фразами ты описал животное: где оно живёт, какое оно, что у него есть, что оно ест, что умеет."
    },
    {
      type: "3d",
      title: "Путешествие животных вокруг света",
      scene: "globe",
      options: {
        points: [
          { lat: -2, lon: 35, label: "🦁 Savannah (Kenya, Tanzania)", color: "#f59e0b" },
          { lat: -3, lon: -60, label: "🐒 Rainforest (Amazon)", color: "#16a34a" },
          { lat: 23, lon: 13, label: "🐫 Desert (Sahara)", color: "#eab308" },
          { lat: 78, lon: 16, label: "🐻‍❄️ Arctic (Svalbard)", color: "#38bdf8" },
          { lat: -75, lon: 0, label: "🐧 Antarctica", color: "#0ea5e9" },
          { lat: 0, lon: -150, label: "🐋 Pacific Ocean", color: "#1d4ed8" },
          { lat: 46, lon: 10, label: "🦅 Mountains (Alps)", color: "#64748b" },
          { lat: 0, lon: 25, label: "🐊 River (Congo)", color: "#14b8a6" }
        ]
      },
      caption: "Вращай глобус и находи места обитания. Смотри: белые медведи (Арктика, на севере) и пингвины (Антарктида, на юге) живут на противоположных концах Земли!"
    },
    {
      type: "example",
      title: "Пример на практике: угадай, кто я! (Animal riddles)",
      html: `<p>Прочитай загадки и попробуй ответить по-английски:</p>
<ol>
<li><i>«I live in the desert. I've got one or two humps. I can walk for days without water. What am I?»</i> → 🐫 <b>A camel!</b></li>
<li><i>«I live in the ocean. I'm very, very big. I'm not a fish: I breathe air. What am I?»</i> → 🐋 <b>A whale!</b></li>
<li><i>«I live in the rainforest. I'm green. I can jump and I eat insects. What am I?»</i> → 🐸 <b>A frog!</b></li>
</ol>
<p>Теперь придумай загадку для одноклассников, используя фразы <b>I live in… / I've got… / I can… / I eat…</b></p>`
    },
    {
      type: "example",
      title: "Пример на практике: карточка для класса",
      html: `<p>Марко подготовил по-английски карточку о своём любимом животном:</p>
<p><b>My favourite animal: the cheetah 🐆</b><br>
<i>The cheetah lives in the savannah in Africa. It's yellow with black spots. It has got long legs and a long tail. It eats meat. It can run very fast: it's the fastest animal on land! It can't climb trees very well. I love cheetahs!</i></p>
<p>Обрати внимание: <b>fast</b> (быстрый) → <b>the fastest</b> (самый быстрый). Так же: <b>big → the biggest</b>, <b>tall → the tallest</b>.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Белые медведи и пингвины никогда не встречаются",
      html: `<p>В мультфильмах белые медведи и пингвины часто играют вместе… но в жизни они <b>никогда не встречаются</b>! <b>Белые медведи</b> живут на <b>Северном полюсе</b> (Арктика), а почти все <b>пингвины</b> живут в <b>Южном полушарии</b>, главным образом вокруг <b>Южного полюса</b> (Антарктида). Между ними около 20 000 км! 🌍</p>
<p>Название «Арктика» происходит от греческого <i>arktos</i> — «медведь» (по созвездию Медведицы), а «Антарктида» означает «противоположная Арктике».</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Рекорды животных",
      html: `<ul>
<li>🐋 <b>Blue whale</b> (синий кит) — самое большое животное из всех, что когда-либо существовали, больше любого динозавра: его длина может превышать <b>30 метров</b>!</li>
<li>🐆 <b>Cheetah</b> (гепард) — самое быстрое сухопутное животное: в коротком рывке оно разгоняется примерно до <b>100–110 км/ч</b>.</li>
<li>🐫 В горбу верблюда <b>нет воды</b>, там <b>жир</b>: это запас энергии для долгих путешествий по пустыне.</li>
</ul>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li>Habitat: forest, rainforest/jungle, savannah, desert, ocean, polar regions, mountains, river.</li>
<li><b>They live in…</b> / <b>It lives in…</b> (с it нужна -s!).</li>
<li><b>It has got</b> (у него есть) · <b>It can</b> (умеет) / <b>It can't</b> (не умеет) + глагол без -s.</li>
<li><b>It eats</b> meat / grass / leaves / fish / insects.</li>
<li>Неправильное множественное число: wolf → wolves, mouse → mice, deer → deer, fish → fish.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы выучить названия животных",
      intro: "Слова лучше запоминаются, если связать их с чем-то. Вот четыре разных пути: «родственные» слова из итальянского и русского, составные слова, 3D-глобус и игра «фоторобот».",
      tabs: [
        {
          label: "👯 Слова-родственники",
          html: `<p>Многие английские названия животных <b>похожи на русские</b>, потому что пришли из латыни или греческого. Они называются <b>cognates</b> (родственные слова):</p>
<ul>
<li>elephant → слон (но похоже на «элефант») · giraffe → жираф · zebra → зебра</li>
<li>crocodile → крокодил · hippopotamus (hippo) → гиппопотам, бегемот</li>
<li>tiger → тигр · lion → лев · penguin → пингвин</li>
<li>camel → верблюд · dolphin → дельфин · scorpion → скорпион</li>
</ul>
<p>Другие же слова германского происхождения и не похожи на русские: <b>wolf</b> (волк), <b>bear</b> (медведь), <b>fox</b> (лиса), <b>owl</b> (сова). Но посмотри на немецкий: Wolf, Bär, Fuchs, Eule… почти как в английском!</p>`
        },
        {
          label: "🧩 Составные слова",
          html: `<p>В английском много названий животных получаются <b>соединением двух слов</b>, как из кубиков LEGO. Если знаешь части, понимаешь и название!</p>
<table>
<tr><th>Часть 1</th><th>Часть 2</th><th>Животное</th></tr>
<tr><td>polar (полярный)</td><td>bear (медведь)</td><td>🐻‍❄️ polar bear</td></tr>
<tr><td>star (звезда)</td><td>fish (рыба)</td><td>⭐ starfish = морская звезда</td></tr>
<tr><td>jelly (желе)</td><td>fish (рыба)</td><td>🪼 jellyfish = медуза</td></tr>
<tr><td>sea (море)</td><td>horse (конь)</td><td>🌊🐴 seahorse = морской конёк</td></tr>
<tr><td>rain (дождь)</td><td>forest (лес)</td><td>🌧️🌳 rainforest = тропический лес</td></tr>
</table>
<p>Любопытно: <b>hippopotamus</b> по-гречески означает «речной конь» (hippos = конь, potamos = река)!</p>`
        },
        {
          label: "🌍 3D-глобус",
          html: `<p>Вращай глобус: каждая точка — это место обитания. Попробуй вслух сказать фразу про каждое, например: <i>«Camels live in the Sahara Desert, in Africa.»</i> Заметь, что пустыни расположены около тропиков, тропические леса — около экватора, а льды — у полюсов: климат решает, кто где может жить!</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: -2, lon: 35, label: "🦁 Savannah", color: "#f59e0b" },
              { lat: -3, lon: -60, label: "🐒 Amazon rainforest", color: "#16a34a" },
              { lat: 23, lon: 13, label: "🐫 Sahara Desert", color: "#eab308" },
              { lat: 78, lon: 16, label: "🐻‍❄️ Arctic", color: "#38bdf8" },
              { lat: -75, lon: 0, label: "🐧 Antarctica", color: "#0ea5e9" },
              { lat: -25, lon: 133, label: "🦘 Australian outback", color: "#ea580c" },
              { lat: 0, lon: 113, label: "🦧 Borneo rainforest", color: "#15803d" }
            ]
          }
        },
        {
          label: "🕵️ Игра «фоторобот»",
          html: `<p>Подбери к каждому описанию нужное животное. Внимательно читай ключевые слова: <i>neck</i> (шея), <i>stripes</i> (полосы), <i>humps</i> (горбы), <i>fly</i> (летать).</p>`,
          widget: "match",
          options: {
            pairs: [
              ["It has got a very long neck.", "🦒 giraffe"],
              ["It has got black and white stripes.", "🦓 zebra"],
              ["It has got humps and lives in the desert.", "🐫 camel"],
              ["It's a bird but it can't fly. It can swim.", "🐧 penguin"],
              ["It can fly and it can see at night.", "🦉 owl"],
              ["It lives in the ocean and it has got sharp teeth.", "🦈 shark"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта: животные и места обитания",
      nodes: [
        { id: "habitat", label: "Habitat", x: 50, y: 8, color: "#16a34a", html: "Место, где животное живёт, питается и растит детёнышей.", why: "<i>Habitat</i> — латинское слово, означающее «(он) обитает». Натуралисты XVIII века использовали его в своих каталогах на латыни, чтобы указать, где живёт каждый вид; потом оно перешло в английский и другие языки." },
        { id: "clima", label: "Климат", x: 18, y: 30, color: "#0ea5e9", html: "Жаркий, холодный, сухой, дождливый: он определяет, какие среды обитания есть в данном месте.", why: "Возле экватора Солнце греет сильнее и идёт много дождей (тропические леса); у полюсов очень холодно (льды); возле тропиков сухой воздух создаёт большие пустыни, такие как Сахара." },
        { id: "adatt", label: "Приспособления", x: 82, y: 30, color: "#f59e0b", html: "Особенности, помогающие выжить: густая шерсть, горб, длинная шея…", why: "Это объяснил <b>Чарльз Дарвин</b> (1859): животные, лучше приспособленные к среде, выживают и имеют больше потомства, поэтому за множество поколений виды меняются. Длинная шея жирафа позволяет ему дотянуться до самых высоких листьев." },
        { id: "wild", label: "Wild animals", x: 50, y: 34, color: "#ef4444", html: "Дикие животные: lion, monkey, camel, penguin, whale…", why: "<i>Wild</i> (дикий) противопоставляется <i>pets</i> (домашние питомцы) и <i>farm animals</i> (животные на ферме): дикие животные не были одомашнены человеком." },
        { id: "nomi", label: "Названия и cognates", x: 18, y: 62, color: "#a855f7", html: "Многие названия похожи на русские: elephant, giraffe, crocodile.", why: "Эти животные были неизвестны древним германским народам: англичане взяли их названия из латыни и греческого (часто через французский). А у европейских животных, таких как wolf и bear, древние германские названия." },
        { id: "plurali", label: "Неправильное мн. число", x: 18, y: 88, color: "#64748b", html: "wolf → wolves, mouse → mice, deer → deer, fish → fish.", why: "Это остатки древнеанглийского языка, в котором множественное число образовывалось по-разному. Слова, которые веками очень часто употребляли, выдержали перемены и сохранили старую форму." },
        { id: "descr", label: "Описание", x: 50, y: 64, color: "#2563eb", html: "It lives in… It has got… It can… It eats…", why: "Это те же вопросы, которые задаёт себе учёный: где живёт, как устроено, что умеет, чем питается. Отвечая на них, ты составляешь настоящую научную карточку по-английски." },
        { id: "can", label: "can / can't", x: 82, y: 62, color: "#db2777", html: "It can swim. It can't fly. После can глагол без -s.", why: "<i>Can</i> — «модальный» глагол: он никогда не принимает -s, а следующий за ним глагол стоит в начальной форме. Оно происходит от древнего <i>cunnan</i> — «уметь, знать», от которого произошло и <i>know</i>." },
        { id: "catena", label: "Food chain", x: 82, y: 88, color: "#14b8a6", html: "Пищевая цепь: grass → zebra → lion.", why: "Животные делятся на <i>herbivores</i> (травоядные: eat plants), <i>carnivores</i> (хищники: eat meat) и <i>omnivores</i> (всеядные: eat everything). Энергия переходит от растений к травоядным, а потом к хищникам." }
      ],
      edges: [
        ["habitat", "clima", "зависит от"],
        ["habitat", "wild", "принимает"],
        ["wild", "adatt", "имеют"],
        ["clima", "adatt", "отбирает"],
        ["wild", "nomi", "называются"],
        ["nomi", "plurali", "осторожно с"],
        ["wild", "descr", "описываются"],
        ["descr", "can", "умения с"],
        ["descr", "catena", "чем питаются"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: описываем животных",
      questions: [
        { type: "mc", q: "Какое предложение правильное?", options: ["A penguin can flies.", "A penguin can't fly.", "A penguin can't flying."], answer: 1, explain: "После can/can't глагол остаётся в начальной форме: can't fly." },
        { type: "mc", q: "«It eats leaves» означает…", options: ["Ест листья", "Ест мясо", "Живёт в лесу"], answer: 0, explain: "Leaves = листья (единственное число: leaf)." },
        { type: "mc", q: "Закончи: «A crocodile ___ in rivers.»", options: ["live", "lives", "living"], answer: 1, explain: "A crocodile = it → lives, с окончанием -s." },
        { type: "tf", q: "Горб верблюда наполнен водой.", answer: false, explain: "В нём жир — запас энергии." }
      ]
    }
  ],
  glossary: [
    { t: "Wild animals", d: "Дикие животные, не домашние." },
    { t: "Habitat", d: "Место, где животное живёт в природе." },
    { t: "Savannah", d: "Саванна: жаркая степь с немногими деревьями (львы, зебры, жирафы)." },
    { t: "Rainforest / jungle", d: "Тропический лес / джунгли: жаркие и очень дождливые." },
    { t: "Desert", d: "Пустыня (осторожно: dessert = десерт)." },
    { t: "Polar regions", d: "Полярные регионы: Arctic (Арктика, север) и Antarctica (Антарктида, юг)." },
    { t: "It has got", d: "У него есть (обладание): It has got a long tail." },
    { t: "Can / can't", d: "Умеет, может / не умеет, не может: It can swim." },
    { t: "Cognates", d: "Похожие слова в двух языках, потому что у них общее происхождение (elephant/слон)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Где живут зебры?", options: ["in the savannah", "in the Arctic", "in the ocean"], answer: 0, explain: "Зебры живут в африканской саванне." },
      { type: "mc", q: "«Owl» означает…", options: ["орёл", "сова", "волк"], answer: 1, explain: "Owl = сова; eagle = орёл; wolf = волк." },
      { type: "mc", q: "Какое животное живёт в пустыне?", options: ["penguin", "camel", "dolphin"], answer: 1, explain: "Верблюд (camel) живёт в пустыне." },
      { type: "text", q: "Как по-английски «акула»?", answer: ["shark", "a shark"], explain: "Акула = shark." },
      { type: "text", q: "Напиши множественное число слова «mouse».", answer: ["mice"], explain: "Неправильное множественное число: mice." },
      { type: "tf", q: "Белые медведи и пингвины живут в одних и тех же местах.", answer: false, explain: "Белые медведи — на Северном полюсе, пингвины — в Южном полушарии." },
      { type: "tf", q: "«Rainforest» — это очень дождливый лес.", answer: true, explain: "Rain = дождь, forest = лес." },
      { type: "mc", q: "Закончи: «A monkey ___ climb trees.»", options: ["can", "cans", "is"], answer: 0, explain: "Can никогда не принимает -s." },
      { type: "mc", q: "«It has got sharp teeth» означает…", options: ["У него острые зубы", "У него длинный хвост", "У него полосы"], answer: 0, explain: "Sharp teeth = острые зубы." },
      { type: "order", q: "Расставь пищевую цепь (food chain): от того, кого едят, к тому, кто ест.", items: ["grass", "zebra", "lion"], explain: "Траву (grass) ест зебра, а зебру ест лев." },
      { type: "num", q: "Длина синего кита может превышать … метров (напиши круглое число).", answer: 30, tol: 0, unit: "m", explain: "Может превышать 30 метров: это самое большое животное из всех, что когда-либо существовали." },
      { type: "mc", q: "Переведи: «Слоны живут в Африке и Азии.»", options: ["Elephants lives in Africa and Asia.", "Elephants live in Africa and Asia.", "Elephant live in Africa and Asia."], answer: 1, explain: "Elephants — множественное число (they) → live, без -s." }
    ]
  }
});
