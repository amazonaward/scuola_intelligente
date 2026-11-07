TOPIC('en', {
 "id": "p4-mat-divisioni-due-cifre",
 "title": "Division with a two-digit divisor",
 "intro": "450 students go on a trip in buses with 52 seats: how many buses do we need? To answer you have to divide by a <b>two-digit</b> number. It seems hard, but with a good <b>estimate</b>, a few <b>strategies</b> and the <b>check</b>, it becomes child's play!",
 "minutes": 35,
 "sections": [
  {
   "type": "text",
   "title": "Review: the terms of division",
   "html": "<p>In the division <b>864 ÷ 24 = 36</b>:</p>\n<ul>\n<li><b>864</b> is the <b>dividend</b> (the quantity to divide);</li>\n<li><b>24</b> is the <b>divisor</b> (how many parts it is divided into, or how big each group is);</li>\n<li><b>36</b> is the <b>quotient</b> (the result);</li>\n<li>if something is left over, that is the <b>remainder</b>, which must always be <b>less than the divisor</b>.</li>\n</ul>\n<p>Division is used in two situations:</p>\n<ul>\n<li><b>sharing</b>: 864 stickers shared among 24 children → how many each?</li>\n<li><b>grouping</b>: 864 stickers in packets of 24 → how many packets?</li>\n</ul>\n<p>Division is the <b>inverse operation</b> of multiplication: if 36 × 24 = 864, then 864 ÷ 24 = 36.</p>"
  },
  {
   "type": "text",
   "title": "Step 1 – Estimating the quotient",
   "html": "<p>The secret to dividing by two digits is to <b>estimate</b>, that is, to guess in a clever way how many times the divisor \"fits\" into the dividend.</p>\n<p><b>Finger trick</b>: cover with your finger the last digit of the divisor and also the last digit of the part of the dividend you are dividing.</p>\n<ul>\n<li>86 ÷ 24 → cover the 4 and the 6 → <b>8 ÷ 2 = 4</b>. Try 4: 4 × 24 = 96. That's more than 86! Too big → try <b>3</b>: 3 × 24 = 72 ✅.</li>\n</ul>\n<p>An even better trick: <b>round the divisor</b> to the nearest ten. 24 is close to 20, 47 is close to 50, 31 is close to 30.</p>\n<ul>\n<li>145 ÷ 31 → think 150 ÷ 30 = <b>5</b> → 5 × 31 = 155 too much → <b>4</b>: 4 × 31 = 124 ✅ (remainder 21).</li>\n</ul>\n<p>If the product is <b>too big</b>, lower the number by 1; if the remainder is <b>greater than or equal to the divisor</b>, raise it by 1.</p>"
  },
  {
   "type": "text",
   "title": "Step 2 – Long division, step by step",
   "html": "<p>Let's calculate <b>864 ÷ 24</b> with the Italian method (the \"L\" layout).</p>\n<ol>\n<li><b>Take the digits</b>: 8 does not contain 24, so I take <b>86</b>.</li>\n<li><b>Estimate</b>: how many times does 24 fit in 86? 8 ÷ 2 = 4, but 4 × 24 = 96 &gt; 86 → <b>3</b>. I write 3 in the quotient.</li>\n<li><b>Multiply and subtract</b>: 3 × 24 = 72; 86 − 72 = <b>14</b>. The remainder 14 is less than 24 ✅.</li>\n<li><b>Bring down</b> the next digit (4): I get <b>144</b>.</li>\n<li><b>Estimate</b>: 144 ÷ 24 → 14 ÷ 2 = 7, but 7 × 24 = 168, too much; 6 × 24 = <b>144</b> ✅. I write 6 in the quotient.</li>\n<li><b>Subtract</b>: 144 − 144 = <b>0</b>. There are no more digits to bring down: done!</li>\n</ol>\n<p>Result: <b>864 ÷ 24 = 36</b>, remainder <b>0</b>.</p>"
  },
  {
   "type": "svg",
   "title": "864 ÷ 24 in columns",
   "svg": "<svg viewBox=\"0 0 600 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"320\" fill=\"#f8fafc\"/>\n<g font-family=\"monospace\" font-size=\"34\" font-weight=\"bold\">\n<text x=\"80\" y=\"60\" fill=\"#1f2937\">8 6 4</text>\n<text x=\"300\" y=\"60\" fill=\"#2563eb\">2 4</text>\n<text x=\"300\" y=\"115\" fill=\"#16a34a\">3 6</text>\n<text x=\"80\" y=\"115\" fill=\"#dc2626\">7 2</text>\n<text x=\"40\" y=\"115\" fill=\"#dc2626\">−</text>\n<text x=\"80\" y=\"170\" fill=\"#1f2937\">1 4 4</text>\n<text x=\"80\" y=\"225\" fill=\"#dc2626\">1 4 4</text>\n<text x=\"40\" y=\"225\" fill=\"#dc2626\">−</text>\n<text x=\"160\" y=\"280\" fill=\"#1f2937\">0</text>\n</g>\n<line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"80\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"280\" y1=\"75\" x2=\"400\" y2=\"75\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<line x1=\"70\" y1=\"128\" x2=\"160\" y2=\"128\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"238\" x2=\"200\" y2=\"238\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<path d=\"M185 45 Q215 100 182 150\" stroke=\"#f97316\" stroke-width=\"3\" fill=\"none\" stroke-dasharray=\"6 5\"/>\n<text x=\"215\" y=\"105\" font-size=\"15\" fill=\"#c2410c\">bring down</text>\n<text x=\"215\" y=\"122\" font-size=\"15\" fill=\"#c2410c\">the 4</text>\n<g font-size=\"17\" fill=\"#334155\">\n<text x=\"420\" y=\"58\">← divisor</text>\n<text x=\"420\" y=\"113\">← quotient</text>\n<text x=\"430\" y=\"170\">86 ÷ 24 → 3</text>\n<text x=\"430\" y=\"195\">3 × 24 = 72</text>\n<text x=\"430\" y=\"230\">144 ÷ 24 → 6</text>\n<text x=\"430\" y=\"255\">6 × 24 = 144</text>\n<text x=\"230\" y=\"282\">← remainder</text>\n</g>\n</svg>",
   "caption": "The divisor goes at the top right, the quotient below it; on the left you write products, subtractions and the digits brought down."
  },
  {
   "type": "text",
   "title": "Step 3 – The check",
   "html": "<p>To be sure of the result, do the <b>check</b>, using the inverse operation:</p>\n<p style=\"font-size:1.2em\"><b>quotient × divisor + remainder = dividend</b></p>\n<ul>\n<li>864 ÷ 24 = 36 → check: 36 × 24 = 864 ✅</li>\n<li>1,000 ÷ 32 = 31 remainder 8 → check: 31 × 32 = 992; 992 + 8 = 1,000 ✅</li>\n</ul>\n<p>Also remember the <b>remainder check</b>: the remainder must always be <b>less than the divisor</b>. If you find 1,000 ÷ 32 = 30 remainder 40, there is a mistake: 40 &gt; 32, the quotient was too small!</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: estimate and check",
   "questions": [
    {
     "type": "mc",
     "q": "To estimate 183 ÷ 29, which \"easy\" division can you think of?",
     "options": [
      "180 ÷ 30",
      "100 ÷ 20",
      "200 ÷ 20"
     ],
     "answer": 0,
     "explain": "29 is close to 30 and 183 is close to 180: 180 ÷ 30 = 6."
    },
    {
     "type": "num",
     "q": "Do the check: a child found 500 ÷ 23 = 21 remainder 17. What is 21 × 23 + 17?",
     "answer": 500,
     "explain": "21 × 23 = 483; 483 + 17 = 500: the division is correct!"
    },
    {
     "type": "tf",
     "q": "In a division by 15 the remainder can be 18.",
     "answer": false,
     "explain": "The remainder must be less than the divisor (15)."
    }
   ]
  },
  {
   "type": "text",
   "title": "Step 4 – The invariance property: a shortcut",
   "html": "<p>If you <b>multiply</b> or <b>divide</b> both the dividend and the divisor by the <b>same number</b>, the quotient <b>does not change</b>. This is the <b>invariance property</b>.</p>\n<ul>\n<li>720 ÷ 15 → I double both → 1440 ÷ 30 → divide by 10 → <b>144 ÷ 3 = 48</b>. Much easier!</li>\n<li>600 ÷ 25 → multiply by 4 → 2400 ÷ 100 = <b>24</b>.</li>\n<li>840 ÷ 40 → divide by 10 → 84 ÷ 4 = <b>21</b>.</li>\n</ul>\n<p>Careful: if there is a <b>remainder</b> in the division, the quotient stays the same but the remainder changes (it is multiplied or divided too). Use this shortcut mostly for exact divisions.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the buses for the trip",
   "html": "<p>450 students must go on a trip. Each bus has <b>52 seats</b>. How many buses do we need?</p>\n<ol>\n<li>Estimate: 450 ÷ 50 = 9 → I try 9 × 52 = 468 &gt; 450, too much → <b>8</b>.</li>\n<li>8 × 52 = 416; 450 − 416 = <b>34</b>. So 450 ÷ 52 = <b>8 remainder 34</b>.</li>\n<li>Check: 8 × 52 + 34 = 416 + 34 = 450 ✅.</li>\n</ol>\n<p>But pay attention to the <b>meaning of the remainder</b>! 8 buses carry 416 students; 34 students are left on foot. We need another bus: <b>9 buses</b> in all.</p>\n<p>In problems you must always ask yourself: <b>is the remainder ignored, added or used?</b></p>"
  },
  {
   "type": "example",
   "title": "Worked example: eggs in boxes",
   "html": "<p>A farm collects <b>1,000 eggs</b> and puts them in boxes of <b>12</b> (a dozen). How many full boxes? How many eggs are left over?</p>\n<ol>\n<li>100 ÷ 12 → 10 ÷ 1 = 10? Too much! The partial quotient is always a single digit (9 at most): I try 9 → 9 × 12 = 108 &gt; 100 → <b>8</b>: 8 × 12 = 96; 100 − 96 = 4.</li>\n<li>I bring down the 0: <b>40</b> ÷ 12 → <b>3</b>: 3 × 12 = 36; 40 − 36 = 4.</li>\n<li>Result: <b>1,000 ÷ 12 = 83 remainder 4</b>.</li>\n<li>Check: 83 × 12 = 996; 996 + 4 = 1,000 ✅.</li>\n</ol>\n<p>The farm fills <b>83 boxes</b> and <b>4 eggs</b> are left over (for the omelet!).</p>"
  },
  {
   "type": "3d",
   "title": "Division as a rectangle of cubes",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 12,
    "max": 12
   },
   "caption": "72 cubes arranged in rows of 12: how many rows? 72 ÷ 12 = 6. Every exact division is a rectangle: dividend = total cubes, divisor = cubes per row, quotient = number of rows."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The \"L\" method is Italian",
   "html": "<p>The way of writing division that you use here, with the divisor at the top right and the quotient below, is typical of <b>Italy</b> and other European countries (France, Spain, Latin America). In <b>English-speaking countries</b> they use <b>\"long division\"</b>: the dividend sits under a kind of \"bracket\" and the quotient is written <b>above</b> it. In Germany everything is written on one line: <i>864 : 24 = 36</i>, with the calculations underneath.</p>\n<p>The method changes, but the steps (estimate, multiply, subtract, bring down) are always the same!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Dividing by zero is impossible",
   "html": "<p>You can divide by 1, by 24, by 1,000… but <b>never by zero</b>! Why? Try the check: 8 ÷ 0 = ? There should be a number that, multiplied by 0, gives 8. But any number times 0 is 0! So dividing by zero <b>makes no sense</b>.</p>\n<p>Calculators know it too: if you try, they show <b>\"Error\"</b> or <b>\"E\"</b>.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>Dividend ÷ divisor = quotient</b> (+ remainder).</li>\n<li>The <b>remainder</b> is always <b>less than the divisor</b>.</li>\n<li>Steps: <b>take the digits → estimate → multiply → subtract → bring down</b>, and start again.</li>\n<li>To estimate, <b>round the divisor</b> to the ten (or use the finger trick).</li>\n<li>Product too big → lower by 1; remainder too big → raise by 1.</li>\n<li><b>Check</b>: quotient × divisor + remainder = dividend.</li>\n<li><b>Invariance property</b>: multiply or divide the dividend and the divisor by the same number, the quotient does not change.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to do divisions",
   "intro": "If the column method blocks you, try these paths: big chunks (England), backward jumps, like the ancient Egyptians, or with the table of multiples.",
   "tabs": [
    {
     "label": "🇬🇧 Big chunks (chunking)",
     "html": "<p>In English schools they teach <b>chunking</b>: instead of guessing the right digit, you take away <b>big, easy chunks</b> (× 10, × 5, × 2…) from the dividend until nothing is left.</p>\n<p><b>864 ÷ 24</b></p>\n<table>\n<tr><th>I take away</th><th>How many 24s</th><th>Left</th></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>624</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>384</td></tr>\n<tr><td>240 (= 24 × 10)</td><td>10</td><td>144</td></tr>\n<tr><td>120 (= 24 × 5)</td><td>5</td><td>24</td></tr>\n<tr><td>24 (= 24 × 1)</td><td>1</td><td>0</td></tr>\n<tr><td><b>Total</b></td><td><b>36</b></td><td></td></tr>\n</table>\n<p>It is longer, but <b>you never get the estimate wrong</b>: you only use the times tables you know well!</p>"
    },
    {
     "label": "🐸 Backward jumps",
     "html": "<p>Dividing also means: <b>how many times can I take away the divisor?</b> On the number line, start from the dividend and make <b>backward jumps</b> as long as the divisor, until you reach 0 (or can't jump any more).</p>\n<p>Try with <b>96 ÷ 24</b>: the frog starts at 96, set the jump to 24 and press \"−\". Count the jumps: 96 → 72 → 48 → 24 → 0. That's <b>4 jumps</b>: 96 ÷ 24 = 4!</p>\n<p>Then try with 100 ÷ 24: after 4 jumps you land on 4 and can't jump any more. 4 is the <b>remainder</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 100,
      "step": 24,
      "start": 96,
      "marks": [
       72,
       48,
       24,
       0
      ]
     }
    },
    {
     "label": "𓂀 Like the Egyptians (doubling)",
     "html": "<p>The ancient Egyptians divided using only <b>doubling</b>! To do <b>864 ÷ 24</b> they wrote a table: 1 → 24, 2 → 48, 4 → 96, 8 → 192, 16 → 384, 32 → 768.</p>\n<p>Then they looked for which rows added together give 864: <b>768 + 96 = 864</b>, that is, rows <b>32</b> and <b>4</b>. So the quotient is <b>32 + 4 = 36</b>!</p>\n<p>In the widget below, which does the \"Egyptian multiplication\" 36 × 24, you can see exactly this table: the rows kept are the ones that add up to 864.</p>",
     "widget": "egyptianMultiply",
     "options": {
      "a": 36,
      "b": 24
     }
    },
    {
     "label": "📋 The table of multiples",
     "html": "<p>If estimating scares you, before starting write the <b>times table of the divisor</b>: that way you don't have to guess, you only have to look!</p>\n<p>To divide by <b>24</b>:</p>\n<table>\n<tr><td>24 × 1 = 24</td><td>24 × 4 = 96</td><td>24 × 7 = 168</td></tr>\n<tr><td>24 × 2 = 48</td><td>24 × 5 = 120</td><td>24 × 8 = 192</td></tr>\n<tr><td>24 × 3 = 72</td><td>24 × 6 = 144</td><td>24 × 9 = 216</td></tr>\n</table>\n<p>Now 86 ÷ 24? I look for the biggest multiple that doesn't exceed 86: <b>72</b> (× 3). And 144 ÷ 24? There is exactly <b>144</b> (× 6). Quotient: <b>36</b>.</p>\n<p>Quick trick to build the table: add 24 each time to the previous number (24, 48, 72, 96…).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Division map",
   "nodes": [
    {
     "id": "divisione",
     "label": "Division",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "An operation for sharing or grouping: dividend ÷ divisor = quotient.",
     "why": "It was born from practical needs: dividing the harvest, soldiers' rations, an inheritance. The Egyptians and the Babylonians already knew how to divide 4000 years ago, the former with doubling, the latter using tables of reciprocals."
    },
    {
     "id": "inversa",
     "label": "Inverse of multiplication",
     "x": 18,
     "y": 28,
     "color": "#16a34a",
     "html": "If 36 × 24 = 864, then 864 ÷ 24 = 36.",
     "why": "To divide means to look for the missing factor: 24 × ? = 864. That is why knowing the times tables well is the key to dividing."
    },
    {
     "id": "termini",
     "label": "Dividend, divisor, quotient, remainder",
     "x": 50,
     "y": 28,
     "color": "#f59e0b",
     "html": "The four names of division.",
     "why": "\"Quotient\" comes from the Latin <i>quotiens</i>, \"how many times\": how many times the divisor fits in the dividend."
    },
    {
     "id": "resto",
     "label": "Remainder < divisor",
     "x": 82,
     "y": 28,
     "color": "#ef4444",
     "html": "What is left over is always less than the divisor.",
     "why": "If the remainder were equal to or greater than the divisor, one more whole group would still fit: the quotient would be too small. This idea was already the basis of the calculations of <b>Euclid</b> (around 300 BC), who used divisions with remainders in his <i>Elements</i>."
    },
    {
     "id": "stima",
     "label": "Estimate",
     "x": 18,
     "y": 58,
     "color": "#a855f7",
     "html": "Round the divisor to guess the digit of the quotient.",
     "why": "It works because, if you round the divisor a little, the quotient changes a little. At most you have to correct by 1 or 2: it's a clever way of \"trying and correcting\"."
    },
    {
     "id": "algoritmo",
     "label": "Column algorithm",
     "x": 50,
     "y": 58,
     "color": "#0ea5e9",
     "html": "I take the digits, estimate, multiply, subtract, bring down.",
     "why": "It works thanks to <b>place value</b>: first the hundreds part is divided, then the tens, then the ones. The method reached Europe with the Hindu-Arabic numerals; Fibonacci explained it in the <i>Liber Abaci</i> (1202) and in Italy it was perfected in the merchants' abacus schools."
    },
    {
     "id": "prova",
     "label": "Check",
     "x": 82,
     "y": 58,
     "color": "#14b8a6",
     "html": "quotient × divisor + remainder = dividend.",
     "why": "It is the very definition of division with remainder: dividend = divisor × quotient + remainder. Using the inverse operation is the surest check."
    },
    {
     "id": "invariantiva",
     "label": "Invariance property",
     "x": 34,
     "y": 86,
     "color": "#64748b",
     "html": "Multiply or divide the dividend and divisor by the same number, the quotient does not change.",
     "why": "If you double the candies and the children too, each child still gets the same number of candies! It is the same idea as equivalent fractions: 720/15 = 1440/30."
    },
    {
     "id": "zero",
     "label": "Never by zero",
     "x": 66,
     "y": 86,
     "color": "#be185d",
     "html": "Dividing by zero makes no sense.",
     "why": "No number multiplied by 0 gives a number other than 0, so the check can never work. Mathematicians say that division by zero is \"impossible\" or \"undefined\"."
    }
   ],
   "edges": [
    [
     "divisione",
     "inversa",
     "is the"
    ],
    [
     "divisione",
     "termini",
     "has"
    ],
    [
     "termini",
     "resto",
     "rule"
    ],
    [
     "inversa",
     "stima",
     "helps the"
    ],
    [
     "stima",
     "algoritmo",
     "is used in the"
    ],
    [
     "algoritmo",
     "prova",
     "is checked with"
    ],
    [
     "inversa",
     "prova",
     "is based on"
    ],
    [
     "divisione",
     "invariantiva",
     "proprietà"
    ],
    [
     "divisione",
     "zero",
     "attenzione"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: calculate",
   "questions": [
    {
     "type": "num",
     "q": "What is 672 ÷ 32?",
     "answer": 21,
     "explain": "67 ÷ 32 = 2 (64), remainder 3; I bring down the 2 → 32 ÷ 32 = 1. Quotient 21."
    },
    {
     "type": "num",
     "q": "Use the invariance property: 900 ÷ 25 = ?",
     "answer": 36,
     "explain": "× 4: 3600 ÷ 100 = 36."
    },
    {
     "type": "mc",
     "q": "In 158 ÷ 26 the estimate \"160 ÷ 30\" gives 5. The right quotient is…",
     "options": [
      "5",
      "6",
      "7"
     ],
     "answer": 1,
     "explain": "5 × 26 = 130, remainder 28 ≥ 26: too small! 6 × 26 = 156, remainder 2 ✅."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Dividend",
   "d": "The number that is divided."
  },
  {
   "t": "Divisor",
   "d": "The number you divide by."
  },
  {
   "t": "Quotient",
   "d": "The result of the division."
  },
  {
   "t": "Remainder",
   "d": "What is left over; it is always less than the divisor."
  },
  {
   "t": "Estimate",
   "d": "An approximate calculation to predict the result."
  },
  {
   "t": "Check",
   "d": "Checking the result: quotient × divisor + remainder = dividend."
  },
  {
   "t": "Invariance property",
   "d": "Multiplying or dividing the dividend and divisor by the same number, the quotient does not change."
  },
  {
   "t": "Exact division",
   "d": "A division with remainder 0."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "What is 336 ÷ 14?",
    "answer": 24,
    "explain": "33 ÷ 14 = 2 (28), remainder 5; I bring down 6 → 56 ÷ 14 = 4. Quotient 24."
   },
   {
    "type": "num",
    "q": "What is 945 ÷ 45?",
    "answer": 21,
    "explain": "94 ÷ 45 = 2 (90), remainder 4; I bring down 5 → 45 ÷ 45 = 1. Quotient 21."
   },
   {
    "type": "num",
    "q": "What is the remainder of 500 ÷ 18?",
    "answer": 14,
    "explain": "500 ÷ 18 = 27 remainder 14 (27 × 18 = 486; 500 − 486 = 14)."
   },
   {
    "type": "mc",
    "q": "In 1,250 ÷ 25 = 50, the number 25 is…",
    "options": [
     "the dividend",
     "the divisor",
     "the quotient"
    ],
    "answer": 1,
    "explain": "The number you divide by is the divisor."
   },
   {
    "type": "tf",
    "q": "The check of a division is done with multiplication.",
    "answer": true,
    "explain": "Quotient × divisor + remainder = dividend."
   },
   {
    "type": "tf",
    "q": "If a child finds 300 ÷ 40 = 6 remainder 60, the result is correct.",
    "answer": false,
    "explain": "The remainder 60 is greater than the divisor 40: the right answer is 7 remainder 20."
   },
   {
    "type": "mc",
    "q": "Which division has the same quotient as 480 ÷ 16?",
    "options": [
     "240 ÷ 8",
     "480 ÷ 8",
     "240 ÷ 16"
    ],
    "answer": 0,
    "explain": "Dividend and divisor both divided by 2: invariance property."
   },
   {
    "type": "order",
    "q": "Put the steps of long division in order.",
    "items": [
     "I take the digits of the dividend",
     "I estimate how many times the divisor fits",
     "I multiply the digit by the divisor",
     "I subtract",
     "I bring down the next digit"
    ],
    "explain": "Take, estimate, multiply, subtract, bring down: and start again."
   },
   {
    "type": "num",
    "q": "A school has 380 students and each bus carries 50 people. How many buses do we need to take them all?",
    "answer": 8,
    "explain": "380 ÷ 50 = 7 remainder 30: the 30 students left need another bus, so 8."
   },
   {
    "type": "num",
    "q": "A library has 1,008 books to put on shelves of 42 books. How many shelves are filled?",
    "answer": 24,
    "explain": "1,008 ÷ 42 = 24 (42 × 24 = 1,008)."
   },
   {
    "type": "text",
    "q": "What is the result of a division called?",
    "answer": [
     "quotient",
     "the quotient"
    ],
    "explain": "The quotient."
   }
  ],
  "gen": [
   [
    "div2",
    3
   ]
  ]
 }
});
