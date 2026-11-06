TOPIC('en', {
  id: "p1-mat-numeri-20",
  title: "Numbers up to 20",
  intro: "Numbers are everywhere! 🔢 On house doors, on the clock, on birthday cakes 🎂. Today we learn to <b>count</b>, <b>read</b> and <b>write</b> the numbers from 0 to 20.",
  minutes: 20,
  sections: [
    {
      type: "text",
      title: "Let's count together from 0 to 10",
      html: "<p>Counting means saying the numbers <b>one after the other</b>, without skipping any.</p>" +
        "<p>Touch each object with your finger and say a number: 1, 2, 3… The last number you say tells you <b>how many there are</b>!</p>" +
        "<table><tr><th>Digit</th><th>We say</th><th>How many</th></tr>" +
        "<tr><td>0</td><td>zero</td><td>nothing</td></tr>" +
        "<tr><td>1</td><td>one</td><td>🍎</td></tr>" +
        "<tr><td>2</td><td>two</td><td>🍎🍎</td></tr>" +
        "<tr><td>3</td><td>three</td><td>🍎🍎🍎</td></tr>" +
        "<tr><td>4</td><td>four</td><td>🍎🍎🍎🍎</td></tr>" +
        "<tr><td>5</td><td>five</td><td>🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>6</td><td>six</td><td>🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>7</td><td>seven</td><td>🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>8</td><td>eight</td><td>🍎🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>9</td><td>nine</td><td>🍎🍎🍎🍎🍎🍎🍎🍎🍎</td></tr>" +
        "<tr><td>10</td><td>ten</td><td>🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎</td></tr></table>" +
        "<p><b>Zero</b> (0) means there is nothing: the plate is empty! 🍽️</p>"
    },
    {
      type: "widget",
      title: "Your turn: count the apples",
      widget: "counter",
      options: { emoji: "🍎", max: 20 },
      caption: "Add and remove apples. Count out loud every time you add one!"
    },
    {
      type: "text",
      title: "The magic number 10: the ten",
      html: "<p>We have <b>10 fingers</b> on our hands ✋✋. That's why 10 is a special number.</p>" +
        "<p>When we have 10 objects we can tie them together in a bundle: it's called a <b>ten</b> (T).</p>" +
        "<p>The loose objects, which can't make a bundle, are called <b>units</b> or ones (U).</p>" +
        "<ul><li>11 = 1 ten and 1 unit</li><li>15 = 1 ten and 5 units</li><li>20 = 2 tens and 0 units</li></ul>"
    },
    {
      type: "svg",
      title: "Tens and units",
      svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">' +
        '<rect x="0" y="0" width="600" height="300" fill="#fff8e7"/>' +
        '<text x="300" y="40" font-size="28" text-anchor="middle" fill="#333" font-weight="bold">14 = 1 ten + 4 units</text>' +
        '<rect x="40" y="70" width="230" height="190" rx="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="4"/>' +
        '<text x="155" y="100" font-size="22" text-anchor="middle" fill="#1d4ed8" font-weight="bold">1 ten</text>' +
        '<g fill="#ef4444"><circle cx="75" cy="140" r="16"/><circle cx="115" cy="140" r="16"/><circle cx="155" cy="140" r="16"/><circle cx="195" cy="140" r="16"/><circle cx="235" cy="140" r="16"/>' +
        '<circle cx="75" cy="190" r="16"/><circle cx="115" cy="190" r="16"/><circle cx="155" cy="190" r="16"/><circle cx="195" cy="190" r="16"/><circle cx="235" cy="190" r="16"/></g>' +
        '<text x="155" y="245" font-size="20" text-anchor="middle" fill="#1d4ed8">10 balls</text>' +
        '<text x="305" y="180" font-size="48" text-anchor="middle" fill="#333" font-weight="bold">+</text>' +
        '<rect x="340" y="70" width="220" height="190" rx="18" fill="#dcfce7" stroke="#22c55e" stroke-width="4"/>' +
        '<text x="450" y="100" font-size="22" text-anchor="middle" fill="#15803d" font-weight="bold">4 units</text>' +
        '<g fill="#f59e0b"><circle cx="390" cy="165" r="16"/><circle cx="430" cy="165" r="16"/><circle cx="470" cy="165" r="16"/><circle cx="510" cy="165" r="16"/></g>' +
        '<text x="450" y="245" font-size="20" text-anchor="middle" fill="#15803d">4 loose balls</text>' +
        '</svg>',
      caption: "Ten balls make a ten. The others are units."
    },
    {
      type: "widget",
      title: "The abacus",
      widget: "abacus",
      options: { columns: ["T", "U"], value: 13 },
      caption: "Each bead on the tens rod is worth 10. Each bead on the units rod is worth 1. Try to make 17!"
    },
    {
      type: "example",
      title: "Example: the birthday party 🎂",
      html: "<p>Luke is turning 7. On the cake there are <b>7 candles</b>: 🕯️🕯️🕯️🕯️🕯️🕯️🕯️.</p>" +
        "<p>12 friends arrive. 12 is <b>1 ten and 2 units</b>: as many as the fingers of two hands plus two more!</p>"
    },
    {
      type: "quiz",
      title: "Mini-quiz: counting",
      questions: [
        { type: "num", q: "How many stars are there? ⭐⭐⭐⭐⭐⭐", answer: 6, explain: "Let's count: 1, 2, 3, 4, 5, 6. There are 6 stars." },
        { type: "mc", q: "How do you write the number «nine»?", options: ["6", "9", "19"], answer: 1, explain: "Nine is written 9." },
        { type: "tf", q: "Zero means «nothing».", answer: true, explain: "Right! 0 means there are no objects." }
      ]
    },
    {
      type: "text",
      title: "From 11 to 20",
      html: "<p>After 10 the numbers keep going. Listen carefully to their names:</p>" +
        "<ul><li>11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen</li>" +
        "<li>17 seventeen · 18 eighteen · 19 nineteen · 20 twenty</li></ul>" +
        "<p>Be careful! <b>Eleven</b> and <b>twelve</b> have special names. From 13 to 19 we say the units first and then «-teen», which means «ten» " +
        "(<b>four</b>-teen = 4 + 10, <b>six</b>-teen = 6 + 10, <b>nine</b>-teen = 9 + 10).</p>"
    },
    {
      type: "widget",
      title: "The number line",
      widget: "numberLine",
      options: { min: 0, max: 20, step: 1, marks: [10, 20] },
      caption: "On the line, numbers stand in a row. Going right they get bigger, going left they get smaller."
    },
    {
      type: "remember",
      title: "Before and after",
      html: "<p>The number that comes <b>after</b> is always <b>1 more</b>: after 7 comes 8.</p>" +
        "<p>The number that comes <b>before</b> is always <b>1 less</b>: before 7 comes 6.</p>" +
        "<p>If a number is further right on the line, it is <b>greater</b> (&gt;). If it is further left, it is <b>smaller</b> (&lt;).</p>"
    },
    {
      type: "example",
      title: "Example: lining up for snack time 🥪",
      html: "<p>We are in a line: Anna is number 4, Mark is number 5 and Sara is number 6.</p>" +
        "<p>Who comes <b>before</b> Mark? Anna (4). Who comes <b>after</b>? Sara (6). " +
        "Mark is <b>between</b> 4 and 6!</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? ✋",
      html: "<p>We count in groups of 10 precisely because we have <b>10 fingers</b>! People long ago counted on their hands, and that's how our way of writing numbers was born.</p>"
    },
    {
      type: "curiosity",
      title: "Did you know…? 🐞",
      html: "<p>There are only <b>ten</b> digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. With these ten digits you can write <b>all</b> the numbers in the world, even enormous ones!</p>"
    },
    {
      type: "3d",
      title: "Numbers with 3D cubes 🧊",
      scene: "blocks",
      options: { mode: "base10", value: 14 },
      caption: "Each cube is 1 unit. 10 cubes in a row become 1 rod: 1 ten! Move the slider and see how the number changes. Drag to turn the cubes."
    },
    {
      type: "alternatives",
      title: "Other ways to understand numbers 🌈",
      intro: "<p>There isn't just one way to count! Children all over the world use different tools. Try the one you like best.</p>",
      tabs: [
        {
          label: "✋ With your fingers",
          html: "<p>Hands are the first calculator in history! You have <b>10 fingers</b>: when they're all up you have made <b>1 ten</b>.</p><p>To get to 20 you need a friend: their 10 fingers are the <b>second ten</b>. 10 + 10 = 20!</p><p>Try it: hold up 10 fingers, then ask a classmate to hold up 4. How many are there? <b>14</b> = 1 ten and 4 units.</p>",
          svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="220" fill="#fff7ed"/><g fill="#fdba74" stroke="#c2410c" stroke-width="2"><rect x="40" y="100" width="110" height="80" rx="30"/><rect x="45" y="40" width="18" height="70" rx="9"/><rect x="68" y="30" width="18" height="80" rx="9"/><rect x="91" y="28" width="18" height="82" rx="9"/><rect x="114" y="36" width="18" height="74" rx="9"/><rect x="140" y="95" width="45" height="18" rx="9" transform="rotate(-30 140 104)"/><rect x="200" y="100" width="110" height="80" rx="30"/><rect x="215" y="36" width="18" height="74" rx="9"/><rect x="238" y="28" width="18" height="82" rx="9"/><rect x="261" y="30" width="18" height="80" rx="9"/><rect x="284" y="40" width="18" height="70" rx="9"/><rect x="170" y="95" width="45" height="18" rx="9" transform="rotate(30 215 104)"/></g><text x="175" y="210" font-size="20" text-anchor="middle" fill="#9a3412" font-family="sans-serif" font-weight="bold">10 fingers = 1 ten</text><g fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"><rect x="400" y="100" width="110" height="80" rx="30"/><rect x="405" y="40" width="18" height="70" rx="9"/><rect x="428" y="30" width="18" height="80" rx="9"/><rect x="451" y="28" width="18" height="82" rx="9"/><rect x="474" y="36" width="18" height="74" rx="9"/><rect x="500" y="120" width="40" height="18" rx="9"/></g><text x="470" y="210" font-size="20" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif" font-weight="bold">+ 4 = 14</text></svg>`
        },
        {
          label: "🇯🇵 The Japanese soroban",
          html: "<p>In Japan children learn to count with the <b>soroban</b>, a special abacus. On each rod there is <b>1 bead at the top worth 5</b> and <b>4 beads at the bottom worth 1</b>.</p><p>To make 7: you move down the 5 bead and push up 2 one-beads → 5 + 2 = <b>7</b>. This way you see numbers at a glance, without counting one by one!</p><p>Many Japanese children get so good that they then count with an <b>imaginary soroban</b> in their head.</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#fefce8"/><rect x="150" y="20" width="300" height="220" rx="12" fill="#92400e"/><rect x="165" y="35" width="270" height="190" fill="#fde68a"/><rect x="165" y="95" width="270" height="8" fill="#92400e"/><g stroke="#78350f" stroke-width="4"><line x1="230" y1="35" x2="230" y2="225"/><line x1="370" y1="35" x2="370" y2="225"/></g><g fill="#dc2626" stroke="#7f1d1d" stroke-width="2"><ellipse cx="230" cy="55" rx="30" ry="13"/><ellipse cx="230" cy="125" rx="30" ry="13"/><ellipse cx="230" cy="168" rx="30" ry="13"/><ellipse cx="230" cy="190" rx="30" ry="13"/><ellipse cx="230" cy="212" rx="30" ry="13"/><ellipse cx="370" cy="85" rx="30" ry="13"/><ellipse cx="370" cy="118" rx="30" ry="13"/><ellipse cx="370" cy="141" rx="30" ry="13"/><ellipse cx="370" cy="190" rx="30" ry="13"/><ellipse cx="370" cy="212" rx="30" ry="13"/></g><text x="230" y="252" font-size="18" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">tens: 1</text><text x="370" y="252" font-size="18" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1f2937">units: 5+2=7</text><text x="75" y="70" font-size="16" font-family="sans-serif" fill="#1f2937">worth 5 ⬆</text><text x="75" y="160" font-size="16" font-family="sans-serif" fill="#1f2937">worth 1 ⬇</text><text x="525" y="135" font-size="34" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#dc2626">17</text></svg>`
        },
        {
          label: "🧊 3D cubes",
          html: "<p>Build the number with cubes: the <b>rods</b> are the tens, the <b>loose cubes</b> are the units. Move the slider and turn the model with your finger.</p>",
          scene: "blocks",
          options: { mode: "base10", value: 17 }
        },
        {
          label: "📏 The number line",
          html: "<p>Imagine numbers as the <b>squares of a board game</b>: the further you go, the bigger the number. Make some jumps and see where you land!</p>",
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [10, 20] }
        },
        {
          label: "🎲 Seeing without counting",
          html: "<p>Look at the dots on <b>dice</b> and <b>dominoes</b>: you recognise 5 or 6 straight away, without counting one by one! Our brain sees <b>small groups</b>.</p><p>For example 8 = a group of 5 + a group of 3.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#f0fdf4"/><g><rect x="40" y="40" width="120" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><g fill="#166534"><circle cx="70" cy="70" r="11"/><circle cx="130" cy="70" r="11"/><circle cx="100" cy="100" r="11"/><circle cx="70" cy="130" r="11"/><circle cx="130" cy="130" r="11"/></g><text x="100" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">5</text></g><g><rect x="200" y="40" width="120" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><g fill="#166534"><circle cx="230" cy="70" r="11"/><circle cx="290" cy="70" r="11"/><circle cx="230" cy="100" r="11"/><circle cx="290" cy="100" r="11"/><circle cx="230" cy="130" r="11"/><circle cx="290" cy="130" r="11"/></g><text x="260" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">6</text></g><text x="345" y="110" font-size="30" font-family="sans-serif" fill="#166534">→</text><g><rect x="390" y="40" width="190" height="120" rx="18" fill="#fff" stroke="#166534" stroke-width="4"/><line x1="485" y1="45" x2="485" y2="155" stroke="#166534" stroke-width="3"/><g fill="#166534"><circle cx="415" cy="70" r="10"/><circle cx="460" cy="70" r="10"/><circle cx="437" cy="100" r="10"/><circle cx="415" cy="130" r="10"/><circle cx="460" cy="130" r="10"/><circle cx="510" cy="70" r="10"/><circle cx="532" cy="100" r="10"/><circle cx="555" cy="130" r="10"/></g><text x="485" y="190" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#166534">5 + 3 = 8</text></g></svg>`
        },
        {
          label: "🇨🇳 Tally marks",
          html: "<p>To keep count (for example of the points in a game) we draw <b>tally marks</b>. In Italy and in English-speaking countries we draw 4 lines and the fifth crosses them: a bundle of 5.</p><p>In <b>China and Japan</b>, instead, people write, one stroke at a time, the character <b>正</b>, which has exactly 5 strokes! Two 正 characters = 10 = 1 ten.</p>",
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="200" fill="#eff6ff"/><g stroke="#1e3a8a" stroke-width="6" stroke-linecap="round"><line x1="60" y1="50" x2="60" y2="130"/><line x1="85" y1="50" x2="85" y2="130"/><line x1="110" y1="50" x2="110" y2="130"/><line x1="135" y1="50" x2="135" y2="130"/><line x1="45" y1="120" x2="150" y2="60"/><line x1="190" y1="50" x2="190" y2="130"/><line x1="215" y1="50" x2="215" y2="130"/><line x1="240" y1="50" x2="240" y2="130"/><line x1="265" y1="50" x2="265" y2="130"/><line x1="175" y1="120" x2="280" y2="60"/></g><text x="165" y="175" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#1e3a8a">5 + 5 = 10 🇮🇹</text><text x="380" y="130" font-size="80" text-anchor="middle" fill="#b91c1c">正</text><text x="490" y="130" font-size="80" text-anchor="middle" fill="#b91c1c">正</text><text x="435" y="175" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#b91c1c">5 + 5 = 10 🇨🇳</text></svg>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "The map of numbers 🗺️",
      nodes: [
        { id: "quantita", label: "How many things?", x: 50, y: 8, color: "#f97316", html: "<p>It all starts with a question: <b>how many things are there?</b> Counting means giving a number to an amount.</p>", why: "<p>Humans have been counting for a very long time. In Africa a bone with lots of notches was found, the <b>Ishango bone</b>, more than 20,000 years old: maybe someone was keeping count of days or animals!</p>" },
        { id: "cifre", label: "The digits 0-9", x: 20, y: 35, color: "#3b82f6", html: "<p><b>Digits</b> are 10 symbols: 0 1 2 3 4 5 6 7 8 9. With them we write all the numbers in the world.</p>", why: "<p>We call them «Arabic numerals», but they were born in <b>India</b>. The Arabs brought them to Europe, and a mathematician from Pisa, <b>Fibonacci</b>, made them known in Italy more than 800 years ago. Before that people used Roman numerals (I, V, X), which were much less handy for doing sums!</p>" },
        { id: "zero", label: "Zero", x: 8, y: 62, color: "#64748b", html: "<p><b>0</b> means «nothing». But it is very important: in 10 and 20 the zero tells us there are no units.</p>", why: "<p>For thousands of years people had no symbol for nothing! Zero as a number was invented in <b>India</b>: a mathematician called Brahmagupta wrote down its rules about 1,400 years ago.</p>" },
        { id: "unita", label: "Units", x: 40, y: 62, color: "#22c55e", html: "<p>A <b>unit</b> is one single thing: 1 apple, 1 cube, 1 finger.</p>", why: "<p>We always start from one: every number is built by adding 1 to the number before. That's the secret of counting: 1, then 1 more, then 1 more again…</p>" },
        { id: "decina", label: "Ten", x: 65, y: 40, color: "#a855f7", html: "<p>When you have <b>10 units</b>, you put them together in a group: it's <b>1 ten</b>.</p>", why: "<p>Why exactly 10? Because we have <b>10 fingers</b>! Not everyone counted like that, though: the <b>Maya</b> counted in groups of 20 (fingers and toes) and the ancient <b>Babylonians</b> in groups of 60. That's why an hour has 60 minutes!</p>" },
        { id: "posizione", label: "Place matters!", x: 70, y: 70, color: "#ec4899", html: "<p>In <b>14</b> the digit 1 is worth one ten and the digit 4 is worth 4 units. The same digit is worth more if it is further to the left.</p>", why: "<p>It's a brilliant idea born in India: with just 10 symbols and their <b>place</b> we can write tiny numbers and huge numbers. With Roman numerals, instead, you needed lots of different symbols.</p>" },
        { id: "ordine", label: "Before and after", x: 88, y: 20, color: "#0ea5e9", html: "<p>Numbers stand <b>in a row</b>: after 7 comes 8, before 7 there is 6.</p>", why: "<p>Every number is the one before <b>+ 1</b>. That's why the row of numbers never ends: you can always add 1!</p>" },
        { id: "confronto", label: "Bigger, smaller", x: 90, y: 55, color: "#eab308", html: "<p>A number is <b>bigger</b> if it is further along the row: 18 is bigger than 12.</p>", why: "<p>We compare the tens first, then the units: 18 and 12 both have 1 ten, but 8 units are more than 2.</p>" }
      ],
      edges: [
        ["quantita", "cifre", "is written with"],
        ["cifre", "zero", "the most special"],
        ["quantita", "unita", "is counted in"],
        ["unita", "decina", "10 make 1"],
        ["decina", "posizione", "depends on"],
        ["zero", "posizione", "keeps the place"],
        ["quantita", "ordine", "in a row"],
        ["ordine", "confronto", "is used for"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: before, after, bigger",
      questions: [
        { type: "num", q: "What number comes after 14?", answer: 15, explain: "After always means 1 more: 14 + 1 = 15." },
        { type: "num", q: "What number comes before 20?", answer: 19, explain: "Before always means 1 less: 19." },
        { type: "mc", q: "Which is the biggest number?", options: ["12", "18", "8"], answer: 1, explain: "18 is furthest to the right on the number line." }
      ]
    }
  ],
  glossary: [
    { t: "Number", d: "Tells how many things there are." },
    { t: "Digit", d: "One of the 10 signs (from 0 to 9) we use to write numbers." },
    { t: "Unit", d: "One single object. It is worth 1." },
    { t: "Ten", d: "A group of 10 units." },
    { t: "Greater (>)", d: "Bigger." },
    { t: "Less (<)", d: "Smaller." },
    { t: "Number line", d: "A line where numbers are placed in order from the smallest to the biggest." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "How many toy cars are there? 🚗🚗🚗🚗🚗🚗🚗🚗", answer: 8, explain: "Counting one at a time we get to 8." },
      { type: "mc", q: "How do you write «sixteen»?", options: ["61", "16", "6"], answer: 1, explain: "Sixteen is 1 ten and 6 units: 16." },
      { type: "mc", q: "How many tens are there in 20?", options: ["1", "2", "0"], answer: 1, explain: "20 = 2 tens and 0 units." },
      { type: "num", q: "1 ten and 3 units make…", answer: 13, explain: "10 + 3 = 13." },
      { type: "tf", q: "9 is greater than 19.", answer: false, explain: "No: 19 is bigger than 9, because it also has a ten." },
      { type: "num", q: "Which number is between 11 and 13?", answer: 12, explain: "11, 12, 13: in the middle there is 12." },
      { type: "order", q: "Put them in order from smallest to biggest", items: ["3", "8", "11", "17"], explain: "3 < 8 < 11 < 17." },
      { type: "text", q: "Write the number 10 in words.", answer: ["ten"], explain: "10 is written «ten»." },
      { type: "mc", q: "Which group has 5 objects?", options: ["🐟🐟🐟🐟", "🐟🐟🐟🐟🐟", "🐟🐟🐟🐟🐟🐟"], answer: 1, explain: "Let's count: the second group has 5 fish." },
      { type: "tf", q: "With 10 fingers we can make a ten.", answer: true, explain: "Exactly! 10 units make 1 ten." }
    ],
    gen: [["count20", 2], ["compare20", 2]]
  }
});
