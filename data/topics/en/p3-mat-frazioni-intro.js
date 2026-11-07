TOPIC('en', {
 "id": "p3-mat-frazioni-intro",
 "title": "Fractions: an introduction",
 "intro": "Have you ever shared a cake 🎂 with your friends? Then you already know <b>fractions</b>! Let's learn to <b>divide a whole into equal parts</b>, to read and write fractions and to find the fraction of a group of objects.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "The whole and equal parts",
   "html": "<p>The <b>whole</b> is something complete: a pizza 🍕, a sheet of paper 📄, a bar of chocolate 🍫, a group of 12 marbles…</p>\n<p><b>Splitting into fractions</b> means dividing the whole into <b>equal parts</b>.</p>\n<ul>\n<li>✅ A pizza cut into 4 slices that are <b>all the same</b>: each slice is <b>a quarter</b>.</li>\n<li>❌ A pizza cut into 4 slices, one big and three small: they are <b>not</b> quarters!</li>\n</ul>\n<p>Each equal part is called a <b>unit fraction</b>. If I divide into 2 → <b>one half</b> (1/2); into 3 → <b>one third</b> (1/3); into 4 → <b>one quarter</b> (1/4); into 5 → <b>one fifth</b> (1/5)…</p>"
  },
  {
   "type": "svg",
   "title": "Equal parts or not?",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<rect x=\"40\" y=\"40\" width=\"220\" height=\"160\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"4\"/>\n<line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"200\" stroke=\"#166534\" stroke-width=\"4\"/>\n<line x1=\"40\" y1=\"120\" x2=\"260\" y2=\"120\" stroke=\"#166534\" stroke-width=\"4\"/>\n<text x=\"150\" y=\"240\" font-size=\"24\" fill=\"#166534\" text-anchor=\"middle\" font-weight=\"bold\">✔ 4 equal parts</text>\n<text x=\"150\" y=\"270\" font-size=\"20\" fill=\"#166534\" text-anchor=\"middle\">each part = 1/4</text>\n<rect x=\"340\" y=\"40\" width=\"220\" height=\"160\" fill=\"#fca5a5\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<line x1=\"490\" y1=\"40\" x2=\"490\" y2=\"200\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<line x1=\"340\" y1=\"90\" x2=\"490\" y2=\"90\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<line x1=\"490\" y1=\"150\" x2=\"560\" y2=\"150\" stroke=\"#991b1b\" stroke-width=\"4\"/>\n<text x=\"450\" y=\"240\" font-size=\"24\" fill=\"#991b1b\" text-anchor=\"middle\" font-weight=\"bold\">✘ different parts</text>\n<text x=\"450\" y=\"270\" font-size=\"20\" fill=\"#991b1b\" text-anchor=\"middle\">they are not quarters!</text>\n</svg>",
   "caption": "Both sheets are divided into 4 pieces, but only the first is divided into quarters."
  },
  {
   "type": "text",
   "title": "How to write a fraction",
   "html": "<p>A fraction is written with <b>two numbers</b> and a <b>line</b> between them:</p>\n<ul>\n<li>below is the <b>denominator</b> 👇: how many equal parts I divided the whole into;</li>\n<li>above is the <b>numerator</b> 👆: how many parts I take (or colour in);</li>\n<li>in the middle is the <b>fraction bar</b>.</li>\n</ul>\n<p>Example: <b>2/5</b> → I divided the whole into 5 equal parts and I take 2. It is read <b>\"two fifths\"</b>.</p>\n<p>How to read them: 1/2 one half · 1/3 one third · 3/4 three quarters · 2/5 two fifths · 5/6 five sixths · 3/8 three eighths · 7/10 seven tenths.</p>"
  },
  {
   "type": "widget",
   "title": "Build your own fraction",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 4
   },
   "caption": "Move the sliders: the denominator cuts the cake, the numerator colours the slices."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: reading fractions",
   "questions": [
    {
     "type": "mc",
     "q": "A cake is cut into 8 equal slices and I colour 3. What fraction is that?",
     "options": [
      "8/3",
      "3/8",
      "3/5"
     ],
     "answer": 1,
     "explain": "8 slices in all (denominator), 3 coloured (numerator): 3/8."
    },
    {
     "type": "mc",
     "q": "How do you read 1/3?",
     "options": [
      "one third",
      "that is, one and three",
      "three units"
     ],
     "answer": 0,
     "explain": "The denominator 3 is read \"thirds\": one third."
    },
    {
     "type": "tf",
     "q": "If I cut an apple into 2 different pieces, each one is 1/2.",
     "answer": false,
     "explain": "To be halves the parts must be equal."
    }
   ]
  },
  {
   "type": "text",
   "title": "The part that is left",
   "html": "<p>If I divide a pizza into <b>6 slices</b> and I eat <b>4</b>, I have eaten <b>4/6</b>.</p>\n<p>How much is left? 6 − 4 = 2 slices, that is <b>2/6</b>.</p>\n<p>And if I put all the slices together? <b>6/6</b> = <b>1 whole pizza</b>! When the numerator and the denominator are <b>equal</b>, the fraction is worth <b>one whole</b>.</p>"
  },
  {
   "type": "text",
   "title": "The fraction of a group of objects",
   "html": "<p>The whole can also be a <b>group</b> of things. To find <b>1/3 of 12 marbles</b>:</p>\n<ol>\n<li>I divide the 12 marbles into <b>3 equal groups</b>: 12 ÷ 3 = <b>4</b>;</li>\n<li>one group, that is <b>1/3</b>, contains <b>4 marbles</b>.</li>\n</ol>\n<p>And <b>2/3 of 12</b>? I take 2 groups: 4 × 2 = <b>8 marbles</b>.</p>\n<p>🔑 Rule: <b>divide by the bottom number</b> (denominator), then <b>multiply by the top number</b> (numerator).</p>"
  },
  {
   "type": "svg",
   "title": "1/3 of 12 marbles",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#fefce8\"/>\n<rect x=\"30\" y=\"40\" width=\"170\" height=\"120\" rx=\"20\" fill=\"#dbeafe\" stroke=\"#1d4ed8\" stroke-width=\"4\"/>\n<rect x=\"215\" y=\"40\" width=\"170\" height=\"120\" rx=\"20\" fill=\"#ffffff\" stroke=\"#6b7280\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<rect x=\"400\" y=\"40\" width=\"170\" height=\"120\" rx=\"20\" fill=\"#ffffff\" stroke=\"#6b7280\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n<g fill=\"#2563eb\"><circle cx=\"80\" cy=\"80\" r=\"18\"/><circle cx=\"150\" cy=\"80\" r=\"18\"/><circle cx=\"80\" cy=\"125\" r=\"18\"/><circle cx=\"150\" cy=\"125\" r=\"18\"/></g>\n<g fill=\"#a3a3a3\"><circle cx=\"265\" cy=\"80\" r=\"18\"/><circle cx=\"335\" cy=\"80\" r=\"18\"/><circle cx=\"265\" cy=\"125\" r=\"18\"/><circle cx=\"335\" cy=\"125\" r=\"18\"/>\n<circle cx=\"450\" cy=\"80\" r=\"18\"/><circle cx=\"520\" cy=\"80\" r=\"18\"/><circle cx=\"450\" cy=\"125\" r=\"18\"/><circle cx=\"520\" cy=\"125\" r=\"18\"/></g>\n<text x=\"115\" y=\"195\" font-size=\"24\" fill=\"#1d4ed8\" text-anchor=\"middle\" font-weight=\"bold\">1/3 = 4</text>\n<text x=\"300\" y=\"195\" font-size=\"22\" fill=\"#6b7280\" text-anchor=\"middle\">1/3</text>\n<text x=\"485\" y=\"195\" font-size=\"22\" fill=\"#6b7280\" text-anchor=\"middle\">1/3</text>\n<text x=\"300\" y=\"240\" font-size=\"22\" fill=\"#1f2937\" text-anchor=\"middle\">12 ÷ 3 = 4 marbles in each group</text>\n</svg>",
   "caption": "The group of 12 marbles is divided into 3 equal groups: each one is a third."
  },
  {
   "type": "example",
   "title": "Worked example: the chocolate bar",
   "html": "<p>A bar has <b>10 squares</b>. Marco eats <b>3</b> and Sofia <b>2</b>.</p>\n<ul>\n<li>Marco ate <b>3/10</b> of the bar.</li>\n<li>Sofia ate <b>2/10</b>.</li>\n<li>In all they ate 5 squares, that is <b>5/10</b>… which is exactly <b>half</b> the bar! 🍫</li>\n<li><b>5/10</b> are left.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Worked example: the coloured pencils",
   "html": "<p>In a pencil case there are <b>20 pencils</b>. <b>1/4</b> are red. How many red pencils are there?</p>\n<ol>\n<li>20 ÷ 4 = <b>5</b> (one quarter of the pencils).</li>\n<li>Numerator 1 → <b>5 red pencils</b> ✏️</li>\n</ol>\n<p>And if it were <b>3/4</b>? 5 × 3 = <b>15 pencils</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The word <b>fraction</b> comes from the Latin <i>frangere</i>, which means <b>to break</b>. A fraction is a whole \"broken\" into equal pieces! The word <b>fragile</b> 🥚 comes from there too.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>When you say <b>\"a quarter of an hour\"</b> you are using a fraction! An hour has 60 minutes: 60 ÷ 4 = <b>15 minutes</b>. And <b>\"half an hour\"</b> is 1/2 of an hour = <b>30 minutes</b>. ⏰</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>The parts must be <b>all equal</b>.</li>\n<li>Denominator (bottom) = how many parts I divide into. Numerator (top) = how many parts I take.</li>\n<li>If the top and bottom numbers are the same, it is <b>one whole</b>: 4/4 = 1.</li>\n<li>Fraction of a number: <b>÷ denominator</b>, then <b>× numerator</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand fractions",
   "intro": "Fractions can be seen in many ways. Try the one that seems clearest to you!",
   "tabs": [
    {
     "label": "📄 Fold the paper",
     "html": "<p>Take a real sheet of paper!</p>\n<ol>\n<li>Fold it in half: when you open it you see <b>2 equal parts</b> → each one is <b>1/2</b>.</li>\n<li>Fold it in half again: now there are <b>4</b> parts → each one is <b>1/4</b>.</li>\n<li>Once more: <b>8 parts</b> → each one is <b>1/8</b>.</li>\n</ol>\n<p>Colour in 3 little rectangles: you have coloured <b>3/8</b> of the sheet. The more you fold, the <b>smaller</b> the parts become!</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#f0f9ff\"/>\n<rect x=\"20\" y=\"40\" width=\"160\" height=\"120\" fill=\"#fde68a\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"160\" stroke=\"#1f2937\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"100\" y=\"195\" font-size=\"22\" text-anchor=\"middle\">1/2</text>\n<rect x=\"220\" y=\"40\" width=\"160\" height=\"120\" fill=\"#bbf7d0\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"160\" stroke=\"#1f2937\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<line x1=\"220\" y1=\"100\" x2=\"380\" y2=\"100\" stroke=\"#1f2937\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"300\" y=\"195\" font-size=\"22\" text-anchor=\"middle\">1/4</text>\n<rect x=\"420\" y=\"40\" width=\"160\" height=\"120\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n<rect x=\"420\" y=\"40\" width=\"40\" height=\"60\" fill=\"#f472b6\"/><rect x=\"460\" y=\"40\" width=\"40\" height=\"60\" fill=\"#f472b6\"/><rect x=\"500\" y=\"40\" width=\"40\" height=\"60\" fill=\"#f472b6\"/>\n<g stroke=\"#1f2937\" stroke-width=\"3\" stroke-dasharray=\"6 4\"><line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"160\"/><line x1=\"500\" y1=\"40\" x2=\"500\" y2=\"160\"/><line x1=\"540\" y1=\"40\" x2=\"540\" y2=\"160\"/><line x1=\"420\" y1=\"100\" x2=\"580\" y2=\"100\"/></g>\n<text x=\"500\" y=\"195\" font-size=\"22\" text-anchor=\"middle\" fill=\"#be185d\" font-weight=\"bold\">3/8</text>\n</svg>"
    },
    {
     "label": "🧊 3D cubes",
     "html": "<p>Here are <b>12 cubes</b> in 3 rows of 4.</p>\n<ul>\n<li>One <b>row</b> is <b>1/3</b> of the cubes: 4 cubes.</li>\n<li>One <b>column</b> is <b>1/4</b> of the cubes: 3 cubes.</li>\n</ul>\n<p>Turn the model and change the sliders: how many cubes are in 1/3? And in 1/4?</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "📏 On the number line",
     "html": "<p>Fractions are also <b>numbers</b> that sit between 0 and 1 on the number line. Imagine that the stretch from 0 to 1 is divided into <b>4 equal jumps</b>: one jump is <b>1/4</b>, two jumps <b>2/4</b> (that is, a half!), four jumps reach <b>1</b>.</p>\n<p>Here the line goes from 0 to 8: think of each stretch from 0 to 4 as <b>one whole</b> divided into quarters. The mark on the 2 is the half, that is 2/4!</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 8,
      "step": 1,
      "marks": [
       2,
       4
      ]
     }
    },
    {
     "label": "👨‍🍳 The cook analogy",
     "html": "<p>A recipe says: <b>\"1/2 litre of milk\"</b>. The cook takes a 1-litre bottle and pours out <b>half</b>.</p>\n<p>Then it says: <b>\"3/4 of a block of butter\"</b>. The cook cuts the block into <b>4 equal pieces</b> and uses <b>3</b>.</p>\n<p>In the kitchen fractions are used all the time: half a kilo, a quarter of a litre, a third of a cup… 🥛🧈</p>"
    },
    {
     "label": "🇮🇹 How to say it in Italian",
     "html": "<p>In Italian, fractions have special names too:</p>\n<ul>\n<li>1/2 = <b>un mezzo</b> (one half)</li>\n<li>1/4 = <b>un quarto</b> (one quarter) — just like the \"quarter\" coin worth 25 cents, which is exactly 1/4 of a dollar! 💵</li>\n<li>1/3 = <b>un terzo</b>, 2/5 = <b>due quinti</b></li>\n</ul>\n<p>In many countries the fraction is written with a slanted slash instead of the horizontal line: <b>3/4</b>. They are two ways of writing the same thing.</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of fractions: tap a node to find out why",
   "nodes": [
    {
     "id": "intero",
     "label": "Whole",
     "x": 50,
     "y": 8,
     "color": "#2563eb",
     "html": "The complete thing: a pizza, a sheet of paper, a group of objects.",
     "why": "Without knowing what the whole is, a fraction makes no sense: half of a small pizza is less than half of a giant pizza!"
    },
    {
     "id": "uguali",
     "label": "Equal parts",
     "x": 50,
     "y": 28,
     "color": "#16a34a",
     "html": "To split a whole into fractions, the pieces must all be equal.",
     "why": "Fractions were born to divide things fairly: fields, harvests, bread. If the parts are not equal, somebody gets more!"
    },
    {
     "id": "unita",
     "label": "Unit fraction",
     "x": 15,
     "y": 45,
     "color": "#a855f7",
     "html": "Just one part of the whole: 1/2, 1/3, 1/4…",
     "why": "The ancient Egyptians, almost 4000 years ago, used almost only these fractions with numerator 1. The Rhind papyrus (about 1650 BC) is full of them."
    },
    {
     "id": "den",
     "label": "Denominator",
     "x": 30,
     "y": 65,
     "color": "#f59e0b",
     "html": "The number under the line: how many equal parts I divide into.",
     "why": "It is called that because it \"gives the name\" to the parts: 4 → quarters, 5 → fifths, 10 → tenths."
    },
    {
     "id": "num",
     "label": "Numerator",
     "x": 70,
     "y": 65,
     "color": "#ef4444",
     "html": "The number above the line: how many parts I take.",
     "why": "It comes from \"to number\", that is, to count: it counts the parts taken."
    },
    {
     "id": "intera",
     "label": "Fraction = 1 whole",
     "x": 85,
     "y": 45,
     "color": "#0ea5e9",
     "html": "When numerator and denominator are equal: 5/5 = 1.",
     "why": "If I take all the parts I divided into, I have put the whole back together."
    },
    {
     "id": "gruppo",
     "label": "Fraction of a number",
     "x": 50,
     "y": 85,
     "color": "#14b8a6",
     "html": "You divide by the denominator and multiply by the numerator.",
     "why": "Dividing by the denominator makes the equal groups (what one part is worth); multiplying by the numerator takes the right number of groups."
    },
    {
     "id": "linea",
     "label": "Fraction bar",
     "x": 85,
     "y": 88,
     "color": "#64748b",
     "html": "The dash between numerator and denominator.",
     "why": "It was used by Arab mathematicians and brought to Europe by Leonardo Fibonacci of Pisa in the book <i>Liber Abaci</i> (1202)."
    }
   ],
   "edges": [
    [
     "intero",
     "uguali",
     "is divided into"
    ],
    [
     "uguali",
     "unita",
     "each one is"
    ],
    [
     "uguali",
     "den",
     "how many there are →"
    ],
    [
     "uguali",
     "num",
     "how many I take →"
    ],
    [
     "num",
     "intera",
     "if equal to the den."
    ],
    [
     "den",
     "gruppo",
     "÷ by the den."
    ],
    [
     "num",
     "gruppo",
     "× by the num."
    ],
    [
     "num",
     "linea",
     "separated by"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: the fraction of a number",
   "questions": [
    {
     "type": "num",
     "q": "What is 1/2 of 16?",
     "answer": 8,
     "explain": "16 : 2 = 8."
    },
    {
     "type": "num",
     "q": "What is 1/5 of 30?",
     "answer": 6,
     "explain": "30 : 5 = 6."
    },
    {
     "type": "mc",
     "q": "Which fraction is worth a whole?",
     "options": [
      "3/4",
      "6/6",
      "1/6"
     ],
     "answer": 1,
     "explain": "6 parts out of 6: the whole thing."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Whole",
   "d": "The complete thing or group that we want to divide."
  },
  {
   "t": "Fraction",
   "d": "One or more equal parts of a whole."
  },
  {
   "t": "Split into fractions",
   "d": "Divide a whole into equal parts."
  },
  {
   "t": "Unit fraction",
   "d": "Just one of the equal parts, with numerator 1 (e.g. 1/4)."
  },
  {
   "t": "Numerator",
   "d": "The number above the line: how many parts I take."
  },
  {
   "t": "Denominator",
   "d": "The number under the line: how many equal parts I divide the whole into."
  },
  {
   "t": "Fraction bar",
   "d": "The dash that separates the numerator and the denominator."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "To make a fraction the parts must be…",
    "options": [
     "all equal",
     "all different",
     "more than ten"
    ],
    "answer": 0,
    "explain": "The parts must be equal."
   },
   {
    "type": "mc",
    "q": "In 3/7 the numerator is…",
    "options": [
     "7",
     "3",
     "10"
    ],
    "answer": 1,
    "explain": "The numerator is above the line: 3."
   },
   {
    "type": "text",
    "q": "What is the number under the fraction bar called?",
    "answer": [
     "denominator",
     "the denominator"
    ],
    "explain": "It is the denominator: it says how many parts I divide into."
   },
   {
    "type": "mc",
    "q": "How do you read 2/5?",
    "options": [
     "two fifths",
     "five halves",
     "two and five"
    ],
    "answer": 0,
    "explain": "Two (numerator) fifths (denominator 5)."
   },
   {
    "type": "tf",
    "q": "4/4 is equal to one whole.",
    "answer": true,
    "explain": "I take all 4 parts: the whole thing."
   },
   {
    "type": "num",
    "q": "A pizza is cut into 8 slices and you eat 3. How many slices are left?",
    "answer": 5,
    "explain": "8 − 3 = 5 slices, that is 5/8."
   },
   {
    "type": "num",
    "q": "What is 1/4 of 20?",
    "answer": 5,
    "explain": "20 : 4 = 5."
   },
   {
    "type": "num",
    "q": "What is 2/3 of 9?",
    "answer": 6,
    "explain": "9 : 3 = 3; 3 × 2 = 6."
   },
   {
    "type": "tf",
    "q": "The bigger the denominator, the bigger each part.",
    "answer": false,
    "explain": "It is the opposite: if I cut into more pieces, each piece is smaller. 1/8 is smaller than 1/2."
   },
   {
    "type": "order",
    "q": "Order from the biggest part to the smallest.",
    "items": [
     "1/2",
     "1/3",
     "1/4",
     "1/10"
    ],
    "explain": "With numerator 1, the bigger the denominator, the smaller the part."
   },
   {
    "type": "mc",
    "q": "How many minutes is a quarter of an hour?",
    "options": [
     "25",
     "15",
     "4"
    ],
    "answer": 1,
    "explain": "60 ÷ 4 = 15 minutes."
   }
  ],
  "gen": [
   [
    "fracOf",
    3
   ]
  ]
 }
});
