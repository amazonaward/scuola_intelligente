TOPIC('en', {
 "id": "p2-mat-tabelline",
 "title": "Times tables",
 "intro": "<b>Times tables</b> are a superpower 🦸: they help us count lots of identical things quickly. Let's discover that <b>multiplying</b> means doing a <b>repeated addition</b>!",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Multiplying = adding the same number many times",
   "html": "<p>You have <b>3 plates</b> and on each plate there are <b>4 biscuits</b> 🍪.</p><p>You can count like this: 4 + 4 + 4 = 12.</p><p>Or you can say: <b>3 times 4</b>, which is written <b>3 × 4 = 12</b>.</p><p>The sign <b>×</b> is read «times». The numbers we multiply are called <b>factors</b>, the result is called the <b>product</b>.</p>"
  },
  {
   "type": "svg",
   "title": "3 × 4 with arrays",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#fefce8\"/><text x=\"300\" y=\"40\" font-size=\"28\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#333\">3 rows × 4 columns = 12</text><g fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"2\"><circle cx=\"110\" cy=\"100\" r=\"24\"/><circle cx=\"180\" cy=\"100\" r=\"24\"/><circle cx=\"250\" cy=\"100\" r=\"24\"/><circle cx=\"320\" cy=\"100\" r=\"24\"/><circle cx=\"110\" cy=\"170\" r=\"24\"/><circle cx=\"180\" cy=\"170\" r=\"24\"/><circle cx=\"250\" cy=\"170\" r=\"24\"/><circle cx=\"320\" cy=\"170\" r=\"24\"/><circle cx=\"110\" cy=\"240\" r=\"24\"/><circle cx=\"180\" cy=\"240\" r=\"24\"/><circle cx=\"250\" cy=\"240\" r=\"24\"/><circle cx=\"320\" cy=\"240\" r=\"24\"/></g><g fill=\"#fde68a\"><circle cx=\"102\" cy=\"94\" r=\"4\"/><circle cx=\"172\" cy=\"94\" r=\"4\"/><circle cx=\"242\" cy=\"94\" r=\"4\"/><circle cx=\"312\" cy=\"94\" r=\"4\"/><circle cx=\"102\" cy=\"164\" r=\"4\"/><circle cx=\"172\" cy=\"164\" r=\"4\"/><circle cx=\"242\" cy=\"164\" r=\"4\"/><circle cx=\"312\" cy=\"164\" r=\"4\"/><circle cx=\"102\" cy=\"234\" r=\"4\"/><circle cx=\"172\" cy=\"234\" r=\"4\"/><circle cx=\"242\" cy=\"234\" r=\"4\"/><circle cx=\"312\" cy=\"234\" r=\"4\"/></g><g font-size=\"22\" fill=\"#2563eb\" font-weight=\"bold\"><text x=\"370\" y=\"108\">4</text><text x=\"370\" y=\"178\">+ 4</text><text x=\"370\" y=\"248\">+ 4</text></g><text x=\"470\" y=\"178\" font-size=\"34\" font-weight=\"bold\" fill=\"#dc2626\">= 12</text></svg>",
   "caption": "An array: rows and columns of biscuits. 3 rows of 4 make 12."
  },
  {
   "type": "example",
   "title": "Example: dogs' paws 🐕",
   "html": "<p>In the park there are <b>5 dogs</b>. Each dog has <b>4 paws</b>.</p><p>How many paws altogether? 4 + 4 + 4 + 4 + 4 = 20, that is <b>5 × 4 = 20</b> paws! 🐾</p>"
  },
  {
   "type": "text",
   "title": "Tricks to remember the times tables",
   "html": "<ul><li><b>× 1</b>: the number stays the same. 7 × 1 = 7.</li><li><b>× 0</b>: it always makes 0! 8 × 0 = 0 (0 plates = 0 biscuits).</li><li><b>× 2</b>: it's the <b>double</b>. 6 × 2 = 6 + 6 = 12.</li><li><b>× 5</b>: the results always end in <b>0</b> or <b>5</b>: 5, 10, 15, 20…</li><li><b>× 10</b>: add a <b>0</b> at the end. 3 × 10 = 30.</li><li><b>× 9</b>: the digits of the result add up to 9! 9 × 3 = 27 → 2 + 7 = 9.</li></ul>"
  },
  {
   "type": "remember",
   "title": "The commutative property",
   "html": "<p>If you swap the factors, the result <b>does not change</b>: <b>3 × 4 = 4 × 3 = 12</b>.</p><p>So if you know 3 × 8, you also know 8 × 3! You only have to learn half of the times tables. 😄</p>"
  },
  {
   "type": "widget",
   "title": "The multiplication table",
   "widget": "timesTable",
   "options": {
    "size": 10
   },
   "caption": "Tap a cell: the row and the column meet at the result. Look: the table is the same on both sides of the diagonal!"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: repeated additions",
   "questions": [
    {
     "type": "mc",
     "q": "2 + 2 + 2 + 2 is the same as…",
     "options": [
      "2 × 4",
      "2 × 2",
      "4 + 2"
     ],
     "answer": 0,
     "explain": "2 is repeated 4 times: 2 × 4 = 8."
    },
    {
     "type": "num",
     "q": "What is 5 × 3?",
     "answer": 15,
     "explain": "5 + 5 + 5 = 15."
    },
    {
     "type": "tf",
     "q": "6 × 0 = 6",
     "answer": false,
     "explain": "Any number times 0 is 0."
    }
   ]
  },
  {
   "type": "widget",
   "title": "Jumps on the number line: the 3 times table",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 30,
    "step": 3,
    "marks": [
     3,
     6,
     9,
     12,
     15,
     18,
     21,
     24,
     27,
     30
    ]
   },
   "caption": "Make jumps of 3: 3, 6, 9, 12… these are the results of the 3 times table!"
  },
  {
   "type": "example",
   "title": "Example: shopping at the market 🥚",
   "html": "<p>Grandma buys <b>2 boxes of eggs</b>. In each box there are <b>6 eggs</b>.</p><p>How many eggs? <b>2 × 6 = 12</b> eggs. A dozen! 🥚</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? 🏛️",
   "html": "<p>The table of times tables is called the <b>Pythagorean table</b> in Italy, in honour of <b>Pythagoras</b>, a Greek mathematician who lived more than 2,500 years ago.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? ✋",
   "html": "<p>There's a finger trick for the 9 times table! Open your hands. To do 9 × 4, fold down the <b>4th finger</b> from the left: <b>3 fingers</b> remain on the left and <b>6 fingers</b> on the right. The result is <b>36</b>!</p>"
  },
  {
   "type": "3d",
   "title": "Times tables in 3D 🧊",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 3,
    "b": 4
   },
   "caption": "A multiplication is a rectangle of cubes: 3 rows of 4 cubes = 12 cubes. Change the numbers with the sliders and turn the rectangle: 3 × 4 and 4 × 3 have the same cubes!"
  },
  {
   "type": "alternatives",
   "title": "Don't like the school method? Here are other ways! 🌍",
   "intro": "<p>All over the world children multiply in different ways. There isn't just one right way: choose the one you understand best!</p>",
   "tabs": [
    {
     "label": "🧊 3D cubes",
     "html": "<p>Put the cubes in <b>rows</b>: 3 rows of 5 cubes. How many altogether? Count the rows and the cubes in each row: <b>3 × 5 = 15</b>.</p><p>Move the sliders and build the times tables yourself!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 5
     }
    },
    {
     "label": "🔄 Turn the rectangle",
     "html": "<p>Draw 3 rows of 5 squares. Now <b>turn the paper</b>: they become 5 rows of 3 squares! There are always <b>15</b> squares.</p><p>That's why <b>3 × 5 = 5 × 3</b>. It's called the <b>commutative property</b>. So you only need to learn half of the multiplication table! 😉</p>",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"240\" fill=\"#f0f9ff\"/><g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\"><rect x=\"40\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"40\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"70\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"100\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"130\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"160\" y=\"110\" width=\"30\" height=\"30\"/></g><text x=\"115\" y=\"185\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">3 × 5 = 15</text><text x=\"300\" y=\"110\" font-size=\"44\" text-anchor=\"middle\">🔄</text><g fill=\"#f472b6\" stroke=\"#831843\" stroke-width=\"2\"><rect x=\"420\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"20\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"50\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"80\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"110\" width=\"30\" height=\"30\"/><rect x=\"420\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"450\" y=\"140\" width=\"30\" height=\"30\"/><rect x=\"480\" y=\"140\" width=\"30\" height=\"30\"/></g><text x=\"465\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#831843\">5 × 3 = 15</text></svg>"
    },
    {
     "label": "🇯🇵 Japanese lines",
     "html": "<p>In <b>Japan</b> and <b>China</b> many children multiply by drawing <b>lines</b>! For 12 × 13:</p><ol><li>draw 1 line and then 2 lines (the 12) slanting one way;</li><li>draw 1 line and then 3 lines (the 13) slanting the other way;</li><li>count the <b>crossings</b> in each zone: hundreds on the left, tens in the middle, units on the right.</li></ol><p>Result: 1 | 5 | 6 → <b>156</b>. Watch the animation!</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 12,
      "b": 13
     }
    },
    {
     "label": "🇷🇺 The Russian peasant",
     "html": "<p>It is said that <b>Russian peasants</b> multiplied knowing only two things: <b>halving</b> and <b>doubling</b>!</p><ol><li>Write the two numbers in two columns.</li><li>On the left divide by 2 (no remainder), on the right double.</li><li>Cross out the rows where the left number is <b>even</b>.</li><li>Add the numbers left on the right.</li></ol><p>Try: 8 × 6 = 48.</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 8,
      "b": 6
     }
    },
    {
     "label": "🏺 The ancient Egyptians",
     "html": "<p>More than 3,500 years ago the <b>Egyptians</b> multiplied using only <b>doubling</b>! For 7 × 6:</p><ul><li>1 × 6 = 6</li><li>2 × 6 = 12</li><li>4 × 6 = 24</li></ul><p>Then they pick the rows that together make 7: 1 + 2 + 4 = 7. They add 6 + 12 + 24 = <b>42</b>. Clever, isn't it?</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 7,
      "b": 6
     }
    },
    {
     "label": "🔲 Lattice method",
     "html": "<p><b>Lattice multiplication</b> (in Italian «gelosia») uses a grid with diagonals that looks like window shutters. It comes from the <b>Arab</b> world and was used in <b>Venice</b> and all over Italy in the Middle Ages.</p><p>In each cell write the result of a times table (tens above the diagonal, units below), then add along the diagonals.</p>",
     "widget": "lattice",
     "options": {
      "a": 23,
      "b": 4
     }
    },
    {
     "label": "✋ The 9 trick",
     "html": "<p>For the 9 times table, your hands are enough!</p><ol><li>Open your hands in front of you: 10 fingers.</li><li>To do 9 × 3 fold down the <b>third finger</b> from the left.</li><li>The fingers up to the <b>left</b> of the folded finger are the <b>tens</b>: 2.</li><li>The fingers up to the <b>right</b> are the <b>units</b>: 7.</li></ol><p>9 × 3 = <b>27</b>! It works from 9 × 1 to 9 × 10.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"220\" fill=\"#fefce8\"/><g fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"2\"><rect x=\"40\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"90\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"140\" y=\"110\" width=\"34\" height=\"40\" rx=\"17\" fill=\"#fca5a5\"/><rect x=\"190\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"240\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"320\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"370\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"420\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"470\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/><rect x=\"520\" y=\"40\" width=\"34\" height=\"110\" rx=\"17\"/></g><text x=\"157\" y=\"30\" font-size=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" fill=\"#b91c1c\" font-weight=\"bold\">3rd</text><text x=\"82\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1e3a8a\">2 tens</text><text x=\"400\" y=\"185\" font-size=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#166534\">7 units</text><text x=\"300\" y=\"212\" font-size=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#111827\">9 × 3 = 27</text></svg>"
    },
    {
     "label": "🐸 Frog jumps",
     "html": "<p>A frog always jumps the same distance. If it makes jumps of <b>4</b>, where does it land after 5 jumps? 4, 8, 12, 16, <b>20</b>! Times tables are <b>equal jumps</b> on the number line.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 40,
      "step": 4,
      "marks": [
       20,
       40
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "The map of multiplication 🗺️",
   "nodes": [
    {
     "id": "addizione",
     "label": "Addition",
     "x": 50,
     "y": 6,
     "color": "#22c55e",
     "html": "<p>You already know how to add: 3 + 3 + 3 + 3.</p>",
     "why": "<p>Addition is the first operation: putting things together. All the other operations grow from it.</p>"
    },
    {
     "id": "ripetuta",
     "label": "Repeated addition",
     "x": 50,
     "y": 26,
     "color": "#16a34a",
     "html": "<p>When you add <b>the same number</b> many times, you can use a shortcut: multiplication. 3 + 3 + 3 + 3 = 4 × 3.</p>",
     "why": "<p>Writing 3 + 3 + 3 + … a hundred times would take forever! Multiplication was invented to <b>save effort</b>.</p>"
    },
    {
     "id": "moltiplicazione",
     "label": "Multiplication ×",
     "x": 50,
     "y": 46,
     "color": "#3b82f6",
     "html": "<p>4 × 3 = 12. The numbers you multiply are called <b>factors</b>, the result is called the <b>product</b>.</p>",
     "why": "<p>The × sign was first used by an English mathematician, <b>William Oughtred</b>, almost 400 years ago. Before that it was written in words!</p>"
    },
    {
     "id": "rettangolo",
     "label": "Rectangle of squares",
     "x": 15,
     "y": 46,
     "color": "#f97316",
     "html": "<p>Every multiplication can be drawn as a <b>rectangle</b>: 4 rows of 3 squares.</p>",
     "why": "<p>The rectangle lets us <b>see</b> multiplication: the rows are equal, just like the equal addends of a repeated addition.</p>"
    },
    {
     "id": "tabelline",
     "label": "Times tables",
     "x": 85,
     "y": 46,
     "color": "#a855f7",
     "html": "<p><b>Times tables</b> are the multiplications from 1 to 10 to know by heart. Together they form the <b>multiplication table</b>.</p>",
     "why": "<p>In Italy it's called «Pythagorean» in honour of the Greek mathematician <b>Pythagoras</b>, but times tables are even older: in <b>China</b> a multiplication table written on bamboo strips more than 2,300 years ago has been found!</p>"
    },
    {
     "id": "commutativa",
     "label": "You can turn it: 3×5 = 5×3",
     "x": 15,
     "y": 75,
     "color": "#ec4899",
     "html": "<p><b>Commutative property</b>: if you swap the factors, the product doesn't change.</p>",
     "why": "<p>Why? Take the 3 × 5 rectangle and turn it: it becomes 5 × 3, but the squares are still the same! Nobody added or removed any.</p>"
    },
    {
     "id": "zero",
     "label": "× 0 = 0",
     "x": 40,
     "y": 75,
     "color": "#64748b",
     "html": "<p>Any number times <b>0</b> makes <b>0</b>.</p>",
     "why": "<p>5 × 0 means «5 times nothing»: if you have 5 empty boxes, how many sweets do you have? Zero!</p>"
    },
    {
     "id": "uno",
     "label": "× 1 stays the same",
     "x": 62,
     "y": 75,
     "color": "#0ea5e9",
     "html": "<p>Any number times <b>1</b> stays the same: 7 × 1 = 7.</p>",
     "why": "<p>7 × 1 means «7 just once»: nothing changes!</p>"
    },
    {
     "id": "dieci",
     "label": "× 10: add a 0",
     "x": 85,
     "y": 75,
     "color": "#eab308",
     "html": "<p>4 × 10 = 40: you add a <b>zero</b>.</p>",
     "why": "<p>Multiplying by 10 turns every unit into a ten: the digits move one place to the left and the zero keeps the empty units place.</p>"
    },
    {
     "id": "divisione",
     "label": "Division",
     "x": 50,
     "y": 95,
     "color": "#ef4444",
     "html": "<p><b>Division</b> is the opposite operation: if 4 × 3 = 12, then 12 ÷ 3 = 4.</p>",
     "why": "<p>Knowing your times tables well will help you a lot with division: it's the same table read backwards!</p>"
    }
   ],
   "edges": [
    [
     "addizione",
     "ripetuta",
     "with equal numbers"
    ],
    [
     "ripetuta",
     "moltiplicazione",
     "shortcut"
    ],
    [
     "moltiplicazione",
     "rettangolo",
     "is drawn as"
    ],
    [
     "moltiplicazione",
     "tabelline",
     "from 1 to 10"
    ],
    [
     "rettangolo",
     "commutativa",
     "by turning it"
    ],
    [
     "moltiplicazione",
     "zero",
     ""
    ],
    [
     "moltiplicazione",
     "uno",
     ""
    ],
    [
     "tabelline",
     "dieci",
     ""
    ],
    [
     "moltiplicazione",
     "divisione",
     "the opposite"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: quick times tables",
   "questions": [
    {
     "type": "num",
     "q": "7 × 2 = ?",
     "answer": 14,
     "explain": "Double 7 is 14."
    },
    {
     "type": "num",
     "q": "4 × 10 = ?",
     "answer": 40,
     "explain": "Times 10: add a zero: 40."
    },
    {
     "type": "mc",
     "q": "Which result is in the 5 times table?",
     "options": [
      "23",
      "35",
      "41"
     ],
     "answer": 1,
     "explain": "35 = 5 × 7; the results of the 5 times table end in 0 or 5."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Multiplication",
   "d": "A repeated addition of the same number. It uses the sign ×."
  },
  {
   "t": "Factors",
   "d": "The numbers being multiplied."
  },
  {
   "t": "Product",
   "d": "The result of a multiplication."
  },
  {
   "t": "Array",
   "d": "Objects arranged in equal rows and columns."
  },
  {
   "t": "Double",
   "d": "A number taken 2 times."
  },
  {
   "t": "Multiplication table",
   "d": "The table with all the results of the times tables."
  },
  {
   "t": "Commutative property",
   "d": "Swapping the factors doesn't change the product."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "3 × 3 = ?",
    "answer": 9,
    "explain": "3 + 3 + 3 = 9."
   },
   {
    "type": "num",
    "q": "6 × 5 = ?",
    "answer": 30,
    "explain": "5 + 5 + 5 + 5 + 5 + 5 = 30."
   },
   {
    "type": "num",
    "q": "8 × 2 = ?",
    "answer": 16,
    "explain": "Double 8 is 16."
   },
   {
    "type": "mc",
    "q": "Which addition is the same as 4 × 3?",
    "options": [
     "4 + 3",
     "3 + 3 + 3 + 3",
     "4 + 4 + 4 + 4"
    ],
    "answer": 1,
    "explain": "4 × 3 means 3 taken 4 times."
   },
   {
    "type": "tf",
    "q": "5 × 2 is the same as 2 × 5.",
    "answer": true,
    "explain": "Commutative property: they both make 10."
   },
   {
    "type": "num",
    "q": "9 × 1 = ?",
    "answer": 9,
    "explain": "Times 1, the number stays the same."
   },
   {
    "type": "num",
    "q": "A spider has 8 legs. How many legs do 3 spiders have? 🕷️",
    "answer": 24,
    "explain": "3 × 8 = 24."
   },
   {
    "type": "mc",
    "q": "What is the result of a multiplication called?",
    "options": [
     "Sum",
     "Product",
     "Difference"
    ],
    "answer": 1,
    "explain": "The result of a multiplication is the product."
   },
   {
    "type": "order",
    "q": "Put the results of the 4 times table in order",
    "items": [
     "4",
     "8",
     "12",
     "16",
     "20"
    ],
    "explain": "4, 8, 12, 16, 20: +4 each time."
   },
   {
    "type": "num",
    "q": "0 × 7 = ?",
    "answer": 0,
    "explain": "Multiplying by 0 always gives 0."
   }
  ],
  "gen": [
   [
    "times",
    4
   ]
  ]
 }
});
