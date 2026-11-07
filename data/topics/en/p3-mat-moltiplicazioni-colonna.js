TOPIC('en', {
 "id": "p3-mat-moltiplicazioni-colonna",
 "title": "Column multiplication",
 "intro": "Do you know your times tables? Then you are ready to multiply big numbers too! ✖️ Let's learn <b>column multiplication</b> with one digit and with two digits, <b>carrying</b>, the <b>check</b>… and find out how people multiply in Japan and in Russia, and how it was done in the time of the Egyptians.",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Let's review: what multiplication is",
   "html": "<p><b>Multiplication</b> is the <b>repeated addition</b> of equal numbers: 4 × 3 = 4 + 4 + 4 = 12.</p>\n<ul>\n<li>The numbers being multiplied are called <b>factors</b> (the first is also called the <b>multiplicand</b>, the second the <b>multiplier</b>).</li>\n<li>The result is called the <b>product</b>.</li>\n</ul>\n<p>Useful properties:</p>\n<ul>\n<li><b>Commutative</b>: if you change the order of the factors, the product does not change: 4 × 3 = 3 × 4.</li>\n<li><b>Distributive</b>: I can “break up” a factor: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92. This is exactly the secret of column multiplication!</li>\n<li>Multiplying by <b>10</b>: you add a <b>zero</b> at the end: 34 × 10 = 340. Every digit moves one place to the left (the ones become tens…).</li>\n</ul>"
  },
  {
   "type": "3d",
   "title": "Multiplication is a rectangle",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 3,
    "b": 4
   },
   "caption": "3 rows of 4 cubes = 12 cubes. Turn the rectangle: it becomes 4 rows of 3, but there are still 12 cubes (commutative property). Use the sliders to change the factors."
  },
  {
   "type": "text",
   "title": "Column multiplication with a one-digit multiplier",
   "html": "<p>Let's calculate <b>247 × 3</b>. We line up the numbers in columns and multiply <b>starting from the ones</b>, from right to left:</p>\n<ol>\n<li><b>Ones</b>: 3 × 7 = 21 → I write <b>1</b> in the ones and carry <b>2</b> tens (the <b>carry</b>) above the tens.</li>\n<li><b>Tens</b>: 3 × 4 = 12, plus the carried 2 = 14 → I write <b>4</b> and carry <b>1</b> above the hundreds.</li>\n<li><b>Hundreds</b>: 3 × 2 = 6, plus the carried 1 = <b>7</b> → I write 7.</li>\n</ol>\n<p>Result: 247 × 3 = <b>741</b>.</p>\n<p><b>Careful:</b> the carry is added <b>after</b> multiplying, not before! (3 × 4 + 2, not 3 × 6.)</p>"
  },
  {
   "type": "svg",
   "title": "247 × 3 step by step",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<g font-size=\"20\" font-weight=\"bold\" fill=\"#8b5cf6\" text-anchor=\"middle\"><text x=\"110\" y=\"30\">H</text></g>\n<g font-size=\"20\" font-weight=\"bold\" fill=\"#3b82f6\" text-anchor=\"middle\"><text x=\"160\" y=\"30\">T</text></g>\n<g font-size=\"20\" font-weight=\"bold\" fill=\"#22c55e\" text-anchor=\"middle\"><text x=\"210\" y=\"30\">O</text></g>\n<text x=\"110\" y=\"62\" font-size=\"22\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">1</text>\n<text x=\"160\" y=\"62\" font-size=\"22\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">2</text>\n<g font-size=\"44\" font-family=\"monospace\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"110\" y=\"110\">2</text><text x=\"160\" y=\"110\">4</text><text x=\"210\" y=\"110\">7</text>\n<text x=\"60\" y=\"165\">×</text><text x=\"210\" y=\"165\">3</text>\n</g>\n<line x1=\"40\" y1=\"182\" x2=\"240\" y2=\"182\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<g font-size=\"44\" font-family=\"monospace\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b45309\">\n<text x=\"110\" y=\"235\">7</text><text x=\"160\" y=\"235\">4</text><text x=\"210\" y=\"235\">1</text>\n</g>\n<g font-size=\"20\" fill=\"#1f2937\">\n<text x=\"290\" y=\"80\">① 3 × 7 = 21 → write 1, carry 2</text>\n<text x=\"290\" y=\"135\">② 3 × 4 = 12, + 2 = 14</text>\n<text x=\"320\" y=\"160\">→ write 4, carry 1</text>\n<text x=\"290\" y=\"215\">③ 3 × 2 = 6, + 1 = 7</text>\n</g>\n<text x=\"300\" y=\"285\" font-size=\"18\" text-anchor=\"middle\" fill=\"#dc2626\">The small red numbers are the carries.</text>\n</svg>",
   "caption": "You always start from the ones; carries are written small above the next column."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: with one digit",
   "questions": [
    {
     "type": "num",
     "q": "What is 132 × 3?",
     "answer": 396,
     "explain": "3 × 2 = 6; 3 × 3 = 9; 3 × 1 = 3 → 396 (no carrying)."
    },
    {
     "type": "num",
     "q": "What is 58 × 4?",
     "answer": 232,
     "explain": "4 × 8 = 32, write 2 and carry 3; 4 × 5 = 20 + 3 = 23 → 232."
    },
    {
     "type": "mc",
     "q": "In 46 × 7, after working out 7 × 6 = 42, how much do you carry?",
     "options": [
      "2",
      "4",
      "42"
     ],
     "answer": 1,
     "explain": "You write 2 in the ones and carry 4 tens."
    }
   ]
  },
  {
   "type": "text",
   "title": "Column multiplication with a two-digit multiplier",
   "html": "<p>Let's calculate <b>34 × 12</b>. The multiplier 12 = <b>1 ten and 2 ones</b>, so we do <b>two multiplications</b> and then add them:</p>\n<ol>\n<li><b>First row</b> – I multiply by the <b>ones</b> (2): 34 × 2 = <b>68</b>.</li>\n<li><b>Second row</b> – I multiply by the <b>tens</b> (1, which is worth 10): first I write a <b>0</b> (or a dash “–”) in the ones place, because I am multiplying by 10; then 34 × 1 = 34 → the row becomes <b>340</b>.</li>\n<li><b>Add</b> the two rows (the <b>partial products</b>): 68 + 340 = <b>408</b>.</li>\n</ol>\n<p>Why the zero? Because 34 × 12 = 34 × 2 + 34 × <b>10</b>. The second row is 34 × 10 = 340, not 34!</p>"
  },
  {
   "type": "svg",
   "title": "34 × 12: the two partial products",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#eff6ff\"/>\n<g font-size=\"40\" font-family=\"monospace\" text-anchor=\"middle\" fill=\"#1f2937\">\n<text x=\"160\" y=\"55\">3</text><text x=\"200\" y=\"55\">4</text>\n<text x=\"70\" y=\"105\">×</text><text x=\"160\" y=\"105\">1</text><text x=\"200\" y=\"105\">2</text>\n</g>\n<line x1=\"60\" y1=\"120\" x2=\"230\" y2=\"120\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<g font-size=\"40\" font-family=\"monospace\" text-anchor=\"middle\" fill=\"#2563eb\">\n<text x=\"160\" y=\"170\">6</text><text x=\"200\" y=\"170\">8</text>\n</g>\n<g font-size=\"40\" font-family=\"monospace\" text-anchor=\"middle\" fill=\"#16a34a\">\n<text x=\"120\" y=\"220\">3</text><text x=\"160\" y=\"220\">4</text>\n</g>\n<text x=\"200\" y=\"220\" font-size=\"40\" font-family=\"monospace\" text-anchor=\"middle\" fill=\"#dc2626\">0</text>\n<line x1=\"60\" y1=\"235\" x2=\"230\" y2=\"235\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"70\" y=\"200\" font-size=\"34\" text-anchor=\"middle\" fill=\"#1f2937\">+</text>\n<g font-size=\"40\" font-family=\"monospace\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"#b45309\">\n<text x=\"120\" y=\"285\">4</text><text x=\"160\" y=\"285\">0</text><text x=\"200\" y=\"285\">8</text>\n</g>\n<g font-size=\"20\">\n<text x=\"270\" y=\"170\" fill=\"#2563eb\">← 34 × 2 ones = 68</text>\n<text x=\"270\" y=\"210\" fill=\"#16a34a\">← 34 × 1 ten = 340</text>\n<text x=\"290\" y=\"236\" fill=\"#dc2626\">(the red 0: × 10)</text>\n<text x=\"270\" y=\"285\" fill=\"#b45309\">← add: 68 + 340 = 408</text>\n</g>\n</svg>",
   "caption": "Each digit of the multiplier gives one row. The tens row moves one place to the left."
  },
  {
   "type": "text",
   "title": "An example with carries and the check",
   "html": "<p><b>56 × 23</b>:</p>\n<ol>\n<li>56 × <b>3</b>: 3 × 6 = 18 (write 8, carry 1); 3 × 5 = 15 + 1 = 16 → <b>168</b>.</li>\n<li>56 × <b>2</b> tens: write 0; 2 × 6 = 12 (write 2, carry 1); 2 × 5 = 10 + 1 = 11 → <b>1120</b>.</li>\n<li>168 + 1120 = <b>1288</b>.</li>\n</ol>\n<p><b>Tip:</b> when you move on to the second row, <b>cross out the carries</b> of the first, so you don't mix them up!</p>\n<p><b>The check</b>: thanks to the commutative property, you can redo the calculation swapping the factors: 23 × 56 must still give 1288. You can also make an <b>estimate</b>: 56 × 23 is about 60 × 20 = 1200, so 1288 is a reasonable result. If you had got 128 or 12,880, you would have realised at once that there was a mistake!</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the school trip",
   "html": "<p>For the school trip <b>4 coaches</b> are leaving. Each coach has <b>54 seats</b>. How many children can go at most?</p>\n<p>54 × 4: 4 × 4 = 16 (write 6, carry 1); 4 × 5 = 20 + 1 = 21 → <b>216 children</b>.</p>\n<p>The museum ticket costs <b>€12</b> per child. If 216 children go, how much is spent?</p>\n<p>216 × 12: 216 × 2 = 432; 216 × 10 = 2160; 432 + 2160 = <b>€2592</b>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: eggs in the shop",
   "html": "<p>A shopkeeper receives <b>18 trays</b> of eggs. In each tray there are <b>6 rows of 5 eggs</b>, that is 30 eggs. How many eggs in all?</p>\n<p>First each tray: 6 × 5 = 30. Then all the trays: 30 × 18.</p>\n<p>In columns: 30 × 8 = 240; 30 × 1 ten = 300; 240 + 300 = <b>540 eggs</b>.</p>\n<p>Trick: 30 × 18 = 3 × 18 × 10 = 54 × 10 = 540. Same result!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Who invented the × sign",
   "html": "<p>The sign <b>×</b> was used for the first time in a printed book by the English mathematician <b>William Oughtred</b>, in <b>1631</b>. The great German mathematician Leibniz did not like it, because it could be confused with the letter x, and he preferred the <b>dot</b> (3 · 4). Even today in many countries, and in middle school, both are used!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? “Lattice” multiplication",
   "html": "<p>In fifteenth-century Italy people multiplied with a grid method called “<b>per gelosia</b>” (“by jealousy”), because the grid looks like the window lattices (the <i>gelosie</i>) that let you look outside without being seen. It appears in the <b>Treviso Arithmetic</b> (1478), one of the first mathematics books printed in Europe. It had come from the Arab and Indian world.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>You always start from the <b>ones</b>, from right to left.</li>\n<li>The <b>carry</b> is added <b>after</b> multiplying.</li>\n<li>With two digits: one row for the ones, one row for the tens with a <b>0</b> (or a dash) in the ones place.</li>\n<li>At the end you <b>add</b> the partial products.</li>\n<li>Check: swap the factors (commutative property) or make an estimate.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to multiply",
   "intro": "The column method is not the only one! All over the world and throughout history people have multiplied in many ways. Try the one you like best: they all give the same result.",
   "tabs": [
    {
     "label": "🇯🇵 The lines method",
     "html": "<p>In Japan and China they also teach multiplying by <b>drawing lines</b>. For 23 × 12: you draw 2 lines and 3 lines in one direction (for 23) and 1 line and 2 lines in the other direction (for 12). Then you <b>count the crossings</b> in each zone: on the left the hundreds, in the middle the tens, on the right the ones. 2 | 7 | 6 → <b>276</b>.</p>",
     "widget": "lineMultiply",
     "options": {
      "a": 23,
      "b": 12
     }
    },
    {
     "label": "🕌 Lattice (grid)",
     "html": "<p>You draw a grid with one box for every pair of digits, cut diagonally. In each box you write the product (tens above, ones below). Then you add along the diagonals, starting from the right. No carrying while you multiply! 47 × 36 = <b>1692</b>.</p>",
     "widget": "lattice",
     "options": {
      "a": 47,
      "b": 36
     }
    },
    {
     "label": "🇷🇺 The Russian peasant",
     "html": "<p>All you need is to know how to <b>halve</b> and <b>double</b>! Write the two numbers in columns: on the left you halve (ignoring the remainder), on the right you double. Then you <b>cross out</b> the rows where the left number is <b>even</b> and add up what is left on the right. 37 × 24 = <b>888</b>.</p>",
     "widget": "russianPeasant",
     "options": {
      "a": 37,
      "b": 24
     }
    },
    {
     "label": "𓂀 Like the Egyptians",
     "html": "<p>The Egyptian scribes, more than 3500 years ago, multiplied only by <b>doubling</b>: 21, 42, 84, 168… Then they picked the right doublings and added them. For 13 × 21: 13 = 1 + 4 + 8, so 21 + 84 + 168 = <b>273</b>.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 13,
      "b": 21
     }
    },
    {
     "label": "🟦 The broken-up rectangle",
     "html": "<p>Many teachers in England and the United States use the “<b>box method</b>”: you break the numbers into tens and ones and draw a rectangle divided into pieces.</p>\n<p>34 × 12 → (30 + 4) × (10 + 2): four rectangles 300, 40, 60, 8. Sum: 300 + 40 + 60 + 8 = <b>408</b>. It is exactly what the column does, but you can see it!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#ffffff\"/>\n<text x=\"210\" y=\"30\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">30</text>\n<text x=\"400\" y=\"30\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1d4ed8\">4</text>\n<text x=\"45\" y=\"125\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">10</text>\n<text x=\"45\" y=\"225\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#15803d\">2</text>\n<rect x=\"80\" y=\"45\" width=\"260\" height=\"150\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"340\" y=\"45\" width=\"120\" height=\"150\" fill=\"#fde68a\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"80\" y=\"195\" width=\"260\" height=\"60\" fill=\"#bbf7d0\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<rect x=\"340\" y=\"195\" width=\"120\" height=\"60\" fill=\"#fecaca\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n<text x=\"210\" y=\"128\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e3a8a\">300</text>\n<text x=\"400\" y=\"128\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#78350f\">40</text>\n<text x=\"210\" y=\"234\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#14532d\">60</text>\n<text x=\"400\" y=\"234\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#7f1d1d\">8</text>\n<text x=\"530\" y=\"130\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\">= 408</text>\n</svg>"
    },
    {
     "label": "🧊 3D cubes",
     "html": "<p>A multiplication is a rectangle of cubes: 12 rows of 4 = 48. Move the sliders and watch: if you double a factor, the rectangle becomes twice as big. By splitting the rectangle into two pieces (10 rows + 2 rows) you can see the two rows of the column multiplication!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 12,
      "b": 4,
      "max": 12
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of column multiplication: tap a node to find out why",
   "nodes": [
    {
     "id": "addizione",
     "label": "Repeated addition",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "4 × 3 = 4 + 4 + 4.",
     "why": "Multiplication began as a shortcut: instead of adding the same number many times, you use a single operation. The Egyptians and Babylonians were already using it 4000 years ago to work out harvests and fields."
    },
    {
     "id": "tabelline",
     "label": "Times tables",
     "x": 18,
     "y": 26,
     "color": "#f59e0b",
     "html": "The products from 1 × 1 to 10 × 10.",
     "why": "They are the “bricks” of every calculation: every column multiplication is made of lots of little times tables. The table is called “Pythagorean” in honour of Pythagoras, even though similar tables already existed in Babylon."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 82,
     "y": 26,
     "color": "#8b5cf6",
     "html": "Each digit is worth O, T or H depending on its place.",
     "why": "The column method works only thanks to the Hindu-Arabic place-value system with zero, brought to Europe by Fibonacci in 1202: with Roman numerals it was almost impossible!"
    },
    {
     "id": "distributiva",
     "label": "Distributive property",
     "x": 50,
     "y": 45,
     "color": "#16a34a",
     "html": "34 × 12 = 34 × 10 + 34 × 2.",
     "why": "It is the real “why” of the column: I break a factor into tens and ones, multiply the pieces and then add. Each row of the column is one of these pieces."
    },
    {
     "id": "riporto",
     "label": "Carry",
     "x": 18,
     "y": 62,
     "color": "#dc2626",
     "html": "The extra tens that move to the column on the left.",
     "why": "If a product is more than 9, it does not fit in one box: 10 ones become 1 ten and “go up” to the next place. It is the trade of the decimal system."
    },
    {
     "id": "zero",
     "label": "The zero (or dash)",
     "x": 82,
     "y": 62,
     "color": "#64748b",
     "html": "In the second row you put a 0 under the ones.",
     "why": "When I multiply by the tens digit I am multiplying by 10, 20, 30…: the result must move one place to the left. The 0 keeps the ones place empty."
    },
    {
     "id": "parziali",
     "label": "Partial products",
     "x": 50,
     "y": 74,
     "color": "#0ea5e9",
     "html": "The rows that are then added: 68 and 340.",
     "why": "They are the pieces of the distributive property written one under the other, already lined up to be added."
    },
    {
     "id": "commutativa",
     "label": "Commutative property and the check",
     "x": 22,
     "y": 90,
     "color": "#a855f7",
     "html": "a × b = b × a: I redo the calculation swapping the factors.",
     "why": "A rectangle of 3 × 4 cubes turned round becomes 4 × 3: the cubes stay the same. That is why swapping the factors is an excellent check."
    },
    {
     "id": "altri",
     "label": "Other methods",
     "x": 78,
     "y": 90,
     "color": "#ec4899",
     "html": "Japanese lines, lattice, Russian peasant, Egyptians.",
     "why": "They all use the same ideas (doubling, distributive property, place value) in different ways. The column method spread across Europe because it is quick to write on paper and takes up little space."
    }
   ],
   "edges": [
    [
     "addizione",
     "tabelline",
     "is memorised in the"
    ],
    [
     "addizione",
     "posizione",
     "with big numbers uses"
    ],
    [
     "tabelline",
     "distributiva",
     "+"
    ],
    [
     "posizione",
     "distributiva",
     "+"
    ],
    [
     "distributiva",
     "riporto",
     "requires the"
    ],
    [
     "distributiva",
     "zero",
     "for the tens you need the"
    ],
    [
     "distributiva",
     "parziali",
     "produces the"
    ],
    [
     "parziali",
     "commutativa",
     "is checked with the"
    ],
    [
     "parziali",
     "altri",
     "can also be done with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: with two digits",
   "questions": [
    {
     "type": "num",
     "q": "What is 23 × 13?",
     "answer": 299,
     "explain": "23 × 3 = 69; 23 × 10 = 230; 69 + 230 = 299."
    },
    {
     "type": "mc",
     "q": "In 45 × 21, the second row (for the tens) is…",
     "options": [
      "90",
      "900",
      "45"
     ],
     "answer": 1,
     "explain": "45 × 2 tens = 45 × 20 = 900."
    },
    {
     "type": "tf",
     "q": "In the second row you write a 0 in the ones place because you are multiplying by the tens.",
     "answer": true,
     "explain": "Multiplying by 10, 20, 30… moves everything one place to the left."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Multiplication",
   "d": "An operation that corresponds to the repeated addition of equal numbers."
  },
  {
   "t": "Factors",
   "d": "The numbers that are multiplied."
  },
  {
   "t": "Product",
   "d": "The result of a multiplication."
  },
  {
   "t": "Carry",
   "d": "The tens (or hundreds) that move into the column on the left when a product is more than 9."
  },
  {
   "t": "Partial product",
   "d": "Each row obtained by multiplying by one digit of the multiplier."
  },
  {
   "t": "Commutative property",
   "d": "If you change the order of the factors, the product does not change."
  },
  {
   "t": "Distributive property",
   "d": "You can break a factor up and multiply the parts: 23 × 4 = 20 × 4 + 3 × 4."
  },
  {
   "t": "Estimate",
   "d": "A rough calculation to check whether the result is reasonable."
  },
  {
   "t": "Check",
   "d": "Checking the result, for example by swapping the factors."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "What is 213 × 3?",
    "answer": 639,
    "explain": "3 × 3 = 9; 3 × 1 = 3; 3 × 2 = 6 → 639."
   },
   {
    "type": "num",
    "q": "What is 125 × 4?",
    "answer": 500,
    "explain": "4 × 5 = 20 (0, carry 2); 4 × 2 = 8 + 2 = 10 (0, carry 1); 4 × 1 = 4 + 1 = 5 → 500."
   },
   {
    "type": "num",
    "q": "What is 27 × 14?",
    "answer": 378,
    "explain": "27 × 4 = 108; 27 × 10 = 270; 108 + 270 = 378."
   },
   {
    "type": "mc",
    "q": "Which digit do you start from when multiplying in columns?",
    "options": [
     "from the hundreds",
     "from the ones",
     "from the tens"
    ],
    "answer": 1,
    "explain": "You start from the ones, from right to left."
   },
   {
    "type": "tf",
    "q": "The carry is added before multiplying.",
    "answer": false,
    "explain": "First you multiply, then you add the carry."
   },
   {
    "type": "num",
    "q": "What is 64 × 10?",
    "answer": 640,
    "explain": "When you multiply by 10 you add a zero."
   },
   {
    "type": "mc",
    "q": "Which calculation can be used to check 36 × 15 = 540?",
    "options": [
     "15 × 36",
     "36 + 15",
     "540 − 36"
    ],
    "answer": 0,
    "explain": "Commutative property: swapping the factors, the product must be the same."
   },
   {
    "type": "order",
    "q": "Put the steps of 34 × 12 in order.",
    "items": [
     "34 × 2 = 68",
     "write 0 under the ones",
     "34 × 1 = 34 → 340",
     "68 + 340 = 408"
    ],
    "explain": "First the ones, then the tens with the zero, finally the sum."
   },
   {
    "type": "num",
    "q": "A coach has 52 seats. How many seats are there in 6 coaches?",
    "answer": 312,
    "explain": "52 × 6: 6 × 2 = 12 (2, carry 1); 6 × 5 = 30 + 1 = 31 → 312."
   },
   {
    "type": "mc",
    "q": "An estimate of 48 × 21 is about…",
    "options": [
     "100",
     "1000",
     "10 000"
    ],
    "answer": 1,
    "explain": "48 is about 50, 21 about 20: 50 × 20 = 1000. The exact result is 1008."
   },
   {
    "type": "num",
    "q": "What is 45 × 21?",
    "answer": 945,
    "explain": "45 × 1 = 45; 45 × 20 = 900; 45 + 900 = 945."
   }
  ],
  "gen": [
   [
    "mult2",
    3
   ]
  ]
 }
});
