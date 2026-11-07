TOPIC('en', {
 "id": "p3-mat-numeri-1000",
 "title": "Numbers up to 1000",
 "intro": "Until yesterday you counted up to 100. Today we take a huge leap: we are going all the way to <b>1000</b>! 🚀 Let's discover the <b>hundreds</b>, learn to read, write, break up and compare three-digit numbers, and meet the big <b>thousand</b>.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "From ones to hundreds",
   "html": "<p>Our number system is called <b>decimal</b> because it works in groups of <b>ten</b>:</p>\n<ul>\n<li><b>10 ones</b> (O) make <b>1 ten</b> (T) → 10</li>\n<li><b>10 tens</b> make <b>1 hundred</b> (H) → 100</li>\n<li><b>10 hundreds</b> make <b>1 thousand</b> (Th) → 1000</li>\n</ul>\n<p>Every time you have 10 items of one place, you can “trade” them for 1 item of the next bigger place, like when you swap 10 ten-cent coins for 1 euro! 💶</p>\n<p>In Italian, the letter <b>h</b> for hundreds comes from <i>hecto</i>, a Greek word meaning “hundred”; the <b>k</b> for thousand comes from <i>kilo</i>, “thousand”. (In English we write H for hundreds and Th for thousands.)</p>"
  },
  {
   "type": "3d",
   "title": "3D cubes, rods and flats",
   "scene": "blocks",
   "options": {
    "mode": "base10",
    "value": 245
   },
   "caption": "The cube is 1 one, the rod (10 cubes) is 1 ten, the flat (10 rods = 100 cubes) is 1 hundred. Move the slider and turn the model: 245 = 2 flats, 4 rods, 5 cubes."
  },
  {
   "type": "text",
   "title": "Place value: every digit has its own place",
   "html": "<p>A number up to 999 is written with at most <b>three digits</b>. Each digit is worth something different depending on the <b>place</b> it is in:</p>\n<table>\n<tr><th>H (hundreds)</th><th>T (tens)</th><th>O (ones)</th></tr>\n<tr><td style=\"color:#8b5cf6;font-weight:bold\">3</td><td style=\"color:#3b82f6;font-weight:bold\">5</td><td style=\"color:#22c55e;font-weight:bold\">6</td></tr>\n<tr><td>3 × 100 = 300</td><td>5 × 10 = 50</td><td>6 × 1 = 6</td></tr>\n</table>\n<p>356 is read “<b>three hundred and fifty-six</b>”.</p>\n<p>Watch out for the digit <b>0</b>: it is a “placeholder”, it says that there is nothing in that place. <b>305</b> = 3 H, <b>0</b> T, 5 O (three hundred and five); <b>350</b> = 3 H, 5 T, <b>0</b> O (three hundred and fifty). Without the zero we couldn't tell them apart!</p>\n<p>The same <b>3</b> is worth 3 in 123, 30 in 132 and 300 in 312: the place matters!</p>"
  },
  {
   "type": "widget",
   "title": "The three-rod abacus",
   "widget": "abacus",
   "options": {
    "columns": [
     "H",
     "T",
     "O"
    ],
    "value": 356
   },
   "caption": "Each bead on the H rod is worth 100, on the T rod it is worth 10, on the O rod it is worth 1. Try making 407 and then 999. What happens if you add 1 more?"
  },
  {
   "type": "text",
   "title": "Composing and decomposing",
   "html": "<p><b>Decomposing</b> a number means splitting it into its parts:</p>\n<ul>\n<li>472 = <b>4 H + 7 T + 2 O</b></li>\n<li>472 = <b>400 + 70 + 2</b> (additive decomposition)</li>\n<li>472 = <b>4 × 100 + 7 × 10 + 2 × 1</b></li>\n</ul>\n<p><b>Composing</b> is the opposite: 6 H + 0 T + 8 O = <b>608</b>.</p>\n<p>The same number can be decomposed in other ways too: 472 = 47 T + 2 O, or 472 = 3 H + 17 T + 2 O (I “broke” one hundred into 10 tens). This trick will be very useful in subtractions with borrowing!</p>"
  },
  {
   "type": "svg",
   "title": "The hundreds chart",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f5f3ff\"/>\n<rect x=\"40\" y=\"30\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#8b5cf6\"/>\n<rect x=\"215\" y=\"30\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#3b82f6\"/>\n<rect x=\"390\" y=\"30\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#22c55e\"/>\n<text x=\"125\" y=\"70\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#ffffff\">H</text>\n<text x=\"300\" y=\"70\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#ffffff\">T</text>\n<text x=\"475\" y=\"70\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#ffffff\">O</text>\n<g stroke=\"#4c1d95\" stroke-width=\"2\" fill=\"#ffffff\">\n<rect x=\"40\" y=\"95\" width=\"170\" height=\"80\"/><rect x=\"215\" y=\"95\" width=\"170\" height=\"80\"/><rect x=\"390\" y=\"95\" width=\"170\" height=\"80\"/>\n</g>\n<text x=\"125\" y=\"155\" font-size=\"56\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#7c3aed\">4</text>\n<text x=\"300\" y=\"155\" font-size=\"56\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">7</text>\n<text x=\"475\" y=\"155\" font-size=\"56\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#16a34a\">2</text>\n<text x=\"125\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" fill=\"#7c3aed\">400</text>\n<text x=\"300\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" fill=\"#2563eb\">70</text>\n<text x=\"475\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" fill=\"#16a34a\">2</text>\n<text x=\"212\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\">+</text>\n<text x=\"387\" y=\"215\" font-size=\"26\" text-anchor=\"middle\" fill=\"#1f2937\">+</text>\n<text x=\"300\" y=\"270\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">four hundred and seventy-two</text>\n</svg>",
   "caption": "Each digit in its own box: 472 = 400 + 70 + 2."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: value of the digits",
   "questions": [
    {
     "type": "num",
     "q": "In 583, what is the value of the digit 8?",
     "answer": 80,
     "explain": "The 8 is in the tens place: 8 × 10 = 80."
    },
    {
     "type": "num",
     "q": "Compose the number: 7 H + 0 T + 4 O",
     "answer": 704,
     "explain": "Seven hundred and four: the zero holds the place of the tens."
    },
    {
     "type": "mc",
     "q": "How do you write “two hundred and nineteen”?",
     "options": [
      "2019",
      "219",
      "209"
     ],
     "answer": 1,
     "explain": "Two hundred (200) + nineteen (19) = 219."
    }
   ]
  },
  {
   "type": "text",
   "title": "Comparing and ordering",
   "html": "<p>To work out which number is bigger:</p>\n<ol>\n<li>If they have a different number of digits, the one with <b>more digits</b> is greater: 1000 &gt; 999, 105 &gt; 98.</li>\n<li>If they have the same number of digits, compare the <b>hundreds</b>: 512 &gt; 498 (5 H &gt; 4 H).</li>\n<li>If the hundreds are equal, compare the <b>tens</b>: 372 &gt; 365.</li>\n<li>If the tens are equal too, compare the <b>ones</b>: 847 &gt; 843.</li>\n</ol>\n<p>Remember the symbols: <b>&gt;</b> greater than, <b>&lt;</b> less than, <b>=</b> equal to. The open “mouth” always faces the bigger number! 🐊</p>\n<p><b>Before and after</b>: the number after 399 is <b>400</b> (+1); the number before 700 is <b>699</b> (−1).</p>"
  },
  {
   "type": "widget",
   "title": "The number line up to 1000",
   "widget": "numberLine",
   "options": {
    "min": 0,
    "max": 1000,
    "step": 100,
    "marks": [
     250,
     500,
     750,
     1000
    ]
   },
   "caption": "Take jumps of 100: 100, 200, 300… Ten jumps take you to 1000! Where is 500? It is exactly halfway."
  },
  {
   "type": "text",
   "title": "The thousand: 1000",
   "html": "<p>After 999 comes <b>1000</b> (one thousand): 999 + 1 = 1000. You have filled all the boxes and you must “trade”:</p>\n<ul>\n<li>10 ones → 1 ten (the ones go back to 0);</li>\n<li>10 tens → 1 hundred (the tens go back to 0);</li>\n<li>10 hundreds → <b>1 thousand</b> (the hundreds go back to 0).</li>\n</ul>\n<p>To write 1000 you need a <b>fourth box</b>: <b>Th</b> (thousands). 1000 = 1 Th, 0 H, 0 T, 0 O.</p>\n<p>1000 = 10 hundreds = 100 tens = 1000 ones. Two thousand, three thousand… are just “thousand” counted in groups.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the stickers in the box",
   "html": "<p>Luca collects stickers. He keeps them like this: loose stickers (ones), packs of 10 (tens) and boxes of 100 (hundreds).</p>\n<p>He has <b>3 boxes</b>, <b>12 packs</b> and <b>7 loose stickers</b>. How many stickers does he have?</p>\n<ul>\n<li>12 packs = 10 packs + 2 packs = 1 box + 2 packs</li>\n<li>So he has 4 boxes, 2 packs, 7 loose</li>\n<li>4 H + 2 T + 7 O = <b>427 stickers</b></li>\n</ul>\n<p>How many does he need to reach 1000? Let's jump to the “round” numbers: 427 + 3 = 430, 430 + 70 = 500, 500 + 500 = 1000 → 3 + 70 + 500 = <b>573</b>.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the money in the piggy bank",
   "html": "<p>In Anna's piggy bank there are: 2 banknotes of €100, 5 banknotes of €10, 9 coins of €1.</p>\n<p>Total: 200 + 50 + 9 = <b>€259</b>.</p>\n<p>Anna wants to buy a bike that costs <b>€295</b>. 259 &lt; 295: it is not enough yet! She is short by 295 − 259 = <b>€36</b>.</p>\n<p>Euros work just like H, T, O: €100, €10, €1.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Zero arrived late",
   "html": "<p>The digits we use (0, 1, 2… 9) are called <b>Hindu-Arabic</b>: they were invented in <b>India</b>, then Arab mathematicians spread them, and they reached Italy thanks to <b>Leonardo Fibonacci</b> of Pisa, in his book <i>Liber Abaci</i> of <b>1202</b>. The big novelty was <b>zero</b>, which makes place value possible. Before that, Europe used Roman numerals, which had no zero!</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The Romans' M and the Egyptians' lotus flower",
   "html": "<p>The Romans wrote <b>C</b> = 100 (from <i>centum</i>), <b>D</b> = 500 and <b>M</b> = 1000 (from <i>mille</i>). So 356 became <b>CCCLVI</b>: very long! The ancient <b>Egyptians</b> drew instead: a stroke for 1, a little arch for 10, a coiled rope for 100 and a <b>lotus flower</b> 🪷 for 1000.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>10 O = 1 T · 10 T = 1 H · 10 H = 1 Th (1000).</li>\n<li>The value of a digit depends on its <b>place</b>: H, T, O.</li>\n<li><b>0</b> holds the empty place: 305 ≠ 35.</li>\n<li>Decomposing: 472 = 4 H + 7 T + 2 O = 400 + 70 + 2.</li>\n<li>Comparing: first the H, then the T, then the O.</li>\n<li>999 + 1 = 1000 (one thousand).</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand numbers up to 1000",
   "intro": "If the abacus is not enough for you, try money, Chinese numbers, the Romans or the odometer.",
   "tabs": [
    {
     "label": "💶 Money",
     "html": "<p>Euros are a perfect abacus:</p>\n<ul>\n<li>💵 a <b>€100</b> banknote = 1 hundred</li>\n<li>💵 a <b>€10</b> banknote = 1 ten</li>\n<li>🪙 a <b>€1</b> coin = 1 one</li>\n</ul>\n<p>To pay <b>€638</b> with as few pieces as possible: 6 of 100, 3 of 10, 8 of 1. If the shop has no change and gives you 10 coins of €1 instead of a €10 banknote… that is exactly the “trade” between tens and ones!</p>",
     "svg": "<svg viewBox=\"0 0 600 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"220\" fill=\"#f0fdf4\"/>\n<g fill=\"#86efac\" stroke=\"#15803d\" stroke-width=\"3\">\n<rect x=\"20\" y=\"30\" width=\"100\" height=\"50\" rx=\"6\"/><rect x=\"30\" y=\"40\" width=\"100\" height=\"50\" rx=\"6\"/><rect x=\"40\" y=\"50\" width=\"100\" height=\"50\" rx=\"6\"/>\n</g>\n<text x=\"90\" y=\"82\" font-size=\"22\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#14532d\">100 €</text>\n<text x=\"90\" y=\"140\" font-size=\"22\" text-anchor=\"middle\" fill=\"#14532d\">× 6 = 600</text>\n<g fill=\"#fca5a5\" stroke=\"#b91c1c\" stroke-width=\"3\">\n<rect x=\"230\" y=\"40\" width=\"90\" height=\"45\" rx=\"6\"/><rect x=\"240\" y=\"50\" width=\"90\" height=\"45\" rx=\"6\"/>\n</g>\n<text x=\"285\" y=\"80\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#7f1d1d\">10 €</text>\n<text x=\"285\" y=\"140\" font-size=\"22\" text-anchor=\"middle\" fill=\"#7f1d1d\">× 3 = 30</text>\n<g fill=\"#fde047\" stroke=\"#a16207\" stroke-width=\"3\">\n<circle cx=\"440\" cy=\"60\" r=\"22\"/><circle cx=\"480\" cy=\"60\" r=\"22\"/><circle cx=\"520\" cy=\"60\" r=\"22\"/><circle cx=\"460\" cy=\"95\" r=\"22\"/><circle cx=\"500\" cy=\"95\" r=\"22\"/>\n</g>\n<text x=\"480\" y=\"66\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#713f12\">1 €</text>\n<text x=\"480\" y=\"140\" font-size=\"22\" text-anchor=\"middle\" fill=\"#713f12\">× 8 = 8</text>\n<text x=\"300\" y=\"195\" font-size=\"30\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1f2937\">600 + 30 + 8 = 638 €</text>\n</svg>"
    },
    {
     "label": "🇨🇳 Like in China and Japan",
     "html": "<p>In Chinese (and in Japanese) numbers are said in a <b>very regular</b> way: you say exactly how many hundreds, how many tens and how many ones there are!</p>\n<ul>\n<li>356 = 三百五十六 = “<b>three-hundred five-ten six</b>”</li>\n<li>11 = 十一 = “<b>ten one</b>” (in English “eleven” gives no clue!)</li>\n<li>20 = 二十 = “<b>two-ten</b>”</li>\n</ul>\n<p>Try saying numbers “the Chinese way”: 472 = “four-hundred seven-ten two”. It is a wonderful way to understand place value. Some scholars think this helps East Asian children learn numbers faster!</p>"
    },
    {
     "label": "🧊 3D cubes",
     "html": "<p>Build the number with blocks: the flat is 100, the rod is 10, the cube is 1. Try making <b>999</b>: 9 flats, 9 rods, 9 cubes. Now imagine adding 1 cube: 10 cubes become a rod, 10 rods a flat, and 10 flats, one on top of the other, make a <b>big cube of 1000</b>!</p>",
     "scene": "blocks",
     "options": {
      "mode": "base10",
      "value": 999
     }
    },
    {
     "label": "🚗 The odometer",
     "html": "<p>Have you ever looked at the odometer of an old car? It has <b>wheels</b> with the digits from 0 to 9.</p>\n<p>When the ones wheel goes from 9 to 0, it clicks the tens wheel forward by one. When the tens wheel goes from 9 to 0, it clicks the hundreds wheel.</p>\n<p>0 9 9 → 1 0 0 · 9 9 9 → 1 0 0 0: all the wheels turn together! It is the “trade” of the decimal system, done by a machine.</p>"
    },
    {
     "label": "🏛️ Roman numerals",
     "html": "<p>The Romans had no place value: each symbol is always worth the same and the values are added (or subtracted if a small symbol comes before a big one).</p>\n<table>\n<tr><th>Symbol</th><td>I</td><td>V</td><td>X</td><td>L</td><td>C</td><td>D</td><td>M</td></tr>\n<tr><th>Value</th><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr>\n</table>\n<p>Examples: <b>CCXL</b> = 100 + 100 + (50 − 10) = 240 · <b>CMXCIX</b> = 999 · <b>M</b> = 1000.</p>\n<p>Compare: we write 999 with 3 digits, the Romans with 6 symbols!</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of numbers up to 1000: tap a node to find out why",
   "nodes": [
    {
     "id": "decimale",
     "label": "Decimal system",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "We count in groups of ten.",
     "why": "Almost certainly because we have <b>10 fingers</b>! Not all peoples did it this way: the Maya counted in base 20 (fingers and toes), the Babylonians in base 60, which is where the 60 minutes in an hour come from."
    },
    {
     "id": "cifre",
     "label": "10 digits",
     "x": 20,
     "y": 26,
     "color": "#f59e0b",
     "html": "0, 1, 2, 3, 4, 5, 6, 7, 8, 9.",
     "why": "They are the Hindu-Arabic digits: invented in India, spread by Arab mathematicians (like al-Khwarizmi, 9th century) and brought to Europe by Fibonacci in 1202."
    },
    {
     "id": "zero",
     "label": "Zero",
     "x": 20,
     "y": 52,
     "color": "#64748b",
     "html": "The digit that shows an empty place.",
     "why": "The Indian mathematician <b>Brahmagupta</b>, in 628 AD, was among the first to treat zero as a real number with its own rules. Without zero you could not tell 35 from 305."
    },
    {
     "id": "posizione",
     "label": "Place value",
     "x": 50,
     "y": 40,
     "color": "#a855f7",
     "html": "A digit is worth more or less depending on its place.",
     "why": "It is the brilliant idea that makes calculations easy: with only 10 digits you can write any number. Moving a digit one place to the left makes its value 10 times bigger."
    },
    {
     "id": "unita",
     "label": "Ones (O)",
     "x": 82,
     "y": 22,
     "color": "#22c55e",
     "html": "The cube: worth 1.",
     "why": "It is the starting point: counting one by one."
    },
    {
     "id": "decine",
     "label": "Tens (T)",
     "x": 82,
     "y": 46,
     "color": "#3b82f6",
     "html": "10 ones = 1 ten.",
     "why": "Grouping by 10 lets you count lots of things quickly: instead of 30 objects, you count 3 groups."
    },
    {
     "id": "centinaia",
     "label": "Hundreds (H)",
     "x": 82,
     "y": 70,
     "color": "#8b5cf6",
     "html": "10 tens = 1 hundred = 100.",
     "why": "The symbol h comes from the Greek prefix <i>hecto-</i> (hundred), which we also use in hectolitre (100 litres) and hectare."
    },
    {
     "id": "migliaio",
     "label": "Thousand (Th)",
     "x": 50,
     "y": 92,
     "color": "#ef4444",
     "html": "10 hundreds = 1000.",
     "why": "“Thousand” in Italian comes from the Latin <i>mille</i>; the symbol k comes from the Greek <i>chílioi</i> (thousand), as in kilogram and kilometre."
    },
    {
     "id": "confronto",
     "label": "Comparing and decomposing",
     "x": 20,
     "y": 80,
     "color": "#14b8a6",
     "html": "472 = 400 + 70 + 2; 512 &gt; 498.",
     "why": "Since each place is worth 10 times the one to its right, a single extra hundred counts for more than any number of tens and ones: that is why we compare the hundreds first."
    }
   ],
   "edges": [
    [
     "decimale",
     "cifre",
     "uses"
    ],
    [
     "cifre",
     "zero",
     "including"
    ],
    [
     "decimale",
     "posizione",
     "is based on"
    ],
    [
     "posizione",
     "unita",
     "place of the"
    ],
    [
     "unita",
     "decine",
     "×10"
    ],
    [
     "decine",
     "centinaia",
     "×10"
    ],
    [
     "centinaia",
     "migliaio",
     "×10"
    ],
    [
     "zero",
     "posizione",
     "makes possible the"
    ],
    [
     "posizione",
     "confronto",
     "allows"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: comparing and the thousand",
   "questions": [
    {
     "type": "mc",
     "q": "Which number is greater?",
     "options": [
      "689",
      "698",
      "669"
     ],
     "answer": 1,
     "explain": "Same hundreds (6): I compare the tens, 9 is the biggest → 698."
    },
    {
     "type": "num",
     "q": "What is the number after 599?",
     "answer": 600,
     "explain": "599 + 1 = 600: the ones and tens “trade up”."
    },
    {
     "type": "num",
     "q": "How many hundreds are there in 1000?",
     "answer": 10,
     "explain": "10 × 100 = 1000."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Ones (O)",
   "d": "The single item: it is worth 1."
  },
  {
   "t": "Ten (T)",
   "d": "A group of 10 ones."
  },
  {
   "t": "Hundred (H)",
   "d": "A group of 10 tens, that is 100 ones."
  },
  {
   "t": "Thousand (Th)",
   "d": "A group of 10 hundreds, that is 1000 ones."
  },
  {
   "t": "Digit",
   "d": "Each of the 10 symbols used to write numbers (0–9)."
  },
  {
   "t": "Place value",
   "d": "The value of a digit depends on the place it has in the number."
  },
  {
   "t": "Decompose",
   "d": "Split a number into its parts: 472 = 400 + 70 + 2."
  },
  {
   "t": "Compose",
   "d": "Make a number from its parts: 4 H + 7 T + 2 O = 472."
  },
  {
   "t": "Before",
   "d": "The number that comes right before (−1)."
  },
  {
   "t": "After",
   "d": "The number that comes right after (+1)."
  },
  {
   "t": "Decimal system",
   "d": "A number system that groups by 10."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Compose the number: 5 H + 3 T + 9 O",
    "answer": 539,
    "explain": "500 + 30 + 9 = 539."
   },
   {
    "type": "num",
    "q": "In 742, what is the value of the digit 7?",
    "answer": 700,
    "explain": "It is in the hundreds place: 7 × 100 = 700."
   },
   {
    "type": "mc",
    "q": "How do you write “nine hundred and six”?",
    "options": [
     "960",
     "906",
     "9006"
    ],
    "answer": 1,
    "explain": "Nine hundreds, zero tens, six ones: 906."
   },
   {
    "type": "tf",
    "q": "305 and 350 are the same number.",
    "answer": false,
    "explain": "305 has 0 tens and 5 ones; 350 has 5 tens and 0 ones."
   },
   {
    "type": "num",
    "q": "What is the number before 800?",
    "answer": 799,
    "explain": "800 − 1 = 799."
   },
   {
    "type": "mc",
    "q": "Which decomposition is right for 608?",
    "options": [
     "600 + 80",
     "600 + 8",
     "60 + 8"
    ],
    "answer": 1,
    "explain": "6 H, 0 T, 8 O = 600 + 8."
   },
   {
    "type": "order",
    "q": "Put in order from smallest to biggest.",
    "items": [
     "98",
     "189",
     "198",
     "891",
     "1000"
    ],
    "explain": "First the two-digit number, then compare the hundreds, the tens, and finally 1000."
   },
   {
    "type": "num",
    "q": "How many tens are there in 1000?",
    "answer": 100,
    "explain": "1000 ÷ 10 = 100 tens."
   },
   {
    "type": "mc",
    "q": "Which symbol goes between 457 … 475?",
    "options": [
     ">",
     "<",
     "="
    ],
    "answer": 1,
    "explain": "Same hundreds; tens 5 < 7: 457 < 475."
   },
   {
    "type": "text",
    "q": "Write the number 1000 in words.",
    "answer": [
     "one thousand",
     "a thousand",
     "1 thousand"
    ],
    "explain": "1000 is read “one thousand”."
   },
   {
    "type": "num",
    "q": "Luca has 3 boxes of 100 stickers, 4 packs of 10 and 6 loose stickers. How many stickers does he have?",
    "answer": 346,
    "explain": "300 + 40 + 6 = 346."
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
