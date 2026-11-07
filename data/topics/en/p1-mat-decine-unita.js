TOPIC('en', {
 "id": "p1-mat-decine-unita",
 "title": "Tens and ones",
 "intro": "Counting 37 sweets one by one takes ages and it's easy to make mistakes! 🍬 But if we put them in <b>bags of 10</b>, it becomes really easy. Let's discover <b>tens</b> and <b>ones</b> and why the <b>position</b> of a digit changes its value.",
 "minutes": 25,
 "sections": [
  {
   "type": "text",
   "title": "Grouping in tens",
   "html": "<p>We have a pile of pencils ✏️. Instead of counting them one by one, let's make <b>bundles of 10</b> held with a rubber band.</p>\n<ul>\n<li>Each bundle of 10 is called a <b>ten</b> (in Italian <i>decina</i>, written <b>da</b>).</li>\n<li>The loose pencils left over are called <b>ones</b> or units (in Italian <i>unità</i>, written <b>u</b>).</li>\n</ul>\n<p>If I have <b>2 bundles</b> and <b>3 loose pencils</b>, I have <b>2 tens and 3 ones</b>: 10 + 10 + 3 = <b>23</b> pencils!</p>\n<p><b>10 ones = 1 ten.</b> It's the golden rule 🥇.</p>"
  },
  {
   "type": "svg",
   "title": "23 = 2 tens and 3 ones",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#fffbeb\"/>\n<text x=\"300\" y=\"40\" font-size=\"28\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">23 = 2 da + 3 u</text>\n<g fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\">\n<rect x=\"50\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"64\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"78\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"92\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"106\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"120\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"134\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"148\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"162\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"176\" y=\"70\" width=\"12\" height=\"150\"/>\n<rect x=\"230\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"244\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"258\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"272\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"286\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"300\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"314\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"328\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"342\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"356\" y=\"70\" width=\"12\" height=\"150\"/>\n<rect x=\"430\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"470\" y=\"70\" width=\"12\" height=\"150\"/><rect x=\"510\" y=\"70\" width=\"12\" height=\"150\"/>\n</g>\n<rect x=\"44\" y=\"135\" width=\"150\" height=\"16\" fill=\"#dc2626\"/>\n<rect x=\"224\" y=\"135\" width=\"150\" height=\"16\" fill=\"#dc2626\"/>\n<text x=\"119\" y=\"255\" font-size=\"22\" fill=\"#b91c1c\" text-anchor=\"middle\">1 ten</text>\n<text x=\"299\" y=\"255\" font-size=\"22\" fill=\"#b91c1c\" text-anchor=\"middle\">1 ten</text>\n<text x=\"476\" y=\"255\" font-size=\"22\" fill=\"#1d4ed8\" text-anchor=\"middle\">3 ones</text>\n<text x=\"300\" y=\"290\" font-size=\"18\" fill=\"#1f2937\" text-anchor=\"middle\">Each bundle held with the red band has 10 pencils.</text>\n</svg>",
   "caption": "Two bundles of 10 and three loose pencils: 23 pencils."
  },
  {
   "type": "text",
   "title": "The position of the digits",
   "html": "<p>In two-digit numbers, each digit has its own <b>place</b>:</p>\n<table><tr><th>da (tens)</th><th>u (ones)</th><th>number</th></tr>\n<tr><td style=\"color:#dc2626\"><b>2</b></td><td style=\"color:#2563eb\"><b>3</b></td><td><b>23</b></td></tr>\n<tr><td style=\"color:#dc2626\"><b>4</b></td><td style=\"color:#2563eb\"><b>0</b></td><td><b>40</b></td></tr>\n<tr><td style=\"color:#dc2626\"><b>1</b></td><td style=\"color:#2563eb\"><b>7</b></td><td><b>17</b></td></tr></table>\n<ul>\n<li>The digit on the <b>right</b> tells the <b>ones</b>.</li>\n<li>The digit on the <b>left</b> tells the <b>tens</b>.</li>\n</ul>\n<p>Careful: <b>23</b> and <b>32</b> have the same digits but they are different numbers! In 23 the 2 is worth <b>20</b>, in 32 the 2 is worth only <b>2</b>. The <b>position</b> changes the <b>value</b>.</p>\n<p>And <b>zero</b>? In <b>40</b> the 0 says \"no loose ones\": it's a really important placeholder! Without the zero, 40 would become 4.</p>"
  },
  {
   "type": "3d",
   "title": "Build numbers with cubes",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 23
   },
   "caption": "Each long rod is a ten (10 cubes), each loose cube is a one. Change the number with the slider."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: tens and ones",
   "questions": [
    {
     "type": "num",
     "q": "How many ones are there in 1 ten?",
     "answer": 10,
     "explain": "1 ten = 10 ones."
    },
    {
     "type": "num",
     "q": "3 tens and 5 ones: what number is it?",
     "answer": 35,
     "explain": "30 + 5 = 35."
    },
    {
     "type": "mc",
     "q": "In 48, the digit 4 means…",
     "options": [
      "4 ones",
      "4 tens",
      "48 tens"
     ],
     "answer": 1,
     "explain": "The 4 is in the tens place: it's worth 40."
    }
   ]
  },
  {
   "type": "widget",
   "title": "The abacus: tens and ones",
   "widget": "abacus",
   "options": {
    "columns": [
     "da",
     "u"
    ],
    "value": 23
   },
   "caption": "Each bead on the da rod (tens) is worth 10, each bead on the u rod (ones) is worth 1. When you get to 10 on the u rod, make the exchange: take off the 10 beads and add 1 bead on the da rod."
  },
  {
   "type": "text",
   "title": "The exchange: 10 ones become 1 ten",
   "html": "<p>What happens when the ones get to <b>10</b>? We make an <b>exchange</b> 🔄!</p>\n<p>I have 1 ten and 9 ones (19). I add 1 one: now I have 10 loose ones… I bundle them together and they become <b>1 new ten</b>. Now I have <b>2 tens and 0 ones</b>: 20!</p>\n<p>The same happens when I get to 10 tens: they become <b>1 hundred</b> (100). You'll see it in second grade!</p>"
  },
  {
   "type": "example",
   "title": "Example: eggs in boxes",
   "html": "<p>At the market the eggs 🥚 come in <b>boxes of 10</b>.</p>\n<p>Mrs Lina buys <b>4 boxes</b> and <b>6 loose eggs</b>.</p>\n<ul>\n<li>4 boxes = <b>4 tens</b> = 40 eggs</li>\n<li>6 loose eggs = <b>6 ones</b></li>\n<li>Altogether: 40 + 6 = <b>46 eggs</b>.</li>\n</ul>"
  },
  {
   "type": "example",
   "title": "Example: money",
   "html": "<p>With <b>€1</b> coins and <b>€10</b> notes you can make tens and ones!</p>\n<p>💶💶💶 + 🪙🪙🪙🪙🪙 = 3 €10 notes and 5 €1 coins = <b>€35</b>.</p>\n<p>If I have 12 €1 coins, I can go to the bank and exchange 10 of them for <b>one €10 note</b>: I'm left with 1 note and 2 coins = <b>€12</b>. That's exactly the <b>exchange</b>!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>We count in groups of 10 because we have <b>10 fingers</b> ✋✋! But not everyone did it that way: the <b>Maya</b>, in Central America, counted in groups of <b>20</b>, using their toes too 🦶. And the ancient <b>Babylonians</b> counted in groups of <b>60</b>: that's why an hour has 60 minutes ⏰!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…?",
   "html": "<p>Our numbers (0, 1, 2… 9) are called <b>Arabic numerals</b>, but they were born in <b>India</b>. The Arabs brought them to Europe, and a mathematician from Pisa, <b>Leonardo Fibonacci</b>, made them known in Italy with a book from <b>1202</b>.</p>\n<p>Before that, people used <b>Roman numerals</b>: X = 10, XX = 20, XXIII = 23. Without zero and without place value, doing sums was much harder!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>10 ones = 1 ten</b>.</li>\n<li>In two-digit numbers: the <b>ones</b> on the <b>right</b>, the <b>tens</b> on the <b>left</b>.</li>\n<li>The <b>position</b> changes the value: 23 ≠ 32.</li>\n<li><b>Zero</b> holds the place when there are no ones: 40.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand tens and ones",
   "intro": "If tens seem hard, try it the Chinese way, with your hands, with money, on the number line or with sticks!",
   "tabs": [
    {
     "label": "🇨🇳 How they say them in China",
     "html": "<p>In Chinese, numbers are said exactly the way they are made!</p>\n<ul>\n<li>10 = <b>十</b> (shí) = \"ten\"</li>\n<li>13 = <b>十三</b> (shí sān) = \"<b>ten-three</b>\"</li>\n<li>20 = <b>二十</b> (èr shí) = \"<b>two-ten</b>\"</li>\n<li>47 = <b>四十七</b> (sì shí qī) = \"<b>four-ten-seven</b>\"</li>\n</ul>\n<p>Try saying numbers \"the Chinese way\" yourself: 35 = \"three-ten-five\", that is 3 tens and 5 ones. That way it's crystal clear! In English, instead, \"eleven\", \"twelve\", \"fifteen\" hide the tens (and in Italian so do \"undici\", \"dodici\", \"quindici\").</p>"
    },
    {
     "label": "✋ With your hands",
     "html": "<p>Every child has <b>10 fingers</b>: one child = <b>one ten</b>!</p>\n<p>How many fingers are there in the classroom if 3 children have their hands up and a friend is showing 4 fingers? 3 tens + 4 ones = <b>34</b> fingers 🙌.</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#fdf4ff\"/>\n<g font-size=\"44\" text-anchor=\"middle\">\n<text x=\"70\" y=\"100\">🙌</text><text x=\"180\" y=\"100\">🙌</text><text x=\"290\" y=\"100\">🙌</text><text x=\"450\" y=\"100\">✌️✌️</text>\n</g>\n<text x=\"70\" y=\"150\" font-size=\"22\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">10</text>\n<text x=\"180\" y=\"150\" font-size=\"22\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">10</text>\n<text x=\"290\" y=\"150\" font-size=\"22\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">10</text>\n<text x=\"450\" y=\"150\" font-size=\"22\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">4</text>\n<text x=\"300\" y=\"200\" font-size=\"26\" font-weight=\"bold\" fill=\"#1f2937\" text-anchor=\"middle\">3 da + 4 u = 34</text>\n</svg>"
    },
    {
     "label": "📏 On the number line, in jumps of 10",
     "html": "<p>On the number line you can make <b>long jumps of 10</b> (the tens) and then <b>little steps of 1</b> (the ones).</p>\n<p>To get to <b>34</b>: 3 jumps of 10 (10, 20, 30) and then 4 little steps (31, 32, 33, 34).</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 40,
      "step": 1,
      "marks": [
       30,
       34
      ]
     }
    },
    {
     "label": "🥢 The Romans' sticks",
     "html": "<p>The ancient Romans wrote <b>X</b> for 10 and <b>I</b> for 1. They counted tens by putting lots of X's and ones with lots of I's:</p>\n<ul>\n<li>XX = 2 tens = 20</li>\n<li>XXIII = 2 tens + 3 ones = 23</li>\n<li>XXXI = 31</li>\n</ul>\n<p>(For 4 and 9 they used IV and IX, but that's another story!) They grouped in tens too, but without <b>place value</b>: each symbol is always worth the same, wherever it is.</p>"
    },
    {
     "label": "🧩 Match number and tens",
     "html": "<p>Match each number with how it splits into tens and ones.</p>",
     "widget": "match",
     "options": {
      "pairs": [
       [
        "16",
        "1 da + 6 u"
       ],
       [
        "61",
        "6 da + 1 u"
       ],
       [
        "40",
        "4 da + 0 u"
       ],
       [
        "25",
        "2 da + 5 u"
       ],
       [
        "52",
        "5 da + 2 u"
       ]
      ]
     }
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Tens and ones map: tap a node and find out why",
   "nodes": [
    {
     "id": "dita",
     "label": "10 fingers",
     "x": 50,
     "y": 8,
     "color": "#f97316",
     "html": "Our hands have 10 fingers.",
     "why": "The first humans counted on their fingers: when they got to 10 they had to start again and remember they'd done 'a double hand'. That's how the group of 10 was born."
    },
    {
     "id": "unita",
     "label": "Ones (u)",
     "x": 20,
     "y": 30,
     "color": "#2563eb",
     "html": "Each single object: worth 1.",
     "why": "'Unit' comes from the Latin <i>unus</i>, one."
    },
    {
     "id": "decina",
     "label": "Ten (da)",
     "x": 80,
     "y": 30,
     "color": "#dc2626",
     "html": "A group of 10 ones.",
     "why": "In Italian <i>decina</i>, from the Latin <i>decem</i>, ten. Grouping in tens lets you count lots of objects without getting lost."
    },
    {
     "id": "cambio",
     "label": "The exchange",
     "x": 50,
     "y": 48,
     "color": "#16a34a",
     "html": "10 ones become 1 ten; 10 tens become 1 hundred.",
     "why": "It's the rule of base 10: every time a group fills up, you move to the bigger group. Abacuses work exactly like this."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 25,
     "y": 70,
     "color": "#a855f7",
     "html": "The same digit is worth more the further left it is: in 23 the 2 is worth 20.",
     "why": "It was invented by mathematicians in India, about 1500 years ago. With just 10 digits you can write every number in the world!"
    },
    {
     "id": "zero",
     "label": "Zero as a placeholder",
     "x": 75,
     "y": 70,
     "color": "#64748b",
     "html": "In 40 the 0 says 'no ones' and holds the place.",
     "why": "Zero also comes from India (the mathematician Brahmagupta wrote down its rules in 628). Without zero, 40 and 4 would get mixed up."
    },
    {
     "id": "fibonacci",
     "label": "Fibonacci",
     "x": 50,
     "y": 92,
     "color": "#0e7490",
     "html": "A mathematician from Pisa who made the Hindu-Arabic numerals known in Europe.",
     "why": "In his book <i>Liber Abaci</i> (1202) he showed merchants how much easier it was to do sums with digits and place value instead of Roman numerals."
    },
    {
     "id": "altre",
     "label": "Other bases",
     "x": 90,
     "y": 92,
     "color": "#ca8a04",
     "html": "Maya: groups of 20. Babylonians: groups of 60.",
     "why": "10 isn't compulsory: it's a choice linked to our fingers. Minutes and seconds in 60s are a legacy of the Babylonians."
    }
   ],
   "edges": [
    [
     "dita",
     "decina",
     "suggest the"
    ],
    [
     "unita",
     "cambio",
     "10 become"
    ],
    [
     "cambio",
     "decina",
     "forms a"
    ],
    [
     "decina",
     "posizione",
     "written on the left"
    ],
    [
     "unita",
     "posizione",
     "written on the right"
    ],
    [
     "posizione",
     "zero",
     "needs the"
    ],
    [
     "posizione",
     "fibonacci",
     "brought to Europe by"
    ],
    [
     "dita",
     "altre",
     "other peoples used"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: position matters",
   "questions": [
    {
     "type": "tf",
     "q": "In 52 and in 25 the digit 5 is worth the same.",
     "answer": false,
     "explain": "In 52 the 5 is worth 50 (tens); in 25 it's worth 5 (ones)."
    },
    {
     "type": "num",
     "q": "1 ten and 9 ones + 1 one = ?",
     "answer": 20,
     "explain": "19 + 1 = 20: the 10 ones become a new ten."
    },
    {
     "type": "mc",
     "q": "Which number has 7 tens and 0 ones?",
     "options": [
      "7",
      "70",
      "17"
     ],
     "answer": 1,
     "explain": "7 tens = 70; the zero holds the ones place."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Ones (u)",
   "d": "Each single object; worth 1."
  },
  {
   "t": "Ten (da)",
   "d": "A group of 10 ones."
  },
  {
   "t": "Digit",
   "d": "One of the 10 signs we write numbers with: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9."
  },
  {
   "t": "Place value",
   "d": "The value of a digit depends on the place where it is."
  },
  {
   "t": "Exchange",
   "d": "Turning 10 ones into 1 ten (or 10 tens into 1 hundred)."
  },
  {
   "t": "Abacus",
   "d": "A tool with rods and beads to show ones, tens, hundreds."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "How many ones make 1 ten?",
    "answer": 10,
    "explain": "10 ones = 1 ten."
   },
   {
    "type": "num",
    "q": "2 tens and 6 ones: what number is it?",
    "answer": 26,
    "explain": "20 + 6 = 26."
   },
   {
    "type": "num",
    "q": "How many tens are there in 50?",
    "answer": 5,
    "explain": "50 = 5 tens and 0 ones."
   },
   {
    "type": "num",
    "q": "How many ones are there in 38 (besides the tens)?",
    "answer": 8,
    "explain": "38 = 3 tens and 8 ones."
   },
   {
    "type": "mc",
    "q": "In 64 the tens digit is…",
    "options": [
     "6",
     "4",
     "64"
    ],
    "answer": 0,
    "explain": "The 6 is on the left: tens."
   },
   {
    "type": "mc",
    "q": "Which split is correct for 17?",
    "options": [
     "7 da + 1 u",
     "1 da + 7 u",
     "17 da"
    ],
    "answer": 1,
    "explain": "17 = 1 ten and 7 ones."
   },
   {
    "type": "tf",
    "q": "In 30 the zero is no use at all.",
    "answer": false,
    "explain": "The zero holds the ones place: without the zero we would read 3."
   },
   {
    "type": "tf",
    "q": "45 and 54 are the same number.",
    "answer": false,
    "explain": "They have the same digits in different places: 45 = 4 da + 5 u; 54 = 5 da + 4 u."
   },
   {
    "type": "num",
    "q": "You have 3 boxes of 10 eggs and 4 loose eggs. How many eggs do you have?",
    "answer": 34,
    "explain": "3 tens + 4 ones = 34."
   },
   {
    "type": "order",
    "q": "Put them in order from smallest to biggest.",
    "items": [
     "19",
     "23",
     "32",
     "41"
    ],
    "explain": "Compare the tens first: 1, 2, 3, 4."
   },
   {
    "type": "text",
    "q": "What do you call a group of 10 ones?",
    "answer": [
     "ten",
     "a ten",
     "tens"
    ],
    "explain": "It's a ten."
   },
   {
    "type": "num",
    "q": "You have 1 ten and 12 loose ones. Make the exchange: how many tens do you have now?",
    "answer": 2,
    "explain": "10 of the 12 ones become 1 ten: 2 tens and 2 ones = 22."
   }
  ],
  "gen": [
   [
    "tensUnits",
    3
   ]
  ]
 }
});
