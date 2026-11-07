TOPIC('ru', {
  id: "p4-ita-poesia",
  title: "Поэзия (La poesia)",
  intro: "Поэзия — особый текст: строка в ней переходит на новую строку раньше, чем кончается место, у неё есть ритм, как у песни, и она использует слова как краски, чтобы рождать <b>образы</b> и <b>эмоции</b>. Давай научимся распознавать <b>стихотворные строки (versi)</b>, <b>строфы (strofe)</b>, <b>рифмы (rime)</b> и основные <b>риторические фигуры (figure retoriche)</b>, например <b>сравнение (similitudine)</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Что такое стихотворение",
      html: `<p><b>Поэзия (poesia)</b> (или поэтический текст) — это текст, написанный, чтобы выразить <b>эмоции</b>, <b>ощущения</b> и <b>мысли</b> музыкально. Поэт выбирает каждое слово с большим вниманием — из-за его <b>значения</b>, но и из-за его <b>звучания</b>.</p>
<p>Его сразу можно узнать, потому что:</p>
<ul>
<li>оно написано <b>строками (versi)</b>: они переходят на новую строку, не доходя до края листа;</li>
<li>строки сгруппированы в <b>строфы (strofe)</b>, отделённые пустым местом;</li>
<li>часто у него есть <b>ритм</b> и <b>рифмы</b>;</li>
<li>оно использует язык, богатый <b>образами</b>: <b>риторические фигуры</b>.</li>
</ul>
<p>Слово «poesia» происходит от греческого <i>poiéin</i>, что значит <b>«делать, создавать»</b>: поэт — «тот, кто создаёт» словами.</p>`
    },
    {
      type: "text",
      title: "Шаг 1 – Строки и строфы",
      html: `<p><b>Verso</b> (стихотворная строка) — это одна строчка стихотворения. Она переходит на новую строку не потому, что закончилось место, а потому, что так решил поэт, чтобы придать словам ритм и значимость.</p>
<p><b>Strofa</b> (строфа) — это группа строк. У строф разные названия в зависимости от числа строк:</p>
<table>
<tr><th>Строк</th><th>Название строфы</th></tr>
<tr><td>2</td><td><b>distico</b> (двустишие)</td></tr>
<tr><td>3</td><td><b>terzina</b> (трёхстишие, терцина) (её использует Данте в «Божественной комедии»)</td></tr>
<tr><td>4</td><td><b>quartina</b> (четверостишие)</td></tr>
<tr><td>6</td><td><b>sestina</b> (шестистишие)</td></tr>
<tr><td>8</td><td><b>ottava</b> (октава, восьмистишие)</td></tr>
</table>
<p>Строки измеряют, считая <b>слоги</b>: строка из 7 слогов называется <b>settenario</b>, из 11 слогов — <b>endecasillabo</b> (самая важная строка итальянской поэзии). Многие современные поэты пишут <b>свободным стихом (versi liberi)</b>, то есть без фиксированной меры и без рифм.</p>`
    },
    {
      type: "widget",
      title: "Найди части стихотворения",
      widget: "labelDiagram",
      options: {
        svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#fffbeb"/>
<rect x="20" y="15" width="400" height="310" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
<text x="220" y="50" font-size="22" text-anchor="middle" fill="#b45309" font-weight="bold">La luna</text>
<text x="50" y="95" font-size="18" fill="#1f2937">La luna stanotte è un <tspan fill="#dc2626" font-weight="bold">sorriso</tspan></text>
<text x="50" y="122" font-size="18" fill="#1f2937">appeso nel cielo di seta,</text>
<text x="50" y="149" font-size="18" fill="#1f2937">si specchia nel lago, sul <tspan fill="#dc2626" font-weight="bold">viso</tspan></text>
<text x="50" y="176" font-size="18" fill="#1f2937">ha l'aria di un vecchio poeta.</text>
<text x="50" y="225" font-size="18" fill="#1f2937">Le stelle le fanno corona</text>
<text x="50" y="252" font-size="18" fill="#1f2937">come lucciole in fila,</text>
<text x="50" y="279" font-size="18" fill="#1f2937">e il vento una ninna nanna</text>
<text x="50" y="306" font-size="18" fill="#1f2937">piano piano le canta.</text>
<path d="M330 92 Q400 120 290 146" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4" fill="none"/>
<path d="M435 80 L455 80 L455 185 L435 185" stroke="#2563eb" stroke-width="3" fill="none"/>
</svg>`,
        spots: [
          { x: 320, y: 44, label: "Название" },
          { x: 34, y: 116, label: "Строка (verso)" },
          { x: 470, y: 132, label: "Строфа" },
          { x: 400, y: 120, label: "Рифма" },
          { x: 34, y: 246, label: "Сравнение" },
          { x: 34, y: 273, label: "Олицетворение" }
        ]
      },
      caption: "Нажми на точку и выбери правильную подпись: название, строка, строфа, рифма sorriso/viso, сравнение и олицетворение. (Стихотворение придумано для этого урока: «Луна сегодня ночью — улыбка, повисшая в шёлковом небе, смотрится в озеро, на лице у неё вид старого поэта. Звёзды делают ей корону, как светлячки в ряд, а ветер тихо-тихо поёт ей колыбельную».)"
    },
    {
      type: "text",
      title: "Шаг 2 – Рифмы",
      html: `<p>Две строки <b>рифмуются</b>, когда их последние слова <b>одинаковы начиная с последней ударной гласной</b>: <i>c<b>uore</b> – am<b>ore</b></i>, <i>gi<b>ardino</b> – matt<b>ino</b></i>, <i>s<b>ole</b> – vi<b>ole</b></i>.</p>
<p>Чтобы описать рифмы, используют <b>буквы алфавита</b>: строки, которые рифмуются между собой, обозначаются одной и той же буквой.</p>
<ul>
<li><b>Rima baciata</b> (парная рифма) (AABB): две строки подряд рифмуются между собой.<br><i>Il gatto nel <b>prato</b> (A) / si è addormentato (A) / sogna una <b>trota</b> (B) / che nuota e che ruota (B).</i><br>(Кот на лугу уснул, ему снится форель, которая плавает и вертится.)</li>
<li><b>Rima alternata</b> (перекрёстная рифма) (ABAB): рифмуются 1-я с 3-й и 2-я с 4-й.<br><i>Cade la <b>neve</b> (A) / sul tetto <b>bianco</b> (B) / leggera e <b>breve</b> (A) / sul passo <b>stanco</b> (B).</i><br>(Падает снег на белую крышу, лёгкий и недолгий, на усталый шаг.)</li>
<li><b>Rima incrociata</b> (опоясывающая рифма) (ABBA): рифмуются 1-я с 4-й и 2-я с 3-й.<br><i>Nel mare <b>blu</b> (A) / nuota il <b>delfino</b> (B) / vicino al <b>bambino</b> (B) / e salta <b>su</b> (A).</i><br>(В синем море плывёт дельфин рядом с малышом и выпрыгивает вверх.)</li>
</ul>
<p>Не во всех стихах есть рифмы! Стихи <b>свободным стихом</b> играют с ритмом, паузами и образами.</p>`
    },
    {
      type: "svg",
      title: "Три вида рифмы",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f5f3ff"/>
<text x="100" y="35" font-size="20" text-anchor="middle" fill="#6d28d9" font-weight="bold">ПАРНАЯ</text>
<text x="300" y="35" font-size="20" text-anchor="middle" fill="#be185d" font-weight="bold">ПЕРЕКРЁСТНАЯ</text>
<text x="500" y="35" font-size="20" text-anchor="middle" fill="#0f766e" font-weight="bold">ОПОЯСЫВАЮЩАЯ</text>
<g font-size="30" font-weight="bold" text-anchor="middle">
<text x="70" y="90" fill="#ef4444">A</text><text x="70" y="145" fill="#ef4444">A</text><text x="70" y="200" fill="#2563eb">B</text><text x="70" y="255" fill="#2563eb">B</text>
<text x="270" y="90" fill="#ef4444">A</text><text x="270" y="145" fill="#2563eb">B</text><text x="270" y="200" fill="#ef4444">A</text><text x="270" y="255" fill="#2563eb">B</text>
<text x="470" y="90" fill="#ef4444">A</text><text x="470" y="145" fill="#2563eb">B</text><text x="470" y="200" fill="#2563eb">B</text><text x="470" y="255" fill="#ef4444">A</text>
</g>
<g fill="none" stroke-width="4">
<path d="M95 80 Q130 112 95 135" stroke="#ef4444"/><path d="M95 190 Q130 222 95 245" stroke="#2563eb"/>
<path d="M295 80 Q345 135 295 190" stroke="#ef4444"/><path d="M295 135 Q345 190 295 245" stroke="#2563eb"/>
<path d="M495 80 Q570 162 495 245" stroke="#ef4444"/><path d="M495 135 Q525 162 495 190" stroke="#2563eb"/>
</g>
<text x="300" y="290" font-size="16" text-anchor="middle" fill="#1f2937">Линии соединяют строки, которые рифмуются между собой.</text>
</svg>`,
      caption: "Каждая буква — это строка: одна и та же буква = одна и та же рифма."
    },
    {
      type: "quiz",
      title: "Мини-тест: строки, строфы и рифмы",
      questions: [
        { type: "mc", q: "Строфа из 4 строк называется…", options: ["terzina", "quartina", "distico"], answer: 1, explain: "4 строки = quartina." },
        { type: "mc", q: "Какая пара слов рифмуется?", options: ["mare – sole", "fiore – colore", "casa – cane"], answer: 1, explain: "Fi-ORE / col-ORE: одинаковы начиная с последней ударной гласной." },
        { type: "mc", q: "Схема ABAB обозначает рифму…", options: ["парную (baciata)", "перекрёстную (alternata)", "опоясывающую (incrociata)"], answer: 1, explain: "1-я рифмуется с 3-й, 2-я с 4-й: alternata." }
      ]
    },
    {
      type: "text",
      title: "Шаг 3 – Сравнение и другие риторические фигуры",
      html: `<p><b>Риторические фигуры (figure retoriche)</b> — это особые способы использовать слова, чтобы создавать образы, звуки и эмоции. Вот основные:</p>
<ul>
<li><b>Similitudine</b> (сравнение): <b>сопоставление</b> двух вещей со словами вроде <b>come (как), sembra (кажется), simile a (похож на), pare (похоже)</b>: <i>\"Gli occhi brillavano <b>come</b> stelle\"</i> («Глаза блестели, как звёзды»), <i>\"Le nuvole <b>sembrano</b> panna montata\"</i> («Облака кажутся взбитыми сливками»).</li>
<li><b>Metafora</b> (метафора): сопоставление <b>без «come»</b>, более сильное и прямое: <i>\"I tuoi occhi <b>sono stelle</b>\"</i> («Твои глаза — звёзды»), <i>\"Quel bambino è un <b>terremoto</b>\"</i> («Этот малыш — землетрясение»).</li>
<li><b>Personificazione</b> (олицетворение): животным, вещам или идеям приписывают человеческие свойства: <i>\"Il vento <b>canta</b>\"</i> («Ветер поёт»), <i>\"La luna <b>sorride</b>\"</i> («Луна улыбается»).</li>
<li><b>Onomatopea</b> (звукоподражание): слова, которые подражают звуку: <i>tic tac, din don, splash, miao, bum</i>.</li>
<li><b>Anafora</b> (анафора): повторение одного или нескольких слов в начале нескольких строк: <i>\"<b>Ti aspetto</b> al mattino, / <b>ti aspetto</b> la sera…\"</i> («Жду тебя утром, жду тебя вечером…»).</li>
<li><b>Allitterazione</b> (аллитерация): повторение одинаковых звуков в соседних словах: <i>\"<b>tr</b>otta il <b>tr</b>enino <b>tr</b>a i <b>tr</b>ifogli\"</i>.</li>
</ul>
<p>Пример из итальянской поэзии: Джозуэ Кардуччи в стихотворении <i>San Martino</i> (1883) пишет, что <i>\"sotto il maestrale / <b>urla</b> e biancheggia il mar\"</i> («под мистралем море воет и белеет»): море «воет», как человек. Это <b>олицетворение</b>!</p>`
    },
    {
      type: "example",
      title: "Пример на практике: разбираем стихотворение",
      html: `<p>Прочитай это стихотворение (придумано для урока):</p>
<p style="padding-left:1em"><i><b>Il temporale</b><br>
Bum! Rimbomba il tuono sul monte,<br>
la pioggia corre come un cavallo,<br>
lava le strade, lava la fonte,<br>
e il cielo diventa di cristallo.</i></p>
<p>(Гроза. Бум! Гремит гром на горе, дождь бежит, как конь, моет улицы, моет родник, и небо становится хрустальным.)</p>
<ul>
<li><b>Строки</b>: 4 → это <b>quartina</b>.</li>
<li><b>Рифмы</b>: mont<b>e</b>/font<b>e</b> (A) и cav<b>allo</b>/crist<b>allo</b> (B) → схема <b>ABAB</b>, рифма <b>alternata</b>.</li>
<li><b>Onomatopea</b>: «Bum!» подражает грому.</li>
<li><b>Similitudine</b>: «corre <b>come</b> un cavallo» (бежит, как конь).</li>
<li><b>Anafora</b>: «<b>lava</b> le strade, <b>lava</b> la fonte» (повторение).</li>
<li><b>Metafora</b>: «il cielo diventa di cristallo» (ясное и прозрачное, без «come»).</li>
</ul>`
    },
    {
      type: "example",
      title: "Пример на практике: напиши стихотворение со сравнением",
      html: `<p>Попробуй это упражнение, которое используют многие учителя:</p>
<ol>
<li>Выбери предмет или животное (например, <b>кота — il gatto</b>).</li>
<li>Напиши 4 строки, которые все начинаются с одного и того же слова (анафора) и содержат «come»:<br>
<i>Il mio gatto è morbido <b>come</b> una nuvola,<br>
il mio gatto è silenzioso <b>come</b> la neve,<br>
il mio gatto è veloce <b>come</b> il vento,<br>
il mio gatto è pigro <b>come</b> una domenica.</i><br>
(Мой кот мягкий, как облако, тихий, как снег, быстрый, как ветер, ленивый, как воскресенье.)</li>
<li>Теперь преврати одно сравнение в <b>метафору</b>: <i>\"Il mio gatto è una nuvola che fa le fusa.\"</i> («Мой кот — облако, которое мурлычет.»)</li>
</ol>
<p>Ты написал стихотворение <b>свободным стихом</b> с <b>анафорой</b>, <b>сравнениями</b> и <b>метафорой</b>!</p>`
    },
    {
      type: "widget",
      title: "Игра: какая это риторическая фигура?",
      widget: "classify",
      options: {
        groups: ["Similitudine (сравнение)", "Metafora (метафора)", "Personificazione (олицетворение)", "Onomatopea (звукоподражание)"],
        items: [
          ["Bianco come il latte", 0], ["Correva veloce come una lepre", 0], ["Le foglie sembrano farfalle", 0],
          ["Sei un leone!", 1], ["Il mare è uno specchio", 1], ["Ha un cuore di pietra", 1],
          ["Il sole sorride", 2], ["Gli alberi danzano nel vento", 2], ["La sveglia mi chiama", 2],
          ["Drin drin!", 3], ["Cip cip", 3], ["Splash!", 3]
        ]
      },
      caption: "Помни: если есть «come» (или «sembra»), это сравнение."
    },
    {
      type: "curiosity",
      title: "А ты знал? Японские хайку",
      html: `<p>В <b>Японии</b> есть совсем короткое стихотворение: <b>хайку (haiku)</b>. В нём всего <b>3 строки</b> по <b>5, 7 и 5 слогов</b> (по-японски считают звуковые единицы, немного отличающиеся от наших слогов), и обычно оно говорит о <b>природе</b> и <b>временах года</b>.</p>
<p>Самый знаменитый мастер — <b>Мацуо Басё</b> (1644–1694). Его самое известное хайку в переводе звучит так: <i>«Старый пруд. / Лягушка прыгает в воду: / всплеск воды.»</i></p>
<p>Попробуй написать своё: 5 – 7 – 5!</p>`
    },
    {
      type: "curiosity",
      title: "А ты знал? «Божественная комедия» терцинами",
      html: `<p><b>Данте Алигьери</b> в начале XIV века написал «Божественную комедию» (<i>Divina Commedia</i>): более <b>14 000 строк</b>, и все — <b>endecasillabi</b> (11 слогов), сгруппированные в <b>терцины</b> со <b>скреплённой рифмой (rima incatenata)</b> (ABA BCB CDC…): каждая терцина «цепляется» за следующую, как звенья цепи.</p>
<p>Первую строку знают почти все итальянцы: <i>\"Nel mezzo del cammin di nostra vita\"</i> («Земную жизнь пройдя до половины»).</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li><b>Verso</b> = одна строка стихотворения; <b>strofa</b> = группа строк (distico, terzina, quartina…).</li>
<li><b>Рифма</b> = слова, одинаковые начиная с последней ударной гласной.</li>
<li>Схемы: <b>baciata AABB</b> (парная), <b>alternata ABAB</b> (перекрёстная), <b>incrociata ABBA</b> (опоясывающая).</li>
<li><b>Similitudine</b> = сравнение с «come»; <b>metafora</b> = сравнение без «come».</li>
<li><b>Personificazione</b> = вещи действуют как люди; <b>onomatopea</b> = слова-звуки.</li>
<li><b>Свободный стих (versi liberi)</b> не имеет фиксированной меры и обязательных рифм.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять поэзию",
      intro: "Поэзию можно слушать, петь, рисовать и даже строить, как игру. Выбери путь, который тебе подходит.",
      tabs: [
        {
          label: "🎵 Как песня",
          html: `<p><b>Песни</b> — это стихи с музыкой! В них есть:</p>
<ul>
<li><b>строфы</b>, как и в стихах;</li>
<li><b>припев</b>, который повторяется (немного как <b>анафора</b>);</li>
<li><b>рифмы</b>, которые помогают легко запомнить слова;</li>
<li><b>ритм</b>, который можно отбивать в ладоши.</li>
</ul>
<p>В <b>рэпе</b> тоже полно рифм и аллитераций. Попробуй хлопать на каждый слог строки: <i>\"Nel / mez / zo / del / cam / min / di / no / stra / vi / ta\"</i> → 11 хлопков: endecasillabo!</p>`
        },
        {
          label: "🖼️ Каллиграмма",
          html: `<p>Французский поэт <b>Гийом Аполлинер</b> издал в <b>1918</b> году книгу под названием <i>Calligrammes</i> («Каллиграммы»): стихи, в которых слова расположены так, чтобы <b>рисовать</b> то, о чём они говорят. Итальянские <b>футуристы</b>, например Филиппо Томмазо Маринетти, тоже играли с формой слов.</p>
<p>Попробуй и ты: напиши стихотворение о дожде, заставив слова «падать», или стихотворение о солнце, расположив слова по кругу.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#eff6ff"/>
<g font-size="17" fill="#1d4ed8" font-style="italic">
<text x="60" y="40">gocce</text><text x="75" y="80">di</text><text x="65" y="120">pioggia</text><text x="80" y="160">cadono</text><text x="70" y="200">piano</text>
<text x="150" y="60">tic</text><text x="160" y="100">tic</text><text x="150" y="140">sul</text><text x="160" y="180">vetro</text><text x="155" y="220">tic</text>
<text x="230" y="30">e</text><text x="235" y="70">il</text><text x="225" y="110">cielo</text><text x="235" y="150">piange</text><text x="230" y="190">piano</text>
</g>
<circle cx="450" cy="130" r="45" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
<g font-size="16" fill="#b45309" font-weight="bold" text-anchor="middle">
<text x="450" y="60">luce</text><text x="530" y="135">calda</text><text x="450" y="215">sole</text><text x="370" y="135">oro</text>
<text x="510" y="80">brilla</text><text x="510" y="190">scalda</text><text x="390" y="190">ride</text><text x="390" y="80">gioca</text>
</g>
</svg>`
        },
        {
          label: "🇯🇵 Напиши хайку",
          html: `<p>Японский метод идеален для тех, кто думает, что поэзия — это сложно: достаточно <b>3 строк</b> и много <b>наблюдательности</b>.</p>
<ol>
<li><b>Посмотри</b> на что-нибудь в природе (листок, улитку, снег).</li>
<li>Первая строка, <b>5 слогов</b>: что ты видишь. <i>\"Foglia d'autunno\"</i> (fo-glia-d'au-tun-no) — «осенний лист».</li>
<li>Вторая строка, <b>7 слогов</b>: что происходит. <i>\"scende lenta sul prato\"</i> (scen-de-len-ta-sul-pra-to) — «медленно опускается на луг».</li>
<li>Третья строка, <b>5 слогов</b>: неожиданность или эмоция. <i>\"il vento tace\"</i> (il-ven-to-ta-ce) — «ветер молчит».</li>
</ol>
<p>Не переживай, если слоги не идеальны: даже итальянские переводчики хайку часто не соблюдают в точности 5-7-5!</p>`
        },
        {
          label: "🃏 Карточки с фигурами",
          html: `<p>Повтори риторические фигуры с помощью карточек: прочитай лицевую сторону, попробуй ответить, потом переверни.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "\"Dolce come il miele\"", back: "Similitudine — сравнение (есть «come»)" },
              { front: "\"Sei il mio sole\"", back: "Metafora — сопоставление без «come»" },
              { front: "\"La pioggia bussa ai vetri\"", back: "Personificazione — олицетворение" },
              { front: "\"Toc toc\"", back: "Onomatopea — звукоподражание" },
              { front: "Рифма AABB", back: "Rima baciata — парная рифма" },
              { front: "Строфа из 3 строк", back: "Terzina — терцина" },
              { front: "Строка из 11 слогов", back: "Endecasillabo — эндекасиллаб" }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта поэзии",
      nodes: [
        { id: "poesia", label: "Поэзия", x: 50, y: 6, color: "#2563eb", html: "Текст в строках, который выражает эмоции и образы музыкально.", why: "От греческого <i>poiéin</i>, «делать, создавать». Первые стихи <b>пели</b>: до появления письменности ритм и рифмы помогали запоминать наизусть длинные рассказы, такие как «Илиада» и «Одиссея», которые приписывают Гомеру." },
        { id: "verso", label: "Строка (Verso)", x: 20, y: 30, color: "#ef4444", html: "Одна строчка стихотворения.", why: "От латинского <i>versus</i>, «повёрнутый»: как плуг, который доходит до конца поля и поворачивает назад, так и строка в какой-то момент «поворачивает» и переходит на новую строку." },
        { id: "strofa", label: "Строфа (Strofa)", x: 50, y: 30, color: "#f59e0b", html: "Группа строк: distico, terzina, quartina…", why: "От греческого <i>strophé</i>, «поворот»: в греческом театре хор пел одну часть, двигаясь в одну сторону, а потом возвращался назад с антистрофой." },
        { id: "rima", label: "Рифма (Rima)", x: 80, y: 30, color: "#a855f7", html: "Одинаковое звучание начиная с последней ударной гласной.", why: "Греки и римляне классической эпохи почти не использовали рифму: они считали долгие и краткие слоги. Рифма распространилась в Средние века, с христианскими гимнами на латыни, а потом с провансальскими поэтами и <b>Сицилийской школой</b> (XIII век), которая создала и сонет." },
        { id: "metrica", label: "Мера строки", x: 20, y: 58, color: "#0ea5e9", html: "Считают слоги: settenario (7), endecasillabo (11)…", why: "Эндекасиллаб — самая употребительная строка у великих итальянских поэтов (Данте, Петрарка, Леопарди), потому что у неё разнообразный и естественный ритм, близкий к тому, как мы говорим." },
        { id: "liberi", label: "Свободный стих", x: 20, y: 86, color: "#64748b", html: "Строки без фиксированной меры и без обязательных рифм.", why: "Распространился в конце XIX и в XX веке: такие поэты, как американец Уолт Уитмен, а потом многие итальянцы XX века, хотели освободиться от правил, чтобы следовать ритму мысли." },
        { id: "figure", label: "Риторические фигуры", x: 65, y: 58, color: "#16a34a", html: "Особые способы использовать слова: сравнение, метафора, олицетворение, звукоподражание, анафора…", why: "«Риторика» в Древней Греции была искусством говорить убедительно. Аристотель (IV век до н. э.) уже изучал метафору, которую определял как «перенос» имени с одной вещи на другую." },
        { id: "similitudine", label: "Сравнение (Similitudine)", x: 50, y: 86, color: "#14b8a6", html: "Сопоставление со словами «come», «sembra», «simile a».", why: "Наш мозг понимает новое, сравнивая его с тем, что уже знает: сравнение делает именно это. Гомер использует их очень много: герои сражаются «как львы»." },
        { id: "metafora", label: "Метафора (Metafora)", x: 82, y: 86, color: "#be185d", html: "Сопоставление без «come»: <i>sei un leone</i> (ты лев).", why: "От греческого <i>metaphérein</i>, «переносить»: значение переносится с одной вещи на другую. Это «сокращённое» сравнение, более сильное и неожиданное." }
      ],
      edges: [
        ["poesia", "verso", "состоит из"],
        ["verso", "strofa", "группируются в"],
        ["poesia", "rima", "часто имеет"],
        ["verso", "metrica", "измеряется"],
        ["metrica", "liberi", "или"],
        ["poesia", "figure", "использует"],
        ["figure", "similitudine", ""],
        ["figure", "metafora", ""],
        ["similitudine", "metafora", "без «come»"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: риторические фигуры",
      questions: [
        { type: "mc", q: "\"Il fiume è un serpente d'argento.\" («Река — серебряная змея.») Это…", options: ["similitudine", "metafora", "onomatopea"], answer: 1, explain: "Сопоставление без «come»: метафора." },
        { type: "mc", q: "\"Le campane cantano a festa.\" («Колокола поют в праздник.») Это…", options: ["personificazione", "rima", "similitudine"], answer: 0, explain: "Колокола «поют», как люди: олицетворение." },
        { type: "tf", q: "\"Leggero come una piuma\" («Лёгкий, как перышко») — это сравнение.", answer: true, explain: "Есть «come»: сравнение (similitudine)." }
      ]
    }
  ],
  glossary: [
    { t: "Verso (стихотворная строка)", d: "Каждая строчка стихотворения." },
    { t: "Strofa (строфа)", d: "Группа строк, отделённая от других пустым местом." },
    { t: "Rima (рифма)", d: "Одинаковое звучание слов начиная с последней ударной гласной." },
    { t: "Rima baciata (парная рифма)", d: "Схема AABB: рифмуются две строки подряд." },
    { t: "Rima alternata (перекрёстная рифма)", d: "Схема ABAB: рифмуются 1-я и 3-я, 2-я и 4-я строки." },
    { t: "Rima incrociata (опоясывающая рифма)", d: "Схема ABBA: рифмуются 1-я и 4-я, 2-я и 3-я строки." },
    { t: "Similitudine (сравнение)", d: "Сопоставление двух вещей со словами «come», «sembra», «simile a»." },
    { t: "Metafora (метафора)", d: "Сопоставление без «come»." },
    { t: "Personificazione (олицетворение)", d: "Приписывание человеческих действий или качеств вещам, животным или идеям." },
    { t: "Onomatopea (звукоподражание)", d: "Слово, которое подражает звуку или шуму." },
    { t: "Endecasillabo (эндекасиллаб)", d: "Строка из 11 слогов, самая употребительная в итальянской поэзии." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Как называется каждая строчка стихотворения?", options: ["Strofa", "Verso", "Rima"], answer: 1, explain: "Строчка — это verso." },
      { type: "mc", q: "Строфа из 3 строк называется…", options: ["terzina", "quartina", "distico"], answer: 0, explain: "3 строки = terzina." },
      { type: "mc", q: "Какая пара рифмуется?", options: ["luna – lana", "stella – bella", "notte – note"], answer: 1, explain: "St-ELLA / b-ELLA." },
      { type: "mc", q: "Схема ABBA обозначает рифму…", options: ["baciata (парную)", "alternata (перекрёстную)", "incrociata (опоясывающую)"], answer: 2, explain: "1-я с 4-й, 2-я с 3-й: incrociata." },
      { type: "tf", q: "Во всех стихах должны быть рифмы.", answer: false, explain: "В стихах свободным стихом рифм может не быть." },
      { type: "mc", q: "\"Il bambino dormiva come un ghiro.\" («Малыш спал, как сурок.») Это…", options: ["metafora", "similitudine", "anafora"], answer: 1, explain: "Сопоставление с «come»: similitudine." },
      { type: "mc", q: "\"Tic tac, fa l'orologio.\" «Tic tac» — это…", options: ["onomatopea", "metafora", "personificazione"], answer: 0, explain: "Подражает звуку: onomatopea." },
      { type: "text", q: "Как называется сопоставление, сделанное БЕЗ слова «come»?", answer: ["metafora", "la metafora", "una metafora", "метафора", "метафора."], explain: "Metafora (метафора)." },
      { type: "num", q: "Сколько слогов в эндекасиллабе?", answer: 11, explain: "Endeca = одиннадцать по-гречески." },
      { type: "tf", q: "Хайку — это японское стихотворение из 3 строк.", answer: true, explain: "Три строки по 5, 7, 5 звуковых единиц." },
      { type: "order", q: "Расставь строфы от самой короткой до самой длинной.", items: ["distico", "terzina", "quartina", "sestina", "ottava"], explain: "2, 3, 4, 6, 8 строк." },
      { type: "mc", q: "\"Il vento sussurra tra gli alberi.\" («Ветер шепчет среди деревьев.») Какая здесь риторическая фигура?", options: ["Personificazione", "Similitudine", "Rima"], answer: 0, explain: "Ветер «шепчет», как человек." }
    ]
  }
});
