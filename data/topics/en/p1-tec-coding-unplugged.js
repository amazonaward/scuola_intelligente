TOPIC('en', {
 "id": "p1-tec-coding-unplugged",
 "title": "Coding without a computer",
 "intro": "Computers and robots are brilliant… but they do <b>only what we tell them</b>! 🤖 To make them work you have to give <b>clear instructions</b> in <b>the right order</b>. This is called <b>coding</b>. And the great thing is that you can learn it <b>without a computer</b>, using your body, arrows and a bit of imagination! ➡️⬆️",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "What is an instruction?",
   "html": "<p>An <b>instruction</b> is a precise order that says <b>what to do</b>: \"Take one step forwards\", \"Turn right\", \"Clap your hands\".</p>\n<p>Lots of instructions put in a row make a <b>sequence</b>. If the sequence is used to solve a problem, it's called an <b>algorithm</b>.</p>\n<p>👉 You use algorithms every day without knowing it! To brush your teeth:</p>\n<ol>\n<li>I pick up my toothbrush 🪥</li>\n<li>I put on the toothpaste</li>\n<li>I brush my teeth</li>\n<li>I rinse my mouth 💧</li>\n<li>I rinse my toothbrush and put it away</li>\n</ol>\n<p>If you put the toothpaste on <b>after</b> brushing… it doesn't work! The <b>order</b> is really important.</p>"
  },
  {
   "type": "svg",
   "title": "The robot on the grid",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"320\" fill=\"#f1f5f9\"/>\n<g stroke=\"#334155\" stroke-width=\"2\">\n<rect x=\"30\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"30\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"30\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"95\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"95\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n<rect x=\"30\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"95\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"160\" y=\"160\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"225\" y=\"160\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/>\n<rect x=\"30\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"95\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/><rect x=\"160\" y=\"225\" width=\"65\" height=\"65\" fill=\"#e2e8f0\"/><rect x=\"225\" y=\"225\" width=\"65\" height=\"65\" fill=\"#ffffff\"/>\n</g>\n<text x=\"62\" y=\"272\" font-size=\"40\" text-anchor=\"middle\">🤖</text>\n<text x=\"257\" y=\"77\" font-size=\"40\" text-anchor=\"middle\">⭐</text>\n<text x=\"192\" y=\"207\" font-size=\"38\" text-anchor=\"middle\">🪨</text>\n<path d=\"M62 245 V60 M62 60 H240\" stroke=\"#ef4444\" stroke-width=\"5\" fill=\"none\" stroke-dasharray=\"10 6\"/>\n<text x=\"440\" y=\"60\" font-size=\"22\" text-anchor=\"middle\" fill=\"#0f172a\" font-weight=\"bold\">Program:</text>\n<text x=\"440\" y=\"100\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">⬆️ ⬆️ ⬆️</text>\n<text x=\"440\" y=\"140\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\">➡️ ➡️ ➡️</text>\n<text x=\"440\" y=\"190\" font-size=\"18\" text-anchor=\"middle\" fill=\"#166534\">The robot reaches the star!</text>\n<text x=\"440\" y=\"225\" font-size=\"18\" text-anchor=\"middle\" fill=\"#334155\">and doesn't bump into the rock 🪨</text>\n<text x=\"440\" y=\"275\" font-size=\"16\" text-anchor=\"middle\" fill=\"#64748b\">1 arrow = 1 square</text>\n</svg>",
   "caption": "The robot starts at the bottom left. With 3 steps up and 3 to the right it reaches the star ⭐, avoiding the rock."
  },
  {
   "type": "remember",
   "title": "The rules of a good programmer",
   "html": "<p>1️⃣ Instructions must be <b>clear</b>: \"go over there\" ❌ — \"take 2 steps forwards\" ✅</p>\n<p>2️⃣ They must be <b>in order</b>: first, then, next, finally.</p>\n<p>3️⃣ A robot <b>doesn't think</b>: it does exactly what's written, even if it's wrong!</p>\n<p>4️⃣ If something goes wrong, there's a <b>bug</b> (a mistake): we look for it and fix it. Making mistakes is part of the game! 🐞</p>"
  },
  {
   "type": "widget",
   "title": "Game: the robot's arrows",
   "widget": "match",
   "options": {
    "pairs": [
     [
      "⬆️",
      "one step forwards (up)"
     ],
     [
      "⬇️",
      "one step back (down)"
     ],
     [
      "➡️",
      "one step right"
     ],
     [
      "⬅️",
      "one step left"
     ],
     [
      "🔁",
      "repeat"
     ],
     [
      "🛑",
      "stop"
     ]
    ]
   },
   "caption": "Each symbol is a command. Match it to its meaning."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: instructions in order",
   "questions": [
    {
     "type": "order",
     "q": "Put the algorithm for washing your hands in order:",
     "items": [
      "I turn on the tap 🚰",
      "I put on soap 🧼",
      "I rub my hands well",
      "I rinse",
      "I dry my hands 🧻"
     ],
     "explain": "First you wet your hands, then soap, rub, rinse and dry."
    },
    {
     "type": "tf",
     "q": "A robot understands the instruction \"go a bit over there\".",
     "answer": false,
     "explain": "A robot needs precise instructions: how many steps and in which direction."
    },
    {
     "type": "mc",
     "q": "A mistake in a program is called a…",
     "options": [
      "bug",
      "byte",
      "bus"
     ],
     "answer": 0,
     "explain": "A bug, which also means \"insect\"."
    }
   ]
  },
  {
   "type": "example",
   "title": "Example: the human robot game 🧍➡️🤖",
   "html": "<p>In the gym or the playground, draw a grid of squares on the ground with chalk (or use the floor tiles).</p>\n<ol>\n<li>One child is the <b>robot</b> 🤖 and stands on the starting square.</li>\n<li>A classmate is the <b>programmer</b> 🧑‍💻 and writes on a sheet of paper the arrows to reach the treasure 💎.</li>\n<li>The programmer reads the arrows one at a time and the robot carries them out.</li>\n<li>Does the robot reach the treasure? 🎉 If not, look for the <b>bug</b> together and fix it!</li>\n</ol>\n<p>Then swap roles.</p>"
  },
  {
   "type": "example",
   "title": "Example: Robot Dad's sandwich 🥪",
   "html": "<p>A game that's famous in schools all over the world: ask a grown-up to be a <b>robot</b> that makes a sandwich, following your instructions <b>exactly</b>.</p>\n<p>🧒 \"Put the jam on the bread!\"<br>🤖 (Dad puts the closed jar on top of the bread 😂)</p>\n<p>The robot doesn't know it has to <b>open</b> the jar and use the <b>knife</b>! You have to tell it everything:</p>\n<p>\"Open the jar. Pick up the knife. Put the knife into the jam. Spread the jam on the slice of bread.\" ✅</p>\n<p>That's why programmers have to be <b>very precise</b>.</p>"
  },
  {
   "type": "text",
   "title": "Repeating: the loop 🔁",
   "html": "<p>If the robot has to take 5 steps forwards, we can write: ⬆️ ⬆️ ⬆️ ⬆️ ⬆️</p>\n<p>But it's quicker to say: <b>🔁 repeat 5 times: ⬆️</b></p>\n<p>This is called a <b>loop</b>. Songs have loops too: the chorus repeats!</p>\n<p>💃 Try this dance program: <b>repeat 3 times</b> [clap your hands 👏, jump 🦘, spin around 🔄].</p>"
  },
  {
   "type": "widget",
   "title": "Game: clear or confusing instruction?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Clear (the robot understands)",
     "❌ Confusing (the robot doesn't understand)"
    ],
    "items": [
     [
      "take 3 steps forwards",
      0
     ],
     [
      "turn right",
      0
     ],
     [
      "repeat 2 times: jump",
      0
     ],
     [
      "pick up the red ball",
      0
     ],
     [
      "go a bit over there",
      1
     ],
     [
      "do something nice",
      1
     ],
     [
      "walk for as long as you like",
      1
     ],
     [
      "pick up that thing",
      1
     ]
    ]
   },
   "caption": "A robot needs precise instructions. Which ones does it understand and which not?"
  },
  {
   "type": "curiosity",
   "title": "Did you know… the first \"bug\" was a real moth? 🦋",
   "html": "<p>In <b>1947</b>, in the United States, a huge computer called the <b>Harvard Mark II</b> stopped working. The scientists in <b>Grace Hopper</b>'s team looked for the problem and found… a <b>moth</b> stuck in the circuits! They taped it into their notebook and wrote: \"first actual case of <b>bug</b> being found\". Since then mistakes in programs have been called <b>bugs</b> 🐞, and fixing them is called <b>debugging</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know… the first programmer was a woman, 180 years ago? 👩‍💻",
   "html": "<p>In <b>1843</b>, in England, <b>Ada Lovelace</b> wrote instructions for a calculating machine invented by her friend Charles Babbage, the \"Analytical Engine\". The machine was never built, but Ada's instructions are considered the <b>first program</b> in history! Ada already imagined that one day machines might even compose music. 🎶</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to learn coding",
   "intro": "<p>Coding can be learned in lots of different ways. Try the one you like best!</p>",
   "tabs": [
    {
     "label": "🇮🇹 CodyRoby",
     "html": "<p><b>CodyRoby</b> is a card game invented in Italy, at the University of Urbino, by Professor <b>Alessandro Bogliolo</b>, for Code Week.</p>\n<p>Each card is a command: 🟨 <b>go forwards</b>, 🟥 <b>turn right</b>, 🟦 <b>turn left</b>. On a grid, the players line up the cards to guide Roby the robot to the finish!</p>"
    },
    {
     "label": "🐝 The bee robot",
     "html": "<p>In lots of schools around the world (especially in England, where it was born) children use <b>Bee-Bot</b>, a little robot shaped like a <b>bee</b> 🐝.</p>\n<p>On its back it has arrow buttons: press ⬆️ ⬆️ ➡️ ⬆️ and then <b>GO</b>, and the bee moves across the mat following your program. Each step is 15 cm long!</p>"
    },
    {
     "label": "🍳 The recipe",
     "html": "<p>A <b>recipe</b> is an algorithm! It has <b>ingredients</b> (what you need) and <b>steps</b> in order (what to do).</p>\n<p>🥤 <b>Banana smoothie algorithm:</b><br>1. Peel the banana 🍌<br>2. Cut it into pieces (with a grown-up!)<br>3. Put it in the blender with the milk 🥛<br>4. Blend for 30 seconds<br>5. Pour into a glass and drink! 😋</p>\n<p>If you do step 4 before step 3… you blend nothing at all!</p>"
    },
    {
     "label": "🎨 Pixel art",
     "html": "<p>Drawing can be coding too! On squared paper follow the code row by row: <b>⬜ = leave white</b>, <b>🟥 = colour in</b>.</p>\n<p>Row 1: ⬜🟥⬜🟥⬜<br>Row 2: 🟥🟥🟥🟥🟥<br>Row 3: ⬜🟥🟥🟥⬜<br>Row 4: ⬜⬜🟥⬜⬜</p>\n<p>What do you get? A <b>heart</b>! ❤️ The pictures on a computer screen are made just like this, with lots of tiny squares called <b>pixels</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"0\" y=\"0\" width=\"600\" height=\"240\" fill=\"#ffffff\"/>\n<g stroke=\"#94a3b8\" stroke-width=\"2\">\n<rect x=\"200\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"320\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"20\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"240\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"60\" width=\"40\" height=\"40\" fill=\"#ef4444\"/>\n<rect x=\"200\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"280\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"360\" y=\"100\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n<rect x=\"200\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"240\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"280\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ef4444\"/><rect x=\"320\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/><rect x=\"360\" y=\"140\" width=\"40\" height=\"40\" fill=\"#ffffff\"/>\n</g>\n<text x=\"300\" y=\"220\" font-size=\"20\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">4 rows of code = a pixel heart</text>\n</svg>"
    },
    {
     "label": "🧊 The robot in 3D",
     "html": "<p>Imagine that each little cube is a square on the robot's grid. There are 4 rows of 4 squares: <b>16 squares</b>. Turn the grid and try to invent a route from the corner nearest you to the opposite corner: how many arrows do you need?</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 4,
      "b": 4
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Coding map",
   "nodes": [
    {
     "id": "coding",
     "label": "Coding",
     "x": 50,
     "y": 8,
     "color": "#8b5cf6",
     "html": "<p>Giving instructions to a machine in a language it understands.</p>",
     "why": "<p>Computers are made of circuits that can only carry out very simple commands. Coding is the way people tell them what to do.</p>"
    },
    {
     "id": "istr",
     "label": "Instruction",
     "x": 18,
     "y": 30,
     "color": "#22c55e",
     "html": "<p>A precise command: \"one step forwards\".</p>",
     "why": "<p>Machines can't guess: that's why every instruction must have only one possible meaning.</p>"
    },
    {
     "id": "seq",
     "label": "Sequence",
     "x": 50,
     "y": 34,
     "color": "#3b82f6",
     "html": "<p>Instructions put in a row, in the right order.</p>",
     "why": "<p>A computer carries out one instruction at a time, from the first to the last. If you change the order, the result changes.</p>"
    },
    {
     "id": "algo",
     "label": "Algorithm",
     "x": 82,
     "y": 30,
     "color": "#f97316",
     "html": "<p>A sequence that solves a problem.</p>",
     "why": "<p>The word comes from the name of <b>al-Khwarizmi</b>, a Persian mathematician who lived in Baghdad more than 1,100 years ago and wrote books on how to do calculations step by step.</p>"
    },
    {
     "id": "ciclo",
     "label": "Loop 🔁",
     "x": 22,
     "y": 64,
     "color": "#eab308",
     "html": "<p>Repeating the same instructions several times.</p>",
     "why": "<p>It saves you writing the same thing a thousand times. Machines can repeat things without ever getting tired.</p>"
    },
    {
     "id": "bug",
     "label": "Bug 🐞",
     "x": 50,
     "y": 66,
     "color": "#ef4444",
     "html": "<p>A mistake in the program.</p>",
     "why": "<p>The name spread after Grace Hopper's team found a moth inside the Harvard Mark II computer in 1947. Fixing a mistake is called \"debugging\".</p>"
    },
    {
     "id": "robot",
     "label": "Robots and computers",
     "x": 80,
     "y": 64,
     "color": "#14b8a6",
     "html": "<p>The machines that run programs.</p>",
     "why": "<p>The word \"robot\" was invented in 1920 by the Czech writer Karel Čapek: it comes from <i>robota</i>, which means \"hard work\".</p>"
    },
    {
     "id": "ada",
     "label": "Ada Lovelace",
     "x": 35,
     "y": 92,
     "color": "#ec4899",
     "html": "<p>The first programmer (1843).</p>",
     "why": "<p>She wrote an algorithm for Charles Babbage's Analytical Engine, more than 100 years before electronic computers.</p>"
    },
    {
     "id": "unplugged",
     "label": "Unplugged",
     "x": 68,
     "y": 92,
     "color": "#64748b",
     "html": "<p>Coding without a computer: with your body, cards, arrows.</p>",
     "why": "<p>\"Unplugged\" means \"not plugged in\". A programmer's way of thinking (computational thinking) can be trained without screens too.</p>"
    }
   ],
   "edges": [
    [
     "coding",
     "istr",
     "uses"
    ],
    [
     "coding",
     "seq",
     ""
    ],
    [
     "coding",
     "algo",
     ""
    ],
    [
     "istr",
     "seq",
     "in a row they make a"
    ],
    [
     "seq",
     "algo",
     "if it solves a problem"
    ],
    [
     "seq",
     "ciclo",
     "repeats with a"
    ],
    [
     "seq",
     "bug",
     "can have a"
    ],
    [
     "algo",
     "robot",
     "carried out by"
    ],
    [
     "robot",
     "ada",
     ""
    ],
    [
     "ciclo",
     "unplugged",
     ""
    ],
    [
     "bug",
     "unplugged",
     ""
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: arrows and loops",
   "questions": [
    {
     "type": "num",
     "q": "🔁 Repeat 4 times: ⬆️. How many steps does the robot take?",
     "answer": 4,
     "explain": "The loop repeats the arrow 4 times: 4 steps."
    },
    {
     "type": "mc",
     "q": "In the picture, which program takes the robot to the star?",
     "options": [
      "⬆️⬆️⬆️ ➡️➡️➡️",
      "➡️➡️ ⬆️",
      "⬇️⬇️⬇️"
     ],
     "answer": 0,
     "explain": "3 steps up and 3 to the right."
    },
    {
     "type": "tf",
     "q": "An algorithm is a sequence of instructions to solve a problem.",
     "answer": true,
     "explain": "Exactly, like a recipe!"
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Coding",
   "d": "Writing instructions that a machine can carry out."
  },
  {
   "t": "Instruction",
   "d": "A clear, precise command."
  },
  {
   "t": "Sequence",
   "d": "Instructions put in a row in the right order."
  },
  {
   "t": "Algorithm",
   "d": "A sequence of instructions that solves a problem."
  },
  {
   "t": "Loop",
   "d": "Instructions repeated several times."
  },
  {
   "t": "Bug",
   "d": "A mistake in a program."
  },
  {
   "t": "Debug",
   "d": "To find and fix mistakes."
  },
  {
   "t": "Unplugged",
   "d": "Without a computer, \"not plugged in\"."
  },
  {
   "t": "Pixel",
   "d": "A tiny square of colour that makes up the pictures on a screen."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "An algorithm is…",
    "options": [
     "a kind of robot",
     "a sequence of instructions to solve a problem",
     "a ball game"
    ],
    "answer": 1,
    "explain": "Like a recipe: steps in order."
   },
   {
    "type": "tf",
    "q": "A robot does exactly what we tell it, even if it's wrong.",
    "answer": true,
    "explain": "A robot doesn't think: it carries out instructions."
   },
   {
    "type": "order",
    "q": "Put the algorithm for planting a seed in order:",
    "items": [
     "I put soil in the pot 🪴",
     "I make a little hole with my finger",
     "I put the seed in the hole 🌱",
     "I cover it with soil",
     "I water it 💧"
    ],
    "explain": "Each step prepares the next one."
   },
   {
    "type": "mc",
    "q": "Which instruction is clear for a robot?",
    "options": [
     "go over there",
     "take 2 steps forwards",
     "do something"
    ],
    "answer": 1,
    "explain": "It says how many steps and in which direction."
   },
   {
    "type": "num",
    "q": "The program is ➡️➡️➡️⬆️⬆️. How many steps does the robot take altogether?",
    "answer": 5,
    "explain": "3 + 2 = 5 steps."
   },
   {
    "type": "text",
    "q": "What is a mistake in a program called?",
    "answer": [
     "bug",
     "a bug"
    ],
    "explain": "Bug = insect: remember the moth from 1947?"
   },
   {
    "type": "mc",
    "q": "🔁 \"Repeat 3 times: jump\" is…",
    "options": [
     "a loop",
     "a bug",
     "a pixel"
    ],
    "answer": 0,
    "explain": "Repeating instructions is a loop."
   },
   {
    "type": "mc",
    "q": "Who is considered the first programmer in history?",
    "options": [
     "Ada Lovelace",
     "Grace Hopper",
     "Marie Curie"
    ],
    "answer": 0,
    "explain": "Ada Lovelace, in 1843."
   },
   {
    "type": "tf",
    "q": "You can't do coding without a computer.",
    "answer": false,
    "explain": "You can do it unplugged too: with your body, cards, arrows."
   },
   {
    "type": "mc",
    "q": "The robot is on a square and has to go 2 squares to the left. The right program is:",
    "options": [
     "➡️➡️",
     "⬅️⬅️",
     "⬆️⬆️"
    ],
    "answer": 1,
    "explain": "Two arrows pointing left."
   },
   {
    "type": "order",
    "q": "Put the programmer's work in order:",
    "items": [
     "I write the instructions",
     "the robot carries them out",
     "I check whether it gets to the right place",
     "if there's a bug, I fix it"
    ],
    "explain": "Write, test, check, fix: it's the programmer's cycle."
   }
  ]
 }
});
