TOPIC('en', {
 "id": "m3-mat-probabilita",
 "title": "Probability and statistics",
 "intro": "How many classmates prefer football? What is the most common grade? What are the chances of rolling a 6 with a die? <b>Statistics</b> collects and summarises data, while <b>probability</b> measures how likely an event is to happen. Together they help us make decisions when not everything is certain.",
 "minutes": 45,
 "sections": [
  {
   "type": "text",
   "title": "1. What is a statistical survey?",
   "html": "<p><b>Statistics</b> studies <b>collective</b> phenomena, meaning those that involve many individuals (people, objects, events). A statistical survey has 4 steps:</p>\n<ol>\n<li><b>Define the problem</b> and the <b>population</b> (the set of all the elements you want to study, e.g. all the pupils in the school).</li>\n<li><b>Collect the data</b>: either on the whole population (a <b>census</b>) or on a well-chosen part of it, the <b>sample</b>.</li>\n<li><b>Organise the data</b> in tables and show them with graphs.</li>\n<li><b>Process and interpret</b>: calculate frequencies and averages (mean, mode, median) and draw conclusions.</li>\n</ol>\n<p>Every property we observe is called a <b>variable</b>. A variable can be:</p>\n<ul>\n<li><b>qualitative</b>, expressed in words (favourite colour, sport played);</li>\n<li><b>quantitative</b>, expressed in numbers (height, number of siblings, grade). Its values are called <b>categories</b> or <b>values</b>.</li>\n</ul>"
  },
  {
   "type": "text",
   "title": "2. Frequencies: absolute, relative, percentage",
   "html": "<p>We ask the 25 pupils of a Year 9 class: <i>\"Which sport do you play?\"</i>. We count the answers:</p>\n<table>\n<tr><th>Sport</th><th>Absolute frequency</th><th>Relative frequency</th><th>Percentage frequency</th></tr>\n<tr><td>⚽ Football</td><td>10</td><td>10/25 = 0.40</td><td>40%</td></tr>\n<tr><td>🏐 Volleyball</td><td>6</td><td>6/25 = 0.24</td><td>24%</td></tr>\n<tr><td>🏊 Swimming</td><td>5</td><td>5/25 = 0.20</td><td>20%</td></tr>\n<tr><td>🤸 Gymnastics</td><td>4</td><td>4/25 = 0.16</td><td>16%</td></tr>\n<tr><td><b>Total</b></td><td><b>25</b></td><td><b>1</b></td><td><b>100%</b></td></tr>\n</table>\n<ul>\n<li><b>Absolute frequency</b> (f): how many times a value appears.</li>\n<li><b>Relative frequency</b>: f divided by the total number of data. The relative frequencies always add up to <b>1</b>.</li>\n<li><b>Percentage frequency</b>: relative frequency × 100. The total is always <b>100%</b>.</li>\n</ul>\n<p>Relative frequencies are used to <b>compare</b> groups of different sizes: 10 footballers out of 25 (40%) is \"more\" than 12 footballers out of 40 (30%)!</p>"
  },
  {
   "type": "svg",
   "title": "The same data in two graphs",
   "svg": "<svg viewBox=\"0 0 640 320\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"640\" height=\"320\" fill=\"#f8fafc\"/>\n<text x=\"160\" y=\"26\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">Bar chart</text>\n<line x1=\"40\" y1=\"270\" x2=\"300\" y2=\"270\" stroke=\"#334155\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"270\" x2=\"40\" y2=\"50\" stroke=\"#334155\" stroke-width=\"2\"/>\n<text x=\"32\" y=\"274\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">0</text>\n<text x=\"32\" y=\"174\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">5</text>\n<text x=\"32\" y=\"74\" font-size=\"14\" text-anchor=\"end\" fill=\"#334155\">10</text>\n<line x1=\"40\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"#cbd5e1\" stroke-dasharray=\"4\"/>\n<line x1=\"40\" y1=\"70\" x2=\"300\" y2=\"70\" stroke=\"#cbd5e1\" stroke-dasharray=\"4\"/>\n<rect x=\"55\" y=\"70\" width=\"45\" height=\"200\" fill=\"#ef4444\"/>\n<rect x=\"115\" y=\"150\" width=\"45\" height=\"120\" fill=\"#3b82f6\"/>\n<rect x=\"175\" y=\"170\" width=\"45\" height=\"100\" fill=\"#22c55e\"/>\n<rect x=\"235\" y=\"190\" width=\"45\" height=\"80\" fill=\"#f59e0b\"/>\n<text x=\"77\" y=\"62\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">10</text>\n<text x=\"137\" y=\"142\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">6</text>\n<text x=\"197\" y=\"162\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">5</text>\n<text x=\"257\" y=\"182\" font-size=\"15\" text-anchor=\"middle\" fill=\"#1e293b\">4</text>\n<text x=\"77\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Football</text>\n<text x=\"137\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Volleyball</text>\n<text x=\"197\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Swimming</text>\n<text x=\"257\" y=\"292\" font-size=\"14\" text-anchor=\"middle\" fill=\"#1e293b\">Gymnastics</text>\n<text x=\"480\" y=\"26\" font-size=\"17\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">Pie chart</text>\n<path d=\"M480 165 L480 55 A110 110 0 0 1 544.66 254 Z\" fill=\"#ef4444\"/>\n<path d=\"M480 165 L544.66 254 A110 110 0 0 1 395.25 235.1 Z\" fill=\"#3b82f6\"/>\n<path d=\"M480 165 L395.25 235.1 A110 110 0 0 1 387.1 106.1 Z\" fill=\"#22c55e\"/>\n<path d=\"M480 165 L387.1 106.1 A110 110 0 0 1 480 55 Z\" fill=\"#f59e0b\"/>\n<text x=\"520\" y=\"140\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">40%</text>\n<text x=\"472\" y=\"235\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">24%</text>\n<text x=\"398\" y=\"178\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">20%</text>\n<text x=\"430\" y=\"112\" font-size=\"16\" font-weight=\"bold\" fill=\"#ffffff\">16%</text>\n<text x=\"480\" y=\"300\" font-size=\"14\" text-anchor=\"middle\" fill=\"#334155\">angle = percentage × 3.6°  (40% → 144°)</text>\n</svg>",
   "caption": "The bar chart compares quantities well; the pie chart shows the parts of a whole. In the pie chart each sector has an angle proportional to the frequency: 100% = 360°."
  },
  {
   "type": "text",
   "title": "3. Averages: mean, mode, median",
   "html": "<p>To summarise many data with <b>a single number</b> we use the <b>measures of central tendency</b>. Take Luke's maths grades: <b>5, 7, 6, 8, 7, 9, 7</b>.</p>\n<ul>\n<li><b>Arithmetic mean</b>: the sum of all the values divided by how many there are.<br>(5+7+6+8+7+9+7) ÷ 7 = 49 ÷ 7 = <b>7</b>.</li>\n<li><b>Mode</b>: the most frequent value. The 7 appears 3 times: mode = <b>7</b>. (A distribution can have more than one mode, or none. The mode also works for qualitative variables: in the sports table the mode is \"football\".)</li>\n<li><b>Median</b>: put the data <b>in order</b> and take the <b>middle</b> one.<br>5, 6, 7, <b>7</b>, 7, 8, 9 → median = <b>7</b>. If there is an even number of data, the median is the mean of the two middle ones.</li>\n<li><b>Range</b>: maximum value − minimum value = 9 − 5 = <b>4</b>. It tells you how \"spread out\" the data are.</li>\n</ul>\n<p>⚠️ The mean is sensitive to extreme values: if in a company 9 people earn €1,500 and the boss earns €30,000, the mean is €4,350, but no employee earns that much! In such cases the <b>median</b> (€1,500) describes the situation better.</p>"
  },
  {
   "type": "example",
   "title": "Worked example: the week's temperatures",
   "html": "<p>In Turin, in a week in April, the maximum temperatures were: <b>14, 16, 15, 19, 21, 16, 18 °C</b>.</p>\n<ul>\n<li>Mean: (14+16+15+19+21+16+18) ÷ 7 = 119 ÷ 7 = <b>17 °C</b>;</li>\n<li>In order: 14, 15, 16, <b>16</b>, 18, 19, 21 → median = <b>16 °C</b>;</li>\n<li>Mode = <b>16 °C</b> (it appears 2 times);</li>\n<li>Range = 21 − 14 = <b>7 °C</b>.</li>\n</ul>\n<p>Meteorologists use exactly these measures to say whether a month was \"warmer than average\".</p>"
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: statistics",
   "questions": [
    {
     "type": "num",
     "q": "Calculate the mean of 4, 8, 6, 10.",
     "answer": 7,
     "explain": "(4+8+6+10) ÷ 4 = 28 ÷ 4 = 7."
    },
    {
     "type": "num",
     "q": "What is the median of 3, 9, 4, 7, 5?",
     "answer": 5,
     "explain": "In order: 3, 4, 5, 7, 9. The middle value is 5."
    },
    {
     "type": "mc",
     "q": "Eye colour is a variable that is…",
     "options": [
      "quantitative",
      "qualitative",
      "continuous numerical"
     ],
     "answer": 1,
     "explain": "It is expressed in words (blue, brown…), so it is qualitative."
    },
    {
     "type": "num",
     "q": "In a class of 20 pupils, 5 have a cat. What is the percentage frequency?",
     "answer": 25,
     "unit": "%",
     "explain": "5/20 = 0.25 → 25%."
    }
   ]
  },
  {
   "type": "text",
   "title": "4. Events: certain, impossible, likely",
   "html": "<p>An <b>event</b> is something that may or may not happen as the result of an experiment (rolling a die, drawing a card…). Events can be:</p>\n<ul>\n<li><b>certain</b>: they always happen (when you roll a die, you get a number less than 7);</li>\n<li><b>impossible</b>: they never happen (you get an 8);</li>\n<li><b>random</b> or <b>probable</b>: they may or may not happen (you get a 6).</li>\n</ul>\n<p>The set of all possible outcomes is called the <b>sample space</b>. For a die: {1, 2, 3, 4, 5, 6}.</p>"
  },
  {
   "type": "widget",
   "title": "Certain, likely or impossible?",
   "widget": "classify",
   "options": {
    "groups": [
     "✅ Certain",
     "🎲 Likely",
     "🚫 Impossible"
    ],
    "items": [
     [
      "Tomorrow, after Monday comes Tuesday",
      0
     ],
     [
      "Rolling a die gives an even number",
      1
     ],
     [
      "Rolling a die gives a 7",
      2
     ],
     [
      "Drawing a card from a 40-card deck gives an ace",
      1
     ],
     [
      "Tossing a coin gives heads or tails",
      0
     ],
     [
      "From a bag with only red marbles I draw a blue marble",
      2
     ],
     [
      "It will rain in Milan tomorrow",
      1
     ],
     [
      "Rolling two dice, the sum is 1",
      2
     ]
    ]
   },
   "caption": "Drag or tap each event and put it in the right group."
  },
  {
   "type": "text",
   "title": "5. Classical probability",
   "html": "<p>If all outcomes are <b>equally likely</b> (a fair die, a balanced coin…), the probability of an event E is:</p>\n<p style=\"text-align:center;font-size:1.25em\"><b>p(E) = favourable cases / possible cases</b></p>\n<p>Examples with a die:</p>\n<ul>\n<li>p(a 6) = <b>1/6</b> ≈ 0.167 ≈ 16.7%;</li>\n<li>p(an even number) = 3/6 = <b>1/2</b> = 50% (favourable: 2, 4, 6);</li>\n<li>p(a number less than 7) = 6/6 = <b>1</b> → <b>certain</b> event;</li>\n<li>p(an 8) = 0/6 = <b>0</b> → <b>impossible</b> event.</li>\n</ul>\n<p>So probability is always a number <b>between 0 and 1</b> (that is, between 0% and 100%) and can be written as a fraction, a decimal or a percentage.</p>\n<p><b>Opposite event</b>: \"not a 6\" has probability 1 − 1/6 = <b>5/6</b>. In general p(not E) = 1 − p(E).</p>"
  },
  {
   "type": "3d",
   "title": "The die: 6 faces, 6 possible cases",
   "scene": "solid",
   "options": {
    "shape": "cube",
    "color": "#f8fafc",
    "labels": true
   },
   "caption": "A die is a cube: 6 identical faces, so (if it is fair) every face has the same probability, 1/6. Rotate it: the opposite faces of a real die always add up to 7 (1-6, 2-5, 3-4)."
  },
  {
   "type": "widget",
   "title": "Probability as part of a whole",
   "widget": "fractionPie",
   "options": {
    "n": 1,
    "d": 6
   },
   "caption": "A probability is a fraction of the whole (the whole = certain event = 1). Try it: 3/6 is the probability of an even number, 2/6 that of \"more than 4\"…"
  },
  {
   "type": "example",
   "title": "Worked example: the sum of two dice",
   "html": "<p>We roll two dice (one red and one blue) and add the points. There are <b>6 × 6 = 36</b> possible cases (each face of the red die with each face of the blue one).</p>\n<p>A sum of 7 can be made in <b>6 ways</b>: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 → p = 6/36 = <b>1/6</b>.<br>\nA sum of 2 in only 1 way (1+1) → p = <b>1/36</b>. A sum of 12 only with 6+6 → <b>1/36</b>.</p>\n<p>That is why in board games with two dice the 7 comes up so often! The sums are not equally likely, even though each die is fair.</p>"
  },
  {
   "type": "3d",
   "title": "The 36 cases of two dice in 3D",
   "scene": "blocks",
   "options": {
    "mode": "array",
    "a": 6,
    "b": 6
   },
   "caption": "Each little cube is a pair (red die, blue die). The pairs with a sum of 7 lie along a diagonal: 6 out of 36."
  },
  {
   "type": "text",
   "title": "6. Frequentist probability and compound events",
   "html": "<p>The cases are not always equally likely (a loaded die, the chance that a car breaks down…). Then we do many <b>trials</b> and calculate the <b>relative frequency</b>:</p>\n<p style=\"text-align:center\"><b>f = number of times E happened / number of trials</b></p>\n<p>The <b>law of large numbers</b> says that as the number of trials increases, the relative frequency gets closer and closer to the probability. With 10 coin tosses you can get 7 heads; with 10,000 tosses you will be very close to 50%.</p>\n<p><b>Compound events</b>:</p>\n<ul>\n<li><b>Mutually exclusive events</b> (they cannot happen together): p(A <b>or</b> B) = p(A) + p(B). E.g. die: p(1 or 2) = 1/6 + 1/6 = 1/3.</li>\n<li><b>Independent events</b> (one does not affect the other): p(A <b>and</b> B) = p(A) × p(B). E.g. two coins: p(heads and heads) = 1/2 × 1/2 = 1/4.</li>\n</ul>\n<p>⚠️ <b>The die has no memory!</b> If \"heads\" has come up 5 times in a row, on the next toss the probability of tails is still 1/2. Believing otherwise is called the <b>gambler's fallacy</b>: it is one of the reasons why gambling is addictive and makes people lose money.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? Probability was born from a game of dice",
   "html": "<p>In <b>1654</b> a French gambler, the Chevalier de Méré, asked the mathematician <b>Blaise Pascal</b> how to divide the stake of an interrupted game. Pascal discussed it by letter with <b>Pierre de Fermat</b>: the calculus of probability was born from those letters. A century earlier the Italian <b>Gerolamo Cardano</b> had already written a book about dice games, the <i>Liber de ludo aleae</i>.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The birthday paradox",
   "html": "<p>In a class of <b>23 people</b> there is more than a <b>50%</b> chance that at least two have their birthday on the same day; with 30 people it rises to about <b>70%</b>! It seems strange, but the possible pairs among 23 people number as many as 253. Try checking it in your own class.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? A graph that saved lives",
   "html": "<p>The English nurse <b>Florence Nightingale</b>, during the Crimean War (1854-1856), drew special circular charts to show that most soldiers died from infections in hospitals, not from wounds. Thanks to her data, military hospitals improved their hygiene. In Italy, population data are collected by <b>ISTAT</b>, through the census.</p>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand probability",
   "intro": "If the formula \"favourable over possible\" does not convince you, try one of these routes.",
   "tabs": [
    {
     "label": "🌳 Tree diagram",
     "html": "<p>For events in several stages we draw a <b>tree</b>: each branch is an outcome and carries its probability. To find the probability of a path, we <b>multiply</b> the probabilities along the branches. Example: I toss a coin twice. There are 4 paths, each with probability 1/2 × 1/2 = 1/4. \"At least one head\" = HH, HT, TH → 3/4.</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<circle cx=\"60\" cy=\"150\" r=\"12\" fill=\"#0f172a\"/>\n<line x1=\"60\" y1=\"150\" x2=\"230\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"60\" y1=\"150\" x2=\"230\" y2=\"220\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<text x=\"130\" y=\"100\" font-size=\"16\" fill=\"#2563eb\">1/2</text>\n<text x=\"130\" y=\"215\" font-size=\"16\" fill=\"#dc2626\">1/2</text>\n<circle cx=\"245\" cy=\"80\" r=\"20\" fill=\"#2563eb\"/><text x=\"245\" y=\"86\" font-size=\"17\" fill=\"#fff\" text-anchor=\"middle\">H</text>\n<circle cx=\"245\" cy=\"220\" r=\"20\" fill=\"#dc2626\"/><text x=\"245\" y=\"226\" font-size=\"17\" fill=\"#fff\" text-anchor=\"middle\">T</text>\n<line x1=\"265\" y1=\"80\" x2=\"400\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"80\" x2=\"400\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"220\" x2=\"400\" y2=\"185\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n<line x1=\"265\" y1=\"220\" x2=\"400\" y2=\"260\" stroke=\"#dc2626\" stroke-width=\"4\"/>\n<circle cx=\"418\" cy=\"40\" r=\"18\" fill=\"#2563eb\"/><text x=\"418\" y=\"46\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">H</text>\n<circle cx=\"418\" cy=\"115\" r=\"18\" fill=\"#dc2626\"/><text x=\"418\" y=\"121\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">T</text>\n<circle cx=\"418\" cy=\"185\" r=\"18\" fill=\"#2563eb\"/><text x=\"418\" y=\"191\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">H</text>\n<circle cx=\"418\" cy=\"260\" r=\"18\" fill=\"#dc2626\"/><text x=\"418\" y=\"266\" font-size=\"16\" fill=\"#fff\" text-anchor=\"middle\">T</text>\n<text x=\"450\" y=\"46\" font-size=\"16\" fill=\"#0f172a\">HH → 1/4</text>\n<text x=\"450\" y=\"121\" font-size=\"16\" fill=\"#0f172a\">HT → 1/4</text>\n<text x=\"450\" y=\"191\" font-size=\"16\" fill=\"#0f172a\">TH → 1/4</text>\n<text x=\"450\" y=\"266\" font-size=\"16\" fill=\"#0f172a\">TT → 1/4</text>\n<text x=\"20\" y=\"290\" font-size=\"15\" fill=\"#475569\">1st toss</text>\n<text x=\"300\" y=\"290\" font-size=\"15\" fill=\"#475569\">2nd toss</text>\n</svg>"
    },
    {
     "label": "🍬 The bag of sweets",
     "html": "<p>Imagine a bag with <b>10 sweets</b>: 3 strawberry, 5 lemon, 2 mint. You pick one with your eyes closed. The probability of getting strawberry is the <b>slice of the pie</b> taken up by the strawberry sweets: 3 out of 10. Move the sliders: if you add strawberry sweets, the slice (and the probability) grows; if you add sweets of other flavours, the denominator grows and the probability goes down.</p>",
     "widget": "fractionPie",
     "options": {
      "n": 3,
      "d": 10
     }
    },
    {
     "label": "🧊 Two-way table in 3D",
     "html": "<p>For two dice, instead of the formula, build the <b>grid</b>: rows = red die, columns = blue die. Each little cube is a case. Count the cubes you are interested in: it is the method most used in schools in the United Kingdom and the United States (\"sample space diagram\"). Change the numbers: with a 4-sided die and a 6-sided one there are 24 cases.</p>",
     "scene": "blocks",
     "options": {
      "mode": "array",
      "a": 6,
      "b": 6
     }
    },
    {
     "label": "🇬🇧 \"Odds\"",
     "html": "<p>In English-speaking countries people often use <b>odds</b>: instead of \"favourable over possible\" they say \"favourable <b>against</b> unfavourable\". For a 6 on a die: odds of <b>1 to 5</b> (1 favourable case, 5 unfavourable), while the probability is 1/6.</p>\n<table><tr><th>Event</th><th>Probability</th><th>Odds</th></tr>\n<tr><td>Heads with a coin</td><td>1/2</td><td>1 to 1</td></tr>\n<tr><td>Rolling a 6</td><td>1/6</td><td>1 to 5</td></tr>\n<tr><td>Ace from 40 cards</td><td>4/40 = 1/10</td><td>4 to 36 = 1 to 9</td></tr></table>\n<p>To go from odds \"a against b\" to probability: p = a / (a + b).</p>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map: from data to probability",
   "nodes": [
    {
     "id": "dati",
     "label": "Data and population",
     "x": 50,
     "y": 6,
     "color": "#0ea5e9",
     "html": "The values collected by observing a variable in a population or in a sample.",
     "why": "States have been collecting data for thousands of years: censuses were already taken in Egypt, China and Rome (the <i>census</i> was used for taxes and military service). The word <b>statistics</b> comes from \"state\": in the 18th century it meant the science of the information useful for governing."
    },
    {
     "id": "frequenze",
     "label": "Frequencies",
     "x": 20,
     "y": 28,
     "color": "#22c55e",
     "html": "Absolute, relative (f/n) and percentage (×100).",
     "why": "They are used to compare groups of different sizes: dividing by the total brings everything to the same scale (\"out of 1\" or \"out of 100\")."
    },
    {
     "id": "grafici",
     "label": "Graphs",
     "x": 50,
     "y": 30,
     "color": "#f59e0b",
     "html": "Bar charts, pie charts, Cartesian graphs, pictograms.",
     "why": "The bar chart and the pie chart were invented by the Scotsman <b>William Playfair</b> between 1786 and 1801: a picture shows at a glance what a table hides."
    },
    {
     "id": "indici",
     "label": "Mean, mode, median",
     "x": 80,
     "y": 28,
     "color": "#a855f7",
     "html": "Measures that summarise a distribution with a single central value.",
     "why": "The mean comes from the idea of \"dividing the total into equal parts\"; the median is more robust to extreme values; the mode is the only one that can be used with non-numerical data."
    },
    {
     "id": "evento",
     "label": "Event",
     "x": 30,
     "y": 55,
     "color": "#ef4444",
     "html": "A possible outcome of a random experiment: certain, impossible or likely.",
     "why": "An experiment is random when we know the possible outcomes but not which one will come up: this is the case with a die, but also with the weather or genetics (Mendel used probability to explain heredity)."
    },
    {
     "id": "classica",
     "label": "Classical probability",
     "x": 15,
     "y": 80,
     "color": "#2563eb",
     "html": "p = favourable cases / possible cases, if the cases are equally likely.",
     "why": "It was born from the letters between <b>Pascal</b> and <b>Fermat</b> (1654) about games of chance; Laplace formulated it fully in 1812. It only works if all the cases have the same probability."
    },
    {
     "id": "frequentista",
     "label": "Frequentist probability",
     "x": 50,
     "y": 80,
     "color": "#14b8a6",
     "html": "Probability estimated as the relative frequency after a great many trials.",
     "why": "It is based on the <b>law of large numbers</b>, proved by <b>Jakob Bernoulli</b> (published in 1713): the more trials you do, the closer the frequency gets to the probability. This is how insurance companies calculate risks."
    },
    {
     "id": "composti",
     "label": "Compound events",
     "x": 85,
     "y": 62,
     "color": "#db2777",
     "html": "Addition for mutually exclusive events (or), multiplication for independent events (and).",
     "why": "If two events do not overlap, their favourable cases add up; if they are independent, each case of the first combines with each case of the second, as in the 6×6 grid of the two dice: that is why we multiply."
    },
    {
     "id": "decisioni",
     "label": "Decisions under uncertainty",
     "x": 85,
     "y": 92,
     "color": "#64748b",
     "html": "Weather forecasts, medicine, insurance, polls, sport.",
     "why": "Statistics and probability let us decide rationally when we cannot be sure: for example, a drug is approved by statistically comparing a group that takes it with a group that does not."
    }
   ],
   "edges": [
    [
     "dati",
     "frequenze",
     "are counted"
    ],
    [
     "dati",
     "grafici",
     "are represented"
    ],
    [
     "dati",
     "indici",
     "are summarised"
    ],
    [
     "frequenze",
     "frequentista",
     "estimate the"
    ],
    [
     "evento",
     "classica",
     "is measured with the"
    ],
    [
     "evento",
     "frequentista",
     "or with the"
    ],
    [
     "classica",
     "composti",
     "is combined in"
    ],
    [
     "composti",
     "decisioni",
     "help with"
    ],
    [
     "indici",
     "decisioni",
     "help with"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: probability",
   "questions": [
    {
     "type": "mc",
     "q": "What is the probability of drawing a heart from a 52-card French deck (13 hearts)?",
     "options": [
      "1/13",
      "1/4",
      "1/2"
     ],
     "answer": 1,
     "explain": "13/52 = 1/4."
    },
    {
     "type": "tf",
     "q": "A probability can be 1.5.",
     "answer": false,
     "explain": "Probability is always between 0 (impossible) and 1 (certain)."
    },
    {
     "type": "num",
     "q": "A bag contains 4 red marbles and 6 blue ones. What is the probability (in %) of drawing a red marble?",
     "answer": 40,
     "unit": "%",
     "explain": "4/10 = 0.4 = 40%."
    },
    {
     "type": "mc",
     "q": "Tails has come up 4 times in a row. On the 5th toss the probability of tails is…",
     "options": [
      "lower than 1/2",
      "1/2",
      "higher than 1/2"
     ],
     "answer": 1,
     "explain": "The tosses are independent: the coin does not remember the previous results."
    }
   ]
  },
  {
   "type": "remember",
   "title": "To remember",
   "html": "<ul>\n<li>Relative frequency = f / n; percentage = relative × 100.</li>\n<li><b>Mean</b> = sum ÷ number of data; <b>mode</b> = most frequent value; <b>median</b> = middle value of the ordered data.</li>\n<li><b>p(E) = favourable / possible</b>, with 0 ≤ p ≤ 1. Certain event: 1; impossible: 0.</li>\n<li>p(not E) = 1 − p(E).</li>\n<li>Mutually exclusive: p(A or B) = p(A) + p(B). Independent: p(A and B) = p(A) × p(B).</li>\n</ul>"
  }
 ],
 "glossary": [
  {
   "t": "Statistical population",
   "d": "The set of all the elements a survey is carried out on."
  },
  {
   "t": "Sample",
   "d": "A part of the population, chosen so as to represent it."
  },
  {
   "t": "Variable",
   "d": "The property observed (qualitative or quantitative)."
  },
  {
   "t": "Absolute frequency",
   "d": "How many times a value appears."
  },
  {
   "t": "Relative frequency",
   "d": "Absolute frequency divided by the total number of data."
  },
  {
   "t": "Arithmetic mean",
   "d": "The sum of the values divided by how many there are."
  },
  {
   "t": "Mode",
   "d": "The value that appears most often."
  },
  {
   "t": "Median",
   "d": "The middle value of the data put in order."
  },
  {
   "t": "Random event",
   "d": "An event that may or may not happen."
  },
  {
   "t": "Sample space",
   "d": "The set of all possible outcomes of an experiment."
  },
  {
   "t": "Independent events",
   "d": "Events where one happening does not change the probability of the other."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "num",
    "q": "Calculate the mean of 12, 15, 18, 15.",
    "answer": 15,
    "explain": "(12+15+18+15) ÷ 4 = 60 ÷ 4 = 15."
   },
   {
    "type": "num",
    "q": "What is the median of 2, 8, 5, 10, 4, 9?",
    "answer": 6.5,
    "tol": 0.01,
    "explain": "In order: 2, 4, 5, 8, 9, 10. The two middle ones are 5 and 8: (5+8) ÷ 2 = 6.5."
   },
   {
    "type": "text",
    "q": "What is the value that appears most often in a set of data called?",
    "answer": [
     "mode",
     "the mode"
    ],
    "explain": "It is the mode."
   },
   {
    "type": "mc",
    "q": "The number of siblings is a variable that is…",
    "options": [
     "qualitative",
     "quantitative",
     "neither"
    ],
    "answer": 1,
    "explain": "It is expressed by a number."
   },
   {
    "type": "num",
    "q": "In a pie chart, how many degrees does a sector representing 25% take up?",
    "answer": 90,
    "unit": "°",
    "explain": "25 × 3.6° = 90°."
   },
   {
    "type": "mc",
    "q": "When rolling a die, what is the probability of getting a number greater than 4?",
    "options": [
     "1/6",
     "1/3",
     "1/2",
     "2/3"
    ],
    "answer": 1,
    "explain": "Favourable: 5 and 6 → 2/6 = 1/3."
   },
   {
    "type": "tf",
    "q": "The event \"rolling a die gives 0\" has probability 0.",
    "answer": true,
    "explain": "It is an impossible event."
   },
   {
    "type": "num",
    "q": "The probability that it rains tomorrow is 0.3. What is the probability that it does NOT rain?",
    "answer": 0.7,
    "tol": 0.001,
    "explain": "1 − 0.3 = 0.7."
   },
   {
    "type": "mc",
    "q": "When rolling two dice, what is the probability that the sum is 2?",
    "options": [
     "1/36",
     "1/12",
     "1/6",
     "2/36"
    ],
    "answer": 0,
    "explain": "Only 1+1 out of 36 possible cases."
   },
   {
    "type": "mc",
    "q": "I toss a coin and roll a die. Probability of \"heads and 6\"?",
    "options": [
     "1/8",
     "1/12",
     "2/3",
     "7/12"
    ],
    "answer": 1,
    "explain": "Independent events: 1/2 × 1/6 = 1/12."
   },
   {
    "type": "tf",
    "q": "According to the law of large numbers, with many trials the relative frequency gets closer to the probability.",
    "answer": true,
    "explain": "It is the foundation of frequentist probability."
   },
   {
    "type": "order",
    "q": "Put the steps of a statistical survey in order.",
    "items": [
     "Define the problem and the population",
     "Collect the data",
     "Organise the data in tables and graphs",
     "Calculate the averages and interpret"
    ],
    "explain": "First you decide what to study, then you collect, organise and process the data."
   }
  ],
  "gen": [
   [
    "percent",
    2
   ],
   [
    "fracEquiv",
    1
   ]
  ]
 }
});
