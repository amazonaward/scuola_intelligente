TOPIC('en', {
  id: "p1-sci-stagioni",
  title: "The seasons",
  intro: "In one year nature changes its clothes four times: flowers in <b>spring</b> 🌸, sun and heat in <b>summer</b> ☀️, colourful leaves in <b>autumn</b> 🍂, cold and snow in <b>winter</b> ❄️. These are the <b>four seasons</b>!",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "The four seasons",
      html: `<p>The year has <b>4 seasons</b> that always come in the same order, like a ring-a-roses:</p>
<ul>
<li>🌸 <b>Spring</b> — starts around <b>21 March</b>. The days get longer, flowers bloom, trees grow new leaves.</li>
<li>☀️ <b>Summer</b> — starts around <b>21 June</b>. It is hot, the days are very long, lots of fruit ripens.</li>
<li>🍂 <b>Autumn</b> — starts around <b>23 September</b>. Leaves turn yellow and red and fall, grapes and chestnuts are harvested.</li>
<li>❄️ <b>Winter</b> — starts around <b>21 December</b>. It is cold, the days are short, sometimes it snows.</li>
</ul>
<p>Then spring starts again… and so on, every year! 🔄</p>`
    },
    {
      type: "svg",
      title: "The same tree in the four seasons",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="150" height="300" fill="#dcfce7"/>
<rect x="150" width="150" height="300" fill="#fef9c3"/>
<rect x="300" width="150" height="300" fill="#ffedd5"/>
<rect x="450" width="150" height="300" fill="#e0f2fe"/>
<g fill="#78350f"><rect x="67" y="150" width="16" height="90"/><rect x="217" y="150" width="16" height="90"/><rect x="367" y="150" width="16" height="90"/><rect x="517" y="150" width="16" height="90"/></g>
<circle cx="75" cy="120" r="50" fill="#86efac"/>
<g fill="#f9a8d4"><circle cx="55" cy="100" r="7"/><circle cx="90" cy="95" r="7"/><circle cx="70" cy="135" r="7"/><circle cx="100" cy="125" r="7"/><circle cx="45" cy="130" r="7"/></g>
<circle cx="225" cy="115" r="58" fill="#16a34a"/>
<g fill="#ef4444"><circle cx="205" cy="100" r="8"/><circle cx="245" cy="110" r="8"/><circle cx="225" cy="140" r="8"/></g>
<circle cx="375" cy="120" r="50" fill="#f97316"/>
<circle cx="360" cy="110" r="22" fill="#facc15"/>
<g fill="#ea580c"><circle cx="340" cy="255" r="6"/><circle cx="400" cy="262" r="6"/><circle cx="420" cy="250" r="5"/></g>
<g stroke="#78350f" stroke-width="6"><line x1="525" y1="160" x2="490" y2="110"/><line x1="525" y1="160" x2="560" y2="105"/><line x1="525" y1="150" x2="525" y2="90"/></g>
<g fill="#ffffff"><circle cx="490" cy="60" r="4"/><circle cx="560" cy="40" r="4"/><circle cx="520" cy="70" r="4"/><circle cx="580" cy="80" r="4"/><circle cx="470" cy="30" r="4"/></g>
<rect y="240" width="450" height="60" fill="#65a30d"/>
<rect x="450" y="240" width="150" height="60" fill="#f8fafc"/>
<g font-size="18" font-weight="bold" text-anchor="middle">
<text x="75" y="280" fill="#ffffff">SPRING</text><text x="225" y="280" fill="#ffffff">SUMMER</text><text x="375" y="280" fill="#ffffff">AUTUMN</text><text x="525" y="280" fill="#0369a1">WINTER</text>
</g>
<g font-size="15" text-anchor="middle" fill="#374151">
<text x="75" y="30">flowers 🌸</text><text x="225" y="30">fruit 🍒</text><text x="375" y="30">falling leaves</text><text x="525" y="230">bare branches</text>
</g>
</svg>`,
      caption: "Many trees, like the apple tree or the cherry tree, change how they look in every season. Others, like the pine, stay green all year round (evergreens)."
    },
    {
      type: "example",
      title: "Example: what shall I wear? 👕🧥",
      html: `<ul>
<li>🌸 <b>Spring</b>: a light sweatshirt and… an umbrella! It often rains in spring.</li>
<li>☀️ <b>Summer</b>: T-shirt, shorts, a cap and sun cream.</li>
<li>🍂 <b>Autumn</b>: a jacket and wellies for the puddles.</li>
<li>❄️ <b>Winter</b>: coat, scarf, gloves and a woolly hat.</li>
</ul>`
    },
    {
      type: "widget",
      title: "Which season?",
      widget: "classify",
      options: {
        groups: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"],
        items: [
          ["🌷 tulips bloom", 0],
          ["🐣 lots of chicks and baby birds hatch", 0],
          ["🏖️ holidays at the seaside", 1],
          ["🍉 we eat watermelon", 1],
          ["🍇 grape harvest", 2],
          ["🌰 chestnuts are gathered", 2],
          ["⛄ snowman", 3],
          ["🎄 Christmas", 3]
        ]
      },
      caption: "Think of Italy: in which season does each thing happen?"
    },
    {
      type: "quiz",
      title: "Mini-quiz: the seasons",
      questions: [
        { type: "num", q: "How many seasons are there?", answer: 4, explain: "Spring, summer, autumn and winter: 4." },
        { type: "mc", q: "In which season do the leaves fall? 🍂", options: ["Spring", "Autumn", "Summer"], answer: 1, explain: "In autumn many trees lose their leaves." },
        { type: "mc", q: "After winter comes…", options: ["summer", "autumn", "spring"], answer: 2, explain: "The order is: spring, summer, autumn, winter, and then spring again." }
      ]
    },
    {
      type: "text",
      title: "Animals and the seasons",
      html: `<p>Animals get ready for the change of season too:</p>
<ul>
<li>🐻 Some <b>hibernate</b>: they sleep for almost the whole winter in a den, like the <b>dormouse</b>, the <b>hedgehog</b> and the <b>marmot</b>. The bear has a long, deep winter sleep.</li>
<li>🐦 Others <b>migrate</b>: in autumn <b>swallows</b> fly all the way to Africa, where it is warm, and come back to us in spring.</li>
<li>🐿️ In autumn the <b>squirrel</b> hides acorns and hazelnuts for the winter.</li>
<li>🐑 In winter many animals have <b>thicker fur</b>, which they then lose in spring (<b>moulting</b>).</li>
</ul>`
    },
    {
      type: "text",
      title: "Why are there seasons?",
      html: `<p>The <b>Earth</b> 🌍 goes round the <b>Sun</b> ☀️: one whole trip takes <b>a year</b>.</p>
<p>But the Earth is a little <b>tilted</b>, like a wonky spinning top. That is why:</p>
<ul>
<li>for part of the year Italy is <b>turned more towards the Sun</b>: the rays arrive straight, the Sun is high and the days are long → <b>summer</b>;</li>
<li>for another part it is <b>turned less</b> towards the Sun: the rays arrive slanting, the days are short → <b>winter</b>.</li>
</ul>
<p>Careful: it is <b>not</b> because the Earth is closer to the Sun in summer! In fact, the Earth is closest to the Sun at the beginning of <b>January</b>.</p>`
    },
    {
      type: "3d",
      title: "The Earth goes round the Sun 🌍☀️",
      scene: "solar",
      options: { labels: true },
      caption: "Find the Earth (the third planet): it makes a whole trip round the Sun in one year, that is in about 365 days. During the trip all four seasons go by."
    },
    {
      type: "example",
      title: "Example: seasonal fruit and vegetables 🍎",
      html: `<p>Each season has its own fruit and vegetables, which ripen in the right weather:</p>
<ul>
<li>🌸 <b>Spring</b>: strawberries, peas, asparagus.</li>
<li>☀️ <b>Summer</b>: peaches, cherries, watermelon, tomatoes, courgettes.</li>
<li>🍂 <b>Autumn</b>: grapes, apples, chestnuts, pumpkin, persimmons.</li>
<li>❄️ <b>Winter</b>: oranges, mandarins, cabbages, fennel.</li>
</ul>
<p>Oranges ripen in winter: and they have lots of <b>vitamin C</b>, which is useful when colds are going round! 🍊</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🎅🏖️",
      html: `<p>In <b>Australia</b> the seasons are <b>the other way round</b> compared with Italy! When it is winter here, it is summer there: that is why many Australian children celebrate <b>Christmas on the beach</b>, in their swimsuits! 🦘</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🎻",
      html: `<p>The Italian composer <b>Antonio Vivaldi</b>, born in Venice, wrote a very famous piece of music called <b>“The Four Seasons”</b> (published in 1725). When you listen to it you can hear the birds of spring, the summer storm, the grape-harvest party and teeth chattering in the winter cold!</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>There are <b>4</b> seasons: spring, summer, autumn, winter.</li>
<li>They always come in the <b>same order</b> and start again every year.</li>
<li>We have seasons because the <b>tilted</b> Earth goes round the Sun.</li>
<li>Plants, animals and people change their habits with the seasons.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the seasons 🌈",
      intro: "<p>Why we have seasons is a bit tricky: try one of these ways!</p>",
      tabs: [
        {
          label: "🔦 The torch",
          html: `<p>In the dark, point a <b>torch</b> straight down at the floor: it makes a small, <b>very bright</b> circle. Now tilt it: the light spreads out and gets <b>weaker</b>.</p>
<p>The Sun does the same! In <b>summer</b> the rays arrive straighter and warm a lot; in <b>winter</b> they arrive slanting, spread out and warm only a little.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#1e293b"/>
<rect x="0" y="200" width="600" height="40" fill="#475569"/>
<rect x="130" y="20" width="40" height="60" fill="#94a3b8"/>
<polygon points="130,80 170,80 190,200 110,200" fill="#fde047" opacity="0.85"/>
<ellipse cx="150" cy="200" rx="40" ry="8" fill="#facc15"/>
<rect x="380" y="20" width="40" height="60" fill="#94a3b8" transform="rotate(-35 400 50)"/>
<polygon points="410,70 440,90 580,200 380,200" fill="#fde047" opacity="0.35"/>
<ellipse cx="480" cy="200" rx="100" ry="10" fill="#fde68a" opacity="0.6"/>
<text x="150" y="232" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">SUMMER: strong light</text>
<text x="480" y="232" font-size="17" text-anchor="middle" fill="#ffffff" font-weight="bold">WINTER: weak light</text>
</svg>`
        },
        {
          label: "🇦🇺 The other half of the world",
          html: `<p>The Earth is divided into two halves by the <b>Equator</b>. When our half (the north) is tilted towards the Sun, the other half (the south) is tilted the other way.</p>
<p>That is why at <b>Christmas</b> it is cold in Rome and hot in Sydney! And near the Equator, in places like Kenya or northern Brazil, it is hot all year round: there the seasons are mainly two, the <b>rainy</b> season and the <b>dry</b> season.</p>`,
          scene: "globe",
          options: {
            points: [
              { lat: 41.9, lon: 12.5, label: "Rome: December = winter", color: "#3b82f6" },
              { lat: -33.9, lon: 151.2, label: "Sydney: December = summer", color: "#ef4444" },
              { lat: -1.3, lon: 36.8, label: "Nairobi: near the Equator", color: "#22c55e" }
            ]
          }
        },
        {
          label: "🇯🇵 Japan's 72 seasons",
          html: `<p>In <b>Japan</b> the old calendar divided the year into <b>24 periods</b>, and each one into 3 parts: <b>72 micro-seasons</b> of about 5 days, with poetic names like “the frogs begin to sing” or “the first frost falls”.</p>
<p>You try too: every week look at a tree near your home and draw what has changed. You will notice that nature changes a tiny bit <b>every day</b>!</p>`
        },
        {
          label: "🎡 The wheel of the year",
          html: `<p>Imagine the year as a <b>wheel</b> that turns: each slice is a season, and when winter ends the wheel starts again from spring. Flip the cards: on the front the season, on the back when it starts and one of its signs.</p>`,
          widget: "flashcards",
          options: {
            cards: [
              { front: "🌸 Spring", back: "Starts around 21 March. Sign: the swallows come back!" },
              { front: "☀️ Summer", back: "Starts around 21 June, the longest day. Sign: the cicadas sing." },
              { front: "🍂 Autumn", back: "Starts around 23 September. Sign: the leaves change colour." },
              { front: "❄️ Winter", back: "Starts around 21 December, the shortest day. Sign: frost on the fields in the morning." }
            ]
          }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "The map of the seasons 🗺️",
      nodes: [
        { id: "sole", label: "The Sun", x: 50, y: 6, color: "#f59e0b", html: "<p>The star that gives us light and warmth.</p>", why: "<p>Without the Sun the Earth would be dark and freezing cold: all life depends on it.</p>" },
        { id: "giro", label: "The Earth's trip", x: 25, y: 28, color: "#3b82f6", html: "<p>The Earth goes round the Sun: one trip = <b>one year</b>.</p>", why: "<p>It was the Polish astronomer <b>Nicolaus Copernicus</b>, in 1543, who explained that the Earth goes round the Sun and not the other way round. <b>Galileo Galilei</b> supported him with his observations through the telescope.</p>" },
        { id: "inclinazione", label: "The tilted Earth", x: 75, y: 28, color: "#8b5cf6", html: "<p>The Earth's axis is tilted by about <b>23 degrees</b>.</p>", why: "<p>Scientists think it happened a very long time ago, when the Earth was very young, perhaps because of a crash with another large body in space.</p>" },
        { id: "raggi", label: "Straight or slanting rays", x: 50, y: 48, color: "#ef4444", html: "<p>In summer the rays arrive straighter and the days are longer; in winter they are more slanting and the days are shorter.</p>", why: "<p>Like the torch: straight light = more heat in a small space. And more hours of sunshine = more time to warm up.</p>" },
        { id: "stagioni", label: "The 4 seasons", x: 50, y: 66, color: "#22c55e", html: "<p>Spring, summer, autumn, winter.</p>", why: "<p>Their astronomical beginnings are the <b>equinoxes</b> (day and night equally long, in March and September) and the <b>solstices</b> (longest day in June, shortest in December).</p>" },
        { id: "piante", label: "Plants", x: 15, y: 88, color: "#16a34a", html: "<p>They flower, make fruit, lose their leaves, rest.</p>", why: "<p>In winter there is little light and water can freeze: many trees lose their leaves to save energy and start again in spring.</p>" },
        { id: "animali", label: "Animals", x: 50, y: 92, color: "#a16207", html: "<p>Hibernation, migration, food stores, moulting.</p>", why: "<p>In winter food is scarce: those who sleep use up little energy, those who migrate go where there is food.</p>" },
        { id: "persone", label: "People", x: 85, y: 88, color: "#ec4899", html: "<p>Clothes, food, festivals and farm work change with the seasons.</p>", why: "<p>Farmers have always sown and harvested following the seasons: that is why calendars were invented.</p>" }
      ],
      edges: [
        ["sole", "giro", ""],
        ["giro", "raggi", ""],
        ["inclinazione", "raggi", "changes the"],
        ["raggi", "stagioni", "create the"],
        ["stagioni", "piante", ""],
        ["stagioni", "animali", ""],
        ["stagioni", "persone", ""]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: why the seasons?",
      questions: [
        { type: "mc", q: "How long does the Earth take to go once round the Sun?", options: ["One day", "One month", "One year"], answer: 2, explain: "One whole trip takes a year, about 365 days." },
        { type: "tf", q: "In summer it is hot because the Earth is closer to the Sun.", answer: false, explain: "No! It is hot because the rays arrive straighter and the days are longer. The Earth is closest to the Sun in January." },
        { type: "mc", q: "What do swallows do in autumn?", options: ["They hibernate", "They migrate to Africa", "They change colour"], answer: 1, explain: "Swallows migrate to Africa, where it is warm, and come back in spring." }
      ]
    }
  ],
  glossary: [
    { t: "Season", d: "Each of the 4 parts of the year, with its own weather." },
    { t: "Hibernation", d: "Long winter sleep of some animals, like the dormouse and the hedgehog." },
    { t: "Migration", d: "The journey of some animals to warmer places or places with more food." },
    { t: "Evergreen", d: "A plant that stays green all year round, like the pine." },
    { t: "Solstice", d: "The longest (in June) or shortest (in December) day of the year." },
    { t: "Equinox", d: "A day when light and dark last about the same time (March and September)." },
    { t: "Grape harvest", d: "Picking the grapes, in autumn." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "order", q: "Put the seasons in order starting from spring.", items: ["Spring", "Summer", "Autumn", "Winter"], explain: "Spring, summer, autumn, winter." },
      { type: "mc", q: "In which season does it snow most often in Italy?", options: ["Winter", "Summer", "Spring"], answer: 0, explain: "Snow falls mostly in winter." },
      { type: "mc", q: "In which season do lots of flowers bloom?", options: ["Autumn", "Spring", "Winter"], answer: 1, explain: "Spring is the season of flowers." },
      { type: "mc", q: "The grape harvest takes place in…", options: ["autumn", "winter", "spring"], answer: 0, explain: "Grapes are picked at the end of summer and in autumn." },
      { type: "tf", q: "The dormouse hibernates in winter.", answer: true, explain: "Yes, the dormouse sleeps for almost the whole winter." },
      { type: "tf", q: "In Australia, when it is winter here, it is summer.", answer: true, explain: "In the other half of the world the seasons are the other way round." },
      { type: "num", q: "About how many days are there in a year?", answer: 365, explain: "A year has 365 days (366 in leap years)." },
      { type: "text", q: "What is the journey of the swallows to Africa called?", answer: ["migration", "the migration", "migrating"], explain: "It is migration." },
      { type: "mc", q: "Which fruit ripens in winter?", options: ["Watermelon", "Orange", "Cherry"], answer: 1, explain: "Oranges ripen in winter." },
      { type: "mc", q: "Why are there seasons?", options: ["Because the Moon covers the Sun", "Because the tilted Earth goes round the Sun", "Because the Sun switches off in winter"], answer: 1, explain: "The Earth is tilted and goes round the Sun: so the rays change during the year." },
      { type: "tf", q: "The pine tree loses all its leaves in autumn.", answer: false, explain: "The pine is an evergreen: it stays green all year round." }
    ]
  }
});
