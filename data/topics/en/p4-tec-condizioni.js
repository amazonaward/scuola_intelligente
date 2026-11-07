TOPIC('en', {
 "id": "p4-tec-condizioni",
 "title": "If… then: conditions",
 "intro": "<i>If it rains, then I take my umbrella. ☔ Otherwise I take my cap. 🧢</i> Every day you make lots of decisions like this without noticing. Computers, video games and robots also decide with <b>conditions</b>: <b>IF</b> something is true, <b>THEN</b> they do one action, <b>ELSE</b> they do another. Let's find out how to \"teach a machine to decide\"!",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "1. What a condition is",
   "html": "<p>A <b>condition</b> is a question that can only be answered <b>YES</b> or <b>NO</b>, that is <b>TRUE</b> or <b>FALSE</b>.</p>\n<ul>\n<li>\"Is it raining?\" → yes / no ✅</li>\n<li>\"Is the traffic light red?\" → yes / no ✅</li>\n<li>\"Is the score greater than 100?\" → yes / no ✅</li>\n<li>\"What time is it?\" → ❌ it is <b>not</b> a condition: the answer is not yes or no!</li>\n</ul>\n<p>The computer checks the condition and, depending on the answer, chooses <b>which path</b> to follow in the program. This choice is called <b>selection</b> or a <b>conditional statement</b>.</p>"
  },
  {
   "type": "text",
   "title": "2. IF… THEN",
   "html": "<p>The simplest form is:</p>\n<p style=\"font-size:1.2em\">🟨 <b>IF</b> <i>condition</i> <b>THEN</b> <i>action</i></p>\n<p>If the condition is <b>true</b>, the computer does the action. If it is <b>false</b>, it skips it and carries on.</p>\n<ul>\n<li>IF the battery is below 20% THEN show \"Battery low\" 🔋</li>\n<li>IF the cat touches the fish THEN add 1 point 🐱🐟</li>\n<li>IF it gets dark THEN turn on the street lamps 💡</li>\n</ul>\n<p>In programming languages these words are written in English: <b>IF</b> is <b>if</b> and <b>THEN</b> is <b>then</b>.</p>"
  },
  {
   "type": "text",
   "title": "3. IF… THEN… ELSE",
   "html": "<p>Often we want to do one thing if the condition is true and <b>another</b> if it is false:</p>\n<p style=\"font-size:1.2em\">🟨 <b>IF</b> <i>condition</i> <b>THEN</b> <i>action A</i> <b>ELSE</b> <i>action B</i></p>\n<ul>\n<li>IF the answer is right THEN say \"Well done!\" 🎉 ELSE say \"Try again!\" 🔁</li>\n<li>IF the traffic light is green THEN cross 🚶 ELSE wait ✋</li>\n</ul>\n<p><b>Else</b> means \"otherwise\". With the else the program <b>always</b> does one of the two actions, <b>never both</b>, and <b>never neither</b>.</p>"
  },
  {
   "type": "svg",
   "title": "The flowchart: the decision diamond",
   "svg": "<svg viewBox=\"0 0 600 340\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"340\" fill=\"#f8fafc\"/>\n<ellipse cx=\"300\" cy=\"35\" rx=\"70\" ry=\"24\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"42\" font-size=\"18\" font-weight=\"bold\" fill=\"#14532d\" text-anchor=\"middle\">START</text>\n<line x1=\"300\" y1=\"59\" x2=\"300\" y2=\"85\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<polygon points=\"300,85 410,145 300,205 190,145\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"140\" font-size=\"18\" font-weight=\"bold\" fill=\"#78350f\" text-anchor=\"middle\">Is it raining?</text>\n<text x=\"300\" y=\"162\" font-size=\"14\" fill=\"#78350f\" text-anchor=\"middle\">(condition)</text>\n<line x1=\"190\" y1=\"145\" x2=\"110\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"145\" x2=\"110\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"410\" y1=\"145\" x2=\"490\" y2=\"145\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"145\" x2=\"490\" y2=\"225\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"150\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#15803d\" text-anchor=\"middle\">YES</text>\n<text x=\"450\" y=\"135\" font-size=\"18\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">NO</text>\n<rect x=\"30\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"110\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Take the umbrella ☔</text>\n<rect x=\"410\" y=\"225\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"490\" y=\"256\" font-size=\"17\" fill=\"#1e3a8a\" text-anchor=\"middle\">Take the cap 🧢</text>\n<line x1=\"110\" y1=\"275\" x2=\"110\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"490\" y1=\"275\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<line x1=\"110\" y1=\"305\" x2=\"490\" y2=\"305\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"330\" font-size=\"16\" fill=\"#334155\" text-anchor=\"middle\">then carry on: leave the house 🚪</text>\n</svg>",
   "caption": "In flowcharts the condition is drawn in a diamond: it has one entrance and two exits, YES (true) and NO (false)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: recognising conditions",
   "questions": [
    {
     "type": "mc",
     "q": "Which of these is a condition?",
     "options": [
      "What colour is the sky?",
      "Is the score greater than 10?",
      "How old are you?"
     ],
     "answer": 1,
     "explain": "A condition has only two answers: true or false. \"Is the score greater than 10?\" → yes or no."
    },
    {
     "type": "mc",
     "q": "In a flowchart the condition is drawn inside…",
     "options": [
      "a rectangle",
      "a diamond",
      "an oval"
     ],
     "answer": 1,
     "explain": "The diamond is the symbol of the decision, with two exits (yes / no)."
    },
    {
     "type": "tf",
     "q": "With IF… THEN… ELSE the program can carry out both actions together.",
     "answer": false,
     "explain": "It always carries out only one: the YES one or the NO one."
    },
    {
     "type": "mc",
     "q": "How do you say \"otherwise\" in programming languages?",
     "options": [
      "then",
      "if",
      "else"
     ],
     "answer": 2,
     "explain": "if = if, then = then, else = otherwise."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Comparisons: greater, less, equal",
   "html": "<p>Many conditions <b>compare numbers</b>. We use the symbols you know from maths:</p>\n<table>\n<tr><th>Symbol</th><th>Means</th><th>Example</th><th>True or false?</th></tr>\n<tr><td><b>&gt;</b></td><td>greater than</td><td>score &gt; 100 (with score = 120)</td><td>✅ true</td></tr>\n<tr><td><b>&lt;</b></td><td>less than</td><td>lives &lt; 1 (with lives = 3)</td><td>❌ false</td></tr>\n<tr><td><b>=</b></td><td>equal to</td><td>age = 9 (with age = 9)</td><td>✅ true</td></tr>\n</table>\n<p>Values like \"score\", \"lives\", \"age\" that can change during the game are called <b>variables</b>: they are like labelled boxes in which the computer keeps a number.</p>"
  },
  {
   "type": "text",
   "title": "5. Compound conditions: AND, OR, NOT",
   "html": "<p>Sometimes you need several conditions together. They are joined by three magic little words, the <b>logical operators</b>:</p>\n<ul>\n<li>🤝 <b>AND</b>: true only if <b>both</b> conditions are true.<br><i>IF I have finished my homework <b>AND</b> it is not raining THEN I go to the park.</i></li>\n<li>🔀 <b>OR</b>: true if <b>at least one</b> condition is true.<br><i>IF it is Saturday <b>OR</b> it is Sunday THEN no school.</i></li>\n<li>🔄 <b>NOT</b>: <b>flips</b> the answer: true becomes false and false becomes true.<br><i>IF I do <b>NOT</b> have a snack THEN I buy one.</i></li>\n</ul>\n<p>You can also put conditions <b>one inside another</b> (nested conditions): IF it is summer THEN (IF it is sunny THEN I go to the beach ELSE I go to the swimming pool).</p>"
  },
  {
   "type": "example",
   "title": "A practical example: the Scratch game",
   "html": "<p>In <b>Scratch</b> the condition blocks are orange (the <i>Control</i> category) and have a hexagon-shaped slot where the condition fits.</p>\n<p>The program of the cat that collects apples 🍎:</p>\n<p style=\"font-family:monospace;background:#fff7ed;padding:8px;border-radius:8px\">\nwhen green flag clicked<br>\nforever<br>\n&nbsp;&nbsp;<b>if</b> &lt;touching Apple?&gt; <b>then</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;change score by 1<br>\n&nbsp;&nbsp;&nbsp;&nbsp;play sound \"pop\"<br>\n&nbsp;&nbsp;<b>if</b> &lt;score = 10&gt; <b>then</b><br>\n&nbsp;&nbsp;&nbsp;&nbsp;say \"You won!\" 🏆<br>\n&nbsp;&nbsp;&nbsp;&nbsp;stop all\n</p>\n<p>Note: the condition is checked <b>all the time</b> because it is inside a \"forever\" loop. Without the loop it would be checked only once, at the beginning!</p>"
  },
  {
   "type": "example",
   "title": "A practical example: conditions around you",
   "html": "<p>Everyday machines are full of IF… THEN:</p>\n<ul>\n<li>🚪 The <b>automatic door</b> at the supermarket: IF the sensor sees a person THEN open ELSE close.</li>\n<li>🌡️ The heating <b>thermostat</b>: IF the temperature &lt; 20 °C THEN turn on the boiler ELSE turn it off.</li>\n<li>🚗 The <b>parking sensor</b>: IF the obstacle is less than 30 cm away THEN beep faster.</li>\n<li>📱 The <b>phone</b>: IF the code is right THEN unlock ELSE after 5 mistakes lock for a while.</li>\n<li>🌿 The <b>garden sprinkler</b>: IF it is 7 o'clock AND the soil is dry THEN open the water.</li>\n</ul>"
  },
  {
   "type": "widget",
   "title": "True or false? You try",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ TRUE",
     "❌ FALSE"
    ],
    "items": [
     [
      "7 > 5",
      0
     ],
     [
      "3 > 8",
      1
     ],
     [
      "10 = 10",
      0
     ],
     [
      "4 < 2",
      1
     ],
     [
      "(2 < 5) AND (6 > 1)",
      0
     ],
     [
      "(2 > 5) AND (6 > 1)",
      1
     ],
     [
      "(2 > 5) OR (6 > 1)",
      0
     ],
     [
      "(1 > 3) OR (0 > 9)",
      1
     ],
     [
      "NOT (3 = 3)",
      1
     ],
     [
      "NOT (5 < 1)",
      0
     ]
    ]
   },
   "caption": "Tap each condition and put it in the right box. Remember: AND needs all true, OR needs at least one, NOT flips."
  },
  {
   "type": "decision",
   "title": "Program the robot vacuum cleaner",
   "html": "You are programming a robot vacuum cleaner 🤖. It has a sensor in front that says whether there is an <b>obstacle</b> (a wall, a table leg, the cat…). The robot has to clean the whole room without getting stuck.",
   "question": "Which rule would you write?",
   "options": [
    {
     "label": "IF there is an obstacle THEN stop for ever.",
     "outcome": "The robot stops at the first wall and cleans nothing more: the room stays dirty!"
    },
    {
     "label": "IF there is an obstacle THEN turn a little ELSE go forward (and repeat for ever).",
     "outcome": "The robot avoids obstacles, changes direction and keeps cleaning: it works!"
    },
    {
     "label": "Always go forward, without conditions.",
     "outcome": "The robot bumps into the wall and keeps pushing: the wheels spin uselessly."
    }
   ],
   "answer": 1,
   "explain": "The first household robot vacuum cleaners (like those sold from the early 2000s) used simple rules of exactly this kind: IF I bump into something THEN I turn and set off again, all inside a loop that repeats. You need a <b>condition</b> (is there an obstacle?), the <b>two paths</b> (turn / go forward) and a <b>loop</b> that repeats the check. Today many robots also use maps and cameras, but inside there are always lots and lots of IF… THEN."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? George Boole and true/false",
   "html": "<p>In <b>1854</b> the English mathematician <b>George Boole</b> published a book, <i>The Laws of Thought</i>, in which he treated TRUE and FALSE as if they were numbers: <b>1</b> and <b>0</b>. He invented an algebra with the operations AND, OR, NOT.</p>\n<p>In his day it seemed only a game for mathematicians. Almost a century later, engineers realised that electric circuits work in the same way (current yes = 1, current no = 0): today every computer and smartphone \"thinks\" with <b>Boolean algebra</b>. In his honour, in programming languages the true/false values are called <b>Booleans</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Gamebooks",
   "html": "<p>There are books in which you decide how the story goes: at the end of a page you read <i>«If you want to enter the cave go to page 42, otherwise go to page 17»</i>. They are called <b>gamebooks</b> and became famous in the 1980s.</p>\n<p>A gamebook is really a <b>program made of IF… ELSE</b>, and the reader acts as the computer! Video games with branching stories work the same way.</p>"
  },
  {
   "type": "remember",
   "title": "To remember",
   "html": "<ul>\n<li>A <b>condition</b> is a question with the answer <b>true</b> or <b>false</b>.</li>\n<li><b>IF … THEN</b>: the action is done only if the condition is true.</li>\n<li><b>IF … THEN … ELSE</b>: one of the two actions is always done.</li>\n<li>Comparisons: <b>&gt;</b> greater, <b>&lt;</b> less, <b>=</b> equal.</li>\n<li><b>AND</b> = all true; <b>OR</b> = at least one true; <b>NOT</b> = flips.</li>\n<li>In flowcharts the condition is a <b>diamond</b> with two exits.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand conditions",
   "intro": "The same idea can be written and seen in many ways: with blocks, in a real programming language, as a fork in the woods, as the traffic lights of game rules or as a matching game.",
   "tabs": [
    {
     "label": "🧩 With blocks (Scratch)",
     "html": "<p>In Scratch (created at <b>MIT</b> in Boston and released in 2007) the <b>if… then… else</b> block is like a double <b>C-shaped mouth</b>: in the first mouth you put the blocks for YES, in the second those for NO. The condition has the shape of a <b>hexagon</b>: only hexagonal blocks (which give true or false) fit into it!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#ffffff\"/>\n<path d=\"M60 20 H420 V70 H120 V120 H420 V150 H120 V200 H420 V240 H60 Z\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<text x=\"80\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">if</text>\n<polygon points=\"120,32 140,22 330,22 350,32 330,62 140,62\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n<text x=\"235\" y=\"50\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">touching Apple?</text>\n<text x=\"360\" y=\"52\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">then</text>\n<rect x=\"130\" y=\"80\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#a855f7\"/>\n<text x=\"245\" y=\"102\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">say \"Yum!\" 🍎</text>\n<text x=\"80\" y=\"142\" font-size=\"20\" font-weight=\"bold\" fill=\"#ffffff\">else</text>\n<rect x=\"130\" y=\"160\" width=\"230\" height=\"32\" rx=\"6\" fill=\"#3b82f6\"/>\n<text x=\"245\" y=\"182\" font-size=\"17\" fill=\"#ffffff\" text-anchor=\"middle\">move 10 steps 🐾</text>\n<text x=\"440\" y=\"100\" font-size=\"16\" fill=\"#15803d\" font-weight=\"bold\">← if TRUE</text>\n<text x=\"440\" y=\"182\" font-size=\"16\" fill=\"#b91c1c\" font-weight=\"bold\">← if FALSE</text>\n</svg>"
    },
    {
     "label": "🐍 Like real programmers",
     "html": "<p>Later you will write programs with words. Here is the same idea in <b>Python</b>, one of the most widely used languages in the world (also for artificial intelligence):</p>\n<p style=\"font-family:monospace;background:#0f172a;color:#e2e8f0;padding:10px;border-radius:8px\">\nscore = 12<br>\n<span style=\"color:#f472b6\">if</span> score &gt; 10:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"You won!\")<br>\n<span style=\"color:#f472b6\">else</span>:<br>\n&nbsp;&nbsp;&nbsp;&nbsp;print(\"Keep playing\")\n</p>\n<p>The lines moved to the right (indentation) are the ones that are \"inside\" the condition, just like the blocks inside the mouth of the Scratch block. This program prints <b>\"You won!\"</b> because 12 &gt; 10 is true.</p>"
    },
    {
     "label": "🌲 The fork in the woods",
     "html": "<p>Imagine walking along a path and coming to a <b>fork</b> with a sign: <i>\"Have you got a torch? YES → cave path. NO → lake path.\"</i></p>\n<p>You cannot take both paths, and you cannot stand still: <b>you must choose one</b> according to the answer. A program is a wood full of forks: the computer reaches each fork, reads the sign (the condition) and takes one road.</p>\n<p>And if the sign only says <i>\"Are you thirsty? YES → go by the fountain\"</i>? Then if you answer NO you carry straight on: this is the case of <b>IF… THEN without ELSE</b>.</p>"
    },
    {
     "label": "🚦 The rules of games",
     "html": "<p>All board games are full of conditions, even those from other countries:</p>\n<ul>\n<li>🎲 <b>Game of the Goose</b>: IF you land on the well square THEN stay still until another player arrives.</li>\n<li>🐍 <b>Snakes and Ladders</b> (born in India, where it was called <i>Moksha Patam</i>): IF you end on a ladder THEN climb up, IF you end on a snake's head THEN slide down.</li>\n<li>🃏 <b>UNO</b>: IF the card has the same colour OR the same number THEN you can play it ELSE you draw.</li>\n</ul>\n<p>Try it: write the rules of your favourite game with IF… THEN… ELSE!</p>"
    },
    {
     "label": "🎮 Match condition and action",
     "html": "<p>Every machine has its own rule. Match the condition (IF…) to the right action (THEN…).</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "IF it gets dark",
        "turn on the street lamps"
       ],
       [
        "IF the temperature is below 20 °C",
        "turn on the heating"
       ],
       [
        "IF the sensor sees a person",
        "open the door"
       ],
       [
        "IF the battery is below 20%",
        "show \"Battery low\""
       ],
       [
        "IF the robot bumps into an obstacle",
        "turn and set off again"
       ],
       [
        "IF the code is wrong",
        "do not unlock"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of conditions: tap a node",
   "nodes": [
    {
     "id": "algoritmo",
     "label": "Algorithm",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "A sequence of precise instructions to solve a problem.",
     "why": "The name comes from <b>al-Khwarizmi</b>, a Persian mathematician who lived in Baghdad around the year 800, whose books made the Indo-Arabic numerals and methods of calculation known in Europe."
    },
    {
     "id": "condizione",
     "label": "Condition",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "A question with the answer true or false.",
     "why": "A computer cannot \"think\" as we do: it can only check whether something is true or false, millions of times a second. That is why every decision has to be turned into yes/no questions."
    },
    {
     "id": "booleani",
     "label": "True / False (Booleans)",
     "x": 18,
     "y": 30,
     "color": "#a855f7",
     "html": "The only two possible values of a condition: true (1) and false (0).",
     "why": "<b>George Boole</b> studied them in 1854. In 1937 <b>Claude Shannon</b> showed that the switches of electric circuits follow Boole's rules: this is how digital computers were born."
    },
    {
     "id": "ifthen",
     "label": "IF… THEN",
     "x": 30,
     "y": 58,
     "color": "#16a34a",
     "html": "if … then: the action is done only if the condition is true.",
     "why": "It is the idea of <b>selection</b>: together with <b>sequence</b> (instructions one after another) and <b>repetition</b> (loops) it is one of the three building blocks with which, as Böhm and Jacopini showed in 1966, any program can be built."
    },
    {
     "id": "else",
     "label": "ELSE",
     "x": 30,
     "y": 84,
     "color": "#ef4444",
     "html": "else: the path to follow when the condition is false.",
     "why": "It is used so as not to leave the program \"without an answer\": with if… else the computer always does exactly one of the two things."
    },
    {
     "id": "confronti",
     "label": "Comparisons > < =",
     "x": 70,
     "y": 58,
     "color": "#0ea5e9",
     "html": "Conditions that compare numbers or variables.",
     "why": "They are the same symbols as in maths. The symbols &gt; and &lt; were introduced by the English mathematician Thomas Harriot (published in 1631); the sign = was invented by Robert Recorde in 1557, \"because nothing is more equal than two parallel lines\"."
    },
    {
     "id": "logici",
     "label": "AND · OR · NOT",
     "x": 82,
     "y": 30,
     "color": "#db2777",
     "html": "Logical operators to join or flip conditions.",
     "why": "They come from the logic of the Greek philosophers (Aristotle) and were turned into calculations by Boole. In circuits they are called AND, OR, NOT <i>logic gates</i>: inside a processor there are billions of them."
    },
    {
     "id": "rombo",
     "label": "Flowchart",
     "x": 70,
     "y": 84,
     "color": "#64748b",
     "html": "A drawing of the program: the condition is a diamond with YES and NO exits.",
     "why": "Flowcharts were used in computing from the 1940s (Goldstine and von Neumann, 1947) to design programs before writing them; the symbols were later standardised. They are used to see all the possible paths."
    }
   ],
   "edges": [
    [
     "algoritmo",
     "condizione",
     "decides with"
    ],
    [
     "condizione",
     "booleani",
     "is worth"
    ],
    [
     "condizione",
     "ifthen",
     "is used in"
    ],
    [
     "ifthen",
     "else",
     "+ the NO path"
    ],
    [
     "condizione",
     "confronti",
     "is often a"
    ],
    [
     "condizione",
     "logici",
     "is combined with"
    ],
    [
     "ifthen",
     "rombo",
     "is drawn with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: follow the program",
   "questions": [
    {
     "type": "mc",
     "q": "score = 7. IF score > 5 THEN say \"Good\" ELSE say \"Come on!\". What does it say?",
     "options": [
      "Good",
      "Come on!",
      "Nothing"
     ],
     "answer": 0,
     "explain": "7 > 5 is true, so the YES path is followed: \"Good\"."
    },
    {
     "type": "mc",
     "q": "IF it is Saturday OR it is Sunday THEN no school. Today is Sunday. Is there school?",
     "options": [
      "Yes",
      "No"
     ],
     "answer": 1,
     "explain": "With OR one true condition is enough: it is Sunday, so no school."
    },
    {
     "type": "tf",
     "q": "(3 > 1) AND (2 > 5) is true.",
     "answer": false,
     "explain": "With AND both must be true: 2 > 5 is false, so the whole thing is false."
    },
    {
     "type": "mc",
     "q": "NOT (true) is equal to…",
     "options": [
      "true",
      "false"
     ],
     "answer": 1,
     "explain": "NOT flips the value."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Condition",
   "d": "A question whose answer is only true or false."
  },
  {
   "t": "Conditional statement (selection)",
   "d": "The part of the program that chooses what to do depending on a condition."
  },
  {
   "t": "if / then / else",
   "d": "The keywords for the conditional in programming languages."
  },
  {
   "t": "Variable",
   "d": "A \"box\" with a name that holds a value that can change (score, lives…)."
  },
  {
   "t": "Comparison operators",
   "d": "Symbols > (greater), < (less), = (equal)."
  },
  {
   "t": "Logical operators",
   "d": "AND, OR, NOT: they join or flip conditions."
  },
  {
   "t": "Boolean",
   "d": "A value that can only be true or false, named after George Boole."
  },
  {
   "t": "Flowchart",
   "d": "A drawing of an algorithm: decisions are diamonds with YES/NO exits."
  },
  {
   "t": "Sensor",
   "d": "A device that measures something (light, temperature, distance) and gives data to the conditions."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "A condition can have as its answer…",
    "options": [
     "any number",
     "only true or false",
     "only words"
    ],
    "answer": 1,
    "explain": "A condition is true or false."
   },
   {
    "type": "mc",
    "q": "Which word means \"if\" in programs?",
    "options": [
     "then",
     "if",
     "else"
    ],
    "answer": 1,
    "explain": "if is the word for \"if\"."
   },
   {
    "type": "mc",
    "q": "lives = 0. IF lives = 0 THEN \"Game over\" ELSE \"Continue\". What appears?",
    "options": [
     "Game over",
     "Continue"
    ],
    "answer": 0,
    "explain": "lives = 0 is true → Game over."
   },
   {
    "type": "mc",
    "q": "age = 8. IF age > 10 THEN \"You can ride\" ELSE \"You are too small\". What appears?",
    "options": [
     "You can ride",
     "You are too small"
    ],
    "answer": 1,
    "explain": "8 > 10 is false → the ELSE path is followed."
   },
   {
    "type": "tf",
    "q": "With the OR operator only one condition has to be true.",
    "answer": true,
    "explain": "OR is true if at least one condition is true."
   },
   {
    "type": "tf",
    "q": "(5 = 5) AND (1 < 4) is true.",
    "answer": true,
    "explain": "Both are true, so AND gives true."
   },
   {
    "type": "tf",
    "q": "In flowcharts the decision is drawn in a circle.",
    "answer": false,
    "explain": "It is drawn in a diamond."
   },
   {
    "type": "text",
    "q": "What is the word in programs that means \"otherwise\" called?",
    "answer": [
     "else"
    ],
    "explain": "else means \"otherwise\"."
   },
   {
    "type": "num",
    "q": "score = 4. IF score < 5 THEN add 10 to the score. What is the score at the end?",
    "answer": 14,
    "explain": "4 < 5 is true, so 4 + 10 = 14."
   },
   {
    "type": "num",
    "q": "x = 9. IF x > 5 AND x < 8 THEN x becomes 0 ELSE x becomes 1. What is x at the end?",
    "answer": 1,
    "explain": "9 > 5 is true but 9 < 8 is false: with AND the result is false, so x becomes 1."
   },
   {
    "type": "mc",
    "q": "Which object uses the rule \"IF the temperature is low THEN turn on\"?",
    "options": [
     "the thermostat",
     "the book",
     "the pencil"
    ],
    "answer": 0,
    "explain": "The thermostat measures the temperature and turns the heating on or off."
   },
   {
    "type": "order",
    "q": "Put in order how a program with a condition works.",
    "items": [
     "reaches the condition",
     "checks whether it is true or false",
     "chooses the YES or NO path",
     "carries out the actions of that path",
     "carries on with the rest of the program"
    ],
    "explain": "The computer checks, chooses a path, carries it out and then moves on."
   }
  ]
 }
});
