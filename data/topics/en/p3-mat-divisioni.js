TOPIC('en', {
 "id": "p3-mat-divisioni",
 "title": "Division",
 "intro": "Dividing means <b>making equal parts</b> 🍬 or <b>finding out how many times</b> one number fits into another. Let's learn the names of the terms, long division in columns, the <b>remainder</b> and the <b>check</b> to make sure the result is right.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Two ways of dividing",
   "html": "<p>Division answers <b>two different questions</b>:</p>\n<ul>\n<li>🍬 <b>Sharing</b> (making equal parts): <i>\"I have 12 sweets and 3 friends. How many sweets for each?\"</i> → 12 ÷ 3 = <b>4</b> sweets each.</li>\n<li>📦 <b>Grouping</b> (how many times it fits): <i>\"I have 12 eggs and boxes of 3. How many boxes do I fill?\"</i> → 12 ÷ 3 = <b>4</b> boxes.</li>\n</ul>\n<p>The calculation is the same, but the question changes! In Italy the division sign is <b>:</b> (a colon). Here we use <b>÷</b> or <b>/</b>.</p>"
  },
  {
   "type": "text",
   "title": "The names of the terms",
   "html": "<p>In <b>24 ÷ 6 = 4</b>:</p>\n<ul>\n<li><b>24</b> is the <b>dividend</b>: the number that is divided;</li>\n<li><b>6</b> is the <b>divisor</b>: the number you divide by;</li>\n<li><b>4</b> is the <b>quotient</b>: the result.</li>\n</ul>\n<p>Division is the <b>inverse operation of multiplication</b>: 24 ÷ 6 = 4 because <b>4 × 6 = 24</b>. That is why knowing your times tables well helps a lot! 🧠</p>"
  },
  {
   "type": "svg",
   "title": "12 sweets for 3 children",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fdf4ff\"/>\n<text x=\"300\" y=\"34\" font-size=\"22\" font-weight=\"bold\" fill=\"#86198f\" text-anchor=\"middle\">12 : 3 = 4</text>\n<g>\n<rect x=\"30\" y=\"60\" width=\"160\" height=\"150\" rx=\"16\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/>\n<rect x=\"220\" y=\"60\" width=\"160\" height=\"150\" rx=\"16\" fill=\"#bbf7d0\" stroke=\"#15803d\" stroke-width=\"3\"/>\n<rect x=\"410\" y=\"60\" width=\"160\" height=\"150\" rx=\"16\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n</g>\n<g fill=\"#ef4444\" stroke=\"#7f1d1d\" stroke-width=\"2\">\n<circle cx=\"80\" cy=\"110\" r=\"18\"/><circle cx=\"140\" cy=\"110\" r=\"18\"/><circle cx=\"80\" cy=\"165\" r=\"18\"/><circle cx=\"140\" cy=\"165\" r=\"18\"/>\n<circle cx=\"270\" cy=\"110\" r=\"18\"/><circle cx=\"330\" cy=\"110\" r=\"18\"/><circle cx=\"270\" cy=\"165\" r=\"18\"/><circle cx=\"330\" cy=\"165\" r=\"18\"/>\n<circle cx=\"460\" cy=\"110\" r=\"18\"/><circle cx=\"520\" cy=\"110\" r=\"18\"/><circle cx=\"460\" cy=\"165\" r=\"18\"/><circle cx=\"520\" cy=\"165\" r=\"18\"/>\n</g>\n<text x=\"110\" y=\"245\" font-size=\"20\" fill=\"#92400e\" text-anchor=\"middle\" font-weight=\"bold\">Anna: 4</text>\n<text x=\"300\" y=\"245\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">Luca: 4</text>\n<text x=\"490\" y=\"245\" font-size=\"20\" fill=\"#1e40af\" text-anchor=\"middle\" font-weight=\"bold\">Sara: 4</text>\n<text x=\"300\" y=\"285\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">dividend 12 · divisor 3 · quotient 4</text>\n</svg>",
   "caption": "Sharing: the 12 sweets are divided into 3 equal groups of 4."
  },
  {
   "type": "text",
   "title": "When something is left over: the remainder",
   "html": "<p>Division is not always <b>exact</b>. If I have <b>14 sweets</b> for <b>3 friends</b>:</p>\n<ul>\n<li>I give 4 to each (4 × 3 = 12);</li>\n<li><b>2 are left over</b>: not enough to give another one to everybody.</li>\n</ul>\n<p>We write: <b>14 ÷ 3 = 4 remainder 2</b> (you can also write <b>4 r 2</b>).</p>\n<p>⚠️ The <b>remainder</b> must always be <b>smaller than the divisor</b>. If it is equal or bigger, it means you could still have given everybody another sweet!</p>"
  },
  {
   "type": "widget",
   "title": "Try making equal parts yourself",
   "widget": "counter",
   "options": {
    "emoji": "🍬",
    "max": 30
   },
   "caption": "Put in 14 sweets, then try dividing them into groups of 3: how many groups can you make? How many are left over?"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: the terms and the remainder",
   "questions": [
    {
     "type": "mc",
     "q": "In 35 ÷ 5 = 7, the number 35 is called the…",
     "options": [
      "divisor",
      "dividend",
      "quotient"
     ],
     "answer": 1,
     "explain": "The dividend is the number that is divided: 35."
    },
    {
     "type": "num",
     "q": "17 ÷ 5 = 3 with a remainder of…",
     "answer": 2,
     "explain": "5 × 3 = 15; 17 − 15 = 2."
    },
    {
     "type": "tf",
     "q": "In a division by 4 the remainder can be 5.",
     "answer": false,
     "explain": "The remainder must be smaller than the divisor: with divisor 4 the remainder can only be 0, 1, 2 or 3."
    }
   ]
  },
  {
   "type": "text",
   "title": "Long division in columns, step by step",
   "html": "<p>Let's calculate <b>85 ÷ 3</b>. We start <b>from the left</b>, that is, from the biggest digits!</p>\n<ol>\n<li>I look at the <b>tens</b>: 8 ÷ 3 = <b>2</b> (because 2 × 3 = 6). I write 2 in the quotient.</li>\n<li>I multiply and subtract: 8 − 6 = <b>2</b> tens are left.</li>\n<li>I <b>bring down</b> the ones: next to the 2 I write the 5 → I get <b>25</b>.</li>\n<li>I divide: 25 ÷ 3 = <b>8</b> (because 8 × 3 = 24). I write 8 in the quotient.</li>\n<li>I subtract: 25 − 24 = <b>1</b>. There are no more digits to bring down: 1 is the <b>remainder</b>.</li>\n</ol>\n<p>Result: <b>85 ÷ 3 = 28 remainder 1</b>.</p>"
  },
  {
   "type": "svg",
   "title": "85 ÷ 3 in columns (Italian method)",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0fdf4\"/>\n<text x=\"90\" y=\"70\" font-size=\"42\" font-family=\"monospace\" fill=\"#1d4ed8\" font-weight=\"bold\">8</text>\n<text x=\"125\" y=\"70\" font-size=\"42\" font-family=\"monospace\" fill=\"#1d4ed8\" font-weight=\"bold\">5</text>\n<line x1=\"170\" y1=\"30\" x2=\"170\" y2=\"260\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"190\" y=\"70\" font-size=\"42\" font-family=\"monospace\" fill=\"#b45309\" font-weight=\"bold\">3</text>\n<line x1=\"170\" y1=\"85\" x2=\"290\" y2=\"85\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"190\" y=\"128\" font-size=\"42\" font-family=\"monospace\" fill=\"#15803d\" font-weight=\"bold\">28</text>\n<text x=\"70\" y=\"120\" font-size=\"34\" font-family=\"monospace\" fill=\"#6b7280\">-6</text>\n<line x1=\"70\" y1=\"132\" x2=\"115\" y2=\"132\" stroke=\"#6b7280\" stroke-width=\"3\"/>\n<text x=\"90\" y=\"170\" font-size=\"38\" font-family=\"monospace\" fill=\"#1f2937\">2</text>\n<text x=\"125\" y=\"170\" font-size=\"38\" font-family=\"monospace\" fill=\"#dc2626\" font-weight=\"bold\">5</text>\n<path d=\"M140 80 Q155 115 140 140\" stroke=\"#dc2626\" stroke-width=\"3\" fill=\"none\"/>\n<text x=\"70\" y=\"215\" font-size=\"34\" font-family=\"monospace\" fill=\"#6b7280\">-24</text>\n<line x1=\"70\" y1=\"227\" x2=\"160\" y2=\"227\" stroke=\"#6b7280\" stroke-width=\"3\"/>\n<text x=\"125\" y=\"265\" font-size=\"38\" font-family=\"monospace\" fill=\"#7c3aed\" font-weight=\"bold\">1</text>\n<text x=\"320\" y=\"70\" font-size=\"18\" fill=\"#1d4ed8\">dividend</text>\n<text x=\"320\" y=\"100\" font-size=\"18\" fill=\"#b45309\">divisor (top right)</text>\n<text x=\"320\" y=\"130\" font-size=\"18\" fill=\"#15803d\">quotient (under the divisor)</text>\n<text x=\"320\" y=\"170\" font-size=\"18\" fill=\"#dc2626\">bring down the 5 → 25</text>\n<text x=\"320\" y=\"265\" font-size=\"18\" fill=\"#7c3aed\">remainder: 1 (less than 3 ✔)</text>\n</svg>",
   "caption": "In Italy the divisor is written on the right, separated by a line; the quotient goes under the divisor."
  },
  {
   "type": "text",
   "title": "Checking a division",
   "html": "<p>To check whether a division is right you use <b>multiplication</b>:</p>\n<p style=\"font-size:1.2em\"><b>quotient × divisor + remainder = dividend</b></p>\n<p>Check of 85 ÷ 3 = 28 r 1 → 28 × 3 = 84; 84 + 1 = <b>85</b> ✔ It is right!</p>\n<p>If the remainder is 0 you just do quotient × divisor: 24 ÷ 6 = 4 → 4 × 6 = 24 ✔</p>"
  },
  {
   "type": "remember",
   "title": "Special cases",
   "html": "<ul>\n<li>A number divided by <b>1</b> stays the same: 9 ÷ 1 = 9.</li>\n<li>A number divided by <b>itself</b> makes 1: 7 ÷ 7 = 1.</li>\n<li><b>0</b> divided by a number makes 0: 0 ÷ 5 = 0 (no sweets to share!).</li>\n<li>🚫 <b>You cannot divide by 0</b>: sharing 5 sweets among 0 children makes no sense!</li>\n<li>Dividing by <b>10</b>: if the number ends in 0, you remove the zero: 70 ÷ 10 = 7; for <b>100</b> you remove two zeros: 300 ÷ 100 = 3.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Worked example: the coach trip",
   "html": "<p><b>58 children</b> are going on the trip. Each minibus has <b>9 seats</b>. How many minibuses are needed?</p>\n<ul>\n<li>58 ÷ 9 = <b>6 remainder 4</b> (6 × 9 = 54; 58 − 54 = 4).</li>\n<li>6 minibuses are full, but <b>4 children</b> would be left at home! 😮</li>\n<li>So <b>7 minibuses</b> are needed.</li>\n</ul>\n<p>👉 In problems you must always think about <b>what the remainder means</b>!</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the stickers in the album",
   "html": "<p>Giulia has <b>96 stickers</b> and wants to put them in an album with <b>4 stickers per page</b>. How many pages does she fill?</p>\n<ol>\n<li>9 tens ÷ 4 = 2 (2 × 4 = 8), 1 ten left.</li>\n<li>I bring down the 6: 16 ÷ 4 = 4.</li>\n<li>Result: <b>96 ÷ 4 = 24 pages</b>, remainder 0.</li>\n</ol>\n<p>Check: 24 × 4 = 96 ✔</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The sign <b>÷</b> is called an <b>obelus</b> and was used for division by the Swiss mathematician <b>Johann Rahn</b> in 1659. The colon <b>:</b> was made famous by the German mathematician <b>Gottfried Leibniz</b> around 1684. That is why in Italy we use <b>:</b> while in England or the USA people often use <b>÷</b>!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>Why does an hour have <b>60 minutes</b>? Because the ancient <b>Babylonians</b> loved the number 60: it can be divided exactly by 2, 3, 4, 5, 6, 10, 12, 15, 20 and 30! It is very easy to divide an hour into half hours, quarters of an hour, ten minutes… 🕐</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand division",
   "intro": "Not convinced by long division? Here are other roads to the same result: choose the one you like best!",
   "tabs": [
    {
     "label": "🧊 3D cubes",
     "html": "<p>Here are <b>24 cubes</b> arranged in a rectangle of <b>4 rows of 6</b>. Look:</p>\n<ul>\n<li>24 ÷ 4 = <b>6</b> (each row has 6 cubes);</li>\n<li>24 ÷ 6 = <b>4</b> (there are 4 rows).</li>\n</ul>\n<p>Division is multiplication \"in reverse\": you know the total and one of the two sides, and you look for the other. Change the sliders and invent new divisions!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 4,
      "b": 6
     }
    },
    {
     "label": "🐸 Jumping backwards",
     "html": "<p>A frog starts at <b>20</b> and jumps backwards by <b>4</b> at a time: 20 → 16 → 12 → 8 → 4 → 0.</p>\n<p>It made <b>5 jumps</b>: so <b>20 ÷ 4 = 5</b>. This is <b>grouping</b>: how many times does 4 fit into 20? Try it on the number line!</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 20,
      "step": 1,
      "marks": [
       0,
       4,
       8,
       12,
       16,
       20
      ]
     }
    },
    {
     "label": "🇬🇧 The chunking method",
     "html": "<p>In English schools many children divide by <b>taking away big chunks</b> that they know well. Example: <b>85 ÷ 3</b></p>\n<ul>\n<li>I take away 10 times 3 = 30 → 55 is left;</li>\n<li>I take away another 10 times 3 = 30 → 25 is left;</li>\n<li>I take away 8 times 3 = 24 → <b>1</b> is left.</li>\n</ul>\n<p>How many times did I take away the 3? 10 + 10 + 8 = <b>28</b>, remainder <b>1</b>. Same result as the column method! 🎉</p>"
    },
    {
     "label": "🇺🇸 The \"little house\" method",
     "html": "<p>In the United States and England division is written in another way: the divisor is <b>on the left</b>, the dividend is inside a sort of <b>little house</b> and the quotient is <b>above the roof</b>. The steps, though, are identical to ours: divide, multiply, subtract, bring down!</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#eff6ff\"/>\n<text x=\"150\" y=\"60\" font-size=\"40\" font-family=\"monospace\" fill=\"#15803d\" font-weight=\"bold\">28 r1</text>\n<path d=\"M120 75 Q135 110 120 150 M120 75 L320 75\" stroke=\"#1f2937\" stroke-width=\"4\" fill=\"none\"/>\n<text x=\"70\" y=\"125\" font-size=\"40\" font-family=\"monospace\" fill=\"#b45309\" font-weight=\"bold\">3</text>\n<text x=\"150\" y=\"125\" font-size=\"40\" font-family=\"monospace\" fill=\"#1d4ed8\" font-weight=\"bold\">85</text>\n<text x=\"360\" y=\"60\" font-size=\"18\" fill=\"#15803d\">quotient on the roof</text>\n<text x=\"360\" y=\"110\" font-size=\"18\" fill=\"#1d4ed8\">dividend in the little house</text>\n<text x=\"360\" y=\"150\" font-size=\"18\" fill=\"#b45309\">divisor outside, on the left</text>\n<text x=\"300\" y=\"230\" font-size=\"20\" fill=\"#1f2937\" text-anchor=\"middle\">Same steps: divide · multiply · subtract · bring down</text>\n</svg>"
    },
    {
     "label": "🍕 The pizzeria analogy",
     "html": "<p>Think of a pizza chef with <b>26 slices</b> to put on plates, <b>4 slices per plate</b>.</p>\n<p>He fills one plate, then another, then another… in the end he has <b>6 full plates</b> and <b>2 slices</b> are left on the counter: too few for a whole plate. The 2 slices are the <b>remainder</b>!</p>\n<p>26 ÷ 4 = 6 r 2 → check: 6 × 4 + 2 = 26 ✔</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of division: tap a node to find out why",
   "nodes": [
    {
     "id": "div",
     "label": "Division",
     "x": 50,
     "y": 8,
     "color": "#7c3aed",
     "html": "An operation used to make equal parts or to find out how many times one number fits into another.",
     "why": "The word comes from the Latin <i>dividere</i>, \"to separate\". People have always divided things: harvests, fields, bread. The ancient Egyptians divided by doubling, as the Rhind papyrus (about 1650 BC) tells us."
    },
    {
     "id": "rip",
     "label": "Sharing",
     "x": 18,
     "y": 30,
     "color": "#f59e0b",
     "html": "Dividing into equal parts: how much does each one get?",
     "why": "It is the oldest meaning: giving everybody the same amount, fairly."
    },
    {
     "id": "cont",
     "label": "Grouping",
     "x": 82,
     "y": 30,
     "color": "#0ea5e9",
     "html": "How many times one number fits into another: how many groups can I make?",
     "why": "It is the same as subtracting the same number again and again for as long as you can: 20 − 4 − 4 − 4 − 4 − 4 = 0 → 5 times."
    },
    {
     "id": "termini",
     "label": "Dividend, divisor, quotient",
     "x": 50,
     "y": 45,
     "color": "#16a34a",
     "html": "Dividend ÷ divisor = quotient.",
     "why": "\"Quotient\" comes from the Latin <i>quotiens</i>, which means \"how many times\": exactly the question of grouping!"
    },
    {
     "id": "molt",
     "label": "Inverse of multiplication",
     "x": 18,
     "y": 65,
     "color": "#ef4444",
     "html": "24 ÷ 6 = 4 because 4 × 6 = 24.",
     "why": "Multiplying means putting equal groups together; dividing means separating them again. That is why times tables are useful for dividing."
    },
    {
     "id": "resto",
     "label": "Remainder",
     "x": 82,
     "y": 65,
     "color": "#ec4899",
     "html": "What is left over when the division is not exact. It is always smaller than the divisor.",
     "why": "If the remainder were equal to or bigger than the divisor, you could make one more group: that would mean the quotient is too small."
    },
    {
     "id": "prova",
     "label": "The check",
     "x": 50,
     "y": 82,
     "color": "#14b8a6",
     "html": "quotient × divisor + remainder = dividend.",
     "why": "If you put the groups back together and add what was left over, you must get back everything you had at the start: nothing is created and nothing is lost."
    },
    {
     "id": "zero",
     "label": "Never divide by 0",
     "x": 18,
     "y": 92,
     "color": "#64748b",
     "html": "Dividing by zero is not possible.",
     "why": "No number multiplied by 0 gives 5: so 5 ÷ 0 has no answer. Indian mathematicians such as Brahmagupta (7th century) were already asking what happens when you divide by zero."
    }
   ],
   "edges": [
    [
     "div",
     "rip",
     "can mean"
    ],
    [
     "div",
     "cont",
     "can mean"
    ],
    [
     "div",
     "termini",
     "is written with"
    ],
    [
     "termini",
     "molt",
     "is checked with"
    ],
    [
     "termini",
     "resto",
     "sometimes there is a"
    ],
    [
     "resto",
     "prova",
     "goes into the"
    ],
    [
     "molt",
     "prova",
     "is used for the"
    ],
    [
     "molt",
     "zero",
     "explains why"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: columns and the check",
   "questions": [
    {
     "type": "num",
     "q": "What is 72 ÷ 4?",
     "answer": 18,
     "explain": "7 ÷ 4 = 1 remainder 3; I bring down the 2 → 32 ÷ 4 = 8. Quotient 18."
    },
    {
     "type": "mc",
     "q": "What is the check of 50 ÷ 7 = 7 remainder 1?",
     "options": [
      "7 × 7 + 1 = 50",
      "7 × 7 − 1 = 50",
      "50 × 7 + 1"
     ],
     "answer": 0,
     "explain": "Quotient × divisor + remainder: 49 + 1 = 50 ✔"
    },
    {
     "type": "num",
     "q": "There are 30 children and 4 per table. How many tables are needed so that everybody is seated?",
     "answer": 8,
     "explain": "30 ÷ 4 = 7 remainder 2: 7 full tables and 2 children extra, so an eighth table is needed."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Division",
   "d": "An operation to make equal parts or to find out how many times one number fits into another."
  },
  {
   "t": "Dividend",
   "d": "The number that is divided (the first)."
  },
  {
   "t": "Divisor",
   "d": "The number you divide by (the second)."
  },
  {
   "t": "Quotient",
   "d": "The result of the division."
  },
  {
   "t": "Remainder",
   "d": "What is left over when the division is not exact; it is always smaller than the divisor."
  },
  {
   "t": "Exact division",
   "d": "A division with remainder 0."
  },
  {
   "t": "Sharing",
   "d": "A division used to make equal parts."
  },
  {
   "t": "Grouping",
   "d": "A division used to find out how many times one number fits into another."
  },
  {
   "t": "Check",
   "d": "Checking the result: quotient × divisor + remainder = dividend."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "What is 45 ÷ 5?",
    "answer": 9,
    "explain": "9 × 5 = 45."
   },
   {
    "type": "mc",
    "q": "In 63 ÷ 9 = 7, the 9 is…",
    "options": [
     "the dividend",
     "the divisor",
     "the quotient"
    ],
    "answer": 1,
    "explain": "The divisor is the number you divide by."
   },
   {
    "type": "num",
    "q": "29 ÷ 6 = 4 with a remainder of…",
    "answer": 5,
    "explain": "6 × 4 = 24; 29 − 24 = 5 (less than 6 ✔)."
   },
   {
    "type": "tf",
    "q": "You can divide a number by 0.",
    "answer": false,
    "explain": "There is no number that multiplied by 0 gives, for example, 8: dividing by 0 is impossible."
   },
   {
    "type": "num",
    "q": "What is 84 ÷ 3?",
    "answer": 28,
    "explain": "8 ÷ 3 = 2 r 2; I bring down the 4 → 24 ÷ 3 = 8. Quotient 28."
   },
   {
    "type": "mc",
    "q": "\"I have €40 and each book costs €8. How many books can I buy?\" This is a division of…",
    "options": [
     "sharing",
     "grouping",
     "neither of the two"
    ],
    "answer": 1,
    "explain": "I look for how many times 8 fits into 40: grouping. 40 ÷ 8 = 5 books."
   },
   {
    "type": "text",
    "q": "What is the result of a division called?",
    "answer": [
     "quotient",
     "the quotient"
    ],
    "explain": "The result is called the quotient."
   },
   {
    "type": "tf",
    "q": "The remainder must always be smaller than the divisor.",
    "answer": true,
    "explain": "Otherwise you could make another group."
   },
   {
    "type": "num",
    "q": "What is 600 ÷ 100?",
    "answer": 6,
    "explain": "When you divide by 100 you remove two zeros: 6."
   },
   {
    "type": "order",
    "q": "Put the steps of long division in order.",
    "items": [
     "I divide the first digit",
     "I multiply the quotient by the divisor",
     "I subtract",
     "I bring down the next digit"
    ],
    "explain": "Divide, multiply, subtract, bring down… and start again!"
   },
   {
    "type": "num",
    "q": "Grandma has 50 biscuits and puts them in bags of 6. How many biscuits are left over?",
    "answer": 2,
    "explain": "50 ÷ 6 = 8 remainder 2 (8 × 6 = 48)."
   },
   {
    "type": "mc",
    "q": "Which check is right for 38 ÷ 5 = 7 r 3?",
    "options": [
     "7 × 5 + 3 = 38",
     "7 × 3 + 5 = 38",
     "38 × 5 = 7"
    ],
    "answer": 0,
    "explain": "7 × 5 = 35; 35 + 3 = 38 ✔"
   }
  ],
  "gen": [
   [
    "divExact",
    2
   ],
   [
    "divRem",
    2
   ]
  ]
 }
});
