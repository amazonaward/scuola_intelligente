TOPIC('ru', {
  id: `p5-ing-comparatives`,
  title: `Comparatives`,
  intro: `Слон <b>больше</b> мыши. Жираф <b>выше</b> лошади. Сравнивать очень полезно! Но в английском «более» говорят не всегда одинаково: иногда добавляют <b>-er</b> (<i>bigger</i>), а иногда используют <b>more</b> (<i>more beautiful</i>). Узнаем, когда как. 🐘 > 🐭`,
  minutes: 30,
  sections: [
    {
      type: `text`, title: `1. Сравнительная степень`,
      html: `<p><b>Сравнительная степень</b> нужна, чтобы сказать, что у одного предмета какое-то качество выражено <b>сильнее</b>, чем у другого. По-русски мы говорим «<i>больше … чем</i>» или «<i>выше … чем</i>». В английском слово «чем» — это <b>than</b> («зэн»), а «более» меняется в зависимости от <b>длины прилагательного</b>:</p>
<ul>
<li><b>Короткие прилагательные</b> (один слог): добавляется <b>-er</b>.<br><i>tall ➜ <b>taller</b></i>: <i>Tom is <b>taller than</b> Ben.</i> = Том выше Бена.</li>
<li><b>Длинные прилагательные</b> (три слога и больше, и многие из двух): впереди ставится <b>more</b>.<br><i>beautiful ➜ <b>more beautiful</b></i>: <i>This flower is <b>more beautiful than</b> that one.</i></li>
</ul>`
    },
    {
      type: `text`, title: `2. Правила написания с -er`,
      html: `<table>
<tr><th>Случай</th><th>Правило</th><th>Примеры</th></tr>
<tr><td>Почти все короткие прилагательные</td><td>+ <b>er</b></td><td>small ➜ smaller · fast ➜ faster · old ➜ older · cold ➜ colder</td></tr>
<tr><td>Оканчиваются на <b>-e</b></td><td>+ <b>r</b></td><td>nice ➜ nicer · large ➜ larger · safe ➜ safer</td></tr>
<tr><td>Оканчиваются на <b>согласная-гласная-согласная</b></td><td>согласная <b>удваивается</b> + er</td><td>big ➜ bi<b>gg</b>er · hot ➜ ho<b>tt</b>er · thin ➜ thi<b>nn</b>er · fat ➜ fa<b>tt</b>er</td></tr>
<tr><td>Оканчиваются на <b>согласная + y</b></td><td>y ➜ <b>ier</b></td><td>happy ➜ happ<b>ier</b> · funny ➜ funn<b>ier</b> · easy ➜ eas<b>ier</b> · heavy ➜ heav<b>ier</b></td></tr>
<tr><td>Длинные прилагательные</td><td><b>more</b> + прилагательное</td><td>more expensive · more interesting · more dangerous · more difficult</td></tr>
</table>
<p>⚠️ "More" и "-er" <b>никогда не употребляют вместе</b>: <i>more bigger</i> — это ошибка!</p>`
    },
    {
      type: `svg`, title: `Кто больше?`,
      caption: `Слон, лошадь и мышь: сравни их, используя bigger, smaller, heavier, faster.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ecfccb"/>
<rect y="240" width="600" height="60" fill="#84cc16"/>
<ellipse cx="140" cy="170" rx="95" ry="65" fill="#94a3b8"/>
<rect x="75" y="200" width="25" height="45" fill="#94a3b8"/>
<rect x="175" y="200" width="25" height="45" fill="#94a3b8"/>
<circle cx="225" cy="135" r="40" fill="#94a3b8"/>
<path d="M255 150 Q275 200 255 235" stroke="#94a3b8" stroke-width="16" fill="none" stroke-linecap="round"/>
<circle cx="232" cy="125" r="5" fill="#0f172a"/>
<ellipse cx="200" cy="130" rx="22" ry="30" fill="#cbd5e1"/>
<ellipse cx="380" cy="190" rx="55" ry="30" fill="#a16207"/>
<rect x="340" y="210" width="12" height="35" fill="#a16207"/>
<rect x="410" y="210" width="12" height="35" fill="#a16207"/>
<path d="M425 180 L450 135 L470 145 L445 190 Z" fill="#a16207"/>
<circle cx="458" cy="138" r="3" fill="#0f172a"/>
<ellipse cx="535" cy="232" rx="16" ry="9" fill="#6b7280"/>
<circle cx="550" cy="226" r="6" fill="#6b7280"/>
<path d="M519 232 Q505 236 500 228" stroke="#6b7280" stroke-width="2" fill="none"/>
<text x="150" y="40" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">elephant</text>
<text x="400" y="110" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">horse</text>
<text x="540" y="200" font-size="20" text-anchor="middle" fill="#1e293b" font-weight="bold">mouse</text>
<text x="300" y="275" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">The elephant is BIGGER than the horse.</text>
<text x="300" y="295" font-size="15" text-anchor="middle" fill="#ffffff">The mouse is SMALLER than the horse.</text>
</svg>`
    },
    {
      type: `quiz`, title: `Мини-тест: -er или more?`,
      questions: [
        { type: `mc`, q: `Сравнительная степень от "fast" —`, options: [`more fast`, `faster`, `fastter`], answer: 1, explain: `Короткое прилагательное: fast + er = faster.` },
        { type: `mc`, q: `Сравнительная степень от "interesting" —`, options: [`interestinger`, `more interesting`], answer: 1, explain: `Длинное прилагательное (4 слога): more interesting.` },
        { type: `text`, q: `Напиши сравнительную степень от "big".`, answer: [`bigger`], explain: `Согласная-гласная-согласная: g удваивается ➜ bigger.` }
      ]
    },
    {
      type: `text`, title: `3. Исключения: учим наизусть`,
      html: `<p>Некоторые очень употребительные прилагательные <b>неправильные</b>, как и в русском (хороший ➜ лучше):</p>
<table>
<tr><th>Прилагательное</th><th>Сравнительная степень</th><th>По-русски</th></tr>
<tr><td><b>good</b></td><td><b>better</b></td><td>хороший ➜ лучше</td></tr>
<tr><td><b>bad</b></td><td><b>worse</b></td><td>плохой ➜ хуже</td></tr>
<tr><td><b>far</b></td><td><b>farther / further</b></td><td>далёкий ➜ дальше</td></tr>
</table>
<p>Пример: <i>Pizza is <b>better than</b> broccoli!</i> 🍕 · <i>My cold is <b>worse</b> today.</i> 🤧</p>
<p><b>Бонус</b>: чтобы сказать «<b>одинаково</b>», используют <b>as … as</b>: <i>Anna is <b>as tall as</b> Luca.</i> = Анна такого же роста, как Лука.</p>`
    },
    {
      type: `remember`, title: `Схема предложения`,
      html: `<p><b>Подлежащее + is/are + сравнительная степень + than + второй предмет</b></p>
<p><i>The sun</i> + <i>is</i> + <i><b>hotter</b></i> + <i><b>than</b></i> + <i>the moon</i>. ☀️ > 🌙</p>
<p>Короткие ➜ <b>-er</b> · Длинные ➜ <b>more</b> · good ➜ <b>better</b> · bad ➜ <b>worse</b></p>`
    },
    {
      type: `widget`, title: `Игра: -er или more?`,
      widget: `classify`,
      caption: `Как образуется сравнительная степень этих прилагательных?`,
      options: {
        groups: [`➕ -er / -ier`, `📏 more …`, `⭐ исключение`],
        items: [
          [`tall`, 0], [`small`, 0], [`happy`, 0], [`hot`, 0], [`nice`, 0], [`easy`, 0],
          [`beautiful`, 1], [`expensive`, 1], [`dangerous`, 1], [`difficult`, 1],
          [`good`, 2], [`bad`, 2]
        ]
      }
    },
    {
      type: `widget`, title: `Карточки: прилагательное ➜ сравнительная степень`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🐘 big`, back: `bigger (больше)` },
          { front: `🐭 small`, back: `smaller (меньше)` },
          { front: `🦒 tall`, back: `taller (выше)` },
          { front: `🐆 fast`, back: `faster (быстрее)` },
          { front: `🔥 hot`, back: `hotter (горячее)` },
          { front: `😀 happy`, back: `happier (счастливее)` },
          { front: `🏋️ heavy`, back: `heavier (тяжелее)` },
          { front: `🌸 beautiful`, back: `more beautiful (красивее)` },
          { front: `💎 expensive`, back: `more expensive (дороже)` },
          { front: `👍 good`, back: `better (лучше)` },
          { front: `👎 bad`, back: `worse (хуже)` }
        ]
      }
    },
    {
      type: `example`, title: `Пример: рекордсмены среди животных`,
      html: `<ul>
<li>🐆 <i>A cheetah is <b>faster than</b> a horse.</i> — Гепард разгоняется примерно до 100 км/ч, лошадь — примерно до 70.</li>
<li>🐋 <i>A blue whale is <b>heavier than</b> an elephant.</i> — Синий кит может весить больше 150 тонн, слон — около 6.</li>
<li>🦒 <i>A giraffe is <b>taller than</b> a bus.</i> — Жираф-самец достигает почти 6 метров, автобус — около 3.</li>
<li>🐢 <i>A tortoise is <b>slower than</b> a snail?</i> — Нет! Черепаха быстрее улитки: <i>A snail is <b>slower than</b> a tortoise.</i></li>
</ul>`
    },
    {
      type: `example`, title: `Пример: в магазине игрушек`,
      html: `<p><b>Emma:</b> Look at this teddy bear! 🧸<br>
<b>Dad:</b> It's nice, but the red one is <b>bigger</b> and <b>softer</b>.<br>
<b>Emma:</b> Yes, but it's <b>more expensive</b>. 💰<br>
<b>Dad:</b> That's true. The small one is <b>cheaper</b>.<br>
<b>Emma:</b> OK, the small one is <b>better</b> for me!</p>`
    },
    {
      type: `curiosity`, title: `А ты знаешь, что… из-за "fun" англичане спорили?`,
      html: `<p>Долгое время в учебниках грамматики писали, что сравнительная степень от <b>fun</b> (весёлый) — только <b>more fun</b>. Но английские и американские школьники говорили <b>funner</b>, и сегодня многие словари допускают это в неформальной речи. Языки меняются благодаря тем, кто на них говорит… даже детям!</p>`
    },
    {
      type: `curiosity`, title: `А ты знаешь, что… и в русском есть «короткие» сравнительные степени?`,
      html: `<p>В латыни сравнительная степень образовывалась окончанием, как английское -er: <i>altus</i> ➜ <i>altior</i> (выше). В русском языке тоже есть такие формы: <b>выше</b>, <b>быстрее</b>, <b>лучше</b>, <b>хуже</b>, <b>больше</b>, <b>меньше</b>. А ещё мы можем сказать «<b>более</b> красивый», как англичане говорят "more beautiful".</p>`
    },
    {
      type: `alternatives`, title: `Другие способы понять тему`,
      intro: `Если не помнишь, когда использовать -er, а когда more, попробуй эти приёмы.`,
      tabs: [
        {
          label: `👏 Считай слоги`,
          html: `<p>Хлопай в ладоши, произнося прилагательное:</p>
<ul>
<li><b>tall</b> 👏 = 1 хлопок ➜ <b>-er</b>: taller</li>
<li><b>hap-py</b> 👏👏 = 2 хлопка, но оканчивается на <b>y</b> ➜ <b>-ier</b>: happier</li>
<li><b>beau-ti-ful</b> 👏👏👏 = 3 хлопка ➜ <b>more</b>: more beautiful</li>
</ul>
<p>Практическое правило: <b>1 хлопок ➜ -er</b>; <b>3 и больше ➜ more</b>; при 2 хлопках: <b>-ier</b>, если оканчивается на y, иначе обычно <b>more</b> (<i>more famous, more boring</i>).</p>`
        },
        {
          label: `📊 Весы`,
          html: `<p>Сравнительная степень похожа на <b>весы</b>: более «сильная» сторона опускается вниз. <b>than</b> стоит в центре, как ось.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#fff7ed"/>
<polygon points="300,210 270,235 330,235" fill="#78350f"/>
<line x1="300" y1="210" x2="300" y2="90" stroke="#78350f" stroke-width="6"/>
<line x1="120" y1="120" x2="480" y2="60" stroke="#78350f" stroke-width="6"/>
<circle cx="300" cy="90" r="10" fill="#f59e0b"/>
<rect x="60" y="120" width="120" height="70" rx="10" fill="#ef4444"/>
<text x="120" y="162" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">🐘 elephant</text>
<rect x="420" y="20" width="120" height="44" rx="10" fill="#38bdf8"/>
<text x="480" y="48" font-size="20" text-anchor="middle" fill="#ffffff" font-weight="bold">🐭 mouse</text>
<text x="300" y="70" font-size="20" text-anchor="middle" fill="#9a3412" font-weight="bold">than</text>
<text x="300" y="30" font-size="18" text-anchor="middle" fill="#9a3412">heavier</text>
</svg>`
        },
        {
          label: `🇩🇪 Как в немецком`,
          html: `<p>Немецкий, двоюродный брат английского, тоже использует окончание <b>-er</b>, но для <b>всех</b> прилагательных, даже длинных:</p>
<ul>
<li>klein ➜ klein<b>er</b> (small ➜ smaller)</li>
<li>schön ➜ schön<b>er</b> (beautiful ➜ more beautiful)</li>
<li>gut ➜ <b>besser</b> (good ➜ better)</li>
</ul>
<p>А французский и испанский делают как итальянский: <b>plus</b> grand, <b>más</b> grande. Английский находится посередине: -er, как у германских языков, для коротких слов, и more, как у романских, для длинных (которые часто и правда пришли из латыни и французского: <i>beautiful, expensive, difficult</i>).</p>`
        },
        {
          label: `🔗 Соедини`,
          html: `<p>Соедини каждое прилагательное с его сравнительной степенью.</p>`,
          widget: `match`,
          options: {
            pairs: [
              [`good`, `better`], [`bad`, `worse`], [`hot`, `hotter`], [`funny`, `funnier`],
              [`nice`, `nicer`], [`difficult`, `more difficult`]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Карта: как образуется сравнительная степень`,
      nodes: [
        { id: `comp`, label: `Сравнительная степень`, x: 50, y: 8, color: `#3b82f6`, html: `Сравнивает два предмета: «более … чем».`, why: `Всем языкам нужно сравнивать. В английском две системы, потому что он — смесь: германская (англосаксонская) основа и множество слов, пришедших из французского после нормандского завоевания 1066 года.` },
        { id: `than`, label: `than`, x: 85, y: 22, color: `#64748b`, html: `Значит «чем» при сравнении.`, why: `"Than" и "then" (потом) сначала были одним и тем же словом: "Tom is taller, then Ben" = сначала идёт Том, потом Бен. Со временем они разделились.` },
        { id: `short`, label: `Короткие: -er`, x: 18, y: 35, color: `#22c55e`, html: `tall ➜ taller, small ➜ smaller.`, why: `Это древнее германское окончание (в древнеанглийском <i>-ra</i>), которое есть и в немецком (kleiner), и в нидерландском. Короткие слова почти все англосаксонского происхождения.` },
        { id: `long`, label: `Длинные: more`, x: 50, y: 35, color: `#a855f7`, html: `more beautiful, more expensive.`, why: `Со Средних веков с длинными словами (часто французского или латинского происхождения) "more" + прилагательное звучало лучше, чем приставленное окончание: <i>beautifuller</i> трудно произнести!` },
        { id: `irr`, label: `Исключения`, x: 82, y: 50, color: `#ef4444`, html: `good ➜ better, bad ➜ worse.`, why: `Это очень древние и очень частые слова: "better" происходит от другого корня, чем "good", как и в русском «лучше» не образовано от «хороший». Это называется <b>супплетивизм</b>.` },
        { id: `e`, label: `-e ➜ -r`, x: 10, y: 65, color: `#16a34a`, html: `nice ➜ nicer.`, why: `Просто не повторяют лишнюю "e": в "niceer" была бы ненужная e, потому что конечная e уже есть.` },
        { id: `double`, label: `Удвоение согласной`, x: 32, y: 78, color: `#15803d`, html: `big ➜ bigger, hot ➜ hotter.`, why: `Это нужно, чтобы гласная оставалась «краткой». В английском гласная, за которой идёт одна согласная и потом ещё гласная, становится «долгой»: "biger" читалось бы «байгер». Удвоив g, мы читаем по-прежнему «бигер».` },
        { id: `y`, label: `-y ➜ -ier`, x: 55, y: 78, color: `#84cc16`, html: `happy ➜ happier.`, why: `В английском y в середине слова часто превращается в i (happy ➜ happiness, carry ➜ carries). Это правило письма, установленное традицией типографов.` }
      ],
      edges: [
        [`comp`, `than`, `использует`], [`comp`, `short`, `короткие слова`], [`comp`, `long`, `длинные слова`], [`comp`, `irr`, `исключения`],
        [`short`, `e`, `правило`], [`short`, `double`, `правило`], [`short`, `y`, `правило`]
      ]
    },
    {
      type: `quiz`, title: `Мини-тест: предложения со сравнением`,
      questions: [
        { type: `mc`, q: `«Мой кот толще твоего» по-английски…`, options: [`My cat is fater than your cat.`, `My cat is fatter than your cat.`, `My cat is more fat than your cat.`], answer: 1, explain: `fat ➜ fatter (t удваивается).` },
        { type: `mc`, q: `Summer is ___ than winter.`, options: [`hoter`, `more hot`, `hotter`], answer: 2, explain: `hot ➜ hotter.` },
        { type: `text`, q: `Сравнительная степень от "good" —`, answer: [`better`], explain: `good ➜ better (исключение).` }
      ]
    }
  ],
  glossary: [
    { t: `comparative`, d: `Сравнительная степень: форма прилагательного для сравнения двух предметов.` },
    { t: `than`, d: `«Чем» при сравнении: taller than me = выше, чем я.` },
    { t: `-er`, d: `Окончание сравнительной степени у коротких прилагательных.` },
    { t: `more`, d: `«Более»: ставится перед длинными прилагательными.` },
    { t: `better`, d: `Лучше (сравнительная степень от good).` },
    { t: `worse`, d: `Хуже (сравнительная степень от bad).` },
    { t: `as … as`, d: `«Такой же … как»: as tall as = такого же роста, как.` },
    { t: `syllable`, d: `Слог: помогает понять, короткое прилагательное или длинное.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Сравнительная степень от "old" —`, options: [`older`, `more old`, `oldder`], answer: 0, explain: `old + er = older.` },
      { type: `mc`, q: `Сравнительная степень от "dangerous" —`, options: [`dangerouser`, `more dangerous`], answer: 1, explain: `Длинное прилагательное ➜ more dangerous.` },
      { type: `text`, q: `Напиши сравнительную степень от "happy".`, answer: [`happier`], explain: `y ➜ ier: happier.` },
      { type: `text`, q: `Напиши сравнительную степень от "bad".`, answer: [`worse`], explain: `bad ➜ worse (исключение).` },
      { type: `mc`, q: `Какое предложение правильное?`, options: [`A car is more faster than a bike.`, `A car is faster than a bike.`, `A car is faster that a bike.`], answer: 1, explain: `Никогда не "more" + "-er"; и используется than, а не that.` },
      { type: `tf`, q: `"nice" превращается в "nicer".`, answer: true, explain: `Оканчивается на -e: добавляется только -r.` },
      { type: `tf`, q: `"thin" превращается в "thiner".`, answer: false, explain: `Согласная-гласная-согласная: thin ➜ thinner.` },
      { type: `order`, q: `Расставь слова по порядку.`, items: [`Rome`, `is`, `bigger`, `than`, `Turin.`], explain: `Rome is bigger than Turin. = Рим больше Турина.` },
      { type: `mc`, q: `Как сказать «Книга лучше фильма»?`, options: [`The book is gooder than the film.`, `The book is better than the film.`, `The book is more good than the film.`], answer: 1, explain: `good ➜ better.` },
      { type: `mc`, q: `«Анна такого же роста, как Лука» по-английски…`, options: [`Anna is taller than Luca.`, `Anna is as tall as Luca.`, `Anna is tall than Luca.`], answer: 1, explain: `Для равенства: as … as.` },
      { type: `text`, q: `Вставь слово: Maths is ___ (difficult) than art.`, answer: [`more difficult`], explain: `difficult — длинное: more difficult.` }
    ]
  }
});
