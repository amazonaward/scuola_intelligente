TOPIC('en', {
 "id": "p5-mat-potenze-intro",
 "title": "Powers",
 "intro": "How do you quickly write 10 × 10 × 10 × 10 × 10 × 10? With a <b>power</b>: 10<sup>6</sup>! Let's learn what <b>base</b> and <b>exponent</b> are, how to calculate powers and why the <b>powers of 10</b> are so useful for writing huge numbers.",
 "minutes": 30,
 "sections": [
  {
   "type": "text",
   "title": "A \"shortened\" multiplication",
   "html": "<p>When you multiply <b>the same number</b> by itself several times, you can write it in a short way with a <b>power</b>.</p>\n<p>Example: <b>2 × 2 × 2 × 2 = 2<sup>4</sup></b> and it is read \"two <b>to the fourth</b>\" (or \"two to the power of four\").</p>\n<ul>\n<li>The <b>base</b> (2) is the number that repeats, that is the factor that is multiplied.</li>\n<li>The <b>exponent</b> (4), written small at the top right, says <b>how many times</b> the base appears as a factor.</li>\n<li>The result (16) is also called a <b>power</b>.</li>\n</ul>\n<p>Watch out for the most common mistake: 2<sup>4</sup> is <b>not</b> 2 × 4 = 8! It is 2 × 2 × 2 × 2 = <b>16</b>.</p>"
  },
  {
   "type": "svg",
   "title": "Base and exponent",
   "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"300\" fill=\"#f0f9ff\"/>\n<text x=\"130\" y=\"170\" font-size=\"110\" font-weight=\"bold\" fill=\"#1d4ed8\" text-anchor=\"middle\">3</text>\n<text x=\"185\" y=\"100\" font-size=\"60\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">4</text>\n<text x=\"300\" y=\"150\" font-size=\"44\" fill=\"#1f2937\" text-anchor=\"middle\">=</text>\n<text x=\"460\" y=\"150\" font-size=\"34\" fill=\"#1f2937\" text-anchor=\"middle\"><tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan> × <tspan fill=\"#1d4ed8\">3</tspan></text>\n<text x=\"460\" y=\"200\" font-size=\"34\" font-weight=\"bold\" fill=\"#047857\" text-anchor=\"middle\">= 81</text>\n<path d=\"M200 70 Q260 40 330 60\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"340\" y=\"64\" font-size=\"18\" fill=\"#dc2626\">exponent: how many times</text>\n<path d=\"M120 190 Q130 240 180 255\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"3\"/>\n<text x=\"190\" y=\"262\" font-size=\"18\" fill=\"#1d4ed8\">base: the number that repeats</text>\n<path d=\"M375 165 L545 165\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"460\" y=\"110\" font-size=\"16\" fill=\"#dc2626\" text-anchor=\"middle\">4 equal factors</text>\n</svg>",
   "caption": "3⁴ is read “three to the fourth”: the base 3 is multiplied by itself 4 times."
  },
  {
   "type": "text",
   "title": "How to read and calculate them",
   "html": "<p>You calculate <b>step by step</b>, multiplying the result by the base:</p>\n<p>5<sup>3</sup> → 5 × 5 = 25 → 25 × 5 = <b>125</b></p>\n<table>\n<tr><th>Power</th><th>Read as</th><th>Calculation</th><th>Result</th></tr>\n<tr><td>4<sup>2</sup></td><td>four to the second (four <b>squared</b>)</td><td>4 × 4</td><td>16</td></tr>\n<tr><td>2<sup>3</sup></td><td>two to the third (two <b>cubed</b>)</td><td>2 × 2 × 2</td><td>8</td></tr>\n<tr><td>3<sup>4</sup></td><td>three to the fourth</td><td>3 × 3 × 3 × 3</td><td>81</td></tr>\n<tr><td>2<sup>5</sup></td><td>two to the fifth</td><td>2 × 2 × 2 × 2 × 2</td><td>32</td></tr>\n</table>\n<p>Two special cases:</p>\n<ul>\n<li>with exponent <b>1</b> the result is the base itself: 7<sup>1</sup> = 7;</li>\n<li>with exponent <b>0</b> the result is always <b>1</b> (if the base is not 0): 9<sup>0</sup> = 1, 100<sup>0</sup> = 1.</li>\n</ul>\n<p>And if the base is <b>1</b>? 1<sup>50</sup> = 1 × 1 × … × 1 = <b>1</b>!</p>"
  },
  {
   "type": "3d",
   "title": "Square and cube in 3D",
   "scene": "blocks",
   "options": {
    "mode": "volume",
    "a": 3,
    "b": 3,
    "c": 3
   },
   "caption": "3 × 3 × 3 = 3³ = 27 little cubes: that is why the exponent 3 is called “cube”. Try setting the height to 1: you see a square of 3 × 3 = 3² = 9 little cubes, the “square”."
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: base and exponent",
   "questions": [
    {
     "type": "mc",
     "q": "In 6<sup>3</sup> what is the base?",
     "options": [
      "3",
      "6",
      "18"
     ],
     "answer": 1,
     "explain": "The base is the big number that repeats: 6."
    },
    {
     "type": "num",
     "q": "What is 2<sup>3</sup>?",
     "answer": 8,
     "explain": "2 × 2 × 2 = 8 (not 2 × 3!)."
    },
    {
     "type": "tf",
     "q": "5<sup>2</sup> = 10",
     "answer": false,
     "explain": "5<sup>2</sup> = 5 × 5 = 25. 10 would be 5 × 2."
    },
    {
     "type": "num",
     "q": "What is 8<sup>0</sup>?",
     "answer": 1,
     "explain": "Every number (other than 0) raised to 0 gives 1."
    }
   ]
  },
  {
   "type": "text",
   "title": "The powers of 10",
   "html": "<p>The most convenient powers of all are those with <b>base 10</b>. Look:</p>\n<table>\n<tr><th>Power</th><th>Number</th><th>Name</th></tr>\n<tr><td>10<sup>0</sup></td><td>1</td><td>one</td></tr>\n<tr><td>10<sup>1</sup></td><td>10</td><td>ten</td></tr>\n<tr><td>10<sup>2</sup></td><td>100</td><td>hundred</td></tr>\n<tr><td>10<sup>3</sup></td><td>1,000</td><td>thousand</td></tr>\n<tr><td>10<sup>6</sup></td><td>1,000,000</td><td>million</td></tr>\n<tr><td>10<sup>9</sup></td><td>1,000,000,000</td><td>billion</td></tr>\n</table>\n<p>The magic rule: <b>the exponent is equal to the number of zeros</b> after the 1. 10<sup>5</sup> = 1 followed by 5 zeros = 100,000.</p>\n<p>Each place in our number system is worth a power of 10: that is why it is called the <b>decimal</b> system (base 10).</p>"
  },
  {
   "type": "text",
   "title": "Writing a number in expanded form",
   "html": "<p>With the powers of 10 we can \"take apart\" a number into its digits. It is called <b>expanded form</b> (polynomial decomposition):</p>\n<p><b>4,352</b> = 4 × 1000 + 3 × 100 + 5 × 10 + 2 × 1</p>\n<p><b>4,352</b> = 4 × 10<sup>3</sup> + 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup></p>\n<p>And giant numbers are written more quickly: the Earth–Sun distance is about <b>150,000,000 km</b>, that is <b>15 × 10<sup>7</sup> km</b> (scientists write 1.5 × 10<sup>8</sup> km).</p>"
  },
  {
   "type": "widget",
   "title": "Powers on the abacus",
   "widget": "abacus",
   "options": {
    "columns": [
     "uk",
     "h",
     "da",
     "u"
    ],
    "value": 4352
   },
   "caption": "Each rod is worth 10 times the one to its right: O = 10⁰, T = 10¹, H = 10², Th = 10³. Change the beads and write the number in expanded form."
  },
  {
   "type": "example",
   "title": "Practical example: the chain of messages",
   "html": "<p>Luca sends a message to <b>3 friends</b>. Each of them sends it to 3 others, and so on. How many people receive it in each \"round\"?</p>\n<ul>\n<li>1st round: 3 = <b>3<sup>1</sup></b></li>\n<li>2nd round: 3 × 3 = <b>3<sup>2</sup> = 9</b></li>\n<li>3rd round: 3 × 3 × 3 = <b>3<sup>3</sup> = 27</b></li>\n<li>4th round: <b>3<sup>4</sup> = 81</b></li>\n<li>10th round: <b>3<sup>10</sup> = 59,049</b> people!</li>\n</ul>\n<p>That is why news (even fake news!) spreads so fast: it grows \"by powers\".</p>"
  },
  {
   "type": "example",
   "title": "Practical example: tiles and boxes",
   "html": "<p>The floor of the bedroom is a square with <b>8 tiles per side</b>. How many tiles in all? 8 × 8 = <b>8<sup>2</sup> = 64</b>.</p>\n<p>A warehouse stacks cube-shaped boxes: <b>5</b> in length, <b>5</b> in width and <b>5</b> in height. How many boxes? 5 × 5 × 5 = <b>5<sup>3</sup> = 125</b>.</p>\n<p>That is why the exponent 2 is called <b>square</b> and the exponent 3 is called <b>cube</b>!</p>"
  },
  {
   "type": "svg",
   "title": "Doubling: 2¹, 2², 2³, 2⁴",
   "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#fefce8\"/>\n<g fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"2\">\n<rect x=\"40\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"40\" y=\"198\" width=\"24\" height=\"24\"/>\n<rect x=\"130\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"130\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"158\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"158\" y=\"170\" width=\"24\" height=\"24\"/>\n</g>\n<g fill=\"#22c55e\" stroke=\"#166534\" stroke-width=\"2\">\n<rect x=\"240\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"114\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"142\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"170\" width=\"24\" height=\"24\"/>\n<rect x=\"240\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"268\" y=\"198\" width=\"24\" height=\"24\"/>\n</g>\n<g fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"2\">\n<rect x=\"360\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"114\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"114\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"142\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"142\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"170\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"170\" width=\"24\" height=\"24\"/>\n<rect x=\"360\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"388\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"416\" y=\"198\" width=\"24\" height=\"24\"/><rect x=\"444\" y=\"198\" width=\"24\" height=\"24\"/>\n</g>\n<text x=\"52\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2¹ = 2</text>\n<text x=\"156\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2² = 4</text>\n<text x=\"266\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2³ = 8</text>\n<text x=\"414\" y=\"255\" font-size=\"20\" text-anchor=\"middle\" font-weight=\"bold\">2⁴ = 16</text>\n<text x=\"300\" y=\"50\" font-size=\"22\" fill=\"#7c2d12\" text-anchor=\"middle\">Each time the exponent grows by 1, the squares double</text>\n<text x=\"540\" y=\"180\" font-size=\"26\" fill=\"#7c2d12\" text-anchor=\"middle\">…2⁵ = 32</text>\n</svg>",
   "caption": "Adding 1 to the exponent means multiplying once more by the base."
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The legend of chess",
   "html": "<p>The story goes that the inventor of <b>chess</b> asked the king for a reward: 1 grain of rice on the first square, 2 on the second, 4 on the third, 8 on the fourth… doubling up to the 64th square. The king laughed: \"Is that all?\".</p>\n<p>But on the last square <b>2<sup>63</sup></b> grains were needed: about <b>9 billion billion</b>! Much more rice than has ever been grown in the whole history of humankind.</p>"
  },
  {
   "type": "curiosity",
   "title": "Did you know…? The googol",
   "html": "<p>A number with 1 followed by <b>100 zeros</b>, that is <b>10<sup>100</sup></b>, is called a <b>googol</b>. The name was invented in 1938 by a 9-year-old boy, Milton Sirotta, the nephew of the mathematician Edward Kasner.</p>\n<p>The name of the company <b>Google</b> comes from there (spelled a bit wrong!). Think: the atoms in the whole visible universe are \"only\" about 10<sup>80</sup>.</p>"
  },
  {
   "type": "remember",
   "title": "Remember",
   "html": "<ul>\n<li>Power = multiplication of <b>equal factors</b>: a<sup>n</sup> = a × a × … × a (n times).</li>\n<li><b>Base</b> = the factor that repeats; <b>exponent</b> = how many times.</li>\n<li>Exponent 2 = <b>square</b>; exponent 3 = <b>cube</b>.</li>\n<li>a<sup>1</sup> = a; a<sup>0</sup> = 1 (with a different from 0); 1<sup>n</sup> = 1.</li>\n<li>10<sup>n</sup> = 1 followed by <b>n zeros</b>.</li>\n</ul>"
  },
  {
   "type": "alternatives",
   "title": "Other ways to understand powers",
   "intro": "If “base” and “exponent” seem strange words, try one of these roads: trees, little cubes, folding paper or the way they are written in other countries.",
   "tabs": [
    {
     "label": "🌳 The tree of branches",
     "html": "<p>Imagine a tree: the trunk splits into <b>2 branches</b>, each branch into 2 more, and so on.</p>\n<ul>\n<li>at the 1st level there are 2 branches = 2<sup>1</sup>;</li>\n<li>at the 2nd level 4 twigs = 2<sup>2</sup>;</li>\n<li>at the 3rd level 8 twigs = 2<sup>3</sup>.</li>\n</ul>\n<p>The <b>exponent</b> is the <b>number of the level</b>, the <b>base</b> is <b>how many parts</b> each branch splits into.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"600\" height=\"280\" fill=\"#f0fdf4\"/>\n<g stroke=\"#78350f\" stroke-width=\"6\" fill=\"none\">\n<line x1=\"300\" y1=\"270\" x2=\"300\" y2=\"220\"/>\n<line x1=\"300\" y1=\"220\" x2=\"180\" y2=\"160\"/><line x1=\"300\" y1=\"220\" x2=\"420\" y2=\"160\"/>\n</g>\n<g stroke=\"#92400e\" stroke-width=\"4\">\n<line x1=\"180\" y1=\"160\" x2=\"120\" y2=\"100\"/><line x1=\"180\" y1=\"160\" x2=\"240\" y2=\"100\"/>\n<line x1=\"420\" y1=\"160\" x2=\"360\" y2=\"100\"/><line x1=\"420\" y1=\"160\" x2=\"480\" y2=\"100\"/>\n</g>\n<g stroke=\"#16a34a\" stroke-width=\"3\">\n<line x1=\"120\" y1=\"100\" x2=\"95\" y2=\"45\"/><line x1=\"120\" y1=\"100\" x2=\"145\" y2=\"45\"/>\n<line x1=\"240\" y1=\"100\" x2=\"215\" y2=\"45\"/><line x1=\"240\" y1=\"100\" x2=\"265\" y2=\"45\"/>\n<line x1=\"360\" y1=\"100\" x2=\"335\" y2=\"45\"/><line x1=\"360\" y1=\"100\" x2=\"385\" y2=\"45\"/>\n<line x1=\"480\" y1=\"100\" x2=\"455\" y2=\"45\"/><line x1=\"480\" y1=\"100\" x2=\"505\" y2=\"45\"/>\n</g>\n<g fill=\"#22c55e\"><circle cx=\"95\" cy=\"40\" r=\"9\"/><circle cx=\"145\" cy=\"40\" r=\"9\"/><circle cx=\"215\" cy=\"40\" r=\"9\"/><circle cx=\"265\" cy=\"40\" r=\"9\"/><circle cx=\"335\" cy=\"40\" r=\"9\"/><circle cx=\"385\" cy=\"40\" r=\"9\"/><circle cx=\"455\" cy=\"40\" r=\"9\"/><circle cx=\"505\" cy=\"40\" r=\"9\"/></g>\n<text x=\"530\" y=\"170\" font-size=\"20\" fill=\"#1f2937\">2¹ = 2</text>\n<text x=\"530\" y=\"110\" font-size=\"20\" fill=\"#1f2937\">2² = 4</text>\n<text x=\"530\" y=\"50\" font-size=\"20\" fill=\"#1f2937\">2³ = 8</text>\n</svg>"
    },
    {
     "label": "🧊 3D cubes",
     "html": "<p>Build a cube of little cubes: <b>4</b> wide, <b>4</b> deep, <b>4</b> high. How many little cubes do you need? <b>4 × 4 × 4 = 4<sup>3</sup> = 64</b>.</p>\n<p>Rotate the model and count first one layer (4 × 4 = 4<sup>2</sup> = 16), then multiply by the layers. Change the sliders to see 2<sup>3</sup>, 5<sup>3</sup>…</p>",
     "scene": "blocks",
     "options": {
      "mode": "volume",
      "a": 4,
      "b": 4,
      "c": 4
     }
    },
    {
     "label": "📄 Fold the paper",
     "html": "<p>Take a sheet of paper and fold it in half: you have <b>2</b> layers. Fold it again: <b>4</b>. Again: <b>8</b>…</p>\n<p>After <b>n</b> folds you have <b>2<sup>n</sup></b> layers. After 7 folds (2<sup>7</sup> = 128 layers) it is almost impossible to fold it again!</p>\n<p>If you could fold a thin sheet 0.1 mm thick <b>42 times</b>, the thickness (2<sup>42</sup> layers) would exceed the distance from the Earth to the Moon. Powers grow incredibly!</p>"
    },
    {
     "label": "🌍 How it's written elsewhere",
     "html": "<p>All over the world the exponent is written at the top right: 2<sup>4</sup>. But the way of reading it changes:</p>\n<ul>\n<li>🇮🇹 \"due <b>alla quarta</b>\" (two to the fourth)</li>\n<li>🇬🇧🇺🇸 \"two <b>to the power of</b> four\" or \"two to the fourth\"</li>\n<li>🇫🇷 \"deux <b>puissance</b> quatre\"</li>\n<li>🇩🇪 \"zwei <b>hoch</b> vier\" (that is \"two <i>up</i> four\")</li>\n</ul>\n<p>On calculators and in computers, where you can't write small, the symbol <b>^</b> is used: <code>2^4</code>. In many programming languages (like Python) it is written <code>2**4</code>.</p>"
    },
    {
     "label": "➕ Repeated addition and repeated product",
     "html": "<p>Remember multiplication? It is a <b>repeated addition</b>: 3 × 4 = 3 + 3 + 3 + 3.</p>\n<p>The power is the next step: a <b>repeated multiplication</b>: 3<sup>4</sup> = 3 × 3 × 3 × 3.</p>\n<table>\n<tr><th>Operation</th><th>What it repeats</th><th>Example</th></tr>\n<tr><td>Multiplication</td><td>additions</td><td>3 × 4 = 12</td></tr>\n<tr><td>Power</td><td>multiplications</td><td>3<sup>4</sup> = 81</td></tr>\n</table>\n<p>That is why 3<sup>4</sup> is much bigger than 3 × 4!</p>"
    },
    {
     "label": "🇮🇳 The legend of the chessboard (India)",
     "html": "<p>A famous <b>legend</b> says that in <b>India</b> the inventor of chess (in many versions called <b>Sissa</b>) presented the game to the king. The king, delighted, said to him: «Ask me for whatever you want!». The inventor asked only for grains of wheat: <b>1</b> grain on the first square, <b>2</b> on the second, <b>4</b> on the third, and so on, <b>doubling</b> each time up to square 64. The king laughed: «Is that all?». The legend was already told in the Middle Ages by Arab and Persian writers.</p><p>Let's do the sums with the <b>powers of 2</b>:</p><ul><li>square 1: 1 = 2<sup>0</sup>; square 2: 2 = 2<sup>1</sup>; square 3: 4 = 2<sup>2</sup>…</li><li>on square <b>n</b> there are <b>2<sup>n−1</sup></b> grains;</li><li>square 11: 2<sup>10</sup> = 1,024; square 21: 2<sup>20</sup> = more than <b>a million</b>;</li><li>square 64: 2<sup>63</sup>, a 19-digit number!</li></ul><p>In all, 2<sup>64</sup> − 1 = <b>18,446,744,073,709,551,615</b> grains would be needed: much more than the wheat harvested in the whole world in hundreds of years. The king could not pay! Powers grow <b>very fast</b>.</p>",
     "svg": "<svg viewBox=\"0 0 600 280\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"280\" fill=\"#fffbeb\"/><rect x=\"36\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"69\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"69\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁰</text><rect x=\"102\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"135\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">2</text><text x=\"135\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2¹</text><rect x=\"168\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"201\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><text x=\"201\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2²</text><rect x=\"234\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"267\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">8</text><text x=\"267\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2³</text><rect x=\"300\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"333\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">16</text><text x=\"333\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁴</text><rect x=\"366\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"399\" y=\"70\" font-size=\"20\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">32</text><text x=\"399\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁵</text><rect x=\"432\" y=\"40\" width=\"66\" height=\"66\" fill=\"#fde68a\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"465\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">64</text><text x=\"465\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#78350f\" text-anchor=\"middle\">2⁶</text><rect x=\"498\" y=\"40\" width=\"66\" height=\"66\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"2\"/><text x=\"531\" y=\"70\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#fff\" text-anchor=\"middle\" font-weight=\"bold\">128</text><text x=\"531\" y=\"96\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#fde68a\" text-anchor=\"middle\">2⁷</text><text x=\"300\" y=\"140\" font-size=\"17\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">Square n → 2 to the power (n − 1) grains</text><text x=\"300\" y=\"175\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">square 11 → 2¹⁰ = 1,024</text><text x=\"300\" y=\"200\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\">square 21 → 2²⁰ = 1,048,576 (more than a million!)</text><text x=\"300\" y=\"235\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">In all: 2⁶⁴ − 1 =</text><text x=\"300\" y=\"262\" font-size=\"18\" font-family=\"sans-serif\" fill=\"#b45309\" text-anchor=\"middle\" font-weight=\"bold\">18,446,744,073,709,551,615 grains</text></svg>"
    },
    {
     "label": "🇨🇳 Yang Hui's triangle (China)",
     "html": "<p>In <b>1261</b> the <b>Chinese</b> mathematician <b>Yang Hui</b> published a triangle of numbers that was already known in China for about two centuries (Jia Xian used it). In Italy we call it <b>Tartaglia's triangle</b>, in France and in English-speaking countries Pascal's triangle: but the Chinese knew it much earlier!</p><p>How to build it:</p><ol><li>At the top write <b>1</b>.</li><li>Each row begins and ends with <b>1</b>.</li><li>Every other number is the <b>sum of the two numbers above</b> it: 1 + 2 = 3, 3 + 3 = 6…</li></ol><p>Now <b>add up the numbers of each row</b>: 1, 2, 4, 8, 16, 32… They are the <b>powers of 2</b>! Row number n (counting from 0) has sum <b>2<sup>n</sup></b>.</p><p>Why? Each number in a row is used <b>twice</b> to build the next row (it ends up in the number below-left and in the one below-right): so each row has a sum <b>double</b> the previous one.</p><p>🎯 Write the next row yourself: what must the sum be?</p>",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"600\" height=\"300\" fill=\"#f8fafc\"/><circle cx=\"230\" cy=\"40\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"46\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 1 = 2⁰</text><circle cx=\"202\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"258\" cy=\"84\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"90\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 2 = 2¹</text><circle cx=\"174\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"230\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">2</text><circle cx=\"286\" cy=\"128\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"134\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 4 = 2²</text><circle cx=\"146\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"202\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"258\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">3</text><circle cx=\"314\" cy=\"172\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"178\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 8 = 2³</text><circle cx=\"118\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"118\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"174\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"174\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"230\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"230\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">6</text><circle cx=\"286\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"286\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">4</text><circle cx=\"342\" cy=\"216\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"342\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"222\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 16 = 2⁴</text><circle cx=\"90\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"90\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><circle cx=\"146\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"146\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"202\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"202\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"258\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"258\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">10</text><circle cx=\"314\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"314\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">5</text><circle cx=\"370\" cy=\"260\" r=\"19\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"370\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1e293b\" text-anchor=\"middle\" font-weight=\"bold\">1</text><text x=\"470\" y=\"266\" font-size=\"16\" font-family=\"sans-serif\" fill=\"#1d4ed8\" font-weight=\"bold\">sum = 32 = 2⁵</text><text x=\"230\" y=\"296\" font-size=\"15\" font-family=\"sans-serif\" fill=\"#475569\" text-anchor=\"middle\">3 + 3 above → 6 below</text></svg>"
    }
   ]
  },
  {
   "type": "conceptMap",
   "title": "Map of powers: touch a node and discover the why",
   "nodes": [
    {
     "id": "molt",
     "label": "Multiplication",
     "x": 50,
     "y": 6,
     "color": "#2563eb",
     "html": "An operation that repeats an addition: 4 × 3 = 4 + 4 + 4.",
     "why": "Powers are born from multiplication just as multiplication is born from addition: each operation is an abbreviation of the previous one repeated."
    },
    {
     "id": "potenza",
     "label": "Power",
     "x": 50,
     "y": 30,
     "color": "#16a34a",
     "html": "A product of factors that are all equal: a<sup>n</sup>.",
     "why": "The <b>Babylonians</b> (about 4000 years ago) already had tables of squares and cubes. The modern notation with the small exponent at the top was introduced by the French philosopher and mathematician <b>René Descartes</b> in 1637."
    },
    {
     "id": "base",
     "label": "Base",
     "x": 18,
     "y": 50,
     "color": "#f59e0b",
     "html": "The factor that repeats.",
     "why": "It is called base because it is the \"starting\" number on which the whole power is built, like the base of a building."
    },
    {
     "id": "esp",
     "label": "Exponent",
     "x": 82,
     "y": 50,
     "color": "#ef4444",
     "html": "The small number at the top: how many times the base repeats.",
     "why": "From the Latin <i>exponere</i>, \"to put on show, to expose\": it is the number put in evidence at the top. It grows by 1 each time you multiply once more by the base."
    },
    {
     "id": "quadcubo",
     "label": "Square and cube",
     "x": 18,
     "y": 76,
     "color": "#a855f7",
     "html": "a<sup>2</sup> is read \"a squared\", a<sup>3</sup> \"a cubed\".",
     "why": "Greek mathematicians, like <b>Euclid</b>, thought of numbers as figures: a number times itself forms a square of dots; three times forms a cube. The geometric names have remained."
    },
    {
     "id": "zero",
     "label": "Exponent 0 and 1",
     "x": 50,
     "y": 62,
     "color": "#0ea5e9",
     "html": "a<sup>1</sup> = a; a<sup>0</sup> = 1.",
     "why": "Look at the ladder 2<sup>3</sup> = 8, 2<sup>2</sup> = 4, 2<sup>1</sup> = 2: each time the exponent goes down by 1 you <b>divide by the base</b>. One more step: 2 ÷ 2 = 1, so 2<sup>0</sup> = 1. It is a convention chosen so that all the rules keep working."
    },
    {
     "id": "dieci",
     "label": "Powers of 10",
     "x": 82,
     "y": 76,
     "color": "#14b8a6",
     "html": "10<sup>n</sup> = 1 followed by n zeros.",
     "why": "Our number system is <b>decimal and positional</b>: each place is worth 10 times the one to its right. We probably use 10 because we have 10 fingers! The Hindu-Arabic digits and zero arrived in Europe with <b>Fibonacci</b> in 1202."
    },
    {
     "id": "scientifica",
     "label": "Giant numbers",
     "x": 50,
     "y": 92,
     "color": "#64748b",
     "html": "Powers of 10 are used to write enormous numbers in little space.",
     "why": "<b>Archimedes</b> already, in the 3rd century BC, in the book <i>The Sand Reckoner</i>, invented a way of counting with \"myriads of myriads\" to estimate how many grains of sand would be needed to fill the universe. Today scientists use <b>scientific notation</b> (e.g. 1.5 × 10<sup>8</sup> km)."
    }
   ],
   "edges": [
    [
     "molt",
     "potenza",
     "repeated becomes"
    ],
    [
     "potenza",
     "base",
     "has a"
    ],
    [
     "potenza",
     "esp",
     "has an"
    ],
    [
     "base",
     "quadcubo",
     "by itself 2 or 3 times"
    ],
    [
     "esp",
     "zero",
     "special cases"
    ],
    [
     "esp",
     "dieci",
     "count the zeros"
    ],
    [
     "dieci",
     "scientifica",
     "are used for"
    ]
   ]
  },
  {
   "type": "quiz",
   "title": "Mini-quiz: powers of 10 and problems",
   "questions": [
    {
     "type": "num",
     "q": "How many zeros does 10<sup>6</sup> have when written out in full?",
     "answer": 6,
     "explain": "The exponent shows the number of zeros: 1,000,000."
    },
    {
     "type": "mc",
     "q": "How do you write 1000 as a power of 10?",
     "options": [
      "10<sup>2</sup>",
      "10<sup>3</sup>",
      "3<sup>10</sup>"
     ],
     "answer": 1,
     "explain": "1000 = 10 × 10 × 10 = 10<sup>3</sup>."
    },
    {
     "type": "num",
     "q": "A square has 7 tiles per side. How many tiles are there in all?",
     "answer": 49,
     "explain": "7<sup>2</sup> = 7 × 7 = 49."
    }
   ]
  }
 ],
 "glossary": [
  {
   "t": "Power",
   "d": "Multiplication of equal factors, written in short form (e.g. 2⁵); also its result."
  },
  {
   "t": "Base",
   "d": "The factor that repeats in the power."
  },
  {
   "t": "Exponent",
   "d": "The small number at the top: how many times the base is multiplied by itself."
  },
  {
   "t": "Square",
   "d": "A power with exponent 2: a × a."
  },
  {
   "t": "Cube",
   "d": "A power with exponent 3: a × a × a."
  },
  {
   "t": "Power of 10",
   "d": "10 raised to an exponent: 1 followed by as many zeros as the exponent."
  },
  {
   "t": "Expanded form",
   "d": "Writing a number as a sum of digits times powers of 10."
  },
  {
   "t": "Googol",
   "d": "The number 10¹⁰⁰: 1 followed by 100 zeros."
  }
 ],
 "verifica": {
  "pass": 0.7,
  "questions": [
   {
    "type": "mc",
    "q": "How do you write 7 × 7 × 7 × 7 as a power?",
    "options": [
     "7<sup>4</sup>",
     "4<sup>7</sup>",
     "7 × 4"
    ],
    "answer": 0,
    "explain": "The base is 7, which appears 4 times: 7<sup>4</sup>."
   },
   {
    "type": "num",
    "q": "What is 3<sup>3</sup>?",
    "answer": 27,
    "explain": "3 × 3 × 3 = 27."
   },
   {
    "type": "num",
    "q": "What is 10<sup>4</sup>?",
    "answer": 10000,
    "explain": "1 followed by 4 zeros: 10,000."
   },
   {
    "type": "tf",
    "q": "2<sup>5</sup> = 10",
    "answer": false,
    "explain": "2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32. You don't multiply base by exponent!"
   },
   {
    "type": "text",
    "q": "What is the small number written at the top right called?",
    "answer": [
     "exponent",
     "the exponent",
     "an exponent"
    ],
    "explain": "It is the exponent."
   },
   {
    "type": "mc",
    "q": "What is 15<sup>1</sup> worth?",
    "options": [
     "1",
     "15",
     "0"
    ],
    "answer": 1,
    "explain": "With exponent 1 the result is the base itself."
   },
   {
    "type": "tf",
    "q": "Any number other than 0 raised to 0 gives 1.",
    "answer": true,
    "explain": "By convention a<sup>0</sup> = 1: it is the step that comes after a<sup>1</sup> by dividing by the base."
   },
   {
    "type": "mc",
    "q": "How do you read 9<sup>2</sup>?",
    "options": [
     "nine times two",
     "nine squared",
     "nine cubed"
    ],
    "answer": 1,
    "explain": "Exponent 2: \"squared\"."
   },
   {
    "type": "order",
    "q": "Put in order from smallest to biggest.",
    "items": [
     "2<sup>2</sup>",
     "3<sup>2</sup>",
     "2<sup>4</sup>",
     "10<sup>2</sup>"
    ],
    "explain": "2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 2<sup>4</sup> = 16, 10<sup>2</sup> = 100."
   },
   {
    "type": "num",
    "q": "5,382 = 5 × 10<sup>3</sup> + 3 × 10<sup>?</sup> + 8 × 10 + 2. Which exponent is missing?",
    "answer": 2,
    "explain": "The 3 is in the hundreds place: 100 = 10<sup>2</sup>."
   },
   {
    "type": "num",
    "q": "A cube of little cubes has 6 little cubes along each edge. How many little cubes does it contain?",
    "answer": 216,
    "explain": "6<sup>3</sup> = 6 × 6 × 6 = 36 × 6 = 216."
   }
  ],
  "gen": [
   [
    "power",
    3
   ]
  ]
 }
});
