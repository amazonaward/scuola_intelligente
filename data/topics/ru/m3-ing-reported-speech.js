TOPIC('ru', {
  id: `m3-ing-reported-speech`,
  title: `Reported speech: косвенная речь`,
  intro: `Вчера Анна сказала тебе: <i>"I'm tired."</i> Сегодня ты рассказываешь об этом другу: <i>"Anna said she <b>was</b> tired."</i> Когда мы передаём чужие слова, мы используем <b>reported speech</b> (косвенную речь). Меняются времена глаголов, местоимения и слова, обозначающие время и место: давай разберёмся, как и почему. 🗣️➡️👂`,
  minutes: 40,
  sections: [
    {
      type: `text`, title: `1. Прямая и косвенная речь`,
      html: `<p><b>Прямая речь</b> (direct speech): передаёт <b>точные</b> слова, в кавычках.</p>
<p><i>Tom said, <b>"I like pizza."</b></i></p>
<p><b>Косвенная речь</b> (reported speech): пересказывает, что сказал человек, <b>без кавычек</b>, с изменёнными словами.</p>
<p><i>Tom said <b>(that) he liked pizza</b>.</i></p>
<p>Обрати внимание на три изменения:</p>
<ol>
<li>исчезают <b>кавычки</b>; можно добавить <i>that</i> (его часто опускают);</li>
<li>меняется <b>местоимение</b>: I ➜ he;</li>
<li>меняется <b>время глагола</b>: like ➜ liked.</li>
</ol>`
    },
    {
      type: `text`, title: `2. «Шаг назад» во времени (backshift)`,
      html: `<p>Когда вводящий глагол стоит в прошедшем времени (<i>said, told</i>), глагол в пересказе делает <b>шаг назад во времени</b>:</p>
<table>
<tr><th>Прямая речь</th><th>Косвенная речь</th></tr>
<tr><td>present simple: "I <b>am</b> hungry."</td><td>past simple: he said he <b>was</b> hungry.</td></tr>
<tr><td>present continuous: "I'<b>m reading</b>."</td><td>past continuous: she said she <b>was reading</b>.</td></tr>
<tr><td>past simple: "I <b>saw</b> a fox."</td><td>past perfect: he said he <b>had seen</b> a fox.</td></tr>
<tr><td>present perfect: "I'<b>ve finished</b>."</td><td>past perfect: she said she <b>had finished</b>.</td></tr>
<tr><td>will: "I <b>will</b> help you."</td><td>would: he said he <b>would</b> help me.</td></tr>
<tr><td>can: "I <b>can</b> swim."</td><td>could: she said she <b>could</b> swim.</td></tr>
<tr><td>must: "You <b>must</b> go."</td><td>had to: he said I <b>had to</b> go.</td></tr>
</table>
<p>Если вводящий глагол стоит в <b>настоящем времени</b> (<i>she says</i>), времена <b>не меняются</b>: <i>She says she is tired.</i></p>
<p>Если информация <b>всё ещё верна</b>, backshift необязателен: <i>He said the Earth <b>is</b> round.</i></p>`
    },
    {
      type: `svg`, title: `Лестница backshift`,
      caption: `Каждое время спускается на одну ступеньку в прошлое. Past perfect — последняя ступенька: на ней мы останавливаемся.`,
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#eff6ff"/>
<rect x="30" y="40" width="160" height="50" rx="8" fill="#22c55e"/>
<text x="110" y="72" font-size="17" fill="#fff" font-weight="bold" text-anchor="middle">PRESENT</text>
<rect x="150" y="120" width="160" height="50" rx="8" fill="#3b82f6"/>
<text x="230" y="152" font-size="17" fill="#fff" font-weight="bold" text-anchor="middle">PAST</text>
<rect x="270" y="200" width="200" height="50" rx="8" fill="#7c3aed"/>
<text x="370" y="232" font-size="17" fill="#fff" font-weight="bold" text-anchor="middle">PAST PERFECT</text>
<path d="M110 92 L110 110 Q110 120 125 120 L150 120" stroke="#0f172a" stroke-width="3" fill="none"/>
<path d="M230 172 L230 190 Q230 200 245 200 L270 200" stroke="#0f172a" stroke-width="3" fill="none"/>
<text x="210" y="65" font-size="15" fill="#166534">am ➜ was · like ➜ liked</text>
<text x="330" y="140" font-size="15" fill="#1e40af">saw ➜ had seen</text>
<text x="330" y="160" font-size="15" fill="#1e40af">have seen ➜ had seen</text>
<text x="490" y="232" font-size="15" fill="#5b21b6">всё хорошо!</text>
<rect x="400" y="40" width="180" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
<text x="490" y="65" font-size="15" fill="#92400e" text-anchor="middle" font-weight="bold">will ➜ would</text>
<text x="490" y="88" font-size="15" fill="#92400e" text-anchor="middle" font-weight="bold">can ➜ could</text>
<text x="30" y="285" font-size="15" fill="#334155">Вводящий глагол в прошедшем (said, told) ➜ спускаемся на ступеньку.</text>
</svg>`
    },
    {
      type: `text`, title: `3. Местоимения, время и место`,
      html: `<p>Меняется и <b>точка зрения</b>: кто говорит, когда и где.</p>
<ul>
<li><b>Местоимения</b>: "I love <b>my</b> dog" ➜ She said <b>she</b> loved <b>her</b> dog.</li>
</ul>
<table>
<tr><th>Прямая речь</th><th>Косвенная речь</th></tr>
<tr><td>now</td><td>then</td></tr>
<tr><td>today</td><td>that day</td></tr>
<tr><td>tonight</td><td>that night</td></tr>
<tr><td>yesterday</td><td>the day before / the previous day</td></tr>
<tr><td>tomorrow</td><td>the next day / the following day</td></tr>
<tr><td>last week</td><td>the week before</td></tr>
<tr><td>next week</td><td>the following week</td></tr>
<tr><td>here</td><td>there</td></tr>
<tr><td>this / these</td><td>that / those</td></tr>
</table>
<p>Пример: "I'll call you <b>tomorrow</b>," Mark said. ➜ Mark said he <b>would</b> call me <b>the next day</b>.</p>`
    },
    {
      type: `quiz`, title: `Мини-тест: backshift`,
      questions: [
        { type: `mc`, q: `"I am happy," said Sara. ➜ Sara said she ___ happy.`, options: [`is`, `was`, `had`], answer: 1, explain: `Настоящее ➜ прошедшее: am ➜ was.` },
        { type: `mc`, q: `"I will come," said Leo. ➜ Leo said he ___ come.`, options: [`will`, `would`, `wills`], answer: 1, explain: `will ➜ would.` },
        { type: `text`, q: `"tomorrow" в косвенной речи превращается в "the ___ day".`, answer: [`next`, `following`], explain: `tomorrow ➜ the next day / the following day.` }
      ]
    },
    {
      type: `text`, title: `4. Say или tell? Вопросы и приказы`,
      html: `<p><b>say</b> и <b>tell</b> оба означают «сказать», но:</p>
<ul>
<li><b>say</b> + (that) + предложение: <i>She <b>said</b> (that) she was busy.</i> (если назван человек: <i>said <b>to</b> me</i>)</li>
<li><b>tell</b> + <b>человек</b> + (that) + предложение: <i>She <b>told me</b> (that) she was busy.</i> ⚠️ <s>She told that…</s></li>
</ul>
<p><b>Косвенные вопросы</b> (reported questions): используется <b>asked</b>, а предложение возвращается к <b>утвердительному порядку слов</b> (подлежащее + глагол), без <i>do/does/did</i> и без вопросительного знака.</p>
<ul>
<li>Вопросы с вопросительным словом: "Where <b>do you live</b>?" ➜ He asked me where <b>I lived</b>.</li>
<li>Вопросы «да/нет»: используется <b>if</b> или <b>whether</b>: "Are you OK?" ➜ She asked <b>if I was</b> OK.</li>
</ul>
<p><b>Приказы и просьбы</b>: <b>tell / ask</b> + человек + <b>to</b> + глагол.</p>
<ul>
<li>"Close the door!" ➜ The teacher <b>told us to close</b> the door.</li>
<li>"Don't run!" ➜ Mum <b>told me not to run</b>.</li>
<li>"Please help me." ➜ He <b>asked me to help</b> him.</li>
</ul>`
    },
    {
      type: `remember`, title: `Запомни`,
      html: `<ul>
<li>Вводящий глагол в прошедшем ➜ времена на шаг назад (am ➜ was, will ➜ would, saw ➜ had seen).</li>
<li>Меняются местоимения и слова времени/места (today ➜ that day, here ➜ there).</li>
<li><b>say</b> что-то; <b>tell</b> кому-то.</li>
<li>Вопросы: <b>asked</b> + вопросительное слово / <b>if</b> + порядок «подлежащее — глагол».</li>
<li>Приказы: <b>told/asked + человек + (not) to + глагол</b>.</li>
</ul>`
    },
    {
      type: `example`, title: `Пример из жизни: пересказ телефонного разговора`,
      html: `<p>Вчера бабушка позвонила тебе и сказала:</p>
<p><i>"I'm making a cake. I'll bring it to you tomorrow. Can you come to the station?"</i></p>
<p>Сегодня ты рассказываешь об этом своей английской подруге:</p>
<p><i>"Grandma <b>told me she was making</b> a cake. She <b>said she would bring</b> it to us <b>the next day</b>. She <b>asked me if I could</b> go to the station."</i></p>`
    },
    {
      type: `example`, title: `Пример из жизни: в классе`,
      html: `<p>Учительница английского говорит: <i>"Open your books. Don't talk. What did you do last weekend?"</i></p>
<p>Позже ты пересказываешь это отсутствовавшему однокласснику:</p>
<ul>
<li><i>She <b>told us to open</b> our books.</i></li>
<li><i>She <b>told us not to talk</b>.</i></li>
<li><i>She <b>asked us what we had done the weekend before</b>.</i></li>
</ul>`
    },
    {
      type: `widget`, title: `Соедини прямую и косвенную речь`,
      widget: `match`,
      options: { pairs: [
        [`"I'm tired."`, `He said he was tired.`],
        [`"I can't swim."`, `She said she couldn't swim.`],
        [`"I saw a ghost!"`, `He said he had seen a ghost.`],
        [`"We'll win."`, `They said they would win.`],
        [`"Sit down!"`, `She told me to sit down.`],
        [`"Do you like jazz?"`, `He asked me if I liked jazz.`]
      ] },
      caption: `Посмотри на глагол: на сколько он «спустился» во времени?`
    },
    {
      type: `curiosity`, title: `А ты знал, что… в итальянском происходит то же самое?`,
      html: `<p>В итальянском языке косвенная речь тоже подчиняется <b>согласованию времён</b> (по-латыни <i>consecutio temporum</i>): <i>"Sono stanco" ➜ Disse che <b>era</b> stanco; "Verrò" ➜ Disse che <b>sarebbe venuto</b>.</i> Об этом писали ещё латинские грамматики более 2000 лет назад: это очень древнее правило европейских языков. В русском же языке всё иначе: мы просто говорим «Он сказал, что <b>устал</b>», и время не сдвигается.</p>`
    },
    {
      type: `curiosity`, title: `А ты знал, что… в газетах используют много глаголов, кроме "say"?`,
      html: `<p>Чтобы не повторять без конца <i>said</i>, журналисты используют более точные <b>reporting verbs</b>: <i>explain</i> (объяснять), <i>claim</i> (утверждать), <i>admit</i> (признавать), <i>deny</i> (отрицать), <i>promise</i> (обещать), <i>warn</i> (предупреждать), <i>complain</i> (жаловаться). Каждый глагол добавляет оттенок: "He <b>admitted</b> he had lied" говорит гораздо больше, чем "he said".</p>`
    },
    {
      type: `alternatives`, title: `Другие способы понять тему`,
      intro: `Если таблиц недостаточно, попробуй взглянуть на косвенную речь с другой стороны.`,
      tabs: [
        {
          label: `📬 Сообщение приходит позже`,
          html: `<p>Представь, что слова — это <b>письмо</b>. Когда их произносят, они «свежие» (настоящее время). Когда ты их пересказываешь, письмо <b>уже старое</b>: слова были сказаны в прошлом, поэтому глаголы «стареют» на один шаг.</p>
<p>Если новость актуальна и сегодня (<i>Paris is the capital of France</i>), письмо не стареет, и время может остаться прежним.</p>`
        },
        {
          label: `🇮🇹 Сравнение с итальянским`,
          html: `<table>
<tr><th>Прямая речь</th><th>Итальянский</th><th>Английский</th></tr>
<tr><td>"Ho fame."</td><td>Disse che aveva fame.</td><td>He said he was hungry.</td></tr>
<tr><td>"Ho visto Luca."</td><td>Disse che aveva visto Luca.</td><td>She said she had seen Luca.</td></tr>
<tr><td>"Ti aiuterò."</td><td>Disse che mi avrebbe aiutato.</td><td>He said he would help me.</td></tr>
<tr><td>"Vieni!"</td><td>Mi disse di venire.</td><td>She told me to come.</td></tr>
</table>
<p>Разница: там, где итальянский использует <b>прошедшее условное</b> (avrebbe aiutato), английский использует просто <b>would</b>.</p>`
        },
        {
          label: `💬 Комикс ➜ рассказ`,
          html: `<p>В комиксе слова находятся в облачке (прямая речь). Рассказчик внизу пересказывает их (косвенная речь).</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fff7ed"/>
<rect x="15" y="15" width="270" height="230" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<rect x="315" y="15" width="270" height="230" rx="10" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
<ellipse cx="150" cy="70" rx="120" ry="40" fill="#fde68a" stroke="#0f172a" stroke-width="2"/>
<path d="M120 105 L105 135 L145 108 Z" fill="#fde68a" stroke="#0f172a" stroke-width="2"/>
<text x="150" y="65" font-size="15" text-anchor="middle" fill="#0f172a" font-weight="bold">"I'll be late</text>
<text x="150" y="85" font-size="15" text-anchor="middle" fill="#0f172a" font-weight="bold">tomorrow!"</text>
<text x="100" y="200" font-size="64" text-anchor="middle">🧒</text>
<text x="230" y="215" font-size="14" fill="#64748b" text-anchor="middle">понедельник</text>
<text x="450" y="80" font-size="64" text-anchor="middle">🧑‍🏫</text>
<rect x="330" y="140" width="240" height="90" rx="6" fill="#dbeafe"/>
<text x="450" y="168" font-size="14" text-anchor="middle" fill="#1e3a8a">Вторник: "Tom said</text>
<text x="450" y="190" font-size="14" text-anchor="middle" fill="#1e3a8a">he <tspan font-weight="bold">would</tspan> be late</text>
<text x="450" y="212" font-size="14" text-anchor="middle" fill="#1e3a8a"><tspan font-weight="bold">the next day</tspan>."</text>
</svg>`
        },
        {
          label: `🃏 Карточки`,
          html: `<p>Потренируйся со словами времени и места: посмотри на слово из прямой речи и попробуй назвать слово из косвенной.</p>`,
          widget: `flashcards`,
          options: { cards: [
            { front: `now`, back: `then` },
            { front: `today`, back: `that day` },
            { front: `yesterday`, back: `the day before` },
            { front: `tomorrow`, back: `the next day` },
            { front: `here`, back: `there` },
            { front: `this`, back: `that` },
            { front: `last week`, back: `the week before` }
          ] }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Карта: reported speech`,
      nodes: [
        { id: `rep`, label: `Reported speech`, x: 50, y: 8, color: `#3b82f6`, html: `Передавать своими словами то, что сказали другие.`, why: `Это нужно в любом языке, чтобы что-то рассказать. В латинской грамматике это называлось <i>oratio obliqua</i> («косвенная» речь), в противоположность <i>oratio recta</i> (прямой).` },
        { id: `back`, label: `Backshift`, x: 20, y: 30, color: `#7c3aed`, html: `Времена делают шаг назад.`, why: `Пересказ ведётся с точки зрения момента, когда мы говорим <b>сейчас</b>: слова были сказаны в прошлом, поэтому то, что тогда было «настоящим», теперь стало «прошедшим». Это согласование времён, которое описывали ещё латинские грамматики.` },
        { id: `pron`, label: `Местоимения`, x: 50, y: 30, color: `#f97316`, html: `I ➜ he/she, my ➜ his/her…`, why: `Меняется говорящий: тот, кто пересказывает, — не тот, кто произнёс фразу, поэтому «я» становится «он» или «она». Лингвисты называют это <b>дейксисом</b> (слова, зависящие от того, кто, где и когда говорит).` },
        { id: `time`, label: `Время и место`, x: 80, y: 30, color: `#f59e0b`, html: `today ➜ that day, here ➜ there.`, why: `«Сегодня» и «здесь» — тоже дейктические слова: «сегодня» в понедельник — это не «сегодня» во вторник. Поэтому их заменяют выражениями, которые не зависят от момента речи.` },
        { id: `say`, label: `say / tell`, x: 20, y: 62, color: `#22c55e`, html: `say something; tell somebody.`, why: `Они происходят от древнеанглийских <i>secgan</i> (говорить) и <i>tellan</i> (считать, рассказывать): "tell" означало и «считать», как "teller" — банковский кассир. Поэтому после него нужен человек, которому рассказывают.` },
        { id: `ask`, label: `Вопросы: asked`, x: 50, y: 62, color: `#0ea5e9`, html: `asked + where/what/if + подлежащее + глагол.`, why: `Косвенный вопрос — уже не настоящий вопрос, а утверждение («он спросил меня, где я живу»), поэтому он возвращается к обычному порядку «подлежащее — глагол», без do/does/did.` },
        { id: `ord`, label: `Приказы: told + to`, x: 80, y: 62, color: `#ef4444`, html: `She told me to sit down / not to run.`, why: `У повелительного наклонения нет ни времени, ни подлежащего: в английском его «упаковывают» в инфинитив с to, как в русском «она сказала мне сесть».` },
        { id: `nochange`, label: `Без изменений`, x: 35, y: 90, color: `#64748b`, html: `С says (настоящее) или с неизменной истиной.`, why: `Если вводящий глагол стоит в настоящем, во времени нет дистанции; если факт всё ещё верен (the Earth is round), нет причин переносить его в прошлое.` }
      ],
      edges: [
        [`rep`, `back`, `меняется`], [`rep`, `pron`, `меняется`], [`rep`, `time`, `меняется`], [`rep`, `say`, `глаголы`],
        [`say`, `ask`, `для вопросов`], [`say`, `ord`, `для приказов`], [`back`, `nochange`, `исключения`]
      ]
    },
    {
      type: `quiz`, title: `Мини-тест: вопросы и приказы`,
      questions: [
        { type: `mc`, q: `"Where do you live?" ➜ He asked me where…`, options: [`do I live.`, `I lived.`, `did I live.`], answer: 1, explain: `Утвердительный порядок слов + backshift: where I lived.` },
        { type: `mc`, q: `"Don't shout!" ➜ The teacher told us…`, options: [`not to shout.`, `don't shout.`, `to not shouting.`], answer: 0, explain: `told + человек + not to + глагол.` },
        { type: `mc`, q: `Выбери правильный глагол: She ___ me she was busy.`, options: [`said`, `told`], answer: 1, explain: `tell + человек: she told me.` }
      ]
    }
  ],
  glossary: [
    { t: `direct speech`, d: `Прямая речь: точные слова в кавычках.` },
    { t: `reported speech`, d: `Косвенная речь: пересказ того, что сказал кто-то.` },
    { t: `backshift`, d: `Сдвиг времён глагола на один шаг в прошлое.` },
    { t: `past perfect`, d: `had + причастие прошедшего времени: «уже сделал(а)».` },
    { t: `reporting verb`, d: `Глагол, вводящий косвенную речь: say, tell, ask, explain…` },
    { t: `whether`, d: `«Ли» в косвенных вопросах «да/нет» (как if).` },
    { t: `the next day`, d: `«На следующий день»: заменяет tomorrow.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `"I like chocolate," said Mia. ➜`, options: [`Mia said she likes chocolate yesterday.`, `Mia said she liked chocolate.`, `Mia said I liked chocolate.`], answer: 1, explain: `Местоимение I ➜ she, like ➜ liked.` },
      { type: `mc`, q: `"I have lost my keys." ➜ He said he ___ his keys.`, options: [`has lost`, `had lost`, `lost have`], answer: 1, explain: `Present perfect ➜ past perfect.` },
      { type: `text`, q: `"I can help you." ➜ She said she ___ help me.`, answer: [`could`], explain: `can ➜ could.` },
      { type: `text`, q: `"here" в косвенной речи превращается в…`, answer: [`there`], explain: `here ➜ there.` },
      { type: `mc`, q: `"Are you hungry?" ➜ Mum asked me…`, options: [`if I was hungry.`, `was I hungry.`, `are you hungry.`], answer: 0, explain: `Вопрос «да/нет» ➜ if + порядок «подлежащее — глагол».` },
      { type: `tf`, q: `Фраза "She told that she was tired" правильная.`, answer: false, explain: `После tell нужен человек: She told me / She said that…` },
      { type: `tf`, q: `После "He says…" (настоящее время) времена не меняются.`, answer: true, explain: `Backshift происходит только тогда, когда вводящий глагол стоит в прошедшем времени.` },
      { type: `order`, q: `Расставь по порядку: «Он спросил меня, где находится вокзал».`, items: [`He`, `asked`, `me`, `where`, `the`, `station`, `was.`], explain: `He asked me where the station was. (утвердительный порядок слов)` },
      { type: `mc`, q: `"Open the window, please." ➜ She asked me…`, options: [`to open the window.`, `open the window.`, `that I open the window please.`], answer: 0, explain: `asked + человек + to + глагол.` },
      { type: `text`, q: `"I'll see you tomorrow." ➜ He said he ___ see me the next day.`, answer: [`would`], explain: `will ➜ would; tomorrow ➜ the next day.` },
      { type: `mc`, q: `"I saw a film yesterday." ➜`, options: [`She said she had seen a film the day before.`, `She said she saw a film yesterday.`, `She said I had seen a film the day before.`], answer: 0, explain: `past ➜ past perfect, yesterday ➜ the day before, I ➜ she.` },
      { type: `tf`, q: `Фраза "The teacher said that water boils at 100 °C" правильная и без backshift.`, answer: true, explain: `Это всегда верный факт: backshift необязателен.` }
    ]
  }
});
