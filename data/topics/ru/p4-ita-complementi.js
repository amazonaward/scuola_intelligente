TOPIC('ru', {
  id: "p4-ita-complementi",
  title: "Дополнения (I complementi)",
  intro: "\"Giulia mangia.\" (Джулия ест.) Это правильное предложение, но оно мало что рассказывает. <i>Что</i> она ест? <i>С кем? Где? Когда?</i> Слова, которые отвечают на эти вопросы, называются <b>complementi</b> (дополнения): они «дополняют» предложение. Мы изучим <b>прямое дополнение (complemento oggetto)</b> и основные <b>косвенные дополнения (complementi indiretti)</b>.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "Минимальное предложение и распространители",
      html: `<p>У каждого предложения есть «сердце» — <b>минимальное предложение (frase minima)</b>, которое состоит из:</p>
<ul>
<li><b>подлежащего (soggetto)</b> (кто совершает действие или о ком говорят): <i><b>Giulia</b> mangia.</i></li>
<li><b>сказуемого (predicato)</b> (что говорится о подлежащем): <i>Giulia <b>mangia</b>.</i></li>
</ul>
<p>Всё, что мы добавляем, чтобы обогатить предложение, — это <b>распространители (espansioni)</b>. Многие распространители называются <b>complementi</b> (дополнения), от латинского <i>complere</i>, «наполнять, дополнять».</p>
<p><i>Giulia mangia <b>una mela</b> <b>con Marco</b> <b>in giardino</b> <b>alle quattro</b>.</i> (Джулия ест яблоко с Марко в саду в четыре часа.)</p>
<p>Чтобы узнать дополнение, задают <b>вопрос</b> к сказуемому. Каждое дополнение отвечает на свой вопрос!</p>`
    },
    {
      type: "svg",
      title: "Паровозик предложения",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<line x1="10" y1="225" x2="590" y2="225" stroke="#78350f" stroke-width="5"/>
<rect x="20" y="120" width="105" height="85" rx="10" fill="#ef4444" stroke="#7f1d1d" stroke-width="3"/>
<rect x="40" y="90" width="30" height="30" fill="#7f1d1d"/>
<text x="72" y="160" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">Giulia</text>
<text x="72" y="185" font-size="13" text-anchor="middle" fill="#ffffff">подлежащее</text>
<rect x="135" y="120" width="105" height="85" rx="10" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
<text x="187" y="160" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">mangia</text>
<text x="187" y="185" font-size="13" text-anchor="middle" fill="#ffffff">сказуемое</text>
<rect x="250" y="120" width="105" height="85" rx="10" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
<text x="302" y="160" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">una mela</text>
<text x="302" y="185" font-size="13" text-anchor="middle" fill="#1f2937">прям. доп.</text>
<rect x="365" y="120" width="105" height="85" rx="10" fill="#22c55e" stroke="#14532d" stroke-width="3"/>
<text x="417" y="160" font-size="17" text-anchor="middle" fill="#1f2937" font-weight="bold">con Marco</text>
<text x="417" y="185" font-size="13" text-anchor="middle" fill="#1f2937">доп. совместности</text>
<rect x="480" y="120" width="105" height="85" rx="10" fill="#a855f7" stroke="#581c87" stroke-width="3"/>
<text x="532" y="160" font-size="16" text-anchor="middle" fill="#ffffff" font-weight="bold">in giardino</text>
<text x="532" y="185" font-size="13" text-anchor="middle" fill="#ffffff">доп. места</text>
<g fill="#1f2937"><circle cx="50" cy="215" r="12"/><circle cx="100" cy="215" r="12"/><circle cx="165" cy="215" r="12"/><circle cx="215" cy="215" r="12"/><circle cx="280" cy="215" r="12"/><circle cx="330" cy="215" r="12"/><circle cx="395" cy="215" r="12"/><circle cx="445" cy="215" r="12"/><circle cx="510" cy="215" r="12"/><circle cx="560" cy="215" r="12"/></g>
<text x="130" y="50" font-size="20" text-anchor="middle" fill="#b91c1c" font-weight="bold">МИНИМАЛЬНОЕ ПРЕДЛОЖЕНИЕ</text>
<path d="M25 65 L235 65" stroke="#b91c1c" stroke-width="4"/>
<text x="418" y="50" font-size="20" text-anchor="middle" fill="#15803d" font-weight="bold">ДОПОЛНЕНИЯ (распространители)</text>
<path d="M255 65 L585 65" stroke="#15803d" stroke-width="4"/>
<text x="300" y="270" font-size="17" text-anchor="middle" fill="#1f2937">Локомотива и первого вагона хватает, чтобы получился поезд; остальные вагоны его обогащают.</text>
</svg>`,
      caption: "Подлежащее и сказуемое — это минимальное предложение; дополнения — присоединённые вагоны."
    },
    {
      type: "text",
      title: "Шаг 1 – Прямое дополнение (complemento oggetto)",
      html: `<p><b>Complemento oggetto</b> (прямое дополнение) обозначает человека, животное или предмет, на которые <b>прямо переходит действие</b> подлежащего.</p>
<p>Оно отвечает на вопрос <b>кого? что?</b>, заданный после глагола.</p>
<ul>
<li><i>Il cane rosicchia <b>un osso</b>.</i> (Собака грызёт кость.) → грызёт что? → un osso.</li>
<li><i>La nonna abbraccia <b>i nipoti</b>.</i> (Бабушка обнимает внуков.) → обнимает кого? → i nipoti.</li>
</ul>
<p>Оно называется <b>прямым</b>, потому что связывается с глаголом <b>без предлога</b>. Его могут иметь только <b>переходные глаголы (verbi transitivi)</b> (mangiare, leggere, guardare…), то есть те, в которых действие «переходит» (от латинского <i>transire</i>) от подлежащего к объекту. Непереходные глаголы (dormire, andare, correre) прямого дополнения не имеют.</p>
<p>⚠️ Не путай его с подлежащим: <i><b>Il gatto</b> insegue <u>il topo</u></i> (Кот гонится за мышью). Кто совершает действие? Il gatto (подлежащее). На кого оно направлено? Il topo (дополнение).</p>`
    },
    {
      type: "text",
      title: "Шаг 2 – Косвенные дополнения (complementi indiretti)",
      html: `<p><b>Косвенные дополнения</b> связываются с глаголом (или с существительным) <b>с помощью предлога</b> (di, a, da, in, con, su, per, tra, fra, в том числе слитные: del, al, nella…).</p>
<table>
<tr><th>Дополнение</th><th>Вопрос</th><th>Пример</th></tr>
<tr><td><b>di specificazione</b> (определяющее)</td><td>чей? чего?</td><td>il libro <b>di Anna</b> (книга Анны)</td></tr>
<tr><td><b>di termine</b> (адресат)</td><td>кому? чему?</td><td>scrivo <b>alla nonna</b> (пишу бабушке)</td></tr>
<tr><td><b>di luogo</b> (места)</td><td>где? откуда? куда? через что?</td><td>vado <b>a scuola</b> (иду в школу), vengo <b>da Roma</b> (приезжаю из Рима)</td></tr>
<tr><td><b>di tempo</b> (времени)</td><td>когда? как долго?</td><td>parto <b>alle otto</b> (уезжаю в восемь), dormo <b>per dieci ore</b> (сплю десять часов)</td></tr>
<tr><td><b>di compagnia / unione</b> (совместности / соединения)</td><td>с кем? с чем?</td><td>gioco <b>con Luca</b> (играю с Лукой), pane <b>con il burro</b> (хлеб с маслом)</td></tr>
<tr><td><b>di mezzo</b> (средства)</td><td>с помощью чего? чем?</td><td>vado <b>in bici</b> (еду на велосипеде), scrivo <b>con la penna</b> (пишу ручкой)</td></tr>
<tr><td><b>di modo</b> (образа действия)</td><td>как? каким образом?</td><td>parla <b>a bassa voce</b> (говорит тихо), corre <b>con allegria</b> (бежит весело)</td></tr>
<tr><td><b>di causa</b> (причины)</td><td>почему? по какой причине?</td><td>trema <b>dal freddo</b> (дрожит от холода), piange <b>per la paura</b> (плачет от страха)</td></tr>
<tr><td><b>di fine</b> (цели)</td><td>с какой целью?</td><td>esco <b>per una passeggiata</b> (выхожу на прогулку)</td></tr>
<tr><td><b>d'agente</b> (деятеля)</td><td>кем? (с глаголом в страдательном залоге)</td><td>il topo è inseguito <b>dal gatto</b> (мышь преследуется котом)</td></tr>
</table>`
    },
    {
      type: "quiz",
      title: "Мини-тест: прямое или косвенное?",
      questions: [
        { type: "mc", q: "\"Paolo legge <b>un fumetto</b>.\" Какое это дополнение?", options: ["Oggetto", "Di specificazione", "Di termine"], answer: 0, explain: "Читает что? Un fumetto (комикс): complemento oggetto, без предлога." },
        { type: "mc", q: "\"Regalo un fiore <b>alla mamma</b>.\" Какое это дополнение?", options: ["Di luogo", "Di termine", "Oggetto"], answer: 1, explain: "Кому? Alla mamma (маме): complemento di termine." },
        { type: "tf", q: "Косвенные дополнения вводятся предлогом.", answer: true, explain: "Di, a, da, in, con, su, per, tra, fra (в том числе слитные)." }
      ]
    },
    {
      type: "text",
      title: "Шаг 3 – Дополнение места (четыре вопроса)",
      html: `<p>Дополнение места особенное: оно отвечает на <b>четыре разных вопроса</b>.</p>
<ul>
<li><b>Stato in luogo</b> (нахождение в месте) – <i>где?</i> (стоишь на месте): <i>Sono <b>in classe</b>.</i> (Я в классе.)</li>
<li><b>Moto a luogo</b> (движение к месту) – <i>куда?</i> (идёшь): <i>Vado <b>al mare</b>.</i> (Еду на море.)</li>
<li><b>Moto da luogo</b> (движение из места) – <i>откуда?</i> (отправляешься): <i>Esco <b>dalla palestra</b>.</i> (Выхожу из спортзала.)</li>
<li><b>Moto per luogo</b> (движение через место) – <i>через что?</i> (проходишь): <i>Passo <b>per il bosco</b>.</i> (Прохожу через лес.)</li>
</ul>
<p>⚠️ Предлог <b>da</b> может обмануть: <i>Vado <b>dal</b> dentista</i> (иду к зубному врачу) — это <b>moto a luogo</b> (иду к)! Поэтому <b>всегда нужен вопрос</b>, а не только предлог.</p>`
    },
    {
      type: "svg",
      title: "Четыре дополнения места",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#eff6ff"/>
<rect x="230" y="70" width="140" height="120" fill="#fde68a" stroke="#92400e" stroke-width="4"/>
<polygon points="220,70 300,20 380,70" fill="#dc2626" stroke="#7f1d1d" stroke-width="4"/>
<text x="300" y="215" font-size="18" text-anchor="middle" fill="#92400e" font-weight="bold">дом (casa)</text>
<circle cx="300" cy="140" r="16" fill="#2563eb"/>
<text x="300" y="112" font-size="16" text-anchor="middle" fill="#1d4ed8" font-weight="bold">STATO</text>
<circle cx="70" cy="140" r="16" fill="#16a34a"/>
<path d="M95 140 L215 140" stroke="#16a34a" stroke-width="5" marker-end="url(#m1)"/>
<text x="150" y="125" font-size="16" text-anchor="middle" fill="#15803d" font-weight="bold">MOTO A</text>
<circle cx="530" cy="140" r="16" fill="#ea580c"/>
<path d="M385 140 L505 140" stroke="#ea580c" stroke-width="5" marker-end="url(#m2)"/>
<text x="450" y="125" font-size="16" text-anchor="middle" fill="#c2410c" font-weight="bold">MOTO DA</text>
<path d="M100 255 Q300 225 500 255" stroke="#7c3aed" stroke-width="5" fill="none" stroke-dasharray="10 6" marker-end="url(#m3)"/>
<text x="300" y="268" font-size="16" text-anchor="middle" fill="#6d28d9" font-weight="bold">MOTO PER (через)</text>
<defs>
<marker id="m1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#16a34a"/></marker>
<marker id="m2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#ea580c"/></marker>
<marker id="m3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 Z" fill="#7c3aed"/></marker>
</defs>
</svg>`,
      caption: "Находиться в доме, идти к дому, выходить из дома, проходить через какое-то место."
    },
    {
      type: "example",
      title: "Пример на практике: логический разбор по шагам",
      html: `<p>Предложение: <i>\"Domenica Martina porta una torta alla nonna in bicicletta.\"</i> (В воскресенье Мартина везёт бабушке торт на велосипеде.)</p>
<ol>
<li>Найди <b>сказуемое</b> (глагол): <b>porta</b>.</li>
<li>Кто везёт? → <b>Martina</b> = подлежащее.</li>
<li>Везёт что? → <b>una torta</b> = прямое дополнение.</li>
<li>Кому? → <b>alla nonna</b> = complemento di termine.</li>
<li>На чём? → <b>in bicicletta</b> = complemento di mezzo.</li>
<li>Когда? → <b>domenica</b> = complemento di tempo (без предлога!).</li>
</ol>
<p>Видишь? Даже у косвенного дополнения иногда может не быть предлога: <i>domenica, ieri sera</i>. И снова важен именно <b>вопрос</b>.</p>`
    },
    {
      type: "example",
      title: "Пример на практике: обогащаем предложение",
      html: `<p>Начни с минимального предложения и добавляй по одному дополнению:</p>
<ul>
<li><i>Il pescatore pesca.</i> (Рыбак ловит.)</li>
<li>+ прямое дополнение → <i>Il pescatore pesca <b>un pesce</b>.</i></li>
<li>+ определяющее → <i>Il pescatore <b>del paese</b> pesca un pesce.</i></li>
<li>+ место → <i>… pesca un pesce <b>nel lago</b>.</i></li>
<li>+ средство → <i>… <b>con la canna</b>.</i></li>
<li>+ время → <i>… <b>all'alba</b>.</i></li>
</ul>
<p>Результат: <i>All'alba il pescatore del paese pesca un pesce nel lago con la canna.</i> (На рассвете деревенский рыбак ловит рыбу в озере удочкой.) Точное предложение, как фотография!</p>`
    },
    {
      type: "widget",
      title: "Игра: какое это дополнение?",
      widget: "classify",
      options: {
        groups: ["Oggetto (прямое)", "Specificazione (определяющее)", "Termine (адресат)", "Luogo (места)", "Tempo (времени)", "Mezzo (средства)"],
        items: [
          ["Leggo <b>una storia</b>", 0], ["Guardo <b>le stelle</b>", 0],
          ["La coda <b>del gatto</b>", 1], ["Il profumo <b>dei fiori</b>", 1],
          ["Telefono <b>a Luca</b>", 2], ["Do l'acqua <b>alle piante</b>", 2],
          ["Abito <b>a Torino</b>", 3], ["Torno <b>dalla piscina</b>", 3],
          ["Arrivo <b>alle sette</b>", 4], ["<b>In estate</b> fa caldo", 4],
          ["Viaggio <b>in treno</b>", 5], ["Scrivo <b>con la matita</b>", 5]
        ]
      },
      caption: "Задай глаголу правильный вопрос и положи выделенное жирным дополнение в его коробку."
    },
    {
      type: "curiosity",
      title: "А ты знал? В латыни не использовали предлоги",
      html: `<p>В <b>латыни</b> многие дополнения образовывались <b>изменением окончания слова</b>, без предлогов: это были <b>падежи</b>. <i>Rosa</i> (подлежащее), <i>rosam</i> (прямое дополнение), <i>rosae</i> (определяющее или адресат: «розы», «розе»), <i>rosā</i> (средство: «розой»).</p>
<p>Итальянский потерял почти все падежи и заменил их <b>предлогами</b> и <b>порядком слов</b>. Поэтому у нас так важно, кто стоит перед глаголом! А вот в немецком, русском и румынском падежи сохранились.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знал? Название для разбора",
      html: `<p>Упражнение — найти подлежащее, сказуемое и дополнения — в Италии называется <b>analisi logica</b> (логический разбор). В итальянских школах его делают больше ста лет! В других странах, например в Англии, делают похожие упражнения под названием <i>sentence diagramming</i>: предложения превращаются в рисунки с линиями и ветками, как дерево.</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li><b>Минимальное предложение</b> = подлежащее + сказуемое. Всё остальное — <b>распространители</b>.</li>
<li><b>Прямое дополнение (complemento oggetto)</b>: кого? что? – <b>без предлога</b>, только с переходными глаголами.</li>
<li><b>Косвенные дополнения</b>: обычно вводятся <b>предлогом</b>.</li>
<li>Specificazione (чей?), termine (кому?), luogo (где?), tempo (когда?), compagnia (с кем?), mezzo (чем?), modo (как?), causa (почему?), fine (с какой целью?).</li>
<li>Чтобы их распознать, всегда задавай глаголу <b>вопрос</b>: один предлог может обмануть.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять дополнения",
      intro: "Если таблица тебя запутала, попробуй эти пути: любопытный журналист, цвета, схема-дерево и карточки.",
      tabs: [
        {
          label: "🎤 Любопытный журналист",
          html: `<p>Представь, что ты <b>журналист</b>, который берёт интервью у глагола. Каждый твой вопрос «вылавливает» дополнение:</p>
<p>Предложение: <i>Ieri i pompieri hanno salvato un gattino sul tetto con una scala.</i> (Вчера пожарные спасли котёнка на крыше с помощью лестницы.)</p>
<ul>
<li>🎤 Кто спас? → <b>i pompieri</b> (подлежащее)</li>
<li>🎤 Кого спасли? → <b>un gattino</b> (прямое дополнение)</li>
<li>🎤 Где? → <b>sul tetto</b> (нахождение в месте)</li>
<li>🎤 С помощью чего? → <b>con una scala</b> (средство)</li>
<li>🎤 Когда? → <b>ieri</b> (время)</li>
</ul>
<p>У английских журналистов есть правило <b>5 W</b>: <i>Who, What, Where, When, Why</i> (кто, что, где, когда, почему). Это как раз вопросы к дополнениям!</p>`
        },
        {
          label: "🎨 Подчёркиваем цветами",
          html: `<p>Используй <b>свой цвет</b> для каждой роли. Так глаз сразу видит структуру предложения:</p>`,
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#ffffff"/>
<text x="20" y="60" font-size="26" fill="#1f2937">Luca</text>
<line x1="20" y1="70" x2="75" y2="70" stroke="#ef4444" stroke-width="5"/>
<text x="85" y="60" font-size="26" fill="#1f2937">regala</text>
<line x1="85" y1="70" x2="165" y2="70" stroke="#2563eb" stroke-width="5"/>
<line x1="85" y1="77" x2="165" y2="77" stroke="#2563eb" stroke-width="5"/>
<text x="175" y="60" font-size="26" fill="#1f2937">un libro</text>
<line x1="175" y1="70" x2="275" y2="70" stroke="#f59e0b" stroke-width="5" stroke-dasharray="10 5"/>
<text x="285" y="60" font-size="26" fill="#1f2937">alla sorella</text>
<line x1="285" y1="70" x2="425" y2="70" stroke="#16a34a" stroke-width="5"/>
<text x="435" y="60" font-size="26" fill="#1f2937">a Natale.</text>
<line x1="435" y1="70" x2="545" y2="70" stroke="#a855f7" stroke-width="5"/>
<rect x="20" y="110" width="20" height="20" fill="#ef4444"/><text x="48" y="127" font-size="17" fill="#1f2937">подлежащее</text>
<rect x="160" y="110" width="20" height="20" fill="#2563eb"/><text x="188" y="127" font-size="17" fill="#1f2937">сказуемое</text>
<rect x="300" y="110" width="20" height="20" fill="#f59e0b"/><text x="328" y="127" font-size="17" fill="#1f2937">прямое дополнение</text>
<rect x="20" y="150" width="20" height="20" fill="#16a34a"/><text x="48" y="167" font-size="17" fill="#1f2937">доп. адресата (di termine)</text>
<rect x="260" y="150" width="20" height="20" fill="#a855f7"/><text x="288" y="167" font-size="17" fill="#1f2937">доп. времени (di tempo)</text>
</svg>`
        },
        {
          label: "🌳 Схема-дерево",
          html: `<p>Во многих странах предложение рисуют как <b>дерево</b>: <b>сказуемое</b> — это ствол, от которого отходят ветки. Подлежащее и дополнения подвешены к глаголу, каждое со своей табличкой-вопросом.</p>
<p>Этот метод, который называют также <b>валентной грамматикой (grammatica valenziale)</b>, говорит, что каждому глаголу нужно определённое число «кусочков», чтобы иметь смысл: <i>dormire</i> (спать) требует 1 (кто спит), <i>mangiare</i> (есть) — 2 (кто и что), <i>regalare</i> (дарить) — 3 (кто, что, кому). Остальные дополнения — необязательные ветки. Его предложил французский лингвист <b>Люсьен Теньер (Lucien Tesnière)</b> (его книга вышла в 1959 году), и сегодня им пользуются многие итальянские школьные учебники.</p>`,
          svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="250" fill="#f0fdf4"/>
<ellipse cx="300" cy="60" rx="80" ry="32" fill="#2563eb"/>
<text x="300" y="68" font-size="24" text-anchor="middle" fill="#ffffff" font-weight="bold">regala</text>
<g stroke="#78350f" stroke-width="5"><line x1="250" y1="85" x2="90" y2="170"/><line x1="290" y1="92" x2="240" y2="170"/><line x1="315" y1="92" x2="380" y2="170"/><line x1="350" y1="85" x2="520" y2="170"/></g>
<rect x="25" y="170" width="130" height="50" rx="10" fill="#fecaca" stroke="#ef4444" stroke-width="3"/><text x="90" y="202" font-size="18" text-anchor="middle">Luca (кто?)</text>
<rect x="170" y="170" width="140" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/><text x="240" y="202" font-size="17" text-anchor="middle">un libro (что?)</text>
<rect x="320" y="170" width="130" height="50" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/><text x="385" y="202" font-size="16" text-anchor="middle">alla sorella (кому?)</text>
<rect x="460" y="170" width="125" height="50" rx="10" fill="#f3e8ff" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/><text x="522" y="202" font-size="16" text-anchor="middle">a Natale</text>
<text x="522" y="240" font-size="13" text-anchor="middle" fill="#6b21a8">необязательная ветка</text>
</svg>`
        },
        {
          label: "🃏 Соедини вопрос и дополнение",
          html: `<p>У каждого дополнения есть свой вопрос. Соедини их!</p>`,
          widget: "match",
          options: {
            pairs: [
              ["chi? che cosa? (кого? что?)", "complemento oggetto (прямое дополнение)"],
              ["di chi? di che cosa? (чей? чего?)", "specificazione (определяющее)"],
              ["a chi? a che cosa? (кому? чему?)", "termine (адресат)"],
              ["con chi? (с кем?)", "compagnia (совместность)"],
              ["con che mezzo? (чем?)", "mezzo (средство)"],
              ["perché? per quale causa? (почему?)", "causa (причина)"],
              ["come? in che modo? (как?)", "modo (образ действия)"]
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта дополнений",
      nodes: [
        { id: "frase", label: "Предложение (Frase)", x: 50, y: 6, color: "#2563eb", html: "Набор слов с законченным смыслом, организованный вокруг глагола.", why: "Без глагола (сказуемого) нет предложения: именно глагол «призывает» остальные элементы. Это идея валентной грамматики Люсьена Теньера (1959)." },
        { id: "minima", label: "Минимальное предложение", x: 22, y: 28, color: "#ef4444", html: "Подлежащее + сказуемое: <i>Il sole splende.</i> (Солнце светит.)", why: "Это минимум, необходимый, чтобы сказать что-то о ком-то. Уже Аристотель (IV век до н. э.) различал то, о чём говорят (подлежащее), и то, что об этом говорят (сказуемое)." },
        { id: "espansioni", label: "Распространители / дополнения", x: 75, y: 28, color: "#16a34a", html: "Слова, которые обогащают минимальное предложение дополнительной информацией.", why: "Название происходит от латинского <i>complementum</i>, «то, что дополняет». Список дополнений, которым мы пользуемся в школе, происходит от латинских грамматик, которые классифицировали значения падежей." },
        { id: "oggetto", label: "Прямое дополнение", x: 50, y: 52, color: "#f59e0b", html: "Прямо принимает действие; отвечает на вопрос кого? что?; без предлога.", why: "Оно «прямое», потому что связывается с глаголом без «мостов» (предлогов). В латыни это был <b>винительный падеж (accusativo)</b>. Оно есть только у переходных глаголов, где действие «переходит» (по-латыни <i>transire</i>) от подлежащего к дополнению." },
        { id: "indiretti", label: "Косвенные дополнения", x: 82, y: 52, color: "#a855f7", html: "Связаны с глаголом или с существительным предлогом.", why: "Когда итальянский потерял латинские падежи (начиная с V–VI века), их место заняли предлоги: <i>rosae</i> → «della rosa», «alla rosa»." },
        { id: "luogo", label: "Место (Luogo)", x: 64, y: 78, color: "#0ea5e9", html: "Нахождение в месте, движение к месту, движение из места, движение через место.", why: "Наше тело перемещается в пространстве четырьмя способами: стоит на месте, идёт к, отправляется из, проходит через. Язык различает все четыре." },
        { id: "spec-term", label: "Определяющее и адресат", x: 92, y: 78, color: "#14b8a6", html: "Чей? (il libro di Anna) – Кому? (scrivo ad Anna).", why: "Соответствуют латинским падежам <b>родительному (genitivo)</b> («di») и <b>дательному (dativo)</b> («a», от <i>dare</i>: тому, кому что-то дают)." },
        { id: "domanda", label: "Вопрос", x: 22, y: 78, color: "#64748b", html: "Инструмент для распознавания каждого дополнения.", why: "Один и тот же предлог может вводить разные дополнения (<i>da Roma</i> = движение из места; <i>dal dentista</i> = движение к месту). Только <b>смысл</b>, найденный с помощью вопроса, говорит нам, какое это дополнение." }
      ],
      edges: [
        ["frase", "minima", "ядро"],
        ["frase", "espansioni", "обогащается через"],
        ["espansioni", "oggetto", "прямое"],
        ["espansioni", "indiretti", "с предлогом"],
        ["indiretti", "luogo", ""],
        ["indiretti", "spec-term", ""],
        ["minima", "domanda", "разбирается с помощью"],
        ["domanda", "oggetto", "кого? что?"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: место, время, средство",
      questions: [
        { type: "mc", q: "\"Esco <b>dal cinema</b>.\" Какое это дополнение?", options: ["Moto a luogo", "Moto da luogo", "Stato in luogo"], answer: 1, explain: "Откуда выхожу? Dal cinema (из кинотеатра): moto da luogo." },
        { type: "mc", q: "\"Vado <b>dal parrucchiere</b>.\" Какое это дополнение?", options: ["Moto da luogo", "Moto a luogo", "D'agente"], answer: 1, explain: "Куда иду? Dal parrucchiere (к парикмахеру): moto a luogo, хотя здесь есть \"da\"." },
        { type: "mc", q: "\"Tremavo <b>dal freddo</b>.\" Какое это дополнение?", options: ["Causa", "Luogo", "Modo"], answer: 0, explain: "Почему дрожал? От холода: complemento di causa." }
      ]
    }
  ],
  glossary: [
    { t: "Frase minima (минимальное предложение)", d: "Предложение, состоящее только из подлежащего и сказуемого." },
    { t: "Espansione (распространитель)", d: "Любое слово или группа слов, которые обогащают минимальное предложение." },
    { t: "Complemento (дополнение)", d: "Распространитель, который дополняет значение сказуемого или другого элемента." },
    { t: "Complemento oggetto (прямое дополнение)", d: "Показывает, на кого или на что прямо переходит действие; без предлога." },
    { t: "Verbo transitivo (переходный глагол)", d: "Глагол, который может иметь прямое дополнение (например, leggere, mangiare)." },
    { t: "Complemento indiretto (косвенное дополнение)", d: "Дополнение, вводимое предлогом." },
    { t: "Preposizione (предлог)", d: "Неизменяемое слово, которое связывает: di, a, da, in, con, su, per, tra, fra." },
    { t: "Analisi logica (логический разбор)", d: "Упражнение: найти в предложении подлежащее, сказуемое и дополнения." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Минимальное предложение состоит из…", options: ["подлежащего и прямого дополнения", "подлежащего и сказуемого", "сказуемого и дополнений"], answer: 1, explain: "Подлежащее + сказуемое." },
      { type: "mc", q: "\"Il bambino disegna <b>un drago</b>.\" Выделенное жирным дополнение — это…", options: ["oggetto", "di specificazione", "di mezzo"], answer: 0, explain: "Рисует что? Un drago (дракона)." },
      { type: "mc", q: "\"La bici <b>di Sofia</b> è rossa.\" Complemento di…", options: ["termine", "specificazione", "compagnia"], answer: 1, explain: "Чей? Di Sofia: specificazione." },
      { type: "mc", q: "\"Passeggiamo <b>per il centro</b>.\" Complemento di…", options: ["moto per luogo", "fine", "causa"], answer: 0, explain: "Через что? Per il centro (по центру): moto per luogo." },
      { type: "mc", q: "\"Gioco a carte <b>con il nonno</b>.\" Complemento di…", options: ["mezzo", "compagnia", "modo"], answer: 1, explain: "С кем? Con il nonno (с дедушкой): compagnia." },
      { type: "tf", q: "Прямое дополнение вводится предлогом.", answer: false, explain: "Оно прямое: связывается с глаголом без предлога." },
      { type: "tf", q: "Глагол \"dormire\" может иметь прямое дополнение.", answer: false, explain: "Dormire непереходный: нельзя спать «что-то»." },
      { type: "text", q: "На какой вопрос отвечает complemento di termine? (напиши \"a chi\" или «кому»)", answer: ["a chi", "a chi?", "a chi a che cosa", "a chi? a che cosa?", "кому", "кому?", "кому чему", "кому? чему?"], explain: "A chi? A che cosa? (Кому? Чему?)" },
      { type: "text", q: "\"Domani partiamo <b>in aereo</b>.\" Какое дополнение \"in aereo\"? (одно слово)", answer: ["mezzo", "di mezzo", "complemento di mezzo", "средство", "средства"], explain: "На чём? In aereo: complemento di mezzo." },
      { type: "order", q: "Расставь вопросы по порядку для логического разбора предложения.", items: ["Какой глагол? (сказуемое)", "Кто совершает действие? (подлежащее)", "Что? (прямое дополнение)", "Остальные вопросы (косвенные дополнения)"], explain: "Начинают со сказуемого, потом подлежащее, потом остальные элементы." },
      { type: "mc", q: "\"<b>D'inverno</b> nevica in montagna.\" \"D'inverno\" — complemento di…", options: ["luogo", "tempo", "specificazione"], answer: 1, explain: "Когда? D'inverno (зимой): tempo." },
      { type: "mc", q: "\"Scrivo una lettera <b>a Babbo Natale</b>.\" Complemento di…", options: ["termine", "moto a luogo", "oggetto"], answer: 0, explain: "Кому пишу? A Babbo Natale (Деду Морозу): termine." }
    ]
  }
});
