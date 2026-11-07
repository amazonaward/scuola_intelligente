TOPIC('ru', {
  id: "p5-mat-potenze-intro",
  title: "Степени",
  intro: "Как быстро записать 10 × 10 × 10 × 10 × 10 × 10? С помощью <b>степени</b>: 10<sup>6</sup>! Давай узнаем, что такое <b>основание</b> и <b>показатель</b>, как вычислять степени и почему <b>степени числа 10</b> так полезны для записи огромных чисел.",
  minutes: 30,
  sections: [
    {
      type: "text",
      title: "«Сокращённое» умножение",
      html: `<p>Когда ты умножаешь <b>одно и то же число</b> несколько раз само на себя, можно записать это коротко с помощью <b>степени</b>.</p>
<p>Пример: <b>2 × 2 × 2 × 2 = 2<sup>4</sup></b>, читается «два <b>в четвёртой степени</b>».</p>
<ul>
<li><b>Основание</b> (2) — это число, которое повторяется, то есть множитель.</li>
<li><b>Показатель</b> (4), записанный мелко вверху справа, говорит, <b>сколько раз</b> основание встречается как множитель.</li>
<li>Результат (16) тоже называется <b>степенью</b>.</li>
</ul>
<p>Осторожно, самая частая ошибка: 2<sup>4</sup> — это <b>не</b> 2 × 4 = 8! Это 2 × 2 × 2 × 2 = <b>16</b>.</p>`
    },
    {
      type: "svg",
      title: "Основание и показатель",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<text x="130" y="170" font-size="110" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text>
<text x="185" y="100" font-size="60" font-weight="bold" fill="#dc2626" text-anchor="middle">4</text>
<text x="300" y="150" font-size="44" fill="#1f2937" text-anchor="middle">=</text>
<text x="460" y="150" font-size="34" fill="#1f2937" text-anchor="middle"><tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan> × <tspan fill="#1d4ed8">3</tspan></text>
<text x="460" y="200" font-size="34" font-weight="bold" fill="#047857" text-anchor="middle">= 81</text>
<path d="M200 70 Q260 40 330 60" fill="none" stroke="#dc2626" stroke-width="3"/>
<text x="340" y="64" font-size="18" fill="#dc2626">показатель: сколько раз</text>
<path d="M120 190 Q130 240 180 255" fill="none" stroke="#1d4ed8" stroke-width="3"/>
<text x="190" y="262" font-size="18" fill="#1d4ed8">основание: число, которое повторяется</text>
<path d="M375 165 L545 165" stroke="#dc2626" stroke-width="3"/>
<text x="460" y="110" font-size="16" fill="#dc2626" text-anchor="middle">4 одинаковых множителя</text>
</svg>`,
      caption: "3⁴ читается «три в четвёртой степени»: основание 3 умножается само на себя 4 раза."
    },
    {
      type: "text",
      title: "Как читать и как вычислять",
      html: `<p>Вычисляют <b>шаг за шагом</b>, умножая результат на основание:</p>
<p>5<sup>3</sup> → 5 × 5 = 25 → 25 × 5 = <b>125</b></p>
<table>
<tr><th>Степень</th><th>Читается</th><th>Вычисление</th><th>Результат</th></tr>
<tr><td>4<sup>2</sup></td><td>четыре во второй степени (в <b>квадрате</b>)</td><td>4 × 4</td><td>16</td></tr>
<tr><td>2<sup>3</sup></td><td>два в третьей степени (в <b>кубе</b>)</td><td>2 × 2 × 2</td><td>8</td></tr>
<tr><td>3<sup>4</sup></td><td>три в четвёртой степени</td><td>3 × 3 × 3 × 3</td><td>81</td></tr>
<tr><td>2<sup>5</sup></td><td>два в пятой степени</td><td>2 × 2 × 2 × 2 × 2</td><td>32</td></tr>
</table>
<p>Два особых случая:</p>
<ul>
<li>с показателем <b>1</b> результат — само основание: 7<sup>1</sup> = 7;</li>
<li>с показателем <b>0</b> результат всегда <b>1</b> (если основание не 0): 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>
</ul>
<p>А если основание <b>1</b>? 1<sup>50</sup> = 1 × 1 × … × 1 = <b>1</b>!</p>`
    },
    {
      type: "3d",
      title: "Квадрат и куб в 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 × 3 × 3 = 3³ = 27 кубиков: поэтому показатель 3 называется «куб». Попробуй поставить высоту 1: увидишь квадрат из 3 × 3 = 3² = 9 кубиков, то есть «квадрат»."
    },
    {
      type: "quiz",
      title: "Мини-тест: основание и показатель",
      questions: [
        { type: "mc", q: "Какое основание у 6<sup>3</sup>?", options: ["3", "6", "18"], answer: 1, explain: "Основание — это большое число, которое повторяется: 6." },
        { type: "num", q: "Чему равно 2<sup>3</sup>?", answer: 8, explain: "2 × 2 × 2 = 8 (а не 2 × 3!)." },
        { type: "tf", q: "5<sup>2</sup> = 10", answer: false, explain: "5<sup>2</sup> = 5 × 5 = 25. 10 было бы 5 × 2." },
        { type: "num", q: "Чему равно 8<sup>0</sup>?", answer: 1, explain: "Любое число (кроме 0) в нулевой степени равно 1." }
      ]
    },
    {
      type: "text",
      title: "Степени числа 10",
      html: `<p>Самые удобные из всех степеней — те, у которых <b>основание 10</b>. Смотри:</p>
<table>
<tr><th>Степень</th><th>Число</th><th>Название</th></tr>
<tr><td>10<sup>0</sup></td><td>1</td><td>единица</td></tr>
<tr><td>10<sup>1</sup></td><td>10</td><td>десяток</td></tr>
<tr><td>10<sup>2</sup></td><td>100</td><td>сотня</td></tr>
<tr><td>10<sup>3</sup></td><td>1 000</td><td>тысяча</td></tr>
<tr><td>10<sup>6</sup></td><td>1 000 000</td><td>миллион</td></tr>
<tr><td>10<sup>9</sup></td><td>1 000 000 000</td><td>миллиард</td></tr>
</table>
<p>Волшебное правило: <b>показатель равен числу нулей</b> после единицы. 10<sup>5</sup> = 1 и 5 нулей = 100 000.</p>
<p>Каждый разряд нашей системы счисления равен степени числа 10: поэтому она называется <b>десятичной</b> (с основанием 10).</p>`
    },
    {
      type: "text",
      title: "Запись числа в виде суммы разрядных слагаемых",
      html: `<p>С помощью степеней числа 10 можно «разобрать» число на цифры. Это называется <b>разложением по разрядам</b> (<i>scomposizione polinomiale</i>):</p>
<p><b>4 352</b> = 4 × 1000 + 3 × 100 + 5 × 10 + 2 × 1</p>
<p><b>4 352</b> = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup></p>
<p>А гигантские числа записываются быстрее: расстояние от Земли до Солнца — около <b>150 000 000 км</b>, то есть <b>15 × 10<sup>7</sup> км</b> (учёные пишут 1,5 × 10<sup>8</sup> км).</p>`
    },
    {
      type: "widget",
      title: "Степени на абаке",
      widget: "abacus",
      options: { columns: ["uk", "h", "da", "u"], value: 4352 },
      caption: "Каждый стержень равен 10 стержням справа от него: е = 10⁰, д = 10¹, с = 10², т = 10³. Меняй шарики и записывай число в виде суммы разрядных слагаемых."
    },
    {
      type: "example",
      title: "Пример на практике: цепочка сообщений",
      html: `<p>Лука отправляет сообщение <b>3 друзьям</b>. Каждый отправляет его ещё 3, и так далее. Сколько человек получают его на каждом «круге»?</p>
<ul>
<li>1-й круг: 3 = <b>3<sup>1</sup></b></li>
<li>2-й круг: 3 × 3 = <b>3<sup>2</sup> = 9</b></li>
<li>3-й круг: 3 × 3 × 3 = <b>3<sup>3</sup> = 27</b></li>
<li>4-й круг: <b>3<sup>4</sup> = 81</b></li>
<li>10-й круг: <b>3<sup>10</sup> = 59 049</b> человек!</li>
</ul>
<p>Вот почему новости (даже ложные!) распространяются так быстро: они растут «степенью».</p>`
    },
    {
      type: "example",
      title: "Пример на практике: плитки и коробки",
      html: `<p>Пол в детской — квадрат, <b>8 плиток в стороне</b>. Сколько всего плиток? 8 × 8 = <b>8<sup>2</sup> = 64</b>.</p>
<p>На складе кубические коробки складывают так: <b>5</b> в длину, <b>5</b> в ширину и <b>5</b> в высоту. Сколько коробок? 5 × 5 × 5 = <b>5<sup>3</sup> = 125</b>.</p>
<p>Вот почему показатель 2 называется <b>квадрат</b>, а показатель 3 — <b>куб</b>!</p>`
    },
    {
      type: "svg",
      title: "Удвоение: 2¹, 2², 2³, 2⁴",
      svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#fefce8"/>
<g fill="#f97316" stroke="#9a3412" stroke-width="2">
<rect x="40" y="170" width="24" height="24"/><rect x="40" y="198" width="24" height="24"/>
<rect x="130" y="142" width="24" height="24"/><rect x="130" y="170" width="24" height="24"/><rect x="158" y="142" width="24" height="24"/><rect x="158" y="170" width="24" height="24"/>
</g>
<g fill="#22c55e" stroke="#166534" stroke-width="2">
<rect x="240" y="114" width="24" height="24"/><rect x="268" y="114" width="24" height="24"/>
<rect x="240" y="142" width="24" height="24"/><rect x="268" y="142" width="24" height="24"/>
<rect x="240" y="170" width="24" height="24"/><rect x="268" y="170" width="24" height="24"/>
<rect x="240" y="198" width="24" height="24"/><rect x="268" y="198" width="24" height="24"/>
</g>
<g fill="#3b82f6" stroke="#1e3a8a" stroke-width="2">
<rect x="360" y="114" width="24" height="24"/><rect x="388" y="114" width="24" height="24"/><rect x="416" y="114" width="24" height="24"/><rect x="444" y="114" width="24" height="24"/>
<rect x="360" y="142" width="24" height="24"/><rect x="388" y="142" width="24" height="24"/><rect x="416" y="142" width="24" height="24"/><rect x="444" y="142" width="24" height="24"/>
<rect x="360" y="170" width="24" height="24"/><rect x="388" y="170" width="24" height="24"/><rect x="416" y="170" width="24" height="24"/><rect x="444" y="170" width="24" height="24"/>
<rect x="360" y="198" width="24" height="24"/><rect x="388" y="198" width="24" height="24"/><rect x="416" y="198" width="24" height="24"/><rect x="444" y="198" width="24" height="24"/>
</g>
<text x="52" y="255" font-size="20" text-anchor="middle" font-weight="bold">2¹ = 2</text>
<text x="156" y="255" font-size="20" text-anchor="middle" font-weight="bold">2² = 4</text>
<text x="266" y="255" font-size="20" text-anchor="middle" font-weight="bold">2³ = 8</text>
<text x="414" y="255" font-size="20" text-anchor="middle" font-weight="bold">2⁴ = 16</text>
<text x="300" y="50" font-size="22" fill="#7c2d12" text-anchor="middle">Каждый раз, когда показатель растёт на 1, клеток становится вдвое больше</text>
<text x="540" y="180" font-size="26" fill="#7c2d12" text-anchor="middle">…2⁵ = 32</text>
</svg>`,
      caption: "Прибавить 1 к показателю значит ещё раз умножить на основание."
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Легенда о шахматах",
      html: `<p>Рассказывают, что изобретатель <b>шахмат</b> попросил у царя в награду: 1 зёрнышко риса на первой клетке, 2 на второй, 4 на третьей, 8 на четвёртой… удваивая вплоть до 64-й клетки. Царь рассмеялся: «Так мало?».</p>
<p>Но на последней клетке нужно было <b>2<sup>63</sup></b> зёрен: около <b>9 миллиардов миллиардов</b>! Намного больше риса, чем было выращено за всю историю человечества.</p>`
    },
    {
      type: "curiosity",
      title: "А ты знаешь, что…? Гугол",
      html: `<p>Число из 1 и <b>100 нулей</b>, то есть <b>10<sup>100</sup></b>, называется <b>гуголом</b>. Название придумал в 1938 году девятилетний мальчик Милтон Сирота, племянник математика Эдварда Каснера.</p>
<p>От него и произошло название компании <b>Google</b> (написанное немного с ошибкой!). Представь: атомов во всей видимой Вселенной «всего» около 10<sup>80</sup>.</p>`
    },
    {
      type: "remember",
      title: "Запомни",
      html: `<ul>
<li>Степень = умножение <b>одинаковых множителей</b>: a<sup>n</sup> = a × a × … × a (n раз).</li>
<li><b>Основание</b> = повторяющийся множитель; <b>показатель</b> = сколько раз.</li>
<li>Показатель 2 = <b>квадрат</b>; показатель 3 = <b>куб</b>.</li>
<li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (при a, не равном 0); 1<sup>n</sup> = 1.</li>
<li>10<sup>n</sup> = 1 и <b>n нулей</b>.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Другие способы понять степени",
      intro: "Если «основание» и «показатель» кажутся странными словами, попробуй один из этих путей: деревья, кубики, складывание бумаги или то, как их записывают в других странах.",
      tabs: [
        {
          label: "🌳 Дерево с ветвями",
          html: `<p>Представь дерево: ствол делится на <b>2 ветви</b>, каждая ветвь ещё на 2, и так далее.</p>
<ul>
<li>на 1-м уровне 2 ветви = 2<sup>1</sup>;</li>
<li>на 2-м уровне 4 веточки = 2<sup>2</sup>;</li>
<li>на 3-м уровне 8 веточек = 2<sup>3</sup>.</li>
</ul>
<p><b>Показатель</b> — это <b>номер уровня</b>, <b>основание</b> — это <b>на сколько частей делится</b> каждая ветвь.</p>`,
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="280" fill="#f0fdf4"/>
<g stroke="#78350f" stroke-width="6" fill="none">
<line x1="300" y1="270" x2="300" y2="220"/>
<line x1="300" y1="220" x2="180" y2="160"/><line x1="300" y1="220" x2="420" y2="160"/>
</g>
<g stroke="#92400e" stroke-width="4">
<line x1="180" y1="160" x2="120" y2="100"/><line x1="180" y1="160" x2="240" y2="100"/>
<line x1="420" y1="160" x2="360" y2="100"/><line x1="420" y1="160" x2="480" y2="100"/>
</g>
<g stroke="#16a34a" stroke-width="3">
<line x1="120" y1="100" x2="95" y2="45"/><line x1="120" y1="100" x2="145" y2="45"/>
<line x1="240" y1="100" x2="215" y2="45"/><line x1="240" y1="100" x2="265" y2="45"/>
<line x1="360" y1="100" x2="335" y2="45"/><line x1="360" y1="100" x2="385" y2="45"/>
<line x1="480" y1="100" x2="455" y2="45"/><line x1="480" y1="100" x2="505" y2="45"/>
</g>
<g fill="#22c55e"><circle cx="95" cy="40" r="9"/><circle cx="145" cy="40" r="9"/><circle cx="215" cy="40" r="9"/><circle cx="265" cy="40" r="9"/><circle cx="335" cy="40" r="9"/><circle cx="385" cy="40" r="9"/><circle cx="455" cy="40" r="9"/><circle cx="505" cy="40" r="9"/></g>
<text x="530" y="170" font-size="20" fill="#1f2937">2¹ = 2</text>
<text x="530" y="110" font-size="20" fill="#1f2937">2² = 4</text>
<text x="530" y="50" font-size="20" fill="#1f2937">2³ = 8</text>
</svg>`
        },
        {
          label: "🧊 Кубики 3D",
          html: `<p>Построй куб из кубиков: <b>4</b> в стороне, <b>4</b> в глубину, <b>4</b> в высоту. Сколько нужно кубиков? <b>4 × 4 × 4 = 4<sup>3</sup> = 64</b>.</p>
<p>Поверни модель и сосчитай сначала один слой (4 × 4 = 4<sup>2</sup> = 16), потом умножь на число слоёв. Меняй ползунки, чтобы увидеть 2<sup>3</sup>, 5<sup>3</sup>…</p>`,
          scene: "blocks",
          options: { mode: "volume", a: 4, b: 4, c: 4 }
        },
        {
          label: "📄 Сложи лист",
          html: `<p>Возьми лист и сложи его пополам: получилось <b>2</b> слоя. Сложи ещё раз: <b>4</b>. Ещё: <b>8</b>…</p>
<p>После <b>n</b> складываний будет <b>2<sup>n</sup></b> слоёв. После 7 складываний (2<sup>7</sup> = 128 слоёв) сложить ещё раз почти невозможно!</p>
<p>Если бы можно было сложить тонкий лист толщиной 0,1 мм <b>42 раза</b>, толщина (2<sup>42</sup> слоёв) превысила бы расстояние от Земли до Луны. Степени растут невероятно!</p>`
        },
        {
          label: "🌍 Как пишут в других странах",
          html: `<p>Во всём мире показатель пишут вверху справа: 2<sup>4</sup>. Но читают по-разному:</p>
<ul>
<li>🇷🇺 «два <b>в четвёртой степени</b>»</li>
<li>🇮🇹 «due <b>alla quarta</b>»</li>
<li>🇬🇧🇺🇸 «two <b>to the power of</b> four» или «two to the fourth»</li>
<li>🇫🇷 «deux <b>puissance</b> quatre»</li>
<li>🇩🇪 «zwei <b>hoch</b> vier» (то есть «два <i>вверху</i> четыре»)</li>
</ul>
<p>На калькуляторах и в компьютерах, где нельзя писать мелко, используют символ <b>^</b>: <code>2^4</code>. Во многих языках программирования (например, в Python) пишут <code>2**4</code>.</p>`
        },
        {
          label: "➕ Повторное сложение и повторное умножение",
          html: `<p>Помнишь умножение? Это <b>повторное сложение</b>: 3 × 4 = 3 + 3 + 3 + 3.</p>
<p>Степень — следующая ступенька: <b>повторное умножение</b>: 3<sup>4</sup> = 3 × 3 × 3 × 3.</p>
<table>
<tr><th>Действие</th><th>Что повторяет</th><th>Пример</th></tr>
<tr><td>Умножение</td><td>сложения</td><td>3 × 4 = 12</td></tr>
<tr><td>Степень</td><td>умножения</td><td>3<sup>4</sup> = 81</td></tr>
</table>
<p>Вот почему 3<sup>4</sup> намного больше, чем 3 × 4!</p>`
        },
        {
          "label": "🇮🇳 Легенда о шахматной доске (Индия)",
          "html": "<p>Известная <b>легенда</b> рассказывает, что в <b>Индии</b> изобретатель шахмат (во многих версиях его зовут <b>Сисса</b>) показал игру царю. Царь, обрадовавшись, сказал: «Проси что хочешь!». Изобретатель попросил только зёрна пшеницы: <b>1</b> зерно на первой клетке, <b>2</b> на второй, <b>4</b> на третьей и так далее, каждый раз <b>удваивая</b>, до клетки 64. Царь рассмеялся: «Так мало?». Эту легенду пересказывали ещё в Средние века арабские и персидские авторы.</p><p>Посчитаем со <b>степенями числа 2</b>:</p><ul><li>клетка 1: 1 = 2<sup>0</sup>; клетка 2: 2 = 2<sup>1</sup>; клетка 3: 4 = 2<sup>2</sup>…</li><li>на клетке <b>n</b> лежит <b>2<sup>n−1</sup></b> зёрен;</li><li>клетка 11: 2<sup>10</sup> = 1024; клетка 21: 2<sup>20</sup> = больше <b>миллиона</b>;</li><li>клетка 64: 2<sup>63</sup>, число из 19 цифр!</li></ul><p>Всего потребовалось бы 2<sup>64</sup> − 1 = <b>18 446 744 073 709 551 615</b> зёрен: намного больше пшеницы, собранной во всём мире за сотни лет. Царь не мог расплатиться! Степени растут <b>очень быстро</b>.</p>",
          "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Клетка n → 2 в степени (n − 1) зёрен</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">клетка 11 → 2¹⁰ = 1024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">клетка 21 → 2²⁰ = 1 048 576 (больше миллиона!)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Всего: 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18 446 744 073 709 551 615 зёрен</text></svg>"
        },
        {
          "label": "🇨🇳 Треугольник Ян Хуэя (Китай)",
          "html": "<p>В <b>1261</b> году <b>китайский</b> математик <b>Ян Хуэй</b> опубликовал треугольник из чисел, который в Китае был известен уже около двух веков (им пользовался Цзя Сянь). В Италии его называют <b>треугольником Тартальи</b>, во Франции — треугольником Паскаля: но китайцы знали его намного раньше!</p><p>Как он строится:</p><ol><li>Наверху пишешь <b>1</b>.</li><li>Каждая строка начинается и заканчивается <b>1</b>.</li><li>Каждое другое число — это <b>сумма двух чисел над ним</b>: 1 + 2 = 3, 3 + 3 = 6…</li></ol><p>Теперь <b>сложи числа каждой строки</b>: 1, 2, 4, 8, 16, 32… Это <b>степени числа 2</b>! Сумма строки с номером n (считая с 0) равна <b>2<sup>n</sup></b>.</p><p>Почему? Каждое число строки используется <b>дважды</b> для построения следующей строки (оно попадает в число внизу слева и в число внизу справа): значит, сумма каждой строки <b>вдвое</b> больше предыдущей.</p><p>🎯 Напиши следующую строку сам: чему должна равняться сумма?</p>",
          "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">сумма = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 сверху → 6 снизу</text></svg>"
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Карта степеней: нажми на узел и узнай почему",
      nodes: [
        { id: "molt", label: "Умножение", x: 50, y: 6, color: "#2563eb", html: "Действие, повторяющее сложение: 4 × 3 = 4 + 4 + 4.", why: "Степени рождаются из умножения точно так же, как умножение рождается из сложения: каждое действие — это сокращённая запись предыдущего, повторённого." },
        { id: "potenza", label: "Степень", x: 50, y: 30, color: "#16a34a", html: "Произведение одинаковых множителей: a<sup>n</sup>.", why: "Ещё <b>вавилоняне</b> (около 4000 лет назад) имели таблицы квадратов и кубов. Современную запись с мелким показателем вверху ввёл французский философ и математик <b>Рене Декарт</b> в 1637 году." },
        { id: "base", label: "Основание", x: 18, y: 50, color: "#f59e0b", html: "Множитель, который повторяется.", why: "Оно называется основанием, потому что это число «отсчёта», на котором строится вся степень, как основание здания." },
        { id: "esp", label: "Показатель", x: 82, y: 50, color: "#ef4444", html: "Маленькое число вверху: сколько раз повторяется основание.", why: "От латинского <i>exponere</i> — «выставлять напоказ»: это число, выставленное на видное место вверху. Он растёт на 1 каждый раз, когда ты ещё раз умножаешь на основание." },
        { id: "quadcubo", label: "Квадрат и куб", x: 18, y: 76, color: "#a855f7", html: "a<sup>2</sup> читается «a в квадрате», a<sup>3</sup> — «a в кубе».", why: "Греческие математики, например <b>Евклид</b>, представляли числа как фигуры: число, умноженное само на себя, образует квадрат из точек; три раза — куб. Геометрические названия сохранились." },
        { id: "zero", label: "Показатель 0 и 1", x: 50, y: 62, color: "#0ea5e9", html: "a<sup>1</sup> = a; a<sup>0</sup> = 1.", why: "Посмотри на лесенку 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2: каждый раз, когда показатель уменьшается на 1, результат <b>делится на основание</b>. Ещё шаг: 2 : 2 = 1, значит, 2<sup>0</sup> = 1. Это соглашение, выбранное для того, чтобы все правила продолжали работать." },
        { id: "dieci", label: "Степени числа 10", x: 82, y: 76, color: "#14b8a6", html: "10<sup>n</sup> = 1 и n нулей.", why: "Наша система счисления <b>десятичная и позиционная</b>: каждый разряд в 10 раз больше разряда справа. Вероятно, мы используем 10, потому что у нас 10 пальцев! Индо-арабские цифры и ноль пришли в Европу с <b>Фибоначчи</b> в 1202 году." },
        { id: "scientifica", label: "Гигантские числа", x: 50, y: 92, color: "#64748b", html: "Степени числа 10 нужны, чтобы записывать огромные числа на малом месте.", why: "Уже <b>Архимед</b> в III веке до н. э. в книге <i>«Псаммит»</i> («Исчисление песчинок») придумал способ счёта «мириадами мириад», чтобы оценить, сколько песчинок потребовалось бы, чтобы заполнить Вселенную. Сегодня учёные используют <b>стандартный вид числа</b> (например, 1,5 × 10<sup>8</sup> км)." }
      ],
      edges: [
        ["molt", "potenza", "повторённое становится"],
        ["potenza", "base", "имеет"],
        ["potenza", "esp", "имеет"],
        ["base", "quadcubo", "сама на себя 2 или 3 раза"],
        ["esp", "zero", "особые случаи"],
        ["esp", "dieci", "считай нули"],
        ["dieci", "scientifica", "нужны для"]
      ]
    },
    {
      type: "quiz",
      title: "Мини-тест: степени числа 10 и задачи",
      questions: [
        { type: "num", q: "Сколько нулей в 10<sup>6</sup>, записанном полностью?", answer: 6, explain: "Показатель указывает число нулей: 1 000 000." },
        { type: "mc", q: "Как записать 1000 в виде степени числа 10?", options: ["10<sup>2</sup>", "10<sup>3</sup>", "3<sup>10</sup>"], answer: 1, explain: "1000 = 10 × 10 × 10 = 10<sup>3</sup>." },
        { type: "num", q: "У квадрата 7 плиток в стороне. Сколько всего плиток?", answer: 49, explain: "7<sup>2</sup> = 7 × 7 = 49." }
      ]
    }
  ],
  glossary: [
    { t: "Степень", d: "Умножение одинаковых множителей, записанное коротко (напр., 2⁵); также его результат." },
    { t: "Основание", d: "Множитель, который повторяется в степени." },
    { t: "Показатель", d: "Маленькое число вверху: сколько раз основание умножается само на себя." },
    { t: "Квадрат", d: "Степень с показателем 2: a × a." },
    { t: "Куб", d: "Степень с показателем 3: a × a × a." },
    { t: "Степень числа 10", d: "10 в какой-то степени: 1 и столько нулей, каков показатель." },
    { t: "Разложение по разрядам (forma polinomiale)", d: "Запись числа в виде суммы цифр, умноженных на степени числа 10." },
    { t: "Гугол", d: "Число 10¹⁰⁰: 1 и 100 нулей." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "Как записать 7 × 7 × 7 × 7 в виде степени?", options: ["7<sup>4</sup>", "4<sup>7</sup>", "7 × 4"], answer: 0, explain: "Основание 7, которое встречается 4 раза: 7<sup>4</sup>." },
      { type: "num", q: "Чему равно 3<sup>3</sup>?", answer: 27, explain: "3 × 3 × 3 = 27." },
      { type: "num", q: "Чему равно 10<sup>4</sup>?", answer: 10000, explain: "1 и 4 нуля: 10 000." },
      { type: "tf", q: "2<sup>5</sup> = 10", answer: false, explain: "2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. Основание на показатель не умножают!" },
      { type: "text", q: "Как называется маленькое число, записанное вверху справа?", answer: ["показатель", "показатель степени", "esponente", "l'esponente", "l esponente"], explain: "Это показатель степени." },
      { type: "mc", q: "Чему равно 15<sup>1</sup>?", options: ["1", "15", "0"], answer: 1, explain: "При показателе 1 результат — само основание." },
      { type: "tf", q: "Любое число, не равное 0, в нулевой степени равно 1.", answer: true, explain: "По соглашению a<sup>0</sup> = 1: это шаг, который идёт после a<sup>1</sup> при делении на основание." },
      { type: "mc", q: "Как читается 9<sup>2</sup>?", options: ["девять умножить на два", "девять в квадрате", "девять в кубе"], answer: 1, explain: "Показатель 2: «в квадрате»." },
      { type: "order", q: "Расставь от наименьшего к наибольшему.", items: ["2<sup>2</sup>", "3<sup>2</sup>", "2<sup>4</sup>", "10<sup>2</sup>"], explain: "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100." },
      { type: "num", q: "5 382 = 5 × 10<sup>3</sup> + 3 × 10<sup>?</sup> + 8 × 10 + 2. Какого показателя не хватает?", answer: 2, explain: "Цифра 3 стоит в разряде сотен: 100 = 10<sup>2</sup>." },
      { type: "num", q: "В кубе из кубиков по 6 кубиков на ребре. Сколько кубиков в нём?", answer: 216, explain: "6<sup>3</sup> = 6 × 6 × 6 = 36 × 6 = 216." }
    ],
    gen: [["power", 3]]
  }
});
