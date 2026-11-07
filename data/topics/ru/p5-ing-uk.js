TOPIC('ru', {
  id: `p5-ing-uk`,
  title: `The United Kingdom`,
  intro: `Англия, Великобритания, Соединённое Королевство… это одно и то же? Нет! Сегодня мы отправляемся в <b>United Kingdom</b> (UK): узнаем о его <b>4 странах</b>, <b>столицах</b>, флаге, короле и самых известных <b>традициях</b>, а заодно выучим немного английского. Let's go! 🇬🇧`,
  minutes: 35,
  sections: [
    {
      type: `text`, title: `1. Four countries, one kingdom`,
      html: `<p>Полное название — <b>United Kingdom of Great Britain and Northern Ireland</b> (Соединённое Королевство Великобритании и Северной Ирландии). Оно состоит из <b>4 стран</b> (<i>countries</i>):</p>
<table>
<tr><th>Country</th><th>Capital</th><th>Символ</th><th>Святой покровитель</th></tr>
<tr><td>🏴󠁧󠁢󠁥󠁮󠁧󠁿 <b>England</b> (Англия)</td><td><b>London</b></td><td>🌹 rose (роза)</td><td>St George – 23 April</td></tr>
<tr><td>🏴󠁧󠁢󠁳󠁣󠁴󠁿 <b>Scotland</b> (Шотландия)</td><td><b>Edinburgh</b></td><td>🌿 thistle (чертополох)</td><td>St Andrew – 30 November</td></tr>
<tr><td>🏴󠁧󠁢󠁷󠁬󠁳󠁿 <b>Wales</b> (Уэльс)</td><td><b>Cardiff</b></td><td>🌼 daffodil (нарцисс) и 🐉 dragon</td><td>St David – 1 March</td></tr>
<tr><td><b>Northern Ireland</b> (Северная Ирландия)</td><td><b>Belfast</b></td><td>☘️ shamrock (трилистник)</td><td>St Patrick – 17 March</td></tr>
</table>
<p><b>London</b> — также столица всего Соединённого Королевства.</p>
<ul>
<li><b>Great Britain</b> (Великобритания) — это <b>большой остров</b>, на котором находятся Англия, Шотландия и Уэльс.</li>
<li><b>Северная Ирландия</b> находится на острове <b>Ирландия</b>, остальная часть которого — независимое государство, <b>Республика Ирландия</b> (столица Дублин, входит в ЕС).</li>
<li>Называть всю страну «Англией» — ошибка: шотландец или валлиец могут обидеться! 😉</li>
</ul>`
    },
    {
      type: `svg`, title: `Карта Соединённого Королевства`,
      caption: `4 страны Соединённого Королевства и их столицы. Большой остров — это Великобритания.`,
      svg: `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="340" fill="#bae6fd"/>
<path d="M300 20 L340 30 L360 70 L340 100 L360 130 L330 140 L290 135 L270 110 L285 80 L270 50 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
<path d="M290 135 L330 140 L360 130 L380 170 L400 220 L430 260 L420 300 L340 315 L300 300 L330 270 L310 240 L320 200 L300 170 Z" fill="#f87171" stroke="#7f1d1d" stroke-width="2"/>
<path d="M300 300 L330 270 L310 240 L280 245 L260 265 L270 290 Z" fill="#4ade80" stroke="#14532d" stroke-width="2"/>
<path d="M200 130 L240 120 L250 150 L230 175 L200 170 Z" fill="#fb923c" stroke="#7c2d12" stroke-width="2"/>
<path d="M150 150 L200 130 L200 170 L230 175 L220 230 L170 240 L140 200 Z" fill="#d1d5db" stroke="#475569" stroke-width="2"/>
<circle cx="318" cy="118" r="6" fill="#0f172a"/><text x="360" y="112" font-size="15" fill="#0f172a" font-weight="bold">Edinburgh</text>
<circle cx="395" cy="285" r="6" fill="#0f172a"/><text x="440" y="290" font-size="15" fill="#0f172a" font-weight="bold">London</text>
<circle cx="295" cy="290" r="6" fill="#0f172a"/><text x="215" y="320" font-size="15" fill="#0f172a" font-weight="bold">Cardiff</text>
<circle cx="230" cy="150" r="6" fill="#0f172a"/><text x="250" y="160" font-size="15" fill="#0f172a" font-weight="bold">Belfast</text>
<text x="315" y="75" font-size="15" text-anchor="middle" fill="#1e3a8a" font-weight="bold">SCOTLAND</text>
<text x="370" y="220" font-size="15" text-anchor="middle" fill="#7f1d1d" font-weight="bold">ENGLAND</text>
<text x="215" y="285" font-size="15" text-anchor="middle" fill="#14532d" font-weight="bold">WALES</text>
<text x="40" y="115" font-size="13" fill="#9a3412" font-weight="bold">NORTHERN IRELAND</text>
<text x="160" y="215" font-size="13" fill="#334155">Rep. of Ireland</text>
<text x="500" y="160" font-size="14" fill="#0c4a6e">North Sea</text>
<text x="470" y="330" font-size="13" fill="#0c4a6e">English Channel</text>
</svg>`
    },
    {
      type: `widget`, title: `Игра: соедини страну и столицу`,
      widget: `match`,
      options: {
        pairs: [
          [`England`, `London`], [`Scotland`, `Edinburgh`], [`Wales`, `Cardiff`], [`Northern Ireland`, `Belfast`],
          [`Republic of Ireland`, `Dublin`]
        ]
      }
    },
    {
      type: `text`, title: `2. Some facts: цифры и символы`,
      html: `<ul>
<li>👥 <b>Population</b>: около <b>69 миллионов</b> жителей (в Италии около 59).</li>
<li>🗣️ <b>Languages</b>: <b>английский</b> везде; в Уэльсе говорят ещё и на <b>валлийском</b> (<i>Welsh</i>), в Шотландии — на <b>шотландском гэльском</b>.</li>
<li>👑 <b>Head of State</b>: <b>король Карл III</b> (<i>King Charles III</i>), на троне с 8 сентября 2022 года, после королевы Елизаветы II, правившей 70 лет. Но король не управляет: страной руководят <b>Prime Minister</b> (премьер-министр) и <b>Parliament</b> (парламент) в Вестминстере (Лондон).</li>
<li>💷 <b>Money</b>: <b>фунт стерлингов</b> (<i>pound sterling</i>, £). 1 pound = 100 pence.</li>
<li>🚗 <b>Левостороннее движение!</b> (<i>They drive on the left.</i>)</li>
<li>⛰️ Самая высокая гора — <b>Бен-Невис</b> в Шотландии (1 345 м); самая длинная река — <b>Северн</b> (около 350 км); через Лондон течёт <b>Thames</b> (Темза).</li>
<li>🇪🇺 Соединённое Королевство <b>вышло из Европейского союза</b> 31 января 2020 года (Брекзит).</li>
</ul>`
    },
    {
      type: `text`, title: `3. The Union Jack`,
      html: `<p>Флаг Соединённого Королевства называется <b>Union Jack</b> (или <i>Union Flag</i>). Он составлен из <b>трёх наложенных крестов</b>:</p>
<ul>
<li><b>красный крест святого Георгия</b> на белом фоне (Англия) 🏴󠁧󠁢󠁥󠁮󠁧󠁿;</li>
<li><b>белый крест святого Андрея</b>, косой, на синем фоне (Шотландия) 🏴󠁧󠁢󠁳󠁣󠁴󠁿;</li>
<li><b>красный крест святого Патрика</b>, косой, на белом фоне (Ирландия).</li>
</ul>
<p>А Уэльс? Его нет! Когда флаг создавали, Уэльс уже считался объединённым с Англией. У Уэльса свой флаг с красивым <b>красным драконом</b>. 🐉</p>`
    },
    {
      type: `svg`, title: `Три креста = один флаг`,
      caption: `Крест святого Георгия + крест святого Андрея + крест святого Патрика = Union Jack.`,
      svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="220" fill="#f8fafc"/>
<rect x="10" y="40" width="120" height="70" fill="#ffffff" stroke="#94a3b8"/>
<rect x="10" y="66" width="120" height="18" fill="#dc2626"/><rect x="61" y="40" width="18" height="70" fill="#dc2626"/>
<text x="70" y="135" font-size="14" text-anchor="middle" fill="#0f172a">St George</text>
<text x="145" y="82" font-size="26" text-anchor="middle" fill="#0f172a">+</text>
<rect x="160" y="40" width="120" height="70" fill="#1d4ed8"/>
<line x1="160" y1="40" x2="280" y2="110" stroke="#ffffff" stroke-width="14"/><line x1="280" y1="40" x2="160" y2="110" stroke="#ffffff" stroke-width="14"/>
<text x="220" y="135" font-size="14" text-anchor="middle" fill="#0f172a">St Andrew</text>
<text x="295" y="82" font-size="26" text-anchor="middle" fill="#0f172a">+</text>
<rect x="310" y="40" width="120" height="70" fill="#ffffff" stroke="#94a3b8"/>
<line x1="310" y1="40" x2="430" y2="110" stroke="#dc2626" stroke-width="8"/><line x1="430" y1="40" x2="310" y2="110" stroke="#dc2626" stroke-width="8"/>
<text x="370" y="135" font-size="14" text-anchor="middle" fill="#0f172a">St Patrick</text>
<text x="445" y="82" font-size="26" text-anchor="middle" fill="#0f172a">=</text>
<rect x="460" y="40" width="130" height="70" fill="#1d4ed8"/>
<line x1="460" y1="40" x2="590" y2="110" stroke="#ffffff" stroke-width="14"/><line x1="590" y1="40" x2="460" y2="110" stroke="#ffffff" stroke-width="14"/>
<line x1="460" y1="40" x2="590" y2="110" stroke="#dc2626" stroke-width="5"/><line x1="590" y1="40" x2="460" y2="110" stroke="#dc2626" stroke-width="5"/>
<rect x="460" y="64" width="130" height="22" fill="#ffffff"/><rect x="513" y="40" width="24" height="70" fill="#ffffff"/>
<rect x="460" y="68" width="130" height="14" fill="#dc2626"/><rect x="518" y="40" width="14" height="70" fill="#dc2626"/>
<text x="525" y="135" font-size="15" text-anchor="middle" fill="#0f172a" font-weight="bold">Union Jack</text>
<text x="300" y="190" font-size="17" text-anchor="middle" fill="#334155">England + Scotland + Ireland</text>
</svg>`
    },
    {
      type: `quiz`, title: `Мини-тест: география Соединённого Королевства`,
      questions: [
        { type: `num`, q: `Сколько стран образуют Соединённое Королевство?`, answer: 4, tol: 0, explain: `England, Scotland, Wales и Northern Ireland.` },
        { type: `mc`, q: `Какая столица у Шотландии?`, options: [`Cardiff`, `Edinburgh`, `Belfast`], answer: 1, explain: `Edinburgh (Эдинбург).` },
        { type: `tf`, q: `Уэльс представлен на Union Jack.`, answer: false, explain: `У Уэльса нет креста на Union Jack; у него свой флаг с драконом.` }
      ]
    },
    {
      type: `text`, title: `4. Traditions: традиции`,
      html: `<ul>
<li>🫖 <b>Afternoon tea</b>: послеполуденный чай со <b>scones</b> (булочками), джемом и сливками. Модным его сделала герцогиня Бедфорд примерно в 1840 году.</li>
<li>🐟 <b>Fish and chips</b>: жареная рыба с картофелем фри, самое известное блюдо на вынос.</li>
<li>🍳 <b>Full English breakfast</b>: сытный завтрак с яйцами, беконом, колбасками, фасолью, помидорами и грибами.</li>
<li>🎆 <b>Bonfire Night</b> (5 ноября): костры и фейерверки в память о 1605 годе, когда Гай Фокс был арестован перед тем, как взорвать парламент.</li>
<li>🥞 <b>Pancake Day</b>: в Жирный вторник едят блины и устраивают забеги со сковородками в руках!</li>
<li>🎄 <b>Christmas</b>: <b>Christmas crackers</b> (бумажные хлопушки, которые тянут вдвоём, и они говорят «бах!»), пудинг и 26 декабря <b>Boxing Day</b>.</li>
<li>🏴󠁧󠁢󠁳󠁣󠁴󠁿 В Шотландии: <b>килт</b> (клетчатая юбка, <i>tartan</i>), <b>волынка</b> (<i>bagpipes</i>) и <b>Highland Games</b> с метанием бревна!</li>
<li>⚽ Спорт: современный <b>футбол</b>, <b>регби</b>, <b>теннис</b> (Уимблдон) и <b>крикет</b> родились здесь или получили здесь первые правила.</li>
</ul>`
    },
    {
      type: `widget`, title: `Карточки: британские слова`,
      widget: `flashcards`,
      options: {
        cards: [
          { front: `🏴󠁧󠁢󠁥󠁮󠁧󠁿 England`, back: `Англия – столица London` },
          { front: `🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland`, back: `Шотландия – столица Edinburgh` },
          { front: `🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales`, back: `Уэльс – столица Cardiff` },
          { front: `☘️ Northern Ireland`, back: `Северная Ирландия – столица Belfast` },
          { front: `👑 King`, back: `король (King Charles III)` },
          { front: `💷 pound`, back: `фунт стерлингов` },
          { front: `🫖 afternoon tea`, back: `послеполуденный чай` },
          { front: `🐟 fish and chips`, back: `жареная рыба с картофелем фри` },
          { front: `🎆 Bonfire Night`, back: `5 ноября, костры и фейерверки` },
          { front: `🚌 double-decker`, back: `двухэтажный автобус` }
        ]
      }
    },
    {
      type: `example`, title: `Пример: открытка из Лондона`,
      html: `<p><i>Dear Grandma,<br>
London is amazing! 🇬🇧 Yesterday we were at <b>Buckingham Palace</b>, the King's home in London, and we saw the <b>Changing of the Guard</b>. 💂 The guards wear tall black hats! Then we went on a red <b>double-decker bus</b> 🚌 to the <b>Tower of London</b>. Today we are on the <b>London Eye</b>: it's bigger than a skyscraper! I can see <b>Big Ben</b> and the river <b>Thames</b>.<br>
Love, Giulia</i></p>
<p>Заметь: <b>Big Ben</b> — это название большого <b>колокола</b>, а не башни! Башня с 2012 года называется <b>Elizabeth Tower</b>.</p>`
    },
    {
      type: `example`, title: `Пример: осторожно, лево!`,
      html: `<p>В Лондоне на пешеходных переходах на асфальте написано <b>LOOK RIGHT</b> ➡️ (смотри направо) или <b>LOOK LEFT</b> ⬅️. Почему? Раз машины едут по <b>левой</b> стороне, то при переходе дороги они сначала появляются <b>справа</b>, в отличие от Италии (и России). Англичане написали это для рассеянных туристов!</p>
<p>Руль у британских машин тоже находится <b>справа</b>.</p>`
    },
    {
      type: `curiosity`, title: `А ты знаешь, что… под морем есть тоннель?`,
      html: `<p>Великобритания — остров, но с <b>1994 года</b> из Лондона в Париж можно доехать на поезде! <b>Channel Tunnel</b> (Евротоннель) проходит под проливом Ла-Манш: его длина около <b>50 км</b>, из которых почти <b>38 км под морем</b> — самый длинный подводный участок в мире. Поезд проезжает его примерно за 20 минут.</p>`
    },
    {
      type: `curiosity`, title: `А ты знаешь, что… в Уэльсе есть посёлок с очень длинным названием?`,
      html: `<p>У валлийского посёлка <b>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</b> одно из самых длинных названий в мире: 58 букв! По-валлийски оно означает примерно «Церковь Святой Марии в долине белого орешника близ быстрого водоворота и церковь Святого Тизилио у красной пещеры». Жители называют его просто <b>Llanfair PG</b>. 😄</p>`
    },
    {
      type: `alternatives`, title: `Другие способы понять тему`,
      intro: `Соединённое Королевство, Великобритания, Британские острова, Англия… вот как больше не путаться.`,
      tabs: [
        {
          label: `🪆 Коробки в коробках`,
          html: `<p>Представь три коробки, вложенные одна в другую:</p>
<ul>
<li>📦 Самая маленькая: <b>England</b>, всего одна страна.</li>
<li>📦📦 Побольше: <b>Great Britain</b> = остров с England + Scotland + Wales.</li>
<li>📦📦📦 Ещё больше: <b>United Kingdom</b> = Great Britain + Northern Ireland.</li>
<li>🗺️ «Стол» под всеми коробками: <b>British Isles</b> (Британские острова), куда входит и Республика Ирландия, которая <b>не</b> является частью Соединённого Королевства.</li>
</ul>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f1f5f9"/>
<rect x="10" y="10" width="580" height="220" rx="16" fill="#cbd5e1"/>
<text x="30" y="36" font-size="16" fill="#334155" font-weight="bold">British Isles (+ Rep. of Ireland)</text>
<rect x="40" y="50" width="520" height="165" rx="14" fill="#93c5fd"/>
<text x="60" y="75" font-size="16" fill="#1e3a8a" font-weight="bold">United Kingdom (+ Northern Ireland)</text>
<rect x="70" y="88" width="460" height="115" rx="12" fill="#86efac"/>
<text x="90" y="112" font-size="16" fill="#14532d" font-weight="bold">Great Britain (+ Scotland, Wales)</text>
<rect x="110" y="125" width="200" height="65" rx="10" fill="#fca5a5"/>
<text x="210" y="165" font-size="20" text-anchor="middle" fill="#7f1d1d" font-weight="bold">England</text>
</svg>`
        },
        {
          label: `🌍 На глобусе`,
          html: `<p>Покрути глобус и найди 4 столицы и другие известные места. Обрати внимание, как близко Франция!</p>`,
          scene: `globe`,
          options: {
            points: [
              { lat: 51.5, lon: -0.12, label: `London`, color: `#dc2626` },
              { lat: 55.95, lon: -3.19, label: `Edinburgh`, color: `#1d4ed8` },
              { lat: 51.48, lon: -3.18, label: `Cardiff`, color: `#16a34a` },
              { lat: 54.6, lon: -5.93, label: `Belfast`, color: `#f97316` },
              { lat: 56.8, lon: -5.0, label: `Ben Nevis (1345 m)`, color: `#64748b` },
              { lat: 53.35, lon: -6.26, label: `Dublin (Rep. of Ireland)`, color: `#22c55e` },
              { lat: 48.85, lon: 2.35, label: `Paris`, color: `#a855f7` }
            ],
            routes: [ { points: [0, 6], color: `#f59e0b` } ]
          }
        },
        {
          label: `🌊 Остров в 3D`,
          html: `<p>Великобритания — это <b>остров</b>, отделённый от Европы <b>проливом</b>: Ла-Маншем (<i>English Channel</i>). Нажимай на части ландшафта, чтобы узнать британские примеры.</p>`,
          scene: `terrain`,
          options: {
            features: {
              island: { label: `Island`, html: `<b>Great Britain</b> — самый большой остров Европы (около 209 000 км²).` },
              archipelago: { label: `Archipelago`, html: `<b>Гебриды</b> и <b>Оркнейские острова</b> к северу от Шотландии — архипелаги из множества маленьких островов.` },
              strait: { label: `Strait`, html: `<b>Па-де-Кале</b> (<i>Strait of Dover</i>) шириной всего 33 км: в ясные дни из Дувра видны берега Франции.` },
              mountain: { label: `Mountain`, html: `Шотландское <b>нагорье (Highlands)</b> с Бен-Невисом (1 345 м), самой высокой вершиной Соединённого Королевства.` },
              lake: { label: `Lake (loch)`, html: `В Шотландии озёра называются <b>loch</b>: самое известное — <b>Лох-Несс</b>, где, по легенде, живёт чудовище «Нэсси».` },
              river: { label: `River`, html: `<b>Thames</b> протекает через Лондон; <b>Severn</b> — самая длинная река страны.` },
              coast: { label: `Coast`, html: `<b>Белые скалы Дувра</b> (<i>White Cliffs</i>) состоят из мела.` }
            }
          }
        },
        {
          label: `🗂️ Чьё это?`,
          html: `<p>Какой стране принадлежит каждый символ или место?</p>`,
          widget: `classify`,
          options: {
            groups: [`🏴󠁧󠁢󠁥󠁮󠁧󠁿 England`, `🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland`, `🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales`],
            items: [
              [`🌹 rose`, 0], [`Big Ben`, 0], [`St George`, 0],
              [`kilt and bagpipes`, 1], [`Loch Ness`, 1], [`Edinburgh Castle`, 1],
              [`red dragon`, 2], [`🌼 daffodil`, 2], [`Cardiff`, 2]
            ]
          }
        }
      ]
    },
    {
      type: `conceptMap`, title: `Карта: как возникло Соединённое Королевство`,
      nodes: [
        { id: `uk`, label: `United Kingdom`, x: 50, y: 8, color: `#1d4ed8`, html: `4 страны, одно государство, столица Лондон.`, why: `Соединённое Королевство возникло «по кусочкам», когда на протяжении веков объединялись разные королевства. Поэтому у каждой страны до сих пор своя идентичность, свои футбольные команды и отчасти свои законы.` },
        { id: `wales`, label: `Уэльс + Англия`, x: 15, y: 32, color: `#16a34a`, html: `Уэльс, объединённый с Англией.`, why: `Английский король Эдуард I завоевал Уэльс в 1283 году; законы 1536 и 1543 годов полностью присоединили его к Английскому королевству. Поэтому Уэльса нет на Union Jack.` },
        { id: `scot`, label: `1707: Великобритания`, x: 42, y: 32, color: `#2563eb`, html: `Англия и Шотландия объединяются.`, why: `С 1603 года у них уже был один король (Яков VI Шотландский стал Яковом I Английским). <b>Актом об унии 1707 года</b> возникло единое королевство: Великобритания.` },
        { id: `ire`, label: `1801 и 1922: Ирландия`, x: 72, y: 32, color: `#f97316`, html: `Ирландия входит, а потом в основном выходит.`, why: `В 1801 году Ирландию присоединили к королевству (возникло «Соединённое Королевство Великобритании и Ирландии»). После войны за независимость в 1922 году юг стал независимым; север с протестантским большинством остался: это <b>Северная Ирландия</b>.` },
        { id: `flag`, label: `Union Jack`, x: 88, y: 58, color: `#dc2626`, html: `Три наложенных креста.`, why: `Первый вариант (1606) соединял кресты святого Георгия и святого Андрея. В 1801 году, при унии с Ирландией, добавили крест святого Патрика.` },
        { id: `king`, label: `Конституционная монархия`, x: 18, y: 65, color: `#a855f7`, html: `Король царствует, но не управляет.`, why: `После Великой хартии вольностей (1215) и «Славной революции» (1688) власть постепенно перешла от короля к парламенту. Сегодня правит премьер-министр, пользующийся доверием Палаты общин.` },
        { id: `lang`, label: `Английский язык`, x: 50, y: 65, color: `#0ea5e9`, html: `На нём говорят около 1,5 миллиарда человек в мире.`, why: `Он родился из языков англов и саксов, германских народов, пришедших с V века ("England" = «земля англов»), смешавшихся с древнескандинавским языком викингов и французским языком норманнов (1066). Он распространился по миру вместе с Британской империей, а потом и с Соединёнными Штатами.` },
        { id: `trad`, label: `Традиции`, x: 50, y: 90, color: `#eab308`, html: `Afternoon tea, Bonfire Night, килт, crackers.`, why: `Многие традиции напоминают о конкретных исторических событиях: Bonfire Night — о заговоре 1605 года, килт — о мире шотландских кланов Хайленда, чай — о торговле с Азией в XVII–XVIII веках.` }
      ],
      edges: [
        [`wales`, `scot`, `потом`], [`scot`, `ire`, `потом`], [`ire`, `uk`, `образует`], [`scot`, `uk`, `образует`],
        [`ire`, `flag`, `добавляет крест`], [`uk`, `king`, `управляется`], [`uk`, `lang`, `распространяет`], [`uk`, `trad`, `сохраняет`]
      ]
    },
    {
      type: `quiz`, title: `Мини-тест: traditions`,
      questions: [
        { type: `mc`, q: `Что отмечают 5 ноября?`, options: [`Bonfire Night`, `Boxing Day`, `St Patrick's Day`], answer: 0, explain: `Bonfire Night, с кострами и фейерверками.` },
        { type: `mc`, q: `"Big Ben" — это…`, options: [`башня`, `большой колокол`, `король`], answer: 1, explain: `Big Ben — это колокол; башня называется Elizabeth Tower.` },
        { type: `tf`, q: `В Соединённом Королевстве левостороннее движение.`, answer: true, explain: `They drive on the left!` }
      ]
    }
  ],
  glossary: [
    { t: `United Kingdom (UK)`, d: `Соединённое Королевство: Англия, Шотландия, Уэльс и Северная Ирландия.` },
    { t: `Great Britain`, d: `Остров с Англией, Шотландией и Уэльсом.` },
    { t: `British Isles`, d: `Британские острова: Великобритания, Ирландия и мелкие острова.` },
    { t: `Union Jack`, d: `Флаг Соединённого Королевства с тремя наложенными крестами.` },
    { t: `capital`, d: `Столица.` },
    { t: `pound (£)`, d: `Фунт стерлингов, британская валюта.` },
    { t: `King / Queen`, d: `Король / королева.` },
    { t: `Prime Minister`, d: `Премьер-министр, глава правительства.` },
    { t: `loch`, d: `Озеро (в Шотландии).` },
    { t: `double-decker`, d: `Двухэтажный автобус.` }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: `mc`, q: `Какая столица у Уэльса?`, options: [`Cardiff`, `Belfast`, `Dublin`], answer: 0, explain: `Cardiff — столица Уэльса (Wales).` },
      { type: `mc`, q: `Какая страна НЕ входит в Соединённое Королевство?`, options: [`Scotland`, `Republic of Ireland`, `Wales`], answer: 1, explain: `Республика Ирландия — независимое государство.` },
      { type: `text`, q: `Как по-английски «Шотландия»?`, answer: [`scotland`], explain: `Шотландия = Scotland.` },
      { type: `mc`, q: `Great Britain — это…`, options: [`другое название Англии`, `остров с Англией, Шотландией и Уэльсом`, `Северная Ирландия`], answer: 1, explain: `Это большой остров, на котором находятся три из четырёх стран.` },
      { type: `tf`, q: `Король Соединённого Королевства — Карл III.`, answer: true, explain: `King Charles III, с 2022 года.` },
      { type: `mc`, q: `Валюта Соединённого Королевства —`, options: [`евро`, `доллар`, `фунт стерлингов`], answer: 2, explain: `Pound sterling (£).` },
      { type: `mc`, q: `Символ Англии —`, options: [`роза`, `чертополох`, `трилистник`], answer: 0, explain: `Роза = Англия, чертополох = Шотландия, трилистник = Северная Ирландия, нарцисс = Уэльс.` },
      { type: `num`, q: `В каком году был открыт тоннель под Ла-Маншем?`, answer: 1994, tol: 0, explain: `Channel Tunnel был открыт в 1994 году.` },
      { type: `order`, q: `Расставь «коробки» от самой маленькой до самой большой.`, items: [`England`, `Great Britain`, `United Kingdom`, `British Isles`], explain: `England ⊂ Great Britain ⊂ United Kingdom ⊂ British Isles.` },
      { type: `mc`, q: `Как называется река, текущая через Лондон?`, options: [`Severn`, `Thames`, `Tay`], answer: 1, explain: `Темза: Thames.` },
      { type: `tf`, q: `Уэльс представлен крестом на Union Jack.`, answer: false, explain: `Кресты принадлежат Англии, Шотландии и Ирландии.` },
      { type: `mc`, q: `Когда в Соединённом Королевстве едят блины?`, options: [`Pancake Day`, `Bonfire Night`, `Boxing Day`], answer: 0, explain: `В Жирный вторник, Pancake Day.` }
    ]
  }
});
