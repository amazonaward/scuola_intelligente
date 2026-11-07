TOPIC('ru', {
  id: "p3-ita-coniugazioni",
  title: "Три спряжения",
  intro: "Cantare, leggere, dormire: все итальянские глаголы оканчиваются на <b>-are</b>, <b>-ere</b> или <b>-ire</b>. Это <b>три спряжения</b>, три большие «семьи» глаголов 👨‍👩‍👧. Научимся их узнавать и спрягать глаголы в <b>прошедшем</b>, <b>настоящем</b> и <b>будущем</b> времени.",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Инфинитив: имя глагола",
      html: `<p>Когда ты ищешь глагол в словаре, ты находишь его в <b>инфинитиве</b> (неопределённой форме): <i>cantare (петь), leggere (читать), dormire (спать)</i>. Инфинитив — это как «имя при крещении» глагола: он не говорит, <b>кто</b> делает действие и <b>когда</b>.</p>
<p>У каждого глагола в инфинитиве две части:</p>
<ul>
<li><b>корень</b>, который несёт значение и обычно не меняется: <b>cant</b>-are, <b>legg</b>-ere, <b>dorm</b>-ire;</li>
<li><b>окончание</b>, конечная часть, которая меняется: cant-<b>are</b>, cant-<b>o</b>, cant-<b>erò</b>.</li>
</ul>
<p>Именно по окончанию инфинитива мы понимаем, к какому <b>спряжению</b> относится глагол.</p>`
    },
    {
      type: "svg",
      title: "Три семьи глаголов",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f8fafc"/>
<rect x="20" y="30" width="175" height="240" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="4"/>
<rect x="212" y="30" width="175" height="240" rx="18" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
<rect x="405" y="30" width="175" height="240" rx="18" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/>
<text x="107" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#991b1b">1-е спряж.</text>
<text x="300" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#166534">2-е спряж.</text>
<text x="492" y="70" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e40af">3-е спряж.</text>
<text x="107" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#dc2626">-ARE</text>
<text x="300" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#16a34a">-ERE</text>
<text x="492" y="118" font-size="40" font-weight="bold" text-anchor="middle" fill="#2563eb">-IRE</text>
<g font-size="20" text-anchor="middle" fill="#1f2937">
<text x="107" y="160">cant-are 🎤</text><text x="107" y="192">gioc-are ⚽</text><text x="107" y="224">salt-are 🐸</text>
<text x="300" y="160">legg-ere 📖</text><text x="300" y="192">cred-ere 🤔</text><text x="300" y="224">corr-ere 🏃</text>
<text x="492" y="160">dorm-ire 😴</text><text x="492" y="192">part-ire 🚂</text><text x="492" y="224">fin-ire 🏁</text>
</g>
<text x="107" y="258" font-size="15" text-anchor="middle" fill="#7f1d1d">самая многочисленная</text>
<text x="300" y="258" font-size="15" text-anchor="middle" fill="#14532d">много неправильных</text>
<text x="492" y="258" font-size="15" text-anchor="middle" fill="#1e3a8a">некоторые с -isc-</text>
</svg>`,
      caption: "Корень + окончание: окончание инфинитива подсказывает нам семью глагола."
    },
    {
      type: "widget",
      title: "Игра: в какой семье?",
      widget: "classify",
      options: {
        groups: ["-ARE (1-е)", "-ERE (2-е)", "-IRE (3-е)"],
        items: [
          ["🎨 disegnare", 0], ["🏊 nuotare", 0], ["🍝 mangiare", 0], ["👀 guardare", 0],
          ["✍️ scrivere", 1], ["👁️ vedere", 1], ["🏃 correre", 1], ["🙂 sorridere", 1],
          ["🎧 sentire", 2], ["🚪 aprire", 2], ["🧹 pulire", 2], ["🥣 servire", 2]
        ]
      },
      caption: "Смотри только на конец инфинитива и отнеси каждый глагол в его семью."
    },
    {
      type: "text",
      title: "Настоящее время: окончания меняются по лицам",
      html: `<p>Глагол меняет окончание в зависимости от того, <b>кто</b> делает действие (<b>лицо</b>):</p>
<table>
<tr><th>Лицо</th><th>CANT-ARE</th><th>CRED-ERE</th><th>DORM-IRE</th></tr>
<tr><td>io (я)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>tu (ты)</td><td>cant<b>i</b></td><td>cred<b>i</b></td><td>dorm<b>i</b></td></tr>
<tr><td>lui/lei (он/она)</td><td>cant<b>a</b></td><td>cred<b>e</b></td><td>dorm<b>e</b></td></tr>
<tr><td>noi (мы)</td><td>cant<b>iamo</b></td><td>cred<b>iamo</b></td><td>dorm<b>iamo</b></td></tr>
<tr><td>voi (вы)</td><td>cant<b>ate</b></td><td>cred<b>ete</b></td><td>dorm<b>ite</b></td></tr>
<tr><td>loro (они)</td><td>cant<b>ano</b></td><td>cred<b>ono</b></td><td>dorm<b>ono</b></td></tr>
</table>
<p>Заметил(а)? Окончания для <b>io</b> (-o), <b>tu</b> (-i) и <b>noi</b> (-iamo) одинаковы во всех трёх семьях! В форме <b>voi</b> видна гласная семьи: cant<b>a</b>te, cred<b>e</b>te, dorm<b>i</b>te.</p>
<p><b>Внимание:</b> многие глаголы на -ire в некоторых лицах добавляют <b>-isc-</b>: fin<b>isc</b>o, fin<b>isc</b>i, fin<b>isc</b>e, finiamo, finite, fin<b>isc</b>ono. Так же ведут себя capire (понимать), pulire (чистить), colpire (ударять), preferire (предпочитать).</p>`
    },
    {
      type: "text",
      title: "Прошедшее и будущее",
      html: `<p>Глагол меняется и для того, чтобы сказать, <b>когда</b> происходит действие. Вот три времени изъявительного наклонения в лице «io»:</p>
<table>
<tr><th>Время</th><th>CANTARE</th><th>CREDERE</th><th>DORMIRE</th></tr>
<tr><td>⬅️ <b>Passato prossimo</b> (законченное действие)</td><td>ho cant<b>ato</b></td><td>ho cred<b>uto</b></td><td>ho dorm<b>ito</b></td></tr>
<tr><td>⬅️ <b>Imperfetto</b> (привычка, описание)</td><td>cant<b>avo</b></td><td>cred<b>evo</b></td><td>dorm<b>ivo</b></td></tr>
<tr><td>⏺️ <b>Presente</b> (настоящее)</td><td>cant<b>o</b></td><td>cred<b>o</b></td><td>dorm<b>o</b></td></tr>
<tr><td>➡️ <b>Futuro semplice</b> (будущее)</td><td>cant<b>erò</b></td><td>cred<b>erò</b></td><td>dorm<b>irò</b></td></tr>
</table>
<ul>
<li><b>Passato prossimo</b> — это <b>сложное</b> время: вспомогательный глагол (avere или essere) + <b>причастие прошедшего времени</b> на -ato, -uto, -ito. Например: «sono partito», «ho cantato».</li>
<li>В <b>будущем</b> времени первое спряжение меняет <b>a</b> на <b>e</b>: cant<b>a</b>re → cant<b>e</b>rò (а не «cantarò»!).</li>
<li>В будущем времени ударение падает на последний слог: cante<b>rò</b>, cante<b>rà</b>: не забывай об этом!</li>
</ul>`
    },
    {
      type: "svg",
      title: "Стрела времени",
      svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fffbeb"/>
<line x1="40" y1="140" x2="540" y2="140" stroke="#78350f" stroke-width="6"/>
<polygon points="540,125 575,140 540,155" fill="#78350f"/>
<circle cx="120" cy="140" r="16" fill="#a855f7"/>
<circle cx="300" cy="140" r="20" fill="#16a34a"/>
<circle cx="480" cy="140" r="16" fill="#2563eb"/>
<text x="120" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#7e22ce">ПРОШЕДШЕЕ</text>
<text x="300" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#15803d">НАСТОЯЩЕЕ</text>
<text x="480" y="60" font-size="24" font-weight="bold" text-anchor="middle" fill="#1d4ed8">БУДУЩЕЕ</text>
<text x="120" y="95" font-size="18" text-anchor="middle" fill="#1f2937">вчера</text>
<text x="300" y="95" font-size="18" text-anchor="middle" fill="#1f2937">сейчас</text>
<text x="480" y="95" font-size="18" text-anchor="middle" fill="#1f2937">завтра</text>
<text x="120" y="190" font-size="20" text-anchor="middle" fill="#1f2937">ho giocato</text>
<text x="120" y="218" font-size="20" text-anchor="middle" fill="#1f2937">giocavo</text>
<text x="300" y="190" font-size="20" text-anchor="middle" fill="#1f2937">gioco</text>
<text x="480" y="190" font-size="20" text-anchor="middle" fill="#1f2937">giocherò</text>
<text x="480" y="225" font-size="15" text-anchor="middle" fill="#92400e">(c + h для твёрдого звука)</text>
</svg>`,
      caption: "Один и тот же глагол, giocare (играть), меняет форму в зависимости от того, когда происходит действие."
    },
    {
      type: "quiz",
      title: "Мини-тест: семьи и лица",
      questions: [
        { type: "mc", q: "«Scrivere» относится к…", options: ["1-му спряжению", "2-му спряжению", "3-му спряжению"], answer: 1, explain: "Оканчивается на -ere: второе спряжение." },
        { type: "text", q: "Проспрягай «parlare» в настоящем времени с «noi».", answer: ["parliamo", "noi parliamo"], explain: "Noi parl-iamo." },
        { type: "mc", q: "Какая форма будущего времени «cantare» (io) правильная?", options: ["cantarò", "canterò", "cantirò"], answer: 1, explain: "В 1-м спряжении -a- превращается в -e-: canterò." }
      ]
    },
    {
      type: "example",
      title: "Пример из жизни: дневник Маттео",
      html: `<p><i>«Ieri <b>ho giocato</b> a calcio e <b>ho vinto</b>. Quando ero piccolo <b>dormivo</b> sempre dopo pranzo. Oggi <b>leggo</b> un fumetto. Domani <b>partirò</b> per la montagna e <b>camminerò</b> tanto.»</i></p>
<p>(Вчера я играл в футбол и выиграл. Когда я был маленьким, я всегда спал после обеда. Сегодня я читаю комикс. Завтра я уеду в горы и много буду ходить пешком.)</p>
<table>
<tr><th>Глагол</th><th>Инфинитив</th><th>Спряжение</th><th>Время</th></tr>
<tr><td>ho giocato</td><td>giocare</td><td>1-е</td><td>passato prossimo</td></tr>
<tr><td>ho vinto</td><td>vincere</td><td>2-е</td><td>passato prossimo</td></tr>
<tr><td>dormivo</td><td>dormire</td><td>3-е</td><td>imperfetto</td></tr>
<tr><td>leggo</td><td>leggere</td><td>2-е</td><td>presente</td></tr>
<tr><td>partirò</td><td>partire</td><td>3-е</td><td>futuro</td></tr>
<tr><td>camminerò</td><td>camminare</td><td>1-е</td><td>futuro</td></tr>
</table>`
    },
    {
      type: "example",
      title: "Пример из жизни: находим инфинитив",
      html: `<p>Чтобы узнать спряжение изменённого глагола, нужно сначала <b>вернуться к инфинитиву</b>. Спроси себя: «Что значит делать это действие?»</p>
<ul>
<li>«Noi <b>ridiamo</b>» → что мы делаем? <b>ridere</b> (смеяться) → 2-е спряжение.</li>
<li>«Voi <b>aprite</b>» → <b>aprire</b> (открывать) → 3-е спряжение.</li>
<li>«Loro <b>ballavano</b>» → <b>ballare</b> (танцевать) → 1-е спряжение.</li>
<li>«Tu <b>capirai</b>» → <b>capire</b> (понимать) → 3-е спряжение.</li>
</ul>
<p>Хитрость: попробуй поставить перед глаголом «<b>Devo</b> …» (мне нужно): «Devo ridere», «Devo aprire», «Devo ballare». После «devo» глагол всегда стоит в инфинитиве!</p>`
    },
    {
      type: "curiosity",
      title: "А ты знал(а), что…? Новые глаголы все идут на -are",
      html: `<p>Когда появляется новый глагол, в итальянском он почти всегда оканчивается на <b>-are</b>: <i>cliccare, chattare, postare, zoomare, scannerizzare, googlare</i>. Первое спряжение — самая большая семья (в неё входит большинство итальянских глаголов), и она же самая правильная: поэтому она принимает новичков! 📱</p>`
    },
    {
      type: "curiosity",
      title: "А ты знал(а), что…? В латыни семей было четыре",
      html: `<p>В <b>латинском</b> языке, из которого родился итальянский, было <b>четыре</b> спряжения: <i>amāre, timēre, legĕre, audīre</i>. Два из них (спряжение <i>timēre</i> с ударением на «e» и спряжение <i>legĕre</i> с ударением ближе к началу) слились в наше 2-е спряжение. Поэтому мы говорим te<b>mé</b>re, но <b>lèg</b>gere: два разных ударения в одной семье!</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li>1-е спряжение: <b>-are</b> · 2-е: <b>-ere</b> · 3-е: <b>-ire</b>.</li>
<li>Глагол = <b>корень</b> (значение) + <b>окончание</b> (лицо и время).</li>
<li>Лица: io, tu, lui/lei (единственное число) · noi, voi, loro (множественное число).</li>
<li>Passato prossimo = вспомогательный глагол + причастие (-ato, -uto, -ito).</li>
<li>Будущее: cant-<b>erò</b> (-a- превращается в -e-), cred-<b>erò</b>, dorm-<b>irò</b>.</li>
<li>У essere и avere собственное спряжение: они неправильные.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять спряжения",
      intro: "Таблицы не запоминаются? Попробуй с помощью машины, другой страны, карточек или игры на соответствие.",
      tabs: [
        {
          label: "⚙️ Машина глаголов",
          html: `<p>Представь машину с двумя колёсиками. Первое колёсико выбирает <b>кто</b> (io, tu, lui…), второе выбирает <b>когда</b> (вчера, сегодня, завтра). Положи внутрь корень, и машина приклеит правильное окончание!</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#f1f5f9"/>
<rect x="30" y="100" width="120" height="60" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="3"/>
<text x="90" y="138" font-size="24" font-weight="bold" text-anchor="middle" fill="#713f12">CANT-</text>
<path d="M155 130 L200 130" stroke="#334155" stroke-width="5"/>
<polygon points="200,120 218,130 200,140" fill="#334155"/>
<rect x="220" y="50" width="200" height="160" rx="20" fill="#94a3b8" stroke="#334155" stroke-width="4"/>
<circle cx="280" cy="110" r="38" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
<circle cx="360" cy="150" r="38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="4"/>
<text x="280" y="117" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff">КТО?</text>
<text x="360" y="157" font-size="18" font-weight="bold" text-anchor="middle" fill="#ffffff">КОГДА?</text>
<text x="280" y="175" font-size="16" text-anchor="middle" fill="#1f2937">noi</text>
<text x="360" y="85" font-size="16" text-anchor="middle" fill="#1f2937">завтра</text>
<path d="M425 130 L470 130" stroke="#334155" stroke-width="5"/>
<polygon points="470,120 488,130 470,140" fill="#334155"/>
<rect x="490" y="100" width="100" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/>
<text x="540" y="128" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">cant-</text>
<text x="540" y="150" font-size="17" font-weight="bold" text-anchor="middle" fill="#14532d">eremo</text>
</svg>`
        },
        {
          label: "🇬🇧 В английском проще?",
          html: `<p>В <b>английском</b> глаголы меняются очень мало: поэтому англичане <b>всегда</b> должны называть подлежащее.</p>
<table>
<tr><th>Итальянский</th><th>Английский</th></tr>
<tr><td>canto, canti, canta</td><td>I sing, you sing, he sing<b>s</b></td></tr>
<tr><td>ho cantato</td><td>I sang (прошедшее)</td></tr>
<tr><td>canterò</td><td>I <b>will</b> sing (будущее с «will»)</td></tr>
<tr><td>gioco → ho giocato</td><td>I play → I play<b>ed</b></td></tr>
</table>
<p>В итальянском же окончание уже говорит, кто делает действие: «<b>Cantiamo</b>!» обязательно значит «мы поём». Подлежащее можно и не говорить! Как и в русском: «Поём!» — понятно, что «мы».</p>`
        },
        {
          label: "🎵 Хитрость с гласной",
          html: `<p>У каждой семьи есть своя <b>главная гласная</b>, та, что стоит перед -re:</p>
<ul>
<li>cant-<b>A</b>-re → cant<b>a</b>te, cant<b>a</b>vo, cant<b>a</b>to</li>
<li>cred-<b>E</b>-re → cred<b>e</b>te, cred<b>e</b>vo (но credu-to)</li>
<li>dorm-<b>I</b>-re → dorm<b>i</b>te, dorm<b>i</b>vo, dorm<b>i</b>to</li>
</ul>
<p>В лице <b>voi</b> и в <b>imperfetto</b> главная гласная видна всегда: если ты её помнишь, ты ошибаешься гораздо реже!</p>`
        },
        {
          label: "🃏 Карточки глаголов",
          html: `<p>На лицевой стороне — изменённый глагол. Попробуй назвать инфинитив, спряжение и время, а потом переверни карточку.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "nuoteremo", back: "nuotare · 1-е · будущее · noi" },
              { front: "hai letto", back: "leggere · 2-е · passato prossimo · tu" },
              { front: "sentivano", back: "sentire · 3-е · имперфект · loro" },
              { front: "corre", back: "correre · 2-е · настоящее · lui/lei" },
              { front: "finisco", back: "finire · 3-е (с -isc-) · настоящее · io" },
              { front: "giocavate", back: "giocare · 1-е · имперфект · voi" }
            ]
          }
        },
        {
          label: "🔗 Соедини лицо и окончание",
          html: `<p>Глагол «dormire» в настоящем времени: соедини каждое лицо с его формой.</p>`,
          widget: "match",
          options: { pairs: [["io", "dormo"], ["tu", "dormi"], ["lui", "dorme"], ["noi", "dormiamo"], ["voi", "dormite"], ["loro", "dormono"]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта спряжений: нажми на узел и узнай почему",
      nodes: [
        { id: "verbo", label: "Глагол", x: 50, y: 6, color: "#2563eb", html: "Слово, которое обозначает действие или состояние.", why: "Без глагола нет предложения: он — «мотор», который говорит, что происходит. Ещё греческие грамматики называли его <i>rhêma</i> — «то, что говорится» о подлежащем." },
        { id: "infinito", label: "Инфинитив", x: 50, y: 26, color: "#0ea5e9", html: "«Базовая» форма глагола: cantare, leggere, dormire.", why: "Он называется «инфинитив» (infinito), потому что «неопределённый»: не говорит, кто делает действие и когда. Поэтому в словарях глаголы приводятся в инфинитиве." },
        { id: "are", label: "1-е: -are", x: 18, y: 46, color: "#dc2626", html: "Самая большая и самая правильная семья: amare, giocare.", why: "Происходит от 1-го латинского спряжения (<i>amāre</i>), которое уже было очень правильным: поэтому новые глаголы (chattare, cliccare) попадают сюда." },
        { id: "ere", label: "2-е: -ere", x: 50, y: 46, color: "#16a34a", html: "Credere, leggere, vedere: много неправильных глаголов.", why: "Оно возникло из слияния двух латинских спряжений (<i>timēre</i> и <i>legĕre</i>). Поэтому в нём есть глаголы с разными ударениями и много неправильностей (letto, scritto, visto)." },
        { id: "ire", label: "3-е: -ire", x: 82, y: 46, color: "#2563eb", html: "Dormire, partire, finire.", why: "Происходит от 4-го латинского спряжения (<i>audīre</i>). Добавка <b>-isc-</b> (finisco) происходит от латинского суффикса, означавшего действие, которое начинается или развивается (<i>-esco</i>)." },
        { id: "desinenza", label: "Корень + окончание", x: 22, y: 70, color: "#f59e0b", html: "Cant- (значение) + -iamo (кто и когда).", why: "Итальянский, как и латинский, — «флективный» язык: он помещает информацию внутрь слова, меняя его конец. Так одно слово («cantiamo») говорит о действии, лице, числе и времени." },
        { id: "persone", label: "Шесть лиц", x: 50, y: 92, color: "#ec4899", html: "Io, tu, lui/lei, noi, voi, loro.", why: "Есть три лица (кто говорит, кто слушает, о ком говорят), каждое в единственном и множественном числе: 3 × 2 = 6 форм." },
        { id: "tempi", label: "Прошедшее, настоящее, будущее", x: 78, y: 70, color: "#a855f7", html: "Ho cantato / cantavo · canto · canterò.", why: "Итальянское будущее время возникло из разговорной латыни: «cantare habeo» (мне надо петь) → «canterò». И правда, окончания будущего (-ò, -ai, -à, -emo, -ete, -anno) похожи на глагол avere!" },
        { id: "irregolari", label: "Неправильные глаголы", x: 85, y: 90, color: "#64748b", html: "Essere, avere, andare, fare: не подчиняются правилам.", why: "Это самые употребительные глаголы: из-за постоянного повторения на протяжении веков они «истёрлись» и изменились, как монета, переходившая из рук в руки." }
      ],
      edges: [
        ["verbo", "infinito", "ищем в"],
        ["infinito", "are", "оканчивается на"],
        ["infinito", "ere", "оканчивается на"],
        ["infinito", "ire", "оканчивается на"],
        ["are", "desinenza", "спрягается, меняя"],
        ["desinenza", "persone", "показывает"],
        ["ire", "tempi", "а также время"],
        ["tempi", "irregolari", "исключения:"],
        ["desinenza", "tempi", "показывает"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: времена",
      questions: [
        { type: "mc", q: "«Partivamo» — это…", options: ["настоящее время", "имперфект", "будущее время"], answer: 1, explain: "Окончание -ivamo указывает на имперфект (3-е спряжение)." },
        { type: "mc", q: "Причастие прошедшего времени от «dormire» — это…", options: ["dormato", "dormuto", "dormito"], answer: 2, explain: "3-е спряжение: -ito → dormito." },
        { type: "tf", q: "«Ho mangiato» — сложное время.", answer: true, explain: "Оно образовано из двух слов: вспомогательного глагола «ho» и причастия «mangiato»." }
      ]
    }
  ],
  glossary: [
    { t: "Спряжение (Coniugazione)", d: "Семья глаголов с одинаковым окончанием в инфинитиве (-are, -ere, -ire); также совокупность всех форм глагола." },
    { t: "Инфинитив (Infinito)", d: "Базовая форма глагола, словарная (cantare)." },
    { t: "Корень (Radice)", d: "Часть глагола, которая несёт значение (cant-)." },
    { t: "Окончание (Desinenza)", d: "Конечная часть глагола, которая меняется в зависимости от лица и времени (-iamo, -erò)." },
    { t: "Лицо (Persona)", d: "Тот, кто совершает действие: io, tu, lui/lei, noi, voi, loro." },
    { t: "Простое время (Tempo semplice)", d: "Время, состоящее из одного слова (canto, cantavo, canterò)." },
    { t: "Сложное время (Tempo composto)", d: "Время, состоящее из вспомогательного глагола + причастия (ho cantato)." },
    { t: "Причастие прошедшего времени (Participio passato)", d: "Форма глагола на -ato, -uto, -ito." },
    { t: "Имперфект (Imperfetto)", d: "Прошедшее время, которое описывает привычки или ситуации (giocavo)." },
    { t: "Простое будущее (Futuro semplice)", d: "Время, которое обозначает действие, которое произойдёт (giocherò)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "К какому спряжению относится «capire»?", options: ["1-му", "2-му", "3-му"], answer: 2, explain: "Оканчивается на -ire: 3-е спряжение." },
      { type: "mc", q: "Какой инфинитив у «vedevamo»?", options: ["vedare", "vedere", "vedire"], answer: 1, explain: "Vedere, 2-е спряжение." },
      { type: "text", q: "Проспрягай «ballare» в будущем времени с «io».", answer: ["ballero", "io ballero", "ballerò", "io ballerò"], explain: "Io ballerò: -a- превращается в -e-." },
      { type: "tf", q: "В настоящем времени окончание для «noi» — -iamo во всех трёх спряжениях.", answer: true, explain: "Cantiamo, crediamo, dormiamo." },
      { type: "mc", q: "В «Loro aprono la porta» глагол стоит в…", options: ["passato prossimo", "настоящем времени", "будущем времени"], answer: 1, explain: "Aprono: настоящее время от aprire, 3-е лицо множественного числа." },
      { type: "mc", q: "Какая форма неправильная?", options: ["voi correte", "voi dormite", "voi cantete"], answer: 2, explain: "Cantare относится к 1-му спряжению: voi cantate." },
      { type: "text", q: "Напиши причастие прошедшего времени от «credere».", answer: ["creduto"], explain: "2-е спряжение: -uto → creduto." },
      { type: "mc", q: "Какой глагол принимает -isc- в настоящем времени?", options: ["dormire", "pulire", "partire"], answer: 1, explain: "Io pulisco, tu pulisci, lui pulisce." },
      { type: "order", q: "Расставь по порядку от прошедшего к будущему.", items: ["ho saltato", "salto", "salterò"], explain: "Passato prossimo, настоящее, будущее." },
      { type: "mc", q: "В «Tu leggevi un fumetto» глагол стоит…", options: ["в имперфекте, 2-е спряжение", "в настоящем времени, 2-е спряжение", "в имперфекте, 3-е спряжение"], answer: 0, explain: "Leggere (2-е), окончание имперфекта -evi." },
      { type: "tf", q: "Новые глаголы вроде «chattare» обычно попадают в 3-е спряжение.", answer: false, explain: "Они попадают в 1-е спряжение, на -are." },
      { type: "text", q: "Проспрягай «sentire» в настоящем времени с «voi».", answer: ["sentite", "voi sentite"], explain: "Voi sent-ite." }
    ]
  }
});
