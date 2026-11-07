TOPIC('en', {
 "id": "p5-mat-numeri-relativi-intro",
 "title": "Relative numbers",
 "intro": "In winter the thermometer shows <b>−3 °C</b>, the lift goes down to floor <b>−1</b>, the Dead Sea is <b>430 metres below</b> sea level. For all these things we need numbers that are \"below zero\": <b>negative numbers</b>. Together with the positive ones and zero they form the <b>relative numbers</b> (also called <b>integers</b>).",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Positive, negative and zero",
   "html": "<p>Until now you have used <b>natural numbers</b>: 0, 1, 2, 3… But sometimes we need to show quantities <b>below zero</b>, or <b>in the opposite direction</b>.</p>\n<ul>\n<li><b>Positive numbers</b> are greater than zero: they are written with the sign <b>+</b> (or without a sign): <b>+1, +2, +15</b>.</li>\n<li><b>Negative numbers</b> are less than zero: they are <b>always</b> written with the sign <b>−</b>: <b>−1, −2, −15</b>. We read them \"minus one\", \"minus two\"…</li>\n<li><b>Zero</b> is neither positive nor negative: it is the <b>starting point</b> (the origin).</li>\n</ul>\n<p>Together they form the <b>relative numbers</b> (or <b>integers</b>). They are called \"relative\" because their value is <b>relative</b> to a reference point: zero.</p>"
  },
  {
   "type": "svg",
   "title": "The number line of relative numbers",
   "svg": "<svg viewBox=\"0 0 640 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"220\" fill=\"#f8fafc\"/>\n<line x1=\"20\" y1=\"110\" x2=\"620\" y2=\"110\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n<polygon points=\"620,100 638,110 620,120\" fill=\"#1f2937\"/>\n<rect x=\"20\" y=\"102\" width=\"300\" height=\"16\" fill=\"#bfdbfe\" opacity=\"0.6\"/>\n<rect x=\"320\" y=\"102\" width=\"300\" height=\"16\" fill=\"#fecaca\" opacity=\"0.6\"/>\n<g stroke=\"#1f2937\" stroke-width=\"3\">\n<line x1=\"70\" y1=\"98\" x2=\"70\" y2=\"122\"/><line x1=\"120\" y1=\"98\" x2=\"120\" y2=\"122\"/><line x1=\"170\" y1=\"98\" x2=\"170\" y2=\"122\"/><line x1=\"220\" y1=\"98\" x2=\"220\" y2=\"122\"/><line x1=\"270\" y1=\"98\" x2=\"270\" y2=\"122\"/>\n<line x1=\"320\" y1=\"90\" x2=\"320\" y2=\"130\"/>\n<line x1=\"370\" y1=\"98\" x2=\"370\" y2=\"122\"/><line x1=\"420\" y1=\"98\" x2=\"420\" y2=\"122\"/><line x1=\"470\" y1=\"98\" x2=\"470\" y2=\"122\"/><line x1=\"520\" y1=\"98\" x2=\"520\" y2=\"122\"/><line x1=\"570\" y1=\"98\" x2=\"570\" y2=\"122\"/>\n</g>\n<g font-size=\"18\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"70\" y=\"152\" fill=\"#1d4ed8\">−5</text><text x=\"120\" y=\"152\" fill=\"#1d4ed8\">−4</text><text x=\"170\" y=\"152\" fill=\"#1d4ed8\">−3</text><text x=\"220\" y=\"152\" fill=\"#1d4ed8\">−2</text><text x=\"270\" y=\"152\" fill=\"#1d4ed8\">−1</text>\n<text x=\"320\" y=\"152\" fill=\"#1f2937\">0</text>\n<text x=\"370\" y=\"152\" fill=\"#b91c1c\">+1</text><text x=\"420\" y=\"152\" fill=\"#b91c1c\">+2</text><text x=\"470\" y=\"152\" fill=\"#b91c1c\">+3</text><text x=\"520\" y=\"152\" fill=\"#b91c1c\">+4</text><text x=\"570\" y=\"152\" fill=\"#b91c1c\">+5</text>\n</g>\n<text x=\"170\" y=\"60\" font-size=\"18\" text-anchor=\"middle\" fill=\"#1d4ed8\" font-weight=\"bold\">← NEGATIVE</text>\n<text x=\"470\" y=\"60\" font-size=\"18\" text-anchor=\"middle\" fill=\"#b91c1c\" font-weight=\"bold\">POSITIVE →</text>\n<text x=\"320\" y=\"60\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\">origin</text>\n<path d=\"M270,90 Q320,40 370,90\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"3\" stroke-dasharray=\"6 4\"/>\n<text x=\"320\" y=\"196\" font-size=\"15\" text-anchor=\"middle\" fill=\"#15803d\">−1 and +1 are opposites: same distance from 0, on the opposite side</text>\n</svg>",
   "caption": "To the right of zero the positives, to the left the negatives. The further right you go, the greater the number."
  },
  {
   "type": "text",
   "title": "Comparing relative numbers",
   "html": "<p>On the line, <b>a number is greater than all those on its left</b>.</p>\n<ul>\n<li>Every positive number is greater than zero and than every negative: <b>+1 &gt; −100</b>.</li>\n<li>Between two negatives the <b>greater is the one closer to zero</b>: <b>−2 &gt; −7</b>. (Think of temperature: −2 °C is less cold than −7 °C!)</li>\n</ul>\n<p>The <b>absolute value</b> of a number is its <b>distance from zero</b>, without the sign. It is written between two bars: |−7| = 7, |+7| = 7.</p>\n<p>Two numbers with the same absolute value and different sign are <b>opposites</b>: +4 and −4. Their sum is <b>zero</b>.</p>"
  },
  {
   "type": "widget",
   "title": "Explore the line",
   "widget": "numberLine",
   "options": {
    "min": -10,
    "max": 10,
    "step": 1,
    "marks": [
     -6,
     4
    ]
   },
   "caption": "Make jumps on the line: to the right you add, to the left you subtract. From −6 to +4, how many jumps are needed? (10)"
  },
  {
   "type": "example",
   "title": "Practical example: the thermometer",
   "html": "<p>At 7 in the morning, in Cortina, the thermometer shows <b>−4 °C</b>. At noon the temperature has <b>risen by 9 degrees</b>. How many degrees is it?</p>\n<p>I start from −4 and go up by 9: −4 + 9 = <b>+5 °C</b>.</p>\n<p>On the line: from −4 I make 4 jumps to reach 0, then 5 more jumps to +5. In all 4 + 5 = 9 jumps. ✅</p>\n<p>At night it falls by 7 degrees: +5 − 7 = <b>−2 °C</b>.</p>"
  },
  {
   "type": "example",
   "title": "Practical example: the skyscraper lift",
   "html": "<p>In a building the ground floor is <b>0</b>, the garages are on floors <b>−1</b> and <b>−2</b>.</p>\n<ul>\n<li>Luca is on floor +3 and goes down to garage −2: how many floors does he travel? From +3 to 0 is 3 floors, from 0 to −2 another 2: in all <b>5 floors</b>.</li>\n<li>In Italy, as in Europe, the ground floor is 0 and the \"first floor\" is the one above. In the <b>United States</b>, instead, the ground floor is often called the <b>1st floor</b>! That is why it is important to know where zero is: the numbers are <b>relative</b> to the reference point.</li>\n</ul>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: reading and comparing",
   "questions": [
    {
     "type": "mc",
     "q": "Which number is greater?",
     "options": [
      "−8",
      "−3",
      "−5"
     ],
     "answer": 1,
     "explain": "Among negatives the greater is the one closest to zero: −3."
    },
    {
     "type": "tf",
     "q": "Zero is a positive number.",
     "answer": false,
     "explain": "Zero is neither positive nor negative."
    },
    {
     "type": "num",
     "q": "What is the opposite of +6?",
     "answer": -6,
     "explain": "Same distance from zero, opposite sign: −6."
    },
    {
     "type": "num",
     "q": "What is |−12| (absolute value)?",
     "answer": 12,
     "explain": "The absolute value is the distance from zero: 12."
    }
   ]
  },
  {
   "type": "text",
   "title": "First calculations: going up and down",
   "html": "<p>We can already do simple additions and subtractions by thinking of the <b>number line</b> (or the thermometer):</p>\n<ul>\n<li><b>Adding</b> a positive number = <b>going up</b> / moving right: −3 + 5 = +2.</li>\n<li><b>Subtracting</b> a positive number = <b>going down</b> / moving left: 2 − 6 = −4.</li>\n<li><b>Adding two negatives</b>: it's like having two debts, the debt grows! (−3) + (−4) = −7.</li>\n<li>Adding two <b>opposites</b> always gives zero: (+5) + (−5) = 0.</li>\n</ul>\n<p><b>Rule for adding</b> two relative numbers:</p>\n<ol>\n<li>if they have the <b>same sign</b>: add the absolute values and keep the sign. (+3)+(+4)=+7; (−3)+(−4)=−7.</li>\n<li>if they have <b>different signs</b>: take the difference of the absolute values and use the sign of the number \"further from zero\". (−9)+(+4) = −5; (+9)+(−4) = +5.</li>\n</ol>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Record cold",
   "html": "<p>The lowest temperature ever measured with instruments on Earth is <b>−89.2 °C</b>, at the Russian station <b>Vostok</b> in Antarctica, on 21 July 1983. In Italy values around <b>−50 °C</b> have been recorded in hollows of the Dolomites such as Busa Fradusta (Pale di San Martino). And in space? The lowest possible temperature, <b>absolute zero</b>, is <b>−273.15 °C</b>: nothing can be colder!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Below sea level",
   "html": "<p><b>Altitudes</b> are also relative numbers, measured from <b>sea level</b> (zero). Everest is at <b>+8,849 m</b>; the shore of the <b>Dead Sea</b> is the lowest point on dry land, at about <b>−430 m</b> (and it sinks every year). The <b>Mariana Trench</b>, in the Pacific Ocean, reaches almost <b>−11,000 m</b>! In Italy, some areas near Ferrara and Venice are a few metres <b>below</b> sea level.</p>"
  },
  {
   "type": "svg",
   "title": "From Everest to the Mariana Trench",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"160\" fill=\"#e0f2fe\"/>\n<rect y=\"160\" width=\"640\" height=\"160\" fill=\"#1e3a8a\"/>\n<polygon points=\"40,160 160,40 280,160\" fill=\"#78716c\"/>\n<polygon points=\"140,60 160,40 180,60\" fill=\"#ffffff\"/>\n<polygon points=\"380,160 470,300 560,160\" fill=\"#0f172a\"/>\n<line x1=\"0\" y1=\"160\" x2=\"640\" y2=\"160\" stroke=\"#0284c7\" stroke-width=\"4\"/>\n<text x=\"600\" y=\"152\" font-size=\"16\" text-anchor=\"end\" fill=\"#0369a1\" font-weight=\"bold\">0 m sea level</text>\n<text x=\"160\" y=\"30\" font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">Everest +8,849 m</text>\n<text x=\"330\" y=\"150\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">Dead Sea −430 m</text>\n<circle cx=\"330\" cy=\"164\" r=\"6\" fill=\"#facc15\"/>\n<text x=\"470\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">Mariana Trench</text>\n<text x=\"470\" y=\"222\" font-size=\"15\" text-anchor=\"middle\" fill=\"#ffffff\">about −11,000 m</text>\n<text x=\"110\" y=\"250\" font-size=\"16\" fill=\"#bfdbfe\">below zero → negatives</text>\n<text x=\"110\" y=\"100\" font-size=\"16\" fill=\"#1f2937\">above zero → positives</text>\n</svg>",
   "caption": "Heights above sea level are positive, depths below are negative (drawing not to scale)."
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>Relative</b> numbers = positives (+), negatives (−) and zero.</li>\n<li>On the line, further <b>right</b> = <b>greater</b>. Among negatives the one closer to 0 wins.</li>\n<li><b>Absolute value</b> = distance from 0. <b>Opposites</b>: same distance, different sign; added together they give 0.</li>\n<li>Same sign: add and keep the sign. Different signs: subtract and take the sign of the \"stronger\" one.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand negative numbers",
   "intro": "Negative numbers were hard even for great mathematicians! Try to understand them with money, coloured counters, Chinese rods or the 3D lift.",
   "tabs": [
    {
     "label": "💰 Money and debts",
     "html": "<p>Think of positive numbers as the <b>money you have</b> and of negatives as <b>debts</b> (money you must give back).</p>\n<ul>\n<li>You have €10 and owe €4 to your sister: 10 + (−4) = <b>€6</b> really yours.</li>\n<li>You have €3 but owe €8: 3 + (−8) = <b>−5</b>: you are still €5 in debt.</li>\n<li>Two debts add up: (−5) + (−2) = <b>−7</b>: you owe €7.</li>\n</ul>\n<p>It was exactly like this that the Indian mathematician <b>Brahmagupta</b>, in <b>AD 628</b>, explained the rules of negative numbers: \"fortunes\" and \"debts\"!</p>"
    },
    {
     "label": "🔴🔵 The counters",
     "html": "<p>Use <b>red counters</b> (+1) and <b>blue counters</b> (−1). A red and a blue together <b>cancel out</b>: they make zero (called a \"zero pair\").</p>\n<p>Example: (+5) + (−3). Put 5 reds and 3 blues, remove the zero pairs: <b>2 reds</b> are left → <b>+2</b>.</p>\n<p>This method is widely used in schools in Singapore and English-speaking countries (\"zero pairs\").</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fafafa\"/>\n<g stroke=\"#1f2937\" stroke-width=\"2\">\n<circle cx=\"60\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"120\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"180\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"240\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/><circle cx=\"300\" cy=\"70\" r=\"24\" fill=\"#ef4444\"/>\n<circle cx=\"60\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"120\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"180\" cy=\"140\" r=\"24\" fill=\"#3b82f6\"/>\n</g>\n<g font-size=\"22\" fill=\"#ffffff\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"60\" y=\"78\">+</text><text x=\"120\" y=\"78\">+</text><text x=\"180\" y=\"78\">+</text><text x=\"240\" y=\"78\">+</text><text x=\"300\" y=\"78\">+</text>\n<text x=\"60\" y=\"148\">−</text><text x=\"120\" y=\"148\">−</text><text x=\"180\" y=\"148\">−</text>\n</g>\n<rect x=\"30\" y=\"40\" width=\"180\" height=\"130\" rx=\"14\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"4\" stroke-dasharray=\"8 6\"/>\n<text x=\"120\" y=\"200\" font-size=\"16\" text-anchor=\"middle\" fill=\"#15803d\">3 zero pairs = 0</text>\n<text x=\"450\" y=\"90\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1f2937\">(+5) + (−3)</text>\n<text x=\"450\" y=\"140\" font-size=\"30\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">= +2</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Chinese rods",
     "html": "<p>More than 2000 years ago, in the Chinese book <b>\"The Nine Chapters on the Mathematical Art\"</b>, calculators used <b>rods</b>: <b>red</b> ones for positive numbers and <b>black</b> ones for negative numbers. They already had rules to add and subtract them!</p>\n<p>Curious: today in accounting we still say \"being <b>in the red</b>\" to mean \"having a debt\". In China, however, the colours were the other way round: red was positive!</p>\n<p>In Europe, instead, many mathematicians considered negative numbers \"absurd\" or \"false\" until the <b>16th–17th centuries</b>.</p>"
    },
    {
     "label": "🧊 The 3D skyscraper",
     "html": "<p>Imagine this model of cubes as a <b>skyscraper</b> seen from the side: each cube is a floor. The street level is <b>0</b>. The floors above the street are positive, those dug below (garages, cellars) negative.</p>\n<p>If the building has 4 floors above and 2 below, from the lowest garage (−2) to the top floor (+4) there are 4 − (−2) = <b>6 floors</b> of difference. Use the sliders to build different towers and count the floors!</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 6,
      "b": 1
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of relative numbers",
   "nodes": [
    {
     "id": "naturali",
     "label": "Natural numbers",
     "x": 50,
     "y": 6,
     "color": "#64748b",
     "html": "0, 1, 2, 3… the numbers for counting.",
     "why": "They are the first numbers invented by humans, to count objects. But with them you can't always subtract: 3 − 5 has no result among the naturals!"
    },
    {
     "id": "relativi",
     "label": "Relative numbers",
     "x": 50,
     "y": 28,
     "color": "#2563eb",
     "html": "Positives, negatives and zero: …, −2, −1, 0, +1, +2, …",
     "why": "They were \"invented\" to always be able to subtract and to measure quantities that have two directions (above/below, gain/loss, hot/cold)."
    },
    {
     "id": "zero",
     "label": "Zero",
     "x": 18,
     "y": 28,
     "color": "#1f2937",
     "html": "The reference point: neither positive nor negative.",
     "why": "Zero as a real number was defined in India: <b>Brahmagupta</b> (AD 628) wrote the rules for calculating with zero and negatives. It arrived in Europe with the Hindu-Arabic numerals, thanks also to Fibonacci (1202)."
    },
    {
     "id": "positivi",
     "label": "Positives",
     "x": 82,
     "y": 50,
     "color": "#dc2626",
     "html": "Greater than zero: +1, +2, …",
     "why": "They correspond to the natural numbers (except 0): that is why the + sign can also be left out."
    },
    {
     "id": "negativi",
     "label": "Negatives",
     "x": 18,
     "y": 50,
     "color": "#3b82f6",
     "html": "Less than zero: −1, −2, …",
     "why": "Used in China over 2000 years ago (black rods) and in India as \"debts\". In Europe they were fully accepted only between the 16th and 17th centuries."
    },
    {
     "id": "retta",
     "label": "Number line",
     "x": 50,
     "y": 56,
     "color": "#16a34a",
     "html": "A line on which each number has its place: positives on the right, negatives on the left.",
     "why": "Putting numbers on a line, with zero in the centre, spread with the analytic geometry of <b>Descartes</b> (1637): this way negatives become simple \"points on the other side\"."
    },
    {
     "id": "assoluto",
     "label": "Absolute value",
     "x": 25,
     "y": 80,
     "color": "#a855f7",
     "html": "The distance of a number from zero: |−5| = 5.",
     "why": "A distance cannot be negative: that is why the absolute value has no sign. The symbol |x| was introduced by the German mathematician <b>Karl Weierstrass</b> in 1841."
    },
    {
     "id": "opposti",
     "label": "Opposite numbers",
     "x": 55,
     "y": 80,
     "color": "#f97316",
     "html": "Same absolute value, different sign: +3 and −3. Added together they give 0.",
     "why": "They are symmetrical about zero on the line, like an object and its image in a mirror."
    },
    {
     "id": "usi",
     "label": "Uses in life",
     "x": 85,
     "y": 80,
     "color": "#14b8a6",
     "html": "Temperatures, altitudes, floors, bank accounts, years BC/AD, scores.",
     "why": "Whenever a quantity has a reference point and two possible directions, relative numbers are the perfect tool."
    }
   ],
   "edges": [
    [
     "naturali",
     "relativi",
     "extend in"
    ],
    [
     "relativi",
     "zero",
     "reference"
    ],
    [
     "relativi",
     "positivi",
     "includes"
    ],
    [
     "relativi",
     "negativi",
     "includes"
    ],
    [
     "relativi",
     "retta",
     "are represented on the"
    ],
    [
     "retta",
     "assoluto",
     "distance from 0"
    ],
    [
     "retta",
     "opposti",
     "symmetrical"
    ],
    [
     "positivi",
     "usi",
     "are used for"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: adding relative numbers",
   "questions": [
    {
     "type": "num",
     "q": "(−6) + (+10) = ?",
     "answer": 4,
     "explain": "Different signs: 10 − 6 = 4, the positive prevails: +4."
    },
    {
     "type": "num",
     "q": "(−4) + (−5) = ?",
     "answer": -9,
     "explain": "Same sign: 4 + 5 = 9, minus sign: −9."
    },
    {
     "type": "num",
     "q": "The temperature is −2 °C and falls by 3 degrees. What does the thermometer show?",
     "answer": -5,
     "unit": "°C",
     "explain": "−2 − 3 = −5 °C."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Relative numbers",
   "d": "The set of positive numbers, negative numbers and zero."
  },
  {
   "t": "Positive number",
   "d": "A number greater than zero, with the + sign (e.g. +7)."
  },
  {
   "t": "Negative number",
   "d": "A number less than zero, always with the − sign (e.g. −7)."
  },
  {
   "t": "Origin",
   "d": "The point of the line that corresponds to zero."
  },
  {
   "t": "Absolute value",
   "d": "The distance of a number from zero, without the sign: |−7| = 7."
  },
  {
   "t": "Opposite numbers",
   "d": "Numbers with the same absolute value and different sign (+4 and −4)."
  },
  {
   "t": "Sea level",
   "d": "The zero from which altitudes (+) and depths (−) are measured."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "Which number is smaller?",
    "options": [
     "−1",
     "0",
     "−10"
    ],
    "answer": 2,
    "explain": "−10 is the furthest from zero towards the left: it is the smaller."
   },
   {
    "type": "tf",
    "q": "−5 is greater than −2.",
    "answer": false,
    "explain": "−2 is closer to zero: −2 > −5."
   },
   {
    "type": "order",
    "q": "Put in order from smallest to greatest.",
    "items": [
     "−7",
     "−3",
     "0",
     "+2",
     "+5"
    ],
    "explain": "On the line from left to right: −7, −3, 0, +2, +5."
   },
   {
    "type": "num",
    "q": "The thermometer shows +3 °C, then the temperature falls by 8 degrees. What is the temperature?",
    "answer": -5,
    "unit": "°C",
    "explain": "3 − 8 = −5 °C."
   },
   {
    "type": "num",
    "q": "You are on floor −2 and go up 5 floors. Which floor do you reach?",
    "answer": 3,
    "explain": "−2 + 5 = +3."
   },
   {
    "type": "num",
    "q": "What is |−15|?",
    "answer": 15,
    "explain": "The absolute value is the distance from zero: 15."
   },
   {
    "type": "mc",
    "q": "What is the opposite of −9?",
    "options": [
     "+9",
     "−9",
     "0"
    ],
    "answer": 0,
    "explain": "The opposite has the same absolute value and the contrary sign: +9."
   },
   {
    "type": "num",
    "q": "(+7) + (−7) = ?",
    "answer": 0,
    "explain": "The sum of two opposites is zero."
   },
   {
    "type": "mc",
    "q": "Which Indian mathematician wrote the rules for zero and negatives in AD 628?",
    "options": [
     "Pythagoras",
     "Brahmagupta",
     "Archimedes"
    ],
    "answer": 1,
    "explain": "Brahmagupta, in the Brahmasphutasiddhanta."
   },
   {
    "type": "tf",
    "q": "Zero is a negative number.",
    "answer": false,
    "explain": "Zero is neither positive nor negative."
   },
   {
    "type": "num",
    "q": "During the day it is +6 °C, at night −4 °C. By how many degrees did the temperature fall?",
    "answer": 10,
    "unit": "°C",
    "explain": "From +6 to 0 is 6 degrees, from 0 to −4 another 4: 10 degrees."
   }
  ],
  "gen": [
   [
    "intAdd",
    3
   ]
  ]
 }
});
