TOPIC('en', {
  id: "m2-tec-programmazione",
  title: "Programming: variables and loops",
  intro: "Every app, video game or robot works thanks to two very simple ideas: <b>variables</b>, which are used to <b>remember</b> data, and <b>loops</b>, which are used to <b>repeat</b> instructions without rewriting them. We will discover them first with blocks (like in Scratch) and then with real code, in <b>Python</b>.",
  minutes: 40,
  sections: [
    {
      type: "text",
      title: "What a variable is",
      html: `<p>A <b>variable</b> is like a <b>box with a label</b>: the label is the <b>name</b>, inside there is a <b>value</b> that can change during the program.</p>
<ul>
<li><b>Create and assign</b>: <code>points = 0</code> means "put 0 in the box called points". The symbol <code>=</code> in programming does not mean "is equal to", but <b>"assign"</b>, "put inside".</li>
<li><b>Read</b>: <code>print(points)</code> shows the contents of the box on the screen.</li>
<li><b>Modify</b>: <code>points = points + 10</code> means "take the value of points, add 10 and put the result back in the same box".</li>
</ul>
<p>Values have a <b>type</b>:</p>
<table>
<tr><th>Type</th><th>Example</th><th>Used for</th></tr>
<tr><td><b>integer</b> (int)</td><td><code>lives = 3</code></td><td>counting</td></tr>
<tr><td><b>decimal</b> (float)</td><td><code>price = 2.50</code></td><td>measurements, money (Python uses the decimal point)</td></tr>
<tr><td><b>string</b> (str)</td><td><code>name = "Sara"</code></td><td>text, always in quotation marks</td></tr>
<tr><td><b>boolean</b> (bool)</td><td><code>won = False</code></td><td>true/false (True/False)</td></tr>
</table>
<p>Rules for names: no spaces (use <code>max_score</code>), do not start with a number, choose names that make the contents clear.</p>`
    },
    {
      type: "svg",
      title: "Variables as boxes",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0fdf4"/>
<g>
<polygon points="40,120 170,120 190,100 60,100" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
<rect x="40" y="120" width="130" height="100" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>
<rect x="55" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#92400e" stroke-width="2"/>
<text x="105" y="208" font-size="16" font-weight="bold" fill="#92400e" text-anchor="middle">points</text>
<text x="105" y="170" font-size="40" font-weight="bold" fill="#1f2937" text-anchor="middle">10</text>
</g>
<g>
<polygon points="230,120 360,120 380,100 250,100" fill="#a5b4fc" stroke="#3730a3" stroke-width="3"/>
<rect x="230" y="120" width="130" height="100" fill="#818cf8" stroke="#3730a3" stroke-width="3"/>
<rect x="245" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#3730a3" stroke-width="2"/>
<text x="295" y="208" font-size="16" font-weight="bold" fill="#3730a3" text-anchor="middle">name</text>
<text x="295" y="168" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">"Sara"</text>
</g>
<g>
<polygon points="420,120 550,120 570,100 440,100" fill="#86efac" stroke="#166534" stroke-width="3"/>
<rect x="420" y="120" width="130" height="100" fill="#4ade80" stroke="#166534" stroke-width="3"/>
<rect x="435" y="190" width="100" height="24" rx="5" fill="#ffffff" stroke="#166534" stroke-width="2"/>
<text x="485" y="208" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">won</text>
<text x="485" y="168" font-size="26" font-weight="bold" fill="#14532d" text-anchor="middle">False</text>
</g>
<text x="105" y="250" font-size="16" fill="#1f2937" text-anchor="middle">integer</text>
<text x="295" y="250" font-size="16" fill="#1f2937" text-anchor="middle">string</text>
<text x="485" y="250" font-size="16" fill="#1f2937" text-anchor="middle">boolean</text>
<text x="300" y="50" font-size="20" font-weight="bold" fill="#14532d" text-anchor="middle">label = name · contents = value</text>
<text x="300" y="285" font-size="16" fill="#334155" text-anchor="middle">points = points + 10 → the box "points" now contains 20</text>
</svg>`,
      caption: "Every variable has a name (the label) and a value (the contents). The contents can change, the name cannot."
    },
    {
      type: "text",
      title: "What a loop is",
      html: `<p>A <b>loop</b> is a block of instructions that the computer <b>repeats</b>. There are two main types:</p>
<p><b>1. Counting loop</b> – repeats a <b>fixed number</b> of times. In Scratch it is the "repeat 10 times" block; in Python it is <code>for</code>:</p>
<pre><code>for i in range(5):
    print("Hello!")</code></pre>
<p>It prints "Hello!" <b>5 times</b>. The variable <code>i</code> is 0, 1, 2, 3, 4 (in Python you start counting from 0!).</p>
<p><b>2. Condition loop</b> – repeats <b>as long as</b> a condition is true. In Scratch it is "repeat until…"; in Python it is <code>while</code>:</p>
<pre><code>lives = 3
while lives &gt; 0:
    print("You're still playing!")
    lives = lives - 1</code></pre>
<p>It repeats as long as <code>lives</code> is greater than 0: 3 times. If we forget to decrease <code>lives</code>, the loop <b>never ends</b>: it is an <b>infinite loop</b>, one of the most common mistakes!</p>
<p>⚠️ In Python the <b>indentation</b> (the 4 spaces at the start of the line) is compulsory: it shows which instructions are <b>inside</b> the loop.</p>`
    },
    {
      type: "widget",
      title: "From block to code",
      widget: "match",
      options: { pairs: [
        ["🟧 set points to 0", "points = 0"],
        ["🟧 change points by 1", "points = points + 1"],
        ["🟨 repeat 10 times", "for i in range(10):"],
        ["🟨 repeat until lives = 0", "while lives > 0:"],
        ["🟪 say \"Hello!\"", "print(\"Hello!\")"],
        ["🟦 ask for the name and wait", "name = input(\"What's your name?\")"]
      ] },
      caption: "Match each Scratch-style block to the line of Python that does the same thing."
    },
    {
      type: "quiz",
      title: "Mini-quiz: variables",
      questions: [
        { type: "num", q: "x = 5, then x = x + 3. What is x?", answer: 8, explain: "You take the old value (5), add 3 and put it back in x: 8." },
        { type: "mc", q: "What type is the value \"42\" (in quotation marks)?", options: ["Integer", "String", "Boolean"], answer: 1, explain: "Anything in quotation marks is a string, even if it contains digits." },
        { type: "tf", q: "In programming \"=\" means \"assign a value\".", answer: true, explain: "To compare two values you use \"==\" instead." }
      ]
    },
    {
      type: "example",
      title: "Practical example: the counter and the accumulator",
      html: `<p>We want to add up the numbers from 1 to 100. The young <b>Carl Friedrich Gauss</b>, according to a famous story, did it in his head in a few seconds at the age of 9. The computer does it with a loop:</p>
<pre><code>total = 0
for n in range(1, 101):
    total = total + n
print(total)</code></pre>
<ul>
<li><code>n</code> is the <b>counter</b>: it is 1, 2, 3… up to 100 (<code>range(1, 101)</code> stops <b>before</b> 101).</li>
<li><code>total</code> is the <b>accumulator</b>: it starts from 0 and on each round "accumulates" the new number.</li>
</ul>
<p>Result: <b>5050</b>. Gauss's trick? 1+100 = 101, 2+99 = 101… there are 50 pairs: 50 × 101 = 5050.</p>`
    },
    {
      type: "example",
      title: "Practical example: guess the number",
      html: `<pre><code>secret = 7
guess = 0
while guess != secret:
    guess = int(input("Guess (1-10): "))
    if guess &lt; secret:
        print("Higher!")
    elif guess &gt; secret:
        print("Lower!")
print("Well done, you guessed it!")</code></pre>
<p>Here the loop is a <code>while</code>: we do not know <b>how many times</b> the player will try, so we repeat <b>as long as</b> the guess is different (<code>!=</code>) from the secret number. <code>input</code> reads what the user types; <code>int(...)</code> turns it from a string into a whole number.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The first programmer",
      html: `<p>The first program in history was written by a woman: <b>Ada Lovelace</b>, an English mathematician. In <b>1843</b>, in the notes to an article about Charles Babbage's "analytical engine", she described a procedure for calculating <b>Bernoulli numbers</b>, with instructions that repeated: a real <b>loop</b>!</p>
<p>The machine was never built, but Ada had already understood that computers could work not only with numbers, but also with music and symbols. In her honour a programming language is called <b>Ada</b>.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The first \"bug\" was a real insect",
      html: `<p>In <b>1947</b>, at Harvard University, the technicians of the Mark II computer found an error caused by a <b>moth</b> trapped in a relay. They taped it into the logbook with the words "first actual case of bug being found". <b>Grace Hopper</b>, a pioneer of programming languages, was part of the team. Since then errors in programs are called <b>bugs</b> and fixing them is called <b>debugging</b>.</p>
<p>And the name <b>Python</b>? It does not come from the snake: its inventor, the Dutchman <b>Guido van Rossum</b>, who released it in <b>1991</b>, was a fan of the British comedy group <i>Monty Python</i>.</p>`
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li><b>Variable</b> = name + a value that can change. <code>=</code> assigns, <code>==</code> compares.</li>
<li>Types: <b>int</b>, <b>float</b>, <b>str</b> (in quotation marks), <b>bool</b> (True/False).</li>
<li><b>for</b>: counting loop, known number of repetitions. <code>range(5)</code> → 0, 1, 2, 3, 4.</li>
<li><b>while</b>: condition loop, repeats as long as the condition is true. Beware of infinite loops!</li>
<li>A <b>counter</b> counts the rounds; an <b>accumulator</b> adds up the values.</li>
<li>In Python the indentation (4 spaces) shows what is inside the loop.</li>
</ul>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand variables and loops",
      intro: "Does the code look like gibberish? Try an analogy from everyday life, coloured blocks or flashcards.",
      tabs: [
        {
          label: "🏃 The training session",
          html: `<p>The coach says: "<b>Do 5 laps of the pitch</b>". It is a <b>for</b> loop: the number of repetitions is decided beforehand. To avoid mistakes you count the laps on your fingers: your fingers are the <b>counter</b>.</p>
<p>Then he says: "<b>Keep running until I blow the whistle</b>". It is a <b>while</b> loop: you do not know how many laps you will do, you keep going as long as the condition ("he has not blown the whistle") is true.</p>
<p>The <b>scoreboard</b> with the score of the match is a <b>variable</b>: it has a name (Home, Away) and a value that changes with every goal.</p>`
        },
        {
          label: "🧱 Scratch and Python compared",
          html: `<p>The same program, "draw a square", in two languages:</p>
<table>
<tr><th>Scratch (blocks)</th><th>Python (text, with the turtle module)</th></tr>
<tr><td>when green flag clicked<br>repeat 4 times<br>&nbsp;&nbsp;move 100 steps<br>&nbsp;&nbsp;turn 90 degrees</td><td><code>import turtle</code><br><code>t = turtle.Turtle()</code><br><code>for i in range(4):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.forward(100)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;t.right(90)</code></td></tr>
</table>
<p>Scratch's "repeat" block "wraps around" the instructions to repeat; in Python the same job is done by the <b>indentation</b>. Scratch was created at <b>MIT</b> in Boston and released in 2007; turtle is inspired by the <b>Logo</b> language (1967), with its famous turtle.</p>`,
          svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="240" fill="#f8fafc"/>
<rect x="30" y="30" width="230" height="40" rx="10" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="145" y="57" font-size="17" font-weight="bold" fill="#422006" text-anchor="middle">repeat 4 times</text>
<rect x="30" y="70" width="24" height="110" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<rect x="54" y="80" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="105" font-size="16" fill="#ffffff" text-anchor="middle">move 100 steps</text>
<rect x="54" y="128" width="200" height="38" rx="8" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
<text x="154" y="153" font-size="16" fill="#ffffff" text-anchor="middle">turn 90°</text>
<rect x="30" y="180" width="230" height="22" rx="8" fill="#facc15" stroke="#a16207" stroke-width="2"/>
<text x="300" y="120" font-size="30" fill="#334155" text-anchor="middle">=</text>
<rect x="330" y="40" width="250" height="160" rx="10" fill="#1e293b"/>
<text x="345" y="80" font-size="16" fill="#f472b6" font-family="monospace">for i in range(4):</text>
<text x="375" y="115" font-size="16" fill="#a5f3fc" font-family="monospace">t.forward(100)</text>
<text x="375" y="150" font-size="16" fill="#a5f3fc" font-family="monospace">t.right(90)</text>
<text x="455" y="185" font-size="14" fill="#94a3b8" text-anchor="middle">indentation = inside the loop</text>
</svg>`
        },
        {
          label: "📝 Trace by hand",
          html: `<p>A method used in computing classes all over the world: the <b>trace table</b>. You "pretend to be the computer" and write down, line by line, the value of each variable.</p>
<pre><code>x = 1
for i in range(4):
    x = x * 2</code></pre>
<table>
<tr><th>round</th><th>i</th><th>x before</th><th>x after</th></tr>
<tr><td>1</td><td>0</td><td>1</td><td>2</td></tr>
<tr><td>2</td><td>1</td><td>2</td><td>4</td></tr>
<tr><td>3</td><td>2</td><td>4</td><td>8</td></tr>
<tr><td>4</td><td>3</td><td>8</td><td>16</td></tr>
</table>
<p>At the end <code>x</code> is <b>16</b>. With the table you never get lost, not even in the longest loops!</p>`
        },
        {
          label: "🃏 Keyword flashcards",
          html: `<p>Flip the cards to revise the key words of programming.</p>`,
          widget: "flashcards",
          options: { cards: [
            { front: "variable", back: "A box with a name that holds a changeable value" },
            { front: "=", back: "Assignment: put a value in the variable" },
            { front: "==", back: "Comparison: are the two values equal?" },
            { front: "for", back: "Counting loop: known number of repetitions" },
            { front: "while", back: "Condition loop: repeats as long as it is true" },
            { front: "bug", back: "An error in the program" },
            { front: "accumulator", back: "A variable that adds up values on every round" }
          ] }
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Map of programming",
      nodes: [
        { id: "algoritmo", label: "Algorithm", x: 50, y: 7, color: "#7c3aed", html: "A finite sequence of precise instructions to solve a problem.", why: "The name comes from the Persian mathematician <b>al-Khwarizmi</b> (9th century), whose Latinised name became \"algorismus\". A program is an algorithm written in a language the computer understands." },
        { id: "programma", label: "Program", x: 50, y: 27, color: "#2563eb", html: "An algorithm written in a programming language (Scratch, Python…).", why: "The computer only understands 0s and 1s: programming languages are a bridge between us and the machine. Another program (an interpreter or compiler) translates them." },
        { id: "variabile", label: "Variable", x: 20, y: 47, color: "#f59e0b", html: "Name + changeable value, saved in memory.", why: "Physically it is an area of RAM with an address; the name is for us so that we do not have to remember numerical addresses. The idea of using letters in place of numbers comes from algebra (François Viète, 1591)." },
        { id: "tipi", label: "Data types", x: 8, y: 72, color: "#f97316", html: "int, float, str, bool.", why: "The computer has to know how to interpret the bits: the same sequence of 0s and 1s can be a number or a letter. The bool type is named after George Boole (1815–1864), who invented the algebra of true/false." },
        { id: "assegna", label: "Assignment =", x: 32, y: 72, color: "#eab308", html: "Puts a value in a variable: x = x + 1.", why: "In maths x = x + 1 is impossible; in computing it means \"calculate on the right, then save on the left\". Some languages (like Pascal) use := precisely to avoid confusion." },
        { id: "ciclo", label: "Loop", x: 80, y: 47, color: "#16a34a", html: "Repeated instructions: for or while.", why: "It avoids rewriting the same thing a thousand times. Ada Lovelace in 1843 already described a repeated procedure for Babbage's machine." },
        { id: "for", label: "for (counter)", x: 66, y: 72, color: "#22c55e", html: "Known number of repetitions: for i in range(10).", why: "You use it when you know in advance how many times to repeat. The counter i keeps count of the rounds." },
        { id: "while", label: "while (condition)", x: 92, y: 72, color: "#14b8a6", html: "Repeats as long as the condition is true.", why: "You use it when you do not know how many times will be needed (e.g. until the user guesses). The condition must sooner or later become false, otherwise the loop is infinite." },
        { id: "debug", label: "Debug", x: 50, y: 93, color: "#ef4444", html: "Finding and fixing errors (bugs).", why: "From the famous case of the moth in the Mark II computer (1947). Programming also means making mistakes and fixing them: it is normal!" }
      ],
      edges: [
        ["algoritmo", "programma", "written in a language"],
        ["programma", "variabile", "uses"],
        ["programma", "ciclo", "uses"],
        ["variabile", "tipi", "has a"],
        ["variabile", "assegna", "receives values with"],
        ["ciclo", "for", "type"],
        ["ciclo", "while", "type"],
        ["programma", "debug", "is fixed with"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: loops",
      questions: [
        { type: "num", q: "How many times is \"Hello\" printed by: for i in range(7): print(\"Hello\")?", answer: 7, explain: "range(7) produces 0, 1, 2, 3, 4, 5, 6: seven values, seven repetitions." },
        { type: "mc", q: "Which loop do you use if you do not know how many times you will have to repeat?", options: ["for", "while", "neither of them"], answer: 1, explain: "while repeats as long as a condition is true, without a fixed number." },
        { type: "tf", q: "The code \"n = 5 / while n > 0: print(n)\" stops by itself.", answer: false, explain: "n never changes: the condition always stays true and the loop is infinite." }
      ]
    }
  ],
  glossary: [
    { t: "Variable", d: "A memory space with a name that holds a changeable value." },
    { t: "Assignment", d: "An instruction that puts a value in a variable (the = symbol in Python)." },
    { t: "String", d: "A sequence of characters, written in quotation marks: \"hello\"." },
    { t: "Boolean", d: "A data type with only two values: True and False." },
    { t: "Loop", d: "A group of instructions repeated several times." },
    { t: "for", d: "A counting loop, with a set number of repetitions." },
    { t: "while", d: "A condition loop: repeats as long as the condition is true." },
    { t: "Counter", d: "A variable that counts the rounds of a loop." },
    { t: "Accumulator", d: "A variable that adds up (accumulates) values on every round." },
    { t: "Infinite loop", d: "A loop whose condition never becomes false: the program never ends." },
    { t: "Bug / debug", d: "An error in the program / the activity of finding and fixing it." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "mc", q: "What is a variable?", options: ["An error in the program", "A container with a name for a value that can change", "A type of loop"], answer: 1, explain: "A variable is a \"box\" with a name and a value." },
      { type: "num", q: "a = 10, then a = a - 4, then a = a * 2. What is a?", answer: 12, explain: "10 − 4 = 6; 6 × 2 = 12." },
      { type: "mc", q: "Which value is a boolean?", options: ["\"true\"", "True", "1.5"], answer: 1, explain: "In Python the booleans are True and False, without quotation marks." },
      { type: "num", q: "x = 0; for i in range(5): x = x + 2. What is x at the end?", answer: 10, explain: "The loop runs 5 times and each time adds 2: 5 × 2 = 10." },
      { type: "text", q: "Which Python keyword creates a loop that repeats as long as a condition is true?", answer: ["while"], explain: "while = \"as long as\"." },
      { type: "tf", q: "range(3) produces the numbers 1, 2, 3.", answer: false, explain: "range(3) produces 0, 1, 2: it starts from 0 and stops before 3." },
      { type: "mc", q: "What happens if the condition in a while loop never becomes false?", options: ["The program stops immediately", "An infinite loop is created", "The computer fixes the error by itself"], answer: 1, explain: "The loop goes on forever: it is an infinite loop." },
      { type: "mc", q: "What is the difference between = and == in Python?", options: ["None", "= assigns, == compares", "= compares, == assigns"], answer: 1, explain: "= puts a value in a variable; == checks whether two values are equal." },
      { type: "order", q: "Put the lines in order to add up the numbers from 1 to 10 and show the result.", items: ["total = 0", "for n in range(1, 11):", "    total = total + n", "print(total)"], explain: "First reset the accumulator, then the loop adds up, finally print." },
      { type: "num", q: "What is the sum of the numbers from 1 to 100 calculated in Gauss's example?", answer: 5050, explain: "50 pairs of 101: 50 × 101 = 5050." },
      { type: "text", q: "What is the surname of the mathematician who wrote the first program in history in 1843?", answer: ["lovelace", "ada lovelace"], explain: "Ada Lovelace, for Charles Babbage's analytical engine." },
      { type: "num", q: "x = 1; for i in range(3): x = x * 3. What is x?", answer: 27, explain: "1 × 3 = 3, 3 × 3 = 9, 9 × 3 = 27." }
    ]
  }
});
