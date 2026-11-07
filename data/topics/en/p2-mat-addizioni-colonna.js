TOPIC('en', {
 "id": "p2-mat-addizioni-colonna",
 "title": "Column addition",
 "intro": "To add big numbers there's a champion's trick: put them <b>in columns</b>, one under the other! ✏️ Let's learn addition <b>without regrouping</b> and <b>with regrouping</b> (the famous <b>carrying</b>).",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "What is addition?",
   "html": "<p><b>Adding</b> means <b>putting together</b>, adding on. 🍎 + 🍎🍎 = 🍎🍎🍎</p>\n<p>The numbers we add are called <b>addends</b>. The result is called the <b>sum</b> (or total).</p>\n<p style=\"font-size:1.2em; text-align:center\"><b>23</b> + <b>45</b> = <b>68</b><br><span style=\"font-size:0.8em\">addend + addend = sum</span></p>"
  },
  {
   "type": "text",
   "title": "Column addition without regrouping",
   "html": "<p>Let's work out <b>23 + 45</b> in columns:</p>\n<ol>\n<li>Write the numbers one under the other: <b>ones under ones</b>, <b>tens under tens</b>. Use the letters <b>T</b> and <b>O</b> to help you.</li>\n<li>Always start with the <b>ones</b>, on the right ➡️: 3 + 5 = <b>8</b>. Write 8 under the ones.</li>\n<li>Then move on to the <b>tens</b>: 2 + 4 = <b>6</b>. Write 6 under the tens.</li>\n<li>Read the answer: <b>68</b>! 🎉</li>\n</ol>"
  },
  {
   "type": "svg",
   "title": "23 + 45 in columns",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"150\" y=\"20\" width=\"90\" height=\"260\" fill=\"#fee2e2\"/>\n<rect x=\"240\" y=\"20\" width=\"90\" height=\"260\" fill=\"#dbeafe\"/>\n<text x=\"195\" y=\"55\" font-size=\"26\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">T</text>\n<text x=\"285\" y=\"55\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">O</text>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"195\" y=\"120\">2</text><text x=\"285\" y=\"120\">3</text>\n<text x=\"195\" y=\"185\">4</text><text x=\"285\" y=\"185\">5</text>\n</g>\n<text x=\"110\" y=\"185\" font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#16a34a\">+</text>\n<line x1=\"90\" y1=\"205\" x2=\"330\" y2=\"205\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"195\" y=\"265\" fill=\"#b91c1c\">6</text><text x=\"285\" y=\"265\" fill=\"#1d4ed8\">8</text>\n</g>\n<text x=\"360\" y=\"110\" font-size=\"20\" fill=\"#1d4ed8\">① ones: 3 + 5 = 8</text>\n<text x=\"360\" y=\"150\" font-size=\"20\" fill=\"#b91c1c\">② tens: 2 + 4 = 6</text>\n<path d=\"M330 240 L350 240\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<text x=\"360\" y=\"250\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">③ sum = 68</text>\n</svg>",
   "caption": "Each digit in its own column: start with the ones (on the right) and then move on to the tens."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: without regrouping",
   "questions": [
    {
     "type": "num",
     "q": "What is 32 + 16?",
     "answer": 48,
     "explain": "Ones: 2 + 6 = 8. Tens: 3 + 1 = 4. Sum: 48."
    },
    {
     "type": "mc",
     "q": "Which column do you start with?",
     "options": [
      "the tens",
      "the ones",
      "it doesn't matter"
     ],
     "answer": 1,
     "explain": "You always start with the ones, on the right."
    },
    {
     "type": "num",
     "q": "What is 51 + 27?",
     "answer": 78,
     "explain": "1 + 7 = 8; 5 + 2 = 7: 78."
    }
   ]
  },
  {
   "type": "text",
   "title": "Addition with regrouping (carrying)",
   "html": "<p>Let's work out <b>37 + 48</b>:</p>\n<ol>\n<li><b>Ones</b>: 7 + 8 = <b>15</b>. But only <b>one digit</b> fits in a column! 😮</li>\n<li>15 ones = <b>1 ten and 5 ones</b>. Write <b>5</b> under the ones and <b>carry 1</b> to the top of the tens column: this is <b>carrying</b> (or regrouping).</li>\n<li><b>Tens</b>: 1 (the carried ten) + 3 + 4 = <b>8</b>.</li>\n<li>Answer: <b>85</b>! ✅</li>\n</ol>\n<p>Carrying isn't magic: we have just <b>exchanged 10 ones for 1 ten</b>, like when you swap ten 1-cent coins for one 10-cent coin.</p>"
  },
  {
   "type": "svg",
   "title": "37 + 48 with carrying",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<rect x=\"150\" y=\"20\" width=\"90\" height=\"260\" fill=\"#fee2e2\"/>\n<rect x=\"240\" y=\"20\" width=\"90\" height=\"260\" fill=\"#dbeafe\"/>\n<text x=\"195\" y=\"45\" font-size=\"22\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">T</text>\n<text x=\"285\" y=\"45\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">O</text>\n<circle cx=\"195\" cy=\"72\" r=\"17\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"195\" y=\"80\" font-size=\"24\" text-anchor=\"middle\" fill=\"#a16207\" font-weight=\"bold\">1</text>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"195\" y=\"140\">3</text><text x=\"285\" y=\"140\">7</text>\n<text x=\"195\" y=\"200\">4</text><text x=\"285\" y=\"200\">8</text>\n</g>\n<text x=\"110\" y=\"200\" font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#16a34a\">+</text>\n<line x1=\"90\" y1=\"218\" x2=\"330\" y2=\"218\" stroke=\"#1f2937\" stroke-width=\"5\"/>\n<g font-size=\"52\" font-weight=\"bold\" text-anchor=\"middle\">\n<text x=\"195\" y=\"272\" fill=\"#b91c1c\">8</text><text x=\"285\" y=\"272\" fill=\"#1d4ed8\">5</text>\n</g>\n<path d=\"M285 95 Q250 40 215 65\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<polygon points=\"213,58 222,70 208,72\" fill=\"#ca8a04\"/>\n<text x=\"350\" y=\"100\" font-size=\"19\" fill=\"#1d4ed8\">① 7 + 8 = 15</text>\n<text x=\"350\" y=\"128\" font-size=\"19\" fill=\"#1d4ed8\">write 5, carry 1</text>\n<text x=\"350\" y=\"175\" font-size=\"19\" fill=\"#b91c1c\">② 1 + 3 + 4 = 8</text>\n<text x=\"350\" y=\"262\" font-size=\"22\" fill=\"#1f2937\" font-weight=\"bold\">③ sum = 85</text>\n</svg>",
   "caption": "The 15 ones become 1 ten (the yellow carried 1) and 5 ones."
  },
  {
   "type": "3d",
   "title": "Regrouping with 3D cubes",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 85
   },
   "caption": "Here is 85: 8 rods and 5 cubes. The 7 + 8 = 15 ones have become 1 new rod and 5 cubes. Change the number and watch when a new rod appears!"
  },
  {
   "type": "example",
   "title": "Example: collecting bottle caps ♻️",
   "html": "<p>Class 2A collected <b>46 caps</b>, class 2B collected <b>38</b>. How many altogether?</p>\n<ul>\n<li>Ones: 6 + 8 = 14 → write <b>4</b>, carry <b>1</b>.</li>\n<li>Tens: 1 + 4 + 3 = <b>8</b>.</li>\n</ul>\n<p><b>84 caps</b> altogether! 🎉</p>"
  },
  {
   "type": "example",
   "title": "Example: a snack at the café 🥐",
   "html": "<p>A croissant costs <b>65 cents</b> and a juice <b>30 cents</b>. How much do I spend?</p>\n<ul>\n<li>Ones: 5 + 0 = 5.</li>\n<li>Tens: 6 + 3 = 9.</li>\n</ul>\n<p>I spend <b>95 cents</b>. With 1 euro (100 cents) I have enough! 💶</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Ones under ones, tens under tens.</li>\n<li>Always start with the <b>ones</b> (from the right).</li>\n<li>If the ones make 10 or more: write the ones digit and <b>carry 1</b> to the tens.</li>\n<li>You can swap the addends: 37 + 48 = 48 + 37 (the <b>commutative</b> property). Use it to <b>check</b> your answer!</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The <b>+</b> sign comes from the Latin word <i>et</i>, which means \"and\". Writing it in a hurry, merchants turned it into a little cross! ✝️➕</p>\n<p>It was printed for the first time in an arithmetic book by the German <b>Johannes Widmann</b>, in <b>1489</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The great mathematician <b>Carl Friedrich Gauss</b>, as a boy, added up all the numbers from 1 to 100 in a few seconds! 🤯</p>\n<p>His trick: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101… There are 50 pairs that make 101: 50 × 101 = <b>5,050</b>.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to add",
   "intro": "Columns are handy, but they're not the only way! Around the world children use lots of different methods. Try the one you like best.",
   "tabs": [
    {
     "label": "🇺🇸 Partial sums",
     "html": "<p>In many American and British schools children use the <b>partial sums</b> method: you add the tens first, then the ones, and at the end you put everything together.</p>\n<p><b>37 + 48</b>:</p>\n<ul>\n<li>tens: 30 + 40 = <b>70</b></li>\n<li>ones: 7 + 8 = <b>15</b></li>\n<li>total: 70 + 15 = <b>85</b></li>\n</ul>\n<p>No carrying to remember: you can see everything!</p>"
    },
    {
     "label": "🦘 Jumps on the number line",
     "html": "<p>Start from the first number and make <b>jumps</b>: first the tens, then the ones.</p>\n<p><b>37 + 48</b>: start at 37 → jump 4 tens: 47, 57, 67, 77 → then 8 ones: <b>85</b>.</p>\n<p>Or jump 3 to reach the round ten (40) and then 45: 37 → 40 → <b>85</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 30,
      "max": 90,
      "step": 1,
      "marks": [
       37,
       47,
       57,
       67,
       77,
       85
      ]
     }
    },
    {
     "label": "🎯 Round and adjust",
     "html": "<p>The <b>round number</b> method (it's called <b>compensation</b>):</p>\n<p><b>37 + 48</b>: 48 is almost 50! So I do 37 + 50 = 87, but I've added 2 too many, so I take away 2: 87 − 2 = <b>85</b>.</p>\n<p>It's the favourite method of people who do sums in their head, for example at the market.</p>"
    },
    {
     "label": "🧮 Japanese soroban",
     "html": "<p>In <b>Japan</b> many children learn to calculate with the <b>soroban</b>, a special abacus. Each column is a place: ones, tens… When a column reaches 10, you clear it and add a bead to the column on the left: that's exactly <b>carrying</b>!</p>\n<p>Try with this abacus: set 37, then add 8 ones and 4 tens.</p>",
     "widget": "abacus",
     "options": {
      "columns": [
       "T",
       "O"
      ],
      "value": 37
     }
    },
    {
     "label": "💶 With coins",
     "html": "<p>You have <b>3 coins of 10 cents and 7 of 1 cent</b> (37 cents). Grandma gives you <b>4 of 10 and 8 of 1</b> (48 cents).</p>\n<p>Now you have 7 coins of 10 and 15 of 1. But 10 coins of 1 cent can be <b>exchanged</b> at the bank for one of 10! 🏦</p>\n<p>After the exchange: <b>8 coins of 10</b> and <b>5 of 1</b> = <b>85 cents</b>. That's why it's called \"regrouping\" or \"exchanging\"!</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of column addition",
   "nodes": [
    {
     "id": "addizione",
     "label": "Addition",
     "x": 50,
     "y": 8,
     "color": "#16a34a",
     "html": "An operation that puts together two or more amounts.",
     "why": "It's the oldest operation: counting cattle, joining two harvests. The word comes from the Latin <i>addere</i>, \"to add\"."
    },
    {
     "id": "addendi",
     "label": "Addends and sum",
     "x": 18,
     "y": 28,
     "color": "#2563eb",
     "html": "Addends: the numbers to add. Sum: the result.",
     "why": "\"Addend\" in Latin means \"what must be added\". \"Sum\" comes from <i>summa</i>, \"the highest part\": it's said the ancient Romans wrote the total at the top of the column of numbers!"
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 50,
     "y": 35,
     "color": "#f59e0b",
     "html": "Ones under ones, tens under tens.",
     "why": "Digits are worth different amounts depending on their place. If you put them in the wrong column you add tens to ones: like adding euros and cents!"
    },
    {
     "id": "unita",
     "label": "Start with the ones",
     "x": 82,
     "y": 28,
     "color": "#0ea5e9",
     "html": "You always start with the right-hand column.",
     "why": "Because the ones can \"fill up\" and make a ten to add to the next column. If we started with the tens we would have to go back and correct them."
    },
    {
     "id": "cambio",
     "label": "Regrouping (carrying)",
     "x": 82,
     "y": 58,
     "color": "#dc2626",
     "html": "10 ones become 1 ten, which goes in the column to the left.",
     "why": "It comes straight from our <b>base 10</b> system: each place can only hold the digits 0 to 9. Column addition with carrying spread in Europe from the 1200s thanks to <b>Fibonacci's</b> <i>Liber Abaci</i>."
    },
    {
     "id": "commutativa",
     "label": "Commutative property",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "Changing the order of the addends doesn't change the sum.",
     "why": "Putting 3 apples in a basket with 5, or 5 apples with 3, always gives 8 apples: amounts don't depend on the order."
    },
    {
     "id": "prova",
     "label": "Checking",
     "x": 32,
     "y": 85,
     "color": "#14b8a6",
     "html": "You redo the addition swapping the addends.",
     "why": "Thanks to the commutative property, the result must be identical: if it's different there's a mistake."
    },
    {
     "id": "segno",
     "label": "The + sign",
     "x": 68,
     "y": 85,
     "color": "#64748b",
     "html": "The symbol for addition.",
     "why": "It comes from the Latin <i>et</i> (\"and\"). It appeared in print in 1489 in <b>Johannes Widmann's</b> book, together with the − sign."
    }
   ],
   "edges": [
    [
     "addizione",
     "addendi",
     "has"
    ],
    [
     "addizione",
     "posizione",
     "in columns uses"
    ],
    [
     "posizione",
     "unita",
     "rule"
    ],
    [
     "unita",
     "cambio",
     "if ≥ 10"
    ],
    [
     "addizione",
     "commutativa",
     "has the"
    ],
    [
     "commutativa",
     "prova",
     "allows"
    ],
    [
     "addizione",
     "segno",
     "is written with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: with regrouping",
   "questions": [
    {
     "type": "num",
     "q": "What is 28 + 35?",
     "answer": 63,
     "explain": "8 + 5 = 13: write 3, carry 1. 1 + 2 + 3 = 6. Sum: 63."
    },
    {
     "type": "num",
     "q": "What is 19 + 19?",
     "answer": 38,
     "explain": "9 + 9 = 18: write 8, carry 1. 1 + 1 + 1 = 3: 38."
    },
    {
     "type": "tf",
     "q": "46 + 23 needs regrouping.",
     "answer": false,
     "explain": "6 + 3 = 9, less than 10: no regrouping."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Addition",
   "d": "An operation that adds, puts together."
  },
  {
   "t": "Addends",
   "d": "The numbers being added."
  },
  {
   "t": "Sum",
   "d": "The result of an addition."
  },
  {
   "t": "Regrouping (carrying)",
   "d": "When 10 ones become 1 ten to add to the tens column."
  },
  {
   "t": "Commutative property",
   "d": "Swapping the addends doesn't change the sum."
  },
  {
   "t": "Check",
   "d": "Testing the result by doing the calculation another way."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "What is 34 + 25?",
    "answer": 59,
    "explain": "4 + 5 = 9; 3 + 2 = 5: 59."
   },
   {
    "type": "num",
    "q": "What is 47 + 36?",
    "answer": 83,
    "explain": "7 + 6 = 13: write 3, carry 1. 1 + 4 + 3 = 8: 83."
   },
   {
    "type": "num",
    "q": "What is 58 + 27?",
    "answer": 85,
    "explain": "8 + 7 = 15: write 5, carry 1. 1 + 5 + 2 = 8: 85."
   },
   {
    "type": "mc",
    "q": "What is the result of an addition called?",
    "options": [
     "difference",
     "sum",
     "product"
    ],
    "answer": 1,
    "explain": "The result of an addition is the sum."
   },
   {
    "type": "tf",
    "q": "In column addition you start with the tens.",
    "answer": false,
    "explain": "You always start with the ones."
   },
   {
    "type": "tf",
    "q": "29 + 45 gives the same result as 45 + 29.",
    "answer": true,
    "explain": "Commutative property: 74 both times."
   },
   {
    "type": "mc",
    "q": "In 36 + 48, what do the ones add up to?",
    "options": [
     "14",
     "4",
     "12"
    ],
    "answer": 0,
    "explain": "6 + 8 = 14: write 4 and carry 1."
   },
   {
    "type": "text",
    "q": "What are the numbers being added called?",
    "answer": [
     "addends",
     "the addends"
    ],
    "explain": "They are called addends."
   },
   {
    "type": "num",
    "q": "Marta has 38 red beads and 44 blue ones. How many beads does she have?",
    "answer": 82,
    "explain": "8 + 4 = 12: write 2, carry 1. 1 + 3 + 4 = 8: 82."
   },
   {
    "type": "num",
    "q": "One book has 56 pages, another 39. How many pages altogether?",
    "answer": 95,
    "explain": "6 + 9 = 15: write 5, carry 1. 1 + 5 + 3 = 9: 95."
   },
   {
    "type": "order",
    "q": "Put the steps of column addition with regrouping in order.",
    "items": [
     "Line up ones under ones and tens under tens",
     "Add the ones",
     "Write the ones digit and carry the ten",
     "Add the tens with the carried ten"
    ],
    "explain": "That's the right order: you always start with the ones."
   }
  ],
  "gen": [
   [
    "add100",
    3
   ]
  ]
 }
});
