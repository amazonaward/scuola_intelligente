TOPIC('ru', {
  id: "p3-ing-body",
  title: "My body",
  intro: "Hello! 👋 Сегодня мы учим по-английски <b>части тела</b> (the parts of the body), от головы до пяток: <i>from head to toe!</i> Мы научимся говорить <b>I've got two eyes</b> 👀 и споём песню, известную во всём мире. 🎵",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The face: лицо 🙂",
      html: `<table><tr><th>Английский</th><th>Произносится</th><th>Русский</th></tr>
<tr><td>🙂 <b>face</b></td><td>фэйс</td><td>лицо</td></tr>
<tr><td>💇 <b>hair</b></td><td>хэр</td><td>волосы</td></tr>
<tr><td>👁️ <b>eye</b> / <b>eyes</b></td><td>ай / айз</td><td>глаз / глаза</td></tr>
<tr><td>👂 <b>ear</b> / <b>ears</b></td><td>иэ / иэз</td><td>ухо / уши</td></tr>
<tr><td>👃 <b>nose</b></td><td>ноуз</td><td>нос</td></tr>
<tr><td>👄 <b>mouth</b></td><td>маус (th — язык между зубами)</td><td>рот</td></tr>
<tr><td>🦷 <b>tooth</b> / <b>teeth</b></td><td>тус / тис (th — язык между зубами)</td><td>зуб / зубы</td></tr>
</table>
<p>Внимание: <b>hair</b> (волосы) в английском <b>единственного числа</b>: говорят <i>My hair <b>is</b> brown</i> = Мои волосы каштановые.</p>`
    },
    {
      type: "text", title: "The body: тело 🧍",
      html: `<ul>
<li>🗣️ <b>head</b> (хэд) – голова · <b>neck</b> (нэк) – шея · <b>shoulders</b> (шоул-дерз) – плечи</li>
<li>💪 <b>arm</b> (арм) – рука (от плеча до кисти) · <b>hand</b> (хэнд) – кисть, рука · <b>finger</b> (фин-гер) – палец руки</li>
<li>🫃 <b>tummy</b> (та-ми) – животик · <b>back</b> (бэк) – спина</li>
<li>🦵 <b>leg</b> (лэг) – нога · <b>knee</b> (ни, букву k не читаем!) – колено</li>
<li>🦶 <b>foot</b> / <b>feet</b> (фут / фит) – ступня / ступни · <b>toe</b> (тоу) – палец ноги</li>
</ul>`
    },
    {
      type: "widget", title: "Игра: назови части тела",
      widget: "labelDiagram",
      caption: "Нажми на жёлтый кружок и выбери правильное английское слово.",
      options: {
        svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="420" fill="#f0f9ff"/>
<path d="M255,40 Q300,5 345,40 L345,60 L255,60 Z" fill="#92400e"/>
<circle cx="300" cy="75" r="45" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<circle cx="283" cy="68" r="6" fill="#1e3a8a"/>
<circle cx="317" cy="68" r="6" fill="#1e3a8a"/>
<path d="M300,74 L295,88 L303,88" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M285,100 Q300,110 315,100" stroke="#dc2626" stroke-width="4" fill="none"/>
<ellipse cx="254" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<ellipse cx="346" cy="78" rx="8" ry="14" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="288" y="118" width="24" height="18" fill="#fcd9b6"/>
<rect x="245" y="135" width="110" height="130" rx="20" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="205" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<rect x="357" y="140" width="38" height="110" rx="16" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
<circle cx="224" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<circle cx="376" cy="268" r="17" fill="#fcd9b6" stroke="#b45309" stroke-width="2"/>
<rect x="255" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<rect x="305" y="262" width="40" height="120" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<ellipse cx="268" cy="395" rx="30" ry="13" fill="#7c2d12"/>
<ellipse cx="332" cy="395" rx="30" ry="13" fill="#7c2d12"/>
</svg>`,
        spots: [
          { x: 300, y: 25, label: "hair" },
          { x: 283, y: 68, label: "eye" },
          { x: 300, y: 84, label: "nose" },
          { x: 300, y: 104, label: "mouth" },
          { x: 346, y: 78, label: "ear" },
          { x: 300, y: 127, label: "neck" },
          { x: 365, y: 150, label: "shoulder" },
          { x: 214, y: 200, label: "arm" },
          { x: 376, y: 268, label: "hand" },
          { x: 300, y: 210, label: "tummy" },
          { x: 275, y: 330, label: "leg" },
          { x: 332, y: 395, label: "foot" }
        ]
      }
    },
    {
      type: "remember", title: "Один, два… и странные множественные числа",
      html: `<p>Чтобы образовать множественное число, обычно добавляют <b>-s</b>:</p>
<p>one eye → two eye<b>s</b> 👀 · one hand → two hand<b>s</b> 🙌 · one finger → ten finger<b>s</b></p>
<p>Но два слова о теле «бунтуют» и меняют гласные:</p>
<p style="font-size:1.15em">🦶 one <b>foot</b> → two <b>feet</b> · 🦷 one <b>tooth</b> → many <b>teeth</b></p>
<p>Хитрость: две буквы <b>o</b> превращаются в две буквы <b>e</b>! oo → ee</p>`
    },
    {
      type: "remember", title: "I've got… = У меня есть…",
      html: `<p>Чтобы описать тело, используют <b>have got</b> (иметь):</p>
<ul>
<li><b>I've got</b> two eyes. = У меня два глаза.</li>
<li><b>I've got</b> brown hair. = У меня каштановые волосы.</li>
<li><b>She's got</b> long hair. = У неё длинные волосы.</li>
<li><b>It's got</b> four legs. = У него четыре лапы. 🐶</li>
</ul>
<p>Запомни: в английском цвет стоит <b>перед</b> словом: <i>blue eyes</i> = голубые глаза.</p>`
    },
    {
      type: "quiz", title: "Мини-викторина: the face",
      questions: [
        { type: "mc", q: "Как по-английски «нос»?", options: ["mouth", "nose", "ear"], answer: 1, explain: "Нос = nose 👃." },
        { type: "mc", q: "«Eyes» означает…", options: ["уши", "глаза", "зубы"], answer: 1, explain: "Eye = глаз, eyes = глаза 👀." },
        { type: "text", q: "Напиши по-английски: рот", answer: ["mouth"], explain: "Рот = mouth 👄." }
      ]
    },
    {
      type: "widget", title: "Карточки: от головы до пяток",
      widget: "flashcards",
      caption: "Скажи слово вслух и дотронься до этой части своего тела, потом переверни карточку.",
      options: {
        cards: [
          { front: "🗣️ head", back: "голова" },
          { front: "💇 hair", back: "волосы" },
          { front: "👁️ eye", back: "глаз" },
          { front: "👂 ear", back: "ухо" },
          { front: "👃 nose", back: "нос" },
          { front: "👄 mouth", back: "рот" },
          { front: "🦷 teeth", back: "зубы" },
          { front: "💪 arm", back: "рука (до кисти)" },
          { front: "✋ hand", back: "кисть, рука" },
          { front: "☝️ finger", back: "палец (руки)" },
          { front: "🦵 leg", back: "нога" },
          { front: "🦶 feet", back: "ступни" },
          { front: "🦶 toes", back: "пальцы ног" },
          { front: "🦵 knee", back: "колено" }
        ]
      }
    },
    {
      type: "example", title: "Пример: песенка «Head, shoulders, knees and toes» 🎵",
      html: `<p>Это самая известная песенка о теле в мире! Пой её, дотрагиваясь до каждой названной части, всё быстрее и быстрее:</p>
<p style="font-size:1.15em"><b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!<br>
And <b>eyes</b> and <b>ears</b> and <b>mouth</b> and <b>nose</b>…<br>
<b>Head</b>, <b>shoulders</b>, <b>knees</b> and <b>toes</b>, knees and toes!</p>
<p>(голова, плечи, колени и пальцы ног… и глаза, и уши, и рот, и нос)</p>`
    },
    {
      type: "example", title: "Пример: мой монстр 👾",
      html: `<p>Прочитай описание и попробуй нарисовать монстра:</p>
<p><i>This is my monster. His name is Blob. 👾<br>
He's got <b>three eyes</b> and <b>one big mouth</b>.<br>
He's got <b>green hair</b> and <b>four arms</b>.<br>
He's got <b>two legs</b> and <b>big feet</b>.<br>
He's got <b>six fingers</b> on each hand!</i></p>
<p>Теперь твоя очередь: придумай монстра и опиши его с помощью <b>He's got…</b> или <b>She's got…</b></p>`,
    },
    {
      type: "svg", title: "Монстр Блоб",
      caption: "Three eyes, one big mouth, green hair, four arms, two legs, big feet!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#fdf4ff"/>
<path d="M240,70 L250,40 L262,68 L275,35 L288,66 L300,32 L312,66 L325,35 L338,68 L350,40 L360,70 Z" fill="#16a34a"/>
<ellipse cx="300" cy="140" rx="85" ry="80" fill="#a855f7" stroke="#6b21a8" stroke-width="4"/>
<circle cx="260" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="300" cy="100" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="340" cy="115" r="16" fill="#ffffff" stroke="#111827" stroke-width="2"/>
<circle cx="262" cy="117" r="7" fill="#111827"/>
<circle cx="302" cy="102" r="7" fill="#111827"/>
<circle cx="342" cy="117" r="7" fill="#111827"/>
<path d="M245,160 Q300,215 355,160 Z" fill="#7f1d1d"/>
<rect x="270" y="160" width="14" height="14" fill="#ffffff"/>
<rect x="316" y="160" width="14" height="14" fill="#ffffff"/>
<line x1="220" y1="130" x2="160" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="220" y1="165" x2="160" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="130" x2="440" y2="100" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="380" y1="165" x2="440" y2="195" stroke="#6b21a8" stroke-width="10" stroke-linecap="round"/>
<line x1="270" y1="215" x2="265" y2="255" stroke="#6b21a8" stroke-width="12"/>
<line x1="330" y1="215" x2="335" y2="255" stroke="#6b21a8" stroke-width="12"/>
<ellipse cx="250" cy="265" rx="35" ry="14" fill="#f97316"/>
<ellipse cx="350" cy="265" rx="35" ry="14" fill="#f97316"/>
<text x="90" y="60" font-size="18" font-weight="bold" fill="#16a34a">green hair</text>
<text x="470" y="80" font-size="18" font-weight="bold" fill="#6b21a8">four arms</text>
<text x="470" y="140" font-size="18" font-weight="bold" fill="#1f2937">three eyes</text>
<text x="40" y="250" font-size="18" font-weight="bold" fill="#c2410c">big feet</text>
<text x="420" y="250" font-size="18" font-weight="bold" fill="#7f1d1d">big mouth</text>
</svg>`
    },
    {
      type: "widget", title: "Соедини: английский и русский",
      widget: "match",
      options: {
        pairs: [["head", "голова"], ["shoulders", "плечи"], ["knees", "колени"], ["toes", "пальцы ног"], ["neck", "шея"], ["teeth", "зубы"], ["hand", "кисть"], ["back", "спина"]]
      }
    },
    {
      type: "widget", title: "Игра: множественное число с -s или «бунтарское»?",
      widget: "classify",
      caption: "У каких слов множественное число образуется добавлением -s, а у каких меняются гласные?",
      options: {
        groups: ["➕ множественное с -s", "🔀 «бунтарское» множественное"],
        items: [["eye → eyes", 0], ["ear → ears", 0], ["hand → hands", 0], ["leg → legs", 0], ["finger → fingers", 0], ["arm → arms", 0], ["foot → feet", 1], ["tooth → teeth", 1]]
      }
    },
    {
      type: "curiosity", title: "А ты знал, что… в английском у пальцев два названия?",
      html: `<p>По-русски мы говорим «пальцы» и про руки, и про ноги. В английском иначе!</p>
<ul><li>☝️ пальцы на <b>руках</b> — это <b>fingers</b>;</li><li>🦶 пальцы на <b>ногах</b> — это <b>toes</b>.</li></ul>
<p>А у большого пальца руки есть своё имя: <b>thumb</b> (сам, последняя буква b не читается). Англичане даже говорят <i>fingers and thumbs</i>.</p>`
    },
    {
      type: "curiosity", title: "А ты знал, что… актёры желают друг другу «сломай ногу»?",
      html: `<p>Перед спектаклем в Англии и Америке актёры говорят друг другу <b>Break a leg!</b> (буквально «сломай ногу!»). Это не злость: это значит <b>удачи</b>, совсем как наше «ни пуха ни пера»! 🍀</p>
<p>А знаешь, сколько костей у взрослого человека? <b>206</b>! Больше половины из них в кистях и стопах.</p>`
    },
    {
      type: "alternatives", title: "Другие способы запомнить слова",
      intro: "<p>Кто-то учит, двигаясь, кто-то — глядя, кто-то — играя. Выбери путь, который работает для тебя!</p>",
      tabs: [
        {
          label: "🙋 Simon says (английская игра)",
          html: `<p>Английские и американские дети играют в <b>Simon says</b> («Саймон говорит»). Один из них — Саймон и отдаёт приказы:</p>
<p><i>«Simon says: touch your <b>nose</b>!»</i> 👃 → все дотрагиваются до носа.<br>
<i>«Simon says: touch your <b>knees</b>!»</i> → все дотрагиваются до коленей.<br>
<i>«Touch your <b>head</b>!»</i> → внимание! Саймон этого не говорил: кто пошевелился, тот выбывает! 😄</p>
<p>Движение тела во время произнесения слова помогает мозгу его запомнить: учителя называют это <b>TPR</b> (полная физическая реакция).</p>`
        },
        {
          label: "🔗 Родственные слова",
          html: `<p>Английский — «двоюродный брат» немецкого: многие слова о теле похожи!</p>
<table><tr><th>Английский</th><th>Немецкий</th><th>Русский</th></tr>
<tr><td>hand</td><td>Hand</td><td>кисть</td></tr>
<tr><td>arm</td><td>Arm</td><td>рука</td></tr>
<tr><td>finger</td><td>Finger</td><td>палец</td></tr>
<tr><td>knee</td><td>Knie</td><td>колено</td></tr>
<tr><td>nose</td><td>Nase</td><td>нос</td></tr></table>
<p>А с русским? <b>nose</b> похоже на <b>нос</b> (это очень древнее общее слово), а вот <b>mouth</b>… нет! Зато <b>face</b> напоминает итальянское <b>faccia</b> (оно пришло из латыни через французский).</p>`
        },
        {
          label: "🖼️ Рисуй и пиши",
          html: `<p>Нарисуй большого человечка на листе и подпиши слова со стрелками. Используй один цвет для <b>лица</b>, другой для <b>тела</b> и третий для <b>ног и стоп</b>. Твой мозг запомнит и цвет!</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#fffbeb"/>
<circle cx="300" cy="50" r="30" fill="#fcd9b6" stroke="#b45309" stroke-width="3"/>
<line x1="300" y1="80" x2="300" y2="160" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="245" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="100" x2="355" y2="140" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="265" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="300" y1="160" x2="335" y2="220" stroke="#111827" stroke-width="5"/>
<line x1="230" y1="40" x2="270" y2="45" stroke="#dc2626" stroke-width="2"/>
<text x="140" y="45" font-size="20" font-weight="bold" fill="#dc2626">head</text>
<line x1="390" y1="125" x2="350" y2="135" stroke="#16a34a" stroke-width="2"/>
<text x="395" y="130" font-size="20" font-weight="bold" fill="#16a34a">arm</text>
<line x1="390" y1="200" x2="320" y2="195" stroke="#2563eb" stroke-width="2"/>
<text x="395" y="205" font-size="20" font-weight="bold" fill="#2563eb">leg</text>
<line x1="210" y1="225" x2="262" y2="222" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="230" font-size="20" font-weight="bold" fill="#2563eb">foot</text>
</svg>`
        },
        {
          label: "🃏 Карточки с эмодзи",
          html: `<p>Смотри только на эмодзи, назови английское слово, а потом переверни, чтобы проверить.</p>`,
          widget: "flashcards",
          options: { cards: [ { front: "👁️", back: "eye" }, { front: "👂", back: "ear" }, { front: "👃", back: "nose" }, { front: "👄", back: "mouth" }, { front: "🦷", back: "tooth" }, { front: "✋", back: "hand" }, { front: "🦵", back: "leg" }, { front: "🦶", back: "foot" } ] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Карта: тело по-английски",
      nodes: [
        { id: "body", label: "My body", x: 50, y: 6, color: "#0ea5e9", html: "Тело: <b>body</b>.", why: "Слово <i>body</i> происходит от древнеанглийского <i>bodig</i>, германского происхождения. Английский родился из языка англов и саксов, германских народов, пришедших в Британию примерно в V веке: поэтому многие слова о теле похожи на немецкие." },
        { id: "head", label: "Head & face", x: 18, y: 32, color: "#f97316", html: "head, hair, eyes, ears, nose, mouth, teeth.", why: "Это одни из первых слов, которые учат в любом языке, потому что они обозначают то, что мы видим и трогаем каждый день. А <i>face</i> пришло с французскими норманнами в 1066 году: оно происходит от латинского <i>facies</i>, как итальянское «faccia»." },
        { id: "upper", label: "Arms & hands", x: 50, y: 32, color: "#22c55e", html: "neck, shoulders, arms, hands, fingers, thumb.", why: "<i>Hand</i>, <i>arm</i> и <i>finger</i> — очень древние германские слова, почти такие же в немецком (Hand, Arm, Finger)." },
        { id: "lower", label: "Legs & feet", x: 82, y: 32, color: "#2563eb", html: "legs, knees, feet, toes.", why: "В слове <i>knee</i> букву k больше не произносят, а когда-то произносили: в древнеанглийском говорили «cneo». Написание осталось старым, а произношение изменилось." },
        { id: "plural", label: "Множественное с -s", x: 25, y: 62, color: "#a855f7", html: "eye → eyes, hand → hands.", why: "В древнеанглийском было много способов образовать множественное число; со временем почти все слова получили -s, самый распространённый способ." },
        { id: "irreg", label: "«Бунтарские» множественные", x: 75, y: 62, color: "#e11d48", html: "foot → feet, tooth → teeth.", why: "Это «окаменелости» древнего языка: тысячи лет назад множественное число образовывали, меняя гласную внутри слова. Очень частые слова вроде foot и tooth сохранили старое правило, как и man → men." },
        { id: "got", label: "I've got…", x: 25, y: 90, color: "#ca8a04", html: "Нужно для описания: I've got blue eyes.", why: "<i>Have got</i> типично для разговорного британского английского; американцы чаще говорят <i>I have</i>. Значат они одно и то же: иметь, обладать." },
        { id: "adj", label: "Цвет впереди", x: 75, y: 90, color: "#0d9488", html: "brown hair, blue eyes, big feet.", why: "В английском прилагательное почти всегда стоит перед существительным и никогда не изменяется: big foot, big feet. В русском же прилагательное обычно тоже стоит перед словом, но изменяется по родам и числам (голубой глаз, голубые глаза)." }
      ],
      edges: [
        ["body", "head", "наверху"], ["body", "upper", "посередине"], ["body", "lower", "внизу"],
        ["upper", "plural", "hands"], ["lower", "irreg", "feet"], ["head", "irreg", "teeth"],
        ["plural", "got", "I've got two…"], ["got", "adj", "описывают с помощью"]
      ]
    },
    {
      type: "quiz", title: "Мини-викторина: from head to toe",
      questions: [
        { type: "mc", q: "Множественное число от «foot» — это…", options: ["foots", "feet", "feets"], answer: 1, explain: "Foot → feet: «бунтарское» множественное, oo превращается в ee." },
        { type: "mc", q: "Пальцы ног по-английски — это…", options: ["fingers", "toes", "thumbs"], answer: 1, explain: "Toes = пальцы ног; fingers = пальцы рук." },
        { type: "tf", q: "«I've got two ears» означает «У меня два уха».", answer: true, explain: "I've got = у меня есть; ears = уши 👂." }
      ]
    }
  ],
  glossary: [
    { t: "body", d: "тело" },
    { t: "head", d: "голова" },
    { t: "face", d: "лицо" },
    { t: "hair", d: "волосы (в английском единственное число: my hair is…)" },
    { t: "eye / eyes", d: "глаз / глаза" },
    { t: "ear / ears", d: "ухо / уши" },
    { t: "nose", d: "нос" },
    { t: "mouth", d: "рот" },
    { t: "tooth / teeth", d: "зуб / зубы (неправильное множественное число)" },
    { t: "neck · shoulders", d: "шея · плечи" },
    { t: "arm · hand · finger · thumb", d: "рука · кисть · палец руки · большой палец" },
    { t: "leg · knee", d: "нога · колено (буква k не произносится)" },
    { t: "foot / feet · toe", d: "ступня / ступни (неправильное множественное число) · палец ноги" },
    { t: "I've got", d: "у меня есть (для описания: I've got brown hair)" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Как по-английски «голова»?", options: ["hand", "head", "hair"], answer: 1, explain: "Голова = head; hand = кисть; hair = волосы." },
      { type: "mc", q: "«Mouth» означает…", options: ["рот", "нос", "ухо"], answer: 0, explain: "Mouth = рот 👄." },
      { type: "text", q: "Напиши по-английски: глаза", answer: ["eyes"], explain: "Eye = глаз, eyes = глаза." },
      { type: "text", q: "Напиши по-английски: нога", answer: ["leg"], explain: "Нога = leg 🦵." },
      { type: "mc", q: "Какое множественное число от «tooth»?", options: ["tooths", "teeth", "toothes"], answer: 1, explain: "Tooth → teeth: oo превращается в ee." },
      { type: "mc", q: "Как называются пальцы рук?", options: ["toes", "fingers", "knees"], answer: 1, explain: "Fingers = пальцы рук; toes = пальцы ног." },
      { type: "tf", q: "В слове «knee» буква k произносится.", answer: false, explain: "Knee читается «ни»: k не произносится." },
      { type: "tf", q: "«She's got long hair» означает «У неё длинные волосы».", answer: true, explain: "She's got = у неё есть; long hair = длинные волосы." },
      { type: "mc", q: "Продолжи: «I've got two blue …»", options: ["eye", "eyes", "nose"], answer: 1, explain: "Два → множественное число: two blue eyes. Цвет стоит перед словом." },
      { type: "order", q: "Расставь слова песенки по порядку: Head, …", items: ["head", "shoulders", "knees", "toes"], explain: "Head, shoulders, knees and toes: сверху вниз!" },
      { type: "mc", q: "Как сказать «плечи»?", options: ["shoulders", "shoes", "legs"], answer: 0, explain: "Shoulders = плечи. Shoes = туфли!" },
      { type: "mc", q: "«Break a leg!» говорят, чтобы пожелать…", options: ["спокойной ночи", "удачи", "приятного аппетита"], answer: 1, explain: "Это как наше «ни пуха ни пера» для актёров." }
    ]
  }
});
