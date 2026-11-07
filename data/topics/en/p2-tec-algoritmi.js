TOPIC('en', {
  id: "p2-tec-algoritmi",
  title: "Everyday Algorithms",
  intro: "Did you know that every morning you follow some <b>algorithms</b>? 🪥 Brushing your teeth, packing your school bag 🎒, baking a cake 🎂… An <b>algorithm</b> is a list of <b>instructions in order</b> to reach a result. Computers and robots 🤖 work exactly like this!",
  minutes: 25,
  sections: [
    {
      type: "text",
      title: "What is an algorithm? 📝",
      html: `<p>An <b>algorithm</b> is a <b>sequence of instructions</b> (steps) that, when followed from beginning to end, solves a problem.</p>
<p>A good algorithm is:</p>
<ul>
<li>🔢 <b>ordered</b>: the steps are in a row, one after the other;</li>
<li>🎯 <b>precise</b>: each instruction can be understood without doubt;</li>
<li>🏁 <b>finite</b>: sooner or later it reaches the end.</li>
</ul>
<p>Example: <b>washing your hands</b> 🧼</p>
<ol>
<li>Turn on the water 🚰</li>
<li>Wet your hands</li>
<li>Put on soap 🧼</li>
<li>Rub for 20 seconds</li>
<li>Rinse</li>
<li>Turn off the water</li>
<li>Dry your hands 🧻</li>
</ol>`
    },
    {
      type: "text",
      title: "Order is important! 🔀",
      html: `<p>If you change the order of the steps, the result can become… a disaster! 😱</p>
<table>
<tr><th>✅ Right order</th><th>❌ Wrong order</th></tr>
<tr><td>1. I put on my socks 🧦<br>2. I put on my shoes 👟</td><td>1. I put on my shoes 👟<br>2. I put on my socks 🧦<br><i>…socks over the shoes?!</i></td></tr>
<tr><td>1. I open my umbrella ☂️<br>2. I go out in the rain</td><td>1. I go out in the rain<br>2. I open my umbrella<br><i>…I'm already wet!</i></td></tr>
</table>
<p>A computer carries out the instructions <b>exactly</b> in the order you write them: it does not notice if there is a mistake!</p>`
    },
    {
      type: "svg",
      title: "The cake algorithm 🎂",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#fff7ed"/>
<rect x="200" y="10" width="200" height="40" rx="20" fill="#22c55e"/>
<text x="300" y="37" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">START</text>
<line x1="300" y1="50" x2="300" y2="65" stroke="#334155" stroke-width="3"/>
<polygon points="293,62 307,62 300,70" fill="#334155"/>
<rect x="160" y="70" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="95" font-size="16" text-anchor="middle" fill="#713f12">1. Break 3 eggs into the bowl</text>
<line x1="300" y1="108" x2="300" y2="120" stroke="#334155" stroke-width="3"/>
<polygon points="293,117 307,117 300,125" fill="#334155"/>
<rect x="160" y="125" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="150" font-size="16" text-anchor="middle" fill="#713f12">2. Add sugar and flour</text>
<line x1="300" y1="163" x2="300" y2="175" stroke="#334155" stroke-width="3"/>
<polygon points="293,172 307,172 300,180" fill="#334155"/>
<rect x="160" y="180" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="205" font-size="16" text-anchor="middle" fill="#713f12">3. Mix well</text>
<line x1="300" y1="218" x2="300" y2="230" stroke="#334155" stroke-width="3"/>
<polygon points="293,227 307,227 300,235" fill="#334155"/>
<rect x="160" y="235" width="280" height="38" rx="6" fill="#fde68a" stroke="#a16207" stroke-width="2"/>
<text x="300" y="260" font-size="16" text-anchor="middle" fill="#713f12">4. Bake in the oven for 30 minutes</text>
<line x1="300" y1="273" x2="300" y2="280" stroke="#334155" stroke-width="3"/>
<rect x="200" y="280" width="200" height="36" rx="18" fill="#ef4444"/>
<text x="300" y="304" font-size="18" text-anchor="middle" fill="#ffffff" font-weight="bold">END: cake!</text>
<text x="80" y="160" font-size="50" text-anchor="middle">🥚</text>
<text x="520" y="200" font-size="50" text-anchor="middle">🎂</text>
</svg>`,
      caption: "An algorithm can be drawn as a diagram: you start from START, follow the arrows and arrive at END."
    },
    {
      type: "quiz",
      title: "Mini-quiz: in order!",
      questions: [
        { type: "order", q: "Put in order: brushing your teeth 🪥", items: ["I pick up the toothbrush", "I put on the toothpaste", "I brush my teeth", "I rinse my mouth"], explain: "First you prepare the toothbrush, then you brush, then you rinse." },
        { type: "tf", q: "In an algorithm the order of the steps does not matter.", answer: false, explain: "Order matters a lot: socks before shoes!" },
        { type: "mc", q: "An algorithm is…", options: ["a list of instructions in order", "a kind of animal", "a card game"], answer: 0, explain: "It is an ordered sequence of instructions." }
      ]
    },
    {
      type: "text",
      title: "Precise instructions for a robot 🤖",
      html: `<p>A robot is not as clever as you: it does <b>only</b> what you tell it, <b>word for word</b>.</p>
<p>If you tell the robot “<i>Make the snack</i>”, it does not know where to start! 🤷 You have to explain every step:</p>
<ol>
<li>Open the cupboard.</li>
<li>Take the bread.</li>
<li>Take the spreading knife.</li>
<li>Spread the jam on the bread.</li>
</ol>
<p>To move a robot on a grid we use simple arrows:</p>
<p style="font-size:1.2em">⬆️ <b>forward 1</b> &nbsp; ↪️ <b>turn right</b> &nbsp; ↩️ <b>turn left</b></p>
<p>Writing instructions for a computer or a robot is called <b>programming</b> (or doing <b>coding</b>).</p>`
    },
    {
      type: "svg",
      title: "Help the robot reach the apple 🍎",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="320" fill="#f8fafc"/>
<g stroke="#94a3b8" stroke-width="2" fill="#e0f2fe">
<rect x="40" y="20" width="70" height="70"/><rect x="110" y="20" width="70" height="70"/><rect x="180" y="20" width="70" height="70"/><rect x="250" y="20" width="70" height="70"/>
<rect x="40" y="90" width="70" height="70"/><rect x="110" y="90" width="70" height="70"/><rect x="180" y="90" width="70" height="70"/><rect x="250" y="90" width="70" height="70"/>
<rect x="40" y="160" width="70" height="70"/><rect x="110" y="160" width="70" height="70"/><rect x="180" y="160" width="70" height="70"/><rect x="250" y="160" width="70" height="70"/>
<rect x="40" y="230" width="70" height="70"/><rect x="110" y="230" width="70" height="70"/><rect x="180" y="230" width="70" height="70"/><rect x="250" y="230" width="70" height="70"/>
</g>
<rect x="55" y="245" width="40" height="40" rx="8" fill="#64748b"/>
<circle cx="68" cy="260" r="5" fill="#facc15"/>
<circle cx="82" cy="260" r="5" fill="#facc15"/>
<rect x="66" y="272" width="18" height="4" fill="#facc15"/>
<circle cx="285" cy="55" r="20" fill="#ef4444"/>
<rect x="283" y="30" width="4" height="10" fill="#78350f"/>
<path d="M75 245 L75 125 L285 125 L285 80" stroke="#f97316" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="460" y="60" font-size="18" text-anchor="middle" fill="#0f172a" font-weight="bold">The program:</text>
<text x="460" y="95" font-size="17" text-anchor="middle" fill="#0f172a">forward, forward</text>
<text x="460" y="125" font-size="17" text-anchor="middle" fill="#0f172a">turn right</text>
<text x="460" y="155" font-size="17" text-anchor="middle" fill="#0f172a">forward, forward, forward</text>
<text x="460" y="185" font-size="17" text-anchor="middle" fill="#0f172a">turn left</text>
<text x="460" y="215" font-size="17" text-anchor="middle" fill="#0f172a">forward</text>
<text x="460" y="260" font-size="18" text-anchor="middle" fill="#15803d" font-weight="bold">Apple reached!</text>
</svg>`,
      caption: "The robot starts at the bottom left facing up. Follow the orange path with your finger and check every instruction."
    },
    {
      type: "widget",
      title: "Precise or confusing instruction?",
      widget: "classify",
      options: {
        groups: ["🎯 Precise: the robot understands", "🤷 Confusing: the robot does not understand"],
        items: [
          ["Take 2 steps forward", 0],
          ["Go a bit further over there", 1],
          ["Turn right", 0],
          ["Do something nice", 1],
          ["Pick up the red ball", 0],
          ["Tidy everything", 1],
          ["Repeat 3 times: jump", 0],
          ["Do as you like", 1]
        ]
      },
      caption: "An instruction is precise when it says exactly what to do, how much and which thing."
    },
    {
      type: "text",
      title: "Two tricks of algorithms: REPEAT and IF 🔁❓",
      html: `<p><b>🔁 REPEAT (loop)</b><br>Instead of writing “forward, forward, forward, forward”, I write: <b>“repeat 4 times: forward”</b>. Shorter and clearer!</p>
<p>Example: to climb the stairs 🪜 → <i>repeat until you reach the top: climb one step</i>.</p>
<p><b>❓ IF… THEN… ELSE (condition)</b><br>Sometimes you have to choose:</p>
<p>☔ <i><b>IF</b> it is raining, <b>THEN</b> I take the umbrella, <b>ELSE</b> I take my cap.</i></p>
<p>🚦 <i><b>IF</b> the traffic light is green, <b>THEN</b> I cross, <b>ELSE</b> I wait.</i></p>
<p>With <b>sequences</b>, <b>loops</b> and <b>conditions</b> you can build all the programs in the world, even video games! 🎮</p>`
    },
    {
      type: "3d",
      title: "REPEAT with blocks 🧊",
      scene: "blocks",
      options: { mode: "array", a: 3, b: 4 },
      caption: "The algorithm is: “REPEAT 3 times: put down a row of 4 blocks”. Move the sliders to change how many times to repeat and how many blocks to put each time. How many blocks in all?"
    },
    {
      type: "example",
      title: "Practical example: the school bag 🎒",
      html: `<p>Every evening Tommaso follows his algorithm:</p>
<ol>
<li>📅 He looks at tomorrow's timetable.</li>
<li>🔁 <b>Repeat</b> for each subject: put the book and the notebook in the bag.</li>
<li>✏️ He checks the pencil case.</li>
<li>❓ <b>If</b> tomorrow there is PE, <b>then</b> he gets his gym shoes ready 👟.</li>
<li>🚪 He puts the bag near the door.</li>
</ol>
<p>There is a <b>sequence</b>, a <b>loop</b> (repeat) and a <b>condition</b> (if)! This way he forgets nothing.</p>`
    },
    {
      type: "example",
      title: "Practical example: the human robot game 🧍‍♂️🤖",
      html: `<p>In class you play in pairs: one is the <b>programmer</b>, the other is the <b>robot</b>.</p>
<ul>
<li>The programmer writes on a sheet the arrows to take the robot from the desk to the blackboard: ⬆️⬆️↪️⬆️⬆️⬆️</li>
<li>The robot does <b>only</b> what is written, without thinking.</li>
<li>If the robot bumps into a chair… there is an <b>error</b> in the program! It is called a <b>bug</b> 🐞.</li>
<li>The programmer finds the error and fixes it: this is called <b>debugging</b>.</li>
</ul>
<p>Making mistakes is perfectly fine: even the best programmers find and fix errors every day!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 📜",
      html: `<p>The word <b>algorithm</b> comes from the name of a great mathematician, <b>al-Khwarizmi</b>, who lived about <b>1,200 years ago</b> in <b>Baghdad</b> (today in Iraq). He wrote a book explaining how to do calculations with the numbers we still use today, 0 1 2 3… When the book was translated into Latin, his name became “Algoritmi”!</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? 🦋",
      html: `<p>Why is a mistake in programs called a <b>bug</b>? In <b>1947</b>, in the United States, a giant computer broke down: inside it, the scientists in <b>Grace Hopper</b>'s group found a <b>moth</b> stuck there! They taped it into their notebook, writing that they had found the first real “bug”. The notebook with the moth is still in a museum!</p>`
    },
    {
      type: "widget",
      title: "The history of algorithms",
      widget: "timeline",
      options: {
        unit: "years",
        events: [
          { year: -300, label: "Euclid writes an algorithm for numbers", icon: "📐" },
          { year: 825, label: "Al-Khwarizmi in Baghdad", icon: "📜" },
          { year: 1843, label: "Ada Lovelace writes the first program", icon: "👩‍💻" },
          { year: 1947, label: "The first “bug”: a moth!", icon: "🦋" },
          { year: 2007, label: "Scratch, block coding, is born", icon: "🐱" },
          { year: 2013, label: "First Europe Code Week", icon: "🇪🇺" }
        ]
      },
      caption: "Algorithms have existed for much longer than computers!"
    },
    {
      type: "alternatives",
      title: "Other ways to understand algorithms",
      intro: "You can learn algorithms without a computer, too: with your body, with music, with cards!",
      tabs: [
        {
          label: "🃏 CodyRoby, the Italian game",
          html: `<p><b>CodyRoby</b> is a card game invented in <b>Italy</b> by Professor <b>Alessandro Bogliolo</b> of the University of Urbino for <b>Code Week</b>.</p>
<ul>
<li>There are cards with <b>three arrows</b>: ⬆️ forward, ↩️ turn left, ↪️ turn right.</li>
<li>On a grid drawn on the floor or on a sheet, a child (or a counter) is the robot <b>Roby</b>.</li>
<li>You put the cards in a row to make the <b>program</b>, then Roby carries it out.</li>
</ul>
<p>You play without screens: it is called <b>unplugged coding</b> 🔌.</p>`
        },
        {
          label: "💃 Dance is an algorithm",
          html: `<p>Every dance is an algorithm! Try this:</p>
<p>🎵 <b>REPEAT 2 times:</b><br>👏 clap your hands<br>🦶 stamp your right foot<br>🔄 spin around<br><b>END REPEAT</b><br>🙌 raise your arms!</p>
<p>Songs work this way too: the <b>chorus</b> is a loop that repeats. Group dances and hand-clapping games are algorithms too!</p>`
        },
        {
          label: "🔢 Hops on the number line",
          html: `<p>Here is an algorithm with numbers: <b>start at 0. REPEAT 5 times: hop forward by 3.</b> Where do you land?</p>
<p>Try it on the line below: 0 → 3 → 6 → 9 → 12 → <b>15</b>. It is the 3 times table! Times tables are algorithms that repeat an addition.</p>`,
          widget: "numberLine",
          options: { min: 0, max: 20, step: 1, marks: [3, 6, 9, 12, 15] }
        },
        {
          label: "🍝 Recipes around the world",
          html: `<p><b>Recipes</b> are the oldest and best-loved algorithms in the world!</p>
<ul>
<li>🇮🇹 <b>Pasta with tomato sauce</b>: ingredients (= the data) + steps in order (= the instructions).</li>
<li>🇯🇵 Japanese <b>origami</b>: precise instructions for folding paper, step by step, up to a paper crane 🦢.</li>
<li>🧶 <b>Knitting needles</b>: “repeat 20 times: one knit stitch, one purl stitch” is exactly a loop!</li>
</ul>
<p>A clay tablet from <b>Babylon</b> about 3,700 years old contains written recipes: some of the oldest in the world.</p>`
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of algorithms",
      nodes: [
        { id: "algoritmo", label: "Algorithm", x: 50, y: 6, color: "#6366f1", html: "<p>A sequence of ordered, precise and finite instructions to solve a problem.</p>", why: "<p>The name comes from <b>al-Khwarizmi</b>, a mathematician from Baghdad in the 9th century. But the first famous algorithm is even older: that of <b>Euclid</b> (about 300 BC) for finding the greatest common divisor of two numbers.</p>" },
        { id: "sequenza", label: "Sequence", x: 18, y: 32, color: "#22c55e", html: "<p>The steps one after the other, in order.</p>", why: "<p>Many actions depend on the ones before: you cannot bake the cake if you have not mixed the ingredients. That is why order is important.</p>" },
        { id: "ciclo", label: "Loop (REPEAT)", x: 50, y: 32, color: "#f59e0b", html: "<p>Repeating the same instructions several times.</p>", why: "<p>Machines are excellent at repeating without getting tired. With a loop a short program can do a huge amount of work: the computer repeats millions of times without getting bored!</p>" },
        { id: "condizione", label: "Condition (IF)", x: 82, y: 32, color: "#ef4444", html: "<p>Choosing what to do depending on a situation.</p>", why: "<p>The world changes (it rains, it doesn't rain) and the program has to adapt. With <b>IF</b> the computer checks whether something is true or false and then decides.</p>" },
        { id: "preciso", label: "Precise instructions", x: 18, y: 62, color: "#0ea5e9", html: "<p>Each instruction must be clear, without doubt.</p>", why: "<p>The computer cannot “guess” what we want: it follows instructions to the letter. That is why programming languages have very strict rules.</p>" },
        { id: "programma", label: "Program", x: 50, y: 62, color: "#a855f7", html: "<p>An algorithm written in a language the computer understands.</p>", why: "<p>The first person to write a program was <b>Ada Lovelace</b>, in <b>1843</b>, for a calculating machine designed by Charles Babbage that was never finished. That is why she is remembered as the first programmer in history.</p>" },
        { id: "bug", label: "Bug and debug", x: 82, y: 62, color: "#64748b", html: "<p>Bug = error. Debug = finding and fixing the error.</p>", why: "<p>In 1947 Grace Hopper's group found a real moth inside a computer. Since then “bug” has been the name for every error in programs.</p>" },
        { id: "coding", label: "Coding", x: 50, y: 92, color: "#14b8a6", html: "<p>Learning to program, even by playing, with or without a computer.</p>", why: "<p>Coding teaches you to split a big problem into small pieces: this way of thinking is called <b>computational thinking</b>. The Italian national guidelines already include it from primary school.</p>" }
      ],
      edges: [
        ["algoritmo", "sequenza", "is made of"],
        ["algoritmo", "ciclo", "can use"],
        ["algoritmo", "condizione", "can use"],
        ["sequenza", "preciso", "of"],
        ["algoritmo", "programma", "written for the PC ="],
        ["programma", "bug", "can have"],
        ["programma", "coding", "learned through"],
        ["ciclo", "programma", "inside the"],
        ["condizione", "programma", "inside the"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: repeat and if",
      questions: [
        { type: "mc", q: "“Repeat 3 times: jump”. How many jumps do you do?", options: ["1", "3", "6"], answer: 1, explain: "The loop repeats the jump 3 times." },
        { type: "mc", q: "“IF it rains THEN I take the umbrella”. Today it is sunny. Do I take the umbrella?", options: ["Yes", "No"], answer: 1, explain: "The condition “it rains” is false, so I do not take the umbrella." },
        { type: "text", q: "What is a mistake in a program called in English?", answer: ["bug", "a bug"], explain: "Bug, like the insect found in 1947!" }
      ]
    },
    {
      type: "remember",
      title: "Remember 📌",
      html: `<ul>
<li>An <b>algorithm</b> is a list of <b>ordered</b>, <b>precise</b> and <b>finite</b> instructions.</li>
<li>Recipes and everyday routines are algorithms.</li>
<li>🔁 <b>Repeat</b> = loop; ❓ <b>If… then… else</b> = condition.</li>
<li>An algorithm written for the computer is a <b>program</b>; a mistake is a <b>bug</b>.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Algorithm", d: "An ordered sequence of precise instructions to solve a problem." },
    { t: "Instruction", d: "A single step that says what to do." },
    { t: "Sequence", d: "Steps put in order, one after the other." },
    { t: "Loop", d: "Instructions that repeat several times (REPEAT)." },
    { t: "Condition", d: "A choice: IF something happens THEN do this, ELSE do that." },
    { t: "Program", d: "An algorithm written in a language the computer understands." },
    { t: "Coding", d: "Programming; also by playing, without a computer." },
    { t: "Bug", d: "A mistake in a program." },
    { t: "Debug", d: "Finding and fixing mistakes." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is an algorithm?", options: ["A sequence of instructions in order", "A random drawing", "A type of computer"], answer: 0, explain: "Ordered, precise and finite instructions." },
      { type: "order", q: "Put in order: getting dressed to go out.", items: ["I put on my socks", "I put on my shoes", "I tie my shoes", "I leave the house"], explain: "Socks go before shoes!" },
      { type: "order", q: "Put in order: making a cup of tea.", items: ["I heat the water", "I pour the water into the cup", "I put in the tea bag", "I wait a few minutes", "I take out the tea bag and drink"], explain: "Every step depends on the one before." },
      { type: "tf", q: "A robot understands the instruction “Do something nice”.", answer: false, explain: "It is a confusing instruction: the robot needs precise instructions." },
      { type: "mc", q: "Which instruction is PRECISE?", options: ["Go over there", "Take 3 steps forward", "Move a bit"], answer: 1, explain: "It says exactly what to do and how much." },
      { type: "num", q: "“Repeat 4 times: put 2 sweets in the bag”. How many sweets are there at the end?", answer: 8, tol: 0, unit: "sweets", explain: "4 times 2 = 8." },
      { type: "mc", q: "“IF the traffic light is red THEN I stop ELSE I cross”. The light is green: what do I do?", options: ["I stop", "I cross", "I go home"], answer: 1, explain: "The condition “red” is false: ELSE applies." },
      { type: "text", q: "What is finding and fixing the mistakes of a program called?", answer: ["debug", "debugging", "the debug"], explain: "Debug: removing the bugs." },
      { type: "mc", q: "Where does the word “algorithm” come from?", options: ["From the name of a mathematician from Baghdad", "From a Japanese robot", "From a video game"], answer: 0, explain: "From the name of al-Khwarizmi." },
      { type: "tf", q: "You can do coding without a computer, too.", answer: true, explain: "It is called unplugged coding: with cards, arrows, games." },
      { type: "num", q: "Start at 0 and “repeat 5 times: hop forward by 2”. Which number do you reach?", answer: 10, tol: 0, explain: "0 → 2 → 4 → 6 → 8 → 10." },
      { type: "mc", q: "Who is considered the first programmer in history?", options: ["Ada Lovelace", "Cleopatra", "Grace Kelly"], answer: 0, explain: "Ada Lovelace wrote the first program in 1843." }
    ]
  }
});
