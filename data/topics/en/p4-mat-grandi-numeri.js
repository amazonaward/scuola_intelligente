TOPIC('en', {
 "id": "p4-mat-grandi-numeri",
 "title": "Big numbers",
 "intro": "How many people live in Italy? How many kilometers are we from the Moon? To answer we need <b>big numbers</b>: the <b>thousands</b> and the <b>millions</b>. Let's learn to read them, write them, break them down and compare them without fear.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "From a thousand upward",
   "html": "<p>You already know ones (o), tens (t) and hundreds (h). Do you remember the golden rule of our system? <b>10 units of one place make 1 unit of the next place up</b>:</p>\n<ul>\n<li>10 ones = 1 ten</li>\n<li>10 tens = 1 hundred</li>\n<li>10 hundreds = <b>1 thousand</b> (1,000)</li>\n</ul>\n<p>And it goes on in just the same way:</p>\n<ul>\n<li>10 thousands = 1 <b>ten thousand</b> (10,000)</li>\n<li>10 ten thousands = 1 <b>hundred thousand</b> (100,000)</li>\n<li>10 hundred thousands = <b>1 million</b> (1,000,000)</li>\n</ul>\n<p>It is a <b>decimal</b> system (base 10) and a <b>place-value</b> system: the value of a digit depends on the <b>place</b> it has in the number.</p>"
  },
  {
   "type": "3d",
   "title": "A thousand cubes in 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 10,
    "b": 10,
    "c": 10,
    "max": 10
   },
   "caption": "A cube of 10 × 10 × 10 small cubes contains 1,000 small cubes: that's one thousand! Rotate the model and use the sliders to see how many small cubes there are with fewer layers."
  },
  {
   "type": "text",
   "title": "Step 1 – The periods: ones, thousands, millions",
   "html": "<p>The digits of a big number are grouped <b>in threes</b>, starting from the right. Each group is called a <b>period</b>:</p>\n<table>\n<tr><th colspan=\"3\">MILLIONS period</th><th colspan=\"3\">THOUSANDS period</th><th colspan=\"3\">ONES period</th></tr>\n<tr><td>hM</td><td>daM</td><td>uM</td><td>hk</td><td>dak</td><td>uk</td><td>h</td><td>da</td><td>u</td></tr>\n<tr><td>hundred millions</td><td>ten millions</td><td>millions</td><td>hundred thousands</td><td>ten thousands</td><td>thousands</td><td>hundreds</td><td>tens</td><td>ones</td></tr>\n</table>\n<p>The letter <b>k</b> comes from the Greek <i>chílioi</i>, \"thousand\" (as in <b>k</b>m, <b>k</b>g); the <b>M</b> stands for \"mega\", million.</p>\n<p>To make numbers easier to read, between one period and the next we put a <b>comma</b> or a small <b>space</b>: <b>3,408,215</b> or <b>3 408 215</b>. (Never a period: in English the period is used for decimals!)</p>"
  },
  {
   "type": "svg",
   "title": "The table of periods",
   "svg": "<svg viewBox=\"0 0 600 260\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"260\" fill=\"#f8fafc\"/>\n<rect x=\"15\" y=\"20\" width=\"185\" height=\"40\" fill=\"#a855f7\"/><text x=\"107\" y=\"47\" font-size=\"18\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">MILLIONS</text>\n<rect x=\"208\" y=\"20\" width=\"185\" height=\"40\" fill=\"#3b82f6\"/><text x=\"300\" y=\"47\" font-size=\"18\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">THOUSANDS</text>\n<rect x=\"401\" y=\"20\" width=\"185\" height=\"40\" fill=\"#22c55e\"/><text x=\"493\" y=\"47\" font-size=\"18\" text-anchor=\"middle\" fill=\"#ffffff\" font-weight=\"bold\">ONES</text>\n<g font-size=\"16\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">\n<text x=\"46\" y=\"88\">hM</text><text x=\"107\" y=\"88\">daM</text><text x=\"168\" y=\"88\">uM</text>\n<text x=\"239\" y=\"88\">hk</text><text x=\"300\" y=\"88\">dak</text><text x=\"361\" y=\"88\">uk</text>\n<text x=\"432\" y=\"88\">h</text><text x=\"493\" y=\"88\">da</text><text x=\"554\" y=\"88\">u</text>\n</g>\n<g stroke=\"#64748b\" stroke-width=\"2\" fill=\"#ffffff\">\n<rect x=\"15\" y=\"100\" width=\"61\" height=\"70\"/><rect x=\"76\" y=\"100\" width=\"62\" height=\"70\"/><rect x=\"138\" y=\"100\" width=\"62\" height=\"70\"/>\n<rect x=\"208\" y=\"100\" width=\"61\" height=\"70\"/><rect x=\"269\" y=\"100\" width=\"62\" height=\"70\"/><rect x=\"331\" y=\"100\" width=\"62\" height=\"70\"/>\n<rect x=\"401\" y=\"100\" width=\"61\" height=\"70\"/><rect x=\"462\" y=\"100\" width=\"62\" height=\"70\"/><rect x=\"524\" y=\"100\" width=\"62\" height=\"70\"/>\n</g>\n<g font-size=\"40\" text-anchor=\"middle\" font-weight=\"bold\">\n<text x=\"168\" y=\"150\" fill=\"#7e22ce\">3</text>\n<text x=\"239\" y=\"150\" fill=\"#1d4ed8\">4</text><text x=\"300\" y=\"150\" fill=\"#1d4ed8\">0</text><text x=\"361\" y=\"150\" fill=\"#1d4ed8\">8</text>\n<text x=\"432\" y=\"150\" fill=\"#15803d\">2</text><text x=\"493\" y=\"150\" fill=\"#15803d\">1</text><text x=\"554\" y=\"150\" fill=\"#15803d\">5</text>\n</g>\n<text x=\"300\" y=\"210\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\" font-weight=\"bold\">3,408,215</text>\n<text x=\"300\" y=\"242\" font-size=\"17\" text-anchor=\"middle\" fill=\"#334155\">three million, four hundred eight thousand, two hundred fifteen</text>\n</svg>",
   "caption": "Each period has three places: hundreds, tens and ones. The zero holds the place of the ten thousands."
  },
  {
   "type": "text",
   "title": "Step 2 – Reading and writing big numbers",
   "html": "<p>To <b>read</b> a big number:</p>\n<ol>\n<li>split the digits into periods of three, starting from the <b>right</b>;</li>\n<li>read each period as a number up to 999, starting from the <b>left</b>, and add the name of the period (<b>million</b>, <b>thousand</b>).</li>\n</ol>\n<p>Examples:</p>\n<ul>\n<li><b>45,320</b> → forty-five <b>thousand</b>, three hundred twenty</li>\n<li><b>702,009</b> → seven hundred two <b>thousand</b>, nine</li>\n<li><b>2,500,000</b> → two <b>million</b>, five hundred <b>thousand</b></li>\n</ul>\n<p>Rules for writing numbers in words:</p>\n<ul>\n<li>we say \"one <b>thousand</b>\" but \"two <b>thousand</b>, three <b>thousand</b>…\" (the word <i>thousand</i> never gets an \"s\");</li>\n<li>use a <b>hyphen</b> between the tens and the ones from 21 to 99: <i>forty-five, seventy-three</i>;</li>\n<li>say each period one after the other: <i>one hundred twenty-three thousand, four hundred fifty-six</i>.</li>\n</ul>\n<p>Watch out for the <b>zeros</b>! In \"seventy thousand and five\" the hundreds, tens and ones of the thousands are empty: we write <b>70,005</b>.</p>"
  },
  {
   "type": "widget",
   "title": "The abacus of thousands",
   "widget": "abacus",
   "options": {
    "columns": [
     "hk",
     "dak",
     "uk",
     "h",
     "da",
     "u"
    ],
    "value": 245367
   },
   "caption": "Add and remove beads: when a column reaches 10, it is the turn of the column on the left (regrouping)."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: periods and the value of digits",
   "questions": [
    {
     "type": "num",
     "q": "How many hundreds are there in one thousand?",
     "answer": 10,
     "explain": "10 hundreds = 1,000."
    },
    {
     "type": "mc",
     "q": "In the number 586,214 the digit 8 is worth…",
     "options": [
      "8 thousands",
      "80 thousands (80,000)",
      "800"
     ],
     "answer": 1,
     "explain": "The 8 is in the ten-thousands place: 80,000."
    },
    {
     "type": "mc",
     "q": "How do you write \"four hundred thousand and six\" in digits?",
     "options": [
      "400,006",
      "40,006",
      "4,000,006"
     ],
     "answer": 0,
     "explain": "400 thousands and 6 ones: 400,006."
    }
   ]
  },
  {
   "type": "text",
   "title": "Step 3 – Breaking down and building up",
   "html": "<p>To <b>break down</b> a number means to say what each of its digits is worth.</p>\n<p><b>3,408,215</b> =</p>\n<ul>\n<li>3 uM + 4 hk + 0 dak + 8 uk + 2 h + 1 da + 5 u</li>\n<li>= 3,000,000 + 400,000 + 8,000 + 200 + 10 + 5 (<b>additive</b> breakdown)</li>\n</ul>\n<p><b>Building up</b> is the opposite: <i>5 dak + 7 uk + 3 da</i> = 50,000 + 7,000 + 30 = <b>57,030</b> (watch the zeros in the empty places: hundreds and ones).</p>\n<p>The same number can also be read in different ways: <b>57,030</b> = 57 thousands and 30 ones = 570 hundreds and 3 tens = 5,703 tens.</p>"
  },
  {
   "type": "text",
   "title": "Step 4 – Comparing and ordering",
   "html": "<p>To <b>compare</b> two big numbers:</p>\n<ol>\n<li>count the <b>digits</b>: the number with more digits is the greater (<i>100,000 &gt; 99,999</i>);</li>\n<li>if they have the same number of digits, compare the digits <b>from the left</b>, one at a time, until you find the first one that is different: <i>452,<b>3</b>10 &gt; 452,<b>1</b>99</i>.</li>\n</ol>\n<p>Symbols: <b>&gt;</b> greater than, <b>&lt;</b> less than, <b>=</b> equal to.</p>\n<p><b>Rounding</b>: in newspapers big numbers are rounded. To round to the thousands look at the hundreds digit: if it is 5 or more, round up; otherwise round down. <i>58,643 → about 59,000</i>; <i>58,432 → about 58,000</i>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the numbers of Italy",
   "html": "<ul>\n<li>About <b>59 million</b> people live in Italy: according to ISTAT, at the beginning of 2025 there were about <b>58,934,000</b>.</li>\n<li>The San Siro stadium in Milan holds about <b>75,000</b> spectators. To hold all Italians we would need almost <b>800</b> stadiums like it!</li>\n<li>Mont Blanc is about <b>4,805</b> meters high (the most recent measurements vary by a meter or two because the summit is made of snow and ice).</li>\n<li>The average distance between the Earth and the Moon is about <b>384,400 km</b>: three hundred eighty-four thousand, four hundred kilometers.</li>\n</ul>\n<p>Try reading aloud: <b>58,934,000</b> → <i>fifty-eight million, nine hundred thirty-four thousand</i>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the class piggy bank",
   "html": "<p>The school collects plastic caps for charity. Each bag holds <b>1,000</b> of them.</p>\n<ul>\n<li>Class 4A: <b>12,450</b> caps → 12 full bags and 450 loose caps.</li>\n<li>Class 4B: <b>12,540</b> caps.</li>\n<li>Who has more? Same digits up to the thousands (12), then the hundreds: 5 &gt; 4 → <b>12,540 &gt; 12,450</b>. Class 4B wins!</li>\n<li>Together: 12,450 + 12,540 = <b>24,990</b> caps. How many are missing to reach 25,000? <b>10</b>!</li>\n</ul>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Lakh and crore",
   "html": "<p>In <b>India</b> big numbers are grouped in a different way! The first three digits on the right stay together, then the rest are grouped <b>in twos</b>: a million is written <b>10,00,000</b> and called \"ten <b>lakh</b>\". A <b>lakh</b> is 100,000 and a <b>crore</b> is 10,000,000.</p>\n<p>In <b>China</b> and <b>Japan</b>, instead, there is a special word for <b>10,000</b> (<i>wàn</i> in Chinese, <i>man</i> in Japanese), and numbers are grouped <b>in fours</b>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Where \"million\" comes from",
   "html": "<p>The word <b>million</b> was born in <b>Italy</b>, in the Middle Ages: it means \"<b>big thousand</b>\" (thousand + the augmentative suffix <i>-one</i>), that is, \"a thousand times a thousand\". From there it passed into all European languages: <i>million</i> in English and French, <i>Million</i> in German.</p>\n<p>And did you know that the travel book by <b>Marco Polo</b> is called <i>Il Milione</i> (\"The Million\")? Perhaps from his family's nickname (\"Emilione\"), or perhaps because it told of \"millions\" of wonders!</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li><b>10</b> units of one place = <b>1</b> unit of the next place up.</li>\n<li>1,000 = one thousand; 10,000 = ten thousand; 100,000 = one hundred thousand; <b>1,000,000 = one million</b>.</li>\n<li>Digits are grouped in <b>periods of three</b>: ones, thousands, millions.</li>\n<li>The value of a digit depends on its <b>position</b>; the <b>zero</b> holds the empty place.</li>\n<li>To compare: first the number of digits, then the digits from the left.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand big numbers",
   "intro": "A million is hard to imagine. Here are other paths: money, 3D cubes, the number line, counting time and the Indian method.",
   "tabs": [
    {
     "label": "💶 With banknotes",
     "html": "<p>Imagine you have only <b>€1</b>, <b>€10</b>, <b>€100</b> notes… and you must pay <b>€34,526</b> (the price of a car).</p>\n<ul>\n<li>3 bundles of <b>€10,000</b></li>\n<li>4 bundles of <b>€1,000</b></li>\n<li>5 notes of <b>€100</b></li>\n<li>2 notes of <b>€10</b></li>\n<li>6 coins of <b>€1</b></li>\n</ul>\n<p>Each position of the number matches a banknote \"size\" 10 times bigger than the previous one. A <b>million</b> euros would be 100 bundles of €10,000!</p>"
    },
    {
     "label": "🧊 Cubes: from 1 to 1,000",
     "html": "<p>In the <b>base-10 blocks</b> system: the small cube is the one, the rod is the ten, the flat is the hundred… and the <b>big cube</b> is the thousand. Here you see a number up to 999: move the slider up to <b>999</b> and imagine adding one more small cube. Make the exchanges: 10 ones → 1 ten, 10 tens → 1 hundred, 10 hundreds → <b>1 thousand cube</b>!</p>\n<p>And then? 10 big cubes in a row make a \"bar\" of 10,000, 10 bars make a \"flat\" of 100,000 and 10 flats make a giant cube of <b>1,000,000</b>. The shapes repeat: cube, bar, flat… always by 10!</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 999
     }
    },
    {
     "label": "⏱️ How long is a million?",
     "html": "<p>Try counting one number per second, without ever stopping:</p>\n<ul>\n<li>up to <b>1,000</b>: about <b>17 minutes</b>;</li>\n<li>up to <b>100,000</b>: more than <b>27 hours</b>;</li>\n<li>up to <b>1,000,000</b>: about <b>11 and a half days</b>, day and night!</li>\n</ul>\n<p>Indeed, in one day there are 24 × 60 × 60 = <b>86,400</b> seconds, and 1,000,000 ÷ 86,400 ≈ 11.6 days.</p>\n<p>And a <b>billion</b> (a thousand millions)? It would take almost <b>32 years</b>!</p>"
    },
    {
     "label": "📏 On the number line, zooming in",
     "html": "<p>The number line works for big numbers too: you just change the value of each tick mark. Here each tick is worth <b>1,000</b>: tick 25 is <b>25,000</b>, tick 47 is <b>47,000</b>.</p>\n<p>Use jumps: from 30 (30,000) jump by 10s (10,000 at a time). Where do you land after 5 jumps? At 80, that is <b>80,000</b>.</p>",
     "widget": "numberLine",
     "options": {
      "min": 0,
      "max": 100,
      "step": 10,
      "start": 30,
      "marks": [
       25,
       47
      ]
     }
    },
    {
     "label": "🇮🇳 The Indian method",
     "html": "<p>Our way of writing numbers (with the digits 0 to 9 and the zero) was born in <b>India</b>, about 1500 years ago, and reached Europe through Arab mathematicians and <b>Leonardo Fibonacci</b> (1202). That is why they are called <b>Hindu-Arabic numerals</b>.</p>\n<p>Indians, however, group the digits in another way:</p>\n<table>\n<tr><th>Number</th><th>Our way</th><th>In India</th></tr>\n<tr><td>one hundred thousand</td><td>100,000</td><td>1,00,000 (1 lakh)</td></tr>\n<tr><td>one million</td><td>1,000,000</td><td>10,00,000 (10 lakh)</td></tr>\n<tr><td>ten million</td><td>10,000,000</td><td>1,00,00,000 (1 crore)</td></tr>\n</table>\n<p>The number is always the same: only the way of <b>grouping</b> and naming changes. Trying another grouping helps you understand that periods are just a \"help for the eyes\".</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Big numbers map",
   "nodes": [
    {
     "id": "base10",
     "label": "Decimal system",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "We count in groups of 10: 10 units of one place = 1 of the next place up.",
     "why": "Almost certainly because we have <b>10 fingers</b>! Many ancient peoples counted in groups of 10; the Maya used 20 (fingers and toes), the Babylonians 60."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 22,
     "y": 28,
     "color": "#16a34a",
     "html": "A digit is worth more or less depending on the place it has.",
     "why": "The place-value system with zero was born in <b>India</b> (around the 5th-6th century AD). The Romans did not have it: in MMXXV every symbol has a fixed value, and doing calculations was very hard."
    },
    {
     "id": "zero",
     "label": "Zero",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "It marks an empty place: in 70,005 the zeros hold the places of h, da, uk.",
     "why": "The Indian mathematician <b>Brahmagupta</b> in 628 AD gave the first rules for calculating with zero. Without zero we could not tell 75 from 705 or from 7,005!"
    },
    {
     "id": "classi",
     "label": "Periods",
     "x": 78,
     "y": 28,
     "color": "#a855f7",
     "html": "Groups of three digits: ones, thousands, millions.",
     "why": "Grouping by threes follows the names: thousand, million, billion are each a thousand times the one before. It is only a convenience for the eyes: in India they group differently (lakh, crore)."
    },
    {
     "id": "migliaia",
     "label": "Thousands",
     "x": 70,
     "y": 55,
     "color": "#3b82f6",
     "html": "uk (1,000), dak (10,000), hk (100,000).",
     "why": "\"Thousand\" comes from Old English <i>thūsend</i>; the symbol k comes from the Greek <i>chílioi</i>. The Romans wrote a thousand with the letter M."
    },
    {
     "id": "milioni",
     "label": "Millions",
     "x": 88,
     "y": 78,
     "color": "#7e22ce",
     "html": "uM (1,000,000), daM, hM: a thousand times a thousand.",
     "why": "The word is Italian (\"big thousand\") and appears in the Middle Ages, when Italian merchants needed to count large sums of money."
    },
    {
     "id": "leggere",
     "label": "Read and write",
     "x": 22,
     "y": 60,
     "color": "#ef4444",
     "html": "Periods from the right, reading from the left; thousand, million.",
     "why": "The comma or the space between the periods help avoid mistakes: the international standard (International System of Units, 1948-2003) recommends a space, because in some countries the comma marks the decimals."
    },
    {
     "id": "confronto",
     "label": "Compare",
     "x": 30,
     "y": 86,
     "color": "#14b8a6",
     "html": "First the number of digits, then the digits from the left.",
     "why": "It works thanks to place value: the leftmost digit \"weighs\" more than all the others put together (1,000 is more than 999)."
    },
    {
     "id": "abaco",
     "label": "Abacus",
     "x": 60,
     "y": 82,
     "color": "#64748b",
     "html": "A tool with rods and beads for showing numbers.",
     "why": "Abacuses have existed for thousands of years (Mesopotamia, Rome, China). The Chinese <b>suanpan</b> and the Japanese <b>soroban</b> are still used today for lightning-fast mental calculations."
    }
   ],
   "edges": [
    [
     "base10",
     "posizione",
     "is written with"
    ],
    [
     "posizione",
     "zero",
     "needs"
    ],
    [
     "base10",
     "classi",
     "is grouped in"
    ],
    [
     "classi",
     "migliaia",
     ""
    ],
    [
     "classi",
     "milioni",
     ""
    ],
    [
     "posizione",
     "leggere",
     "lets you"
    ],
    [
     "leggere",
     "confronto",
     "then"
    ],
    [
     "posizione",
     "abaco",
     "is seen with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: comparing and rounding",
   "questions": [
    {
     "type": "mc",
     "q": "Which number is greater?",
     "options": [
      "98,999",
      "100,001",
      "99,990"
     ],
     "answer": 1,
     "explain": "100,001 has 6 digits, the others 5."
    },
    {
     "type": "num",
     "q": "Round 47,682 to the thousands.",
     "answer": 48000,
     "explain": "The hundreds digit is 6 (≥ 5): round up to 48,000."
    },
    {
     "type": "num",
     "q": "What is 999,999 + 1?",
     "answer": 1000000,
     "explain": "All the 9s become 0 with the regrouping: one million!"
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Thousand",
   "d": "A group of a thousand units (1,000 = 10 hundreds)."
  },
  {
   "t": "Million",
   "d": "A thousand thousands: 1,000,000."
  },
  {
   "t": "Period",
   "d": "A group of three digits: ones, thousands, millions."
  },
  {
   "t": "Place (order)",
   "d": "The position of a digit: ones, tens, hundreds, thousands…"
  },
  {
   "t": "Place value",
   "d": "The value of a digit depends on the place it has."
  },
  {
   "t": "Break down",
   "d": "To write a number as the sum of the values of its digits."
  },
  {
   "t": "Round",
   "d": "To replace a number with a nearby, simpler one (up or down)."
  },
  {
   "t": "Decimal system",
   "d": "A numeral system in base 10."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "How many thousands are there in a million?",
    "answer": 1000,
    "explain": "1,000 × 1,000 = 1,000,000."
   },
   {
    "type": "mc",
    "q": "How do you read 307,050?",
    "options": [
     "three hundred seven thousand, fifty",
     "thirty-seven thousand, five hundred",
     "three million, seventy-five thousand fifty"
    ],
    "answer": 0,
    "explain": "307 thousands and 50 ones."
   },
   {
    "type": "num",
    "q": "Write in digits: two million, four hundred thousand.",
    "answer": 2400000,
    "explain": "2,400,000."
   },
   {
    "type": "mc",
    "q": "In 6,152,380 the digit 1 stands for…",
    "options": [
     "1 hundred thousand (100,000)",
     "1 ten thousand",
     "1 million"
    ],
    "answer": 0,
    "explain": "6 , 1 5 2 , 3 8 0: the 1 is in the hk place."
   },
   {
    "type": "num",
    "q": "Build the number: 4 hk + 2 uk + 9 da.",
    "answer": 402090,
    "explain": "400,000 + 2,000 + 90 = 402,090."
   },
   {
    "type": "tf",
    "q": "In English, a period can be used to separate the periods of a big number.",
    "answer": false,
    "explain": "We use a comma or a space; the period is for decimals."
   },
   {
    "type": "order",
    "q": "Put in order from the smallest to the greatest.",
    "items": [
     "9,999",
     "10,100",
     "10,010,000",
     "100,000,000"
    ],
    "explain": "First count the digits, then compare from the left."
   },
   {
    "type": "mc",
    "q": "Which symbol goes between 345,120 ___ 345,210?",
    "options": [
     ">",
     "<",
     "="
    ],
    "answer": 1,
    "explain": "The hundreds: 1 < 2, so 345,120 < 345,210."
   },
   {
    "type": "num",
    "q": "How many tens are there in 5,000?",
    "answer": 500,
    "explain": "5,000 ÷ 10 = 500 tens."
   },
   {
    "type": "text",
    "q": "What is the number 100,000 called in India?",
    "answer": [
     "lakh",
     "a lakh"
    ],
    "explain": "1 lakh = 100,000."
   }
  ],
  "gen": [
   [
    "placeValue",
    3
   ]
  ]
 }
});
