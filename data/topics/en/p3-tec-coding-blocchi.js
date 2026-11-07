TOPIC('en', {
  id: "p3-tec-coding-blocchi",
  title: "Block programming",
  intro: "A computer is very fast, but on its own it can't do anything: someone has to tell it <b>what to do</b>, step by step. This is called <b>programming</b> (coding). Today we learn to do it with <b>coloured blocks</b>, like in Scratch, and we discover two key ideas: the <b>sequence</b> and the <b>loop</b>. 🧩🤖",
  minutes: 30,
  sections: [
    {
      type: "text", title: "Step 1: what is an algorithm?",
      html: `<p>An <b>algorithm</b> is a list of clear <b>instructions</b>, in a precise order, to solve a problem or do something.</p>
<p>You use algorithms every day too! For example, to brush your teeth:</p>
<ol><li>pick up your toothbrush;</li><li>put on the toothpaste;</li><li>brush your teeth;</li><li>rinse your mouth;</li><li>wash the toothbrush.</li></ol>
<p>A <b>program</b> is an algorithm written in a language the computer understands: a <b>programming language</b>.</p>
<p>⚠️ The computer is an executor that is <b>precise but has no imagination</b>: it does exactly what you write, no more and no less. If you forget a step, it won't guess it!</p>`
    },
    {
      type: "text", title: "Step 2: the blocks",
      html: `<p>In <b>block-based</b> languages (like <b>Scratch</b> or <b>Code.org</b>) you don't need to type: the instructions are <b>coloured bricks</b> that snap together like puzzle pieces. 🧩</p>
<ul>
<li>🟨 <b>Events</b> (yellow): <i>when the green flag is clicked</i> → the program starts.</li>
<li>🟦 <b>Motion</b> (blue): <i>move 10 steps</i>, <i>turn 90 degrees</i>.</li>
<li>🟪 <b>Looks</b> (purple): <i>say "Hello!"</i>, <i>switch costume</i>.</li>
<li>🟧 <b>Control</b> (orange): <i>repeat 4 times</i>, <i>wait 1 second</i>.</li>
</ul>
<p>If two blocks can't go together, they <b>don't snap</b>: so it's hard to make mistakes when "writing".</p>`
    },
    {
      type: "svg", title: "A block program: the square",
      caption: "On the left: the long sequence (8 blocks). On the right: the same program with a «repeat 4 times» loop (3 blocks inside). The result is the same square!",
      svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="320" fill="#f8fafc"/>
<text x="110" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">SEQUENCE</text>
<rect x="20" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="30" y="51" font-size="14" fill="#422006">when clicked 🏁</text>
<rect x="20" y="60" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="77" font-size="14" fill="#ffffff">move 100 steps</text>
<rect x="20" y="86" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="103" font-size="14" fill="#ffffff">turn ↻ 90 degrees</text>
<rect x="20" y="112" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="129" font-size="14" fill="#ffffff">move 100 steps</text>
<rect x="20" y="138" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="155" font-size="14" fill="#ffffff">turn ↻ 90 degrees</text>
<rect x="20" y="164" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="181" font-size="14" fill="#ffffff">move 100 steps</text>
<rect x="20" y="190" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="207" font-size="14" fill="#ffffff">turn ↻ 90 degrees</text>
<rect x="20" y="216" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="233" font-size="14" fill="#ffffff">move 100 steps</text>
<rect x="20" y="242" width="180" height="24" rx="4" fill="#3b82f6"/>
<text x="30" y="259" font-size="14" fill="#ffffff">turn ↻ 90 degrees</text>
<text x="315" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">LOOP</text>
<rect x="225" y="32" width="180" height="26" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="235" y="51" font-size="14" fill="#422006">when clicked 🏁</text>
<path d="M225,60 L405,60 L405,86 L250,86 L250,140 L405,140 L405,162 L225,162 Z" fill="#f97316"/>
<text x="235" y="78" font-size="14" fill="#ffffff" font-weight="bold">repeat 4 times</text>
<rect x="250" y="88" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="105" font-size="14" fill="#ffffff">move 100 steps</text>
<rect x="250" y="114" width="150" height="24" rx="4" fill="#3b82f6"/>
<text x="258" y="131" font-size="14" fill="#ffffff">turn ↻ 90 degrees</text>
<text x="315" y="200" font-size="15" text-anchor="middle" fill="#15803d" font-weight="bold">3 blocks instead of 8!</text>
<text x="510" y="22" font-size="17" font-weight="bold" text-anchor="middle" fill="#0f172a">RESULT</text>
<rect x="450" y="60" width="120" height="120" fill="none" stroke="#7c3aed" stroke-width="5"/>
<text x="510" y="58" font-size="22" text-anchor="middle">🐱</text>
<text x="510" y="215" font-size="15" text-anchor="middle" fill="#0f172a">4 equal sides</text>
<text x="510" y="235" font-size="15" text-anchor="middle" fill="#0f172a">4 angles of 90°</text>
</svg>`
    },
    {
      type: "remember", title: "Sequence and loop",
      html: `<ul>
<li><b>Sequence</b>: the instructions are carried out <b>one after the other</b>, from top to bottom. The <b>order</b> matters! Socks first, then shoes. 🧦👟</li>
<li><b>Loop</b>: a block that makes the instructions inside it <b>repeat</b> a certain number of times (<i>repeat 4 times</i>) or forever (<i>forever</i>).</li>
</ul>
<p>When you see instructions that repeat the same way, ask yourself: <b>can I use a loop?</b> The program becomes shorter, easier to read and easier to fix.</p>`
    },
    {
      type: "example", title: "Practical example: the robot in the maze",
      html: `<p>A robot 🤖 has to reach the apple 🍎. It knows only three instructions: <b>⬆️ forward 1 square</b>, <b>↪️ turn left</b>, <b>↩️ turn right</b>.</p>
<p>The apple is 3 squares ahead, then 2 squares to the right. The program is:</p>
<p>⬆️ ⬆️ ⬆️ ↩️ ⬆️ ⬆️</p>
<p>With loops it becomes: <b>repeat 3 times</b> [⬆️] → ↩️ → <b>repeat 2 times</b> [⬆️].</p>
<p>If you mistakenly write ↪️ instead of ↩️, the robot goes left and bumps into the wall: you have found a <b>bug</b> (an error)! Fixing it is called <b>debugging</b>. 🐞🔧</p>`
    },
    {
      type: "svg", title: "The robot's path",
      caption: "Follow the arrows: 3 squares forward, a right turn, 2 squares forward. Here is the apple!",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="300" fill="#ecfeff"/>
<g stroke="#94a3b8" stroke-width="2" fill="#ffffff">
<rect x="150" y="20" width="60" height="60"/><rect x="210" y="20" width="60" height="60"/><rect x="270" y="20" width="60" height="60"/><rect x="330" y="20" width="60" height="60"/>
<rect x="150" y="80" width="60" height="60"/><rect x="210" y="80" width="60" height="60"/><rect x="270" y="80" width="60" height="60"/><rect x="330" y="80" width="60" height="60"/>
<rect x="150" y="140" width="60" height="60"/><rect x="210" y="140" width="60" height="60"/><rect x="270" y="140" width="60" height="60"/><rect x="330" y="140" width="60" height="60"/>
<rect x="150" y="200" width="60" height="60"/><rect x="210" y="200" width="60" height="60"/><rect x="270" y="200" width="60" height="60"/><rect x="330" y="200" width="60" height="60"/>
</g>
<rect x="210" y="80" width="60" height="60" fill="#475569"/>
<rect x="270" y="140" width="60" height="60" fill="#475569"/>
<path d="M180,230 L180,50 L300,50" stroke="#16a34a" stroke-width="6" fill="none" stroke-dasharray="10 6"/>
<text x="180" y="245" font-size="34" text-anchor="middle">🤖</text>
<text x="300" y="62" font-size="34" text-anchor="middle">🍎</text>
<text x="460" y="70" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️ ⬆️</text>
<text x="460" y="110" font-size="18" font-weight="bold" fill="#0f172a">↩️ right</text>
<text x="460" y="150" font-size="18" font-weight="bold" fill="#0f172a">⬆️ ⬆️</text>
<text x="460" y="200" font-size="15" fill="#475569">grey = wall</text>
</svg>`
    },
    {
      type: "quiz", title: "Mini-quiz: sequences",
      questions: [
        { type: "mc", q: "A list of clear, ordered instructions to solve a problem is…", options: ["an algorithm", "a drawing", "a computer"], answer: 0, explain: "Algorithm = instructions in order." },
        { type: "order", q: "Put the sequence for dressing your feet in order.", items: ["put on your socks", "put on your shoes", "tie the laces"], explain: "In a sequence the order matters: socks first, then shoes!" },
        { type: "tf", q: "The computer guesses by itself the instructions we forgot.", answer: false, explain: "The computer carries out only what is written: if a step is missing, it doesn't do it." }
      ]
    },
    {
      type: "3d", title: "A loop is like a multiplication",
      scene: "blocks",
      options: { mode: "array", a: 4, b: 3 },
      caption: "«Repeat 4 times: put 3 cubes» → 4 rows of 3 = 12 cubes. Move the sliders and think: how many times do I repeat? How many cubes do I put each time?"
    },
    {
      type: "example", title: "Practical example: the Scratch cat's party",
      html: `<p>You want the cat 🐱 to dance. Here is the program:</p>
<ul>
<li>🟨 when the green flag is clicked</li>
<li>🟧 <b>repeat 10 times</b>:
<ul><li>🟦 move 10 steps</li><li>🟪 switch costume</li><li>🟧 wait 0.2 seconds</li><li>🟦 move -10 steps (go back)</li></ul></li>
<li>🟪 say "What a nice party!" for 2 seconds</li>
</ul>
<p>How many times does the cat switch costume? <b>10</b>, once for each turn of the loop. How many steps forward does it take in all? 10 × 10 = <b>100</b>.</p>`
    },
    {
      type: "widget", title: "Game: sequence or loop?",
      widget: "classify",
      caption: "Are these activities a sequence of different steps, or the same step repeated many times (loop)?",
      options: {
        groups: ["➡️ Sequence (different steps)", "🔁 Loop (repeating)"],
        items: [["Making a sandwich", 0], ["Brushing your teeth", 0], ["Switching on the computer and opening Scratch", 0], ["Getting dressed to go out", 0], ["Skipping rope 20 times", 1], ["The hands of a clock going round", 1], ["Climbing 15 steps", 1], ["The chorus of a song", 1], ["The seasons every year", 1]]
      }
    },
    {
      type: "widget", title: "Match the block to what it does",
      widget: "match",
      options: { pairs: [["when clicked 🏁", "starts the program"], ["move 10 steps", "moves the character"], ["turn 90°", "makes the character turn"], ["repeat 4 times", "repeats the blocks inside it"], ["forever", "repeats without ever stopping"], ["wait 1 second", "makes a pause"]] }
    },
    {
      type: "curiosity", title: "Did you know… the first programmer was a woman of the 1800s?",
      html: `<p>In <b>1843</b> the English mathematician <b>Ada Lovelace</b> wrote the instructions to make the "Analytical Engine" invented by Charles Babbage calculate some special numbers. The machine was never built, but those instructions are considered the <b>first program</b> in history! Ada had already grasped the idea of the <b>loop</b>: repeating the same operations several times.</p>
<p>Even earlier, in <b>1804</b>, the Frenchman Joseph-Marie Jacquard invented a loom that wove patterns following <b>punched cards</b>: a sort of program for fabrics!</p>`
    },
    {
      type: "curiosity", title: "Did you know… the first «bug» was a real insect?",
      html: `<p>In English <b>bug</b> means "insect". In <b>1947</b>, at Harvard University, a giant computer called Mark II stopped working. The technicians opened the machine and found… a <b>moth</b> stuck between the contacts! 🦋 They taped it into the logbook, writing "first actual case of bug being found". The page still exists, in a museum in Washington.</p>
<p>Engineers had called faults "bugs" even before, but since then the story of the moth has become very famous, often told by the programmer <b>Grace Hopper</b>.</p>`
    },
    {
      type: "alternatives", title: "Other ways to understand it",
      intro: "If the blocks on the screen don't convince you, try programming in another way.",
      tabs: [
        {
          label: "🃏 Unplugged coding (no computer)",
          html: `<p>In Italy <b>CodyRoby</b> was born, a card game invented at the University of Urbino to learn coding <b>without a computer</b>. The cards have three arrows: <b>forward</b>, <b>turn left</b>, <b>turn right</b>.</p>
<ol><li>Draw a chessboard on the floor with chalk or tape.</li>
<li>One child is the <b>robot</b>, another is the <b>programmer</b>.</li>
<li>The programmer lines up the cards; the robot carries them out <b>to the letter</b>, without thinking.</li>
<li>If the robot doesn't reach the finish, look for the bug together!</li></ol>`
        },
        {
          label: "🧁 The recipe",
          html: `<p>A <b>recipe</b> is an algorithm for the kitchen:</p>
<ul><li><b>Sequence</b>: break the eggs → add the sugar → mix → add the flour → bake.</li>
<li><b>Loop</b>: "<i>mix until</i> the batter is smooth", "<i>repeat for each</i> paper case: pour in a spoonful of batter".</li></ul>
<p>If you swap the order (baking before mixing 😱) the result is a disaster: just like in a program!</p>`,
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="600" height="200" fill="#fff7ed"/>
<text x="60" y="80" font-size="44" text-anchor="middle">🥚</text>
<text x="60" y="125" font-size="15" text-anchor="middle" fill="#0f172a">1. eggs</text>
<text x="120" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="180" y="80" font-size="44" text-anchor="middle">🍚</text>
<text x="180" y="125" font-size="15" text-anchor="middle" fill="#0f172a">2. sugar</text>
<text x="240" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="300" y="80" font-size="44" text-anchor="middle">🥣</text>
<text x="300" y="125" font-size="15" text-anchor="middle" fill="#0f172a">3. mix</text>
<path d="M270,140 Q300,180 330,140" stroke="#7c3aed" stroke-width="4" fill="none"/>
<text x="300" y="190" font-size="15" text-anchor="middle" fill="#7c3aed" font-weight="bold">🔁 until smooth</text>
<text x="360" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="420" y="80" font-size="44" text-anchor="middle">🌾</text>
<text x="420" y="125" font-size="15" text-anchor="middle" fill="#0f172a">4. flour</text>
<text x="480" y="75" font-size="28" text-anchor="middle" fill="#f97316">➜</text>
<text x="540" y="80" font-size="44" text-anchor="middle">🧁</text>
<text x="540" y="125" font-size="15" text-anchor="middle" fill="#0f172a">5. bake</text>
</svg>`
        },
        {
          label: "🎵 The repeat sign",
          html: `<p>Songs are full of <b>loops</b>! In music books, instead of writing everything again, we use the <b>repeat sign</b> 𝄆 … 𝄇: it means "<b>repeat</b> this part".</p>
<p>It is exactly like the block "repeat 2 times". Musicians have used loops for centuries, long before computers! Try clapping: <b>repeat 4 times</b> [👏 👏 🦶].</p>`
        },
        {
          label: "🧊 Loops with 3D cubes",
          html: `<p>Each turn of the loop adds a row of cubes. Change the numbers: with <b>5 turns of 2</b> how many cubes do you have? And with 2 turns of 5? The result is the same (10), but the program is different!</p>`,
          scene: "blocks",
          options: { mode: "array", a: 5, b: 2 }
        }
      ]
    },
    {
      type: "conceptMap", title: "Map: the ideas of coding",
      nodes: [
        { id: "problema", label: "A problem", x: 50, y: 6, color: "#ef4444", html: "Something to do or to solve: drawing a square, getting the robot to the apple.", why: "Programming always starts from a question: what do I want to achieve? Then the big problem is split into smaller pieces, which is the heart of \"computational thinking\"." },
        { id: "algoritmo", label: "Algorithm", x: 50, y: 28, color: "#f97316", html: "Clear, finite instructions, in order.", why: "The word comes from the name of the Persian mathematician <b>al-Khwarizmi</b> (9th century), who wrote in Baghdad a book on how to do calculations step by step. In Latin his name became \"Algorismus\"." },
        { id: "sequenza", label: "Sequence", x: 18, y: 52, color: "#3b82f6", html: "Instructions carried out one after the other.", why: "The computer has one main \"executor\" that reads one instruction at a time, from top to bottom: that is why order is fundamental." },
        { id: "ciclo", label: "Loop (repeat)", x: 50, y: 52, color: "#a855f7", html: "Repeating instructions several times.", why: "Computers are brilliant at repeating without getting tired or making mistakes. Ada Lovelace in 1843 was already describing how to make the Analytical Engine repeat a group of operations." },
        { id: "evento", label: "Event", x: 82, y: 52, color: "#eab308", html: "What makes the program start (a click on the flag, a key).", why: "Modern programs \"wait\" for something to happen: a click, a tap on the screen. That is why in Scratch every program starts with a yellow hat-shaped block." },
        { id: "blocchi", label: "Block language", x: 25, y: 78, color: "#0ea5e9", html: "Instructions as bricks that snap together.", why: "Scratch was created at MIT in Boston by Mitchel Resnick's group and released in 2007. It is inspired by Seymour Papert's Logo language (1960s), the one with the turtle that draws. Blocks avoid typing mistakes." },
        { id: "bug", label: "Bug and debug", x: 75, y: 78, color: "#16a34a", html: "The error and its correction.", why: "Making mistakes is normal even for expert programmers! You test the program, look at where the result differs from what was expected and fix it: that is exactly how you learn." },
        { id: "computer", label: "The computer executes", x: 50, y: 95, color: "#475569", html: "It carries out instructions to the letter, very fast.", why: "A modern computer executes billions of instructions per second, but only the ones we give it: it has no intentions or imagination. The intelligence of the program comes from whoever writes it." }
      ],
      edges: [
        ["problema", "algoritmo", "is solved with"], ["algoritmo", "sequenza", "has"], ["algoritmo", "ciclo", "has"], ["algoritmo", "evento", "starts with"],
        ["sequenza", "blocchi", "is written with"], ["ciclo", "blocchi", "is written with"], ["blocchi", "computer", "commands"], ["computer", "bug", "if I make a mistake"], ["bug", "algoritmo", "I fix"]
      ]
    },
    {
      type: "quiz", title: "Mini-quiz: loops",
      questions: [
        { type: "num", q: "«Repeat 5 times: jump 2 times». How many jumps do you make in all?", answer: 10, tol: 0, explain: "5 turns × 2 jumps = 10 jumps." },
        { type: "mc", q: "To draw a square with a loop I write…", options: ["repeat 4 times: forward, turn 90°", "repeat 3 times: forward, turn 90°", "repeat 4 times: forward"], answer: 0, explain: "The square has 4 sides and 4 right angles (90°)." },
        { type: "tf", q: "An error in a program is called a bug.", answer: true, explain: "Bug = error; debug = fixing it." }
      ]
    }
  ],
  glossary: [
    { t: "Coding / programming", d: "Writing instructions that a computer or a robot can carry out." },
    { t: "Algorithm", d: "A list of clear, ordered instructions to solve a problem." },
    { t: "Instruction", d: "A single command: \"move 10 steps\", \"turn right\"." },
    { t: "Program", d: "An algorithm written in a language the computer understands." },
    { t: "Sequence", d: "Instructions carried out one after the other, in order." },
    { t: "Loop", d: "A block that makes the instructions it contains repeat." },
    { t: "Event", d: "What makes the program start, like a click on the green flag." },
    { t: "Bug", d: "An error in a program." },
    { t: "Debug", d: "Finding and fixing errors." },
    { t: "Scratch", d: "A block-based programming language created at MIT in 2007." },
    { t: "Unplugged", d: "Coding activities done without a computer, with cards, chalk or your own body." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is an algorithm?", options: ["A list of ordered instructions to solve a problem", "A type of computer", "A ball game"], answer: 0, explain: "Algorithm = clear instructions in order." },
      { type: "mc", q: "In a sequence the instructions are carried out…", options: ["all together", "one after the other, in order", "in random order"], answer: 1, explain: "One after the other, from top to bottom." },
      { type: "mc", q: "What is a loop for?", options: ["To repeat instructions", "To switch off the computer", "To change the colour of the blocks"], answer: 0, explain: "The loop repeats the blocks inside it." },
      { type: "num", q: "«Repeat 3 times: move 4 steps». How many steps does the character take in all?", answer: 12, tol: 0, unit: "steps", explain: "3 × 4 = 12 steps." },
      { type: "num", q: "To draw a triangle with equal sides I use «repeat … times: forward, turn». How many times?", answer: 3, tol: 0, explain: "The triangle has 3 sides: repeat 3 times." },
      { type: "text", q: "What is an error in a program called?", answer: ["bug", "a bug"], explain: "A bug." },
      { type: "tf", q: "In block languages the instructions snap together like puzzle pieces.", answer: true, explain: "Blocks that can't go together don't snap." },
      { type: "tf", q: "In a program the order of the instructions is not important.", answer: false, explain: "Order is fundamental: socks first, then shoes!" },
      { type: "order", q: "Put the program in order to make the cat say «Hello» after the flag is clicked.", items: ["when the green flag is clicked", "move 10 steps", "say «Hello!» for 2 seconds"], explain: "The event block (flag) always goes at the top." },
      { type: "mc", q: "Which block starts the program in Scratch?", options: ["repeat 10 times", "when the green flag is clicked", "turn 90 degrees"], answer: 1, explain: "It is an event block, yellow, hat-shaped." },
      { type: "mc", q: "Who wrote in 1843 what is considered the first program in history?", options: ["Ada Lovelace", "Leonardo da Vinci", "Galileo Galilei"], answer: 0, explain: "Ada Lovelace, for Babbage's Analytical Engine." },
      { type: "mc", q: "The robot has to go forward 4 squares. Which is the shortest program?", options: ["forward, forward, forward, forward", "repeat 4 times: forward", "repeat 2 times: forward"], answer: 1, explain: "The «repeat 4 times» loop does the same job with fewer blocks." }
    ]
  }
});
