TOPIC('ru', {
  id: "p3-ing-house",
  title: "My house",
  intro: "Welcome to my house! 🏠 Сегодня мы осмотрим английский дом комнату за комнатой: выучим названия <b>комнат</b> (rooms) и <b>мебели</b> (furniture) и научимся говорить, что где есть, с помощью <b>there is</b> и <b>there are</b>.",
  minutes: 30,
  sections: [
    {
      type: "text", title: "The rooms: комнаты 🚪",
      html: `<table><tr><th>Английский</th><th>Произносится</th><th>Русский</th></tr>
<tr><td>🍳 <b>kitchen</b></td><td>ки-чен</td><td>кухня</td></tr>
<tr><td>🛋️ <b>living room</b></td><td>ли-винг рум</td><td>гостиная</td></tr>
<tr><td>🍽️ <b>dining room</b></td><td>дай-нинг рум</td><td>столовая</td></tr>
<tr><td>🛏️ <b>bedroom</b></td><td>бэд-рум</td><td>спальня</td></tr>
<tr><td>🛁 <b>bathroom</b></td><td>бас-рум</td><td>ванная</td></tr>
<tr><td>🚪 <b>hall</b></td><td>хол</td><td>прихожая</td></tr>
<tr><td>🚗 <b>garage</b></td><td>гэ-радж</td><td>гараж</td></tr>
<tr><td>🌳 <b>garden</b></td><td>га-ден</td><td>сад</td></tr>
<tr><td>🪜 <b>stairs</b></td><td>стэрз</td><td>лестница</td></tr></table>
<p>Заметил? Многие комнаты заканчиваются на <b>room</b> (комната): <b>bed</b>room = комната с кроватью, <b>bath</b>room = комната с ванной. Просто!</p>`
    },
    {
      type: "svg", title: "Английский дом в разрезе",
      caption: "Типичный английский двухэтажный дом: наверху (upstairs) спальни и ванная, внизу (downstairs) кухня и гостиная.",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#e0f2fe"/>
<rect x="0" y="290" width="600" height="30" fill="#4ade80"/>
<polygon points="80,110 300,15 520,110" fill="#b91c1c" stroke="#7f1d1d" stroke-width="3"/>
<rect x="80" y="110" width="440" height="180" fill="#fef3c7" stroke="#78350f" stroke-width="4"/>
<line x1="80" y1="200" x2="520" y2="200" stroke="#78350f" stroke-width="4"/>
<line x1="300" y1="110" x2="300" y2="290" stroke="#78350f" stroke-width="4"/>
<line x1="420" y1="110" x2="420" y2="200" stroke="#78350f" stroke-width="3"/>
<rect x="100" y="165" width="70" height="25" fill="#60a5fa"/>
<rect x="100" y="155" width="20" height="12" fill="#ffffff"/>
<text x="190" y="140" font-size="18" font-weight="bold" text-anchor="middle" fill="#1e3a8a">bedroom</text>
<rect x="320" y="165" width="70" height="25" fill="#93c5fd"/>
<text x="360" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#1e3a8a">bedroom</text>
<rect x="435" y="168" width="70" height="22" rx="10" fill="#ffffff" stroke="#0ea5e9" stroke-width="3"/>
<text x="470" y="140" font-size="16" font-weight="bold" text-anchor="middle" fill="#0369a1">bathroom</text>
<rect x="100" y="250" width="80" height="30" rx="6" fill="#16a34a"/>
<rect x="215" y="235" width="55" height="40" fill="#1f2937"/>
<text x="190" y="225" font-size="18" font-weight="bold" text-anchor="middle" fill="#14532d">living room</text>
<rect x="320" y="240" width="40" height="50" fill="#e5e7eb" stroke="#475569" stroke-width="2"/>
<rect x="370" y="250" width="50" height="40" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
<rect x="440" y="260" width="60" height="8" fill="#a16207"/>
<rect x="445" y="268" width="6" height="22" fill="#a16207"/>
<rect x="489" y="268" width="6" height="22" fill="#a16207"/>
<text x="410" y="225" font-size="18" font-weight="bold" text-anchor="middle" fill="#9a3412">kitchen</text>
<text x="555" y="150" font-size="16" font-weight="bold" fill="#0f172a">⬆</text>
<text x="530" y="175" font-size="14" fill="#0f172a">upstairs</text>
<text x="530" y="250" font-size="14" fill="#0f172a">down-</text>
<text x="530" y="268" font-size="14" fill="#0f172a">stairs</text>
<text x="555" y="290" font-size="16" font-weight="bold" fill="#0f172a">⬇</text>
</svg>`
    },
    {
      type: "text", title: "Furniture: мебель 🛋️",
      html: `<ul>
<li>🛏️ <b>bed</b> (бэд) – кровать · <b>wardrobe</b> (уо́рд-роуб) – шкаф · <b>desk</b> (дэск) – письменный стол · <b>lamp</b> (лэмп) – лампа</li>
<li>🛋️ <b>sofa</b> (соу-фа) – диван · <b>armchair</b> (арм-чэр) – кресло · 📺 <b>TV</b> (ти-ви) – телевизор · 📚 <b>bookcase</b> (бук-кэйс) – книжный шкаф</li>
<li>🍽️ <b>table</b> (тэй-бол) – стол · 🪑 <b>chair</b> (чэр) – стул · ❄️ <b>fridge</b> (фридж) – холодильник · 🔥 <b>cooker</b> (ку-кер) – плита</li>
<li>🛁 <b>bath</b> (бас) – ванна · 🚿 <b>shower</b> (шау-эр) – душ · 🚽 <b>toilet</b> (той-лет) – туалет · <b>sink</b> (синк) – раковина</li>
</ul>
<p>Внимание: <b>furniture</b> (мебель) — слово «неисчисляемое»: нельзя сказать <s>furnitures</s>!</p>`
    },
    {
      type: "remember", title: "There is / There are = Есть",
      html: `<p>Чтобы сказать, что есть в комнате:</p>
<ul>
<li><b>There is</b> (или <b>There's</b>) + <b>один</b> предмет: <i>There's <b>a</b> bed in my bedroom.</i> = В моей спальне есть кровать.</li>
<li><b>There are</b> + <b>много</b> предметов: <i>There are <b>two</b> chairs in the kitchen.</i> = На кухне два стула.</li>
</ul>
<p>Чтобы спросить: <b>Is there</b> a TV? – Yes, there is. / No, there isn't.<br>
<b>Are there</b> any books? – Yes, there are. / No, there aren't.</p>
<p>Хитрость: <b>is</b> = 1 ☝️ · <b>are</b> = 2, 3, 4… ✌️</p>`
    },
    {
      type: "quiz", title: "Мини-викторина: rooms",
      questions: [
        { type: "mc", q: "Где ты спишь? In the…", options: ["kitchen", "bedroom", "garden"], answer: 1, explain: "Bedroom = спальня 🛏️." },
        { type: "mc", q: "«Kitchen» означает…", options: ["кухня", "ванная", "гостиная"], answer: 0, explain: "Kitchen = кухня 🍳." },
        { type: "mc", q: "Закончи: There … three chairs.", options: ["is", "are"], answer: 1, explain: "Три стула — это много предметов: there are." }
      ]
    },
    {
      type: "widget", title: "Игра: в какую комнату это относится?",
      widget: "classify",
      caption: "Помести каждый предмет мебели в ту комнату, где ты его обычно находишь.",
      options: {
        groups: ["🍳 kitchen", "🛏️ bedroom", "🛁 bathroom", "🛋️ living room"],
        items: [["fridge", 0], ["cooker", 0], ["bed", 1], ["wardrobe", 1], ["bath", 2], ["shower", 2], ["toilet", 2], ["sofa", 3], ["armchair", 3], ["TV", 3]]
      }
    },
    {
      type: "widget", title: "Игра: найди мебель на кухне",
      widget: "labelDiagram",
      caption: "Нажми на каждый кружок и выбери правильное английское слово.",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="340" fill="#fef9c3"/>
<rect x="0" y="270" width="600" height="70" fill="#d6d3d1"/>
<rect x="30" y="100" width="90" height="190" fill="#e5e7eb" stroke="#475569" stroke-width="3"/>
<line x1="30" y1="170" x2="120" y2="170" stroke="#475569" stroke-width="3"/>
<rect x="105" y="120" width="6" height="30" fill="#475569"/>
<rect x="140" y="200" width="110" height="90" fill="#f1f5f9" stroke="#475569" stroke-width="3"/>
<circle cx="170" cy="195" r="12" fill="#1f2937"/>
<circle cx="220" cy="195" r="12" fill="#1f2937"/>
<rect x="155" y="225" width="80" height="45" fill="#1f2937"/>
<rect x="270" y="200" width="110" height="90" fill="#a16207" stroke="#78350f" stroke-width="3"/>
<rect x="290" y="192" width="70" height="12" rx="4" fill="#94a3b8"/>
<rect x="320" y="170" width="6" height="25" fill="#64748b"/>
<rect x="400" y="200" width="170" height="12" fill="#b45309"/>
<rect x="410" y="212" width="10" height="78" fill="#b45309"/>
<rect x="550" y="212" width="10" height="78" fill="#b45309"/>
<rect x="430" y="230" width="40" height="8" fill="#dc2626"/>
<rect x="430" y="238" width="6" height="52" fill="#dc2626"/>
<rect x="430" y="180" width="6" height="52" fill="#dc2626"/>
<rect x="290" y="40" width="160" height="90" fill="#bae6fd" stroke="#78350f" stroke-width="5"/>
<line x1="370" y1="40" x2="370" y2="130" stroke="#78350f" stroke-width="4"/>
<line x1="540" y1="20" x2="540" y2="60" stroke="#111827" stroke-width="2"/>
<polygon points="520,80 560,80 550,60 530,60" fill="#f97316"/>
</svg>`,
        spots: [
          { x: 75, y: 140, label: "fridge" },
          { x: 195, y: 245, label: "cooker" },
          { x: 325, y: 240, label: "sink" },
          { x: 490, y: 206, label: "table" },
          { x: 450, y: 260, label: "chair" },
          { x: 330, y: 85, label: "window" },
          { x: 540, y: 75, label: "lamp" }
        ]
      }
    },
    {
      type: "example", title: "Пример: комната Эммы 🛏️",
      html: `<p><i>Hi! I'm Emma. This is my bedroom. 💜<br>
<b>There's</b> a big bed and <b>there's</b> a white wardrobe.<br>
<b>There's</b> a desk under the window.<br>
<b>There are</b> two lamps and <b>there are</b> lots of books.<br>
<b>There isn't</b> a TV in my bedroom, but <b>there's</b> a cat on my bed! 🐱</i></p>
<p>Теперь попробуй ты: опиши свою комнату с помощью <b>There's…</b> и <b>There are…</b></p>`
    },
    {
      type: "example", title: "Пример: где кошка? (in, on, under)",
      html: `<p>Чтобы сказать, <b>где</b> находится предмет, мы используем три маленьких слова:</p>
<ul>
<li>📦 <b>in</b> = внутри: <i>The cat is <b>in</b> the box.</i></li>
<li>🛋️ <b>on</b> = на: <i>The cat is <b>on</b> the sofa.</i></li>
<li>🛏️ <b>under</b> = под: <i>The cat is <b>under</b> the bed.</i></li>
</ul>
<p><b>Mum:</b> Where's the cat? 🐱<br><b>Ben:</b> Is it in the kitchen?<br><b>Mum:</b> No, it isn't.<br><b>Ben:</b> Look! It's <b>under</b> the table in the living room!</p>`
    },
    {
      type: "widget", title: "Соедини: английский и русский",
      widget: "match",
      options: { pairs: [["wardrobe", "шкаф"], ["sofa", "диван"], ["fridge", "холодильник"], ["shower", "душ"], ["desk", "письменный стол"], ["stairs", "лестница"], ["garden", "сад"], ["armchair", "кресло"]] }
    },
    {
      type: "curiosity", title: "А ты знал, что… английский «first floor» — это не наш первый этаж?",
      html: `<p>В Великобритании, как и в Италии, этаж на уровне улицы называется <b>ground floor</b> (нулевой этаж), а следующий над ним — <b>first floor</b> (первый этаж). По-русски мы тоже считаем первым этаж на уровне улицы, так что у нас с британцами разница в один этаж.</p>
<p>А вот в <b>Соединённых Штатах</b> этаж на уровне улицы уже называется <b>first floor</b>! Поэтому в американском отеле комната на «second floor» находится на втором этаже, как и у нас. 🛗</p>
<p>А в английских домах часто лежит <b>ковровое покрытие</b> (carpet) даже в спальне и на лестнице, а в старых ванных два отдельных крана: один для горячей воды, другой для холодной!</p>`
    },
    {
      type: "curiosity", title: "А ты знал, что… в Букингемском дворце 775 комнат?",
      html: `<p>В доме короля Англии в Лондоне, <b>Букингемском дворце</b>, <b>775 комнат</b>: среди них 52 спальни для королевской семьи и гостей, 188 комнат для персонала, 92 кабинета и <b>78 ванных комнат</b>! 👑</p>
<p>Попробуй сказать это по-английски: <i>There are 775 rooms in Buckingham Palace!</i></p>`
    },
    {
      type: "alternatives", title: "Другие способы понять",
      intro: "<p>Если комнаты или «there is / there are» тебя путают, попробуй другой путь!</p>",
      tabs: [
        {
          label: "🔍 Сложные слова",
          html: `<p>В английском многие существительные — это два слова, склеенные, как кубики Лего 🧱. Если знаешь части, поймёшь слово!</p>
<ul>
<li><b>bed</b> (кровать) + <b>room</b> (комната) = <b>bedroom</b></li>
<li><b>bath</b> (ванна) + <b>room</b> = <b>bathroom</b></li>
<li><b>arm</b> (рука) + <b>chair</b> (стул) = <b>armchair</b>, стул с подлокотниками!</li>
<li><b>book</b> (книга) + <b>case</b> (ящик, футляр) = <b>bookcase</b></li>
<li><b>up</b> (вверх) + <b>stairs</b> (лестница) = <b>upstairs</b>, на верхнем этаже</li>
</ul>`
        },
        {
          label: "✋ Считай по пальцам",
          html: `<p>Прежде чем выбирать между <b>is</b> и <b>are</b>, посчитай на пальцах предметы, о которых говоришь:</p>
<p>☝️ <b>один</b> палец → <b>There is</b> a lamp.<br>✌️ <b>два и больше</b> пальцев → <b>There are</b> two lamps.</p>
<p>По-русски это не меняется: ☝️ <b>Есть</b> лампа · ✌️ <b>Есть</b> две лампы. Но в английском нужно выбирать is или are!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#f0fdf4"/>
<text x="150" y="80" font-size="60" text-anchor="middle">☝️</text>
<text x="150" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#15803d">There IS</text>
<text x="150" y="160" font-size="17" text-anchor="middle" fill="#0f172a">a chair 🪑</text>
<text x="450" y="80" font-size="60" text-anchor="middle">✌️</text>
<text x="450" y="130" font-size="22" font-weight="bold" text-anchor="middle" fill="#1d4ed8">There ARE</text>
<text x="450" y="160" font-size="17" text-anchor="middle" fill="#0f172a">two chairs 🪑🪑</text>
</svg>`
        },
        {
          label: "🏡 House tour (как у ютуберов)",
          html: `<p>Возьми телефон или представь, что у тебя есть камера 🎥, и проведи <b>экскурсию по своему дому</b> по-английски, как это делают во многих видео в Англии и Америке:</p>
<p><i>«Hello everybody! Welcome to my house! This is the <b>kitchen</b>. There's a big <b>fridge</b>… And this is my <b>bedroom</b>! There are lots of toys…»</i></p>
<p>Когда говоришь на ходу и показываешь предметы, слова запоминаются гораздо лучше.</p>`
        },
        {
          label: "🃏 Карточки с мебелью",
          html: `<p>Посмотри на эмодзи, скажи слово и переверни карточку, чтобы проверить.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "🛏️", back: "bed" }, { front: "🛋️", back: "sofa" }, { front: "🪑", back: "chair" }, { front: "🚿", back: "shower" }, { front: "🛁", back: "bath" }, { front: "📺", back: "TV" }, { front: "🚪", back: "door" }, { front: "🪟", back: "window" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Карта: описываем дом по-английски",
      nodes: [
        { id: "house", label: "My house", x: 50, y: 6, color: "#ef4444", html: "Дом: <b>house</b> (или <b>home</b>, дом, где ты живёшь с семьёй).", why: "<i>House</i> — это здание; <i>home</i> — место, где мы чувствуем себя дома. Поэтому говорят <i>I'm going home</i> (я иду домой) и есть пословица <i>Home sweet home</i> («дом, милый дом»)." },
        { id: "rooms", label: "Rooms", x: 20, y: 32, color: "#f97316", html: "kitchen, living room, bedroom, bathroom…", why: "Многие названия составлены со словом <i>room</i> = комната. В британских домах комнаты часто расположены на двух этажах, спальни наверху: привычка возникла и потому, что участки в городах были узкими и дорогими." },
        { id: "floors", label: "Upstairs / downstairs", x: 20, y: 62, color: "#0ea5e9", html: "Наверху / внизу; ground floor, first floor.", why: "<i>Stairs</i> = лестница: <i>up</i> + stairs = наверху лестницы, <i>down</i> + stairs = внизу. Американцы считают этажи, начиная с 1 на уровне улицы, а британцы начинают с «ground»." },
        { id: "furniture", label: "Furniture", x: 80, y: 32, color: "#16a34a", html: "bed, sofa, table, chair, wardrobe…", why: "<i>Furniture</i> происходит от французского <i>fourniture</i> (то, чем снабжают дом). Оно неисчисляемое, как <i>water</i>: про один предмет говорят <i>a piece of furniture</i>." },
        { id: "there", label: "There is / are", x: 50, y: 50, color: "#a855f7", html: "Есть.", why: "В английском каждому предложению нужно подлежащее: <i>there</i> служит «служебным» подлежащим. Глагол согласуется с тем, что следует дальше: is для одного предмета, are для нескольких." },
        { id: "q", label: "Is there…? Are there…?", x: 35, y: 85, color: "#6366f1", html: "Вопросы и краткие ответы: Yes, there is / No, there isn't.", why: "В английском, чтобы задать вопрос, меняют местами глагол и подлежащее (there is → is there?). По-русски достаточно изменить интонацию." },
        { id: "prep", label: "in / on / under", x: 80, y: 62, color: "#ca8a04", html: "Внутри, на, под.", why: "Предлоги места говорят, где находится один предмет относительно другого. Это одни из самых употребительных слов во всех языках, потому что они помогают ориентироваться в пространстве." },
        { id: "plural", label: "Один или много?", x: 70, y: 85, color: "#e11d48", html: "a bed (один) – two beds (много).", why: "Множественное число с -s определяет, использовать is или are: поэтому нужно сначала посчитать, а потом говорить!" }
      ],
      edges: [
        ["house", "rooms", "имеет"], ["rooms", "floors", "на двух этажах"], ["house", "furniture", "обставлен"],
        ["rooms", "there", "внутри"], ["furniture", "there", "описывают с помощью"], ["there", "q", "вопрос"], ["furniture", "prep", "где?"], ["there", "plural", "is или are?"]
      ]
    },
    {
      type: "quiz", title: "Мини-викторина: there is / there are",
      questions: [
        { type: "mc", q: "Закончи: There … a sofa in the living room.", options: ["is", "are"], answer: 0, explain: "Один диван: there is." },
        { type: "mc", q: "«Wardrobe» означает…", options: ["шкаф", "письменный стол", "окно"], answer: 0, explain: "Wardrobe = шкаф." },
        { type: "tf", q: "«The cat is under the bed» означает «Кошка на кровати».", answer: false, explain: "Under = под; on = на." }
      ]
    }
  ],
  glossary: [
    { t: "house / home", d: "дом (здание) / дом (где ты живёшь)" },
    { t: "kitchen", d: "кухня" },
    { t: "living room · dining room", d: "гостиная · столовая" },
    { t: "bedroom · bathroom", d: "спальня · ванная" },
    { t: "hall · garden · garage", d: "прихожая · сад · гараж" },
    { t: "stairs · upstairs · downstairs", d: "лестница · наверху · внизу" },
    { t: "furniture", d: "мебель (неисчисляемое)" },
    { t: "bed · wardrobe · desk · lamp", d: "кровать · шкаф · письменный стол · лампа" },
    { t: "sofa · armchair · bookcase", d: "диван · кресло · книжный шкаф" },
    { t: "table · chair · fridge · cooker", d: "стол · стул · холодильник · плита" },
    { t: "bath · shower · sink · toilet", d: "ванна · душ · раковина · туалет" },
    { t: "there is / there are", d: "есть (один предмет) / есть (много предметов)" },
    { t: "in · on · under", d: "внутри · на · под" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Где ты готовишь? In the…", options: ["bathroom", "kitchen", "bedroom"], answer: 1, explain: "Kitchen = кухня 🍳." },
      { type: "mc", q: "«Bathroom» — это…", options: ["ванная", "спальня", "сад"], answer: 0, explain: "Bath (ванна) + room (комната) = ванная." },
      { type: "text", q: "Напиши по-английски: диван", answer: ["sofa", "couch"], explain: "Диван = sofa (в Америке ещё и couch)." },
      { type: "text", q: "Напиши по-английски: кровать", answer: ["bed"], explain: "Кровать = bed 🛏️." },
      { type: "mc", q: "Закончи: There … four chairs in the kitchen.", options: ["is", "are"], answer: 1, explain: "Четыре стула → много → there are." },
      { type: "mc", q: "Закончи: There … a fridge in the kitchen.", options: ["is", "are"], answer: 0, explain: "Один холодильник → there is." },
      { type: "mc", q: "Холодильник по-английски — это…", options: ["cooker", "fridge", "freezer"], answer: 1, explain: "Fridge = холодильник; cooker = плита." },
      { type: "tf", q: "«Upstairs» означает «на верхнем этаже».", answer: true, explain: "Up = вверх, stairs = лестница." },
      { type: "tf", q: "Можно сказать «furnitures».", answer: false, explain: "У furniture нет множественного числа: говорят furniture или pieces of furniture." },
      { type: "mc", q: "«The book is on the desk» означает, что книга…", options: ["под столом", "на столе", "внутри стола"], answer: 1, explain: "On = на." },
      { type: "order", q: "Расставь слова по порядку: «В саду есть кошка».", items: ["There", "is", "a", "cat", "in", "the", "garden"], explain: "There is a cat in the garden." },
      { type: "mc", q: "Ответь: Is there a TV in your bedroom? (нет)", options: ["No, there isn't.", "No, there aren't.", "No, it is."], answer: 0, explain: "Is there…? → Yes, there is / No, there isn't." }
    ]
  }
});
