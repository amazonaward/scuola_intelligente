TOPIC('en', {
  id: "m1-mat-potenze",
  title: "Powers",
  intro: "A <b>power</b> is a quick way of writing a multiplication of factors that are all the same: 2 × 2 × 2 × 2 × 2 = <b>2⁵</b>. We discover the terms, the special cases, the <b>properties</b> that simplify calculations and <b>scientific notation</b>, which lets us write gigantic numbers (like the distance to the stars) or tiny ones (like the size of a bacterium).",
  minutes: 45,
  sections: [
    {
      type: "text",
      title: "What is a power?",
      html: `<p>The <b>power</b> of a number is the product of several factors that are <b>equal</b> to that number.</p>
<p style="font-size:1.3em;text-align:center"><b>3⁴ = 3 × 3 × 3 × 3 = 81</b></p>
<ul>
<li>the <b>base</b> (3) is the factor that repeats;</li>
<li>the <b>exponent</b> (4), written small at the top right, says <b>how many times</b> the base is multiplied by itself;</li>
<li>the result (81) is also called a <b>power</b>.</li>
</ul>
<p>It is read "three to the fourth" (or "three to the power of four"). With exponent 2 we also say "<b>squared</b>" (5² = 25), with exponent 3 "<b>cubed</b>" (2³ = 8).</p>
<p><b>Watch out for the most common mistake</b>: 3⁴ is <b>not</b> 3 × 4 = 12! It is 3 × 3 × 3 × 3 = 81.</p>
<p>The operation is called <b>raising to a power</b> (exponentiation): it is the fifth operation, after the four you already know. Just as multiplication is repeated addition, a power is <b>repeated multiplication</b>.</p>`
    },
    {
      type: "svg",
      title: "Squares and cubes: why they are called that",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#ffffff"/>
<g stroke="#1e3a8a" stroke-width="2" fill="#93c5fd">
<rect x="40" y="70" width="45" height="45"/><rect x="85" y="70" width="45" height="45"/><rect x="130" y="70" width="45" height="45"/>
<rect x="40" y="115" width="45" height="45"/><rect x="85" y="115" width="45" height="45"/><rect x="130" y="115" width="45" height="45"/>
<rect x="40" y="160" width="45" height="45"/><rect x="85" y="160" width="45" height="45"/><rect x="130" y="160" width="45" height="45"/>
</g>
<text x="107" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#1e3a8a">3² = 9</text>
<text x="107" y="240" font-size="16" text-anchor="middle" fill="#334155">a square with side 3</text>
<g stroke="#9a3412" stroke-width="2">
<polygon points="330,120 450,120 450,240 330,240" fill="#fdba74"/>
<polygon points="330,120 380,80 500,80 450,120" fill="#fed7aa"/>
<polygon points="450,120 500,80 500,200 450,240" fill="#fb923c"/>
<line x1="370" y1="120" x2="370" y2="240"/><line x1="410" y1="120" x2="410" y2="240"/>
<line x1="330" y1="160" x2="450" y2="160"/><line x1="330" y1="200" x2="450" y2="200"/>
<line x1="347" y1="107" x2="467" y2="107"/><line x1="363" y1="93" x2="483" y2="93"/>
<line x1="370" y1="120" x2="420" y2="80"/><line x1="410" y1="120" x2="460" y2="80"/>
<line x1="467" y1="107" x2="467" y2="227"/><line x1="483" y1="93" x2="483" y2="213"/>
<line x1="450" y1="160" x2="500" y2="120"/><line x1="450" y1="200" x2="500" y2="160"/>
</g>
<text x="415" y="50" font-size="22" font-weight="bold" text-anchor="middle" fill="#9a3412">3³ = 27</text>
<text x="415" y="275" font-size="16" text-anchor="middle" fill="#334155">a cube with edge 3</text>
</svg>`,
      caption: "The Greeks thought of numbers as shapes: 3² is the little squares of a square with side 3, 3³ the little cubes of a cube with edge 3."
    },
    {
      type: "3d",
      title: "The cube of a number in 3D",
      scene: "blocks",
      options: { mode: "volume", a: 3, b: 3, c: 3 },
      caption: "3 × 3 × 3 = 3³ = 27 cubes. Set all the sides to 4: you get 4³ = 64. Then try 5: how many are there?"
    },
    {
      type: "remember",
      title: "The special cases",
      html: `<ul>
<li><b>Exponent 1</b>: a¹ = a (just one factor). 7¹ = 7</li>
<li><b>Exponent 0</b>: a⁰ = <b>1</b> (with a ≠ 0). 5⁰ = 1, 1000⁰ = 1 (we'll see why in a moment!)</li>
<li><b>Base 1</b>: 1ⁿ = 1. 1¹⁰⁰ = 1</li>
<li><b>Base 0</b>: 0ⁿ = 0 (with n ≠ 0). 0⁵ = 0</li>
<li><b>0⁰</b> has no meaning in arithmetic: it is an <b>indeterminate</b> form.</li>
<li><b>Base 10</b>: 10ⁿ = 1 followed by <b>n zeros</b>. 10⁶ = 1,000,000 (one million)</li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: calculating powers",
      questions: [
        { type: "num", q: "What is 2⁵?", answer: 32, tol: 0, explain: "2 × 2 × 2 × 2 × 2 = 32." },
        { type: "mc", q: "What is 4³ worth?", options: ["12", "64", "43", "7"], answer: 1, explain: "4 × 4 × 4 = 64. Not 4 × 3!" },
        { type: "num", q: "What is 9⁰?", answer: 1, tol: 0, explain: "Every number other than 0 raised to 0 gives 1." },
        { type: "tf", q: "10⁴ = 10,000", answer: true, explain: "1 followed by 4 zeros." }
      ]
    },
    {
      type: "text",
      title: "The properties of powers",
      html: `<p>Properties let you calculate with powers <b>without working them out</b>. They only hold in the cases shown!</p>
<table>
<tr><th>Property</th><th>Rule</th><th>Example</th></tr>
<tr><td><b>1. Product</b> of powers with the <b>same base</b></td><td>aᵐ × aⁿ = aᵐ⁺ⁿ<br>(add the exponents)</td><td>2³ × 2⁴ = 2⁷ = 128</td></tr>
<tr><td><b>2. Quotient</b> of powers with the <b>same base</b></td><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ<br>(subtract the exponents, m ≥ n)</td><td>5⁶ ÷ 5⁴ = 5² = 25</td></tr>
<tr><td><b>3. Power of a power</b></td><td>(aᵐ)ⁿ = aᵐ×ⁿ<br>(multiply the exponents)</td><td>(3²)³ = 3⁶ = 729</td></tr>
<tr><td><b>4. Product</b> of powers with the <b>same exponent</b></td><td>aⁿ × bⁿ = (a × b)ⁿ</td><td>2³ × 5³ = 10³ = 1000</td></tr>
<tr><td><b>5. Quotient</b> of powers with the <b>same exponent</b></td><td>aⁿ ÷ bⁿ = (a ÷ b)ⁿ</td><td>12² ÷ 4² = 3² = 9</td></tr>
</table>
<p><b>Why do they work?</b> Just write out the factors: 2³ × 2⁴ = (2×2×2) × (2×2×2×2) = seven 2s = 2⁷.</p>
<p><b>This is why a⁰ = 1</b>: 5³ ÷ 5³ = 5³⁻³ = 5⁰; but any number divided by itself is 1. So 5⁰ = 1!</p>
<p><b>Careful</b>: there is no rule for the <b>sum</b>! 2³ + 2⁴ = 8 + 16 = 24, which is <b>not</b> 2⁷ = 128.</p>`
    },
    {
      type: "example",
      title: "Practical example: an expression with powers",
      html: `<p>In expressions powers have <b>priority</b> over multiplications and divisions. Order: brackets → <b>powers</b> → × and ÷ → + and −.</p>
<p>Solve: <b>[ (2⁴ × 2³) ÷ 2⁵ + 3² ] × 2 − 5⁰</b></p>
<ol>
<li>round brackets using the properties: 2⁴ × 2³ = 2⁷; 2⁷ ÷ 2⁵ = 2² = 4</li>
<li>3² = 9 → [ 4 + 9 ] = 13</li>
<li>5⁰ = 1</li>
<li>13 × 2 − 1 = 26 − 1 = <b>25</b></li>
</ol>
<p>Another trick: <b>25² × 4²</b> = (25 × 4)² = 100² = <b>10,000</b>. Without the properties you would have had to calculate 625 × 16!</p>`
    },
    {
      type: "widget",
      title: "Which property?",
      widget: "match",
      options: { pairs: [["7² × 7⁵ = 7⁷", "product, same base"], ["9⁸ ÷ 9³ = 9⁵", "quotient, same base"], ["(4³)² = 4⁶", "power of a power"], ["2⁵ × 5⁵ = 10⁵", "product, same exponent"], ["15⁴ ÷ 3⁴ = 5⁴", "quotient, same exponent"], ["8⁰ = 1", "zero exponent"]] },
      caption: "Connect each equality with the property that justifies it."
    },
    {
      type: "text",
      title: "Powers of 10 and scientific notation",
      html: `<p>The <b>powers of 10</b> are the heart of our decimal system:</p>
<p>10¹ = 10 (ten), 10² = 100 (hundred), 10³ = 1,000 (thousand), 10⁶ = one million, 10⁹ = one billion.</p>
<p>Every number can be written in <b>expanded form</b> with powers of 10:<br>4,705 = 4 × 10³ + 7 × 10² + 0 × 10¹ + 5 × 10⁰.</p>
<p><b>Scientific notation</b> writes a number as <b>a × 10ⁿ</b>, where <b>a</b> is a number between 1 (included) and 10 (excluded). Scientists use it for very large numbers:</p>
<ul>
<li>Earth–Sun distance ≈ 150,000,000 km = <b>1.5 × 10⁸ km</b></li>
<li>speed of light ≈ 300,000 km/s = <b>3 × 10⁵ km/s</b></li>
<li>people on Earth ≈ 8,000,000,000 = <b>8 × 10⁹</b></li>
</ul>
<p><b>How to do it</b>: move the decimal point until only one non-zero digit is left in front of it; the exponent is the number of places you moved it. 47,000 → 4.7 (the point moves 4 places) → <b>4.7 × 10⁴</b>.</p>
<p>The <b>order of magnitude</b> is the power of 10 closest to the number: it is used for quick estimates. For example, 8 × 10⁹ has order of magnitude 10¹⁰ (because 8 is closer to 10 than to 1).</p>`
    },
    {
      type: "example",
      title: "Practical example: the danger of word of mouth",
      html: `<p>A fake message is forwarded: on the first day <b>1</b> person receives it and sends it to <b>3</b> friends. The next day each of the 3 sends it to 3 more, and so on.</p>
<table>
<tr><th>Day</th><th>New people</th><th>Power</th></tr>
<tr><td>1</td><td>3</td><td>3¹</td></tr>
<tr><td>2</td><td>9</td><td>3²</td></tr>
<tr><td>3</td><td>27</td><td>3³</td></tr>
<tr><td>5</td><td>243</td><td>3⁵</td></tr>
<tr><td>10</td><td>59,049</td><td>3¹⁰</td></tr>
<tr><td>20</td><td>3,486,784,401</td><td>3²⁰ ≈ 3.5 × 10⁹</td></tr>
</table>
<p>In 20 days (in theory) almost half of humanity! This kind of growth is called <b>exponential</b>: that is why fake news spreads so fast. Before you forward something, check it!</p>`
    },
    {
      type: "curiosity",
      title: "The legend of the chessboard",
      html: `<p>An Indian legend says that the inventor of chess asked the king for a reward: <b>1 grain of rice</b> on the first square, <b>2</b> on the second, <b>4</b> on the third, and so on, doubling up to the 64th square. The king laughed at such a modest request…</p>
<p>But on the last square there would have been <b>2⁶³</b> grains, and in all <b>2⁶⁴ − 1 = 18,446,744,073,709,551,615</b> grains: about 18 quintillion, about <b>600 times</b> the world's rice production in a year!</p>`
    },
    {
      type: "curiosity",
      title: "The googol and the sheet folded to the Moon",
      html: `<p>The number <b>10¹⁰⁰</b> (1 followed by 100 zeros) is called a <b>googol</b>: the name was invented in 1920 by the 9-year-old nephew of the American mathematician Edward Kasner, Milton Sirotta. The founders of <b>Google</b> chose the name of their company inspired by this very number!</p>
<p>And a thought experiment: a sheet of paper <b>0.1 mm</b> thick doubles its thickness each time you fold it in half. After <b>42 folds</b> the thickness would be 0.1 × 2⁴² mm ≈ <b>440,000 km</b>: more than the distance from the Earth to the Moon (about 384,000 km)! In practice nobody has managed to fold a sheet more than 12 times.</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand it",
      intro: "Powers grow in surprising ways. Here are other ways to \"feel\" them.",
      tabs: [
        {
          label: "🌳 The doubling tree",
          html: "<p>Imagine a family tree: you have 2 parents, 4 grandparents, 8 great-grandparents… Every generation back is a power of 2. Ten generations ago (about 300 years) you had 2¹⁰ = <b>1,024</b> ancestors!</p>",
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="260" fill="#f0fdf4"/><g stroke="#166534" stroke-width="2"><line x1="300" y1="225" x2="160" y2="165"/><line x1="300" y1="225" x2="440" y2="165"/><line x1="160" y1="165" x2="90" y2="105"/><line x1="160" y1="165" x2="230" y2="105"/><line x1="440" y1="165" x2="370" y2="105"/><line x1="440" y1="165" x2="510" y2="105"/></g><g fill="#22c55e"><circle cx="300" cy="225" r="18"/><circle cx="160" cy="165" r="16"/><circle cx="440" cy="165" r="16"/><circle cx="90" cy="105" r="14"/><circle cx="230" cy="105" r="14"/><circle cx="370" cy="105" r="14"/><circle cx="510" cy="105" r="14"/></g><g fill="#86efac">
<circle cx="55" cy="50" r="11"/><circle cx="125" cy="50" r="11"/><circle cx="195" cy="50" r="11"/><circle cx="265" cy="50" r="11"/><circle cx="335" cy="50" r="11"/><circle cx="405" cy="50" r="11"/><circle cx="475" cy="50" r="11"/><circle cx="545" cy="50" r="11"/></g><g font-size="16" font-weight="bold" fill="#14532d"><text x="320" y="250">you: 2⁰ = 1</text><text x="470" y="190">parents: 2¹ = 2</text><text x="10" y="135">grandparents: 2² = 4</text><text x="200" y="25">great-grandparents: 2³ = 8</text></g></svg>`
        },
        {
          label: "💻 Powers in computers",
          html: `<p>Computers count in <b>base 2</b> (the binary system): they use only 0 and 1. That is why memories have "odd" numbers:</p><ul><li>1 byte = 8 bits = 2³ bits, and can have 2⁸ = <b>256</b> different values;</li><li>1 kibibyte = 2¹⁰ = <b>1,024</b> bytes (about a thousand);</li><li>a 64 GB memory stick: 64 = 2⁶.</li></ul><p>In the binary system numbers are also written with powers of 2: 13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = <b>1101</b>. It is the same principle as the expanded form in base 10!</p>`
        },
        {
          label: "🧊 Squares in 3D",
          html: "<p>A square of 5 × 5 cubes contains 5² = 25 cubes. Increase the side by 1: the square becomes 6² = 36. Not just 6 cubes were added, but 11 (a row, a column and the corner)! Try it with the sliders and discover the rule for squares.</p>",
          scene: "blocks",
          options: { mode: "array", a: 5, b: 5 }
        },
        {
          label: "🇨🇳 A system without exponents",
          html: `<p>In <b>Chinese</b> and <b>Japanese</b> large numbers are grouped by 4 digits, not 3: there is a word for <b>10⁴</b> (万, <i>wàn</i> / <i>man</i>) and one for <b>10⁸</b> (亿, <i>yì</i> / 億 <i>oku</i>). So "one million" is said "a hundred wàn" (100 × 10⁴).</p><p>In India they use the <b>lakh</b> (10⁵) and the <b>crore</b> (10⁷), and write 1,00,00,000 instead of 10,000,000! The same number, different groupings: powers of 10 are the common language that gets everyone to agree.</p>`
        }
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: properties and scientific notation",
      questions: [
        { type: "mc", q: "3⁵ × 3² = ?", options: ["3¹⁰", "3⁷", "9⁷", "3³"], answer: 1, explain: "Same base: add the exponents, 5 + 2 = 7." },
        { type: "mc", q: "(2³)⁴ = ?", options: ["2⁷", "2¹²", "2⁸¹", "8⁷"], answer: 1, explain: "Power of a power: multiply the exponents, 3 × 4 = 12." },
        { type: "mc", q: "How do you write 6,200,000 in scientific notation?", options: ["62 × 10⁵", "6.2 × 10⁶", "0.62 × 10⁷", "6.2 × 10⁵"], answer: 1, explain: "The point moves 6 places; only one digit stays in front, 6.2." },
        { type: "tf", q: "2³ + 2² = 2⁵", answer: false, explain: "8 + 4 = 12, while 2⁵ = 32. For addition there are no properties!" }
      ]
    },
    {
      type: "conceptMap",
      title: "Map: why powers work this way",
      nodes: [
        { id: "moltiplicazione", label: "Repeated multiplication", x: 50, y: 5, color: "#64748b", html: "Factors that are all the same: 2 × 2 × 2.", why: "Just as multiplication shortens repeated addition, a power shortens repeated multiplication." },
        { id: "potenza", label: "Power aⁿ", x: 50, y: 20, color: "#2563eb", html: "Base a, exponent n.", why: "The notation with the exponent at the top was introduced by René Descartes in his \"Géométrie\" of 1637. Before that people wrote it out in full or with words (square, cube)." },
        { id: "figure", label: "Squares and cubes", x: 15, y: 32, color: "#ea580c", html: "a² = area of a square, a³ = volume of a cube.", why: "The Pythagoreans (6th century BC) represented numbers with pebbles arranged in shapes: hence the names \"square\" and \"cube\"." },
        { id: "casi", label: "Special cases", x: 85, y: 32, color: "#0ea5e9", html: "a¹ = a, a⁰ = 1, 1ⁿ = 1, 0ⁿ = 0.", why: "a⁰ = 1 is not a rule made up at random: it is the only value that keeps the quotient property true (aⁿ ÷ aⁿ = a⁰ = 1)." },
        { id: "proprieta", label: "Properties", x: 50, y: 44, color: "#9333ea", html: "Same base: add or subtract the exponents; power of a power: multiply the exponents; same exponent: multiply or divide the bases.", why: "They all come from counting factors: aᵐ × aⁿ has m factors plus n factors. The commutative and associative properties of multiplication let us group them." },
        { id: "espressioni", label: "Powers in expressions", x: 20, y: 64, color: "#f59e0b", html: "Brackets → powers → × and ÷ → + and −.", why: "A power \"binds\" even tighter than multiplication, because it is a shortened form of it." },
        { id: "dieci", label: "Powers of 10", x: 50, y: 66, color: "#16a34a", html: "10ⁿ = 1 followed by n zeros.", why: "They are the basis of the decimal place-value system: each place is worth 10 times the one to its right. Archimedes (3rd century BC), in the \"Sand Reckoner\", used a similar system to count the grains of sand in the universe." },
        { id: "scientifica", label: "Scientific notation", x: 80, y: 64, color: "#dc2626", html: "a × 10ⁿ with 1 ≤ a < 10.", why: "Scientists need it to compare quantities that are very far apart: from galaxies to viruses. It makes calculations simpler and shows the order of magnitude at once." },
        { id: "esponenziale", label: "Exponential growth", x: 35, y: 88, color: "#db2777", html: "Doubling or tripling at every step: growth is very fast.", why: "Bacteria, infections, bank interest and viral news grow like this. The chessboard legend shows how much our intuition underestimates powers." },
        { id: "binario", label: "Base 2 and computers", x: 70, y: 88, color: "#0f766e", html: "Computers use powers of 2.", why: "Gottfried Leibniz described the binary system in 1703; in the 20th century Claude Shannon showed that on/off electric circuits can calculate with 0 and 1." }
      ],
      edges: [["moltiplicazione", "potenza", "is shortened to"], ["potenza", "figure", "exponents 2 and 3"], ["potenza", "casi", "exponents 0 and 1"], ["potenza", "proprieta", "has"], ["proprieta", "casi", "explains a⁰ = 1"], ["proprieta", "espressioni", "simplifies"], ["potenza", "dieci", "base 10"], ["dieci", "scientifica", "makes possible"], ["potenza", "esponenziale", "describes"], ["esponenziale", "binario", "base 2"]]
    }
  ],
  glossary: [
    { t: "Power", d: "The product of several equal factors: aⁿ." },
    { t: "Base", d: "The factor that repeats in a power." },
    { t: "Exponent", d: "The number that shows how many times the base is multiplied by itself." },
    { t: "Square", d: "A power with exponent 2." },
    { t: "Cube", d: "A power with exponent 3." },
    { t: "Power of 10", d: "10ⁿ: 1 followed by n zeros." },
    { t: "Scientific notation", d: "Writing a number as a × 10ⁿ, with a between 1 and 10 (excluded)." },
    { t: "Order of magnitude", d: "The power of 10 closest to a number." },
    { t: "Exponential growth", d: "Growth in which at every step the quantity is multiplied by the same number." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "What is 5³?", answer: 125, tol: 0, explain: "5 × 5 × 5 = 125." },
      { type: "mc", q: "In 7⁴, the number 4 is called the…", options: ["base", "exponent", "factor", "power"], answer: 1, explain: "The exponent shows how many times the base 7 is multiplied by itself." },
      { type: "tf", q: "1²⁰ = 20", answer: false, explain: "1 multiplied by itself as many times as you like always gives 1." },
      { type: "mc", q: "2⁶ ÷ 2² = ?", options: ["2³", "2⁴", "2⁸", "1³"], answer: 1, explain: "Same base: subtract the exponents, 6 − 2 = 4." },
      { type: "num", q: "Calculate using the property: 4³ × 25³ = ? (write the number)", answer: 1000000, tol: 0, explain: "(4 × 25)³ = 100³ = 1,000,000." },
      { type: "mc", q: "Which number is correctly written in scientific notation?", options: ["35 × 10⁴", "0.7 × 10³", "3.5 × 10⁵", "10 × 10²"], answer: 2, explain: "The number in front must be between 1 (included) and 10 (excluded)." },
      { type: "num", q: "Solve: 2³ + 3² × 2 − 4⁰", answer: 25, tol: 0, explain: "8 + 9 × 2 − 1 = 8 + 18 − 1 = 25." },
      { type: "num", q: "Solve: (5² − 4²)² ÷ 3⁴", answer: 1, tol: 0, explain: "25 − 16 = 9; 9² = 81; 3⁴ = 81; 81 ÷ 81 = 1." },
      { type: "mc", q: "What is 10⁹ worth?", options: ["One million", "One billion", "One thousand", "One hundred million"], answer: 1, explain: "1 followed by 9 zeros: 1,000,000,000." },
      { type: "text", q: "How do you read \"6²\"? (six …)", answer: ["squared", "six squared", "to the second", "to the power of two", "to the power of 2"], explain: "Six squared = 36." },
      { type: "order", q: "Put these in order from the smallest to the biggest", items: ["2³", "3²", "2⁴", "5²", "3³"], explain: "8 < 9 < 16 < 25 < 27." },
      { type: "mc", q: "Why is 7⁰ = 1?", options: ["It is a convention with no reason", "Because 7³ ÷ 7³ = 7⁰ and any number divided by itself gives 1", "Because 7 × 0 = 0", "Because 0 doesn't count"], answer: 1, explain: "The quotient property forces a⁰ to be worth 1." }
    ],
    gen: [["power", 3]]
  }
});
