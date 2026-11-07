TOPIC('en', {
 "id": "p2-mat-numeri-100",
 "title": "Numbers up to 100",
 "intro": "After 20 the numbers keep going… all the way to <b>100</b>! 💯 Let's learn to count them with <b>tens</b> and <b>ones</b>, to make <b>jumps</b> and to work out which number is bigger.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "Tens and ones",
   "html": "<p>When we have <b>10 ones</b>, we put them together in a bundle: it's a <b>ten</b>! 📦</p>\n<p><b>10 ones = 1 ten</b></p>\n<p>Every two-digit number is made of <b>tens</b> and <b>ones</b>:</p>\n<ul>\n<li><b>47</b> = <span style=\"color:#dc2626\"><b>4</b> tens</span> and <span style=\"color:#2563eb\"><b>7</b> ones</span> = 40 + 7</li>\n<li><b>30</b> = 3 tens and 0 ones</li>\n<li><b>85</b> = 8 tens and 5 ones = 80 + 5</li>\n</ul>\n<p>The digit on the <b>left</b> counts the tens (T), the one on the <b>right</b> counts the ones (O). The <b>position</b> is really important: 47 and 74 are very different numbers!</p>"
  },
  {
   "type": "svg",
   "title": "47 with rods and cubes",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/>\n<g fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"2\">\n<rect x=\"40\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"80\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n<rect x=\"120\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/><rect x=\"160\" y=\"40\" width=\"28\" height=\"200\" rx=\"4\"/>\n</g>\n<g stroke=\"#991b1b\" stroke-width=\"1.5\">\n<line x1=\"40\" y1=\"60\" x2=\"188\" y2=\"60\"/><line x1=\"40\" y1=\"80\" x2=\"188\" y2=\"80\"/><line x1=\"40\" y1=\"100\" x2=\"188\" y2=\"100\"/><line x1=\"40\" y1=\"120\" x2=\"188\" y2=\"120\"/>\n<line x1=\"40\" y1=\"140\" x2=\"188\" y2=\"140\"/><line x1=\"40\" y1=\"160\" x2=\"188\" y2=\"160\"/><line x1=\"40\" y1=\"180\" x2=\"188\" y2=\"180\"/><line x1=\"40\" y1=\"200\" x2=\"188\" y2=\"200\"/><line x1=\"40\" y1=\"220\" x2=\"188\" y2=\"220\"/>\n</g>\n<g fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"230\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"335\" y=\"200\" width=\"28\" height=\"28\" rx=\"3\"/>\n<rect x=\"230\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"265\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/><rect x=\"300\" y=\"165\" width=\"28\" height=\"28\" rx=\"3\"/>\n</g>\n<text x=\"114\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">4 tens = 40</text>\n<text x=\"296\" y=\"275\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">7 ones = 7</text>\n<rect x=\"400\" y=\"70\" width=\"170\" height=\"150\" rx=\"14\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n<text x=\"450\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#991b1b\" font-weight=\"bold\">T</text>\n<text x=\"520\" y=\"105\" font-size=\"22\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">O</text>\n<text x=\"450\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"bold\">4</text>\n<text x=\"520\" y=\"180\" font-size=\"64\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"bold\">7</text>\n</svg>",
   "caption": "Each red rod has 10 cubes: it's a ten. The loose blue cubes are the ones."
  },
  {
   "type": "3d",
   "title": "Build numbers with 3D cubes",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 47
   },
   "caption": "Turn the model and change the number with the slider: watch how the tens rods grow."
  },
  {
   "type": "widget",
   "title": "The abacus",
   "widget": "abacus",
   "options": {
    "columns": [
     "T",
     "O"
    ],
    "value": 47
   },
   "caption": "Add and remove beads. When the ones reach 10, they become 1 bead in the tens!"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: tens and ones",
   "questions": [
    {
     "type": "num",
     "q": "How many tens are there in 63?",
     "answer": 6,
     "explain": "63 = 6 tens and 3 ones."
    },
    {
     "type": "num",
     "q": "What number is 5 tens and 2 ones?",
     "answer": 52,
     "explain": "50 + 2 = 52."
    },
    {
     "type": "tf",
     "q": "In 38 the digit 8 shows the tens.",
     "answer": false,
     "explain": "The 8 is on the right: it shows the ones. There are 3 tens."
    }
   ]
  },
  {
   "type": "text",
   "title": "Counting in jumps",
   "html": "<p>Counting one at a time up to 100 takes ages! We can make <b>jumps</b> 🦘:</p>\n<ul>\n<li>jumps of <b>10</b>: 10, 20, 30, 40, 50, 60, 70, 80, 90, <b>100</b></li>\n<li>jumps of <b>5</b>: 5, 10, 15, 20, 25, 30…</li>\n<li>jumps of <b>2</b>: 2, 4, 6, 8, 10, 12… these are the <b>even</b> numbers!</li>\n</ul>\n<p>The numbers you don't land on when jumping in 2s from 0 (1, 3, 5, 7…) are the <b>odd</b> numbers. Trick: look at the ones digit! If it's 0, 2, 4, 6 or 8, the number is even.</p>"
  },
  {
   "type": "widget",
   "title": "Jumps of 10 on the number line",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 100,
    "step": 10,
    "marks": [
     10,
     20,
     30,
     40,
     50,
     60,
     70,
     80,
     90,
     100
    ]
   },
   "caption": "Every jump adds a ten. With 10 jumps you reach 100!"
  },
  {
   "type": "text",
   "title": "Before, after and comparing",
   "html": "<ul>\n<li>The number <b>before</b> a number is the one that comes <b>just before</b> it (−1): the number before 40 is <b>39</b>.</li>\n<li>The number <b>after</b> is the one that comes <b>just after</b> it (+1): the number after 59 is <b>60</b>.</li>\n</ul>\n<p>To <b>compare</b> two numbers:</p>\n<ol>\n<li>first look at the <b>tens</b>: the one with more wins → 72 &gt; 58;</li>\n<li>if the tens are the same, look at the <b>ones</b> → 46 &gt; 43.</li>\n</ol>\n<p>The sign <b>&gt;</b> means \"greater than\", <b>&lt;</b> means \"less than\", <b>=</b> means \"equal to\". The crocodile's mouth 🐊 always opens towards the bigger number!</p>"
  },
  {
   "type": "example",
   "title": "Example: Tommaso's stickers ⚽",
   "html": "<p>Tommaso has <b>6 packets</b> of 10 stickers and <b>8 loose stickers</b>.</p>\n<p>How many stickers does he have? 6 tens and 8 ones = 60 + 8 = <b>68</b> stickers.</p>\n<p>His friend Elia has <b>71</b>. Who has more? Elia has 7 tens, Tommaso 6: <b>71 &gt; 68</b>. Elia wins!</p>"
  },
  {
   "type": "example",
   "title": "Example: eggs at the market 🥚",
   "html": "<p>The farmer puts eggs in boxes of <b>10</b>. He has filled <b>9</b> boxes and has <b>4</b> eggs left over.</p>\n<p>Eggs altogether: 9 tens and 4 ones = <b>94</b>.</p>\n<p>How many are missing to reach 100? After 94 comes 95, then 96, 97, 98, 99, 100: <b>6</b> are missing!</p>"
  },
  {
   "type": "text",
   "title": "Reading and writing numbers in words",
   "html": "<p>The tens are called: ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, <b>one hundred</b>.</p>\n<p>Then you add the ones with a <b>hyphen</b> (a little dash): twenty + three = <b>twenty-three</b>, forty + five = <b>forty-five</b>.</p>\n<p>⚠️ Watch the spelling of some tens: it's <b>forty</b> (not \"fourty\") and <b>fifty</b> (not \"fivety\")!</p>\n<p>And the numbers from 11 to 19 have special names: eleven, twelve, thirteen… nineteen. 😉</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>In <b>French</b> the number 80 is <i>quatre-vingts</i>, that is \"<b>four times twenty</b>\"! 🇫🇷 And 90 is \"four-twenty-ten\".</p>\n<p>It's a leftover from an ancient way of counting in groups of 20, perhaps using fingers <b>and</b> toes. The <b>Maya</b> in America also counted in groups of 20. Old English had something similar: a \"score\" meant 20!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>Why do we count in groups of <b>10</b>? Most likely because we have <b>10 fingers</b>! 🖐️🖐️</p>\n<p>The digits we use (0, 1, 2… 9) were born in <b>India</b>, passed to the <b>Arabs</b> and reached Italy thanks to <b>Leonardo Fibonacci</b> of Pisa, who explained them in his book <i>Liber Abaci</i> in <b>1202</b>. Before that, people used Roman numerals: 47 was written XLVII!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>10 ones = 1 ten</b>; <b>10 tens = 1 hundred = 100</b>.</li>\n<li>In two-digit numbers: <b>tens</b> on the left, <b>ones</b> on the right.</li>\n<li>To compare: first the tens, then the ones.</li>\n<li>Number before = −1, number after = +1.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand numbers up to 100",
   "intro": "You can see, touch and hear numbers… Choose the way that suits you.",
   "tabs": [
    {
     "label": "💶 With money",
     "html": "<p>You have <b>10-cent</b> and <b>1-cent</b> coins.</p>\n<ul>\n<li>The 10-cent coins are the <b>tens</b> 🪙.</li>\n<li>The 1-cent coins are the <b>ones</b>.</li>\n</ul>\n<p>To pay <b>35 cents</b> you use 3 coins of 10 and 5 coins of 1. With <b>10 coins of 10 cents</b> you reach <b>100 cents = 1 euro</b>!</p>"
    },
    {
     "label": "🧮 The hundred square",
     "html": "<p>Put the numbers from 1 to 100 in a grid of 10 rows and 10 columns.</p>\n<ul>\n<li>Going down one row you add <b>10</b> (12 → 22 → 32).</li>\n<li>Moving right you add <b>1</b>.</li>\n<li>All the numbers in a column end with the same ones digit!</li>\n</ul>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#ffffff\"/>\n<g font-size=\"15\" text-anchor=\"middle\" fill=\"#1f2937\">\n<rect x=\"50\" y=\"20\" width=\"500\" height=\"25\" fill=\"#fee2e2\"/>\n<text x=\"75\" y=\"38\">1</text><text x=\"125\" y=\"38\">2</text><text x=\"175\" y=\"38\">3</text><text x=\"225\" y=\"38\">4</text><text x=\"275\" y=\"38\">5</text><text x=\"325\" y=\"38\">6</text><text x=\"375\" y=\"38\">7</text><text x=\"425\" y=\"38\">8</text><text x=\"475\" y=\"38\">9</text><text x=\"525\" y=\"38\">10</text>\n<text x=\"75\" y=\"68\">11</text><text x=\"125\" y=\"68\">12</text><text x=\"175\" y=\"68\">13</text><text x=\"225\" y=\"68\">14</text><text x=\"275\" y=\"68\">15</text><text x=\"325\" y=\"68\">16</text><text x=\"375\" y=\"68\">17</text><text x=\"425\" y=\"68\">18</text><text x=\"475\" y=\"68\">19</text><text x=\"525\" y=\"68\">20</text>\n<text x=\"75\" y=\"98\">21</text><text x=\"125\" y=\"98\">22</text><text x=\"175\" y=\"98\">23</text><text x=\"225\" y=\"98\">24</text><text x=\"275\" y=\"98\">25</text><text x=\"325\" y=\"98\">26</text><text x=\"375\" y=\"98\">27</text><text x=\"425\" y=\"98\">28</text><text x=\"475\" y=\"98\">29</text><text x=\"525\" y=\"98\">30</text>\n<text x=\"75\" y=\"128\">31</text><text x=\"125\" y=\"128\">32</text><text x=\"175\" y=\"128\">33</text><text x=\"225\" y=\"128\">34</text><text x=\"275\" y=\"128\">35</text><text x=\"325\" y=\"128\">36</text><text x=\"375\" y=\"128\">37</text><text x=\"425\" y=\"128\">38</text><text x=\"475\" y=\"128\">39</text><text x=\"525\" y=\"128\">40</text>\n<text x=\"300\" y=\"165\" font-size=\"22\">⋮</text>\n<text x=\"75\" y=\"218\">81</text><text x=\"125\" y=\"218\">82</text><text x=\"175\" y=\"218\">83</text><text x=\"225\" y=\"218\">84</text><text x=\"275\" y=\"218\">85</text><text x=\"325\" y=\"218\">86</text><text x=\"375\" y=\"218\">87</text><text x=\"425\" y=\"218\">88</text><text x=\"475\" y=\"218\">89</text><text x=\"525\" y=\"218\">90</text>\n<text x=\"75\" y=\"248\">91</text><text x=\"125\" y=\"248\">92</text><text x=\"175\" y=\"248\">93</text><text x=\"225\" y=\"248\">94</text><text x=\"275\" y=\"248\">95</text><text x=\"325\" y=\"248\">96</text><text x=\"375\" y=\"248\">97</text><text x=\"425\" y=\"248\">98</text><text x=\"475\" y=\"248\">99</text><text x=\"525\" y=\"248\" font-weight=\"bold\" fill=\"#dc2626\">100</text>\n</g>\n<rect x=\"105\" y=\"50\" width=\"40\" height=\"205\" rx=\"8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n<text x=\"300\" y=\"285\" font-size=\"16\" text-anchor=\"middle\" fill=\"#2563eb\">blue column: 2, 12, 22, 32… +10 each row</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Counting like in China",
     "html": "<p>In <b>Chinese</b> (and also in Japanese and Korean) numbers are said in a very logical way:</p>\n<ul>\n<li>11 = \"<b>ten-one</b>\" (shí-yī)</li>\n<li>20 = \"<b>two-ten</b>\" (èr-shí)</li>\n<li>47 = \"<b>four-ten-seven</b>\" (sì-shí-qī)</li>\n</ul>\n<p>The name itself tells you how many tens and how many ones! Try saying numbers in English this way: 65 = \"six-ten-five\". Does it help you see the tens?</p>"
    },
    {
     "label": "🧊 3D cubes",
     "html": "<p>Try building <b>100</b>: how many rods of 10 do you need? Turn the model and look: 10 rods make a <b>square</b>, the hundred \"flat\"!</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 100
     }
    },
    {
     "label": "🦘 Jumps of 5",
     "html": "<p>Count in jumps of 5, like the fingers on one hand: 5, 10, 15, 20… How many jumps do you need to reach 50?</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 50,
      "step": 5,
      "marks": [
       5,
       10,
       15,
       20,
       25,
       30,
       35,
       40,
       45,
       50
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of numbers up to 100",
   "nodes": [
    {
     "id": "unita",
     "label": "Ones",
     "x": 15,
     "y": 10,
     "color": "#2563eb",
     "html": "Every single object counted: 1.",
     "why": "It's the starting point of all counting: a finger, a pebble, a notch on a stick. Humans have counted like this for tens of thousands of years."
    },
    {
     "id": "decina",
     "label": "Ten",
     "x": 50,
     "y": 10,
     "color": "#dc2626",
     "html": "A group of 10 ones.",
     "why": "We group in 10s because we have 10 fingers: almost every people in the world chose 10 as their base."
    },
    {
     "id": "cento",
     "label": "Hundred",
     "x": 85,
     "y": 10,
     "color": "#a855f7",
     "html": "10 tens = 100.",
     "why": "The word \"cent\" comes from the Latin <i>centum</i>. That's where centimetre (a hundredth of a metre) and cent (a hundredth of a euro or dollar) come from."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 50,
     "y": 40,
     "color": "#f59e0b",
     "html": "The same digit is worth more if it is further left: in 44 the first 4 is worth 40.",
     "why": "It's the brilliant idea of the mathematicians of <b>India</b> (about 1,500 years ago): with just 10 digits you can write every number. The Romans instead used different symbols for each value (X, L, C)."
    },
    {
     "id": "zero",
     "label": "Zero",
     "x": 18,
     "y": 65,
     "color": "#64748b",
     "html": "The sign that says \"there's nothing here\": 30 = 3 tens and 0 ones.",
     "why": "Without zero we couldn't tell 3 from 30! It was the Indian mathematician <b>Brahmagupta</b> (in 628) who wrote the first rules for calculating with zero."
    },
    {
     "id": "salti",
     "label": "Counting in jumps",
     "x": 82,
     "y": 40,
     "color": "#16a34a",
     "html": "Counting in 2s, 5s, 10s.",
     "why": "Jumping is faster than counting one by one and it's the basis of the times tables: jumps of 5 are the 5 times table!"
    },
    {
     "id": "confronto",
     "label": "Comparing > <",
     "x": 50,
     "y": 68,
     "color": "#0ea5e9",
     "html": "First look at the tens, then the ones.",
     "why": "Tens are worth more: even 9 ones aren't enough to make a ten, so 60 > 59. The signs > and < were invented by the English mathematician <b>Thomas Harriot</b> (published in 1631)."
    },
    {
     "id": "pari",
     "label": "Even and odd",
     "x": 82,
     "y": 72,
     "color": "#14b8a6",
     "html": "Even: ones digit 0, 2, 4, 6, 8. Odd: 1, 3, 5, 7, 9.",
     "why": "A number is even if it can be split into two equal groups with nothing left over. Looking at the ones is enough, because every ten always splits into two parts of 5."
    },
    {
     "id": "fibonacci",
     "label": "Hindu-Arabic digits",
     "x": 30,
     "y": 90,
     "color": "#ef4444",
     "html": "The digits 0–9 we use today.",
     "why": "Born in India, brought by the Arabs and spread in Europe by <b>Leonardo Fibonacci</b> with his <i>Liber Abaci</i> (1202)."
    }
   ],
   "edges": [
    [
     "unita",
     "decina",
     "10 make"
    ],
    [
     "decina",
     "cento",
     "10 make"
    ],
    [
     "decina",
     "posizione",
     "is written with"
    ],
    [
     "posizione",
     "zero",
     "needs"
    ],
    [
     "decina",
     "salti",
     "is counted with"
    ],
    [
     "posizione",
     "confronto",
     "is used for"
    ],
    [
     "unita",
     "pari",
     "decides"
    ],
    [
     "fibonacci",
     "posizione",
     "uses"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: comparing and jumps",
   "questions": [
    {
     "type": "mc",
     "q": "Which number is greater?",
     "options": [
      "69",
      "71",
      "17"
     ],
     "answer": 1,
     "explain": "71 has 7 tens: more than 69 (6 tens)."
    },
    {
     "type": "num",
     "q": "What number comes after 79?",
     "answer": 80,
     "explain": "79 + 1 = 80: 9 ones + 1 make a new ten."
    },
    {
     "type": "mc",
     "q": "Counting in jumps of 10: 30, 40, 50, …",
     "options": [
      "51",
      "60",
      "55"
     ],
     "answer": 1,
     "explain": "50 + 10 = 60."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Ones",
   "d": "Single items. They are written on the right in two-digit numbers."
  },
  {
   "t": "Ten",
   "d": "A group of 10 ones."
  },
  {
   "t": "Hundred",
   "d": "A group of 10 tens, that is 100."
  },
  {
   "t": "Number before",
   "d": "The number that comes just before (−1)."
  },
  {
   "t": "Number after",
   "d": "The number that comes just after (+1)."
  },
  {
   "t": "Even number",
   "d": "A number ending in 0, 2, 4, 6, 8."
  },
  {
   "t": "Odd number",
   "d": "A number ending in 1, 3, 5, 7, 9."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "What number is 7 tens and 4 ones?",
    "answer": 74,
    "explain": "70 + 4 = 74."
   },
   {
    "type": "num",
    "q": "How many ones are there in 58 (besides the tens)?",
    "answer": 8,
    "explain": "58 = 5 tens and 8 ones."
   },
   {
    "type": "mc",
    "q": "How many tens are there in 100?",
    "options": [
     "1",
     "10",
     "100"
    ],
    "answer": 1,
    "explain": "10 tens = 100."
   },
   {
    "type": "num",
    "q": "What number comes before 60?",
    "answer": 59,
    "explain": "60 − 1 = 59."
   },
   {
    "type": "mc",
    "q": "Which comparison is right?",
    "options": [
     "45 > 54",
     "45 < 54",
     "45 = 54"
    ],
    "answer": 1,
    "explain": "45 has 4 tens, 54 has 5."
   },
   {
    "type": "tf",
    "q": "36 is an even number.",
    "answer": true,
    "explain": "It ends in 6: it's even."
   },
   {
    "type": "tf",
    "q": "You write «fourty».",
    "answer": false,
    "explain": "You write «forty»: there is no U, even though four has one."
   },
   {
    "type": "mc",
    "q": "Counting in jumps of 5: 15, 20, 25, …",
    "options": [
     "26",
     "30",
     "35"
    ],
    "answer": 1,
    "explain": "25 + 5 = 30."
   },
   {
    "type": "text",
    "q": "Write the number 38 in words.",
    "answer": [
     "thirty-eight",
     "thirty eight"
    ],
    "explain": "Thirty + eight = thirty-eight, with a hyphen."
   },
   {
    "type": "order",
    "q": "Put them in order from smallest to biggest.",
    "items": [
     "19",
     "41",
     "47",
     "74",
     "91"
    ],
    "explain": "First look at the tens, then the ones."
   },
   {
    "type": "num",
    "q": "Luca has 3 boxes of 10 pencils and 9 loose pencils. How many pencils does he have?",
    "answer": 39,
    "explain": "3 tens and 9 ones = 39."
   }
  ],
  "gen": [
   [
    "tensUnits",
    2
   ],
   [
    "compare100",
    2
   ]
  ]
 }
});
