TOPIC('ru', {
  id: "p3-ing-clothes",
  title: "Clothes and weather",
  intro: "Hello! 👋 Какая сегодня погода? ☀️🌧️❄️ В зависимости от погоды мы выбираем <b>одежду</b>. Сегодня мы учим по-английски названия одежды (<b>clothes</b>) и погоды (<b>the weather</b>) и учимся говорить фразы вроде <i>«It's cold. Put on your coat!»</i> 🧥",
  minutes: 25,
  sections: [
    {
      type: "text", title: "The weather: какая погода? 🌦️",
      html: `<p>Чтобы спросить, какая погода, говорят: <b>What's the weather like?</b> (уотс зе уэ-зер лайк?)</p>
<p>Отвечают с помощью <b>It's…</b> (итс…):</p>
<table><tr><th>Английский</th><th>Произносится</th><th>Русский</th></tr>
<tr><td>☀️ It's <b>sunny</b></td><td>са-ни</td><td>солнечно</td></tr>
<tr><td>☁️ It's <b>cloudy</b></td><td>клау-ди</td><td>облачно</td></tr>
<tr><td>🌧️ It's <b>rainy</b></td><td>рэй-ни</td><td>идёт дождь</td></tr>
<tr><td>💨 It's <b>windy</b></td><td>уин-ди</td><td>ветрено</td></tr>
<tr><td>❄️ It's <b>snowy</b></td><td>сноу-и</td><td>идёт снег</td></tr>
<tr><td>🌫️ It's <b>foggy</b></td><td>фо-ги</td><td>туманно</td></tr>
<tr><td>🥵 It's <b>hot</b></td><td>хот</td><td>жарко</td></tr>
<tr><td>🥶 It's <b>cold</b></td><td>коулд</td><td>холодно</td></tr>
</table>
<p>Хитрость: почти все они образуются от слова + <b>-y</b>: sun → sunn<b>y</b>, cloud → cloud<b>y</b>, rain → rain<b>y</b>, wind → wind<b>y</b>, snow → snow<b>y</b>, fog → fogg<b>y</b>.</p>`
    },
    {
      type: "svg", title: "Weather symbols",
      caption: "Значки погоды, которые ты видишь по телевизору, с их английскими названиями.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#eff6ff"/>
<circle cx="75" cy="80" r="35" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
<line x1="75" y1="25" x2="75" y2="35" stroke="#ca8a04" stroke-width="4"/>
<line x1="75" y1="125" x2="75" y2="135" stroke="#ca8a04" stroke-width="4"/>
<line x1="20" y1="80" x2="30" y2="80" stroke="#ca8a04" stroke-width="4"/>
<line x1="120" y1="80" x2="130" y2="80" stroke="#ca8a04" stroke-width="4"/>
<text x="75" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#a16207">sunny</text>
<ellipse cx="225" cy="85" rx="55" ry="28" fill="#94a3b8"/>
<circle cx="205" cy="68" r="25" fill="#94a3b8"/>
<circle cx="240" cy="62" r="30" fill="#94a3b8"/>
<text x="225" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#475569">cloudy</text>
<ellipse cx="375" cy="70" rx="55" ry="26" fill="#64748b"/>
<circle cx="360" cy="55" r="24" fill="#64748b"/>
<line x1="345" y1="105" x2="338" y2="125" stroke="#2563eb" stroke-width="4"/>
<line x1="370" y1="105" x2="363" y2="125" stroke="#2563eb" stroke-width="4"/>
<line x1="395" y1="105" x2="388" y2="125" stroke="#2563eb" stroke-width="4"/>
<text x="375" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#1d4ed8">rainy</text>
<path d="M470,60 Q520,45 560,60" stroke="#0891b2" stroke-width="5" fill="none"/>
<path d="M480,85 Q530,70 575,85" stroke="#0891b2" stroke-width="5" fill="none"/>
<path d="M470,110 Q515,95 550,110" stroke="#0891b2" stroke-width="5" fill="none"/>
<text x="520" y="170" font-size="20" font-weight="bold" text-anchor="middle" fill="#0e7490">windy</text>
<text x="150" y="250" font-size="44" text-anchor="middle">❄️</text>
<text x="150" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#0369a1">snowy</text>
<rect x="250" y="215" width="100" height="8" rx="4" fill="#cbd5e1"/>
<rect x="240" y="232" width="120" height="8" rx="4" fill="#cbd5e1"/>
<rect x="255" y="249" width="90" height="8" rx="4" fill="#cbd5e1"/>
<text x="300" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b">foggy</text>
<text x="450" y="250" font-size="44" text-anchor="middle">🌡️</text>
<text x="450" y="290" font-size="20" font-weight="bold" text-anchor="middle" fill="#dc2626">hot / cold</text>
</svg>`
    },
    {
      type: "quiz", title: "Мини-викторина: the weather",
      questions: [
        { type: "mc", q: "«It's rainy» означает…", options: ["светит солнце", "идёт дождь", "ветрено"], answer: 1, explain: "Rain = дождь, rainy = дождливо 🌧️." },
        { type: "mc", q: "Как сказать «холодно»?", options: ["It's hot", "It's cold", "It's cloudy"], answer: 1, explain: "Cold = холодно 🥶." },
        { type: "text", q: "Закончи: It's sun… (солнечно)", answer: ["sunny", "it's sunny"], explain: "Sun → sunny: n удваивается и добавляется -y." }
      ]
    },
    {
      type: "text", title: "Clothes: одежда 👕",
      html: `<ul>
<li>👕 <b>T-shirt</b> (ти-шёрт) – футболка · 👔 <b>shirt</b> (шёрт) – рубашка</li>
<li>🧶 <b>jumper</b> (джам-пер) – свитер · 🧥 <b>jacket</b> (джэ-кит) – куртка, пиджак · <b>coat</b> (коут) – пальто</li>
<li>👖 <b>trousers</b> (трау-зерз) – брюки · <b>jeans</b> (джинз) – джинсы · 🩳 <b>shorts</b> (шортс) – шорты</li>
<li>👗 <b>dress</b> (дрэс) – платье · <b>skirt</b> (скёрт) – юбка</li>
<li>🧦 <b>socks</b> (сокс) – носки · 👟 <b>shoes</b> (шуз) – туфли, обувь · 🥾 <b>boots</b> (бутс) – сапоги, ботинки</li>
<li>🧢 <b>cap</b> (кэп) – кепка · 👒 <b>hat</b> (хэт) – шляпа · 🧣 <b>scarf</b> (скарф) – шарф · 🧤 <b>gloves</b> (гловз) – перчатки</li>
</ul>
<p>А зонтик? ☂️ <b>umbrella</b> (ам-брэ-ла). Это не одежда, но в дождь он нужен!</p>`
    },
    {
      type: "remember", title: "Фразы, которые пригодятся",
      html: `<ul>
<li><b>I'm wearing</b> a red T-shirt. = На мне красная футболка.</li>
<li><b>Put on</b> your coat! = Надень пальто!</li>
<li><b>Take off</b> your jumper! = Сними свитер!</li>
<li>It's cold, so I <b>wear</b> my gloves. = Холодно, поэтому я ношу перчатки.</li>
</ul>
<p>⚠️ <b>trousers, jeans, shorts</b> всегда <b>во множественном числе</b> (у них две штанины!): <i>My jeans <b>are</b> blue.</i> Чтобы посчитать их, говорят <b>a pair of</b> jeans = пара джинсов.</p>`
    },
    {
      type: "widget", title: "Игра: в какую погоду это носят?",
      widget: "classify",
      caption: "Помести каждую вещь в нужную группу: её носят, когда жарко или когда холодно?",
      options: {
        groups: ["☀️ It's hot", "❄️ It's cold"],
        items: [["👕 T-shirt", 0], ["🩳 shorts", 0], ["🧢 cap", 0], ["👗 dress", 0], ["🩴 sandals", 0], ["🧥 coat", 1], ["🧣 scarf", 1], ["🧤 gloves", 1], ["🧶 jumper", 1], ["🥾 boots", 1]]
      }
    },
    {
      type: "widget", title: "Карточки: одежда",
      widget: "flashcards",
      caption: "Скажи английское слово вслух, потом переверни карточку.",
      options: {
        cards: [
          { front: "👕 T-shirt", back: "футболка" }, { front: "👔 shirt", back: "рубашка" }, { front: "🧶 jumper", back: "свитер" },
          { front: "🧥 coat", back: "пальто" }, { front: "👖 trousers", back: "брюки" }, { front: "🩳 shorts", back: "шорты" },
          { front: "👗 dress", back: "платье" }, { front: "skirt", back: "юбка" }, { front: "🧦 socks", back: "носки" },
          { front: "👟 shoes", back: "туфли, обувь" }, { front: "🧣 scarf", back: "шарф" }, { front: "🧤 gloves", back: "перчатки" }, { front: "👒 hat", back: "шляпа" }
        ]
      }
    },
    {
      type: "example", title: "Пример: перед выходом 🚪",
      html: `<p><b>Mum:</b> Look outside, Tom! What's the weather like?<br>
<b>Tom:</b> It's cold and windy. 💨<br>
<b>Mum:</b> Put on your coat and your scarf!<br>
<b>Tom:</b> And my gloves?<br>
<b>Mum:</b> Yes! And take your umbrella. It's cloudy… ☁️<br>
<b>Tom:</b> OK, mum. Bye! 👋</p>
<p>(Мама: Посмотри в окно, Том! Какая погода? — Том: Холодно и ветрено. — Мама: Надень пальто и шарф! — Том: А перчатки? — Мама: Да! И возьми зонтик. Облачно… — Том: Хорошо, мама. Пока!)</p>`
    },
    {
      type: "example", title: "Пример: чемодан в отпуск 🧳",
      html: `<p>Анна едет на море в августе, а Лука — в горы в январе. Вот их списки:</p>
<table><tr><th>🏖️ Anna – It's hot and sunny</th><th>🏔️ Luca – It's cold and snowy</th></tr>
<tr><td>three T-shirts</td><td>two jumpers</td></tr>
<tr><td>two pairs of shorts</td><td>a coat</td></tr>
<tr><td>a dress</td><td>a hat, a scarf and gloves</td></tr>
<tr><td>a cap and sandals</td><td>boots and warm socks</td></tr></table>
<p>Теперь напиши свой список: куда ты едешь? What's the weather like?</p>`
    },
    {
      type: "curiosity", title: "А ты знал, что… у джинсов итальянское название?",
      html: `<p>Синюю ткань для джинсов использовали уже в 1500-х годах в <b>Генуе</b> для одежды моряков и портовых рабочих. Французы называли Геную <b>Gênes</b>: отсюда и пошло название <b>jeans</b>! 👖</p>
<p>А ткань <b>деним</b>? Она происходит от французского города Ним: <i>de Nîmes</i> = «из Нима». В 1873 году в Сан-Франциско Леви Страусс и Джейкоб Дэвис запатентовали джинсы с металлическими заклёпками для золотоискателей и шахтёров.</p>`
    },
    {
      type: "curiosity", title: "А ты знал, что… англичане всегда говорят о погоде?",
      html: `<p>В Великобритании погода часто меняется, иногда по нескольку раз в день! Поэтому разговор о погоде — самый обычный способ начать беседу с кем угодно: <i>«Lovely day, isn't it?»</i> (Прекрасный день, правда?) или <i>«Terrible weather today!»</i> (Ужасная погода сегодня!).</p>
<p>А знаешь, какая самая типичная одежда английских школьников? <b>School uniform</b>, школьная форма: почти в каждой школе она есть — с <b>блейзером</b> (пиджаком), галстуком и свитером цвета школы.</p>`
    },
    {
      type: "alternatives", title: "Другие способы запомнить слова",
      intro: "<p>Если слова не запоминаются, попробуй другой путь!</p>",
      tabs: [
        {
          label: "🧸 Одень мишку",
          html: `<p>Возьми игрушку и одёжки (или нарисуй и вырежи их). Друг называет погоду, а ты одеваешь мишку, вслух говоря, что делаешь:</p>
<p><i>«It's snowy!»</i> → <i>«I put on his <b>hat</b>… his <b>scarf</b>… his <b>gloves</b>!»</i> 🧸❄️</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="240" fill="#e0f2fe"/>
<circle cx="300" cy="80" r="45" fill="#b45309"/>
<circle cx="262" cy="42" r="16" fill="#b45309"/>
<circle cx="338" cy="42" r="16" fill="#b45309"/>
<circle cx="285" cy="75" r="5" fill="#111827"/>
<circle cx="315" cy="75" r="5" fill="#111827"/>
<ellipse cx="300" cy="95" rx="12" ry="8" fill="#fcd9b6"/>
<path d="M255,48 Q300,0 345,48 Z" fill="#dc2626"/>
<circle cx="300" cy="10" r="10" fill="#ffffff"/>
<ellipse cx="300" cy="175" rx="60" ry="55" fill="#2563eb"/>
<rect x="250" y="120" width="100" height="18" rx="8" fill="#16a34a"/>
<rect x="320" y="125" width="18" height="55" fill="#16a34a"/>
<circle cx="235" cy="170" r="16" fill="#facc15"/>
<circle cx="365" cy="170" r="16" fill="#facc15"/>
<text x="120" y="25" font-size="20" font-weight="bold" fill="#dc2626">hat</text>
<text x="420" y="135" font-size="20" font-weight="bold" fill="#16a34a">scarf</text>
<text x="130" y="175" font-size="20" font-weight="bold" fill="#a16207">gloves</text>
<text x="420" y="210" font-size="20" font-weight="bold" fill="#1d4ed8">coat</text>
</svg>`
        },
        {
          label: "🇬🇧🇺🇸 Британский или американский?",
          html: `<p>У некоторых предметов одежды разные названия в Великобритании и в США. Это не ошибки: это два «диалекта» английского!</p>
<table><tr><th>🇬🇧 UK</th><th>🇺🇸 USA</th><th>🇷🇺</th></tr>
<tr><td>trousers</td><td>pants</td><td>брюки</td></tr>
<tr><td>jumper</td><td>sweater</td><td>свитер</td></tr>
<tr><td>trainers</td><td>sneakers</td><td>кроссовки</td></tr>
<tr><td>pants</td><td>underwear</td><td>трусы 🙈</td></tr></table>
<p>Обрати внимание на последнюю строку: в Лондоне <b>pants</b> — это трусы, а в Нью-Йорке — брюки! 😄</p>`
        },
        {
          label: "🎵 Песенка о погоде",
          html: `<p>На мелодию «Братца Якова» (по-итальянски «Fra Martino») спой:</p>
<p style="font-size:1.15em"><i>What's the weather, what's the weather,<br>like today? Like today?<br>Is it sunny? ☀️ Is it rainy? 🌧️<br>Is it cloudy? ☁️ Is it snowy? ❄️<br>Let's go play! Let's go play!</i></p>
<p>Каждое утро смотри в окно и отвечай: <i>«It's…!»</i></p>`
        },
        {
          label: "🔗 Соедини погоду и одежду",
          html: `<p>Соедини каждую погоду с одеждой или предметом, который нужен больше всего.</p>`,
          widget: "match",
          options: { pairs: [["It's rainy 🌧️", "umbrella"], ["It's snowy ❄️", "boots"], ["It's sunny ☀️", "cap"], ["It's cold 🥶", "coat"], ["It's hot 🥵", "shorts"], ["It's windy 💨", "scarf"]] }
        }
      ]
    },
    {
      type: "conceptMap", title: "Карта: погода и одежда по-английски",
      nodes: [
        { id: "weather", label: "The weather", x: 25, y: 8, color: "#0ea5e9", html: "Погода: <i>What's the weather like?</i>", why: "Погода зависит от солнца, облаков, ветра и температуры воздуха. Англичане очень много о ней говорят, потому что климат Великобритании, океанический и влажный, очень быстро меняется." },
        { id: "y", label: "Слово + y", x: 10, y: 38, color: "#f59e0b", html: "sun → sunny, rain → rainy, wind → windy.", why: "В английском окончание <b>-y</b> превращает существительное в прилагательное: «с солнцем», «с дождём». Если слово кончается на гласную + согласную, согласная удваивается: sun → sunny, fog → foggy." },
        { id: "temp", label: "Hot / cold", x: 40, y: 38, color: "#dc2626", html: "Жарко, холодно.", why: "В английском погоду описывают с помощью <b>It's</b> + прилагательное: <i>it</i> — «пустое» подлежащее, которое просто держит предложение, потому что в английском подлежащее никогда нельзя опустить (по-русски мы говорим просто «жарко»)." },
        { id: "clothes", label: "Clothes", x: 75, y: 8, color: "#a855f7", html: "Одежда: T-shirt, jumper, coat, shoes…", why: "Мы одеваемся по-разному в зависимости от погоды, чтобы тело сохраняло нужную температуру: зимой одежда удерживает тепло, летом пропускает воздух." },
        { id: "pair", label: "Всегда во мн. числе", x: 90, y: 38, color: "#2563eb", html: "trousers, jeans, shorts → a pair of…", why: "Они во множественном числе, потому что состоят из двух одинаковых частей, двух штанин, как <i>scissors</i> (ножницы) и <i>glasses</i> (очки). По-русски мы тоже говорим «брюки», «джинсы» и «пара»." },
        { id: "warm", label: "Одежда для холода", x: 60, y: 45, color: "#0f766e", html: "coat, scarf, gloves, boots, hat.", why: "Шерсть и пух удерживают возле тела слой неподвижного воздуха: неподвижный воздух — отличный изолятор, и тепло не уходит." },
        { id: "verbs", label: "Put on / take off / wear", x: 50, y: 78, color: "#16a34a", html: "Надевать, снимать, носить.", why: "<i>Put on</i> и <i>take off</i> — это «фразовые глаголы»: глагол плюс маленькое слово (on, off), которое меняет его значение. <i>On</i> = на, на себя; <i>off</i> = прочь." },
        { id: "uk", label: "UK и USA", x: 85, y: 78, color: "#e11d48", html: "trousers / pants, jumper / sweater.", why: "Когда англичане стали заселять Америку (с 1600-х годов), два варианта языка немного разошлись, и некоторые слова изменились, как это бывает между диалектами." }
      ],
      edges: [
        ["weather", "y", "говорят с помощью"], ["weather", "temp", "It's…"], ["weather", "clothes", "определяет"],
        ["temp", "warm", "если cold"], ["clothes", "pair", "некоторые всегда"], ["clothes", "warm", "зимой"], ["clothes", "verbs", "используют с"], ["clothes", "uk", "разные названия"]
      ]
    },
    {
      type: "quiz", title: "Мини-викторина: clothes",
      questions: [
        { type: "mc", q: "Холодно. Что ты наденешь?", options: ["shorts", "a coat", "sandals"], answer: 1, explain: "It's cold → put on a coat 🧥." },
        { type: "mc", q: "«Gloves» — это…", options: ["перчатки", "носки", "сапоги"], answer: 0, explain: "Gloves = перчатки 🧤." },
        { type: "tf", q: "Говорят «My jeans are blue», во множественном числе.", answer: true, explain: "Jeans, trousers и shorts всегда во множественном числе." }
      ]
    }
  ],
  glossary: [
    { t: "weather", d: "погода. What's the weather like? = Какая погода?" },
    { t: "sunny · cloudy · rainy", d: "солнечно · облачно · дождливо" },
    { t: "windy · snowy · foggy", d: "ветрено · снежно · туманно" },
    { t: "hot · cold", d: "жарко · холодно" },
    { t: "clothes", d: "одежда" },
    { t: "T-shirt · shirt · jumper", d: "футболка · рубашка · свитер" },
    { t: "jacket · coat", d: "куртка · пальто" },
    { t: "trousers · jeans · shorts", d: "брюки · джинсы · шорты (всегда во множественном числе)" },
    { t: "dress · skirt", d: "платье · юбка" },
    { t: "socks · shoes · boots", d: "носки · туфли · сапоги" },
    { t: "hat · cap · scarf · gloves", d: "шляпа · кепка · шарф · перчатки" },
    { t: "umbrella", d: "зонтик" },
    { t: "put on / take off / wear", d: "надевать / снимать / носить" }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Как спросить «Какая погода?»", options: ["What's the weather like?", "What colour is it?", "How old are you?"], answer: 0, explain: "What's the weather like? = Какая погода?" },
      { type: "mc", q: "«It's windy» означает…", options: ["туманно", "ветрено", "идёт снег"], answer: 1, explain: "Wind = ветер, windy = ветрено 💨." },
      { type: "text", q: "Напиши по-английски: идёт снег (It's …)", answer: ["snowy", "it's snowy", "it is snowy"], explain: "Snow = снег, snowy = снежно ❄️." },
      { type: "mc", q: "Как сказать «шарф»?", options: ["scarf", "skirt", "shirt"], answer: 0, explain: "Scarf = шарф. Skirt = юбка, shirt = рубашка." },
      { type: "text", q: "Напиши по-английски: носки", answer: ["socks"], explain: "Носки = socks 🧦." },
      { type: "mc", q: "It's hot and sunny. Что ты наденешь?", options: ["gloves", "a T-shirt and shorts", "boots and a coat"], answer: 1, explain: "В жару надевают лёгкую одежду." },
      { type: "mc", q: "«Put on your hat!» означает…", options: ["Сними шляпу!", "Надень шляпу!", "Купи шляпу!"], answer: 1, explain: "Put on = надевать; take off = снимать." },
      { type: "tf", q: "В английском «trousers» — слово во множественном числе.", answer: true, explain: "My trousers are… → a pair of trousers." },
      { type: "tf", q: "В Лондоне «pants» — это брюки.", answer: false, explain: "В Великобритании pants = трусы; брюки — это trousers. А в Америке pants = брюки." },
      { type: "order", q: "Расставь слова по порядку, чтобы получилось предложение: «На мне красный свитер».", items: ["I'm", "wearing", "a", "red", "jumper"], explain: "I'm wearing a red jumper: цвет стоит перед названием одежды." },
      { type: "mc", q: "Название «jeans» происходит от города…", options: ["Лондон", "Генуя", "Париж"], answer: 1, explain: "От французского Gênes = Генуя, где использовали эту синюю ткань." },
      { type: "mc", q: "Что тебе нужно, если «It's rainy»?", options: ["an umbrella", "sandals", "a cap"], answer: 0, explain: "В дождь нужен зонтик: umbrella ☂️." }
    ]
  }
});
