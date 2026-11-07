TOPIC('en', {
  id: "m2-mat-radici",
  title: "The square root",
  intro: "If you know the area of a square, how long is its side? To answer you need the inverse operation of squaring: the <b>square root</b>. We will discover <b>perfect squares</b>, how to calculate roots with <b>prime factorisation</b>, how to <b>approximate</b> them, and why √2 shocked the ancient mathematicians.",
  minutes: 50,
  sections: [
    {
      type: "text",
      title: "What a square root is",
      html: `<p>The <b>square root</b> of a number <i>a</i> is the number that, <b>multiplied by itself</b> (that is, squared), gives <i>a</i>.</p>
<p style="font-size:1.2em;text-align:center"><b>√a = b</b> &nbsp;because&nbsp; <b>b² = a</b></p>
<ul>
<li>√25 = 5 because 5² = 25;</li>
<li>√81 = 9 because 9² = 81;</li>
<li>√0 = 0, √1 = 1.</li>
</ul>
<p>The symbol <b>√</b> is called the <b>radical sign</b> and the number under the symbol is called the <b>radicand</b>. Extracting a root is the <b>inverse operation</b> of squaring, just as subtraction is the inverse of addition.</p>
<p>Among the numbers you know, the square root of a negative number <b>does not exist</b>: no number multiplied by itself gives a negative result (even (−3)² = +9).</p>`
    },
    {
      type: "svg",
      title: "Area and side of the square",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="300" fill="#f0f9ff"/>
<g stroke="#0c4a6e" stroke-width="2" fill="#38bdf8">
<rect x="40" y="40" width="44" height="44"/><rect x="84" y="40" width="44" height="44"/><rect x="128" y="40" width="44" height="44"/><rect x="172" y="40" width="44" height="44"/><rect x="216" y="40" width="44" height="44"/>
<rect x="40" y="84" width="44" height="44"/><rect x="84" y="84" width="44" height="44"/><rect x="128" y="84" width="44" height="44"/><rect x="172" y="84" width="44" height="44"/><rect x="216" y="84" width="44" height="44"/>
<rect x="40" y="128" width="44" height="44"/><rect x="84" y="128" width="44" height="44"/><rect x="128" y="128" width="44" height="44"/><rect x="172" y="128" width="44" height="44"/><rect x="216" y="128" width="44" height="44"/>
<rect x="40" y="172" width="44" height="44"/><rect x="84" y="172" width="44" height="44"/><rect x="128" y="172" width="44" height="44"/><rect x="172" y="172" width="44" height="44"/><rect x="216" y="172" width="44" height="44"/>
<rect x="40" y="216" width="44" height="44"/><rect x="84" y="216" width="44" height="44"/><rect x="128" y="216" width="44" height="44"/><rect x="172" y="216" width="44" height="44"/><rect x="216" y="216" width="44" height="44"/>
</g>
<text x="150" y="285" font-size="18" text-anchor="middle" fill="#0c4a6e" font-weight="bold">side = 5</text>
<text x="300" y="80" font-size="22" fill="#0c4a6e" font-weight="bold">Area = 25 little squares</text>
<text x="300" y="130" font-size="22" fill="#0369a1">5² = 25</text>
<text x="300" y="170" font-size="22" fill="#dc2626" font-weight="bold">√25 = 5</text>
<text x="300" y="215" font-size="16" fill="#334155">squaring: from the side to the area</text>
<text x="300" y="240" font-size="16" fill="#334155">square root: from the area to the side</text>
</svg>`,
      caption: "The word «square» is no accident: 5² really is the area of a square with side 5."
    },
    {
      type: "text",
      title: "Perfect squares",
      html: `<p>A number is called a <b>perfect square</b> if it is the square of a natural number: its root is a whole number.</p>
<table>
<tr><td>1²=1</td><td>2²=4</td><td>3²=9</td><td>4²=16</td><td>5²=25</td><td>6²=36</td><td>7²=49</td><td>8²=64</td></tr>
<tr><td>9²=81</td><td>10²=100</td><td>11²=121</td><td>12²=144</td><td>13²=169</td><td>14²=196</td><td>15²=225</td><td>20²=400</td></tr>
</table>
<p><b>How to recognise them</b>: break the number into prime factors. It is a perfect square if <b>all the exponents are even</b>.</p>
<ul>
<li>144 = 2⁴ × 3² → exponents 4 and 2, even → <b>yes</b>;</li>
<li>72 = 2³ × 3² → the exponent 3 is odd → <b>no</b>.</li>
</ul>
<p>Quick trick: a perfect square <b>never ends</b> in the digits 2, 3, 7 or 8.</p>`
    },
    {
      type: "widget",
      title: "Build a square",
      widget: "areaGrid",
      options: { w: 6, h: 6, max: 12 },
      caption: "Set base and height equal: the area is a perfect square and the side is its root. Try 7 × 7, 9 × 9, 12 × 12."
    },
    {
      type: "text",
      title: "Calculating the root with factorisation",
      html: `<p>To calculate the square root of a perfect square:</p>
<ol>
<li><b>break</b> the number into prime factors;</li>
<li><b>halve</b> all the exponents;</li>
<li><b>multiply</b> the factors you get.</li>
</ol>
<p>Example: √576 → 576 = 2⁶ × 3² → √576 = 2³ × 3¹ = 8 × 3 = <b>24</b>. Check: 24 × 24 = 576 ✓</p>
<p>Example: √1225 → 1225 = 5² × 7² → √1225 = 5 × 7 = <b>35</b>.</p>
<p>Why do we halve the exponents? Because when you square a number the exponents <b>double</b>: (2³ × 3)² = 2⁶ × 3². The root does the opposite.</p>`
    },
    {
      type: "text",
      title: "Properties of roots",
      html: `<ul>
<li><b>Product</b>: √(a × b) = √a × √b → √(4 × 9) = 2 × 3 = 6 (indeed √36 = 6).</li>
<li><b>Quotient</b>: √(a : b) = √a : √b → √(100/25) = 10/5 = 2.</li>
<li><b>Fractions</b>: √(9/16) = 3/4.</li>
<li><b>Careful!</b> The root does <b>not</b> distribute over sums and differences: √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7. <b>They are different!</b></li>
</ul>`
    },
    {
      type: "quiz",
      title: "Mini-quiz: perfect squares and exact roots",
      questions: [
        { type: "num", q: "√144 = ?", answer: 12, explain: "12 × 12 = 144." },
        { type: "mc", q: "Which number is a perfect square?", options: ["48", "196", "250"], answer: 1, explain: "196 = 14² (= 2² × 7²)." },
        { type: "tf", q: "√(16 + 9) = 4 + 3.", answer: false, explain: "√25 = 5, while 4 + 3 = 7: the root does not distribute over a sum." }
      ]
    },
    {
      type: "text",
      title: "Inexact roots: approximation",
      html: `<p>Most numbers are <b>not</b> perfect squares: √2, √10, √50… In these cases the root is an <b>infinite non-repeating decimal</b> (an <b>irrational</b> number) and we can only <b>approximate</b> it.</p>
<p><b>Trial-and-error method</b> (√50):</p>
<ol>
<li>Find the nearest perfect squares: 49 = 7² and 64 = 8² → 7 &lt; √50 &lt; 8.</li>
<li>Try tenths: 7.0² = 49; 7.1² = 50.41 → too much! So √50 ≈ <b>7.0</b> rounding down, 7.1 rounding up.</li>
<li>Try hundredths: 7.07² = 49.98…; 7.08² = 50.12… → √50 ≈ <b>7.07</b> to within a hundredth.</li>
</ol>
<p>Today we also use <b>number tables</b> (in school books) and the <b>calculator</b> (√ key): √50 = 7.0710678…</p>`
    },
    {
      type: "example",
      title: "Worked example: the square floor",
      html: `<p>A square floor has an area of <b>20.25 m²</b>. How long is its side?</p>
<ol>
<li>Side = √20.25.</li>
<li>I turn it into a fraction: 20.25 = 2025/100.</li>
<li>√2025 = 45 (because 2025 = 3⁴ × 5² → 3² × 5 = 45) and √100 = 10.</li>
<li>Side = 45/10 = <b>4.5 m</b>. Check: 4.5 × 4.5 = 20.25 ✓</li>
</ol>
<p>The perimeter of the floor is 4 × 4.5 = <b>18 m</b>: you need it to buy the skirting board!</p>`
    },
    {
      type: "example",
      title: "Worked example: the TV screen",
      html: `<p>A «50-inch» television has a <b>diagonal</b> of 50″. With the Pythagorean theorem the diagonal is found with a root: for a screen <b>40″</b> wide and <b>30″</b> tall:</p>
<p>diagonal = √(40² + 30²) = √(1600 + 900) = √2500 = <b>50″</b>.</p>
<p>Square roots are useful every time you know an <b>area</b> and want a <b>length</b>: designing rooms, sports fields, screens, maps.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The scandal of √2",
      html: `<p>The <b>Pythagoreans</b> (6th–5th century BC) thought everything could be expressed with ratios of whole numbers. Then they discovered that the <b>diagonal of a square with side 1</b>, which measures √2, <b>is not a fraction</b>! According to a legend, the Pythagorean <b>Hippasus of Metapontum</b>, who revealed the secret, died in a shipwreck as a «punishment from the gods». Today we know that √2 = 1.41421356… goes on forever without ever repeating.</p>`
    },
    {
      type: "curiosity",
      title: "Did you know…? The √ symbol",
      html: `<p>The symbol <b>√</b> probably comes from a <b>stylised «r»</b>, the initial of the Latin <i>radix</i> («root»). It appeared in print in <b>1525</b> in the book by the German <b>Christoph Rudolff</b>; the bar over the radicand was added by <b>Descartes</b> in 1637. And the Babylonian tablet <b>YBC 7289</b> (about 1800–1600 BC) shows a square with its diagonal and the value of √2 with an error of less than one millionth!</p>`
    },
    {
      type: "alternatives",
      title: "Other ways to understand the square root",
      intro: "The square root can be seen, built and even «guessed» as the Babylonians did.",
      tabs: [
        {
          label: "🧊 3D square of cubes",
          html: `<p>Here are <b>49 cubes</b> arranged in a 7 × 7 square. The side of the square is the root: √49 = 7. Move the sliders: can you make a square with 50 cubes? No! 50 is not a perfect square: there is always something left over or something missing.</p>`,
          scene: "blocks",
          options: { mode: "array", a: 7, b: 7 }
        },
        {
          label: "🏺 Babylonian method",
          html: `<p>The Babylonians (and later <b>Hero of Alexandria</b>, 1st century AD) calculated roots with a clever method: «<b>guess and take the average</b>».</p>
<p>For √10: I start from a guess, 3.</p>
<ol>
<li>10 : 3 = 3.33. The root lies between 3 and 3.33 → average: (3 + 3.33) : 2 = <b>3.17</b>.</li>
<li>10 : 3.17 = 3.155. Average: (3.17 + 3.155) : 2 = <b>3.1625</b>.</li>
</ol>
<p>Already at the second step: 3.1625² = 10.0014. The true value is 3.16227…! Each step roughly doubles the number of correct digits. Calculators use similar methods.</p>`
        },
        {
          label: "🔢 Sum of odd numbers",
          html: `<p>Look at this magic: every perfect square is the <b>sum of the first odd numbers</b>!</p>
<ul>
<li>1 = 1 = 1²</li><li>1 + 3 = 4 = 2²</li><li>1 + 3 + 5 = 9 = 3²</li><li>1 + 3 + 5 + 7 = 16 = 4²</li>
</ul>
<p>So to find √n you can <b>subtract</b> the odd numbers 1, 3, 5, 7… from n and count how many subtractions it takes to reach 0. √25: 25−1−3−5−7−9 = 0 → <b>5</b> subtractions → √25 = 5. The reason can be seen in the drawing: each odd number is an «L» that makes the square bigger.</p>`,
          svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="260" fill="#fefce8"/>
<rect x="40" y="170" width="40" height="40" fill="#ef4444" stroke="#fff" stroke-width="2"/>
<rect x="80" y="170" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="80" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/><rect x="40" y="130" width="40" height="40" fill="#f97316" stroke="#fff" stroke-width="2"/>
<rect x="120" y="170" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="130" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="120" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="80" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/><rect x="40" y="90" width="40" height="40" fill="#22c55e" stroke="#fff" stroke-width="2"/>
<rect x="160" y="170" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="130" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="90" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="160" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="120" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="80" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/><rect x="40" y="50" width="40" height="40" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
<text x="260" y="80" font-size="20" fill="#ef4444" font-weight="bold">1</text>
<text x="290" y="80" font-size="20" fill="#f97316" font-weight="bold">+ 3</text>
<text x="345" y="80" font-size="20" fill="#16a34a" font-weight="bold">+ 5</text>
<text x="400" y="80" font-size="20" fill="#2563eb" font-weight="bold">+ 7</text>
<text x="455" y="80" font-size="20" fill="#1f2937" font-weight="bold">= 16</text>
<text x="260" y="130" font-size="20" fill="#1f2937">4 L-shaped «layers»</text>
<text x="260" y="170" font-size="22" fill="#1f2937" font-weight="bold">√16 = 4</text>
</svg>`
        },
        {
          label: "📐 Pythagoras' triangle",
          html: `<p>Square roots appear every time you use the <b>Pythagorean theorem</b>: the hypotenuse is the root of the sum of the squares of the legs. Move the sliders and watch: the area of the big square is a number, the side is its root.</p>`,
          widget: "pythagoras",
          options: {}
        }
      ]
    },
    {
      type: "conceptMap",
      title: "Square root map",
      nodes: [
        { id: "quad", label: "Squaring", x: 50, y: 6, color: "#2563eb", html: "b² = b × b.", why: "It is called «square» because b² is the <b>area of a square</b> with side b: the Greeks thought of numbers as geometric figures («square» numbers, «triangular» numbers…)." },
        { id: "radice", label: "Square root", x: 50, y: 28, color: "#dc2626", html: "√a = b if b² = a.", why: "It is the <b>inverse</b> operation of squaring. The name «root» comes from the Latin translation of the Arabic <i>jidhr</i> («root of a plant»), used by <b>al-Khwarizmi</b> in the 9th century: the number from which the square «grows»." },
        { id: "perfetti", label: "Perfect squares", x: 18, y: 50, color: "#16a34a", html: "1, 4, 9, 16, 25… whole-number root.", why: "They are perfect squares if in the factorisation all the exponents are even, because squaring doubles every exponent (property of powers)." },
        { id: "scomp", label: "Factorisation", x: 18, y: 76, color: "#0d9488", html: "Prime factors, exponents halved.", why: "It is based on the <b>fundamental theorem of arithmetic</b> (already in Euclid, Elements, Book IX): every number breaks down in only one way into prime factors." },
        { id: "approx", label: "Approximation", x: 50, y: 56, color: "#ea580c", html: "By trial, tables, calculator.", why: "When the root is not a whole number you look between two consecutive perfect squares and narrow the interval digit by digit. <b>Hero's</b> method (1st century AD) does it much faster." },
        { id: "irraz", label: "Irrational numbers", x: 82, y: 50, color: "#7c3aed", html: "√2, √3, √5…: infinite non-repeating decimals.", why: "The proof that √2 is not a fraction is attributed to the <b>Pythagoreans</b> and is found in Aristotle: if √2 = p/q in lowest terms, then p and q would both have to be even, which is impossible." },
        { id: "propr", label: "Properties", x: 82, y: 76, color: "#ca8a04", html: "√(a·b) = √a·√b; √(a/b) = √a/√b; NOT over a sum.", why: "They come from the properties of powers: (√a·√b)² = a·b. For the sum it does not work because (√a + √b)² = a + b + 2√a√b, there is an extra piece." },
        { id: "pitagora", label: "Pythagorean theorem", x: 50, y: 88, color: "#64748b", html: "Hypotenuse = √(c₁² + c₂²).", why: "The theorem links the areas of squares built on the sides: to go from areas back to lengths you need the root. That is where the Greeks first met √2." }
      ],
      edges: [
        ["quad", "radice", "inverse"],
        ["radice", "perfetti", "exact if"],
        ["perfetti", "scomp", "is calculated with"],
        ["radice", "approx", "otherwise"],
        ["approx", "irraz", "because they are"],
        ["radice", "propr", "has"],
        ["approx", "pitagora", "is used in"]
      ]
    },
    {
      type: "quiz",
      title: "Mini-quiz: approximating",
      questions: [
        { type: "mc", q: "Between which whole numbers does √30 lie?", options: ["4 and 5", "5 and 6", "6 and 7"], answer: 1, explain: "25 < 30 < 36, so 5 < √30 < 6." },
        { type: "mc", q: "√2 is…", options: ["a whole number", "a fraction", "an irrational number"], answer: 2, explain: "√2 = 1.41421… is infinite and non-repeating." },
        { type: "num", q: "√(9/25) = 3/? (write the denominator)", answer: 5, explain: "√9/√25 = 3/5." }
      ]
    },
    {
      type: "remember",
      title: "Remember",
      html: `<ul>
<li>√a = b means b² = a. The root is the inverse operation of the square.</li>
<li><b>Perfect square</b>: all the exponents of the prime factors are even.</li>
<li>Root with factorisation: <b>halve the exponents</b>.</li>
<li>Inexact roots are <b>approximated</b> (rounding down/up) and are irrational numbers.</li>
<li>√(a·b) = √a·√b, but √(a + b) ≠ √a + √b.</li>
</ul>`
    }
  ],
  glossary: [
    { t: "Square root", d: "A number that, when squared, gives the radicand." },
    { t: "Radicand", d: "The number under the radical sign." },
    { t: "Perfect square", d: "A natural number that is the square of another natural number." },
    { t: "Approximation rounding down", d: "A value a little smaller than the true one." },
    { t: "Approximation rounding up", d: "A value a little larger than the true one." },
    { t: "Irrational number", d: "An infinite non-repeating decimal that cannot be written as a fraction." },
    { t: "Inverse operation", d: "An operation that undoes the effect of another (root ↔ square)." }
  ],
  verifica: {
    pass: 0.7,
    questions: [
      { type: "num", q: "√225 = ?", answer: 15, explain: "15 × 15 = 225." },
      { type: "mc", q: "Which of these numbers is NOT a perfect square?", options: ["121", "169", "180"], answer: 2, explain: "180 = 2² × 3² × 5: the exponent of 5 is odd." },
      { type: "num", q: "Using the factorisation 2⁴ × 3² × 5², calculate the square root of this number.", answer: 60, explain: "I halve the exponents: 2² × 3 × 5 = 60." },
      { type: "tf", q: "√36 + √64 = √100.", answer: false, explain: "6 + 8 = 14, while √100 = 10." },
      { type: "mc", q: "√70 lies between…", options: ["7 and 8", "8 and 9", "9 and 10"], answer: 1, explain: "64 < 70 < 81." },
      { type: "num", q: "A square has an area of 81 cm². How long is its side?", answer: 9, unit: "cm", explain: "√81 = 9 cm." },
      { type: "num", q: "√(4 × 49) = ?", answer: 14, explain: "√4 × √49 = 2 × 7 = 14." },
      { type: "mc", q: "A perfect square can end in the digit…", options: ["7", "6", "8"], answer: 1, explain: "Squares end in 0, 1, 4, 5, 6, 9 (e.g. 16, 36)." },
      { type: "num", q: "Approximate √20 to within a tenth, rounding down.", answer: 4.4, tol: 0.001, explain: "4.4² = 19.36 and 4.5² = 20.25: √20 ≈ 4.4." },
      { type: "tf", q: "The square root of −9 does not exist (among the numbers you know).", answer: true, explain: "No squared number gives a negative result." },
      { type: "order", q: "Order from smallest to largest.", items: ["√10", "√16", "4.5", "√25"], explain: "3.16… < 4 < 4.5 < 5." }
    ],
    gen: [["sqrt", 3]]
  }
});
