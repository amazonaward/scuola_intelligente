TOPIC('ru', {
  id: "p5-ita-verbi-transitivi",
  title: "Переходные и непереходные глаголы",
  intro: "Некоторые действия «переходят» на что-то или кого-то (<i>mangio una mela</i> — я ем яблоко), другие остаются на том, кто их совершает (<i>dormo</i> — я сплю). Давай узнаем, что такое <b>переходные</b> (<i>transitivi</i>) и <b>непереходные</b> (<i>intransitivi</i>) глаголы и три формы глагола: <b>действительная</b> (<i>attiva</i>), <b>страдательная</b> (<i>passiva</i>) и <b>возвратная</b> (<i>riflessiva</i>).",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Переходный = действие «переходит»",
      html: `<p><b>Transitivo</b> происходит от латинского <i>transire</i> — «переходить, проходить дальше». Глагол бывает:</p>
<ul>
<li><b>переходным</b>, когда действие <b>переходит</b> прямо от подлежащего на <b>прямое дополнение</b> (кого? что?): «Marta <u>legge</u> <b>un libro</b>», «Il cane <u>morde</u> <b>l'osso</b>».</li>
<li><b>непереходным</b>, когда действие <b>остаётся</b> на подлежащем и <b>не может иметь</b> прямого дополнения: «Il bambino <u>dorme</u>», «Vado a scuola», «Il fiore <u>sboccia</u>».</li>
</ul>
<p><b>Проверка</b>: после глагола задай вопрос «кого? что?». Если вопрос имеет смысл (<i>leggo… что?</i>), глагол переходный; если не имеет (<i>arrivo… что?</i> 🤔), глагол непереходный.</p>`
    },
    {
      type: "svg",
      title: "Стрелка действия",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#f8fafc"/>
<text x="20" y="34" font-size="20" font-weight="bold" fill="#15803d">ПЕРЕХОДНЫЙ</text>
<circle cx="80" cy="95" r="38" fill="#3b82f6"/><text x="80" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<line x1="125" y1="95" x2="420" y2="95" stroke="#16a34a" stroke-width="8"/>
<polygon points="420,78 450,95 420,112" fill="#16a34a"/>
<text x="280" y="80" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">lancia</text>
<circle cx="500" cy="95" r="38" fill="#f97316"/><text x="500" y="101" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">la palla</text>
<text x="500" y="152" font-size="14" text-anchor="middle" fill="#1f2937">прямое дополнение</text>
<text x="20" y="194" font-size="20" font-weight="bold" fill="#b91c1c">НЕПЕРЕХОДНЫЙ</text>
<circle cx="80" cy="250" r="38" fill="#3b82f6"/><text x="80" y="256" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">Luca</text>
<path d="M118,232 C200,170 220,300 125,268" fill="none" stroke="#dc2626" stroke-width="7"/>
<polygon points="132,256 112,274 138,282" fill="#dc2626"/>
<text x="230" y="240" font-size="20" fill="#b91c1c" font-weight="bold">dorme</text>
<text x="230" y="268" font-size="15" fill="#1f2937">действие остаётся на нём: дополнения нет!</text>
</svg>`,
      caption: "У переходных глаголов стрелка действия попадает на объект; у непереходных возвращается к подлежащему."
    },
    {
      type: "text",
      title: "Переходное и непереходное употребление",
      html: `<p>Некоторые переходные глаголы можно употреблять <b>без</b> прямого дополнения: говорят, что они употреблены <b>абсолютно</b> (<i>uso assoluto</i>). «Il neonato <u>mangia</u>» (ест что? я не говорю, но мог бы: глагол всё равно переходный).</p>
<p>Другие глаголы меняют значение: <i>Il treno <u>corre</u></i> (поезд мчится; непереходный) / <i>Il ciclista <u>corre</u> il Giro d'Italia</i> (велосипедист участвует в «Джиро д'Италия»; переходный).</p>
<p>Для <b>вспомогательных глаголов</b> есть полезное правило:</p>
<ul>
<li>переходные в сложных временах всегда используют <b>avere</b>: <i>ho mangiato, ho letto</i>;</li>
<li>непереходные используют <b>essere</b> или <b>avere</b>: <i>sono partito, sono caduto</i> / <i>ho dormito, ho camminato</i>.</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Мини-тест: переходный или непереходный?",
      questions: [
        { type: "mc", q: "«Il sole tramonta.» Глагол…", options: ["переходный", "непереходный"], answer: 1, explain: "Заходит что? Не имеет смысла: непереходный." },
        { type: "mc", q: "«La mamma prepara la cena.» Глагол…", options: ["переходный", "непереходный"], answer: 0, explain: "Готовит что? La cena (ужин) — прямое дополнение: переходный." },
        { type: "tf", q: "В сложных временах переходные глаголы используют вспомогательный глагол avere.", answer: true, explain: "Ho preparato, ho letto, ho visto (в действительном залоге)." }
      ]
    },
    {
      type: "widget",
      title: "Игра: раздели глаголы",
      widget: "classify",
      options: {
        groups: ["Переходный", "Непереходный"],
        items: [["🍎 mangiare (una mela)", 0], ["✉️ scrivere (una lettera)", 0], ["👀 guardare (un film)", 0], ["🎁 regalare (un dono)", 0], ["🔨 costruire (una casa)", 0], ["😴 dormire", 1], ["🚶 andare", 1], ["🌅 nascere", 1], ["🏃 arrivare", 1], ["🌸 sbocciare", 1]]
      },
      caption: "Задай вопрос «что?» после глагола: если он имеет смысл, глагол переходный."
    },
    {
      type: "text",
      title: "Действительная и страдательная форма",
      html: `<p>У <b>переходных</b> глаголов может быть две формы:</p>
<ul>
<li><b>Действительная</b> (attiva): подлежащее <b>совершает</b> действие. «<b>Il gatto</b> mangia <u>il topo</u>» (Кот ест мышь).</li>
<li><b>Страдательная</b> (passiva): подлежащее <b>испытывает</b> действие. «<b>Il topo</b> è mangiato <u>dal gatto</u>» (Мышь съедена котом).</li>
</ul>
<p><b>Как преобразовать</b> предложение из действительного залога в страдательный:</p>
<ol>
<li><b>прямое дополнение</b> становится <b>подлежащим</b> (il topo);</li>
<li>глагол образуется с помощью <b>essere</b> (или <b>venire</b>) + <b>причастие прошедшего времени</b>, в <b>том же наклонении и времени</b>: <i>mangia</i> → <i>è mangiato</i>; <i>mangiò</i> → <i>fu mangiato</i>; <i>ha mangiato</i> → <i>è stato mangiato</i>;</li>
<li>бывшее подлежащее становится <b>дополнением деятеля</b> (complemento d'agente), вводимым предлогом <b>da</b> (dal gatto). Если это предмет, оно называется <b>дополнением действующей причины</b> (causa efficiente): «La casa fu distrutta <u>dal terremoto</u>».</li>
</ol>
<p>⚠️ Страдательным может стать только <b>переходный глагол с прямым дополнением</b>. У «Io dormo» страдательной формы нет!</p>`
    },
    {
      type: "example",
      title: "Пример: от спортивной новости к газете",
      html: `<p>Комментатор говорит (действительный залог): «<b>Il capitano</b> ha segnato <b>il gol della vittoria</b>» (Капитан забил победный гол).</p>
<p>Газета пишет в заголовке (страдательный залог): «<b>Il gol della vittoria</b> è stato segnato <b>dal capitano</b>» (Победный гол был забит капитаном).</p>
<p>Новость та же, но меняется то, <b>что мы выдвигаем на первый план</b>: в страдательном залоге важнее гол. Вот почему в газетах и научных текстах страдательный залог встречается часто: «L'America fu raggiunta da Colombo nel 1492», «L'acqua viene riscaldata fino a 100 °C».</p>`
    },
    {
      type: "text",
      title: "Возвратная форма",
      html: `<p>Глагол стоит в <b>возвратной форме</b> (<i>forma riflessiva</i>), когда действие, совершаемое подлежащим, <b>возвращается на само подлежащее</b>, как в зеркале. Используются местоимения <b>mi, ti, si, ci, vi, si</b>.</p>
<ul>
<li><b>Собственно-возвратная</b>: «Io <u>mi lavo</u>» = я мою себя (местоимение — прямое дополнение).</li>
<li><b>Кажущаяся возвратная</b> (apparente): «Io <u>mi lavo</u> le mani» = я мою руки себе (прямое дополнение — "le mani"; <i>mi</i> = себе).</li>
<li><b>Взаимно-возвратная</b> (reciproca): «Marco e Anna <u>si salutano</u>» = один приветствует другого.</li>
</ul>
<p>Осторожно с <b>непереходными местоименными глаголами</b>: <i>pentirsi, vergognarsi, accorgersi, arrabbiarsi</i> (раскаиваться, стыдиться, замечать, сердиться). Местоимение у них есть, но они <b>не возвратные</b>: нельзя сказать «раскаиваю себя самого»!</p>`
    },
    {
      type: "svg",
      title: "Три формы в сравнении",
      svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="300" fill="#fefce8"/>
<rect x="15" y="20" width="195" height="260" rx="14" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
<text x="112" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#15803d">ДЕЙСТВИТ.</text>
<text x="112" y="100" font-size="34" text-anchor="middle">🐱➡️🐭</text>
<text x="112" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="112" y="172" font-size="16" text-anchor="middle" font-weight="bold">insegue</text>
<text x="112" y="194" font-size="16" text-anchor="middle">il topo.</text>
<text x="112" y="240" font-size="14" text-anchor="middle" fill="#15803d">подлежащее ДЕЛАЕТ</text>
<rect x="222" y="20" width="195" height="260" rx="14" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
<text x="320" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">СТРАДАТ.</text>
<text x="320" y="100" font-size="34" text-anchor="middle">🐭⬅️🐱</text>
<text x="320" y="150" font-size="16" text-anchor="middle">Il topo</text>
<text x="320" y="172" font-size="16" text-anchor="middle" font-weight="bold">è inseguito</text>
<text x="320" y="194" font-size="16" text-anchor="middle">dal gatto.</text>
<text x="320" y="240" font-size="14" text-anchor="middle" fill="#1d4ed8">подлежащее ИСПЫТЫВАЕТ</text>
<rect x="430" y="20" width="195" height="260" rx="14" fill="#fce7f3" stroke="#db2777" stroke-width="3"/>
<text x="527" y="52" font-size="20" text-anchor="middle" font-weight="bold" fill="#be185d">ВОЗВРАТНАЯ</text>
<text x="527" y="100" font-size="34" text-anchor="middle">🐱🪞</text>
<text x="527" y="150" font-size="16" text-anchor="middle">Il gatto</text>
<text x="527" y="172" font-size="16" text-anchor="middle" font-weight="bold">si lecca.</text>
<text x="527" y="240" font-size="14" text-anchor="middle" fill="#be185d">подлежащее ДЕЛАЕТ</text>
<text x="527" y="260" font-size="14" text-anchor="middle" fill="#be185d">и ИСПЫТЫВАЕТ</text>
</svg>`,
      caption: "Действительная: подлежащее делает. Страдательная: подлежащее испытывает. Возвратная: и делает, и испытывает одновременно."
    },
    {
      type: "example",
      title: "Пример: преобразуем вместе",
      html: `<table>
<tr><th>Время</th><th>Действительный залог</th><th>Страдательный залог</th></tr>
<tr><td>Presente</td><td>Il vento <b>muove</b> le foglie.</td><td>Le foglie <b>sono mosse</b> dal vento.</td></tr>
<tr><td>Imperfetto</td><td>Il nonno <b>raccontava</b> storie.</td><td>Le storie <b>erano raccontate</b> dal nonno.</td></tr>
<tr><td>Passato prossimo</td><td>Gli alunni <b>hanno piantato</b> un albero.</td><td>Un albero <b>è stato piantato</b> dagli alunni.</td></tr>
<tr><td>Futuro</td><td>La giuria <b>premierà</b> i vincitori.</td><td>I vincitori <b>saranno premiati</b> dalla giuria.</td></tr>
</table>
<p>Обрати внимание: причастие <b>согласуется</b> с новым подлежащим: <i>le foglie sono moss<b>e</b></i>, <i>i vincitori saranno premiat<b>i</b></i>.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? «Быстрый» страдательный залог с si",
      html: `<p>В итальянском есть «переодетый» страдательный залог: <b>si passivante</b>. На табличках в магазинах ты читаешь «<b>Si vendono</b> biciclette» = «Biciclette <b>sono vendute</b>» (Продаются велосипеды). Глагол стоит во множественном числе, потому что согласуется с <i>biciclette</i>, которое и есть подлежащее! Поэтому «Si vende biciclette» — ошибка.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? В латыни страдательный залог выражался одним словом",
      html: `<p>В латыни страдательный залог образовывался простой заменой <b>окончания</b>: <i>amo</i> = я люблю, <i>amor</i> = меня любят; <i>laudat</i> = хвалит, <i>laudatur</i> = его хвалят. Итальянский утратил эти формы и использует вспомогательный глагол <b>essere</b>. Английский тоже использует вспомогательный глагол: <i>the cake <b>is eaten</b></i> (торт съеден). В русском же есть и суффикс <i>-ся</i>, и причастия, как в «дом строится» или «дом построен».</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li><b>Переходный</b>: может иметь прямое дополнение. <b>Непереходный</b>: не может его иметь.</li>
<li><b>Страдательный залог</b> = essere/venire + причастие прошедшего времени; бывшее подлежащее становится <b>дополнением деятеля</b> (da…).</li>
<li>Страдательную форму имеют только <b>переходные</b> глаголы.</li>
<li><b>Возвратная</b>: действие возвращается на подлежащее (mi, ti, si, ci, vi, si): собственно-возвратная, кажущаяся, взаимная.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять формы глагола",
      intro: "Страдательный и возвратный залоги можно понять с помощью фотографии, английского языка, зеркала или игры на сопоставление.",
      tabs: [
        {
          label: "📸 Меняем ракурс",
          html: `<p>Представь, что ты фотографируешь одну и ту же сцену с двух ракурсов:</p>
<ul>
<li>📷 <b>Действительный</b>: крупный план того, кто <b>совершает</b> действие → «<b>La volpe</b> ruba l'uva» (Лиса крадёт виноград).</li>
<li>📷 <b>Страдательный</b>: крупный план того, кто <b>получает</b> действие → «<b>L'uva</b> è rubata dalla volpe» (Виноград украден лисой).</li>
</ul>
<p>Сцена одна и та же, меняется «главный герой» снимка, то есть <b>подлежащее</b>. Поэтому в страдательном залоге главный герой — тот, кто испытывает действие.</p>`
        },
        {
          label: "🇬🇧 Passive voice",
          html: `<p>В английском страдательный залог образуется как в итальянском: <b>to be + причастие прошедшего времени</b> и <b>by</b> для деятеля.</p>
<table>
<tr><th>Active</th><th>Passive</th></tr>
<tr><td>Shakespeare <b>wrote</b> Hamlet.</td><td>Hamlet <b>was written by</b> Shakespeare.</td></tr>
<tr><td>The dog <b>eats</b> the bone.</td><td>The bone <b>is eaten by</b> the dog.</td></tr>
</table>
<p><i>by</i> = <i>da</i> (дополнение деятеля). Англичане много используют страдательный залог в новостях и науке, как и мы.</p>`,
          widget: "match",
          options: { pairs: [["is eaten", "съеден (è mangiato)"], ["was written", "был написан (fu scritto)"], ["are sold", "продаются (sono venduti)"], ["by the dog", "собакой (dal cane)"], ["has been built", "был построен (è stato costruito)"]] }
        },
        {
          label: "🪞 Зеркало",
          html: `<p>Чтобы понять, <b>возвратный</b> ли глагол, сделай <b>проверку зеркалом</b>: замени <i>mi/ti/si</i> на <b>«себя самого / тебя самого / себя самого»</b>.</p>
<ul>
<li>«Mi pettino» → причёсываю <b>себя самого</b> ✅ собственно-возвратный.</li>
<li>«Mi pettino i capelli» → причёсываю волосы <b>себе</b> ✅ кажущийся возвратный.</li>
<li>«Ci abbracciamo» → один обнимает другого ✅ взаимный.</li>
<li>«Mi pento» → раскаиваю себя самого? ❌ не имеет смысла: это <b>непереходный местоименный</b> глагол.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fdf4ff"/>
<rect x="290" y="20" width="20" height="180" fill="#a5b4fc" stroke="#4338ca" stroke-width="3"/>
<text x="180" y="110" font-size="64" text-anchor="middle">🧒</text>
<text x="420" y="110" font-size="64" text-anchor="middle" transform="translate(840,0) scale(-1,1)">🧒</text>
<path d="M210,150 Q300,200 390,150" fill="none" stroke="#db2777" stroke-width="5"/>
<path d="M390,150 Q300,100 210,150" fill="none" stroke="#db2777" stroke-width="5" stroke-dasharray="8 6"/>
<text x="300" y="214" font-size="18" text-anchor="middle" fill="#9d174d" font-weight="bold">mi lavo = мою себя самого</text>
</svg>`
        },
        {
          label: "🧮 Формула",
          html: `<p>Если тебе нравятся «математические» правила, вот <b>формула страдательного залога</b>:</p>
<p style="font-size:1.2em"><b>П + Г(действ.) + ПД</b> ➜ <b>ПД + essere(то же время) + причастие + da + П</b></p>
<p>(П — подлежащее, Г — глагол, ПД — прямое дополнение.)</p>
<p>Пример: <i>Anna</i> (П) + <i>dipinge</i> (Г) + <i>un quadro</i> (ПД) ➜ <i>Un quadro</i> + <i>è</i> + <i>dipinto</i> + <i>da Anna</i>.</p>
<p>Последняя проверка: время глагола <i>essere</i> должно быть тем же, что у действительного глагола (dipinge = presente → è = presente).</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта глаголов и их форм",
      nodes: [
        { id: "verbo", label: "Глагол", x: 50, y: 6, color: "#dc2626", html: "Слово, обозначающее действие или состояние.", why: "Глагол — центр предложения: от него зависит, какие ещё элементы нужны (подлежащее, дополнение…)." },
        { id: "trans", label: "Переходный", x: 25, y: 28, color: "#16a34a", html: "Может управлять прямым дополнением: читать что-то.", why: "От латинского <i>transire</i> (переходить): действие «переходит» от подлежащего на объект. В валентностной грамматике это глагол, у которого как минимум два аргумента: кто и что." },
        { id: "intr", label: "Непереходный", x: 75, y: 28, color: "#f97316", html: "Не может иметь прямого дополнения: dormire, andare, nascere.", why: "<i>In-</i> = не: действие не идёт дальше подлежащего. Многие обозначают движение или изменение состояния и используют вспомогательный глагол essere (sono andato, sono nato)." },
        { id: "attiva", label: "Действительная форма", x: 10, y: 55, color: "#22c55e", html: "Подлежащее совершает действие.", why: "Это «обычная» и самая употребительная форма в итальянском: она следует естественному порядку кто → делает → что." },
        { id: "passiva", label: "Страдательная форма", x: 38, y: 55, color: "#2563eb", html: "Подлежащее испытывает действие: essere/venire + причастие.", why: "Нужна, чтобы выдвинуть на первый план того, кто получает действие, или чтобы не говорить, кто его совершил («La finestra è stata rotta»). Латынь образовывала её окончаниями (<i>amor</i>); итальянский — вспомогательным глаголом essere." },
        { id: "agente", label: "Дополнение деятеля", x: 38, y: 80, color: "#0ea5e9", html: "Тот, кто совершает действие в страдательном предложении: «dal gatto». Если это предмет — действующая причина.", why: "Это бывшее подлежащее действительного предложения, «перемещённое» и введённое предлогом <i>da</i>." },
        { id: "rifl", label: "Возвратная форма", x: 70, y: 55, color: "#db2777", html: "Действие возвращается на подлежащее: mi lavo.", why: "Название происходит от слова «отражать», как в зеркале. Образуется безударными местоимениями mi, ti, si, ci, vi, si, которые происходят от латинских <i>me, te, se</i>." },
        { id: "tipirifl", label: "Собственная, кажущаяся, взаимная", x: 70, y: 80, color: "#a855f7", html: "Собственная (mi lavo), кажущаяся (mi lavo le mani), взаимная (ci salutiamo).", why: "Зависит от функции местоимения: прямое дополнение (собственная), дополнение адресата (кажущаяся), действие, которым обмениваются двое или больше подлежащих (взаимная)." },
        { id: "pronom", label: "Непереходные местоименные", x: 92, y: 40, color: "#64748b", html: "Глаголы, всегда с местоимением, но не возвратные: pentirsi, vergognarsi.", why: "Местоимение входит в состав глагола и не означает «себя самого»: поэтому они не проходят проверку зеркалом." }
      ],
      edges: [
        ["verbo", "trans", "может быть"],
        ["verbo", "intr", "может быть"],
        ["trans", "attiva", "форма"],
        ["trans", "passiva", "форма"],
        ["trans", "rifl", "форма"],
        ["passiva", "agente", "имеет"],
        ["rifl", "tipirifl", "может быть"],
        ["intr", "pronom", "иногда"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: действительная, страдательная, возвратная",
      questions: [
        { type: "mc", q: "«Il quadro fu dipinto da Leonardo.» Глагол в форме…", options: ["действительной", "страдательной", "возвратной"], answer: 1, explain: "Essere (fu) + причастие (dipinto) + дополнение деятеля: страдательная." },
        { type: "mc", q: "«Le bambine si pettinano i capelli.» Это возвратная форма…", options: ["собственная", "кажущаяся", "взаимная"], answer: 1, explain: "Прямое дополнение — «i capelli»; «si» значит «себе»: кажущаяся." },
        { type: "tf", q: "Предложение «Il bambino corre» можно преобразовать в страдательное.", answer: false, explain: "«Correre» здесь непереходный, без прямого дополнения: страдательной формы нет." }
      ]
    }
  ],
  glossary: [
    { t: "Переходный глагол (verbo transitivo)", d: "Глагол, который может иметь прямое дополнение (leggere un libro)." },
    { t: "Непереходный глагол (verbo intransitivo)", d: "Глагол, который не может иметь прямого дополнения (dormire, andare)." },
    { t: "Абсолютное употребление (uso assoluto)", d: "Переходный глагол, употреблённый без прямого дополнения (Luca mangia)." },
    { t: "Действительная форма", d: "Подлежащее совершает действие." },
    { t: "Страдательная форма", d: "Подлежащее испытывает действие; образуется с essere/venire + причастие прошедшего времени." },
    { t: "Дополнение деятеля (complemento d'agente)", d: "В страдательном предложении указывает, кто совершает действие (da + лицо или животное)." },
    { t: "Дополнение действующей причины (causa efficiente)", d: "В страдательном предложении указывает предмет, совершающий действие (dal vento)." },
    { t: "Возвратная форма", d: "Действие возвращается на подлежащее: mi lavo, ti vesti, si pettina." },
    { t: "Si passivante", d: "Частица si, придающая глаголу страдательное значение: si vendono case = case sono vendute." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Какой из этих глаголов непереходный?", options: ["comprare", "partire", "disegnare"], answer: 1, explain: "Partire что? Не имеет смысла: непереходный." },
      { type: "tf", q: "Переходный глагол, употреблённый без прямого дополнения («Marco legge»), остаётся переходным.", answer: true, explain: "Это абсолютное употребление: прямое дополнение можно было бы добавить." },
      { type: "mc", q: "Какова страдательная форма предложения «Il cuoco cucina la pasta»?", options: ["La pasta cucina il cuoco.", "La pasta è cucinata dal cuoco.", "Il cuoco si cucina la pasta."], answer: 1, explain: "Дополнение становится подлежащим, essere + причастие, дополнение деятеля." },
      { type: "mc", q: "В «Il ponte fu distrutto dalla piena» слово «dalla piena» — это дополнение…", options: ["деятеля", "действующей причины (causa efficiente)", "движения из места"], answer: 1, explain: "Паводок (la piena) — это предмет (не человек и не животное): действующая причина." },
      { type: "text", q: "Какой вспомогательный глагол используется для образования страдательного залога (кроме «venire»)?", answer: ["essere", "l'ausiliare essere", "быть"], explain: "Страдательный залог образуется с essere (или venire) + причастие прошедшего времени." },
      { type: "mc", q: "«Paolo e Luca si stringono la mano.» Какая это форма?", options: ["возвратная взаимная", "страдательная", "простая действительная"], answer: 0, explain: "Один пожимает руку другому: возвратная взаимная." },
      { type: "tf", q: "«Mi vergogno» — глагол в собственно-возвратной форме.", answer: false, explain: "Он не значит «стыжу себя самого»: это непереходный местоименный глагол." },
      { type: "mc", q: "Преобразуй в страдательный залог «Gli alunni hanno letto il racconto».", options: ["Il racconto è letto dagli alunni.", "Il racconto è stato letto dagli alunni.", "Il racconto fu letto dagli alunni."], answer: 1, explain: "Hanno letto = passato prossimo → è stato letto (passato prossimo страдательного залога)." },
      { type: "order", q: "Расставь по порядку шаги преобразования предложения в страдательный залог.", items: ["Прямое дополнение становится подлежащим", "Глагол становится essere + причастие прошедшего времени, в том же времени", "Подлежащее становится дополнением деятеля с «da»"], explain: "Сначала выбирают новое подлежащее, потом преобразуют глагол, в конце переносят деятеля." },
      { type: "mc", q: "Какое предложение правильное?", options: ["Si vende appartamenti.", "Si vendono appartamenti.", "Si vendono appartamento."], answer: 1, explain: "С si passivante глагол согласуется с подлежащим во множественном числе «appartamenti»." },
      { type: "mc", q: "Какой глагол НЕ может иметь страдательную форму?", options: ["costruire", "arrivare", "lavare"], answer: 1, explain: "Arrivare непереходный: у него нет прямого дополнения, значит, страдательной формы нет." }
    ]
  }
});
