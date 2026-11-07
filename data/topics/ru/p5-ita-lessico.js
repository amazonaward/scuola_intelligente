TOPIC('ru', {
  id: "p5-ita-lessico",
  title: "Лексика (il lessico)",
  intro: "<b>Лексика</b> (<i>lessico</i>) — это совокупность слов языка. У слов есть друзья (<b>синонимы</b>), враги (<b>антонимы</b>), семьи, а ещё их можно строить как кирпичики с помощью <b>приставок</b> (префиксов) и <b>суффиксов</b>. Чем больше слов ты знаешь, тем лучше можешь сказать то, что думаешь!",
  minutes: 35,
  sections: [
    {
      type: "text",
      title: "Что такое лексика",
      html: `<p><b>Лексика</b> (или <b>словарный состав</b>, <i>vocabolario</i>) — это совокупность всех слов языка. У каждого из нас есть ещё и <b>личный словарный запас</b>: слова, которые он знает и употребляет.</p>
<p>Лингвист <b>Туллио Де Мауро</b> подсчитал, что около <b>7000 слов</b> составляют <b>базовый словарь</b> итальянского языка: они нужны, чтобы понимать почти всё, что мы читаем и слышим каждый день. А в больших словарях их больше <b>250 000</b>!</p>
<p>Чтобы обогатить лексику: много читать, пользоваться словарём, играть со словами, спрашивать себя, откуда они пришли.</p>`
    },
    {
      type: "text",
      title: "Синонимы, антонимы, омонимы",
      html: `<ul>
<li><b>Синонимы</b> (<i>sinonimi</i>): слова с <b>одинаковым или похожим</b> значением. <i>Casa – abitazione</i> (дом – жилище), <i>bello – carino – stupendo</i> (красивый – симпатичный – великолепный), <i>iniziare – cominciare</i> (начинать). Внимание: они редко бывают совершенно одинаковыми; у каждого свой «оттенок» (<i>carino</i> слабее, чем <i>stupendo</i>).</li>
<li><b>Антонимы</b> (<i>contrari</i>): слова с <b>противоположным</b> значением. <i>Alto – basso</i> (высокий – низкий), <i>aprire – chiudere</i> (открывать – закрывать), <i>felice – infelice</i> (счастливый – несчастный). Некоторые образуются с помощью приставки: <i>utile → inutile</i>, <i>onesto → disonesto</i>.</li>
<li><b>Омонимы</b> (<i>omonimi</i>): слова, которые пишутся (и/или произносятся) <b>одинаково</b>, но имеют <b>разные значения</b>. <i>Riso</i> (рис / смех), <i>miglio</i> (мера длины — миля / просо), <i>pesca</i> (персик / рыбалка: здесь меняется произношение буквы <i>e</i>!).</li>
<li><b>Многозначные слова</b> (<i>polisemiche</i>): одно слово с <b>несколькими связанными значениями</b>: <i>la penna</i> — птичье перо и ручка для письма (первые ручки как раз были гусиными перьями!).</li>
</ul>`
    },
    {
      type: "widget",
      title: "Игра: сопоставь синонимы",
      widget: "match",
      options: { pairs: [["veloce", "rapido"], ["paura", "timore"], ["regalo", "dono"], ["guardare", "osservare"], ["allegro", "contento"], ["finire", "terminare"]] },
      caption: "Соедини каждое слово с его синонимом."
    },
    {
      type: "text",
      title: "Как рождаются слова: корень, приставки, суффиксы",
      html: `<p>Многие слова строятся из <b>исходного (непроизводного) слова</b> (<i>parola primitiva</i>; оно не происходит от других итальянских слов), например <i>mare</i> (море), <i>fiore</i> (цветок), <i>giocare</i> (играть).</p>
<ul>
<li><b>Корень</b> (<i>radice</i>) — часть, несущая значение: <b>fior</b>-e, <b>fior</b>-aio (цветочник), <b>fior</b>-ire (цвести).</li>
<li><b>Приставка</b> (<i>prefisso</i>) ставится <b>перед</b> корнем и меняет значение: <i><b>ri</b>fare</i> (сделать заново), <i><b>s</b>contento</i> (недовольный), <i><b>pre</b>vedere</i> (предвидеть), <i><b>super</b>mercato</i>, <i><b>sotto</b>passaggio</i> (подземный переход).</li>
<li><b>Суффикс</b> (<i>suffisso</i>) ставится <b>после</b> корня и создаёт новое слово: <i>fior<b>aio</b></i> (профессия), <i>gioca<b>tore</b></i> (тот, кто делает), <i>gentil<b>ezza</b></i> (качество), <i>lava<b>trice</b></i> (орудие), <i>mangi<b>abile</b></i> (то, что можно…).</li>
</ul>
<p>Полученные так слова называются <b>производными</b> (<i>derivate</i>). Все слова с одним корнем образуют <b>словообразовательное гнездо</b> («семью слов», <i>famiglia di parole</i>).</p>`
    },
    {
      type: "svg",
      title: "Семейное древо слова «mare» (море)",
      svg: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="320" fill="#ecfeff"/>
<rect x="300" y="200" width="40" height="110" fill="#92400e"/>
<ellipse cx="320" cy="140" rx="290" ry="115" fill="#86efac"/>
<rect x="250" y="250" width="140" height="44" rx="10" fill="#0369a1"/>
<text x="320" y="279" font-size="22" text-anchor="middle" fill="#ffffff" font-weight="bold">MARE</text>
<g font-size="17" text-anchor="middle" font-weight="bold">
<rect x="70" y="60" width="120" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="130" y="84" fill="#166534">mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="210" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="275" y="64" fill="#166534">mar<tspan fill="#dc2626">inaio</tspan></text>
<rect x="360" y="40" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="425" y="64" fill="#166534">mar<tspan fill="#dc2626">ittimo</tspan></text>
<rect x="470" y="100" width="130" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="535" y="124" fill="#166534">mar<tspan fill="#dc2626">ea</tspan></text>
<rect x="60" y="130" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="140" y="154" fill="#166534"><tspan fill="#2563eb">sotto</tspan>mar<tspan fill="#dc2626">ino</tspan></text>
<rect x="240" y="110" width="160" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="320" y="134" fill="#166534"><tspan fill="#2563eb">oltre</tspan>mare</text>
<rect x="420" y="170" width="170" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="505" y="194" fill="#166534">mare<tspan fill="#dc2626">ggiata</tspan></text>
<rect x="70" y="190" width="150" height="36" rx="18" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="145" y="214" fill="#166534">mar<tspan fill="#dc2626">oso</tspan></text>
</g>
<text x="20" y="310" font-size="14" fill="#1d4ed8">синий = приставка</text>
<text x="480" y="310" font-size="14" fill="#b91c1c">красный = суффикс</text>
</svg>`,
      caption: "Все эти слова имеют корень «mar-»: они образуют семью слов слова «mare»."
    },
    {
      type: "text",
      title: "Изменённые и составные слова",
      html: `<p><b>Изменённые существительные</b> (<i>nomi alterati</i>) немного меняют значение существительного с помощью суффикса, не создавая ничего нового:</p>
<ul>
<li><b>уменьшительные</b> (<i>diminutivi</i>, меньше): <i>gatt<b>ino</b>, cas<b>etta</b>, libr<b>icino</b></i>;</li>
<li><b>увеличительные</b> (<i>accrescitivi</i>, больше): <i>librone, nas<b>one</b></i>;</li>
<li><b>ласкательные</b> (<i>vezzeggiativi</i>, с нежностью): <i>orsacch<b>iotto</b>, cag<b>nolino</b></i>;</li>
<li><b>уничижительные</b> (<i>dispregiativi</i>, с презрением): <i>temp<b>accio</b>, libr<b>accio</b></i>.</li>
</ul>
<p>⚠️ <b>Ложные изменённые слова</b>: <i>tacchino</i> (индюк) — не маленький каблук (<i>tacco</i>), <i>mattone</i> (кирпич) — не большой сумасшедший (<i>matto</i>), <i>bottone</i> (пуговица) — не большая бочка (<i>botte</i>), <i>burrone</i> (обрыв) — не много масла (<i>burro</i>)! 😄</p>
<p><b>Составные существительные</b> (<i>nomi composti</i>) образуются из <b>двух соединённых слов</b>: <i>capo + stazione = capostazione</i> (начальник станции), <i>apri + scatole = apriscatole</i> (консервный нож), <i>arco + baleno = arcobaleno</i> (радуга), <i>pesce + spada = pescespada</i> (рыба-меч).</p>`
    },
    {
      type: "quiz",
      title: "Мини-тест: слова и их семьи",
      questions: [
        { type: "mc", q: "Какой антоним у слова «generoso» (щедрый)?", options: ["gentile (добрый)", "avaro (скупой)", "buono (хороший)"], answer: 1, explain: "Generoso = тот, кто охотно даёт; avaro = тот, кто не хочет давать." },
        { type: "mc", q: "В слове «rileggere» (перечитывать) элемент «ri-» — это…", options: ["суффикс", "приставка", "корень"], answer: 1, explain: "Он стоит перед корнем и означает «снова»: приставка." },
        { type: "tf", q: "«Tacchino» — это уменьшительное от «tacco».", answer: false, explain: "Это ложное изменённое слово: tacchino — животное (индюк), а не маленький каблук!" },
        { type: "mc", q: "Какое слово НЕ входит в семью слова «fiore»?", options: ["fioraio", "fiorire", "fiume"], answer: 2, explain: "У слова «fiume» (река) нет корня fior-: это другая семья." }
      ]
    },
    {
      type: "example",
      title: "Пример: обогащаем предложение синонимами",
      html: `<p>«Бедное» предложение: «Il film era <b>bello</b>, la musica era <b>bella</b> e anche i costumi erano <b>belli</b>.» (Фильм был красивый, музыка была красивая и костюмы тоже были красивые.)</p>
<p>«Богатое» предложение: «Il film era <b>appassionante</b>, la musica era <b>coinvolgente</b> e i costumi erano <b>eleganti</b>.» (Фильм был увлекательный, музыка — захватывающая, а костюмы — элегантные.)</p>
<p>Видишь? С подходящими синонимами избегают <b>повторов</b> и говорят <b>больше</b>: каждое слово добавляет точную информацию. <b>Словарь синонимов и антонимов</b> — отличный друг пишущего.</p>`
    },
    {
      type: "example",
      title: "Пример: угадай значение по частям",
      html: `<p>Ты встретил новое слово: <b>«irraggiungibile»</b>. Не знаешь, что оно значит? Разбери его на части!</p>
<ul>
<li><b>ir-</b> = отрицательная приставка («не»), как в <i>ir</i>regolare (неправильный);</li>
<li><b>raggiung-</b> = корень слова <i>raggiungere</i> (достигать);</li>
<li><b>-ibile</b> = суффикс «то, что можно», как в <i>leggibile</i> (читаемый).</li>
</ul>
<p>Результат: «<b>недостижимый, то, чего нельзя достичь</b>». Так ты понимаешь множество новых слов, не открывая словарь!</p>`
    },
    {
      type: "widget",
      title: "Карточки: приставки и суффиксы",
      widget: "flashcards",
      options: {
        cards: [
          { front: "ri- (rifare)", back: "снова" },
          { front: "in- / im- / s- / dis- (infelice, impossibile, scontento, disonesto)", back: "не, противоположное" },
          { front: "pre- (prevedere)", back: "заранее, перед" },
          { front: "sotto- / sub- (sottomarino, subacqueo)", back: "под" },
          { front: "super- / iper- (supermercato, ipermercato)", back: "над, очень большой" },
          { front: "-aio / -ista (fioraio, dentista)", back: "профессия" },
          { front: "-tore / -trice (giocatore, lavatrice)", back: "тот или то, что совершает действие" },
          { front: "-ezza / -ità (bellezza, bontà)", back: "отвлечённое качество" },
          { front: "-abile / -ibile (lavabile, leggibile)", back: "то, что можно…" }
        ]
      },
      caption: "Переворачивай карточки: на лицевой стороне приставка или суффикс, на обороте — значение."
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Первый итальянский словарь",
      html: `<p>Первый большой словарь итальянского языка был издан в Венеции в <b>1612</b> году флорентийской <b>Академией Круска</b> (Accademia della Crusca). Название любопытное: <i>crusca</i> — это отруби, отходы муки. Академики хотели «просеять» язык, отделив хорошие слова (муку) от тех, что нужно отбросить (отруби)! Символ Академии — недаром <b>frullone</b>, сито для муки.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Слова путешествуют",
      html: `<p>Итальянский заимствовал слова из многих языков (<b>заимствования</b>): из арабского <i>zucchero</i> (сахар), <i>arancia</i> (апельсин), <i>magazzino</i> (склад), <i>algebra</i>; из французского <i>giardino</i> (сад), <i>bistecca</i> (бифштекс; из английского <i>beef-steak</i>!); из английского <i>computer, sport, weekend</i>. И итальянский подарил миру много слов: <i>pizza, spaghetti, piano, opera, ciao, bravo</i> используются во множестве языков, в том числе и в русском!</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li><b>Синонимы</b> = похожее значение; <b>антонимы</b> = противоположное значение; <b>омонимы</b> = одинаковая форма, разные значения.</li>
<li><b>Исходное</b> слово → с приставками/суффиксами становится <b>производным</b>; один корень = одна <b>семья</b>.</li>
<li><b>Приставка</b> перед корнем, <b>суффикс</b> после.</li>
<li><b>Изменённые</b>: уменьшительные, увеличительные, ласкательные, уничижительные (осторожно с ложными изменёнными!). <b>Составные</b>: два слова вместе.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять, как строятся слова",
      intro: "Слова можно представить как кирпичики, как латинские и греческие корни, как в английском… или расположить их на шкале интенсивности.",
      tabs: [
        {
          label: "🧱 Кирпичики",
          html: `<p>Представь слово как постройку из <b>кирпичиков</b>: в центре <b>кирпичик-корень</b> (значение), спереди можно прицепить <b>приставку</b>, сзади — <b>суффикс</b>.</p>
<p>С корнем <b>-lav-</b> (мыть): lav<b>are</b>, lav<b>atrice</b>, lav<b>abile</b>, <b>ri</b>lavare, lav<b>andino</b>, lav<b>aggio</b>… Один корень, много построек!</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#fefce8"/>
<rect x="40" y="70" width="140" height="70" rx="6" fill="#3b82f6"/><circle cx="75" cy="64" r="10" fill="#3b82f6"/><circle cx="145" cy="64" r="10" fill="#3b82f6"/>
<text x="110" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">im-</text>
<rect x="190" y="70" width="200" height="70" rx="6" fill="#16a34a"/><circle cx="240" cy="64" r="10" fill="#16a34a"/><circle cx="340" cy="64" r="10" fill="#16a34a"/>
<text x="290" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">mangi</text>
<rect x="400" y="70" width="160" height="70" rx="6" fill="#dc2626"/><circle cx="440" cy="64" r="10" fill="#dc2626"/><circle cx="520" cy="64" r="10" fill="#dc2626"/>
<text x="480" y="114" font-size="26" text-anchor="middle" fill="#ffffff" font-weight="bold">-abile</text>
<text x="110" y="170" font-size="16" text-anchor="middle">приставка: не</text>
<text x="290" y="170" font-size="16" text-anchor="middle">корень: mangiare (есть)</text>
<text x="480" y="170" font-size="16" text-anchor="middle">суффикс: то, что можно</text>
<text x="300" y="205" font-size="20" text-anchor="middle" font-weight="bold" fill="#1f2937">immangiabile = несъедобный</text>
</svg>`
        },
        {
          label: "🏛️ Латинские и греческие корни",
          html: `<p>Очень многие итальянские слова имеют <b>латинские или греческие корни</b>. Если выучить корни, поймёшь целые семьи слов!</p>
<ul>
<li><b>tele-</b> (греч.: далеко): telefono, televisione, telescopio.</li>
<li><b>-fono</b> (греч.: звук, голос): telefono, microfono, megafono.</li>
<li><b>-scopio</b> (греч.: наблюдать): microscopio, telescopio.</li>
<li><b>bio-</b> (греч.: жизнь): biologia, biografia.</li>
<li><b>aqua</b> (лат.: вода): acquario, acquedotto, acquatico.</li>
</ul>
<p>Многие из этих корней ты знаешь и по-русски: телефон, микроскоп, биология! Сопоставь корень с его значением:</p>`,
          widget: "match",
          options: { pairs: [["tele-", "далеко"], ["micro-", "маленький"], ["-fono", "звук"], ["bio-", "жизнь"], ["-grafia", "письмо, описание"], ["geo-", "земля"]] }
        },
        {
          label: "🇬🇧 В английском так же!",
          html: `<p>В английском слова тоже строятся с помощью приставок и суффиксов, часто <b>тех же самых</b>, потому что они пришли из латыни:</p>
<table>
<tr><th>Английский</th><th>Итальянский</th><th>Что делает</th></tr>
<tr><td><b>un</b>happy</td><td><b>in</b>felice</td><td>противоположное</td></tr>
<tr><td><b>re</b>write</td><td><b>ri</b>scrivere</td><td>снова</td></tr>
<tr><td>play<b>er</b></td><td>gioca<b>tore</b></td><td>тот, кто делает</td></tr>
<tr><td>wash<b>able</b></td><td>lav<b>abile</b></td><td>то, что можно</td></tr>
<tr><td>kind<b>ness</b></td><td>gentil<b>ezza</b></td><td>качество</td></tr>
</table>
<p>Знание «кусочков» помогает учить сразу два языка!</p>`
        },
        {
          label: "🌡️ Термометр слов",
          html: `<p>Синонимы не все одинаковы: у них разная <b>интенсивность</b>. Поставь их на <b>термометр</b>, от самого слабого к самому сильному:</p>
<ul>
<li>😐 <b>contento</b> (довольный) → 🙂 <b>felice</b> (счастливый) → 😄 <b>entusiasta</b> (восторженный) → 🤩 <b>euforico</b> (в эйфории)</li>
<li>🌤️ <b>tiepido</b> (тёплый, чуть тёплый) → ☀️ <b>caldo</b> (горячий) → 🔥 <b>bollente</b> (кипящий) → 🌋 <b>rovente</b> (раскалённый)</li>
<li>🤏 <b>piccolo</b> (маленький) → 🐜 <b>minuscolo</b> (крошечный) → 🔬 <b>microscopico</b> (микроскопический)</li>
</ul>
<p>Выбор правильного слова на термометре делает твои тексты точными. Попробуй распределить: эти слова «слабые» или «сильные»?</p>`,
          widget: "classify",
          options: { groups: ["Слабая интенсивность", "Сильная интенсивность"], items: [["contento", 0], ["tiepido", 0], ["carino", 0], ["stanco", 0], ["euforico", 1], ["rovente", 1], ["stupendo", 1], ["sfinito", 1]] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта лексики",
      nodes: [
        { id: "lessico", label: "Лексика", x: 50, y: 6, color: "#2563eb", html: "Совокупность слов языка (или человека).", why: "От греческого <i>léxis</i> = «слово». Лексика всё время меняется: рождаются новые слова (неологизмы), а другие исчезают, потому что меняется мир, который мы описываем." },
        { id: "significato", label: "Отношения по значению", x: 22, y: 30, color: "#16a34a", html: "Синонимы, антонимы, омонимы, многозначные слова.", why: "Слова не изолированы: их значение понятно и из сравнения с другими (caldo — «горячий» — лучше понятно рядом с freddo — «холодный»)." },
        { id: "sinonimi", label: "Синонимы и антонимы", x: 10, y: 56, color: "#22c55e", html: "Синонимы: похожее значение. Антонимы: противоположное значение.", why: "От греческого <i>syn</i> (вместе) + <i>ónoma</i> (имя) и <i>antí</i> (против) + <i>ónoma</i>. Совершенные синонимы встречаются очень редко: каждый язык стремится придать каждому слову свой оттенок." },
        { id: "omonimi", label: "Омонимы", x: 32, y: 56, color: "#14b8a6", html: "Одинаковая форма, разные значения: riso (рис) / riso (смех).", why: "Они часто возникают из разных латинских слов, которые, меняясь веками, стали одинаковыми: <i>oryza</i> → riso (рис), <i>risus</i> → riso (смех)." },
        { id: "formazione", label: "Словообразование", x: 75, y: 30, color: "#dc2626", html: "Из исходного слова создаются производные, изменённые и составные.", why: "Это самый экономичный способ создавать новые слова: вместо того чтобы придумывать новые звуки, пересобирают уже известные кусочки, которые все понимают." },
        { id: "radice", label: "Корень", x: 60, y: 56, color: "#f59e0b", html: "Часть слова, несущая значение.", why: "Многие итальянские корни происходят из латыни (а некоторые из греческого): знание их помогает понимать целые семьи слов." },
        { id: "affissi", label: "Приставки и суффиксы", x: 85, y: 56, color: "#a855f7", html: "Приставка перед корнем, суффикс после.", why: "Многие были самостоятельными латинскими словами (<i>sub</i> = под, <i>super</i> = над, <i>re-</i> = снова), которые «приклеились» к другим словам." },
        { id: "famiglia", label: "Семья слов", x: 60, y: 82, color: "#0ea5e9", html: "Все слова с одним корнем: mare, marino, marinaio…", why: "Как в настоящей семье, у них есть общий «предок»: исходное слово." },
        { id: "alterati", label: "Изменённые и составные", x: 88, y: 82, color: "#ec4899", html: "Изменённые: gattino, librone, tempaccio. Составные: arcobaleno, apriscatole.", why: "Изменённые слова не создают нового предмета, а добавляют идею размера или эмоцию; составные соединяют два значения в одно." },
        { id: "dizionario", label: "Словарь", x: 22, y: 82, color: "#64748b", html: "Книга (или приложение), которая собирает и объясняет слова.", why: "Первый большой итальянский словарь — словарь Академии Круска (1612). Сегодня словари бывают и цифровыми и каждый год пополняются новыми словами." }
      ],
      edges: [
        ["lessico", "significato", "изучается через"],
        ["lessico", "formazione", "растёт благодаря"],
        ["significato", "sinonimi", ""],
        ["significato", "omonimi", ""],
        ["formazione", "radice", "начинается с"],
        ["formazione", "affissi", "использует"],
        ["radice", "famiglia", "создаёт"],
        ["affissi", "alterati", "создают"],
        ["lessico", "dizionario", "собрана в"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: изменённые слова и приставки",
      questions: [
        { type: "mc", q: "«Ventaccio» — это существительное…", options: ["уменьшительное", "увеличительное", "уничижительное"], answer: 2, explain: "Суффикс -accio означает что-то плохое или неприятное: уничижительное." },
        { type: "mc", q: "Какое слово составное?", options: ["portafoglio", "fogliolina", "sfogliare"], answer: 0, explain: "Porta + foglio: два соединённых слова (бумажник)." },
        { type: "mc", q: "Антоним слова «possibile» (возможный) образуется с помощью приставки…", options: ["dis-", "im-", "s-"], answer: 1, explain: "Im-possibile (перед p и b «in-» превращается в «im-»)." }
      ]
    }
  ],
  glossary: [
    { t: "Лексика (lessico)", d: "Совокупность слов языка или человека." },
    { t: "Синонимы", d: "Слова с одинаковым или похожим значением." },
    { t: "Антонимы (contrari)", d: "Слова с противоположным значением." },
    { t: "Омонимы", d: "Слова, одинаковые по форме, но с разными значениями." },
    { t: "Исходное слово (parola primitiva)", d: "Слово, не происходящее от других итальянских слов (mare, fiore)." },
    { t: "Производное слово (parola derivata)", d: "Слово, образованное из исходного с помощью приставок или суффиксов (marinaio)." },
    { t: "Приставка (prefisso)", d: "Элемент перед корнем, изменяющий его значение (ri-, in-, pre-)." },
    { t: "Суффикс (suffisso)", d: "Элемент после корня для образования новых слов (-aio, -tore, -ezza)." },
    { t: "Изменённое существительное (nome alterato)", d: "Существительное, изменённое суффиксом: уменьшительное, увеличительное, ласкательное, уничижительное." },
    { t: "Составное существительное (nome composto)", d: "Существительное, образованное из двух соединённых слов (arcobaleno)." },
    { t: "Заимствование (prestito)", d: "Слово, взятое из другого языка (computer, zucchero)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Какое слово — синоним слова «iniziare» (начинать)?", options: ["finire", "cominciare", "continuare"], answer: 1, explain: "Iniziare и cominciare имеют одно и то же значение." },
      { type: "mc", q: "Какой антоним у слова «coraggioso» (храбрый)?", options: ["pauroso", "forte", "audace"], answer: 0, explain: "Pauroso (трусливый) — противоположность coraggioso; audace (смелый) — синоним." },
      { type: "tf", q: "«Riso» (злак) и «riso» (смех) — омонимы.", answer: true, explain: "Одинаковая форма, разные значения." },
      { type: "mc", q: "В слове «giocatore» элемент «-tore» — это…", options: ["приставка", "суффикс", "корень"], answer: 1, explain: "Он стоит после корня и указывает на того, кто совершает действие." },
      { type: "mc", q: "Какое из этих слов исходное (primitiva)?", options: ["pane", "panettiere", "panino"], answer: 0, explain: "Pane (хлеб) — исходное слово; panettiere и panino происходят от pane." },
      { type: "mc", q: "«Casetta» — это существительное…", options: ["увеличительное", "уменьшительное", "составное"], answer: 1, explain: "Суффикс -etta означает что-то маленькое." },
      { type: "text", q: "Как называется элемент, который ставится ПЕРЕД корнем (например, «ri-» в «rifare»)?", answer: ["приставка", "префикс", "prefisso", "il prefisso", "un prefisso"], explain: "Приставка (prefisso)." },
      { type: "tf", q: "«Mattone» — увеличительное от «matto».", answer: false, explain: "Это ложное изменённое слово: у mattone (кирпич) своё собственное значение." },
      { type: "mc", q: "Какое слово НЕ относится к семье слова «terra» (земля)?", options: ["terreno", "atterrare", "terrazza", "termometro"], answer: 3, explain: "«Termometro» происходит от греческого «thermós» (тёплый), а не от terra." },
      { type: "num", q: "По Туллио Де Мауро, примерно сколько слов составляют базовый словарь итальянского языка?", answer: 7000, tol: 500, explain: "Около 7000 слов." },
      { type: "mc", q: "В каком году вышел первый Словарь Академии Круска?", options: ["1312", "1612", "1912"], answer: 1, explain: "В 1612 году, в Венеции." },
      { type: "order", q: "Расставь от наименее интенсивного к наиболее интенсивному.", items: ["tiepido", "caldo", "bollente"], explain: "Tiepido < caldo < bollente: это шкала интенсивности." }
    ]
  }
});
