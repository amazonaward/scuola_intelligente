TOPIC('en', {
 "id": "p4-mat-frazioni",
 "title": "Fractions",
 "intro": "When you share a pizza with your friends you're already using <b>fractions</b>! Let's learn to read them, write them, compare them and work out the fraction of a number.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "What is a fraction",
   "html": "<p>A <b>fraction</b> shows one or more <b>equal parts</b> of a whole.</p>\n<p>To split a whole into a fraction you must divide it into parts that are <b>all equal</b>. Each part is called a <b>unit fraction</b>: for example ¼ (a quarter) or ⅓ (a third).</p>\n<p>A fraction is written with two numbers and a line:</p>\n<ul>\n<li>the <b>denominator</b> (bottom) tells how many equal parts the whole has been divided into;</li>\n<li>the <b>numerator</b> (top) tells how many parts we take;</li>\n<li>the <b>fraction bar</b> is in the middle.</li>\n</ul>\n<p>Example: <b>3/4</b> is read \"three quarters\": the whole is divided into 4 equal parts and we take 3.</p>"
  },
  {
   "type": "svg",
   "title": "The parts of a fraction",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fff7ed\"/>\n<circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<path d=\"M150 150 L150 50 A100 100 0 0 1 250 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L250 150 A100 100 0 0 1 150 250 Z\" fill=\"#f97316\"/>\n<path d=\"M150 150 L150 250 A100 100 0 0 1 50 150 Z\" fill=\"#f97316\"/>\n<path d=\"M150 50 L150 250 M50 150 L250 150\" stroke=\"#92400e\" stroke-width=\"4\"/>\n<text x=\"380\" y=\"110\" font-size=\"64\" font-weight=\"bold\" fill=\"#c2410c\" text-anchor=\"middle\">3</text>\n<line x1=\"340\" y1=\"130\" x2=\"420\" y2=\"130\" stroke=\"#1f2937\" stroke-width=\"6\"/>\n<text x=\"380\" y=\"190\" font-size=\"64\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">4</text>\n<text x=\"440\" y=\"100\" font-size=\"18\" fill=\"#c2410c\">numerator: parts taken</text>\n<text x=\"440\" y=\"136\" font-size=\"18\" fill=\"#1f2937\">fraction bar</text>\n<text x=\"440\" y=\"180\" font-size=\"18\" fill=\"#1d4ed8\">denominator:</text>\n<text x=\"440\" y=\"202\" font-size=\"18\" fill=\"#1d4ed8\">total equal parts</text>\n<text x=\"150\" y=\"285\" font-size=\"20\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">3/4 of the pizza</text>\n</svg>",
   "caption": "The pizza is divided into 4 equal parts: the 3 coloured ones are 3/4."
  },
  {
   "type": "widget",
   "title": "Build fractions",
   "widget": "fractionPie",
   "options": {
    "n": 3,
    "d": 4
   },
   "caption": "Move the sliders: change the numerator and denominator and watch the shape."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: reading fractions",
   "questions": [
    {
     "type": "mc",
     "q": "In 2/5 the denominator is…",
     "options": [
      "2",
      "5",
      "7"
     ],
     "answer": 1,
     "explain": "The denominator is the number under the bar: 5."
    },
    {
     "type": "mc",
     "q": "How do you read 5/8?",
     "options": [
      "Five eighths",
      "Eight fifths",
      "Five and eight"
     ],
     "answer": 0,
     "explain": "First you read the numerator (five), then the denominator as an ordinal (eighths)."
    },
    {
     "type": "tf",
     "q": "To make a fraction the whole must be divided into equal parts.",
     "answer": true,
     "explain": "The parts must all be equal, otherwise it's not a fraction."
    }
   ]
  },
  {
   "type": "text",
   "title": "Proper, improper and whole-number fractions",
   "html": "<ul>\n<li><b>Proper</b>: numerator <b>smaller</b> than the denominator → it's <b>less than one whole</b>. E.g. 3/4, 2/5.</li>\n<li><b>Improper</b>: numerator <b>bigger</b> than the denominator → it's <b>more than one whole</b>. E.g. 5/4 (one whole and a quarter).</li>\n<li><b>Whole-number (apparent)</b>: the numerator is a <b>multiple</b> of the denominator → it equals <b>one or more wholes</b>. E.g. 4/4 = 1, 6/3 = 2.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "Equivalent fractions and comparing",
   "html": "<p>Two fractions are <b>equivalent</b> when they show the <b>same amount</b>, even if they're written with different numbers.</p>\n<p>Example: <b>1/2 = 2/4 = 4/8</b>. Half a pizza is the same as two quarters of a pizza!</p>\n<p>To find an equivalent fraction you <b>multiply</b> (or <b>divide</b>) the numerator and denominator by the <b>same number</b>: 1/2 → (×3) → 3/6.</p>\n<p><b>Comparing</b>:</p>\n<ul>\n<li>same denominator: the bigger one has the larger numerator (3/5 &gt; 2/5);</li>\n<li>same numerator: the bigger one has the smaller denominator (1/3 &gt; 1/6), because the parts are bigger!</li>\n</ul>"
  },
  {
   "type": "svg",
   "title": "1/2 = 2/4 = 4/8",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f0f9ff\"/>\n<g stroke=\"#1e3a8a\" stroke-width=\"3\">\n<rect x=\"120\" y=\"30\" width=\"200\" height=\"50\" fill=\"#60a5fa\"/>\n<rect x=\"320\" y=\"30\" width=\"200\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"220\" y=\"105\" width=\"100\" height=\"50\" fill=\"#34d399\"/>\n<rect x=\"320\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"105\" width=\"100\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"120\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"170\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"220\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"270\" y=\"180\" width=\"50\" height=\"50\" fill=\"#f472b6\"/>\n<rect x=\"320\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"370\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"420\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n<rect x=\"470\" y=\"180\" width=\"50\" height=\"50\" fill=\"#ffffff\"/>\n</g>\n<text x=\"60\" y=\"64\" font-size=\"26\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">1/2</text>\n<text x=\"60\" y=\"139\" font-size=\"26\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">2/4</text>\n<text x=\"60\" y=\"214\" font-size=\"26\" font-weight=\"bold\" fill=\"#be185d\" text-anchor=\"middle\">4/8</text>\n<line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"240\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"8 6\"/>\n</svg>",
   "caption": "The coloured parts are the same length: the three fractions are equivalent."
  },
  {
   "type": "text",
   "title": "The fraction of a number",
   "html": "<p>To work out the fraction of a number:</p>\n<ol>\n<li><b>divide</b> the number by the <b>denominator</b> (you find what one part is worth);</li>\n<li><b>multiply</b> the result by the <b>numerator</b>.</li>\n</ol>\n<p>Example: 3/4 of 20 → 20 ÷ 4 = 5 → 5 × 3 = <b>15</b>.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the birthday cake",
   "html": "<p>Giulia's cake is cut into <b>8 equal slices</b>. Her friends eat <b>5</b>.</p>\n<ul>\n<li>They ate <b>5/8</b> of the cake.</li>\n<li>8 − 5 = 3 slices are left, that is <b>3/8</b>.</li>\n<li>5/8 + 3/8 = 8/8 = <b>1 whole cake</b>.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Practical example: the stickers",
   "html": "<p>Marco has <b>24 stickers</b> and gives <b>2/3</b> of them to his friend Luca. How many stickers does he give away?</p>\n<ol>\n<li>24 ÷ 3 = 8 (one third of the stickers)</li>\n<li>8 × 2 = <b>16</b> stickers given away</li>\n</ol>\n<p>Marco has 24 − 16 = <b>8</b> left, that is 1/3.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>The ancient <b>Egyptians</b> used almost only fractions with numerator 1, like 1/2, 1/3, 1/4… To write 3/4 they said \"1/2 + 1/4\"!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>Music uses fractions too: notes are called <b>whole note, half note (1/2), quarter note (1/4), eighth note (1/8)</b>… because they last a fraction of the time of the longest note!</p>"
  },
  {
   "type": "remember",
   "title": "To remember",
   "html": "<ul>\n<li>Denominator = how many equal parts I divide into; numerator = how many parts I take.</li>\n<li>Proper &lt; 1, improper &gt; 1, whole-number = wholes.</li>\n<li>Fraction of a number: <b>divide by the denominator, multiply by the numerator</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand fractions",
   "intro": "Not everyone understands fractions in the same way. Here you'll find the same idea explained with pizza, chocolate, the number line, money, 3D cubes and… how the ancient Egyptians did it. Choose the one that suits you!",
   "tabs": [
    {
     "label": "🍕 Pizza",
     "html": "<p>A whole pizza is the <b>whole</b>. If you cut it into <b>8 equal slices</b>, each slice is <b>1/8</b> of the pizza.</p>\n<p>If you eat 3 slices you've eaten <b>3/8</b>: the <b>denominator</b> (8) says how many slices you cut, the <b>numerator</b> (3) says how many slices you take.</p>\n<p>Careful: the slices must be <b>all equal</b>, otherwise it's not a fair fraction… and someone gets cross!</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"170\" cy=\"140\" r=\"115\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"8\"/>\n<g stroke=\"#b45309\" stroke-width=\"4\">\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"25\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"59\"/><line x1=\"170\" y1=\"140\" x2=\"285\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"251\" y2=\"221\"/>\n<line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"255\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"221\"/><line x1=\"170\" y1=\"140\" x2=\"55\" y2=\"140\"/><line x1=\"170\" y1=\"140\" x2=\"89\" y2=\"59\"/>\n</g>\n<path d=\"M170,140 L170,25 A115,115 0 0,1 251,59 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L251,59 A115,115 0 0,1 285,140 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<path d=\"M170,140 L285,140 A115,115 0 0,1 251,221 Z\" fill=\"#ef4444\" opacity=\"0.75\"/>\n<text x=\"330\" y=\"110\" font-size=\"30\" fill=\"#b91c1c\" font-weight=\"bold\">3 slices eaten</text>\n<line x1=\"330\" y1=\"135\" x2=\"560\" y2=\"135\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<text x=\"330\" y=\"180\" font-size=\"30\" fill=\"#1f2937\" font-weight=\"bold\">8 slices in all</text>\n<text x=\"330\" y=\"240\" font-size=\"34\" fill=\"#1d4ed8\" font-weight=\"bold\">= 3/8</text>\n</svg>"
    },
    {
     "label": "🍫 The chocolate bar",
     "html": "<p>A chocolate bar is already divided into equal squares: it's perfect for fractions!</p>\n<p>This bar has <b>12 squares</b>. If you give away <b>4</b>, you've given away <b>4/12</b> of the bar. But look closely: 4 squares are also <b>one row out of three</b>, that is <b>1/3</b>. So <b>4/12 = 1/3</b>: they're <b>equivalent fractions</b>, the same amount of chocolate written in different ways.</p>",
     "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"40\" y=\"30\" width=\"320\" height=\"180\" rx=\"10\" fill=\"#78350f\"/>\n<g fill=\"#92400e\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"40\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"40\" width=\"70\" height=\"50\"/>\n<rect x=\"50\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"98\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"98\" width=\"70\" height=\"50\"/>\n</g>\n<g fill=\"#fbbf24\" stroke=\"#451a03\" stroke-width=\"3\">\n<rect x=\"50\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"128\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"206\" y=\"156\" width=\"70\" height=\"50\"/><rect x=\"284\" y=\"156\" width=\"70\" height=\"50\"/>\n</g>\n<text x=\"390\" y=\"100\" font-size=\"28\" fill=\"#1f2937\">4/12 given away</text>\n<text x=\"390\" y=\"150\" font-size=\"28\" fill=\"#1f2937\">= 1 row out of 3</text>\n<text x=\"390\" y=\"200\" font-size=\"32\" fill=\"#b45309\" font-weight=\"bold\">= 1/3</text>\n</svg>"
    },
    {
     "label": "📏 The number line",
     "html": "<p>Fractions are <b>numbers</b> and have their own place on the number line, just like 0, 1, 2…</p>\n<p>Divide the stretch between 0 and 1 into <b>4 equal parts</b>: each jump is worth <b>1/4</b>. With 3 jumps you reach <b>3/4</b>, with 4 jumps you reach <b>4/4 = 1</b>, and if you carry on with 5 jumps you go past 1: <b>5/4</b> is an <b>improper</b> fraction, bigger than the whole.</p>",
     "svg": "<svg viewBox=\"0 0 600 200\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"30\" y1=\"110\" x2=\"580\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<g stroke=\"#1f2937\" stroke-width=\"4\">\n<line x1=\"50\" y1=\"95\" x2=\"50\" y2=\"125\"/><line x1=\"160\" y1=\"100\" x2=\"160\" y2=\"120\"/><line x1=\"270\" y1=\"100\" x2=\"270\" y2=\"120\"/><line x1=\"380\" y1=\"100\" x2=\"380\" y2=\"120\"/>\n<line x1=\"490\" y1=\"95\" x2=\"490\" y2=\"125\"/>\n</g>\n<g fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\">\n<path d=\"M50,95 Q105,40 160,95\"/><path d=\"M160,95 Q215,40 270,95\"/><path d=\"M270,95 Q325,40 380,95\"/>\n</g>\n<text x=\"50\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">0</text>\n<text x=\"160\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1/4</text>\n<text x=\"270\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">2/4</text>\n<text x=\"380\" y=\"155\" font-size=\"22\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">3/4</text>\n<text x=\"490\" y=\"155\" font-size=\"22\" text-anchor=\"middle\">1 = 4/4</text>\n<text x=\"215\" y=\"45\" font-size=\"18\" fill=\"#2563eb\">3 jumps of 1/4</text>\n</svg>"
    },
    {
     "label": "💶 Money",
     "html": "<p>With euros you already use fractions without noticing! One euro is worth <b>100 cents</b>.</p>\n<ul>\n<li><b>1/2</b> of a euro = 100 ÷ 2 = <b>50 cents</b> 🪙</li>\n<li><b>1/4</b> of a euro = 100 ÷ 4 = <b>25 cents</b></li>\n<li><b>3/4</b> of a euro = 25 × 3 = <b>75 cents</b></li>\n<li><b>1/10</b> of a euro = <b>10 cents</b></li>\n<li><b>1/100</b> of a euro = <b>1 cent</b>: in fact \"cent\" means exactly \"one of a hundred parts\"!</li>\n</ul>\n<p>Try: if you have €20 and spend 1/4 of your money, how much do you spend? 20 ÷ 4 = <b>€5</b>.</p>"
    },
    {
     "label": "🧊 With 3D cubes",
     "html": "<p>Here are <b>12 cubes</b> arranged in 3 rows of 4. Turn the model and try to see the fractions:</p>\n<ul>\n<li>a row of 4 cubes is <b>1/3</b> of all the cubes (4 out of 12);</li>\n<li>a column of 3 cubes is <b>1/4</b> (3 out of 12);</li>\n<li>6 cubes are <b>half</b>: 6/12 = 1/2.</li>\n</ul>\n<p>Change the numbers with the sliders and look for other fractions!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 3,
      "b": 4
     }
    },
    {
     "label": "𓂀 Like the ancient Egyptians",
     "html": "<p>The ancient Egyptians used almost only fractions with numerator 1 (like 1/2, 1/3, 1/4…), which today we call <b>unit fractions</b>. They wrote the others as sums of different fractions:</p>\n<ul>\n<li>3/4 they wrote as <b>1/2 + 1/4</b></li>\n<li>2/5 they wrote as <b>1/3 + 1/15</b></li>\n</ul>\n<p>It seems strange, but it's really handy for actually sharing things! Example: share <b>3 loaves among 4 people</b>. I cut 2 loaves in half (4 halves) and 1 loaf into quarters (4 quarters): everyone gets <b>1/2 + 1/4</b> of a loaf. Everyone has equal pieces!</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of fractions: tap a node and find out why",
   "nodes": [
    {
     "id": "intero",
     "label": "Whole",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "The whole thing we want to divide: a pizza, a group of objects, a number, a euro…",
     "why": "A fraction only makes sense if we know what the whole is: 1/2 of a small pizza isn't the same as 1/2 of a giant pizza!"
    },
    {
     "id": "frazione",
     "label": "Fraction",
     "x": 50,
     "y": 30,
     "color": "#16a34a",
     "html": "A number showing one or more equal parts of a whole, written with two numbers and a line.",
     "why": "The word comes from the Latin <i>frangere</i>, meaning \"to break\": a fraction is a whole \"broken\" into equal parts. Fractions were born from a practical need: sharing harvests, land, bread and beer fairly."
    },
    {
     "id": "denominatore",
     "label": "Denominator",
     "x": 18,
     "y": 50,
     "color": "#f59e0b",
     "html": "The number under the line: how many equal parts the whole is divided into.",
     "why": "It's called that because it \"names\" the parts: denominator 4 → quarters, 10 → tenths, 100 → hundredths. The bigger the denominator, the smaller the parts."
    },
    {
     "id": "numeratore",
     "label": "Numerator",
     "x": 82,
     "y": 50,
     "color": "#ef4444",
     "html": "The number above the line: how many parts we take.",
     "why": "It comes from \"numerate\", that is count: it counts the parts we take."
    },
    {
     "id": "unita",
     "label": "Unit fraction",
     "x": 18,
     "y": 76,
     "color": "#a855f7",
     "html": "A fraction with numerator 1, like 1/2, 1/5, 1/10.",
     "why": "They're the oldest fractions: the Egyptians, almost 4,000 years ago, used mostly these. The Rhind papyrus (about 1650 BC), an exercise book of a scribe called Ahmes, contains tables for turning other fractions into sums of unit fractions."
    },
    {
     "id": "tipi",
     "label": "Proper, improper, whole-number",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "Proper: less than the whole (3/4). Improper: more (5/4). Whole-number: it's a whole number (8/4 = 2).",
     "why": "Just compare numerator and denominator: if you take fewer parts than the whole was divided into, you don't reach the whole; if you take more, you need a second whole."
    },
    {
     "id": "equivalenti",
     "label": "Equivalent fractions",
     "x": 82,
     "y": 76,
     "color": "#14b8a6",
     "html": "Different fractions showing the same amount: 1/2 = 2/4 = 4/8.",
     "why": "If you cut every part in two, the total parts double and so do the ones you take: the amount doesn't change. That's why you can multiply (or divide) the numerator and denominator by the same number."
    },
    {
     "id": "storia",
     "label": "The fraction bar",
     "x": 50,
     "y": 92,
     "color": "#64748b",
     "html": "The way of writing fractions with one number above another, separated by a line.",
     "why": "The Babylonians wrote parts in base 60 (as we still do with minutes and seconds). The fraction bar was used by Arab mathematicians in the Middle Ages and arrived in Europe thanks to <b>Leonardo Fibonacci</b> of Pisa, who used it in his <i>Liber Abaci</i> of 1202."
    }
   ],
   "edges": [
    [
     "intero",
     "frazione",
     "divided into equal parts →"
    ],
    [
     "frazione",
     "denominatore",
     "below the line"
    ],
    [
     "frazione",
     "numeratore",
     "above the line"
    ],
    [
     "frazione",
     "tipi",
     "can be"
    ],
    [
     "denominatore",
     "unita",
     "with numerator 1"
    ],
    [
     "numeratore",
     "equivalenti",
     "× same number"
    ],
    [
     "denominatore",
     "equivalenti",
     "× same number"
    ],
    [
     "frazione",
     "storia",
     "is written with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: types of fraction and calculations",
   "questions": [
    {
     "type": "mc",
     "q": "7/4 is a fraction that is…",
     "options": [
      "proper",
      "improper",
      "whole-number"
     ],
     "answer": 1,
     "explain": "The numerator (7) is bigger than the denominator (4) but isn't a multiple of it: improper."
    },
    {
     "type": "num",
     "q": "What is 1/5 of 35?",
     "answer": 7,
     "explain": "35 ÷ 5 = 7."
    },
    {
     "type": "mc",
     "q": "Which fraction is equivalent to 2/3?",
     "options": [
      "4/6",
      "3/2",
      "2/6"
     ],
     "answer": 0,
     "explain": "Multiply numerator and denominator by 2: 4/6."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Fraction",
   "d": "One or more equal parts of a whole."
  },
  {
   "t": "Numerator",
   "d": "The number above the line: how many parts are taken."
  },
  {
   "t": "Denominator",
   "d": "The number below the line: how many equal parts the whole is divided into."
  },
  {
   "t": "Unit fraction",
   "d": "A single part of the whole, with numerator 1 (e.g. 1/4)."
  },
  {
   "t": "Proper fraction",
   "d": "Less than one whole: numerator smaller than the denominator."
  },
  {
   "t": "Improper fraction",
   "d": "More than one whole: numerator bigger than the denominator."
  },
  {
   "t": "Whole-number fraction",
   "d": "Equal to one or more wholes: numerator a multiple of the denominator."
  },
  {
   "t": "Equivalent fractions",
   "d": "Different fractions showing the same amount."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "A pizza is cut into 6 equal parts and you eat 1. What fraction have you eaten?",
    "options": [
     "6/1",
     "1/6",
     "5/6"
    ],
    "answer": 1,
    "explain": "1 part out of 6: 1/6."
   },
   {
    "type": "mc",
    "q": "Which fraction is a whole number?",
    "options": [
     "3/4",
     "9/3",
     "5/3"
    ],
    "answer": 1,
    "explain": "9/3 = 3 wholes."
   },
   {
    "type": "tf",
    "q": "1/3 is bigger than 1/6.",
    "answer": true,
    "explain": "Same numerator: thirds are bigger pieces than sixths."
   },
   {
    "type": "num",
    "q": "What is 3/4 of 40?",
    "answer": 30,
    "explain": "40 ÷ 4 = 10; 10 × 3 = 30."
   },
   {
    "type": "mc",
    "q": "Which fraction is the biggest?",
    "options": [
     "2/7",
     "5/7",
     "3/7"
    ],
    "answer": 1,
    "explain": "Same denominator: the larger numerator wins."
   },
   {
    "type": "text",
    "q": "What is the number under the fraction bar called?",
    "answer": [
     "denominator",
     "the denominator"
    ],
    "explain": "The denominator."
   },
   {
    "type": "tf",
    "q": "4/8 and 1/2 are equivalent fractions.",
    "answer": true,
    "explain": "Dividing 4/8 by 4 gives 1/2."
   },
   {
    "type": "num",
    "q": "How many fifths make one whole?",
    "answer": 5,
    "explain": "5/5 = 1."
   },
   {
    "type": "order",
    "q": "Order from smallest to biggest.",
    "items": [
     "1/8",
     "1/4",
     "1/2",
     "3/2"
    ],
    "explain": "The bigger the denominator, the smaller the parts; 3/2 is more than a whole."
   },
   {
    "type": "num",
    "q": "Sara has 18 sweets and eats 2/9 of them. How many does she eat?",
    "answer": 4,
    "explain": "18 ÷ 9 = 2; 2 × 2 = 4."
   }
  ],
  "gen": [
   [
    "fracOf",
    2
   ],
   [
    "fracEquiv",
    2
   ]
  ]
 }
});
